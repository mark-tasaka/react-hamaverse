import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import wade1 from './img/wade/wade_1.png';
import wade2 from './img/wade/wade_2.png';
import wade3 from './img/wade/wade_3.png';
import wade4 from './img/wade/wade_4.png';
import wade5 from './img/wade/wade_5.png';
import wade6 from './img/wade/wade_6.png';
import wade7 from './img/wade/wade_7.png';
import wade8 from './img/wade/wade_8.png';
import wade9 from './img/wade/wade_9.png';
import wade10 from './img/wade/wade_10.png';
import wade11 from './img/wade/wade_11.png';
import wade12 from './img/wade/wade_12.png';
import wade13 from './img/wade/wade_13.png';
import wade14 from './img/wade/wade_14.png';
import wade15 from './img/wade/wade_15a.png';

const Wade: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Wade Collins</h1>

        <p className="profile-intro">
          Wade Collins is a Vietnam War veteran who served alongside <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Stalker">Stalker</Link>, and <Link to="/character-bios/StormShadow">Storm Shadow</Link>. Wounded and left for dead, Wade survived two years rotting away in a POW camp. When he returned from the war, he discovered his wife had left him, was spit on and called a baby killer, and couldn't find work — employers weren't eager to hire veterans. Wade was recruited into Cobra in the organization's early days, working his way up through the ranks and eventually joining the Crimson Guard when it first formed. An encounter with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Stalker">Stalker</Link> convinced Wade that Cobra was using him, and with the help of the two men he'd served with, he and his adopted family left Cobra behind to start a new life.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Captured in Vietnam</h2>
          <img src={wade1} alt="Wade Collins' capture in Vietnam" className="profile-block-img" />
          <p>
            Wade Collins is on point for a six-man LRRP team led by Lonzo Wilkinson (<Link to="/character-bios/Stalker">Stalker</Link>), alongside <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, Tommy (<Link to="/character-bios/StormShadow">Storm Shadow</Link>), Dickie Saperstein, and Ramon Escobedo. Distracted by noises behind him, Wade leads the team straight into a sizable NVA (North Vietnamese Army) encampment — close to a full company of men. A firefight breaks out. Ramon and Wade are both hit; Ramon dies instantly. Dickie, attempting a flanking maneuver, steps on a landmine and is killed on the spot.
          </p>
          <p>
            Wade lies bleeding on the battlefield, and his surviving teammates, believing him dead, withdraw. The NVA carry the wounded Wade on a bamboo litter to their underground operating room, where he is operated on — without anesthesia.
          </p>
          <p>
            Wade spends the next two years rotting away in a POW camp. When the war ends and he returns home, he is spit on and called a baby killer at the airport. His wife's lawyer approaches him there, handing over divorce papers — she couldn't bring herself to face him in person. Struggling to find work, Wade discovers that America's captains of industry are reluctant to hire Vietnam War veterans (Issue #43).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Becoming Fred II</h2>
          <img src={wade2} alt="Wade Collins becoming Fred II" className="profile-block-img" />
          <p>
            Unable to find employment, Wade wanders from town to town until he comes across a Cobra recruitment poster in a small town, in the organization's early days. Wade joins Cobra and finally finds a place and purpose, working his way up the ranks. When the Crimson Guard is first formed, he volunteers, undergoing plastic surgery to match the others in the series — no longer Wade Collins, but Fred II (Issue #42).
          </p>
          <p>
            When the original <Link to="/character-bios/FredBroca">Fred Broca</Link> dies, Wade is sent to Staten Island as his replacement. He drives to Fred's home, where Fred's children, <Link to="/character-bios/SeanCollins">Sean</Link> and Heather, run out to greet him — not realizing that, despite his identical face, the man before them isn't their father. Wade takes on both <Link to="/character-bios/FredBroca">Fred Broca</Link>'s role as husband and father, and Fred's duties as a Cobra agent (Issue #31).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Staten Island Ferry</h2>
          <img src={wade3} alt="Wade Collins on the Staten Island Ferry" className="profile-block-img" />
          <p>
            Wade Collins and three other undercover Siegies (Crimson Guards) are aboard the Staten Island Ferry en route to a training mission when they spot <Link to="/character-bios/Scarlett">Scarlett</Link> and an unknown soldier — <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, wearing his rubber mask — on the vehicle deck. Wade radios the discovery to his superiors, and the Siegies move to take <Link to="/character-bios/Scarlett">Scarlett</Link> prisoner. When her companion steps away to buy food, the three Siegies surround <Link to="/character-bios/Scarlett">Scarlett</Link> and discreetly draw their guns, ordering her to walk slowly back to their car.
          </p>
          <p>
            <Link to="/character-bios/Scarlett">Scarlett</Link>'s companion returns and throws hot coffee in one of the Siegies' faces. Wade gets out of the car and fires his silenced pistol at the attacker — <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> — who dodges the shot. The rounds instead hit the coffee-burned Siegie, killing him. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> grabs the fallen Siegie's gun and opens fire on Wade, hitting the car but missing him.
          </p>
          <p>
            The other two Siegies drag <Link to="/character-bios/Scarlett">Scarlett</Link> through a door deeper into the ferry. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> attacks the first, giving <Link to="/character-bios/Scarlett">Scarlett</Link> the chance to turn on the one holding her — both Siegies are thrown down the stairs. Wade follows through the doorway, closes it behind him, and cuts the lights, using his weapon's image intensifier to track <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> in the dark.
          </p>
          <p>
            Wade and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> exchange fire — <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> using the guns of the unconscious Siegies — until both run out of ammunition. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> lunges at Wade, driving him through a hatch on the side of the ship, then catches his jacket to keep him from falling overboard. In the struggle, Wade notices something off about <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' face and tears away the mask, screaming in horror at what lies beneath. He loses his grip and falls backward into the water (Issue #36).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Encounter with Snake Eyes and Stalker at the Vietnam Memorial</h2>
          <img src={wade4} alt="Wade Collins confronting Snake Eyes and Stalker at the Vietnam Memorial" className="profile-block-img" />
          <p>
            Wade survives his fall from the ferry, though he develops pneumonia. His adopted wife, genuinely concerned for his health, calls a doctor to the house — but Wade ignores the doctor's advice to rest. After the doctor leaves, he and his wife argue. "Why should you care?" Wade tells her. "I'm not your real husband. Your real husband is dead." In tears, she replies that she'd thought he might have cared. Wade leaves the house, gets in his car, and presses on with his mission.
          </p>
          <p>
            Wade spots <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Stalker">Stalker</Link> driving Hawk and follows them all the way to Washington, D.C. After Hawk is dropped off at the U.S. Army Medical Center, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Stalker">Stalker</Link> head to the Vietnam Memorial. Wade trails them there and confronts them as they search the directory of names, puzzled that Wade Collins' name is missing. Emerging from behind a tree with his silenced pistol drawn, he tells them, "Wade Collins isn't dead at all. Cobra gave him a new face, a new name, and a new life" (Issue #42).
          </p>
          <p>
            At gunpoint, Wade marches <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Stalker">Stalker</Link> to his car and has them drive while he keeps his gun trained on them from the back seat. He tells them everything that happened to him in Vietnam and how he came to join Cobra. <Link to="/character-bios/Stalker">Stalker</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> convince Wade that Cobra has been using him all along, and offer to help him leave the organization (Issue #43).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Leaving Cobra with His Family</h2>
          <img src={wade5} alt="Wade Collins leaving Cobra with his family" className="profile-block-img" />
          <p>
            Wade Collins returns home to his adopted family with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Stalker">Stalker</Link>. Wade tells his adopted family that he was wrong, and that it took real friends to show him he'd been used by Cobra. Looking at his family, he says, "I am not your husband and father — I am a burnt-out Wade Collins wearing Fred's face." Wade tells them that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> will help them start new lives away from Cobra, and that they don't need to stay with him.
          </p>
          <p>
            As Wade walks out of the house, Heather and <Link to="/character-bios/SeanCollins">Sean</Link> call out "Dad" — truly accepting Wade as their father for the first time. Tears fill his eyes. Wade turns to see his adopted wife holding a suitcase. "Wade," she says, "we have a long drive ahead of us to start our new life together" (Issue #43).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Cobra Consulate</h2>
          <img src={wade6} alt="Wade Collins at the Cobra Consulate" className="profile-block-img" />
          <p>
            An undisclosed amount of time passes since the Collins family fled Cobra. While undergoing plastic surgery at the Bern Institute in Switzerland, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is captured by the <Link to="/character-bios/Baroness">Baroness</Link> and taken to the sublevels of the Cobra Consulate in New York City. Wade rejoins his old LRRP teammates, <Link to="/character-bios/Stalker">Stalker</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link>, in New York to help rescue him.
          </p>
          <p>
            Dressed in his old Crimson Guard uniform, Wade enters the Consulate seeking a meeting with the <Link to="/character-bios/Baroness">Baroness</Link> — walking into a scene of panic, since <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> has already escaped. A Tele-Viper at the front desk tells him the <Link to="/character-bios/Baroness">Baroness</Link> can't see him; an emergency is underway. Wade leaves and returns to the newsstand across the street, where <Link to="/character-bios/Stalker">Stalker</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> are waiting. As he changes into his military fatigues, a powerful explosion tears through the Consulate's lobby.
          </p>
          <p>
            Wade, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, and <Link to="/character-bios/Stalker">Stalker</Link> rush inside to find the lobby filled with dead and dying Vipers, including an injured Techno-Viper relaying the situation over a microphone. Just then, the elevator doors open, and a crowd of panicked Cobra civilian employees pours out, sweeping the three of them along in the rush to the street. More explosions rip through the floors above. <Link to="/character-bios/Stalker">Stalker</Link> realizes it's <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' plan: empty the Consulate, seal off the lower levels, and fight his way up (<Link to="/comic-issues/Issue95">Issue #95</Link>).
          </p>
          <p>
            With the lower levels sealed off, the only way up is to scale the outside walls — a feat only a ninja can manage. <Link to="/character-bios/StormShadow">Storm Shadow</Link> begins climbing, while Wade and <Link to="/character-bios/Stalker">Stalker</Link> search for another way in. They reach the helipad of a nearby rooftop, but the pilot refuses to fly anywhere near the burning Consulate. Just then, the Tomahawk helicopter passes by, carrying the comatose <Link to="/character-bios/Scarlett">Scarlett</Link>, and Wade and <Link to="/character-bios/Stalker">Stalker</Link> climb aboard.
          </p>
          <p>
            By the time the Tomahawk reaches the Consulate, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> are helping the <Link to="/character-bios/Baroness">Baroness</Link> board a Cobra transport helicopter. After pulling the <Link to="/character-bios/Baroness">Baroness</Link> to safety, Destro reaches out for <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> — but the ledge beneath them gives way, sending them both falling. The Tomahawk executes a barrel roll and catches them in midair (Issue #96).
          </p>
          <p>
            Wade spends an unspecified stretch of time in New York, spending long hours at the hospital where <Link to="/character-bios/Scarlett">Scarlett</Link> is recovering, supporting his old LRRP friends (Issue #97).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Adopting Marina</h2>
          <img src={wade7} alt="The Collins family adopting Marina" className="profile-block-img" />
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> returns from a mission in Borovia with a young girl, <Link to="/character-bios/Marina">Marina</Link>, orphaned by ethnic cleansing. The Collins family adopts her, giving her a new home in America. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/Stalker">Stalker</Link>, and <Link to="/character-bios/StormShadow">Storm Shadow</Link> arrive at the Collins home with <Link to="/character-bios/Marina">Marina</Link>, where Wade, his wife, and their children, <Link to="/character-bios/SeanCollins">Sean</Link> and Heather, greet her at the door and welcome her into the family. <Link to="/character-bios/Marina">Marina</Link> asks, "You don't mind me being adopted?" Heather replies, "We're all adopted in this family" — welcoming <Link to="/character-bios/Marina">Marina</Link> as their new sister (Issue #108).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Sean's Letter to Snake Eyes</h2>
          <img src={wade8} alt="Sean's letter to Snake Eyes" className="profile-block-img" />
          <p>
            A month away from his seventeenth birthday, Wade's adopted son, <Link to="/character-bios/SeanCollins">Sean</Link>, asks his father to sign his enlistment papers so he can join the Army. Wade and <Link to="/character-bios/SeanCollins">Sean</Link> argue; Wade agrees to sign, but only after <Link to="/character-bios/SeanCollins">Sean</Link> writes to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, who has experienced war and loss firsthand.
          </p>
          <p>
            <Link to="/character-bios/SeanCollins">Sean</Link> writes to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and receives a heartfelt, honest reply detailing the truth of being a soldier. Afterward, <Link to="/character-bios/SeanCollins">Sean</Link> looks up at his father and says, "You never told me what it was like, Dad. You never told me about the war." Wade tells him, "There are some things we need to put behind us. If you're still intent on joining after reading the letter, I'll sign the papers." <Link to="/character-bios/SeanCollins">Sean</Link> says he needs time to think it over. Wade agrees that's the best course of action, and the two embrace (Issue #155).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Sean's Funeral</h2>
          <img src={wade9} alt="Sean's funeral at Arlington National Cemetery" className="profile-block-img" />
          <p>
            After taking time to reflect on <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' letter, <Link to="/character-bios/SeanCollins">Sean</Link> decides to enlist in the Army. He goes on to complete Ranger, Airborne, and Special Forces schools, and serves two tours as a Special Forces operator in Afghanistan. He later joins G.I. Joe.
          </p>
          <p>
            To keep <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' death a secret from Cobra, <Link to="/character-bios/Hawk">Hawk</Link> asks <Link to="/character-bios/SeanCollins">Sean</Link> to become <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, maintaining the illusion that he's still alive. To keep up appearances, a funeral is held for <Link to="/character-bios/SeanCollins">Sean</Link>, with no one outside G.I. Joe aware that he's actually alive. A funeral with full military honors is held for the family at Arlington National Cemetery, and a coffin is laid to rest. Wade questions his son's death, noting that the security at the funeral was far too lax — he suspects the whole thing is a sham.
          </p>
          <p>
            Wanting to punish the Collins family, <Link to="/character-bios/CobraCommander">Cobra Commander</Link> has <Link to="/character-bios/Firefly">Firefly</Link> plant explosives that detonate their house (Issue #215). Fortunately, Wade's instincts and knowledge of Cobra pay off — he hides his family in the basement, saving them from the blast. The basement conceals a secret escape tunnel leading to the garden shed, where cash, new passports, and other essentials are stashed away (Issue #216).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Return to Springfield</h2>
          <img src={wade10} alt="Wade's return to Springfield" className="profile-block-img" />
          <p>
            Wade moves his family to the Cobra-occupied town of Springfield, believing it's the last place Cobra would think to look for them. His wife is not impressed. Wade assumes the identity of Fred 96 (Issue #233).
          </p>
          <p>
            Things go smoothly for the Collins family in Springfield at first. One day, Wade's neighbor (Fred 57) reports his suspicions about the Collins family, triggering a raid on their home. Heather is out shopping when the raid occurs; Wade and his wife are captured (Issue #238) and taken to Dr. Mindbender's lab beneath the Springfield Community Center, where the Brainwave Scanners are kept. Heather, disguised as a Crimson Guard Immortal, joins forces with Dawn Moreno (Issue #239).
          </p>
          <p>
            Heather and Dawn rescue Wade and his wife from the Brainwave Scanner. Wade watches a monitor showing <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Zartan">Zartan</Link>, and <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link> inside the community center. Noticing something different about <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' body language, he realizes this is actually <Link to="/character-bios/SeanCollins">Sean</Link>. Dawn hooks the captured Dr. Mindbender up to the Brainwave Scanner, and Heather inserts a USB drive containing a virus to erase all the memories stored inside while the doctor is still connected — an act that inadvertently allows Dr. Venom's dormant consciousness to take over Dr. Mindbender's body.
          </p>
          <p>
            Wade, his wife, Heather, and Dawn meet up with Snake Eyes II (<Link to="/character-bios/SeanCollins">Sean Collins</Link>), <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Zartan">Zartan</Link>, and <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link>. Wade, his wife, and Heather embrace <Link to="/character-bios/SeanCollins">Sean</Link>, overjoyed to find him still alive (Issue #240). With the help of the Dreadnoks and disguised as Vipers, the group makes their escape (Issue #241).
          </p>
        </section>
        
        <section className="profile-block">
          <h2 className="profile-block-title">Memorial Day</h2>
          <img src={wade13} alt="Wade at the Vietnam War Memorial on Memorial Day" className="profile-block-img" />
          <p>
            On Memorial Day, Wade travels to the Vietnam War Memorial to honor his fallen LRRP teammates, where he finds <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/Stalker">Stalker</Link> already there. Wade leaves a bottle of hot sauce by Ramon's name on the wall — Ramon used the hot sauce to mask the taste of the C-rations — while <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/Stalker">Stalker</Link> also leave a bottle of hot sauce. Wade asks <Link to="/character-bios/Stalker">Stalker</Link> how <Link to="/character-bios/SeanCollins">Sean</Link> is doing. <Link to="/character-bios/Stalker">Stalker</Link> replies, "You'd be proud, Wade" (Issue #263).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">The Rescue Mission</h2>
          <img src={wade11} alt="The rescue mission to Springfield" className="profile-block-img" />
          <p>
            The Motor Pool at Fort Wadsworth is reactivated, and a select group of Joes is stationed there. Cobra launches an attack on the fort and captures <Link to="/character-bios/SeanCollins">Sean Collins</Link>, believing him to be the real <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. <Link to="/character-bios/SeanCollins">Sean</Link> is taken to Springfield. Wade arrives at Fort Wadsworth seeking out <Link to="/character-bios/Stalker">Stalker</Link> to join the rescue mission (Issue #269).
          </p>
          <p>
            Unable to launch an official rescue mission or use military vehicles, the Joes instead use their leave time and civilian vehicles to mount the raid. Wade joins the mission, riding along with <Link to="/character-bios/Stalker">Stalker</Link>, <Link to="/character-bios/RockRoll">Rock 'n Roll</Link>, and <Link to="/character-bios/Clutch">Clutch</Link> in Bongo the Balloon Bear's van — a relic belonging to <Link to="/character-bios/Candy">Candy Appel</Link> they kept in the Motor Pool over the years (Issue #270).
          </p>
          <p>
            The other Joes use their own leave time and take various civilian vehicles to Springfield. After an intense mission, Wade and the Joes leave Springfield with <Link to="/character-bios/SeanCollins">Sean</Link>, who manages to escape captivity on his own and joins his father and the Joes in the battle (Issue #275).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Letter from Sean</h2>
          <img src={wade12} alt="Wade receiving a letter from Sean" className="profile-block-img" />
          <p>
            Wade is living in <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' cabin in the High Sierras when he receives a delivery of groceries from the store owner in town.  Included with the delivery is a handwritten letter from <Link to="/character-bios/SeanCollins">Sean</Link>. The letter is upbeat, with <Link to="/character-bios/SeanCollins">Sean</Link> talking about his friends at the Motor Pool: <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/Stalker">Stalker</Link>, Dawn, and Moongoose. But Wade reads past the cheerful front his son puts on in the letter, and tells Timber that he needs to go see him (Issue #292).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Cobra Island</h2>
          <img src={wade14} alt="Wade's mission to Cobra Island" className="profile-block-img" />
          <p>
            In response to <Link to="/character-bios/SeanCollins">Sean</Link>'s letter, Wade travels to the Casino Resort on Cobra Island, bringing his old Siegie (Crimson Guard) uniform with him. Security waves him through the moment they spot it in his luggage. Elsewhere on the island, Serpentor Khan has been brought to life, and <Link to="/character-bios/SeanCollins">Sean</Link> and Dawn have been captured (Issue #298).
          </p>
          <p>
            Wade meets up with <Link to="/character-bios/StormShadow">Storm Shadow</Link> in the jungles outside the Casino. They're later joined by <Link to="/character-bios/SeanCollins">Sean</Link> and Laura 343, a Siegie who switched sides and rescued him. The four come under attack from Vipers, and Wade is wounded. He tells a reluctant <Link to="/character-bios/SeanCollins">Sean</Link> to leave him behind, insisting he get Laura off the island — she'd sacrificed everything to save him. <Link to="/character-bios/SeanCollins">Sean</Link> and Laura depart, while <Link to="/character-bios/StormShadow">Storm Shadow</Link> stays behind with Wade.
          </p>
          <p>
            Wade and <Link to="/character-bios/StormShadow">Storm Shadow</Link> are hit by another wave of Vipers.  <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/Stalker">Stalker</Link> arrive and join the battle. The W.H.A.L.E. soon follows, carrying <Link to="/character-bios/SeanCollins">Sean</Link>, Laura, Dawn (who managed to escape on her own), and a prisoner, <Link to="/character-bios/CobraCommander">Cobra Commander</Link>. The W.H.A.L.E.'s firepower turns the tide of battle, forcing the Vipers to retreat, and <Link to="/character-bios/SeanCollins">Sean</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> board the craft.
          </p>
          <p>
            The W.H.A.L.E. makes its way to Dr. Mindbender's lab through a hidden loading bay, where the group meets up with the original <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, cloned in the lab. As Serpentor Khan triggers the countdown for the mutant virus bomb, the W.H.A.L.E. departs, carrying the original <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/CobraCommander">Cobra Commander</Link> as a prisoner (Issue #300).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Wade Collins' Death</h2>
          <img src={wade15} alt="Wade Collins' death" className="profile-block-img" />
          <p>
            Wade and Laura are in the W.H.A.L.E.'s cargo hold guarding the captured <Link to="/character-bios/CobraCommander">Cobra Commander</Link> when he strikes Laura, seizes her pistol, and shoots Wade, killing him. <Link to="/character-bios/CobraCommander">Cobra Commander</Link> then makes his escape on the jet sled (Issue #301).
          </p>
          <p>
            Wade is buried with full honors at Arlington National Cemetery, the Joes serving as his honor guard. <Link to="/character-bios/Hawk">Hawk</Link> presents the folded American flag to Mrs. Collins (Issue #302).
          </p>
        </section>


        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Wade;
