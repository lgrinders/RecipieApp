import { Link } from "react-router-dom";
import { GiCaesar, GiCarrot } from "react-icons/gi";
import { navLinks } from "../../assets/navAssets";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext, useRef, useState } from "react";
import { GlobalContext } from "../context";
import useOutsideClick from "../use-outside-click";

export default function NavBar() {
  const { setRecipesList } = useContext(GlobalContext);
  const [navShowing, setNavShowing] = useState(false);
  const sideNavRef = useRef();
  const hamburgerMenuRef = useRef();

  useOutsideClick(sideNavRef, (e) => {
    if (
      (hamburgerMenuRef.current &&
        hamburgerMenuRef.current.contains(e.target)) ||
      (sideNavRef.current && sideNavRef.current.contains(e.target))
    ) {
      return;
    }
    setNavShowing(false);
  });

  return (
    <>
      <div className="fixed h-20 w-screen overflow-x-hidden bg-white">
        <div className="absolute left-0 top-1 flex text-neutral-300">
          {[...Array(150)].map((iconItem, idx) => {
            if (idx % 2 === 0) {
              return <GiCaesar size={14} key={idx} />;
            }
            return <GiCarrot size={14} key={idx} />;
          })}
        </div>
        <div className="relative top-8 hidden items-center justify-center gap-0 text-[10px] font-semibold tracking-[4px] sm:flex md:gap-5">
          <div className="flex justify-center gap-5">
            {navLinks.map((linkItem, idx) => {
              return (
                <Link
                  to={linkItem.link}
                  key={idx}
                  onClick={
                    linkItem.linkName === "RECIPIES"
                      ? () => setRecipesList([])
                      : null
                  }
                  className="hover:underline"
                >
                  {linkItem.linkName}
                </Link>
              );
            })}
          </div>
          <div className="hidden gap-5 lg:flex">
            <a href="">
              <FaInstagram size={16} />
            </a>
            <a href="">
              <FaPinterest size={16} />
            </a>
            <a href="">
              <FaTwitter size={16} />
            </a>
            <a href="">
              <FaFacebook size={16} />
            </a>
          </div>
        </div>
        <div
          className="relative top-8 flex justify-end px-5 sm:hidden"
          ref={hamburgerMenuRef}
          id="hamburgerBar"
        >
          <GiHamburgerMenu
            size={20}
            className={`transition-transform duration-300 ease-in-out ${
              navShowing ? "rotate-90" : "rotate-0"
            }`}
            onClick={() => setNavShowing(!navShowing)}
          />
        </div>
      </div>
      <div
        ref={sideNavRef}
        className={`fixed left-0 top-0 z-20 flex h-screen w-64 transform flex-col items-center justify-center bg-white shadow-2xl transition-all duration-300 ease-in-out ${
          navShowing
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
        id="sideNav"
      >
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center gap-10">
            {navLinks.map((linkItem, idx) => {
              return (
                <Link
                  to={linkItem.link}
                  key={idx}
                  onClick={() => {
                    if (linkItem.linkName === "RECIPIES") {
                      setRecipesList([]); // Reset recipesList if link is "RECIPIES"
                    }
                    setNavShowing(false); // Close the navigation menu
                  }}
                  className="hover:underline"
                >
                  {linkItem.linkName}
                </Link>
              );
            })}
          </div>
          <div className="flex gap-5">
            <a href="">
              <FaInstagram size={16} />
            </a>
            <a href="">
              <FaPinterest size={16} />
            </a>
            <a href="">
              <FaTwitter size={16} />
            </a>
            <a href="">
              <FaFacebook size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
