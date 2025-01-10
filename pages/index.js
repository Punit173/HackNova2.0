import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Tracks from "../components/Tracks";
import Timeline from "../components/Timeline";
import Sponsors from "../components/Sponsors";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const Home = () => {
  const trackImages = [
    "./track1.svg",
    "./track2.svg",
    "./track3.svg",
    "./track4.svg",
    "./track5.svg",
    "./track6.svg",

    // Add more image URLs as needed
  ];
  return (
    <main className="">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="community">
        <About />
      </div>
      <div id="tracks">
        <Tracks images={trackImages} />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <Sponsors />
      <div id="faq">
        <Faq />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
};

export default Home;
