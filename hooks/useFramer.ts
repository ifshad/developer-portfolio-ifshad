import { useScroll, useTransform } from "framer-motion";

export const useFramer = (scrollRef: any) => {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 1", "1.33 1"],
  });
  const scaleTransform = useTransform(scrollYProgress, [0, 0.8], [0.7, 1]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.8], [0.6, 1]);

  return { scaleTransform, opacityTransform };
};
