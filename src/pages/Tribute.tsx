import React from 'react';
import { Link } from 'react-router-dom';
import './css/Common.css';
import './css/Tribute.css';

import hama1 from './img/tribute/hama_1.jpg';
import hama2 from './img/tribute/hama_2.jpg';
import hama3 from './img/tribute/hama_3.jpg';

const Tribute: React.FC = () => {
  return (
    <main className="tribute-page">
      <div className="container">
        <h1 className="tribute-title">Tribute to Larry Hama</h1>

        <section className="tribute-block">
          <div className="tribute-block-media">
            <img src={hama1} alt="Larry Hama" />
            <p className="tribute-block-caption">Larry Hama</p>
          </div>
          <p>
            There are many sources of inspiration for creating this website. The first and foremost is Mr. Larry Hama, for telling the ongoing story of <em>G.I. Joe: A Real American Hero</em>, a story that started on the pages of Marvel Comics in 1982. By the time the Marvel run ended in 1994, 155 issues of <em>G.I. Joe: A Real American Hero</em> and 28 issues of <em>G.I. Joe: Special Missions</em> had been published, with Mr. Hama writing the vast majority of these issues*. After a 15-year hiatus, Mr. Hama continued the story of ARAH through IDW Publishing, starting with Issue #155.5 and concluding with Issue #300**. When Skybound Entertainment acquired the G.I. Joe license, Mr. Hama was brought on as a writer, continuing the series with Issue #301. In the years between the end of Marvel's run and the start of IDW's run, Mr. Hama wrote the three-part <em>G.I. Joe: Declassified</em> series, the seven-part <em>Storm Shadow</em> series, and the first four issues of <em>G.I. Joe: Frontline</em>, all of which are part of the ARAH canon. As well, Mr. Hama also wrote a couple new issues for Hasbro's Comic Packs, set between the events of the Marvel run.
          </p>

          <h2 className="tribute-block-title">Adding Realism to the Comic</h2>
          <p>
            While G.I. Joe began as a toy line, Mr. Hama wrote the comics for a wider audience. He respected the intelligence and sophistication of his readers, bringing a level of realism and grit to the stories that set them apart. Drawing on his own experience as a Vietnam War veteran, he used authentic military terminology and captured the emotions felt by soldiers on the battlefield. He told the story of individuals — not from the perspective of generals or high command, but from that of the rank-and-file soldier on the ground, fighting alongside friends they'd come to depend on utterly.
          </p>
        </section>
        <section className="tribute-block">
          <div className="tribute-block-media">
            <img src={hama2} alt="Larry Hama and Bart Wulf" />
            <p className="tribute-block-caption">Larry Hama and Bart Wulf<br />(Issue #233, Letters Page)</p>
          </div>
          <h2 className="tribute-block-title">Characters Based on Real People</h2>
          <p>
            At the heart of ARAH are the rich, detailed characters who populate this world. Mr. Hama was tasked with creating unique personalities for over 100 named characters, and he accomplished this by writing dossiers for each one — background, military training, quotes from fellow characters, and more. These dossiers became the file cards included on the packaging of the action figures, adding a level of depth and authenticity that made each figure feel like a real person rather than a toy.
          </p>
          <p>
            Mr. Hama based many of the characters on real people he knew, several of whom he knew from Vietnam. The look of the unmasked <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> is based on Sgt. Bob Light, a Huey door gunner in the 1st Cavalry whom Mr. Hama met in Vietnam. Wild Bill is based on his friend Bart Wulf, who served in the 1st Cavalry as a Huey pilot (Sgt. Light was one of the door gunners aboard Wulf's Huey). <Link to="/character-bios/Stalker">Stalker</Link> is based on another Vietnam War veteran, Ed Davis, who served two tours with LRRP and lost an eye in combat. <Link to="/character-bios/Scarlett">Scarlett</Link> is based on Mr. Hama's wife, a person very dear to him. Reading the comic, it becomes clear that these characters hold a special place in Mr. Hama's heart.
          </p>
        </section>

        <section className="tribute-block">
          <div className="tribute-block-media">
            <img src={hama3} alt="Issue #21: Revelations of the Shared Tattoo" />
            <p className="tribute-block-caption">Issue #21: Revelations of the Shared Tattoo</p>
          </div>
          <h2 className="tribute-block-title">Mr. Hama's Approach to Storytelling</h2>
          <p>
            From what I've learned listening to Mr. Hama's interviews, his approach to storytelling centers on character — building the story one page at a time, without always knowing what comes next until the final page is finished. When he reached the last pages of his classic "<Link to="/comic-issues/Issue21">Silent Interlude</Link>" (Issue #21), for instance, he spontaneously drew matching I Ching hexagram tattoos on the forearms of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and Storm Shadow, linking the two — without yet knowing exactly how they were connected. That connection wouldn't become clear to Mr. Hama himself until he began writing <Link to="/comic-issues/Issue26">Issue #26</Link> ("Snake Eyes: The Origin"). Like the reader, the story of Snake Eyes and Storm Shadow unfolded page by page for Mr. Hama as well; he didn't discover that Storm Shadow hadn't killed his own uncle until he reached the final pages of <Link to="/comic-issues/Issue27">Issue #27</Link> ("Snake Eyes: The Origin, Part 2"). It is this unique, character-first style of storytelling that makes the ARAH stories so memorable.
          </p>
          <h2 className="tribute-block-title">Tunnel Rat: Hasbro's Tribute to Mr. Hama</h2>
          <p>
            In 1987, to honor Mr. Hama, Hasbro produced the <a href="https://www.yojoe.com/action/87/tunnelrat.shtml" target="_blank" rel="noopener noreferrer">Tunnel Rat action figure</a>, sculpted in his likeness. Mr. Hama served in the 18th Engineer Brigade of the U.S. Army Corps of Engineers as a firearms and explosive ordnance expert. He also served as a Tunnel Rat — an unofficial role held by specialists who entered, cleared, and destroyed enemy tunnel complexes in Vietnam. Serving as a Tunnel Rat was purely voluntary, given the extreme danger involved. Tunnel Rat's file card lists him as an Explosive Ordnance Disposal (EOD) specialist (89D)***, holding the rank of E-5 (Sgt. or Spec. 5). I believe Tunnel Rat's file card reflects Mr. Hama's own MOS and rank.
          </p>
        </section>

        
        <div className="btn-row-center">
          <Link to="/wishlist" className="btn">My ARAH Wish List</Link>
        </div>


        <section className="tribute-notes">
          <p className="tribute-notes-footnote">
            *Mr. Hama did not write ARAH Issues #8, #9, #20, #119, #143, #153, #154 and Special Missions Issues #24 and #27.
          </p>
          <p className="tribute-notes-footnote">
            **IDW's G.I. Joe license ended at the close of 2022. It was picked up by Skybound Entertainment in 2023.
          </p>
          <p className="tribute-notes-footnote">
            ***EOD specialists (89D) are highly trained personnel who undergo a rigorous selection process and are considered among the elite of the U.S. Army.
          </p>
        </section>

      </div>
    </main>
  );
};

export default Tribute;