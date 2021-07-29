(self["webpackChunksleact_js_front"] = self["webpackChunksleact_js_front"] || []).push([["pages_LogIn_index_jsx"],{

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();



const useInput = initialData => {
  _s();

  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialData);
  const handler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

_s(useInput, "NFkbgSnr7NepMDYxzIvUODk02VE=");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInput);

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./pages/LogIn/index.jsx":
/*!*******************************!*\
  !*** ./pages/LogIn/index.jsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _pages_LogIn_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/LogIn/styles */ "./pages/LogIn/styles.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _layouts_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layouts/Header */ "./layouts/Header/index.jsx");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @layouts/Footer */ "./layouts/Footer/index.jsx");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _utils_pwEncrypt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/pwEncrypt */ "./utils/pwEncrypt.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @actions/auth */ "./actions/auth.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();












const LogIn = props => {
  _s();

  const [email, onChangeEmail] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  const [password, onChangePassword] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  const [loginSuccess, setLoginSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    isLoggedIn
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.auth);
  const {
    message
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.message);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    const pwHash = (0,_utils_pwEncrypt__WEBPACK_IMPORTED_MODULE_5__.default)(password);
    dispatch((0,_actions_auth__WEBPACK_IMPORTED_MODULE_6__.signin)(email, pwHash)).then(() => {// props.history.push('/main');
      // window.location.reload();
    }).catch(err => {
      console.dir(err);
    }); // axios
    //   .post(
    //     '/api/signin',
    //     { email, password: pwHash },
    //     {
    //       withCredentials: true,
    //     },
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     if (res.data.data.access_token) {
    //       setLoginSuccess(true);
    //       // props.history.push('/main');
    //       // window.location.reload();
    //       localStorage.setItem('user', JSON.stringify(res.data.data));
    //     }
    //   });
  }, [email, password]); // if (isLoggedIn) {
  //   props.history.push('/main');
  // }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "container",
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_LogIn_styles__WEBPACK_IMPORTED_MODULE_1__.AllDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Header__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_LogIn_styles__WEBPACK_IMPORTED_MODULE_1__.LoginDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_LogIn_styles__WEBPACK_IMPORTED_MODULE_1__.Login, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "\uB85C\uADF8\uC778"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_LogIn_styles__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
    to: "/signup"
  }, "\uC6B0\uB3C4\uB3C5 \uAC00\uC785\uD558\uAE30")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_LogIn_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "\uC774\uBA54\uC77C",
    value: email,
    onChange: onChangeEmail
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_LogIn_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
    type: "password",
    id: "password",
    name: "password",
    placeholder: "\uBE44\uBC00\uBC88\uD638",
    value: password,
    onChange: onChangePassword
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_LogIn_styles__WEBPACK_IMPORTED_MODULE_1__.Button, {
    type: "submit"
  }, "\uB85C\uADF8\uC778"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_LogIn_styles__WEBPACK_IMPORTED_MODULE_1__.Search, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
    to: "/"
  }, "\uC544\uC774\uB514 \uCC3E\uAE30"), " | ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
    to: "/"
  }, "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_LogIn_styles__WEBPACK_IMPORTED_MODULE_1__.Social, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_LogIn_styles__WEBPACK_IMPORTED_MODULE_1__.FaceBook, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    class: "fab fa-facebook-square"
  }), " \uD398\uC774\uC2A4\uBD81\uC73C\uB85C \uC2DC\uC791\uD558\uAE30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_LogIn_styles__WEBPACK_IMPORTED_MODULE_1__.Google, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    class: "fab fa-google"
  }), " \uAD6C\uAE00\uB85C \uC2DC\uC791\uD558\uAE30")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Footer__WEBPACK_IMPORTED_MODULE_3__.default, null));
};

_s(LogIn, "hECngmdc7BvZYBPcskSuBg0IDhY=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch];
});

_c = LogIn;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.withRouter)(LogIn));

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "LogIn");
__webpack_require__.$Refresh$.register(_c2, "%default%");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./pages/LogIn/styles.jsx":
/*!********************************!*\
  !*** ./pages/LogIn/styles.jsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginDiv": () => (/* binding */ LoginDiv),
/* harmony export */   "AllDiv": () => (/* binding */ AllDiv),
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "Search": () => (/* binding */ Search),
/* harmony export */   "Login": () => (/* binding */ Login),
/* harmony export */   "Social": () => (/* binding */ Social),
/* harmony export */   "Input": () => (/* binding */ Input),
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "FaceBook": () => (/* binding */ FaceBook),
/* harmony export */   "Google": () => (/* binding */ Google)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);


const LoginDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  width: 1200px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 100px;
`;
const AllDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`;
const Form = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.form`
  width: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;
const Search = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  width: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #ced4da;

  & span > a {
    color: #939597;
    font-size: 14px;
  }
`;
const Login = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  width: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  & h2 {
    width: 100%;
    margin: 40px 0;
    margin-bottom: 60px;
    font-size: 30px;
  }

  & span > a {
    color: #0f4c81;
    font-size: 14px;
    float: right;
  }
`;
const Social = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  margin-top: 25px;
  width: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;
const Input = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.input`
  border-radius: 3px;
  border: 1px solid #ced4da;
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 10px 0;
  margin-bottom: 0px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 38px;
  padding-top: 11px;
  padding-bottom: 13px;
  line-height: 1.33333333;
  font-size: 14px;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`;
const Button = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.button`
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: #0f4c81;
  border: none;
  font-size: 14px;
  font-weight: 900;
  height: 48px;
  min-width: 96px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(15, 76, 129, 0.8);
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
`;
const FaceBook = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.button`
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: #4167b2;
  border: none;
  font-size: 14px;
  font-weight: 900;
  height: 48px;
  min-width: 96px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(65, 103, 178, 0.8);
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
  & i {
    font-size: 16px;
    text-align: center;
  }
`;
const Google = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.button`
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: #f13f31;
  border: none;
  font-size: 14px;
  font-weight: 900;
  height: 48px;
  min-width: 96px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(241, 63, 49, 0.8);
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
  }
  & i {
    font-size: 16px;
    text-align: center;
  }
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ })

}]);