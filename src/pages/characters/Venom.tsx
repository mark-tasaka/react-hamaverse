import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import venom1 from './img/venom/venom_1.png';

const Venom: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Dr. Venom (Claude Matthias Vinim)</h1>

        <p className="profile-intro">
          Expelled from medical school after being implicated in his father's murder, and for his disturbing senior thesis on brainwaves, Claude Vinim travels to America, joins Cobra, and adopts the name Dr. Venom. He goes on to create the infamous Brainwave Scanner in the basement of Springfield's video arcade. Dr. Venom meets his end after shooting Kwinn in the back — but not before uploading his consciousness into his own Brainwave Scanner, ensuring that even in death, his consciousness lives on.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Early Years</h2>
          <img src={venom1} alt="Dr. Venom's early years" className="profile-block-img" />
          <p>
            Claude Matthias Vinim grows up in Bern, Switzerland, under a strict and controlling father. As a child, his father forces him to kill a stray puppy he adopted, sealing it inside a burlap sack and throwing it off a bridge. Claude dreams of becoming a painter, but his father burns all of his drawings and paintings, putting an end to that ambition. He later hopes to become a musician instead, only for his father to sell his guitar.
          </p>
          <p>
            In his final year of high school, Claude wants to apply to an engineering school in America, but his father refuses, forcing him instead to enroll in the medical school attached to the Bern Institute of Reconstructive Surgery, where his father's colleague, <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link>, works. On the very same bridge where he was once forced to drown his puppy, Claude pushes his father to his death.
          </p>
          <p>
            Four years later, Dean Jaeger calls Claude into his office, informing him that he has received a disturbing letter from <Link to="/character-bios/Hundtkinder">Dr. Hundtkinder</Link> — a witness has come forward, implicating Claude in his father's death. Combined with the unsettling nature of Claude's senior thesis on brainwaves, the dean explains that the medical school has no choice but to sever ties with him. Claude walks out before the dean can even finish speaking.
          </p>
          <p>
            Claude burns the dean's home to the ground, then travels to America, where he meets Cobra Commander. He demonstrates his brainwave technology by implanting a mouse with the brainwave patterns of a rabid wolf and setting it loose on a cat — the mouse bites straight through the cat's neck, killing it instantly. Impressed, Cobra Commander grants Claude the basement of the Springfield video arcade as his laboratory, along with a research budget and a generous stipend. When Cobra Commander asks for his name, Claude simply replies, "Venom... Dr. Venom" (Issue #258).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Venom;
