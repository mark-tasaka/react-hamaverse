import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import zarana1 from './img/zarana/zarana_1.png';

const Zarana: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Zarana</h1>

        <p className="profile-intro">
          Zarana is <Link to="/character-bios/Zartan">Zartan</Link>'s younger sister and Zandra's twin, and like both her siblings, she's a member of the Dreadnoks. She lacks her brother's holographic disguise technology, but makes up for it as a skilled method actor, relying on old-fashioned costume and characterization to impersonate her targets. For all her tradecraft, Zarana is notoriously cheap — she never leaves a tip.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Cheapness on Display at Her First Meeting with the Boys</h2>
          <img src={zarana1} alt="Zarana's first meeting with the Dreadnoks" className="profile-block-img" />
          <p>
            When the Dreadnoks flee Springfield and arrive at their New Jersey swampland safehouse, they find Zarana waiting for them there. It's the first time the Dreadnoks — Buzzer, Ripper, and Torch — have met her. As they enter the safehouse, Zarana tells them there is a six-pack of grape soda on the desk, priced at a buck-fifty per bottle, and that she's putting it on their tab — with interest.
          </p>
          <p>
            Buzzer remarks, "When <Link to="/character-bios/Zartan">Zartan</Link> said his sister was cheap, I thought he was talking about something else altogether" (Issue #50).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), only a single version of Zarana's action figure was produced: the 1986 version.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Zarana;
