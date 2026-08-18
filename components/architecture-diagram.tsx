/**
 * Static SVG architecture diagram for the Tracksen case study.
 * Pure markup — no client JS — so it costs nothing at runtime.
 */
export function TracksenArchitecture() {
  const box = 'fill-[var(--surface)] stroke-[var(--line)]'
  const label = 'fill-[var(--foreground)] font-semibold'
  const sub = 'fill-[var(--muted)]'
  const arrow = 'stroke-[var(--muted)]'

  return (
    <figure className="my-8 overflow-x-auto rounded-2xl border border-line bg-surface/50 p-4 sm:p-6">
      <svg
        viewBox="0 0 760 420"
        role="img"
        aria-label="Tracksen architecture: browser requests pass through Laravel middleware to controllers, which validate input, apply role checks, query Eloquent models over MySQL or SQLite, and render Blade views compiled with Vite."
        className="min-w-[640px] font-mono text-[11px]"
      >
        {/* Browser */}
        <rect x="20" y="30" width="160" height="64" rx="10" className={box} />
        <text x="100" y="58" textAnchor="middle" className={label}>Browser</text>
        <text x="100" y="76" textAnchor="middle" className={sub}>Blade + Bootstrap 5</text>

        {/* Middleware */}
        <rect x="270" y="30" width="200" height="64" rx="10" className={box} />
        <text x="370" y="52" textAnchor="middle" className={label}>Middleware</text>
        <text x="370" y="70" textAnchor="middle" className={sub}>auth · verified · session</text>
        <text x="370" y="84" textAnchor="middle" className={sub}>(Laravel Breeze)</text>

        {/* Controllers */}
        <rect x="270" y="150" width="200" height="110" rx="10" className={box} />
        <text x="370" y="174" textAnchor="middle" className={label}>Controllers</text>
        <text x="370" y="194" textAnchor="middle" className={sub}>Booking · Expense</text>
        <text x="370" y="210" textAnchor="middle" className={sub}>Address · Product · Profile</text>
        <text x="370" y="232" textAnchor="middle" className={sub}>validation · role gates</text>
        <text x="370" y="246" textAnchor="middle" className={sub}>code generation · CSV export</text>

        {/* Models */}
        <rect x="560" y="150" width="180" height="110" rx="10" className={box} />
        <text x="650" y="174" textAnchor="middle" className={label}>Eloquent Models</text>
        <text x="650" y="194" textAnchor="middle" className={sub}>User · Booking · Expense</text>
        <text x="650" y="210" textAnchor="middle" className={sub}>Address · Product</text>
        <text x="650" y="232" textAnchor="middle" className={sub}>legacy PK + timestamp</text>
        <text x="650" y="246" textAnchor="middle" className={sub}>column mappings</text>

        {/* Database */}
        <rect x="560" y="320" width="180" height="64" rx="10" className={box} />
        <text x="650" y="348" textAnchor="middle" className={label}>MySQL / SQLite</text>
        <text x="650" y="366" textAnchor="middle" className={sub}>sessions · cache · queue</text>

        {/* Views */}
        <rect x="20" y="150" width="160" height="110" rx="10" className={box} />
        <text x="100" y="174" textAnchor="middle" className={label}>Blade Views</text>
        <text x="100" y="194" textAnchor="middle" className={sub}>48 templates</text>
        <text x="100" y="210" textAnchor="middle" className={sub}>search · sort · paginate</text>
        <text x="100" y="232" textAnchor="middle" className={sub}>Vite asset pipeline</text>
        <text x="100" y="246" textAnchor="middle" className={sub}>SASS + Bootstrap</text>

        {/* Arrows */}
        <g strokeWidth="1.5" fill="none" className={arrow} markerEnd="url(#arr)">
          <path d="M180 62 H262" />
          <path d="M370 94 V142" />
          <path d="M470 205 H552" />
          <path d="M650 260 V312" />
          <path d="M262 205 H188" />
          <path d="M100 150 V102" />
        </g>
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 z" className="fill-[var(--muted)]" />
          </marker>
        </defs>
      </svg>
      <figcaption className="mt-3 text-center font-mono text-xs text-muted">
        Request lifecycle: session-authenticated routes → controller validation and role gates → Eloquent over
        MySQL/SQLite → server-rendered Blade.
      </figcaption>
    </figure>
  )
}
