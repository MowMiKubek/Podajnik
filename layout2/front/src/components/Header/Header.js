import Navbar from './Navbar/Navbar.js'
import Searchbar from './Searchbar/Searchbar.js'

export default function Header(props) {
    return (
        <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
            </a>
    
            <Navbar />
            <Searchbar />

          </div>
        </div>
      </header>
    )
}