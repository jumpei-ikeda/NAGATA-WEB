import Link from "next/link";

export default function SedationSection() {
    return (
        <section className="w-full max-w-7xl">
            <style>{`
                    .list-box { width: 100%; margin-left: 0; }
                    @media (min-width: 768px) { .list-box { width: 50vw; margin-left: auto; } }
                    .left-col { 
                                width: 100%;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                            }
                    @media (min-width: 768px) { 
                    .left-col { 
                                width: clamp(180px, 25vw, 300px);
                                margin-left: clamp(16px, 3vw, 48px);
                                margin-left: clamp(24px, 6vw, 100px);
                                }
                            }
                    `}</style>

            {/* 上段：左＋右 */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">

                {/* 左：タイトル・院長写真・リンク */}
                <div className="left-col gap-4">
                    <h2 className="text-2xl font-bold" style={{ color: "#2d6a4f" }}>
                        こわくない安心治療とは
                    </h2>
                    <img
                        src="/2021_director.jpg"
                        alt="院長"
                        style={{
                            width: "clamp(140px, 20vw, 200px)",
                            height: "clamp(140px, 20vw, 200px)",
                            objectFit: "cover",
                            borderRadius: "50%",
                            border: "3px solid rgba(74,154,112,0.3)",
                            boxShadow: "0 4px 20px rgba(60,120,90,0.12)",
                        }}
                    />
                    <a
                    href="/about#director"
                    style={{
                        fontSize: "0.88rem",
                        color: "#4a9a70",
                        textDecoration: "none",
                        borderBottom: "1px solid #4a9a70",
                        paddingBottom: "2px",
                        letterSpacing: "0.08em",
                    }}
                    >
                    院長紹介はこちら →
                </a>
            </div>

            {/* 右：箇条書きのみ */}
                <div
                    className="list-box rounded-2xl p-6 md:p-8 flex flex-col gap-4"
                    style={{ background: "rgba(255,255,255,0.7)"}}
                >
                <p className="text-sm font-semibold" style={{ color: "#2d6a4f" }}>
                    下記の患者さんも心配せず是非ご相談下さい
                </p>
                <ol className="flex flex-col gap-2">
                    {[
                        "循環器疾患のある方（高血圧症、脳梗塞、心臓疾患 等）",
                        "極端な怖がりの方",
                        "閉所恐怖症の方",
                        "歯科医院の音が苦手な方",
                        "治療中に吐き気をもよおす方",
                        "介護の必要な方の治療",
                        "身体の弱い方 等",
                    ].map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm md:text-base" style={{ color: "#333" }}>
                            <span className="shrink-0" style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: "#52b788",
                                display: "inline-block",
                                marginTop: "6px"
                            }}>
                            </span>
                            {item}
                        </li>
                    ))}
                </ol>
            </div>
        </div>

            {/* 下段：横幅全体 */ }
    <div
        className="rounded-2xl p-6 md:p-8 flex flex-col gap-6 w-full"
        style={{ background: "rgba(255,255,255,0.7)" }}
    >
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#333" }}>
                    歯科医院を受診する患者さんに治療を行う上で不安な事、心配な事のアンケートをとりますと、沢山のご意見やご要望をお聞きします。
                </p>
                <ol className="flex flex-col gap-2">
                    {[
                        "痛くないかどうか心配",
                        "怖くない歯科医師かどうか",
                        "治療の腕がよいかどうか",
                        "説明をよくしてくれるかどうか",
                        "料金は適正かどうか",
                        "通院しやすいか",
                    ].map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm md:text-base items-center" style={{ color: "#333" }}>
                            <span className="font-bold shrink-0" style={{ color: "#52b788" }}>（{i + 1}）</span>
                            {item}
                        </li>
                    ))}
                </ol>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#333" }}>
                    しかし、多くのアンケートでわかる事は上記の（1）や（2）の痛くないかどうか、不安なく受診できるかどうかが必ず患者さんの要望の上位にきます。そこで当院では、<br /><strong>セディエーション（鎮静法）</strong>を実施しています。セディエーション（鎮静法）を利用すると患者さんは眠っている間に痛み等感じず全身管理下のもと安全に治療を終える事ができます。
        </p>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#333" }}>
            お悩みの方も一緒にお口の健康を改善しましょう。痛みのない、安心できる歯科医療を実践したいと思っています。料金は治療内容、治療時間等により異なります。御来院の上ご相談下さい。
        </p>
    </div>

        </section >
    );
}