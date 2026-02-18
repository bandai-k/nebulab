import { toc } from "../content/toc";
import { Card, Subtle, Hr } from "../components/Ui";

export const InlineToc = () => {
    return (
        <Card>
            <div className="space-y-3">
                <div className="text-sm font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                    この記事の内容
                </div>

                <ul className="grid gap-2 text-sm md:grid-cols-2" style={{ color: "var(--cosmic-dark)" }}>
                    {toc.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`} className="hover:underline">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <Hr />
                <Subtle>
                    ※本記事は特定の顧客・案件を示すものではなく、実務で有効だった設計パターンを一般化して紹介しています。
                </Subtle>
            </div>
        </Card>
    );
};
