(this.webpackJsonpmovie_app_third=this.webpackJsonpmovie_app_third||[]).push([[0],{43:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(13),r=s.n(i),c=s(4),o=s.n(c),m=s(14),l=s(15),j=s(16),d=s(19),u=s(18),v=s(17),p=s.n(v),h=(s(43),s(0));var b=function(e){var t=e.title,s=e.year,a=e.summary,n=e.poster,i=e.genres;return Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{src:n,alt:t,title:t}),Object(h.jsxs)("div",{className:"movie__data",children:[Object(h.jsx)("h3",{className:"movie__title",children:t}),Object(h.jsx)("span",{className:"movie__year",children:s}),Object(h.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]}),Object(h.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(h.jsx)("li",{className:"genres__genre",children:e},t)}))})]})]})},O=(s(45),function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts.mx/api/v2/list_movies.json");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(h.jsx)("section",{className:"container",children:t?Object(h.jsx)("span",{className:"loader",children:"Loading..."}):Object(h.jsx)("div",{className:"movies",children:s.map((function(e){return Object(h.jsx)(b,{title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.bc641a89.chunk.js.map