import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import scrapIron1 from './img/scrapIron/scrapIron_1.png';

const ScrapIron: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Scrap-Iron</h1>

        <p className="profile-intro">
          Cobra's anti-armor specialist, Scrap-Iron fights with his trademark dual missile launcher — the same weapon responsible for the deaths of the <Link to="/character-bios/SoftMaster">Soft Master</Link> and <Link to="/character-bios/Candy">Candy Appel</Link>, and for the injuries that cost <Link to="/character-bios/Billy">Billy</Link> his eye and leg.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Caught in the Crossfire: Deaths of the Soft Master and Candy Appel</h2>
          <img src={scrapIron1} alt="Scrap-Iron's fatal kill in Springfield" className="profile-block-img" />
          <p>
            Scrap-Iron is riding on the back of a Cobra Ferret ATV (<Link to="/character-bios/Firefly">Firefly</Link> is the driver) in Springfield when they comes across Buzzer, marking the first meeting between the two. Buzzer catches a ride with them. The trio approach the Cobra police station just as an officer is thrown through the window and an old man — the <Link to="/character-bios/SoftMaster">Soft Master</Link> — bursts out with uncanny speed. The <Link to="/character-bios/SoftMaster">Soft Master</Link> commandeers a police car and drives off.
          </p>
          <p>
            The Ferret pursues the stolen police car. <Link to="/character-bios/Firefly">Firefly</Link> fires a missile from the Ferret, but the <Link to="/character-bios/SoftMaster">Soft Master</Link> avoids it by driving under a moving semi-truck, which shears off the top of his car in the process. He then drives across a set of train tracks, narrowly avoiding an oncoming train — which conveniently blocks the pursuing Ferret's path behind him.
          </p>
          <p>
            On the other side of the tracks, the drunk driver (who originally the <Link to="/character-bios/SoftMaster">Soft Master</Link> a ride to Springfield) is now heading back toward Springfield to return his forgotten suitcase. His passengers are <Link to="/character-bios/Candy">Candy Appel</Link> and <Link to="/character-bios/Billy">Billy</Link>. Intoxicated, the driver crashes into a pole, knocking all three unconscious.
          </p>
          <p>
            The <Link to="/character-bios/SoftMaster">Soft Master</Link> stops his car, gets out, and checks on the crash victims. At that moment, Scrap-Iron climbs a pole on the opposite side of the tracks and aims his dual missile launcher at the wrecked car. The <Link to="/character-bios/SoftMaster">Soft Master</Link> rushes forward, using his own body as a shield, and dies in the blast. Scrap-Iron fires his second missile, destroying the car entirely (Issue #43) — unaware of who the victims inside the car are. The driver and <Link to="/character-bios/Candy">Candy Appel</Link> are killed. <Link to="/character-bios/Billy">Billy</Link> survives, but loses an eye and a leg and falls into a coma.
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), a single version of Scrap-Iron was produced: the <a href="https://www.yojoe.com/action/84/scrapiron.shtml" target="_blank" rel="noopener noreferrer">1984 figure</a> .
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default ScrapIron;
