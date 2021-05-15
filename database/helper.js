let percentCalc = (reviews) => {

  let recommended = 0;
  let percent;

  if (reviews.length === 0) {
    return null;
  } else {
    for (var i = 0; i < reviews.length; i++) {
      let currReview = reviews[i];
      if (currReview.recommended === true) {
        recommended++;
      }
    }
    percent = (recommended / reviews.length).toString().slice(0, 4);
    return Number(percent);
  }
}

module.exports = {percentCalc};