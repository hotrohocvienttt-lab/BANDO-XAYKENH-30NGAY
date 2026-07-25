import React from "react";

interface YdvnLogoProps {
  className?: string;
}

export const YdvnLogo: React.FC<YdvnLogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left Laurel Leaves */}
      <g fill="#0B2D46">
        <path d="M 105 320 C 80 240 85 160 110 80" stroke="#0B2D46" strokeWidth="6" fill="none" />
        <path d="M 110 80 C 85 70 70 85 85 100 C 95 95 105 90 110 80 Z" />
        <path d="M 110 80 C 120 65 100 55 90 70 C 98 75 105 78 110 80 Z" />
        <path d="M 102 110 C 75 105 65 125 80 135 C 92 128 100 120 102 110 Z" />
        <path d="M 102 110 C 115 95 95 85 85 100 C 92 105 98 108 102 110 Z" />
        <path d="M 95 145 C 68 140 60 160 75 170 C 88 162 94 154 95 145 Z" />
        <path d="M 95 145 C 110 130 90 120 80 135 C 88 140 92 142 95 145 Z" />
        <path d="M 92 180 C 65 178 58 198 72 208 C 84 198 90 190 92 180 Z" />
        <path d="M 92 180 C 108 165 88 155 78 170 C 85 175 90 178 92 180 Z" />
        <path d="M 92 215 C 65 215 60 235 74 245 C 85 235 90 225 92 215 Z" />
        <path d="M 92 215 C 108 200 88 190 78 205 C 85 210 90 213 92 215 Z" />
        <path d="M 96 250 C 70 255 68 275 80 282 C 90 270 94 260 96 250 Z" />
        <path d="M 96 250 C 110 235 92 225 80 240 C 88 245 92 248 96 250 Z" />
        <path d="M 104 285 C 80 292 80 310 92 318 C 100 305 103 295 104 285 Z" />
        <path d="M 104 285 C 118 270 100 260 88 275 C 95 280 100 283 104 285 Z" />
      </g>

      {/* Right Laurel Leaves */}
      <g fill="#0B2D46">
        <path d="M 395 320 C 420 240 415 160 390 80" stroke="#0B2D46" strokeWidth="6" fill="none" />
        <path d="M 390 80 C 415 70 430 85 415 100 C 405 95 395 90 390 80 Z" />
        <path d="M 390 80 C 380 65 400 55 410 70 C 402 75 395 78 390 80 Z" />
        <path d="M 398 110 C 425 105 435 125 420 135 C 408 128 400 120 398 110 Z" />
        <path d="M 398 110 C 385 95 405 85 415 100 C 408 105 402 108 398 110 Z" />
        <path d="M 405 145 C 432 140 440 160 425 170 C 412 162 406 154 405 145 Z" />
        <path d="M 405 145 C 390 130 410 120 420 135 C 412 140 408 142 405 145 Z" />
        <path d="M 408 180 C 435 178 442 198 428 208 C 416 198 410 190 408 180 Z" />
        <path d="M 408 180 C 392 165 412 155 422 170 C 415 175 410 178 408 180 Z" />
        <path d="M 408 215 C 435 215 440 235 426 245 C 415 235 410 225 408 215 Z" />
        <path d="M 408 215 C 392 200 412 190 422 205 C 415 210 410 213 408 215 Z" />
        <path d="M 404 250 C 430 255 432 275 420 282 C 410 270 406 260 404 250 Z" />
        <path d="M 404 250 C 390 235 408 225 420 240 C 412 245 408 248 404 250 Z" />
        <path d="M 396 285 C 420 292 420 310 408 318 C 400 305 397 295 396 285 Z" />
        <path d="M 396 285 C 382 270 400 260 412 275 C 405 280 400 283 396 285 Z" />
      </g>

      {/* Main Shield Outer Border (Navy) */}
      <path
        d="M 250 60 L 375 90 C 375 250 340 330 250 395 C 160 330 125 250 125 90 Z"
        fill="#0B2D46"
      />
      {/* Inner Shield White ring */}
      <path
        d="M 250 72 L 363 99 C 363 242 331 316 250 376 C 169 316 137 242 137 99 Z"
        fill="#FFFFFF"
      />
      {/* Inner Shield Body */}
      <path
        d="M 250 80 L 355 105 C 355 238 325 306 250 362 C 175 306 145 238 145 105 Z"
        fill="#0B2D46"
      />

      {/* Shield Quadrants */}
      <g>
        {/* Quadrant 1 (Top-Left): Orange */}
        <path
          d="M 246 86 L 151 109 C 151 190 160 220 246 220 Z"
          fill="#FF4F00"
        />
        {/* Quadrant 2 (Top-Right): Navy */}
        <path
          d="M 254 86 L 349 109 C 349 190 340 220 254 220 Z"
          fill="#0B2D46"
        />
        {/* Quadrant 3 (Bottom-Left): Navy */}
        <path
          d="M 152 228 C 158 265 180 305 246 352 L 246 228 Z"
          fill="#0B2D46"
        />
        {/* Quadrant 4 (Bottom-Right): Orange */}
        <path
          d="M 348 228 C 342 265 320 305 254 352 L 254 228 Z"
          fill="#FF4F00"
        />
      </g>

      {/* Grid Lines (White) */}
      <line x1="250" y1="80" x2="250" y2="360" stroke="#FFFFFF" strokeWidth="8" />
      <line x1="140" y1="224" x2="360" y2="224" stroke="#FFFFFF" strokeWidth="8" />

      {/* Quadrant 1 Icon (Top-Left): Medical Cross + Heart */}
      <g transform="translate(170, 115) scale(0.75)">
        <path d="M 24 10 Q 24 6 28 6 L 36 6 Q 40 6 40 10 L 40 24 L 54 24 Q 58 24 58 28 L 58 36 Q 58 40 54 40 L 40 40 L 40 54 Q 40 58 36 58 L 28 58 Q 24 58 24 54 L 24 40 L 10 40 Q 6 40 6 36 L 6 28 Q 6 24 10 24 L 24 24 Z" fill="#FF4F00" stroke="#FFFFFF" strokeWidth="4.5" strokeLinejoin="round" />
        <path d="M 32 37 C 32 37 23 30 23 25 C 23 22 25 20 28 20 C 30 20 31.5 21 32 22.5 C 32.5 21 34 20 36 20 C 39 20 41 22 41 25 C 41 30 32 37 32 37 Z" fill="#FFFFFF" />
      </g>

      {/* Quadrant 2 Icon (Top-Right): Ascending Chart + Dollar */}
      <g transform="translate(262, 118) scale(0.72)" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <rect x="36" y="36" width="8" height="24" rx="2" fill="#FFFFFF" />
        <rect x="48" y="26" width="8" height="34" rx="2" fill="#FFFFFF" />
        <rect x="60" y="16" width="8" height="44" rx="2" fill="#FFFFFF" />
        <path d="M 20 42 L 34 30 L 48 34 L 68 14" stroke="#FFFFFF" strokeWidth="4.5" />
        <path d="M 58 14 L 68 14 L 68 24" stroke="#FFFFFF" strokeWidth="4.5" />
        <circle cx="22" cy="46" r="10" fill="#0B2D46" stroke="#FFFFFF" strokeWidth="3" />
        <text x="22" y="50" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif" stroke="none">$</text>
      </g>

      {/* Quadrant 3 Icon (Bottom-Left): Open Book */}
      <g transform="translate(162, 238) scale(0.75)" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M 32 20 C 22 15 10 17 6 20 L 6 52 C 10 49 22 47 32 52 C 42 47 54 49 58 52 L 58 20 C 54 17 42 15 32 20 Z" />
        <line x1="32" y1="20" x2="32" y2="52" strokeWidth="4" />
        <path d="M 12 28 C 18 26 26 27 30 29" strokeWidth="3" />
        <path d="M 12 36 C 18 34 26 35 30 37" strokeWidth="3" />
        <path d="M 52 28 C 46 26 38 27 34 29" strokeWidth="3" />
        <path d="M 52 36 C 46 34 38 35 34 37" strokeWidth="3" />
      </g>

      {/* Quadrant 4 Icon (Bottom-Right): Heart Hands */}
      <g transform="translate(268, 238) scale(0.75)" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M 32 46 C 16 35 10 26 12 18 C 14 10 22 8 28 13 L 32 17 L 36 13 C 42 8 50 10 52 18 C 54 26 48 35 32 46 Z" fill="#FF4F00" stroke="#FFFFFF" strokeWidth="4.5" />
        <path d="M 22 28 C 26 32 30 34 32 34 C 34 34 38 32 42 28" stroke="#FFFFFF" strokeWidth="3.5" />
        <path d="M 25 22 C 28 25 30 27 32 27 C 34 27 36 25 39 22" stroke="#FFFFFF" strokeWidth="3" />
      </g>

      {/* Ribbon Fold Backs */}
      <path d="M 65 375 L 115 340 L 115 395 L 75 425 Z" fill="#071D2E" />
      <path d="M 435 375 L 385 340 L 385 395 L 425 425 Z" fill="#071D2E" />

      <path d="M 65 375 L 115 395 L 125 350 L 75 335 Z" fill="#0B2D46" />
      <path d="M 435 375 L 385 395 L 375 350 L 425 335 Z" fill="#0B2D46" />

      {/* Main Curved Banner Ribbon */}
      <path
        d="M 100 350 Q 250 315 400 350 L 380 405 Q 250 370 120 405 Z"
        fill="#0B2D46"
        stroke="#FFFFFF"
        strokeWidth="4"
      />

      {/* YDVN Text on Ribbon */}
      <text
        x="250"
        y="375"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#FFFFFF"
        fontSize="34"
        fontWeight="900"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        letterSpacing="6"
      >
        YDVN
      </text>

      {/* Curved Underline accent */}
      <path
        d="M 160 412 Q 250 435 340 412"
        stroke="#0B2D46"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};
