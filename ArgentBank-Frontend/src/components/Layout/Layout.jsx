import PropTypes from "prop-types";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import '../../styles/main.css'

/**
 * Layout component - Structure commune à toutes les pages
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenu de la page
 */


function Layout ({children}) {
    return (
        <>
            <Header />
            <main className="main bg-dark">
                {children}
            </main>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout