(this["webpackJsonp@axetroy/blog"]=this["webpackJsonp@axetroy/blog"]||[]).push([[18],{235:function(e){e.exports=JSON.parse('{"owner":"axetroy","repo":"blog","todo_repo":"todo","github_client_id":"b8257841dd7ca5eef2aa","github_client_secret":"4da33dd6fcb0a01d395945ad18613ecf9c12079e"}')},236:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(242),a=n.n(r),o=n(235),i=new a.a({withCredentials:!1,responseType:"json"});i.authenticate({type:"oauth",key:o.github_client_id,secret:o.github_client_secret}),t.a=i},238:function(e,t,n){"use strict";var r=n(241),a=n(237);t.a=function(e){return{updateOwner:function(e,t){return function(){return{OWNER:t}}},updateShowCases:function(e,t){return function(){return{SHOW_CASES:t}}},updateTodo:function(e,t,n){return function(){return{TODO:Object(a.a)({},e.TODO,{},Object(r.a)({},t,n))}}},updateTodoList:function(e,t){return function(){return{TODOS:t}}},updateTodoLabel:function(e,t){return function(){return{TODO_LABELS:t}}},updateRepositories:function(e,t){return function(){return{REPOS:t}}},updateArticles:function(e,t){return function(){return{POSTS:t}}},updateArticle:function(e,t,n){return function(){return{POST:Object(a.a)({},e.POST,{},Object(r.a)({},t,n))}}},updateStackoverflows:function(e,t){return function(){return{STACKOVERFLOWS:t}}},updateStackoverflow:function(e,t,n){return function(){return{STACKOVERFLOW:Object(a.a)({},e.STACKOVERFLOW,{},Object(r.a)({},t,n))}}},updateGistList:function(e,t){return function(){return{GISTS:t}}},updateGist:function(e,t,n){return function(){return{GIST:Object(a.a)({},e.GIST,{},Object(r.a)({},t,n))}}},updateFollowers:function(e,t){return function(){return{FOLLOWERS:t}}}}}},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(237),a=n(12),o=n(15),i=n(14),c=n(11),s=n(13),u=n(0),l=n.n(u),p=n(1),m=n.n(p),d=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.__originTitle=document.title;var e=this.props,t=e.title,n=e.suffix,r=e.root;t&&this.setTitle(t,n,r)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.title,n=e.suffix,r=e.root;t&&this.setTitle(t,n,r)}},{key:"componentWillUnmount",value:function(){!0===this.props.revert&&(document.title=this.__originTitle)}},{key:"setTitle",value:function(e){return document.title=e.join(" | "),this}},{key:"render",value:function(){return l.a.createElement("div",null,this.props.children)}}]),t}(u.Component),f=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).PropTypes={title:m.a.array,revert:m.a.bool},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=(this.props.title||[]).concat(["Axetroy's NeverLand"]),t=Object(r.a)({},this.props,{},{title:e});return l.a.createElement(d,t)}}]),t}(u.Component)},245:function(e,t,n){"use strict";var r=n(239),a=n.n(r),o=n(12),i=n(15),c=n(14),s=n(11),u=n(13),l=n(0),p=n.n(l),m=n(232),d=n(70),f=n(236),h=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={comments:[]},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){switch(this.props.type){case"issues":var e=this.props,t=e.owner,n=e.repo,r=e.number;"number"===typeof r&&this.getIssuesComments(t,n,r);break;case"gist":var a=this.props.gistId;"string"===typeof a&&this.getGistComments(a)}}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){switch(e.type){case"issues":e.number!==this.props.number&&"number"===typeof e.number&&this.getIssuesComments(e.owner,e.repo,e.number);break;case"gist":e.gistId!==this.props.gistId&&"string"===typeof e.gistId&&this.getGistComments(e.gistId)}}},{key:"getIssuesComments",value:function(e,t,n){var r,o,i;return a.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return r=[],c.prev=1,c.next=4,a.a.awrap(f.a.issues.listComments({owner:e,repo:t,issue_number:n,headers:{Accept:"application/vnd.github.v3.html"}}));case 4:o=c.sent,i=o.data,this.setState({comments:i}),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),console.error(c.t0);case 12:return c.abrupt("return",r);case 13:case"end":return c.stop()}}),null,this,[[1,9]])}},{key:"getGistComments",value:function(e){var t,n,r;return a.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=[],o.prev=1,o.next=4,a.a.awrap(f.a.gists.listComments({gist_id:e,headers:{Accept:"application/vnd.github.v3.html"}}));case 4:n=o.sent,r=n.data,t=t.concat(r||[]),this.setState({comments:t}),o.next=13;break;case 10:o.prev=10,o.t0=o.catch(1),console.error(o.t0);case 13:return o.abrupt("return",t);case 14:case"end":return o.stop()}}),null,this,[[1,10]])}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.owner,r=e.repo,a=e.number,o=e.gistId;return p.a.createElement("div",null,p.a.createElement("h3",null,"\u5927\u725b\u4eec\u7684\u8bc4\u8bba:",p.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"issues"===t?"https://github.com/".concat(n,"/").concat(r,"/issues/").concat(a,"#new_comment_field"):"gist"===t?"https://gist.github.com/".concat(o,"#new_comment_field"):"javascript:void 0",style:{float:"right"}},"\u6715\u6709\u8bdd\u8bf4")),this.state.comments.length?this.state.comments.map((function(e){return p.a.createElement("div",{key:e.id,style:{border:"0.1rem solid #e2e2e2",borderRadius:"0.5rem",margin:"1rem 0"}},p.a.createElement("div",{className:"comment-header",style:{overflow:"hidden"}},p.a.createElement("img",{style:{width:"3.2rem",verticalAlign:"middle",borderRadius:"50%"},src:e.user.avatar_url,alt:""}),"\xa0\xa0",p.a.createElement("strong",{style:{color:"#586069"}},p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/".concat(e.user.login)},e.user.login)),"\xa0\xa0",p.a.createElement("span",null," ","\u8bc4\u8bba\u4e8e ".concat(Object(m.a)(new Date(e.created_at),{locale:d.a}),"\u524d"),e.created_at!==e.updated_at?"&nbsp;&nbsp;\u66f4\u65b0\u4e8e ".concat(Object(m.a)(new Date(e.updated_at),{locale:d.a}),"\u524d"):"")),p.a.createElement("div",{className:"comment-body",style:{padding:"1.2rem"}},p.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:e.body_html}})))})):p.a.createElement("div",null,p.a.createElement("p",null,"\u8fd8\u6ca1\u6709\u4eba\u8bc4\u8bba\u54e6\uff0c\u8d76\u7d27\u62a2\u6c99\u53d1!")))}}]),t}(l.Component);t.a=h},362:function(e,t){var n=["B","kB","MB","GB","TB","PB","EB","ZB","YB"];e.exports=function(e){if(!Number.isFinite(e))throw new TypeError("Expected a finite number, got ".concat(typeof e,": ").concat(e));var t=e<0;if(t&&(e=-e),e<1)return(t?"-":"")+e+" B";var r=Math.min(Math.floor(Math.log(e)/Math.log(1e3)),n.length-1);return(t?"-":"")+Number((e/Math.pow(1e3,r)).toPrecision(3))+" "+n[r]}},388:function(e,t,n){"use strict";n.r(t);n(141);var r=n(98),a=(n(359),n(373)),o=(n(139),n(93)),i=(n(138),n(25)),c=n(239),s=n.n(c),u=n(12),l=n(15),p=n(14),m=n(11),d=n(13),f=n(0),h=n.n(f),b=n(36),v=n(92),y=n(237),g=n(361),O=n.n(g),w=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.refs.container){var t=new O.a(this.refs.container,{text:function(){return e.props.value}});t.on("success",(function(t){"function"===typeof e.props.onSuccess&&e.props.onSuccess(t)})),t.on("error",(function(t){"function"===typeof e.props.onError&&e.props.onError(t)})),this.__Clipboard=t}}},{key:"componentWillUnmount",value:function(){this.__Clipboard&&this.__Clipboard.destroy()}},{key:"render",value:function(){return h.a.createElement("div",{className:"react-clipboard-wrapper"+(this.props.className?" "+this.props.className:""),style:Object(y.a)({display:"inline-block"},this.props.style),ref:"container"},this.props.children)}}]),t}(f.Component),E=n(245),k=n(240),j=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"downloadFile",value:function(e,t){!function(e,t){var n=window.URL||window.webkitURL||window,r=new Blob([t]);if("msSaveBlob"in navigator)navigator.msSaveBlob(r,e);else{if(!("download"in HTMLAnchorElement.prototype))throw new Error("Neither a[download] nor msSaveBlob is available");var a=document.createElementNS("http://www.w3.org/1999/xhtml","a");a.href=n.createObjectURL(r),a.download=e,function(e){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}(a)}}(e,t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.file,a=t.content,o=t.style,i=t.className;return h.a.createElement("div",{className:"react-download-container"+(i?" "+i:""),onClick:function(){return e.downloadFile(r,a)},style:o},n)}}]),t}(f.Component),_=n(236),S=n(362),x=n.n(S),T=n(96),C=n(238);var N=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.init(this.props.match.params.id)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.match.params.id;t&&t!==this.props.match.params.id&&this.init(t)}},{key:"init",value:function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=3;break}return t.next=3,s.a.awrap(this.getGist(e));case 3:case"end":return t.stop()}}),null,this)}},{key:"getGist",value:function(e){var t,n,r,a,o,i,c,u,l,p;return s.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return t={},m.prev=1,m.next=4,s.a.awrap(_.a.gists.get({gist_id:e,headers:{Accept:"application/vnd.github.v3.html"}}));case 4:n=m.sent,r=n.data,t=r,m.t0=s.a.keys(t.files);case 8:if((m.t1=m.t0()).done){m.next=22;break}if(a=m.t1.value,!t.files.hasOwnProperty(a)){m.next=20;break}return o=t.files[a],i=o.language.toLowerCase(),u="\n".concat((c="markdown"===i)?"":"```"+i,"\n\n").concat(o.content,"\n\n").concat(c?"":"```","\n"),m.next=17,s.a.awrap(_.a.markdown.render({text:u,mode:"markdown"}));case 17:l=m.sent,p=l.data,o.html=p;case 20:m.next=8;break;case 22:this.props.updateGist(e,t),m.next=28;break;case 25:m.prev=25,m.t2=m.catch(1),console.error(m.t2);case 28:return m.abrupt("return",t);case 29:case"end":return m.stop()}}),null,this,[[1,25]])}},{key:"render",value:function(){var e=this.props.match.params.id,t=(this.props.GIST||{})[e]||{};return h.a.createElement(k.a,{title:[t.description,"\u4ee3\u7801\u7247\u6bb5"]},h.a.createElement(r.a,{spinning:!Object.keys(t).length},h.a.createElement("div",{className:"bg-white",style:{marginBottom:20}},h.a.createElement("h2",{style:{textAlign:"center",padding:"1rem 0"}},t.description,h.a.createElement(o.a,{placement:"topLeft",title:"\u7f16\u8f91\u6b64\u9875"},h.a.createElement("a",{href:"https://gist.github.com/".concat(t.owner?t.owner.login:"","/").concat(t.id,"/edit"),target:"_blank",rel:"noopener noreferrer"},h.a.createElement(i.a,{type:"edit"})))),function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&(t=t.concat([e[n]]));return t}(t.files).map((function(e){return h.a.createElement("div",{key:e.filename},h.a.createElement("h3",{style:{backgroundColor:"#e6e6e6",padding:"0.5rem",marginBottom:0}},h.a.createElement("span",null,h.a.createElement(i.a,{type:"file"}),e.filename),h.a.createElement("span",{style:{margin:"0 0.5rem"}},h.a.createElement(j,{file:e.filename,content:e.content,style:{display:"inline"}},h.a.createElement("a",null,h.a.createElement(i.a,{type:"download"}),"\u4e0b\u8f7d(",x()(e.size||0),")"))),h.a.createElement("span",null,h.a.createElement(w,{style:{cursor:"pointer"},value:e.content,onSuccess:function(){return a.a.success("Copy Success!")},onError:function(){return a.a.error("Copy Fail!")}},h.a.createElement(i.a,{type:"copy"}),"\u590d\u5236"))),h.a.createElement("div",{className:"markdown-body",style:{fontSize:"1.6rem",padding:"10px"},dangerouslySetInnerHTML:{__html:Object(T.b)(e.html)}}))})),h.a.createElement("div",{className:"comment-box"},h.a.createElement(E.a,{type:"gist",gistId:this.props.match.params.id})))))}}]),t}(f.Component);t.default=Object(v.connect)((function(e){return{GIST:e.GIST}}),C.a)(Object(b.f)(N))}}]);
//# sourceMappingURL=18.7bf82a99.chunk.js.map