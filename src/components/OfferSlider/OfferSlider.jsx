"use client";

/**
 * OfferSlider Component
 *
 * This component renders a slider that displays promotional offers in a visually appealing carousel format.
 * The slider is responsive and includes custom navigation arrows for a better user experience.
 *
 * Features:
 * - The slider is configured to display different numbers of slides based on the screen width.
 * - Custom next and previous arrows are used for navigation.
 * - The cards animate into view with a smooth transition as the user scrolls down the page.
 *
 * Props:
 * - The `OfferCard` component is used within the slider to display individual offers.
 * - Each `OfferCard` receives an `id` prop to differentiate the styling of alternating cards.
 * - The `image` prop is used to pass the image associated with each offer.
 *
 * Responsive Behavior:
 * - On large screens, the slider shows 4 cards at a time.
 * - On medium screens, it shows 3 cards.
 * - On small screens, it shows 2 cards.
 * - On extra-small screens, it shows 1 card and hides the arrows for a cleaner look.
 *
 * @returns {JSX.Element} The rendered OfferSlider component.
 */
import Heading from "../Heading/Heading";
import Slider from "react-slick";
import OfferCard from "../Cards/OfferCard";
import offer1 from "@/Assets/images/offer1.png";
import offer2 from "@/Assets/images/offer2.png";
import offer3 from "@/Assets/images/offer3.png";
import offer4 from "@/Assets/images/offer4.png";
import Next from "@/Assets/icons/next.svg";
import Previous from "@/Assets/icons/previous.svg";
import { motion } from "framer-motion";
export default function OfferSlider() {
  // Custom next arrow for the slider
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

  // Custom previous arrow for the slider
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

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "60px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
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
    <div className="container offer mx-auto py-10">
      <Heading
        title={"What's New"}
        desc={"Convenient online banking, personalized for you."}
      />
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, type: "just", delay: 0.3 }}
      >
        <Slider {...settings}>
          <OfferCard id={true} image={offer1} />
          <OfferCard id={false} image={offer2} />
          <OfferCard id={true} image={offer3} />
          <OfferCard id={false} image={offer4} />
        </Slider>
      </motion.div>
    </div>
  );
}
