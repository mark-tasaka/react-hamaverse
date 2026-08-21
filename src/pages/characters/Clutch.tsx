import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Common.css';
import './css/CharacterProfile.css';

import clutch1 from './img/clutch/clutch_1.png';

const Clutch: React.FC = () => {
  return (
    <main className="character-profile-page">
      <div className="container">
        <h1 className="character-profile-title">Clutch (Lance Steinberg)</h1>

        <blockquote className="profile-quote">
          <p>"He greases his hair with motor oil, rarely shaves, and chews on the same toothpick for months. Clutch still calls women chicks."*</p>
        </blockquote>

        <p className="profile-intro">
          A colorful character from the beginning, Lance J. Steinberg (Clutch) is one of the original members of G.I. Joe and the team's V.A.M.P. driver. Prior to enlisting, Clutch worked as a mechanic for Mandy Mean Machines and was an avid street racer. He carried his love of fast cars and women over to the team — much to the chagrin of <Link to="/character-bios/Scarlett">Scarlett</Link> and Cover Girl. Over the years, Clutch's pursuit of his female teammates mellowed.
        </p>

        <section className="profile-block">
          <h2 className="profile-block-title">General Austin's Driver</h2>
          <img src={clutch1} alt="Clutch as General Austin's driver" className="profile-block-img" />
          <p>
            Prior to the formation of G.I. Joe, Clutch serves as General Austin's personal driver. On one assignment, he's ordered to pick up a Tahoe from McGuire Air Force Base and drive it to Fort Holabird. To his surprise, he finds a blindfolded and bound passenger — Col. Abernathy (<Link to="/character-bios/Hawk">Hawk</Link>) — waiting in the backseat. Clutch doesn't engage the passanger in conversation.
          </p>
          <p>
            While driving, a van carrying three occupants pulls alongside Clutch. The van's back door opens, revealing a thug armed with a .50-cal machine gun. Clutch speeds up and drives alongside the van's passenger side; one of its occupants draws a gun. Clutch rams his Tahoe into the side of the van and elbows the gunman in the face, breaking his nose. He forces the van into the freeway divider, sending it up in flames. Clutch delivers his passenger to Fort Holabird.  No one at Fort Holabird batted an eye when the Tahoe came back damaged (G.I. Joe Declassified #2).
          </p>
        </section>

        <section className="profile-notes">
          <h2 className="profile-notes-title">Notes from the Field</h2>
          <p>
            During the Marvel run (1982–1994), three versions of Clutch were produced: the original 1982 version (with a 1983 swivel-arm variant), a 1984 repaint, and the 1993 version. Clutch was one of the original Joes who did not receive a pay-grade promotion when General Austin promoted eight others and assigned them administrative duties to accommodate the team's growth. As a result, all three of Clutch's file cards show his rank as E-4.
          </p>

          <p className="profile-notes-footnote">
            *The quote is from Clutch's 1982 file card.
          </p>
        </section>

        <div className="profile-back-row">
          <Link to="/character-bios" className="btn">Back to Character Bios</Link>
        </div>

      </div>
    </main>
  );
};

export default Clutch;
