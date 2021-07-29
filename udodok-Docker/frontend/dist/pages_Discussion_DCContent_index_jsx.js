(self["webpackChunksleact_js_front"] = self["webpackChunksleact_js_front"] || []).push([["pages_Discussion_DCContent_index_jsx"],{

/***/ "./components/Modal/Check/index.jsx":
/*!******************************************!*\
  !*** ./components/Modal/Check/index.jsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Modal_Check_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Modal/Check/styles */ "./components/Modal/Check/styles.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _apis_apiController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apis/apiController */ "./apis/apiController.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();






const Check = ({
  checkModalOpen,
  setCheckModalOpen,
  Id,
  userId
}) => {
  _s();

  // console.log({ checkModalOpen });
  // console.log(Id);
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();
  const Delete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    (0,_apis_apiController__WEBPACK_IMPORTED_MODULE_2__.default)({
      url: `/users/discussions/del/${Id}?userId=${userId}`,
      method: 'delete'
    }).then(res => {
      history.push('/discussion');
    });
  }, [Id, userId] // 넣어줘야함
  );
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Check_styles__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    checkModal: checkModalOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Check_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {
    checkModal: checkModalOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Check_styles__WEBPACK_IMPORTED_MODULE_1__.ModalWrapper, {
    onClick: () => {
      setCheckModalOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Check_styles__WEBPACK_IMPORTED_MODULE_1__.MainText, null, "\uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Check_styles__WEBPACK_IMPORTED_MODULE_1__.SubText, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Check_styles__WEBPACK_IMPORTED_MODULE_1__.ModalBtn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Check_styles__WEBPACK_IMPORTED_MODULE_1__.NoBtn, {
    onClick: () => {
      setCheckModalOpen(false);
    }
  }, "\uCDE8\uC18C\uD558\uAE30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Check_styles__WEBPACK_IMPORTED_MODULE_1__.OKBtn, {
    onClick: Delete
  }, "\uC0AD\uC81C\uD558\uAE30")))));
};

_s(Check, "emjIZinjpX9mjWyjmxY+MQ5tL0Q=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory];
});

_c = Check;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Check);

var _c;

__webpack_require__.$Refresh$.register(_c, "Check");

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

/***/ "./components/Reply/index.jsx":
/*!************************************!*\
  !*** ./components/Reply/index.jsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Reply_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Reply/styles */ "./components/Reply/styles.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _apis_apiController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apis/apiController */ "./apis/apiController.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature(),
    _s2 = __webpack_require__.$Refresh$.signature();








const Reply = ({
  discussionId
}) => {
  _s();

  const users = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.auth.user);
  const currentId = users.user_id;
  const [reply, setReply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [content, setContent] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_apis_apiController__WEBPACK_IMPORTED_MODULE_5__.default)({
      url: `/bkusers/discussionreplies/${discussionId}`,
      method: 'get'
    }).then(res => {
      if (res.data.data) {
        const data = res.data.data.content;
        const page = res.data.pagination.total_elements;
        setCount(page);
        setReply(data);
      }
    });
  }, []);

  const onSubmit = e => {
    let params = {
      content
    };
    (0,_apis_apiController__WEBPACK_IMPORTED_MODULE_5__.default)({
      url: `/users/discussionreplies/${discussionId}?userId=${currentId}`,
      method: 'post',
      data: params
    }).then(res => {
      window.location.reload();
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Reply_styles__WEBPACK_IMPORTED_MODULE_2__.Containers, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Reply_styles__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, "\uC804\uCCB4 \uB313\uAE00 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, count)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Reply_styles__WEBPACK_IMPORTED_MODULE_2__.ReplyDiv, null, reply === null || reply === void 0 ? void 0 : reply.map((item, idx) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ReplyItem, {
      key: idx,
      item: item,
      discussionId: discussionId,
      currentId: currentId
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "\uB2F5\uAE00 \uC4F0\uAE30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Reply_styles__WEBPACK_IMPORTED_MODULE_2__.ReplyWrite, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("textarea", {
    value: content,
    onChange: setContent
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    onClick: onSubmit
  }, "\uB4F1\uB85D")))));
};

_s(Reply, "zZFkEiyPMJxA9HSwwvt+fZOyuVQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = Reply;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reply);

const ReplyItem = ({
  item,
  discussionId,
  currentId
}) => {
  _s2();

  const {
    id,
    user_id,
    user_nick_name,
    content,
    create_at
  } = item;
  const onDelete = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete(`/api/users/discussionreplies/${discussionId}?replyId=${id}&userId=${currentId}`, {
      withCredentials: true
    }).then(() => {
      window.location.reload();
    }).catch(err => {
      console.dir(err);
    });
  }, [discussionId, id, currentId] // 넣어줘야함
  );
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Reply_styles__WEBPACK_IMPORTED_MODULE_2__.ReplyContents, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Reply_styles__WEBPACK_IMPORTED_MODULE_2__.ReplyUser, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", {
    className: "fas fa-user-circle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "nickName"
  }, user_nick_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "date"
  }, create_at))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Reply_styles__WEBPACK_IMPORTED_MODULE_2__.ReplyContent, null, user_id === currentId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    className: "delete",
    onClick: onDelete
  }, "\xD7") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, content)));
};

_s2(ReplyItem, "ZJHrpGHl88THpiaB8COtpGTdLSc=");

_c2 = ReplyItem;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "Reply");
__webpack_require__.$Refresh$.register(_c2, "ReplyItem");

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

/***/ "./components/Reply/styles.jsx":
/*!*************************************!*\
  !*** ./components/Reply/styles.jsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Containers": () => (/* binding */ Containers),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "ReplyDiv": () => (/* binding */ ReplyDiv),
/* harmony export */   "ReplyContents": () => (/* binding */ ReplyContents),
/* harmony export */   "ReplyUser": () => (/* binding */ ReplyUser),
/* harmony export */   "ReplyContent": () => (/* binding */ ReplyContent),
/* harmony export */   "ReplyWrite": () => (/* binding */ ReplyWrite)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);


const Containers = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  margin-top: 100px;
  & span {
    font-weight: bold;
    color: #0f4c81;
  }
`;
const Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div``;
const ReplyDiv = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  margin-bottom: 50px;
`;
const ReplyContents = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: flex;
  align-items: center;
  height: 110px;
  :not(:last-of-type) {
    border-bottom: 1px solid #f7f7f5;
  }
`;
const ReplyUser = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: flex;
  align-items: center;
  width: 270px;

  & i {
    font-size: 40px;
    margin-right: 10px;
  }
  & div.nickName {
    font-weight: bold;
    font-size: 18px;
  }
  & div.date {
    font-size: 13px;
    color: grey;
  }
`;
const ReplyContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  width: 100%;
  align-self: center;
  font-size: 16px;
  & button {
    float: right;
    color: red;
    font-size: 20px;
    border: 0px;
    background-color: white;
    :hover {
      cursor: pointer;
    }
  }
`;
const ReplyWrite = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.form`
  display: flex;
  align-items: flex-end;
  & div {
  }
  & textarea {
    resize: none;
    border-radius: 3px;
    border: 1px solid #ced4da;
    transition: border 80ms ease-out, box-shadow 80ms ease-out;
    box-sizing: border-box;
    width: 100%;
    color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
    background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
    height: 74px;
    line-height: 1.33333333;
    font-size: 14px;
    margin-right: 15px;

    &:focus {
      --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
      box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
    }
  }
  & button {
    border: 0px;
    border-radius: 5px;
    background-color: #0f4c81;
    color: white;
    width: 97px;
    height: 42px;
    font-weight: bold;
    margin-top: 15px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    &:hover {
      background-color: rgba(15, 76, 129, 0.8);
      border: none;
      cursor: pointer;
    }
    &:focus {
      --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
      box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
    }

    & > a {
      text-decoration: none;
      color: white;
    }
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

/***/ "./pages/Discussion/DCContent/index.jsx":
/*!**********************************************!*\
  !*** ./pages/Discussion/DCContent/index.jsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _layouts_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layouts/Header */ "./layouts/Header/index.jsx");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layouts/Footer */ "./layouts/Footer/index.jsx");
/* harmony import */ var _pages_Discussion_DCContent_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/Discussion/DCContent/styles */ "./pages/Discussion/DCContent/styles.jsx");
/* harmony import */ var _components_Reply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Reply */ "./components/Reply/index.jsx");
/* harmony import */ var _apis_apiController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apis/apiController */ "./apis/apiController.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Modal_Check__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Modal/Check */ "./components/Modal/Check/index.jsx");
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @utils/formatDate */ "./utils/formatDate.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();












const DCContent = props => {
  _s();

  const users = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.auth.user);
  const currentId = users.user_id;
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory)();
  const {
    id
  } = props.match.params;
  const [Id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [nickName, setNickName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [checkModalOpen, setCheckModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [readHit, setReadHit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  const onClickCheckBtn = e => {
    setCheckModalOpen(true);
  }; // const onClickEditBtn = (e) => {
  //   history.push(`/discussion/edit/${id}`);
  // };


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_apis_apiController__WEBPACK_IMPORTED_MODULE_5__.default)({
      url: `/bkusers/discussions/${id}?userId=${currentId}`,
      method: 'get'
    }).then(res => {
      const data = res.data.data;
      setTitle(data.title);
      setContent(data.content);
      setNickName(data.user_nick_name);
      setDate(data.create_at);
      setId(data.id);
      setUserId(data.user_id);
      setReadHit(data.readhit);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Check__WEBPACK_IMPORTED_MODULE_7__.default, {
    checkModalOpen: checkModalOpen,
    setCheckModalOpen: setCheckModalOpen,
    Id: Id,
    userId: currentId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Discussion_DCContent_styles__WEBPACK_IMPORTED_MODULE_3__.DCContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Header__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Discussion_DCContent_styles__WEBPACK_IMPORTED_MODULE_3__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Discussion_DCContent_styles__WEBPACK_IMPORTED_MODULE_3__.SubHeader, null, "\uD1A0\uB860 \uAC8C\uC2DC\uD310"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Discussion_DCContent_styles__WEBPACK_IMPORTED_MODULE_3__.MainContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Discussion_DCContent_styles__WEBPACK_IMPORTED_MODULE_3__.SubTitle, null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Discussion_DCContent_styles__WEBPACK_IMPORTED_MODULE_3__.SubMeta, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Discussion_DCContent_styles__WEBPACK_IMPORTED_MODULE_3__.SubMetaLeft, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "date"
  }, (0,_utils_formatDate__WEBPACK_IMPORTED_MODULE_8__.default)(date)), "|", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "count"
  }, "\uC870\uD68C\uC218 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "countNo"
  }, readHit))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Discussion_DCContent_styles__WEBPACK_IMPORTED_MODULE_3__.SubMetaRight, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, nickName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-user-circle"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Discussion_DCContent_styles__WEBPACK_IMPORTED_MODULE_3__.SubArticle, null, content)), userId === currentId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Discussion_DCContent_styles__WEBPACK_IMPORTED_MODULE_3__.DCEdit, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
    to: {
      pathname: `/discussion/edit/${id}`,
      state: {
        title,
        content
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "edit"
  }, "\uC218\uC815\uD558\uAE30")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "delete",
    onClick: onClickCheckBtn
  }, "\uC0AD\uC81C\uD558\uAE30")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Reply__WEBPACK_IMPORTED_MODULE_4__.default, {
    discussionId: id
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Footer__WEBPACK_IMPORTED_MODULE_2__.default, null));
};

_s(DCContent, "Pf/oS5rE1AOby6+TITffEYzYjEg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector, react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory];
});

_c = DCContent;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DCContent);

var _c;

__webpack_require__.$Refresh$.register(_c, "DCContent");

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

/***/ "./pages/Discussion/DCContent/styles.jsx":
/*!***********************************************!*\
  !*** ./pages/Discussion/DCContent/styles.jsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "DCContainer": () => (/* binding */ DCContainer),
/* harmony export */   "SubHeader": () => (/* binding */ SubHeader),
/* harmony export */   "MainContainer": () => (/* binding */ MainContainer),
/* harmony export */   "SubTitle": () => (/* binding */ SubTitle),
/* harmony export */   "SubMeta": () => (/* binding */ SubMeta),
/* harmony export */   "SubMetaLeft": () => (/* binding */ SubMetaLeft),
/* harmony export */   "SubMetaRight": () => (/* binding */ SubMetaRight),
/* harmony export */   "SubArticle": () => (/* binding */ SubArticle),
/* harmony export */   "DCEdit": () => (/* binding */ DCEdit)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);


const Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  width: 1200px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
`;
const DCContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`;
const SubHeader = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.h2`
  padding: 50px 30px;
`;
const MainContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  height: 400px;
`;
const SubTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  font-size: 24px;
  padding: 20px 20px;
  font-weight: bold;
`;
const SubMeta = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #939597;
`;
const SubMetaLeft = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  font-size: 15px;
  padding: 10px;
  color: #939597;
  & .date {
    margin-right: 10px;
  }
  & .count {
    margin-left: 10px;
  }
  & .countNo {
    color: #0f4c81;
    font-weight: bold;
  }
`;
const SubMetaRight = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  font-size: 18px;
  margin-bottom: 20px;

  & i {
    font-size: 35px;
    padding: 0px 30px 0 10px;
  }
`;
const SubArticle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.article`
  padding: 30px;
  font-size: 18px;
  line-height: 30px;
`;
const DCEdit = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: flex;
  justify-content: center;

  & button {
    margin-left: 15px;
    width: 119px;
    height: 42px;
    border-radius: 3px;
    border: 0px;
    background-color: white;
    color: #900020;
    cursor: pointer;
    border: 1px solid #900020;
  }

  & button.delete {
    border: 1px solid #900020;
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

/***/ "./utils/formatDate.js":
/*!*****************************!*\
  !*** ./utils/formatDate.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

function formatDate(date) {
  return date.replace('T', ' ');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDate);

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