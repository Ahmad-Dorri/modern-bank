import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navOpenHandler = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <nav className="flex justify-between items-center w-full py-6 navbar">
      <img src={logo} alt="hoobank logo" className="w-[124px] h-[32px]" />
      <ul className="sm:flex justify-end gap-10 items-center list-none hidden flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="font-poppins font-normal cursor-pointer text-[16px]">
            <a href={`#${nav.id}`} className="text-white">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button onClick={navOpenHandler}>
          <img
            src={isNavOpen ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain "
          />
        </button>
        <div className={`${isNavOpen ? 'flex' : 'hidden'}`}>
          <div className="text-white sidebar   absolute top-20 right-0  mx-4 my-6 p-6 bg-black-gradient rounded-xl min-w-[128px]">
            <ul className="flex  gap-10 items-center  list-none flex-col flex-1">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="font-poppins font-normal cursor-pointer text-[16px]">
                  <a href={`#${nav.id}`} className="text-white">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
