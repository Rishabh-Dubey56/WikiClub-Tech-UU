"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  UserRound,
  GraduationCap,
  GitPullRequest,
  ExternalLink,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Medal,
  Play,
  Quote,
} from "lucide-react";

import { achievements } from "../../data/achievements/achievements";

/* =========================================================
   CONTRIBUTOR TYPES
========================================================= */

type Contributor = {
  id: string;
  name: string;
  merged?: number;
  links: string[];
  image?: string;
  description?: string;
};

/* =========================================================
   CONTRIBUTION CHAMPIONS
   First 10 = verified contribution records.
   Next 10 = featured contributors from the team screenshots.
========================================================= */

const contributors: Contributor[] = [
  {
    id: "mohd-shadab",
    name: "Mohd Shadab",
    merged: 4,
    links: [],
    image: "/team/Mohd Shadab.jpg",
    description:
      "Contributed to WikiClub Tech through open-source project contributions and community development.",
  },
  {
    id: "kavaljeet-singh",
    name: "Kavaljeet Singh",
    merged: 3,
    links: [],
    image: "/team/KAVALJEET SINGH.jpg",
    description:
      "Contributed to WikiClub Tech through collaborative project and open-source contribution activities.",
  },
  {
    id: "pushpit-saluja",
    name: "Pushpit Saluja",
    merged: 2,
    links: [],
    image: "/team/Pushpit Saluja.jpg",
    description:
      "Contributed to WikiClub Tech projects and collaborative community development.",
  },
  {
    id: "hemant-ojha",
    name: "Hemant Ojha",
    merged: 2,
    links: [],
    image: "/team/Hemant Ojha.png",
    description:
      "Contributed to WikiClub Tech through open-source collaboration and project development.",
  },
  {
    id: "vratej-diwedi",
    name: "Vratej Diwedi",
    merged: 1,
    links: [],
    image: "/team/Vratej Dwivedi.png",
    description:
      "Participated in WikiClub Tech contribution activities and collaborative project development.",
  },
  {
    id: "vaishnavi-mishra",
    name: "Vaishnavi Mishra",
    merged: 1,
    links: [],
    image: "",
    description:
      "Contributed to WikiClub Tech community projects and collaborative activities.",
  },
  {
    id: "shresth-srivastava",
    name: "Shresth Srivastava",
    merged: 1,
    links: [],
    image: "",
    description:
      "Contributed to WikiClub Tech through collaborative project work and community contributions.",
  },
  {
    id: "rehan-khan",
    name: "Rehan Khan",
    merged: 1,
    links: [],
    image: "/team/Rehan Khan.jpg",
    description:
      "Contributed to WikiClub Tech projects and community contribution activities.",
  },
  {
    id: "shrey-jaiswal",
    name: "Shrey Jaiswal",
    merged: 1,
    links: [],
    image: "/team/Shrey.jpg",
    description:
      "Contributed to WikiClub Tech through collaborative development and open-source activities.",
  },
  {
    id: "tejash-yadav",
    name: "Tejash Yadav",
    merged: 1,
    links: [],
    image: "/team/Tejash Yadav.jpg",
    description:
      "Contributed to WikiClub Tech projects and open-source community activities.",
  },

  /* =======================================================
     ADDITIONAL FEATURED CONTRIBUTORS
     Taken from the members visible in your screenshots.
     No fake contribution count is assigned.
  ======================================================= */

  {
    id: "anupam-yadav",
    name: "Anupam Yadav",
    merged: undefined,
    links: [],
    image: "/team/Anupam Yadav.jpg",
    description:
      "Featured WikiClub Tech community member recognized for participation and contribution to the community.",
  },
  {
    id: "harshit-pandey",
    name: "Harshit Pandey",
    merged: undefined,
    links: [],
    image: "/team/Harshit Pandey.jpg",
    description:
      "Featured WikiClub Tech community member contributing to collaborative community activities.",
  },
  {
    id: "sanya-gupta",
    name: "Sanya Gupta",
    merged: undefined,
    links: [],
    image: "/team/Sanya Gupta.jpg",
    description:
      "Featured WikiClub Tech community member participating in collaborative activities.",
  },
  {
    id: "sejal-kesarwani",
    name: "Sejal Kesarwani",
    merged: undefined,
    links: [],
    image: "/team/Sejal Kesarwani.jpg",
    description:
      "Featured WikiClub Tech community member participating in community initiatives.",
  },
  {
    id: "akhilesh-tiwari",
    name: "Akhilesh Tiwari",
    merged: undefined,
    links: [],
    image: "/team/Akhilesh Tiwari.jpg",
    description:
      "Featured WikiClub Tech community member contributing to community activities.",
  },
  {
    id: "saumya-rawat",
    name: "Saumya Rawat",
    merged: undefined,
    links: [],
    image: "/team/Saumya Rawat.jpg",
    description:
      "Featured WikiClub Tech community member participating in collaborative initiatives.",
  },
  {
    id: "saumya-agrahari",
    name: "Saumya Agrahari",
    merged: undefined,
    links: [],
    image: "/team/Saumya Agrahari.jpg",
    description:
      "Featured WikiClub Tech community member contributing to community activities.",
  },
  {
    id: "ayush-tiwari",
    name: "Ayush Tiwari",
    merged: undefined,
    links: [],
    image: "/team/Ayush Tiwari.jpg",
    description:
      "Featured WikiClub Tech community member participating in collaborative activities.",
  },
  {
    id: "shami-verma",
    name: "Shami Verma",
    merged: undefined,
    links: [],
    image: "/team/Shami Verma.jpg",
    description:
      "Featured WikiClub Tech community member participating in WikiClub initiatives.",
  },
  {
    id: "syed-sohrab-haider-rizvi",
    name: "Syed Sohrab Haider Rizvi",
    merged: undefined,
    links: [],
    image: "/team/Syed Sohrab Haider Rizvi.jpg",
    description:
      "Featured WikiClub Tech community member contributing through collaborative participation.",
  },
];

/* =========================================================
   ACHIEVEMENT HIGHLIGHT TYPES
========================================================= */

type Highlight = {
  id: string;
  type: "Awards & Recognition" | "Alumni Achievement" | "Testimonials";
  title: string;
  subtitle: string;
  description: string;
  image: string;
  secondaryImage?: string;
  video?: boolean;
};

/* =========================================================
   ACHIEVEMENT HIGHLIGHTS
   Add/replace real photos here as they become available.
========================================================= */

const achievementHighlights: Highlight[] = [
  {
    id: "tedx-united-university",
    type: "Awards & Recognition",
    title: "TEDx United University",
    subtitle: "Technical & Social Media Team",
    description:
      "Contributed to the technical setup and social media operations at TEDx United University, amplifying the event's impact and engagement.",
    image: "/achievements/tedx-united-university.jpg",
    secondaryImage: "/achievements/tedx-united-university-2.jpg",
  },
  {
    id: "community-recognition",
    type: "Awards & Recognition",
    title: "Community Recognition",
    subtitle: "WikiClub Tech",
    description:
      "Recognizing the work, participation and achievements of members who contribute to the growth of the WikiClub Tech community.",
    image: "/achievements/award-recognition.jpg",
    secondaryImage: "/achievements/award-recognition-2.jpg",
  },
  {
    id: "alumni-achievement",
    type: "Alumni Achievement",
    title: "Alumni Achievement",
    subtitle: "WikiClub Tech Alumni",
    description:
      "Celebrating the academic, professional and entrepreneurial journeys of WikiClub Tech alumni beyond the university.",
    image: "/achievements/alumni-achievement.jpg",
    secondaryImage: "/achievements/alumni-achievement-2.jpg",
  },
  {
    id: "alumni-journey",
    type: "Alumni Achievement",
    title: "From Campus to Career",
    subtitle: "Alumni Spotlight",
    description:
      "Highlighting alumni journeys and the impact of skills, collaboration and experiences developed during their time with the community.",
    image: "/achievements/alumni-journey.jpg",
    secondaryImage: "/achievements/alumni-journey-2.jpg",
  },
  {
    id: "member-testimonial",
    type: "Testimonials",
    title: "Community Experience",
    subtitle: "Member Testimonial",
    description:
      "Hear directly from members about their experiences, learning opportunities and collaborative journey with WikiClub Tech.",
    image: "/achievements/testimonial.jpg",
    secondaryImage: "/achievements/testimonial-2.jpg",
    video: true,
  },
];

/* =========================================================
   CONTRIBUTOR AVATAR
========================================================= */

function ContributorAvatar({
  name,
  image,
  size = "small",
}: {
  name: string;
  image?: string | null;
  size?: "small" | "large";
}) {
  const [imageError, setImageError] = useState(false);

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const isLarge = size === "large";

  if (!image || imageError) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-full bg-[#F5F7FA] font-bold text-[#045797] ring-1 ring-slate-200 ${
          isLarge ? "h-20 w-20 text-xl" : "h-12 w-12 text-sm"
        }`}
      >
        {initials}
      </div>
    );
  }

  return (
    <div
      className={`shrink-0 overflow-hidden rounded-full border-2 border-white bg-slate-100 shadow-sm ring-1 ring-slate-200 ${
        isLarge ? "h-20 w-20" : "h-12 w-12"
      }`}
    >
      <img
        src={encodeURI(image)}
        alt={`${name} profile`}
        className="h-full w-full object-cover"
        loading="lazy"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

/* =========================================================
   HIGHLIGHT IMAGE
========================================================= */

function HighlightImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#DFF7EC] via-[#EAF5FF] to-[#F5F7FA] ${className}`}
      >
        <Trophy className="h-12 w-12 text-[#045797]/30" />
      </div>
    );
  }

  return (
    <img
      src={encodeURI(src)}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
    />
  );
}

/* =========================================================
   MEDAL
========================================================= */

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) {
    return (
      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-yellow-300 bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-400 shadow-md shadow-yellow-200/50"
        title="1st Place"
      >
        <Medal
          className="h-6 w-6 text-yellow-700"
          strokeWidth={2.2}
        />

        <span className="absolute -bottom-2 rounded-full border border-yellow-300 bg-white px-1.5 py-0.5 text-[9px] font-extrabold text-yellow-700 shadow-sm">
          #1
        </span>
      </div>
    );
  }

  if (rank === 2) {
    return (
      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-300 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-400 shadow-md shadow-slate-200/50"
        title="2nd Place"
      >
        <Medal
          className="h-6 w-6 text-slate-600"
          strokeWidth={2.2}
        />

        <span className="absolute -bottom-2 rounded-full border border-slate-300 bg-white px-1.5 py-0.5 text-[9px] font-extrabold text-slate-600 shadow-sm">
          #2
        </span>
      </div>
    );
  }

  if (rank === 3) {
    return (
      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-orange-300 bg-gradient-to-br from-orange-100 via-orange-200 to-orange-400 shadow-md shadow-orange-200/50"
        title="3rd Place"
      >
        <Medal
          className="h-6 w-6 text-orange-700"
          strokeWidth={2.2}
        />

        <span className="absolute -bottom-2 rounded-full border border-orange-300 bg-white px-1.5 py-0.5 text-[9px] font-extrabold text-orange-700 shadow-sm">
          #3
        </span>
      </div>
    );
  }

  return <span className="contributor-rank">#{rank}</span>;
}

/* =========================================================
   PAGE
========================================================= */

export default function AchievementsPage() {
  const [selected, setSelected] = useState<string | null>(null);

  /* Contribution pagination */
  const [contributorPage, setContributorPage] = useState(0);

  /* Achievement highlight carousel */
  const [highlightIndex, setHighlightIndex] = useState(0);

  const contributorsPerPage = 10;

  const totalContributorPages = Math.ceil(
    contributors.length / contributorsPerPage
  );

  const visibleContributors = contributors.slice(
    contributorPage * contributorsPerPage,
    contributorPage * contributorsPerPage + contributorsPerPage
  );

  const totalContributions = contributors.reduce(
    (total, contributor) => total + (contributor.merged || 0),
    0
  );

  const verifiedContributors = contributors.filter(
    (contributor) => typeof contributor.merged === "number"
  ).length;

  const totalAchievements = achievements.length;

  /* =======================================================
     AUTO CHANGE ACHIEVEMENT HIGHLIGHT
     Every 5 seconds
  ======================================================= */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHighlightIndex((current) =>
        current === achievementHighlights.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const nextHighlight = () => {
    setHighlightIndex((current) =>
      current === achievementHighlights.length - 1 ? 0 : current + 1
    );
  };

  const previousHighlight = () => {
    setHighlightIndex((current) =>
      current === 0 ? achievementHighlights.length - 1 : current - 1
    );
  };

  const currentHighlight = achievementHighlights[highlightIndex];

  return (
    <main className="achievement-page min-h-screen">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-28 lg:px-8">
        <div className="max-w-4xl">
          <p className="achievement-label mb-4">
            WikiClub Tech UU · Achievements
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Celebrating
            <span className="achievement-blue"> Ideas, Impact </span>
            & Achievement.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A record of the milestones, achievements and contributions that
            define the WikiClub Tech community at United University.
          </p>
        </div>
      </section>

      {/* =====================================================
          OUR MILESTONES
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="mb-8">
          <p className="achievement-label">By the numbers</p>

          <h2 className="achievement-section-title mt-2 text-3xl font-bold">
            Our Milestones
          </h2>

          <p className="achievement-section-description mt-2 max-w-2xl">
            A quick look at the community&apos;s contribution and achievement
            milestones.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* CONTRIBUTORS */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="milestone-card"
          >
            <div className="milestone-line milestone-line-green" />

            <p className="milestone-number">{contributors.length}</p>

            <p className="milestone-label">Featured Contributors</p>
          </motion.div>

          {/* VERIFIED CONTRIBUTIONS */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="milestone-card"
          >
            <div className="milestone-line milestone-line-blue" />

            <p className="milestone-number">{totalContributions}</p>

            <p className="milestone-label">Recorded Contributions</p>
          </motion.div>

          {/* ACHIEVEMENTS */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="milestone-card"
          >
            <div className="milestone-line milestone-line-maroon" />

            <p className="milestone-number">{totalAchievements}</p>

            <p className="milestone-label">Community Achievements</p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTRIBUTION CHAMPIONS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-8">
          <p className="achievement-label">Community contribution</p>

          <h2 className="achievement-section-title mt-2 text-3xl font-bold">
            Contribution Champions
          </h2>

          <p className="achievement-section-description mt-2 max-w-2xl">
            Recognizing contributors and community members who are helping
            build, improve and grow WikiClub Tech.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse">
              <thead>
                <tr className="border-b bg-[#F5F7FA] text-left">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Rank
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Contributor
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Contribution
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Details
                  </th>
                </tr>
              </thead>

              <tbody>
                {visibleContributors.map((contributor, localIndex) => {
                  const globalIndex =
                    contributorPage * contributorsPerPage + localIndex;

                  const rank = globalIndex + 1;

                  const isSelected = selected === contributor.id;

                  return (
                    <Fragment key={contributor.id}>
                      <motion.tr
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.25,
                          delay: localIndex * 0.025,
                        }}
                        className={`border-b transition-colors ${
                          isSelected
                            ? "bg-[#F8FAFC]"
                            : "hover:bg-slate-50/70"
                        }`}
                      >
                        {/* RANK */}

                        <td className="px-6 py-5">
                          <RankBadge rank={rank} />
                        </td>

                        {/* CONTRIBUTOR */}

                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <ContributorAvatar
                              name={contributor.name}
                              image={contributor.image}
                            />

                            <div>
                              <p className="font-bold text-slate-900">
                                {contributor.name}
                              </p>

                              <p className="mt-0.5 text-xs text-slate-400">
                                {contributor.merged !== undefined
                                  ? "WikiClub Tech Contributor"
                                  : "Featured Community Member"}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* CONTRIBUTION */}

                        <td className="px-6 py-5">
                          {contributor.merged !== undefined ? (
                            <div className="flex items-center gap-2">
                              <GitPullRequest className="h-4 w-4 text-[#35A06A]" />

                              <span className="font-bold text-[#35A06A]">
                                {contributor.merged}
                              </span>

                              <span className="text-sm text-slate-400">
                                {contributor.merged === 1
                                  ? "contribution"
                                  : "contributions"}
                              </span>
                            </div>
                          ) : (
                            <span className="inline-flex rounded-full bg-[#045797]/10 px-3 py-1.5 text-xs font-bold text-[#045797]">
                              Featured
                            </span>
                          )}
                        </td>

                        {/* DETAILS */}

                        <td className="px-6 py-5">
                          <button
                            type="button"
                            onClick={() =>
                              setSelected(
                                isSelected ? null : contributor.id
                              )
                            }
                            aria-expanded={isSelected}
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-[#045797]/30 hover:bg-[#F5F7FA] hover:text-[#045797]"
                          >
                            {isSelected ? "Hide Details" : "View Details"}

                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${
                                isSelected ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </td>
                      </motion.tr>

                      {/* EXPANDED DETAILS */}

                      <AnimatePresence initial={false}>
                        {isSelected && (
                          <motion.tr
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <td
                              colSpan={4}
                              className="border-b bg-[#F8FAFC] px-6 py-6"
                            >
                              <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.2 }}
                                className="rounded-xl border bg-white p-5 shadow-sm"
                              >
                                {/* PROFILE */}

                                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                                  <ContributorAvatar
                                    name={contributor.name}
                                    image={contributor.image}
                                    size="large"
                                  />

                                  <div>
                                    <p className="text-xl font-bold text-slate-900">
                                      {contributor.name}
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-[#045797]">
                                      {contributor.merged !== undefined
                                        ? "WikiClub Tech Contributor"
                                        : "Featured Community Member"}
                                    </p>

                                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                                      {contributor.description}
                                    </p>
                                  </div>
                                </div>

                                {/* STATS */}

                                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                  <div className="rounded-lg border bg-[#F8FAFC] p-4">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                      Community Rank
                                    </p>

                                    <p className="mt-1 text-lg font-bold text-[#045797]">
                                      #{rank}
                                    </p>
                                  </div>

                                  <div className="rounded-lg border bg-[#F8FAFC] p-4">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                      Contribution Record
                                    </p>

                                    <p className="mt-1 text-lg font-bold text-[#35A06A]">
                                      {contributor.merged !== undefined
                                        ? contributor.merged
                                        : "Featured"}
                                    </p>
                                  </div>

                                  <div className="rounded-lg border bg-[#F8FAFC] p-4">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                      Status
                                    </p>

                                    <p className="mt-1 text-lg font-bold text-[#35A06A]">
                                      Active
                                    </p>
                                  </div>
                                </div>

                                {/* CONTRIBUTION DETAILS */}

                                <div className="mt-6 border-t pt-5">
                                  <div className="mb-3 flex items-center justify-between">
                                    <div>
                                      <p className="text-sm font-bold text-slate-800">
                                        Contribution Details
                                      </p>

                                      <p className="text-xs text-slate-400">
                                        WikiClub Tech community record
                                      </p>
                                    </div>

                                    <span className="rounded-full bg-[#35A06A]/10 px-3 py-1 text-xs font-bold text-[#35A06A]">
                                      {contributor.merged !== undefined
                                        ? `Total: ${contributor.merged}`
                                        : "Featured Member"}
                                    </span>
                                  </div>

                                  <div className="rounded-lg border bg-[#F8FAFC] p-4">
                                    <div className="flex items-center gap-3">
                                      <GitPullRequest className="h-5 w-5 text-[#35A06A]" />

                                      <div>
                                        <p className="text-sm font-semibold text-slate-800">
                                          {contributor.merged !== undefined
                                            ? `${contributor.merged} merged ${
                                                contributor.merged === 1
                                                  ? "contribution"
                                                  : "contributions"
                                              }`
                                            : "Featured community member"}
                                        </p>

                                        <p className="mt-1 text-xs text-slate-400">
                                          {contributor.merged !== undefined
                                            ? "Recognized contribution count for WikiClub Tech."
                                            : "Featured here for community participation. A verified contribution count can be added later."}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            </td>
                          </motion.tr>
                        )}
                      </AnimatePresence>
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* ===================================================
              PAGINATION
          =================================================== */}

          <div className="flex flex-col gap-4 border-t bg-[#F8FAFC] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                {contributorPage * contributorsPerPage + 1}–
                {Math.min(
                  (contributorPage + 1) * contributorsPerPage,
                  contributors.length
                )}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-700">
                {contributors.length}
              </span>{" "}
              featured contributors
            </p>

            <div className="flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setContributorPage((page) => Math.max(0, page - 1));
                  setSelected(null);
                }}
                disabled={contributorPage === 0}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-[#045797]/30 hover:text-[#045797] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </button>

              <span className="rounded-lg bg-[#045797] px-4 py-2 text-sm font-bold text-white">
                {contributorPage + 1} / {totalContributorPages}
              </span>

              <button
                type="button"
                onClick={() => {
                  setContributorPage((page) =>
                    Math.min(totalContributorPages - 1, page + 1)
                  );
                  setSelected(null);
                }}
                disabled={contributorPage === totalContributorPages - 1}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-[#045797]/30 hover:text-[#045797] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
            JOIN WIKICLUB CTA
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col gap-4 rounded-2xl border bg-white p-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-4">
            <div className="achievement-icon shrink-0">
              <GitPullRequest className="h-5 w-5" />
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Want to become a contributor?
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Join WikiClub Tech and contribute to open knowledge,
                documentation and community projects.
              </p>
            </div>
          </div>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSd0VADKBrLPGOxYuLbLyZXa9EAYjbWZ4HWctRnYecpn-XpLXw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#045797] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#034576]"
          >
            Join WikiClub Tech
            <ExternalLink className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      {/* =====================================================
          ACHIEVEMENT HIGHLIGHTS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="mb-10">
          <p className="achievement-label">Community achievements</p>

          <h2 className="achievement-section-title mt-2 text-3xl font-bold">
            Achievement Highlights
          </h2>

          <p className="achievement-section-description mt-2 max-w-2xl">
            A visual collection of achievements, recognition, alumni journeys
            and community experiences.
          </p>
        </div>

        {/* ===================================================
            MAIN AUTO CAROUSEL
        =================================================== */}

        <div className="relative overflow-hidden rounded-[2rem] border bg-white shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHighlight.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45 }}
              className="grid min-h-[600px] lg:grid-cols-2"
            >
              {/* IMAGE AREA */}

              <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden bg-[#F7FAFC] p-8 sm:p-12 lg:min-h-[600px]">
                {/* BACK IMAGE */}

                <div className="absolute left-[9%] top-[15%] h-[68%] w-[70%] rotate-[-8deg] overflow-hidden rounded-[2rem] border-8 border-white bg-slate-100 shadow-xl opacity-75">
                  <HighlightImage
                    src={
                      currentHighlight.secondaryImage ||
                      currentHighlight.image
                    }
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* MAIN IMAGE */}

                <div className="relative z-10 h-[78%] w-[78%] rotate-[1deg] overflow-hidden rounded-[2rem] border-8 border-[#111827] bg-white shadow-2xl">
                  <HighlightImage
                    src={currentHighlight.image}
                    alt={currentHighlight.title}
                    className="h-full w-full object-cover"
                  />

                  {currentHighlight.video && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-xl">
                        <Play className="ml-1 h-7 w-7 fill-[#045797] text-[#045797]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* THIRD LAYER */}

                <div className="absolute bottom-[8%] right-[7%] h-[24%] w-[30%] rotate-[7deg] overflow-hidden rounded-[1.5rem] border-4 border-white bg-slate-100 shadow-lg">
                  <HighlightImage
                    src={currentHighlight.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* TEXT AREA */}

              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <span className="inline-flex w-fit rounded-full bg-[#045797]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#045797]">
                  {currentHighlight.type}
                </span>

                <h3 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  {currentHighlight.title}
                </h3>

                <p className="mt-3 text-lg font-medium text-slate-500">
                  {currentHighlight.subtitle}
                </p>

                <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                  {currentHighlight.description}
                </p>

                {currentHighlight.type === "Testimonials" && (
                  <div className="mt-7 flex items-start gap-3 rounded-xl bg-[#F8FAFC] p-4">
                    <Quote className="mt-0.5 h-5 w-5 shrink-0 text-[#045797]" />

                    <p className="text-sm leading-6 text-slate-500">
                      Community voices and experiences will be presented here
                      through verified testimonials.
                    </p>
                  </div>
                )}

                {/* CONTROLS */}

                <div className="mt-10 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={previousHighlight}
                    aria-label="Previous achievement highlight"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#045797]/30 hover:bg-[#F5F7FA] hover:text-[#045797]"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={nextHighlight}
                    aria-label="Next achievement highlight"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#045797]/30 hover:bg-[#F5F7FA] hover:text-[#045797]"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  <div className="ml-3 flex items-center gap-1.5">
                    {achievementHighlights.map((highlight, index) => (
                      <button
                        key={highlight.id}
                        type="button"
                        onClick={() => setHighlightIndex(index)}
                        aria-label={`Go to highlight ${index + 1}`}
                        className={`h-2 rounded-full transition-all ${
                          index === highlightIndex
                            ? "w-7 bg-[#045797]"
                            : "w-2 bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ===================================================
            HIGHLIGHT TYPES
        =================================================== */}

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {/* AWARDS */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="achievement-card p-6"
          >
            <div className="achievement-icon">
              <Trophy className="h-5 w-5" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Awards & Recognition
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Celebrating awards, recognitions and accomplishments earned by
              WikiClub Tech members and teams.
            </p>
          </motion.div>

          {/* ALUMNI */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="achievement-card p-6"
          >
            <div className="achievement-icon">
              <GraduationCap className="h-5 w-5" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Alumni Achievement
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Showcasing the academic, professional and entrepreneurial
              achievements of WikiClub Tech alumni.
            </p>
          </motion.div>

          {/* TESTIMONIALS */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="achievement-card p-6"
          >
            <div className="achievement-icon">
              <UserRound className="h-5 w-5" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Testimonials
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Member, mentor and collaborator experiences presented through
              photos, videos and testimonial stories.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}