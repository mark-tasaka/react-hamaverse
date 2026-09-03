import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import whiteClown1 from './img/whiteClown/whiteClown_1.png';
import whiteClown2 from './img/whiteClown/whiteClown_2.png';

const WhiteClown: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">White Clown</h1>

        <p className="profile-intro">
          A circus performer, the White Clown lost his beloved <Link to="/character-bios/Magda">Madga</Link>, the Bareback Rider, when she was taken to a Borovian gulag for criticizing the government. Heartbroken, he doesn't know which gulag holds her, or whether she's still alive. When an opportunity arises to trade information about his new American friends' upcoming raid for <Link to="/character-bios/Magda">Madga</Link>'s possible release, the White Clown knows doing so would betray everything she stood for.  Thus, he chooses to help his American friends instead.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Circus Troupe</h2>
          <img src={whiteClown1} alt="The White Clown's circus troupe" className="profile-block-img" />
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link> join the White Clown's traveling circus troupe in their search for the gulag holding <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Quick Kick. They travel with the circus as it moves from location to location, hoping to gather information on where the three Joes are being held.
          </p>
          <p>
            One day, the sadistic Comrade <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link> and Comrade Cpl. Olga watch the troupe rehearse. <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link> approaches the White Clown, mocking his endless, heartbroken search for <Link to="/character-bios/Magda">Madga</Link>, the bareback rider — taunting him with the knowledge of her fate in the gulag. Once the Sergeant departs, the White Clown breaks down in tears, calling out <Link to="/character-bios/Magda">Madga</Link>'s name.
          </p>
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, and <Link to="/character-bios/Billy">Billy</Link> arrive with information on which gulag holds the three Joes. Together with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link>, they chant the hexagram of the ninja clan in preparation for their raid on the gulag. Unnoticed, the White Clown's assistant, <Link to="/character-bios/Orlovsky">Orlovsky</Link> the dwarf, secretly watches the chanting.
          </p>
          <p>
            <Link to="/character-bios/Orlovsky">Orlovsky</Link> makes his way to the White Clown's trailer, where he finds his friend drinking and staring at a photo of his beloved. He tells the White Clown of the group's plan to raid the gulag, suggesting that if they passed this information along to <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link>, perhaps <Link to="/character-bios/Magda">Madga</Link> could be set free. The White Clown admits he would do anything to find <Link to="/character-bios/Magda">Madga</Link> again.
          </p>
          <p>
            But <Link to="/character-bios/Magda">Madga</Link> is a woman of principle, and the White Clown knows that betraying his new friends would violate everything she stood for. He decides to help his American friends instead, hauling the circus cannon to the cliffs overlooking the border — the very spot where the freed Americans are headed. There, he finds his new friends and the liberated prisoners looking out at the border crossing: a river lined with barbed-wire fencing and guard towers on the Borovian side. The White Clown and <Link to="/character-bios/Orlovsky">Orlovsky</Link> use the circus cannon to fire the Americans past the barbed wire and safely into the river, allowing them to escape Borovia (Issue #66).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Security Police Headquarters</h2>
          <img src={whiteClown2} alt="The White Clown recognizing Snake Eyes" className="profile-block-img" />
          <p>
            The revolution to overthrow the communist government of Borovia is underway. The White Clown and <Link to="/character-bios/Orlovsky">Orlovsky</Link> stand outside the headquarters of the Security Police, amid a large mob of rebels. The White Clown worries the mob will burn the building down before he can retrieve the records revealing which gulag holds his beloved <Link to="/character-bios/Magda">Madga</Link>. Suddenly, a stranger emerges from the crowd, somersaulting over the barricades and dodging incoming machine-gun fire to breach the headquarters. The White Clown recognizes the acrobatic style at once — it belongs to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. Hope fills his heart.
          </p>
          <p>
            The White Clown raises his assault rifle, and he and <Link to="/character-bios/Orlovsky">Orlovsky</Link> follow <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> into the building, providing covering fire. The mob, led by <Link to="/character-bios/Metz">Metz</Link>, follows shortly after. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> reaches the records room, where the security police inside surrender, and begins searching through the files. <Link to="/character-bios/Metz">Metz</Link> enters and orders the rebels to march the prisoners outside along with the Lower Borovians and have them shot. The White Clown protests, but <Link to="/character-bios/Metz">Metz</Link> turns on him, demanding to know if he, too, is an enemy of the people, before departing to oversee the executions. <Link to="/character-bios/Orlovsky">Orlovsky</Link> tells the White Clown he has found the records showing where <Link to="/character-bios/Magda">Madga</Link> is held.
          </p>
          <p>
            The White Clown looks over <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' shoulder and discovers the file belongs to a prisoner held in the cellblocks beneath Gulag 23 — the same place where <Link to="/character-bios/Magda">Madga</Link> is being held. <Link to="/character-bios/Orlovsky">Orlovsky</Link> remarks, "This is not the Snake Eyes we used to know."
          </p>
          <p>
            The White Clown and <Link to="/character-bios/Orlovsky">Orlovsky</Link> follow <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> out of the building. A <Link to="/character-bios/Marina">young girl</Link> pleads with him to stop the firing squad from killing her family, but <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> ignores her cries and walks past. <Link to="/character-bios/Orlovsky">Orlovsky</Link> watches, puzzled and troubled, as the firing squad shoots the girl's father, unable to understand why <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> does nothing to stop it. The three then steal <Link to="/character-bios/Metz">Metz</Link>'s car and set off for Gulag 23 (Issue #104).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default WhiteClown;
