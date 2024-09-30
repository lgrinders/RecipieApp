import saladImage from "../../assets/images/saladImage.jpg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import couple from "../../assets/images/couple.jpeg";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";
import { GlobalContext } from "../context";
import { useContext } from "react";

export default function DefaultHomeScreen() {
  const { searchStatus } = useContext(GlobalContext);

  return (
    <>
      <div className="flex max-w-[1000px] flex-col items-center px-5">
        <div
          className={`${searchStatus === "" ? "hidden" : "block"} text-Stone-700 pb-5 font-Play text-2xl font-bold`}
        >
          {searchStatus}
        </div>
        <div className="flex">
          <div className="flex w-full flex-col gap-3 border-b border-iconGray p-5 text-center md:w-2/3 md:border-r">
            <h2 className="text-2xl font-semibold text-stone-700">
              Salad Recipe of the Week
            </h2>
            <p className="font-Play">
              We all love a big beautiful salad. Check this delicious one out
              thats topped with a freshly made dressing, croutons, salty bacon
              and enough greens to fill your tummy.
            </p>
          </div>
          <div className="hidden items-center justify-center border-b border-iconGray p-5 md:flex md:w-1/3">
            <h2 className="text-center font-Play text-2xl">
              A food blog
              <br /> with salad and style.
            </h2>
          </div>
        </div>
        <div className="flex">
          <div className="w-full border-iconGray p-5 md:w-2/3 md:border-r">
            <img src={saladImage} className="" alt="" />
          </div>
          <div className="hidden items-center gap-12 p-5 md:flex md:w-1/3 md:flex-col">
            <h2 className="text-center font-Play text-3xl font-bold text-accentOlive">
              SEARCH SALADS
            </h2>
            <p className="text-center font-Basker text-[10px] font-semibold tracking-widest text-stone-700">
              BREAKFAST / MAIN-DISH / DESSERT / VEGAN / GLUTEN FREE
            </p>
            <button className="flex items-center justify-center gap-2 p-2 font-Bodoni font-bold text-stone-700">
              <FaChevronRight /> <FaChevronRight /> ALL RECIPES{" "}
              <FaChevronLeft /> <FaChevronLeft />
            </button>
            <img
              src={couple}
              alt="A couple cooking together"
              className="h-58 w-60 object-cover"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-center font-Basker text-lg font-bold text-stone-700">
                Hello, we are Julie and Landon
              </h2>
              <p className="text-center font-Basker">
                We are a family owned and created bussiness that loves to give
                you healthy options for every meal. We take pride in our ability
                to help put delicious and nutritious food on your table. Thank
                you for letting us be a part of your journey.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-Play text-lg font-bold text-stone-700">
                Check out our socials!
              </h2>
              <div className="flex justify-center gap-5 text-stone-700">
                <a href="">
                  <FaInstagram size={24} />
                </a>
                <a href="">
                  <FaPinterest size={24} />
                </a>
                <a href="">
                  <FaTwitter size={24} />
                </a>
                <a href="">
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
