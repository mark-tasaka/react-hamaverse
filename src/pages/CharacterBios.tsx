import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Common.css';
import './css/CharacterBios.css';

import snakeEyesImg from './img/portraits/snakeEyes.jpg';
import scarlettImg from './img/portraits/scarlett.jpg';
import softMasterImg from './img/portraits/softMaster.jpg';
import blindMasterImg from './img/portraits/blindMaster.jpg';
import billyImg from './img/portraits/billy.jpg';
import hardMasterImg from './img/portraits/hardMaster.jpg';
import stalkerImg from './img/portraits/stalker.jpg';
import jinxImg from './img/portraits/jinx.jpg';
import tyroneImg from './img/portraits/tyrone.jpg';
import seanImg from './img/portraits/sean.jpg';
import siobanImg from './img/portraits/sioban.jpg';
import stormShadowImg from './img/portraits/stormShadow.jpg';
import marinaImg from './img/portraits/marina.jpg';
import HawkImg from './img/portraits/hawk.jpg';
import WadeImg from './img/portraits/wade.jpg';
import OnihashiImg from './img/portraits/onihashi.jpg';
import ShooterImg from './img/portraits/shooter.jpg';
import GruntImg from './img/portraits/grunt.jpg';
import HundtkinderImg from './img/portraits/hundtkinder.jpg';
import LolaImg from './img/portraits/lola.jpg';
import WhiteClownImg from './img/portraits/whiteClown.jpg';
import OrlovskyImg from './img/portraits/orlovsky.jpg';
import PalePeonyImg from './img/portraits/palePeony.jpg';
import ZartanImg from './img/portraits/zartan.jpg';
import ClutchImg from './img/portraits/clutch.jpg';
import FredBrocaImg from './img/portraits/fredBroca.jpg';
import BaronessImg from './img/portraits/Baroness.jpg';
import RockRollImg from './img/portraits/RockRoll.jpg';
import MosievImg from './img/portraits/Mosiev.jpg';
import FireflyImg from './img/portraits/Firefly.jpg';
import CobraCommanderImg from './img/portraits/cobraCommander.jpg';
import ObakeObaasanImg from './img/portraits/obakeObaasan.jpg';
import ZaranaImg from './img/portraits/zarana.jpg';
import RoadPigImg from './img/portraits/roadPig.jpg';
import LadyJayImg from './img/portraits/ladyJay.jpg';
import FlintImg from './img/portraits/flint.jpg';
import Fred7Img from './img/portraits/fred7.jpg';
import CandyImg from './img/portraits/candy.jpg';
import RipCordImg from './img/portraits/ripCord.jpg';
import AustinImg from './img/portraits/austin.jpg';
import AppelImg from './img/portraits/appel.jpg';
import ScrapIronImg from './img/portraits/scrapIron.jpg';
import DeepSixImg from './img/portraits/deepSix.jpg';
import LeatherneckImg from './img/portraits/leatherneck2.jpg';
import FlaggImg from './img/portraits/flagg.jpg';
import ZapImg from './img/portraits/zap.jpg';
import BreakerImg from './img/portraits/breaker.jpg';
import RussImg from './img/portraits/russ.jpg';
import RaptorImg from './img/portraits/raptor.jpg';
import MinhImg from './img/portraits/minh.jpg';
import VenomImg from './img/portraits/venom.jpg';
import CrocMasterImg from './img/portraits/crocMaster.jpg';
import KwinnImg from './img/portraits/kwinn.jpg';
import MagdaImg from './img/portraits/magda.jpg';
import MetzImg from './img/portraits/metz.jpg';



interface Introduced {
  issueNumber: number;
  publisher: string;
  issueLabel: string;
  year: string;
  month: string;
}

interface Character {
  name: string;
  img: string;
  link: string;
  rank: number;
  faction: string;
  introduced: Introduced;
  secondaryFaction: string;
  status: string;
}

const CHARACTERS: Character[] = [
  {
    name: 'Snake Eyes',
    img: snakeEyesImg,
    link: '/character-bios/SnakeEyes',
    rank: 100,
    faction: 'G.I. Joe',
    secondaryFaction: 'Arashikage',
    status: 'Alive',
    introduced: {
      issueNumber: 1,
      publisher: 'Marvel',
      issueLabel: 'Issue 1',
      year: '1982',
      month: 'March',
    },
  },
  {
    name: 'Scarlett',
    img: scarlettImg,
    link: '/character-bios/Scarlett',
    rank: 99,
    faction: 'G.I. Joe',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 1,
      publisher: 'Marvel',
      issueLabel: 'Issue 1',
      year: '1982',
      month: 'March',
    },
  },
  {
    name: 'Soft Master',
    img: softMasterImg,
    link: '/character-bios/SoftMaster',
    rank: 45,
    faction: 'Arashikage',
    secondaryFaction: '',
    status: 'Dead',
    introduced: {
      issueNumber: 26,
      publisher: 'Marvel',
      issueLabel: 'Issue 26',
      year: '1984',
      month: 'August',
    },
  },
  {
    name: 'Blind Master',
    img: blindMasterImg,
    link: '/character-bios/BlindMaster',
    rank: 51,
    faction: 'Arashikage',
    secondaryFaction: '',
    status: 'Dead',
    introduced: {
      issueNumber: 59,
      publisher: 'Marvel',
      issueLabel: 'Issue 59',
      year: '1987',
      month: 'February',
    },
  },
  {
    name: 'Billy',
    img: billyImg,
    link: '/character-bios/Billy',
    rank: 69,
    faction: 'Arashikage',
    secondaryFaction: 'Civilian',
    status: 'Dead',
    introduced: {
      issueNumber: 10,
      publisher: 'Marvel',
      issueLabel: 'Issue 10',
      year: '1982',
      month: 'December',
    },
  },
  {
    name: 'Hard Master',
    img: hardMasterImg,
    link: '/character-bios/HardMaster',
    rank: 6,
    faction: 'Arashikage',
    secondaryFaction: '',
    status: 'Dead',
    introduced: {
      issueNumber: 26,
      publisher: 'Marvel',
      issueLabel: 'Issue 26',
      year: '1984',
      month: 'August',
    },
  },
  {
    name: 'Stalker',
    img: stalkerImg,
    link: '/character-bios/Stalker',
    rank: 97,
    faction: 'G.I. Joe',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 1,
      publisher: 'Marvel',
      issueLabel: 'Issue 1',
      year: '1982',
      month: 'March',
    },
  },
  {
    name: 'Jinx',
    img: jinxImg,
    link: '/character-bios/Jinx',
    rank: 70,
    faction: 'G.I. Joe',
    secondaryFaction: 'Arashikage',
    status: 'Alive',
    introduced: {
      issueNumber: 59,
      publisher: 'Marvel',
      issueLabel: 'Issue 59',
      year: '1987',
      month: 'February',
    },
  },
  {
    name: 'Tyrone',
    img: tyroneImg,
    link: '/character-bios/Tyrone',
    rank: 8,
    faction: 'Civilian',
    secondaryFaction: '',
    status: 'Dead',
    introduced: {
      issueNumber: 67,
      publisher: 'Marvel',
      issueLabel: 'Issue 67',
      year: '1988',
      month: 'January',
    },
  },
  {
    name: 'Sean Collins',
    img: seanImg,
    link: '/character-bios/SeanCollins',
    rank: 68,
    faction: 'G.I. Joe',
    secondaryFaction: 'Arashikage',
    status: 'Alive',
    introduced: {
      issueNumber: 30,
      publisher: 'Marvel',
      issueLabel: 'Issue 30',
      year: '1984',
      month: 'December',
    },
  },
  {
    name: 'Sioban O\'Hara',
    img: siobanImg,
    link: '/character-bios/Sioban',
    rank: 2,
    faction: 'Civilian',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 101,
      publisher: 'Marvel',
      issueLabel: 'Issue 101',
      year: '1990',
      month: 'June',
    },
  },
  {
    name: 'Storm Shadow',
    img: stormShadowImg,
    link: '/character-bios/StormShadow',
    rank: 98,
    faction: 'Arashikage',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 21,
      publisher: 'Marvel',
      issueLabel: 'Issue 21',
      year: '1984',
      month: 'August',
    },
  },
  {
    name: 'Marina',
    img: marinaImg,
    link: '/character-bios/Marina',
    rank: 7,
    faction: 'Civilian',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 104,
      publisher: 'Marvel',
      issueLabel: 'Issue 104',
      year: '1990',
      month: 'September',
    },
  },
  {
    name: 'Hawk',
    img: HawkImg,
    link: '/character-bios/Hawk',
    rank: 95,
    faction: 'G.I. Joe',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 1,
      publisher: 'Marvel',
      issueLabel: 'Issue 1',
      year: '1982',
      month: 'March',
    },
  },
  {
    name: 'Wade Collins',
    img: WadeImg,
    link: '/character-bios/Wade',
    rank: 60,
    faction: 'Civilian',
    secondaryFaction: '',
    status: 'Dead',
    introduced: {
      issueNumber: 31,
      publisher: 'Marvel',
      issueLabel: 'Issue 31',
      year: '1985',
      month: 'January',
    },
  },
  {
    name: 'Professor Onihashi',
    img: OnihashiImg,
    link: '/character-bios/Onihashi',
    rank: 3,
    faction: 'Arashikage',
    secondaryFaction: '',
    status: 'Dead',
    introduced: {
      issueNumber: 84,
      publisher: 'Marvel',
      issueLabel: 'Issue 84',
      year: '1989',
      month: 'March',
    },
  },
  {
    name: 'Shooter',
    img: ShooterImg,
    link: '/character-bios/Shooter',
    rank: 39,
    faction: 'G.I. Joe',
    secondaryFaction: '',
    status: 'Dead',
    introduced: {
      issueNumber: 155.1,
      publisher: 'Devils Due',
      issueLabel: 'GI Joe Declassified #1',
      year: '2006',
      month: 'June',
    },
  },
  {
    name: 'Grunt',
    img: GruntImg,
    link: '/character-bios/Grunt',
    rank: 55,
    faction: 'G.I. Joe',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 1,
      publisher: 'Marvel',
      issueLabel: 'Issue 1',
      year: '1982',
      month: 'March',
    },
  },
  {
    name: 'Dr. Hundtkinder',
    img: HundtkinderImg,
    link: '/character-bios/Hundtkinder',
    rank: 2,
    faction: 'Civilian',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 23,
      publisher: 'Marvel',
      issueLabel: 'Issue 23',
      year: '1984',
      month: 'May',
    },
  },
  {
    name: 'Lola Graves',
    img: LolaImg,
    link: '/character-bios/Lola',
    rank: 10,
    faction: 'Civilian',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 56,
      publisher: 'Marvel',
      issueLabel: 'Issue 56',
      year: '1987',
      month: 'February',
    },
  },
  {
    name: 'White Clown',
    img: WhiteClownImg,
    link: '/character-bios/WhiteClown',
    rank: 8,
    faction: 'Civilian',
    secondaryFaction: '',
    status: 'Dead',
    introduced: {
      issueNumber: 66,
      publisher: 'Marvel',
      issueLabel: 'Issue 66',
      year: '1987',
      month: 'December',
    },
  },
  {
    name: 'Orlovsky',
    img: OrlovskyImg,
    link: '/character-bios/Orlovsky',
    rank: 6,
    faction: 'Civilian',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 66,
      publisher: 'Marvel',
      issueLabel: 'Issue 66',
      year: '1987',
      month: 'December',
    },
  },
  {
    name: 'Pale Peony',
    img: PalePeonyImg,
    link: '/character-bios/PalePeony',
    rank: 55,
    faction: 'Arashikage',
    secondaryFaction: '',
    status: 'Dead',
    introduced: {
      issueNumber: 155.3,
      publisher: 'Devils Due',
      issueLabel: 'Storm Shadow #1',
      year: '2007',
      month: 'May',
    },
  },
  {
    name: 'Zartan',
    img: ZartanImg,
    link: '/character-bios/Zartan',
    rank: 80,
    faction: 'Dreadnok',
    secondaryFaction: 'Enemy',
    status: 'Alive',
    introduced: {
      issueNumber: 25,
      publisher: 'Marvel',
      issueLabel: 'Issue 25',
      year: '1984',
      month: 'July',
    },
  },
  {
    name: 'Clutch',
    img: ClutchImg,
    link: '/character-bios/Clutch',
    rank: 58,
    faction: 'G.I. Joe',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 1,
      publisher: 'Marvel',
      issueLabel: 'Issue 1',
      year: '1982',
      month: 'March',
    },
  },
  {
    name: 'Fred Broca',
    img: FredBrocaImg,
    link: '/character-bios/FredBroca',
    rank: 3,
    faction: 'Cobra',
    secondaryFaction: 'Enemy',
    status: 'Dead',
    introduced: {
      issueNumber: 30,
      publisher: 'Marvel',
      issueLabel: 'Issue 30',
      year: '1984',
      month: 'December',
    },
  },
  {
    name: 'Baroness',
    img: BaronessImg,
    link: '/character-bios/Baroness',
    rank: 82,
    faction: 'Cobra',
    secondaryFaction: 'Enemy',
    status: 'Alive',
    introduced: {
      issueNumber: 1,
      publisher: 'Marvel',
      issueLabel: 'Issue 1',
      year: '1982',
      month: 'March',
    },
  },
  {
    name: 'Rock \'n Roll',
    img: RockRollImg,
    link: '/character-bios/RockRoll',
    rank: 58,
    faction: 'G.I. Joe',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 1,
      publisher: 'Marvel',
      issueLabel: 'Issue 1',
      year: '1982',
      month: 'March',
    },
  },
  {
    name: 'Sgt. Mosiev',
    img: MosievImg,
    link: '/character-bios/Mosiev',
    rank: 2,
    faction: 'Borovian Army',
    secondaryFaction: 'Enemy',
    status: 'Dead',
    introduced: {
      issueNumber: 63,
      publisher: 'Marvel',
      issueLabel: 'Issue 63',
      year: '1987',
      month: 'September',
    },
  },
  {
    name: 'Firefly',
    img: FireflyImg,
    link: '/character-bios/Firefly',
    rank: 52,
    faction: 'Cobra',
    secondaryFaction: 'Enemy',
    status: 'Alive',
    introduced: {
      issueNumber: 24,
      publisher: 'Marvel',
      issueLabel: 'Issue 24',
      year: '1984',
      month: 'June',
    },
  },
  {
    name: 'Cobra Commander',
    img: CobraCommanderImg,
    link: '/character-bios/CobraCommander',
    rank: 90,
    faction: 'Cobra',
    secondaryFaction: 'Enemy',
    status: 'Alive',
    introduced: {
      issueNumber: 1,
      publisher: 'Marvel',
      issueLabel: 'Issue 1',
      year: '1982',
      month: 'March',
    },
  },
  {
    name: 'Obake Obaasan',
    img: ObakeObaasanImg,
    link: '/character-bios/ObakeObaasan',
    rank: 46,
    faction: 'Arashikage',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 155.5,
      publisher: 'Devils Due',
      issueLabel: 'Storm Shadow #3',
      year: '2007',
      month: 'July',
    },
  },
  {
    name: 'Zarana',
    img: ZaranaImg,
    link: '/character-bios/Zarana',
    rank: 60,
    faction: 'Dreadnok',
    secondaryFaction: 'Enemy',
    status: 'Alive',
    introduced: {
      issueNumber: 49,
      publisher: 'Marvel',
      issueLabel: 'Issue 49',
      year: '1986',
      month: 'July',
    },
  },
  {
    name: 'Road Pig',
    img: RoadPigImg,
    link: '/character-bios/RoadPig',
    rank: 59,
    faction: 'Dreadnok',
    secondaryFaction: 'Enemy',
    status: 'Alive',
    introduced: {
      issueNumber: 83,
      publisher: 'Marvel',
      issueLabel: 'Issue 83',
      year: '1989',
      month: 'February',
    },
  },
  {
    name: 'Lady Jaye',
    img: LadyJayImg,
    link: '/character-bios/LadyJay',
    rank: 80,
    faction: 'G.I. Joe',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 32,
      publisher: 'Marvel',
      issueLabel: 'Issue 32',
      year: '1985',
      month: 'February',
    },
  },
  {
    name: 'Flint',
    img: FlintImg,
    link: '/character-bios/Flint',
    rank: 80,
    faction: 'G.I. Joe',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 37,
      publisher: 'Marvel',
      issueLabel: 'Issue 37',
      year: '1985',
      month: 'July',
    },
  },
  {
    name: 'Fred VII',
    img: Fred7Img,
    link: '/character-bios/Fred7',
    rank: 40,
    faction: 'Cobra',
    secondaryFaction: 'Enemy',
    status: 'Dead',
    introduced: {
      issueNumber: 58,
      publisher: 'Marvel',
      issueLabel: 'Issue 58',
      year: '1987',
      month: 'April',
    },
  },
  {
    name: 'Candy Appel',
    img: CandyImg,
    link: '/character-bios/Candy',
    rank: 9,
    faction: 'Civilian',
    secondaryFaction: '',
    status: 'Dead',
    introduced: {
      issueNumber: 33,
      publisher: 'Marvel',
      issueLabel: 'Issue 33',
      year: '1985',
      month: 'March',
    },
  },
  {
    name: 'Rip Cord',
    img: RipCordImg,
    link: '/character-bios/RipCord',
    rank: 40,
    faction: 'G.I. Joe',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 32,
      publisher: 'Marvel',
      issueLabel: 'Issue 32',
      year: '1985',
      month: 'February',
    },
  },
  {
    name: 'General Austin',
    img: AustinImg,
    link: '/character-bios/Austin',
    rank: 5,
    faction: 'G.I. Joe',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 1,
      publisher: 'Marvel',
      issueLabel: 'Issue 1',
      year: '1982',
      month: 'March',
    },
  },
  {
    name: 'Professor Appel',
    img: AppelImg,
    link: '/character-bios/Appel',
    rank: 5,
    faction: 'Cobra',
    secondaryFaction: 'Enemy',
    status: 'Dead',
    introduced: {
      issueNumber: 40,
      publisher: 'Marvel',
      issueLabel: 'Issue 40',
      year: '1985',
      month: 'October',
    },
  },
  {
    name: 'Scrap Iron',
    img: ScrapIronImg,
    link: '/character-bios/ScrapIron',
    rank: 6,
    faction: 'Cobra',
    secondaryFaction: 'Enemy',
    status: 'Alive',
    introduced: {
      issueNumber: 43,
      publisher: 'Marvel',
      issueLabel: 'Issue 43',
      year: '1986',
      month: 'January',
    },
  },
  {
    name: 'Deep Six',
    img: DeepSixImg,
    link: '/character-bios/DeepSix',
    rank: 6,
    faction: 'G.I. Joe',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 25,
      publisher: 'Marvel',
      issueLabel: 'Issue 25',
      year: '1984',
      month: 'July',
    },
  },
  {
    name: 'Leatherneck',
    img: LeatherneckImg,
    link: '/character-bios/Leatherneck',
    rank: 7,
    faction: 'G.I. Joe',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 49,
      publisher: 'Marvel',
      issueLabel: 'Issue 49',
      year: '1986',
      month: 'July',
    },
  },
  {
    name: 'General Flagg',
    img: FlaggImg,
    link: '/character-bios/Flagg',
    rank: 40,
    faction: 'G.I. Joe',
    secondaryFaction: '',
    status: 'Dead',
    introduced: {
      issueNumber: 1,
      publisher: 'Marvel',
      issueLabel: 'Issue 1',
      year: '1982',
      month: 'March',
    },
  },
  {
    name: 'Zap',
    img: ZapImg,
    link: '/character-bios/Zap',
    rank: 10,
    faction: 'G.I. Joe',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 1,
      publisher: 'Marvel',
      issueLabel: 'Issue 1',
      year: '1982',
      month: 'March',
    },
  },
  {
    name: 'Breaker',
    img: BreakerImg,
    link: '/character-bios/Breaker',
    rank: 11,
    faction: 'G.I. Joe',
    secondaryFaction: '',
    status: 'Dead',
    introduced: {
      issueNumber: 1,
      publisher: 'Marvel',
      issueLabel: 'Issue 1',
      year: '1982',
      month: 'March',
    },
  },
  {
    name: 'Russ',
    img: RussImg,
    link: '/character-bios/Russ',
    rank: 1,
    faction: 'Civilian',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 100,
      publisher: 'Marvel',
      issueLabel: 'Issue 100',
      year: '1990',
      month: 'May',
    },
  },
  {
    name: 'Raptor',
    img: RaptorImg,
    link: '/character-bios/Raptor',
    rank: 5,
    faction: 'Cobra',
    secondaryFaction: 'Enemy',
    status: 'Dead',
    introduced: {
      issueNumber: 59,
      publisher: 'Marvel',
      issueLabel: 'Issue 59',
      year: '1987',
      month: 'May',
    },
  },
  {
    name: 'Captain Minh',
    img: MinhImg,
    link: '/character-bios/Minh',
    rank: 2,
    faction: 'Civilian',
    secondaryFaction: '',
    status: 'Dead',
    introduced: {
      issueNumber: 63,
      publisher: 'Marvel',
      issueLabel: 'Issue 63',
      year: '1987',
      month: 'September',
    },
  },
  {
    name: 'Dr. Venom',
    img: VenomImg,
    link: '/character-bios/Venom',
    rank: 10,
    faction: 'Cobra',
    secondaryFaction: 'Enemy',
    status: 'Dead',
    introduced: {
      issueNumber: 10,
      publisher: 'Marvel',
      issueLabel: 'Issue 10',
      year: '1982',
      month: 'December',
    },
  },
  {
    name: 'Croc Master',
    img: CrocMasterImg,
    link: '/character-bios/CrocMaster',
    rank: 1,
    faction: 'Cobra',
    secondaryFaction: 'Enemy',
    status: 'Dead',
    introduced: {
      issueNumber: 72,
      publisher: 'Marvel',
      issueLabel: 'Issue 72',
      year: '1988',
      month: 'June',
    },
  },
  {
    name: 'Kwinn',
    img: KwinnImg,
    link: '/character-bios/Kwinn',
    rank: 10,
    faction: 'Mercenary',
    secondaryFaction: 'Civilian',
    status: 'Dead',
    introduced: {
      issueNumber: 2,
      publisher: 'Marvel',
      issueLabel: 'Issue 2',
      year: '1982',
      month: 'April',
    },
  },
  {
    name: 'Magda',
    img: MagdaImg,
    link: '/character-bios/Magda',
    rank: 2,
    faction: 'Civilian',
    secondaryFaction: '',
    status: 'Dead',
    introduced: {
      issueNumber: 106,
      publisher: 'Marvel',
      issueLabel: 'Issue 106',
      year: '1990',
      month: 'November',
    },
  },
  {
    name: 'Metz',
    img: MetzImg,
    link: '/character-bios/Metz',
    rank: 2,
    faction: 'Civilian',
    secondaryFaction: '',
    status: 'Alive',
    introduced: {
      issueNumber: 104,
      publisher: 'Marvel',
      issueLabel: 'Issue 104',
      year: '1990',
      month: 'September',
    },
  },
];

type SortField = 'rank' | 'issueNumber' | 'name';
type SortDir   = 'desc' | 'asc';
type FactionFilter = 'all' | 'G.I. Joe' |'Enemy' | 'Arashikage' | 'Civilian';
type StatusFilter = 'all' | 'Alive' | 'Dead';

const SearchIcon: React.FC = () => (
  <svg
    className="character-search-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle
      cx="10.5"
      cy="10.5"
      r="6.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="15.5"
      y1="15.5"
      x2="21"
      y2="21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CharacterBios: React.FC = () => {
  const [sortField, setSortField] = useState<SortField>('rank');
  const [sortDir,   setSortDir]   = useState<SortDir>('desc');
  const [filter,    setFilter]    = useState<FactionFilter>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [query,     setQuery]     = useState('');

  const getSortValue = (c: Character, field: SortField): number | string => {
    switch (field) {
      case 'rank':        return c.rank;
      case 'issueNumber': return c.introduced.issueNumber;
      case 'name':        return c.name;
      default:            return '';
    }
  };

  const filteredCharacters = CHARACTERS.filter(c => {
    const matchesFilter =
      filter === 'all' || c.faction === filter || c.secondaryFaction === filter;
    const matchesStatus = statusFilter === 'all' || c.status === statusFilter;
    const matchesSearch = c.name.toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesStatus && matchesSearch;
  });

  const sortedCharacters = [...filteredCharacters].sort((a, b) => {
    const valA = getSortValue(a, sortField);
    const valB = getSortValue(b, sortField);

    if (typeof valA === 'number' && typeof valB === 'number') {
      return sortDir === 'desc' ? valB - valA : valA - valB;
    }

    const cmp = String(valA).localeCompare(String(valB));
    return sortDir === 'desc' ? -cmp : cmp;
  });

  return (
    <main className="character-bios-page">
      <h1 className="character-bios-title">Character Biographies</h1>

      {/* ── Filter buttons ── */}
      <div className="character-filter-wrapper">
        {(['all', 'G.I. Joe', 'Enemy', 'Arashikage', 'Civilian'] as const).map(f => (
          <button
            key={f}
            className={`character-filter-btn${
              filter === f ? ' character-filter-btn--active' : ''
            }`}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'All' : f === 'Enemy' ? 'The Enemy' : f}
          </button>
        ))}
      </div>

      {/* ── Sort controls ── */}
      <div className="character-sort-wrapper">
        <label htmlFor="character-sort" className="character-sort-label">Sort by</label>
        <select
          id="character-sort"
          className="character-sort-select"
          value={sortField}
          onChange={e => setSortField(e.target.value as SortField)}
        >
          <option value="rank">Prominence</option>
          <option value="issueNumber">First Appearance</option>
          <option value="name">Name</option>
        </select>
        <button
          className="character-sort-dir"
          onClick={() => setSortDir(d => d === 'desc' ? 'asc' : 'desc')}
          aria-label={sortDir === 'desc' ? 'Sort descending' : 'Sort ascending'}
          title={sortDir === 'desc' ? 'Sort descending' : 'Sort ascending'}
        >
          {sortDir === 'desc' ? '↓ Desc' : '↑ Asc'}
        </button>

        <span className="character-sort-break" aria-hidden="true"></span>

        <label htmlFor="character-status" className="character-sort-label">Status</label>
        <select
          id="character-status"
          className="character-sort-select"
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value as StatusFilter)}
        >
          <option value="all">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Fallen</option>
        </select>
      </div>

      {/* ── Search bar ── */}
      <div className="character-search-wrapper">
        <label htmlFor="character-search" className="sr-only">Search characters</label>
        <div className="character-search-box">
          <SearchIcon />
          <input
            id="character-search"
            type="search"
            className="character-search-input"
            placeholder="Search by name…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {query && (
            <button
              className="character-search-clear"
              onClick={() => setQuery('')}
              aria-label="Clear search"
            >
              &#x2715;
            </button>
          )}
        </div>
        {query && (
          <p className="character-search-count">
            {sortedCharacters.length} result{sortedCharacters.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
          </p>
        )}
      </div>

      <div className="character-bios-grid">
        {sortedCharacters.length > 0 ? (
          sortedCharacters.map(({ name, img, link, faction, introduced }) => (
            <article key={name} className="character-card">
              <Link to={link} className="character-img-link">
                <img src={img} alt={name} className="character-img" />
              </Link>
              <div className="character-card-body">
                <Link to={link} className="character-name-link">
                  <h2 className="character-name">{name}</h2>
                </Link>
                <p className="character-meta">
                  <span className="character-faction">{faction}</span>
                  <span className="character-meta-sep"> · </span>
                  <span className="character-first-appearance">{introduced.issueLabel}</span>
                </p>
              </div>
            </article>
          ))
        ) : (
          <p className="character-no-results">No characters match your search.</p>
        )}
      </div>
    </main>
  );
};

export default CharacterBios;
