import PackageCard from "../Cards/PackageCard";
import SmeBanking from "@/Assets/icons/smeBanking.svg";
import PremiumBanking from "@/Assets/icons/premiumBanking.svg";
import PersonalBanking from "@/Assets/icons/personalBanking.svg";
import DigitalBanking from "@/Assets/icons/digitalBanking.svg";
import AgentBanking from "@/Assets/icons/agentBanking.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube"; // Import cube effect CSS
import { motion } from "framer-motion";

export default function PackageSlider() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, type: "just", delay: 0.3 }}
      className="mx-auto py-10 container"
    >
      <div className="slider-container">
        <Swiper
          loop={true}
          effect={"cube"} // Set effect to cube
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={4}
          cubeEffect={{
            slideShadows: true, // Enable slide shadows
            shadowOffset: 20, // Offset between cubes
            shadowScale: 0.94, // Scale of the shadows
            shadowOpacity: 0.6, // Opacity of the shadows
          }}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <PackageCard title={"Premium Banking"}>
              <PremiumBanking />
            </PackageCard>
          </SwiperSlide>
          <SwiperSlide>
            <PackageCard title={"SME Banking"}>
              <SmeBanking />
            </PackageCard>
          </SwiperSlide>
          <SwiperSlide>
            <PackageCard title={"Personal Banking"}>
              <PersonalBanking />
            </PackageCard>
          </SwiperSlide>
          <SwiperSlide>
            <PackageCard title={"Digital Banking"}>
              <DigitalBanking />
            </PackageCard>
          </SwiperSlide>
          <SwiperSlide>
            <PackageCard title={"Agent Banking"}>
              <AgentBanking />
            </PackageCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
}
