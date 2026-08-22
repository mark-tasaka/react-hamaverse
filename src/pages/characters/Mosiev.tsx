import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import mosiev1 from './img/mosiev/mosiev_1.png';
import mosiev2 from './img/mosiev/mosiev_2.png';
import mosiev3 from './img/mosiev/mosiev_3.png';

const Mosiev: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Comrade Sgt. Mosiev</h1>

        <p className="profile-intro">
          Comrade Sgt. Mosiev is one of the NCOs at the Borovian gulag where <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Quick Kick are sent. A sadistic man, Sgt. Mosiev takes pleasure in both abusing the gulag's prisoners and taunting the <Link to="/character-bios/WhiteClown">White Clown</Link> over the fate of his beloved Magda.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Borovian Gulag</h2>
          <img src={mosiev1} alt="Sgt. Mosiev at the Borovian gulag" className="profile-block-img" />
          <p>
            When <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Quick Kick arrive at the gulag, <Link to="/character-bios/Stalker">Stalker</Link> is assigned to the logging camp, while Snow Job and Quick Kick are put to work in the toy-making workshops. Sgt. Mosiev oversees the logging details and boasts to <Link to="/character-bios/Stalker">Stalker</Link> that he holds the national gold medal for long-distance rifle shooting, daring him to run — promising not to fire until <Link to="/character-bios/Stalker">Stalker</Link> reaches the 300-meter mark.
          </p>
          <p>
            When the logging detail returns for dinner, <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Quick Kick sit at a table with Boris. As they talk, Boris alerts the guards that the Americans are plotting, using their secret slang against them. Snow Job is taken away. <Link to="/character-bios/Stalker">Stalker</Link> starts to rise, but Sgt. Mosiev warns him that if he moves another inch, his friend will be shot instead of beaten. <Link to="/character-bios/Stalker">Stalker</Link> sits back down (Issue #63).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Circus Troupe</h2>
          <img src={mosiev2} alt="Sgt. Mosiev taunting the White Clown" className="profile-block-img" />
          <p>
            Sgt. Mosiev and Cpl. Olga watch the circus troupe rehearse. Sgt. Mosiev approaches the <Link to="/character-bios/WhiteClown">White Clown</Link>, asking whatever happened to Magda the bareback rider after she criticized the government — is she alive, or dead? Knowing full well how the <Link to="/character-bios/WhiteClown">White Clown</Link> still loves her, and how desperately he wonders about her fate, Sgt. Mosiev continues to taunt him, well aware of how much pain the memory causes.
          </p>
          <p>
            Heartbroken, the <Link to="/character-bios/WhiteClown">White Clown</Link> says nothing. <Link to="/character-bios/Orlovsky">Orlovsky the Dwarf</Link> overhears the taunting and steps in, telling the Sergeant he could simply tell his friend whether Magda is alive or not. <Link to="/character-bios/Orlovsky">Orlovsky</Link> says, "isn't the world cruel enough as it is?" Sgt. Mosiev strikes <Link to="/character-bios/Orlovsky">Orlovsky</Link>, telling him the information is a state secret (Issue #66).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Gulag Escape</h2>
          <img src={mosiev3} alt="Sgt. Mosiev's death at the border" className="profile-block-img" />
          <p>
            On a rainy night, Sgt. Mosiev is alerted that a prisoner has escaped. He organizes a search detail and drives off after the man, eventually capturing him and tying him to the grille of their vehicle. When they return to the gulag, they find it raided, the prisoners gone, and the guards killed — even Sgt. Mosiev's friend, Cpl. Olga, lies dead in her barracks.
          </p>
          <p>
            Sgt. Mosiev and his men race to the border, along the river dividing Borovia from its neighboring country, and spot the Americans fleeing across the water into safety. He raises his rifle to fire, but a fellow soldier stops him, warning that shooting into another country would spark an international incident. Sgt. Mosiev turns his aim instead toward the cliff, where the circus cannon used to launch the Americans across the border sits. Through his scope, he spots <Link to="/character-bios/Stalker">Stalker</Link> aiming a rifle back at him. The two prepare to fire — but <Link to="/character-bios/Stalker">Stalker</Link> pulls the trigger first, killing Sgt. Mosiev (Issue #66).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Mosiev;
