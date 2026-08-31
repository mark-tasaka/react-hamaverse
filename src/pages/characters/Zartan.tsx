import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import zartan1 from './img/zartan/zartan_1.png';
import zartan2 from './img/zartan/zartan_2.png';
import zartan3 from './img/zartan/zartan_3.png';
import zartan4 from './img/zartan/zartan_4.png';
import zartan5 from './img/zartan/zartan_5.png';
import zartan6 from './img/zartan/zartan_6.png';

const Zartan: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Zartan</h1>

        <p className="profile-intro">
          A man who walks both in darkness and light, Zartan is a complex character featured throughout the series. He is the leader of the Dreadnoks and the Master of Disguise, possessing holographic technology that allows him to change his form. Zartan's story arc is one of tragedy, redemption and rebirth, and the endless cycle of vengeance. This section focuses on the part of Zartan's story tied to the Arashikage clan.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Professor Onihashi</h2>
          <img src={zartan1} alt="Zartan and Professor Onihashi" className="profile-block-img" />
          <p>
            <Link to="/character-bios/CobraCommander">Cobra Commander</Link> hires <Link to="/character-bios/Firefly">Firefly</Link> to engineer the assassination of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, who is living with the Arashikage clan in Japan.  <Link to="/character-bios/Firefly">Firefly</Link> realises he is no match for <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and recommends the use of an outside contractor to carry out the assassination.  <Link to="/character-bios/CobraCommander">Cobra Commander</Link> hires Zartan for the job. </p>
           <p> 
            Knowing he must infiltrate the clan through the tradesman's door, Zartan spends the next six months — sunrise to sunset — sitting outside the garden gates of <Link to="/character-bios/Onihashi">Professor Onihashi</Link>'s residence, the Arashikage clan's official armorer. He is eventually granted an interview. Impressed by his determination, <Link to="/character-bios/Onihashi">Onihashi</Link> tells Zartan that most applicants give up after the first two months — then adds that he sees the true nature of Zartan's heart, that he is a liar with bad karma running through his veins. Despite this, <Link to="/character-bios/Onihashi">Onihashi</Link> says he will attempt to temper Zartan's soul in his humble furnace, hammering out the impurities of his soul.
          </p>
          <p>
            At first light, Zartan and <Link to="/character-bios/Onihashi">Onihashi</Link> set out on the twenty-mile journey by foot to the professor's secret mountain forge (Issue #84). There, they forge Evening Shade, a duplicate of the legendary blade Morning Light (Storm Shadow #4). Through the purification rituals and the painstaking process of folding layers of steel, Zartan finds a peace he has always sought. He no longer wants to carry out his mission of killing <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> — all he wants is to continue his work at the forge. When the blade is complete, <Link to="/character-bios/Onihashi">Professor Onihashi</Link> presents it to the <Link to="/character-bios/HardMaster">Hard Master</Link>.
          </p>
          <p>
            Sensing this newfound peace and Zartan's not wanting to finish the job, <Link to="/character-bios/CobraCommander">Cobra Commander</Link> confronts him, threatening to expose him to his mentor if he doesn't fulfill the contract. <Link to="/character-bios/Firefly">Firefly</Link> supplies Zartan with a compound bow fitted with sound-amplification and directional-ranging equipment. Zartan steals one of <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s arrows from outside the courtyard wall — <Link to="/character-bios/StormShadow">Storm Shadow</Link> had kill a squirrel earlier that day, firing from inside the courtyard. Hiding in the courtyard, Zartan targets the dojo where <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is training with the <Link to="/character-bios/HardMaster">Hard Master</Link>, who is demonstrating the technique of "Donning the Cloak of the Chameleon," mimicking <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' heartbeat and breathing. Zartan kills the <Link to="/character-bios/HardMaster">Hard Master</Link> by mistake.
          </p>
          <p>
            Zartan flees with <Link to="/character-bios/StormShadow">Storm Shadow</Link> in pursuit. Waiting for him outside the courtyard is a Cobra helicopter piloted by <Link to="/character-bios/Firefly">Firefly</Link>; Zartan climbs aboard and escapes.
          </p>
          <p>
            Zartan returns to the mountain forge seeking his mentor, only to find <Link to="/character-bios/Onihashi">Onihashi</Link>'s cold, dead body. <Link to="/character-bios/Onihashi">Onihashi</Link> had discovered Zartan's treachery and committed seppuku (ritualized suicide) out of shame for bringing Zartan into the clan (Issue #84).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Preemptive Strike on Storm Shadow</h2>
          <img src={zartan2} alt="Zartan's preemptive strike on Storm Shadow" className="profile-block-img" />
          <p>
            In time, <Link to="/character-bios/StormShadow">Storm Shadow</Link> lets go of his desire for revenge against Zartan, recognizing the futility of the endless cycle of vengeance. Zartan doesn't know this, and believes it to be a ruse meant to catch him off guard. Not knowing where <Link to="/character-bios/StormShadow">Storm Shadow</Link> lives, Zartan suspects he — or someone close to him — will be attending a museum exhibit in San Francisco, and departs with his Red Ninja to confront him there (Issue #84).
          </p>
          <p>
            At the museum, Zartan — disguised as a bearded middle-aged man — waits inside a phone booth. <Link to="/character-bios/Jinx">Jinx</Link> enters, spots the Arashikage sword symbol on display, and calls <Link to="/character-bios/StormShadow">Storm Shadow</Link> from the adjacent booth. Using equipment wired into the booth's phone line, Zartan intercepts the number <Link to="/character-bios/Jinx">Jinx</Link> is calling, learning <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s location. He signals his three Red Ninja, disguised as suits of samurai armor, to deal with <Link to="/character-bios/Jinx">Jinx</Link>, then heads for the rooftop, where a Cobra transport helicopter and more Red Ninja await.
          </p>
          <p>
            The helicopter arrives at <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s location, an industrial building used as a dojo. The Red Ninja descend into the building and are killed one by one. <Link to="/character-bios/StormShadow">Storm Shadow</Link> fires an arrow through the window at the helicopter, killing the pilot, and it crashes into the alley below. A Volkswagen van speeds away from the wreckage, with Zartan standing on its roof, firing an arrow through the building's window — accidentally killing one of his own Red Ninja in the process. As the van flees, <Link to="/character-bios/Jinx">Jinx</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> pursue it by motorcycle, with <Link to="/character-bios/Jinx">Jinx</Link> driving. Zartan fires an arrow at <Link to="/character-bios/StormShadow">Storm Shadow</Link>, who catches it and fires it back, striking the Red Ninja driver. The van crashes off the Golden Gate Bridge and plunges into the water below (Issue #85).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Confronting the Blind Master</h2>
          <img src={zartan3} alt="Zartan's confrontation with the Blind Master" className="profile-block-img" />
          <p>
            In San Francisco, Zartan evades the Joes using his holographic disguises. Just as he reaches an alley, he finds the <Link to="/character-bios/BlindMaster">Blind Master</Link> waiting for him, having seen straight through the disguise. The <Link to="/character-bios/BlindMaster">Blind Master</Link> confronts Zartan over the murder of his mentor and friend, the <Link to="/character-bios/HardMaster">Hard Master</Link>, and gestures toward the nearby alley, where the two can settle their differences (Issue #90).
          </p>
          <p>
            In the alley, the two fight. Zartan mistakenly grabs the <Link to="/character-bios/BlindMaster">Blind Master</Link>'s shoulder, causing him to laugh and say, "I know where you are." The <Link to="/character-bios/BlindMaster">Blind Master</Link> gains the upper hand, pinning a beaten and bloodied Zartan against the wall, holding him by the neck with one hand while producing a switchblade with the other.
          </p>
          <p>
            Zartan goads the <Link to="/character-bios/BlindMaster">Blind Master</Link> to kill him, claiming he's been plagued with guilt over <Link to="/character-bios/Onihashi">Professor Onihashi</Link>'s death. Just then, <Link to="/character-bios/Tyrone">Tyrone</Link> arrives and grabs the <Link to="/character-bios/BlindMaster">Blind Master</Link>'s arm, begging his mentor not to kill Zartan, a now-helpless man. "Doing so would go against everything you taught me," <Link to="/character-bios/Tyrone">Tyrone</Link> pleads. The <Link to="/character-bios/BlindMaster">Blind Master</Link> tries to justify his actions. Heartbroken, <Link to="/character-bios/Tyrone">Tyrone</Link> walks away.
          </p>
          <p>
            The <Link to="/character-bios/BlindMaster">Blind Master</Link> comes to his senses, drops the knife, and turns to leave. Zartan picks up the blade and stabs him in the back. As the <Link to="/character-bios/BlindMaster">Blind Master</Link> lies dying on the ground, he tells Zartan that he was wrong — that it took a kid to show him how blind he truly was. Zartan scoffs, "Sure! All was forgiven! I'll just bet!"
          </p>
          <p>
            With his dying breath, the <Link to="/character-bios/BlindMaster">Blind Master</Link> reveals that <Link to="/character-bios/Onihashi">Onihashi</Link> had forgiven Zartan with his own last breath — that Zartan had been carrying his guilt for nothing all these years. The <Link to="/character-bios/BlindMaster">Blind Master</Link> dies. Stunned, Zartan asks how <Link to="/character-bios/Onihashi">Onihashi</Link> could have forgiven him for what he'd done — how there could be so much compassion in a person's heart.
          </p>
          <p>
            To set things right, Zartan takes on the form of the dead <Link to="/character-bios/BlindMaster">Blind Master</Link>, resolving to carry on his work mentoring <Link to="/character-bios/Tyrone">Tyrone</Link>. He runs out of the alley and calls out to <Link to="/character-bios/Tyrone">Tyrone</Link>, telling him he was wrong and asking for his forgiveness. The two walk off down the street together (Issue #91).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">The Freighter</h2>
          <img src={zartan4} alt="Zartan aboard the landlocked freighter" className="profile-block-img" />
          <p>
            Zartan — disguised as the <Link to="/character-bios/BlindMaster">Blind Master</Link> — and <Link to="/character-bios/Tyrone">Tyrone</Link> drive to the woods outside Denver, in front of the Rockies, where they find <Link to="/character-bios/Billy">Billy</Link> and <Link to="/character-bios/Raptor">Raptor</Link> preparing to exhume <Link to="/character-bios/CobraCommander">Cobra Commander</Link>'s body. Disgusted, Zartan strikes <Link to="/character-bios/Raptor">Raptor</Link> and tells <Link to="/character-bios/Billy">Billy</Link> not to let this trash desecrate his father's grave, warning him about the endless cycle of vengeance. <Link to="/character-bios/Billy">Billy</Link> convinces him that the true target of their revenge is the current <Link to="/character-bios/CobraCommander">Cobra Commander</Link> (Issue #95).
          </p>
          <p>
            The four travel to the Gulf of Mexico, where they hire Captain Minh to take them to Cobra Island. On the beaches of Cobra Island, using binoculars, <Link to="/character-bios/Billy">Billy</Link> notices that the body language of the person wearing the <Link to="/character-bios/CobraCommander">Cobra Commander</Link> armor doesn't match his father's. <Link to="/character-bios/Raptor">Raptor</Link> reveals that the man in the armor is <Link to="/character-bios/Fred7">Fred VII</Link>, the Crimson Guardsman who built <Link to="/character-bios/Billy">Billy</Link>'s prosthetic leg.
          </p>
          <p>
            Captain Minh comments that the device concealing his boat looks like something Zartan would make. Zartan simply replies that "Zartan is no more," then leaves the group to scout ahead.  He enters the landlocked freighter where a dinner party for potential weapons buyers is underway. <Link to="/character-bios/Raptor">Raptor</Link> departs sometime afterward, pursuing an agenda of his own.
          </p>
          <p>
            Aboard the freighter, Zartan transforms into Dr. Mindbender and arranges a private meeting with <Link to="/character-bios/Fred7">Fred VII</Link>. There, he reveals himself, holds a gun to <Link to="/character-bios/Fred7">Fred VII</Link>'s head, and orders him back to his old life as a garage owner in Denver — all while the real Dr. Mindbender watches the exchange from behind an ajar door.
          </p>
          <p>
            Shortly after, <Link to="/character-bios/Raptor">Raptor</Link> confronts Dr. Mindbender privately, describing his trouble controlling the imposter <Link to="/character-bios/CobraCommander">Cobra Commander</Link>, and reveals he knows where the real <Link to="/character-bios/CobraCommander">Cobra Commander</Link> is buried — remains Dr. Mindbender could use to clone a more controllable "competitor." <Link to="/character-bios/Raptor">Raptor</Link>, Dr. Mindbender, and a team of Vipers depart to exhume the body (Issue #97).
          </p>
          <p>
            The next day, Croc Master brings his captives — <Link to="/character-bios/Billy">Billy</Link>, <Link to="/character-bios/Tyrone">Tyrone</Link>, and Captain Minh — aboard the freighter, where <Link to="/character-bios/Fred7">Fred VII</Link>, <Link to="/character-bios/Firefly">Firefly</Link>, Voltar, and Zartan are waiting. An argument breaks out, with <Link to="/character-bios/Billy">Billy</Link> accusing <Link to="/character-bios/Fred7">Fred VII</Link> of being an imposter responsible for murdering his father, the real <Link to="/character-bios/CobraCommander">Cobra Commander</Link>. Voltar demands proof, suggesting perhaps <Link to="/character-bios/Billy">Billy</Link> is the imposter. Mid-argument, the lights go out, and the top hatch opens to reveal the real <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and his Crimson Guard, alongside Dr. Mindbender, <Link to="/character-bios/Raptor">Raptor</Link>, and the Viper excavation team. The real <Link to="/character-bios/CobraCommander">Cobra Commander</Link> throws Dr. Mindbender, <Link to="/character-bios/Raptor">Raptor</Link>, and the excavation team down into the freighter and seals the hatch.
          </p>
          <p>
            Soon after, a series of explosions diverts a water channel, carrying the freighter into an inactive volcano; further explosions bury it deep within, trapping everyone inside (Issue #98). In time, <Link to="/character-bios/Billy">Billy</Link> and Zartan escape; the others die of botulism from tainted rations aboard the freighter (Issue #116). Later issues reveal that <Link to="/character-bios/Firefly">Firefly</Link> also escaped.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Acquiring Evening Shade</h2>
          <img src={zartan5} alt="Zartan acquiring Evening Shade" className="profile-block-img" />
          <p>
            <Link to="/character-bios/PalePeony">Pale Peony</Link> is hired to acquire Morning Light, the legendary Arashikage sword believed to be in <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s possession. She travels to his secret water tower base and draws the sword kept there, only to find the blade broken. <Link to="/character-bios/StormShadow">Storm Shadow</Link> is waiting for her inside, and the two duel. Zartan — disguised as FSB Captain Bulgokov — and <Link to="/character-bios/PalePeony">Pale Peony</Link>'s nephew arrive on the rooftop where the water tower stands. In the midst of the duel, Zartan reveals his true form and fires arrows at <Link to="/character-bios/StormShadow">Storm Shadow</Link>, who cuts them down in flight. Zartan retrieves the broken arrows, examines them, and reveals that the blade <Link to="/character-bios/StormShadow">Storm Shadow</Link> carries is Evening Shade — the duplicate he and <Link to="/character-bios/Onihashi">Professor Onihashi</Link> forged decades earlier.
          </p>
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link> reveals that Morning Light is on display in a museum, then presents Evening Shade to Zartan, telling him it belongs with <Link to="/character-bios/Onihashi">Professor Onihashi</Link>'s last apprentice. With her objective out of reach, <Link to="/character-bios/PalePeony">Pale Peony</Link> disarms her nephew, stopping him from firing on <Link to="/character-bios/StormShadow">Storm Shadow</Link>. <Link to="/character-bios/StormShadow">Storm Shadow</Link> then offers to buy the two noodles in the East Village, and the three depart in haste as police close in. Zartan makes his own escape, departing with Evening Shade in hand (Storm Shadow #4).
          </p>
        </section>

          <section className="profile-block">
          <h2 className="profile-block-title">Seeking Absolution: Surrending Evening Shade</h2>
          <img src={zartan6} alt="Zartan surrendering Evening Shade" className="profile-block-img" />
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link> is staying with his aunt, <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link>, at her home outside the old Arashikage clan grounds. Something calls to him in the middle of the night, drawing him out to walk the grounds himself. There he meets Zartan, who shifts into the form of the <Link to="/character-bios/BlindMaster">Blind Master</Link>. Zartan speaks of his guilt over killing both the <Link to="/character-bios/HardMaster">Hard Master</Link> and the <Link to="/character-bios/BlindMaster">Blind Master</Link>, and how he sought penance by mentoring <Link to="/character-bios/Tyrone">Tyrone</Link> in the <Link to="/character-bios/BlindMaster">Blind Master</Link>'s image — becoming him, yet never once feeling absolved.
          </p>
          <p>
            Zartan recalls the day <Link to="/character-bios/StormShadow">Storm Shadow</Link> first gave him Evening Shade, then presents the blade back to him, saying it belongs with the Arashikage clan. <Link to="/character-bios/StormShadow">Storm Shadow</Link> accepts it graciously. When he looks up again, Zartan is gone (Issue #217).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), two versions of Zartan were produced: the original <a href="https://www.yojoe.com/action/84/zartan.shtml" target="_blank" rel="noopener noreferrer">1984 version</a> and the <a href="https://www.yojoe.com/action/93/zartan2.shtml" target="_blank" rel="noopener noreferrer">1993 Ninja Force version</a>. After the Marvel run, Zartan is depicted exclusively as the original 1984 version of the figure.
          </p>
          <p>
            The working name Hasbro used for Zartan was Captain Chameleon. Mr. Hama suggested the name Zartan, an anagram of Tarzan. When the figure was first produced, its file card included the following psychological profile: "Extreme paranoid schizophrenic. Develops multiple personalities to such an extent that the original personality becomes buried and forgotten." Hasbro later removed this section, releasing a revised file card without the psychological profile.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Zartan;
