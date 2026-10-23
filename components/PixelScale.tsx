import { GRID_H, GRID_W, PIVOT, beam, leftPan, rightPan, stand, type Pixel } from "@/lib/pixelScale";

function Pixels({ px }: { px: Pixel[] }) {
  return (
    <>
      {px.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={1.02} height={1.02} />
      ))}
    </>
  );
}

/**
 * The signature visual: a pixel balance scale that slowly weighs one side
 * against the other. Colors come from CSS variables, so it follows the theme.
 * Animation is defined in globals.css and switches off for reduced motion.
 */
export default function PixelScale({ title, className = "" }: { title: string; className?: string }) {
  return (
    <svg
      viewBox={`-1 -1 ${GRID_W + 2} ${GRID_H + 2}`}
      role="img"
      aria-labelledby="scale-title"
      shapeRendering="crispEdges"
      className={`pixel-scale ${className}`}
    >
      <title id="scale-title">{title}</title>
      <g className="fill-fg">
        <Pixels px={stand} />
      </g>
      <g
        className="scale-beam fill-accent"
        style={{ transformOrigin: `${PIVOT.x}px ${PIVOT.y}px` }}
      >
        <Pixels px={beam} />
      </g>
      <g className="scale-pan-left fill-fg">
        <Pixels px={leftPan} />
      </g>
      <g className="scale-pan-right fill-fg">
        <Pixels px={rightPan} />
      </g>
    </svg>
  );
}
