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
    secondaryFaction: '',
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
    rank: 30,
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
    secondaryFaction: 'G.I. Joe',
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
    rank: 5,
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
    rank: 50,
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
];

type SortField = 'rank' | 'issueNumber' | 'name';
type SortDir   = 'desc' | 'asc';
type FactionFilter = 'all' | 'G.I. Joe' | 'Arashikage' | 'Civilian';
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
        {(['all', 'G.I. Joe', 'Arashikage', 'Civilian'] as const).map(f => (
          <button
            key={f}
            className={`character-filter-btn${
              filter === f ? ' character-filter-btn--active' : ''
            }`}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'All' : f}
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
