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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar projects = [{\n  title: \"Spot\",\n  description: \"A fun and interactive \",\n  image: \"test.png\",\n  tags: [\"TypeScript\", \"React\", \"GraphQL\", \"AWS\"],\n  visit: \"https://github.com/Solaire17/spot\",\n  source: \"https://main.d25ft2r3russkq.amplifyapp.com/\",\n  id: 0\n}, {\n  title: \"FoodAddict\",\n  description: \"Ensuring no food goes to waste by providing users with all the tools they need to take control of their pantry.\",\n  image: \"/images/foodaddict.png\",\n  tags: [\"React\", \"JavaScript\", \"Firebase\"],\n  source: \"https://www.foodadd.tech/\",\n  visit: \"https://github.com/RyanL123/HTN2020\",\n  id: 1\n}, {\n  title: \"Chemistry 11\",\n  description: \"A comprehensive study resource for students taking 11th grade chemistry. Includes search, visualization, and filtering tools for better experience.\",\n  image: \"c11.png\",\n  tags: [\"JavaScript\", \"HTML\", \"CSS\"],\n  visit: \"https://github.com/zhangandrew37/Chemistry-11\",\n  source: \"https://ryanl123.github.io/Chemistry-11/\",\n  id: 3\n}, {\n  title: \"ML Web App\",\n  description: \"A machine learning tool that allows professionals in any field to solve their challenges without the need of any in-depth programming training or knowledge.\",\n  image: \"/images/ml-app.png\",\n  tags: [\"Python\", \"scikit-learn\", \"Streamlit\"],\n  source: \"https://share.streamlit.io/zhangandrew37/ml-app/main/main.py\",\n  visit: \"https://github.com/zhangandrew37/ml-app\",\n  id: 2\n}, {\n  title: \"LifeSource Leak Detector\",\n  description: \"Tackling the global water crisis by innovating a cloud-based water leak detector for flood prevention using an OpenCV image recognition system in C++\",\n  image: \"/images/lifesource.png\",\n  tags: [\"C++\", \"Arduino\", \"Ubidots\"],\n  visit: \"https://github.com/zhangandrew37/LifeSource-Leak-Detector\",\n  id: 2\n}, {\n  title: \"JobEasy\",\n  description: \"A charitable website that assists immigrants in finding fair jobs for themselves based on their previous experience.\",\n  image: \"/images/jobeasy.png\",\n  tags: [\"React\", \"Gatsby\", \"Firebase\", \"Storybook\"],\n  source: \"https://job-easy.netlify.app/\",\n  visit: \"https://github.com/zhangandrew37/ics4u0-project\",\n  id: 1\n}];\nvar TimeLineData = [{\n  year: 2017,\n  text: \"Started my programming journey\"\n}, {\n  year: 2018,\n  text: \"Qualified for the 2018 FLL World Championships as 1 of 2 Canadian teams\"\n}, {\n  year: 2019,\n  text: \"Mentored MI3L School, a community robotics organization\"\n}, {\n  year: 2020,\n  text: \"Initiated an no-code ML software to make ML accessible for everyone\"\n}, {\n  year: 2021,\n  text: \"Began studying Computer Science at the University of Waterloo\"\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanM/ZTZmZCJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJ2aXNpdCIsInNvdXJjZSIsImlkIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsTUFEVDtBQUVFQyxhQUFXLEVBQUUsd0JBRmY7QUFHRUMsT0FBSyxFQUFFLFVBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsWUFBRCxFQUFlLE9BQWYsRUFBd0IsU0FBeEIsRUFBbUMsS0FBbkMsQ0FKUjtBQUtFQyxPQUFLLEVBQUUsbUNBTFQ7QUFNRUMsUUFBTSxFQUFFLDZDQU5WO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxZQURUO0FBRUVDLGFBQVcsRUFDVCxpSEFISjtBQUlFQyxPQUFLLEVBQUUsd0JBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsVUFBeEIsQ0FMUjtBQU1FRSxRQUFNLEVBQUUsMkJBTlY7QUFPRUQsT0FBSyxFQUFFLHFDQVBUO0FBUUVFLElBQUUsRUFBRTtBQVJOLENBVnNCLEVBb0J0QjtBQUNFTixPQUFLLEVBQUUsY0FEVDtBQUVFQyxhQUFXLEVBQ1QscUpBSEo7QUFJRUMsT0FBSyxFQUFFLFNBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsWUFBRCxFQUFlLE1BQWYsRUFBdUIsS0FBdkIsQ0FMUjtBQU1FQyxPQUFLLEVBQUUsK0NBTlQ7QUFPRUMsUUFBTSxFQUFFLDBDQVBWO0FBUUVDLElBQUUsRUFBRTtBQVJOLENBcEJzQixFQThCdEI7QUFDRU4sT0FBSyxFQUFFLFlBRFQ7QUFFRUMsYUFBVyxFQUNULDhKQUhKO0FBSUVDLE9BQUssRUFBRSxvQkFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVcsY0FBWCxFQUEyQixXQUEzQixDQUxSO0FBTUVFLFFBQU0sRUFBRSw4REFOVjtBQU9FRCxPQUFLLEVBQUUseUNBUFQ7QUFRRUUsSUFBRSxFQUFFO0FBUk4sQ0E5QnNCLEVBd0N0QjtBQUNFTixPQUFLLEVBQUUsMEJBRFQ7QUFFRUMsYUFBVyxFQUNULHVKQUhKO0FBSUVDLE9BQUssRUFBRSx3QkFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsU0FBUixFQUFtQixTQUFuQixDQUxSO0FBTUVDLE9BQUssRUFBRSwyREFOVDtBQU9FRSxJQUFFLEVBQUU7QUFQTixDQXhDc0IsRUFpRHRCO0FBQ0VOLE9BQUssRUFBRSxTQURUO0FBRUVDLGFBQVcsRUFDVCxzSEFISjtBQUlFQyxPQUFLLEVBQUUscUJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsVUFBcEIsRUFBZ0MsV0FBaEMsQ0FMUjtBQU1FRSxRQUFNLEVBQUUsK0JBTlY7QUFPRUQsT0FBSyxFQUFFLGlEQVBUO0FBUUVFLElBQUUsRUFBRTtBQVJOLENBakRzQixDQUFqQjtBQTZEQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQ0VELE1BQUksRUFBRSxJQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBRjBCLEVBTTFCO0FBQ0VELE1BQUksRUFBRSxJQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBTjBCLEVBVTFCO0FBQ0VELE1BQUksRUFBRSxJQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBVjBCLEVBYzFCO0FBQ0VELE1BQUksRUFBRSxJQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBZDBCLENBQXJCIiwiZmlsZSI6Ii4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJTcG90XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBmdW4gYW5kIGludGVyYWN0aXZlIFwiLFxuICAgIGltYWdlOiBcInRlc3QucG5nXCIsXG4gICAgdGFnczogW1wiVHlwZVNjcmlwdFwiLCBcIlJlYWN0XCIsIFwiR3JhcGhRTFwiLCBcIkFXU1wiXSxcbiAgICB2aXNpdDogXCJodHRwczovL2dpdGh1Yi5jb20vU29sYWlyZTE3L3Nwb3RcIixcbiAgICBzb3VyY2U6IFwiaHR0cHM6Ly9tYWluLmQyNWZ0MnIzcnVzc2txLmFtcGxpZnlhcHAuY29tL1wiLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRm9vZEFkZGljdFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJFbnN1cmluZyBubyBmb29kIGdvZXMgdG8gd2FzdGUgYnkgcHJvdmlkaW5nIHVzZXJzIHdpdGggYWxsIHRoZSB0b29scyB0aGV5IG5lZWQgdG8gdGFrZSBjb250cm9sIG9mIHRoZWlyIHBhbnRyeS5cIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2Zvb2RhZGRpY3QucG5nXCIsXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJKYXZhU2NyaXB0XCIsIFwiRmlyZWJhc2VcIl0sXG4gICAgc291cmNlOiBcImh0dHBzOi8vd3d3LmZvb2RhZGQudGVjaC9cIixcbiAgICB2aXNpdDogXCJodHRwczovL2dpdGh1Yi5jb20vUnlhbkwxMjMvSFROMjAyMFwiLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ2hlbWlzdHJ5IDExXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgY29tcHJlaGVuc2l2ZSBzdHVkeSByZXNvdXJjZSBmb3Igc3R1ZGVudHMgdGFraW5nIDExdGggZ3JhZGUgY2hlbWlzdHJ5LiBJbmNsdWRlcyBzZWFyY2gsIHZpc3VhbGl6YXRpb24sIGFuZCBmaWx0ZXJpbmcgdG9vbHMgZm9yIGJldHRlciBleHBlcmllbmNlLlwiLFxuICAgIGltYWdlOiBcImMxMS5wbmdcIixcbiAgICB0YWdzOiBbXCJKYXZhU2NyaXB0XCIsIFwiSFRNTFwiLCBcIkNTU1wiXSxcbiAgICB2aXNpdDogXCJodHRwczovL2dpdGh1Yi5jb20vemhhbmdhbmRyZXczNy9DaGVtaXN0cnktMTFcIixcbiAgICBzb3VyY2U6IFwiaHR0cHM6Ly9yeWFubDEyMy5naXRodWIuaW8vQ2hlbWlzdHJ5LTExL1wiLFxuICAgIGlkOiAzLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTUwgV2ViIEFwcFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIG1hY2hpbmUgbGVhcm5pbmcgdG9vbCB0aGF0IGFsbG93cyBwcm9mZXNzaW9uYWxzIGluIGFueSBmaWVsZCB0byBzb2x2ZSB0aGVpciBjaGFsbGVuZ2VzIHdpdGhvdXQgdGhlIG5lZWQgb2YgYW55IGluLWRlcHRoIHByb2dyYW1taW5nIHRyYWluaW5nIG9yIGtub3dsZWRnZS5cIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL21sLWFwcC5wbmdcIixcbiAgICB0YWdzOiBbXCJQeXRob25cIiwgXCJzY2lraXQtbGVhcm5cIiwgXCJTdHJlYW1saXRcIl0sXG4gICAgc291cmNlOiBcImh0dHBzOi8vc2hhcmUuc3RyZWFtbGl0LmlvL3poYW5nYW5kcmV3MzcvbWwtYXBwL21haW4vbWFpbi5weVwiLFxuICAgIHZpc2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS96aGFuZ2FuZHJldzM3L21sLWFwcFwiLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGlmZVNvdXJjZSBMZWFrIERldGVjdG9yXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRhY2tsaW5nIHRoZSBnbG9iYWwgd2F0ZXIgY3Jpc2lzIGJ5IGlubm92YXRpbmcgYSBjbG91ZC1iYXNlZCB3YXRlciBsZWFrIGRldGVjdG9yIGZvciBmbG9vZCBwcmV2ZW50aW9uIHVzaW5nIGFuIE9wZW5DViBpbWFnZSByZWNvZ25pdGlvbiBzeXN0ZW0gaW4gQysrXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9saWZlc291cmNlLnBuZ1wiLFxuICAgIHRhZ3M6IFtcIkMrK1wiLCBcIkFyZHVpbm9cIiwgXCJVYmlkb3RzXCJdLFxuICAgIHZpc2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS96aGFuZ2FuZHJldzM3L0xpZmVTb3VyY2UtTGVhay1EZXRlY3RvclwiLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiSm9iRWFzeVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGNoYXJpdGFibGUgd2Vic2l0ZSB0aGF0IGFzc2lzdHMgaW1taWdyYW50cyBpbiBmaW5kaW5nIGZhaXIgam9icyBmb3IgdGhlbXNlbHZlcyBiYXNlZCBvbiB0aGVpciBwcmV2aW91cyBleHBlcmllbmNlLlwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvam9iZWFzeS5wbmdcIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIkdhdHNieVwiLCBcIkZpcmViYXNlXCIsIFwiU3Rvcnlib29rXCJdLFxuICAgIHNvdXJjZTogXCJodHRwczovL2pvYi1lYXN5Lm5ldGxpZnkuYXBwL1wiLFxuICAgIHZpc2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS96aGFuZ2FuZHJldzM3L2ljczR1MC1wcm9qZWN0XCIsXG4gICAgaWQ6IDEsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6IDIwMTcsIHRleHQ6IFwiU3RhcnRlZCBteSBwcm9ncmFtbWluZyBqb3VybmV5XCIgfSxcbiAge1xuICAgIHllYXI6IDIwMTgsXG4gICAgdGV4dDogXCJRdWFsaWZpZWQgZm9yIHRoZSAyMDE4IEZMTCBXb3JsZCBDaGFtcGlvbnNoaXBzIGFzIDEgb2YgMiBDYW5hZGlhbiB0ZWFtc1wiLFxuICB9LFxuICB7XG4gICAgeWVhcjogMjAxOSxcbiAgICB0ZXh0OiBcIk1lbnRvcmVkIE1JM0wgU2Nob29sLCBhIGNvbW11bml0eSByb2JvdGljcyBvcmdhbml6YXRpb25cIixcbiAgfSxcbiAge1xuICAgIHllYXI6IDIwMjAsXG4gICAgdGV4dDogXCJJbml0aWF0ZWQgYW4gbm8tY29kZSBNTCBzb2Z0d2FyZSB0byBtYWtlIE1MIGFjY2Vzc2libGUgZm9yIGV2ZXJ5b25lXCIsXG4gIH0sXG4gIHtcbiAgICB5ZWFyOiAyMDIxLFxuICAgIHRleHQ6IFwiQmVnYW4gc3R1ZHlpbmcgQ29tcHV0ZXIgU2NpZW5jZSBhdCB0aGUgVW5pdmVyc2l0eSBvZiBXYXRlcmxvb1wiLFxuICB9LFxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n");

/***/ })

});