const router = require('express').Router();
const { Review, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const reviewData = await Post.findAll({
        include: [
          {
            model: Comment
          },
          {
            model: User,
          },
        ],
      });

    // Serialize data so the template can read it
    const reviews = reviewData.map((post) => review.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      reviews,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
