(self["webpackChunksleact_js_front"] = self["webpackChunksleact_js_front"] || []).push([["pages_Event_End_index_jsx"],{

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

/***/ "./pages/Event/End/index.jsx":
/*!***********************************!*\
  !*** ./pages/Event/End/index.jsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _layouts_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layouts/Header */ "./layouts/Header/index.jsx");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layouts/Footer */ "./layouts/Footer/index.jsx");
/* harmony import */ var _pages_Event_End_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/Event/End/styles */ "./pages/Event/End/styles.jsx");
/* harmony import */ var _components_Paging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Paging */ "./components/Paging/index.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();








const EndEvent = () => {
  _s();

  const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [totalElements, setTotalElements] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_5___default().get(`/api/end-events`, {
      withCredentials: true
    }).then(res => {
      const data = res.data.data.content;
      console.log(data);
      setPost(data);
    }).catch(e => {
      console.log(e);
    });
  }, []);

  const onNowEvent = e => {
    window.location.replace('/event/now');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Event_End_styles__WEBPACK_IMPORTED_MODULE_3__.EventContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Header__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Event_End_styles__WEBPACK_IMPORTED_MODULE_3__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Event_End_styles__WEBPACK_IMPORTED_MODULE_3__.EventHeader, null, "\uC774\uBCA4\uD2B8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Event_End_styles__WEBPACK_IMPORTED_MODULE_3__.EventTab, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    onClick: onNowEvent
  }, "\uC9C4\uD589\uC911\uC778 \uC774\uBCA4\uD2B8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "on"
  }, "\uC885\uB8CC\uB41C \uC774\uBCA4\uD2B8")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Event_End_styles__WEBPACK_IMPORTED_MODULE_3__.TabArea, null, post === null || post === void 0 ? void 0 : post.map((item, idx) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EventLists, {
      key: idx,
      item: item
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Paging__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Footer__WEBPACK_IMPORTED_MODULE_2__.default, null));
};

_s(EndEvent, "es+FMoZPJaaBVRLJ4zLas3kwpdY=");

_c = EndEvent;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EndEvent);

const EventLists = ({
  item
}) => {
  const {
    title,
    start_date,
    end_date,
    id
  } = item;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Event_End_styles__WEBPACK_IMPORTED_MODULE_3__.EventList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "/images/placeholder.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "evt_title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", {
    className: "evt_date"
  }, start_date, "~", end_date)));
};

_c2 = EventLists;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "EndEvent");
__webpack_require__.$Refresh$.register(_c2, "EventLists");

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

/***/ "./pages/Event/End/styles.jsx":
/*!************************************!*\
  !*** ./pages/Event/End/styles.jsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventContainer": () => (/* binding */ EventContainer),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "EventHeader": () => (/* binding */ EventHeader),
/* harmony export */   "EventTab": () => (/* binding */ EventTab),
/* harmony export */   "TabArea": () => (/* binding */ TabArea),
/* harmony export */   "EventList": () => (/* binding */ EventList)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);


const EventContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`;
const Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  width: 1200px;
  /* height: 100vh; */
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 100px;
`;
const EventHeader = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.h3`
  padding: 50px 30px;
  font-weight: bold;
`;
const EventTab = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.ul`
  list-style: none;
  margin-bottom: 34px;
  & li {
    display: inline-block;
    vertical-align: middle;
    width: 50%;
    text-align: center;
    font-size: 14px;
    color: #6a6a6a;
    font-weight: 400;
    cursor: pointer;
    line-height: 52px;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-bottom: 1px solid #0f4c81;
  }
  & li.on {
    background: #fff;
    color: #000;
    font-weight: bold;
    border: 1px solid #0f4c81;
    border-bottom: 1px solid #fff;
  }
`;
const TabArea = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  display: flex;
  flex-wrap: wrap;
`;
const EventList = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div`
  margin-top: 20px;
  text-align: center;
  :after {
    content: '';
    display: block;
    clear: both;
  }
  & span.evt_title {
    max-height: 40px;
    width: 100%;
    font-size: 18px;
    color: #4b4b4b;
    line-height: 20px;
    margin: 20px 0 0;
    font-weight: bold;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
  }

  & em {
    display: block;
    font-size: 14px;
    text-align: center;
  }
  & div {
    width: 590px;
    height: 320px;
    margin-top: 70px;
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