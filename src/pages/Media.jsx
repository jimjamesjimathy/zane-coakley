import { Carousel } from "react-responsive-carousel";
import { photos } from "../data";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../index.css";

const Media = () => {
  return (
    <section id="media" className="w-full h-screen pt-24">
      {/* BOTTOM DIV  */}
      <div className="mx-auto flex flex-col items-center justify-center max-w-[75em] h-full gap-8 carousel">
        <div className="w-2/3 flex justify-center gap-x-4">
          <h1 className="text-center text-7xl font-amatic text-brown">
            Photos
          </h1>
          <span className="text-white font-bold text-7xl font-amatic">&</span>
          <h1 className="text-center text-7xl font-amatic text-brown">Video</h1>
        </div>
        <Carousel
          autoPlay={true}
          interval={5000}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          autoFocus={true}
          transitionTime={2000}
          className="flex flex-col py-8 rounded-t-md flex-3 border-4 border-red"
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="flex items-center justify-center w-full"
            >
              <img
                src={photo.img}
                alt=""
                className="w-full max-w-[405px] h-auto"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Media;
