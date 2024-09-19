"use client";
/**
 * AppSection component highlights the ASTHA Digital Banking app,
 * encouraging users to download the app via QR code or store links.
 *
 * It includes:
 * - A background image that fills the entire section.
 * - A text section with a title, description, and QR code for easy app download.
 * - Store buttons for Play Store and App Store.
 * - An image of a mobile device representing the app's interface.
 *
 * @returns {JSX.Element} The rendered AppSection component.
 */

import Image from "next/image";
import qrcode from "@/Assets/images/qr.png";
import img2 from "@/Assets/images/mobile2.png";
import appBg from "@/Assets/images/appBg.jpeg";
import { motion } from "framer-motion";

export default function AppSection() {
  return (
    <div className="relative">
      {/* Background image that covers the entire section */}
      <div className="w-full absolute z-[-1] h-full overflow-hidden">
        <Image
          src={appBg}
          sizes="full"
          className="w-full object-cover -rotate-90"
          alt="Background"
        />
      </div>

      <div className="container mx-auto my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 py-5 md:py-14">
          {/* Text and QR code section */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "just" }}
            className="text-white"
          >
            <h2 className="font-bold text-xl md:text-4xl">
              MANDIRI: Digital Banking
            </h2>
            <p className="text-base md:text-2xl">Download Now</p>

            {/* QR code and description */}
            <div className="my-4 md:my-9 flex items-center max-w-[42.4rem] gap-6">
              <Image src={qrcode} sizes="full" alt="QR Code" />
              <p>
                Enjoy low fees and competitive interest rates on our range of
                financial products. Save more and earn more with our suite of
                products designed for your financial success.
              </p>
            </div>

            {/* Store buttons for downloading the app */}
            <div className="flex gap-2">
              <button>
                <Image
                  src={"/playstore.webp"}
                  height={0}
                  width={0}
                  style={{ height: "52px", width: "auto" }}
                  alt="Play Store"
                  unoptimized
                />
              </button>
              <button>
                <Image
                  src={"/appstore.png"}
                  height={0}
                  width={0}
                  style={{ height: "52px", width: "auto" }}
                  alt="App Store"
                  unoptimized
                />
              </button>
            </div>
          </motion.div>

          {/* Mobile device image section */}
          <div className="relative justify-center hidden md:flex">
            <motion.div
              initial={{ scale: 0, y: -150 }}
              whileInView={{ scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 50,
                delay: 0.3,
              }}
            >
              <Image src={img2} height={400} sizes="full" alt="Mobile App" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
