import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import zap1 from './img/zap/zap_1.png';
import zap2 from './img/zap/zap_2.png';

const Zap: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Zap (Rafael Melendez)</h1>

        <p className="profile-intro">
          Rafael J. Melendez (Zap) is one of the original members of G.I. Joe and the team's anti-armor specialist. The descendant of Puerto Rican immigrants, Melendez comes from an upper-middle-class family in Westchester County, New York — his father is a lawyer and his mother is a pediatrician. Melendez joins the Army because he wants to make a difference.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Paying It Back</h2>
          <img src={zap1} alt="Zap's family dinner" className="profile-block-img" />
          <p>
            As an MIT student, Zap returns home for a family dinner. His sister, Graci, tells him she has just finished her residency and will be volunteering for Doctors Without Borders. His brother, Mike, a Yale Law graduate, is doing pro bono work in Spanish Harlem. At dinner, Mike turns to Zap and tells him, "We have an obligation to pay it back." Their mother reminds him how his grandfather came from Puerto Rico with nothing on his back. Zap decides that his own way of paying it back is to join the Army (G.I. Joe Declassified #3).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Springfield</h2>
          <img src={zap2} alt="Zap's escape from Springfield" className="profile-block-img" />
          <p>
            Zap, <Link to="/character-bios/Scarlett">Scarlett</Link>, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> are captured, gassed unconscious, and taken to the Cobra-occupied town of Springfield. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is subjected to <Link to="/character-bios/Venom">Dr. Venom</Link>'s Brainwave Scanner, while Zap and <Link to="/character-bios/Scarlett">Scarlett</Link> are locked in a cell shared with <Link to="/character-bios/Billy">Billy</Link>, a captured anti-Cobra youth. When Zap and <Link to="/character-bios/Scarlett">Scarlett</Link> wake up, they are still hallucinating from the drugs used on them.
          </p>
          <p>
            Later that day, Cobra guards slip cups of water and bread on a tray into the cell. Once the guards are gone, <Link to="/character-bios/Billy">Billy</Link> tells <Link to="/character-bios/Scarlett">Scarlett</Link> and Zap that the water is drugged, and demonstrates how to neutralize the drugs by placing the water near the light bulb. With the drugs neutralized, Zap and <Link to="/character-bios/Scarlett">Scarlett</Link> drink the water and pretend to have passed out. <Link to="/character-bios/Billy">Billy</Link> then starts screaming about the anti-Cobra underground meeting happening that night. The guards hear this over the monitor and decide to take <Link to="/character-bios/Billy">Billy</Link> to <Link to="/character-bios/Venom">Dr. Venom</Link> to learn more. Two guards enter the cell; Zap and <Link to="/character-bios/Scarlett">Scarlett</Link> knock them out and take their uniforms.
          </p>
          <p>
            Dressed in Cobra uniforms, Zap and <Link to="/character-bios/Scarlett">Scarlett</Link> escort <Link to="/character-bios/Billy">Billy</Link> past the guard in the control room. He tells them to bring <Link to="/character-bios/Billy">Billy</Link> to <Link to="/character-bios/Venom">Dr. Venom</Link> for interrogation, reminding them to change into civilian clothes before reaching the surface. <Link to="/character-bios/Scarlett">Scarlett</Link> and Zap acquire civilian clothing and steal a car. Inside, <Link to="/character-bios/Billy">Billy</Link> tells them how the town became indoctrinated into Cobra — it started as a pyramid scheme selling household products door-to-door and morphed into indoctrination meetings.
          </p>
          <p>
            <Link to="/character-bios/Billy">Billy</Link> directs Zap and <Link to="/character-bios/Scarlett">Scarlett</Link> to Video World, where <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is being held in <Link to="/character-bios/Venom">Dr. Venom</Link>'s basement lab. They enter the arcade, which is filled with youths. <Link to="/character-bios/Billy">Billy</Link> points out that several of them are junior Cobra officers. The youths recognize <Link to="/character-bios/Billy">Billy</Link>, and they attack the trio (one of the video machines turns out to be a functional laser). <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> breaks free from <Link to="/character-bios/Venom">Dr. Venom</Link>'s lab and bursts through the door into the arcade. The three Joes and <Link to="/character-bios/Billy">Billy</Link> flee, escaping in the stolen car outside.
          </p>
          <p>
            <Link to="/character-bios/Billy">Billy</Link> gives the Joes directions to the Springfield Municipal Airport — their way home. They arrive at the airport and find the aircraft that had transported them to Springfield. They sneak up on the ground crew and tie them up. As the Joes are about to board, Zap tells <Link to="/character-bios/Billy">Billy</Link> to come with them. <Link to="/character-bios/Billy">Billy</Link> says he has to stay — his family is here, hiding underground and working against Cobra. The Joes depart; <Link to="/character-bios/Billy">Billy</Link> remains in Springfield (Issue #10).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), two versions of Zap were produced: the <a href="https://www.yojoe.com/action/82/zap.shtml" target="_blank" rel="noopener noreferrer">1982 version</a> (<a href="https://www.yojoe.com/action/83/zap1p5.shtml" target="_blank" rel="noopener noreferrer">1983 swivel-arm variant</a>) and the <a href="https://www.yojoe.com/action/91/zap2.shtml" target="_blank" rel="noopener noreferrer">1991 version</a>. Zap's original 1982 file card lists his grade as E-4, while his 1991 file card lists him as E-6. In Issue #33, General Austin promotes Zap and seven other original team members by one pay grade, assigning them administrative duties in light of the growing roster. It appears Zap received a further promotion, from E-5 to E-6, sometime between Issue #33 and his 1991 file card.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Zap;
