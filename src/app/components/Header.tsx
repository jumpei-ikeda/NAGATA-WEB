"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const sections = [
        { title: "診療内容", href: "/services" },
        { title: "当院について", href: "/about" },
        { title: "インプラント", href: "/implant" },
        { title: "アクセス", href: "/access" },
        { title: "お問い合わせ", href: "/contact" },
        { title: "ENGLISH", href: "/contact" },
    ];

    return (
        <>
            {/* 上に伸ばした部分（引っ張ってもベージュが見えない） */}
            <div className="fixed -top-60 left-0 w-full h-60 bg-green-200/90 z-40"></div>

            <header className="fixed top-0 left-0 w-full bg-green-200/90 backdrop-blur-md z-50 px-6 py-8 flex items-center text-gray-800 font-[var(--font-en)]">
                {/* 左：ロゴ */}
                <Link
                    href="/"
                    className="ml-[30px] md:ml-[60px] flex flex-col leading-tight"
                >
                    {/* 上の小さな文字 */}
                    <span className="text-xs tracking-widest text-gray-600">
                        医療法人  学而会
                    </span>

                    {/* メインロゴ */}
                    <span className="text-2xl font-semibold tracking-wide">
                        永田歯科
                    </span>
                </Link>

                {/* 中央を押し広げる（スマホ） */}
                <div className="flex-1"></div>

                {/* PC メニュー */}
                <nav className="hidden md:flex gap-10 text-lg absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
                    {sections.map((sec, i) => {
                        if (sec.title === "インプラント") {
                            return (
                                <div className="relative group" key={i}>
                                    <Link href={sec.href} className="hover:underline">{sec.title}</Link>
                                    <div className="hidden group-hover:flex flex-col absolute top-full left-0 bg-green-200/90 shadow-md rounded min-w-[180px] p-2 z-50">
                                        <Link href="/implant" className="px-3 py-2 hover:underline">インプラントとは</Link>
                                        <Link href="/flow" className="px-3 py-2 hover:underline">治療の流れ</Link>
                                        <Link href="/price" className="px-3 py-2 hover:underline">料金</Link>
                                        <Link href="/qa" className="px-3 py-2 hover:underline">Q&A</Link>
                                    </div>
                                </div>
                            );
                        }
                        return <Link key={i} href={sec.href} className="hover:underline">{sec.title}</Link>;
                    })}
                </nav>

                {/* スマホハンバーガー */}
                <button className="text-3xl md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "✕" : "☰"}
                </button>

                {menuOpen && (
                    <nav className="md:hidden absolute left-0 top-16 w-full bg-green-200/90 p-4 flex flex-col gap-4 z-50">
                        {sections.map((sec, i) => (
                            <Link key={i} href={sec.href} className="hover:underline" onClick={() => setMenuOpen(false)}>
                                {sec.title}
                            </Link>
                        ))}
                    </nav>
                )}
            </header>
        </>
    );
}