"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type FormData = {
    name: string;
    kana: string;
    age: string;
    gender: string;
    email: string;
    phone: string;
    message: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
    const [visible, setVisible] = useState(false);
    const [status, setStatus] = useState<Status>("idle");
    const [form, setForm] = useState<FormData>({
        name: "",
        kana: "",
        age: "",
        gender: "",
        email: "",
        phone: "",
        message: "",
    });

    useEffect(() => {
        setTimeout(() => setVisible(true), 80);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!form.name || !form.kana || !form.age || !form.gender || !form.email || !form.message) {
            alert("※印の項目をすべて入力してください。");
            return;
        }

        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus("success");
                setForm({ name: "", kana: "", age: "", gender: "", email: "", phone: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    const externalLinks = [
        { label: "インプラント ネット", url: "https://www.implant.ac/" },
        { label: "松戸市　二ツ木歯科医院", url: "http://www.fu-dc.com/" },
        { label: "池袋　ナチュラルスマイルDC", url: "http://www.natural-smile.jp/" },
    ];

    return (
        <main
            className="min-h-screen"
            style={{
                background: "var(--bg-gradient)",
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
                .form-row {
                    display: grid;
                    grid-template-columns: 180px 1fr;
                    align-items: start;
                    gap: 16px;
                    padding: 20px 0;
                    border-bottom: 1px solid rgba(180,220,200,0.5);
                }
                @media (max-width: 600px) {
                    .form-row {
                        grid-template-columns: 1fr;
                        gap: 8px;
                    }
                }
                .form-label {
                    font-size: 0.9rem;
                    color: #1a3028;
                    padding-top: 10px;
                    line-height: 1.6;
                }
                .required-mark {
                    color: #4a9a70;
                    margin-right: 4px;
                }
                .form-input {
                    width: 100%;
                    padding: 10px 14px;
                    border: 1px solid rgba(74,154,112,0.3);
                    border-radius: 6px;
                    background: rgba(255,255,255,0.8);
                    font-family: 'Noto Serif JP', serif;
                    font-size: 0.9rem;
                    color: #1a3028;
                    outline: none;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                    box-sizing: border-box;
                }
                .form-input:focus {
                    border-color: #4a9a70;
                    box-shadow: 0 0 0 3px rgba(74,154,112,0.12);
                }
                .form-textarea {
                    width: 100%;
                    padding: 10px 14px;
                    border: 1px solid rgba(74,154,112,0.3);
                    border-radius: 6px;
                    background: rgba(255,255,255,0.8);
                    font-family: 'Noto Serif JP', serif;
                    font-size: 0.9rem;
                    color: #1a3028;
                    outline: none;
                    resize: vertical;
                    min-height: 140px;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                    box-sizing: border-box;
                }
                .form-textarea:focus {
                    border-color: #4a9a70;
                    box-shadow: 0 0 0 3px rgba(74,154,112,0.12);
                }
                .radio-group {
                    display: flex;
                    gap: 24px;
                    padding-top: 10px;
                    align-items: center;
                }
                .radio-label {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                    font-size: 0.9rem;
                    color: #1a3028;
                }
                .radio-label input[type="radio"] {
                    accent-color: #4a9a70;
                    width: 16px;
                    height: 16px;
                }
                .age-wrap {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding-top: 0;
                }
                .age-input {
                    width: 80px;
                    padding: 10px 14px;
                    border: 1px solid rgba(74,154,112,0.3);
                    border-radius: 6px;
                    background: rgba(255,255,255,0.8);
                    font-family: 'Noto Serif JP', serif;
                    font-size: 0.9rem;
                    color: #1a3028;
                    outline: none;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                    text-align: center;
                }
                .age-input:focus {
                    border-color: #4a9a70;
                    box-shadow: 0 0 0 3px rgba(74,154,112,0.12);
                }
                .submit-btn {
                    display: block;
                    margin: 40px auto 0;
                    padding: 14px 56px;
                    background: linear-gradient(135deg, #4a9a70, #6db98e);
                    color: white;
                    border: none;
                    border-radius: 50px;
                    font-family: 'Noto Serif JP', serif;
                    font-size: 0.95rem;
                    letter-spacing: 0.15em;
                    cursor: pointer;
                    transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
                    box-shadow: 0 4px 20px rgba(74,154,112,0.25);
                }
                .submit-btn:hover {
                    opacity: 0.9;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 28px rgba(74,154,112,0.3);
                }
                .submit-btn:active {
                    transform: translateY(0);
                }
                .submit-btn:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                    transform: none;
                }
                .bottom-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 24px;
                    align-items: start;
                }
                @media (max-width: 700px) {
                    .bottom-grid {
                        grid-template-columns: 1fr;
                    }
                }
                .section-heading {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 24px;
                }
                .info-card {
                    background: rgba(255,255,255,0.7);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255,255,255,0.9);
                    border-radius: 8px;
                    padding: 28px 28px;
                    box-shadow: 0 4px 24px rgba(60,120,90,0.07);
                    height: 100%;
                    box-sizing: border-box;
                }
            `}</style>

            {/* ヒーロー */}
            <section style={{ padding: "30px 40px 48px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`}>
                    <p style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "0.78rem", letterSpacing: "0.35em",
                        color: "#4a9a70", marginBottom: "10px"
                    }}>CONTACT</p>
                    <h1 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(2rem, 5vw, 3.4rem)",
                        fontWeight: 300, letterSpacing: "0.04em",
                        color: "#1a3028", lineHeight: 1.2, marginBottom: "20px"
                    }}>お問い合わせ</h1>

                    <p style={{ fontSize: "0.85rem", color: "#7a8e86", marginTop: "8px" }}>
                        ご予約はお電話にてお受けしております。
                    </p>
                    <a
                        href="tel:03-6410-8008"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            marginTop: "16px",
                            padding: "12px 28px",
                            background: "rgba(255,255,255,0.8)",
                            border: "1px solid rgba(74,154,112,0.4)",
                            borderRadius: "50px",
                            textDecoration: "none",
                            color: "#1a3028",
                            boxShadow: "0 2px 12px rgba(74,154,112,0.1)",
                            transition: "box-shadow 0.2s ease",
                        }}>
                        <span style={{ fontSize: "1.1rem" }}>📞</span>
                        <span style={{
                            fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
                            letterSpacing: "0.1em",
                            color: "#4a9a70",
                            fontWeight: 600,
                        }}>
                            03-6410-8008
                        </span>
                    </a>
                    <p style={{ fontSize: "0.92rem", color: "#4a6058", lineHeight: 2, maxWidth: "520px", marginTop: "60px" }}>
                        お名前やメールアドレスは、お問い合わせの返信にのみ使用します。<br />
                        <span style={{ color: "#4a9a70" }}>※</span> は入力必須です。
                    </p>
                </div>
            </section>

            {/* フォーム */}
            <section style={{ padding: "0 40px 80px", maxWidth: "860px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.1s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
                        <div style={{ width: "3px", height: "28px", background: "linear-gradient(#4a9a70, #8dd4b0)", borderRadius: "2px" }} />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em", color: "#1a3028" }}>お問い合わせフォーム</h2>
                    </div>

                    <div style={{
                        background: "rgba(255,255,255,0.7)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.9)",
                        borderRadius: "8px",
                        padding: "0 36px 8px",
                        boxShadow: "0 4px 24px rgba(60,120,90,0.07)"
                    }}>
                        <div className="form-row">
                            <div className="form-label"><span className="required-mark">※</span>お名前</div>
                            <input className="form-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="例）永田 太郎" />
                        </div>
                        <div className="form-row">
                            <div className="form-label"><span className="required-mark">※</span>フリガナ</div>
                            <input className="form-input" type="text" name="kana" value={form.kana} onChange={handleChange} placeholder="例）ナガタ タロウ" />
                        </div>
                        <div className="form-row">
                            <div className="form-label"><span className="required-mark">※</span>年齢</div>
                            <div className="age-wrap">
                                <input className="age-input" type="number" name="age" value={form.age} onChange={handleChange} placeholder="30" min="0" max="120" />
                                <span style={{ fontSize: "0.9rem", color: "#4a6058" }}>歳</span>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-label"><span className="required-mark">※</span>性別</div>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input type="radio" name="gender" value="男" checked={form.gender === "男"} onChange={handleChange} />男
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="gender" value="女" checked={form.gender === "女"} onChange={handleChange} />女
                                </label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-label">
                                <span className="required-mark">※</span>メールアドレス
                                <div style={{ fontSize: "0.75rem", color: "#7a8e86", marginTop: "4px" }}>半角文字で正しく入力してください</div>
                            </div>
                            <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="example@email.com" />
                        </div>
                        <div className="form-row">
                            <div className="form-label">電話番号</div>
                            <input className="form-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="03-0000-0000" />
                        </div>
                        <div className="form-row" style={{ borderBottom: "none" }}>
                            <div className="form-label"><span className="required-mark">※</span>お問い合わせ内容</div>
                            <textarea className="form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="お問い合わせ内容をご記入ください" />
                        </div>
                    </div>

                    <button className="submit-btn" onClick={handleSubmit} disabled={status === "sending"}>
                        {status === "sending" ? "送信中..." : "送　信"}
                    </button>

                    {status === "success" && (
                        <p style={{ textAlign: "center", marginTop: "24px", color: "#4a9a70", fontSize: "0.95rem" }}>
                            お問い合わせを受け付けました。折り返しご連絡いたします。
                        </p>
                    )}
                    {status === "error" && (
                        <p style={{ textAlign: "center", marginTop: "24px", color: "#c0392b", fontSize: "0.95rem" }}>
                            送信に失敗しました。しばらく経ってから再度お試しください。
                        </p>
                    )}
                </div>
            </section>

            {/* 歯科医師の方へ ＋ 他リンク（横並び） */}
            <section style={{ padding: "0 40px 80px", maxWidth: "860px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.2s" }}>
                    <div className="bottom-grid">

                        {/* 歯科医師の方へ */}
                        <div>
                            <div className="section-heading">
                                <div style={{ width: "3px", height: "28px", background: "linear-gradient(#4a9a70, #8dd4b0)", borderRadius: "2px" }} />
                                <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em", color: "#1a3028" }}>歯科医師の方へ</h2>
                            </div>
                            <div className="info-card">
                                <p style={{ fontSize: "0.9rem", lineHeight: 2, color: "#1a3028", marginBottom: "20px" }}>
                                    難症例・困った症例をお持ちの先生は、お気軽にご相談ください。
                                </p>
                                <div style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    padding: "10px 16px",
                                    background: "rgba(234,245,240,0.8)",
                                    border: "1px solid rgba(74,154,112,0.25)",
                                    borderRadius: "6px",
                                }}>
                                    <span style={{ fontSize: "1rem" }}>✉</span>
                                    <a
                                        href="mailto:info@dental-nagata.com"
                                        style={{
                                            fontSize: "0.88rem",
                                            color: "#4a9a70",
                                            textDecoration: "none",
                                            borderBottom: "1px solid rgba(74,154,112,0.4)",
                                            paddingBottom: "1px",
                                            letterSpacing: "0.03em",
                                        }}
                                    >
                                        info@dental-nagata.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 他リンク */}
                        <div>
                            <div className="section-heading">
                                <div style={{ width: "3px", height: "28px", background: "linear-gradient(#4a9a70, #8dd4b0)", borderRadius: "2px" }} />
                                <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em", color: "#1a3028" }}>他リンク</h2>
                            </div>
                            <div className="info-card">
                                <ul style={{ display: "flex", flexDirection: "column", gap: "16px", margin: 0, padding: 0 }}>
                                    {externalLinks.map((link) => (
                                        <li key={link.url} style={{ listStyle: "none" }}>
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                    fontSize: "0.9rem",
                                                    color: "#4a9a70",
                                                    textDecoration: "none",
                                                    borderBottom: "1px solid rgba(74,154,112,0.4)",
                                                    paddingBottom: "2px",
                                                }}
                                            >
                                                <span style={{ fontSize: "0.65rem", color: "#52b788" }}>▶</span>
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 戻るリンク */}
            <div style={{ textAlign: "center", paddingBottom: "80px" }}>
                <Link href="/" style={{
                    display: "inline-block",
                    fontSize: "0.85rem", letterSpacing: "0.12em",
                    color: "#4a9a70", textDecoration: "none",
                    borderBottom: "1px solid #4a9a70",
                    paddingBottom: "2px",
                }}><span style={{ fontSize: "0.65rem" }}>▶</span>トップへ戻る</Link>
            </div>
        </main>
    );
}