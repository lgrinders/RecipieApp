import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../components/context";

export default function AllRecipes({}) {
  const {
    setRecipesList,
    searchStatus,
    setSearchParam,
    setSearchStatus,
    recipesList,
    handleSubmit,
    searchParam,
  } = useContext(GlobalContext);
  const [allRecipes, setAllRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllRecipes = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://forkify-api.herokuapp.com/api/v2/recipes",
        );
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchAllRecipes();
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}
