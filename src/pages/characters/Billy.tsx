import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import billy1 from './img/billy/Billy_1.png';
import billy2 from './img/billy/Billy_2.png';
import billy3 from './img/billy/Billy_3.png';
import billy4 from './img/billy/Billy_4.png';
import billy5 from './img/billy/Billy_5.png';
import billy6 from './img/billy/Billy_6.png';
import billy7 from './img/billy/Billy_7.png';
import billy8 from './img/billy/Billy_8.png';
import billy9 from './img/billy/Billy_9.png';
import billy10 from './img/billy/Billy_10.png';
import billy11 from './img/billy/Billy_11.png';
import billy12 from './img/billy/Billy_12.png';
import billy13 from './img/billy/Billy_13.png';

const Billy: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Billy</h1>

        <p className="profile-intro">
          Billy is the son of Cobra Commander and Storm Shadow's apprentice. He is first introduced early in the series (Issue #10) as a preteen member of the anti-Cobra resistance, held prisoner in a Cobra dungeon. As the series progresses, it is revealed that Billy is Cobra Commander's son (Issue #33). Storm Shadow, working for Cobra at the time, sees strength in Billy and frees him (Issue #39). Billy becomes Storm Shadow's apprentice and, in time, a full-fledged Arashikage ninja, earning the right to bear the Arashikage tattoo.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Early Years</h2>
          <img src={billy1} alt="Billy's early years" className="profile-block-img" />
          <p>
            When Billy was very young, his father left his wife, telling Billy she had died in a car accident. Billy's father — the man who would become Cobra Commander — traveled the country indoctrinating others like himself, people angry with the system. What began as a pyramid scheme grew into indoctrination meetings, recruiting new followers to the cause. The organization eventually became the terrorist group known as Cobra (Issue #84).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Cobra Dungeon: Encounter with Scarlett and Zap</h2>
          <img src={billy2} alt="Billy's encounter with Scarlett and Zap in a Cobra dungeon" className="profile-block-img" />
          <p>
            Billy's first encounter with the Joes occurs while he's held captive in a Cobra dungeon in the Cobra-controlled town of Springfield. Billy is part of the underground resistance and has been taken prisoner.
          </p>
          <p>
            A drugged <Link to="/character-bios/Scarlett">Scarlett</Link> and Zap are placed in the cell holding Billy. They're experiencing hallucinations as a result of the drugs. Later that day, guards slip cups of water and bread on a tray into the cell. Once the guards are gone, Billy tells <Link to="/character-bios/Scarlett">Scarlett</Link> and Zap that the water is drugged, and demonstrates how to neutralize the drugs by placing the water near the light bulb. With the drugs neutralized, <Link to="/character-bios/Scarlett">Scarlett</Link> and Zap drink the water and pretend to have passed out. Billy then starts screaming about the anti-Cobra underground meeting happening that night. The guards hear this over the monitor and decide to take Billy to Dr. Venom to learn more. Two guards enter the cell; <Link to="/character-bios/Scarlett">Scarlett</Link> and Zap knock them out and take their uniforms.
          </p>
          <p>
            Dressed in Cobra uniforms, <Link to="/character-bios/Scarlett">Scarlett</Link> and Zap escort Billy past the guard in the control room. He tells them to bring Billy to Dr. Venom for interrogation, reminding them to change into civilian clothes before reaching the surface. <Link to="/character-bios/Scarlett">Scarlett</Link> and Zap acquire civilian clothing and steal a car. Inside, Billy tells them how the town became indoctrinated into Cobra — it started as a pyramid scheme selling household products door-to-door and morphed into indoctrination meetings.
          </p>
          <p>
            Billy directs <Link to="/character-bios/Scarlett">Scarlett</Link> and Zap to Video World, where <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is being held in Dr. Venom's basement lab. They enter the arcade, which is filled with youths. Billy points out that several of them are junior Cobra officers. The youths recognize Billy, and they attack the trio (one of the video machines turns out to be a functional laser). <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> breaks free from Dr. Venom's lab and bursts through the door into the arcade. The three Joes and Billy flee, escaping in the stolen car outside.
          </p>
          <p>
            Billy gives the Joes directions to the Springfield Municipal Airport — their way home. They arrive at the airport and find the aircraft that had transported them to Springfield. They sneak up on the ground crew and tie them up. As the Joes are about to board, Zap tells Billy to come with them. Billy says he has to stay — his family is here, hiding underground and working against Cobra. The Joes depart; Billy remains in Springfield (Issue #10).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Cobra Commander Assassination Attempt</h2>
          <img src={billy3} alt="The assassination attempt on Cobra Commander" className="profile-block-img" />
          <p>
            In the ARBCO Bros. Circle office in Springfield, the Baroness and Major Bludd catch Billy going through Cobra files. The Baroness recognizes Billy and describes him to Bludd as having an attitude problem, telling him Billy resents Cobra for what they did to his father (it's unclear at this point whether she knows Billy is Cobra Commander's son) (Issue #30).
          </p>
          <p>
            The Baroness and Major Bludd plan to use Billy to assassinate Cobra Commander at an upcoming rally. They convince Billy to pose as a Cobra youth presenting Cobra Commander with a bouquet of flowers at the event. They give him a pistol to conceal among the flowers, instructing him to shoot the Commander at point-blank range (Issue #31).
          </p>
          <p>
            Destro discovers the Baroness' plan to use a child to assassinate Cobra Commander. In private, the two discuss it — the Baroness says there's no other way, since Major Bludd is committed to the plan, and deterring him could put both her and Destro in jeopardy.
          </p>
          <p>
            At the rally, Billy approaches Cobra Commander with a troupe of Cobra youths, carrying the bouquet. Destro spots Billy from the bleachers and rushes toward him. Storm Shadow, guarding Cobra Commander, wonders why one of the Cobra youths is sweating so heavily. As Billy finishes reciting a poem, he draws the pistol from the bouquet. Just as Storm Shadow is about to cut him down, Destro shoves Storm Shadow aside and knocks the gun from Billy's hand. Destro grabs Billy by the arm and brings him before Cobra Commander, saying he will not abide patricide. Cobra Commander and Billy look at each other. Cobra Commander says, "Billy?" Billy says, "Dad?" (Issue #33).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Fleeing Cobra with Storm Shadow</h2>
          <img src={billy4} alt="Billy fleeing Cobra with Storm Shadow" className="profile-block-img" />
          <p>
            To identify Billy's accomplices, Cobra Commander hooks him up to the Brainwave Scanner. Billy resists, concealing their identities by projecting images of Cobra's formation onto the monitor instead. Cobra Commander, not wanting the others to learn of his past, halts the session. Storm Shadow — still in Cobra Commander's service — is impressed by Billy's fortitude and integrity, and decides to rescue him. He breaks Billy out of his holding cell, and together they escape to Storm Shadow's secret dojo, hidden inside a false water tower above a hotel in New York City (Issue #39).
          </p>
          <p>
            Storm Shadow begins training Billy in the way of the ninja. Time passes; Billy's skill and technique improve. Storm Shadow tells him about the assassination of his uncle, the Hard Master. Billy vows that one day he will confront his father, Cobra Commander, and learn who murdered his uncle. One day, Storm Shadow returns to the dojo to find a note from Billy, thanking him and explaining that he's going home to confront his past — and part of Storm Shadow's — asking for his forgiveness for leaving this way. Setting the letter down, Storm Shadow says, "There is nothing to forgive, Billy" (Issue #42).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">The Car Accident</h2>
          <img src={billy5} alt="The car accident" className="profile-block-img" />
          <p>
            Billy travels to the Cobra-controlled town of Springfield, first hitching a ride with nuns, then with a drunk driver on his way to return a briefcase the <Link to="/character-bios/SoftMaster">Soft Master</Link> had left in his car (the driver had previously given the <Link to="/character-bios/SoftMaster">Soft Master</Link> a ride to Springfield). Also in the car is Candy Apel. As the car approaches a set of train tracks with a train bearing down, the drunk driver crashes into a post, knocking everyone unconscious.
          </p>
          <p>
            On the other side of the tracks, the <Link to="/character-bios/SoftMaster">Soft Master</Link> — driving a stolen police car — speeds past the oncoming train, escaping Firefly, Buzzer, and Scrap-Iron, who are pursuing him in a Cobra Ferret ATV. Spotting the crashed car, the <Link to="/character-bios/SoftMaster">Soft Master</Link> pulls over to tend to the wounded. From the other side of the tracks, Scrap-Iron climbs a telephone pole and aims his missile launcher at the wreck. The <Link to="/character-bios/SoftMaster">Soft Master</Link> sees this, rushes forward, and sacrifices himself in the ensuing explosion. Scrap-Iron fires his second missile into the wrecked vehicle. The driver and Candy are killed. Billy falls into a coma, losing an eye and a leg (Issue #43).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Waking Up from the Coma</h2>
          <img src={billy6} alt="Billy waking up from his coma" className="profile-block-img" />
          <p>
            Billy wakes from his coma in the back of an ambulance parked in a garage in Denver. Cobra Commander and Crimson Guardsman Fred VII are present. Suffering from amnesia, Billy doesn't recognize either man. Cobra Commander embraces him, saying this man (Fred VII) will make him better (Issue #58).
          </p>
          <p>
            In his secret laboratory adjoining the garage, Fred VII fits Billy with a bionic leg. Testing it, Billy spontaneously performs a somersault, landing in a martial arts stance. A few days later, Billy wanders outside the garage and peers through the window of a martial arts dojo, where the <Link to="/character-bios/BlindMaster">Blind Master</Link> is teaching a class. Fragments of memory of Storm Shadow begin returning to him. After class, Billy sneaks in, climbing along the ceiling pipes. The <Link to="/character-bios/BlindMaster">Blind Master</Link>, sitting in meditation, addresses him as "Ninja" and invites him to enter and be at peace.
          </p>
          <p>
            The <Link to="/character-bios/BlindMaster">Blind Master</Link> tells Billy he must pass a test. "Test?" Billy asks, just as Jinx enters. She tells him they know about Fred and the suit of armor he built. Jinx draws her sword and swings it at Billy; he catches it between his hands, using the technique Storm Shadow taught him. Billy then grabs Jinx and reveals the Arashikage tattoo on her right forearm, noting that the man who gave him his own test bore the same mark (Issue #60).
          </p>
          <p>
            Some time passes, and Billy's memories return in full. He confronts his father in the secret laboratory, telling him he despises everything he stands for — but will not betray him. Billy then walks out.
          </p>
          <p>
            He returns to the Denver dojo, which appears empty. He calls out, "Sensei." An unseen voice replies, "He is gone." The speaker reveals herself to be Jinx. Billy tells her he suspects she works for G.I. Joe; Jinx confirms it. When he asks about the <Link to="/character-bios/BlindMaster">Blind Master</Link>, Jinx says he walks his own path. Billy repeats that he will not betray his father. Jinx replies, "As it should be" (Issue #61).
          </p>
          <p>
            Billy and Jinx continue training. While sparring, he demands to know how her tattoo connects her to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and Storm Shadow. The <Link to="/character-bios/BlindMaster">Blind Master</Link> shows Billy a framed photo taken fifteen years earlier: the <Link to="/character-bios/BlindMaster">Blind Master</Link>, Professor Onihashi, Onihashi's assistant (a student of the extinct Koga clan), an eight-year-old Jinx, Storm Shadow, the Hard Master, the <Link to="/character-bios/SoftMaster">Soft Master</Link>, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. The <Link to="/character-bios/BlindMaster">Blind Master</Link> explains that Jinx is Storm Shadow's second cousin on her mother's side — they are all one big family.
          </p>
          <p>
            The <Link to="/character-bios/BlindMaster">Blind Master</Link> says it's time for Jinx to drive him to San Francisco, handing her the car keys, and adds that he himself is headed somewhere warm (he is going to meet <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> in Grenada). Billy and Jinx leave for San Francisco (Issue #62).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Defense Language Institute, San Francisco</h2>
          <img src={billy7} alt="Billy at the Defense Language Institute in San Francisco" className="profile-block-img" />
          <p>
            Jinx takes Billy to a private booth in the Defense Language Institute. A secret elevator beneath the booth carries him below, where he meets Hawk, Chuckles, Law, and Order. Billy shares information with the Joes while protecting his father. Hawk brings him to another room, where he meets Storm Shadow and Ripcord. Billy tells them both that the <Link to="/character-bios/SoftMaster">Soft Master</Link> and Candy Apel died when the car was struck by the missile (Issue #63).
          </p>
          <p>
            Billy resumes training with Storm Shadow beneath the Defense Language Institute. One day, Jinx interrupts, showing satellite images of Stalker, Snow Job, and Quick Kick disembarking a freight train near Gulag 23, outside Pvnsk. She notes that the circus is coming to Pvnsk, and shows Storm Shadow a newspaper clipping featuring a photo of <Link to="/character-bios/Scarlett">Scarlett</Link> in the background — part of the circus troupe. They realize <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and the <Link to="/character-bios/BlindMaster">Blind Master</Link> must be with her as well (Issue #66).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Borovia</h2>
          <img src={billy8} alt="Billy's mission to Borovia" className="profile-block-img" />
          <p>
            Billy travels with Storm Shadow and Jinx to Borovia, where they meet up with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link> at the circus troupe. Storm Shadow tells them where Stalker, Snow Job, and Quick Kick are being held. The six raid Gulag 23, dispatch the guards, liberate the camp, and rescue the three captured Joes.
          </p>
          <p>
            They steal a truck and head for the Borovian border, discovering barbed wire fences and guard towers lining the river that marks the boundary with the neighboring country. The White Clown and Orlovsky arrive hauling the circus cannon behind their car. All nine are fired from the cannon across the river beyond the fence line and swim to safety, escaping Borovia (Issue #66).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Reunited with His Mother</h2>
          <img src={billy9} alt="Billy reunited with his mother" className="profile-block-img" />
          <p>
            Storm Shadow, Jinx, and Billy return to San Francisco, where Billy resumes his training. A few years pass. One day, Jinx enters the dojo held at gunpoint by a woman demanding to know where Billy is. Billy recognizes his mother's voice and stops Storm Shadow from attacking. He tells her he believed she had died in a car accident years earlier; she replies that she never stopped searching for him.
          </p>
          <p>
            Storm Shadow and Jinx invite Billy's mother to stay for dinner. She recounts the past, revealing that her ex-husband had an older brother, Dan — a Vietnam War veteran who extended his tours so that his younger brother (the man who would become Cobra Commander) wouldn't be drafted. When Dan returned home, he began driving erratically at high speeds on the interstate, as if searching for death. One day, he crashed into a family on their way to the airport to meet their son, a returning soldier — everyone in the car was killed. Storm Shadow reveals that the family was <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>'. Billy's mother explains that her ex-husband twisted the tragedy in his mind, blaming the returning soldier for his brother's death.
          </p>
          <p>
            After dinner, she tells Billy she has an apartment in Berkeley and has kept a room ready for him. Billy leaves with his mother (Issue #84).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Cobra Commander's Return</h2>
          <img src={billy10} alt="Billy discovers the truth about Cobra Commander" className="profile-block-img" />
          <p>
            While riding his scooter to the University of California, Berkeley, Billy is nearly struck by a car and crashes. Raptor emerges from the vehicle and tells him he knows where his father is buried — and who killed him (Issue #94). Raptor and Billy travel to the mountains outside Denver, where the body lies.
          </p>
          <p>
            As they prepare to exhume the grave, a car driven by Tyrone arrives, with the <Link to="/character-bios/BlindMaster">Blind Master</Link> (secretly Zartan in disguise) also emerging. The <Link to="/character-bios/BlindMaster">Blind Master</Link> strikes Raptor for desecrating the grave, warning against the cycle of vengeance. Billy counters that the target of their revenge is the current Cobra Commander (Issue #94). Rather than exhuming the body, the four travel to the Gulf of Mexico and hire Captain Minh to take them to Cobra Island.
          </p>
          <p>
            On the island's beach, Billy watches Cobra Commander through binoculars and notices his body language doesn't match his father's. Raptor reveals that the man posing as Cobra Commander is actually Fred VII, who killed the real Cobra Commander and took his place. The <Link to="/character-bios/BlindMaster">Blind Master</Link> (Zartan) is the first to leave the group, asking the others to stay put while he scouts ahead. Later, Raptor departs on a mission of his own.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">The Freighter</h2>
          <img src={billy11} alt="Confrontation aboard the freighter" className="profile-block-img" />
          <p>
            Inside a landlocked freighter, "Cobra Commander" (Fred VII) is hosting cocktails for potential weapons buyers. Zartan — who had been posing as the <Link to="/character-bios/BlindMaster">Blind Master</Link> — transforms into Dr. Mindbender and arranges a private meeting with Fred VII. There, Zartan reveals himself, holds a gun to Fred VII's head, and orders him back to his old life as a garage owner in Denver. The real Dr. Mindbender witnesses this exchange from behind an ajar door.
          </p>
          <p>
            Shortly after, Raptor confronts Dr. Mindbender privately, describing his difficulty controlling the imposter Cobra Commander, and reveals he knows where the real Cobra Commander is buried — remains Dr. Mindbender could use to clone a more controllable "competitor." Raptor, Dr. Mindbender, and a team of Vipers depart to exhume the body.
          </p>
          <p>
            That night, Billy, Tyrone, and Captain Minh come under attack by Night Vipers on the beach. They flee into a drain tunnel beneath the island, where Croc Master captures them (Issue #97).
          </p>
          <p>
            Croc Master brings the trio to the landlocked freighter. The next day, inside, Fred VII, Voltar, Zartan, and Firefly are arguing when the lights go out and the hatch opens, revealing the original Cobra Commander and his loyal Crimson Guard standing above, alongside Dr. Mindbender, Raptor, and the Viper excavation team.
          </p>
          <p>
            Cobra Commander blames Billy for walking out on him, driving him to his irrational choice to go straight, and disowns him as his son. He and the Crimson Guard throw Dr. Mindbender, Raptor, and the excavation team into the freighter, then board a transport helicopter. Cobra Commander detonates a series of preplanned explosions, diverting a water channel to sink the freighter into an extinct volcano — further explosions bury it deep within, trapping everyone above it (Issue #98).
          </p>
          <p>
            In time, Billy and Zartan escape; the others die of botulism from tainted rations aboard the freighter (Issue #116). Later issues reveal that Firefly also escaped.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Brainwave Scanner and Dr. Venom's Ghost</h2>
          <img src={billy12} alt="Billy possessed by Dr. Venom's consciousness" className="profile-block-img" />
          <p>
            Billy, Storm Shadow, and the Baroness are captured by Cobra Commander and subjected to the Brainwave Scanner, becoming agents of Cobra. An undisclosed amount of time passes between the disbandment of G.I. Joe and its reformation. Before his death, Dr. Venom had implanted his consciousness within the Brainwave Scanner; during this interim period, he takes over Billy's brainwashed body (Issue #157).
          </p>
          <p>
            Storm Shadow — who had broken free of the mind control several issues earlier — and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> confront Billy, knock him unconscious, and bring him to Broca Beach, where the Brainwave Scanner is kept. Once hooked up, Dr. Venom's avatar appears on the monitor, challenging them. They confront him, drawing his consciousness into "the attic of his mind" and banishing it to join the ghost of Kwinn. This frees Billy from Dr. Venom's control and the Brainwave Scanner's effects (Issue #165).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Billy's Death</h2>
          <img src={billy13} alt="Billy's death" className="profile-block-img" />
          <p>
            In Brooklyn, Billy, Storm Shadow, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> come across a dojo bearing the Arashikage symbol (Issue #169). The sensei there reveals that the Hard Master and <Link to="/character-bios/SoftMaster">Soft Master</Link>'s eldest brother, the Middle Master — believed to have died in World War II — had actually survived and been taken to a Siberian gulag. There, he taught the way of the Arashikage to fellow prisoners until his death twenty years later; when the gulag closed, his students formed the Russian Arashikage Clan (Issue #170). They also learn of a rogue faction within that clan, the Blue Ninjas — cyborgically enhanced warriors.
          </p>
          <p>
            Some time later, at the Brooklyn dojo, Billy, Storm Shadow, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and the Russian sensei are attacked by the Blue Ninjas. Billy is killed by one of them (Issue #172). Storm Shadow and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> return his body to Cobra Commander at Broca Beach. Cobra Commander holds a funeral for his son but does not deliver a eulogy, since Billy had not returned to him willingly. He is buried at the Broca Beach cemetery (Issue #174).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Billy;