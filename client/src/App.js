import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useContext } from "react";
import { Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import UserSettings from './components/UserSettings';
import { UserContext } from './components/context/UserContext';

function App() {

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  const {user} = useContext(UserContext)

  if(user.currentUser === null){return (<h1>Loading...</h1>)}

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Switch>
          <Route path="/test">
            <h1>Test Route</h1>
          </Route>
          <Route path="/user" >
            <UserSettings/>
          </Route>
          <Route exact path="/login" >
            <LoginPage />
          </Route>
          <Route exact path="/">
            {/* <h1>Page Count: {count}</h1> */}
            <HomePage />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
