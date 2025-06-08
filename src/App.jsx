
import { lazy, Suspense } from "react"

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import  Lazyload  from "react-lazyload";

const App = () => {
  return (
    <div className='container'>

      <Suspense fallback={"Loading..."}>
      <Lazyload height="100vh" offset={-100}>
      
        <section id='home'>
          <Hero />
        </section>

         </Lazyload>
         </Suspense>

 <Suspense fallback={"Loading..."}>
      <Lazyload height="100vh" offset={-100}>
        <section id='services'>
          <Services />
        </section>
     </Lazyload>
         </Suspense>
   
   <Suspense fallback={"Loading..."}>
      <Lazyload height="600vh" offset={-100}>
      <Portfolio />
   
 </Lazyload>
         </Suspense>

           <Suspense fallback={"Loading..."}>
      <Lazyload height="100vh" offset={-100}>
        <section id='contact'>
          <Contact />
        </section>

         </Lazyload>
         </Suspense>

       
         
    </div>
  )
}

export default App