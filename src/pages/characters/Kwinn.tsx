import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import kwinn1 from './img/kwinn/kwinn_1.png';
import kwinn2 from './img/kwinn/kwinn_2.png';
import kwinn3 from './img/kwinn/kwinn_3.png';
import kwinn4 from './img/kwinn/kwinn_4.png';
import kwinn5 from './img/kwinn/kwinn_5.png';

const Kwinn: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Kwinn</h1>

        <p className="profile-intro">
          Kwinn (likely an alias) is an Inuit mercenary of exceptional size who has worked as a freelancer for a number of intelligence agencies, including the CIA, Mossad, KGB, and MI6. The Joes first encounter Kwinn in the Arctic. Their next encounter comes in Sierra Gordo, where Kwinn is working as a mercenary for Cobra. Kwinn and Snake Eyes later join forces to track down Dr. Venom.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Encounter in the Arctic</h2>
          <img src={kwinn1} alt="Kwinn's encounter with the Joes in the Arctic" className="profile-block-img" />
          <p>
            A G.I. Joe team made up of <Link to="/character-bios/Stalker">Stalker</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and <Link to="/character-bios/Breaker">Breaker</Link> first encounters Kwinn in the Arctic. <Link to="/character-bios/Flagg">General Flagg</Link> dispatches the team there in response to a commando-style raid on an American research station, where all its records went missing.
          </p>
          <p>
            The team observes Kwinn stealing a frequency modulator from a Russian station. The Joes track him down, only to be captured themselves. Kwinn loads their weapons and gear onto his dog sled, and before departing, reveals that the Russians are using low-frequency fear waves against the U.S. to induce mass paranoia.
          </p>
          <p>
            The Joes build a makeshift ice boat and catch up to Kwinn, triggering an explosion that buries his sled and dogs beneath an avalanche of snow. But Kwinn has anticipated the ambush and outsmarted them — he had already removed the firing pins from their guns, which now hang from his necklace alongside a collection of weasel skulls.
          </p>
          <p>
            Kwinn tells the Joes he regrets taking the assignment once he learned of the Russians' plan, but feels obligated to honor his contract regardless. He gathers his sled and dogs and departs for the rendezvous point, but along the way, builds a small cairn five miles short of the meeting site, leaving behind his necklace of weasel skulls and the Joes' firing pins.
          </p>
          <p>
            Kwinn delivers the equipment to the Russians, telling them he intends to be as far away as possible by the time the Joes arrive. The Russians insist he stay and protect them, but Kwinn tells them his contract is fulfilled and departs. The Joes arrive shortly after — with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> now wearing Kwinn's necklace of weasel skulls (Issue #2).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Sierra Gordo</h2>
          <img src={kwinn2} alt="Kwinn as a mercenary in Sierra Gordo" className="profile-block-img" />
          <p>
            Kwinn serves as a mercenary for Cobra in Sierra Gordo when a G.I. Joe team of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Stalker">Stalker</Link>, Gung-Ho, and <Link to="/character-bios/Breaker">Breaker</Link> is sent there. He is in the Cobra-controlled warehouse with <Link to="/character-bios/Venom">Dr. Venom</Link> and a team of Cobra operatives when the Joes arrive. Kwinn captures the Joes. The Joes are tied up, and <Link to="/character-bios/Stalker">Stalker</Link>, Gung-Ho, and <Link to="/character-bios/Breaker">Breaker</Link> are taken aboard a riverboat. Still bitter over being struck by <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Venom">Dr. Venom</Link> pistol-whips him to the point of appearing dead. Cobra troopers leave his bound body behind in the warehouse and set the warehouse ablaze.
          </p>
          <p>
            After the riverboat departs, <Link to="/character-bios/Venom">Dr. Venom</Link> reflects on his earlier encounter with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> in the laboratory and realizes he is only feigning death. The boat carries them to a small artificial island with a pier and a single bunker, guarded by vicious Dobermans. A seaplane is already waiting, carrying the <Link to="/character-bios/Baroness">Baroness</Link> and Scarface. Inside the bunker, the <Link to="/character-bios/Baroness">Baroness</Link>, Scarface, Kwinn, and <Link to="/character-bios/Venom">Dr. Venom</Link> meet, where <Link to="/character-bios/Venom">Dr. Venom</Link> presents the <Link to="/character-bios/Baroness">Baroness</Link> with a virus and serum that took his lab in Sierra Gordo two years to produce.
          </p>
          <p>
            Outside, the three Joes free themselves as <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> swims to the pier. Together, they defeat the Cobra troopers guarding the island. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> orders the others to escape aboard the riverboat while he deals with <Link to="/character-bios/Venom">Dr. Venom</Link> inside the bunker. Kwinn opens fire with his .50-cal, and the <Link to="/character-bios/Baroness">Baroness</Link> and Scarface flee to the seaplane with the serum in hand. As <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> attacks <Link to="/character-bios/Venom">Dr. Venom</Link>, the <Link to="/character-bios/Baroness">Baroness</Link> fires a missile at the island. Kwinn shoves both <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Venom">Dr. Venom</Link> into the bunker, saving their lives as the island sinks beneath the river (Issue #12).
          </p>
          <p>
            Kwinn, <Link to="/character-bios/Venom">Dr. Venom</Link>, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> find themselves trapped together inside the flooded, underwater bunker (Issue #14). The three eventually escape and make their way to an airfield, where they commandeer a vintage WWII Lancaster bomber amid a firefight. <Link to="/character-bios/Venom">Dr. Venom</Link> pilots the aircraft while <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> mans the twin .303 Brownings. Over the ocean, <Link to="/character-bios/Venom">Dr. Venom</Link> attempts to kill both <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and Kwinn by opening the bomb bay doors, but fails. In turn, neither Kwinn nor <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> can kill <Link to="/character-bios/Venom">Dr. Venom</Link> — he is the only one among them who knows how to fly the plane.
          </p>
          <p>
            The aircraft lands on a beach in Miami, and all three are arrested. A Cobra lawyer soon arrives at the police station and arranges for <Link to="/character-bios/Venom">Dr. Venom</Link>'s release (Issue #16).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Escape and Reckoning</h2>
          <img src={kwinn3} alt="Kwinn's escape and final confrontation with Dr. Venom" className="profile-block-img" />
          <p>
            Kwinn and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> escape their cell at the Miami police station, Kwinn using a flexible saw blade hidden in the heel of his boot to cut through the bars on the outside wall (Issue #17). The two track <Link to="/character-bios/Venom">Dr. Venom</Link> to his research facility near the old Brooklyn Navy Yard, where Cobra helicopters soon arrive, carrying Cobra Commander, Destro, and a sizable force of Cobra troopers.
          </p>
          <p>
            Kwinn and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> are captured and sealed inside S.N.A.K.E. battle armor suits, placed under <Link to="/character-bios/Venom">Dr. Venom</Link>'s remote control. The suits are used in Cobra's assault on the G.I. Joe modular headquarters, destroying the team's unmanned P.A.C. and R.A.T. units in the process. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> manages to break free of his suit's control and fires on the one holding Kwinn, destroying its restraining lock and setting him free.
          </p>
          <p>
            Kwinn confronts <Link to="/character-bios/Venom">Dr. Venom</Link>, grabbing him with one hand while holding an unpinned grenade in the other. Kwinn speaks of the Weasel spirit that has long taunted him, saying he cannot hope to fight the weasel in others until he has conquered it within himself. He spares <Link to="/character-bios/Venom">Dr. Venom</Link>'s life and releases his grip. But as Kwinn turns to walk away, <Link to="/character-bios/Venom">Dr. Venom</Link> draws his pistol and shoots him in the back. Kwinn turns around, says he has finally made peace with the weasel, and falls to the ground, dead — the unpinned grenade slipping from his hand. It explodes, killing <Link to="/character-bios/Venom">Dr. Venom</Link> as well (Issue #19).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">A Traditional Send-Off</h2>
          <img src={kwinn4} alt="Snake Eyes' traditional Inuit send-off for Kwinn" className="profile-block-img" />
          <p>
            In honor of his friend, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> arranges a traditional Inuit send-off for Kwinn. Wild Bill loads Kwinn's body and a kayak aboard his Dragonfly helicopter, with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> riding along beside him.
          </p>
          <p>
            Wild Bill flies them to the lighthouse at Montauk Point, where the current sweeps north toward the Arctic. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> lays Kwinn's body in the kayak, along with his weasel skull necklace and weapons. Wild Bill narrates the ceremony, giving voice to what the silent <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> cannot say. Together, the two push the kayak out into the water, where the current carries it away toward the setting sun (Issue #22).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <img src={kwinn5} alt="Notes on Kwinn" className="profile-block-img" />
          <p>
            Kwinn is a creation of Mr. Hama, and a showcase of his talent for crafting unique, memorable characters. No action figure of Kwinn was ever produced during the Marvel run (1982–1994). In the 2000s, however, two versions were finally released: a <a href="https://www.yojoe.com/action/04/trackerkwinn.shtml" target="_blank" rel="noopener noreferrer">2004 figure</a> and a <a href="https://www.yojoe.com/action/13/kwinn.shtml" target="_blank" rel="noopener noreferrer">2013 figure</a>.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Kwinn;
