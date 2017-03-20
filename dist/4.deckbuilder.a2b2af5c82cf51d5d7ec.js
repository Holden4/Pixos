webpackJsonp([4],{

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(311);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RaisedButton = __webpack_require__(479);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _menu = __webpack_require__(511);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _Popover = __webpack_require__(523);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Menu = __webpack_require__(548);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuItem = __webpack_require__(555);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _reactRouter = __webpack_require__(224);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PixosMenu = function (_React$Component) {
	  (0, _inherits3.default)(PixosMenu, _React$Component);
	
	  function PixosMenu(props) {
	    (0, _classCallCheck3.default)(this, PixosMenu);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (PixosMenu.__proto__ || (0, _getPrototypeOf2.default)(PixosMenu)).call(this, props));
	
	    _this.state = {
	      open: false
	    };
	
	    _this.handleTouchTap = _this.handleTouchTap.bind(_this);
	    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
	    return _this;
	  }
	
	  (0, _createClass3.default)(PixosMenu, [{
	    key: 'handleTouchTap',
	    value: function handleTouchTap(event) {
	      // This prevents ghost click.
	      event.preventDefault();
	
	      this.setState({
	        open: true,
	        anchorEl: event.currentTarget
	      });
	    }
	  }, {
	    key: 'handleRequestClose',
	    value: function handleRequestClose() {
	      this.setState({
	        open: false
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'mb-2' },
	        _react2.default.createElement(_RaisedButton2.default, {
	          onTouchTap: this.handleTouchTap,
	          label: 'Pixos',
	          labelPosition: 'before',
	          primary: true,
	          icon: _react2.default.createElement(_menu2.default, null)
	        }),
	        _react2.default.createElement(
	          _Popover2.default,
	          {
	            open: this.state.open,
	            anchorEl: this.state.anchorEl,
	            anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
	            targetOrigin: { horizontal: 'left', vertical: 'top' },
	            onRequestClose: this.handleRequestClose
	          },
	          _react2.default.createElement(
	            _Menu2.default,
	            null,
	            _react2.default.createElement(
	              _reactRouter.IndexLink,
	              { to: '/', activeClassName: 'route--active' },
	              _react2.default.createElement(_MenuItem2.default, { primaryText: 'Home' })
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return PixosMenu;
	}(_react2.default.Component);
	
	exports.default = PixosMenu;

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(512);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(521);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationMenu = function NavigationMenu(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' })
	  );
	};
	NavigationMenu = (0, _pure2.default)(NavigationMenu);
	NavigationMenu.displayName = 'NavigationMenu';
	NavigationMenu.muiName = 'SvgIcon';
	
	exports.default = NavigationMenu;

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _shouldUpdate = __webpack_require__(513);
	
	var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);
	
	var _shallowEqual = __webpack_require__(491);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _createHelper = __webpack_require__(514);
	
	var _createHelper2 = _interopRequireDefault(_createHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pure = (0, _shouldUpdate2.default)(function (props, nextProps) {
	  return !(0, _shallowEqual2.default)(props, nextProps);
	});
	
	exports.default = (0, _createHelper2.default)(pure, 'pure', true, true);

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(24);
	
	var _createHelper = __webpack_require__(514);
	
	var _createHelper2 = _interopRequireDefault(_createHelper);
	
	var _createEagerFactory = __webpack_require__(517);
	
	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var shouldUpdate = function shouldUpdate(test) {
	  return function (BaseComponent) {
	    var factory = (0, _createEagerFactory2.default)(BaseComponent);
	    return function (_Component) {
	      _inherits(_class, _Component);
	
	      function _class() {
	        _classCallCheck(this, _class);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }
	
	      _class.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return test(this.props, nextProps);
	      };
	
	      _class.prototype.render = function render() {
	        return factory(this.props);
	      };
	
	      return _class;
	    }(_react.Component);
	  };
	};
	
	exports.default = (0, _createHelper2.default)(shouldUpdate, 'shouldUpdate');

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	var createHelper = function createHelper(func, helperName) {
	  var setDisplayName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	  var noArgs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	
	  if (("development") !== 'production' && setDisplayName) {
	    var _ret = function () {
	      /* eslint-disable global-require */
	      var wrapDisplayName = __webpack_require__(515).default;
	      /* eslint-enable global-require */
	
	      if (noArgs) {
	        return {
	          v: function v(BaseComponent) {
	            var Component = func(BaseComponent);
	            Component.displayName = wrapDisplayName(BaseComponent, helperName);
	            return Component;
	          }
	        };
	      }
	
	      return {
	        v: function v() {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }
	
	          return function (BaseComponent) {
	            var Component = func.apply(undefined, args)(BaseComponent);
	            Component.displayName = wrapDisplayName(BaseComponent, helperName);
	            return Component;
	          };
	        }
	      };
	    }();
	
	    if (typeof _ret === "object") return _ret.v;
	  }
	
	  return func;
	};
	
	exports.default = createHelper;

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _getDisplayName = __webpack_require__(516);
	
	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
	  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
	};
	
	exports.default = wrapDisplayName;

/***/ },

/***/ 516:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var getDisplayName = function getDisplayName(Component) {
	  if (typeof Component === 'string') {
	    return Component;
	  }
	
	  if (!Component) {
	    return undefined;
	  }
	
	  return Component.displayName || Component.name || 'Component';
	};
	
	exports.default = getDisplayName;

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createEagerElementUtil = __webpack_require__(518);
	
	var _createEagerElementUtil2 = _interopRequireDefault(_createEagerElementUtil);
	
	var _isReferentiallyTransparentFunctionComponent = __webpack_require__(519);
	
	var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(_isReferentiallyTransparentFunctionComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createFactory = function createFactory(type) {
	  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
	  return function (p, c) {
	    return (0, _createEagerElementUtil2.default)(false, isReferentiallyTransparent, type, p, c);
	  };
	};
	
	exports.default = createFactory;

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createEagerElementUtil = function createEagerElementUtil(hasKey, isReferentiallyTransparent, type, props, children) {
	  if (!hasKey && isReferentiallyTransparent) {
	    if (children) {
	      return type(_extends({}, props, { children: children }));
	    }
	    return type(props);
	  }
	
	  var Component = type;
	
	  if (children) {
	    return _react2.default.createElement(
	      Component,
	      props,
	      children
	    );
	  }
	
	  return _react2.default.createElement(Component, props);
	};
	
	exports.default = createEagerElementUtil;

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _isClassComponent = __webpack_require__(520);
	
	var _isClassComponent2 = _interopRequireDefault(_isClassComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
	  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && (("development") === 'production' || !Component.propTypes));
	};
	
	exports.default = isReferentiallyTransparentFunctionComponent;

/***/ },

/***/ 520:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var isClassComponent = function isClassComponent(Component) {
	  return Boolean(Component && Component.prototype && typeof Component.prototype.isReactComponent === 'object');
	};
	
	exports.default = isClassComponent;

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _SvgIcon = __webpack_require__(522);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _SvgIcon2.default;

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(280);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(481);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(482);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(483);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SvgIcon = function (_Component) {
	  (0, _inherits3.default)(SvgIcon, _Component);
	
	  function SvgIcon() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, SvgIcon);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SvgIcon.__proto__ || (0, _getPrototypeOf2.default)(SvgIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({ hovered: false });
	      _this.props.onMouseLeave(event);
	    }, _this.handleMouseEnter = function (event) {
	      _this.setState({ hovered: true });
	      _this.props.onMouseEnter(event);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(SvgIcon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          color = _props.color,
	          hoverColor = _props.hoverColor,
	          onMouseEnter = _props.onMouseEnter,
	          onMouseLeave = _props.onMouseLeave,
	          style = _props.style,
	          viewBox = _props.viewBox,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);
	      var _context$muiTheme = this.context.muiTheme,
	          svgIcon = _context$muiTheme.svgIcon,
	          prepareStyles = _context$muiTheme.prepareStyles;
	
	
	      var offColor = color ? color : 'currentColor';
	      var onColor = hoverColor ? hoverColor : offColor;
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        display: 'inline-block',
	        color: svgIcon.color,
	        fill: this.state.hovered ? onColor : offColor,
	        height: 24,
	        width: 24,
	        userSelect: 'none',
	        transition: _transitions2.default.easeOut()
	      }, style);
	
	      return _react2.default.createElement(
	        'svg',
	        (0, _extends3.default)({}, other, {
	          onMouseEnter: this.handleMouseEnter,
	          onMouseLeave: this.handleMouseLeave,
	          style: prepareStyles(mergedStyles),
	          viewBox: viewBox
	        }),
	        children
	      );
	    }
	  }]);
	  return SvgIcon;
	}(_react.Component);
	
	SvgIcon.muiName = 'SvgIcon';
	SvgIcon.defaultProps = {
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  viewBox: '0 0 24 24'
	};
	SvgIcon.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	 true ? SvgIcon.propTypes = {
	  /**
	   * Elements passed into the SVG Icon.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * This is the fill color of the svg icon.
	   * If not specified, this component will default
	   * to muiTheme.palette.textColor.
	   */
	  color: _react.PropTypes.string,
	  /**
	   * This is the icon color when the mouse hovers over the icon.
	   */
	  hoverColor: _react.PropTypes.string,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Allows you to redefine what the coordinates
	   * without units mean inside an svg element. For example,
	   * if the SVG element is 500 (width) by 200 (height), and you
	   * pass viewBox="0 0 50 20", this means that the coordinates inside
	   * the svg will go from the top left corner (0,0) to bottom right (50,20)
	   * and each unit will be worth 10px.
	   */
	  viewBox: _react.PropTypes.string
	} : void 0;
	exports.default = SvgIcon;

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.PopoverAnimationVertical = exports.Popover = undefined;
	
	var _Popover2 = __webpack_require__(524);
	
	var _Popover3 = _interopRequireDefault(_Popover2);
	
	var _PopoverAnimationVertical2 = __webpack_require__(547);
	
	var _PopoverAnimationVertical3 = _interopRequireDefault(_PopoverAnimationVertical2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Popover = _Popover3.default;
	exports.PopoverAnimationVertical = _PopoverAnimationVertical3.default;
	exports.default = _Popover3.default;

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(280);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(481);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(482);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(55);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactEventListener = __webpack_require__(525);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	var _RenderToLayer = __webpack_require__(543);
	
	var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);
	
	var _propTypes = __webpack_require__(509);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Paper = __webpack_require__(507);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _lodash = __webpack_require__(544);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _PopoverAnimationDefault = __webpack_require__(545);
	
	var _PopoverAnimationDefault2 = _interopRequireDefault(_PopoverAnimationDefault);
	
	var _iOSHelpers = __webpack_require__(546);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = {
	  root: {
	    display: 'none'
	  }
	};
	
	var Popover = function (_Component) {
	  (0, _inherits3.default)(Popover, _Component);
	
	  function Popover(props, context) {
	    (0, _classCallCheck3.default)(this, Popover);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Popover.__proto__ || (0, _getPrototypeOf2.default)(Popover)).call(this, props, context));
	
	    _this.timeout = null;
	
	    _this.renderLayer = function () {
	      var _this$props = _this.props,
	          animated = _this$props.animated,
	          animation = _this$props.animation,
	          anchorEl = _this$props.anchorEl,
	          anchorOrigin = _this$props.anchorOrigin,
	          autoCloseWhenOffScreen = _this$props.autoCloseWhenOffScreen,
	          canAutoPosition = _this$props.canAutoPosition,
	          children = _this$props.children,
	          onRequestClose = _this$props.onRequestClose,
	          style = _this$props.style,
	          targetOrigin = _this$props.targetOrigin,
	          useLayerForClickAway = _this$props.useLayerForClickAway,
	          other = (0, _objectWithoutProperties3.default)(_this$props, ['animated', 'animation', 'anchorEl', 'anchorOrigin', 'autoCloseWhenOffScreen', 'canAutoPosition', 'children', 'onRequestClose', 'style', 'targetOrigin', 'useLayerForClickAway']);
	
	
	      var styleRoot = style;
	
	      if (!animated) {
	        styleRoot = {
	          position: 'fixed',
	          zIndex: _this.context.muiTheme.zIndex.popover
	        };
	
	        if (!_this.state.open) {
	          return null;
	        }
	
	        return _react2.default.createElement(
	          _Paper2.default,
	          (0, _extends3.default)({ style: (0, _simpleAssign2.default)(styleRoot, style) }, other),
	          children
	        );
	      }
	
	      var Animation = animation || _PopoverAnimationDefault2.default;
	
	      return _react2.default.createElement(
	        Animation,
	        (0, _extends3.default)({
	          targetOrigin: targetOrigin,
	          style: styleRoot
	        }, other, {
	          open: _this.state.open && !_this.state.closing
	        }),
	        children
	      );
	    };
	
	    _this.componentClickAway = function (event) {
	      event.preventDefault();
	      _this.requestClose('clickAway');
	    };
	
	    _this.setPlacement = function (scrolling) {
	      if (!_this.state.open) {
	        return;
	      }
	
	      if (!_this.refs.layer.getLayer()) {
	        return;
	      }
	
	      var targetEl = _this.refs.layer.getLayer().children[0];
	      if (!targetEl) {
	        return;
	      }
	
	      var _this$props2 = _this.props,
	          targetOrigin = _this$props2.targetOrigin,
	          anchorOrigin = _this$props2.anchorOrigin;
	
	      var anchorEl = _this.props.anchorEl || _this.anchorEl;
	
	      var anchor = _this.getAnchorPosition(anchorEl);
	      var target = _this.getTargetPosition(targetEl);
	
	      var targetPosition = {
	        top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
	        left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
	      };
	
	      if (scrolling && _this.props.autoCloseWhenOffScreen) {
	        _this.autoCloseWhenOffScreen(anchor);
	      }
	
	      if (_this.props.canAutoPosition) {
	        target = _this.getTargetPosition(targetEl); // update as height may have changed
	        targetPosition = _this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
	      }
	
	      targetEl.style.top = Math.max(0, targetPosition.top) + 'px';
	      targetEl.style.left = Math.max(0, targetPosition.left) + 'px';
	      targetEl.style.maxHeight = window.innerHeight + 'px';
	    };
	
	    _this.handleResize = (0, _lodash2.default)(_this.setPlacement, 100);
	    _this.handleScroll = (0, _lodash2.default)(_this.setPlacement.bind(_this, true), 50);
	
	    _this.state = {
	      open: props.open,
	      closing: false
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(Popover, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setPlacement();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;
	
	      if (nextProps.open === this.props.open) {
	        return;
	      }
	
	      if (nextProps.open) {
	        clearTimeout(this.timeout);
	        this.timeout = null;
	        this.anchorEl = nextProps.anchorEl || this.props.anchorEl;
	        this.setState({
	          open: true,
	          closing: false
	        });
	      } else {
	        if (nextProps.animated) {
	          if (this.timeout !== null) return;
	          this.setState({ closing: true });
	          this.timeout = setTimeout(function () {
	            _this2.setState({
	              open: false
	            }, function () {
	              _this2.timeout = null;
	            });
	          }, 500);
	        } else {
	          this.setState({
	            open: false
	          });
	        }
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.setPlacement();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.handleResize.cancel();
	      this.handleScroll.cancel();
	
	      if (this.timeout) {
	        clearTimeout(this.timeout);
	        this.timeout = null;
	      }
	    }
	  }, {
	    key: 'requestClose',
	    value: function requestClose(reason) {
	      if (this.props.onRequestClose) {
	        this.props.onRequestClose(reason);
	      }
	    }
	  }, {
	    key: 'getAnchorPosition',
	    value: function getAnchorPosition(el) {
	      if (!el) {
	        el = _reactDom2.default.findDOMNode(this);
	      }
	
	      var rect = el.getBoundingClientRect();
	      var a = {
	        top: rect.top,
	        left: rect.left,
	        width: el.offsetWidth,
	        height: el.offsetHeight
	      };
	
	      a.right = rect.right || a.left + a.width;
	
	      // The fixed positioning isn't respected on iOS when an input is focused.
	      // We need to compute the position from the top of the page and not the viewport.
	      if ((0, _iOSHelpers.isIOS)() && document.activeElement.tagName === 'INPUT') {
	        a.bottom = (0, _iOSHelpers.getOffsetTop)(el) + a.height;
	      } else {
	        a.bottom = rect.bottom || a.top + a.height;
	      }
	      a.middle = a.left + (a.right - a.left) / 2;
	      a.center = a.top + (a.bottom - a.top) / 2;
	
	      return a;
	    }
	  }, {
	    key: 'getTargetPosition',
	    value: function getTargetPosition(targetEl) {
	      return {
	        top: 0,
	        center: targetEl.offsetHeight / 2,
	        bottom: targetEl.offsetHeight,
	        left: 0,
	        middle: targetEl.offsetWidth / 2,
	        right: targetEl.offsetWidth
	      };
	    }
	  }, {
	    key: 'autoCloseWhenOffScreen',
	    value: function autoCloseWhenOffScreen(anchorPosition) {
	      if (anchorPosition.top < 0 || anchorPosition.top > window.innerHeight || anchorPosition.left < 0 || anchorPosition.left > window.innerWidth) {
	        this.requestClose('offScreen');
	      }
	    }
	  }, {
	    key: 'getOverlapMode',
	    value: function getOverlapMode(anchor, target, median) {
	      if ([anchor, target].indexOf(median) >= 0) return 'auto';
	      if (anchor === target) return 'inclusive';
	      return 'exclusive';
	    }
	  }, {
	    key: 'getPositions',
	    value: function getPositions(anchor, target) {
	      var a = (0, _extends3.default)({}, anchor);
	      var t = (0, _extends3.default)({}, target);
	
	      var positions = {
	        x: ['left', 'right'].filter(function (p) {
	          return p !== t.horizontal;
	        }),
	        y: ['top', 'bottom'].filter(function (p) {
	          return p !== t.vertical;
	        })
	      };
	
	      var overlap = {
	        x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
	        y: this.getOverlapMode(a.vertical, t.vertical, 'center')
	      };
	
	      positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
	      positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');
	
	      if (overlap.y !== 'auto') {
	        a.vertical = a.vertical === 'top' ? 'bottom' : 'top';
	        if (overlap.y === 'inclusive') {
	          t.vertical = t.vertical;
	        }
	      }
	
	      if (overlap.x !== 'auto') {
	        a.horizontal = a.horizontal === 'left' ? 'right' : 'left';
	        if (overlap.y === 'inclusive') {
	          t.horizontal = t.horizontal;
	        }
	      }
	
	      return {
	        positions: positions,
	        anchorPos: a
	      };
	    }
	  }, {
	    key: 'applyAutoPositionIfNeeded',
	    value: function applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition) {
	      var _getPositions = this.getPositions(anchorOrigin, targetOrigin),
	          positions = _getPositions.positions,
	          anchorPos = _getPositions.anchorPos;
	
	      if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
	        var newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
	        if (newTop + target.bottom <= window.innerHeight) {
	          targetPosition.top = Math.max(0, newTop);
	        } else {
	          newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
	          if (newTop + target.bottom <= window.innerHeight) {
	            targetPosition.top = Math.max(0, newTop);
	          }
	        }
	      }
	
	      if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
	        var newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
	        if (newLeft + target.right <= window.innerWidth) {
	          targetPosition.left = Math.max(0, newLeft);
	        } else {
	          newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
	          if (newLeft + target.right <= window.innerWidth) {
	            targetPosition.left = Math.max(0, newLeft);
	          }
	        }
	      }
	
	      return targetPosition;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: styles.root },
	        _react2.default.createElement(_reactEventListener2.default, {
	          target: 'window',
	          onScroll: this.handleScroll,
	          onResize: this.handleResize
	        }),
	        _react2.default.createElement(_RenderToLayer2.default, {
	          ref: 'layer',
	          open: this.state.open,
	          componentClickAway: this.componentClickAway,
	          useLayerForClickAway: this.props.useLayerForClickAway,
	          render: this.renderLayer
	        })
	      );
	    }
	  }]);
	  return Popover;
	}(_react.Component);
	
	Popover.defaultProps = {
	  anchorOrigin: {
	    vertical: 'bottom',
	    horizontal: 'left'
	  },
	  animated: true,
	  autoCloseWhenOffScreen: true,
	  canAutoPosition: true,
	  onRequestClose: function onRequestClose() {},
	  open: false,
	  style: {
	    overflowY: 'auto'
	  },
	  targetOrigin: {
	    vertical: 'top',
	    horizontal: 'left'
	  },
	  useLayerForClickAway: true,
	  zDepth: 1
	};
	Popover.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	 true ? Popover.propTypes = {
	  /**
	   * This is the DOM element that will be used to set the position of the
	   * popover.
	   */
	  anchorEl: _react.PropTypes.object,
	  /**
	   * This is the point on the anchor where the popover's
	   * `targetOrigin` will attach to.
	   * Options:
	   * vertical: [top, center, bottom]
	   * horizontal: [left, middle, right].
	   */
	  anchorOrigin: _propTypes2.default.origin,
	  /**
	   * If true, the popover will apply transitions when
	   * it is added to the DOM.
	   */
	  animated: _react.PropTypes.bool,
	  /**
	   * Override the default animation component used.
	   */
	  animation: _react.PropTypes.func,
	  /**
	   * If true, the popover will hide when the anchor is scrolled off the screen.
	   */
	  autoCloseWhenOffScreen: _react.PropTypes.bool,
	  /**
	   * If true, the popover (potentially) ignores `targetOrigin`
	   * and `anchorOrigin` to make itself fit on screen,
	   * which is useful for mobile devices.
	   */
	  canAutoPosition: _react.PropTypes.bool,
	  /**
	   * The content of the popover.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * Callback function fired when the popover is requested to be closed.
	   *
	   * @param {string} reason The reason for the close request. Possibles values
	   * are 'clickAway' and 'offScreen'.
	   */
	  onRequestClose: _react.PropTypes.func,
	  /**
	   * If true, the popover is visible.
	   */
	  open: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * This is the point on the popover which will attach to
	   * the anchor's origin.
	   * Options:
	   * vertical: [top, center, bottom]
	   * horizontal: [left, middle, right].
	   */
	  targetOrigin: _propTypes2.default.origin,
	  /**
	   * If true, the popover will render on top of an invisible
	   * layer, which will prevent clicks to the underlying
	   * elements, and trigger an `onRequestClose('clickAway')` call.
	   */
	  useLayerForClickAway: _react.PropTypes.bool,
	  /**
	   * The zDepth of the popover.
	   */
	  zDepth: _propTypes2.default.zDepth
	} : void 0;
	exports.default = Popover;

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(526);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(527);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(528);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(530);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(534);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _typeof2 = __webpack_require__(531);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _keys = __webpack_require__(537);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _assign = __webpack_require__(538);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	exports.withOptions = withOptions;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsShallowCompare = __webpack_require__(539);
	
	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);
	
	var _warning = __webpack_require__(232);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _supports = __webpack_require__(541);
	
	var supports = _interopRequireWildcard(_supports);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable prefer-spread */
	
	var defaultEventOptions = {
	  capture: false,
	  passive: false
	};
	
	function mergeDefaultEventOptions(options) {
	  return (0, _assign2.default)({}, defaultEventOptions, options);
	}
	
	function getEventListenerArgs(eventName, callback, options) {
	  var args = [eventName, callback];
	  args.push(supports.passiveOption ? options : options.capture);
	  return args;
	}
	
	function on(target, eventName, callback, options) {
	  if (supports.addEventListener) {
	    target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
	  } else if (supports.attachEvent) {
	    // IE8+ Support
	    target.attachEvent('on' + eventName, function () {
	      callback.call(target);
	    });
	  }
	}
	
	function off(target, eventName, callback, options) {
	  if (supports.removeEventListener) {
	    target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
	  } else if (supports.detachEvent) {
	    // IE8+ Support
	    target.detachEvent('on' + eventName, callback);
	  }
	}
	
	var state = {};
	
	function forEachListener(props, iteratee) {
	  (0, _keys2.default)(props).forEach(function (name) {
	    if (name.substring(0, 2) !== 'on') {
	      return;
	    }
	
	    var prop = props[name];
	    var type = typeof prop === 'undefined' ? 'undefined' : (0, _typeof3.default)(prop);
	    var isObject = type === 'object';
	    var isFunction = type === 'function';
	
	    if (!isObject && !isFunction) {
	      return;
	    }
	
	    var capture = name.substr(-7).toLowerCase() === 'capture';
	    var eventName = name.substring(2).toLowerCase();
	    eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;
	
	    if (isObject) {
	      iteratee(eventName, prop.handler, prop.options);
	    } else {
	      iteratee(eventName, prop, mergeDefaultEventOptions({ capture: capture }));
	    }
	  });
	}
	
	function withOptions(handler, options) {
	   true ? (0, _warning2.default)(options, 'react-event-listener: Should be specified options in withOptions.') : void 0;
	
	  return {
	    handler: handler,
	    options: mergeDefaultEventOptions(options)
	  };
	}
	
	var EventListener = function (_Component) {
	  (0, _inherits3.default)(EventListener, _Component);
	
	  function EventListener() {
	    (0, _classCallCheck3.default)(this, EventListener);
	    return (0, _possibleConstructorReturn3.default)(this, (EventListener.__proto__ || (0, _getPrototypeOf2.default)(EventListener)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(EventListener, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.addListeners();
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return (0, _reactAddonsShallowCompare2.default)({
	        props: this.props,
	        state: state
	      }, nextProps, state);
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate() {
	      this.removeListeners();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.addListeners();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.removeListeners();
	    }
	  }, {
	    key: 'addListeners',
	    value: function addListeners() {
	      this.applyListeners(on);
	    }
	  }, {
	    key: 'removeListeners',
	    value: function removeListeners() {
	      this.applyListeners(off);
	    }
	  }, {
	    key: 'applyListeners',
	    value: function applyListeners(onOrOff) {
	      var target = this.props.target;
	
	
	      if (target) {
	        var element = target;
	
	        if (typeof target === 'string') {
	          element = window[target];
	        }
	
	        forEachListener(this.props, onOrOff.bind(null, element));
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children || null;
	    }
	  }]);
	  return EventListener;
	}(_react.Component);
	
	 true ? EventListener.propTypes = {
	  /**
	   * You can provide a single child too.
	   */
	  children: _react.PropTypes.element,
	  /**
	   * The DOM target to listen to.
	   */
	  target: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]).isRequired
	} : void 0;
	exports.default = EventListener;

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(305), __esModule: true };

/***/ },

/***/ 527:
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(529);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(312), __esModule: true };

/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(531);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(532);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(533);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(317), __esModule: true };

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(335), __esModule: true };

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(535);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(536);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(531);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(350), __esModule: true };

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(354), __esModule: true };

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(431), __esModule: true };

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(282), __esModule: true };

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(540);

/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var shallowEqual = __webpack_require__(146);
	
	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}
	
	module.exports = shallowCompare;

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.passiveOption = exports.detachEvent = exports.attachEvent = exports.removeEventListener = exports.addEventListener = exports.canUseDOM = undefined;
	
	var _defineProperty = __webpack_require__(542);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Inspired by https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	var addEventListener = exports.addEventListener = canUseDOM && 'addEventListener' in window;
	var removeEventListener = exports.removeEventListener = canUseDOM && 'removeEventListener' in window;
	
	// IE8+ Support
	var attachEvent = exports.attachEvent = canUseDOM && 'attachEvent' in window;
	var detachEvent = exports.detachEvent = canUseDOM && 'detachEvent' in window;
	
	// Passive options
	// Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js
	var passiveOption = exports.passiveOption = function () {
	  var cache = null;
	
	  return function () {
	    if (cache !== null) {
	      return cache;
	    }
	
	    var supportsPassiveOption = false;
	
	    try {
	      window.addEventListener('test', null, (0, _defineProperty2.default)({}, 'passive', {
	        get: function get() {
	          supportsPassiveOption = true;
	        }
	      }));
	    } catch (e) {} // eslint-disable-line no-empty
	
	    cache = supportsPassiveOption;
	
	    return supportsPassiveOption;
	  }();
	}();

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty = __webpack_require__(529);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	exports.default = defineProperty;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//  weak
	
	function defineProperty(o, p, attr) {
	  return (0, _defineProperty2.default)(o, p, attr);
	}

/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _reactDom = __webpack_require__(55);
	
	var _dom = __webpack_require__(505);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// heavily inspired by https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
	var RenderToLayer = function (_Component) {
	  (0, _inherits3.default)(RenderToLayer, _Component);
	
	  function RenderToLayer() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, RenderToLayer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RenderToLayer.__proto__ || (0, _getPrototypeOf2.default)(RenderToLayer)).call.apply(_ref, [this].concat(args))), _this), _this.onClickAway = function (event) {
	      if (event.defaultPrevented) {
	        return;
	      }
	
	      if (!_this.props.componentClickAway) {
	        return;
	      }
	
	      if (!_this.props.open) {
	        return;
	      }
	
	      var el = _this.layer;
	      if (event.target !== el && event.target === window || document.documentElement.contains(event.target) && !_dom2.default.isDescendant(el, event.target)) {
	        _this.props.componentClickAway(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(RenderToLayer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.renderLayer();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.renderLayer();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unrenderLayer();
	    }
	  }, {
	    key: 'getLayer',
	    value: function getLayer() {
	      return this.layer;
	    }
	  }, {
	    key: 'unrenderLayer',
	    value: function unrenderLayer() {
	      if (!this.layer) {
	        return;
	      }
	
	      if (this.props.useLayerForClickAway) {
	        this.layer.style.position = 'relative';
	        this.layer.removeEventListener('touchstart', this.onClickAway);
	        this.layer.removeEventListener('click', this.onClickAway);
	      } else {
	        window.removeEventListener('touchstart', this.onClickAway);
	        window.removeEventListener('click', this.onClickAway);
	      }
	
	      (0, _reactDom.unmountComponentAtNode)(this.layer);
	      document.body.removeChild(this.layer);
	      this.layer = null;
	    }
	
	    /**
	     * By calling this method in componentDidMount() and
	     * componentDidUpdate(), you're effectively creating a "wormhole" that
	     * funnels React's hierarchical updates through to a DOM node on an
	     * entirely different part of the page.
	     */
	
	  }, {
	    key: 'renderLayer',
	    value: function renderLayer() {
	      var _this2 = this;
	
	      var _props = this.props,
	          open = _props.open,
	          render = _props.render;
	
	
	      if (open) {
	        if (!this.layer) {
	          this.layer = document.createElement('div');
	          document.body.appendChild(this.layer);
	
	          if (this.props.useLayerForClickAway) {
	            this.layer.addEventListener('touchstart', this.onClickAway);
	            this.layer.addEventListener('click', this.onClickAway);
	            this.layer.style.position = 'fixed';
	            this.layer.style.top = 0;
	            this.layer.style.bottom = 0;
	            this.layer.style.left = 0;
	            this.layer.style.right = 0;
	            this.layer.style.zIndex = this.context.muiTheme.zIndex.layer;
	          } else {
	            setTimeout(function () {
	              window.addEventListener('touchstart', _this2.onClickAway);
	              window.addEventListener('click', _this2.onClickAway);
	            }, 0);
	          }
	        }
	
	        var layerElement = render();
	        this.layerElement = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, layerElement, this.layer);
	      } else {
	        this.unrenderLayer();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	  return RenderToLayer;
	}(_react.Component);
	
	RenderToLayer.defaultProps = {
	  useLayerForClickAway: true
	};
	RenderToLayer.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	 true ? RenderToLayer.propTypes = {
	  componentClickAway: _react.PropTypes.func,
	  open: _react.PropTypes.bool.isRequired,
	  render: _react.PropTypes.func.isRequired,
	  useLayerForClickAway: _react.PropTypes.bool
	} : void 0;
	exports.default = RenderToLayer;

/***/ },

/***/ 544:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;
	
	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = throttle;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(482);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _transitions = __webpack_require__(483);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(509);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Paper = __webpack_require__(507);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context, state) {
	  var targetOrigin = props.targetOrigin;
	  var open = state.open;
	  var muiTheme = context.muiTheme;
	
	  var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');
	
	  return {
	    root: {
	      position: 'fixed',
	      zIndex: muiTheme.zIndex.popover,
	      opacity: open ? 1 : 0,
	      transform: open ? 'scale(1, 1)' : 'scale(0, 0)',
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity']),
	      maxHeight: '100%'
	    },
	    horizontal: {
	      maxHeight: '100%',
	      overflowY: 'auto',
	      transform: open ? 'scaleX(1)' : 'scaleX(0)',
	      opacity: open ? 1 : 0,
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity'])
	    },
	    vertical: {
	      opacity: open ? 1 : 0,
	      transform: open ? 'scaleY(1)' : 'scaleY(0)',
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      transition: _transitions2.default.easeOut('500ms', ['transform', 'opacity'])
	    }
	  };
	}
	
	var PopoverAnimationDefault = function (_Component) {
	  (0, _inherits3.default)(PopoverAnimationDefault, _Component);
	
	  function PopoverAnimationDefault() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, PopoverAnimationDefault);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PopoverAnimationDefault.__proto__ || (0, _getPrototypeOf2.default)(PopoverAnimationDefault)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      open: false
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(PopoverAnimationDefault, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        open: nextProps.open
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          zDepth = _props.zDepth;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          style: (0, _simpleAssign2.default)(styles.root, style),
	          zDepth: zDepth,
	          className: className
	        },
	        _react2.default.createElement(
	          'div',
	          { style: prepareStyles(styles.horizontal) },
	          _react2.default.createElement(
	            'div',
	            { style: prepareStyles(styles.vertical) },
	            this.props.children
	          )
	        )
	      );
	    }
	  }]);
	  return PopoverAnimationDefault;
	}(_react.Component);
	
	PopoverAnimationDefault.defaultProps = {
	  style: {},
	  zDepth: 1
	};
	PopoverAnimationDefault.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	 true ? PopoverAnimationDefault.propTypes = {
	  children: _react.PropTypes.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  open: _react.PropTypes.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  targetOrigin: _propTypes2.default.origin.isRequired,
	  zDepth: _propTypes2.default.zDepth
	} : void 0;
	exports.default = PopoverAnimationDefault;

/***/ },

/***/ 546:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	* Returns a number of pixels from the top of the screen for given dom element.
	*
	* @param {object} dom element
	* @returns {number} A position from the top of the screen in pixels
	*/
	var getOffsetTop = exports.getOffsetTop = function getOffsetTop(elem) {
	  var yPos = elem.offsetTop;
	  var tempEl = elem.offsetParent;
	
	  while (tempEl != null) {
	    yPos += tempEl.offsetTop;
	    tempEl = tempEl.offsetParent;
	  }
	
	  return yPos;
	};
	
	var isIOS = exports.isIOS = function isIOS() {
	  return (/iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream
	  );
	};

/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(482);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Paper = __webpack_require__(507);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _transitions = __webpack_require__(483);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _propTypes = __webpack_require__(509);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context, state) {
	  var targetOrigin = props.targetOrigin;
	  var open = state.open;
	  var muiTheme = context.muiTheme;
	
	  var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');
	
	  return {
	    root: {
	      position: 'fixed',
	      zIndex: muiTheme.zIndex.popover,
	      opacity: open ? 1 : 0,
	      transform: open ? 'scaleY(1)' : 'scaleY(0)',
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      transition: _transitions2.default.easeOut('450ms', ['transform', 'opacity']),
	      maxHeight: '100%'
	    }
	  };
	}
	
	var PopoverAnimationVertical = function (_Component) {
	  (0, _inherits3.default)(PopoverAnimationVertical, _Component);
	
	  function PopoverAnimationVertical() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, PopoverAnimationVertical);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PopoverAnimationVertical.__proto__ || (0, _getPrototypeOf2.default)(PopoverAnimationVertical)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      open: false
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(PopoverAnimationVertical, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        open: nextProps.open
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          zDepth = _props.zDepth;
	
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          style: (0, _simpleAssign2.default)(styles.root, style),
	          zDepth: zDepth,
	          className: className
	        },
	        this.props.children
	      );
	    }
	  }]);
	  return PopoverAnimationVertical;
	}(_react.Component);
	
	PopoverAnimationVertical.defaultProps = {
	  style: {},
	  zDepth: 1
	};
	PopoverAnimationVertical.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	 true ? PopoverAnimationVertical.propTypes = {
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string,
	  open: _react.PropTypes.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  targetOrigin: _propTypes2.default.origin.isRequired,
	  zDepth: _propTypes2.default.zDepth
	} : void 0;
	exports.default = PopoverAnimationVertical;

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.MenuItem = exports.Menu = undefined;
	
	var _Menu2 = __webpack_require__(549);
	
	var _Menu3 = _interopRequireDefault(_Menu2);
	
	var _MenuItem2 = __webpack_require__(555);
	
	var _MenuItem3 = _interopRequireDefault(_MenuItem2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Menu = _Menu3.default;
	exports.MenuItem = _MenuItem3.default;
	exports.default = _Menu3.default;

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(280);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(481);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _toArray2 = __webpack_require__(504);
	
	var _toArray3 = _interopRequireDefault(_toArray2);
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(482);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(55);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(491);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _ClickAwayListener = __webpack_require__(550);
	
	var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);
	
	var _keycode = __webpack_require__(489);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _propTypes = __webpack_require__(509);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _List = __webpack_require__(551);
	
	var _List2 = _interopRequireDefault(_List);
	
	var _menuUtils = __webpack_require__(554);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var desktop = props.desktop,
	      maxHeight = props.maxHeight,
	      width = props.width;
	  var muiTheme = context.muiTheme;
	
	
	  var styles = {
	    root: {
	      // Nested div bacause the List scales x faster than it scales y
	      zIndex: muiTheme.zIndex.menu,
	      maxHeight: maxHeight,
	      overflowY: maxHeight ? 'auto' : null
	    },
	    divider: {
	      marginTop: 7,
	      marginBottom: 8
	    },
	    list: {
	      display: 'table-cell',
	      paddingBottom: desktop ? 16 : 8,
	      paddingTop: desktop ? 16 : 8,
	      userSelect: 'none',
	      width: width
	    },
	    selectedMenuItem: {
	      color: muiTheme.menuItem.selectedTextColor
	    }
	  };
	
	  return styles;
	}
	
	var Menu = function (_Component) {
	  (0, _inherits3.default)(Menu, _Component);
	
	  function Menu(props, context) {
	    (0, _classCallCheck3.default)(this, Menu);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call(this, props, context));
	
	    _initialiseProps.call(_this);
	
	    var filteredChildren = _this.getFilteredChildren(props.children);
	    var selectedIndex = _this.getSelectedIndex(props, filteredChildren);
	
	    var newFocusIndex = props.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
	    if (newFocusIndex !== -1 && props.onMenuItemFocusChange) {
	      props.onMenuItemFocusChange(null, newFocusIndex);
	    }
	    _this.state = {
	      focusIndex: newFocusIndex,
	      isKeyboardFocused: props.initiallyKeyboardFocused,
	      keyWidth: props.desktop ? 64 : 56
	    };
	
	    _this.hotKeyHolder = new _menuUtils.HotKeyHolder();
	    return _this;
	  }
	
	  (0, _createClass3.default)(Menu, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.autoWidth) {
	        this.setWidth();
	      }
	      this.setScollPosition();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var filteredChildren = this.getFilteredChildren(nextProps.children);
	      var selectedIndex = this.getSelectedIndex(nextProps, filteredChildren);
	
	      var newFocusIndex = nextProps.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
	      if (newFocusIndex !== this.state.focusIndex && this.props.onMenuItemFocusChange) {
	        this.props.onMenuItemFocusChange(null, newFocusIndex);
	      }
	      this.setState({
	        focusIndex: newFocusIndex,
	        keyWidth: nextProps.desktop ? 64 : 56
	      });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.autoWidth) this.setWidth();
	    }
	  }, {
	    key: 'getValueLink',
	
	
	    // Do not use outside of this component, it will be removed once valueLink is deprecated
	    value: function getValueLink(props) {
	      return props.valueLink || {
	        value: props.value,
	        requestChange: props.onChange
	      };
	    }
	  }, {
	    key: 'setKeyboardFocused',
	    value: function setKeyboardFocused(keyboardFocused) {
	      this.setState({
	        isKeyboardFocused: keyboardFocused
	      });
	    }
	  }, {
	    key: 'getFilteredChildren',
	    value: function getFilteredChildren(children) {
	      var filteredChildren = [];
	      _react2.default.Children.forEach(children, function (child) {
	        if (child) {
	          filteredChildren.push(child);
	        }
	      });
	      return filteredChildren;
	    }
	  }, {
	    key: 'cloneMenuItem',
	    value: function cloneMenuItem(child, childIndex, styles, index) {
	      var _this2 = this;
	
	      var childIsDisabled = child.props.disabled;
	
	      var selectedChildStyles = {};
	      if (!childIsDisabled) {
	        var selected = this.isChildSelected(child, this.props);
	
	        if (selected) {
	          (0, _simpleAssign2.default)(selectedChildStyles, styles.selectedMenuItem, this.props.selectedMenuItemStyle);
	        }
	      }
	      var mergedChildStyles = (0, _simpleAssign2.default)({}, child.props.style, this.props.menuItemStyle, selectedChildStyles);
	
	      var extraProps = {
	        desktop: this.props.desktop,
	        style: mergedChildStyles
	      };
	      if (!childIsDisabled) {
	        var isFocused = childIndex === this.state.focusIndex;
	        var focusState = 'none';
	        if (isFocused) {
	          focusState = this.state.isKeyboardFocused ? 'keyboard-focused' : 'focused';
	        }
	
	        (0, _simpleAssign2.default)(extraProps, {
	          focusState: focusState,
	          onTouchTap: function onTouchTap(event) {
	            _this2.handleMenuItemTouchTap(event, child, index);
	            if (child.props.onTouchTap) child.props.onTouchTap(event);
	          },
	          ref: isFocused ? 'focusedMenuItem' : null
	        });
	      }
	      return _react2.default.cloneElement(child, extraProps);
	    }
	  }, {
	    key: 'decrementKeyboardFocusIndex',
	    value: function decrementKeyboardFocusIndex(event) {
	      var index = this.state.focusIndex;
	
	      index--;
	      if (index < 0) index = 0;
	
	      this.setFocusIndex(event, index, true);
	    }
	  }, {
	    key: 'getMenuItemCount',
	    value: function getMenuItemCount(filteredChildren) {
	      var menuItemCount = 0;
	      filteredChildren.forEach(function (child) {
	        var childIsADivider = child.type && child.type.muiName === 'Divider';
	        var childIsDisabled = child.props.disabled;
	        if (!childIsADivider && !childIsDisabled) menuItemCount++;
	      });
	      return menuItemCount;
	    }
	  }, {
	    key: 'getSelectedIndex',
	    value: function getSelectedIndex(props, filteredChildren) {
	      var _this3 = this;
	
	      var selectedIndex = -1;
	      var menuItemIndex = 0;
	
	      filteredChildren.forEach(function (child) {
	        var childIsADivider = child.type && child.type.muiName === 'Divider';
	
	        if (_this3.isChildSelected(child, props)) selectedIndex = menuItemIndex;
	        if (!childIsADivider) menuItemIndex++;
	      });
	
	      return selectedIndex;
	    }
	  }, {
	    key: 'setFocusIndexStartsWith',
	    value: function setFocusIndexStartsWith(event, keys) {
	      var foundIndex = -1;
	      _react2.default.Children.forEach(this.props.children, function (child, index) {
	        if (foundIndex >= 0) {
	          return;
	        }
	        var primaryText = child.props.primaryText;
	
	        if (typeof primaryText === 'string' && new RegExp('^' + keys, 'i').test(primaryText)) {
	          foundIndex = index;
	        }
	      });
	      if (foundIndex >= 0) {
	        this.setFocusIndex(event, foundIndex, true);
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: 'handleMenuItemTouchTap',
	    value: function handleMenuItemTouchTap(event, item, index) {
	      var children = this.props.children;
	      var multiple = this.props.multiple;
	      var valueLink = this.getValueLink(this.props);
	      var menuValue = valueLink.value;
	      var itemValue = item.props.value;
	      var focusIndex = _react2.default.isValidElement(children) ? 0 : children.indexOf(item);
	
	      this.setFocusIndex(event, focusIndex, false);
	
	      if (multiple) {
	        menuValue = menuValue || [];
	
	        var itemIndex = menuValue.indexOf(itemValue);
	
	        var _menuValue = menuValue,
	            _menuValue2 = (0, _toArray3.default)(_menuValue),
	            newMenuValue = _menuValue2.slice(0);
	
	        if (itemIndex === -1) {
	          newMenuValue.push(itemValue);
	        } else {
	          newMenuValue.splice(itemIndex, 1);
	        }
	
	        valueLink.requestChange(event, newMenuValue);
	      } else if (!multiple && itemValue !== menuValue) {
	        valueLink.requestChange(event, itemValue);
	      }
	
	      this.props.onItemTouchTap(event, item, index);
	    }
	  }, {
	    key: 'incrementKeyboardFocusIndex',
	    value: function incrementKeyboardFocusIndex(event, filteredChildren) {
	      var index = this.state.focusIndex;
	      var maxIndex = this.getMenuItemCount(filteredChildren) - 1;
	
	      index++;
	      if (index > maxIndex) index = maxIndex;
	
	      this.setFocusIndex(event, index, true);
	    }
	  }, {
	    key: 'isChildSelected',
	    value: function isChildSelected(child, props) {
	      var menuValue = this.getValueLink(props).value;
	      var childValue = child.props.value;
	
	      if (props.multiple) {
	        return menuValue && menuValue.length && menuValue.indexOf(childValue) !== -1;
	      } else {
	        return child.props.hasOwnProperty('value') && menuValue === childValue;
	      }
	    }
	  }, {
	    key: 'setFocusIndex',
	    value: function setFocusIndex(event, newIndex, isKeyboardFocused) {
	      if (this.props.onMenuItemFocusChange) {
	        // Do this even if `newIndex === this.state.focusIndex` to allow users
	        // to detect up-arrow on the first MenuItem or down-arrow on the last.
	        this.props.onMenuItemFocusChange(event, newIndex);
	      }
	      this.setState({
	        focusIndex: newIndex,
	        isKeyboardFocused: isKeyboardFocused
	      });
	    }
	  }, {
	    key: 'setScollPosition',
	    value: function setScollPosition() {
	      var desktop = this.props.desktop;
	      var focusedMenuItem = this.refs.focusedMenuItem;
	      var menuItemHeight = desktop ? 32 : 48;
	
	      if (focusedMenuItem) {
	        var selectedOffSet = _reactDom2.default.findDOMNode(focusedMenuItem).offsetTop;
	
	        // Make the focused item be the 2nd item in the list the user sees
	        var scrollTop = selectedOffSet - menuItemHeight;
	        if (scrollTop < menuItemHeight) scrollTop = 0;
	
	        _reactDom2.default.findDOMNode(this.refs.scrollContainer).scrollTop = scrollTop;
	      }
	    }
	  }, {
	    key: 'cancelScrollEvent',
	    value: function cancelScrollEvent(event) {
	      event.stopPropagation();
	      event.preventDefault();
	      return false;
	    }
	  }, {
	    key: 'setWidth',
	    value: function setWidth() {
	      var el = _reactDom2.default.findDOMNode(this);
	      var listEl = _reactDom2.default.findDOMNode(this.refs.list);
	      var elWidth = el.offsetWidth;
	      var keyWidth = this.state.keyWidth;
	      var minWidth = keyWidth * 1.5;
	      var keyIncrements = elWidth / keyWidth;
	      var newWidth = void 0;
	
	      keyIncrements = keyIncrements <= 1.5 ? 1.5 : Math.ceil(keyIncrements);
	      newWidth = keyIncrements * keyWidth;
	
	      if (newWidth < minWidth) newWidth = minWidth;
	
	      el.style.width = newWidth + 'px';
	      listEl.style.width = newWidth + 'px';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var _props = this.props,
	          autoWidth = _props.autoWidth,
	          children = _props.children,
	          desktop = _props.desktop,
	          disableAutoFocus = _props.disableAutoFocus,
	          initiallyKeyboardFocused = _props.initiallyKeyboardFocused,
	          listStyle = _props.listStyle,
	          maxHeight = _props.maxHeight,
	          multiple = _props.multiple,
	          onItemTouchTap = _props.onItemTouchTap,
	          onEscKeyDown = _props.onEscKeyDown,
	          onMenuItemFocusChange = _props.onMenuItemFocusChange,
	          selectedMenuItemStyle = _props.selectedMenuItemStyle,
	          menuItemStyle = _props.menuItemStyle,
	          style = _props.style,
	          value = _props.value,
	          valueLink = _props.valueLink,
	          width = _props.width,
	          other = (0, _objectWithoutProperties3.default)(_props, ['autoWidth', 'children', 'desktop', 'disableAutoFocus', 'initiallyKeyboardFocused', 'listStyle', 'maxHeight', 'multiple', 'onItemTouchTap', 'onEscKeyDown', 'onMenuItemFocusChange', 'selectedMenuItemStyle', 'menuItemStyle', 'style', 'value', 'valueLink', 'width']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
	      var mergedListStyles = (0, _simpleAssign2.default)(styles.list, listStyle);
	
	      var filteredChildren = this.getFilteredChildren(children);
	
	      var menuItemIndex = 0;
	      var newChildren = _react2.default.Children.map(filteredChildren, function (child, index) {
	        var childIsDisabled = child.props.disabled;
	        var childName = child.type ? child.type.muiName : '';
	        var newChild = child;
	
	        switch (childName) {
	          case 'MenuItem':
	            newChild = _this4.cloneMenuItem(child, menuItemIndex, styles, index);
	            break;
	
	          case 'Divider':
	            newChild = _react2.default.cloneElement(child, {
	              style: (0, _simpleAssign2.default)({}, styles.divider, child.props.style)
	            });
	            break;
	        }
	
	        if (childName === 'MenuItem' && !childIsDisabled) {
	          menuItemIndex++;
	        }
	
	        return newChild;
	      });
	
	      return _react2.default.createElement(
	        _ClickAwayListener2.default,
	        { onClickAway: this.handleClickAway },
	        _react2.default.createElement(
	          'div',
	          {
	            onKeyDown: this.handleKeyDown,
	            onWheel: this.handleOnWheel,
	            style: prepareStyles(mergedRootStyles),
	            ref: 'scrollContainer'
	          },
	          _react2.default.createElement(
	            _List2.default,
	            (0, _extends3.default)({}, other, {
	              ref: 'list',
	              style: mergedListStyles
	            }),
	            newChildren
	          )
	        )
	      );
	    }
	  }]);
	  return Menu;
	}(_react.Component);
	
	Menu.defaultProps = {
	  autoWidth: true,
	  desktop: false,
	  disableAutoFocus: false,
	  initiallyKeyboardFocused: false,
	  maxHeight: null,
	  multiple: false,
	  onChange: function onChange() {},
	  onEscKeyDown: function onEscKeyDown() {},
	  onItemTouchTap: function onItemTouchTap() {},
	  onKeyDown: function onKeyDown() {}
	};
	Menu.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	
	var _initialiseProps = function _initialiseProps() {
	  var _this5 = this;
	
	  this.handleClickAway = function (event) {
	    if (event.defaultPrevented) {
	      return;
	    }
	
	    _this5.setFocusIndex(event, -1, false);
	  };
	
	  this.handleKeyDown = function (event) {
	    var filteredChildren = _this5.getFilteredChildren(_this5.props.children);
	    var key = (0, _keycode2.default)(event);
	    switch (key) {
	      case 'down':
	        event.preventDefault();
	        _this5.incrementKeyboardFocusIndex(event, filteredChildren);
	        break;
	      case 'esc':
	        _this5.props.onEscKeyDown(event);
	        break;
	      case 'tab':
	        event.preventDefault();
	        if (event.shiftKey) {
	          _this5.decrementKeyboardFocusIndex(event);
	        } else {
	          _this5.incrementKeyboardFocusIndex(event, filteredChildren);
	        }
	        break;
	      case 'up':
	        event.preventDefault();
	        _this5.decrementKeyboardFocusIndex(event);
	        break;
	      default:
	        if (key && key.length === 1) {
	          var hotKeys = _this5.hotKeyHolder.append(key);
	          if (_this5.setFocusIndexStartsWith(event, hotKeys)) {
	            event.preventDefault();
	          }
	        }
	    }
	    _this5.props.onKeyDown(event);
	  };
	
	  this.handleOnWheel = function (event) {
	    var scrollContainer = _this5.refs.scrollContainer;
	    // Only scroll lock if the the Menu is scrollable.
	    if (scrollContainer.scrollHeight <= scrollContainer.clientHeight) return;
	
	    var scrollTop = scrollContainer.scrollTop,
	        scrollHeight = scrollContainer.scrollHeight,
	        clientHeight = scrollContainer.clientHeight;
	
	    var wheelDelta = event.deltaY;
	    var isDeltaPositive = wheelDelta > 0;
	
	    if (isDeltaPositive && wheelDelta > scrollHeight - clientHeight - scrollTop) {
	      scrollContainer.scrollTop = scrollHeight;
	      return _this5.cancelScrollEvent(event);
	    } else if (!isDeltaPositive && -wheelDelta > scrollTop) {
	      scrollContainer.scrollTop = 0;
	      return _this5.cancelScrollEvent(event);
	    }
	  };
	};
	
	 true ? Menu.propTypes = {
	  /**
	   * If true, the width of the menu will be set automatically
	   * according to the widths of its children,
	   * using proper keyline increments (64px for desktop,
	   * 56px otherwise).
	   */
	  autoWidth: _react.PropTypes.bool,
	  /**
	   * The content of the menu. This is usually used to pass `MenuItem`
	   * elements.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * If true, the menu item will render with compact desktop styles.
	   */
	  desktop: _react.PropTypes.bool,
	  /**
	   * If true, the menu will not be auto-focused.
	   */
	  disableAutoFocus: _react.PropTypes.bool,
	  /**
	   * If true, the menu will be keyboard-focused initially.
	   */
	  initiallyKeyboardFocused: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the underlying `List` element.
	   */
	  listStyle: _react.PropTypes.object,
	  /**
	   * The maximum height of the menu in pixels. If specified,
	   * the menu will be scrollable if it is taller than the provided
	   * height.
	   */
	  maxHeight: _react.PropTypes.number,
	  /**
	   * Override the inline-styles of menu items.
	   */
	  menuItemStyle: _react.PropTypes.object,
	  /**
	   * If true, `value` must be an array and the menu will support
	   * multiple selections.
	   */
	  multiple: _react.PropTypes.bool,
	  /**
	   * Callback function fired when a menu item with `value` not
	   * equal to the current `value` of the menu is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the menu item.
	   * @param {any}  value If `multiple` is true, the menu's `value`
	   * array with either the menu item's `value` added (if
	   * it wasn't already selected) or omitted (if it was already selected).
	   * Otherwise, the `value` of the menu item.
	   */
	  onChange: _react.PropTypes.func,
	  /**
	   * Callback function fired when the menu is focused and the *Esc* key
	   * is pressed.
	   *
	   * @param {object} event `keydown` event targeting the menu.
	   */
	  onEscKeyDown: _react.PropTypes.func,
	  /**
	   * Callback function fired when a menu item is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the menu item.
	   * @param {object} menuItem The menu item.
	   * @param {number} index The index of the menu item.
	   */
	  onItemTouchTap: _react.PropTypes.func,
	  /** @ignore */
	  onKeyDown: _react.PropTypes.func,
	  /**
	   * Callback function fired when the focus on a `MenuItem` is changed.
	   * There will be some "duplicate" changes reported if two different
	   * focusing event happen, for example if a `MenuItem` is focused via
	   * the keyboard and then it is clicked on.
	   *
	   * @param {object} event The event that triggered the focus change.
	   * The event can be null since the focus can be changed for non-event
	   * reasons such as prop changes.
	   * @param {number} newFocusIndex The index of the newly focused
	   * `MenuItem` or `-1` if focus was lost.
	   */
	  onMenuItemFocusChange: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of selected menu items.
	   */
	  selectedMenuItemStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * If `multiple` is true, an array of the `value`s of the selected
	   * menu items. Otherwise, the `value` of the selected menu item.
	   * If provided, the menu will be a controlled component.
	   * This component also supports valueLink.
	   */
	  value: _react.PropTypes.any,
	  /**
	   * ValueLink for the menu's `value`.
	   */
	  valueLink: _react.PropTypes.object,
	  /**
	   * The width of the menu. If not specified, the menu's width
	   * will be set according to the widths of its children, using
	   * proper keyline increments (64px for desktop, 56px otherwise).
	   */
	  width: _propTypes2.default.stringOrNumber
	} : void 0;
	exports.default = Menu;

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _reactDom = __webpack_require__(55);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _events = __webpack_require__(488);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isDescendant = function isDescendant(el, target) {
	  if (target !== null) {
	    return el === target || isDescendant(el, target.parentNode);
	  }
	  return false;
	};
	
	var clickAwayEvents = ['mouseup', 'touchend'];
	var bind = function bind(callback) {
	  return clickAwayEvents.forEach(function (event) {
	    return _events2.default.on(document, event, callback);
	  });
	};
	var unbind = function unbind(callback) {
	  return clickAwayEvents.forEach(function (event) {
	    return _events2.default.off(document, event, callback);
	  });
	};
	
	var ClickAwayListener = function (_Component) {
	  (0, _inherits3.default)(ClickAwayListener, _Component);
	
	  function ClickAwayListener() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, ClickAwayListener);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ClickAwayListener.__proto__ || (0, _getPrototypeOf2.default)(ClickAwayListener)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickAway = function (event) {
	      if (event.defaultPrevented) {
	        return;
	      }
	
	      // IE11 support, which trigger the handleClickAway even after the unbind
	      if (_this.isCurrentlyMounted) {
	        var el = _reactDom2.default.findDOMNode(_this);
	
	        if (document.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
	          _this.props.onClickAway(event);
	        }
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(ClickAwayListener, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.isCurrentlyMounted = true;
	      if (this.props.onClickAway) {
	        bind(this.handleClickAway);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (prevProps.onClickAway !== this.props.onClickAway) {
	        unbind(this.handleClickAway);
	        if (this.props.onClickAway) {
	          bind(this.handleClickAway);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.isCurrentlyMounted = false;
	      unbind(this.handleClickAway);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);
	  return ClickAwayListener;
	}(_react.Component);
	
	 true ? ClickAwayListener.propTypes = {
	  children: _react.PropTypes.element,
	  onClickAway: _react.PropTypes.func
	} : void 0;
	exports.default = ClickAwayListener;

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(280);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(481);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(482);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Subheader = __webpack_require__(552);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var List = function (_Component) {
	  (0, _inherits3.default)(List, _Component);
	
	  function List() {
	    (0, _classCallCheck3.default)(this, List);
	    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(List, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var hasSubheader = false;
	
	      var firstChild = _react.Children.toArray(children)[0];
	      if ((0, _react.isValidElement)(firstChild) && firstChild.type === _Subheader2.default) {
	        hasSubheader = true;
	      }
	
	      var styles = {
	        root: {
	          padding: (hasSubheader ? 0 : 8) + 'px 0px 8px 0px'
	        }
	      };
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	        children
	      );
	    }
	  }]);
	  return List;
	}(_react.Component);
	
	List.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	 true ? List.propTypes = {
	  /**
	   * These are usually `ListItem`s that are passed to
	   * be part of the list.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = List;

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Subheader = __webpack_require__(553);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Subheader2.default;

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(280);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(481);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _simpleAssign = __webpack_require__(482);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Subheader = function Subheader(props, context) {
	  var children = props.children,
	      inset = props.inset,
	      style = props.style,
	      other = (0, _objectWithoutProperties3.default)(props, ['children', 'inset', 'style']);
	  var _context$muiTheme = context.muiTheme,
	      prepareStyles = _context$muiTheme.prepareStyles,
	      subheader = _context$muiTheme.subheader;
	
	
	  var styles = {
	    root: {
	      boxSizing: 'border-box',
	      color: subheader.color,
	      fontSize: 14,
	      fontWeight: subheader.fontWeight,
	      lineHeight: '48px',
	      paddingLeft: inset ? 72 : 16,
	      width: '100%'
	    }
	  };
	
	  return _react2.default.createElement(
	    'div',
	    (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	    children
	  );
	};
	
	Subheader.muiName = 'Subheader';
	
	 true ? Subheader.propTypes = {
	  /**
	   * Node that will be placed inside the `Subheader`.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * If true, the `Subheader` will be indented.
	   */
	  inset: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	} : void 0;
	
	Subheader.defaultProps = {
	  inset: false
	};
	
	Subheader.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	
	exports.default = Subheader;

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HotKeyHolder = undefined;
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HotKeyHolder = exports.HotKeyHolder = function () {
	  function HotKeyHolder() {
	    var _this = this;
	
	    (0, _classCallCheck3.default)(this, HotKeyHolder);
	
	    this.clear = function () {
	      _this.timerId = null;
	      _this.lastKeys = null;
	    };
	  }
	
	  (0, _createClass3.default)(HotKeyHolder, [{
	    key: 'append',
	    value: function append(key) {
	      clearTimeout(this.timerId);
	      this.timerId = setTimeout(this.clear, 500);
	      return this.lastKeys = (this.lastKeys || '') + key;
	    }
	  }]);
	  return HotKeyHolder;
	}();

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _MenuItem = __webpack_require__(556);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _MenuItem2.default;

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(280);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(481);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(482);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(55);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(491);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _Popover = __webpack_require__(524);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _check = __webpack_require__(557);
	
	var _check2 = _interopRequireDefault(_check);
	
	var _ListItem = __webpack_require__(558);
	
	var _ListItem2 = _interopRequireDefault(_ListItem);
	
	var _Menu = __webpack_require__(549);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _propTypes = __webpack_require__(509);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var nestedMenuStyle = {
	  position: 'relative'
	};
	
	function getStyles(props, context) {
	  var disabledColor = context.muiTheme.baseTheme.palette.disabledColor;
	  var textColor = context.muiTheme.baseTheme.palette.textColor;
	  var indent = props.desktop ? 64 : 72;
	  var sidePadding = props.desktop ? 24 : 16;
	
	  var styles = {
	    root: {
	      color: props.disabled ? disabledColor : textColor,
	      cursor: props.disabled ? 'not-allowed' : 'pointer',
	      minHeight: props.desktop ? '32px' : '48px',
	      lineHeight: props.desktop ? '32px' : '48px',
	      fontSize: props.desktop ? 15 : 16,
	      whiteSpace: 'nowrap'
	    },
	
	    innerDivStyle: {
	      paddingLeft: props.leftIcon || props.insetChildren || props.checked ? indent : sidePadding,
	      paddingRight: props.rightIcon ? indent : sidePadding,
	      paddingBottom: 0,
	      paddingTop: 0
	    },
	
	    secondaryText: {
	      float: 'right'
	    },
	
	    leftIconDesktop: {
	      margin: 0,
	      left: 24,
	      top: 4
	    },
	
	    rightIconDesktop: {
	      margin: 0,
	      right: 24,
	      top: 4,
	      fill: context.muiTheme.menuItem.rightIconDesktopFill
	    }
	  };
	
	  return styles;
	}
	
	var MenuItem = function (_Component) {
	  (0, _inherits3.default)(MenuItem, _Component);
	
	  function MenuItem() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, MenuItem);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MenuItem.__proto__ || (0, _getPrototypeOf2.default)(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      open: false
	    }, _this.cloneMenuItem = function (item) {
	      return _react2.default.cloneElement(item, {
	        onTouchTap: function onTouchTap(event) {
	          if (!item.props.menuItems) {
	            _this.handleRequestClose();
	          }
	
	          if (item.props.onTouchTap) {
	            item.props.onTouchTap(event);
	          }
	        }
	      });
	    }, _this.handleTouchTap = function (event) {
	      event.preventDefault();
	
	      _this.setState({
	        open: true,
	        anchorEl: _reactDom2.default.findDOMNode(_this)
	      });
	
	      if (_this.props.onTouchTap) {
	        _this.props.onTouchTap(event);
	      }
	    }, _this.handleRequestClose = function () {
	      _this.setState({
	        open: false,
	        anchorEl: null
	      });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(MenuItem, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.applyFocusState();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.state.open && nextProps.focusState === 'none') {
	        this.handleRequestClose();
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.applyFocusState();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.state.open) {
	        this.setState({
	          open: false
	        });
	      }
	    }
	  }, {
	    key: 'applyFocusState',
	    value: function applyFocusState() {
	      this.refs.listItem.applyFocusState(this.props.focusState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          checked = _props.checked,
	          children = _props.children,
	          desktop = _props.desktop,
	          disabled = _props.disabled,
	          focusState = _props.focusState,
	          innerDivStyle = _props.innerDivStyle,
	          insetChildren = _props.insetChildren,
	          leftIcon = _props.leftIcon,
	          menuItems = _props.menuItems,
	          rightIcon = _props.rightIcon,
	          secondaryText = _props.secondaryText,
	          style = _props.style,
	          animation = _props.animation,
	          anchorOrigin = _props.anchorOrigin,
	          value = _props.value,
	          other = (0, _objectWithoutProperties3.default)(_props, ['checked', 'children', 'desktop', 'disabled', 'focusState', 'innerDivStyle', 'insetChildren', 'leftIcon', 'menuItems', 'rightIcon', 'secondaryText', 'style', 'animation', 'anchorOrigin', 'value']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
	      var mergedInnerDivStyles = (0, _simpleAssign2.default)(styles.innerDivStyle, innerDivStyle);
	
	      // Left Icon
	      var leftIconElement = leftIcon ? leftIcon : checked ? _react2.default.createElement(_check2.default, null) : null;
	      if (leftIconElement) {
	        var mergedLeftIconStyles = desktop ? (0, _simpleAssign2.default)(styles.leftIconDesktop, leftIconElement.props.style) : leftIconElement.props.style;
	        leftIconElement = _react2.default.cloneElement(leftIconElement, { style: mergedLeftIconStyles });
	      }
	
	      // Right Icon
	      var rightIconElement = void 0;
	      if (rightIcon) {
	        var mergedRightIconStyles = desktop ? (0, _simpleAssign2.default)(styles.rightIconDesktop, rightIcon.props.style) : rightIcon.props.style;
	        rightIconElement = _react2.default.cloneElement(rightIcon, { style: mergedRightIconStyles });
	      }
	
	      // Secondary Text
	      var secondaryTextElement = void 0;
	      if (secondaryText) {
	        var secondaryTextIsAnElement = _react2.default.isValidElement(secondaryText);
	        var mergedSecondaryTextStyles = secondaryTextIsAnElement ? (0, _simpleAssign2.default)(styles.secondaryText, secondaryText.props.style) : null;
	
	        secondaryTextElement = secondaryTextIsAnElement ? _react2.default.cloneElement(secondaryText, { style: mergedSecondaryTextStyles }) : _react2.default.createElement(
	          'div',
	          { style: prepareStyles(styles.secondaryText) },
	          secondaryText
	        );
	      }
	      var childMenuPopover = void 0;
	      if (menuItems) {
	        childMenuPopover = _react2.default.createElement(
	          _Popover2.default,
	          {
	            animation: animation,
	            anchorOrigin: anchorOrigin,
	            anchorEl: this.state.anchorEl,
	            open: this.state.open,
	            useLayerForClickAway: false,
	            onRequestClose: this.handleRequestClose
	          },
	          _react2.default.createElement(
	            _Menu2.default,
	            { desktop: desktop, disabled: disabled, style: nestedMenuStyle },
	            _react2.default.Children.map(menuItems, this.cloneMenuItem)
	          )
	        );
	        other.onTouchTap = this.handleTouchTap;
	      }
	
	      return _react2.default.createElement(
	        _ListItem2.default,
	        (0, _extends3.default)({}, other, {
	          disabled: disabled,
	          hoverColor: this.context.muiTheme.menuItem.hoverColor,
	          innerDivStyle: mergedInnerDivStyles,
	          insetChildren: insetChildren,
	          leftIcon: leftIconElement,
	          ref: 'listItem',
	          rightIcon: rightIconElement,
	          style: mergedRootStyles
	        }),
	        children,
	        secondaryTextElement,
	        childMenuPopover
	      );
	    }
	  }]);
	  return MenuItem;
	}(_react.Component);
	
	MenuItem.muiName = 'MenuItem';
	MenuItem.defaultProps = {
	  anchorOrigin: { horizontal: 'right', vertical: 'top' },
	  checked: false,
	  desktop: false,
	  disabled: false,
	  focusState: 'none',
	  insetChildren: false
	};
	MenuItem.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	 true ? MenuItem.propTypes = {
	  /**
	   * Location of the anchor for the popover of nested `MenuItem`
	   * elements.
	   */
	  anchorOrigin: _propTypes2.default.origin,
	  /**
	   * Override the default animation component used.
	   */
	  animation: _react.PropTypes.func,
	  /**
	   * If true, a left check mark will be rendered.
	   */
	  checked: _react.PropTypes.bool,
	  /**
	   * Elements passed as children to the underlying `ListItem`.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * @ignore
	   * If true, the menu item will render with compact desktop
	   * styles.
	   */
	  desktop: _react.PropTypes.bool,
	  /**
	   * If true, the menu item will be disabled.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * The focus state of the menu item. This prop is used to set the focus
	   * state of the underlying `ListItem`.
	   */
	  focusState: _react.PropTypes.oneOf(['none', 'focused', 'keyboard-focused']),
	  /**
	   * Override the inline-styles of the inner div.
	   */
	  innerDivStyle: _react.PropTypes.object,
	  /**
	   * If true, the children will be indented.
	   * This is only needed when there is no `leftIcon`.
	   */
	  insetChildren: _react.PropTypes.bool,
	  /**
	   * The `SvgIcon` or `FontIcon` to be displayed on the left side.
	   */
	  leftIcon: _react.PropTypes.element,
	  /**
	   * `MenuItem` elements to nest within the menu item.
	   */
	  menuItems: _react.PropTypes.node,
	  /**
	   * Callback function fired when the menu item is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the menu item.
	   */
	  onTouchTap: _react.PropTypes.func,
	  /**
	   * Can be used to render primary text within the menu item.
	   */
	  primaryText: _react.PropTypes.node,
	  /**
	   * The `SvgIcon` or `FontIcon` to be displayed on the right side.
	   */
	  rightIcon: _react.PropTypes.element,
	  /**
	   * Can be used to render secondary text within the menu item.
	   */
	  secondaryText: _react.PropTypes.node,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The value of the menu item.
	   */
	  value: _react.PropTypes.any
	} : void 0;
	exports.default = MenuItem;

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(512);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(521);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationCheck = function NavigationCheck(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
	  );
	};
	NavigationCheck = (0, _pure2.default)(NavigationCheck);
	NavigationCheck.displayName = 'NavigationCheck';
	NavigationCheck.muiName = 'SvgIcon';
	
	exports.default = NavigationCheck;

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _objectWithoutProperties2 = __webpack_require__(481);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _extends2 = __webpack_require__(280);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(482);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(55);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(491);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _colorManipulator = __webpack_require__(387);
	
	var _transitions = __webpack_require__(483);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _EnhancedButton = __webpack_require__(487);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _IconButton = __webpack_require__(559);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _expandLess = __webpack_require__(564);
	
	var _expandLess2 = _interopRequireDefault(_expandLess);
	
	var _expandMore = __webpack_require__(565);
	
	var _expandMore2 = _interopRequireDefault(_expandMore);
	
	var _NestedList = __webpack_require__(566);
	
	var _NestedList2 = _interopRequireDefault(_NestedList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context, state) {
	  var insetChildren = props.insetChildren,
	      leftAvatar = props.leftAvatar,
	      leftCheckbox = props.leftCheckbox,
	      leftIcon = props.leftIcon,
	      nestedLevel = props.nestedLevel,
	      rightAvatar = props.rightAvatar,
	      rightIcon = props.rightIcon,
	      rightIconButton = props.rightIconButton,
	      rightToggle = props.rightToggle,
	      secondaryText = props.secondaryText,
	      secondaryTextLines = props.secondaryTextLines;
	  var muiTheme = context.muiTheme;
	  var listItem = muiTheme.listItem;
	
	
	  var textColor = muiTheme.baseTheme.palette.textColor;
	  var hoverColor = props.hoverColor || (0, _colorManipulator.fade)(textColor, 0.1);
	  var singleAvatar = !secondaryText && (leftAvatar || rightAvatar);
	  var singleNoAvatar = !secondaryText && !(leftAvatar || rightAvatar);
	  var twoLine = secondaryText && secondaryTextLines === 1;
	  var threeLine = secondaryText && secondaryTextLines > 1;
	
	  var styles = {
	    root: {
	      backgroundColor: (state.isKeyboardFocused || state.hovered) && !state.rightIconButtonHovered && !state.rightIconButtonKeyboardFocused ? hoverColor : null,
	      color: textColor,
	      display: 'block',
	      fontSize: 16,
	      lineHeight: '16px',
	      position: 'relative',
	      transition: _transitions2.default.easeOut()
	    },
	
	    // This inner div is needed so that ripples will span the entire container
	    innerDiv: {
	      marginLeft: nestedLevel * listItem.nestedLevelDepth,
	      paddingLeft: leftIcon || leftAvatar || leftCheckbox || insetChildren ? 72 : 16,
	      paddingRight: rightIcon || rightAvatar || rightIconButton ? 56 : rightToggle ? 72 : 16,
	      paddingBottom: singleAvatar ? 20 : 16,
	      paddingTop: singleNoAvatar || threeLine ? 16 : 20,
	      position: 'relative'
	    },
	
	    icons: {
	      height: 24,
	      width: 24,
	      display: 'block',
	      position: 'absolute',
	      top: twoLine ? 12 : singleAvatar ? 4 : 0,
	      margin: 12
	    },
	
	    leftIcon: {
	      left: 4
	    },
	
	    rightIcon: {
	      right: 4
	    },
	
	    avatars: {
	      position: 'absolute',
	      top: singleAvatar ? 8 : 16
	    },
	
	    label: {
	      cursor: 'pointer'
	    },
	
	    leftAvatar: {
	      left: 16
	    },
	
	    rightAvatar: {
	      right: 16
	    },
	
	    leftCheckbox: {
	      position: 'absolute',
	      display: 'block',
	      width: 24,
	      top: twoLine ? 24 : singleAvatar ? 16 : 12,
	      left: 16
	    },
	
	    primaryText: {},
	
	    rightIconButton: {
	      position: 'absolute',
	      display: 'block',
	      top: twoLine ? 12 : singleAvatar ? 4 : 0,
	      right: 4
	    },
	
	    rightToggle: {
	      position: 'absolute',
	      display: 'block',
	      width: 54,
	      top: twoLine ? 25 : singleAvatar ? 17 : 13,
	      right: 8
	    },
	
	    secondaryText: {
	      fontSize: 14,
	      lineHeight: threeLine ? '18px' : '16px',
	      height: threeLine ? 36 : 16,
	      margin: 0,
	      marginTop: 4,
	      color: listItem.secondaryTextColor,
	
	      // needed for 2 and 3 line ellipsis
	      overflow: 'hidden',
	      textOverflow: 'ellipsis',
	      whiteSpace: threeLine ? null : 'nowrap',
	      display: threeLine ? '-webkit-box' : null,
	      WebkitLineClamp: threeLine ? 2 : null,
	      WebkitBoxOrient: threeLine ? 'vertical' : null
	    }
	  };
	
	  return styles;
	}
	
	var ListItem = function (_Component) {
	  (0, _inherits3.default)(ListItem, _Component);
	
	  function ListItem() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, ListItem);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ListItem.__proto__ || (0, _getPrototypeOf2.default)(ListItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      isKeyboardFocused: false,
	      open: false,
	      rightIconButtonHovered: false,
	      rightIconButtonKeyboardFocused: false,
	      touch: false
	    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
	      _this.setState({ isKeyboardFocused: isKeyboardFocused });
	      _this.props.onKeyboardFocus(event, isKeyboardFocused);
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.state.touch) _this.setState({ hovered: true });
	      _this.props.onMouseEnter(event);
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({ hovered: false });
	      _this.props.onMouseLeave(event);
	    }, _this.handleNestedListToggle = function (event) {
	      event.stopPropagation();
	
	      if (_this.props.open === null) {
	        _this.setState({ open: !_this.state.open }, function () {
	          _this.props.onNestedListToggle(_this);
	        });
	      } else {
	        // Exposing `this` in the callback is quite a bad API.
	        // I'm doing a one level deep clone to expose a fake state.open.
	        _this.props.onNestedListToggle((0, _extends3.default)({}, _this, {
	          state: {
	            open: !_this.state.open
	          }
	        }));
	      }
	    }, _this.handleRightIconButtonKeyboardFocus = function (event, isKeyboardFocused) {
	      if (isKeyboardFocused) {
	        _this.setState({
	          isKeyboardFocused: false,
	          rightIconButtonKeyboardFocused: isKeyboardFocused
	        });
	      }
	
	      var iconButton = _this.props.rightIconButton;
	
	      if (iconButton && iconButton.props.onKeyboardFocus) iconButton.props.onKeyboardFocus(event, isKeyboardFocused);
	    }, _this.handleRightIconButtonMouseLeave = function (event) {
	      var iconButton = _this.props.rightIconButton;
	      _this.setState({ rightIconButtonHovered: false });
	      if (iconButton && iconButton.props.onMouseLeave) iconButton.props.onMouseLeave(event);
	    }, _this.handleRightIconButtonMouseEnter = function (event) {
	      var iconButton = _this.props.rightIconButton;
	      _this.setState({ rightIconButtonHovered: true });
	      if (iconButton && iconButton.props.onMouseEnter) iconButton.props.onMouseEnter(event);
	    }, _this.handleRightIconButtonMouseUp = function (event) {
	      var iconButton = _this.props.rightIconButton;
	      event.stopPropagation();
	      if (iconButton && iconButton.props.onMouseUp) iconButton.props.onMouseUp(event);
	    }, _this.handleRightIconButtonTouchTap = function (event) {
	      var iconButton = _this.props.rightIconButton;
	
	      // Stop the event from bubbling up to the list-item
	      event.stopPropagation();
	      if (iconButton && iconButton.props.onTouchTap) iconButton.props.onTouchTap(event);
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({ touch: true });
	      _this.props.onTouchStart(event);
	    }, _this.handleTouchEnd = function (event) {
	      _this.setState({ touch: true });
	      _this.props.onTouchEnd(event);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(ListItem, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        open: this.props.open === null ? this.props.initiallyOpen === true : this.props.open
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // update the state when the component is controlled.
	      if (nextProps.open !== null) this.setState({ open: nextProps.open });
	      if (nextProps.disabled && this.state.hovered) this.setState({ hovered: false });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
	    }
	
	    // This method is needed by the `MenuItem` component.
	
	  }, {
	    key: 'applyFocusState',
	    value: function applyFocusState(focusState) {
	      if (this.button) {
	        var buttonEl = _reactDom2.default.findDOMNode(this.button);
	
	        switch (focusState) {
	          case 'none':
	            buttonEl.blur();
	            break;
	          case 'focused':
	            buttonEl.focus();
	            break;
	          case 'keyboard-focused':
	            this.button.setKeyboardFocus();
	            buttonEl.focus();
	            break;
	        }
	      }
	    }
	  }, {
	    key: 'createDisabledElement',
	    value: function createDisabledElement(styles, contentChildren, additionalProps) {
	      var _props = this.props,
	          innerDivStyle = _props.innerDivStyle,
	          style = _props.style;
	
	
	      var mergedDivStyles = (0, _simpleAssign2.default)({}, styles.root, styles.innerDiv, innerDivStyle, style);
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, additionalProps, {
	          style: this.context.muiTheme.prepareStyles(mergedDivStyles)
	        }),
	        contentChildren
	      );
	    }
	  }, {
	    key: 'createLabelElement',
	    value: function createLabelElement(styles, contentChildren, additionalProps) {
	      var _props2 = this.props,
	          innerDivStyle = _props2.innerDivStyle,
	          style = _props2.style;
	
	
	      var mergedLabelStyles = (0, _simpleAssign2.default)({}, styles.root, styles.innerDiv, innerDivStyle, styles.label, style);
	
	      return _react2.default.createElement(
	        'label',
	        (0, _extends3.default)({}, additionalProps, {
	          style: this.context.muiTheme.prepareStyles(mergedLabelStyles)
	        }),
	        contentChildren
	      );
	    }
	  }, {
	    key: 'createTextElement',
	    value: function createTextElement(styles, data, key) {
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      if (_react2.default.isValidElement(data)) {
	        var style = (0, _simpleAssign2.default)({}, styles, data.props.style);
	        if (typeof data.type === 'string') {
	          // if element is a native dom node
	          style = prepareStyles(style);
	        }
	        return _react2.default.cloneElement(data, {
	          key: key,
	          style: style
	        });
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { key: key, style: prepareStyles(styles) },
	        data
	      );
	    }
	  }, {
	    key: 'pushElement',
	    value: function pushElement(children, element, baseStyles, additionalProps) {
	      if (element) {
	        var styles = (0, _simpleAssign2.default)({}, baseStyles, element.props.style);
	        children.push(_react2.default.cloneElement(element, (0, _extends3.default)({
	          key: children.length,
	          style: styles
	        }, additionalProps)));
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props3 = this.props,
	          autoGenerateNestedIndicator = _props3.autoGenerateNestedIndicator,
	          children = _props3.children,
	          containerElement = _props3.containerElement,
	          disabled = _props3.disabled,
	          disableKeyboardFocus = _props3.disableKeyboardFocus,
	          hoverColor = _props3.hoverColor,
	          initiallyOpen = _props3.initiallyOpen,
	          innerDivStyle = _props3.innerDivStyle,
	          insetChildren = _props3.insetChildren,
	          leftAvatar = _props3.leftAvatar,
	          leftCheckbox = _props3.leftCheckbox,
	          leftIcon = _props3.leftIcon,
	          nestedItems = _props3.nestedItems,
	          nestedLevel = _props3.nestedLevel,
	          nestedListStyle = _props3.nestedListStyle,
	          onKeyboardFocus = _props3.onKeyboardFocus,
	          onMouseEnter = _props3.onMouseEnter,
	          onMouseLeave = _props3.onMouseLeave,
	          onNestedListToggle = _props3.onNestedListToggle,
	          onTouchStart = _props3.onTouchStart,
	          onTouchTap = _props3.onTouchTap,
	          rightAvatar = _props3.rightAvatar,
	          rightIcon = _props3.rightIcon,
	          rightIconButton = _props3.rightIconButton,
	          rightToggle = _props3.rightToggle,
	          primaryText = _props3.primaryText,
	          primaryTogglesNestedList = _props3.primaryTogglesNestedList,
	          secondaryText = _props3.secondaryText,
	          secondaryTextLines = _props3.secondaryTextLines,
	          style = _props3.style,
	          other = (0, _objectWithoutProperties3.default)(_props3, ['autoGenerateNestedIndicator', 'children', 'containerElement', 'disabled', 'disableKeyboardFocus', 'hoverColor', 'initiallyOpen', 'innerDivStyle', 'insetChildren', 'leftAvatar', 'leftCheckbox', 'leftIcon', 'nestedItems', 'nestedLevel', 'nestedListStyle', 'onKeyboardFocus', 'onMouseEnter', 'onMouseLeave', 'onNestedListToggle', 'onTouchStart', 'onTouchTap', 'rightAvatar', 'rightIcon', 'rightIconButton', 'rightToggle', 'primaryText', 'primaryTogglesNestedList', 'secondaryText', 'secondaryTextLines', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var contentChildren = [children];
	
	      if (leftIcon) {
	        var additionalProps = {
	          color: leftIcon.props.color || this.context.muiTheme.listItem.leftIconColor
	        };
	        this.pushElement(contentChildren, leftIcon, (0, _simpleAssign2.default)({}, styles.icons, styles.leftIcon), additionalProps);
	      }
	
	      if (rightIcon) {
	        var _additionalProps = {
	          color: rightIcon.props.color || this.context.muiTheme.listItem.rightIconColor
	        };
	        this.pushElement(contentChildren, rightIcon, (0, _simpleAssign2.default)({}, styles.icons, styles.rightIcon), _additionalProps);
	      }
	
	      if (leftAvatar) {
	        this.pushElement(contentChildren, leftAvatar, (0, _simpleAssign2.default)({}, styles.avatars, styles.leftAvatar));
	      }
	
	      if (rightAvatar) {
	        this.pushElement(contentChildren, rightAvatar, (0, _simpleAssign2.default)({}, styles.avatars, styles.rightAvatar));
	      }
	
	      if (leftCheckbox) {
	        this.pushElement(contentChildren, leftCheckbox, (0, _simpleAssign2.default)({}, styles.leftCheckbox));
	      }
	
	      // RightIconButtonElement
	      var hasNestListItems = nestedItems.length;
	      var hasRightElement = rightAvatar || rightIcon || rightIconButton || rightToggle;
	      var needsNestedIndicator = hasNestListItems && autoGenerateNestedIndicator && !hasRightElement;
	
	      if (rightIconButton || needsNestedIndicator) {
	        var rightIconButtonElement = rightIconButton;
	        var rightIconButtonHandlers = {
	          onKeyboardFocus: this.handleRightIconButtonKeyboardFocus,
	          onMouseEnter: this.handleRightIconButtonMouseEnter,
	          onMouseLeave: this.handleRightIconButtonMouseLeave,
	          onTouchTap: this.handleRightIconButtonTouchTap,
	          onMouseDown: this.handleRightIconButtonMouseUp,
	          onMouseUp: this.handleRightIconButtonMouseUp
	        };
	
	        // Create a nested list indicator icon if we don't have an icon on the right
	        if (needsNestedIndicator) {
	          rightIconButtonElement = this.state.open ? _react2.default.createElement(
	            _IconButton2.default,
	            null,
	            _react2.default.createElement(_expandLess2.default, null)
	          ) : _react2.default.createElement(
	            _IconButton2.default,
	            null,
	            _react2.default.createElement(_expandMore2.default, null)
	          );
	          rightIconButtonHandlers.onTouchTap = this.handleNestedListToggle;
	        }
	
	        this.pushElement(contentChildren, rightIconButtonElement, (0, _simpleAssign2.default)({}, styles.rightIconButton), rightIconButtonHandlers);
	      }
	
	      if (rightToggle) {
	        this.pushElement(contentChildren, rightToggle, (0, _simpleAssign2.default)({}, styles.rightToggle));
	      }
	
	      if (primaryText) {
	        var primaryTextElement = this.createTextElement(styles.primaryText, primaryText, 'primaryText');
	        contentChildren.push(primaryTextElement);
	      }
	
	      if (secondaryText) {
	        var secondaryTextElement = this.createTextElement(styles.secondaryText, secondaryText, 'secondaryText');
	        contentChildren.push(secondaryTextElement);
	      }
	
	      var nestedList = nestedItems.length ? _react2.default.createElement(
	        _NestedList2.default,
	        { nestedLevel: nestedLevel, open: this.state.open, style: nestedListStyle },
	        nestedItems
	      ) : undefined;
	
	      var simpleLabel = !primaryTogglesNestedList && (leftCheckbox || rightToggle);
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        simpleLabel ? this.createLabelElement(styles, contentChildren, other) : disabled ? this.createDisabledElement(styles, contentChildren, other) : _react2.default.createElement(
	          _EnhancedButton2.default,
	          (0, _extends3.default)({
	            containerElement: containerElement
	          }, other, {
	            disableKeyboardFocus: disableKeyboardFocus || this.state.rightIconButtonKeyboardFocused,
	            onKeyboardFocus: this.handleKeyboardFocus,
	            onMouseLeave: this.handleMouseLeave,
	            onMouseEnter: this.handleMouseEnter,
	            onTouchStart: this.handleTouchStart,
	            onTouchEnd: this.handleTouchEnd,
	            onTouchTap: primaryTogglesNestedList ? this.handleNestedListToggle : onTouchTap,
	            ref: function ref(node) {
	              return _this2.button = node;
	            },
	            style: (0, _simpleAssign2.default)({}, styles.root, style)
	          }),
	          _react2.default.createElement(
	            'div',
	            { style: prepareStyles((0, _simpleAssign2.default)(styles.innerDiv, innerDivStyle)) },
	            contentChildren
	          )
	        ),
	        nestedList
	      );
	    }
	  }]);
	  return ListItem;
	}(_react.Component);
	
	ListItem.muiName = 'ListItem';
	ListItem.defaultProps = {
	  autoGenerateNestedIndicator: true,
	  containerElement: 'span',
	  disableKeyboardFocus: false,
	  disabled: false,
	  initiallyOpen: false,
	  insetChildren: false,
	  nestedItems: [],
	  nestedLevel: 0,
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  onNestedListToggle: function onNestedListToggle() {},
	  onTouchEnd: function onTouchEnd() {},
	  onTouchStart: function onTouchStart() {},
	  open: null,
	  primaryTogglesNestedList: false,
	  secondaryTextLines: 1
	};
	ListItem.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	 true ? ListItem.propTypes = {
	  /**
	   * If true, generate a nested-list-indicator icon when nested list
	   * items are detected. Note that an indicator will not be created
	   * if a `rightIcon` or `rightIconButton` has been provided to
	   * the element.
	   */
	  autoGenerateNestedIndicator: _react.PropTypes.bool,
	  /**
	   * Children passed into the `ListItem`.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The element to use as the container for the ListItem. Either a string to
	   * use a DOM element or a ReactElement. This is useful for wrapping the
	   * ListItem in a custom Link component. If a ReactElement is given, ensure
	   * that it passes all of its given props through to the underlying DOM
	   * element and renders its children prop for proper integration.
	   */
	  containerElement: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	  /**
	   * If true, the element will not be able to be focused by the keyboard.
	   */
	  disableKeyboardFocus: _react.PropTypes.bool,
	  /**
	   * If true, the element will not be clickable
	   * and will not display hover effects.
	   * This is automatically disabled if either `leftCheckbox`
	   * or `rightToggle` is set.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	  * Override the hover background color.
	  */
	  hoverColor: _react.PropTypes.string,
	  /**
	   * If true, the nested `ListItem`s are initially displayed.
	   */
	  initiallyOpen: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the inner div element.
	   */
	  innerDivStyle: _react.PropTypes.object,
	  /**
	   * If true, the children will be indented by 72px.
	   * This is useful if there is no left avatar or left icon.
	   */
	  insetChildren: _react.PropTypes.bool,
	  /**
	   * This is the `Avatar` element to be displayed on the left side.
	   */
	  leftAvatar: _react.PropTypes.element,
	  /**
	   * This is the `Checkbox` element to be displayed on the left side.
	   */
	  leftCheckbox: _react.PropTypes.element,
	  /**
	   * This is the `SvgIcon` or `FontIcon` to be displayed on the left side.
	   */
	  leftIcon: _react.PropTypes.element,
	  /**
	   * An array of `ListItem`s to nest underneath the current `ListItem`.
	   */
	  nestedItems: _react.PropTypes.arrayOf(_react.PropTypes.element),
	  /**
	   * Controls how deep a `ListItem` appears.
	   * This property is automatically managed, so modify at your own risk.
	   */
	  nestedLevel: _react.PropTypes.number,
	  /**
	   * Override the inline-styles of the nested items' `NestedList`.
	   */
	  nestedListStyle: _react.PropTypes.object,
	  /**
	   * Callback function fired when the `ListItem` is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the `ListItem`.
	   * @param {boolean} isKeyboardFocused If true, the `ListItem` is focused.
	   */
	  onKeyboardFocus: _react.PropTypes.func,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /**
	   * Callbak function fired when the `ListItem` toggles its nested list.
	   *
	   * @param {object} listItem The `ListItem`.
	   */
	  onNestedListToggle: _react.PropTypes.func,
	  /** @ignore */
	  onTouchEnd: _react.PropTypes.func,
	  /** @ignore */
	  onTouchStart: _react.PropTypes.func,
	  /** @ignore */
	  onTouchTap: _react.PropTypes.func,
	  /**
	   * Control toggle state of nested list.
	   */
	  open: _react.PropTypes.bool,
	  /**
	   * This is the block element that contains the primary text.
	   * If a string is passed in, a div tag will be rendered.
	   */
	  primaryText: _react.PropTypes.node,
	  /**
	   * If true, clicking or tapping the primary text of the `ListItem`
	   * toggles the nested list.
	   */
	  primaryTogglesNestedList: _react.PropTypes.bool,
	  /**
	   * This is the `Avatar` element to be displayed on the right side.
	   */
	  rightAvatar: _react.PropTypes.element,
	  /**
	   * This is the `SvgIcon` or `FontIcon` to be displayed on the right side.
	   */
	  rightIcon: _react.PropTypes.element,
	  /**
	   * This is the `IconButton` to be displayed on the right side.
	   * Hovering over this button will remove the `ListItem` hover.
	   * Also, clicking on this button will not trigger a
	   * ripple on the `ListItem`; the event will be stopped and prevented
	   * from bubbling up to cause a `ListItem` click.
	   */
	  rightIconButton: _react.PropTypes.element,
	  /**
	   * This is the `Toggle` element to display on the right side.
	   */
	  rightToggle: _react.PropTypes.element,
	  /**
	   * This is the block element that contains the secondary text.
	   * If a string is passed in, a div tag will be rendered.
	   */
	  secondaryText: _react.PropTypes.node,
	  /**
	   * Can be 1 or 2. This is the number of secondary
	   * text lines before ellipsis will show.
	   */
	  secondaryTextLines: _react.PropTypes.oneOf([1, 2]),
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = ListItem;

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _IconButton = __webpack_require__(560);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _IconButton2.default;

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(280);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(481);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(482);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(483);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _propTypes = __webpack_require__(509);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _EnhancedButton = __webpack_require__(487);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _FontIcon = __webpack_require__(561);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _Tooltip = __webpack_require__(563);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _childUtils = __webpack_require__(484);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var baseTheme = context.muiTheme.baseTheme;
	
	
	  return {
	    root: {
	      boxSizing: 'border-box',
	      overflow: 'visible',
	      transition: _transitions2.default.easeOut(),
	      padding: baseTheme.spacing.iconSize / 2,
	      width: baseTheme.spacing.iconSize * 2,
	      height: baseTheme.spacing.iconSize * 2,
	      fontSize: 0
	    },
	    tooltip: {
	      boxSizing: 'border-box'
	    },
	    disabled: {
	      color: baseTheme.palette.disabledColor,
	      fill: baseTheme.palette.disabledColor,
	      cursor: 'not-allowed'
	    }
	  };
	}
	
	var IconButton = function (_Component) {
	  (0, _inherits3.default)(IconButton, _Component);
	
	  function IconButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, IconButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IconButton.__proto__ || (0, _getPrototypeOf2.default)(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      isKeyboardFocused: false,
	      // Not to be confonded with the touch property.
	      // This state is to determined if it's a mobile device.
	      touch: false,
	      tooltipShown: false
	    }, _this.handleBlur = function (event) {
	      _this.hideTooltip();
	      if (_this.props.onBlur) {
	        _this.props.onBlur(event);
	      }
	    }, _this.handleFocus = function (event) {
	      _this.showTooltip();
	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.button.isKeyboardFocused()) {
	        _this.hideTooltip();
	      }
	      _this.setState({ hovered: false });
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseOut = function (event) {
	      if (_this.props.disabled) _this.hideTooltip();
	      if (_this.props.onMouseOut) _this.props.onMouseOut(event);
	    }, _this.handleMouseEnter = function (event) {
	      _this.showTooltip();
	
	      // Cancel hover styles for touch devices
	      if (!_this.state.touch) {
	        _this.setState({ hovered: true });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({ touch: true });
	
	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }
	    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
	      var _this$props = _this.props,
	          disabled = _this$props.disabled,
	          onFocus = _this$props.onFocus,
	          onBlur = _this$props.onBlur,
	          onKeyboardFocus = _this$props.onKeyboardFocus;
	
	      if (isKeyboardFocused && !disabled) {
	        _this.showTooltip();
	        if (onFocus) {
	          onFocus(event);
	        }
	      } else {
	        _this.hideTooltip();
	        if (onBlur) {
	          onBlur(event);
	        }
	      }
	
	      _this.setState({ isKeyboardFocused: isKeyboardFocused });
	      if (onKeyboardFocus) {
	        onKeyboardFocus(event, isKeyboardFocused);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(IconButton, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.disabled) {
	        this.setState({ hovered: false });
	      }
	    }
	  }, {
	    key: 'setKeyboardFocus',
	    value: function setKeyboardFocus() {
	      this.button.setKeyboardFocus();
	    }
	  }, {
	    key: 'showTooltip',
	    value: function showTooltip() {
	      if (this.props.tooltip) {
	        this.setState({ tooltipShown: true });
	      }
	    }
	  }, {
	    key: 'hideTooltip',
	    value: function hideTooltip() {
	      if (this.props.tooltip) this.setState({ tooltipShown: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          disabled = _props.disabled,
	          hoveredStyle = _props.hoveredStyle,
	          disableTouchRipple = _props.disableTouchRipple,
	          children = _props.children,
	          iconClassName = _props.iconClassName,
	          style = _props.style,
	          tooltip = _props.tooltip,
	          tooltipPositionProp = _props.tooltipPosition,
	          tooltipStyles = _props.tooltipStyles,
	          touch = _props.touch,
	          iconStyle = _props.iconStyle,
	          other = (0, _objectWithoutProperties3.default)(_props, ['disabled', 'hoveredStyle', 'disableTouchRipple', 'children', 'iconClassName', 'style', 'tooltip', 'tooltipPosition', 'tooltipStyles', 'touch', 'iconStyle']);
	
	      var fonticon = void 0;
	
	      var styles = getStyles(this.props, this.context);
	      var tooltipPosition = tooltipPositionProp.split('-');
	
	      var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;
	
	      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style, hovered ? hoveredStyle : {});
	
	      var tooltipElement = tooltip ? _react2.default.createElement(_Tooltip2.default, {
	        label: tooltip,
	        show: this.state.tooltipShown,
	        touch: touch,
	        style: (0, _simpleAssign2.default)(styles.tooltip, tooltipStyles),
	        verticalPosition: tooltipPosition[0],
	        horizontalPosition: tooltipPosition[1]
	      }) : null;
	
	      if (iconClassName) {
	        var iconHoverColor = iconStyle.iconHoverColor,
	            iconStyleFontIcon = (0, _objectWithoutProperties3.default)(iconStyle, ['iconHoverColor']);
	
	
	        fonticon = _react2.default.createElement(
	          _FontIcon2.default,
	          {
	            className: iconClassName,
	            hoverColor: disabled ? null : iconHoverColor,
	            style: (0, _simpleAssign2.default)({}, disabled && styles.disabled, iconStyleFontIcon),
	            color: this.context.muiTheme.baseTheme.palette.textColor
	          },
	          children
	        );
	      }
	
	      var childrenStyle = disabled ? (0, _simpleAssign2.default)({}, iconStyle, styles.disabled) : iconStyle;
	
	      return _react2.default.createElement(
	        _EnhancedButton2.default,
	        (0, _extends3.default)({
	          ref: function ref(_ref2) {
	            return _this2.button = _ref2;
	          }
	        }, other, {
	          centerRipple: true,
	          disabled: disabled,
	          onTouchStart: this.handleTouchStart,
	          style: mergedRootStyles,
	          disableTouchRipple: disableTouchRipple,
	          onBlur: this.handleBlur,
	          onFocus: this.handleFocus,
	          onMouseLeave: this.handleMouseLeave,
	          onMouseEnter: this.handleMouseEnter,
	          onMouseOut: this.handleMouseOut,
	          onKeyboardFocus: this.handleKeyboardFocus
	        }),
	        tooltipElement,
	        fonticon,
	        (0, _childUtils.extendChildren)(children, {
	          style: childrenStyle
	        })
	      );
	    }
	  }]);
	  return IconButton;
	}(_react.Component);
	
	IconButton.muiName = 'IconButton';
	IconButton.defaultProps = {
	  disabled: false,
	  disableTouchRipple: false,
	  iconStyle: {},
	  tooltipPosition: 'bottom-center',
	  touch: false
	};
	IconButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	 true ? IconButton.propTypes = {
	  /**
	   * Can be used to pass a `FontIcon` element as the icon for the button.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * If true, the element's ripple effect will be disabled.
	   */
	  disableTouchRipple: _react.PropTypes.bool,
	  /**
	   * If true, the element will be disabled.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element when the component is hovered.
	   */
	  hoveredStyle: _react.PropTypes.object,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _react.PropTypes.string,
	  /**
	   * The CSS class name of the icon. Used for setting the icon with a stylesheet.
	   */
	  iconClassName: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the icon element.
	   * Note: you can specify iconHoverColor as a String inside this object.
	   */
	  iconStyle: _react.PropTypes.object,
	  /** @ignore */
	  onBlur: _react.PropTypes.func,
	  /** @ignore */
	  onFocus: _react.PropTypes.func,
	  /**
	   * Callback function fired when the element is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the element.
	   * @param {boolean} keyboardFocused Indicates whether the element is focused.
	   */
	  onKeyboardFocus: _react.PropTypes.func,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /** @ignore */
	  onMouseOut: _react.PropTypes.func,
	  /** @ignore */
	  onTouchStart: _react.PropTypes.func,
	  /**
	   * Callback function fired when the button is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the button.
	   */
	  onTouchTap: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The text to supply to the element's tooltip.
	   */
	  tooltip: _react.PropTypes.node,
	  /**
	   * The vertical and horizontal positions, respectively, of the element's tooltip.
	   * Possible values are: "bottom-center", "top-center", "bottom-right", "top-right",
	   * "bottom-left", and "top-left".
	   */
	  tooltipPosition: _propTypes2.default.cornersAndCenter,
	  /**
	   * Override the inline-styles of the tooltip element.
	   */
	  tooltipStyles: _react.PropTypes.object,
	  /**
	   * If true, increase the tooltip element's size. Useful for increasing tooltip
	   * readability on mobile devices.
	   */
	  touch: _react.PropTypes.bool
	} : void 0;
	exports.default = IconButton;

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _FontIcon = __webpack_require__(562);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _FontIcon2.default;

/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(280);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(481);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(482);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(483);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context, state) {
	  var color = props.color,
	      hoverColor = props.hoverColor;
	  var baseTheme = context.muiTheme.baseTheme;
	
	  var offColor = color || baseTheme.palette.textColor;
	  var onColor = hoverColor || offColor;
	
	  return {
	    root: {
	      color: state.hovered ? onColor : offColor,
	      position: 'relative',
	      fontSize: baseTheme.spacing.iconSize,
	      display: 'inline-block',
	      userSelect: 'none',
	      transition: _transitions2.default.easeOut()
	    }
	  };
	}
	
	var FontIcon = function (_Component) {
	  (0, _inherits3.default)(FontIcon, _Component);
	
	  function FontIcon() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, FontIcon);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FontIcon.__proto__ || (0, _getPrototypeOf2.default)(FontIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false
	    }, _this.handleMouseLeave = function (event) {
	      // hover is needed only when a hoverColor is defined
	      if (_this.props.hoverColor !== undefined) {
	        _this.setState({ hovered: false });
	      }
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      // hover is needed only when a hoverColor is defined
	      if (_this.props.hoverColor !== undefined) {
	        _this.setState({ hovered: true });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(FontIcon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          hoverColor = _props.hoverColor,
	          onMouseLeave = _props.onMouseLeave,
	          onMouseEnter = _props.onMouseEnter,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement('span', (0, _extends3.default)({}, other, {
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
	      }));
	    }
	  }]);
	  return FontIcon;
	}(_react.Component);
	
	FontIcon.muiName = 'FontIcon';
	FontIcon.defaultProps = {
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {}
	};
	FontIcon.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	 true ? FontIcon.propTypes = {
	  /**
	   * This is the font color of the font icon. If not specified,
	   * this component will default to muiTheme.palette.textColor.
	   */
	  color: _react.PropTypes.string,
	  /**
	   * This is the icon color when the mouse hovers over the icon.
	   */
	  hoverColor: _react.PropTypes.string,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = FontIcon;

/***/ },

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(280);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(481);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(482);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(483);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context, state) {
	  var verticalPosition = props.verticalPosition;
	  var horizontalPosition = props.horizontalPosition;
	  var touchMarginOffset = props.touch ? 10 : 0;
	  var touchOffsetTop = props.touch ? -20 : -10;
	  var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;
	
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      zIndex = _context$muiTheme.zIndex,
	      tooltip = _context$muiTheme.tooltip,
	      borderRadius = _context$muiTheme.borderRadius;
	
	
	  var styles = {
	    root: {
	      position: 'absolute',
	      fontFamily: baseTheme.fontFamily,
	      fontSize: '10px',
	      lineHeight: '22px',
	      padding: '0 8px',
	      zIndex: zIndex.tooltip,
	      color: tooltip.color,
	      overflow: 'hidden',
	      top: -10000,
	      borderRadius: borderRadius,
	      userSelect: 'none',
	      opacity: 0,
	      right: horizontalPosition === 'left' ? 12 : null,
	      left: horizontalPosition === 'center' ? (state.offsetWidth - 48) / 2 * -1 : horizontalPosition === 'right' ? 12 : null,
	      transition: _transitions2.default.easeOut('0ms', 'top', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	    },
	    label: {
	      position: 'relative',
	      whiteSpace: 'nowrap'
	    },
	    ripple: {
	      position: 'absolute',
	      left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
	      top: verticalPosition === 'bottom' ? 0 : '100%',
	      transform: 'translate(-50%, -50%)',
	      borderRadius: '50%',
	      backgroundColor: 'transparent',
	      transition: _transitions2.default.easeOut('0ms', 'width', '450ms') + ', ' + _transitions2.default.easeOut('0ms', 'height', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	    },
	    rootWhenShown: {
	      top: verticalPosition === 'top' ? touchOffsetTop : 36,
	      opacity: 0.9,
	      transform: 'translate(0px, ' + offset + 'px)',
	      transition: _transitions2.default.easeOut('0ms', 'top', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	    },
	    rootWhenTouched: {
	      fontSize: '14px',
	      lineHeight: '32px',
	      padding: '0 16px'
	    },
	    rippleWhenShown: {
	      backgroundColor: tooltip.rippleBackgroundColor,
	      transition: _transitions2.default.easeOut('450ms', 'width', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'height', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	    }
	  };
	
	  return styles;
	}
	
	var Tooltip = function (_Component) {
	  (0, _inherits3.default)(Tooltip, _Component);
	
	  function Tooltip() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, Tooltip);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      offsetWidth: null
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(Tooltip, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setRippleSize();
	      this.setTooltipPosition();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.setTooltipPosition();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.setRippleSize();
	    }
	  }, {
	    key: 'setRippleSize',
	    value: function setRippleSize() {
	      var ripple = this.refs.ripple;
	      var tooltip = this.refs.tooltip;
	      var tooltipWidth = parseInt(tooltip.offsetWidth, 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
	      var tooltipHeight = parseInt(tooltip.offsetHeight, 10);
	
	      var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
	      if (this.props.show) {
	        ripple.style.height = rippleDiameter + 'px';
	        ripple.style.width = rippleDiameter + 'px';
	      } else {
	        ripple.style.width = '0px';
	        ripple.style.height = '0px';
	      }
	    }
	  }, {
	    key: 'setTooltipPosition',
	    value: function setTooltipPosition() {
	      this.setState({ offsetWidth: this.refs.tooltip.offsetWidth });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          horizontalPosition = _props.horizontalPosition,
	          label = _props.label,
	          show = _props.show,
	          touch = _props.touch,
	          verticalPosition = _props.verticalPosition,
	          other = (0, _objectWithoutProperties3.default)(_props, ['horizontalPosition', 'label', 'show', 'touch', 'verticalPosition']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, {
	          ref: 'tooltip',
	          style: prepareStyles((0, _simpleAssign2.default)(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style))
	        }),
	        _react2.default.createElement('div', {
	          ref: 'ripple',
	          style: prepareStyles((0, _simpleAssign2.default)(styles.ripple, this.props.show && styles.rippleWhenShown))
	        }),
	        _react2.default.createElement(
	          'span',
	          { style: prepareStyles(styles.label) },
	          label
	        )
	      );
	    }
	  }]);
	  return Tooltip;
	}(_react.Component);
	
	Tooltip.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	 true ? Tooltip.propTypes = {
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  horizontalPosition: _react.PropTypes.oneOf(['left', 'right', 'center']),
	  label: _react.PropTypes.node.isRequired,
	  show: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  touch: _react.PropTypes.bool,
	  verticalPosition: _react.PropTypes.oneOf(['top', 'bottom'])
	} : void 0;
	exports.default = Tooltip;

/***/ },

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(512);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(521);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationExpandLess = function NavigationExpandLess(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z' })
	  );
	};
	NavigationExpandLess = (0, _pure2.default)(NavigationExpandLess);
	NavigationExpandLess.displayName = 'NavigationExpandLess';
	NavigationExpandLess.muiName = 'SvgIcon';
	
	exports.default = NavigationExpandLess;

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(512);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(521);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationExpandMore = function NavigationExpandMore(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' })
	  );
	};
	NavigationExpandMore = (0, _pure2.default)(NavigationExpandMore);
	NavigationExpandMore.displayName = 'NavigationExpandMore';
	NavigationExpandMore.muiName = 'SvgIcon';
	
	exports.default = NavigationExpandMore;

/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _List = __webpack_require__(551);
	
	var _List2 = _interopRequireDefault(_List);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NestedList = function NestedList(props) {
	  var children = props.children,
	      open = props.open,
	      nestedLevel = props.nestedLevel,
	      style = props.style;
	
	
	  if (!open) {
	    return null;
	  }
	
	  return _react2.default.createElement(
	    _List2.default,
	    { style: style },
	    _react.Children.map(children, function (child) {
	      return (0, _react.isValidElement)(child) ? (0, _react.cloneElement)(child, {
	        nestedLevel: nestedLevel + 1
	      }) : child;
	    })
	  );
	};
	
	 true ? NestedList.propTypes = {
	  children: _react.PropTypes.node,
	  nestedLevel: _react.PropTypes.number.isRequired,
	  open: _react.PropTypes.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	} : void 0;
	
	exports.default = NestedList;

/***/ },

/***/ 646:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reactRedux = __webpack_require__(356);
	
	var _deckbuilder = __webpack_require__(647);
	
	var _DeckBuilder = __webpack_require__(650);
	
	var _DeckBuilder2 = _interopRequireDefault(_DeckBuilder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*  Object of action creators (can also be function that returns object).
	    Keys will be passed as props to presentational components. Here we are
	    implementing our wrapper around increment; the component doesn't care   */
	
	var mapDispatchToProps = {
	    placeInDeck: _deckbuilder.placeInDeck,
	    removeFromDeck: _deckbuilder.removeFromDeck
	};
	
	/*  This is a container component. Notice it does not contain any JSX,
	    nor does it import React. This component is **only** responsible for
	    wiring in the actions and state necessary to render a presentational
	    component - in this case, the battle:   */
	
	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        playerDeck: state.deckbuilder
	    };
	};
	
	/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:
	
	    import { createSelector } from 'reselect'
	    const battle = (state) => state.battle
	    const tripleCount = createSelector(battle, (count) => count * 3)
	    const mapStateToProps = (state) => ({
	      battle: tripleCount(state)
	    })
	
	    Selectors can compute derived data, allowing Redux to store the minimal possible state.
	    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
	    Selectors are composable. They can be used as input to other selectors.
	    https://github.com/reactjs/reselect    */
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_DeckBuilder2.default);

/***/ },

/***/ 647:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.REMOVE_FROM_DECK = exports.PLACE_IN_DECK = undefined;
	
	var _defineProperty2 = __webpack_require__(455);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _assign = __webpack_require__(281);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _ACTION_HANDLERS;
	
	exports.placeInDeck = placeInDeck;
	exports.removeFromDeck = removeFromDeck;
	exports.default = deckbuilderReducer;
	
	var _initialDeckState = __webpack_require__(648);
	
	var _createStore = __webpack_require__(201);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	// const function
	var PLACE_IN_DECK = exports.PLACE_IN_DECK = 'PLACE_IN_DECK';
	var REMOVE_FROM_DECK = exports.REMOVE_FROM_DECK = 'REMOVE_FROM_DECK';
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	
	function placeInDeck(card) {
	  return {
	    type: PLACE_IN_DECK,
	    payload: card
	  };
	}
	
	function removeFromDeck(card) {
	  return {
	    type: REMOVE_FROM_DECK,
	    payload: card
	  };
	}
	
	var actions = exports.actions = {
	  placeInDeck: placeInDeck,
	  removeFromDeck: removeFromDeck
	};
	
	// ------------------------------------
	// Action Handlers
	// ------------------------------------
	var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, (0, _defineProperty3.default)(_ACTION_HANDLERS, PLACE_IN_DECK, function (state, action) {
	  var _Object$assign2;
	
	  var card = state[action.payload.type].inPool[action.payload.cardId];
	  var array = state[action.payload.type].inDeck;
	  array.push(card);
	
	  return (0, _assign2.default)({}, state, (_Object$assign2 = {}, (0, _defineProperty3.default)(_Object$assign2, action.payload.type, (0, _assign2.default)({}, state[action.payload.type], {
	    inDeck: array
	  })), (0, _defineProperty3.default)(_Object$assign2, 'cardsInDeck', state.cardsInDeck + 1), (0, _defineProperty3.default)(_Object$assign2, 'dinoDollars', state.dinoDollars - card.cost), _Object$assign2));
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, REMOVE_FROM_DECK, function (state, action) {
	  var _Object$assign3;
	
	  var card = state[action.payload.type].inDeck[action.payload.cardId];
	  var array = state[action.payload.type].inDeck;
	  array.splice(action.payload.cardId, 1);
	  return (0, _assign2.default)({}, state, (_Object$assign3 = {}, (0, _defineProperty3.default)(_Object$assign3, action.payload.type, (0, _assign2.default)({}, state[action.payload.type], {
	    inDeck: array
	  })), (0, _defineProperty3.default)(_Object$assign3, 'cardsInDeck', state.cardsInDeck - 1), (0, _defineProperty3.default)(_Object$assign3, 'dinoDollars', state.dinoDollars + card.cost), _Object$assign3));
	}), _ACTION_HANDLERS);
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	var initialState = _initialDeckState.DECKBUILD_STATE;
	function deckbuilderReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var handler = ACTION_HANDLERS[action.type];
	
	  return handler ? handler(state, action) : state;
	}

/***/ },

/***/ 648:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var cardData = __webpack_require__(649).CARD_DATA;
	
	function isLand(card) {
	  if (card.type === 'land') {
	    return card;
	  }
	}
	
	function isWater(card) {
	  if (card.type === 'water') {
	    return card;
	  }
	}
	
	function isAir(card) {
	  if (card.type === 'air') {
	    return card;
	  }
	}
	
	var landArray = cardData.filter(isLand);
	var waterArray = cardData.filter(isWater);
	var airArray = cardData.filter(isAir);
	
	var DECKBUILD_STATE = exports.DECKBUILD_STATE = {
	  dinoDollars: 200,
	  deckSize: 25,
	  cardsInDeck: 0,
	  duplicateCardLimit: 3,
	  deckName: '',
	  land: {
	    inPool: landArray,
	    inDeck: []
	  },
	  water: {
	    inPool: waterArray,
	    inDeck: []
	  },
	  air: {
	    inPool: airArray,
	    inDeck: []
	  }
	};

/***/ },

/***/ 649:
/***/ function(module, exports) {

	'use strict';
	
	var CARD_ARRAY = [{ _id: 1, name: 'alvarezsaurus', imgUrl: '/img/alvarezsaurus.svg', type: 'land', power: 3, cost: 5 }, { _id: 2, name: 'amargasaurus', imgUrl: '/img/amargasaurus.svg', type: 'land', power: 5, cost: 8 }, { _id: 3, name: 'ampelosaurus', imgUrl: '/img/ampelosaurus.svg', type: 'land', power: 7, cost: 11 }, { _id: 4, name: 'ankylosaurus', imgUrl: '/img/ankylosaurus.svg', type: 'land', power: 6, cost: 9 }, { _id: 5, name: 'apatosaurus', imgUrl: '/img/apatosaurus.svg', type: 'land', power: 2, cost: 3 }, { _id: 6, name: 'azendohsaurus', imgUrl: '/img/azendohsaurus.svg', type: 'land', power: 2, cost: 3 }, { _id: 7, name: 'bactrosaurus', imgUrl: '/img/bactrosaurus.svg', type: 'land', power: 4, cost: 6 }, { _id: 8, name: 'baryonyx', imgUrl: '/img/baryonyx.svg', type: 'land', power: 7, cost: 11 }, { _id: 9, name: 'basilosaurus', imgUrl: '/img/basilosaurus.svg', type: 'water', power: 9, cost: 14 }, { _id: 10, name: 'bat', imgUrl: '/img/bat.svg', type: 'air', power: 6, cost: 9 }, { _id: 11, name: 'beipiaosaurus', imgUrl: '/img/beipiaosaurus.svg', type: 'air', power: 3, cost: 5 }, { _id: 12, name: 'bird', imgUrl: '/img/bird.svg', type: 'air', power: 3, cost: 5 }, { _id: 13, name: 'buitreraptor', imgUrl: '/img/buitreraptor.svg', type: 'land', power: 5, cost: 8 }, { _id: 14, name: 'caudipteryx', imgUrl: '/img/caudipteryx.svg', type: 'land', power: 4, cost: 6 }, { _id: 15, name: 'clam', imgUrl: '/img/clam.svg', type: 'water', power: 1, cost: 2 }, { _id: 16, name: 'coelophysis', imgUrl: '/img/coelophysis.svg', type: 'land', power: 6, cost: 9 }, { _id: 17, name: 'corythosaurus', imgUrl: '/img/corythosaurus.svg', type: 'land', power: 2, cost: 3 }, { _id: 18, name: 'dilophosaurus', imgUrl: '/img/dilophosaurus.svg', type: 'land', power: 1, cost: 2 }, { _id: 19, name: 'elasmosaurus', imgUrl: '/img/elasmosaurus.svg', type: 'water', power: 6, cost: 9 }, { _id: 20, name: 'euskelosaurus', imgUrl: '/img/euskelosaurus.svg', type: 'land', power: 5, cost: 8 }, { _id: 21, name: 'fish', imgUrl: '/img/fish.svg', type: 'water', power: 4, cost: 6 }, { _id: 22, name: 'graciliceratops', imgUrl: '/img/graciliceratops.svg', type: 'land', power: 8, cost: 13 }, { _id: 23, name: 'herrerasaurus', imgUrl: '/img/herrerasaurus.svg', type: 'land', power: 5, cost: 8 }, { _id: 24, name: 'hummingbird', imgUrl: '/img/hummingbird.svg', type: 'air', power: 1, cost: 2 }, { _id: 25, name: 'ichthyosaurus', imgUrl: '/img/ichthyosaurus.svg', type: 'water', power: 4, cost: 6 }, { _id: 26, name: 'iguanodon', imgUrl: '/img/iguanodon.svg', type: 'land', power: 1, cost: 2 }, { _id: 27, name: 'jellyfish', imgUrl: '/img/jellyfish.svg', type: 'water', power: 8, cost: 13 }, { _id: 28, name: 'lambeosaurus', imgUrl: '/img/lambeosaurus.svg', type: 'land', power: 3, cost: 5 }, { _id: 29, name: 'owl', imgUrl: '/img/owl.svg', type: 'air', power: 5, cost: 8 }, { _id: 30, name: 'pachycephalosaurus', imgUrl: '/img/pachycephalosaurus.svg', type: 'land', power: 5, cost: 8 }, { _id: 31, name: 'parasaurolophus', imgUrl: '/img/parasaurolophus.svg', type: 'land', power: 3, cost: 5 }, { _id: 32, name: 'pelicanimimus', imgUrl: '/img/pelicanimimus.svg', type: 'land', power: 1, cost: 2 }, { _id: 33, name: 'plateosaurus', imgUrl: '/img/plateosaurus.svg', type: 'land', power: 7, cost: 11 }, { _id: 34, name: 'protoceratops', imgUrl: '/img/protoceratops.svg', type: 'land', power: 6, cost: 9 }, { _id: 35, name: 'pterodactyl', imgUrl: '/img/pterodactyl.svg', type: 'air', power: 8, cost: 13 }, { _id: 36, name: 'rhamphorhynchus', imgUrl: '/img/rhamphorhynchus.svg', type: 'air', power: 7, cost: 11 }, { _id: 37, name: 'sauropelta', imgUrl: '/img/sauropelta.svg', type: 'land', power: 3, cost: 5 }, { _id: 38, name: 'scelidosaurus', imgUrl: '/img/scelidosaurus.svg', type: 'land', power: 4, cost: 6 }, { _id: 39, name: 'scutellosaurus', imgUrl: '/img/scutellosaurus.svg', type: 'land', power: 5, cost: 8 }, { _id: 40, name: 'spinosaurus', imgUrl: '/img/spinosaurus.svg', type: 'land', power: 10, cost: 15 }, { _id: 41, name: 'starfish', imgUrl: '/img/starfish.svg', type: 'water', power: 2, cost: 2 }, { _id: 42, name: 'stegosaurus', imgUrl: '/img/stegosaurus.svg', type: 'land', power: 8, cost: 13 }, { _id: 43, name: 'styracosaurus', imgUrl: '/img/styracosaurus.svg', type: 'land', power: 5, cost: 8 }, { _id: 44, name: 'syntarsus', imgUrl: '/img/syntarsus.svg', type: 'land', power: 7, cost: 11 }, { _id: 45, name: 'toucan', imgUrl: '/img/toucan.svg', type: 'air', power: 3, cost: 5 }, { _id: 46, name: 'triceratops', imgUrl: '/img/triceratops.svg', type: 'land', power: 8, cost: 13 }, { _id: 47, name: 'tyrannosaurus-rex', imgUrl: '/img/tyrannosaurus-rex.svg', type: 'land', power: 10, cost: 15 }, { _id: 48, name: 'velociraptor', imgUrl: '/img/velociraptor.svg', type: 'land', power: 8, cost: 13 }, { _id: 49, name: 'whale', imgUrl: '/img/whale.svg', type: 'water', power: 10, cost: 15 }, { _id: 50, name: 'yinlong', imgUrl: '/img/yinlong.svg', type: 'land', power: 5, cost: 8 }, { _id: 51, name: 'dracorex', imgUrl: '/img/dracorex.svg', type: 'land', power: 8, cost: 13 }];
	
	module.exports = { CARD_DATA: CARD_ARRAY };

/***/ },

/***/ 650:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DeckRow = __webpack_require__(651);
	
	var _DeckRow2 = _interopRequireDefault(_DeckRow);
	
	var _DeckBuilderInfoBar = __webpack_require__(656);
	
	var _DeckBuilderInfoBar2 = _interopRequireDefault(_DeckBuilderInfoBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DeckBuilder = function (_React$Component) {
	  (0, _inherits3.default)(DeckBuilder, _React$Component);
	
	  function DeckBuilder() {
	    (0, _classCallCheck3.default)(this, DeckBuilder);
	    return (0, _possibleConstructorReturn3.default)(this, (DeckBuilder.__proto__ || (0, _getPrototypeOf2.default)(DeckBuilder)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(DeckBuilder, [{
	    key: 'render',
	    value: function render() {
	      console.log(this.props.playerDeck);
	      return _react2.default.createElement(
	        'div',
	        { className: 'row no-gutters' },
	        _react2.default.createElement(
	          'div',
	          { className: 'info-bar col-1 justify-content-center align-items-center pt-2 pb-4' },
	          _react2.default.createElement(_DeckBuilderInfoBar2.default, { playerDeck: this.props.playerDeck })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'deck col-11' },
	          _react2.default.createElement(_DeckRow2.default, { removeFromDeck: this.props.removeFromDeck, placeInDeck: this.props.placeInDeck, type: 'land', playerDeck: this.props.playerDeck, cards: this.props.playerDeck.land }),
	          _react2.default.createElement(_DeckRow2.default, { removeFromDeck: this.props.removeFromDeck, placeInDeck: this.props.placeInDeck, type: 'air', playerDeck: this.props.playerDeck, cards: this.props.playerDeck.air }),
	          _react2.default.createElement(_DeckRow2.default, { removeFromDeck: this.props.removeFromDeck, placeInDeck: this.props.placeInDeck, type: 'water', playerDeck: this.props.playerDeck, cards: this.props.playerDeck.water })
	        )
	      );
	    }
	  }]);
	  return DeckBuilder;
	}(_react2.default.Component);
	
	exports.default = DeckBuilder;

/***/ },

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(280);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(652);
	
	var _DeckCardWrapper = __webpack_require__(654);
	
	var _DeckCardWrapper2 = _interopRequireDefault(_DeckCardWrapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DeckCard = function (_React$Component) {
	  (0, _inherits3.default)(DeckCard, _React$Component);
	
	  function DeckCard() {
	    (0, _classCallCheck3.default)(this, DeckCard);
	    return (0, _possibleConstructorReturn3.default)(this, (DeckCard.__proto__ || (0, _getPrototypeOf2.default)(DeckCard)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(DeckCard, [{
	    key: 'renderDeckComponents',
	    value: function renderDeckComponents(cardArray, section) {
	      var _this2 = this;
	
	      return cardArray.map(function (card, i) {
	        return _react2.default.createElement(_DeckCardWrapper2.default, (0, _extends3.default)({ removeFromDeck: _this2.props.removeFromDeck,
	          playerDeck: _this2.props.playerDeck,
	          placeInDeck: _this2.props.placeInDeck,
	          cards: _this2.props,
	          key: i }, card, {
	          id: _this2.props.type + '_' + section + '_' + i }));
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var poolCards = this.renderDeckComponents(this.props.cards.inPool, "pool");
	      var deckCards = this.renderDeckComponents(this.props.cards.inDeck, "deck");
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Available cards'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'card-container d-flex justify-content-center flex-wrap' },
	          poolCards
	        ),
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Chosen cards'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'card-container d-flex justify-content-center flex-wrap' },
	          deckCards
	        )
	      );
	    }
	  }]);
	  return DeckCard;
	}(_react2.default.Component);
	
	exports.default = DeckCard;

/***/ },

/***/ 652:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(653);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(438)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(653, function() {
				var newContent = __webpack_require__(653);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 653:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(437)();
	// imports
	
	
	// module
	exports.push([module.id, ".deck-card{width:105px;height:130px;position:relative;border-radius:5px}.deck-card:hover{box-shadow:0 0 10px 5px #abafb9}.deck-card-img-holder{min-height:80px;width:90px}.deck-card-img{max-width:100%;max-height:100%}.deck-card-name{font-size:.6rem;transform:rotate(-90deg);transform-origin:left bottom 0;position:absolute;bottom:3px;left:11px;max-width:105px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.deck-card-name-holder{position:relative;width:14px}.deck-card-power{bottom:3px;left:25px}.deck-card-cost,.deck-card-power{width:22px;height:22px;font-size:.75rem;line-height:1.9;position:absolute;color:#fff;text-shadow:1px 1px 1px #000;font-weight:700}.deck-card-cost{top:3px;left:48px;background-color:grey}.deck-card-medic{width:22px;height:22px;font-size:.75rem;line-height:1.9;position:absolute;bottom:3px;right:10px;color:#fff;text-shadow:1px 1px 1px #000;font-weight:700;background-color:blue}", "", {"version":3,"sources":["/./src/routes/DeckBuilder/components/src/routes/DeckBuilder/components/DeckCard.scss"],"names":[],"mappings":"AAAA,WACE,YAAY,aACC,kBACK,iBACA,CAJpB,iBAMI,+BAAoC,CACrC,sBAID,gBAAgB,UACL,CACZ,eAGC,eAAe,eACC,CACjB,gBAGC,gBAAiB,yBACQ,+BACM,kBACb,WACP,UACD,gBACM,uBACO,mBACJ,eACH,CACjB,uBAGC,kBAAkB,UACP,CACZ,iBAQC,WAAW,SACD,CAIX,iCAVC,WAAW,YACC,iBACM,gBACF,kBACE,WAGN,6BACkB,eACb,CAGnB,gBAME,QAAQ,UACE,qBAIY,CACvB,iBAGC,WAAW,YACC,iBACM,gBACF,kBACE,WACP,WACA,WACC,6BACkB,gBACb,qBACK,CACvB","file":"DeckCard.scss","sourcesContent":[".deck-card {\n  width: 105px;\n  height: 130px;\n  position: relative;\n  border-radius: 5px;\n  &:hover{\n    box-shadow: 0px 0px 10px 5px #abafb9;\n  }\n}\n\n.deck-card-img-holder {\n  min-height: 80px;\n  width: 90px;\n}\n\n.deck-card-img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.deck-card-name {\n  font-size: 0.6rem;\n  transform: rotate(-90deg);\n  transform-origin: left bottom 0;\n  position: absolute;\n  bottom: 3px;\n  left: 11px;\n  max-width: 105px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.deck-card-name-holder {\n  position: relative;\n  width: 14px;\n}\n\n.deck-card-power {\n  width: 22px;\n  height: 22px;\n  font-size: 0.75rem;\n  line-height: 1.9;\n  position: absolute;\n  bottom: 3px;\n  left: 25px;\n  color: white;\n  text-shadow: 1px 1px 1px black;\n  font-weight: bold;\n}\n\n.deck-card-cost {\n  width: 22px;\n  height: 22px;\n  font-size: 0.75rem;\n  line-height: 1.9;\n  position: absolute;\n  top: 3px;\n  left: 48px;\n  color: white;\n  text-shadow: 1px 1px 1px black;\n  font-weight: bold;\n  background-color: grey;\n}\n\n.deck-card-medic {\n  width: 22px;\n  height: 22px;\n  font-size: 0.75rem;\n  line-height: 1.9;\n  position: absolute;\n  bottom: 3px;\n  right: 10px;\n  color: white;\n  text-shadow: 1px 1px 1px black;\n  font-weight: bold;\n  background-color: blue;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 654:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DeckCard = __webpack_require__(655);
	
	var _DeckCard2 = _interopRequireDefault(_DeckCard);
	
	var _RaisedButton = __webpack_require__(479);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _Popover = __webpack_require__(523);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Menu = __webpack_require__(548);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuItem = __webpack_require__(555);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _reactRouter = __webpack_require__(224);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DeckCardWrapper = function (_React$Component) {
	  (0, _inherits3.default)(DeckCardWrapper, _React$Component);
	
	  function DeckCardWrapper(props) {
	    (0, _classCallCheck3.default)(this, DeckCardWrapper);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (DeckCardWrapper.__proto__ || (0, _getPrototypeOf2.default)(DeckCardWrapper)).call(this, props));
	
	    _this.handleTouchTap = function (event) {
	      // This prevents ghost click.
	      event.preventDefault();
	      _this.setState({
	        open: true,
	        anchorEl: event.currentTarget
	      });
	    };
	
	    _this.handleRequestClose = function () {
	      _this.setState({
	        open: false
	      });
	    };
	
	    _this.sufficientDollars = function () {
	      return _this.props.playerDeck.dinoDollars >= _this.props.cost;
	    };
	
	    _this.lessThanCardLimit = function () {
	      var array = _this.props.playerDeck['' + _this.props.type].inDeck;
	      var counter = 0;
	      array.forEach(function (card) {
	        if (card._id == _this.props._id) {
	          counter += 1;
	        }
	      });
	      return counter < _this.props.playerDeck.duplicateCardLimit;
	    };
	
	    _this.addCardToDeck = function () {
	      var cardData = {
	        type: _this.props.type,
	        cardId: parseInt(_this.props.id.split("_")[2])
	      };
	      if (_this.sufficientDollars() && _this.lessThanCardLimit()) {
	        _this.props.placeInDeck(cardData);
	      }
	    };
	
	    _this.removeCardFromDeck = function () {
	      console.log("removeCardFromDeck");
	      console.log(_this.props.id.split("_")[1]);
	      var cardData = {
	        type: _this.props.type,
	        cardId: parseInt(_this.props.id.split("_")[2])
	      };
	      _this.props.removeFromDeck(cardData);
	    };
	
	    _this.state = {
	      open: false
	    };
	
	    _this.addCardToDeck = _this.addCardToDeck.bind(_this);
	    _this.removeCardFromDeck = _this.removeCardFromDeck.bind(_this);
	    return _this;
	  }
	
	  (0, _createClass3.default)(DeckCardWrapper, [{
	    key: 'loadContent',
	    value: function loadContent() {
	      if (this.props.id.split("_")[1] == 'pool') {
	        return _react2.default.createElement(_MenuItem2.default, { primaryText: 'Place In Deck', onClick: this.addCardToDeck });
	      } else {
	        return _react2.default.createElement(_MenuItem2.default, { primaryText: 'Remove From Deck', onClick: this.removeCardFromDeck });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var content = this.loadContent();
	      return _react2.default.createElement(
	        'div',
	        { className: 'mb-2' },
	        _react2.default.createElement(
	          'div',
	          { onTouchTap: this.handleTouchTap },
	          _react2.default.createElement(_DeckCard2.default, {
	            name: this.props.name,
	            power: this.props.power,
	            type: this.props.type,
	            cost: this.props.cost,
	            imgUrl: this.props.imgUrl,
	            placeInDeck: this.props.placeInDeck,
	            removeFromDeck: this.props.removeFromDeck
	          })
	        ),
	        _react2.default.createElement(
	          _Popover2.default,
	          {
	            open: this.state.open,
	            anchorEl: this.state.anchorEl,
	            anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
	            targetOrigin: { horizontal: 'left', vertical: 'top' },
	            onRequestClose: this.handleRequestClose
	          },
	          _react2.default.createElement(
	            _Menu2.default,
	            null,
	            content
	          )
	        )
	      );
	    }
	  }]);
	  return DeckCardWrapper;
	}(_react2.default.Component);
	
	exports.default = DeckCardWrapper;

/***/ },

/***/ 655:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(652);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DeckCard = function (_React$Component) {
	  (0, _inherits3.default)(DeckCard, _React$Component);
	
	  function DeckCard(props) {
	    (0, _classCallCheck3.default)(this, DeckCard);
	    return (0, _possibleConstructorReturn3.default)(this, (DeckCard.__proto__ || (0, _getPrototypeOf2.default)(DeckCard)).call(this, props));
	  }
	
	  (0, _createClass3.default)(DeckCard, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'deck-card box-shadow mx-1 ' + this.props.type + '-faint-bkgrnd d-flex align-items-stretch' },
	        _react2.default.createElement(
	          'div',
	          { className: 'deck-card-name-holder pb-1 ' + this.props.type + '-main-bkgrnd' },
	          _react2.default.createElement(
	            'h4',
	            { className: 'deck-card-name m-0 text-left highlighted-white-text' },
	            this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'deck-card-img-holder d-flex justify-content-top align-items-center p-1' },
	          _react2.default.createElement('img', { className: 'deck-card-img px-1', src: this.props.imgUrl, alt: 'Card image cap' })
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: 'deck-card-power ' + this.props.type + '-bkgrnd circle d-inline-block mx-auto highlighted-white-text' },
	          this.props.power
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: 'deck-card-cost ' + this.props.cost + '-bkgrnd circle d-inline-block mx-auto highlighted-white-text' },
	          '$',
	          this.props.cost
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: 'deck-card-medic circle d-inline-block mx-auto highlighted-white-text' },
	          '+'
	        )
	      );
	    }
	  }]);
	  return DeckCard;
	}(_react2.default.Component);
	
	exports.default = DeckCard;

/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(657);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _getPrototypeOf = __webpack_require__(304);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(309);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(310);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(314);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(348);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RaisedButton = __webpack_require__(479);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _PixosMenu = __webpack_require__(510);
	
	var _PixosMenu2 = _interopRequireDefault(_PixosMenu);
	
	__webpack_require__(659);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DeckBuilderInfoBar = function (_React$Component) {
	  (0, _inherits3.default)(DeckBuilderInfoBar, _React$Component);
	
	  function DeckBuilderInfoBar(props) {
	    (0, _classCallCheck3.default)(this, DeckBuilderInfoBar);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (DeckBuilderInfoBar.__proto__ || (0, _getPrototypeOf2.default)(DeckBuilderInfoBar)).call(this, props));
	
	    _this.saveDeck = _this.saveDeck.bind(_this);
	    return _this;
	  }
	
	  (0, _createClass3.default)(DeckBuilderInfoBar, [{
	    key: 'saveDeck',
	    value: function saveDeck() {
	
	      var deck = this.props.playerDeck.land.inDeck.concat(this.props.playerDeck.air.inDeck.concat(this.props.playerDeck.water.inDeck));
	      console.log('Deck is', deck);
	      fetch(window.location.origin + '/user/deck', {
	        credentials: "same-origin",
	        method: 'POST',
	        headers: {
	          'Content-Type': 'application/json'
	        },
	        body: (0, _stringify2.default)(deck)
	      });
	    }
	  }, {
	    key: 'loadContent',
	    value: function loadContent() {
	      if (this.props.playerDeck.cardsInDeck == this.props.playerDeck.deckSize) {
	        return _react2.default.createElement(
	          'button',
	          { onClick: this.saveDeck },
	          'Save Deck'
	        );
	      } else {
	        return _react2.default.createElement(
	          'button',
	          { disabled: true },
	          'Save Deck'
	        );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var content = this.loadContent();
	      return _react2.default.createElement(
	        'div',
	        { className: 'info-bar float-left justify-content-center align-items-center' },
	        _react2.default.createElement(_PixosMenu2.default, null),
	        _react2.default.createElement(
	          'p',
	          { className: 'dino-dollars justify-content-center mb-5' },
	          'Current DinoDollars $',
	          this.props.playerDeck.dinoDollars
	        ),
	        _react2.default.createElement(
	          'p',
	          { className: 'card-in-deck justify-content-center mt-5' },
	          'Cards in Deck - ',
	          this.props.playerDeck.cardsInDeck
	        ),
	        content
	      );
	    }
	  }]);
	  return DeckBuilderInfoBar;
	}(_react2.default.Component);
	
	exports.default = DeckBuilderInfoBar;
	
	
	DeckBuilderInfoBar.propTypes = {
	  playerDeck: _react2.default.PropTypes.object.isRequired
	};

/***/ },

/***/ 657:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(658), __esModule: true };

/***/ },

/***/ 658:
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(7)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },

/***/ 659:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(660);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(438)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(660, function() {
				var newContent = __webpack_require__(660);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(437)();
	// imports
	
	
	// module
	exports.push([module.id, ".info-bar{position:relative;word-wrap:break-word}", "", {"version":3,"sources":["/./src/routes/DeckBuilder/components/src/routes/DeckBuilder/components/DeckBuilderInfoBar.scss"],"names":[],"mappings":"AAAA,UACE,kBAAkB,oBACG,CACtB","file":"DeckBuilderInfoBar.scss","sourcesContent":[".info-bar {\n  position: relative;\n  word-wrap: break-word;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }

});
//# sourceMappingURL=4.deckbuilder.a2b2af5c82cf51d5d7ec.js.map