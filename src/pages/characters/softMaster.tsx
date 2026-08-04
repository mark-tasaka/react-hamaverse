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
          The Soft Master is an Arashikage ninja who takes a defensive, non-violent approach to combat. He is the younger brother of the Hard Master, leader of the Arashikage clan, and Storm Shadow's uncle (Storm Shadow's deceased father was the Soft Master's younger brother). Sometime after the Hard Master's death, the Soft Master left Japan and moved to Spanish Harlem in New York, where he purchased a restaurant, Comidas Chinas.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Snake Eyes' Time in Japan</h2>
          <img src={softMaster1} alt="The Soft Master during Snake Eyes' time in Japan" className="profile-block-img" />
          <p>
            The Soft Master lived at the Arashikage family estate in Japan during <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' time there, serving as Vice President in charge of Finance — the second-in-command of the clan. In a conversation with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> many years later at his Spanish Harlem restaurant, the Soft Master recalls the events of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' training in Japan, including the time <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> allowed Storm Shadow to win a sparring match so he could save face. He also describes how the Hard Master had wanted to name <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> heir to the clan; a role <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> did not want for himself.
          </p>
          <p>
            When the Hard Master was murdered, the Soft Master heard the commotion and dashed out of his room, only to see Storm Shadow fleeing with a bow in hand. Entering the dojo, he found the Hard Master dying from an arrow wound. With his final breath, the Hard Master insisted that Storm Shadow was not responsible for his death. Storm Shadow never returned. The Soft Master kept the arrow for years and eventually presents it to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> at his restaurant in Spanish Harlem (Issue #26).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">High Sierras</h2>
          <img src={softMaster2} alt="The Soft Master in the High Sierras" className="profile-block-img" />
          <p>
            The Soft Master travels to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' cabin in the aftermath of a battle between <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, Timber, Spirit, Airborne, Destro, Firefly, and Fred Broca (a Crimson Guardsman). Both Joes and Cobras are injured. The Soft Master makes no distinction between the two sides, treating all the wounded equally. The Cobras then depart, with Firefly and Destro carrying the seriously injured Fred Broca.
          </p>
          <p>
            After traveling some distance, Fred Broca becomes determined to go back and finish his mission. He slips away while Destro and Firefly are resting and returns to the site of the cabin, where he confronts the Joes. The Soft Master is there and shows Fred the futility of his quest for vengeance. Realizing this, Fred dies — his thirst for vengeance had been the only thing keeping him alive (Issue #32).
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
            The Soft Master finds the identity of the Hard Master's killer in the database (though it is not revealed to the reader). Just then, backup arrives, and the sergeant draws a second gun from an ankle holster. The Soft Master knocks him down and flees with ninja speed through the officers and out the main door, then commandeers a police car outside.
          </p>
          <p>
            Firefly, Scrap-Iron, and Buzzer, riding a Ferret ATV, spot the Soft Master in the stolen car and give chase, opening fire. The Soft Master dodges a missile by ducking under a moving semi-truck, which shears off the top of his car in the process. He then drives across a set of train tracks, narrowly avoiding an oncoming train — which conveniently blocks the pursuing Ferret's path behind him.
          </p>
          <p>
            On the other side of the tracks, the drunk driver who had dropped the Soft Master off is now driving toward Springfield to return his forgotten suitcase. His passengers are Candy Apel and Billy. Intoxicated, the driver crashes into a pole, knocking all three unconscious.
          </p>
          <p>
            The Soft Master stops his car, gets out, and checks on the crash victims. At that moment, Scrap-Iron climbs the pole on the opposite side of the tracks and aims his dual missile launcher at the wrecked car. The Soft Master rushes forward, using his own body as a shield. The Soft Master dies. Scrap-Iron fires his second missile, destroying the car (Issue #43). The driver and Candy die. Billy survives but loses an eye and leg and is in a coma.
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