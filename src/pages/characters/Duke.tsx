import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import duke1 from './img/duke/duke_1.png';
import duke2 from './img/duke/duke_2.png';

const Duke: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Duke (Conrad S. Hauser)</h1>

        <p className="profile-intro">
          First Sergeant Conrad S. Hauser (Duke) is the field commander of the team. He is the team's "First Shirt" and "Top Sergeant," the backbone of the unit and the vital link between its officers and the soldiers who carry out their orders. Duke is a natural leader who leads from the front, earning the respect of the men and women who serve under him.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Meeting Claire</h2>
          <img src={duke1} alt="Duke and Claire" className="profile-block-img" />
          <p>
            Years before joining G.I. Joe, Duke meets his future wife, Claire, in Washington, D.C. Duke is there as a sightseer, and Claire is taking part in a foreign policy protest. When Claire is harassed, Duke steps in to intervene. At first, Claire assumes he is just another male chauvinist asserting himself, but she later realizes he acted because he believed it was the right thing to do. The two spend that evening in a French café in Georgetown (Issue #224).
          </p>
          <p>
            Duke and Claire marry, and Claire becomes a medical doctor. Years later, they are providing medical aid in an impoverished village when armed insurgents drive up in a pickup truck, abduct Claire, and shoot Duke in the chest, leaving him for dead. Claire is moved from location to location, passed from one insurgent group to another, and her whereabouts remain unknown. For many years, Duke believes she is dead (Issue #222).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Convoy to Outpost Juliet</h2>
          <img src={duke2} alt="Duke's convoy in Trucial Abysmia" className="profile-block-img" />
          <p>
            A civil war breaks out in the Emirate of Trucial Abysmia, where the Emir battles the secessionist forces of Colonel Sharif. U.S. forces are brought in on the side of the Emir. Duke is part of a resupply convoy traveling to Outpost Juliet, which, in addition to supplies, is transporting a fuel tanker.
          </p>
          <p>
            Duke rides in a Humvee driven by Specialist Maureen "Martoonies" Hennessey, with Roadblock operating the turret-mounted .50-cal. Hennessey is a short-timer, due to rotate back to the States in less than a month and return to civilian life. She plans to work in her brother's Irish bar in Brooklyn.
          </p>
          <p>
            The V-150 takes the lead, with Duke's Humvee right behind it. An IED takes out the V-150, and the convoy comes to a halt as Roadblock lays down suppressing fire. Insurgents open fire from the ridge, and Duke's Humvee is hit by armor-piercing rounds. Hennessey is shot through the cheek, and another round penetrates the driver's door, nicking an artery in her thigh. With so much bleeding from her cheek wound, neither of them notices the thigh wound. Duke is hit in the shoulder.
          </p>
          <p>
            Hennessey and Duke patch their wounds and Charlie Mike, continuing the mission. Hennessey drives toward the insurgents while Roadblock takes several of them out with the .50-cal. The rest of the convoy's soldiers dismount and lay down suppressing fire on foot, allowing the medics to reach the crew of the wounded V-150.
          </p>
          <p>
            Air support arrives in the form of the Emir's legacy Su-7 Frogfoots, giving the convoy a chance to pause and tend to the wounded. Duke discovers that the fuel tanker's cab has been riddled with rounds and its occupants killed, so he takes over as the tanker's driver. The convoy presses on toward Outpost Juliet.
          </p>
          <p>
            A short time later, insurgents in technicals attack the convoy, intending to capture the fuel tanker. Duke realizes this and has Hennessey drive up alongside the tanker. He pulls the pins on his grenades, drops them in the passenger seat, and jumps toward the Humvee, where Roadblock catches him. The Humvee speeds off while the technicals swarm around the tanker. A massive explosion follows, sending the insurgents to a fiery death.
          </p>
          <p>
            The Humvee keeps driving. Duke tells Hennessey she can slow down, checks on her, and finds her dead at the wheel. She has bled out from the wound to her thigh artery.
          </p>
          <p>
            When Duke and Roadblock return to the States, they visit Hennessey's brother's pub in Brooklyn to return her lucky charm to him. Her brother is touched that they came all the way to Brooklyn to share his sister's final moments. He asks Duke whether they are heading back to the Middle East. Duke replies that the authorities want him to take a new assignment in Staten Island, and he is seriously considering it, as long as he can take Roadblock with him (Issue #253).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), six versions of Duke were produced: the 1983 version, the 1988 Tiger Force repaint, the 1992 version, the 1993 version, the 1994 Star Brigade Armor Tech version, and the 1994 Star Brigade version.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Duke;