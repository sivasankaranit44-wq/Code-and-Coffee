import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Intro Section */}
      <div className="text-center mt-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700">Hey! I am</h2>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mt-2">Sivasankaran</h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I specialize in creating visually stunning and highly functional websites tailored to your company’s needs. 
          Explore my portfolio I’m confident my work will exceed your expectations. 
          Experience my services for 7 days, risk free, before making your decision.
        </p>

        {/* Hire Me Button → Redirects to Contact */}
        <Link to="/contact">
          <button className="mt-6 px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
            Hire Me
          </button>
        </Link>
      </div>

      {/* My Project and Services Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-12 mt-12 px-6">
        {/* Stats Section */}
        <div className="flex flex-col gap-8">
          <div className="border-4 rounded-xl border-purple-500 p-6 w-64 bg-white shadow-lg hover:shadow-xl transition">
            <div className="rounded-full border-2 p-6 font-bold text-white text-center bg-gradient-to-br from-purple-400 to-purple-600 text-2xl">
              6+
            </div>
            <p className="text-center font-semibold mt-3 text-gray-700">Projects Completed</p>
          </div>

          <div className="border-4 rounded-xl border-green-500 p-6 w-64 bg-white shadow-lg hover:shadow-xl transition">
            <div className="rounded-full border-2 p-6 font-bold text-white text-center bg-gradient-to-br from-green-400 to-green-600 text-2xl">
              4
            </div>
            <p className="text-center font-semibold mt-3 text-gray-700">Months of Experience</p>
          </div>
        </div>

        {/* Services Section */}
        <div className="text-center sm:text-left max-w-lg">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-800">Building Digital</h2>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-orange-500">Experience</h2>
          <p className="my-6 text-gray-600 leading-relaxed">
            I’ve attached my resume here for your reference. Feel free to explore my work and see how I can add value to your projects.
          </p>
         <a 
          href="/Sivasankaran FSWD(MERN) resume.pdf" 
          download="Sivasankaran_FSWD(MERN)_Resume.pdf"
          className="px-6 py-3 mt-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition inline-block cursor-pointer"
        >
        Download My Resume
        </a>
        </div>
      </div>
    </div>
  );
}

export default Home;