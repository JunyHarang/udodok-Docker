(self["webpackChunksleact_js_front"] = self["webpackChunksleact_js_front"] || []).push([["pages_ShareBoard_ShareDetail_index_jsx"],{

/***/ "./components/Modal/ShareDelete/index.jsx":
/*!************************************************!*\
  !*** ./components/Modal/ShareDelete/index.jsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Modal_Check_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Modal/Check/styles */ "./components/Modal/Check/styles.jsx");
/* harmony import */ var _apis_apiController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apis/apiController */ "./apis/apiController.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();





const ShareDelete = props => {
  _s();

  // console.log(props);
  const onClickDelete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    (0,_apis_apiController__WEBPACK_IMPORTED_MODULE_2__.default)({
      url: `/users/sharings?boardId=${props.boardId}&userId=${props.userId}`,
      method: 'delete'
    }).then(res => {
      alert('삭제되었습니다.');
      props.setSuccessDelete(true);
    });
  }, [props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Check_styles__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    checkModal: props.deleteModalOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Check_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {
    checkModal: props.deleteModalOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Check_styles__WEBPACK_IMPORTED_MODULE_1__.ModalWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Check_styles__WEBPACK_IMPORTED_MODULE_1__.MainText, null, "\uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Check_styles__WEBPACK_IMPORTED_MODULE_1__.SubText, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Check_styles__WEBPACK_IMPORTED_MODULE_1__.ModalBtn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Check_styles__WEBPACK_IMPORTED_MODULE_1__.NoBtn, {
    onClick: () => {
      props.setDeleteModalOpen(false);
    }
  }, "\uCDE8\uC18C\uD558\uAE30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_Check_styles__WEBPACK_IMPORTED_MODULE_1__.OKBtn, {
    onClick: onClickDelete
  }, "\uC0AD\uC81C\uD558\uAE30")))));
};

_s(ShareDelete, "dkQxAG/dGcdUM0slMY25A7WOBtg=");

_c = ShareDelete;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareDelete);

var _c;

__webpack_require__.$Refresh$.register(_c, "ShareDelete");

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

/***/ "./components/Modal/ShareEdit/index.jsx":
/*!**********************************************!*\
  !*** ./components/Modal/ShareEdit/index.jsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Modal_ShareEdit_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Modal/ShareEdit/styles */ "./components/Modal/ShareEdit/styles.jsx");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _apis_apiController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apis/apiController */ "./apis/apiController.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();







const ShareEdit = props => {
  _s();

  // console.log(props);
  const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.auth.user);
  const boardId = props.boardId;
  const [title, onChangeTitle, setTitle] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)(props.post.title);
  const [bookTitle, onChangeBookTitle, setBookTitle] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)(props.post.book_title);
  const [content, onChangeContent, setContent] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)(props.post.content);
  const [tag, onChangeTag, setTag] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)(props.post.tag_content);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setTitle(props.post.title);
    setBookTitle(props.post.book_title);
    setContent(props.post.content);
    setTag(props.post.tag_content);
  }, [props]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    let params = {
      book_title: bookTitle,
      content,
      sharing_board_tag: tag,
      title,
      user_id: state.user_id
    };
    (0,_apis_apiController__WEBPACK_IMPORTED_MODULE_4__.default)({
      url: `/users/sharings?id=${boardId}`,
      method: 'patch',
      data: params
    }).then(res => {
      alert('수정되었습니다.');
      props.setSuccessEdit(true);
    });
  }, [boardId, title, bookTitle, content, tag, state, props]);
  const onClickNoBtn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    props.setEditModalOpen(false);
  }, [props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_ShareEdit_styles__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    editModal: props.editModalOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_ShareEdit_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {
    editModal: props.editModalOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_ShareEdit_styles__WEBPACK_IMPORTED_MODULE_1__.ModalForm, {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "\uAE00 \uC81C\uBAA9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_ShareEdit_styles__WEBPACK_IMPORTED_MODULE_1__.Title, {
    id: "title",
    type: "text",
    placeholder: title,
    value: title,
    onChange: onChangeTitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "\uCC45 \uC81C\uBAA9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_ShareEdit_styles__WEBPACK_IMPORTED_MODULE_1__.Title, {
    id: "book_title",
    type: "text",
    placeholder: bookTitle,
    value: bookTitle,
    onChange: onChangeBookTitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "\uB0B4\uC6A9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_ShareEdit_styles__WEBPACK_IMPORTED_MODULE_1__.Content, {
    id: "content",
    type: "text",
    placeholder: content,
    value: content,
    onChange: onChangeContent
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "\uD0DC\uADF8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_ShareEdit_styles__WEBPACK_IMPORTED_MODULE_1__.Tag, {
    id: "tag",
    type: "text",
    placeholder: tag,
    value: tag,
    onChange: onChangeTag
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_ShareEdit_styles__WEBPACK_IMPORTED_MODULE_1__.ModalBtn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_ShareEdit_styles__WEBPACK_IMPORTED_MODULE_1__.OKBtn, {
    type: "submit"
  }, "\uC218\uC815"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_ShareEdit_styles__WEBPACK_IMPORTED_MODULE_1__.NoBtn, {
    onClick: onClickNoBtn
  }, "\uB2EB\uAE30")))));
};

_s(ShareEdit, "t1ofihVUM2ww8kiTE7h8Ke3X/aM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = ShareEdit;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareEdit);

var _c;

__webpack_require__.$Refresh$.register(_c, "ShareEdit");

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

/***/ "./components/Modal/ShareEdit/styles.jsx":
/*!***********************************************!*\
  !*** ./components/Modal/ShareEdit/styles.jsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal),
/* harmony export */   "ModalBtn": () => (/* binding */ ModalBtn),
/* harmony export */   "OKBtn": () => (/* binding */ OKBtn),
/* harmony export */   "NoBtn": () => (/* binding */ NoBtn),
/* harmony export */   "ModalForm": () => (/* binding */ ModalForm),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "Content": () => (/* binding */ Content),
/* harmony export */   "Tag": () => (/* binding */ Tag),
/* harmony export */   "Container": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);


const Modal = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: ${props => props.editModal ? 'block' : 'none'};
  position: fixed;
  /* width: 1920px;
  height: 100%; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.2);
`;
const ModalBtn = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const OKBtn = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.button`
  border-radius: 3px;
  border: none;
  width: 100px;
  height: 39px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 35px;

  background: #900020;
  :hover {
    background-color: rgba(144, 0, 32, 0.8);
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
const ModalForm = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.form`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  height: 100%;

  & h5 {
    font-weight: bold;
  }
`;
const Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.textarea`
  font-size: 15px;
  color: #4e4e4e;
  width: 100%;
  height: 50px;
  border: 1px solid #ced4da;
  resize: none;
  padding: 10px;
  margin-bottom: 10px;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;
const Content = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.textarea`
  padding: 10px;
  font-size: 15px;
  color: #4e4e4e;
  width: 100%;
  height: 350px;
  border: 1px solid #ced4da;
  margin-bottom: 10px;
  resize: none;

  &:focus {
    outline: none;
  }
`;
const Tag = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.textarea`
  padding: 10px;
  font-size: 15px;
  color: #4e4e4e;
  width: 500px;
  height: 50px;
  border: 1px solid #ced4da;
  resize: none;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;
const Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  border: 3px solid #939597;
  width: 800px;
  height: 720px;
  background-color: white;
  display: ${props => props.editModal ? 'block' : 'none'};
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

/***/ "./components/ReplyComment/index.jsx":
/*!*******************************************!*\
  !*** ./components/ReplyComment/index.jsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Reply_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Reply/styles */ "./components/Reply/styles.jsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);




const ReplyComment = props => {
  // console.log(props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Reply_styles__WEBPACK_IMPORTED_MODULE_1__.ReplyContents, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Reply_styles__WEBPACK_IMPORTED_MODULE_1__.ReplyUser, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-user-circle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "nickName"
  }, props.writer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "date"
  }, props.create))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Reply_styles__WEBPACK_IMPORTED_MODULE_1__.ReplyContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, props.comment)));
};

_c = ReplyComment;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReplyComment);

var _c;

__webpack_require__.$Refresh$.register(_c, "ReplyComment");

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

/***/ "./components/ShareBoardReply/index.jsx":
/*!**********************************************!*\
  !*** ./components/ShareBoardReply/index.jsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Reply_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Reply/styles */ "./components/Reply/styles.jsx");
/* harmony import */ var _components_ShareBoardReply_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/ShareBoardReply/styles */ "./components/ShareBoardReply/styles.jsx");
/* harmony import */ var _components_ReplyComment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/ReplyComment */ "./components/ReplyComment/index.jsx");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _apis_apiController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apis/apiController */ "./apis/apiController.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();










const ShareBoardReply = props => {
  _s();

  // const userId = useSelector((state) => state.auth.user.user_id);
  const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.auth);
  let userId = -1;
  const boardId = props.boardId;
  const [replyContent, onChangeReplyContent] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');

  if (state.user !== null) {
    userId = state.user.user_id;
  } // console.log(props, boardId, userId);


  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();

    if (!replyContent.trim().length) {
      alert('댓글을 작성해주세요');
    } else {
      let params = {
        comment: replyContent,
        user_id: userId
      };
      (0,_apis_apiController__WEBPACK_IMPORTED_MODULE_7__.default)({
        url: `/users/sharing-reply?boardId=${boardId}`,
        method: 'post',
        data: params
      }).then(res => {
        window.location.reload();
      });
    }
  }, [replyContent, boardId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Reply_styles__WEBPACK_IMPORTED_MODULE_1__.Containers, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Reply_styles__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      fontSize: '1.2rem'
    }
  }, "\uC804\uCCB4 \uB313\uAE00 ", props.replyCnt)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Reply_styles__WEBPACK_IMPORTED_MODULE_1__.ReplyDiv, null, props.reply && props.reply.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ReplyComment__WEBPACK_IMPORTED_MODULE_3__.default, {
    comment: item.comment,
    create: item.created_at,
    replyId: item.reply_id,
    writer: item.writer_info.nick_name,
    profileUrl: item.writer_info.profile_url
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      fontSize: '1.2rem'
    }
  }, "\uB313\uAE00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareBoardReply_styles__WEBPACK_IMPORTED_MODULE_2__.ReplyWriteForm, {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    id: "text",
    type: "text",
    value: replyContent,
    onChange: onChangeReplyContent
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit"
  }, "\uB4F1\uB85D")))));
};

_s(ShareBoardReply, "no+5yLZOP4euwCQoBblIansRmxA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector, _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = ShareBoardReply;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareBoardReply);

var _c;

__webpack_require__.$Refresh$.register(_c, "ShareBoardReply");

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

/***/ "./components/ShareBoardReply/styles.jsx":
/*!***********************************************!*\
  !*** ./components/ShareBoardReply/styles.jsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplyWriteForm": () => (/* binding */ ReplyWriteForm)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);


const ReplyWriteForm = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.form`
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
  & div {
  }
  & textarea {
    padding: 10px;
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
    font-size: 16px;
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

/***/ "./components/ShareDetailContent/index.jsx":
/*!*************************************************!*\
  !*** ./components/ShareDetailContent/index.jsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_ShareDetailContent_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/ShareDetailContent/styles */ "./components/ShareDetailContent/styles.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();






const ShareDetailContent = props => {
  _s();

  const {
    boardId
  } = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useParams)();
  const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.auth);
  let userId = -1;

  if (state.user !== null) {
    userId = state.user.user_id;
  } // console.log(props);


  const onClickEditBtn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    props.setEditModalOpen(true);
  }, []);
  const onClickDeleteBtn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    props.setDeleteModalOpen(true);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareDetailContent_styles__WEBPACK_IMPORTED_MODULE_1__.Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareDetailContent_styles__WEBPACK_IMPORTED_MODULE_1__.ContentLeft, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareDetailContent_styles__WEBPACK_IMPORTED_MODULE_1__.ContentImg, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "/images/placeholder.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "title"
  }, props.bookTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareDetailContent_styles__WEBPACK_IMPORTED_MODULE_1__.ContentRight, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareDetailContent_styles__WEBPACK_IMPORTED_MODULE_1__.ContentTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "title"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "date"
  }, props.create)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareDetailContent_styles__WEBPACK_IMPORTED_MODULE_1__.ContentText, null, props.content, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "tag"
  }, props.tag ? props.tag : null)), props.writerId === userId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareDetailContent_styles__WEBPACK_IMPORTED_MODULE_1__.ContentEdit, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "edit",
    onClick: onClickEditBtn
  }, "\uC218\uC815\uD558\uAE30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "delete",
    onClick: onClickDeleteBtn
  }, "\uC0AD\uC81C\uD558\uAE30")))));
};

_s(ShareDetailContent, "K70PGChVEkNAcVakWNvtA8ZK3q0=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_3__.useParams, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];
});

_c = ShareDetailContent;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.withRouter)(ShareDetailContent));

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ShareDetailContent");
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

/***/ "./components/ShareDetailContent/styles.jsx":
/*!**************************************************!*\
  !*** ./components/ShareDetailContent/styles.jsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content": () => (/* binding */ Content),
/* harmony export */   "ContentLeft": () => (/* binding */ ContentLeft),
/* harmony export */   "ContentRight": () => (/* binding */ ContentRight),
/* harmony export */   "ContentImg": () => (/* binding */ ContentImg),
/* harmony export */   "ContentTitle": () => (/* binding */ ContentTitle),
/* harmony export */   "ContentText": () => (/* binding */ ContentText),
/* harmony export */   "ContentShare": () => (/* binding */ ContentShare),
/* harmony export */   "ContentEdit": () => (/* binding */ ContentEdit)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);


const Content = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  padding-bottom: 25px;
  height: auto;
`;
const ContentLeft = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  & div {
    text-align: right;
  }

  & div.title {
    font-weight: bold;
    font-size: 17px;
  }

  & div.author {
    color: #4e4e4e;
  }
`;
const ContentRight = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  margin-left: 100px;
  width: 100%;
  text-align: right;
`;
const ContentImg = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  margin-bottom: 15px;
`;
const ContentTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  padding-bottom: 13px;
  border-bottom: 1px solid grey;

  & div.title {
    font-weight: bold;
    font-size: 19px;
    padding-bottom: 10px;
  }

  & div.date {
    color: #4e4e4e;
  }
`;
const ContentText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  margin-top: 35px;
  font-size: 17px;
  line-height: 27px;

  & div {
    color: #0f4c81;
    padding-top: 30px;
  }
`;
const ContentShare = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div``;
const ContentEdit = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: space-between;

  & div i {
    font-size: 25px;
    cursor: pointer;
  }

  & button {
    margin-left: 15px;
    width: 119px;
    height: 42px;
    border-radius: 3px;
    border: 0px;
    color: white;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  & button.edit {
    background: #939597;
    :hover {
      background-color: rgba(147, 149, 151, 0.8);
    }
  }

  & button.delete {
    background: #900020;
    :hover {
      background-color: rgba(144, 0, 32, 0.8);
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

/***/ "./pages/ShareBoard/ShareDetail/index.jsx":
/*!************************************************!*\
  !*** ./pages/ShareBoard/ShareDetail/index.jsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _layouts_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layouts/Header */ "./layouts/Header/index.jsx");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layouts/Footer */ "./layouts/Footer/index.jsx");
/* harmony import */ var _pages_ShareBoard_ShareDetail_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/ShareBoard/ShareDetail/styles */ "./pages/ShareBoard/ShareDetail/styles.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_ShareDetailContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/ShareDetailContent */ "./components/ShareDetailContent/index.jsx");
/* harmony import */ var _components_ShareBoardReply__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/ShareBoardReply */ "./components/ShareBoardReply/index.jsx");
/* harmony import */ var _components_Modal_ShareEdit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Modal/ShareEdit */ "./components/Modal/ShareEdit/index.jsx");
/* harmony import */ var _components_Modal_ShareDelete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Modal/ShareDelete */ "./components/Modal/ShareDelete/index.jsx");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _apis_apiController__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apis/apiController */ "./apis/apiController.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();














const ShareDetail = props => {
  _s();

  const {
    boardId
  } = (0,react_router__WEBPACK_IMPORTED_MODULE_11__.useParams)();
  const [post, onChangePost, setPost] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_9__.default)([]);
  const [reply, setReply] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [writerId, setWriterId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [writerNickName, setWriterNickName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [editModalOpen, setEditModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [deleteModalOpen, setDeleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [successEdit, setSuccessEdit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [successDelete, setSuccessDelete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_apis_apiController__WEBPACK_IMPORTED_MODULE_10__.default)({
      url: `/bkusers/sharings?id=${boardId}`,
      method: 'get'
    }).then(res => {
      setPost(res.data.data);
      setWriterId(res.data.data.writer_info.writer_id);
      setWriterNickName(res.data.data.writer_info.nick_name);
    }); // axios
    //   .get(`/api/bkuser/sharings?id=${boardId}`)
    //   .then((res) => {
    //     // console.log(res.data.data);
    //     setPost(res.data.data);
    //     setWriterId(res.data.data.writer_info.writer_id);
    //     setWriterNickName(res.data.data.writer_info.nick_name);
    //     // console.log('상세게시판 api', res.data.data);
    //   })
    //   .catch((err) => {
    //     console.dir(err);
    //   });

    (0,_apis_apiController__WEBPACK_IMPORTED_MODULE_10__.default)({
      url: `/users/sharing-reply?boardId=${boardId}`,
      method: 'get'
    }).then(res => {
      setReply(res.data.data);
    }); // axios
    //   .get(`/api/users/sharing-reply?boardId=${boardId}`)
    //   .then((res) => {
    //     setReply(res.data.data);
    //     // console.log('상세게시판 댓글 api', res.data.data);
    //   })
    //   .catch((err) => {
    //     console.dir(err);
    //   });
  }, []);

  if (!post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Loading...");
  }

  if (successEdit) {
    setEditModalOpen(false);
    props.history.push(`/shareboard/detail/${boardId}`);
    window.location.reload();
    setSuccessEdit(false);
  }

  if (successDelete) {
    setDeleteModalOpen(false);
    props.history.push('/shareboard');
    window.location.reload();
    setSuccessDelete(false);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_ShareEdit__WEBPACK_IMPORTED_MODULE_7__.default, {
    boardId: boardId,
    post: post,
    editModalOpen: editModalOpen,
    setEditModalOpen: setEditModalOpen,
    setSuccessEdit: setSuccessEdit
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_ShareDelete__WEBPACK_IMPORTED_MODULE_8__.default, {
    deleteModalOpen: deleteModalOpen,
    setDeleteModalOpen: setDeleteModalOpen,
    boardId: boardId,
    setSuccessDelete: setSuccessDelete,
    userId: writerId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_ShareBoard_ShareDetail_styles__WEBPACK_IMPORTED_MODULE_3__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Header__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_ShareBoard_ShareDetail_styles__WEBPACK_IMPORTED_MODULE_3__.Title, null, writerNickName, "\uB2D8\uC758 \uAC8C\uC2DC\uBB3C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_ShareBoard_ShareDetail_styles__WEBPACK_IMPORTED_MODULE_3__.Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareDetailContent__WEBPACK_IMPORTED_MODULE_5__.default, {
    title: post.title,
    bookTitle: post.book_title,
    content: post.content,
    create: post.created_at,
    like: post.like_cnt,
    writerId: writerId,
    tag: post.tag_content,
    setEditModalOpen: setEditModalOpen,
    setDeleteModalOpen: setDeleteModalOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareBoardReply__WEBPACK_IMPORTED_MODULE_6__.default, {
    boardId: boardId,
    userId: post.id,
    replyCnt: post.reply_cnt,
    reply: reply,
    setReply: setReply
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Footer__WEBPACK_IMPORTED_MODULE_2__.default, null));
};

_s(ShareDetail, "Axg7SNi3YJ+tpVqebhbdzUBjpBU=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_11__.useParams, _hooks_useInput__WEBPACK_IMPORTED_MODULE_9__.default];
});

_c = ShareDetail;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = (0,react_router__WEBPACK_IMPORTED_MODULE_11__.withRouter)(ShareDetail));

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ShareDetail");
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

/***/ "./pages/ShareBoard/ShareDetail/styles.jsx":
/*!*************************************************!*\
  !*** ./pages/ShareBoard/ShareDetail/styles.jsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "Content": () => (/* binding */ Content)
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
  transform: translate(-50%);
  margin-bottom: 100px;
  padding-bottom: 300px;
`;
const Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.h4`
  padding: 50px 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(147, 149, 151, 0.8);
  margin-bottom: 30px;
  font-weight: bold;
`;
const Content = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  padding: 0px 30px;
  min-height: 100%;

  & h4 {
    font-weight: bold;
    margin-bottom: 30px;
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