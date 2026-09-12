import { useState } from "react";
import { missions } from "../../data/missions";
import { LiveDemo } from "./LiveDemo";
import { NavigateDemo } from "./NavigateDemo";

export function MissionExplorer() {
    const [activeId, setActiveId] = useState(missions[0].id);
    const activeMission = missions.find((m) => m.id === activeId)!;

    return (
        <section
            id="missions"
            className="border-t border-[#171713]/8 bg-[#faf8f3] py-20"
        >
            <div className="mx-auto max-w-6xl px-6">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#d9522b]">
                    Pick a mission
                </p>
                <h2 className="max-w-xl text-3xl font-black leading-tight tracking-[-0.02em] sm:text-4xl">
                    Every sprint solves one real business problem.
                </h2>

                <div
                    role="tablist"
                    aria-label="Missions"
                    className="mt-10 flex flex-wrap gap-2 border-b border-[#171713]/10"
                >
                    {missions.map((mission) => (
                        <button
                            key={mission.id}
                            role="tab"
                            aria-selected={activeId === mission.id}
                            onClick={() => setActiveId(mission.id)}
                            className={`min-h-11 px-5 py-3 text-sm font-semibold transition-colors ${activeId === mission.id
                                ? "border-b-2 text-[#171713]"
                                : "border-b-2 border-transparent text-[#171713]/50 hover:text-[#171713]"
                                }`}
                            style={
                                activeId === mission.id
                                    ? { borderBottomColor: mission.accent }
                                    : undefined
                            }
                        >
                            {mission.code} · {mission.title}
                        </button>
                    ))}
                </div>

                <div
                    role="tabpanel"
                    key={activeMission.id}
                    className="mt-10"
                >
                    <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
                        <div>
                            <h3 className="text-2xl font-bold tracking-[-0.01em]">
                                {activeMission.tagline}
                            </h3>
                            <p className="mt-4 max-w-md leading-7 text-[#5c5a50]">
                                {activeMission.problem}
                            </p>

                            <dl className="mt-8 space-y-5">
                                <div>
                                    <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-[#171713]/50">
                                        You&apos;ll build
                                    </dt>
                                    <dd className="mt-1 leading-7 text-[#171713]">
                                        {activeMission.build}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-[#171713]/50">
                                        Deployed outcome
                                    </dt>
                                    <dd className="mt-1 leading-7 text-[#171713]">
                                        {activeMission.outcome}
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div
                            className="flex flex-col justify-between p-6"
                            style={{
                                backgroundColor: `${activeMission.accent}0d`,
                                borderLeft: `3px solid ${activeMission.accent}`,
                            }}
                        >
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#171713]/50">
                                    Skills you&apos;ll practice
                                </p>
                                <ul className="mt-4 space-y-3">
                                    {activeMission.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="flex items-center gap-3 text-sm font-medium text-[#171713]"
                                        >
                                            <span
                                                className="h-1.5 w-1.5 flex-shrink-0"
                                                style={{ backgroundColor: activeMission.accent }}
                                                aria-hidden="true"
                                            />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="mt-8 font-mono text-xs text-[#171713]/40">
                                {activeMission.code} / {missions.length.toString().padStart(2, "0")}
                            </p>
                        </div>
                    </div>

                    {activeMission.id === "recover" && <LiveDemo />}
                    {activeMission.id === "navigate" && <NavigateDemo />}
                </div>
            </div>
        </section>
    );
}