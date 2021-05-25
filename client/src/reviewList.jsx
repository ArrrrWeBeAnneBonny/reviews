import React from 'react';
const moment = require('moment');
const helpers = require('./helpers.js');

function ReviewList(props) {
  console.log('props', props)
      return (
         <div id='container'>

      <div id="review-header">
        <div id="reviewnum">{`${props.list.length} Reviews`}
        <select id="sort" value={props.sorted} onChange={props.sort}>
            <option value="Most popular">Most popular</option>
            <option value="Most recent">Most recent</option>
          </select>
        </div>

      </div>



      {props.list.map((item) => {
        //console.log('owner', item.ownerResponse)
         return (
          <div className="row" key={item.reviewId}>
            <div className="column1">
            <img className='userUrl' src={item.imgUrl}/>
            </div>
            <div className="column2">
              <div className="info">

                <div className="thumbs"><i className={helpers.displayThumbs(item.recommended)}></i></div>
                <div className="username">{item.userName}</div>
                <div className="recommend">{helpers.isRecommended(item.recommended)} (Site 1)</div>
                <div className="date">{moment(item.dateCreated).format('MMMM Do YYYY')}</div>
              </div>
              <p className='review'>{item.review}</p>
              <div className="photos">Photos Go Here</div>
              <div></div>
              <button id="button">
                <i className={"far fa-thumbs-up"}></i> Helpful {item.helpfulness}
              </button>
              {/* <div className="owner"> */}
                {helpers.displayOwner(item.ownerResponse)}
              {/* </div> */}
              <hr></hr>
            </div>


            </div>


              )
            })}
        </div>
    )
}



export default ReviewList;