"use client";

/**
 * ServiceCard Component
 *
 * This component renders a card that highlights a specific service with an icon, title, and description.
 * The card features a smooth entry animation as it comes into view, along with a hover effect that adjusts the background gradient.
 *
 * Props:
 * - `children`: The icon or any other visual element passed as a child to the card.
 * - `title`: The title of the service, displayed prominently in the card.
 * - `desc`: A brief description of the service, providing additional context to the user.
 *
 * Features:
 * - The card animates from a smaller, less opaque state to its full size and opacity when it scrolls into view.
 * - The background gradient changes slightly on hover, creating a dynamic visual effect.
 *
 * @param {Object} props - The props passed to the component.
 * @returns {JSX.Element} The rendered ServiceCard component.
 */

import { motion } from "framer-motion";
export default function ServiceCard({ children, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, type: "tween", delay: 0.3 }}
      className="service-card w-full rounded-[1.6rem] px-8 pt-8 pb-14 max-w-[21.5rem] bg-gradient-to-r from-[#FFFFFF30] to-[#D9EAF8] hover:from-[#D9EAF8] hover:to-[#FFFFFF30]"
    >
      <div>{children}</div>
      <h3 className="text-blue font-bold text-2xl mt-5 mb-3">{title}</h3>
      <p className="text-gray">{desc}</p>
    </motion.div>
  );
}
