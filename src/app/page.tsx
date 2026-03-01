import About from "./sections/About";
import Booking from "./sections/Booking";
import Chefs from "./sections/Chefs";
import Events from "./sections/Events";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import Specials from "./sections/Specials";
import WhyUs from "./sections/WhyUs";

const page = () => {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <WhyUs />
        <Menu />
        <Specials />
        <Booking />
        <Events />
        <Chefs />
        <Gallery />
      </main>
    </>
  );
};

export default page;
