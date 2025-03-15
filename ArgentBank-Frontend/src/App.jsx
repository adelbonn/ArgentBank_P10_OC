import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../src/components/Layout/Layout'
import Home from './pages/Home/HomeIndex'
import NotFound from './pages/NotFound/NotFoundIndex'
import Login from './pages/Login/LoginIndex'
import User from './pages/User/UserIndex'

import './styles/main.css' // import du style du projet

/***
 * composant principal de l'appli
 * Gère le routage et le Layout
 */

function App() {
  return (
    <Router>
     <Routes>

      <Route path="/" element={
        <Layout>
          <Home />
        </Layout>
      } />
      <Route path="/login" element={
        <Layout>
          <Login />
        </Layout>
      } />
      <Route path="*" element={
        <Layout>
          <NotFound />
        </Layout>
      } />

      <Route path="/user" element={
        <Layout>
          <User />
        </Layout>
      } />
     </Routes>
    </Router>
  )
}

export default App