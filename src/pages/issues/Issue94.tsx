import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/IssueProfile.css';

import cover94 from './img/cover94.jpg';

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

const Issue94: React.FC = () => {
  const credits = CREATIVE_TEAM[0];

  return (
    <main className="issue-profile-page">
      <div className="container">

        <div className="issue-header">
          <img src={cover94} alt="Issue 94 cover — Exterminating Circumstances" className="issue-cover" />
          <div className="issue-header-info">
            <div className="issue-heading-row">
              <p className="issue-date">Issue 94 (December 1989)</p>
              <h1 className="issue-title">Exterminating Circumstances</h1>
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
                <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> undergoes his sixth and final procedure. While under, he relives memories of Saigon during the Tet Offensive. The <Link to="/character-bios/Baroness">Baroness</Link> arrives, and it is revealed that she and her older brother were in Saigon during the Tet Offensive. The young <Link to="/character-bios/Baroness">Baroness</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' paths crossed in Saigon; she falsely blames him for the death of her brother.
              </p>
            </section>
          </div>
        </div>

        <section className="issue-section">
          <h2 className="issue-section-title">Detailed Summary</h2>
          <p>
            There are two plots in this issue. The main story deals with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and the <Link to="/character-bios/Baroness">Baroness</Link> at the Bern Institute in Switzerland. The secondary takes place in Oakland, California, and involves Raptor divulging that he knows where <Link to="/character-bios/Billy">Billy</Link>'s father (the original <Link to="/character-bios/CobraCommander">Cobra Commander</Link>) is buried, and who killed him.
          </p>
        </section>

        <section className="issue-section">
          <h2 className="issue-section-title">Switzerland (Bern Institute)</h2>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is undergoing reconstructive surgery at the Bern Institute of Reconstructive Surgery in Switzerland. He has already gone through six surgeries, and <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link> considers this one his masterpiece. <Link to="/character-bios/Scarlett">Scarlett</Link> waits in an adjoining room.
          </p>
          <p>
            As the surgery continues, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' mind drifts back to the start of the Tet Offensive in Vietnam (January 31, 1968). He, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, and Stalker are meeting for the first time, en route to report to MACV-SOG in Saigon. They are about to board a jeep when a scooter carrying two Viet Cong opens fire, killing the driver and wounding <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/Stalker">Stalker</Link>. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> pursues the attackers in the jeep, but the Viet Cong open fire on the vehicle, causing it to crash and explode. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> escapes the wreckage unharmed.
          </p>
          <p>
            Back at the Bern Institute, <Link to="/character-bios/Scarlett">Scarlett</Link> receives a call from <Link to="/character-bios/Hawk">Hawk</Link>, who fills her in on the recovery of <Link to="/character-bios/Clutch">Clutch</Link> and <Link to="/character-bios/RockRoll">Rock 'n Roll</Link>, the capture of the Dreadnoks, and the explosion that knocked Zarana and Road Pig unconscious. <Link to="/character-bios/Hawk">Hawk</Link> tells her that when Zarana came to, she was raving about the <Link to="/character-bios/Baroness">Baroness</Link> and a plot involving <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link>. Just then, <Link to="/character-bios/Scarlett">Scarlett</Link> drops the phone as the <Link to="/character-bios/Baroness">Baroness</Link>' helicopters land on the roof. She breaks into the operating room, ties up the doctor and nurses, and flees with an unconscious <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> in a wheelchair.
          </p>
          <p>
            As the <Link to="/character-bios/Baroness">Baroness</Link> makes her way down the stairwell with her Vipers, she recalls events from twenty years earlier in Saigon. At fifteen, she had traveled there with her brother, Baron Eugen DeCobray, a humanitarian on a mission to check on a shipment of medical supplies. The two arrive at the warehouse where the supplies were meant to have been delivered, only to find it empty. Two Vietnamese men enter — the same two who attacked <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. Eugen asks the <Link to="/character-bios/Baroness">Baroness</Link> to wait in the office while he speaks with them. It is the last time she ever sees him alive.
          </p>
          <p>
            The issue returns to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' memories from Saigon. He is standing on the ledge outside the window where Eugen is meeting with the two Vietnamese men. Eugen demands to know where the medical supplies went. One of the men, Tran, says they were sold on the black market to buy guns and explosives. Eugen is outraged, having solicited the funds in the name of world peace. Tran raises his AK-47 and opens fire on Eugen. Just then, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> jumps through the window, firing his .45 and killing the two Vietnamese men.
          </p>
          <p>
            The fifteen-year-old <Link to="/character-bios/Baroness">Baroness</Link> hears the noise and opens the office door to see <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> standing over the dead bodies of her brother and the two Vietnamese men. She looks up at <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and says, "You murdered him!"
          </p>
          <p>
            The issue returns to the present. The <Link to="/character-bios/Baroness">Baroness</Link> and her Vipers are running down the hall when they reach <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. <Link to="/character-bios/Scarlett">Scarlett</Link> wheels <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> into a room and returns fire, shooting out the lights. <Link to="/character-bios/Scarlett">Scarlett</Link> ducks inside the room with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and reloads her clip. On the ledge outside the windows, a group of Alley Vipers gather. <Link to="/character-bios/Scarlett">Scarlett</Link> returns fire from the room.
          </p>
          <p>
            The Alley Vipers break through the window as a round grazes <Link to="/character-bios/Scarlett">Scarlett</Link>'s upper arm. <Link to="/character-bios/Scarlett">Scarlett</Link> falls to the ground. The <Link to="/character-bios/Baroness">Baroness</Link> enters as one of the Alley Vipers asks if he should finish her off. The <Link to="/character-bios/Baroness">Baroness</Link> kicks the Uzi out of <Link to="/character-bios/Scarlett">Scarlett</Link>'s reach. <Link to="/character-bios/Scarlett">Scarlett</Link> tells the <Link to="/character-bios/Baroness">Baroness</Link> she will get nothing from her. The <Link to="/character-bios/Baroness">Baroness</Link> replies that she did not order the Alley Viper to kill her, as she wanted to do it herself. The <Link to="/character-bios/Baroness">Baroness</Link> raises her pistol and fires point-blank into <Link to="/character-bios/Scarlett">Scarlett</Link>'s head. She then turns to the unconscious <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, saying she will take him to New York, where he'll have plenty of time to make up for what he did to her brother.
          </p>
        </section>

        <section className="issue-section">
          <h2 className="issue-section-title">Oakland, California</h2>
          <p>
            The issue shifts to Oakland. <Link to="/character-bios/Billy">Billy</Link> says goodbye to his mother and leaves for the University of Berkeley on his scooter. A car nearly crashes into him, causing <Link to="/character-bios/Billy">Billy</Link> to wipe out and crash his scooter against some garbage cans. Raptor emerges from the car, and <Link to="/character-bios/Billy">Billy</Link> jump-kicks him, knocking him back against the vehicle. <Link to="/character-bios/Billy">Billy</Link> grabs Raptor's head and is about to deliver a blow when Raptor tells him he knows where his father is buried and knows who killed him. The issue ends with <Link to="/character-bios/Billy">Billy</Link> saying, "Start talking."
          </p>
        </section>

        <div className="issue-back-row">
          <Link to="/comic-issues" className="btn">Back to Comic Issues</Link>
        </div>

      </div>
    </main>
  );
};

export default Issue94;
