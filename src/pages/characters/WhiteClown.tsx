import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import whiteClown1 from './img/whiteClown/whiteClown_1.png';
import whiteClown2 from './img/whiteClown/whiteClown_2.png';
import whiteClown3 from './img/whiteClown/whiteClown_3.png';
import whiteClown4 from './img/whiteClown/whiteClown_4.png';

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

                <section className="profile-block">
          <h2 className="profile-block-title">Reunited with his Love</h2>
          <img src={whiteClown3} alt="The White Clown's rescue at the gulag" className="profile-block-img" />
          <p>
            The White Clown and <Link to="/character-bios/Orlovsky">Orlovsky</Link> travel with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> to the gulag. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> assaults it alone, laying waste to the guards, while the White Clown and <Link to="/character-bios/Orlovsky">Orlovsky</Link> observe from a distance. The pair spot a helicopter approaching, carrying <Link to="/character-bios/Metz">Metz</Link> and a mercenary. The White Clown believes <Link to="/character-bios/Metz">Metz</Link> has come to help <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, but <Link to="/character-bios/Orlovsky">Orlovsky</Link> tells him he doesn't trust the man (Issue #105). Once <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> has defeated the guards on the surface, he descends into the sewers below, with the mercenary following close behind. Unwilling to risk <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> being killed, the White Clown heads down after them, and <Link to="/character-bios/Orlovsky">Orlovsky</Link> joins him.
          </p>
          <p>
            Inside the sewers, the White Clown spots the mercenary aiming his weapon at <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and strikes him, spoiling his shot. The mercenary quickly overpowers the White Clown, throwing him to the ground and leveling his rifle at him — but <Link to="/character-bios/Orlovsky">Orlovsky</Link>, aiming down through the manhole above, forces the mercenary to surrender his weapon.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> kills the remaining guards and frees the prisoners — <Link to="/character-bios/Magda">Magda</Link> and George Strawhacker. The White Clown is finally reunited with his beloved <Link to="/character-bios/Magda">Magda</Link>, and the two embrace.
          </p>
          <p>
            The White Clown and <Link to="/character-bios/Magda">Magda</Link> return to the surface. A train carrying Lower Borovians arrives outside, and <Link to="/character-bios/Metz">Metz</Link>, the rebel leader, announces that the gulags will remain open — now to house the Lower Borovians instead. Shocked, <Link to="/character-bios/Magda">Magda</Link> realizes the revolution accomplished nothing more than trading one form of persecution for another, shifting from ideology to ethnicity.
          </p>
          <p>
            One of the Lower Borovians, a <Link to="/character-bios/Marina">young girl</Link>, cries out, telling the crowd this man (<Link to="/character-bios/SnakeEyes">Snake Eyes</Link>) is no hero.  He let the mob kill her father. <Link to="/character-bios/Metz">Metz</Link> strikes her with his machine pistol, then levels the weapon at her, calling her subhuman. George Strawhacker, walking beside the Hero, strikes <Link to="/character-bios/Metz">Metz</Link> with his fist, knocking him to the ground.  Strawhacker shouts that <Link to="/character-bios/Metz">Metz</Link> is no different than the regime he claims to have overthrown.
          </p>
          <p>
            <Link to="/character-bios/Metz">Metz</Link> fires his machine pistol, killing Strawhacker. Something awakens in the Hero, who raises his rifle at <Link to="/character-bios/Metz">Metz</Link>. A mercenary in the crowd reveals that <Link to="/character-bios/Metz">Metz</Link> had hired him to kill the Hero, and the mob turns on <Link to="/character-bios/Metz">Metz</Link>, beating him and preparing to hang him.
          </p>
          <p>
            The <Link to="/character-bios/Marina">young girl</Link> begs the Hero not to let the mob hang <Link to="/character-bios/Metz">Metz</Link>. Just as the noose tightens, the Hero, carrying the <Link to="/character-bios/Marina">girl</Link>, shoots the rope in two, and <Link to="/character-bios/Metz">Metz</Link> falls safely to the ground.
          </p>
          <p>
            The White Clown whispers, "Magda — if Metz is allowed to live, he will surely plot to bring about your death." <Link to="/character-bios/Magda">Magda</Link> replies, "I would rather be dead than become the very people who built this gulag" (Issue #106).  <Link to="/character-bios/Magda">Magda</Link> becomes the President of Borovia, forming the new government.
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">The White Clown and Magda's End</h2>
          <img src={whiteClown4} alt="The death of the White Clown and Magda" className="profile-block-img" />
          <p>
            Political turmoil grips Borovia as <Link to="/character-bios/Magda">Magda</Link>'s presidency comes to an end and she is thrown from office. <Link to="/character-bios/Metz">Metz</Link>, the opposition leader, allies himself with Cobra and seizes the presidency. <Link to="/character-bios/Magda">Magda</Link> and the White Clown are captured by Vipers and brought before <Link to="/character-bios/Metz">Metz</Link> and <Link to="/character-bios/CobraCommander">Cobra Commander</Link>. <Link to="/character-bios/Metz">Metz</Link> promises them a fair trial, recalling that his own life had once been spared when the mob tried to hang him.
          </p>
          <p>
            <Link to="/character-bios/CobraCommander">Cobra Commander</Link> disagrees, and guns down <Link to="/character-bios/Magda">Magda</Link> and the White Clown in cold blood. <Link to="/character-bios/Metz">Metz</Link> can only look on, shocked and horrified (Issue #145).
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
