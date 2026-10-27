import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import raymond1 from './img/raymond/raymond_1.png';
import raymond2 from './img/raymond/raymond_2.png';
import raymond3 from './img/raymond/raymond_3.png';
import raymond4 from './img/raymond/raymond_4.png';
import raymond5 from './img/raymond/raymond_5.png';

const Raymond: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Raymond</h1>

        <p className="profile-intro">
          Raymond is <Link to="/character-bios/Tyrone">Tyrone</Link>'s younger brother. He comes across the newly reopened Arashikage dojo in San Francisco and enters, hoping to find the <Link to="/character-bios/BlindMaster">Blind Master</Link>. He finds Budo instead and becomes his student. After displaying a high level of proficiency, Raymond is sent to Japan to train under <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link>, the <Link to="/character-bios/HardMaster">Hard Master</Link>'s widow and <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s aunt.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Following in His Brother’s Footsteps</h2>
          <img src={raymond1} alt="Raymond arriving at the reopened Arashikage dojo in San Francisco" className="profile-block-img" />
          <p>
            Raymond comes across the newly reopened Arashikage Martial Arts dojo in San Francisco. Excited, he runs inside looking for the <Link to="/character-bios/BlindMaster">Blind Master</Link>, but finds Budo instead. Raymond explains that <Link to="/character-bios/Tyrone">Tyrone</Link> brought him to the <Link to="/character-bios/BlindMaster">Blind Master</Link>'s dojo when he was fourteen, and that he studied there until the sudden disappearance of <Link to="/character-bios/Tyrone">Tyrone</Link> and the <Link to="/character-bios/BlindMaster">Blind Master</Link>. Raymond removes his shoes, bows before the Arashikage shrine, and resumes his studies at the dojo, continuing the path started by his older brother (Issue #203).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Ready for Finishing School</h2>
          <img src={raymond2} alt="Raymond sparring with Budo at the Arashikage dojo" className="profile-block-img" />
          <p>
            Alpine, Torpedo, and Long Range arrive in San Francisco following a lengthy debriefing at the Pit after their mission to Olliestan. The three Joes enter the Arashikage Martial Arts Studio, where they witness Raymond sparring with Budo. Budo goes to strike Raymond, only to find that he is no longer there. Raymond drops down from the rafters and touches Budo's forehead with a finger, scoring a hit. Impressed, Budo tells Raymond he is ready for finishing school in Japan (Issue #209). Raymond travels to Japan, where he trains under <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link> (Issue #210).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">A Tour of the Old Arashikage Compound</h2>
          <img src={raymond3} alt="Raymond tours the abandoned Arashikage compound with Storm Shadow and Jinx" className="profile-block-img" />
          <p>
            Raymond continues his training in Japan with <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link>. One day, <Link to="/character-bios/StormShadow">Storm Shadow</Link> takes Raymond and <Link to="/character-bios/Jinx">Jinx</Link> to the old Arashikage compound, within walking distance of <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link>'s house. The compound has long since been abandoned and is derelict. As <Link to="/character-bios/StormShadow">Storm Shadow</Link> gives Raymond and <Link to="/character-bios/Jinx">Jinx</Link> the tour, Raymond recognizes the gate where <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> first entered upon his arrival.
          </p>
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link> reflects on the day he shot and killed a squirrel on the other side of the compound wall. When he went to retrieve the arrow, both the arrow and the squirrel were gone. He then shows them the building where the <Link to="/character-bios/HardMaster">Hard Master</Link> was killed with that same arrow, taken from the dead squirrel. <Link to="/character-bios/StormShadow">Storm Shadow</Link> explains that the intended target was <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and that the assassin was <Link to="/character-bios/Zartan">Zartan</Link>, sent by <Link to="/character-bios/CobraCommander">Cobra Commander</Link> (Issue #215).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Older Brother in the Dojo</h2>
          <img src={raymond4} alt="Raymond welcomes Milo to the Arashikage dojo" className="profile-block-img" />
          <p>
            Raymond returns to San Francisco to continue his studies at the Arashikage Martial Arts Studio under Budo. An undisclosed amount of time passes.  The dojo takes on a new student, Milo. Budo gives Milo a tour of the dojo and introduces him to Raymond, saying, "This is Raymond. Raymond was the youngest brother until now. He is now your older brother in the dojo." Raymond smiles, presents Milo with cleaning supplies, and says, "You can start by scrubbing the floor." (Issue #260).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Joining the Arashikage Rescue Mission to Springfield</h2>
          <img src={raymond5} alt="Raymond joins the Arashikage force in the rescue of Sean Collins" className="profile-block-img" />
          <p>
            Unbeknownst to Cobra, the original <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> has died, and <Link to="/character-bios/SeanCollins">Sean Collins</Link> has taken his place. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> wants to capture <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, transport him to Springfield, and hook him up to the improved Brainwave Scanner. In the houses outside Fort Wadsworth are Cobra sleeper cells led by Crimson Guardswoman <Link to="/character-bios/Laura">Laura 343</Link>. Cobra infiltrates the Pit using fuel trucks that hide H.I.S.S. tanks and Vipers. <Link to="/character-bios/SeanCollins">Sean Collins</Link> is captured and transported to Springfield (Issue #267).
          </p>
          <p>
            The Joes are not authorized to carry out a rescue mission, so they use civilian vehicles. They make unlikely alliances, forming a combined force of Joes, Oktober Guard, Dreadnoks, and Arashikage. Raymond is part of the Arashikage force, which includes <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, Helix, Milo, and Budo (Issue #269). An epic battle takes place in Springfield, and <Link to="/character-bios/SeanCollins">Sean</Link> is retrieved (Issue #275).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Raymond;