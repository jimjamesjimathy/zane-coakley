import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { photos } from "../data";
import '../index.css'

const Media = () => {
  return (
    <section id="media" className="w-full h-screen pt-24">
      {/* BOTTOM DIV  */}
      <div className="mx-auto flex flex-col items-center justify-center max-w-[75em] h-full gap-8 carousel">
        <div className="w-2/3">
          <h1 className="text-center text-7xl font-amatic">Media</h1>
        </div>
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          autoFocus={true}
          transitionTime={1000}
          className="flex flex-col py-8 rounded-t-md flex-3 bg-green bg-opacity-20"
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