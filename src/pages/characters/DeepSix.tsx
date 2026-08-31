import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import deepSix1 from './img/deepSix/deepSix_1.png';

const DeepSix: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Deep Six (Malcolm Willoughby)</h1>

        <p className="profile-intro">
          Malcolm R. Willoughby (Deep Six) is the team's Navy diver. A highly capable diver and someone you can count on to watch your back on a mission, he is an entirely different person the rest of the time. Deep Six keeps almost entirely to himself, rarely bothering to learn his teammates' names, and seems to live in a world of his own — showing little emotion, interest, or enthusiasm for much of anything around him.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">A World of His Own</h2>
          <img src={deepSix1} alt="Deep Six's world of his own" className="profile-block-img" />
          <p>
            Deep Six is a strange sort of character. He does not bond with the other Joes, nor does he make any effort to. He keeps to himself, answering questions in short, expressionless, unenthusiastic replies.
          </p>
          <p>
            Deep Six's first mission takes place aboard the U.S.S. G.I. Jane freighter in the Gulf of Mexico, from which two Dragonfly assault helicopters are set to launch. Cutter tells Deep Six to board the S.H.A.R.C. (Submersible High-Speed Attack and Reconnaissance Craft), as he will be launching right after the Dragonflies. Deep Six replies, "Whatever you say, Cutter," in a flat, expressionless monotone, then heads for the S.H.A.R.C. without enthusiasm.
          </p>
          <p>
            Deep Six performs admirably in combat. When the Dragonflies and the S.H.A.R.C. return to the ship, Wild Bill — who had piloted one of the helicopters — walks over to compliment Deep Six on his shooting and offers a handshake. Deep Six ignores him entirely and walks past. Wild Bill is visibly upset, but Airborne holds him back, saying, "Cool it, Wild Bill! Deep Six is in a world of his own! He don't mean nothing by it." Cutter adds, "Airborne's right. Depend on Deep Six to do his job. He's the best there is. But don't expect him to be friendly, or even human!" (Issue #25).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), four versions of Deep Six were produced: the <a href="https://www.yojoe.com/action/84/deepsix.shtml" target="_blank" rel="noopener noreferrer">1984 version</a>, the <a href="https://www.yojoe.com/action/89/deepsix2.shtml" target="_blank" rel="noopener noreferrer">1989 version</a>, the <a href="https://www.yojoe.com/action/92/deepsix3.shtml" target="_blank" rel="noopener noreferrer">1992 version</a>, and the <a href="https://www.yojoe.com/action/93/deepsix4.shtml" target="_blank" rel="noopener noreferrer">1993 version</a>. His original 1984 file card lists his grade as PO2 (E-5, Petty Officer 2nd Class), while his subsequent file cards list him as an E-7, Chief Petty Officer. Deep Six received two promotions since joining the G.I. Joe team.
          </p>
          <p>
            Deep Six's personality — or seeming lack of one — is exactly what I love about Mr. Hama's writing. Every Joe has a distinct personality, with unique qualities and flaws all their own. Mr. Hama modeled many of these traits after real people he knew, giving each character a genuine sense of individuality. Some Joes shine both on and off the mission, while others, like Deep Six, are dependable in the field but a cold, closed-off loner outside of it. You are glad to have Deep Six as a teammate — but he is not someone you would want to spend time with once the mission is over.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default DeepSix;
