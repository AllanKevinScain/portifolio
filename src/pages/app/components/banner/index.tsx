import { CustomLink, Text } from "@/components";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { CardTech } from "./card";

export function Banner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Text
          variant="span"
          className={twMerge(
            "mb-4 px-4 py-1 inline-block text-xs uppercase tracking-widest rounded-full border",
            "text-(--color-primary)",
            "border-[color-mix(in_srgb,var(--color-primary)_30%,transparent)]",
            "bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)]",
          )}
        >
          Always prepared for new challenges
        </Text>

        <Text
          variant="h1"
          className={twMerge(
            "text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight",
            "text-(--color-text)",
            "bg-linear-to-r from-(--color-primary) to-(--color-secondary) bg-clip-text text-transparent",
          )}
        >
          Front-end Engineer
        </Text>

        <Text>
          Building high-performance, scalable web interfaces with a focus on
          User Experience and robust architecture.
        </Text>

        <div className="mt-10 flex flex-wrap gap-4">
          <CustomLink.solid href="/">Download</CustomLink.solid>
          <CustomLink.outline href="https://generate-resume-seven.vercel.app/">
            Send message Build yours
          </CustomLink.outline>
        </div>
      </motion.div>

      <CardTech />
    </section>
  );
}
