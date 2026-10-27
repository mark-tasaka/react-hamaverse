import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import timber1 from './img/timber/timber_1.png';
import timber2 from './img/timber/timber_2.png';

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

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Timber;