import { useState } from "react";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { MissionExplorer } from "./components/sections/MissionExplorer";
import { Process } from "./components/sections/Process";
import { SprintTimeline } from "./components/sections/SprintTimeline";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f3f0e8] text-[#171713]">
      <Header onApplyClick={() => setIsModalOpen(true)} />
      <main>
        <Hero onApplyClick={() => setIsModalOpen(true)} />
        <MissionExplorer />
        <Process />
        <SprintTimeline />
      </main>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-6">
          <div className="max-w-sm bg-[#f3f0e8] p-8">
            <p className="text-sm text-[#5c5a50]">
              Application form placeholder — built in a later step.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 text-sm font-semibold underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;