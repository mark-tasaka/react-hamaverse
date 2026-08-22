import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import lola1 from './img/lola/lola_1.png';
import lola2 from './img/lola/lola_2.png';
import lola3 from './img/lola/lola_3.png';

const Lola: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Lola Graves</h1>

        <p className="profile-intro">
          Lola is a former Air Cav helicopter mechanic who uses the G.I. Bill to attend Georgia Tech. One morning, she calls out "Grunt!" to a fellow student running on the track, telling him she can tell he's a former service member like herself — only a grunt would get up at dawn for hard PT. The student introduces himself as Bob (<Link to="/character-bios/Grunt">Grunt</Link>), and says he served in the Chaplain's Assistant Motor Pool at Fort Wadsworth. The two fall in love, marry, and have a daughter.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Georgia Tech</h2>
          <img src={lola1} alt="Lola meeting Grunt at Georgia Tech" className="profile-block-img" />
          <p>
            One morning, Lola spots a fellow student running laps on the track and calls out, "Grunt!" — recognizing him as a former service member like herself. Surprised, he asks how she knew. "Only a grunt would get up at the crack of dawn for PT and still be wearing his dog tags," she replies. Lola tells him she served four years as an Air Cav helicopter mechanic, then asks whether he'd been an Airborne Ranger, Special Forces, or some other elite unit. He tells her he was just another grease monkey at the Chaplain's Assistant Motor Pool at Fort Wadsworth.
          </p>
          <p>
            Lola asks for his name. He starts to say "Grunt" out of habit, then catches himself: "Bob. Everyone calls me Bob." The two hit it off (Issue #56).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Joining Up with Bob's Old Team Members</h2>
          <img src={lola2} alt="Lola joining Grunt's former G.I. Joe teammates" className="profile-block-img" />
          <p>
            In the aftermath of the Joes' participation in the Cobra Civil War on Cobra Island, the team is relieved from active duty and placed under arrest pending an investigation. Roadblock, accompanying Generals <Link to="/character-bios/Hawk">Hawk</Link> and Hollingsworth to the Pentagon when they're taken into custody, manages to escape and makes his way to Dr. Adele Burkhart's home in the Georgetown section of Washington, D.C. (Issue #77).
          </p>
          <p>
            Lola and Bob (<Link to="/character-bios/Grunt">Grunt</Link>) meet Roadblock there, followed by <Link to="/character-bios/Clutch">Clutch</Link> and <Link to="/character-bios/RockRoll">Rock 'n Roll</Link>, who arrive after picking up <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, and <Link to="/character-bios/Billy">Billy</Link> at the airport. <Link to="/character-bios/Jinx">Jinx</Link>, having accessed the Defense Language Institute's computer system in San Francisco, knows that Generals <Link to="/character-bios/Hawk">Hawk</Link> and Hollingsworth are being held in a hospital in rural Virginia. Soon after, a truck arrives carrying more Joes: Cover Girl, Duke, Bazooka, Barbecue, Flash, Wet-Suit, Snow Job, Steeler, and Zap.
          </p>
          <p>
            Lola joins the rescue mission alongside Bob's former teammates, with Dr. Burkhart insisting on coming along as well. Film crews are on scene at the hospital as the Joes carry out their raid, engaging Domestic Operations Agency goons in a firefight. Destro arrives and presents receipts from M.A.R.S. on camera, clearing the Joes of any wrongdoing (Issue #78).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Sierra Gordo</h2>
          <img src={lola3} alt="Lola's rescue mission to Sierra Gordo" className="profile-block-img" />
          <p>
            Lola marries Bob (<Link to="/character-bios/Grunt">Grunt</Link>), and the two have a daughter. Bob becomes an engineer and is eventually employed by the U.S. State Department as an engineering consultant, while Lola finds work with an unidentified three-letter U.S. government agency — implied in Issue #198, when Bob describes her as having security clearance well above his own pay grade.
          </p>
          <p>
            While working in Sierra Gordo as the State Department's consultant, Bob (<Link to="/character-bios/Grunt">Grunt</Link>) is present at an outdoor press conference with Sierra Gordo President Velez and U.S. Ambassador Huntley Pierce-Bryson when the group comes under attack by masked gunmen (Revanche androids in disguise). Several of the U.S. Marines providing security are killed, and the President, Ambassador, Bob, and a surviving young Marine are taken captive — the entire event broadcast live on TV (Issue #193).
          </p>
          <p>
            The Graves family home in Northern Virginia is soon surrounded by film crews hoping to interview Lola about her husband's situation. When one overeager reporter pushes his way through the front door and shoves a microphone in her daughter's face, Lola knocks him out cold with a single punch, then orders the rest off her lawn.
          </p>
          <p>
            Later, Lola retrieves a hidden go-bag containing cash, passports, a 9mm pistol, and ammunition. She packs the money and passports into a suitcase and tucks the pistol into her waistband at the small of her back. When her daughter asks if she's going to bring daddy home, Lola tells her, "You betcha, sweetie" (Issue #196).
          </p>
          <p>
            Lola's security clearance grants her access to intelligence pinpointing where the captives are being held — a Terror Drome near an abandoned mine. Arriving at the Sierra Gordo airport, Lola meets up with Bob's former G.I. Joe teammates, commandeers a motorcycle, and leads them to the Terror Drome (Issue #197).
          </p>
          <p>
            Outside the Terror Drome, Lola engages the Revanche androids just as Bob, the young Marine, and the President — having escaped the compound themselves — join the fight. When the battle ends, Lola and Bob (<Link to="/character-bios/Grunt">Grunt</Link>) embrace (Issue #198).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Lola;
