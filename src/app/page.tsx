"use client";
import { useEffect, useState } from "react";
import BackgroundSlider from "./components/BackgroundSlider";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);
  return (
    <>
      <style>{`
        .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.in { opacity: 1; transform: translateY(0); }
      `}</style>
    
      {/* ヒーロー部分 */}
      <section className="relative w-full flex" style={{ marginTop: "calc(-1 * var(--header-height) + 120px)" }}>

        {/* 2カラムレイアウト */}
        <div className="relative flex w-full" style={{
          left: "var(--side-gap)",
          right: "var(--side-gap)",
          width: "calc(100% - var(--side-gap) * 2)"
        }}>

          {/* 左半分：キャッチコピー */}
          <div
            className={`fade-up ${visible ? "in" : ""} relative z-10 flex flex-col justify-center`}
            style={{
              width: "35%",
              padding: "clamp(24px, 4vw, 60px)",
              background: "linear-gradient(to right, #ffffff 60%, rgba(255,255,255,0) 100%)",
            }}
          >
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(0.6rem, 1vw, 0.8rem)",
              letterSpacing: "0.35em",
              color: "#4a9a70",
              marginBottom: "clamp(6px, 1vw, 12px)"
            }}>
              NAGATA DENTAL CLINIC
            </p>
            <h1 style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "clamp(1.2rem, 3vw, 2.6rem)",
              fontWeight: 400,
              letterSpacing: "0.08em",
              lineHeight: 1.6,
              color: "#1a3028",
              marginBottom: "clamp(12px, 2vw, 28px)"
            }}>
              優しく、<br />
              より美しく
            </h1>
            <p style={{
              fontSize: "clamp(0.65rem, 1.1vw, 0.88rem)",
              color: "#4a6058",
              lineHeight: 2,
              maxWidth: "320px"
            }}>
              みなさまの歯の健康を<br />
              丁寧にサポートいたします。
            </p>

            {/* 区切り線 */}
            <div style={{
              width: "clamp(24px, 3vw, 40px)",
              height: "1px",
              background: "#4a9a70",
              margin: "clamp(12px, 2vw, 24px) 0"
            }} />

            {/* 統計 */}
            <div style={{ display: "flex", gap: "clamp(12px, 2.5vw, 32px)" }}>
              {[["30年+", "地域の信頼"], ["丁寧", "な診療"], ["安心", "の環境"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(0.9rem, 1.8vw, 1.5rem)",
                    color: "#2d7a5a",
                    fontWeight: 400
                  }}>{num}</div>
                  <div style={{
                    fontSize: "clamp(0.55rem, 0.9vw, 0.72rem)",
                    color: "#7a9e8c",
                    letterSpacing: "0.05em",
                    marginTop: "2px"
                  }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 右半分：写真スライダー */}
          <div
            className={`fade-up ${visible ? "in" : ""} relative overflow-hidden`}
            style={{
              width: "65%",
              height: "100%",
              paddingRight: "clamp(8px, 2vw, 24px)",
              paddingTop: "clamp(8px, 4vw, 50px)",
              maxHeight: "400px",
              transitionDelay: "0.15s"
            }}
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