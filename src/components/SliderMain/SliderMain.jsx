"use client";

/**
 * SliderMain component renders a carousel slider with multiple Banner components.
 * Each Banner component displays an image with overlayed text and a button.
 * The slider configuration includes navigation dots, infinite scrolling, and lazy loading of images.
 *
 * @returns {JSX.Element} The rendered SliderMain component.
 */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../Banner/Banner";
import Button from "@/components/Shared/Button";
import { motion } from "framer-motion";

export default function SliderMain() {
  // Configuration settings for the Slider component
  var settings = {
    dots: true,
    infinite: true,
    // fade:true,
    dotsClass: "slick-dots slick-thumb",
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };
  return (
    <div className="">
      <Slider {...settings}>
        <Banner image={"/banner1.jpg"}>
          <motion.h3
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, type: "just" }}
            className="font-bold text-2xl md:text-5xl md:leading-[3.5rem] max-w-[50rem] mx-5"
          >
            Grow your savings and achieve your financial goals with
            <br />
            MANDIRI
          </motion.h3>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, type: "just" }}
            className="max-w-[29rem] text-base md:leading-7 mx-5"
          >
            Saving money has never been easier. Join Mandiri and start building
            your nest egg today
          </motion.p>
          <Button style="primary" className="min-w-36 mx-5">
            Learn More
          </Button>
        </Banner>
        <Banner image={"/banner2.jpg"}>
          <motion.h3
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, type: "just" }}
            className="font-bold text-2xl md:text-5xl md:leading-[3.5rem] max-w-[50rem] mx-5"
          >
            Grow your savings and achieve your financial goals with
            <br />
            MANDIRI
          </motion.h3>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, type: "just" }}
            className="max-w-[29rem] text-base md:leading-7 mx-5"
          >
            Saving money has never been easier. Join Mandiri and start building
            your nest egg today
          </motion.p>
          <Button style="primary" className="min-w-36 mx-5">
            Learn More
          </Button>
        </Banner>
        <Banner image={"/banner3.jpg"}>
          <motion.h3
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, type: "just" }}
            className="font-bold text-2xl md:text-5xl md:leading-[3.5rem] max-w-[50rem] mx-5"
          >
            Grow your savings and achieve your financial goals with
            <br />
            MANDIRI
          </motion.h3>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, type: "just" }}
            className="max-w-[29rem] text-base md:leading-7 mx-5"
          >
            Saving money has never been easier. Join Mandiri and start building
            your nest egg today
          </motion.p>
          <Button style="primary" className="min-w-36 mx-5">
            Learn More
          </Button>
        </Banner>
      </Slider>
    </div>
  );
}
