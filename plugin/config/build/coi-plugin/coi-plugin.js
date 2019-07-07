define("coi-plugin",["react","react-dom"],function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){var o,r,a;r=[t],void 0===(a="function"==typeof(o=function(e){"use strict";function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(p){if("object"!==n(p))throw new Error("single-spa-react requires a configuration object");var l=function(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(n){t(e,n,o[n])})}return e}({},r,p);if(!l.React)throw new Error("single-spa-react must be passed opts.React");if(!l.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!l.rootComponent&&!l.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");!o&&l.React.createContext&&(e.SingleSpaContext=o=l.React.createContext());var m={bootstrap:a.bind(null,l),mount:i.bind(null,l),unmount:c.bind(null,l)};return l.parcelCanUpdate&&(m.update=function(e,t){return new Promise(function(n,r){var a=e.React.createElement(e.rootComponent,t),i=o?e.React.createElement(o.Provider,{value:t},a):a;u({elementToRender:i,domElement:e.domElement,whenFinished:function(){n(this)},opts:e})})}.bind(null,l)),m},e.SingleSpaContext=void 0;var o=null;e.SingleSpaContext=o;var r={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,suppressComponentDidCatchWarning:!1,domElementGetter:null,parcelCanUpdate:!0};function a(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent().then(function(t){e.rootComponent=t})}function i(e,t){return new Promise(function(n,r){!e.suppressComponentDidCatchWarning&&function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)&&(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not have a prototype.  If using a functional component, wrap it in an error boundary or other class that implements componentDidCatch to avoid accidentally unmounting the entire single-spa application")));var a=function(e,t){return(t=t&&t.customProps?t.customProps:t).domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t="single-spa-application:".concat(e.appName||e.name);if(!t)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");return function(){var e=document.getElementById(t);return e||((e=document.createElement("div")).id=t,document.body.appendChild(e)),e}}(t)}(e,t);if("function"!=typeof a)throw new Error("single-spa-react: the domElementGetter for react application '".concat(t.appName||t.name,"' is not a function"));var i=e.React.createElement(e.rootComponent,t),c=o?e.React.createElement(o.Provider,{value:t},i):i,p=function(e,t){var n=e();if(!n)throw new Error("single-spa-react: domElementGetter function for application '".concat(t.appName||t.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return n}(a,t);u({elementToRender:c,domElement:p,whenFinished:function(){n(this)},opts:e}),e.domElement=p})}function c(e,t){return Promise.resolve().then(function(){e.ReactDOM.unmountComponentAtNode(e.domElement)})}function u(e){var t=e.opts,n=e.elementToRender,o=e.domElement,r=e.whenFinished;return"createRoot"===t.renderType?t.ReactDOM.createRoot(o).render(n,r):"hydrate"===t.renderType?t.ReactDOM.hydrate(n,o,r):t.ReactDOM.render(n,o,r)}})?o.apply(t,r):o)||(e.exports=a)},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(1),i=n.n(a),c=n(2),u=n.n(c),p="/Users/thiago/Projects/micro-frontend-flipper/plugin/src/app/App.js";var l=function(){return r.a.createElement("div",{className:"App",__source:{fileName:p,lineNumber:5},__self:this},"Plugin")};n.d(t,"bootstrap",function(){return s}),n.d(t,"mount",function(){return d}),n.d(t,"unmount",function(){return f});const m=u()({React:r.a,ReactDOM:i.a,rootComponent:l,domElementGetter:function(){return document.getElementById("app1")}}),s=[m.bootstrap],d=[m.mount],f=[m.unmount]}])});
//# sourceMappingURL=coi-plugin.js.map