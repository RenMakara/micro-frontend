export default function Home() {
  return (
    <div className="min-h-screen px-6 py-20 text-zinc-900 selection:bg-blue-100">
  {/* Header Section */}
  <header className="mx-auto mb-16 max-w-4xl text-center">
    <div className="inline-flex items-center rounded-full bg-zinc-200/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
      The Next Chapter
    </div>
    <h1 className="mt-6 bg-gradient-to-b from-zinc-900 to-zinc-500 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl">
      MacBook Pro.
    </h1>
    <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-zinc-500 leading-relaxed">
      Engineered for dense information, complex dashboards, and the art of long-form editing. 
    </p>
  </header>

  <main className="mx-auto max-w-5xl">
    {/* Main Feature Bento Grid */}
    <div className="">
      
      {/* Deep Work Card - Large */}
      <section className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-[2.5rem] border border-white bg-blue-100 p-10 shadow-2xl shadow-zinc-200/50 backdrop-blur-md transition-all hover:shadow-zinc-300/50">
        <div className="mb-8 flex items-center justify-between">
          <span className="rounded-full bg-zinc-900 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white">
            Deep Work
          </span>
          <div className="flex gap-1.5">
            <div className="h-2 w-2 rounded-full bg-zinc-200"></div>
            <div className="h-2 w-2 rounded-full bg-zinc-200"></div>
            <div className="h-2 w-2 rounded-full bg-zinc-200"></div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-zinc-100 bg-gradient-to-br from-zinc-100 to-white p-8 ring-1 ring-zinc-200/50">
            <h3 className="text-xl font-bold tracking-tight">Command Center</h3>
            <p className="mt-2 text-zinc-500 leading-relaxed">
              Experience full-throttle dashboards with real-time filters, interactive charts, and seamless activity feeds.
            </p>
            
            {/* Visual Mock Element (CSS Only) */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="h-20 rounded-2xl bg-zinc-900 p-4 transition-transform group-hover:-translate-y-1">
                 <div className="h-1 w-8 rounded-full bg-zinc-700 mb-2"></div>
                 <div className="h-4 w-full rounded-full bg-zinc-800"></div>
              </div>
              <div className="h-20 rounded-2xl bg-zinc-100 p-4 transition-transform delay-75 group-hover:-translate-y-1">
                 <div className="h-1 w-8 rounded-full bg-zinc-300 mb-2"></div>
                 <div className="h-4 w-full rounded-full bg-zinc-200"></div>
              </div>
              <div className="h-20 rounded-2xl border border-zinc-200 p-4 transition-transform delay-150 group-hover:-translate-y-1">
                 <div className="h-1 w-8 rounded-full bg-zinc-200 mb-2"></div>
                 <div className="h-4 w-full rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  </main>
</div>
  );
}
