import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function List() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://bbqbaseback.herokuapp.com/recipes/")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="howto">
        {" "}
        <p>Just click a recipie to learn more! Feel free to submit your own!</p>
        <hr />
      </div>
      <div className="recipes-container">
        {recipes.map((recipe) => {
          return (
            <Card key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                <Card.Img variant="top" src={recipe.photo_url} />
              </Link>
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>{recipe.desc}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
