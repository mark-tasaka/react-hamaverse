import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import hawk1 from './img/hawk/hawk_1.png';
import hawk2 from './img/hawk/hawk_2.png';
import hawk3 from './img/hawk/hawk_3.png';
import hawk4 from './img/hawk/hawk_4.png';
import hawk5 from './img/hawk/hawk_5.png';

const Hawk: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Hawk (Clayton Abernathy)</h1>

        <p className="profile-intro">
          Clayton Abernathy (Hawk) is one of the original members of G.I. Joe, serving as the team's field commander at the start of the series under Generals Flagg and Austin. According to his file card, Hawk comes from a well-established and wealthy family (described as "real loaded" in the file card) and graduated from West Point at the top of his class. Later in the series, <Link to="/character-bios/Austin">General Austin</Link> promotes Hawk to Brigadier General, giving him overall command of G.I. Joe.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Hawk's First Encounter with Snake Eyes</h2>
          <img src={hawk1} alt="Hawk delivering tragic news to a returning veteran" className="profile-block-img" />
          <p>
            In the early 1970s, during the Vietnam War, Hawk is stationed behind a desk at headquarters. It falls to him to deliver tragic news to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, a returning veteran waiting at the airport: his family has died in a car accident on their way to pick him up. The drive from headquarters to the airport takes two hours, and Hawk spends the whole trip rehearsing what he'll say a thousand times over. By the time he arrives, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> has already been waiting four hours — and knows, from Hawk's uniform and the look on his face, that tragedy has fallen on his family (<Link to="/comic-issues/Issue26">Issue #26</Link>).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Defending His Sergeant's Actions</h2>
          <img src={hawk2} alt="Hawk defending his sergeant's actions" className="profile-block-img" />
          <p>
            Years later, now a Lieutenant Colonel, Hawk commands a UN refugee camp in Borovia. He arrives on the scene to find an EOD team carrying plastic explosives recently recovered nearby. Demanding a sitrep, Hawk learns the team recovered enough Semtex to level the entire compound — planted by a terrorist only twenty minutes earlier. He wants to know how a hardened terrorist could be made to "spill the beans" in under twenty minutes.
          </p>
          <p>
            His answer comes when he sees two of his soldiers hauling the severely beaten body of the terrorist. Pointing at one of them, Hawk demands, "Are you responsible for this?" The soldier replies, "We wish we had." Hawk soon learns it was the sergeant in charge of security who did this — a tough call that ultimately saved the lives of a thousand children.
          </p>
          <p>
            One of Hawk's superior officers arrives, warning that this will become an international incident, and demands to know who is responsible. Hawk answers simply, "I am, sir." Later, a Major General chews him out, telling him his sergeant will take the fall. Hawk insists the responsibility runs all the way up the chain of command, and refuses to abandon his sergeant. Disgusted, the General leaves, telling Hawk the matter is headed to the Provost and JAG.
          </p>
          <p>
            A closed-door court-martial follows, attended by <Link to="/character-bios/Flagg">General Flagg</Link> and his assistant, Sparks. Hawk continues to stand by his sergeant, telling the court that he would have done the very same thing in the man's place — and that he cannot, in good conscience, let the sergeant take the blame for a decision any officer of sound moral standing would have made. It's an argument that leaves every officer above him morally obligated to fall on the sword alongside him if they won't. <Link to="/character-bios/Flagg">General Flagg</Link> is impressed, and Hawk is acquitted (G.I. Joe Declassified #1). The sergeant Hawk defends is Lonzo Wilkinson (<Link to="/character-bios/Stalker">Stalker</Link>) who becomes the first member of G.I. Joe that Hawk recruits (G.I. Joe Declassified #3).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Meeting Three Joes Prior to the Formation of the Team</h2>
          <img src={hawk3} alt="Hawk meeting future Joes before the team's formation" className="profile-block-img" />
          <p>
            Beyond his encounters with <Link to="/character-bios/Stalker">Stalker</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> before the team's formation, Hawk also had dealings with Grand Slam, <Link to="/character-bios/Grunt">Grunt</Link>, and Breaker — using each encounter to size up their character. Those qualities are likely what earned each of them a place on his team.
          </p>
          <p>
            Hawk first meets Grand Slam (James J. Barney) at a mortar range, he is observing a class where the drill sergeant challenges his students to accurately fire a mortar without computer-assisted targeting. Grand Slam steps forward, carefully surveys the map, uses a protractor to measure the distance between points, a lensatic compass to determine the bearing, and consults the range angle from the 81mm mortar manual's firing table. He fires — hitting the target dead-on in just 23 seconds, drawing praise from the drill instructor. Hawk pulls Grand Slam aside afterward, but instead of praising him, chews him out for failing to double-check his azimuth — a degree or two of error could have meant striking friendly troops.
          </p>
          <p>
            Hawk meets Robert W. Graves (<Link to="/character-bios/Grunt">Grunt</Link>) while overseeing an AIT (Advanced Infantry Training) school. He asks Private Graves about an essay he wrote titled "Why I Would Join an Elite Unit," which quotes Amelia Earhart's line, "Courage is the price life extracts for granting peace." Graves explains he came across the quote at the home of a fellow recruit who'd died in a training accident. Learning that Graves barely knew the soldier, Hawk asks why he'd spend his own leave time and money visiting the mother of someone he hardly knew. Graves replies, "I thought we were to take care of our own, sir."
          </p>
          <p>
            CID (Criminal Investigations Division) catches Specialist Alvin R. Kibbey (Breaker) decrypting top-secret transmissions. Hawks learn Kibbey is fluent in seven languages — a skill he developed through ham radio use since age ten.  Hawk brings two fully loaded backpacks to the interrogation room and takes Kibbey on a forced march up a mountain. Partway through, Hawk asks if he's having a hard time keeping up; Kibbey simply takes the lead and outpaces him. Hawk tells Kibbey he's made his point (G.I. Joe Declassified #2).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Recruiting Snake Eyes</h2>
          <img src={hawk4} alt="Hawk recruiting Snake Eyes" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Stalker">Stalker</Link> is the first member Hawk recruits to G.I. Joe. He in turn recommends <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, whom he'd served alongside in an LRRP unit in Vietnam. Hawk and <Link to="/character-bios/Stalker">Stalker</Link> track <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> to the High Sierras, where locals say he lives alone in an isolated cabin, coming down only once a month to collect his disability checks — some believe he's some kind of werewolf.
          </p>
          <p>
            Hawk and <Link to="/character-bios/Stalker">Stalker</Link> drive up to the cabin and find a giant wolf, Timber, waiting inside. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> arrives shortly after, carrying rabbits he'd caught and killed with his bare hands. <Link to="/character-bios/Stalker">Stalker</Link> convinces him to join the team (<Link to="/comic-issues/Issue27">Issue #27</Link>).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Promotion to Brigadier General</h2>
          <img src={hawk5} alt="Hawk's promotion to Brigadier General" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Austin">General Austin</Link> suffers a heart attack while speaking with Hawk over video (Issue #42). Hawk has <Link to="/character-bios/Stalker">Stalker</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> drive him from Fort Wadsworth to the U.S. Army Medical Center in Washington, D.C. At the hospital, <Link to="/character-bios/Austin">General Austin</Link> remains consumed with work, and Hawk briefs him on G.I. Joe's ongoing activities as the general recovers in bed.
          </p>
          <p>
            Later, with Hawk present, <Link to="/character-bios/Austin">General Austin</Link> holds a video conference with the President, the Joint Chiefs, and the Secretary of Defense. He tells them that, given his cardiac condition, he can no longer serve as commander of G.I. Joe, announces his retirement, and recommends implementing Plan Alpha — a recommendation the group unanimously approves.
          </p>
          <p>
            <Link to="/character-bios/Austin">General Austin</Link> then takes a set of general's stars he has been keeping for Hawk from his bedside drawer and presents them to him, telling Hawk he has been promoted to Brigadier General and is now Commander in Chief of G.I. Joe (Issue #45).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), six figures of Hawk were produced: the <a href="https://www.yojoe.com/action/82/hawk.shtml?" target="_blank" rel="noopener noreferrer">1982 figure</a> (with a <a href="https://www.yojoe.com/action/83/hawk1p5.shtml" target="_blank" rel="noopener noreferrer">1983 swivel-arm</a> version), the <a href="https://www.yojoe.com/action/86/hawk2.shtml" target="_blank" rel="noopener noreferrer">1986 figure</a>, the <a href="https://www.yojoe.com/action/91/generalhawk.shtml" target="_blank" rel="noopener noreferrer">1991 figure</a>, the <a href="https://www.yojoe.com/action/92/generalhawk2.shtml" target="_blank" rel="noopener noreferrer">1992 figure</a>, and two 1993 versions (the <a href="https://www.yojoe.com/action/93/generalhawk3.shtml" target="_blank" rel="noopener noreferrer">convention-exclusive release</a> and the <a href="https://www.yojoe.com/action/93/generalhawk4.shtml" target="_blank" rel="noopener noreferrer">Star Brigade version</a>). Hawk's original 1986 file card lists him as an O-6, reflecting his rank as Colonel at the start of the series. Every other file card from the Marvel run except the 1992 version lists his rank as O-7 (Brigadier General), reflecting his promotion by <Link to="/character-bios/Austin">General Austin</Link>. The 1992 file card lists him as an O-8 (Major General) — I suspect this was an error, since later Marvel-run file cards list his ranks as O-7. In Issue #301 (the first Skybound ARAH issue), Hawk is identified as a Lieutenant General (O-9). This means Hawk received two further promotions following his promotion from <Link to="/character-bios/Austin">General Austin</Link>.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Hawk;
