import AboutPreview from "../sections/AboutPreview";
import Hero from "../sections/Hero";
import Highlights from "../sections/Highlights";
import NewsPreview from "../sections/NewsPreview";
import NotificationsPreview from "../sections/NotificationsPreview";
import ProductsPreview from "../sections/ProductsPreview";
import Stats from "../sections/Stats";
import AboutOverview from "./About/AboutOverview";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      {/* <AboutPreview/> */}
      <AboutOverview />
      <ProductsPreview />
      <Stats />
      <NewsPreview />
      <NotificationsPreview />
    </>
  );
}
