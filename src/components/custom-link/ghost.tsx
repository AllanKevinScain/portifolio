import { motion, type HTMLMotionProps } from 'framer-motion';
import { Link } from 'react-router';
import { twMerge } from 'tailwind-merge';

const LinkMotion = motion(Link);

export function GhostLink(props: HTMLMotionProps<'a'>) {
  const { children, className, ...rest } = props;
  return (
    <LinkMotion
      {...rest}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className={twMerge('transition disabled:opacity-40', className)}>
      {children}
    </LinkMotion>
  );
}
