/** Shown while app/page.tsx Server Component resolves (parsing 230 projects) */
export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#F3F1EA' }}>
      {/* Header skeleton */}
      <header
        className="flex items-center gap-4 px-6 py-4 border-b"
        style={{ borderColor: 'rgba(0, 0, 0,0.08)' }}
      >
        <div className="w-10 h-10 rounded-lg animate-pulse" style={{ background: '#FBFAF6' }} />
        <div className="space-y-1.5">
          <div className="w-36 h-4 rounded animate-pulse" style={{ background: '#FBFAF6' }} />
          <div className="w-48 h-3 rounded animate-pulse" style={{ background: '#F8F6F0' }} />
        </div>
      </header>

      {/* Controls skeleton */}
      <div
        className="flex items-center gap-3 px-6 py-3 border-b"
        style={{ borderColor: 'rgba(0, 0, 0,0.06)' }}
      >
        <div className="flex-1 max-w-xs h-8 rounded-lg animate-pulse" style={{ background: '#FBFAF6' }} />
        <div className="w-36 h-8 rounded-lg animate-pulse" style={{ background: '#FBFAF6' }} />
        <div className="w-28 h-8 rounded-lg animate-pulse" style={{ background: '#FBFAF6' }} />
      </div>

      {/* Two-column skeleton */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-px p-6 gap-6">
        {[0, 1].map(col => (
          <div key={col} className="space-y-3">
            <div className="flex justify-between items-baseline pb-2 border-b" style={{ borderColor: 'rgba(0, 0, 0,0.06)' }}>
              <div className="w-24 h-3 rounded animate-pulse" style={{ background: '#FBFAF6' }} />
              <div className="w-28 h-4 rounded animate-pulse" style={{ background: '#FBFAF6' }} />
            </div>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-lg p-3 space-y-2 border-l-2"
                style={{ background: '#F8F6F0', borderColor: '#FBFAF6' }}
              >
                <div className="flex justify-between">
                  <div className="w-40 h-3.5 rounded animate-pulse" style={{ background: '#FBFAF6' }} />
                  <div className="w-16 h-4 rounded-full animate-pulse" style={{ background: '#FBFAF6' }} />
                </div>
                <div className="w-full h-3 rounded animate-pulse" style={{ background: '#FBFAF6', opacity: 0.6 }} />
                <div className="flex justify-between">
                  <div className="w-28 h-2.5 rounded animate-pulse" style={{ background: '#FBFAF6' }} />
                  <div className="w-24 h-3 rounded animate-pulse" style={{ background: '#FBFAF6' }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Loading label */}
      <div className="fixed bottom-4 right-6 text-xs" style={{ color: '#9AA38D' }}>
        Cargando proyectos…
      </div>
    </div>
  )
}
