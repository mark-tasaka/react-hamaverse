import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import stormShadow1 from './img/stormShadow/stormShadow_1.png';
import stormShadow2 from './img/stormShadow/stormShadow_2.png';
import stormShadow3 from './img/stormShadow/stormShadow_3.png';
import stormShadow4 from './img/stormShadow/stormShadow_4.png';
import stormShadow5 from './img/stormShadow/stormShadow_5.png';
import stormShadow6 from './img/stormShadow/stormShadow_6.png';
import stormShadow7 from './img/stormShadow/stormShadow_7.png';
import stormShadow8 from './img/stormShadow/stormShadow_8.png';
import stormShadow9 from './img/stormShadow/stormShadow_9.png';
import stormShadow10 from './img/stormShadow/stormShadow_10.png';
import stormShadow11 from './img/stormShadow/stormShadow_11.png';
import stormShadow12 from './img/stormShadow/stormShadow_12.png';
import stormShadow13 from './img/stormShadow/stormShadow_13.png';
import stormShadow14 from './img/stormShadow/stormShadow_14.png';
import stormShadow15 from './img/stormShadow/stormShadow_15.png';
import stormShadow16 from './img/stormShadow/stormShadow_16.png';
import stormShadow17 from './img/stormShadow/stormShadow_17.png';

const StormShadow: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Storm Shadow (Thomas Arashikage)</h1>

        <p className="profile-intro">
          Thomas "Tommy" Arashikage (Storm Shadow) is the American-born son of Japanese immigrants. Born in California, Tommy joins the U.S. Army during the Vietnam War and serves two tours with a Long Range Reconnaissance Patrol (LRRP). In Vietnam, he forms a deep friendship with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, promising him a place in the family business back in Japan.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Vietnam War</h2>
          <img src={stormShadow1} alt="Storm Shadow during the Vietnam War" className="profile-block-img" />
          <p>
            Storm Shadow joins the U.S. Army during the Vietnam War to gain practical experience for his ninja training (Issue #155). Serving with a Long Range Reconnaissance Patrol (LRRP), he forms a close bond with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, the two having served an entire tour together. Storm Shadow promises <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> a place in the family business in Japan once he returns home from the war.
          </p>
          <p>
            On <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' final LRRP mission, <Link to="/character-bios/Stalker">Stalker</Link> (the LRRP leader), Storm Shadow, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> are returning from an operation when they come under heavy enemy fire just as the team is about to board the Huey. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is hit. <Link to="/character-bios/Stalker">Stalker</Link> gives the order to leave him behind and retreat, but Storm Shadow disobeys, jumping from the Huey and running to his wounded friend through a hail of gunfire to carry him back. Along the way, he also recovers the photo of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' twin sister that his friend had carried with him for good luck — a photo the <Link to="/character-bios/SoftMaster">Soft Master</Link> would return to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> years later.
          </p>
          <p>
            Aboard the Huey, Storm Shadow and <Link to="/character-bios/Stalker">Stalker</Link> patch <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> up. Storm Shadow removes his wrist wrap to help bandage his friend's wounds (Issue #26) and employs the Arashikage Mindset to help stabilize his condition.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Arashikage Dojo, Japan</h2>
          <img src={stormShadow2} alt="Storm Shadow and Snake Eyes training at the Arashikage dojo" className="profile-block-img" />
          <p>
            After the tragic death of his family, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> takes Storm Shadow up on his offer and travels to Japan to join the family business — where he discovers it's a ninja clan. When <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> arrives, leadership of the clan rests with the <Link to="/character-bios/HardMaster">Hard Master</Link>, followed by the <Link to="/character-bios/SoftMaster">Soft Master</Link> — both of them Storm Shadow's uncles. Storm Shadow himself is known within the clan as the Young Master.
          </p>
          <p>
            Storm Shadow and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> train together for years. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> eventually earns the privilege of wearing the Arashikage tattoo on his right forearm. One day, Storm Shadow demonstrates the "Ear that Sees" technique — the ability to sense living creatures behind solid walls — by firing an arrow over the courtyard wall and killing a squirrel on the other side (Issue #26). Later that day, when he goes to retrieve the arrow, he finds both it and the squirrel gone (Issue #27).
          </p>
          <p>
            That night, a masked assassin hiding in the courtyard fires Storm Shadow's arrow into the dojo where <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and the <Link to="/character-bios/HardMaster">Hard Master</Link> are training, killing the <Link to="/character-bios/HardMaster">Hard Master</Link> (Issue #26). Storm Shadow spots the assassin and chases him to a waiting Cobra helicopter, but the assassin escapes aboard it. Storm Shadow leaves the clan, determined to uncover the killer's identity, and eventually joins Cobra's ranks, working his way up through the organization in search of the truth (Issue #27).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Encountering His Sword Brother at the Silent Castle</h2>
          <img src={stormShadow3} alt="Storm Shadow confronting Snake Eyes at the Silent Castle" className="profile-block-img" />
          <p>
            Storm Shadow's next encounter with his sword brother takes place years later at the Silent Castle. Operating a Cobra C.L.A.W., Storm Shadow captures <Link to="/character-bios/Scarlett">Scarlett</Link> during her jump qualifications, flying her to the Silent Castle and presenting her to a pleased <Link to="/character-bios/CobraCommander">Cobra Commander</Link>. He then takes her to a dungeon — a water-filled chamber with an elevated platform — where she's chained to an anchor.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> tracks Storm Shadow to the Silent Castle and parachutes in from a C-130, landing on the castle grounds and engaging the sentries. Alerted to his arrival, Storm Shadow discovers <Link to="/character-bios/Scarlett">Scarlett</Link> has already escaped and summons his three Red Ninja underlings. The first two attack <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> one at a time and are defeated, while Storm Shadow and the remaining Red Ninja lie in wait on the other side of a doorway as he approaches.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> catches the counterweight at the end of the Red Ninja's chain, wraps it around him, and uses the ninja as a shield to absorb Storm Shadow's blade. He then somersaults and kicks Storm Shadow in the head, knocking him to the ground, before fleeing to the castle's landing pad, where he finds <Link to="/character-bios/Scarlett">Scarlett</Link> strapped into a C.L.A.W. Storm Shadow recovers and rushes to the landing, hurling his sword at <Link to="/character-bios/Scarlett">Scarlett</Link>, but <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> catches the blade between his bare hands and tosses it aside. <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> fly off together on the C.L.A.W. (Issue #21).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Spanish Harlem</h2>
          <img src={stormShadow4} alt="Storm Shadow confronting Snake Eyes in Spanish Harlem" className="profile-block-img" />
          <p>
            Storm Shadow spots <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and the <Link to="/character-bios/SoftMaster">Soft Master</Link> inside Comidas Chinas, the restaurant the <Link to="/character-bios/SoftMaster">Soft Master</Link> owns, where the <Link to="/character-bios/SoftMaster">Soft Master</Link> is holding the arrow that killed the <Link to="/character-bios/HardMaster">Hard Master</Link>. Sensing Storm Shadow's presence, the <Link to="/character-bios/SoftMaster">Soft Master</Link> alerts <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, who opens fire. While <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> reloads, Storm Shadow bursts through the broken window, steals the arrow, and descends to the cellar before slipping out into the back alley. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> gives chase.
          </p>
          <p>
            The pursuit leads across the rooftops and onto the top of a moving train. With his back to the direction of travel, Storm Shadow fails to notice an approaching tunnel. To save his sword brother, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> drops his weapon and leaps backward between two train cars — Storm Shadow follows, and the move ends up saving his life.
          </p>
          <p>
            Realizing what <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> has done for him, Storm Shadow drops his own weapon and finally tells him the truth about the night his uncle was killed. He says that once his search for vengeance is complete, perhaps the two of them can be brothers again — then departs (Issue #27).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Training Billy</h2>
          <img src={stormShadow5} alt="Storm Shadow training Billy" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Billy">Billy</Link> is captured after a failed assassination attempt on his father, <Link to="/character-bios/CobraCommander">Cobra Commander</Link> (Issue #33). At the inquest, he refuses to identify his accomplices, so <Link to="/character-bios/CobraCommander">Cobra Commander</Link> hooks him up to the Brainwave Scanner to force the truth out of him. <Link to="/character-bios/Billy">Billy</Link> resists, projecting images of his father's role in Cobra's early formation instead. Not wanting the others to learn of his own past, <Link to="/character-bios/CobraCommander">Cobra Commander</Link> halts the session and has <Link to="/character-bios/Billy">Billy</Link> moved to a prison cell.
          </p>
          <p>
            Impressed by <Link to="/character-bios/Billy">Billy</Link>'s fortitude and integrity in protecting his accomplices and resisting the Brainwave Scanner, Storm Shadow decides to rescue him and train him as his apprentice. He breaks <Link to="/character-bios/Billy">Billy</Link> out of his holding cell, and together they escape to Storm Shadow's secret dojo, hidden inside a false water tower above a hotel in New York City (Issue #39).
          </p>
          <p>
            Storm Shadow begins training <Link to="/character-bios/Billy">Billy</Link> in the way of the ninja. Time passes, and <Link to="/character-bios/Billy">Billy</Link>'s skill and technique steadily improve. Storm Shadow tells him about the assassination of his uncle, the <Link to="/character-bios/HardMaster">Hard Master</Link>, and <Link to="/character-bios/Billy">Billy</Link> vows that one day he'll confront his father and learn who was truly responsible. Eventually, Storm Shadow returns to the dojo to find a note from <Link to="/character-bios/Billy">Billy</Link>, thanking him and explaining that he's going home to confront his past — and part of Storm Shadow's — and asking forgiveness for leaving this way. Setting the letter down, Storm Shadow says, "There is nothing to forgive, Billy" (Issue #42).
          </p>
        </section>
        
        <section className="profile-block">
          <h2 className="profile-block-title">Uncovering the Identity of His Uncle's Murderer</h2>
          <img src={stormShadow6} alt="Uncovering the identity of his uncle's murderer" className="profile-block-img" />
          <p>
            Before his death, the <Link to="/character-bios/SoftMaster">Soft Master</Link> discovered the identity of the <Link to="/character-bios/HardMaster">Hard Master</Link>'s killer in the Cobra police database in Springfield (Issue #43) and passed the information on to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>.
          </p>
          <p>
            One night, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> enters Storm Shadow's secret water tower lair and hands him the <Link to="/character-bios/SoftMaster">Soft Master</Link>'s communiqué, identifying the killer as <Link to="/character-bios/Zartan">Zartan</Link>. <Link to="/character-bios/Zartan">Zartan</Link> had retrieved the arrow Storm Shadow fired at the squirrel on the other side of the wall, then used a compound bow fitted with sound-amplification and directional-ranging equipment to detect the target's heartbeat and breathing through the wall — mistaking the <Link to="/character-bios/HardMaster">Hard Master</Link> for <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, since the <Link to="/character-bios/HardMaster">Hard Master</Link> was demonstrating the "Donning the Chameleon's Mantle" technique at the time. The compound bow's mechanical draw also let <Link to="/character-bios/Zartan">Zartan</Link> match Storm Shadow's own bow pull strength, allowing the arrow to penetrate the wall, the screen, and the <Link to="/character-bios/HardMaster">Hard Master</Link> himself (Issue #4).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Joining Forces with Snake Eyes</h2>
          <img src={stormShadow7} alt="Storm Shadow and Snake Eyes on Cobra Island" className="profile-block-img" />
          <p>
            Storm Shadow and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> steal one of the <Link to="/character-bios/Baroness">Baroness</Link>' Rattlers from her New York safehouse and fly to Cobra Island to confront the <Link to="/character-bios/HardMaster">Hard Master</Link>'s killer (Issue #45). The Rattler lands on Cobra Island, and the two dispatch the ground crew before making their way to the Terror Drome. Inside, they cut a path through Cobra troopers until they reach the launch chamber, where they find <Link to="/character-bios/Zartan">Zartan</Link> in the Firebat (a vertical-launch vehicle), with an unmasked Crimson Guardsman — <Link to="/character-bios/Appel">Professor Appel</Link> — preparing the launch.
          </p>
          <p>
            Storm Shadow slashes <Link to="/character-bios/Appel">Professor Appel</Link>, wounding him. As he moves to strike the Firebat's cockpit, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> pulls him back, saving him from the blast of the Firebat's rockets as it takes off. <Link to="/character-bios/Appel">Professor Appel</Link> dies in the explosion. Neither Storm Shadow nor <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> realizes the Firebat's true occupant isn't <Link to="/character-bios/Zartan">Zartan</Link> — it's <Link to="/character-bios/RipCord">Rip Cord</Link>. <Link to="/character-bios/Zartan">Zartan</Link> had confronted <Link to="/character-bios/RipCord">Rip Cord</Link> on the island earlier, and both were wounded in the encounter; <Link to="/character-bios/Zartan">Zartan</Link> then disguised <Link to="/character-bios/RipCord">Rip Cord</Link> in his own cloth and used his holographic powers to assume <Link to="/character-bios/RipCord">Rip Cord</Link>'s identity (Issue #46).
          </p>
          <p>
            G.I. Joe launches a raid on the island to recover <Link to="/character-bios/RipCord">Rip Cord</Link>. Storm Shadow and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> battle their way to the beach, dispatching Cobra troopers along the way, and commandeer a Cobra Moray hydrofoil. The Moray is struck by a torpedo, sending it out of control, and a pair of Cobra Eels boards the ship. When the Moray crashes against the rocks, everyone is thrown overboard — and a school of sharks attacks. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> kills one with his knife just as a speedboat carrying <Link to="/character-bios/Hawk">Hawk</Link>, Beach Head, and Wet-Suit arrives; <Link to="/character-bios/Hawk">Hawk</Link> and Beach Head pull him aboard.
          </p>
          <p>
            A wounded Storm Shadow staggers onto the beach, where the <Link to="/character-bios/Baroness">Baroness</Link> confronts him from a H.I.S.S. tank and fires several rounds into him (Issue #47). Believing him dead, the <Link to="/character-bios/Baroness">Baroness</Link> and Destro have his body placed in a body bag and taken to the labs, where it's stored in stasis for use in the creation of Serpentor (Issue #48). In truth, Storm Shadow — near death at the time — had used the technique of the "Sleeping Phoenix" to feign death (Issue #52).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Storm Shadow's Revival</h2>
          <img src={stormShadow8} alt="Storm Shadow's revival" className="profile-block-img" />
          <p>
            Storm Shadow's body is transported to the Springfield Museum of Antiquities, where Dr. Mindbender's laboratory is located. Using the genetic material of history's greatest warriors, Dr. Mindbender is in the process of creating Serpentor, and wants to add Storm Shadow's genetic material to the mix. Storm Shadow's body is placed in a chamber of fluid, the same kind that will give birth to Serpentor (Issue #49).
          </p>
          <p>
            During the Battle of Springfield, the Dreadnoks are stationed at the museum when Storm Shadow's body suddenly comes to life, rising from the fluid. He helps the Dreadnoks escape as a G.I. Joe assault force enters the building, and together they flee to the Dreadnoks' secret base in New Jersey (Issue #50). From there, Storm Shadow departs for Staten Island to find his sword brother.
          </p>
          <p>
            Storm Shadow infiltrates the Pit and finds <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. He tells his sword brother that while his body has healed, his spirit has not, and asks him for a safe place to restore his health and his soul — scarred, as it is, by revenge. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> gives Storm Shadow the keys to his cabin in the High Sierras, and Storm Shadow departs.
          </p>
          <p>
            A week later, Storm Shadow reaches the cabin, much of it destroyed from an earlier conflict involving <Link to="/character-bios/FredBroca">Fred Broca</Link>, Destro, and <Link to="/character-bios/Firefly">Firefly</Link>. He finds the trap door leading to the underground bunker, when Timber appears. The two bond, and Storm Shadow begins his process of healing (Issue #52).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Reuniting with Billy</h2>
          <img src={stormShadow9} alt="Storm Shadow reuniting with Billy" className="profile-block-img" />
          <p>
            In a secret base beneath the Defense Language Institute in San Francisco, Storm Shadow and <Link to="/character-bios/RipCord">Rip Cord</Link> wait for <Link to="/character-bios/Billy">Billy</Link> inside the recreation room. The door opens, and <Link to="/character-bios/Hawk">Hawk</Link> appears with <Link to="/character-bios/Billy">Billy</Link>. Storm Shadow sees that <Link to="/character-bios/Billy">Billy</Link> now has a prosthetic leg and a patch over one eye, and starts to apologize — but <Link to="/character-bios/Billy">Billy</Link> waves him off, joking that he still has one of each to spare. <Link to="/character-bios/Billy">Billy</Link> sits down and tells Storm Shadow and <Link to="/character-bios/RipCord">Rip Cord</Link> the unfortunate fate of the <Link to="/character-bios/SoftMaster">Soft Master</Link> and <Link to="/character-bios/Candy">Candy Appel</Link>, both of whom died in the car explosion.
          </p>
          <p>
            <Link to="/character-bios/Hawk">Hawk</Link> receives a phone call from <Link to="/character-bios/Flint">Flint</Link> in Grenada, reporting an explosion from a land mine that claimed the lives of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and a third person. Their bodies have disappeared, as if vaporized, leaving no trace. Overhearing the conversation, Storm Shadow asks to speak with <Link to="/character-bios/Flint">Flint</Link> himself and asks about the third man. <Link to="/character-bios/Flint">Flint</Link> tells him it was an old blind man, and Storm Shadow describes him in detail, to <Link to="/character-bios/Flint">Flint</Link>'s surprise. Storm Shadow says he'd believed the man was dead for years, but  faking his own death seems to be something that he is good at. With this, Storm Shadow realizes that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> are in the company of the <Link to="/character-bios/BlindMaster">Blind Master</Link>, and are on their way to Borovia to rescue <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Quick Kick (Issue #63).
          </p>
          <p>
            Storm Shadow continues training <Link to="/character-bios/Billy">Billy</Link> in the secret base beneath the Defense Language Institute. His second cousin, <Link to="/character-bios/Jinx">Jinx</Link>, works upstairs as an NCO for the school. One day she interrupts their training with important news. She brings Storm Shadow and <Link to="/character-bios/Billy">Billy</Link> upstairs and shows them satellite images of the gulag where <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Quick Kick have been taken, along with a Borovian newspaper article featuring a circus troupe. In the background of the photo is <Link to="/character-bios/Scarlett">Scarlett</Link>, who is part of the troupe. Storm Shadow knows that if <Link to="/character-bios/Scarlett">Scarlett</Link> is there, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and the <Link to="/character-bios/BlindMaster">Blind Master</Link> must be as well. The three depart for Borovia (Issue #66).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Raid on Gulag 23</h2>
          <img src={stormShadow10} alt="Storm Shadow and the raid on Gulag 23" className="profile-block-img" />
          <p>
            Storm Shadow, <Link to="/character-bios/Jinx">Jinx</Link>, and <Link to="/character-bios/Billy">Billy</Link> meet <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link> at the <Link to="/character-bios/WhiteClown">White Clown</Link>'s circus troupe. Storm Shadow initiates the Arashikage hexagram chanting ritual, in which all six join the chant, representing the unbroken and broken lines of the hexagram.
          </p>
          <p>
            After the ritual, the six raid Gulag 23, which holds <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Quick Kick. They infiltrate the gulag, kill the guards, and free the prisoners, including the three Joes. They commandeer an army truck and drive to the border, where they find a barbed-wire fence and guard towers lining the river that separates Borovia from its neighbor. Fortunately, the <Link to="/character-bios/WhiteClown">White Clown</Link> and <Link to="/character-bios/Orlovsky">Orlovsky</Link> arrive from the circus, their car hauling the circus cannon. The <Link to="/character-bios/WhiteClown">White Clown</Link> fires the group over the fence and into the river, allowing their escape from Borovia (Issue #66).
          </p>
          <p>
            Storm Shadow, <Link to="/character-bios/Jinx">Jinx</Link>, <Link to="/character-bios/Billy">Billy</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link> travel to San Francisco, where Storm Shadow establishes his dojo and continues training <Link to="/character-bios/Billy">Billy</Link> (Issue #67).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Hospital Raid, Rural Virginia</h2>
          <img src={stormShadow11} alt="Storm Shadow's involvement in the hospital raid in rural Virginia" className="profile-block-img" />
          <p>
            In the aftermath of the Joes' part in the Cobra Civil War on Cobra Island, the team is relieved from active duty and placed under arrest pending an investigation (Issue #77). <Link to="/character-bios/Hawk">Hawk</Link> and General Hollingsworth are being held in a hospital in rural Virginia. In San Francisco, <Link to="/character-bios/Jinx">Jinx</Link> accesses the central payroll computer and traces them to the hospital. Storm Shadow, <Link to="/character-bios/Jinx">Jinx</Link>, and <Link to="/character-bios/Billy">Billy</Link> catch a flight to Washington, D.C.
          </p>
          <p>
            When the three land at Dulles Airport, agents of the Domestic Operations Agency (DOA) arrest them and put them in cuffs. As they are escorted outside, they spot <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> in a car, calling out to them. Storm Shadow and the others slip out of their cuffs, knock out the DOA agents, and climb into the car.
          </p>
          <p>
            They drive to Dr. Adele Burkhart's home, where they meet Roadblock, <Link to="/character-bios/Grunt">Grunt</Link> (now a civilian), and his girlfriend, <Link to="/character-bios/Lola">Lola</Link> (a former service member). <Link to="/character-bios/CoverGirl">Cover Girl</Link>, Dusty, Bazooka, Barbecue, <Link to="/character-bios/Flash">Flash</Link>, Wet-Suit, Snow Job, <Link to="/character-bios/Steeler">Steeler</Link>, and <Link to="/character-bios/Zap">Zap</Link> arrive soon after. Together, the Joes mount a raid on the hospital, with Dr. Burkhart insisting on joining them. Film crews are on the scene as the raid unfolds, and Destro arrives to present receipts from M.A.R.S. on camera, clearing <Link to="/character-bios/Hawk">Hawk</Link>, General Hollingsworth, and the rest of the Joes of any wrongdoing (Issue #78).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Meeting Billy's Mother</h2>
          <img src={stormShadow12} alt="Storm Shadow meeting Billy's mother at the dojo" className="profile-block-img" />
          <p>
            Under the guidance of Storm Shadow and <Link to="/character-bios/Jinx">Jinx</Link>, Billy continues to develop his skills at the San Francisco dojo. A few years pass. One day, <Link to="/character-bios/Jinx">Jinx</Link> enters the dojo held at gunpoint by a woman demanding to know where <Link to="/character-bios/Billy">Billy</Link> is. Storm Shadow moves to attack, but <Link to="/character-bios/Billy">Billy</Link> recognizes his mother's voice and stops him. He tells her he believed she had died in a car accident years earlier, and she replies that she never stopped searching for him.
          </p>
          <p>
            Storm Shadow and <Link to="/character-bios/Jinx">Jinx</Link> invite <Link to="/character-bios/Billy">Billy</Link>'s mother to stay for dinner. She recounts the past, revealing that her ex-husband had an older brother, Dan, a Vietnam War veteran who extended his tours so that his younger brother (the man who would become <Link to="/character-bios/CobraCommander">Cobra Commander</Link>) would not be drafted. When Dan returned home, he began driving erratically at high speeds on the interstate, as if searching for death. One day, he crashed into a family on their way to the airport to meet their son, a returning soldier, and everyone in the car was killed. Storm Shadow tells them that the family was <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' own. <Link to="/character-bios/Billy">Billy</Link>'s mother explains that her ex-husband twisted the tragedy in his mind, blaming the returning soldier for his brother's death.
          </p>
          <p>
            After dinner, she tells <Link to="/character-bios/Billy">Billy</Link> she has an apartment in Berkeley and has kept a room ready for him. <Link to="/character-bios/Billy">Billy</Link> leaves with his mother.  Storm Shadow says to Jinx, "It's pretty amazing how events seem to come full circle, isn't it?" (Issue #84).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Zartan's Preemptive Strike</h2>
          <img src={stormShadow13} alt="Storm Shadow facing Zartan's attack in San Francisco" className="profile-block-img" />
          <p>
            Storm Shadow has long since put down his quest for revenge against <Link to="/character-bios/Zartan">Zartan</Link>, but <Link to="/character-bios/Zartan">Zartan</Link> does not believe it and decides to strike first. Suspecting that Storm Shadow or <Link to="/character-bios/Jinx">Jinx</Link> will visit a feudal Japanese museum exhibit in San Francisco, he travels to the city with a group of Red Ninja (Issue #84).
          </p>
          <p>
            In the museum, <Link to="/character-bios/Zartan">Zartan</Link>, disguised as a bearded middle-aged man, waits in a telephone booth, monitoring the numbers dialed from the adjacent booths. <Link to="/character-bios/Jinx">Jinx</Link> enters the museum and spots a sword bearing the Arashikage symbol, then steps into one of the booths and calls Storm Shadow at the dojo. <Link to="/character-bios/Zartan">Zartan</Link> intercepts the number, uses it to learn where Storm Shadow is staying, and signals the three Red Ninja disguised as samurai museum exhibits.
          </p>
          <p>
            The Red Ninja attack. <Link to="/character-bios/Jinx">Jinx</Link> drops the phone, alerting Storm Shadow to the danger, and flees with the Arashikage sword from the exhibit. She kills all three Red Ninja, escapes the museum as guards give chase, and takes off on a motorcycle for the dojo.
          </p>
          <p>
            Meanwhile, <Link to="/character-bios/Zartan">Zartan</Link> and his remaining Red Ninja fly to the dojo by helicopter. The Red Ninja drop in through the rooftop, where Storm Shadow is waiting. He defeats them one by one, then fires an arrow through a window and kills the helicopter pilot, forcing the helicopter to crash-land in the alley. <Link to="/character-bios/Zartan">Zartan</Link> and the surviving Red Ninja drive out of the wreckage in a Volkswagen van hidden inside the helicopter. Storm Shadow has just removed a Red Ninja's homing device, so <Link to="/character-bios/Zartan">Zartan</Link> believes the figure he sees inside the building is Storm Shadow and fires an arrow at its outline, killing the ninja. The van then speeds off.
          </p>
          <p>
            <Link to="/character-bios/Jinx">Jinx</Link> reaches the alley on her motorcycle. Storm Shadow spots her and leaps from the fire escape onto the back of the bike, and together they pursue the van carrying <Link to="/character-bios/Zartan">Zartan</Link> and a Red Ninja driver. Storm Shadow catches an arrow that <Link to="/character-bios/Zartan">Zartan</Link> fires at him and sends it back into the Red Ninja driver, and the van crashes off a bridge into the water (Issue #85).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Duel at the Waterfall</h2>
          <img src={stormShadow14} alt="Storm Shadow's duel with the Red Ninja at the waterfall" className="profile-block-img" />
          <p>
            In the aftermath of <Link to="/character-bios/Zartan">Zartan</Link>'s attack in San Francisco, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and <Link to="/character-bios/Jinx">Jinx</Link> believe he will launch further attacks on Storm Shadow. They join him at the cabin in the High Sierras to keep watch over him. One night, as they sit around a campfire, an arrow is fired into a nearby log. They douse the fire, and a wounded Timber returns with a torn scrap of a Red Ninja's outfit in his mouth. Storm Shadow believes <Link to="/character-bios/Zartan">Zartan</Link> is ready to meet him and tells <Link to="/character-bios/Jinx">Jinx</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and <Link to="/character-bios/Scarlett">Scarlett</Link> to wait behind. He departs for the waterfall, but it is not <Link to="/character-bios/Zartan">Zartan</Link> waiting for him there. It is the Red Ninja driver he struck with the arrow (Issue #90).
          </p>
          <p>
            The Red Ninja reveals his Arashikage tattoo and claims that he and the other Red Ninja belong to the Arashikage clan. He tells Storm Shadow that he, not <Link to="/character-bios/Zartan">Zartan</Link>, is to blame for the fall of the clan: <Link to="/character-bios/Zartan">Zartan</Link> was merely the effect, and bringing the outsider <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> into the clan was the cause. For this, the Red Ninja says, Storm Shadow must die.
          </p>
          <p>
            The two fight at the waterfall, and Storm Shadow's sword is broken. As the Red Ninja goes for the killing blow, Storm Shadow jumps back behind the waterfall, where he finds the skeleton of <Link to="/character-bios/FredBroca">Fred Broca</Link> with a Kalashnikov in its arms. He grabs the rifle and uses it to block the Red Ninja's blade, and both the gun and the sword break. Storm Shadow lunges forward, and he and the Red Ninja are thrown down the waterfall.
          </p>
          <p>
            The injured Storm Shadow is carried downstream, where his companions have just defeated a group of Red Ninja. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and Timber jump into the water to retrieve him, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and <Link to="/character-bios/Jinx">Jinx</Link> drag him ashore (Issue #91).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Rescue at the Cobra Consulate</h2>
          <img src={stormShadow15} alt="Storm Shadow's rescue at the Cobra Consulate" className="profile-block-img" />
          <p>
            While undergoing plastic surgery at the Bern Institute in Switzerland, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is captured by the <Link to="/character-bios/Baroness">Baroness</Link> and taken to the sublevels of the Cobra Consulate in New York City. Storm Shadow rejoins his old LRRP teammates, <Link to="/character-bios/Stalker">Stalker</Link> and <Link to="/character-bios/Wade">Wade Collins</Link>, in New York to help rescue him.
          </p>
          <p>
            Dressed in his old Crimson Guard uniform, <Link to="/character-bios/Wade">Wade</Link> enters the Consulate seeking a meeting with the <Link to="/character-bios/Baroness">Baroness</Link> and walks into a scene of panic, asks <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> has escaped. A Tele-Viper at the front desk tells him the <Link to="/character-bios/Baroness">Baroness</Link> cannot see him because an emergency is underway. <Link to="/character-bios/Wade">Wade</Link> returns to the newsstand across the street, where Storm Shadow and <Link to="/character-bios/Stalker">Stalker</Link> are waiting. As he changes into his military fatigues, a powerful explosion tears through the Consulate's lobby.
          </p>
          <p>
            Storm Shadow, <Link to="/character-bios/Stalker">Stalker</Link>, and <Link to="/character-bios/Wade">Wade</Link> rush inside to find the lobby filled with dead and dying Vipers, including an injured Techno-Viper relaying the situation over a microphone. Just then, the elevator doors open, and a crowd of panicked Cobra civilian employees pours out, sweeping the three of them along in the rush to the street. More explosions rip through the floors above. <Link to="/character-bios/Stalker">Stalker</Link> realizes this is <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' plan: empty the Consulate, seal off the lower levels, and fight his way up (Issue #95).
          </p>
                    <p>
            With the lower levels sealed off, the only way up is to scale the outside walls, a feat only a ninja can perform. Storm Shadow begins to climb, while <Link to="/character-bios/Stalker">Stalker</Link> and <Link to="/character-bios/Wade">Wade</Link> search for another way in. Storm Shadow reaches an open window on an upper level and defeats three Vipers attempting to flee through it. Meanwhile, the two reach the helipad of a nearby rooftop, but the pilot refuses to fly anywhere near the burning Consulate. Just then, the Tomahawk helicopter passes by, carrying the comatose <Link to="/character-bios/Scarlett">Scarlett</Link>, and <Link to="/character-bios/Stalker">Stalker</Link> and <Link to="/character-bios/Wade">Wade</Link> climb aboard.
          </p>
          <p>
            The <Link to="/character-bios/Baroness">Baroness</Link> and the surviving Vipers barricade themselves in the penthouse. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, disguised as one of the Vipers, waits inside as Storm Shadow approaches from the other side of the door. A Heat Viper fires a missile that blows the barricade open. Storm Shadow dodges the blast and enters, searching for his friend, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> reveals himself. The sword brothers square off as the penthouse begins to collapse around them.
          </p>
          <p>
            The Vipers are thrown to their deaths as the floor gives way. The <Link to="/character-bios/Baroness">Baroness</Link> is about to fall as well when <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> catches her hand. Shocked that he would save her, she draws her pistol with her free hand and points it at him, vowing she will still have her revenge. At that moment, Destro arrives in the crew compartment of a Cobra helicopter. He tells the <Link to="/character-bios/Baroness">Baroness</Link> that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> did not kill her brother. He reveals that he was in Saigon with his father, the previous Destro, investigating the murder, and explains that Eugene DeCobray was wearing a bulletproof vest, so it was the AK-47 rounds themselves that killed him.
          </p>
          <p>
            Overcome with guilt, the <Link to="/character-bios/Baroness">Baroness</Link> strikes <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' hand, breaking his grip on her. Storm Shadow catches her before she can fall to her death, and together he and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> help her toward Destro's helicopter. But as Destro reaches out for the two of them, the ledge beneath them gives way, sending them both falling. Fortunately, the Tomahawk is nearby. Lift Ticket executes a barrel roll and catches them in midair. Aboard the Tomahawk, they find Doc tending to the comatose <Link to="/character-bios/Scarlett">Scarlett</Link>. The bullet did not kill her after all, though she remains in a coma with an uncertain prognosis.
            </p>
                      <p>
            As the Tomahawk pulls away, Destro and the <Link to="/character-bios/Baroness">Baroness</Link> wave farewell from the Cobra helicopter. Storm Shadow turns to his sword brother, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and asks, "Do you think it's really possible for people to change? Can the cycle of revenge be broken, or are we chained to our mistakes forever?" (Issue #96).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">A Mission for Snake Eyes</h2>
          <img src={stormShadow16} alt="Storm Shadow's mission to rescue George Strawhacker" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Scarlett">Scarlett</Link> is taken to Midtown Hospital in New York. The doctors do not know when, if ever, she will come out of her coma, or whether she will be able to live a normal life again if she does (Issue #97).
          </p>
          <p>
            Time passes. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> stays by her side, and Storm Shadow remains at the hospital to support his friend. One day, <Link to="/character-bios/Scarlett">Scarlett</Link>'s sister, <Link to="/character-bios/Sioban">Sioban O'Hara</Link>, an attorney-at-law, arrives with a court order to terminate her life-support systems (Issue #101).
          </p>
          <p>
            Storm Shadow wants to give his friend a mission to take his mind off the upcoming termination of <Link to="/character-bios/Scarlett">Scarlett</Link>'s life support. He steals the George Strawhacker file from the vault at Fort Leonard. Strawhacker, an agent of an unnamed American intelligence agency, is the fiancé of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' late twin sister and is being held prisoner in a Borovian gulag. Storm Shadow believes that a mission to rescue someone so dear to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> will help him heal, so he infiltrates the Jugglers' chamber inside the Pentagon and threatens them into authorizing the mission.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, Storm Shadow, and <Link to="/character-bios/Stalker">Stalker</Link> board a B-2 stealth bomber bound for Borovian airspace. Just before <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> makes his HALO jump, Storm Shadow uses the Arashikage Mindset to turn him into an uncaring killing machine, capable of completing the mission without distraction. As <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> descends toward the ground, <Link to="/character-bios/Scarlett">Scarlett</Link> awakes from her coma, asking for him (Issue #103).
          </p>
          <p>
            When the B-2 lands at an Air Force base in Frankfurt, Germany, the military police, led by General Crowther, the head of the Jugglers, take Storm Shadow and <Link to="/character-bios/Stalker">Stalker</Link> prisoner (Issue #104). They are handed over to goons from the Domestic Operations Agency (DOA) and taken, blindfolded and bound, to the Statue of Liberty (Issue #105).
          </p>
          <p>
            Storm Shadow breaks free of his bindings and undoes <Link to="/character-bios/Stalker">Stalker</Link>'s, then resets <Link to="/character-bios/Stalker">Stalker</Link>'s shoulder, which the DOA goons had dislocated. The two defeat the DOA thugs inside the statue and commandeer their boat, overpowering the thugs aboard. <Link to="/character-bios/Stalker">Stalker</Link> fires a flare gun at a DOA helicopter, and the damaged helicopter veers toward the boat. Storm Shadow and <Link to="/character-bios/Stalker">Stalker</Link> dive into the water just before it crashes into the boat, and they swim to safety on a nearby ferry (Issue #106).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Wounded on the Subway Tracks</h2>
          <img src={stormShadow17} alt="Storm Shadow wounded on the subway tracks" className="profile-block-img" />
          <p>
            Storm Shadow and <Link to="/character-bios/Stalker">Stalker</Link> are now fugitives and must evade the Domestic Operations Agency (DOA). When the ferry docks, they make their way to Storm Shadow's secret lair, an empty water tower on the rooftop of a Manhattan hotel. Unbeknownst to them, <Link to="/character-bios/CobraCommander">Cobra Commander</Link> has hired the Night Creepers to assassinate Storm Shadow.
          </p>
          <p>
            The Night Creepers attack at the water tower. After killing several of them, Storm Shadow overhears the others saying that <Link to="/character-bios/Stalker">Stalker</Link> is of no consequence and that their target is Storm Shadow. To protect <Link to="/character-bios/Stalker">Stalker</Link>, who remains on the rooftop, Storm Shadow leads the Night Creepers away and down into the subway.
          </p>
          <p>
            Meanwhile, <Link to="/character-bios/Scarlett">Scarlett</Link> is furious with Storm Shadow for sending <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> on a suicide mission. She travels to the subway to find him. Getting off at one stop, she is confronted by a would-be mugger with a knife. She disarms him, breaks his elbow, and walks off with his knife. Later, she runs into Storm Shadow as he flees from the Night Creepers. She confronts him just as the Night Creepers open fire with arrows, and Storm Shadow pushes the two of them onto the tracks in front of an oncoming subway train to escape. He pulls them both to safety between the train cars, but in the chaos, <Link to="/character-bios/Scarlett">Scarlett</Link> accidentally stabs him in the back. Shocked, she cries out, "What have I done?" (Issue #107).
          </p>
          <p>
            <Link to="/character-bios/Scarlett">Scarlett</Link> takes the wounded Storm Shadow to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' secret lair, a hidden room connected to the isolation tank room at Columbia University. <Link to="/character-bios/Stalker">Stalker</Link> meets up with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> at the hospital where <Link to="/character-bios/Scarlett">Scarlett</Link> had been staying, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> brings him to the lair. There, they find <Link to="/character-bios/Scarlett">Scarlett</Link> and a wounded, bandaged Storm Shadow.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> uses the mystic Arashikage trance on Storm Shadow. It is the same technique Storm Shadow used to turn him into a killing machine in Borovia, and to stabilize his condition in Vietnam. Storm Shadow's wounds stabilize. <Link to="/character-bios/Scarlett">Scarlett</Link> calls an ambulance, and Storm Shadow is taken to the hospital, where he recovers (Issue #108).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            In an interview, Larry Hama said he felt unsettled that the series' sole Asian action figure was a villain. So, without telling Hasbro, he crafted a long-term storyline giving Storm Shadow a clear motive for joining Cobra (avenging his uncle's murder), a deep friendship with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and, eventually, a path toward joining G.I. Joe.
          </p>
          <p>
            Four versions of the Storm Shadow action figure were produced during the Marvel run (1982–1994): the <a href="https://www.yojoe.com/action/84/stormshadow.shtml" target="_blank" rel="noopener noreferrer">1984 Cobra</a> Storm Shadow, the <a href="https://www.yojoe.com/action/88/stormshadow2.shtml" target="_blank" rel="noopener noreferrer">1988 version</a>, the <a href="https://www.yojoe.com/action/92/stormshadow3.shtml" target="_blank" rel="noopener noreferrer">1992 Ninja Force version</a>, and the <a href="https://www.yojoe.com/action/94/stormshadow4.shtml" target="_blank" rel="noopener noreferrer">1994 Shadow Ninja version</a>. The original 1984 file card lists him as a Cobra agent with his file name classified. His 1988 file card lists him as a member of G.I. Joe, but provides no pay grade — suggesting Storm Shadow isn't formally part of the team, but rather a G.I. Joe ally. As with the 1984 card, his file name remains classified. The 1992 and 1994 file cards list his name as Thomas S. Arashikage, with the rank of E-8, reflecting his leadership of G.I. Joe's Ninja Force.
          </p>
          <p>
            The 1992 and 1994 file cards list his birthplace as St. Louis, Missouri. I believe this was a clerical error on Hasbro's part, possibly carried over from another figure's file card — the comic describes Storm Shadow's birthplace as California.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default StormShadow;
