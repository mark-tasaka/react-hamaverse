import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import onihashi1 from './img/onihashi/onihashi_1.png';

const Onihashi: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Professor Onihashi</h1>

        <p className="profile-intro">
          Professor Onihashi is the mystic swordsmith of the Arashikage clan. He takes <Link to="/character-bios/Zartan">Zartan</Link> on as his apprentice, and together they travel high into the mountains to forge Evening Shade, a duplicate of Morning Light, the legendary Arashikage blade. When <Link to="/character-bios/Zartan">Zartan</Link> murders the <Link to="/character-bios/HardMaster">Hard Master</Link>, great shame falls upon Onihashi, and the professor commits seppuku (ritualized suicide) — forgiving <Link to="/character-bios/Zartan">Zartan</Link> with his dying breath.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Zartan as His Apprentice</h2>
          <img src={onihashi1} alt="Professor Onihashi and Zartan at the forge" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Zartan">Zartan</Link> sits from sunrise to sunset outside the garden gates of Professor Onihashi's residence for six months before the professor finally grants him an interview. Impressed by his determination, Onihashi tells <Link to="/character-bios/Zartan">Zartan</Link> that most applicants give up after the first two months. He goes on to say he sees the true nature of <Link to="/character-bios/Zartan">Zartan</Link>'s heart — that he is a liar, and that bad karma runs through his veins. Despite this, Onihashi says he will attempt to temper <Link to="/character-bios/Zartan">Zartan</Link>'s soul in his humble furnace, hammering out the impurities of his soul.
          </p>
          <p>
            At first light, Onihashi and <Link to="/character-bios/Zartan">Zartan</Link> set out on the twenty-mile journey by foot to the professor's secret mountain forge (Issue #84). There, they forge Evening Shade, a duplicate of the legendary blade Morning Light (Storm Shadow #4). Through the purification rituals and the painstaking process of folding layers of steel, <Link to="/character-bios/Zartan">Zartan</Link> finds a peace he has always sought. He no longer wants to carry out his mission of killing <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> — all he wants is to continue his work at the forge. When the blade is complete, Professor Onihashi presents it to the <Link to="/character-bios/HardMaster">Hard Master</Link>.
          </p>
          <p>
            <Link to="/character-bios/CobraCommander">Cobra Commander</Link> approaches <Link to="/character-bios/Zartan">Zartan</Link>, threatening to expose him to Professor Onihashi if he doesn't fulfill his contract. Using a compound bow fitted with sound-amplification and directional-ranging equipment, <Link to="/character-bios/Zartan">Zartan</Link> targets <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> from outside the dojo. Unbeknownst to him, the <Link to="/character-bios/HardMaster">Hard Master</Link> is demonstrating the technique of "Donning the Cloak of the Chameleon," mimicking <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' heartbeat and breathing. <Link to="/character-bios/Zartan">Zartan</Link> kills the <Link to="/character-bios/HardMaster">Hard Master</Link> by mistake and flees.
          </p>
          <p>
            Professor Onihashi knows <Link to="/character-bios/Zartan">Zartan</Link> is the murderer. In shame, he commits seppuku (Issue #84), forgiving <Link to="/character-bios/Zartan">Zartan</Link> with his dying breath (Issue #91). <Link to="/character-bios/Zartan">Zartan</Link> later returns to find his mentor.  He discovers Onihashi's cold body in the mountain cave where he took his own life (Issue #84).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            Hidden on the blades are characters visible only with the warmth of human breath — Onihashi family secrets passed down through generations. Morning Light bears the character for "Truth," while Evening Shade bears the character for "Forgiveness."
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Onihashi;
