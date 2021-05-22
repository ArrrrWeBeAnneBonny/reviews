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
      sorted: 'Most Popular'
    }
    this.sortReviews = this.sortReviews.bind(this);
  }

  componentDidMount() {
    let search = window.location.search
    console.log('url', search);

    $.ajax({
      url: `http://localhost:3001/reviews`,
      method: 'GET',
      data: {campId: 0},
      success: (data) => {
        console.log('got data in client', data);
        this.setState({
          list: data.reviews
        });
        console.log('state', this.state)
        //this.render();
      },
      error: (err) => {
        console.log('error getting data in client');
      }
    })
  }

  sortReviews () {
    console.log('sorting');
    var option = document.getElementById('sort').value;
    let hi = helpers.mostRecent(this.state.list);
    //console.log('e', option)
    console.log('hi', hi)
    this.setState({
      sorted: option,
      list: hi
    })
    console.log('update', this.state.sorted)
  }


  render() {
    //let reviews = this.state.reviews;
    console.log('reviews', this.state.list)

        return (
          <div className='review'>
            <ReviewList list={this.state.list} sort={this.sortReviews} sorted={this.state.sorted}/>
          </div>

       )




  }
}

ReactDOM.render(<Reviews/>, document.getElementById('reviews'));

export default Reviews;