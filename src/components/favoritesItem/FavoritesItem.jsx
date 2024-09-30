import { Link } from "react-router-dom";

export default function FavoritesItem({ favoritesItem }) {
  const shortenTitle = (title) =>
    title.length > 20 ? title.slice(0, 40) + "..." : title;

  return (
    <Link
      className="flex flex-col items-center gap-2 bg-white p-5 shadow-xl"
      to={`/recipe-item/${favoritesItem?.id}`}
    >
      <h2 className="font-bold text-emerald-900 hover:text-emerald-700 underline">
        {shortenTitle(favoritesItem.title)}
      </h2>
      <img
        src={favoritesItem.image_url}
        alt={favoritesItem.image_url}
        className="flex h-52 w-52 items-center justify-center bg-stone-800 object-cover text-center"
      />
    </Link>
  );
}
