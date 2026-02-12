import { useState, useEffect } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth"; 
import Footer from "../components/Footer";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [userUid, setUserUid] = useState(null);

  // Your admin UID
  const ADMIN_UID = "smSTOBlWfRhR1woRbRh28a9zuZf2";

  // Use Render backend URL and I could just use API_URL through out the code
  const API_URL = "https://code-and-coffee-1.onrender.com/api";

  useEffect(() => {
    window.scrollTo(0, 0);

    // Get login id
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserUid(user.uid);
      } else {
        setUserUid(null);
      }
    });

    axios.get(`${API_URL}/blogs`)
      .then((res) => setBlogs(res.data))
      .catch(() => console.log("Error fetching data"));

    return () => unsubscribe();
  }, []);

  const handleLike = async (blog_id) => {
    try {
      const response = await axios.patch(`${API_URL}/blogs/like/${blog_id}`);
      if (response.status === 200) {
        const res = await axios.get(`${API_URL}/blogs`);
        setBlogs(res.data);
      }
    } catch (error) {
      console.error("Error liking the blog post:", error);
    }
  };

  const handleNewBlogSubmit = async (event) => {
    event.preventDefault();
    const today = new Date();
    const date = today.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

    const likes = 0;

    try {
      // blog creation is only allowed for admin
      await axios.post(`${API_URL}/blogs`, { 
        newTitle, 
        date, 
        newContent, 
        likes, 
        uid: userUid 
      });

      const res = await axios.get(`${API_URL}/blogs`);
      setBlogs(res.data);

      setNewTitle("");
      setNewContent("");
    } catch (error) {
      console.error("Error adding blog:", error.response?.data || error.message);
    }
  };

  return (
    <div className="blog-section py-14 bg-gradient-to-br from-orange-50 to-amber-100 min-h-screen">
      <h2 className="text-center text-5xl font-bold mb-14">
        Latest <span className="text-orange-500">Blogs</span> ☕📚
      </h2>

      {/* Only Admin can access */}
      {userUid === ADMIN_UID && (
        <div className="blog-creation-form mb-12 max-w-2xl mx-auto">
          <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-4 bg-white shadow-lg rounded-lg p-6">
            <input
              type="text"
              placeholder="☕ Blog Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <textarea
              placeholder="✍️ Share your thoughts..."
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              rows="4"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-amber-700 hover:scale-105 transition"
            >
              Add Blog
            </button>
          </form>
        </div>
      )}

      {/* Blog list */}
      <div className="blogs-container grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-post p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
            <h3 className="font-semibold text-2xl text-gray-800 mb-3">{blog.newTitle}</h3>
            <p className="text-gray-400 text-sm mb-4">{blog.date}</p>
            <p className="text-gray-600 mb-4">{blog.newContent}</p>
            <div className="flex items-center gap-2">
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => handleLike(blog._id)}
              >
                👍 Like
              </span>
              <span className="text-gray-700">{blog.likes} Likes</span>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Blog;