(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(148),o=n(153);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},147:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},148:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(144),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(27);n.d(t,"waitForRouteChange",function(){return l.c});var s=n(147),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var f=n(38);n.d(t,"parsePath",function(){return f.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},150:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(53),u=n(1),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},151:function(e,t,n){},153:function(e,t,n){"use strict";var a=n(145),r=n.n(a),i=n(149),o=n(0),c=n.n(o),u=n(4),l=n.n(u),s=n(154),d=n.n(s),f=n(148),p=n(146);function m(){var e=r()(["\n    font-size: 24px;\n    font-weight: bold;\n    color: #ff9933;\n  "]);return m=function(){return e},e}function h(){var e=r()(["\n    background-color: #131b4a;\n    height: 70px;\n    padding: 0 40px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  "]);return h=function(){return e},e}var g=function(){var e=Object(p.a)(h()),t=Object(p.a)(m());return c.a.createElement("header",{className:e},c.a.createElement("h2",{className:t},"Permanent"),c.a.createElement("h2",{className:t},"E4Youth"))};n(151);function y(){var e=r()(["\n    background-color: #f4f4f4;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  "]);return y=function(){return e},e}var v=function(e){var t=e.children,n=Object(p.a)(y());return c.a.createElement(f.StaticQuery,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},c.a.createElement("html",{lang:"en"}),c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito:400,600,700",rel:"stylesheet"})),c.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),c.a.createElement("div",{className:n},t))},data:i})};v.propTypes={children:l.a.node.isRequired};t.a=v}}]);
//# sourceMappingURL=component---src-pages-page-2-js-4886d5fac1ebbb681fef.js.map