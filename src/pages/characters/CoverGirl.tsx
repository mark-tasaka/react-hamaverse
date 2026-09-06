import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import coverGirl1 from './img/coverGirl/coverGirl_1.png';

const CoverGirl: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Cover Girl (Courtney Krieger)</h1>

        <p className="profile-intro">
          Specialist Courtney A. Krieger (Cover Girl) is the team's armor specialist, operating tanks and armored fighting vehicles. SPC Krieger joins G.I. Joe as the operator of the Wolverine MLRS (Multiple Launch Rocket System).
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Baptism by Fire</h2>
          <img src={coverGirl1} alt="Cover Girl's baptism by fire" className="profile-block-img" />
          <p>
            Cover Girl is introduced to the team during a live-fire training exercise, where she demonstrates her skill operating the Wolverine MLRS. Openly confident in her skills and her ability to keep her cool under pressure, Cover Girl draws a measured response from <Link to="/character-bios/Scarlett">Scarlett</Link>, who tells her they will wait to reserve judgment until they see her perform in a real battle.
          </p>
          <p>
            Cover Girl's baptism by fire comes when the team is assigned to provide security for the Treasury Building in Washington, D.C. Cobra H.I.S.S. tanks, smuggled inside tractor-trailers, launch a nighttime surprise attack on the building. Cover Girl destroys two H.I.S.S. tanks with the Wolverine before <Link to="/character-bios/CobraCommander">Cobra Commander</Link>'s own tank sideswipes hers, knocking the Wolverine onto its side. Cover Girl and the three Joes riding with her — Gung-Ho, Tripwire, and Torpedo — leap to safety just in time, escaping injury (Issue #16).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), only a single version of Cover Girl was produced: the <a href="https://www.yojoe.com/action/83/covergirl.shtml" target="_blank" rel="noopener noreferrer">1983 figure</a>. Cover Girl's file card lists her grade as E-4 (Specialist), with "Specialist" spelled out in brackets, clearly identifying her as a Specialist rather than a Corporal — since both ranks share the same E-4 pay grade.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default CoverGirl;
