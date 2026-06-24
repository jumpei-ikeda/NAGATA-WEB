import NewsSection from "./components/NewsSection";
import HeroSection from "./components/HeroSection";
import SedationSection from "./components/SedationSection";
import FadeUpWrapper from "./components/FadeUpWrapper";
import CTSection from "./components/CTSection";
import SecondOpinionSection from "./components/SecondOpinionSection";
import HomeVisitSection from "./components/HomeVisitSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main
        className="relative p-8 flex flex-col items-center gap-12"
        style={{
          background: "var(--bg-gradient)",
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
        <FadeUpWrapper delay={650}>
          <SecondOpinionSection />
        </FadeUpWrapper>
        <FadeUpWrapper delay={800}>
          <HomeVisitSection />
        </FadeUpWrapper>
      </main>
    </>
  );
}