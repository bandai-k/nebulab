/**
 * WireDesk Lite - ユーティリティ関数
 * - localStorage操作
 * - ID生成
 * - テンプレート定義（3種類）
 * - テーマ定義（6種類）
 */

import {
  ParkingFlowBoard,
  BoardTemplate,
  TemplateId,
  ThemeId,
  ThemeDefinition,
} from "@/types/wiredesk";

// localStorage キー
const STORAGE_KEY = "wiredesk_boards";

// 有効なテーマIDリスト
const VALID_THEME_IDS: ThemeId[] = [
  "warm",
  "clean",
  "bold",
  "forest",
  "slate",
  "cherry",
];

/**
 * UUID生成（crypto.randomUUID() がなければフォールバック）
 */
export function generateId(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * localStorage が使用可能かチェック
 */
export function isLocalStorageAvailable(): boolean {
  try {
    const test = "__wiredesk_test__";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

/**
 * 全ボードを取得
 */
export function getAllBoards(): ParkingFlowBoard[] {
  if (!isLocalStorageAvailable()) {
    console.warn("localStorage is not available");
    return [];
  }
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Failed to parse boards from localStorage:", e);
    return [];
  }
}

/**
 * IDでボードを取得
 */
export function getBoardById(id: string): ParkingFlowBoard | null {
  const boards = getAllBoards();
  return boards.find((b) => b.id === id) ?? null;
}

/**
 * ボードを保存（新規または更新）
 */
export function saveBoard(board: ParkingFlowBoard): boolean {
  if (!isLocalStorageAvailable()) {
    console.error("localStorage is not available");
    return false;
  }
  try {
    const boards = getAllBoards();
    const existingIndex = boards.findIndex((b) => b.id === board.id);
    if (existingIndex >= 0) {
      boards[existingIndex] = board;
    } else {
      boards.push(board);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(boards));
    return true;
  } catch (e) {
    console.error("Failed to save board:", e);
    return false;
  }
}

/**
 * ボードを削除
 */
export function deleteBoard(id: string): boolean {
  if (!isLocalStorageAvailable()) {
    return false;
  }
  try {
    const boards = getAllBoards().filter((b) => b.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(boards));
    return true;
  } catch (e) {
    console.error("Failed to delete board:", e);
    return false;
  }
}

// ============================================================
// テーマ定義（6種類）
// ============================================================

export const THEMES: ThemeDefinition[] = [
  {
    id: "warm",
    name: "ウォーム",
    colors: {
      bg: "#FFF8E7",
      panel: "#FFFFFF",
      border: "#DDC9A3",
      text: "#3D2F24",
      muted: "#5C4D3C",
      accent: "#B87333",
    },
  },
  {
    id: "clean",
    name: "クリーン",
    colors: {
      bg: "#F7FAFC",
      panel: "#FFFFFF",
      border: "#D8E2EE",
      text: "#0F172A",
      muted: "#475569",
      accent: "#2563EB",
    },
  },
  {
    id: "bold",
    name: "ボールド",
    colors: {
      bg: "#0B1220",
      panel: "#111B2E",
      border: "#23314F",
      text: "#E5E7EB",
      muted: "#94A3B8",
      accent: "#F97316",
    },
  },
  {
    id: "forest",
    name: "フォレスト",
    colors: {
      bg: "#F0F5F0",
      panel: "#FFFFFF",
      border: "#C5D9C5",
      text: "#1A2F1A",
      muted: "#4A5D4A",
      accent: "#2D7D46",
    },
  },
  {
    id: "slate",
    name: "スレート",
    colors: {
      bg: "#F1F5F9",
      panel: "#FFFFFF",
      border: "#CBD5E1",
      text: "#1E293B",
      muted: "#64748B",
      accent: "#475569",
    },
  },
  {
    id: "cherry",
    name: "チェリー",
    colors: {
      bg: "#FDF2F4",
      panel: "#FFFFFF",
      border: "#FECDD3",
      text: "#4C0519",
      muted: "#9F1239",
      accent: "#E11D48",
    },
  },
];

/**
 * テーマIDからテーマ定義を取得
 */
export function getThemeById(themeId: ThemeId): ThemeDefinition {
  return THEMES.find((t) => t.id === themeId) ?? THEMES[0];
}

/**
 * テーマIDが有効かチェック
 */
export function isValidThemeId(themeId: string): themeId is ThemeId {
  return VALID_THEME_IDS.includes(themeId as ThemeId);
}

/**
 * テーマのCSS変数オブジェクトを生成
 */
export function getThemeCssVars(themeId: ThemeId): React.CSSProperties {
  const theme = getThemeById(themeId);
  return {
    "--wd-bg": theme.colors.bg,
    "--wd-panel": theme.colors.panel,
    "--wd-border": theme.colors.border,
    "--wd-text": theme.colors.text,
    "--wd-muted": theme.colors.muted,
    "--wd-accent": theme.colors.accent,
  } as React.CSSProperties;
}

// ============================================================
// テンプレート定義（3種類）
// ============================================================

export const TEMPLATES: BoardTemplate[] = [
  {
    id: "parking",
    name: "駐車場まで案内する導線図",
    description:
      "駐車場の場所が分かりにくい店舗向け。入口・区画・店舗までの道筋を写真で案内する導線図テンプレート。",
    defaultThemeId: "warm",
    availableThemes: ["warm", "clean", "forest", "slate"],
    defaultBoard: {
      templateId: "parking",
      themeId: "warm",
      title: "駐車場まで案内する導線図",
      storeName: "",
      address: "",
      landmark: "",
      mapUrl: "",
      lineUrl: "",
      pains: {
        parkingUnknown: true,
        entranceUnknown: false,
        nightHard: false,
        note: "",
      },
      cta: {
        primary: "parking_place",
        secondary: "none",
      },
      photoNotes: {
        parkingEntrance: "",
        parkingSpot: "",
        parkingToEntrance: "",
      },
      actions: {
        today: "",
        thisWeek: "",
        next: "",
      },
      offers: {
        meoSetup: true,
        onePageSite: false,
        note: "",
      },
    },
  },
  {
    id: "reservation",
    name: "予約獲得LP",
    description:
      "予約率を上げたい店舗向け。信頼構築→メニュー紹介→予約導線を1ページで完結するLPテンプレート。",
    defaultThemeId: "clean",
    availableThemes: ["clean", "warm", "slate", "forest"],
    defaultBoard: {
      templateId: "reservation",
      themeId: "clean",
      title: "予約獲得LP",
      storeName: "",
      address: "",
      landmark: "",
      mapUrl: "",
      lineUrl: "",
      pains: {
        parkingUnknown: false,
        entranceUnknown: false,
        nightHard: false,
        note: "",
      },
      cta: {
        primary: "reserve",
        secondary: "call",
      },
      photoNotes: {
        parkingEntrance: "",
        parkingSpot: "",
        parkingToEntrance: "",
      },
      actions: {
        today: "",
        thisWeek: "",
        next: "",
      },
      offers: {
        meoSetup: true,
        onePageSite: true,
        note: "",
      },
    },
  },
  {
    id: "campaign",
    name: "キャンペーンLP",
    description:
      "期間限定オファーを訴求したい店舗向け。特典・期限・対象・流れを明示し、即行動を促すLPテンプレート。",
    defaultThemeId: "bold",
    availableThemes: ["bold", "cherry", "warm"],
    defaultBoard: {
      templateId: "campaign",
      themeId: "bold",
      title: "キャンペーンLP",
      storeName: "",
      address: "",
      landmark: "",
      mapUrl: "",
      lineUrl: "",
      pains: {
        parkingUnknown: false,
        entranceUnknown: false,
        nightHard: false,
        note: "",
      },
      cta: {
        primary: "campaign",
        secondary: "line",
      },
      photoNotes: {
        parkingEntrance: "",
        parkingSpot: "",
        parkingToEntrance: "",
      },
      actions: {
        today: "",
        thisWeek: "",
        next: "",
      },
      offers: {
        meoSetup: false,
        onePageSite: true,
        note: "",
      },
    },
  },
];

/**
 * テンプレートIDからテンプレートを取得
 */
export function getTemplateById(templateId: TemplateId): BoardTemplate | null {
  return TEMPLATES.find((t) => t.id === templateId) ?? null;
}

/**
 * テンプレートから新規ボードを生成（テーマ指定可能）
 */
export function createBoardFromTemplate(
  templateId: string,
  themeId?: string
): ParkingFlowBoard | null {
  const template = getTemplateById(templateId as TemplateId);
  if (!template) {
    console.error("Unknown template:", templateId);
    return null;
  }

  // テーマの検証とフォールバック
  let resolvedThemeId = template.defaultThemeId;
  if (themeId && isValidThemeId(themeId)) {
    // テンプレートで許可されているテーマかチェック
    if (template.availableThemes.includes(themeId)) {
      resolvedThemeId = themeId;
    }
  }

  const newBoard: ParkingFlowBoard = {
    ...template.defaultBoard,
    themeId: resolvedThemeId,
    id: generateId(),
    updatedAt: Date.now(),
  };

  return newBoard;
}
