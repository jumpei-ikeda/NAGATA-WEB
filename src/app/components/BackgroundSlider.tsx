"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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
        // ★ absolute をやめる
        <div className="relative w-full h-full overflow-hidden">
            {images.map((src, i) => (
                <Image
                    key={i}
                    src={src}
                    alt="background"
                    fill
                    sizes="60vw"
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className={`
        transition-opacity
        duration-1000
        ease-in-out
        ${index === i ? "opacity-100" : "opacity-0"}
    `}
                    priority
                />
            ))}
        </div>
    );
}