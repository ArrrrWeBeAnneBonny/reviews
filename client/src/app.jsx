import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/reviews',
      method: 'GET',
      success: (data) => {
        console.log('got data in client', data);
      },
      error: (err) => {
        console.log('error getting data in client');
      }
    })
  }

  render() {
    return (
      <div>React is up</div>
    )
  }
}

ReactDOM.render(<Reviews/>, document.getElementById('app'));