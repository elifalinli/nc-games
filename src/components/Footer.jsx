import { Link } from "react-router-dom"

export const FooterBackToMain = () => {
    return(
        <footer className="footer-button">
            <Link to={'/'}>
            <button>Go to Main!</button>
            </Link>
            
        </footer>
    )
}