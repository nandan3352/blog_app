const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogControlller,
} = require("../controllers/blogController");

//router object
const router = express.Router();
router.get("/",(req,res)=>{
  res.send("inside blog url")
})
router.get("/all-blog", getAllBlogsController);
router.post("/create-blog", createBlogController);
router.put("/update-blog/:id", updateBlogController);
router.get("/get-blog/:id", getBlogByIdController);
router.delete("/delete-blog/:id", deleteBlogController);
router.get("/user-blog/:id", userBlogControlller);

module.exports = router;