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
      if (res.data.message === '이메일중복') {
        alert('이미 가입된 이메일입니다.');
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
      if (res.data.message === '일치') {
        setEmailAuthCheck(true);
        onChangeModal();
      } else {
        alert('인증 번호가 일치하지 않습니다.');
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
    mainText: '이용약관, 개인정보 수집 및 이용에 동의합니다.(필수)',
    subText: `수집하는 개인정보의 항목 및 수집방법
  우리도 독서 (이하 '우도독' 이라 함)는 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 ‘정보통신망법’라 함), 개인정보보호법 등 모임이 준수하여야 할 국내 개인정보 보호 법령을 준수하며, 관련 법령에 의거한 개인정보처리방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다.
  
  본 개인정보처리방침은  'Go-Getter'가 운영하는 우도독 관련 제반 서비스(이하 '프로젝트 모임'이라 함)에 적용되며 다음과 같은 내용을 담고 있습니다.
  
  이 개인정보처리방침에서 사용하는 용어의 의미는 관련 법령 및 우도독의 이용약관에서 정한 바에 따르며, 그 밖의 사항은 일반적인 상관례에 따릅니다.
  
  
  가. 수집하는 개인정보의 항목
  우도독은 '커뮤니티 및 기타' 서비스 이용을 위해 회원 가입을 할 경우, 서비스 제공에 필요한 개인 정보를 회원가입을 통해 수집합니다.
  
  1. ‘이름, 이메일, 닉네임, 휴대전화 번호’가 필수항목으로 수집됩니다.
  
  나. 개인정보의 수집방법
  
  우도독은 다음과 같은 방법으로 개인정보를 수집합니다.
  
  1) 본 회원가입을 통해 귀하의 개인정보를 수집합니다.
  
  1. 개인정보의 수집 및 이용 목적
  
  우도독은 각종 홈페이지 내의 회원 관리, 서비스 제공과 개발 및 개선 등의 목적으로만 개인정보를 이용합니다.
  
    1) 회원 식별을 위해 이용합니다. 
    2) 법령 및 우도독 이용약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여        
      서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재, 약관 개정 등의 고지사항 
      전달, 분쟁조정을 위한 기록 보존, 회원 문의 처리 등 회원 보호 및  서비스 운영을 위해 
      이용합니다.
  
  2. 개인정보의 제공 및 위탁
  
  우도독은 회원의 사전 동의 없이 개인정보를 제3자 혹은 외부에 제공하지 않습니다. 
  
  단, 법령에 따라 필요할 경우 회원에게 해당 내용을 고지합니다.
  
  가. 개인정보의 제3자 제공
      1) 회원이 사전에 동의한 경우
      2) 법률에 특별한 규정이 있거나, 수사 목적으로 법률에 정해진 절차와 방법에 따라 수사기관의 
        요구가 있는 경우
  
  3. 개인정보 보유 및 이용기간
  
  우도독는 원칙적으로 회원의 개인정보를 회원 탈퇴 시 지체없이 파기하고 있습니다.
  
  단, 회원에게 개인정보 보관기간에 대해 별도의 동의를 얻은 경우, 또는 법령에서 일정 기간 정보보관 의무를 부과하는 경우에는 해당 기간 동안 개인정보를 안전하게 보관합니다.
  
  1) 내부 방침에 의한 보관
    - 부정이용기록은 부정 이용 방지를 위해 1년간 보관됩니다.
  
  2) 관련 법령에 의한 보관
    - 계약 또는 청약철회 등에 관한 기록 보유 : 5년 (전자상거래 등에서의 소비자보호에 관한 법률)
    - 대금결제 및 재화 등의 공급에 관한 기록 보유 : 5년 
      (전자상거래 등에서의 소비자보호에 관한 법률)
    - 소비자 불만 또는 분쟁처리에 관한 기록 보유 : 3년 
      (전자상거래 등에서의 소비자보호에 관한 법률)
    - 방문에 관한 기록 보유 : 3개월 (통신비밀보호법)
  
  4. 회원의 권리
  
  가. 회원은 언제든지 '마이페이지'의 회원 수정을 통해 자신의 개인정보를 수정할 수 있습니다.
  나. 회원이 개인정보의 오류에 대한 정정을 요청한 경우, 정정을 완료하기 전까지 해당 개인정보를      
      이용 또는 제공하지 않습니다.
      또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 
      통지하여 정정이 이루어지도록 하겠습니다.
  
  5. 회원의 권리와 의무
  
  회원은 개인정보를 보호받을 권리와 함께 스스로를 보호하고 타인의 정보를 침해하지 않을 의무도 가지고 있습니다. 회원의 개인정보가 유출되지 않도록 조심하시고 게시물을 포함한 타인의 개인정보를 훼손하지 않도록 유의해 주십시오.
  
  회원이 입력한 부정확한 정보로 인해 발생하는 사고의 책임은 회원 자신에게 있습니다. 회원은 개인정보를 최신의 상태로 정확하게 입력하여 불의의 사고를 예방하여야 할 의무가 있습니다.
  
  회원이 위 책임을 다하지 못하고 타인의 정보 및 존엄성을 훼손할 시에는 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』 등 관련 법률에 의해 처벌받을 수 있습니다.
  
  6. 기타
  
  우도독 내에 링크되어 있는 웹사이트 등 타 서비스들이 개인정보를 수집하는 행위에 대해서는 본 우도독 개인정보처리방침이 적용되지 않음을 알려드립니다.
  
  우도독에 회원가입 시 제출해 주신 개인정보 및 모든 내용은 우도독 관리자 혹은 관리자가 허가한 사람에 한해 관리 및 감독 / 열람 할 수 있습니다.
  
  7. 고지의 의무
  
  현 개인정보처리방침 내용 추가, 삭제 및 수정이 있을 시에는 시행일 최소 7일전부터 본 홈페이지 공지사항에 공지할 것입니다. 다만, 이용자 권리의 중대한 변경이 발생할 때에는 최소 30일 전에 공지하도록 하며 필요 시 이용자의 동의를 다시 받을 수도 있습니다.
  
  공고일자 : 2020. 05. 29.
  
  시행일자 : 2020. 06. 05.`
  }, {
    mainText: '마케팅 동의',
    subText: `마케팅 동의 내용`
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
  const nickNameCheck = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{4,16}$/;
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
      alert('이메일 인증을 먼저 해주세요');
    } else if (!pwCheck.test(password)) {
      alert('비밀번호 오류');
    } else if (!nickNameCheck.test(nickName)) {
      alert('닉네임 오류');
    } else if (!name.length || !name.trim().length) {
      alert('이름 오류');
    } else if (!phoneNumber.length || !phoneNumber.trim().length) {
      alert('휴대폰 번호 오류');
    } else if (!terms) {
      alert('이용 약관 동의하세요');
    } else {
      dispatch((0,_actions_auth__WEBPACK_IMPORTED_MODULE_9__.signup)(email, name, nickName, password, phoneNumber)).then(() => {
        setSignUpSuccess(true);
        alert('회원 가입 성공');
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
      //     alert('회원 가입 성공');
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