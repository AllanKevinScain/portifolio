import { Text } from '@/components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router';
import { SkillGroup } from './skill-group';

const LinkMotion = motion(Link);

export default function AboutMePage() {
  const [isHover, setIsHover] = useState(false);

  const whatsappNumber = '5551995368765';

  const whatsappMessage = encodeURIComponent(
    'Hello! I saw your portfolio and would like to talk about a project or collaboration.',
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-(--color-bg) text-(--color-text)">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -top-50 -left-50 h-150 w-150 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_30%,transparent)] blur-[180px]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute -right-50 -bottom-50 h-150 w-150 rounded-full bg-[color-mix(in_srgb,var(--color-secondary)_30%,transparent)] blur-[180px]"
        />
      </div>

      <div className="mx-auto max-w-7xl space-y-24 px-6 py-20">
        <motion.section
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="grid min-h-[80vh] items-center gap-16 md:grid-cols-2">
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
            className="relative aspect-square overflow-hidden rounded-2xl border border-(--color-border) bg-[linear-gradient(to_bottom_right,var(--color-secondary),var(--color-bg))] shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[32px_32px] opacity-20" />

            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_30%,transparent)] blur-3xl"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.img
                key={isHover ? 'real' : 'ai'}
                initial={isHover ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                src={isHover ? '/eu_real.jpeg' : '/eu_ia.webp'}
                className="h-64 w-64 rounded-full border border-(--color-border) object-cover shadow-2xl md:h-105 md:w-105"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="space-y-6">
            <Text
              variant="h1"
              className="bg-linear-to-r from-(--color-primary) to-(--color-secondary) bg-clip-text text-4xl leading-tight font-extrabold text-(--color-text) sm:text-5xl lg:text-6xl">
              Front-end Engineer
            </Text>

            <Text className="leading-relaxed text-(--color-text)/80">
              I build high-performance, accessible and scalable web
              applications, bridging complex backend systems with exceptional
              user experiences.
            </Text>

            <Text className="leading-relaxed text-(--color-text)/80">
              Focused on architecture, performance, and clean design systems —
              delivering products that scale and drive real business impact.
            </Text>

            <LinkMotion
              whileHover={{
                scale: 1.05,
                boxShadow:
                  '0 20px 60px color-mix(in srgb, var(--color-primary) 40%, transparent)',
              }}
              whileTap={{ scale: 0.96 }}
              to={whatsappLink}
              target="_blank"
              className="inline-flex items-center gap-3 rounded-xl bg-[linear-gradient(to_right,var(--color-primary),var(--color-secondary))] px-7 py-4 font-medium text-white transition-all duration-300">
              Contact me on WhatsApp
            </LinkMotion>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-10">
          <Text variant="h2" className="text-2xl font-semibold">
            Skills & Competencies
          </Text>

          <div className="space-y-8">
            <SkillGroup
              title="Core"
              items={[
                'React.js',
                'TypeScript',
                'Next.js',
                'JavaScript (ES6+)',
                'Vite',
              ]}
            />

            <SkillGroup
              title="Styling & UI"
              items={['Tailwind CSS', 'Styled Components', 'Framer Motion']}
            />

            <SkillGroup
              title="Tooling & Testing"
              items={['Git', 'Jest', 'Cypress', 'Docker']}
            />
          </div>
        </motion.section>
      </div>
    </main>
  );
}
