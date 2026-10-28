import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import timber1 from './img/timber/timber_1.png';
import timber2 from './img/timber/timber_2.png';
import timber3 from './img/timber/timber_3.png';
import timber4 from './img/timber/timber_4.png';
import timber5 from './img/timber/timber_5.png';
import timber6 from './img/timber/timber_6.png';
import timber7 from './img/timber/timber_7.png';
import timber8 from './img/timber/timber_8.png';

const Timber: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Timber</h1>

        <p className="profile-intro">
          Timber is <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' wolf companion, whom he befriended in the High Sierras after returning from Japan in the aftermath of the <Link to="/character-bios/HardMaster">Hard Master</Link>'s death. Throughout the series, there have been multiple generations of Timber. The original Timber passed away a short time after the closure of the Pit, when <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> retired to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' cabin. The subsequent generations of Timber are descendants of the original.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">The Cabin and the Wolf on Iron Ridge</h2>
          <img src={timber1} alt="Hawk and Stalker meet Timber at Snake Eyes' cabin" className="profile-block-img" />
          <p>
            When <Link to="/character-bios/Hawk">Hawk</Link> is forming G.I. Joe, <Link to="/character-bios/Stalker">Stalker</Link> is the first Joe he recruits. <Link to="/character-bios/Stalker">Stalker</Link> recommends <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, his Vietnam War LRRP teammate. <Link to="/character-bios/Hawk">Hawk</Link> and <Link to="/character-bios/Stalker">Stalker</Link> track the disability checks <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> receives to a rural address in the High Sierras. They travel to the town where the checks are sent and speak with a local, who says that the man lives in a cabin up on Iron Ridge. He describes <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> as some kind of werewolf with a strange mark on his wrists (the Arashikage tattoo).
          </p>
          <p>
            <Link to="/character-bios/Hawk">Hawk</Link> and <Link to="/character-bios/Stalker">Stalker</Link> reach the cabin, and when they enter, they meet Timber. <Link to="/character-bios/Hawk">Hawk</Link> says, "Snake Eyes?" <Link to="/character-bios/Stalker">Stalker</Link> replies, "That's just a wolf, Hawk. The man coming in behind us is Snake Eyes." They convince <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> to join the team. As they depart, <Link to="/character-bios/Hawk">Hawk</Link> asks, "He's going to leave that poor animal behind all by itself?" <Link to="/character-bios/Stalker">Stalker</Link> says that the animal is a wolf, an apex predator (<Link to="/comic-issues/Issue27">Issue #27</Link>).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">The Battle at Snake Eyes' Cabin</h2>
          <img src={timber2} alt="Timber joins the battle at Snake Eyes' cabin" className="profile-block-img" />
          <p>
            A C-130 flies over the High Sierras, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> parachutes to his cabin, where he is reunited with Timber. <Link to="/character-bios/Hawk">Hawk</Link> sends Spirit and Airborne to the High Sierras to keep watch on <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> from a distance in the event of a Cobra attack. They parachute out after <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, keeping their drop a secret.
          </p>
          <p>
            Previously, <Link to="/character-bios/Zartan">Zartan</Link> had placed a tracking device on the C-130, and he notices the aircraft slow down over the High Sierras for a parachute drop. <Link to="/character-bios/Zartan">Zartan</Link> reports this to <Link to="/character-bios/CobraCommander">Cobra Commander</Link>, who dispatches Destro, <Link to="/character-bios/Firefly">Firefly</Link>, and <Link to="/character-bios/FredBroca">Fred Broca</Link> to the High Sierras. The three drive up to the cabin and open fire on <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. A firefight ensues, and Timber joins the battle, attacking Destro.
          </p>
          <p>
            Spirit and Airborne, observing from a short distance away, join the battle. Everyone, including Timber, is wounded in the firefight and lies on the ground (Issue #31). The <Link to="/character-bios/SoftMaster">Soft Master</Link> soon arrives and treats the injuries, making no distinction between Joe and Cobra, then sends the three Cobra agents on their way. While making his way back, <Link to="/character-bios/FredBroca">Fred Broca</Link> slips away and returns to the cabin. The <Link to="/character-bios/SoftMaster">Soft Master</Link> shows him the futility of his obsession with revenge. Realizing this, <Link to="/character-bios/FredBroca">Fred</Link> dies, his thirst for vengeance having been the only thing keeping him alive (Issue #32).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Storm Shadow Bonds with Timber</h2>
          <img src={timber3} alt="Timber bonds with Storm Shadow at the High Sierras cabin" className="profile-block-img" />
          <p>
            Following the Battle of Springfield and his break with Cobra, <Link to="/character-bios/StormShadow">Storm Shadow</Link> infiltrates the Pit and finds <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. He tells his sword brother that while his body has healed, his spirit has not, and asks for a safe place to restore his health and his soul, scarred as it is by revenge. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> gives <Link to="/character-bios/StormShadow">Storm Shadow</Link> the keys to his cabin in the High Sierras, and <Link to="/character-bios/StormShadow">Storm Shadow</Link> departs.
          </p>
          <p>
            A week later, <Link to="/character-bios/StormShadow">Storm Shadow</Link> reaches the cabin, much of it destroyed in an earlier conflict involving <Link to="/character-bios/FredBroca">Fred Broca</Link>, Destro, and <Link to="/character-bios/Firefly">Firefly</Link>. He finds the trapdoor leading to the underground bunker just as Timber appears. The two bond, and <Link to="/character-bios/StormShadow">Storm Shadow</Link> begins his process of healing (Issue #52).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Timber Battles the Red Ninja</h2>
          <img src={timber4} alt="Timber and the Joes battle the Red Ninja in the High Sierras" className="profile-block-img" />
          <p>
            In the aftermath of <Link to="/character-bios/Zartan">Zartan</Link>'s attack in San Francisco (Issue #85), <Link to="/character-bios/Jinx">Jinx</Link> believes he will launch further attacks on <Link to="/character-bios/StormShadow">Storm Shadow</Link>. <Link to="/character-bios/Jinx">Jinx</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and <Link to="/character-bios/Scarlett">Scarlett</Link> stay in the High Sierras, keeping watch over <Link to="/character-bios/StormShadow">Storm Shadow</Link>. One night, sitting around a campfire, an arrow is fired into a nearby log. They douse the fire, and a wounded Timber returns with a torn scrap of a Red Ninja's outfit in his mouth. <Link to="/character-bios/StormShadow">Storm Shadow</Link> believes <Link to="/character-bios/Zartan">Zartan</Link> is ready to meet him and tells <Link to="/character-bios/Jinx">Jinx</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and <Link to="/character-bios/Scarlett">Scarlett</Link> to wait behind. <Link to="/character-bios/StormShadow">Storm Shadow</Link> departs for the waterfall, though it is not <Link to="/character-bios/Zartan">Zartan</Link> waiting for him there, but the Red Ninja driver he had struck with the arrow (Issue #90).
          </p>
          <p>
            <Link to="/character-bios/Jinx">Jinx</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and Timber are surrounded by Red Ninja while <Link to="/character-bios/StormShadow">Storm Shadow</Link> confronts their leader. The Red Ninja reveal the Arashikage tattoo on their right forearms and say they have come to set things right. A battle ensues. With only three Red Ninja remaining, <Link to="/character-bios/Jinx">Jinx</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> have suffered injuries that prevent them from continuing to fight. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and Timber kill the remaining three. <Link to="/character-bios/Jinx">Jinx</Link> spots <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s body drifting down the river, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and Timber jump in and retrieve the injured <Link to="/character-bios/StormShadow">Storm Shadow</Link> (Issue #91).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Timber’s Passing</h2>
          <img src={timber5} alt="Scarlett writes to Stalker about Timber's passing" className="profile-block-img" />
          <p>
            A month after G.I. Joe is disbanded, a select team of Joes goes on one last mission, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> are part of it (G.I. Joe: Frontline #1). Afterward, <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> retire to their cabin in the High Sierras.
          </p>
          <p>
            A month later, <Link to="/character-bios/Stalker">Stalker</Link>, now a recruiting sergeant in Detroit, receives a heartfelt letter from <Link to="/character-bios/Scarlett">Scarlett</Link>. The letter concludes with the sad news of Timber's passing. <Link to="/character-bios/Scarlett">Scarlett</Link> writes, "He was old, even in wolf years, but it was still sad to see him go..." (G.I. Joe: Frontline #4).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Timber’s Legacy: The Next Timber</h2>
          <img src={timber6} alt="A pup becomes the new Timber" className="profile-block-img" />
          <p>
            Before his passing, Timber sires a litter of pups. As <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> finish burying Timber, a mother wolf and her pups, Timber's offspring, come by. One of the pups leaves the litter and runs toward <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link>. The pup becomes the new Timber, following in his father's paw prints (G.I. Joe: Frontline #4).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">A Wolf with a Sniper Rifle</h2>
          <img src={timber7} alt="Timber arrives during the Red Ninja attack on the cabin" className="profile-block-img" />
          <p>
            Following the disbandment of G.I. Joe, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> retire to his cabin in the High Sierras. Cobra's nefarious activities continue. An undisclosed amount of time passes, and <Link to="/character-bios/Duke">Duke</Link> travels to the High Sierras to find them.
          </p>
          <p>
            While <Link to="/character-bios/Scarlett">Scarlett</Link> is in town, Red Ninja attack the cabin. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> sets the cabin on fire, thwarting the Red Ninja's night vision and burning those still inside. As he battles the three remaining Red Ninja outside, <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/Duke">Duke</Link> arrive. Timber shows up shortly afterward, carrying a sniper rifle in his teeth, and the last Red Ninja is killed (Issue #156).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Timber's Grandson: Bonds That Span Generations</h2>
          <img src={timber8} alt="A wolf greets Snake Eyes and Scarlett in the High Sierras" className="profile-block-img" />
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> take a vacation and return to the High Sierras. The Joes surprise <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> with a new cabin, built in secret during off-hours in the vehicle garage at the Pit. <Link to="/character-bios/Scarlett">Scarlett</Link> is aware of the surprise and says that everyone chipped in for the materials.
          </p>
          <p>
            While hiking up a mountain, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> run into a pack of wolves. A solitary alpha wolf arrives and scares the others away. He then runs toward <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> and licks them. <Link to="/character-bios/Scarlett">Scarlett</Link> says, "He must be one of the grandsons of the original Timber... Amazing how some bonds can span generations" (Issue #192).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Timber;