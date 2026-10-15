import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import burkhart1 from './img/burkhart/burkhart_1.png';
import burkhart2 from './img/burkhart/burkhart_2.png';

const Burkhart: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Dr. Adele Burkhart</h1>

        <p className="profile-intro">
          Dr. Adele Burkhart (1949–2014) is an outspoken human rights advocate and a woman of principle and courage, whose values often put her at odds with the Joes because of her opposition to the military. Her convictions take her to hotspots around the world, where she works for the oppressed and protests injustice, and more than once the Joes discover that she is the very person they have been sent to rescue. Even in the worst circumstances, she shows exceptional courage and selflessness. In the end, she sacrifices herself in Ollistan, taking a round meant for Alpine.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Operation Lady Doomsday</h2>
          <img src={burkhart1} alt="Dr. Burkhart during Operation Lady Doomsday" className="profile-block-img" />
          <p>
            On a train ride between New York and Washington, D.C., Dr. Adele Burkhart, one of the nation's top nuclear physicists, gives a press conference. She says she was deliberately deceived about the true nature of the project she worked on, a retaliatory weapons system capable of annihilating all life on Earth. She is on her way to Washington to testify before a congressional committee.
          </p>
          <p>
            Unbeknownst to Dr. Burkhart and her security team, several members of the press are undercover Cobra operatives, including the <Link to="/character-bios/Baroness">Baroness</Link> herself. The operatives kill several members of the security detail and capture Dr. Burkhart, taking her to a Cobra-controlled island in the Caribbean.
          </p>
          <p>
            The Joes are called to launch a rescue mission. Many have mixed feelings and many view her as a traitor for her criticism of the military. <Link to="/character-bios/Hawk">Hawk</Link> reminds them that they took an oath to the Constitution, which guarantees every citizen the right to disagree with their government.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> infiltrate the Cobra island fortress while the others deal with the Cobra threats outside. They confront <Link to="/character-bios/CobraCommander">Cobra Commander</Link>, who is holding Dr. Burkhart at gunpoint. Dr. Burkhart throws herself at him, saying she will not be responsible for their deaths, and is wounded in the struggle. <Link to="/character-bios/Scarlett">Scarlett</Link> wounds the Commander with her throwing star. The other Joes arrive, and in the confusion <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and the <Link to="/character-bios/Baroness">Baroness</Link> escape.
          </p>
          <p>
            The Joes have less than five minutes to get out, as a timer has been set to destroy the fortress. They commandeer a Cobra helicopter and escape as the fortress explodes behind them. As the helicopter departs, Dr. Burkhart tells <Link to="/character-bios/Scarlett">Scarlett</Link>, "I still feel that all of my political actions were justified — but at least I know that somewhere in the Pentagon... There are people who care!" (Issue #1).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Rescue in Sierra Gordo</h2>
          <img src={burkhart2} alt="Dr. Burkhart rescued in Sierra Gordo" className="profile-block-img" />
          <p>
            Dr. Burkhart travels to Sierra Gordo on a mission to investigate alleged human rights violations. She is captured, and the Sierra Gordo military believes she is a CIA spy. She is taken to a mountainside stronghold and is about to be interrogated with the truth serum Sodium Amytal when the Joes arrive. <Link to="/character-bios/Stalker">Stalker</Link> leads the team, which includes <Link to="/character-bios/RipCord">Rip Cord</Link>, Roadblock, Gung-Ho, and Recondo. Tucaro natives provide fire support while the Joes infiltrate the stronghold.
          </p>
          <p>
            The Joes escape with Dr. Burkhart, but the Tucaros are killed. Recondo, who has lived with the Tucaros and knows the terrain, leads the way to the border. Near the border, the Joes catch a ride on a bus filled with livestock and locals. Dr. Burkhart is in tears. She says all she wanted was to help people, and that people died in the process. She would rather have died herself than have others die to save her.
          </p>
          <p>
            Disgusted with her attitude, <Link to="/character-bios/RipCord">Rip Cord</Link> says, "Thanks a heap, Miss Goodie Two-Shoes! Nobody asked you to come down here and stir up trouble!" <Link to="/character-bios/Stalker">Stalker</Link> interrupts and tells him, "We are not fighting to have everyone think the way we do. We're fighting so that people have the right to think what they want!" His words echo <Link to="/character-bios/Hawk">Hawk</Link>'s speech during Operation Lady Doomsday, when he reminded the Joes that the Constitution guarantees every citizen the right to disagree with the government (Issue #39).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Burkhart;