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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _lib_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/modules */ \"./lib/modules.js\");\n/* harmony import */ var get_youtube_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! get-youtube-id */ \"./node_modules/get-youtube-id/index.js\");\n/* harmony import */ var get_youtube_id__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(get_youtube_id__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/YouTube.mjs\");\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    var data = param.data;\n    var _this = this;\n    var pageData = data.pageData[0];\n    console.log(data[0].videos.allVideos);\n    var videos = data.videos.allVideos;\n    var opts = {\n        height: \"180\",\n        width: \"320\"\n    };\n    var navData = [];\n    var nav = data.navigation[0].navigation;\n    for(var i in nav){\n        navData.push({\n            title: nav[i].title,\n            href: nav[i].slug.current\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"mb-32\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                navigation: navData\n            }, void 0, false, {\n                fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"bg-slate-300 dark:bg-slate-500 h-[90vh]\",\n                style: {\n                    backgroundImage: \"url(\".concat((0,_lib_modules__WEBPACK_IMPORTED_MODULE_3__.urlFor)(pageData.hero.image).url(), \")\")\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-10 pt-12 md:w-1/3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl md:text-6xl font-bold uppercase\",\n                            children: pageData.hero.heading\n                        }, void 0, false, {\n                            fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-xl md:text-3xl\",\n                            children: pageData.hero.tagline\n                        }, void 0, false, {\n                            fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-10\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: pageData.hero.cta.link.slug.current,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-white py-4 px-5 text-black hover:bg-slate-800 hover:text-white\",\n                                    children: pageData.hero.cta.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl\",\n                        children: \"Featured Videos\"\n                    }, void 0, false, {\n                        fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: videos.map(function(item, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"m-2 w-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_youtube__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    videoId: get_youtube_id__WEBPACK_IMPORTED_MODULE_4___default()(item.url),\n                                    opts: opts\n                                }, index, false, {\n                                    fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, _this)\n                            }, index, false, {\n                                fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/briannelson/Documents/GitHub/brian-nelson/pages/index.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUQ7K0JBRDVEQSxLQUFLOzs7O3FDQUVUO3lCQUNQLENBQUM7Ozs7OzRCQUNFOzs7Ozs7b0JBQ0U7Ozs7OztZQUNMLENBQ1I7Q0FDRjtBQTNDdUJ0QyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiXG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tIFwiLi4vbGliL21vZHVsZXNcIlxuaW1wb3J0IHsgaG9tZXBhZ2UgfSBmcm9tIFwiLi4vbGliL3F1ZXJpZXNcIlxuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uL2xpYi9zYW5pdHlcIlxuaW1wb3J0IGdldFlvdVR1YmVJZCBmcm9tICdnZXQteW91dHViZS1pZCc7XG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGRhdGEgfSkge1xuICBjb25zdCBwYWdlRGF0YSA9IGRhdGEucGFnZURhdGFbMF1cbiAgY29uc29sZS5sb2coZGF0YVswXS52aWRlb3MuYWxsVmlkZW9zKVxuXG4gIGNvbnN0IHZpZGVvcyA9IGRhdGEudmlkZW9zLmFsbFZpZGVvc1xuXG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgaGVpZ2h0OiAnMTgwJyxcbiAgICB3aWR0aDogJzMyMCcsXG4gIH1cbiAgXG4gIGxldCBuYXZEYXRhID0gW11cbiAgY29uc3QgbmF2ID0gZGF0YS5uYXZpZ2F0aW9uWzBdLm5hdmlnYXRpb25cbiAgZm9yIChsZXQgaSBpbiBuYXYpIHtcbiAgICBuYXZEYXRhLnB1c2goe3RpdGxlOiBuYXZbaV0udGl0bGUsIGhyZWY6IG5hdltpXS5zbHVnLmN1cnJlbnR9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtYi0zMlwiPlxuICAgICAgPE5hdmJhciBuYXZpZ2F0aW9uPXtuYXZEYXRhfSAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctc2xhdGUtMzAwIGRhcms6Ymctc2xhdGUtNTAwIGgtWzkwdmhdXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt1cmxGb3IocGFnZURhdGEuaGVyby5pbWFnZSkudXJsKCl9KWB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0xMCBwdC0xMiBtZDp3LTEvM1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTZ4bCBmb250LWJvbGQgdXBwZXJjYXNlXCI+e3BhZ2VEYXRhLmhlcm8uaGVhZGluZ308L2gxPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtM3hsXCI+e3BhZ2VEYXRhLmhlcm8udGFnbGluZX08L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BhZ2VEYXRhLmhlcm8uY3RhLmxpbmsuc2x1Zy5jdXJyZW50fT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS00IHB4LTUgdGV4dC1ibGFjayBob3ZlcjpiZy1zbGF0ZS04MDAgaG92ZXI6dGV4dC13aGl0ZVwiPntwYWdlRGF0YS5oZXJvLmN0YS50aXRsZX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+RmVhdHVyZWQgVmlkZW9zPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7dmlkZW9zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdtLTIgdy1mdWxsJz5cbiAgICAgICAgICAgICAgPFlvdVR1YmUga2V5PXtpbmRleH0gdmlkZW9JZD17Z2V0WW91VHViZUlkKGl0ZW0udXJsKX0gb3B0cz17b3B0c30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21haW4+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGNsaWVudC5mZXRjaChob21lcGFnZSlcbiAgLy8gY29uc29sZS5sb2coZGF0YSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiTGluayIsIk5hdmJhciIsInVybEZvciIsImdldFlvdVR1YmVJZCIsIllvdVR1YmUiLCJIb21lIiwiZGF0YSIsInBhZ2VEYXRhIiwiY29uc29sZSIsImxvZyIsInZpZGVvcyIsImFsbFZpZGVvcyIsIm9wdHMiLCJoZWlnaHQiLCJ3aWR0aCIsIm5hdkRhdGEiLCJuYXYiLCJuYXZpZ2F0aW9uIiwiaSIsInB1c2giLCJ0aXRsZSIsImhyZWYiLCJzbHVnIiwiY3VycmVudCIsIm1haW4iLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoZXJvIiwiaW1hZ2UiLCJ1cmwiLCJkaXYiLCJoMSIsImhlYWRpbmciLCJoMyIsInRhZ2xpbmUiLCJjdGEiLCJsaW5rIiwiYnV0dG9uIiwiaDIiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ2aWRlb0lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});