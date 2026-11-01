import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';
import quickKick1 from './img/quickKick/quickKick_1.png';

function QuickKick() {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Quick Kick (MacArthur S. Ito)</h1>

        <p className="profile-intro">
          MacArthur Ito (Quick Kick) is the team's martial arts expert. Ito's first mission with the Joes was the rescue of <Link to="/character-bios/RipCord">Rip Cord</Link> on Cobra Island. He was one of the Joes captured in Borovia, written off by the U.S. government, and rescued in an unofficial capacity by <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, <Link to="/character-bios/Billy">Billy</Link>, and <Link to="/character-bios/BlindMaster">Blind Master</Link>. Ito fell in battle during a costly mission to Trucial Abysmia, which claimed the lives of several Joes.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Joining the Joes: First Mission to Cobra Island</h2>
          <img src={quickKick1} alt="Quick Kick joins the Joes" className="profile-block-img" />
          <p>
            Quick Kick's first meeting with the Joes takes place at the PX Canteen in Fort Wadsworth, where he and Alpine arrive in their dress uniforms. Quick Kick and Alpine meet <Link to="/character-bios/Flint">Flint</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and Spirit. When they are alone, Alpine tells Quick Kick that "loquacious and friendly sure ain't on their list of attributes." Quick Kick replies that the Joes are not sticklers for the uniform code, commenting on their custom outfits (Issue #45).
          </p>
          <p>
            Shortly after this, Quick Kick and Alpine are sent on their first mission with the Joes: a retrieval mission of <Link to="/character-bios/RipCord">Rip Cord</Link> from Cobra Island. A C-130 drops an inflatable Zodiac boat containing <Link to="/character-bios/Flint">Flint</Link>, Spirit, Quick Kick, and Alpine off the coast of Cobra Island. The team infiltrates the island. <Link to="/character-bios/RipCord">Rip Cord</Link> (who is <Link to="/character-bios/Zartan">Zartan</Link> in disguise) is rescued, put on the boat, and transported to the W.H.A.L.E., which waits offshore (Issue #46).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982-1994), only a single version of Quick Kick's action figure was produced: the <a href="https://www.yojoe.com/action/85/quickkick.shtml" target="_blank" rel="noopener noreferrer">1985 version</a>.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>
      </div>
    </main>
  );
}

export default QuickKick;