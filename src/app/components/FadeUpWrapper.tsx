"use client";
import { useEffect, useState } from "react";

export default function FadeUpWrapper({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), delay);
        return () => clearTimeout(t);
    }, [delay]);

    return (
        <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
            {children}
        </div>
    );
}