import React, { useRef, useLayoutEffect } from 'react';

import styles from './styles.module.css';

export type AnchorUnderlineProps = React.ComponentPropsWithoutRef<'a'> & {
  /**
   * The speed of the underline animation.
   *
   * @defaultValue 0.5
   */
  speed?: false | null | undefined | number;
};

export const AnchorUnderline = (props: AnchorUnderlineProps) => {
  const { speed = 0.5, href, className, ...rest } = props;

  const invalidated = useRef(true);
  const raf = useRef<ReturnType<typeof requestAnimationFrame>>();
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const duration = useRef(0.8);
  const transition = useRef('idle');
  const underline = useRef(false);
  const elRef = useRef<HTMLAnchorElement>(null!);

  const animateIn = () => {
    getComputedParams();

    cancelAnimationFrame(raf.current!);
    raf.current = requestAnimationFrame(() => {
      transition.current = 'in';
      elRef.current.dataset.state = 'in';

      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        transition.current = 'idle';
        if (underline.current !== true) {
          animateOut();
        }
      }, duration.current * 1000 * 0.65);
    });
  };

  const animateOut = () => {
    elRef.current.dataset.state = 'out';
    transition.current = 'out';

    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      transition.current = 'idle';
      if (underline.current === true) {
        animateIn();
      }
    }, duration.current * 1000 * 0.9);
  };

  const handleMouseEnter = () => {
    underline.current = true;
    if (transition.current !== 'idle') return;
    animateIn();
  };

  const handleMouseLeave = () => {
    underline.current = false;
    if (transition.current !== 'idle') return;
    animateOut();
  };

  const getComputedParams = () => {
    if (invalidated.current === false) return;

    if (speed === false || speed === null || typeof speed === 'undefined') {
      const elStyle = window.getComputedStyle(elRef.current);
      const appliedDuration = parseFloat(elStyle.getPropertyValue('--underline-duration'));
      duration.current = appliedDuration;
    } else {
      const elContent = elRef.current.textContent;
      const elLength = elContent?.length ?? 1;
      const animTime = Math.min(Math.max(0.4, elLength / (speed * 100)), 1.4);
      const appliedDuration = animTime * speed;
      elRef.current.style.setProperty('--underline-duration', `${appliedDuration}s`);
      duration.current = appliedDuration;
    }
  };

  useLayoutEffect(() => {
    return () => {
      clearTimeout(timeout.current);
      cancelAnimationFrame(raf.current!);
    };
  }, []);

  return (
    <a
      ref={elRef}
      className={`${styles.anchor_text} ${className}`}
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleMouseLeave}
      href={href}
      {...rest}
    />
  );
};
