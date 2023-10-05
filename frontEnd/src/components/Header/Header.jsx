import { Link } from "react-router-dom"
import logo from "../../assets/img/argentBankLogo.webp"
import "./header.scss"

export default function Header() {
  return (
    <header>
        <nav className="main-nav">
        <Link to="./" className="main-nav-logo">
                <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo" />
           <h1 className="sr-only">Argent Bank</h1>
        </Link>

        <Link to="./signin" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
          Sign in
        </Link>

        </nav>


    </header>
  )
}