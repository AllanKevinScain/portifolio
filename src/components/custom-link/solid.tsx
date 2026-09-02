import { motion, type HTMLMotionProps } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const LinkMotion = motion.a;

export function SolidLink(props: HTMLMotionProps<'a'>) {
  const { children, className, ...rest } = props;
  return (
    <LinkMotion
      {...rest}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className={twMerge(
        'sf-button',
        className,
      )}>
      {children}
    </LinkMotion>
  );
}
