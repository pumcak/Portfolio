import { motion as Motion } from "framer-motion";

export default function Reveal({ children, delay = 0 }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </Motion.div>
  );
}
