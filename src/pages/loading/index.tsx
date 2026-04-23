import { motion } from 'framer-motion';

export function LoadingPage() {
  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center overflow-hidden bg-(--color-background)">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px)] bg-size-[28px_28px] opacity-20" />

      <div className="absolute h-125 w-125 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_20%,transparent)] blur-[140px]" />

      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="h-14 w-14 rounded-full border-4 border-[color-mix(in_srgb,var(--color-primary)_30%,transparent)] border-t-(--color-primary)"
        />

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]">
          Carregando interface...
        </motion.p>
      </div>
    </div>
  );
}
