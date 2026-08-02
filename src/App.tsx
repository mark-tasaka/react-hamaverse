import { Routes, Route } from 'react-router-dom'
import Header from './inc/Header'
import Home from './pages/Home'
import CharacterBios from './pages/CharacterBios'
import ComicIssues from './pages/ComicIssues'
import Resources from './pages/Resources'
import Tribute from './pages/Tribute'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character-bios" element={<CharacterBios />} />
        <Route path="/comic-issues" element={<ComicIssues />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/tribute" element={<Tribute />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App