import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Farm from './Farm'
import Blog from './Blog'
import Product from './Product'
import Recipes from './Recipes'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
          <div className="middle-wrapper">
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About} />
            <Route path="/farm" exact component={Farm}/>
            <Route path="/blog" exact component={Blog} />
            <Route path="/product" exact component={Product}/>
            <Route path="/recipes" exact component={Recipes}/>
            <Route path="/contact" exact component={Contact}/>
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
