import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Testimonials from './pages/testimonials';
import ScrollToTop from './components/scroll';

function App() {
  return (

    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route path='/' exact component={Home}></Route>
              <Route path='/about' exact component={About}></Route>
              <Route path='/portfolio' exact component={Testimonials}></Route>

            </Switch>
          </header>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
