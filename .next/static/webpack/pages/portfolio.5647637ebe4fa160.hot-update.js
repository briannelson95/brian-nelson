"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/portfolio",{

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var get_youtube_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! get-youtube-id */ \"./node_modules/get-youtube-id/index.js\");\n/* harmony import */ var get_youtube_id__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(get_youtube_id__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/YouTube.mjs\");\n\n\n\n\nvar __N_SSG = true;\nfunction Page(param) {\n    var data = param.data;\n    var _this = this;\n    var pageData = data.pageData[0];\n    // console.log(data.portfolio[0].allVideos)\n    var allVideos = data.portfolio[0].allVideos;\n    var id = get_youtube_id__WEBPACK_IMPORTED_MODULE_2___default()(allVideos[0].url);\n    console.log(id);\n    var navData = [];\n    var nav = data.navigation[0].navigation;\n    for(var i in nav){\n        navData.push({\n            title: nav[i].title,\n            href: nav[i].slug.current\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                navigation: navData\n            }, void 0, false, {\n                fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/portfolio.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold\",\n                children: pageData.title\n            }, void 0, false, {\n                fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/portfolio.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: allVideos.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_youtube__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            videoId: get_youtube_id__WEBPACK_IMPORTED_MODULE_2___default()(item.url),\n                            width: 1\n                        }, index, false, {\n                            fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/portfolio.js\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/portfolio.js\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/portfolio.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/portfolio.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n};\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3J0Zm9saW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQztBQUdBO0FBQ047O0FBRXJCLFNBQVNHLElBQUksQ0FBQyxLQUFRLEVBQUU7UUFBVixJQUFNLEdBQU4sS0FBUSxDQUFOQyxJQUFJOztJQUMvQixJQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNqQywyQ0FBMkM7SUFDM0MsSUFBTUMsU0FBUyxHQUFHRixJQUFJLENBQUNHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0QsU0FBUztJQUU3QyxJQUFNRSxFQUFFLEdBQUdQLHFEQUFZLENBQUNLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csR0FBRyxDQUFDO0lBQ3pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsRUFBRSxDQUFDO0lBRWYsSUFBSUksT0FBTyxHQUFHLEVBQUU7SUFDaEIsSUFBTUMsR0FBRyxHQUFHVCxJQUFJLENBQUNVLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsVUFBVTtJQUN6QyxJQUFLLElBQUlDLENBQUMsSUFBSUYsR0FBRyxDQUFFO1FBQ2ZELE9BQU8sQ0FBQ0ksSUFBSSxDQUFDO1lBQUNDLEtBQUssRUFBRUosR0FBRyxDQUFDRSxDQUFDLENBQUMsQ0FBQ0UsS0FBSztZQUFFQyxJQUFJLEVBQUVMLEdBQUcsQ0FBQ0UsQ0FBQyxDQUFDLENBQUNJLElBQUksQ0FBQ0MsT0FBTztTQUFDLENBQUM7S0FDakU7SUFFRCxxQkFDSSw4REFBQ0MsTUFBSTs7MEJBQ0QsOERBQUNyQiwwREFBTTtnQkFBQ2MsVUFBVSxFQUFFRixPQUFPOzs7OztvQkFBSTswQkFDL0IsOERBQUNVLElBQUU7Z0JBQUNDLFNBQVMsRUFBQyxvQkFBb0I7MEJBQUVsQixRQUFRLENBQUNZLEtBQUs7Ozs7O29CQUFNOzBCQUN4RCw4REFBQ08sS0FBRzswQkFDQ2xCLFNBQVMsQ0FBQ21CLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEtBQUs7eUNBQ3ZCLDhEQUFDSCxLQUFHO3dCQUFhRCxTQUFTLEVBQUMsS0FBSztrQ0FDNUIsNEVBQUNyQixxREFBTzs0QkFBYTBCLE9BQU8sRUFBRTNCLHFEQUFZLENBQUN5QixJQUFJLENBQUNqQixHQUFHLENBQUM7NEJBQUVvQixLQUFLLEVBQUUsQ0FBQzsyQkFBaERGLEtBQUs7Ozs7aUNBQStDO3VCQUQ1REEsS0FBSzs7Ozs2QkFFVDtpQkFDVCxDQUFDOzs7OztvQkFDQTs7Ozs7O1lBQ0gsQ0FDVjtDQUNKO0FBM0J1QnhCLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ydGZvbGlvLmpzPzU2MDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCB7IHBvcnRmb2xpb1BhZ2UgfSBmcm9tIFwiLi4vbGliL3F1ZXJpZXNcIlxuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uL2xpYi9zYW5pdHlcIjtcbmltcG9ydCBnZXRZb3VUdWJlSWQgZnJvbSAnZ2V0LXlvdXR1YmUtaWQnO1xuaW1wb3J0IFlvdVR1YmUgZnJvbSAncmVhY3QteW91dHViZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoeyBkYXRhIH0pIHtcbiAgICBjb25zdCBwYWdlRGF0YSA9IGRhdGEucGFnZURhdGFbMF07XG4gICAgLy8gY29uc29sZS5sb2coZGF0YS5wb3J0Zm9saW9bMF0uYWxsVmlkZW9zKVxuICAgIGNvbnN0IGFsbFZpZGVvcyA9IGRhdGEucG9ydGZvbGlvWzBdLmFsbFZpZGVvcztcblxuICAgIGNvbnN0IGlkID0gZ2V0WW91VHViZUlkKGFsbFZpZGVvc1swXS51cmwpXG4gICAgY29uc29sZS5sb2coaWQpXG5cbiAgICBsZXQgbmF2RGF0YSA9IFtdXG4gICAgY29uc3QgbmF2ID0gZGF0YS5uYXZpZ2F0aW9uWzBdLm5hdmlnYXRpb25cbiAgICBmb3IgKGxldCBpIGluIG5hdikge1xuICAgICAgICBuYXZEYXRhLnB1c2goe3RpdGxlOiBuYXZbaV0udGl0bGUsIGhyZWY6IG5hdltpXS5zbHVnLmN1cnJlbnR9KVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8TmF2YmFyIG5hdmlnYXRpb249e25hdkRhdGF9IC8+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3BhZ2VEYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHthbGxWaWRlb3MubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT0nbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxZb3VUdWJlIGtleT17aW5kZXh9IHZpZGVvSWQ9e2dldFlvdVR1YmVJZChpdGVtLnVybCl9IHdpZHRoPXsxfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNsaWVudC5mZXRjaChwb3J0Zm9saW9QYWdlKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiTmF2YmFyIiwiZ2V0WW91VHViZUlkIiwiWW91VHViZSIsIlBhZ2UiLCJkYXRhIiwicGFnZURhdGEiLCJhbGxWaWRlb3MiLCJwb3J0Zm9saW8iLCJpZCIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJuYXZEYXRhIiwibmF2IiwibmF2aWdhdGlvbiIsImkiLCJwdXNoIiwidGl0bGUiLCJocmVmIiwic2x1ZyIsImN1cnJlbnQiLCJtYWluIiwiaDEiLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ2aWRlb0lkIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/portfolio.js\n"));

/***/ })

});