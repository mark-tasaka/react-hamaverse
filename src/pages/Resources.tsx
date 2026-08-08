import React, { useState } from 'react';
import './css/Common.css';
import './css/Resources.css';

import destroSAImg from './img/resources/destroSA.jpg';
import jlsImg from './img/resources/jsl.jpg';
import motionComicImg from './img/resources/motionComic.jpg';
import yoJoeImg from './img/resources/yoJoe.jpg';
import threeDJoesImg from './img/resources/3dJoes.jpg';
import talkingJoeImg from './img/resources/talkingJoe.jpg';

interface Resource {
  title: string;
  link: string;
  img: string;
  type: string;
  desc: string;
}

const RESOURCES: Resource[] = [
  {
    title: 'Destro Is My Spirit Animal',
    link: 'https://www.youtube.com/@DestroIsMySpiritAnimal',
    img: destroSAImg,
    type: 'YouTube',
    desc: 'A YouTube channel dedicated to all things G.I. Joe — comics, toys, the cartoon, and more.',
  },
  {
    title: 'JLS Comics',
    link: 'https://www.youtube.com/@JLSComics',
    img: jlsImg,
    type: 'YouTube',
    desc: 'A YouTube channel producing in-depth videos on the backgrounds of over 100 named G.I. Joe and Cobra characters.',
  },
  {
    title: 'dshay7 gaming & comics',
    link: 'https://www.youtube.com/@dshay7gamingandcomics',
    img: motionComicImg,
    type: 'YouTube',
    desc: 'A YouTube channel featuring motion comics of the early Marvel G.I. Joe issues, brought to life by a host of different voice actors.',
  },
  {
    title: 'Yo Joe!',
    link: 'https://www.yojoe.com/',
    img: yoJoeImg,
    type: 'Resource Website',
    desc: 'A comprehensive database of Hasbro\'s 3¾" G.I. Joe action figures, vehicles, and file cards, spanning 1982 to 2018.',
  },
  {
    title: '3D Joes',
    link: 'https://www.3djoes.com/',
    img: threeDJoesImg,
    type: 'Resource Website',
    desc: 'A resource website dedicated to Hasbro\'s 3¾" G.I. Joe toy line, featuring a complete catalogue of action figures, vehicles, and file cards from the 1980s and 1990s.',
  },
  {
    title: 'Talking Joes',
    link: 'https://www.talkingjoe.co.uk/',
    img: talkingJoeImg,
    type: 'Podcast',
    desc: 'A weekly podcast hosted by Mark and Tim, reviewing and discussing the G.I. Joe comic series.',
  },
];

type SortDir = 'asc' | 'desc';

const Resources: React.FC = () => {
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  const sortedResources = [...RESOURCES].sort((a, b) => {
    const cmp = a.title.localeCompare(b.title);
    return sortDir === 'asc' ? cmp : -cmp;
  });

  return (
    <main className="resources-page">
      <h1 className="resources-title">G.I. Joe Resources</h1>

      {/* ── Sort controls ── */}
      <div className="resources-sort-wrapper">
        <label className="resources-sort-label">Sort by Name</label>
        <button
          className="resources-sort-dir"
          onClick={() => setSortDir(d => d === 'asc' ? 'desc' : 'asc')}
          aria-label={sortDir === 'asc' ? 'Sort descending' : 'Sort ascending'}
          title={sortDir === 'asc' ? 'Sort descending' : 'Sort ascending'}
        >
          {sortDir === 'asc' ? '↑ Asc' : '↓ Desc'}
        </button>
      </div>

      <div className="resources-grid">
        {sortedResources.map(({ title, link, img, type, desc }) => (
          <article key={title} className="resource-card">
            <a href={link} target="_blank" rel="noopener noreferrer" className="resource-img-link">
              <img src={img} alt={title} className="resource-img" />
            </a>
            <div className="resource-card-body">
              <a href={link} target="_blank" rel="noopener noreferrer" className="resource-title-link">
                <h2 className="resource-title">{title}</h2>
              </a>
              <p className="resource-type">{type}</p>
              <p className="resource-desc">{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Resources;