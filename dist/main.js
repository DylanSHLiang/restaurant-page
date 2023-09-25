(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(81),r=t.n(a),i=t(645),o=t.n(i),d=t(667),l=t.n(d),c=new URL(t(442),t.b),s=new URL(t(508),t.b),p=new URL(t(637),t.b),m=o()(r()),u=l()(c),h=l()(s),f=l()(p);m.push([e.id,`/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n@font-face {\n    font-family: "RobotoBold";\n    src: url(${u})\n}\n\n@font-face {\n    font-family: "RobotoMedium";\n    src: url(${h})\n}\n\n@font-face {\n    font-family: "Sacramento";\n    src: url(${f})\n}\n\nbody {\n    box-sizing: border-box;\n}\n\n#content {\n    font-family: "RobotoMedium", sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: radial-gradient(#ffc300, #cd293d);\n    width: 100vw;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 10px 0 0 0;\n    background-color: rgb(255, 255, 255);\n    width: 100%;\n}\n\nheader img {\n    height: 50px;\n    width: auto;\n}\n\nheader ul, footer ul {\n    display: flex;\n    justify-content: space-around;\n}\n\nheader ul {\n    width: 40%;\n}\n\nheader li:not(.active):hover {\n    cursor: pointer;\n    background-color: #ffc300;\n    transition: background-color 0.3s;\n}\n\nheader li.active {\n    background-color: #cd293d;\n    color: white;\n    transition: background-color 0.3s;\n}\n\nheader li {\n    text-align: center;\n    width: 80px;\n    font-size: 18px;\n}\n\nli {\n    list-style-type: none;\n    padding: 20px;\n}\n\nmain {\n    width: clamp(400px, 70%, 1500px);\n    margin: 50px 0;\n    border-radius: 20px;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: white;\n}\n\nmain > * {\n    margin: 40px 0;\n}\n\n#slogan {\n    font-family: 'Sacramento';\n    font-weight: bold;\n    font-size: 70px;\n}\n\n.intro, .hours, .location {\n    background-color: #ffc300;\n    padding: 10px;\n    border-radius: 5px;\n    outline: 5px solid #cd293d;\n    box-shadow: 5px 5px 5px black;\n}\n\n.intro {\n    width: clamp(200px, 40%, 500px);\n}\n\nh1:not(#slogan) {\n    font-size: 36px;\n    font-family: "RobotoBold", sans-serif;\n    margin-top: 60px;\n    margin-bottom: 54px;\n}\n\nh2 {\n    font-size: 24px;\n    font-family: "RobotoBold", sans-serif;\n}\n\n.intro h2 {\n    float: right;\n    margin-top: 10px;\n}\n\n.location h2 {\n    margin-bottom: 10px;\n}\n\nfooter {\n    width: 100%;\n    background-color: white;\n}\n\nfooter ul {\n    width: 100%;\n}\n\na {\n    text-decoration: none;\n    color: #cd293d;\n}\n\na:hover {\n    color: #ffc300;\n}`,""]);const x=m},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);a&&o[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var i={},o=[],d=0;d<e.length;d++){var l=e[d],c=a.base?l[0]+a.base:l[0],s=i[c]||0,p="".concat(c," ").concat(s);i[c]=s+1;var m=t(p),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=r(u,a);a.byIndex=d,n.splice(d,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var d=t(i[o]);n[d].references--}for(var l=a(e,r),c=0;c<i.length;c++){var s=t(i[c]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=l}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},442:(e,n,t)=>{e.exports=t.p+"f80816a5455d171f948d.ttf"},508:(e,n,t)=>{e.exports=t.p+"7c8d04cd831df3033c8a.ttf"},637:(e,n,t)=>{e.exports=t.p+"5bd7d5208f7a9c18fe22.ttf"}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),i=t(569),o=t.n(i),d=t(565),l=t.n(d),c=t(216),s=t.n(c),p=t(589),m=t.n(p),u=t(426),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=o().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=s(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const f=t.p+"74ced4d48f96ba8dc7fb.png";function x(e){const n=document.querySelectorAll("header li");n[0].classList.add("active"),n[1].classList.remove("active"),n[2].classList.remove("active"),e.innerHTML="";let t=document.createElement("h1");t.id="slogan",t.innerText="Live spicy",e.appendChild(t);let a=document.createElement("div");a.classList.add("intro");let r=document.createElement("p");r.innerText="Oporto exceeded all my expectations. The food was exceptional, the service was top-notch, and the ambiance was inviting. I had a fantastic dining experience and will definitely be returning for more delicious moments at my new favourtite restaurant!",a.appendChild(r);let i=document.createElement("h2");i.innerText="- Australian",a.appendChild(i),e.appendChild(a),a=document.createElement("div"),a.classList.add("hours"),i=document.createElement("h2"),i.innerText="Hours",a.appendChild(i);let o=document.createElement("ul"),d=document.createElement("li");d.innerText="Sunday: 8am - 8pm",o.appendChild(d),d=document.createElement("li"),d.innerText="Monday: 6am - 6pm",o.appendChild(d),d=document.createElement("li"),d.innerText="Tuesday: 6am - 6pm",o.appendChild(d),d=document.createElement("li"),d.innerText="Wednesday: 6am - 6pm",o.appendChild(d),d=document.createElement("li"),d.innerText="Thursday: 6am - 10pm",o.appendChild(d),d=document.createElement("li"),d.innerText="Friday: 6am - 10pm",o.appendChild(d),d=document.createElement("li"),d.innerText="Saturday: 8am - 10pm",o.appendChild(d),a.appendChild(o),e.appendChild(a),a=document.createElement("div"),a.classList.add("location"),i=document.createElement("h2"),i.innerText="Location",a.appendChild(i),r=document.createElement("p"),r.innerText="123 Forest Drive, Forestville, Maine",a.appendChild(r),e.appendChild(a)}const v=document.querySelector("#content");!function(){const e=document.createElement("main"),n=document.createElement("header"),t=new Image;t.src=f,n.appendChild(t);let a=document.createElement("ul"),r=document.createElement("li");r.innerText="Home",r.addEventListener("click",(()=>{r.classList[0]||x(e)})),a.appendChild(r);let i=document.createElement("li");i.innerText="Menu",i.addEventListener("click",(()=>{i.classList[0]||function(e){const n=document.querySelectorAll("header li");n[0].classList.remove("active"),n[1].classList.add("active"),n[2].classList.remove("active"),e.innerHTML="";let t=document.createElement("h1");t.innerText="Menu",e.appendChild(t);let a=document.createElement("div");a.classList.add("intro");let r=document.createElement("p");r.innerText="Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.",a.appendChild(r);let i=document.createElement("h2");i.innerText="Australian",a.appendChild(i),e.appendChild(a),a=document.createElement("div"),a.classList.add("hours"),i=document.createElement("h2"),i.innerText="Hours",a.appendChild(i);let o=document.createElement("ul"),d=document.createElement("li");d.innerText="Sunday: 8am - 8pm",o.appendChild(d),d=document.createElement("li"),d.innerText="Monday: 6am - 6pm",o.appendChild(d),d=document.createElement("li"),d.innerText="Tuesday: 6am - 6pm",o.appendChild(d),d=document.createElement("li"),d.innerText="Wednesday: 6am - 6pm",o.appendChild(d),d=document.createElement("li"),d.innerText="Thursday: 6am - 10pm",o.appendChild(d),d=document.createElement("li"),d.innerText="Friday: 6am - 10pm",o.appendChild(d),d=document.createElement("li"),d.innerText="Saturday: 8am - 10pm",o.appendChild(d),a.appendChild(o),e.appendChild(a),a=document.createElement("div"),a.classList.add("location"),i=document.createElement("h2"),i.innerText="Location",a.appendChild(i),r=document.createElement("p"),r.innerText="123 Forest Drive, Forestville, Maine",a.appendChild(r),e.appendChild(a)}(e)})),a.appendChild(i);let o=document.createElement("li");o.innerText="Contact",o.addEventListener("click",(()=>{o.classList[0]||function(e){const n=document.querySelectorAll("header li");n[0].classList.remove("active"),n[1].classList.remove("active"),n[2].classList.add("active"),e.innerHTML="";let t=document.createElement("h1");t.innerText="Contact Us",e.appendChild(t);let a=document.createElement("div");a.classList.add("intro");let r=document.createElement("p");r.innerText="Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.",a.appendChild(r);let i=document.createElement("h2");i.innerText="Australian",a.appendChild(i),e.appendChild(a),a=document.createElement("div"),a.classList.add("hours"),i=document.createElement("h2"),i.innerText="Hours",a.appendChild(i);let o=document.createElement("ul"),d=document.createElement("li");d.innerText="Sunday: 8am - 8pm",o.appendChild(d),d=document.createElement("li"),d.innerText="Monday: 6am - 6pm",o.appendChild(d),d=document.createElement("li"),d.innerText="Tuesday: 6am - 6pm",o.appendChild(d),d=document.createElement("li"),d.innerText="Wednesday: 6am - 6pm",o.appendChild(d),d=document.createElement("li"),d.innerText="Thursday: 6am - 10pm",o.appendChild(d),d=document.createElement("li"),d.innerText="Friday: 6am - 10pm",o.appendChild(d),d=document.createElement("li"),d.innerText="Saturday: 8am - 10pm",o.appendChild(d),a.appendChild(o),e.appendChild(a),a=document.createElement("div"),a.classList.add("location"),i=document.createElement("h2"),i.innerText="Location",a.appendChild(i),r=document.createElement("p"),r.innerText="123 Forest Drive, Forestville, Maine",a.appendChild(r),e.appendChild(a)}(e)})),a.appendChild(o),n.appendChild(a),v.appendChild(n),x(e),v.appendChild(e);const d=document.createElement("footer");a=document.createElement("ul");let l=document.createElement("li");l.innerText="Images from ";let c=document.createElement("a");c.setAttribute("href","https://www.oporto.com.au/"),c.setAttribute("target","_blank"),c.innerText="Oporto",l.appendChild(c),a.appendChild(l),l=document.createElement("li"),l.innerText="Check out my ",c=document.createElement("a"),c.setAttribute("href","https://github.com/DylanSHLiang"),c.setAttribute("target","_blank"),c.innerText="GitHub",l.appendChild(c),l.innerHTML+="!",a.appendChild(l),l=document.createElement("li"),l.innerText="This is a fake site - 2023",a.appendChild(l),d.appendChild(a),v.appendChild(d)}()})()})();