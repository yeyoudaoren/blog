(this["webpackJsonp@axetroy/blog"]=this["webpackJsonp@axetroy/blog"]||[]).push([[13],{235:function(e){e.exports=JSON.parse('{"owner":"axetroy","repo":"blog","todo_repo":"todo","github_client_id":"b8257841dd7ca5eef2aa","github_client_secret":"4da33dd6fcb0a01d395945ad18613ecf9c12079e"}')},236:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(242),r=n.n(a),c=n(235),o=new r.a({withCredentials:!1,responseType:"json"});o.authenticate({type:"oauth",key:c.github_client_id,secret:c.github_client_secret}),t.a=o},238:function(e,t,n){"use strict";var a=n(241),r=n(237);t.a=function(e){return{updateOwner:function(e,t){return function(){return{OWNER:t}}},updateShowCases:function(e,t){return function(){return{SHOW_CASES:t}}},updateTodo:function(e,t,n){return function(){return{TODO:Object(r.a)({},e.TODO,{},Object(a.a)({},t,n))}}},updateTodoList:function(e,t){return function(){return{TODOS:t}}},updateTodoLabel:function(e,t){return function(){return{TODO_LABELS:t}}},updateRepositories:function(e,t){return function(){return{REPOS:t}}},updateArticles:function(e,t){return function(){return{POSTS:t}}},updateArticle:function(e,t,n){return function(){return{POST:Object(r.a)({},e.POST,{},Object(a.a)({},t,n))}}},updateStackoverflows:function(e,t){return function(){return{STACKOVERFLOWS:t}}},updateStackoverflow:function(e,t,n){return function(){return{STACKOVERFLOW:Object(r.a)({},e.STACKOVERFLOW,{},Object(a.a)({},t,n))}}},updateGistList:function(e,t){return function(){return{GISTS:t}}},updateGist:function(e,t,n){return function(){return{GIST:Object(r.a)({},e.GIST,{},Object(a.a)({},t,n))}}},updateFollowers:function(e,t){return function(){return{FOLLOWERS:t}}}}}},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(237),r=n(12),c=n(15),o=n(14),i=n(11),s=n(13),l=n(0),u=n.n(l),m=n(1),p=n.n(m),d=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.__originTitle=document.title;var e=this.props,t=e.title,n=e.suffix,a=e.root;t&&this.setTitle(t,n,a)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.title,n=e.suffix,a=e.root;t&&this.setTitle(t,n,a)}},{key:"componentWillUnmount",value:function(){!0===this.props.revert&&(document.title=this.__originTitle)}},{key:"setTitle",value:function(e){return document.title=e.join(" | "),this}},{key:"render",value:function(){return u.a.createElement("div",null,this.props.children)}}]),t}(l.Component),f=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).PropTypes={title:p.a.array,revert:p.a.bool},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=(this.props.title||[]).concat(["Axetroy's NeverLand"]),t=Object(a.a)({},this.props,{},{title:e});return u.a.createElement(d,t)}}]),t}(l.Component)},245:function(e,t,n){"use strict";var a=n(239),r=n.n(a),c=n(12),o=n(15),i=n(14),s=n(11),l=n(13),u=n(0),m=n.n(u),p=n(232),d=n(70),f=n(236),b=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={comments:[]},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){switch(this.props.type){case"issues":var e=this.props,t=e.owner,n=e.repo,a=e.number;"number"===typeof a&&this.getIssuesComments(t,n,a);break;case"gist":var r=this.props.gistId;"string"===typeof r&&this.getGistComments(r)}}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){switch(e.type){case"issues":e.number!==this.props.number&&"number"===typeof e.number&&this.getIssuesComments(e.owner,e.repo,e.number);break;case"gist":e.gistId!==this.props.gistId&&"string"===typeof e.gistId&&this.getGistComments(e.gistId)}}},{key:"getIssuesComments",value:function(e,t,n){var a,c,o;return r.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return a=[],i.prev=1,i.next=4,r.a.awrap(f.a.issues.listComments({owner:e,repo:t,issue_number:n,headers:{Accept:"application/vnd.github.v3.html"}}));case 4:c=i.sent,o=c.data,this.setState({comments:o}),i.next=12;break;case 9:i.prev=9,i.t0=i.catch(1),console.error(i.t0);case 12:return i.abrupt("return",a);case 13:case"end":return i.stop()}}),null,this,[[1,9]])}},{key:"getGistComments",value:function(e){var t,n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=[],c.prev=1,c.next=4,r.a.awrap(f.a.gists.listComments({gist_id:e,headers:{Accept:"application/vnd.github.v3.html"}}));case 4:n=c.sent,a=n.data,t=t.concat(a||[]),this.setState({comments:t}),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),console.error(c.t0);case 13:return c.abrupt("return",t);case 14:case"end":return c.stop()}}),null,this,[[1,10]])}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.owner,a=e.repo,r=e.number,c=e.gistId;return m.a.createElement("div",null,m.a.createElement("h3",null,"\u5927\u725b\u4eec\u7684\u8bc4\u8bba:",m.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"issues"===t?"https://github.com/".concat(n,"/").concat(a,"/issues/").concat(r,"#new_comment_field"):"gist"===t?"https://gist.github.com/".concat(c,"#new_comment_field"):"javascript:void 0",style:{float:"right"}},"\u6715\u6709\u8bdd\u8bf4")),this.state.comments.length?this.state.comments.map((function(e){return m.a.createElement("div",{key:e.id,style:{border:"0.1rem solid #e2e2e2",borderRadius:"0.5rem",margin:"1rem 0"}},m.a.createElement("div",{className:"comment-header",style:{overflow:"hidden"}},m.a.createElement("img",{style:{width:"3.2rem",verticalAlign:"middle",borderRadius:"50%"},src:e.user.avatar_url,alt:""}),"\xa0\xa0",m.a.createElement("strong",{style:{color:"#586069"}},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/".concat(e.user.login)},e.user.login)),"\xa0\xa0",m.a.createElement("span",null," ","\u8bc4\u8bba\u4e8e ".concat(Object(p.a)(new Date(e.created_at),{locale:d.a}),"\u524d"),e.created_at!==e.updated_at?"&nbsp;&nbsp;\u66f4\u65b0\u4e8e ".concat(Object(p.a)(new Date(e.updated_at),{locale:d.a}),"\u524d"):"")),m.a.createElement("div",{className:"comment-body",style:{padding:"1.2rem"}},m.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:e.body_html}})))})):m.a.createElement("div",null,m.a.createElement("p",null,"\u8fd8\u6ca1\u6709\u4eba\u8bc4\u8bba\u54e6\uff0c\u8d76\u7d27\u62a2\u6c99\u53d1!")))}}]),t}(u.Component);t.a=b},364:function(e,t,n){},381:function(e,t,n){"use strict";n.r(t);n(141);var a=n(98),r=(n(244),n(246)),c=(n(275),n(285)),o=(n(276),n(277)),i=(n(139),n(93)),s=(n(138),n(25)),l=(n(140),n(53)),u=n(239),m=n.n(u),p=n(12),d=n(15),f=n(14),b=n(11),h=n(13),g=n(232),v=n(70),y=n(0),E=n.n(y),O=n(36),w=n(92),k=n(245),_=n(240),S=n(235),j=n(236),x=n(96),T=n(238),A=(n(364),function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={banners:["35051293-df358be0-fbdf-11e7-9d74-80e8ad97d713","35051427-28b5ed6e-fbe0-11e7-90b5-a5c3f0c9cba2","35051446-3424927c-fbe0-11e7-9e41-5c3725781867","35051488-4c3c2de8-fbe0-11e7-9c5c-0d35a171a15b","35051508-5b01e00c-fbe0-11e7-85e6-ca93570ee11f","35051527-66aaa218-fbe0-11e7-9821-9390595c4ae6","35051549-73e310a0-fbe0-11e7-87ed-3b023cab3019","35051561-7e618ae8-fbe0-11e7-9355-a7285cb4821f","35051580-8a893db6-fbe0-11e7-93ff-5bd11e96630e","35051598-95948738-fbe0-11e7-96c3-dbd6f7c93f71","35051610-9f056a9e-fbe0-11e7-92d4-502b449a4c51","35051630-a956162e-fbe0-11e7-86a0-fd4c4dea6e75","35051654-b3af78fe-fbe0-11e7-9a61-d8a89a4ddf66","35051683-c78c5360-fbe0-11e7-831c-60b5e25188fb","35051708-d447aeb0-fbe0-11e7-8e62-a1042f373488","35051727-dee8460e-fbe0-11e7-8b35-7c4bf8f6d8a9","35051749-e8af347c-fbe0-11e7-951b-2d9e03ee443a","35051761-f24f0c0a-fbe0-11e7-893f-6bfcbb036c3e","35051785-fd3a9fc6-fbe0-11e7-8faf-a97facebe5ce"].map((function(e){return"https://user-images.githubusercontent.com/9758711/"+e+".png"}))},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e,t,a=this;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(e=this.props.match.params.number,t=e%this.state.banners.length,this.setState({banner:this.state.banners[t]}),n.e(4).then(n.t.bind(null,278,7)).then((function(e){a.setState({QRCode:e.default})})),!e){r.next=7;break}return r.next=7,m.a.awrap(this.getPost(e));case 7:case"end":return r.stop()}}),null,this)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(t=e.match.params.number)||t===this.props.match.params.number){n.next=4;break}return n.next=4,m.a.awrap(this.getPost(e.match.params.number));case 4:case"end":return n.stop()}}),null,this)}},{key:"getPost",value:function(e){var t,n,a;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t={},r.prev=1,r.next=4,m.a.awrap(j.a.issues.get({owner:S.owner,repo:"stackoverflow",issue_number:e,headers:{Accept:"application/vnd.github.v3.html"}}));case 4:n=r.sent,a=n.data,(t=a).filter_html=this.htmlFilter(a.body_html),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),console.error(r.t0);case 13:return this.props.updateStackoverflow(e,t),r.abrupt("return",t);case 15:case"end":return r.stop()}}),null,this,[[1,10]])}},{key:"htmlFilter",value:function(e){var t=document.createElement("div");t.innerHTML=e;var n=t.querySelector("img[alt=banner]");if(n){n.src&&this.setState({banner:n.src});var a=n.parentElement;a&&"A"===a.tagName?a.parentNode&&"P"===a.parentElement.tagName?a.parentElement.remove():a.remove():n.remove()}else{var r=t.querySelector("img");r&&this.setState({banner:r.src})}return t.innerHTML}},{key:"getShareMenu",value:function(e){var t=[{title:"\u5206\u4eab\u5230\u65b0\u6d6a\u5fae\u535a",url:"http://service.weibo.com/share/share.php?appkey=&title=".concat("\u5206\u4eab: "+e.title,"&url=").concat(window.location.href,"&pic=&searchPic=false&style=simple")},{title:"\u5206\u4eab\u5230 Twitter",url:"https://twitter.com/intent/tweet?text=".concat("\u5206\u4eab: "+e.title,"&url=").concat(window.location.href,"&via=Axetroy")},{title:"\u5206\u4eab\u5230 Telegram",url:"https://telegram.me/share/url?url=".concat(window.location.href,"&text=").concat("\u5206\u4eab: "+e.title)},{title:"\u5206\u4eab\u5230 QQ",url:"http://connect.qq.com/widget/shareqq/index.html?site=Axetroy's NeverLand&title=".concat("\u5206\u4eab: "+e.title,"&summary=\u6b22\u8fce\u6765\u5230 Axetroy's NeverLand\u3002&pics=&url=").concat(window.location.href)}];return E.a.createElement(l.a,null,t.map((function(e){return E.a.createElement(l.a.Item,{key:e.title},E.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:e.url},e.title))})))}},{key:"render",value:function(){var e=this.state.QRCode,t=this.props.match.params.number,n=this.props.STACKOVERFLOW[t]||{};return E.a.createElement(_.a,{title:[n.title,"\u8e29\u8fc7\u7684\u5751"]},E.a.createElement(a.a,{spinning:!Object.keys(n).length},E.a.createElement("div",{className:"bg-white",style:{marginBottom:20}},E.a.createElement("div",{style:{position:"relative",width:"100%",height:"24rem",backgroundImage:"url(".concat(this.state.banner,")"),backgroundOrigin:"border-box",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPositionY:"25%"}},E.a.createElement("div",{className:"post-meta",style:{position:"absolute",bottom:0,left:0,width:"100%",padding:"2rem",backgroundColor:"#fff",transition:"all 0.2s ease-in-out",borderBottom:"1px dashed #e5e5e5"}},n.user&&n.user.avatar_url?E.a.createElement("img",{src:n.user.avatar_url,alt:"",style:{width:"4.4rem",height:"4.4rem",borderRadius:"50%",verticalAlign:"middle"}}):"",E.a.createElement("div",{style:{display:"inline-block",verticalAlign:"middle",margin:"0 1rem"}},E.a.createElement("strong",null,E.a.createElement(s.a,{type:"user",style:{marginRight:"0.5rem"}}),Object(x.c)(n.user?n.user.login:"")),E.a.createElement("br",null),E.a.createElement("span",null,E.a.createElement(s.a,{type:"calendar",style:{marginRight:"0.5rem"}}),"\u53d1\u5e03\u4e8e\xa0",n.created_at?Object(g.a)(new Date(n.created_at),{locale:v.a}):"","\u524d"),E.a.createElement("br",null),E.a.createElement("span",null,E.a.createElement(s.a,{type:"message",style:{marginRight:"0.5rem"}}),n.comments?"\u5df2\u6709 ".concat(n.comments," \u6761\u7559\u8a00"):"\u8fd8\u672a\u6709\u4eba\u7559\u8a00\u54e6")),E.a.createElement("div",{style:{textAlign:"right",float:"right",fontSize:"2.4rem"}},E.a.createElement("span",{style:{margin:"0.5rem"}},E.a.createElement(i.a,{title:"\u7f16\u8f91\u6587\u7ae0",placement:"topRight"},E.a.createElement("a",{target:"blank",href:"https://github.com/".concat(S.owner,"/stackoverflow/issues/").concat(n.number),style:{color:"inherit"}},E.a.createElement(s.a,{type:"edit"})))),E.a.createElement("span",{style:{cursor:"pointer",margin:"0.5rem"}},E.a.createElement(o.a,{placement:"bottomLeft",title:"\u5728\u5176\u4ed6\u8bbe\u5907\u4e2d\u626b\u63cf\u4e8c\u7ef4\u7801",trigger:"click",content:E.a.createElement("div",{className:"text-center"},e?E.a.createElement(e,{value:window.location.href}):"Loading...")},E.a.createElement(s.a,{type:"qrcode"}))),E.a.createElement("span",{style:{cursor:"pointer",margin:"0.5rem"}},E.a.createElement(c.a,{overlay:this.getShareMenu(n),trigger:["click"]},E.a.createElement(s.a,{type:"share-alt"})))))),E.a.createElement("h2",{style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},E.a.createElement("span",{style:{color:"#303030"}},n.title," "),E.a.createElement("span",{style:{verticalAlign:"top"}},(n.labels||[]).map((function(e){return E.a.createElement(r.a,{key:e.id,color:"#"+e.color},e.name)})))),E.a.createElement("div",{className:"markdown-body post-content",style:{margin:"2rem 0",paddingBottom:"2rem"},dangerouslySetInnerHTML:{__html:Object(x.b)(n.filter_html)}}),E.a.createElement("div",{className:"comment-box"},E.a.createElement(k.a,{type:"issues",owner:S.owner,repo:"stackoverflow",number:n.number})))))}}]),t}(y.Component));t.default=Object(w.connect)((function(e){return{STACKOVERFLOW:e.STACKOVERFLOW}}),T.a)(Object(O.f)(A))}}]);
//# sourceMappingURL=13.0e3c4990.chunk.js.map