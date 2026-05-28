import Header from './components/Header'
import Hero from './components/Hero'
import CatalogSection from './components/CatalogSection'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main>
        <Hero />
        <CatalogSection />
      </main>

      <Footer />
    </div>
  )
}

export default App