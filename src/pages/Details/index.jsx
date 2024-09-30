import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../components/context";

export default function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleSubmit,
    searchParam,
    setSearchParam,
    setRecipesList,
  } = useContext(GlobalContext);

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
          <img
            src={recipeDetailsData?.image_url}
            alt={recipeDetailsData?.title}
          />
          <div>
            <h2>Publisher: {recipeDetailsData?.publisher}</h2>
            <h2>Ingredients:</h2>
            <ul>
              {recipeDetailsData?.ingredients?.map((item, idx) => (
                <li key={idx}>
                  {item.quantity ? `${item.quantity} ` : ""}
                  {item.unit} - {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
