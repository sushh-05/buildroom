import { useState } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { MissionExplorer } from "./components/sections/MissionExplorer";
import { Process } from "./components/sections/Process";
import { SprintTimeline } from "./components/sections/SprintTimeline";
import { Proof } from "./components/sections/Proof";
import { Mentors } from "./components/sections/Mentors";
import { FAQ } from "./components/sections/FAQ";
import { FinalCTA } from "./components/sections/FinalCTA";
import { ApplicationModal } from "./components/ui/ApplicationModal";

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
        <Proof />
        <Mentors />
        <FAQ />
        <FinalCTA onApplyClick={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      {isModalOpen && (
        <ApplicationModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default App;