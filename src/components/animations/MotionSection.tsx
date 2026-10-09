import React, { useMemo } from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

const FADE_INITIAL = {
  up: { y: 24, opacity: 0 },
  down: { y: -24, opacity: 0 },
  left: { x: 24, opacity: 0 },
  right: { x: -24, opacity: 0 },
  none: { opacity: 0 },
} as const;

const STAGGER_TRANSITION = {
  duration: 0.5,
  ease: [0.21, 0.47, 0.32, 0.98] as const,
};

const STAGGER_ITEM_VARIANTS = {
  up: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, x: 0, y: 0, transition: STAGGER_TRANSITION },
  },
  down: {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, x: 0, y: 0, transition: STAGGER_TRANSITION },
  },
  left: {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, y: 0, transition: STAGGER_TRANSITION },
  },
  right: {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, y: 0, transition: STAGGER_TRANSITION },
  },
  none: {
    hidden: { opacity: 0 },
    show: { opacity: 1, x: 0, y: 0, transition: STAGGER_TRANSITION },
  },
} as const;

interface FadeInProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
  once = true,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={FADE_INITIAL[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
} & HTMLMotionProps<'div'>) {
  const variants = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerDelay,
        },
      },
    }),
    [staggerDelay]
  );

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  direction = 'up',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
} & HTMLMotionProps<'div'>) {
  return (
    <motion.div variants={STAGGER_ITEM_VARIANTS[direction]} className={className} {...props}>
      {children}
    </motion.div>
  );
}
