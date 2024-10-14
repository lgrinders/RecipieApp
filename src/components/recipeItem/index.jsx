import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context";

export default function RecipeItem({ recipeListItem }) {
  const [loremText, setLoremText] = useState("");
  const { recipesList } = useContext(GlobalContext);

  const shortenTitle = (title) =>
    title.length > 20 ? title.slice(0, 40) + "..." : title;

  const randomLorem = () => {
    const lorem =
      "Lorem ipsum dolor, si amet consectetur adipisicing elit. Sed asperiores nulla recusandae error aliquid modi sapiente necessitatibus, explicabo adipisci. Quod pariatur provident repellendus iure aliquid culpa voluptates quidem possimus atque?";
    const words = Math.floor(Math.random() * 15) + 10;
    return lorem.split(" ").slice(0, words).join(" ") + ".";
  };

  useEffect(() => {
    setLoremText(randomLorem());
  }, [recipesList]);

  return (
    <Link
      className="flex max-w-[400px] flex-col gap-2 bg-white pb-12"
      to={`/recipe-item/${recipeListItem?.id}`}
    >
      <h2 className="font-bold text-emerald-900 underline">
        {shortenTitle(recipeListItem.title)}
      </h2>
      <p className="h-24 font-Bodoni">{loremText}</p>
      <img
        src={recipeListItem.image_url}
        alt={recipeListItem.image_url}
        className="flex h-[500px] items-center justify-center bg-stone-800 object-cover text-center"
      />
    </Link>
  );
}
