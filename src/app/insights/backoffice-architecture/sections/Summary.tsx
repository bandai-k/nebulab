import Link from "next/link";
import { Card, H2 } from "../components/Ui";

export const Summary = () => {
    return (
        <section id="summary" className="space-y-4">
            <H2 id="summary">まとめ</H2>

            <Card>
                <p className="text-sm leading-relaxed" style={{ color: "var(--cosmic-dark)" }}>
                    本ページでは、レガシーMVC基盤の上でも「責務を分けて変更を局所化する」ことで、バックオフィス機能を安全に拡張していくための設計パターンを整理しました。
                    重要なのは、最新の技術を詰め込むことではなく{" "}
                    <span className="font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                        変更に強い構造を先に作る
                    </span>{" "}
                    ことです。
                </p>

                <div className="mt-4 rounded-xl p-4" style={{ backgroundColor: "var(--cosmic-latte)" }}>
                    <div className="text-sm font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                        一文で言うと
                    </div>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--cosmic-dark)" }}>
                        Controllerは薄く、業務フローはUseCaseに集約し、ModelはCRUDに専念。DIは差し替えや設定が必要な依存に絞り、
                        命名規約・autoloadと併用して、レガシー基盤でも安全に拡張できるバックオフィスを作る。
                    </p>
                </div>
            </Card>

            {/* CTA */}
            <div className="pt-2">
                <div
                    className="rounded-2xl p-6"
                    style={{ backgroundColor: "var(--cosmic-cream)", border: "1px solid var(--cosmic-beige)" }}
                >
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-1">
                            <div className="text-sm font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                                NEBULABの設計支援
                            </div>
                            <p className="text-sm leading-relaxed" style={{ color: "var(--cosmic-dark)" }}>
                                既存基盤を活かしつつ、保守性の高い構成へ段階的に移行する設計も支援できます。
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition hover:opacity-95"
                                style={{ backgroundColor: "var(--accent-gold)", color: "var(--cosmic-darker)" }}
                            >
                                相談する
                            </Link>

                            <Link
                                href="/"
                                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition hover:bg-(--cosmic-beige)"
                                style={{
                                    backgroundColor: "transparent",
                                    color: "var(--cosmic-darker)",
                                    border: "1px solid var(--cosmic-tan)",
                                }}
                            >
                                トップへ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
