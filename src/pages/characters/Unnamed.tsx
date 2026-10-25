import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import unnamed1 from './img/unnamed/unnamed_1.png';
import unnamed2 from './img/unnamed/unnamed_2.png';

const Unnamed: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Unnamed Arashikage Ninja</h1>

        <p className="profile-intro">
          A man of mystery, the unnamed Arashikage ninja makes his first appearance in Trieste, where he meets <Link to="/character-bios/Jinx">Jinx</Link> and the wounded <Link to="/character-bios/PalePeony">Pale Peony</Link> at the airport. He takes <Link to="/character-bios/PalePeony">Pale Peony</Link> to a trusted doctor who is waiting for her. He is later sent on <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link>'s behalf to teach <Link to="/character-bios/SeanCollins">Sean Collins</Link>, the new <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, the thirteen esoteric finger-knots inscribed on the Secret Scroll of the Arashikage.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">The Arashikage Never Forgets Its Own</h2>
          <img src={unnamed1} alt="The unnamed Arashikage ninja meets Jinx and Pale Peony in Trieste" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Jinx">Jinx</Link> and <Link to="/character-bios/PalePeony">Pale Peony</Link> infiltrate a Revanche Electronics factory in Lauhar, Olliestan. They are attacked at the airport, where <Link to="/character-bios/PalePeony">Pale Peony</Link> is injured, and the two women board a flight to Trieste (Issue #195). <Link to="/character-bios/Jinx">Jinx</Link> and the wounded <Link to="/character-bios/PalePeony">Pale Peony</Link> arrive in Trieste and evade the security team searching the aircraft. At the airport, the unnamed Arashikage ninja meets <Link to="/character-bios/Jinx">Jinx</Link> as she transports <Link to="/character-bios/PalePeony">Pale Peony</Link> on a baggage tug. He reveals the Arashikage tattoo on his right forearm, and together, he and <Link to="/character-bios/Jinx">Jinx</Link> help the wounded <Link to="/character-bios/PalePeony">Pale Peony</Link> into the back of a car (Issue #196).
          </p>
          <p>
            <Link to="/character-bios/PalePeony">Pale Peony</Link> receives medical care from the trusted doctor, and the ninja then escorts the two women to the train station and arranges a flight home from Aviano Air Base. As the train departs, he waves and calls out, "The Arashikage clan never forgets its own." The two women turn to thank each other for reaching out to him, only to realize that neither of them had (Issue #198).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">The Thirteen Esoteric Finger-Knots</h2>
          <img src={unnamed2} alt="The unnamed Arashikage ninja meets Sean Collins" className="profile-block-img" />
          <p>
            Sent on behalf of "Granny" (<Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link>), the unnamed Arashikage ninja arrives at a former Cobra temporary base where <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, and <Link to="/character-bios/SeanCollins">Sean</Link> are investigating. <Link to="/character-bios/SeanCollins">Sean</Link> throws his Fairbairn-Sykes commando dagger at him, and the ninja catches it. <Link to="/character-bios/SeanCollins">Sean</Link> is about to draw his sword when <Link to="/character-bios/Jinx">Jinx</Link> tells him that this is the man who saved <Link to="/character-bios/PalePeony">Pale Peony</Link> in Trieste. The ninja reveals his Arashikage tattoo and returns <Link to="/character-bios/SeanCollins">Sean</Link>'s dagger.
          </p>
          <p>
            He explains that he has come on behalf of "Granny" to impart the thirteen esoteric finger-knots inscribed on the Secret Scroll of the Arashikage, and he produces the scroll (Issue #226). A few days later, in the woods, he passes the techniques on to <Link to="/character-bios/SeanCollins">Sean</Link> (Issue #227).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Unnamed;