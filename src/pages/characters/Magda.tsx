import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import magda1 from './img/magda/magda_1.png';
import magda2 from './img/magda/magda_2.png';

const Magda: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Magda the Bareback Rider</h1>

        <p className="profile-intro">
          A circus performer, Magda the Bareback Rider criticizes the Borovian government and is arrested and imprisoned in a Borovian gulag for the crime. Her lover, the <Link to="/character-bios/WhiteClown">White Clown</Link>, spends years searching for her, never giving up hope. She is eventually freed and reunited with him, and becomes the new President of Borovia. Her tenure in office — and her life — are cut short when the new President allies himself with Cobra.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Reunited with the White Clown</h2>
          <img src={magda1} alt="Magda's freedom and the fall of Gulag 23" className="profile-block-img" />
          <p>
            Imprisoned for criticizing the government, Magda the Bareback Rider is taken to the gulags. Even within its walls, her will for freedom never leaves her. Outside, her lover, the <Link to="/character-bios/WhiteClown">White Clown</Link>, never gives up hope of finding her.
          </p>
          <p>
            One day, Gulag 23 is attacked by a lone warrior named by the rebels as the <Link to="/character-bios/SnakeEyes">Hero of the People</Link>. Magda and an American prisoner named George Strawhacker are taken down into the sewers beneath the gulag, where the <Link to="/character-bios/SnakeEyes"><Link to="/character-bios/SnakeEyes">Hero</Link> of the People</Link> appears, soon followed by Magda's beloved <Link to="/character-bios/WhiteClown">White Clown</Link> and his friend, <Link to="/character-bios/Orlovsky">Orlovsky the dwarf</Link>. The <Link to="/character-bios/SnakeEyes">Hero</Link> kills the guards, and Magda and the <Link to="/character-bios/WhiteClown">White Clown</Link> are reunited.
          </p>
          <p>
            When Magda returns to the surface, the guards lie dead and rebels surround the gulag. A train carrying Lower Borovians arrives outside, and <Link to="/character-bios/Metz">Metz</Link>, the rebel leader, announces that the gulags will remain open — now to house the Lower Borovians instead. Shocked, Magda realizes the revolution accomplished nothing more than trading one form of persecution for another, shifting from ideology to ethnicity.
          </p>
          <p>
            One of the Lower Borovians, a <Link to="/character-bios/Marina">young girl</Link>, cries out, criticizing the <Link to="/character-bios/SnakeEyes">Hero</Link>. <Link to="/character-bios/Metz">Metz</Link> strikes her with his machine pistol, then levels the weapon at her, calling her subhuman. George Strawhacker, walking beside the <Link to="/character-bios/SnakeEyes">Hero</Link>, strikes <Link to="/character-bios/Metz">Metz</Link> with his fist, knocking him to the ground, and shouts that he is no different than the regime he claims to have overthrown.
          </p>
          <p>
            <Link to="/character-bios/Metz">Metz</Link> fires his machine pistol, killing Strawhacker instantly. Something awakens in the <Link to="/character-bios/SnakeEyes">Hero</Link>, who raises his rifle at <Link to="/character-bios/Metz">Metz</Link>. A mercenary in the crowd reveals that <Link to="/character-bios/Metz">Metz</Link> had hired him to kill the <Link to="/character-bios/SnakeEyes">Hero</Link>, and the mob turns on <Link to="/character-bios/Metz">Metz</Link>, beating him and preparing to hang him.
          </p>
          <p>
            The <Link to="/character-bios/WhiteClown">young girl</Link> begs the <Link to="/character-bios/SnakeEyes">Hero</Link> not to let the mob hang <Link to="/character-bios/Metz">Metz</Link>. Just as the noose tightens, the <Link to="/character-bios/SnakeEyes">Hero</Link>, cradling the girl, shoots the rope in two, and <Link to="/character-bios/Metz">Metz</Link> falls safely to the ground.
          </p>
          <p>
            The <Link to="/character-bios/WhiteClown">White Clown</Link> whispers, "Magda — if <Link to="/character-bios/Metz">Metz</Link> is allowed to live, he will surely plot to bring about your death." Magda replies, "I would rather be dead than become the very people who built this gulag" (Issue #106). Magda goes on to become the new President of Borovia, but her time in office — and her life — are cut short when <Link to="/character-bios/Metz">Metz</Link> allies himself with Cobra (Issue #108).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">A Fair Trial Denied</h2>
          <img src={magda2} alt="Magda's death at the hands of Cobra Commander" className="profile-block-img" />
          <p>
            Political turmoil grips Borovia as Magda is thrown from office. <Link to="/character-bios/Metz">Metz</Link>, the opposition leader, allies himself with Cobra and seizes the presidency. Magda and the <Link to="/character-bios/WhiteClown">White Clown</Link> are captured by Vipers and brought before <Link to="/character-bios/Metz">Metz</Link> and <Link to="/character-bios/CobraCommander">Cobra Commander</Link>. <Link to="/character-bios/Metz">Metz</Link> promises them a fair trial, recalling that his own life had once been spared when the mob tried to hang him.
          </p>
          <p>
            <Link to="/character-bios/CobraCommander">Cobra Commander</Link> disagrees, and guns down Magda and the <Link to="/character-bios/WhiteClown">White Clown</Link> in cold blood. <Link to="/character-bios/Metz">Metz</Link> is shocked and horrified (Issue #145).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Magda;
