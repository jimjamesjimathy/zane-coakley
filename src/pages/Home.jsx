import { motion } from "framer-motion";
import hero from "../assets/hero-zane.png";
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
        staggerChildren: 0.23,
        type: "spring",
        stiffness: 10,
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <section id="home" className="h-screen pt-24 pb-10">
      <div className="flex h-full">
        <div className="flex flex-col items-center justify-center basis-4/5">
          <div className="">
            <h1 className="tracking-wider text-9xl font-amatic">Zane Coakley</h1>
          </div>
          <div className="pb-4">
            <h3 className="text-xl">Singer // Songwriter // Performer // Sicky Dude.</h3>
          </div>
          <div className="w-5/6 pb-2">
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsa illum dolores placeat. Aspernatur maiores dolores quaerat libero architecto. Veritatis saepe in dicta a, sit nesciunt corrupti nobis veniam. Vero.</p>
          </div>
          <div className="">
            <button className="px-4 py-2">Contact me</button>
          </div>
        </div>
        <div className="flex items-end justify-start pb-6 text-center basis-4/5">
          <div className="relative">
            <img
              src={hero}
              alt="zane shredding guitar"
              className="z-[25] h-[55em] rounded-full relative"
            />
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
            >

              <motion.img
                variants={item}
                src={cZane}
                alt="zane shredding guitar"
                className="absolute top-[-3%] z-[24] rounded-full right-[-5%]"
                />
            
              <motion.img
                variants={item}
                src={gZane}
                alt="zane shredding guitar"
                className="absolute rounded-full top-[-5%] z-[23] right-[-9%]"
                />
            
              <motion.img
                variants={item}
                src={yZane}
                alt="zane shredding guitar"
                className="absolute rounded-full top-[-7%] z-[22] right-[-13%]"
                />

            
              <motion.img
                variants={item}
                src={bZane}
                alt="zane shredding guitar"
                className="absolute rounded-full top-[-9%] z-[21] right-[-17%]"
                />

            
              <motion.img
                variants={item}
                src={rZane}
                alt="zane shredding guitar"
                className="absolute rounded-full top-[-11%] z-[20] right-[-21%]"
                />
              </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
