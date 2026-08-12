import Nav from "../../components/Website/Nav.tsx";
import Hero from "../../components/Website/Hero.tsx";
import Testimonials from "../../components/Website/Testimonials.tsx";

function Landing() {

  return (
    <>
    <Nav />
    <Hero />
    <div className="h-[1px] bg-secondary"></div>
    <Testimonials />
    </>
  )
}

export default Landing;