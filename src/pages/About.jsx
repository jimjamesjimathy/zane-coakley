import guitar from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="h-screen pt-20">
      <div className="h-full w-full flex flex-col">
        <div className="basis-3/5 flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex-1 flex flex-col items-center justify-center"
          >
            <h1 className="text-9xl font-amatic border-b-2 w-4/6 text-center">
              About Zane
            </h1>
            <p className="w-5/6 text-center pt-8">
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
            className="relative flex-1 flex items-center justify-center"
          >
            <img
              src={guitar}
              alt=""
              className="max-h-[350px] rounded-lg z-10"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="absolute h-[350px] w-[65%] rounded-lg left-28 top-7 border-8 border-white"
            />
          </motion.div>
        </div>
        <div className="basis-3/5 flex items-center justify-evenly gap-8 px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className=" relative flex-1 h-2/3"
          >
            <h3 className="text-5xl absolute left-0 top-0 z-10 w-5/6">
              SECTION 1
            </h3>
            <div className="absolute w-2/3 h-[55%] top-0 right-0 bg-red " />
            <p className="text-md absolute bottom-0">
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
            className=" relative flex-1 h-2/3"
          >
            <h3 className="text-5xl absolute left-0 top-0 z-10 w-5/6">
              SECTION 2
            </h3>
            <div className="absolute w-2/3 h-[55%] top-0 right-0 bg-green " />
            <p className="text-md absolute bottom-0">
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
            className=" relative flex-1 h-2/3"
          >
            <h3 className="text-5xl absolute left-0 top-0 z-10 w-5/6">
              SECTION 3
            </h3>
            <div className="absolute w-2/3 h-[55%] top-0 right-0 bg-maize " />
            <p className="text-md absolute bottom-0">
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
