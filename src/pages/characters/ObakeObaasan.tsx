import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import obakeObaasan1 from './img/obakeObaasan/obakeObaasan_1.png';
import obakeObaasan2 from './img/obakeObaasan/obakeObaasan_2.png';

const ObakeObaasan: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Obake Obaasan</h1>

        <p className="profile-intro">
          The <Link to="/character-bios/HardMaster">Hard Master</Link>'s widow and <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s aunt, Obake Obaasan (Demon Granny) is the head of the Arashikage clan. A skilled fighter in her own right, she favors a purse filled with bricks as her weapon of choice. At the request of her favorite nephew, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, Obake Obaasan takes on <Link to="/character-bios/PalePeony">Pale Peony</Link> as a student, training her in the ways of the Arashikage. She later takes on Dawn Moreno as well, teaching her the ways of the Arashikage.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Tokyo Amusement Park</h2>
          <img src={obakeObaasan1} alt="Obake Obaasan at the Tokyo amusement park" className="profile-block-img" />
          <p>
            One of Obake Obaasan's regular meeting places is the "Scariest Ride in All of Japan," located at an amusement park in Tokyo's Asakusa district. While pursuing <Link to="/character-bios/PalePeony">Pale Peony</Link>, who has kidnapped Tiff, <Link to="/character-bios/StormShadow">Storm Shadow</Link> boards the ride himself, seeking an audience with his aunt. Midway through, Obake Obaasan appears in the seat beside him (Storm Shadow #3).
          </p>
          <p>
            Years later, <Link to="/character-bios/Jinx">Jinx</Link> and <Link to="/character-bios/PalePeony">Pale Peony</Link> each receive a coupon for the ride, set for a specific date and time. Both arrive and are startled to see each other, neither having known the other received an identical coupon. Midway through the ride, Obake Obaasan appears seated between them. She tells the two women that leadership of the clan must be passed to a new generation, and that each of them has been set a trial to prove herself. For security, she says, she cannot contact them again until one of them either succeeds or perishes. Obake Obaasan vanishes, and the ride comes to an end (Issue #192).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Arashikage Shrine of Remembrance</h2>
          <img src={obakeObaasan2} alt="The Arashikage Shrine of Remembrance" className="profile-block-img" />
          <p>
            Within her home, Obake Obaasan keeps an Arashikage Shrine of Remembrance in a dedicated room for the clan's fallen members. After <Link to="/character-bios/Billy">Billy</Link>'s death (Issue #172), <Link to="/character-bios/StormShadow">Storm Shadow</Link> brings his photo and sword to Obake Obaasan in Japan. She places <Link to="/character-bios/Billy">Billy</Link>'s photo on the altar beside the <Link to="/character-bios/BlindMaster">Blind Master</Link>'s, while <Link to="/character-bios/StormShadow">Storm Shadow</Link> adds his sword to those of the other fallen (Issue #183). When <Link to="/character-bios/PalePeony">Pale Peony</Link> dies, <Link to="/character-bios/StormShadow">Storm Shadow</Link> brings her ashes to his aunt, where they are placed within the sacred room, her photo set beside <Link to="/character-bios/Billy">Billy</Link>'s (Issue #209).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default ObakeObaasan;
