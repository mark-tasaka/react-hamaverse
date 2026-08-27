import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import leatherneck1 from './img/leatherneck/leatherneck_1.png';

const Leatherneck: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Leatherneck (Wendell Metzger)</h1>
        
        <blockquote className="profile-quote">
          <p>"“He is uncouth, opinionated and overbearing.  And he has no patience at all with the indecisive, the lazy and the dishonest.  Not a man you can like, but one you can trust.”*</p>
        </blockquote>

        <p className="profile-intro">
          Gunnery Sergeant Wendell A. Metzger (Leatherneck) is a loudmouthed, ill-tempered, and thoroughly obnoxious man — not someone many of the Joes are fond of. Plenty of the team can barely stand him. But whether you like him or not is beside the point; what matters is how he fights beside you in the field. Gunny Metzger is tough as nails under fire, and there's no one you would rather have watching your six when the bullets start flying.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">A Chip on His Shoulder</h2>
          <img src={leatherneck1} alt="Leatherneck's confrontation with Outback" className="profile-block-img" />
          <p className = "italics">
            <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, Quick Kick, and Outback are sent on a covert mission to Borovia (a Communist state) under the guise of trade emissaries. Their cover is blown, and Snow Job and Quick Kick are wounded. <Link to="/character-bios/Stalker">Stalker</Link> orders Outback to escape, despite Outback's wish to stay and fight, so he can report back to Hawk on what happened in Borovia (Issue #61). Outback makes it out and returns to America.
          </p>
          <p>
            Outback arrives at Camp Greer, the location of the Pit III, to a mixed reception. Some Joes are simply relieved he made it out alive; others quietly question why he is the only one who did. Leatherneck is the loudest and most aggressive of the doubters — never one to keep an opinion to himself, he corners Outback and gets right in his face, accusing him of abandoning his three teammates to rot in a Borovian gulag just to save his own skin.
          </p>
          <p>
            Later that evening, Roadblock tries to smooth things over, explaining Outback's side of the story — that <Link to="/character-bios/Stalker">Stalker</Link> had personally ordered him to retreat. Leatherneck refuses to hear it, turning his confrontational nature on Roadblock instead, squaring up in his face and refusing to back down. The shouting match grows so loud that Gung-Ho and two other Joes climb up through the trapdoor, remarking that they could hear the two of them arguing three levels down (Issue #62).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Leatherneck;
