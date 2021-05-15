import React from 'react';

function ReviewList(props) {
  console.log('props', props)
      return (
        <div id='container'>

          {props.list.map((item) => {
            return (
            <div className='review-item'>
              <div className='userName'>{item.userName}</div>
              <img className='userUrl' src={item.imgUrl}/>
              <div className='userReview'>{item.review}</div>
            </div>

              )
          })}


        </div>


    )
}



export default ReviewList;