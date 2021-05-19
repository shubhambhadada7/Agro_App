import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './Home'
import ContactUs from './ContactUs'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';



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
