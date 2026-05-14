"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function BackgroundSlider() {
    const images = [
        "/images/bg/pig.jpg",
        "/images/bg/hipo.jpg",
        "/images/bg/octopas.jpg",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden bg-[#f7f3e8]">
            {images.map((src, i) => (
                <Image
                    key={i}
                    src={src}
                    alt="background"
                    fill
                    sizes="100vw"
                    className={`object-cover transition-opacity duration-1000 ease-in-out ${index === i ? "opacity-100" : "opacity-0"}`}
                    style={{ objectPosition: "center", backgroundColor: "#f7f3e8" }}
                    priority
                />
            ))}
        </div>
    );
}