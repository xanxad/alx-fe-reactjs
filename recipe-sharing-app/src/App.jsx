import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <RecipeList />
          <AddRecipeForm />
        </Route>
        <Route path="/recipe/:id" exact>
          {({ match }) => (
            <RecipeDetails recipeId={parseInt(match.params.id)} />
          )}
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
