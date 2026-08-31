import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import minh1 from './img/minh/minh_1.png';
import minh2 from './img/minh/minh_2.png';
import minh3 from './img/minh/minh_3.png';

const Minh: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Captain Minh</h1>

        <p className="profile-intro">
          Captain Minh is the fishing boat captain <Link to="/character-bios/Fred7">Fred VII</Link> hires to take him to Cobra Island. <Link to="/character-bios/Fred7">Fred VII</Link> abandons Captain Minh as the vessel nears the island, leaving him for dead. Captain Minh survives, swimming to the island and living off small game in the swamps. He later helps a G.I. Joe recon team during the Cobra Civil War, and successfully blackmails <Link to="/character-bios/Fred7">Fred VII</Link> into giving him a new boat. Later still, Captain Minh is hired to ferry another group to Cobra Island — a job that ultimately costs him his life.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Betrayed at Sea</h2>
          <img src={minh1} alt="Captain Minh betrayed at sea" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Fred7">Fred VII</Link> hires Captain Minh to transport him and the Cobra Pogo to Cobra Island (Issue #63). As Captain Minh's ship nears the island, a pair of Mamba attack helicopters opens fire on the vessel. Shocked, Captain Minh tells <Link to="/character-bios/Fred7">Fred VII</Link>, "You said Cobra was your friend." <Link to="/character-bios/Fred7">Fred VII</Link> replies that he lied, then boards the Pogo. The Pogo departs just before Captain Minh's ship explodes (Issue #64).
          </p>
          <p>
            Captain Minh does not die in the explosion. He survives and swims to Cobra Island, where he lives in the swamps, surviving on small prey and staying clear of Croc Master, who patrols the area (Issue #72).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Captain Minh Survives and Obtains a New Boat</h2>
          <img src={minh2} alt="Captain Minh obtaining a new boat" className="profile-block-img" />
          <p>
            A civil war breaks out on Cobra Island between the forces loyal to Serpentor and those loyal to Cobra Commander (<Link to="/character-bios/Fred7">Fred VII</Link>). G.I. Joe enters the conflict, and a recon team led by Lt. Falcon — made up of Spirit, Sneak Peek, Dial Tone, Tunnel Rat, and Gung-Ho — is transported via a stolen Cobra Mamba to the swamp region of the island, where they encounter Captain Minh (Issue #74). Captain Minh assists Lt. Falcon by leading his team through the island's drainage system (Issue #75). The Cobra Civil War ends with the death of Serpentor, killed by <Link to="/character-bios/Zartan">Zartan</Link>.
          </p>
          <p>
            In the aftermath of the Cobra Civil War, Captain Minh sneaks up on <Link to="/character-bios/Fred7">Fred VII</Link>, who is wearing Cobra Commander's Battle Armor, and leaps onto his back, grabbing hold of the helmet. The surrounding Vipers hold their fire — the helmet is rigged with plastic explosives that will detonate if removed without the proper entry codes. Captain Minh whispers in <Link to="/character-bios/Fred7">Fred VII</Link>'s ear that he will expose him as an imposter unless he provides a new boat. He departs Cobra Island with an unarmed Cobra hydrofoil in hand (Issue #77).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Return to Cobra Island</h2>
          <img src={minh3} alt="Captain Minh's return to Cobra Island" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Billy">Billy</Link>, <Link to="/character-bios/Raptor">Raptor</Link>, the 'Blind Master' (<Link to="/character-bios/Zartan">Zartan</Link>), and <Link to="/character-bios/Tyrone">Tyrone</Link> hire Captain Minh to take them to Cobra Island. On the beach, the five watch Cobra Commander interacting with potential weapons buyers outside the landlocked freighter. <Link to="/character-bios/Billy">Billy</Link> studies Cobra Commander's body language and realizes this is not his father. <Link to="/character-bios/Raptor">Raptor</Link> informs him it is actually <Link to="/character-bios/Fred7">Fred VII</Link>.
          </p>
          <p>
            The 'Blind Master' is the first to leave the group, saying he is going to scout ahead, followed shortly after by <Link to="/character-bios/Raptor">Raptor</Link>. When night falls, the remaining trio is attacked by Night Vipers, and Captain Minh's ship is destroyed. Captain Minh leads the group into the drainage system beneath the island, where they are captured by Croc Master and his pets (Issue #97).
          </p>
          <p>
            The next day, Croc Master brings his prisoners aboard the landlocked freighter, where <Link to="/character-bios/Fred7">Fred VII</Link>, <Link to="/character-bios/Zartan">Zartan</Link>, Voltar, and Firefly are waiting. An argument breaks out, with <Link to="/character-bios/Billy">Billy</Link> accusing <Link to="/character-bios/Fred7">Fred VII</Link> of being an imposter and Voltar accusing <Link to="/character-bios/Billy">Billy</Link> of being the fake. The lights suddenly go out, and the hatch opens to reveal the original <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and his loyal Crimson Guard standing above, alongside Dr. Mindbender, <Link to="/character-bios/Raptor">Raptor</Link>, and the Viper excavation team.
          </p>
          <p>
            <Link to="/character-bios/CobraCommander">Cobra Commander</Link> blames <Link to="/character-bios/Billy">Billy</Link> for walking out on him, driving him to his irrational choice to go straight, and disowns him as his son. He and the Crimson Guard throw Dr. Mindbender, <Link to="/character-bios/Raptor">Raptor</Link>, and the excavation team into the freighter, then board a transport helicopter. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> detonates a series of preplanned explosions, diverting a water channel to sink the freighter into an extinct volcano — further explosions bury it deep within, trapping everyone above it (Issue #98). Captain Minh and most of the others trapped inside the freighter succumb to botulism from tainted rations aboard the vessel.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Minh;
