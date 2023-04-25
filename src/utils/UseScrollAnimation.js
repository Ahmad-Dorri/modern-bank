import { useEffect, useRef, useState } from 'react';

export default function useScrollAnimation() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [threshold, setThreshold] = useState(0);
  useEffect(() => {
    const screenHeight = window.innerHeight;
    const newThreshold = screenHeight > 600 ? 0.5 : 0.3;
    setThreshold(newThreshold);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return [ref, isVisible];
}
