import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import burkhart1 from './img/burkhart/burkhart_1.png';
import burkhart2 from './img/burkhart/burkhart_2.png';
import burkhart3 from './img/burkhart/burkhart_3.png';
import burkhart4 from './img/burkhart/burkhart_4.png';

const Burkhart: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Dr. Adele Burkhart</h1>

        <p className="profile-intro">
          Dr. Adele Burkhart (1949–2014) is an outspoken human rights advocate and a woman of principle and courage, whose values often put her at odds with the Joes because of her opposition to the military. Her convictions take her to hotspots around the world, where she works for the oppressed and protests injustice, and more than once the Joes discover that she is the very person they have been sent to rescue. Even in the worst circumstances, she shows exceptional courage and selflessness. In the end, she sacrifices herself in Ollistan, taking a round meant for Alpine.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Operation Lady Doomsday</h2>
          <img src={burkhart1} alt="Dr. Burkhart during Operation Lady Doomsday" className="profile-block-img" />
          <p>
            On a train ride between New York and Washington, D.C., Dr. Adele Burkhart, one of the nation's top nuclear physicists, gives a press conference. She says she was deliberately deceived about the true nature of the project she worked on, a retaliatory weapons system capable of annihilating all life on Earth. She is on her way to Washington to testify before a congressional committee.
          </p>
          <p>
            Unbeknownst to Dr. Burkhart and her security team, several members of the press are undercover Cobra operatives, including the <Link to="/character-bios/Baroness">Baroness</Link> herself. The operatives kill several members of the security detail and capture Dr. Burkhart, taking her to a Cobra-controlled island in the Caribbean.
          </p>
          <p>
            The Joes are called to launch a rescue mission. Many have mixed feelings and many view her as a traitor for her criticism of the military. <Link to="/character-bios/Hawk">Hawk</Link> reminds them that they took an oath to the Constitution, which guarantees every citizen the right to disagree with their government.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> infiltrate the Cobra island fortress while the others deal with the Cobra threats outside. They confront <Link to="/character-bios/CobraCommander">Cobra Commander</Link>, who is holding Dr. Burkhart at gunpoint. Dr. Burkhart throws herself at him, saying she will not be responsible for their deaths, and is wounded in the struggle. <Link to="/character-bios/Scarlett">Scarlett</Link> wounds the Commander with her throwing star. The other Joes arrive, and in the confusion <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and the <Link to="/character-bios/Baroness">Baroness</Link> escape.
          </p>
          <p>
            The Joes have less than five minutes to get out, as a timer has been set to destroy the fortress. They commandeer a Cobra helicopter and escape as the fortress explodes behind them. As the helicopter departs, Dr. Burkhart tells <Link to="/character-bios/Scarlett">Scarlett</Link>, "I still feel that all of my political actions were justified — but at least I know that somewhere in the Pentagon... There are people who care!" (Issue #1).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Rescue in Sierra Gordo</h2>
          <img src={burkhart2} alt="Dr. Burkhart rescued in Sierra Gordo" className="profile-block-img" />
          <p>
            Dr. Burkhart travels to Sierra Gordo on a mission to investigate alleged human rights violations. She is captured, and the Sierra Gordo military believes she is a CIA spy. She is taken to a mountainside stronghold and is about to be interrogated with the truth serum Sodium Amytal when the Joes arrive. <Link to="/character-bios/Stalker">Stalker</Link> leads the team, which includes <Link to="/character-bios/RipCord">Rip Cord</Link>, Roadblock, Gung-Ho, and Recondo. Tucaro natives provide fire support while the Joes infiltrate the stronghold.
          </p>
          <p>
            The Joes escape with Dr. Burkhart, but the Tucaros are killed. Recondo, who has lived with the Tucaros and knows the terrain, leads the way to the border. Near the border, the Joes catch a ride on a bus filled with livestock and locals. Dr. Burkhart is in tears. She says all she wanted was to help people, and that people died in the process. She would rather have died herself than have others die to save her.
          </p>
          <p>
            Disgusted with her attitude, <Link to="/character-bios/RipCord">Rip Cord</Link> says, "Thanks a heap, Miss Goodie Two-Shoes! Nobody asked you to come down here and stir up trouble!" <Link to="/character-bios/Stalker">Stalker</Link> interrupts and tells him, "We are not fighting to have everyone think the way we do. We're fighting so that people have the right to think what they want!" His words echo <Link to="/character-bios/Hawk">Hawk</Link>'s speech during Operation Lady Doomsday, when he reminded the Joes that the Constitution guarantees every citizen the right to disagree with the government (Issue #39).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Standing Firm Under Fire in Rural Virginia</h2>
          <img src={burkhart3} alt="Dr. Burkhart at the hospital raid in rural Virginia" className="profile-block-img" />
          <p>
            In the aftermath of the Joes' part in the Cobra Civil War on Cobra Island, Generals <Link to="/character-bios/Hawk">Hawk</Link> and Hollingsworth are summoned to the Pentagon to meet the Jugglers, with Roadblock accompanying them. The Joes are relieved from active duty and placed under arrest pending an investigation. <Link to="/character-bios/Hawk">Hawk</Link>, Hollingsworth, and Roadblock are escorted from the Pentagon under armed guard by Military Police. During the drive, Roadblock breaks free, commandeers an MP motorcycle, and escapes.
          </p>
          <p>
            Roadblock makes his way to Dr. Burkhart's home in the Georgetown section of Washington, D.C., where she gives him shelter (Issue #77). Other Joes and their allies soon follow: <Link to="/character-bios/RockRoll">Rock 'n Roll</Link>, <Link to="/character-bios/Grunt">Grunt</Link>, <Link to="/character-bios/Lola">Lola</Link> (Grunt's girlfriend), <Link to="/character-bios/CoverGirl">Cover Girl</Link>, Dusty, Bazooka, Barbecue, <Link to="/character-bios/Flash">Flash</Link>, Wet-Suit, Snow Job, <Link to="/character-bios/Steeler">Steeler</Link>, and <Link to="/character-bios/Zap">Zap</Link>. <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> then picks up <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, and <Link to="/character-bios/Billy">Billy</Link> from the airport.
          </p>
          <p>
            <Link to="/character-bios/Jinx">Jinx</Link> had accessed the central payroll computer at the Defense Language Institute in San Francisco and discovered that <Link to="/character-bios/Hawk">Hawk</Link> and Hollingsworth are being held in a hospital in rural Virginia. The Joes mount a rescue mission, and Dr. Burkhart joins them.
          </p>
          <p>
            The hospital is filled with personnel from the Domestic Operations Agency (DOA) dressed as hospital staff, and film crews are on the scene. The Joes enter disguised as hospital staff. Dr. Burkhart enters with them and is confronted by DOA thugs, who declare in front of the film crew that the Joes have taken her hostage. Dr. Burkhart looks directly into the camera and says she is there to get facts, and to learn why Generals <Link to="/character-bios/Hawk">Hawk</Link> and Hollingsworth are being held at the hospital.
          </p>
          <p>
            One of the DOA goons opens fire, and a firefight erupts. <Link to="/character-bios/CoverGirl">Cover Girl</Link> and Bazooka are hit. Dr. Burkhart stands firm in the hail of gunfire while the camera films her, and shouts, "I am a non-combatant! Stop this senseless shooting immediately!"
          </p>
          <p>
            Roadblock tackles Dr. Burkhart, pushing the two of them into a side room to shield her from the gunfire, while the Joes return fire. After a sustained exchange of fire, Destro arrives and presents receipts from M.A.R.S. on camera, clearing the Joes of any wrongdoing (Issue #78).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Aboard the Aiden Explorer</h2>
          <img src={burkhart4} alt="Dr. Burkhart aboard the Aiden Explorer" className="profile-block-img" />
          <p>
            Dr. Burkhart is part of an environmental protest group demonstrating against the oil survey ship Aiden Explorer off the East African coast of Kalingaland. The protesters' ship is sunk, and the protesters are taken aboard the Aiden Explorer as captives. Soon after, pirates raid the ship and capture the crew. The pirates are supported by the Black Major and his Red Shadows, and both the crew and the protesters are held prisoner.
          </p>
          <p>
            Since the Aiden Explorer is an American-registered ship with an American crew, the Joes are dispatched to rescue the prisoners. The W.H.A.L.E., the Tomahawk, and a smaller fast boat carrying <Link to="/character-bios/Stalker">Stalker</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, Gung-Ho, and Torpedo are sent on the mission. Aboard the W.H.A.L.E. is Prince Ngoto, the president of Kalingaland, who says the pirates are led by Abdi Ali, once the Prince's political rival before he turned to piracy.
          </p>
          <p>
            Dr. Burkhart is held on the Aiden Explorer's bridge, separate from the other prisoners. Abdi Ali tries to convince her that they are on the same side. He tells her he captured the oil survey ship to stop predatory oil oligarchs from exploiting the natural resources, a goal similar to her own protest against oil extraction. Dr. Burkhart refutes him, saying she achieves her goals without the use of force.
          </p>
          <p>
            The Joes board the ship and kill several Red Shadows and pirates. The Black Major tells Ali he is taking over. He points his pistol at Dr. Burkhart and tells her that Special Ops teams do not negotiate or take prisoners, so she has no value to him (Issue #188). The Black Major fires, but Ali uses his body as a shield and takes the shot meant for Dr. Burkhart. Ali is wounded but alive, and Dr. Burkhart provides medical aid.
          </p>
          <p>
            The battle between the Joes and the Red Shadows continues onboard, and soon the W.H.A.L.E. and the Tomahawk join in. As the Joes reach the bridge, the Black Major holds Dr. Burkhart with his gun to her head, using her as leverage. <Link to="/character-bios/Stalker">Stalker</Link> demands that the Black Major let him talk with Abdi Ali. Dr. Burkhart warns <Link to="/character-bios/Stalker">Stalker</Link> not to trust the Black Major, since he shot Ali. The Black Major pistol-whips her and takes her deeper into the bridge at gunpoint.
          </p>
          <p>
            Inside the bridge, Ali opens fire with a submachine gun, killing several Red Shadows until his clip runs dry. The Black Major points his gun at Ali, but Dr. Burkhart bites his arm, keeping him from shooting. As the Black Major is about to strike her, Prince Ngoto arrives and strikes him first.
          </p>
          <p>
            The Robo Skull, damaged in a firefight with the W.H.A.L.E., heads toward the bridge. Dr. Burkhart, Ali, and Prince Ngoto hurry down the stairs toward the Joes, and the bridge explodes. Shortly afterward, the Robo Skull pilot comes down the stairs, calling out not to shoot. The Black Major has taken the Robo Skull and escaped. Prince Ngoto and Ali agree to negotiate based on their mutual humanity (Issue #189).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Burkhart;