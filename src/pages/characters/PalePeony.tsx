import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import palePeony1 from './img/palePeony/palePeony_1.png';
import palePeony2 from './img/palePeony/palePeony_2.png';

const PalePeony: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Pale Peony (Margarita Shiro)</h1>

        <p className="profile-intro">
          Margarita Shiro (Pale Peony) is the daughter of a Japanese Yakuza boss (her father) and a Russian intelligence colonel (her mother). Starting out as <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s enemy, Pale Peony is hired to steal Morning Light, the legendary Arashikage blade believed to be in <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s possession. <Link to="/character-bios/StormShadow">Storm Shadow</Link> later sends Pale Peony to the Arashikage clan to train as a ninja. She eventually teams up with <Link to="/character-bios/Jinx">Jinx</Link> to infiltrate Revanche, the corporation responsible for producing the Blue Ninja cyborgs.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Morning Light</h2>
          <img src={palePeony1} alt="Pale Peony's pursuit of Morning Light" className="profile-block-img" />
          <p>
            Pale Peony is hired by Russian mob boss Mr. Sgrobe to acquire Morning Light, the legendary Arashikage blade believed to be in <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s possession. Starting in Chicago, Pale Peony and her thugs attack <Link to="/character-bios/StormShadow">Storm Shadow</Link>. While her thugs deal with him, Pale Peony makes off with Tiff, <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s "niece" (Storm Shadow #1).
          </p>
          <p>
            Tiff becomes Pale Peony's hostage, and their journey takes them through Russia and Japan, with <Link to="/character-bios/StormShadow">Storm Shadow</Link> in pursuit. A final confrontation between Pale Peony and <Link to="/character-bios/StormShadow">Storm Shadow</Link> takes place at his water tower base in New York. As the two cross blades, Zartan appears and fires arrows at <Link to="/character-bios/StormShadow">Storm Shadow</Link>, who cuts them down. Zartan retrieves the severed arrows, revealing that the blade <Link to="/character-bios/StormShadow">Storm Shadow</Link> carries is Evening Star — the copy <Link to="/character-bios/Onihashi">Professor Onihashi</Link> and Zartan forged decades earlier. The real Morning Light, it turns out, is on display at a museum in Manhattan.
          </p>
          <p>
            In an unusual twist, elsewhere in the city, Tiff reveals herself to be a 27-year-old little-person operative hired by Kolya, a Russian petroleum mogul, to get close to Sgrobe and discourage his interests in a new pipeline. Kolya paid Tiff $5 million, of which she gave <Link to="/character-bios/StormShadow">Storm Shadow</Link> a cool 20 percent. Impressed with Tiff, Sgrobe hires her as his new head of security, firing his two former bodyguards, Olga and Katya.
          </p>
          <p>
            Back at the water tower, <Link to="/character-bios/StormShadow">Storm Shadow</Link> gives Evening Star to Zartan, who helped forge it. Pale Peony disarms her nephew, stopping him from firing at <Link to="/character-bios/StormShadow">Storm Shadow</Link>. <Link to="/character-bios/StormShadow">Storm Shadow</Link> then offers to buy the two noodles in the East Village, and the three depart in haste as police close in.  Zartan makes his own escape.
          </p>
          <p>
            Over noodles, <Link to="/character-bios/StormShadow">Storm Shadow</Link> strikes a deal with Pale Peony and her nephew: they'll spread word that Zartan holds the real Morning Light (Storm Shadow #4).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Pale Peony's Training in the Arashikage Clan</h2>
          <img src={palePeony2} alt="Pale Peony's training in the Arashikage clan" className="profile-block-img" />
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link> sees something in Pale Peony — that she will one day bring credit to the Arashikage clan. He makes a request to his aunt, Obake Obasan ("Demon Granny"), the late <Link to="/character-bios/HardMaster">Hard Master</Link>'s widow and the clan's current head. While Obake Obasan recognizes great talent in Pale Peony, she is concerned with her loose ethical core and complex worldview (Issue #183).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default PalePeony;
