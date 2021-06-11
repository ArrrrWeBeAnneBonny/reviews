import React from 'react';
const moment = require('moment');
const helpers = require('./helpers.js');

function ReviewList(props) {
  console.log('props', props)
  //let allData = props.data;
  //console.log('al', allData)
    return (
      <div id='reviews-section'>

        <div className='reviews'>
        <section></section>
        <div className='header'>{`${props.list.length} Reviews`}
        <div className='sort-right'>
          <select name='sort_by' id="sort_by" className='form-control reviews_sort-switch' value={props.sorted} onChange={props.sort}>
            <option value="Most popular">Most popular</option>
            <option value="Most recent">Most recent</option>
          </select>
        </div>
        </div>
        <br></br>

        <div className='reviews_list'>
          {props.list.map((item) => {
            //console.log('TESGSDGSDGS', item.photoInfo)
            return (
              <div className='review' key={item.reviewId}>
                <div className='media'>
                  <div className='media-left'>
                    <img className='userUrl' src={item.imgUrl}/>
                  </div>
                  <div className='media-body'>
                    <div className='info'>
                      <div className='info-left'>
                        <span className='recommend-icon'><i className={helpers.displayThumbs(item.recommended)}></i></span>
                        <div className="username">{item.userName}</div>
                        <div className="recommend">{helpers.isRecommended(item.recommended)}</div>
                        <div className='site'>{`Site ${props.data.site}`}</div>
                      </div>
                      <div className='info-right'>{moment(item.dateCreated).format('MMMM Do YYYY')}</div>
                    </div>
                    <p>{item.review}</p>
                    <div id='reviews-modal'>
                      {item.photoInfo.imageUrl.map((photo, key) => {
                        console.log('MY PHHOTOS', photo)
                          if (key < 4) {
                            return (
                              <div className='row'>
                                <div className='column'>
                                  {/* {helpers.displayPhotos(photo.photoInfo.imageUrl)} */}
                                  <img className="display-photos" src={photo}></img>
                                </div>
                              </div>
                            )
                          }

                      })}
                    </div>

                    <div className='review_cta'>
                      <button id="button">
                        <i className={"far fa-thumbs-up"}></i> Helpful {item.helpfulness}
                      </button>
                      {/* <div className='report'>Report</div> */}
                    </div>
                      {helpers.displayOwner(item, props.data)}
                    <hr></hr>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
        </div>
      </div>
    )
}

export default ReviewList;