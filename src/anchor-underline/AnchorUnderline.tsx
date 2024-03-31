import React, { useRef, useLayoutEffect } from 'react';

import styles from './styles.module.css';

export type AnchorUnderlineProps = React.ComponentPropsWithoutRef<'a'> & {
  /**
   * The speed of the underline animation.
   *
   * @defaultValue 0.5
   */
  speed?: number;
};

export const AnchorUnderline = (props: AnchorUnderlineProps) => {
  const { speed = 0.5, href, children, className, ...rest } = props;

  const timeout = useRef<ReturnType<typeof setTimeout>>(null);
  const duration = useRef(0.8);
  const transition = useRef('idle');
  const underline = useRef(false);
  const elRef = useRef<HTMLAnchorElement>(null);

  const animateIn = () => {
    getComputedStyle();
    transition.current = 'in';
    elRef.current.dataset.state = 'in';

    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      transition.current = 'idle';

      if (underline.current !== true) {
        animateOut();
      }
    }, duration.current * 600);
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
    }, duration.current * 1000);
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

  const getComputedStyle = () => {
    const elContent = elRef.current?.textContent;
    const elLength = elContent?.length;
    const animTime = Math.min(Math.max(0.4, elLength / (speed * 100)), 1.4);
    duration.current = animTime * speed;
    elRef.current.style.setProperty('--underline-time', `${animTime}`);
    if (speed) elRef.current.style.setProperty('--underline-speed', `${speed}`);
  };

  useLayoutEffect(() => {
    return () => {
      clearTimeout(timeout.current);
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
    >
      {children}
    </a>
  );
};
