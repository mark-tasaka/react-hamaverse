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
    rank: 98,
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
    rank: 50,
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
      issueNumber: 56,
      publisher: 'Marvel',
      issueLabel: 'Issue 56',
      year: '1987',
      month: 'February',
    },
  },
  {
    name: 'Billy',
    img: billyImg,
    link: '/character-bios/Billy',
    rank: 80,
    faction: 'G.I. Joe',
    secondaryFaction: 'Arashikage',
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
    rank: 40,
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
  }
];

type SortField = 'rank' | 'issueNumber' | 'name';
type SortDir   = 'desc' | 'asc';

const CharacterBios: React.FC = () => {
  const [sortField, setSortField] = useState<SortField>('rank');
  const [sortDir,   setSortDir]   = useState<SortDir>('desc');

  const getSortValue = (c: Character, field: SortField): number | string => {
    switch (field) {
      case 'rank':        return c.rank;
      case 'issueNumber': return c.introduced.issueNumber;
      case 'name':        return c.name;
      default:            return '';
    }
  };

  const sortedCharacters = [...CHARACTERS].sort((a, b) => {
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
      </div>

      <div className="character-bios-grid">
        {sortedCharacters.map(({ name, img, link, faction, introduced }) => (
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
        ))}
      </div>
    </main>
  );
};

export default CharacterBios;