const path = require('path');
const fs = require('fs');

// Helper to load blogs
const getBlogsData = () => {
  const filePath = path.join(__dirname, '../data/blogs.json');
  const rawData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(rawData);
};

exports.getAllBlogs = (req, res) => {
  try {
    const blogs = getBlogsData();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving blogs data', error: error.message });
  }
};

exports.getBlogById = (req, res) => {
  try {
    const blogs = getBlogsData();
    const blog = blogs.find(b => b.id === req.params.id);

    if (!blog) {
      return res.status(404).json({ message: `Blog post with ID '${req.params.id}' not found` });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving blog post', error: error.message });
  }
};
