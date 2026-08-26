import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import austin1 from './img/austin/austin_1.png';
import austin2 from './img/austin/austin_2.png';

const Austin: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Major General "Iron Butt" Austin</h1>

        <p className="profile-intro">
          Major General "Iron Butt" Austin is Brigadier General Flagg's direct supervisor, overseeing G.I. Joe's activities from the Pentagon. A skilled military strategist with a sharp political sense, General Austin weighs not just how a mission can be won, but what it will mean once it is.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Operation Lady Doomsday</h2>
          <img src={austin1} alt="Operation Lady Doomsday" className="profile-block-img" />
          <p>
            Dr. Adele Burkhart, the nation's top nuclear physicist and an outspoken critic of the military and government, is captured by Cobra. Dr. Burkhart holds knowledge of the nation's nuclear secrets, and Cobra now has the means to weaponize them.
          </p>
          <p>
            In the Pentagon, Major General Austin and Brigadier General Flagg discuss the situation. Both know a direct frontal assault using regular forces could turn into a bloodbath for their side. General Flagg suggests that a botched rescue mission, forcing Cobra's hand in killing Dr. Burkhart, might be the best course of action. General Austin counters says Dr. Burkhart death would be a political embarrassment for the U.S. A rescue mission is needed.
          </p>
          <p>
            General Flagg then points out that the Special Counter-Terrorist Group Delta, code named G.I. Joe, could be used for this mission. General Austin orders the sergeant to pull up the G.I. Joe dossier, which lists the names of fourteen members, including <Link to="/character-bios/Shooter">Shooter</Link> (Issue #1).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">The Pit II Opening Ceremony</h2>
          <img src={austin2} alt="The opening ceremony for Pit II" className="profile-block-img" />
          <p>
            General Austin arrives for the opening ceremony of the rebuilt Pit (Pit II), located beneath the Motor Pool at Fort Wadsworth — the same site as the original Pit. At the ceremony, he announces that eight of the original team members — Breaker, Zap, <Link to="/character-bios/Grunt">Grunt</Link>, Short-Fuze, <Link to="/character-bios/Stalker">Stalker</Link>, Flash, <Link to="/character-bios/Scarlett">Scarlett</Link>, and <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> — will receive the Presidential Unit Citation (authorized to be worn once Congress declassifies the team's activities), along with a pay-grade promotion and moved to administrative duties to accommodate the growing roster. General Austin tells <Link to="/character-bios/Hawk">Hawk</Link> that he is now the overall commander of G.I. Joe, and will delegate field command to Duke (Issue #33).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Austin;
