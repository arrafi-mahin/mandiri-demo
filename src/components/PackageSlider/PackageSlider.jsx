"use client";
/**
 * PackageSlider Component
 *
 * This component renders a responsive slider that displays various banking package cards.
 * Each card represents a different type of banking service, such as Premium Banking, SME Banking, etc.
 *
 * The slider is built using the `react-slick` library and is configured to be responsive,
 * adjusting the number of visible slides based on the screen size. The component also includes
 * custom next and previous arrow components for navigation.
 *
 * The entire slider is animated using the `framer-motion` library, providing smooth transitions
 * when the component appears in view.
 *
 * @returns {JSX.Element} The rendered PackageSlider component.
 */

import PackageCard from "../Cards/PackageCard";
import SmeBanking from "@/Assets/icons/smeBanking.svg";
import PremiumBanking from "@/Assets/icons/premiumBanking.svg";
import PersonalBanking from "@/Assets/icons/personalBanking.svg";
import DigitalBanking from "@/Assets/icons/digitalBanking.svg";
import AgentBanking from "@/Assets/icons/agentBanking.svg";
import Next from "@/Assets/icons/next.svg";
import Previous from "@/Assets/icons/previous.svg";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "./PackageSlider.css";

export default function PackageSlider() {
  /**
   * Custom Next Arrow Component
   *
   * This component renders the custom next arrow for the slider.
   * The arrow is positioned to the right of the slider and is styled to match the design.
   *
   * @param {Object} props - The props passed to the custom arrow component.
   * @returns {JSX.Element} The rendered custom next arrow component.
   */
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          zIndex: 10,
          right: "-10rem",
        }}
        onClick={onClick}
      >
        <Next />
      </div>
    );
  }

  /**
   * Custom Previous Arrow Component
   *
   * This component renders the custom previous arrow for the slider.
   * The arrow is positioned to the left of the slider and is styled to match the design.
   *
   * @param {Object} props - The props passed to the custom arrow component.
   * @returns {JSX.Element} The rendered custom previous arrow component.
   */
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          zIndex: 10,
          left: "-14rem",
        }}
        onClick={onClick}
      >
        <Previous />
      </div>
    );
  }

  // Slider settings for react-slick
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 4.325,
    slidesToScroll: 1,
    arrows: true,
    speed: 700,
    autoplay: false,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          arrows: true,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          arrows: true,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, type: "just", delay: 0.3 }}
      className="mx-auto py-10 container mt-10"
    >
      <Slider {...settings}>
        <PackageCard title={"Premium Banking"}>
          <PremiumBanking />
        </PackageCard>
        <PackageCard title={"SME Banking"}>
          <SmeBanking />
        </PackageCard>
        <PackageCard title={"Personal Banking"}>
          <PersonalBanking />
        </PackageCard>
        <PackageCard title={"Digital Banking"}>
          <DigitalBanking />
        </PackageCard>
        <PackageCard title={"Agent Banking"}>
          <AgentBanking />
        </PackageCard>
      </Slider>
    </motion.div>
  );
}
