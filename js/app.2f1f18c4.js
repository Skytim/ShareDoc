(function(t){function e(e){for(var s,i,r=e[0],o=e[1],c=e[2],d=0,u=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);h&&h(e);while(u.length)u.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],s=!0,i=1;i<a.length;i++){var r=a[i];0!==n[r]&&(s=!1)}s&&(l.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n={app:0},l=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"21b51715"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={about:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"4f97d08e"}[t]+".css",n=o.p+s,l=document.getElementsByTagName("link"),r=0;r<l.length;r++){var c=l[r],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===s||d===n))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){c=u[r],d=c.getAttribute("data-href");if(d===s||d===n)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var s=e&&e.target&&e.target.src||n,l=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=s,delete i[t],h.parentNode.removeChild(h),a(l)},h.href=n;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){i[t]=0})));var s=n[t];if(0!==s)if(s)e.push(s[2]);else{var l=new Promise((function(e,a){s=n[t]=[e,a]}));e.push(s[2]=l);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=r(t);var u=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(h);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",u.name="ChunkLoadError",u.type=s,u.request=i,a[1](u)}n[t]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/ShareDoc/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var h=d;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("router-view")],1)},n=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{toggleable:"lg"}},[a("b-link"),a("b-link",{attrs:{href:"javascript:void(0)",to:"/"}},[a("b-icon",{attrs:{icon:"book"}}),t._v(" ShareDoc ")],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav"),a("div",{staticClass:"ml-3"},[a("b-button-group",[a("b-button",{attrs:{variant:"success",to:"/"}},[t._v("Edit")]),a("b-button",{attrs:{variant:"info",to:"about"}},[t._v("Mirror")]),a("b-button",{attrs:{variant:"warning"}},[t._v("Readonly")])],1)],1)],1)],1)],1)},r=[],o={name:"Navbar"},c=o,d=a("2877"),u=Object(d["a"])(c,l,r,!1,null,null,null),h=u.exports,b={name:"App",components:{Navbar:h}},v=b,m=Object(d["a"])(v,i,n,!1,null,null,null),p=m.exports,f=a("2f62"),g=a("0e54"),w=a.n(g),C=a("1487"),y=a.n(C),x=a("cff8"),_=a.n(x);s["default"].use(f["a"]);var k=new f["a"].Store({state:{editorText:_.a.get("editorText")||""},mutations:{update:function(t,e){_.a.set("editorText",e),t.editorText=e}},actions:{update:function(t,e){t.commit("update",e)}},getters:{compiledMarkdown:function(t){return w()(t.editorText,{highlight:function(t,e){return e&&y.a.getLanguage(e)?y.a.highlight(e,t,!0).value:y.a.highlightAuto(t).value}})},getEditorText:function(t){return t.editorText}}}),T=a("5f5b"),j=a("b1e0"),E=(a("f9e3"),a("2dd8"),a("2c43"),a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",staticStyle:{height:"93vh"}},[a("nav",{staticClass:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse",attrs:{id:"sidebarMenu"}},[a("div",{staticClass:"sidebar-sticky pt-3"},[a("ul",{staticClass:"nav flex-column"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{href:"#"}},[a("svg",{staticClass:"feather feather-home",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}}),a("polyline",{attrs:{points:"9 22 9 12 15 12 15 22"}})]),t._v(" Workspace "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("svg",{staticClass:"feather feather-file",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}}),a("polyline",{attrs:{points:"13 2 13 9 20 9"}})]),t._v(" My Notes ")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("svg",{staticClass:"feather feather-file",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}}),a("polyline",{attrs:{points:"13 2 13 9 20 9"}})]),t._v(" Collaborate Notes ")])])]),a("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[a("span",[t._v("Saved reports")]),a("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#","aria-label":"Add a new report"}},[a("svg",{staticClass:"feather feather-plus-circle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),a("line",{attrs:{x1:"12",y1:"8",x2:"12",y2:"16"}}),a("line",{attrs:{x1:"8",y1:"12",x2:"16",y2:"12"}})])])]),a("ul",{staticClass:"nav flex-column mb-2"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("svg",{staticClass:"feather feather-file-text",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}}),a("polyline",{attrs:{points:"14 2 14 8 20 8"}}),a("line",{attrs:{x1:"16",y1:"13",x2:"8",y2:"13"}}),a("line",{attrs:{x1:"16",y1:"17",x2:"8",y2:"17"}}),a("polyline",{attrs:{points:"10 9 9 9 8 9"}})]),t._v(" Bookmark ")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("svg",{staticClass:"feather feather-file-text",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}}),a("polyline",{attrs:{points:"14 2 14 8 20 8"}}),a("line",{attrs:{x1:"16",y1:"13",x2:"8",y2:"13"}}),a("line",{attrs:{x1:"16",y1:"17",x2:"8",y2:"17"}}),a("polyline",{attrs:{points:"10 9 9 9 8 9"}})]),t._v(" Recent ")])])])])]),a("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-md-4",attrs:{role:"main"}},[t._m(0),a("div",{staticClass:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},[a("h1",{staticClass:"h2"},[t._v("Dashboard")]),a("div",{staticClass:"btn-toolbar mb-2 mb-md-0"},[t._m(1),a("button",{staticClass:"btn btn-sm btn-outline-secondary dropdown-toggle",attrs:{type:"button"}},[a("svg",{staticClass:"feather feather-calendar",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("rect",{attrs:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}}),a("line",{attrs:{x1:"16",y1:"2",x2:"16",y2:"6"}}),a("line",{attrs:{x1:"8",y1:"2",x2:"8",y2:"6"}}),a("line",{attrs:{x1:"3",y1:"10",x2:"21",y2:"10"}})]),t._v(" This week ")])])]),a("div",{staticClass:"album py-5 bg-light"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"},[a("div",{staticClass:"col"},[a("div",{staticClass:"card shadow-sm"},[a("svg",{staticClass:"bd-placeholder-img card-img-top",attrs:{width:"100%",height:"225",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: Thumbnail",preserveAspectRatio:"xMidYMid slice",focusable:"false"}},[a("title",[t._v("Placeholder")]),a("rect",{attrs:{width:"100%",height:"100%",fill:"#55595c"}}),a("text",{attrs:{x:"50%",y:"50%",fill:"#eceeef",dy:".3em"}},[t._v(" Thumbnail ")])]),t._m(2)])]),a("div",{staticClass:"col"},[a("div",{staticClass:"card shadow-sm"},[a("svg",{staticClass:"bd-placeholder-img card-img-top",attrs:{width:"100%",height:"225",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: Thumbnail",preserveAspectRatio:"xMidYMid slice",focusable:"false"}},[a("title",[t._v("Placeholder")]),a("rect",{attrs:{width:"100%",height:"100%",fill:"#55595c"}}),a("text",{attrs:{x:"50%",y:"50%",fill:"#eceeef",dy:".3em"}},[t._v(" Thumbnail ")])]),t._m(3)])]),a("div",{staticClass:"col"},[a("div",{staticClass:"card shadow-sm"},[a("svg",{staticClass:"bd-placeholder-img card-img-top",attrs:{width:"100%",height:"225",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: Thumbnail",preserveAspectRatio:"xMidYMid slice",focusable:"false"}},[a("title",[t._v("Placeholder")]),a("rect",{attrs:{width:"100%",height:"100%",fill:"#55595c"}}),a("text",{attrs:{x:"50%",y:"50%",fill:"#eceeef",dy:".3em"}},[t._v(" Thumbnail ")])]),t._m(4)])]),a("div",{staticClass:"col"},[a("div",{staticClass:"card shadow-sm"},[a("svg",{staticClass:"bd-placeholder-img card-img-top",attrs:{width:"100%",height:"225",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: Thumbnail",preserveAspectRatio:"xMidYMid slice",focusable:"false"}},[a("title",[t._v("Placeholder")]),a("rect",{attrs:{width:"100%",height:"100%",fill:"#55595c"}}),a("text",{attrs:{x:"50%",y:"50%",fill:"#eceeef",dy:".3em"}},[t._v(" Thumbnail ")])]),t._m(5)])]),a("div",{staticClass:"col"},[a("div",{staticClass:"card shadow-sm"},[a("svg",{staticClass:"bd-placeholder-img card-img-top",attrs:{width:"100%",height:"225",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: Thumbnail",preserveAspectRatio:"xMidYMid slice",focusable:"false"}},[a("title",[t._v("Placeholder")]),a("rect",{attrs:{width:"100%",height:"100%",fill:"#55595c"}}),a("text",{attrs:{x:"50%",y:"50%",fill:"#eceeef",dy:".3em"}},[t._v(" Thumbnail ")])]),t._m(6)])]),a("div",{staticClass:"col"},[a("div",{staticClass:"card shadow-sm"},[a("svg",{staticClass:"bd-placeholder-img card-img-top",attrs:{width:"100%",height:"225",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: Thumbnail",preserveAspectRatio:"xMidYMid slice",focusable:"false"}},[a("title",[t._v("Placeholder")]),a("rect",{attrs:{width:"100%",height:"100%",fill:"#55595c"}}),a("text",{attrs:{x:"50%",y:"50%",fill:"#eceeef",dy:".3em"}},[t._v(" Thumbnail ")])]),t._m(7)])]),a("div",{staticClass:"col"},[a("div",{staticClass:"card shadow-sm"},[a("svg",{staticClass:"bd-placeholder-img card-img-top",attrs:{width:"100%",height:"225",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: Thumbnail",preserveAspectRatio:"xMidYMid slice",focusable:"false"}},[a("title",[t._v("Placeholder")]),a("rect",{attrs:{width:"100%",height:"100%",fill:"#55595c"}}),a("text",{attrs:{x:"50%",y:"50%",fill:"#eceeef",dy:".3em"}},[t._v(" Thumbnail ")])]),t._m(8)])]),a("div",{staticClass:"col"},[a("div",{staticClass:"card shadow-sm"},[a("svg",{staticClass:"bd-placeholder-img card-img-top",attrs:{width:"100%",height:"225",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: Thumbnail",preserveAspectRatio:"xMidYMid slice",focusable:"false"}},[a("title",[t._v("Placeholder")]),a("rect",{attrs:{width:"100%",height:"100%",fill:"#55595c"}}),a("text",{attrs:{x:"50%",y:"50%",fill:"#eceeef",dy:".3em"}},[t._v(" Thumbnail ")])]),t._m(9)])]),a("div",{staticClass:"col"},[a("div",{staticClass:"card shadow-sm"},[a("svg",{staticClass:"bd-placeholder-img card-img-top",attrs:{width:"100%",height:"225",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: Thumbnail",preserveAspectRatio:"xMidYMid slice",focusable:"false"}},[a("title",[t._v("Placeholder")]),a("rect",{attrs:{width:"100%",height:"100%",fill:"#55595c"}}),a("text",{attrs:{x:"50%",y:"50%",fill:"#eceeef",dy:".3em"}},[t._v(" Thumbnail ")])]),t._m(10)])])])])])])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chartjs-size-monitor"},[a("div",{staticClass:"chartjs-size-monitor-expand"},[a("div",{})]),a("div",{staticClass:"chartjs-size-monitor-shrink"},[a("div",{})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-group mr-2"},[a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" Share ")]),a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" Export ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[t._v(" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ")]),a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" View ")]),a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" Edit ")])]),a("small",{staticClass:"text-muted"},[t._v("9 mins")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[t._v(" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ")]),a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" View ")]),a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" Edit ")])]),a("small",{staticClass:"text-muted"},[t._v("9 mins")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[t._v(" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ")]),a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" View ")]),a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" Edit ")])]),a("small",{staticClass:"text-muted"},[t._v("9 mins")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[t._v(" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ")]),a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" View ")]),a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" Edit ")])]),a("small",{staticClass:"text-muted"},[t._v("9 mins")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[t._v(" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ")]),a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" View ")]),a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" Edit ")])]),a("small",{staticClass:"text-muted"},[t._v("9 mins")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[t._v(" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ")]),a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" View ")]),a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" Edit ")])]),a("small",{staticClass:"text-muted"},[t._v("9 mins")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[t._v(" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ")]),a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" View ")]),a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" Edit ")])]),a("small",{staticClass:"text-muted"},[t._v("9 mins")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[t._v(" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ")]),a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" View ")]),a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" Edit ")])]),a("small",{staticClass:"text-muted"},[t._v("9 mins")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[t._v(" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ")]),a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" View ")]),a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v(" Edit ")])]),a("small",{staticClass:"text-muted"},[t._v("9 mins")])])])}],A={name:"Home"},S=A,O=(a("cccb"),Object(d["a"])(S,M,P,!1,null,null,null)),$=O.exports;s["default"].use(E["a"]);var V=[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],B=new E["a"]({mode:"hash",base:"/ShareDoc/",routes:V}),R=B;s["default"].config.productionTip=!1,s["default"].use(T["a"]),s["default"].use(j["a"]),new s["default"]({store:k,router:R,render:function(t){return t(p)}}).$mount("#app")},"5ced":function(t,e,a){},cccb:function(t,e,a){"use strict";a("5ced")}});
//# sourceMappingURL=app.2f1f18c4.js.map