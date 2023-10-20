import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import logo from "../../assets/img/argentBankLogo.webp"
import { useSelector, useDispatch } from 'react-redux';
import { setSignOut } from '../../redux/reducer/authSlice';
import "./header.scss"

export default function Header() {
  
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user); 

  const handleSignOut = () => {
    dispatch(setSignOut());
  };


  useEffect(() => {
    // deconnect si token est nul
    const token = localStorage.getItem("authToken");
    if (!token) {
      dispatch(setSignOut());
    }
  }, [dispatch]);

  return (
    <header>
        <nav className="main-nav">
        <Link to="./" className="main-nav-logo">
                <img className="main-nav-logo-image"
                src={logo} alt="Argent Bank Logo" />
           <h1 className="sr-only">Argent Bank</h1>
        </Link>

    {isAuthenticated ? (
      <div>
          <Link to="./user" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {userProfile ? userProfile.userName : "Loading..."}
        </Link>
            <Link to="./signin" onClick={handleSignOut} className="main-nav-item">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
          </div>
        ) 
        : 
        (
          <Link to="./signin" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
        </nav>
    </header>
  );
}