import About from "./sections/About";
import Booking from "./sections/Booking";
import ContactUs from "./sections/ContactUs";
import Events from "./sections/Events";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import Specials from "./sections/Specials";
import Testimonials from "./sections/Testimonials";
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
        <Events />
        <Booking />
        <Testimonials />
        <Gallery />
        <ContactUs />
      </main>
    </>
  );
};

export default page;
