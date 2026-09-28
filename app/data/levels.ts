export type RoomObject = {
    id: string;
    name: string;
    type: "furniture" | "tool" | "container" | "material" | "misc";

    x: number;
    y: number;

    width: number;
    height: number;

    rotation?: number;

    points: number;
};

export type Level = {
    id: string;
    scenario: string;
    maxSelections: number;
    objects: RoomObject[];
};

export const levels: Level[] = [
    {
        id: "level-1",
        scenario: "The power has gone out in an unfamiliar room. You need to find something small that has fallen underneath a heavy piece of furniture before leaving. You have very little time, and making the wrong move could make the situation harder.",
        maxSelections: 2,
        objects: [
            {
                id: "candle",
                name: "Candle",
                type: "material",
                x: 17,
                y: 20,
                width: 8,
                height: 10,
                points: 25,
            },

            {
                id: "mirror",
                name: "Mirror",
                type: "misc",
                x: 70,
                y: 18,
                width: 12,
                height: 18,
                rotation: -5,
                points: 35,
            },

            {
                id: "rope",
                name: "Rope",
                type: "material",
                x: 30,
                y: 68,
                width: 15,
                height: 6,
                rotation: 12,
                points: 30,
            },    

            {
                id: "chair",
                name: "Chair",
                type: "furniture",
                x: 55,
                y: 62,
                width: 12,
                height: 18,
                rotation: 4,
                points: 20,
            },

            {
                id: "bucket",
                name: "Bucket",
                type: "container",
                x: 78,
                y: 65,
                width: 10,
                height: 12,
                points: 15,
            },

            {
                id: "books",
                name: "Books",
                type: "misc",
                x: 42,
                y: 24,
                width: 14,
                height: 8,
                rotation: -3,
                points: 10,
            },
        ],
    },
];
