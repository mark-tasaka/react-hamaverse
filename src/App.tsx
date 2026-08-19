import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Header from './inc/Header'
import Footer from './inc/Footer'
import Home from './pages/Home'
import CharacterBios from './pages/CharacterBios'

import SnakeEyes from './pages/characters/SnakeEyes'
import Scarlett from './pages/characters/Scarlett'
import SoftMaster from './pages/characters/SoftMaster'
import BlindMaster from './pages/characters/BlindMaster'
import Billy from './pages/characters/Billy'
import HardMaster from './pages/characters/HardMaster'
import Stalker from './pages/characters/Stalker'
import Jinx from './pages/characters/Jinx'
import Tyrone from './pages/characters/Tyrone'
import SeanCollins from './pages/characters/SeanCollins'
import Sioban from './pages/characters/Sioban'
import StormShadow from './pages/characters/StormShadow'
import Marina from './pages/characters/Marina'
import Hawk from './pages/characters/Hawk'
import Wade from './pages/characters/Wade'
import Onihashi from './pages/characters/Onihashi'
import Shooter from './pages/characters/Shooter'
import Grunt from './pages/characters/Grunt'
import Hundtkinder from './pages/characters/Hundtkinder'
import Lola from './pages/characters/Lola'
import WhiteClown from './pages/characters/WhiteClown'

import ComicIssues from './pages/ComicIssues'
import Issue21 from './pages/issues/Issue21'
import Issue26 from './pages/issues/Issue26'
import Issue27 from './pages/issues/Issue27'
import Issue93 from './pages/issues/Issue93'
import Issue94 from './pages/issues/Issue94'
import Issue95 from './pages/issues/Issue95'
import Issue96 from './pages/issues/Issue96'
import Resources from './pages/Resources'
import Tribute from './pages/Tribute'
import Contact from './pages/Contact'
import Updates from './pages/Updates'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character-bios" element={<CharacterBios />} />
          <Route path="/character-bios/SnakeEyes" element={<SnakeEyes />} />
          <Route path="/character-bios/Scarlett" element={<Scarlett />} />
          <Route path="/character-bios/SoftMaster" element={<SoftMaster />} />
          <Route path="/character-bios/BlindMaster" element={<BlindMaster />} />
          <Route path="/character-bios/Billy" element={<Billy />} />
          <Route path="/character-bios/HardMaster" element={<HardMaster />} />
          <Route path="/character-bios/Stalker" element={<Stalker />} />
          <Route path="/character-bios/Jinx" element={<Jinx />} />
          <Route path="/character-bios/Tyrone" element={<Tyrone />} />
          <Route path="/character-bios/SeanCollins" element={<SeanCollins />} />
          <Route path="/character-bios/Sioban" element={<Sioban />} />
          <Route path="/character-bios/StormShadow" element={<StormShadow />} />
          <Route path="/character-bios/Marina" element={<Marina />} />
          <Route path="/character-bios/Hawk" element={<Hawk />} />
          <Route path="/character-bios/Wade" element={<Wade />} />
          <Route path="/character-bios/Onihashi" element={<Onihashi />} />
          <Route path="/character-bios/Shooter" element={<Shooter />} />
          <Route path="/character-bios/Grunt" element={<Grunt />} />
          <Route path="/character-bios/Hundtkinder" element={<Hundtkinder />} />
          <Route path="/character-bios/Lola" element={<Lola />} />
          <Route path="/character-bios/WhiteClown" element={<WhiteClown />} />
          <Route path="/comic-issues" element={<ComicIssues />} />
          <Route path="/comic-issues/Issue21" element={<Issue21 />} />
          <Route path="/comic-issues/Issue26" element={<Issue26 />} />
          <Route path="/comic-issues/Issue27" element={<Issue27 />} />
          <Route path="/comic-issues/Issue93" element={<Issue93 />} />
          <Route path="/comic-issues/Issue94" element={<Issue94 />} />
          <Route path="/comic-issues/Issue95" element={<Issue95 />} />
          <Route path="/comic-issues/Issue96" element={<Issue96 />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/tribute" element={<Tribute />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/updates" element={<Updates />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App