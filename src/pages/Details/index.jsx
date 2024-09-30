import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../components/context";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleSubmit,
    searchParam,
    setSearchParam,
    setRecipesList,
    favorites,
    setFavorites,
  } = useContext(GlobalContext);
  const [isStarHovered, setIsStarHovered] = useState(false);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`,
      );
      const data = await response.json();
      if (data?.data) {
        setRecipeDetailsData(data?.data.recipe);
      }
    };
    getRecipeDetails();
  }, [id]);

  const handleFavorites = () => {
    let cpyFavs = [...favorites];
    let idx = cpyFavs.indexOf(recipeDetailsData);
    idx === -1
      ? (cpyFavs = [...cpyFavs, recipeDetailsData])
      : cpyFavs.splice(idx, 1);
    setFavorites(cpyFavs);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-5 overflow-x-hidden py-32">
        <Link
          onClick={() => {
            setRecipesList([]), setRecipeDetailsData([]);
          }}
          className="px-8 text-center font-Bodoni text-7xl font-bold leading-[80px] tracking-[10px] text-stone-700"
          to={`/`}
        >
          SUNDAY SALAD
        </Link>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="mb-10 h-8 w-[300px] rounded-sm border border-black px-2 text-center text-[10px] font-semibold tracking-[4px] outline-none placeholder:text-center placeholder:text-neutral-500 md:w-[550px]"
            placeholder="SEARCH FOR AN INGREDIENT"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
          />
        </form>

        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="font-Basker text-4xl font-bold text-stone-700">
            {recipeDetailsData?.title}
          </h2>

          <div className="flex">
            <div className="flex flex-col gap-5 border-r border-t border-iconGray p-5">
              <img
                src={recipeDetailsData?.image_url}
                alt={recipeDetailsData?.title}
              />
            </div>
            <div className="border-t border-iconGray p-5">
              <div
                onMouseEnter={() => setIsStarHovered(true)}
                onMouseLeave={() => setIsStarHovered(false)}
                className="text-yellow-500"
                onClick={handleFavorites}
              >
                {isStarHovered || favorites.includes(recipeDetailsData) ? (
                  <FaStar size={50} />
                ) : (
                  <FaRegStar size={50} />
                )}
              </div>
            </div>
          </div>
          <div className="flex max-w-[400px] flex-col gap-5 text-lg">
            <div className="flex gap-2">
              <h2 className="font-bold">Publisher:</h2>{" "}
              {recipeDetailsData?.publisher}
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Link to recipe source:</p>
              <a href={recipeDetailsData?.source_url} className="italic">
                {recipeDetailsData?.source_url}
              </a>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-bold">Ingredients and info:</h2>
              <ul className="flex flex-col gap-2">
                {recipeDetailsData?.ingredients?.map((item, idx) => (
                  <li key={idx}>
                    {item.quantity} {item.unit} {item.description}
                  </li>
                ))}
              </ul>
              <div className="flex gap-2">
                <p className="font-bold">Servings:</p>{" "}
                {recipeDetailsData?.servings}
              </div>
              <div className="flex gap-2">
                <p className="font-bold">Cooking Time:</p>{" "}
                {recipeDetailsData?.cooking_time}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
