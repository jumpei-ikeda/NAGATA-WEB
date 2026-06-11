import { client, News } from "@/lib/microcms/client";
import Link from "next/link";

async function getNews() {
    const data = await client.getList<News>({
        endpoint: "news",
        queries: { limit: 10, orders: "-date" },
    });
    return data.contents;
}

export default async function NewsSection() {
    const newsList = await getNews();

    if (newsList.length === 0) return null;

    return (
        <section style={{
            padding: "60px 40px",
            maxWidth: "1100px",
            margin: "0 auto",
        }}>
            {/* 見出し */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
                <div style={{
                    width: "3px", height: "28px",
                    background: "linear-gradient(#4a9a70, #8dd4b0)",
                    borderRadius: "2px"
                }} />
                <h2 style={{ fontSize: "1.1rem", letterSpacing: "0.15em", color: "#1a3028" }}>お知らせ</h2>
            </div>

            {/* リスト */}
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
                        display: "flex",
                        alignItems: "baseline",
                        gap: "24px",
                        padding: "18px 28px",
                        borderBottom: i < newsList.length - 1 ? "1px solid rgba(180,220,200,0.4)" : "none",
                    }}>
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
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                            <span style={{
                                fontSize: "0.9rem",
                                color: "#1a3028",
                                lineHeight: 1.7,
                            }}>
                                {news.title}
                            </span>
                            <span style={{
                                fontSize: "0.82rem",
                                color: "#4a7060",
                                lineHeight: 1.7,
                            }}
                                dangerouslySetInnerHTML={{ __html: news.body }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* もっと見る */}
            <div style={{ textAlign: "right", marginTop: "16px" }}>
                <Link href="/news" style={{
                    fontSize: "0.82rem",
                    color: "#4a9a70",
                    textDecoration: "none",
                    borderBottom: "1px solid #4a9a70",
                    paddingBottom: "2px",
                    letterSpacing: "0.08em",
                }}>
                    すべて見る →
                </Link>
            </div>
        </section>
    );
}