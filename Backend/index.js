const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// connecting db 
mongoose.connect("mongodb+srv://sivasankaranit44_db_user:sendmate123@sendmate.cuhofli.mongodb.net/blogDB?retryWrites=true&w=majority")
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB Atlas connection error:", err));


const blogSchema = new mongoose.Schema({
  newTitle: String,
  newContent: String,
  date: String,
  likes: Number
});

const Blog = mongoose.model('Blog', blogSchema);

// admin UID Firebase Auth
const ADMIN_UID = "smSTOBlWfRhR1woRbRh28a9zuZf2";

// Routes
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.send(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.patch('/api/blogs/like/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
  
    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Only admin can add blogs
app.post('/api/blogs', async (req, res) => {
  try {
    const { newTitle, newContent, date, likes, uid } = req.body;
    console.log("Received UID:", uid);  // 👈 Debug line

    if (uid !== ADMIN_UID) {
      return res.status(403).json({ message: "Access denied. Admin only can add blogs." });
    }

    const blog = new Blog({ newTitle, newContent, date, likes });
    const newBlog = await blog.save();
    res.status(201).json(newBlog);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


app.listen(5000, ()=>{
  console.log("Server connected on localhost:5000")
})