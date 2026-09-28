"use client";

import { useState } from "react";
import ExperimentCard from "./ExperimentCard";
import { experiments, type Category } from "../data/experiments";

export default function ExperimentGallery() {
  const [filter, setFilter] = useState<Category | "All">("All");

  const filteredExperiments = experiments.filter(
    (experiment) =>
      filter === "All" || experiment.category === filter
  );

  return (
    <>
      <nav className="mx-auto mt-8 flex max-w-5xl items-center justify-between rounded-md border px-6 py-3">
        <span className="text-sm uppercase tracking-wider opacity-60">
          Filter
        </span>

        <div className="flex gap-8">
          <button
            onClick={() => setFilter("All")}
            className={
              filter === "All"
                ? "cursor-pointer font-semibold"
                : "cursor-pointer opacity-50 hover:opacity-100"
            }
          >
            All
          </button>

          <button
            onClick={() => setFilter("Games")}
            className={
              filter === "Games"
                ? "cursor-pointer font-semibold"
                : "cursor-pointer opacity-50 hover:opacity-100"
            }
          >
            Games
          </button>

          <button
            onClick={() => setFilter("Study")}
            className={
              filter === "Study"
                ? "cursor-pointer font-semibold"
                : "cursor-pointer opacity-50 hover:opacity-100"
            }
          >
            Study
          </button>

          <button
            onClick={() => setFilter("Tools")}
            className={
              filter === "Tools"
                ? "cursor-pointer font-semibold"
                : "cursor-pointer opacity-50 hover:opacity-100"
            }
          >
            Tools
          </button>
        </div>
      </nav>

      <section className="mx-auto mt-14 grid max-w-5xl grid-cols-3 gap-10">
        {filteredExperiments.map((experiment) => (
          <ExperimentCard
            key={experiment.title}
            title={experiment.title}
            category={experiment.category}
            description={experiment.description}
          />
        ))}
      </section>
    </>
  );
}