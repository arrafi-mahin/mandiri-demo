"use client"; 
/**
 * Navbar Component
 *
 * This component represents a responsive navigation bar for a website.
 * It includes links to various sections like Home, Products, and their respective sub-menus.
 * The navbar changes its background color based on the user's scroll position.
 * The menu items and sub-menus are animated using Framer Motion.
 *
 * Key Features:
 * - Dynamic logo switching based on scroll position.
 * - Dropdown menu for the "Products" section with icons and descriptions.
 * - Smooth animations for menu item hover effects.
 * - Responsive design compatible with different screen sizes.
 *
 * Dependencies:
 * - React, Next.js, Framer Motion, and various icon libraries.
 */
import { useEffect,  useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
// icons
import Logo from "@/Assets/images/Logo.png";
import WhiteLogo from "@/Assets/images/LogoWhite.png";
import SearchLogo from "@/Assets/icons/Search.svg";
import SearchLogo2 from "@/Assets/icons/Search2.svg";
import { RiMenu4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import HomeLogo from "@/Assets/icons/home.svg";
import DOMPurify from "dompurify";

export default function Navbar() {
  // State variables
  const [language, setLanguage] = useState(false); // Tracks the selected language
  const [navBg, setNavBg] = useState(false); // Tracks if the navbar background should change on scroll
  const [isActive, setIsActive] = useState(false); //Sidebar Toggle
  const pathname = usePathname(); // Get the current path name
  

  // Search Sanitization

  const handleSearch = (e)=>{
    const pureValue = DOMPurify.sanitize(e.target.value);
    console.log(pureValue);
  }
  // Set navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY >= 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Nav */}
      <motion.nav
        initial={{ y: -120, opacity: 0.7 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          stiffness: 100,
          type: "spring",
        }}
        className={`container mx-auto flex lg:hidden items-center justify-between mt-2 py-[0.8rem] px-5 rounded-2xl shadow-md ${
          navBg ? "bg-white" : "backdrop-blur"
        }  bg-[#BDBDBD33] border border-[#FFFFFF33]`}
      >
        <Link href={"/"}>
          <Image
            src={navBg ? Logo : WhiteLogo}
            height={0}
            width={0}
            style={{ height: "32px", width: "auto" }}
            alt="Mandiri Bank"
          />
        </Link>
        <button onClick={() => setIsActive(true)}>
          <RiMenu4Fill className={!navBg ? "text-white" : "text-black"} />
        </button>
      </motion.nav>

      {/* Desktop Nav */}
      <motion.nav
        initial={{ y: -120, opacity: 0.7 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          stiffness: 100,
          type: "spring",
        }}
        className={`container mx-auto hidden lg:flex items-center justify-between mt-6 py-[0.8rem] px-5 rounded-2xl shadow-md ${
          navBg ? "bg-white" : "backdrop-blur"
        }  bg-[#BDBDBD33] border border-[#FFFFFF33]`}
      >
        <Link href={"/"}>
          <Image
            src={navBg ? Logo : WhiteLogo}
            height={40}
            width={156}
            alt="Mandiri Bank"
          />
        </Link>
        <ul className={`flex ${navBg ? "text-black" : "text-white"}`}>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className={pathname == "/" ? "text-yellow" : ""}
          >
            <Link className="px-3 py-4 text-nowrap" href={"/"}>
              Home
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className="">
            <Link
              className={`px-3 py-4 text-nowrap ${
                pathname === "/products" ? "text-yellow" : ""
              }`}
              href={"/"}
            >
              Product
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className="">
            <Link className="px-3 py-4 text-nowrap " href={"/"}>
              About Us
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className="">
            <Link className="px-3 py-4 text-nowrap" href={"/"}>
              Career
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className="">
            <Link
              className={`px-3 py-4 text-nowrap ${
                pathname === "/branch-locator" ? "text-yellow" : ""
              }`}
              href={"/branch-locator"}
            >
              Locate Us
            </Link>
          </motion.li>
        </ul>

        <div className="flex items-center gap-5">
          <div
            className={`border-b ${
              navBg ? "border-[#4E4B66]" : "border-white"
            } pb-1 flex gap-2 items-center"`}
          >
            {!navBg ? (
              <SearchLogo className="h-fit mt-1" />
            ) : (
              <SearchLogo2 className="h-fit mt-1" />
            )}{" "}
            <input
              className={`bg-transparent ${
                navBg
                  ? "text-[#4E4B66] placeholder-[#4E4B66]"
                  : "text-white placeholder-white"
              } outline-none w-full`}
              type="search"
              onChange={handleSearch}
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>
          <div className="flex gap-4">
            <motion.button
              type="button"
              className={`p-4 h-fit ${
                navBg ? "bg-white" : ""
              } bg-white rounded-md shadow`}
              whileHover={{ scale: 0.9 }}
            >
              <HomeLogo />
            </motion.button>
            <div
              className={`${
                navBg ? "bg-[#EFEFEF]" : "bg-white"
              } bg-white p-1 rounded-lg w-fit shrink-0`}
            >
              <motion.button
                animate={{ opacity: 1 }}
                className={`${
                  !language
                    ? " group border border-[#BDBDBD33] bg-gradient-to-r from-blue to-[#5db8f5] text-white "
                    : ""
                } px-3 py-2 relative rounded-md text-bold`}
                onClick={() => setLanguage(false)}
              >
                <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-all duration-700 ease-in-out bg-gradient-to-l from-blue to-[#5db8f5] group-hover:opacity-100 rounded-md"></div>
                <div className="relative z-[5]">En</div>
              </motion.button>
              <motion.button
                animate={{ opacity: 1 }}
                className={`${
                  language
                    ? " group border border-[#BDBDBD33] bg-gradient-to-r from-blue to-[#5db8f5] text-white "
                    : ""
                } px-3 py-2 relative rounded-md text-bold`}
                onClick={() => setLanguage(true)}
              >
                <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-all duration-700 ease-in-out bg-gradient-to-l from-blue to-[#5db8f5] group-hover:opacity-100 rounded-md"></div>
                <div className="relative z-[5]">বাং</div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar */}
      <div className="">
        <div
          onClick={() => setIsActive(false)}
          className={`${
            isActive ? "left-0" : "-left-screen"
          } top-0 right-0 bottom-0 fixed z-10 bg-[#000000b4] shadow-lg `}
        ></div>
        <ul
          className={`fixed bg-white font-medium flex flex-col gap-4 z-20 py-6 px-10 bottom-0  top-0 min-w-[50vw] max-w-[80vw] duration-500 ease-in-out ${
            isActive ? "left-0" : "left-[-100vw]"
          }`}
        >
          <div className="flex items-end justify-between border-b border-black/10 pb-2">
            <Link href={"/"}>
              <Image
                src={Logo}
                height={0}
                width={0}
                style={{ height: "32px", width: "auto" }}
                alt="Mandiri Bank"
              />
            </Link>
            <RxCross2
              onClick={() => setIsActive(false)}
              className="fill-black h-6 w-6 "
            />
          </div>
          <li className="font-light  px-2 border-b border-black/10 w-full">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="font-light  px-2 border-b border-black/10 w-full">
            <Link className="" href={"/"}>
              Product
            </Link>
          </li>
          <li className="font-light  px-2 border-b border-black/10 w-full">
            <Link className="" href={"/"}>
              About Us
            </Link>
          </li>
          <li className="font-light  px-2 border-b border-black/10 w-full">
            <Link className="" href={"/"}>
              Career
            </Link>
          </li>
          <li className="font-light  px-2 border-b border-black/10 w-full">
            <Link className="" href={"/"}>
              Locate Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
