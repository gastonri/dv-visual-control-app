(this["webpackJsonpdv-visual-control-app"]=this["webpackJsonpdv-visual-control-app"]||[]).push([[0],{45:function(e,t,a){e.exports=a(61)},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);a(46);var n=a(23);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47),a(48);var o=a(81),r=a(88),c=a(15),i=a(0),l=a.n(i),s=a(30),u=a.n(s),d=a(35),m=a(31),v=(a(59),a(75)),p=a(89),_=a(90),b=a(77),f=a(78),E=a(79),y=a(80),h=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jsonbin.io/b/5ef6965097cb753b4d188f19/1");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,n=Object(m.a)(a.categories,1),o=n[0],e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=Object(c.b)(null,(function(e){return{setVideoSrc:function(t){e({type:"VIDEO_SRC",payload:{src:t.sources[0],videoInfo:{description:t.description,title:t.title}}})}}}))((function(e){var t=Object(i.useState)([]),a=Object(m.a)(t,2),n=a[0],o=a[1];return Object(i.useEffect)((function(){h().then((function(e){o(e.videos)}))}),[]),l.a.createElement("div",{className:"video__wrapper"},l.a.createElement(v.a,{className:"video__list"},n.map((function(t,a){return l.a.createElement(p.a,{className:"video__list__item",key:a},l.a.createElement(_.a,{className:"video__card"},l.a.createElement(b.a,{onClick:function(){e.setVideoSrc(t)}},l.a.createElement("div",{className:"video__card-info"},l.a.createElement(f.a,{className:"video__media",image:t.thumb,title:t.title}),l.a.createElement(E.a,{className:"video__card-content"},l.a.createElement("div",{className:"video__title"},l.a.createElement(y.a,{component:"h2",gutterBottom:!0,variant:"h5"},t.title),l.a.createElement(y.a,{component:"h3",gutterBottom:!0,variant:"subtitle2"},t.subtitle)),l.a.createElement(y.a,{className:"video__description",color:"textSecondary",component:"p",variant:"body2"},t.description))))))}))))})),O=a(82),N=a(83),V=a(84),j=a(85),I=a(86),S=a(87),w=Object(c.b)((function(e){return{brightness:e.brightness,play:e.play,video:e.video,volume:e.volume}}),(function(e){return{setVideoPlayPause:function(){e({type:"VIDEO_PLAY"})},setVideoVolume:function(t){e({type:"VIDEO_VOLUME",payload:{volume:t}})},setVideoBrightness:function(t){e({type:"VIDEO_BRIGHTNESS",payload:{brightness:t}})}}}))((function(e){return l.a.createElement("div",{className:"controls",id:"video-controls"},l.a.createElement("div",{className:"controls__buttons"},l.a.createElement(o.a,{className:"controls__buttons__play-pause",color:"primary",disabled:!e.video,id:"play-pause",size:"small",variant:"contained",onClick:function(){e.setVideoPlayPause()}},e.play?l.a.createElement(O.a,null):l.a.createElement(N.a,null)),l.a.createElement("div",{className:"controls__buttons__volume"},l.a.createElement(V.a,null),l.a.createElement(r.a,{className:"controls__volume__slider",defaultValue:1,disabled:!e.video,id:"volume-bar",max:1,min:0,onChange:function(t,a){e.setVideoVolume(a)},step:.01,value:e.volume}),l.a.createElement(j.a,null)),l.a.createElement("div",{className:"controls__buttons__brightness"},l.a.createElement(I.a,null),l.a.createElement(r.a,{className:"controls__brightness__slider",defaultValue:1,disabled:!e.video,id:"volume-bar",max:1,min:0,onChange:function(t,a){e.setVideoBrightness(a)},step:.01,value:e.brightness}),l.a.createElement(S.a,null))),l.a.createElement(g,null))})),k=(a(60),Object(c.b)((function(e){return{brightness:e.brightness,play:e.play,videoInfo:e.videoInfo,videoSrc:e.video,volume:e.volume}}))((function(e){var t=Object(i.useRef)();t.current&&(e.play?t.current.play():t.current.pause(),t.current.volume=e.volume,t.current.style.filter="brightness(".concat(e.brightness,")"));return l.a.createElement("div",{className:"display"},function(a){var n=l.a.createElement("div",{className:"display__video"});return a&&(n=l.a.createElement("div",{className:"display__video"},l.a.createElement("video",{className:"display__video__image",autoPlay:!0,ref:t,key:a},l.a.createElement("source",{src:a,type:"video/mp4"})),l.a.createElement("div",{className:"display__video__info"},l.a.createElement(y.a,{color:"primary",component:"h1",variant:"h3"},e.videoInfo.title),l.a.createElement(y.a,{color:"textSecondary",component:"p",variant:"body2"},e.videoInfo.description)))),n}(e.videoSrc))}))),x=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(k,null),l.a.createElement(w,null))},B=a(12),D=a.n(B),P=a(13),C={brightness:1,play:!1,video:"",videoInfo:{},volume:1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VIDEO_SRC":return Object(P.a)(Object(P.a)({},e),{},{brightness:1,play:!0,video:t.payload.src,videoInfo:Object(P.a)({},t.payload.videoInfo),volume:1});case"VIDEO_PLAY":return Object(P.a)(Object(P.a)({},e),{},{play:!e.play});case"VIDEO_VOLUME":return Object(P.a)(Object(P.a)({},e),{},{volume:t.payload.volume});case"VIDEO_BRIGHTNESS":return Object(P.a)(Object(P.a)({},e),{},{brightness:t.payload.brightness});default:return e}},L=Object(n.b)(R);D.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(c.a,{store:L},l.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.3f44ffea.chunk.js.map