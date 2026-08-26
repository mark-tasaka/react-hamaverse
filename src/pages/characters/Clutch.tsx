import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import clutch1 from './img/clutch/clutch_1.png';
import clutch2 from './img/clutch/clutch_2.png';
import clutch3 from './img/clutch/clutch_3.png';
import clutch4 from './img/clutch/clutch_4.png';

const Clutch: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Clutch (Lance Steinberg)</h1>

        <blockquote className="profile-quote">
          <p>"He greases his hair with motor oil, rarely shaves, and chews on the same toothpick for months. Clutch still calls women chicks."*</p>
        </blockquote>

        <p className="profile-intro">
          A colorful character from the beginning, Lance J. Steinberg (Clutch) is one of the original members of G.I. Joe and the team's V.A.M.P. driver. Prior to enlisting, Clutch worked as a mechanic for Mandy Mean Machines and was an avid street racer. He carried his love of fast cars and women over to the team — much to the chagrin of <Link to="/character-bios/Scarlett">Scarlett</Link> and Cover Girl. Over the years, Clutch's pursuit of his female teammates mellowed.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Major General "Iron Butt" Austin's Driver</h2>
          <img src={clutch1} alt="Clutch as General Austin's driver" className="profile-block-img" />
          <p>
            Prior to the formation of G.I. Joe, Clutch serves as General Austin's personal driver. On one assignment, he's ordered to pick up a Tahoe from McGuire Air Force Base and drive it to Fort Holabird. To his surprise, he finds a blindfolded and bound passenger — Col. Abernathy (<Link to="/character-bios/Hawk">Hawk</Link>) — waiting in the backseat. Clutch doesn't engage the passanger in conversation.
          </p>
          <p>
            While driving, a van carrying three occupants pulls alongside Clutch. The van's back door opens, revealing a thug armed with a .50-cal machine gun. Clutch speeds up and drives alongside the van's passenger side; one of its occupants draws a gun. Clutch rams his Tahoe into the side of the van and elbows the gunman in the face, breaking his nose. He forces the van into the freeway divider, sending it up in flames. Clutch delivers his passenger to Fort Holabird.  No one at Fort Holabird bats an eye when the Tahoe came back damaged (G.I. Joe Declassified #2).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Unabashed Skirt Chaser</h2>
          <img src={clutch2} alt="Clutch flirting with his female teammates" className="profile-block-img" />
          <p>
            In the team's early days, Clutch is an unabashed skirt chaser, hitting on the team's female members — <Link to="/character-bios/Scarlett">Scarlett</Link> and Cover Girl. For instance, Cover Girl and Clutch are monitoring the <Link to="/character-bios/Baroness">Baroness</Link> and Major Bludd in the Swiss Alps, dressed in civilian attire and parked in a sports car. Cover Girl tells Clutch, who's driving, that if they stay too close they're sure to be spotted. Clutch suggests they pull over in a dark, secluded alley and "pretend" to make out. Cover Girl replies, "Nice try. Let's take our chances in the open" (Issue #23).
          </p>
          <p>
            <Link to="/character-bios/Scarlett">Scarlett</Link> and Cover Girl keep sharp comebacks ready for Clutch, often anticipating what he is going to say before he opens his mouth. For instance, Clutch tells <Link to="/character-bios/Scarlett">Scarlett</Link> he hasn't been the same since she returned with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> from who knows where (the  <Link to="/comic-issues/Issue21">Silent Castle</Link>). Anticipating his next remark, <Link to="/character-bios/Scarlett">Scarlett</Link> tells him that absence makes the heart grow fonder. Clutch is surprised and hopeful at her remark — until <Link to="/character-bios/Scarlett">Scarlett</Link> adds, "In your case, I grew fond of your absence" (Issue #22).
          </p>
          <p>
            By the time <Link to="/character-bios/LadyJay">Lady Jaye</Link> joins the team, Clutch's pursuit of his female teammates has mellowed.
          </p>
        </section>
                <section className="profile-block">
          <h2 className="profile-block-title">Close Friendship with Grunt</h2>
          <img src={clutch3} alt="Clutch's friendship with Grunt" className="profile-block-img" />
          <p>
            Clutch forms deep friendships with several of his teammates. His best friend is <Link to="/character-bios/RockRoll"><Link to="/character-bios/RockRoll">Rock 'n Roll</Link></Link>, with whom he often spends off-duty hours getting into one adventure or another. Clutch also grows close with <Link to="/character-bios/Grunt">Grunt</Link>. When <Link to="/character-bios/Grunt">Grunt</Link> is honorably discharged and prepares to return to civilian life as a student at Georgia Tech, Clutch is the only Joe waiting for him at the bus stop. <Link to="/character-bios/Grunt">Grunt</Link>  is surprised and pleased to see.  He gives <Link to="/character-bios/Grunt">Grunt</Link> a firm handshake as the bus pulls up. As it departs, Clutch salutes and calls out, "Have a good life... soldier" (Issue #55).
          </p>
          <p>
            On the desk beside <Link to="/character-bios/Grunt">Grunt</Link>'s dorm room bed sits a photo of <Link to="/character-bios/Grunt">himself</Link>, Clutch, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and <Link to="/character-bios/Stalker">Stalker</Link> — a testament to the deep friendship he shares with the three of them (Issue #56).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Broca Beach, New Jersey Shore</h2>
          <img src={clutch4} alt="Clutch and Rock 'n Roll at Broca Beach" className="profile-block-img" />
          <p>
            Clutch and <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> are on vacation, and they travel to a beach town <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> used to visit as a teenager. <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> remarks that the town has really cleaned up — and been is Broca Beach. Little do they know, Broca Beach is now a Cobra-controlled town. When they realize the truth, the two attempt to drive away, but are chased down by Cobra police and the Dreadnoks. The Dreadnoks capture the pair (Issue #89).
          </p>
          <p>
            Clutch and <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> are hooked up to the Brainwave Scanner, subjected to a Manchurian Candidate-style brainwashing process meant to  turn them into unwitting sleeper agents for Cobra. <Link to="/character-bios/Zarana">Zarana</Link> and the <Link to="/character-bios/Baroness">Baroness</Link> oversee the procedure (Issue #90), systematically wiping specific pasts memories and implanting new memories in their place, transforming them into dormant Cobra operatives (Issues #91 and #93).
          </p>
          <p>
            With the Joes now aware that Clutch and <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> are being held by Cobra, the <Link to="/character-bios/Baroness">Baroness</Link> must find a way to return them without raising suspicion. She has the Dreadnoks load the two into the back of an ice cream truck, driven by <Link to="/character-bios/Zarana">Zarana</Link> and <Link to="/character-bios/RoadPig">Road Pig</Link>, with a second truck carrying the rest of the Dreadnoks following behind.
          </p>
          <p>
            The <Link to="/character-bios/Baroness">Baroness</Link> leaks their location to the Joes, who track down the Dreadnoks and free Clutch and <Link to="/character-bios/RockRoll">Rock 'n Roll</Link>. Both men are returned to active duty.
          </p>
          <p>
            An unspecified amount of time passes. Clutch and <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> are stationed at the new Pit in the Utah desert. A pair of teenage girls, having wandered into the restricted area, are being held inside the Pit until their parents can be reached, with Clutch and <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> assigned to watch over them. Nearby, in the desert outside, <Link to="/character-bios/Zarana">Zarana</Link> activates the ultrasonic device — the trigger meant to switch Clutch and <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> into activated killing agents, unleashing chaos on the Joes inside the Pit.
          </p>
          <p>
            Clutch and <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> draw their weapons on the girls — but the fundamental goodness within them resists the programming, and rather than opening fire, both men collapse unconscious. The effects of the Brainwave Scanner are broken for good (Issue #100).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), three versions of Clutch were produced: the original <a href="https://www.yojoe.com/action/82/clutch.shtml" target="_blank" rel="noopener noreferrer">1982 version</a> (with a <a href="https://www.yojoe.com/action/83/clutch1p5.shtml" target="_blank" rel="noopener noreferrer">1983 swivel-arm</a> variant), a <a href="https://www.yojoe.com/action/84/clutch2.shtml" target="_blank" rel="noopener noreferrer">1984 repaint</a>, and the <a href="https://www.yojoe.com/action/93/clutch3.shtml" target="_blank" rel="noopener noreferrer">1993 version</a>. Clutch was one of the original Joes who did not receive a pay-grade promotion when General Austin promoted eight others and assigned them administrative duties to accommodate the team's growth. As a result, all three of Clutch's file cards show his rank as E-4.
          </p>

          <p className="profile-notes-footnote">
            *The quote is from Clutch's 1982 file card.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Clutch;
