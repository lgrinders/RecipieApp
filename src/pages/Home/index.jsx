import { useContext } from "react";
import { GlobalContext } from "../../components/context";
import RecipeItem from "../../components/RecipeItem";

export default function Home() {
  const { recipeList, loading, status } = useContext(GlobalContext);

  if (loading === true) {
    return (
      <div className="min-h-screen pt-20 text-neutral-800">
        <a href="/" className="flex items-center justify-center py-20">
          <h1 className="font-Gara text-6xl font-bold tracking-widest xl:text-[80px]">
            Sunday Salad
          </h1>
          <p className="hidden font-semibold md:block">recipie app</p>
        </a>
        <div className="mx-auto flex max-w-[1200px] justify-center">
          <p className="flex justify-center pt-20 text-center font-Play text-2xl xl:text-3xl">
            Loading Results
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen pt-20 text-neutral-800">
        <a href="/" className="flex items-center justify-center py-20">
          <h1 className="font-Gara text-6xl font-bold tracking-widest xl:text-[80px]">
            Sunday Salad
          </h1>
          <p className="hidden font-semibold md:block">recipie app</p>
        </a>
        <div className="mx-auto flex max-w-[1200px] justify-center">
          <div
            className={`${recipeList.length > 0 ? "grid grid-cols-1 gap-10 xl:grid-cols-2" : "flex justify-center"}`}
          >
            {recipeList && recipeList.length > 0 && loading === false ? (
              recipeList.map((item) => <RecipeItem item={item} />)
            ) : (
              <div>
                <p className="flex justify-center pt-20 text-center font-Play text-2xl xl:text-3xl">
                  {status}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
