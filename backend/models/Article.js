import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    image: String,
    alt: String,

    // Shared or fallback title
    title: {
      type: String,
      required: false,
    },

    // Blog-specific titles
    titleStart: String,
    titleEnd: String,

    // Featured-specific titles
    titleOrange: String,
    titleTeal: String,

    category: {
      type: String,
      default: "Uncategorized",
    },
    description: String,
    date: String,
    readTime: String,
    author: String,

    linkText: {
      type: String,
      default: "Read More",
    },
    link: String,

    // Flags for filtering
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isLatest: {
      type: Boolean,
      default: false,
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
    isBlog: {
      type: Boolean,
      default: false,
    },

    // Comments
    comments: [
      {
        text: String,
        author: String,
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Article", ArticleSchema);
