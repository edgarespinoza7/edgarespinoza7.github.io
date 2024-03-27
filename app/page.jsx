import About from "@/components/About";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Cta from "@/components/ui/Cta";
import Services from "@/components/ui/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      {/* <Reviews /> */}
      <Cta />
    </main>
  );
}
