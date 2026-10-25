import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import dawn1 from './img/dawn/dawn_1.png';
import dawn2 from './img/dawn/dawn_2.png';
import dawn3 from './img/dawn/dawn_3.png';
import dawn4 from './img/dawn/dawn_4.png';
import dawn5 from './img/dawn/dawn_5.png';
import dawn6 from './img/dawn/dawn_6.png';
import dawn7 from './img/dawn/dawn_7.png';

const Dawn: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Dawn Moreno (Snake Eyes III)</h1>

        <p className="profile-intro">
          Dawn Moreno is an athletically gifted teenager who undergoes conditioning from the Brainwave Scanner, where she is accidentally implanted with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' memories. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' consciousness lives on inside Dawn, and she struggles with his ghost within her. Dawn escapes Cobra and is found by <Link to="/character-bios/StormShadow">Storm Shadow</Link>, who takes her to <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link>. There, she undergoes the training to become an Arashikage ninja. At 18, she joins the Army, completes A.I.T. and Ranger School, and becomes a member of G.I. Joe.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Snake Eyes’ Memories</h2>
          <img src={dawn1} alt="Dawn Moreno in Springfield" className="profile-block-img" />
          <p>
            In the Cobra-controlled town of Springfield, <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and Dr. Mindbender watch fifteen-year-old Dawn Moreno single-handedly take on a team of boys in lacrosse. Impressed by her athletic prowess, <Link to="/character-bios/CobraCommander">Cobra Commander</Link> takes Dawn on as his apprentice.
          </p>
          <p>
            Later, in <Link to="/character-bios/CobraCommander">Cobra Commander</Link>'s inner chamber, Destro, the <Link to="/character-bios/Baroness">Baroness</Link>, and the Dreadnoks burst in. Destro demands that they put the past behind them and work together in this new Cobra nation. Hiding in the shadows, Dawn watches (Issue #226). She sneaks up behind <Link to="/character-bios/Zarana">Zarana</Link>, steals her knife, and jumps onto Destro's shoulders, placing the blade by his exposed eye. The <Link to="/character-bios/Baroness">Baroness</Link> displays her marksmanship by shooting a fly on the hilt of Dawn's knife, causing Dawn to drop it.
          </p>
          <p>
            <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and Destro agree to a merger. The <Link to="/character-bios/Baroness">Baroness</Link> is impressed with Dawn and takes her on as a student (Issue #227). The next day, both the <Link to="/character-bios/Baroness">Baroness</Link> and <Link to="/character-bios/Zarana">Zarana</Link> train Dawn (Issue #228).
          </p>
          <p>
            To ensure Dawn's obedience, <Link to="/character-bios/CobraCommander">Cobra Commander</Link> has Dr. Mindbender hook her up to the Brainwave Scanner. Dawn is taken to Dr. Mindbender's lab and placed in the scanner. The <Link to="/character-bios/Baroness">Baroness</Link> and <Link to="/character-bios/Zarana">Zarana</Link> are there and openly object to the procedure, since Dawn has already proved her loyalty. Just as Dr. Mindbender begins, a Tele-Viper enters, saying <Link to="/character-bios/CobraCommander">Cobra Commander</Link> wants to see him. The Tele-Viper is actually <Link to="/character-bios/Zartan">Zartan</Link> in disguise, who sends Dr. Mindbender on a wild goose chase so that they can stop the process. Neither the <Link to="/character-bios/Baroness">Baroness</Link>, <Link to="/character-bios/Zarana">Zarana</Link>, nor <Link to="/character-bios/Zartan">Zartan</Link> knows how to operate the Brainwave Scanner, and they accidentally download <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' memories into Dawn.
          </p>
          <p>
            Dr. Mindbender and <Link to="/character-bios/CobraCommander">Cobra Commander</Link> return to the lab, and <Link to="/character-bios/CobraCommander">Cobra Commander</Link> notices that Dawn has escaped. Dr. Mindbender looks at the monitor and discovers that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' memories were implanted in Dawn (Issue #229).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Returning to the Arashikage</h2>
          <img src={dawn2} alt="Dawn Moreno presents Morning Light to Obake Obaasan" className="profile-block-img" />
          <p>
            Dawn travels to New York and steals the legendary Arashikage sword, Morning Light, from the museum (Issue #231). She wanders New York with the stolen sword until <Link to="/character-bios/StormShadow">Storm Shadow</Link> finds her on a rooftop. He tells her that the sword is rightfully his and that it has been kept at the museum for safekeeping. Dawn recognizes <Link to="/character-bios/StormShadow">Storm Shadow</Link> as Tommy and tells him that he saved her life in Vietnam. She also says that she feels she is missing something on her arm. <Link to="/character-bios/StormShadow">Storm Shadow</Link> rolls up his sleeve, shows her the Arashikage tattoo, and tells her, "You are missing this" (Issue #232).
          </p>
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link> takes Dawn to <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link>'s toy store in New York's East Village and introduces her to his aunt. Dawn remembers <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link> and tells her that she remembers how she received the scar on her Arashikage tattoo during the Obon ceremony. Dawn is then taken to Ellen Bogen's store, where Ellen takes her measurements to make her ninja togs. Dawn gives a formal presentation of Morning Light to <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link> and Ellen. She begins training under the three of them, and in addition to learning the Ways of the Arashikage, she will earn her G.E.D. (Issue #233).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Final Training in Tokyo</h2>
          <img src={dawn3} alt="Dawn Moreno in Tokyo for the final part of her training" className="profile-block-img" />
          <p>
            Dawn travels with <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link> to Tokyo for the final part of her training. The two enter an amusement park ride. When the ride car stops, they get out, and <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link> leads Dawn through a secret door to a locker room. There, <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link> opens a locker and gives Dawn her new ninja togs. Dawn dresses and wears them for the first time.
          </p>
          <p>
            <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link> then leads Dawn up a hidden stairway to a room of disorienting staircases that run in every direction. She explains that the room is meant to disorient intruders, and that a true Arashikage ninja can see past the illusions.
          </p>
          <p>
            Next, <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link> takes Dawn to a stage, where the Arashikage ninja perform in front of an audience to earn extra wages. One of the ninja onstage tells Dawn that it is corny, but it pays the bills (Issue #244).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Snake Eyes Unleashed</h2>
          <img src={dawn4} alt="Dawn Moreno confronts Firefly on top of a moving train" className="profile-block-img" />
          <p>
            While Dawn is performing onstage at the Tokyo amusement park with her fellow ninja, the Red Ninja attack, intent on killing every Arashikage ninja (Issue #245). <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is unleashed inside Dawn, and she relives his memories as she lays waste to the Red Ninja. In the aftermath of the battle, the Tokyo Police seal off the amusement park. Senior Advisor Harada from the Ministry of Defense arrives and takes over the operation from the police.
          </p>
          <p>
            Harada leads Police Lt. Kondo and Sgt. Imai across the crime scene, where the severed bodies of Red Ninja litter the ground. Harada explains that the ninja responsible was a young woman of exceptional skill, armed with the legendary Morning Light. He then reveals himself to be a ninja.
          </p>
          <p>
            While Harada investigates the amusement park, Dawn, <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link>, and Genji hide up in a cell tower. Dawn is reliving <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' memories of Vietnam, the fateful mission that claimed the lives of Ramon and Dickie. Suddenly, Dawn jumps down from the cell tower. <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link> realizes that Dawn is no longer herself: <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is in full control of her (Issue #246).
          </p>
          <p>
            Dawn makes her way to a Yakuza hideout, where she acquires firearms. Meanwhile, Harada relays the history of the Arashikage clan to Kondo and Imai. He tells them of the schism that followed the assassination of the <Link to="/character-bios/HardMaster">Hard Master</Link>, the defection of the American-born Tomisaburo (<Link to="/character-bios/StormShadow">Storm Shadow</Link>), and the rumors of an American soldier (<Link to="/character-bios/SnakeEyes">Snake Eyes</Link>) who was accepted into the Arashikage, returned to the States, and joined an elite covert team (G.I. Joe). Harada also describes the formation of the Red Ninja from renegade Arashikage and ninja from rival clans, as well as rumors of a European assassin (<Link to="/character-bios/Firefly">Firefly</Link>) associated with them (Issue #247).
          </p>
          <p>
            Dawn makes her way to the Red Ninja dojo in Tokyo and lays waste to the Red Ninja there. After she slaughters them, <Link to="/character-bios/Firefly">Firefly</Link> appears from the heart of the dojo (Issue #248). Dawn tells <Link to="/character-bios/Firefly">Firefly</Link> that she has a score to settle over the Sword Shrine incident. Shocked, <Link to="/character-bios/Firefly">Firefly</Link> tells her that only two people know of it: an Arashikage ninja and Onihashi's apprentice (<Link to="/character-bios/Zartan">Zartan</Link>). He tells her that now he must kill her, and the two battle. Dawn gains the upper hand, but <Link to="/character-bios/Firefly">Firefly</Link> escapes through a secret door in the floor, and Dawn pursues him (Issue #249).
          </p>
          <p>
            Dawn chases <Link to="/character-bios/Firefly">Firefly</Link> to the top of a moving train. <Link to="/character-bios/StormShadow">Storm Shadow</Link> soon jumps onto the train, with <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/Stalker">Stalker</Link> circling overhead in a helicopter. <Link to="/character-bios/StormShadow">Storm Shadow</Link> tells Dawn to step back and let the Joes handle this. He asks her, "Do you remember the sound of the helicopter?" Memories flood Dawn of the encounter between <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> on the roof of a moving train in New York, with the Dragonfly carrying <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/WildBill">Wild Bill</Link>. <Link to="/character-bios/StormShadow">Storm Shadow</Link> explains how <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> saved his life by throwing his weapon away and jumping between the moving cars.
          </p>
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link> tells Dawn that he can never repay this debt, and that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> taught him the lessons of loyalty, duty, and the need to break the Circle of Revenge. Dawn and <Link to="/character-bios/Firefly">Firefly</Link> continue to battle. <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/Zartan">Zartan</Link>, who has disguised himself as the <Link to="/character-bios/SoftMaster">Soft Master</Link>, jump onto the roof of the train. <Link to="/character-bios/Firefly">Firefly</Link> sees the <Link to="/character-bios/SoftMaster">Soft Master</Link> and says in shock, "You're dead!"
          </p>
          <p>
            Dawn gains the upper hand and puts Morning Light to <Link to="/character-bios/Firefly">Firefly</Link>'s neck. She tells him that she is putting her anger behind her and breaking the Circle of Vengeance, and that he no longer needs to fear her retribution or <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>'. <Link to="/character-bios/StormShadow">Storm Shadow</Link> asks Dawn whether it is her or <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> speaking. Dawn answers, "It is both of us."
          </p>
          <p>
            The <Link to="/character-bios/SoftMaster">Soft Master</Link> (<Link to="/character-bios/Zartan">Zartan</Link>) tells <Link to="/character-bios/Firefly">Firefly</Link> that he is going to finish what he started at the railway tracks. He jumps toward <Link to="/character-bios/Firefly">Firefly</Link>, and the two fall into the water. As Dawn is about to jump in to rescue the <Link to="/character-bios/SoftMaster">Soft Master</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link> tells her that it is <Link to="/character-bios/Zartan">Zartan</Link>. The group boards the helicopter.
          </p>
          <p>
            On the helicopter, <Link to="/character-bios/Scarlett">Scarlett</Link> tells Dawn that in two weeks, when she turns 18, a spot on the team will be open for her if she decides to enlist and completes basic training and AIT. <Link to="/character-bios/Stalker">Stalker</Link> introduces Dawn to <Link to="/character-bios/SeanCollins">Sean Collins</Link> and says that there will be two Snake Eyes on the team (Issue #250).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Carrying Snake Eyes’ Feelings for Scarlett</h2>
          <img src={dawn5} alt="Dawn Moreno in action with G.I. Joe in the Transcarpathian Mountains" className="profile-block-img" />
          <p>
            Dawn completes basic training, AIT, and Ranger School, and becomes a member of G.I. Joe. She is part of a team consisting of <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/Stalker">Stalker</Link>, and Mongoose, battling the Blood Front, a fascist paramilitary group, on board a train in the Transcarpathian Mountains. <Link to="/character-bios/WildBill">Wild Bill</Link>, Lift Ticket, and <Link to="/character-bios/Roadblock">Roadblock</Link> provide support from the Tomahawk flying overhead.
          </p>
          <p>
            Throughout the firefight, flashbacks of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' memories flood Dawn: being wounded and carried by <Link to="/character-bios/StormShadow">Storm Shadow</Link> to the Huey in Vietnam, the helicopter accident in which <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> rescued <Link to="/character-bios/Scarlett">Scarlett</Link> at the cost of his face and voice, and the Staten Island ferry ride with <Link to="/character-bios/Scarlett">Scarlett</Link>.
          </p>
          <p>
            In the aftermath of the battle, <Link to="/character-bios/Scarlett">Scarlett</Link> sees that Dawn is visibly upset. She takes Dawn aside and asks if she would like to talk in private (Issue #291). Dawn tells <Link to="/character-bios/Scarlett">Scarlett</Link> that during times of stress, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' memories assert themselves. She tells <Link to="/character-bios/Scarlett">Scarlett</Link> of her wish to capture Dr. Mindbender's Brainwave Scanner and rid herself of these memories. Dawn confesses that she is experiencing <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' feelings for <Link to="/character-bios/Scarlett">Scarlett</Link> (Issue #292).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">A Visit to Her Parents</h2>
          <img src={dawn6} alt="Dawn Moreno with her parents in Springfield" className="profile-block-img" />
          <p>
            Dawn is sent on a mission to infiltrate the Cobra town of Springfield and visits her parents' home in the middle of the night. Her parents, Oscar and Elena, are happy to see her, and the three embrace. Dawn stays in her old bedroom upstairs and keeps her infiltration activities secret from her parents because of their loyalty to Cobra (Issue #303).
          </p>
          <p>
            One evening, from her bedroom, Dawn spots their neighbor, Fred 23, dressed in his Crimson Guard uniform and armed, heading to the front door. Dawn's parents answer. Fred 23 says he suspects Dawn is with them and that it would be best if they turned her over. To prevent Fred 23 from reporting to Cobra, Dawn's parents knock him out.
          </p>
          <p>
            Dawn heads down the stairs and asks, "What have you done?" Her father says they will not turn her away. Her mother says they need to leave Springfield (Issue #305).
          </p>
          <p>
            While leaving Springfield in their car, Dawn's parents are stopped by a Springfield police officer, supported by Cobra troopers. The officer notices the luggage in the car and asks where they are going. Dawn's father says they are visiting his sister, who is ill, in Phoenix. The officer presses on, asking whether this has anything to do with Dawn. Her father lies, saying they have not seen her in two years.
          </p>
          <p>
            Dawn's mother reaches for the glove box and says she has a letter from her sister-in-law's doctor. The officer panics, believing she is about to grab a gun from the glove compartment. He and the Cobra troopers open fire, killing Dawn's parents (Issue #306).
          </p>
          <p>
            At the Pit, Dawn learns of her parents' deaths. Heartbroken, she blames herself for visiting them. She says that she is now an orphan, because they were all the family she had. <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and <Link to="/character-bios/StormShadow">Storm Shadow</Link> assure her that she still has a family. <Link to="/character-bios/Scarlett">Scarlett</Link> embraces her, and <Link to="/character-bios/StormShadow">Storm Shadow</Link> tells her that she is an Arashikage now (Issue #307).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Facing Her Parents’ Killer</h2>
          <img src={dawn7} alt="Dawn Moreno helps the wounded police officer during the battle for Springfield" className="profile-block-img" />
          <p>
            Serpentor Khan's force of cyborg mutant zombie soldiers attacks Springfield. The Joes send <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, and Dawn to infiltrate Springfield (Issue #308). In the midst of the battle, Dawn comes across the police officer who killed her parents. He is trapped inside a damaged police car. The officer recognizes Dawn and tells her that he did not mean to kill her parents: her mother was reaching for the glove compartment, and he thought she was reaching for a weapon.
          </p>
          <p>
            Serpentor's troops attack, and the Joes defeat the enemy. The police car catches fire in the battle. Dawn heads toward the trapped officer, and he dares her to kill him so that he will die before being consumed by the flames (Issue #309). Instead, Dawn runs to an abandoned ambulance and retrieves the Jaws of Life. She uses them to free the officer. The Joes return to the burning wreckage and see Dawn supporting the wounded officer, his arm draped over her shoulders. Dawn tells <Link to="/character-bios/Scarlett">Scarlett</Link>, "I didn't have the heart to watch him burn." <Link to="/character-bios/Scarlett">Scarlett</Link> replies, "Good for you, Dawn!"
          </p>
          <p>
            More of Serpentor's troops arrive and attack. While Dawn is battling the enemy, the officer raises his pistol and says, "That Moreno kid's moral superiority is stuck in my craw... I'll fix her smug behind..." Before he can fire, he is killed in an explosion caused by one of Serpentor's troops (Issue #310).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Dawn;