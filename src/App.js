import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './containers/Home';
import About from './containers/About';
import Footer from './components/Footer';

const App = () => {

    return (
        <Router>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Footer />
        </Router>
    );
}

export default App;

 