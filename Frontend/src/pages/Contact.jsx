import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 px-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Contact Me!
        </h1>

        <form className="flex flex-col gap-4">
          {/* Form fields */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-600 mb-1">Name:</label>
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600 mb-1">Email:</label>
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="company" className="text-gray-600 mb-1">Company:</label>
            <input
              type="text"
              placeholder="Your Company"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="contact" className="text-gray-600 mb-1">Contact Number:</label>
            <input
              type="text"
              placeholder="Your Contact Number"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-600 mb-1">Message:</label>
            <textarea
              placeholder="Your Message or brief about your project"
              rows="4"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={() => navigate("/")}
            className="mt-4 bg-orange-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-amber-700 hover:scale-105 transition"
          >
            Submit
          </button>
        </form>

        {/* Extra contact info */}
        <div className="text-center mt-6 text-gray-600">
          <p>
            You can also connect with me on:
            <br />
            <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sivasankaranit44@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
            >
            Email 
            </a>

          </p>
          <p className="mt-2">
            <a
              href="https://www.linkedin.com/in/sivasankaran-g"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline"
            >
            LinkedIn 
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;