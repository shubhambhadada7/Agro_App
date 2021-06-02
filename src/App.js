// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './Home'
import KrishiCharcha from './KrishiCharcha'
import ContactUs from './ContactUs'
import KCBlogDetails from './KCBlogDetails'
import NewBlog from './NewBlog'
import Blogs from './Blogs'
import Services from './Services'
// import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee, faThumbsUp)


function App() {
  return (
    <Router>
      <div className="navFix">
      <Header/>
      </div>

      
      <div className="App">
          <Switch>
            <Route exact  path="/">
              <Home/>
            </Route>
            <Route exact  path="/ContactUs">
              <ContactUs/>
            </Route>
            <Route exact  path="/Services">
              <Services/>
            </Route>
            <Route exact  path="/Blogs">
              <Blogs/>
            </Route>
            <Route exact  path="/KrishiCharcha">
              <KrishiCharcha/>
            </Route>
            <Route exact path="/KrishiCharcha/:id">
              <KCBlogDetails/>
            </Route>
            <Route exact path="/NewBlog">
              <NewBlog/>
            </Route>
            {/* <Route path="*">
              <NotFound/>
            </Route> */}
          </Switch>
      </div>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
