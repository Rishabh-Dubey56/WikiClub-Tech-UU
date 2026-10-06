"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Code2,
  FlaskConical,
  UserRound,
  Award,
  Newspaper,
  MessageSquareQuote,
  GraduationCap,
  GitPullRequest,
  ExternalLink,
  ChevronDown,
  Medal,
} from "lucide-react";

import { achievements } from "../../data/achievements/achievements";

/* =========================================================
   CONTRIBUTOR DATA
   Kept directly inside this page because the old
   contributors data file has been deleted.
========================================================= */

type Contributor = {
  id: string;
  name: string;
  merged: number;
  links: string[];
};

const contributors: Contributor[] = [
  {
    id: "mohd-shadab",
    name: "Mohd Shadab",
    merged: 4,
    links: [],
  },
  {
    id: "kavaljeet-singh",
    name: "Kavaljeet Singh",
    merged: 3,
    links: [],
  },
  {
    id: "pushpit-saluja",
    name: "Pushpit Saluja",
    merged: 2,
    links: [],
  },
  {
    id: "hemant-ojha",
    name: "Hemant Ojha",
    merged: 2,
    links: [],
  },
  {
    id: "vratej-diwedi",
    name: "Vratej Diwedi",
    merged: 1,
    links: [],
  },
  {
    id: "vaishnavi-mishra",
    name: "Vaishnavi Mishra",
    merged: 1,
    links: [],
  },
  {
    id: "shresth-srivastava",
    name: "Shresth Srivastava",
    merged: 1,
    links: [],
  },
  {
    id: "rehan-khan",
    name: "Rehan Khan",
    merged: 1,
    links: [],
  },
  {
    id: "shrey-jaiswal",
    name: "Shrey Jaiswal",
    merged: 1,
    links: [],
  },
  {
    id: "tejash-yadav",
    name: "Tejash Yadav",
    merged: 1,
    links: [],
  },
];

/* =========================================================
   CONTRIBUTOR IMAGES
   Files are inside public/team/
========================================================= */

const contributorImages: Record<string, string> = {
  "Mohd Shadab": "/team/Mohd Shadab.jpg",
  "Kavaljeet Singh": "/team/KAVALJEET SINGH.jpg",
  "Pushpit Saluja": "/team/Pushpit Saluja.jpg",
  "Hemant Ojha": "/team/Hemant Ojha.png",
  "Vratej Diwedi": "/team/Vratej Dwivedi.png",

  // Currently unavailable
  "Vaishnavi Mishra": "",
  "Shresth Srivastava": "",

  "Rehan Khan": "/team/Rehan Khan.jpg",
  "Shrey Jaiswal": "/team/Shrey.jpg",
  "Tejash Yadav": "/team/Tejash Yadav.jpg",
};

/* =========================================================
   CONTRIBUTOR DETAILS
========================================================= */

const contributorDescriptions: Record<
  string,
  {
    role: string;
    description: string;
  }
> = {
  "Mohd Shadab": {
    role: "WikiClub Tech Contributor",
    description:
      "Contributed to WikiClub Tech through open-source project contributions and community development.",
  },

  "Kavaljeet Singh": {
    role: "WikiClub Tech Contributor",
    description:
      "Contributed to WikiClub Tech through collaborative project and open-source contribution activities.",
  },

  "Pushpit Saluja": {
    role: "WikiClub Tech Contributor",
    description:
      "Contributed to WikiClub Tech projects and collaborative community development.",
  },

  "Hemant Ojha": {
    role: "WikiClub Tech Contributor",
    description:
      "Contributed to WikiClub Tech through open-source collaboration and project development.",
  },

  "Vratej Diwedi": {
    role: "WikiClub Tech Contributor",
    description:
      "Participated in WikiClub Tech contribution activities and collaborative project development.",
  },

  "Vaishnavi Mishra": {
    role: "WikiClub Tech Contributor",
    description:
      "Contributed to WikiClub Tech community projects and collaborative activities.",
  },

  "Shresth Srivastava": {
    role: "WikiClub Tech Contributor",
    description:
      "Contributed to WikiClub Tech through collaborative project work and community contributions.",
  },

  "Rehan Khan": {
    role: "WikiClub Tech Contributor",
    description:
      "Contributed to WikiClub Tech projects and community contribution activities.",
  },

  "Shrey Jaiswal": {
    role: "WikiClub Tech Contributor",
    description:
      "Contributed to WikiClub Tech through collaborative development and open-source activities.",
  },

  "Tejash Yadav": {
    role: "WikiClub Tech Contributor",
    description:
      "Contributed to WikiClub Tech projects and open-source community activities.",
  },
};

/* =========================================================
   CONTRIBUTOR AVATAR
========================================================= */

function ContributorAvatar({
  name,
  image,
  size = "small",
}: {
  name: string;
  image: string | null;
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
   ACHIEVEMENT CATEGORIES
========================================================= */

const achievementCategories = [
  {
    title: "Awards & Recognitions",
    description:
      "Celebrating awards, recognitions and accomplishments earned by our community.",
    icon: Trophy,
  },
  {
    title: "Hackathon Achievements",
    description:
      "Projects, participation and achievements from hackathons and coding events.",
    icon: Code2,
  },
  {
    title: "Research & Publications",
    description:
      "Research work, papers, technical publications and knowledge contributions.",
    icon: FlaskConical,
  },
  {
    title: "Member Spotlights",
    description:
      "Highlighting members who have made meaningful contributions to the community.",
    icon: UserRound,
  },
  {
    title: "Certificates & Badges",
    description:
      "Verified certificates, badges and learning milestones earned by members.",
    icon: Award,
  },
  {
    title: "Press & Media",
    description:
      "Features, media mentions and stories about WikiClub Tech and its members.",
    icon: Newspaper,
  },
  {
    title: "Testimonials",
    description:
      "Experiences and feedback shared by members, mentors and collaborators.",
    icon: MessageSquareQuote,
  },
  {
    title: "Alumni Achievements",
    description:
      "Professional and academic achievements of our community alumni.",
    icon: GraduationCap,
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function AchievementsPage() {
  const [selected, setSelected] = useState<string | null>(null);

  const totalContributions = contributors.reduce(
    (total, contributor) => total + contributor.merged,
    0
  );

  const activeContributors = contributors.filter(
    (contributor) => contributor.merged > 0
  ).length;

  const sortedContributors = [...contributors].sort(
    (a, b) => b.merged - a.merged
  );

  const totalAchievements = achievements.length;

  const featuredAchievements = achievements.filter(
    (achievement) => achievement.featured
  );

  const totalFeatured = featuredAchievements.length;

  const totalCategories = achievementCategories.length;

  const getContributorImage = (name: string) => {
    return contributorImages[name] || null;
  };

  const getContributorDetails = (name: string) => {
    return (
      contributorDescriptions[name] || {
        role: "WikiClub Tech Contributor",
        description:
          "Contributed to WikiClub Tech community projects and collaborative activities.",
      }
    );
  };

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
          MILESTONES
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

            <p className="milestone-label">Contributors</p>
          </motion.div>

          {/* TOTAL CONTRIBUTIONS */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="milestone-card"
          >
            <div className="milestone-line milestone-line-blue" />

            <p className="milestone-number">{totalContributions}</p>

            <p className="milestone-label">Total Contributions</p>
          </motion.div>

          {/* ACTIVE CONTRIBUTORS */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="milestone-card"
          >
            <div className="milestone-line milestone-line-maroon" />

            <p className="milestone-number">{activeContributors}</p>

            <p className="milestone-label">Active Contributors</p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          ACHIEVEMENT HIGHLIGHTS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-8">
          <p className="achievement-label">Community achievements</p>

          <h2 className="achievement-section-title mt-2 text-3xl font-bold">
            Achievement Highlights
          </h2>

          <p className="achievement-section-description mt-2 max-w-2xl">
            Explore the achievements and accomplishments of WikiClub Tech
            members.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievementCategories.map((category, index) => {
            const Icon = category.icon;

            const categoryAchievements = achievements.filter(
              (achievement) => achievement.category === category.title
            );

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="achievement-card p-6"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="achievement-icon">
                    <Icon className="h-5 w-5" />
                  </div>

                  {categoryAchievements.length > 0 && (
                    <span className="achievement-count">
                      {categoryAchievements.length}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {category.description}
                </p>

                {categoryAchievements.length === 0 ? (
                  <div className="achievement-empty">
                    <p className="achievement-empty-title">
                      No achievement yet
                    </p>

                    <p className="achievement-empty-text">
                      Verified achievements will appear here.
                    </p>
                  </div>
                ) : (
                  <div className="mt-6 space-y-4 border-t pt-5">
                    {categoryAchievements.map((achievement) => (
                      <div key={achievement.id}>
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="font-semibold text-slate-800">
                            {achievement.title}
                          </h4>

                          {achievement.featured && (
                            <span className="achievement-featured">
                              Featured
                            </span>
                          )}
                        </div>

                        <p className="mt-2 text-xs leading-5 text-slate-500">
                          {achievement.description}
                        </p>

                        <p className="mt-3 text-xs text-slate-400">
                          {new Date(achievement.date).toLocaleDateString(
                            "en-IN",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </p>

                        {achievement.link && (
                          <Link
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="achievement-link mt-3 inline-flex items-center gap-1 text-sm"
                          >
                            View Achievement
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          CONTRIBUTION CHAMPIONS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="mb-8">
          <p className="achievement-label">Community contribution</p>

          <h2 className="achievement-section-title mt-2 text-3xl font-bold">
            Contribution Champions
          </h2>

          <p className="achievement-section-description mt-2 max-w-2xl">
            Recognizing contributors who are actively helping build and
            improve WikiClub Tech.
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
                    Merged
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Details
                  </th>
                </tr>
              </thead>

              <tbody>
                {sortedContributors.map((contributor, index) => {
                  const isSelected = selected === contributor.id;

                  const image = getContributorImage(contributor.name);

                  const details = getContributorDetails(contributor.name);

                  return (
                    <Fragment key={contributor.id}>
                      <motion.tr
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.03 }}
                        className={`border-b transition-colors ${
                          isSelected
                            ? "bg-[#F8FAFC]"
                            : "hover:bg-slate-50/70"
                        }`}
                      >
                        {/* RANK */}

                        <td className="px-6 py-5">
                          {index === 0 ? (
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
                          ) : index === 1 ? (
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
                          ) : index === 2 ? (
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
                          ) : (
                            <span className="contributor-rank">
                              #{index + 1}
                            </span>
                          )}
                        </td>

                        {/* CONTRIBUTOR */}

                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <ContributorAvatar
                              name={contributor.name}
                              image={image}
                            />

                            <div>
                              <p className="font-bold text-slate-900">
                                {contributor.name}
                              </p>

                              <p className="mt-0.5 text-xs text-slate-400">
                                {details.role}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* CONTRIBUTIONS */}

                        <td className="px-6 py-5">
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
                                    image={image}
                                    size="large"
                                  />

                                  <div>
                                    <p className="text-xl font-bold text-slate-900">
                                      {contributor.name}
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-[#045797]">
                                      {details.role}
                                    </p>

                                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                                      {details.description}
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
                                      #{index + 1}
                                    </p>
                                  </div>

                                  <div className="rounded-lg border bg-[#F8FAFC] p-4">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                      Merged Contributions
                                    </p>

                                    <p className="mt-1 text-lg font-bold text-[#35A06A]">
                                      {contributor.merged}
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
                                        WikiClub Tech contribution record
                                      </p>
                                    </div>

                                    <span className="rounded-full bg-[#35A06A]/10 px-3 py-1 text-xs font-bold text-[#35A06A]">
                                      Total: {contributor.merged}
                                    </span>
                                  </div>

                                  <div className="rounded-lg border bg-[#F8FAFC] p-4">
                                    <div className="flex items-center gap-3">
                                      <GitPullRequest className="h-5 w-5 text-[#35A06A]" />

                                      <div>
                                        <p className="text-sm font-semibold text-slate-800">
                                          {contributor.merged} merged{" "}
                                          {contributor.merged === 1
                                            ? "contribution"
                                            : "contributions"}
                                        </p>

                                        <p className="mt-1 text-xs text-slate-400">
                                          Recognized contribution count for
                                          WikiClub Tech.
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
          ACHIEVEMENT SUMMARY
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          <div className="milestone-card">
            <div className="milestone-line milestone-line-green" />
            <p className="milestone-number">{totalAchievements}</p>
            <p className="milestone-label">Total Achievements</p>
          </div>

          <div className="milestone-card">
            <div className="milestone-line milestone-line-blue" />
            <p className="milestone-number">{totalFeatured}</p>
            <p className="milestone-label">Featured Achievements</p>
          </div>

          <div className="milestone-card">
            <div className="milestone-line milestone-line-maroon" />
            <p className="milestone-number">{totalCategories}</p>
            <p className="milestone-label">Achievement Categories</p>
          </div>
        </div>
      </section>
    </main>
  );
}

