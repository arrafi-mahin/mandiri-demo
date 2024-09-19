"use client";

/**
 * BankingDetails component showcases personal banking services with a banner and a set of service cards.
 *
 * It includes:
 * - A heading section with a title and description.
 * - A banner section with an animated image and overlay text.
 * - A set of service cards representing different banking products and services.
 *
 * @returns {JSX.Element} The rendered BankingDetails component.
 */
import Heading from "../Heading/Heading";
import Image from "next/image";
import bannerImg from "@/Assets/images/personalBanner.jpg";
import { motion } from "framer-motion";
import ServiceCard from "../Cards/ServiceCard";

// Importing icon assets for service cards
import Loans from "@/Assets/icons/loan.svg";
import Cards from "@/Assets/icons/cards.svg";
import Probashi from "@/Assets/icons/probashi.svg";
import Deposit from "@/Assets/icons/deposit.svg";
import Premium from "@/Assets/icons/premium.svg";
import Employee from "@/Assets/icons/employee.svg";
import Student from "@/Assets/icons/student.svg";

export default function BankingDetails() {
  return (
    <div className="container mx-auto">
      {/* Heading section with title and description */}
      <Heading
        title={"Personal Banking"}
        desc={"Convenient online banking, personalized for you."}
      />

      {/* Banner section with an animated background and overlay text */}
      <motion.div
        initial={{ width: "0%", opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ duration: 0.7, type: "tween", stiffness: 100 }}
        className="relative max-h-[27.25rem] rounded-[2.5rem] overflow-hidden"
      >
        {/* Gradient overlay for the banner */}
        <div className="bg-gradient-to-r from-[#006db6a9] via-[#00000000] to-[#006db6a9] absolute top-0 bottom-0 left-0 right-0"></div>

        {/* Overlay text on the banner */}
        <div className="absolute h-full flex items-center max-w-[48.25rem] p-10 md:p-28">
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 100,
              delay: 0.8,
            }}
            className="text-white font-bold md:text-[2.5rem] md:leading-[3.2rem] drop-shadow-md"
          >
            Grow your savings and achieve your financial goals with <br />
            MANDIRI BANK
          </motion.h2>
        </div>
        {/* Banner image */}
        <Image
          height={"27,25rem"}
          src={bannerImg}
          sizes="fill"
          alt="personal banking"
        />
      </motion.div>

      {/* Service cards section */}
      <div className="py-5 flex gap-6 flex-wrap justify-center">
        {/* Each ServiceCard component represents a different banking service */}
        <ServiceCard
          title={"Loan Products"}
          desc={
            "Displaying the highest level of Integrity in the way we conduct our business"
          }
        >
          <Loans />
        </ServiceCard>
        <ServiceCard
          title={"Cards"}
          desc={
            "Displaying the highest level of Integrity in the way we conduct our business"
          }
        >
          <Cards />
        </ServiceCard>
        <ServiceCard
          title={"Global Banking"}
          desc={
            "Displaying the highest level of Integrity in the way we conduct our business"
          }
        >
          <Probashi />
        </ServiceCard>
        <ServiceCard
          title={"Deposit Products"}
          desc={
            "Displaying the highest level of Integrity in the way we conduct our business"
          }
        >
          <Deposit />
        </ServiceCard>
        <ServiceCard
          title={"Premium Banking"}
          desc={
            "Displaying the highest level of Integrity in the way we conduct our business"
          }
        >
          <Premium />
        </ServiceCard>
        <ServiceCard
          title={"Employee Banking"}
          desc={
            "Displaying the highest level of Integrity in the way we conduct our business"
          }
        >
          <Employee />
        </ServiceCard>
        <ServiceCard
          title={"Student Banking"}
          desc={
            "Displaying the highest level of Integrity in the way we conduct our business"
          }
        >
          <Student />
        </ServiceCard>
      </div>
    </div>
  );
}
