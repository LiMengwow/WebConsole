!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";!function(){var e=document.createElement("div");e.className="mod-console",document.body.appendChild(e);var t=document.createElement("div");t.className="mod-open",t.innerHTML="开启",document.body.appendChild(t)}(),function(e,t){if(!e)return!1;var n=t?t+" : "+e:e,o=document.createElement("div");o.className="mod-console-item",o.innerHTML=n,document.getElementsByClassName("mod-console")[0].appendChild(o)}("5445");var o,r,u,c=document.getElementsByClassName("mod-open")[0],i=document.getElementsByClassName("mod-console")[0];c.onclick=function(){i.style.display="block"},i.addEventListener("touchstart",function(e){u=setTimeout(function(){u=0,i.style.display="none"},350),o=e.touches[0].pageY,r=i.offsetHeight}),i.addEventListener("touchmove",function(e){clearTimeout(u),u=0,i.style.height=r-e.touches[0].pageY+o+"px"}),i.addEventListener("touchend",function(){return clearTimeout(u),0!=u&&console.log("你点击了"),!1})}]);