"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[737],{"./components/layout/TopbarDropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_TopbarDropdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/layout/TopbarDropdown.tsx"),_barrel_optimize_names_LogoutOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ant-design/icons/es/icons/LogoutOutlined.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Example/TopbarDropdown",component:_TopbarDropdown__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"]},Default={args:{user:{id:"1",name:"John Smith",role:"user",company:"PPMB"},menuitems:[{key:"1",label:"Settings"},{key:"2",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_LogoutOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.A,{}),label:"Logout"}]}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{\n  args: {\n    user: sampleUser,\n    menuitems: topbarItems\n  }\n}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./components/layout/TopbarDropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Dropdown_Space_antd__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/antd/es/dropdown/index.js")),_barrel_optimize_names_Dropdown_Space_antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/space/index.js"),_barrel_optimize_names_DownOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ant-design/icons/es/icons/DownOutlined.js");__webpack_require__("./node_modules/console-browserify/index.js");const TopbarDropdown=param=>{let{user,menuitems}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Dropdown_Space_antd__WEBPACK_IMPORTED_MODULE_2__.A,{menu:{items:menuitems},trigger:["click"],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{onClick:e=>e.preventDefault(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Dropdown_Space_antd__WEBPACK_IMPORTED_MODULE_3__.A,{children:[user.name,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_DownOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.A,{})]})})})},__WEBPACK_DEFAULT_EXPORT__=TopbarDropdown;TopbarDropdown.__docgenInfo={description:"",methods:[],displayName:"TopbarDropdown",props:{user:{required:!0,tsType:{name:"User"},description:"User type that contains user info to display into header"},menuitems:{required:!0,tsType:{name:"MenuProps['items']",raw:"MenuProps['items']"},description:"Item list for the dropdown content"}}}}}]);