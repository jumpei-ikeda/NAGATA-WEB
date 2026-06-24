"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const CAREER = [
    { year: "1980年", desc: "日本歯科大学　卒業" },
    { year: "1980年", desc: "静岡県南駿病院歯科口腔外科　勤務" },
    { year: "1982年", desc: "医療法人社団愛進会小児矯正歯科　勤務" },
    { year: "1984年", desc: "永田歯科医院　開設" },
    { year: "1986年", desc: "東京大学医学部口腔外科　研修医" },
    { year: "2003年", desc: "フィンランドトゥルク大学予防歯科　留学" },
    { year: "2005年", desc: "ミシガン大学歯周再生療法科　留学" },
    { year: "2006年", desc: "南カリフォルニア大学インプラント科　留学" },
    { year: "2008年", desc: "医療法人社団学而会に組織変更・理事長に就任" },
    { year: "2010年", desc: "日本歯科大学付属病院臨床講師に就任" },
    { year: "2011年", desc: "国際インプラント学会（ICOI）アジア太平洋地区日本役員に就任\nニューヨーク大学　審美・インプラント科卒業" },
];

const MEMBERSHIPS = [
    "日本歯科医師会会員",
    "厚生労働省指定臨床研修指導医",
    "国際インプラント学会フェロー",
    "フィンランドトゥルク大学予防歯科フェロー",
    "日本矯正歯科学会正会員",
    "日本口腔インプラント学会会員",
    "近未来オステオインプラント学会会員",
    "日本歯周病学会会員",
    "日本顎咬合学会会員",
];

const DOCTORS = [
    { name: "田村 亮祐", title: "歯科医師", note: "" },
    { name: "城所 明光", title: "歯科医師", note: "日本矯正歯科学会専門医" },
    { name: "阿部 恵一", title: "歯科医師", note: "歯科麻酔学会専門医" },
    { name: "四宮田 壮", title: "歯科医師", note: "" },
];

const NEWS = [
    { date: "2017年10月28日", text: "第7回学而会セミナー「歯周外科手術ハンズオン」当院院長 永田彰純講師" },
    { date: "2017年6月24日", text: "第6回学而会セミナー、日本大学 歯周病学講座特任教授 伊藤公一先生による講演" },
    { date: "2017年6月18〜24日", text: "院長、スリランカにて手術及び講義" },
    { date: "2017年5月27日", text: "第5回学而会セミナー、田中志歩先生・阿部健先生・中谷一空先生による症例発表" },
    { date: "2017年4月22日", text: "第4回学而会セミナー、日本歯内療法学会理事長 五十嵐勝先生による講演" },
    { date: "2017年3月25日", text: "第3回学而会セミナー、当院院長による「インプラント治療成功の鍵（初級編）」" },
    { date: "2017年2月28日", text: "第2回学而会セミナー、東京歯科大学 櫻井誠先生による講演" },
    { date: "2017年1月28日", text: "第1回学而会セミナー、東京歯科大学 阿部伸一教授による講演" },
    { date: "2016年10月7〜12日", text: "シドニーにてインプラント学会参加" },
    { date: "2015年9月22〜26日", text: "ストックホルムにてヨーロッパインプラント学会参加" },
];

export default function AboutPage() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 80);
    }, []);

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
        .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.in { opacity: 1; transform: translateY(0); }
        .glass-card {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.9);
          border-radius: 8px;
          box-shadow: 0 4px 24px rgba(60,120,90,0.07);
        }
        .section-bar {
          width: 3px; height: 28px;
          background: linear-gradient(#4a9a70, #8dd4b0);
          border-radius: 2px; flex-shrink: 0;
        }
        .timeline-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: #4a9a70; flex-shrink: 0; margin-top: 6px;
        }
          #director {
            scroll-margin-top: var(--header-height);
                    }
      `}</style>

            {/* ヒーロー */}
            <section style={{ padding: "60px 40px 48px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.78rem", letterSpacing: "0.35em", color: "#4a9a70", marginBottom: "10px" }}>ABOUT</p>
                    <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 300, letterSpacing: "0.04em", lineHeight: 1.2, marginBottom: "20px" }}>
                        当院について
                    </h1>
                </div>
            </section>

            {/* クリニック紹介 */}
            <section style={{ padding: "0 40px 72px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.1s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                        <div className="section-bar" />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em" }}>クリニックのご紹介</h2>
                    </div>
                    <div className="glass-card" style={{ padding: "36px 40px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            {[
                                "1979年10月1日に、東京都大田区の蒲田と大森の中間にある京浜急行梅屋敷駅の近くで開院し、2020年5月7日に現在地に移転しました。",
                                "生後間もない乳幼児から、100歳位の高齢者まで、幅広い年齢層の患者さんに対応できるように、海外の大学での研修から国内外の学会、講習会を通して院内での勉強会を積極的に行なうようにしています。",
                                "当院における基本的なコンセプトは、フィンランド型の予防処置をベースにした診療システムを構築している事です。",
                                "お子様の場合、虫歯を作らない、作らせない口腔環境を提案し、健康できれいな歯並びの永久歯列を完成させる事を目標としています。",
                                "また、成人の方には、出来るだけ自分の歯を失なわない、入れ歯にならない為の情報を提供し、管理メインテナンスを行い、快適な食生活を維持できるように努めています。",
                                "残念ながら、入れ歯になってしまった方には、インプラントによる治療をお勧めしています。インプラントの処置は、専用の手術室にて行い、最終的には、天然歯と変わらない美味しく噛める喜びを体験して頂けると心から嬉しく思っています。",
                                "なお、初めて受診される方でプライバシーの確保を優先させたい方は、個室での診療室も用意してありますので、その旨、受付にお伝えするか、問診表にお書き下さい。",
                            ].map((text, i) => (
                                <p key={i} style={{ fontSize: "0.9rem", color: "#3a5a4a", lineHeight: 2.1 }}>{text}</p>
                            ))}
                            <div style={{
                                marginTop: "8px", padding: "20px 24px",
                                background: "linear-gradient(135deg, rgba(74,154,112,0.08), rgba(141,212,176,0.1))",
                                borderLeft: "3px solid #4a9a70", borderRadius: "4px"
                            }}>
                                <p style={{ fontSize: "1rem", color: "#2d6a48", fontWeight: 600, letterSpacing: "0.05em", fontStyle: "italic" }}>
                                    『抜かない、削らない、だから痛くない』
                                </p>
                                <p style={{ fontSize: "0.84rem", color: "#5a7a6a", marginTop: "8px" }}>
                                    そんな歯科医療を実践できるよう努力しています。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 院長紹介 */}
            <section id="director" style={{ padding: "0 40px 72px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.2s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                        <div className="section-bar" />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em" }}>院長紹介</h2>
                    </div>
                    <div className="glass-card" style={{ padding: "36px 40px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
                            {/* 左：プロフィール */}
                            <div>
                                <div style={{
                                    background: "linear-gradient(135deg, #c8e8d8, #daf0e6)",
                                    borderRadius: "6px", height: "200px",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    marginBottom: "24px"
                                }}>
                                    <div style={{ textAlign: "center", color: "#4a8a70" }}>
                                        <div style={{ fontSize: "4rem" }}>👨‍⚕️</div>
                                        <p style={{ fontSize: "0.78rem", letterSpacing: "0.1em", marginTop: "8px" }}>院長写真</p>
                                    </div>
                                </div>
                                <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", color: "#4a9a70", marginBottom: "6px" }}>DIRECTOR</p>
                                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 400, marginBottom: "4px" }}>永田 彰純</h3>
                                <p style={{ fontSize: "0.82rem", color: "#7a8e86", marginBottom: "20px" }}>院長 / 理事長</p>
                                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                    {MEMBERSHIPS.map((m, i) => (
                                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                                            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4a9a70", flexShrink: 0, marginTop: "7px" }} />
                                            <p style={{ fontSize: "0.8rem", color: "#4a5e58", lineHeight: 1.7 }}>{m}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 右：経歴 */}
                            <div>
                                <p style={{ fontSize: "0.78rem", letterSpacing: "0.2em", color: "#4a9a70", marginBottom: "20px" }}>CAREER</p>
                                <div style={{ position: "relative", paddingLeft: "20px", borderLeft: "2px solid #c8e8d8" }}>
                                    {CAREER.map((c, i) => (
                                        <div key={i} style={{ position: "relative", marginBottom: "18px" }}>
                                            <div style={{
                                                position: "absolute", left: "-25px", top: "6px",
                                                width: "8px", height: "8px", borderRadius: "50%",
                                                background: "#4a9a70", border: "2px solid white"
                                            }} />
                                            <p style={{ fontSize: "0.72rem", color: "#4a9a70", letterSpacing: "0.08em", marginBottom: "3px" }}>{c.year}</p>
                                            <p style={{ fontSize: "0.85rem", color: "#3a5a4a", lineHeight: 1.7, whiteSpace: "pre-line" }}>{c.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 医師紹介 */}
            <section style={{ padding: "0 40px 72px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.3s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                        <div className="section-bar" />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em" }}>医師紹介</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
                        {DOCTORS.map((doc) => (
                            <div key={doc.name} className="glass-card" style={{ padding: "28px 24px", textAlign: "center" }}>
                                <div style={{
                                    width: "72px", height: "72px", borderRadius: "50%",
                                    background: "linear-gradient(135deg, #c8e8d8, #daf0e6)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: "2rem", margin: "0 auto 16px"
                                }}>👨‍⚕️</div>
                                <p style={{ fontSize: "0.72rem", letterSpacing: "0.15em", color: "#4a9a70", marginBottom: "6px" }}>{doc.title}</p>
                                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 400, marginBottom: "8px" }}>{doc.name}</h3>
                                {doc.note && (
                                    <p style={{ fontSize: "0.75rem", color: "#7a8e86", letterSpacing: "0.05em" }}>{doc.note}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 新着情報 */}
            <section style={{ padding: "0 40px 100px", maxWidth: "1100px", margin: "0 auto" }}>
                <div className={`fade-up ${visible ? "in" : ""}`} style={{ transitionDelay: "0.4s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                        <div className="section-bar" />
                        <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em" }}>学会・セミナー情報</h2>
                    </div>
                    <div className="glass-card" style={{ padding: "8px 0" }}>
                        {NEWS.map((n, i) => (
                            <div key={i} style={{
                                display: "flex", gap: "24px", alignItems: "flex-start",
                                padding: "16px 32px",
                                borderBottom: i < NEWS.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none"
                            }}>
                                <span style={{ fontSize: "0.78rem", color: "#4a9a70", whiteSpace: "nowrap", letterSpacing: "0.05em", paddingTop: "2px", minWidth: "120px" }}>{n.date}</span>
                                <p style={{ fontSize: "0.87rem", color: "#3a5a4a", lineHeight: 1.8 }}>{n.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 戻るリンク */}
            <div style={{ textAlign: "center", paddingBottom: "80px" }}>
                <Link href="/" style={{
                    display: "inline-block", fontSize: "0.85rem", letterSpacing: "0.12em",
                    color: "#4a9a70", textDecoration: "none",
                    borderBottom: "1px solid #4a9a70", paddingBottom: "2px"
                }}>← トップへ戻る</Link>
            </div>
        </main>
    );
}