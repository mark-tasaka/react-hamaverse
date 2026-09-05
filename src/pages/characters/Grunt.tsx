import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import grunt1 from './img/grunt/grunt_1.png';
import grunt2 from './img/grunt/grunt_2a.png';
import grunt3 from './img/grunt/grunt_3.png';
import grunt4 from './img/grunt/grunt_4.png';
import grunt5 from './img/grunt/grunt_5.png';
import grunt6 from './img/grunt/grunt_6.png';

const Grunt: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Grunt (Robert Graves)</h1>

        <p className="profile-intro">
          Robert W. Graves (Grunt) is one of the original members of G.I. Joe. He eventually leaves the team, taking advantage of the G.I. Bill to pay for college. Grunt attends Georgia Tech, where he meets his future wife, <Link to="/character-bios/Lola">Lola</Link>, and graduates with a master's degree in engineering. After leaving the service, Grunt keeps in touch with the team and makes several guest appearances throughout the series.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Visiting the Mother of a Service Member He Barely Knew</h2>
          <img src={grunt1} alt="Grunt visiting the mother of a fallen fellow trainee" className="profile-block-img" />
          <p>
            One of Grunt's fellow soldiers is killed in a training accident during their AIT (Advanced Infantry Training) course. Despite barely knowing him, Grunt spends his own money and time to visit the young man's mother. When the school's commanding officer, Col. Abernathy (<Link to="/character-bios/Hawk">Hawk</Link>), learns of this, he asks Grunt why he did it. Grunt simply replies, "I thought we were supposed to look after our own, sir" (G.I. Joe Declassified #2). It's implied this act of quiet loyalty leaves a lasting impression on Col. Abernathy, who later recruits Grunt into G.I. Joe.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Helicopter Accident</h2>
          <img src={grunt2} alt="The helicopter accident" className="profile-block-img" />
          <p>
            During one of the team's early missions to the Middle East, Grunt, <Link to="/character-bios/RockRoll">Rock 'n Roll</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and <Link to="/character-bios/Scarlett">Scarlett</Link> are aboard a helicopter, with a second helicopter flying nearby. Neither aircraft has proper dust filters installed, and dust gets sucked into the engine, causing it to stall. The pilot orders the crew to jump. Grunt and <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> leap clear, but <Link to="/character-bios/Scarlett">Scarlett</Link> becomes trapped, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> stays behind to free her.
          </p>
          <p>
            The helicopter crashes. Grunt and <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> rush to the burning wreckage and find a badly burned <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> carrying an unconscious <Link to="/character-bios/Scarlett">Scarlett</Link> in his arms (Issue #27).
          </p>
        </section>


        <section className="profile-block">
          <h2 className="profile-block-title">Leaving G.I. Joe and Meeting Lola</h2>
          <img src={grunt3} alt="Grunt leaving G.I. Joe and meeting Lola" className="profile-block-img" />
          <p>
            When his term of service is up, Grunt is honorably discharged and leaves for civilian life, having been accepted into the engineering program at Georgia Tech. Both <Link to="/character-bios/Hawk">Hawk</Link> and Duke shake his hand and wish him well. At the bus stop, Grunt finds <Link to="/character-bios/Clutch">Clutch</Link> waiting for him. <Link to="/character-bios/Clutch">Clutch</Link> gives him a firm handshake as he boards the bus, and as it pulls away, salutes and calls out, "Have a good life, soldier" (Issue #55).
          </p>
          <p>
            Much to his roommate's chagrin, Grunt keeps up his old habit at Georgia Tech, waking at dawn to run laps at the track. One morning, he meets <Link to="/character-bios/Lola">Lola</Link>, who recognizes him immediately as a former service member — "Only a grunt would get up at dawn for PT," she tells him. <Link to="/character-bios/Lola">Lola</Link> herself is a former Air Cav helicopter mechanic, also using the G.I. Bill to pay for college. The two hit it off. When she asks about his name, Grunt starts to answer, "Gr—" before stopping himself and saying, "Everyone calls me Bob" (Issue #56).
          </p>
        </section>

        
        <section className="profile-block">
          <h2 className="profile-block-title">Rescue Mission in Borovia</h2>
          <img src={grunt4} alt="Grunt's involvement in the Borovia rescue mission" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Stalker">Stalker</Link>, Quick Kick, Snow Job, and Outback are sent on an undercover mission to the People's Democratic Republic of Borovia (a Communist state), disguised as trade emissaries. The mission goes south: <Link to="/character-bios/Stalker">Stalker</Link>, Quick Kick, and Snow Job are captured, while Outback escapes (he wants to stay and fight, but <Link to="/character-bios/Stalker">Stalker</Link> orders him to flee). The U.S. State Department denies any connection to the three captive Joes, and as a result, G.I. Joe is denied a rescue mission (Issue #61).
          </p>
          <p>
            Grunt calls the team and speaks with Roadblock about mounting a rescue anyway, offering to join since his civilian status would give the team plausible deniability. Roadblock tells him a rescue mission — official, covert, or otherwise — simply isn't possible. Shocked, Grunt hangs up and looks at the photo he keeps by his bed of <Link to="/character-bios/Stalker">Stalker</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Clutch">Clutch</Link>, and himself — his attention lingering on <Link to="/character-bios/Stalker">Stalker</Link> (Issue #62).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Rural Virginia Hospital Raid</h2>
          <img src={grunt5} alt="The rural Virginia hospital raid" className="profile-block-img" />
          <p>
            In the aftermath of the Joes' participation in the Cobra Civil War on Cobra Island, the team is relieved from active duty and placed under arrest pending investigation. Roadblock accompanies Generals <Link to="/character-bios/Hawk">Hawk</Link> and Hollingsworth to the Pentagon when they're taken into custody, but manages to escape, making his way to Dr. Adele Burkhart's home in the Georgetown section of Washington, D.C. (Issue #77).
          </p>
          <p>
            Grunt, <Link to="/character-bios/Lola">Lola</Link>, <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> join Roadblock at Dr. Burkhart's home, with <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, and <Link to="/character-bios/Billy">Billy</Link> arriving soon after. <Link to="/character-bios/Jinx">Jinx</Link>, having accessed the Defense Language Institute's computer system, learns that Generals <Link to="/character-bios/Hawk">Hawk</Link> and Hollingsworth are being held in a hospital in rural Virginia. More Joes soon arrive: Cover Girl, Dusty, Bazooka, Barbecue, <Link to="/character-bios/Flash">Flash</Link>, Wet-Suit, Snow Job, <Link to="/character-bios/Steeler">Steeler</Link>, and <Link to="/character-bios/Zap">Zap</Link>.
          </p>
          <p>
            Grunt and <Link to="/character-bios/Lola">Lola</Link> join the others for the rescue mission, with Dr. Burkhart insisting on coming along as well. Film crews are on scene at the hospital as the Joes carry out their raid. Destro arrives and presents receipts from M.A.R.S. on camera, clearing the Joes of any wrongdoing (Issue #78).
          </p>
        </section>
                <section className="profile-block">
          <h2 className="profile-block-title">Engineering Consultant for the U.S. State Department</h2>
          <img src={grunt6} alt="Grunt as an engineering consultant for the U.S. State Department" className="profile-block-img" />
          <p>
            Grunt marries <Link to="/character-bios/Lola">Lola</Link>, and the two have a daughter. He becomes an engineer and is eventually employed by the U.S. State Department as an engineering consultant, while <Link to="/character-bios/Lola">Lola</Link> finds work with an unidentified three-letter U.S. government agency (this is implied in Issue #198, when Grunt describes her as having security clearance well above his pay grade).
          </p>
          <p>
            In Sierra Gordo, Grunt, as the State Department's engineering consultant, attends an outdoor press conference alongside Sierra Gordo President Velez and U.S. Ambassador Huntley Pierce-Bryson. The group comes under attack by masked gunmen, and several of the U.S. Marines providing security are killed. Drawing on his military training, Grunt grabs an assault rifle from a fallen Marine and returns fire, protecting the President and Ambassador. The President, Ambassador, Grunt, and a surviving Marine are taken captive as the events play out live on TV. Watching the events unfoldfrom TV monitors in the Pit, the G.I. Joe team mobilizes for a rescue mission to Sierra Gordo (Issue #193).
          </p>
          <p>
            The captives are taken to a Terror Drome in the jungle, where the masked attackers are revealed to be Revanche androids. Meanwhile, reporters surround the Graves family home in Northern Virginia, where <Link to="/character-bios/Lola">Lola</Link> and their daughter live. After dealing with the press, <Link to="/character-bios/Lola">Lola</Link> retrieves her go-bag — a briefcase containing currency, passports, a firearm, and ammunition — reassures her daughter that she's going to bring daddy home, and departs for Sierra Gordo (Issue #196).
          </p>
          <p>
            Grunt, the President, the Ambassador, and the Marine escape the Terror Drome, battling the Android Terrorists along the way. The Ambassador, a former U.S. Marine himself, is badly hit and succumbs to blood loss. Outside the Terror Drome, Grunt encounters <Link to="/character-bios/Lola">Lola</Link>, and together they engage the remaining Android Terrorists. The Joes arrive. In the aftermath of the battle, Duke calls Grunt by his code name. Grunt simply replies, "It's just Bob Graves".  Duke says, you will always be Grunt in our roster (Issue #198).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), three versions of Grunt were produced: the <a href="https://www.yojoe.com/action/82/grunt.shtml" target="_blank" rel="noopener noreferrer">1982 straight-arm version</a> (<a href="https://www.yojoe.com/action/83/grunt1p5.shtml" target="_blank" rel="noopener noreferrer">1983 swivel-arm version</a>), the <a href="https://www.yojoe.com/action/83/grunt2.shtml" target="_blank" rel="noopener noreferrer">1983 repaint</a>, and the <a href="https://www.yojoe.com/action/91/grunt3.shtml" target="_blank" rel="noopener noreferrer">1991 version</a>. The 1982 and 1983 file cards list his rank as E-4 (Corporal or Specialist 4*). In Issue #33, Grunt and seven other of the original Joes receive a one-paygrade promotion from <Link to="/character-bios/Austin">General Austin</Link>, assigned administrative duties as the team expands — reflected in his 1991 file card, which lists him as an E-5 (Sergeant). Grunt was out of service at the time, attending Georgia Tech.
          </p>
          <p className="profile-notes-footnote">
            *The rank of Specialist 4 existed until 1985, when the other Specialist ranks were phased out, Specialist 4 became "Specialist." A Specialist shares the same pay grade as a Corporal, yet Corporals are NCOs and hold authority over Specialists.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Grunt;
