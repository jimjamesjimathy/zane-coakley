import { Carousel } from "react-responsive-carousel";
import { photos } from "../data";
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
          showIndicators={true}
          showStatus={false}
          infiniteLoop={true}
          autoFocus={true}
          transitionTime={2000}
          dynamicHeight={false}
          className="rounded-t-md flex-3 border-4 border-red p-4 h-5/6"
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="flex items-center justify-center h-full"
            >
              <div className="h-full flex items-center justify-center">
                <img
                  src={photo.img}
                  alt=""
                  className="w-full h-auto max-w-[80%] rounded-sm"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Media;
