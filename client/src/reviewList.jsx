import React from 'react';
import {Grid, Image, Divider} from 'semantic-ui-react';

function ReviewList(props) {
  console.log('props', props)
      return (
         <div id='container'>
        {/* //   <div className="row">
        //     <div className="col-md-8 col-xs-7 panel-content">
        //       <div id="reviews-section">
        //         <div className="reviews_content" id="reviews">
        //           <h1 className="header">3 Reviews</h1>
        //           <select id="sort">
        //             <option value="Most popular">Most popular</option>
        //             <option value="Most recent">Most recent</option>
        //           </select>
        //           <div className="reviews_list">
        //             <div className="no-results"></div>
        //             <div className="userUrl">

        //             </div>
        //           </div>
        //         </div>

        //       </div>
        //     </div>
        //   </div> */}

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


              {/* <button id="button">
                <i className="far fa-thumbs-up"></i> Helpful
              </button>
              <select id="sort">
                <option value="Most popular">Most popular</option>
                <option value="Most recent">Most recent</option>
              </select>
            </div> */}

            {/* <Grid columns='three' divided="vertically">
    <Grid.Row columns={2}>
      <Grid.Column>
        <Image className="userUrl" src={item.imgUrl} />
      </Grid.Column>
      <Grid.Column>
      <div className='userReview'>{item.review}</div>
      </Grid.Column>
    </Grid.Row>


  </Grid> */}