import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import DotGroup from "./components/DotGroup";
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";

import { motion } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-screen">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Home setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
      <div className="relative mx-auto md:h-screen">
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("about")}
        >
          <About setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
      <div className="relative w-5/6 h-screen mx-auto">
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("music")}
        >
          <Music setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
      <div className="relative w-5/6 h-screen mx-auto">
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("media")}
        >
          <Media setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
      <div className="relative w-5/6 h-screen mx-auto">
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
    </div>
  );
}

export default App;
