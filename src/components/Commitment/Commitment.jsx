"use client";
/**
 * Commitment Component
 *
 * This component highlights the bank's commitment to security by displaying key features in a visually appealing manner.
 * It uses motion effects to animate the content as it comes into view, enhancing the user experience.
 *
 * Features:
 * - The component is divided into two main sections: a heading and a grid of security features.
 * - Each security feature is represented by an icon and a brief description.
 * - The text and icons are animated with the `framer-motion` library, providing smooth transitions as they appear.
 *
 * Layout:
 * - On larger screens, the component is displayed as two columns: the heading on the left and the security features on the right.
 * - On smaller screens, the layout adjusts to a single-column format to maintain readability.
 *
 * @returns {JSX.Element} The rendered Commitment component.
 */
import FingerPrint from "@/Assets/icons/fingerprint.svg";
import Security from "@/Assets/icons/security.svg";
import Star from "@/Assets/icons/star.svg";
import { motion } from "framer-motion";

export default function Commitment() {
  return (
    <div className="commitment py-9">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 text-white">
        {/* Heading Section */}
        <h2 className="text-xl md:text-3xl font-bold footer-upper-text">
          We Take Your Banking
          <br />
          Security Seriously!
        </h2>

        {/* Security Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 footer-upper-section">
          {/* 2 Factor Authentication Feature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="flex flex-col gap-2 max-w-36 md:items-start items-center"
          >
            <FingerPrint />
            <p className="md:text-start text-center">
              2 Factor i-safe authentication
            </p>
          </motion.div>

          {/* Encryption Feature */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="flex flex-col gap-2 max-w-36 md:items-start items-center"
          >
            <Security />
            <p className="md:text-start text-center">
              End-to-end 256 bit Encryption
            </p>
          </motion.div>

          {/* Customer Care Feature */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="flex flex-col gap-2 max-w-36 md:items-start items-center"
          >
            <Star />
            <p className="md:text-start text-center">
              We make you feel special
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
