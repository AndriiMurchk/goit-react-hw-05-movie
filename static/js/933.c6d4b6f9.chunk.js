"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[933],{197:function(e,t,r){r.d(t,{E3:function(){return u},Hx:function(){return g},Mc:function(){return p},_k:function(){return s},uV:function(){return h}});var n=r(861),i=r(757),a=r.n(i),o=r(243);o.Z.defaults.baseURL="https://api.themoviedb.org";var c="a3ea6037e929c907cd6335d101a9b094";function s(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/3/trending/movie/day?api_key=".concat(c,"&page=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(a().mark((function e(t,r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(t,"&page=1&include_adult=false&page=").concat(r));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/3/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/3/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/3/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},25:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{Z:function(){return h}});var o=r(791),c=function(){return c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},c.apply(this,arguments)};var s=function(e){var t=e.animate,r=void 0===t||t,n=e.animateBegin,i=e.backgroundColor,a=void 0===i?"#f5f6f7":i,s=e.backgroundOpacity,l=void 0===s?1:s,u=e.baseUrl,d=void 0===u?"":u,p=e.children,f=e.foregroundColor,h=void 0===f?"#eee":f,v=e.foregroundOpacity,g=void 0===v?1:v,x=e.gradientRatio,m=void 0===x?2:x,y=e.gradientDirection,b=void 0===y?"left-right":y,j=e.uniqueKey,w=e.interval,O=void 0===w?.25:w,Z=e.rtl,k=void 0!==Z&&Z,E=e.speed,P=void 0===E?1.2:E,_=e.style,C=void 0===_?{}:_,S=e.title,U=void 0===S?"Loading...":S,B=e.beforeMask,D=void 0===B?null:B,M=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),G=j||Math.random().toString(36).substring(6),H=G+"-diff",L=G+"-animated-diff",T=G+"-aria",R=k?{transform:"scaleX(-1)"}:null,q="0; "+O+"; 1",z=P+"s",N="top-bottom"===b?"rotate(90)":void 0;return(0,o.createElement)("svg",c({"aria-labelledby":T,role:"img",style:c(c({},C),R)},M),U?(0,o.createElement)("title",{id:T},U):null,D&&(0,o.isValidElement)(D)?D:null,(0,o.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+d+"#"+H+")",style:{fill:"url("+d+"#"+L+")"}}),(0,o.createElement)("defs",null,(0,o.createElement)("clipPath",{id:H},p),(0,o.createElement)("linearGradient",{id:L,gradientTransform:N},(0,o.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:l},r&&(0,o.createElement)("animate",{attributeName:"offset",values:-m+"; "+-m+"; 1",keyTimes:q,dur:z,repeatCount:"indefinite",begin:n})),(0,o.createElement)("stop",{offset:"50%",stopColor:h,stopOpacity:g},r&&(0,o.createElement)("animate",{attributeName:"offset",values:-m/2+"; "+-m/2+"; "+(1+m/2),keyTimes:q,dur:z,repeatCount:"indefinite",begin:n})),(0,o.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:l},r&&(0,o.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+m),keyTimes:q,dur:z,repeatCount:"indefinite",begin:n})))))},l=function(e){return e.children?(0,o.createElement)(s,c({},e)):(0,o.createElement)(u,c({},e))},u=function(e){return(0,o.createElement)(l,c({viewBox:"0 0 476 124"},e),(0,o.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,o.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,o.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,o.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,o.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,o.createElement)("circle",{cx:"20",cy:"20",r:"20"}))},d=l,p=r(184),f=function(e){return(0,p.jsxs)(d,a(a({viewBox:"0 0 400 150",speed:2,width:400,height:600,backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},e),{},{children:[(0,p.jsx)("circle",{cx:"10",cy:"20",r:"8"}),(0,p.jsx)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"}),(0,p.jsx)("circle",{cx:"10",cy:"50",r:"8"}),(0,p.jsx)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"}),(0,p.jsx)("circle",{cx:"10",cy:"80",r:"8"}),(0,p.jsx)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"}),(0,p.jsx)("circle",{cx:"10",cy:"110",r:"8"}),(0,p.jsx)("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"})]}))};f.metadata={name:"DaniloWoz",github:"danilowoz",description:"Bullet list",filename:"BulletList"};var h=f},933:function(e,t,r){r.r(t),r.d(t,{default:function(){return T}});var n,i,a,o,c,s,l,u,d,p,f,h=r(861),v=r(439),g=r(757),x=r.n(g),m=r(689),y=r(791),b=r(197),j=r(168),w=r(87),O=r(444),Z=(0,O.ZP)(w.rU)(n||(n=(0,j.Z)(["\n \n"]))),k=r(184),E=function(e){var t=e.to,r=e.children;return(0,k.jsx)(Z,{to:t,children:r})},P=r(25),_=O.ZP.div(i||(i=(0,j.Z)(["\n  max-width: 1200px;\n  padding: 14px 10px;\n\n"]))),C=O.ZP.div(a||(a=(0,j.Z)(["\n  height: 350px;\n  display: flex;\n  gap: 16px;\n"]))),S=O.ZP.h2(o||(o=(0,j.Z)(["\n    margin-bottom: 16px;\n"]))),U=O.ZP.div(c||(c=(0,j.Z)(["\n    margin-top: 20px;\n"]))),B=O.ZP.div(s||(s=(0,j.Z)(["\n    margin-top: 20px;\n"]))),D=O.ZP.h3(l||(l=(0,j.Z)(["\n    margin-bottom: 8px;\n"]))),M=O.ZP.div(u||(u=(0,j.Z)(["\n    padding-top: 20px;\n"]))),G=O.ZP.ul(d||(d=(0,j.Z)(["\n\n"]))),H=O.ZP.li(p||(p=(0,j.Z)(["\n  \n  \n"]))),L=(0,O.ZP)(w.OL)(f||(f=(0,j.Z)(["\n  font-size: 16px;\n\n  display: block;\n\n\n\n \n        \n"]))),T=function(){var e,t,r,n,i,a,o=(0,m.UO)().id,c=(0,m.TH)(),s=(0,y.useState)({}),l=(0,v.Z)(s,2),u=l[0],d=l[1];return(0,y.useEffect)((function(){function e(){return e=(0,h.Z)(x().mark((function e(t){var r,n;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.Mc)(t);case 2:r=e.sent,n={title:r.original_title,src:r.poster_path,year:r.release_date.slice(0,4),score:Math.round(10*r.vote_average),genres:r.genres.map((function(e){return e.name})).join(", "),overview:r.overview},d(n);case 5:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(t){e.apply(this,arguments)}(o)}),[o]),(0,k.jsx)("main",{children:(0,k.jsxs)(_,{children:[(0,k.jsx)(E,{to:null!==(e=null===c||void 0===c||null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:"Go back"}),(0,k.jsxs)(C,{children:[(0,k.jsx)("img",{src:u.src?"https://image.tmdb.org/t/p/w500/".concat(u.src):"https://cdn.the-village.ru/the-village.ru/post_image-image/1jHOb464jtkGWX8LGBnHHw-article.png",alt:u.title}),(0,k.jsxs)("div",{children:[(0,k.jsxs)("div",{children:[(0,k.jsxs)(S,{children:[u.title," (",u.year,")"]}),(0,k.jsxs)("p",{children:["User score: ",u.score,"%"]})]}),(0,k.jsxs)(U,{children:[(0,k.jsx)(D,{children:"Overview:"}),(0,k.jsx)("p",{children:u.overview})]}),(0,k.jsxs)(B,{children:[(0,k.jsx)(D,{children:"Genres:"}),(0,k.jsx)("p",{children:u.genres})]})]})]}),(0,k.jsxs)(M,{children:[(0,k.jsx)(S,{children:"Additional information"}),(0,k.jsxs)(G,{children:[(0,k.jsx)(H,{children:(0,k.jsx)(L,{to:"cast",state:{from:null!==(r=null===c||void 0===c||null===(n=c.state)||void 0===n?void 0:n.from)&&void 0!==r?r:"/"},children:"Cast"})}),(0,k.jsx)(H,{children:(0,k.jsx)(L,{to:"reviews",state:{from:null!==(i=null===c||void 0===c||null===(a=c.state)||void 0===a?void 0:a.from)&&void 0!==i?i:"/"},children:"Reviews"})})]}),(0,k.jsx)(y.Suspense,{fallback:(0,k.jsx)(P.Z,{}),children:(0,k.jsx)(m.j3,{})})]})]})})}}}]);
//# sourceMappingURL=933.c6d4b6f9.chunk.js.map