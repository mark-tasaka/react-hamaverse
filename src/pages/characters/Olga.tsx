import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import olga1 from './img/olga/olga_1.png';
import olga2 from './img/olga/olga_2.png';

const Olga: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Comrade Cpl. Olga</h1>

        <p className="profile-intro">
          Comrade Cpl. Olga is one of the NCOs at the Borovian gulag where <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Quick Kick are sent. She is <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link>'s trusted subordinate and just as sadistic as he is, taking great pleasure in abusing the gulag's prisoners.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Circus Troupe</h2>
          <img src={olga1} alt="Cpl. Olga watching Sgt. Mosiev taunt the White Clown" className="profile-block-img" />
          <p>
            Cpl. Olga joins <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link> to watch the circus troupe rehearse. She looks on as <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link> approaches the <Link to="/character-bios/WhiteClown">White Clown</Link> and asks what ever happened to <Link to="/character-bios/Magda">Magda</Link> the bareback rider after she criticized the government. Is she alive or dead? <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link> knows the <Link to="/character-bios/WhiteClown">White Clown</Link> loves <Link to="/character-bios/Magda">Magda</Link> and wonders about her fate, and he keeps taunting him, knowing how painful the memories are. The <Link to="/character-bios/WhiteClown">White Clown</Link> is heartbroken.
          </p>
          <p>
            <Link to="/character-bios/Orlovsky">Orlovsky</Link> the dwarf overhears and steps in, telling the Sergeant he could tell his friend whether <Link to="/character-bios/Magda">Magda</Link> is alive or not. Is the world not already cruel enough? <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link> strikes <Link to="/character-bios/Orlovsky">Orlovsky</Link> and tells him the information is a state secret (Issue #66).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">They're Doing a Good Job Tonight</h2>
          <img src={olga2} alt="Cpl. Olga during the raid on the gulag" className="profile-block-img" />
          <p>
            On a rainy night, <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link> is alerted that a prisoner has escaped and organizes a search detail. Before leaving, he asks Cpl. Olga to look after matters with the prisoners and find out who is responsible for the escape. Cpl. Olga and three guards enter the barracks. She pistol-whips one of the prisoners and demands a name. When he refuses, she shoots him dead, then turns to Boris. Boris points to Snow Job, who is lying in bed recovering from his wounds. Olga says Snow Job has been too sick to get up for weeks, so the culprit must be Boris instead. She has her soldiers take Boris away and beat him to death.
          </p>
          <p>
            In her quarters, she listens with delight as the guards beat Boris. Unbeknownst to Olga, Boris dies quickly. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, <Link to="/character-bios/Billy">Billy</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link> enter the interrogation building and beat the guards to death. What Olga hears are the screams of her own guards. From her bed, she smiles and says, "They're doing a good job tonight."
          </p>
          <p>
            When <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link> and his men return to the gulag with the escapee tied to the grille of his vehicle, they discover the raid, the guards dead, and the prisoners gone. He finds Cpl. Olga dead in her quarters. It is unclear who killed her (Issue #66).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Olga;