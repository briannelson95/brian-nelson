"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _lib_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/modules */ \"./lib/modules.js\");\n/* harmony import */ var get_youtube_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! get-youtube-id */ \"./node_modules/get-youtube-id/index.js\");\n/* harmony import */ var get_youtube_id__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(get_youtube_id__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    var data = param.data;\n    var _this = this;\n    var pageData = data.pageData[0];\n    var videoArray = data.videos[0].allVideos;\n    console.log(videoArray);\n    var opts = {\n        height: \"180\",\n        width: \"320\"\n    };\n    var navData = [];\n    var nav = data.navigation[0].navigation;\n    for(var i in nav){\n        navData.push({\n            title: nav[i].title,\n            href: nav[i].slug.current\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"mb-32\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                navigation: navData\n            }, void 0, false, {\n                fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"bg-slate-300 dark:bg-slate-500 h-[90vh]\",\n                style: {\n                    backgroundImage: \"url(\".concat((0,_lib_modules__WEBPACK_IMPORTED_MODULE_3__.urlFor)(pageData.hero.image).url(), \")\")\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-10 pt-12 md:w-1/3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl md:text-6xl font-bold uppercase\",\n                            children: pageData.hero.heading\n                        }, void 0, false, {\n                            fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-xl md:text-3xl\",\n                            children: pageData.hero.tagline\n                        }, void 0, false, {\n                            fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-10\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: pageData.hero.cta.link.slug.current,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-white py-4 px-5 text-black hover:bg-slate-800 hover:text-white\",\n                                    children: pageData.hero.cta.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl\",\n                        children: \"Featured Videos\"\n                    }, void 0, false, {\n                        fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: videoArray.map(function(item, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: item.url\n                            }, index, false, {\n                                fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIlxuaW1wb3J0IHsgdXJsRm9yIH0gZnJvbSBcIi4uL2xpYi9tb2R1bGVzXCJcbmltcG9ydCB7IGhvbWVwYWdlIH0gZnJvbSBcIi4uL2xpYi9xdWVyaWVzXCJcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gXCIuLi9saWIvc2FuaXR5XCJcbmltcG9ydCBnZXRZb3VUdWJlSWQgZnJvbSAnZ2V0LXlvdXR1YmUtaWQnO1xuaW1wb3J0IFlvdVR1YmUgZnJvbSAncmVhY3QteW91dHViZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBkYXRhIH0pIHtcbiAgY29uc3QgcGFnZURhdGEgPSBkYXRhLnBhZ2VEYXRhWzBdXG5cbiAgY29uc3QgdmlkZW9BcnJheSA9IGRhdGEudmlkZW9zWzBdLmFsbFZpZGVvc1xuICBjb25zb2xlLmxvZyh2aWRlb0FycmF5KVxuXG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgaGVpZ2h0OiAnMTgwJyxcbiAgICB3aWR0aDogJzMyMCcsXG4gIH1cbiAgXG4gIGxldCBuYXZEYXRhID0gW11cbiAgY29uc3QgbmF2ID0gZGF0YS5uYXZpZ2F0aW9uWzBdLm5hdmlnYXRpb25cbiAgZm9yIChsZXQgaSBpbiBuYXYpIHtcbiAgICBuYXZEYXRhLnB1c2goe3RpdGxlOiBuYXZbaV0udGl0bGUsIGhyZWY6IG5hdltpXS5zbHVnLmN1cnJlbnR9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtYi0zMlwiPlxuICAgICAgPE5hdmJhciBuYXZpZ2F0aW9uPXtuYXZEYXRhfSAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctc2xhdGUtMzAwIGRhcms6Ymctc2xhdGUtNTAwIGgtWzkwdmhdXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt1cmxGb3IocGFnZURhdGEuaGVyby5pbWFnZSkudXJsKCl9KWB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0xMCBwdC0xMiBtZDp3LTEvM1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTZ4bCBmb250LWJvbGQgdXBwZXJjYXNlXCI+e3BhZ2VEYXRhLmhlcm8uaGVhZGluZ308L2gxPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtM3hsXCI+e3BhZ2VEYXRhLmhlcm8udGFnbGluZX08L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BhZ2VEYXRhLmhlcm8uY3RhLmxpbmsuc2x1Zy5jdXJyZW50fT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS00IHB4LTUgdGV4dC1ibGFjayBob3ZlcjpiZy1zbGF0ZS04MDAgaG92ZXI6dGV4dC13aGl0ZVwiPntwYWdlRGF0YS5oZXJvLmN0YS50aXRsZX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+RmVhdHVyZWQgVmlkZW9zPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7dmlkZW9BcnJheS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICB7aXRlbS51cmx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBjbGllbnQuZmV0Y2goaG9tZXBhZ2UpXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJOYXZiYXIiLCJ1cmxGb3IiLCJnZXRZb3VUdWJlSWQiLCJZb3VUdWJlIiwiSG9tZSIsImRhdGEiLCJwYWdlRGF0YSIsInZpZGVvQXJyYXkiLCJ2aWRlb3MiLCJhbGxWaWRlb3MiLCJjb25zb2xlIiwibG9nIiwib3B0cyIsImhlaWdodCIsIndpZHRoIiwibmF2RGF0YSIsIm5hdiIsIm5hdmlnYXRpb24iLCJpIiwicHVzaCIsInRpdGxlIiwiaHJlZiIsInNsdWciLCJjdXJyZW50IiwibWFpbiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImhlcm8iLCJpbWFnZSIsInVybCIsImRpdiIsImgxIiwiaGVhZGluZyIsImgzIiwidGFnbGluZSIsImN0YSIsImxpbmsiLCJidXR0b24iLCJoMiIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});