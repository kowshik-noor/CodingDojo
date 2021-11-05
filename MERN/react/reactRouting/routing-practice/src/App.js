import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Home from './components/Home';
import Number from './components/Number';
import StyledMessage from './components/StyledMessage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/:msg">
          <Number></Number>
        </Route>
        <Route exact
          path="/:smsg/:txtClr/:bgClr">
          <StyledMessage></StyledMessage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
