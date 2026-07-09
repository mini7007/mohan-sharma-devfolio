import Navbar from "@/components/Navbar";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import CinematicLoader from "@/components/CinematicLoader";
import LivingEnvironment from "@/components/LivingEnvironment";
import RecruiterModeToggle from "@/components/RecruiterModeToggle";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import { Mascot } from "@/components/Mascot";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CodingProfiles from "@/components/sections/CodingProfiles";
import WhyHireMe from "@/components/sections/WhyHireMe";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import MusicSection from "@/components/MusicSection";
import { DeveloperModeProvider } from "@/components/dev/DeveloperModeContext";
import { RecruiterModeProvider } from "@/hooks/useRecruiterMode";
import DevInsights from "@/components/dev/DevInsights";
import Footer from "@/components/Footer";
import OfflineExperienceGate from "@/components/offline/OfflineExperienceGate";

export default function Home() {
  return (
    <DeveloperModeProvider>
      <RecruiterModeProvider>
        <OfflineExperienceGate>
          <main className="min-h-screen w-full max-w-full overflow-x-hidden pb-24">
            <CinematicLoader />
            <LivingEnvironment />
            <CustomCursor />
            <ScrollProgress />
            <BackgroundBlobs />
            <Mascot />
            <RecruiterModeToggle />
            <Navbar />
            <Hero />
            <About />
            <CodingProfiles />
            <WhyHireMe />
            <TechStack />
            <Projects />
            <MusicSection />
            <Contact />
            <Experience />
            <Footer />
            <DevInsights />
          </main>
        </OfflineExperienceGate>
      </RecruiterModeProvider>
    </DeveloperModeProvider>
  );
}
