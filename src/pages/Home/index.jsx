import { useContext } from "react";
import { GlobalContext } from "../../components/context";
import { Link } from "react-router-dom";
import RecipeItem from "../../components/recipeItem/index.jsx";

export default function Home() {
  const {
    searchParam,
    setSearchParam,
    handleSubmit,
    recipesList,
    setRecipesList,
    loading,
  } = useContext(GlobalContext);

  console.log(recipesList);

  return (
    <>
      <div className="flex min-h-screen flex-col items-center gap-5 overflow-x-hidden pb-10 pt-32">
        <button
          onClick={() => setRecipesList([])}
          className="px-8 text-center font-Bodoni text-7xl font-bold leading-[80px] tracking-[10px] text-stone-800"
        >
          SUNDAY SALAD
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="mb-10 h-8 w-[300px] rounded-sm border border-black px-2 text-center text-[10px] font-semibold tracking-[4px] outline-none placeholder:text-center placeholder:text-neutral-500 md:w-[550px]"
            placeholder="SEARCH FOR AN INGREDIENT"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
          />
        </form>
        <div className="flex w-screen items-center justify-center">
          {loading ? (
            <div className="flex h-20 items-center justify-center py-5 font-Play text-3xl italic">
              loading please wait
            </div>
          ) : (
            <div className="grid gap-3 px-10 py-3 md:grid-cols-2 md:px-20 xl:grid-cols-3">
              {recipesList.map((recipeListItem, idx) => {
                return <RecipeItem recipeListItem={recipeListItem} key={idx} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
