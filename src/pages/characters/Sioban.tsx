import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import sioban1 from './img/sioban/sioban_1.png';

const Sioban: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Sioban O'Hara</h1>

        <p className="profile-intro">
          Sioban O'Hara is <Link to="/character-bios/Scarlett">Scarlett</Link>'s (Shana O'Hara) sister and an attorney-at-law practicing in Atlanta, Dallas, and Miami Beach. Sioban makes a brief appearance in the series while <Link to="/character-bios/Scarlett">Scarlett</Link> lies in a coma at a New York City hospital.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Orders to Terminate Scarlett's Life-Support Systems</h2>
          <img src={sioban1} alt="Sioban O'Hara at the hospital" className="profile-block-img" />
          <p>
            The Baroness shoots <Link to="/character-bios/Scarlett">Scarlett</Link> in the head, based on the false belief that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> killed her brother, Eugene (<Link to="/comic-issues/Issue94">Issue #94</Link>). <Link to="/character-bios/Scarlett">Scarlett</Link> falls into a coma, her prognosis unknown. Her lover, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, waits by her side at the hospital, while his friends Storm Shadow and <Link to="/character-bios/Stalker">Stalker</Link> visit regularly to offer support.
          </p>
          <p>
            One day, Sioban O'Hara arrives at the hospital, telling <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and Storm Shadow that she has petitioned the courts to end her sister's suffering by terminating her life support (Issue #101). Sioban obtains a court order barring <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and Storm Shadow from entering the hospital room. Distressed, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> pushes Sioban aside, enters the room, kneels beside <Link to="/character-bios/Scarlett">Scarlett</Link>'s bed, and whispers her name (Issue #102).
          </p>
          <p>
            To take <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' mind off <Link to="/character-bios/Scarlett">Scarlett</Link>'s seemingly inevitable death, Storm Shadow blackmails the Jugglers into authorizing a mission to send <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> into Borovia to rescue George Strawhacker — the fiancé of his late twin sister — from a gulag. As <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> descends from a B-2 bomber into Borovia, <Link to="/character-bios/Scarlett">Scarlett</Link> wakes from her coma. Sioban, shocked that her sister has woken up, blames the doctors for misleading her (Issue #103).
          </p>
          <p>
            Sioban visits her recovering sister. <Link to="/character-bios/Scarlett">Scarlett</Link> asks why she sought the court order to terminate her life support. As Sioban tries to justify her actions, <Link to="/character-bios/Scarlett">Scarlett</Link> sees through to her sister's true motive, telling her, "If I'd known you wanted the family house in Atlanta this much, I would have signed it over to you." Tears fill Sioban's eyes, and she flees the hospital room in guilt (Issue #104).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Sioban;
