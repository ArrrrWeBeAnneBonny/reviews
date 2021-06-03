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
  displayOwner: (info) => {
    console.log('displayowner', info)
    if (!info) {
      return null;
    }
    return  (
      <div>
        {/* <div className="owner">
        <div className="owner-header">Response from Anne Bonny, the host on,
        <div className="owner-date">{moment(info.responseDate).format('MMMM Do YYYY')}</div>
        </div>

        <p className="owner-response">{info.response}</p>
        <div className="owner-helpfulness"><i className="far fa-thumbs-up"></i> Helpful {info.helpfulness}</div>
        </div> */}
                      {info.list.map((item) => {
                console.log('ITEMMM', item)
                return (
                  <div>
        <div className='comment-container'>
          <div className='comment'>
            <div className='comment_avatar'>
              <img className='owner-url' src={info.data.ownerUrl}/>
            </div>
            <div className='comment_body'>

                  <div className='comment_header'>{`Response from ${info.data.ownerName} the Host, on ${moment(item.ownerResponse.responseDate).format('MMMM Do YYYY')}`}</div>
                  <p className='comment_text'>{item.ownerResponse.response}</p>
                  <div className='helpful-container'>
                  <i className="far fa-thumbs-up"></i> Helpful {item.ownerResponse.helpfulness}
                  </div>
                  </div>


            </div>

          </div>
        </div>
                        )
              })}
      </div>)
  }

}