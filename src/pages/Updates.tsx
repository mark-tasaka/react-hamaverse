import { Link } from 'react-router-dom'
import './css/Common.css'

function Updates() {
  return (
    <section className="container">
      <h1 className="updates-title">Past Updates</h1>
      
      <p className="update-log-date">August 13, 2026</p>
      <p className="update-log-entry">
        The character bios for <Link to="/character-bios/Hawk">Hawk</Link>, <Link to="/character-bios/Wade">Wade Collins</Link> and <Link to="/character-bios/Marina">Marina</Link> have been added. More sections added to <Link to="/character-bios/StormShadow">Storm Shadows</Link>'s bio. As with Storm Shadow's bio, I will be adding more sections to Hawk and Wade Collins' bios.
      </p>

      <p className="update-log-date">August 12, 2026</p>
      <p className="update-log-entry">
        The character bios for <Link to="/character-bios/StormShadow">Storm Shadow</Link> and <Link to="/character-bios/Sioban">Sioban O'Hara</Link> have been added. I have only completed the early history of Storm Shadow's bio and will be adding more information to it in the future.  
      </p>
      
      <p className="update-log-date">August 12, 2026</p>
      <p className="update-log-entry">
        The character bios for <Link to="/character-bios/SeanCollins">Sean Collins</Link> has been added.  A new section (Tyrone's Younger Brother, Raymond) has been added to <Link to="/character-bios/Tyrone">Tyrone</Link>'s bio.  
      </p>
      
      <p className="update-log-date">August 11, 2026</p>
      <p className="update-log-entry">
        The character bios for <Link to="/character-bios/Tyrone">Tyrone</Link> has been added.
      </p>

      
      <p className="update-log-date">August 10, 2026</p>
      <p className="update-log-entry">
        The character bios for <Link to="/character-bios/Jinx">Jinx</Link> has been added.  An addition section (Retirement to the High Sierras) has been added to <Link to="/character-bios/Scarlett">Scarlett</Link>'s bio. 
      </p>

      <p className="update-log-date">August 10, 2026</p>
      <p className="update-log-entry">
        The character bios for <Link to="/character-bios/Stalker">Stalker</Link> and the <Link to="/character-bios/HardMaster">Hard Master</Link> have been added to the site. The bios include information about the characters' backgrounds, personalities, and roles within the G.I. Joe universe.
      </p>

      <p className="update-log-date">August 9, 2026</p>
      <p className="update-log-entry">
        Welcome to the launch of Hamaverse: Unofficial ARAH Comic Fan Site, a fan site dedicated to Mr. Hama's <em>G.I. Joe: A Real American Hero</em> (ARAH) series. This website is designed to be an ongoing work-in-progress, where new materials will be added to the site.
      </p>

      <div className="btn-row-center">
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </section>
  )
}

export default Updates