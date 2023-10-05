import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./page/Home/Home";
import Footer from "./components/Footer/Footer";
import Signin from "./page/Signin/Signin";
import User from "./page/User/User"

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/user" element={<User/>} />
    <Route path="*" element={<Home />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
