if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return i[s]||(e=new Promise((async e=>{if("document"in self){const i=document.createElement("script");i.src=s,document.head.appendChild(i),i.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!i[s])throw new Error(`Module ${s} didn’t register its module`);return i[s]}))},e=(e,i)=>{Promise.all(e.map(s)).then((s=>i(1===s.length?s[0]:s)))},i={require:Promise.resolve(e)};self.define=(e,r,n)=>{i[e]||(i[e]=Promise.resolve().then((()=>{let i={};const a={uri:location.origin+e.slice(1)};return Promise.all(r.map((e=>{switch(e){case"exports":return i;case"module":return a;default:return s(e)}}))).then((s=>{const e=n(...s);return i.default||(i.default=e),i}))})))}}define("./service-worker.js",["./workbox-19973080"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"da188a67f3f404ed95a4b12e2481011d"},{url:"about.html",revision:"e20f307f1e450c32fa4fba1b523a4e9c"},{url:"assets/css/styles.85e1b4c0.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/search.b017a09f.svg",revision:null},{url:"assets/js/171.e68cb594.js",revision:null},{url:"assets/js/4.ee945d19.js",revision:null},{url:"assets/js/644.5bd954eb.js",revision:null},{url:"assets/js/930.96f97f5c.js",revision:null},{url:"assets/js/app.2770ee02.js",revision:null},{url:"assets/js/runtime~app.7543e3b8.js",revision:null},{url:"assets/js/v-22a39d25.f3073a58.js",revision:null},{url:"assets/js/v-2b00e1de.7bf3bb31.js",revision:null},{url:"assets/js/v-3706649a.5e5a9c3c.js",revision:null},{url:"assets/js/v-50bbbf8f.b88a832a.js",revision:null},{url:"assets/js/v-590a42d9.6be70175.js",revision:null},{url:"assets/js/v-760ae03a.9858cecd.js",revision:null},{url:"assets/js/v-7b0227ad.7263190d.js",revision:null},{url:"assets/js/v-8daa1a0e.49c6ffcd.js",revision:null},{url:"icons/msapplication-icon-144x144.png",revision:"fcdb883a918c9f9cb0d4e45e8da2efad"},{url:"images/icons/android-chrome-192x192.png",revision:"ad71587e1022e39967b24497b0374cf2"},{url:"images/icons/android-chrome-384x384.png",revision:"902eef751fa28010a32bd35b5ea0e8a0"},{url:"images/icons/apple-touch-icon.png",revision:"12472bd74f28937be26c9f7051949200"},{url:"images/icons/favicon-16x16.png",revision:"85da7b1c043b598a4b9147d81ee90ae5"},{url:"images/icons/favicon-32x32.png",revision:"d1b628cac10256255bb008870cdb8ade"},{url:"images/icons/mstile-150x150.png",revision:"987c12dc88f18fa7b245882b52840afd"},{url:"images/icons/safari-pinned-tab.svg",revision:"8b37014f74967359a811bab0dc9fb43d"},{url:"index.html",revision:"244b49595436c3bac5d02b4c2200a29f"},{url:"js/download.js",revision:"f6f5bfb4dd26411520445eb91066afe0"},{url:"nav.html",revision:"bc0709389b1e57439cbeff9c842bda43"},{url:"project.html",revision:"33d5d788170b4301758cc358c140bfd9"},{url:"support.html",revision:"7a3d0c9844a2b110573a6ad5990dbc76"},{url:"windows/software.html",revision:"92ca4b68441452266936c5495c0b1d28"},{url:"windows/wepe.html",revision:"7d9cf123533cef7ffacc53fd1ad26e7c"}],{})}));
