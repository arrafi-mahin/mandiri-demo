"use client"; // Indicates that this component is intended for client-side rendering

/**
 * BankingCard component renders a stylized card that displays an image.
 * The card is designed with rounded corners and subtle padding,
 * and includes animation effects for a smooth user experience.
 *
 * Props:
 * - image (string): The source URL of the image to be displayed in the card.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.image - The URL of the image to display.
 *
 * @returns {JSX.Element} The rendered BankingCard component.
 */

import Image from "next/image";
import { motion } from "framer-motion";
export default function BankingCard({ image }) {
  return (
    <motion.div className="relative rounded-[35px] p-[10px] overflow-hidden bg-white mx-2">
      <motion.div className="bg-[#00000033] rounded-[25px] p-[2px] overflow-hidden relative">
        <Image
          width={0}
          height={0}
          src={image}
          alt="Banking Image" // Alt text for accessibility
          className="w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
}
