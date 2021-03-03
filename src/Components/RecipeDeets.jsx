import React, { useState, useEffect } from "react";

export default function RecipeDeets(props) {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(
      `https://bbqbaseback.herokuapp.com/recipes/${props.match.params.id}?format=json`
    )
      .then((res) => res.json())
      .then((res) => setRecipe(res))
      .catch(console.error);
  }, [props.match.params.id]);

  if (!recipe) {
    return <h2>loading...</h2>;
  }

  return (
    <div className="details-container">
      <img src={recipe.photo_url} alt={recipe.name} />
      <div className="details">
        <div className="details-title">
          <h1>{recipe.name}</h1>
        </div>
        <h4>by: {recipe.credit}</h4>
        <br />
        <h3>{recipe.desc}</h3>
        <p>
          <b>
            {" "}
            uses: {recipe.meat_cut} | cooktime: {recipe.cooktime}
          </b>
        </p>
        <hr />
        <div className="detail-instructions">
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
}
