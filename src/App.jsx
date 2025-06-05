import Contact from "./components/contact/Contact"
import Hero from "./components/hero/Hero"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"

const App = () => {
  return (
    <div className='container'>
      
        <section id='home'>
          <Hero />
        </section>

        <section id='services'>
          <Services />
        </section>
     
   
      <Portfolio />
   

        <section id='contact'>
          <Contact />
        </section>
         
    </div>
  )
}

export default App