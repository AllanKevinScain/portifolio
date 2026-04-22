import { motion, type HTMLMotionProps } from 'framer-motion';
import { Link } from 'react-router';
import { twMerge } from 'tailwind-merge';

const LinkMotion = motion(Link);

export function SolidLink(props: HTMLMotionProps<'a'>) {
  const { children, className, ...rest } = props;
  return (
    <LinkMotion
      {...rest}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className={twMerge(
        'inline-flex items-center gap-2',
        'font-medium text-white',
        'rounded-lg px-6 py-3',
        'transition-all',
        'shadow-lg',
        'bg-linear-to-r from-(--color-primary) to-(--color-secondary)',
        'shadow-[0_10px_30px_color-mix(in_srgb,var(--color-primary)_40%,transparent)]',
        className,
      )}>
      {children}
    </LinkMotion>
  );
}
