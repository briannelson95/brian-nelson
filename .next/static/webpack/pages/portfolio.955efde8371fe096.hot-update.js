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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n\n\nvar __N_SSG = true;\nfunction Page(param) {\n    var data = param.data;\n    var pageData = data.pageData[0];\n    // console.log(data.portfolio[0].allVideos)\n    var allVideos = data.portfolio[0].allVideos;\n    var navData = [];\n    var nav = data.navigation[0].navigation;\n    for(var i in nav){\n        navData.push({\n            title: nav[i].title,\n            href: nav[i].slug.current\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                navigation: navData\n            }, void 0, false, {\n                fileName: \"/Users/michaelsperling/Documents/solana/brian-nelson/pages/portfolio.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold\",\n                children: pageData.title\n            }, void 0, false, {\n                fileName: \"/Users/michaelsperling/Documents/solana/brian-nelson/pages/portfolio.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                width: \"560\",\n                height: \"315\",\n                src: allVideos[0].url,\n                title: \"YouTube video player\",\n                frameborder: \"0\",\n                allowFullScreen: true\n            }, void 0, false, {\n                fileName: \"/Users/michaelsperling/Documents/solana/brian-nelson/pages/portfolio.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/michaelsperling/Documents/solana/brian-nelson/pages/portfolio.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n};\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3J0Zm9saW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUEwQzs7QUFJM0IsU0FBU0MsSUFBSSxDQUFDLEtBQVEsRUFBRTtRQUFWLElBQU0sR0FBTixLQUFRLENBQU5DLElBQUk7SUFDL0IsSUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDakMsMkNBQTJDO0lBQzNDLElBQU1DLFNBQVMsR0FBR0YsSUFBSSxDQUFDRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNELFNBQVM7SUFFN0MsSUFBSUUsT0FBTyxHQUFHLEVBQUU7SUFDaEIsSUFBTUMsR0FBRyxHQUFHTCxJQUFJLENBQUNNLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsVUFBVTtJQUN6QyxJQUFLLElBQUlDLENBQUMsSUFBSUYsR0FBRyxDQUFFO1FBQ2ZELE9BQU8sQ0FBQ0ksSUFBSSxDQUFDO1lBQUNDLEtBQUssRUFBRUosR0FBRyxDQUFDRSxDQUFDLENBQUMsQ0FBQ0UsS0FBSztZQUFFQyxJQUFJLEVBQUVMLEdBQUcsQ0FBQ0UsQ0FBQyxDQUFDLENBQUNJLElBQUksQ0FBQ0MsT0FBTztTQUFDLENBQUM7S0FDakU7SUFFRCxxQkFDSSw4REFBQ0MsTUFBSTs7MEJBQ0QsOERBQUNmLDBEQUFNO2dCQUFDUSxVQUFVLEVBQUVGLE9BQU87Ozs7O29CQUFJOzBCQUMvQiw4REFBQ1UsSUFBRTtnQkFBQ0MsU0FBUyxFQUFDLG9CQUFvQjswQkFBRWQsUUFBUSxDQUFDUSxLQUFLOzs7OztvQkFBTTswQkFDeEQsOERBQUNPLFFBQU07Z0JBQ0hDLEtBQUssRUFBQyxLQUFLO2dCQUNYQyxNQUFNLEVBQUMsS0FBSztnQkFDWkMsR0FBRyxFQUFFakIsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDa0IsR0FBRztnQkFDckJYLEtBQUssRUFBQyxzQkFBc0I7Z0JBQzVCWSxXQUFXLEVBQUMsR0FBRztnQkFDZkMsZUFBZTs7Ozs7b0JBQ1Q7Ozs7OztZQUNQLENBQ1Y7Q0FDSjtBQXpCdUJ2QixLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BvcnRmb2xpby5qcz81NjA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgeyBwb3J0Zm9saW9QYWdlIH0gZnJvbSBcIi4uL2xpYi9xdWVyaWVzXCJcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gXCIuLi9saWIvc2FuaXR5XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IGRhdGEgfSkge1xuICAgIGNvbnN0IHBhZ2VEYXRhID0gZGF0YS5wYWdlRGF0YVswXTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnBvcnRmb2xpb1swXS5hbGxWaWRlb3MpXG4gICAgY29uc3QgYWxsVmlkZW9zID0gZGF0YS5wb3J0Zm9saW9bMF0uYWxsVmlkZW9zO1xuXG4gICAgbGV0IG5hdkRhdGEgPSBbXVxuICAgIGNvbnN0IG5hdiA9IGRhdGEubmF2aWdhdGlvblswXS5uYXZpZ2F0aW9uXG4gICAgZm9yIChsZXQgaSBpbiBuYXYpIHtcbiAgICAgICAgbmF2RGF0YS5wdXNoKHt0aXRsZTogbmF2W2ldLnRpdGxlLCBocmVmOiBuYXZbaV0uc2x1Zy5jdXJyZW50fSlcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPE5hdmJhciBuYXZpZ2F0aW9uPXtuYXZEYXRhfSAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPntwYWdlRGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgICAgPGlmcmFtZSBcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjU2MFwiIFxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjMxNVwiIFxuICAgICAgICAgICAgICAgIHNyYz17YWxsVmlkZW9zWzBdLnVybH0gXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIFxuICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiIFxuICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICA8L21haW4+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNsaWVudC5mZXRjaChwb3J0Zm9saW9QYWdlKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiTmF2YmFyIiwiUGFnZSIsImRhdGEiLCJwYWdlRGF0YSIsImFsbFZpZGVvcyIsInBvcnRmb2xpbyIsIm5hdkRhdGEiLCJuYXYiLCJuYXZpZ2F0aW9uIiwiaSIsInB1c2giLCJ0aXRsZSIsImhyZWYiLCJzbHVnIiwiY3VycmVudCIsIm1haW4iLCJoMSIsImNsYXNzTmFtZSIsImlmcmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwidXJsIiwiZnJhbWVib3JkZXIiLCJhbGxvd0Z1bGxTY3JlZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/portfolio.js\n"));

/***/ })

});