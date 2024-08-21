import HeroSection from "@pages/Home/components/HeroSection";
import FlashSales from "@pages/Home/components/FlashSales";
import Categories from "@pages/Home/components/Categories";
import BestSellingProducts from "@pages/Home/components/BestSellingProducts";
import Categories1 from "@pages/Home/components/Categories1";
import OurProducts from "@pages/Home/components/OurProducts";
import Featured from "@pages/Home/components/Featured";
import Qualities from "@components/Qualities";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FlashSales />
      <Categories />
      <BestSellingProducts />
      <Categories1 />
      <OurProducts />
      <Featured />
      <Qualities />
    </>
  );
}
