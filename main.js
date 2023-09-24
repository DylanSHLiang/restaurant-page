(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([e.id,"#content {\n    font-family: sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n}",""]);const c=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);r&&o[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],p=i[l]||0,s="".concat(l," ").concat(p);i[l]=p+1;var u=n(s),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=a(m,r);r.byIndex=c,t.splice(c,0,{identifier:s,updater:h,references:1})}o.push(s)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=n(i[o]);t[c].references--}for(var d=r(e,a),l=0;l<i.length;l++){var p=n(i[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),i=n(569),o=n.n(i),c=n(565),d=n.n(c),l=n(216),p=n.n(l),s=n(589),u=n.n(s),m=n(426),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=n.p+"8d0cf6a8cf634d215474.png",v=document.querySelector("#content");!function(){const e=document.createElement("header"),t=new Image;t.src=f,e.appendChild(t);let n=document.createElement("nav"),r=document.createElement("ul"),a=document.createElement("li");a.innerText="Home",r.appendChild(a),a=document.createElement("li"),a.innerText="Menu",r.appendChild(a),a=document.createElement("li"),a.innerText="Contact",r.appendChild(a),n.appendChild(r),e.appendChild(n),v.appendChild(e);const i=document.createElement("main");!function(e){let t=document.createElement("h1");t.innerText="Oporto",e.appendChild(t);let n=document.createElement("div");n.classList.add("intro");let r=document.createElement("p");r.innerText="Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.",n.appendChild(r);let a=document.createElement("h2");a.innerText="Australian",n.appendChild(a),e.appendChild(n),n=document.createElement("div"),n.classList.add("hours"),a=document.createElement("h2"),a.innerText="Hours",n.appendChild(a);let i=document.createElement("ul"),o=document.createElement("li");o.innerText="Sunday: 8am - 8pm",i.appendChild(o),o=document.createElement("li"),o.innerText="Monday: 6am - 6pm",i.appendChild(o),o=document.createElement("li"),o.innerText="Tuesday: 6am - 6pm",i.appendChild(o),o=document.createElement("li"),o.innerText="Wednesday: 6am - 6pm",i.appendChild(o),o=document.createElement("li"),o.innerText="Thursday: 6am - 10pm",i.appendChild(o),o=document.createElement("li"),o.innerText="Friday: 6am - 10pm",i.appendChild(o),o=document.createElement("li"),o.innerText="Saturday: 8am - 10pm",i.appendChild(o),n.appendChild(i),e.appendChild(n),n=document.createElement("div"),n.classList.add("location"),a=document.createElement("h2"),a.innerText="Location",n.appendChild(a),r=document.createElement("p"),r.innerText="123 Forest Drive, Forestville, Maine",n.appendChild(r),e.appendChild(n)}(i),v.appendChild(i);const o=document.createElement("footer");r=document.createElement("ul"),a=document.createElement("li"),a.innerText="Images from https://www.oporto.com.au/",r.appendChild(a),a=document.createElement("li"),a.innerText="Check out https://github.com/DylanSHLiang",r.appendChild(a),a=document.createElement("li"),a.innerText="This is a fake site - 2023",r.appendChild(a),n.appendChild(r),o.appendChild(r),v.appendChild(o)}()})()})();