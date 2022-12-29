import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/wizard' component= {Home} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
