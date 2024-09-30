import { useContext } from "react";
import { GlobalContext } from "../../components/context";
import FavoritesItem from "../../components/favoritesItem/FavoritesItem";

export default function Favorites() {
  const { favorites, setFavorites, searchParam } = useContext(GlobalContext);

  console.log(favorites);

  return (
    <>
      <div className="flex min-h-[800px] flex-col items-center gap-5 overflow-x-hidden py-32">
        <button
          onClick={() => {
            setRecipesList([]), setSearchStatus("");
          }}
          className="px-8 text-center font-Bodoni text-7xl font-bold leading-[80px] tracking-[10px] text-stone-700"
        >
          SUNDAY SALAD
        </button>

        <div className="flex flex-col gap-5 xl:w-[1200px]">
          <div className="font-Bodoni text-4xl font-bold text-stone-700">
            Favorites
          </div>

          <div className="grid gap-3 px-10 py-3 md:grid-cols-2 md:px-20 xl:grid-cols-3">
            {favorites?.map((favoritesItem, idx) => {
              return <FavoritesItem favoritesItem={favoritesItem} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
