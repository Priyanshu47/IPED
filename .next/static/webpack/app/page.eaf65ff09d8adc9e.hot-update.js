"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/Pages/Authentication/Login.js":
/*!*******************************************!*\
  !*** ./src/Pages/Authentication/Login.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Assest_Languages_Defaulttext_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Assest/Languages/Defaulttext.json */ \"(app-pages-browser)/./src/Assest/Languages/Defaulttext.json\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/navbar */ \"(app-pages-browser)/./src/components/navbar.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _Assest_api_Authentication_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Assest/api/Authentication/Login */ \"(app-pages-browser)/./src/Assest/api/Authentication/Login.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Login = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [Valid, setValid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        let isValid = true;\n        let validationErrors = {};\n        if (formData.email === \"\" || formData.email === null) {\n            isValid = false;\n            validationErrors.email = \"Email Required\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(email)) {\n            isValid = false;\n            validationErrors.email = \"Email is not valid\";\n        }\n        if (formData.password === \"\" || formData.password === null) {\n            isValid = false;\n            validationErrors.password = \"Password Required\";\n        } else if (formData.password.length < 6) {\n            isValid = false;\n            validationErrors.email = \"Password must be at least 6 characters.\";\n        }\n    // axios.post(`http://localhost:8000/auth/login`)\n    // .then(result => {\n    //   result.data.map(user => {\n    //     id(user.email === formData.email) {\n    //       if(user.password === formData.password){\n    //         alert(\"Login successfully!\")\n    //       } else {\n    //         isValid = false;\n    //         validationErrors.password = \"Wrong Password\"\n    //       }\n    //     } else if(formData.email !== \"\") {\n    //      isValid = false;\n    //      validationErrors.email = \"Wrong Email\"\n    //    }\n    //   })\n    //   setErrors(validationErrors)\n    //   setValid(isValid)\n    // })\n    // .catch(err => console.log(err))\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Priyanshu\\\\Desktop\\\\IDP_Console_Admin\\\\src\\\\Pages\\\\Authentication\\\\Login.js\",\n                lineNumber: 65,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center min-h-[80vh] font-Mulish bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[430px] px-8 py-10 mx-auto bg-white border rounded-lg\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-base text-custom-red\",\n                            children: _Assest_Languages_Defaulttext_json__WEBPACK_IMPORTED_MODULE_2__.Login_Page.welcomemsg\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Priyanshu\\\\Desktop\\\\IDP_Console_Admin\\\\src\\\\Pages\\\\Authentication\\\\Login.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-2xl font-semibold\",\n                            children: _Assest_Languages_Defaulttext_json__WEBPACK_IMPORTED_MODULE_2__.Login_Page.login\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Priyanshu\\\\Desktop\\\\IDP_Console_Admin\\\\src\\\\Pages\\\\Authentication\\\\Login.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: _Assest_Languages_Defaulttext_json__WEBPACK_IMPORTED_MODULE_2__.Login_Page.email\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Priyanshu\\\\Desktop\\\\IDP_Console_Admin\\\\src\\\\Pages\\\\Authentication\\\\Login.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    className: \"border w-full py-2 px-2 rounded-md hover:border-indigo-600\",\n                                    placeholder: \"johndoe|\",\n                                    onChange: (event)=>setFormData({\n                                            ...formData,\n                                            email: event.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Priyanshu\\\\Desktop\\\\IDP_Console_Admin\\\\src\\\\Pages\\\\Authentication\\\\Login.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined),\n                                errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: styles.error,\n                                    children: errors.email\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Priyanshu\\\\Desktop\\\\IDP_Console_Admin\\\\src\\\\Pages\\\\Authentication\\\\Login.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 30\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Priyanshu\\\\Desktop\\\\IDP_Console_Admin\\\\src\\\\Pages\\\\Authentication\\\\Login.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: _Assest_Languages_Defaulttext_json__WEBPACK_IMPORTED_MODULE_2__.Login_Page.password\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Priyanshu\\\\Desktop\\\\IDP_Console_Admin\\\\src\\\\Pages\\\\Authentication\\\\Login.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"Password\",\n                                    className: \"border w-full py-2 px-2 text-neutral-500 rounded-md hover:border-indigo-600\",\n                                    placeholder: \"Enter Password\",\n                                    onChange: (event)=>setFormData({\n                                            ...formData,\n                                            password: event.target.value\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Priyanshu\\\\Desktop\\\\IDP_Console_Admin\\\\src\\\\Pages\\\\Authentication\\\\Login.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, undefined),\n                                errors.password && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: styles.error,\n                                    children: errors.password\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Priyanshu\\\\Desktop\\\\IDP_Console_Admin\\\\src\\\\Pages\\\\Authentication\\\\Login.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 34\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Priyanshu\\\\Desktop\\\\IDP_Console_Admin\\\\src\\\\Pages\\\\Authentication\\\\Login.js\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/dashboard\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"w-full h-12 px-3.5 py-2 bg-custom-blue rounded-3xl justify-center items-center gap-2.5 inline-flex text-white text-base font-bold font-Mulish leading-none\",\n                                onSubmit: handleSubmit,\n                                children: _Assest_Languages_Defaulttext_json__WEBPACK_IMPORTED_MODULE_2__.Login_Page.loginbtn\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Priyanshu\\\\Desktop\\\\IDP_Console_Admin\\\\src\\\\Pages\\\\Authentication\\\\Login.js\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Priyanshu\\\\Desktop\\\\IDP_Console_Admin\\\\src\\\\Pages\\\\Authentication\\\\Login.js\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center pt-5 text-custom-sky text-s font-normal font-Mulish underline\",\n                            children: _Assest_Languages_Defaulttext_json__WEBPACK_IMPORTED_MODULE_2__.Login_Page.cantaccess\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Priyanshu\\\\Desktop\\\\IDP_Console_Admin\\\\src\\\\Pages\\\\Authentication\\\\Login.js\",\n                            lineNumber: 105,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Priyanshu\\\\Desktop\\\\IDP_Console_Admin\\\\src\\\\Pages\\\\Authentication\\\\Login.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Priyanshu\\\\Desktop\\\\IDP_Console_Admin\\\\src\\\\Pages\\\\Authentication\\\\Login.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Login, \"xtaXS0n5058vlfMoeIF6IDIZ4O0=\");\n_c = Login;\nconst styles = {\n    error: {\n        color: \"red\",\n        fontSize: \"14px\",\n        marginBottom: \"6px\"\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9QYWdlcy9BdXRoZW50aWNhdGlvbi9Mb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUN3QztBQUN3QjtBQUN2QjtBQUNSO0FBQ1c7QUFDbEI7QUFDRztBQUNVO0FBQ2tCO0FBRXpELE1BQU1VLFFBQVE7O0lBQ1YsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO1FBQ3ZDWSxPQUFPO1FBQ1BDLFVBQVU7SUFDWjtJQUNBLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sQ0FBRWdCLE9BQU9DLFNBQVMsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRXBDLE1BQU1rQixlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUlDLFVBQVU7UUFDZCxJQUFJQyxtQkFBa0IsQ0FBQztRQUN2QixJQUFHWixTQUFTRSxLQUFLLEtBQUssTUFBTUYsU0FBU0UsS0FBSyxLQUFLLE1BQU07WUFDbkRTLFVBQVU7WUFDVkMsaUJBQWlCVixLQUFLLEdBQUc7UUFDM0IsT0FBTSxJQUFJLENBQUMsZUFBZVcsSUFBSSxDQUFDWCxRQUFRO1lBQ3JDUyxVQUFVO1lBQ1ZDLGlCQUFpQlYsS0FBSyxHQUFHO1FBQzNCO1FBQ0EsSUFBR0YsU0FBU0csUUFBUSxLQUFLLE1BQU1ILFNBQVNHLFFBQVEsS0FBSyxNQUFNO1lBQ3pEUSxVQUFVO1lBQ1ZDLGlCQUFpQlQsUUFBUSxHQUFHO1FBQzlCLE9BQU0sSUFBSUgsU0FBU0csUUFBUSxDQUFDVyxNQUFNLEdBQUcsR0FBRztZQUN0Q0gsVUFBVTtZQUNWQyxpQkFBaUJWLEtBQUssR0FBRztRQUMzQjtJQUdBLGlEQUFpRDtJQUNqRCxvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLDBDQUEwQztJQUMxQyxpREFBaUQ7SUFDakQsdUNBQXVDO0lBQ3ZDLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsdURBQXVEO0lBQ3ZELFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsd0JBQXdCO0lBQ3hCLDhDQUE4QztJQUM5QyxPQUFPO0lBQ1AsT0FBTztJQUNQLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFFdEIsS0FBSztJQUNMLGtDQUFrQztJQUVwQztJQUVGLHFCQUNFOzswQkFDQSw4REFBQ1YsMERBQUdBOzs7OzswQkFDRiw4REFBQ3VCO2dCQUFJQyxXQUFVOzBCQUViLDRFQUFDRDtvQkFBSUMsV0FBVTtvQkFBMERDLFVBQVVUOztzQ0FDakYsOERBQUNVOzRCQUFFRixXQUFVO3NDQUE2QnpCLHFGQUFnQzs7Ozs7O3NDQUMxRSw4REFBQzhCOzRCQUFHTCxXQUFVO3NDQUEwQnpCLGdGQUEyQjs7Ozs7O3NDQUNuRSw4REFBQ3dCOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ087OENBQU9oQyxnRkFBMkI7Ozs7Ozs4Q0FDbkMsOERBQUNpQztvQ0FDQ0MsTUFBSztvQ0FDTFQsV0FBVTtvQ0FDVlUsYUFBWTtvQ0FFWkMsVUFBVSxDQUFDQyxRQUNYM0IsWUFBWTs0Q0FBRSxHQUFHRCxRQUFROzRDQUFFRSxPQUFPMEIsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO3dDQUFBOzs7Ozs7Z0NBR3JEMUIsT0FBT0YsS0FBSyxrQkFBSSw4REFBQ2dCO29DQUFFYSxPQUFPQyxPQUFPQyxLQUFLOzhDQUFHN0IsT0FBT0YsS0FBSzs7Ozs7Ozs7Ozs7O3NDQUV0RCw4REFBQ2E7NEJBQUlDLFdBQVU7OzhDQUNmLDhEQUFDTzs4Q0FBT2hDLG1GQUE4Qjs7Ozs7OzhDQUN0Qyw4REFBQ2lDO29DQUNDQyxNQUFLO29DQUNMVCxXQUFVO29DQUNWVSxhQUFZO29DQUVaQyxVQUFVLENBQUNDLFFBQ1QzQixZQUFZOzRDQUFFLEdBQUdELFFBQVE7NENBQUVHLFVBQVV5QixNQUFNQyxNQUFNLENBQUNDLEtBQUs7d0NBQUE7Ozs7OztnQ0FHekQxQixPQUFPRCxRQUFRLGtCQUFJLDhEQUFDZTtvQ0FBRWEsT0FBT0MsT0FBT0MsS0FBSzs4Q0FBRzdCLE9BQU9ELFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHN0QsOERBQUNQLGtEQUFJQTs0QkFBQ3NDLE1BQUs7c0NBQ1gsNEVBQUNDO2dDQUFPbkIsV0FBVTtnQ0FDbEJDLFVBQVVUOzBDQUVQakIsbUZBQThCOzs7Ozs7Ozs7OztzQ0FHakMsOERBQUMyQjs0QkFBRUYsV0FBVTtzQ0FDVnpCLHFGQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0vQztHQXBHTVE7S0FBQUE7QUFxR04sTUFBTWlDLFNBQVM7SUFDYkMsT0FBTztRQUNISyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsY0FBYztJQUNsQjtBQUNGO0FBR0EsK0RBQWV6QyxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9QYWdlcy9BdXRoZW50aWNhdGlvbi9Mb2dpbi5qcz81NTUzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGVmYXVsdEVORyBmcm9tIFwiLi4vLi4vQXNzZXN0L0xhbmd1YWdlcy9EZWZhdWx0dGV4dC5qc29uXCJcclxuaW1wb3J0IE5hdiBmcm9tICcuLi8uLi9jb21wb25lbnRzL25hdmJhcidcclxuaW1wb3J0IHsgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IGxvZ2luQXBpIGZyb20gXCJAL0Fzc2VzdC9hcGkvQXV0aGVudGljYXRpb24vTG9naW5cIjtcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHt9KTsgXHJcbiAgICBjb25zdCBbIFZhbGlkLCBzZXRWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7IFxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgbGV0IHZhbGlkYXRpb25FcnJvcnMgPXt9XHJcbiAgICAgIGlmKGZvcm1EYXRhLmVtYWlsID09PSBcIlwiIHx8IGZvcm1EYXRhLmVtYWlsID09PSBudWxsKSB7XHJcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIHZhbGlkYXRpb25FcnJvcnMuZW1haWwgPSBcIkVtYWlsIFJlcXVpcmVkXCJcclxuICAgICAgfWVsc2UgaWYgKCEvXFxTK0BcXFMrXFwuXFxTKy8udGVzdChlbWFpbCkpIHtcclxuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5lbWFpbCA9IFwiRW1haWwgaXMgbm90IHZhbGlkXCJcclxuICAgICAgfVxyXG4gICAgICBpZihmb3JtRGF0YS5wYXNzd29yZCA9PT0gXCJcIiB8fCBmb3JtRGF0YS5wYXNzd29yZCA9PT0gbnVsbCkge1xyXG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLnBhc3N3b3JkID0gXCJQYXNzd29yZCBSZXF1aXJlZFwiXHJcbiAgICAgIH1lbHNlIGlmIChmb3JtRGF0YS5wYXNzd29yZC5sZW5ndGggPCA2KSB7XHJcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIHZhbGlkYXRpb25FcnJvcnMuZW1haWwgPSBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzLlwiXHJcbiAgICAgIH1cclxuICAgIFxyXG5cclxuICAgICAgLy8gYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2F1dGgvbG9naW5gKVxyXG4gICAgICAvLyAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAvLyAgIHJlc3VsdC5kYXRhLm1hcCh1c2VyID0+IHtcclxuICAgICAgLy8gICAgIGlkKHVzZXIuZW1haWwgPT09IGZvcm1EYXRhLmVtYWlsKSB7XHJcbiAgICAgIC8vICAgICAgIGlmKHVzZXIucGFzc3dvcmQgPT09IGZvcm1EYXRhLnBhc3N3b3JkKXtcclxuICAgICAgLy8gICAgICAgICBhbGVydChcIkxvZ2luIHN1Y2Nlc3NmdWxseSFcIilcclxuICAgICAgLy8gICAgICAgfSBlbHNlIHtcclxuICAgICAgLy8gICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgIC8vICAgICAgICAgdmFsaWRhdGlvbkVycm9ycy5wYXNzd29yZCA9IFwiV3JvbmcgUGFzc3dvcmRcIlxyXG4gICAgICAvLyAgICAgICB9XHJcbiAgICAgIC8vICAgICB9IGVsc2UgaWYoZm9ybURhdGEuZW1haWwgIT09IFwiXCIpIHtcclxuICAgICAgLy8gICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgIC8vICAgICAgdmFsaWRhdGlvbkVycm9ycy5lbWFpbCA9IFwiV3JvbmcgRW1haWxcIlxyXG4gICAgICAvLyAgICB9XHJcbiAgICAgIC8vICAgfSlcclxuICAgICAgLy8gICBzZXRFcnJvcnModmFsaWRhdGlvbkVycm9ycylcclxuICAgICAgLy8gICBzZXRWYWxpZChpc1ZhbGlkKVxyXG5cclxuICAgICAgLy8gfSlcclxuICAgICAgLy8gLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8TmF2Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1bODB2aF0gZm9udC1NdWxpc2ggYmctd2hpdGVcIj5cclxuICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs0MzBweF0gcHgtOCBweS0xMCBteC1hdXRvIGJnLXdoaXRlIGJvcmRlciByb3VuZGVkLWxnXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1jdXN0b20tcmVkXCI+e0RlZmF1bHRFTkcuTG9naW5fUGFnZS53ZWxjb21lbXNnfTwvcD5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+e0RlZmF1bHRFTkcuTG9naW5fUGFnZS5sb2dpbn08L2gzPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS01XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD57RGVmYXVsdEVORy5Mb2dpbl9QYWdlLmVtYWlsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHctZnVsbCBweS0yIHB4LTIgcm91bmRlZC1tZCBob3Zlcjpib3JkZXItaW5kaWdvLTYwMFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJqb2huZG9lfFwiXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiA8cCBzdHlsZT17c3R5bGVzLmVycm9yfT57ZXJyb3JzLmVtYWlsfTwvcD59IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS01XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD57RGVmYXVsdEVORy5Mb2dpbl9QYWdlLnBhc3N3b3JkfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHctZnVsbCBweS0yIHB4LTIgdGV4dC1uZXV0cmFsLTUwMCByb3VuZGVkLW1kIGhvdmVyOmJvcmRlci1pbmRpZ28tNjAwXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIHBhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgPHAgc3R5bGU9e3N0eWxlcy5lcnJvcn0+e2Vycm9ycy5wYXNzd29yZH08L3A+fSAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMiBweC0zLjUgcHktMiBiZy1jdXN0b20tYmx1ZSByb3VuZGVkLTN4bCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTIuNSBpbmxpbmUtZmxleCB0ZXh0LXdoaXRlIHRleHQtYmFzZSBmb250LWJvbGQgZm9udC1NdWxpc2ggbGVhZGluZy1ub25lXCJcclxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtEZWZhdWx0RU5HLkxvZ2luX1BhZ2UubG9naW5idG59XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTUgdGV4dC1jdXN0b20tc2t5IHRleHQtcyBmb250LW5vcm1hbCBmb250LU11bGlzaCB1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICB7RGVmYXVsdEVORy5Mb2dpbl9QYWdlLmNhbnRhY2Nlc3N9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5jb25zdCBzdHlsZXMgPSB7IFxyXG4gIGVycm9yOiB7IFxyXG4gICAgICBjb2xvcjogJ3JlZCcsIFxyXG4gICAgICBmb250U2l6ZTogJzE0cHgnLCBcclxuICAgICAgbWFyZ2luQm90dG9tOiAnNnB4JywgXHJcbiAgfSwgXHJcbn07IFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRlZmF1bHRFTkciLCJOYXYiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIkxpbmsiLCJ0b2FzdCIsImxvZ2luQXBpIiwiTG9naW4iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9ycyIsInNldEVycm9ycyIsIlZhbGlkIiwic2V0VmFsaWQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc1ZhbGlkIiwidmFsaWRhdGlvbkVycm9ycyIsInRlc3QiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsInAiLCJMb2dpbl9QYWdlIiwid2VsY29tZW1zZyIsImgzIiwibG9naW4iLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwic3R5bGUiLCJzdHlsZXMiLCJlcnJvciIsImhyZWYiLCJidXR0b24iLCJsb2dpbmJ0biIsImNhbnRhY2Nlc3MiLCJjb2xvciIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Pages/Authentication/Login.js\n"));

/***/ })

});