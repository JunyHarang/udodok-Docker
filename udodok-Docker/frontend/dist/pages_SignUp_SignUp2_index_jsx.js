(self["webpackChunksleact_js_front"] = self["webpackChunksleact_js_front"] || []).push([["pages_SignUp_SignUp2_index_jsx"],{

/***/ "./components/Modal/Auth/index.jsx":
/*!*****************************************!*\
  !*** ./components/Modal/Auth/index.jsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Modal_Auth_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Modal/Auth/styles */ "./components/Modal/Auth/styles.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();






const Auth = ({
  authModalOpen,
  setAuthModalOpen,
  setEmailAuthCheck,
  email
}) => {
  _s();

  const [sendMail, setSendMail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [authNumber, setAuthNumber] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const onChangeModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setAuthModalOpen(false);
    setSendMail(false);
  }, []);
  const onChangeSendMail = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setSendMail(false);
    axios__WEBPACK_IMPORTED_MODULE_2___default().get(`/api/email-confirm?email=${email}`, {
      withCredentials: true
    }).then(res => {
      if (res.data.message === '???????????????') {
        alert('?????? ????????? ??????????????????.');
      } else {
        setSendMail(!sendMail);
      }
    }).catch(err => {
      console.dir(err);
    });
  }, [email]);
  const onChangeAuthNumber = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    const {
      value
    } = e.target;
    const onlyNum = value.replace(/[^0-9]/g, '');
    setAuthNumber(onlyNum);
  }, []);
  const onAuthConfirm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    setEmailAuthCheck(false); // console.log(authNumber);

    axios__WEBPACK_IMPORTED_MODULE_2___default().get(`/api/issuance-confirm?number=${authNumber}`, {
      withCredentials: true
    }).then(res => {
      if (res.data.message === '??????') {
        setEmailAuthCheck(true);
        onChangeModal();
      } else {
        alert('?????? ????????? ???????????? ????????????.');
      }
    }).catch(err => {
      console.dir(err);
    }); // setAuthModalOpen(false);
    // setSendMail(false);
  }, [authNumber]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Auth_styles__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    signUpModal: authModalOpen,
    onClick: onChangeModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Auth_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {
    signUpModal: authModalOpen
  }, !sendMail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Auth_styles__WEBPACK_IMPORTED_MODULE_1__.ModalWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Auth_styles__WEBPACK_IMPORTED_MODULE_1__.MainText, null, "\uC785\uB825\uD558\uC2E0 \uC774\uBA54\uC77C\uB85C \uC778\uC99D\uC744 \uC9C4\uD589\uD574 \uC8FC\uC138\uC694."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Auth_styles__WEBPACK_IMPORTED_MODULE_1__.SubText, null, "*\uC218\uC2E0\uD568\uC5D0\uC11C \uC778\uC99D\uBA54\uC77C\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC744 \uACBD\uC6B0 \uC2A4\uD338\uD568\uC744 \uC870\uD68C\uD558\uC138\uC694."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Auth_styles__WEBPACK_IMPORTED_MODULE_1__.ModalBtn, {
    onClick: onChangeSendMail
  }, "\uC778\uC99D \uBA54\uC77C \uBC1C\uC1A1")), sendMail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Auth_styles__WEBPACK_IMPORTED_MODULE_1__.ModalWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Auth_styles__WEBPACK_IMPORTED_MODULE_1__.MainText, null, "\uC774\uBA54\uC77C\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Auth_styles__WEBPACK_IMPORTED_MODULE_1__.SubText, null, "*\uC218\uC2E0\uD568\uC5D0\uC11C \uC778\uC99D\uBA54\uC77C\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC744 \uACBD\uC6B0 \uC2A4\uD338\uD568\uC744 \uC870\uD68C\uD558\uC138\uC694."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Auth_styles__WEBPACK_IMPORTED_MODULE_1__.TextInput, {
    name: "text",
    id: "text",
    type: "text",
    placeholder: "\uC778\uC99D\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    onChange: onChangeAuthNumber,
    value: authNumber
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Auth_styles__WEBPACK_IMPORTED_MODULE_1__.ModalBtn, {
    onClick: onAuthConfirm
  }, "\uC778\uC99D \uBC88\uD638 \uD655\uC778")))));
};

_s(Auth, "LcLAaaRHAgzpr2YUwKvPNtS0RNY=");

_c = Auth;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth);

var _c;

__webpack_require__.$Refresh$.register(_c, "Auth");

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

/***/ "./components/Modal/Auth/styles.jsx":
/*!******************************************!*\
  !*** ./components/Modal/Auth/styles.jsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal),
/* harmony export */   "ModalBtn": () => (/* binding */ ModalBtn),
/* harmony export */   "ModalWrapper": () => (/* binding */ ModalWrapper),
/* harmony export */   "MainText": () => (/* binding */ MainText),
/* harmony export */   "SubText": () => (/* binding */ SubText),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "TextInput": () => (/* binding */ TextInput)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);


const Modal = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: ${props => props.signUpModal ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;
const ModalBtn = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.button`
  border-radius: 3px;
  border: none;
  background-color: #900020;
  width: 225px;
  height: 39px;
  color: white;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: rgba(144, 0, 32, 0.8);
    border: none;
  }
`;
const ModalWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const MainText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  font-size: 18px;
`;
const SubText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  padding-top: 5px;
  font-size: 12px;
  color: #c4c4c4;
`;
const Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  width: 420px;
  height: 190px;
  background-color: white;
  display: ${props => props.signUpModal ? 'block' : 'none'};
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;
const TextInput = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.input`
  border: 1px solid #ced4da;
  border-radius: 3px;
  width: 225px;
  margin-top: 8px;
  padding: 12px;
  height: 38px;
  padding-top: 11px;
  padding-bottom: 13px;
  line-height: 1.33333333;
  font-size: 14px;

  &:focus {
    outline: none;
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

/***/ }),

/***/ "./components/Modal/Service/index.jsx":
/*!********************************************!*\
  !*** ./components/Modal/Service/index.jsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Modal_Service_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Modal/Service/styles */ "./components/Modal/Service/styles.jsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);




const Service = props => {
  const check = props.check;
  const text = [{
    mainText: '????????????, ???????????? ?????? ??? ????????? ???????????????.(??????)',
    subText: `???????????? ??????????????? ?????? ??? ????????????
  ????????? ?????? (?????? '?????????' ?????? ???)??? ??????????????? ???????????? ??? ???????????? ?????? ?????? ??????(?????? ??????????????????????????? ???), ????????????????????? ??? ????????? ??????????????? ??? ?????? ???????????? ?????? ????????? ????????????, ?????? ????????? ????????? ??????????????????????????? ????????? ????????? ?????? ????????? ????????? ????????? ????????????.
  
  ??? ???????????????????????????  'Go-Getter'??? ???????????? ????????? ?????? ?????? ?????????(?????? '???????????? ??????'?????? ???)??? ???????????? ????????? ?????? ????????? ?????? ????????????.
  
  ??? ?????????????????????????????? ???????????? ????????? ????????? ?????? ?????? ??? ???????????? ?????????????????? ?????? ?????? ?????????, ??? ?????? ????????? ???????????? ???????????? ????????????.
  
  
  ???. ???????????? ??????????????? ??????
  ???????????? '???????????? ??? ??????' ????????? ????????? ?????? ?????? ????????? ??? ??????, ????????? ????????? ????????? ?????? ????????? ??????????????? ?????? ???????????????.
  
  1. ?????????, ?????????, ?????????, ???????????? ???????????? ?????????????????? ???????????????.
  
  ???. ??????????????? ????????????
  
  ???????????? ????????? ?????? ???????????? ??????????????? ???????????????.
  
  1) ??? ??????????????? ?????? ????????? ??????????????? ???????????????.
  
  1. ??????????????? ?????? ??? ?????? ??????
  
  ???????????? ?????? ???????????? ?????? ?????? ??????, ????????? ????????? ?????? ??? ?????? ?????? ??????????????? ??????????????? ???????????????.
  
    1) ?????? ????????? ?????? ???????????????. 
    2) ?????? ??? ????????? ??????????????? ???????????? ????????? ?????? ?????? ?????? ??????, ?????? ?????? ????????? ????????????        
      ???????????? ????????? ????????? ????????? ?????? ????????? ?????? ?????? ??? ??????, ?????? ?????? ?????? ???????????? 
      ??????, ??????????????? ?????? ?????? ??????, ?????? ?????? ?????? ??? ?????? ?????? ???  ????????? ????????? ?????? 
      ???????????????.
  
  2. ??????????????? ?????? ??? ??????
  
  ???????????? ????????? ?????? ?????? ?????? ??????????????? ???3??? ?????? ????????? ???????????? ????????????. 
  
  ???, ????????? ?????? ????????? ?????? ???????????? ?????? ????????? ???????????????.
  
  ???. ??????????????? ???3??? ??????
      1) ????????? ????????? ????????? ??????
      2) ????????? ????????? ????????? ?????????, ?????? ???????????? ????????? ????????? ????????? ????????? ?????? ??????????????? 
        ????????? ?????? ??????
  
  3. ???????????? ?????? ??? ????????????
  
  ???????????? ??????????????? ????????? ??????????????? ?????? ?????? ??? ???????????? ???????????? ????????????.
  
  ???, ???????????? ???????????? ??????????????? ?????? ????????? ????????? ?????? ??????, ?????? ???????????? ?????? ?????? ???????????? ????????? ???????????? ???????????? ?????? ?????? ?????? ??????????????? ???????????? ???????????????.
  
  1) ?????? ????????? ?????? ??????
    - ????????????????????? ?????? ?????? ????????? ?????? 1?????? ???????????????.
  
  2) ?????? ????????? ?????? ??????
    - ?????? ?????? ???????????? ?????? ?????? ?????? ?????? : 5??? (??????????????? ???????????? ?????????????????? ?????? ??????)
    - ???????????? ??? ?????? ?????? ????????? ?????? ?????? ?????? : 5??? 
      (??????????????? ???????????? ?????????????????? ?????? ??????)
    - ????????? ?????? ?????? ??????????????? ?????? ?????? ?????? : 3??? 
      (??????????????? ???????????? ?????????????????? ?????? ??????)
    - ????????? ?????? ?????? ?????? : 3?????? (?????????????????????)
  
  4. ????????? ??????
  
  ???. ????????? ???????????? '???????????????'??? ?????? ????????? ?????? ????????? ??????????????? ????????? ??? ????????????.
  ???. ????????? ??????????????? ????????? ?????? ????????? ????????? ??????, ????????? ???????????? ????????? ?????? ???????????????      
      ?????? ?????? ???????????? ????????????.
      ?????? ????????? ??????????????? ???3????????? ?????? ????????? ???????????? ?????? ??????????????? ???3????????? ???????????? 
      ???????????? ????????? ?????????????????? ???????????????.
  
  5. ????????? ????????? ??????
  
  ????????? ??????????????? ???????????? ????????? ?????? ???????????? ???????????? ????????? ????????? ???????????? ?????? ????????? ????????? ????????????. ????????? ??????????????? ???????????? ????????? ??????????????? ???????????? ????????? ????????? ??????????????? ???????????? ????????? ????????? ????????????.
  
  ????????? ????????? ???????????? ????????? ?????? ???????????? ????????? ????????? ?????? ???????????? ????????????. ????????? ??????????????? ????????? ????????? ???????????? ???????????? ????????? ????????? ??????????????? ??? ????????? ????????????.
  
  ????????? ??? ????????? ????????? ????????? ????????? ?????? ??? ???????????? ????????? ????????? ?????????????????? ???????????? ??? ???????????? ?????? ?????? ????????? ??? ?????? ????????? ?????? ???????????? ??? ????????????.
  
  6. ??????
  
  ????????? ?????? ???????????? ?????? ???????????? ??? ??? ??????????????? ??????????????? ???????????? ????????? ???????????? ??? ????????? ??????????????????????????? ???????????? ????????? ??????????????????.
  
  ???????????? ???????????? ??? ????????? ?????? ???????????? ??? ?????? ????????? ????????? ????????? ?????? ???????????? ????????? ????????? ?????? ?????? ??? ?????? / ?????? ??? ??? ????????????.
  
  7. ????????? ??????
  
  ??? ???????????????????????? ?????? ??????, ?????? ??? ????????? ?????? ????????? ????????? ?????? 7???????????? ??? ???????????? ??????????????? ????????? ????????????. ??????, ????????? ????????? ????????? ????????? ????????? ????????? ?????? 30??? ?????? ??????????????? ?????? ?????? ??? ???????????? ????????? ?????? ?????? ?????? ????????????.
  
  ???????????? : 2020. 05. 29.
  
  ???????????? : 2020. 06. 05.`
  }, {
    mainText: '????????? ??????',
    subText: `????????? ?????? ??????`
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Service_styles__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    signUpModal: props.serviceModalOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Service_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {
    signUpModal: props.serviceModalOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Service_styles__WEBPACK_IMPORTED_MODULE_1__.ModalWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Service_styles__WEBPACK_IMPORTED_MODULE_1__.MainText, null, text[check].mainText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Service_styles__WEBPACK_IMPORTED_MODULE_1__.SubText, {
    value: text[check].subText
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Service_styles__WEBPACK_IMPORTED_MODULE_1__.ModalBtn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Service_styles__WEBPACK_IMPORTED_MODULE_1__.NoBtn, {
    onClick: () => {
      props.setServiceModalOpen(false);
    }
  }, "\uB2EB\uAE30")))));
};

_c = Service;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Service);

var _c;

__webpack_require__.$Refresh$.register(_c, "Service");

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

/***/ "./components/Modal/Service/styles.jsx":
/*!*********************************************!*\
  !*** ./components/Modal/Service/styles.jsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal),
/* harmony export */   "ModalBtn": () => (/* binding */ ModalBtn),
/* harmony export */   "OKBtn": () => (/* binding */ OKBtn),
/* harmony export */   "NoBtn": () => (/* binding */ NoBtn),
/* harmony export */   "ModalWrapper": () => (/* binding */ ModalWrapper),
/* harmony export */   "MainText": () => (/* binding */ MainText),
/* harmony export */   "SubText": () => (/* binding */ SubText),
/* harmony export */   "Container": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);


const Modal = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: ${props => props.signUpModal ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;
const ModalBtn = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const OKBtn = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.button`
  border-radius: 3px;
  border: none;
  background-color: #0f4c81;
  width: 100px;
  height: 39px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 35px;

  &:hover {
    background-color: rgba(15, 76, 129, 0.8);
    border: none;
  }
`;
const NoBtn = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.button`
  border-radius: 3px;
  border: none;
  background-color: #939597;
  width: 100px;
  height: 39px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 35px;

  &:hover {
    background-color: rgba(147, 149, 151, 0.8);
    border: none;
  }
`;
const ModalWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
`;
const MainText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  font-size: 16px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ced4da;
`;
const SubText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.textarea`
  padding: 10px;
  font-size: 12px;
  color: #4e4e4e;
  width: 460px;
  height: 200px;
  border: 1px solid #ced4da;
  resize: none;

  &:focus {
    outline: none;
  }
`;
const Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  width: 500px;
  height: 350px;
  background-color: white;
  display: ${props => props.signUpModal ? 'block' : 'none'};
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 99;
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

/***/ }),

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

/***/ "./pages/SignUp/SignUp2/index.jsx":
/*!****************************************!*\
  !*** ./pages/SignUp/SignUp2/index.jsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _layouts_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layouts/Header */ "./layouts/Header/index.jsx");
/* harmony import */ var _pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pages/SignUp/SignUp2/styles */ "./pages/SignUp/SignUp2/styles.jsx");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @layouts/Footer */ "./layouts/Footer/index.jsx");
/* harmony import */ var _components_Modal_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Modal/Auth */ "./components/Modal/Auth/index.jsx");
/* harmony import */ var _components_Modal_Service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Modal/Service */ "./components/Modal/Service/index.jsx");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @actions/auth */ "./actions/auth.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();













const SignUp2 = () => {
  _s();

  const pwCheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
  const nickNameCheck = /^[???-???|???-???|a-z|A-Z|0-9|]{4,16}$/;
  const [signUpSuccess, setSignUpSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [email, onChangeEmail] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__.default)('');
  const [name, onChangeName] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__.default)('');
  const [nickName, onChangeNickName] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__.default)('');
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [passwordCheck, setPasswordCheck] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [phoneNumber, setPhoneNumber] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [check, setCheck] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [emailAuthCheck, setEmailAuthCheck] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [terms, onChangeTerms] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__.default)(false);
  const [authModalOpen, setAuthModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [serviceModalOpen, setServiceModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [mismatchError, setMismatchError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    message
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(state => state.message);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  const onChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setPassword(e.target.value);
    setMismatchError(e.target.value !== passwordCheck);
  }, [passwordCheck]);
  const onChangePasswordCheck = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setPasswordCheck(e.target.value);
    setMismatchError(e.target.value !== password);
  }, [password]);
  const onChangePhoneNumber = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    const {
      value
    } = e.target;
    const onlyNum = value.replace(/[^0-9]/g, '');
    setPhoneNumber(onlyNum);
  }, []);
  const onClickAuthButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    setAuthModalOpen(true);
  }, [email]);
  const onClickServiceButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    setServiceModalOpen(true);
    const checkId = e.target.id;
    if (checkId === 'check1') setCheck(0);else setCheck(1);
  }, []);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();

    if (!emailAuthCheck) {
      alert('????????? ????????? ?????? ????????????');
    } else if (!pwCheck.test(password)) {
      alert('???????????? ??????');
    } else if (!nickNameCheck.test(nickName)) {
      alert('????????? ??????');
    } else if (!name.length || !name.trim().length) {
      alert('?????? ??????');
    } else if (!phoneNumber.length || !phoneNumber.trim().length) {
      alert('????????? ?????? ??????');
    } else if (!terms) {
      alert('?????? ?????? ???????????????');
    } else {
      dispatch((0,_actions_auth__WEBPACK_IMPORTED_MODULE_9__.signup)(email, name, nickName, password, phoneNumber)).then(() => {
        setSignUpSuccess(true);
        alert('?????? ?????? ??????');
      }).catch(err => {
        console.dir(err);
      }); // axios
      //   .post('/api/signup', {
      //     email,
      //     name,
      //     nick_name: nickName,
      //     password: pwHash,
      //     phone_number: phoneNumber,
      //   })
      //   .then((res) => {
      //     console.log(res);
      //     setSignUpSuccess(true);
      //     alert('?????? ?????? ??????');
      //   })
      //   .catch((err) => {
      //     console.dir(err);
      //   });
    }
  }, [email, password, name, phoneNumber, nickName, pwCheck]);

  if (signUpSuccess) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_10__.Redirect, {
      to: "/login"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "container",
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Auth__WEBPACK_IMPORTED_MODULE_4__.default, {
    authModalOpen: authModalOpen,
    setAuthModalOpen: setAuthModalOpen,
    setEmailAuthCheck: setEmailAuthCheck,
    email: email
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Service__WEBPACK_IMPORTED_MODULE_5__.default, {
    serviceModalOpen: serviceModalOpen,
    setServiceModalOpen: setServiceModalOpen,
    check: check
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.SignUpDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Header__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.SignUpWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.SignUpTitle, null, "\uD68C\uC6D0\uAC00\uC785"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.SignForm, {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.Email, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.Label, null, "\uC774\uBA54\uC77C", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.EmailInput, {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    onChange: onChangeEmail,
    value: email
  }), !emailAuthCheck && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.AuthButton, {
    onClick: onClickAuthButton
  }, "\uC778\uC99D\uBC1B\uAE30"), emailAuthCheck && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.AuthSuccessBtn, null, "\uC778\uC99D \uC644\uB8CC"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.Label, null, "\uBE44\uBC00\uBC88\uD638", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
    type: "password",
    id: "password",
    name: "password",
    placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    onChange: onChangePassword,
    value: password
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.SmallText, null, "\uBE44\uBC00\uBC88\uD638\uB294 8~16\uC790, \uC601\uBB38, \uC22B\uC790, \uD2B9\uC218\uBB38\uC790\uB97C \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.Label, null, "\uBE44\uBC00\uBC88\uD638 \uD655\uC778", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
    type: "password",
    id: "password-check",
    name: "password-check",
    placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    onChange: onChangePasswordCheck,
    value: passwordCheck
  }), mismatchError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.Error, null, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.Label, null, "\uC774\uB984", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    onChange: onChangeName,
    value: name
  }), !name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.Error, null, "\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.Label, null, "\uD734\uB300\uD3F0 \uBC88\uD638", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
    type: "text",
    id: "phone-number",
    name: "phone-number",
    placeholder: "-\uC5C6\uC774 \uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    onChange: onChangePhoneNumber,
    value: phoneNumber
  }), !phoneNumber && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.Error, null, "\uD734\uB300\uD3F0 \uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.Label, null, "\uB2C9\uB124\uC784", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
    type: "text",
    id: "nick-name",
    name: "nick-name",
    placeholder: "\uB2C9\uB124\uC784\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    onChange: onChangeNickName,
    value: nickName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.SmallText, null, "\uB2C9\uB124\uC784\uC740 4~16\uC790\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694."), !nickName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.Error, null, "\uB2C9\uB124\uC784\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.FormCheck, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "checkbox",
    id: "terms",
    name: "terms",
    value: terms,
    onClick: onChangeTerms
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.CheckText, null, "\uC6B0\uB3C4\uB3C5\uC758", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    id: "check1",
    onClick: onClickServiceButton
  }, "\uC774\uC6A9\uC57D\uAD00 \uBC0F \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC \uBC29\uCE68"), "(\uD544\uC218)\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "checkbox"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.CheckText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    id: "check2",
    onClick: onClickServiceButton
  }, "\uB9C8\uCF00\uD305 \uC815\uBCF4 \uC218\uC2E0"), "(\uC120\uD0DD)\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SignUp_SignUp2_styles__WEBPACK_IMPORTED_MODULE_2__.SignUpButton, {
    type: "submit"
  }, "\uD68C\uC6D0\uAC00\uC785")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Footer__WEBPACK_IMPORTED_MODULE_3__.default, null));
};

_s(SignUp2, "VpNM55IHMiOgak0cAwKyhoRsZkU=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__.default, react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch];
});

_c = SignUp2;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp2);

var _c;

__webpack_require__.$Refresh$.register(_c, "SignUp2");

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

/***/ "./pages/SignUp/SignUp2/styles.jsx":
/*!*****************************************!*\
  !*** ./pages/SignUp/SignUp2/styles.jsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpWrapper": () => (/* binding */ SignUpWrapper),
/* harmony export */   "SignUpDiv": () => (/* binding */ SignUpDiv),
/* harmony export */   "SignUpTitle": () => (/* binding */ SignUpTitle),
/* harmony export */   "SignForm": () => (/* binding */ SignForm),
/* harmony export */   "FormGroup": () => (/* binding */ FormGroup),
/* harmony export */   "Label": () => (/* binding */ Label),
/* harmony export */   "Email": () => (/* binding */ Email),
/* harmony export */   "EmailInput": () => (/* binding */ EmailInput),
/* harmony export */   "TextInput": () => (/* binding */ TextInput),
/* harmony export */   "SmallText": () => (/* binding */ SmallText),
/* harmony export */   "FormCheck": () => (/* binding */ FormCheck),
/* harmony export */   "CheckText": () => (/* binding */ CheckText),
/* harmony export */   "Error": () => (/* binding */ Error),
/* harmony export */   "AuthButton": () => (/* binding */ AuthButton),
/* harmony export */   "AuthSuccessBtn": () => (/* binding */ AuthSuccessBtn),
/* harmony export */   "SignUpButton": () => (/* binding */ SignUpButton)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);


const SignUpWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  padding: 20px;
  width: 500px;
`;
const SignUpDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`;
const SignUpTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  font-size: 30px;
  font-weight: bold;
`;
const SignForm = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.form`
  margin-top: 40px;
`;
const FormGroup = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  margin-bottom: 20px;
`;
const Label = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.label`
  font-size: 16px;
  margin-bottom: 0px;

  & span {
    color: blue;
  }
`;
const Email = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  width: 460px;
`;
const EmailInput = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.input`
  border: 1px solid #ced4da;
  border-radius: 3px;
  width: 353px;
  height: 45px;
  margin-top: 8px;
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
const TextInput = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.input`
  border: 1px solid #ced4da;
  border-radius: 3px;
  width: 460px;
  margin-top: 8px;
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
const SmallText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  font-size: 13px;
  color: #939597;
`;
const FormCheck = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  margin-top: 50px;
`;
const CheckText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.span`
  font-size: 12px;
  padding-left: 5px;

  & a {
    color: #1778b5;
    :hover {
      color: red;
      cursor: pointer;
    }
  }
`;
const Error = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
  font-size: 12px;
`;
const AuthButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.button`
  border-radius: 3px;
  border: none;
  background-color: #900020;
  width: 100px;
  height: 38px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: rgba(144, 0, 32, 0.8);
    border: none;
  }
`;
const AuthSuccessBtn = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.button`
  border-radius: 3px;
  border: none;
  background-color: #939597;
  width: 100px;
  height: 38px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 8px;
  pointer-events: none;
`;
const SignUpButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.button`
  font-size: 16px;
  color: white;
  background-color: #0f4c81;
  border: 0px;
  border-radius: 3px;
  width: 460px;
  height: 47px;
  margin-top: 8px;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: rgba(15, 76, 129, 0.8);
    border: none;
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