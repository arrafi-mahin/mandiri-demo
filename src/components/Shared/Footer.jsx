/**
 * Footer Component
 *
 * This component renders the footer of the website, which includes:
 * - A logo for Mandiri Bank.
 * - Several sections with navigational links categorized under titles.
 * - Social media icons that link to respective platforms.
 * - A copyright notice at the bottom.
 *
 * The component is designed to be responsive and visually appealing, with hover effects
 * and appropriate spacing to ensure readability and accessibility.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */

import Image from "next/image";
import Link from "next/link";

// Icons
import FacebookLogo from "@/Assets/icons/facebook";
import InstaLogo from "@/Assets/icons/instaIcon";
import LinkedinLogo from "@/Assets/icons/linkedin";
import Twitter from "@/Assets/icons/twitter";
import YtLogo from "@/Assets/icons/youtube";
import FooterLogo from "@/Assets/images/LogoWhite.png";
const Footer = () => {
  // Array of link sections with titles and associated link text
  const titleLinks = [
    {
      title: "About MANDIRI BANK",
      linkText: [
        "About US",
        "Media Center",
        "Career Opportunities",
        "Awards & Recognition",
      ],
    },
    {
      title: "Quick Links",
      linkText: ["Contact Us", "Interest Rates", "Credit Rating"],
    },
    {
      title: "Other",
      linkText: ["SWIFT: BRAKBDDH", "CSR", "NIS"],
    },
    {
      title: "FAQ",
      linkText: ["Opening Account", "Loan", "Card Application"],
    },
  ];

  return (
    <div>
      <div className="w-full bg-[#0e0e25]">
        <div className="container grid xl:grid-cols-6 lg:grid-cols-5 gap-5 text-white py-16 px-5 md:px-16">
          {/* Logo Section */}
          <div className="grid">
            <Image
              src={FooterLogo}
              height={40}
              width={156}
              alt="Mandiri Bank"
            />
          </div>

          {/* Loop through titleLinks array to render link sections */}
          {titleLinks.map((data, index) => (
            <div key={index} className="grid h-fit">
              <p className="font-bold mb-4">{data.title}</p>
              <div className="space-y-3 text-[#DBDBDB] text-sm">
                {data.linkText.map((item, index) => (
                  <p key={index} className="hover:text-white cursor-pointer">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Social Media Links */}
          <div className="grid h-fit">
            <p className="font-bold mb-4">Follow Us on</p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="fill-[#016EB8] hover:fill-black cursor-pointer"
              >
                <YtLogo className="social-icon" />
              </Link>
              <Link
                href="#"
                className="fill-[#016EB8] hover:fill-black cursor-pointer"
              >
                <FacebookLogo />
              </Link>
              <Link
                href="#"
                className="fill-[#016EB8] hover:fill-black cursor-pointer"
              >
                <Twitter />
              </Link>
              <Link
                href="#"
                className="fill-[#016EB8] hover:fill-black cursor-pointer"
              >
                <LinkedinLogo />
              </Link>
              <Link
                href="#"
                className="fill-[#016EB8] hover:fill-black cursor-pointer"
              >
                <InstaLogo />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-[#DBDBDB] text-center py-4 border-t border-t-[#ffffff1a] lg:w-3/4 mx-auto">
          Copyright 2024. All Rights Reserved Mandiri Bank Ltd.
        </div>
      </div>
    </div>
  );
};

export default Footer;
