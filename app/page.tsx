import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import HowItWorks from "@/components/home/HowItWorks";
import Therapists from "@/components/home/Therapists";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import EsaInfo from "@/components/home/EsaInfo";
import About from "@/components/home/About";
import Comparison from "@/components/home/Comparison";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Therapists />
        <WhyChooseUs />
        <Testimonials />
        <EsaInfo />
        <About />
        <Comparison />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
