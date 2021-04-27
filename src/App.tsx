import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ROUTES } from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CharacterList from './pages/CharacterList';
import CharacterDetail from './pages/CharacterDetail';
import useSavedCharacters from './hooks/useSavedCharacters';

function App() {
  const [savedCharacters, saveCharacter] = useSavedCharacters();
  return (
    <BrowserRouter>
      <Header savedCharacters={savedCharacters} />
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.CHARACTERS} component={CharacterList} />
        <Route
          path={ROUTES.CHARACTER_DETAIL}
          render={(props) => (
            // @ts-ignore
            <CharacterDetail {...props} saveCharacter={saveCharacter} />
          )}
        />
        <Redirect to={ROUTES.HOME} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
