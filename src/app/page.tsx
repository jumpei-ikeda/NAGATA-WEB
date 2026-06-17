import NewsSection from "./components/NewsSection";
import HeroSection from "./components/HeroSection";
import SedationSection from "./components/SedationSection";
import FadeUpWrapper from "./components/FadeUpWrapper";
import CTSection from "./components/CTSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main
        className="relative p-8 flex flex-col items-center gap-12"
        style={{
          background: "linear-gradient(160deg, #eaf5f0 0%, #f4f8f4 40%, #e8f4f0 100%)",
          marginLeft: "var(--side-gap)",
          marginRight: "var(--side-gap)",
        }}
      >
        <FadeUpWrapper delay={200}>
          <NewsSection />
        </FadeUpWrapper>
        <FadeUpWrapper delay={350}>
          <SedationSection />
        </FadeUpWrapper>
        <FadeUpWrapper delay={500}>
          <CTSection />
        </FadeUpWrapper>
      </main>
    </>
  );
}