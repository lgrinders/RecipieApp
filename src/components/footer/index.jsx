import { GiTomato, GiBerriesBowl } from "react-icons/gi";
import {
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { topSearches, suggestedSearches } from "../../assets/footerAssets";
import { Link } from "react-router-dom";
import { footerLinks } from "../../assets/footerAssets";

export default function Footer() {
  return (
    <>
      <div className="text-accentOlive relative h-3 w-full items-end overflow-x-hidden bg-white">
        <div className="absolute -bottom-0.5 flex">
          {[...Array(150)].map((iconItem, idx) => {
            if (idx % 2 === 0) {
              return <GiTomato size={16} key={idx} />;
            }
            return <GiBerriesBowl size={16} key={idx} />;
          })}
        </div>
      </div>
      <div className="bg-accentOlive flex w-full flex-col gap-10 py-5 pt-10 xl:px-64">
        <div className="flex justify-center gap-7 text-white">
          <a href="">
            <FaInstagram size={30} />
          </a>
          <a href="">
            <FaPinterest size={30} />
          </a>
          <a href="">
            <FaTwitter size={30} />
          </a>
          <a href="">
            <FaFacebook size={30} />
          </a>
        </div>
        <div className="flex justify-evenly">
          <div className="flex flex-col gap-2 text-center text-white">
            <h2 className="font-Gara text-xl font-semibold">Top Searches</h2>
            <div className="flex flex-col gap-0.5">
              {topSearches.map((item, idx) => (
                <a
                  className="cursor-pointer font-Play hover:underline"
                  key={idx}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 text-center text-white">
            <h2 className="font-Gara text-xl font-semibold">
              Suggested Searches
            </h2>
            <div className="flex flex-col gap-0.5">
              {suggestedSearches.map((item, idx) => (
                <a
                  className="cursor-pointer font-Play hover:underline"
                  key={idx}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-5 font-semibold">
          {footerLinks.map((linkItem, idx) => {
            return (
              <Link
                to={linkItem.link}
                key={idx}
                className="font-Gara text-xs tracking-widest text-white hover:underline"
              >
                {linkItem.linkName}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center justify-center font-Gara text-xs font-semibold tracking-widest text-white">
          Copyriht @ 2024 Sunday Salad, LLC. All right reserved
        </div>
      </div>
    </>
  );
}
