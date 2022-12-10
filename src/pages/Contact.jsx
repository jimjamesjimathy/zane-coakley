import contact from "../assets/about.jpg";

const Contact = () => {
  return (
    <section id="contact" className="h-screen pt-20">
      <div className="flex flex-wrap items-center h-full">
        <div className="w-full text-center">
          <h2 className="font-amatic text-7xl">
            Contact me to shred the sicky
          </h2>
        </div>

        {/* LEFT SIDE WITH TEXT AND IMAGE  */}
        <div className="basis-2/5 h-2/3 bg-opaque-black border-r-2 flex flex-col items-center justify-evenly">
          <div className="">
            <h3 className="text-5xl">heading</h3>
          </div>
          <div className="">
            <img src={contact} alt="" />
          </div>
          <div className="">
            <p className="text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed
              fugit facere vero quisquam omnis vel.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE WITH FORM  */}
        <div className="flex items-center basis-3/5 h-2/3 bg-opaque-black">
          <form
            action=""
            className="flex flex-col items-center justify-center w-5/6 mx-auto gap-y-8 h-5/6"
          >
            {/* FIRST NAME AND LAST NAME  */}
            <div className="flex w-full gap-8 6">
              <input
                type="text"
                className="p-2 w-1/2 border-2"
                placeholder="First Name"
              />
              <input
                type="text"
                className="p-2 w-1/2 border-2"
                placeholder="Last Name"
              />
            </div>

            {/* PHONE AND EMAIL  */}
            <div className="flex w-full gap-8 6">
              <input
                type="text"
                className="p-2 w-1/2 border-2"
                placeholder="Phone Number (optional)"
              />
              <input
                type="text"
                className="p-2 w-1/2 border-2"
                placeholder="Email"
              />
            </div>

            {/* SUBJECT AND MESSAGE  */}
            <div className="flex flex-col items-center w-full gap-y-4">
              <input
                type="text"
                className="p-2 w-full border-2"
                placeholder="Subject"
              />
              <textarea
                rows={7}
                type="text"
                className="w-full border-2"
                placeholder="What can i do for you?"
              />
            </div>
            <button className="px-4 py-2 rounded-md bg-green">Fire Away!</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
