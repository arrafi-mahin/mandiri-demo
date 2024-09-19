"use client";

/**
 * Heading component displays a title and description with animations.
 * The title and description animate into view with a spring-based motion effect.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The main heading text to be displayed.
 * @param {string} props.desc - The descriptive text to be displayed below the heading.
 * @returns {JSX.Element} The rendered Heading component.
 */
import { motion } from "framer-motion";
export default function Heading({ title, desc }) {
  return (
    <div className="space-y-2 py-7 overflow-x-hidden">
      {/* Animated heading element */}
      <motion.h2
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        className="text-blue text-2xl md:text-5xl font-bold text-center"
      >
        {title}
      </motion.h2>
      {/* Animated paragraph element */}
      <motion.p
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        className="text-center text-gray text-lg md:text-2xl"
      >
        {desc}
      </motion.p>
    </div>
  );
}
