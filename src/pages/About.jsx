import guitar from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-24 md:h-screen">
      <div className="flex flex-col w-full h-full">
        {/* TOP HALF OF ABOUT  */}

        <div className="flex flex-col md:flex-row basis-3/5 w-full sm:w-5/6 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative flex flex-col items-center justify-center md:items-start basis-3/5"
          >
            <h1 className="w-full text-center md:text-start text-7xl md:text-9xl font-amatic pb-4">
              About
              <span className="text-7xl md:text-9xl text-maize"> Zane</span>
            </h1>
            <div className="h-[2px] w-2/3 bg-line-gradient" />
            <p className="w-5/6 pt-8 text-center text-sm sm:text-lg md:text-start">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium nobis eaque exercitationem earum delectus totam
              dolorem. Perspiciatis labore saepe quasi odio dolore. Explicabo
              fugiat quae dolorem? Qui hic unde nihil!
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative flex items-center justify-center basis-2/5"
          >
            <img
              src={guitar}
              alt=""
              className="hidden sm:block z-10 h-auto max-w-[275px] md:max-w-full rounded-lg "
            />
          </motion.div>
        </div>

        {/* BOTTOM HALF OF ABOUT  */}

        <div className="w-[95%] flex flex-col items-center mx-auto gap-8 px-6 my-12 md:flex-row basis-3/5 justify-evenly md:my-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative flex flex-col justify-end w-full md:flex-1 xs:py-24 sm:py-20 md:py-32 md:px-2 py-32 px-2"
          >
            <h3 className="absolute top-0 md:top-12 left-0 z-10 w-5/6 text-4xl sm:text-5xl">
              SECTION 1
            </h3>
            <div className="absolute w-2/3 h-full md:h-[55%] top-0 right-0 bg-red" />
            <p className="absolute bottom-0 text-sm sm:text-md md:bg-transparent bg-white md:text-white text-black md:font-normal font-bold md:p-0 px-4 py-2 ss:py-2 bg-opacity-50">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              vero commodi perferendis et possimus neque magnam porro ipsum
              esse, nostrum enim illum, doloremque, fugiat hic ad rerum delectus
              fuga quos.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative flex flex-col justify-end w-full md:flex-1 xs:py-24 sm:py-24 md:py-32 md:px-2 py-32 px-2"
          >
            <h3 className="absolute top-0 md:top-12 left-0 z-10 w-5/6 text-4xl sm:text-5xl">
              SECTION 2
            </h3>
            <div className="absolute w-2/3 h-full md:h-[55%] top-0 right-0 bg-green " />
            <p className="absolute bottom-0 text-sm sm:text-md md:bg-transparent bg-white md:text-white text-black md:font-normal font-bold md:p-0 px-4 py-2 ss:py-2 bg-opacity-50">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              vero commodi perferendis et possimus neque magnam porro ipsum
              esse, nostrum enim illum, doloremque, fugiat hic ad rerum delectus
              fuga quos.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative flex flex-col justify-end w-full md:flex-1 xs:py-24 sm:py-24 md:py-32 md:px-2 py-32 px-2"
          >
            <h3 className="absolute top-0 md:top-12 left-0 z-10 w-5/6 text-4xl sm:text-5xl">
              SECTION 3
            </h3>
            <div className="absolute w-2/3 h-full md:h-[55%] top-0 right-0 bg-maize " />
            <p className="absolute bottom-0 text-sm sm:text-md md:bg-transparent bg-white md:text-white text-black md:font-normal font-bold md:p-0 px-4 py-2 ss:py-2 bg-opacity-50">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              vero commodi perferendis et possimus neque magnam porro ipsum
              esse, nostrum enim illum, doloremque, fugiat hic ad rerum delectus
              fuga quos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
