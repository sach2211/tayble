'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tayble = function (_Component) {
  _inherits(Tayble, _Component);

  function Tayble() {
    _classCallCheck(this, Tayble);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tayble).apply(this, arguments));
  }

  _createClass(Tayble, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var columnHeaders = _props.columnHeaders;
      var rowData = _props.rowData;
      var classes = _props.classes;
      var searchBox = _props.searchBox;
      var columnTypes = _props.columnTypes;
      var highlight = _props.highlight;
      var imageClasses = _props.imageClasses;
      var imageHeight = _props.imageHeight;

      if (!highlight) {
        highlight = [];
      } else if ((typeof highlight === 'undefined' ? 'undefined' : _typeof(highlight)) !== _typeof([])) {
        highlight = [highlight];
      }

      return _react2.default.createElement(
        'div',
        null,
        searchBox === 'true' ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'Search :'
          ),
          _react2.default.createElement('input', { type: 'text', id: 'searchbox', placeholder: 'Your Name' }),
          ' ',
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'btn btn-info comeRight ' },
            'Search'
          ),
          _react2.default.createElement('br', null)
        ) : null,
        _react2.default.createElement(
          'table',
          { className: classes },
          columnHeaders ? _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              columnHeaders.map(function (columnHeads, index) {
                return _react2.default.createElement(
                  'td',
                  { key: index },
                  columnHeads
                );
              })
            )
          ) : null,
          _react2.default.createElement(
            'tbody',
            null,
            rowData.map(function (row, index1) {
              return highlight.indexOf(index1) !== -1 ? _react2.default.createElement(
                'tr',
                { className: 'bold', key: index1 },
                row.map(function (item, index) {
                  return columnTypes[index] == 'text' ? _react2.default.createElement(
                    'td',
                    { key: index },
                    item
                  ) : _react2.default.createElement(
                    'td',
                    { key: index },
                    _react2.default.createElement('img', {
                      key: index + 456,

                      className: imageClasses,

                      style: {
                        height: parseInt(imageHeight) + 'vh'
                      },
                      src: row[index] })
                  );
                })
              ) : _react2.default.createElement(
                'tr',
                null,
                row.map(function (item, index) {
                  return columnTypes[index] == 'text' ? _react2.default.createElement(
                    'td',
                    { key: index },
                    ' ',
                    item
                  ) : _react2.default.createElement(
                    'td',
                    { key: index },
                    _react2.default.createElement('img', {
                      key: index + 123,

                      className: imageClasses,

                      style: {
                        height: parseInt(imageHeight) + 'vh'
                      },
                      src: row[index] })
                  );
                })
              );
            })
          )
        )
      );
    }
  }]);

  return Tayble;
}(_react.Component);

exports.default = Tayble;

Tayble.propTypes = {
  columnHeaders: _react.PropTypes.array,
  rowData: _react.PropTypes.array,
  classes: _react.PropTypes.string,
  searchBox: _react.PropTypes.string,
  columnTypes: _react.PropTypes.array,
  highlight: _react.PropTypes.array || _react.PropTypes.number,
  imageHeight: _react.PropTypes.string
};
exports.default = Tayble;