import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { photos } from "../data";

const Media = () => {
  return (
    <section
      id="media"
      className="w-full md:h-screen"
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* TOP DIV  */}
        <div className="flex-1">
          <h1 className="text-5xl text-center font-amatic">Media</h1>
        </div>

        {/* BOTTOM DIV  */}

        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          autoFocus={true}
          transitionTime={1000}
          className="flex-3"
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
