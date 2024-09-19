/**
 * Banner Component
 *
 * This component renders a banner with an optional background image and children elements.
 * The background image is displayed using the Next.js Image component with full-width,
 * responsive styling. The children elements are overlaid on the image and centered
 * vertically within the banner.
 *
 * Props:
 * - image (string): URL of the background image. If not provided, only the children will be displayed.
 * - children (ReactNode): The content to be displayed on top of the banner.
 *
 * Usage:
 * <Banner image="/path/to/image.jpg">
 *   <h1>Your Title Here</h1>
 *   <p>Your subtitle or description here.</p>
 * </Banner>
 */

"use client"; // Indicates that this code is client-side specific

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner({ image = null, children }) {
  return (
    <div className="relative w-full">
      {image && (
        <motion.div className="w-full overflow-hidden h-[30rem] lg:h-[40rem] bg-black">
          {/* Renders the image if the image prop is provided */}
          <Image
            src={image}
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            priority
            alt="image"
            className="object-cover opacity-80"
            unoptimized
          />
        </motion.div>
      )}
      <div className="h-full w-full flex absolute top-0 bottom-0 items-center pt-16">
        {/* Container for the children elements, centered within the banner */}
        <div className="container mx-auto text-white">
          <div className="space-y-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
