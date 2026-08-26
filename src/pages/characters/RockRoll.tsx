import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import rockRoll1 from './img/rockRoll/rockRoll_1.png';
import rockRoll2 from './img/rockRoll/rockRoll_2.png';
import rockRoll3 from './img/rockRoll/rockRoll_3.png';
import rockRoll4 from './img/rockRoll/rockRoll_4.png';

const RockRoll: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Rock 'n Roll (Craig McConnell)</h1>

        <blockquote className="profile-quote">
          <p>"Rock 'n Roll is cunning but naive; forceful but shy. Possesses a strong sense of loyalty to his teammates and is sincerely concerned about their well being. A man of honor and integrity who can be counted on to hold the line."</p>
        </blockquote>

        <p className="profile-intro">
          Craig S. McConnell (Rock 'n Roll) is one of the original members of G.I. Joe and the team's heavy machine gunner. Born and raised in Malibu, California, he was an avid surfer, weightlifter, and guitarist in a local band prior to enlisting. Since joining G.I. Joe, Rock 'n Roll has formed a close friendship with <Link to="/character-bios/Clutch">Clutch</Link>, and the two are often inseparable off duty — a habit that tends to land them in one adventure or another.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Shotgun Don</h2>
          <img src={rockRoll1} alt="Rock 'n Roll's encounter with Shotgun Don" className="profile-block-img" />
          <p>
            Craig (Rock 'n Roll) and his friend Mandy are surfing in Malibu when a wave pushes Mandy into the pier, impaling his chest on a nail — a life-and-death situation. A lifeguard rushes to treat him. Craig asks if Mandy will die; the lifeguard replies, "Not on my watch!" Craig notices a Ranger tab tattooed on the lifeguard's shoulder.  The lifeguard treats Mandy's wound using a bystander's chip bag to seal the wound and stop air from escaping Mandy's lungs.  He then elevates his legs to keep him stable until the paramedics arrive.
          </p>
          <p>
            After the paramedics take Mandy away, Craig thanks the lifeguard, and points to the tattoo saying, "You sure don't look like a park ranger". The lifeguard tells him he was an Airborne Ranger, adding, "Rangers rule the night," as he walks off. Craig overhears two surfers talking nearby — one recognizes the lifeguard as Shotgun Don, a legendary surfer; the other remarks it's a shame he threw it all away to join the Army (G.I. Joe Declassified #2). The encounter leaves a lasting impression on Craig, and is likely what led him to enlist.
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Helicopter Accident</h2>
          <img src={rockRoll2} alt="The helicopter accident" className="profile-block-img" />
          <p>
            During one of the team's early missions to the Middle East, Rock 'n Roll, <Link to="/character-bios/Grunt">Grunt</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and <Link to="/character-bios/Scarlett">Scarlett</Link> are aboard a helicopter, with a second helicopter flying nearby. Neither aircraft has proper dust filters installed, and dust gets sucked into the engine, causing it to stall. The pilot orders the crew to jump. Rock 'n Roll and <Link to="/character-bios/Grunt">Grunt</Link> leap clear, but <Link to="/character-bios/Scarlett">Scarlett</Link> becomes trapped, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> stays behind to free her.
          </p>
          <p>
            The helicopter crashes. <Link to="/character-bios/Grunt">Grunt</Link> and Rock 'n Roll rush to the burning wreckage and find a badly burned <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> carrying an unconscious <Link to="/character-bios/Scarlett">Scarlett</Link> in his arms (Issue #27).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Breakout at Dulles Airport</h2>
          <img src={rockRoll3} alt="Rock 'n Roll's breakout at Dulles Airport" className="profile-block-img" />
          <p>
            In the aftermath of the Joes' participation in the Cobra Civil War on Cobra Island, the team is relieved from active duty and placed under arrest pending investigation. Roadblock accompanies Generals <Link to="/character-bios/Hawk">Hawk</Link> and Hollingsworth to the Pentagon when they're taken into custody, but manages to escape, making his way to Dr. Adele Burkhart's home in the Georgetown section of Washington, D.C. (Issue #77).
          </p>
          <p>
            Rock 'n Roll meets up with <Link to="/character-bios/Grunt">Grunt</Link> (now a civilian) and his girlfriend <Link to="/character-bios/Lola">Lola</Link> (a former service member) at Dr. Burkhart's home. He's tasked with picking up <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, and <Link to="/character-bios/Billy">Billy</Link> at Dulles Airport (<Link to="/character-bios/Jinx">Jinx</Link> has intelligence where Generals <Link to="/character-bios/Hawk">Hawk</Link> and Hollingsworth are being held). Rock 'n Roll repaints an Army military police car with yellow water-based paint and adds red flames over top.  The car stands out like a sore thumb.
          </p>
          <p>
            When Rock 'n Roll pulls up to the front of the airport, he finds <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, and <Link to="/character-bios/Billy">Billy</Link> in cuffs, surrounded by Domestic Operations Agency (DOA) goons. Rock 'n Roll calls out to the trio, who use their ninja training to free themselves and knock out the DOA thugs before piling into the car. The car speeds off, DOA vehicles in pursuit.
          </p>
          <p>
            Rock 'n Roll drives through a car wash, donning a military police helmet and shirt along the way — the paint washing clean off the car as it exits. He slaps a police siren onto the roof, and the military in area assumes he's another MP, letting him continue on to his destination.
          </p>
          <p>
            At Dr. Burkhart's home, <Link to="/character-bios/Jinx">Jinx</Link> informs the group that <Link to="/character-bios/Hawk">Hawk</Link> and Hollingsworth are being held at St. Lo's infirmary in rural Virginia. Shortly after, Cover Girl, Dusty, Bazooka, Barbecue, Flash, Wet-Suit, Snow Job, Steeler, and Zap arrive in a telephone truck. Dr. Burkhart and <Link to="/character-bios/Lola">Lola</Link> join the Joes on the hospital raid. Film crews are on scene as the Joes carry out their raid, and Destro arrives to present receipts from M.A.R.S. on camera, clearing the Joes of any wrongdoing (Issue #78).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Broca Beach, New Jersey Shore</h2>
          <img src={rockRoll4} alt="Rock 'n Roll and Clutch at Broca Beach" className="profile-block-img" />
          <p>
            Rock 'n Roll and <Link to="/character-bios/Clutch">Clutch</Link> are on vacation, and they travel to a beach town Rock 'n Roll used to visit as a teenager. He remarks that the town has really cleaned up — and been renamed Broca Beach. Little do they know, Broca Beach is now a Cobra-controlled town. When they realize the truth, the two attempt to drive away, but are chased down by Cobra police and the Dreadnoks. The Dreadnoks capture the pair (Issue #89).
          </p>
          <p>
            Rock 'n Roll and <Link to="/character-bios/Clutch">Clutch</Link> are hooked up to the Brainwave Scanner, subjected to a Manchurian Candidate-style brainwashing process meant to turn them into unwitting sleeper agents for Cobra. <Link to="/character-bios/Zarana">Zarana</Link> and the <Link to="/character-bios/Baroness">Baroness</Link> oversee the procedure (Issue #90), systematically wiping specific past memories and implanting new ones in their place, transforming them into dormant Cobra operatives (Issues #91 and #93).
          </p>
          <p>
            With the Joes now aware that Rock 'n Roll and <Link to="/character-bios/Clutch">Clutch</Link> are being held by Cobra, the <Link to="/character-bios/Baroness">Baroness</Link> must find a way to return them without raising suspicion. She has the Dreadnoks load the two into the back of an ice cream truck, driven by <Link to="/character-bios/Zarana">Zarana</Link> and <Link to="/character-bios/RoadPig">Road Pig</Link>, with a second truck carrying the rest of the Dreadnoks following behind.
          </p>
          <p>
            The <Link to="/character-bios/Baroness">Baroness</Link> leaks their location to the Joes, who track down the Dreadnoks and free Rock 'n Roll and <Link to="/character-bios/Clutch">Clutch</Link>. Both men are returned to active duty.
          </p>
          <p>
            An unspecified amount of time passes. Rock 'n Roll and <Link to="/character-bios/Clutch">Clutch</Link> are stationed at the new Pit in the Utah desert. A pair of teenage girls, having wandered into the restricted area, are being held inside the Pit until their parents can be reached, with Rock 'n Roll and <Link to="/character-bios/Clutch">Clutch</Link> assigned to watch over them. Nearby, in the desert outside, <Link to="/character-bios/Zarana">Zarana</Link> activates the ultrasonic device — the trigger meant to switch Rock 'n Roll and <Link to="/character-bios/Clutch">Clutch</Link> into activated killing agents, unleashing chaos on the Joes inside the Pit.
          </p>
          <p>
            Rock 'n Roll and <Link to="/character-bios/Clutch">Clutch</Link> draw their weapons on the girls — but the fundamental goodness within them resists the programming, and rather than opening fire, both men collapse unconscious. The effects of the Brainwave Scanner are broken for good (Issue #100).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), four versions of Rock 'n Roll were produced: the <a href="https://www.yojoe.com/action/82/rocknroll.shtml" target="_blank" rel="noopener noreferrer">1982 version</a> (with a <a href="https://www.yojoe.com/action/83/rocknroll1p5.shtml" target="_blank" rel="noopener noreferrer">1983 swivel-arm</a> variant), the <a href="https://www.yojoe.com/action/89/rocknroll2.shtml" target="_blank" rel="noopener noreferrer">1989 version</a>, the <a href="https://www.yojoe.com/action/91/rocknroll3.shtml" target="_blank" rel="noopener noreferrer">1991 version</a>, and the <a href="https://www.yojoe.com/action/93/rocknroll4.shtml" target="_blank" rel="noopener noreferrer">1993 version</a>. His original 1982 file card lists his rank as E-5; the 1989 file card lists him as E-6; the 1991 file card lists him as E-9; and the 1993 file card lists him as E-4. In Issue #33, <Link to="/character-bios/Austin">General Austin</Link> promotes Rock 'n Roll and seven other original team members by one pay grade, assigning them administrative duties as the roster grows — making the E-6 on his 1989 file card accurate. I suspect the ranks listed on his 1991 and 1993 file cards were errors.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default RockRoll;
