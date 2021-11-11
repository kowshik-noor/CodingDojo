import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Main from './views/Main';
import Detail from './views/Detail';

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
