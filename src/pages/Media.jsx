import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { photos } from "../data";

const Media = () => {
  return (
    <section id="media" className="h-screen flex items-center justify-center">
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        className="flex items-center justify-center w-full mx-auto"
      >
      </Carousel>
    </section>
  );
};

export default Media;
