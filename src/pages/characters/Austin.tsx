import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import austin1 from './img/austin/austin_1.png';
import austin2 from './img/austin/austin_2.png';
import austin3 from './img/austin/austin_3.png';

const Austin: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Major General "Iron Butt" Austin</h1>

        <p className="profile-intro">
          Major General "Iron Butt" Austin is Brigadier <Link to="/character-bios/Flagg">General Flagg</Link>'s direct supervisor, overseeing G.I. Joe's activities from the Pentagon. A skilled military strategist with a sharp political sense, General Austin weighs not just how a mission can be won, but what it will mean once it is.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Operation Lady Doomsday</h2>
          <img src={austin1} alt="Operation Lady Doomsday" className="profile-block-img" />
          <p>
            Dr. Adele Burkhart, the nation's top nuclear physicist and an outspoken critic of the military and government, is captured by Cobra. Dr. Burkhart holds knowledge of the nation's nuclear secrets, and Cobra now has the means to weaponize them.
          </p>
          <p>
            In the Pentagon, Major General Austin and Brigadier <Link to="/character-bios/Flagg">General Flagg</Link> discuss the situation. Both know a direct frontal assault using regular forces could turn into a bloodbath for their side. <Link to="/character-bios/Flagg">General Flagg</Link> suggests that a botched rescue mission, forcing Cobra's hand in killing Dr. Burkhart, might be the best course of action. General Austin counters, "Dr. Burkhart's death would be a political embarrassment for the U.S. A rescue mission is needed."
          </p>
          <p>
            <Link to="/character-bios/Flagg">General Flagg</Link> then points out that the Special Counter-Terrorist Group Delta, code named G.I. Joe, could be used for this mission. General Austin orders the sergeant to pull up the G.I. Joe dossier, which lists the names of fourteen members, including <Link to="/character-bios/Shooter">Shooter</Link> (Issue #1).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">The Pit II Opening Ceremony</h2>
          <img src={austin2} alt="The opening ceremony for Pit II" className="profile-block-img" />
          <p>
            General Austin arrives for the opening ceremony of the rebuilt Pit (Pit II), located beneath the Motor Pool at Fort Wadsworth — the same site as the original Pit. At the ceremony, he announces that eight of the original team members — <Link to="/character-bios/Breaker">Breaker</Link>, <Link to="/character-bios/Zap">Zap</Link>, <Link to="/character-bios/Grunt">Grunt</Link>, Short-Fuze, <Link to="/character-bios/Stalker">Stalker</Link>, Flash, <Link to="/character-bios/Scarlett">Scarlett</Link>, and <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> — will receive the Presidential Unit Citation (authorized to be worn once Congress declassifies the team's activities), along with a pay-grade promotion and moved to administrative duties to accommodate the growing roster. General Austin tells <Link to="/character-bios/Hawk">Hawk</Link> that he is now the overall commander of G.I. Joe, and will delegate field command to Duke (Issue #33).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Stepping Down</h2>
          <img src={austin3} alt="General Austin passing command to Hawk" className="profile-block-img" />
          <p>
            General Austin suffers a heart attack while speaking with <Link to="/character-bios/Hawk">Hawk</Link> over video (Issue #42). <Link to="/character-bios/Hawk">Hawk</Link> has <Link to="/character-bios/Stalker">Stalker</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> drive him from Fort Wadsworth to the U.S. Army Medical Center in Washington, D.C. At the hospital, General Austin remains consumed with work, and <Link to="/character-bios/Hawk">Hawk</Link> briefs him on G.I. Joe's ongoing activities as the general recovers in bed.
          </p>
          <p>
            Later, with <Link to="/character-bios/Hawk">Hawk</Link> present, General Austin holds a video conference with the President, the Joint Chiefs, and the Secretary of Defense. He tells them that, given his cardiac condition, he can no longer serve as commander of G.I. Joe, announces his retirement, and recommends implementing Plan Alpha — a recommendation the group unanimously approves.
          </p>
          <p>
            General Austin then takes a set of general's stars he has been keeping for <Link to="/character-bios/Hawk">Hawk</Link> from his bedside drawer and presents them to him, telling <Link to="/character-bios/Hawk">Hawk</Link> he has been promoted to Brigadier General and is now Commander in Chief of G.I. Joe (Issue #45).
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
