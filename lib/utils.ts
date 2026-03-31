export type LiquidVariant = "glass" | "neo" | "hybrid";

export const liquidVariants: LiquidVariant[] = ["glass", "neo", "hybrid"];

export const liquidVariantLabels: Record<LiquidVariant, string> = {
  glass: "Glass",
  neo: "Neo",
  hybrid: "Hybrid",
};

export function toTitle(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function modeDescription(variant: LiquidVariant) {
  switch (variant) {
    case "glass":
      return "Blurred translucency with subtle border separation.";
    case "neo":
      return "Soft inset and outset depth with tactile contrast.";
    default:
      return "Balanced mix of blur, depth, and restrained glow.";
  }
}
