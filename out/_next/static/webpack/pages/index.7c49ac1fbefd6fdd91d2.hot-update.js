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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar projects = [{\n  title: \"Spot\",\n  description: \"A fun and interactive \",\n  image: \"test.png\",\n  tags: [\"TypeScript\", \"React\", \"GraphQL\", \"AWS\"],\n  source: \"https://github.com/Solaire17/spot\",\n  visit: \"https://main.d25ft2r3russkq.amplifyapp.com/\",\n  id: 0\n}, {\n  title: \"FoodAddict\",\n  description: \"Ensuring no food goes to waste by providing users with all the tools they need to take control of their pantry.\",\n  image: \"/images/foodaddict.png\",\n  tags: [\"React\", \"JavaScript\", \"Firebase\"],\n  source: \"https://www.foodadd.tech/\",\n  visit: \"https://github.com/RyanL123/HTN2020\",\n  id: 1\n}, {\n  title: \"Chemistry 11\",\n  description: \"Tackling the global water crisis by innovating a cloud-based water leak detector for flood prevention using an OpenCV image recognition system in C++\",\n  image: \"c11.png\",\n  tags: [\"JavaScript\", \"HTML\", \"CSS\"],\n  visit: \"https://github.com/zhangandrew37/LifeSource-Leak-Detector\",\n  id: 3\n}, {\n  title: \"ML Web App\",\n  description: \"A machine learning tool that allows professionals in any field to solve their challenges without the need of any in-depth programming training or knowledge.\",\n  image: \"/images/ml-app.png\",\n  tags: [\"Python\", \"scikit-learn\", \"Streamlit\"],\n  source: \"https://share.streamlit.io/zhangandrew37/ml-app/main/main.py\",\n  visit: \"https://github.com/zhangandrew37/ml-app\",\n  id: 2\n}, {\n  title: \"LifeSource Leak Detector\",\n  description: \"Tackling the global water crisis by innovating a cloud-based water leak detector for flood prevention using an OpenCV image recognition system in C++\",\n  image: \"/images/lifesource.png\",\n  tags: [\"C++\", \"Arduino\", \"Ubidots\"],\n  visit: \"https://github.com/zhangandrew37/LifeSource-Leak-Detector\",\n  id: 2\n}, {\n  title: \"JobEasy\",\n  description: \"A charitable website that assists immigrants in finding fair jobs for themselves based on their previous experience.\",\n  image: \"/images/jobeasy.png\",\n  tags: [\"React\", \"Gatsby\", \"Firebase\", \"Storybook\"],\n  source: \"https://job-easy.netlify.app/\",\n  visit: \"https://github.com/zhangandrew37/ics4u0-project\",\n  id: 1\n}];\nvar TimeLineData = [{\n  year: 2017,\n  text: \"Started my programming journey\"\n}, {\n  year: 2018,\n  text: \"Qualified for the 2018 FLL World Championships as 1 of 2 Canadian teams\"\n}, {\n  year: 2019,\n  text: \"Mentored MI3L School, a community robotics organization\"\n}, {\n  year: 2020,\n  text: \"Initiated an no-code ML software to make ML accessible for everyone\"\n}, {\n  year: 2021,\n  text: \"Began studying Computer Science at the University of Waterloo\"\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanM/ZTZmZCJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsImlkIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsTUFEVDtBQUVFQyxhQUFXLEVBQUUsd0JBRmY7QUFHRUMsT0FBSyxFQUFFLFVBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsWUFBRCxFQUFlLE9BQWYsRUFBd0IsU0FBeEIsRUFBbUMsS0FBbkMsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsbUNBTFY7QUFNRUMsT0FBSyxFQUFFLDZDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxZQURUO0FBRUVDLGFBQVcsRUFDVCxpSEFISjtBQUlFQyxPQUFLLEVBQUUsd0JBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsVUFBeEIsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsMkJBTlY7QUFPRUMsT0FBSyxFQUFFLHFDQVBUO0FBUUVDLElBQUUsRUFBRTtBQVJOLENBVnNCLEVBb0J0QjtBQUNFTixPQUFLLEVBQUUsY0FEVDtBQUVFQyxhQUFXLEVBQ1QsdUpBSEo7QUFJRUMsT0FBSyxFQUFFLFNBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsWUFBRCxFQUFlLE1BQWYsRUFBdUIsS0FBdkIsQ0FMUjtBQU1FRSxPQUFLLEVBQUUsMkRBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FwQnNCLEVBNkJ0QjtBQUNFTixPQUFLLEVBQUUsWUFEVDtBQUVFQyxhQUFXLEVBQ1QsOEpBSEo7QUFJRUMsT0FBSyxFQUFFLG9CQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxjQUFYLEVBQTJCLFdBQTNCLENBTFI7QUFNRUMsUUFBTSxFQUFFLDhEQU5WO0FBT0VDLE9BQUssRUFBRSx5Q0FQVDtBQVFFQyxJQUFFLEVBQUU7QUFSTixDQTdCc0IsRUF1Q3RCO0FBQ0VOLE9BQUssRUFBRSwwQkFEVDtBQUVFQyxhQUFXLEVBQ1QsdUpBSEo7QUFJRUMsT0FBSyxFQUFFLHdCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxTQUFSLEVBQW1CLFNBQW5CLENBTFI7QUFNRUUsT0FBSyxFQUFFLDJEQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBdkNzQixFQWdEdEI7QUFDRU4sT0FBSyxFQUFFLFNBRFQ7QUFFRUMsYUFBVyxFQUNULHNIQUhKO0FBSUVDLE9BQUssRUFBRSxxQkFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixVQUFwQixFQUFnQyxXQUFoQyxDQUxSO0FBTUVDLFFBQU0sRUFBRSwrQkFOVjtBQU9FQyxPQUFLLEVBQUUsaURBUFQ7QUFRRUMsSUFBRSxFQUFFO0FBUk4sQ0FoRHNCLENBQWpCO0FBNERBLElBQU1DLFlBQVksR0FBRyxDQUMxQjtBQUFFQyxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FEMEIsRUFFMUI7QUFDRUQsTUFBSSxFQUFFLElBRFI7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FGMEIsRUFNMUI7QUFDRUQsTUFBSSxFQUFFLElBRFI7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FOMEIsRUFVMUI7QUFDRUQsTUFBSSxFQUFFLElBRFI7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FWMEIsRUFjMUI7QUFDRUQsTUFBSSxFQUFFLElBRFI7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FkMEIsQ0FBckIiLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIlNwb3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGZ1biBhbmQgaW50ZXJhY3RpdmUgXCIsXG4gICAgaW1hZ2U6IFwidGVzdC5wbmdcIixcbiAgICB0YWdzOiBbXCJUeXBlU2NyaXB0XCIsIFwiUmVhY3RcIiwgXCJHcmFwaFFMXCIsIFwiQVdTXCJdLFxuICAgIHNvdXJjZTogXCJodHRwczovL2dpdGh1Yi5jb20vU29sYWlyZTE3L3Nwb3RcIixcbiAgICB2aXNpdDogXCJodHRwczovL21haW4uZDI1ZnQycjNydXNza3EuYW1wbGlmeWFwcC5jb20vXCIsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJGb29kQWRkaWN0XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkVuc3VyaW5nIG5vIGZvb2QgZ29lcyB0byB3YXN0ZSBieSBwcm92aWRpbmcgdXNlcnMgd2l0aCBhbGwgdGhlIHRvb2xzIHRoZXkgbmVlZCB0byB0YWtlIGNvbnRyb2wgb2YgdGhlaXIgcGFudHJ5LlwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvZm9vZGFkZGljdC5wbmdcIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIkphdmFTY3JpcHRcIiwgXCJGaXJlYmFzZVwiXSxcbiAgICBzb3VyY2U6IFwiaHR0cHM6Ly93d3cuZm9vZGFkZC50ZWNoL1wiLFxuICAgIHZpc2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS9SeWFuTDEyMy9IVE4yMDIwXCIsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDaGVtaXN0cnkgMTFcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGFja2xpbmcgdGhlIGdsb2JhbCB3YXRlciBjcmlzaXMgYnkgaW5ub3ZhdGluZyBhIGNsb3VkLWJhc2VkIHdhdGVyIGxlYWsgZGV0ZWN0b3IgZm9yIGZsb29kIHByZXZlbnRpb24gdXNpbmcgYW4gT3BlbkNWIGltYWdlIHJlY29nbml0aW9uIHN5c3RlbSBpbiBDKytcIixcbiAgICBpbWFnZTogXCJjMTEucG5nXCIsXG4gICAgdGFnczogW1wiSmF2YVNjcmlwdFwiLCBcIkhUTUxcIiwgXCJDU1NcIl0sXG4gICAgdmlzaXQ6IFwiaHR0cHM6Ly9naXRodWIuY29tL3poYW5nYW5kcmV3MzcvTGlmZVNvdXJjZS1MZWFrLURldGVjdG9yXCIsXG4gICAgaWQ6IDMsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNTCBXZWIgQXBwXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgbWFjaGluZSBsZWFybmluZyB0b29sIHRoYXQgYWxsb3dzIHByb2Zlc3Npb25hbHMgaW4gYW55IGZpZWxkIHRvIHNvbHZlIHRoZWlyIGNoYWxsZW5nZXMgd2l0aG91dCB0aGUgbmVlZCBvZiBhbnkgaW4tZGVwdGggcHJvZ3JhbW1pbmcgdHJhaW5pbmcgb3Iga25vd2xlZGdlLlwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvbWwtYXBwLnBuZ1wiLFxuICAgIHRhZ3M6IFtcIlB5dGhvblwiLCBcInNjaWtpdC1sZWFyblwiLCBcIlN0cmVhbWxpdFwiXSxcbiAgICBzb3VyY2U6IFwiaHR0cHM6Ly9zaGFyZS5zdHJlYW1saXQuaW8vemhhbmdhbmRyZXczNy9tbC1hcHAvbWFpbi9tYWluLnB5XCIsXG4gICAgdmlzaXQ6IFwiaHR0cHM6Ly9naXRodWIuY29tL3poYW5nYW5kcmV3MzcvbWwtYXBwXCIsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMaWZlU291cmNlIExlYWsgRGV0ZWN0b3JcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGFja2xpbmcgdGhlIGdsb2JhbCB3YXRlciBjcmlzaXMgYnkgaW5ub3ZhdGluZyBhIGNsb3VkLWJhc2VkIHdhdGVyIGxlYWsgZGV0ZWN0b3IgZm9yIGZsb29kIHByZXZlbnRpb24gdXNpbmcgYW4gT3BlbkNWIGltYWdlIHJlY29nbml0aW9uIHN5c3RlbSBpbiBDKytcIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2xpZmVzb3VyY2UucG5nXCIsXG4gICAgdGFnczogW1wiQysrXCIsIFwiQXJkdWlub1wiLCBcIlViaWRvdHNcIl0sXG4gICAgdmlzaXQ6IFwiaHR0cHM6Ly9naXRodWIuY29tL3poYW5nYW5kcmV3MzcvTGlmZVNvdXJjZS1MZWFrLURldGVjdG9yXCIsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJKb2JFYXN5XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgY2hhcml0YWJsZSB3ZWJzaXRlIHRoYXQgYXNzaXN0cyBpbW1pZ3JhbnRzIGluIGZpbmRpbmcgZmFpciBqb2JzIGZvciB0aGVtc2VsdmVzIGJhc2VkIG9uIHRoZWlyIHByZXZpb3VzIGV4cGVyaWVuY2UuXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9qb2JlYXN5LnBuZ1wiLFxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiR2F0c2J5XCIsIFwiRmlyZWJhc2VcIiwgXCJTdG9yeWJvb2tcIl0sXG4gICAgc291cmNlOiBcImh0dHBzOi8vam9iLWVhc3kubmV0bGlmeS5hcHAvXCIsXG4gICAgdmlzaXQ6IFwiaHR0cHM6Ly9naXRodWIuY29tL3poYW5nYW5kcmV3MzcvaWNzNHUwLXByb2plY3RcIixcbiAgICBpZDogMSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAxNywgdGV4dDogXCJTdGFydGVkIG15IHByb2dyYW1taW5nIGpvdXJuZXlcIiB9LFxuICB7XG4gICAgeWVhcjogMjAxOCxcbiAgICB0ZXh0OiBcIlF1YWxpZmllZCBmb3IgdGhlIDIwMTggRkxMIFdvcmxkIENoYW1waW9uc2hpcHMgYXMgMSBvZiAyIENhbmFkaWFuIHRlYW1zXCIsXG4gIH0sXG4gIHtcbiAgICB5ZWFyOiAyMDE5LFxuICAgIHRleHQ6IFwiTWVudG9yZWQgTUkzTCBTY2hvb2wsIGEgY29tbXVuaXR5IHJvYm90aWNzIG9yZ2FuaXphdGlvblwiLFxuICB9LFxuICB7XG4gICAgeWVhcjogMjAyMCxcbiAgICB0ZXh0OiBcIkluaXRpYXRlZCBhbiBuby1jb2RlIE1MIHNvZnR3YXJlIHRvIG1ha2UgTUwgYWNjZXNzaWJsZSBmb3IgZXZlcnlvbmVcIixcbiAgfSxcbiAge1xuICAgIHllYXI6IDIwMjEsXG4gICAgdGV4dDogXCJCZWdhbiBzdHVkeWluZyBDb21wdXRlciBTY2llbmNlIGF0IHRoZSBVbml2ZXJzaXR5IG9mIFdhdGVybG9vXCIsXG4gIH0sXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n");

/***/ })

});