"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const MAIN_SERVICES = [
    {
        title: "小児歯科",
        en: "Pediatric Dentistry",
        icon: "👶",
        desc: "お子さまの成長に合わせた予防・治療を行います。歯を怖がらないよう、やさしい雰囲気で対応します。",
    },
    {
        title: "矯正歯科",
        en: "Orthodontics",
        icon: "😁",
        desc: "ワイヤー・マウスピース矯正で美しい歯並びへ。成人・小児どちらにも対応しています。",
    },
    {
        title: "口腔外科",
        en: "Oral Surgery",
        icon: "🔬",
        desc: "親知らずの抜歯や口腔内の外科的処置を安全・丁寧に行います。",
    },
    {
        title: "歯科",
        en: "General Dentistry",
        icon: "🦷",
        desc: "虫歯・歯周病の治療から定期健診まで、幅広く対応します。",
    },
];

const OTHER_SERVICES = [
    {
        title: "ホワイトニング",
        en: "Whitening",
        icon: "✨",
        desc: "歯本来の白さを取り戻す施術です。オフィスホワイトニング・ホームホワイトニングをご用意しています。",
    },
    {
        title: "訪問診療",
        en: "Home Visit",
        icon: "🏠",
        desc: "通院が難しい方のご自宅や施設へ歯科医師が伺います。お気軽にご相談ください。",
    },
    {
        title: "DNA採取",
        en: "DNA Collection",
        icon: "🧬",
        desc: "遺伝情報を活用した予防歯科・リスク評価に対応しています。",
    },
];

const DAYS = ["月", "火", "水", "木", "金", "土", "日/祝"];
const HOURS = [
    {
        label: "午前　9:30〜12:30",
        values: ["○", "○", "○", "○", "○", "○", "—"],
    },
    {
        label: "午後　14:00〜19:30",
        values: ["○", "○", "○", "○", "○", "△", "—"],
    },
];

export default function ServicesPage() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => setVisible(true), 80);
    }, []);

    return (
        <main
            className="min-h-screen"
            style={{
                background: "linear-gradient(160deg, #eaf5f0 0%, #f4f8f4 40%, #e8f4f0 100%)",
                fontFamily: "'Noto Serif JP', serif",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');

        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-up.in {
          opacity: 1;
          transform: translateY(0);
        }
        .card-service {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.9);
          border-radius: 8px;
          padding: 32px 28px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card-service:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(60,120,90,0.10);
        }
        .tag-circle {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #b8e8d0, #d4f0e4);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 16px;
        }
        .hours-cell {
          text-align: center;
          padding: 14px 8px;
          font-size: 0.95rem;
          border-bottom: 1px solid #ddeee6;
        }
        .hours-cell.green { color: #2d7a5a; font-weight: 600; }
        .hours-cell.gray { color: #aaa; }
        .hours-cell.tri { color: #e07a30; font-weight: 600; }
      `}</style>

            {/* ヒーロー */}
            <section style={{ padding: "60px 40px 48px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`}>
                    <p style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "0.78rem", letterSpacing: "0.35em",
                        color: "#4a9a70", marginBottom: "10px"
                    }}>SERVICES</p>
                    <h1 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(2rem, 5vw, 3.4rem)",
                        fontWeight: 300, letterSpacing: "0.04em",
                        color: "#1a3028", lineHeight: 1.2, marginBottom: "20px"
                    }}>診療内容</h1>
                    <p style={{ fontSize: "0.92rem", color: "#4a6058", lineHeight: 2, maxWidth: "520px" }}>
                        地域の皆さまの健康を守るため、幅広い診療に対応しています。<br />
                        お気軽にご相談ください。
                    </p>
                </div>
            </section>

            {/* 診療科目 */}
            <section style={{ padding: "0 40px 80px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.1s" }}>
                    <div style={{
                        display: "flex", alignItems: "center", gap: "16px",
                        marginBottom: "32px"
                    }}>
                        <div style={{ width: "3px", height: "28px", background: "linear-gradient(#4a9a70, #8dd4b0)", borderRadius: "2px" }} />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em", color: "#1a3028" }}>診療科目</h2>
                    </div>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "20px"
                    }}>
                        {MAIN_SERVICES.map((s, i) => (
                            <div key={s.title} className="card-service fade-up in" style={{ transitionDelay: `${0.15 + i * 0.07}s` }}>
                                <div className="tag-circle">{s.icon}</div>
                                <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", color: "#4a9a70", marginBottom: "6px" }}>{s.en}</p>
                                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "12px", color: "#1a3028" }}>{s.title}</h3>
                                <p style={{ fontSize: "0.85rem", color: "#5a6e66", lineHeight: 1.9 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* その他 */}
            <section style={{ padding: "0 40px 80px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.3s" }}>
                    <div style={{
                        display: "flex", alignItems: "center", gap: "16px",
                        marginBottom: "32px"
                    }}>
                        <div style={{ width: "3px", height: "28px", background: "linear-gradient(#4a9a70, #8dd4b0)", borderRadius: "2px" }} />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em", color: "#1a3028" }}>その他</h2>
                    </div>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "20px"
                    }}>
                        {OTHER_SERVICES.map((s, i) => (
                            <div key={s.title} className="card-service" style={{ transitionDelay: `${0.35 + i * 0.07}s` }}>
                                <div className="tag-circle">{s.icon}</div>
                                <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", color: "#4a9a70", marginBottom: "6px" }}>{s.en}</p>
                                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "12px", color: "#1a3028" }}>{s.title}</h3>
                                <p style={{ fontSize: "0.85rem", color: "#5a6e66", lineHeight: 1.9 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 診療時間 */}
            <section style={{ padding: "0 40px 100px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.5s" }}>
                    <div style={{
                        display: "flex", alignItems: "center", gap: "16px",
                        marginBottom: "32px"
                    }}>
                        <div style={{ width: "3px", height: "28px", background: "linear-gradient(#4a9a70, #8dd4b0)", borderRadius: "2px" }} />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em", color: "#1a3028" }}>診療時間</h2>
                    </div>

                    <div style={{
                        background: "rgba(255,255,255,0.75)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.9)",
                        borderRadius: "8px",
                        overflow: "hidden",
                        boxShadow: "0 4px 24px rgba(60,120,90,0.07)"
                    }}>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr style={{ background: "linear-gradient(90deg, #3d8c62, #5aaa7a)" }}>
                                    <th style={{ padding: "14px 20px", textAlign: "left", color: "white", fontSize: "0.85rem", fontWeight: 400, letterSpacing: "0.08em", width: "220px" }}>
                                        時間帯
                                    </th>
                                    {DAYS.map(d => (
                                        <th key={d} style={{
                                            padding: "14px 8px", textAlign: "center",
                                            color: d === "日/祝" ? "#ffd4d4" : "white",
                                            fontSize: "0.85rem", fontWeight: 400
                                        }}>{d}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {HOURS.map((row, ri) => (
                                    <tr key={ri} style={{ background: ri % 2 === 0 ? "rgba(240,250,245,0.6)" : "transparent" }}>
                                        <td style={{ padding: "14px 20px", fontSize: "0.85rem", color: "#3a5a4a", borderBottom: "1px solid #ddeee6" }}>
                                            {row.label}
                                        </td>
                                        {row.values.map((v, vi) => (
                                            <td key={vi} className={`hours-cell ${v === "○" ? "green" : v === "△" ? "tri" : "gray"}`}>
                                                {v}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <p style={{ fontSize: "0.82rem", color: "#7a8e86" }}>※ 日曜・祝日　休診</p>
                        <p style={{ fontSize: "0.82rem", color: "#e07a30" }}>△ 土曜午後は18:00までとなります</p>
                    </div>
                </div>
            </section>

            {/* 戻るリンク */}
            <div style={{ textAlign: "center", paddingBottom: "80px" }}>
                <Link href="/" style={{
                    display: "inline-block",
                    fontSize: "0.85rem", letterSpacing: "0.12em",
                    color: "#4a9a70", textDecoration: "none",
                    borderBottom: "1px solid #4a9a70",
                    paddingBottom: "2px",
                    transition: "opacity 0.2s"
                }}>← トップへ戻る</Link>
            </div>
        </main>
    );
}