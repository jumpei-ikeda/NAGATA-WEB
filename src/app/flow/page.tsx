"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const STEPS = [
    {
        step: 1,
        title: "カウンセリング",
        desc: "治療についてのおおまかな説明を、クリニカルコーディネーターもしくは院長が行います。このカウンセリングに関しては、料金は無料になります。",
        icon: "💬",
        note: "無料",
    },
    {
        step: 2,
        title: "術前の診査",
        desc: "レントゲンの撮影、スタディーモデルの採取、CTの撮影をし解析した上で診療の計画をたてます。さらにその後、もう一度、治療手順・料金の説明を改めていたします。",
        icon: "🔬",
        note: null,
    },
    {
        step: 3,
        title: "インプラント手術",
        desc: "歯が抜けた所へインプラントを埋入した後、あごの骨にしっかりと固定されるまで、3〜6ヶ月待ちます。",
        icon: "🦷",
        note: "術後3〜6ヶ月",
    },
    {
        step: 4,
        title: "完了",
        desc: "インプラント治療後は、アフターケアとして正しいブラッシングを行うとともに、3ヶ月に1回は定期検診を受けて下さい。",
        icon: "✅",
        note: "3ヶ月ごとに定期検診",
    },
];

export default function FlowPage() {
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
      `}</style>

            {/* ヒーロー */}
            <section style={{ padding: "60px 40px 48px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.78rem", letterSpacing: "0.35em", color: "#4a9a70", marginBottom: "10px" }}>FLOW</p>
                    <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 300, letterSpacing: "0.04em", lineHeight: 1.2, marginBottom: "20px" }}>
                        インプラント治療の流れ
                    </h1>
                    <p style={{ fontSize: "0.92rem", color: "#4a6058", lineHeight: 2, maxWidth: "620px" }}>
                        初めての方も安心して受けていただけるよう、丁寧にご説明しながら進めます。
                    </p>
                </div>
            </section>

            {/* ステップ */}
            <section style={{ padding: "0 40px 100px", maxWidth: "800px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.1s" }}>
                    <div style={{ position: "relative" }}>
                        {/* 縦線 */}
                        <div style={{
                            position: "absolute",
                            left: "35px",
                            top: "60px",
                            bottom: "60px",
                            width: "2px",
                            background: "linear-gradient(#4a9a70, #8dd4b0)",
                            borderRadius: "1px",
                            zIndex: 0,
                        }} />

                        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                            {STEPS.map((s, i) => (
                                <div
                                    key={s.step}
                                    className="fade-up in"
                                    style={{
                                        display: "flex", gap: "24px", alignItems: "flex-start",
                                        transitionDelay: `${0.15 + i * 0.1}s`,
                                        position: "relative", zIndex: 1,
                                    }}
                                >
                                    {/* ステップ番号 */}
                                    <div style={{
                                        width: "72px", height: "72px", borderRadius: "50%", flexShrink: 0,
                                        background: "linear-gradient(135deg, #3d8c62, #5aaa7a)",
                                        display: "flex", flexDirection: "column",
                                        alignItems: "center", justifyContent: "center",
                                        boxShadow: "0 4px 16px rgba(45,122,90,0.25)",
                                    }}>
                                        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.6rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.15em" }}>STEP</span>
                                        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: "white", lineHeight: 1 }}>{s.step}</span>
                                    </div>

                                    {/* カード */}
                                    <div className="glass-card" style={{ flex: 1, padding: "24px 28px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                                            <span style={{ fontSize: "1.4rem" }}>{s.icon}</span>
                                            <h3 style={{ fontSize: "1.05rem", fontWeight: 600, letterSpacing: "0.05em" }}>{s.title}</h3>
                                            {s.note && (
                                                <span style={{
                                                    marginLeft: "auto",
                                                    fontSize: "0.72rem", letterSpacing: "0.08em",
                                                    padding: "3px 12px", borderRadius: "20px",
                                                    background: "rgba(74,154,112,0.12)",
                                                    color: "#2d7a5a",
                                                    whiteSpace: "nowrap",
                                                }}>{s.note}</span>
                                            )}
                                        </div>
                                        <p style={{ fontSize: "0.88rem", color: "#4a6058", lineHeight: 2 }}>{s.desc}</p>
                                    </div>
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