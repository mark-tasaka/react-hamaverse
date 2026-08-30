import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import baroness1 from './img/baroness/baroness_1.png';
import baroness2 from './img/baroness/baroness_2.png';
import baroness3 from './img/baroness/baroness_3.png';
import baroness4 from './img/baroness/baroness_4.png';
import baroness5 from './img/baroness/baroness_5.png';
import baroness6 from './img/baroness/baroness_6.png';
import baroness7 from './img/baroness/baroness_7.png';
import baroness8 from './img/baroness/baroness_8.png';

const Baroness: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Baroness (Anastasia DeCobray*)</h1>

        <p className="profile-intro">
          The Baroness (Anastasia) is Cobra's cunning and deadly intelligence officer. Her rise to international terrorist is a tragic tale, spawned by the death of her beloved brother — a kindhearted humanitarian — and a false belief about who killed him in Saigon during the Tet Offensive. Had she known who killed her brother's at the time, she might never have become a terrorist at all — perhaps she would have been a humanitarian like her brother instead. The Baroness loves Destro, and he loves her; their undying devotion to one another remains constant throughout the series.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Tet Offensive, Saigon: January 30, 1968</h2>
          <img src={baroness1} alt="The Baroness during the Tet Offensive in Saigon" className="profile-block-img" />
          <p>
            Anastasia (the future Baroness) is fifteen years old when she accompanies her brother, Baron Eugen DeCobray, to Saigon to check on a warehouse of medical supplies he had raised funds for. As the Baroness describes him years later, Eugen was the kindest human being she had ever known — all he ever wanted was to help people.
          </p>
          <p>
            When Eugen and Anastasia arrive in Saigon, the Tet Offensive begins, plunging the city into chaos. The two find the warehouse empty of medical supplies. Just then, two Vietnamese men enter, one carrying an AK-47 over his back, both visibly surprised to see Eugen. Eugen asks his sister to wait in the office while he speaks with the men. From inside, Anastasia hears gunfire coming from the room where her brother and the men had been talking. When she emerges, she finds her brother and the two Vietnamese men lying dead.  An American soldier (<Link to="/character-bios/SnakeEyes">Snake Eyes</Link>) stands over their bodies. Anastasia believes the American killed her brother.
          </p>
          <p>
            What Anastasia doesn't know is that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> had tracked the two men to the warehouse after they opened fire on him and his companions earlier that day, killing one soldier, Cory Barnett, and wounding two others, <Link to="/character-bios/Stalker">Lonzo Wilkinson</Link> and <Link to="/character-bios/StormShadow">Thomas Arashikage</Link>. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> was waiting on the outside window ledge when the two men met with Eugen. Eugen demanded to know where the medical supplies had gone; one of the men told him they'd been sold on the black market to buy weapons, then raised his AK-47 and opened fire on Eugen at point-blank range. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> burst through the window with his Colt .45 and killed both men (<Link to="/comic-issues/Issue95">Issue #95</Link>).
          </p>
        </section>

        
                <section className="profile-block">
          <h2 className="profile-block-title">Crossing Paths with James McCullen Destro XXIV in Saigon</h2>
          <img src={baroness3} alt="Anastasia crossing paths with the future Destro in Saigon" className="profile-block-img" />
          <p>
            Anastasia briefly crosses paths with her future lover, James McCullen Destro XXIV, in Saigon in the aftermath of her brother's murder. A pair of MPs escort a tearful Anastasia away from the crime scene, just as a youth passes by with his father, Destro XXIII. It is unlikely Anastasia ever knew who the father and son were as they passed her (Issue #96). It will not be until years later, when Anastasia is a university student in Edinburgh, Scotland, that she formally meets her future lover.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Meeting James 'Cully' at Edinburgh</h2>
          <img src={baroness4} alt="Anastasia and Cully at university in Edinburgh" className="profile-block-img" />
          <p>
            As a university student in Edinburgh, Scotland, Anastasia is actively involved in the left-wing activist movement — a sharp contrast to her aristocratic upbringing. She is introduced to the future Destro, a fellow university student, at a fencing class. The instructor identifies Destro as the son of a laird and Anastasia as the daughter of a baron, remarking that the two have something in common. After the match, Destro tells her his given name is James, though everyone knows him as Cully. It is here that Cully gives Anastasia the name "the Baroness." The two fall in love.
          </p>
          <p>
            One day, Cully informs the Baroness that his father's health is failing, and that he must return to the family castle to take over his father's role. He asks her to marry him and come with him. The Baroness tells him she has found real fulfillment in the student movement, and cannot see herself as some upper-class wife overseeing charities and hosting garden parties.
          </p>
          <p>
            The Baroness and Cully share one final fencing match before he departs, choosing to fence without their masks. Cully teases her that this will be his last chance to earn a coveted dueling scar. While sparring, the Baroness tells him that if he truly loves her, he would let his family's business take care of itself. Cully replies that if she truly loves him, she would leave behind her silly activism and come away with him. "What an utterly male chauvinist thing to say," the Baroness snaps, striking his face with her fencing saber. Cully's face begins to bleed, and the Baroness is horrified. "I didn't mean that!" she cries.
          </p>
          <p>
            Cully rises and walks away, telling her that her anger was righteous, and that he cannot blame her for it. He thanks her for giving him something to remember her by — the scar — and tells her he is sorry he could not love her enough to pull her away from her passions (Issue #252).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Calling Him Destro</h2>
          <img src={baroness6} alt="The Baroness reuniting with Destro at Cobra headquarters" className="profile-block-img" />
          <p>
            The next time the Baroness meets her former lover, Cully, is years later, at Cobra headquarters. By now, the Baroness has traded her left-wing political activism for international terrorism, having risen into Cobra Commander's inner circle.
          </p>
          <p>
            She finds Cully wearing the silver beryllium-steel mask passed down through the McCullen family for generations — the same mask his late father once wore. Seeing her former lover behind it, she asks why she must call him by his new name, even in private. She is torn between her loyalty to her new master, <Link to="/character-bios/CobraCommander">Cobra Commander</Link>, and her feelings for the man she once loved.
          </p>
          <p>
            Cully asks the Baroness to say his name. She turns to him and asks if it truly matters that much to him. "Yes," he says. The Baroness answers, "Destro" — calling him that for the very first time (Issue #14).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Bern Institute of Reconstructive Surgery</h2>
          <img src={baroness2} alt="The Baroness at the Bern Institute of Reconstructive Surgery" className="profile-block-img" />
          <p>
            <Link to="/character-bios/CobraCommander">Cobra Commander</Link> hires the mercenary Major Bludd to kill Destro. During a night battle in Washington, D.C., the Baroness drives a H.I.S.S. tank with Major Bludd manning the turret gun, while Destro operates a second H.I.S.S. tank nearby. Spotting Major Bludd's gun trained on Destro through her monitor, the Baroness crashes her own tank into a truck to save her lover's life, toppling it. Trapped inside as fuel spills around her, she watches Major Bludd choose to flee rather than save her. The H.I.S.S. tank explodes (Issue #16).
          </p>
          <p>
            The Baroness survives, though she falls into a coma with severe burns. She's transported first to a hospital, then to the G.I. Joe modular pre-fab fortress housed in the elevator of the Pit's Heavy Equipment bay. Major Bludd is later captured and brought to the same fortress. During an attack on the Pit, while the pre-fab fortress is at ground level, Major Bludd escapes — taking the unconscious Baroness with him as a means of currying favor with Destro (Issue #19).
          </p>
          <p>
            Major Bludd brings the Baroness to the Bern Institute of Reconstructive Surgery in the Swiss Alps, where they meet <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link>, who will perform the surgery. Major Bludd gives the name "Baroness DeCobray," and <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link> replies that he isn't familiar with the title — implying it's a name the Major has simply invented. <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link> tells him discretion will cost extra, a telling glimpse of his loose morals. The surgery is a success, restoring the Baroness' appearance. After her recovery, the Baroness wears her trademark black leather uniform afterward (Issue #23).
          </p>
        </section>


        <section className="profile-block">
          <h2 className="profile-block-title">The Fax, the Face</h2>
          <img src={baroness5} alt="The Baroness recognizing Snake Eyes' face" className="profile-block-img" />
          <p>
            One day, at the Cobra Consulate, the Baroness receives a phone call from <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link>, who tells her that his newest patient's bills are being paid through the Chaplain's Assistant School at Fort Wadsworth. He also sends her a fax of the patient's face, taken twenty years earlier. The Baroness immediately recognizes it as the face of the man who killed her brother in Saigon two decades before, and puts together that it belongs to a G.I. Joe member named <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> (<Link to="/comic-issues/Issue93">Issue #93</Link>).
          </p>
          <p>
            During <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' sixth and final procedure at the Bern Institute of Reconstructive Surgery, the Baroness and a mixed team of Night and Alley Vipers land at the hospital. <Link to="/character-bios/Scarlett">Scarlett</Link>, alerted by <Link to="/character-bios/Hawk">Hawk</Link> to the plot between the Baroness and <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link>, is already on guard. When the Baroness reaches the operating room, she finds <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> gone and <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link> and his staff tied up. She and her Vipers search the building for <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, eventually finding <Link to="/character-bios/Scarlett">Scarlett</Link> wheeling an unconscious <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> down the hall. A firefight breaks out. <Link to="/character-bios/Scarlett">Scarlett</Link> shoots out the lights, and the Baroness orders the Night Vipers to switch to night vision while the Alley Vipers move to the outside ledge.
          </p>
          <p>
            <Link to="/character-bios/Scarlett">Scarlett</Link> wheels <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> into a nearby room as a round grazes her right upper arm and the Alley Vipers crash through the windows. The Baroness enters and kicks the gun from <Link to="/character-bios/Scarlett">Scarlett</Link>'s hand. When one of the Alley Vipers asks if they should finish her off, the Baroness refuses — she wants to do it herself — and shoots <Link to="/character-bios/Scarlett">Scarlett</Link> point-blank in the head (<Link to="/comic-issues/Issue94">Issue #94</Link>). <Link to="/character-bios/Scarlett">Scarlett</Link> does not die from the shot; the bullet strikes the dome of her skull at an oblique angle, deflecting off and leaving her in a coma instead. The Baroness takes the unconscious <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> to the Cobra Consulate in New York, where she intends to extract her revenge (<Link to="/comic-issues/Issue95">Issue #95</Link>).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Learning the Truth</h2>
          <img src={baroness7} alt="The Baroness learning the truth about Snake Eyes" className="profile-block-img" />
          <p>
            The Baroness takes the now conscious <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> to the Consulate's subbasement, where he is met by the Paine Brothers, a trio of torturers, and chained to the wall. The Baroness tells <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> she has killed his beloved <Link to="/character-bios/Scarlett">Scarlett</Link> and will have him tortured to death for the murder of her brother. Just then, a Tele-Viper informs her that Destro will be arriving by helicopter on the Consulate's roof, and she departs to meet him.
          </p>
          <p>
            While meeting with Destro, a Tele-Viper discreetly shows her footage of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> breaking free of his chains and killing the Paine Brothers, taking their weapons and clothing. The Baroness whispers to the Tele-Viper to quietly send a team down to recapture him.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> kills the team of Night Vipers sent after him. The Baroness sees Destro off at the rooftop helicopter landing.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> makes his way up to the second sublevel and fills a duffle bag with explosives. He strategically plants them throughout the lower levels, triggering explosions that render the level below him impassable. Most of the Consulate's occupants flee, save for a mixed platoon of Vipers and the Baroness herself. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> then proceeds upward to confront them. The Baroness changes her mind about his capture orders her Vipers to hunt him down and kill him (<Link to="/comic-issues/Issue95">Issue #95</Link>).
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> kills more Vipers as he makes his way up.  The surviving Vipers fall back to the penthouse with the Baroness, who orders them to barricade the door. Destro calls to tell her he is returning to the Consulate — he can see smoke rising all the way from New Jersey. On the video monitor, one of the cameras shows <Link to="/character-bios/StormShadow">Storm Shadow</Link> outside the barricaded door.  The Baroness orders a Heat-Viper to fire a missile at it.
          </p>
          <p>
            The missile blows the barricade open; <Link to="/character-bios/StormShadow">Storm Shadow</Link> dodges the blast and enters, searching for <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, who reveals himself from beneath a Viper disguise. The sword brothers square off as the penthouse begins to collapse around them.
          </p>
          <p>
            The Vipers are thrown to their deaths as the floor gives way. The Baroness is about to fall as well, when <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> catches her hand. Shocked that he would save her, she draws her pistol with her free hand and points it at him, vowing she will still have her revenge. At that moment, Destro arrives in the crew compartment of a Cobra helicopter.
          </p>
          <p>
            Destro tells the Baroness that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> did not kill her brother. He reveals that he was in Saigon with his father, the previous Destro, investigating the murder, and explains that Eugene DeCobray was wearing a bulletproof vest — it was the AK-47 rounds themselves that killed him.
          </p>
          <p>
            Overcome with guilt, the Baroness strikes <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' hand, breaking his grip on her. <Link to="/character-bios/StormShadow">Storm Shadow</Link> catches her before she can fall to her death, and together, he and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> help her toward Destro's helicopter. As Destro reaches out for <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, the floor beneath him and <Link to="/character-bios/StormShadow">Storm Shadow</Link> gives way. Fortunately, a Tomahawk helicopter is nearby — Lift Ticket executes a barrel-roll maneuver, catching <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> as they fall (<Link to="/comic-issues/Issue96">Issue #96</Link>).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">"I Would Give Up More Than That"</h2>
          <img src={baroness8} alt="The Baroness and Destro at Broca Beach" className="profile-block-img" />
          <p>
            The next day, the Baroness and Destro are in Broca Beach. Dressed in civilian attire, the Baroness is packing her bags. When Destro asks why, she tells him the events of the past few weeks have left her whole life feeling meaningless, and that she needs to go somewhere to put herself back together.
          </p>
          <p>
            Destro asks to come with her. The Baroness points out that, with his mask, he could only ever travel within Cobra or arms-merchant circles — and who would look after his family's business and manage Broca Beach in his absence?
          </p>
          <p>
            Destro removes his mask and tells her that Darklon can run things for a while.
          </p>
          <p>
            Shocked, the Baroness asks, "You would give up wearing the Destro family mask? Turn your back on centuries of tradition... for me?"
          </p>
          <p>
            "I would give up more than that." The two kiss (Issue #97).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            The Baroness is one of Mr. Hama's original creations, making her debut in the very first issue of the series. With every other Cobra character masked, Mr. Hama needed a Cobra figure capable of showing facial expressions — and so the Baroness was born. When she first appears, she wears a blue Cobra uniform; her debut in the now-iconic black leather uniform comes only after her reconstructive surgery in Issue #23, timed to coincide with the release of her action figure. During the Marvel run (1982–1994), only a single version of the Baroness figure was ever released: the <a href="https://www.yojoe.com/action/84/baroness.shtml" target="_blank" rel="noopener noreferrer">1984 original</a>.
          </p>
          <p className="profile-notes-footnote">
            *DeCobray is likely a pseudonym. In Issue #23, Major Bludd gives Dr. Hundtkinder the name "Baroness DeCobray" for the Baroness. The doctor says he's unfamiliar with the title, suggesting Major Bludd invented it on the spot. Dr. Hundtkinder's remark that discretion costs extra further implies he suspects DeCobray isn't her real name.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Baroness;
