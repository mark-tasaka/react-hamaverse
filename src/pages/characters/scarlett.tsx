import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import scarlett1 from './img/scarlett/scarlett-1.png';
import scarlett2 from './img/scarlett/scarlett-2.png';
import scarlett3 from './img/scarlett/scarlett-3.png';
import scarlett4 from './img/scarlett/scarlett-4.png';
import scarlett5 from './img/scarlett/scarlett-5.png';
import scarlett6 from './img/scarlett/scarlett-6.png';
import scarlett7 from './img/scarlett/scarlett-7.png';
import scarlett8 from './img/scarlett/scarlett-8.png';
import scarlett9 from './img/scarlett/scarlett-9.png';
import scarlett10 from './img/scarlett/scarlett-10.png';
import scarlett11 from './img/scarlett/scarlett-11.png';

const Scarlett: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Scarlett</h1>

        <p className="profile-intro">
          Shana M. O'Hara (Scarlett) was born in Atlanta, Georgia. She has at least four siblings — three unnamed brothers and a sister named Sioban. Scarlett's father and three brothers are martial arts instructors, while her sister is an attorney. Scarlett started her martial arts training at nine and earned her first black belt at fifteen. She is one of the original members of G.I. Joe and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' lover.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">First Meeting with Snake Eyes</h2>
          <img src={scarlett1} alt="Scarlett training the Joes in hand-to-hand combat" className="profile-block-img" />
          <p>
            When the G.I. Joe team was forming, Scarlett ran a hand-to-hand combat session to teach the Joes how to fight. She first spars with Steeler, easily throwing him to the ground, but knows she still needs to prove to the guys that this was no fluke. Her next opponent is <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, who allows Scarlett to throw him to spare her pride in front of the others. Scarlett recognizes he is a highly skilled martial artist, who allowed her to win. Scarlett is intrigued with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and wants to know more about him.
          </p>
          <p>
            After practice, Scarlett catches up to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> off base, and the two talk. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> admits he studied martial arts in Japan, and the two catch a ferry to Manhattan for dinner. On the ferry, Scarlett learns about his twin sister and the tragic accident that claimed the lives of his family (<Link to="/comic-issues/Issue27">Issue #27</Link>).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Helicopter Accident</h2>
          <img src={scarlett2} alt="Scarlett and the Joes in a helicopter accident" className="profile-block-img" />
          <p>
            Months later, Scarlett, Rock 'n Roll, and Grunt are on a mission in the Middle East, traveling in one of two helicopters. Neither aircraft has proper dust filters, and the helicopter carrying the four of them stalls and spins out of control after sand is sucked into the engine. The pilot orders the crew to jump. Rock 'n Roll and Grunt jump clear, but the door next to Scarlett slams shut, trapping her web gear. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> stays aboard, trying to save her. The helicopter crashes into the second one, knocking Scarlett unconscious.
          </p>
          <p>
            When Scarlett wakes up, she learns that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, badly injured, has carried her out of the burning wreckage. Aviation fuel from the second helicopter had sprayed through the plexiglass during the crash, burning his face and severing his vocal cords (<Link to="/comic-issues/Issue27">Issue #27</Link>).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Snake Eyes' Return from the Hospital</h2>
          <img src={scarlett3} alt="Snake Eyes returning from the hospital" className="profile-block-img" />
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> returns to the G.I. Joe team after six months in the hospital. He could have retired on disability but chooses to stay. Scarlett wants to resume her relationship with him, but he gently pushes her away (<Link to="/comic-issues/Issue27">Issue #27</Link>).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">First Encounter with Storm Shadow</h2>
          <img src={scarlett4} alt="Scarlett's first encounter with Storm Shadow" className="profile-block-img" />
          <p>
            While making her yearly qualifying jump, Scarlett is captured by Storm Shadow, who is operating a Cobra C.L.A.W. (Covert Light Aerial Weapon) (Issue #22). Storm Shadow flies her to Cobra's Silent Castle, where she is presented to Cobra Commander. He then takes Scarlett to a dungeon, chaining her wrists to an anchor set into the ground. The only access to the dungeon is a manhole above.
          </p>
          <p>
            While this is happening, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> makes a HALO jump from a C-130, landing atop the castle. Using her hairpin, Scarlett unlocks the chains. When Storm Shadow opens the manhole cover, Scarlett lassos the chain around him and pulls him down into the dungeon, then escapes through the opening herself.
          </p>
          <p>
            Scarlett comes across two Cobra troopers carrying a C.L.A.W. (likely the one Storm Shadow had used) and knocks them unconscious using the chain as a weapon. She straps on the C.L.A.W. and flies off. From one of the castle's balconies, she spots <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. Storm Shadow then reappears, and the two engage in combat. During the fight, the wrapping on one of Storm Shadow's forearms unravels, revealing the same tattoo <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> bears on his own forearm.
          </p>
          <p>
            Scarlett lands the C.L.A.W. in front of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. Storm Shadow hurls his sword toward her, but <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, appearing from behind, catches the blade in midair. The two then fly off together, escaping the Silent Castle (<Link to="/comic-issues/Issue21">Issue #21</Link>).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Borovia</h2>
          <img src={scarlett5} alt="Scarlett's mission to Borovia" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, Quick Kick, and Outback are sent on a covert mission to Borovia (a Communist state) under the guise of trade emissaries. Their cover is blown, and <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Quick Kick are captured, while Outback escapes. For political reasons, the U.S. State Department denies any connection with the captured Joes, and as a result, the Joes are not authorized to launch a rescue mission (Issue #61).
          </p>
          <p>
            Scarlett, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, Flint, and Lady Jay are on vacation in Grenada. While walking down a dirt road, the four run into <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' old friend, the <Link to="/character-bios/BlindMaster">Blind Master</Link>, disguised as a blind man on his way to visit his daughter. The blind man asks for help guiding him to the airport, so he won't be late. He insists on taking a shortcut through a field of tall grass. Scarlett and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> take the blind man through the field; Flint and Lady Jay continue down the road.
          </p>
          <p>
            The field turns out to be a minefield. A powerful explosion goes off, making it appear that Scarlett, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and the blind man have been killed. The blast is so large that Flint, at first, believes they were vaporized by it. In reality, the <Link to="/character-bios/BlindMaster">Blind Master</Link> has orchestrated the whole thing so that Scarlett and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> can fake their deaths and slip away on an unauthorized mission to rescue the three captured Joes in Borovia (Issue #63).
          </p>
          <p>
            Scarlett, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link> first travel to France (Issue #64). From there, they make their way to Borovia, where they find work in the White Clown's circus troupe (Issue #65). The White Clown is assisted by Orlovsky the dwarf. The trio learns that the White Clown's lover, Magda, is imprisoned in a gulag for criticizing the government — a different gulag from the one holding the three captured Joes.
          </p>
          <p>
            Storm Shadow, <Link to="/character-bios/Jinx">Jinx</Link>, and <Link to="/character-bios/Billy">Billy</Link> arrive at the circus, and the six mount a rescue mission together. They kill the guards and free the prisoners, including the three Joes. As they head for the border, the White Clown and Orlovsky appear in a car hauling their circus cannon. The Joes are loaded into the cannon and fired into the river bordering Borovia, allowing them to safely bypass the electric fence, barbed wire, and guard towers along the border (Issue #66).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Bern Institute of Reconstructive Surgery</h2>
          <img src={scarlett6} alt="The Bern Institute of Reconstructive Surgery" className="profile-block-img" />
          <p>
            Scarlett and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> travel to the Bern Institute of Reconstructive Surgery in Switzerland, where Dr. Hundtkinder has developed a new technique in facial reconstructive surgery. Outside the hospital, Scarlett tells <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> the new technique is dangerous, possibly even fatal, and that he doesn't need to go through with it for her sake — she loves him just the way he is.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> takes her hand, looks up at the sun and touches his rubber facial mask with the other hand. He then glances toward another couple walking by with their arms around each other. Scarlett understands then that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> wants to be able to walk down the street holding her hand, feeling the sun on his own skin.
          </p>
          <p>
            Scarlett accompanies <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> as Dr. Hundtkinder examines his face. When Dr. Hundtkinder explains that the first procedure will take place the next morning, she hugs <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> (<Link to="/comic-issues/Issue93">Issue #93</Link>).
          </p>
          <p>
            During the sixth and final procedure, Scarlett receives a call from Hawk at the hospital. Hawk tells her that Zarana, who works for Cobra, has just awoken from a coma and has been rambling about a plot between the Baroness and Dr. Hundtkinder. Scarlett drops the phone as a Cobra transport helicopter lands on the hospital's roof.
          </p>
          <p>
            Scarlett pulls her Uzi from her purse, enters the surgery room, and ties up Dr. Hundtkinder and the nurses. She puts the unconscious <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> in a wheelchair and heads for the exit, but in the hallway, the Baroness and her Vipers catch up to her, and a gunfight breaks out.
          </p>
          <p>
            Scarlett pushes <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' wheelchair into a room while she returns fire, then moves inside herself. A round hits her in the upper arm as a group of Alley Vipers crash through the windows. The Baroness enters and kicks the Uzi out of Scarlett's hand. When one of the Vipers asks if they should finish her off, the Baroness says no — she wants to do it herself — and shoots Scarlett point-blank in the head (Issue #94). Scarlett does not die from the shot; the bullet strikes the dome of her skull at an oblique angle, deflecting off and leaving her in a coma instead (Issue #95).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Waking Up from the Coma</h2>
          <img src={scarlett7} alt="Scarlett waking up from her coma" className="profile-block-img" />
          <p>
            Scarlett wakes from her coma in a New York City hospital, asking where she is and where <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is. She soon discovers that her sister, Sioban, an attorney, is at the hospital with a court order to end her life support (Issue #103).
          </p>
          <p>
            Sioban and Scarlett talk, and Scarlett realizes the push to end her life support has much to do with the family house in Atlanta. She tells Sioban that if the house means that much to her, she'll sign it over to her. In tears, Sioban leaves the room just as Hawk arrives (Issue #104).
          </p>
          <p>
            Hawk tells Scarlett that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is in Borovia. Scarlett is shocked, pointing out that the Borovian government is in the midst of collapse, the country is in anarchy, and there are rumors of wholesale slaughter of ethnic minorities. General Thurston Crowther enters and reveals that Storm Shadow had blackmailed him into sending <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> on the mission (Issue #105).
          </p>
          <p>
            An undisclosed amount of time passes. General Crowther visits Scarlett in her room, telling her that Storm Shadow and <Link to="/character-bios/Stalker">Stalker</Link> have escaped capture. He believes they are hiding at Storm Shadow's secret hideout in New York and that Scarlett knows where it is. She refuses to answer, insisting it's up to her to find Storm Shadow herself.
          </p>
          <p>
            Hawk enters and tells Scarlett she isn't going anywhere — he has already notified the hospital to keep her detained. He leaves the room with General Crowther just as Sioban enters. Outside, Hawk confronts the General, demanding to know why he's badgering Scarlett, why he ordered the arrest of Storm Shadow and <Link to="/character-bios/Stalker">Stalker</Link>, where they are now, and what <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' real mission in Borovia was. While the two argue, Scarlett slips past them disguised as Sioban, having tied her sister up and taken her clothes.
          </p>
          <p>
            Scarlett gets off at a subway stop, where a would-be mugger confronts her with a knife. She disarms him, breaks his elbow, and walks off with his knife. Later, she runs into Storm Shadow fleeing from Night Creepers. She confronts him just as the Night Creepers open fire with arrows, and Storm Shadow pushes the two of them onto the tracks in front of an oncoming subway train to escape.
          </p>
          <p>
            Storm Shadow pulls them both to safety between the train cars. In the chaos, Scarlett accidentally stabs him in the back. Shocked, she cries out, "What have I done?" (Issue #107).
          </p>
          <p>
            Scarlett brings the wounded Storm Shadow to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' secret hideout behind the isolation tank at Columbia University. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Stalker">Stalker</Link> arrive shortly after. Scarlett watches as <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> uses the Arashikage Mindset to stabilize him, then calls for an ambulance (Issue #108).
          </p>
        </section>

 <section className="profile-block">
          <h2 className="profile-block-title">Retirement to the High Sierras</h2>
          <img src={scarlett11} alt="The reactivation of the G.I. Joe team" className="profile-block-img" />
          <p>
            A month after G.I. Joe is disbanded, Scarlett, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, Hawk, and a select team of Joes go on one last mission (Frontline Issue #1). Afterward, Scarlett and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> retire to their cabin in the High Sierras.
          </p>
          <p>
            A month later, <Link to="/character-bios/Stalker">Stalker</Link> — now a recruiting sergeant in Detroit — receives a heartfelt letter from Scarlett. She tells him they're in the process of expanding the cabin to make room for guests, hinting that she hopes to have children soon. She asks how he's doing now that he's stuck behind a desk, mentions that Gung-Ho is stationed at Guantánamo (Gitmo) and Duke at Fort Benning, and closes with the news that Timber has passed — but not before leaving them one last surprise: he sired a litter of pups (Frontline Issue #4).
          </p>
          <p>
            The final page shows Scarlett and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> standing over Timber's freshly dug grave, as one of his pups runs to them and leaps into <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' arms. The mother wolf and her remaining offspring move off into the distance, leaving the one pup behind with Scarlett and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Reactivation of G.I. Joe</h2>
          <img src={scarlett8} alt="The reactivation of the G.I. Joe team" className="profile-block-img" />
          <p>
            An undisclosed amount of time passes between G.I. Joe's disbandment and its reactivation. During this period, Scarlett and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> live in their expanded cabin in the High Sierras.
          </p>
          <p>
            One evening, Duke, driving toward the cabin, spots Scarlett's jeep on the side of the road. The windows are smashed, and an envelope addressed to "S. O'Hara" sits in the backseat, confirming it's her vehicle. Suddenly, a trio of Red Ninja appear, wearing night-vision gear.
          </p>
          <p>
            Duke attacks. Scarlett, who had been hiding nearby and observing the Red Ninja, jumps out of cover to support him, and together they defeat the attackers. Duke tells Scarlett, "Anabasis is a go," signaling that the G.I. Joe team has been reactivated.
          </p>
          <p>
            Duke and Scarlett drive on to the cabin, where they find it burning and the bodies of Red Ninja scattered outside. They arrive in time to see <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> finishing off the last of them. Scarlett and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> rejoin the reactivated G.I. Joe team (Issue #156).
          </p>
        </section>

        <section className="profile-block">
        <h2 className="profile-block-title">Snake Eyes' Death</h2>
        <img src={scarlett9} alt="Snake Eyes' sacrifice at the Pit" className="profile-block-img" />
        <p>
            In a battle at the Pit, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> sacrifices himself, catching a live grenade and throwing himself and the recently resurrected Serpentor off a ledge, killing them both (Issue #213). To keep Cobra from gaining an advantage from knowledge of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' death, Sean Collins takes on his mantle, appearing publicly alongside Scarlett in his place.
        </p>
        <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' death deeply affects Scarlett. Spending her days with Sean stirs up memories of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>.  Riding the Staten Island Ferry with Sean brings back memories of the trips she once took with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. One day, as Sean stands by the rail, Scarlett looks up with tears in her eyes, overcome by memories of her lost love. She asks him to stay there a moment longer, so she can remember him (Issue #217).
        </p>
        </section>

        <section className="profile-block">
        <h2 className="profile-block-title">Snake Eyes' Return</h2>
        <img src={scarlett10} alt="Snake Eyes' return to G.I. Joe" className="profile-block-img" />
        <p>
            During a battle on Cobra Island, aboard a C-130, Scarlett intercepts a transmission from the Cobra lab: Dr. Mindbender has brought back the real <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and he is fighting his way through the facility. Scarlett and <Link to="/character-bios/Stalker">Stalker</Link> parachute out of the C-130 to find him.
        </p>
        <p>
            On the ground, Scarlett and <Link to="/character-bios/Stalker">Stalker</Link> meet up with Storm Shadow and Wade Collins, who are locked in a firefight with Vipers, and join the battle. The W.H.A.L.E. hovercraft arrives, forcing the Vipers to retreat, and Scarlett, <Link to="/character-bios/Stalker">Stalker</Link>, Storm Shadow, and Wade board it to head for the Cobra lab.
        </p>
        <p>
            The W.H.A.L.E. breaches the lab, where the Joes find <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> still battling Vipers. It opens fire, clearing them out, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> boards the craft and removes his mask. He says "Scarlett" — his vocal cords now undamaged — and the two embrace. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> rejoins G.I. Joe and resumes his relationship with Scarlett (Issue #300).
        </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            Larry Hama based the personalities of his ARAH characters on real people, giving each one a distinct voice. Scarlett is based on Mr. Hama's wife. In interviews, Mr. Hama has noted that he received a large portion of his fan mail from women, much of it praising his writing for the prominent and positive roles the female characters play in the comics.
          </p>
          <p>
            During the Marvel run (1982–1994), two figures of Scarlett were produced: her original figure (a <a href="https://www.yojoe.com/action/82/scarlett.shtml" target="_blank" rel="noopener noreferrer">1982 straight-arm version</a> and a <a href="https://www.yojoe.com/action/83/scarlett1p5.shtml" target="_blank" rel="noopener noreferrer">1983 swivel-arm version</a>) and her <a href="https://www.yojoe.com/action/93/scarlett2.shtml" target="_blank" rel="noopener noreferrer">1993 Ninja Force figure</a>. Scarlett was depicted in her Ninja Force outfit from Issue #135 through the end of the Marvel run (Issue #155); afterward, she has been shown wearing her original uniform or variations of it.
          </p>
          <p>
            Both Scarlett's original file card and her Ninja Force file card list her rank as E-5 (Sergeant or Specialist 5*). When Scarlett is wearing her dress uniform in the early issues (Issues #2 and #22), no sergeant stripes appear. Thus, I suspect she was a Spec. 5 in the early issues. In Issue #33, General Austin promotes Scarlett — along with Rock 'n Roll, Breaker, Zap, Grunt, Short-Fuze, <Link to="/character-bios/Stalker">Stalker</Link>, and Flash — to the next pay grade, assigning them administrative duties as the team grows. This puts Scarlett's current rank at E-6 (Staff Sergeant).
          </p>
          <p className="profile-notes-footnote">
            *The ranks of Specialist 5 and Specialist 6 were phased out in 1985. Personnel holding these ranks were laterally promoted to the corresponding "hard stripe" rank — Specialist 5s became Sergeants, and Specialist 6s became Staff Sergeants. Specialist ranks were originally created to allow enlisted personnel to advance in pay grade without taking on the responsibilities of a non-commissioned officer (NCO). Thus, Specialist 5s and Specialist 6s were not considered NCOs and took orders from Corporals (E-4) and higher ranks.
          </p>
        </section>
                
        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Scarlett;
