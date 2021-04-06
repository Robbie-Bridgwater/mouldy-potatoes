const rater = require("rater-js");

var myRater = rater({
  element: document.querySelector("#rater"),
  rateCallback: function rateCallback(rating, done) {
    //make async call to server however you want
    //in this example we have a 'service' that rate and returns the average rating
    myDataService.rate(rate).then(
      function (rating) {
        console.log(rating);
        myRater.disable();
        //dont forget to call done
        done();
      },
      function (error) {
        //handle the error
        //dont forget to call done
        done();
      }
    );
  },
});

module.exports = myRater;
