(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"02f4":function(t,e,a){var r=a("4588"),s=a("be13");t.exports=function(t){return function(e,a){var i,n,o=String(s(e)),c=r(a),l=o.length;return c<0||c>=l?t?"":void 0:(i=o.charCodeAt(c),i<55296||i>56319||c+1===l||(n=o.charCodeAt(c+1))<56320||n>57343?t?o.charAt(c):i:t?o.slice(c,c+2):n-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var r=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?r(t,e).length:1)}},"07e3":function(t,e){var a={}.hasOwnProperty;t.exports=function(t,e){return a.call(t,e)}},"0bfb":function(t,e,a){"use strict";var r=a("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1799:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:" pag-content",attrs:{id:"Pagination"}},[a("div",{staticClass:"row box"},t._l(t.item,function(t,e){return a("router-link",{key:e,staticClass:"col-lg-2 col-md-3 col-sm-6 page",attrs:{to:/Video/+t._id}},[a("div",{staticClass:"page-img",attrs:{"aria-rowindex":""}},[a("div",{staticClass:"card-img-top",style:{backgroundImage:"url("+t.img+")"}})]),a("div",{staticClass:"page-box"},[a("div",{staticClass:"page-btn justify-content-between"},[a("input",{staticClass:"btn btn-primary",attrs:{name:"",id:"",type:"button",value:"下载"}}),a("input",{staticClass:"btn btn-primary",attrs:{name:"",id:"",type:"button",value:"收藏"}})])])])}),1),a("nav",{attrs:{"aria-label":"Page navigation example "}},[a("ul",{staticClass:"pagination justify-content-center pagination-lg"},[a("li",{staticClass:"page-item",on:{mousedown:function(e){return t.toTegional()}}},[a("a",{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{mousedown:function(e){return t.Previous(t.currentPage)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),a("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.perPage,function(e,r){return a("li",{key:r,staticClass:"page-item",on:{mousedown:function(e){return t.PagNmb(r)}}},[a("a",{staticClass:"page-link",on:{mousedown:function(e){return t.toTegional()}}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item",on:{mousedown:function(e){return t.toTegional()}}},[a("a",{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{mousedown:function(e){return t.Next(t.currentPage)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),a("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])])},s=[],i={name:"Pagination",props:["perPagess"],data:function(){return{text:"",perPage:this.perPagess,currentPage:1,item:[]}},watch:{perPagess:function(t,e){this.perPage=t}},mounted:function(){console.log(this.perPages+"ASDASD"),this.$route.params.text?(this.text=this.$route.params.text,console.log(this.text+"asdasdasd")):this.text="",this.$http.jsonp("http://49.4.115.120:3000/move",{params:{page:0,text:this.text}}).then(function(t){this.item=t.body,console.log(t)},function(){console.log("请求失败处理")})},methods:{down:function(t){this.$http.jsonp("http://49.4.115.120:3000/move",{params:{page:t,text:this.text}}).then(function(t){this.item=t.body,console.log(t.body)},function(){console.log("请求失败处理")})},PagNmb:function(t){0<this.currentPage<=this.perPage&&(this.currentPage=t+1,this.down(t))},Next:function(t){this.currentPage<this.perPage&&(this.currentPage=t+1,this.down(t))},Previous:function(t){1<this.currentPage&&(this.currentPage=t-1,this.down(t-2))},toTegional:function(){document.querySelector("#Pagination").scrollIntoView(!0)}}},n=i,o=(a("5eaf"),a("2877")),c=Object(o["a"])(n,r,s,!1,null,null,null);e["a"]=c.exports},1954:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("form",{attrs:{action:"http://localhost:3000/login",method:"post"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),a("input",{staticClass:"form-control",attrs:{type:"email",name:"email","aria-describedby":"emailHelp",placeholder:"Enter email"}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),a("input",{staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password"}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])}],i=a("2877"),n={},o=Object(i["a"])(n,r,s,!1,null,null,null);e["default"]=o.exports},"1bc3":function(t,e,a){var r=a("f772");t.exports=function(t,e){if(!r(t))return t;var a,s;if(e&&"function"==typeof(a=t.toString)&&!r(s=a.call(t)))return s;if("function"==typeof(a=t.valueOf)&&!r(s=a.call(t)))return s;if(!e&&"function"==typeof(a=t.toString)&&!r(s=a.call(t)))return s;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,a){var r=a("f772"),s=a("e53d").document,i=r(s)&&r(s.createElement);t.exports=function(t){return i?s.createElement(t):{}}},"1fe3":function(t,e,a){},"214f":function(t,e,a){"use strict";a("b0c5");var r=a("2aba"),s=a("32e9"),i=a("79e5"),n=a("be13"),o=a("2b4c"),c=a("520a"),l=o("species"),u=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var f=o(t),m=!i(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),h=m?!i(function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[l]=function(){return a}),a[f](""),!e}):void 0;if(!m||!h||"replace"===t&&!u||"split"===t&&!d){var v=/./[f],p=a(n,f,""[t],function(t,e,a,r,s){return e.exec===c?m&&!s?{done:!0,value:v.call(e,a,r)}:{done:!0,value:t.call(a,e,r)}:{done:!1}}),b=p[0],g=p[1];r(String.prototype,t,b),s(RegExp.prototype,f,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},2607:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"PlayPage"},[a("transition",{attrs:{name:"slide-fade",mode:"in-out"}},[t.hidden?a("div",{staticClass:"title-content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"title-wrapper row flex-nowrap"},[a("div",{staticClass:"title-img col-4 col-sm-4 col-md-3 col-lg-2"},[a("a",{attrs:{href:""}},[a("img",{attrs:{src:"https://www.yugaopian.cn/files/mpic/201906/p28314.jpg?4137",alt:""}})])]),a("div",{staticClass:"title-text col-8 col-sm-5 "},[a("h1",[t._v("第一滴血5：最后的血 Rambo: Last Blood")]),a("div",{staticClass:"title-detail"},[a("span",[t._v("类型：")]),t._v("动作\n                            "),a("br"),a("span",[t._v("上映时间：")]),t._v("2019-8-2\n                            "),a("br"),a("span",[t._v("导演：")]),t._v("顾王杰 \n                            "),a("br"),a("span",[t._v("演员:")]),t._v("顾王杰\n                            "),a("br"),a("span",[t._v("剧情:")]),t._v("西尔维斯特·史泰龙回归[第一滴血5]，并有望执导。除主演外，据悉史泰龙将操刀剧本，故事围绕兰博为营救朋友之女与墨西哥毒枭展开殊死搏斗展开。制片艾威·勒纳([敢死队]系列)。该系列首部于1982年上映，2008年史泰龙…\n                            "),a("a",{attrs:{href:""}},[t._v("详情")])])])])]),a("span",{staticClass:"DropUpButton",on:{mousedown:function(e){return t.DropDown()}}})]):t._e()]),a("transition",{attrs:{name:"fade"}},[(t.view=!t.hidden)?a("span",{staticClass:"DropDownButton",on:{mousedown:function(e){return t.DropDown()}}}):t._e()]),a("Video")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"video-container"},[a("div",{staticClass:"container ",staticStyle:{position:"relative"}},[a("video",{ref:"videoPlayer",staticClass:"video-js vjs-custom-skin vjs-big-play-centered vjs-fluid qq",staticStyle:{margin:"0 auto","z-index":"0"},attrs:{wmode:"transparent",controls:"controls",width:"1200"}}),a("canvas",{directives:[{name:"show",rawName:"v-show",value:t.danmakuShow,expression:"danmakuShow"}],ref:"tt",staticClass:"Barrage",staticStyle:{margin:"0 auto","z-index":"2147483647"},attrs:{width:"1200",height:"600"}})]),a("div",{staticClass:"container"},[t.danmakuShow?a("div",{staticClass:" barrage-input row "},[a("div",{staticClass:"col-md-4"}),a("div",{staticClass:"col-md-8 col-sm-9 col-9 d-flex barr-input my-0"},[a("button",{staticClass:"btn btn-outline-success mr-sm-4 my-0",attrs:{href:""}},[a("svg",{staticClass:"icon",attrs:{t:"1568187017524",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2005",width:"32",height:"32"}},[a("path",{attrs:{d:"M352 640v256c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32v-256c0-17.6 14.4-32 32-32h256c17.6 0 32 14.4 32 32zM352 128v256c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V128c0-17.6 14.4-32 32-32h256c17.6 0 32 14.4 32 32z",fill:"#ffffff","p-id":"2006"}}),a("path",{attrs:{d:"M64 448h256c35.296 0 64-28.704 64-64V128c0-35.296-28.704-64-64-64H64C28.704 64 0 92.704 0 128v256c0 35.296 28.704 64 64 64zM64 128h256l-0.096 256H64V128zM64 960h256c35.296 0 64-28.704 64-64v-256c0-35.296-28.704-64-64-64H64c-35.296 0-64 28.704-64 64v256c0 35.296 28.704 64 64 64z m0-320h256l-0.096 256H64v-256zM992 160H480a32 32 0 0 0 0 64h512a32 32 0 0 0 0-64zM480 352h320a32 32 0 0 0 0-64H480a32 32 0 0 0 0 64zM992 672H480a32 32 0 1 0 0 64h512a32 32 0 1 0 0-64zM800 864a32 32 0 1 0 0-64H480a32 32 0 1 0 0 64h320z",fill:"#ffffff","p-id":"2007"}})])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"form-control mr-sm-2",attrs:{value:"value",type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),a("button",{staticClass:"btn btn-outline-success my-0",attrs:{type:"submit"},on:{mousedown:t.danmufs}},[a("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])]):t._e()])])},n=[],o=(a("a481"),a("85f2")),c=a.n(o);function l(t,e,a){return e in t?c()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a("6b54"),a("ac6a");var u=a("f0e2"),d=(a("1157"),{data:function(){return{uu:!1,id:this.$route.params.id,iteme:[],value:"asdasd",Float:!1,danmakuShow:!1,datass:[],datas:[{text:"50",x:1200,y:200,speed:1,time:50,color:"red"},{text:"10",x:1200,y:100,speed:1,time:10,color:"red"},{text:"fgdfgdfgdfg",x:1200,y:300,speed:1,time:6,color:"red"},{text:"wweqwewq",x:1200,y:200,speed:1,time:50,color:"red"}]}},created:function(){var t=this;this.$http.jsonp("http://49.4.115.120:3000/hotadd",{params:{id:this.id}}).then(function(e){console.log(e),t.uu=!0;var a=t.$video(t.$refs.videoPlayer);a.src(e.body.url),a.load(),console.log("sadasd")})},mounted:function(){this.initVideo(),this.addBarrageBtn(this.initVideo());var t=this.$refs.videoPlayer,e=this;t.addEventListener("timeupdate",function(){var a;a=Math.floor(t.currentTime),e.currtime=a,console.log(e.currtime),e.datas.forEach(function(t){t.time==a&&e.datass.push(t)})},!1)},methods:{Barragebtn:function(){this.Barragetext(this.value,this.currtime),console.log(this.currtime)},Barragetext:function(t,e){var a=this,r=20,s=this.$refs.tt,i=d();console.log(i);for(var n=1200,o=0,c=0,l=a.datas.length;c<l;c++){var u=a.datas[c];i===u.y&&(o+=Math.floor(2*s.getContext("2d").measureText(u.text).width+30))}function d(){var t=Math.floor(330/r);return Math.floor(Math.random()*t+1)*r}function f(){return"".concat(Math.floor(16777215*Math.random()).toString(16))}a.datas.push({text:t,x:n+o,y:i,speed:1,time:e,color:f()})},open:function(){var t=this.datass,e=null,a=this.$refs.tt.getContext("2d");function r(){e=setInterval(function(){a.clearRect(0,0,1200,700),a.save(),a.font="20px Microsoft YaHei";for(var e=0,r=t.length;e<r;e++){var s=t[e],i=-a.measureText(s.text).width;s.x-=s.speed,s.x<i?t.splice(e,1):(a.fillStyle="#".concat(s.color),a.fillText(s.text,s.x,s.y))}a.restore()},20)}function s(){clearInterval(e),a.clearRect(0,0,400,170)}this.danmakuShow?r():s()},initVideo:function(){var t=this.$video(this.$refs.videoPlayer,l({controls:!0,autoplay:!0,preload:"auto",width:1200,height:700,playbackRates:[.5,1,1.5,2]},"preload","metadata"));return t},addBarrageBtn:function(t){var e=this,a=u["a"].getComponent("Button"),r=u["a"].extend(a,{constructor:function(){a.apply(this,arguments),this.controlText("弹幕"),this.el_.children[0].className="Barrage-btn"},buildCSSClass:function(){return"icon-danmaku vjs-control vjs-button"},handleClick:function(){if(e.danmakuShow){this.el_.children[0].className=this.el_.children[0].className.replace(/Barrage-btn-sport/,"Barrage-btn");e.danmakuShow=!e.danmakuShow,e.stt()}else{this.el_.children[0].className=this.el_.children[0].className.replace(/Barrage-btn/,"Barrage-btn-sport");e.danmakuShow=!e.danmakuShow,e.stt()}}});u["a"].registerComponent("DanButton",r);var s=t.getChild("controlBar").addChild("DanButton",{},3);console.log(s.el())}}}),f=d,m=(a("b981"),a("2877")),h=Object(m["a"])(f,i,n,!1,null,null,null),v=h.exports,p={components:{Video:v},data:function(){return{hidden:!1,DropDownButton:!0,DropUpButton:!1}},methods:{DropDown:function(){this.hidden=!this.hidden,this.DropDownButton=!this.DropDownButton,this.DropUpButton=!this.DropUpButton}}},b=p,g=(a("fbb2"),Object(m["a"])(b,r,s,!1,null,null,null));e["default"]=g.exports},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"2f50":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("form",{attrs:{action:"http://49.4.115.120:3000/register",method:"post"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("用户名")]),a("input",{staticClass:"form-control",attrs:{type:"text",name:"name","aria-describedby":"emailHelp",placeholder:"Name"}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[t._v("密码")]),a("input",{staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password"}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-10 之间")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[t._v("重复密码")]),a("input",{staticClass:"form-control",attrs:{type:"password",name:"repassword",placeholder:"rePassword"}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("邮箱")]),a("input",{staticClass:"form-control",attrs:{type:"email",name:"email","aria-describedby":"emailHelpId",placeholder:""}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])}],i=a("2877"),n={},o=Object(i["a"])(n,r,s,!1,null,null,null);e["default"]=o.exports},"309e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n    "+t._s(t.name)+"\n\n    \n")])},s=[],i={data:function(){return{name:""}},mounted:function(){this.$http.jsonp("http://49.4.115.120:3000/usercenter").then(function(t){this.name=t.body},function(){console.log("请求失败处理"),window.location.href="http://shiku428/#/login"})},methods:{}},n=i,o=a("2877"),c=Object(o["a"])(n,r,s,!1,null,null,null);e["default"]=c.exports},"35e8":function(t,e,a){var r=a("d9f6"),s=a("aebd");t.exports=a("8e60")?function(t,e,a){return r.f(t,e,s(1,a))}:function(t,e,a){return t[e]=a,t}},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"454f":function(t,e,a){a("46a7");var r=a("584a").Object;t.exports=function(t,e,a){return r.defineProperty(t,e,a)}},"46a7":function(t,e,a){var r=a("63b6");r(r.S+r.F*!a("8e60"),"Object",{defineProperty:a("d9f6").f})},"4c08":function(t,e,a){"use strict";var r=a("fdce"),s=a.n(r);s.a},"516b":function(t,e,a){},"520a":function(t,e,a){"use strict";var r=a("0bfb"),s=RegExp.prototype.exec,i=String.prototype.replace,n=s,o="lastIndex",c=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t[o]||0!==e[o]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(n=function(t){var e,a,n,u,d=this;return l&&(a=new RegExp("^"+d.source+"$(?!\\s)",r.call(d))),c&&(e=d[o]),n=s.call(d,t),c&&n&&(d[o]=d.global?n.index+n[0].length:e),l&&n&&n.length>1&&i.call(n[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(n[u]=void 0)}),n}),t.exports=n},"584a":function(t,e){var a=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=a)},"59b3":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"allmove"},[a("div",{staticClass:"container"},[t._m(0),a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("全部"+t._s(t.perPages))])]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("动作")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("科幻")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("喜剧")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("战争")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("剧情")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("动画")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("灾难")])])]),t._m(1),a("Pagination",{attrs:{perPagess:t.perPages}})],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("全部")])]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("中国")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("韩国")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("日本")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("欧美")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("泰国")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("全部")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("2019")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("2018")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("2017")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("2016")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("2015")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("2014")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("2013")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("2012")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("2011")])]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Data")])])])}],i=a("1799"),n={components:{Pagination:i["a"],props:["perPages"]},data:function(){return{test:null,perPages:null}},created:function(){},mounted:function(){this.$http.jsonp("http://49.4.115.120:3000/move1").then(function(t){console.log(t),this.perPages=Math.ceil(t.body/20)},function(){console.log("请求失败处理1111")}),this.$route.params.text&&(this.text=this.$route.params.text,console.log(this.text))}},o=n,c=(a("4c08"),a("2877")),l=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=l.exports},"5cb5":function(t,e,a){},"5eaf":function(t,e,a){"use strict";var r=a("5cb5"),s=a.n(r);s.a},"5f1b":function(t,e,a){"use strict";var r=a("23c6"),s=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var i=a.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},"63b6":function(t,e,a){var r=a("e53d"),s=a("584a"),i=a("d864"),n=a("35e8"),o=a("07e3"),c="prototype",l=function(t,e,a){var u,d,f,m=t&l.F,h=t&l.G,v=t&l.S,p=t&l.P,b=t&l.B,g=t&l.W,C=h?s:s[e]||(s[e]={}),_=C[c],x=h?r:v?r[e]:(r[e]||{})[c];for(u in h&&(a=e),a)d=!m&&x&&void 0!==x[u],d&&o(C,u)||(f=d?x[u]:a[u],C[u]=h&&"function"!=typeof x[u]?a[u]:b&&d?i(f,r):g&&x[u]==f?function(t){var e=function(e,a,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,a)}return new t(e,a,r)}return t.apply(this,arguments)};return e[c]=t[c],e}(f):p&&"function"==typeof f?i(Function.call,f):f,p&&((C.virtual||(C.virtual={}))[u]=f,t&l.R&&_&&!_[u]&&n(_,u,f)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},"6b54":function(t,e,a){"use strict";a("3846");var r=a("cb7c"),s=a("0bfb"),i=a("9e1e"),n="toString",o=/./[n],c=function(t){a("2aba")(RegExp.prototype,n,t,!0)};a("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?c(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?s.call(t):void 0)}):o.name!=n&&c(function(){return o.call(this)})},"794b":function(t,e,a){t.exports=!a("8e60")&&!a("294c")(function(){return 7!=Object.defineProperty(a("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"85f2":function(t,e,a){t.exports=a("454f")},"8a94":function(t,e,a){"use strict";var r=a("1fe3"),s=a.n(r);s.a},"8e60":function(t,e,a){t.exports=!a("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},a006:function(t,e,a){"use strict";var r=a("e907"),s=a.n(r);s.a},a481:function(t,e,a){"use strict";var r=a("cb7c"),s=a("4bf8"),i=a("9def"),n=a("4588"),o=a("0390"),c=a("5f1b"),l=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,m=/\$([$&`']|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};a("214f")("replace",2,function(t,e,a,v){return[function(r,s){var i=t(this),n=void 0==r?void 0:r[e];return void 0!==n?n.call(r,i,s):a.call(String(i),r,s)},function(t,e){var s=v(a,t,this,e);if(s.done)return s.value;var d=r(t),f=String(this),m="function"===typeof e;m||(e=String(e));var b=d.global;if(b){var g=d.unicode;d.lastIndex=0}var C=[];while(1){var _=c(d,f);if(null===_)break;if(C.push(_),!b)break;var x=String(_[0]);""===x&&(d.lastIndex=o(f,i(d.lastIndex),g))}for(var y="",w=0,P=0;P<C.length;P++){_=C[P];for(var S=String(_[0]),E=l(u(n(_.index),f.length),0),$=[],j=1;j<_.length;j++)$.push(h(_[j]));var k=_.groups;if(m){var M=[S].concat($,E,f);void 0!==k&&M.push(k);var T=String(e.apply(void 0,M))}else T=p(S,f,E,$,k,e);E>=w&&(y+=f.slice(w,E)+T,w=E+S.length)}return y+f.slice(w)}];function p(t,e,r,i,n,o){var c=r+t.length,l=i.length,u=m;return void 0!==n&&(n=s(n),u=f),a.call(o,u,function(a,s){var o;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(c);case"<":o=n[s.slice(1,-1)];break;default:var u=+s;if(0===u)return a;if(u>l){var f=d(u/10);return 0===f?a:f<=l?void 0===i[f-1]?s.charAt(1):i[f-1]+s.charAt(1):a}o=i[u-1]}return void 0===o?"":o})}})},ac6a:function(t,e,a){for(var r=a("cadf"),s=a("0d58"),i=a("2aba"),n=a("7726"),o=a("32e9"),c=a("84f2"),l=a("2b4c"),u=l("iterator"),d=l("toStringTag"),f=c.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=s(m),v=0;v<h.length;v++){var p,b=h[v],g=m[b],C=n[b],_=C&&C.prototype;if(_&&(_[u]||o(_,u,f),_[d]||o(_,d,b),c[b]=f,g))for(p in r)_[p]||i(_,p,r[p],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b0c5:function(t,e,a){"use strict";var r=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},b981:function(t,e,a){"use strict";var r=a("bcd1"),s=a.n(r);s.a},bcd1:function(t,e,a){},cd56:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container"},[t._m(0),a("div",{staticClass:"hot-container container"},[t._m(1),a("hr"),a("div",{staticClass:"hot carousel slide",attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[a("div",{staticClass:"carousel-inner"},[a("div",{staticClass:"carousel-item active"},[a("div",{ref:"Wbox",staticClass:"row flex-nowrap",class:{stat:t.stat},style:{transform:t.translateX}},t._l(t.items,function(e,r){return a("div",{key:r,ref:"Witem",refInFor:!0,staticClass:"card col-md-2 col-sm-3 col-6"},[a("router-link",{staticClass:"yy",attrs:{to:/Video/+e._id}},[a("div",{staticClass:"card-img-top",style:{backgroundImage:"url("+e.img+")"}})]),a("div",{staticClass:"card-body"},[a("h6",{staticClass:"card-title"},[t._v(t._s(e.name))]),a("router-link",{staticClass:"btn btn-primary",attrs:{to:/Video/+e._id}},[t._v("Go")])],1)],1)}),0)])]),a("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"},on:{mousedown:function(e){return t.prev()}}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Previous")])]),a("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"},on:{mousedown:function(e){return t.next()}}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Next")])])])]),t._m(2),a("div",{staticClass:"update-container container"},[t._m(3),a("hr"),a("Pagination",{attrs:{perPagess:t.perPages}})],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"carousel-container container"},[a("div",{staticClass:"carousel slide",attrs:{id:"carouselId","data-ride":"carousel"}},[a("ol",{staticClass:"carousel-indicators"},[a("li",{staticClass:"active",attrs:{"data-target":"#carouselId","data-slide-to":"0"}}),a("li",{attrs:{"data-target":"#carouselId","data-slide-to":"1"}}),a("li",{attrs:{"data-target":"#carouselId","data-slide-to":"2"}})]),a("div",{staticClass:"carousel-inner",attrs:{role:"listbox"}},[a("div",{staticClass:"carousel-item active"},[a("img",{attrs:{src:"http://img5.mtime.cn/mg/2019/09/23/151357.16857926.jpg",alt:"First slide"}}),a("div",{staticClass:"carousel-caption d-none d-md-block"},[a("h3",[t._v("Title")]),a("p",[t._v("Description")])])]),a("div",{staticClass:"carousel-item"},[a("img",{attrs:{src:"http://img5.mtime.cn/mg/2019/09/24/091441.47907379.jpg",alt:"Second slide"}}),a("div",{staticClass:"carousel-caption d-none d-md-block"},[a("h3",[t._v("Title")]),a("p",[t._v("Description")])])]),a("div",{staticClass:"carousel-item"},[a("img",{attrs:{src:"http://img5.mtime.cn/mg/2019/09/02/092533.96805862.jpg",alt:"Third slide"}}),a("div",{staticClass:"carousel-caption d-none d-md-block"},[a("h3",[t._v("Title")]),a("p",[t._v("Description")])])])]),a("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselId",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Previous")])]),a("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselId",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Next")])])]),a("div",{staticStyle:{position:"absolute",top:"0px",right:"0px",width:"20%",height:"100%","background-color":"red"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav justify-content-center"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"disabled",attrs:{href:"#"}},[a("h4",[t._v("热门预告")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"iframe"},[a("div",{staticClass:"container"},[a("img",{staticStyle:{width:"100%","padding-top":"3rem"},attrs:{src:"http://ubmcmm.baidustatic.com/media/v1/0f000nYQaS7qxv_9jPksj6.jpg",alt:""}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav justify-content-between"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"disabled",attrs:{href:"#"}},[a("h4",[t._v("最近跟新")])])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("查看全部...")])])])}],i=a("1799"),n={components:{Pagination:i["a"]},data:function(){return{perPages:5,yy:!0,stat:!0,screenWidth:document.body.clientWidth,length:12,shiftX:100,page:1,translateX:"translateX(-100%)",item:[],items:[{name:"adads",img:"https://www.yugaopian.cn/files/mpic/201907/p28604.jpg?4333",url:"",hot:""}],Wbox:0,Witem:0}},watch:{screenWidth:function(t){if(!this.timer){if(this.screenWidth=t,this.screenWidth<2e3){this.items=this.item,this.Wbox=this.$refs.Wbox.offsetWidth,this.Witem=this.$refs.Wbox.firstElementChild.offsetWidth;var e=Math.round(this.Wbox/this.Witem);this.length=this.length+e,console.log(e+"asd");var a=this.item.slice(0,e),r=this.item.slice(-e);this.items=r.concat(this.items),this.items=this.items.concat(a),console.log(this.items)}this.timer=!0;var s=this;setTimeout(function(){s.timer=!1},400)}}},mounted:function(){var t=this;this.$http.jsonp("http://49.4.115.120:3000/hot").then(function(t){this.item=t.body,this.items=this.item,this.Wbox=this.$refs.Wbox.offsetWidth,this.Witem=this.$refs.Wbox.firstElementChild.offsetWidth;var e=Math.round(this.Wbox/this.Witem);this.length=this.length+e,console.log(e+"asd");var a=this.item.slice(0,e),r=this.item.slice(-e);this.items=r.concat(this.items),this.items=this.items.concat(a),console.log(this.items)},function(){console.log("请求失败处理")}),window.onresize=function(){return function(){t.screenWidth=document.body.clientWidth}()}},methods:{prev:function(){var t=this,e=100*Math.round(12*this.Witem/this.Wbox);console.log(e),this.yy&&(this.shiftX>100?(this.stat=!0,this.shiftX=this.shiftX-100,this.translateX="translateX(-"+this.shiftX+"%)"):(this.shiftX=this.shiftX-100,this.translateX="translateX(-"+this.shiftX+"%)",this.yy=!1,setTimeout(function(){t.stat=!1,t.shiftX=e,t.translateX="translateX(-"+t.shiftX+"%)",t.yy=!0},600)))},next:function(){var t=this,e=100*Math.round(12*this.Witem/this.Wbox);console.log(e),this.yy&&(this.shiftX<e?(this.stat=!0,this.shiftX=this.shiftX+100,this.translateX="translateX(-"+this.shiftX+"%)"):(this.shiftX=this.shiftX+100,this.translateX="translateX(-"+this.shiftX+"%)",this.yy=!1,setTimeout(function(){t.stat=!1,t.shiftX=100,t.translateX="translateX(-"+t.shiftX+"%)",t.yy=!0},600)))}}},o=n,c=(a("a006"),a("2877")),l=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=l.exports},d864:function(t,e,a){var r=a("79aa");t.exports=function(t,e,a){if(r(t),void 0===e)return t;switch(a){case 1:return function(a){return t.call(e,a)};case 2:return function(a,r){return t.call(e,a,r)};case 3:return function(a,r,s){return t.call(e,a,r,s)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,a){var r=a("e4ae"),s=a("794b"),i=a("1bc3"),n=Object.defineProperty;e.f=a("8e60")?Object.defineProperty:function(t,e,a){if(r(t),e=i(e,!0),r(a),s)try{return n(t,e,a)}catch(o){}if("get"in a||"set"in a)throw TypeError("Accessors not supported!");return"value"in a&&(t[e]=a.value),t}},e41f:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sreachmove"},[a("div",{staticClass:"container"},[t._m(0),t._m(1),t._m(2),a("Pagination")],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("全部")])]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("中国")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("韩国")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("日本")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("欧美")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("泰国")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("全部")])]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("动作")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("科幻")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("喜剧")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("战争")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("剧情")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("动画")]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("灾难")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("全部")])]),a("li",{staticClass:"breadcrumb-item "},[a("a",{attrs:{href:"#"}},[t._v("2019")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("2018")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("2017")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("2016")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("2015")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("2014")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("2013")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("2012")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("2011")])]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Data")])])])}],i=a("1799"),n={components:{Pagination:i["a"]},data:function(){return{test:""}},mounted:function(){this.$route.params.text&&(this.text=this.$route.params.text,console.log(this.text))}},o=n,c=(a("8a94"),a("2877")),l=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=l.exports},e4ae:function(t,e,a){var r=a("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var a=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=a)},e907:function(t,e,a){},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},fbb2:function(t,e,a){"use strict";var r=a("516b"),s=a.n(r);s.a},fdce:function(t,e,a){}}]);