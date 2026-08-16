import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';
import './css/NotesFieldAlternativeBtn.css';

import shooter1 from './img/shooter/shooter_1.png';
import shooter2 from './img/shooter/shooter_2.png';
import shooter3 from './img/shooter/shooter_3.png';
import shooter4 from './img/shooter/shooter_4.png';
import shooter5 from './img/shooter/shooter_5.png';
import shooter6 from './img/shooter/shooter_6.png';

const Shooter: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Jodie "Shooter" Craig</h1>

        <p className="profile-intro">
          Sergeant First Class Jodie "Shooter" Craig is G.I. Joe's secret asset — a proficient sniper deployed in situations requiring plausible deniability, her identity kept hidden even from her own teammates. On the surface, SFC Craig appears to be just another member of the Chaplain's Assistant staff cadre. Only General Flagg and Sparks know of her true role.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">Fort Wadsworth</h2>
          <img src={shooter1} alt="Shooter at Fort Wadsworth" className="profile-block-img" />
          <p>
            Officially, SFC Craig serves as NCO cadre at the Chaplain's Assistant School at Fort Wadsworth, where she plays an active role keeping snoopy Chaplain's Assistants from poking around the motor pool and bothering its staff — the cover identity for the G.I. Joe team. Shortly after she orders a pair of nosy Chaplain's Assistants back to their duties, giving the motor pool staff some breathing room, Short Fuze, Steeler, and Flash take note of the ribbons and badges on her dress uniform: the Combat Infantryman's Badge (CIB), Expert Rifleman's Badge, Bronze Star, Purple Heart, and Air Medal. The CIB, they note, is only awarded to personnel who've served under direct enemy fire (G.I. Joe Declassified #1).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Sierra Gordo</h2>
          <img src={shooter2} alt="Shooter's mission in Sierra Gordo" className="profile-block-img" />
          <p>
            In Sierra Gordo, four members of the team — <Link to="/character-bios/Stalker">Stalker</Link>, Rock 'n Roll, Zap, and Grunt — are carrying a blinded, severely burned prisoner to the extraction site. At the Pentagon, General Austin voices concerns about the security of the extraction. General Flagg and Sparks activate Shooter (G.I. Joe Declassified #1).
          </p>
          <p>
            Shooter is flown from McGuire Air Force Base in New Jersey to Leeward Point Field at Guantanamo Bay, where she boards a helicopter bound for Sierra Gordo. En route, she removes her dog tags and any personal items that could identify her, dons her ghillie suit, and assembles her sniper rifle (G.I. Joe Declassified #2).
          </p>
          <p>
            On the ground, Shooter sets up her position near the extraction site. Through her binoculars, she spots <Link to="/character-bios/Stalker">Stalker</Link> carrying the wounded prisoner — and then an enemy sniper lining up a shot. She takes out the sniper first, then opens fire on a pair of pursuing guerrillas, wounding one and shooting the radio the other is carrying.
          </p>
          <p>
            As the Joes are extracted, Shooter shoots the wounded prisoner, causing him to fall from the helicopter. Aboard the aircraft, the Joes are left uncertain what caused the fall.
          </p>
          <p>
            Shooter removes her ghillie suit, revealing civilian clothes underneath, and catches a ride in the cab of a pickup truck hauling pigs. In Spanish, the two farmers ask why she looks so sad. She replies, in Spanish, "I just realized something bad about myself" (G.I. Joe Declassified #3).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Operation Lady Doomsday</h2>
          <img src={shooter3} alt="Shooter during Operation Lady Doomsday" className="profile-block-img" />
          <p>
            During Operation Lady Doomsday, Shooter operates independently as a sniper on a Cobra-controlled island, providing cover fire for the Joes. As the team departs in a captured Cobra transport helicopter, she turns her sights on Cobra's anti-air guns — and discovers Cobra has been forcing the island's civilian population to serve as ammo bearers. Cobra Commander has set a five-minute timer to destroy the castle.
          </p>
          <p>
            Knowing the civilian ammo bearers will die in the coming explosion if she doesn't intervene, Shooter abandons her sniper position and rushes the anti-air guns, drawing small-arms fire from Cobra troopers. Her action lets the civilians escape and keeps the anti-airguns from firing on the departing Joes. She is kiiled by small arms gunfire, sacrificing herself for both the civilians and her team. The ammo bearers make it out before the castle explodes (G.I. Joe Declassified #3).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Shooter's Memorial Service</h2>
          <img src={shooter4} alt="Shooter's memorial service" className="profile-block-img" />
          <p>
            General Flagg visits the church where Shooter's mother works as a Sunday school teacher. Though he cannot divulge any details of Jodie's mission, he consoles Mrs. Craig with assurances of her daughter's courage, compassion, and integrity.
          </p>
          <p>
            General Flagg has the team attend Shooter's memorial service. The Joes, puzzled as to why they've been gathered to honor a Chaplain's Assistant School cadre. General Flagg — borrowing a line from Grunt's AIT essay — quotes Amelia Earhart: "Courage is the price that life exacts for granting peace" in his eulogy (G.I. Joe Declassified #3).
          </p>
        </section>

        <section className="profile-block">
          <h2 className="profile-block-title">Posthumously Awarded the Silver Star and Second Purple Heart</h2>
          <img src={shooter5} alt="Shooter's posthumous Silver Star and Purple Heart" className="profile-block-img" />
          <p>
            Years later, certain details of Operation Lady Doomsday are declassified. Lady Jay and Cover Girl travel to St. Ewan Church to visit Jodie's mother, presenting her with the Silver Star and Purple Heart Jodie was posthumously awarded for that mission. Mrs. Craig asks, "They give out medals for killing the enemy, don't they? Did my Jodie kill people?"
          </p>
          <p>
            Lady Jay tells her that Jodie performed her duties with exceptional valor, and that the mission's success hinged on her actions.
          </p>
          <p>
            Cover Girl quotes John 15:13, telling her, "She gave her life to save the twelve of her comrades." In tears, Mrs. Craig says, "It's such a costly gift..." Cover Girl embraces her, offering what comfort she can (Issue #228).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <img src={shooter6} alt="Shooter's cameo in Issue #1" className="profile-block-img" />
          <p>
            The first issue of G.I. Joe: A Real American Hero shows the names of the fourteen original Joes listed on a monitor at the Pentagon. The fourteenth member is identified as Shooter, though the hand of the Air Force sergeant operating the monitor happens to cover the character's face in the panel. The name was added as a tribute to then-editor-in-chief Jim Shooter, and for years, fans wondered who this mysterious G.I. Joe member named Shooter actually was. Decades later, when Mr. Hama wrote G.I. Joe: Declassified, he finally gave Shooter her backstory.
          </p>
          <p>
            Jodie "Shooter" Craig is named after a real person Mr. Hama went to high school with — five of the real Jodie Craig's children went on to serve in the armed forces.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Shooter;
