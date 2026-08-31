import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import raptor1 from './img/raptor/raptor_1.png';
import raptor2 from './img/raptor/raptor_2.png';
import raptor3 from './img/raptor/raptor_3.png';
import raptor4 from './img/raptor/raptor_4.png';

const Raptor: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Raptor</h1>

        <p className="profile-intro">
          A skilled tax consultant and first-rate accountant, Raptor is, quite frankly, nuts. He dresses head to toe as a giant bird of prey — a habit he claims puts the falcons he trains at ease around him. As Cobra Commander puts it upon first meeting him, "Why is this guy dressed up like a bird? He's a nutcase, right? What's he doing running loose without a straight jacket?"
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">First Impressions</h2>
          <img src={raptor1} alt="Raptor meeting Cobra Commander for the first time" className="profile-block-img" />
          <p>
            Raptor first meets Cobra Commander at <Link to="/character-bios/Fred7">Fred VII</Link>'s secret lab, shortly after <Link to="/character-bios/Fred7">Fred VII</Link> finishes building <Link to="/character-bios/Billy">Billy</Link>'s prosthetic leg. Cobra Commander is unimpressed by Raptor's appearance, remarking, "Why is this guy dressed up like a bird? He's a nutcase, right? What's he doing running loose without a straitjacket?" He later adds, "What do you sleep in? A nest?" Raptor proves his worth all the same, hacking into financial records to help locate the Joes (Issue #59).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Burying Cobra Commander's Body</h2>
          <img src={raptor2} alt="Raptor helping bury Cobra Commander's body" className="profile-block-img" />
          <p>
            When <Link to="/character-bios/Billy">Billy</Link>'s memories fully return, he remembers his time with the anti-Cobra underground in Springfield and finds he hates everything his father stands for. <Link to="/character-bios/Billy">Billy</Link> decides to leave, promising before he goes never to reveal his father's identity or whereabouts.
          </p>
          <p>
            After <Link to="/character-bios/Billy">Billy</Link> leaves, Cobra Commander decides to abandon Cobra, start an honest life, and win back his son's respect. <Link to="/character-bios/Fred7">Fred VII</Link> is furious — he had undergone plastic surgery and given up so much for the organization. As Cobra Commander walks out of the lab, <Link to="/character-bios/Fred7">Fred VII</Link> shoots him in the back, then picks up the battle armor helmet and remarks that anyone could be inside it (Issue #61). Raptor assists <Link to="/character-bios/Fred7">Fred VII</Link> in burying Cobra Commander's body outside Denver (Issue #62).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">I Know Where Your Father Is Buried and Who Killed Him</h2>
          <img src={raptor3} alt="Raptor confronting Billy" className="profile-block-img" />
          <p>
            Raptor tracks down <Link to="/character-bios/Billy">Billy</Link> and deliberately drives at him as he rides his scooter, forcing him to crash into a row of garbage cans on the sidewalk. Raptor climbs out of the car; <Link to="/character-bios/Billy">Billy</Link> jump-kicks him. Just as <Link to="/character-bios/Billy">Billy</Link> is about to deliver a finishing blow, Raptor tells him he knows where his father is buried — and who killed him (Issue #94). Raptor and <Link to="/character-bios/Billy">Billy</Link> travel to the mountains outside Denver, where the body lies.
          </p>
          <p>
            As they prepare to exhume the grave, <Link to="/character-bios/Tyrone">Tyrone</Link> and the <Link to="/character-bios/BlindMaster">Blind Master</Link> (secretly <Link to="/character-bios/Zartan">Zartan</Link> in disguise) arrive. The <Link to="/character-bios/BlindMaster">Blind Master</Link> strikes Raptor for desecrating the grave, warning against the cycle of vengeance. <Link to="/character-bios/Billy">Billy</Link> counters that the target of their revenge is the current Cobra Commander (Issue #94). Rather than exhuming the body, the four travel to the Gulf of Mexico and hire Captain Minh to take them to Cobra Island.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Confronting Dr. Mindbender</h2>
          <img src={raptor4} alt="Raptor confronting Dr. Mindbender" className="profile-block-img" />
          <p>
            On the beach of Cobra Island, Raptor, <Link to="/character-bios/Billy">Billy</Link>, <Link to="/character-bios/Tyrone">Tyrone</Link>, the <Link to="/character-bios/BlindMaster">Blind Master</Link> (<Link to="/character-bios/Zartan">Zartan</Link>), and Captain Minh watch Cobra Commander from a distance. <Link to="/character-bios/Billy">Billy</Link> studies Cobra Commander's body language and realizes this is actually <Link to="/character-bios/Fred7">Fred VII</Link>. The <Link to="/character-bios/BlindMaster">Blind Master</Link> is the first to depart, claiming he needs to scout ahead — though the others don't yet know he is really <Link to="/character-bios/Zartan">Zartan</Link>, planning to confront <Link to="/character-bios/Fred7">Fred VII</Link> himself and send him back to his old life at the Denver garage. Shortly after, Raptor leaves as well.
          </p>
          <p>
            Aboard the freighter, <Link to="/character-bios/Zartan">Zartan</Link> transforms into Dr. Mindbender and arranges a private meeting with <Link to="/character-bios/Fred7">Fred VII</Link>. There, he reveals himself, holds a gun to <Link to="/character-bios/Fred7">Fred VII</Link>'s head, and orders him back to his old life as a garage owner in Denver — all while the real Dr. Mindbender watches the exchange from behind an ajar door. Raptor then confronts Dr. Mindbender privately, describing his trouble controlling the imposter Cobra Commander, and reveals he knows where the real Cobra Commander is buried — remains Dr. Mindbender could use to clone a more controllable Cobra Commander. Raptor, Dr. Mindbender, and a team of Vipers depart to exhume the body (Issue #97).
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
