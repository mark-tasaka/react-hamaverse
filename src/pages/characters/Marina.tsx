import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import marina1 from './img/marina/marina_1.png';
import marina2 from './img/marina/marina_2.png';
import marina3 from './img/marina/marina_3.png';

const Marina: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Marina</h1>

        <p className="profile-intro">
          The overthrow of the communist government in Borovia leads to widespread ethnic cleansing, as Lower Borovians are targeted and persecuted by Upper Borovians. Marina is a preteen caught in the violence, orphaned after her father is killed. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> brings her back to America with him, where she is adopted by the Collins family and starts a new life.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Marina's First Encounter with the "Hero of the People"</h2>
          <img src={marina1} alt="Marina's first encounter with the hero" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Scarlett">Scarlett</Link> lies in a coma, and her sister, <Link to="/character-bios/Sioban">Sioban</Link>, has petitioned the courts to terminate her life support — her fate seemingly sealed. To take his friend's mind off <Link to="/character-bios/Scarlett">Scarlett</Link>'s fate, <Link to="/character-bios/StormShadow">Storm Shadow</Link> blackmails the Jugglers into sending <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> on a mission into Borovia to rescue George Strawhacker, the fiancé of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' late twin sister, from a Borovian gulag. To ensure <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> survives and the mission succeeds, <Link to="/character-bios/StormShadow">Storm Shadow</Link> uses the Arashikage Mindset to turn him into a cold, focused killing machine.
          </p>
          <p>
            A crowd of armed Upper Borovians surrounds the Security Forces Headquarters, held back by armed forces inside. Marina, her father, and a group of Lower Borovians are held captive by the crowd, many of them slated for execution. A stranger (<Link to="/character-bios/SnakeEyes">Snake Eyes</Link>) somersaults over the barricades, sprints through a hail of gunfire, and breaches the building. He lays waste to the soldiers inside, and the crowd outside — dubbing him the "Hero of the People" — rallies and joins the assault on the headquarters.
          </p>
          <p>
            Hope rises in Marina as she watches the Hero leave the building. She runs up to him and pleads with him to stop the crowd from shooting her father, insisting he's innocent — his only crime is that he is a Lower Borovian. Falling to her knees, she cries, "How can you be a hero if you have no heart?" The Hero departs. Moments later, Marina's father is gunned down by the firing squad.  She bursts into tears, overwhelmed with grief (Issue #104).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">The Hero Regains His Humanity</h2>
          <img src={marina2} alt="The Hero breaking free of the Arashikage Mindset" className="profile-block-img" />
          <p>
            Marina and a group of Lower Borovians are marched in front of the gulag the Hero (<Link to="/character-bios/SnakeEyes">Snake Eyes</Link>) has liberated. Beside him stands an American agent and friend (George Strawhacker) he rescued from the camp. Spotting the Hero, Marina points at him and shouts, "This man is no hero — he let the mob shoot my father!" Mertz, the mob's leader, strikes Marina with his machine pistol, knocking her down, and levels the weapon at her. Just then, the Hero's friend, George Strawhacker, strikes Mertz to the ground.  Mertz raises his machine pistol and kills him.
          </p>
          <p>
            The shock of Strawhacker's death breaks the Arashikage Mindset's hold over the Hero, and he regains his humanity. He raises his gun at Mertz, and the mob turns on their former leader, beating him and preparing to hang him. Marina pleads with the Hero to save Mertz, telling him, "Even though he is a bad man, you cannot let them do this." Just as the noose tightens, the Hero shoots the rope, saving Mertz's life, and departs with Marina at his side.
          </p>
          <p>
            The next day, Marina and the Hero reach the Borovian border by car. When the guards ask where they're headed, Marina answers, "He's going to take me to America, to live with a real American family. I'm going to have a brother and a sister" (Issue #106).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">A New Family in America</h2>
          <img src={marina3} alt="Marina's adoption into the Collins family" className="profile-block-img" />
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and his friends find Marina a new home with <Link to="/character-bios/Wade">Wade Collins</Link> and his family. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, and <Link to="/character-bios/Stalker">Stalker</Link> travel with Marina to the Collins family home, where <Link to="/character-bios/Wade">Wade Collins</Link>, his wife, <Link to="/character-bios/SeanCollins">Sean</Link>, and Heather greet her at the front door, welcoming her into the family. Marina asks, "You don't mind me being adopted?" Heather replies, "We're all adopted in this family" (Issue #108).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Marina;