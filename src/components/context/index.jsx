import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipesList, setRecipesList] = useState([]);
  const [searchStatus, setSearchStatus] = useState("");
  const [recipeDetailsData, setRecipeDetailsData] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(localStorage.getItem("favorites"));
    } catch (error) {
      console.log(error);
      currentValue = [];
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchParam("");
    try {
      setLoading(true);
      const promise = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`,
      );
      const result = await promise.json();
      if (result.data.recipes.length < 1) {
        setSearchStatus("Nothing found for that ingredient! Try another one!");
      } else {
        setSearchStatus("");
      }

      const filteredRecipes = await Promise.all(
        result.data.recipes.map(async (recipe) => {
          const img = new Image();
          img.src = recipe.image_url;
          return img.height >= 450 ? recipe : null;
        }),
      );

      const validRecipes = filteredRecipes.filter((recipe) => recipe !== null);

      setRecipesList(validRecipes);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipesList,
        setRecipesList,
        searchStatus,
        recipeDetailsData,
        setRecipeDetailsData,
        setSearchStatus,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
