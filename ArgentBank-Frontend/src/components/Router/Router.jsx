import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutesIndex";

import Layout from "../Layout/Layout";
import Home from "../../pages/Home/HomeIndex";
import NotFound from "../../pages/NotFound/NotFoundIndex";
import Login from "../../pages/Login/LoginIndex";
import User from "../../pages/User/UserIndex";



/**
 * RouterComponent - Composant de routage
 * Rend les routes de l'application
 * @returns {JSX.Element} - Composant de routage
 */

const RouterComponent = () => {
return (
<Router>
  <Routes>
    <Route
      path="/"
       element={
         <Layout>
            <Home />
          </Layout>
          }
    />
    <Route
      path="/login"
      element={
        <Layout>
          <Login />
        </Layout>
      }
    />
    <Route
      path="/user"
      element={
        <Layout>
          <ProtectedRoutes>
            <User />
          </ProtectedRoutes>
        </Layout>
      }
    />
    <Route
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
</Router>
)};

export default RouterComponent;