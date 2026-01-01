import Link from "next/link";
import Card from "@/components/ui/Card";

type NewsItem = {
    date: string; // YYYY-MM-DD
    title: string;
    href: string;
    tag?: "Release" | "Update" | "Note";
};

const news: NewsItem[] = [
    {
        date: "2026-01-01",
        title: "NEBULAB コーポレートサイトを公開しました。",
        href: "/news",
        tag: "Release",
    },
    {
        date: "2025-12-28",
        title: "Orbital Steel をブランドサブカラーとして採用しました。",
        href: "/news",
        tag: "Update",
    },
    {
        date: "2025-12-20",
        title: "NRT-LOFT の取り組みを事業ページに追記しました。",
        href: "/news",
        tag: "Note",
    },
];

const Tag = ({ tag }: { tag?: NewsItem["tag"] }) => {
    if (!tag) return null;
    return (
        <span className="rounded-full border border-[#e7d7c6] bg-[#fff3e0] px-2 py-0.5 text-[11px] font-semibold text-[#5c4d3c]">
            {tag}
        </span>
    );
};

export default function News() {
    return (
        <section id="news" className="mx-auto w-full max-w-5xl px-6 pb-16">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <h2 className="text-lg font-semibold tracking-tight">News</h2>
                    <p className="mt-1 text-sm text-[#5c4d3c]">
                        近況・更新情報をまとめています。
                    </p>
                </div>

                <Link
                    href="/news"
                    className="text-sm font-semibold text-[#3D2F24] underline underline-offset-4 decoration-[#d8c2ad] hover:opacity-80"
                >
                    すべて見る
                </Link>
            </div>

            <div className="mt-6 grid gap-3">
                {news.map((item) => (
                    <Link key={`${item.date}-${item.title}`} href={item.href}>
                        <Card
                            variant="default"
                            className="p-4 hover:-translate-y-[1px] hover:shadow-sm transition"
                        >
                            <div className="flex flex-wrap items-center gap-3">
                                <time className="text-xs text-[#6b5b4a]">{item.date}</time>
                                <Tag tag={item.tag} />
                            </div>

                            <div className="mt-2 text-sm font-semibold text-[#3D2F24]">
                                {item.title}
                            </div>

                            <div className="mt-2 text-xs text-[#6b5b4a]">
                                詳細を見る →
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
}
