import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import dawn1 from './img/dawn/dawn_1.png';
import dawn2 from './img/dawn/dawn_2.png';

const Dawn: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Dawn Moreno (Snake Eyes III)</h1>

        <p className="profile-intro">
          Dawn Moreno is an athletically gifted teenager who undergoes conditioning from the Brainwave Scanner, where she is accidentally implanted with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' memories. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' consciousness lives on inside Dawn, and she struggles with his ghost within her. Dawn escapes Cobra and is found by <Link to="/character-bios/StormShadow">Storm Shadow</Link>, who takes her to <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link>. There, she undergoes the training to become an Arashikage ninja. At 18, she joins the Army, completes A.I.T. and Ranger School, and becomes a member of G.I. Joe.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Snake Eyes’ Memories</h2>
          <img src={dawn1} alt="Dawn Moreno in Springfield" className="profile-block-img" />
          <p>
            In the Cobra-controlled town of Springfield, <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and Dr. Mindbender watch fifteen-year-old Dawn Moreno single-handedly take on a team of boys in lacrosse. Impressed by her athletic prowess, <Link to="/character-bios/CobraCommander">Cobra Commander</Link> takes Dawn on as his apprentice.
          </p>
          <p>
            Later, in <Link to="/character-bios/CobraCommander">Cobra Commander</Link>'s inner chamber, Destro, the <Link to="/character-bios/Baroness">Baroness</Link>, and the Dreadnoks burst in. Destro demands that they put the past behind them and work together in this new Cobra nation. Hiding in the shadows, Dawn watches (Issue #226). She sneaks up behind <Link to="/character-bios/Zarana">Zarana</Link>, steals her knife, and jumps onto Destro's shoulders, placing the blade by his exposed eye. The <Link to="/character-bios/Baroness">Baroness</Link> displays her marksmanship by shooting a fly on the hilt of Dawn's knife, causing Dawn to drop it.
          </p>
          <p>
            <Link to="/character-bios/CobraCommander">Cobra Commander</Link> and Destro agree to a merger. The <Link to="/character-bios/Baroness">Baroness</Link> is impressed with Dawn and takes her on as a student (Issue #227). The next day, both the <Link to="/character-bios/Baroness">Baroness</Link> and <Link to="/character-bios/Zarana">Zarana</Link> train Dawn (Issue #228).
          </p>
          <p>
            To ensure Dawn's obedience, <Link to="/character-bios/CobraCommander">Cobra Commander</Link> has Dr. Mindbender hook her up to the Brainwave Scanner. Dawn is taken to Dr. Mindbender's lab and placed in the scanner. The <Link to="/character-bios/Baroness">Baroness</Link> and <Link to="/character-bios/Zarana">Zarana</Link> are there and openly object to the procedure, since Dawn has already proved her loyalty. Just as Dr. Mindbender begins, a Tele-Viper enters, saying <Link to="/character-bios/CobraCommander">Cobra Commander</Link> wants to see him. The Tele-Viper is actually <Link to="/character-bios/Zartan">Zartan</Link> in disguise, who sends Dr. Mindbender on a wild goose chase so that they can stop the process. Neither the <Link to="/character-bios/Baroness">Baroness</Link>, <Link to="/character-bios/Zarana">Zarana</Link>, nor <Link to="/character-bios/Zartan">Zartan</Link> knows how to operate the Brainwave Scanner, and they accidentally download <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' memories into Dawn.
          </p>
          <p>
            Dr. Mindbender and <Link to="/character-bios/CobraCommander">Cobra Commander</Link> return to the lab, and <Link to="/character-bios/CobraCommander">Cobra Commander</Link> notices that Dawn has escaped. Dr. Mindbender looks at the monitor and discovers that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' memories were implanted in Dawn (Issue #229).
          </p>
        </section>

                <section className="profile-block">
          <h2 className="profile-block-title">Returning to the Arashikage</h2>
          <img src={dawn2} alt="Dawn Moreno presents Morning Light to Obake Obaasan" className="profile-block-img" />
          <p>
            Dawn travels to New York and steals the legendary Arashikage sword, Morning Light, from the museum (Issue #231). She wanders New York with the stolen sword until <Link to="/character-bios/StormShadow">Storm Shadow</Link> finds her on a rooftop. He tells her that the sword is rightfully his and that it has been kept at the museum for safekeeping. Dawn recognizes <Link to="/character-bios/StormShadow">Storm Shadow</Link> as Tommy and tells him that he saved her life in Vietnam. She also says that she feels she is missing something on her arm. <Link to="/character-bios/StormShadow">Storm Shadow</Link> rolls up his sleeve, shows her the Arashikage tattoo, and tells her, "You are missing this" (Issue #232).
          </p>
          <p>
            <Link to="/character-bios/StormShadow">Storm Shadow</Link> takes Dawn to <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link>'s toy store in New York's East Village and introduces her to his aunt. Dawn remembers <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link> and tells her that she remembers how she received the scar on her Arashikage tattoo during the Obon ceremony. Dawn is then taken to Ellen Bogen's store, where Ellen takes her measurements to make her ninja togs. Dawn gives a formal presentation of Morning Light to <Link to="/character-bios/ObakeObaasan">Obake Obaasan</Link> and Ellen. She begins training under the three of them, and in addition to learning the Ways of the Arashikage, she will earn her G.E.D. (Issue #233).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Dawn;