import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

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
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 24, opacity: 0 };
      case 'down': return { y: -24, opacity: 0 };
      case 'left': return { x: 24, opacity: 0 };
      case 'right': return { x: -24, opacity: 0 };
      case 'none': return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
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
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
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
  const getVariants = () => {
    let offset = {};
    if (direction === 'up') offset = { y: 20 };
    else if (direction === 'down') offset = { y: -20 };
    else if (direction === 'left') offset = { x: 20 };
    else if (direction === 'right') offset = { x: -20 };

    return {
      hidden: { opacity: 0, ...offset },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.21, 0.47, 0.32, 0.98] as const
        }
      }
    };
  };

  return (
    <motion.div variants={getVariants()} className={className} {...props}>
      {children}
    </motion.div>
  );
}
