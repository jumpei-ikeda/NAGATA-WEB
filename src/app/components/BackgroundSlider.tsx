"use client";
import { useEffect, useState } from "react";

export default function BackgroundSlider({ onHeightChange }: { onHeightChange?: (h: number) => void }) {
    const images = [
        "/images/bg/外観.jpeg",
        "/images/bg/受付.jpg",
    ];

    const [index, setIndex] = useState(0);
    const [firstHeight, setFirstHeight] = useState<number | null>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5500);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <style>{`
                @keyframes zoom-out {
                    from { transform: scale(1.08); }
                    to   { transform: scale(1.0); }
                }
            `}</style>
            <div style={{ position: "relative", width: "100%", height: firstHeight ?? "auto", overflow: "hidden" }}>
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt="background"
                        onLoad={(e) => {
                            if (i === 0) {
                                const h = (e.target as HTMLImageElement).offsetHeight;
                                setFirstHeight(h);
                                onHeightChange?.(h);
                            }
                        }}
                        style={{
                            width: "100%",
                            height: firstHeight ? "100%" : "auto",
                            objectFit: "cover",
                            display: "block",
                            position: firstHeight ? "absolute" : (i === 0 ? "relative" : "absolute"),
                            top: 0,
                            left: 0,
                            opacity: index === i ? 1 : 0,
                            transition: "opacity 1s ease-in-out",
                            animation: index === i ? "zoom-out 6s ease-out forwards" : "none",
                            transformOrigin: "center center",
                        }}
                    />
                ))}
            </div>
        </>
    );
}