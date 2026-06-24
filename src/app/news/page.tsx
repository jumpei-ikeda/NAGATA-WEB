import { client, News } from "@/lib/microcms/client";

async function getAllNews() {
    const data = await client.getList<News>({
        endpoint: "news",
        queries: { limit: 100, orders: "-date" },
    });
    return data.contents;
}

export default async function NewsPage() {
    const newsList = await getAllNews();

    return (
        <main style={{ padding: "40px 40px", maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
                <div style={{
                    width: "3px", height: "28px",
                    background: "var(--bg-gradient)",
                    borderRadius: "2px"
                }} />
                <h1 style={{ fontSize: "1.1rem", letterSpacing: "0.15em", color: "#1a3028" }}>お知らせ</h1>
            </div>

            <div style={{
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.9)",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(60,120,90,0.07)",
            }}>
                {newsList.map((news, i) => (
                    <div key={news.id} style={{
                        padding: "24px 28px",
                        borderBottom: i < newsList.length - 1 ? "1px solid rgba(180,220,200,0.4)" : "none",
                    }}>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "24px", marginBottom: "12px" }}>
                            <span style={{
                                flexShrink: 0,
                                fontSize: "0.8rem",
                                color: "#4a9a70",
                                letterSpacing: "0.05em",
                                fontFamily: "'Cormorant Garamond', serif",
                            }}>
                                {new Date(news.date).toLocaleDateString("ja-JP", {
                                    year: "numeric", month: "2-digit", day: "2-digit"
                                })}
                            </span>
                            <span style={{ fontSize: "0.9rem", color: "#1a3028", fontWeight: 500 }}>
                                {news.title}
                            </span>
                        </div>
                        <div
                            style={{ fontSize: "0.88rem", color: "#4a7060", lineHeight: 1.8 }}
                            dangerouslySetInnerHTML={{ __html: news.body }}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}