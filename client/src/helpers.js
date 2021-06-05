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
    production: `https://ec2-54-183-212-188.us-west-1.compute.amazonaws.com/allReviews`
  },
  // displayOwner: (info) => {
  //   console.log('displayowner', info)
  //   if (!info) {
  //     return null;
  //   }
  //   return  (
  //     <div>
  //                     {info.list.map((item) => {
  //               console.log('ITEMMM', item)
  //               return (
  //                 <div>
  //       <div className='comment-container'>
  //         <div className='comment'>
  //           <div className='comment_avatar'>
  //             <img className='owner-url' src={info.data.ownerUrl}/>
  //           </div>
  //           <div className='comment_body'>
  //             <div className='comment_header'>{`Response from ${info.data.ownerName} the Host, on ${moment(item.ownerResponse.responseDate).format('MMMM Do YYYY')}`}</div>
  //             <p className='comment_text'>{item.ownerResponse.response}</p>
  //             <div className='helpful-container'>
  //               <i className="far fa-thumbs-up"></i> Helpful {item.ownerResponse.helpfulness}
  //             </div>
  //           </div>
  //           </div>
  //         </div>
  //       </div>
  //           )
  //             })}
  //     </div>)
  // }

      displayOwner: (info) => {
    //console.log('displayowner', info)
    if (!info.response) {
      return null;
    }
    return  (
      <div>
        <div className='comment-container'>
          <div className='comment'>
            <div className='comment_avatar'>owner img here</div>
            <div className='comment_body'>
              <div className='comment_header'>Response from Anne Bonny, the Host, on {moment(info.responseDate).format('MMMM Do YYYY')}</div>
              <p className='comment_text'>{info.response}</p>
              <div className='helpful-container'>
              <i className="far fa-thumbs-up"></i> Helpful {info.helpfulness}
            </div>
            </div>

          </div>
        </div>
      </div>)
  }

}