import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import jinx1 from './img/jinx/jinx_1.png';
import jinx2 from './img/jinx/jinx_2.png';
import jinx3 from './img/jinx/jinx_3.png';
import jinx4 from './img/jinx/jinx_4.png';
import jinx5 from './img/jinx/jinx_5.png';
import jinx6 from './img/jinx/jinx_6.png';
import jinx7 from './img/jinx/jinx_7.png';
import jinx8 from './img/jinx/jinx_8.png';

const Jinx: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Jinx</h1>

        <p className="profile-intro">
          Jinx is an Arashikage ninja and <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s second cousin on her mother's side. She is introduced a third of the way into the Marvel run (Issue #59), her introduction is closely tied to <Link to="/character-bios/Billy">Billy's</Link> journey. Jinx is introduced alongside the <Link to="/character-bios/BlindMaster">Blind Master</Link>, introducing the reader to more named members of the Arashikage clan.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Training with Snake Eyes in Japan</h2>
          <img src={jinx1} alt="Jinx during Snake Eyes' training in Japan" className="profile-block-img" />
          <p>
            Jinx had known <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> during the years of his training with the Arashikage clan in Japan. This is reflected in the family photo Jinx shows <Link to="/character-bios/Billy">Billy</Link>, which shows an eight-year-old Jinx, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and other key members of the Arashikage clan (Issue #62). It is unclear how well Jinx knew <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> back then, or how long she trained in the Arashikage clan dojo while <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> was living there.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">The Blind Master's New Denver Dojo</h2>
          <img src={jinx2} alt="Jinx confronting Billy at the Blind Master's Denver dojo" className="profile-block-img" />
          <p>
            An amnesiac <Link to="/character-bios/Billy">Billy</Link> watches a class held at the new Denver dojo, taught by the <Link to="/character-bios/BlindMaster">Blind Master</Link>. Watching the class triggers <Link to="/character-bios/Billy">Billy</Link>'s memories of training with <Link to="/character-bios/StormShadow">Storm Shadow</Link>. When the class ends, <Link to="/character-bios/Billy">Billy</Link> sneaks into the dojo. The <Link to="/character-bios/BlindMaster">Blind Master</Link>, sitting cross-legged in meditation, "sees" <Link to="/character-bios/Billy">Billy</Link>, refers to him as a ninja, and asks him to enter and be at peace.
          </p>
          <p>
            The <Link to="/character-bios/BlindMaster">Blind Master</Link> tells <Link to="/character-bios/Billy">Billy</Link> he must first pass a test before he can meet the master. Jinx then enters the dojo. She says she knows about Fred and who he made the suit of armor for, then swings a sword at <Link to="/character-bios/Billy">Billy</Link>. Using his ninja training, <Link to="/character-bios/Billy">Billy</Link> catches the blade between his hands and counters Jinx's attack by locking her arm and exposing the Arashikage tattoo on her forearm. <Link to="/character-bios/Billy">Billy</Link> says the man who gave him this same test — <Link to="/character-bios/StormShadow">Storm Shadow</Link> — also bore the same tattoo on his right forearm (Issue #59).
          </p>
          <p>
            The days pass. <Link to="/character-bios/Billy">Billy</Link> walks away from his father and begins training with Jinx at the dojo. One day, during a sparring match, <Link to="/character-bios/Billy">Billy</Link> again asks why she bears the same tattoo as <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. The <Link to="/character-bios/BlindMaster">Blind Master</Link> shows him a family photo taken fifteen years earlier. Jinx explains who's in it: the <Link to="/character-bios/BlindMaster">Blind Master</Link>, <Link to="/character-bios/Onihashi">Professor Onihashi</Link>, Onihashi's assistant, an eight-year-old Jinx, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, the <Link to="/character-bios/HardMaster">Hard Master</Link>, the <Link to="/character-bios/SoftMaster">Soft Master</Link>, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. The <Link to="/character-bios/BlindMaster">Blind Master</Link> then explains that they are all one big family.
          </p>
          <p>
            The <Link to="/character-bios/BlindMaster">Blind Master</Link> tells <Link to="/character-bios/Billy">Billy</Link> it is time for Jinx to take him to San Francisco so he can learn other secrets and continue his training. The <Link to="/character-bios/BlindMaster">Blind Master</Link> hands Jinx the keys to his car, saying he himself is headed somewhere warm. Jinx drives <Link to="/character-bios/Billy">Billy</Link> to the Defense Language Institute in San Francisco (Issue #62).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Defense Language Institute, San Francisco</h2>
          <img src={jinx3} alt="Jinx at the Defense Language Institute in San Francisco" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Billy">Billy</Link> meets <Link to="/character-bios/Hawk">Hawk</Link> and others at a secret location beneath the Defense Language Institute. There, he also meets <Link to="/character-bios/StormShadow">Storm Shadow</Link> and continues his training as <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s apprentice (Issue #63).
          </p>
          <p>
            Time passes as <Link to="/character-bios/Billy">Billy</Link> resumes his training with <Link to="/character-bios/StormShadow">Storm Shadow</Link> beneath the Defense Language Institute. Jinx comes across data revealing where <Link to="/character-bios/Stalker">Stalker</Link>, Quick Kick, and Snow Job are imprisoned in Borovia. She also finds a news clipping of a Borovian circus troupe showing <Link to="/character-bios/Scarlett">Scarlett</Link> in the background, implying <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and the <Link to="/character-bios/BlindMaster">Blind Master</Link> are with the troupe as well. She interrupts <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/Billy">Billy</Link>'s training to show them the data. Jinx, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, and <Link to="/character-bios/Billy">Billy</Link> depart for Borovia (Issue #66).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Raid on the Borovian Gulag</h2>
          <img src={jinx4} alt="Jinx's raid on the Borovian gulag" className="profile-block-img" />
          <p>
            Jinx, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, and <Link to="/character-bios/Billy">Billy</Link> meet <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link> at the White Clown's circus troupe. The six raid Gulag 23, which houses <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Quick Kick. They infiltrate the gulag, kill the guards, and free the prisoners, including the three Joes. They commandeer an army truck and travel to the border, where they discover a barbed-wire fence and guard towers lining the river bordering Borovia. Fortunately, the White Clown and Orlovsky arrive from the circus, their car hauling the circus cannon. The White Clown fires them across the fence into the river, allowing their escape from Borovia (Issue #66). Jinx, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Billy">Billy</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link> return to San Francisco.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Hospital Raid, Rural Virginia</h2>
          <img src={jinx5} alt="Jinx's involvement in the hospital raid in rural Virginia" className="profile-block-img" />
          <p>
            In the aftermath of the Joes' participation in the Cobra Civil War on Cobra Island, the Joes are relieved from active duty and placed under arrest pending an investigation (Issue #77). <Link to="/character-bios/Hawk">Hawk</Link> and General Hollingsworth are imprisoned in a hospital in rural Virginia. In San Francisco, Jinx accesses the central payroll computer and tracks <Link to="/character-bios/Hawk">Hawk</Link> and Hollingsworth to the hospital. Jinx, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, and <Link to="/character-bios/Billy">Billy</Link> catch a flight to Washington, D.C.
          </p>
          <p>
            When Jinx, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, and <Link to="/character-bios/Billy">Billy</Link> arrive at Dulles Airport, Domestic Operations Agency (DOA) agents arrest the trio and cuff them. As they're escorted outside, they spot Rock 'n Roll and Clutch in a car, calling out to them. The three ninjas slip out of their cuffs, knock out the DOA agents, and board the car.
          </p>
          <p>
            They drive to Dr. Adele Burkhart's home, where they meet Roadblock, <Link to="/character-bios/Grunt">Grunt</Link> (now a civilian), and his girlfriend, Lola (a civilian and former service member). Cover Girl, Duke, Bazooka, Barbecue, Flash, Wet-Suit, Snow Job, Steeler, and Zap later arrive at the house. The Joes mount a raid on the hospital; Dr. Burkhart insists on coming along. Film crews are active inside when <Link to="/character-bios/Hawk">Hawk</Link> and Hollingsworth are cleared, with the arrival of Destro, who presents receipts from MARS on camera, clearing the Joes of wrongdoing (Issue #78).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Billy's Mother</h2>
          <img src={jinx6} alt="Jinx encountering Billy's mother" className="profile-block-img" />
          <p>
            At the Defense Language Institute, a woman claiming to be <Link to="/character-bios/Billy">Billy</Link>'s mother pulls a pistol on Jinx (Issue #83). Capable of disarming her, Jinx instead allows herself to be taken prisoner and leads the woman to the dojo. <Link to="/character-bios/Billy">Billy</Link> recognizes his mother's voice and stops <Link to="/character-bios/StormShadow">Storm Shadow</Link> from attacking — he had always believed his mother died in a car crash when he was young.
          </p>
          <p>
            Jinx and <Link to="/character-bios/StormShadow">Storm Shadow</Link> invite <Link to="/character-bios/Billy">Billy</Link>'s mother to stay for dinner. They learn of Cobra Commander's older brother, Dan, a Vietnam veteran who extended his tours in-country to keep his younger brother from being sent overseas. When Dan returned home from the war, he began driving erratically, as if searching for death behind the wheel — and it was Dan who killed <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' family in the car crash that Cobra Commander later blamed on <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. <Link to="/character-bios/Billy">Billy</Link>'s mother says she has been searching for him for years and has kept a room ready for him in her Berkeley apartment. After dinner, <Link to="/character-bios/Billy">Billy</Link> departs with his mother, leaving <Link to="/character-bios/StormShadow">Storm Shadow</Link> and Jinx behind (Issue #84).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Zartan's Attack</h2>
          <img src={jinx7} alt="Zartan's attack on Jinx and Storm Shadow" className="profile-block-img" />
          <p>
            Zartan believes <Link to="/character-bios/StormShadow">Storm Shadow</Link> will seek revenge on him for killing the <Link to="/character-bios/HardMaster">Hard Master</Link>. Deciding to strike first, he suspects <Link to="/character-bios/StormShadow">Storm Shadow</Link> or Jinx will be at a feudal Japanese museum exhibit in San Francisco, and departs for the city with a group of Red Ninja (Issue #84).
          </p>
          <p>
            In the museum, Zartan — disguised as a bearded middle-aged man — waits in a telephone booth, monitoring the numbers dialed from the adjacent booths. Jinx enters the museum and spots a sword bearing the Arashikage symbol. She enters one of the booths and calls <Link to="/character-bios/StormShadow">Storm Shadow</Link> at the dojo. Zartan obtains <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s number and learns where he's staying, then departs and signals the three Red Ninja disguised as samurai museum exhibits.
          </p>
          <p>
            The Red Ninja attack. Jinx drops the phone, alerting <Link to="/character-bios/StormShadow">Storm Shadow</Link> to the danger, and flees, grabbing the Arashikage sword from the exhibit. She kills all three Red Ninja and flees the museum as guards give chase. Jinx takes off on a motorcycle, heading for the dojo.
          </p>
          <p>
            As she approaches, she sees signs that a battle has already taken place — a damaged Cobra transport helicopter sits in the alley, and several windows are smashed. <Link to="/character-bios/StormShadow">Storm Shadow</Link> spots her and leaps from the fire escape onto the back of her motorcycle. They pursue a Volkswagen van carrying Zartan and a Red Ninja driver. <Link to="/character-bios/StormShadow">Storm Shadow</Link> catches an arrow fired at him by Zartan and fires it back at the Red Ninja driver, sending the van crashing off a bridge into the water (Issue #85).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Battle with the Red Ninja in the High Sierras</h2>
          <img src={jinx8} alt="Jinx's battle with the Red Ninja in the High Sierras" className="profile-block-img" />
          <p>
            In the aftermath of Zartan's attack in San Francisco, Jinx believes he will launch further attacks on <Link to="/character-bios/StormShadow">Storm Shadow</Link>. Jinx, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and <Link to="/character-bios/Scarlett">Scarlett</Link> stay in the High Sierras, keeping watch over <Link to="/character-bios/StormShadow">Storm Shadow</Link>. One night, sitting around a campfire, an arrow is fired into a nearby log. They douse the fire, and a wounded Timber returns with a torn scrap of a Red Ninja's outfit in his mouth. <Link to="/character-bios/StormShadow">Storm Shadow</Link> believes Zartan is ready to meet him and tells Jinx, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and <Link to="/character-bios/Scarlett">Scarlett</Link> to wait behind. <Link to="/character-bios/StormShadow">Storm Shadow</Link> departs for the waterfall — though it isn't Zartan waiting for him there, but the Red Ninja driver he'd struck with the arrow (Issue #90).
          </p>
          <p>
            Jinx, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and Timber are surrounded by Red Ninja while <Link to="/character-bios/StormShadow">Storm Shadow</Link> confronts their leader. The Red Ninja reveal the Arashikage tattoo on their right forearms and say they've come to set things right. A battle ensues. With only three Red Ninja remaining, Jinx and <Link to="/character-bios/Scarlett">Scarlett</Link> have suffered injuries preventing them from continuing to fight. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and Timber kill the remaining three. Jinx spots <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s body drifting down the river; <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and Timber jump in and retrieve the injured <Link to="/character-bios/StormShadow">Storm Shadow</Link> (Issue #91).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            A figure for Jinx was produced in <a href="https://www.yojoe.com/action/87/jinx.shtml" target="_blank" rel="noopener noreferrer">1987</a> — her only figure during the Marvel run (1982–1994). In the 2000s, multiple versions of Jinx's action figure were produced. Jinx's original file card lists her rank as E-5 (Sergeant) and her file name as classified. The <a href="https://www.yojoe.com/action/03/agentjinx.shtml" target="_blank" rel="noopener noreferrer">second (2003)</a> and <a href="https://www.yojoe.com/action/04/agentjinx2.shtml" target="_blank" rel="noopener noreferrer">third (2004)</a> versions of her action figure refer to her as "Agent Jinx," while the versions released in <a href="https://www.yojoe.com/action/12/kimarashikagea.shtml" target="_blank" rel="noopener noreferrer">2012</a> and <a href="https://www.yojoe.com/action/13/kimarashikage2.shtml" target="_blank" rel="noopener noreferrer">2013</a> refer to her as "Kim Arashikage." 
          </p>
          <p>
            I suspect "Kim Arashikage" was used for copyright reasons and serves as the character's code name rather than her real one — I don't believe Jinx's actual name was ever used in the Marvel series. That said, it's reasonable to believe Jinx's surname is Arashikage, even though she is related to <Link to="/character-bios/StormShadow">Storm Shadow</Link> through her mother's side. In Japanese culture, it is not uncommon for a husband and children to adopt the wife's (mother's) surname.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Jinx;