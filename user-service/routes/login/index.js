const post = async (req, res, next) => {
  req.container.cradle.user_controller.loginUser(req, res, next);
};

module.exports = { post };
