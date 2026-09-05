import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import flash1 from './img/flash/flash_1.png';
import flash2 from './img/flash/flash_2.png';

const Flash: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Flash (Anthony Gambello)</h1>

        <p className="profile-intro">
          A former high school quarterback with a gift for estimating yardage by eye, Anthony S. Gambello (Flash) is one of the original members of the team. Recruited by <Link to="/character-bios/Flagg">General Flagg</Link>, Gambello serves as the team's laser rifle specialist, operating the XMLR-1A shoulder-fired laser rifle.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Recruitment to G.I. Joe</h2>
          <img src={flash1} alt="Flash's recruitment to G.I. Joe" className="profile-block-img" />
          <p>
            Flash is recruited to G.I. Joe by <Link to="/character-bios/Flagg">General Flagg</Link>. Prior to the formation of the team, Flash works at the Covert Electronics Shop at Aberdeen Proving Ground, where he has made improvements to the laser rangefinders. <Link to="/character-bios/Flagg">General Flagg</Link> learns of his work and conducts an inspection of the shop, asking Flash the distance to a nearby water tower. As Flash reaches for the improved rangefinder to measure it, <Link to="/character-bios/Flagg">Flagg</Link> smashes the device, then demands to know the distance anyway while Gambello scrambles to recover. Flash tells him it is 240 yards, explaining that he was quarterback on his high school football team and became skilled at estimating yardage by eye. Impressed, <Link to="/character-bios/Flagg">Flagg</Link> orders his aide, Sparks, to arrange his transfer to Staten Island — to G.I. Joe (G.I. Joe Declassified #2).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">The Armory</h2>
          <img src={flash2} alt="Flash trapped in the armory" className="profile-block-img" />
          <p>
            The Joes capture a disassembled Cobra giant robot and bring it back to the Pit for study. After conducting a preliminary examination, they leave the robot behind in the lab. Flash, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and <Link to="/character-bios/Stalker">Stalker</Link> are in the armory nearby, cleaning and storing weapons, when the disassembled robot suddenly activates and seizes control of the lab's central control terminal — the system governing power and door access throughout the facility. The armory doors lock shut, trapping the three Joes inside.
          </p>
          <p>
            Flash points out that their heavy weapons could blow the door open, but the resulting blast would likely kill them in the confined space. His laser rifle at full power could open the door as well, but doing so would burn through too much of their limited oxygen. Instead, Flash suggests using the rifle at low power, targeting only the lock itself. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Stalker">Stalker</Link> lie down and rest to conserve oxygen while Flash carefully melts through the lock at reduced power, eventually freeing the three of them from the armory (Issue #3).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), only a single version of Flash was released: the 1982 figure, with a 1983 swivel-arm variant. Flash's file card lists his rank as E-4. In Issue #33, General Austin promotes Flash — along with <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/RockRoll">Rock 'n Roll</Link>, <Link to="/character-bios/Breaker">Breaker</Link>, <Link to="/character-bios/Zap">Zap</Link>, <Link to="/character-bios/Grunt">Grunt</Link>, Short-Fuze, and <Link to="/character-bios/Stalker">Stalker</Link> — to the next pay grade, assigning them administrative duties as the team grows. This puts Flash's rank at E-5 (Sergeant) from that point forward.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Flash;
