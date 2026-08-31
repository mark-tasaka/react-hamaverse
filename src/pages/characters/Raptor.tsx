import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import raptor1 from './img/raptor/raptor_1.png';
import raptor2 from './img/raptor/raptor_2.png';
import raptor3 from './img/raptor/raptor_3.png';
import raptor4 from './img/raptor/raptor_4.png';
import raptor5 from './img/raptor/raptor_5.png';
import raptor6 from './img/raptor/raptor_6.png';
import raptor7 from './img/raptor/raptor_7.png';

const Raptor: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Raptor</h1>

        <p className="profile-intro">
          A skilled tax consultant and first-rate accountant, Raptor is, quite frankly, nuts. He dresses head to toe as a giant bird of prey — a habit he claims puts the falcons he trains at ease around him. As <Link to="/character-bios/CobraCommander">Cobra Commander</Link> puts it upon first meeting him, "Why is this guy dressed up like a bird? He's a nutcase, right? What's he doing running loose without a straight jacket?"
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">First Impressions</h2>
          <img src={raptor1} alt="Raptor meeting Cobra Commander for the first time" className="profile-block-img" />
          <p>
            Raptor first meets <Link to="/character-bios/CobraCommander">Cobra Commander</Link> at <Link to="/character-bios/Fred7">Fred VII</Link>'s secret lab, shortly after <Link to="/character-bios/Fred7">Fred VII</Link> finishes building <Link to="/character-bios/Billy">Billy</Link>'s prosthetic leg. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> is unimpressed by Raptor's appearance, remarking, "Why is this guy dressed up like a bird? He's a nutcase, right? What's he doing running loose without a straitjacket?" He later adds, "What do you sleep in? A nest?" Raptor proves his worth all the same, hacking into financial records to help locate the Joes (Issue #59).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Burying Cobra Commander's Body</h2>
          <img src={raptor2} alt="Raptor helping bury Cobra Commander's body" className="profile-block-img" />
          <p>
            When <Link to="/character-bios/Billy">Billy</Link>'s memories fully return, he remembers his time with the anti-Cobra underground in Springfield and finds he hates everything his father stands for. <Link to="/character-bios/Billy">Billy</Link> decides to leave, promising before he goes never to reveal his father's identity or whereabouts.
          </p>
          <p>
            After <Link to="/character-bios/Billy">Billy</Link> leaves, <Link to="/character-bios/CobraCommander">Cobra Commander</Link> decides to abandon Cobra, start an honest life, and win back his son's respect. <Link to="/character-bios/Fred7">Fred VII</Link> is furious — he had undergone plastic surgery and given up so much for the organization. As <Link to="/character-bios/CobraCommander">Cobra Commander</Link> walks out of the lab, <Link to="/character-bios/Fred7">Fred VII</Link> shoots him in the back, then picks up the battle armor helmet and remarks that anyone could be inside it (Issue #61). Raptor assists <Link to="/character-bios/Fred7">Fred VII</Link> in burying <Link to="/character-bios/CobraCommander">Cobra Commander</Link>'s body outside Denver (Issue #62).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">I Know Where Your Father Is Buried and Who Killed Him</h2>
          <img src={raptor3} alt="Raptor confronting Billy" className="profile-block-img" />
          <p>
            Raptor tracks down <Link to="/character-bios/Billy">Billy</Link> and deliberately drives at him as he rides his scooter, forcing him to crash into a row of garbage cans on the sidewalk. Raptor climbs out of the car; <Link to="/character-bios/Billy">Billy</Link> jump-kicks him. Just as <Link to="/character-bios/Billy">Billy</Link> is about to deliver a finishing blow, Raptor tells him he knows where his father is buried — and who killed him (<Link to="/comic-issues/Issue94">Issue #94</Link>). Raptor and <Link to="/character-bios/Billy">Billy</Link> travel to the mountains outside Denver, where the body lies.
          </p>
          <p>
            As they prepare to exhume the grave, <Link to="/character-bios/Tyrone">Tyrone</Link> and the 'Blind Master' (secretly <Link to="/character-bios/Zartan">Zartan</Link> in disguise) arrive. The 'Blind Master' strikes Raptor for desecrating the grave, warning against the cycle of vengeance. <Link to="/character-bios/Billy">Billy</Link> counters that the target of their revenge is the current <Link to="/character-bios/CobraCommander">Cobra Commander</Link> (<Link to="/comic-issues/Issue95">Issue #95</Link>). Rather than exhuming the body, the four travel to the Gulf of Mexico and hire Captain Minh to take them to Cobra Island.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Confronting Dr. Mindbender</h2>
          <img src={raptor4} alt="Raptor confronting Dr. Mindbender" className="profile-block-img" />
          <p>
            On the beach of Cobra Island, Raptor, <Link to="/character-bios/Billy">Billy</Link>, <Link to="/character-bios/Tyrone">Tyrone</Link>, the 'Blind Master' (<Link to="/character-bios/Zartan">Zartan</Link>), and Captain Minh watch <Link to="/character-bios/CobraCommander">Cobra Commander</Link> from a distance. <Link to="/character-bios/Billy">Billy</Link> studies <Link to="/character-bios/CobraCommander">Cobra Commander</Link>'s body language and realizes this is actually <Link to="/character-bios/Fred7">Fred VII</Link>. The 'Blind Master' is the first to depart, claiming he needs to scout ahead — though the others don't yet know he is really <Link to="/character-bios/Zartan">Zartan</Link>, planning to confront <Link to="/character-bios/Fred7">Fred VII</Link> himself and send him back to his old life at the Denver garage. Shortly after, Raptor leaves as well.
          </p>
          <p>
            Aboard the freighter, <Link to="/character-bios/Zartan">Zartan</Link> transforms into Dr. Mindbender and arranges a private meeting with <Link to="/character-bios/Fred7">Fred VII</Link>. There, he reveals himself, holds a gun to <Link to="/character-bios/Fred7">Fred VII</Link>'s head, and orders him back to his old life as a garage owner in Denver — all while the real Dr. Mindbender watches the exchange from behind an ajar door. Raptor then confronts Dr. Mindbender privately, describing his trouble controlling the imposter <Link to="/character-bios/CobraCommander">Cobra Commander</Link>, and reveals he knows where the real <Link to="/character-bios/CobraCommander">Cobra Commander</Link> is buried — remains Dr. Mindbender could use to clone a more controllable <Link to="/character-bios/CobraCommander">Cobra Commander</Link>. Raptor, Dr. Mindbender, and a team of Vipers depart to exhume the body (Issue #97).
          </p>
        </section>
                <section className="profile-block">
          <h2 className="profile-block-title">The Real Cobra Commander Lives</h2>
          <img src={raptor5} alt="The return of the real Cobra Commander" className="profile-block-img" />
          <p>
            Raptor is with Dr. Mindbender and the Viper excavation team as they search for Cobra Commander's body. All they find is an old shirt with a bullet hole in the back. Soon after, the real <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and his loyal Crimson Guard emerge from the trees. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> reveals he had remote sensors installed in the area, in case anyone ever came back to retrieve his body.
          </p>
          <p>
            <Link to="/character-bios/CobraCommander">Cobra Commander</Link> explains that Fred VIII, who had been monitoring <Link to="/character-bios/Fred7">Fred VII</Link>, was the one who uncovered his body. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> had not actually died from the gunshot wound — he had fallen into a catatonic state, only appearing dead. Fred VIII called the secret Fred hotline and located a Fred series doctor in the area, who removed the bullet and saw to the Commander's full recovery. Once he had recovered, <Link to="/character-bios/CobraCommander">Cobra Commander</Link> contacted his Siegies (Crimson Guard) and quietly rebuilt his organization, taking full advantage of human corruption and greed.
          </p>
          <p>
            <Link to="/character-bios/CobraCommander">Cobra Commander</Link> tells Dr. Mindbender and Raptor that his loyal Siegies have made modifications to Cobra Island. He, his Siegies, and the others then depart aboard a Cobra transport helicopter for Cobra Island (Issue #98).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Death in the Landlocked Freighter</h2>
          <img src={raptor6} alt="Raptor's death in the landlocked freighter" className="profile-block-img" />
          <p>
            The transport helicopter lands atop the landlocked freighter. <Link to="/character-bios/CobraCommander">Cobra Commander</Link>'s Siegies open the freighter's top hatch, revealing <Link to="/character-bios/Fred7">Fred VII</Link>, <Link to="/character-bios/Billy">Billy</Link>, Croc Master, Voltar, Firefly, <Link to="/character-bios/Zartan">Zartan</Link>, Captain Minh, and <Link to="/character-bios/Tyrone">Tyrone</Link> arguing inside. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> announces his return, and his Siegies throw Raptor, Dr. Mindbender, and the Viper excavation team down into the freighter.
          </p>
          <p>
            The hatch closes, and <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and his Siegies board the helicopter, which departs soon after. A series of explosions diverts a water channel, carrying the freighter into an inactive volcano; further explosions bury it deep within, trapping everyone inside (Issue #98). Over time, Raptor and most of the others trapped in the freighter die of botulism from tainted rations aboard the vessel.
          </p>
        </section>

                <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <img src={raptor7} alt="Notes on Raptor" className="profile-block-img" />
          <p>
            During the Marvel run (1982–1994), a single version of Raptor was produced: the <a href="https://www.yojoe.com/action/87/raptor.shtml" target="_blank" rel="noopener noreferrer">1987 figure</a>. Hasbro created some "over-the-top" action figures that presented a real challenge for Mr. Hama to write believably into the comic. Raptor was one of these figures — a challenge Mr. Hama himself seems to acknowledge through the voice of <Link to="/character-bios/CobraCommander">Cobra Commander</Link> upon first meeting him.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Raptor;
