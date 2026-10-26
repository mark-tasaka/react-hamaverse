import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import fred231 from './img/fred23/fred23_1.png';
import fred232 from './img/fred23/fred23_2.png';

const Fred23: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Fred XXIII (Crimson Guard)</h1>

        <p className="profile-intro">
          The Fred series of Crimson Guard is the most common Siegie series. Every member of the series undergoes plastic surgery to look like every other Fred in that series. Fred 23 was the plant manager of the Cobra-occupied town of Melville. Years later, he becomes the Morenos' neighbor in Springfield.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Plant Manager of Melville</h2>
          <img src={fred231} alt="Fred 23 as plant manager in Melville" className="profile-block-img" />
          <p>
            <Link to="/character-bios/CobraCommander">Cobra Commander</Link> arrives in the economically devastated town of Melville, promising to revitalize industry and bring new jobs, safer streets, prosperity, subsidized housing, and free daycare. All the people have to do is enter the trailers for program registration. The trailers are a trick. Inside, a modified Brainwave Scanner "zombifies" the population, turning them into mindless drones on command (Issue #100).
          </p>
          <p>
            Fred 23 is the plant manager of the newly reopened manufacturing facility in Melville, reporting directly to <Link to="/character-bios/CobraCommander">Cobra Commander</Link> (Issue #101).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">A Visit to the Morenos</h2>
          <img src={fred232} alt="Fred 23 confronts the Moreno family in Springfield" className="profile-block-img" />
          <p>
            Years later, Fred 23 becomes the neighbor of the Moreno family in the Cobra town of Springfield. He becomes suspicious that the Morenos may be hiding their daughter, <Link to="/character-bios/Dawn">Dawn</Link>, based on recent activity at the Cobra Community Center. Fred 23 puts on his Siegie uniform and brings his assault rifle to the Morenos' home one night. When <Link to="/character-bios/Dawn">Dawn</Link>'s parents answer, he tells them of his suspicion that they are hiding <Link to="/character-bios/Dawn">Dawn</Link> and says it is best to turn her in.
          </p>
          <p>
            <Link to="/character-bios/Dawn">Dawn</Link>'s father invites Fred 23 inside and tells him he is right: turning <Link to="/character-bios/Dawn">Dawn</Link> in is the best course. Once inside, her father punches Fred 23, and her mother hits him over the head with a lamp, knocking him unconscious. Just then, <Link to="/character-bios/Dawn">Dawn</Link> heads down the stairs and asks, "What have you done?" Her father says they will not turn her in. He assures her that they cannot kill Fred 23, since he is their neighbor. Instead, they will tie him up and slip out of Springfield in the morning (Issue #305).
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Fred23;