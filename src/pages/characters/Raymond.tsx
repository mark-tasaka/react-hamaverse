import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import raymond1 from './img/raymond/raymond_1.png';
import raymond2 from './img/raymond/raymond_2.png';

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

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Raymond;