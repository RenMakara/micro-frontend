export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBFBFF] px-6 py-20 text-zinc-900 selection:bg-blue-100">
  {/* Header Section */}
  <header className="mx-auto mb-16 max-w-4xl text-center">
    <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
      Versatility Redefined
    </div>
    <h1 className="mt-6 bg-gradient-to-b from-blue-700 to-indigo-900 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl">
      iPad Pro.
    </h1>
    <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-zinc-500 leading-relaxed">
      A multi-pane workspace built for seamless planning, precise review, and instant collaboration.
    </p>
  </header>

  <main className="mx-auto max-w-5xl">
    <div className="">
      
      {/* Workspace Card - Large */}
      <section className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-[2.5rem] border border-white bg-white p-10 shadow-2xl shadow-blue-100/50 transition-all hover:shadow-blue-200/50">
        <div className="mb-8 flex items-center justify-between">
          <span className="rounded-full bg-blue-600 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white">
            Split Layout
          </span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
            Side-by-Side
          </span>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-blue-50 bg-gradient-to-br from-blue-50/50 to-white p-8">
            <h3 className="text-xl font-bold tracking-tight text-blue-950">Intelligent Workspace</h3>
            <p className="mt-2 text-zinc-500 leading-relaxed">
              Dive deep with multiple panes designed for complex project management and timeline tracking.
            </p>
     
            <div className="mt-8 flex gap-3 h-32">
              <div className="w-2/3 rounded-2xl bg-blue-600 p-4 transition-transform group-hover:scale-[1.02]">
                <div className="h-1.5 w-8 rounded-full bg-blue-400 mb-3"></div>
                <div className="space-y-2">
                  <div className="h-3 w-full rounded-md bg-blue-500"></div>
                  <div className="h-3 w-4/5 rounded-md bg-blue-500"></div>
                </div>
              </div>
              <div className="flex-1 rounded-2xl border-2 border-dashed border-blue-200 bg-white p-4 transition-transform delay-75 group-hover:scale-[1.02]">
                 <div className="h-1.5 w-12 rounded-full bg-blue-100 mb-3"></div>
                 <div className="grid grid-cols-2 gap-2">
                    <div className="h-8 rounded-lg bg-blue-50"></div>
                    <div className="h-8 rounded-lg bg-blue-50"></div>
                 </div>
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
