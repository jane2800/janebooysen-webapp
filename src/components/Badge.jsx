// "JB" monogram on a scalloped rosette. Fill follows --badge, letters --text.

const POINTS = 12;
const OUTER = 23;
const INNER = 20;

const rosette = Array.from({ length: POINTS * 2 }, (_, i) => {
    const r = i % 2 === 0 ? OUTER : INNER;
    const a = (Math.PI * i) / POINTS - Math.PI / 2;
    return `${(24 + r * Math.cos(a)).toFixed(2)},${(24 + r * Math.sin(a)).toFixed(2)}`;
}).join(" ");

export default function Badge({ size = 40 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
            <polygon
                points={rosette}
                fill="var(--badge)"
                stroke="var(--badge)"
                strokeWidth="3"
                strokeLinejoin="round"
            />
            <text
                x="24"
                y="25"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Germania One, Georgia, serif"
                fontSize="19"
                fill="var(--text)"
            >
                JB
            </text>
        </svg>
    );
}
