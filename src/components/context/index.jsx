import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [status, setStatus] = useState("Search from hundreds of recipes");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setRecipeList([]);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`,
      );
      const data = await response.json();
      if (data?.data?.recipes && data?.data?.recipes.length > 0) {
        setRecipeList(data?.data?.recipes);
      } else {
        setStatus("Sorry we counld'nt find a match :(");
      }
      setTimeout(() => setLoading(false), 1000);
      setSearchParam("");
    } catch (error) {
      console.log(error);
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
        recipeList,
        status,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
