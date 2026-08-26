import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import softMaster1 from './img/softMaster/softmaster_1.png';
import softMaster2 from './img/softMaster/softmaster_2.png';
import softMaster3 from './img/softMaster/softmaster_3.png';

const SoftMaster: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Soft Master</h1>

        <p className="profile-intro">
          The Soft Master is an Arashikage ninja who takes a defensive, non-violent approach to combat. He is the younger brother of the <Link to="/character-bios/HardMaster">Hard Master</Link>, leader of the Arashikage clan, and <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s uncle (<Link to="/character-bios/StormShadow">Storm Shadow</Link>'s deceased father was the Soft Master's younger brother). Sometime after the <Link to="/character-bios/HardMaster">Hard Master</Link>'s death, the Soft Master left Japan and moved to Spanish Harlem in New York, where he purchased a restaurant, Comidas Chinas.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Snake Eyes' Time in Japan</h2>
          <img src={softMaster1} alt="The Soft Master during Snake Eyes' time in Japan" className="profile-block-img" />
          <p>
            The Soft Master lived at the Arashikage family estate in Japan during <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' time there, serving as Vice President in charge of Finance — the second-in-command of the clan. In a conversation with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> many years later at his Spanish Harlem restaurant, the Soft Master recalls the events of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' training in Japan, including the time <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> allowed <Link to="/character-bios/StormShadow">Storm Shadow</Link> to win a sparring match so he could save face. He also describes how the <Link to="/character-bios/HardMaster">Hard Master</Link> had wanted to name <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> heir to the clan; a role <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> did not want for himself.
          </p>
          <p>
            When the <Link to="/character-bios/HardMaster">Hard Master</Link> was murdered, the Soft Master heard the commotion and dashed out of his room, only to see <Link to="/character-bios/StormShadow">Storm Shadow</Link> fleeing with a bow in hand. Entering the dojo, he found the <Link to="/character-bios/HardMaster">Hard Master</Link> dying from an arrow wound. With his final breath, the <Link to="/character-bios/HardMaster">Hard Master</Link> insisted that <Link to="/character-bios/StormShadow">Storm Shadow</Link> was not responsible for his death. <Link to="/character-bios/StormShadow">Storm Shadow</Link> never returned. The Soft Master kept the arrow for years and eventually presents it to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> at his restaurant in Spanish Harlem (<Link to="/comic-issues/Issue26">Issue #26</Link>).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">High Sierras</h2>
          <img src={softMaster2} alt="The Soft Master in the High Sierras" className="profile-block-img" />
          <p>
            The Soft Master travels to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' cabin in the aftermath of a battle between <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, Timber, Spirit, Airborne, Destro, <Link to="/character-bios/Firefly">Firefly</Link>, and <Link to="/character-bios/FredBroca">Fred Broca</Link> (a Crimson Guardsman). Both Joes and Cobras are injured. The Soft Master makes no distinction between the two sides, treating all the wounded equally. The Cobras then depart, with <Link to="/character-bios/Firefly">Firefly</Link> and Destro carrying the seriously injured <Link to="/character-bios/FredBroca">Fred Broca</Link>.
          </p>
          <p>
            After traveling some distance, <Link to="/character-bios/FredBroca">Fred Broca</Link> becomes determined to go back and finish his mission. He slips away while Destro and <Link to="/character-bios/Firefly">Firefly</Link> are resting and returns to the site of the cabin, where he confronts the Joes. The Soft Master is there and shows Fred the futility of his quest for vengeance. Realizing this, Fred dies — his thirst for vengeance had been the only thing keeping him alive (Issue #32).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Springfield</h2>
          <img src={softMaster3} alt="The Soft Master in Springfield" className="profile-block-img" />
          <p>
            The Soft Master hitches a ride to the Cobra-occupied town of Springfield. The driver, drunk, sips a mix of coffee and alcohol the entire way, and drops the Soft Master off at Springfield — who, in the process, leaves his suitcase behind in the backseat.
          </p>
          <p>
            The Soft Master enters Springfield's Cobra police station and asks to use their computer to access information stored in its memory banks. The station sergeant refuses, but the Soft Master says he's familiar with the system and offers to input the search himself. The sergeant orders his officers to beat the Soft Master, but the Soft Master knocks them all unconscious. When the sergeant draws his gun and fires, the Soft Master swiftly disarms him, then hands him a business card reading "Hard Master" and asks him to run the name through the system (Issue #42).
          </p>
          <p>
            The Soft Master finds the identity of the <Link to="/character-bios/HardMaster">Hard Master</Link>'s killer in the database (though it is not revealed to the reader). Just then, backup arrives, and the sergeant draws a second gun from an ankle holster. The Soft Master knocks him down and flees with ninja speed through the officers and out the main door, then commandeers a police car outside.
          </p>
          <p>
            <Link to="/character-bios/Firefly">Firefly</Link>, <Link to="/character-bios/ScrapIron">Scrap-Iron</Link>, and Buzzer, riding a Ferret ATV, spot the Soft Master in the stolen car and give chase, firing a missile from the Ferret. The Soft Master avoids the missile by driving under a moving semi-truck, which shears off the top of his car in the process. He then drives across a set of train tracks, narrowly avoiding an oncoming train — which conveniently blocks the pursuing Ferret's path behind him.
          </p>
          <p>
            On the other side of the tracks, the drunk driver who had dropped the Soft Master off is now driving toward Springfield to return his forgotten suitcase. His passengers are <Link to="/character-bios/Candy">Candy Appel</Link> and <Link to="/character-bios/Billy">Billy</Link>. Intoxicated, the driver crashes into a pole, knocking all three unconscious.
          </p>
          <p>
            The Soft Master stops his car, gets out, and checks on the crash victims. At that moment, <Link to="/character-bios/ScrapIron">Scrap-Iron</Link> climbs the pole on the opposite side of the tracks and aims his dual missile launcher at the wrecked car. The Soft Master rushes forward, using his own body as a shield. The Soft Master dies. <Link to="/character-bios/ScrapIron">Scrap-Iron</Link> fires his second missile, destroying the car (Issue #43). The driver and <Link to="/character-bios/Candy">Candy Appel</Link> die. Billy survives but loses an eye and leg and is in a coma.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default SoftMaster;