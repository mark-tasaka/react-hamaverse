import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import cobraCommander1 from './img/cobraCommander/cobraCommander_1.png';
import cobraCommander2 from './img/cobraCommander/cobraCommander_2.png';
import cobraCommander3 from './img/cobraCommander/cobraCommander_3.png';
import cobraCommander4 from './img/cobraCommander/cobraCommander_4.png';
import cobraCommander5 from './img/cobraCommander/cobraCommander_5.png';
import cobraCommander6 from './img/cobraCommander/cobraCommander_6.png';
import cobraCommander7 from './img/cobraCommander/cobraCommander_7.png';
import cobraCommander8 from './img/cobraCommander/cobraCommander_8.png';
import cobraCommander9 from './img/cobraCommander/cobraCommander_9.png';
import cobraCommander10 from './img/cobraCommander/cobraCommander_10.png';

const CobraCommander: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Cobra Commander</h1>

        <p className="profile-intro">
          The man who became Cobra Commander started out as an ordinary used car salesman — bitter toward big government, disillusioned with the system, and traumatized by the car accident that claimed his older brother's life. Leaving his wife, he traveled across America with his son, finding others who shared his views. He started the organization as a pyramid scheme, selling cleaning products and vitamins, with sales meetings  becoming indoctrination sessions. This section explores Cobra Commander in the early years of Cobra, and the "Sins of the Father" story arc.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">The Formation of Cobra</h2>
          <img src={cobraCommander1} alt="The formation of Cobra" className="profile-block-img" />
          <p>
            The man who would become Cobra Commander leaves his wife, telling his young son, <Link to="/character-bios/Billy">Billy</Link>, that his mother has died in a car accident. He travels across America, seeking out others as disillusioned and bitter as himself. What begins as small gatherings in hotel rooms grow into full rallies. Cobra Commander raises money through a pyramid scheme selling vitamins and household products, and the sales meetings become fronts for indoctrination sessions, drawing the disillusioned into his cause (Issue #84).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">His Brother's Death</h2>
          <img src={cobraCommander2} alt="The death of Cobra Commander's brother" className="profile-block-img" />
          <p>
            Cobra Commander had an older brother, Dan, who extended his tours in Vietnam to prevent him from being sent overseas*. When Dan returned home, he came back a different man, spending long hours driving at high speeds on the interstate searching for death to find him. One day, he crashed head-on into a car carrying a family on their way to pick up their son, a returning soldier, from the airport. Everyone was killed. The family of the returning veteran was <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' family.
          </p>
          <p>
            Cobra Commander twists the event in his mind, blaming the returning veteran's family for his brother's death. When he learns the veteran — <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> — is living with the Arashikage ninja clan in Japan (Issue #84), he first hires the saboteur <Link to="/character-bios/Firefly">Firefly</Link> to engineer his assassination. <Link to="/character-bios/Firefly">Firefly</Link> infiltrates the Arashikage clan but has no interest in carrying out the killing himself, agreeing only to play a supporting role in the mission (Issue #126).
          </p>
          <p>
            Cobra Commander travels to Daytona Beach and finds <Link to="/character-bios/Zartan">Zartan</Link> at the "Don't Fall Inn".  He hires <Link to="/character-bios/Zartan">Zartan</Link> to infiltrate the Arashikage clan and kill <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. <Link to="/character-bios/Zartan">Zartan</Link> does so by becoming the apprentice of the clan's swordsmith, <Link to="/character-bios/Onihashi">Professor Onihashi</Link> — and in the process, <Link to="/character-bios/Zartan">Zartan</Link> finds a peace and no longer wants to carry out the mission. When Cobra Commander discovers this, he threatens to expose <Link to="/character-bios/Zartan">Zartan</Link> to <Link to="/character-bios/Onihashi">Onihashi</Link> if he doesn't finish the job. <Link to="/character-bios/Zartan">Zartan</Link> attemps to kill <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, but kills the <Link to="/character-bios/HardMaster">Hard Master</Link> by mistake — the <Link to="/character-bios/HardMaster">Hard Master</Link> had been demonstrating the technique of "Donning the Cloak of the Chameleon," mimicking <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' heartbeat and breathing at the moment the fatal arrow struck (Issue #84).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Springfield</h2>
          <img src={cobraCommander3} alt="Cobra Commander's takeover of Springfield" className="profile-block-img" />
          <p>
            While traveling across America recruiting others for his cause, Cobra Commander comes across the economically devastated town of Springfield. He starts his pyramid scheme there, recruiting locals to sell household cleaning products for extra income. The sales meetings soon turn into indoctrination and leadership sessions, drawing the town deeper into his cause, until nearly all of Springfield belongs to Cobra — save for a small underground resistance.
          </p>
          <p>
            Cobra Commander's own son, <Link to="/character-bios/Billy">Billy</Link>, becomes part of this underground resistance. He is captured while scrounging for supplies and held in a prison cell. One day, <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/Zap">Zap</Link> are captured and thrown into the same cell. With their help, the three make their escape. <Link to="/character-bios/Billy">Billy</Link> never reveals who his father truly is — telling the Joes only that his whole family is hiding underground in Springfield as part of the resistance. He stays behind when the Joes depart (Issue #10).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">The Would-Be Assassin: Face to Face with His Son</h2>
          <img src={cobraCommander5} alt="Cobra Commander faces his son Billy at a Cobra rally in Springfield" className="profile-block-img" />
          <p>
            At a Cobra rally in Springfield, Cobra Commander comes face-to-face with a would-be assassin: his own son, <Link to="/character-bios/Billy">Billy</Link>. At the rally, the Cobra youth march, and one of them approaches the Commander with a bouquet of flowers. Meanwhile, Destro recognizes the youth from the stands and rushes toward the Commander.
          </p>
          <p>
            After reading a poorly written poem, the youth draws a gun from the bouquet. <Link to="/character-bios/StormShadow">Storm Shadow</Link>, guarding Cobra Commander, draws his blade at the sight of the gun. Just then, Destro steps between <Link to="/character-bios/StormShadow">Storm Shadow</Link> and the youth.
          </p>
          <p>
            With the youth apprehended, Cobra Commander says he wants to make an example of the assassin. Destro replies, "Is that so... you should take a good look at him first." Cobra Commander looks at the youth and says, "Billy?", recognizing his own son. <Link to="/character-bios/Billy">Billy</Link> says, "Dad?" (Issue #33).
          </p>
          <p>
            To identify <Link to="/character-bios/Billy">Billy</Link>'s accomplices, Cobra Commander hooks him up to the Brainwave Scanner. <Link to="/character-bios/Billy">Billy</Link> resists, concealing their identities by projecting images of Cobra's formation onto the monitor instead. Not wanting the others to learn of his past, Cobra Commander halts the session. <Link to="/character-bios/StormShadow">Storm Shadow</Link> is impressed by <Link to="/character-bios/Billy">Billy</Link>'s fortitude and integrity, and rescues him. The two flee to <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s secret New York water tower base (Issue #39).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Learning of Billy’s Fate: A Father's Regret</h2>
          <img src={cobraCommander6} alt="Cobra Commander learns what happened to Billy" className="profile-block-img" />
          <p>
            In the aftermath of the Battle of Springfield, the G.I. Joe team is suspended, and the Pit is closed and sealed. The Joes are quartered in the Chaplain's Assistant barracks in the meantime (Issue #52). General Ryan, General Hollingsworth, and Admiral Dyson are sent to Fort Wadsworth to investigate the Pit, and <Link to="/character-bios/Hawk">Hawk</Link> gives the flag officers a tour of the underground facilities.
          </p>
          <p>
            While this is happening, Cobra launches a surprise attack on Fort Wadsworth. Cobra Commander, Destro, a small group of Cobra troopers, and a larger unit of B.A.T.s infiltrate the Pit, while the bulk of the Cobra forces battle the Joes on the surface. A firefight takes place both within the Pit and above ground. Admiral Dyson is the first to sacrifice himself, detonating the explosives on an explosive-laden B.A.T. and allowing <Link to="/character-bios/Hawk">Hawk</Link> and the generals to escape. Next, General Ryan sacrifices himself, triggering a massive explosion that allows <Link to="/character-bios/Hawk">Hawk</Link> and General Hollingsworth to escape to the surface before the Pit collapses. Cobra Commander and Destro are believed to have died, buried beneath the Pit (Issue #53).
          </p>
          <p>
            Cobra Commander and Destro survive, trapped deep underground (Issue #54). They find a tunneling vehicle and use it to tunnel to the surface, coming up in a local mall after hours. They steal clothing, wigs, and fake mustaches and beards from one of the stores and make their escape incognito. Cobra Commander uses his skills as a former used-car salesman to create the paperwork to fraudulently obtain a car from a used-car dealership, and the two drive off.
          </p>
          <p>
            Outside the city, the two are stopped by a state trooper because of the temporary license plates on the car. Cobra Commander shows his ID, which contains his real surname. The trooper looks at it and says he has seen his face before. Cobra Commander assures him that this is impossible, as their social circles would never overlap. Then the trooper says, "I've got it... Billy!" Cobra Commander is shocked.
          </p>
          <p>
            The trooper recounts events that took place a year ago: a flaming car wreck outside a railroad crossing with only one survivor, a kid who crawled out of the wreckage. The kid lost his eyes and a leg and suffered third-degree burns, and has been in a coma ever since. In the kid's wallet was a photo of his father, who looks like Cobra Commander minus the mustache and sunglasses.
          </p>
          <p>
            Cobra Commander and Destro travel to the hospital where the comatose <Link to="/character-bios/Billy">Billy</Link> lies. Cobra Commander looks over <Link to="/character-bios/Billy">Billy</Link>'s body and says, "I should have loved him better... How can he ever forgive me?" Destro tells him, "You can't change the past... Let it go. Do something about the future." Destro departs, going his separate way (Issue #55).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Billy Awakens: Father and Son Part Ways</h2>
          <img src={cobraCommander7} alt="Billy awakens and confronts Cobra Commander" className="profile-block-img" />
          <p>
            Cobra Commander travels by ambulance with the comatose <Link to="/character-bios/Billy">Billy</Link> to a garage in Denver, where a Cobra sleeper agent, <Link to="/character-bios/Fred7">Fred VII</Link>, is stationed. While Billy is in <Link to="/character-bios/Fred7">Fred VII's</Link> secret underground laboratory, he wakes up, suffering from amnesia. Cobra Commander embraces his son (Issue #58). <Link to="/character-bios/Fred7">Fred VII</Link>, a mechanical genius, builds Billy a prosthetic leg.
          </p>
          <p>
            Days pass. Billy discovers a martial arts dojo next to the garage, taught by the <Link to="/character-bios/BlindMaster">Blind Master</Link> and assisted by <Link to="/character-bios/Jinx">Jinx</Link>. Watching the practice, fragments of Billy's memories of training under <Link to="/character-bios/StormShadow">Storm Shadow</Link> awaken. Billy meets the <Link to="/character-bios/BlindMaster">Blind Master</Link> and <Link to="/character-bios/Jinx">Jinx</Link> and begins training under them (Issue #59).
          </p>
          <p>
            In time, Billy regains his lost memories. He realizes who his father is. He remembers Springfield and his role in the anti-Cobra underground. Billy confronts his father and tells him he despises everything he stands for. Billy tells Cobra Commander he is going his own way and assures his father that he will not betray him. Billy walks out (Issue #61).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Betrayed: Shot in the Back</h2>
          <img src={cobraCommander8} alt="Fred VII shoots Cobra Commander" className="profile-block-img" />
          <p>
            After witnessing <Link to="/character-bios/Billy">Billy</Link> walk out of his life, Cobra Commander decides to turn over a new leaf and try to win his son back. He removes his battle armor and begins to walk out of the lab. <Link to="/character-bios/Fred7">Fred VII</Link> is disgusted with Cobra Commander's decision, as he has given up everything for Cobra. He draws his pistol and shoots Cobra Commander in the back (Issue #61).
          </p>
          <p>
            <Link to="/character-bios/Fred7">Fred VII</Link> and <Link to="/character-bios/Raptor">Raptor</Link> believe Cobra Commander is dead.  Rather, he is in a catatonic state and appears lifeless. They bury his body in the woods outside of Denver (Issue #62).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Back from the Grave</h2>
          <img src={cobraCommander9} alt="Fred VIII revives Cobra Commander" className="profile-block-img" />
          <p>
            Cobra Commander had a policy where his Siegies (Crimson Guard) would spy on each other, with each Siegie believing they were the only one doing the spying. Thus, Fred VIII monitored <Link to="/character-bios/Fred7">Fred VII</Link>. Fred VIII followed <Link to="/character-bios/Fred7">Fred VII</Link> and <Link to="/character-bios/Raptor">Raptor</Link> to the burial site and uncovered Cobra Commander's body when they left. Fred VIII performed CPR on the body, reviving Cobra Commander. He then called the secret Fred hotline and located a Fred series doctor in the Denver area. The doctor removed the bullet from Cobra Commander's back and saw to his full recovery (Issue #98).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Rebuilding the Empire</h2>
          <img src={cobraCommander10} alt="Cobra Commander rebuilds his organization" className="profile-block-img" />
          <p>
            Cobra Commander contacts his Siegies (Crimson Guard) and starts rebuilding his organization, using seed money hidden in the Cayman Islands and the motivation of the Siegies. Starting out with modest accommodations, he quadruples them within a year. In less than two years, he has offices in ten major cities, taking advantage of human corruption. Cobra Commander becomes rich for a second time.
          </p>
          <p>
            Cobra Commander uses his loyal agents on Cobra Island to make "modifications" (plant explosives) for his return. He sets up remote sensors at the site of his grave, waiting for the traitors to return to the scene of the crime (Issue #98).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <img src={cobraCommander4} alt="Notes on Cobra Commander's true face" className="profile-block-img" />
          <p>
            During the Marvel run (1982–1994), seven different versions of Cobra Commander were produced: the <a href="https://www.yojoe.com/action/82/cobracommander.shtml" target="_blank" rel="noopener noreferrer">1982 straight-arm version</a> (<a href="https://www.yojoe.com/action/83/cobracommander1p5.shtml" target="_blank" rel="noopener noreferrer">1983 swivel-arm variant</a>), the <a href="https://www.yojoe.com/action/84/cobracommander2.shtml" target="_blank" rel="noopener noreferrer">1984 hooded version</a>, the <a href="https://www.yojoe.com/action/87/cobracommander3.shtml" target="_blank" rel="noopener noreferrer">1987 Battle Armor version</a>, the <a href="https://www.yojoe.com/action/91/cobracommander4.shtml" target="_blank" rel="noopener noreferrer">1991 version</a>, the <a href="https://www.yojoe.com/action/92/cobracommander5.shtml" target="_blank" rel="noopener noreferrer">1992 version</a>, the <a href="https://www.yojoe.com/action/93/cobracommander6.shtml" target="_blank" rel="noopener noreferrer">1993 version</a>, and the <a href="https://www.yojoe.com/action/94/cobracommander7.shtml" target="_blank" rel="noopener noreferrer">1994 Star Brigade version</a>.
          </p>
          <p>
            When shown without his mask, Cobra Commander appears wearing the disguise obtained from a Staten Island costume shop — a long mustache, ponytail, sunglasses, and beret (Issue #55). In Issue #98, part of his actual face is shown as Cobra Commander undergoes surgery to remove a bullet.  His face bears a striking resemblance to the faces of the <Link to="/character-bios/FredBroca">Fred series</Link> Crimson Guards. G.I. Joe: Declassified #1 reveals that the original <Link to="/character-bios/FredBroca">Fred Broca</Link> underwent plastic surgery to match the faces of the others in the series — raising the question of whose face the Freds were actually modeled after. Are their appearances been based on Cobra Commander's appearance?
          </p>
          
          <p className="profile-notes-footnote">
            *It is implied Cobra Commander was in the serivice at that time (likely drafted into the military for a two year term of service).  The government has a policy of sending only one member of a family to serve in combat at a time.  Thus, by extending his tours, Dan was able to keep his younger brother from being sent to Vietnam.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default CobraCommander;
