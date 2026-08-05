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
                Mr. Hama's classic issue with no dialogue. The story is told through the illustrations and layout. Scarlett is captured and delivered to the Silent Castle by Storm Shadow. Scarlett escapes her cell and commandeers a Cobra C.L.A.W. (Covert Light Aerial Weapon). Snake Eyes and Storm Shadow battle. Scarlett finds Snake Eyes, and the two depart. The issue ends by revealing Snake Eyes and Storm Shadow share the same tattoo.
              </p>
            </section>
          </div>
        </div>

        <section className="issue-section">
          <h2 className="issue-section-title">Detailed Summary</h2>
          <p>
            The Cobra ninja Storm Shadow flies a C.L.A.W. (Covert Light Aerial Weapon) towards the Silent Castle with a bound prisoner, wrapped in sheets. Storm Shadow lands in front of Cobra Commander with the prisoner. A Cobra trooper hands Storm Shadow his sword; he cuts the rope and sheets binding the prisoner, revealing the prisoner to be Scarlett. Cobra Commander is pleased. Scarlett is escorted to the dungeon.
          </p>
          <p>
            Snake Eyes parachutes out of a C-130. Scarlett and Storm Shadow are in a prison cell, consisting of a raised platform above a pool of water. The only access to the cell is through a manhole cover in the ceiling. Scarlett's wrists are chained to an anchor on the platform. Storm Shadow places his hand to Scarlett's cheek; Scarlett bites his finger. Storm Shadow starts to draw his blade but sheathes it before the sword is drawn. He then jumps through the manhole, leaving Scarlett alone in the cell.
          </p>
          <p>
            Destro is studying the monitor, which shows the presence of the C-130. Snake Eyes lands on one of the roofs of the Silent Castle. Scarlett uses a hairpin to unlock the chains binding her. Snake Eyes rappels to a balcony, catching the Cobra sentry off guard. Destro looks at his chess board containing Cobra and Joe pieces. He picks up the Baroness piece and stares at it. Storm Shadow opens the manhole to check on Scarlett; Scarlett swings the chains at Storm Shadow, catching him by the neck and pulling him down to the cell. She jumps out of the cell and slams the manhole cover on Storm Shadow's head.
          </p>
          <p>
            Two Cobra troopers spot Snake Eyes over the unconscious body of the sentry. The troopers raise their rifles. Snake Eyes kills one trooper with his combat knife, the other he throws over the ledge. Destro sees the falling body of the trooper from his window. Destro leads a group of Cobra troopers to the balcony. They find a wounded sentry, who points them towards stairs to the next level.
          </p>
          <p>
            Once Destro and the troopers depart, the wounded sentry is revealed to be Snake Eyes. Storm Shadow summons three Red Ninja underlings. Scarlett approaches two Cobra troopers carrying the C.L.A.W. from behind and knocks the troopers out with her chains. She straps the C.L.A.W. on her back and flies down the hallway.
          </p>
          <p>
            Snake Eyes arrives at the open manhole cover looking for Scarlett. A Red Ninja attacks. Snake Eyes defeats the ninja. Another Red Ninja appears in an open doorway wielding a pair of Sai. Snake Eyes throws a grenade, killing the ninja and causing an explosion. Storm Shadow and the remaining Red Ninja ambush Snake Eyes when he reaches the next room. The Red Ninja attacks with a kusarigama (chain and sickle weapon). Snake Eyes catches the counterweight at the end of the chain and wraps the ninja up with his own chain. He then uses the ninja to block Storm Shadow's attack. Storm Shadow kills the remaining ninja. Snake Eyes jumps on Storm Shadow's head and flees the room towards the parapets.
          </p>
          <p>
            There he finds Scarlett flying with the C.L.A.W. Scarlett lands in front of Snake Eyes. Storm Shadow appears. Storm Shadow throws his sword at Scarlett. Snake Eyes catches the blade and throws it away. Scarlett and Snake Eyes fly away. The issue ends by revealing Snake Eyes and Storm Shadow share the same tattoo on their forearms (Snake Eyes' uniform is torn on the sleeve; Storm Shadow's forearm wrap has come undone).
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