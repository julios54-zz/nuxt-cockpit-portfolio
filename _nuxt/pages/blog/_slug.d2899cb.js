(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{497:function(t,e,n){"use strict";n.r(e);n(24),n(10),n(19);var o=n(3),r={head:function(){return{title:"JH-WEB | ".concat(this.post.title),meta:[{hid:"description",name:"description",content:this.post.chapo}]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,l,d,f,m,data,h,_,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.app,o=t.params,r=t.error,c=t.payload,l=t.store,d=l.state.i18n.locale,!c){e.next=6;break}return e.abrupt("return",{post:c});case 6:return f={filters:{}},"fr"===d?f.filters.slug=o.slug:f.filters["slug_"+d]=o.slug,e.next=10,n.$axios.post("".concat("http://cockpit.jh-web.fr/api","/collections/get/Blog?token=").concat("account-70a7b52c0fe043a4b5e1762e46493d"),JSON.stringify(f),{headers:{"Content-Type":"application/json"}});case 10:if(m=e.sent,(data=m.data).entries[0]){e.next=14;break}return e.abrupt("return",r({message:"404 Page not found",statusCode:404}));case 14:return h={},_=data.entries[0],v={en:_.slug_en,fr:_.slug},"fr"!==d?(h.slug=_["slug_"+d],h.content=_["content_"+d],h.chapo=_["chapo_"+d],h.image=_["image_"+d],h.title=_["title_"+d],h.date=_.date):h=_,l.commit("setBlogPostSlugs",v),e.abrupt("return",{post:h});case 20:case"end":return e.stop()}}),e)})))()},computed:{thumbnail:function(){return"".concat("http://cockpit.jh-web.fr/","/").concat(this.post.image.path)}},mounted:function(){this.$store.commit("setLayoutClass","blog-post")}},c=n(16),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"blog-post-banner-container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"blog-post-banner"},[n("figure",{staticClass:"blog-post-banner-thumbnail-container animated fadeIn"},[n("img",{staticClass:"blog-post-banner-thumbnail",attrs:{src:t.thumbnail}})]),t._v(" "),n("h1",{staticClass:"blog-post-banner-title animated bounceIn faster"},[t._v(t._s(t.post.title))]),t._v(" "),n("p",{staticClass:"blog-post-banner-content"},[t._v(t._s(t.post.chapo))])])])]),t._v(" "),n("section",{staticClass:"container blog-post-content-container"},[n("div",{staticClass:"blog-post-content"},[n("article",{staticClass:"content",domProps:{innerHTML:t._s(t.$md.render(t.post.content))}})])])])}),[],!1,null,null,null);e.default=component.exports}}]);