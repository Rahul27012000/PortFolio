import React from 'react';
import {Switch,Route, Redirect,HashRouter} from 'react-router-dom';
import history from '../src/history';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Service from './Service';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
import Projects from './Projects';

const App = () => {
    return(
        <>
         <HashRouter history={history}>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/project" component={Projects}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to ='/' />
        </Switch>
        <Footer/>
        </HashRouter>
        </>
    )
   
}
export default App;