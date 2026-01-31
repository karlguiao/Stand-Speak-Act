import express from "express";
import multer from "multer";
import path from "path";
import Article from "../models/Article.js";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// GET all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.json(articles);
  } catch (err) {
    console.error("Error fetching articles:", err);
    res.status(500).json({ message: "Failed to fetch articles" });
  }
});

// POST a new article with image upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const imagePath = req.file ? `/uploads/${req.file.filename}` : "";

    const newArticle = new Article({
      ...req.body,
      image: imagePath,
    });

    const saved = await newArticle.save();

    const updatedWithLink = await Article.findByIdAndUpdate(
      saved._id,
      { $set: { link: `/article/${saved._id}` } },
      { new: true }
    );

    // Return the final article object
    res.status(201).json(updatedWithLink);
  } catch (err) {
    console.error("Error creating article:", err);
    res.status(500).json({ message: "Failed to create article", error: err });
  }
});

// POST a comment to an article
router.post("/:id/comments", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    const newComment = {
      text: req.body.text,
      author: req.body.author || "Anonymous",
      date: new Date().toISOString(),
    };

    article.comments.push(newComment);
    await article.save();

    res.json(article.comments);
  } catch (err) {
    console.error("Error posting comment:", err);
    res.status(500).json({ message: "Failed to post comment", error: err });
  }
});

// PUT an article
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let updateData;

    if (req.file) {
      updateData = {
        ...req.body,
        image: `/uploads/${req.file.filename}`,
      };
    } else {
      updateData = { ...req.body };
    }

    if (typeof updateData.body === "string") {
      updateData.body = JSON.parse(updateData.body);
    }
    if (typeof updateData.references === "string") {
      updateData.references = JSON.parse(updateData.references);
    }

    const updated = await Article.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.json(updated);
  } catch (err) {
    console.error("Error updating article:", err);
    res.status(500).json({ message: "Failed to update article", error: err });
  }
});

// DELETE an article
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Article.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Article not found" });
    res.json({ message: "Article deleted", id: req.params.id });
  } catch (err) {
    console.error("Error deleting article:", err);
    res.status(500).json({ message: "Failed to delete article", error: err });
  }
});

// GET only featured articles
router.get("/featured", async (req, res) => {
  try {
    const featured = await Article.find({ isFeatured: true }).sort({
      createdAt: -1,
    });
    res.json(featured);
  } catch (err) {
    console.error("Error fetching featured articles:", err);
    res.status(500).json({ message: "Failed to fetch featured articles" });
  }
});

// GET only latest articles
router.get("/latest", async (req, res) => {
  try {
    const latest = await Article.find({ isLatest: true }).sort({
      createdAt: -1,
    });
    res.json(latest);
  } catch (err) {
    console.error("Error fetching latest articles:", err);
    res.status(500).json({ message: "Failed to fetch latest articles" });
  }
});

// GET only popular articles
router.get("/popular", async (req, res) => {
  try {
    const popular = await Article.find({ isPopular: true }).sort({
      createdAt: -1,
    });
    res.json(popular);
  } catch (err) {
    console.error("Error fetching popular articles:", err);
    res.status(500).json({ message: "Failed to fetch popular articles" });
  }
});

// GET only blog articles
router.get("/blog", async (req, res) => {
  try {
    const blogArticles = await Article.find({ isBlog: true }).sort({
      createdAt: -1,
    });
    res.json(blogArticles);
  } catch (err) {
    console.error("Error fetching blog articles:", err);
    res.status(500).json({ message: "Failed to fetch blog articles" });
  }
});

// CATEGORIES
router.get("/categories", (req, res) => {
  const categories = [
    "Climate & Environment",
    "Digital Rights & Cybersecurity",
    "Media & Misinformation",
    "Mental Health & Wellbeing",
    "Equity & Inclusion",
    "Youth Advocacy & Education",
    "Global Perspectives",
    "Design for Change",
    "Public Health Challenges",
  ];

  res.json(categories);
});

export default router;
