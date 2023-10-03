import { Link } from "react-router-dom"
import logo from "../../assets/img/argentBankLogo.webp"

export default function Header() {
  return (
    <header>
        <nav className="menu-nav">
        <Link to="./" className="menu-logo">
                <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo" />
           <h1 className="sr-only">Argent Bank</h1>
        </Link>

        <Link to="./signin" className="menu-login">
        <i className="fa fa-user-circle"></i>
          Sign in
        </Link>

        </nav>


    </header>
  )
}