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
        
        <blockquote className="profile-quote">
          <p>“Ugly?  They banned from the football games because he stopped the clock!  His mother had to tie a pork chop around his back so the dog would play with him!  He went to visit the Empire State Building and he got strafed! I’ll tell you, beauty may be skin deep, but ugly goes clean to the bone.”*</p>
        </blockquote>

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
            During the Marvel run (1982–1994), two versions of Road Pig were produced from a single mold: the original <a href="https://www.yojoe.com/action/88/roadpig.shtml" target="_blank" rel="noopener noreferrer">1988 figure</a> and the <a href="https://www.yojoe.com/action/91/roadpig2.shtml" target="_blank" rel="noopener noreferrer">1991 repaint</a>.
          </p>
          
          <p className="profile-notes-footnote">
            *The quote is from Road Pig's 1988 file card.
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
