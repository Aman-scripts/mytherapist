import dynamic from "next/dynamic";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Footer from "@/components/home/Footer";

const HowItWorks = dynamic(() => import("@/components/home/HowItWorks"), {
  loading: () => <div className="min-h-[480px]" aria-hidden />,
});
const Therapists = dynamic(() => import("@/components/home/Therapists"), {
  loading: () => <div className="min-h-[520px]" aria-hidden />,
});
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"), {
  loading: () => <div className="min-h-[480px]" aria-hidden />,
});
const VideoTestimonials = dynamic(
  () => import("@/components/home/VideoTestimonials"),
  { loading: () => <div className="min-h-[320px]" aria-hidden /> }
);
const Testimonials = dynamic(() => import("@/components/home/Testimonials"), {
  loading: () => <div className="min-h-[400px]" aria-hidden />,
});
const EsaInfo = dynamic(() => import("@/components/home/EsaInfo"), {
  loading: () => <div className="min-h-[480px]" aria-hidden />,
});
const About = dynamic(() => import("@/components/home/About"), {
  loading: () => <div className="min-h-[400px]" aria-hidden />,
});
const Comparison = dynamic(() => import("@/components/home/Comparison"), {
  loading: () => <div className="min-h-[360px]" aria-hidden />,
});
const FAQ = dynamic(() => import("@/components/home/FAQ"), {
  loading: () => <div className="min-h-[400px]" aria-hidden />,
});

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
        <HowItWorks />
        <Therapists />
        <WhyChooseUs />
        <VideoTestimonials />
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
