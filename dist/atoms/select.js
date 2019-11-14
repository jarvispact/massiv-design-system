"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _text = _interopRequireDefault(require("./text"));

var _icon = _interopRequireDefault(require("./icon"));

var _button = _interopRequireDefault(require("./button"));

var _box = _interopRequireDefault(require("./box"));

var _flex = _interopRequireDefault(require("./flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var defaultButtonProps = {
  bg: 'white',
  textAlign: 'left',
  minWidth: '200px'
};
var defaultIconProps = {
  color: 'gray600',
  fontSize: 'xl'
};
var lastScrollY = 0;
var ticking = false;

var getDropdownDimensionsForRef = function getDropdownDimensionsForRef(ref) {
  var _ref$current$getBound = ref.current.getBoundingClientRect(),
      bottom = _ref$current$getBound.bottom,
      left = _ref$current$getBound.left,
      width = _ref$current$getBound.width;

  return {
    top: Math.round(bottom + lastScrollY),
    left: Math.round(left),
    width: Math.round(width)
  };
};

var getDropdownDefaultProps = function getDropdownDefaultProps(position) {
  return {
    as: 'ul',
    mt: '8px',
    mb: '8px',
    bg: 'white',
    borderRadius: '2px',
    boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.60);',
    position: 'absolute',
    top: "".concat(position.top, "px"),
    left: "".concat(position.left, "px"),
    width: "".concat(position.width, "px"),
    zIndex: '100'
  };
};

var Select = function Select(_ref) {
  var options = _ref.options,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      buttonProps = _ref.buttonProps,
      iconProps = _ref.iconProps,
      dropdownProps = _ref.dropdownProps;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropDownOpen = _useState2[0],
      setDropDownOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      dropdownDimensions = _useState4[0],
      setDropdownDimensions = _useState4[1];

  var buttonRef = (0, _react.useRef)(null);

  var handleScroll = function handleScroll() {
    lastScrollY = window.scrollY;

    if (!ticking && buttonRef.current) {
      window.requestAnimationFrame(function () {
        setDropdownDimensions(getDropdownDimensionsForRef(buttonRef));
        ticking = false;
      });
      ticking = true;
    }
  };

  var handleResize = function handleResize() {
    if (!buttonRef.current) return;
    setDropdownDimensions(getDropdownDimensionsForRef(buttonRef));
  };

  var handleClickOutSide = function handleClickOutSide(event) {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setDropDownOpen(false);
    }
  };

  var toggleDropDownOpen = function toggleDropDownOpen() {
    if (!buttonRef.current) return;
    setDropdownDimensions(getDropdownDimensionsForRef(buttonRef));
    setDropDownOpen(function (prev) {
      return !prev;
    });
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutSide);
    return function () {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutSide);
    };
  }, [buttonRef.current]);
  (0, _react.useLayoutEffect)(function () {
    setDropdownDimensions(getDropdownDimensionsForRef(buttonRef));
  }, [buttonRef.current]);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_button["default"], _extends({
    ref: buttonRef,
    onClick: toggleDropDownOpen
  }, defaultButtonProps, buttonProps), _react["default"].createElement(_flex["default"], {
    justifyContent: "space-between"
  }, _react["default"].createElement(_text["default"], null, (options.find(function (option) {
    return option.value === value;
  }) || {}).label), _react["default"].createElement(_icon["default"], _extends({
    name: "keyboard_arrow_down"
  }, defaultIconProps, iconProps)))), dropDownOpen && dropdownDimensions ? _react["default"].createElement(_box["default"], _extends({}, getDropdownDefaultProps(dropdownDimensions), dropdownProps), options.map(function (option) {
    return _react["default"].createElement(_text["default"], {
      as: "li",
      p: "6px",
      key: option.value,
      color: value === option.value ? 'primary' : undefined,
      onClick: function onClick() {
        return onChange({
          target: {
            name: name,
            value: option.value
          }
        });
      }
    }, option.label);
  })) : null);
};

Select.propTypes = {
  options: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    value: _propTypes.string.isRequired,
    label: _propTypes.string.isRequired
  })).isRequired,
  name: _propTypes.string.isRequired,
  value: _propTypes.string.isRequired,
  onChange: _propTypes.func.isRequired,
  buttonProps: (0, _propTypes.shape)({}),
  iconProps: (0, _propTypes.shape)({}),
  dropdownProps: (0, _propTypes.shape)({})
};
Select.defaultProps = {
  buttonProps: undefined,
  iconProps: undefined,
  dropdownProps: undefined
};
var _default = Select;
exports["default"] = _default;