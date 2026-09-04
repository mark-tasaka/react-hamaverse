import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import orlovsky1 from './img/orlovsky/orlovsky_1.png';
import orlovsky2 from './img/orlovsky/orlovsky_2.png';
import orlovsky3 from './img/orlovsky/orlovsky_3.png';

const Orlovsky: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Orlovsky the Dwarf</h1>

        <p className="profile-intro">
          The White Clown's assistant and friend, Orlovsky the Dwarf works at the traveling circus troupe when <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link> join its ranks. Orlovsky overhears the American performers' plan to raid a Borovian gulag and passes the information along to his friend, suggesting that if they in turn gave it to <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link>, the <Link to="/character-bios/WhiteClown">White Clown</Link>'s beloved <Link to="/character-bios/Magda">Madga</Link> might be set free.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Circus Troupe</h2>
          <img src={orlovsky1} alt="Orlovsky at the circus troupe" className="profile-block-img" />
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link> join the <Link to="/character-bios/WhiteClown">White Clown</Link>'s traveling circus troupe in their search for the gulag holding <Link to="/character-bios/Stalker">Stalker</Link>, Snow Job, and Quick Kick. They travel with the circus as it moves from location to location, hoping to gather information on where the three Joes are being held.
          </p>
          <p>
            After hearing the sadistic Comrade <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link> mock the <Link to="/character-bios/WhiteClown">White Clown</Link> over his beloved <Link to="/character-bios/Magda">Madga</Link>'s fate, Orlovsky steps in. He tells the Sergeant he knows what happened to her — whether she's alive or not — and asks what harm there could be in simply telling the <Link to="/character-bios/WhiteClown">White Clown</Link> either way. <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link> strikes Orlovsky, telling him the information is a state secret.
          </p>
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link>, <Link to="/character-bios/Jinx">Jinx</Link>, and <Link to="/character-bios/Billy">Billy</Link> arrive with information on which gulag holds the three Joes. Together with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, and the <Link to="/character-bios/BlindMaster">Blind Master</Link>, they chant the hexagram of the ninja clan in preparation for their raid on the gulag. Orlovsky secretly watches the chanting.
          </p>
          <p>
            Orlovsky makes his way to the <Link to="/character-bios/WhiteClown">White Clown</Link>'s trailer, where he finds his friend drinking and staring at a photo of his beloved. He tells the <Link to="/character-bios/WhiteClown">White Clown</Link> of the group's plan to raid the gulag, suggesting that if they passed this information along to <Link to="/character-bios/Mosiev">Sgt. Mosiev</Link>, perhaps <Link to="/character-bios/Magda">Madga</Link> could be set free. The <Link to="/character-bios/WhiteClown">White Clown</Link> admits he would do anything to find <Link to="/character-bios/Magda">Madga</Link> again.
          </p>
          <p>
            The <Link to="/character-bios/WhiteClown">White Clown</Link> know that betraying the Americans would go against everything <Link to="/character-bios/Magda">Madga</Link> stood for. So instead, the two haul the circus cannon to the cliffs overlooking the border — the very spot where the freed Americans are headed. There, they find their new friends and the liberated American prisoners looking out at the border crossing: a river lined with barbed-wire fencing and guard towers on the Borovian side. Orlovsky and the <Link to="/character-bios/WhiteClown">White Clown</Link> use the circus cannon to fire the Americans past the fense and safely into the river, allowing them to escape Borovia (Issue #66).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">This is Not the Snake Eyes We Used to Know</h2>
          <img src={orlovsky2} alt="Orlovsky witnessing Snake Eyes' arrival" className="profile-block-img" />
          <p>
            The revolution to overthrow the communist government of Borovia is underway. Orlovsky stands with the <Link to="/character-bios/WhiteClown">White Clown</Link> outside the headquarters of the Security Police, amid a large mob of rebels. Beside him, the <Link to="/character-bios/WhiteClown">White Clown</Link> grows anxious, worried the mob will burn the building down before they can retrieve the records revealing which gulag holds his beloved <Link to="/character-bios/Magda">Magda</Link>. Suddenly, a stranger emerges from the crowd, somersaulting over the barricades and dodging incoming machine-gun fire to breach the headquarters. Orlovsky watches as the <Link to="/character-bios/WhiteClown">White Clown</Link>'s face changes at once — he recognizes the acrobatic style as belonging to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and hope fills his heart.
          </p>
          <p>
            The <Link to="/character-bios/WhiteClown">White Clown</Link> raises his assault rifle, and Orlovsky follows alongside him and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> into the building, providing covering fire. The mob, led by <Link to="/character-bios/Metz">Metz</Link>, follows shortly after. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> reaches the records room, where the security police inside surrender, and begins searching through the files. <Link to="/character-bios/Metz">Metz</Link> enters and orders the rebels to march the prisoners outside along with the Lower Borovians and have them shot. The <Link to="/character-bios/WhiteClown">White Clown</Link> protests, but <Link to="/character-bios/Metz">Metz</Link> turns on him, demanding to know if he, too, is an enemy of the people, before departing to oversee the executions. Orlovsky finds the records they came for and tells the <Link to="/character-bios/WhiteClown">White Clown</Link> he has located where <Link to="/character-bios/Magda">Magda</Link> is held.
          </p>
          <p>
            Looking over <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' shoulder the <Link to="/character-bios/WhiteClown">White Clown</Link> discovers the file belongs to a prisoner held in the cellblocks beneath Gulag 23 — the same place where <Link to="/character-bios/Magda">Magda</Link> is being held. Something about the moment unsettles him. "This is not the Snake Eyes we used to know," Orlovsky remarks.
          </p>
          <p>
            Orlovsky and the <Link to="/character-bios/WhiteClown">White Clown</Link> follow <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> out of the building. A <Link to="/character-bios/Marina">young girl</Link> pleads with him to stop the firing squad from killing her family, but <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> ignores her cries and walks past. Orlovsky watches, puzzled and troubled, as the firing squad shoots the girl's father, unable to understand why <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> does nothing to stop it. The three then steal <Link to="/character-bios/Metz">Metz</Link>'s car and set off for Gulag 23 (Issue #104).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Rescue at the Gulag</h2>
          <img src={orlovsky3} alt="Orlovsky's role in the rescue at the gulag" className="profile-block-img" />
          <p>
            Orlovsky travels with the <Link to="/character-bios/WhiteClown">White Clown</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> to the gulag. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> assaults it alone, laying waste to the guards, while Orlovsky and the <Link to="/character-bios/WhiteClown">White Clown</Link> observe from a distance. Orlovsky spots a helicopter approaching, carrying <Link to="/character-bios/Metz">Metz</Link> and a mercenary. The <Link to="/character-bios/WhiteClown">White Clown</Link> believes <Link to="/character-bios/Metz">Metz</Link> has come to help <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, but Orlovsky isn't convinced, telling his friend that he doesn't trust the man (Issue #105). Once <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> has defeated the guards on the surface, he descends into the sewers below, with the mercenary following close behind. Unwilling to risk <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> being killed, the <Link to="/character-bios/WhiteClown">White Clown</Link> heads down after them.  Orlovsky soon follows.
          </p>
          <p>
            Inside the sewers, Orlovsky watches the <Link to="/character-bios/WhiteClown">White Clown</Link> spot the mercenary aiming his weapon at <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and strike him, spoiling the shot. The mercenary quickly overpowers the <Link to="/character-bios/WhiteClown">White Clown</Link>, throwing him to the ground and leveling his rifle at him. Orlovsky, aiming down through the manhole above, forces the mercenary to surrender his weapon before he can fire.
          </p>
          <p>
            <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> kills the remaining guards and frees the prisoners — <Link to="/character-bios/Magda">Magda</Link> and George Strawhacker. Orlovsky watches as his old friend is finally reunited with his beloved <Link to="/character-bios/Magda">Magda</Link>, the two embracing at last.
          </p>
          <p>
            Orlovsky follows the <Link to="/character-bios/WhiteClown">White Clown</Link> and <Link to="/character-bios/Magda">Magda</Link> back to the surface, where a train carrying Lower Borovians arrives outside. <Link to="/character-bios/Metz">Metz</Link>, the rebel leader, announces that the gulags will remain open — now to house the Lower Borovians instead. Orlovsky can see the shock on <Link to="/character-bios/Magda">Magda</Link>'s face as she realizes the revolution accomplished nothing more than trading one form of persecution for another, shifting from ideology to ethnicity.
          </p>
          <p>
            One of the Lower Borovians, a <Link to="/character-bios/Marina">young girl</Link>, cries out, telling the crowd that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is no hero — that he let the mob kill her father. Orlovsky sees <Link to="/character-bios/Metz">Metz</Link> strike her with his machine pistol, then level the weapon at her, calling her subhuman. George Strawhacker, walking beside the Hero, strikes <Link to="/character-bios/Metz">Metz</Link> with his fist, knocking him to the ground, and shouts that <Link to="/character-bios/Metz">Metz</Link> is no different than the regime he claims to have overthrown.
          </p>
          <p>
            <Link to="/character-bios/Metz">Metz</Link> fires his machine pistol, killing Strawhacker instantly. Orlovsky senses something awaken in the Hero, who raises his rifle at <Link to="/character-bios/Metz">Metz</Link>. A mercenary in the crowd reveals that <Link to="/character-bios/Metz">Metz</Link> had hired him to kill the Hero all along, and the mob turns on <Link to="/character-bios/Metz">Metz</Link>, beating him and preparing to hang him.
          </p>
          <p>
            The <Link to="/character-bios/Marina">young girl</Link> begs the Hero not to let the mob hang <Link to="/character-bios/Metz">Metz</Link>. Just as the noose tightens, the Hero, carrying the <Link to="/character-bios/Marina">girl</Link>, shoots the rope in two, and <Link to="/character-bios/Metz">Metz</Link> falls safely to the ground.
          </p>
          <p>
            Orlovsky overhears the <Link to="/character-bios/WhiteClown">White Clown</Link> whisper to <Link to="/character-bios/Magda">Magda</Link>, "If Metz is allowed to live, he will surely plot to bring about your death." <Link to="/character-bios/Magda">Magda</Link> replies, "I would rather be dead than become the very people who built this gulag" (Issue #106).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Orlovsky;
