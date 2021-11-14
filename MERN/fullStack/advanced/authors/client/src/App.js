import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Main from './views/Main';
import Update from './views/Update';
import Create from './views/Create';

function App() {
  return (
    <BrowserRouter>
      <h1>Favorite Authors</h1>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route exact path="/new">
          <Create></Create>
        </Route>
        <Route exact path="/edit/:id">
          <Update></Update>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
