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

const StormShadow: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Storm Shadow</h1>

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
            Storm Shadow's next encounter with his sword brother takes place years later at the Silent Castle. Operating a Cobra C.L.A.W., Storm Shadow captures <Link to="/character-bios/Scarlett">Scarlett</Link> during her jump qualifications, flying her to the Silent Castle and presenting her to a pleased Cobra Commander. He then takes her to a dungeon — a water-filled chamber with an elevated platform — where she's chained to an anchor.
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
            <Link to="/character-bios/Billy">Billy</Link> is captured after a failed assassination attempt on his father, Cobra Commander (Issue #33). At the inquest, he refuses to identify his accomplices, so Cobra Commander hooks him up to the Brainwave Scanner to force the truth out of him. <Link to="/character-bios/Billy">Billy</Link> resists, projecting images of his father's role in Cobra's early formation instead. Not wanting the others to learn of his own past, Cobra Commander halts the session and has <Link to="/character-bios/Billy">Billy</Link> moved to a prison cell.
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
            One night, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> enters Storm Shadow's secret water tower lair and hands him the <Link to="/character-bios/SoftMaster">Soft Master</Link>'s communiqué, identifying the killer as Zartan. Zartan had retrieved the arrow Storm Shadow fired at the squirrel on the other side of the wall, then used a compound bow fitted with sound-amplification and directional-ranging equipment to detect the target's heartbeat and breathing through the wall — mistaking the <Link to="/character-bios/HardMaster">Hard Master</Link> for <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, since the <Link to="/character-bios/HardMaster">Hard Master</Link> was demonstrating the "Donning the Chameleon's Mantle" technique at the time. The compound bow's mechanical draw also let Zartan match Storm Shadow's own bow pull strength, allowing the arrow to penetrate the wall, the screen, and the <Link to="/character-bios/HardMaster">Hard Master</Link> himself (Issue #4).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Joining Forces with Snake Eyes</h2>
          <img src={stormShadow7} alt="Storm Shadow and Snake Eyes on Cobra Island" className="profile-block-img" />
          <p>
            Storm Shadow and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> steal one of the Baroness' Rattlers from her New York safehouse and fly to Cobra Island to confront the <Link to="/character-bios/HardMaster">Hard Master</Link>'s killer (Issue #45). The Rattler lands on Cobra Island, and the two dispatch the ground crew before making their way to the Terror Drome. Inside, they cut a path through Cobra troopers until they reach the launch chamber, where they find Zartan in the Firebat (a vertical-launch vehicle), with an unmasked Crimson Guardsman — Professor Apel — preparing the launch.
          </p>
          <p>
            Storm Shadow slashes Professor Apel, wounding him. As he moves to strike the Firebat's cockpit, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> pulls him back, saving him from the blast of the Firebat's rockets as it takes off. Professor Apel dies in the explosion. Neither Storm Shadow nor <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> realizes the Firebat's true occupant isn't Zartan — it's Ripcord. Zartan had confronted Ripcord on the island earlier, and both were wounded in the encounter; Zartan then disguised Ripcord in his own cloth and used his holographic powers to assume Ripcord's identity (Issue #46).
          </p>
          <p>
            G.I. Joe launches a raid on the island to recover Ripcord. Storm Shadow and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> battle their way to the beach, dispatching Cobra troopers along the way, and commandeer a Cobra Moray hydrofoil. The Moray is struck by a torpedo, sending it out of control, and a pair of Cobra Eels boards the ship. When the Moray crashes against the rocks, everyone is thrown overboard — and a school of sharks attacks. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> kills one with his knife just as a speedboat carrying <Link to="/character-bios/Hawk">Hawk</Link>, Beach Head, and Wet-Suit arrives; <Link to="/character-bios/Hawk">Hawk</Link> and Beach Head pull him aboard.
          </p>
          <p>
            A wounded Storm Shadow staggers onto the beach, where the Baroness confronts him from a H.I.S.S. tank and fires several rounds into him (Issue #47). Believing him dead, the Baroness and Destro have his body placed in a body bag and taken to the labs, where it's stored in stasis for use in the creation of Serpentor (Issue #48). In truth, Storm Shadow — near death at the time — had used the technique of the "Sleeping Phoenix" to feign death (Issue #52).
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
            A week later, Storm Shadow reaches the cabin, much of it destroyed from an earlier conflict involving Fred Broca, Destro, and Firefly. He finds the trap door leading to the underground bunker, where Timber appears. The two bond, and Storm Shadow begins his process of healing (Issue #52).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Reuniting with Billy</h2>
          <img src={stormShadow9} alt="Storm Shadow reuniting with Billy" className="profile-block-img" />
          <p>
            In a secret base beneath the Defense Language Institute in San Francisco, Storm Shadow and Ripcord wait for <Link to="/character-bios/Billy">Billy</Link> inside the recreation room. The door opens, and <Link to="/character-bios/Hawk">Hawk</Link> appears with <Link to="/character-bios/Billy">Billy</Link>. Storm Shadow sees that <Link to="/character-bios/Billy">Billy</Link> now has a prosthetic leg and a patch over one eye, and starts to apologize — but <Link to="/character-bios/Billy">Billy</Link> waves him off, joking that he still has one of each to spare. <Link to="/character-bios/Billy">Billy</Link> sits down and tells Storm Shadow and Ripcord the unfortunate fate of the <Link to="/character-bios/SoftMaster">Soft Master</Link> and Candy Apel, both of whom died in the car explosion.
          </p>
          <p>
            <Link to="/character-bios/Hawk">Hawk</Link> receives a phone call from Flint in Grenada, reporting an explosion from a land mine that claimed the lives of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and a third person. Their bodies have disappeared, as if vaporized, leaving no trace. Overhearing the conversation, Storm Shadow asks to speak with Flint himself and asks about the third man. Flint tells him it was an old blind man, and Storm Shadow describes him in detail, to Flint's surprise. Storm Shadow says he'd believed the man was dead for years, but  faking his own death seems to be something that he is good at. With this, Storm Shadow realizes that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> are in the company of the <Link to="/character-bios/BlindMaster">Blind Master</Link>, and are on their way to Borovia to rescue <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Quick Kick (Issue #63).
          </p>
          <p>
            Storm Shadow continues training <Link to="/character-bios/Billy">Billy</Link> in the secret base beneath the Defense Language Institute. His second cousin, <Link to="/character-bios/Jinx">Jinx</Link>, works upstairs as an NCO for the school. One day she interrupts their training with important news. She brings Storm Shadow and <Link to="/character-bios/Billy">Billy</Link> upstairs and shows them satellite images of the gulag where <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Quick Kick have been taken, along with a Borovian newspaper article featuring a circus troupe. In the background of the photo is <Link to="/character-bios/Scarlett">Scarlett</Link>, who is part of the troupe. Storm Shadow knows that if <Link to="/character-bios/Scarlett">Scarlett</Link> is there, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and the <Link to="/character-bios/BlindMaster">Blind Master</Link> must be as well. The three depart for Borovia (Issue #66).
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
