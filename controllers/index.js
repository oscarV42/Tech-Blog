const router = require("express").Router();

const homeRoutes = require("./views/homepage");
const authRoutes = require("./views/user");
const dashboardRoutes = require("./views/dashboard");
const blogRoutes = require("./views/blog");
const apiAuthRoutes = require("./api/userRoutes");
const apiBlogRoutes = require("./api/postRoutes");
const apiCommentRoutes = require("./api/commentRoutes");

router.use("/", homeRoutes);
router.use("/", authRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/blogs", blogRoutes);
router.use("/api", apiAuthRoutes);
router.use("/api/blogs", apiBlogRoutes);
router.use("/api/comments", apiCommentRoutes);

module.exports = router;