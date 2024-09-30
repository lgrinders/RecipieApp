import { useContext } from "react";
import { GlobalContext } from "../../components/context";
import RecipeItem from "../../components/recipeItem/index.jsx";
import DefaultHomeScreen from "../../components/default-home-screen/index.jsx";

export default function Home() {
  const {
    searchParam,
    setSearchParam,
    handleSubmit,
    recipesList,
    setRecipesList,
    loading,
    searchStatus,
    setSearchStatus,
  } = useContext(GlobalContext);

  return (
    <>
      <div className="flex flex-col items-center gap-5 overflow-x-hidden py-32">
        <button
          onClick={() => {
            setRecipesList([]), setSearchStatus("");
          }}
          className="px-8 text-center font-Bodoni text-7xl font-bold leading-[80px] tracking-[10px] text-stone-700"
        >
          SUNDAY SALAD
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="mb-10 h-8 w-[300px] rounded-sm border border-black px-2 text-center text-[10px] font-semibold tracking-[4px] outline-none placeholder:text-center placeholder:text-neutral-500 md:w-[550px]"
            placeholder="SEARCH FOR AN INGREDIENT"
            value={searchParam}
            onChange={(e) => {
              setSearchParam(e.target.value);
            }}
          />
        </form>

        {recipesList?.length > 0 ? (
          <div className="flex w-screen items-center justify-center">
            {loading || searchStatus !== "" ? (
              <div className="flex h-20 items-center justify-center px-5 py-5 text-center font-Play text-2xl italic">
                {searchStatus !== "" ? searchStatus : "Loading Please Wait"}
              </div>
            ) : (
              <div className="grid gap-3 px-10 py-3 md:grid-cols-2 md:px-20 xl:grid-cols-3">
                {recipesList?.map((recipeListItem, idx) => {
                  return (
                    <RecipeItem recipeListItem={recipeListItem} key={idx} />
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <DefaultHomeScreen />
        )}
      </div>
    </>
  );
}
