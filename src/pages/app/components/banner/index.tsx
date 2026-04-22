import { CustomLink, Text } from '@/components';
import { motion } from 'framer-motion';
import { CardTech } from './card';

export function Banner() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}>
        <Text
          variant="span"
          className="mb-4 inline-block rounded-full border border-[color-mix(in_srgb,var(--color-primary)_30%,transparent)] bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] px-4 py-1 text-xs tracking-widest text-(--color-primary) uppercase">
          Always prepared for new challenges
        </Text>

        <Text
          variant="h1"
          className="bg-linear-to-r from-(--color-primary) to-(--color-secondary) bg-clip-text text-4xl leading-tight font-extrabold text-(--color-text) sm:text-5xl lg:text-6xl">
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
