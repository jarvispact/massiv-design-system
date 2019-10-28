"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getEmptyInitialValues = function getEmptyInitialValues() {
  var initialValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(initialValues).reduce(function (acc, key) {
    acc[key] = '';
    return acc;
  }, {});
};

var useForm = function useForm(_ref) {
  var initialValues = _ref.initialValues,
      validate = _ref.validate,
      onSubmit = _ref.onSubmit,
      onSubmitSuccess = _ref.onSubmitSuccess,
      onSubmitError = _ref.onSubmitError;

  var _useState = (0, _react.useState)(_objectSpread({}, initialValues)),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = (0, _react.useState)(getEmptyInitialValues(initialValues)),
      _useState4 = _slicedToArray(_useState3, 2),
      warnings = _useState4[0],
      setWarnings = _useState4[1];

  var _useState5 = (0, _react.useState)(getEmptyInitialValues(initialValues)),
      _useState6 = _slicedToArray(_useState5, 2),
      errors = _useState6[0],
      setErrors = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      formError = _useState10[0],
      setFormError = _useState10[1];

  var formHasErrors = Object.values(errors).some(Boolean);
  var submitDisabled = loading || formHasErrors;

  var handleChange = function handleChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;

    var newValues = _objectSpread({}, values, _defineProperty({}, name, value));

    var _validate = validate(newValues),
        newWarnings = _validate.warnings,
        newErrors = _validate.errors;

    setValues(function (prevValues) {
      return _objectSpread({}, prevValues, _defineProperty({}, name, value));
    });
    setWarnings(function (prevWarnings) {
      return _objectSpread({}, prevWarnings, _defineProperty({}, name, newWarnings[name]));
    });
    setErrors(function (prevErrors) {
      return _objectSpread({}, prevErrors, _defineProperty({}, name, newErrors[name]));
    });
  };

  var handleBlur =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(event) {
      var _event$target2, name, value, newValues, _validate2, newWarnings, newErrors;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _event$target2 = event.target, name = _event$target2.name, value = _event$target2.value;
              newValues = _objectSpread({}, values, _defineProperty({}, name, value));
              _validate2 = validate(newValues), newWarnings = _validate2.warnings, newErrors = _validate2.errors;
              setWarnings(function (prevWarnings) {
                return _objectSpread({}, prevWarnings, _defineProperty({}, name, newWarnings[name]));
              });
              setErrors(function (prevErrors) {
                return _objectSpread({}, prevErrors, _defineProperty({}, name, newErrors[name]));
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleBlur(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var validation, abortSubmit, result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              validation = validate(values);
              Object.keys(validation.errors).forEach(function (key) {
                setErrors(function (prevErrors) {
                  return _objectSpread({}, prevErrors, _defineProperty({}, key, validation.errors[key]));
                });
              });
              abortSubmit = Object.values(validation.errors).some(Boolean);

              if (!abortSubmit) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return");

            case 6:
              setLoading(true);
              _context2.next = 9;
              return onSubmit(values);

            case 9:
              result = _context2.sent;
              setFormError(null);
              setLoading(false);
              if (onSubmitSuccess) onSubmitSuccess(result);
              return _context2.abrupt("return", result);

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](0);
              console.error('Error while submitting form');
              console.error(_context2.t0);
              setFormError(_context2.t0);
              setLoading(false);
              if (onSubmitError) onSubmitError(_context2.t0);
              return _context2.abrupt("return", _context2.t0);

            case 24:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 16]]);
    }));

    return function handleSubmit() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    setValues(_objectSpread({}, initialValues));
    setWarnings(getEmptyInitialValues(initialValues));
    setErrors(getEmptyInitialValues(initialValues));
  }, [initialValues]);
  return {
    values: values,
    warnings: warnings,
    errors: errors,
    handleChange: handleChange,
    handleBlur: handleBlur,
    loading: loading,
    handleSubmit: handleSubmit,
    submitDisabled: submitDisabled,
    formError: formError
  };
};

var _default = useForm;
exports["default"] = _default;