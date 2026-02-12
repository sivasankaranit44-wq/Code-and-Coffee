import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth"
import auth from "../firebase"
function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // checking password
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password).then((res)=>{
      console.log(res)  
    }).catch(()=>{
      console.log("Cannot create user")
    })

    // registration process
    console.log("User registered:", { email, password });

    // After registration redirect to Login page
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Signup :)
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
            Create an Account
          </h2>

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

          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {error && (
              <p className="text-red-500 text-sm mt-1 font-medium">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-4 bg-orange-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-amber-700 hover:scale-105 transition"
          >
            Register
          </button>
        </form>

        <p
          onClick={() => navigate("/login")}
          className="text-center text-gray-600 mt-4 cursor-pointer hover:text-amber-700 transition"
        >
          Already a user? <span className="font-medium">Login here!</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;