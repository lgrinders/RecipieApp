import { Link } from "react-router-dom";
import { GiCaesar, GiCarrot } from "react-icons/gi";
import { navLinks } from "../../assets/navAssets";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../context";

export default function NavBar() {
  const { searchParam, setSearchParam } = useContext(GlobalContext);

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
        <div className="relative top-8 flex items-center justify-center gap-0 text-[10px] font-semibold tracking-[4px] md:gap-5">
          <div className="flex justify-center gap-5">
            {navLinks.map((linkItem, idx) => {
              return (
                <Link to={linkItem.link} key={idx} className="hover:underline">
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
      </div>
    </>
  );
}
