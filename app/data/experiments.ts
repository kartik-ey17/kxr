export type Category = "Study" | "Games" | "Tools";

export type Experiment = {
  title: string;
  category: Category;
  description: string;
};

export const experiments: Experiment[] = [
  {
    title: "Jump Game",
    category: "Study",
    description:
      "Visual understanding of the popular 'Jumping Game' problem from LeetCode.",
  },
  {
    title: "Memory Game",
    category: "Games",
    description:
      "Think you have a nice memory? Find it out.",
  },
  {
    title: "ASCII Converter",
    category: "Tools",
    description:
      "Convert images to ASCII text.",
  },
  {
    title: "Koko Eating Bananas",
    category: "Study",
    description:
      "Visual understanding of the popular 'Koko Eating Bananas' problem from LeetCode.",
  },
  {
    title: "Guess the Song",
    category: "Games",
    description:
      "Guess the song by tune.",
  },
];