import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Component() {
  const SharedClass = "fixed w-full px-3 uppercase";
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div
        className={`${SharedClass} h-[52px] z-20 grid grid-cols-2 sm:grid-cols-3 items-center`}
      >
        <div className="col-span-1">
          <Link to="/">
            Logo
          </Link>
        </div>
        <div className="col-span-1 h-full">
          <div
            onMouseEnter={() => {
              setIsShown(true);
            }}
            onMouseLeave={() => {
              setIsShown(false);
            }}
            className="h-full flex items-center justify-end sm:justify-center group"
          >
            <Hamburger isShown={isShown} />
            <span className="ml-2">Menu</span>
          </div>
        </div>
        <div className="col-span-1 hidden sm:flex justify-end">
          <Link to="/news">
            News
          </Link>
        </div>
      </div>

      <div
        onMouseEnter={() => {
          setIsShown(true);
        }}
        onMouseLeave={() => {
          setIsShown(false);
        }}
        className={`${SharedClass} top-[52px] z-10 grid grid-cols-8 pb-4 ${isShown ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} transition-all duration-300`}
      >
        <div className="col-span-8 sm:col-span-6 lg:col-span-4 sm:col-start-3 lg:col-start-5 grid grid-rows-4 sm:grid-rows-3 grid-flow-col gap-x-4 text-start w-full">
          <NavLink to="/project">Project</NavLink>
          <NavLink to="/category/project/category01">Category 01</NavLink>
          <NavLink to="/category/project/category02">Category 02</NavLink>
          <NavLink to="/page01">Page 01</NavLink>
          <NavLink to="/page02">Page 02</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </>
  );
}

function Hamburger({ isShown }: { isShown: boolean }) {
  const transition = "transition-all duration-300";
  const BarClass = "h-px bg-black " + transition;
  return (
    <>
      <div
        className={`flex flex-col justify-between w-4 ${transition} ${isShown ? "h-3" : "h-2.5"}`}
      >
        <span
          className={`${BarClass} w-full ${isShown ? "rotate-45" : "rotate-0"} origin-top-left`}
        ></span>
        <span
          className={`${BarClass} ${isShown ? "w-0" : "w-full"} origin-center`}
        ></span>
        <span
          className={`${BarClass} w-full origin-bottom-left ${isShown ? "-rotate-45" : "rotate-0"}`}
        ></span>
      </div>
    </>
  );
}
