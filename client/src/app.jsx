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
      sortOption: 'Most Popular'
    }
    this.sortReviews = this.sortReviews.bind(this);
  }

  componentDidMount() {
    let search = window.location.search
    let index = search.indexOf('=') + 1;
    let id = search.slice(index);

    $.ajax({
      url: `http://localhost:3001/reviews`,
      method: 'GET',
      data: {campId: id},
      success: (data) => {
        console.log('got data in client', data);
        let reviewsList = helpers.sortReviews(data.reviews, 'Most popular');
        this.setState({
          list: reviewsList
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
    var option = document.getElementById('sort').value;

    //console.log('e', option)

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
        <ReviewList list={this.state.list} sort={this.sortReviews} sorted={this.state.sorted}/>
      </div>
    )
  }
}

ReactDOM.render(<Reviews/>, document.getElementById('reviews'));

export default Reviews;