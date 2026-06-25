"use client";
// 先頭のimportに追加
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import Image from "next/image";
import React from "react";


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [pressedIndex, setPressedIndex] = useState<number | null>(null);
    const [releasingIndex, setReleasingIndex] = useState<number | null>(null);
    const router = useRouter();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState<boolean | null>(null);
    const [headerBottom, setHeaderBottom] = useState<number | null>(null);
    const headerRef = useRef<HTMLElement>(null);
    const [implantHover, setImplantHover] = useState(false);
    const [implantClosing, setImplantClosing] = useState(false);
    const [implantLeft, setImplantLeft] = useState(0);
    const implantRef = useRef<HTMLDivElement>(null);
    const implantLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null); 
    const hamburgerRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLElement>(null);
    const [implantBottom, setImplantBottom] = useState(0);

    useEffect(() => {
        if (!menuOpen) return;
        const handleClick = (e: MouseEvent) => {
            if (
                hamburgerRef.current?.contains(e.target as Node) ||
                menuRef.current?.contains(e.target as Node)
            ) return;
            setMenuOpen(false);
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [menuOpen]);
    
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
                setImplantBottom(implantRef.current.getBoundingClientRect().bottom);
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
        { title: "診療案内", href: "/services" },
        { title: "当院・スタッフ", href: "/about" },
        { title: "インプラント", href: "/implant" },
        { title: "アクセス", href: "/access" },
        { title: "お問い合わせ", href: "/contact" },
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
    transition-transform duration-200
    hover:-translate-y-[2px]
`;

    const pressedClass = (i: number) =>
        pressedIndex === i
            ? "scale-93 translate-y-[1px] transition-transform duration-200 ease-out"
            : releasingIndex === i
                ? "scale-105 translate-y-[-1px] transition-transform duration-150 ease-out"
                : "scale-100 translate-y-0 transition-transform duration-[500ms] ease-[cubic-bezier(0.12,1,0.25,1)]";

    const handlePress = (i: number, href: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        setPressedIndex(i);
        setTimeout(() => {
            setPressedIndex(null);
            setReleasingIndex(i);
            setTimeout(() => router.push(href), 100);
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
                        "linear-gradient(to bottom, #ffffff 0px, #deffeb 60px, rgba(222, 255, 235, 0.36) 95%, rgba(222, 255, 235, 0.07) 100%)"
                }}
            >
                <div className="mx-auto max-w-[1400px] h-full grid grid-cols-[auto_1fr_auto] items-center">

                    {/* 左：ロゴ */}
                    <Link
                        href="/"
                        className="mr-[10px] flex items-center whitespace-nowrap"
                        onClick={(e) => {
                            if (pathname === "/") {
                                e.preventDefault();
                                window.location.reload();
                            }
                        }}
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
                                    top: "clamp(-55px, -4.6vw, -30px)",
                                    left: "clamp(-55px, -3.2vw, -25px)",
                                    zIndex: -1,
                                    pointerEvents: "none",
                                    opacity: 0.55,
                                    maxWidth: "none",
                                    maxHeight: "none",
                                    width: "clamp(152px, 18.5vw, 220px)",
                                    height: "clamp(100px, 13vw, 160px)"
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
                                gap: "clamp(0px, 3vw, 80px)",
                                fontSize: "clamp(10px, 1.5vw, 14.5px)",
                                borderRadius: "8px",
                                padding: "4px 8px"
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
                                                onMouseEnter={() => {
                                                    if (implantLeaveTimer.current) clearTimeout(implantLeaveTimer.current);
                                                    setImplantClosing(false);
                                                    setImplantHover(true);
                                                }}
                                                onMouseLeave={() => {
                                                    implantLeaveTimer.current = setTimeout(() => {
                                                        setImplantClosing(true);
                                                        setTimeout(() => {
                                                            setImplantHover(false);
                                                            setImplantClosing(false);
                                                        }, 500); // slideUpのアニメーション時間
                                                    }, 300); // カーソルが外れてから閉じ始めるまでの待機時間
                                                }}
                                                style={{
                                                    borderRadius: (implantHover || implantClosing) ? "8px 8px 0 0" : "8px",
                                                    background: (implantHover || implantClosing)
                                                        ? "linear-gradient(to bottom, transparent 0%, #deffebb4 100%)"
                                                        : "transparent",
                                                    transition: "background 0.2s ease",
                                                    marginLeft: "clamp(-40px, -2vw, -8px)",
                                                    marginRight: "clamp(-40px, -2vw, -8px)",
                                                    paddingLeft: "calc(8px + clamp(8px, 2vw, 40px))",
                                                    paddingRight: "calc(8px + clamp(8px, 2vw, 40px))",
                                                    paddingTop: "4px",
                                                    paddingBottom: "4px",
                                                }}
                                            >
                                                {/* 左右グラデーション枠線（上透明→下で不透明） */}
                                                {(implantHover || implantClosing) && (
                                                    <>
                                                        <div style={{
                                                            position: "absolute", top: 0, left: 0,
                                                            width: "1px", height: "100%",
                                                            background: "linear-gradient(to bottom, transparent 0%, rgba(100, 150, 120, 0.1) 100%)",
                                                            pointerEvents: "none",
                                                        }} />
                                                        <div style={{
                                                            position: "absolute", top: 0, right: 0,
                                                            width: "1px", height: "100%",
                                                            background: "linear-gradient(to bottom, transparent 0%, rgba(100, 150, 120, 0.1) 100%)",
                                                            pointerEvents: "none",
                                                        }} />
                                                    </>
                                                )}
                                                <Link
                                                    href={sec.href}
                                                    onClick={handlePress(i, sec.href)}
                                                    className={`${linkBase} ${pressedClass(i)}`}
                                                >
                                                    {sec.title}
                                                </Link>
                                                {(implantHover || implantClosing) && (
                                                    <div
                                                        className="absolute flex flex-col"
                                                        style={{
                                                            top: "100%",
                                                            left: 0,
                                                            right: 0,
                                                            background: "linear-gradient(to bottom, #deffebb4 0%, #deffebed 26%)",
                                                            borderRadius: "0 0 8px 8px",
                                                            fontSize: "clamp(10px, 1.5vw, 14px)",
                                                            animation: implantClosing
                                                                ? "slideUp 0.5s ease forwards"
                                                                : "slideDown 0.5s ease forwards",
                                                            overflow: "hidden",
                                                            paddingBottom: "4px",
                                                            borderBottom: "1px solid rgba(100,150,120,0.4)",
                                                            // borderLeft・borderRight は削除
                                                        }}
                                                    >
                                                        {/* 左枠線：親の0.24から0.4へ続くグラデーション */}
                                                        <div style={{
                                                            position: "absolute", top: 0, left: 0,
                                                            width: "1px", height: "100%",
                                                            background: "linear-gradient(to bottom, rgba(100, 150, 120, 0.1) 0%, rgba(100,150,120,0.4) 60%)",
                                                            pointerEvents: "none",
                                                        }} />
                                                        <div style={{
                                                            position: "absolute", top: 0, right: 0,
                                                            width: "1px", height: "100%",
                                                            background: "linear-gradient(to bottom, rgba(100, 150, 120, 0.1) 0%, rgba(100,150,120,0.4) 60%)",
                                                            pointerEvents: "none",
                                                        }} />
                                                        <Link href="/flow" className="py-3 hover:underline whitespace-nowrap text-center">治療の流れ</Link>
                                                        <div style={{ height: "1px", background: "rgba(100,150,120,0.3)", margin: "0 30px" }} />
                                                        <Link href="/price" className="py-3 hover:underline whitespace-nowrap text-center">料金</Link>
                                                        <div style={{ height: "1px", background: "rgba(100,150,120,0.3)", margin: "0 30px" }} />
                                                        <Link href="/qa" className="py-3 hover:underline whitespace-nowrap text-center">Q&A</Link>
                                                    </div>
                                                )}
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
                        ref={hamburgerRef}
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
                        <div className="flex flex-col items-center">
                            <span>{menuOpen ? "✕" : "☰"}</span>
                            <span style={{ fontSize: "0.5rem", letterSpacing: "0.15em", color: "#4a6058" }}>MENU</span>
                        </div>
                    </button>

                   
                </div>
            </header>

            {/* スマホ メニュー */}
            {menuOpen && (
                <nav
                    ref={menuRef}
                    className="md:hidden fixed left-0 w-full pt-8 px-4 pb-4 flex flex-col gap-4 z-10 items-center"
                    style={{
                        top: headerRef.current ? `${headerRef.current.clientHeight - 24}px` : "clamp(56px,6vw,84px)",
                        background: "linear-gradient(170deg, #f6fffdef 0%, #fafffef9 50%, #f5fffdef 100%)",
                    }}
                >
                    {sections.map((sec, i) => (
                        <React.Fragment key={i}>
                            {i > 0 && <div style={{ width: "30%", height: "1px", backgroundColor: "rgba(100,150,120,0.4)" }} />}
                            <Link
                                href={sec.href}
                                className="hover:underline"
                                onClick={() => setMenuOpen(false)}
                            >
                                {sec.title}
                            </Link>
                            {sec.title === "インプラント" && (
                                <div className="flex flex-col gap-3 text-l text-gray-600 -mt-2 self-start ml-[calc(50%-30px)]">
                                    <Link href="/flow" className="hover:underline" onClick={() => setMenuOpen(false)}>└ 治療の流れ</Link>
                                    <Link href="/price" className="hover:underline" onClick={() => setMenuOpen(false)}>└ 料金</Link>
                                    <Link href="/qa" className="hover:underline" onClick={() => setMenuOpen(false)}>└ Q&A</Link>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </nav>
            )}
        </>
    );
}