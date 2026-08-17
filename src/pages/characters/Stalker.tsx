import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import stalker1 from './img/stalker/Stalker_1.png';
import stalker2 from './img/stalker/Stalker_2.png';
import stalker3 from './img/stalker/Stalker_3.png';
import stalker4 from './img/stalker/Stalker_4.png';
import stalker5 from './img/stalker/Stalker_5.png';

const Stalker: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Stalker (Lonzo Wilkinson)</h1>

        <p className="profile-intro">
          One of the original members of G.I. Joe, Lonzo R. Wilkinson (Stalker) was born in Detroit, Michigan. His two older brothers were killed by gangs. Lonzo himself became a gang leader before enlisting in the U.S. Army to escape the streets of Detroit. He served in the Vietnam War but kept this a secret from his mother, having a cousin stationed in Germany reroute his letters so she would believe he was stationed there instead (Issue #155). Stalker served as the team leader of a six-man LRRP (Long Range Reconnaissance Patrol) that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, and <Link to="/character-bios/Wade">Wade Collins</Link> served on.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Vietnam and the Arashikage Tattoo</h2>
          <img src={stalker1} alt="Stalker in Vietnam, discovering the Arashikage tattoo" className="profile-block-img" />
          <p>
            Returning from a patrol with <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, Stalker's LRRP comes under attack as their Huey arrives. Stalker and <Link to="/character-bios/StormShadow">Storm Shadow</Link> board the Huey, but <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is hit before he can reach it. The enemy fire is intense, and believing <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' fate is sealed, Stalker orders the Huey to leave. <Link to="/character-bios/StormShadow">Storm Shadow</Link> disobeys the order, runs through a hail of gunfire, and carries the wounded <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> aboard.
          </p>
          <p>
            On the Huey, <Link to="/character-bios/StormShadow">Storm Shadow</Link> removes his wrist wrap — revealing the Arashikage tattoo, the first time Stalker sees it — and uses it to help bandage <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> (Issue #26). <Link to="/character-bios/StormShadow">Storm Shadow</Link> also employs the Arashikage Mindset to help stabilize <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' condition.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">UN Refugee Camp in Borovia</h2>
          <img src={stalker2} alt="Stalker at the UN Refugee Camp in Borovia" className="profile-block-img" />
          <p>
            At a UN refugee camp in Borovia, Stalker is the NCOIC (Non-Commissioned Officer In Charge) of the security detail. At the checkpoint, a local carrying a backpack is about to have it searched by an MP when he pulls out a pistol and shoots the MP. The local flees, and Stalker pursues.
          </p>
          <p>
            Stalker tackles the local while the others search his backpack, finding crimping tools and blasting caps. Stalker smells dead rubber on the local's hands, indicating he's handled plastic explosives. The refugee camp houses thousands of children, and there isn't enough time to evacuate the civilians.
          </p>
          <p>
            Another soldier reports finding an empty gym bag nearby, capable of carrying fifty pounds of Semtex. The local refuses to divulge the location of the explosives, willing to die in the blast. Stalker beats the local until he gives up the location, saving the refugees — the local is left beaten near death (G.I. Joe Declassified #3).
          </p>
          <p>
            Lt. Col.* Clayton Abernathy (<Link to="/character-bios/Hawk">Hawk</Link>) arrives on site as the deactivated explosives are being collected. Soldiers drag in the beaten body of the bomber. Abernathy yells at one of the soldiers carrying the body, "Are you responsible for this?" The soldier replies, "I wish we had."
          </p>
          <p>
            Abernathy takes responsibility for the torture of the local. Later, a Major General chews him out, telling him to put the blame on the sergeant. Abernathy refuses. A closed-door court-martial is held, where Abernathy argues the sergeant answers to him, and that he would have done the same in the sergeant's place — an argument that places every officer above him in the position of being morally inferior if they don't fall on the sword with him.** Abernathy is acquitted (G.I. Joe Declassified #1).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Recruiting Snake Eyes</h2>
          <img src={stalker3} alt="Stalker recruiting Snake Eyes for G.I. Joe" className="profile-block-img" />
          <p>
            Stalker is the first member Colonel Clayton Abernathy (<Link to="/character-bios/Hawk">Hawk</Link>) recruits for G.I. Joe. Stalker recommends <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and the two track him down to a rural route in the High Sierras. Locals direct them to a cabin up on Iron Knife Ridge, where they find <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> returning with rabbits he caught with his bare hands. Stalker convinces him to join G.I. Joe (Issue #27).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Wade Collins Survived</h2>
          <img src={stalker4} alt="Stalker discovering Wade Collins survived Vietnam" className="profile-block-img" />
          <p>
            Stalker and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> drive <Link to="/character-bios/Hawk">Hawk</Link> from Fort Wadsworth (Staten Island) to Washington, D.C. Unbeknownst to them, Crimson Guardsman Fred II follows them from Staten Island.
          </p>
          <p>
            While <Link to="/character-bios/Hawk">Hawk</Link> visits General Austin at the U.S. Army Medical Center, Stalker and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> visit the Vietnam Memorial. As they look up the names of their fallen friends, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> points to where <Link to="/character-bios/Wade">Wade Collins</Link>' name should be in the directory — it's missing. Just then, Fred II appears, pointing a silenced pistol at them, and says <Link to="/character-bios/Wade">Wade Collins</Link> is not dead: he is <Link to="/character-bios/Wade">Wade Collins</Link>. Cobra gave him a new face and a new life (Issue #42).
          </p>
          <p>
            Collins takes the two to his vehicle, and they drive as he explains what happened. He did not die in Vietnam — rather, he was wounded and captured. The North Vietnamese Army tended his wounds, and Collins spent the next two years rotting in a POW camp.
          </p>
          <p>
            When he returned to the U.S., he was spat on at the airport and called a baby killer. His wife's lawyer showed up with divorce papers instead of her. Unable to find work, as employers were reluctant to hire veterans, Collins began wandering the country. One day, wandering into a small town, he came across a Cobra poster. He joined the organization, rose through the ranks, and underwent surgery when he joined the Crimson Guard.
          </p>
          <p>
            Stalker and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> convince Collins that joining Cobra was wrong, and that Cobra is using him. They take him back to his home in Staten Island, where they help him escape Cobra with his adoptive family (Issue #43).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Borovia</h2>
          <img src={stalker5} alt="Stalker's capture and rescue in Borovia" className="profile-block-img" />
          <p>
            Stalker, Snow Job, Quick Kick, and Outback are sent on a mission to Borovia disguised as trade emissaries to rescue Delvin Winchell, who was arrested on trumped-up charges of espionage. In Borovia, they make contact with Spigou, who drives the getaway vehicle while the four Joes break into the prison holding Winchell. They find the cells empty, and the situation worsens as more guards arrive and sound the alarm.
          </p>
          <p>
            Snow Job and Quick Kick are wounded. The Joes flee the prison, jump into their getaway vehicle, and drive off, but Spigou is hit. He has the Joes escape into an alley while he drives the vehicle toward the pursuers, hoping to buy them time. Stalker orders Outback to flee, since he needs to stay with the wounded. The vehicle is struck by a tank round, and Spigou dies in the explosion. Stalker, Snow Job, and Quick Kick are captured.
          </p>
          <p>
            On U.S. TVs, the three Joes' photos are broadcast on the news, identifying them as Western mercenaries. The State Department denies any connection to them, and <Link to="/character-bios/Hawk">Hawk</Link> informs the team that they've been written off — there will be no rescue mission (Issue #61).
          </p>
          <p>
            A quick trial is held for Stalker, Snow Job, and Quick Kick, and they're sent by train to a gulag. On the train, Stalker tends to the wounded Snow Job and Quick Kick and ensures all the prisoners in his freight car share the meager food and water provided (Issue #62).
          </p>
          <p>
            In the gulag, Snow Job and Quick Kick are assigned to the workshop, building children's toys, forced to work at the same table as Boris, a well-known snitch. Stalker is sent to work the logging camp, where Sgt. Mosiev tells him he holds the national gold medal for long-distance rifle shooting, daring Stalker to run — he won't fire until Stalker reaches the 300-meter mark.
          </p>
          <p>
            At dinner, the three Joes sit together with Boris at the table. Boris alerts the guards that the Americans are plotting, using their secret slang. Snow Job is taken away. Stalker is about to stand when Sgt. Mosiev tells him that if he moves another inch, his friend will be shot instead of beaten. Stalker sits down (Issue #63).
          </p>
          <p>
            Days turn to weeks. On a stormy night, Corporal Olga enters the barracks with three soldiers. She pistol-whips one of the prisoners and demands he give her a name. When he refuses, she shoots him dead, then turns to the treacherous Boris. Boris points to Snow Job, lying in bed recovering from his wounds. Olga says he's been too sick to get up for weeks and tells Boris the culprit must be him instead. She has her soldiers take Boris away.
          </p>
          <p>
            After the screams of Boris — and of the guards who beat him to death — die down, the barracks door is broken open. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/Billy">Billy</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link> arrive with assault rifles taken from the bodies of the dead guards. Stalker tells his fellow prisoners these are friends, and the prisoners pick up the rifles.
          </p>
          <p>
            The Joes offer to take the prisoners in their commandeered army truck to the Borovian border. The prisoners say that while they don't like their government, they love their country, and choose to remain in Borovia to work for the underground resistance.
          </p>
          <p>
            The Joes reach the border and find a barbed-wire fence and guard towers lining the river bordering Borovia. The White Clown and Orlovsky arrive from the circus, their car hauling the circus cannon. The White Clown fires the Joes into the water, bypassing the fences and guard towers. Stalker is the last to be fired, and as he waits, he spots Sgt. Mosiev. Both raise their rifles; Stalker fires first, killing him. Stalker discards the rifle, enters the cannon, and is fired to the safety of the river (Issue #66).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            Larry Hama based Stalker on his friend Ed Davis, who served two tours of duty with an LRRP unit during the Vietnam War. Mr. Davis lost an eye in combat in Vietnam. Mr. Hama also based the character of John Wraith (Wolverine series) on Mr. Davis.
          </p>
          <p>
            Five versions of the Stalker action figure were produced during the Marvel run (1982–1994): the original <a href="https://www.yojoe.com/action/82/stalker.shtml" target="_blank" rel="noopener noreferrer">1982 Ranger</a> (and its <a href="https://www.yojoe.com/action/83/stalker1p5.shtml" target="_blank" rel="noopener noreferrer">1983 swivel-arm</a> version), the <a href="https://www.yojoe.com/action/89/stalker2.shtml" target="_blank" rel="noopener noreferrer">1989 Arctic Ranger</a>, the <a href="https://www.yojoe.com/action/92/stalker3.shtml" target="_blank" rel="noopener noreferrer">1992 Talking Battle Commands</a>, the <a href="https://www.yojoe.com/action/93/stalker4.shtml" target="_blank" rel="noopener noreferrer">1993 Arctic Ranger repaint</a>, and the <a href="https://www.yojoe.com/action/94/stalker5.shtml" target="_blank" rel="noopener noreferrer">1994 Ranger</a>. Stalker's original file card lists him as an E-5. In Issue #33, Stalker — along with seven other of the original thirteen Joes — receives a pay-grade promotion and is assigned administrative duties to accommodate the growing team. Sometime between this promotion and the release of Stalker's 1989 figure, he received another promotion to E-7 (Sergeant First Class). Stalker's remaining file cards for the Marvel run show his rank as E-7.
          </p>
          <p className="profile-notes-footnote">
            *<Link to="/character-bios/Hawk">Hawk</Link> was an O-5 (Lieutenant Colonel) when he oversaw the refugee camp. Between this time and the formation of G.I. Joe, he was promoted to O-6 (Colonel).
          </p>
          <p className="profile-notes-footnote">
            **A direct quote from Sparks to General Flagg, while observing the court-martial.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Stalker;