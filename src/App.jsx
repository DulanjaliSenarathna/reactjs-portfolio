import Contact from "./components/contact/Contact"
import Hero from "./components/hero/Hero"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"

const App = () => {
  return (
    <div className='container'>
      <Hero />
      <Services/>
      <Portfolio />
      <Contact /> 
      
    </div>
  )
}

export default App