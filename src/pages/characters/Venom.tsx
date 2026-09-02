import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import venom1 from './img/venom/venom_1.png';
import venom2 from './img/venom/venom_2.png';
import venom3 from './img/venom/venom_3.png';
import venom4 from './img/venom/venom_4.png';
import venom5 from './img/venom/venom_5.png';
import venom6 from './img/venom/venom_6.png';

const Venom: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Dr. Venom (Claude Matthias Vinim)</h1>

        <p className="profile-intro">
          Expelled from medical school after being implicated in his father's murder, and for his disturbing senior thesis on brainwaves, Claude Vinim travels to America, joins Cobra, and adopts the name Dr. Venom. He goes on to create the infamous Brainwave Scanner in the basement of Springfield's video arcade. Dr. Venom meets his end after shooting <Link to="/character-bios/Kwinn">Kwinn</Link> in the back — but not before uploading his consciousness into his own Brainwave Scanner, ensuring that even in death, his consciousness lives on.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Early Years</h2>
          <img src={venom1} alt="Dr. Venom's early years" className="profile-block-img" />
          <p>
            Claude Matthias Vinim grows up in Bern, Switzerland, under a strict and controlling father. As a child, his father forces him to kill a stray puppy he adopted, sealing it inside a burlap sack and throwing it off a bridge. Claude dreams of becoming a painter, but his father burns all of his drawings and paintings, putting an end to that ambition. He later hopes to become a musician instead, only for his father to sell his guitar.
          </p>
          <p>
            In his final year of high school, Claude wants to apply to an engineering school in America, but his father refuses, forcing him instead to enroll in the medical school attached to the Bern Institute of Reconstructive Surgery, where his father's colleague, <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link>, works. On the very same bridge where he was once forced to drown his puppy, Claude pushes his father to his death.
          </p>
          <p>
            Four years later, Dean Jaeger calls Claude into his office, informing him that he has received a disturbing letter from <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link> — a witness has come forward, implicating Claude in his father's death. Combined with the unsettling nature of Claude's senior thesis on brainwaves, the dean explains that the medical school has no choice but to sever ties with him. Claude walks out before the dean can even finish speaking.
          </p>
          <p>
            Claude burns the dean's home to the ground, then travels to America, where he meets <Link to="/character-bios/CobraCommander">Cobra Commander</Link>. He demonstrates his brainwave technology by implanting a mouse with the brainwave patterns of a rabid wolf and setting it loose on a cat — the mouse bites straight through the cat's neck, killing it. Impressed, <Link to="/character-bios/CobraCommander">Cobra Commander</Link> grants Claude the basement of the Springfield video arcade as his laboratory, along with a research budget and a generous stipend. When <Link to="/character-bios/CobraCommander">Cobra Commander</Link> asks for his name, Claude simply replies, "Venom... Dr. Venom" (Issue #258).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Brainwave Scanner</h2>
          <img src={venom2} alt="Dr. Venom reading Snake Eyes' mind" className="profile-block-img" />
          <p>
            Cobra captures <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and <Link to="/character-bios/Zap">Zap</Link>, knocking them unconscious with sleeping gas and transporting them to Springfield. <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/Zap">Zap</Link> are taken to a Cobra dungeon, while <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is brought to Dr. Venom's laboratory beneath the Video World arcade and hooked up to the Brainwave Scanner.
          </p>
          <p>
            Dr. Venom's goal is to learn the location of G.I. Joe's secret base. The process is time-consuming, as the Brainwave Scanner must first build a personal vocabulary of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' thinking patterns by flashing thousands of images through his mind. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and the <Link to="/character-bios/Baroness">Baroness</Link> observe the early stages of the procedure, with <Link to="/character-bios/CobraCommander">Cobra Commander</Link> warning Dr. Venom that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is extremely dangerous in any condition.
          </p>
          <p>
            On the video monitor, Dr. Venom watches fragments of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' past memories flash by: his teenage job at a gas station, his prom, a Middle Eastern scene aboard a helicopter, a midair accident involving a leaking fuel line, the final days of Saigon, and a newspaper article about a family killed in a flaming car wreck. Finally, the image of an ordinary motor appears on the screen. Dr. Venom dismisses it as unimportant.
          </p>
          <p>
            Images of the G.I. Joe training facilities and of <Link to="/character-bios/Hawk">Hawk</Link> appear next. Dr. Venom's assistant points to the readings, noting that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' heartbeat and respiration have become extremely erratic — he warns that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is nearly dead.
          </p>
          <p>
            An intruder alert suddenly sounds, as <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/Zap">Zap</Link> are battling the Cobra youth upstairs. Dr. Venom and his assistant leave <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> behind and rush up to investigate. Seeing that the Cobra youth already have the situation under control, the two return to the laboratory, where <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' vital signs now show him as dead (<Link to="/character-bios/SnakeEyes">Snake Eyes</Link> has slowed his heartbeat and breathing to appear as being dead). Believing him gone, Dr. Venom and his assistant begin unhooking him from the machine.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> strikes the assistant, knocking him unconscious, then seizes his assault rifle and knocks Dr. Venom out. When Dr. Venom comes to, he learns the Joes have commandeered the very aircraft that brought them to Springfield and made their escape (Issue #10).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Sierra Gordo</h2>
          <img src={venom3} alt="Dr. Venom's uneasy alliance with Snake Eyes and Kwinn" className="profile-block-img" />
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Stalker">Stalker</Link>, Gung-Ho, and <Link to="/character-bios/Breaker">Breaker</Link> are sent to Sierra Gordo, where the Joes are captured in a warehouse by the mercenary <Link to="/character-bios/Kwinn">Kwinn</Link>, working on Cobra's behalf. Dr. Venom is among the Cobra forces present. The Joes are tied up, and <Link to="/character-bios/Stalker">Stalker</Link>, Gung-Ho, and <Link to="/character-bios/Breaker">Breaker</Link> are taken aboard a riverboat. Still bitter over being struck by <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, Dr. Venom pistol-whips him to the point of appearing dead. Cobra troopers leave his bound body behind in the warehouse and set the warehouse ablaze.
          </p>
          <p>
            After the riverboat departs, Dr. Venom reflects on his earlier encounter with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> in the laboratory and realizes he is only feigning death. The boat carries them to a small artificial island with a pier and a single bunker, guarded by vicious Dobermans. A seaplane is already waiting, carrying the <Link to="/character-bios/Baroness">Baroness</Link> and Scarface. Inside the bunker, the <Link to="/character-bios/Baroness">Baroness</Link>, Scarface, <Link to="/character-bios/Kwinn">Kwinn</Link>, and Dr. Venom meet, where Dr. Venom presents the <Link to="/character-bios/Baroness">Baroness</Link> with a virus and serum that took his lab in Sierra Gordo two years to produce.
          </p>
          <p>
            Outside, the three Joes free themselves as <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> swims to the pier. Together, they defeat the Cobra troopers guarding the island. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> orders the others to escape aboard the riverboat while he deals with Dr. Venom inside the bunker. <Link to="/character-bios/Kwinn">Kwinn</Link> opens fire with his .50-cal, and the <Link to="/character-bios/Baroness">Baroness</Link> and Scarface flee to the seaplane with the serum in hand. As <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> attacks Dr. Venom, the <Link to="/character-bios/Baroness">Baroness</Link> fires a missile at the island. <Link to="/character-bios/Kwinn">Kwinn</Link> shoves both <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and Dr. Venom into the bunker, saving their lives as the island sinks beneath the river (Issue #12).
          </p>
          <p>
            Dr. Venom, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and <Link to="/character-bios/Kwinn">Kwinn</Link> find themselves trapped together inside the flooded, underwater bunker (Issue #14). The three eventually escape and make their way to an airfield, where they commandeer a vintage WWII Lancaster bomber amid a firefight. Dr. Venom pilots the aircraft while <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> mans the twin .303 Brownings. Over the ocean, Dr. Venom attempts to kill both <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Kwinn">Kwinn</Link> by opening the bomb bay doors, but fails. In turn, neither <Link to="/character-bios/Kwinn">Kwinn</Link> nor <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> can kill Dr. Venom — he is the only one among them who knows how to fly the plane.
          </p>
          <p>
            The aircraft lands on a beach in Miami, and all three are arrested. A Cobra lawyer soon arrives at the police station and arranges for Dr. Venom's release (Issue #16).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Making Peace with the Weasel</h2>
          <img src={venom4} alt="Kwinn'sconfrontation with Dr. Venom" className="profile-block-img" />
          <p>
            In a battle outside the G.I. Joe modular headquarters, <Link to="/character-bios/Kwinn">Kwinn</Link> confronts Dr. Venom, grabbing him with one hand while holding an unpinned grenade in the other. <Link to="/character-bios/Kwinn">Kwinn</Link> speaks of the Weasel spirit that has long taunted him, saying he cannot hope to fight the weasel in others until he has conquered it within himself. He spares Dr. Venom's life and releases his grip. But as <Link to="/character-bios/Kwinn">Kwinn</Link> turns to walk away, Dr. Venom draws his pistol and shoots him in the back. <Link to="/character-bios/Kwinn">Kwinn</Link> turns around, says he has finally made peace with the weasel, and falls to the ground, dead — the unpinned grenade slipping from his hand. It explodes, killing Dr. Venom (Issue #19).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Potter's Field</h2>
          <img src={venom5} alt="Dr. Venom's burial in Potter's Field" className="profile-block-img" />
          <p>
            Dr. Venom is laid to rest in Potter's Field, buried in a mass grave. There is no ceremony to mark his passing (Issue #22).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Dr. Venom's Consciousness Lives On</h2>
          <img src={venom6} alt="Dr. Venom's consciousness living on" className="profile-block-img" />
          <p>
            Before his death, Dr. Venom had implanted his consciousness into the Brainwave Scanner. Years later, <Link to="/character-bios/Billy">Billy</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, and the <Link to="/character-bios/Baroness">Baroness</Link> are captured by <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and subjected to the scanner themselves, becoming brainwashed agents of Cobra. An undisclosed amount of time passes between the disbandment of G.I. Joe and its reformation — sometime during this interim period, Dr. Venom's consciousness seizes control of <Link to="/character-bios/Billy">Billy</Link>'s brainwashed body (Issue #157).
          </p>
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link> — who had broken free of the mind control several issues earlier — and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> confront <Link to="/character-bios/Billy">Billy</Link>, knock him unconscious, and bring him to Broca Beach, where the Brainwave Scanner is kept. Once hooked up, Dr. Venom's avatar appears on the monitor, challenging them. They confront him, drawing his consciousness into "the attic of his mind" and banishing it to join the ghost of <Link to="/character-bios/Kwinn">Kwinn</Link>. This frees <Link to="/character-bios/Billy">Billy</Link> from Dr. Venom's control and the Brainwave Scanner's effects (Issue #165).
          </p>
          <p>
            The Brainwave Scanner is later moved to Dr. Mindbender's labratory in Springfield. Dawn Moreno and Heather Collins join forces to rescue <Link to="/character-bios/Wade">Wade Collins</Link> and his wife from Dr. Mindbender's laboratory (Issue #239). Dawn hooks the captured Dr. Mindbender up to the Brainwave Scanner, while Heather inserts a USB drive containing a virus into the machine. In the process, Dr. Venom's consciousness is unintentionally downloaded into Dr. Mindbender's body, granting him a physical form once again (Issue #240).
          </p>
          <p>
            After spending some time living inside Dr. Mindbender's body, Dr. Venom decides to transfer his consciousness into a giant robot. The transfer succeeds, and Dr. Venom departs Dr. Mindbender's body, allowing the good doctor to become himself again (Issue #255). The Dr. Venom Robot is later destroyed by Bombstrike, Sightline, Ambush, and Milo (Issue #258).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Venom;
