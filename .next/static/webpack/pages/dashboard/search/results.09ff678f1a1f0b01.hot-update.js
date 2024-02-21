"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/search/results",{

/***/ "./components/search/header.tsx":
/*!**************************************!*\
  !*** ./components/search/header.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var _header_filter_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-filter-toolbar */ \"./components/search/header-filter-toolbar.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            if (window.scrollY > 0) {\n                setIsScrolled(true);\n            } else {\n                setIsScrolled(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    const search = (e)=>{\n        e.preventDefault();\n        if (!searchInput.trim()) return;\n        router.push(\"/dashboard/search/results?term=\".concat(searchInput));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"sticky top-0 z-10 bg-white dark:bg-primary-dark transition-shadow duration-500 \".concat(isScrolled ? \"shadow-md\" : \"shadow-none\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between p-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: search,\n                    className: \"flex w-full max-w-xl items-center space-x-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: searchInput,\n                            onChange: (e)=>setSearchInput(e.target.value),\n                            placeholder: \"Search for anything here\",\n                            className: \"w-full px-4 py-2 border rounded-full focus:outline-none\"\n                        }, void 0, false, {\n                            fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/search/header.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.XIcon, {\n                            className: \"h-5 w-5 cursor-pointer\",\n                            onClick: ()=>setSearchInput(\"\")\n                        }, void 0, false, {\n                            fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/search/header.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.SearchIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/search/header.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/search/header.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/search/header.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            isScrolled && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_filter_toolbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/search/header.tsx\",\n                lineNumber: 45,\n                columnNumber: 22\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/search/header.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"Q9Z3r8xz6GeqvXbVt4Qs9BYGhcE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlYXJjaC9oZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDbUI7QUFDRDtBQUUzQyxTQUFTTzs7SUFDdEIsTUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUM7SUFFN0NDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsZUFBZTtZQUNuQixJQUFJQyxPQUFPQyxPQUFPLEdBQUcsR0FBRztnQkFDdEJILGNBQWM7WUFDaEIsT0FBTztnQkFDTEEsY0FBYztZQUNoQjtRQUNGO1FBRUFFLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBQ2xDLE9BQU8sSUFBTUMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7SUFDcEQsR0FBRyxFQUFFO0lBRUwsTUFBTUssU0FBUyxDQUFDQztRQUNkQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUksQ0FBQ1gsWUFBWVksSUFBSSxJQUFJO1FBQ3pCYixPQUFPYyxJQUFJLENBQUMsa0NBQThDLE9BQVpiO0lBQ2hEO0lBRUEscUJBQ0UsOERBQUNjO1FBQU9DLFdBQVcsa0ZBQTJILE9BQXpDYixhQUFhLGNBQWM7OzBCQUM5SCw4REFBQ2M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNFO29CQUFLQyxVQUFVVDtvQkFBUU0sV0FBVTs7c0NBQ2hDLDhEQUFDSTs0QkFDQ0MsTUFBSzs0QkFDTEMsT0FBT3JCOzRCQUNQc0IsVUFBVSxDQUFDWixJQUFNVCxlQUFlUyxFQUFFYSxNQUFNLENBQUNGLEtBQUs7NEJBQzlDRyxhQUFZOzRCQUNaVCxXQUFVOzs7Ozs7c0NBRVosOERBQUNwQix5REFBS0E7NEJBQUNvQixXQUFVOzRCQUF5QlUsU0FBUyxJQUFNeEIsZUFBZTs7Ozs7O3NDQUN4RSw4REFBQ0wsOERBQVVBOzRCQUFDbUIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHekJiLDRCQUFjLDhEQUFDTCw4REFBbUJBOzs7Ozs7Ozs7OztBQUd6QztHQTFDd0JDOztRQUNQSixrREFBU0E7OztLQURGSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NlYXJjaC9oZWFkZXIudHN4PzFlZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgWEljb24sIFNlYXJjaEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xuaW1wb3J0IEhlYWRlckZpbHRlclRvb2xiYXIgZnJvbSBcIi4vaGVhZGVyLWZpbHRlci10b29sYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc1Njcm9sbGVkLCBzZXRJc1Njcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDApIHtcbiAgICAgICAgc2V0SXNTY3JvbGxlZCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldElzU2Nyb2xsZWQoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2VhcmNoID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFzZWFyY2hJbnB1dC50cmltKCkpIHJldHVybjtcbiAgICByb3V0ZXIucHVzaChgL2Rhc2hib2FyZC9zZWFyY2gvcmVzdWx0cz90ZXJtPSR7c2VhcmNoSW5wdXR9YCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17YHN0aWNreSB0b3AtMCB6LTEwIGJnLXdoaXRlIGRhcms6YmctcHJpbWFyeS1kYXJrIHRyYW5zaXRpb24tc2hhZG93IGR1cmF0aW9uLTUwMCAke2lzU2Nyb2xsZWQgPyAnc2hhZG93LW1kJyA6ICdzaGFkb3ctbm9uZSd9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTZcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlYXJjaH0gY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgbWF4LXcteGwgaXRlbXMtY2VudGVyIHNwYWNlLXgtM1wiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYW55dGhpbmcgaGVyZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIGJvcmRlciByb3VuZGVkLWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxYSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01IGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4gc2V0U2VhcmNoSW5wdXQoXCJcIil9IC8+XG4gICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAge2lzU2Nyb2xsZWQgJiYgPEhlYWRlckZpbHRlclRvb2xiYXIgLz59XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIlhJY29uIiwiU2VhcmNoSWNvbiIsIkhlYWRlckZpbHRlclRvb2xiYXIiLCJIZWFkZXIiLCJyb3V0ZXIiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwiaXNTY3JvbGxlZCIsInNldElzU2Nyb2xsZWQiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwicHVzaCIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/search/header.tsx\n"));

/***/ })

});