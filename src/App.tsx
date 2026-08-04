import { Routes, Route } from 'react-router-dom'
import Header from './inc/Header'
import Footer from './inc/Footer'
import Home from './pages/Home'
import CharacterBios from './pages/CharacterBios'
// import SnakeEyes from './pages/characters/SnakeEyes'
import Scarlett from './pages/characters/Scarlett'
// import SoftMaster from './pages/characters/SoftMaster'
// import BlindMaster from './pages/characters/BlindMaster'
import ComicIssues from './pages/ComicIssues'
import Resources from './pages/Resources'
import Tribute from './pages/Tribute'
import Contact from './pages/Contact'
import Updates from './pages/Updates'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character-bios" element={<CharacterBios />} />
          {/* <Route path="/character-bios/SnakeEyes" element={<SnakeEyes />} /> */}
          <Route path="/character-bios/Scarlett" element={<Scarlett />} />
          {/* <Route path="/character-bios/SoftMaster" element={<SoftMaster />} />
          <Route path="/character-bios/BlindMaster" element={<BlindMaster />} /> */}
          <Route path="/comic-issues" element={<ComicIssues />} />
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