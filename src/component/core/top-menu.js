import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default () => {
    return (
        <>
        <ul>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/dashboard">dashboard</Link>
            </li>
          </ul>

        </>
    )
}