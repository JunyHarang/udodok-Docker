(self["webpackChunksleact_js_front"] = self["webpackChunksleact_js_front"] || []).push([["pages_ShareBoard_index_jsx"],{

/***/ "./components/CardsPopular/index.jsx":
/*!*******************************************!*\
  !*** ./components/CardsPopular/index.jsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Cards/styles */ "./components/Cards/styles.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);







const Cards = props => {
  // console.log(props);
  let title = props.title,
      bookTitle = props.bookTitle;

  if (title.length > 13) {
    title = title.slice(0, 10) + '...';
  }

  if (bookTitle.length > 13) {
    bookTitle = bookTitle.slice(0, 10) + '...';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {
    span: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.Title, null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.BookTitle, null, bookTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.NickName, null, props.writerNickName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.DateTime, null, props.createdBoard), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards_styles__WEBPACK_IMPORTED_MODULE_1__.Tag, null, props.bookTag)))))));
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

/***/ "./pages/ShareBoard/index.jsx":
/*!************************************!*\
  !*** ./pages/ShareBoard/index.jsx ***!
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
/* harmony import */ var _pages_ShareBoard_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/ShareBoard/styles */ "./pages/ShareBoard/styles.jsx");
/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Cards */ "./components/Cards/index.jsx");
/* harmony import */ var _components_CardsPopular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/CardsPopular */ "./components/CardsPopular/index.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Paging__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Paging */ "./components/Paging/index.jsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();












const ShareBoard = props => {
  _s();

  const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [totalElements, setTotalElements] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [sharedBoards, setSharedBoards] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [popularSharedBoards, setPopularSharedBoards] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_6___default().get('/api/weekly-best', {
      withCredentials: true
    }).then(res => {
      // console.log(res);
      setPopularSharedBoards(res.data.data);
    }).catch(err => {
      console.dir(err);
    });
    handlePageChange(currentPage);
  }, []);

  const handlePageChange = page => {
    axios__WEBPACK_IMPORTED_MODULE_6___default().get('/api/sharings', {
      withCredentials: true,
      params: {
        page: page - 1
      }
    }).then(res => {
      // console.log(res.data);
      setSharedBoards(res.data.data); // console.log(page);

      const pagination = res.data.pagination;
      const {
        total_pages,
        total_elements,
        current_page,
        current_elements
      } = pagination;
      setTotalElements(total_elements);
      setCurrentPage(current_page);
      window.scrollTo(0, 0);
    }).catch(err => {
      console.dir(err);
    });
  };

  const onClickEdit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    props.history.push('/shareboard/write');
  }, []);

  if (!sharedBoards.length || !popularSharedBoards.length) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "loading...");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_ShareBoard_styles__WEBPACK_IMPORTED_MODULE_3__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Header__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_ShareBoard_styles__WEBPACK_IMPORTED_MODULE_3__.Title, null, "\uACF5\uC720 \uAC8C\uC2DC\uD310"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_ShareBoard_styles__WEBPACK_IMPORTED_MODULE_3__.Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "\uC778\uAE30 \uAC8C\uC2DC\uBB3C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_ShareBoard_styles__WEBPACK_IMPORTED_MODULE_3__.PopularCards, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default, {
    gutter: [16, 32]
  }, popularSharedBoards && popularSharedBoards.map((board, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CardsPopular__WEBPACK_IMPORTED_MODULE_5__.default, {
    title: board.title,
    createdBoard: board.created_at,
    boardId: board.id,
    likeCnt: board.like_cnt,
    bookTitle: board.book_title,
    writerNickName: board.writer_info.nick_name,
    bookTag: board.tag_content
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "\uACF5\uC720\uB41C \uAC8C\uC2DC\uBB3C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_ShareBoard_styles__WEBPACK_IMPORTED_MODULE_3__.SharedCards, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default, {
    gutter: [16, 32]
  }, sharedBoards && sharedBoards.map((board, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Cards__WEBPACK_IMPORTED_MODULE_4__.default, {
    share: true,
    title: board.title,
    createdBoard: board.created_at,
    boardId: board.id,
    likeCnt: board.like_cnt,
    bookTitle: board.book_title,
    writerNickName: board.writer_info.nick_name,
    bookTag: board.tag_content
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginBottom: '50px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_ShareBoard_styles__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: onClickEdit
  }, "\uC791\uC131\uD558\uAE30")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginLeft: '150px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Paging__WEBPACK_IMPORTED_MODULE_7__.default, {
    bookBoard: true,
    totalElements: totalElements,
    currentPage: currentPage,
    handlePageChange: handlePageChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Footer__WEBPACK_IMPORTED_MODULE_2__.default, null));
};

_s(ShareBoard, "f/zvJy2Ayj7uJyAb3BXSp/A29Bg=");

_c = ShareBoard;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = (0,react_router__WEBPACK_IMPORTED_MODULE_9__.withRouter)(ShareBoard));

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ShareBoard");
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