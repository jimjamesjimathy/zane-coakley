import { motion } from "framer-motion";
import hero from "../assets/cartoon-hero.png";
import cZane from "../assets/cZane.png";
import gZane from "../assets/gZane.png";
import yZane from "../assets/yZane.png";
import bZane from "../assets/bZane.png";
import rZane from "../assets/rZane.png";

const Home = ({ setSelectedPage }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 11,
      },
    },
  };

  return (
    <section id="home" className="relative h-screen pt-24 pb-10">
      <div className="absolute top-0 left-[-10%] w-screen h-screen home-clip bg-charcoal" />
      <div className="relative z-20 flex flex-col items-center h-full md:flex-row">
        {/* LEFT SIDE WITH TEXT  */}

        <div className="flex flex-col items-center justify-center order-1 mx-auto md:items-start basis-3/5">
          <div>
            <h1 className="tracking-wider text-7xl md:text-9xl font-amatic">
              Zane Coakley
            </h1>
          </div>
          <div className="pb-4">
            <h3 className="text-xl">
              Singer // Songwriter // Performer // Sicky Dude.
            </h3>
          </div>
          <div className="w-4/6 pb-2">
            <p className="text-center md:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsa
              illum dolores placeat. Aspernatur maiores dolores quaerat libero
              architecto. Veritatis saepe in dicta a, sit nesciunt corrupti
              nobis veniam. Vero.
            </p>
          </div>
          <div className="">
            <button className="px-4 py-2 font-bold text-black bg-brown">Contact me</button>
          </div>
        </div>

        {/* RIGHT SIDE WITH IMAGE  */}

        <div className="items-center hidden basis-1/5 md:basis-2/5 xs:flex md:order-2">
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="relative flex justify-start"
          >
            <img
              src={hero}
              alt="zane shredding guitar"
              className="max-w-[235px] md:max-w-full h-auto rounded-lg z-[7] rounded-b-full"
            />
            <motion.img
              variants={item}
              src={rZane}
              alt="silhouette of man playing guitar"
              className="absolute right-[-7%] z-[5]  max-w-[235px] rounded-b-full  rounded-lg md:max-w-full h-auto top-[-1.5%]"
            />
            <motion.img
              variants={item}
              src={cZane}
              alt="silhouette of man playing guitar"
              className="absolute right-[-11%] z-[4] max-w-[235px] rounded-b-full rounded-lg md:max-w-full h-auto  top-[-2.5%]"
            />
            <motion.img
              variants={item}
              src={bZane}
              alt="silhouette of man playing guitar"
              className="absolute right-[-15%] z-[3] max-w-[235px] rounded-b-full rounded-lg md:max-w-full h-auto  top-[-3.5%]"
            />
            <motion.img
              variants={item}
              src={gZane}
              alt="silhouette of man playing guitar"
              className="absolute right-[-19%] z-[2] max-w-[235px] rounded-b-full rounded-lg md:max-w-full h-auto  top-[-4.5%]"
            />
            <motion.img
              variants={item}
              src={yZane}
              alt="silhouette of man playing guitar"
              className="absolute right-[-23%] z-[1] max-w-[235px] rounded-b-full rounded-lg md:max-w-full h-auto  top-[-5.4%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
