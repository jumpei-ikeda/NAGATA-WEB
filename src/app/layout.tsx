import "./globals.css";
import Header from "./components/Header";
import { Noto_Serif_JP } from "next/font/google";

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJP.className} min-h-screen flex flex-col`}>
        
        <Header />

        <main className="relative flex-1 pt-[var(--header-height)]" style={{ backgroundColor: "#ffffff" }}>
          <div className="content-wrapper relative">
            {children}
          </div>
        </main>
        <footer className="bg-[#d4ffe3]/80 text-[#3a3a3a] py-4 px-4 text-center text-sm break-words">
          永田歯科医院 〒143-0015 東京都大田区大森西6-17-1 4th-one TEL：03-6410-8008
        </footer>

      </body>
    </html>
  );
}