import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/IssueProfile.css';

import cover27 from './img/cover27.jpg';

interface CreativeTeam {
  script: string;
  pencils: string;
  inks: string;
  lettering: string;
  coloring: string;
  editor: string;
  editorInChief: string;
}

const CREATIVE_TEAM: CreativeTeam[] = [
  {
    script: 'Larry Hama',
    pencils: 'Frank Springer',
    inks: 'Andy Mushynsky',
    lettering: 'Rick Parker',
    coloring: 'George Roussos',
    editor: 'Denny O\u2019Neil',
    editorInChief: 'Jim Shooter',
  },
];

const Issue27: React.FC = () => {
  const credits = CREATIVE_TEAM[0];

  return (
    <main className="issue-profile-page">
      <div className="container">

        <div className="issue-header">
          <img src={cover27} alt="Issue 27 cover — Snake Eyes: The Origin, Part 2" className="issue-cover" />
          <div className="issue-header-info">
            <div className="issue-heading-row">
              <p className="issue-date">Issue 27 (September 1984)</p>
              <h1 className="issue-title">Snake Eyes: The Origin, Part 2</h1>
            </div>

            <div className="issue-credits">
              <div>
                <p className="issue-credit-label">Script</p>
                <p className="issue-credit-name">{credits.script}</p>
              </div>
              <div>
                <p className="issue-credit-label">Pencils</p>
                <p className="issue-credit-name">{credits.pencils}</p>
              </div>
              <div>
                <p className="issue-credit-label">Inks</p>
                <p className="issue-credit-name">{credits.inks}</p>
              </div>
              <div>
                <p className="issue-credit-label">Lettering</p>
                <p className="issue-credit-name">{credits.lettering}</p>
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
                This issue continues exploring <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' backstory through Hawk and <Link to="/character-bios/Scarlett">Scarlett</Link>'s accounts. A secondary story follows the Joes' ongoing adventure in the Florida Everglades.
              </p>
            </section>
          </div>
        </div>

        <section className="issue-section">
          <h2 className="issue-section-title">Detailed Summary</h2>
          <p>
            The main story in this issue is <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' backstory; a secondary story follows the Joes' ordeal in the Florida Everglades.
          </p>
        </section>

        <section className="issue-section">
          <h2 className="issue-section-title">Snake Eyes' Origins Continue</h2>
          <p>
            In the Pit, Hawk recounts his second encounter with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. He and <Link to="/character-bios/Stalker">Stalker</Link> were putting together the G.I. Joe team, and <Link to="/character-bios/Stalker">Stalker</Link> recommended <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. They tracked him to a cabin in the High Sierras, where they found a wolf living alongside him and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> himself carrying dead rabbits he'd caught with his bare hands. Hawk and <Link to="/character-bios/Stalker">Stalker</Link> convinced him to join G.I. Joe.
          </p>
          <p>
            <Link to="/character-bios/Scarlett">Scarlett</Link> then recounts her first encounter with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. She was training the men in hand-to-hand combat; her first opponent, Steeler, she defeated easily, though she still felt she needed to prove herself to the rest of the men. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> was her next opponent — though he clearly outskilled her, he allowed her to win to spare her pride. <Link to="/character-bios/Scarlett">Scarlett</Link> was both impressed and intrigued.
          </p>
          <p>
            After practice, <Link to="/character-bios/Scarlett">Scarlett</Link> found <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> walking off post and caught up with him; the two talked, then caught a ferry to Manhattan for dinner. On the ferry, she learned about the photo of his twin sister he'd carried with him in 'Nam, and his belief that nothing bad would happen to him as long as he kept it close. The two grew close.
          </p>
          <p>
            Months later, on a mission in the Middle East, <Link to="/character-bios/Scarlett">Scarlett</Link> recalls that she, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, Grunt, and Rock 'n Roll were aboard one of two helicopters, neither of which had proper dust filters on their air intakes. Dust clogged the intake and caused the engine to stall, and the pilot ordered everyone to jump. Rock 'n Roll and Grunt jumped clear, but one of the doors slammed shut on <Link to="/character-bios/Scarlett">Scarlett</Link>'s webbing, trapping her inside. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> stayed behind to save her. The helicopter crashed into the second one, spraying burning fuel through the plexiglass and into <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' face, severing his vocal cords. <Link to="/character-bios/Scarlett">Scarlett</Link> was knocked unconscious in the crash.
          </p>
          <p>
            Rock 'n Roll and Grunt rushed to the burning wreckage and found a severely burned <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> carrying the unconscious <Link to="/character-bios/Scarlett">Scarlett</Link> to safety. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> spent the next six months in the hospital. He could have retired on a disability pension, but chose to remain on the team instead. <Link to="/character-bios/Scarlett">Scarlett</Link> wanted to resume their relationship, but he gently pushed her away.
          </p>
          <p>
            In Spanish Harlem, inside the <Link to="/character-bios/SoftMaster">Soft Master</Link>'s restaurant (Comidas Chinas), the <Link to="/character-bios/SoftMaster">Soft Master</Link> holds the arrow that killed his brother, the <Link to="/character-bios/HardMaster">Hard Master</Link>. He asks <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> why his brother would have denied with his dying breath that Storm Shadow fired the shot, when only someone with Storm Shadow's skill could have made it. Just then, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> spots Storm Shadow watching through the window and opens fire. The moment <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' clip runs dry, Storm Shadow bursts through the window, steals the arrow, and flees. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> gives chase.
          </p>
          <p>
            At the Pit, <Link to="/character-bios/Scarlett">Scarlett</Link> intercepts a police report of gunfire matching descriptions of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and Storm Shadow. The Dragonfly helicopter and a VAMP are dispatched — Wild Bill and <Link to="/character-bios/Scarlett">Scarlett</Link> aboard the Dragonfly, and Clutch, Hawk, and <Link to="/character-bios/Stalker">Stalker</Link> in the VAMP. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> chases Storm Shadow to the top of a moving train, and the two battle as <Link to="/character-bios/Scarlett">Scarlett</Link> and Wild Bill spot them and fly the Dragonfly toward the train.
          </p>
          <p>
            Storm Shadow, his back to the direction the train is traveling, fails to notice an approaching tunnel. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> drops his weapon and leaps backward between the train cars; Storm Shadow follows, unknowingly saving his own life from the tunnel. Realizing what <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> has done for him, Storm Shadow drops his own weapon and tells him he did not kill his brother — that the arrow he retrieved from the restaurant was his own, the same one he had used to kill a squirrel earlier that day. When he went to retrieve it, both the arrow and the squirrel were gone. Storm Shadow says he saw the real assassin, a masked man, and chased him to a Cobra helicopter piloted by someone else.
          </p>
          <p>
            Storm Shadow explains he has spent years working his way up through Cobra's ranks in search of the assassin, and that once his quest for vengeance is complete, perhaps the two of them can be brothers again. He then departs.
          </p>
          <p>
            <Link to="/character-bios/Scarlett">Scarlett</Link> and Wild Bill reach the train on foot. <Link to="/character-bios/Scarlett">Scarlett</Link> finds <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> alone between the train cars and asks where Storm Shadow is. She pauses, then adds, "You never answer."
          </p>
        </section>

        <section className="issue-section">
          <h2 className="issue-section-title">Florida Everglades</h2>
          <p>
            Destro, Zartan, Cobra Commander, and the Baroness escape the quicksand. Firefly and Wild Weasel set a Malayan tiger-gate trap for the pursuing Joes; meanwhile, Junkyard reunites with Mutt, Torpedo, and Tripwire. Firefly and Wild Weasel hear the trap spring and return to investigate, only to be captured by the Joes. Just then, Destro, Zartan, Cobra Commander, and the Baroness arrive and open fire, allowing Mutt, Junkyard, Torpedo, and Tripwire to escape into the swamp. Zartan, recognizing the futility of the chase, declares it's time to call in the Dreadnocks.
          </p>
        </section>

        <div className="issue-back-row">
          <Link to="/comic-issues" className="btn">Back to Comic Issues</Link>
        </div>

      </div>
    </main>
  );
};

export default Issue27;
