import React, { useEffect, useState, Fragment } from 'react';
import { Recipe } from './Recipe';
import "bootstrap/dist/css/bootstrap.min.css";
import Search from 'react-ionicons/lib/MdSearch';
import './App.css';

function App(props) {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Capsicum');

  useEffect(() => {
    const APP_ID = "5e28b79f";
    const APP_KEY = "b31cd079339c519b1c60a1c805b0067c";
    const APP_URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const getRecipe = async () => {
      const response = await fetch(APP_URL);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits)
    }
    getRecipe();
  }, [query]);

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mx-auto my-5">
            <form onSubmit={getSearch} className="search-form">
              <label className="sr-only" forhtml="inlineFormInputGroupUsername">Search Recipe</label>
              <div className="input-group">
                <input type="text" autoComplete="off" className="form-control" value={search} onChange={updateSearch} id="inlineFormInputGroupUsername" placeholder="Search Recipe" />
                <div className="input-group-prepend">
                  <button type="submit" className="input-group-text " ><Search color="#494949" beat={true} /></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card-columns ">
            {recipes.map((recipe, i) => (
              <Recipe key={i} title={recipe.recipe.label} image={recipe.recipe.image} calories={recipe.recipe.calories} ingredients={recipe.recipe.ingredientLines} totalTime={recipe.recipe.totalTime} totalWeight={recipe.recipe.totalWeight} />
            ))}
            </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
