import { Card, H2, Subtle } from "../components/Ui";

export const DiAndNaming = () => {
    return (
        <section id="di" className="space-y-4">
            <H2 id="di">DIと命名規約の併用</H2>

            <Card>
                <p className="text-sm leading-relaxed" style={{ color: "var(--cosmic-dark)" }}>
                    DIは Dependency Injection（依存性注入）の略です。設定値や差し替え可能な依存（外部I/F、実装の切り替え点など）を、
                    コンテナ（設定）側から注入して管理しやすくします。
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div
                        className="rounded-xl p-4"
                        style={{ backgroundColor: "var(--cosmic-latte)", border: "1px solid var(--cosmic-beige)" }}
                    >
                        <div className="text-sm font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                            DIで管理しやすい依存
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--cosmic-dark)" }}>
                            <li>外部I/Fクライアント（API/通知/ストレージ等）</li>
                            <li>設定値が必要なもの（URL/timeout/リトライ）</li>
                            <li>将来差し替えたい実装（帳票生成、出力方式など）</li>
                        </ul>
                    </div>

                    <div
                        className="rounded-xl p-4"
                        style={{ backgroundColor: "var(--cosmic-latte)", border: "1px solid var(--cosmic-beige)" }}
                    >
                        <div className="text-sm font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                            命名規約・autoloadで運用しやすい領域
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm" style={{ color: "var(--cosmic-dark)" }}>
                            <li>単純CRUD中心のModel</li>
                            <li>差し替えが不要なユーティリティ</li>
                            <li>フレームワーク側で自動解決される範囲</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-4 rounded-xl p-4" style={{ backgroundColor: "var(--cosmic-latte)" }}>
                    <Subtle>
                        実務では「差し替えが必要なもの・設定が必要なものはDIへ」「単純CRUDは命名規約運用でもOK」のバランスが扱いやすいです。
                        ただし暗黙依存が増えすぎると追跡性が下がるため、重要な依存は明示する運用がおすすめです。
                    </Subtle>
                </div>
            </Card>
        </section>
    );
};
