(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>g});var a=t(81),r=t.n(a),i=t(645),d=t.n(i),o=t(667),c=t.n(o),l=new URL(t(442),t.b),p=new URL(t(508),t.b),s=new URL(t(637),t.b),m=d()(r()),u=c()(l),h=c()(p),f=c()(s);m.push([e.id,`/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n@font-face {\n    font-family: "RobotoBold";\n    src: url(${u})\n}\n\n@font-face {\n    font-family: "RobotoMedium";\n    src: url(${h})\n}\n\n@font-face {\n    font-family: "Sacramento";\n    src: url(${f})\n}\n\nbody {\n    box-sizing: border-box;\n}\n\n#content {\n    font-family: "RobotoMedium", sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #cd293d;\n    width: 100vw;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 10px 0 0 0;\n    background-color: rgb(255, 255, 255);\n    width: 100%;\n}\n\nheader img {\n    height: 50px;\n    width: auto;\n}\n\nheader ul, footer ul {\n    display: flex;\n    justify-content: space-around;\n}\n\nheader ul {\n    width: 40%;\n}\n\nheader li:not(.active):hover {\n    cursor: pointer;\n    background-color: #ffc300;\n    \n}\n\nheader li.active {\n    background-color: #cd293d;\n    color: white;\n    transition: background-color .5s;\n}\n\nheader li {\n    transition: background-color 0.3s;\n    text-align: center;\n    width: 80px;\n    font-size: 18px;\n}\n\nli {\n    list-style-type: none;\n    padding: 20px;\n}\n\nmain {\n    width: clamp(400px, 70%, 1500px);\n    margin: 50px 0;\n    border-radius: 20px;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: white;\n}\n\nmain > * {\n    margin: 40px 0;\n}\n\n#slogan {\n    font-family: 'Sacramento';\n    font-weight: bold;\n    font-size: 70px;\n}\n\nmain div {\n    background-color: #ffc300;\n    padding: 10px;\n    border-radius: 5px;\n    outline: 5px solid #cd293d;\n    box-shadow: 5px 5px 5px black;\n}\n\n.intro {\n    width: clamp(200px, 40%, 500px);\n}\n\nh1:not(#slogan) {\n    font-size: 36px;\n    font-family: "RobotoBold", sans-serif;\n    margin-top: 60px;\n    margin-bottom: 54px;\n}\n\nh2 {\n    font-size: 24px;\n    font-family: "RobotoBold", sans-serif;\n}\n\n.menu {\n    width: clamp(200px, 40%, 500px);\n}\n\n.menu li {\n    font-size: 24px;\n}\n\n.menu p {\n    font-size: 16px;\n}\n\nimg {\n    width: 200px;\n    display: block;\n    border-radius: 20px;\n    margin: 5px 0;\n}\n\n.intro h2 {\n    float: right;\n    margin-top: 10px;\n}\n\n.location h2 {\n    margin-bottom: 10px;\n}\n\nfooter {\n    width: 100%;\n    background-color: white;\n}\n\nfooter ul {\n    width: 100%;\n}\n\na {\n    text-decoration: none;\n    color: #cd293d;\n}\n\na:hover {\n    color: #ffc300;\n}`,""]);const g=m},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(a)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(d[c]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);a&&d[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var i={},d=[],o=0;o<e.length;o++){var c=e[o],l=a.base?c[0]+a.base:c[0],p=i[l]||0,s="".concat(l," ").concat(p);i[l]=p+1;var m=t(s),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=r(u,a);a.byIndex=o,n.splice(o,0,{identifier:s,updater:h,references:1})}d.push(s)}return d}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var o=t(i[d]);n[o].references--}for(var c=a(e,r),l=0;l<i.length;l++){var p=t(i[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},442:(e,n,t)=>{e.exports=t.p+"f80816a5455d171f948d.ttf"},508:(e,n,t)=>{e.exports=t.p+"7c8d04cd831df3033c8a.ttf"},637:(e,n,t)=>{e.exports=t.p+"5bd7d5208f7a9c18fe22.ttf"}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),i=t(569),d=t.n(i),o=t(565),c=t.n(o),l=t(216),p=t.n(l),s=t(589),m=t.n(s),u=t(426),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=d().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=p(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const f=t.p+"74ced4d48f96ba8dc7fb.png";function g(e){const n=document.querySelectorAll("header li");n[0].classList.add("active"),n[1].classList.remove("active"),n[2].classList.remove("active"),e.innerHTML="";let t=document.createElement("h1");t.id="slogan",t.innerText="Live spicy",e.appendChild(t);let a=document.createElement("div");a.classList.add("intro");let r=document.createElement("p");r.innerText="Oporto exceeded all my expectations. The food was exceptional, the service was top-notch, and the ambiance was inviting. I had a fantastic dining experience and will definitely be returning for more delicious moments at my new favourtite restaurant!",a.appendChild(r);let i=document.createElement("h2");i.innerText="- Australian",a.appendChild(i),e.appendChild(a),a=document.createElement("div"),a.classList.add("hours"),i=document.createElement("h2"),i.innerText="Hours",a.appendChild(i);let d=document.createElement("ul"),o=document.createElement("li");o.innerText="Sunday: 8am - 8pm",d.appendChild(o),o=document.createElement("li"),o.innerText="Monday: 6am - 6pm",d.appendChild(o),o=document.createElement("li"),o.innerText="Tuesday: 6am - 6pm",d.appendChild(o),o=document.createElement("li"),o.innerText="Wednesday: 6am - 6pm",d.appendChild(o),o=document.createElement("li"),o.innerText="Thursday: 6am - 10pm",d.appendChild(o),o=document.createElement("li"),o.innerText="Friday: 6am - 10pm",d.appendChild(o),o=document.createElement("li"),o.innerText="Saturday: 8am - 10pm",d.appendChild(o),a.appendChild(d),e.appendChild(a),a=document.createElement("div"),a.classList.add("location"),i=document.createElement("h2"),i.innerText="Location",a.appendChild(i),r=document.createElement("p"),r.innerText="123 Forest Drive, Forestville, Maine",a.appendChild(r),e.appendChild(a)}const x=t.p+"eca6f1cadc2922ba9e8c.jpg",b=t.p+"5d0d0f4517c9aa47d00f.jpg",y=t.p+"a367f0db2693fedd26b7.jpg",v=t.p+"71cda80eee1a053c6ef1.jpg",C=t.p+"488a6f67a51a0fdbfce3.jpg",E=t.p+"da1d34ee01e7f192847c.jpg",T=t.p+"053adc5ba1464cd3d486.jpg",w=t.p+"053e46744617e23e3fea.jpg",k=t.p+"d7c534e10b1695d8579c.jpg",L=t.p+"8f6a5d9424a2ac541886.jpg",I=t.p+"14b2785487f854496ba9.jpg",S=t.p+"72c0c1c5f4381289b325.jpg",M=t.p+"b56367cf61e481e83ab4.jpg",j=t.p+"01f09bb44972a45f91c8.jpg",B=document.querySelector("#content");!function(){const e=document.createElement("main"),n=document.createElement("header"),t=new Image;t.src=f,n.appendChild(t);let a=document.createElement("ul"),r=document.createElement("li");r.innerText="Home",r.addEventListener("click",(()=>{r.classList[0]||g(e)})),a.appendChild(r);let i=document.createElement("li");i.innerText="Menu",i.addEventListener("click",(()=>{i.classList[0]||function(e){const n=document.querySelectorAll("header li");n[0].classList.remove("active"),n[1].classList.add("active"),n[2].classList.remove("active"),e.innerHTML="";let t=document.createElement("h1");t.innerText="Menu",e.appendChild(t);let a=document.createElement("div");a.classList.add("menu","meals");let r=document.createElement("h2");r.innerText="Meal Boxes",a.appendChild(r);let i=document.createElement("ul"),d=document.createElement("li");d.innerText="Best of Bondi Box";let o=new Image;o.src=x,d.append(o);let c=document.createElement("p");c.innerText="Includes a Single Bondi Burger, 1/4 Flame Grilled Chicken with your choice of basting and Small Chips.",d.append(c),i.appendChild(d),d=document.createElement("li"),d.innerText="Half Chicken Box",o=new Image,o.src=b,d.append(o),c=document.createElement("p"),c.innerText="Includes half of our famous Flame Grilled Portuguese Chicken, your choice of two sides with pita & choice of dipping sauce.",d.append(c),i.appendChild(d),d=document.createElement("li"),d.innerText="Quarter Chicken Box",o=new Image,o.src=y,d.append(o),c=document.createElement("p"),c.innerText="Includes a quarter of our famous Flame Grilled Portuguese Chicken, your choice of a side with pita & choice of dipping sauce.",d.append(c),i.appendChild(d),a.appendChild(i),e.appendChild(a),a=document.createElement("div"),a.classList.add("menu","burgers"),r=document.createElement("h2"),r.innerText="Burgers",a.appendChild(r),i=document.createElement("ul"),d=document.createElement("li"),d.innerText="Double Bondi Burger",o=new Image,o.src=v,d.append(o),c=document.createElement("p"),c.innerText="Two fresh-grilled 100% chicken breast fillets, crisp lettuce, cheese, creamy mayo and Oporto's legendary Original Chilli sauce.",d.append(c),i.appendChild(d),d=document.createElement("li"),d.innerText="Triple Bondi Burger",o=new Image,o.src=C,d.append(o),c=document.createElement("p"),c.innerText="Three fresh-grilled 100% chicken breast fillets, crisp lettuce, cheese, creamy mayo and Oporto's legendary Original Chilli sauce.",d.append(c),i.appendChild(d),d=document.createElement("li"),d.innerText="Vegan Burger",o=new Image,o.src=E,d.append(o),c=document.createElement("p"),c.innerText="Our Veggie Burger is served with fresh lettuce, tomato, cheese, mayo and lemon and herb sauce.",d.append(c),i.appendChild(d),a.appendChild(i),e.appendChild(a),a=document.createElement("div"),a.classList.add("menu","rappas"),r=document.createElement("h2"),r.innerText="Rappas",a.appendChild(r),i=document.createElement("ul"),d=document.createElement("li"),d.innerText="Grilled Chicken Rappa",o=new Image,o.src=T,d.append(o),c=document.createElement("p"),c.innerText="Two fresh grilled chicken tenders, tomato, lettuce, creamy mayo and your choice of sauce - all in a warm pita bread wrap.",d.append(c),i.appendChild(d),d=document.createElement("li"),d.innerText="Bondi Rappa",o=new Image,o.src=w,d.append(o),c=document.createElement("p"),c.innerText="Two grilled chicken breast fillets, crisp lettuce, cheese, creamy mayo & original chilli sauce – all in a warm pita bread wrap.",d.append(c),i.appendChild(d),d=document.createElement("li"),d.innerText="Vegan Rappa",o=new Image,o.src=k,d.append(o),c=document.createElement("p"),c.innerText="A kale & quinoa pattie, avocado, fresh tomato, mixed lettuce leaves, crisp lettuce, dry slaw with a tomato & capsicum relish.",d.append(c),i.appendChild(d),a.appendChild(i),e.appendChild(a),a=document.createElement("div"),a.classList.add("menu","sides"),r=document.createElement("h2"),r.innerText="Sides",a.appendChild(r),i=document.createElement("ul"),d=document.createElement("li"),d.innerText="Chips",o=new Image,o.src=L,d.append(o),c=document.createElement("p"),c.innerText="Cooked until golden brown and lightly seasoned - our famous hot chips are great on the side or as a snack.",d.append(c),i.appendChild(d),d=document.createElement("li"),d.innerText="Grilled Corn",o=new Image,o.src=I,d.append(o),c=document.createElement("p"),c.innerText="Grilled corn kernels, delicious as a side or added to a bowl.",d.append(c),i.appendChild(d),d=document.createElement("li"),d.innerText="Pita Bread & Garlic Dip",o=new Image,o.src=S,d.append(o),c=document.createElement("p"),c.innerText="A lightly toasted warm pita bread with an authentic dipping sauce made with fresh garlic and lemon.",d.append(c),i.appendChild(d),a.appendChild(i),e.appendChild(a),a=document.createElement("div"),a.classList.add("menu","desserts"),r=document.createElement("h2"),r.innerText="Desserts",a.appendChild(r),i=document.createElement("ul"),d=document.createElement("li"),d.innerText="Chocolate Mousse",o=new Image,o.src=M,d.append(o),c=document.createElement("p"),c.innerText="Treat yourself with a serving of our creamy, deliciously decadent chocolate mousse.",d.append(c),i.appendChild(d),d=document.createElement("li"),d.innerText="Churros",o=new Image,o.src=j,d.append(o),c=document.createElement("p"),c.innerText="Crunchy, doughy goodness with a sweet dusting of cinnamon sugar along with our deliciously sweet and salty dipping sauce.",d.append(c),i.appendChild(d),a.appendChild(i),e.appendChild(a)}(e)})),a.appendChild(i);let d=document.createElement("li");d.innerText="Contact",d.addEventListener("click",(()=>{d.classList[0]||function(e){const n=document.querySelectorAll("header li");n[0].classList.remove("active"),n[1].classList.remove("active"),n[2].classList.add("active"),e.innerHTML="";let t=document.createElement("h1");t.innerText="Contact Us",e.appendChild(t);let a=document.createElement("div");a.classList.add("intro");let r=document.createElement("p");r.innerText="Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.",a.appendChild(r);let i=document.createElement("h2");i.innerText="Australian",a.appendChild(i),e.appendChild(a),a=document.createElement("div"),a.classList.add("hours"),i=document.createElement("h2"),i.innerText="Hours",a.appendChild(i);let d=document.createElement("ul"),o=document.createElement("li");o.innerText="Sunday: 8am - 8pm",d.appendChild(o),o=document.createElement("li"),o.innerText="Monday: 6am - 6pm",d.appendChild(o),o=document.createElement("li"),o.innerText="Tuesday: 6am - 6pm",d.appendChild(o),o=document.createElement("li"),o.innerText="Wednesday: 6am - 6pm",d.appendChild(o),o=document.createElement("li"),o.innerText="Thursday: 6am - 10pm",d.appendChild(o),o=document.createElement("li"),o.innerText="Friday: 6am - 10pm",d.appendChild(o),o=document.createElement("li"),o.innerText="Saturday: 8am - 10pm",d.appendChild(o),a.appendChild(d),e.appendChild(a),a=document.createElement("div"),a.classList.add("location"),i=document.createElement("h2"),i.innerText="Location",a.appendChild(i),r=document.createElement("p"),r.innerText="123 Forest Drive, Forestville, Maine",a.appendChild(r),e.appendChild(a)}(e)})),a.appendChild(d),n.appendChild(a),B.appendChild(n),g(e),B.appendChild(e);const o=document.createElement("footer");a=document.createElement("ul");let c=document.createElement("li");c.innerText="Images from ";let l=document.createElement("a");l.setAttribute("href","https://www.oporto.com.au/"),l.setAttribute("target","_blank"),l.innerText="Oporto",c.appendChild(l),a.appendChild(c),c=document.createElement("li"),c.innerText="Check out my ",l=document.createElement("a"),l.setAttribute("href","https://github.com/DylanSHLiang"),l.setAttribute("target","_blank"),l.innerText="GitHub",c.appendChild(l),c.innerHTML+="!",a.appendChild(c),c=document.createElement("li"),c.innerText="This is a fake site - 2023©",a.appendChild(c),o.appendChild(a),B.appendChild(o)}()})()})();