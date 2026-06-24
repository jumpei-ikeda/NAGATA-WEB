"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const PRICES = [
    {
        title: "術前CT検査",
        detail: "",
        price: "¥12,000",
        unit: "",
    },
    {
        title: "インプラント埋入",
        detail: "",
        price: "¥210,000",
        unit: "/1歯",
    },
    {
        title: "2次手術もしくは仮歯装着",
        detail: "",
        price: "¥50,000",
        unit: "/1歯",
    },
    {
        title: "上部構造（かぶせ物）",
        detail: "E-max・メタルボンド・ジルコニア 他",
        price: "¥100,000〜",
        unit: "/1歯",
    },
];

const OPTIONS = [
    {
        title: "GBR",
        detail: "骨が薄くインプラントを入れられない方のために骨を作る処置",
        price: "+ ¥60,000",
        unit: "/1歯",
    },
];

const NOTES = [
    "記載料金はすべて消費税別での価格表示となっております。",
    "上記の他にも、骨が足りなくてインプラントの埋入が難しい症例への補助手術（ソケットプリザベーション、サイナスリフト他）や、全身疾患をお持ちの方や手術が不安な方にリラックスして手術を受けていただくための麻酔（静脈内鎮静法）も行っております。",
];

export default function PricePage() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 80);
    }, []);

    return (
        <main
            className="min-h-screen"
            style={{
                background: "var(--bg-gradient)",
                fontFamily: "'Noto Serif JP', serif",
                color: "#1a3028",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
        .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.in { opacity: 1; transform: translateY(0); }
        .glass-card {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.9);
          border-radius: 8px;
          box-shadow: 0 4px 24px rgba(60,120,90,0.07);
        }
        .section-bar {
          width: 3px; height: 28px;
          background: linear-gradient(#4a9a70, #8dd4b0);
          border-radius: 2px; flex-shrink: 0;
        }
        .price-row {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          padding: 20px 32px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          gap: 16px;
        }
        .price-row:last-child { border-bottom: none; }
      `}</style>

            {/* ヒーロー */}
            <section style={{ padding: "60px 40px 48px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.78rem", letterSpacing: "0.35em", color: "#4a9a70", marginBottom: "10px" }}>PRICE</p>
                    <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 300, letterSpacing: "0.04em", lineHeight: 1.2, marginBottom: "20px" }}>
                        インプラントの料金
                    </h1>
                    <p style={{ fontSize: "0.92rem", color: "#4a6058", lineHeight: 2 }}>
                        まずはお気軽にご相談ください。
                    </p>
                </div>
            </section>

            {/* 基本料金 */}
            <section style={{ padding: "0 40px 48px", maxWidth: "800px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.1s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                        <div className="section-bar" />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em" }}>基本料金</h2>
                    </div>
                    <div className="glass-card" style={{ overflow: "hidden" }}>
                        {/* テーブルヘッダー */}
                        <div style={{
                            display: "grid", gridTemplateColumns: "1fr auto",
                            padding: "12px 32px",
                            background: "linear-gradient(90deg, #3d8c62, #5aaa7a)",
                            color: "white", fontSize: "0.78rem", letterSpacing: "0.12em"
                        }}>
                            <span>治療内容</span>
                            <span>料金（税別）</span>
                        </div>
                        {PRICES.map((row, i) => (
                            <div key={i} className="price-row">
                                <div>
                                    <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#1a3028", marginBottom: row.detail ? "4px" : "0" }}>
                                        {row.title}
                                    </p>
                                    {row.detail && (
                                        <p style={{ fontSize: "0.78rem", color: "#7a8e86" }}>{row.detail}</p>
                                    )}
                                </div>
                                <div style={{ textAlign: "right" }}>
                                    <p style={{ fontSize: "1.3rem", color: "#2d7a5a", letterSpacing: "0.03em" }}>
                                        {row.price}
                                    </p>
                                    {row.unit && (
                                        <p style={{ fontSize: "0.72rem", color: "#7a8e86", marginTop: "2px" }}>{row.unit}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* オプション */}
            <section style={{ padding: "0 40px 48px", maxWidth: "800px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.2s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                        <div className="section-bar" />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em" }}>オプション補助手術</h2>
                    </div>
                    <div className="glass-card" style={{ overflow: "hidden" }}>
                        <div style={{
                            display: "grid", gridTemplateColumns: "1fr auto",
                            padding: "12px 32px",
                            background: "linear-gradient(90deg, #3d8c62, #5aaa7a)",
                            color: "white", fontSize: "0.78rem", letterSpacing: "0.12em"
                        }}>
                            <span>治療内容</span>
                            <span>料金（税別）</span>
                        </div>
                        {OPTIONS.map((row, i) => (
                            <div key={i} className="price-row">
                                <div>
                                    <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#1a3028", marginBottom: "4px" }}>
                                        {row.title}
                                    </p>
                                    <p style={{ fontSize: "0.82rem", color: "#5a7a6a", lineHeight: 1.8 }}>{row.detail}</p>
                                </div>
                                <div style={{ textAlign: "right" }}>
                                    <p style={{ fontSize: "1.3rem", color: "#2d7a5a", letterSpacing: "0.03em" }}>
                                        {row.price}
                                    </p>
                                    {row.unit && (
                                        <p style={{ fontSize: "0.72rem", color: "#7a8e86", marginTop: "2px" }}>{row.unit}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 注意事項 */}
            <section style={{ padding: "0 40px 80px", maxWidth: "800px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.3s" }}>
                    <div className="glass-card" style={{ padding: "28px 32px", borderLeft: "3px solid #4a9a70" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            {NOTES.map((note, i) => (
                                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                    <span style={{ color: "#4a9a70", fontSize: "0.82rem", flexShrink: 0, paddingTop: "2px" }}>※</span>
                                    <p style={{ fontSize: "0.84rem", color: "#4a6058", lineHeight: 1.9 }}>{note}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* リンク */}
            <div style={{ textAlign: "center", paddingBottom: "80px", display: "flex", justifyContent: "center", gap: "32px" }}>
                <Link href="/implant" style={{
                    fontSize: "0.85rem", letterSpacing: "0.12em",
                    color: "#4a9a70", textDecoration: "none",
                    borderBottom: "1px solid #4a9a70", paddingBottom: "2px"
                }}>← インプラントへ戻る</Link>
                <Link href="/" style={{
                    fontSize: "0.85rem", letterSpacing: "0.12em",
                    color: "#4a9a70", textDecoration: "none",
                    borderBottom: "1px solid #4a9a70", paddingBottom: "2px"
                }}>← トップへ戻る</Link>
            </div>
        </main>
    );
}