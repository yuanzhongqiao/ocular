"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/side-nav.tsx":
/*!*********************************!*\
  !*** ./components/side-nav.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SideNav: function() { return /* binding */ SideNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/utils */ \"./lib/utils.ts\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/button */ \"./components/ui/button.tsx\");\n/* harmony import */ var _user_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-nav */ \"./components/user-nav.tsx\");\n/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ui/tooltip */ \"./components/ui/tooltip.tsx\");\n/* harmony import */ var _components_theme_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/theme-toggle */ \"./components/theme-toggle.tsx\");\n/* harmony import */ var _barrel_optimize_names_BarChart2_Bot_HelpCircle_LayoutGrid_Search_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=BarChart2,Bot,HelpCircle,LayoutGrid,Search,Settings,Users!=!lucide-react */ \"__barrel_optimize__?names=BarChart2,Bot,HelpCircle,LayoutGrid,Search,Settings,Users!=!./node_modules/lucide-react/dist/esm/lucide-react.js\");\n/* __next_internal_client_entry_do_not_use__ SideNav auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst iconMapping = {\n    Search: _barrel_optimize_names_BarChart2_Bot_HelpCircle_LayoutGrid_Search_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_10__.Search,\n    Bot: _barrel_optimize_names_BarChart2_Bot_HelpCircle_LayoutGrid_Search_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_10__.Bot,\n    Settings: _barrel_optimize_names_BarChart2_Bot_HelpCircle_LayoutGrid_Search_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_10__.Settings,\n    HelpCircle: _barrel_optimize_names_BarChart2_Bot_HelpCircle_LayoutGrid_Search_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_10__.HelpCircle,\n    LayoutGrid: _barrel_optimize_names_BarChart2_Bot_HelpCircle_LayoutGrid_Search_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_10__.LayoutGrid,\n    BarChart2: _barrel_optimize_names_BarChart2_Bot_HelpCircle_LayoutGrid_Search_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_10__.BarChart2,\n    Users: _barrel_optimize_names_BarChart2_Bot_HelpCircle_LayoutGrid_Search_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_10__.Users\n};\nfunction SideNav(param) {\n    let { links, BottomLinks } = param;\n    _s();\n    const { theme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const isActive = (href)=>router.pathname === href;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-col space-y-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipProvider, {\n                    delayDuration: 0,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"block\",\n                            href: \"/dashboard/search\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: __webpack_require__(theme === \"dark\" ? /*! ./Ocular-logo-dark.svg */ \"./components/Ocular-logo-dark.svg\" : /*! ./Ocular-logo-light.svg */ \"./components/Ocular-logo-light.svg\").default,\n                                alt: \"AutoFlowAI\",\n                                width: 40,\n                                height: 40,\n                                className: \"mx-auto cursor-pointer rounded py-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        links.map((link, index)=>{\n                            const IconComponent = iconMapping[link.icon]; // Get the icon component based on the identifier\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__.Tooltip, {\n                                delayDuration: 0,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center space-x-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipTrigger, {\n                                            asChild: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: link.link,\n                                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)((0,_components_ui_button__WEBPACK_IMPORTED_MODULE_6__.buttonVariants)({\n                                                    variant: link.variant,\n                                                    size: \"icon\"\n                                                }), \"h-9 w-9 ${isActive(link.link) ? 'bg-accent' : 'bg-transparent'}\", link.variant === \"default\" && \"dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white\"),\n                                                children: [\n                                                    IconComponent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IconComponent, {\n                                                        style: {\n                                                            height: \"19px\",\n                                                            width: \"19px\"\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"sr-only\",\n                                                        children: link.title\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipContent, {\n                                            side: \"right\",\n                                            className: \"flex items-center gap-4\",\n                                            children: [\n                                                link.title,\n                                                link.label && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-muted-foreground ml-auto\",\n                                                    children: link.label\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-col items-center justify-center space-y-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_theme_toggle__WEBPACK_IMPORTED_MODULE_9__.ThemeToggle, {}, void 0, false, {\n                        fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipProvider, {\n                        delayDuration: 0,\n                        children: [\n                            BottomLinks.map((link, index)=>{\n                                const IconComponent = iconMapping[link.icon]; // Get the icon component based on the identifier\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__.Tooltip, {\n                                    delayDuration: 0,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center space-x-3\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipTrigger, {\n                                                asChild: true,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                    href: link.link,\n                                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)((0,_components_ui_button__WEBPACK_IMPORTED_MODULE_6__.buttonVariants)({\n                                                        variant: link.variant,\n                                                        size: \"icon\"\n                                                    }), \"h-9 w-9\", link.variant === \"default\" && \"dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white\"),\n                                                    children: [\n                                                        IconComponent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IconComponent, {\n                                                            style: {\n                                                                height: \"19px\",\n                                                                width: \"19px\"\n                                                            }\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                                            lineNumber: 107,\n                                                            columnNumber: 43\n                                                        }, this),\n                                                        \" \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"sr-only\",\n                                                            children: link.title\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                                            lineNumber: 108,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipContent, {\n                                                side: \"right\",\n                                                className: \"flex items-center gap-4\",\n                                                children: [\n                                                    link.title,\n                                                    link.label && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-muted-foreground ml-auto\",\n                                                        children: link.label\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                                        lineNumber: 114,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                                lineNumber: 111,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 19\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 17\n                                }, this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-border h-px w-full\"\n                            }, void 0, false, {\n                                fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_user_nav__WEBPACK_IMPORTED_MODULE_7__.UserNav, {}, void 0, false, {\n                                    fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/michaelmoyo/Desktop/Ocular AI/Ocular-core-ui/core-ui/components/side-nav.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(SideNav, \"WoZadmVgHGVrJ+uqvWVQ3r2U2jA=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = SideNav;\nvar _c;\n$RefreshReg$(_c, \"SideNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxPQUFPO3dEQUFFQyxNQUFNO29EQUFPLElBQ3JELFdBQ0FQLEtBQUtNLE9BQU8sS0FBSyxhQUFhOzt3REFHL0JKLCtCQUFpQiw4REFBQ0E7NERBQWNNLE9BQU87Z0VBQUVWLFFBQVE7Z0VBQVFELE9BQU87NERBQU87Ozs7Ozt3REFBTTtzRUFDOUUsOERBQUNZOzREQUFLbkIsV0FBVTtzRUFBV1UsS0FBS1UsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBR3pDLDhEQUFDekMsa0VBQWNBO2dEQUFDMEMsTUFBSztnREFBUXJCLFdBQVU7O29EQUNwQ1UsS0FBS1UsS0FBSztvREFDVlYsS0FBS1ksS0FBSyxrQkFDVCw4REFBQ0g7d0RBQUtuQixXQUFVO2tFQUNiVSxLQUFLWSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBbkJQWDs7Ozs7NEJBMEJsQjswQ0FDQSw4REFBQ0c7Z0NBQUlkLFdBQVU7Ozs7OzswQ0FDZiw4REFBQ2M7MENBQ0MsNEVBQUNyQyw4Q0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10QjtHQTVGZ0JjOztRQUNJbEIsaURBQVFBO1FBQ1hDLGtEQUFTQTs7O0tBRlZpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NpZGUtbmF2LnRzeD8wZGMwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcbmltcG9ydCB7IGJ1dHRvblZhcmlhbnRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIlxuaW1wb3J0IHsgVXNlck5hdiB9IGZyb20gXCIuL3VzZXItbmF2XCJcbmltcG9ydCB7XG4gIFRvb2x0aXAsXG4gIFRvb2x0aXBDb250ZW50LFxuICBUb29sdGlwVHJpZ2dlcixcbiAgVG9vbHRpcFByb3ZpZGVyXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdG9vbHRpcFwiXG5pbXBvcnQgeyBUaGVtZVRvZ2dsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdGhlbWUtdG9nZ2xlXCJcbmltcG9ydCB7IE5hdlByb3BzIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIlxuXG5pbXBvcnQge1xuICBTZWFyY2gsXG4gIEJvdCxcbiAgU2V0dGluZ3MsXG4gIEhlbHBDaXJjbGUsXG4gIExheW91dEdyaWQsXG4gIEJhckNoYXJ0MixcbiAgVXNlcnNcbn0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiXG5cbmNvbnN0IGljb25NYXBwaW5nID0ge1xuICBTZWFyY2g6IFNlYXJjaCxcbiAgQm90OiBCb3QsXG4gIFNldHRpbmdzOiBTZXR0aW5ncyxcbiAgSGVscENpcmNsZTogSGVscENpcmNsZSxcbiAgTGF5b3V0R3JpZCxcbiAgQmFyQ2hhcnQyLFxuICBVc2Vyc1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpZGVOYXYoeyBsaW5rcywgQm90dG9tTGlua3MgfTogTmF2UHJvcHMpICB7XG4gIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGlzQWN0aXZlID0gKGhyZWY6IHN0cmluZykgPT4gcm91dGVyLnBhdGhuYW1lID09PSBocmVmO1xuXG4gIHJldHVybiAoXG4gICAgPD4gXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTNcIj5cbiAgICAgICAgPFRvb2x0aXBQcm92aWRlciBkZWxheUR1cmF0aW9uPXswfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJibG9ja1wiIGhyZWY9XCIvZGFzaGJvYXJkL3NlYXJjaFwiPlxuICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKHRoZW1lID09PSAnZGFyaycgPyBcIi4vT2N1bGFyLWxvZ28tZGFyay5zdmdcIiA6IFwiLi9PY3VsYXItbG9nby1saWdodC5zdmdcIikuZGVmYXVsdH0gXG4gICAgICAgICAgICAgICAgYWx0PVwiQXV0b0Zsb3dBSVwiIFxuICAgICAgICAgICAgICAgIHdpZHRoPXs0MH0gXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs0MH0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBjdXJzb3ItcG9pbnRlciByb3VuZGVkIHB5LTJcIiBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAge2xpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IEljb25Db21wb25lbnQgPSBpY29uTWFwcGluZ1tsaW5rLmljb25dOyAvLyBHZXQgdGhlIGljb24gY29tcG9uZW50IGJhc2VkIG9uIHRoZSBpZGVudGlmaWVyXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VG9vbHRpcCBrZXk9e2luZGV4fSBkZWxheUR1cmF0aW9uPXswfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtM1wiPlxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXBUcmlnZ2VyIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay5saW5rfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25WYXJpYW50cyh7IHZhcmlhbnQ6IGxpbmsudmFyaWFudCwgc2l6ZTogXCJpY29uXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImgtOSB3LTkgJHtpc0FjdGl2ZShsaW5rLmxpbmspID8gJ2JnLWFjY2VudCcgOiAnYmctdHJhbnNwYXJlbnQnfVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluay52YXJpYW50ID09PSBcImRlZmF1bHRcIiAmJiBcImRhcms6YmctbXV0ZWQgZGFyazp0ZXh0LW11dGVkLWZvcmVncm91bmQgZGFyazpob3ZlcjpiZy1tdXRlZCBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7SWNvbkNvbXBvbmVudCAmJiA8SWNvbkNvbXBvbmVudCBzdHlsZT17eyBoZWlnaHQ6ICcxOXB4Jywgd2lkdGg6ICcxOXB4JyB9fSAvPn0gey8qIFJlbmRlciB0aGUgaWNvbiBjb21wb25lbnQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPntsaW5rLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwQ29udGVudCBzaWRlPVwicmlnaHRcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICB7bGluay50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAge2xpbmsubGFiZWwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGluay5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXBDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L1Rvb2x0aXBQcm92aWRlcj5cbiAgICAgIDwvdWw+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteS0zXCI+XG4gICAgICAgIDxUaGVtZVRvZ2dsZSAvPlxuICAgICAgICA8VG9vbHRpcFByb3ZpZGVyIGRlbGF5RHVyYXRpb249ezB9PlxuICAgICAgICAgIHtCb3R0b21MaW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IEljb25Db21wb25lbnQgPSBpY29uTWFwcGluZ1tsaW5rLmljb25dOyAvLyBHZXQgdGhlIGljb24gY29tcG9uZW50IGJhc2VkIG9uIHRoZSBpZGVudGlmaWVyXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFRvb2x0aXAga2V5PXtpbmRleH0gZGVsYXlEdXJhdGlvbj17MH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFRyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay5saW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uVmFyaWFudHMoeyB2YXJpYW50OiBsaW5rLnZhcmlhbnQsIHNpemU6IFwiaWNvblwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImgtOSB3LTlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay52YXJpYW50ID09PSBcImRlZmF1bHRcIiAmJiBcImRhcms6YmctbXV0ZWQgZGFyazp0ZXh0LW11dGVkLWZvcmVncm91bmQgZGFyazpob3ZlcjpiZy1tdXRlZCBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7SWNvbkNvbXBvbmVudCAmJiA8SWNvbkNvbXBvbmVudCBzdHlsZT17eyBoZWlnaHQ6ICcxOXB4Jywgd2lkdGg6ICcxOXB4JyB9fSAvPn0gey8qIFJlbmRlciB0aGUgaWNvbiBjb21wb25lbnQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+e2xpbmsudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBDb250ZW50IHNpZGU9XCJyaWdodFwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2xpbmsudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAge2xpbmsubGFiZWwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ib3JkZXIgaC1weCB3LWZ1bGxcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICA8VXNlck5hdiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Ub29sdGlwUHJvdmlkZXI+XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApO1xufVxuXG5cbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJ1c2VUaGVtZSIsInVzZVJvdXRlciIsImNuIiwiYnV0dG9uVmFyaWFudHMiLCJVc2VyTmF2IiwiVG9vbHRpcCIsIlRvb2x0aXBDb250ZW50IiwiVG9vbHRpcFRyaWdnZXIiLCJUb29sdGlwUHJvdmlkZXIiLCJUaGVtZVRvZ2dsZSIsIlNlYXJjaCIsIkJvdCIsIlNldHRpbmdzIiwiSGVscENpcmNsZSIsIkxheW91dEdyaWQiLCJCYXJDaGFydDIiLCJVc2VycyIsImljb25NYXBwaW5nIiwiU2lkZU5hdiIsImxpbmtzIiwiQm90dG9tTGlua3MiLCJ0aGVtZSIsInJvdXRlciIsImlzQWN0aXZlIiwiaHJlZiIsInBhdGhuYW1lIiwidWwiLCJjbGFzc05hbWUiLCJkZWxheUR1cmF0aW9uIiwiYSIsInNyYyIsInJlcXVpcmUiLCJkZWZhdWx0IiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJJY29uQ29tcG9uZW50IiwiaWNvbiIsImRpdiIsImFzQ2hpbGQiLCJ2YXJpYW50Iiwic2l6ZSIsInN0eWxlIiwic3BhbiIsInRpdGxlIiwic2lkZSIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/side-nav.tsx\n"));

/***/ })

});