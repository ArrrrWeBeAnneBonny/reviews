import React from 'react';
var moment = require('moment');
//import {Grid, Image, Divider} from 'semantic-ui-react';

function ReviewList(props) {
  console.log('props', props)
      return (
         <div id='container'>

      <div id="review-header">
        <div id="reviewnum">{`${props.list.length} Reviews`}
        <select id="sort">
            <option value="Most popular">Most popular</option>
            <option value="Most recent">Most recent</option>
          </select>
        </div>

      </div>



      {props.list.map((item) => {
        console.log('owner', item)
         return (
          <div className="row">
            <div className="column1">
            <img className='userUrl' src={item.imgUrl}/>
            </div>
            <div className="column2">
              <div className="info">

                <div className="thumbs"><i className="fas fa-thumbs-up"></i></div>
                <div className="username">{item.userName}</div>
                <div className="recommend">recommends this listing. (Site 1)</div>
                <div className="date">{moment(item.dateCreated).format('MMMM Do YYYY')}</div>
              </div>
              <p className='review'>{item.review}</p>
              <div className="photos">Photos Go Here</div>
              <div></div>
              <button id="button">
                <i className="far fa-thumbs-up"></i> Helpful {item.helpfulness}
              </button>
              <div className="owner">
                owner responses here
              </div>
              <hr></hr>
            </div>


            </div>


              )
            })}



        </div>


    )
}



export default ReviewList;