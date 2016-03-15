import React, {Component, PropTypes} from 'react'
export default class Fable extends Component {
  static propTypes = {
    columnHeaders : PropTypes.array,
    rowData : PropTypes.array,
    classes : PropTypes.string,
    searchBox : PropTypes.string,
    columnTypes : PropTypes.array,
    highlight : PropTypes.array || PropTypes.number,
    imageHeight : PropTypes.string
  }
  render() {


    let { columnHeaders, rowData, classes, searchBox, columnTypes, highlight, imageClasses, imageHeight } = this.props
    if (!highlight) {
      highlight = []
    } 
    else if (typeof highlight !== typeof []){
      highlight = [highlight]
    }

    return (
      <div >
        {searchBox === 'true'
          ? (
            <div>
              <strong>Search :
              </strong><input type="text" id="searchbox" placeholder="Your Name"/>
              &nbsp;
              <button type="submit" className="btn btn-info comeRight ">Search</button><br/></div>
          )
          : null}
        {/*Start rendering the Table*/}
        <table className={classes}>
          {/*Render the Column Headers*/}
          {columnHeaders
            ? (
              <thead>
                <tr>
                  {columnHeaders
                    .map(function (columnHeads, index) {
                      return (
                        <td key={index}>{columnHeads}</td>
                      )
                    })}
                </tr>
              </thead>
            )
            : null}
          {/* Render the body  Row by Row */}
          <tbody>
            {rowData
              .map(function (row, index1) {
                return ( highlight.indexOf(index1) !== -1
                  ? (
                    <tr className='bold' key={index1}>{row
                        .map(function (item, index) {
                          return (columnTypes[index] == 'text'
                            ? (
                              <td  key = {index}>{item}</td>
                            )
                            : (
                              <td key={index}>
                                <img
                                  key={index + 456}

                                  className={ imageClasses }

                                  style={{
                                  height: parseInt(imageHeight) + 'vh'
                                }}
                                  src={row[index]}/>
                              </td>
                            ))
                        })}</tr>
                  )
                  : (
                    <tr>{row
                        .map(function (item, index) {
                          return (columnTypes[index] == 'text'
                            ? (
                            <td  key = {index}> {item}</td>
                            )
                            : (
                              <td key={index}>
                                <img
                                  key={index + 123}

                                  className={ imageClasses }

                                  style={{
                                  height: parseInt(imageHeight) + 'vh'
                                }}
                                  src={row[index]}/>
                              </td>
                            ))
                        })}</tr>
                  ))
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
}
