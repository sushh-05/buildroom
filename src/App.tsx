import { useState } from "react";
import { AnimatePresence } from "motion/react";
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
import { useTheme } from "./hooks/useTheme";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header
        onApplyClick={() => setIsModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
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
      <AnimatePresence>
        {isModalOpen && (
          <ApplicationModal onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;