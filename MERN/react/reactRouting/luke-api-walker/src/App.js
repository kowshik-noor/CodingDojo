import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Form from './components/Form';
import Display from './components/Display';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Form></Form>

        <Switch>
          <Route path="/:cat/:id">
            <Display></Display>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
