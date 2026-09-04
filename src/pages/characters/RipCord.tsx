import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import ripCord1 from './img/ripCord/ripCord_1.png';
import ripCord2 from './img/ripCord/ripCord_2.png';
import ripCord3 from './img/ripCord/ripCord_3.png';
import ripCord4 from './img/ripCord/ripCord_4.png';
import ripCord5 from './img/ripCord/ripCord_5.png';

const RipCord: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Rip Cord (Wallace Weems)</h1>

        <p className="profile-intro">
          Wallace A. Weems (Rip Cord) is the team's HALO (High Altitude, Low Opening) jumper. Rip Cord develops a relationship with <Link to="/character-bios/Candy">Candy Appel</Link>, but the nature of his work means he cannot tell her what he does for a living, or even his real name. The secrecy takes its toll on their relationship, and <Link to="/character-bios/Candy">Candy</Link> eventually breaks up with him. Later, Rip Cord makes a HALO jump onto the newly formed Cobra Island, where he comes face to face with <Link to="/character-bios/Candy">Candy</Link>'s father, <Link to="/character-bios/Appel">Professor Appel</Link> — the Crimson Guardsman scientist responsible for the island's creation.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Always the Diplomat</h2>
          <img src={ripCord1} alt="Rip Cord and Lady Jaye arriving at the Pit" className="profile-block-img" />
          <p>
            Rip Cord and <Link to="/character-bios/LadyJay">Lady Jaye</Link> arrive at the Pit together with their orders to join the team. They enter unannounced, and the first Joes they meet are <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/Grunt">Grunt</Link>. <Link to="/character-bios/Grunt">Grunt</Link> assumes the two are unauthorized personnel who have wandered in by mistake. <Link to="/character-bios/Scarlett">Scarlett</Link> warns them they have entered a restricted installation and asks for ID. <Link to="/character-bios/LadyJay">Lady Jaye</Link> refuses to show it, meeting <Link to="/character-bios/Scarlett">Scarlett</Link>'s question with attitude.
          </p>
          <p>
            Rip Cord, playing the diplomat, tells <Link to="/character-bios/Scarlett">Scarlett</Link> that <Link to="/character-bios/LadyJay">Lady Jaye</Link> did not mean anything by it. <Link to="/character-bios/LadyJay">Lady Jaye</Link>, unmoved, refers to <Link to="/character-bios/Scarlett">Scarlett</Link> as a "tawdry redhead" and says plainly that she does not care for her attitude.
          </p>
          <p>
            Rip Cord diplomatically opens the envelope containing their orders and hands them to <Link to="/character-bios/Grunt">Grunt</Link>, explaining that the papers confirm their permanent assignment to the G.I. Joe team. <Link to="/character-bios/LadyJay">Lady Jaye</Link> adds, with a sharp look at <Link to="/character-bios/Scarlett">Scarlett</Link>, "We are here as your replacements" (Issue #32).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Meeting Candy Appel</h2>
          <img src={ripCord2} alt="Rip Cord meeting Candy Appel" className="profile-block-img" />
          <p>
            Rip Cord, Spirit, and Barbecue are at a mall on Staten Island when Spirit encounters <Link to="/character-bios/Wade">Fred II (Wade Collins)</Link> and his family. Spirit had previously encountered the original <Link to="/character-bios/FredBroca">Fred Broca</Link> in the High Sierras, an encounter that ended in <Link to="/character-bios/FredBroca">Fred Broca's</Link> death. Spirit tells Fred II he had better come along for questioning. Mrs. Collins strikes Spirit in the head with her purse, while her children kick him in the knees. The Brocas flee to the parking lot and make their escape by car, with Mrs. Collins throwing a grenade into the Joes' vehicle and destroying it.
          </p>
          <p>
            Rip Cord, Spirit, and Barbecue commandeer a colorful van with the words "Bongo the Balloon Bear" painted across it. Inside is <Link to="/character-bios/Candy">Bongo</Link> herself, dressed in a bear costume. <Link to="/character-bios/Candy">Bongo</Link> drives the Joes in pursuit of the Brocas, and a chase ensues. After a firefight, in which the Brocas open fire on the van, <Link to="/character-bios/Candy">Bongo</Link> asks to be let out. She tells the Joes to bring her van back safely and waits behind for their return.
          </p>
          <p>
            The Joes continue their chase, but the Brocas escape. Rip Cord returns the van to <Link to="/character-bios/Candy">Bongo</Link> and asks if there is anything the government can do to compensate her. "How about dinner?" <Link to="/character-bios/Candy">Bongo</Link> asks, removing her bear mask to reveal the face of a beautiful young woman. "You're a girl," a surprised Rip Cord replies. Rip Cord takes <Link to="/character-bios/Candy">Candy</Link> out for dinner, and the two begin dating (Issue #33). Due to the nature of his work, Rip Cord keeps his real name and what he does a secret from <Link to="/character-bios/Candy">Candy</Link>, who knows him simply as Rip Cord.
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">The Breakup</h2>
          <img src={ripCord3} alt="Candy breaking up with Rip Cord at the circus" className="profile-block-img" />
          <p>
            Rip Cord, <Link to="/character-bios/Candy">Candy</Link>, dressed as Bongo, her van, and a handful of other Joes are at the circus when chaos erupts as the Crimson Twins and a squad of uniformed Crimson Guard attack. In the aftermath of the battle, <Link to="/character-bios/Candy">Candy</Link> confronts Rip Cord, upset over the secrecy surrounding what he does, who he really is, and why he cannot reveal his real name to her. She adds that wherever they go together, people end up shot or blown up. <Link to="/character-bios/Candy">Candy</Link> tells him they are through, then drives off. Rip Cord is heartbroken. Gung-Ho puts a hand on his friend's shoulder and says, "She's just a little shook up. Give her time. She'll come around." <Link to="/character-bios/Candy">Candy</Link> never does. It is the last time Rip Cord ever sees her (Issue #37).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Meeting Candy's Father</h2>
          <img src={ripCord4} alt="Rip Cord mistaken for Zartan" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Candy">Candy Appel</Link> is believed to be on Cobra Island after being kidnapped by Buzzer. As a sovereign state, the island limits the Joes to aerial reconnaissance only. <Link to="/character-bios/Hawk">Hawk</Link> devises a way to get a team on the ground, assigning Rip Cord to take reconnaissance photos from the backseat of a Skystriker — fully aware that Rip Cord will eject and land on the island himself to search for <Link to="/character-bios/Candy">Candy</Link>. This gives <Link to="/character-bios/Hawk">Hawk</Link> the justification he needs to send in a covert recon and rescue team.
          </p>
          <p>
            Over Cobra Island, Rip Cord ejects from the backseat of the Skystriker and lands on the island, where he is ambushed by <Link to="/character-bios/Zartan">Zartan</Link>. <Link to="/character-bios/Zartan">Zartan</Link> gains the upper hand, badly injuring him (Issue #45). <Link to="/character-bios/Zartan">Zartan</Link> then transforms into Rip Cord's likeness and dresses the unconscious Rip Cord in his own clothing before departing. Later, <Link to="/character-bios/Appel">Professor Appel</Link>, leading a H.I.S.S. tank patrol, finds Rip Cord and mistakes him for an injured <Link to="/character-bios/Zartan">Zartan</Link>, carrying him back to the medical facilities inside the Terror Drome.
          </p>
          <p>
            At the medical facility, <Link to="/character-bios/Appel">Professor Appel</Link> discovers a photo of <Link to="/character-bios/Candy">Candy</Link> on the disguised Rip Cord and realizes his true identity. Rip Cord asks where <Link to="/character-bios/Candy">Candy</Link> is, believing Buzzer had brought her to the island. It is only then that <Link to="/character-bios/Appel">Professor Appel</Link> realizes Cobra Commander had lied to him all along about knowing his daughter's whereabouts. Determined to help, <Link to="/character-bios/Appel">Professor Appel</Link> resolves to get Rip Cord off the island so he can find <Link to="/character-bios/Candy">Candy</Link> himself.
          </p>
          <p>
            Meanwhile, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> have infiltrated the Terror Drome, fighting their way through in search of <Link to="/character-bios/Zartan">Zartan</Link>. <Link to="/character-bios/Appel">Professor Appel</Link> helps carry the injured Rip Cord — still disguised as <Link to="/character-bios/Zartan">Zartan</Link> — to the Firebat to make his escape. As <Link to="/character-bios/Appel">Professor Appel</Link> begins the launch sequence, <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> appear. <Link to="/character-bios/StormShadow">Storm Shadow</Link> strikes <Link to="/character-bios/Appel">Professor Appel</Link>, wounding him, just as the Firebat launches. <Link to="/character-bios/Appel">Professor Appel</Link> is killed in the resulting blast (Issue #46).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Trapped in Springfield</h2>
          <img src={ripCord5} alt="Rip Cord trapped in Springfield" className="profile-block-img" />
          <p>
            The Firebat takes Rip Cord to the town of Springfield, where everyone believes him to be <Link to="/character-bios/Zartan">Zartan</Link>. Rip Cord is admitted to the Springfield hospital for medical treatment. When the Dreadnoks visit, a confrontation erupts between Rip Cord and Buzzer over <Link to="/character-bios/Candy">Candy</Link>'s fate. Buzzer had previously "borrowed" <Link to="/character-bios/Zartan">Zartan</Link>'s motorcycle and destroyed it in the process, and the Dreadnoks assume <Link to="/character-bios/Zartan">Zartan</Link>'s anger toward Buzzer stems from that incident.  They are utterly confused as to why "Zartan" seems so upset about Buzzer stealing his "Candy" (Issue #48).
          </p>
          <p>
            At a bar in Springfield, Rip Cord — still disguised as <Link to="/character-bios/Zartan">Zartan</Link> — uses a payphone to contact the Pit, inadvertently revealing Springfield's location. Cobra intercepts the call, and a team led by <Link to="/character-bios/ScrapIron">Scrap-Iron</Link> and <Link to="/character-bios/Firefly">Firefly</Link> quickly arrives. A firefight breaks out, and Rip Cord flees into the street, pulling a father from his car and driving off — unaware the man's young daughter is still inside. The girl pulls a .375 Magnum on Rip Cord, forcing him to stop and surrender. The Dreadnoks drag him out of the car and thank the girl for her help.
          </p>
          <p>
            The Dreadnoks rough Rip Cord up, but he refuses to reveal what he told G.I. Joe. They take him to Dr. Mindbender's lab in the Springfield Museum and hook him up to the Brainwave Scanner to extract the information by force.
          </p>
          <p>
            The Joes arrive in Springfield, and a major battle breaks out (Issue #49). Cobra evacuates the entire population of the town to Cobra Island.  The Joes are victorious.  Rip Cord is rescued (Issue #50).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), a single version of Rip Cord was produced: the <a href="https://www.yojoe.com/action/84/ripcord.shtml" target="_blank" rel="noopener noreferrer">1984 figure</a>. The file card spells his name as two words, Rip Cord. In the 2000s, five further versions were produced, spelling his name as a single word, Ripcord (some versions naming him Wallace "Ripcord" Weems).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default RipCord;
