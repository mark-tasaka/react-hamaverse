import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import steeler1 from './img/steeler/steeler_1.png';
import steeler2 from './img/steeler/steeler_2.png';

const Steeler: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Steeler (Ralph Pulaski)</h1>

        <p className="profile-intro">
          Ralph W. Pulaski (Steeler) is one of the original members of G.I. Joe, serving as the M.O.B.A.T. (Motorized Battle Tank) commander. Pulaski hails from a blue-collar background and puts himself through college on a ROTC scholarship. <Link to="/character-bios/Flagg">General Flagg</Link> recruits him into G.I. Joe on a recommendation from Sparks, who learns that Pulaski once carried a dead crewmate ten kilometers across the desert of Trucial Abysmia following an ambush on a supply convoy.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Ten Kilometers to Safety</h2>
          <img src={steeler1} alt="Steeler carrying his fallen gunner in Trucial Abysmia" className="profile-block-img" />
          <p>
            Prior to the formation of G.I. Joe, Steeler commands a tank in Trucial Abysmia, part of a peacekeeping supply convoy when it is ambushed by a private warlord's mercenary army. Everyone in the convoy is killed except for Steeler and his gunner. Steeler opens fire with the tank's turret-mounted .50-cal, killing the mercenaries as they loot the spoils of the ambush.  He pulls his wounded gunner from the burning tank.
          </p>
          <p>
            With the radios dead and a sandstorm approaching, the nearest outpost — a French compound — lies ten kilometers away. Steeler carries his wounded gunner the entire distance, but his gunner dies along the way. Refusing to leave him behind, Steeler carries his body the rest of the journey to the compound. When Sparks learns of this act, he recommends Steeler to <Link to="/character-bios/Flagg">General Flagg</Link> for G.I. Joe (G.I. Joe Declassified #1).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">The Parade Ambush</h2>
          <img src={steeler2} alt="The MOBAT parade ambush" className="profile-block-img" />
          <p>
            The Joint Chiefs of Staff are wary of deploying the M.O.B.A.T. — a sensitive piece of military equipment — on missions. <Link to="/character-bios/Flagg">General Flagg</Link> devises a plan to secretly include the tank in a parade, where it will roll past the Joint Chiefs to prove the M.O.B.A.T. looks no different from an ordinary tank. To cover himself, <Link to="/character-bios/Flagg">Flagg</Link> writes a memo to <Link to="/character-bios/Austin">General Austin</Link> explaining the plan. Cobra learns of the tank's involvement in the parade and sets out to capture it, unaware — as planned — that the M.O.B.A.T. will be unarmed. Steeler, <Link to="/character-bios/Clutch">Clutch</Link>, and <Link to="/character-bios/Breaker">Breaker</Link> operate the tank.
          </p>
          <p>
            As the M.O.B.A.T. travels down Fifth Avenue, flanked by a large float behind and the Springfield band in front, band members unfurl a large banner on either side of the tank, hiding it from public view. The float then opens up, revealing a large hidden cavity built for the tank. Steeler recognizes the trap immediately and orders <Link to="/character-bios/Clutch">Clutch</Link> to hit the gas. The marching band — really Cobra operatives — pursues the unarmed M.O.B.A.T. as it flees to Central Park, where it hides in the water before ambushing its pursuers. The band initially scatters, until <Link to="/character-bios/CobraCommander">Cobra Commander</Link> radios them that the tank is unarmed. As they raise their anti-tank weapons, the M.O.B.A.T. appears to "fire" its cannon and the band surrenders on the spot. The sound of the cannon is actually <Link to="/character-bios/Breaker">Breaker</Link> popping his chewing gum over the loudspeaker.
          </p>
          <p>
            The M.O.B.A.T. leads the captured prisoners toward the grandstand holding <Link to="/character-bios/Flagg">General Flagg</Link> and the Joint Chiefs of Staff. <Link to="/character-bios/Clutch">Clutch</Link> detects heavy electronic activity coming from inside the grandstand, suggesting a hidden Cobra command post. Steeler and <Link to="/character-bios/Breaker">Breaker</Link> leap out of the tank while <Link to="/character-bios/Clutch">Clutch</Link> continues driving it straight toward the stands. The Joint Chiefs flee in a panic, while <Link to="/character-bios/Flagg">General Flagg</Link> curses at <Link to="/character-bios/Clutch">Clutch</Link>, threatening to bust him down to a permanent, no-class latrine orderly. The M.O.B.A.T. crashes through the grandstand, exposing a hidden Cobra command post with <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and the <Link to="/character-bios/Baroness">Baroness</Link> inside.
          </p>
          <p>
            <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and <Link to="/character-bios/Flagg">General Flagg</Link> raise their pistols at one another, but <Link to="/character-bios/CobraCommander">Cobra Commander</Link> grabs a nearby child as a human shield. <Link to="/character-bios/Flagg">General Flagg</Link> holds his fire, while <Link to="/character-bios/CobraCommander">Cobra Commander</Link> fires a shot that grazes <Link to="/character-bios/Flagg">Flagg</Link>'s temple. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and the <Link to="/character-bios/Baroness">Baroness</Link> make their escape in the chaos that follows (Issue #5).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), only a single version of Steeler was released: the <a href="https://www.yojoe.com/action/82/steeler.shtml" target="_blank" rel="noopener noreferrer">1982 figure</a> (and a <a href="https://www.yojoe.com/action/83/steeler1p5.shtml" target="_blank" rel="noopener noreferrer">1983 swivel-arm</a> variant). Steeler's file card lists his rank as O-1, a commissioned officer (Second Lieutenant).  However, his interactions and relations with the enlisted team members throughout the comic depict him as one of the enlisted ranks himself.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Steeler;
