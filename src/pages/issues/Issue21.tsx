import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/IssueProfile.css';

import cover21 from './img/cover21.jpg';

interface CreativeTeam {
  script: string;
  finishes: string;
  coloring: string;
  editor: string;
  editorInChief: string;
}

const CREATIVE_TEAM: CreativeTeam[] = [
  {
    script: 'Larry Hama',
    finishes: 'Steve Leialoha',
    coloring: 'George Roussos',
    editor: 'Denny O\u2019Neil',
    editorInChief: 'Jim Shooter',
  },
];

const Issue21: React.FC = () => {
  const credits = CREATIVE_TEAM[0];

  return (
    <main className="issue-profile-page">
      <div className="container">

        <div className="issue-header">
          <img src={cover21} alt="Issue 21 cover — Silent Interlude" className="issue-cover" />
          <div className="issue-header-info">
            <div className="issue-heading-row">
              <p className="issue-date">Issue 21 (March 1984)</p>
              <h1 className="issue-title">Silent Interlude</h1>
            </div>

            <div className="issue-credits">
              <div>
                <p className="issue-credit-label">Story and Breakdowns</p>
                <p className="issue-credit-name">{credits.script}</p>
              </div>
              <div>
                <p className="issue-credit-label">Finishes</p>
                <p className="issue-credit-name">{credits.finishes}</p>
              </div>
              <div>
                <p className="issue-credit-label">Coloring</p>
                <p className="issue-credit-name">{credits.coloring}</p>
              </div>
              <div>
                <p className="issue-credit-label">Editor</p>
                <p className="issue-credit-name">{credits.editor}</p>
              </div>
              <div>
                <p className="issue-credit-label">Editor in Chief</p>
                <p className="issue-credit-name">{credits.editorInChief}</p>
              </div>
            </div>

            <section className="issue-section">
              <h2 className="issue-section-title">Summary</h2>
              <p>
                Mr. Hama's classic issue with no dialogue. The story is told through the illustrations and layout. <Link to="/character-bios/Scarlett">Scarlett</Link> is captured and delivered to the Silent Castle by <Link to="/character-bios/StormShadow">Storm Shadow</Link>. <Link to="/character-bios/Scarlett">Scarlett</Link> escapes her cell and commandeers a Cobra C.L.A.W. (Covert Light Aerial Weapon). <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> battle. <Link to="/character-bios/Scarlett">Scarlett</Link> finds <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and the two depart. The issue ends by revealing <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> share the same tattoo.
              </p>
            </section>
          </div>
        </div>

        <section className="issue-section">
          <h2 className="issue-section-title">Detailed Summary</h2>
          <p>
            The Cobra ninja <Link to="/character-bios/StormShadow">Storm Shadow</Link> flies a C.L.A.W. (Covert Light Aerial Weapon) towards the Silent Castle with a bound prisoner, wrapped in sheets. <Link to="/character-bios/StormShadow">Storm Shadow</Link> lands in front of Cobra Commander with the prisoner. A Cobra trooper hands <Link to="/character-bios/StormShadow">Storm Shadow</Link> his sword; he cuts the rope and sheets binding the prisoner, revealing the prisoner to be <Link to="/character-bios/Scarlett">Scarlett</Link>. Cobra Commander is pleased. <Link to="/character-bios/Scarlett">Scarlett</Link> is escorted to the dungeon.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> parachutes out of a C-130. <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> are in a prison cell, consisting of a raised platform above a pool of water. The only access to the cell is through a manhole cover in the ceiling. <Link to="/character-bios/Scarlett">Scarlett</Link>'s wrists are chained to an anchor on the platform. <Link to="/character-bios/StormShadow">Storm Shadow</Link> places his hand to <Link to="/character-bios/Scarlett">Scarlett</Link>'s cheek; <Link to="/character-bios/Scarlett">Scarlett</Link> bites his finger. <Link to="/character-bios/StormShadow">Storm Shadow</Link> starts to draw his blade but sheathes it before the sword is drawn. He then jumps through the manhole, leaving <Link to="/character-bios/Scarlett">Scarlett</Link> alone in the cell.
          </p>
          <p>
            Destro is studying the monitor, which shows the presence of the C-130. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> lands on one of the roofs of the Silent Castle. <Link to="/character-bios/Scarlett">Scarlett</Link> uses a hairpin to unlock the chains binding her. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> rappels to a balcony, catching the Cobra sentry off guard. Destro looks at his chess board containing Cobra and Joe pieces. He picks up the <Link to="/character-bios/Baroness">Baroness</Link> piece and stares at it. <Link to="/character-bios/StormShadow">Storm Shadow</Link> opens the manhole to check on <Link to="/character-bios/Scarlett">Scarlett</Link>; <Link to="/character-bios/Scarlett">Scarlett</Link> swings the chains at <Link to="/character-bios/StormShadow">Storm Shadow</Link>, catching him by the neck and pulling him down to the cell. She jumps out of the cell and slams the manhole cover on <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s head.
          </p>
          <p>
            Two Cobra troopers spot <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> over the unconscious body of the sentry. The troopers raise their rifles. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> kills one trooper with his combat knife, the other he throws over the ledge. Destro sees the falling body of the trooper from his window. Destro leads a group of Cobra troopers to the balcony. They find a wounded sentry, who points them towards stairs to the next level.
          </p>
          <p>
            Once Destro and the troopers depart, the wounded sentry is revealed to be <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. <Link to="/character-bios/StormShadow">Storm Shadow</Link> summons three Red Ninja underlings. <Link to="/character-bios/Scarlett">Scarlett</Link> approaches two Cobra troopers carrying the C.L.A.W. from behind and knocks the troopers out with her chains. She straps the C.L.A.W. on her back and flies down the hallway.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> arrives at the open manhole cover looking for <Link to="/character-bios/Scarlett">Scarlett</Link>. A Red Ninja attacks. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> defeats the ninja. Another Red Ninja appears in an open doorway wielding a pair of Sai. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> throws a grenade, killing the ninja and causing an explosion. <Link to="/character-bios/StormShadow">Storm Shadow</Link> and the remaining Red Ninja ambush <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> when he reaches the next room. The Red Ninja attacks with a kusarigama (chain and sickle weapon). <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> catches the counterweight at the end of the chain and wraps the ninja up with his own chain. He then uses the ninja to block <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s attack. <Link to="/character-bios/StormShadow">Storm Shadow</Link> kills the remaining ninja. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> jumps on <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s head and flees the room towards the parapets.
          </p>
          <p>
            There he finds <Link to="/character-bios/Scarlett">Scarlett</Link> flying with the C.L.A.W. <Link to="/character-bios/Scarlett">Scarlett</Link> lands in front of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. <Link to="/character-bios/StormShadow">Storm Shadow</Link> appears. <Link to="/character-bios/StormShadow">Storm Shadow</Link> throws his sword at <Link to="/character-bios/Scarlett">Scarlett</Link>. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> catches the blade and throws it away. <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> fly away. The issue ends by revealing <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> share the same tattoo on their forearms (<Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' uniform is torn on the sleeve; <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s forearm wrap has come undone).
          </p>
        </section>

        <div className="issue-back-row">
          <Link to="/comic-issues" className="btn">Back to Comic Issues</Link>
        </div>

      </div>
    </main>
  );
};

export default Issue21;
