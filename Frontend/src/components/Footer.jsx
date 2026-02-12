import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side */}
        <p className="text-sm">
          © 2026 Code & Coffee | Made with ❤️ by 
          <span className="text-orange-400"> Sivasankaran G</span>
        </p>

        {/* Right side */}
        <div className="flex gap-4 mt-4 md:mt-0">
         <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sivasankaranit44@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
            >
            Email
            </a>
          <a
            href="https://www.linkedin.com/in/sivasankaran-g"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://sivasankaranit44-wq.github.io/Portfolio-deployment/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;