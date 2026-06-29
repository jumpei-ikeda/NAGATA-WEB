"use client";
import { useEffect, useState } from "react";
import BackgroundSlider from "./BackgroundSlider";

export default function HeroSection() {
    const [visible, setVisible] = useState(false);
    const [imgHeight, setImgHeight] = useState(400);

    useEffect(() => {
        setTimeout(() => setVisible(true), 80);
    }, []);

    const heightScale = Math.max(0.7, Math.min(1.2, imgHeight / 600));

    return (
        <>
            <style>{`
        .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.in { opacity: 1; transform: translateY(0); }
      `}</style>

            <section className="relative w-full hero-section" style={{
                marginLeft: "var(--side-gap)",
                marginRight: "var(--side-gap)",
                width: "calc(100% - var(--side-gap) * 2)",
                maxHeight: "600px",
                overflow: "hidden",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
            }}>
                <BackgroundSlider onHeightChange={setImgHeight} />

                <div className="absolute inset-0" style={{
                    background: "linear-gradient(to top, rgba(10,30,20,0.35) 0%, rgba(10,30,20,0.1) 50%, transparent 100%)",
                }} />
                <a
                    href="tel:03-6410-8018"
                className="absolute"
                style={{
                    top: "clamp(44px, 11vw, 400px)",
                    right: "clamp(1px, 4.5vw, 200px)",
                    background: "rgba(153, 154, 200, 0.21)",
                    backdropFilter: "blur(2px)",
                    border: "1px solid rgba(255, 255, 255, 0.04)",
                    borderRadius: "50px",
                    padding: "8px 4px",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4px",
                }}
                >
                <span style={{
                    fontSize: "clamp(0.5rem, 2.6vw, 1.7rem)",
                    letterSpacing: "0.15em",
                    color: "rgb(255, 255, 255)",
                }}>
                    ご予約・お問い合わせ
                </span>
            </a>
                <div
                    className={`fade-up ${visible ? "in" : ""} absolute`}
                    style={{
                        bottom: `calc(clamp(32px, 6vw, 72px) * ${heightScale})`,
                        left: "clamp(24px, 6vw, 80px)",
                    }}
                >
                    <p style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: `calc(clamp(0.85rem, 3vw, 3rem) * ${heightScale})`,
                        letterSpacing: "0.35em",
                        color: "#8dd4b0",
                        marginBottom: `calc(clamp(1px, 1vw, 12px) * ${heightScale})`,
                    }}>
                        NAGATA DENTAL CLINIC
                    </p>
                    <h1 style={{
                        fontFamily: "'Noto Serif JP', serif",
                        fontSize: `calc(clamp(1.9rem, 7vw, 9.2rem) * ${heightScale})`,
                        fontWeight: 400,
                        letterSpacing: "0.08em",
                        lineHeight: 1.6,
                        color: "#ffffff",
                        marginBottom: `calc(clamp(10px, 1.5vw, 20px) * ${heightScale})`,
                    }}>
                        優しく、<br />
                        より美しく
                    </h1>
                    <p style={{
                        fontSize: `calc(clamp(0.7rem, 3vw, 1.8rem) * ${heightScale})`,
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 2,
                    }}>
                        みなさまの歯の健康を<br />
                        丁寧にサポートいたします。
                    </p>
                </div>
            </section>
        </>
    );
}