export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="44"
        height="52"
        viewBox="0 0 44 52"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* dome */}
        <path
          d="M22 4 L22 8"
          stroke="#C89B3C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="22" cy="3" r="1.2" fill="#C89B3C" />
        <path
          d="M6 22 C 6 13, 13 8, 22 8 C 31 8, 38 13, 38 22 L 38 24 L 6 24 Z"
          stroke="#C89B3C"
          strokeWidth="1.5"
          fill="none"
        />
        {/* body */}
        <rect x="8" y="24" width="28" height="22" stroke="#C89B3C" strokeWidth="1.5" fill="none" />
        {/* flame */}
        <path
          d="M22 30 C 20 33, 20 36, 22 38 C 24 36, 24 33, 22 30 Z"
          fill="#C89B3C"
        />
        <path
          d="M18 46 L26 46"
          stroke="#C89B3C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] font-medium tracking-[0.22em] text-gold">
          MUGHALAI POINT
        </span>
        <span className="font-display text-xl font-bold tracking-wide text-gold">
          BIRYANI
        </span>
      </div>
    </div>
  );
}
