import { useContext } from "react";
import { GlobalContext } from "../../components/context";
import RecipeItem from "../../components/RecipeItem";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  return (
    <>
      <div className="min-h-screen px-10 pt-10">
        <a href="/" className="flex items-center justify-center">
          <h1 className="text-[80px] font-bold tracking-widest">
            Sunday Salad
          </h1>
          <p className="font-semibold">recipie app</p>
        </a>
        <div>
          <div
            className={`mx-auto grid w-[1200px] grid-cols-2 gap-5 overflow-x-hidden p-16`}
          >
            {loading ? <div>Loading Please Wait</div> : null}
            {recipeList && recipeList.length > 0 ? (
              recipeList.map((item) => <RecipeItem item={item} />)
            ) : (
              <div>
                <p className="text-center text-4xl">
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
