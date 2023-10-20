import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import logo from "../../assets/img/argentBankLogo.webp"
import { useSelector, useDispatch } from 'react-redux';
import { setSignOut } from '../../redux/reducer/authSlice';

import "./header.scss"

export default function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(setSignOut());
  };

  const [userProfile, setUserProfile] = useState(null);

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
        <Link to="./" onClick={handleSignOut} className="main-nav-logo">
                <img className="main-nav-logo-image"
                src={logo} alt="Argent Bank Logo" />
           <h1 className="sr-only">Argent Bank</h1>
        </Link>
    {isAuthenticated ? (
          <Link to="./signin" onClick={handleSignOut} className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {userProfile ? `${userProfile.firstName}` : "koi?"}
            <i className="fa fa-sign-out"></i>
            
            Sign Out
          </Link>
        ) : (
          <Link to="./signin" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
        </nav>
    </header>
  );
}