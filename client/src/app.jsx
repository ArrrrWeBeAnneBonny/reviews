import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewList from './ReviewList.jsx';
import helpers from './helpers.js';

class Reviews extends React.Component {
  constructor(props) {
    super();
    this.state = {
      list: [],
      ownerInfo: {},
      sortOption: 'Most Popular'
    }
    this.sortReviews = this.sortReviews.bind(this);
  }

  componentDidMount() {
    let search = window.location.search
    let index = search.indexOf('=') + 1;
    let id = search.slice(index);

    $.ajax({
      url: `http://localhost:3001/allReviews`,
      method: 'GET',
      data: {campId: id},
      success: (data) => {
        console.log('got data in client', data);
        let reviewsList;
        let ownerObj = {};
        if (data) {
          reviewsList = helpers.sortReviews(data.reviews, 'Most popular');
          ownerObj.ownerName = data.ownerName;
          ownerObj.ownerUrl = data.ownerUrl;
          ownerObj.site = data.site;
        }
        console.log('sdgsdg', ownerObj);
        this.setState({
          list: reviewsList,
          ownerInfo: ownerObj
        });
        //console.log('state', this.state)

      },
      error: (err) => {
        console.log('error getting data in client');
      }
    })
  }

  sortReviews () {
    console.log('sorting');
    var option = document.getElementById('sort_by').value;

    console.log('e', option)

    let sortList = helpers.sortReviews(this.state.list, option);
    //console.log('sorted', sortList);

    this.setState({
      sortOption: option,
      list: sortList
    })

    //console.log('update', this.state.sortOption)
  }


  render() {
    //let reviews = this.state.reviews;
    //console.log('reviews', this.state.list)
    return (
      <div className='review'>
        <ReviewList list={this.state.list} sort={this.sortReviews} sorted={this.state.sortOption} data={this.state.ownerInfo}/>
      </div>
    )
  }
}

ReactDOM.render(<Reviews/>, document.getElementById('reviews'));

export default Reviews;