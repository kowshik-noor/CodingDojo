import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Players from './views/Players';


function App() {
  return (
    <BrowserRouter>
      <div><Link to="/players/list">Manage Players</Link></div>
      <Switch>
        <Route path="/players">
          <Players></Players>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
