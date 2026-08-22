import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import orlovsky1 from './img/orlovsky/orlovsky_1.png';

const Orlovsky: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Orlovsky the Dwarf</h1>

        <p className="profile-intro">
          The White Clown's assistant and friend, Orlovsky the Dwarf works at the traveling circus troupe when <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link> join its ranks. Orlovsky overhears the American performers' plan to raid a Borovian gulag and passes the information along to his friend, suggesting that if they in turn gave it to <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link>, the <Link to="/character-bios/WhiteClown">White Clown</Link>'s beloved Magda might be set free.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Circus Troupe</h2>
          <img src={orlovsky1} alt="Orlovsky at the circus troupe" className="profile-block-img" />
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link> join the <Link to="/character-bios/WhiteClown">White Clown</Link>'s traveling circus troupe in their search for the gulag holding <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Quick Kick. They travel with the circus as it moves from location to location, hoping to gather information on where the three Joes are being held.
          </p>
          <p>
            After hearing the sadistic Comrade <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link> mock the <Link to="/character-bios/WhiteClown">White Clown</Link> over his beloved Magda's fate, Orlovsky steps in. He tells the Sergeant he knows what happened to her — whether she's alive or not — and asks what harm there could be in simply telling the <Link to="/character-bios/WhiteClown">White Clown</Link> either way. <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link> strikes Orlovsky, telling him the information is a state secret.
          </p>
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, and <Link to="/character-bios/Billy">Billy</Link> arrive with information on which gulag holds the three Joes. Together with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link>, they chant the hexagram of the ninja clan in preparation for their raid on the gulag. Orlovsky secretly watches the chanting.
          </p>
          <p>
            Orlovsky makes his way to the <Link to="/character-bios/WhiteClown">White Clown</Link>'s trailer, where he finds his friend drinking and staring at a photo of his beloved. He tells the <Link to="/character-bios/WhiteClown">White Clown</Link> of the group's plan to raid the gulag, suggesting that if they passed this information along to <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link>, perhaps Magda could be set free. The <Link to="/character-bios/WhiteClown">White Clown</Link> admits he would do anything to find Magda again.
          </p>
          <p>
            The <Link to="/character-bios/WhiteClown">White Clown</Link> know that betraying the Americans would go against everything Magda stood for. So instead, the two haul the circus cannon to the cliffs overlooking the border — the very spot where the freed Americans are headed. There, they find their new friends and the liberated American prisoners looking out at the border crossing: a river lined with barbed-wire fencing and guard towers on the Borovian side. Orlovsky and the <Link to="/character-bios/WhiteClown">White Clown</Link> use the circus cannon to fire the Americans past the fense and safely into the river, allowing them to escape Borovia (Issue #66).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Orlovsky;
