import guitar from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="h-screen pt-20">
      <div className="flex flex-col w-full h-full">

        {/* TOP HALF OF ABOUT  */}

        <div className="flex flex-col md:flex-row basis-3/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative flex flex-col items-center justify-center basis-3/5"
          >
            <h1 className="w-4/6 text-center border-b-2 text-7xl md:text-8xl lg:text-9xl font-amatic">
              About Zane
            </h1>
            <p className="w-5/6 pt-8 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium nobis eaque exercitationem earum delectus totam
              dolorem. Perspiciatis labore saepe quasi odio dolore. Explicabo
              fugiat quae dolorem? Qui hic unde nihil!
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-center justify-center basis-2/5"
          >
            <img
              src={guitar}
              alt=""
              className="z-10 h-auto max-w-[355px] md:max-w-full rounded-lg "
            />
            </motion.div>
        </div>

              {/* BOTTOM HALF OF ABOUT  */}

        <div className="flex items-center gap-8 px-6 basis-3/5 justify-evenly">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative flex-1 h-2/3"
          >
            <h3 className="absolute top-0 left-0 z-10 w-5/6 text-5xl">
              SECTION 1
            </h3>
            <div className="absolute w-2/3 h-[55%] top-0 right-0 bg-red " />
            <p className="absolute bottom-0 text-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              vero commodi perferendis et possimus neque magnam porro ipsum
              esse, nostrum enim illum, doloremque, fugiat hic ad rerum delectus
              fuga quos.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative flex-1 h-2/3"
          >
            <h3 className="absolute top-0 left-0 z-10 w-5/6 text-5xl">
              SECTION 2
            </h3>
            <div className="absolute w-2/3 h-[55%] top-0 right-0 bg-green " />
            <p className="absolute bottom-0 text-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              vero commodi perferendis et possimus neque magnam porro ipsum
              esse, nostrum enim illum, doloremque, fugiat hic ad rerum delectus
              fuga quos.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative flex-1 h-2/3"
          >
            <h3 className="absolute top-0 left-0 z-10 w-5/6 text-5xl">
              SECTION 3
            </h3>
            <div className="absolute w-2/3 h-[55%] top-0 right-0 bg-maize " />
            <p className="absolute bottom-0 text-md">
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
