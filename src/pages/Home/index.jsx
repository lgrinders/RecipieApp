import { useContext } from "react";
import { GlobalContext } from "../../components/context";
import RecipeItem from "../../components/RecipeItem";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading === true) {
    return (
      <div className="min-h-screen px-10 pt-16 text-neutral-800">
        <a href="/" className="flex items-center justify-center">
          <h1 className="font-Gara text-3xl font-bold tracking-widest xl:text-[80px]">
            Sunday Salad
          </h1>
          <p className={`font-semibold sm:hidden`}>recipie app</p>
        </a>
        <div>
          <div
            className={`mx-auto flex w-[1200px] justify-center gap-5 overflow-x-hidden p-16`}
          >
            {loading ? (
              <div className="font-Play text-3xl">Loading Please Wait</div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen pt-20 text-neutral-800">
        <a href="/" className="flex items-center justify-center">
          <h1 className="font-Gara text-6xl font-bold tracking-widest xl:text-[80px]">
            Sunday Salad
          </h1>
          <p className="hidden font-semibold md:block">recipie app</p>
        </a>
        <div className="mx-auto flex max-w-[1200px] justify-center">
          <div
            className={`${recipeList.length > 0 ? "grid grid-cols-2 gap-10" : "flex justify-center"}`}
          >
            {loading ? <div>Loading Please Wait</div> : null}
            {recipeList && recipeList.length > 0 && loading === false ? (
              recipeList.map((item) => <RecipeItem item={item} />)
            ) : (
              <div>
                <p className="flex justify-center pt-20 text-center font-Play text-2xl xl:text-3xl">
                  Search from hundreds of recipes
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
