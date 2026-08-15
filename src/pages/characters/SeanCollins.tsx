import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import sean1 from './img/sean/sean_1.png';
import sean2 from './img/sean/sean_2.png';
import sean3 from './img/sean/sean_3.png';
import sean4 from './img/sean/sean_4.png';
import sean5 from './img/sean/sean_5.png';
import sean6 from './img/sean/sean_6.png';
import sean7 from './img/sean/sean_7.png';

const SeanCollins: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Sean Collins</h1>

        <p className="profile-intro">
          Sean Collins is the adopted son of <Link to="/character-bios/Wade">Wade Collins</Link>, who served in Vietnam alongside <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Stalker">Stalker</Link>, and <Link to="/character-bios/StormShadow">Storm Shadow</Link>. A month before his seventeenth birthday, Sean writes to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> about his decision to enlist, and receives an honest, heartfelt reply telling him the truth about being a soldier. Sean decides to enlist and serves two tours as a Special Forces operator in Afghanistan. Years later, he joins G.I. Joe.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Staten Island Home</h2>
          <img src={sean1} alt="Sean's childhood home on Staten Island" className="profile-block-img" />
          <p>
            Sean's parents are Cobra agents. His father is a Crimson Guardsman named Fred Broca, the original Fred in the Fred series of Crimson Guards. It's unclear whether Fred Broca and his wife are Sean and Heather's biological parents, or whether the children were assigned to the family to make it appear as one. The name Broca is an anagram of Cobra, so it's likely not the family's real name.
          </p>
          <p>
            The Broca family purchases a home next to Fort Wadsworth on Staten Island. Sean, a preteen at the time, moves in with his family. Sean's parents set up Cobra surveillance equipment in their home (Issue #30). One day, Destro and Firefly arrive at the family's home and collect Sean's father for a mission of great importance (Issue #31).
          </p>
          <p>
            A week later, Sean's father returns home. Sean and Heather run out to greet him, only to discover that the man claiming to be their father is a different person, though he looks the same — the man who greets them is actually Fred II, who has had plastic surgery to resemble all the other Freds in the series (Issue #32).
          </p>
          <p>
            The Brocas are at the mall when Spirit grabs Fred II by the shoulder and tells him he'd better come along for some questions. Mrs. Broca strikes Spirit in the head with her purse, while Sean and Heather kick his kneecaps, knocking him to the ground. The family flees.
          </p>
          <p>
            They run to the parking lot and jump into their car. Mrs. Broca throws grenades into the parked G.I. Joe V.A.M.P., destroying it. The Joes are forced to commandeer Bongo the Balloon Bear's van, taking Bongo along as the driver, and chase the Broca family through the streets of Staten Island. Eventually, the Brocas escape (Issue #33).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Leaving Cobra</h2>
          <img src={sean2} alt="The Broca family leaving Cobra" className="profile-block-img" />
          <p>
            Fred II falls ill with pneumonia. His wife calls a doctor, but Fred II insists on returning to duty despite the doctor's advice. After the doctor leaves, Sean's parents argue. Fred II tells his wife, "Why should you care? I'm not your real husband. Your real husband is dead." Mrs. Broca cries, saying she'd thought he might have cared. With tears in their eyes, Sean and Heather watch the scene play out from the next room. Fred II then departs, taking the car on a mission (Issue #42).
          </p>
          <p>
            Days later, Fred II returns home with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link>. He tells his adopted family that he was wrong, and that it took real friends to show him he'd been used by Cobra. Looking at his family, he says, "I am not your husband and father — I am a burnt-out <Link to="/character-bios/Wade">Wade Collins</Link> wearing Fred's face." Wade tells them that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> will help them start new lives away from Cobra, and that they don't need to stay with him.
          </p>
          <p>
            As Wade walks out of the house, Heather and Sean call out "Dad" — truly accepting Wade as their father for the first time. Tears fill his eyes. Wade turns to see his wife holding a suitcase. "Wade," she says, "we have a long drive ahead of us to start our new life together" (Issue #43).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Welcoming Marina to the Family</h2>
          <img src={sean3} alt="Sean and Heather meeting their stepsister Marina" className="profile-block-img" />
          <p>
            Years pass. The Collins family moves to another part of America, away from Cobra. One day, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and <Link to="/character-bios/Stalker">Stalker</Link> arrive with a new addition to the family: their adopted sister, <Link to="/character-bios/Marina">Marina</Link>, whose family was killed in Borovia as a reult of ethnic cleansing. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> had brought <Link to="/character-bios/Marina">Marina</Link> back to America.  Sean, Heather and their parents welcome <Link to="/character-bios/Marina">Marina</Link> to her new family (Issue #108).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Letter to Snake Eyes</h2>
          <img src={sean4} alt="Sean's letter to Snake Eyes" className="profile-block-img" />
          <p>
            A month shy of his seventeenth birthday, Sean asks his adoptive father, <Link to="/character-bios/Wade">Wade Collins</Link>, to sign his enlistment papers so he can join the Army. Wade tells him to write to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> — a real warrior — before making that decision.
          </p>
          <p>
            In his letter, Sean writes about how honor and glory feel lost in modern society, where people seem interested only in themselves and material wealth. He asks <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> what's wrong with wanting to be a soldier — with wanting to find something greater through military service.
          </p>
          <p>
            Sean receives a heartfelt reply. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> tells him the truth about being a soldier — that there is no honor or glory in it — and shares stories of the other LRRP members he and Wade served with. Ramon Escobedo had re-upped for a second tour to keep his younger brother from being sent to 'Nam. Dickie Saperstein had re-upped to pay for his father's heart surgery, only for his father to die on the operating table. Both Ramon and Dickie died the same day Wade was taken captive.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> explains that <Link to="/character-bios/Stalker">Stalker</Link> had joined the Army to escape the streets of Detroit, which had already claimed his two older brothers, and that he never told his mother he was serving in Vietnam — instead having a cousin stationed in Germany reroute his letters so she'd believe he was there instead.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> then speaks of returning home from the war — no welcome parties or parades, only being spat on and called a baby killer. Still, he tells Sean he has no regrets about being a soldier, having had the privilege of serving alongside people he could depend on utterly. He closes by writing that bearing arms for the Constitution "is not a profession per se, it is a trust."
          </p>
          <p>
            After reading the letter, Sean tells Wade he needs time to think it over. Wade tells him that if he's still interested in enlisting, he'll sign the papers. The two embrace (Issue #155).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Reconnecting with Snake Eyes and Scarlett in Staten Island</h2>
          <img src={sean5} alt="Sean reconnecting with Snake Eyes and Scarlett" className="profile-block-img" />
          <p>
            After receiving <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' letter, Sean enlists in the U.S. Army. He graduates from Airborne, Ranger, and Special Forces schools, and serves two tours in Afghanistan as a Special Forces operator. Along the way, he also trains as an Arashikage ninja, earning the right to bear the Arashikage tattoo.
          </p>
          <p>
            The Motor Pool — the original site of the Pit, in Fort Wadsworth — is reactivated, and a select team of Joes is stationed there, including <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link>. Driving past the old Broca residence outside the fort, the two spot Sean standing outside the house, reminiscing about growing up there. They stop the vehicle, and Sean immediately recognizes them, telling <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> he kept every letter he ever sent.
          </p>
          <p>
            <Link to="/character-bios/Scarlett">Scarlett</Link> convinces a reluctant Sean to let them look inside the house, posing as an inspector checking for biological or chemical leaks from a recently uncovered underground storage bunker at the fort. While <Link to="/character-bios/Scarlett">Scarlett</Link> talks with the current residents, Sean slips down to the basement, where the old secret Crimson Guard room still stands. Inside, he finds a new smartphone and a Crimson Guard uniform — sized differently from his father's.
          </p>
          <p>
            Sean returns to the Motor Pool with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link>, where <Link to="/character-bios/Stalker">Stalker</Link> and Clutch are waiting. Sean discusses his military service and what he discovered in his old house. Impressed by his credentials, the Joes recommend he apply for the team, and <Link to="/character-bios/Scarlett">Scarlett</Link> tells him she'll make sure Duke and <Link to="/character-bios/Hawk">Hawk</Link> give his application priority (Issue #206).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Joining G.I. Joe</h2>
          <img src={sean6} alt="Sean joining G.I. Joe" className="profile-block-img" />
          <p>
            Sean Collins arrives at the Motor Pool with his new orders. Disappointed, he tells the Joes he's been assigned to an instructor cadre at a new training facility in Texas. They tell him Wild Bill is headed to that same base, and that Clutch will drive him to the C-130. Before Sean departs, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> gives him one of his personal Sykes-Fairbairn commando daggers — a gift that visibly moves him. Clutch jokes, "You must rate, Sean — I never got one of those." <Link to="/character-bios/Scarlett">Scarlett</Link> and Cover Girl  kiss Sean's cheeks, prompting Clutch to add, in surprise, "I never got one of these either!"
          </p>
          <p>
            The C-130 lands at Fort Greer, in Utah — Sean's orders were only a cover for his true assignment: joining G.I. Joe. Roadblock gives him the code name "Throwdown" (Issue #209).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Becoming the New Snake Eyes</h2>
          <img src={sean7} alt="Sean taking on the identity of Snake Eyes" className="profile-block-img" />
          <p>
            In an epic battle against the revived Serpentor, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> sacrifices himself to save the team. Sean suffers injuries eerily similar to those <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> sustained in the helicopter crash years earlier — his face severely burned, his vocal cords severed (Issue #213). To prevent Cobra from learning of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' death, <Link to="/character-bios/Hawk">Hawk</Link> asks Sean to become him, maintaining the illusion that he's still alive. Sean agrees, and <Link to="/character-bios/Scarlett">Scarlett</Link> presents him with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' personal gear, including his Onihashi-forged sword, Lesser Light. A funeral is held for Sean at Arlington National Cemetery (Issue #215).
          </p>
          <p>
            To keep up the illusion that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is still alive, <Link to="/character-bios/Scarlett">Scarlett</Link> and Sean — disguised as <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> — carry on the activities the couple once shared: visiting the cabin in the High Sierras, riding the Staten Island Ferry, and more. These moments deeply affect <Link to="/character-bios/Scarlett">Scarlett</Link>, stirring memories of the lover she lost (Issue #217).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default SeanCollins;
