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

var dropdownOffset = 4;

var getDropdownId = function getDropdownId(name) {
  return "".concat(name, "-list");
};

var getItemId = function getItemId(name, value) {
  return value ? "".concat(name, "-").concat(value) : '';
};

var scheduleButtonFocusOnDropdownOpen = function scheduleButtonFocusOnDropdownOpen(buttonRef) {
  setTimeout(function () {
    if (buttonRef.current && buttonRef.current.nextElementSibling) {
      buttonRef.current.nextElementSibling.firstElementChild.firstElementChild.focus();
    }
  }, 100);
};

var Select = function Select(_ref) {
  var options = _ref.options,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      _onBlur = _ref.onBlur,
      defaultLabel = _ref.defaultLabel,
      buttonProps = _ref.buttonProps,
      iconProps = _ref.iconProps,
      dropdownProps = _ref.dropdownProps;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropdownOpen = _useState2[0],
      setDropdownOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      lastScrollY = _useState4[0],
      setLastScrollY = _useState4[1];

  var buttonRef = (0, _react.useRef)(null);

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      buttonBoundingBox = _useState6[0],
      setButtonBoundingBox = _useState6[1];

  var toggleDropdown = function toggleDropdown() {
    setDropdownOpen(function (prev) {
      if (!prev) scheduleButtonFocusOnDropdownOpen(buttonRef);
      return !prev;
    });
  };

  var handleEscapeKeyPress = function handleEscapeKeyPress(event) {
    if (event.key === 'Escape') {
      setDropdownOpen(false);
      buttonRef.current.focus();
      event.preventDefault();
      event.stopPropagation();
    }
  };

  var handleListKeyboardNavigation = function handleListKeyboardNavigation(option) {
    return function (event) {
      if (event.key === ' ') {
        onChange({
          target: {
            name: name,
            value: option.value
          }
        });
        event.preventDefault();
        event.stopPropagation();
      }

      if (event.key === 'ArrowDown' && event.target.nextElementSibling) {
        event.target.nextElementSibling.focus();
        event.preventDefault();
        event.stopPropagation();
      }

      if (event.key === 'ArrowUp' && event.target.previousElementSibling) {
        event.target.previousElementSibling.focus();
        event.preventDefault();
        event.stopPropagation();
      }
    };
  };

  var handleItemClick = function handleItemClick(option) {
    return function () {
      onChange({
        target: {
          name: name,
          value: option.value
        }
      });
      setDropdownOpen(false);
      buttonRef.current.focus();
    };
  };

  var selectedLabel = defaultLabel || (options.find(function (option) {
    return option.value === value;
  }) || {}).label;
  var iconName = dropdownOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down';

  var handleScroll = function handleScroll() {
    setLastScrollY(window.scrollY);
    setButtonBoundingBox(buttonRef.current.getBoundingClientRect());
  };

  var handleClickOutside = function handleClickOutside(event) {
    if (dropdownOpen && buttonRef.current && !buttonRef.current.contains(event.target)) {
      setDropdownOpen(false);
      buttonRef.current.focus();
    }
  };

  (0, _react.useLayoutEffect)(function () {
    setButtonBoundingBox(buttonRef.current.getBoundingClientRect());
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    return function () {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownOpen]);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_button["default"], _extends({
    id: name,
    ref: buttonRef,
    onClick: toggleDropdown,
    onBlur: function onBlur() {
      if (_onBlur) _onBlur({
        target: {
          name: name,
          value: value
        }
      });
    },
    bg: "white",
    minWidth: "200px",
    "aria-label": selectedLabel,
    "aria-haspopup": "listbox",
    "aria-expanded": String(dropdownOpen)
  }, buttonProps), _react["default"].createElement(_flex["default"], {
    justifyContent: "space-between",
    alignItems: "center",
    "aria-hidden": "true"
  }, _react["default"].createElement(_text["default"], null, selectedLabel), _react["default"].createElement(_icon["default"], _extends({
    name: iconName,
    color: "gray800",
    fontSize: "l"
  }, iconProps)))), dropdownOpen && _react["default"].createElement(_box["default"], {
    position: "absolute",
    top: "".concat(buttonBoundingBox.bottom + dropdownOffset + lastScrollY, "px"),
    left: "".concat(buttonBoundingBox.left, "px"),
    width: "".concat(buttonBoundingBox.width, "px"),
    bg: "white",
    maxHeight: "250px",
    overflow: "hidden",
    borderRadius: "2px",
    boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.60);",
    zIndex: "100",
    style: {
      marginBottom: '10px'
    } // HACK: when open dropdown reaches bottom of page

  }, _react["default"].createElement(_box["default"], _extends({
    as: "ul",
    id: getDropdownId(name),
    position: "relative",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    maxHeight: "250px",
    overflowY: "auto",
    role: "listbox",
    tabIndex: "-1",
    "aria-activedescendant": getItemId(name, value),
    onKeyUp: handleEscapeKeyPress
  }, dropdownProps), options.map(function (option, idx) {
    return _react["default"].createElement(_text["default"], {
      id: getItemId(name, option.value),
      as: "li",
      p: "12px",
      role: "option",
      key: option.value,
      color: value === option.value ? 'primary' : undefined,
      "aria-selected": String(value === option.value),
      tabIndex: idx + 1,
      outlineColor: "info",
      onKeyDown: handleListKeyboardNavigation(option),
      onClick: handleItemClick(option)
    }, option.label);
  }))));
};

Select.propTypes = {
  options: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    value: _propTypes.string.isRequired,
    label: _propTypes.string.isRequired
  })).isRequired,
  name: _propTypes.string.isRequired,
  value: _propTypes.string.isRequired,
  onChange: _propTypes.func.isRequired,
  onBlur: _propTypes.func,
  defaultLabel: _propTypes.string,
  buttonProps: (0, _propTypes.shape)({}),
  iconProps: (0, _propTypes.shape)({}),
  dropdownProps: (0, _propTypes.shape)({})
};
Select.defaultProps = {
  onBlur: undefined,
  defaultLabel: undefined,
  buttonProps: undefined,
  iconProps: undefined,
  dropdownProps: undefined
};
var _default = Select;
exports["default"] = _default;