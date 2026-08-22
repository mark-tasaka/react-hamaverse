import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import palePeony1 from './img/palePeony/palePeony_1.png';
import palePeony2 from './img/palePeony/palePeony_2.png';
import palePeony3 from './img/palePeony/palePeony_3.png';
import palePeony4 from './img/palePeony/palePeony_4.png';
import palePeony5 from './img/palePeony/palePeony_5.png';
import palePeony6 from './img/palePeony/palePeony_6.png';
import palePeony7 from './img/palePeony/palePeony_7.png';
import palePeony8 from './img/palePeony/palePeony_8.png';
import palePeony9 from './img/palePeony/palePeony_9.png';

const PalePeony: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Pale Peony (Margarita Shiro)</h1>

        <p className="profile-intro">
          Margarita Shiro (Pale Peony) is the daughter of a Japanese Yakuza boss (her father) and a Colonel from the Assassination Directorate of the old KGB (her mother). Starting out as <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s enemy, Pale Peony is hired to steal Morning Light, the legendary Arashikage blade believed to be in <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s possession. <Link to="/character-bios/StormShadow">Storm Shadow</Link> later sends Pale Peony to the Arashikage clan to train as a ninja. She eventually teams up with <Link to="/character-bios/Jinx">Jinx</Link> to infiltrate Revanche, the corporation responsible for producing the Blue Ninja cyborgs.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Morning Light</h2>
          <img src={palePeony1} alt="Pale Peony's pursuit of Morning Light" className="profile-block-img" />
          <p>
            Pale Peony is hired by Russian mob boss Mr. Sgrobe to acquire Morning Light, the legendary Arashikage blade believed to be in <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s possession. Starting in Chicago, Pale Peony and her thugs attack <Link to="/character-bios/StormShadow">Storm Shadow</Link>. While her thugs deal with him, Pale Peony makes off with Tiff, <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s "niece" (Storm Shadow #1).
          </p>
          <p>
            Tiff becomes Pale Peony's hostage, and their journey takes them through Russia and Japan, with <Link to="/character-bios/StormShadow">Storm Shadow</Link> in pursuit. A final confrontation between Pale Peony and <Link to="/character-bios/StormShadow">Storm Shadow</Link> takes place at his water tower base in New York. As the two cross blades, Pale Peony's nephew and FSB Captain Bulgokov arrive. Captain Bulgokov reveals himself to be <Link to="/character-bios/Zartan">Zartan</Link> and fires arrows at <Link to="/character-bios/StormShadow">Storm Shadow</Link>, who cuts them down. <Link to="/character-bios/Zartan">Zartan</Link> retrieves the severed arrows, revealing that the blade <Link to="/character-bios/StormShadow">Storm Shadow</Link> carries is Evening Shade — the copy <Link to="/character-bios/Onihashi">Professor Onihashi</Link> and <Link to="/character-bios/Zartan">Zartan</Link> forged decades earlier. The real Morning Light, it turns out, is on display at a museum in Manhattan.
          </p>
          <p>
            In an unusual twist, elsewhere in the city, Tiff reveals herself to be a 27-year-old little-person operative hired by Kolya, a Russian petroleum mogul, to get close to Sgrobe and discourage his interests in a new pipeline. Kolya paid Tiff $5 million, of which she gave <Link to="/character-bios/StormShadow">Storm Shadow</Link> a cool 20 percent. Impressed with Tiff, Sgrobe hires her as his new head of security, firing his two former bodyguards, Olga and Katya.
          </p>
          <p>
            Back at the water tower, <Link to="/character-bios/StormShadow">Storm Shadow</Link> gives Evening Shade to <Link to="/character-bios/Zartan">Zartan</Link>, who helped forge it. Pale Peony disarms her nephew, stopping him from firing at <Link to="/character-bios/StormShadow">Storm Shadow</Link>. <Link to="/character-bios/StormShadow">Storm Shadow</Link> then offers to buy the two noodles in the East Village, and the three depart in haste as police close in.  <Link to="/character-bios/Zartan">Zartan</Link> makes his own escape.
          </p>
          <p>
            Over noodles, <Link to="/character-bios/StormShadow">Storm Shadow</Link> strikes a deal with Pale Peony and her nephew: they'll spread word that <Link to="/character-bios/Zartan">Zartan</Link> holds the real Morning Light (Storm Shadow #4).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Pale Peony's Training in the Arashikage Clan</h2>
          <img src={palePeony2} alt="Pale Peony's training in the Arashikage clan" className="profile-block-img" />
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link> sees something in Pale Peony — that she will one day bring credit to the Arashikage clan. He makes a request to his aunt, Obake Obasan ("Demon Granny"), the late <Link to="/character-bios/HardMaster">Hard Master</Link>'s widow and the clan's current head. While Obake Obasan recognizes great talent in Pale Peony, she is concerned with her loose ethical core and complex worldview (Issue #183).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">San Diego Comic-Con</h2>
          <img src={palePeony3} alt="Pale Peony at San Diego Comic-Con" className="profile-block-img" />
          <p>
            Pale Peony is sent to San Diego Comic-Con to hand off the Virtual Krytron (a nuclear trigger device) to a terrorist agent. Destro passes this information to Duke as a debt of honor, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and <Link to="/character-bios/Stalker">Stalker</Link> head into the convention to recover the device (Issue #180).
          </p>
          <p>
            Pale Peony attacks <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> inside the convention. He recognizes her fighting style as the esoteric techniques used by specific Yakuza clans, and counters with Arashikage forms. Pale Peony, recognizing the style in turn, switches to non-lethal Arashikage techniques of her own — unwilling to kill a fellow member of the clan. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> takes the Virtual Krytron, disguised as a USB drive, from her.  He allows her to escape as <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> understanding her intention by switching to non-lethal techniques (Issue #181).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Former Emirate of Benzheen</h2>
          <img src={palePeony4} alt="Pale Peony in the Former Emirate of Benzheen" className="profile-block-img" />
          <p>
            After fleeing Comic-Con, Pale Peony is captured by a Blue Ninja cyborg and held inside a container while it interrogates her about the whereabouts of a flash drive containing Krythorn. She insists she doesn't know. Zarana and Road Pig arrive, destroy the cyborg, and free Pale Peony — revealing that is working with them (Issue #181).
          </p>
          <p>
            Back at their safe house, Zarana and Road Pig tie Pale Peony upside down, explaining that they were using her as a buffer. Pale Peony breaks free of her bindings and kicks both of them, then demands to cut a new deal with them.
          </p>
          <p>
            Later, over drinks, the three discuss their plan to take over Darklon's operations — which Pale Peony describes not as a hostile takeover, but a stealth merger (Issue #182). <Link to="/character-bios/Zartan">Zartan</Link> later joins the trio, and all four travel to the former Emirate of Benzheen (Issue #183).
          </p>
          <p>
            Tunnel Rat, Dusty, and Air Tight are operating in Benzheen. Tunnel Rat is captured by the newly formed crew — Pale Peony, <Link to="/character-bios/Zartan">Zartan</Link>, Zarana, and Road Pig - while Dusty and Air Tight are captured separately by the local authorities (Issue #184) and sent to a prison outside the city (Issue #185). Pale Peony quietly whispers to Tunnel Rat that she's on his side.
          </p>
          <p>
            Darklon and Colonel Faroud, the prospective buyer of the Krythorn device, arrive at the prison, where the Colonel takes Darklon down to the basement to test it. Darklon is shocked to see how little the Colonel cares for the guards and scientists who will die in the resulting explosion.
          </p>
          <p>
            A five-man G.I. Joe team led by Lt. Falcon launches an assault on the prison, while the newly formed crew mounts an independent attack of their own (Issue #186). Pale Peony is wounded, taking a bullet meant for Road Pig. Road Pig carries her unconscious body, refusing to abandon her. When the Tomahawk arrives with reinforcements, he hands Pale Peony to Lifeline, as she will need immediate medical treatment to keep her alive (Issue #187).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Tokyo Amusement Park</h2>
          <img src={palePeony5} alt="Pale Peony at the Tokyo amusement park" className="profile-block-img" />
          <p>
            Pale Peony arrives at an amusement park in the Asakusa district of Tokyo with a special coupon for the "scariest ride in all of Japan." The coupon specifies a particular date and time. The ticket taker leads her to a special car. Shortly after, the ticket taker brings <Link to="/character-bios/Jinx">Jinx</Link> to share the same car — both women are startled to see each other, each having received an identical coupon.
          </p>
          <p>
            Midway through the ride, Obake Obaasan (Demon Granny) appears between them. She tells the two women that leadership of the clan must be passed to a new generation, and that each of them has a trial to prove herself. For security, she says, she cannot contact them again until one of them either succeeds or perishes. Obake Obaasan vanishes, and the ride comes to an end (Issue #192).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">"The Arashikage clan never forgets its own"</h2>
          <img src={palePeony6} alt="Pale Peony's mission to Ollistan" className="profile-block-img" />
          <p>
            Pale Peony and <Link to="/character-bios/Jinx">Jinx</Link> find work at a Revanche Electronics factory in Lauhar, Ollistan. The factory's lecherous manager takes notice of the two and summons them to his office, offering promotions in exchange for certain favors. Pale Peony and <Link to="/character-bios/Jinx">Jinx</Link> beat him senseless instead, forcing him to reveal how to access the factory's secret area (Issue #193).
          </p>
          <p>
            Inside, they encounter a group of masked gunmen. After defeating them and removing their masks, the women discover they're actually Revanche cyborgs. Armed with this knowledge, they flee to their safe house, where they have access to secure communications. Outside, they spot more cyborgs disguised as businessmen, but manage to slip inside undetected. From within, they contact the Pit, presenting the severed head of a Revanche cyborg as proof of the factory's activities (Issue #194).
          </p>
          <p>
            The pair make it to the airport, where they're ambushed by more Revanche cyborgs and Pale Peony is shot (Issue #195). They board their flight and land in Tristel, only for a security team to board the aircraft — forcing the two to escape through the luggage compartment. Driving a baggage tug across the tarmac, <Link to="/character-bios/Jinx">Jinx</Link> spots a man in a three-piece suit waving them down; he reveals the Arashikage tattoo on his right forearm, and together, he and <Link to="/character-bios/Jinx">Jinx</Link> help the wounded Pale Peony into the back of a car (Issue #196).
          </p>
          <p>
            Pale Peony receives medical care, and the man escorts them to the train station, arranging a flight home from Aviano Air Base. As the train departs, he waves and calls out, "The Arashikage clan never forgets its own." The two women turn to thank each other for reaching out to him — only to realize neither of them had (Issue #198).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Returning to the Pit in Style</h2>
          <img src={palePeony7} alt="Pale Peony and Jinx returning to the Pit" className="profile-block-img" />
          <p>
            Pale Peony and <Link to="/character-bios/Jinx">Jinx</Link> return to the Pit in style, arriving in a red convertible. Once they reach the lower levels, they brief <Link to="/character-bios/Hawk">Hawk</Link> on everything they uncovered in Ollistan (Issue #201).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Pale Peony's Sacrifice</h2>
          <img src={palePeony8} alt="Pale Peony's final battle in Dublin" className="profile-block-img" />
          <p>
            Pale Peony and <Link to="/character-bios/Jinx">Jinx</Link> infiltrate Revanche Headquarters in Dublin after hours. Inside, they encounter a cyborg identifying itself as 921, who defeats the women, knocks them unconscious, and takes them prisoner (Issue #206). They wake up bound, sealed in separate container boxes on the back of a flatbed truck.
          </p>
          <p>
            When the truck leaves the facility, it's followed by <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, Roadblock, and Gerry McCarthy — a local authority working with the Joes. <Link to="/character-bios/Jinx">Jinx</Link> manages to free her hands, and together the two women kick their way free of the boxes, sending them off the flatbed, over the bridge, and into the water below. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> dive in after them and free them from the boxes, and all four swim to the surface.
          </p>
          <p>
            On the bridge, Roadblock and McCarthy are already engaged with the truck's driver — another Revanche cyborg. Pale Peony, <Link to="/character-bios/Jinx">Jinx</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and <Link to="/character-bios/Scarlett">Scarlett</Link> join the fight.  Pale Peony attacks the cyborg inside the truck's cab. The cyborg self-destructs, vaporizing Pale Peony and reducing her to ash (Issue #207).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Returning Pale Peony's Ashes to Japan</h2>
          <img src={palePeony9} alt="Pale Peony's ashes returned to Japan" className="profile-block-img" />
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link> infiltrates the Pit and takes the box holding Pale Peony's ashes, telling the Joes that Obake Obaasan (Demon Granny) will take care of them (Issue #208). <Link to="/character-bios/StormShadow">Storm Shadow</Link> travels to Japan and delivers the ashes to Obake Obaasan, where they're placed in the room of remembrance, alongside the photos of the fallen Arashikage (Issue #209).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default PalePeony;
