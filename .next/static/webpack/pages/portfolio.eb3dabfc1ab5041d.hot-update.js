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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var get_youtube_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! get-youtube-id */ \"./node_modules/get-youtube-id/index.js\");\n/* harmony import */ var get_youtube_id__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(get_youtube_id__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/YouTube.mjs\");\n\n\n\n\nvar __N_SSG = true;\nfunction Page(param) {\n    var data = param.data;\n    var pageData = data.pageData[0];\n    // console.log(data.portfolio[0].allVideos)\n    var allVideos = data.portfolio[0].allVideos;\n    var id = get_youtube_id__WEBPACK_IMPORTED_MODULE_2___default()(allVideos[0].url);\n    console.log(id);\n    var navData = [];\n    var nav = data.navigation[0].navigation;\n    for(var i in nav){\n        navData.push({\n            title: nav[i].title,\n            href: nav[i].slug.current\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                navigation: navData\n            }, void 0, false, {\n                fileName: \"/Users/michaelsperling/Documents/solana/brian-nelson/pages/portfolio.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold\",\n                children: pageData.title\n            }, void 0, false, {\n                fileName: \"/Users/michaelsperling/Documents/solana/brian-nelson/pages/portfolio.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_youtube__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                videoId: id,\n                width: 8\n            }, void 0, false, {\n                fileName: \"/Users/michaelsperling/Documents/solana/brian-nelson/pages/portfolio.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/michaelsperling/Documents/solana/brian-nelson/pages/portfolio.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n};\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3J0Zm9saW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQztBQUdBO0FBQ047O0FBRXJCLFNBQVNHLElBQUksQ0FBQyxLQUFRLEVBQUU7UUFBVixJQUFNLEdBQU4sS0FBUSxDQUFOQyxJQUFJO0lBQy9CLElBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLDJDQUEyQztJQUMzQyxJQUFNQyxTQUFTLEdBQUdGLElBQUksQ0FBQ0csU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDRCxTQUFTO0lBRTdDLElBQU1FLEVBQUUsR0FBR1AscURBQVksQ0FBQ0ssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDRyxHQUFHLENBQUM7SUFDekNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxFQUFFLENBQUM7SUFFZixJQUFJSSxPQUFPLEdBQUcsRUFBRTtJQUNoQixJQUFNQyxHQUFHLEdBQUdULElBQUksQ0FBQ1UsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDQSxVQUFVO0lBQ3pDLElBQUssSUFBSUMsQ0FBQyxJQUFJRixHQUFHLENBQUU7UUFDZkQsT0FBTyxDQUFDSSxJQUFJLENBQUM7WUFBQ0MsS0FBSyxFQUFFSixHQUFHLENBQUNFLENBQUMsQ0FBQyxDQUFDRSxLQUFLO1lBQUVDLElBQUksRUFBRUwsR0FBRyxDQUFDRSxDQUFDLENBQUMsQ0FBQ0ksSUFBSSxDQUFDQyxPQUFPO1NBQUMsQ0FBQztLQUNqRTtJQUVELHFCQUNJLDhEQUFDQyxNQUFJOzswQkFDRCw4REFBQ3JCLDBEQUFNO2dCQUFDYyxVQUFVLEVBQUVGLE9BQU87Ozs7O29CQUFJOzBCQUMvQiw4REFBQ1UsSUFBRTtnQkFBQ0MsU0FBUyxFQUFDLG9CQUFvQjswQkFBRWxCLFFBQVEsQ0FBQ1ksS0FBSzs7Ozs7b0JBQU07MEJBQ3hELDhEQUFDZixxREFBTztnQkFBQ3NCLE9BQU8sRUFBRWhCLEVBQUU7Z0JBQUVpQixLQUFLLEVBQUUsQ0FBQzs7Ozs7b0JBQUk7Ozs7OztZQUMvQixDQUNWO0NBQ0o7QUFyQnVCdEIsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3J0Zm9saW8uanM/NTYwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IHsgcG9ydGZvbGlvUGFnZSB9IGZyb20gXCIuLi9saWIvcXVlcmllc1wiXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vbGliL3Nhbml0eVwiO1xuaW1wb3J0IGdldFlvdVR1YmVJZCBmcm9tICdnZXQteW91dHViZS1pZCc7XG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IGRhdGEgfSkge1xuICAgIGNvbnN0IHBhZ2VEYXRhID0gZGF0YS5wYWdlRGF0YVswXTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnBvcnRmb2xpb1swXS5hbGxWaWRlb3MpXG4gICAgY29uc3QgYWxsVmlkZW9zID0gZGF0YS5wb3J0Zm9saW9bMF0uYWxsVmlkZW9zO1xuXG4gICAgY29uc3QgaWQgPSBnZXRZb3VUdWJlSWQoYWxsVmlkZW9zWzBdLnVybClcbiAgICBjb25zb2xlLmxvZyhpZClcblxuICAgIGxldCBuYXZEYXRhID0gW11cbiAgICBjb25zdCBuYXYgPSBkYXRhLm5hdmlnYXRpb25bMF0ubmF2aWdhdGlvblxuICAgIGZvciAobGV0IGkgaW4gbmF2KSB7XG4gICAgICAgIG5hdkRhdGEucHVzaCh7dGl0bGU6IG5hdltpXS50aXRsZSwgaHJlZjogbmF2W2ldLnNsdWcuY3VycmVudH0pXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxOYXZiYXIgbmF2aWdhdGlvbj17bmF2RGF0YX0gLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57cGFnZURhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxZb3VUdWJlIHZpZGVvSWQ9e2lkfSB3aWR0aD17OH0gLz5cbiAgICAgICAgPC9tYWluPlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjbGllbnQuZmV0Y2gocG9ydGZvbGlvUGFnZSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkYXRhXG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbIk5hdmJhciIsImdldFlvdVR1YmVJZCIsIllvdVR1YmUiLCJQYWdlIiwiZGF0YSIsInBhZ2VEYXRhIiwiYWxsVmlkZW9zIiwicG9ydGZvbGlvIiwiaWQiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwibmF2RGF0YSIsIm5hdiIsIm5hdmlnYXRpb24iLCJpIiwicHVzaCIsInRpdGxlIiwiaHJlZiIsInNsdWciLCJjdXJyZW50IiwibWFpbiIsImgxIiwiY2xhc3NOYW1lIiwidmlkZW9JZCIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/portfolio.js\n"));

/***/ })

});