import type { Character } from '@/types';
import { Size } from '@/types/base';

// ---- Token Types ----

type Token =
  | { type: 'number'; value: number }
  | { type: 'identifier'; value: string }
  | { type: 'operator'; value: string }
  | { type: 'lparen' }
  | { type: 'rparen' }
  | { type: 'comma' };

// ---- AST Node Types ----

type ASTNode =
  | { type: 'number'; value: number }
  | { type: 'variable'; name: string }
  | { type: 'binary'; op: string; left: ASTNode; right: ASTNode }
  | { type: 'unary'; op: string; operand: ASTNode }
  | { type: 'call'; name: string; args: ASTNode[] };

// ---- Formula Context ----

export interface FormulaContext {
  BAB: number;
  level: number;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  strMod: number;
  dexMod: number;
  conMod: number;
  intMod: number;
  wisMod: number;
  chaMod: number;
  size: number;
  [key: string]: number;
}

// ---- Allowed Functions ----

const FUNCTIONS: Record<string, (...args: number[]) => number> = {
  floor: Math.floor,
  ceil: Math.ceil,
  round: Math.round,
  abs: Math.abs,
  max: (...args: number[]) => Math.max(...args),
  min: (...args: number[]) => Math.min(...args),
};

// ---- Size Modifier Lookup ----

const SIZE_MODIFIERS: Record<string, number> = {
  [Size.Fine]: 8,
  [Size.Diminutive]: 4,
  [Size.Tiny]: 2,
  [Size.Small]: 1,
  [Size.Medium]: 0,
  [Size.Large]: -1,
  [Size.Huge]: -2,
  [Size.Gargantuan]: -4,
  [Size.Colossal]: -8,
};

export class FormulaService {
  /**
   * Evaluate a formula string against a context of character variables.
   *
   * Supported syntax:
   *   - Numbers: 1, 2.5, -3
   *   - Variables: BAB, level, strMod, dexMod, etc.
   *   - Operators: +, -, *, /
   *   - Parentheses: (BAB + 1) * 2
   *   - Functions: floor(BAB/4), max(3, level), min(dexMod, 5)
   */
  static evaluate(formula: string, context: FormulaContext): number {
    const tokens = this.tokenize(formula);
    const parser = { tokens, pos: 0 };
    const ast = this.parseExpression(parser);
    if (parser.pos < parser.tokens.length) {
      throw new Error(`Unexpected token at position ${parser.pos}`);
    }
    return this.evaluateNode(ast, context);
  }

  /**
   * Resolve an Effect value: if number, return as-is; if string, evaluate formula.
   */
  static resolveValue(value: number | string, context: FormulaContext): number {
    if (typeof value === 'number') return value;
    return this.evaluate(value, context);
  }

  /**
   * Build a FormulaContext from a Character object.
   */
  static buildContext(character: Character): FormulaContext {
    const s = character.abilityScores;
    return {
      BAB: character.classes.baseAttackBonus[0] ?? 0,
      level: character.classes.totalLevel,
      str: s.str.total,
      dex: s.dex.total,
      con: s.con.total,
      int: s.int.total,
      wis: s.wis.total,
      cha: s.cha.total,
      strMod: s.str.modifier,
      dexMod: s.dex.modifier,
      conMod: s.con.modifier,
      intMod: s.int.modifier,
      wisMod: s.wis.modifier,
      chaMod: s.cha.modifier,
      size: this.getSizeModifier(character.info.size),
    };
  }

  /**
   * Get the size modifier for attack/AC from a Size enum value.
   */
  static getSizeModifier(size: Size): number {
    return SIZE_MODIFIERS[size] ?? 0;
  }

  // ---- Tokenizer ----

  private static tokenize(input: string): Token[] {
    const tokens: Token[] = [];
    let i = 0;

    while (i < input.length) {
      const ch = input[i];

      // Skip whitespace
      if (ch === ' ' || ch === '\t' || ch === '\n') {
        i++;
        continue;
      }

      // Numbers (including decimals)
      if (ch >= '0' && ch <= '9') {
        let num = '';
        while (i < input.length && ((input[i] >= '0' && input[i] <= '9') || input[i] === '.')) {
          num += input[i];
          i++;
        }
        tokens.push({ type: 'number', value: parseFloat(num) });
        continue;
      }

      // Identifiers (variables and function names)
      if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || ch === '_') {
        let id = '';
        while (
          i < input.length &&
          ((input[i] >= 'a' && input[i] <= 'z') ||
            (input[i] >= 'A' && input[i] <= 'Z') ||
            (input[i] >= '0' && input[i] <= '9') ||
            input[i] === '_' ||
            input[i] === '.')
        ) {
          id += input[i];
          i++;
        }
        tokens.push({ type: 'identifier', value: id });
        continue;
      }

      // Operators
      if (ch === '+' || ch === '-' || ch === '*' || ch === '/') {
        tokens.push({ type: 'operator', value: ch });
        i++;
        continue;
      }

      // Parentheses
      if (ch === '(') {
        tokens.push({ type: 'lparen' });
        i++;
        continue;
      }
      if (ch === ')') {
        tokens.push({ type: 'rparen' });
        i++;
        continue;
      }

      // Comma
      if (ch === ',') {
        tokens.push({ type: 'comma' });
        i++;
        continue;
      }

      throw new Error(`Unexpected character '${ch}' at position ${i}`);
    }

    return tokens;
  }

  // ---- Recursive Descent Parser ----

  private static peek(parser: { tokens: Token[]; pos: number }): Token | null {
    return parser.pos < parser.tokens.length ? parser.tokens[parser.pos] : null;
  }

  private static consume(parser: { tokens: Token[]; pos: number }): Token {
    if (parser.pos >= parser.tokens.length) {
      throw new Error('Unexpected end of expression');
    }
    return parser.tokens[parser.pos++];
  }

  // Expression = Term (('+' | '-') Term)*
  private static parseExpression(parser: { tokens: Token[]; pos: number }): ASTNode {
    let left = this.parseTerm(parser);

    while (true) {
      const tok = this.peek(parser);
      if (tok?.type === 'operator' && (tok.value === '+' || tok.value === '-')) {
        this.consume(parser);
        const right = this.parseTerm(parser);
        left = { type: 'binary', op: tok.value, left, right };
      } else {
        break;
      }
    }

    return left;
  }

  // Term = Unary (('*' | '/') Unary)*
  private static parseTerm(parser: { tokens: Token[]; pos: number }): ASTNode {
    let left = this.parseUnary(parser);

    while (true) {
      const tok = this.peek(parser);
      if (tok?.type === 'operator' && (tok.value === '*' || tok.value === '/')) {
        this.consume(parser);
        const right = this.parseUnary(parser);
        left = { type: 'binary', op: tok.value, left, right };
      } else {
        break;
      }
    }

    return left;
  }

  // Unary = ('-' | '+') Unary | Primary
  private static parseUnary(parser: { tokens: Token[]; pos: number }): ASTNode {
    const tok = this.peek(parser);
    if (tok?.type === 'operator' && (tok.value === '-' || tok.value === '+')) {
      this.consume(parser);
      const operand = this.parseUnary(parser);
      if (tok.value === '-') {
        return { type: 'unary', op: '-', operand };
      }
      return operand;
    }
    return this.parsePrimary(parser);
  }

  // Primary = Number | Identifier | FunctionCall | '(' Expression ')'
  private static parsePrimary(parser: { tokens: Token[]; pos: number }): ASTNode {
    const tok = this.peek(parser);

    if (!tok) {
      throw new Error('Unexpected end of expression');
    }

    // Number literal
    if (tok.type === 'number') {
      this.consume(parser);
      return { type: 'number', value: tok.value };
    }

    // Identifier (variable or function call)
    if (tok.type === 'identifier') {
      this.consume(parser);
      const name = tok.value;

      // Check for function call
      const next = this.peek(parser);
      if (next?.type === 'lparen' && name in FUNCTIONS) {
        this.consume(parser); // consume '('
        const args: ASTNode[] = [];

        // Parse arguments
        const firstArg = this.peek(parser);
        if (firstArg?.type !== 'rparen') {
          args.push(this.parseExpression(parser));
          while (this.peek(parser)?.type === 'comma') {
            this.consume(parser); // consume ','
            args.push(this.parseExpression(parser));
          }
        }

        const rparen = this.consume(parser);
        if (rparen.type !== 'rparen') {
          throw new Error('Expected closing parenthesis');
        }

        return { type: 'call', name, args };
      }

      // Variable reference
      return { type: 'variable', name };
    }

    // Parenthesized expression
    if (tok.type === 'lparen') {
      this.consume(parser);
      const expr = this.parseExpression(parser);
      const rparen = this.consume(parser);
      if (rparen.type !== 'rparen') {
        throw new Error('Expected closing parenthesis');
      }
      return expr;
    }

    throw new Error(`Unexpected token: ${JSON.stringify(tok)}`);
  }

  // ---- AST Evaluator ----

  private static evaluateNode(node: ASTNode, context: FormulaContext): number {
    switch (node.type) {
      case 'number':
        return node.value;

      case 'variable': {
        const val = context[node.name];
        if (val === undefined) {
          throw new Error(`Unknown variable: ${node.name}`);
        }
        return val;
      }

      case 'binary': {
        const left = this.evaluateNode(node.left, context);
        const right = this.evaluateNode(node.right, context);
        switch (node.op) {
          case '+':
            return left + right;
          case '-':
            return left - right;
          case '*':
            return left * right;
          case '/':
            if (right === 0) return 0;
            return left / right;
          default:
            throw new Error(`Unknown operator: ${node.op}`);
        }
      }

      case 'unary':
        if (node.op === '-') {
          return -this.evaluateNode(node.operand, context);
        }
        throw new Error(`Unknown unary operator: ${node.op}`);

      case 'call': {
        const fn = FUNCTIONS[node.name];
        if (!fn) {
          throw new Error(`Unknown function: ${node.name}`);
        }
        const args = node.args.map((arg) => this.evaluateNode(arg, context));
        return fn(...args);
      }
    }
  }
}
