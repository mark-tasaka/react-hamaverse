import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import ripCord1 from './img/ripCord/ripCord_1.png';
import ripCord2 from './img/ripCord/ripCord_2.png';

const RipCord: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Rip Cord (Wallace Weems)</h1>

        <p className="profile-intro">
          Wallace A. Weems (Rip Cord) is the team's HALO (High Altitude, Low Opening) jumper.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Always the Diplomat</h2>
          <img src={ripCord1} alt="Rip Cord and Lady Jaye arriving at the Pit" className="profile-block-img" />
          <p>
            Rip Cord and <Link to="/character-bios/LadyJay">Lady Jaye</Link> arrive at the Pit together with their orders to join the team. They enter unannounced, and the first Joes they meet are <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/Grunt">Grunt</Link>. <Link to="/character-bios/Grunt">Grunt</Link> assumes the two are unauthorized personnel who have wandered in by mistake. <Link to="/character-bios/Scarlett">Scarlett</Link> warns them they have entered a restricted installation and asks for ID. <Link to="/character-bios/LadyJay">Lady Jaye</Link> refuses to show it, meeting <Link to="/character-bios/Scarlett">Scarlett</Link>'s question with attitude.
          </p>
          <p>
            Rip Cord, playing the diplomat, tells <Link to="/character-bios/Scarlett">Scarlett</Link> that <Link to="/character-bios/LadyJay">Lady Jaye</Link> did not mean anything by it. <Link to="/character-bios/LadyJay">Lady Jaye</Link>, unmoved, refers to <Link to="/character-bios/Scarlett">Scarlett</Link> as a "tawdry redhead" and says plainly that she does not care for her attitude.
          </p>
          <p>
            Rip Cord diplomatically opens the envelope containing their orders and hands them to <Link to="/character-bios/Grunt">Grunt</Link>, explaining that the papers confirm their permanent assignment to the G.I. Joe team. <Link to="/character-bios/LadyJay">Lady Jaye</Link> adds, with a sharp look at <Link to="/character-bios/Scarlett">Scarlett</Link>, "We are here as your replacements" (Issue #32).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Meeting Candy Apel</h2>
          <img src={ripCord2} alt="Rip Cord meeting Candy Apel" className="profile-block-img" />
          <p>
            Rip Cord, Spirit, and Barbecue are at a mall on Staten Island when Spirit encounters <Link to="/character-bios/Wade">Fred II (Wade Collins)</Link> and his family. Spirit had previously encountered the original Fred Broca in the High Sierras, an encounter that ended in Fred Broca's death. Spirit tells Fred II he had better come along for questioning. Mrs. Collins strikes Spirit in the head with her purse, while her children kick him in the knees. The Brocas flee to the parking lot and make their escape by car, with Mrs. Collins throwing a grenade into the Joes' vehicle and destroying it.
          </p>
          <p>
            Rip Cord, Spirit, and Barbecue commandeer a colorful van with the words "Bongo the Balloon Bear" painted across it. Inside is <Link to="/character-bios/Candy">Bongo</Link> herself, dressed in a bear costume. <Link to="/character-bios/Candy">Bongo</Link> drives the Joes in pursuit of the Brocas, and a chase ensues. After a firefight, in which the Brocas open fire on the van, <Link to="/character-bios/Candy">Bongo</Link> asks to be let out. She tells the Joes to bring her van back safely and waits behind for their return.
          </p>
          <p>
            The Joes continue their chase, but the Brocas escape. Rip Cord returns the van to <Link to="/character-bios/Candy">Bongo</Link> and asks if there is anything the government can do to compensate her. "How about dinner?" <Link to="/character-bios/Candy">Bongo</Link> asks, removing her bear mask to reveal the face of a beautiful young woman. "You're a girl," a surprised Rip Cord replies. Rip Cord takes <Link to="/character-bios/Candy">Candy</Link> out for dinner, and the two begin dating (Issue #33). Due to the nature of his work, Rip Cord keeps his real name and what he does a secret from <Link to="/character-bios/Candy">Candy</Link>, who knows him simply as Rip Cord.
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), a single version of Rip Cord was produced: the <a href="https://www.yojoe.com/action/84/ripcord.shtml" target="_blank" rel="noopener noreferrer">1984 figure</a>. The file card spells his name as two words, Rip Cord. In the 2000s, five further versions were produced, spelling his name as a single word, Ripcord (some versions naming him Wallace "Ripcord" Weems).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default RipCord;
