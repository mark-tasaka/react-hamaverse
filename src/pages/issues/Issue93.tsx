import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/IssueProfile.css';

import cover93 from './img/cover93.jpg';

interface CreativeTeam {
  script: string;
  pencils: string;
  inks: string;
  coloring: string;
  lettering: string;
  editor: string;
  editorInChief: string;
}

const CREATIVE_TEAM: CreativeTeam[] = [
  {
    script: 'Larry Hama',
    pencils: 'M.D. Bright',
    inks: 'Randy Emberlin',
    coloring: 'Bob Sharen',
    lettering: 'Rick Parker',
    editor: 'Bobbie Chase',
    editorInChief: 'Tom DeFalco',
  },
];

const Issue93: React.FC = () => {
  const credits = CREATIVE_TEAM[0];

  return (
    <main className="issue-profile-page">
      <div className="container">

        <div className="issue-header">
          <img src={cover93} alt="Issue 93 cover — Taking the Plunge" className="issue-cover" />
          <div className="issue-header-info">
            <div className="issue-heading-row">
              <p className="issue-date">Issue 93 (November 1989)</p>
              <h1 className="issue-title">Taking the Plunge</h1>
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
                <p className="issue-credit-label">Coloring</p>
                <p className="issue-credit-name">{credits.coloring}</p>
              </div>
              <div>
                <p className="issue-credit-label">Lettering</p>
                <p className="issue-credit-name">{credits.lettering}</p>
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
                The <Link to="/character-bios/Baroness">Baroness</Link> and the Dreadnoks must deliver the captured <Link to="/character-bios/Clutch">Clutch</Link> and Rock 'n Roll back to the G.I. Joes, having turned them into unwitting Cobra agents through use of the Brainwave Scanner. Meanwhile, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> are in Switzerland for <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' upcoming reconstructive facial surgery at the Bern Institute of Reconstructive Surgery, scheduled for the following morning. <Link to="/character-bios/Clutch">Clutch</Link> and Rock 'n Roll are returned to the Joes, and the surgeon who will operate on <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> unknowingly informs the <Link to="/character-bios/Baroness">Baroness</Link> of his surgery.
              </p>
            </section>
          </div>
        </div>

        <section className="issue-section">
          <h2 className="issue-section-title">Detailed Summary</h2>
          <p>
            The issue opens with the <Link to="/character-bios/Baroness">Baroness</Link>, the Dreadnoks, and a bound <Link to="/character-bios/Clutch">Clutch</Link> and Rock 'n Roll aboard a Cobra transport helicopter enroute to the Cobra Consulate in New York. The <Link to="/character-bios/Baroness">Baroness</Link> and Zarana are fighting throughout the flight. When the helicopter lands on the Consulate's roof, the two continue their fight on the platform, where Destro is waiting. Destro tells them to set aside their differences, since they will share joint control of the Consulate in his absence — he is departing to handle matters in New York and Broca Beach.
          </p>
          <p>
            Inside the Consulate, the <Link to="/character-bios/Baroness">Baroness</Link> and the Dreadnoks continue their work with the Brainwave Scanner, implanting false memories in <Link to="/character-bios/Clutch">Clutch</Link> and Rock 'n Roll. The Dreadnoks then depart with the two captives in civilian vehicles — an ice cream truck and a van — intending to deliver their brainwashed prisoners to the Joes. The <Link to="/character-bios/Baroness">Baroness</Link> places a call to the Joes, tipping them off about the vehicles carrying <Link to="/character-bios/Clutch">Clutch</Link> and Rock 'n Roll.
          </p>
          <p>
            In Switzerland, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> visit the Bern Institute of Reconstructive Surgery. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> tells <Link to="/character-bios/Scarlett">Scarlett</Link> he wants to go through with the surgery to regain some sense of normalcy in his life. <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link> reviews photos of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> taken before the helicopter accident alongside his current, scarred face, and confirms the surgery will begin the next morning.
          </p>
          <p>
            On Long Island, the Joes catch up to the Dreadnoks, and a firefight breaks out. The Joes come out on top, lining the Dreadnoks up against a wall and freeing <Link to="/character-bios/Clutch">Clutch</Link> and Rock 'n Roll. A crowd of angry onlookers gathers around the scene — one shoves Lady Jay, while others accuse the Joes of military brutality, invoking comparisons to Kent State and the Tiananmen Square massacre. The distraction gives the Dreadnoks a chance to escape in their ice cream truck. Roadblock fires his .50-cal into the air to disperse the crowd, and the Joes take off in pursuit.
          </p>
          <p>
            At the Cobra Consulate, the <Link to="/character-bios/Baroness">Baroness</Link> receives a call from <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link>, who had performed her own reconstructive surgery years earlier. He tells her his latest client's surgery was paid for by the Chaplain's Assistant Training School at Fort Wadsworth and faxes her a photo of the client taken nearly twenty years prior. The <Link to="/character-bios/Baroness">Baroness</Link> recognizes the face immediately — it belongs to the man who murdered her brother in Saigon two decades before.
          </p>
          <p>
            Back on Long Island, the Dreadnoks are speeding away in the ice cream truck when Zarana calls the <Link to="/character-bios/Baroness">Baroness</Link>, demanding to know why she was set up. The <Link to="/character-bios/Baroness">Baroness</Link> replies that she needed their release to look credible — Zarana and the Dreadnoks were meant to put up a fight and lose. She says she has a contingency plan and presses a red button. The ice cream truck's engine explodes.
          </p>
        </section>

        <div className="issue-back-row">
          <Link to="/comic-issues" className="btn">Back to Comic Issues</Link>
        </div>

      </div>
    </main>
  );
};

export default Issue93;
