import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import wildBill1 from './img/wildBill/wildBill_1.png';
import wildBill2 from './img/wildBill/wildBill_2.png';
import wildBill3 from './img/wildBill/wildBill_3.png';

const WildBill: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Wild Bill (William Hardy)</h1>

        <p className="profile-intro">
          Chief Warrant Officer 4 William S. Hardy (Wild Bill) is a helicopter and fixed-wing pilot, operating the Tomahawk, C-130, and Dragonfly. CWO-4 Hardy is the quintessential Texan cowboy — friendly, slow-talking, and honest in his personal dealings, with dreams of being a country-western singer on the side. He is both a skilled pilot and a skilled marksman, favoring a single-action .45 Colt revolver over more modern sidearms.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Shooting from the Hip in Alaska</h2>
          <img src={wildBill1} alt="Wild Bill shooting from the hip in Alaska" className="profile-block-img" />
          <p>
            Wild Bill's first mission with G.I. Joe is as the pilot of a Huey, transporting Doc, the team's new doctor, to tend to the wounded. After dropping Doc off, Wild Bill picks up <Link to="/character-bios/Zap">Zap</Link> and flies him to Pumping Station 2, where a trio of workers is waiting for them. Wild Bill and <Link to="/character-bios/Zap">Zap</Link> disembark to meet the group.
          </p>
          <p>
            Wild Bill enters the pumping station with the three workers, when <Link to="/character-bios/Zap">Zap</Link> suddenly bursts in, warning him the men are actually Cobra agents. The workers draw their pistols, but Wild Bill is faster, drawing his trusted Colt .45 single-action revolver and shooting from the hip to take down all three Cobra agents (Issue #10).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">A Traditional Send-Off</h2>
          <img src={wildBill2} alt="Wild Bill's traditional send-off for Kwinn" className="profile-block-img" />
          <p>
            Wild Bill transports <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, along with <Link to="/character-bios/Kwinn">Kwinn</Link>'s body and his kayak, aboard the Dragonfly to the lighthouse at Montauk Point, for a proper send-off for the fallen warrior. The powerful currents there will carry the kayak north toward the Arctic. As <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> places <Link to="/character-bios/Kwinn">Kwinn</Link>'s body aboard the kayak and prepares the ceremony, Wild Bill narrates the proceedings, giving voice to what the silent <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> cannot say himself. Wild Bill helps push the kayak out into the water and says, "Goodbye, Kwinn. There'll never be another like you" (Issue #22).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <img src={wildBill3} alt="Notes on Wild Bill" className="profile-block-img" />
          <p>
            During the Marvel run (1982–1994), two unique sculpts and three versions of Wild Bill were produced: the 1983 figure, the 1992 figure, and a 1993 repaint. Mr. Hama based many of the Joes' personalities and backstories on real people he knew. Wild Bill is based on his friend from the Vietnam War, Bart Wulf, who served as a helicopter pilot in the 1st Cavalry. The look of one of Wulf's helicopter gunners, Sgt. Bob Light, went on to become the basis for the appearance of the unmasked <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default WildBill;
