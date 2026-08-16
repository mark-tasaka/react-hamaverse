import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import grunt1 from './img/grunt/grunt_1.png';
import grunt2 from './img/grunt/grunt_2.png';
import grunt3 from './img/grunt/grunt_3.png';
import grunt4 from './img/grunt/grunt_4.png';
import grunt5 from './img/grunt/grunt_5.png';

const Grunt: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Grunt (Robert Graves)</h1>

        <p className="profile-intro">
          Robert W. Graves (Grunt) is one of the original members of G.I. Joe. He eventually leaves the team, taking advantage of the G.I. Bill to pay for college. Grunt attends Georgia Tech, where he meets his future wife, Lola, and graduates with a master's degree in engineering. After leaving the service, Grunt keeps in touch with the team and makes several guest appearances throughout the series.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Visiting the Mother of a Service Member He Barely Knew</h2>
          <img src={grunt1} alt="Grunt visiting the mother of a fallen fellow trainee" className="profile-block-img" />
          <p>
            One of Grunt's fellow trainees is killed in a training accident during their AIT (Advanced Infantry Training) course. Despite barely knowing him, Grunt spends his own money and time to visit the young man's mother. When the school's commanding officer, Col. Abernathy (<Link to="/character-bios/Hawk">Hawk</Link>), learns of this, he asks Grunt why he did it. Grunt simply replies, "I thought we were supposed to look after our own, sir" (G.I. Joe Declassified #2). It's implied this act of quiet loyalty leaves a lasting impression on Col. Abernathy, who later recruits Grunt into G.I. Joe.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Helicopter Accident</h2>
          <img src={grunt2} alt="The helicopter accident" className="profile-block-img" />
          <p>
            During one of the team's early missions to the Middle East, Grunt, Rock 'n Roll, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and <Link to="/character-bios/Scarlett">Scarlett</Link> are aboard a helicopter, with a second helicopter flying nearby. Neither aircraft has proper dust filters installed, and dust gets sucked into the engine, causing it to stall. The pilot orders the crew to jump. Grunt and Rock 'n Roll leap clear, but <Link to="/character-bios/Scarlett">Scarlett</Link> becomes trapped, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> stays behind to free her.
          </p>
          <p>
            The helicopter crashes. Grunt and Rock 'n Roll rush to the burning wreckage and find a badly burned <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> carrying an unconscious <Link to="/character-bios/Scarlett">Scarlett</Link> in his arms (Issue #27).
          </p>
        </section>


        <section className="profile-block">
          <h2 className="profile-block-title">Leaving G.I. Joe and Meeting Lola</h2>
          <img src={grunt3} alt="Grunt leaving G.I. Joe and meeting Lola" className="profile-block-img" />
          <p>
            When his term of service is up, Grunt is honorably discharged and leaves for civilian life, having been accepted into the engineering program at Georgia Tech. Both <Link to="/character-bios/Hawk">Hawk</Link> and Duke shake his hand and wish him well. At the bus stop, Grunt finds Clutch waiting for him. Clutch gives him a firm handshake as he boards the bus, and as it pulls away, salutes and calls out, "Have a good life, soldier" (Issue #55).
          </p>
          <p>
            Much to his roommate's chagrin, Grunt keeps up his old habit at Georgia Tech, waking at dawn to run laps at the track. One morning, he meets Lola, who recognizes him immediately as a former service member — "Only a grunt would get up at dawn for PT," she tells him. Lola herself is a former Air Cav helicopter mechanic, also using the G.I. Bill to pay for college. The two hit it off. When she asks about his name, Grunt starts to answer, "Gr—" before stopping himself and saying, "Everyone calls me Bob" (Issue #56).
          </p>
        </section>

        
        <section className="profile-block">
          <h2 className="profile-block-title">Rescue Mission in Borovia</h2>
          <img src={grunt4} alt="Grunt's involvement in the Borovia rescue mission" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Stalker">Stalker</Link>, Quick Kick, Snow Job, and Outback are sent on an undercover mission to the People's Democratic Republic of Borovia (a Communist state), disguised as trade emissaries. The mission goes south: <Link to="/character-bios/Stalker">Stalker</Link>, Quick Kick, and Snow Job are captured, while Outback escapes (he wants to stay and fight, but <Link to="/character-bios/Stalker">Stalker</Link> orders him to flee). The U.S. State Department denies any connection to the three captive Joes, and as a result, G.I. Joe is denied a rescue mission (Issue #61).
          </p>
          <p>
            Grunt calls the team and speaks with Roadblock about mounting a rescue anyway, offering to join since his civilian status would give the team plausible deniability. Roadblock tells him a rescue mission — official, covert, or otherwise — simply isn't possible. Shocked, Grunt hangs up and looks at the photo he keeps by his bed of <Link to="/character-bios/Stalker">Stalker</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, Clutch, and himself — his attention lingering on <Link to="/character-bios/Stalker">Stalker</Link> (Issue #62).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Rural Virginia Hospital Raid</h2>
          <img src={grunt5} alt="The rural Virginia hospital raid" className="profile-block-img" />
          <p>
            In the aftermath of the Joes' participation in the Cobra Civil War on Cobra Island, the team is relieved from active duty and placed under arrest pending investigation. Roadblock accompanies Generals <Link to="/character-bios/Hawk">Hawk</Link> and Hollingsworth to the Pentagon when they're taken into custody, but manages to escape, making his way to Dr. Adele Burkhart's home in the Georgetown section of Washington, D.C. (Issue #77).
          </p>
          <p>
            Grunt, Lola, Clutch, and Rock 'n Roll join Roadblock at Dr. Burkhart's home, with <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, and <Link to="/character-bios/Billy">Billy</Link> arriving soon after. <Link to="/character-bios/Jinx">Jinx</Link>, having accessed the Defense Language Institute's computer system, learns that Generals <Link to="/character-bios/Hawk">Hawk</Link> and Hollingsworth are being held in a hospital in rural Virginia. More Joes soon arrive: Cover Girl, Duke, Bazooka, Barbecue, Flash, Wet-Suit, Snow Job, Steeler, and Zap.
          </p>
          <p>
            Grunt and Lola join the others for the rescue mission, with Dr. Burkhart insisting on coming along as well. Film crews are on scene at the hospital as the Joes carry out their raid. Destro arrives and presents receipts from M.A.R.S. on camera, clearing the Joes of any wrongdoing (Issue #78).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), three versions of Grunt were produced: the <a href="https://www.yojoe.com/action/82/grunt.shtml" target="_blank" rel="noopener noreferrer">1982 straight-arm version</a> (<a href="https://www.yojoe.com/action/83/grunt1p5.shtml" target="_blank" rel="noopener noreferrer">1983 swivel-arm version</a>), the <a href="https://www.yojoe.com/action/83/grunt2.shtml" target="_blank" rel="noopener noreferrer">1983 repaint</a>, and the <a href="https://www.yojoe.com/action/91/grunt3.shtml" target="_blank" rel="noopener noreferrer">1991 version</a>. The 1982 and 1983 file cards list his rank as E-4 (Corporal or Specialist 4*). In Issue #33, Grunt and seven other of the original Joes receive a one-paygrade promotion from General Austin, assigned administrative duties as the team expands — reflected in his 1991 file card, which lists him as an E-5 (Sergeant). Grunt was out of service at the time, attending Georgia Tech.
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
