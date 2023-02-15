import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './componentes/LandingPage/landingPage';
import Home from './componentes/Home/home';
import PokemonDetail from './componentes/Detail/detail';
import PokeCreate from './componentes/PokeCreate/pokeCreate';
import Update from './componentes/Update/update';
import Favourite from './componentes/Favourite/favourite';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <h1>Henry Pokemon</h1> */}
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route path="/home/:id" component={PokemonDetail}></Route>
        <Route exact path="/pokemons" component={PokeCreate}></Route>
        <Route path="/pokemons/:id" component={Update}></Route>
        <Route exact path="/favourite" component={Favourite}></Route>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
