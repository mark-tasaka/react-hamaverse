import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import flint1 from './img/flint/flint_1.png';
import flint2 from './img/flint/flint_2.png';
import flint3 from './img/flint/flint_3.png';
import flint4 from './img/flint/flint_4.png';
import flint5 from './img/flint/flint_5.png';

const Flint: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Flint (Dashiell Faireborn)</h1>

        <p className="profile-intro">
          Chief Warrant Officer Dashiell R. Faireborn (Flint) has earned a well-deserved reputation as an insufferable egotist — a man who never misses an opportunity to remind you of his own good looks, sharp instincts, and undeniable charm. Despite this flaw — or perhaps because of it — he's also a highly capable adn respected leader. CWO Faireborn takes a liking to fellow team member Alison Hart-Burnett (<Link to="/character-bios/LadyJay">Lady Jaye</Link>) and pursues her. At first, she finds him insufferably full of himself. An act of reckless courage soon changes her mind, and the two become a couple.
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
            Flint tells <Link to="/character-bios/LadyJay">Lady Jaye</Link> to warn the others while he distracts the Eels. She runs to alert the Joes of the incoming attack, while Flint, in an act of sheer courage and recklessness, charges the Eels with his bare hands. After taking a beating, the Eels believe they have knocked him unconscious and leave one behind to finish him off while the rest advance toward the Pit.
          </p>
          <p>
            As the remaining Eel moves to slit his throat, Flint — only feigning unconsciousness — punches him square in the face, knocking him out cold. He grabs the Eel's assault rifle and knife and races to rejoin the team at <Link to="/character-bios/LadyJay">Lady Jaye</Link>'s position.
          </p>
          <p>
            Battered and bruised, Flint arrives at the armory, where <Link to="/character-bios/LadyJay">Lady Jaye</Link> and a group of Joes are gathered. He briefs the team on the Cobra positions he observed and organizes a counterattack. Witnessing this display of reckless courage, <Link to="/character-bios/LadyJay">Lady Jaye</Link> finds herself developing feelings for him (Issue #53).
          </p>
        </section>
                <section className="profile-block">
          <h2 className="profile-block-title">Grenada Vacation</h2>
          <img src={flint2} alt="Flint's Grenada vacation" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, Quick Kick, and Outback are sent on a covert mission to Borovia (a Communist state) under the guise of trade emissaries. Their cover is blown, and <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Quick Kick are captured, while Outback escapes. For political reasons, the U.S. State Department denies any connection with the captured Joes, and as a result, the Joes are not authorized to launch a rescue mission (Issue #61).
          </p>
          <p>
            Flint, <Link to="/character-bios/LadyJay">Lady Jaye</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> are on vacation in Grenada. At the beach, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> spends his time watching a portable TV, following news of the arrest and trial of the three captured Joes. Flint lectures him that orders are orders and there will be no rescue mission — the three Joes are grown men who knew what they were getting into. <Link to="/character-bios/Scarlett">Scarlett</Link> tells Flint that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Stalker">Stalker</Link> go way back, and that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> needs time to sort this out for himself.
          </p>
          <p>
            Later, the two couples are walking back to their hotel along a dirt road when they encounter an older blind man. He tells them he's on his way to visit his daughter and asks for help reaching the airport before he's late. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> quickly offers his arm. The blind man insists on taking a shortcut through a field of tall grass. <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> guide him through the field, while <Link to="/character-bios/LadyJay">Lady Jaye</Link> and Flint continue on down the road.
          </p>
          <p>
            It suddenly dawns on Flint that he's seen this field somewhere before — then he remembers it from a news report about a military operation. Just then, he spots a broken sign buried in the tall grass and clears away the growth to reveal the words "Danger: Mines." Flint shouts, "Snake Eyes! Scarlett! Stop! That field is mined!" — just as a powerful explosion goes off. <Link to="/character-bios/LadyJay">Lady Jaye</Link> starts to run toward the blast, but Flint tackles her to the ground, telling her they have no way of knowing how many more mines lie in that field.
          </p>
          <p>
            An Explosive Ordnance Disposal (EOD) team is later brought in to clear the field. There's no sign of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, or the blind man — it appears their bodies were vaporized in the blast (Issue #63).
          </p>
          <p>
            Unbeknownst to Flint and <Link to="/character-bios/LadyJay">Lady Jaye</Link>, the blind man is actually the <Link to="/character-bios/BlindMaster">Blind Master</Link>, a friend of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' from his days training with the Arashikage clan in Japan. The whole scene was staged by the <Link to="/character-bios/BlindMaster">Blind Master</Link>, allowing <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> to fake their deaths and slip away on an unauthorized mission to rescue the three captured Joes in Borovia.
          </p>
        </section>

          <section className="profile-block">
          <h2 className="profile-block-title">Piecing It Together</h2>
          <img src={flint3} alt="Flint piecing together the truth with Storm Shadow" className="profile-block-img" />
          <p>
            In the aftermath of the mine detonation, Flint calls Hawk at the Defense Language Institute's sublevel to update him on the situation. <Link to="/character-bios/StormShadow">Storm Shadow</Link>, in the room with Hawk, asks if he could speak with Flint, and Hawk hands over the phone.
          </p>
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link> asks Flint what happened. Flint tells him there were three victims, with no trace of their bodies left after the explosion. When <Link to="/character-bios/StormShadow">Storm Shadow</Link> asks about the third victim, Flint starts to describe an old blind man — only for <Link to="/character-bios/StormShadow">Storm Shadow</Link> to cut him off and finish the description himself, in exact detail. Flint is stunned. <Link to="/character-bios/StormShadow">Storm Shadow</Link> tells him he believed the blind man dead for years, but that faking his own death has always been something of a specialty of his. Flint realizes <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> faked their own deaths, slipping away on an unauthorized rescue mission to Borovia (Issue #63).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">"As Much As I Do"</h2>
          <img src={flint4} alt="Flint and Lady Jaye's confrontation after the Borovia mission" className="profile-block-img" />
          <p>
            The Joes wait outside Camp Greer, the new location of the Pit, as a C-130 lands. The cargo ramp opens, and <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Quick Kick step out to a warm, relieved welcome from the team. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> follow close behind.
          </p>
          <p>
            Flint, <Link to="/character-bios/LadyJay">Lady Jaye</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and <Link to="/character-bios/Scarlett">Scarlett</Link> walk back to the Pit together. After a moment of silence, Flint explodes: "You could have let us in on it! You didn't have to make fools of us by pretending to get blown up by a land mine!" <Link to="/character-bios/LadyJay">Lady Jaye</Link> turns and strikes him, knocking him to the ground.
          </p>
          <p>
            "<Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> did what they did so we wouldn't be implicated," she tells him. "They did it because they cared about us. Don't you understand that they care about you as much as..."
          </p>
          <p>
            Before <Link to="/character-bios/LadyJay">Lady Jaye</Link> can finish, Flint asks, "You do?" Understanding exactly what he means, she pulls him into a hug. <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> keep walking, leaving Flint and <Link to="/character-bios/LadyJay">Lady Jaye</Link> to their privacy (Issue #67).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">"Practice What You Preach"</h2>
          <img src={flint5} alt="Flint's advice to Snake Eyes" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link> of the Bern Institute of Reconstructive Surgery betrays his Hippocratic Oath, revealing to the Baroness that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is his next patient — the Baroness falsely believing <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> murdered her brother twenty years before. While <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is undergoing surgery, the Baroness enters the hospital, shoots <Link to="/character-bios/Scarlett">Scarlett</Link> in the head, and takes the unconscious <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> to the Cobra Consulate (Issue #93). <Link to="/character-bios/Scarlett">Scarlett</Link> survives, but falls into a deep coma.
          </p>
          <p>
            In the aftermath of the Cobra Consulate ordeal, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> waits for the doctor's prognosis on <Link to="/character-bios/Scarlett">Scarlett</Link>. The news isn't good — the doctor can't say whether she'll ever live a normal, productive life again. Looking at <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' bandaged face, the doctor recommends <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link> at the Bern Institute, unaware that this is the very doctor whose betrayal led to <Link to="/character-bios/Scarlett">Scarlett</Link> being shot in the first place.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is about to strike the doctor when Flint and <Link to="/character-bios/LadyJay">Lady Jaye</Link> hold him back. He walks out of the hospital, the two following close behind. Flint lectures him, telling him he isn't going to let him wallow in self-pity. <Link to="/character-bios/LadyJay">Lady Jaye</Link> tries to step in, but Flint cuts her off and keeps going.
          </p>
          <p>
            Flint tells <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> he has to move on with his life — that what <Link to="/character-bios/Scarlett">Scarlett</Link> would want. He needs to be grateful for the time they had together, not dwell on regrets — all those "should have" moments of telling her how much he loved her, back when there was still time.
          </p>
          <p>
            Just before Flint finishes, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> turns him around to face <Link to="/character-bios/LadyJay">Lady Jaye</Link> — then walks. "What did he mean by that?" Flint asks. <Link to="/character-bios/LadyJay">Lady Jaye</Link> replies, "I think he was telling you to practice what you preach" (Issue #97).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), three unique molds and four versions of Flint were produced: the <a href="https://www.yojoe.com/action/85/flint.shtml" target="_blank" rel="noopener noreferrer">1985 version</a>, the <a href="https://www.yojoe.com/action/88/flint2.shtml" target="_blank" rel="noopener noreferrer">1988 Tiger Force repaint</a>, the <a href="https://www.yojoe.com/action/91/flint3.shtml" target="_blank" rel="noopener noreferrer">1991 version</a>, and the <a href="https://www.yojoe.com/action/94/flint4.shtml" target="_blank" rel="noopener noreferrer">1994 version</a>. Flint's original 1985 file card lists his rank as E-6 — an error, since the card's own descriptor identifies him as a Warrant Officer. The 1988 Tiger Force file card corrects this, listing his grade as W-3. Flint's 1991 and 1994 file cards list his rank as WO-2 — a demotion by one pay grade.  Thus, it is unclear whether Flint is a W-2 (Chief Warrent Officer 2) or W-3 (Chief Warrent Officer 3).
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
