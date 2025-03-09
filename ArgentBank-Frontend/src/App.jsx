import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../src/components/Layout/Layout'
import './styles/main.css' // import du style du projet

// code page temporaire juste pour test
function Home() {
  return <h1>Bienvenue sur Argent Bank</h1>
}

function App() {
  return (
    <Router>
     <Routes>
      <Route path="/" element={
        <Layout>
          <Home />
        </Layout>
      } />
     </Routes>
    </Router>
  )
}

export default App