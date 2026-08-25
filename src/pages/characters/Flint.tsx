import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import flint1 from './img/flint/flint_1.png';

const Flint: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Flint (Dashiell Faireborn)</h1>

        <p className="profile-intro">
          Chief Warrant Officer Dashiell R. Faireborn (Flint) has earned a well-deserved reputation as an insufferable egotist — a man who never misses an opportunity to remind you of his own good looks, sharp instincts, and undeniable charm. Despite this flaw — or perhaps because of it — he's also a highly capable leader, as respected in the field as he is exhausting outside of it. CWO Faireborn takes a liking to fellow team member Alison Hart-Burnett (<Link to="/character-bios/LadyJay">Lady Jaye</Link>) and pursues her relentlessly. At first, she finds him insufferably full of himself. An act of reckless courage soon changes her mind, and the two become a couple.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Full of Himself, Full of Courage</h2>
          <img src={flint1} alt="Flint's reckless courage against the Cobra Eels" className="profile-block-img" />
          <p>
            Flint and <Link to="/character-bios/LadyJay">Lady Jaye</Link> are talking among the trees outside Fort Wadsworth. Flint tries to impress her by listing his many assets — good-looking, dashing, and intelligent. <Link to="/character-bios/LadyJay">Lady Jaye</Link>, unimpressed, pushes back on his lack of modesty, remarking that at least his insurance policy is paid up. Flint tells her he carries the standard policy from Uncle Sugar, and asks if she'd be interested in becoming his beneficiary.
          </p>
          <p>
            <Link to="/character-bios/LadyJay">Lady Jaye</Link> spots Cobra Eels emerging from the water of the Narrows and pulls Flint down to the ground with her. Pleasantly surprised, Flint assumes she's suddenly taken an interest in him. She tells him to put a lid on it and points out the approaching Eels.
          </p>
          <p>
            Flint tells <Link to="/character-bios/LadyJay">Lady Jaye</Link> to warn the others while he distracts the Eels. She runs to alert the Joes of the incoming attack, while Flint, in an act of sheer courage and recklessness, charges the Eels with his bare hands. After taking a beating, the Eels believe they've knocked him unconscious and leave one behind to finish him off while the rest advance toward the Pit.
          </p>
          <p>
            As the remaining Eel moves to slit his throat, Flint — only feigning unconsciousness — punches him square in the face, knocking him out cold. He grabs the Eel's assault rifle and knife and races to rejoin the team at <Link to="/character-bios/LadyJay">Lady Jaye</Link>'s position.
          </p>
          <p>
            Battered and bruised, Flint arrives at the armory, where <Link to="/character-bios/LadyJay">Lady Jaye</Link> and a group of Joes are gathered. He briefs the team on the Cobra positions he observed and organizes a counterattack. Witnessing this display of reckless courage, <Link to="/character-bios/LadyJay">Lady Jaye</Link> finds herself developing feelings for him (Issue #53).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), three unique molds and four versions of Flint were produced: the 1985 version, the 1988 Tiger Force repaint, the 1991 version, and the 1994 version. Flint's original 1985 file card lists his rank as E-6 — an error, since the card's own descriptor identifies him as a Warrant Officer. The 1988 Tiger Force file card corrects this, listing his grade as W-3. Flint's 1991 and 1994 file cards list his rank as WO-2.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Flint;
