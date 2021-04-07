const rater = require("rater-js");

var myRater = rater({
  element: document.querySelector("#rater"),
  rateCallback: function rateCallback(rating, done) {
    this.setRating(rating);
    done();
  },
  starSize: 32,
  step: 0.5,
  readOnly: true,
});
