import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import firefly1 from './img/firefly/firefly_1.png';

const Firefly: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Firefly</h1>

        <blockquote className="profile-quote">
          <p>"Even Cobra Commander doesn't know much about Firefly. His fees are paid into a numbered Swiss bank account and are always payable in advance. He makes no guarantees and gives no refunds."*</p>
        </blockquote>

        <p className="profile-intro">
          A saboteur and demolitions expert, Firefly sells his services to the highest bidder, his fees paid through a series of Swiss bank accounts. He was complicit in both the deaths of the <Link to="/character-bios/HardMaster">Hard Master</Link> and the <Link to="/character-bios/SoftMaster">Soft Master</Link>. This section focuses on Firefly's background as it relates to the Arashikage clan.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Infiltrating the Arashikage Ninja Clan</h2>
          <img src={firefly1} alt="Firefly infiltrating the Arashikage clan" className="profile-block-img" />
          <p>
            Firefly's father was a plantation owner and anti-Japanese guerrilla in French Indochina during the 1940s. He spared the life of a young Japanese officer — the son of the Grand Master of the Koga ninja clan. After the Viet Minh betrayed and murdered his father, the Koga clan took Firefly in and trained him, and he became the first outsider ever to master any style of ninjutsu.
          </p>
          <p>
            Cobra Commander pays Firefly to engineer the assassination of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, whom he blames for his brother Dan's fatal car accident. As a ninja master, Firefly gains access to <Link to="/character-bios/Onihashi">Professor Onihashi</Link>'s shop, and through that association, gains access to the Arashikage household itself — training at the family dojo and studying its secret forms under the adopted name the Faceless One.
          </p>
          <p>
            Witnessing <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' skill firsthand, Firefly realizes he's no match for him, and instead recommends <Link to="/character-bios/Zartan">Zartan</Link> to Cobra Commander for this mission. Firefly supplies <Link to="/character-bios/Zartan">Zartan</Link> with the sound-amplifying compound bow used to kill the <Link to="/character-bios/HardMaster">Hard Master</Link>, and later pilots the helicopter that carries <Link to="/character-bios/Zartan">Zartan</Link> away (Issue #126).
          </p>
          <p>
            In the <Link to="/character-bios/BlindMaster">Blind Master</Link>'s family photo of the Arashikage clan, Firefly appears as <Link to="/character-bios/Onihashi">Onihashi</Link>'s assistant. Kneeling in the front row are <Link to="/character-bios/StormShadow">Storm Shadow</Link>, the <Link to="/character-bios/HardMaster">Hard Master</Link>, the <Link to="/character-bios/SoftMaster">Soft Master</Link>, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>; standing behind them are the <Link to="/character-bios/BlindMaster">Blind Master</Link>, an eight-year-old <Link to="/character-bios/Jinx">Jinx</Link>, <Link to="/character-bios/Onihashi">Professor Onihashi</Link>, and Firefly. <Link to="/character-bios/Jinx">Jinx</Link> describes Firefly in the photo only as "the blurred fellow," a practitioner of the now-extinct Koga clan (Issue #62).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), two unique molds of the Firefly action figure were produced: the <a href="https://www.yojoe.com/action/84/firefly.shtml" target="_blank" rel="noopener noreferrer">1984 version</a> and the <a href="https://www.yojoe.com/action/92/firefly2.shtml" target="_blank" rel="noopener noreferrer">1992 version</a> (with a <a href="https://www.yojoe.com/action/93/firefly3.shtml" target="_blank" rel="noopener noreferrer">1993 repaint</a>). Firefly is best known for his 1984 figure, featuring an urban gray-and-black camouflage pattern. A green-toned version of his uniform appeared from Issue #126 through the end of the Marvel run; afterward, Firefly returns to his classic black-and-gray urban camo.
          </p>

          
          <p className="profile-notes-footnote">
            *The quote is from Firefly's 1984 file card.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Firefly;
