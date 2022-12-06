import guitar from '../assets/about.jpg';

const About = () => {
  return (
    <section id="about" className="h-screen pt-20">
      <div className="h-full w-full flex flex-col">
        <div className="basis-3/5 flex">
          <div className="flex-1 flex flex-col items-center justify-center">
            <h1 className="text-9xl font-amatic border-b-2 border-black w-4/6 text-center">About Zane</h1>
            <p className='w-5/6 text-center pt-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nobis eaque exercitationem earum delectus totam dolorem. Perspiciatis labore saepe quasi odio dolore. Explicabo fugiat quae dolorem? Qui hic unde nihil!</p>
          </div>
          <div className="relative flex-1 flex items-center justify-center">
            <img src={guitar} alt="" className='max-h-[350px] rounded-lg z-10' />
            <div className="absolute border-4 border-white h-[350px] w-[65%] rounded-lg left-28 top-7" />
          </div>
        </div>
        <div className="basis-3/5 flex items-center justify-evenly gap-8 px-6">
          <div className="border border-black flex-1 h-2/3">
            <h3 className='text-4xl'>SECTION 1</h3>
          </div>
          <div className="border border-black flex-1 h-2/3">center</div>
          <div className="border border-black flex-1 h-2/3">right</div>
        </div>
      </div>
    </section>
  )
};

export default About;
