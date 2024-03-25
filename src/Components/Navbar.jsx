/* eslint-disable no-unused-vars */
import React from "react";

// assets
import Logo from "../assets/logo.png";

// icons
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

// components
import DarkMode from "./DarkMode";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Products",
    link: "#",
  },
  {
    id: 3,
    name: "Pricing",
    link: "#",
  },
  {
    id: 4,
    name: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="relative z-[9999] text-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <div className="flex items-center gap-3">
            <img className="h-16 " src={Logo} alt="logo" />
            <p className="text-3xl">
              VR <span className="font-bold">World</span>
            </p>
          </div>

          {/* desktop menu section */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map(({ id, name, link }) => (
                <li className="py-4 " key={id}>
                  <a
                    className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2
                      hover:border-secondary transition-colors duration-500"
                    href={link}
                  >
                    {name}
                  </a>
                </li>
              ))}

              {/* dark mode */}
              <DarkMode />
            </ul>
          </nav>

          {/* mobile view */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
