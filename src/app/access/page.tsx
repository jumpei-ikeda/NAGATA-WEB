"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AccessPage() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 80);
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
        .info-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          font-size: 0.9rem;
          line-height: 1.9;
        }
        .info-row:last-child {
          border-bottom: none;
        }
        .info-label {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          color: #4a9a70;
          min-width: 80px;
          padding-top: 3px;
        }
      `}</style>

            <div style={{ height: "var(--header-height, 72px)" }} />

            {/* ヒーロー */}
            <section style={{ padding: "60px 40px 48px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.78rem", letterSpacing: "0.35em", color: "#4a9a70", marginBottom: "10px" }}>ACCESS</p>
                    <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 300, letterSpacing: "0.04em", lineHeight: 1.2, marginBottom: "20px" }}>
                        アクセス
                    </h1>
                    <p style={{ fontSize: "0.92rem", color: "#4a6058", lineHeight: 2 }}>
                        品川駅・川崎駅・羽田空港駅から約15分。<br />
                        京浜急行「梅屋敷」駅より徒歩2分です。
                    </p>
                </div>
            </section>

            {/* 地図 + 情報 */}
            <section style={{ padding: "0 40px 80px", maxWidth: "1100px", margin: "0 auto" }}>
                <div
                    className={`fade-up ${visible ? "in" : ""}`}
                    style={{
                        transitionDelay: "0.1s",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "32px",
                        alignItems: "start",
                    }}
                >
                    {/* 地図 */}
                    <div className="glass-card" style={{ overflow: "hidden" }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3245.386436887399!2d139.7266424!3d35.5688526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60186053cb0f1f3d%3A0x968bf7a183f3eb67!2z5rC455Sw5q2v56eR5Yy76Zmi!5e0!3m2!1sja!2sjp!4v1778672532128!5m2!1sja!2sjp"
                            width="100%"
                            height="360"
                            style={{ border: 0, display: "block" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="永田歯科医院 地図"
                        />
                        <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                            <a
                                href="https://maps.app.goo.gl/u4ohMiy1UDkPB31W8"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex", alignItems: "center", gap: "6px",
                                    fontSize: "0.82rem", color: "#4a9a70", textDecoration: "none",
                                    borderBottom: "1px solid #4a9a70", paddingBottom: "1px"
                                }}
                            >
                                Google マップで開く →
                            </a>
                        </div>
                    </div>

                    {/* 情報 */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        {/* 住所・連絡先 */}
                        <div className="glass-card" style={{ padding: "28px 32px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                                <div className="section-bar" />
                                <h2 style={{ fontSize: "1rem", letterSpacing: "0.15em" }}>クリニック情報</h2>
                            </div>
                            <div className="info-row">
                                <span className="info-label">医院名</span>
                                <span style={{ color: "#1a3028", fontWeight: 600 }}>永田歯科医院</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">住所</span>
                                <span style={{ color: "#3a5a4a" }}>
                                    〒143-0015<br />
                                    東京都大田区大森西6-17-1<br />
                                    4th-one
                                </span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">TEL</span>
                                <a href="tel:0364108008" style={{ color: "#2d7a5a", textDecoration: "none", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", letterSpacing: "0.05em" }}>
                                    03-6410-8008
                                </a>
                            </div>
                        </div>

                        {/* アクセス */}
                        <div className="glass-card" style={{ padding: "28px 32px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                                <div className="section-bar" />
                                <h2 style={{ fontSize: "1rem", letterSpacing: "0.15em" }}>交通アクセス</h2>
                            </div>
                            <div className="info-row">
                                <span className="info-label">最寄り駅</span>
                                <span style={{ color: "#3a5a4a" }}>
                                    京浜急行「梅屋敷」駅<br />
                                    <span style={{ fontSize: "0.85rem", color: "#4a9a70" }}>徒歩2分</span>
                                </span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">周辺駅</span>
                                <span style={{ color: "#3a5a4a", fontSize: "0.87rem" }}>
                                    品川駅・川崎駅・羽田空港駅から約15分
                                </span>
                            </div>
                        </div>
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