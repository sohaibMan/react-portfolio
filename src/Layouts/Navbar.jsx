import { useContext, useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { context } from "../App";

const Navbar = ({ changeLangHandler }) => {
  const lang = useContext(context);
  const { Nav } = content[lang];
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center gap-2 fixed top-10 left-10 z-[999]">
        <div
          className="sm:cursor-pointer  rounded-lg bg-white/40 p-2"
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiMenuAlt2 size={34} />
        </div>
        <LanguageSwitcher lang={lang} onChange={changeLangHandler} />
      </div>
      <nav
        className={`fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {Nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
     ${i === active && "bg-dark_primary text-white"} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
