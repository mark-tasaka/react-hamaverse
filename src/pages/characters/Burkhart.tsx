import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import burkhart1 from './img/burkhart/burkhart_1.png';

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

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Burkhart;