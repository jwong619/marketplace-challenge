import React from 'react';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



class itemsList extends React.Component {

  createItemListEntries() {
    console.log( '-- list', this.props.items)
  }

  render() {
    return (
      <div>
      list component
      {this.props.items.map( (item) => {
        console.log( item.name)
      })}
      </div>
    )
  }


}



var mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(itemsList);