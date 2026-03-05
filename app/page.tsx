import Navbar from "@/components/Navbar";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import BrandRevealLoader from "@/components/BrandRevealLoader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CodingProfiles from "@/components/sections/CodingProfiles";
import WhyHireMe from "@/components/sections/WhyHireMe";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen pb-24">
      <BrandRevealLoader />
      <CustomCursor />
      <ScrollProgress />
      <BackgroundBlobs />
      <Navbar />
      <Hero />
      <About />
      <CodingProfiles />
      <WhyHireMe />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
