import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import crowther1 from './img/crowther/crowther_1.png';
import crowther2 from './img/crowther/crowther_2.png';
import crowther3 from './img/crowther/crowther_3.png';

const Crowther: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">General Thurston Crowther</h1>

        <p className="profile-intro">
          General Thurston Crowther is the former head of the Jugglers, a secret cabal of generals inside the Pentagon who quietly wield control over the military from behind the scenes. Prior to the formation of G.I. Joe, Crowther, then a Major General, actively tries to prevent <Link to="/character-bios/Hawk">Hawk</Link> from leading G.I. Joe, first by initiating a court-martial and then by an assassination attempt. Years later, as head of the Jugglers, he is forced by <Link to="/character-bios/StormShadow">Storm Shadow</Link> to send <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> on a mission to Borovia to rescue George Strawhacker. Crowther hires the mercenary Major Bludd to travel to Borovia and stop the extraction, and uses Domestic Operations Agency goons to arrest <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/Stalker">Stalker</Link>. When his plot to eliminate Strawhacker is exposed, he is forced to resign. Years later, Crowther resurfaces in Benzheen, where he confronts <Link to="/character-bios/Duke">Duke</Link>, <Link to="/character-bios/Roadblock">Roadblock</Link>, and Dr. Claire Hauser.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Trying to Stop Hawk from leading G.I. Joe</h2>
          <img src={crowther1} alt="General Crowther" className="profile-block-img" />
          <p>
            Prior to the formation of G.I. Joe, Major General Crowther confronts Lt. Col. Abernathy (<Link to="/character-bios/Hawk">Hawk</Link>) in Borovia over an incident in which one of <Link to="/character-bios/Hawk">Abernathy</Link>'s sergeants beat a terrorist. Crowther demands to know who is responsible, and <Link to="/character-bios/Hawk">Abernathy</Link> answers simply, "I am, sir." Crowther tells him that his sergeant will take the fall. <Link to="/character-bios/Hawk">Abernathy</Link> insists that responsibility runs all the way up the chain of command and refuses to abandon his sergeant. Disgusted, Crowther leaves, telling <Link to="/character-bios/Hawk">Abernathy</Link> the matter is headed to the Provost and JAG. Crowther then initiates a court-martial against <Link to="/character-bios/Hawk">Abernathy</Link>.
          </p>
          <p>
            A closed-door court-martial follows, attended by <Link to="/character-bios/Flagg">Brigadier General Flagg</Link> and his assistant, Sparks. <Link to="/character-bios/Hawk">Abernathy</Link> continues to stand by his sergeant, telling the court that he would have done the very same thing in the man's place, and that he cannot, in good conscience, let the sergeant take the blame for a decision any officer of sound moral standing would have made. It is an argument that leaves every officer above him morally obligated to fall on the sword alongside him if they will not. <Link to="/character-bios/Flagg">General Flagg</Link> is impressed, and <Link to="/character-bios/Hawk">Abernathy</Link> is acquitted (G.I. Joe Declassified #1).
          </p>
          <p>
            With <Link to="/character-bios/Hawk">Abernathy</Link> acquitted, Crowther hires three mercenaries to kill him, preventing him from leading G.I. Joe. E-4 Steinberg (<Link to="/character-bios/Clutch">Clutch</Link>), <Link to="/character-bios/Austin">Major General Austin</Link>'s driver, is sent to deliver a blindfolded <Link to="/character-bios/Hawk">Abernathy</Link> from McGuire Air Force Base to Fort Holabird. While driving, a van carrying three occupants pulls alongside <Link to="/character-bios/Clutch">Clutch</Link>. The van's back door opens, revealing a thug armed with a .50-cal machine gun. <Link to="/character-bios/Clutch">Clutch</Link> speeds up and drives alongside the van's passenger side, where one of the occupants draws a gun. <Link to="/character-bios/Clutch">Clutch</Link> rams his Tahoe into the side of the van and elbows the gunman in the face, breaking his nose. He forces the van into the freeway divider, sending it up in flames. <Link to="/character-bios/Clutch">Clutch</Link> delivers his passenger to Fort Holabird, where no one bats an eye when the Tahoe comes back damaged (G.I. Joe Declassified #2).
          </p>
          <p>
            <Link to="/character-bios/Flagg">General Flagg</Link> and Sparks confront Crowther in his office, telling him they know he is part of the secret cabal known as the Jugglers, that he has gone rogue, and that he hired the three mercenaries to kill <Link to="/character-bios/Hawk">Lt. Col. Abernathy</Link>. <Link to="/character-bios/Flagg">Flagg</Link> presents audio and video evidence of Crowther's dealings with the mercenary Major Bludd, and uses the leverage to have <Link to="/character-bios/Hawk">Abernathy</Link> assigned to command the newly forming G.I. Joe team (G.I. Joe Declassified #3).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Ambush at Rhein Main AFB</h2>
          <img src={crowther2} alt="General Crowther and the Jugglers oppose the Strawhacker rescue" className="profile-block-img" />
          <p className="italics">
            The <Link to="/character-bios/Baroness">Baroness</Link> shoots <Link to="/character-bios/Scarlett">Scarlett</Link> in the head at the Bern Institute in Switzerland (<Link to="/comic-issues/Issue93">Issue #93</Link>), leaving her in a coma with her fate unknown (<Link to="/comic-issues/Issue94">Issue #94</Link>). <Link to="/character-bios/Scarlett">Scarlett</Link> is taken to Midtown Hospital in New York. The doctors do not know when, if ever, she will come out of her coma, or whether she will be able to live a normal life again if she does (Issue #97). Time passes. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> stays by her side, and <Link to="/character-bios/StormShadow">Storm Shadow</Link> remains at the hospital to support his friend. One day, <Link to="/character-bios/Scarlett">Scarlett</Link>'s sister, <Link to="/character-bios/Sioban">Sioban O'Hara</Link>, an attorney-at-law, arrives with a court order to terminate her life-support systems (Issue #101).
          </p>
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link> wants to give his friend a mission to take his mind off the upcoming termination of <Link to="/character-bios/Scarlett">Scarlett</Link>'s life support. He steals the George Strawhacker file from the vault at Fort Leonard. Strawhacker, an agent of an unnamed American intelligence agency, is the fiancé of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' late twin sister and is being held prisoner in a Borovian gulag. <Link to="/character-bios/StormShadow">Storm Shadow</Link> believes that a mission to rescue someone so dear to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> will help him heal, so he infiltrates the Jugglers' chamber inside the Pentagon and threatens them into authorizing the mission. Crowther is the head of the Jugglers.
          </p>
          <p>
            A B-2 stealth bomber flies over Borovia, carrying <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, and <Link to="/character-bios/Stalker">Stalker</Link>. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> makes a HALO jump into Borovia (Issue #103). When the B-2 returns to Rhein Main Air Force Base in Frankfurt, Germany, Crowther is waiting with Military Police. The MPs shoot <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/Stalker">Stalker</Link> with tranquilizer darts. Just before <Link to="/character-bios/StormShadow">Storm Shadow</Link> loses consciousness, Crowther informs him that he has sent a freelance hit man, Major Bludd, to deal with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> before he can complete his mission. He also lets <Link to="/character-bios/StormShadow">Storm Shadow</Link> know that <Link to="/character-bios/Scarlett">Scarlett</Link> is out of her coma (Issue #104).
            Crowther has the Domestic Operations Agency take <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/Stalker">Stalker</Link> to the Statue of Liberty in New York (Issue #106). 
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">A Visit to Scarlett’s Hospital Room</h2>
          <img src={crowther3} alt="General Crowther confronts Scarlett in her hospital room" className="profile-block-img" />
          <p>
            Crowther travels to New York and visits the hospital where <Link to="/character-bios/Scarlett">Scarlett</Link> is staying. <Link to="/character-bios/Hawk">Hawk</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> are talking in her hospital room about <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> parachuting into Borovia when Crowther interrupts. He tells <Link to="/character-bios/Scarlett">Scarlett</Link> that he sent <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> on the mission because <Link to="/character-bios/StormShadow">Storm Shadow</Link> blackmailed him into doing so, and that <Link to="/character-bios/StormShadow">Storm Shadow</Link> insisted on giving <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> a dangerous mission. This upsets <Link to="/character-bios/Scarlett">Scarlett</Link>, who demands to know where <Link to="/character-bios/StormShadow">Storm Shadow</Link> is. Crowther assures her that they have <Link to="/character-bios/StormShadow">Storm Shadow</Link> in captivity in New York (Issue #105).
          </p>
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/Stalker">Stalker</Link> escape, defeat the DOA thugs watching them, and become fugitives on the run. Crowther returns to <Link to="/character-bios/Scarlett">Scarlett</Link>'s room and tells her that <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/Stalker">Stalker</Link> have escaped. He believes they are in <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s secret New York base, and he wants to know where it is. <Link to="/character-bios/Scarlett">Scarlett</Link> tells the general that she will take care of this herself.
          </p>
          <p>
            <Link to="/character-bios/Hawk">Hawk</Link> enters the room and asks Crowther to step outside for a private talk, just as <Link to="/character-bios/Sioban">Sioban O'Hara</Link> arrives to visit <Link to="/character-bios/Scarlett">Scarlett</Link>. Outside, <Link to="/character-bios/Hawk">Hawk</Link> slams the general against the wall and demands to know why he is badgering <Link to="/character-bios/Scarlett">Scarlett</Link>. In the meantime, <Link to="/character-bios/Scarlett">Scarlett</Link> ties <Link to="/character-bios/Sioban">Sioban</Link> up, takes her clothes, and escapes the hospital disguised as her (Issue #107).
          </p>
        </section>

        <section className="profile-notes">
          <p className="profile-notes-footnote">
            *The Major General featured in G.I. Joe Declassified is never named. I have assumed this officer is General Crowther, based on his connection to both the Jugglers and Major Bludd.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Crowther;