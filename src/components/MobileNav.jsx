import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from 'react-icons/gr';
import { navigation } from '../data';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const menuVariants = {
  opened: {
    right: 0,
    transition: {
      duration: .5,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  closed: {
    transition: {
      duration: .5,
    },
    right: "-100%",
  },
};

const linkVariants = {
  opened: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: 100,
  },
};


export const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage
          ? "text-lightRed font-bold uppercase"
          : ""
        }
            hover:text-red-900 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const MobileNav = ({ page, selectedPage, setSelectedPage }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button onClick={() => setOpen(!open)} className="fixed z-50 right-10">
        {open ? <GrClose size={33} /> : <AiOutlineMenu size={33} className="font-bold" />}
      </motion.button>
      <motion.nav
        className='fixed top-0 right-0 flex flex-col items-center justify-center w-full h-screen bg-green'
        initial={false}
        variants={menuVariants}
        animate={open ? "opened" : "closed"}
      >
        <motion.ul
          className='flex flex-col items-center w-5/6 h-2/3 justify-evenly'
          initial={false}
          variants={menuVariants}
          animate={open ? "opened" : "closed"}
        >
          {navigation.map(link => (
            <motion.li
              key={link.id}
              className="text-5xl "
              variants={linkVariants}
              onClick={() => setOpen(!open)}
              >
              <Link
                page={link.name}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </>
  );
};

export default MobileNav;