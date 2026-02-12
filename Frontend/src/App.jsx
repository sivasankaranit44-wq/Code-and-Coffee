import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-center gap-4 py-6 bg-gradient-to-r from-amber-100 to-orange-50 shadow-md">
        <img src={logo} alt="Code & Coffee Logo" className="h-12 w-auto" />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brown-700">Code & Coffee</h1>
          <p className="text-lg italic text-gray-600">Stories and scripts, brewed together</p>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <div className="max-w-4xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;