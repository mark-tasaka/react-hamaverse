import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import laura1 from './img/laura/laura_1.png';
import laura2 from './img/laura/laura_2.png';

const Laura: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Laura 343</h1>

        <p className="profile-intro">
          Laura 343 is the Siegie (Crimson Guard) who leads the operation to capture <Link to="/character-bios/SeanCollins">Sean Collins</Link>, in the belief that he is <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. Laura and her forces succeed in delivering <Link to="/character-bios/SeanCollins">Sean</Link> to the Cobra town of Springfield. <Link to="/character-bios/SeanCollins">Sean</Link> escapes, and Laura is wounded in the crossfire. After months of recovery and rehabilitation, Laura becomes Dr. Mindbender's assistant on Cobra Island. <Link to="/character-bios/SeanCollins">Sean</Link> is captured again and hooked up to the Brainwave Scanner. Laura turns sides and rescues <Link to="/character-bios/SeanCollins">Sean</Link>, and the two escape to the Joes.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Header</h2>
          <img src={laura1} alt="Laura 343 leads the raid on Fort Wadsworth" className="profile-block-img" />
          <p>
            Unbeknownst to Cobra, the original <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> has died, and <Link to="/character-bios/SeanCollins">Sean Collins</Link> has taken his place. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> devises a plan to capture <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and transport him to Springfield, where he will be hooked up to the improved Brainwave Scanner. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> discovers that the Joes have reconstructed the original Fort Wadsworth Pit and that a select team of Joes, including <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, is stationed there. He cares nothing for the casualties on his side and activates his sleeper agents stationed in the houses outside Fort Wadsworth (Issue #266).
          </p>
          <p>
            Laura 343 leads the force of sleeper agents. Once activated, Laura and her forces launch a covert raid on Fort Wadsworth. They take heavy casualties but manage to breach the Pit. Using gas grenades, her forces capture <Link to="/character-bios/SeanCollins">Sean</Link>. Cobra helicopters arrive to transport Laura's forces, their equipment, and the captured <Link to="/character-bios/SeanCollins">Sean</Link> to Springfield (Issue #267).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Header</h2>
          <img src={laura2} alt="Laura 343 during the battle for Springfield" className="profile-block-img" />
          <p>
            When Laura 343 arrives in Springfield with the captured <Link to="/character-bios/SeanCollins">Sean</Link>, <Link to="/character-bios/CobraCommander">Cobra Commander</Link> assigns her to guard him. <Link to="/character-bios/SeanCollins">Sean</Link> is moved to a secret underground area, placed in a prison cell, and restrained in a straitjacket. Laura is stationed outside the cell, heavily armed (Issue #269).
          </p>
          <p>
            <Link to="/character-bios/SeanCollins">Sean</Link>, using his Arashikage ninja training, breaks free from the straitjacket and the cell. Laura raises her assault rifle and warns him to stop (Issue #271). <Link to="/character-bios/SeanCollins">Sean</Link> uses an Arashikage technique to make Laura pass out. <Link to="/character-bios/CobraCommander">Cobra Commander</Link>, Dr. Mindbender, and a group of Vipers open the doors, and <Link to="/character-bios/SeanCollins">Sean</Link> opens fire on them, killing the Vipers and taking <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and Dr. Mindbender hostage. In the meantime, a combined force of Joes, October Guard, and Arashikage is on its way to Springfield (Issue #272).
          </p>
          <p>
            <Link to="/character-bios/SeanCollins">Sean</Link> moves with his two hostages until he is confronted by a patrol of Vipers. A firefight erupts, and <Link to="/character-bios/SeanCollins">Sean</Link> kills the Vipers, shoots <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and Dr. Mindbender in the kneecaps, and flees. Laura soon arrives, having regained consciousness. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> orders her to hunt down and kill Snake Eyes (<Link to="/character-bios/SeanCollins">Sean Collins</Link>). Laura grabs an assault rifle from a dead Viper and tells <Link to="/character-bios/CobraCommander">Cobra Commander</Link>, "I'll do the Crimson Guards proud!" She heads off after <Link to="/character-bios/SeanCollins">Sean</Link> (Issue #274).
          </p>
          <p>
            A full-blown battle takes place in Springfield between Cobra and the Joes and their allies. Laura is severely wounded in the crossfire, hit by Cobra forces. <Link to="/character-bios/SeanCollins">Sean</Link> carries her out of harm's way, where Cobra medics can treat her wounds. The Joes and their allies are victorious and escape with <Link to="/character-bios/SeanCollins">Sean Collins</Link> (Issue #275).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Laura;