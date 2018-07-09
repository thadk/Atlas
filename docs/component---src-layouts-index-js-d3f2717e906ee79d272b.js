webpackJsonp([0x67ef26645b2a,60335399758886],{157:function(e,t){e.exports={layoutContext:{}}},238:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(1),i=a(o),s=n(243),l=a(s),c=n(157),u=a(c);t.default=function(e){return i.default.createElement(l.default,r({},e,u.default))},e.exports=t.default},125:function(e,t){(function(t){"use strict";e.exports={siteMetadata:{title:"Political Population Atlas (WorldPop+GADM)",description:"A raw and unaffiliated map joining WorldPop gridded population estimates for Asia and Africa with GADM version 3.6 of global political boundaries.    If there is interest, Latin America atlas to come.",siteUrl:"https://thadk.net/atlas",author:"thadk",twitter:"thadk",adsense:""},pathPrefix:"/",plugins:[{resolve:"gatsby-source-filesystem",options:{path:t+"/src/pages",name:"pages"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:750,linkImagesToOriginal:!1,wrapperStyle:"margin-bottom: 1.0725rem;"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},{resolve:"gatsby-plugin-manifest",options:{name:"Gatstrap",short_name:"Gatstrap",description:"Gatsby starter for bootstrap a blog",homepage_url:"https://gatstrap.netlify.com",start_url:"/",background_color:"#fff",theme_color:"#262626",display:"standalone",icons:[{src:"/img/android-chrome-192x192.png",sizes:"192x192",type:"image/png"},{src:"/img/android-chrome-512x512.png",sizes:"512x512",type:"image/png"}]}},{resolve:"gatsby-plugin-google-analytics",options:{trackingId:"UA_201355-1"}},{resolve:"gatsby-plugin-netlify",options:{mergeSecurityHeaders:!0,mergeLinkHeaders:!0,mergeCachingHeaders:!0}},"gatsby-plugin-catch-links","gatsby-plugin-offline","gatsby-plugin-react-helmet","gatsby-plugin-react-next","gatsby-plugin-sass","gatsby-plugin-sharp","gatsby-plugin-sitemap","gatsby-plugin-twitter","gatsby-transformer-sharp"]}}).call(t,"/")},334:function(e,t){},335:function(e,t){},333:function(e,t,n){var a;!function(r,o){a=function(){return o(r)}.call(t,n,t,e),!(void 0!==a&&(e.exports=a))}(this,function(e){"use strict";var t,n,a,r,o,i,s,l,c,u,f={},d=function(){},p=function(){return"querySelectorAll"in document},m=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|playbook|silk/i.test(navigator.userAgent)},g=function(e){var t=e.offsetWidth,n=e.offsetHeight,a=0,r=0;do isNaN(e.offsetTop)||(a+=e.offsetTop),isNaN(e.offsetLeft)||(r+=e.offsetLeft);while(null!==(e=e.offsetParent));return{width:t,height:n,top:a,left:r}},h=function(e){var t,n;return e!==window?(t=e.clientWidth,n=e.clientHeight):(t=window.innerWidth||document.documentElement.clientWidth,n=window.innerHeight||document.documentElement.clientHeight),{width:t,height:n}},v=function(e){return e!==window?{x:e.scrollLeft+g(e).left,y:e.scrollTop+g(e).top}:{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}},y=function(e){return null===e.offsetParent},b=function(e){if(y(e))return!1;var t=g(e),a=h(n),r=v(n),o=t.width,f=t.height,d=t.top,p=t.left,m=d+f,b=p+o,w=function(){var e=d+f*i,t=b-o*i,n=m-f*i,g=p+o*i,h=r.y+s,v=r.x-l+a.width,y=r.y-c+a.height,w=r.x+u;return e<y&&n>h&&g<v&&t>w};return w()},w=function(){t||(clearTimeout(t),t=setTimeout(function(){f.engage(),t=null},a))};return f.init=function(e){e=e||{};var t=function(e,t){return parseInt(e||t,10)},f=function(e,t){return parseFloat(e||t)};n=e.container||window,r="undefined"==typeof e.reset||e.reset,o="undefined"==typeof e.handheld||e.handheld,a=t(e.throttle,250),i=f(e.elemCushion,.15),s=t(e.offsetTop,0),l=t(e.offsetRight,0),c=t(e.offsetBottom,0),u=t(e.offsetLeft,0),d=e.callback||d,p()?(m()&&o||!m())&&(document.documentElement.className+=" emergence",window.addEventListener?(window.addEventListener("load",w,!1),n.addEventListener("scroll",w,!1),n.addEventListener("resize",w,!1)):(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&w()}),n.attachEvent("onscroll",w),n.attachEvent("onresize",w))):console.log("Emergence.js is not supported in this browser.")},f.engage=function(){for(var e,t=document.querySelectorAll("[data-emergence]"),n=t.length,a=0;a<n;a++)e=t[a],b(e)?(e.setAttribute("data-emergence","visible"),e.className=e.className,d(e,"visible")):r===!0?(e.setAttribute("data-emergence","hidden"),e.className=e.className,d(e,"reset")):r===!1&&d(e,"noreset");n||f.disengage()},f.disengage=function(){window.removeEventListener?(n.removeEventListener("scroll",w,!1),n.removeEventListener("resize",w,!1)):(n.detachEvent("onscroll",w),n.detachEvent("onresize",w)),clearTimeout(t)},f})},336:function(e,t){},337:function(e,t){},241:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),l=a(s),c=n(17),u=a(c),f=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.title;return l.default.createElement("nav",{className:"navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary"},l.default.createElement("div",{className:"container"},l.default.createElement(u.default,{className:"text-center",to:"/PoliticalAtlas/"},l.default.createElement("h1",{className:"navbar-brand mb-0"},n)),l.default.createElement("div",{className:"navbar-nav-scroll"},l.default.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},l.default.createElement("li",{className:"/PoliticalAtlas/"===t.pathname?"nav-item active":"nav-item"},l.default.createElement(u.default,{to:"/PoliticalAtlas/",className:"nav-link"},"Home")),l.default.createElement("li",{className:"/PoliticalAtlas/africa/"===t.pathname?"nav-item active":"nav-item"},l.default.createElement(u.default,{to:"africa/",className:"nav-link"},"Africa")),l.default.createElement("li",{className:"/PoliticalAtlas/asia/"===t.pathname?"nav-item active":"nav-item"},l.default.createElement(u.default,{to:"asia/",className:"nav-link"},"Asia")))),l.default.createElement("div",{className:"navbar-nav flex-row ml-md-auto d-none d-md-flex"})))},t}(l.default.Component);t.default=f,e.exports=t.default},431:function(e,t){},243:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=n(1),c=a(l),u=n(17),f=(a(u),n(125)),d=n(241),p=a(d),m=n(333),g=a(m);n(431),n(334),n(337),n(335),n(336);var h=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentDidMount=function(){g.default.init()},t.prototype.componentDidUpdate=function(){g.default.init()},t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return c.default.createElement("div",null,c.default.createElement(p.default,s({title:f.siteMetadata.title},this.props)),t())},t}(c.default.Component);t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-d3f2717e906ee79d272b.js.map