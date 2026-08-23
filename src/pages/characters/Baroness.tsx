import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import baroness1 from './img/baroness/baroness_1.png';
import baroness2 from './img/baroness/baroness_2.png';

const Baroness: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Baroness (Anastasia DeCobray*)</h1>

        <p className="profile-intro">
          The Baroness (Anastasia) is Cobra's cunning and deadly intelligence officer. Her rise to international terrorist is a tragic tale, spawned by the death of her beloved brother — a kindhearted humanitarian — and a false belief about who killed him in Saigon during the Tet Offensive. Had she known who killed her brother's at the time, she might never have become a terrorist at all — perhaps she would have been a humanitarian like her brother instead. The Baroness loves Destro, and he loves her; their undying devotion to one another remains constant throughout the series.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Tet Offensive, Saigon: January 30, 1968</h2>
          <img src={baroness1} alt="The Baroness during the Tet Offensive in Saigon" className="profile-block-img" />
          <p>
            Anastasia (the future Baroness) is fifteen years old when she accompanies her brother, Baron Eugen DeCobray, to Saigon to check on a warehouse of medical supplies he had raised funds for. As the Baroness describes him years later, Eugen was the kindest human being she had ever known — all he ever wanted was to help people.
          </p>
          <p>
            When Eugen and Anastasia arrive in Saigon, the Tet Offensive begins, plunging the city into chaos. The two find the warehouse empty of medical supplies. Just then, two Vietnamese men enter, one carrying an AK-47 over his back, both visibly surprised to see Eugen. Eugen asks his sister to wait in the office while he speaks with the men. From inside, Anastasia hears gunfire coming from the room where her brother and the men had been talking. When she emerges, she finds her brother and the two Vietnamese men lying dead.  An American soldier (<Link to="/character-bios/SnakeEyes">Snake Eyes</Link>) stands over their bodies. Anastasia believes the American killed her brother.
          </p>
          <p>
            What Anastasia doesn't know is that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> had tracked the two men to the warehouse after they opened fire on him and his companions earlier that day, killing one soldier, Cory Barnett, and wounding two others, <Link to="/character-bios/Stalker">Stalker</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link>. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> was waiting on the outside window ledge when the two men met with Eugen. Eugen demanded to know where the medical supplies had gone; one of the men told him they'd been sold on the black market to buy weapons, then raised his AK-47 and opened fire on Eugen at point-blank range. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> burst through the window with his Colt .45 and killed both men (Issue #95).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Bern Institute of Reconstructive Surgery</h2>
          <img src={baroness2} alt="The Baroness at the Bern Institute of Reconstructive Surgery" className="profile-block-img" />
          <p>
            <Link to="/character-bios/CobraCommander">Cobra Commander</Link> hires the mercenary Major Bludd to kill Destro. During a night battle in Washington, D.C., the Baroness drives a H.I.S.S. tank with Major Bludd manning the turret gun, while Destro operates a second H.I.S.S. tank nearby. Spotting Major Bludd's gun trained on Destro through her monitor, the Baroness crashes her own tank into a truck to save her lover's life, toppling it. Trapped inside as fuel spills around her, she watches Major Bludd choose to flee rather than save her. The H.I.S.S. tank explodes (Issue #16).
          </p>
          <p>
            The Baroness survives, though she falls into a coma with severe burns. She's transported first to a hospital, then to the G.I. Joe modular pre-fab fortress housed in the elevator of the Pit's Heavy Equipment bay. Major Bludd is later captured and brought to the same fortress. During an attack on the Pit, while the pre-fab fortress is at ground level, Major Bludd escapes — taking the unconscious Baroness with him as a means of currying favor with Destro (Issue #19).
          </p>
          <p>
            Major Bludd brings the Baroness to the Bern Institute of Reconstructive Surgery in the Swiss Alps, where they meet <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link>, who will perform the surgery. Major Bludd gives the name "Baroness DeCobray," and <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link> replies that he isn't familiar with the title — implying it's a name the Major has simply invented. <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link> tells him discretion will cost extra, a telling glimpse of his loose morals. The surgery is a success, restoring the Baroness' appearance. After her recovery, the Baroness wears her trademark black leather uniform afterward (Issue #23).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            The Baroness is one of Mr. Hama's original creations, making her debut in the very first issue of the series. With every other Cobra character masked, Mr. Hama needed a Cobra figure capable of showing facial expressions — and so the Baroness was born. When she first appears, she wears a blue Cobra uniform; her debut in the now-iconic black leather uniform comes only after her reconstructive surgery in Issue #23, timed to coincide with the release of her action figure. During the Marvel run (1982–1994), only a single version of the Baroness figure was ever released: the <a href="https://www.yojoe.com/action/84/baroness.shtml" target="_blank" rel="noopener noreferrer">1984 original</a>.
          </p>
          <p className="profile-notes-footnote">
            *DeCobray is likely a pseudonym. In Issue #23, Major Bludd gives Dr. Hundtkinder the name "Baroness DeCobray" for the Baroness. The doctor says he's unfamiliar with the title, suggesting Major Bludd invented it on the spot. Dr. Hundtkinder's remark that discretion costs extra further implies he suspects DeCobray isn't her real name.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Baroness;
