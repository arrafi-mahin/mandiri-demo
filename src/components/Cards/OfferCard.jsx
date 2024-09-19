"use client";
/**
 * OfferCard Component
 *
 * This component renders a card that showcases a specific offer or product image.
 * The card includes hover animations and conditional styling based on the `id` prop.
 *
 * Props:
 * - `id`: A boolean or identifier used to determine the position and style of a radial background.
 *         If `id` is true, the background gradient appears on the left side of the card;
 *         if false, it appears on the right side.
 * - `image`: The source of the image to be displayed inside the card. This is passed as a prop and
 *            rendered using the Next.js `Image` component.
 *
 * Features:
 * - The card scales up slightly on hover to enhance interactivity.
 * - The background includes a conditional radial gradient based on the `id` prop.
 * - The `Image` component is wrapped in a motion div to allow for additional animations or styles.
 *
 * @param {Object} props - The props passed to the component.
 * @returns {JSX.Element} The rendered OfferCard component.
 */

import Image from "next/image";
import { motion } from "framer-motion";

export default function OfferCard({ id, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-[35px] p-[10px] offer-card min-h-20 min-w-20 overflow-hidden bg-white mx-2"
    >
      {!id && (
        <div className="absolute right-0 top-0 h-64 w-1/2 z-[1] overflow-hidden radial-yellow"></div>
      )}
      {id && (
        <div className="absolute left-0 top-0 h-64 w-1/2 z-[1] overflow-hidden radial-blue"></div>
      )}
      <motion.div className="bg-[#00000033] rounded-[25px] p-[2px] overflow-hidden relative z-[2]">
        <Image
          src={image}
          height={560}
          sizes="fill"
          className="rounded-[25px]"
          alt=""
        />
      </motion.div>
    </motion.div>
  );
}
