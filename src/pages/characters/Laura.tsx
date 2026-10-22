import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import laura1 from './img/laura/laura_1.png';
import laura2 from './img/laura/laura_2.png';
import laura3 from './img/laura/laura_3.png';
import laura4 from './img/laura/laura_4.png';

const Laura: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Laura 343</h1>

        <p className="profile-intro">
          Laura 343 is the Siegie (Crimson Guard) who leads the operation to capture <Link to="/character-bios/SeanCollins">Sean Collins</Link>, in the belief that he is Snake Eyes. Laura and her forces succeed in delivering <Link to="/character-bios/SeanCollins">Sean</Link> to the Cobra town of Springfield. <Link to="/character-bios/SeanCollins">Sean</Link> escapes, and Laura is wounded in the crossfire. After months of recovery and rehabilitation, Laura becomes Dr. Mindbender's assistant on Cobra Island. <Link to="/character-bios/SeanCollins">Sean</Link> is captured again and hooked up to the Brainwave Scanner. Laura turns sides and rescues <Link to="/character-bios/SeanCollins">Sean</Link>, and the two escape to the Joes.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Raid on Fort Wadsworth</h2>
          <img src={laura1} alt="Laura 343 leads the raid on Fort Wadsworth" className="profile-block-img" />
          <p className="italics">
            Unbeknownst to Cobra, the original Snake Eyes has died, and <Link to="/character-bios/SeanCollins">Sean Collins</Link> has taken his place. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> devises a plan to capture Snake Eyes and transport him to Springfield, where he will be hooked up to the improved Brainwave Scanner. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> discovers that the Joes have reconstructed the original Fort Wadsworth Pit and that a select team of Joes, including Snake Eyes, is stationed there. He cares nothing for the casualties on his side and activates his sleeper agents stationed in the houses outside Fort Wadsworth (Issue #266).
          </p>
          <p>
            Laura 343 leads the force of sleeper agents. Once activated, Laura and her forces launch a covert raid on Fort Wadsworth. They take heavy casualties but manage to breach the Pit. Using gas grenades, her forces capture <Link to="/character-bios/SeanCollins">Sean</Link>. Cobra helicopters arrive to transport Laura's forces, their equipment, and the captured <Link to="/character-bios/SeanCollins">Sean</Link> to Springfield (Issue #267).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Guarding the Prisoner</h2>
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

        <section className="profile-block">
          <h2 className="profile-block-title">Laura Switches Sides</h2>
          <img src={laura3} alt="Laura 343 turns against Cobra and escapes with Sean" className="profile-block-img" />
          <p>
            <Link to="/character-bios/CobraCommander">Cobra Commander</Link> builds a casino resort on Cobra Island, with Dr. Mindbender's laboratory hidden beneath it. After months of recovery and rehabilitation, Laura 343, now fit for duty, returns as Dr. Mindbender's assistant (Issue #287).
          </p>
          <p>
            As the casino resort prepares to open to the public, Dr. Mindbender reveals his plan to Laura: he wants her to capture Snake Eyes again and hook him up to the Brainwave Scanner. He also shows Laura his DNA gestation tank but does not reveal what it is for (Issue #292).
          </p>
          <p>
            The casino resort opens to the public, and <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/SeanCollins">Sean Collins</Link>, Dawn Mareno, <Link to="/character-bios/Jinx">Jinx</Link>, and Agent Helix infiltrate it disguised as guests. Dr. Mindbender shows Laura the DNA gestation tanks and reveals his plans to revive Serpentor (Serpentor Redux) and to create a Cobra version of Snake Eyes (Issue #293).
          </p>
          <p>
            <Link to="/character-bios/Scarlett">Scarlett</Link> and her team battle the next generation of B.A.T.s at the casino. Dr. Mindbender sees Snake Eyes on the video feed battling the B.A.T.s and orders Laura to capture him (Issue #294). Laura takes off. <Link to="/character-bios/Scarlett">Scarlett</Link> and her team breach the lab and capture Dr. Mindbender. As they are about to leave with him and a captive Techno-Viper, Laura arrives with a sizable Cobra force (Issue #295). A firefight ensues. Serpentor Khan's tank is hit, and he emerges from it. In the meantime, a larger force of Joes arrives on the island (Issue #296).
          </p>
          <p>
            Serpentor Khan takes control of the situation, rallies the Cobra troopers, and forces <Link to="/character-bios/Scarlett">Scarlett</Link> and her team to fall back. He speaks with the confidence of a man who already commands Cobra. Laura begins to think that reviving Serpentor was a mistake and whispers this to Dr. Mindbender (Issue #297). Serpentor Khan captures Snake Eyes (<Link to="/character-bios/SeanCollins">Sean</Link>) and Dawn. Dawn is taken to a prison cell, while <Link to="/character-bios/SeanCollins">Sean</Link> is hooked up to the Brainwave Scanner.
          </p>
          <p>
            Serpentor Khan later knocks out <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and assumes leadership of Cobra (Issue #298). Witnessing <Link to="/character-bios/CobraCommander">Cobra Commander</Link> being dragged away and the madness of Dr. Mindbender, Laura decides to switch sides. While alone with Dr. Mindbender, she draws a pistol on him and ties him up. She frees <Link to="/character-bios/SeanCollins">Sean</Link> from the Brainwave Scanner, and the two escape.
          </p>
          <p>
            In the woods outside the lab, Laura and <Link to="/character-bios/SeanCollins">Sean</Link> encounter <Link to="/character-bios/Wade">Wade Collins</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link>. <Link to="/character-bios/Wade">Wade</Link> embraces his son. Soon afterward, the group is attacked by Vipers. They defeat the Vipers, but <Link to="/character-bios/Wade">Wade</Link> is wounded. <Link to="/character-bios/Wade">Wade</Link> tells <Link to="/character-bios/SeanCollins">Sean</Link> that he needs to leave with Laura for the W.H.A.L.E. <Link to="/character-bios/SeanCollins">Sean</Link> does not want to leave his father, but <Link to="/character-bios/Wade">Wade</Link> tells him that Laura has sacrificed everything for him and that he needs to get her off the island. <Link to="/character-bios/StormShadow">Storm Shadow</Link> stays with <Link to="/character-bios/Wade">Wade</Link>, while Laura and <Link to="/character-bios/SeanCollins">Sean</Link> depart (Issue #299).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">A Loss Below Deck</h2>
          <img src={laura4} alt="Laura 343 aboard the W.H.A.L.E. after Wade's death" className="profile-block-img" />
          <p className="italics">
            A series of events unfolds on Cobra Island: the original <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is revived, the Joes capture <Link to="/character-bios/CobraCommander">Cobra Commander</Link>, and Serpentor Khan sets the timer on Dr. Mindbender's Mutant Virus Bomb. Laura 343, Dawn, <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/Stalker">Stalker</Link>, <Link to="/character-bios/SeanCollins">Sean</Link>, <Link to="/character-bios/Wade">Wade</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, and the captured <Link to="/character-bios/CobraCommander">Cobra Commander</Link> board the W.H.A.L.E. hovercraft. The W.H.A.L.E. races away from Cobra Island as the Mutant Virus Bomb's countdown ticks toward detonation.
          </p>
          <p>
            Laura and <Link to="/character-bios/Wade">Wade</Link> take <Link to="/character-bios/CobraCommander">Cobra Commander</Link> below deck, and Laura covers him with her pistol. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> strikes her, knocks her down, and takes her pistol. <Link to="/character-bios/Wade">Wade</Link> checks on Laura, then rushes toward <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and is shot. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> then flees on a jet sled. When <Link to="/character-bios/Stalker">Stalker</Link> and <Link to="/character-bios/SeanCollins">Sean</Link> reach the lower deck, they find Laura cradling the lifeless body of <Link to="/character-bios/Wade">Wade</Link> (Issue #301).
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