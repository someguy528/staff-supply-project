import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/test">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/">
            <h1>Page Count: {count}</h1>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
