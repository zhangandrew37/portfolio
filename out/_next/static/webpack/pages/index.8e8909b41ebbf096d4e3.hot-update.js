/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar projects = [{\n  title: \"Spot\",\n  description: \"A fun and interactive housing marketplace landlords created by university students. Swipe to rent and get matched with a dynamic ELO system.\",\n  image: \"test.png\",\n  tags: [\"TypeScript\", \"React\", \"GraphQL\", \"AWS\"],\n  visit: \"https://github.com/Solaire17/spot\",\n  source: \"https://main.d25ft2r3russkq.amplifyapp.com/\",\n  id: 0\n}, {\n  title: \"LifeSource Leak Detector\",\n  description: \"Tackling the global water crisis by innovating a cloud-based water leak detector for flood prevention using an OpenCV image recognition system in C++\",\n  image: \"/images/lifesource.png\",\n  tags: [\"C++\", \"Arduino\", \"Ubidots\"],\n  visit: \"https://github.com/zhangandrew37/LifeSource-Leak-Detector\",\n  id: 1\n}, {\n  title: \"ML Web App\",\n  description: \"A machine learning tool that allows professionals in any field to solve their challenges without the need of any in-depth programming training or knowledge.\",\n  image: \"/images/ml-app.png\",\n  tags: [\"Python\", \"scikit-learn\", \"Streamlit\"],\n  source: \"https://share.streamlit.io/zhangandrew37/ml-app/main/main.py\",\n  visit: \"https://github.com/zhangandrew37/ml-app\",\n  id: 2\n}, {\n  title: \"FoodAddict\",\n  description: \"Ensuring no food goes to waste by providing users with all the tools they need to take control of their pantry.\",\n  image: \"/images/foodaddict.png\",\n  tags: [\"React\", \"JavaScript\", \"Firebase\"],\n  source: \"https://www.foodadd.tech/\",\n  visit: \"https://github.com/RyanL123/HTN2020\",\n  id: 3\n}, {\n  title: \"Chemistry 11\",\n  description: \"A handy and comprehensive study resource for students taking 11th grade chemistry. Includes search, visualization, and filtering tools for better experience.\",\n  image: \"c11.png\",\n  tags: [\"JavaScript\", \"HTML\", \"CSS\"],\n  visit: \"https://github.com/zhangandrew37/Chemistry-11\",\n  source: \"https://ryanl123.github.io/Chemistry-11/\",\n  id: 4\n}, {\n  title: \"JobEasy\",\n  description: \"A charitable website that assists immigrants in finding fair jobs for themselves based on their previous experience.\",\n  image: \"/images/jobeasy.png\",\n  tags: [\"React\", \"Gatsby\", \"Firebase\", \"Storybook\"],\n  source: \"https://job-easy.netlify.app/\",\n  visit: \"https://github.com/zhangandrew37/ics4u0-project\",\n  id: 5\n}];\nvar TimeLineData = [{\n  year: 2017,\n  text: \"Started my programming journey\"\n}, {\n  year: 2018,\n  text: \"Qualified for the 2018 FLL World Championships as 1 of 2 Canadian teams\"\n}, {\n  year: 2019,\n  text: \"Mentored MI3L School, a community robotics organization\"\n}, {\n  year: 2020,\n  text: \"Initiated an no-code ML software to make ML accessible for everyone\"\n}, {\n  year: 2021,\n  text: \"Began studying Computer Science at the University of Waterloo\"\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanM/ZTZmZCJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJ2aXNpdCIsInNvdXJjZSIsImlkIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsTUFEVDtBQUVFQyxhQUFXLEVBQ1QsOElBSEo7QUFJRUMsT0FBSyxFQUFFLFVBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsWUFBRCxFQUFlLE9BQWYsRUFBd0IsU0FBeEIsRUFBbUMsS0FBbkMsQ0FMUjtBQU1FQyxPQUFLLEVBQUUsbUNBTlQ7QUFPRUMsUUFBTSxFQUFFLDZDQVBWO0FBUUVDLElBQUUsRUFBRTtBQVJOLENBRHNCLEVBV3RCO0FBQ0VOLE9BQUssRUFBRSwwQkFEVDtBQUVFQyxhQUFXLEVBQ1QsdUpBSEo7QUFJRUMsT0FBSyxFQUFFLHdCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxTQUFSLEVBQW1CLFNBQW5CLENBTFI7QUFNRUMsT0FBSyxFQUFFLDJEQU5UO0FBT0VFLElBQUUsRUFBRTtBQVBOLENBWHNCLEVBb0J0QjtBQUNFTixPQUFLLEVBQUUsWUFEVDtBQUVFQyxhQUFXLEVBQ1QsOEpBSEo7QUFJRUMsT0FBSyxFQUFFLG9CQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxjQUFYLEVBQTJCLFdBQTNCLENBTFI7QUFNRUUsUUFBTSxFQUFFLDhEQU5WO0FBT0VELE9BQUssRUFBRSx5Q0FQVDtBQVFFRSxJQUFFLEVBQUU7QUFSTixDQXBCc0IsRUE4QnRCO0FBQ0VOLE9BQUssRUFBRSxZQURUO0FBRUVDLGFBQVcsRUFDVCxpSEFISjtBQUlFQyxPQUFLLEVBQUUsd0JBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsVUFBeEIsQ0FMUjtBQU1FRSxRQUFNLEVBQUUsMkJBTlY7QUFPRUQsT0FBSyxFQUFFLHFDQVBUO0FBUUVFLElBQUUsRUFBRTtBQVJOLENBOUJzQixFQXdDdEI7QUFDRU4sT0FBSyxFQUFFLGNBRFQ7QUFFRUMsYUFBVyxFQUNULCtKQUhKO0FBSUVDLE9BQUssRUFBRSxTQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLFlBQUQsRUFBZSxNQUFmLEVBQXVCLEtBQXZCLENBTFI7QUFNRUMsT0FBSyxFQUFFLCtDQU5UO0FBT0VDLFFBQU0sRUFBRSwwQ0FQVjtBQVFFQyxJQUFFLEVBQUU7QUFSTixDQXhDc0IsRUFrRHRCO0FBQ0VOLE9BQUssRUFBRSxTQURUO0FBRUVDLGFBQVcsRUFDVCxzSEFISjtBQUlFQyxPQUFLLEVBQUUscUJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsVUFBcEIsRUFBZ0MsV0FBaEMsQ0FMUjtBQU1FRSxRQUFNLEVBQUUsK0JBTlY7QUFPRUQsT0FBSyxFQUFFLGlEQVBUO0FBUUVFLElBQUUsRUFBRTtBQVJOLENBbERzQixDQUFqQjtBQThEQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQ0VELE1BQUksRUFBRSxJQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBRjBCLEVBTTFCO0FBQ0VELE1BQUksRUFBRSxJQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBTjBCLEVBVTFCO0FBQ0VELE1BQUksRUFBRSxJQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBVjBCLEVBYzFCO0FBQ0VELE1BQUksRUFBRSxJQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBZDBCLENBQXJCIiwiZmlsZSI6Ii4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJTcG90XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgZnVuIGFuZCBpbnRlcmFjdGl2ZSBob3VzaW5nIG1hcmtldHBsYWNlIGxhbmRsb3JkcyBjcmVhdGVkIGJ5IHVuaXZlcnNpdHkgc3R1ZGVudHMuIFN3aXBlIHRvIHJlbnQgYW5kIGdldCBtYXRjaGVkIHdpdGggYSBkeW5hbWljIEVMTyBzeXN0ZW0uXCIsXG4gICAgaW1hZ2U6IFwidGVzdC5wbmdcIixcbiAgICB0YWdzOiBbXCJUeXBlU2NyaXB0XCIsIFwiUmVhY3RcIiwgXCJHcmFwaFFMXCIsIFwiQVdTXCJdLFxuICAgIHZpc2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS9Tb2xhaXJlMTcvc3BvdFwiLFxuICAgIHNvdXJjZTogXCJodHRwczovL21haW4uZDI1ZnQycjNydXNza3EuYW1wbGlmeWFwcC5jb20vXCIsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMaWZlU291cmNlIExlYWsgRGV0ZWN0b3JcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGFja2xpbmcgdGhlIGdsb2JhbCB3YXRlciBjcmlzaXMgYnkgaW5ub3ZhdGluZyBhIGNsb3VkLWJhc2VkIHdhdGVyIGxlYWsgZGV0ZWN0b3IgZm9yIGZsb29kIHByZXZlbnRpb24gdXNpbmcgYW4gT3BlbkNWIGltYWdlIHJlY29nbml0aW9uIHN5c3RlbSBpbiBDKytcIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2xpZmVzb3VyY2UucG5nXCIsXG4gICAgdGFnczogW1wiQysrXCIsIFwiQXJkdWlub1wiLCBcIlViaWRvdHNcIl0sXG4gICAgdmlzaXQ6IFwiaHR0cHM6Ly9naXRodWIuY29tL3poYW5nYW5kcmV3MzcvTGlmZVNvdXJjZS1MZWFrLURldGVjdG9yXCIsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNTCBXZWIgQXBwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgbWFjaGluZSBsZWFybmluZyB0b29sIHRoYXQgYWxsb3dzIHByb2Zlc3Npb25hbHMgaW4gYW55IGZpZWxkIHRvIHNvbHZlIHRoZWlyIGNoYWxsZW5nZXMgd2l0aG91dCB0aGUgbmVlZCBvZiBhbnkgaW4tZGVwdGggcHJvZ3JhbW1pbmcgdHJhaW5pbmcgb3Iga25vd2xlZGdlLlwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvbWwtYXBwLnBuZ1wiLFxuICAgIHRhZ3M6IFtcIlB5dGhvblwiLCBcInNjaWtpdC1sZWFyblwiLCBcIlN0cmVhbWxpdFwiXSxcbiAgICBzb3VyY2U6IFwiaHR0cHM6Ly9zaGFyZS5zdHJlYW1saXQuaW8vemhhbmdhbmRyZXczNy9tbC1hcHAvbWFpbi9tYWluLnB5XCIsXG4gICAgdmlzaXQ6IFwiaHR0cHM6Ly9naXRodWIuY29tL3poYW5nYW5kcmV3MzcvbWwtYXBwXCIsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJGb29kQWRkaWN0XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkVuc3VyaW5nIG5vIGZvb2QgZ29lcyB0byB3YXN0ZSBieSBwcm92aWRpbmcgdXNlcnMgd2l0aCBhbGwgdGhlIHRvb2xzIHRoZXkgbmVlZCB0byB0YWtlIGNvbnRyb2wgb2YgdGhlaXIgcGFudHJ5LlwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvZm9vZGFkZGljdC5wbmdcIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIkphdmFTY3JpcHRcIiwgXCJGaXJlYmFzZVwiXSxcbiAgICBzb3VyY2U6IFwiaHR0cHM6Ly93d3cuZm9vZGFkZC50ZWNoL1wiLFxuICAgIHZpc2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS9SeWFuTDEyMy9IVE4yMDIwXCIsXG4gICAgaWQ6IDMsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDaGVtaXN0cnkgMTFcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBoYW5keSBhbmQgY29tcHJlaGVuc2l2ZSBzdHVkeSByZXNvdXJjZSBmb3Igc3R1ZGVudHMgdGFraW5nIDExdGggZ3JhZGUgY2hlbWlzdHJ5LiBJbmNsdWRlcyBzZWFyY2gsIHZpc3VhbGl6YXRpb24sIGFuZCBmaWx0ZXJpbmcgdG9vbHMgZm9yIGJldHRlciBleHBlcmllbmNlLlwiLFxuICAgIGltYWdlOiBcImMxMS5wbmdcIixcbiAgICB0YWdzOiBbXCJKYXZhU2NyaXB0XCIsIFwiSFRNTFwiLCBcIkNTU1wiXSxcbiAgICB2aXNpdDogXCJodHRwczovL2dpdGh1Yi5jb20vemhhbmdhbmRyZXczNy9DaGVtaXN0cnktMTFcIixcbiAgICBzb3VyY2U6IFwiaHR0cHM6Ly9yeWFubDEyMy5naXRodWIuaW8vQ2hlbWlzdHJ5LTExL1wiLFxuICAgIGlkOiA0LFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiSm9iRWFzeVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGNoYXJpdGFibGUgd2Vic2l0ZSB0aGF0IGFzc2lzdHMgaW1taWdyYW50cyBpbiBmaW5kaW5nIGZhaXIgam9icyBmb3IgdGhlbXNlbHZlcyBiYXNlZCBvbiB0aGVpciBwcmV2aW91cyBleHBlcmllbmNlLlwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvam9iZWFzeS5wbmdcIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIkdhdHNieVwiLCBcIkZpcmViYXNlXCIsIFwiU3Rvcnlib29rXCJdLFxuICAgIHNvdXJjZTogXCJodHRwczovL2pvYi1lYXN5Lm5ldGxpZnkuYXBwL1wiLFxuICAgIHZpc2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS96aGFuZ2FuZHJldzM3L2ljczR1MC1wcm9qZWN0XCIsXG4gICAgaWQ6IDUsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6IDIwMTcsIHRleHQ6IFwiU3RhcnRlZCBteSBwcm9ncmFtbWluZyBqb3VybmV5XCIgfSxcbiAge1xuICAgIHllYXI6IDIwMTgsXG4gICAgdGV4dDogXCJRdWFsaWZpZWQgZm9yIHRoZSAyMDE4IEZMTCBXb3JsZCBDaGFtcGlvbnNoaXBzIGFzIDEgb2YgMiBDYW5hZGlhbiB0ZWFtc1wiLFxuICB9LFxuICB7XG4gICAgeWVhcjogMjAxOSxcbiAgICB0ZXh0OiBcIk1lbnRvcmVkIE1JM0wgU2Nob29sLCBhIGNvbW11bml0eSByb2JvdGljcyBvcmdhbml6YXRpb25cIixcbiAgfSxcbiAge1xuICAgIHllYXI6IDIwMjAsXG4gICAgdGV4dDogXCJJbml0aWF0ZWQgYW4gbm8tY29kZSBNTCBzb2Z0d2FyZSB0byBtYWtlIE1MIGFjY2Vzc2libGUgZm9yIGV2ZXJ5b25lXCIsXG4gIH0sXG4gIHtcbiAgICB5ZWFyOiAyMDIxLFxuICAgIHRleHQ6IFwiQmVnYW4gc3R1ZHlpbmcgQ29tcHV0ZXIgU2NpZW5jZSBhdCB0aGUgVW5pdmVyc2l0eSBvZiBXYXRlcmxvb1wiLFxuICB9LFxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n");

/***/ })

});