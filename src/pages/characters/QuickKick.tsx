import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';
import quickKick1 from './img/quickKick/quickKick_1.png';
import quickKick2 from './img/quickKick/quickKick_2.png';

function QuickKick() {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Quick Kick (MacArthur S. Ito)</h1>

        <p className="profile-intro">
          MacArthur Ito (Quick Kick) is the team's martial arts expert. Ito's first mission with the Joes was the rescue of <Link to="/character-bios/RipCord">Rip Cord</Link> on Cobra Island. He was one of the Joes captured in Borovia, written off by the U.S. government, and rescued in an unofficial capacity by <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, <Link to="/character-bios/Billy">Billy</Link>, and <Link to="/character-bios/BlindMaster">Blind Master</Link>. Ito fell in battle during a costly mission to Trucial Abysmia, which claimed the lives of several Joes.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Joining the Joes: First Mission to Cobra Island</h2>
          <img src={quickKick1} alt="Quick Kick joins the Joes" className="profile-block-img" />
          <p>
            Quick Kick's first meeting with the Joes takes place at the PX Canteen in Fort Wadsworth, where he and Alpine arrive in their dress uniforms. Quick Kick and Alpine meet <Link to="/character-bios/Flint">Flint</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and Spirit. When they are alone, Alpine tells Quick Kick that "loquacious and friendly sure ain't on their list of attributes." Quick Kick replies that the Joes are not sticklers for the uniform code, commenting on their custom outfits (Issue #45).
          </p>
          <p>
            Shortly after this, Quick Kick and Alpine are sent on their first mission with the Joes: a retrieval mission of <Link to="/character-bios/RipCord">Rip Cord</Link> from Cobra Island. A C-130 drops an inflatable Zodiac boat containing <Link to="/character-bios/Flint">Flint</Link>, Spirit, Quick Kick, and Alpine off the coast of Cobra Island. The team infiltrates the island. <Link to="/character-bios/RipCord">Rip Cord</Link> (who is <Link to="/character-bios/Zartan">Zartan</Link> in disguise) is rescued, put on the boat, and transported to the W.H.A.L.E., which waits offshore (Issue #46).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Written Off in Borovia</h2>
          <img src={quickKick2} alt="Quick Kick is captured in Borovia" className="profile-block-img" />
          <p>
            Quick Kick is sent on a mission to Borovia with <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Outback. The four Joes are disguised as trade emissaries, and their objective is to rescue Delvin Winchell, who was arrested on trumped-up charges of espionage. In Borovia, they make contact with Spigou, who drives the getaway vehicle while Quick Kick and the other Joes break into the prison holding Winchell. They find the cells empty, and the situation worsens as more guards arrive and sound the alarm.
          </p>
          <p>
            Quick Kick and Snow Job are wounded. The Joes flee the prison, jump into their getaway vehicle, and drive off, but Spigou is hit. He has the Joes escape into an alley while he drives the vehicle toward the pursuers, hoping to buy them time. <Link to="/character-bios/Stalker">Stalker</Link> orders Outback to flee, since he needs to stay with the wounded. The vehicle is struck by a tank round, and Spigou dies in the explosion. Quick Kick, <Link to="/character-bios/Stalker">Stalker</Link>, and Snow Job are captured.
          </p>
          <p>
            On U.S. TVs, the photos of Quick Kick, <Link to="/character-bios/Stalker">Stalker</Link>, and Snow Job are broadcast on the news, identifying them as Western mercenaries. The State Department denies any connection to them, and <Link to="/character-bios/Hawk">Hawk</Link> informs the team that the three have been written off, and there will be no rescue mission (Issue #61).
          </p>
          <p>
            A quick trial is held for Quick Kick, <Link to="/character-bios/Stalker">Stalker</Link>, and Snow Job, and they are sent by train to a gulag. On the train, <Link to="/character-bios/Stalker">Stalker</Link> tends to the wounded Quick Kick and Snow Job and ensures all the prisoners in his freight car share the meager food and water provided (Issue #62).
          </p>
          <p>
            In the gulag, Quick Kick and Snow Job are assigned to the workshop, building children's toys, and are forced to work at the same table as Boris, a well-known snitch. <Link to="/character-bios/Stalker">Stalker</Link> is sent to work the logging camp.
          </p>
          <p>
            At dinner, the three Joes sit together with Boris at the table. Boris alerts the guards that the Americans are plotting, using their secret slang. Snow Job is taken away. <Link to="/character-bios/Stalker">Stalker</Link> is about to stand when <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link> tells him that if he moves another inch, his friend will be shot instead of beaten. <Link to="/character-bios/Stalker">Stalker</Link> sits down (Issue #63).
          </p>
          <p>
            Days turn to weeks. On a stormy night, <Link to="/character-bios/Olga">Cpl. Olga</Link> enters the barracks with three soldiers. She pistol-whips one of the prisoners and demands he give her a name. When he refuses, she shoots him dead, then turns to the treacherous Boris. Boris points to Snow Job, lying in bed recovering from his wounds. <Link to="/character-bios/Olga">Cpl. Olga</Link> says he has been too sick to get up for weeks and tells Boris the culprit must be him instead. She has her soldiers take Boris away.
          </p>
          <p>
            After the screams of Boris, and of the guards who beat him to death, die down, the barracks door is broken open. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, <Link to="/character-bios/Billy">Billy</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link> arrive with assault rifles taken from the bodies of the dead guards. <Link to="/character-bios/Stalker">Stalker</Link> tells his fellow prisoners these are friends, and the prisoners pick up the rifles.
          </p>
          <p>
            The Joes offer to take the prisoners in their commandeered army truck to the Borovian border. The prisoners say that while they do not like their government, they love their country, and choose to remain in Borovia to work for the underground resistance.
          </p>
          <p>
            Quick Kick and the other Joes reach the border and find a barbed-wire fence and guard towers lining the river bordering Borovia. The <Link to="/character-bios/WhiteClown">White Clown</Link> and <Link to="/character-bios/Orlovsky">Orlovsky</Link> arrive from the circus, their car hauling the circus cannon. The <Link to="/character-bios/WhiteClown">White Clown</Link> fires the Joes into the water, bypassing the fences and guard towers (Issue #66).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982-1994), only a single version of Quick Kick's action figure was produced: the <a href="https://www.yojoe.com/action/85/quickkick.shtml" target="_blank" rel="noopener noreferrer">1985 version</a>.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>
      </div>
    </main>
  );
}

export default QuickKick;