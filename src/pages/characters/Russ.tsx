import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import russ1 from './img/russ/russ_1.png';
import russ2 from './img/russ/russ_2.png';

const Russ: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Russ the Vet</h1>

        <p className="profile-intro">
          A Vietnam War veteran, Russ served as an M113 driver in the 4th Cavalry, 25th Infantry Division. When Cobra arrives in the economically devastated town of Millville, Russ warns its citizens about the organization's true nature. He is beaten by the very townspeople he tries to protect and taken captive by Cobra. Mutt and Spirit free him, and Russ joins forces with the two, organizing a group of troubled youth he mentors into an armed resistance against Cobra.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">A Lone Voice of Warning</h2>
          <img src={russ1} alt="Russ warning the citizens of Millville" className="profile-block-img" />
          <p>
            Cobra arrives in the economically devastated town of Millville, promising jobs, free hospitalization, subsidized housing, and free day care. All the citizens have to do is step inside the trailers to receive their ID cards — trailers that secretly house Brainwave Scanners used to brainwash the population. Mutt and Spirit happen to be in Millville visiting Mutt's uncle Jeff when Cobra arrives.
          </p>
          <p>
            Russ warns everyone in town that Cobra is a terrorist organization, trying desperately to stop the townspeople from entering the trailers. Instead, the townspeople turn on him, beating him badly, and Cobra takes him prisoner.
          </p>
          <p>
            Mutt, Junkyard, and Spirit ambush the crew of a H.I.S.S. II tank and find Russ tied up inside. They free him, and the four join forces (Issue #100).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Armed Resistance</h2>
          <img src={russ2} alt="Russ organizing the armed resistance" className="profile-block-img" />
          <p>
            Russ introduces Mutt and Spirit to the troubled youth he mentors.  The youth agrees to help fight Cobra, forming an armed resistance (Issue #101). Using hit-and-run tactics and the urban landscape to their advantage, the resistance ambushes Cobra vehicles, captures Cobra weapons, and resists the occupation at every turn (Issue #102).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Russ;
