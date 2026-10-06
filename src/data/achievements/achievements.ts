export interface Achievement {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  link?: string;
  featured: boolean;
}

export const achievements: Achievement[] = [
  {
    id: "1",
    category: "Hackathon Achievements",
    title: "GDG Vibe Coding Hackathon",
    description:
      "WikiClub Tech members participated in the GDG Vibe Coding Hackathon and showcased their technical skills through an innovative project.",
    date: "2026-07-31",
    featured: true,
  },
];