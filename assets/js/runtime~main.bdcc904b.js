(()=>{"use strict";var e,a,d,c,t,f={},r={};function b(e){var a=r[e];if(void 0!==a)return a.exports;var d=r[e]={id:e,loaded:!1,exports:{}};return f[e].call(d.exports,d,d.exports,b),d.loaded=!0,d.exports}b.m=f,b.c=r,e=[],b.O=(a,d,c,t)=>{if(!d){var f=1/0;for(i=0;i<e.length;i++){d=e[i][0],c=e[i][1],t=e[i][2];for(var r=!0,o=0;o<d.length;o++)(!1&t||f>=t)&&Object.keys(b.O).every((e=>b.O[e](d[o])))?d.splice(o--,1):(r=!1,t<f&&(f=t));if(r){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[d,c,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var f={};a=a||[null,d({}),d([]),d(d)];for(var r=2&c&&e;"object"==typeof r&&!~a.indexOf(r);r=d(r))Object.getOwnPropertyNames(r).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,b.d(t,f),t},b.d=(e,a)=>{for(var d in a)b.o(a,d)&&!b.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,d)=>(b.f[d](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",460:"a5867b37",533:"b2b675dd",539:"a7736c46",626:"83c66aab",633:"bdfd825e",1124:"8aad06a1",1151:"9475880e",1477:"b2f554cd",1713:"a7023ddc",1866:"8fd0abbf",2218:"a86433e4",2293:"54024cf2",2535:"814f3328",2601:"284e4288",2769:"f78117e4",2887:"7e4060de",2963:"a3010290",3085:"1f391b9e",3089:"a6aa9e1f",3138:"24a232b3",3146:"64f55557",3205:"a80da1cf",3220:"e975039d",3608:"9e4087bc",3711:"56e32e60",3744:"55ac3a20",3751:"3720c009",3996:"586f4e02",4013:"01a85c17",4021:"54777cd3",4121:"55960ee5",4195:"c4f5d8e4",4236:"a134523d",4694:"29a36bd7",4890:"feab3c17",4940:"bce13c70",5060:"3d5871e3",5389:"5462f697",5653:"b652e05c",5867:"48b0f434",6103:"ccc49370",6280:"e9533fe9",6435:"4a915fd7",6652:"78060cbc",6938:"608ae6a4",7041:"578768cb",7092:"661132b8",7178:"68d8dadb",7213:"6f615a9b",7222:"0be9de06",7414:"393be207",7536:"83737d56",7918:"17896441",8152:"d760667c",8424:"36206b89",8610:"6875c492",9077:"b9046c77",9088:"3a2aaa2c",9244:"317b3801",9287:"6d453d64",9514:"1be78505",9671:"0e384e19",9817:"14eb3368",9924:"df203c0f"}[e]||e)+"."+{53:"86a2b156",210:"d5a9c034",460:"7f5c2ad5",533:"a6113b99",539:"844b0f81",626:"a3dbe065",633:"baa87a89",1124:"5eeb7160",1151:"5adc76f9",1477:"13d26e60",1713:"f8a2feb4",1866:"7e1b4fdd",2218:"2b448a69",2293:"3b9404ed",2529:"8e87124d",2535:"0e0087b0",2601:"514987a8",2769:"b595ed78",2887:"8ad742ef",2963:"967af96d",3085:"452ac86d",3089:"a0dd832b",3138:"cd389b1f",3146:"080b01b4",3205:"df241d05",3220:"28f7df71",3608:"d0b9de7e",3711:"850ec3f8",3744:"4ad8eea0",3751:"48eae1d1",3996:"0991b28d",4013:"d0a5d2e9",4021:"72bb8003",4121:"f0229b6c",4195:"2cdc6dfe",4236:"45569b36",4694:"3bff8256",4890:"ae0618d7",4940:"deb03248",4972:"21062de3",5060:"fec44c45",5389:"325f7261",5653:"32d13cd0",5867:"d4ba4997",6103:"76a1246b",6280:"8864650e",6435:"e1c6226f",6652:"5849f92b",6938:"18dfec0e",7041:"1ba2f3fb",7092:"87313372",7178:"4adbde57",7213:"db37a6d2",7222:"0c0880d7",7414:"9c8194db",7536:"b6cfa121",7918:"682f8e3c",8152:"d239893a",8424:"60afdb4b",8610:"0554b4b9",9077:"efccc774",9088:"49d2e409",9244:"1d395f46",9287:"852639b5",9514:"d8430fb6",9671:"d5562da0",9817:"a31699e9",9924:"cb3f8c8f"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},t="tech-talks-in:",b.l=(e,a,d,f)=>{if(c[e])c[e].push(a);else{var r,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==t+d){r=l;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,b.nc&&r.setAttribute("nonce",b.nc),r.setAttribute("data-webpack",t+d),r.src=e),c[e]=[a];var u=(a,d)=>{r.onerror=r.onload=null,clearTimeout(s);var t=c[e];if(delete c[e],r.parentNode&&r.parentNode.removeChild(r),t&&t.forEach((e=>e(d))),a)return a(d)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/",b.gca=function(e){return e={17896441:"7918","935f2afb":"53",a5867b37:"460",b2b675dd:"533",a7736c46:"539","83c66aab":"626",bdfd825e:"633","8aad06a1":"1124","9475880e":"1151",b2f554cd:"1477",a7023ddc:"1713","8fd0abbf":"1866",a86433e4:"2218","54024cf2":"2293","814f3328":"2535","284e4288":"2601",f78117e4:"2769","7e4060de":"2887",a3010290:"2963","1f391b9e":"3085",a6aa9e1f:"3089","24a232b3":"3138","64f55557":"3146",a80da1cf:"3205",e975039d:"3220","9e4087bc":"3608","56e32e60":"3711","55ac3a20":"3744","3720c009":"3751","586f4e02":"3996","01a85c17":"4013","54777cd3":"4021","55960ee5":"4121",c4f5d8e4:"4195",a134523d:"4236","29a36bd7":"4694",feab3c17:"4890",bce13c70:"4940","3d5871e3":"5060","5462f697":"5389",b652e05c:"5653","48b0f434":"5867",ccc49370:"6103",e9533fe9:"6280","4a915fd7":"6435","78060cbc":"6652","608ae6a4":"6938","578768cb":"7041","661132b8":"7092","68d8dadb":"7178","6f615a9b":"7213","0be9de06":"7222","393be207":"7414","83737d56":"7536",d760667c:"8152","36206b89":"8424","6875c492":"8610",b9046c77:"9077","3a2aaa2c":"9088","317b3801":"9244","6d453d64":"9287","1be78505":"9514","0e384e19":"9671","14eb3368":"9817",df203c0f:"9924"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,d)=>{var c=b.o(e,a)?e[a]:void 0;if(0!==c)if(c)d.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var t=new Promise(((d,t)=>c=e[a]=[d,t]));d.push(c[2]=t);var f=b.p+b.u(a),r=new Error;b.l(f,(d=>{if(b.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var t=d&&("load"===d.type?"missing":d.type),f=d&&d.target&&d.target.src;r.message="Loading chunk "+a+" failed.\n("+t+": "+f+")",r.name="ChunkLoadError",r.type=t,r.request=f,c[1](r)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,d)=>{var c,t,f=d[0],r=d[1],o=d[2],n=0;if(f.some((a=>0!==e[a]))){for(c in r)b.o(r,c)&&(b.m[c]=r[c]);if(o)var i=o(b)}for(a&&a(d);n<f.length;n++)t=f[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},d=self.webpackChunktech_talks_in=self.webpackChunktech_talks_in||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();