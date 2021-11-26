import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home, Login, Users } from "./pages";
import { Navigation, NotFound, RouteGuard } from "./components";
import { getStore } from "./store";
import { Provider } from "react-redux";

const store = getStore({
  auth: {
    user: null,
    loginError: false,
  },
  users: {
    data: null,
    status: "idle",
  },
});

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation
          links={[
            { href: "/", name: "Home" },
            { href: "/users", name: "Users" },
          ]}
          style={{
            marginBottom: 50,
          }}
        />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <RouteGuard path="/users" component={Users} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}
