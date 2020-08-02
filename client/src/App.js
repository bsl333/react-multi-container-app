import React from 'react';
import OtherPage from './OtherPage';
import Fib from './Fib';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <header className="App-header">
        <Link to="/" className="App-link">
          Home
        </Link>
        <Link to="/otherpage" className="App-link">
          Other Page
        </Link>
      </header>
      <div className="App-body">
        <Route exact path="/" component={Fib} />
        <Route exact path="/otherpage" component={OtherPage} />
      </div>
    </Router>
  );
}

export default App;
