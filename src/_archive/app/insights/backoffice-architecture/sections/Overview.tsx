// app/insights/backoffice-architecture/sections/Overview.tsx
import { Card, H2 } from "../components/Ui";
import { OverviewDiagram } from "../components/OverviewDiagram";

export const Overview = () => {
    return (
        <section id="overview" className="space-y-4">
            <H2 id="overview">全体アーキテクチャ</H2>

            <OverviewDiagram />

            <Card>
                <p className="text-sm leading-relaxed" style={{ color: "var(--cosmic-dark)" }}>
                    このアーキテクチャの狙いは「変更を局所化」することです。Controllerを薄く保ち、業務フローはUseCaseに集約し、DB操作はModelに寄せます。
                    抽出条件はSQLテンプレートとして切り出しておくことで、条件追加・微調整・チューニングの影響を最小化できます。
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div
                        className="rounded-xl p-4"
                        style={{ backgroundColor: "var(--cosmic-latte)", border: "1px solid var(--cosmic-beige)" }}
                    >
                        <div className="text-sm font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                            重要ポイント
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--cosmic-dark)" }}>
                            <li>「どこに何を書くか」を固定して迷子を防ぐ</li>
                            <li>業務ルールはUseCaseに集約して拡張の軸を作る</li>
                            <li>SQLテンプレートで抽出条件を安定化し差分を追いやすくする</li>
                        </ul>
                    </div>

                    <div
                        className="rounded-xl p-4"
                        style={{ backgroundColor: "var(--cosmic-latte)", border: "1px solid var(--cosmic-beige)" }}
                    >
                        <div className="text-sm font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                            向いている対象
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--cosmic-dark)" }}>
                            <li>バックオフィス中心（抽出・出力・運用画面）</li>
                            <li>例外と条件追加が多い業務領域</li>
                            <li>レガシー基盤を活かして段階的に改善したいケース</li>
                        </ul>
                    </div>
                </div>
            </Card>
        </section>
    );
};
