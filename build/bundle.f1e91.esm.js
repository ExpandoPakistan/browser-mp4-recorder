!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="mdyV")}({"+X2y":function(e,t,n){const r=n("RxDq"),o=n("1jnP"),i=n("35xb");e.exports={defaultOptions:r,getModule:o,fetchFile:i}},"+gJh":function(e){e.exports=JSON.parse('{"_from":"@ffmpeg/ffmpeg@^0.8.3","_id":"@ffmpeg/ffmpeg@0.8.3","_inBundle":false,"_integrity":"sha512-VtEMXMTuAYHC7NUh3E89mxbqsLxI3geAr+Z5ZQ+8VQNIl22dBtFZ1x2g76f6w+JIDZkrmjqnZ/6oc/henIEaVw==","_location":"/@ffmpeg/ffmpeg","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"@ffmpeg/ffmpeg@^0.8.3","name":"@ffmpeg/ffmpeg","escapedName":"@ffmpeg%2fffmpeg","scope":"@ffmpeg","rawSpec":"^0.8.3","saveSpec":null,"fetchSpec":"^0.8.3"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/@ffmpeg/ffmpeg/-/ffmpeg-0.8.3.tgz","_shasum":"7266e621bef7e452d6e9cd71e188f9b7da082947","_spec":"@ffmpeg/ffmpeg@^0.8.3","_where":"/Users/msalar/Expando/Repositories/browser-mp4-recorder/tiny-mp4-recorder","author":{"name":"Jerome Wu","email":"jeromewus@gmail.com"},"browser":{"./src/node/index.js":"./src/browser/index.js"},"bugs":{"url":"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},"bundleDependencies":false,"dependencies":{"@ffmpeg/core":"^0.7.1","idb":"^4.0.5","is-electron":"^2.2.0","is-url":"^1.2.4","node-fetch":"^2.6.0","regenerator-runtime":"^0.13.5","resolve-url":"^0.2.1"},"deprecated":false,"description":"FFmpeg WebAssembly version","devDependencies":{"@babel/core":"^7.9.0","@babel/preset-env":"^7.9.0","babel-loader":"^8.1.0","cors":"^2.8.5","eslint":"^6.8.0","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.20.1","expect.js":"^0.3.1","express":"^4.17.1","mocha":"^5.2.0","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","nyc":"^14.1.1","wait-on":"^3.3.0","webpack":"^4.42.0","webpack-cli":"^3.3.11","webpack-dev-middleware":"^3.7.2"},"directories":{"example":"examples"},"engines":{"node":">=12.16.1"},"homepage":"https://github.com/ffmpegwasm/ffmpeg.wasm#readme","keywords":["ffmpeg","WebAssembly","video"],"license":"MIT","main":"src/index.js","name":"@ffmpeg/ffmpeg","repository":{"type":"git","url":"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},"scripts":{"build":"rimraf dist && webpack --config scripts/webpack.config.prod.js","lint":"eslint src","prepublishOnly":"npm run build","start":"node scripts/server.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html","test:node":"node --experimental-wasm-threads --experimental-wasm-bulk-memory node_modules/.bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","wait":"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js"},"version":"0.8.3"}')},"1jnP":function(e,t,n){const{log:r}=n("RV+f");e.exports=async({corePath:e})=>{if(void 0===window.Module){r("info","fetch ffmpeg-core.worker.js script");const t=await(await fetch(e.replace("ffmpeg-core.js","ffmpeg-core.worker.js"))).blob();return window.FFMPEG_CORE_WORKER_SCRIPT=URL.createObjectURL(t),r("info",`worker object URL=${window.FFMPEG_CORE_WORKER_SCRIPT}`),r("info",`download ffmpeg-core script (~25 MB) from ${e}`),new Promise((t=>{const n=document.createElement("script"),o=()=>{n.removeEventListener("load",o),r("info","initialize ffmpeg-core"),window.Module.onRuntimeInitialized=()=>{r("info","ffmpeg-core initialized"),t(window.Module)}};n.src=e,n.type="text/javascript",n.addEventListener("load",o),document.getElementsByTagName("head")[0].appendChild(n)}))}return r("info","ffmpeg-core is loaded already"),Promise.resolve(window.Module)}},"35xb":function(e,t,n){const r=n("I7/o");e.exports=async e=>{let t=e;if(void 0===e)return"undefined";if("string"==typeof e)if(/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(e))t=atob(e.split(",")[1]).split("").map((e=>e.charCodeAt(0)));else{const n=await fetch(r(e));t=await n.arrayBuffer()}else(e instanceof File||e instanceof Blob)&&(t=await(n=e,new Promise(((e,t)=>{const r=new FileReader;r.onload=()=>{e(r.result)},r.onerror=({target:{error:{code:e}}})=>{t(Error(`File could not be read! Code=${e}`))},r.readAsArrayBuffer(n)}))));var n;return new Uint8Array(t)}},"8v93":function(e,t,n){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i="browser"===n("PvGV")("type")?n("I7/o"):e=>e;e.exports=e=>{const t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e);return["corePath"].forEach((n=>{void 0!==e[n]&&(t[n]=i(t[n]))})),t}},"I7/o":function(e,t,n){var r,o;void 0===(o="function"==typeof(r=function(){function e(){var e=arguments.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var t=document.createElement("base");if(t.href=arguments[0],1===e)return t.href;var n=document.getElementsByTagName("head")[0];n.insertBefore(t,n.firstChild);for(var r,o=document.createElement("a"),i=1;i<e;i++)o.href=arguments[i],t.href=r=o.href;return n.removeChild(t),r}return e})?r.call(t,n,t,e):r)||(e.exports=o)},"M0/P":function(e,t,n){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l=["log","logger","progress"],a=n("hjwe"),{setLogging:s,log:u}=n("RV+f"),f=n("8v93"),_=n("WJQe"),p=n("Zggr"),d=n("TNvS"),{defaultOptions:h,getModule:m,fetchFile:y}=n("+X2y"),g=Error("FFmpeg.js is not ready, make sure you have completed load()."),v=Error("FFmpeg.js can only run one command at a time");let b=null,w=null;e.exports=(e={})=>{let t=null,n=!1;const r=f(o(o({},h),e)),{log:i,logger:O,progress:k}=r,x=c(r,l);s(i);const j=(e,t)=>{if(null===b)throw g;return u("info",`FS.${e} ${t[0]}`),b.FS[e](...t)},E=(e,t)=>j("writeFile",[e,t]),P=e=>{if(null===w)throw g;if(n)throw v;return n=!0,new Promise((n=>{const r=[...a,...d(e)].filter((e=>0!==e.length));u("info",`ffmpeg command: ${r.join(" ")}`),t=n,w(r.length,p(b,r))}))};return{load:async()=>{null===b&&(u("info","load ffmpeg-core"),b=await m(x),b.setLogger((e=>{(({message:e,type:r})=>{"ffmpeg-stdout"===r&&"FFMPEG_END"===e&&null!==t&&(t(),t=null,n=!1)})(e),_(e,k),O(e),u(e.type,e.message)})),null===w&&(w=b.cwrap("proxy_main","number",["number","number"])),u("info","ffmpeg-core loaded"))},FS:j,write:async(e,t)=>j("writeFile",[e,await y(t)]),writeText:E,read:e=>j("readFile",[e]),remove:e=>j("unlink",[e]),ls:e=>j("readdir",[e]),run:P,transcode:(e,t,n="")=>P(`-i ${e} ${n} ${t}`),trim:(e,t,n,r,o="")=>P(`-i ${e} -ss ${n} -to ${r} ${o} ${t}`),concatDemuxer:(e,t,n="")=>{const r=e.reduce(((e,t)=>`${e}\nfile ${t}`),"");return E("concat_list.txt",r),P(`-f concat -safe 0 -i concat_list.txt ${n} ${t}`)}}}},MV5A:function(){},PvGV:function(e,t,n){const r=n("n8Vf");e.exports=e=>{const t={};return r()?t.type="electron":"object"==typeof window?t.type="browser":"function"==typeof importScripts?t.type="webworker":"object"==typeof process&&(t.type="node"),void 0===e?t:t[e]}},QfWi:function(e,t,n){"use strict";n.r(t),function(e){function r(){const[t,n]=Object(i.b)(!1),[r,c]=Object(i.b)(!1);return Object(i.a)((()=>{Object(o.b)("assets",(()=>{n(!0)}))}),[]),e("div",null,t?e("div",null,e("button",{onClick:async()=>{r?r&&(await o.a.stopRecording(),c(!1)):(await o.a.startRecording(),c(!0))}},r?"Stop Recording":"Start Recording")):e("h1",null,"Loading...."))}n.d(t,"default",(function(){return r}));n("MV5A");var o=n("z+3S"),i=n("l8WD")}.call(this,n("hosL").h)},"RV+f":function(e,t){let n=!1;t.logging=n,t.setLogging=e=>{n=e},t.log=(e,t)=>n?console.log(`[${e}] ${t}`):null},RxDq:function(e,t,n){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c=n("I7/o"),{dependencies:l}=n("+gJh"),a=n("VFhb");e.exports=o(o({},a),{},{corePath:"undefined"!=typeof process&&"development"===process.env.FFMPEG_ENV?c("/node_modules/@ffmpeg/core/ffmpeg-core.js"):`https://unpkg.com/@ffmpeg/core@v${l["@ffmpeg/core"].substring(1)}/ffmpeg-core.js`})},TNvS:function(e){e.exports=e=>{const t=[];let n=0,r=0;for(;(n=e.indexOf(" ",r))>=0;){let o=e.substring(r,n),i=o.indexOf("'"),c=o.indexOf('"');if(0===i||0===c){const i=o[0],c=e.indexOf(i,r+1);if(c<0)throw new Error(`Bad command escape sequence ${i} near ${n}`);o=e.substring(r+1,c),r=c+2,t.push(o)}else if(i>0||c>0){-1===i&&(i=1/0),-1===c&&(c=1/0);const l=i<c?"'":'"',a=Math.min(i,c),s=e.indexOf(l,r+a+1);if(s<0)throw new Error(`Bad command escape sequence ${l} near ${n}`);o=e.substring(r,s+1),r=s+2,t.push(o)}else""!==o?(t.push(o),r=n+1):r=n+1}return r!==e.length&&t.push(e.substring(r)),t}},VFhb:function(e){e.exports={log:!1,logger:()=>{},progress:()=>{}}},WJQe:function(e){let t=0;const n=e=>{const[t,n,r]=e.split(":");return 60*parseFloat(t)*60+60*parseFloat(n)+parseFloat(r)};e.exports=({message:e},r)=>{if("string"==typeof e)if(e.startsWith("  Duration")){const r=e.split(", ")[0].split(": ")[1],o=n(r);(0===t||t>o)&&(t=o)}else if(e.startsWith("frame")){const o=e.split("time=")[1].split(" ")[0];r({ratio:n(o)/t})}else e.startsWith("video:")&&r({ratio:1})}},Zggr:function(e,t,n){const r=n("wGbK");e.exports=(e,t)=>{const n=e._malloc(t.length*Uint32Array.BYTES_PER_ELEMENT);return t.forEach(((t,o)=>{const i=r(e,t);e.setValue(n+4*o,i,"i32")})),n}},hjwe:function(e){e.exports=["./ffmpeg","-nostdin","-hide_banner"]},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o,i,l={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:l[i]=t[i];if(arguments.length>2&&(l.children=arguments.length>3?R.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===l[i]&&(l[i]=e.defaultProps[i]);return c(e,l,r,o,null)}function c(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++T:o};return null!=A.vnode&&A.vnode(i),i}function l(){return{current:null}}function a(e){return e.children}function s(e,t){this.props=e,this.context=t}function u(e,t){if(null==t)return e.__?u(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?u(e):null}function f(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return f(e)}}function _(e){(!e.__d&&(e.__d=!0)&&M.push(e)&&!p.__r++||U!==A.debounceRendering)&&((U=A.debounceRendering)||N)(p)}function p(){for(var e;p.__r=M.length;)e=M.sort((function(e,t){return e.__v.__b-t.__v.__b})),M=[],e.some((function(e){var t,n,o,i,c,l;e.__d&&(c=(i=(t=e).__v).__e,(l=t.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,O(l,i,o,t.__n,void 0!==l.ownerSVGElement,null!=i.__h?[c]:null,n,null==c?u(i):c,i.__h),k(n,i),i.__e!=c&&f(i)))}))}function d(e,t,n,r,o,i,l,s,f,_){var p,d,m,g,v,b,w,k=r&&r.__k||V,x=k.length;for(n.__k=[],p=0;p<t.length;p++)if(null!=(g=n.__k[p]=null==(g=t[p])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g||"bigint"==typeof g?c(null,g,null,null,g):Array.isArray(g)?c(a,{children:g},null,null,null):g.__b>0?c(g.type,g.props,g.key,null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(m=k[p])||m&&g.key==m.key&&g.type===m.type)k[p]=void 0;else for(d=0;d<x;d++){if((m=k[d])&&g.key==m.key&&g.type===m.type){k[d]=void 0;break}m=null}O(e,g,m=m||W,o,i,l,s,f,_),v=g.__e,(d=g.ref)&&m.ref!=d&&(w||(w=[]),m.ref&&w.push(m.ref,null,g),w.push(d,g.__c||v,g)),null!=v?(null==b&&(b=v),"function"==typeof g.type&&null!=g.__k&&g.__k===m.__k?g.__d=f=h(g,f,e):f=y(e,g,m,k,v,f),_||"option"!==n.type?"function"==typeof n.type&&(n.__d=f):e.value=""):f&&m.__e==f&&f.parentNode!=e&&(f=u(m))}for(n.__e=b,p=x;p--;)null!=k[p]&&("function"==typeof n.type&&null!=k[p].__e&&k[p].__e==n.__d&&(n.__d=u(r,p+1)),E(k[p],k[p]));if(w)for(p=0;p<w.length;p++)j(w[p],w[++p],w[++p])}function h(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,t="function"==typeof o.type?h(o,t,n):y(n,o,o,e.__k,o.__e,t));return t}function m(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){m(e,t)})):t.push(e)),t}function y(e,t,n,r,o,i){var c,l,a;if(void 0!==t.__d)c=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),c=null;else{for(l=i,a=0;(l=l.nextSibling)&&a<r.length;a+=2)if(l==o)break e;e.insertBefore(o,i),c=i}return void 0!==c?c:o.nextSibling}function g(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||H.test(t)?n:n+"px"}function v(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||g(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||g(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?w:b,i):e.removeEventListener(t,i?w:b,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function b(e){this.l[e.type+!1](A.event?A.event(e):e)}function w(e){this.l[e.type+!0](A.event?A.event(e):e)}function O(e,t,n,o,i,c,l,u,f){var _,p,h,m,y,g,v,b,w,O,k,j=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(f=n.__h,u=t.__e=n.__e,t.__h=null,c=[u]),(_=A.__b)&&_(t);try{e:if("function"==typeof j){if(b=t.props,w=(_=j.contextType)&&o[_.__c],O=_?w?w.props.value:_.__:o,n.__c?v=(p=t.__c=n.__c).__=p.__E:("prototype"in j&&j.prototype.render?t.__c=p=new j(b,O):(t.__c=p=new s(b,O),p.constructor=j,p.render=P),w&&w.sub(p),p.props=b,p.state||(p.state={}),p.context=O,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=j.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,j.getDerivedStateFromProps(b,p.__s))),m=p.props,y=p.state,h)null==j.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==j.getDerivedStateFromProps&&b!==m&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,O),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,O)||t.__v===n.__v){p.props=b,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),p.__h.length&&l.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,O),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(m,y,g)}))}p.context=O,p.props=b,p.state=p.__s,(_=A.__r)&&_(t),p.__d=!1,p.__v=t,p.__P=e,_=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(g=p.getSnapshotBeforeUpdate(m,y)),k=null!=_&&_.type===a&&null==_.key?_.props.children:_,d(e,Array.isArray(k)?k:[k],t,n,o,i,c,l,u,f),p.base=t.__e,t.__h=null,p.__h.length&&l.push(p),v&&(p.__E=p.__=null),p.__e=!1}else null==c&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=x(n.__e,t,n,o,i,c,l,f);(_=A.diffed)&&_(t)}catch(e){t.__v=null,(f||null!=c)&&(t.__e=u,t.__h=!!f,c[c.indexOf(u)]=null),A.__e(e,t,n)}}function k(e,t){A.__c&&A.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){A.__e(e,t.__v)}}))}function x(e,t,n,r,i,c,l,a){var s,f,_,p=n.props,h=t.props,m=t.type,y=0;if("svg"===m&&(i=!0),null!=c)for(;y<c.length;y++)if((s=c[y])&&(s===e||(m?s.localName==m:3==s.nodeType))){e=s,c[y]=null;break}if(null==e){if(null===m)return document.createTextNode(h);e=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,h.is&&h),c=null,a=!1}if(null===m)p===h||a&&e.data===h||(e.data=h);else{if(c=c&&R.call(e.childNodes),f=(p=n.props||W).dangerouslySetInnerHTML,_=h.dangerouslySetInnerHTML,!a){if(null!=c)for(p={},y=0;y<e.attributes.length;y++)p[e.attributes[y].name]=e.attributes[y].value;(_||f)&&(_&&(f&&_.__html==f.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||v(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||v(e,i,t[i],n[i],r)}(e,h,p,i,a),_)t.__k=[];else if(y=t.props.children,d(e,Array.isArray(y)?y:[y],t,n,r,i&&"foreignObject"!==m,c,l,c?c[0]:n.__k&&u(n,0),a),null!=c)for(y=c.length;y--;)null!=c[y]&&o(c[y]);a||("value"in h&&void 0!==(y=h.value)&&(y!==e.value||"progress"===m&&!y)&&v(e,"value",y,p.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==e.checked&&v(e,"checked",y,p.checked,!1))}return e}function j(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){A.__e(e,n)}}function E(e,t,n){var r,i;if(A.unmount&&A.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||j(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){A.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&E(r[i],t,"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__e=e.__d=void 0}function P(e,t,n){return this.constructor(e,n)}function S(e,t,n){var r,o,c;A.__&&A.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,c=[],O(t,e=(!r&&n||t).__k=i(a,null,[e]),o||W,W,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?R.call(t.childNodes):null,c,!r&&n?n:o?o.__e:t.firstChild,r),k(c,e)}function L(e,t){S(e,t,L)}function C(e,t,n){var o,i,l,a=r({},e.props);for(l in t)"key"==l?o=t[l]:"ref"==l?i=t[l]:a[l]=t[l];return arguments.length>2&&(a.children=arguments.length>3?R.call(arguments,2):n),c(e.type,a,o||e.key,i||e.ref,null)}function F(e,t){var n={__c:t="__cC"+$++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(_)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return S})),n.d(t,"hydrate",(function(){return L})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return a})),n.d(t,"createRef",(function(){return l})),n.d(t,"isValidElement",(function(){return D})),n.d(t,"Component",(function(){return s})),n.d(t,"cloneElement",(function(){return C})),n.d(t,"createContext",(function(){return F})),n.d(t,"toChildArray",(function(){return m})),n.d(t,"options",(function(){return A}));var R,A,T,D,M,N,U,$,W={},V=[],H=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;R=V.slice,A={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},T=0,D=function(e){return null!=e&&void 0===e.constructor},s.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),_(this))},s.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_(this))},s.prototype.render=a,M=[],N="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,$=0},l8WD:function(e,t,n){"use strict";function r(e,t){x.options.__h&&x.options.__h(O,e,j||t),j=0;var n=O.__H||(O.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function o(e){return j=1,i(f,e)}function i(e,t,n){var o=r(w++,2);return o.t=e,o.__c||(o.__=[n?n(t):f(void 0,t),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=O),o.__}function c(e,t){var n=r(w++,3);!x.options.__s&&u(n.__H,t)&&(n.__=e,n.__H=t,O.__H.__h.push(n))}function l(){E.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(a),e.__H.__h.forEach(s),e.__H.__h=[]}catch(t){e.__H.__h=[],x.options.__e(t,e.__v)}})),E=[]}function a(e){var t=O;"function"==typeof e.__c&&e.__c(),O=t}function s(e){var t=O;e.__c=e.__(),O=t}function u(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function f(e,t){return"function"==typeof t?t(e):t}function _(e,t){for(var n in t)e[n]=t[n];return e}function p(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}function d(e){this.props=e}function h(){this.__u=0,this.t=null,this.__b=null}function m(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function y(){this.u=null,this.o=null}function g(){}function v(){return this.cancelBubble}function b(){return this.defaultPrevented}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var w,O,k,x=n("hosL"),j=0,E=[],P=x.options.__b,S=x.options.__r,L=x.options.diffed,C=x.options.__c,F=x.options.unmount;x.options.__b=function(e){O=null,P&&P(e)},x.options.__r=function(e){S&&S(e),w=0;var t=(O=e.__c).__H;t&&(t.__h.forEach(a),t.__h.forEach(s),t.__h=[])},x.options.diffed=function(e){L&&L(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==E.push(t)&&k===x.options.requestAnimationFrame||((k=x.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),R&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);R&&(t=requestAnimationFrame(n))})(l)),O=void 0},x.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(a),e.__h=e.__h.filter((function(e){return!e.__||s(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],x.options.__e(n,e.__v)}})),C&&C(e,t)},x.options.unmount=function(e){F&&F(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(a)}catch(e){x.options.__e(e,t.__v)}};var R="function"==typeof requestAnimationFrame;(d.prototype=new x.Component).isPureReactComponent=!0,d.prototype.shouldComponentUpdate=function(e,t){return p(this.props,e)||p(this.state,t)};var A=x.options.__b;x.options.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),A&&A(e)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var T=x.options.__e;x.options.__e=function(e,t,n){if(e.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t);T(e,t,n)};var D=x.options.unmount;x.options.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),D&&D(e)},(h.prototype=new x.Component).__c=function(e,t){var n=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=m(r.__v),i=!1,c=function(){i||(i=!0,n.__R=null,o?o(l):l())};n.__R=c;var l=function(){if(!--r.__u){if(r.state.__e){var e=r.state.__e;r.__v.__k[0]=function e(t,n,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map((function(t){return e(t,n,r)})),t.__c&&t.__c.__P===n&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},a=!0===t.__h;r.__u++||a||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(c,c)},h.prototype.componentWillUnmount=function(){this.t=[]},h.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function e(t,n,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),t.__c.__H=null),null!=(t=_({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=n),t.__c=null),t.__k=t.__k&&t.__k.map((function(t){return e(t,n,r)}))),t}(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__e&&Object(x.createElement)(x.Fragment,null,e.fallback);return o&&(o.__h=null),[Object(x.createElement)(x.Fragment,null,t.__e?null:e.children),o]};var M=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(y.prototype=new x.Component).__e=function(e){var t=this,n=m(t.__v),r=t.o.get(e);return r[0]++,function(o){var i=function(){t.props.revealOrder?(r.push(o),M(t,e,r)):o()};n?n(i):i()}},y.prototype.render=function(e){this.u=null,this.o=new Map;var t=Object(x.toChildArray)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},y.prototype.componentDidUpdate=y.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){M(e,n,t)}))};var N="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,U=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,$=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(e)};x.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(x.Component.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var W=x.options.event;x.options.event=function(e){return W&&(e=W(e)),e.persist=g,e.isPropagationStopped=v,e.isDefaultPrevented=b,e.nativeEvent=e};var V={configurable:!0,get:function(){return this.class}},H=x.options.vnode;x.options.vnode=function(e){var t=e.type,n=e.props,r=n;if("string"==typeof t){for(var o in r={},n){var i=n[o];"value"===o&&"defaultValue"in n&&null==i||("defaultValue"===o&&"value"in n&&null==n.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!$(n.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():U.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),r[o]=i)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(x.toChildArray)(n.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value)}))),"select"==t&&null!=r.defaultValue&&(r.value=Object(x.toChildArray)(n.children).forEach((function(e){e.props.selected=r.multiple?-1!=r.defaultValue.indexOf(e.props.value):r.defaultValue==e.props.value}))),e.props=r}t&&n.class!=n.className&&(V.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",V)),e.$$typeof=N,H&&H(e)};var I=x.options.__r;x.options.__r=function(e){I&&I(e),e.__c}},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:i,hydrate:c}=r,l=e=>e&&e.default?e.default:e,a=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof l(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild;0,(()=>{let t=l(n("QfWi")),r={};const s=document.querySelector('[type="__PREACT_CLI_DATA__"]');s&&(r=JSON.parse(decodeURI(s.innerHTML)).preRenderData||r);const u={preRenderData:r},f=r.url?a(r.url):"",_=c&&f===a(location.pathname);e=(_?c:i)(o(t,{CLI_DATA:u}),document.body,e)})()}},n8Vf:function(e){e.exports=function(){return"undefined"!=typeof window&&"object"==typeof window.process&&"renderer"===window.process.type||(!("undefined"==typeof process||"object"!=typeof process.versions||!process.versions.electron)||"object"==typeof navigator&&"string"==typeof navigator.userAgent&&navigator.userAgent.indexOf("Electron")>=0)}},wGbK:function(e){e.exports=(e,t)=>{const n=e._malloc((t.length+1)*Uint8Array.BYTES_PER_ELEMENT);for(let r=0;r<t.length;r+=1)e.setValue(n+r,t.charCodeAt(r),"i8");return e.setValue(n+t.length,0,"i8"),n}},wcNg:function(e){var t=function(e){"use strict";function t(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}function n(e,t,n,i){var c=Object.create((t&&t.prototype instanceof o?t:o).prototype),l=new _(i||[]);return c._invoke=function(e,t,n){var o=O;return function(i,c){if(o===x)throw new Error("Generator is already running");if(o===j){if("throw"===i)throw c;return d()}for(n.method=i,n.arg=c;;){var l=n.delegate;if(l){var a=s(l,n);if(a){if(a===E)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===O)throw o=j,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=x;var u=r(e,t,n);if("normal"===u.type){if(o=n.done?j:k,u.arg===E)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=j,n.method="throw",n.arg=u.arg)}}}(e,n,l),c}function r(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function o(){}function i(){}function c(){}function l(e){["next","throw","return"].forEach((function(n){t(e,n,(function(e){return this._invoke(n,e)}))}))}function a(e,t){function n(o,i,c,l){var a=r(e[o],e,i);if("throw"!==a.type){var s=a.arg,u=s.value;return u&&"object"==typeof u&&y.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,c,l)}),(function(e){n("throw",e,c,l)})):t.resolve(u).then((function(e){s.value=e,c(s)}),(function(e){return n("throw",e,c,l)}))}l(a.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function s(e,t){var n=e.iterator[t.method];if(n===h){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=h,s(e,t),"throw"===t.method))return E;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return E}var o=r(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,E;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=h),t.delegate=null,E):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,E)}function u(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function f(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(u,this),this.reset(!0)}function p(e){if(e){var t=e[v];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(y.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=h,t.done=!0,t};return r.next=r}}return{next:d}}function d(){return{value:h,done:!0}}var h,m=Object.prototype,y=m.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},v=g.iterator||"@@iterator",b=g.asyncIterator||"@@asyncIterator",w=g.toStringTag||"@@toStringTag";try{t({},"")}catch(e){t=function(e,t,n){return e[t]=n}}e.wrap=n;var O="suspendedStart",k="suspendedYield",x="executing",j="completed",E={},P={};P[v]=function(){return this};var S=Object.getPrototypeOf,L=S&&S(S(p([])));L&&L!==m&&y.call(L,v)&&(P=L);var C=c.prototype=o.prototype=Object.create(P);return i.prototype=C.constructor=c,c.constructor=i,i.displayName=t(c,w,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===i||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,t(e,w,"GeneratorFunction")),e.prototype=Object.create(C),e},e.awrap=function(e){return{__await:e}},l(a.prototype),a.prototype[b]=function(){return this},e.AsyncIterator=a,e.async=function(t,r,o,i,c){void 0===c&&(c=Promise);var l=new a(n(t,r,o,i),c);return e.isGeneratorFunction(r)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},l(C),t(C,w,"Generator"),C[v]=function(){return this},C.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=p,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=h,this.done=!1,this.delegate=null,this.method="next",this.arg=h,this.tryEntries.forEach(f),!e)for(var t in this)"t"===t.charAt(0)&&y.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=h)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){function t(t,r){return i.type="throw",i.arg=e,n.next=t,r&&(n.method="next",n.arg=h),!!r}if(this.done)throw e;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var c=y.call(o,"catchLoc"),l=y.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&y.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,E):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),E},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),f(n),E}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;f(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:p(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=h),E}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}},xUjM:function(e,t,n){n("wcNg");const r=n("M0/P");e.exports={createFFmpeg:r}},"z+3S":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var r=n("xUjM");let o=null,i=!1;const c=async(e,t=(()=>{}))=>{if(!i){i=!0;try{if(!o){let t=Object(r.createFFmpeg)({log:!0,corePath:`${e}/ffmpeg-core.js`});await t.load(),o=t}}catch(e){i=!1}i=!1,t&&t()}},l={state:{recording:!1,filePart:0,screenStream:null,recorder:null,chunks:[],downloadLock:!1},startRecording:async function(e){if(!o)return!1;this.state.recorder&&await this.stopRecording();const t=await navigator.mediaDevices.getDisplayMedia({video:{height:{ideal:1080},mediaStreamSource:{exact:["desktop"]},frameRate:{ideal:30}}}),n=await navigator.mediaDevices.getUserMedia({video:!1,audio:!0}),r=n.getAudioTracks()[0],i=t.getVideoTracks()[0],c=new MediaStream([r,i]);this.state.recording=!0,this.state.filePart=0;const l=new MediaRecorder(c,{mimeType:"video/webm;codecs=h264"});return l.ondataavailable=r=>{try{r.data.size>0&&this.state.chunks.push(r.data),!1===this.state.recording&&(this.state.recorder=null,t&&t.getTracks().forEach((e=>e.stop())),n&&n.getTracks().forEach((e=>e.stop()))),this.download(e)}catch(t){e&&e()}},l.start(),this.state.recorder=l,!0},stopRecording:async function(){return!!o&&(!!this.state.recorder&&(this.state.recording=!1,this.state.recorder.stop(),!0))},download:async function(e){if(0!==this.state.chunks.length&&!0!==this.state.downloadLock){for(this.state.downloadLock=!0;this.state.chunks.length>0;){let r=new Blob([this.state.chunks.shift()],{type:"video/webm;codecs=h264"});await o.write("test.webm",r),await o.transcode("test.webm","recording.mp4","-vcodec copy -qscale 0");const i=o.read("recording.mp4");var t=URL.createObjectURL(new Blob([i.buffer],{type:"video/mp4"})),n=document.createElement("a");document.body.appendChild(n),n.style="display: none",n.href=t,n.download=`recording-${this.state.filePart}.mp4`,n.click(),window.URL.revokeObjectURL(t),this.state.filePart+=1,e&&e();try{await o.remove("test.webm")}catch(e){}try{await o.remove("recording.mp4")}catch(e){}}this.state.downloadLock=!1}}}}});
//# sourceMappingURL=bundle.f1e91.esm.js.map