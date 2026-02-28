const sharedConfig = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@data/(.*)$': '<rootDir>/src/data/$1',
    '\\.(ttf|otf|png|jpg|jpeg|gif|svg)$': '<rootDir>/__tests__/mocks/assetMock.ts',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(expo|@expo|expo-.*|@react-native|react-native|nativewind|react-redux)/)',
  ],
};

module.exports = {
  projects: [
    // Service & Store tests — fast, ts-jest, node environment
    {
      ...sharedConfig,
      displayName: 'services',
      preset: 'ts-jest',
      testEnvironment: 'node',
      roots: ['<rootDir>/__tests__'],
      testMatch: [
        '<rootDir>/__tests__/services/**/*.test.ts',
        '<rootDir>/__tests__/store/**/*.test.ts',
        '<rootDir>/__tests__/integration/**/*.test.ts',
      ],
      setupFiles: ['<rootDir>/jest.setup.ts'],
    },
    // Component tests — ts-jest with React Native mocks
    {
      ...sharedConfig,
      displayName: 'components',
      testEnvironment: 'node',
      roots: ['<rootDir>/__tests__'],
      testMatch: ['<rootDir>/__tests__/components/**/*.test.tsx'],
      transform: {
        '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
      },
      setupFiles: ['<rootDir>/jest.setup.ts', '<rootDir>/jest.setup.components.ts'],
    },
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/types/**',
    '!src/**/index.ts',
  ],
};
