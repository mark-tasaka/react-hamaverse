import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import wildBill1 from './img/wildBill/wildBill_1.png';
import wildBill2 from './img/wildBill/wildBill_2.png';
import wildBill3 from './img/wildBill/wildBill_3.png';
import wildBill4 from './img/wildBill/wildBill_4.png';
import wildBill5 from './img/wildBill/wildBill_5.png';

const WildBill: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Wild Bill (William Hardy)</h1>

        
        <blockquote className="profile-quote">
          <p>"Amiable and slow talking. Fancies himself a country-western singer. Totally honest in personal dealings, but not beyond spinning a tall tale for the amusement of comrades."*</p>
        </blockquote>


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
            Wild Bill enters the pumping station with the three workers, when <Link to="/character-bios/Zap">Zap</Link> suddenly bursts in, warning him the men are actually Cobra agents. The workers draw their pistols, but Wild Bill is faster, drawing his trusted Colt .45 single-action revolver and shooting from the hip to take down all three Cobra agents (Issue #11).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Narrating Kwinn's Farewell</h2>
          <img src={wildBill2} alt="Wild Bill's traditional send-off for Kwinn" className="profile-block-img" />
          <p>
            Wild Bill transports <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, along with <Link to="/character-bios/Kwinn">Kwinn</Link>'s body and his kayak, aboard the Dragonfly to the lighthouse at Montauk Point, for a proper send-off for the fallen warrior. The powerful currents there will carry the kayak north toward the Arctic. As <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> places <Link to="/character-bios/Kwinn">Kwinn</Link>'s body aboard the kayak and prepares the ceremony, Wild Bill narrates the proceedings, giving voice to what the silent <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> cannot say himself. Wild Bill helps push the kayak out into the water and says, "Goodbye, Kwinn. There'll never be another like you" (Issue #22).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">A Knack for Surviving Crashes</h2>
          <img src={wildBill4} alt="Wild Bill's uncanny knack for surviving crashes" className="profile-block-img" />
          <p>
            Wild Bill has an uncanny knack for walking away from helicopter crashes — the aircraft totaled, while he emerges with little more than a few bruises and not a single broken bone. This ability is put on full display during the Cobra Civil War, when the Tomahawk he is piloting is hit and crashes on the east end of the Cobra Island runway. Doc and Lifeline pull Wild Bill from the wreckage. "Doesn't look like there's anything broken, Doc!" Lifeline remarks. "Wild Bill's had a lot of practice at crashing and burning, Lifeline!" Doc replies (Issue #75).
          </p>
          <p>
            Wild Bill demonstrates this same uncanny ability again in Sierra Gordo, when his helicopter goes down. <Link to="/character-bios/Flint">Flint</Link> pulls him from the wreckage, noting that the helicopter is a total loss, but that Wild Bill himself has come through relatively unscathed. "Right, pard. It pays to buckle up!" Wild Bill replies (Issue #105).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Walk and Shoot: That Answers One of Your Questions</h2>
          <img src={wildBill5} alt="Wild Bill and his six-shooter aboard the Aiden Explorer" className="profile-block-img" />
          <p>
            Off the East African coast of Kalingaland, the oil survey ship Aiden Explorer and its crew are captured by pirates supported by the Red Shadows. Before the capture, the ship had taken a group of environmental protesters aboard. Since the Aiden Explorer is an American-owned ship with an American crew, the Joes are sent to rescue the prisoners. The W.H.A.L.E., the Tomahawk, and a smaller fast boat carrying <Link to="/character-bios/Stalker">Stalker</Link>, <Link to="/character-bios/Scarlett">Scarlett</Link>, Gung-Ho, and Torpedo are sent on the mission. Wild Bill and Lift Ticket fly the Tomahawk, with Roadblock and Lifeline aboard as crew.
          </p>
          <p>
            A firefight erupts on the Aiden Explorer as the Joes engage the Red Shadows and the pirates. The Tomahawk moves in to land on the ship's landing pad and retrieve the captives, but the Red Shadows fire an SA-7 Grail missile at it. Wild Bill and Lift Ticket go into evasive maneuvers, and the missile's proximity fuze detonates near the Tomahawk, spraying shrapnel everywhere. Wild Bill is wounded (Issue #188).
          </p>
          <p>
            Roadblock opens up with the Tomahawk's .50-cal, securing the landing pad, and the helicopter lands and the crew disembarks. Lifeline treats Wild Bill's wounds, and Lift Ticket asks whether he can walk and shoot. Just then, a Red Shadow armed with a submachine gun sneaks forward and takes aim. Wild Bill draws his six-shooter and shoots him. He blows the smoke from the muzzle and says, "That answers one of your questions. We'll have to see about the other one" (Issue #189).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <img src={wildBill3} alt="Notes on Wild Bill" className="profile-block-img" />
          <p>
            During the Marvel run (1982–1994), two unique sculpts and three versions of Wild Bill were produced: the <a href="https://www.yojoe.com/action/83/wildbill.shtml" target="_blank" rel="noopener noreferrer">1983 version</a>, the <a href="https://www.yojoe.com/action/92/wildbill2.shtml" target="_blank" rel="noopener noreferrer">1992 version</a>, and a <a href="https://www.yojoe.com/action/93/wildbill3.shtml" target="_blank" rel="noopener noreferrer">1993 repaint</a>. Mr. Hama based many of the Joes' personalities and backstories on real people he knew. Wild Bill is based on his friend from the Vietnam War, Bart Wulf, who served as a helicopter pilot in the 1st Cavalry. The look of one of Wulf's helicopter gunners, Sgt. Bob Light, went on to become the basis for the appearance of the unmasked <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>.
          </p>
          
          <p className="profile-notes-footnote">
            *The quote is from Wild Bill's 1983 file card.
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
