import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import rockRoll1 from './img/rockRoll/rockRoll_1.png';

const RockRoll: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Rock 'n Roll (Craig McConnell)</h1>

        <blockquote className="profile-quote">
          <p>"Rock 'n Roll is cunning but naive; forceful but shy. Possesses a strong sense of loyalty to his teammates and is sincerely concerned about their well being. A man of honor and integrity who can be counted on to hold the line."</p>
        </blockquote>

        <p className="profile-intro">
          Craig S. McConnell (Rock 'n Roll) is one of the original members of G.I. Joe and the team's heavy machine gunner. Born and raised in Malibu, California, he was an avid surfer, weightlifter, and guitarist in a local band prior to enlisting. Since joining G.I. Joe, Rock 'n Roll has formed a close friendship with <Link to="/character-bios/Clutch">Clutch</Link>, and the two are often inseparable off duty — a habit that tends to land them in one adventure or another.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Shotgun Don</h2>
          <img src={rockRoll1} alt="Rock 'n Roll's encounter with Shotgun Don" className="profile-block-img" />
          <p>
            Craig (Rock 'n Roll) and his friend Mandy are surfing in Malibu when a wave pushes Mandy into the pier, impaling his chest on a nail — a life-and-death situation. A lifeguard rushes to treat him. Craig asks if Mandy will die; the lifeguard replies, "Not on my watch!" Craig notices a Ranger tab tattooed on the lifeguard's shoulder.  The lifeguard treats Mandy's wound using a bystander's chip bag to seal the wound and stop air from escaping Mandy's lungs.  He then elevates his legs to keep him stable until the paramedics arrive.
          </p>
          <p>
            After the paramedics take Mandy away, Craig thanks the lifeguard, and points to the tattoo saying, "You sure don't look like a park ranger". The lifeguard tells him he was an Airborne Ranger, adding, "Rangers rule the night," as he walks off. Craig overhears two surfers talking nearby — one recognizes the lifeguard as Shotgun Don, a legendary surfer; the other remarks it's a shame he threw it all away to join the Army (G.I. Joe Declassified #2). The encounter leaves a lasting impression on Craig, and is likely what led him to enlist.
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), four versions of Rock 'n Roll were produced: the <a href="https://www.yojoe.com/action/82/rocknroll.shtml" target="_blank" rel="noopener noreferrer">1982 version</a> (with a <a href="https://www.yojoe.com/action/83/rocknroll1p5.shtml" target="_blank" rel="noopener noreferrer">1983 swivel-arm</a> variant), the <a href="https://www.yojoe.com/action/89/rocknroll2.shtml" target="_blank" rel="noopener noreferrer">1989 version</a>, the <a href="https://www.yojoe.com/action/91/rocknroll3.shtml" target="_blank" rel="noopener noreferrer">1991 version</a>, and the <a href="https://www.yojoe.com/action/93/rocknroll4.shtml" target="_blank" rel="noopener noreferrer">1993 version</a>. His original 1982 file card lists his rank as E-5; the 1989 file card lists him as E-6; the 1991 file card lists him as E-9; and the 1993 file card lists him as E-4. In Issue #33, General Austin promotes Rock 'n Roll and seven other original team members by one pay grade, assigning them administrative duties as the roster grows — making the E-6 on his 1989 file card accurate. I suspect the ranks listed on his 1991 and 1993 file cards were errors.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default RockRoll;
