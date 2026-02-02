/**
 * WireDesk Lite - 型定義
 */

// テンプレートID
export type TemplateId = "parking" | "reservation" | "campaign";

// テーマID（6種類）
export type ThemeId = "warm" | "clean" | "bold" | "forest" | "slate" | "cherry";

export type ParkingFlowBoard = {
  id: string;
  templateId: TemplateId;
  themeId: ThemeId;
  title: string;
  storeName: string;
  address?: string;
  landmark?: string;
  mapUrl?: string;
  lineUrl?: string;
  pains: {
    parkingUnknown: boolean;
    entranceUnknown: boolean;
    nightHard: boolean;
    note?: string;
  };
  cta: {
    primary: "parking_place" | "navigate_parking" | "reserve" | "campaign";
    secondary?: "call" | "line" | "none";
  };
  photoNotes: {
    parkingEntrance?: string;
    parkingSpot?: string;
    parkingToEntrance?: string;
  };
  actions: {
    today?: string;
    thisWeek?: string;
    next?: string;
  };
  offers: {
    meoSetup: boolean;
    onePageSite: boolean;
    note?: string;
  };
  updatedAt: number;
};

export type BoardTemplate = {
  id: TemplateId;
  name: string;
  description: string;
  defaultThemeId: ThemeId;
  availableThemes: ThemeId[];
  defaultBoard: Omit<ParkingFlowBoard, "id" | "updatedAt">;
};

// テーマ定義
export type ThemeDefinition = {
  id: ThemeId;
  name: string;
  colors: {
    bg: string;
    panel: string;
    border: string;
    text: string;
    muted: string;
    accent: string;
  };
};
