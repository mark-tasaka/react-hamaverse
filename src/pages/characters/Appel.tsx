import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import appel1 from './img/appel/appel_1.png';
import appel2 from './img/appel/appel_2.png';

const Appel: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Professor Appel</h1>

        <p className="profile-intro">
          Professor Appel is the Crimson Guard scientist responsible for the creation of Cobra Island. He is <Link to="/character-bios/Candy">Candy Appel</Link>'s father. Candy was never aware of her father's role in Cobra until she came home one night to find her house surrounded by G.I. Joe.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Formation of Cobra Island</h2>
          <img src={appel1} alt="The formation of Cobra Island" className="profile-block-img" />
          <p>
            Professor Appel engineers the creation of Cobra Island by having a Cobra bunker placed on a fault line in the Gulf of Mexico, in international waters. He draws the Joes' attention to the bunker, forcing them to open fire on it. The depth charges and torpedoes the Joes use have no effect on the bunker — more powerful ordnances are needed. An airstrike of two hundred tons of high-explosive bombs are used, triggering the fault line and causing a landmass to rise, forming an island in the Gulf of Mexico (Issue #40).
          </p>
          <p>
            A sunken, reinforced Cobra freighter had been strategically positioned on the ocean floor. Inside are <Link to="/character-bios/CobraCommander">Cobra Commander</Link>, Professor Appel, and a host of Cobra personnel. As the landmass rises, the freighter rises with it. Cobra forces emerge from the freighter, planting a Cobra flag and declaring the new landmass sovereign territory. Cobra lawyers are dispatched to Washington, D.C., New York, and the capitals of the bordering countries. Cobra Island is born, becoming a recognized sovereign nation (Issue #41).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">A Father's Love</h2>
          <img src={appel2} alt="Professor Appel's search for his daughter" className="profile-block-img" />
          <p className = "italics">
            Professor Appel's daughter, <Link to="/character-bios/Candy">Candy</Link>, is killed outside Springfield when an anti-armor missile strikes the vehicle she is riding in. <Link to="/character-bios/ScrapIron">Scrap-Iron</Link>, who fired the missile, has no idea who the vehicle's occupants are. No one in Cobra knows where Professor Appel's daughter is. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> keeps this from him, while quietly mounting search parties to look for <Link to="/character-bios/Candy">Candy</Link> and his son, <Link to="/character-bios/Billy">Billy</Link>.
          </p>
          <p>
            On Cobra Island, Professor Appel asks <Link to="/character-bios/CobraCommander">Cobra Commander</Link> when his daughter might join him. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> assures him they will be reunited at the first opportunity. Professor Appel leads a recon force of H.I.S.S. tanks to search for <Link to="/character-bios/Zartan">Zartan</Link>, who had departed alone during the night to investigate a hunch of Professor Appel's about a possible intruder on the island.
          </p>
          <p>
            Professor Appel finds what he believes to be <Link to="/character-bios/Zartan">Zartan</Link>'s wounded body near the beach — in truth, it is <Link to="/character-bios/RipCord">Rip Cord</Link>, whom <Link to="/character-bios/Zartan">Zartan</Link> had disguised in his own clothing after transforming into him. Professor Appel carries the man back to the Terror Drome for medical treatment. There, he finds photos of <Link to="/character-bios/Candy">Candy</Link> on the body and realizes the man he is tending to is actually <Link to="/character-bios/RipCord">Rip Cord</Link> — the same man who had once dated his daughter.
          </p>
          <p>
            <Link to="/character-bios/RipCord">Rip Cord</Link> asks Professor Appel if he could see <Link to="/character-bios/Candy">Candy</Link>, believing she is somewhere on the island. It is only then that Professor Appel realizes <Link to="/character-bios/CobraCommander">Cobra Commander</Link> lied to him — and understands why <Link to="/character-bios/CobraCommander">Cobra Commander</Link> had been so evasive about bringing <Link to="/character-bios/Candy">Candy</Link> to the island.
          </p>
          <p>
            Just then, <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> infiltrate the Terror Drome, cutting down the Cobra troops inside. <Link to="/character-bios/StormShadow">Storm Shadow</Link> is on a quest for revenge, hunting for <Link to="/character-bios/Zartan">Zartan</Link> after learning that <Link to="/character-bios/Zartan">Zartan</Link> killed his uncle, the <Link to="/character-bios/HardMaster">Hard Master</Link>.
          </p>
          <p>
            Professor Appel carries <Link to="/character-bios/RipCord">Rip Cord</Link> to the Firebat — a self-piloting, vertical-launch jet — so he can find <Link to="/character-bios/Candy">Candy</Link>. Right after he secures <Link to="/character-bios/RipCord">Rip Cord</Link> inside the cockpit, <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> arrive. Seeing the man dressed as <Link to="/character-bios/Zartan">Zartan</Link> in the cockpit, <Link to="/character-bios/StormShadow">Storm Shadow</Link> launches his attack. Professor Appel throws himself in the way and is struck down and wounded. As the jet begins to launch, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> pulls <Link to="/character-bios/StormShadow">Storm Shadow</Link> to safety.  Professor Appel is killed in the resulting blast (Issue #46).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Appel;
