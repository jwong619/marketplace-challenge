import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ItemsList from './itemsList.jsx';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount () {
  // api call
  // }

  render() {
    console.log(this.props.items);
    return (
      <div>
        in app!!!!
        <ItemsList/>

      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    items: state.items
  };
}

export default connect(mapStateToProps)(App);