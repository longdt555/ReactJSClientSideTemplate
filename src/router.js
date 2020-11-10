import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TopMenu from './component/core/top-menu';

import Login from "./module/account/login";

import Dashboard from "./module/dashboard";

import Overview from "./module/dashboard/overview";

import Activities from "./module/dashboard/activities";

export const routes = [
  {
    path: "/login",
    component: Login,
    isPublish: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    isPublish: false,
    routes: [
      {
        path: "/dashboard/overview",
        component: Overview,
        isPublish: false,
      },
      {
        path: "/dashboard/activities",
        component: Activities,
        isPublish: false,
      },
    ],
  },
];

export const RouteWithSubRoutes = (route) => {
  console.log(route);
  return (
    <>
      {route.isPublish ? (
        <>
          {" "}
          <Route
            path={route.path}
            render={(props) => (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
            )}
          />
        </>
      ) : (
          <>
            <TopMenu />
            <Route
              path={route.path}
              render={(props) => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
              )}
            />
          </>
        )}
    </>
  );
};
