import { Link } from "react-router-dom";
import { GiCaesar, GiCarrot } from "react-icons/gi";
import { navLinks } from "../../assets/navAssets";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";
export default function NavBar() {
  return (
    <>
      <div className="relative h-20 overflow-x-hidden">
        <div className="absolute left-0 top-1 flex text-neutral-300">
          {[...Array(150)].map((iconItem, idx) => {
            if (idx % 2 === 0) {
              return <GiCaesar size={14} key={idx} />;
            }
            return <GiCarrot size={14} key={idx} />;
          })}
        </div>
        <div className="relative top-8 flex items-center justify-center gap-5 text-[10px] font-semibold tracking-[4px]">
          <div className="flex gap-5">
            {navLinks.map((linkItem, idx) => {
              return (
                <Link to={linkItem.link} key={idx} className="hover:underline">
                  {linkItem.linkName}
                </Link>
              );
            })}
          </div>
          <form>
            <input
              type="text"
              className="h-4 w-28 rounded-sm border border-black text-center outline-none placeholder:text-center placeholder:text-neutral-500"
              placeholder="SEARCH"
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
