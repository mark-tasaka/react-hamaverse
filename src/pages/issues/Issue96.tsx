import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/IssueProfile.css';

import cover96 from './img/cover96.jpg';

interface CreativeTeam {
  script: string;
  pencils: string;
  inks: string;
  coloring: string;
  lettering: string;
  coverArt: string;
  editor: string;
  editorInChief: string;
}

const CREATIVE_TEAM: CreativeTeam[] = [
  {
    script: 'Larry Hama',
    pencils: 'Mark Bright',
    inks: 'Randy Emberlin',
    coloring: 'Bob Sharen',
    lettering: 'Rick Parker',
    coverArt: 'Andy Kubert',
    editor: 'Bobbie Chase',
    editorInChief: 'Tom DeFalco',
  },
];

const Issue96: React.FC = () => {
  const credits = CREATIVE_TEAM[0];

  return (
    <main className="issue-profile-page">
      <div className="container">

        <div className="issue-header">
          <img src={cover96} alt="Issue 96 cover — No Surrender! The Hexagram Completed" className="issue-cover" />
          <div className="issue-header-info">
            <div className="issue-heading-row">
              <p className="issue-date">Issue 96 (January 1990)</p>
              <h1 className="issue-title">No Surrender! The Hexagram Completed</h1>
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
                <p className="issue-credit-label">Cover Art</p>
                <p className="issue-credit-name">{credits.coverArt}</p>
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
                The conclusion of the <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> trilogy. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> makes his way to the top of the Consulate and is joined by his sword brother, <Link to="/character-bios/StormShadow">Storm Shadow</Link>. The two confront the Baroness and her remaining Vipers. The penthouse begins to collapse, throwing the Baroness and her Vipers to the street many levels below. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> grabs the Baroness' wrist, saving her from death. Destro, arriving in a nearby helicopter, reveals what really happened in Saigon twenty years before.
              </p>
            </section>
          </div>
        </div>

        <section className="issue-section">
          <h2 className="issue-section-title">Detailed Summary</h2>
          <p>
            The Cobra Consulate in New York City is burning. In the previous issue, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> sealed the lower levels with explosives and is making his way to the penthouse to confront the Baroness.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> tactically withdraws while engaged with a Viper combat patrol. The Vipers believe they have him cornered. From the safety of the penthouse command center, the Baroness reiterates that they — not <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> — are the ones who are trapped. Just then, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> appears, catching the Vipers by surprise. The Vipers are defeated while the Baroness watches the events play out on the video monitor.
          </p>
          <p>
            In the lower levels of the burning Consulate are <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Stalker">Stalker</Link>, and <Link to="/character-bios/Wade">Wade Collins</Link>. They cannot progress any further due to the fire. <Link to="/character-bios/StormShadow">Storm Shadow</Link> says he will climb out the window to reach <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> by scaling the outside wall, and asks <Link to="/character-bios/Stalker">Stalker</Link> to round up some air cover.
          </p>
          <p>
            At JFK Airport, the Tomahawk has landed with the comatose <Link to="/character-bios/Scarlett">Scarlett</Link> on board. Lift Ticket receives the message from <Link to="/character-bios/Stalker">Stalker</Link> and tells <Link to="/character-bios/Hawk">Hawk</Link> they are the only aircraft available.
          </p>
          <p>
            Back in the penthouse, the Viper search parties are returning. The Tele-Viper reports to the Baroness that all but three members of the search party have returned. Destro appears on the monitor, wanting to know why smoke is rising from the Consulate (he is in a helicopter over New Jersey). The Baroness tells him the building has been bombed and they need an airlift. Destro turns his helicopter back toward the Consulate.
          </p>
          <p>
            The Baroness has the Vipers pile office furniture against the main door, forming a makeshift barricade. A suspicious-looking Techno-Viper, wrapped in a blanket, stands in the corner.
          </p>
          <p>
            A couple of floors below, the three missing Vipers are rigging together rope, hoping to climb out the window. One of them spots <Link to="/character-bios/StormShadow">Storm Shadow</Link> scaling the wall outside, and the Vipers blindly empty their assault rifles out the window at him. Once their ammunition runs out, one of the Vipers looks out to check — <Link to="/character-bios/StormShadow">Storm Shadow</Link> grabs him by the neck and throws him out the window, then climbs in and dispatches the remaining two.
          </p>
          <p>
            <Link to="/character-bios/Wade">Wade</Link> and <Link to="/character-bios/Stalker">Stalker</Link> reach the roof of a nearby building with a helicopter landing pad, but the civilian pilot refuses to fly anywhere near the Consulate.
          </p>
          <p>
            Back in the penthouse, the Vipers finish barricading the main door. The Baroness scans the monitors for <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and spots <Link to="/character-bios/StormShadow">Storm Shadow</Link> on the other side of the barricaded door. She orders a Heat-Viper to fire a missile through the barricade; the missile is fired, and <Link to="/character-bios/StormShadow">Storm Shadow</Link> dodges it. He enters the penthouse and calls out for <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> throws off the Techno-Viper helmet he had been wearing and joins his sword brother in combat. A loud rumbling sound rises as the penthouse begins to collapse.
          </p>
          <p>
            On the rooftop of the nearby building, the Tomahawk picks up <Link to="/character-bios/Wade">Wade Collins</Link> and <Link to="/character-bios/Stalker">Stalker</Link> and flies toward the Consulate.
          </p>
          <p>
            The penthouse floor gives way, throwing the remaining Vipers to their deaths. The Baroness clings to a crumbling section of floor, hanging outside the building. Her grip slips, but <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> catches her wrist, preventing her from falling. With her free hand, the Baroness draws her pistol and says she will not be robbed of her revenge. Destro's helicopter arrives, and he tells her that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> did not kill her brother.
          </p>
          <p>
            Destro explains that he was in Saigon with his father — the previous Destro — during the Tet Offensive. The two of them examined Baron Eugen DeCobray's body and determined <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> hadn't killed him: the rounds that penetrated his bulletproof vest belonged to an AK-47, while <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> had been armed with a .45, which would not have penetrated the vest.
          </p>
          <p>
            Overwhelmed with guilt, the Baroness strikes <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' grip with her pistol, breaking free, and falls. <Link to="/character-bios/StormShadow">Storm Shadow</Link>, holding a rope with one hand, rappels down and catches her. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> pulls <Link to="/character-bios/StormShadow">Storm Shadow</Link> and the Baroness back up, then helps her board Destro's helicopter. As Destro reaches out to help <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, the girder beneath them gives way, sending <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> falling. Fortunately, the Tomahawk is nearby — Lift Ticket flies it in below them and executes a barrel-roll maneuver, catching them both.
          </p>
          <p>
            From the other Cobra helicopter, Destro and the Baroness wave. <Link to="/character-bios/StormShadow">Storm Shadow</Link> waves back and asks, "Can the cycle of revenge be broken?" The two helicopters then depart in different directions.
          </p>
        </section>

        <div className="issue-back-row">
          <Link to="/comic-issues" className="btn">Back to Comic Issues</Link>
        </div>

      </div>
    </main>
  );
};

export default Issue96;
