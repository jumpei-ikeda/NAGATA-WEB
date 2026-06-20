export default function HomeVisitSection() {
    return (
        <section className="w-full max-w-7xl">
            <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#2d6a4f" }}>
                訪問診療のご案内
            </h2>

            <div
                className="rounded-2xl p-6 md:p-8"
                style={{ background: "rgba(255,255,255,0.7)" }}
            >
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#333" }}>
                    お身体が不自由で介護が必要な高齢者の方や、障害をお持ちで寝たきりの方など、通院して治療を受けることが難しい方を対象に訪問診療に伺います。むし歯や入れ歯の治療・予防はもとより、口腔内の清掃や口腔リハビリ等によって、歯周病菌を原因とするさまざまな疾病の予防なども行います。
                </p>

                <div
                    className="rounded-xl p-5 mt-4"
                    style={{ background: "rgba(234,245,240,0.8)", borderLeft: "4px solid #52b788" }}
                >
                    <p className="text-sm font-semibold mb-3" style={{ color: "#2d6a4f" }}>
                        治療費の目安
                    </p>
                    <ul className="text-sm md:text-base leading-relaxed space-y-1" style={{ color: "#333" }}>
                        <li>・国保・社保　→　３割負担</li>
                        <li>・後期高齢者　→　１割（又は３割）負担</li>
                        <li>・障害者・生活保護　→　基本無料</li>
                        <li>・介護保険　→　月初め 850円　2回目 850円　3回目 350円　4回目 350円</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed mt-3" style={{ color: "#333" }}>
                        訪問歯科診療の料金＝診療費＋指導費＋治療費の合計となります。交通費・出張費は一切かかりません。（車での移動が必要で駐車場がない場合のみ駐車料金が必要です）
                    </p>
                </div>

                <div
                    className="rounded-xl p-5 mt-4"
                    style={{ background: "rgba(234,245,240,0.8)", borderLeft: "4px solid #52b788" }}
                >
                    <p className="text-sm font-semibold mb-2" style={{ color: "#2d6a4f" }}>
                        お問い合わせ・訪問診療のお申し込み
                    </p>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: "#333" }}>
                        FAX又はメールにてご連絡ください。
                    </p>
                    <p className="text-sm md:text-base mt-2" style={{ color: "#333" }}>
                        FAX：<span style={{ fontWeight: 600 }}>０３（６４１０）８０１８</span>
                    </p>
                </div>
            </div>
        </section>
    );
}