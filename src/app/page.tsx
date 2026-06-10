import NewsSection from "./components/NewsSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main
        className="relative p-8 flex flex-col items-center gap-12"
        style={{ background: "linear-gradient(160deg, #eaf5f0 0%, #f4f8f4 40%, #e8f4f0 100%)" }}
      >
        <NewsSection />
      </main>
    </>
  );
}