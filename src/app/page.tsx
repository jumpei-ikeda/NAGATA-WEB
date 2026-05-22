import BackgroundSlider from "./components/BackgroundSlider";

export default function Home() {
  return (
    <>
    
      {/* ヒーロー部分 */}
      <section className="relative w-full overflow-hidden aspect-[16/9] min-h-[400px] max-h-[700px]">

        {/* 写真の表示窓 */}
        <div className="absolute inset-0 flex justify-center">
          <div
            className="
            relative h-full w-full overflow-hidden
            max-w-[calc(100vw-(var(--side-gap)*2))]
            "
          >
            <BackgroundSlider />
          </div>
        </div>
        
      </section>
      {/* 本文 */}
      <main className="relative p-8 flex flex-col items-center gap-12" style={{ background: "linear-gradient(160deg, #eaf5f0 0%, #f4f8f4 40%, #e8f4f0 100%)" }}>
        <section className="max-w-3xl">
          本文エリア。どれだけ伸びてもOK。
        </section>
      </main>
    </>
  );
}