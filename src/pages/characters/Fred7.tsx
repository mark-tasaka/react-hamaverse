import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import fred7_1 from './img/fred7/fred7_1.png';
import fred7_2 from './img/fred7/fred7_2.png';
import fred7_3 from './img/fred7/fred7_3.png';

const Fred7: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Fred VII</h1>

        <p className="profile-intro">
          A Crimson Guardsman from the Fred series, Fred VII is a mechanical genius who designs and builds Cobra Commander's Battle Armor, the Cobra Pogo, and <Link to="/character-bios/Billy">Billy</Link>'s prosthetic leg. When Cobra Commander decides to walk away from Cobra and start an honest life, Fred VII shoots him in the back and buries his body. Fred VII travels to Cobra Island and assumes the role of Cobra Commander himself. When the real Cobra Commander eventually returns, Fred VII and the other traitors are sent to their deaths aboard the landlocked freighter, buried inside an inactive volcano by a series of explosions.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Denver Garage</h2>
          <img src={fred7_1} alt="Fred VII's Denver garage" className="profile-block-img" />
          <p>
            Fred VII is stationed at a Denver garage when Cobra Commander, in disguise, arrives with an ambulance carrying his comatose son, <Link to="/character-bios/Billy">Billy</Link>. Cobra Commander gives the secret Cobra handshake and password, activating Fred VII's status. Hidden within the garage is a secret laboratory, where Fred VII shows Cobra Commander the battle armor and Cobra Pogo he built. Cobra Commander tries on the armor and is impressed.
          </p>
          <p>
            Fred VII and Cobra Commander hear <Link to="/character-bios/Billy">Billy</Link> stirring from his coma. He suffers from amnesia and is unable to recognize anyone — including himself. Cobra Commander embraces his son and tells him he's his father, and that he'll make him better again (Issue #58).
          </p>
          <p>
            Fred VII builds <Link to="/character-bios/Billy">Billy</Link>'s prosthetic leg. Around this time, Fred VII's associate, Raptor, arrives and meets Cobra Commander for the first time — Cobra Commander unimpressed, calling him as a lunatic dressed up as a bird (Issue #59).
          </p>
          <p>
            Time passes, and <Link to="/character-bios/Billy">Billy</Link> gradually regains his memories. Once they fully return, he remembers his time with the anti-Cobra underground in Springfield and finds he hates everything his father stands for. <Link to="/character-bios/Billy">Billy</Link> decides to leave, promising before he goes never to reveal his father's identity or whereabouts.
          </p>
          <p>
            After <Link to="/character-bios/Billy">Billy</Link> leaves, Cobra Commander decides to abandon Cobra, start an honest life, and win back his son's respect. Fred VII is furious — he had undergone plastic surgery and given up so much for the organization. As Cobra Commander walks out of the lab, Fred VII shoots him in the back, then picks up the battle armor helmet and remarks that anyone could be inside it (Issue #61). Fred VII and Raptor bury Cobra Commander's body outside Denver (Issue #62).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">As Cobra Commander</h2>
          <img src={fred7_2} alt="Fred VII posing as Cobra Commander" className="profile-block-img" />
          <p>
            Fred VII hires Captain Minh to transport him, the battle armor, and the Cobra Pogo to Cobra Island (Issue #63). In the waters outside the island, Captain Minh's ship is attacked by Cobra Mambas. Fred VII escapes aboard the Pogo as the ship explodes behind him. The Pogo lands on the island, and Fred VII declares himself Cobra Commander.
          </p>
          <p>
            The Baroness, who knows what the real Cobra Commander's face looks like, meets privately with Fred VII to confirm his identity — and discovers the deception. Rather than exposing him, she decides to use the situation to her advantage, telling the Cobra organization that Fred VII is indeed the genuine Cobra Commander (Issue #64).
          </p>
          <p>
            Over the following years, Fred VII continues the impersonation. The Cobra Civil War breaks out, ending in Serpentor's death and leaving Fred VII in control of the entire organization. More members of Cobra's inner circle eventually uncover his secret and use it to their own advantage. Fred VII proves to be an incompetent leader.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Return of the Real Cobra Commander</h2>
          <img src={fred7_3} alt="The return of the real Cobra Commander" className="profile-block-img" />
          <p>
            Cobra Commander doesn't die from Fred VII's shot — he falls into a catatonic state, appearing dead, and is buried alive. His underling, Fred VIII, keeps tabs on Fred VII and uncovers the Commander's body. Cobra Commander is taken to a Fred series doctor, who removes the bullet and allows for a full recovery. Over the following years, with the help of his loyal Crimson Guard, Cobra Commander quietly rebuilds his empire.
          </p>
          <p>
            At a cocktail party aboard the landlocked freighter, held for potential weapons buyers, Dr. Mindbender asks to speak with Fred VII in private. Fred VII removes his helmet, and "Dr. Mindbender" reveals himself to actually be <Link to="/character-bios/Zartan">Zartan</Link>, who holds a gun to Fred VII's head and orders him back to his old life as a garage owner in Denver.
          </p>
          <p>
            The next day, Croc Master brings <Link to="/character-bios/Billy">Billy</Link>, <Link to="/character-bios/Tyrone">Tyrone</Link>, and Captain Minh aboard the freighter. An argument breaks out among Fred VII, <Link to="/character-bios/Zartan">Zartan</Link>, Firefly, Voltar, Croc Master, <Link to="/character-bios/Billy">Billy</Link>, <Link to="/character-bios/Tyrone">Tyrone</Link>, and Captain Minh — <Link to="/character-bios/Billy">Billy</Link> accusing Fred VII of being an imposter, Voltar accusing <Link to="/character-bios/Billy">Billy</Link> of the same. The lights suddenly go out, and the top hatch of the freighter opens to reveal the real Cobra Commander.
          </p>
          <p>
            Cobra Commander arrives with his Crimson Guard, holding Dr. Mindbender, Raptor, and a Viper excavation team as prisoners. He blames <Link to="/character-bios/Billy">Billy</Link> for walking out on him, driving him to his irrational choice to go straight, and disowns him as his son. He and the Crimson Guard throw Dr. Mindbender, Raptor, and the excavation team into the freighter, then board a transport helicopter. Cobra Commander detonates a series of preplanned explosions, diverting a water channel to sink the freighter into an extinct volcano — further explosions bury it deep within, trapping everyone above it (Issue #98). In time, Fred VII and most of the others aboard the freighter die of botulism from tainted rations (Issue #116). Only <Link to="/character-bios/Zartan">Zartan</Link>, <Link to="/character-bios/Billy">Billy</Link>, and Firefly manage to escape.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Fred7;
