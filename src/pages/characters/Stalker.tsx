import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import stalker1 from './img/stalker/Stalker_1.png';
import stalker2 from './img/stalker/Stalker_2.png';
import stalker3 from './img/stalker/Stalker_3.png';
import stalker4 from './img/stalker/Stalker_4.png';
import stalker5 from './img/stalker/Stalker_5.png';
import stalker6 from './img/stalker/Stalker_6.png';
import stalker7 from './img/stalker/Stalker_7.png';
import stalker8 from './img/stalker/Stalker_8.png';
import stalker9 from './img/stalker/Stalker_9.png';
import stalker10 from './img/stalker/Stalker_10.png';

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
            While <Link to="/character-bios/Hawk">Hawk</Link> visits <Link to="/character-bios/Austin">General Austin</Link> at the U.S. Army Medical Center, Stalker and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> visit the Vietnam Memorial. As they look up the names of their fallen friends, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> points to where <Link to="/character-bios/Wade">Wade Collins</Link>' name should be in the directory — it's missing. Just then, Fred II appears, pointing a silenced pistol at them, and says <Link to="/character-bios/Wade">Wade Collins</Link> is not dead: he is <Link to="/character-bios/Wade">Wade Collins</Link>. Cobra gave him a new face and a new life (Issue #42).
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
            In the gulag, Snow Job and Quick Kick are assigned to the workshop, building children's toys, forced to work at the same table as Boris, a well-known snitch. Stalker is sent to work the logging camp, where <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link> tells him he holds the national gold medal for long-distance rifle shooting, daring Stalker to run — he won't fire until Stalker reaches the 300-meter mark.
          </p>
          <p>
            At dinner, the three Joes sit together with Boris at the table. Boris alerts the guards that the Americans are plotting, using their secret slang. Snow Job is taken away. Stalker is about to stand when <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link> tells him that if he moves another inch, his friend will be shot instead of beaten. Stalker sits down (Issue #63).
          </p>
          <p>
            Days turn to weeks. On a stormy night, <Link to="/character-bios/Olga">Cpl. Olga</Link> enters the barracks with three soldiers. She pistol-whips one of the prisoners and demands he give her a name. When he refuses, she shoots him dead, then turns to the treacherous Boris. Boris points to Snow Job, lying in bed recovering from his wounds. <Link to="/character-bios/Olga">Cpl. Olga</Link> says he's been too sick to get up for weeks and tells Boris the culprit must be him instead. She has her soldiers take Boris away.
          </p>
          <p>
            After the screams of Boris — and of the guards who beat him to death — die down, the barracks door is broken open. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/Billy">Billy</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link> arrive with assault rifles taken from the bodies of the dead guards. Stalker tells his fellow prisoners these are friends, and the prisoners pick up the rifles.
          </p>
          <p>
            The Joes offer to take the prisoners in their commandeered army truck to the Borovian border. The prisoners say that while they don't like their government, they love their country, and choose to remain in Borovia to work for the underground resistance.
          </p>
          <p>
            The Joes reach the border and find a barbed-wire fence and guard towers lining the river bordering Borovia. The <Link to="/character-bios/WhiteClown">White Clown</Link> and <Link to="/character-bios/Orlovsky">Orlovsky</Link> arrive from the circus, their car hauling the circus cannon. The <Link to="/character-bios/WhiteClown">White Clown</Link> fires the Joes into the water, bypassing the fences and guard towers. Stalker is the last to be fired, and as he waits, he spots <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link>. Both raise their rifles; Stalker fires first, killing him. Stalker discards the rifle, enters the cannon, and is fired to the safety of the river (Issue #66).
          </p>
        </section>
                
        <section className="profile-block">
          <h2 className="profile-block-title">The LRRP Team at the Cobra Consulate</h2>
          <img src={stalker6} alt="The LRRP Team at the Cobra Consulate" className="profile-block-img" />
          <p>
            While undergoing plastic surgery at the Bern Institute in Switzerland, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is captured by the <Link to="/character-bios/Baroness">Baroness</Link> and taken to the sublevels of the Cobra Consulate in New York City. Stalker rejoins his old LRRP teammates, <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/Wade">Wade Collins</Link>, in New York to help rescue him.
          </p>
          <p>
            Dressed in his old Crimson Guard uniform, <Link to="/character-bios/Wade">Wade</Link> enters the Consulate seeking a meeting with the <Link to="/character-bios/Baroness">Baroness</Link> and walks into a scene of panic, since <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> has already escaped. A Tele-Viper at the front desk tells him the <Link to="/character-bios/Baroness">Baroness</Link> cannot see him because an emergency is underway. <Link to="/character-bios/Wade">Wade</Link> returns to the newsstand across the street, where Stalker and <Link to="/character-bios/StormShadow">Storm Shadow</Link> are waiting. As he changes into his military fatigues, a powerful explosion tears through the Consulate's lobby.
          </p>
          <p>
            Stalker, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, and <Link to="/character-bios/Wade">Wade</Link> rush inside to find the lobby filled with dead and dying Vipers, including an injured Techno-Viper relaying the situation over a microphone. Just then, the elevator doors open, and a crowd of panicked Cobra civilian employees pours out, sweeping the three of them along in the rush to the street. More explosions rip through the floors above. Stalker realizes this is <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' plan: empty the Consulate, seal off the lower levels, and fight his way up (<Link to="/comic-issues/Issue95">Issue #95</Link>).
          </p>
          <p>
            With the lower levels sealed off, the only way up is to scale the outside walls, a feat only a ninja can perform. <Link to="/character-bios/StormShadow">Storm Shadow</Link> begins to climb, while Stalker and <Link to="/character-bios/Wade">Wade</Link> search for another way in. They catch a bus to a nearby building with a helipad and take the elevator to the rooftop.  The helicopter pilot refuses to fly near the burning Cobra Consulate in the heavy rain. Stalker radios the Tomahawk, which is carrying the comatose <Link to="/character-bios/Scarlett">Scarlett</Link> to the hospital in New York.
          </p>
          <p>
            The Tomahawk picks up Stalker and <Link to="/character-bios/Wade">Wade</Link>. From its cabin, they see the penthouse collapsing, with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, and the <Link to="/character-bios/Baroness">Baroness</Link> clinging to a falling slab of the floor. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> pass the <Link to="/character-bios/Baroness">Baroness</Link> into the arms of Destro in a nearby Cobra helicopter. Destro reaches out for the two of them as the slab gives way. The Tomahawk flies in underneath, and Lift Ticket executes a barrel roll, catching them in midair. Stalker and <Link to="/character-bios/Wade">Wade</Link> are reunited with <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> (<Link to="/comic-issues/Issue96">Issue #96</Link>).
          </p>
        </section>

         <section className="profile-block">
          <h2 className="profile-block-title">Prisoners of the Jugglers</h2>
          <img src={stalker7} alt="Stalker taken prisoner after the Borovia mission" className="profile-block-img" />
          <p>
            <Link to="/character-bios/Scarlett">Scarlett</Link> is taken to Midtown Hospital in New York. The doctors do not know when, if ever, she will come out of her coma, or whether she will be able to live a normal life again if she does (Issue #97).
          </p>
          <p>
            Time passes. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> stays by her side, and <Link to="/character-bios/StormShadow">Storm Shadow</Link> remains at the hospital to support his friend. One day, <Link to="/character-bios/Scarlett">Scarlett</Link>'s sister, <Link to="/character-bios/Sioban">Sioban O'Hara</Link>, an attorney-at-law, arrives with a court order to terminate her life-support systems (Issue #101).
          </p>
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link> wants to give his friend a mission to take his mind off the upcoming termination of <Link to="/character-bios/Scarlett">Scarlett</Link>'s life support. He steals the George Strawhacker file from the vault at Fort Leonard. Strawhacker, an agent of an unnamed American intelligence agency, is the fiancé of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' late twin sister and is being held prisoner in a Borovian gulag. <Link to="/character-bios/StormShadow">Storm Shadow</Link> believes that a mission to rescue someone so dear to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> will help him heal, so he infiltrates the Jugglers' chamber inside the Pentagon and threatens them into authorizing the mission.
          </p>
          <p>
            Stalker boards the B-2 stealth bomber bound for Borovian airspace with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link>. Just before <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> makes his HALO jump, <Link to="/character-bios/StormShadow">Storm Shadow</Link> uses the Arashikage Mindset to turn him into an uncaring killing machine, capable of completing the mission without distraction. As <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> descends toward the ground, <Link to="/character-bios/Scarlett">Scarlett</Link> awakes from her coma, asking for him (Issue #103).
          </p>
          <p>
            When the B-2 lands at an Air Force base in Frankfurt, Germany, the military police, led by <Link to="/character-bios/Crowther">General Crowther</Link>, the head of the Jugglers, take <Link to="/character-bios/StormShadow">Storm Shadow</Link> and Stalker prisoner (Issue #104). They are handed over to goons from the Domestic Operations Agency (DOA) and taken, blindfolded and bound, to the Statue of Liberty (Issue #105).
          </p>
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link> breaks free of his bindings and undoes Stalker's, then resets Stalker's shoulder, which the DOA goons had dislocated. The two defeat the DOA thugs inside the statue and commandeer their boat, overpowering the thugs aboard. Stalker fires a flare gun at a DOA helicopter, and the damaged helicopter veers toward the boat. <Link to="/character-bios/StormShadow">Storm Shadow</Link> and Stalker dive into the water just before it crashes into the boat, and they swim to safety on a nearby ferry (Issue #106).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Fugitives in New York</h2>
          <img src={stalker8} alt="Stalker and Storm Shadow as fugitives in New York" className="profile-block-img" />
          <p>
            When the ferry docks, Stalker and <Link to="/character-bios/StormShadow">Storm Shadow</Link> make their way to Storm Shadow's secret lair, an empty water tower on the rooftop of a Manhattan hotel. Unbeknownst to them, <Link to="/character-bios/CobraCommander">Cobra Commander</Link> has hired the Night Creepers to assassinate <Link to="/character-bios/StormShadow">Storm Shadow</Link>.
          </p>
          <p>
            The Night Creepers attack at the water tower. After killing several of them, <Link to="/character-bios/StormShadow">Storm Shadow</Link> overhears the others saying that Stalker is of no consequence and that their target is <Link to="/character-bios/StormShadow">Storm Shadow</Link>. To protect Stalker, who remains on the rooftop, <Link to="/character-bios/StormShadow">Storm Shadow</Link> leads the Night Creepers away and down into the subway. Stalker grabs a torn piece of cloth from one of the Night Creepers, then makes his way to the hospital where <Link to="/character-bios/Scarlett">Scarlett</Link> was staying.
          </p>
          <p>
            Meanwhile, <Link to="/character-bios/Scarlett">Scarlett</Link> is furious with <Link to="/character-bios/StormShadow">Storm Shadow</Link> for sending <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> on a suicide mission. She travels to the subway to find him. Getting off at one stop, she is confronted by a would-be mugger with a knife. She disarms him, breaks his elbow, and walks off with his knife. Later, she runs into <Link to="/character-bios/StormShadow">Storm Shadow</Link> as he flees from the Night Creepers. She confronts him just as the Night Creepers open fire with arrows, and <Link to="/character-bios/StormShadow">Storm Shadow</Link> pushes the two of them onto the tracks in front of an oncoming subway train to escape. He pulls them both to safety between the train cars, but in the chaos, <Link to="/character-bios/Scarlett">Scarlett</Link> accidentally stabs him in the back. Shocked, she cries out, "What have I done?" (Issue #107).
          </p>
          <p>
            Stalker arrives at the hospital and finds <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> with a young Borovian girl named <Link to="/character-bios/Marina">Marina</Link>. <Link to="/character-bios/Hawk">Hawk</Link> and Law, with his dog, Order, are also there. A homeless man arrives and describes a man and woman who match <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> in the subway. He tells them the two fell under the train and disappeared.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> takes Stalker to his secret lair, accessible through the isolation chamber room at Columbia University. There, they find a bandaged and wounded <Link to="/character-bios/StormShadow">Storm Shadow</Link>, with <Link to="/character-bios/Scarlett">Scarlett</Link> tending to him. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> uses the mystic Arashikage trance on <Link to="/character-bios/StormShadow">Storm Shadow</Link>. It is the same technique <Link to="/character-bios/StormShadow">Storm Shadow</Link> used to turn him into a killing machine in Borovia, and to stabilize his condition in Vietnam. <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s wounds stabilize. <Link to="/character-bios/Scarlett">Scarlett</Link> calls an ambulance, and <Link to="/character-bios/StormShadow">Storm Shadow</Link> is taken to the hospital.
          </p>
          <p>
            On the ambulance ride, Stalker examines the torn piece of cloth he collected. He notices concrete dust on it and a burning smell. Just then, the ambulance drives past the Cobra Consulate. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> jumps out of the ambulance and heads for the Consulate, and Stalker soon follows.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and Stalker travel to the roof of the Consulate, where they find <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and his Vipers. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> pins <Link to="/character-bios/CobraCommander">Cobra Commander</Link> with a blade to his throat, and Stalker speaks for his silent friend. He tells <Link to="/character-bios/CobraCommander">Cobra Commander</Link> that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> wants him and his forces out of town and back on Cobra Island. That <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> takes it personally that <Link to="/character-bios/CobraCommander">Cobra Commander</Link> went after his friend (Issue #108).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Going Separate Ways</h2>
          <img src={stalker9} alt="Stalker after the disbanding of G.I. Joe" className="profile-block-img" />
          <p>
            A month after G.I. Joe is disbanded, Stalker, <Link to="/character-bios/Hawk">Hawk</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Duke">Duke</Link>, and Gung-Ho are sent on a final mission (Frontline Issue #1). When the mission is complete, the Joes go their separate ways. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> retire to their cabin in the High Sierras, <Link to="/character-bios/Duke">Duke</Link> is transferred to Fort Benning, Gung-Ho is stationed at Guantanamo Bay, and Stalker is assigned as a recruiting sergeant in Detroit.
          </p>
          <p>
            A month later, a letter from <Link to="/character-bios/Scarlett">Scarlett</Link> arrives for Stalker at his recruiting post in Detroit. She tells him they are expanding the cabin to make room for guests, hinting that she hopes to have children soon. <Link to="/character-bios/Scarlett">Scarlett</Link> closes with the sad news that Timber has passed, but not before leaving them one last surprise: he sired a litter of pups (Frontline Issue #4).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Anabasis is Green-Lit</h2>
          <img src={stalker10} alt="Stalker's sniper duel in the Hindu Kush" className="profile-block-img" />
          <p>
            Stalker is in the Hindu Kush as part of a two-man sniper team operating against a Cobra sniper team. Stalker's spotter is shot dead just before Mainframe radios to tell him that Anabasis is green-lit, the signal that G.I. Joe is being reactivated. Stalker replies, "Roger that," and says he needs to get some payback first. He shoots the Cobra spotter, evening the odds (Issue #156).
          </p>
          <p>
            Stalker sets a trap for the Cobra sniper, captures him, and gets the information he needs from his prisoner (Issue #157). He then meets up with the Joes in the midst of their battle at the Silent Castle (Issue #159).
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
            **A direct quote from Sparks to <Link to="/character-bios/Flagg">General Flagg</Link>, while observing the court-martial.
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