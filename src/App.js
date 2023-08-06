import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard.js";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>


        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
        </Routes>

        
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
