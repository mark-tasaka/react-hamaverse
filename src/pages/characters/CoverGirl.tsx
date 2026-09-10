import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import coverGirl1 from './img/coverGirl/coverGirl_1.png';
import coverGirl2 from './img/coverGirl/coverGirl_2.png';
import coverGirl3 from './img/coverGirl/coverGirl_3.png';
import coverGirl4 from './img/coverGirl/coverGirl_4.png';
import coverGirl5 from './img/coverGirl/coverGirl_5.png';
import coverGirl6 from './img/coverGirl/coverGirl_6.png';

const CoverGirl: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Cover Girl (Courtney Krieger)</h1>

        <p className="profile-intro">
          Specialist Courtney A. Krieger (Cover Girl) is the team's armor specialist, operating tanks and armored fighting vehicles. SPC Krieger joins G.I. Joe as the Wolverine MLRS (Multiple Launch Rocket System) operator. She is a skilled mechanic and a capable soldier in her own right, taking on roles well beyond simply operating an AFV.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Baptism by Fire</h2>
          <img src={coverGirl1} alt="Cover Girl's baptism by fire" className="profile-block-img" />
          <p>
            Cover Girl is introduced to the team during a live-fire training exercise, where she demonstrates her skill operating the Wolverine MLRS. Openly confident in her skills and her ability to keep her cool under pressure, Cover Girl draws a measured response from <Link to="/character-bios/Scarlett">Scarlett</Link>, who tells her they will wait to reserve judgment until they see her perform in a real battle.
          </p>
          <p>
            Cover Girl's baptism by fire comes when the team is assigned to provide security for the Treasury Building in Washington, D.C. Cobra H.I.S.S. tanks, smuggled inside tractor-trailers, launch a nighttime surprise attack on the building. Cover Girl destroys two H.I.S.S. tanks with the Wolverine before <Link to="/character-bios/CobraCommander">Cobra Commander</Link>'s own tank sideswipes hers, knocking the Wolverine onto its side. Cover Girl and the three Joes riding with her — Gung-Ho, Tripwire, and Torpedo — leap to safety just in time, escaping injury (Issue #16).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Surveillance in the Swiss Alps</h2>
          <img src={coverGirl2} alt="Cover Girl's surveillance mission in the Swiss Alps" className="profile-block-img" />
          <p>
            Major Bludd takes the badly burned <Link to="/character-bios/Baroness">Baroness</Link> to the Bern Institute of Reconstructive Surgery in Switzerland, where <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link> proposes performing plastic surgery on her. The Joes travel to Switzerland to keep watch, with Cover Girl teamed up with <Link to="/character-bios/Clutch">Clutch</Link>, the unabashed skirt chaser. The two go undercover as a couple, driving a red sports car.
          </p>
          <p>
            Cover Girl and <Link to="/character-bios/Clutch">Clutch</Link> tail Major Bludd's taxi through the streets. Cover Girl tells him they're driving too close and will surely be spotted. <Link to="/character-bios/Clutch">Clutch</Link> suggests they pull into a dark, secluded alley and "pretend" to make out. Cover Girl offers a witty comeback instead: "Nice try, Clutch. Let's take our chances in the open."
          </p>
          <p>
            <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> later arrive, and a car chase erupts down through the Swiss Alps, with the Joes pursuing <Link to="/character-bios/CobraCommander">Cobra Commander</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, Major Bludd, and the <Link to="/character-bios/Baroness">Baroness</Link>. Cover Girl and <Link to="/character-bios/Clutch">Clutch</Link>'s sports car is totaled in the chase, forcing them to commandeer a motorcycle and rejoin the rest of the team: Duke, Roadblock, and Snow Job.
          </p>
          <p>
            <Link to="/character-bios/Clutch">Clutch</Link> and Roadblock press on ahead in the V.A.M.P., while Cover Girl, Duke, and Snow Job catch a ride in a cement truck. The mission ultimately ends with <Link to="/character-bios/Clutch">Clutch</Link> and Roadblock capturing <Link to="/character-bios/CobraCommander">Cobra Commander</Link> (Issue #23).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Emirate of Benzheen</h2>
          <img src={coverGirl3} alt="Cover Girl's tank battle in the Emirate of Benzheen" className="profile-block-img" />
          <p>
            In the Emirate of Benzheen, an American Abrams tank — crewed by Wild Card (commander), <Link to="/character-bios/Steeler">Steeler</Link> (driver), Cover Girl (gunner), and Cross (loader) — squares off against a Russian T-90, crewed by October Guard Colonel Chikatilo (commander), Daina (gunner), and Molyenkiy (driver), in a wargame staged in an abandoned town. The exercise is meant to showcase both tank platforms to the Emir, who is deciding which to purchase for the Benzheen military.
          </p>
          <p>
            Shortly after the exercise wraps up, with both tanks simultaneously struck by paint rounds, a flood of civilian traffic pours into town from Imam. The Joes learn that tanks crossed the border from neighboring Abysmia two hours earlier, entering Imam, shooting indiscriminately, and killing the mayor. The column is now advancing toward the very town where the Joes and October Guard are stationed. Together, they organize the armed civilians to build defenses ahead of the approaching Abysmian tanks (Issue #173).
          </p>
          <p>
            The Abysmian tanks arrive in town, and the Joes quickly discover these are Cobra tanks, led by Colonel Bin Ismael and crewed by Cobra advisors. The civilians set fires throughout the town, throwing off the Abysmian tanks' sensors and creating the illusion of a much larger armored presence than actually exists. Cover Girl fires a round into the Colonel's tank, destroying it and forcing the surviving Cobra advisors to take command themselves.
          </p>
          <p>
            The Joes and October Guard knock out several more Cobra tanks before the remaining force suddenly withdraws from the town. One of the civilian leaders informs the Joes and October Guard that the Emir has been overthrown and placed under arrest — the army now supports the rebels.
          </p>
          <p>
            The armed civilians now raise their rifles at the Joes and October Guard, explaining that when they were fighting together they were friends — but now, with the Emir under arrest, they are enemies. They are free to leave, but their tanks are seized in the name of the revolution. Colonel Chikatilo claps a shocked Wild Card on the shoulder and says, "Welcome to this part of the world!" (Issue #174).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Reassigned Back to Fort Wadsworth</h2>
          <img src={coverGirl4} alt="Cover Girl reassigned to Fort Wadsworth" className="profile-block-img" />
          <p>
            The Motor Pool at the Chaplain's Assistant School at Fort Wadsworth is reactivated as a secondary location for G.I. Joe. <Link to="/character-bios/Steeler">Steeler</Link> is reassigned there, along with several of the original team members: <Link to="/character-bios/Clutch">Clutch</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/Stalker">Stalker</Link>, Cover Girl, and <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> (Issue #206).
          </p>
          <p>
            Shortly after the Motor Pool is reactivated, <Link to="/character-bios/SeanCollins">Sean Collins</Link> arrives with orders assigning him to the instructor cadre of a new training facility in Texas — a cover story for his actual acceptance into G.I. Joe, though <Link to="/character-bios/SeanCollins">Sean</Link> himself does not know it. He stops by to say his goodbyes. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> gives him one of his Sykes-Fairbairn commando daggers, and <Link to="/character-bios/SeanCollins">Sean</Link>, visibly touched, wipes away a tear. <Link to="/character-bios/Clutch">Clutch</Link> jokes, "You must rate, Sean — I never got one of those." Cover Girl and <Link to="/character-bios/Scarlett">Scarlett</Link> kiss <Link to="/character-bios/SeanCollins">Sean</Link> on his cheeks, with Cover Girl adding, "Knock 'em dead in Texas, Sean." <Link to="/character-bios/Clutch">Clutch</Link>'s jaw drops. "I never got one of these either!" he says, unable to hide his envy (Issue #209).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Wounded in Seattle</h2>
          <img src={coverGirl5} alt="Cover Girl wounded in Seattle" className="profile-block-img" />
          <p>
            Cobra has activated sleeper cells across the nation. Cover Girl is dispatched to Seattle, where she teams up with Colonel Bright to investigate a suspicious air traffic controller, smuggled a briefcase past security. Inside the tower, they find the rest of the staff tied up and discover the controller is actually a Fred series Crimson Guardsman. In the exchange of gunfire that follows, both Colonel Bright and Cover Girl are shot.  Cover Girl manages to kill the Crimson Guardsman (Issue #223).
          </p>
          <p>
            While the Colonel's wounds are minor, Cover Girl's are far more severe — she has been shot through her neck. She is rushed to Walter Reed Medical Center and placed in a medically induced coma (Issue #224). The injury permanently changes her voice: deep, raspy, smoky. When Cover Girl finally returns to Fort Wadsworth, <Link to="/character-bios/LadyJay">Lady Jaye</Link> asks if the changes to her voice are permanent and remarks that her new voice is hot (Issue #228).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Scripture for a Grieving Mother</h2>
          <img src={coverGirl6} alt="Cover Girl honoring Shooter's sacrifice" className="profile-block-img" />
          <p>
            Cover Girl's first assignment upon returning from Walter Reed is to accompany <Link to="/character-bios/LadyJay">Lady Jaye</Link> to St. Ewan Church to visit SFC Jodie "<Link to="/character-bios/Shooter">Shooter</Link>" Craig's mother. Certain details of Operation Lady Doomsday have since been made public, and SFC Craig has been posthumously awarded the Silver Star and Purple Heart for her actions. <Link to="/character-bios/LadyJay">Lady Jaye</Link> presents the medals to Mrs. Craig, who asks, "They give out medals for killing the enemy, don't they? Did my Jodie kill people?" <Link to="/character-bios/LadyJay">Lady Jaye</Link> tells her that Jodie performed her duties with exceptional valor, and that the mission's success hinged on her actions.
          </p>
          <p>
            Cover Girl quotes John 15:13, telling her, "She gave her life to save the twelve of her comrades." In tears, Mrs. Craig says, "It's such a costly gift..." Cover Girl embraces her, offering what comfort she can (Issue #228).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), only a single version of Cover Girl was produced: the <a href="https://www.yojoe.com/action/83/covergirl.shtml" target="_blank" rel="noopener noreferrer">1983 figure</a>. Cover Girl's file card lists her grade as E-4 (Specialist), with "Specialist" added in brackets, clearly identifying her as a Specialist rather than a Corporal — both ranks share the same E-4 pay grade.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default CoverGirl;
