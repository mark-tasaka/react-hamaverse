import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import hardMaster1 from './img/hardMaster/HardMaster_1.png';

const HardMaster: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Hard Master</h1>

        <p className="profile-intro">
          The Hard Master was the head of the Arashikage clan during the time <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> spent training in Japan. He is also <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s uncle (<Link to="/character-bios/StormShadow">Storm Shadow</Link>'s unnamed, deceased father was the Hard Master's younger brother). At the time of his death, the Hard Master was married to the woman who would become known as Obake Obaasan ("Demon Granny").
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Training Snake Eyes in Japan</h2>
          <img src={hardMaster1} alt="The Hard Master training Snake Eyes" className="profile-block-img" />
          <p>
            Following the tragic death of his family in a car accident, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> took his friend Tommy up on his offer to join the family business in Japan. When <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> arrived, he discovered that Tommy's family business was a centuries-old ninja clan. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> underwent years of intense training.
          </p>
          <p>
            Two years after his arrival, the Hard Master and his younger brother, the <Link to="/character-bios/SoftMaster">Soft Master</Link>, watch <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and Tommy (<Link to="/character-bios/StormShadow">Storm Shadow</Link>) spar. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> allows Tommy to win, so that his friend can save face in front of his uncles. The Hard Master takes note of this.
          </p>
          <p>
            Time passes. One night, the Hard Master is privately teaching <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> the Darkened Room technique. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> hears someone in the courtyard outside. The Hard Master assures him the person poses no danger, then tells <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> that he wishes for him to become heir to the Arashikage clan, in place of <Link to="/character-bios/StormShadow">Storm Shadow</Link>. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> does not want this.
          </p>
          <p>
            The Hard Master then steps behind a screen to demonstrate the "Donning the Chameleon's Mantle" technique, perfectly mimicking <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' breathing and heartbeat. Just then, an arrow fires through the screen, passing through the Hard Master and embedding itself in the practice log behind him.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> tries to save the dying Hard Master. The <Link to="/character-bios/SoftMaster">Soft Master</Link> arrives, having run over from his room, and says he saw <Link to="/character-bios/StormShadow">Storm Shadow</Link> fleeing the courtyard with a bow in hand. With his dying breath, the Hard Master insists that <Link to="/character-bios/StormShadow">Storm Shadow</Link> did not kill him (<Link to="/comic-issues/Issue26">Issue #26</Link>).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default HardMaster;