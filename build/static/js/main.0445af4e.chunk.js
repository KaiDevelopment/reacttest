(this.webpackJsonpreacttest=this.webpackJsonpreacttest||[]).push([[0],{258:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),s=a.n(c),i=a(15),u=a(49),l=a(22),o=a(8),d=a(275),m=a(271),p=(a(75),a(56)),f=(a(125),a(36)),h=(a(127),a(11)),b=a.n(h),v=a(18),E=a(52),y=(a(77),a(105)),g=(a(132),a(27));function j(e){return O.apply(this,arguments)}function O(){return(O=Object(v.a)(b.a.mark((function e(t){var a,n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new URL("https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/Covid19_RKI_Sums/FeatureServer/0/query")).searchParams.append("where","1=1"),a.searchParams.append("outFields","Landkreis"),a.searchParams.append("returnDistinctValues","true"),a.searchParams.append("orderByFields","Landkreis"),a.searchParams.append("f","json"),e.next=8,fetch(a.toString(),{signal:t});case 8:return n=e.sent,e.next=11,n.json();case 11:return r=e.sent,c=r,e.abrupt("return",c.features.map((function(e){return e.attributes})));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function e(t){Object(g.a)(this,e),this.date=void 0,this.dailyCases=void 0,this.sumCases=void 0,this.date=new Date(t.Meldedatum),this.dailyCases=t.AnzahlFall,this.sumCases=t.SummeFall};function w(e,t){return k.apply(this,arguments)}function k(){return(k=Object(v.a)(b.a.mark((function e(t,a){var n,r,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL("https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/Covid19_RKI_Sums/FeatureServer/0/query")).searchParams.append("where","Landkreis='".concat(a,"'")),n.searchParams.append("outFields","AnzahlFall,Meldedatum,SummeFall"),n.searchParams.append("orderByFields","Meldedatum DESC"),n.searchParams.append("f","json"),e.next=7,fetch(n.toString(),{signal:t});case 7:return r=e.sent,e.next=10,r.json();case 10:return c=e.sent,s=c,e.abrupt("return",s.features.map((function(e){return new x(e.attributes)})));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return C.apply(this,arguments)}function C(){return(C=Object(v.a)(b.a.mark((function e(t,a){var n,r,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL("https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/RKI_Landkreisdaten/FeatureServer/0/query")).searchParams.append("where","county='".concat(a,"'")),n.searchParams.append("outFields","EWZ"),n.searchParams.append("f","json"),e.next=6,fetch(n.toString(),{signal:t});case 6:return r=e.sent,e.next=9,r.json();case 9:return c=e.sent,s=c,e.abrupt("return",s.features[0].attributes.EWZ);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=function(e){var t=Object(u.a)({query:"(max-width: 599px)"})?"56":"64";return r.a.createElement("div",Object.assign({style:{height:"calc(100vh - ".concat(t,"px)"),display:"flex",flexFlow:"column"}},e))},F=a(100),T=a(106),P=function(e){return r.a.createElement(F.a,null,(function(t){var a=t.height,c=t.width;return r.a.createElement(T.a,{height:a,itemCount:e.items.length,itemSize:e.itemSize,style:e.style,width:c},(function(t){var a=t.index,c=t.style;return r.a.createElement("div",{style:c},Object(n.createElement)(e.itemComponent,{item:e.items[a]}))}))}))},A=a(38),D=a(37),I=a(101),z=function(e,t){var a=Object(n.useState)(e),r=Object(i.a)(a,2),c=r[0],s=r[1],u=Object(n.useState)(M),l=Object(i.a)(u,2),o=l[0],d=l[1];return Object(n.useEffect)((function(){if(c.shouldLoad){var e=new AbortController;return function(){var a=Object(v.a)(b.a.mark((function a(){var n;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return d(R),a.prev=1,a.next=4,t(e.signal,c.data);case 4:n=a.sent,e.signal.aborted||d(new K(n)),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),e.signal.aborted||d(new Z("error"));case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(){return a.apply(this,arguments)}}()(),function(){e.abort()}}d(M)}),[c]),[o,c,s]},B=function(){function e(){Object(g.a)(this,e)}return Object(I.a)(e,[{key:"isEmpty",value:function(){return this===M}},{key:"isLoading",value:function(){return this===R}},{key:"isSuccess",value:function(){return this instanceof K}},{key:"isError",value:function(){return this instanceof Z}}]),e}(),R=new(function(e){Object(A.a)(a,e);var t=Object(D.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return a}(B)),M=new(function(e){Object(A.a)(a,e);var t=Object(D.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return a}(B)),K=function(e){Object(A.a)(a,e);var t=Object(D.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this)).data=e,n}return a}(B),Z=function(e){Object(A.a)(a,e);var t=Object(D.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this)).message=e,n}return a}(B),q=function(e){Object(n.useEffect)((function(){return e.setTitle("Regionen")}));var t=z({shouldLoad:!0,data:null},function(){var e=Object(v.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a=Object(i.a)(t,1)[0],c=Object(n.useState)(""),s=Object(i.a)(c,2),u=s[0],l=s[1];return r.a.createElement(L,null,r.a.createElement(E.a,{closed:!a.isLoading()}),r.a.createElement(y.a,{outlined:!0,value:u,onChange:function(e){return l(e.currentTarget.value)},style:{margin:"4px 4px 0px",flex:"0 1 auto"},icon:"search"}),r.a.createElement("div",{style:{flex:"1 1 auto"}},a.isSuccess()&&r.a.createElement(P,{items:a.data.filter((function(e){return e.Landkreis.toLowerCase().includes(u.toLowerCase())})),itemSize:48,itemComponent:W}),a.isError()&&r.a.createElement("div",null,a.message)))},W=function(e){var t=e.item;return r.a.createElement(m.b,{tag:l.b,to:"districts/".concat(t.Landkreis),text:t.Landkreis})};var Y=a(72),_=(a(142),a(71)),G=(a(144),a(274)),U=(a(148),a(103)),H=function(e){var t=e.setTitle,a=Object(o.f)().district;Object(n.useEffect)((function(){t(a)}));var c=z({shouldLoad:!0,data:null},function(){var e=Object(v.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t,a);case 2:return e.t0=e.sent,e.next=5,S(t,a);case 5:return e.t1=e.sent,e.abrupt("return",{dailyData:e.t0,popCount:e.t1});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),s=Object(i.a)(c,1)[0];return r.a.createElement("div",null,r.a.createElement(E.a,{closed:!s.isLoading()}),s.isSuccess()&&r.a.createElement(J,s.data),s.isError()&&s.message)},J=function(e){var t=e.dailyData,a=e.popCount,c=Object(n.useState)("30"),s=Object(i.a)(c,2),u=s[0],l=s[1],o=parseInt(u),d=t.slice(0,o).map((function(e){return e.date})),m=Array.from({length:o},(function(e,n){return 1e5*(t[n].sumCases-t[n+7].sumCases)/a}));return r.a.createElement("div",null,r.a.createElement(_.a,{style:{padding:"4px",margin:"4px"}},r.a.createElement(Y.a,{use:"body1"},"Letze Meldung: ",t[0].date.toLocaleDateString(),r.a.createElement("br",null),"Gesamte F\xe4lle: ",t[0].sumCases,r.a.createElement("br",null),"Inzidenz: ",m[0].toFixed(1),r.a.createElement("br",null),"Einwohner: ",a,r.a.createElement("br",null))),r.a.createElement(_.a,{style:{padding:"4px",margin:"4px"}},r.a.createElement(Y.a,{use:"headline5"},"Inzidenz: ",m[0].toFixed(1)),r.a.createElement(U.Line,{data:{labels:d,datasets:[{data:m}]},options:{scales:{xAxes:[{type:"time",time:{tooltipFormat:"DD.MM.YYYY",displayFormats:{day:"DD.MM"}}}],yAxes:[{ticks:{beginAtZero:!0}}]},tooltips:{displayColors:!1,callbacks:{label:function(e){return e.yLabel.toFixed(1)}}},elements:{point:{radius:0,hitRadius:25}},legend:{display:!1}}}),r.a.createElement("div",{style:{margin:"8px",width:"min-content"}},r.a.createElement(G.a,{label:"Dauer",outlined:!0,value:u,options:[{label:"30 Tage",value:"30"},{label:"60 Tage",value:"60"},{label:"180 Tage",value:"180"}],onChange:function(e){return l(e.currentTarget.value)}}))))},N=a(51),V=function(e){return Object(n.useEffect)((function(){return e.setTitle("Home")})),r.a.createElement("div",null,r.a.createElement(N.a,{raised:!0,style:{margin:"4px"},tag:l.b,to:"/districts",children:"W\xe4hle Region"}))},$=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)("Title"),o=Object(i.a)(s,2),h=o[0],b=o[1],v=Object(u.a)({query:"(min-width: 800px)"});Object(n.useEffect)((function(){document.title=h}),[h]);var E=r.a.createElement(d.a,null,r.a.createElement(m.a,{tag:l.b,to:"/",children:"Home",onClick:function(){v||c(!a)}}),r.a.createElement(m.a,{tag:l.b,to:"/districts",children:"Regionen",onClick:function(){v||c(!a)}})),y=r.a.createElement(p.a,{style:{overflowY:"auto",position:"fixed"},modal:!v,dismissible:v,open:a,onClose:function(){return c(!1)}},r.a.createElement(p.c,null,!v&&r.a.createElement(f.b,null),E),v&&r.a.createElement(f.b,null));return r.a.createElement(l.a,null,r.a.createElement("div",null,!v&&y,r.a.createElement(f.a,{fixed:!0,title:h,navigationIcon:!0,onNav:function(){return c(!a)}}),r.a.createElement(f.b,null),v&&y,r.a.createElement(p.b,null,r.a.createElement(Q,{setTitle:b}))))},Q=function(e){return r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/districts/:district",children:r.a.createElement(H,{setTitle:e.setTitle})}),r.a.createElement(o.a,{path:"/districts",children:r.a.createElement(q,{setTitle:e.setTitle})}),r.a.createElement(o.a,{path:"/",children:r.a.createElement(V,{setTitle:e.setTitle})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[258,1,2]]]);
//# sourceMappingURL=main.0445af4e.chunk.js.map