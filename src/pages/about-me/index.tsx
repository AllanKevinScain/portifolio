import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { SkillGroup } from "./skill-group";

export default function AboutMePage() {
  const [isHover, setIsHover] = useState(false);

  const whatsappNumber = "5551995368765";

  const whatsappMessage = encodeURIComponent(
    "Hello! I saw your portfolio and would like to talk about a project or collaboration.",
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main
      className={twMerge(
        "relative min-h-screen overflow-hidden",
        "bg-(--color-bg) text-(--color-text)",
      )}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className={twMerge(
            "absolute -top-50 -left-50 w-150 h-150",
            "rounded-full blur-[180px]",
            "bg-[color-mix(in_srgb,var(--color-primary)_30%,transparent)]",
          )}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          className={twMerge(
            "absolute -bottom-50 -right-50 w-150 h-150",
            "rounded-full blur-[180px]",
            "bg-[color-mix(in_srgb,var(--color-secondary)_30%,transparent)]",
          )}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        <motion.section
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-16 items-center min-h-[80vh]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.03,
            }}
            className={twMerge(
              "relative aspect-square rounded-2xl overflow-hidden",
              "border border-(--color-border)",
              "shadow-2xl",
              "bg-[linear-gradient(to_bottom_right,var(--color-secondary),var(--color-bg))]",
            )}
          >
            <div
              className={twMerge(
                "absolute inset-0 opacity-20",
                "bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]",
                "bg-size-[32px_32px]",
              )}
            />

            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={twMerge(
                "absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl",
                "bg-[color-mix(in_srgb,var(--color-primary)_30%,transparent)]",
              )}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.img
                key={isHover ? "real" : "ai"}
                initial={isHover ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                src={isHover ? "/eu_real.jpeg" : "/eu_ia.png"}
                className={twMerge(
                  "w-64 h-64 md:w-105 md:h-105",
                  "rounded-full object-cover",
                  "shadow-2xl",
                  "border border-(--color-border)",
                )}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Front-end Engineer
            </h1>

            <p className="text-lg text-(--color-text)/80 leading-relaxed">
              I build high-performance, accessible and scalable web
              applications, bridging complex backend systems with exceptional
              user experiences.
            </p>

            <p className="text-lg text-(--color-text)/80 leading-relaxed">
              Focused on architecture, performance, and clean design systems —
              delivering products that scale and drive real business impact.
            </p>

            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 60px color-mix(in srgb, var(--color-primary) 40%, transparent)",
              }}
              whileTap={{ scale: 0.96 }}
              href={whatsappLink}
              target="_blank"
              className={twMerge(
                "inline-flex items-center gap-3",
                "px-7 py-4 rounded-xl font-medium",
                "text-white",
                "bg-[linear-gradient(to_right,var(--color-primary),var(--color-secondary))]",
                "transition-all duration-300",
              )}
            >
              Contact me on WhatsApp
            </motion.a>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-10"
        >
          <h2 className="text-2xl font-semibold">Skills & Competencies</h2>

          <div className="space-y-8">
            <SkillGroup
              title="Core"
              items={[
                "React.js",
                "TypeScript",
                "Next.js",
                "JavaScript (ES6+)",
                "Vite",
              ]}
            />

            <SkillGroup
              title="Styling & UI"
              items={["Tailwind CSS", "Styled Components", "Framer Motion"]}
            />

            <SkillGroup
              title="Tooling & Testing"
              items={["Git", "Jest", "Cypress", "Docker"]}
            />
          </div>
        </motion.section>
      </div>
    </main>
  );
}
