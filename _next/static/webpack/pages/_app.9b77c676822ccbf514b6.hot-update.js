webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_evilon_PhpstormProjects_nevatrip_testcase_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Layout.module.css */ \"./styles/Layout.module.css\");\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/home/evilon/PhpstormProjects/nevatrip_testcase/pages/_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_evilon_PhpstormProjects_nevatrip_testcase_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar Header = antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Header,\n    Content = antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Content,\n    Footer = antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Footer;\nvar pageMap = {\n  tables: 'Задание 1',\n  time: 'Задание 2'\n};\n\nfunction MyApp(_ref) {\n  _s();\n\n  var _this = this;\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n    className: _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.layout,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Header, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"logo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"], {\n        theme: \"dark\",\n        mode: \"horizontal\",\n        selectedKeys: [router.pathname],\n        onSelect: function onSelect(_ref2) {\n          var key = _ref2.key;\n          return router.push(key);\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n          children: \"\\u0413\\u043B\\u0430\\u0432\\u043D\\u0430\\u044F\"\n        }, \"/\", false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n          children: \"\\u0417\\u0430\\u0434\\u0430\\u043D\\u0438\\u0435 1\"\n        }, \"/tables\", false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n          children: \"\\u0417\\u0430\\u0434\\u0430\\u043D\\u0438\\u0435 2\"\n        }, \"/time\", false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"\\u0422\\u0435\\u0441\\u0442\\u043E\\u0432\\u044B\\u0435 \\u0437\\u0430\\u0434\\u0430\\u043D\\u0438\\u044F\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/nevatrip_testcase/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Content, {\n      style: {\n        padding: '0 50px'\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Breadcrumb\"], {\n        style: {\n          margin: '16px 0'\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Breadcrumb\"].Item, {\n          onClick: function onClick() {\n            return router.push('/');\n          },\n          children: \"\\u0413\\u043B\\u0430\\u0432\\u043D\\u0430\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 9\n        }, this), router.pathname.split('/').map(function (pathPart, idx) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Breadcrumb\"].Item, {\n            children: pageMap[pathPart] || pathPart\n          }, idx, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 61\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Footer, {\n      style: {\n        textAlign: 'center'\n      },\n      children: \"Evil0n \\xA92021\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 11\n  }, this);\n}\n\n_s(MyApp, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIkhlYWRlciIsIkxheW91dCIsIkNvbnRlbnQiLCJGb290ZXIiLCJwYWdlTWFwIiwidGFibGVzIiwidGltZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwic3R5bGVzIiwibGF5b3V0IiwicGF0aG5hbWUiLCJrZXkiLCJwdXNoIiwicGFkZGluZyIsIm1hcmdpbiIsInNwbGl0IiwibWFwIiwicGF0aFBhcnQiLCJpZHgiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxNLEdBQTRCQywyQyxDQUE1QkQsTTtJQUFRRSxPLEdBQW9CRCwyQyxDQUFwQkMsTztJQUFTQyxNLEdBQVdGLDJDLENBQVhFLE07QUFDekIsSUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFFBQU0sRUFBRSxXQURNO0FBRWRDLE1BQUksRUFBRTtBQUZRLENBQWhCOztBQUtBLFNBQVNDLEtBQVQsT0FBeUM7QUFBQTs7QUFBQTs7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3ZDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxzQkFBUSxxRUFBQywyQ0FBRDtBQUFRLGFBQVMsRUFBRUMsZ0VBQU0sQ0FBQ0MsTUFBMUI7QUFBQSw0QkFDTixxRUFBQyxNQUFEO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMseUNBQUQ7QUFBTSxhQUFLLEVBQUMsTUFBWjtBQUFtQixZQUFJLEVBQUMsWUFBeEI7QUFBcUMsb0JBQVksRUFBRSxDQUFDSCxNQUFNLENBQUNJLFFBQVIsQ0FBbkQ7QUFBc0UsZ0JBQVEsRUFBRTtBQUFBLGNBQUVDLEdBQUYsU0FBRUEsR0FBRjtBQUFBLGlCQUFXTCxNQUFNLENBQUNNLElBQVAsQ0FBWUQsR0FBWixDQUFYO0FBQUEsU0FBaEY7QUFBQSxnQ0FDRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQTtBQUFBLFdBQWUsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQSxXQUFlLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBO0FBQUEsV0FBZSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE0sZUFTTixxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVE0sZUFhTixxRUFBQyxPQUFEO0FBQVMsV0FBSyxFQUFFO0FBQUVFLGVBQU8sRUFBRTtBQUFYLE9BQWhCO0FBQUEsOEJBQ0UscUVBQUMsK0NBQUQ7QUFBWSxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRTtBQUFWLFNBQW5CO0FBQUEsZ0NBQ0UscUVBQUMsK0NBQUQsQ0FBWSxJQUFaO0FBQWlCLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVIsTUFBTSxDQUFDTSxJQUFQLENBQVksR0FBWixDQUFOO0FBQUEsV0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFHSU4sTUFBTSxDQUFDSSxRQUFQLENBQWdCSyxLQUFoQixDQUFzQixHQUF0QixFQUEyQkMsR0FBM0IsQ0FBK0IsVUFBQ0MsUUFBRCxFQUFXQyxHQUFYO0FBQUEsOEJBQW1CLHFFQUFDLCtDQUFELENBQVksSUFBWjtBQUFBLHNCQUE0QmxCLE9BQU8sQ0FBQ2lCLFFBQUQsQ0FBUCxJQUFxQkE7QUFBakQsYUFBc0JDLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQW5CO0FBQUEsU0FBL0IsQ0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU9FLHFFQUFDLFNBQUQsb0JBQWViLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJNLGVBc0JOLHFFQUFDLE1BQUQ7QUFBUSxXQUFLLEVBQUU7QUFBRWMsaUJBQVMsRUFBRTtBQUFiLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0Qk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUF3QkQ7O0dBM0JRaEIsSztVQUNRSSxxRDs7O0tBRFJKLEs7QUE2Qk1BLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJ1xuaW1wb3J0IHsgQnJlYWRjcnVtYiwgTGF5b3V0LCBNZW51IH0gZnJvbSAnYW50ZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0xheW91dC5tb2R1bGUuY3NzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dFxuY29uc3QgcGFnZU1hcCA9IHtcbiAgdGFibGVzOiAn0JfQsNC00LDQvdC40LUgMScsXG4gIHRpbWU6ICfQl9Cw0LTQsNC90LjQtSAyJ1xufVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICByZXR1cm4gKDxMYXlvdXQgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0fT5cbiAgICA8SGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cbiAgICAgIDxNZW51IHRoZW1lPVwiZGFya1wiIG1vZGU9XCJob3Jpem9udGFsXCIgc2VsZWN0ZWRLZXlzPXtbcm91dGVyLnBhdGhuYW1lXX0gb25TZWxlY3Q9eyh7a2V5fSkgPT4gcm91dGVyLnB1c2goa2V5KX0+XG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiL1wiPtCT0LvQsNCy0L3QsNGPPC9NZW51Lkl0ZW0+XG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiL3RhYmxlc1wiPtCX0LDQtNCw0L3QuNC1IDE8L01lbnUuSXRlbT5cbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIvdGltZVwiPtCX0LDQtNCw0L3QuNC1IDI8L01lbnUuSXRlbT5cbiAgICAgIDwvTWVudT5cbiAgICA8L0hlYWRlcj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT7QotC10YHRgtC+0LLRi9C1INC30LDQtNCw0L3QuNGPPC90aXRsZT5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL25ldmF0cmlwX3Rlc3RjYXNlL2Zhdmljb24uaWNvXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPENvbnRlbnQgc3R5bGU9e3sgcGFkZGluZzogJzAgNTBweCcgfX0+XG4gICAgICA8QnJlYWRjcnVtYiBzdHlsZT17eyBtYXJnaW46ICcxNnB4IDAnIH19PlxuICAgICAgICA8QnJlYWRjcnVtYi5JdGVtIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9PtCT0LvQsNCy0L3QsNGPINGB0YLRgNCw0L3QuNGG0LA8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAge1xuICAgICAgICAgIHJvdXRlci5wYXRobmFtZS5zcGxpdCgnLycpLm1hcCgocGF0aFBhcnQsIGlkeCkgPT4gPEJyZWFkY3J1bWIuSXRlbSBrZXk9e2lkeH0+e3BhZ2VNYXBbcGF0aFBhcnRdIHx8IHBhdGhQYXJ0fTwvQnJlYWRjcnVtYi5JdGVtPilcbiAgICAgICAgfVxuICAgICAgPC9CcmVhZGNydW1iPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQ29udGVudD5cbiAgICA8Rm9vdGVyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+RXZpbDBuIMKpMjAyMTwvRm9vdGVyPlxuICA8L0xheW91dD4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})