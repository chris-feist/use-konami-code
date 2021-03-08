(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1071:function(module,exports,__webpack_require__){"use strict";__webpack_require__(8),__webpack_require__(3),__webpack_require__(49),__webpack_require__(1072),__webpack_require__(40),__webpack_require__(41),__webpack_require__(1073),__webpack_require__(31),__webpack_require__(42);var _clientApi=__webpack_require__(53),_clientLogger=__webpack_require__(35),_configFilename=__webpack_require__(1074);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1074:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1075:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(358).configure)([__webpack_require__(1076),__webpack_require__(1077)],module,!1)}).call(this,__webpack_require__(104)(module))},1076:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1076},1077:function(module,exports,__webpack_require__){var map={"./stories/index.stories.tsx":1087};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1077},1087:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return index_stories_Basic})),__webpack_require__.d(__webpack_exports__,"CustomTarget",(function(){return index_stories_CustomTarget}));__webpack_require__(4),__webpack_require__(17),__webpack_require__(15),__webpack_require__(3),__webpack_require__(9),__webpack_require__(12),__webpack_require__(20),__webpack_require__(14),__webpack_require__(13),__webpack_require__(16),__webpack_require__(10),__webpack_require__(5),__webpack_require__(25);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(87),react_toastify_esm=__webpack_require__(160),KANOMI_CODE=(__webpack_require__(1078),__webpack_require__(124),["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"]),src=function useKanomiCode(_ref){var onUnlock=_ref.onUnlock,_ref$sequence=_ref.sequence,inputSequence=void 0===_ref$sequence?KANOMI_CODE:_ref$sequence,onReset=_ref.onReset,onKeyPress=_ref.onKeyPress,_ref$target=_ref.target,target=void 0===_ref$target?window:_ref$target,index=react_default.a.useRef(0),sequence=react_default.a.useRef(inputSequence),mutableCallbacks=react_default.a.useRef({onUnlock:onUnlock,onReset:onReset,onKeyPress:onKeyPress});mutableCallbacks.current={onUnlock:onUnlock,onReset:onReset,onKeyPress:onKeyPress};var keyHandler=react_default.a.useCallback((function(event){var _mutableCallbacks$cur3,_mutableCallbacks$cur4,_mutableCallbacks$cur,_mutableCallbacks$cur2,key=event.key;key===sequence.current[index.current]?(null===(_mutableCallbacks$cur3=(_mutableCallbacks$cur4=mutableCallbacks.current).onKeyPress)||void 0===_mutableCallbacks$cur3||_mutableCallbacks$cur3.call(_mutableCallbacks$cur4,key,index.current,event),index.current+=1,index.current===sequence.current.length&&(mutableCallbacks.current.onUnlock(event),index.current=0)):(0!==index.current&&(null===(_mutableCallbacks$cur=(_mutableCallbacks$cur2=mutableCallbacks.current).onReset)||void 0===_mutableCallbacks$cur||_mutableCallbacks$cur.call(_mutableCallbacks$cur2,index.current,event)),index.current=0)}),[mutableCallbacks]);react_default.a.useEffect((function(){var _target$addEventListe;return null==target||null===(_target$addEventListe=target.addEventListener)||void 0===_target$addEventListe||_target$addEventListe.call(target,"keydown",keyHandler),function(){var _target$removeEventLi;null==target||null===(_target$removeEventLi=target.removeEventListener)||void 0===_target$removeEventLi||_target$removeEventLi.call(target,"keydown",keyHandler)}}),[target,keyHandler]),function areArraysEqual(arr1,arr2){return arr1===arr2||arr1.length===arr2.length&&arr1.every((function(value,index){return value===arr2[index]}))}(inputSequence,sequence.current)||(sequence.current=inputSequence,index.current=0)},jsx_runtime=__webpack_require__(88);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.default={title:"useKanomiCode",argTypes:{},parameters:{layout:"centered",options:{enableShortcuts:!1}}};var index_stories_ToastConfig=function ToastConfig(){return Object(jsx_runtime.jsx)(react_toastify_esm.a,{hideProgressBar:!0,closeButton:!1})};index_stories_ToastConfig.displayName="ToastConfig";var index_stories_Basic=function Basic(args){var _React$useState2=_slicedToArray(react_default.a.useState(3),2),lives=_React$useState2[0],setLives=_React$useState2[1];return src(Object.assign({},args,{onUnlock:function onUnlock(){Object(dist.action)("onUnlock")(),setLives(lives+30),react_toastify_esm.b.success("Unlocked 30 Lives!")},onKeyPress:function onKeyPress(key,index){return Object(dist.action)("onKeyPress")(key,index)},onReset:function onReset(distance){return Object(dist.action)("onReset")(distance)}})),Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsxs)("div",{children:["Lives remaining ",lives]}),Object(jsx_runtime.jsx)(index_stories_ToastConfig,{})]})};index_stories_Basic.displayName="Basic",index_stories_Basic.args={sequence:KANOMI_CODE};var index_stories_CustomTarget=function CustomTarget(args){var ref=react_default.a.useRef(),_React$useState4=_slicedToArray(react_default.a.useState(""),2),text=_React$useState4[0],setText=_React$useState4[1];return src(Object.assign({},args,{onUnlock:function onUnlock(){Object(dist.action)("onUnlock")(),setText(""),react_toastify_esm.b.success("Success!")},onKeyPress:function onKeyPress(key,index){Object(dist.action)("onKeyPress")(key,index),setText(text?"".concat(text).concat(key):key)},onReset:function onReset(distance){Object(dist.action)("onReset")(distance),setText(""),react_toastify_esm.b.error("Try again!")},target:ref.current})),Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("input",{ref:ref,placeholder:"Guess the password",inputMode:"text",value:text}),Object(jsx_runtime.jsx)(index_stories_ToastConfig,{})]})};index_stories_CustomTarget.displayName="CustomTarget",index_stories_CustomTarget.args={sequence:["k","a","n","o","m","i"]},index_stories_Basic.parameters=Object.assign({storySource:{source:"(args) => {\n  const [lives, setLives] = React.useState(3);\n\n  useKanomiCode({\n    ...args,\n    onUnlock: () => {\n      action('onUnlock')();\n      setLives(lives + 30);\n      toast.success('Unlocked 30 Lives!');\n    },\n    onKeyPress: (key, index) => action('onKeyPress')(key, index),\n    onReset: (distance) => action('onReset')(distance),\n  });\n\n  return (\n    <div>\n      <div>Lives remaining {lives}</div>\n\n      <ToastConfig />\n    </div>\n  );\n}"}},index_stories_Basic.parameters),index_stories_CustomTarget.parameters=Object.assign({storySource:{source:"(args) => {\n  const ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;\n  const [text, setText] = React.useState('');\n\n  useKanomiCode({\n    ...args,\n    onUnlock: () => {\n      action('onUnlock')();\n      setText('');\n      toast.success('Success!');\n    },\n    onKeyPress: (key, index) => {\n      action('onKeyPress')(key, index);\n      setText(text ? `${text}${key}` : key);\n    },\n    onReset: (distance) => {\n      action('onReset')(distance);\n      setText('');\n      toast.error('Try again!');\n    },\n    target: ref.current,\n  });\n\n  return (\n    <div>\n      <input\n        ref={ref}\n        placeholder=\"Guess the password\"\n        inputMode=\"text\"\n        value={text} />\n\n      <ToastConfig />\n    </div>\n  );\n}"}},index_stories_CustomTarget.parameters)},476:function(module,exports,__webpack_require__){__webpack_require__(477),__webpack_require__(633),__webpack_require__(634),__webpack_require__(792),__webpack_require__(1012),__webpack_require__(1045),__webpack_require__(1050),__webpack_require__(1062),__webpack_require__(1064),__webpack_require__(1069),__webpack_require__(1071),module.exports=__webpack_require__(1075)},544:function(module,exports){},634:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(358)}},[[476,1,2]]]);
//# sourceMappingURL=main.cf37ed466185a4dadadb.bundle.js.map