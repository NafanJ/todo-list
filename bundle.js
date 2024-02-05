(()=>{"use strict";var n={904:(n,e,t)=>{t.d(e,{c:()=>c});var r=t(500),o=t.n(r),a=t(312),i=t.n(a)()(o());i.push([n.id,"\nbody {\n    font-family: 'Arial', sans-serif;\n    color: #333;\n    background-color: #f4f4f4;\n    margin: 0;\n    padding: 0;\n}\n\nnav ul {\n    list-style-type: none;\n    padding: 0;\n}\n\nnav ul li {\n    display: inline;\n    margin-right: 20px;\n}\n\nnav ul li a {\n    text-decoration: none;\n    color: #333;\n}\n\n.logo{\n    color: #02a7f8;\n}\n\n.profile-section {\n    position: absolute;\n    top: 10px; /* Adjust as necessary */\n    right: 10px; /* Adjust as necessary */\n    height: 50px; /* Adjust based on the size of the profile image */\n  }\n  \n  .profile-image {\n    height: 100%;\n    border-radius: 50%; /* Makes the image round */\n    border: 2px solid var(--light-teal-blue); /* Optional: adds a border using a CSS variable for color */\n    cursor: pointer;\n    object-fit: cover; /* Ensures the image is not distorted */\n  }\n  \n  /* Styles for larger screens */\n  @media (min-width: 768px) {\n    .profile-section {\n      top: 20px; /* Adjust as necessary */\n      right: 20px; /* Adjust as necessary */\n    }\n  }\n  \n\n.welcome-section {\n    text-align: center;\n    padding: 50px 20px;\n}\n\nbutton {\n    background-color: #02a7f8;\n    color: white;\n    padding: 15px 20px;\n    border: none;\n    cursor: pointer;\n    border-radius: 16px;\n}\n\nbutton:hover {\n    background-color: #45a049;\n}\n\nfooter {\n    text-align: center;\n    padding: 10px;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: #f2f2f2;\n}\n\n.todo-section {\n    margin: 20px;\n    padding: 20px;\n    background-color: #98cfdf;\n    border-radius: 8px;\n}\n\n#task-list li {\n    margin: 10px 0;\n    padding: 10px;\n    border-radius: 4px;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n#task-list li.completed {\n    text-decoration: line-through;\n    color: #777;\n}",""]);const c=i},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},500:n=>{n.exports=function(n){return n[1]}},596:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var u=t(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},176:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(596),e=t.n(n),r=t(520),o=t.n(r),a=t(176),i=t.n(a),c=t(120),s=t.n(c),l=t(808),u=t.n(l),d=t(936),p=t.n(d),f=t(904),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),e()(f.c,m),f.c&&f.c.locals&&f.c.locals;const g=t.p+"assets/img/3fa0604093fffaa7325a.png";document.addEventListener("DOMContentLoaded",(function(){const n=document.querySelector("#task-form"),e=document.getElementById("task-input"),t=document.getElementById("task-list");function r(n){const e=document.createElement("li");e.textContent=n;const r=document.createElement("button");r.textContent="Finsihed",e.appendChild(r);const o=document.createElement("button");o.textContent="Delete",e.appendChild(o),t.appendChild(e)}function o(){const n=[];document.querySelectorAll("#task-list li").forEach((e=>{n.push(e.textContent.replace("Delete","").trim())})),localStorage.setItem("tasks",JSON.stringify(n))}document.getElementById("profile-image").src=g,n.onsubmit=function(n){n.preventDefault();const t=e.value.trim();t&&(r(t),e.value="",o())},t.addEventListener("click",(function(n){"LI"===n.target.tagName?(n.target.classList.toggle("completed"),o()):"BUTTON"===n.target.tagName&&(n.target.parentElement.remove(),o())})),JSON.parse(localStorage.getItem("tasks")||"[]").forEach((n=>{r(n)}))}))})()})();