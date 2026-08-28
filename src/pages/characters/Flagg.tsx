import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import flagg1 from './img/flagg/flagg_1.png';
import flagg2 from './img/flagg/flagg_2.png';
import flagg3 from './img/flagg/flagg_3.png';
import flagg4 from './img/flagg/flagg_4.png';
import flagg5 from './img/flagg/flagg_5.png';
import flagg6 from './img/flagg/flagg_6.png';
import flagg7 from './img/flagg/flagg_7.png';
import flagg8 from './img/flagg/flagg_8.png';

const Flagg: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Brigadier General Lawrence J. Flagg</h1>

        <p className="profile-intro">
          Brigadier General Lawrence J. Flagg (1932–1983) is the original leader of G.I. Joe. General Flagg is a Korean War and Vietnam War veteran, and his decorations include the Silver Star, the Bronze Star, and the Purple Heart. While <Link to="/character-bios/Hawk">Hawk</Link>, the team's field commander, operates out of the Pit at Fort Wadsworth and serves up front with the team, General Flagg operates from the Pentagon, managing the broader political and strategic dimensions of the team's mission.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Lieutenant Colonel Abernathy's Court Martial</h2>
          <img src={flagg1} alt="Lieutenant Colonel Abernathy's court martial" className="profile-block-img" />
          <p>
            General Flagg and his aide, Sparks, attend Lieutenant Colonel <Link to="/character-bios/Hawk">Abernathy</Link>'s closed-door court-martial. Lt. Col. <Link to="/character-bios/Hawk">Abernathy</Link> is on trial over an incident in which one of his sergeants tortured a terrorist to reveal the location of planted explosives in a Borovian refugee camp. Lt. Col. <Link to="/character-bios/Hawk">Abernathy</Link> continues to stand by his sergeant, telling the court that he would have done the very same thing in the man's place — and that he cannot, in good conscience, let the sergeant take the blame for a decision any officer of sound moral standing would have made. It is an argument that leaves every officer above him morally obligated to fall on the sword alongside him if they will not. Lt. Col. <Link to="/character-bios/Hawk">Abernathy</Link> is acquitted. Impressed, General Flagg seeks him out to lead the team he is forming (G.I. Joe Declassified #1).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">A Broken Rangefinder</h2>
          <img src={flagg2} alt="General Flagg recruiting Flash" className="profile-block-img" />
          <p>
            Prior to the formation of G.I. Joe, General Flagg conducts an inspection at the Covert Electronics Shop at Aberdeen Proving Ground. There he meets Specialist Anthony Gambello (Flash), who he learns has made improvements to the laser rangefinders. Flagg asks Gambello the distance to the water tower. As Gambello reaches for the improved rangefinder to measure it, Flagg smashes the device. While Gambello scrambles to fix it, Flagg demands to know the distance anyway.
          </p>
          <p>
            Gambello tells him it is 240 yards, explaining that he was quarterback on his high school football team and became skilled at estimating yardage by eye. Impressed, Flagg orders Sparks to arrange his transfer to Staten Island — to G.I. Joe (G.I. Joe Declassified #2).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Activating Shooter</h2>
          <img src={flagg3} alt="General Flagg activating Shooter" className="profile-block-img" />
          <p>
            Four members of G.I. Joe — <Link to="/character-bios/Stalker">Stalker</Link>, <Link to="/character-bios/RockRoll">Rock 'n Roll</Link>, <Link to="/character-bios/Zap">Zap</Link>, and <Link to="/character-bios/Grunt">Grunt</Link> — are on an operation in Sierra Gordo. <Link to="/character-bios/Austin">Major General Austin</Link> learns they have a wounded prisoner with them and worries the mission could be jeopardized. He contacts General Flagg to handle the situation. On Flagg's behalf, Sparks activates <Link to="/character-bios/Shooter">Shooter</Link>, who arrives in secret in Sierra Gordo. At the extraction site, <Link to="/character-bios/Shooter">Shooter</Link>, operating as a sniper, provides covering fire for the team. She shoots the wounded prisoner, causing him to fall from the helicopter, leaving the rest of the team uncertain what caused the fall. <Link to="/character-bios/Shooter">Shooter</Link>'s involvement gives the Joes plausible deniability (G.I. Joe Declassified #3).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Confronting General Crowther</h2>
          <img src={flagg4} alt="General Flagg confronting General Crowther" className="profile-block-img" />
          <p>
            Major General Crowther* is a member of the Jugglers, a secret cabal of generals within the Pentagon. General Crowther had initiated the court-martial against Lt. Col. <Link to="/character-bios/Hawk">Abernathy</Link> to prevent him from leading the upcoming Special Counter-Terrorist Group Delta, code named G.I. Joe. When <Link to="/character-bios/Hawk">Abernathy</Link> is acquitted, Crowther hires three mercenaries to kill him en route to Fort Holabird. The assassination attempt fails, thanks to the skillful driving of E-4 Lance J. Steinberg (<Link to="/character-bios/Clutch">Clutch</Link>).
          </p>
          <p>
            General Flagg and Sparks confront Crowther in his office, telling him they know he is part of the secret cabal known as the Jugglers, that he has gone rogue, and that he hired the three mercenaries to kill Lt. Col. <Link to="/character-bios/Hawk">Abernathy</Link>. Flagg presents audio and video evidence of Crowther's dealings with the mercenary Major Bludd, using the leverage to have <Link to="/character-bios/Hawk">Abernathy</Link> assigned to command the newly forming G.I. Joe team (G.I. Joe Declassified #1).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">The Dossier</h2>
          <img src={flagg6} alt="The activation of G.I. Joe for Operation Lady Doomsday" className="profile-block-img" />
          <p>
            Dr. Adele Burkhart, the nation's top nuclear physicist and an outspoken critic of the military and government, is captured by Cobra. Dr. Burkhart holds knowledge of the nation's nuclear secrets, and Cobra now has the means to weaponize them.
          </p>
          <p>
            In the Pentagon, <Link to="/character-bios/Austin">Major General Austin</Link> and General Flagg discuss the situation. Both know a direct frontal assault using regular forces could turn into a bloodbath for their side. General Flagg suggests that a botched rescue mission, forcing Cobra's hand into killing Dr. Burkhart, might be the best course of action. <Link to="/character-bios/Austin">General Austin</Link> counters, "Dr. Burkhart's death would be a political embarrassment for the U.S. A rescue mission is needed."
          </p>
          <p>
            General Flagg then points out that the Special Counter-Terrorist Group Delta, code named G.I. Joe, could be used for the mission. General Austin orders the sergeant to pull up the G.I. Joe dossier, which lists the names of fourteen members, including <Link to="/character-bios/Shooter">Shooter</Link> (Issue #1).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Honoring a Secret Hero</h2>
          <img src={flagg5} alt="Jodie Shooter Craig's memorial service" className="profile-block-img" />
          <p>
            SFC Jodie "Shooter" Craig is killed during Operation Lady Doomsday, having operated in secret throughout the mission without the rest of the team aware of her role.
          </p>
          <p>
            General Flagg visits the church where <Link to="/character-bios/Shooter">Shooter</Link>'s mother works as a Sunday school teacher. Though he cannot divulge any details of Jodie's mission, he consoles Mrs. Craig with assurances of her daughter's courage, compassion, and integrity.
          </p>
          <p>
            General Flagg has the team attend <Link to="/character-bios/Shooter">Shooter</Link>'s memorial service. The Joes, puzzled as to why they have been gathered to honor a Chaplain's Assistant School cadre, listen as General Flagg — borrowing a line from <Link to="/character-bios/Grunt">Grunt</Link>'s AIT essay — quotes Amelia Earhart in his eulogy: "Courage is the price that life exacts for granting peace" (G.I. Joe Declassified #3).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">General Flagg's Death</h2>
          <img src={flagg8} alt="General Flagg's death" className="profile-block-img" />
          <p>
            The G.I. Joe modular headquarters, located above the Pit at Fort Wadsworth, comes under attack. Major Bludd, Scarface, and a comatose <Link to="/character-bios/Baroness">Baroness</Link> are being held as prisoners inside. A Cobra trooper flies a F.A.N.G. helicopter to the roof of the headquarters and plants explosives. Major Bludd and Scarface each have one hand chained to the bars of their cell. Major Bludd kicks Doc, knocking him to the floor, while Scarface kicks the gun from General Flagg's hand. Major Bludd grabs the weapon, shoots General Flagg, and seizes the keys from Doc. He unlocks his cuffs and departs with the <Link to="/character-bios/Baroness">Baroness</Link>, leaving Scarface behind.
          </p>
          <p>
            Doc lifts the badly wounded Flagg and begins to leave. Scarface shouts at Doc to free him as well, but Doc tells him Major Bludd took the keys. Doc gets General Flagg out just before the base explodes. General Flagg succumbs to his wounds soon after (Issue #20). He is buried with full honors at Arlington National Cemetery (Issue #22).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            Brigadier General Lawrence J. Flagg is a creation of Mr. Hama. In 1992, a figure for <a href="https://www.yojoe.com/action/92/generalflagg.shtml" target="_blank" rel="noopener noreferrer">General Flagg</a> was released, identifying this version of Flagg as the son of the original — James Longstreet Flagg III. To my knowledge, there is no reference to General Flagg's son anywhere in Mr. Hama's ARAH comic.
          </p>
          <p className="profile-notes-footnote">
            *The Major General featured in G.I. Joe Declassified is never named. I have assumed this officer is General Crowther, based on his connection to both the Jugglers and Major Bludd. In Issue #103, General Crowther hires Major Bludd to travel to Borovia to assassinate <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, in order to prevent him from returning with George Strawhacker.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Flagg;
