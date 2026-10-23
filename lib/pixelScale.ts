/**
 * Pixel-art balance scale, drawn on a 32 × 27 grid.
 * Each layer is a list of 1×1 "pixels" so the SVG stays crisp at any size.
 * Layers are separate so the beam can tilt and the pans can rise and fall.
 */

export type Pixel = [x: number, y: number];

export const GRID_W = 32;
export const GRID_H = 27;

const rect = (x: number, y: number, w: number, h = 1): Pixel[] => {
  const out: Pixel[] = [];
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) out.push([x + i, y + j]);
  return out;
};

const mirror = (px: Pixel[]): Pixel[] => px.map(([x, y]) => [GRID_W - 1 - x, y]);

/** Shapes overlap (hub on beam, chains meeting at the hook): keep each pixel once. */
const unique = (px: Pixel[]): Pixel[] => {
  const seen = new Set<string>();
  return px.filter(([x, y]) => {
    const k = `${x}-${y}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
};

/** Pillar, base and the ornament on top: never moves. */
export const stand: Pixel[] = unique([
  // finial
  ...rect(15, 0, 2),
  ...rect(14, 1, 4),
  ...rect(15, 2, 2),
  // pillar
  ...rect(15, 7, 2, 17),
  // stepped base
  ...rect(12, 24, 8),
  ...rect(10, 25, 12),
  ...rect(8, 26, 16),
]);

/** Beam with its hub: tilts around the hub. */
export const beam: Pixel[] = unique([
  ...rect(14, 3, 4, 4), // hub
  ...rect(2, 5, 28), // arm
  [2, 4],
  [29, 4], // end caps
]);

/** Left pan with chains, hanging from x = 4. */
const leftChains: Pixel[] = [[4, 6]];
for (let y = 7; y <= 13; y++) {
  const d = Math.floor((y - 7) / 2);
  leftChains.push([4 - d, y], [4 + d, y]);
}

export const leftPan: Pixel[] = unique([
  ...leftChains,
  ...rect(0, 14, 9),
  ...rect(1, 15, 7),
  ...rect(2, 16, 5),
]);

/** Right pan is the mirror image of the left one. */
export const rightPan: Pixel[] = mirror(leftPan);

/** Pivot point (in grid units) the beam rotates around. */
export const PIVOT = { x: 16, y: 5.5 };
