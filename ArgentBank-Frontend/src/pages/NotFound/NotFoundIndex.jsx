import { Link } from 'react-router-dom'

/**
 * Page 404 - Not Found
 * Affichée quand une route n'existe pas
 */

function NotFound() {
  return (
    <main className="main bg-dark">
      <section className="not-found-content">
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link to="/" className="button-link">
          Return to Home
        </Link>
      </section>
    </main>
  )
}

export default NotFound