(self["webpackChunksleact_js_front"] = self["webpackChunksleact_js_front"] || []).push([["pages_Discussion_index_jsx"],{

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

/***/ "./pages/Discussion/index.jsx":
/*!************************************!*\
  !*** ./pages/Discussion/index.jsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _layouts_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layouts/Header */ "./layouts/Header/index.jsx");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layouts/Footer */ "./layouts/Footer/index.jsx");
/* harmony import */ var _pages_Discussion_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/Discussion/styles */ "./pages/Discussion/styles.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Paging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Paging */ "./components/Paging/index.jsx");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @utils/formatDate */ "./utils/formatDate.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();













const Discussion = () => {
  _s();

  const {
    isLoggedIn
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.auth);
  const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [totalElements, setTotalElements] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [text, setText] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__.default)('');
  const [select, setSelect] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [selectValue, setSelectValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/discussions', {
      withCredentials: true,
      params: {
        page: currentPage
      }
    }).then(res => {
      const data = res.data.data.content;
      const pages = res.data.pagination;
      const {
        total_pages,
        total_elements,
        current_page,
        current_elements
      } = pages;
      setPost(data);
      setTotalElements(total_elements);
      setCurrentPage(current_page);
    }).catch(e => {
      console.log(e);
    });
  }, []);

  const handlePageChange = page => {
    axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/discussions', {
      withCredentials: true,
      params: {
        page: page - 1
      }
    }).then(res => {
      const data = res.data.data.content;
      const pages = res.data.pagination;
      const {
        total_pages,
        total_elements,
        current_page,
        current_elements
      } = pages;
      console.log(data);
      setPost(data);
      setTotalElements(total_elements);
      setCurrentPage(current_page);
    }).catch(e => {
      console.log(e);
    });
  };

  const handleChange = e => {
    const {
      value
    } = e.target;
    setSelectValue(value);
  }; // console.log({ post });


  const onSubmit = e => {
    // console.log('ddd');
    axios__WEBPACK_IMPORTED_MODULE_4___default().get(`/api/discussions/search-${selectValue}/${text}`, {
      withCredentials: true
    }).then(res => {
      const data = res.data.data.content;
      setPost(data);
    }).catch(e => {
      console.log(e);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "discussion",
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Header__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Discussion_styles__WEBPACK_IMPORTED_MODULE_3__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Discussion_styles__WEBPACK_IMPORTED_MODULE_3__.DCContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Discussion_styles__WEBPACK_IMPORTED_MODULE_3__.DCHeader, null, "\uD1A0\uB860 \uAC8C\uC2DC\uD310"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Discussion_styles__WEBPACK_IMPORTED_MODULE_3__.DCSearch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    onChange: handleChange,
    value: select
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", null, "\uC120\uD0DD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "all"
  }, "\uC81C\uBAA9/\uB0B4\uC6A9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "title"
  }, "\uC81C\uBAA9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "content"
  }, "\uB0B4\uC6A9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-search",
    onClick: onSubmit
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    placeholder: "\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    onChange: setText,
    value: text
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Discussion_styles__WEBPACK_IMPORTED_MODULE_3__.DCTable, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Discussion_styles__WEBPACK_IMPORTED_MODULE_3__.DCTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "textNo"
  }, "\uAE00\uBC88\uD638"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "title"
  }, "\uC81C\uBAA9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "\uC870\uD68C\uC218"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "\uC791\uC131\uC790"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "\uC791\uC131\uB0A0\uC9DC"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Discussion_styles__WEBPACK_IMPORTED_MODULE_3__.DCMain, null, post === null || post === void 0 ? void 0 : post.map((item, idx) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DCItem, {
      key: idx,
      item: item,
      isLoggedIn: isLoggedIn
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
    to: "/discussion/write"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Discussion_styles__WEBPACK_IMPORTED_MODULE_3__.DCButton, null, "\uAE00\uC4F0\uAE30")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Paging__WEBPACK_IMPORTED_MODULE_5__.default, {
    discussion: true,
    totalElements: totalElements,
    currentPage: currentPage,
    handlePageChange: handlePageChange
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Footer__WEBPACK_IMPORTED_MODULE_2__.default, null));
};

_s(Discussion, "1UYOuJdGpD5WoRuCHMqMA2i/MNc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__.default];
});

_c = Discussion;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Discussion);

const DCItem = ({
  item,
  isLoggedIn
}) => {
  const {
    id,
    title,
    user_nickname,
    create_at,
    read_hit
  } = item;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, id), isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
    to: {
      pathname: `/discussion/content/${id}`,
      state: {
        read_hit: read_hit
      }
    }
  }, title, " ")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
    to: "/login"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, read_hit), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, user_nickname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, (0,_utils_formatDate__WEBPACK_IMPORTED_MODULE_8__.default)(create_at)));
};

_c2 = DCItem;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "Discussion");
__webpack_require__.$Refresh$.register(_c2, "DCItem");

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

/***/ "./pages/Discussion/styles.jsx":
/*!*************************************!*\
  !*** ./pages/Discussion/styles.jsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "DCHeader": () => (/* binding */ DCHeader),
/* harmony export */   "DCContainer": () => (/* binding */ DCContainer),
/* harmony export */   "DCSearch": () => (/* binding */ DCSearch),
/* harmony export */   "DCTable": () => (/* binding */ DCTable),
/* harmony export */   "DCTitle": () => (/* binding */ DCTitle),
/* harmony export */   "DCMain": () => (/* binding */ DCMain),
/* harmony export */   "DCButton": () => (/* binding */ DCButton)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);


const Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  width: 1200px;
  /* height: 100vh; */
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 500px;
`;
const DCHeader = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.h2`
  padding: 50px 30px;
`;
const DCContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  height: auto;
  min-height: 100%;
  & div {
    margin-top: 100px;
  }
`;
const DCSearch = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: flex;
  justify-content: flex-end;

  & i {
    position: absolute;
    font-size: 16px;
    color: #0f4c81;
    top: 248px;
    right: 5px;
    z-index: 2;
    cursor: pointer;
  }

  & select {
    border-color: #0f4c81;
    color: #0f4c81;
    border-radius: 3px;
    margin-right: 10px;
  }

  & input {
    width: 298px;
    height: 34px;
    border: 1px solid #939597;
    border-radius: 3px;
  }
`;
const DCTable = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.table`
  width: 100%;
  border-top: 0.5px solid #0f4c81;
  border-collapse: collapse;
  margin-top: 12px;
`;
const DCTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.thead`
  border: 0px;
  border-bottom: 1px solid #0f4c81;
  text-align: center;
  & th {
    border: 0px;
    padding: 5px;
    height: 60px;
    font-size: 15px;
    color: #0f4c81;
    width: 110px;
  }

  & th.textNo {
    width: 150px;
  }

  & th.title {
    width: 850px;
  }
`;
const DCMain = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.tbody`
  height: 60px;
  text-align: center;

  & tr {
    height: 60px;
  }
  & tr.notice {
    font-weight: bold;
  }

  & td {
    border-bottom: 1px solid #939597;
  }

  & td.title {
    text-align: left;
    padding-left: 40px;
  }

  & td.title > a {
    text-decoration: none;
    color: black;
  }
`;
const DCButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.button`
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
  :hover {
    cursor: pointer;
    background-color: rgba(15, 76, 129, 0.8);
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