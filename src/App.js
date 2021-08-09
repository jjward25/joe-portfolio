import Home from './desktop/home'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path='/' exact component={Home}></Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
