import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import snakeEyes1 from './img/snakeEyes/snakeEyes_1.png';
import snakeEyes2 from './img/snakeEyes/snakeEyes_2.png';
import snakeEyes3 from './img/snakeEyes/snakeEyes_3.png';
import snakeEyes4 from './img/snakeEyes/snakeEyes_4.png';
import snakeEyes5 from './img/snakeEyes/snakeEyes_5.png';
import snakeEyes6 from './img/snakeEyes/snakeEyes_6.png';
import snakeEyes7 from './img/snakeEyes/snakeEyes_7.png';
import snakeEyes8 from './img/snakeEyes/snakeEyes_8.png';
import snakeEyes9 from './img/snakeEyes/snakeEyes_9.png';
import snakeEyes10 from './img/snakeEyes/snakeEyes_10.png';
import snakeEyes11 from './img/snakeEyes/snakeEyes_11.png';
import snakeEyes12 from './img/snakeEyes/snakeEyes_12.png';
import snakeEyes13 from './img/snakeEyes/snakeEyes_13.png';
import snakeEyes14 from './img/snakeEyes/snakeEyes_14.png';
import snakeEyes15 from './img/snakeEyes/snakeEyes_15.png';
import snakeEyes16 from './img/snakeEyes/snakeEyes_16.png';
import snakeEyes17 from './img/snakeEyes/snakeEyes_17.png';
import snakeEyes18 from './img/snakeEyes/snakeEyes_18.png';
import snakeEyes19 from './img/snakeEyes/snakeEyes_19.png';
import snakeEyes20 from './img/snakeEyes/snakeEyes_20.png';

const SnakeEyes: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Snake Eyes</h1>

        <p className="profile-intro">
          Snake Eyes is one of the original G.I. Joe members and a man of mystery. His real name and place of birth remain classified. As the series progresses, more of his story comes into focus: his service in the Vietnam War, the tragic car accident that claims the lives of his family, and his training with the Arashikage ninja clan in Japan. Along the way, we discover Snake Eyes' past is woven into the backstories of many other characters in the series, both Joes and Cobras alike.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Vietnam War: The Tet Offensive</h2>
          <img src={snakeEyes1} alt="Snake Eyes during the Tet Offensive" className="profile-block-img" />
          <p>
            At the start of the Tet Offensive (January 31, 1968), Snake Eyes, Thomas Arashikage (<Link to="/character-bios/StormShadow">Storm Shadow</Link>), and Lonzo Wilkinson (Stalker) are enroute to report to MACV-SOG in Saigon when a pair of Viet Cong on a scooter open fire on their jeep. Lonzo and Thomas are both wounded, and their driver, Cory Barnett, is killed. Snake Eyes pursues the attackers in the jeep, but the Viet Cong fire several rounds into the vehicle, causing it to crash. Snake Eyes continues the pursuit on foot, eventually tracking the two men to a warehouse.
          </p>
          <p>
            Inside, the Viet Cong find Baron Eugene DeCobray and his fifteen-year-old sister, Anastasia (the future Baroness), waiting for them. The Baron has traveled to Saigon on a humanitarian mission to check on medical supplies his organization provided. He asks Anastasia to wait in the office while he settles a business matter with the two men, then confronts them about the missing supplies.
          </p>
          <p>
            One of the Viet Cong, Mr. Tran, admits they sold the supplies on the black market in exchange for weapons and explosives. Tran then raises his AK-47 and opens fire on the Baron. At that moment, Snake Eyes is just outside on the ledge. Right after the Baron is shot, Snake Eyes bursts through the window and kills both attackers with his Colt .45.
          </p>
          <p>
            Anastasia opens the office door to find Snake Eyes standing over the bodies of her brother and the two Viet Cong. Believing he is responsible for killing the three men, she blames Snake Eyes for her brother's death (<Link to="/comic-issues/Issue94">Issue #94</Link>).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Vietnam War: Friendship with Tommy and the Picture of his sister</h2>
          <img src={snakeEyes2} alt="Snake Eyes' friendship with Tommy Arashikage" className="profile-block-img" />
          <p>
            In Vietnam, Snake Eyes forms a close bond with fellow LRRP member Tommy Arashikage. The two serve an entire tour together. Tommy speaks often about his uncle's business in Japan and expresses hope that Snake Eyes will join the firm after the war. Throughout his service, Snake Eyes carries a battered photo of his twin sister, Terri, as a good luck charm — he believes that as long as he keeps it with him, nothing bad will happen (<Link to="/comic-issues/Issue26">Issue #26</Link>).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Vietnam War: LRRP Patrol</h2>
          <img src={snakeEyes3} alt="Snake Eyes on an LRRP patrol" className="profile-block-img" />
          <p>
            During Snake Eyes' second tour, he is part of a six-man Long Range Reconnaissance Patrol (LRRP) led by <Link to="/character-bios/Stalker">Stalker</Link> (Lonzo Wilkinson) and including <Link to="/character-bios/StormShadow">Storm Shadow</Link> (Thomas Arashikage), <Link to="/character-bios/Wade">Wade Collins</Link>, Ramon Escobedo, and Dickie Saperstein. Collins is on point when the patrol walks into an encampment of NVA regulars. Collins is shot and believed killed. Outnumbered, the patrol retreats, but Escobedo is shot dead and Saperstein is killed instantly after stepping on a landmine. Only Snake Eyes, <Link to="/character-bios/Stalker">Stalker</Link>, and <Link to="/character-bios/StormShadow">Storm Shadow</Link> escape (Issue #155).
          </p>
          <p>
            At the LZ, the three come under heavy enemy fire as when the Huey arrives. Snake Eyes is hit, dropping the photo of his twin sister, Terri, as he falls. <Link to="/character-bios/StormShadow">Storm Shadow</Link> leaps from the Huey and runs through a hail of gunfire to retrieve his wounded friend. Once aboard, he uses his own wrist wraps to bandage Snake Eyes' injuries (<Link to="/comic-issues/Issue26">Issue #26</Link>) and employs the Arashikage Mindset to aid the healing process (Issue #108).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Returning Home from the War</h2>
          <img src={snakeEyes4} alt="Snake Eyes returning home from Vietnam" className="profile-block-img" />
          <p>
            When Snake Eyes returns to the States, no one is there to greet him at the airport. He waits for hours. Clayton Abernathy (<Link to="/character-bios/Hawk">Hawk</Link>), then a junior officer, arrives. <Link to="/character-bios/Hawk">Hawk</Link> informs him that his parents and twin sister have been killed in a car accident on their way to the airport — a stoned veteran driving erratically at high speed struck the family car. With nothing left for him in America, Snake Eyes travels to Japan to take Tommy Arashikage up on his offer (<Link to="/comic-issues/Issue26">Issue #26</Link>).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Japan: Arashikage Clan</h2>
          <img src={snakeEyes5} alt="Snake Eyes training with the Arashikage clan" className="profile-block-img" />
          <p>
            Snake Eyes travels to Japan to take Tommy up on his offer to join the family business — which turns out to be the Arashikage ninja clan. Over the next three years, Snake Eyes trains with the clan and attains a level of skill that earns him the Arashikage tattoo on his forearm. He also gains favored status in the eyes of the <Link to="/character-bios/HardMaster">Hard Master</Link>, the clan's leader, who intends to name Snake Eyes his heir over his own nephew, Thomas Arashikage (<Link to="/character-bios/StormShadow">Storm Shadow</Link>).
          </p>
          <p>
            One night, the <Link to="/character-bios/HardMaster">Hard Master</Link> is teaching Snake Eyes the "Blind Sword" form when Snake Eyes hears someone outside in the courtyard. The <Link to="/character-bios/HardMaster">Hard Master</Link> dismisses the presence as no threat and, to illustrate the "Chameleon's Mantle" technique, steps behind a screen and mimics Snake Eyes' breathing and heartbeat. At that moment, an arrow fired into the building kills the <Link to="/character-bios/HardMaster">Hard Master</Link> — an arrow that belongs to Tommy. Hearing the commotion, the Soft Master leaves his room and makes his way toward the building where the <Link to="/character-bios/HardMaster">Hard Master</Link> and Snake Eyes have been training. Along the way, he sees Tommy fleeing the courtyard. Tommy never returns (<Link to="/comic-issues/Issue26">Issue #26</Link>).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Recruitment to G.I. Joe</h2>
          <img src={snakeEyes6} alt="Snake Eyes recruited to G.I. Joe" className="profile-block-img" />
          <p>
            Colonel Clayton Abernathy (<Link to="/character-bios/Hawk">Hawk</Link>) is putting together the G.I. Joe team, and <Link to="/character-bios/Stalker">Stalker</Link> (Lonzo Wilkinson) recommends Snake Eyes for it. <Link to="/character-bios/Hawk">Hawk</Link> and <Link to="/character-bios/Stalker">Stalker</Link> learn that Snake Eyes is living in seclusion in the High Sierras and track him down to a remote cabin there, convincing him to join the team (<Link to="/comic-issues/Issue27">Issue #27</Link>).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Meeting Scarlett</h2>
          <img src={snakeEyes7} alt="Snake Eyes meeting Scarlett" className="profile-block-img" />
          <p>
            Snake Eyes first meets <Link to="/character-bios/Scarlett">Scarlett</Link> (Shana O'Hara) when she is putting the G.I. Joe candidates through hand-to-hand combat training. <Link to="/character-bios/Scarlett">Scarlett</Link> easily defeats the other candidates, but when it comes to Snake Eyes' turn, he intentionally lets her win. <Link to="/character-bios/Scarlett">Scarlett</Link> recognizes this and is impressed by his self-control and the fact that he has nothing to prove — she finds herself fascinated by him.
          </p>
          <p>
            After practice, <Link to="/character-bios/Scarlett">Scarlett</Link> catches up with Snake Eyes as he is heading off post, and the two talk. She learns about his two tours in Vietnam, the photo of his twin sister that he carries with him, and the tragic loss of his family. The two end up riding the Staten Island Ferry together, growing close (<Link to="/comic-issues/Issue27">Issue #27</Link>).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Helicopter Crash</h2>
          <img src={snakeEyes8} alt="The helicopter crash" className="profile-block-img" />
          <p>
            A few months after Snake Eyes and <Link to="/character-bios/Scarlett">Scarlett</Link>'s first encounter, Snake Eyes, <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/Grunt">Grunt</Link>, and Rock 'n Roll are on a hostage rescue mission in the Middle East. Lacking proper dust filters, the helicopter's engine stalls, and the pilot gives the order to jump. <Link to="/character-bios/Grunt">Grunt</Link> and Rock 'n Roll jump clear, but one of the helicopter's doors slams shut, trapping <Link to="/character-bios/Scarlett">Scarlett</Link>'s web gear inside. Snake Eyes refuses to jump and instead stays behind to save her.
          </p>
          <p>
            The helicopter crashes into a second helicopter, and the impact sends burning aviation fuel spewing through the plexiglass door window, burning Snake Eyes' face and severing his vocal cords. <Link to="/character-bios/Scarlett">Scarlett</Link> is knocked unconscious in the crash. Rock 'n Roll and <Link to="/character-bios/Grunt">Grunt</Link> run to the burning wreckage and find a horribly burned Snake Eyes carrying an unconscious <Link to="/character-bios/Scarlett">Scarlett</Link> to safety.
          </p>
          <p>
            Snake Eyes spends the next six months in the hospital. He could have left the service with full disability benefits; instead, he chooses to remain on the team (<Link to="/comic-issues/Issue27">Issue #27</Link>).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Dr. Venom's Brainwave Scanner</h2>
          <img src={snakeEyes9} alt="Snake Eyes hooked to Dr. Venom's Brainwave Scanner" className="profile-block-img" />
          <p>
            Snake Eyes, <Link to="/character-bios/Scarlett">Scarlett</Link>, and Zap are captured while investigating a suspected Cobra stronghold in Manhattan. Knocked unconscious with sleeping gas, they awaken in the Cobra town of Springfield. <Link to="/character-bios/Scarlett">Scarlett</Link> and Zap wake up in a prison cell, while Snake Eyes wakes up in Dr. Venom's laboratory, hooked up to the Brainwave Scanner.
          </p>
          <p>
            Dr. Venom uses the scanner to learn the location of the G.I. Joe secret base, and in the process, it collects and stores Snake Eyes' memories (memories that Dr. Mindbender will later use to create his Snake Eyes clone). Snake Eyes draws on his ninja training to slow his heartbeat and breathing to the semblance of death. Believing him dead, Dr. Venom and his assistant unhook Snake Eyes from the scanner — at which point Snake Eyes attacks, knocking both out.
          </p>
          <p>
            Snake Eyes makes his way out of the lab to the video arcade located above, where he runs into <Link to="/character-bios/Scarlett">Scarlett</Link> and Zap, who have made their own escape with the help of a youth named <Link to="/character-bios/Billy">Billy</Link>. The trio hijacks the aircraft that had brought them to Springfield and flies back to New York, where they catch a bus to their base on Staten Island (Issue #10).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Encountering Storm Shadow as a Cobra Agent</h2>
          <img src={snakeEyes10} alt="Snake Eyes encountering Storm Shadow as a Cobra agent" className="profile-block-img" />
          <p>
            Snake Eyes' first encounter with his sword brother, Thomas Arashikage (<Link to="/character-bios/StormShadow">Storm Shadow</Link>), takes place at the Silent Castle, a Cobra stronghold in the Trans-Carpathian Mountains. <Link to="/character-bios/StormShadow">Storm Shadow</Link> is in the service of Cobra, and shortly after he arrives at the Silent Castle with a captured <Link to="/character-bios/Scarlett">Scarlett</Link>, Snake Eyes parachutes from a C-130 to infiltrate the castle. Meanwhile, <Link to="/character-bios/Scarlett">Scarlett</Link> manages to break free and commandeers a Cobra C.L.A.W. (Covert Light Aerial Weapon, a Cobra winged jet pack).
          </p>
          <p>
            Snake Eyes is confronted by <Link to="/character-bios/StormShadow">Storm Shadow</Link> and his three Red Ninja underlings. He defeats the Red Ninja and battles <Link to="/character-bios/StormShadow">Storm Shadow</Link>. When <Link to="/character-bios/Scarlett">Scarlett</Link> arrives mounted on the C.L.A.W., <Link to="/character-bios/StormShadow">Storm Shadow</Link> hurls his sword at her, but Snake Eyes catches it with his bare hands. The two then fly off together (<Link to="/comic-issues/Issue21">Issue #21</Link>).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Learning the Truth from Storm Shadow</h2>
          <img src={snakeEyes11} alt="Snake Eyes learning the truth from Storm Shadow" className="profile-block-img" />
          <p>
            During Snake Eyes' visit with the Soft Master at the Comidas Chinas café in New York City (which the Soft Master owns), <Link to="/character-bios/StormShadow">Storm Shadow</Link> steals the arrow that had killed the <Link to="/character-bios/HardMaster">Hard Master</Link> — an arrow the Soft Master had kept over the years. Snake Eyes pursues <Link to="/character-bios/StormShadow">Storm Shadow</Link> to the top of a moving train, and the two battle. With his back turned away from the direction the train is traveling, <Link to="/character-bios/StormShadow">Storm Shadow</Link> fails to notice an upcoming tunnel. Snake Eyes drops his weapon and leaps down between the train cars, prompting <Link to="/character-bios/StormShadow">Storm Shadow</Link> to follow — an action that ends up saving <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s life.
          </p>
          <p>
            Between the cars, <Link to="/character-bios/StormShadow">Storm Shadow</Link> drops his weapon and tells Snake Eyes he did not kill his uncle, the <Link to="/character-bios/HardMaster">Hard Master</Link>. Earlier that day, he explains, he shot a squirrel with his bow, but when he went to retrieve the arrow, both the squirrel and the arrow were gone. <Link to="/character-bios/StormShadow">Storm Shadow</Link> says he saw the real assassin — the one who shot the <Link to="/character-bios/HardMaster">Hard Master</Link> with that same arrow — escape aboard a Cobra helicopter, and that he joined Cobra's ranks to track down his uncle's killer. <Link to="/character-bios/StormShadow">Storm Shadow</Link> then departs (<Link to="/comic-issues/Issue27">Issue #27</Link>).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Wade Collins Survived Vietnam</h2>
          <img src={snakeEyes12} alt="Snake Eyes discovering Wade Collins survived Vietnam" className="profile-block-img" />
          <p>
            Snake Eyes and <Link to="/character-bios/Stalker">Stalker</Link> are at the Vietnam Memorial in Washington, using the directory of names to find the location of <Link to="/character-bios/Wade">Wade Collins</Link>' name on the wall, when they discover his name is not listed. Just then, the pair are confronted by a man with a pistol raised, who claims that <Link to="/character-bios/Wade">Wade Collins</Link> is not dead — that Cobra has given him a new face, a new name, and a new life (Issue #42).
          </p>
          <p>
            The man claims he is <Link to="/character-bios/Wade">Wade Collins</Link>, and that Cobra plastic surgeons gave him a new face. Wade says he never died in Vietnam; instead, he was wounded and captured by the NVA (North Vietnamese Army). Wade spends the next two years rotting away in a POW camp under horrible conditions.
          </p>
          <p>
            When the war ends, he returns to the States, where he is spat on at the airport and called a baby killer. His wife doesn't even have the decency to tell him about the divorce herself — she sends her lawyer instead. Unable to find employment, as employers are reluctant to hire Vietnam War veterans, Wade begins wandering the country.
          </p>
          <p>
            One day, he comes across a Cobra recruitment poster in a small town. Wade joins the organization and works his way up through the ranks. When the Crimson Guard is formed, he is one of the first to join. He undergoes plastic surgery to match the others in his series (the Fred series).
          </p>
          <p>
            <Link to="/character-bios/Stalker">Stalker</Link> and Snake Eyes convince Wade that Cobra is using him. The three drive back to Staten Island, where Wade meets his adoptive family and convinces them to flee Cobra with him to start a new life (Issue #43).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Rescue Mission in Borovia</h2>
          <img src={snakeEyes13} alt="Snake Eyes' rescue mission in Borovia" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Stalker">Stalker</Link>, Quick Kick, Snow Job, and Outback are sent on an undercover mission to the People's Democratic Republic of Borovia (a Communist state), disguised as trade emissaries. The mission goes south: <Link to="/character-bios/Stalker">Stalker</Link>, Quick Kick, and Snow Job are captured, while Outback escapes (Outback wants to stay and fight, but <Link to="/character-bios/Stalker">Stalker</Link> orders him to escape). The U.S. State Department denies any connection to the three captive Joes, and as a result, the G.I. Joes are denied a rescue mission (Issue #61).
          </p>
          <p>
            Snake Eyes, <Link to="/character-bios/Scarlett">Scarlett</Link>, Flint, and Lady Jay are vacationing in Grenada when they encounter a blind man walking down the road. The blind man asks for help reaching the airfield in time to meet his daughter, and Snake Eyes and <Link to="/character-bios/Scarlett">Scarlett</Link> agree to guide him through a shortcut across a field of tall grass, while Lady Jay and Flint remain on the road.
          </p>
          <p>
            Flint finds himself wondering where he has seen that field before — then realizes he has seen news articles identifying it as a minefield. Just after uncovering a "Danger: Mines" sign buried in the grass, an explosion goes off. It appears that Snake Eyes, <Link to="/character-bios/Scarlett">Scarlett</Link>, and the blind man have been killed in the blast. The blind man, however, turns out to be the Blind Master, who has helped Snake Eyes and <Link to="/character-bios/Scarlett">Scarlett</Link> fake their deaths so they can travel to Borovia to rescue <Link to="/character-bios/Stalker">Stalker</Link>, Quick Kick, and Snow Job (Issue #63).
          </p>
          <p>
            Snake Eyes, <Link to="/character-bios/Scarlett">Scarlett</Link>, and the Blind Master first travel to France (Issue #64), then on to Borovia, where they join a circus troupe (Issue #65). The troupe is led by the White Clown, whose lover, Magda, is locked away in a Borovian gulag for criticizing the government. Assisting the White Clown is the dwarf Orlovsky.
          </p>
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, and <Link to="/character-bios/Billy">Billy</Link> later arrive and join up with Snake Eyes, <Link to="/character-bios/Scarlett">Scarlett</Link>, and the Blind Master. Together, the six raid the gulag, kill the guards, and free all the prisoners, including <Link to="/character-bios/Stalker">Stalker</Link>, Quick Kick, and Snow Job. As the Joes approach the river bordering Borovia, they encounter the White Clown and Orlovsky, who have the circus cannon hauled behind his car. The White Clown fires the Joes from the cannon, launching them safely into the river, where they swim to the other side (Issue #66).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Reconstructive Surgery and the Baroness' Revenge</h2>
          <img src={snakeEyes14} alt="Snake Eyes and the Baroness' revenge plot" className="profile-block-img" />
          <p>
            Snake Eyes and <Link to="/character-bios/Scarlett">Scarlett</Link> travel to the Bern Institute of Reconstructive Surgery in Switzerland, where Snake Eyes is to undergo surgery to restore his face. Dr. Hundtkinder, who had reconstructed the Baroness' face years earlier, contacts her about the situation. The Baroness, who falsely believes Snake Eyes killed her brother in Saigon during the Tet Offensive, makes plans to capture Snake Eyes while he is under the knife (<Link to="/comic-issues/Issue93">Issue #93</Link>).
          </p>
          <p>
            At the hospital, <Link to="/character-bios/Scarlett">Scarlett</Link> receives a call from <Link to="/character-bios/Hawk">Hawk</Link>, who has just learned of the plot between the Baroness and Dr. Hundtkinder. <Link to="/character-bios/Scarlett">Scarlett</Link> breaks into the operating room, ties up Dr. Hundtkinder and his assistants, places the unconscious Snake Eyes in a wheelchair, and makes her way out of the surgery room. Just then, the Baroness arrives with a group of Vipers.
          </p>
          <p>
            One of the Vipers shoots <Link to="/character-bios/Scarlett">Scarlett</Link> in the arm. The Baroness then stands over the wounded <Link to="/character-bios/Scarlett">Scarlett</Link> and shoots her point-blank in the head before taking the unconscious Snake Eyes to the Cobra Consulate in New York (<Link to="/comic-issues/Issue94">Issue #94</Link>).
          </p>
          <p>
            Snake Eyes is taken to the Consulate's subbasement, where he is met by the Paine Brothers, a trio of torturers, and chained to the wall. The Baroness tells the now conscious Snake Eyes she has killed his beloved <Link to="/character-bios/Scarlett">Scarlett</Link> and will have him tortured to death for the murder of her brother. Just then, a Tele-Viper informs her that Destro will be arriving by helicopter on the Consulate's roof, and she departs to meet him.
          </p>
          <p>
            Using his ability to slow his heartrate and breathing, Snake Eyes feigns death. One of the Paine Brothers, carrying a hot fire poker, approaches him, believing he has died. Snake Eyes kicks the Paine Brother, seizes the poker, and uses it to break his chains free from the wall. Now free, he battles and kills both Paine Brothers, taking their weapons and uniforms — which become his new outfit.
          </p>
          <p>
            Snake Eyes then makes his way up to the second sublevel and fills a duffle bag with explosives. He strategically plants them throughout the lower levels, triggering explosions that render the level below him impassable. Most of the Consulate's occupants flee, save for a mixed platoon of Vipers and the Baroness herself. Snake Eyes then proceeds upward to confront them (<Link to="/comic-issues/Issue95">Issue #95</Link>).
          </p>
          <p>
            Outside the Consulate, at a newsstand, <Link to="/character-bios/Stalker">Stalker</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, and <Link to="/character-bios/Wade">Wade Collins</Link> keep watch. <Link to="/character-bios/StormShadow">Storm Shadow</Link> uses his ninja abilities to scale the Consulate's walls to reach Snake Eyes. Meanwhile, the Baroness and the surviving Vipers barricade themselves in the penthouse. Snake Eyes, disguised as one of the Vipers, waits inside as <Link to="/character-bios/StormShadow">Storm Shadow</Link> approaches from the other side of the penthouse door. A Heat Viper fires a missile that blows the barricade open; <Link to="/character-bios/StormShadow">Storm Shadow</Link> dodges the blast and enters, searching for Snake Eyes. Snake Eyes then reveals himself, and the sword brothers square off as the penthouse begins to collapse around them.
          </p>
          <p>
            The Vipers are thrown to their deaths as the floor gives way. The Baroness is about to fall as well, when Snake Eyes catches her hand. Shocked that he would save her, she draws her pistol with her free hand and points it at him, vowing she will still have her revenge. At that moment, Destro arrives in the crew compartment of a Cobra helicopter.
          </p>
          <p>
            Destro tells the Baroness that Snake Eyes did not kill her brother. He reveals that he was in Saigon with his father, the previous Destro, investigating the murder, and explains that Eugene DeCobray was wearing a bulletproof vest — it was the AK-47 rounds themselves that killed him.
          </p>
          <p>
            Overcome with guilt, the Baroness strikes Snake Eyes' hand, breaking his grip on her. <Link to="/character-bios/StormShadow">Storm Shadow</Link> catches her before she can fall to her death, and together, he and Snake Eyes help her toward Destro's helicopter. But as Destro reaches out for Snake Eyes, the floor beneath Snake Eyes and <Link to="/character-bios/StormShadow">Storm Shadow</Link> gives way.
          </p>
          <p>
            Fortunately, a Tomahawk helicopter is nearby. Lift Ticket employs a barrel-roll maneuver, which catches Snake Eyes and <Link to="/character-bios/StormShadow">Storm Shadow</Link> as they fall. Aboard the Tomahawk, Snake Eyes finds Doc tending to a comatose <Link to="/character-bios/Scarlett">Scarlett</Link> — it turns out the bullet did not kill her after all, though she remains in a coma with an uncertain prognosis (<Link to="/comic-issues/Issue96">Issue #96</Link>).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Scarlett in a Coma</h2>
          <img src={snakeEyes15} alt="Scarlett in a coma" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Scarlett">Scarlett</Link> is taken to Midtown Hospital in New York. The doctors do not know when, if ever, she will come out of her coma — or whether she will be able to live a normal life again if she does (Issue #97).
          </p>
          <p>
            Time passes. Snake Eyes stays by her side, while <Link to="/character-bios/StormShadow">Storm Shadow</Link> remains at the hospital to support his friend. One day, <Link to="/character-bios/Scarlett">Scarlett</Link>'s sister, <Link to="/character-bios/Sioban">Sioban</Link> O'Hara, an attorney-at-law, arrives with a court order to terminate her life-support systems (Issue #101). <Link to="/character-bios/Sioban">Sioban</Link> tries to prevent Snake Eyes from entering <Link to="/character-bios/Scarlett">Scarlett</Link>'s room, but he pushes her aside, enters the room, kneels beside <Link to="/character-bios/Scarlett">Scarlett</Link>, and says her name (Issue #102).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">The Mission to Rescue George Strawhacker</h2>
          <img src={snakeEyes16} alt="The mission to rescue George Strawhacker" className="profile-block-img" />
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link> wants to give his friend a mission to take his mind off the upcoming termination of <Link to="/character-bios/Scarlett">Scarlett</Link>'s life support. He steals the George Strawhacker file from the vault at Fort Leonard. Strawhacker, an agent of an unnamed American intelligence agency, is the fiancé of Snake Eyes' late twin sister and is being held prisoner in a Borovian gulag. <Link to="/character-bios/StormShadow">Storm Shadow</Link> believes that a mission to rescue someone so dear to Snake Eyes will help him heal, so he infiltrates the Jugglers' chamber inside the Pentagon and threatens them into authorizing the mission.
          </p>
          <p>
            Snake Eyes, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, and <Link to="/character-bios/Stalker">Stalker</Link> board a B-2 stealth bomber that flies over Borovian airspace. Just before Snake Eyes makes his HALO jump, <Link to="/character-bios/StormShadow">Storm Shadow</Link> uses the Arashikage Mindset to turn him into an uncaring killing machine, capable of completing the mission without distraction. As Snake Eyes descends toward the ground, <Link to="/character-bios/Scarlett">Scarlett</Link> awakes from her coma, asking for him (Issue #103).
          </p>
          <p>
            Borovia is in a state of political turmoil: the Marxist-Leninist government is being overthrown, and an ethnic cleansing of the Lower Borovians is underway. Snake Eyes lands on the roof of a government building occupied by Lower Borovian soldiers who are firing on the crowds below. He breaks through a window, kills the soldiers, and throws their bodies out into the street; this rallies the masses outside, who storm the building in search of the masked stranger.
          </p>
          <p>
            Snake Eyes then makes his way to the headquarters of the Security Police, a building surrounded by crowds of Upper Borovians seeking to overthrow the government — among them the White Clown and Orlovsky the dwarf. Snake Eyes rushes the building, leaping through a hail of gunfire. The White Clown recognizes Snake Eyes by his acrobatic style, and he and Orlovsky follow him inside. Shortly after, the crowd surges forward and storms the building.
          </p>
          <p>
            Inside, Snake Eyes searches the records room until he finds Strawhacker's file. Looking over his shoulder, the White Clown sees that Strawhacker is being held in a secret security block beneath Gulag 23 — the same place where his beloved Magda is imprisoned.
          </p>
          <p>
            As Snake Eyes leaves the building, a young girl named <Link to="/character-bios/Marina">Marina</Link> runs up to him, pleading that the mob is about to execute her father for being an Upper Borovian. Snake Eyes ignores her pleas, and the mob shoots her father in the street. The White Clown notices how much Snake Eyes has changed. He and Orlovsky then drive Snake Eyes to Gulag 23 (Issue #104).
          </p>
          <p>
            Outside Gulag 23, a mob has gathered, made up of people whose family members are imprisoned inside. Snake Eyes storms the gulag, killing the guards on the surface before descending into the sewers. The White Clown and Orlovsky soon follow.
          </p>
          <p>
            In the sewers, Snake Eyes comes across a group of guards fleeing with Strawhacker and Magda. He dispatches the guards and frees the two prisoners. Strawhacker recognizes Snake Eyes despite his mask, and the White Clown embraces Magda.
          </p>
          <p>
            When they return to the surface and rejoin the mob surrounding the gulag, Magda is horrified to see that the revolution has given rise to ethnic cleansing. <Link to="/character-bios/Marina">Marina</Link> and several other Upper Borovians are being led into the crowd to be killed. <Link to="/character-bios/Marina">Marina</Link> spots Snake Eyes and tells the crowd he is no hero — he let her father be executed. The mob's leader, Mertz, pistol-whips <Link to="/character-bios/Marina">Marina</Link> and points his gun at her, calling her subhuman.
          </p>
          <p>
            Strawhacker strikes Mertz, knocking him to the ground, and tells him he is no different from the regime they just overthrew. Mertz shoots and kills Strawhacker — and the shock of it breaks the Arashikage Mindset's hold over Snake Eyes. Snake Eyes raises his gun toward Mertz. The mob sides with Snake Eyes and beats Mertz.
          </p>
          <p>
            As the mob prepares to hang Mertz, <Link to="/character-bios/Marina">Marina</Link> begs Snake Eyes to save him, insisting that even if Mertz is a bad man, they can't let him be hanged. Just as the noose tightens, Snake Eyes shoots the rope, saving Mertz's life. Snake Eyes then departs Borovia together with <Link to="/character-bios/Marina">Marina</Link> (Issue #106). In America, <Link to="/character-bios/Marina">Marina</Link> is adopted by the Collins family, becoming Sean and Heather's sister (Issue #108).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Letter to Sean Collins</h2>
          <img src={snakeEyes17} alt="Snake Eyes' letter to Sean Collins" className="profile-block-img" />
          <p>
            On the day the Pit is being deactivated and the G.I. Joe team disbanded, Snake Eyes receives a letter from <Link to="/character-bios/SeanCollins">Sean Collins</Link>, <Link to="/character-bios/Wade">Wade Collins</Link>' adopted son. Sean is turning seventeen in a month and wants his adoptive father to sign his enlistment papers so he can join the Army. Wade tells Sean he wants him to write to Snake Eyes first, before making his decision.
          </p>
          <p>
            Snake Eyes gives Sean a heartfelt and honest reply. He says there is no honor or glory in the occupation of a soldier and tells Sean about the other LRRP members he and Wade had served with. Ramon Escobedo had re-upped for a second tour to keep his younger brother from being sent to 'Nam. Dickie Saperstein had re-upped for a second tour to pay for his father's heart surgery. Dickie's dad died on the operating table. Both Ramon and Dickie died the same day Wade was taken captive.
          </p>
          <p>
            Snake Eyes explains that <Link to="/character-bios/Stalker">Stalker</Link> had joined the Army to escape the mean streets of Detroit, which had already claimed the lives of his two older brothers. <Link to="/character-bios/Stalker">Stalker</Link> never told his mother he was serving in Vietnam; instead, he had a cousin stationed in Germany reroute his letters, so that his mother believed he was stationed there instead.
          </p>
          <p>
            Snake Eyes then speaks of returning home from the war — there were no welcome parties or parades; he was spat on and called a baby killer. In the end, he tells Sean he has no regrets about being a soldier, as he'd had the privilege of serving alongside men and women he could depend on utterly. He closes by writing that bearing arms for the Constitution "is not a profession per se, it is a trust" (Issue #155).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">G.I. Joe Reactivate: Attack in the High Sierras</h2>
          <img src={snakeEyes18} alt="Attack in the High Sierras" className="profile-block-img" />
          <p>
            Following the disbandment of G.I. Joe, Snake Eyes and <Link to="/character-bios/Scarlett">Scarlett</Link> retire to his cabin in the High Sierras. Cobra's nefarious activities continue. An undisclosed amount of time passes. Duke travels to the High Sierras to find them.
          </p>
          <p>
            While <Link to="/character-bios/Scarlett">Scarlett</Link> is in town, Red Ninja attack the cabin. Snake Eyes sets the cabin on fire, thwarting the Red Ninja's night vision and burning those still inside. As he battles the three remaining Red Ninja outside, <Link to="/character-bios/Scarlett">Scarlett</Link> and Duke arrive. Timber shows up shortly afterward, carrying a sniper rifle in his teeth, claiming the life of the last Red Ninja.
          </p>
          <p>
            On their way to the cabin, Duke tells <Link to="/character-bios/Scarlett">Scarlett</Link>, "Anabasis is a go" — indicating that G.I. Joe is reactivated (Issue #156).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Snake Eyes' Sacrifice</h2>
          <img src={snakeEyes19} alt="Snake Eyes' sacrifice at the Pit" className="profile-block-img" />
          <p>
            In the secret sublevels below the Pit, Joseph and Jane Colton create a clone of Serpentor. Serpentor breaks free and battles the G.I. Joes, who prove no match for him. Duke throws a grenade at Serpentor, but Serpentor catches it and hurls it back at Duke. Snake Eyes catches the grenade and rushes toward Serpentor, using his body to push Serpentor and the grenade over the ledge. The two fall off the ledge as the grenade explodes, killing them both. Snake Eyes' sacrifice saves the G.I. Joe team (Issue #213).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Snake Eyes' Rebirth</h2>
          <img src={snakeEyes20} alt="Snake Eyes' rebirth" className="profile-block-img" />
          <p>
            As Cobra Island comes under attack and faces an existential threat, Dr. Mindbender initiates one of his backup plans. He and a Techno-Viper travel to the morgue where a cloned body of Snake Eyes is kept. Years earlier, using Snake Eyes' memories and DNA obtained by Dr. Venom from the Brainwave Scanner, Dr. Mindbender had created a duplicate of Snake Eyes free of the injuries the original sustained, including those to his vocal cords. Dr. Mindbender's goal is to create a clone of Snake Eyes fully loyal to Cobra.
          </p>
          <p>
            Dr. Mindbender and the Techno-Viper bring Snake Eyes' body to the lab, where they place it in a chamber to transfer the memories and activate it. Dr. Mindbender notices that the memory of the Staten Island ferry ride with <Link to="/character-bios/Scarlett">Scarlett</Link> registers as unusually intense; the Techno-Viper reports that this memory spikes every metric. When the process ends, the clone of Snake Eyes breaks free (Issue #299).
          </p>
          <p>
            At first, Snake Eyes appears loyal to Cobra. However, the memories of <Link to="/character-bios/Scarlett">Scarlett</Link> overpower the Cobra programming. Snake Eyes turns on the Vipers in the lab, cutting a path of death and destruction. The G.I. Joe team intercepts a transmission that the real Snake Eyes is back and rushes toward the lab.
          </p>
          <p>
            In the lab's back loading bay, they find Snake Eyes battling a force of Vipers and join the fight. After the battle, Snake Eyes approaches <Link to="/character-bios/Scarlett">Scarlett</Link> on the W.H.A.L.E. and removes his mask. <Link to="/character-bios/Scarlett">Scarlett</Link> sees that his wounds to his face and vocal cords have been reversed. Snake Eyes says "Scarlett," with undamaged voice cords. The two embrace, and the original Snake Eyes rejoins the G.I. Joe team, resuming his relationship with <Link to="/character-bios/Scarlett">Scarlett</Link> (Issue #300).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            Larry Hama based the physical appearance of the unmasked Snake Eyes on Sgt. Bob Light, a Huey door gunner of the 1st Air Cavalry whom he knew during the Vietnam War. Sgt. Light had slicked-back blond hair and a tall, lean physique. He served on Bart Wulf's Huey. Wulf is another one of Mr. Hama's friends he met in Vietnam, who became the basis for Wild Bill.
          </p>
          <p>
            During the Marvel run (1982–1994), six versions of Snake Eyes action figures were produced: the <a href="https://www.yojoe.com/action/82/snakeeyes.shtml" target="_blank" rel="noopener noreferrer">1982 version 1</a> (with a <a href="https://www.yojoe.com/action/83/snakeeyes1p5.shtml" target="_blank" rel="noopener noreferrer">1983 swivel-arm version 1.5</a>), the <a href="https://www.yojoe.com/action/85/snakeeyes2.shtml" target="_blank" rel="noopener noreferrer">1985 version 2</a>, the <a href="https://www.yojoe.com/action/89/snakeeyes3.shtml" target="_blank" rel="noopener noreferrer">1989 version 3</a>, the <a href="https://www.yojoe.com/action/91/snakeeyes4.shtml" target="_blank" rel="noopener noreferrer">1991 version 4</a>, the <a href="https://www.yojoe.com/action/93/snakeeyes5.shtml" target="_blank" rel="noopener noreferrer">1993 version 5</a>, and the <a href="https://www.yojoe.com/action/94/snakeeyes6.shtml" target="_blank" rel="noopener noreferrer">1994 Shadow Ninja variant</a> (identical to version 5, but with color-changing plastic). Numerous further versions of Snake Eyes were produced following the Marvel run. Snake Eyes obtains his version 3 uniform by assembling an amalgamation of the Paine Brothers' uniforms from the sub-basement of the Cobra Consulate (<Link to="/comic-issues/Issue95">Issue #95</Link>). Following the reactivation of the G.I. Joe team, Snake Eyes wears either his version 1 or version 2 uniform.
          </p>
          <p>
            The first two versions of Snake Eyes' file card list his rank as E-5. When Snake Eyes first meets <Link to="/character-bios/Hawk">Hawk</Link> at the airport, he is shown wearing sergeant's stripes (E-5) on his uniform (<Link to="/comic-issues/Issue26">Issue #26</Link>). Snake Eyes' file cards for the remainder of the Marvel run list his rank as E-7 (Sergeant First Class).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default SnakeEyes;
