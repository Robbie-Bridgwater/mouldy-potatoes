const router = require("express").Router();
const { Review, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Get all reviews and JOIN with user data
    const reviewData = await Review.findAll({
      include: [
        {
          model: Comment,
        },
        {
          model: User,
        },
      ],
    });

    // Serialize data so the template can read it
    const reviews = reviewData.map((review) => review.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      reviews,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/review/:id", async (req, res) => {
  try {
    const reviewData = await Review.findByPk(
      req.params.id,

      {
        include: [
          {
            model: Comment,
            include: [User],
          },
          {
            model: User,
            attributes: ["name"],
          },
        ],
      }
    );

    const review = reviewData.get({ plain: true });
    console.log(review);

    res.render("review", {
      ...review,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // Route to signup page
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

module.exports = router;
