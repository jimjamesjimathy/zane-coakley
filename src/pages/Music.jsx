import { motion } from 'framer-motion';

const Music = () => {
  return (
    <section
      id="music"
      className="h-screen w-full flex items-center justify-center"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, scale: .5 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <h1 className="fs:text-2xl ss:text-5xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-thin">
          COMING SOON...
        </h1>
      </motion.div>
    </section>
  );
};

export default Music;
