module.exports = {

  sortReviews: (reviews, option) => {
    console.log('sort reviews', reviews, option)
    if (option === 'Most popular') {
      return reviews.sort((a, b) => {
        //console.log('sfd', b.helpfulness, a.helpfulness)
        return b.helpfulness - a.helpfulness
      });
    }

    if (option === 'Most recent') {
      return reviews.sort((a, b) => {
        //console.log('sfd', b.dateCreated, a.dateCreated)
        return new Date(b.dateCreated) - new Date(a.dateCreated);
      });
    }
  }
}