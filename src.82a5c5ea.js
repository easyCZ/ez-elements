parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mj4H":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t){this.element="string"==typeof t?document.createElement(t):t,this.childContainer=this.element,this.setAttribute("data-class-name",this.constructor.name)}return t.prototype.getNativeElement=function(){return this.element},t.prototype.getChildContainer=function(){return this.childContainer},t.unwrapEZElement=function(e){return t.isEZElement(e)?e.getNativeElement():e},t.prototype.isEZElement=function(){return!0},t.isEZElement=function(t){return Boolean(t&&t.__proto__&&t.__proto__.isEZElement&&t.__proto__.isEZElement())},t.prototype.setChildContainer=function(t){if(!(t instanceof DocumentFragment||t instanceof HTMLElement))throw new Error("child container must be a DocumentFragment or a HTMLElement");return this.childContainer=t,this},t.prototype.applyChildren=function(e){var n,r=this.childContainer,i=e.map(t.toAppendable),o=new Set(i),s=new Set(Array.from(r.childNodes)),p=i.filter(function(t){return!s.has(t)}),a=document.createDocumentFragment();a.append.apply(a,p),r.prepend(a);var l=Array.from(r.childNodes).filter(function(t){return!o.has(t)});(n=document.createDocumentFragment()).append.apply(n,l);for(var u=0,c=l;u<c.length;u++){c[u].remove()}for(var h=null,m=r.firstChild,f=0;f<i.length;f++){var d=i[f];d!==m&&(null===h?r.prepend(d):h.after(d)),h=d,m=d.nextSibling}return this},t.prototype.append=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var r=0,i=e;r<i.length;r++){var o=i[r];Array.isArray(o)?this.append.apply(this,o):this.childContainer.append(t.toAppendable(o))}return this},t.prototype.prepend=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var r=0,i=e.reverse();r<i.length;r++){var o=i[r];Array.isArray(o)?this.prepend.apply(this,o):this.childContainer.prepend(t.toAppendable(o))}return this},t.prototype.appendTo=function(t){return t.append(this.element),this},t.prototype.prependTo=function(t){return t.prepend(this.element),this},t.prototype.replaceWith=function(e){return this.element.replaceWith(t.unwrapEZElement(e)),this},t.prototype.removeFromParent=function(){var t=this.element.parentNode;return t&&t.removeChild(this.element),this},t.prototype.getParent=function(){return this.element.parentNode},t.prototype.getChild=function(t){return this.childContainer.childNodes[t]||null},t.prototype.getChildren=function(){return Array.from(this.childContainer.childNodes)},t.prototype.contains=function(e){return t.isEZElement(e)?this.element.contains(e.element):this.element.contains(e)},t.prototype.addClass=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return(t=this.element.classList).add.apply(t,e),this},t.prototype.setClasses=function(t){var e=this;return Object.entries(t).forEach(function(t){var n=t[0];t[1]?e.addClass(n):e.removeClass(n)}),this},t.prototype.removeClass=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return(t=this.element.classList).remove.apply(t,e),this},Object.defineProperty(t.prototype,"classList",{get:function(){return this.element.classList},enumerable:!0,configurable:!0}),t.prototype.addStyles=function(t){return Object.assign(this.style,t),this},Object.defineProperty(t.prototype,"style",{get:function(){return this.element.style},enumerable:!0,configurable:!0}),t.prototype.addAttributes=function(t){var e=this;return Object.entries(t).forEach(function(t){var n=t[0],r=t[1];e.setAttribute(n,r)}),this},t.prototype.setAttribute=function(t,e){return this.element.setAttribute(t,e),this},t.prototype.removeAttribute=function(t){return this.element.removeAttribute(t),this},Object.defineProperty(t.prototype,"attributes",{get:function(){return this.element.attributes},enumerable:!0,configurable:!0}),t.prototype.getAttribute=function(t){return this.element.getAttribute(t)},t.prototype.addEventListener=function(t,e,n){return this.element.addEventListener(t,e,n),this},t.prototype.removeEventListener=function(t,e,n){return this.element.removeEventListener(t,e,n),this},t.prototype.isEventTarget=function(t){return t.target===this.element},t.prototype.containsEventTarget=function(t){return!!this.isEventTarget(t)||this.contains(t.target)},t.prototype.onClick=function(t){return this.addEventListener("click",t)},t.prototype.setTextContent=function(t){return this.element.textContent=t,this},t.prototype.getTextContent=function(){return this.element.textContent},t.toAppendable=function(e){if(t.isEZElement(e))return e.element;if(e instanceof HTMLElement)return e;if("string"==typeof e)return document.createTextNode(e);if(e&&void 0!==e.element)return e.element;throw new Error("Unrecognized child argument")},t}();exports.EZElement=t;
},{}],"CK+D":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./EZElement");function r(r,s){var t;return t=e.EZElement.isEZElement(r)?r:new e.EZElement(r),void 0!==s&&(Array.isArray(s)?t.addClass.apply(t,s):"string"==typeof s?t.addClass(s):t.setClasses(s)),t}exports.ez=r;
},{"./EZElement":"mj4H"}],"mAr6":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./EZElement"),r=function(e){function r(){return e.call(this,"div")||this}return t(r,e),r}(e.EZElement);exports.EZDiv=r;
},{"./EZElement":"mj4H"}],"w+Zj":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./EZElement"),n=function(e){function n(){return e.call(this,"span")||this}return t(n,e),n}(e.EZElement);exports.EZSpan=n;
},{"./EZElement":"mj4H"}],"OVcH":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./ez")),e(require("./EZElement"));var r=require("./EZDiv");exports.EZDiv=r.EZDiv;var t=require("./EZSpan");exports.EZSpan=t.EZSpan;
},{"./ez":"CK+D","./EZElement":"mj4H","./EZDiv":"mAr6","./EZSpan":"w+Zj"}],"ErFA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./EZElement");function r(r,s){var t;return t=e.EZElement.isEZElement(r)?r:new e.EZElement(r),void 0!==s&&(Array.isArray(s)?t.addClass.apply(t,s):"string"==typeof s?t.addClass(s):t.setClasses(s)),t}exports.ez=r;
},{"./EZElement":"mj4H"}],"LQdF":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./EZElement"),r=function(e){function r(){return e.call(this,"div")||this}return t(r,e),r}(e.EZElement);exports.EZDiv=r;
},{"./EZElement":"mj4H"}],"Kn4F":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./EZElement"),n=function(e){function n(){return e.call(this,"span")||this}return t(n,e),n}(e.EZElement);exports.EZSpan=n;
},{"./EZElement":"mj4H"}],"FgcD":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./ez")),e(require("./EZElement"));var r=require("./EZDiv");exports.EZDiv=r.EZDiv;var t=require("./EZSpan");exports.EZSpan=t.EZSpan;
},{"./ez":"ErFA","./EZElement":"mj4H","./EZDiv":"LQdF","./EZSpan":"Kn4F"}],"DqQA":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@ez-elements/core"),r=function(e){function r(t){var r=e.call(this,"button")||this;return r.onClick(t),r}return t(r,e),r.prototype.disable=function(){return this.setAttribute("disabled","disabled"),this},r.prototype.enable=function(){return this.removeAttribute("disabled"),this},r}(e.EZElement);exports.EZButton=r;
},{"@ez-elements/core":"FgcD"}],"5vy5":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@ez-elements/core"),n=function(e){function n(t){var n=e.call(this,"input")||this;return n.setAttribute("type","text").addEventListener("input",function(){t(n.getValue())}),n}return t(n,e),n.prototype.getValue=function(){return this.getNativeElement().value},n.prototype.setValue=function(t,e){return void 0===e&&(e=!0),this.getNativeElement().value=t,e&&this.getNativeElement().dispatchEvent(new Event("input")),this},n}(e.EZElement);exports.EZTextInput=n;
},{"@ez-elements/core":"FgcD"}],"mEPI":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./EZButton")),e(require("./EZTextInput"));
},{"./EZButton":"DqQA","./EZTextInput":"5vy5"}],"z3jA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./EZElement");function r(r,s){var t;return t=e.EZElement.isEZElement(r)?r:new e.EZElement(r),void 0!==s&&(Array.isArray(s)?t.addClass.apply(t,s):"string"==typeof s?t.addClass(s):t.setClasses(s)),t}exports.ez=r;
},{"./EZElement":"mj4H"}],"sZxO":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./EZElement"),r=function(e){function r(){return e.call(this,"div")||this}return t(r,e),r}(e.EZElement);exports.EZDiv=r;
},{"./EZElement":"mj4H"}],"pbGn":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./EZElement"),n=function(e){function n(){return e.call(this,"span")||this}return t(n,e),n}(e.EZElement);exports.EZSpan=n;
},{"./EZElement":"mj4H"}],"DctN":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./ez")),e(require("./EZElement"));var r=require("./EZDiv");exports.EZDiv=r.EZDiv;var t=require("./EZSpan");exports.EZSpan=t.EZSpan;
},{"./ez":"z3jA","./EZElement":"mj4H","./EZDiv":"sZxO","./EZSpan":"pbGn"}],"MAOI":[function(require,module,exports) {

"use strict";function e(){var e=Reflect.construct(HTMLElement,[],this.__proto__.constructor);return e.root=e.attachShadow({mode:"open"}),e.append(e.root),e}Object.defineProperty(exports,"__esModule",{value:!0}),e.prototype.setLifeCycleListener=function(e){return this.lifecycleListener=e,this},e.prototype.getShadowRoot=function(){return this.root},e.prototype.connectedCallback=function(){this.lifecycleListener.connected()},e.prototype.disconnectedCallback=function(){this.lifecycleListener.disconnected()},Object.setPrototypeOf(e.prototype,HTMLElement.prototype),Object.setPrototypeOf(e,HTMLElement),exports.InternalShadow=e;var t=Function("return this")();exports.didRegisterCustomElement=!1,t.customElements&&(t.customElements.define("ez-shadow",exports.InternalShadow),exports.didRegisterCustomElement=!0);
},{}],"5lW4":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@ez-elements/core"),n=require("./InternalShadow"),o=function(o){function r(e){var r=o.call(this,new n.InternalShadow)||this;r.onConnectedCallbacks=[],r.onDisconnectedCallbacks=[];var c=r.getNativeElement();c.setLifeCycleListener({connected:function(){r.connected()},disconnected:function(){r.disconnected()}});var s=c.getShadowRoot();r.styleElement=document.createElement("style"),s.append(r.styleElement);var i=new t.EZElement(e).getNativeElement();return s.append(i),r.setChildContainer(i),r}return e(r,o),r.prototype.onConnected=function(e){return this.onConnectedCallbacks.push(e),this},r.prototype.onDisconnected=function(e){return this.onDisconnectedCallbacks.push(e),this},r.prototype.setShadowStyle=function(e){return this.styleElement.innerHTML=e,this},r.prototype.connected=function(){this.onConnectedCallbacks.forEach(function(e){e()})},r.prototype.disconnected=function(){this.onDisconnectedCallbacks.forEach(function(e){e()})},r}(t.EZElement);exports.EZShadowElement=o,n.didRegisterCustomElement||(module.exports={EZShadowElement:function(){throw new Error("customElements was not available so the custom element used by EZShadowElement cannot be constructed. This can occur if the environment does not support custom elements (either an old browser or a test environment that does not include support for custom elements")}});
},{"@ez-elements/core":"DctN","./InternalShadow":"MAOI"}],"YOcY":[function(require,module,exports) {
"use strict";function e(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes[0].textContent}Object.defineProperty(exports,"__esModule",{value:!0}),exports.extractStyleContents=e;
},{}],"//nD":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./EZShadowElement")),e(require("./extractStyleContents"));
},{"./EZShadowElement":"5lW4","./extractStyleContents":"YOcY"}],"27oU":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@ez-elements/core"),n=require("@ez-elements/inputs"),r=require("@ez-elements/shadow"),o="text-input",i="holder",s=r.extractStyleContents("<style>\n  :host {\n    border: 1px solid blue;\n    background-color: orange;\n    display: block;\n  }\n  ."+o+" {\n    margin: 10px;\n    padding: 5px;\n    color: orange;\n  }\n  ."+i+" {\n    padding: 10px;\n  }\n</style>"),l=function(r){function l(){var t=r.call(this,"div")||this;return t.children=[],t.filter="",t.setShadowStyle(s).append(e.ez("div").append(new n.EZButton(function(){t.input.setValue("1")}).setTextContent('Set to "1"'),new n.EZButton(function(){t.input.setValue("2")}).setTextContent('Set to "2"')),t.input=new n.EZTextInput(function(e){t.applyFilter(e)}).addClass(o),t.holder=(new e.EZDiv).addClass(i)),t}return t(l,r),l.prototype.setChildren=function(t){return this.children=t,this.applyFilter(this.filter),this},l.prototype.applyFilter=function(t){this.filter=t;var e=t.toLowerCase(),n=this.children.filter(function(t){return-1!==t.getQueryText().toLowerCase().indexOf(e)});this.holder.applyChildren(n)},l}(r.EZShadowElement);exports.FilterableStaticList=l;
},{"@ez-elements/core":"OVcH","@ez-elements/inputs":"mEPI","@ez-elements/shadow":"//nD"}],"lFi7":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@ez-elements/shadow"),n=require("@ez-elements/core"),o=require("@ez-elements/shadow"),r=o.extractStyleContents("<style>\n  :host {\n      color: red;\n  }\n</style>"),s=function(e){function o(t){var o=e.call(this,"div")||this;return o.disconnects=0,o.connects=0,o.text=t,o.setShadowStyle(r).append(o.span=new n.EZSpan),o.onConnected(function(){o.connects++,o.render()}),o.onDisconnected(function(){o.disconnects++,o.render()}),o.render(),o}return t(o,e),o.prototype.getQueryText=function(){return this.text},o.prototype.render=function(){this.span.setTextContent(this.text+" - connects: "+this.connects+" - disconnects: "+this.disconnects)},o}(e.EZShadowElement);exports.ShadowListChild=s;
},{"@ez-elements/shadow":"//nD","@ez-elements/core":"OVcH"}],"RaPs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./list/FilterableStaticList"),t=require("./list/ShadowListChild"),a=require("@ez-elements/core");function o(t){t.append(a.ez("h3").setTextContent("Shadow (WebComponents)"),a.ez("p").append("Source shows how to subclass ",a.ez("code").append("EZShadowElement")," to create components that have separate CSS rules and lifecycle callbacks."),(new e.FilterableStaticList).setChildren(r()))}function r(){for(var e=[],a=1;a<=30;a++)e.push(new t.ShadowListChild(a.toString(10)));return e}exports.ShadowExample=o;
},{"./list/FilterableStaticList":"27oU","./list/ShadowListChild":"lFi7","@ez-elements/core":"OVcH"}],"gwwH":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@ez-elements/core"),n=require("@ez-elements/shadow"),r="enabled",o=n.extractStyleContents("<style>\n  :host {\n    border: 1px solid black;\n    background-color: red;\n    display: block;\n    padding: 5px;\n  }\n  :host(."+r+") {\n    background-color: green;\n    color: white;\n  }\n</style>"),s=function(n){function s(e){void 0===e&&(e=!1);var r=n.call(this,"div")||this;return r.enabled=e,r.setShadowStyle(o).append(r.status=t.ez("div")).render(),r}return e(s,n),s.prototype.disable=function(){return this.enabled=!1,this.render(),this},s.prototype.enable=function(){return this.enabled=!0,this.render(),this},s.prototype.render=function(){var e;return this.status.setTextContent(this.enabled?"Enabled":"Disabled"),this.setClasses(((e={})[r]=this.enabled,e)),this},s}(n.EZShadowElement);exports.StatusElement=s;
},{"@ez-elements/core":"OVcH","@ez-elements/shadow":"//nD"}],"wLAc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@ez-elements/core"),t=require("../shared/StatusElement");function n(n){var o;n.append(e.ez("h3").setTextContent("Simple <button/> elements"),e.ez("p").append("Source shows how to create ",e.ez("code").append("<button/>")," elements using the ",e.ez("code").append('ez("button")')," function."),o=new t.StatusElement(!1),e.ez("button").setTextContent("Enable").onClick(function(){o.enable()}),e.ez("button").setTextContent("Disable").onClick(function(){o.disable()}))}exports.ButtonExample=n;
},{"@ez-elements/core":"OVcH","../shared/StatusElement":"gwwH"}],"2Ew/":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./EZElement");function r(r,s){var t;return t=e.EZElement.isEZElement(r)?r:new e.EZElement(r),void 0!==s&&(Array.isArray(s)?t.addClass.apply(t,s):"string"==typeof s?t.addClass(s):t.setClasses(s)),t}exports.ez=r;
},{"./EZElement":"mj4H"}],"/TZI":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./EZElement"),r=function(e){function r(){return e.call(this,"div")||this}return t(r,e),r}(e.EZElement);exports.EZDiv=r;
},{"./EZElement":"mj4H"}],"5zKL":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./EZElement"),n=function(e){function n(){return e.call(this,"span")||this}return t(n,e),n}(e.EZElement);exports.EZSpan=n;
},{"./EZElement":"mj4H"}],"rs+D":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./ez")),e(require("./EZElement"));var r=require("./EZDiv");exports.EZDiv=r.EZDiv;var t=require("./EZSpan");exports.EZSpan=t.EZSpan;
},{"./ez":"2Ew/","./EZElement":"mj4H","./EZDiv":"/TZI","./EZSpan":"5zKL"}],"pD7Z":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@ez-elements/core"),t=function(){function t(){}return t.createElement=function(t,n){for(var r,l=[],o=2;o<arguments.length;o++)l[o-2]=arguments[o];if("function"==typeof t){var i=new t(n);r=e.EZElement.isEZElement(i)?i:new e.EZElement(i)}else r=new e.EZElement(t),null!=n&&Object.entries(n).forEach(function(e){var t=e[0],n=e[1];"style"===t&&"string"!=typeof n?r.addStyles(n):"onClick"===t?r.onClick(n):r.setAttribute(t,n)});return r.append.apply(r,l),r},t}();exports.JSX=t;
},{"@ez-elements/core":"rs+D"}],"uS6M":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}Object.defineProperty(exports,"__esModule",{value:!0}),e(require("./JSX"));
},{"./JSX":"pD7Z"}],"gSKj":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),t=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(exports,"__esModule",{value:!0});var n=t(require("@ez-elements/jsx")),o=require("@ez-elements/core"),r=n.JSX;function l(e){var t,n,l,a,s,d=new o.EZElement("div").addStyles({color:"green"}).setTextContent("myDiv");e.append(r.createElement("div",null,r.createElement("h3",null,"Various JSX usage"),r.createElement("p",null,"Source shows how JSX can be used to construct and append EZElements"),r.createElement("div",{style:"background-color: red;"},r.createElement("span",null,"style string div")),r.createElement("div",{style:{backgroundColor:"green"}},"style object div"),t=r.createElement("div",{onClick:function(){t.append(" - clicked")}},"clickDiv"),n=r.createElement("div",{style:"color: red;"}),s=r.createElement("div",{className:"some-class",style:{color:"orange"}},"simpleDiv"),d,l=new o.EZElement("div").addStyles({color:"blue"}).setTextContent("nestedDiv"),a=r.createElement(i,{text:"foo"}),c({content:"invoked explicitly"}).addStyles({color:"violet"}),r.createElement(c,{content:"as JSX attrs"}))),n.setTextContent("This was explicitDiv"),s.append(" - simpleDiv.modified"),l.append(" - nestedDiv.modified"),a.addStyles({color:"indigo"}).append(" - SomeComplex.modified")}exports.JSXExample=l;var i=function(t){function n(e){var n=t.call(this)||this;return n.setTextContent("SomeComplex with text arg: "+e.text),n}return e(n,t),n}(o.EZDiv);function c(e){return r.createElement("div",null,"I'm a SFC: ",e.content)}
},{"@ez-elements/jsx":"uS6M","@ez-elements/core":"OVcH"}],"wxeV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@ez-elements/core"),t=require("@ez-elements/inputs"),n=require("../shared/StatusElement");function s(s){var o;s.append(e.ez("h3").setTextContent("EZButton instances"),e.ez("p").append("Source shows how to use ",e.ez("code").append("EZButton")," instances to create buttons."),o=new n.StatusElement(!1),new t.EZButton(function(){o.enable()}).append(e.ez("div").setTextContent("✅"),e.ez("div").setTextContent("Enable")),new t.EZButton(function(){o.disable()}).append(e.ez("div").setTextContent("🔴"),e.ez("div").setTextContent("Disable")))}exports.EZButtonExample=s;
},{"@ez-elements/core":"OVcH","@ez-elements/inputs":"mEPI","../shared/StatusElement":"gwwH"}],"Fcj9":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@ez-elements/inputs"),n=require("@ez-elements/core"),i=function(e){function i(t,i,o){void 0===o&&(o=!1);var r=e.call(this,function(){r.setActive(!r.active),i(r.active)})||this;return r.active=o,r.props=t,r.append(r.icon=n.ez("div"),r.text=n.ez("div")),r.setActive(r.active),r}return t(i,e),i.prototype.setActive=function(t){this.active=t,this.active?(this.icon.setTextContent(this.props.activeIcon),this.text.setTextContent(this.props.activeText)):(this.icon.setTextContent(this.props.inactiveIcon),this.text.setTextContent(this.props.inactiveText))},i}(e.EZButton);exports.ToggleIconTextButton=i;
},{"@ez-elements/inputs":"mEPI","@ez-elements/core":"OVcH"}],"32nq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./ToggleIconTextButton"),t=require("../shared/StatusElement"),n=require("@ez-elements/core");function o(o){var a=new t.StatusElement(!1);o.append(n.ez("h3").setTextContent("EZButton Subclass"),n.ez("p").append("Source shows how to extend ",n.ez("code").append("EZButton")," to create more complex buttons."),a,new e.ToggleIconTextButton({activeIcon:"👍",activeText:"Enabled",inactiveIcon:"👎",inactiveText:"Disabled"},function(e){e?a.enable():a.disable()},!1))}exports.EZButtonSubclassExample=o;
},{"./ToggleIconTextButton":"Fcj9","../shared/StatusElement":"gwwH","@ez-elements/core":"OVcH"}],"belg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@ez-elements/core"),t=require("@ez-elements/inputs");function n(n){var o,u;n.append(e.ez("h3").setTextContent("EZTextInput"),e.ez("p").append("Source shows how to use ",e.ez("code").append("EZTextInput")," instances to create text inputs with callbacks."),o=new t.EZTextInput(function(e){u.setTextContent("Input value: "+e)}),u=e.ez("div"),e.ez("button").setTextContent('Set to "Foo"').onClick(function(){o.setValue("Foo")}),e.ez("button").setTextContent('Set to "Bar" without change callback').onClick(function(){o.setValue("Bar",!1)}))}exports.EZTextInputExample=n;
},{"@ez-elements/core":"OVcH","@ez-elements/inputs":"mEPI"}],"jkM5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@ez-elements/core");function n(n){var t;n.append(e.ez("h3").setTextContent("Basic EZElements"),e.ez("p").append("Source shows how to create elements using ",e.ez("code").append("new EZElement(tag)"),", ",e.ez("code").append("ez(tag)"),", ",e.ez("code").append("new EZDiv()"),", and ",e.ez("code").append("new EZSpan()")),new e.EZElement("div").setTextContent('Constructed using new EZElement("div")'),e.ez("div").setTextContent('Constructed using ez("div")'),(new e.EZDiv).setTextContent("Constructed using new EZDiv()"),(new e.EZSpan).setTextContent("Constructed using new EZSpan()"),e.ez("p").setTextContent("All instances are EZElements so they have convenience functions available for appending/prepending etc."),new e.EZElement("div").append(e.ez("div").append((new e.EZDiv).append((new e.EZSpan).setTextContent("span within some nested divs")),e.ez("span").setTextContent("You can append EZElements to EZElements"),((t=document.createElement("div")).textContent="As well as regular HTMLElements",t))))}exports.BasicEZElementsExample=n;
},{"@ez-elements/core":"OVcH"}],"OGgv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@ez-elements/core"),t=require("./shadow-example/ShadowExample"),n=require("./button-example/ButtonExample"),a=require("./jsx-example/JSXExample"),o=require("./ez-button-example/EZButtonExample"),s=require("./ez-button-subclass-example/EZButtonSubclassExample"),u=require("./ez-textinput-example/EZTextInputExample"),p=require("./basic-ezelements/BasicEZElementsExample"),l={"Basic EZElements":p.BasicEZElementsExample,Button:n.ButtonExample,EZButton:o.EZButtonExample,"EZButton Subclass":s.EZButtonSubclassExample,EZTextInput:u.EZTextInputExample,Shadow:t.ShadowExample,JSX:a.JSXExample},d=e.ez("div").addStyles({marginBottom:"10px"}),i=e.ez("div");function m(e){if(""!==e){i.setTextContent("");var t=l[e];t?t(i):i.setTextContent('Example not found for "'+e+'"')}else i.setTextContent("Pick an example")}document.addEventListener("DOMContentLoaded",function(){for(var t in d.appendTo(document.body),i.appendTo(document.body),l)e.ez("a").addStyles({padding:"10px",margin:"5px"}).setTextContent(t).setAttribute("href","#"+t).appendTo(d);m(decodeURIComponent(window.location.hash.substring(1)))}),window.addEventListener("hashchange",function(){m(decodeURIComponent(window.location.hash.substring(1)))});
},{"@ez-elements/core":"OVcH","./shadow-example/ShadowExample":"RaPs","./button-example/ButtonExample":"wLAc","./jsx-example/JSXExample":"gSKj","./ez-button-example/EZButtonExample":"wxeV","./ez-button-subclass-example/EZButtonSubclassExample":"32nq","./ez-textinput-example/EZTextInputExample":"belg","./basic-ezelements/BasicEZElementsExample":"jkM5"}]},{},["OGgv"], null)
//# sourceMappingURL=src.82a5c5ea.js.map