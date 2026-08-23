import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/IssueProfile.css';

import cover95 from './img/cover95.jpg';

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

const Issue95: React.FC = () => {
  const credits = CREATIVE_TEAM[0];

  return (
    <main className="issue-profile-page">
      <div className="container">

        <div className="issue-header">
          <img src={cover95} alt="Issue 95 cover — No Turning Back" className="issue-cover" />
          <div className="issue-header-info">
            <div className="issue-heading-row">
              <p className="issue-date">Issue 95</p>
              <h1 className="issue-title">No Turning Back</h1>
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
                There are two story arcs in this issue. The main arc follows <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> as he escapes the dungeon below the Cobra Consulate and fights his way up through the building to confront the <Link to="/character-bios/Baroness">Baroness</Link>. The secondary arc follows <Link to="/character-bios/Billy">Billy</Link> and Raptor's exhumation of <Link to="/character-bios/CobraCommander">Cobra Commander</Link>'s grave.
              </p>
            </section>
          </div>
        </div>

        <section className="issue-section">
          <h2 className="issue-section-title">Detailed Summary</h2>
          <h3 className="issue-section-title">Cobra Consulate (New York City)</h3>
          <p>
            In the subbasement of the Cobra Consulate in New York, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, wearing the tattered remains of his hospital gown, is chained to the wall, watched over by a trio of torturers, the Paine Brothers. The <Link to="/character-bios/Baroness">Baroness</Link> tells <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> she has killed his beloved <Link to="/character-bios/Scarlett">Scarlett</Link> and has an excruciating fate planned for him. A Tele-Viper informs her that a helicopter carrying Destro is landing on the roof, and she departs.
          </p>
          <p>
            On the roof, Destro asks the <Link to="/character-bios/Baroness">Baroness</Link> about the extraordinary amount of G.I. Joe activity in New York. Nervous, she replies that she has no idea.
          </p>
          <p>
            Aboard a C-130 transport over the Atlantic, a comatose <Link to="/character-bios/Scarlett">Scarlett</Link> lies hooked up to medical equipment, with Doc, Lifeline, and <Link to="/character-bios/Hawk">Hawk</Link> at her side. Doc tells <Link to="/character-bios/Hawk">Hawk</Link> that her condition is as bad as it gets. The C-130 is en route to New York.
          </p>
          <p>
            Back at the Bern Institute in Switzerland, <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link> enters his office to find Chuckles sitting at his desk. Chuckles tells him about his phone call to the <Link to="/character-bios/Baroness">Baroness</Link> in New York. <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link>, outraged that Chuckles is armed — firearms being prohibited for non-Swiss citizens — reaches for the phone to call the authorities. Roadblock interrupts, places a hand over the receiver, and tells the doctor he doesn't care what the authorities think.
          </p>
          <p>
            In the subbasement, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> draws on his ninja training — the Way of the Inner Anvil — to slow his heartbeat and breathing to mimic death. One of the Paine Brothers, carrying a hot fire poker, approaches, believing him dead. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> kicks him in the head, seizes the burning poker, and uses it to break the anchor holding his chains. In the fight that follows, one of the brothers hurls a brazier of burning coal at his face; <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> recovers quickly and kills him.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> dons the outfits of the dead Paine Brothers and collects their weapons. Meanwhile, in the penthouse command center, a Tele-Viper discreetly shows the <Link to="/character-bios/Baroness">Baroness</Link> the feed from the subbasement. She whispers an order to dispatch a team of Vipers to recapture him.
          </p>
          <p>
            A team of Night Vipers enters the basement and is swiftly dispatched by <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>.
          </p>
          <p>
            The main floor of the Consulate falls into chaos as Vipers scramble to seal off every potential exit from the lower levels. A Siegie (Crimson Guardsman) asks the Tele-Viper receptionist about his appointment with the <Link to="/character-bios/Baroness">Baroness</Link>; he's told she isn't seeing anyone today, and leaves the building.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> collects a duffle bag full of explosives from the subbasement armory. A group of Vipers stumbles upon him mid-task; their leader orders the others not to shoot, warning that gunfire could set off the explosives and kill everyone. The Vipers slowly back away.
          </p>
          <p>
            On the roof, the <Link to="/character-bios/Baroness">Baroness</Link> and her Tele-Viper see Destro off as he boards his helicopter. Destro warns her that if she cannot secure the release of Zarana and the Dreadnoks from Joe custody within a week, he will act himself. As his helicopter departs, the <Link to="/character-bios/Baroness">Baroness</Link> orders the Tele-Viper to mobilize everyone — she wants <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> dead.
          </p>
          <p>
            Across the street at a newsstand, the Siegie who had just left the Consulate removes his helmet, revealing himself to be <Link to="/character-bios/Wade">Wade Collins</Link>. <Link to="/character-bios/Stalker">Stalker</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> are also in the newsstand. A powerful explosion erupts in the Consulate's lobby. <Link to="/character-bios/Wade">Wade</Link> sheds his Crimson Guard uniform for combat fatigues, and the three enter the building.
          </p>
          <p>
            Dead Vipers litter the floor amid the debris of the explosion. <Link to="/character-bios/Wade">Wade</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, and <Link to="/character-bios/Stalker">Stalker</Link> come across an injured Techno-Viper broadcasting what Snake Eyes' activities. The elevator doors open, and a flood of Consulate staff rushes out, sweeping the trio outside in a wave of bodies.
          </p>
          <p>
            More explosions rip through the floors above. <Link to="/character-bios/Stalker">Stalker</Link> realizes <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> deliberately emptied the Consulate before sealing off the lower levels. <Link to="/character-bios/StormShadow">Storm Shadow</Link> remarks that he's now working his way up to deal with the <Link to="/character-bios/Baroness">Baroness</Link>.
          </p>
          <p>
            In the penthouse, the Tele-Viper informs the <Link to="/character-bios/Baroness">Baroness</Link> that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is six floors below. She grows visibly nervous as she continues speaking with Destro on the large monitor.
          </p>
        </section>

        <section className="issue-section">
          <h3 className="issue-section-title">Somewhere in Front of the Rockies Outside Denver</h3>
          <p>
            <Link to="/character-bios/Billy">Billy</Link> and Raptor are about to begin exhuming <Link to="/character-bios/CobraCommander">Cobra Commander</Link>'s remains when a red car pulls up. <Link to="/character-bios/Tyrone">Tyrone</Link> and the <Link to="/character-bios/BlindMaster">Blind Master</Link> (secretly <Link to="/character-bios/Zartan">Zartan</Link> in disguise) step out. The <Link to="/character-bios/BlindMaster">Blind Master</Link> strikes Raptor, calling him trash for desecrating <Link to="/character-bios/Billy">Billy</Link>'s father's grave, and warns <Link to="/character-bios/Billy">Billy</Link> about the endless cycle of vengeance. <Link to="/character-bios/Billy">Billy</Link> replies that the target of his revenge is the current <Link to="/character-bios/CobraCommander">Cobra Commander</Link> — and that killing him would do the world a favor.
          </p>
        </section>

        <div className="issue-back-row">
          <Link to="/comic-issues" className="btn">Back to Comic Issues</Link>
        </div>

      </div>
    </main>
  );
};

export default Issue95;
