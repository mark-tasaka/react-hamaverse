import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import cobraCommander1 from './img/cobraCommander/cobraCommander_1.png';
import cobraCommander2 from './img/cobraCommander/cobraCommander_2.png';
import cobraCommander3 from './img/cobraCommander/cobraCommander_3.png';
import cobraCommander4 from './img/cobraCommander/cobraCommander_4.png';

const CobraCommander: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Cobra Commander</h1>

        <p className="profile-intro">
          The man who became Cobra Commander started out as an ordinary used car salesman — bitter toward big government, disillusioned with the system, and traumatized by the car accident that claimed his older brother's life. Leaving his wife, he traveled across America with his son, finding others who shared his views. He started the organization as a pyramid scheme, selling cleaning products and vitamins, with sales meetings  becoming indoctrination sessions. This section explores Cobra Commander in the early years of Cobra, and the "Sins of the Father" story arc.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">The Formation of Cobra</h2>
          <img src={cobraCommander1} alt="The formation of Cobra" className="profile-block-img" />
          <p>
            The man who would become Cobra Commander leaves his wife, telling his young son, <Link to="/character-bios/Billy">Billy</Link>, that his mother has died in a car accident. He travels across America, seeking out others as disillusioned and bitter as himself. What begins as small gatherings in hotel rooms grow into full rallies. Cobra Commander raises money through a pyramid scheme selling vitamins and household products, and the sales meetings become fronts for indoctrination sessions, drawing the disillusioned into his cause (Issue #84).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">His Brother's Death</h2>
          <img src={cobraCommander2} alt="The death of Cobra Commander's brother" className="profile-block-img" />
          <p>
            Cobra Commander had an older brother, Dan, who extended his tours in Vietnam to prevent him from being sent overseas*. When Dan returned home, he came back a different man, spending long hours driving at high speeds on the interstate searching for death to find him. One day, he crashed head-on into a car carrying a family on their way to pick up their son, a returning soldier, from the airport. Everyone was killed. The family of the returning veteran was <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' family.
          </p>
          <p>
            Cobra Commander twists the event in his mind, blaming the returning veteran's family for his brother's death. When he learns the veteran — <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> — is living with the Arashikage ninja clan in Japan (Issue #84), he first hires the saboteur <Link to="/character-bios/Firefly">Firefly</Link> to engineer his assassination. <Link to="/character-bios/Firefly">Firefly</Link> infiltrates the Arashikage clan but has no interest in carrying out the killing himself, agreeing only to play a supporting role in the mission (Issue #126).
          </p>
          <p>
            Cobra Commander travels to Daytona Beach and finds <Link to="/character-bios/Zartan">Zartan</Link> at the "Don't Fall Inn".  He hires <Link to="/character-bios/Zartan">Zartan</Link> to infiltrate the Arashikage clan and kill <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. <Link to="/character-bios/Zartan">Zartan</Link> does so by becoming the apprentice of the clan's swordsmith, <Link to="/character-bios/Onihashi">Professor Onihashi</Link> — and in the process, <Link to="/character-bios/Zartan">Zartan</Link> finds a peace and no longer wants to carry out the mission. When Cobra Commander discovers this, he threatens to expose <Link to="/character-bios/Zartan">Zartan</Link> to <Link to="/character-bios/Onihashi">Onihashi</Link> if he doesn't finish the job. <Link to="/character-bios/Zartan">Zartan</Link> attemps to kill <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, but kills the <Link to="/character-bios/HardMaster">Hard Master</Link> by mistake — the <Link to="/character-bios/HardMaster">Hard Master</Link> had been demonstrating the technique of "Donning the Cloak of the Chameleon," mimicking <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' heartbeat and breathing at the moment the fatal arrow struck (Issue #84).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Springfield</h2>
          <img src={cobraCommander3} alt="Cobra Commander's takeover of Springfield" className="profile-block-img" />
          <p>
            While traveling across America recruiting others for his cause, Cobra Commander comes across the economically devastated town of Springfield. He starts his pyramid scheme there, recruiting locals to sell household cleaning products for extra income. The sales meetings soon turn into indoctrination and leadership sessions, drawing the town deeper into his cause, until nearly all of Springfield belongs to Cobra — save for a small underground resistance.
          </p>
          <p>
            Cobra Commander's own son, <Link to="/character-bios/Billy">Billy</Link>, becomes part of this underground resistance. He is captured while scrounging for supplies and held in a prison cell. One day, <Link to="/character-bios/Scarlett">Scarlett</Link> and Zap are captured as well and thrown into the same cell. With their help, the three make their escape. <Link to="/character-bios/Billy">Billy</Link> never reveals who his father truly is — telling the Joes only that his whole family is hiding underground in Springfield as part of the resistance. He stays behind when the Joes depart (Issue #10).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <img src={cobraCommander4} alt="Notes on Cobra Commander's true face" className="profile-block-img" />
          <p>
            During the Marvel run (1982–1994), seven different versions of Cobra Commander were produced: the <a href="https://www.yojoe.com/action/82/cobracommander.shtml" target="_blank" rel="noopener noreferrer">1982 straight-arm version</a> (<a href="https://www.yojoe.com/action/83/cobracommander1p5.shtml" target="_blank" rel="noopener noreferrer">1983 swivel-arm variant</a>), the <a href="https://www.yojoe.com/action/84/cobracommander2.shtml" target="_blank" rel="noopener noreferrer">1984 hooded version</a>, the <a href="https://www.yojoe.com/action/87/cobracommander3.shtml" target="_blank" rel="noopener noreferrer">1987 Battle Armor version</a>, the <a href="https://www.yojoe.com/action/91/cobracommander4.shtml" target="_blank" rel="noopener noreferrer">1991 version</a>, the <a href="https://www.yojoe.com/action/92/cobracommander5.shtml" target="_blank" rel="noopener noreferrer">1992 version</a>, the <a href="https://www.yojoe.com/action/93/cobracommander6.shtml" target="_blank" rel="noopener noreferrer">1993 version</a>, and the <a href="https://www.yojoe.com/action/94/cobracommander7.shtml" target="_blank" rel="noopener noreferrer">1994 Star Brigade version</a>.
          </p>
          <p>
            When shown without his mask, Cobra Commander appears wearing the disguise obtained from a Staten Island costume shop — a long mustache, ponytail, sunglasses, and beret (Issue #55). In Issue #98, part of his actual face is shown as Cobra Commander undergoes surgery to remove a bullet.  His face bears a striking resemblance to the faces of the <Link to="/character-bios/FredBroca">Fred series</Link> Crimson Guards. G.I. Joe: Declassified #1 reveals that the original <Link to="/character-bios/FredBroca">Fred Broca</Link> underwent plastic surgery to match the faces of the others in the series — raising the question of whose face the Freds were actually modeled after. Are their appearances been based on Cobra Commander's appearance?
          </p>
          
          <p className="profile-notes-footnote">
            *It is implied Cobra Commander was in the serivice at that time (likely drafted into the military for a two year term of service).  The government has a policy of sending only one member of a family to serve in combat at a time.  Thus, by extending his tours, Dan was able to keep his younger brother from being sent to Vietnam.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default CobraCommander;
