export default function CTSection() {
    return (
        <section className="w-full max-w-7xl">
            <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#2d6a4f" }}>
                歯科用CTを導入しております
            </h2>

            <div style={{ display: "flex", gap: "16px", marginBottom: "24px", justifyContent: "center" }}>
                <img
                    src="/top_photo_ct_01-2.jpg"
                    alt="歯科用CT"
                    style={{
                        width: "35%",
                        maxHeight: "400px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 20px rgba(60,120,90,0.12)",
                        objectFit: "cover",
                    }}
                />
                <img
                    src="/top_photo_ct_02-2.jpg"
                    alt="歯科用CT"
                    style={{
                        width: "35%",
                        maxHeight: "400px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 20px rgba(60,120,90,0.12)",
                        objectFit: "cover",
                    }}
                />
            </div>

            <div
                className="rounded-2xl p-6 md:p-8"
                style={{ background: "rgba(255,255,255,0.7)" }}
            >
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#333" }}>
                    インプラントや再生医療、審美歯科を中心とした最先端の治療を行なう上で必要な、ＣＴ撮影装置を導入しています。
                </p>
                <br />
                <div
                    className="rounded-xl p-5"
                    style={{ background: "rgba(234,245,240,0.8)", borderLeft: "4px solid #52b788" }}
                >
                    <p className="text-sm font-semibold mb-2" style={{ color: "#2d6a4f" }}>
                        CT撮影のみをご希望の歯科医院様へ
                    </p>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: "#333" }}>
                        料金は　全顎解析 25,000円　片顎解析 15,000円　です。
                        <br />
                        詳しくは、
                    <a
                        href="https://www.dental-nagata.com/img/ct.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#4a9a70", borderBottom: "1px solid #4a9a70", textDecoration: "none" }}
        >
                        当院指定の申込用紙
                    </a>
                    がありますので、お電話にてその旨ご相談下さい。
                </p>
                </div>
            </div>
        </section>
    );
}