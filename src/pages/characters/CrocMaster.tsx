import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import crocMaster1 from './img/crocMaster/crocMaster_1.png';
import crocMaster2 from './img/crocMaster/crocMaster_2.png';

const CrocMaster: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Croc Master</h1>

        <p className="profile-intro">
          An unusual sort, Croc Master patrols the swamps and waterways surrounding Cobra Island with his girls — pet crocodiles named Chelsea, Melissa, and Tara. He spends a full year tracking a clever interloper without success, until he finally captures the man and two of his friends in the tunnels beneath the island. Croc Master delivers the prisoners to the landlocked freighter and makes the fatal mistake of staying behind — becoming one of the unfortunate souls trapped inside when the original <Link to="/character-bios/CobraCommander">Cobra Commander</Link> returns.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Hunting the Clever Interloper</h2>
          <img src={crocMaster1} alt="Croc Master hunting the clever interloper" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Minh">Captain Minh</Link> has been surviving in the swamps of Cobra Island ever since his ship was destroyed. Croc Master finds signs of him throughout the swamp and is genuinely impressed by the resourcefulness and skill it takes to avoid capture for so long. Since the interloper keeps to himself and survives on small game, he does not bother Croc Master much (Issue #72).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Unfortunate Fate on the Landlocked Freighter</h2>
          <img src={crocMaster2} alt="Croc Master's fate on the landlocked freighter" className="profile-block-img" />
          <p>
            One night, <Link to="/character-bios/Billy">Billy</Link>, <Link to="/character-bios/Tyrone">Tyrone</Link>, and <Link to="/character-bios/Minh">Captain Minh</Link> are fleeing a patrol of Night Vipers on the beach of Cobra Island. <Link to="/character-bios/Minh">Captain Minh</Link> leads the group into the water-filled tunnels beneath the island, where they are captured by Croc Master (Issue #97). The next morning, Croc Master delivers the captives to 'Cobra Commander' (<Link to="/character-bios/Fred7">Fred VII</Link>) aboard the landlocked freighter — and makes the fatal mistake of not returning to the swamp afterward.
          </p>
          <p>
            Croc Master finds himself witnessing the argument between the three captives, 'Cobra Commander' (<Link to="/character-bios/Fred7">Fred VII</Link>), Voltar, <Link to="/character-bios/Raptor">Raptor</Link>, and <Link to="/character-bios/Firefly">Firefly</Link>. The lights suddenly go out, and the hatch opens to reveal the original <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and his loyal Crimson Guard standing above, alongside Dr. Mindbender, <Link to="/character-bios/Raptor">Raptor</Link>, and the Viper excavation team.
          </p>
          <p>
            <Link to="/character-bios/CobraCommander">Cobra Commander</Link> blames <Link to="/character-bios/Billy">Billy</Link> for walking out on him, driving him to his irrational choice to go straight, and disowns him as his son. He and the Crimson Guard throw Dr. Mindbender, <Link to="/character-bios/Raptor">Raptor</Link>, and the excavation team into the freighter, then board a transport helicopter. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> detonates a series of preplanned explosions, diverting a water channel to sink the freighter into an extinct volcano — further explosions bury it deep within, trapping everyone above it (Issue #98). Croc Master and most of the others trapped inside the freighter succumb to botulism from tainted rations aboard the vessel. His vicious crocodiles are left to patrol the swamps without their beloved master.
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), a single version of Croc Master was produced: the <a href="https://www.yojoe.com/action/87/crocmaster.shtml" target="_blank" rel="noopener noreferrer">1987 figure</a>. Hasbro occasionally created "over-the-top" action figures that presented Mr. Hama with real challenges — and no small amount of frustration — when it came to writing them believably into the comic. I suspect Croc Master was one of these figures, which explains the fate that ultimately befell him in the landlocked freighter.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default CrocMaster;
