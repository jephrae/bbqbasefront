// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../img/bbqbaselogo.png";

export default function Headers() {
  const history = useHistory();

  return (
    <header>
      <h1 className="title">
        <Link to={"/recipes"}>
          <img src={Logo} alt="THE BBQ BASE LOGO"></img>
        </Link>
        {"\n"}
      </h1>

      <Button onClick={() => history.push("/recipes/new")}>Add Recipe</Button>
    </header>
  );
}
