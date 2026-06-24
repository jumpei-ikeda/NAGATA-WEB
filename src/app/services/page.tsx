"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const MAIN_SERVICES = [
    {
        title: "小児歯科",
        en: "Pediatric Dentistry",
        icon: "👶",
        desc: "お子さまの成長に合わせた予防・治療を行います。歯を怖がらないよう、やさしい雰囲気で対応します。",
    },
    {
        title: "矯正歯科",
        en: "Orthodontics",
        icon: "😁",
        desc: "ワイヤー・マウスピース矯正で美しい歯並びへ。成人・小児どちらにも対応しています。",
    },
    {
        title: "口腔外科",
        en: "Oral Surgery",
        icon: "🔬",
        desc: "親知らずの抜歯や口腔内の外科的処置を安全・丁寧に行います。",
    },
    {
        title: "歯科",
        en: "General Dentistry",
        icon: "🦷",
        desc: "虫歯・歯周病の治療から定期健診まで、幅広く対応します。",
    },
];

const OTHER_SERVICES = [
    {
        title: "ホワイトニング",
        en: "Whitening",
        icon: "✨",
        desc: "歯本来の白さを取り戻す施術です。オフィスホワイトニング・ホームホワイトニングをご用意しています。",
    },
    {
        title: "訪問診療",
        en: "Home Visit",
        icon: "🏠",
        desc: "通院が難しい方のご自宅や施設へ歯科医師が伺います。お気軽にご相談ください。",
    },
    {
        title: "DNA採取",
        en: "DNA Collection",
        icon: "🧬",
        desc: "遺伝情報を活用した予防歯科・リスク評価に対応しています。",
    },
];

const DAYS = ["月", "火", "水", "木", "金", "土", "日/祝"];
const HOURS = [
    {
        label: "午前　9:30〜12:30",
        values: ["○", "○", "○", "○", "○", "○", "—"],
    },
    {
        label: "午後　14:00〜19:30",
        values: ["○", "○", "○", "○", "○", "△", "—"],
    },
];

const CASES = [
    {
        title: "乳歯の反対咬合の矯正例",
        period: { label: "矯正期間", value: "約2年" },
        costs: [
            { label: "検査料", value: "4万円" },
            { label: "矯正装置", value: "7万円" },
            { label: "月1回のチェック料", value: "1,000〜3,000円" },
        ],
        total: "約13万円",
    },
    {
        title: "上の永久歯のでこぼこの歯並びの矯正例",
        period: { label: "矯正期間", value: "約1年半" },
        costs: [
            { label: "検査料", value: "4万円" },
            { label: "矯正装置", value: "20万円" },
            { label: "月1回のチェック料", value: "2,000〜3,000円" },
            { label: "保定装置", value: "3万円" },
        ],
        total: "約31万円",
    },
    {
        title: "上下の永久歯のでこぼこの歯並びの矯正例",
        period: { label: "矯正期間", value: "約2年半" },
        costs: [
            { label: "検査料", value: "4万円" },
            { label: "矯正装置", value: "45万円" },
            { label: "月1回のチェック料", value: "3,000円" },
            { label: "保定装置", value: "6万円" },
        ],
        total: "約55万円",
    },
    {
        title: "矯正装置に目立たないセラミックを使用した例",
        period: { label: "矯正期間", value: "約3年" },
        costs: [
            { label: "検査料", value: "4万円" },
            { label: "矯正装置", value: "55万円" },
            { label: "月1回のチェック料", value: "3,000円" },
            { label: "保定装置", value: "6万円" },
        ],
        total: "約65万円",
    },
    {
        title: "奥歯が3歯ないインプラントの例",
        period: { label: "治療期間", value: "約7ヶ月" },
        costs: [
            { label: "インプラント代（手術料込み）", value: "20万円 × 3本" },
            { label: "かぶせ物", value: "10万円 × 3歯" },
        ],
        total: "90万円（消費税込み）",
    },
    {
        title: "前歯が1歯ない骨の薄いインプラントの例",
        period: { label: "治療期間", value: "約8ヶ月" },
        costs: [
            { label: "インプラント代（手術料込み）", value: "20万円" },
            { label: "骨造成", value: "5万円" },
            { label: "かぶせ物", value: "10万円" },
        ],
        total: "35万円（消費税込み）",
    },
    {
        title: "上顎の鼻下の骨が出ており出っ歯になり、前歯の歯肉ラインも合っていない審美歯科の例",
        period: { label: "治療期間", value: "約4ヶ月" },
        costs: [
            { label: "手術料", value: "2万円" },
            { label: "かぶせ物", value: "32万円" },
        ],
        total: "約34万円",
    },
];

export default function ServicesPage() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => setVisible(true), 80);
    }, []);

    return (
        <main
            className="min-h-screen"
            style={{
                background: "var(--bg-gradient)",
                fontFamily: "'Noto Serif JP', serif",
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
        .card-service {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.9);
          border-radius: 8px;
          padding: 32px 28px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card-service:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(60,120,90,0.10);
        }
        .tag-circle {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #b8e8d0, #d4f0e4);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 16px;
        }
        .hours-cell {
          text-align: center;
          padding: 14px 8px;
          font-size: 0.95rem;
          border-bottom: 1px solid #ddeee6;
        }
        .hours-cell.green { color: #2d7a5a; font-weight: 600; }
        .hours-cell.gray { color: #aaa; }
        .hours-cell.tri { color: #e07a30; font-weight: 600; }
      `}</style>

            {/* ヒーロー */}
            <section style={{ padding: "30px 40px 48px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`}>
                    <p style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "0.78rem", letterSpacing: "0.35em",
                        color: "#4a9a70", marginBottom: "10px"
                    }}>SERVICES</p>
                    <h1 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(2rem, 5vw, 3.4rem)",
                        fontWeight: 300, letterSpacing: "0.04em",
                        color: "#1a3028", lineHeight: 1.2, marginBottom: "20px"
                    }}>診療案内</h1>
                    <p style={{ fontSize: "0.92rem", color: "#4a6058", lineHeight: 2, maxWidth: "520px" }}>
                        地域の皆さまの健康を守るため、幅広い診療に対応しています。<br />
                        お気軽にご相談ください。
                    </p>
                </div>
            </section>

            {/* 診療時間 */}
            <section style={{ padding: "0 40px 100px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.5s" }}>
                    <div style={{
                        display: "flex", alignItems: "center", gap: "16px",
                        marginBottom: "32px"
                    }}>
                        <div style={{ width: "3px", height: "28px", background: "linear-gradient(#4a9a70, #8dd4b0)", borderRadius: "2px" }} />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em", color: "#1a3028" }}>診療時間</h2>
                    </div>

                    <div style={{
                        background: "rgba(255,255,255,0.75)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.9)",
                        borderRadius: "8px",
                        overflow: "hidden",
                        boxShadow: "0 4px 24px rgba(60,120,90,0.07)"
                    }}>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr style={{ background: "linear-gradient(90deg, #3d8c62, #5aaa7a)" }}>
                                    <th style={{ padding: "14px 20px", textAlign: "left", color: "white", fontSize: "0.85rem", fontWeight: 400, letterSpacing: "0.08em", width: "220px" }}>
                                        時間帯
                                    </th>
                                    {DAYS.map(d => (
                                        <th key={d} style={{
                                            padding: "14px 8px", textAlign: "center",
                                            color: d === "日/祝" ? "#ffd4d4" : "white",
                                            fontSize: "0.85rem", fontWeight: 400
                                        }}>{d}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {HOURS.map((row, ri) => (
                                    <tr key={ri} style={{ background: ri % 2 === 0 ? "rgba(240,250,245,0.6)" : "transparent" }}>
                                        <td style={{ padding: "14px 20px", fontSize: "0.85rem", color: "#3a5a4a", borderBottom: "1px solid #ddeee6" }}>
                                            {row.label}
                                        </td>
                                        {row.values.map((v, vi) => (
                                            <td key={vi} className={`hours-cell ${v === "○" ? "green" : v === "△" ? "tri" : "gray"}`}>
                                                {v}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <p style={{ fontSize: "0.82rem", color: "#7a8e86" }}>※ 日曜・祝日　休診</p>
                        <p style={{ fontSize: "0.82rem", color: "#e07a30" }}>△ 土曜午後は18:00までとなります</p>
                    </div>
                </div>
            </section>

            {/* 診療科目 */}
            <section style={{ padding: "0 40px 80px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.1s" }}>
                    <div style={{
                        display: "flex", alignItems: "center", gap: "16px",
                        marginBottom: "32px"
                    }}>
                        <div style={{ width: "3px", height: "28px", background: "linear-gradient(#4a9a70, #8dd4b0)", borderRadius: "2px" }} />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em", color: "#1a3028" }}>診療科目</h2>
                    </div>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "20px"
                    }}>
                        {MAIN_SERVICES.map((s, i) => (
                            <div key={s.title} className="card-service fade-up in" style={{ transitionDelay: `${0.15 + i * 0.07}s` }}>
                                <div className="tag-circle">{s.icon}</div>
                                <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", color: "#4a9a70", marginBottom: "6px" }}>{s.en}</p>
                                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "12px", color: "#1a3028" }}>{s.title}</h3>
                                <p style={{ fontSize: "0.85rem", color: "#5a6e66", lineHeight: 1.9 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* その他 */}
            <section style={{ padding: "0 40px 80px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.3s" }}>
                    <div style={{
                        display: "flex", alignItems: "center", gap: "16px",
                        marginBottom: "32px"
                    }}>
                        <div style={{ width: "3px", height: "28px", background: "linear-gradient(#4a9a70, #8dd4b0)", borderRadius: "2px" }} />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em", color: "#1a3028" }}>その他</h2>
                    </div>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "20px"
                    }}>
                        {OTHER_SERVICES.map((s, i) => (
                            <div key={s.title} className="card-service" style={{ transitionDelay: `${0.35 + i * 0.07}s` }}>
                                <div className="tag-circle">{s.icon}</div>
                                <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", color: "#4a9a70", marginBottom: "6px" }}>{s.en}</p>
                                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "12px", color: "#1a3028" }}>{s.title}</h3>
                                <p style={{ fontSize: "0.85rem", color: "#5a6e66", lineHeight: 1.9 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* コンセプト・インプラント */}
            <section style={{ padding: "0 40px 80px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.4s" }}>

                    {/* 当院のコンセプト */}
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
                        <div style={{ width: "3px", height: "28px", background: "linear-gradient(#4a9a70, #8dd4b0)", borderRadius: "2px" }} />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em", color: "#1a3028" }}>当院のコンセプト</h2>
                    </div>

                    <div style={{
                        background: "rgba(255,255,255,0.7)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.9)",
                        borderRadius: "8px",
                        padding: "36px",
                        boxShadow: "0 4px 24px rgba(60,120,90,0.07)",
                        marginBottom: "60px",
                    }}>
                        <p style={{ fontSize: "0.92rem", color: "#4a6058", lineHeight: 2, marginBottom: "20px" }}>
                            当院は、予防処置をベースとした歯科医療を実践しています。歯科医療の予防としては、大きく４つのカテゴリーに分類されます。
                        </p>
                        <div style={{
                            background: "rgba(234,245,240,0.8)",
                            borderLeft: "4px solid #52b788",
                            borderRadius: "0 8px 8px 0",
                            padding: "16px 20px",
                            marginBottom: "24px",
                        }}>
                            {["虫歯の予防", "歯周病の予防", "歯列不正の予防", "咬合崩壊の予防"].map((item, i) => (
                                <p key={i} style={{ fontSize: "0.9rem", color: "#1a3028", lineHeight: 2 }}>
                                    <span style={{ color: "#52b788", fontWeight: 600, marginRight: "8px" }}>（{i + 1}）</span>{item}
                                </p>
                            ))}
                        </div>

                        <p style={{ fontSize: "0.88rem", color: "#4a6058", lineHeight: 2, marginBottom: "24px" }}>
                            ここでは、特に問題となる（１）と（２）について簡単に記述したいと思います。
                        </p>

                        <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#1a3028", marginBottom: "12px" }}>（１）虫歯の予防</h3>
                        <p style={{ fontSize: "0.88rem", color: "#4a6058", lineHeight: 2, marginBottom: "24px" }}>
                            当院では、カリオロジー（虫歯の原因菌に対する学問）に基づいたフィンランド型の予防プログラムをおこなっています。サリバァテストを行い個々の患者さんに虫歯を作らない作らせない為のアドバイス及びプログラムを提案し、良質な口腔内環境の改善、維持に努めています。
                        </p>

                        <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#1a3028", marginBottom: "12px" }}>（２）歯周病の予防</h3>
                        <p style={{ fontSize: "0.88rem", color: "#4a6058", lineHeight: 2 }}>
                            ６０歳過ぎた頃より、入れ歯になる方が急速に増えます。入れ歯になる方の９０％以上が歯周病が原因と言われています。歯周病の原因としては、1.喫煙　2.糖尿病　3.ホルモンの関係　4.更年期と骨粗鬆症　などが考えられますが、当院では個々の患者さんに対するリスク診断を行い、積極的に外科処置や歯周再生治療を行なう必要があるのか、それともメインテナンスを中心とした歯周の健康の維持に努めれば良いのか、患者さんとコンサルテーションをしながら、入れ歯にならないよう努めてまいりたいと思っています。
                        </p>
                    </div>

                    {/* インプラントについて */}
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
                        <div style={{ width: "3px", height: "28px", background: "linear-gradient(#4a9a70, #8dd4b0)", borderRadius: "2px" }} />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em", color: "#1a3028" }}>インプラントについて</h2>
                    </div>

                    <div style={{
                        background: "rgba(255,255,255,0.7)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.9)",
                        borderRadius: "8px",
                        padding: "36px 36px 18px 36px",
                        boxShadow: "0 4px 24px rgba(60,120,90,0.07)",
                    }}>
                        <p style={{ fontSize: "0.88rem", color: "#4a6058", lineHeight: 2, marginBottom: "16px" }}>
                            当院では、残念ながら入れ歯になってしまった方には、積極的にインプラント治療を行なっています。最近のインプラントのマテリアルは、従来骨質が悪いと言われてる方にも十分対応できるような製品になってきております。
                        </p>
                        <p style={{ fontSize: "0.88rem", color: "#4a6058", lineHeight: 2, marginBottom: "16px" }}>
                            また、骨が足りない為にインプラントがやりたくてもできなかった方へのテクニックもカスタマライズされつつありますし、骨造成の為のＰＲＰ（多血小板血漿）の活用も手術の成功に大きく寄与しています。
                        </p>
                        <p style={{ fontSize: "0.88rem", color: "#4a6058", lineHeight: 2 }}>
                            インプラントは必ず手術が伴いますので、専用のオペ室を準備してあります。質問はいつでもお受けしますので、遠慮無くご相談下さい。
                        </p>
                        <br />
                        <div style={{ marginBottom: "24px" }}>
                            <Link href="/implant" style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                fontSize: "0.88rem",
                                color: "#4a9a70",
                                textDecoration: "none",
                                borderBottom: "1px solid #4a9a70",
                                paddingBottom: "2px",
                                letterSpacing: "0.08em",
                            }}>
                                インプラントについてはこちら →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 当院の症例 */}
            <section style={{ padding: "0 40px 80px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.5s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
                        <div style={{ width: "3px", height: "28px", background: "linear-gradient(#4a9a70, #8dd4b0)", borderRadius: "2px" }} />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em", color: "#1a3028" }}>当院の症例</h2>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        {CASES.map((c, i) => (
                            <div key={i} style={{
                                background: "rgba(255,255,255,0.7)",
                                backdropFilter: "blur(8px)",
                                border: "1px solid rgba(255,255,255,0.9)",
                                borderRadius: "8px",
                                overflow: "hidden",
                                boxShadow: "0 4px 24px rgba(60,120,90,0.07)",
                            }}>
                                {/* タイトル行 */}
                                <div style={{
                                    padding: "14px 24px",
                                    background: "linear-gradient(90deg, rgba(74,154,112,0.12), rgba(74,154,112,0.04))",
                                    borderBottom: "1px solid rgba(74,154,112,0.15)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                }}>
                                    <span style={{ color: "#4a9a70", fontSize: "0.9rem" }}>○</span>
                                    <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#1a3028" }}>{c.title}</h3>
                                </div>

                                <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                                    {/* 期間 */}
                                    <div style={{ display: "flex", gap: "16px", alignItems: "baseline", marginBottom: "4px" }}>
                                        <span style={{ fontSize: "0.78rem", color: "#7a8e86", letterSpacing: "0.08em", minWidth: "60px" }}>{c.period.label}</span>
                                        <span style={{ fontSize: "0.92rem", color: "#2d7a5a", fontWeight: 600 }}>{c.period.value}</span>
                                    </div>

                                    {/* 費用明細 */}
                                    <div style={{
                                        background: "rgba(240,250,245,0.6)",
                                        borderRadius: "6px",
                                        padding: "12px 16px",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "6px",
                                    }}>
                                        <span style={{ fontSize: "0.72rem", letterSpacing: "0.15em", color: "#4a9a70", marginBottom: "4px" }}>費用内訳</span>
                                        {c.costs.map((cost, j) => (
                                            <div key={j} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px" }}>
                                                <span style={{ fontSize: "0.84rem", color: "#5a6e66" }}>{cost.label}</span>
                                                <span style={{ fontSize: "0.84rem", color: "#3a5a4a", whiteSpace: "nowrap" }}>{cost.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* 合計 */}
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        alignItems: "baseline",
                                        gap: "12px",
                                        paddingTop: "8px",
                                        borderTop: "1px solid rgba(74,154,112,0.15)",
                                        marginTop: "4px",
                                    }}>
                                        <span style={{ fontSize: "0.78rem", color: "#7a8e86", letterSpacing: "0.1em" }}>合計</span>
                                        <span style={{ fontSize: "1.05rem", fontWeight: 600, color: "#2d7a5a" }}>{c.total}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                    transition: "opacity 0.2s"
                }}>← トップへ戻る</Link>
            </div>
        </main>
    );
}