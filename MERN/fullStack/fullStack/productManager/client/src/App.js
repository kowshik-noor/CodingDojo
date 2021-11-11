import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route exact path="/:id">
          <Detail></Detail>
        </Route>
        <Route exact path="/:id/edit">
          <Update></Update>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
