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
          A Crimson Guardsman from the Fred series, Fred VII is a mechanical genius who designs and builds <Link to="/character-bios/CobraCommander">Cobra Commander</Link>'s Battle Armor, the Cobra Pogo, and <Link to="/character-bios/Billy">Billy</Link>'s prosthetic leg. When <Link to="/character-bios/CobraCommander">Cobra Commander</Link> decides to walk away from Cobra and start an honest life, Fred VII shoots him in the back and buries his body. Fred VII travels to Cobra Island and assumes the role of <Link to="/character-bios/CobraCommander">Cobra Commander</Link> himself. When the real <Link to="/character-bios/CobraCommander">Cobra Commander</Link> eventually returns, Fred VII and the other traitors are sent to their deaths aboard the landlocked freighter, buried inside an inactive volcano by a series of explosions.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Denver Garage</h2>
          <img src={fred7_1} alt="Fred VII's Denver garage" className="profile-block-img" />
          <p>
            Fred VII is stationed at a Denver garage when <Link to="/character-bios/CobraCommander">Cobra Commander</Link>, in disguise, arrives with an ambulance carrying his comatose son, <Link to="/character-bios/Billy">Billy</Link>. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> gives the secret Cobra handshake and password, activating Fred VII's status. Hidden within the garage is a secret laboratory, where Fred VII shows <Link to="/character-bios/CobraCommander">Cobra Commander</Link> the battle armor and Cobra Pogo he built. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> tries on the armor and is impressed.
          </p>
          <p>
            Fred VII and <Link to="/character-bios/CobraCommander">Cobra Commander</Link> hear <Link to="/character-bios/Billy">Billy</Link> stirring from his coma. He suffers from amnesia and is unable to recognize anyone — including himself. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> embraces his son and tells him he's his father, and that he'll make him better again (Issue #58).
          </p>
          <p>
            Fred VII builds <Link to="/character-bios/Billy">Billy</Link>'s prosthetic leg. Around this time, Fred VII's associate, <Link to="/character-bios/Raptor">Raptor</Link>, arrives and meets <Link to="/character-bios/CobraCommander">Cobra Commander</Link> for the first time — <Link to="/character-bios/CobraCommander">Cobra Commander</Link> unimpressed, calling him as a lunatic dressed up as a bird (Issue #59).
          </p>
          <p>
            Time passes, and <Link to="/character-bios/Billy">Billy</Link> gradually regains his memories. Once they fully return, he remembers his time with the anti-Cobra underground in Springfield and finds he hates everything his father stands for. <Link to="/character-bios/Billy">Billy</Link> decides to leave, promising before he goes never to reveal his father's identity or whereabouts.
          </p>
          <p>
            After <Link to="/character-bios/Billy">Billy</Link> leaves, <Link to="/character-bios/CobraCommander">Cobra Commander</Link> decides to abandon Cobra, start an honest life, and win back his son's respect. Fred VII is furious — he had undergone plastic surgery and given up so much for the organization. As <Link to="/character-bios/CobraCommander">Cobra Commander</Link> walks out of the lab, Fred VII shoots him in the back, then picks up the battle armor helmet and remarks that anyone could be inside it (Issue #61). Fred VII and <Link to="/character-bios/Raptor">Raptor</Link> bury <Link to="/character-bios/CobraCommander">Cobra Commander</Link>'s body outside Denver (Issue #62).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">As Cobra Commander</h2>
          <img src={fred7_2} alt="Fred VII posing as Cobra Commander" className="profile-block-img" />
          <p>
            Fred VII hires <Link to="/character-bios/Minh">Captain Minh</Link> to transport him, the battle armor, and the Cobra Pogo to Cobra Island (Issue #63). In the waters outside the island, <Link to="/character-bios/Minh">Captain Minh</Link>'s ship is attacked by Cobra Mambas. Fred VII escapes aboard the Pogo as the ship explodes behind him. The Pogo lands on the island, and Fred VII declares himself <Link to="/character-bios/CobraCommander">Cobra Commander</Link>.
          </p>
          <p>
            The <Link to="/character-bios/Baroness">Baroness</Link>, who knows what the real <Link to="/character-bios/CobraCommander">Cobra Commander</Link>'s face looks like, meets privately with Fred VII to confirm his identity — and discovers the deception. Rather than exposing him, she decides to use the situation to her advantage, telling the Cobra organization that Fred VII is indeed the genuine <Link to="/character-bios/CobraCommander">Cobra Commander</Link> (Issue #64).
          </p>
          <p>
            Over the following years, Fred VII continues the impersonation. The Cobra Civil War breaks out, ending in Serpentor's death and leaving Fred VII in control of the entire organization. More members of Cobra's inner circle eventually uncover his secret and use it to their own advantage. Fred VII proves to be an incompetent leader.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Return of the Real Cobra Commander</h2>
          <img src={fred7_3} alt="The return of the real Cobra Commander" className="profile-block-img" />
          <p>
            <Link to="/character-bios/CobraCommander">Cobra Commander</Link> doesn't die from Fred VII's shot — he falls into a catatonic state, appearing dead, and is buried alive. His underling, Fred VIII, keeps tabs on Fred VII and uncovers the Commander's body. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> is taken to a Fred series doctor, who removes the bullet and allows for a full recovery. Over the following years, with the help of his loyal Crimson Guard, <Link to="/character-bios/CobraCommander">Cobra Commander</Link> quietly rebuilds his empire.
          </p>
          <p>
            At a cocktail party aboard the landlocked freighter, held for potential weapons buyers, Dr. Mindbender asks to speak with Fred VII in private. Fred VII removes his helmet, and "Dr. Mindbender" reveals himself to actually be <Link to="/character-bios/Zartan">Zartan</Link>, who holds a gun to Fred VII's head and orders him back to his old life as a garage owner in Denver.
          </p>
          <p>
            The next day, Croc Master brings <Link to="/character-bios/Billy">Billy</Link>, <Link to="/character-bios/Tyrone">Tyrone</Link>, and <Link to="/character-bios/Minh">Captain Minh</Link> aboard the freighter. An argument breaks out among Fred VII, <Link to="/character-bios/Zartan">Zartan</Link>, <Link to="/character-bios/Firefly">Firefly</Link>, Voltar, Croc Master, <Link to="/character-bios/Billy">Billy</Link>, <Link to="/character-bios/Tyrone">Tyrone</Link>, and <Link to="/character-bios/Minh">Captain Minh</Link> — <Link to="/character-bios/Billy">Billy</Link> accusing Fred VII of being an imposter, Voltar accusing <Link to="/character-bios/Billy">Billy</Link> of the same. The lights suddenly go out, and the top hatch of the freighter opens to reveal the real <Link to="/character-bios/CobraCommander">Cobra Commander</Link>.
          </p>
          <p>
            <Link to="/character-bios/CobraCommander">Cobra Commander</Link> arrives with his Crimson Guard, holding Dr. Mindbender, <Link to="/character-bios/Raptor">Raptor</Link>, and a Viper excavation team as prisoners. He blames <Link to="/character-bios/Billy">Billy</Link> for walking out on him, driving him to his irrational choice to go straight, and disowns him as his son. He and the Crimson Guard throw Dr. Mindbender, <Link to="/character-bios/Raptor">Raptor</Link>, and the excavation team into the freighter, then board a transport helicopter. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> detonates a series of preplanned explosions, diverting a water channel to sink the freighter into an extinct volcano — further explosions bury it deep within, trapping everyone above it (Issue #98). In time, Fred VII and most of the others aboard the freighter die of botulism from tainted rations (Issue #116). Only <Link to="/character-bios/Zartan">Zartan</Link>, <Link to="/character-bios/Billy">Billy</Link>, and <Link to="/character-bios/Firefly">Firefly</Link> manage to escape.
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
