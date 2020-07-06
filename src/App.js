import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Categories from './Categories';
import Quizzs from './Quizzs'
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Bienvenue dans ce multi-quizz !</h1>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/categories" component={Categories} />
          {/* <Route path="/categories/" component={} /> */}
          <Route path="/quizzs" component={Quizzs} />

       
        </Switch>
        </div>
    </Router>
  );
}

export default App;
