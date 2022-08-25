"use strict";
exports.id = 47;
exports.ids = [47];
exports.modules = {

/***/ 8010:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Navbar({ navigation  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex space-x-4",
            children: navigation.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: item.href,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: item.title
                    })
                }, index))
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ch": () => (/* binding */ singleBlog),
/* harmony export */   "Xh": () => (/* binding */ homepage),
/* harmony export */   "jD": () => (/* binding */ portfolioPage),
/* harmony export */   "oX": () => (/* binding */ contactPage),
/* harmony export */   "qB": () => (/* binding */ blogPage),
/* harmony export */   "vI": () => (/* binding */ allPages)
/* harmony export */ });
const homepage = `{
    "pageData": *[_type == "page" && title == "Homepage"] {
        title,
        mainImage,
        hero {
            heading,
            tagline,
            image,
            cta {
                title,
                link->{
                    slug
                }
            }
        }
    },
    "navigation": *[_type == "siteSettings"]{
        navigation[]->{
            title,
            slug
        }
    }
}`;
const blogPage = `{
    "pageData": *[_type == "page" && title == "Blog Page"],
    "allPosts": *[_type == "post"] | order(_createdAt desc) {
        title,
        mainImage,
        excerpt,
        slug
    },
    "navigation": *[_type == "siteSettings"]{
        navigation[]->{
            title,
            slug
        }
    }
}`;
const singleBlog = `{
    "pageData": *[_type == "post" && slug.current == $slug][0],
    "navigation": *[_type == "siteSettings"]{
        navigation[]->{
            title,
            slug
        }
    }
}`;
const contactPage = `{
    "pageData": *[_type == "page" && title == "Contact"],
    "contactInfo": *[_type == "siteSettings"] {
        email,
        phone
    },
    "navigation": *[_type == "siteSettings"]{
        navigation[]->{
            title,
            slug
        }
    }
}`;
const portfolioPage = `{
    "pageData": *[_type == "page" && title == "Portfolio"],
    "portfolio": *[_type == "portfolio"],
    "navigation": *[_type == "siteSettings"]{
        navigation[]->{
            title,
            slug
        }
    }
}`;
const allPages = `{
    "pageData": *[_type == "page" && slug.current == $slug][0],
    "navigation": *[_type == "siteSettings"]{
        navigation[]->{
            title,
            slug
        }
    }
}`;


/***/ }),

/***/ 8209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ client)
});

// EXTERNAL MODULE: external "next-sanity"
var external_next_sanity_ = __webpack_require__(5879);
;// CONCATENATED MODULE: ./lib/config.js
const config = {
    dataset: "production" || 0,
    projectId: "edu3wmzo",
    apiVersion: "2021-08-11",
    useCdn: "production" === "production"
};

;// CONCATENATED MODULE: ./lib/sanity.js


if (!config.projectId) {
    throw Error("The Project ID is not set. Check your environment variables.");
}
const client = (0,external_next_sanity_.createClient)(config);


/***/ })

};
;