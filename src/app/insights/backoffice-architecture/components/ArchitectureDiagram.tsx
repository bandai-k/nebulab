export const ArchitectureDiagram = () => {
    return (
        <div
            className="overflow-hidden rounded-2xl p-4 md:p-5"
            style={{
                backgroundColor: "var(--cosmic-latte)",
                border: "1px solid var(--cosmic-beige)",
            }}
        >
            {/* Header */}
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div className="space-y-1">
                    <div className="text-sm font-semibold" style={{ color: "var(--cosmic-darker)" }}>
                        前提：2段構成（上：MVC / 下：UseCase・DI・SQL）
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--cosmic-brown)" }}>
                        上段は画面の流れ（View↔Controller→Model）。下段は業務フロー（UseCase）と、設定/依存（DI）と、抽出の根拠（SQLテンプレート）。
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                    <span
                        className="inline-flex items-center gap-2 rounded-full px-3 py-1"
                        style={{
                            backgroundColor: "var(--cosmic-cream)",
                            border: "1px solid var(--cosmic-beige)",
                            color: "var(--cosmic-dark)",
                        }}
                    >
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--accent-gold)" }} />
                        画面フロー（MVC）
                    </span>

                    <span
                        className="inline-flex items-center gap-2 rounded-full px-3 py-1"
                        style={{
                            backgroundColor: "var(--cosmic-cream)",
                            border: "1px solid var(--cosmic-beige)",
                            color: "var(--cosmic-dark)",
                        }}
                    >
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--cosmic-tan)" }} />
                        業務/設定/抽出（下段）
                    </span>
                </div>
            </div>

            {/* Diagram */}
            <div className="mt-4 overflow-x-auto">
                <svg
                    viewBox="0 0 1000 440"
                    className="h-auto w-[1000px] max-w-none"
                    role="img"
                    aria-label="2段構成：上段MVC、下段UseCase/DI/SQLの前提構成図"
                >
                    {/* ========= Canvas ========= */}
                    <rect x="20" y="20" width="960" height="400" rx="18" fill="var(--cosmic-cream)" opacity="0.55" />

                    {/* ========= Lane: MVC ========= */}
                    <rect x="36" y="56" width="928" height="160" rx="16" fill="var(--cosmic-cream)" opacity="0.55" />
                    <text
                        x="52"
                        y="74"
                        fontSize="13"
                        fontWeight="700"
                        fill="var(--cosmic-darker)"
                        dominantBaseline="hanging"
                    >
                        上段：MVC（画面の流れ）
                    </text>

                    {/* View */}
                    <rect
                        x="60"
                        y="96"
                        width="280"
                        height="100"
                        rx="16"
                        fill="var(--cosmic-cream)"
                        stroke="var(--cosmic-beige)"
                    />
                    <text x="80" y="120" fontSize="14" fontWeight="700" fill="var(--cosmic-darker)" dominantBaseline="hanging">
                        View（Template）
                    </text>
                    <text x="80" y="142" fontSize="12" fill="var(--cosmic-dark)" dominantBaseline="hanging">
                        入力フォーム / 一覧表示
                    </text>
                    <text x="80" y="162" fontSize="12" fill="var(--cosmic-brown)" dominantBaseline="hanging">
                        エラー表示テンプレート
                    </text>

                    {/* Controller */}
                    <rect
                        x="380"
                        y="96"
                        width="280"
                        height="100"
                        rx="16"
                        fill="var(--cosmic-cream)"
                        stroke="var(--cosmic-beige)"
                    />
                    <text x="400" y="120" fontSize="14" fontWeight="700" fill="var(--cosmic-darker)" dominantBaseline="hanging">
                        Controller
                    </text>
                    <text x="400" y="142" fontSize="12" fill="var(--cosmic-dark)" dominantBaseline="hanging">
                        入力整理 / バリデーション
                    </text>
                    <text x="400" y="162" fontSize="12" fill="var(--cosmic-brown)" dominantBaseline="hanging">
                        CSVなどレスポンス制御
                    </text>

                    {/* Model */}
                    <rect
                        x="700"
                        y="96"
                        width="264"
                        height="100"
                        rx="16"
                        fill="var(--cosmic-cream)"
                        stroke="var(--cosmic-beige)"
                    />
                    <text x="720" y="120" fontSize="14" fontWeight="700" fill="var(--cosmic-darker)" dominantBaseline="hanging">
                        Model（ORM / ActiveRecord）
                    </text>
                    <text x="720" y="142" fontSize="12" fill="var(--cosmic-dark)" dominantBaseline="hanging">
                        CRUD / 取得 / 永続化
                    </text>
                    <text x="720" y="162" fontSize="12" fill="var(--cosmic-brown)" dominantBaseline="hanging">
                        DB操作の集約
                    </text>

                    {/* MVC arrows */}
                    <line x1="340" y1="146" x2="380" y2="146" stroke="var(--accent-gold)" strokeWidth="3" />
                    <polygon points="380,146 368,138 368,154" fill="var(--accent-gold)" />

                    <line x1="380" y1="170" x2="340" y2="170" stroke="var(--accent-gold)" strokeWidth="2" opacity="0.65" />
                    <polygon points="340,170 352,162 352,178" fill="var(--accent-gold)" opacity="0.65" />

                    <line x1="660" y1="146" x2="700" y2="146" stroke="var(--accent-gold)" strokeWidth="3" />
                    <polygon points="700,146 688,138 688,154" fill="var(--accent-gold)" />

                    {/* ========= Separator ========= */}
                    <line x1="36" y1="230" x2="964" y2="230" stroke="var(--cosmic-beige)" strokeWidth="2" />

                    {/* ========= Lane: UseCase / DI / SQL ========= */}
                    <rect x="36" y="246" width="928" height="160" rx="16" fill="var(--cosmic-cream)" opacity="0.55" />
                    <text
                        x="52"
                        y="264"
                        fontSize="13"
                        fontWeight="700"
                        fill="var(--cosmic-darker)"
                        dominantBaseline="hanging"
                    >
                        下段：UseCase / DI / SQL（業務・設定・抽出）
                    </text>

                    {/* UseCase */}
                    <rect
                        x="60"
                        y="292"
                        width="300"
                        height="100"
                        rx="16"
                        fill="var(--cosmic-cream)"
                        stroke="var(--cosmic-beige)"
                    />
                    <text x="80" y="316" fontSize="14" fontWeight="700" fill="var(--cosmic-darker)" dominantBaseline="hanging">
                        UseCase（業務ロジック層）
                    </text>
                    <text x="80" y="338" fontSize="12" fill="var(--cosmic-dark)" dominantBaseline="hanging">
                        抽出 → フィルタ → 整形
                    </text>
                    <text x="80" y="358" fontSize="12" fill="var(--cosmic-brown)" dominantBaseline="hanging">
                        例外/メッセージ統一・拡張の軸
                    </text>

                    {/* DI */}
                    <rect
                        x="380"
                        y="292"
                        width="300"
                        height="100"
                        rx="16"
                        fill="var(--cosmic-cream)"
                        stroke="var(--cosmic-beige)"
                    />
                    <text x="400" y="316" fontSize="14" fontWeight="700" fill="var(--cosmic-darker)" dominantBaseline="hanging">
                        DI（YAML設定 / 注入）
                    </text>
                    <text x="400" y="338" fontSize="12" fill="var(--cosmic-dark)" dominantBaseline="hanging">
                        設定値 / 差し替え点の管理
                    </text>
                    <text x="400" y="358" fontSize="12" fill="var(--cosmic-brown)" dominantBaseline="hanging">
                        環境差分・実装差分を吸収
                    </text>

                    {/* SQL templates */}
                    <rect
                        x="700"
                        y="292"
                        width="264"
                        height="100"
                        rx="16"
                        fill="var(--cosmic-cream)"
                        stroke="var(--cosmic-beige)"
                    />
                    <text x="720" y="316" fontSize="14" fontWeight="700" fill="var(--cosmic-darker)" dominantBaseline="hanging">
                        SQLテンプレート
                    </text>
                    <text x="720" y="338" fontSize="12" fill="var(--cosmic-dark)" dominantBaseline="hanging">
                        抽出SQL / 参照SQL
                    </text>
                    <text x="720" y="358" fontSize="12" fill="var(--cosmic-brown)" dominantBaseline="hanging">
                        差分管理・調整を明確化
                    </text>

                    {/* Lower arrows */}
                    {/* UseCase -> DI（依存を利用する） */}
                    <line x1="360" y1="342" x2="380" y2="342" stroke="var(--cosmic-tan)" strokeWidth="3" />
                    <polygon points="380,342 368,334 368,350" fill="var(--cosmic-tan)" />

                    {/* UseCase -> SQL（抽出根拠） */}
                    <line x1="360" y1="318" x2="700" y2="318" stroke="var(--cosmic-tan)" strokeWidth="3" />
                    <polygon points="700,318 688,310 688,326" fill="var(--cosmic-tan)" />

                    {/* Controller -> UseCase（読み順） */}
                    <path
                        d="M520 196 C 520 232, 290 262, 210 292"
                        fill="none"
                        stroke="var(--accent-gold)"
                        strokeWidth="3"
                        opacity="0.95"
                    />
                    <polygon points="210,292 222,280 230,294" fill="var(--accent-gold)" />

                    {/* UseCase -> Model（DB操作はModelへ） */}
                    <path
                        d="M240 292 C 520 252, 760 242, 840 196"
                        fill="none"
                        stroke="var(--cosmic-tan)"
                        strokeWidth="3"
                        opacity="0.95"
                    />
                    <polygon points="840,196 827,188 828,203" fill="var(--cosmic-tan)" />

                    {/* Footnote */}
                    <text x="52" y="410" fontSize="11" fill="var(--cosmic-brown)" dominantBaseline="hanging">
                        ルール：画面の入口はController、業務判断はUseCase、永続化はModel、条件はSQLテンプレで差分を追う。
                    </text>
                </svg>
            </div>
        </div>
    );
};
