import React from 'react';
import moment from 'moment';

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
  displayOwner: (info) => {
    //console.log('displayowner', info)
    if (!info.response) {
      return null;
    }
    return  (
      <div>
        <div className="owner">
        <div className="owner-header">Response from Anne Bonny, the host on,
        <div className="owner-date">{moment(info.responseDate).format('MMMM Do YYYY')}</div>
        </div>

        <p className="owner-response">{info.response}</p>
        <div className="owner-helpfulness"><i className="far fa-thumbs-up"></i> Helpful {info.helpfulness}</div>
        </div>
      </div>)
  }

}