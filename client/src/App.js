import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';

function App() {

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Switch>
          <Route path="/test">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/">
            {/* <h1>Page Count: {count}</h1> */}
            <HomePage />
          </Route>
          <Route exact path="/login" >
            <LoginPage />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
