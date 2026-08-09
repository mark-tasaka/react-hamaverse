import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Common.css';
import './css/ComicIssues.css';

import issue21Img from './img/covers/issue_21.jpg';
import issue26Img from './img/covers/issue_26.jpg';
import issue27Img from './img/covers/issue_27.jpg';
import issue93Img from './img/covers/issue_93.jpg';
import issue94Img from './img/covers/issue_94.jpg';
import issue96Img from './img/covers/issue_96.jpg';

interface Issue {
  issue: number;
  title: string;
  img: string;
  link: string;
  date: string;
  dateOrder: number;
  publisher: string;
}

const ISSUES: Issue[] = [
  {
    issue: 21,
    title: 'Silent Interlude',
    img: issue21Img,
    link: '/comic-issues/Issue21',
    date: 'March 1984',
    dateOrder: 198403,
    publisher: 'Marvel',
  },
  {
    issue: 26,
    title: 'Snake-Eyes: Origin',
    img: issue26Img,
    link: '/comic-issues/Issue26',
    date: 'August 1984',
    dateOrder: 198408,
    publisher: 'Marvel',
  },
  {
    issue: 27,
    title: 'Snake-Eyes: Origin Part 2',
    img: issue27Img,
    link: '/comic-issues/Issue27',
    date: 'September 1984',
    dateOrder: 198409,
    publisher: 'Marvel',
  },
  {
    issue: 93,
    title: 'Taking the Plunge',
    img: issue93Img,
    link: '/comic-issues/Issue93',
    date: 'November 1989',
    dateOrder: 198911,
    publisher: 'Marvel',
  },
  {
    issue: 94,
    title: 'Snake-Eyes Trilogy Part 1',
    img: issue94Img,
    link: '/comic-issues/Issue94',
    date: 'December 1989',
    dateOrder: 198912,
    publisher: 'Marvel',
  },
  {
    issue: 96,
    title: 'Snake-Eyes Trilogy Part 3',
    img: issue96Img,
    link: '/comic-issues/Issue96',
    date: 'January 1990',
    dateOrder: 199001,
    publisher: 'Marvel',
  },
];

type SortDir = 'asc' | 'desc';

const ComicIssues: React.FC = () => {
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  const sortedIssues = [...ISSUES].sort((a, b) => {
    return sortDir === 'asc' ? a.issue - b.issue : b.issue - a.issue;
  });

  return (
    <main className="comic-issues-page">
      <h1 className="comic-issues-title">Comic Issues</h1>

      {/* ── Sort controls ── */}
      <div className="comic-issues-sort-wrapper">
        <label className="comic-issues-sort-label">Sort by Issue</label>
        <button
          className="comic-issues-sort-dir"
          onClick={() => setSortDir(d => d === 'asc' ? 'desc' : 'asc')}
          aria-label={sortDir === 'asc' ? 'Sort descending' : 'Sort ascending'}
          title={sortDir === 'asc' ? 'Sort descending' : 'Sort ascending'}
        >
          {sortDir === 'asc' ? '↑ Asc' : '↓ Desc'}
        </button>
      </div>

      <div className="comic-issues-grid">
        {sortedIssues.map(({ issue, title, img, link, date }) => (
          <article key={issue} className="comic-issue-card">
            <Link to={link} className="comic-issue-img-link">
              <img src={img} alt={`Issue ${issue} — ${title}`} className="comic-issue-img" />
            </Link>
            <div className="comic-issue-card-body">
              <Link to={link} className="comic-issue-title-link">
                <h2 className="comic-issue-number">Issue {issue}</h2>
              </Link>
              <p className="comic-issue-title">{title}</p>
              <p className="comic-issue-date">{date}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default ComicIssues;