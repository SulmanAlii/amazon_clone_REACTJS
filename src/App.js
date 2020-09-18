import React,{useEffect} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from '../src/Components/Nav';
import Banner from '../src/Components/Banner';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider';
import { auth } from './Components/firebase';




function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const authen = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //loged in
        dispatch({
          type: "SET_USER",
          user : authUser,
        })
      } else {
        //logen out
          dispatch({
            type: "SET_USER",
            user : null,
          })
      }
    })

    return () => {
      authen();
    }

  },[])

  console.log(user);

  return (
    <BrowserRouter>
       <div className="App">
        <Switch>
          <Route exact path="/">
            <Nav />
            <Banner />
          </Route>
          <Route exact path="/checkout">
            <Nav />
            <Checkout /> 
          </Route>
          <Route exact path="/login">
            <Login /> 
          </Route>

      </Switch>

     
      </div>
    </BrowserRouter>
   
  );
}

export default App;
