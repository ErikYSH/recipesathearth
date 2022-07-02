import { Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Layout from './components/Layout/Layout';
import{BrowserRoute,Route} from 'react-router-dom'
import AllRecipes from './pages/AllRecipes/AllRecipes';
import Recipes from './pages/MyRecipes/Recipes';
import ShowRecipesPage from './pages/ShowRecipesPage/ShowRecipePage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr style={{color:"black"}}></hr>
    <Routes>
    <Route   path='/' element={<Layout  />}></Route>
    <Route  path='/AllRecipes' element={<AllRecipes />}></Route>
    <Route path='/Recipes' element={<Recipes />}></Route>
    <Route path='/ShowRecipe' element= {<ShowRecipesPage />}> </Route>
    </Routes>
    </div>
  );
}

export default App;
