import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import roadblock1 from './img/roadblock/roadblock_1.png';
import roadblock2 from './img/roadblock/roadblock_2.png';

const Roadblock: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Roadblock</h1>

        
        <blockquote className="profile-quote">
          <p>"A .50 cal. Browning weighs 84 pounds. Add fifty pounds for the ammo-that's about 134 pounds of steel generating 2930 f.p.s. in muzzle velocity at a cyclic rate of 55 r.p.m. Anybody who can handle that doesn't need a machine gun to keep me away!"*</p>
        </blockquote>

        <p className="profile-intro">
          Marvin F. Hinton (Roadblock) is the team's heavy machine gunner. A man of great size and exceptional strength, he is capable of carrying a .50 Browning heavy machine gun. Although he serves as an infantry heavy machine gunner, he originally sought to become a gourmet chef. He joined the Army to get into the culinary arts, but found the menus and preparation techniques appalling and transferred to the infantry.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Convoy to Outpost Juliet</h2>
          <img src={roadblock1} alt="Roadblock manning the .50-cal during the convoy to Outpost Juliet" className="profile-block-img" />
          <p>
            A civil war breaks out in the Emirate of Trucial Abysmia, where the Emir battles the secessionist forces of Colonel Sharif. U.S. forces are brought in on the side of the Emir. Roadblock is part of a resupply convoy traveling to Outpost Juliet, which, in addition to supplies, is transporting a fuel tanker.
          </p>
          <p>
            Roadblock rides in a Humvee with <Link to="/character-bios/Duke">Duke</Link> and their driver, Specialist Maureen "Martoonies" Hennessey, operating the turret-mounted .50-cal. Hennessey is a short-timer, due to rotate back to the States in less than a month and return to civilian life. She plans to work in her brother's Irish bar in Brooklyn.
          </p>
          <p>
            The V-150 takes the lead, with the Humvee right behind it. An IED takes out the V-150, and the convoy comes to a halt as Roadblock lays down suppressing fire. Insurgents open fire from the ridge, and the Humvee is hit by armor-piercing rounds. Hennessey is shot through the cheek, and another round penetrates the driver's door, nicking an artery in her thigh. With so much bleeding from her cheek wound, neither Hennessey nor <Link to="/character-bios/Duke">Duke</Link> notices the thigh wound. <Link to="/character-bios/Duke">Duke</Link> is hit in the shoulder.
          </p>
          <p>
            Hennessey and <Link to="/character-bios/Duke">Duke</Link> patch their wounds and Charlie Mike, continuing the mission. Hennessey drives toward the insurgents while Roadblock takes several of them out with the .50-cal. The rest of the convoy's soldiers dismount and lay down suppressing fire on foot, allowing the medics to reach the crew of the wounded V-150.
          </p>
          <p>
            Air support arrives in the form of the Emir's legacy Su-7 Frogfoots, giving the convoy a chance to pause and tend to the wounded. <Link to="/character-bios/Duke">Duke</Link> discovers that the fuel tanker's cab has been riddled with rounds and its occupants killed, so he takes over as the tanker's driver. The convoy presses on toward Outpost Juliet.
          </p>
          <p>
            A short time later, insurgents in technicals attack the convoy, intending to capture the fuel tanker. <Link to="/character-bios/Duke">Duke</Link> realizes this and has Hennessey drive up alongside the tanker. He pulls the pins on his grenades, drops them in the passenger seat, and jumps toward the Humvee, where Roadblock catches him. The Humvee speeds off while the technicals swarm around the tanker. A massive explosion follows, sending the insurgents to a fiery death.
          </p>
          <p>
            The Humvee keeps driving. <Link to="/character-bios/Duke">Duke</Link> tells Hennessey she can slow down, checks on her, and finds her dead at the wheel. She has bled out from the wound to her thigh artery.
          </p>
          <p>
            When Roadblock and <Link to="/character-bios/Duke">Duke</Link> return to the States, they visit Hennessey's brother's pub in Brooklyn to return her lucky charm to him. Her brother is touched that they came all the way to Brooklyn to share his sister's final moments. He asks <Link to="/character-bios/Duke">Duke</Link> whether they are heading back to the Middle East. <Link to="/character-bios/Duke">Duke</Link> replies that the authorities want him to take a new assignment in Staten Island, and he is seriously considering it, as long as he can take Roadblock with him (Issue #253).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Arrival at Arlington</h2>
          <img src={roadblock2} alt="Roadblock and Duke arriving at General Flagg's funeral" className="profile-block-img" />
          <p>
            Roadblock and <Link to="/character-bios/Duke">Duke</Link>'s introduction to the G.I. Joe team comes at <Link to="/character-bios/Flagg">General Flagg</Link>'s funeral. The two have just returned from a mission and have not had the chance to change out of their dress greens. They still have their weapons with them, which proves fortunate, as a new Cobra Rattler aircraft is targeting the Joes at Arlington National Cemetery.
          </p>
          <p>
            Roadblock and <Link to="/character-bios/Duke">Duke</Link> drive up in their Jeep, dismount, and open fire (Issue #263). Roadblock uses his .50 Cal, "Ma Douce," which tears through the Rattler's armor and sends it crashing in a fiery explosion. Roadblock and <Link to="/character-bios/Duke">Duke</Link> then introduce themselves, and <Link to="/character-bios/Duke">Duke</Link> tells the Joes that he is their new Top Sergeant, that things are going to be different from now on, and that he intends to turn the sorry lot of them into soldiers (Issues #22 and #263).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), seven versions of Roadblock were produced: the <a href="https://www.yojoe.com/action/84/roadblock.shtml" target="_blank" rel="noopener noreferrer">1984 version</a>, the <a href="https://www.yojoe.com/action/86/roadblock2.shtml" target="_blank" rel="noopener noreferrer">1986 version</a>, the <a href="https://www.yojoe.com/action/88/roadblock3.shtml" target="_blank" rel="noopener noreferrer">1988 Tiger Force repaint</a>, the <a href="https://www.yojoe.com/action/92/roadblock4.shtml" target="_blank" rel="noopener noreferrer">1992 version</a>, the <a href="https://www.yojoe.com/action/93/roadblock5.shtml" target="_blank" rel="noopener noreferrer">1993 Battle Corps version</a>, the <a href="https://www.yojoe.com/action/93/roadblock6.shtml" target="_blank" rel="noopener noreferrer">1993 Star Brigade version</a>, and the <a href="https://www.yojoe.com/action/94/roadblock7.shtml" target="_blank" rel="noopener noreferrer">1994 Star Brigade version</a>. Roadblock's 1984 and 1986 file cards list his pay grade as E-4, his 1988 file card lists E-5, and his subsequent file cards during the Marvel run list E-6.
          </p>
          
          <p className="profile-notes-footnote">
            *The quote is from Roadblock's 1984 file card.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Roadblock;