export default function SecondOpinionSection() {
    return (
        <section className="w-full max-w-7xl">
            <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#2d6a4f" }}>
                セカンドオピニオン
            </h2>

            <div
                className="rounded-2xl p-6 md:p-8"
                style={{ background: "rgba(255,255,255,0.7)" }}
            >
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#333" }}>
                    当院は患者さんやご家族と担当医との信頼関係をより強固にするために、他院とのセカンドオピニオンの実施、及び当院内でのセカンドオピニオンの実施に協力いたします。
                </p>
                <br />
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#333" }}>
                    セカンドオピニオンとは、患者さんがご自分の病気や受けている医療の理解を深めるため、担当医以外の専門医の意見を聞いて情報を収集することです。以下のような場合にご活用ください。
                </p>

                <div
                    className="rounded-xl p-5 mt-4"
                    style={{ background: "rgba(234,245,240,0.8)", borderLeft: "4px solid #52b788" }}
                >
                    <ul className="text-sm md:text-base leading-relaxed space-y-1" style={{ color: "#333" }}>
                        <li>（１）担当医に診断や治療方針の説明を受けたが、どうしたらいいか悩んでいる時</li>
                        <li>（２）いくつかの治療方針を提示されているが、迷っている時</li>
                        <li>（３）他に治療法はないかと考えている時</li>
                    </ul>
                </div>

                <div
                    className="rounded-xl p-5 mt-4"
                    style={{ background: "rgba(234,245,240,0.8)", borderLeft: "4px solid #52b788" }}
                >
                    <p className="text-sm font-semibold mb-2" style={{ color: "#2d6a4f" }}>
                        セカンドオピニオンのお申し込みについて
                    </p>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: "#333" }}>
                        現在受診している医院での診療情報提供書とレントゲンフィルム・検査データ等の資料をご持参ください。
                    </p>
                </div>
            </div>
        </section>
    );
}