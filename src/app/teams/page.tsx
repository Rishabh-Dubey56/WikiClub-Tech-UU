"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import TeamMemberCard from "@/components/team/TeamMemberCard";
import WikimediaBackground from "@/components/team/WikimediaBackground";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/data/team_data/teamMembers";

type RoleFilter =
  | "coordinator"
  | "mentor"
  | "envoy"
  | "lead"
  | "volunteer";

const roleLabels: Record<RoleFilter, string> = {
  coordinator: "Project Coordinators",
  mentor: "Mentors",
  envoy: "Campus Envoys",
  lead: "Team Leads",
  volunteer: "Volunteers",
};

const sectionOrder: RoleFilter[] = [
  "coordinator",
  "mentor",
  "envoy",
  "lead",
  "volunteer",
];

const validRoles = new Set<string>(sectionOrder);

const Index = () => {
  const [activeSection, setActiveSection] = useState<RoleFilter>(
    sectionOrder[0]
  );

  /* =========================
     GROUP MEMBERS BY ROLE
  ========================== */
  const membersByRole = useMemo(() => {
    const grouped: Partial<Record<RoleFilter, typeof teamMembers>> = {};

    for (const member of teamMembers) {
      const role = member.roleType.trim().toLowerCase();

      if (!validRoles.has(role)) {
        return grouped;
      }

      const typedRole = role as RoleFilter;

      if (!grouped[typedRole]) {
        grouped[typedRole] = [];
      }

      grouped[typedRole]!.push(member);
    }

    return grouped;
  }, []);

  /* =========================
     SMOOTH SCROLL
  ========================== */
  const handleNavClick = (role: RoleFilter) => {
    const element = document.getElementById(role);

    if (!element) return;

    const headerOffset = 120;

    const elementPosition = element.getBoundingClientRect().top;

    const offsetPosition =
      elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setActiveSection(role);
  };

  /* =========================
     ACTIVE SECTION ON SCROLL
  ========================== */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      let currentSection: RoleFilter | null = null;

      for (const role of sectionOrder) {
        const section = document.getElementById(role);

        if (!section) continue;

        if (scrollPosition >= section.offsetTop) {
          currentSection = role;
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* =========================
          HERO SECTION
      ========================== */}
      <header className="relative overflow-hidden px-6 py-24 [mask-image:linear-gradient(to_bottom,black_75%,transparent)]">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-100 to-red-100" />

        <WikimediaBackground />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center"
          >
            {/* Logo */}
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="mb-8 inline-block"
            >
              <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl">
                <Image
                  src="/borderless_logo.svg"
                  width={80}
                  height={80}
                  alt="Wikimedia Logo"
                  className="absolute h-20 w-20 object-contain"
                  priority
                />

                <motion.img
                  src="/logo.svg"
                  alt="Rotating Logo Ring"
                  className="absolute h-20 w-20 object-contain"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    maskImage:
                      "radial-gradient(circle, transparent 60%, black 61%)",
                    WebkitMaskImage:
                      "radial-gradient(circle, transparent 60%, black 61%)",
                  }}
                />
              </div>
            </motion.div>

            {/* Heading */}
            <h1 className="mb-6 text-5xl font-black tracking-tight text-black drop-shadow-lg md:text-7xl">
              Our Mission, Our People
            </h1>

            <p className="mx-auto max-w-3xl text-xl font-medium text-black/95 drop-shadow md:text-2xl">
              Meet the passionate team working together to make knowledge
              accessible to everyone.
            </p>
          </motion.div>
        </div>
      </header>

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <main className="container mx-auto max-w-7xl px-6 py-16">
        {/* =========================
            ROLE NAVIGATION
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="sticky top-16 z-40 mb-20 flex flex-wrap justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-lg md:gap-4 md:px-6"
        >
          {sectionOrder.map((role, index) => {
            const members = membersByRole[role];

            if (!members || members.length === 0) {
              return null;
            }

            return (
              <motion.div
                key={role}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <Button
                  type="button"
                  onClick={() => handleNavClick(role)}
                  variant={
                    activeSection === role
                      ? "default"
                      : "outline"
                  }
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 md:px-7 md:py-3 md:text-base ${
                    activeSection === role
                      ? "scale-105 border-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-xl"
                      : "bg-background/50 hover:scale-105 hover:text-primary"
                  }`}
                >
                  {roleLabels[role]}
                </Button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* =========================
            TEAM SECTIONS
        ========================== */}
        <div className="space-y-24">
          {sectionOrder.map((role) => {
            const members = membersByRole[role];

            if (!members || members.length === 0) {
              return null;
            }

            return (
              <section
                key={role}
                id={role}
                className="scroll-mt-32"
              >
                {/* Section Header */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-100px",
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="mb-12 text-center"
                >
                  <h2 className="text-3xl font-bold md:text-4xl">
                    {roleLabels[role]}
                  </h2>

                  <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />

                  <p className="mt-4 text-sm text-muted-foreground">
                    {members.length}{" "}
                    {members.length === 1 ? "member" : "members"}
                  </p>
                </motion.div>

                {/* Team Cards */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.08,
                      },
                    },
                  }}
                  className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                  {members.map((member) => (
                    <motion.div
                      key={member.id}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 25,
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                        },
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                    >
                      <TeamMemberCard {...member} />
                    </motion.div>
                  ))}
                </motion.div>
              </section>
            );
          })}
        </div>

        {/* =========================
            EMPTY STATE
        ========================== */}
        {teamMembers.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="py-20 text-center"
          >
            <h2 className="text-2xl font-bold">
              Team information coming soon
            </h2>

            <p className="mt-3 text-muted-foreground">
              Our team details will be available here shortly.
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Index;

