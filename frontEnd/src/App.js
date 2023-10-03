import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./page/Home/Home"
import Footer from "./components/Footer/Footer"
import Signin from "./page/Signin/Signin"

import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="*" element={<Home />} />
    </Routes>
    <Footer />

    </div>
  );
}

export default App;
