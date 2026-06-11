// Batch 008 | first: 'Drow Noble' | last: 'Reptoid' | races: 11 | traits: 0
// Source: d20pfsrd.com (with Archives of Nethys cross-check for Drow Noble).
// Every race in this batch was checked and has NO official Paizo alternate racial
// traits. These are monstrous/rare races whose pages list only standard racial
// traits. Notes per race:
//   Drow Noble    -> No dedicated playable race page; the "Drow" ARTs on d20pfsrd
//                    belong to the separate playable Drow race (arg-drow), NOT to
//                    Drow Noble. AoN MonsterDisplay confirms Drow Noble is an NPC
//                    stat block with no race-build ARTs. -> []
//                    Checked: /races/other-races/featured-races/arg-drow (Drow, not Noble),
//                    /races/other-races/more-races/very-powerful-races-31-rp/ (no Drow Noble entry),
//                    aonprd.com/MonsterDisplay.aspx?ItemName=Drow%20Noble
//   Drider        -> .../very-powerful-races-31-rp/drider-35-rp  : no ART section
//   Gargoyle      -> .../very-powerful-races-31-rp/gargoyle-36-rp : no ART section
//   Astomoi       -> .../race-points-unknown/astomoi/            : no ART section
//   Caligni       -> .../race-points-unknown/caligni/            : no ART section
//   Deep One Hybrid -> .../race-points-unknown/deep-one-hybrid/  : no ART section
//   Ganzi         -> .../race-points-unknown/ganzi/  : "Oddities" are options, not ARTs
//   Kuru          -> .../race-points-unknown/kuru-rp/            : no ART section
//   Munavri       -> .../race-points-unknown/munavri/           : no ART section
//   Orang-Pendak  -> .../race-points-unknown/orang-pendak/      : no ART section
//   Reptoid       -> .../race-points-unknown/reptoid/           : no ART section
import { AlternativeRacialTraitData } from '../types';

export const drowNobleAltTraits: AlternativeRacialTraitData[] = [];
export const driderAltTraits: AlternativeRacialTraitData[] = [];
export const gargoyleAltTraits: AlternativeRacialTraitData[] = [];
export const astomoiAltTraits: AlternativeRacialTraitData[] = [];
export const caligniAltTraits: AlternativeRacialTraitData[] = [];
export const deepOneHybridAltTraits: AlternativeRacialTraitData[] = [];
export const ganziAltTraits: AlternativeRacialTraitData[] = [];
export const kuruAltTraits: AlternativeRacialTraitData[] = [];
export const munavriAltTraits: AlternativeRacialTraitData[] = [];
export const orangPendakAltTraits: AlternativeRacialTraitData[] = [];
export const reptoidAltTraits: AlternativeRacialTraitData[] = [];

export const batch_008: Record<string, AlternativeRacialTraitData[]> = {
  'Drow Noble': drowNobleAltTraits,
  Drider: driderAltTraits,
  Gargoyle: gargoyleAltTraits,
  Astomoi: astomoiAltTraits,
  Caligni: caligniAltTraits,
  'Deep One Hybrid': deepOneHybridAltTraits,
  Ganzi: ganziAltTraits,
  Kuru: kuruAltTraits,
  Munavri: munavriAltTraits,
  'Orang-Pendak': orangPendakAltTraits,
  Reptoid: reptoidAltTraits,
};
