const post = async (req, res, next) => {
  req.container.cradle.user_controller.registerUser(req, res, next);
};

module.exports = { post };
