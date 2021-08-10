import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Experience from './components/experience';
import Services from './components/services';
import Testimonials from './components/testimonials';

function App() {
  return (

    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path='/' exact component={Home}></Route>

            <Route path='/about' exact component={About}></Route>
            <Route path='/services' exact component={Services}></Route>
            <Route path='/experience' exact component={Experience}></Route>
            <Route path='/portfolio' exact component={Testimonials}></Route>

          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
