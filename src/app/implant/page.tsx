"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const COMPARISONS = [
    {
        situation: "歯が一本抜けた場合",
        conventional: {
            label: "ブリッジ",
            desc: "支台とするために、両隣りの歯を削らなければなりません。",
        },
        implant: "歯の抜けたところにインプラントを埋め込み、人工の歯を被せるので両隣りの歯を削ることがありません。",
    },
    {
        situation: "奥歯が数本抜けた場合",
        conventional: {
            label: "部分入れ歯",
            desc: "固定する金具などに異物感を感じたり、支えている歯に負担がかかることがあります。",
        },
        implant: "入れ歯を固定する金具がないので異物感がなく、他の歯に負担をかけません。",
    },
    {
        situation: "歯が全部抜けた場合",
        conventional: {
            label: "総入れ歯",
            desc: "入れ歯が口の中で動いてしまい、「噛みづらい」「話しづらい」などの不便さを感じることがあります。",
        },
        implant: "入れ歯をしっかりと固定できるので、食事や会話を気にせず楽しむことができます。",
    },
];

const PROS_CONS = [
    {
        title: "インプラント",
        pros: ["自分の歯と同じような感覚で食事や会話ができます。", "自然で見た目にもわからない歯になります。"],
        cons: ["保険が適用されません。", "手術が必要です。", "治療期間が短い場合で3ヶ月、長い場合で1年以上必要なこともあります。"],
        accent: "#2d7a5a",
        bg: "rgba(45,122,90,0.06)",
    },
    {
        title: "入れ歯",
        pros: ["保険での治療が可能です。（安価）", "ほとんどの場合、手術は必要ありません。"],
        cons: ["食事中や会話の最中に外れることがあります。", "食事のたびに取り外して洗う必要があります。", "顎が痩せると合わなくなり、痛みや違和感が生じます。"],
        accent: "#5a7a9a",
        bg: "rgba(90,122,154,0.06)",
    },
    {
        title: "ブリッジ",
        pros: ["保険での治療が可能なことが多いです。", "治療が比較的早く終わります。"],
        cons: ["健全な隣の歯を削らなければなりません。", "場合によっては神経の処置が必要です。", "保険適用の場合、見た目が劣ることがあります。"],
        accent: "#9a6a2d",
        bg: "rgba(154,106,45,0.06)",
    },
];

const RECOMMENDED = [
    "健康な歯を削るのがいやな方",
    "入れ歯が合わなくて悩んでいる方",
    "入れ歯ではなく、自然な歯並びを取り戻したい方",
];


export default function ImplantPage() {
    const [visible, setVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 80);
    }, []);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 640);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <main
            className="min-h-screen"
            style={{
                background: "linear-gradient(160deg, #eaf5f0 0%, #f4f8f4 40%, #e8f4f0 100%)",
                fontFamily: "'Noto Serif JP', serif",
                color: "#1a3028",
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
        .glass-card {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.9);
          border-radius: 8px;
          box-shadow: 0 4px 24px rgba(60,120,90,0.07);
        }
        .section-bar {
          width: 3px;
          height: 28px;
          background: linear-gradient(#4a9a70, #8dd4b0);
          border-radius: 2px;
          flex-shrink: 0;
        }
        .arrow-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px; height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4a9a70, #8dd4b0);
          color: white;
          font-size: 1rem;
          flex-shrink: 0;
        }
      `}</style>

            {/* ヒーロー */}
            <section style={{ padding: "60px 40px 48px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.78rem", letterSpacing: "0.35em", color: "#4a9a70", marginBottom: "10px" }}>IMPLANT</p>
                    <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 300, letterSpacing: "0.04em", lineHeight: 1.2, marginBottom: "20px" }}>
                        インプラント治療
                    </h1>
                    <p style={{ fontSize: "0.92rem", color: "#4a6058", lineHeight: 2, maxWidth: "560px" }}>
                        インプラントとは、歯がなくなった箇所の歯根にあたる部分に人工の歯根（フィクスチャー）を埋め込み、その上に人工の歯を被せる治療法です。
                        <br /><br />
                        インプラント治療のご相談は無料で承っています。
                        他院で骨が薄いからといって断られた方もご相談下さい。
                        (相談時間　30分～1時間)
                    </p>
                </div>
            </section>

            {/* サブページリンク */}
            <section style={{ padding: "0 40px 48px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.05s" }}>
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                        {[
                            { label: "治療の流れ", en: "FLOW", href: "/flow" },
                            { label: "料金", en: "PRICE", href: "/price" },
                            { label: "Q&A", en: "Q&A", href: "/qa" },
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                style={{
                                    flex: "0 0 calc((100% - 32px) / 3)",
                                    minWidth: "80px",
                                    maxWidth: "300px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    padding: "12px 8px 5px",
                                    background: "rgba(255,255,255,0.15)",
                                    backdropFilter: "blur(6px)",
                                    border: "1px solid rgba(74,154,112,0.5)",
                                    borderRadius: "8px",
                                    textDecoration: "none",
                                    boxShadow: "0 4px 16px rgba(60,120,90,0.07)",
                                }}
                                onMouseEnter={e => {
                                    const inner = e.currentTarget.querySelector(".link-inner") as HTMLElement;
                                    if (inner) inner.style.transform = "translateY(-3px)";
                                }}
                                onMouseLeave={e => {
                                    const inner = e.currentTarget.querySelector(".link-inner") as HTMLElement;
                                    if (inner) inner.style.transform = "translateY(0)";
                                }}
                            >
                                <span
                                    className="link-inner"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: "6px",
                                        transition: "transform 0.2s ease",
                                    }}
                                >
                                    <span style={{ fontSize: "0.68rem", letterSpacing: "0.25em", color: "#4a9a70" }}>{item.en}</span>
                                    <span style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)", fontWeight: 600, color: "#1a3028" }}>{item.label}</span>
                                    <span style={{ fontSize: "0.75rem", color: "#4a9a70" }}>→</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* こんな方にお勧め */}
            <section style={{ padding: "0 40px 72px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.1s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                        <div className="section-bar" />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em" }}>こんな方にお勧めします</h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                        {RECOMMENDED.map((item, i) => (
                            <div key={i} className="glass-card" style={{ padding: "18px 24px", display: "flex", alignItems: "center", gap: "16px" }}>
                                <div style={{
                                    width: "28px", height: "28px", borderRadius: "50%",
                                    background: "linear-gradient(135deg, #4a9a70, #8dd4b0)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "white", fontSize: "0.78rem", fontWeight: 600, flexShrink: 0
                                }}>
                                    {i + 1}
                                </div>
                                <p style={{ fontSize: "0.92rem", color: "#2a4a3a" }}>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 比較表 */}
            <section style={{ padding: "0 40px 72px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.2s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                        <div className="section-bar" />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em" }}>従来の治療法との比較</h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        {COMPARISONS.map((c, i) => (
                            <div key={i} className="glass-card" style={{ padding: "28px" }}>
                                <p style={{ fontSize: "0.78rem", letterSpacing: "0.2em", color: "#4a9a70", marginBottom: "16px" }}>{c.situation}</p>
                                <div style={{
                                    display: "grid",
                                    gridTemplateColumns: isMobile ? "1fr" : "1fr auto 1fr",
                                    gap: "16px",
                                    alignItems: "center",
                                }}>
                                    {/* 従来 */}
                                    <div style={{ background: "rgba(180,180,180,0.1)", borderRadius: "6px", padding: "16px 20px" }}>
                                        <p style={{ fontSize: "0.75rem", color: "#8a9e96", letterSpacing: "0.1em", marginBottom: "8px" }}>従来の治療法</p>
                                        <p style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: "8px", color: "#3a5a4a" }}>{c.conventional.label}</p>
                                        <p style={{ fontSize: "0.84rem", color: "#5a6e66", lineHeight: 1.8 }}>{c.conventional.desc}</p>
                                    </div>
                                    {/* 矢印 */}
                                    <div className="arrow-badge" style={{ margin: isMobile ? "0 auto" : undefined }}>
                                        {isMobile ? "↓" : "→"}
                                    </div>
                                    {/* インプラント */}
                                    <div style={{ background: "rgba(45,122,90,0.07)", borderRadius: "6px", padding: "16px 20px", borderLeft: "3px solid #4a9a70" }}>
                                        <p style={{ fontSize: "0.75rem", color: "#4a9a70", letterSpacing: "0.1em", marginBottom: "8px" }}>インプラント</p>
                                        <p style={{ fontSize: "0.84rem", color: "#2a4a3a", lineHeight: 1.8 }}>{c.implant}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 長所・欠点比較 */}
            <section style={{ padding: "0 40px 80px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.3s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                        <div className="section-bar" />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em" }}>各治療法の長所・欠点</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                        {PROS_CONS.map((item) => (
                            <div key={item.title} className="glass-card" style={{ padding: "28px", borderTop: `3px solid ${item.accent}` }}>
                                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "20px", color: item.accent }}>{item.title}</h3>
                                <div style={{ marginBottom: "16px" }}>
                                    <p style={{ fontSize: "0.72rem", letterSpacing: "0.15em", color: "#4a9a70", marginBottom: "10px" }}>長所</p>
                                    {item.pros.map((p, i) => (
                                        <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "8px", alignItems: "flex-start" }}>
                                            <span style={{ color: "#4a9a70", fontSize: "0.8rem", marginTop: "2px", flexShrink: 0 }}>✓</span>
                                            <p style={{ fontSize: "0.84rem", color: "#2a4a3a", lineHeight: 1.8 }}>{p}</p>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "16px" }}>
                                    <p style={{ fontSize: "0.72rem", letterSpacing: "0.15em", color: "#c0392b", marginBottom: "10px" }}>欠点</p>
                                    {item.cons.map((c, i) => (
                                        <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "8px", alignItems: "flex-start" }}>
                                            <span style={{ color: "#c0392b", fontSize: "0.8rem", marginTop: "2px", flexShrink: 0 }}>×</span>
                                            <p style={{ fontSize: "0.84rem", color: "#5a4a4a", lineHeight: 1.8 }}>{c}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 戻るリンク */}
            <div style={{ textAlign: "center", paddingBottom: "80px" }}>
                <Link href="/" style={{
                    display: "inline-block", fontSize: "0.85rem", letterSpacing: "0.12em",
                    color: "#4a9a70", textDecoration: "none",
                    borderBottom: "1px solid #4a9a70", paddingBottom: "2px"
                }}>← トップへ戻る</Link>
            </div>
        </main>
    );
}