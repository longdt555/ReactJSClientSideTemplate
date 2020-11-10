import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { routes, RouteWithSubRoutes } from './router';
import './App.scss'
function App() {
  return (
    <div className="app">
      <h1>Welcome to react hook</h1>
      <Router>
        <div>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
