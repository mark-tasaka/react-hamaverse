import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import hundtkinder1 from './img/hundtkinder/hundtkinder_1.png';
import hundtkinder2 from './img/hundtkinder/hundtkinder_2.png';
import hundtkinder3 from './img/hundtkinder/hundtkinder_3.png';

const Hundtkinder: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Dr. Hundtkinder</h1>

        <p className="profile-intro">
          Dr. Hundtkinder is a renowned plastic surgeon at the Bern Institute of Reconstructive Surgery in Switzerland. He performs the surgery that restores the <Link to="/character-bios/Baroness">Baroness</Link>' face after she is severely burned, and years later performs reconstructive surgery on <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. The good doctor violates his Hippocratic Oath of patient confidentiality, revealing <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' surgery to the <Link to="/character-bios/Baroness">Baroness</Link>.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Restoring the Baroness</h2>
          <img src={hundtkinder1} alt="Dr. Hundtkinder restoring the Baroness' face" className="profile-block-img" />
          <p>
            Major Bludd brings the severely burned <Link to="/character-bios/Baroness">Baroness</Link> to the Bern Institute of Reconstructive Surgery in the Swiss Alps, where he arranges for Dr. Hundtkinder to perform her surgery. When Major Bludd stresses that discretion is necessary, providing the alias "<Link to="/character-bios/Baroness">Baroness</Link> DeCobray," Dr. Hundtkinder replies that discretion costs extra — revealing his loose ethics (Issue #22).
          </p>
          <p>
            The surgery is a success, restoring the <Link to="/character-bios/Baroness">Baroness</Link> to what she looked like before the accident. It also marks the debut of the <Link to="/character-bios/Baroness">Baroness'</Link> signature black leather uniform, which she wears for the remainder of the series, replacing the blue Cobra dress uniform she wore previously (Issue #23).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Selling Out Snake Eyes</h2>
          <img src={hundtkinder2} alt="Dr. Hundtkinder's betrayal of Snake Eyes" className="profile-block-img" />
          <p>
            Years later, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> travel to the Bern Institute of Reconstructive Surgery. Dr. Hundtkinder examines <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' face and tells the couple that restoring it will require six procedures.
          </p>
          <p>
            After they leave, Dr. Hundtkinder calls the <Link to="/character-bios/Baroness">Baroness</Link> at the Cobra Consulate in New York, informing her that his new patient's surgery is being paid for through the Chaplain's Assistant School at Fort Wadsworth. He faxes her a photo of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' face, taken nearly twenty years earlier. The <Link to="/character-bios/Baroness">Baroness</Link> recognizes it as the face of the man who murdered her brother in Saigon during the Tet Offensive — though <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> never actually killed him, and the <Link to="/character-bios/Baroness">Baroness</Link> has been living under a false belief for two decades (<Link to="/comic-issues/Issue93">Issue #93</Link>).
          </p>
          <p>
            Dr. Hundtkinder performs the sixth and final procedure on <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> shortly before the <Link to="/character-bios/Baroness">Baroness</Link> abducts him while he's still unconscious (<Link to="/comic-issues/Issue94">Issue #94</Link>). The surgery successfully restores most of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' face, aside from two lasting scars — one running down his left eye, the other along the right side of his mouth and chin.
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">A House Call from the Joes</h2>
          <img src={hundtkinder3} alt="The Joes confronting Dr. Hundtkinder" className="profile-block-img" />
          <p>
            Dr. Hundtkinder enters his office to find Chuckles seated at his desk. Chuckles informs him that they have phone records showing his call to the <Link to="/character-bios/Baroness">Baroness</Link> in New York on the day <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> arrived at the clinic. As Dr. Hundtkinder reaches for the phone to call the local authorities, Roadblock — standing unseen in the corner of the room — clamps a firm hand over the receiver and tells him he doesn't care what the locals think (<Link to="/comic-issues/Issue95">Issue #95</Link>). It remains unclear what becomes of Dr. Hundtkinder afterward.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Hundtkinder;
