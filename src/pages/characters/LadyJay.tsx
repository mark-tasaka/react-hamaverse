import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import ladyJay1 from './img/ladyJay/ladyJay_1.png';
import ladyJay2 from './img/ladyJay/ladyJay_2.png';

const LadyJay: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Lady Jay (Alison Hart-Burnett)</h1>

        <p className="profile-intro">
          Alison R. Hart-Burnett (Lady Jay) is a highly educated covert operations specialist and accomplished actress and mime. Her file card describes her as speaking with a slight Gaelic accent. Alison is CWO Faireborn's love interest, who at first finds him arrogant and full of himself. A heroic, reckless display of courage changes her opinion of him, and the two become lovers.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">First Impression: Clashing with Scarlett</h2>
          <img src={ladyJay1} alt="Lady Jay's first clash with Scarlett" className="profile-block-img" />
          <p>
            Lady Jay's first encounter with <Link to="/character-bios/Scarlett">Scarlett</Link> is far from a warm one — the two don't hit it off. <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/Grunt">Grunt</Link> are working on machinery when Lady Jay and Ripcord walk into the Pit. <Link to="/character-bios/Grunt">Grunt</Link> assumes the two are unauthorized personnel who have wandered into by mistake. <Link to="/character-bios/Scarlett">Scarlett</Link> warns them they have entered a restricted installation and asks for ID. Lady Jay refuses to show it, meeting <Link to="/character-bios/Scarlett">Scarlett</Link>'s question with attitude.
          </p>
          <p>
            Ripcord, playing the diplomat, tells <Link to="/character-bios/Scarlett">Scarlett</Link> that Lady Jay didn't mean anything by it. Lady Jay, unmoved, refers to <Link to="/character-bios/Scarlett">Scarlett</Link> as a "tawdry redhead" and says plainly that she doesn't care for her attitude.
          </p>
          <p>
            Ripcord diplomatically opens the envelope containing their orders and hands them to <Link to="/character-bios/Grunt">Grunt</Link>, explaining that the papers confirm their permanent assignment to the G.I. Joe team. Lady Jay adds, with a sharp look at <Link to="/character-bios/Scarlett">Scarlett</Link>, "We are here as your replacements" (Issue #32).
          </p>
          <p>
            The friction between the two women eases over time. Lady Jay and <Link to="/character-bios/Scarlett">Scarlett</Link> eventually become close friends, later taking a shared vacation to Grenada together with their respective partners (Issue #61).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">First Sparks with Flint</h2>
          <img src={ladyJay2} alt="Lady Jay and Flint's first attraction" className="profile-block-img" />
          <p>
            Chief Warrant Officer Dashiell Faireborn (Flint) shows interest in Lady Jay when he joins the team. She finds him arrogant and pompous at first. One day, the two are talking among the trees outside Fort Wadsworth. Flint tells her he's a man of many assets — good-looking, dashing, and intelligent. Lady Jay pushes back on his lack of modesty, remarking that at least his insurance policy is paid up. Flint tells her he carries the standard policy from Uncle Sugar, and asks if she'd be interested in becoming his beneficiary.
          </p>
          <p>
            Lady Jay spots Cobra Eels emerging from the water of the Narrows and pulls Flint down to the ground with her. Flint assumes she's suddenly taken an interest in him. She tells him to put a lid on it, and points to the approaching Eels.
          </p>
          <p>
            Flint tells Lady Jay to warn the others while he distracts the Eels, then launches himself at them unarmed. Lady Jay runs to alert the Joes of the incoming attack. Later, Flint meets up with her and the rest of the team at the armory — badly beaten and bruised, but alive. Impressed by his courage and reckless disregard for his own safety, Lady Jay begins to take a liking to Flint (Issue #53).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), only a single version of Lady Jay was produced: the <a href="https://www.yojoe.com/action/85/ladyjaye.shtml" target="_blank" rel="noopener noreferrer">1985 figure</a>.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default LadyJay;
