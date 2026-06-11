"use client";
import { useEffect, useState } from "react";

export default function BackgroundSlider() {
    const images = [
        "/images/bg/外観.jpeg",
        "/images/bg/受付.jpg",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ position: "relative", width: "100%" }}>
            {images.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt="background"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        position: i === 0 ? "relative" : "absolute",
                        top: 0,
                        left: 0,
                        opacity: index === i ? 1 : 0,
                        transition: "opacity 1s ease-in-out",
                    }}
                />
            ))}
        </div>
    );
}