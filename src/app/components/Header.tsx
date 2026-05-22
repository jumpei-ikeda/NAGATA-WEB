"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [pressedIndex, setPressedIndex] = useState<number | null>(null);
    const [releasingIndex, setReleasingIndex] = useState<number | null>(null);
    const router = useRouter();
    const [scrolled, setScrolled] = useState<boolean | null>(null);
    const [headerBottom, setHeaderBottom] = useState<number | null>(null);
    const headerRef = useRef<HTMLElement>(null);
    const [implantHover, setImplantHover] = useState(false);
    const [implantLeft, setImplantLeft] = useState(0);
    const implantRef = useRef<HTMLDivElement>(null);
    

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const updatePositions = () => {
            if (headerRef.current) {
                setHeaderBottom(headerRef.current.getBoundingClientRect().bottom);
            }
            if (implantRef.current) {
                setImplantLeft(implantRef.current.getBoundingClientRect().left);
            }
        };
        updatePositions();
        window.addEventListener("resize", updatePositions);
        window.addEventListener("scroll", updatePositions);
        return () => {
            window.removeEventListener("resize", updatePositions);
            window.removeEventListener("scroll", updatePositions);
        };
    }, []);

    useEffect(() => {
        if (implantRef.current) {
            setImplantLeft(implantRef.current.getBoundingClientRect().left);
        }
    }, []);

    const sections = [
        { title: "診療内容", href: "/services" },
        { title: "当院について", href: "/about" },
        { title: "インプラント", href: "/implant" },
        { title: "アクセス", href: "/access" },
        { title: "ENGLISH", href: "/contact" },
    ];

    const linkBase = `
        relative inline-block py-1 transform-gpu
        before:content-[''] before:absolute before:left-0 before:top-full
        before:w-full before:h-4 before:pointer-events-auto
        after:content-[''] after:absolute after:left-0 after:-bottom-[2px]
        after:w-full after:h-[1px] after:bg-current
        after:scale-x-0 after:origin-center
        after:transition-transform after:duration-300
        hover:after:scale-x-100
    `;

    const pressedClass = (i: number) =>
        pressedIndex === i
            ? "scale-93 translate-y-[1px] transition-transform duration-200 ease-out"
            : "scale-100 translate-y-0 transition-transform duration-[500ms] ease-[cubic-bezier(0.12,1,0.25,1)]";

    const handlePress = (i: number, href: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        setPressedIndex(i);
        setTimeout(() => {
            setPressedIndex(null);
            setReleasingIndex(i);
            setTimeout(() => router.push(href), 190);
        }, 200);
    };

    const handlePressImplant = (i: number, href: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        setPressedIndex(i);
        setTimeout(() => {
            setPressedIndex(null);
            setTimeout(() => router.push(href), 200);
        }, 200);
    };

    return (
        <>
            <header ref={headerRef} className={`
                fixed top-0 left-0 w-full h-[var(--header-height)]
                z-20 px-6 font-[var(--font-en)]
                transition-all duration-300 overflow-visible
            `}
                style={{
                    background:
                        "linear-gradient(to bottom, #ffffff 0px, #deffeb 60px, rgba(222,255,235,0.2) 95%, rgba(222,255,235,0) 100%)"
                }}
            >
                <div className="mx-auto max-w-[1400px] h-full grid grid-cols-[auto_1fr_auto] items-center">

                    {/* 左：ロゴ */}
                    <Link
                        href="/"
                        className="mr-[10px] flex items-center whitespace-nowrap"
                        style={{
                            marginLeft: "clamp(0px, 1vw, 5px)",
                            gap: "clamp(0px, 20vw, 12px)",
                            overflow: "visible"
                        }}
                    >
                        <Image
                            src="/logo.png"
                            alt="ロゴ"
                            width={50}
                            height={50}
                            className="object-contain"
                            style={{
                                width: "clamp(60px, 10vw, 150px)",
                                height: "auto",
                                alignSelf: "flex-end"
                            }}
                        />
                        <div
                            className="flex flex-col leading-tight"
                            style={{ position: "relative", padding: "4px 16px" }}
                        >
                            {/* 水彩背景をabsoluteで重ねる */}
                            <img
                                src="/syusei4.PNG"
                                alt=""
                                width={50}
                                height={50}
                                style={{
                                    position: "absolute",
                                    top: "clamp(-55px, -5vw, -15px)",
                                    left: "clamp(-25px, -30vw, -15px)",
                                    zIndex: -1,
                                    pointerEvents: "none",
                                    opacity: 0.55,
                                    maxWidth: "none",
                                    maxHeight: "none",
                                    width: "clamp(120px, 18vw, 220px)",
                                    height: "clamp(88px, 13vw, 162px)"
                                }}
                            />
                            <span className="tracking-widest text-gray-600 logo-sub">
                                医療法人 学而会
                            </span>
                            <span className="font-semibold tracking-wide logo-main -ml-[10px]">
                                永田歯科医院
                            </span>
                        </div>
                    </Link>

                    {/* スマホ時だけ効く余白 */}
                    <div className="flex-1 md:hidden" />

                    {/* PC メニューを囲むdiv */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <nav
                            className="flex items-center whitespace-nowrap"
                            style={{
                                gap: "clamp(0px, 2.5vw, 80px)",
                                fontSize: "clamp(10px, 1.5vw, 14px)",
                                borderRadius: "8px",
                                padding: "4px 12px"
                            }}
                        >
                            {sections.map((sec, i) => {
                                const divider = i > 0 ? (
                                    <div key={`d-${i}`} style={{
                                        width: "2px",
                                        height: "1em",
                                        backgroundColor: "rgba(100,150,120,0.5)",
                                        flexShrink: 0
                                    }} />
                                ) : null;

                                if (sec.title === "インプラント") {
                                    return (
                                        <React.Fragment key={i}>
                                            {divider}
                                            <div
                                                ref={implantRef}
                                                className="relative"
                                                onMouseEnter={() => setImplantHover(true)}
                                                onMouseLeave={() => setImplantHover(false)}
                                            >
                                                <Link
                                                    href={sec.href}
                                                    onClick={handlePressImplant(i, sec.href)}
                                                    className={`${linkBase} ${pressedClass(i)}`}
                                                >
                                                    {sec.title}
                                                </Link>
                                                <div
                                                    className="absolute left-0 w-full"
                                                    style={{ height: "40px", bottom: "-40px" }}
                                                />
                                            </div>
                                        </React.Fragment>
                                    );
                                }

                                return (
                                    <React.Fragment key={i}>
                                        {divider}
                                        <Link
                                            href={sec.href}
                                            onClick={handlePress(i, sec.href)}
                                            className={`${linkBase} ${pressedClass(i)}`}
                                        >
                                            {sec.title}
                                        </Link>
                                    </React.Fragment>
                                );
                            })}
                        </nav>
                    </div>

                    {/* スマホ ハンバーガー */}
                    <button
                        className={`
                            text-3xl md:hidden ml-auto text-gray-800
                            transition-transform duration-700 ease-in-out
                            transform-gpu [perspective:800px]
                            ${menuOpen
                                ? "rotateX(18deg) translateZ(-8px) scale-95"
                                : "rotateX(0deg) translateZ(0) scale-100"
                            }
                            active:scale-95
                        `}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>

                    {/* スマホ メニュー */}
                    {menuOpen && (
                        <nav className="md:hidden absolute left-0 top-[clamp(56px,6vw,84px)] w-full bg-green-200/90 p-4 flex flex-col gap-4 z-30">
                            {sections.map((sec, i) => (
                                <Link
                                    key={i}
                                    href={sec.href}
                                    className="hover:underline"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {sec.title}
                                </Link>
                            ))}
                        </nav>
                    )}

                </div>
            </header>

            {/* ドロップダウン */}
            {implantHover && (
                <div
                    className="fixed bg-[#deffeb]/90 shadow-md rounded min-w-[140px] pb-2 z-30"
                    style={{
                        top: headerBottom !== null ? `${headerBottom}px` : "var(--header-height)",
                        left: `${implantLeft}px`,
                        display: "flex",
                        flexDirection: "column",
                        paddingRight: "16px"
                    }}
                    onMouseEnter={() => setImplantHover(true)}
                    onMouseLeave={() => setImplantHover(false)}
                >
                    <Link href="/flow" style={{ display: "block", paddingLeft: "12px", paddingRight: "0px" }} className="py-2 hover:underline">治療の流れ</Link>
                    <Link href="/price" style={{ display: "block", paddingLeft: "12px", paddingRight: "0px" }} className="py-2 hover:underline">料金</Link>
                    <Link href="/qa" style={{ display: "block", paddingLeft: "12px", paddingRight: "0px" }} className="py-2 hover:underline">Q&A</Link>
                </div>
            )}
        </>
    );
}