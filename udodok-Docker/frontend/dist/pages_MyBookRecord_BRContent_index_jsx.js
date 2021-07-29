(self["webpackChunksleact_js_front"] = self["webpackChunksleact_js_front"] || []).push([["pages_MyBookRecord_BRContent_index_jsx"],{

/***/ "./components/Modal/RecordDelete/index.jsx":
/*!*************************************************!*\
  !*** ./components/Modal/RecordDelete/index.jsx ***!
  \*************************************************/
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





const RecordDelete = props => {
  _s();

  // console.log(props);
  const onClickDelete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    (0,_apis_apiController__WEBPACK_IMPORTED_MODULE_2__.default)({
      url: `/bkusers/book-reports/${props.boardId}?userId=${props.userId}`,
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

_s(RecordDelete, "dkQxAG/dGcdUM0slMY25A7WOBtg=");

_c = RecordDelete;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecordDelete);

var _c;

__webpack_require__.$Refresh$.register(_c, "RecordDelete");

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

/***/ "./components/Modal/RecordEdit/index.jsx":
/*!***********************************************!*\
  !*** ./components/Modal/RecordEdit/index.jsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Modal_RecordEdit_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Modal/RecordEdit/styles */ "./components/Modal/RecordEdit/styles.jsx");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _apis_apiController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apis/apiController */ "./apis/apiController.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();







const RecordEdit = props => {
  _s();

  // console.log(props);
  const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.auth.user);
  const boardId = props.boardId;
  const [title, onChangeTitle, setTitle] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)(props.post.title);
  const [bookTitle, onChangeBookTitle, setBookTitle] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)(props.post.book_name);
  const [content, onChangeContent, setContent] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)(props.post.content);
  const [tag, onChangeTag, setTag] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)(props.post.book_report_tag);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setTitle(props.post.title);
    setBookTitle(props.post.book_name);
    setContent(props.post.content);
    setTag(props.post.book_report_tag);
  }, [props]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    let params = {
      book_name: bookTitle,
      content,
      tag_name: tag
    };
    (0,_apis_apiController__WEBPACK_IMPORTED_MODULE_4__.default)({
      url: `/bkusers/book-reports/${boardId}?userId=${state.user_id}`,
      method: 'patch',
      data: params
    }).then(res => {
      props.setSuccessEdit(true);
      alert('수정되었습니다.');
    });
  }, [boardId, title, bookTitle, content, tag, state, props]);
  const onClickNoBtn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    props.setEditModalOpen(false);
  }, [props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_RecordEdit_styles__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    editModal: props.editModalOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_RecordEdit_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {
    editModal: props.editModalOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_RecordEdit_styles__WEBPACK_IMPORTED_MODULE_1__.ModalForm, {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "\uAE00 \uC81C\uBAA9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_RecordEdit_styles__WEBPACK_IMPORTED_MODULE_1__.Title, {
    id: "title",
    type: "text",
    placeholder: title,
    value: title,
    onChange: onChangeTitle,
    disabled: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "\uCC45 \uC81C\uBAA9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_RecordEdit_styles__WEBPACK_IMPORTED_MODULE_1__.Title, {
    id: "book_title",
    type: "text",
    placeholder: bookTitle,
    value: bookTitle,
    onChange: onChangeBookTitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "\uB0B4\uC6A9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_RecordEdit_styles__WEBPACK_IMPORTED_MODULE_1__.Content, {
    id: "content",
    type: "text",
    placeholder: content,
    value: content,
    onChange: onChangeContent
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "\uD0DC\uADF8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_RecordEdit_styles__WEBPACK_IMPORTED_MODULE_1__.Tag, {
    id: "tag",
    type: "text",
    placeholder: tag,
    value: tag,
    onChange: onChangeTag
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_RecordEdit_styles__WEBPACK_IMPORTED_MODULE_1__.ModalBtn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_RecordEdit_styles__WEBPACK_IMPORTED_MODULE_1__.OKBtn, {
    type: "submit"
  }, "\uC218\uC815"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_RecordEdit_styles__WEBPACK_IMPORTED_MODULE_1__.NoBtn, {
    onClick: onClickNoBtn
  }, "\uB2EB\uAE30")))));
};

_s(RecordEdit, "t1ofihVUM2ww8kiTE7h8Ke3X/aM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = RecordEdit;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecordEdit);

var _c;

__webpack_require__.$Refresh$.register(_c, "RecordEdit");

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

/***/ "./components/Modal/RecordEdit/styles.jsx":
/*!************************************************!*\
  !*** ./components/Modal/RecordEdit/styles.jsx ***!
  \************************************************/
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

/***/ "./components/RecordDetailContent/index.jsx":
/*!**************************************************!*\
  !*** ./components/RecordDetailContent/index.jsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_RecordDetailContent_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/RecordDetailContent/styles */ "./components/RecordDetailContent/styles.jsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();




const DetailContent = props => {
  _s();

  const bookContent = props.recordDetailData;
  const onClickEditBtn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    props.setEditModalOpen(true);
  }, []);
  const onClickDeleteBtn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    props.setDeleteModalOpen(true);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_RecordDetailContent_styles__WEBPACK_IMPORTED_MODULE_1__.Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_RecordDetailContent_styles__WEBPACK_IMPORTED_MODULE_1__.ContentLeft, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_RecordDetailContent_styles__WEBPACK_IMPORTED_MODULE_1__.ContentImg, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "/images/placeholder.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "title"
  }, bookContent.book_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_RecordDetailContent_styles__WEBPACK_IMPORTED_MODULE_1__.ContentRight, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_RecordDetailContent_styles__WEBPACK_IMPORTED_MODULE_1__.ContentTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "title"
  }, bookContent.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "time"
  }, bookContent.create_at)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_RecordDetailContent_styles__WEBPACK_IMPORTED_MODULE_1__.ContentText, null, bookContent.content, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "tag"
  }, bookContent.book_report_tag)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_RecordDetailContent_styles__WEBPACK_IMPORTED_MODULE_1__.ContentEdit, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "edit",
    onClick: onClickEditBtn
  }, "\uC218\uC815\uD558\uAE30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "delete",
    onClick: onClickDeleteBtn
  }, "\uC0AD\uC81C\uD558\uAE30")))));
};

_s(DetailContent, "cKxpJOa8bj4/d3UqK/wMXrW4OyU=");

_c = DetailContent;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailContent);

var _c;

__webpack_require__.$Refresh$.register(_c, "DetailContent");

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

/***/ "./components/RecordDetailContent/styles.jsx":
/*!***************************************************!*\
  !*** ./components/RecordDetailContent/styles.jsx ***!
  \***************************************************/
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
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
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

/***/ "./pages/MyBookRecord/BRContent/index.jsx":
/*!************************************************!*\
  !*** ./pages/MyBookRecord/BRContent/index.jsx ***!
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
/* harmony import */ var _pages_MyBookRecord_BRContent_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/MyBookRecord/BRContent/styles */ "./pages/MyBookRecord/BRContent/styles.jsx");
/* harmony import */ var _components_RecordDetailContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/RecordDetailContent */ "./components/RecordDetailContent/index.jsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_Modal_RecordEdit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Modal/RecordEdit */ "./components/Modal/RecordEdit/index.jsx");
/* harmony import */ var _components_Modal_RecordDelete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Modal/RecordDelete */ "./components/Modal/RecordDelete/index.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _apis_apiController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apis/apiController */ "./apis/apiController.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();












const BRContent = props => {
  _s();

  const {
    boardId
  } = (0,react_router__WEBPACK_IMPORTED_MODULE_9__.useParams)();
  const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.auth.user);
  const [recordDetailData, setRecordDetailData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [editModalOpen, setEditModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [deleteModalOpen, setDeleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [successEdit, setSuccessEdit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [successDelete, setSuccessDelete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    bookReportDetail();
  }, []);

  const bookReportDetail = async () => {
    const res = await (0,_apis_apiController__WEBPACK_IMPORTED_MODULE_8__.default)({
      url: `/bkusers/book-reports/detail/${boardId}`,
      method: 'get'
    });
    setRecordDetailData(res.data.data);
  };

  if (successEdit) {
    setEditModalOpen(false);
    props.history.push(`/mybookrecord/detail/${boardId}`);
    window.location.reload();
    setSuccessEdit(false);
  }

  if (successDelete) {
    setDeleteModalOpen(false);
    props.history.push('/mybookrecord');
    window.location.reload();
    setSuccessDelete(false);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_RecordEdit__WEBPACK_IMPORTED_MODULE_5__.default, {
    boardId: boardId,
    post: recordDetailData,
    editModalOpen: editModalOpen,
    setEditModalOpen: setEditModalOpen,
    setSuccessEdit: setSuccessEdit
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal_RecordDelete__WEBPACK_IMPORTED_MODULE_6__.default, {
    deleteModalOpen: deleteModalOpen,
    setDeleteModalOpen: setDeleteModalOpen,
    boardId: boardId,
    setSuccessDelete: setSuccessDelete,
    userId: state.user_id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_MyBookRecord_BRContent_styles__WEBPACK_IMPORTED_MODULE_3__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Header__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_MyBookRecord_BRContent_styles__WEBPACK_IMPORTED_MODULE_3__.Title, null, "\uB098\uC758 \uAC8C\uC2DC\uBB3C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_MyBookRecord_BRContent_styles__WEBPACK_IMPORTED_MODULE_3__.Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_RecordDetailContent__WEBPACK_IMPORTED_MODULE_4__.default, {
    recordDetailData: recordDetailData,
    setEditModalOpen: setEditModalOpen,
    setDeleteModalOpen: setDeleteModalOpen
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Footer__WEBPACK_IMPORTED_MODULE_2__.default, null));
};

_s(BRContent, "JCkkBSa3Cg7bv4IQbFw1OVTGALo=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_9__.useParams, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector];
});

_c = BRContent;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BRContent);

var _c;

__webpack_require__.$Refresh$.register(_c, "BRContent");

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

/***/ "./pages/MyBookRecord/BRContent/styles.jsx":
/*!*************************************************!*\
  !*** ./pages/MyBookRecord/BRContent/styles.jsx ***!
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