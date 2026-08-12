import { Link } from 'react-router-dom'
import Hero from '../inc/Hero'
import './css/Common.css'

function Home() {
  return (
    <>
      <Hero />

      <div className="container">
        <div className="about-text">
          <p>
            Welcome to <strong>Hamaverse: Unofficial ARAH Comic Fan Site</strong>, a modest website dedicated to Larry Hama's ongoing <em>G.I. Joe: A Real American Hero</em> comic series.
          </p>
          <p>
            Starting in 1982, Mr. Hama began telling the story of a unique group of heroes through Marvel Comics. For the next 12 years, he continued <em>G.I. Joe: A Real American Hero</em> (ARAH), writing the vast majority of its 155 issues. During this time, Mr. Hama also wrote <em>G.I. Joe: Special Missions</em>, a 26-issue run that took place alongside his ARAH continuity.
          </p>
          <p>
            The Marvel run ended in 1994. In the 2000s, under Devil's Due, Mr. Hama wrote the three-part <em>G.I. Joe: Declassified</em> and the seven-part <em>Storm Shadow</em> series, adding to the ARAH continuity. In 2010, IDW Publishing revived the ARAH continuity, with Mr. Hama writing the ongoing series starting with Issue #155.5 — picking up directly from where his last Marvel issue left off. He continued writing ARAH for IDW until the end of 2022, concluding with Issue #300 (147 issues). Skybound Entertainment then acquired the G.I. Joe license and brought Mr. Hama on as a writer, continuing the ARAH story with Issue #301.
          </p>
          <p>
            At the heart of ARAH are the characters who inhabit this world, and the bonds of comradery soldiers forge when placed in extraordinary situations. ARAH tells its story through the perspective of the individual soldier on the ground — ordinary men and women with real personalities, motivations, and flaws. Mr. Hama based many of these characters on real people, several of whom he served alongside in Vietnam. He also draws on his own experience as a Vietnam War veteran, lending his storytelling a level of military realism rarely seen in the genre.
          </p>
        </div>

        <div className="update-log">
          <h2 className="update-log-title">Update Log</h2>
          <p className="update-log-date">August 12, 2026</p>
          <p className="update-log-entry">
            The character bios for <Link to="/character-bios/SeanCollins">Sean Collins</Link> has been added.  A new section (Tyrone's Younger Brother, Raymond) has been added to <Link to="/character-bios/Tyrone">Tyrone</Link>'s bio.  
          </p>

          <div className="btn-row">
            <Link to="/updates" className="btn">Past Updates</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home