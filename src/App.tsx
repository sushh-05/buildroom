function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f3f0e8] px-6 text-[#171713]">
      <section className="max-w-2xl">
        <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#d9522b]">
          Buildroom / Mission 00
        </p>

        <h1 className="max-w-xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">
          Don&apos;t just learn AI. Build something useful.
        </h1>

        <p className="mt-7 max-w-lg text-lg leading-8 text-[#5c5a50]">
          A project-based learning room where ambitious students solve
          realistic business missions and leave with deployed work.
        </p>

        <button
          type="button"
          className="mt-9 min-h-11 bg-[#171713] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9522b]"
        >
          Explore the missions
        </button>
      </section>
    </main>
  );
}

export default App;