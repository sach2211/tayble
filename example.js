import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Tayble from 'tayble'

var taybleData = [
  ['1', 'https://facebook.github.io/react/img/logo.svg','Steve Jobs','Apple Inc.','California'],
  ['2', 'https://facebook.github.io/react/img/logo.svg','Bill Gates','Microsoft','Washington']
]
var columnHeaders = ['Serial ', 'Logo', 'Name', 'Company',  'Headquarters'];
var columnTypes = ['text', 'image', 'text', 'text', 'text'];
// React component
class TaybleDemo extends React.Component {
  render () {

    return (
      <div>
        <Tayble 
          columnNumbers = '5'  
          columnHeaders = {columnHeaders} 
          columnTypes = {columnTypes} 
          rowData = {taybleData} 
          classes= ' table table-responsive table-bordered table-striped '
          imageHeight = '15'
          imageClasses = 'img img-responsive'/>
      </div>
    )
  }
}

ReactDOM.render(<TaybleDemo />, document.body);
