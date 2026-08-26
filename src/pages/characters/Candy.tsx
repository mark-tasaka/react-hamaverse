import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import candy1 from './img/candy/candy_1.png';
import candy2 from './img/candy/candy_2.png';
import candy3 from './img/candy/candy_3.png';
import candy4 from './img/candy/candy_4.png';
import candy5 from './img/candy/candy_5.png';

const Candy: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Candy Apel (a.k.a. Bongo the Balloon Bear)</h1>

        <p className="profile-intro">
          Candy Apel is <Link to="/character-bios/RipCord">Rip Cord</Link>'s former girlfriend and the daughter of Professor Apel, an undercover Crimson Guardsman. Candy does not discover her father is a Cobra agent until she returns home one night to find the Joes surrounding her house. A series of events later leads Candy to the Cobra-controlled town of Springfield, where she meets her end from one of Scrap-Iron's anti-armor missiles.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Bongo the Balloon Bear</h2>
          <img src={candy1} alt="Candy as Bongo the Balloon Bear" className="profile-block-img" />
          <p>
            Spirit, <Link to="/character-bios/RipCord">Rip Cord</Link>, and Barbecue are at a mall on Staten Island when Spirit encounters <Link to="/character-bios/Wade">Fred II (Wade Collins)</Link> and his family. Spirit had previously encountered the original Fred <Link to="/character-bios/FredBroca">Fred Broca</Link> in the High Sierras, an encounter that ended in Fred <Link to="/character-bios/FredBroca">Fred Broca</Link>'s death. Spirit tells Fred II he had better come along for questioning. Mrs. Collins strikes Spirit in the head with her purse, while her children kick him in the knees. The Brocas flee to the parking lot and make their escape by car, with Mrs. Collins throwing a grenade into the Joes' vehicle and destroying it.
          </p>
          <p>
            Spirit, <Link to="/character-bios/RipCord">Rip Cord</Link>, and Barbecue commandeer a colorful van with the words "Bongo the Balloon Bear" painted across it. Inside is Bongo herself, dressed in a bear costume. Bongo drives the Joes in pursuit of the Brocas, and a chase ensues. After a firefight, in which the Brocas open fire on the van, Bongo asks to be let out. She tells the Joes to bring her van back safely and waits behind for their return.
          </p>
          <p>
            The Brocas escape. <Link to="/character-bios/RipCord">Rip Cord</Link> returns the van to Bongo and asks if there is anything the government can do to compensate her. "How about dinner?" Bongo asks, removing her bear mask to reveal the face of a beautiful young woman. "You're a girl," a surprised <Link to="/character-bios/RipCord">Rip Cord</Link> replies. <Link to="/character-bios/RipCord">Rip Cord</Link> takes Candy out for dinner, and the two begin dating (Issue #33).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Breaking Up with Rip Cord</h2>
          <img src={candy2} alt="Candy breaking up with Rip Cord" className="profile-block-img" />
          <p>
            Candy, dressed as Bongo, her van, <Link to="/character-bios/RipCord">Rip Cord</Link>, and a handful of other Joes are at the circus when chaos erupts as the Crimson Twins and a squad of uniformed Crimson Guard attack. In the aftermath of the battle, Candy confronts <Link to="/character-bios/RipCord">Rip Cord</Link>, upset over the secrecy surrounding what he does, who he really is, and why he cannot reveal his real name to her. She adds that wherever they go together, people end up shot or blown up. Candy tells him they are through, then drives off, leaving a heartbroken <Link to="/character-bios/RipCord">Rip Cord</Link> behind (Issue #37).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Discovering Her Father Is a Cobra Agent</h2>
          <img src={candy3} alt="Candy discovering her father is a Cobra agent" className="profile-block-img" />
          <p>
            Candy comes home one evening to find her house has become the site of a battle, badly damaged, with Joes surrounding it. Barbecue asks Candy what she is doing there. "This is my father's house," she replies. "I live here!" (Issue #38).
          </p>
          <p>
            Candy is brought inside the Pit for questioning. Duke asks her about the Cobra radios, cipher machines, bugging devices, surveillance gear, and manuals recovered from the house. Candy insists she had no idea any of it was there (Issue #40).
          </p>
          <p>
            <Link to="/character-bios/Hawk">Hawk</Link> receives a call from General Austin, informing him that Candy and the Dreadnok Buzzer, captured in a separate incident, must be released for constitutional reasons. The two are transported out of Fort Wadsworth aboard a military police bus. Buzzer overpowers the MPs and commandeers the bus, driving off with Candy as his prisoner (Issue #40).
          </p>
          <p>
            Buzzer heads for Springfield, stealing a pickup truck at a diner along the way. At one point, Candy nearly escapes before Buzzer recaptures her. The truck carries an unloaded shotgun displayed on the rear window rack. During a sudden hard stop, the glove box flies open and shotgun shells spill out. Candy grabs the shells, loads the shotgun, and fires — missing Buzzer but putting a round through the window. She then levels the shotgun at his head and orders him out of the truck, driving off and leaving him behind (Issue #42).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Candy's Death</h2>
          <img src={candy4} alt="Candy's death" className="profile-block-img" />
          <p>
            The stolen pickup truck breaks down, and unable to fix it, Candy hitches a ride. The man who picks her up is drinking coffee mixed with alcohol, clearly drunk. In the backseat, Candy notices a suitcase and mentions it to the driver, who realizes it belongs to the man he had previously dropped off in Springfield — the <Link to="/character-bios/SoftMaster">Soft Master</Link>, who had left it behind. The driver turns toward Springfield to return it.
          </p>
          <p>
            Along the way, he picks up another hitchhiker, <Link to="/character-bios/Billy">Billy</Link>. Drunk, the driver crashes into a post in front of a set of train tracks, knocking all three unconscious. Just before a train passes, the <Link to="/character-bios/SoftMaster">Soft Master</Link> drives up in a stolen police car from the other side of the tracks. He stops and checks on the crash victims.
          </p>
          <p>
            On the far side of the tracks, <Link to="/character-bios/Firefly">Firefly</Link>, Scrap-Iron, and Buzzer sit in a Cobra Ferret ATV, having been pursuing the <Link to="/character-bios/SoftMaster">Soft Master</Link>. While he tends to the victims, Scrap-Iron climbs a nearby pole and aims his dual missile launcher at the wrecked car. The <Link to="/character-bios/SoftMaster">Soft Master</Link> rushes forward, using his own body as a shield, and is killed. Scrap-Iron fires his second missile, destroying the car and killing both Candy and the driver. <Link to="/character-bios/Billy">Billy</Link> survives, though he loses an eye and a leg and falls into a coma (Issue #43).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Bongo the Balloon Bear Van's Return</h2>
          <img src={candy5} alt="Bongo the Balloon Bear van's return" className="profile-block-img" />
          <p>
            <Link to="/character-bios/RipCord">Rip Cord</Link> kept Candy's Bongo the Balloon Bear van over years, storing it at the Motor Pool at Fort Wadsworth. He could never bring himself to get rid of it — the van held too many memories of her.
          </p>
          <p>
            Years later, <Link to="/character-bios/SeanCollins">Sean Collins</Link> (a.k.a. the new Snake Eyes) is captured and taken to Springfield. Lacking the authority for an official rescue mission, the Joes are forced to rely on their own leave time and civilian vehicles. <Link to="/character-bios/Clutch">Clutch</Link> leads <Link to="/character-bios/Stalker">Stalker</Link>, <Link to="/character-bios/Wade">Wade Collins</Link>, and <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> to where the van is stored, hidden beneath a canvas tarp. <Link to="/character-bios/Clutch">Clutch</Link> pulls the tarp away, revealing the van still intact.
          </p>
          <p>
            <Link to="/character-bios/Clutch">Clutch</Link>, <Link to="/character-bios/Stalker">Stalker</Link>, <Link to="/character-bios/Wade">Wade Collins</Link>, and <Link to="/character-bios/RockRoll">Rock 'n Roll</Link> use Bongo the Balloon Bear van for their rescue mission, driving it to Springfield and back (Issue #270).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Candy;
