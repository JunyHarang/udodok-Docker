(self["webpackChunksleact_js_front"] = self["webpackChunksleact_js_front"] || []).push([["pages_ShareBoard_Write_index_jsx"],{

/***/ "./components/ShareBoardWriteForm/index.jsx":
/*!**************************************************!*\
  !*** ./components/ShareBoardWriteForm/index.jsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_ShareBoardWriteForm_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/ShareBoardWriteForm/styles */ "./components/ShareBoardWriteForm/styles.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _apis_apiController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apis/apiController */ "./apis/apiController.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();








const ShareBoardWriteForm = props => {
  _s();

  const [title, onChangeTitle] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default)('');
  const [bookTitle, onChangeBookTitle] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default)('');
  const [content, onChangeContent] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default)('');
  const [tag, onChangeTag] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default)('');
  const [createSuccess, setCreateSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const userData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.auth.user);
  const userId = userData.user_id;
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault(); // console.log(title, bookTitle, content, tag, userId);

    if (!title.length || !title.trim().length) {
      alert('글 제목을 작성해주세요.');
    } else if (!bookTitle.length || !bookTitle.trim().length) {
      alert('책 제목을 작성해주세요.');
    } else if (!content.length || !content.trim().length) {
      alert('내용을 작성해주세요.');
    } else {
      let params = {
        book_title: bookTitle,
        content,
        sharing_board_tag: tag,
        title,
        user_id: userId
      };
      (0,_apis_apiController__WEBPACK_IMPORTED_MODULE_4__.default)({
        url: '/users/sharings',
        method: 'post',
        data: params
      }).then(res => {
        alert('성공적으로 작성되었습니다.');
        setCreateSuccess(true);
      });
    }
  }, [title, bookTitle, content, tag, userId]);

  if (createSuccess) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__.Redirect, {
      to: "/shareboard"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareBoardWriteForm_styles__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareBoardWriteForm_styles__WEBPACK_IMPORTED_MODULE_1__.WriteHeader, null, "\uAC8C\uC2DC\uAE00 \uC791\uC131"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareBoardWriteForm_styles__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareBoardWriteForm_styles__WEBPACK_IMPORTED_MODULE_1__.FormDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "title"
  }, "\uAE00 \uC81C\uBAA9", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareBoardWriteForm_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
    id: "title",
    name: "title",
    placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    value: title,
    onChange: onChangeTitle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "book_title"
  }, "\uCC45 \uC81C\uBAA9", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareBoardWriteForm_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
    id: "book_title",
    name: "book_title",
    placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    value: bookTitle,
    onChange: onChangeBookTitle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "content"
  }, "\uBCF8\uBB38", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareBoardWriteForm_styles__WEBPACK_IMPORTED_MODULE_1__.TextArea, {
    id: "content",
    name: "content",
    placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    value: content,
    onChange: onChangeContent
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "tag"
  }, "\uD0DC\uADF8", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareBoardWriteForm_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {
    id: "tag",
    name: "tag",
    placeholder: "#\uD0DC\uADF8",
    value: tag,
    onChange: onChangeTag
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareBoardWriteForm_styles__WEBPACK_IMPORTED_MODULE_1__.Button, {
    type: "submit"
  }, "\uC791\uC131\uD558\uAE30")))));
};

_s(ShareBoardWriteForm, "zNy9D3E7b9O35Tr7BN3vNfO6Pow=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];
});

_c = ShareBoardWriteForm;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareBoardWriteForm);

var _c;

__webpack_require__.$Refresh$.register(_c, "ShareBoardWriteForm");

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

/***/ "./pages/ShareBoard/Write/index.jsx":
/*!******************************************!*\
  !*** ./pages/ShareBoard/Write/index.jsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _layouts_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layouts/Header */ "./layouts/Header/index.jsx");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layouts/Footer */ "./layouts/Footer/index.jsx");
/* harmony import */ var _components_ShareBoardWriteForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/ShareBoardWriteForm */ "./components/ShareBoardWriteForm/index.jsx");
/* harmony import */ var _pages_MyBookRecord_BRWrite_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pages/MyBookRecord/BRWrite/styles */ "./pages/MyBookRecord/BRWrite/styles.jsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);








const Write = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_MyBookRecord_BRWrite_styles__WEBPACK_IMPORTED_MODULE_4__.BRContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Header__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_MyBookRecord_BRWrite_styles__WEBPACK_IMPORTED_MODULE_4__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ShareBoardWriteForm__WEBPACK_IMPORTED_MODULE_3__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Footer__WEBPACK_IMPORTED_MODULE_2__.default, null));
};

_c = Write;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = (0,react_router__WEBPACK_IMPORTED_MODULE_5__.withRouter)(Write));

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "Write");
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

/***/ })

}]);