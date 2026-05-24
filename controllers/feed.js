exports.getPosts = (req, res, next) => {
  res
    .status(200)
    .json({ posts: [{ title: "First Post", content: "testing post" }] });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.conten;
  // asdlkajsd
  res.status(201).json({
    message: "Post created successfull",
    post: { id: new Date().toString(), title: title, content: content },
  });
};
