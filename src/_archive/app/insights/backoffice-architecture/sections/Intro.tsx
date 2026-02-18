import { Badge } from "../components/Ui";

export const Intro = () => {
    return (
        <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
                <Badge>Architecture</Badge>
                <Badge>Backoffice</Badge>
                <Badge>MVC</Badge>
                <Badge>DI</Badge>
                <Badge>UseCase</Badge>
                <Badge>CSV</Badge>
            </div>

            <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight md:text-4xl" style={{ color: "var(--cosmic-darker)" }}>
                    安全に拡張できるバックオフィス設計
                    <span className="mt-2 block text-base font-medium md:text-lg" style={{ color: "var(--cosmic-dark)" }}>
                        — レガシーMVC基盤に「業務ロジック層」を追加する設計パターン —
                    </span>
                </h1>

                <p className="max-w-3xl text-base leading-relaxed" style={{ color: "var(--cosmic-dark)" }}>
                    バックオフィス（管理画面）系の業務システムでは、「動く」ことよりも{" "}
                    <span className="font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                        壊れない・説明できる・後から変更できる
                    </span>{" "}
                    ことが重要になります。運用で例外が増えやすく、条件追加や手順変更も発生しやすい領域だからです。
                </p>

                <p className="max-w-3xl text-base leading-relaxed" style={{ color: "var(--cosmic-dark)" }}>
                    本ページでは、NEBULABが実務で重視している「責務を明確に分離し、変更を局所化する」ための設計の型を、
                    特定の案件・顧客・プロダクトに依存しない形で整理します。
                </p>

                <div className="flex flex-col gap-2 text-sm md:flex-row md:flex-wrap md:items-center md:gap-x-4">
                    <span style={{ color: "var(--cosmic-brown)" }}>想定読者：業務システムの開発・保守に関わるエンジニア／Tech Lead</span>
                    <span className="hidden md:inline" style={{ color: "var(--cosmic-tan)" }}>
                        •
                    </span>
                    <span style={{ color: "var(--cosmic-brown)" }}>テーマ：責務分離・DI運用・拡張設計</span>
                </div>
            </div>
        </header>
    );
};
