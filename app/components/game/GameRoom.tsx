"use client";

import { useState } from "react";
import { levels } from "@/app/data/levels";

type GamePhase = "playing" | "result";

export default function GameRoom() {
    const level = levels[0];
    const [selected, setSelected] = useState<string[]>([]);
    const [phase , setPhase] = useState<GamePhase>("playing")
    const [score, setScore] = useState(0);
    function calculateScore(selectedIds: string[]) {
        return selectedIds.reduce((total,id) => {
            const object = level.objects.find((object) => object.id === id);

            return total + (object?.points ?? 0);
        }, 0);
    }
    function toggleObject(id: string) {
        if (selected.includes(id)) {
            setSelected(selected.filter((item) => item !== id));
            return;
        }
        if (selected.length >= level.maxSelections) {
            return;
        }
        setSelected([...selected, id]);
    }

    if (phase === "result") {
        return (
            <div className="mx-auto max-w-3xl py-20 text-center">
                <p className="text-sm uppercase tracking-widest opacity-50">
                    Level complete.
                </p>
                <h1 className="mt-4 text-6xl font-bold">
                    {score}
                </h1>
                <p className="mt-4 opacity-60">
                    points
                </p>
            </div>
        )
    }

    return (
        <div className="mx-auto max-w-6xl">
            <div className="mb-8">
                <p className="text-sm uppercase tracking-widest opacity-50">
                    Level 01
                </p>
                <h1 className="mt-3 text-3xl font-semibold">
                    Situation
                </h1>
                
                <p className="mt-4 max-w-3xl text-lg leading-relaxed opacity-80">
                    {level.scenario}
                </p>
            </div>

            <div className="mb-4 flex items-center justify-between">
                <span className="opacity-60">
                    Choose {level.maxSelections} objects
                </span>
                <span>
                    {selected.length} / {level.maxSelections}
                </span>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border">
                {level.objects.map((object) => (
                    <button
                        key={object.id}
                        onClick={() => toggleObject(object.id)}
                        className="absolute flex items-center justify-center rounded border px-3 py-2 text-sm transition"
                        style={{
                          left: `${object.x}%`,
                          top: `${object.y}%`,
                          width: `${object.width}%`,
                          height: `${object.height}%`,
                          transform: `rotate(${object.rotation ?? 0}deg)`,
                        }}
                    >
                        {object.name}
                    </button>
                ))}
            </div>
            <button
            disabled = {selected.length !== level.maxSelections}
            onClick = {() => {
                const finalScore = calculateScore(selected);
                setScore(finalScore);
                setPhase("result");
            }}
            className = "mt-6 rounded border px-5 py-2 disabled:cursor-not-allowed disabled:opacity-30"
        >
            Submit
        </button>
        </div>
    );
}