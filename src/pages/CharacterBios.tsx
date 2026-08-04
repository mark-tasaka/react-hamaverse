import React from 'react';
import { Link } from 'react-router-dom';
import './css/Common.css';
import './css/CharacterBios.css';

import snakeEyesImg from './img/portraits/snakeEyes.jpg';
import scarlettImg from './img/portraits/scarlett.jpg';
import softMasterImg from './img/portraits/softMaster.jpg';
import blindMasterImg from './img/portraits/blindMaster.jpg';

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
}

const CHARACTERS: Character[] = [
  {
    name: 'Snake Eyes',
    img: snakeEyesImg,
    link: '/character-bios/snake-eyes',
    rank: 100,
    faction: 'G.I. Joe',
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
    link: '/character-bios/scarlett',
    rank: 98,
    faction: 'G.I. Joe',
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
    link: '/character-bios/soft-master',
    rank: 50,
    faction: 'Arashikage',
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
    link: '/character-bios/blind-master',
    rank: 49,
    faction: 'Arashikage',
    introduced: {
      issueNumber: 56,
      publisher: 'Marvel',
      issueLabel: 'Issue 56',
      year: '1987',
      month: 'February',
    },
  },
];

const CharacterBios: React.FC = () => {
  const sortedCharacters = [...CHARACTERS].sort((a, b) => b.rank - a.rank);

  return (
    <main className="character-bios-page">
      <h1 className="character-bios-title">Character Biographies</h1>

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
              <p className="character-faction">{faction}</p>
              <p className="character-first-appearance">
                First Appearance: {introduced.issueLabel}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default CharacterBios;