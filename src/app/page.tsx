import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import YogicLifestyle from "@/components/YogicLifestyle";
import HealthyHabits from "@/components/HealthyHabits";
import Dinacharya from "@/components/Dinacharya";
import TwentyOneDays from "@/components/TwentyOneDays";
import Benefits from "@/components/Benefits";
import KnowledgeFeature from "@/components/KnowledgeFeature";
import Awards from "@/components/Awards";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Services />
        <Philosophy />
        <YogicLifestyle />
        <HealthyHabits />
        <Dinacharya />
        <TwentyOneDays />
        <Benefits />
        <KnowledgeFeature />
        <Awards />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
