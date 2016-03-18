
This documentation explains how to use this react-responsive-table.
## Features:
The features are :
* The table is responsive 
* The table can have any number of tables and columns 
* The data in table can be text or image 
* Custom CSS Classes can be applied. 

## Installation :
<pre>
<code>
    npm install tayble --save
</code>
</pre>

## Input : 
The input has to be an array of arrays (i.e. a 2D array).
        It may be a jagged array.  

## Example:
Example Usage :

Include bootstrap.min.css in your project. You can use this link if you want https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css
 
Also import the module in your file :
<pre>
<code>
    import Tayble from 'tayble'
</pre>
</code>

Then  define data types, column headers and data for table and pass them as props to the component.
```javascript
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
```

Here, the props to be passes are :

**columnNumbers** = Number of Columns you need

**columnHeaders** = An array containing the headings for columns

**columnTypes**   = An array containing type of data in different Columns.
                Type can be 'text' for alpha-numeric data or 'image' for images.

**rowData**       = The 2D array of data to display in the table.

**classes**       = The CSS classes to apply to your project.

**imageHeight** = The height of image (if you have image column). Unit is vh by default. Don't specify a unit explicitly.

**imageClasses**= The CSS classes to apply on images (if one of your column is images)



For any questions or suggestions , you can reach out to us.


Thanks 
