//api 로직
const index = function (req, res) {
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit, 10); // "2"
    if (Number.isNaN(limit)) {
      return res.status(400).end();
    }
  
    res.json(users.slice(0, limit));
  };

  module.exports = {
    index: index
  };