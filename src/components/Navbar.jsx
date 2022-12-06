import AnchorLink from "react-anchor-link-smooth-scroll";
import MobileNav from "./MobileNav";
import useMediaQuery from '../hooks/useMediaQuery';
import { navigation } from '../data';


export const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-white font-bold uppercase"
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

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage
    ? ""
    : "z-50 bg-[#26171E] shadow-md shadow-opaque-black";

  return (
    <nav className={`${navbarBackground} relative z-50 w-full md:fixed top-0 py-5`}>
      <div className="flex items-center justify-between w-5/6 mx-auto">
        <div>
          <a className="text-5xl font-bold tracking-widest font-amatic" href="/">ZK</a>
        </div>
        {isDesktop ? (
          <ul className={"flex space-x-8 text-md"}>
            {navigation.map((item) => (
              <li key={item.id}>
                <Link
                  page={item.name}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </li>
            ))}
          </ul>
        ) : (
          <MobileNav 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
