import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import wade1 from './img/wade/wade_1.png';

const Wade: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Wade Collins</h1>

        <p className="profile-intro">
          Wade Collins is a Vietnam War veteran who served alongside <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Stalker">Stalker</Link>, and <Link to="/character-bios/StormShadow">Storm Shadow</Link>. Wounded and left for dead, Wade survived two years rotting away in a POW camp. When he returned from the war, he discovered his wife had left him, was spit on and called a baby killer, and couldn't find work — employers weren't eager to hire veterans. Wade was recruited into Cobra in the organization's early days, working his way up through the ranks and eventually joining the Crimson Guard when it first formed. An encounter with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Stalker">Stalker</Link> convinced Wade that Cobra was using him, and with the help of the two men he'd served with, he and his adopted family left Cobra behind to start a new life.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Captured in Vietnam</h2>
          <img src={wade1} alt="Wade Collins' capture in Vietnam" className="profile-block-img" />
          <p>
            Wade Collins is on point for a six-man LRRP team led by Lonzo Wilkinson (<Link to="/character-bios/Stalker">Stalker</Link>), alongside <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, Tommy (<Link to="/character-bios/StormShadow">Storm Shadow</Link>), Dickie Saperstein, and Ramon Escobedo. Distracted by noises behind him, Wade leads the team straight into a sizable NVA (North Vietnamese Army) encampment — close to a full company of men. A firefight breaks out. Ramon and Wade are both hit; Ramon dies instantly. Dickie, attempting a flanking maneuver, steps on a landmine and is killed on the spot.
          </p>
          <p>
            Wade lies bleeding on the battlefield, and his surviving teammates, believing him dead, withdraw. The NVA carry the wounded Wade on a bamboo litter to their underground operating room, where he is operated on - without anesthesia.
          </p>
          <p>
            Wade spends the next two years rotting away in a POW camp. When the war ends and he returns home. He is spit on and called a baby killer at the airport. His wife's lawyer approaches him there, handing over divorce papers — she couldn't bring herself to face him in person. Struggling to find work, Wade discovers that America's captains of industry are reluctant to hire Vietnam War veterans (Issue #43).
          </p>
        </section>


        
        <div className="profile-back-row">
            <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Wade;