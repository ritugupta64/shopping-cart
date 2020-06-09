import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HomePage } from "./pages/home-page/home-page";
import { ShopPage } from "./pages/shop-page/shop-page";
import { SignInAndSignUp } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

import { Header } from "./components/header/header";

import { routes } from "./routes/routes";
import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [users, setUser] = useState(null);

  useEffect(() => {
    let userRef;
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div className="App">
      <Header currentUser={users} />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.shop} component={ShopPage} />
        <Route
          path={routes.signIn}
          render={() => (users ? <Redirect to="/" /> : <SignInAndSignUp />)}
        />
      </Switch>
    </div>
  );
}

export default App;
