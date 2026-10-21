import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import crowther1 from './img/crowther/crowther_1.png';

const Crowther: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">General Thurston Crowther</h1>

        <p className="profile-intro">
          General Thurston Crowther is the former head of the Jugglers, a secret cabal of generals inside the Pentagon who quietly wield control over the military from behind the scenes.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Header</h2>
          <img src={crowther1} alt="General Crowther" className="profile-block-img" />
          <p>
            Prior to the formation of G.I. Joe, Major General Crowther confronts Lt. Col. Abernathy (<Link to="/character-bios/Hawk">Hawk</Link>) in Borovia over an incident in which one of Abernathy's sergeants beat a terrorist. Crowther demands to know who is responsible, and Abernathy answers simply, "I am, sir." Crowther tells him that his sergeant will take the fall. Abernathy insists that responsibility runs all the way up the chain of command and refuses to abandon his sergeant. Disgusted, Crowther leaves, telling Abernathy the matter is headed to the Provost and JAG. Crowther then initiates a court-martial against Abernathy.
          </p>
          <p>
            A closed-door court-martial follows, attended by Brigadier <Link to="/character-bios/Flagg">General Flagg</Link> and his assistant, Sparks. Abernathy continues to stand by his sergeant, telling the court that he would have done the very same thing in the man's place, and that he cannot, in good conscience, let the sergeant take the blame for a decision any officer of sound moral standing would have made. It is an argument that leaves every officer above him morally obligated to fall on the sword alongside him if they will not. <Link to="/character-bios/Flagg">General Flagg</Link> is impressed, and Abernathy is acquitted (G.I. Joe Declassified #1).
          </p>
          <p>
            With Abernathy acquitted, Crowther hires three mercenaries to kill him, preventing him from leading G.I. Joe. E-4 Lance J. Steinberg (<Link to="/character-bios/Clutch">Clutch</Link>), Major General <Link to="/character-bios/Austin">Austin</Link>'s driver, is sent to deliver a blindfolded Abernathy from McGuire Air Force Base to Fort Holabird. While driving, a van carrying three occupants pulls alongside <Link to="/character-bios/Clutch">Clutch</Link>. The van's back door opens, revealing a thug armed with a .50-cal machine gun. <Link to="/character-bios/Clutch">Clutch</Link> speeds up and drives alongside the van's passenger side, where one of the occupants draws a gun. <Link to="/character-bios/Clutch">Clutch</Link> rams his Tahoe into the side of the van and elbows the gunman in the face, breaking his nose. He forces the van into the freeway divider, sending it up in flames. <Link to="/character-bios/Clutch">Clutch</Link> delivers his passenger to Fort Holabird, where no one bats an eye when the Tahoe comes back damaged (G.I. Joe Declassified #2).
          </p>
          <p>
            <Link to="/character-bios/Flagg">General Flagg</Link> and Sparks confront Crowther in his office, telling him they know he is part of the secret cabal known as the Jugglers, that he has gone rogue, and that he hired the three mercenaries to kill Lt. Col. Abernathy. <Link to="/character-bios/Flagg">Flagg</Link> presents audio and video evidence of Crowther's dealings with the mercenary Major Bludd, and uses the leverage to have Abernathy assigned to command the newly forming G.I. Joe team (G.I. Joe Declassified #3).
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