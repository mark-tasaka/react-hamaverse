import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import tyrone1 from './img/tyrone/tyrone_1.png';
import tyrone2 from './img/tyrone/tyrone_2.png';
import tyrone3 from './img/tyrone/tyrone_3.png';
import tyrone4 from './img/tyrone/tyrone_4.png';

const Tyrone: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Tyrone</h1>

        <p className="profile-intro">
          Tyrone starts out as a troubled youth with an alcoholic mother and a father who abandoned them. He meets the <Link to="/character-bios/BlindMaster">Blind Master</Link> after a failed attempt at stealing <Link to="/character-bios/Jinx">Jinx</Link>'s purse. The <Link to="/character-bios/BlindMaster">Blind Master</Link>'s mentorship and friendship put Tyrone's life on a new path. After the <Link to="/character-bios/BlindMaster">Blind Master</Link>'s death, Zartan — disguised as the <Link to="/character-bios/BlindMaster">Blind Master</Link> — resumes the mentorship of Tyrone. Tyrone's life is cut short when he succumbs to botulism on the buried freighter.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Meeting the Blind Master</h2>
          <img src={tyrone1} alt="Tyrone meeting the Blind Master" className="profile-block-img" />
          <p>
            The <Link to="/character-bios/BlindMaster">Blind Master</Link>, Storm Shadow, <Link to="/character-bios/Jinx">Jinx</Link>, and <Link to="/character-bios/Billy">Billy</Link> are standing on a street in San Francisco watching TV through a shop window when Tyrone runs by and snatches <Link to="/character-bios/Jinx">Jinx</Link>'s purse. The <Link to="/character-bios/BlindMaster">Blind Master</Link> throws his cane, tripping Tyrone and causing him to drop the purse. A nearby police officer sees this and moves to take Tyrone into custody, but the <Link to="/character-bios/BlindMaster">Blind Master</Link> tells the officer he's mistaken — the youth had tripped over the cane and grabbed the purse only to catch himself. The officer lets Tyrone go.
          </p>
          <p>
            With the officer gone, the <Link to="/character-bios/BlindMaster">Blind Master</Link> asks Tyrone why he tried to steal the purse. Tyrone explains that his mother is an alcoholic and he doesn't know where his father is — he needed the money. The <Link to="/character-bios/BlindMaster">Blind Master</Link> offers to pay Tyrone a fair wage to guide him across San Francisco (Issue #67). The <Link to="/character-bios/BlindMaster">Blind Master</Link> becomes a friend and mentor to Tyrone, teaching him a better way to live his life.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Stopping the Blind Master from Killing Zartan</h2>
          <img src={tyrone2} alt="Tyrone stopping the Blind Master from killing Zartan" className="profile-block-img" />
          <p>
            Riding his skateboard, Tyrone is asking around if anyone has seen the <Link to="/character-bios/BlindMaster">Blind Master</Link>. Two thugs take his skateboard and challenge him to take it back. Tyrone tells them he isn't going to fight — he could easily beat them with his training — and quotes the <Link to="/character-bios/BlindMaster">Blind Master</Link>'s words of wisdom before walking away, letting the thugs keep his skateboard. One of the thugs says he saw the old blind man near the Presidio. Tyrone sets off on foot.
          </p>
          <p>
            Tyrone finds the <Link to="/character-bios/BlindMaster">Blind Master</Link> in an alley, about to stab a beaten Zartan. Tyrone pleads with him to stop, telling his mentor that nothing is worth killing if it's helpless and in your power. "These are the words you taught me," Tyrone tells him.
          </p>
          <p>
            The <Link to="/character-bios/BlindMaster">Blind Master</Link> replies, "This is different. This human slime killed the only good thing that happened to me in my life." In tears, Tyrone turns to walk away and replies, "Saving me was less than nothing?"
          </p>
          <p>
            A short time later, the <Link to="/character-bios/BlindMaster">Blind Master</Link> catches up to Tyrone and says, "You were right. I was wrong. Will you forgive an old blind man?" Tyrone turns around and replies, "Can you forgive me for thinking you were going through with killing that guy? Doing so would have snuffed out all the goodness inside of you." The <Link to="/character-bios/BlindMaster">Blind Master</Link> replies, "Why don't we start over from square one... a new beginning." The two walk down the street together.
          </p>
          <p>
            What Tyrone didn't see was that after he left, the <Link to="/character-bios/BlindMaster">Blind Master</Link> dropped his knife and began walking toward him — at which point Zartan picked up the blade and stabbed the <Link to="/character-bios/BlindMaster">Blind Master</Link> in the back. Dying, the <Link to="/character-bios/BlindMaster">Blind Master</Link> tells Zartan it took a kid to show him how blind he truly was. With his last breath, he reveals that his own mentor, Professor Onihashi, had forgiven Zartan with his dying breath — that Zartan had been carrying the burden of that guilt for nothing all these years. The <Link to="/character-bios/BlindMaster">Blind Master</Link> dies. Zartan, pleading over the body, asks himself what he can do — then transforms into the <Link to="/character-bios/BlindMaster">Blind Master</Link>, determined to set things right by mentoring Tyrone (Issue #91).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Death in the Landlocked Freighter</h2>
          <img src={tyrone3} alt="Tyrone's death in the landlocked freighter" className="profile-block-img" />
          <p>
            Tyrone drives the <Link to="/character-bios/BlindMaster">Blind Master</Link> (Zartan) to the woods outside Denver, in front of the Rockies, where they find <Link to="/character-bios/Billy">Billy</Link> and Raptor preparing to exhume Cobra Commander's body. Disgusted, the <Link to="/character-bios/BlindMaster">Blind Master</Link> strikes Raptor and tells <Link to="/character-bios/Billy">Billy</Link> not to let this trash desecrate his father's grave, warning him about the endless cycle of vengeance. <Link to="/character-bios/Billy">Billy</Link> convinces the <Link to="/character-bios/BlindMaster">Blind Master</Link> that the true target of their revenge is the current Cobra Commander (Issue #95).
          </p>
          <p>
            The four travel to the Gulf of Mexico, where they hire Captain Minh to take them to Cobra Island. On the beaches of Cobra Island, using binoculars, <Link to="/character-bios/Billy">Billy</Link> observes that the body language of the person wearing the Cobra Commander armor doesn't match his father's. Raptor reveals that the man in the armor is Fred VII, the Crimson Guardsman who built <Link to="/character-bios/Billy">Billy</Link>'s prosthetic leg.
          </p>
          <p>
            Captain Minh comments that the device used to conceal his boat is something Zartan would make. The <Link to="/character-bios/BlindMaster">Blind Master</Link> replies that Zartan is no more, then leaves the group to scout ahead.
          </p>
          <p>
            Sometime after the <Link to="/character-bios/BlindMaster">Blind Master</Link> departs, Raptor departs as well. Night falls, and a patrol of Night Vipers spots them on the beach, destroying their boat. The trio flee to the storm drains, where they're captured by Croc Master, who brings his prisoners to the landlocked freighter (Issue #97).
          </p>
          <p>
            The next day, the three prisoners, Croc Master, the imposter Cobra Commander (Fred VII), Firefly, Voltar, and Zartan are arguing inside the landlocked freighter. <Link to="/character-bios/Billy">Billy</Link> accuses the current Cobra Commander of being Fred VII and suggests he may be responsible for the murder of the real Cobra Commander. Voltar demands proof, suggesting perhaps <Link to="/character-bios/Billy">Billy</Link> is the imposter. Tyrone, confused, wonders where the <Link to="/character-bios/BlindMaster">Blind Master</Link> is, and who is this Zartan character.
          </p>
          <p>
            The lights go out. The top hatch of the freighter opens, and the real Cobra Commander appears with his Crimson Guard, alongside Dr. Mindbender, Raptor, and the Viper excavation team. The real Cobra Commander throws Dr. Mindbender, Raptor, and the excavation team down into the freighter, and the hatch closes.
          </p>
          <p>
            Soon after, a series of explosions diverts a water channel, carrying the freighter into an inactive volcano. Further explosions bury the freighter deep within, trapping everyone inside (Issue #99). With nothing to eat but poor-quality surplus rations (Issue #100), Tyrone succumbs to botulism and dies. It is unclear whether Tyrone ever discovers that Zartan had been the Blind Master in disguise.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Tyrone's Younger Brother, Raymond</h2>
          <img src={tyrone4} alt="Tyrone's younger brother Raymond at the Arashikage dojo" className="profile-block-img" />
          <p>
            Years after Tyrone's passing, his younger brother, Raymond, comes across the newly reopened Arashikage Martial Arts dojo in San Francisco. Excited, he runs inside looking for the <Link to="/character-bios/BlindMaster">Blind Master</Link>, but finds Budo instead. Raymond explains that Tyrone had first brought him to the dojo when he was fourteen, and that he studied under the <Link to="/character-bios/BlindMaster">Blind Master</Link> until Tyrone and the <Link to="/character-bios/BlindMaster">Blind Master</Link>'s sudden disappearance. Removing his shoes, Raymond bows before the Arashikage shrine and resumes his studies at the dojo, continuing the path his older brother once set him on (Issue #203).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Tyrone;
