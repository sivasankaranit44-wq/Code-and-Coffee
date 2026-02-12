import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import auth from "../firebase";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="flex justify-center gap-6 bg-brown-700 py-4 shadow-lg">
      {/* Show Signup only if user is NOT logged in */}
      {!user && (
        <Link to="/signup">
          <button className="bg-orange-500 text-white px-8 py-2 rounded-lg shadow-md hover:bg-amber-700 transition font-medium">
            Signup
          </button>
        </Link>
      )}

      <Link to="/" className="text-black hover:text-amber-700 font-medium">Home</Link>
      <Link to="/blogs" className="text-black hover:text-amber-700 font-medium">Blogs</Link>
      <Link to="/contact" className="text-black hover:text-amber-700 font-medium">Contact</Link>

      {user ? (
        <button
          onClick={handleLogout}
          className="bg-orange-500 text-white px-8 py-2 rounded-lg shadow-md hover:bg-amber-700 transition font-medium"
        >
          Logout
        </button>
      ) : (
        <Link to="/login">
          <button className="bg-orange-500 text-white px-8 py-2 rounded-lg shadow-md hover:bg-amber-700 transition font-medium">
            Login
          </button>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;