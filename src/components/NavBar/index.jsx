import { Link } from "react-router-dom";
import { useContext } from "react";
import { GiCaesar, GiCarrot } from "react-icons/gi";
import { navLinks } from "../../assets/navAssets";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";
import { GlobalContext } from "../context";

export default function NavBar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

    console.log(searchParam)

  return (
    <>
      <div className="fixed h-14 w-screen overflow-x-hidden bg-white">
        <div className="absolute left-0 top-1 flex text-iconGray">
          {[...Array(150)].map((iconItem, idx) => {
            if (idx % 2 === 0) {
              return <GiCaesar size={14} key={idx} />;
            }
            return <GiCarrot size={14} key={idx} />;
          })}
        </div>

        <div className="relative top-8 flex items-center justify-center gap-7 text-[10px] font-semibold tracking-[3px]">
          <div className="flex gap-5">
            {navLinks.map((linkItem, idx) => {
              return (
                <Link to={linkItem.link} key={idx} className="hover:underline">
                  {linkItem.linkName}
                </Link>
              );
            })}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="h-4 w-24 rounded-sm border border-black text-center outline-none placeholder:text-center placeholder:text-neutral-500"
              placeholder="SEARCH"
              value={searchParam}
              onChange={(e) => setSearchParam(e.target.value)}
            />
          </form>
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
