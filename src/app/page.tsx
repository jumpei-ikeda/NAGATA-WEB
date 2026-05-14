import BackgroundSlider from "./components/BackgroundSlider";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundSlider />

      <main className="relative z-10 p-8 flex flex-col items-center gap-12">
        <section className="text-center max-w-3xl bg-white/70 backdrop-blur rounded-lg shadow p-6 w-full">
          <h2 className="text-2xl font-medium tracking-wide text-[#5d4037]">
            永田歯科へようこそ
          </h2>
          <p className="text-lg text-[#5d4037]">
            トップページ本文をここに入れてください。
          </p>
        </section>
      </main>
    </div>
  );
}