import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import History from './components/History'
import Genealogy from './components/Genealogy/Genealogy.jsx'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <History />
        <Genealogy />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
