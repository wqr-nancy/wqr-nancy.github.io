if(!self.define){let e,i={};const r=(r,d)=>(r=new URL(r+".js",d).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(d,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let s={};const f=e=>r(e,a),n={module:{uri:a},exports:s,require:f};i[a]=Promise.all(d.map((e=>n[e]||f(e)))).then((e=>(c(...e),s)))}}define(["./workbox-77824c33"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/07/25/vConsole的使用/index.html",revision:"723186fb7151706d5c74a8dab908e75f"},{url:"2023/07/30/javascript-advanced1/index.html",revision:"a1f6c8246ffc473c47eb3162076a9840"},{url:"2023/08/14/记一次项目过程中遇到的错误/index.html",revision:"6d07b69f07d35dfd2aa42bb5e81200d3"},{url:"2023/09/05/git报错问题记录/index.html",revision:"92a9df4a892f8fc0cd70282584bcfdfa"},{url:"2023/09/05/wow动画/index.html",revision:"a29a9b90e91d1f0d3ffb49595b16b28a"},{url:"404.html",revision:"7ffe330c467925c54e3ba81b9b382687"},{url:"about/index.html",revision:"5f13b8804650aa0a09f40673e898d719"},{url:"archives/2023/07/index.html",revision:"3441244bed268399f85af494e5a55c04"},{url:"archives/2023/08/index.html",revision:"cb6a739598741a6490d7143cb71d1df0"},{url:"archives/2023/09/index.html",revision:"af72208e559e9387667b480c2972c29e"},{url:"archives/2023/index.html",revision:"5b4e351af93273232747e38ad42cc83b"},{url:"archives/index.html",revision:"fdf6d5287fcf3927704854cd30716601"},{url:"categories/index.html",revision:"8d899cc927115f8393596662be24af38"},{url:"categories/web/index.html",revision:"ba0efa62df532cfee29345271d91f0c8"},{url:"css/index.css",revision:"07bd2746f43a4379ee5cf2c2e1da2e84"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.jpg",revision:"99ba58710c2205a716c697d997340c96"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wx内置jsapi.png",revision:"87550173465db2cda203202386c3cf4b"},{url:"index.html",revision:"166921722d1ccbb160bdd868feb24b7f"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"3c620237c9d0b65fb8c5817f583604ee"},{url:"picture/index.html",revision:"e0cb30b4112bb657a3b6821e7bb18333"},{url:"picture/wechatError.png",revision:"87550173465db2cda203202386c3cf4b"},{url:"tags/error/index.html",revision:"69388512bfd7046e6c53eb8dfae5a8ca"},{url:"tags/git/index.html",revision:"a364383b410f12f52a613cb9bf33c2d4"},{url:"tags/index.html",revision:"f93ad09ee05ab899e4650d77f14596ff"},{url:"tags/javascript/index.html",revision:"b7bcf165ac343119be0768fdefa4bca3"},{url:"tags/js动画/index.html",revision:"c6b238e806111dc0f0aeea2aa441109b"},{url:"tags/vConsole/index.html",revision:"624d77f2e911792017a26cd1d111db44"}],{})}));
//# sourceMappingURL=service-worker.js.map
