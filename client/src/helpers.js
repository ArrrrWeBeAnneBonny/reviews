module.exports = {
  mostRecent: (reviews) => {
    console.log('most recent func', reviews)
    return reviews.sort((a, b) => {
      console.log('sfd', b.dateCreated, a.dateCreated)
      return b.dateCreated - a.dateCreated
    })
  }
}