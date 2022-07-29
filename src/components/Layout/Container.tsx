/* eslint-disable no-restricted-syntax */
import React, {
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  MutableRefObject
} from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useScroll, useTransform, useSpring, motion } from 'framer-motion';
import { Navigation } from '@/src/components/Navigation';

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  const scrollRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [pageHeight, setPageHeight] = useState(0);
  const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  if (typeof window !== 'undefined') {
    useLayoutEffect(() => {
      const resizeObserver = new ResizeObserver(entries =>
        resizePageHeight(entries)
      );
      resizeObserver.observe(scrollRef.current);
      return () => resizeObserver.disconnect();
    }, [scrollRef, resizePageHeight]);
  }

  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.1, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <Navigation scroll={scrollY} />
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className="fixed top-0 left-0 w-full overflow-hidden will-change-transform font-primary"
      >
        {children}
      </motion.div>
      <div style={{ height: pageHeight }} />
    </>
  );
};
