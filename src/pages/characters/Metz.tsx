import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import metz1 from './img/metz/metz_1.png';
import metz2 from './img/metz/metz_2.png';
import metz3 from './img/metz/metz_3.png';

const Metz: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Metz</h1>

        <p className="profile-intro">
          The leader of the revolutionary force when the communist government of Borovia is overthrown, Metz calls for the ethnic cleansing of the Lower Borovians, using <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' exploits to rally the mob to his will. Metz is later betrayed by the mercenary Major Bludd and is nearly hanged before <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> saves his life. A new president of Borovia is elected, but Metz's political ambitions continue — and when the new government falls, he forms an alliance with <Link to="/character-bios/CobraCommander">Cobra Commander</Link>, becoming president himself.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">The Hero of the People</h2>
          <img src={metz1} alt="Metz rallying the mob against Snake Eyes" className="profile-block-img" />
          <p>
            The revolution to overthrow the communist government of Borovia is underway. Metz leads the rebels and calls for the ethnic cleansing of the Lower Borovians. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, under the control of the Arashikage Mindset, parachutes into Borovia on a mission to rescue George Strawhacker. While rallying a mob outside a police security station, Metz witnesses <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> infiltrate the building and attack the forces inside. Dubbing him the "Hero of the People," Metz rallies the mob forward to join the assault. By the time Metz and his mob clear the building, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is already gone.
          </p>
          <p>
            Later, Metz and his mob gather outside the headquarters of the Security Police. He watches the Hero of the People vault over the barricades, dodging a hail of machine-gun fire to breach the building. The <Link to="/character-bios/WhiteClown">White Clown</Link> and <Link to="/character-bios/Orlovsky">Orlovsky</Link>, who are also present, follow the Hero inside shortly after. Metz rallies the mob, and together they surge forward. Metz and his followers reach the records room, where they find the Hero searching through files while the security police stand with their hands raised in surrender. The Hero ignores Metz entirely. Metz orders his rebels to march the prisoners outside along with the Lower Borovians and have them shot. The <Link to="/character-bios/WhiteClown">White Clown</Link> protests, but Metz turns on him, demanding to know if he, too, is an enemy of the people, before departing to oversee the firing squads.
          </p>
          <p>
            After the firing squads carry out their executions, Metz is approached by the mercenary Major Bludd, who forces an alliance upon him (Issue #104).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Betrayal at the Gulag</h2>
          <img src={metz2} alt="Metz's betrayal at the gulag" className="profile-block-img" />
          <p>
            Metz travels with Major Bludd by helicopter to the gulag where the Hero has gone. Major Bludd reveals that the Hero — <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> — is a renegade American, and that he himself has been hired by General Crowther to execute him (Issue #105). Major Bludd sets off alone to find <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> inside the gulag, while Metz remains outside to supervise the train transporting the Lower Borovians there. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> liberates the gulag, and Major Bludd returns having failed his mission. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> emerges with a freed American prisoner. As Metz leads the group of Lower Borovians toward the gulag, a <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> among them spots <Link to="/character-bios/Marina">young girl</Link> and cries out, "This man is no hero! He allowed the mob to execute my father!"
          </p>
          <p>
            Metz strikes the <Link to="/character-bios/Marina">girl</Link> and calls her subhuman, raising his machine pistol to execute her when the freed American prisoner strikes him, knocking him to the ground. The American tells him he is no different than the regime he claims to have overthrown. Metz opens fire, killing him instantly. The Hero raises his assault rifle at Metz, and Major Bludd tells the crowd that Metz had hired him to assassinate the Hero all along. The mob turns on Metz, beating him and dragging him off to be hanged. Just as the noose tightens, the Hero shoots the rope, saving his life (Issue #106).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Alliance with Cobra</h2>
          <img src={metz3} alt="Metz's rise to power and alliance with Cobra" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Magda">Magda</Link> becomes President of Borovia, but her term in office comes to an end as political instability returns. Metz strikes a pact with <Link to="/character-bios/SnakeEyes">Cobra Commander</Link>, allowing Cobra to provide military support in exchange for installing him as the new President. A pair of Vipers bring the captured <Link to="/character-bios/Magda">Magda</Link> and the <Link to="/character-bios/WhiteClown">White Clown</Link> before him, and Metz offers them a fair trial. <Link to="/character-bios/SnakeEyes">Cobra Commander</Link> has other plans, however, executing the couple in cold blood in front of a shocked Metz (Issue #145).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Metz;
