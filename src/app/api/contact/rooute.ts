import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ★ ここを実際の受信メールアドレスに変更してください
const TO_EMAIL = "konjou0106@yahoo.co.jp";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, kana, age, gender, email, phone, message } = body;

    try {
        await resend.emails.send({
            from: "永田歯科医院 <onboarding@resend.dev>", // Resend認証後に独自ドメインに変更
            to: TO_EMAIL,
            replyTo: email,
            subject: `【お問い合わせ】${name} 様より`,
            text: `
お問い合わせが届きました。

■ お名前　　：${name}
■ フリガナ　：${kana}
■ 年齢　　　：${age} 歳
■ 性別　　　：${gender}
■ メール　　：${email}
■ 電話番号　：${phone || "未記入"}

■ お問い合わせ内容：
${message}
            `.trim(),
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Resend error:", error);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}