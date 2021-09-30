import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useState(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path='/'>
              <Header />
              <Home />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
