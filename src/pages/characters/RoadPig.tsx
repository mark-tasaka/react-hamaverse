import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import roadPig1 from './img/roadPig/roadPig_1.png';

const RoadPig: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Road Pig (Donald Deluca)</h1>

        <p className="profile-intro">
          The first and only probationary member of the Dreadnoks, Road Pig is a brute of a man possessing almost superhuman strength, poor hygiene, and an extensive history of anti-social behavior. He is utterly devoted to his love, <Link to="/character-bios/Zarana">Zarana</Link>, existing only to serve her every wish without hesitation or question. Within him are two distinct personalities: Road Pig, simple and easily amused, and Donald, highly intelligent and intellectual.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">We Both Love Zarana</h2>
          <img src={roadPig1} alt="Road Pig and Donald's devotion to Zarana" className="profile-block-img" />
          <p>
            Road Pig's massive frame holds two distinct personalities: the simple, easily amused Road Pig, and the highly intelligent and intellectual Donald. When speaking, Road Pig often uses "we" or "us," acknowledging both personalities within him.
          </p>
          <p>
            Both Road Pig and Donald share an undying love for <Link to="/character-bios/Zarana">Zarana</Link>, utterly devoted to her and following her every whim. <Link to="/character-bios/Zarana">Zarana</Link> adores the Road Pig personality; Donald, she merely tolerates.
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), two versions of Road Pig were produced from a single mold: the original 1988 version and a 1991 repaint.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default RoadPig;
