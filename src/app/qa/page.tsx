"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const QA_LIST = [
    {
        q: "インプラントの素材は何ですか？",
        a: "インプラントは、体の中で非常に安定した素材であるチタンでできており、骨とのなじみをさらによくするために表面処理が施されています。チタンは人工関節など、さまざまな分野で使用され、生体親和性の高い材料として世界に認められています。",
    },
    {
        q: "インプラントの治療は、誰でも受ける事ができますか？",
        a: "年齢の上限はありませんが、骨の成長がほぼ終了する16歳ぐらいから治療を受けることができます。ただし、心臓病や糖尿病などの持病がある人や、妊娠中の人などは受けられない場合があります。また、あごの骨の状態によっても受けられない場合があります。いずれの場合も事前に歯科医師とよくご相談ください。",
    },
    {
        q: "インプラント手術に伴う痛みは？又手術時間はどれ位必要ですか？",
        a: "手術は局所麻酔下で行いますので、ほとんど痛みはありません。もし、それでも心配な方には、静脈内鎮静法を併用した手術をお勧めしています。インプラントの埋入手術時間は、約30分〜2時間位です。",
    },
    {
        q: "治療期間はどの位かかりますか？その間の歯はどうなりますか？",
        a: "治療期間としては、下の歯で約3ヶ月、上の歯で約6ヶ月位必要です。なお、骨が非常に薄い為、インプラント治療がむつかしい場合はもう少し日数が必要です。",
    },
    {
        q: "ローンとかクレジットが使えますか？",
        a: "JCB、VISA、MASTER、AMERICAN EXPRESS、DINERS CLUB、NICOS、DC、UFJカード等、日本で流通しているほとんどのカードがご利用になれます。またそれぞれのカードで分割払いもおこなえます。",
    },
    {
        q: "インプラントはどの位もちますか？また、保証期間とかはありますか？",
        a: "インプラント自体は生体となじみの良いチタンでできています。長持ちをさせるのに重要なことは自分の歯と同じような手入れをするということです。ブラッシングはもちろん、歯肉の健康状態や正しい噛み合わせのチェックをするため、3ヶ月から6ヶ月に1度は定期検診を受けて下さい。なお、当院ではインプラントの保証期間として10年間の保証をしています。（2017年6月1日施行）また、保証書の発行も行なっていますので安心して受診して下さい。",
    },
];

export default function QAPage() {
    const [visible, setVisible] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        setTimeout(() => setVisible(true), 80);
    }, []);

    return (
        <main
            className="min-h-screen"
            style={{
                background: "linear-gradient(160deg, #eaf5f0 0%, #f4f8f4 40%, #e8f4f0 100%)",
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
                .qa-item {
                    background: rgba(255,255,255,0.7);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255,255,255,0.9);
                    border-radius: 8px;
                    overflow: hidden;
                    transition: box-shadow 0.25s ease;
                }
                .qa-item:hover {
                    box-shadow: 0 8px 28px rgba(60,120,90,0.10);
                }
                .qa-question {
                    display: flex;
                    align-items: flex-start;
                    gap: 16px;
                    padding: 24px 28px;
                    cursor: pointer;
                    transition: background 0.2s ease;
                    user-select: none;
                }
                .qa-question:hover {
                    background: rgba(240,250,245,0.6);
                }
                .qa-answer {
                    padding: 0 28px 24px 68px;
                    font-size: 0.88rem;
                    color: #4a6058;
                    line-height: 2;
                    border-top: 1px solid rgba(180,220,200,0.4);
                    padding-top: 20px;
                }
                .chevron {
                    transition: transform 0.3s ease;
                    flex-shrink: 0;
                    margin-top: 2px;
                }
                .chevron.open {
                    transform: rotate(180deg);
                }
                .answer-wrap {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows 0.35s ease;
                }
                .answer-wrap.open {
                    grid-template-rows: 1fr;
                }
                .answer-inner {
                    overflow: hidden;
                }
            `}</style>

            {/* ヒーロー */}
            <section style={{ padding: "60px 40px 48px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`}>
                    <p style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "0.78rem", letterSpacing: "0.35em",
                        color: "#4a9a70", marginBottom: "10px"
                    }}>Q &amp; A</p>
                    <h1 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(2rem, 5vw, 3.4rem)",
                        fontWeight: 300, letterSpacing: "0.04em",
                        color: "#1a3028", lineHeight: 1.2, marginBottom: "20px"
                    }}>よくあるご質問</h1>
                    <p style={{ fontSize: "0.92rem", color: "#4a6058", lineHeight: 2, maxWidth: "520px" }}>
                        インプラント治療に関してよく寄せられるご質問をまとめました。<br />
                        その他ご不明な点はお気軽にお問い合わせください。
                    </p>
                </div>
            </section>

            {/* Q&A リスト */}
            <section style={{ padding: "0 40px 100px", maxWidth: "860px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.1s" }}>

                    {/* セクション見出し */}
                    <div style={{
                        display: "flex", alignItems: "center", gap: "16px",
                        marginBottom: "32px"
                    }}>
                        <div style={{ width: "3px", height: "28px", background: "linear-gradient(#4a9a70, #8dd4b0)", borderRadius: "2px" }} />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em", color: "#1a3028" }}>インプラントに関するQ&amp;A</h2>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        {QA_LIST.map((item, i) => (
                            <div
                                key={i}
                                className="qa-item fade-up in"
                                style={{ transitionDelay: `${0.15 + i * 0.07}s` }}
                            >
                                <div
                                    className="qa-question"
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                >
                                    {/* Q バッジ */}
                                    <div style={{
                                        flexShrink: 0,
                                        width: "32px", height: "32px",
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, #4a9a70, #8dd4b0)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        color: "white",
                                        fontFamily: "'Cormorant Garamond', serif",
                                        fontSize: "1rem", fontWeight: 400,
                                    }}>Q</div>

                                    <span style={{
                                        flex: 1,
                                        fontSize: "0.95rem",
                                        fontWeight: 600,
                                        color: "#1a3028",
                                        lineHeight: 1.7,
                                    }}>
                                        {item.q}
                                    </span>

                                    {/* シェブロン */}
                                    <svg
                                        className={`chevron ${openIndex === i ? "open" : ""}`}
                                        width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    >
                                        <path d="M4 6.5L9 11.5L14 6.5" stroke="#4a9a70" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                                {/* アンサー（アコーディオン） */}
                                <div className={`answer-wrap ${openIndex === i ? "open" : ""}`}>
                                    <div className="answer-inner">
                                        <div className="qa-answer">
                                            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                                                {/* A バッジ */}
                                                <div style={{
                                                    flexShrink: 0,
                                                    width: "32px", height: "32px",
                                                    borderRadius: "50%",
                                                    background: "rgba(180,220,200,0.4)",
                                                    border: "1px solid rgba(74,154,112,0.3)",
                                                    display: "flex", alignItems: "center", justifyContent: "center",
                                                    color: "#4a9a70",
                                                    fontFamily: "'Cormorant Garamond', serif",
                                                    fontSize: "1rem",
                                                }}>A</div>
                                                <p style={{ flex: 1, margin: 0 }}>{item.a}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 戻るリンク */}
            <div style={{ textAlign: "center", paddingBottom: "80px" }}>
                <Link href="/implant" style={{
                    display: "inline-block",
                    fontSize: "0.85rem", letterSpacing: "0.12em",
                    color: "#4a9a70", textDecoration: "none",
                    borderBottom: "1px solid #4a9a70",
                    paddingBottom: "2px",
                }}>← インプラントへ戻る</Link>
            </div>
        </main>
    );
}