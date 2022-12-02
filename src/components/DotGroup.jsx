import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
    const selectedStyles = `relative bg-[#D3614A] before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-white before:left-[-50%] before:top-[-50%]`

  return (
    <div className="flex flex-col gap-6 fixed top-[50%] right-7">
      <AnchorLink
        className={`${selectedPage === 'home' ? selectedStyles : "bg-white"}
            w-3 h-3 rounded-full`}
        href='#home'
        onClick={() => setSelectedPage('home')}
      />
      <AnchorLink
        className={`${selectedPage === 'about' ? selectedStyles : "bg-white"}
            w-3 h-3 rounded-full`}
        href='#about'
        onClick={() => setSelectedPage('about')}
      />
      <AnchorLink
        className={`${selectedPage === 'music' ? selectedStyles : "bg-white"}
            w-3 h-3 rounded-full`}
        href='#music'
        onClick={() => setSelectedPage('music')}
      />
      <AnchorLink
        className={`${selectedPage === 'media' ? selectedStyles : "bg-white"}
            w-3 h-3 rounded-full`}
        href='#media'
        onClick={() => setSelectedPage('media')}
      />
      <AnchorLink
        className={`${selectedPage === 'contact' ? selectedStyles : "bg-white"}
            w-3 h-3 rounded-full`}
        href='#contact'
        onClick={() => setSelectedPage('contact')}
      />
    </div>
  );
};

export default DotGroup;