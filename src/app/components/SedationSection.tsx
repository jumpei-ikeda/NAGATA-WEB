export default function SedationSection() {
    return (
        <section className="w-full max-w-3xl">
            <h2
                className="text-2xl font-bold text-center mb-6"
                style={{ color: "#2d6a4f" }}
            >
                恐怖のない安心治療とは
            </h2>

            <div
                className="rounded-2xl p-6 md:p-8 flex flex-col gap-6"
                style={{ background: "rgba(255,255,255,0.7)" }}
            >
                {/* リード文 */}
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#333" }}>
                    歯科医院を受診する患者さんに治療を行う上で不安な事、心配な事のアンケートをとりますと、沢山のご意見やご要望をお聞きします。順番に箇条書きしますと、（１）痛くないかどうか心配　（２）怖くない歯科医師かどうか　（３）治療の腕がよいかどうか　（４）説明をよくしてくれるかどうか　（５）料金は適正かどうか　（６）通院しやすいか？　以上の事が上げられます。
                </p>

                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#333" }}>
                    しかし、多くのアンケートでわかる事は上記の（1）や（2）の痛くないかどうか、不安なく受診できるかどうかが必ず患者さんの要望の上位にきます。そこで当院では、<strong>セディエーション（鎮静法）</strong>を実施しています。セディエーション（鎮静法）を利用すると患者さんは眠っている間に痛み等感じず全身管理下のもと安全に治療を終える事ができます。
                </p>

                {/* 対象患者 */}
                <div
                    className="rounded-xl p-5"
                    style={{ background: "rgba(234,245,240,0.8)", borderLeft: "4px solid #52b788" }}
                >
                    <p className="text-sm font-semibold mb-3" style={{ color: "#2d6a4f" }}>
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
                                <span className="font-bold shrink-0" style={{ color: "#52b788" }}>{i + 1}）</span>
                                {item}
                            </li>
                        ))}
                    </ol>
                </div>

                {/* クロージング */}
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#333" }}>
                    お悩みの方も一緒にお口の健康を改善しましょう。痛みのない、安心できる歯科医療を実践したいと思っています。料金は治療内容、治療時間等により異なります。御来院の上ご相談下さい。
                </p>
            </div>
        </section>
    );
}