import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth"
import auth from "../firebase"
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password).then((res)=>{
      navigate("/");
    }).catch(()=>{
      console.log("cannot Login")
    })

    // simulating login process
    console.log("User logged in:", { email, password });

    // after Login redirect to home
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Login :)
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-orange-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-amber-700 hover:scale-105 transition"
          >
            Login
          </button>
        </form>

        <p
          onClick={() => navigate("/signup")}
          className="text-center text-gray-600 mt-4 cursor-pointer hover:text-amber-700 transition"
        >
          Not having an account?{" "}
          <span className="font-medium">Register here</span>
        </p>
      </div>
    </div>
  );
}

export default Login;