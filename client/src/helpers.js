import React from 'react';
import moment from 'moment';

module.exports = {

  sortReviews: (reviews, option) => {
    //console.log('sort reviews', reviews, option)
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
  },
  isRecommended: (boolean) => {
    //console.log('isRecommended', boolean);
    if (boolean === true) {
      return ' recommends this listing.'
    }
    return ' has mixed feelings towards this listing.'
  },
  displayThumbs: (boolean) => {
    if (boolean === true) {
      return 'far fa-thumbs-up'
    }
    return 'fas fa-meh'
  },
  urls: {
    development: `http://localhost:3001/allReviews`,
    production: `http://ec2-54-193-152-3.us-west-1.compute.amazonaws.com/allReviews`
  },
  displayOwner: (info, owner) => {
    //console.log('displayowner', info)
    if (!info.ownerResponse.response) {
      return null;
    }
    return  (
      <div>
        <div className='comment-container'>
          <div className='comment'>
            <div className='comment_avatar'>
              <img className='owner-url' src={owner.ownerUrl}/>
            </div>
            <div className='comment_body'>
              <div className='comment_header'>{`Response from ${owner.ownerName} the Host, on ${moment(info.ownerResponse.responseDate).format('MMMM Do YYYY')}`}</div>
              <p className='comment_text'>{info.ownerResponse.response}</p>
              <div className='helpful-container'>
                <i className="far fa-thumbs-up"></i> Helpful {info.ownerResponse.helpfulness}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  displayPhotos: (photoArr) => {
    //console.log('photo urls', photoArr);
    let photoImages = photoArr.imageUrl;
    console.log('images', photoImages)
    photoImages.forEach((photo) => {
      return (
        <div>
        <img src={photo}></img>
        </div>
      )
    })
  }
}