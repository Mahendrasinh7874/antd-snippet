import React, { useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import { Button } from 'antd';
import setAuthToken from "./components/config/setAuthToken";

import { actionGetUserProfile } from "./store/actions/authAction";
import './assets/scss/index.scss';
import MainLayout from './components/common/MainLayout';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { connect } from "react-redux";

const App = props => {
  const { actionGetUserProfile } = props;

  useMemo(() => {
    if (localStorage.GrandealzBackendJwtToken) {
      setAuthToken(localStorage.GrandealzBackendJwtToken);
      actionGetUserProfile();
    }
  }, [localStorage.GrandealzBackendJwtToken]);

  const RequireAuth = ({ children }) => {
    let location = useLocation();

    if (!localStorage.GrandealzBackendJwtToken) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return React.createElement(Navigate, {
        to: "/login",
        state: { from: location },
        replace: true,
      });
    }

    return children;
  };
  return (
    <Router>

      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/test"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />

          <Route path="/Login" element={<Login />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}


const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, { actionGetUserProfile })(App);
