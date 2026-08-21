import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/IssueProfile.css';

import cover26 from './img/cover26.jpg';

interface CreativeTeam {
  script: string;
  finishes: string;
  lettering: string;
  coloring: string;
  editor: string;
  editorInChief: string;
}

const CREATIVE_TEAM: CreativeTeam[] = [
  {
    script: 'Larry Hama',
    finishes: 'Steve Leialoha',
    lettering: 'Rick Parker',
    coloring: 'George Roussos',
    editor: 'Denny O\u2019Neil',
    editorInChief: 'Jim Shooter',
  },
];

const Issue26: React.FC = () => {
  const credits = CREATIVE_TEAM[0];

  return (
    <main className="issue-profile-page">
      <div className="container">

        <div className="issue-header">
          <img src={cover26} alt="Issue 26 cover — The Silent Castle" className="issue-cover" />
          <div className="issue-header-info">
            <div className="issue-heading-row">
              <p className="issue-date">Issue 26 (August 1984)</p>
              <h1 className="issue-title">Snake Eyes: The Origin</h1>
            </div>

            <div className="issue-credits">
              <div>
                <p className="issue-credit-label">Story and Breakdowns</p>
                <p className="issue-credit-name">{credits.script}</p>
              </div>
              <div>
                <p className="issue-credit-label">Finishes</p>
                <p className="issue-credit-name">{credits.finishes}</p>
              </div>
              <div>
                <p className="issue-credit-label">Lettering</p>
                <p className="issue-credit-name">{credits.lettering}</p>
              </div>
              <div>
                <p className="issue-credit-label">Coloring</p>
                <p className="issue-credit-name">{credits.coloring}</p>
              </div>
              <div>
                <p className="issue-credit-label">Editor</p>
                <p className="issue-credit-name">{credits.editor}</p>
              </div>
              <div>
                <p className="issue-credit-label">Editor in Chief</p>
                <p className="issue-credit-name">{credits.editorInChief}</p>
              </div>
            </div>

            <section className="issue-section">
              <h2 className="issue-section-title">Summary</h2>
              <p>
                This issue explores <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' backstory, by examining his connection to <Link to="/character-bios/StormShadow">Storm Shadow</Link> through their shared tattoos. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' past is told through <Link to="/character-bios/Stalker">Stalker</Link> (Vietnam War), <Link to="/character-bios/Hawk">Hawk</Link> (returning home from the war), and the <Link to="/character-bios/SoftMaster">Soft Master</Link> (<Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' training as a ninja in Japan).
              </p>
            </section>
          </div>
        </div>

        <section className="issue-section">
          <h2 className="issue-section-title">Detailed Summary</h2>
          <h3 className="issue-section-title">Snake Eyes Origins</h3>
          <p>
            A youth tries to rob a restaurant, Comidas Chinas, in Spanish Harlem. He pulls a gun on the owner, an older Japanese man working behind the counter. The man easily disarms the youth by ejecting the round from the chamber and releasing the pistol's clip. He then gives the youth $50 for the gun and places the unloaded weapon in a box filled with other guns. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, wearing a hat and trench coat, sits behind the counter as all this happens. There is a connection between the man and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>.
          </p>
          <p>
            In the Pit, <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/Hawk">Hawk</Link> are looking at the computer monitor showing the tattoo <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> share. <Link to="/character-bios/Stalker">Stalker</Link> interrupts, saying he saw that same tattoo over ten years ago. <Link to="/character-bios/Stalker">Stalker</Link> recalls events that took place during the Vietnam War. He led a six-man LRRP team during the war. <Link to="/character-bios/Stalker">Stalker</Link>, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, and a soldier named Tommy were returning in the aftermath of a firefight that claimed the lives of three of their team members. Tommy was a Japanese American kid whose name was too difficult to pronounce, so they referred to him by his first name. Tommy and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> were close, having served a full tour together. Tommy regularly talked to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> about his family business in Japan; he wanted <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> to be part of the business after the war. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> carried a tattered photo of his twin sister in his hat. He believed that as long as he kept that photo, nothing bad would happen.
          </p>
          <p>
            As the Huey was arriving, a sizable force of NVA regulars (North Vietnamese Army) opened fire. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> was hit. The photo of his twin sister fell out of his hat. <Link to="/character-bios/Stalker">Stalker</Link> ordered Tommy to leave <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and run to the Huey. Tommy disobeyed the order, ran through a hail of gunfire, and returned with a wounded <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. On board the Huey, Tommy removed his wrist wrap to help bandage <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. It was there <Link to="/character-bios/Stalker">Stalker</Link> saw the tattoo. After returning to base, <Link to="/character-bios/Stalker">Stalker</Link> called the records department and learned Tommy's last name translated to "<Link to="/character-bios/StormShadow">Storm Shadow</Link>."
          </p>
          <p>
            Back at the restaurant, the old man produces a small box containing valuables he had kept for <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> over the years. The valuables include the tattered picture of his twin sister and his Silver Star medal. The old man reveals that Tommy retrieved the photo while carrying the wounded <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>.
          </p>
          <p>
            In the Pit, <Link to="/character-bios/Hawk">Hawk</Link> talks about his first encounter with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>. While on their way to the airport, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' family was killed in a car accident by a stoned-out veteran driving erratically at high speed. <Link to="/character-bios/Hawk">Hawk</Link>, then a junior officer working at a desk, was dispatched to give <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> the tragic news. When <Link to="/character-bios/Hawk">Hawk</Link> arrived, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> had been waiting at the airport for four hours. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> knew from <Link to="/character-bios/Hawk">Hawk</Link>'s uniform and the look on his face that something horrible had happened to his family.
          </p>
          <p>
            Back at the restaurant, the old man produces a broken arrow and talks about <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' time in Japan. Following the death of his family, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> traveled to Japan, taking his friend up on his offer to join the family business. The business turned out to be a ninja clan. The old man reveals himself to be the <Link to="/character-bios/SoftMaster">Soft Master</Link>. In charge of the clan is his older brother, the <Link to="/character-bios/HardMaster">Hard Master</Link>. The <Link to="/character-bios/SoftMaster">Soft Master</Link>'s nephew is <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' friend Tommy, who is known as the Young Master. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> begins his training as a ninja. The <Link to="/character-bios/SoftMaster">Soft Master</Link> recalls an event that took place two years later. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and Tommy were sparring. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> was the superior fighter. He allowed Tommy to win to save face.
          </p>
          <p>
            Years pass, and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> earns the right to have the Arashikage tattoo. The <Link to="/character-bios/SoftMaster">Soft Master</Link> says that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' skill with the blade and throwing dirt surpasses Tommy's; Tommy's skill with the bow is superior, as he possesses the "Ear that Sees." While practicing archery, Tommy displayed this skill by firing an arrow over the wall, killing a squirrel on the other side. Later that day, inside the dojo, the <Link to="/character-bios/HardMaster">Hard Master</Link> showed <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> the technique of the "Blind Sword." <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> then heard a third person outside in the courtyard. The <Link to="/character-bios/HardMaster">Hard Master</Link> dismissed this, saying the person posed no danger. The <Link to="/character-bios/HardMaster">Hard Master</Link> expressed his desire that <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> be heir to the clan. <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> does not want this. The <Link to="/character-bios/HardMaster">Hard Master</Link> goes behind a screen to demonstrate the "Chameleon's Mantle," mimicking <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' breathing and heartbeat. An arrow is fired from outside, killing the <Link to="/character-bios/HardMaster">Hard Master</Link>.
          </p>
          <p>
            Hearing the commotion, the <Link to="/character-bios/SoftMaster">Soft Master</Link> ran out of his room to the dojo. In the courtyard, he saw the Young Master (Tommy) run away with a bow in hand. Upon entering the dojo and seeing the dying <Link to="/character-bios/HardMaster">Hard Master</Link>, the <Link to="/character-bios/SoftMaster">Soft Master</Link> believed only the Young Master had the skill and strength to make the shot. With his last breath, the <Link to="/character-bios/HardMaster">Hard Master</Link> said his nephew was not responsible.
          </p>
        </section>

        <section className="issue-section">
          <h3 className="issue-section-title">Florida Everglades</h3>
          <p>
            Zartan, Destro, Cobra Commander, and the <Link to="/character-bios/Baroness">Baroness</Link> are inside Zartan's cabin with Junkyard (Mutt's dog). Junkyard takes a liking to the Cobras. In the distance, Torpedo, Mutt, and Tripwire are watching the cabin. Mutt is upset that Junkyard has taken a liking to the Cobras. The Cobras and Junkyard leave the cabin. The Joes fall back so as not to be spotted. While falling back, the Joes spot Firefly and Wild Weasel, who were previously their prisoners, in the distance. Firefly and Wild Weasel spot the Joes. Junkyard leads Zartan, Destro, Cobra Commander, and the <Link to="/character-bios/Baroness">Baroness</Link> to a pit of quicksand. Junkyard then departs to rejoin his handler, Mutt.
          </p>
        </section>

        <div className="issue-back-row">
          <Link to="/comic-issues" className="btn">Back to Comic Issues</Link>
        </div>

      </div>
    </main>
  );
};

export default Issue26;
