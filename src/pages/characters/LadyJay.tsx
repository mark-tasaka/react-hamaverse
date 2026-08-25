import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import ladyJay1 from './img/ladyJay/ladyJay_1.png';
import ladyJay2 from './img/ladyJay/ladyJay_2.png';
import ladyJay3 from './img/ladyJay/ladyJay_3.png';

const LadyJay: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Lady Jaye (Alison Hart-Burnett)</h1>

        <p className="profile-intro">
          Alison R. Hart-Burnett (Lady Jaye) is a highly educated covert operations specialist and accomplished actress and mime. Her file card describes her as speaking with a slight Gaelic accent. Alison is CWO Faireborn's love interest, who at first finds him arrogant and full of himself. A heroic, reckless display of courage changes her opinion of him, and the two become lovers.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">First Impression: Clashing with Scarlett</h2>
          <img src={ladyJay1} alt="Lady Jaye's first clash with Scarlett" className="profile-block-img" />
          <p>
            Lady Jaye's first encounter with <Link to="/character-bios/Scarlett">Scarlett</Link> is far from a warm one — the two don't hit it off. <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/Grunt">Grunt</Link> are working on machinery when Lady Jaye and Ripcord walk into the Pit. <Link to="/character-bios/Grunt">Grunt</Link> assumes the two are unauthorized personnel who have wandered into by mistake. <Link to="/character-bios/Scarlett">Scarlett</Link> warns them they have entered a restricted installation and asks for ID. Lady Jaye refuses to show it, meeting <Link to="/character-bios/Scarlett">Scarlett</Link>'s question with attitude.
          </p>
          <p>
            Ripcord, playing the diplomat, tells <Link to="/character-bios/Scarlett">Scarlett</Link> that Lady Jaye didn't mean anything by it. Lady Jaye, unmoved, refers to <Link to="/character-bios/Scarlett">Scarlett</Link> as a "tawdry redhead" and says plainly that she doesn't care for her attitude.
          </p>
          <p>
            Ripcord diplomatically opens the envelope containing their orders and hands them to <Link to="/character-bios/Grunt">Grunt</Link>, explaining that the papers confirm their permanent assignment to the G.I. Joe team. Lady Jaye adds, with a sharp look at <Link to="/character-bios/Scarlett">Scarlett</Link>, "We are here as your replacements" (Issue #32).
          </p>
          <p>
            The friction between the two women eases over time. Lady Jaye and <Link to="/character-bios/Scarlett">Scarlett</Link> eventually become close friends, later taking a shared vacation to Grenada together with their respective partners (Issue #61).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">First Sparks with Flint</h2>
          <img src={ladyJay2} alt="Lady Jaye and Flint's first attraction" className="profile-block-img" />
          <p>
            Chief Warrant Officer Dashiell Faireborn (Flint) shows interest in Lady Jaye when he joins the team. She finds him arrogant and pompous at first. One day, the two are talking among the trees outside Fort Wadsworth. Flint tells her he's a man of many assets — good-looking, dashing, and intelligent. Lady Jaye pushes back on his lack of modesty, remarking that at least his insurance policy is paid up. Flint tells her he carries the standard policy from Uncle Sugar, and asks if she'd be interested in becoming his beneficiary.
          </p>
          <p>
            Lady Jaye spots Cobra Eels emerging from the water of the Narrows and pulls Flint down to the ground with her. Flint assumes she's suddenly taken an interest in him. She tells him to put a lid on it, and points to the approaching Eels.
          </p>
          <p>
            Flint tells Lady Jaye to warn the others while he distracts the Eels, then launches himself at them unarmed. Lady Jaye runs to alert the Joes of the incoming attack. Later, Flint meets up with her and the rest of the team at the armory — badly beaten and bruised, but alive. Impressed by his courage and reckless disregard for his own safety, Lady Jaye begins to take a liking to Flint (Issue #53).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Grenada Vacation</h2>
          <img src={ladyJay3} alt="Lady Jaye and Flint's Grenada vacation" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, Quick Kick, and Outback are sent on a covert mission to Borovia (a Communist state) under the guise of trade emissaries. Their cover is blown, and <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Quick Kick are captured, while Outback escapes. For political reasons, the U.S. State Department denies any connection with the captured Joes, and as a result, the Joes are not authorized to launch a rescue mission (Issue #61).
          </p>
          <p>
            Lady Jaye, Flint, <Link to="/character-bios/Scarlett">Scarlett</Link>, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> are on vacation in Grenada. At the beach, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> spends his time watching a portable TV, following news of the arrest and trial of the three captured Joes. Flint lectures him that orders are orders and there will be no rescue mission — the three Joes are grown men who knew what they were getting into. <Link to="/character-bios/Scarlett">Scarlett</Link> tells Flint that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Stalker">Stalker</Link> go way back, and that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> needs time to sort this out for himself.
          </p>
          <p>
            Later, the two couples are walking back to their hotel along a dirt road when they encounter an older blind man. He tells them he's on his way to visit his daughter and asks for help reaching the airport before he's late. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> quickly offers his arm.  The blind man insists on taking a shortcut through a field of tall grass. <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> guide him through the field, while Lady Jaye and Flint continue on down the road.
          </p>
          <p>
            It suddenly dawns on Flint that he's seen this field somewhere before — then he remembers it from a news report about a military operation. Just then, he spots a broken sign buried in the tall grass and clears away the growth to reveal the words "Danger: Mines." Flint shouts, "Snake Eyes! Scarlett! Stop! That field is mined!" — just as a powerful explosion goes off. Lady Jaye starts to run toward the blast, but Flint tackles her to the ground, telling her they have no way of knowing how many more mines lie in that field.
          </p>
          <p>
            An Explosive Ordnance Disposal (EOD) team is later brought in to clear the field. There's no sign of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, or the blind man — it appears their bodies were vaporized in the blast (Issue #63).
          </p>
          <p>
            Unbeknownst to Lady Jaye and Flint, the blind man is actually the <Link to="/character-bios/BlindMaster">Blind Master</Link>, a friend of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> from his days training with the Arashikage clan in Japan. The whole scene was staged by the <Link to="/character-bios/BlindMaster">Blind Master</Link>, allowing <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> to fake their deaths and slip away on an unauthorized mission to rescue the three captured Joes in Borovia.
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), only a single version of Lady Jaye was produced: the <a href="https://www.yojoe.com/action/85/ladyjaye.shtml" target="_blank" rel="noopener noreferrer">1985 figure</a>.
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
