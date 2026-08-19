import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import whiteClown1 from './img/whiteClown/whiteClown_1.png';

const WhiteClown: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">White Clown</h1>

        <p className="profile-intro">
          A circus performer, the White Clown lost his beloved Magda, the Bareback Rider, when she was taken to a Borovian gulag for criticizing the government. Heartbroken, he doesn't know which gulag holds her, or whether she's still alive. When an opportunity arises to trade information about his new American friends' upcoming raid for Magda's possible release, the White Clown knows doing so would betray everything she stood for.  Thus, he chooses to help his American friends instead.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Circus Troupe</h2>
          <img src={whiteClown1} alt="The White Clown's circus troupe" className="profile-block-img" />
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link> join the White Clown's traveling circus troupe in their search for the gulag holding <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Quick Kick. They travel with the circus as it moves from location to location, hoping to gather information on where the three Joes are being held.
          </p>
          <p>
            One day, the sadistic Comrade Sgt. Mosiev and Comrade Cpl. Olga watch the troupe rehearse. Sgt. Mosiev approaches the White Clown, mocking his endless, heartbroken search for Magda, the bareback rider — taunting him with the knowledge of her fate in the gulag. Once the Sergeant departs, the White Clown breaks down in tears, calling out Magda's name.
          </p>
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, and <Link to="/character-bios/Billy">Billy</Link> arrive with information on which gulag holds the three Joes. Together with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link>, they chant the hexagram of the ninja clan in preparation for their raid on the gulag. Unnoticed, the White Clown's assistant, <Link to="/character-bios/Orlovsky">Orlovsky</Link> the dwarf, secretly watches the chanting.
          </p>
          <p>
            <Link to="/character-bios/Orlovsky">Orlovsky</Link> makes his way to the White Clown's trailer, where he finds his friend drinking and staring at a photo of his beloved. He tells the White Clown of the group's plan to raid the gulag, suggesting that if they passed this information along to Sgt. Mosiev, perhaps Magda could be set free. The White Clown admits he would do anything to find Magda again.
          </p>
          <p>
            But Magda is a woman of principle, and the White Clown knows that betraying his new friends would violate everything she stood for. He decides to help his American friends instead, hauling the circus cannon to the cliffs overlooking the border — the very spot where the freed Americans are headed. There, he finds his new friends and the liberated prisoners looking out at the border crossing: a river lined with barbed-wire fencing and guard towers on the Borovian side. The White Clown and <Link to="/character-bios/Orlovsky">Orlovsky</Link> use the circus cannon to fire the Americans past the barbed wire and safely into the river, allowing them to escape Borovia (Issue #66).
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
