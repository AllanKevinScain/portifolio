import { motion, type HTMLMotionProps } from 'framer-motion';
import { Link } from 'react-router';
import { twMerge } from 'tailwind-merge';

const LinkMotion = motion(Link);

export function OutlineLink(props: HTMLMotionProps<'a'>) {
  const { children, className, ...rest } = props;
  return (
    <LinkMotion
      {...rest}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className={twMerge(
        'inline-flex items-center gap-2',
        'font-medium',
        'rounded-lg px-6 py-3',
        'border transition-all',
        'text-(--color-text)',
        'border-(--color-border)',
        className,
      )}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          'color-mix(in srgb, var(--color-primary) 15%, transparent)';
        e.currentTarget.style.borderColor = 'var(--color-primary)';
        e.currentTarget.style.color = 'var(--color-primary)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.color = 'var(--color-text)';
      }}>
      {children}
    </LinkMotion>
  );
}
