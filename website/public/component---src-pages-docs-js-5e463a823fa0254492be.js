(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{iaV1:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return s}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=a("Bl7J"),o=a("vrFN"),c=a("pMgH");a("EDuE");t.default=function(e){var t=e.data.allMarkdownRemark;return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Docs"}),r.a.createElement("div",{className:"Ebook-mn"},r.a.createElement("div",{className:"Ebook-cntnt Content"},r.a.createElement("h1",{size:"2xl",m:"20px auto"},"Official Documentation"),r.a.createElement("p",null,"To get started, clone the library:"),r.a.createElement("pre",{style:{padding:"16px"}},"git clone https://github.com/contactandyc/another-c-library.git",r.a.createElement("br",null),"cd another-c-library/demo",r.a.createElement("br",null),"make",r.a.createElement("br",null)),r.a.createElement("p",null,"The package depends on libuv in the uvdemo directory. On a mac, use the following command to install libuv:"),r.a.createElement("pre",{style:{padding:"16px"}},"brew install libuv",r.a.createElement("br",null),"cd another-c-library/uvdemo",r.a.createElement("br",null),"make",r.a.createElement("br",null)),r.a.createElement("p",null,"Usage and documentation are currently being written. Check out our eBook for a walk through of the library or help us write the docs by ",r.a.createElement(l.Link,{to:"/contributing"},"contributing!")),r.a.createElement("p",null,"Our goal is to produce a work that is unencumbered by licenses, and hope that others will find this code or parts of it useful. The library, book, code, website, and project in its entirety are licensed under the Apache License by Andy Curtis & Daniel Curtis. ",r.a.createElement(l.Link,{to:"/license"},"Read more on the licensing."))),r.a.createElement(c.a,{allPages:t,type:"docs"})))};var s="2220760639"},pMgH:function(e,t,a){"use strict";a("zGcK"),a("sC2a");var n=a("q1tI"),r=a.n(n),l=a("Wbzz");function i(e){return e.title===e.curr?r.a.createElement("ul",{style:e.style.ul},e.arr.map((function(t){var a=t.value,n=a.replace(/\s+/g,"-").toLowerCase();return r.a.createElement("li",{key:n,style:e.style.li},r.a.createElement(l.Link,{to:"/"+e.type+e.path+"#"+n,activeStyle:e.style.activeLink},a))}))):r.a.createElement(r.a.Fragment,null)}t.a=function(e){var t={sidebar:{fontFamily:"-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen',\n      'Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif",height:"100vh",padding:"15px",color:"#1E4E8C",position:"sticky",top:"62px",borderLeft:"solid 1px #EDF2F7"},activeLink:{color:"#1A202C",fontWeight:"700"},ul:{paddingLeft:"0",listStyle:"none"},li:{marginBottom:"0"}};e.allPages.edges.sort((function(e,t){return parseInt(e.node.frontmatter.title)-parseInt(t.node.frontmatter.title)}));var a=e.allPages.edges.filter((function(e){return e.node.frontmatter.title.length>0}));return a=a.filter((function(t){return t.node.frontmatter.posttype===e.type})),r.a.createElement("div",{style:t.sidebar,className:"Sidebar"},r.a.createElement("div",null,a.map((function(a,n){return r.a.createElement("div",{key:n},r.a.createElement(l.Link,{to:"/"+e.type+a.node.frontmatter.path,activeStyle:t.activeLink},a.node.frontmatter.title),r.a.createElement(i,{arr:a.node.headings,curr:e.current,title:a.node.frontmatter.title,style:t,type:e.type,path:a.node.frontmatter.path}))}))))}}}]);
//# sourceMappingURL=component---src-pages-docs-js-5e463a823fa0254492be.js.map