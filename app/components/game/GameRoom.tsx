"use client";

import { useState } from "react";
import { levels } from "@/app/data/levels";

export default function GameRoom() {
    const level = levels[0];
    const [selected, setSelected] = useState<string[]>([]);
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
        </div>
    );
}