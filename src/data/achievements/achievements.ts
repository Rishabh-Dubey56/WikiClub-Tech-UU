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
  {
    id: "2",
    category: "Hackathon Achievements",
    title: "UHack 4.0 — First Runner-Up",
    description:
      "The WikiClub Tech UU team secured first runner-up at UHack 4.0. Team members Ayush Tiwari, Anshuman Rai, Saumya Agrahari and Unnati Kesarwani were awarded the 1st Runner-Up title and a ₹30,000 prize.",
    date: "2026-03-18",
    image: "/achievements/uhack-4.jpg",
    link: "https://lnkd.in/p/g68nPqBE",
    featured: true,
  },
  {
    id: "3",
    category: "Community Milestones",
    title: "Wikipedia 25th Birthday Celebration",
    description:
      "WikiClub Tech celebrated 25 years of Wikipedia with a community gathering, cake cutting ceremony, and a 'Why I Wiki' session led by Mohd Shadab.",
    date: "2026-04-12",
    image: "/achievements/wikipedia-25.png",
    link: "https://diff.wikimedia.org/2026/04/12/wikipedia-25th-birthday-celebration-at-wikiclub-tech-united-university/",
    featured: true,
  },
];