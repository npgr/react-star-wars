import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ROUTES } from './routes';
import Header from './components/Header';
import Home from './pages/Home';
import CharacterList from './pages/CharacterList';
import CharacterDetail from './pages/CharacterDetail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.CHARACTERS} component={CharacterList} />
        <Route path={ROUTES.CHARACTER_DETAIL} component={CharacterDetail} />
        <Redirect to={ROUTES.HOME} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
