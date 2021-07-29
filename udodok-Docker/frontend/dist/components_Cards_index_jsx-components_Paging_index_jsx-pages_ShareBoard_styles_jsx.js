(self["webpackChunksleact_js_front"] = self["webpackChunksleact_js_front"] || []).push([["components_Cards_index_jsx-components_Paging_index_jsx-pages_ShareBoard_styles_jsx"],{

/***/ "./components/Cards/index.jsx":
/*!************************************!*\
  !*** ./components/Cards/index.jsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Cards/styles */ "./components/Cards/styles.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);








const Cards = props => {
  // const onClick = useCallback(() => {
  //   props.history.push('/');
  //   window.location.reload();
  // }, []);
  // console.log(props);
  let title = props.title,
      bookTitle = props.bookTitle;

  if (title.length > 13) {
    title = title.slice(0, 10) + '...';
  }

  if (bookTitle.length > 13) {
    bookTitle = bookTitle.slice(0, 10) + '...';
  }

  const shareBoard = props.share;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.default, {
    span: 6
  }, shareBoard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: `/shareboard/detail/${props.boardId}`,
    style: {
      textDecoration: 'none',
      color: '#000',
      hover: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "card",
    style: {
      borderRadius: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    style: {
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      maxHeight: '250px'
    },
    src: "images/placeholder.png",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "card-body",
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.Title, null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.BookTitle, null, bookTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.NickName, null, props.writerNickName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.DateTime, null, props.createdBoard), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.Tag, null, props.bookTag)))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: `/mybookrecord/detail/${props.boardId}`,
    style: {
      textDecoration: 'none',
      color: '#000',
      hover: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "card",
    style: {
      borderRadius: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    style: {
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      maxHeight: '250px'
    },
    src: "images/placeholder.png",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "card-body",
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.Title, null, props.title.slice(0, 10) + '...'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.BookTitle, null, props.bookTitle ? props.bookTitle : '책 제목 없음'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.DateTime, null, props.createdBoard), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.Tag, null, props.bookTag ? props.bookTag : '')))))));
};

_c = Cards;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cards);

var _c;

__webpack_require__.$Refresh$.register(_c, "Cards");

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

/***/ "./components/Cards/styles.jsx":
/*!*************************************!*\
  !*** ./components/Cards/styles.jsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "Content": () => (/* binding */ Content),
/* harmony export */   "BookTitle": () => (/* binding */ BookTitle),
/* harmony export */   "NickName": () => (/* binding */ NickName),
/* harmony export */   "DateTime": () => (/* binding */ DateTime),
/* harmony export */   "Tag": () => (/* binding */ Tag),
/* harmony export */   "Detail": () => (/* binding */ Detail)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);


const Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  width: 250px;
  margin: 0px 10px;
  position: relative;
`;
const Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 5px;
`;
const Content = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div``;
const BookTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.p`
  margin: 0px;
  font-size: 16px;
`;
const NickName = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.p`
  margin: 0px;
  font-size: 16px;
`;
const DateTime = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.p`
  margin: 0px;
`;
const Tag = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.p`
  /* padding-top: 5px; */
  margin-bottom: 5px;
  color: #939597;
  font-size: 12px;
`;
const Detail = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.button`
  border-radius: 3px;
  border: none;
  background-color: #939597;
  width: 80px;
  height: 38px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: rgba(147, 149, 151, 0.8);
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

/***/ }),

/***/ "./components/Paging/index.jsx":
/*!*************************************!*\
  !*** ./components/Paging/index.jsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Paging_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Paging/styles.css */ "./components/Paging/styles.css");
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-js-pagination */ "./node_modules/react-js-pagination/dist/Pagination.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);





const Paging = ({
  bookBoard = null,
  discussion = null,
  totalElements,
  currentPage,
  handlePageChange
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, bookBoard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_js_pagination__WEBPACK_IMPORTED_MODULE_2__.default, {
    activePage: currentPage + 1,
    itemsCountPerPage: 8,
    totalItemsCount: totalElements,
    pageRangeDisplayed: 5,
    prevPageText: '<',
    nextPageText: '>',
    onChange: handlePageChange
  }) : discussion ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_js_pagination__WEBPACK_IMPORTED_MODULE_2__.default, {
    activePage: currentPage + 1,
    itemsCountPerPage: 7,
    totalItemsCount: totalElements,
    pageRangeDisplayed: 10,
    prevPageText: '<',
    nextPageText: '>',
    onChange: handlePageChange
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_js_pagination__WEBPACK_IMPORTED_MODULE_2__.default, {
    activePage: currentPage + 1,
    itemsCountPerPage: 20,
    totalItemsCount: totalElements,
    pageRangeDisplayed: 10,
    prevPageText: '<',
    nextPageText: '>',
    onChange: handlePageChange
  }));
};

_c = Paging;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paging);

var _c;

__webpack_require__.$Refresh$.register(_c, "Paging");

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

/***/ "./pages/ShareBoard/styles.jsx":
/*!*************************************!*\
  !*** ./pages/ShareBoard/styles.jsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "Content": () => (/* binding */ Content),
/* harmony export */   "PopularCards": () => (/* binding */ PopularCards),
/* harmony export */   "SharedCards": () => (/* binding */ SharedCards),
/* harmony export */   "Button": () => (/* binding */ Button)
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
const Title = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.h2`
  padding: 50px 30px;
  border-bottom: 1px solid rgba(147, 149, 151, 0.8);
  margin-bottom: 30px;
  padding-bottom: 30px;
`;
const Content = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  padding: 0px 30px;
  min-height: 100%;

  & h4 {
    font-weight: bold;
    margin-bottom: 30px;
  }
`;
const PopularCards = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  padding: 0px 30px;
  margin-bottom: 30px;
`;
const SharedCards = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  padding: 0px 30px;
  margin-bottom: 30px;
`;
const Button = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.button`
  border: 0px;
  border-radius: 5px;
  background-color: #0f4c81;
  color: white;
  width: 120px;
  height: 45px;
  font-weight: bold;
  float: right;
  margin-top: 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  &:hover {
    background-color: rgba(15, 76, 129, 0.8);
    border: none;
    cursor: pointer;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 2px rgba(29, 155, 209, 0.3);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./components/Paging/styles.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./components/Paging/styles.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".pagination {\n  display: flex;\n  justify-content: center;\n  margin-top: 15px;\n}\nul {\n  list-style: none;\n  padding: 0;\n}\nul.pagination li {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e2e2e2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n}\nul.pagination li:first-child {\n  border-radius: 5px 0 0 5px;\n}\nul.pagination li:last-child {\n  border-radius: 0 5px 5px 0;\n}\nul.pagination li a {\n  text-decoration: none;\n  color: #337ab7;\n  font-size: 1rem;\n}\nul.pagination li.active a {\n  color: white;\n}\nul.pagination li.active {\n  background-color: #337ab7;\n}\n.page-selection {\n  width: 48px;\n  height: 30px;\n  color: #337ab7;\n}\n", "",{"version":3,"sources":["webpack://./components/Paging/styles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,UAAU;AACZ;AACA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,qBAAqB;EACrB,cAAc;EACd,eAAe;AACjB;AACA;EACE,YAAY;AACd;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB","sourcesContent":[".pagination {\n  display: flex;\n  justify-content: center;\n  margin-top: 15px;\n}\nul {\n  list-style: none;\n  padding: 0;\n}\nul.pagination li {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #e2e2e2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n}\nul.pagination li:first-child {\n  border-radius: 5px 0 0 5px;\n}\nul.pagination li:last-child {\n  border-radius: 0 5px 5px 0;\n}\nul.pagination li a {\n  text-decoration: none;\n  color: #337ab7;\n  font-size: 1rem;\n}\nul.pagination li.active a {\n  color: white;\n}\nul.pagination li.active {\n  background-color: #337ab7;\n}\n.page-selection {\n  width: 48px;\n  height: 30px;\n  color: #337ab7;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./components/Paging/styles.css":
/*!**************************************!*\
  !*** ./components/Paging/styles.css ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./components/Paging/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./components/Paging/styles.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./components/Paging/styles.css");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);