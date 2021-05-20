import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewList from './ReviewList.jsx'

class Reviews extends React.Component {
  constructor(props) {
    super();
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/reviews',
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

  render() {
    //let reviews = this.state.reviews;
    console.log('reviews', this.state.list)

        return (
          <div className='review'>
            <ReviewList list={this.state.list}/>
          </div>

       )




  }
}

ReactDOM.render(<Reviews/>, document.getElementById('reviews'));

export default Reviews;