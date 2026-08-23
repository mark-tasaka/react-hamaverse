import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import fred1 from './img/fred/fred_1.png';
import fred2 from './img/fred/fred_2.png';
import fred3 from './img/fred/fred_3.png';
import fred4 from './img/fred/fred_4.png';

const FredBroca: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Fred Broca (Fred I)</h1>

        <p className="profile-intro">
          The original Fred in the Fred series of Crimson Guards, and <Link to="/character-bios/SeanCollins">Sean Collins</Link>' biological father. Like the others in the series, Fred Broca undergoes plastic surgery to have a face identical to the rest of the Freds. The Broca family purchases a home next to Fort Wadsworth, where Fred and his wife can surveil the motor pool on base. Fred's life is cut short when he joins Destro and <Link to="/character-bios/Firefly">Firefly</Link> on a mission to attack <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> at his cabin in the High Sierras. The next member of the series, Fred II (<Link to="/character-bios/Wade">Wade Collins</Link>), replaces him after his death, adopting his family and continuing his work for Cobra.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Pre-Plastic Surgery</h2>
          <img src={fred1} alt="Fred Broca before his plastic surgery" className="profile-block-img" />
          <p>
            Fred and his family live in another part of Staten Island. From the kitchen, Fred calls out to his wife that they're drowning in a sea of debt. She comes in, places a hand on his shoulder, and reassures him things will get better. Fred tells her he already knows how — all he has to do is change his face (G.I. Joe Declassified #1).
          </p>
          <p>
            The issue confirms that Fred is Fred Broca's real first name, and reveals that Sean and Heather are genuinely his children — rather than assigned to him by Cobra to create the appearance of a family.  Fred's son and daughter shown together with their mother in the living room watching TV. It remains unclear whether Broca is his actual surname, since Broca is an anagram of Cobra.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Short-Lived Crimson Guard Career</h2>
          <img src={fred2} alt="Fred Broca's short-lived Crimson Guard career" className="profile-block-img" />
          <p>
            The Broca family purchases a home next to Fort Wadsworth. Among the boxes the movers carry in are crates of high-tech surveillance equipment, which Fred and his wife set up to surveil the motor pool at the fort (Issue #30).
          </p>
          <p>
            One day, Destro and <Link to="/character-bios/Firefly">Firefly</Link> arrive at the Broca home and collect Fred for a mission to the High Sierras to kill <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> at his cabin. The Joes, anticipating a Cobra attack, send Spirit and Airborne to the High Sierras as well. A battle breaks out at the cabin, leaving everyone wounded (Issue #31).
          </p>
          <p>
            In the aftermath, the <Link to="/character-bios/SoftMaster">Soft Master</Link> appears and tends to the wounded, making no distinction between friend and foe. He has Destro and <Link to="/character-bios/Firefly">Firefly</Link> help carry the injured Fred away from the cabin. During the journey, Fred insists on finishing the mission and turning back. While Destro and <Link to="/character-bios/Firefly">Firefly</Link> rest, he slips away and returns to confront the <Link to="/character-bios/SoftMaster">Soft Master</Link> alone. The <Link to="/character-bios/SoftMaster">Soft Master</Link> shows him the futility of his obsession with revenge — and realizing this, Fred dies, his thirst for vengeance having been the only thing keeping him alive (Issue #32).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Laid to Rest</h2>
          <img src={fred3} alt="Fred Broca laid to rest" className="profile-block-img" />
          <p>
            Fred Broca is laid to rest in a cave behind the nearby waterfall, his Kalashnikov placed in his arms. Chiseled into the rock wall above him are the words: "Here lies Fred. No matter what he did in life, he died well." Years later, when <Link to="/character-bios/StormShadow">Storm Shadow</Link> battles the Red Ninja at the same waterfall, he grabs the Kalashnikov from the grave and uses it as a shield to block the Red Ninja's strike (Issue #91).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <img src={fred4} alt="Notes on the Freds' faces" className="profile-block-img" />
          <p>
            G.I. Joe: Declassified #1 reveals that Fred Broca underwent plastic surgery to match the faces of the others in the Fred series — raising the question of whose face are Freds actually modeled after. In Issue #98, <Link to="/character-bios/CobraCommander">Cobra Commander</Link>'s partially shown face appears as a Fred surgeon operates to remove the bullet.  <Link to="/character-bios/CobraCommander">Cobra Commander</Link>'s face bears a striking resemblance to the Freds' own faces. Could the Freds' faces have been modeled on <Link to="/character-bios/CobraCommander">Cobra Commander</Link>'s face?
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default FredBroca;
