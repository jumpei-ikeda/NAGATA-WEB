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
      <body className={`${notoSerifJP.className} bg-[#f7f3e8] min-h-screen flex flex-col`}>

        <Header />

        <main className="flex-1 pt-[80px]">
          {children}
        </main>

        <footer className="bg-green-200/90 text-[#3a3a3a] p-6 text-center">
          © 2025 永田歯科 All Rights Reserved.
        </footer>

      </body>
    </html>
  );
}