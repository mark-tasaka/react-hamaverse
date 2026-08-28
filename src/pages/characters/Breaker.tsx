import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import breaker1 from './img/breaker/breaker_1.png';
import breaker2 from './img/breaker/breaker_2.png';
import breaker3 from './img/breaker/breaker_3.png';

const Breaker: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Breaker (Alvin Kibbey)</h1>

        <p className="profile-intro">
          Alvin R. Kibbey (Breaker) is one of the original team members and the team's communications specialist. A ham radio enthusiast since the age of ten, Kibbey became fluent in seven languages prior to enlisting. What first brought him to the attention of Colonel <Link to="/character-bios/Hawk">Abernathy</Link>, leading to his recruitment into G.I. Joe, was being caught by the C.I.D. decrypting top-secret transmissions — something he had done simply to see if he could.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">A Run Up the Mountain</h2>
          <img src={breaker1} alt="Breaker's run with Colonel Abernathy" className="profile-block-img" />
          <p>
            Kibbey's first encounter with Colonel <Link to="/character-bios/Hawk">Abernathy</Link> takes place prior to the formation of G.I. Joe. The Criminal Investigations Division (C.I.D.) catches Specialist Kibbey decrypting top-secret transmissions, purely to see if he could. In the process, the C.I.D. also discovers that Kibbey is fluent in seven languages, a skill developed over years spent communicating on ham radio.
          </p>
          <p>
            Kibbey is still in custody when <Link to="/character-bios/Hawk">Abernathy</Link> appears with two backpacks loaded with gear and tells the young specialist they are going for a run — up a mountain. Partway through, <Link to="/character-bios/Hawk">Abernathy</Link> turns to him and asks, "You're not having a hard time keeping up, are you, soldier?" Kibbey simply takes the lead instead, outpacing <Link to="/character-bios/Hawk">Abernathy</Link> for the rest of the climb. Catching his breath at the top, <Link to="/character-bios/Hawk">Abernathy</Link> tells him he has made his point (G.I. Joe Declassified #2).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">The Power of Bubble Gum</h2>
          <img src={breaker2} alt="Breaker's bubble gum saving the team" className="profile-block-img" />
          <p>
            Breaker loves chewing bubble gum and blowing bubbles, a habit that has earned him more than one chewing-out from General Flagg (Issue #3). Odd as it sounds, the habit has come to the team's rescue more than once. During a parade, Breaker, Steeler, and <Link to="/character-bios/Clutch">Clutch</Link> are manning an unarmed M.O.B.A.T. when Cobra agents, disguised as members of the marching band, surround the tank in an attempt to capture it. Over the P.A. system, Breaker blows a bubble and pops it, simulating the sound of the tank's cannon firing — enough to send the marching band surrendering on the spot (Issue #5).
          </p>
          <p>
            Breaker, Gung-Ho, and <Link to="/character-bios/Stalker">Stalker</Link> are captured in Sierra Gordo, bound and transported aboard a rat-infested riverboat. Breaker spits his gum onto the rope binding them, drawing the rats in to gnaw at it. Once the rope is sufficiently weakened, the Joes break free and overpower their Cobra captors (Issue #12).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Death in Trucial Abysmia</h2>
          <img src={breaker3} alt="Breaker's death in Trucial Abysmia" className="profile-block-img" />
          <p>
            Breaker is killed on an ill-fated mission to Trucial Abysmia, a mission that claims the lives of several of his teammates. Lt. Falcon leads a team of Joes into the country, where they are captured by Cobra and thrown into a pit. A S.A.W. Viper opens fire on the captive Joes, killing Doc, Thunder, Crankcase, and Heavy Metal. The surviving Joes manage to escape and steal a Cobra R.A.G.E. tank, but it is later struck, killing Breaker, Quick Kick, and Crazy Legs. Only Falcon, Duke, and Cross Country survive the mission (Issue #109).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), a single version of Breaker was produced: the 1982 version, with a 1983 swivel-arm variant. Breaker's file card lists his rank as E-4, consistent with his being addressed as Specialist Kibbey in G.I. Joe Declassified. In Issue #33, General Austin promotes Breaker, along with seven other original team members, by one pay grade, assigning them administrative duties to accommodate the growing roster. By the time of his death, Breaker's rank had risen to E-5 (Sergeant).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Breaker;
