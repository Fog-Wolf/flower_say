/*
Cache: ts-extend-countto, ts-extend-circliful, ts-extend-countdown, ts_vcsc, isotope, revslider-jquery.themepunch.revolution.min, themepunchtools
*/
/* themepunchtools: (http://w-70982-96990-52773.10615136203.sites.cnfree04.qifeiye.com/qfy-content/plugins/revslider/rs-plugin/js/jquery.themepunch.plugins.min.js?rev=4.1.4) */


/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 09.10.2013
*********************************************/

/*! Hammer.JS - v1.0.5 - 2013-04-07
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function(t,e){"use strict";function n(){if(!i.READY){i.event.determineEventTypes();for(var t in i.gestures)i.gestures.hasOwnProperty(t)&&i.detection.register(i.gestures[t]);i.event.onTouch(i.DOCUMENT,i.EVENT_MOVE,i.detection.detect),i.event.onTouch(i.DOCUMENT,i.EVENT_END,i.detection.detect),i.READY=!0}}var i=function(t,e){return new i.Instance(t,e||{})};i.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},i.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,i.HAS_TOUCHEVENTS="ontouchstart"in t,i.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i,i.NO_MOUSEEVENTS=i.HAS_TOUCHEVENTS&&navigator.userAgent.match(i.MOBILE_REGEX),i.EVENT_TYPES={},i.DIRECTION_DOWN="down",i.DIRECTION_LEFT="left",i.DIRECTION_UP="up",i.DIRECTION_RIGHT="right",i.POINTER_MOUSE="mouse",i.POINTER_TOUCH="touch",i.POINTER_PEN="pen",i.EVENT_START="start",i.EVENT_MOVE="move",i.EVENT_END="end",i.DOCUMENT=document,i.plugins={},i.READY=!1,i.Instance=function(t,e){var r=this;return n(),this.element=t,this.enabled=!0,this.options=i.utils.extend(i.utils.extend({},i.defaults),e||{}),this.options.stop_browser_behavior&&i.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),i.event.onTouch(t,i.EVENT_START,function(t){r.enabled&&i.detection.startDetect(r,t)}),this},i.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(t,e){var n=i.DOCUMENT.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e;var r=this.element;return i.utils.hasParent(e.target,r)&&(r=e.target),r.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var r=null,o=!1,s=!1;i.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;i.length>r;r++)t.addEventListener(i[r],n,!1)},onTouch:function(t,e,n){var a=this;this.bindDom(t,i.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();if(!u.match(/mouse/)||!s){(u.match(/touch/)||u.match(/pointerdown/)||u.match(/mouse/)&&1===c.which)&&(o=!0),u.match(/touch|pointer/)&&(s=!0);var h=0;o&&(i.HAS_POINTEREVENTS&&e!=i.EVENT_END?h=i.PointerEvent.updatePointer(e,c):u.match(/touch/)?h=c.touches.length:s||(h=u.match(/up/)?0:1),h>0&&e==i.EVENT_END?e=i.EVENT_MOVE:h||(e=i.EVENT_END),h||null===r?r=c:c=r,n.call(i.detection,a.collectEventData(t,e,c)),i.HAS_POINTEREVENTS&&e==i.EVENT_END&&(h=i.PointerEvent.updatePointer(e,c))),h||(r=null,o=!1,s=!1,i.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=i.HAS_POINTEREVENTS?i.PointerEvent.getEvents():i.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],i.EVENT_TYPES[i.EVENT_START]=t[0],i.EVENT_TYPES[i.EVENT_MOVE]=t[1],i.EVENT_TYPES[i.EVENT_END]=t[2]},getTouchList:function(t){return i.HAS_POINTEREVENTS?i.PointerEvent.getTouchList():t.touches?t.touches:[{identifier:1,pageX:t.pageX,pageY:t.pageY,target:t.target}]},collectEventData:function(t,e,n){var r=this.getTouchList(n,e),o=i.POINTER_TOUCH;return(n.type.match(/mouse/)||i.PointerEvent.matchType(i.POINTER_MOUSE,n))&&(o=i.POINTER_MOUSE),{center:i.utils.getCenter(r),timeStamp:(new Date).getTime(),target:n.target,touches:r,eventType:e,pointerType:o,srcEvent:n,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return i.detection.stopDetect()}}}},i.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[];return Object.keys(t.pointers).sort().forEach(function(n){e.push(t.pointers[n])}),e},updatePointer:function(t,e){return t==i.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1;var n={};return n[i.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==i.POINTER_MOUSE,n[i.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==i.POINTER_TOUCH,n[i.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==i.POINTER_PEN,n[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},i.utils={extend:function(t,n,i){for(var r in n)t[r]!==e&&i||(t[r]=n[r]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,e){var n=Math.abs(t.pageX-e.pageX),r=Math.abs(t.pageY-e.pageY);return n>=r?t.pageX-e.pageX>0?i.DIRECTION_LEFT:i.DIRECTION_RIGHT:t.pageY-e.pageY>0?i.DIRECTION_UP:i.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==i.DIRECTION_UP||t==i.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var n,i=["webkit","khtml","moz","ms","o",""];if(e&&t.style){for(var r=0;i.length>r;r++)for(var o in e)e.hasOwnProperty(o)&&(n=o,i[r]&&(n=i[r]+n.substring(0,1).toUpperCase()+n.substring(1)),t.style[n]=e[o]);"none"==e.userSelect&&(t.onselectstart=function(){return!1})}}},i.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:i.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,r=this.gestures.length;r>n;n++){var o=this.gestures[n];if(!this.stopped&&e[o.name]!==!1&&o.handler.call(o,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==i.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=i.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var n=0,r=t.touches.length;r>n;n++)e.touches.push(i.utils.extend({},t.touches[n]))}var o=t.timeStamp-e.timeStamp,s=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,c=i.utils.getVelocity(o,s,a);return i.utils.extend(t,{deltaTime:o,deltaX:s,deltaY:a,velocityX:c.x,velocityY:c.y,distance:i.utils.getDistance(e.center,t.center),angle:i.utils.getAngle(e.center,t.center),direction:i.utils.getDirection(e.center,t.center),scale:i.utils.getScale(e.touches,t.touches),rotation:i.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var n=t.defaults||{};return n[t.name]===e&&(n[t.name]=!0),i.utils.extend(i.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},i.gestures=i.gestures||{},i.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case i.EVENT_START:clearTimeout(this.timer),i.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==i.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case i.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case i.EVENT_END:clearTimeout(this.timer)}}},i.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==i.EVENT_END){var n=i.detection.previous,r=!1;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n&&"tap"==n.name&&t.timeStamp-n.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),r=!0),(!r||e.options.tap_always)&&(i.detection.current.name="tap",e.trigger(i.detection.current.name,t))}}},i.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==i.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},i.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&i.detection.current.name!=this.name)return;i.detection.current.name=this.name,(i.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var r=i.detection.current.lastEvent.direction;t.drag_locked_to_axis&&r!==t.direction&&(t.direction=i.utils.isVertical(r)?0>t.deltaY?i.DIRECTION_UP:i.DIRECTION_DOWN:0>t.deltaX?i.DIRECTION_LEFT:i.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&i.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!i.utils.isVertical(t.direction))&&t.preventDefault();break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(2>t.touches.length))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:var r=Math.abs(1-t.scale),o=Math.abs(t.rotation);if(n.options.transform_min_scale>r&&n.options.transform_min_rotation>o)return;i.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),o>n.options.transform_min_rotation&&n.trigger("rotate",t),r>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(1>t.scale?"in":"out"),t));break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==i.POINTER_MOUSE?(t.stopDetect(),e):(n.options.prevent_default&&t.preventDefault(),t.eventType==i.EVENT_START&&n.trigger(this.name,t),e)}},i.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==i.EVENT_END&&e.trigger(this.name,t)}},"object"==typeof module&&"object"==typeof module.exports?module.exports=i:(t.Hammer=i,"function"==typeof t.define&&t.define.amd&&t.define("hammer",[],function(){return i}))})(this),function(t,e){"use strict";t!==e&&(Hammer.event.bindDom=function(n,i,r){t(n).on(i,function(t){var n=t.originalEvent||t;n.pageX===e&&(n.pageX=t.pageX,n.pageY=t.pageY),n.target||(n.target=t.target),n.which===e&&(n.which=n.button),n.preventDefault||(n.preventDefault=t.preventDefault),n.stopPropagation||(n.stopPropagation=t.stopPropagation),r.call(this,n)})},Hammer.Instance.prototype.on=function(e,n){return t(this.element).on(e,n)},Hammer.Instance.prototype.off=function(e,n){return t(this.element).off(e,n)},Hammer.Instance.prototype.trigger=function(e,n){var i=t(this.element);return i.has(n.target).length&&(i=t(n.target)),i.trigger({type:e,gesture:n})},t.fn.hammer=function(e){return this.each(function(){var n=t(this),i=n.data("hammer");i?i&&e&&Hammer.utils.extend(i.options,e):n.data("hammer",new Hammer(this,e||{}))})})}(window.jQuery||window.Zepto);




/*!
 * VERSION: 1.11.2
 * DATE: 2013-11-20
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t){"use strict";var e=t.GreenSockGlobals||t;if(!e.TweenLite){var i,s,r,n,a,o=function(t){var i,s=t.split("."),r=e;for(i=0;s.length>i;i++)r[s[i]]=r=r[s[i]]||{};return r},l=o("com.greensock"),h=1e-10,_=[].slice,u=function(){},m=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e}}(),f={},p=function(i,s,r,n){this.sc=f[i]?f[i].sc:[],f[i]=this,this.gsClass=null,this.func=r;var a=[];this.check=function(l){for(var h,_,u,m,c=s.length,d=c;--c>-1;)(h=f[s[c]]||new p(s[c],[])).gsClass?(a[c]=h.gsClass,d--):l&&h.sc.push(this);if(0===d&&r)for(_=("com.greensock."+i).split("."),u=_.pop(),m=o(_.join("."))[u]=this.gsClass=r.apply(r,a),n&&(e[u]=m,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+i.split(".").join("/"),[],function(){return m}):"undefined"!=typeof module&&module.exports&&(module.exports=m)),c=0;this.sc.length>c;c++)this.sc[c].check()},this.check(!0)},c=t._gsDefine=function(t,e,i,s){return new p(t,e,i,s)},d=l._class=function(t,e,i){return e=e||function(){},c(t,[],function(){return e},i),e};c.globals=e;var v=[0,0,1,1],g=[],T=d("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),w=T.map={},P=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?d("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(r=T.prototype,r._calcEnd=!1,r.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},i=["Linear","Quad","Cubic","Quart","Quint,Strong"],s=i.length;--s>-1;)r=i[s]+",Power"+s,P(new T(null,null,1,s),r,"easeOut",!0),P(new T(null,null,2,s),r,"easeIn"+(0===s?",easeNone":"")),P(new T(null,null,3,s),r,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=d("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});r=y.prototype,r.addEventListener=function(t,e,i,s,r){r=r||0;var o,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)o=h[l],o.c===e&&o.s===i?h.splice(l,1):0===_&&r>o.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==n||a||n.wake()},r.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},r.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var b=t.requestAnimationFrame,k=t.cancelAnimationFrame,A=Date.now||function(){return(new Date).getTime()},S=A();for(i=["ms","moz","webkit","o"],s=i.length;--s>-1&&!b;)b=t[i[s]+"RequestAnimationFrame"],k=t[i[s]+"CancelAnimationFrame"]||t[i[s]+"CancelRequestAnimationFrame"];d("Ticker",function(t,e){var i,s,r,o,l,h=this,_=A(),m=e!==!1&&b,f=function(t){S=A(),h.time=(S-_)/1e3;var e,n=h.time-l;(!i||n>0||t===!0)&&(h.frame++,l+=n+(n>=o?.004:o-n),e=!0),t!==!0&&(r=s(f)),e&&h.dispatchEvent("tick")};y.call(h),h.time=h.frame=0,h.tick=function(){f(!0)},h.sleep=function(){null!=r&&(m&&k?k(r):clearTimeout(r),s=u,r=null,h===n&&(a=!1))},h.wake=function(){null!==r&&h.sleep(),s=0===i?u:m&&b?b:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===n&&(a=!0),f(2)},h.fps=function(t){return arguments.length?(i=t,o=1/(i||60),l=this.time+o,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),m=t,h.fps(i),void 0):m},h.fps(t),setTimeout(function(){m&&(!r||5>h.frame)&&h.useRAF(!1)},1500)}),r=l.Ticker.prototype=new l.events.EventDispatcher,r.constructor=l.Ticker;var x=d("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,Q){a||n.wake();var i=this.vars.useFrames?G:Q;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});n=x.ticker=new l.Ticker,r=x.prototype,r._dirty=r._gc=r._initted=r._paused=!1,r._totalTime=r._time=0,r._rawPrevTime=-1,r._next=r._last=r._onUpdate=r._timeline=r.timeline=null,r._paused=!1;var C=function(){a&&A()-S>2e3&&n.wake(),setTimeout(C,2e3)};C(),r.play=function(t,e){return arguments.length&&this.seek(t,e),this.reversed(!1).paused(!1)},r.pause=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!0)},r.resume=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!1)},r.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},r.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},r.reverse=function(t,e){return arguments.length&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},r.render=function(){},r.invalidate=function(){return this},r.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},r._enabled=function(t,e){return a||n.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},r._kill=function(){return this._enabled(!1,!1)},r.kill=function(t,e){return this._kill(t,e),this},r._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},r._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},r.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=m(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},r.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},r.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},r.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},r.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},r.totalTime=function(t,e,i){if(a||n.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&this.render(t,e,!1)}return this},r.progress=r.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},r.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},r.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||h,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},r.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._totalTime,!0)),this):this._reversed},r.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){a||t||n.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var R=d("core.SimpleTimeline",function(t){x.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});r=R.prototype=new x,r.constructor=R,r.kill()._gc=!1,r._first=r._last=null,r._sortChildren=!1,r.add=r.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},r._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t.timeline=null,t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),this._timeline&&this._uncache(!0)),this},r.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},r.rawTime=function(){return a||n.wake(),this._totalTime};var D=d("TweenLite",function(e,i,s){if(x.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?j[D.defaultOverwrite]:"number"==typeof l?l>>0:j[l],(o||e instanceof Array||e.push&&m(e))&&"number"!=typeof e[0])for(this._targets=a=_.call(e,0),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(_.call(n,0))):(this._siblings[r]=B(n,this,!1),1===l&&this._siblings[r].length>1&&q(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=B(e,this,!1),1===l&&this._siblings.length>1&&q(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),E=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},I=function(t,e){var i,s={};for(i in t)F[i]||i in e&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!N[i]||N[i]&&N[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};r=D.prototype=new x,r.constructor=D,r.kill()._gc=!1,r.ratio=0,r._firstPT=r._targets=r._overwrittenProps=r._startAt=null,r._notifyPluginsOfEnabled=!1,D.version="1.11.2",D.defaultEase=r._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=n,D.autoSleep=!0,D.selector=t.$||t.jQuery||function(e){return t.$?(D.selector=t.$,t.$(e)):t.document?t.document.getElementById("#"===e.charAt(0)?e.substr(1):e):e};var O=D._internals={isArray:m,isSelector:E},N=D._plugins={},L=D._tweenLookup={},U=0,F=O.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},j={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},G=x._rootFramesTimeline=new R,Q=x._rootTimeline=new R;Q._startTime=n.time,G._startTime=n.frame,Q._active=G._active=!0,x._updateRoot=function(){if(Q.render((n.time-Q._startTime)*Q._timeScale,!1,!1),G.render((n.frame-G._startTime)*G._timeScale,!1,!1),!(n.frame%120)){var t,e,i;for(i in L){for(e=L[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete L[i]}if(i=Q._first,(!i||i._paused)&&D.autoSleep&&!G._first&&1===n._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||n.sleep()}}},n.addEventListener("tick",x._updateRoot);var B=function(t,e,i){var s,r,n=t._gsTweenID;if(L[n||(t._gsTweenID=n="t"+U++)]||(L[n]={target:t,tweens:[]}),e&&(s=L[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return L[n].tweens},q=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;l>n;n++)if((o=r[n])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var _,u=e._startTime+h,m=[],f=0,p=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(_=_||$(e,0,p),0===$(o,_,p)&&(m[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale+h>u&&((p||!o._initted)&&2e-10>=u-o._startTime||(m[f++]=o)));for(n=f;--n>-1;)o=m[n],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},$=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*h>n-e?h:(n+=t.totalDuration()/t._timeScale/r)>e+h?0:n-e-h};r._init=function(){var t,e,i,s,r=this.vars,n=this._overwrittenProps,a=this._duration,o=r.immediateRender,l=r.ease;if(r.startAt){if(this._startAt&&this._startAt.render(-1,!0),r.startAt.overwrite=0,r.startAt.immediateRender=!0,this._startAt=D.to(this.target,0,r.startAt),o)if(this._time>0)this._startAt=null;else if(0!==a)return}else if(r.runBackwards&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else{i={};for(s in r)F[s]&&"autoCSS"!==s||(i[s]=r[s]);if(i.overwrite=0,i.data="isFromStart",this._startAt=D.to(this.target,0,i),r.immediateRender){if(0===this._time)return}else this._startAt.render(-1,!0)}if(this._ease=l?l instanceof T?r.easeParams instanceof Array?l.config.apply(l,r.easeParams):l:"function"==typeof l?new T(l,r.easeParams):w[l]||D.defaultEase:D.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],n?n[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,n);if(e&&D._onPluginEvent("_onInitAllProps",this),n&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},r._initProps=function(e,i,s,r){var n,a,o,l,h,_;if(null==e)return!1;this.vars.css||e.style&&e!==t&&e.nodeType&&N.css&&this.vars.autoCSS!==!1&&I(this.vars,e);for(n in this.vars){if(_=this.vars[n],F[n])_&&(_ instanceof Array||_.push&&m(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(N[n]&&(l=new N[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=h={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},h.s=h.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),h.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-h.s||0;h&&h._next&&(h._next._prev=h)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&q(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):o},r.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===l&&(a=this._rawPrevTime,(0===t||0>a||a===h)&&a!==t&&(i=!0,a>h&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t?t:h);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&this._rawPrevTime>h)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===l&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=a=!e||t?t:h)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var _=t/l,u=this._easeType,m=this._easePower;(1===u||3===u&&_>=.5)&&(_=1-_),3===u&&(_*=2),1===m?_*=_:2===m?_*=_*_:3===m?_*=_*_*_:4===m&&(_*=_*_*_*_),this.ratio=1===u?1-_:2===u?_:.5>t/l?_/2:1-_/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||g))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||i&&0===this._time&&0===o||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||g)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||g),0===l&&this._rawPrevTime===h&&a!==h&&(this._rawPrevTime=0)))}},r._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var i,s,r,n,a,o,l,h;if((m(e)||E(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){l=t||a,h=t!==s&&"all"!==s&&t!==a&&("object"!=typeof t||!t._tempKill);for(r in l)(n=a[r])&&(n.pg&&n.t._kill(l)&&(o=!0),n.pg&&0!==n.t._overwriteProps.length||(n._prev?n._prev._next=n._next:n===this._firstPT&&(this._firstPT=n._next),n._next&&(n._next._prev=n._prev),n._next=n._prev=null),delete a[r]),h&&(s[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},r.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},r._enabled=function(t,e){if(a||n.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=B(s[i],this,!0);else this._siblings=B(this.target,this,!0)}return x.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((m(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=B(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var M=d("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=M.prototype},!0);if(r=M.prototype,M.version="1.10.1",M.API=2,r._firstPT=null,r._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},r.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=0|e+(e>0?.5:-.5):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},r._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},r._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},M.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===M.API&&(N[(new t[e])._propName]=t[e]);return!0},c.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=d("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){M.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new M(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,M.activate([a]),a},i=t._gsQueue){for(s=0;i.length>s;s++)i[s]();for(r in f)f[r].func||t.console.log("GSAP encountered missing dependency: com.greensock."+r)}a=!1}})(window);
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=window.GreenSockGlobals||window,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},p=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",p("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),p("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),p("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),p=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--p>-1;)i=f?Math.random():1/u*p,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:p%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),p=u;--p>-1;)a=l[p],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),window._gsDefine&&window._gsQueue.pop()();
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},l=a.prototype=new t("css");l.constructor=a,a.version="1.11.2",a.API=2,a.defaultTransformPerspective=0,l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l};var h,u,_,p,f,c,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,m=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/,x=/opacity:([^;]*)/,w=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,k=function(t,e){return e.toUpperCase()},C=/(?:Left|Right|Width)/i,A=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,L=180/Math.PI,N={},X=document,F=X.createElement("div"),I=X.createElement("img"),E=a._internals={_specialProps:o},Y=navigator.userAgent,z=function(){var t,e=Y.indexOf("Android"),i=X.createElement("div");return _=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===e||Number(Y.substr(e+8,1))>3),f=_&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),p=-1!==Y.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y),c=parseFloat(RegExp.$1),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),U=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},B=function(t){window.console&&console.log(t)},j="",V="",q=function(t,e){e=e||F;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(V=3===s?"ms":i[s],j="-"+V.toLowerCase()+"-",V+t):null},W=X.defaultView?X.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,s,r){var n;return z||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||W(t,null))?(t=i.getPropertyValue(e.replace(P,"-$1").toLowerCase()),n=t||i.length?t:i[e]):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):U(t)},Z=function(t,e,i,s,r){if("px"===s||!s)return i;if("auto"===s||!i)return 0;var n,a=C.test(e),o=t,l=F.style,h=0>i;return h&&(i=-i),"%"===s&&-1!==e.indexOf("border")?n=i/100*(a?t.clientWidth:t.clientHeight):(l.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==s&&o.appendChild?l[a?"borderLeftWidth":"borderTopWidth"]=i+s:(o=t.parentNode||X.body,l[a?"width":"height"]=i+s),o.appendChild(F),n=parseFloat(F[a?"offsetWidth":"offsetHeight"]),o.removeChild(F),0!==n||r||(n=Z(t,e,i,s,!0))),h?-n:n},H=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=Q(t,"margin"+s,i);return t["offset"+s]-(Z(t,e,parseFloat(r),r.replace(y,""))||0)},$=function(t,e){var i,s,r={};if(e=e||W(t,null))if(i=e.length)for(;--i>-1;)r[e[i].replace(S,k)]=e.getPropertyValue(e[i]);else for(i in e)r[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0!==r[i]&&(r[i.replace(S,k)]=e[i]);return z||(r.opacity=U(t)),s=be(t,e,!1),r.rotation=s.rotation,r.skewX=s.skewX,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,we&&(r.z=s.z,r.rotationX=s.rotationX,r.rotationY=s.rotationY,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},G=function(t,e,i,s,r){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:H(t,a),void 0!==h[a]&&(o=new _e(h,a,h[a],o)));if(s)for(a in s)"className"!==a&&(l[a]=s[a]);return{difs:l,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=K[e],n=r.length;for(i=i||W(t,null);--n>-1;)s-=parseFloat(Q(t,"padding"+r[n],i,!0))||0,s-=parseFloat(Q(t,"border"+r[n]+"Width",i,!0))||0;return s},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(v,"")),e.oy=parseFloat(r.replace(v,""))),s+" "+r+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},se=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},re=function(t,e,i,s){var r,n,a,o,l=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:L)-("="===t.charAt(1)?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),l>o&&o>-l&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(r+1/3,e,i),t[1]=ae(r,e,i),t[2]=ae(r-1/3,e,i),t):(t=t.match(d)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},le="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in ne)le+="|"+l+"\\b";le=RegExp(le+")","gi");var he=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(le)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",u=a.length,_=u>0?a[0].replace(d,""):"";return u?r=e?function(t){var e,p,f,c;if("number"==typeof t)t+=_;else if(s&&D.test(t)){for(c=t.replace(D,"|").split("|"),f=0;c.length>f;f++)c[f]=r(c[f]);return c.join(",")}if(e=(t.match(le)||[n])[0],p=t.split(e).join("").match(g)||[],f=p.length,u>f--)for(;u>++f;)p[f]=i?p[0|(f-1)/2]:a[f];return o+p.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=_;else if(s&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,u>p--)for(;u>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(h)+l}:function(t){return t}},ue=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var l,h=(i+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return r.parse(e,o,n,a)}},_e=(E._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=e>0?0|e+.5:0|e-.5:l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(E._parseToProxy=function(t,e,i,s,r,n){var a,o,l,h,u,_=s,p={},f={},c=i._transform,d=N;for(i._transform=null,N=e,s=u=i.parse(t,e,s,r),N=d,n&&(i._transform=c,_&&(_._prev=null,_._prev&&(_._prev._next=null)));s&&s!==_;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,p[o]=s.s,n||(h=new _e(s,"s",o,h,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)l="xn"+a,o=s.p+"_"+l,f[o]=s.data[l],p[o]=s[l],n||(h=new _e(s,l,o,h,s.rxp[l]));s=s._next}return{proxy:p,end:f,firstMPT:h,pt:u}},E.CSSPropTween=function(t,e,s,r,a,o,l,h,u,_,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=l||e,t instanceof pe||n.push(this.n),this.r=h,this.type=o||0,u&&(this.pr=u,i=!0),this.b=void 0===_?s:_,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),fe=a.parseComplex=function(t,e,i,s,r,n,a,o,l,u){i=i||n||"",a=new pe(t,e,0,0,a,u?2:1,null,!1,o,i,s),s+="";var _,p,f,c,g,v,y,T,x,w,P,S,R=i.split(", ").join(",").split(" "),k=s.split(", ").join(",").split(" "),C=R.length,A=h!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(R=R.join(" ").replace(D,", ").split(" "),k=k.join(" ").replace(D,", ").split(" "),C=R.length),C!==k.length&&(R=(n||"").split(" "),C=R.length),a.plugin=l,a.setRatio=u,_=0;C>_;_++)if(c=R[_],g=k[_],T=parseFloat(c),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(m,""),A&&-1!==g.indexOf("px"),!0);else if(r&&("#"===c.charAt(0)||ne[c]||b.test(c)))S=","===g.charAt(g.length-1)?"),":")",c=oe(c),g=oe(g),x=c.length+g.length>6,x&&!z&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(k[_]).join("transparent")):(z||(x=!1),a.appendXtra(x?"rgba(":"rgb(",c[0],g[0]-c[0],",",!0,!0).appendXtra("",c[1],g[1]-c[1],",",!0).appendXtra("",c[2],g[2]-c[2],x?",":S,!0),x&&(c=4>c.length?1:c[3],a.appendXtra("",c,(4>g.length?1:g[3])-c,S,!1)));else if(v=c.match(d)){if(y=g.match(m),!y||y.length!==v.length)return a;for(f=0,p=0;v.length>p;p++)P=v[p],w=c.indexOf(P,f),a.appendXtra(c.substr(f,w-f),Number(P),ie(y[p],P),"",A&&"px"===c.substr(w+P.length,2),0===p),f=w+P.length;a["xs"+a.l]+=c.substr(f)}else a["xs"+a.l]+=a.l?" "+c:c;if(-1!==s.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,_=1;a.l>_;_++)S+=a["xs"+_]+a.data["xn"+_];a.e=S+a["xs"+_]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ce=9;for(l=pe.prototype,l.l=l.pr=0;--ce>0;)l["xn"+ce]=0,l["xs"+ce]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var de=function(t,e){e=e||{},this.p=e.prefix?q(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||he(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},me=E._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new de(n[s],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";me(t,{parser:function(t,i,s,r,n,a,l){var h=(window.GreenSockGlobals||window).com.greensock.plugins[e];return h?(h._cssRegister(),o[s].parse(t,i,s,r,n,a,l)):(B("Error: "+e+" js file not loaded."),n)}})}};l=de.prototype,l.parseComplex=function(t,e,i,s,r,n){var a,o,l,h,u,_,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),l=i.replace(D,"|").split("|")):p&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;h>a;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,p&&(u=e.indexOf(p),_=i.indexOf(p),u!==_&&(i=-1===_?l:o,i[a]+=" "+p));e=o.join(", "),i=l.join(", ")}return fe(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},l.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){me(t,{parser:function(t,s,r,n,a,o){var l=new pe(t,r,0,0,a,2,r,!1,i);return l.plugin=o,l.setRatio=e(t,s,n._tween,r),l},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),ye=q("transform"),Te=j+"transform",xe=q("transformOrigin"),we=null!==q("perspective"),be=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var r,n,o,l,h,u,_,p,f,c,d,m,g,v=i?t._gsTransform||{skewY:0}:{skewY:0},y=0>v.scaleX,T=2e-5,x=1e5,w=179.99,b=w*M,P=we?parseFloat(Q(t,xe,e,!1,"0 0 0").split(" ")[2])||v.zOrigin||0:0;for(ye?r=Q(t,Te,e,!0):t.currentStyle&&(r=t.currentStyle.filter.match(A),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),v.x||0,v.y||0].join(","):""),n=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],o=n.length;--o>-1;)l=Number(n[o]),n[o]=(h=l-(l|=0))?(0|h*x+(0>h?-.5:.5))/x+l:l;if(16===n.length){var S=n[8],R=n[9],k=n[10],C=n[12],O=n[13],D=n[14];if(v.zOrigin&&(D=-v.zOrigin,C=S*D-n[12],O=R*D-n[13],D=k*D+v.zOrigin-n[14]),!i||s||null==v.rotationX){var N,X,F,I,E,Y,z,U=n[0],B=n[1],j=n[2],V=n[3],q=n[4],W=n[5],Z=n[6],H=n[7],$=n[11],G=Math.atan2(Z,k),K=-b>G||G>b;v.rotationX=G*L,G&&(I=Math.cos(-G),E=Math.sin(-G),N=q*I+S*E,X=W*I+R*E,F=Z*I+k*E,S=q*-E+S*I,R=W*-E+R*I,k=Z*-E+k*I,$=H*-E+$*I,q=N,W=X,Z=F),G=Math.atan2(S,U),v.rotationY=G*L,G&&(Y=-b>G||G>b,I=Math.cos(-G),E=Math.sin(-G),N=U*I-S*E,X=B*I-R*E,F=j*I-k*E,R=B*E+R*I,k=j*E+k*I,$=V*E+$*I,U=N,B=X,j=F),G=Math.atan2(B,W),v.rotation=G*L,G&&(z=-b>G||G>b,I=Math.cos(-G),E=Math.sin(-G),U=U*I+q*E,X=B*I+W*E,W=B*-E+W*I,Z=j*-E+Z*I,B=X),z&&K?v.rotation=v.rotationX=0:z&&Y?v.rotation=v.rotationY=0:Y&&K&&(v.rotationY=v.rotationX=0),v.scaleX=(0|Math.sqrt(U*U+B*B)*x+.5)/x,v.scaleY=(0|Math.sqrt(W*W+R*R)*x+.5)/x,v.scaleZ=(0|Math.sqrt(Z*Z+k*k)*x+.5)/x,v.skewX=0,v.perspective=$?1/(0>$?-$:$):0,v.x=C,v.y=O,v.z=D}}else if(!(we&&!s&&n.length&&v.x===n[4]&&v.y===n[5]&&(v.rotationX||v.rotationY)||void 0!==v.x&&"none"===Q(t,"display",e))){var J=n.length>=6,te=J?n[0]:1,ee=n[1]||0,ie=n[2]||0,se=J?n[3]:1;v.x=n[4]||0,v.y=n[5]||0,u=Math.sqrt(te*te+ee*ee),_=Math.sqrt(se*se+ie*ie),p=te||ee?Math.atan2(ee,te)*L:v.rotation||0,f=ie||se?Math.atan2(ie,se)*L+p:v.skewX||0,c=u-Math.abs(v.scaleX||0),d=_-Math.abs(v.scaleY||0),Math.abs(f)>90&&270>Math.abs(f)&&(y?(u*=-1,f+=0>=p?180:-180,p+=0>=p?180:-180):(_*=-1,f+=0>=f?180:-180)),m=(p-v.rotation)%180,g=(f-v.skewX)%180,(void 0===v.skewX||c>T||-T>c||d>T||-T>d||m>-w&&w>m&&false|m*x||g>-w&&w>g&&false|g*x)&&(v.scaleX=u,v.scaleY=_,v.rotation=p,v.skewX=f),we&&(v.rotationX=v.rotationY=v.z=0,v.perspective=parseFloat(a.defaultTransformPerspective)||0,v.scaleZ=1)}v.zOrigin=P;for(o in v)T>v[o]&&v[o]>-T&&(v[o]=0);return i&&(t._gsTransform=v),v},Pe=function(t){var e,i,s=this.data,r=-s.rotation*M,n=r+s.skewX*M,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,l=(0|Math.sin(r)*s.scaleX*a)/a,h=(0|Math.sin(n)*-s.scaleY*a)/a,u=(0|Math.cos(n)*s.scaleY*a)/a,_=this.t.style,p=this.t.currentStyle;if(p){i=l,l=-h,h=-i,e=p.filter,_.filter="";var f,d,m=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,x="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+u,w=s.x,b=s.y;if(null!=s.ox&&(f=(s.oxp?.01*m*s.ox:s.ox)-m/2,d=(s.oyp?.01*g*s.oy:s.oy)-g/2,w+=f-(f*o+d*l),b+=d-(f*h+d*u)),v?(f=m/2,d=g/2,x+=", Dx="+(f-(f*o+d*l)+w)+", Dy="+(d-(f*h+d*u)+b)+")"):x+=", sizingMethod='auto expand')",_.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(O,x):x+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===u&&(v&&-1===x.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&_.removeAttribute("filter")),!v){var P,S,R,k=8>c?1:-1;for(f=s.ieOffsetX||0,d=s.ieOffsetY||0,s.ieOffsetX=Math.round((m-((0>o?-o:o)*m+(0>l?-l:l)*g))/2+w),s.ieOffsetY=Math.round((g-((0>u?-u:u)*g+(0>h?-h:h)*m))/2+b),ce=0;4>ce;ce++)S=J[ce],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):Z(this.t,S,parseFloat(P),P.replace(y,""))||0,R=i!==s[S]?2>ce?-s.ieOffsetX:-s.ieOffsetY:2>ce?f-s.ieOffsetX:d-s.ieOffsetY,_[S]=(s[S]=Math.round(i-R*(0===ce||2===ce?1:k)))+"px"}}},Se=function(){var t,e,i,s,r,n,a,o,l,h,u,_,f,c,d,m,g,v,y,T,x,w,b,P,S,R,k=this.data,C=this.t.style,A=k.rotation*M,O=k.scaleX,D=k.scaleY,L=k.scaleZ,N=k.perspective;if(p&&(P=C.top?"top":C.bottom?"bottom":parseFloat(Q(this.t,"top",null,!1))?"bottom":"top",T=Q(this.t,P,null,!1),S=parseFloat(T)||0,R=T.substr((S+"").length)||"px",k._ffFix=!k._ffFix,C[P]=(k._ffFix?S+.05:S-.05)+R,S=1e-4,S>O&&O>-S&&(O=L=2e-5),S>D&&D>-S&&(D=L=2e-5)),A||k.skewX)v=Math.cos(A),y=Math.sin(A),t=v,r=y,k.skewX&&(A-=k.skewX*M,v=Math.cos(A),y=Math.sin(A)),e=-y,n=v;else{if(!(k.rotationY||k.rotationX||1!==L||N))return C[ye]="translate3d("+k.x+"px,"+k.y+"px,"+k.z+"px)"+(1!==O||1!==D?" scale("+O+","+D+")":""),void 0;t=n=1,e=r=0}u=1,i=s=a=o=l=h=_=f=c=0,d=N?-1/N:0,m=k.zOrigin,g=1e5,A=k.rotationY*M,A&&(v=Math.cos(A),y=Math.sin(A),l=u*-y,f=d*-y,i=t*y,a=r*y,u*=v,d*=v,t*=v,r*=v),A=k.rotationX*M,A&&(v=Math.cos(A),y=Math.sin(A),T=e*v+i*y,x=n*v+a*y,w=h*v+u*y,b=c*v+d*y,i=e*-y+i*v,a=n*-y+a*v,u=h*-y+u*v,d=c*-y+d*v,e=T,n=x,h=w,c=b),1!==L&&(i*=L,a*=L,u*=L,d*=L),1!==D&&(e*=D,n*=D,h*=D,c*=D),1!==O&&(t*=O,r*=O,l*=O,f*=O),m&&(_-=m,s=i*_,o=a*_,_=u*_+m),s=(T=(s+=k.x)-(s|=0))?(0|T*g+(0>T?-.5:.5))/g+s:s,o=(T=(o+=k.y)-(o|=0))?(0|T*g+(0>T?-.5:.5))/g+o:o,_=(T=(_+=k.z)-(_|=0))?(0|T*g+(0>T?-.5:.5))/g+_:_,C[ye]="matrix3d("+[(0|t*g)/g,(0|r*g)/g,(0|l*g)/g,(0|f*g)/g,(0|e*g)/g,(0|n*g)/g,(0|h*g)/g,(0|c*g)/g,(0|i*g)/g,(0|a*g)/g,(0|u*g)/g,(0|d*g)/g,s,o,_,N?1+-_/N:1].join(",")+")"},Re=function(){var t,e,i,s,r,n,a,o,l,h=this.data,u=this.t,_=u.style;p&&(t=_.top?"top":_.bottom?"bottom":parseFloat(Q(u,"top",null,!1))?"bottom":"top",e=Q(u,t,null,!1),i=parseFloat(e)||0,s=e.substr((i+"").length)||"px",h._ffFix=!h._ffFix,_[t]=(h._ffFix?i+.05:i-.05)+s),h.rotation||h.skewX?(r=h.rotation*M,n=r-h.skewX*M,a=1e5,o=h.scaleX*a,l=h.scaleY*a,_[ye]="matrix("+(0|Math.cos(r)*o)/a+","+(0|Math.sin(r)*o)/a+","+(0|Math.sin(n)*-l)/a+","+(0|Math.cos(n)*l)/a+","+h.x+","+h.y+")"):_[ye]="matrix("+h.scaleX+",0,0,"+h.scaleY+","+h.x+","+h.y+")"};me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D",{parser:function(t,e,i,s,n,a,o){if(s._transform)return n;var l,h,u,_,p,f,c,d=s._transform=be(t,r,!0,o.parseTransform),m=t.style,g=1e-6,v=ve.length,y=o,T={};if("string"==typeof y.transform&&ye)u=m.cssText,m[ye]=y.transform,m.display="block",l=be(t,null,!1),m.cssText=u;else if("object"==typeof y){if(l={scaleX:se(null!=y.scaleX?y.scaleX:y.scale,d.scaleX),scaleY:se(null!=y.scaleY?y.scaleY:y.scale,d.scaleY),scaleZ:se(null!=y.scaleZ?y.scaleZ:y.scale,d.scaleZ),x:se(y.x,d.x),y:se(y.y,d.y),z:se(y.z,d.z),perspective:se(y.transformPerspective,d.perspective)},c=y.directionalRotation,null!=c)if("object"==typeof c)for(u in c)y[u]=c[u];else y.rotation=c;l.rotation=re("rotation"in y?y.rotation:"shortRotation"in y?y.shortRotation+"_short":"rotationZ"in y?y.rotationZ:d.rotation,d.rotation,"rotation",T),we&&(l.rotationX=re("rotationX"in y?y.rotationX:"shortRotationX"in y?y.shortRotationX+"_short":d.rotationX||0,d.rotationX,"rotationX",T),l.rotationY=re("rotationY"in y?y.rotationY:"shortRotationY"in y?y.shortRotationY+"_short":d.rotationY||0,d.rotationY,"rotationY",T)),l.skewX=null==y.skewX?d.skewX:re(y.skewX,d.skewX),l.skewY=null==y.skewY?d.skewY:re(y.skewY,d.skewY),(h=l.skewY-d.skewY)&&(l.skewX+=h,l.rotation+=h)}for(null!=y.force3D&&(d.force3D=y.force3D,f=!0),p=d.force3D||d.z||d.rotationX||d.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,p||null==y.scale||(l.scaleZ=1);--v>-1;)i=ve[v],_=l[i]-d[i],(_>g||-g>_||null!=N[i])&&(f=!0,n=new pe(d,i,d[i],_,n),i in T&&(n.e=T[i]),n.xs0=0,n.plugin=a,s._overwriteProps.push(n.n));return _=y.transformOrigin,(_||we&&p&&d.zOrigin)&&(ye?(f=!0,i=xe,_=(_||Q(t,i,r,!1,"50% 50%"))+"",n=new pe(m,i,0,0,n,-1,"transformOrigin"),n.b=m[i],n.plugin=a,we?(u=d.zOrigin,_=_.split(" "),d.zOrigin=(_.length>2&&(0===u||"0px"!==_[2])?parseFloat(_[2]):u)||0,n.xs0=n.e=m[i]=_[0]+" "+(_[1]||"50%")+" 0px",n=new pe(d,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=d.zOrigin):n.xs0=n.e=m[i]=_):ee(_+"",d)),f&&(s._transformType=p||3===this._transformType?3:2),n},prefix:!0}),me("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),me("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,l,h,u,_,p,f,c,d,m,g,v,y,T,x,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(d=parseFloat(t.offsetWidth),m=parseFloat(t.offsetHeight),o=e.split(" "),l=0;b.length>l;l++)this.p.indexOf("border")&&(b[l]=q(b[l])),_=u=Q(t,b[l],r,!1,"0px"),-1!==_.indexOf(" ")&&(u=_.split(" "),_=u[0],u=u[1]),p=h=o[l],f=parseFloat(_),v=_.substr((f+"").length),y="="===p.charAt(1),y?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),g=p.substr((c+"").length-(0>c?1:0))||""):(c=parseFloat(p),g=p.substr((c+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=Z(t,"borderLeft",f,v),x=Z(t,"borderTop",f,v),"%"===g?(_=100*(T/d)+"%",u=100*(x/m)+"%"):"em"===g?(w=Z(t,"borderLeft",1,"em"),_=T/w+"em",u=x/w+"em"):(_=T+"px",u=x+"px"),y&&(p=parseFloat(_)+c+g,h=parseFloat(u)+c+g)),a=fe(P,b[l],_+" "+u,p+" "+h,!1,"0px",a);return a},prefix:!0,formatter:he("0px 0px 0px 0px",!1,!0)}),me("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,l,h,u,_,p,f="background-position",d=r||W(t,null),m=this.format((d?c?d.getPropertyValue(f+"-x")+" "+d.getPropertyValue(f+"-y"):d.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==m.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=Q(t,"backgroundImage").replace(R,""),p&&"none"!==p)){for(o=m.split(" "),l=g.split(" "),I.setAttribute("src",p),h=2;--h>-1;)m=o[h],u=-1!==m.indexOf("%"),u!==(-1!==l[h].indexOf("%"))&&(_=0===h?t.offsetWidth-I.width:t.offsetHeight-I.height,o[h]=u?parseFloat(m)/100*_+"px":100*(parseFloat(m)/_)+"%");m=o.join(" ")}return this.parseComplex(t.style,m,g,n,a)},formatter:ee}),me("backgroundSize",{defaultValue:"0 0",formatter:ee}),me("perspective",{defaultValue:"0px",prefix:!0}),me("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),me("transformStyle",{prefix:!0}),me("backfaceVisibility",{prefix:!0}),me("userSelect",{prefix:!0}),me("margin",{parser:ue("marginTop,marginRight,marginBottom,marginLeft")}),me("padding",{parser:ue("paddingTop,paddingRight,paddingBottom,paddingLeft")}),me("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,l,h;return 9>c?(l=t.currentStyle,h=8>c?" ":",",o="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(o=this.format(Q(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),me("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),me("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),me("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",r,!1,"0px")+" "+Q(t,"borderTopStyle",r,!1,"solid")+" "+Q(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(le)||["#000"])[0]}}),me("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var ke=function(t){var e,i=this.t,s=i.filter||Q(this.data,"filter"),r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=s.replace(w,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("opacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(T,"opacity="+r))};me("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(Q(t,"opacity",r,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),h&&1===o&&"hidden"===Q(t,"visibility",r)&&0!==e&&(o=0),z?n=new pe(l,"opacity",o,e-o,n):(n=new pe(l,"opacity",100*o,100*(e-o),n),n.xn1=h?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=ke),h&&(n=new pe(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Ce=function(t,e){e&&(t.removeProperty?t.removeProperty(e.replace(P,"-$1").toLowerCase()):t.removeAttribute(e))},Ae=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.className=0===t?this.b:this.e;for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ce(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};me("className",{parser:function(t,e,s,n,a,o,l){var h,u,_,p,f,c=t.className,d=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Ae,a.pr=-11,i=!0,a.b=c,u=$(t,r),_=t._gsClassPT){for(p={},f=_.data;f;)p[f.p]=1,f=f._next;_.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:c.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.className=a.e,h=G(t,u,$(t),l,p),t.className=c,a.data=h.firstMPT,t.style.cssText=d,a=a.xfirst=n.parse(t,h.difs,a,o)),a}});var Oe=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",r=!0;else for(e=this.e.split(","),s=e.length;--s>-1;)i=e[s],o[i]&&(o[i].parse===a?r=!0:i="transformOrigin"===i?xe:o[i].p),Ce(n,i);r&&(Ce(n,ye),this.t._gsTransform&&delete this.t._gsTransform)}};for(me("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=Oe,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),ce=l.length;ce--;)ge(l[ce]);l=a.prototype,l._firstPT=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,h=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=W(t,""),n=this._overwriteProps;var l,p,c,d,m,g,v,y,T,w=t.style;if(u&&""===w.zIndex&&(l=Q(t,"zIndex",r),("auto"===l||""===l)&&(w.zIndex=0)),"string"==typeof e&&(d=w.cssText,l=$(t,r),w.cssText=d+";"+e,l=G(t,l,$(t)).difs,!z&&x.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,w.cssText=d),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?_&&(u=!0,""===w.zIndex&&(v=Q(t,"zIndex",r),("auto"===v||""===v)&&(w.zIndex=0)),f&&(w.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):w.zoom=1,c=p;c&&c._next;)c=c._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=T&&we?Se:ye?Re:Pe,y.data=this._transform||be(t,r,!0),n.pop()}if(i){for(;p;){for(g=p._next,c=d;c&&c.pr>p.pr;)c=c._next;(p._prev=c?c._prev:m)?p._prev._next=p:d=p,(p._next=c)?c._prev=p:m=p,p=g}this._firstPT=d}return!0},l.parse=function(t,e,i,n){var a,l,u,_,p,f,c,d,m,g,v=t.style;for(a in e)f=e[a],l=o[a],l?i=l.parse(t,f,a,this,i,n,e):(p=Q(t,a,r)+"",m="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||m&&b.test(f)?(m||(f=oe(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=fe(v,a,p,f,!0,"transparent",i,0,n)):!m||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(u=parseFloat(p),c=u||0===u?p.substr((u+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(u=te(t,a,r),c="px"):"left"===a||"top"===a?(u=H(t,a,r),c="px"):(u="opacity"!==a?0:1,c="")),g=m&&"="===f.charAt(1),g?(_=parseInt(f.charAt(0)+"1",10),f=f.substr(2),_*=parseFloat(f),d=f.replace(y,"")):(_=parseFloat(f),d=m?f.substr((_+"").length)||"":""),""===d&&(d=s[a]||c),f=_||0===_?(g?_+u:_)+d:e[a],c!==d&&""!==d&&(_||0===_)&&(u||0===u)&&(u=Z(t,a,u,c),"%"===d?(u/=Z(t,a,100,"%")/100,u>100&&(u=100),e.strictUnits!==!0&&(p=u+"%")):"em"===d?u/=Z(t,a,1,"em"):(_=Z(t,a,_,d),d="px"),g&&(_||0===_)&&(f=_+u+d)),g&&(_+=u),!u&&0!==u||!_&&0!==_?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new pe(v,a,_||u||0,0,i,-1,a,!1,0,p,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:p):B("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,u,_-u,i,0,a,h!==!1&&("px"===d||"zIndex"===a),0,p,f),i.xs0=d)):i=fe(v,a,p,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},l.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=e>0?0|e+.5:0|e-.5:n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},l._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2,this._transform=this._transform||be(this._target,r,!0)},l._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var De=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)De(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push($(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||De(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),l=[o],h=[],u=[],_=[],p=e._internals.reservedProps;for(t=o._targets||o.target,De(t,h,_),o.render(i,!0),De(t,u),o.render(0,!0),o._enabled(!0),r=_.length;--r>-1;)if(n=G(_[r],h[r],u[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);l.push(e.to(_[r],i,n))}return l},t.activate([a]),a},!0)}),window._gsDefine&&window._gsQueue.pop()();

// WAIT FOR IMAGES
/*
 * waitForImages 1.4
 * -----------------
 * Provides a callback when all images have loaded in your given selector.
 * http://www.alexanderdickson.com/
 *
 *
 * Copyright (c) 2011 Alex Dickson
 * Licensed under the MIT licenses.
 * See website for more info.
 *
 */

(function(e,t){
		e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return true}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};
		e.fn.swipe=function(t){if(!this)return false;var n={fingers:1,threshold:75,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:true,allowPageScroll:"auto"};var r="left";var i="right";var s="up";var o="down";var u="none";var f="horizontal";var l="vertical";var c="auto";var h="start";var p="move";var d="end";var v="cancel";var m="ontouchstart"in window,g=m?"touchstart":"mousedown",y=m?"touchmove":"mousemove",b=m?"touchend":"mouseup",w="touchcancel";var E="start";if(t.allowPageScroll==undefined&&(t.swipe!=undefined||t.swipeStatus!=undefined))t.allowPageScroll=u;if(t)e.extend(n,t);return this.each(function(){function t(){var e=S();if(e<=45&&e>=0)return r;else if(e<=360&&e>=315)return r;else if(e>=135&&e<=225)return i;else if(e>45&&e<135)return o;else return s}function S(){var e=H.x-B.x;var t=B.y-H.y;var n=Math.atan2(t,e);var r=Math.round(n*180/Math.PI);if(r<0)r=360-Math.abs(r);return r}function x(){return Math.round(Math.sqrt(Math.pow(B.x-H.x,2)+Math.pow(B.y-H.y,2)))}function T(e,t){if(n.allowPageScroll==u){e.preventDefault()}else{var a=n.allowPageScroll==c;switch(t){case r:if(n.swipeLeft&&a||!a&&n.allowPageScroll!=f)e.preventDefault();break;case i:if(n.swipeRight&&a||!a&&n.allowPageScroll!=f)e.preventDefault();break;case s:if(n.swipeUp&&a||!a&&n.allowPageScroll!=l)e.preventDefault();break;case o:if(n.swipeDown&&a||!a&&n.allowPageScroll!=l)e.preventDefault();break}}}function N(e,t){if(n.swipeStatus)n.swipeStatus.call(_,e,t,direction||null,distance||0);if(t==v){if(n.click&&(P==1||!m)&&(isNaN(distance)||distance==0))n.click.call(_,e,e.target)}if(t==d){if(n.swipe){n.swipe.call(_,e,direction,distance)}switch(direction){case r:if(n.swipeLeft)n.swipeLeft.call(_,e,direction,distance);break;case i:if(n.swipeRight)n.swipeRight.call(_,e,direction,distance);break;case s:if(n.swipeUp)n.swipeUp.call(_,e,direction,distance);break;case o:if(n.swipeDown)n.swipeDown.call(_,e,direction,distance);break}}}function C(e){P=0;H.x=0;H.y=0;B.x=0;B.y=0;F.x=0;F.y=0}function L(e){e.preventDefault();distance=x();direction=t();if(n.triggerOnTouchEnd){E=d;if((P==n.fingers||!m)&&B.x!=0){if(distance>=n.threshold){N(e,E);C(e)}else{E=v;N(e,E);C(e)}}else{E=v;N(e,E);C(e)}}else if(E==p){E=v;N(e,E);C(e)}M.removeEventListener(y,A,false);M.removeEventListener(b,L,false)}function A(e){if(E==d||E==v)return;var r=m?e.touches[0]:e;B.x=r.pageX;B.y=r.pageY;direction=t();if(m){P=e.touches.length}E=p;T(e,direction);if(P==n.fingers||!m){distance=x();if(n.swipeStatus)N(e,E,direction,distance);if(!n.triggerOnTouchEnd){if(distance>=n.threshold){E=d;N(e,E);C(e)}}}else{E=v;N(e,E);C(e)}}function O(e){var t=m?e.touches[0]:e;E=h;if(m){P=e.touches.length}distance=0;direction=null;if(P==n.fingers||!m){H.x=B.x=t.pageX;H.y=B.y=t.pageY;if(n.swipeStatus)N(e,E)}else{C(e)}M.addEventListener(y,A,false);M.addEventListener(b,L,false)}var M=this;var _=e(this);var D=null;var P=0;var H={x:0,y:0};var B={x:0,y:0};var F={x:0,y:0};try{this.addEventListener(g,O,false);this.addEventListener(w,C)}catch(I){}})}
})(jQuery)
;

/* revslider-jquery.themepunch.revolution.min: (http://w-70982-96990-52773.10615136203.sites.cnfree04.qifeiye.com/qfy-content/plugins/revslider/rs-plugin/js/jquery.themepunch.revolution.min.js?rev=4.1.4) */


/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 4.1.2 (12.12.2013)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/


(function(jQuery,undefined){

	
	////////////////////////////////////////
	// THE REVOLUTION PLUGIN STARTS HERE //
	///////////////////////////////////////

	jQuery.fn.extend({

		// OUR PLUGIN HERE :)
		revolution: function(options) {



				////////////////////////////////
				// SET DEFAULT VALUES OF ITEM //
				////////////////////////////////
				jQuery.fn.revolution.defaults = {
					delay:9000,
					startheight:500,
					startwidth:960,
					fullScreenAlignForce:"off",
					autoHeight:"off",

					hideThumbs:200,

					thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
					thumbHeight:50,
					thumbAmount:3,

					navigationType:"bullet",				// bullet, thumb, none
					navigationArrows:"solo",			// nextto, solo, none
					navigation_arrows_style:'defalut',
					hideThumbsOnMobile:"off",
					hideBulletsOnMobile:"off",
					hideArrowsOnMobile:"off",
					hideThumbsUnderResoluition:0,

					navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item),

					navigationHAlign:"center",				// Vertical Align top,center,bottom
					navigationVAlign:"bottom",					// Horizontal Align left,center,right
					navigationHOffset:0,
					navigationVOffset:20,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,

					keyboardNavigation:"on",

					touchenabled:"on",						// Enable Swipe Function : on/off
					onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off


					stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
					stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

					hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
					hideAllCaptionAtLimit:0,				// Hide all The Captions if Width of Browser is less then this value
					hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value

					shadow:0,								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
					fullWidth:"off",						// Turns On or Off the Fullwidth Image Centering in FullWidth Modus
					fullScreen:"off",
					minFullScreenHeight:0,					// The Minimum FullScreen Height
					fullScreenOffsetContainer:"",
					dottedOverlay:"none",					//twoxtwo, threexthree, twoxtwowhite, threexthreewhite

					forceFullWidth:"off"						// Force The FullWidth

				};

					options = jQuery.extend({}, jQuery.fn.revolution.defaults, options);





					return this.each(function() {

						var opt=options;

						if (opt.fullWidth!="on" && opt.fullScreen!="on") opt.autoHeight = "off";
						if (opt.fullScreen=="on") opt.autoHeight = "on";
						if (opt.fullWidth!="on" && opt.fullScreen!="on") forceFulWidth="off";

						var container=jQuery(this);
					
						if (opt.fullWidth=="on" && opt.autoHeight=="off")
							container.css({maxHeight:opt.startheight+"px"});

						if (is_mobile() && opt.hideThumbsOnMobile=="on" && opt.navigationType=="thumb")
						   opt.navigationType = "none"

						if (is_mobile() && opt.hideBulletsOnMobile=="on" && opt.navigationType=="bullet")
						   opt.navigationType = "none"

						if (is_mobile() && opt.hideBulletsOnMobile=="on" && opt.navigationType=="both")
						   opt.navigationType = "none"

						if (is_mobile() && opt.hideArrowsOnMobile=="on")
						   opt.navigationArrows = "none"

						if (opt.forceFullWidth=="on") {

							var loff = container.parent().offset().left;
							var mb = container.parent().css('marginBottom');
							var mt = container.parent().css('marginTop');
							if (mb==undefined) mb=0;
							if (mt==undefined) mt=0;

							container.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:'+mt+';margin-bottom:'+mb+'" class="forcefullwidth_wrapper_tp_banner"></div>');
							container.closest('.forcefullwidth_wrapper_tp_banner').append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+container.height()+'px"></div>');
							container.css({'backgroundColor':container.parent().css('backgroundColor'),'backgroundImage':container.parent().css('backgroundImage')});
							//container.parent().css({'position':'absolute','width':jQuery(window).width()});
							container.parent().css({'left':(0-loff)+"px",position:'absolute','width':jQuery(window).width()});
							opt.width=jQuery(window).width();
						}

						// HIDE THUMBS UNDER RESOLUTION
						try{
							if (opt.hideThumbsUnderResolution>jQuery(window).width() && opt.hideThumbsUnderResolution!=0) {
								container.parent().find('.tp-bullets.tp-thumbs').css({display:"none"});
							} else {
								container.parent().find('.tp-bullets.tp-thumbs').css({display:"block"});
							}
						} catch(e) {}

						if (!container.hasClass("revslider-initialised")) {

									container.addClass("revslider-initialised");
									if (container.attr('id')==undefined) container.attr('id',"revslider-"+Math.round(Math.random()*1000+5));

									// CHECK IF FIREFOX 13 IS ON WAY.. IT HAS A STRANGE BUG, CSS ANIMATE SHOULD NOT BE USED



									opt.firefox13 = false;
									opt.ie = !jQuery.support.opacity;
									opt.ie9 = (document.documentMode == 9);


									// CHECK THE jQUERY VERSION
									var version = jQuery.fn.jquery.split('.'),
										versionTop = parseFloat(version[0]),
										versionMinor = parseFloat(version[1]),
										versionIncrement = parseFloat(version[2] || '0');

									if (versionTop==1 && versionMinor < 7) {
										container.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+version+' <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>');
									}

									if (versionTop>1) opt.ie=false;


									// Delegate .transition() calls to .animate()
									// if the browser can't do CSS transitions.
									if (!jQuery.support.transition)
										jQuery.fn.transition = jQuery.fn.animate;

									// CATCH THE CONTAINER


									 // LOAD THE YOUTUBE API IF NECESSARY

									container.find('.caption').each(function() { jQuery(this).addClass('tp-caption')});

									if (is_mobile()) {
										container.find('.tp-caption').each(function() {
											if (jQuery(this).data('autoplay')==true)
												 jQuery(this).data('autoplay',false);
											// && jQuery(this).data('forcecover')!=1)
										})
									}


									var addedyt=0;
									var addedvim=0;
									var addedvid=0;
									var httpprefix = "http";

									if (location.protocol === 'https:') {
											httpprefix = "https";
									}
									container.find('.tp-caption iframe').each(function(i) {
										try {

												if (jQuery(this).attr('src').indexOf('you')>0 && addedyt==0) {
													addedyt=1;
													var s = document.createElement("script");
													s.src = httpprefix+"://www.youtube.com/player_api"; /* Load Player API*/
													var before = document.getElementsByTagName("script")[0];
													var loadit = true;
													jQuery('head').find('*').each(function(){
														if (jQuery(this).attr('src') == httpprefix+"://www.youtube.com/iframe_api")
														   loadit = false;
													});
													if (loadit)
														before.parentNode.insertBefore(s, before);
												}
											} catch(e) {}
									});



									 // LOAD THE VIMEO API
									 container.find('.tp-caption iframe').each(function(i) {
										try{
												if (jQuery(this).attr('src').indexOf('vim')>0 && addedvim==0) {
													addedvim=1;
													var f = document.createElement("script");
													f.src = httpprefix+"://a.vimeocdn.com/js/froogaloop2.min.js"; /* Load Player API*/
													var before = document.getElementsByTagName("script")[0];

													var loadit = true;
													jQuery('head').find('*').each(function(){
														if (jQuery(this).attr('src') == httpprefix+"://a.vimeocdn.com/js/froogaloop2.min.js")
														   loadit = false;
													});
													if (loadit)
														before.parentNode.insertBefore(f, before);
												}
											} catch(e) {}
									});





									// LOAD THE VIDEO.JS API IF NEEDED
									container.find('.tp-caption video').each(function(i) {
										try{
												if (jQuery(this).hasClass('video-js') && addedvid==0) {
													addedvid=1;
													var f = document.createElement("script");
													f.src = opt.videoJsPath+"video.js"; /* Load Player API*/
													var before = document.getElementsByTagName("script")[0];

													var loadit = true;
													jQuery('head').find('*').each(function(){
														if (jQuery(this).attr('src') == opt.videoJsPath+"video.js")
														   loadit = false;
													});
													if (loadit) {
														before.parentNode.insertBefore(f, before);
														jQuery('head').append('<link rel="stylesheet" type="text/css" href="'+opt.videoJsPath+'video-js.min.css" media="screen" />');
														jQuery('head').append('<script> videojs.options.flash.swf = "'+opt.videoJsPath+'video-js.swf";</script>');
													}
												}
											} catch(e) {}
									});

									// SHUFFLE MODE
									if (opt.shuffle=="on") {
										for (var u=0;u<container.find('>ul:first-child >li').length;u++) {
											var it = Math.round(Math.random()*container.find('>ul:first-child >li').length);
											container.find('>ul:first-child >li:eq('+it+')').prependTo(container.find('>ul:first-child'));
										}
									}


									// CREATE SOME DEFAULT OPTIONS FOR LATER
									opt.slots=4;
									opt.act=-1;
									opt.next=0;

									// IF START SLIDE IS SET
									if (opt.startWithSlide !=undefined) opt.next=opt.startWithSlide;
									
									// IF DEEPLINK HAS BEEN SET
									var deeplink = getUrlVars("#")[0];
									if (deeplink.length<9) {
										if (deeplink.split('slide').length>1) {
											var dslide=parseInt(deeplink.split('slide')[1],0);
											if (dslide<1) dslide=1;
											if (dslide>container.find('>ul:first >li').length) dslide=container.find('>ul:first >li').length;
											opt.next=dslide-1;
										}
									}


									opt.origcd=opt.delay;
									opt.firststart=1;

									// BASIC OFFSET POSITIONS OF THE BULLETS
									if (opt.navigationHOffset==undefined) opt.navOffsetHorizontal=0;
									if (opt.navigationVOffset==undefined) opt.navOffsetVertical=0;


									container.append('<div class="tp-loader"></div>');

									// RESET THE TIMER
									if (container.find('.tp-bannertimer').length==0) container.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
									var bt=container.find('.tp-bannertimer');
									if (bt.length>0) {
										bt.css({'width':'0%'});
									};


									// WE NEED TO ADD A BASIC CLASS FOR SETTINGS.CSS
									container.addClass("tp-simpleresponsive");
									opt.container=container;

									//if (container.height()==0) container.height(opt.startheight);

									// AMOUNT OF THE SLIDES
									opt.slideamount = container.find('>ul:first >li').length;


									// A BASIC GRID MUST BE DEFINED. IF NO DEFAULT GRID EXIST THAN WE NEED A DEFAULT VALUE, ACTUAL SIZE OF CONAINER
									if (container.height()==0) container.height(opt.startheight);
									if (opt.startwidth==undefined || opt.startwidth==0) opt.startwidth=container.width();
									if (opt.startheight==undefined || opt.startheight==0) opt.startheight=container.height();

									// OPT WIDTH && HEIGHT SHOULD BE SET
									opt.width=container.width();
									opt.height=container.height();


									// DEFAULT DEPENDECIES
									opt.bw= opt.startwidth / container.width();
									opt.bh = opt.startheight / container.height();

									// IF THE ITEM ALREADY IN A RESIZED FORM
									if (opt.width!=opt.startwidth) {

										opt.height = Math.round(opt.startheight * (opt.width/opt.startwidth));

										container.height(opt.height);

									}

									// LETS SEE IF THERE IS ANY SHADOW
									if (opt.shadow!=0) {
										container.parent().append('<div class="tp-bannershadow tp-shadow'+opt.shadow+'"></div>');
										var loff=0;
										if (opt.forceFullWidth=="on"){
											var offset = opt.container.parent().offset();
											if(offset){
												loff = 0-offset.left;
											}
										}
										container.parent().find('.tp-bannershadow').css({'width':opt.width,'left':loff});
									}


									container.find('ul').css({'display':'none'});

									var fliparent = container;

									// CHECK IF LAZY LOAD HAS BEEN ACTIVATED
									if (opt.lazyLoad=="on") {
										var fli = container.find('ul >li >img').first();
										if (fli.data('lazyload')!=undefined) fli.attr('src',fli.data('lazyload'));
										fli.data('lazydone',1);
										fliparent = fli.parent();
									}


									// IF IMAGES HAS BEEN LOADED
									fliparent.waitForImages(function() {
												// PREPARE THE SLIDES
												container.find('ul').css({'display':'block'});
												prepareSlides(container,opt);

												// CREATE BULLETS
												if (opt.slideamount >1) createBullets(container,opt);
												if (opt.slideamount >1) createThumbs(container,opt);
												if (opt.slideamount >1) createArrows(container,opt);
												if (opt.keyboardNavigation=="on") createKeyboard(container,opt);

												swipeAction(container,opt);

												if (opt.hideThumbs>0) hideThumbs(container,opt);


												container.waitForImages(function() {
													// START THE FIRST SLIDE

													container.find('.tp-loader').fadeOut(600);
													setTimeout(function() {

														swapSlide(container,opt);
														// START COUNTDOWN
														if (opt.slideamount >1) countDown(container,opt);
														container.trigger('revolution.slide.onloaded');
													},600);

												});
									});



									// IF RESIZED, NEED TO STOP ACTUAL TRANSITION AND RESIZE ACTUAL IMAGES
									jQuery(window).resize(function() {
										if (jQuery('body').find(container)!=0)
											if (opt.forceFullWidth=="on" ) {
												var offset = opt.container.closest('.forcefullwidth_wrapper_tp_banner').offset();
												if(offset){
													var loff = opt.container.closest('.forcefullwidth_wrapper_tp_banner').offset().left;
													//opt.container.parent().css({'width':jQuery(window).width()});
													opt.container.parent().css({'left':(0-loff)+"px",'width':jQuery(window).width()});
												}
											}

											if (container.outerWidth(true)!=opt.width || opt.forceFullWidth=="on") {
													
													containerResized(container,opt);
											}
									});

									// HIDE THUMBS UNDER SIZE...
									try{
										if (opt.hideThumbsUnderResoluition!=0 && opt.navigationType=="thumb") {
											if (opt.hideThumbsUnderResoluition>jQuery(window).width())
												jQuery('.tp-bullets').css({display:"none"});
											 else
											 	jQuery('.tp-bullets').css({display:"block"});
										}
									} catch(e) {}



									// CHECK IF THE CAPTION IS A "SCROLL ME TO POSITION" CAPTION IS
									//if (opt.fullScreen=="on") {
										container.find('.tp-scrollbelowslider').on('click',function() {
												var off=0;
												try{
												 	off = jQuery('body').find(opt.fullScreenOffsetContainer).height();
												 } catch(e) {}
												try{
												 	off = off - jQuery(this).data('scrolloffset');
												 } catch(e) {}

												jQuery('body,html').animate(
													{scrollTop:(container.offset().top+(container.find('>ul >li').height())-off)+"px"},{duration:400});
											});
									//}
						}

					})
				},


		// METHODE PAUSE
		revscroll: function(oy) {
					return this.each(function() {
						var container=jQuery(this);
						jQuery('body,html').animate(
							{scrollTop:(container.offset().top+(container.find('>ul >li').height())-oy)+"px"},{duration:400});
					})
				},
				
		// METHODE PAUSE
		revredraw: function(oy) {
					return this.each(function() {
						var container=jQuery(this);
						var bt = container.parent().find('.tp-bannertimer');
						var opt = bt.data('opt');
						containerResized(container,opt);

					})
				},
		revRefresh: function(obj) {
					
					if(obj.bitAction == "changePostion") {
						
						var s =jQuery(this).find("[data-slideid="+obj.slideid+"] .tp-caption[bitslidetextindex="+obj.textIndex+"]");
						s.data('x',obj.left);
						s.data('y',obj.top);
						s.attr("dataleft",obj.left);
						s.attr("datatop",obj.top);
						s.attr('dataalignhor',"left");
						s.attr('dataalignvert',"top");
						s.attr("data-x",obj.left);
						s.attr("data-y",obj.top);
						s.attr("changePostion",1);
					}
		},
		// METHODE PAUSE
		revpause: function(options) {

					return this.each(function() {
						var container=jQuery(this);
						container.data('conthover',1);
						container.data('conthover-changed',1);
						container.trigger('revolution.slide.onpause');
						var bt = container.parent().find('.tp-bannertimer');
						bt.stop();

					})


				},

		// METHODE RESUME
		revresume: function(options) {
					return this.each(function() {
						var container=jQuery(this);
						container.data('conthover',0);
						container.data('conthover-changed',1);
						container.trigger('revolution.slide.onresume');
						var bt = container.parent().find('.tp-bannertimer');
						var opt = bt.data('opt');
						var t=0;
						if(opt){
							t =((opt.delay-opt.cd)-100);
						}
						bt.animate({'width':"100%"},{duration:t,queue:false, easing:"linear"});
					})

				},

		// METHODE NEXT
		revnext: function(options) {
					return this.each(function() {
						// CATCH THE CONTAINER
						var container=jQuery(this);
						container.parent().find('.tp-rightarrow').click();


					})

				},

		// METHODE RESUME
		revprev: function(options) {
					return this.each(function() {
						// CATCH THE CONTAINER
						var container=jQuery(this);
						container.parent().find('.tp-leftarrow').click();
					})

				},

		// METHODE LENGTH
		revmaxslide: function(options) {
						// CATCH THE CONTAINER
						return jQuery(this).find('>ul:first-child >li').length;
				},


		// METHODE CURRENT
		revcurrentslide: function(options) {
						// CATCH THE CONTAINER
						var container=jQuery(this);
						var bt = container.parent().find('.tp-bannertimer');
						var opt = bt.data('opt');
						return opt.act;
				},

		// METHODE CURRENT
		revlastslide: function(options) {
						// CATCH THE CONTAINER
						var container=jQuery(this);
						var bt = container.parent().find('.tp-bannertimer');
						var opt = bt.data('opt');
						return opt.lastslide;
				},


		// METHODE JUMP TO SLIDE
		revshowslide: function(slide) {
					return this.each(function() {
						// CATCH THE CONTAINER
						var container=jQuery(this);
						container.data('showus',slide);
						container.parent().find('.tp-rightarrow').click();
					})

				}


})


		///////////////////////////
		// GET THE URL PARAMETER //
		///////////////////////////
		function getUrlVars(hashdivider)
			{
				var vars = [], hash;
				var hashes = window.location.href.slice(window.location.href.indexOf(hashdivider) + 1).split('_');
				for(var i = 0; i < hashes.length; i++)
				{
					hashes[i] = hashes[i].replace('%3D',"=");
					hash = hashes[i].split('=');
					vars.push(hash[0]);
					vars[hash[0]] = hash[1];
				}
				return vars;
			}

		//////////////////////////
		//	CONTAINER RESIZED	//
		/////////////////////////
		function containerResized(container,opt) {

			// HIDE THUMBS UNDER SIZE...
			try{
				if (opt.hideThumbsUnderResoluition!=0 && opt.navigationType=="thumb") {
					if (opt.hideThumbsUnderResoluition>jQuery(window).width())
						jQuery('.tp-bullets').css({display:"none"});
					 else
					 	jQuery('.tp-bullets').css({display:"block"});
				}
			} catch(e) {}


			container.find('.defaultimg').each(function(i) {
					setSize(jQuery(this),opt);
			});

			var loff=0;
			if (opt.forceFullWidth=="on")
				var offset = opt.container.parent().offset();
				if(offset){
					loff = 0-offset.left;
				}
			try{
				container.parent().find('.tp-bannershadow').css({'width':opt.width,'left':loff});
			} catch(e) {}

			var actsh = container.find('>ul >li:eq('+opt.act+') .slotholder');
			var nextsh = container.find('>ul >li:eq('+opt.next+') .slotholder');
			removeSlots(container,opt);
			nextsh.find('.defaultimg').css({'opacity':0});
			actsh.find('.defaultimg').css({'opacity':1});

			nextsh.find('.defaultimg').each(function() {
				var dimg = jQuery(this);
				if (dimg.data('kenburn')!=undefined)
				   dimg.data('kenburn').restart();
			});

			var nextli = container.find('>ul >li:eq('+opt.next+')');
	
			animateTheCaptions(nextli, opt,true);
			restartBannerTimer(opt,container);
			setBulPos(container,opt);

		}


		//////////////////
		// IS MOBILE ?? //
		//////////////////
		function is_mobile() {
		    var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry','Android', 'webos', ,'iPod', 'iPhone', 'iPad', 'Blackberry', 'BlackBerry'];
			var ismobile=false;
		    for(i in agents) {

			    if (navigator.userAgent.split(agents[i]).length>1) {
		            ismobile = true;

		          }
		    }
		    return ismobile;
		}

		/*********************************
			-	CHECK IF BROWSER IS IE	-
		********************************/
		function isIE( version, comparison ){
		    var $div = jQuery('<div style="display:none;"/>').appendTo(jQuery('body'));
		    $div.html('<!--[if '+(comparison||'')+' IE '+(version||'')+']><a>&nbsp;</a><![endif]-->');
		    var ieTest = $div.find('a').length;
		    $div.remove();
		    return ieTest;
		}

		////////////////////////////////
		//	RESTART THE BANNER TIMER //
		//////////////////////////////
		function restartBannerTimer(opt,container) {
						opt.cd=0;

						if (opt.videoplaying !=true) {
							var bt=	container.find('.tp-bannertimer');
								if (bt.length>0) {
									bt.stop();
									bt.css({'width':'0%'});
									bt.animate({'width':"100%"},{duration:(opt.delay-100),queue:false, easing:"linear"});
								}
							clearTimeout(opt.thumbtimer);

							opt.thumbtimer = setTimeout(function() {
								moveSelectedThumb(container);
								setBulPos(container,opt);
							},200);
						}
		}

		////////////////////////////////
		//	RESTART THE BANNER TIMER //
		//////////////////////////////
		function killBannerTimer(opt,container) {
						opt.cd=0;

							var bt=	container.find('.tp-bannertimer');
								if (bt.length>0) {
									bt.stop(true,true);
									bt.css({'width':'0%'});
								}
							clearTimeout(opt.thumbtimer);

		}

		function callingNewSlide(opt,container) {
						opt.cd=0;
						swapSlide(container,opt);
						// STOP TIMER AND RESCALE IT
							var bt=	container.find('.tp-bannertimer');
							if (bt.length>0) {
								bt.stop();
								bt.css({'width':'0%'});

								if (opt.videoplaying!=true) bt.animate({'width':"100%"},{duration:(opt.delay-100),queue:false, easing:"linear"});
							}
		}


		////////////////////////////////
		//	-	CREATE THE BULLETS -  //
		////////////////////////////////
		function createThumbs(container,opt) {

			var cap=container.parent();

			if (opt.navigationType=="thumb" || opt.navsecond=="both") {
						cap.append('<div class="tp-bullets tp-thumbs '+opt.navigationStyle+'"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');
			}
			var bullets = cap.find('.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer');
			var bup = bullets.parent();

			bup.width(opt.thumbWidth*opt.thumbAmount);
			bup.height(opt.thumbHeight);
			bup.parent().width(opt.thumbWidth*opt.thumbAmount);
			bup.parent().height(opt.thumbHeight);

			container.find('>ul:first >li').each(function(i) {
							var li= container.find(">ul:first >li:eq("+i+")");
							if (li.data('thumb') !=undefined)
								var src= li.data('thumb')
							else
								var src=li.find("img:first").attr('src');
							bullets.append('<div class="bullet thumb" style="width:'+opt.thumbWidth+'px;height:'+opt.thumbHeight+'px;"><img src="'+src+'"></div>');
							var bullet= bullets.find('.bullet:first');
				});
			//bullets.append('<div style="clear:both"></div>');
			var minwidth=10;


			// ADD THE BULLET CLICK FUNCTION HERE
			bullets.find('.bullet').each(function(i) {
				var bul = jQuery(this);

				if (i==opt.slideamount-1) bul.addClass('last');
				if (i==0) bul.addClass('first');
				bul.width(opt.thumbWidth);
				bul.height(opt.thumbHeight);

				if (minwidth<bul.outerWidth(true)) minwidth=bul.outerWidth(true);
				bul.click(function() {
					if (opt.transition==0 && bul.index() != opt.act) {
						opt.next = bul.index();
						callingNewSlide(opt,container);
					}
				});
			});


			var max=minwidth*container.find('>ul:first >li').length;

			var thumbconwidth=bullets.parent().width();
			opt.thumbWidth = minwidth;



				////////////////////////
				// SLIDE TO POSITION  //
				////////////////////////
				if (thumbconwidth<max) {
					jQuery(document).mousemove(function(e) {
						jQuery('body').data('mousex',e.pageX);
					});



					// ON MOUSE MOVE ON THE THUMBNAILS EVERYTHING SHOULD MOVE :)
					/*
					bullets.parent().mouseenter(function() {
							var $this=jQuery(this);
							$this.addClass("over");
							var offset = $this.offset();
							var x = jQuery('body').data('mousex')-offset.left;
							var thumbconwidth=$this.width();
							var minwidth=$this.find('.bullet:first').outerWidth(true);
							var max=minwidth*container.find('>ul:first >li').length;
							var diff=(max- thumbconwidth)+15;
							var steps = diff / thumbconwidth;
							x=x-30;
							//if (x<30) x=0;
							//if (x>thumbconwidth-30) x=thumbconwidth;

							//ANIMATE TO POSITION
							var pos=(0-((x)*steps));
							if (pos>0) pos =0;
							if (pos<0-max+thumbconwidth) pos=0-max+thumbconwidth;
							moveThumbSliderToPosition($this,pos,200);
					});

					bullets.parent().mousemove(function() {

									var $this=jQuery(this);

									//if (!$this.hasClass("over")) {
											var offset = $this.offset();
											var x = jQuery('body').data('mousex')-offset.left;
											var thumbconwidth=$this.width();
											var minwidth=$this.find('.bullet:first').outerWidth(true);
											var max=minwidth*container.find('>ul:first >li').length-1;
											var diff=(max- thumbconwidth)+15;
											var steps = diff / thumbconwidth;
											x=x-3;
											if (x<6) x=0;
											if (x+3>thumbconwidth-6) x=thumbconwidth;

											//ANIMATE TO POSITION
											var pos=(0-((x)*steps));
											if (pos>0) pos =0;
											if (pos<0-max+thumbconwidth) pos=0-max+thumbconwidth;
											moveThumbSliderToPosition($this,pos,0);
									//} else {
										//$this.removeClass("over");
									//}

					});

					bullets.parent().mouseleave(function() {
									var $this=jQuery(this);
									$this.removeClass("over");
									moveSelectedThumb(container);
					});*/
				}


		}


		///////////////////////////////
		//	SelectedThumbInPosition //
		//////////////////////////////
		function moveSelectedThumb(container) {

									var bullets=container.parent().find('.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer');
									var $this=bullets.parent();
									var offset = $this.offset();
									var minwidth=$this.find('.bullet:first').outerWidth(true);

									var x = $this.find('.bullet.selected').index() * minwidth;
									var thumbconwidth=$this.width();
									var minwidth=$this.find('.bullet:first').outerWidth(true);
									var max=minwidth*container.find('>ul:first >li').length;
									var diff=(max- thumbconwidth);
									var steps = diff / thumbconwidth;

									//ANIMATE TO POSITION
									var pos=0-x;

									if (pos>0) pos =0;
									if (pos<0-max+thumbconwidth) pos=0-max+thumbconwidth;
									if (!$this.hasClass("over")) {
										moveThumbSliderToPosition($this,pos,200);
									}
		}


		////////////////////////////////////
		//	MOVE THUMB SLIDER TO POSITION //
		///////////////////////////////////
		function moveThumbSliderToPosition($this,pos,speed) {
			//$this.stop();
			//$this.find('.tp-thumbcontainer').animate({'left':pos+'px'},{duration:speed,queue:false});
			TweenLite.to($this.find('.tp-thumbcontainer'),0.2,{left:pos,ease:Power3.easeOut,overwrite:"auto"});
		}



		////////////////////////////////
		//	-	CREATE THE BULLETS -  //
		////////////////////////////////
		function createBullets(container,opt) {

			if (opt.navigationType=="bullet"  || opt.navigationType=="both") {
						container.parent().append('<div class="tp-bullets simplebullets '+opt.navigationStyle+'"></div>');
			}
			var bullets = container.parent().find('.tp-bullets');

			container.find('>ul:first >li').each(function(i) {
							var src=container.find(">ul:first >li:eq("+i+") img:first").attr('src');
							bullets.append('<div class="bullet"></div>');
							var bullet= bullets.find('.bullet:first');


				});

			// ADD THE BULLET CLICK FUNCTION HERE
			bullets.find('.bullet').each(function(i) {
				var bul = jQuery(this);
				if (i==opt.slideamount-1) bul.addClass('last');
				if (i==0) bul.addClass('first');

				bul.click(function() {
					var sameslide = false;
					if (opt.navigationArrows=="withbullet" || opt.navigationArrows=="nexttobullets") {
						if (bul.index()-1 == opt.act) sameslide=true;
					} else {
						if (bul.index() == opt.act) sameslide=true;
					}

					if (opt.transition==0 && !sameslide) {

					if (opt.navigationArrows=="withbullet" || opt.navigationArrows=="nexttobullets") {
							opt.next = bul.index()-1;
					} else {
							opt.next = bul.index();
					}

						callingNewSlide(opt,container);
					}
				});

			});

			bullets.append('<div class="tpclear"></div>');



			setBulPos(container,opt);





		}

		//////////////////////
		//	CREATE ARROWS	//
		/////////////////////
		function createArrows(container,opt) {

						var bullets = container.find('.tp-bullets');

						var hidden="";
						var arst= opt.navigationStyle;
						if (opt.navigationArrows=="none") hidden="visibility:hidden;display:none";
						opt.soloArrowStyle = "default";
						
						if (opt.navigationArrows!="none" && opt.navigationArrows!="nexttobullets") arst = opt.soloArrowStyle;
						if(opt.navigation_arrows_style=="default2"){
							arst = "default2";
						}else if(opt.navigation_arrows_style=="new1"){
							arst = "new1";
						}else if(opt.navigation_arrows_style=="new2"){
							arst = "new2";
						}
						container.parent().append('<div style="'+hidden+'" class="tp-leftarrow tparrows '+arst+'"></div>');
						container.parent().append('<div style="'+hidden+'" class="tp-rightarrow tparrows '+arst+'"></div>');

						// 	THE LEFT / RIGHT BUTTON CLICK !	 //
						container.parent().find('.tp-rightarrow').click(function() {

							if (opt.transition==0) {
									if (container.data('showus') !=undefined && container.data('showus') != -1)
										opt.next = container.data('showus')-1;
									else
										opt.next = opt.next+1;
									container.data('showus',-1);
									if (opt.next >= opt.slideamount) opt.next=0;
									if (opt.next<0) opt.next=0;

									if (opt.act !=opt.next)
										callingNewSlide(opt,container);
							}
						});

						container.parent().find('.tp-leftarrow').click(function() {
							if (opt.transition==0) {
									opt.next = opt.next-1;
									opt.leftarrowpressed=1;
									if (opt.next < 0) opt.next=opt.slideamount-1;
									callingNewSlide(opt,container);
							}
						});

						setBulPos(container,opt);

		}

		//////////////////////
		//	CREATE ARROWS	//
		/////////////////////
		function createKeyboard(container,opt) {

						/*
						// 	THE LEFT / RIGHT BUTTON CLICK !	 //
						jQuery(document).keydown(function(e){
							if (opt.transition==0 && e.keyCode == 39) {
									if (container.data('showus') !=undefined && container.data('showus') != -1)
										opt.next = container.data('showus')-1;
									else
										opt.next = opt.next+1;
									container.data('showus',-1);
									if (opt.next >= opt.slideamount) opt.next=0;
									if (opt.next<0) opt.next=0;

									if (opt.act !=opt.next)
										callingNewSlide(opt,container);
							}

							if (opt.transition==0 && e.keyCode == 37) {
									opt.next = opt.next-1;
									opt.leftarrowpressed=1;
									if (opt.next < 0) opt.next=opt.slideamount-1;
									callingNewSlide(opt,container);
							}
						});

						setBulPos(container,opt);*/

		}

		////////////////////////////
		// SET THE SWIPE FUNCTION //
		////////////////////////////
		function swipeAction(container,opt) {
			// TOUCH ENABLED SCROLL
				
				if (opt.touchenabled=="on")
						container.swipe( {data:container,
										swipeRight:function()
												{

													if (opt.transition==0) {
															opt.next = opt.next-1;
															opt.leftarrowpressed=1;
															if (opt.next < 0) opt.next=opt.slideamount-1;
															callingNewSlide(opt,container);
													}
												},
										swipeLeft:function()
												{

													if (opt.transition==0) {
															opt.next = opt.next+1;
															if (opt.next == opt.slideamount) opt.next=0;
															callingNewSlide(opt,container);
													}
												},
										  swipeUp:function(event, direction, distance, duration) {
												if (opt.transition==0) {
															opt.next = opt.next-1;
															opt.leftarrowpressed=1;
															if (opt.next < 0) opt.next=opt.slideamount-1;
															callingNewSlide(opt,container);
												}
										  },
										  swipeDown:function(event, direction, distance, duration) {
												if (opt.transition==0) {
															opt.next = opt.next+1;
															if (opt.next == opt.slideamount) opt.next=0;
															callingNewSlide(opt,container);
													}
										  },
									allowPageScroll:"auto"} );
		}




		////////////////////////////////////////////////////////////////
		// SHOW AND HIDE THE THUMBS IF MOUE GOES OUT OF THE BANNER  ///
		//////////////////////////////////////////////////////////////
		function hideThumbs(container,opt) {

			var bullets = container.parent().find('.tp-bullets');
			var ca = container.parent().find('.tparrows');

			if (bullets==null) {
				container.append('<div class=".tp-bullets"></div>');
				var bullets = container.parent().find('.tp-bullets');
			}

			if (ca==null) {
				container.append('<div class=".tparrows"></div>');
				var ca = container.parent().find('.tparrows');
			}


			//var bp = (thumbs.parent().outerHeight(true) - opt.height)/2;

			//	ADD THUMBNAIL IMAGES FOR THE BULLETS //
			container.data('hidethumbs',opt.hideThumbs);

			bullets.addClass("hidebullets");
			ca.addClass("hidearrows");

			bullets.hover(function() {
				bullets.addClass("hovered");
				clearTimeout(container.data('hidethumbs'));
				bullets.removeClass("hidebullets");
				ca.removeClass("hidearrows");
			},
			function() {

				bullets.removeClass("hovered");
				if (!container.hasClass("hovered") && !bullets.hasClass("hovered"))
					container.data('hidethumbs', setTimeout(function() {
					bullets.addClass("hidebullets");
					ca.addClass("hidearrows");
					},opt.hideThumbs));
			});


			ca.hover(function() {
				bullets.addClass("hovered");
				clearTimeout(container.data('hidethumbs'));
				bullets.removeClass("hidebullets");
				ca.removeClass("hidearrows");

			},
			function() {

				bullets.removeClass("hovered");
				});



			container.on('mouseenter', function() {
				container.addClass("hovered");
				clearTimeout(container.data('hidethumbs'));
				bullets.removeClass("hidebullets");
				ca.removeClass("hidearrows");
			});

			container.on('mouseleave', function() {
				container.removeClass("hovered");
				if (!container.hasClass("hovered") && !bullets.hasClass("hovered"))
					container.data('hidethumbs', setTimeout(function() {
							bullets.addClass("hidebullets");
							ca.addClass("hidearrows");
					},opt.hideThumbs));
			});

		}







		//////////////////////////////
		//	SET POSITION OF BULLETS	//
		//////////////////////////////
		function setBulPos(container,opt) {
			var topcont=container.parent();
			var bullets=topcont.find('.tp-bullets');

			if (opt.navigationType=="thumb") {
				bullets.find('.thumb').each(function(i) {
					var thumb = jQuery(this);

					thumb.css({'width':opt.thumbWidth * opt.bw+"px", 'height':opt.thumbHeight*opt.bh+"px"});

				})
				var bup = bullets.find('.tp-mask');

				bup.width(opt.thumbWidth*opt.thumbAmount * opt.bw);
				bup.height(opt.thumbHeight * opt.bh);
				bup.parent().width(opt.thumbWidth*opt.thumbAmount * opt.bw);
				bup.parent().height(opt.thumbHeight * opt.bh);
			}


			var tl = topcont.find('.tp-leftarrow');
			var tr = topcont.find('.tp-rightarrow');

			if (opt.navigationType=="thumb" && opt.navigationArrows=="nexttobullets") opt.navigationArrows="solo";
			// IM CASE WE HAVE NAVIGATION BULLETS TOGETHER WITH ARROWS
			if (opt.navigationArrows=="nexttobullets") {
				tl.prependTo(bullets).css({'float':'left'});
				tr.insertBefore(bullets.find('.tpclear')).css({'float':'left'});
			}
			var loff=0;
			if (opt.forceFullWidth=="on"){
					
				var offset = opt.container.parent().offset();
				if(offset){
					loff = 0-offset.left;
				}
			}

			if (opt.navigationArrows!="none" && opt.navigationArrows!="nexttobullets") {

				tl.css({'position':'absolute'});
				tr.css({'position':'absolute'});


				if (opt.soloArrowLeftValign=="center")	tl.css({'top':'50%','marginTop':(opt.soloArrowLeftVOffset-Math.round(tl.innerHeight()/2))+"px"});
				if (opt.soloArrowLeftValign=="bottom")	tl.css({'top':'auto','bottom':(0+opt.soloArrowLeftVOffset)+"px"});
				if (opt.soloArrowLeftValign=="top")	 	tl.css({'bottom':'auto','top':(0+opt.soloArrowLeftVOffset)+"px"});
				if (opt.soloArrowLeftHalign=="center")	tl.css({'left':'50%','marginLeft':(loff+opt.soloArrowLeftHOffset-Math.round(tl.innerWidth()/2))+"px"});
				if (opt.soloArrowLeftHalign=="left")	tl.css({'left':(0+opt.soloArrowLeftHOffset+loff)+"px"});
				if (opt.soloArrowLeftHalign=="right")	tl.css({'right':(0+opt.soloArrowLeftHOffset-loff)+"px"});

				if (opt.soloArrowRightValign=="center")	tr.css({'top':'50%','marginTop':(opt.soloArrowRightVOffset-Math.round(tr.innerHeight()/2))+"px"});
				if (opt.soloArrowRightValign=="bottom")	tr.css({'top':'auto','bottom':(0+opt.soloArrowRightVOffset)+"px"});
				if (opt.soloArrowRightValign=="top")	tr.css({'bottom':'auto','top':(0+opt.soloArrowRightVOffset)+"px"});
				if (opt.soloArrowRightHalign=="center")	tr.css({'left':'50%','marginLeft':(loff+opt.soloArrowRightHOffset-Math.round(tr.innerWidth()/2))+"px"});
				if (opt.soloArrowRightHalign=="left")	tr.css({'left':(0+opt.soloArrowRightHOffset+loff)+"px"});
				if (opt.soloArrowRightHalign=="right")	tr.css({'right':(0+opt.soloArrowRightHOffset-loff)+"px"});


				//if (tl.position()!=null)
					//tl.css({'top':Math.round(parseInt(tl.position().top,0))+"px"});

				//if (tr.position()!=null)
					//tr.css({'top':Math.round(parseInt(tr.position().top,0))+"px"});
			}

			if (opt.navigationArrows=="none") {
				tl.css({'visibility':'hidden'});
				tr.css({'visibility':'hidden'});
			}

			// SET THE POSITIONS OF THE BULLETS // THUMBNAILS


			if (opt.navigationVAlign=="center")	 bullets.css({'top':'50%','marginTop':(opt.navigationVOffset-Math.round(bullets.innerHeight()/2))+"px"});
			if (opt.navigationVAlign=="bottom")	 bullets.css({'bottom':(0+opt.navigationVOffset)+"px"});
			if (opt.navigationVAlign=="top")	 bullets.css({'top':(0+opt.navigationVOffset)+"px"});

			if (opt.navigationHAlign=="center")	bullets.css({'left':'50%','marginLeft':(loff+opt.navigationHOffset-Math.round(bullets.innerWidth()/2))+"px"});
			if (opt.navigationHAlign=="left")	bullets.css({'left':(0+opt.navigationHOffset+loff)+"px"});
			if (opt.navigationHAlign=="right")	bullets.css({'right':(0+opt.navigationHOffset-loff)+"px"});



		}



		//////////////////////////////////////////////////////////
		//	-	SET THE IMAGE SIZE TO FIT INTO THE CONTIANER -  //
		////////////////////////////////////////////////////////
		function setSize(img,opt) {
				
				
				opt.container.closest('.forcefullwidth_wrapper_tp_banner').find('.tp-fullwidth-forcer').css({'height':opt.container.height()});
				opt.container.closest('.rev_slider_wrapper').css({'height':opt.container.height()});


				opt.width=parseInt(opt.container.width(),0);
				opt.height=parseInt(opt.container.height(),0);


				//opt.height= opt.startheight * opt.bh;
				opt.height = Math.round(opt.startheight * (opt.width/opt.startwidth));
				if (opt.height>opt.startheight && opt.autoHeight!="on") opt.height=opt.startheight;
				
				
				
				opt.bw= (opt.width / opt.startwidth);
				opt.bh = (opt.height / opt.startheight);
				
			

				if (opt.bh>opt.bw) opt.bh=opt.bw;
				if (opt.bh<opt.bw) opt.bw = opt.bh;
				if (opt.bw<opt.bh) opt.bh = opt.bw;
				if (opt.bh>1) { opt.bw=1; opt.bh=1; }
				if (opt.bw>1) {opt.bw=1; opt.bh=1; }

				
			

				



				



				if (opt.fullScreen=="on") {
						opt.height = opt.bw * opt.startheight;
						var cow = opt.container.parent().width();
						var coh = jQuery(window).height();
						if (opt.fullScreenOffsetContainer!=undefined) {
							try{
								var offcontainers = opt.fullScreenOffsetContainer.split(",");
								jQuery.each(offcontainers,function(index,searchedcont) {
									coh = coh - jQuery(searchedcont).outerHeight(true);
									if (coh<opt.minFullScreenHeight) coh=opt.minFullScreenHeight;
								});
							} catch(e) {}
						}

						opt.container.parent().height(coh);
						opt.container.css({'height':'100%'});

						opt.height=coh;

				} else {
										opt.container.height(opt.height);
				}


				opt.slotw=Math.ceil(opt.width/opt.slots);

				if (opt.fullSreen=="on")
					opt.sloth=Math.ceil(jQuery(window).height()/opt.slots);
				else
					opt.sloth=Math.ceil(opt.height/opt.slots);

				if (opt.autoHeight=="on")
				 	opt.sloth=Math.ceil(img.height()/opt.slots);




		}




		/////////////////////////////////////////
		//	-	PREPARE THE SLIDES / SLOTS -  //
		///////////////////////////////////////
		function prepareSlides(container,opt) {

			container.find('.tp-caption').each(function() { jQuery(this).addClass(jQuery(this).data('transition')); jQuery(this).addClass('start') });

			// PREPARE THE UL CONTAINER TO HAVEING MAX HEIGHT AND HEIGHT FOR ANY SITUATION
			container.find('>ul:first').css({overflow:'hidden',width:'100%',height:'100%',maxHeight:container.parent().css('maxHeight')});
			if (opt.autoHeight=="on") {
			   container.find('>ul:first').css({overflow:'hidden',width:'100%',height:'100%',maxHeight:"none"});
			   container.css({'maxHeight':'none'});
			   container.parent().css({'maxHeight':'none'});
			 }

			container.find('>ul:first >li').each(function(j) {
				var li=jQuery(this);

				// MAKE LI OVERFLOW HIDDEN FOR FURTHER ISSUES
				li.css({'width':'100%','height':'100%','overflow':'hidden'});

				if (li.data('link')!=undefined) {
					var link = li.data('link');
					var target="_self";
					var zindex=2;
					if (li.data('slideindex')=="back") zindex=0;

					var linktoslide=li.data('linktoslide');
					if (li.data('target')!=undefined) target=li.data('target');

					if (link=="slide") {
						li.append('<div class="tp-caption sft slidelink" style="z-index:'+zindex+';" data-x="0" data-y="0" data-linktoslide="'+linktoslide+'" data-start="0"><a><div></div></a></div>');
					} else {
						linktoslide="no";
						li.append('<div class="tp-caption sft slidelink" style="z-index:'+zindex+';" data-x="0" data-y="0" data-linktoslide="'+linktoslide+'" data-start="0"><a target="'+target+'" href="'+link+'"><div></div></a></div>');
					}

				}
			});

			// RESOLVE OVERFLOW HIDDEN OF MAIN CONTAINER
			container.parent().css({'overflow':'visible'});


			container.find('>ul:first >li >img').each(function(j) {

				var img=jQuery(this);

				img.addClass('defaultimg');
				if (img.data('lazyload')!=undefined && img.data('lazydone') != 1) {

				} else {
					setSize(img,opt);
				}



				img.wrap('<div class="slotholder" style="width:100%;height:100%;"'+
						  'data-duration="'+img.data('duration')+'"'+
						  'data-zoomstart="'+img.data("zoomstart")+'"'+
						  'data-zoomend="'+img.data("zoomend")+'"'+
						  'data-rotationstart="'+img.data("rotationstart")+'"'+
						  'data-rotationend="'+img.data("rotationend")+'"'+
						  'data-ease="'+img.data("ease")+'"'+
						  'data-duration="'+img.data("duration")+'"'+
						  'data-bgpositionend="'+img.data("bgpositionend")+'"'+
						  'data-bgposition="'+img.data("bgposition")+'"'+
						  'data-duration="'+img.data("duration")+'"'+
						  'data-kenburns="'+img.data("kenburns")+'"'+
						  'data-easeme="'+img.data("ease")+'"'+
						  'data-bgfit="'+img.data("bgfit")+'"'+
						  'data-bgfitend="'+img.data("bgfitend")+'"'+
						  'data-owidth="'+img.data("owidth")+'"'+
						  'data-oheight="'+img.data("oheight")+'"'+
						  '></div>');

				if (opt.dottedOverlay!="none" && opt.dottedOverlay!=undefined)
						img.closest('.slotholder').append('<div class="tp-dottedoverlay '+opt.dottedOverlay+'"></div>');

				var src=img.attr('src');
				var ll = img.data('lazyload');
				var bgfit = img.data('bgfit');
				var bgrepeat = img.data('bgrepeat');
				var bgposition = img.data('bgposition');


				if (bgfit==undefined) bgfit="cover";
				if (bgrepeat==undefined) bgrepeat="no-repeat";
				if (bgposition==undefined) bgposition="center center"


				var pari = img.closest('.slotholder');
				img.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="'+img.data('lazyload')+'" data-bgfit="'+bgfit+'"data-bgposition="'+bgposition+'" data-bgrepeat="'+bgrepeat+'" data-lazydone="'+img.data('lazydone')+'" data-src="'+src+'" style="background-color:'+img.css("backgroundColor")+';background-repeat:'+bgrepeat+';background-image:url('+src+');background-size:'+bgfit+';background-position:'+bgposition+';width:100%;height:100%;"></div>');

				if (isIE(8)) {
					pari.find('.tp-bgimg').css({backgroundImage:"none",'background-image':'none'});
					pari.find('.tp-bgimg').append('<img class="ieeightfallbackimage defaultimg" src="'+src+'" style="width:100%">');
				}




				img.css({'opacity':0});
				img.data('li-id',j);

			});
		}





		///////////////////////
		// PREPARE THE SLIDE //
		//////////////////////
		function prepareOneSlideSlot(slotholder,opt,visible,vorh) {
				

				var sh=slotholder;
				var img = sh.find('.defaultimg')

				var scalestart = sh.data('zoomstart');
				var rotatestart = sh.data('rotationstart');

				if (img.data('currotate')!=undefined)
					rotatestart = img.data('currotate');
				if (img.data('curscale')!=undefined)
					scalestart = img.data('curscale');
				setSize(img,opt)
				var src = img.data('src');
				var bgcolor=img.css('background-color');

				var w = opt.width;
				var h = opt.height;
				if (opt.autoHeight=="on")
				  h = opt.container.height();

				var fulloff = img.data("fxof");
				if (fulloff==undefined) fulloff=0;

				fullyoff=0;

				var off=0;

				var bgfit = img.data('bgfit');
				var bgrepeat = img.data('bgrepeat');
				var bgposition = img.data('bgposition');

				if (bgfit==undefined) bgfit="cover";
				if (bgrepeat==undefined) bgrepeat="no-repeat";
				if (bgposition==undefined) bgposition="center center";



				if (sh.data('kenburns')=="on") {
				   bgfit=scalestart;
				   if (bgfit.toString().length<4)
					   bgfit = calculateKenBurnScales(bgfit,sh,opt);
				 }

			   if (isIE(8)) {
					var imgsrc=src;
			    	src="";
				}

				if (vorh == "horizontal") {

					if (!visible) var off=0-opt.slotw;

					for (var i=0;i<opt.slots;i++) {
							sh.append('<div class="slot" style="position:absolute;'+
															'top:'+(0+fullyoff)+'px;'+
															'left:'+(fulloff+i*opt.slotw)+'px;'+
															'overflow:hidden;width:'+opt.slotw+'px;'+
															'height:'+h+'px">'+
							'<div class="slotslide" style="position:absolute;'+
															'top:0px;left:'+off+'px;'+
															'width:'+opt.slotw+'px;'+
															'height:'+h+'px;overflow:hidden;">'+
							'<div style="background-color:'+bgcolor+';'+
															'position:absolute;top:0px;'+
															'left:'+(0-(i*opt.slotw))+'px;'+
															'width:'+w+'px;height:'+h+'px;'+
															'background-image:url('+src+');'+
															'background-repeat:'+bgrepeat+';'+
															'background-size:'+bgfit+';background-position:'+bgposition+';">'+
							'</div></div></div>');
							if (scalestart!=undefined && rotatestart!=undefined)
								TweenLite.set(sh.find('.slot').last(),{rotationZ:rotatestart});
							if (isIE(8)) {
							   sh.find('.slot ').last().find('.slotslide').append('<img class="ieeightfallbackimage" src="'+imgsrc+'" style="width:100%">');
							   ieimgposition(sh,opt);

						}
					}
				} else {

					if (!visible) var off=0-opt.sloth;

					for (var i=0;i<opt.slots+2;i++) {
						sh.append('<div class="slot" style="position:absolute;'+
												 'top:'+(fullyoff+(i*opt.sloth))+'px;'+
												 'left:'+(fulloff)+'px;'+
												 'overflow:hidden;'+
												 'width:'+w+'px;'+
												 'height:'+(opt.sloth)+'px">'+

									 '<div class="slotslide" style="position:absolute;'+
														 'top:'+(off)+'px;'+
														 'left:0px;width:'+w+'px;'+
														 'height:'+opt.sloth+'px;'+
														 'overflow:hidden;">'+
									'<div style="background-color:'+bgcolor+';'+
															'position:absolute;'+
															'top:'+(0-(i*opt.sloth))+'px;'+
															'left:0px;'+
															'width:'+w+'px;height:'+h+'px;'+
															'background-image:url('+src+');'+
															'background-repeat:'+bgrepeat+';'+
															'background-size:'+bgfit+';background-position:'+bgposition+';">'+

									'</div></div></div>');
							if (scalestart!=undefined && rotatestart!=undefined)
								TweenLite.set(sh.find('.slot').last(),{rotationZ:rotatestart});
							if (isIE(8)) {
						    	sh.find('.slot ').last().find('.slotslide').append('<img class="ieeightfallbackimage" src="'+imgsrc+'" style="width:100%">');
						    	ieimgposition(sh,opt);
							}
					}
				}




		}



		///////////////////////
		// PREPARE THE SLIDE //
		//////////////////////
		function prepareOneSlideBox(slotholder,opt,visible) {

				var sh=slotholder;
				var img = sh.find('.defaultimg');

				var scalestart = sh.data('zoomstart');
				var rotatestart = sh.data('rotationstart');

				if (img.data('currotate')!=undefined)
					rotatestart = img.data('currotate');
				if (img.data('curscale')!=undefined)
					scalestart = img.data('curscale')*100;

				setSize(img,opt)
				var src = img.data('src');
				var bgcolor=img.css('backgroundColor');

				var w = opt.width;
				var h = opt.height;
				if (opt.autoHeight=="on")
				  h = opt.container.height();

				var fulloff = img.data("fxof");
				if (fulloff==undefined) fulloff=0;

				fullyoff=0;



				var off=0;


				if (isIE(8)) {
					var imgsrc=src;
			    	src="";
				}

				// SET THE MINIMAL SIZE OF A BOX
				var basicsize = 0;
				if (opt.sloth>opt.slotw)
					basicsize=opt.sloth
				else
					basicsize=opt.slotw;


				if (!visible) {
					var off=0-basicsize;
				}

				opt.slotw = basicsize;
				opt.sloth = basicsize;
				var x=0;
				var y=0;

				var bgfit = img.data('bgfit');
				var bgrepeat = img.data('bgrepeat');
				var bgposition = img.data('bgposition');

				if (bgfit==undefined) bgfit="cover";
				if (bgrepeat==undefined) bgrepeat="no-repeat";
				if (bgposition==undefined) bgposition="center center";

				if (sh.data('kenburns')=="on") {
				   bgfit=scalestart;
				   
				   if (bgfit.toString().length<4)
					   bgfit = calculateKenBurnScales(bgfit,sh,opt);
				 }

				for (var j=0;j<opt.slots;j++) {

					y=0;
					for (var i=0;i<opt.slots;i++) 	{


						sh.append('<div class="slot" '+
								  'style="position:absolute;'+
											'top:'+(fullyoff+y)+'px;'+
											'left:'+(fulloff+x)+'px;'+
											'width:'+basicsize+'px;'+
											'height:'+basicsize+'px;'+
											'overflow:hidden;">'+

								  '<div class="slotslide" data-x="'+x+'" data-y="'+y+'" '+
								  			'style="position:absolute;'+
											'top:'+(0)+'px;'+
											'left:'+(0)+'px;'+
											'width:'+basicsize+'px;'+
											'height:'+basicsize+'px;'+
											'overflow:hidden;">'+

								  '<div style="position:absolute;'+
											'top:'+(0-y)+'px;'+
											'left:'+(0-x)+'px;'+
											'width:'+w+'px;'+
											'height:'+h+'px;'+
											'background-color:'+bgcolor+';'+
											'background-image:url('+src+');'+
											'background-repeat:'+bgrepeat+';'+
											'background-size:'+bgfit+';background-position:'+bgposition+';">'+
								  '</div></div></div>');
						y=y+basicsize;

						if (isIE(8)) {

							sh.find('.slot ').last().find('.slotslide').append('<img src="'+imgsrc+'">');
							ieimgposition(sh,opt);
						}

						if (scalestart!=undefined && rotatestart!=undefined)
								TweenLite.set(sh.find('.slot').last(),{rotationZ:rotatestart});
					}
					x=x+basicsize;
				}
		}

		/***********************************************
			-	MOVE IE8 IMAGE IN RIGHT POSITION	-
		***********************************************/

		function ieimgposition(nextsh,opt) {

			if (isIE(8)) {
					var ie8img = nextsh.find('.ieeightfallbackimage');
					if (opt.startwidth/opt.startheight <nextsh.data('owidth')/nextsh.data('oheight'))
						ie8img.css({width:"auto",height:"100%"})
					else
						ie8img.css({width:"100%",height:"auto"})



					var ie8w = ie8img.width(),
					    ie8h = ie8img.height();

					if (nextsh.data('bgposition')=="center center")
						ie8img.css({position:"absolute",top:opt.height/2 - ie8h/2+"px", left:opt.width/2-ie8w/2+"px"});

					if (nextsh.data('bgposition')=="center top" || nextsh.data('bgposition')=="top center")
						ie8img.css({position:"absolute",top:"0px", left:opt.width/2-ie8w/2+"px"});

					if (nextsh.data('bgposition')=="center bottom" || nextsh.data('bgposition')=="bottom center")
						ie8img.css({position:"absolute",bottom:"0px", left:opt.width/2-ie8w/2+"px"});


					if (nextsh.data('bgposition')=="right top" || nextsh.data('bgposition')=="top right")
						ie8img.css({position:"absolute",top:"0px", right:"0px"});

					if (nextsh.data('bgposition')=="right bottom" || nextsh.data('bgposition')=="bottom right")
						ie8img.css({position:"absolute",bottom:"0px", right:"0px"});

					if (nextsh.data('bgposition')=="right center" || nextsh.data('bgposition')=="center right")
						ie8img.css({position:"absolute",top:opt.height/2 - ie8h/2+"px", right:"0px"});

					if (nextsh.data('bgposition')=="left bottom" || nextsh.data('bgposition')=="bottom left")
						ie8img.css({position:"absolute",bottom:"0px", left:"0px"});

					if (nextsh.data('bgposition')=="left center" || nextsh.data('bgposition')=="center left")
						ie8img.css({position:"absolute",top:opt.height/2 - ie8h/2+"px", left:"0px"});
				}
		}




		///////////////////////
		//	REMOVE SLOTS	//
		/////////////////////
		function removeSlots(container,opt,time) {
			if (time==undefined)
				time==80

			setTimeout(function() {
				container.find('.slotholder .slot').each(function() {
					clearTimeout(jQuery(this).data('tout'));
					jQuery(this).remove();
				});
				opt.transition = 0;
			},time);
		}





		//////////////////////////////
		//                         //
		//	-	SWAP THE SLIDES -  //
		//                        //
		////////////////////////////
		function swapSlide(container,opt) {
			try{
				var actli = container.find('>ul:first-child >li:eq('+opt.act+')');
			} catch(e) {
				var actli=container.find('>ul:first-child >li:eq(1)');
			}
			opt.lastslide=opt.act;
			var nextli = container.find('>ul:first-child >li:eq('+opt.next+')');

			var defimg= nextli.find('.defaultimg');

			if (defimg.data('lazyload') !=undefined && defimg.data('lazyload') !="undefined" && defimg.data('lazydone') !=1 ) {

				defimg.css({backgroundImage:'url("'+nextli.find('.defaultimg').data('lazyload')+'")'});
				defimg.data('src',nextli.find('.defaultimg').data('lazyload'));
				defimg.data('lazydone',1);
				defimg.data('orgw',0);
				nextli.data('loadeddone',1);
				container.find('.tp-loader').css({'display':'block'}).animate({opacity:1,duration:300});
				var limg = new Image();
				limg.onload = function() {
						setTimeout(function() { killBannerTimer(opt,container)},180);

							nextli.waitForImages(function() {

									defimg.data('lazydone',1);
									nextli.data('owidth',limg.width);
									nextli.data('oheight',limg.height);
									nextli.find('.slotholder').data('owidth',limg.width);
									nextli.find('.slotholder').data('oheight',limg.height);


									setTimeout(function() {restartBannerTimer(opt,container)},190);
									setSize(defimg,opt);
									setBulPos(container,opt);
									setSize(defimg,opt);
									swapSlideProgress(container,opt);
									container.find('.tp-loader').animate({opacity:0,duration:300});

									setTimeout(function() {
										container.find('.tp-loader').css({'display':'none'});

									},2200)
														});
						}
				limg.src=nextli.find('.defaultimg').data('lazyload');

			} else {
				if (nextli.data('loadeddone')==undefined) {
						var limg = new Image();
						limg.onload = function() {
									nextli.data('loadeddone',1);
									nextli.data('owidth',limg.width);
									nextli.data('oheight',limg.height);
									nextli.find('.slotholder').data('owidth',limg.width);
									nextli.find('.slotholder').data('oheight',limg.height);


									nextli.waitForImages(function() {
											setSize(defimg,opt);
											setBulPos(container,opt);
											setSize(defimg,opt);
											swapSlideProgress(container,opt);
										});
								}
						limg.src=nextli.find('.defaultimg').data('src');
				} else {
				   	swapSlideProgress(container,opt);
				 }
			}
		}

		/******************************
			-	SWAP SLIDE PROGRESS	-
		********************************/
		/*!SWAP SLIDE*/
		function swapSlideProgress(container,opt) {


	
			container.trigger('revolution.slide.onbeforeswap');

			opt.transition = 1;
			opt.videoplaying = false;
			//konsole.log("VideoPlay set to False due swapSlideProgress");

			try{
				var actli = container.find('>ul:first-child >li:eq('+opt.act+')');
			} catch(e) {
				var actli=container.find('>ul:first-child >li:eq(1)');
			}

			opt.lastslide=opt.act;

			var nextli = container.find('>ul:first-child >li:eq('+opt.next+')');
		

			var actsh = actli.find('.slotholder');
			var nextsh = nextli.find('.slotholder');
			actli.css({'visibility':'visible'});
			nextli.css({'visibility':'visible'});

			if (nextsh.data('kenburns')=="on")
				stopKenBurn(container,opt);


			if (opt.ie) {
				if (comingtransition=="boxfade") comingtransition = "boxslide";
				if (comingtransition=="slotfade-vertical") comingtransition = "slotzoom-vertical";
				if (comingtransition=="slotfade-horizontal") comingtransition = "slotzoom-horizontal";
			}


			// IF DELAY HAS BEEN SET VIA THE SLIDE, WE TAKE THE NEW VALUE, OTHER WAY THE OLD ONE...
			if (nextli.data('delay')!=undefined) {
						opt.cd=0;
						opt.delay=nextli.data('delay');
			} else {
				opt.delay=opt.origcd;
			}

			// RESET POSITION AND FADES OF LI'S
			actli.css({'left':'0px','top':'0px'});
			nextli.css({'left':'0px','top':'0px'});


			// IF THERE IS AN OTHER FIRST SLIDE START HAS BEED SELECTED
			if (nextli.data('differentissplayed') =='prepared') {
				nextli.data('differentissplayed','done');
				nextli.data('transition',nextli.data('savedtransition'));
				nextli.data('slotamount',nextli.data('savedslotamount'));
				nextli.data('masterspeed',nextli.data('savedmasterspeed'));
			}


			if (nextli.data('fstransition') != undefined && nextli.data('differentissplayed') !="done") {
				nextli.data('savedtransition',nextli.data('transition'));
				nextli.data('savedslotamount',nextli.data('slotamount'));
				nextli.data('savedmasterspeed',nextli.data('masterspeed'));

				nextli.data('transition',nextli.data('fstransition'));
				nextli.data('slotamount',nextli.data('fsslotamount'));
				nextli.data('masterspeed',nextli.data('fsmasterspeed'));

				nextli.data('differentissplayed','prepared');
			}

			///////////////////////////////////////
			// TRANSITION CHOOSE - RANDOM EFFECTS//
			///////////////////////////////////////
			var nexttrans = 0;


			var transtext = nextli.data('transition').split(",");
			var curtransid = nextli.data('nexttransid');
			if (curtransid == undefined) {
			  curtransid=0;
			  nextli.data('nexttransid',curtransid);
			} else {
				curtransid=curtransid+1;
				if (curtransid==transtext.length) curtransid=0;
				nextli.data('nexttransid',curtransid);

			}



			var comingtransition = transtext[curtransid];
			if(jQuery(window).width()<768 && opt.forceFullWidth=="on"){
				comingtransition = "slideup";		
			}
			
			var specials = 0;

			/*if (opt.ffnn == undefined) opt.ffnn=0;
			comingtransition=opt.ffnn;
			opt.ffnn=opt.ffnn+1;
			if (opt.ffnn>46) opt.ffnn=0;*/


			/* Transition Name ,
			   Transition Code,
			   Transition Sub Code,
			   Max Slots,
			   MasterSpeed Delays,
			   Preparing Slots (box,slideh, slidev),
			   Call on nextsh (null = no, true/false for visibility first preparing),
			   Call on actsh (null = no, true/false for visibility first preparing),
			*/

			if (comingtransition=="slidehorizontal") {
						comingtransition = "slideleft"
					if (opt.leftarrowpressed==1)
						comingtransition = "slideright"
				}

			if (comingtransition=="slidevertical") {
						comingtransition = "slideup"
					if (opt.leftarrowpressed==1)
						comingtransition = "slidedown"
				}


			var transitionsArray = [ ['boxslide' , 0, 1, 10, 0,'box',false,null,0],
									 ['boxfade', 1, 0, 10, 0,'box',false,null,1],
									 ['slotslide-horizontal', 2, 0, 0, 200,'horizontal',true,false,2],
									 ['slotslide-vertical', 3, 0,0,200,'vertical',true,false,3],
									 ['curtain-1', 4, 3,0,0,'horizontal',true,true,4],
									 ['curtain-2', 5, 3,0,0,'horizontal',true,true,5],
									 ['curtain-3', 6, 3,25,0,'horizontal',true,true,6],
									 ['slotzoom-horizontal', 7, 0,0,400,'horizontal',true,true,7],
									 ['slotzoom-vertical', 8, 0,0,0,'vertical',true,true,8],
									 ['slotfade-horizontal', 9, 0,0,500,'horizontal',true,null,9],
									 ['slotfade-vertical', 10, 0,0 ,500,'vertical',true,null,10],
									 ['fade', 11, 0, 1 ,300,'horizontal',true,null,11],
									 ['slideleft', 12, 0,1,0,'horizontal',true,true,12],
									 ['slideup', 13, 0,1,0,'horizontal',true,true,13],
									 ['slidedown', 14, 0,1,0,'horizontal',true,true,14],
									 ['slideright', 15, 0,1,0,'horizontal',true,true,15],
									 ['papercut', 16, 0,0,600,'',null,null,16],
									 ['3dcurtain-horizontal', 17, 0,20,100,'vertical',false,true,17],
									 ['3dcurtain-vertical', 18, 0,10,100,'horizontal',false,true,18],
									 ['cubic', 19, 0,20,600,'horizontal',false,true,19],
									 ['cube',19,0,20,600,'horizontal',false,true,20],
									 ['flyin', 20, 0,4,600,'vertical',false,true,21],
									 ['turnoff', 21, 0,1,1600,'horizontal',false,true,22],
									 ['incube', 22, 0,20,600,'horizontal',false,true,23],
									 ['cubic-horizontal', 23, 0,20,500,'vertical',false,true,24],
									 ['cube-horizontal', 23, 0,20,500,'vertical',false,true,25],
									 ['incube-horizontal', 24, 0,20,500,'vertical',false,true,26],
									 ['turnoff-vertical', 25, 0,1,1600,'horizontal',false,true,27],
									 ['fadefromright', 12, 1,1,0,'horizontal',true,true,28],
									 ['fadefromleft', 15, 1,1,0,'horizontal',true,true,29],
									 ['fadefromtop', 14, 1,1,0,'horizontal',true,true,30],
									 ['fadefrombottom', 13, 1,1,0,'horizontal',true,true,31],
									 ['fadetoleftfadefromright', 12, 2,1,0,'horizontal',true,true,32],
									 ['fadetorightfadetoleft', 15, 2,1,0,'horizontal',true,true,33],
									 ['fadetobottomfadefromtop', 14, 2,1,0,'horizontal',true,true,34],
									 ['fadetotopfadefrombottom', 13, 2,1,0,'horizontal',true,true,35],
									 ['parallaxtoright', 12, 3,1,0,'horizontal',true,true,36],
									 ['parallaxtoleft', 15, 3,1,0,'horizontal',true,true,37],
									 ['parallaxtotop', 14, 3,1,0,'horizontal',true,true,38],
									 ['parallaxtobottom', 13, 3,1,0,'horizontal',true,true,39],
									 ['scaledownfromright', 12, 4,1,0,'horizontal',true,true,40],
									 ['scaledownfromleft', 15, 4,1,0,'horizontal',true,true,41],
									 ['scaledownfromtop', 14, 4,1,0,'horizontal',true,true,42],
									 ['scaledownfrombottom', 13, 4,1,0,'horizontal',true,true,43],
									 ['zoomout', 13, 5,1,0,'horizontal',true,true,44],
									 ['zoomin', 13, 6,1,0,'horizontal',true,true,45],
									 ['notransition',26,0,1,0,'horizontal',true,null,46]
								   ];


			var flatTransitions = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
			var premiumTransitions = [16,17,18,19,20,21,22,23,24,25,26,27]

			var nexttrans =0;
			var specials = 1;
			var STAindex = 0;
			var indexcounter =0;
			var STA = new Array;
			

			// RANDOM TRANSITIONS
			if (comingtransition == "random") {
				comingtransition = Math.round(Math.random()*transitionsArray.length-1);
				if (comingtransition>transitionsArray.length-1) comingtransition=transitionsArray.length-1;
			}

			// RANDOM FLAT TRANSITIONS
			if (comingtransition == "random-static") {
				comingtransition = Math.round(Math.random()*flatTransitions.length-1);
				if (comingtransition>flatTransitions.length-1) comingtransition=flatTransitions.length-1;
				comingtransition = flatTransitions[comingtransition];
			}

			// RANDOM PREMIUM TRANSITIONS
			if (comingtransition == "random-premium") {
				comingtransition = Math.round(Math.random()*premiumTransitions.length-1);
				if (comingtransition>premiumTransitions.length-1) comingtransition=premiumTransitions.length-1;
				comingtransition = premiumTransitions[comingtransition];
			}

			findTransition();

			// CHECK IF WE HAVE IE8 AND THAN FALL BACK ON FLAT TRANSITIONS
			if (isIE(8) && nexttrans>15 && nexttrans<28) {
				comingtransition = Math.round(Math.random()*flatTransitions.length-1);
				if (comingtransition>flatTransitions.length-1) comingtransition=flatTransitions.length-1;
				comingtransition = flatTransitions[comingtransition];
				indexcounter =0;
				findTransition();
			}

			function findTransition() {
				// FIND THE RIGHT TRANSITION PARAMETERS HERE
				jQuery.each(transitionsArray,function(inde,trans) {
					if (trans[0] == comingtransition || trans[8] == comingtransition) {
						nexttrans = trans[1];
						specials = trans[2];
						STAindex = indexcounter;
					}
					indexcounter = indexcounter+1;
				})
			}



		    var direction=-1;
			if (opt.leftarrowpressed==1 || opt.act>opt.next) direction=1;



			opt.leftarrowpressed=0;

			if (nexttrans>26) nexttrans = 26;
			if (nexttrans<0) nexttrans = 0;


			// DEFINE THE MASTERSPEED FOR THE SLIDE //
			var masterspeed=300;
			if (nextli.data('masterspeed')!=undefined && nextli.data('masterspeed')>99 && nextli.data('masterspeed')<4001)
				masterspeed = nextli.data('masterspeed');

			// PREPARED DEFAULT SETTINGS PER TRANSITION
			STA = transitionsArray[STAindex];





			/////////////////////////////////////////////
			// SET THE BULLETS SELECTED OR UNSELECTED  //
			/////////////////////////////////////////////


			container.parent().find(".bullet").each(function() {
				var bul = jQuery(this);
				bul.removeClass("selected");

				if (opt.navigationArrows=="withbullet" || opt.navigationArrows=="nexttobullets") {
					if (bul.index()-1 == opt.next) bul.addClass('selected');

				} else {

					if (bul.index() == opt.next)  bul.addClass('selected');

				}
			});



			//////////////////////////////////////////////////////////////////
			// 		SET THE NEXT CAPTION AND REMOVE THE LAST CAPTION		//
			//////////////////////////////////////////////////////////////////

					container.find('>li').each(function() {
						var li = jQuery(this);
						if (li.index!=opt.act && li.index!=opt.next) li.css({'z-index':16});
					});

					actli.css({'z-index':18});
					nextli.css({'z-index':20});
					nextli.css({'opacity':0});


			///////////////////////////
			//	ANIMATE THE CAPTIONS //
			///////////////////////////

			if (actli.index() != nextli.index() && opt.firststart!=1) {
				removeTheCaptions(actli,opt);

			}
		
			animateTheCaptions(nextli, opt);




			/////////////////////////////////////////////
			//	SET THE ACTUAL AMOUNT OF SLIDES !!     //
			//  SET A RANDOM AMOUNT OF SLOTS          //
			///////////////////////////////////////////
						if (nextli.data('slotamount')==undefined || nextli.data('slotamount')<1) {
							opt.slots=Math.round(Math.random()*12+4);
							if (comingtransition=="boxslide")
								opt.slots=Math.round(Math.random()*6+3);
							else
							if (comingtransition=="flyin")
								opt.slots=Math.round(Math.random()*4+1);
						 } else {
							opt.slots=nextli.data('slotamount');

						}

			/////////////////////////////////////////////
			//	SET THE ACTUAL AMOUNT OF SLIDES !!     //
			//  SET A RANDOM AMOUNT OF SLOTS          //
			///////////////////////////////////////////
						if (nextli.data('rotate')==undefined)
							opt.rotate = 0
						 else
							if (nextli.data('rotate')==999)
								opt.rotate=Math.round(Math.random()*360);
							 else
							    opt.rotate=nextli.data('rotate');
						if (!jQuery.support.transition  || opt.ie || opt.ie9) opt.rotate=0;



			//////////////////////////////
			//	FIRST START 			//
			//////////////////////////////

			if (opt.firststart==1) {
					actli.css({'opacity':0});
					opt.firststart=0;
			}


			// HERE COMES THE TRANSITION ENGINE

			// ADJUST MASTERSPEED
			masterspeed = masterspeed + STA[4];

			if ((nexttrans==4 || nexttrans==5 || nexttrans==6) && opt.slots<3 ) opt.slots=3;

			// ADJUST SLOTS
			if (STA[3] != 0) opt.slots = Math.min(opt.slots,STA[3]);
			if (nexttrans==9) opt.slots = opt.width/20;
			if (nexttrans==10) opt.slots = opt.height/20;




			// PREPAREONESLIDEBOX
			if (STA[5] == "box") {
				if (STA[7] !=null) prepareOneSlideBox(actsh,opt,STA[7]);
				if (STA[6] !=null) prepareOneSlideBox(nextsh,opt,STA[6]);
			} else

			if (STA[5] == "vertical" || STA[5] == "horizontal") {
				if (STA[7] !=null) prepareOneSlideSlot(actsh,opt,STA[7],STA[5]);
				if (STA[6] !=null) prepareOneSlideSlot(nextsh,opt,STA[6],STA[5]);
			}

			// SHOW FIRST LI
			if (nexttrans<12 || nexttrans>16)  nextli.css({'opacity':1});


			/////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION I.  //
			////////////////////////////////////
			if (nexttrans==0) {								// BOXSLIDE
						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT

						var maxz = Math.ceil(opt.height/opt.sloth);
						var curz = 0;
						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);
							curz=curz+1;
							if (curz==maxz) curz=0;

							TweenLite.fromTo(ss,(masterspeed)/600,
												{opacity:0,top:(0-opt.sloth),left:(0-opt.slotw),rotation:opt.rotate},
												{opacity:1,transformPerspective:600,top:0,left:0,scale:1,rotation:0,delay:((j)*15 + (curz)*30)/1500, ease:Power2.easeOut,onComplete:function() {
																if (j==(opt.slots*opt.slots)-1) {
																		letItFree(container,opt,nextsh,actsh,nextli,actli)
																	}

												}});
						});
			}
			/////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION I.  //
			////////////////////////////////////
			if (nexttrans==1) {


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT

						var maxtime;

						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);

							rand=Math.random()*masterspeed+300;
							rand2=Math.random()*500+200;

							if (rand+rand2>maxtime) maxtime = rand2+rand2;


							TweenLite.fromTo(ss,rand/1000,
										{opacity:0,transformPerspective:600,rotation:opt.rotate},
										{opacity:1, ease:Power2.easeInOut,rotation:0,delay:rand2/1000})



						});

						setTimeout(function() {
											letItFree(container,opt,nextsh,actsh,nextli,actli)
								},masterspeed+300);

			}


			/////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION I.  //
			////////////////////////////////////
			if (nexttrans==2) {


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});

						// ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
						actsh.find('.slotslide').each(function() {
							var ss=jQuery(this);

									TweenLite.to(ss,masterspeed/1000,{left:opt.slotw, rotation:(0-opt.rotate),onComplete:function() {
															letItFree(container,opt,nextsh,actsh,nextli,actli)

									}});

						});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						nextsh.find('.slotslide').each(function() {
							var ss=jQuery(this);

								TweenLite.fromTo(ss,masterspeed/1000,
												{left:0-opt.slotw, rotation:opt.rotate,transformPerspective:600},
												{left:0, rotation:0,ease:Power2.easeOut,onComplete:function() {
															letItFree(container,opt,nextsh,actsh,nextli,actli)
														}
									});

						});
			}



			/////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION I.  //
			////////////////////////////////////
			if (nexttrans==3) {


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});

						// ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
						actsh.find('.slotslide').each(function() {
							var ss=jQuery(this);
									TweenLite.to(ss,masterspeed/1000,{top:opt.sloth,rotation:opt.rotate,transformPerspective:600,onComplete:function() {
															letItFree(container,opt,nextsh,actsh,nextli,actli)
									}});

						});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						nextsh.find('.slotslide').each(function() {
							var ss=jQuery(this);

								TweenLite.fromTo(ss,masterspeed/1000,
												{top:0-opt.sloth,rotation:opt.rotate,transformPerspective:600},
												{top:0,rotation:0,ease:Power2.easeOut,onComplete:function() {
													letItFree(container,opt,nextsh,actsh,nextli,actli)
								}});

						});
			}



			/////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION I.  //
			////////////////////////////////////
			if (nexttrans==4 || nexttrans==5) {

						//SET DEFAULT IMG UNVISIBLE




						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);



						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						var cspeed = (masterspeed)/1000;
						var ticker = cspeed;



						actsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this);
							var del = (i*cspeed)/opt.slots;
							if (nexttrans==5) del = ((opt.slots-i-1)*cspeed)/(opt.slots)/1.5;
							TweenLite.to(ss,cspeed*3,{transformPerspective:600,top:0+opt.height,opacity:0.5,rotation:opt.rotate,ease:Power2.easeInOut,delay:del});
						});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						nextsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this);
							var del = (i*cspeed)/opt.slots;
							if (nexttrans==5) del = ((opt.slots-i-1)*cspeed)/(opt.slots)/1.5;
							TweenLite.fromTo(ss,cspeed*3,
											{top:(0-opt.height),opacity:0.5,rotation:opt.rotate,transformPerspective:600},
											{top:0,opacity:1,rotation:0,ease:Power2.easeInOut,delay:del,onComplete:function() {
													if (i==opt.slots-1) {
																letItFree(container,opt,nextsh,actsh,nextli,actli)
													}
							}});

						});


			}




			/////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION I.  //
			////////////////////////////////////
			if (nexttrans==6) {


						if (opt.slots<2) opt.slots=2;

						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);

						actsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this);

							if (i<opt.slots/2)
								var tempo = (i+2)*60;
							else
								var tempo = (2+opt.slots-i)*60;

							TweenLite.to(ss,(masterspeed+tempo)/1000,{top:0+opt.height,opacity:1,rotation:opt.rotate,transformPerspective:600,ease:Power2.easeInOut});


						});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						nextsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this);

							if (i<opt.slots/2)
								var tempo = (i+2)*60;
							else
								var tempo = (2+opt.slots-i)*60;

									TweenLite.fromTo(ss,(masterspeed+tempo)/1000,
													{top:(0-opt.height),opacity:1,rotation:opt.rotate,transformPerspective:600},
													{top:(0),opacity:1,rotation:0,ease:Power2.easeInOut,onComplete:function() {
															if (i==Math.round(opt.slots/2)) {
																letItFree(container,opt,nextsh,actsh,nextli,actli)
															}
									}});




						});
			}


			////////////////////////////////////
			// THE SLOTSZOOM - TRANSITION II. //
			////////////////////////////////////
			if (nexttrans==7) {

						masterspeed = masterspeed *2;

						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);
						// ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
						actsh.find('.slotslide').each(function() {
							var ss=jQuery(this).find('div');
							TweenLite.to(ss,masterspeed/1000,{
									left:(0-opt.slotw/2)+'px',
									top:(0-opt.height/2)+'px',
									width:(opt.slotw*2)+"px",
									height:(opt.height*2)+"px",
									opacity:0,
									rotation:opt.rotate,
									transformPerspective:600,
									ease:Power2.easeOut});

						});

						//////////////////////////////////////////////////////////////
						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT //
						///////////////////////////////////////////////////////////////
						nextsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this).find('div');

							TweenLite.fromTo(ss,masterspeed/1000,
										{left:0,top:0,opacity:0,transformPerspective:600},
										{left:(0-i*opt.slotw)+'px',
										 ease:Power2.easeOut,
									     top:(0)+'px',
									     width:opt.width,
									     height:opt.height,
										 opacity:1,rotation:0,
										 delay:0.1,
										 onComplete:function() {
												letItFree(container,opt,nextsh,actsh,nextli,actli)
										 }
										});
						});
			}




			////////////////////////////////////
			// THE SLOTSZOOM - TRANSITION II. //
			////////////////////////////////////
			if (nexttrans==8) {

						masterspeed = masterspeed * 3;

						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});


						// ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
						actsh.find('.slotslide').each(function() {
							var ss=jQuery(this).find('div');

									TweenLite.to(ss,masterspeed/1000,
												  {left:(0-opt.width/2)+'px',
												   top:(0-opt.sloth/2)+'px',
												   width:(opt.width*2)+"px",
												   height:(opt.sloth*2)+"px",
												   transformPerspective:600,
												   opacity:0,rotation:opt.rotate

													});

						});


						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT //
						///////////////////////////////////////////////////////////////
						nextsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this).find('div');

									TweenLite.fromTo(ss,masterspeed/1000,
												  {left:0, top:0,opacity:0,transformPerspective:600},
												  {'left':(0)+'px',
												   'top':(0-i*opt.sloth)+'px',
												   'width':(nextsh.find('.defaultimg').data('neww'))+"px",
												   'height':(nextsh.find('.defaultimg').data('newh'))+"px",
												   opacity:1,rotation:0,
												   onComplete:function() {
															letItFree(container,opt,nextsh,actsh,nextli,actli)
													}});

						});
			}


			////////////////////////////////////////
			// THE SLOTSFADE - TRANSITION III.   //
			//////////////////////////////////////
			if (nexttrans==9 || nexttrans==10) {


						nextsh.find('.defaultimg').css({'opacity':0});

						var ssamount=0;
						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						nextsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this);
							ssamount++;
							TweenLite.fromTo(ss,masterspeed/1000,{opacity:0,transformPerspective:600,left:0,top:0},{opacity:1,ease:Power2.easeInOut,delay:(i*4)/1000});

						});

						//nextsh.find('.defaultimg').transition({'opacity':1},(masterspeed+(ssamount*4)));

						setTimeout(function() {
									letItFree(container,opt,nextsh,actsh,nextli,actli)
							},(masterspeed+(ssamount*4)));
			}


			///////////////////////////
			// SIMPLE FADE ANIMATION //
			///////////////////////////

			if (nexttrans==11 || nexttrans==26) {


						nextsh.find('.defaultimg').css({'opacity':0,'position':'relative'});

						var ssamount=0;
						if (nexttrans==26) masterspeed=0;

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						nextsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this);
							TweenLite.fromTo(ss,masterspeed/1000,{opacity:0},{opacity:1,ease:Power2.easeInOut});
						});

						setTimeout(function() {
									letItFree(container,opt,nextsh,actsh,nextli,actli)
							},masterspeed+15);
			}






			if (nexttrans==12 || nexttrans==13 || nexttrans==14 || nexttrans==15) {

						//masterspeed = masterspeed * 3;


						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);
						nextsh.find('.defaultimg').css({'opacity':0});

					//	kill();

						var oow = opt.width;
						var ooh = opt.height;


						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						var ssn=nextsh.find('.slotslide')

						if (opt.fullWidth=="on" || opt.fullSreen=="on") {
							oow=ssn.width();
							ooh=ssn.height();
						}
						var twx = 0;
						var twy = 0;

						if (nexttrans==12)
							twx = oow;
						else
						if (nexttrans==15)
							twx = 0-oow;
						else
						if (nexttrans==13)
							twy = ooh;
						else
						if (nexttrans==14)
							twy = 0-ooh;

						// SPECIALS FOR EXTENDED ANIMATIONS
						var op = 1;
						var scal = 1;
						var fromscale = 1;
						var easeitout = Power2.easeInOut;
						var easeitin = Power2.easeInOut;
						var speedy = masterspeed/1000;
						var speedy2 = speedy;

						// DEPENDING ON EXTENDED SPECIALS, DIFFERENT SCALE AND OPACITY FUNCTIONS NEED TO BE ADDED
						if (specials == 1) op = 0;
						if (specials == 2) op = 0;
						if (specials == 3) {
								easeitout = Power2.easeInOut;
								easeitin = Power1.easeInOut;
								actli.css({'position':'absolute','z-index':20});
								nextli.css({'position':'absolute','z-index':15});
								speedy = masterspeed / 1200;
						}

						if (specials==4 || specials==5)
							scal=0.6;
						if (specials==6 )
							scal=1.4;


						if (specials==5 || specials==6) {
						    fromscale=1.4;
						    op=0;
						    oow=0;
						    ooh=0;twx=0;twy=0;
						 }
						if (specials==6) fromscale=0.6;



						TweenLite.fromTo(ssn,speedy,
										{left:twx, top:twy, scale:fromscale, opacity:op,rotation:opt.rotate},
										{opacity:1,rotation:0,left:0,top:0,scale:1,ease:easeitin,onComplete:function() {
														letItFree(container,opt,nextsh,actsh,nextli,actli);
														actli.css({'position':'absolute','z-index':18});
														nextli.css({'position':'absolute','z-index':20});
												}

										});

						var ssa=actsh.find('.slotslide');

						if (specials==4 || specials==5) {
							oow = 0; ooh=0;
						}

						if (specials!=1) {
								if (nexttrans==12)
									TweenLite.to(ssa,speedy2,{'left':(0-oow)+'px',scale:scal,opacity:op,rotation:opt.rotate,ease:easeitout});
								else
								if (nexttrans==15)
									TweenLite.to(ssa,speedy2,{'left':(oow)+'px',scale:scal,opacity:op,rotation:opt.rotate,ease:easeitout});
								else
								if (nexttrans==13)
									TweenLite.to(ssa,speedy2,{'top':(0-ooh)+'px',scale:scal,opacity:op,rotation:opt.rotate,ease:easeitout});
								else
								if (nexttrans==14)
									TweenLite.to(ssa,speedy2,{'top':(ooh)+'px',scale:scal,opacity:op,rotation:opt.rotate,ease:easeitout});
						}
						nextli.css({'opacity':1});

			}


			//////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XVI.  //
			//////////////////////////////////////
			if (nexttrans==16) {						// PAPERCUT



					actli.css({'position':'absolute','z-index':20});
					nextli.css({'position':'absolute','z-index':15});


					// PREPARE THE CUTS
					actli.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>');

					actli.find('.tp-half-one').clone(true).appendTo(actli).addClass("tp-half-two");
					actli.find('.tp-half-two').removeClass('tp-half-one');

					var oow = opt.width;
					var ooh = opt.height;
					if (opt.autoHeight=="on")
						ooh = container.height();


					actli.find('.tp-half-one .defaultimg').wrap('<div class="tp-papercut" style="width:'+oow+'px;height:'+ooh+'px;"></div>')

					actli.find('.tp-half-two .defaultimg').wrap('<div class="tp-papercut" style="width:'+oow+'px;height:'+ooh+'px;"></div>')

					actli.find('.tp-half-two .defaultimg').css({position:'absolute',top:'-50%'});

					actli.find('.tp-half-two .tp-caption').wrapAll('<div style="position:absolute;top:-50%;left:0px"></div>');

					TweenLite.set(actli.find('.tp-half-two'),
					                 {width:oow,height:ooh,overflow:'hidden',zIndex:15,position:'absolute',top:ooh/2,left:'0px',transformPerspective:600,transformOrigin:"center bottom"});

					TweenLite.set(actli.find('.tp-half-one'),
					                 {width:oow,height:ooh/2,overflow:'visible',zIndex:10,position:'absolute',top:'0px',left:'0px',transformPerspective:600,transformOrigin:"center top"});



					// ANIMATE THE CUTS
					var img=actli.find('.defaultimg');


					var ro1=Math.round(Math.random()*20-10);
					var ro2=Math.round(Math.random()*20-10);
					var ro3=Math.round(Math.random()*20-10);
					var xof = Math.random()*0.4-0.2;
					var yof = Math.random()*0.4-0.2;
					var sc1=Math.random()*1+1;
					var sc2=Math.random()*1+1;


					TweenLite.fromTo(actli.find('.tp-half-one'),masterspeed/1000,
					                 {width:oow,height:ooh/2,position:'absolute',top:'0px',left:'0px',transformPerspective:600,transformOrigin:"center top"},
					                 {scale:sc1,rotation:ro1,y:(0-ooh-ooh/4),ease:Power2.easeInOut});
					setTimeout(function() {
						TweenLite.set(actli.find('.tp-half-one'),{overflow:'hidden'});
					},50);
					TweenLite.fromTo(actli.find('.tp-half-one'),masterspeed/2000,{opacity:1,transformPerspective:600,transformOrigin:"center center"},{opacity:0,delay:masterspeed/2000});

					TweenLite.fromTo(actli.find('.tp-half-two'),masterspeed/1000,
					                 {width:oow,height:ooh,overflow:'hidden',position:'absolute',top:ooh/2,left:'0px',transformPerspective:600,transformOrigin:"center bottom"},
					                 {scale:sc2,rotation:ro2,y:ooh+ooh/4,ease:Power2.easeInOut});

					TweenLite.fromTo(actli.find('.tp-half-two'),masterspeed/2000,{opacity:1,transformPerspective:600,transformOrigin:"center center"},{opacity:0,delay:masterspeed/2000});

					if (actli.html()!=null)
						TweenLite.fromTo(nextli,(masterspeed-200)/1000,{opacity:0,scale:0.8,x:opt.width*xof, y:ooh*yof,rotation:ro3,transformPerspective:600,transformOrigin:"center center"},{rotation:0,scale:1,x:0,y:0,opacity:1,ease:Power2.easeInOut});

					nextsh.find('.defaultimg').css({'opacity':1});
					setTimeout(function() {


								// CLEAN UP BEFORE WE START
								actli.css({'position':'absolute','z-index':18});
								nextli.css({'position':'absolute','z-index':20});
								nextsh.find('.defaultimg').css({'opacity':1});
								actsh.find('.defaultimg').css({'opacity':0});
								if (actli.find('.tp-half-one').length>0)  {
									actli.find('.tp-half-one .defaultimg').unwrap();
									actli.find('.tp-half-one .slotholder').unwrap();

								}
								actli.find('.tp-half-two').remove();
								opt.transition = 0;
								opt.act = opt.next;

					},masterspeed);
					nextli.css({'opacity':1});

			}

			////////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XVII.  //
			///////////////////////////////////////
			if (nexttrans==17) {								// 3D CURTAIN HORIZONTAL


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT


						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);

							TweenLite.fromTo(ss,(masterspeed)/800,
											{opacity:0,rotationY:0,scale:0.9,rotationX:-110,transformPerspective:600,transformOrigin:"center center"},
											{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,rotationY:0,ease:Power3.easeOut,delay:j*0.06,onComplete:function() {
													if (j==opt.slots-1) letItFree(container,opt,nextsh,actsh,nextli,actli)
											}});

						});
			}



			////////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XVIII.  //
			///////////////////////////////////////
			if (nexttrans==18) {								// 3D CURTAIN VERTICAL


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});


						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT

						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);

							TweenLite.fromTo(ss,(masterspeed)/500,
											{opacity:0,rotationY:310,scale:0.9,rotationX:10,transformPerspective:600,transformOrigin:"center center"},
											{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,rotationY:0,ease:Power3.easeOut,delay:j*0.06,onComplete:function() {
													if (j==opt.slots-1)
														letItFree(container,opt,nextsh,actsh,nextli,actli)
											}});

						});



			}


			////////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XIX.  //
			///////////////////////////////////////


			if (nexttrans==19 || nexttrans==22) {								// IN CUBE


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);
						var chix=nextli.css('z-index');
						var chix2=actli.css('z-index');

						var rot = 90;
						var op = 1;
						if (direction==1) rot = -90;

						if (nexttrans==19) {
							var torig = "center center -"+opt.height/2;
							op=0;

						} else {
							var torig = "center center "+opt.height/2;

						}

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT

						//if (nexttrans==129) {
							TweenLite.fromTo(nextsh,masterspeed/2000,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,ease:Power1.easeInOut,z:-40});
							TweenLite.fromTo(nextsh,masterspeed/2000,{transformPerspective:600,z:-40,rotationY:1},{rotationY:0,z:0,ease:Power1.easeInOut,x:0,delay:3*(masterspeed/4000)});
							TweenLite.fromTo(actsh,masterspeed/2000,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,x:0,ease:Power1.easeInOut,z:-40});
							TweenLite.fromTo(actsh,masterspeed/2000,{transformPerspective:600,z:-40,x:0,rotationY:1},{rotationY:0,z:0,x:0,ease:Power1.easeInOut,delay:3*(masterspeed/4000)});
						//}

						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);

							TweenLite.fromTo(ss,masterspeed/1000,
											{left:0,rotationY:opt.rotate,opacity:op,top:0,scale:0.8,transformPerspective:600,transformOrigin:torig,rotationX:rot},
											{left:0,rotationY:0,opacity:1,top:0,z:0, scale:1,rotationX:0, delay:(j*50)/1000,ease:Power2.easeInOut,onComplete: function() {

																	if (j==opt.slots-1)
																		letItFree(container,opt,nextsh,actsh,nextli,actli)
															}
											});
							TweenLite.to(ss,0.1,{opacity:1,delay:(j*50)/1000+masterspeed/3000});

						});

						actsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);
							var rot = -90;
							if (direction==1) rot = 90;

							TweenLite.fromTo(ss,masterspeed/1000,
											{opacity:1,rotationY:0,top:0,z:0,scale:1,transformPerspective:600,transformOrigin:torig, rotationX:0},
											{opacity:1,rotationY:opt.rotate,top:0, scale:0.8,rotationX:rot, delay:(j*50)/1000,ease:Power2.easeInOut,onComplete: function() {

																	if (j==opt.slots-1)
																		letItFree(container,opt,nextsh,actsh,nextli,actli)
															}
											});
							TweenLite.to(ss,0.1,{opacity:0,delay:(j*50)/1000+(masterspeed/1000 - (masterspeed/10000))});


						});
			}




			////////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XX.  //
			///////////////////////////////////////
			if (nexttrans==20 ) {								// FLYIN


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);
						var chix=nextli.css('z-index');
						var chix2=actli.css('z-index');


						if (direction==1) {
						   var ofx = -opt.width
						   var rot  =70;
						   var torig = "left center -"+opt.height/2;
						} else {
							var ofx = opt.width;
							var rot = -70;
							var torig = "right center -"+opt.height/2;
						}


						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);
							//ss.css({overflow:'visible'});
							TweenLite.fromTo(ss,masterspeed/1500,
											{left:ofx,rotationX:40,z:-600, opacity:op,top:0,transformPerspective:600,transformOrigin:torig,rotationY:rot},
											{left:0, delay:(j*50)/1000,ease:Power2.easeInOut});

							TweenLite.fromTo(ss,masterspeed/1000,
											{rotationX:40,z:-600, opacity:op,top:0,scale:1,transformPerspective:600,transformOrigin:torig,rotationY:rot},
											{rotationX:0,opacity:1,top:0,z:0, scale:1,rotationY:0, delay:(j*50)/1000,ease:Power2.easeInOut,onComplete: function() {

																	if (j==opt.slots-1)
																		letItFree(container,opt,nextsh,actsh,nextli,actli)
															}
											});
							TweenLite.to(ss,0.1,{opacity:1,delay:(j*50)/1000+masterspeed/2000});

						});



						actsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);
							//ss.css({overflow:'visible'});
							if (direction!=1) {
							   var ofx = -opt.width
							   var rot  =70;
							   var torig = "left center -"+opt.height/2;
							} else {
								var ofx = opt.width;
								var rot = -70;
								var torig = "right center -"+opt.height/2;
							}
							TweenLite.fromTo(ss,masterspeed/1000,
											{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0, transformPerspective:600,transformOrigin:torig, rotationY:0},
											{opacity:1,rotationX:40,top:0, z:-600, left:ofx, scale:0.8,rotationY:rot, delay:(j*50)/1000,ease:Power2.easeInOut,onComplete: function() {

																if (j==opt.slots-1)
																	letItFree(container,opt,nextsh,actsh,nextli,actli)																	}
											});
							TweenLite.to(ss,0.1,{opacity:0,delay:(j*50)/1000+(masterspeed/1000 - (masterspeed/10000))});


						});
			}






			////////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XX.  //
			///////////////////////////////////////
			if (nexttrans==21 || nexttrans==25) {								// TURNOFF


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);
						var chix=nextli.css('z-index');
						var chix2=actli.css('z-index');


						if (direction==1) {
						   var ofx = -opt.width
						   var rot  =110;

						   if (nexttrans==25) {
						   	 var torig = "center top 0"
						   	 rot2 = -rot;
						   	 rot = opt.rotate;
						   } else {
						     var torig = "left center 0";
						     rot2 = opt.rotate;
						   }

						} else {
							var ofx = opt.width;
							var rot = -110;
							if (nexttrans==25) {
						   	 var torig = "center bottom 0"
						   	 rot2 = -rot;
						   	 rot = opt.rotate;
						   } else {
						     var torig = "right center 0";
						     rot2 = opt.rotate;
						   }
						}


						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);


							TweenLite.fromTo(ss,masterspeed/1500,
											{left:0,rotationX:rot2,z:0, opacity:0,top:0,scale:1,transformPerspective:600,transformOrigin:torig,rotationY:rot},
											{left:0,rotationX:0,top:0,z:0, scale:1,rotationY:0, delay:(j*100)/1000+masterspeed/10000,ease:Power2.easeInOut,onComplete: function() {

																	if (j==opt.slots-1)
																		letItFree(container,opt,nextsh,actsh,nextli,actli)
															}
											});
							TweenLite.to(ss,0.3,{opacity:1,delay:(j*100)/1000+(masterspeed*0.2)/2000+masterspeed/10000});

						});



						if (direction!=1) {
						   var ofx = -opt.width
						   var rot  = 90;

						   if (nexttrans==25) {
						   	 var torig = "center top 0"
						   	 rot2 = -rot;
						   	 rot = opt.rotate;
						   } else {
						     var torig = "left center 0";
						     rot2 = opt.rotate;
						   }

						} else {
							var ofx = opt.width;
							var rot = -90;
							if (nexttrans==25) {
						   	 var torig = "center bottom 0"
						   	 rot2 = -rot;
						   	 rot = opt.rotate;
						   } else {
						     var torig = "right center 0";
						     rot2 = opt.rotate;
						   }
						}

						actsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);


							TweenLite.fromTo(ss,masterspeed/3000,
											{left:0,rotationX:0,z:0, opacity:1,top:0,scale:1,transformPerspective:600,transformOrigin:torig,rotationY:0},
											{left:0,rotationX:rot2,top:0,z:0, scale:1,rotationY:rot, delay:(j*100)/1000,ease:Power1.easeInOut});
							TweenLite.to(ss,0.2,{opacity:0,delay:(j*50)/1000+(masterspeed/3000 - (masterspeed/10000))});


						});
			}



			////////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XX.  //
			///////////////////////////////////////
			if (nexttrans==23 || nexttrans == 24) {								// cube-horizontal - inboxhorizontal


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);
						var chix=nextli.css('z-index');
						var chix2=actli.css('z-index');

						var rot = -90;
						if (direction==1)
							  rot = 90;

						var op = 1;


						if (nexttrans==23) {
							var torig = "center center -"+opt.width/2;
							op=0;

						} else {
							var torig = "center center "+opt.width/2;

						}


						var opx=0;

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						TweenLite.fromTo(nextsh,masterspeed/2000,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,ease:Power1.easeInOut,z:-90});
						TweenLite.fromTo(nextsh,masterspeed/2000,{transformPerspective:600,z:-90,rotationY:1},{rotationY:0,z:0,ease:Power1.easeInOut,x:0,delay:3*(masterspeed/4000)});
						TweenLite.fromTo(actsh,masterspeed/2000,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,x:0,ease:Power1.easeInOut,z:-90});
						TweenLite.fromTo(actsh,masterspeed/2000,{transformPerspective:600,z:-90,x:0,rotationY:1},{rotationY:0,z:0,x:0,ease:Power1.easeInOut,delay:3*(masterspeed/4000)});

						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);

							TweenLite.fromTo(ss,masterspeed/1000,
											{left:opx,rotationX:opt.rotate,opacity:op,top:0,scale:1,transformPerspective:600,transformOrigin:torig,rotationY:rot},
											{left:0,rotationX:0,opacity:1,top:0,z:0, scale:1,rotationY:0, delay:(j*50)/1000,ease:Power2.easeInOut,onComplete: function() {

																	if (j==opt.slots-1)
																		letItFree(container,opt,nextsh,actsh,nextli,actli);

															}
											});
							TweenLite.to(ss,0.1,{opacity:1,delay:(j*50)/1000+masterspeed/3000});

						});

						rot = 90;
						if (direction==1)
							  rot = -90;




						actsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);
							TweenLite.fromTo(ss,masterspeed/1000,
											{left:0,opacity:1,rotationX:0,top:0,z:0,scale:1,transformPerspective:600,transformOrigin:torig, rotationY:0},
											{left:opx,opacity:1,rotationX:opt.rotate,top:0, scale:1,rotationY:rot, delay:(j*50)/1000,ease:Power2.easeInOut,onComplete: function() {

																	if (j==opt.slots-1)
																		letItFree(container,opt,nextsh,actsh,nextli,actli)

															}
											});
							TweenLite.to(ss,0.1,{opacity:0,delay:(j*50)/1000+(masterspeed/1000 - (masterspeed/10000))});


						});
			}


			var data={};
			data.slideIndex=opt.next+1;
			container.trigger('revolution.slide.onchange',data);
			setTimeout(function() { container.trigger('revolution.slide.onafterswap'); },masterspeed);
			container.trigger('revolution.slide.onvideostop');
		}


		/******************************
			-	STOP KEN BURN	-
		********************************/
		function stopKenBurn(container,opt) {
			try{
				var actli = container.find('>ul:first-child >li:eq('+opt.act+')');
			} catch(e) {
				var actli=container.find('>ul:first-child >li:eq(1)');
			}

			opt.lastslide=opt.act;

			var nextli = container.find('>ul:first-child >li:eq('+opt.next+')');


			var actsh = actli.find('.slotholder');
			var nextsh = nextli.find('.slotholder');

			nextsh.find('.defaultimg').each(function() {
				var defimg = jQuery(this);
				if (defimg.data('kenburn')!=undefined)
					defimg.data('kenburn').restart();
				TweenLite.killTweensOf(defimg,false);
				TweenLite.set(defimg,{scale:1,rotationZ:0});

				defimg.data('bgposition',nextsh.data('bgposition'));
				defimg.data('currotate',nextsh.data('rotationstart'));
				defimg.data('curscale',nextsh.data('bgfit'));

				});
			/*actsh.find('.defaultimg').each(function() {
				var defimg = jQuery(this);
				TweenLite.killTweensOf(defimg,false);
				TweenLite.set(defimg,{scale:1,rotationZ:0});
				if (defimg.data('oldbgposition')!=undefined)
					defimg.data('bgposition',defimg.data('oldbgposition'));

				defimg.data('currotate',nextsh.data('rotationstart'));
				defimg.data('curscale',nextsh.data('zoomstart')/100);

				});*/

		}


		/******************************
			-	startKenBurn	-
		********************************/
		function startKenBurn(container,opt) {

			try{
				var actli = container.find('>ul:first-child >li:eq('+opt.act+')');
			} catch(e) {
				var actli=container.find('>ul:first-child >li:eq(1)');
			}

			opt.lastslide=opt.act;

			var nextli = container.find('>ul:first-child >li:eq('+opt.next+')');


			var actsh = actli.find('.slotholder');
			var nextsh = nextli.find('.slotholder');

			var
				bgps = nextsh.data('bgposition'),
				bgpe = nextsh.data('bgpositionend'),
				zos = nextsh.data('zoomstart')/100,
				zoe = nextsh.data('zoomend')/100,
				ros = nextsh.data('rotationstart'),
				roe = nextsh.data('rotationend'),
				bgfs = nextsh.data('bgfit'),
				bgfe = nextsh.data('bgfitend'),
				easeme = nextsh.data('easeme'),
				dur = nextsh.data('duration')/1000;

				if (bgfs==undefined) bgfs=100;
				if (bgfe==undefined) bgfe=100;

				bgfs = calculateKenBurnScales(bgfs,nextsh,opt);
				bgfe = calculateKenBurnScales(bgfe,nextsh,opt);
				bgfe = bgfs;

				if (zos==undefined) zos=1;
				if (zoe==undefined) zoe=1;
				if (ros==undefined) ros=0;
				if (roe==undefined) roe=0;

				if (zos<1) zos=1;
				if (zoe<1) zoe=1;

				nextsh.find('.defaultimg').each(function() {
					var defimg = jQuery(this);
					defimg.data(
						'kenburn',
						TweenLite.fromTo(
								defimg,
								dur,
								{
									transformPerspective:1200, 
									backgroundSize:bgfs, 
									z:0,
									backgroundPosition:bgps,
									//rotationZ:ros,
									scale:zos,
								},
								{
									yoyo:2,
									//rotationZ:roe,
									ease:easeme,
									backgroundSize:bgfe,
									backgroundPosition:bgps,
									scale:zoe,
									onUpdate:function() {
										defimg.data('bgposition',defimg.css('backgroundPosition'));
										if (!isIE(8)) defimg.data('currotate',getRotationDegrees(defimg));
										if (!isIE(8)) defimg.data('curscale',defimg.css('backgroundSize'));
									}
								}
						)
					);
			})
		}


		/***********************************************
			-	KEN BURN BACKGROUND FIT CALCULATOR	-
		***********************************************/
		function calculateKenBurnScales(proc,sloth,opt) {
			var ow = sloth.data('owidth');
			var oh = sloth.data('oheight');

			var factor = (opt.container.width() /ow);
			var nheight = oh * factor;

			var hfactor = (nheight / opt.container.height())*proc;



			return (proc+"% "+hfactor+"%");
		}


		/******************************************************
			-	CALCULATE CURRENT SCALE AND ROTATION	-
		*******************************************************/

		function getMatrix(obj) {
		    var matrix = obj.css("-webkit-transform") ||
		                 obj.css("-moz-transform")    ||
		                 obj.css("-ms-transform")     ||
		                 obj.css("-o-transform")      ||
		                 obj.css("transform");
		    return matrix;
		};

		function parseMatrix(_str) {
			    return _str.replace(/^matrix(3d)?\((.*)\)$/,'$2').split(/, /);
			}

		function getScaleDegrees(obj) {
			    var matrix = parseMatrix(getMatrix(obj)),
			        scale = 1;

			    if(matrix[0] !== 'none') {
			        var a = matrix[0],
			            b = matrix[1],
			            d = 10;
			        scale = Math.round( Math.sqrt( a*a + b*b ) * d ) / d;
			    }

			    return scale;
			};

		function getRotationDegrees(obj) {
			    var matrix = obj.css("-webkit-transform") ||
			    obj.css("-moz-transform")    ||
			    obj.css("-ms-transform")     ||
			    obj.css("-o-transform")      ||
			    obj.css("transform");
			    if(matrix !== 'none') {
			        var values = matrix.split('(')[1].split(')')[0].split(',');
			        var a = values[0];
			        var b = values[1];
			        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
			    } else { var angle = 0; }
			    return (angle < 0) ? angle +=360 : angle;
			}

		/**************************************
			-	GIVE FREE THE TRANSITIOSN	-
		**************************************/
		function letItFree(container,opt,nextsh,actsh,nextli,actli) {
					removeSlots(container,opt);
					nextsh.find('.defaultimg').css({'opacity':1});
					if (nextli.index()!=actli.index()) actsh.find('.defaultimg').css({'opacity':0});
					opt.act=opt.next;
					moveSelectedThumb(container);
					if (nextsh.data('kenburns')=="on")
						startKenBurn(container,opt);
		}


				//////////////////////////////////////////
				// CHANG THE YOUTUBE PLAYER STATE HERE //
				////////////////////////////////////////
				 function onPlayerStateChange(event) {

					 var embedCode = event.target.getVideoEmbedCode();
					 var ytcont = jQuery('#'+embedCode.split('id="')[1].split('"')[0])
					 var container = ytcont.closest('.tp-simpleresponsive');
					 var player = ytcont.parent().data('player');

					if (event.data == YT.PlayerState.PLAYING) {

						var bt = container.find('.tp-bannertimer');
						var opt = bt.data('opt');
						bt.stop();

						if (ytcont.closest('.tp-caption').data('volume')=="mute")
							  player.mute();

						opt.videoplaying=true;
						//konsole.log("VideoPlay set to True due onPlayerStateChange PLAYING");
						opt.videostartednow=1;

					} else {

						var bt = container.find('.tp-bannertimer');
						var opt = bt.data('opt');

						if (event.data!=-1) {
							if (opt.conthover==0)
								bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false, easing:"linear"});
							opt.videoplaying=false;
							opt.videostoppednow=1;

						}

					}
					if (event.data==0 && opt.nextslideatend==true)
						opt.container.revnext();


				  }



				 ////////////////////////
				// VIMEO ADD EVENT /////
				////////////////////////
				function addEvent(element, eventName, callback) {

							if (element.addEventListener)  element.addEventListener(eventName, callback, false);
								else
							element.attachEvent(eventName, callback, false);
				}



				/////////////////////////////////////
				// EVENT HANDLING FOR VIMEO VIDEOS //
				/////////////////////////////////////

					function vimeoready_auto(player_id,autoplay) {

						var froogaloop = $f(player_id);
						var vimcont = jQuery('#'+player_id);
						var container = vimcont.closest('.tp-simpleresponsive');


						froogaloop.addEvent('ready', function(data) {
								if(autoplay) froogaloop.api('play');

								froogaloop.addEvent('play', function(data) {
									var bt = container.find('.tp-bannertimer');
									var opt = bt.data('opt');
									bt.stop();
									opt.videoplaying=true;
									if (vimcont.closest('.tp-caption').data('volume')=="mute")
									  froogaloop.api('setVolume',"0");
									//konsole.log("VideoPlay set to True due vimeoready_auto PLAYING");
								});

								froogaloop.addEvent('finish', function(data) {
										var bt = container.find('.tp-bannertimer');
										var opt = bt.data('opt');
										if (opt.conthover==0)
											bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false, easing:"linear"});
										opt.videoplaying=false;
									//konsole.log("VideoPlay set to False due vimeoready_auto FINISH");
										opt.videostartednow=1;
										if (opt.nextslideatend==true)
											opt.container.revnext();

								});

								froogaloop.addEvent('pause', function(data) {
										var bt = container.find('.tp-bannertimer');
										var opt = bt.data('opt');
										if (opt.conthover==0)
											bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false, easing:"linear"});
										opt.videoplaying=false;
									//konsole.log("VideoPlay set to False due vimeoready_auto PAUSE");
										opt.videostoppednow=1;
								});
						});
					}


					///////////////////////////////////////
					// EVENT HANDLING FOR VIDEO JS VIDEOS //
					////////////////////////////////////////
					function html5vidready(myPlayer,player_id) {

						if (player_id==undefined) player_id = jQuery(myPlayer["b"]).attr('id');
						var player_cont = jQuery('#'+player_id);
						var container = player_cont.closest('.tp-simpleresponsive');

						myPlayer.on("play",function() {

							if (player_cont.closest('.tp-caption').data('volume')=="mute")
								  myPlayer.volume(0);
							var bt = jQuery('body').find('.tp-bannertimer');
							var opt = bt.data('opt');
							bt.stop();
							try{
								opt.videoplaying=true;
							} catch(e) {}


							//konsole.log("VideoPlay set to True due html5vidready PLAYING");
						});

						myPlayer.on("pause",function() {
							    var bt = container.find('.tp-bannertimer');
								var opt = bt.data('opt');
								if (opt.conthover==0)
									bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false, easing:"linear"});
								opt.videoplaying=false;
								//konsole.log("VideoPlay set to False due html5vidready pause");
								opt.videostoppednow=1;
						});

						myPlayer.on("ended",function() {
								var bt = container.find('.tp-bannertimer');
								var opt = bt.data('opt');
								if (opt.conthover==0)
									bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false, easing:"linear"});
								opt.videoplaying=false;
								//konsole.log("VideoPlay set to False due html5vidready pause");
								opt.videostoppednow=1;
								if (opt.nextslideatend==true)
									opt.container.revnext();
						});


						myPlayer.on('loadedmetadata', function(data) {



								var videoWidth =0;
								var videoHeight=0;

								for(var prop in this) {
										try{
											if(this[prop].hasOwnProperty('videoWidth'))
												videoWidth = this[prop].videoWidth;

											if(this[prop].hasOwnProperty('videoHeight'))
												 videoHeight = this[prop].videoHeight;
										} catch(e) {}
									}


								var mediaAspect = videoWidth/videoHeight;




								if (player_cont.data('mediaAspect') == undefined) player_cont.data('mediaAspect',mediaAspect);
								if (player_cont.closest('.tp-caption').data('forcecover')==1)
									updateHTML5Size(player_cont,container);

						});

					}
				/////////////////////////////////////
				// RESIZE HTML5VIDEO FOR FULLSCREEN//
				/////////////////////////////////////
				function updateHTML5Size(pc,container) {
						var windowW = container.width();
						var windowH = container.height();
						var mediaAspect = pc.data('mediaAspect');

						var windowAspect = windowW/windowH;
						pc.parent().find('.vjs-poster').css({width:"100%",height:"100%"});
						if (windowAspect < mediaAspect) {
							// taller
								pc
									.width(windowH*mediaAspect)
									.height(windowH);
								pc
									.css('top',0)
									.css('left',-(windowH*mediaAspect-windowW)/2)
									.css('height',windowH);
								pc.find('.vjs-tech').css('width',windowH*mediaAspect);

						} else {
							// wider
								pc
									.width(windowW)
									.height(windowW/mediaAspect);
								pc
									.css('top',-(windowW/mediaAspect-windowH)/2)
									.css('left',0)
									.css('height',windowW/mediaAspect);
								pc.find('.vjs-tech').css('width','100%');

						}

					}
					
					
	


				////////////////////////
				// SHOW THE CAPTION  //
				///////////////////////
				function animateTheCaptions(nextli, opt,recalled) {
						
						var offsetx=0;
						var offsety=0;

						nextli.find('.tp-caption').each(function(i) {
								

								offsetx = opt.width/2 - (opt.startwidth*opt.bw)/2;



								var xbw = opt.bw;
								var xbh = opt.bh;


								if (opt.fullScreen=="on")
									  offsety = opt.height/2 - (opt.startheight*opt.bh)/2;

								if (opt.autoHeight=="on")
									  offsety = opt.container.height()/2 - (opt.startheight*opt.bh)/2;;

								if (offsety<0) offsety=0;

								var nextcaption=jQuery(this);//nextli.find('.tp-caption:eq('+i+')');
								

								var handlecaption=0;

								// HIDE CAPTION IF RESOLUTION IS TOO LOW
								if (opt.width<opt.hideCaptionAtLimit && nextcaption.data('captionhidden')=="on") {
									nextcaption.addClass("tp-hidden-caption")
									handlecaption=1;
								} else {
									if (opt.width<opt.hideAllCaptionAtLimit || opt.width<opt.hideAllCaptionAtLilmit)	{
										nextcaption.addClass("tp-hidden-caption")
										handlecaption=1;
									} else {
										nextcaption.removeClass("tp-hidden-caption")
									}
								}

								if (handlecaption==0) {

									// ADD A CLICK LISTENER TO THE CAPTION
									if (nextcaption.data('linktoslide')!=undefined && !nextcaption.hasClass("hasclicklistener")) {
										nextcaption.addClass("hasclicklistener")
										nextcaption.css({'cursor':'pointer'});
										if (nextcaption.data('linktoslide')!="no") {
											nextcaption.click(function() {
												var nextcaption=jQuery(this);
												var dir = nextcaption.data('linktoslide');
												if (dir!="next" && dir!="prev") {
													opt.container.data('showus',dir);
													opt.container.parent().find('.tp-rightarrow').click();
												} else
													if (dir=="next")
														opt.container.parent().find('.tp-rightarrow').click();
												else
													if (dir=="prev")
														opt.container.parent().find('.tp-leftarrow').click();
											});
										}
									}// END OF CLICK LISTENER


									if (offsetx<0) offsetx=0;


									// YOUTUBE AND VIMEO LISTENRES INITIALISATION

									var frameID = "iframe"+Math.round(Math.random()*1000+1);

									if (nextcaption.find('iframe').length>0 || nextcaption.find('video').length>0) {

										if (nextcaption.data('autoplayonlyfirsttime') == true || nextcaption.data('autoplayonlyfirsttime')=="true" ) {
											nextcaption.data('autoplay',true);
										}

										nextcaption.find('iframe').each(function() {
												var ifr=jQuery(this);
												

												// START YOUTUBE HANDLING
												opt.nextslideatend = nextcaption.data('nextslideatend');
												if (nextcaption.data('thumbimage')!=undefined && nextcaption.data('thumbimage').length>2 && nextcaption.data('autoplay')!=true && !recalled) {
													nextcaption.find('.tp-thumb-image').remove();
													nextcaption.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url('+nextcaption.data('thumbimage')+'); background-size:cover"></div>');
												}

													if (ifr.attr('src').toLowerCase().indexOf('youtube')>=0) {

														 if (!ifr.hasClass("HasListener")) {
															try {
																ifr.attr('id',frameID);

																var player;
																if (nextcaption.data('autoplay')==true)
																	player = new YT.Player(frameID, {
																		events: {
																			"onStateChange": onPlayerStateChange,
																			'onReady': function(event) {event.target.playVideo()}
																		}
																	});
																else
																	player = new YT.Player(frameID, {
																		events: {
																			"onStateChange": onPlayerStateChange
																		}
																	});
																ifr.addClass("HasListener");

																nextcaption.data('player',player);

															} catch(e) {}
													 } else {
														if (nextcaption.data('autoplay')==true) {
																var player=nextcaption.data('player');
																nextcaption.data('timerplay',setTimeout(function() {
																	if (nextcaption.data('forcerewind')=="on")
																		player.seekTo(0);
																	player.playVideo();
																},nextcaption.data('start')));
														}
													 } // END YOUTUBE HANDLING

													 // PLAY VIDEO IF THUMBNAIL HAS BEEN CLICKED
															 nextcaption.find('.tp-thumb-image').click(function() {
																 TweenLite.to(jQuery(this),0.3,{opacity:0,ease:Power3.easeInOut,onComplete: function() {
																	 nextcaption.find('.tp-thumb-image').remove();
																	}
																 })
																 var player=nextcaption.data('player');
																 player.playVideo();
															 })
												} else {
													// START VIMEO HANDLING
													if (ifr.attr('src').toLowerCase().indexOf('vimeo')>=0) {

														   if (!ifr.hasClass("HasListener")) {
																ifr.addClass("HasListener");
																ifr.attr('id',frameID);
																var isrc = ifr.attr('src');
																var queryParameters = {}, queryString = isrc,
																re = /([^&=]+)=([^&]*)/g, m;
																// Creates a map with the query string parameters
																while (m = re.exec(queryString)) {
																	queryParameters[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
																}

																if (queryParameters['player_id']!=undefined)
																	isrc = isrc.replace(queryParameters['player_id'],frameID);
																else
																	isrc=isrc+"&player_id="+frameID;

																try{ isrc = isrc.replace('api=0','api=1'); } catch(e) {}

																isrc=isrc+"&api=1";

																ifr.attr('src',isrc);
																var player = nextcaption.find('iframe')[0];

																$f(player).addEvent('ready', function() {vimeoready_auto(frameID,nextcaption.data('autoplay'))});

															 } else {
																	if (nextcaption.data('autoplay')==true) {

																		var ifr = nextcaption.find('iframe');
																		var id = ifr.attr('id');
																		var froogaloop = $f(id);
																		nextcaption.data('timerplay',setTimeout(function() {
																			if (nextcaption.data('forcerewind')=="on")
																				froogaloop.api("seekTo",0);
																			froogaloop.api("play");
																		},nextcaption.data('start')));
																	}
															 }// END HAS LISTENER HANDLING

															 // PLAY VIDEO IF THUMBNAIL HAS BEEN CLICKED
															 nextcaption.find('.tp-thumb-image').click(function() {
																 TweenLite.to(jQuery(this),0.3,{opacity:0,ease:Power3.easeInOut,onComplete: function() {
																	 nextcaption.find('.tp-thumb-image').remove();
																	}
																 })
																 var ifr = nextcaption.find('iframe');
																 var id = ifr.attr('id');
																 var froogaloop = $f(id);
																 froogaloop.api("play");
															 })


													}  // END OF VIMEO HANDLING
											}  // END OF CHOOSE BETWEEN YOUTUBE AND VIMEO
										}); // END OF LOOP THROUGH IFRAMES

										// START OF VIDEO JS
										if (nextcaption.find('video').length>0) {


															nextcaption.find('video').each(function(i) {
																var html5vid = jQuery(this).parent();

																if (nextcaption.data('dottedoverlay')!="none" && nextcaption.data('dottedoverlay')!=undefined)
																	if (nextcaption.find('.tp-dottedoverlay').length!=1)
																		html5vid.append('<div class="tp-dottedoverlay '+nextcaption.data('dottedoverlay')+'"></div>');

																var mediaaspect=16/9;
																if (nextcaption.data('aspectratio')=="4:3") mediaaspect=4/3;
																html5vid.data('mediaAspect',mediaaspect);



																if (html5vid.closest('.tp-caption').data('forcecover')==1) 
																	updateHTML5Size(html5vid,opt.container);



																if (html5vid.hasClass("video-js")) {
																	opt.nextslideatend = nextcaption.data('nextslideatend');
																	if (!html5vid.hasClass("HasListener")) {
																		html5vid.addClass("HasListener");
																		var videoID = "videoid_"+Math.round(Math.random()*1000+1);
																		html5vid.attr('id',videoID);

																		videojs(videoID).ready(function(){

																			html5vidready(this,videoID)

																		});

																	} else {
																		videoID = html5vid.attr('id');
																	}


																	html5vid.find('.vjs-poster').css({display:"block"});

																	if (nextcaption.data('autoplay')==true) {

																		var bt=jQuery('body').find('#'+opt.container.attr('id')).find('.tp-bannertimer');
																		setTimeout(function(){
																			bt.stop();
																			opt.videoplaying=true;
																		},200);

																		//konsole.log("VideoPlay set to True due HTML5 VIDEO 1st/2nd load AutoPlay");


																		videojs(videoID).ready(function(){
																			var myPlayer = this;
																			try {
																					if (nextcaption.data('forcerewind')=="on")
																						  myPlayer.currentTime(0);
																				} catch(e) {

																				}

																			html5vid.data('timerplay',setTimeout(function() {
																				if (nextcaption.data('forcerewind')=="on")
																				  myPlayer.currentTime(0);

																				if (html5vid.closest('.tp-caption').data('volume')=="mute")
																				  myPlayer.volume(0);

																				setTimeout(function() {
																					myPlayer.play(0);
																					html5vid.find('.vjs-poster').css({display:"none"});
																				},50);
																			},10+nextcaption.data('start')));
																		});
																	}


																	if (html5vid.data('ww') == undefined) html5vid.data('ww',html5vid.width());
																	if (html5vid.data('hh') == undefined) html5vid.data('hh',html5vid.height());

																	videojs(videoID).ready(function(){
																		if (!nextcaption.hasClass("fullscreenvideo")) {
																			var myPlayer = videojs(videoID);

																			try{
																				myPlayer.width(html5vid.data('ww')*opt.bw);
																				myPlayer.height(html5vid.data('hh')*opt.bh);
																			} catch(e) {}
																		}
																	});



																	if (html5vid.closest('.tp-caption').data('forcecover')==1) {
																		updateHTML5Size(html5vid,opt.container);
																		html5vid.addClass("fullcoveredvideo");
																	}



																 }

															});
											} // END OF VIDEO JS FUNCTIONS

											// IF AUTOPLAY IS ON, WE NEED SOME STOP FUNCTION ON
												if (nextcaption.data('autoplay')==true) {
													var bt=jQuery('body').find('#'+opt.container.attr('id')).find('.tp-bannertimer');

													setTimeout(function() {
														bt.stop();
														opt.videoplaying=true;

													},200)
													opt.videoplaying=true;

													if (nextcaption.data('autoplayonlyfirsttime') == true || nextcaption.data('autoplayonlyfirsttime')=="true" ) {
														nextcaption.data('autoplay',false);
														nextcaption.data('autoplayonlyfirsttime',false);
													}
												}
									}




										// NEW ENGINE
										//if (nextcaption.hasClass("randomrotate") && (opt.ie || opt.ie9)) nextcaption.removeClass("randomrotate").addClass("sfb");
										//	nextcaption.removeClass('noFilterClass');



										   var imw =0;
										   var imh = 0;

													if (nextcaption.find('img').length>0) {
														var im = nextcaption.find('img');
														if (im.data('ww') == undefined) im.data('ww',im.width());
														if (im.data('hh') == undefined) im.data('hh',im.height());

														var ww = im.data('ww');
														var hh = im.data('hh');

														if(nextcaption.find('.tp-resizeme').length>0){
															im.width(ww*opt.bw);
															im.height(hh*opt.bh);
															imw = im.width();
															imh = im.height();
														}
													} else {
													if (nextcaption.find('iframe').length>0 || nextcaption.find('.video-js').length>0) {

															var im = nextcaption.find('iframe');
															im.css({display:"block"});
															if (nextcaption.data('ww') == undefined) {
																nextcaption.data('ww',im.width());
															}
															if (nextcaption.data('hh') == undefined) nextcaption.data('hh',im.height());

															var ww = nextcaption.data('ww');
															var hh = nextcaption.data('hh');

															var nc =nextcaption;
																if (nc.data('fsize') == undefined) nc.data('fsize',parseInt(nc.css('font-size'),0) || 0);
																if (nc.data('pt') == undefined) nc.data('pt',parseInt(nc.css('paddingTop'),0) || 0);
																if (nc.data('pb') == undefined) nc.data('pb',parseInt(nc.css('paddingBottom'),0) || 0);
																if (nc.data('pl') == undefined) nc.data('pl',parseInt(nc.css('paddingLeft'),0) || 0);
																if (nc.data('pr') == undefined) nc.data('pr',parseInt(nc.css('paddingRight'),0) || 0);

																if (nc.data('mt') == undefined) nc.data('mt',parseInt(nc.css('marginTop'),0) || 0);
																if (nc.data('mb') == undefined) nc.data('mb',parseInt(nc.css('marginBottom'),0) || 0);
																if (nc.data('ml') == undefined) nc.data('ml',parseInt(nc.css('marginLeft'),0) || 0);
																if (nc.data('mr') == undefined) nc.data('mr',parseInt(nc.css('marginRight'),0) || 0);

																if (nc.data('bt') == undefined) nc.data('bt',parseInt(nc.css('borderTop'),0) || 0);
																if (nc.data('bb') == undefined) nc.data('bb',parseInt(nc.css('borderBottom'),0) || 0);
																if (nc.data('bl') == undefined) nc.data('bl',parseInt(nc.css('borderLeft'),0) || 0);
																if (nc.data('br') == undefined) nc.data('br',parseInt(nc.css('borderRight'),0) || 0);

																//if (nc.data('lh') == undefined) nc.data('lh',parseInt(nc.css('lineHeight'),0) || 0);

																var fvwidth=opt.width;
																var fvheight=opt.height;
																if (fvwidth>opt.startwidth) fvwidth=opt.startwidth;
																if (fvheight>opt.startheight) fvheight=opt.startheight;


															
																if (!nextcaption.hasClass('fullscreenvideo'))
																			nextcaption.css({

																				 'font-size': (nc.data('fsize') * opt.bw)+"px",

																				 'padding-top': (nc.data('pt') * opt.bh) + "px",
																				 'padding-bottom': (nc.data('pb') * opt.bh) + "px",
																				 'padding-left': (nc.data('pl') * opt.bw) + "px",
																				 'padding-right': (nc.data('pr') * opt.bw) + "px",

																				 'margin-top': (nc.data('mt') * opt.bh) + "px",
																				 'margin-bottom': (nc.data('mb') * opt.bh) + "px",
																				 'margin-left': (nc.data('ml') * opt.bw) + "px",
																				 'margin-right': (nc.data('mr') * opt.bw) + "px",

																				 'border-top': (nc.data('bt') * opt.bh) + "px",
																				 'border-bottom': (nc.data('bb') * opt.bh) + "px",
																				 'border-left': (nc.data('bl') * opt.bw) + "px",
																				 'border-right': (nc.data('br') * opt.bw) + "px",

																				  //'line-height': (nc.data('lh') * opt.bh) + "px",
																				 'height':(hh*opt.bh)+'px',
																				 'white-space':"nowrap"
																				});
																	else  {
																		   offsetx=0; offsety=0;
																		   nextcaption.data('x',0)
																		   nextcaption.data('y',0)

																		   var ovhh = opt.height
																		   if (opt.autoHeight=="on")
																		   		ovhh = opt.container.height()
																			nextcaption.css({

																				'width':opt.width,
																				'height':ovhh
																			});
																		}


															im.width(ww*opt.bw);
															im.height(hh*opt.bh);
															imw = im.width();
															imh = im.height();
														} else {
															
															
															nextcaption.find('.tp-resizeme, .tp-resizeme *').each(function() {
																	
																	calcCaptionResponsive(jQuery(this),opt);
															});
														
															
															if (nextcaption.hasClass("tp-resizeme")) {
																nextcaption.find('*').each(function() {
																	calcCaptionResponsive(jQuery(this),opt,"first");
																});
																calcCaptionResponsive(nextcaption,opt,"first");
																nextcaption.find('*').each(function() {
																	calcCaptionResponsive(jQuery(this),opt);
																});
																calcCaptionResponsive(nextcaption,opt);
															}

															imh=nextcaption.outerHeight(true);
															imw=nextcaption.outerWidth(true);

															// NEXTCAPTION FRONTCORNER CHANGES
															var ncch = nextcaption.outerHeight();
															var bgcol = nextcaption.css('backgroundColor');
															nextcaption.find('.frontcorner').css({
																			'borderWidth':ncch+"px",
																			'left':(0-ncch)+'px',
																			'borderRight':'0px solid transparent',
																			'borderTopColor':bgcol
															});

															nextcaption.find('.frontcornertop').css({
																			'borderWidth':ncch+"px",
																			'left':(0-ncch)+'px',
																			'borderRight':'0px solid transparent',
																			'borderBottomColor':bgcol
															});

															// NEXTCAPTION BACKCORNER CHANGES
															nextcaption.find('.backcorner').css({
																			'borderWidth':ncch+"px",
																			'right':(0-ncch)+'px',
																			'borderLeft':'0px solid transparent',
																			'borderBottomColor':bgcol
															});

															// NEXTCAPTION BACKCORNER CHANGES
															nextcaption.find('.backcornertop').css({
																			'borderWidth':ncch+"px",
																			'right':(0-ncch)+'px',
																			'borderLeft':'0px solid transparent',
																			'borderTopColor':bgcol
															});

														}


												}

											if (opt.fullScreenAlignForce == "on") {
												xbw = 1;
												xbh = 1;
												offsetx=0;
												offsety=0;
											}

											if (nextcaption.data('voffset')==undefined) nextcaption.data('voffset',0);
											if (nextcaption.data('hoffset')==undefined) nextcaption.data('hoffset',0);

											var vofs= nextcaption.data('voffset')*xbw;
											var hofs= nextcaption.data('hoffset')*xbw;

											var crw = opt.startwidth*xbw;
											var crh = opt.startheight*xbw;

											if (opt.fullScreenAlignForce == "on") {
												crw = opt.container.width();
												crh = opt.container.height();

											}

										

											// CENTER THE CAPTION HORIZONTALLY
											if (nextcaption.data('x')=="center" || nextcaption.data('xcenter')=='center') {
												nextcaption.data('xcenter','center');
												nextcaption.data('x',(crw/2 - nextcaption.outerWidth(true)/2)/xbw+  hofs);

											}

											// ALIGN LEFT THE CAPTION HORIZONTALLY
											if (nextcaption.data('x')=="left" || nextcaption.data('xleft')=='left') {
												nextcaption.data('xleft','left');
												nextcaption.data('x',(0)/xbw+hofs);

											}

											// ALIGN RIGHT THE CAPTION HORIZONTALLY
											if (nextcaption.data('x')=="right" || nextcaption.data('xright')=='right') {
												nextcaption.data('xright','right');
												nextcaption.data('x',((crw - nextcaption.outerWidth(true))+hofs)/xbw);
												//konsole.log("crw:"+crw+"  width:"+nextcaption.outerWidth(true)+"  xbw:"+xbw);
												//konsole.log("x-pos:"+nextcaption.data('x'))
											}


											// CENTER THE CAPTION VERTICALLY
											if (nextcaption.data('y')=="center" || nextcaption.data('ycenter')=='center') {
												nextcaption.data('ycenter','center');
												nextcaption.data('y',(crh/2 - nextcaption.outerHeight(true)/2)/xbh + vofs);

											}

											// ALIGN TOP THE CAPTION VERTICALLY
											if (nextcaption.data('y')=="top" || nextcaption.data('ytop')=='top') {
												nextcaption.data('ytop','top');
												nextcaption.data('y',(0)/opt.bh+vofs);

											}

											// ALIGN BOTTOM THE CAPTION VERTICALLY
											if (nextcaption.data('y')=="bottom" || nextcaption.data('ybottom')=='bottom') {
												nextcaption.data('ybottom','bottom');
												nextcaption.data('y',((crh - nextcaption.outerHeight(true))+vofs)/xbw);
											}



											// THE TRANSITIONS OF CAPTIONS
											// MDELAY AND MSPEED
											if (nextcaption.data('start') == undefined) nextcaption.data('start',1000);



											var easedata=nextcaption.data('easing');
											if (easedata==undefined) easedata="Power1.easeOut";


											var mdelay = nextcaption.data('start')/1000;
											var mspeed = nextcaption.data('speed')/1000;
											var d_x = nextcaption.data('x');
											var d_y = nextcaption.data('y');
											if(	nextcaption.attr("changePostion") == "1"){
												d_x =  nextcaption.attr('dataleft');
												d_y =  nextcaption.attr('datatop');
											}
											
											
											var calcx = (xbw*d_x+offsetx);
											
											var calcy = (opt.bh*d_y+offsety);




											if (opt.fullScreenAlignForce == "on")
												calcy = nextcaption.data('y')+offsety;

													TweenLite.killTweensOf(nextcaption,false);
													clearTimeout(nextcaption.data('reversetimer'));


													var tlop = 0,
													 	tlxx = calcx, tlyy = calcy, tlzz = 2,
													    tlsc = 1,tlro = 0,
													    sc=1,scX=1,scY= 1,
													    ro=0,roX=0,roY=0,roZ = 0,
														skwX=0, skwY = 0,
														opa = 0,
														trorig = "center,center",
														tper = 300,
														repeatV = 0,
														yoyoV = false,
													    repeatdelayV = 0;

													if (nextcaption.data('repeat')!=undefined) repeatV = nextcaption.data('repeat');
													if (nextcaption.data('yoyo')!=undefined) yoyoV = nextcaption.data('yoyo');
													if (nextcaption.data('repeatdelay')!=undefined) repeatdelayV = nextcaption.data('repeatdelay');


													if (nextcaption.hasClass("customin")) {

														var customarray = nextcaption.data('customin').split(';');
														jQuery.each(customarray,function(index,param) {

															param = param.split(":")

															var w = param[0],
																v = param[1];


															if (w=="rotationX") roX = parseInt(v,0);
															if (w=="rotationY") roY = parseInt(v,0);
															if (w=="rotationZ") roZ = parseInt(v,0);
															if (w=="scaleX")  scX = parseFloat(v);
															if (w=="scaleY")  scY = parseFloat(v);
															if (w=="opacity") opa = parseFloat(v);
															if (w=="skewX")   skwX = parseInt(v,0);
															if (w=="skewY")   skwY = parseInt(v,0);
															if (w=="x") tlxx = calcx + parseInt(v,0);
															if (w=="y") tlyy = calcy + parseInt(v,0);
															if (w=="z") tlzz = parseInt(v,0);
															if (w=="transformOrigin") trorig = v.toString();
															if (w=="transformPerspective") tper=parseInt(v,0);


														})
													}



													if (nextcaption.hasClass("randomrotate")) {

																sc = Math.random()*3+1;
																ro = Math.round(Math.random()*200-100);
																tlxx = calcx + Math.round(Math.random()*200-100);
																tlyy = calcy + Math.round(Math.random()*200-100);
													}

													if (nextcaption.hasClass('lfr') || nextcaption.hasClass('skewfromright'))
														tlxx = 15+opt.width;



													if (nextcaption.hasClass('lfl') || nextcaption.hasClass('skewfromleft'))
														tlxx = -15-imw;

													if (nextcaption.hasClass('sfl') | nextcaption.hasClass('skewfromleftshort'))
														tlxx = calcx-50;

													if (nextcaption.hasClass('sfr') | nextcaption.hasClass('skewfromrightshort'))
														tlxx = calcx+50;


													if (nextcaption.hasClass('lft'))
														tlyy = -25 - imh;


													if (nextcaption.hasClass('lfb'))
														tlyy = 25 + opt.height;

													if (nextcaption.hasClass('sft'))
														tlyy = calcy-50;

													if (nextcaption.hasClass('sfb'))
														tlyy = calcy+50;

													if (nextcaption.hasClass('skewfromright') || nextcaption.hasClass('skewfromrightshort'))
														skwX = -85

													if (nextcaption.hasClass('skewfromleft') || nextcaption.hasClass('skewfromleftshort'))
														skwX =  85

													if (get_browser().toLowerCase()=="safari") {
														roX=0;roY=0;
													}
													tlxx=Math.round(tlxx);
													tlyy=Math.round(tlyy);
													calcx=Math.round(calcx);
													calcy=Math.round(calcy);
													

													// CHANGE to TweenMax.  if Yoyo and Repeat is used. Dont forget to laod the Right Tools for it !!
													if (nextcaption.hasClass("customin")) {
												
																nextcaption.data('anim',TweenLite.fromTo(nextcaption,mspeed,
																				{ scaleX:scX,
																				  scaleY:scY,
																				  rotationX:roX,
																				  rotationY:roY,
																				  rotationZ:roZ,
																				  x:0,
																				  y:0,
																				  left:tlxx,
																				  top:tlyy,
																				  z:tlzz,
																				  opacity:opa,
																				  transformPerspective:tper,
																				  transformOrigin:trorig,
																				  visibility:'hidden'},

																				{
																				  left:calcx,
																				  top:calcy,
																				  scaleX:1,
																				  scaleY:1,
																				  rotationX:0,
																				  rotationY:0,
																				  rotationZ:0,
																				  skewX:0,
																				  skewY:0,
																				  z:0,
																				  x:0,
																				  y:0,
																				  visibility:'visible',
																				  opacity:1,
																				  delay:mdelay,
																				  ease:easedata,
																				  overwrite:"all",

																				  /*yoyo:yoyoV,
																				  repeat:repeatV,
																				  repeatDelay:repeatdelayV*/
																				}));


													} else {
														nextcaption.data('anim',TweenLite.fromTo(nextcaption,mspeed,
																				{ scale:sc,
																				  rotationX:0,
																				  rotationY:0,
																				  skewY:0,
																				  rotation:ro,
																				  left:tlxx+'px',
																				  top:tlyy+"px",
																				  opacity:0,
																				  z:0,
																				  x:0,
																				  y:0,
																				  skewX:skwX,
																				  transformPerspective:600,
																				  visibility:'visible',

																				 },

																				{ left:calcx+'px',
																				  top:calcy+"px",
																				  scale:1,
																				  skewX:0,
																				  rotation:0,
																				  z:0,
																				  visibility:'visible',
																				  opacity:1,
																				  delay:mdelay,
																				  ease:easedata,
																				  overwrite:"all",
																				  yoyo:yoyoV,
																				  repeat:repeatV,
																				  repeatDelay:repeatdelayV,


																				}));
													}





											  nextcaption.data('killall',setTimeout(function() {
												   nextcaption.css({transform:"none",'-moz-transform':'none','-webkit-transform':'none'});
											   },(mspeed*1000)+(mdelay*1000)+20))


												nextcaption.data('timer',setTimeout(function() {
													if (nextcaption.hasClass("fullscreenvideo"))
														nextcaption.css({'display':'block'});

												},nextcaption.data('start')));


												// IF THERE IS ANY EXIT ANIM DEFINED
												if (nextcaption.data('end')!=undefined)
																endMoveCaption(nextcaption,opt,nextcaption.data('end')/1000);


											}

						})

						var bt=jQuery('body').find('#'+opt.container.attr('id')).find('.tp-bannertimer');
						bt.data('opt',opt);
				}


				function get_browser(){
				    var N=navigator.appName, ua=navigator.userAgent, tem;
				    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
				    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
				    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
				    return M[0];
				    }
				function get_browser_version(){
				    var N=navigator.appName, ua=navigator.userAgent, tem;
				    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
				    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
				    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
				    return M[1];
				    }

				/////////////////////////////////////////////////////////////////
				//	-	CALCULATE THE RESPONSIVE SIZES OF THE CAPTIONS	-	  //
				/////////////////////////////////////////////////////////////////
				function calcCaptionResponsive(nc,opt,flag) {
								if (nc.data('fsize') == undefined) nc.data('fsize',parseInt(nc.css('font-size'),0) || 0);
								if (nc.data('pt') == undefined) nc.data('pt',parseInt(nc.css('paddingTop'),0) || 0);
								if (nc.data('pb') == undefined) nc.data('pb',parseInt(nc.css('paddingBottom'),0) || 0);
								if (nc.data('pl') == undefined) nc.data('pl',parseInt(nc.css('paddingLeft'),0) || 0);
								if (nc.data('pr') == undefined) nc.data('pr',parseInt(nc.css('paddingRight'),0) || 0);

								if (nc.data('mt') == undefined) nc.data('mt',parseInt(nc.css('marginTop'),0) || 0);
								if (nc.data('mb') == undefined) nc.data('mb',parseInt(nc.css('marginBottom'),0) || 0);
								if (nc.data('ml') == undefined) nc.data('ml',parseInt(nc.css('marginLeft'),0) || 0);
								if (nc.data('mr') == undefined) nc.data('mr',parseInt(nc.css('marginRight'),0) || 0);

								if (nc.data('bt') == undefined) nc.data('bt',parseInt(nc.css('borderTopWidth'),0) || 0);
								if (nc.data('bb') == undefined) nc.data('bb',parseInt(nc.css('borderBottomWidth'),0) || 0);
								if (nc.data('bl') == undefined) nc.data('bl',parseInt(nc.css('borderLeftWidth'),0) || 0);
								if (nc.data('br') == undefined) nc.data('br',parseInt(nc.css('borderRightWidth'),0) || 0);

								//if (nc.data('lh') == undefined) nc.data('lh',parseInt(nc.css('lineHeight'),0) || 0);
								if (nc.data('minwidth') == undefined) nc.data('minwidth',parseInt(nc.css('minWidth'),0) || 0);
								if (nc.data('minheight') == undefined) nc.data('minheight',parseInt(nc.css('minHeight'),0) || 0);
								if (nc.data('maxwidth') == undefined) nc.data('maxwidth',parseInt(nc.css('maxWidth'),0) || "none");
								if (nc.data('maxheight') == undefined) nc.data('maxheight',parseInt(nc.css('maxHeight'),0) || "none");
								
								if (nc.data('wan') == undefined) nc.data('wan',nc.css("-webkit-transition"));
								if (nc.data('moan') == undefined) nc.data('moan',nc.css("-moz-animation-transition"));
								if (nc.data('man') == undefined) nc.data('man',nc.css("-ms-animation-transition"));
								if (nc.data('ani') == undefined) nc.data('ani',nc.css("transition"));

								if(flag=="first"){
									return;
								}

							    nc.css("-webkit-transition", "none");
							    nc.css("-moz-transition", "none");
							    nc.css("-ms-transition", "none");
							    nc.css("transition", "none");


								TweenLite.set(nc,{
												 fontSize: Math.round((nc.data('fsize') * opt.bw))+"px",

												 paddingTop: Math.round((nc.data('pt') * opt.bh)) + "px",
												 paddingBottom: Math.round((nc.data('pb') * opt.bh)) + "px",
												 paddingLeft: Math.round((nc.data('pl') * opt.bw)) + "px",
												 paddingRight: Math.round((nc.data('pr') * opt.bw)) + "px",

												 marginTop: (nc.data('mt') * opt.bh) + "px",
												 marginBottom: (nc.data('mb') * opt.bh) + "px",
												 marginLeft: (nc.data('ml') * opt.bw) + "px",
												 marginRight: (nc.data('mr') * opt.bw) + "px",

												 borderTopWidth: Math.round((nc.data('bt') * opt.bh)) + "px",
												 borderBottomWidth: Math.round((nc.data('bb') * opt.bh)) + "px",
												 borderLeftWidth: Math.round((nc.data('bl') * opt.bw)) + "px",
												 borderRightWidth: Math.round((nc.data('br') * opt.bw)) + "px",

												 //lineHeight: Math.round((nc.data('lh') * opt.bh)) + "px",
												 whiteSpace:"nowrap",
												 minWidth:(nc.data('minwidth') * opt.bw) + "px",
												 minHeight:(nc.data('minheight') * opt.bh) + "px"
								});
								setTimeout(function() {
									nc.css("-webkit-transition", nc.data('wan'));
								    nc.css("-moz-transition", nc.data('moan'));
								    nc.css("-ms-transition", nc.data('man'));
								    nc.css("transition", nc.data('ani'));

								},30);

								//konsole.log(nc.data('maxwidth')+"  "+nc.data('maxheight'));
								if (nc.data('maxheight')!='none')
									nc.css({'maxHeight':(nc.data('maxheight') * opt.bh) + "px"});


								if (nc.data('maxwidth')!='none')
									nc.css({'maxWidth':(nc.data('maxwidth') * opt.bw) + "px"});
						}


				//////////////////////////
				//	REMOVE THE CAPTIONS //
				/////////////////////////
				function removeTheCaptions(actli,opt) {


						actli.find('.tp-caption').each(function(i) {
							var nextcaption=jQuery(this); //actli.find('.tp-caption:eq('+i+')');

							if (nextcaption.find('iframe').length>0) {
															// VIMEO VIDEO PAUSE
															try {
																var ifr = nextcaption.find('iframe');
																var id = ifr.attr('id');
																var froogaloop = $f(id);
																froogaloop.api("pause");
																clearTimeout(nextcaption.data('timerplay'));
															} catch(e) {}
															//YOU TUBE PAUSE
															try {
																var player=nextcaption.data('player');
																player.stopVideo();
																clearTimeout(nextcaption.data('timerplay'));
															} catch(e) {}
														}

							// IF HTML5 VIDEO IS EMBEDED
							if (nextcaption.find('video').length>0) {
											try{
												nextcaption.find('video').each(function(i) {
													var html5vid = jQuery(this).parent();
													var videoID =html5vid.attr('id');
													clearTimeout(html5vid.data('timerplay'));
													videojs(videoID).ready(function(){
														var myPlayer = this;
														myPlayer.pause();
													});
												})
											}catch(e) {}
										} // END OF VIDEO JS FUNCTIONS
							try {
									endMoveCaption(nextcaption,opt,0);
								} catch(e) {}



						});
				}

				//////////////////////////
				//	MOVE OUT THE CAPTIONS //
				/////////////////////////
				function endMoveCaption(nextcaption,opt,mdelay) {


														var mspeed=nextcaption.data('endspeed');
														if (mspeed==undefined) mspeed=nextcaption.data('speed');

														mspeed = mspeed/1000;

														var easedata=nextcaption.data('endeasing');
														if (easedata==undefined) easedata=Power1.easeInOut;



														if (nextcaption.hasClass('ltr') ||
															nextcaption.hasClass('ltl') ||
															nextcaption.hasClass('str') ||
															nextcaption.hasClass('stl') ||
															nextcaption.hasClass('ltt') ||
															nextcaption.hasClass('ltb') ||
															nextcaption.hasClass('stt') ||
															nextcaption.hasClass('stb') ||
															nextcaption.hasClass('skewtoright') ||
															nextcaption.hasClass('skewtorightshort') ||
															nextcaption.hasClass('skewtoleft') ||
															nextcaption.hasClass('skewtoleftshort'))
														{

															skwX = 0;

															if (nextcaption.hasClass('skewtoright') || nextcaption.hasClass('skewtorightshort'))
																skwX = 35

															if (nextcaption.hasClass('skewtoleft') || nextcaption.hasClass('skewtoleftshort'))
																skwX =  -35

															var xx=0;
															var yy=0;

															if (nextcaption.hasClass('ltr') || nextcaption.hasClass('skewtoright'))
																xx=opt.width+60;
															else if (nextcaption.hasClass('ltl') || nextcaption.hasClass('skewtoleft'))
																xx=0-(opt.width+60);
															else if (nextcaption.hasClass('ltt'))
																yy=0-(opt.height+60);
															else if (nextcaption.hasClass('ltb'))
																yy=opt.height+60;
															else if (nextcaption.hasClass('str') || nextcaption.hasClass('skewtorightshort')) {
																xx=50;oo=0;
															} else if (nextcaption.hasClass('stl') || nextcaption.hasClass('skewtoleftshort')) {
																xx=-50;oo=0;
															} else if (nextcaption.hasClass('stt')) {
																yy=-50;oo=0;
															} else if (nextcaption.hasClass('stb')) {
																yy=50;oo=0;
															}

															if (nextcaption.hasClass('skewtorightshort'))
																xx = xx + 220;

															if (nextcaption.hasClass('skewtoleftshort'))
																xx =  xx -220


															nextcaption.data('outanim',TweenLite.to(nextcaption,mspeed,
																		{
																		  x:xx,
																		  y:yy,
																		  scale:1,
																		  rotation:0,
																		  skewX:skwX,
																		  opacity:0,
																		  delay:mdelay,
																		  z:0,
																		  overwrite:"auto",
																		  ease:easedata,
																		  onStart:function() {
						  													if (nextcaption.data('anim') !=undefined)
																			  nextcaption.data('anim').pause();
																		  }
																		 }));

														}

														else

														if ( nextcaption.hasClass("randomrotateout")) {

															nextcaption.data('outanim',TweenLite.to(nextcaption,mspeed,
																		{ left:Math.random()*opt.width,
																		  top:Math.random()*opt.height,
																		  scale:Math.random()*2+0.3,
																		  rotation:Math.random()*360-180,
																		  z:0,
																		  opacity:0,
																		  delay:mdelay,
																		  ease:easedata,
																		  onStart:function() {
																		    if (nextcaption.data('anim') !=undefined)
																			  nextcaption.data('anim').pause();
																		  }
																	}));

														}

														else

														if (nextcaption.hasClass('fadeout')) {


	
															nextcaption.data('outanim',TweenLite.to(nextcaption,mspeed,
																		{ opacity:0,
																		  delay:mdelay,
																		  ease:easedata,
																		  onStart:function() {
																		  if (nextcaption.data('anim') !=undefined)
																			  nextcaption.data('anim').pause();
																		}}));

														}

														else

														if (nextcaption.hasClass("customout")) {
															var tlop = 0,
															 	tlxx = 0, tlyy = 0, tlzz = 2,
															    tlsc = 1,tlro = 0,
															    sc=1,scX=1,scY= 1,
															    ro=0,roX=0,roY=0,roZ = 0,
																skwX=0, skwY = 0,
																opa = 0,
																trorig = "center,center",
																tper = 300;

															var customarray = nextcaption.data('customout').split(';');
															jQuery.each(customarray,function(index,param) {
															//customarray.forEach(function(param) {
																param = param.split(":")

																var w = param[0],
																	v = param[1];


																if (w=="rotationX") roX = parseInt(v,0);
																if (w=="rotationY") roY = parseInt(v,0);
																if (w=="rotationZ") roZ = parseInt(v,0);
																if (w=="scaleX")  scX = parseFloat(v);
																if (w=="scaleY")  scY = parseFloat(v);
																if (w=="opacity") opa = parseFloat(v);
																if (w=="skewX")   skwX = parseInt(v,0);
																if (w=="skewY")   skwY = parseInt(v,0);
																if (w=="x") tlxx = parseInt(v,0);
																if (w=="y") tlyy = parseInt(v,0);
																if (w=="z") tlzz = parseInt(v);
																if (w=="transformOrigin") trorig = v;
																if (w=="transformPerspective") tper=parseInt(v,0);


															})

														
												
															nextcaption.data('outanim',TweenLite.to(nextcaption,mspeed,


																				{
																				  scaleX:scX,
																				  scaleY:scY,
																				  rotationX:roX,
																				  rotationY:roY,
																				  rotationZ:roZ,
																				  x:tlxx,
																				  y:tlyy,
																				  z:tlzz,
																				  opacity:opa,
																				  delay:mdelay,
																				  ease:easedata,
																				  overwrite:"auto",
																				  onStart:function() {

																					  if (nextcaption.data('anim') !=undefined)
																						  nextcaption.data('anim').pause();
																					  TweenLite.set(nextcaption,{
																						  transformPerspective:tper,
																						  transformOrigin:trorig,
																						  overwrite:"auto"
																					  });

																		}}));
														}

														else {
															//TweenLite.to(nextcaption,{delay:mdelay,overwrite:"auto"});
															clearTimeout(nextcaption.data('reversetimer'));
															/*nextcaption.data('reversetimer',setTimeout(function() {
																nextcaption.animate({opacity:"0"});

															},mdelay*1000));*/
														nextcaption.data('reversetimer',setTimeout(function() {

																nextcaption.data('anim').reverse()
															},mdelay*1000));														
	

														}
												}

		///////////////////////////
		//	REMOVE THE LISTENERS //
		///////////////////////////
		function removeAllListeners(container,opt) {
			container.children().each(function() {
			  try{ jQuery(this).die('click'); } catch(e) {}
			  try{ jQuery(this).die('mouseenter');} catch(e) {}
			  try{ jQuery(this).die('mouseleave');} catch(e) {}
			  try{ jQuery(this).unbind('hover');} catch(e) {}
			})
			try{ container.die('click','mouseenter','mouseleave');} catch(e) {}
			clearInterval(opt.cdint);
			container=null;



		}

		///////////////////////////
		//	-	COUNTDOWN	-	//
		/////////////////////////
		function countDown(container,opt) {
			opt.cd=0;
			opt.loop=0;
			if (opt.stopAfterLoops!=undefined && opt.stopAfterLoops>-1)
					opt.looptogo=opt.stopAfterLoops;
			else
				opt.looptogo=9999999;

			if (opt.stopAtSlide!=undefined && opt.stopAtSlide>-1)
					opt.lastslidetoshow=opt.stopAtSlide;
			else
					opt.lastslidetoshow=999;

			opt.stopLoop="off";

			if (opt.looptogo==0) opt.stopLoop="on";



			if (opt.slideamount >1 && !(opt.stopAfterLoops==0 && opt.stopAtSlide==1) ) {
					var bt=container.find('.tp-bannertimer');
					if (bt.length>0) {
						bt.css({'width':'0%'});

						if (opt.videoplaying!=true)
							bt.animate({'width':"100%"},{duration:(opt.delay-100),queue:false, easing:"linear"});

					}

					bt.data('opt',opt);


					opt.cdint=setInterval(function() {

						if (jQuery('body').find(container).length==0) removeAllListeners(container,opt);
						if (container.data('conthover-changed') == 1) {
							opt.conthover=	container.data('conthover');
							container.data('conthover-changed',0);
						}

						if (opt.conthover!=1 && opt.videoplaying!=true && opt.width>opt.hideSliderAtLimit) {
							opt.cd=opt.cd+100;
						}


						if (opt.fullWidth!="on")
							if (opt.width>opt.hideSliderAtLimit)
								container.parent().removeClass("tp-hide-revslider")
							else
								container.parent().addClass("tp-hide-revslider")
						// EVENT TRIGGERING IN CASE VIDEO HAS BEEN STARTED
						if (opt.videostartednow==1) {
							container.trigger('revolution.slide.onvideoplay');
							opt.videostartednow=0;
						}

						// EVENT TRIGGERING IN CASE VIDEO HAS BEEN STOPPED
						if (opt.videostoppednow==1) {
							container.trigger('revolution.slide.onvideostop');
							opt.videostoppednow=0;
						}


						if (opt.cd>=opt.delay) {
							opt.cd=0;
							// SWAP TO NEXT BANNER
							opt.act=opt.next;
							opt.next=opt.next+1;
							if (opt.next>container.find('>ul >li').length-1) {
									opt.next=0;
									opt.looptogo=opt.looptogo-1;

									if (opt.looptogo<=0) {
											opt.stopLoop="on";

									}
								}

							// STOP TIMER IF NO LOOP NO MORE NEEDED.

							if (opt.stopLoop=="on" && opt.next==opt.lastslidetoshow-1) {
									clearInterval(opt.cdint);
									container.find('.tp-bannertimer').css({'visibility':'hidden'});
									container.trigger('revolution.slide.onstop');
							}

							// SWAP THE SLIDES
							swapSlide(container,opt);


							// Clear the Timer
							if (bt.length>0) {
								bt.css({'width':'0%'});
								if (opt.videoplaying!=true)
									bt.animate({'width':"100%"},{duration:(opt.delay-100),queue:false, easing:"linear"});
							}
						}
					},100);


					container.hover(
						function() {

							if (opt.onHoverStop=="on") {
									opt.conthover=1;
								bt.stop();
								container.trigger('revolution.slide.onpause');
								var nextsh = container.find('>ul >li:eq('+opt.next+') .slotholder');
								nextsh.find('.defaultimg').each(function() {
									var dimg = jQuery(this);
									if (dimg.data('kenburn')!=undefined)
									   dimg.data('kenburn').pause();
								});
							}
						},
						function() {
							if (container.data('conthover')!=1) {
								container.trigger('revolution.slide.onresume');
								opt.conthover=0;
								if (opt.onHoverStop=="on" && opt.videoplaying!=true) {
									bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false, easing:"linear"});
								}
								var nextsh = container.find('>ul >li:eq('+opt.next+') .slotholder');
								nextsh.find('.defaultimg').each(function() {
									var dimg = jQuery(this);
									if (dimg.data('kenburn')!=undefined)
									   dimg.data('kenburn').play();
								});
							}
						});
			}
		}



})(jQuery);


// SOME ERROR MESSAGES IN CASE THE PLUGIN CAN NOT BE LOADED
function revslider_showDoubleJqueryError(sliderID) {
	var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
	errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
	errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
	errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
	errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
		jQuery(sliderID).show().html(errorMessage);
}

;

/* isotope: (http://w-70982-96990-52773.10615136203.sites.cnfree04.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/isotope/jquery.isotope.min.js) */
/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2013 Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);;

/* ts_vcsc: (http://w-70982-96990-52773.10615136203.sites.cnfree04.qifeiye.com/qfy-content/themes/qfy-01/js/ts_vcsc.js) */
/**
 * 
 */
function TS_VCSC_IsTouchDevice(){return!!("ontouchstart"in window)||!!("onmsgesturechange"in window)}function TS_VCSC_SimulateTouchEvents(t,e){var a=jQuery;return a(t)[0]?(window.__touchTypes||(window.__touchTypes={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"},window.__touchInputs={INPUT:1,TEXTAREA:1,SELECT:1,OPTION:1,input:1,textarea:1,select:1,option:1}),a(t).bind("touchstart touchmove touchend",function(t){var i=t.target===this;if(!e||i){var r=!i&&t.target.__ajqmeclk,s=t.originalEvent;if(r!==!0&&s.touches&&!(s.touches.length>1)&&window.__touchTypes[s.type]){var n=i||"boolean"==typeof r?!1:a(t.target).data("events");if(r=i?!1:t.target.__ajqmeclk=n?n.click||n.mousedown||n.mouseup||n.mousemove:!1,!r&&!window.__touchInputs[t.target.tagName]){var o=s.changedTouches[0],d=document.createEvent("MouseEvent");d.initMouseEvent(window.__touchTypes[s.type],!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),o.target.dispatchEvent(d),s.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault()}}}}),!0):!1}function TS_VCSC_isPortrait(){return window.innerHeight>window.innerWidth}function TS_VCSC_isLandscape(){return 90===window.orientation||-90===window.orientation||270===window.orientation}function TS_VCSC_Countdown_Degrees(t){return Math.PI/180*t-Math.PI/2}function TS_VCSC_Countdown_DrawCircle(t,e,a,i,r,s){var n=t.getContext("2d");null!=n&&null!=t&&(n.clearRect(0,0,t.width,t.height),n.lineWidth=s,n.beginPath(),n.arc(t.width/2,t.height/2,t.width/2-n.lineWidth,TS_VCSC_Countdown_Degrees(0),TS_VCSC_Countdown_Degrees(360/a*(a-e)),!1),n.strokeStyle=i,n.stroke(),n.beginPath(),n.arc(t.width/2,t.height/2,t.width/2-n.lineWidth,TS_VCSC_Countdown_Degrees(0),TS_VCSC_Countdown_Degrees(360/a*(a-e)),!0),n.strokeStyle=r,n.stroke())}function TS_VCSC_Countdown_SetBar(t,e,a){barWidth=100-100/a*e,t.width(barWidth+"%")}function TS_VCSC_Countdown_Animate(t){t.each(function(){var t=jQuery(this),e=t.text(),a=t.attr("data-value"),i=t.attr("data-old");"undefined"==typeof i&&t.attr("data-old",e),e!=a&&(t.attr("data-value",e).attr("data-old",a).addClass("animate"),window.setTimeout(function(){t.removeClass("animate").attr("data-old",e)},300))})}function TS_VCSC_Countdown_Animate3D(t){t.each(function(){var t=jQuery(this),e=t.find(".ce-flip-front"),a=t.find(".ce-flip-back"),i=a.text(),r=t.attr("data-old");"undefined"==typeof r&&t.attr("data-old",i),i!=r&&(t.addClass("animate"),window.setTimeout(function(){e.text(i),t.removeClass("animate").attr("data-old",i)},800))})}function TS_VCSC_GetBasicRoman(t){for(var e="",a=0,i=0;i<roman.length&&0!=t;i++)for(;t>=decimal[i];)t-=decimal[i],e+=roman[i],"M"==roman[i]&&a++;return{numThousands:a,romanNumeral:e}}function TS_VCSC_DecimalToRoman(t){if(0>=t||t>3888888)return t;var e=TS_VCSC_GetBasicRoman(t);if(e.numThousands>4){for(var a="",i=0;i<e.numThousands;i++)a+="M";var r=TS_VCSC_GetBasicRoman(e.numThousands),s="<span style='border-top:1px solid #000'>"+r.romanNumeral+"</span>";romanNumeral=e.romanNumeral.replace(a,s)}else romanNumeral=e.romanNumeral;return romanNumeral}function TS_VCSC_CodeToCharacter(t){for(var e="";t>=0;)e=String.fromCharCode(t%26+97)+e,t=Math.floor(t/26)-1;return e}"ontouchstart"in document.documentElement||(document.documentElement.className+=" no-touch"),jQuery.exists=function(t){return jQuery(t).length>0},jQuery.fn.reverse=[].reverse;var TS_VCSC_MobileDevice=!1,TS_VCSC_Amaran_Overlay="",TS_VCSC_Supports3D=function(){if(document.body&&void 0!==document.body.style.perspective)return!0;var t=document.createElement("div"),e=t.style,a=["Webkit","Moz","O","Ms","ms"],i=a.length;if(void 0!==t.style.perspective)return!0;for(;--i>-1;)if(void 0!==e[a[i]+"Perspective"])return!0;return!1}();!function(t){var e=/iPhone/i,a=/iPod/i,i=/iPad/i,r=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,s=/Android/i,n=/IEMobile/i,o=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,d=/BlackBerry/i,u=/BB10/i,l=/Opera Mini/i,c=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,h=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),p=function(t,e){return t.test(e)},m=function(t){var m=t||navigator.userAgent;return this.apple={phone:p(e,m),ipod:p(a,m),tablet:p(i,m),device:p(e,m)||p(a,m)||p(i,m)},this.android={phone:p(r,m),tablet:!p(r,m)&&p(s,m),device:p(r,m)||p(s,m)},this.windows={phone:p(n,m),tablet:p(o,m),device:p(n,m)||p(o,m)},this.other={blackberry:p(d,m),blackberry10:p(u,m),opera:p(l,m),firefox:p(c,m),device:p(d,m)||p(u,m)||p(l,m)||p(c,m)},this.seven_inch=p(h,m),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},f=function(){var t=new m;return t.Class=m,t};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=m:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=f():"function"==typeof define&&define.amd?define(t.TS_VCSC_isMobile=f()):t.TS_VCSC_isMobile=f(),TS_VCSC_MobileDevice=TS_VCSC_isMobile.apple.phone||TS_VCSC_isMobile.apple.ipod||TS_VCSC_isMobile.android.phone||TS_VCSC_isMobile.windows.phone?!0:TS_VCSC_isMobile.apple.tablet||TS_VCSC_isMobile.android.tablet||TS_VCSC_isMobile.windows.tablet||TS_VCSC_isMobile.seven_inch?!0:!1}(this),function(t){t.fn.alterClass=function(e,a){var i=this;if(-1===e.indexOf("*"))return i.removeClass(e),a?i.addClass(a):i;var r=new RegExp("\\s"+e.replace(/\*/g,"[A-Za-z0-9-_]+").split(" ").join("\\s|\\s")+"\\s","g");return i.each(function(e,a){for(var i=" "+a.className+" ";r.test(i);)i=i.replace(r," ");a.className=t.trim(i)}),a?i.addClass(a):i},t.fn.moveTo=function(e){return this.each(function(){var a=t(this).clone();t(a).appendTo(e),t(this).remove()})},t.fn.unwrapUntil=function(){var e=arguments[0],a=typeof arguments[0];return"number"===a?t.each(this,function(){for(var a=t(this),i=0;e>i;i++)a.unwrap()}):"string"===a?t.each(this,function(){var a=t(this);if(a.closest(e).length>0)for(;0===a.parent(e).length;)a.unwrap()}):"object"===a&&t.each(this,function(){var a=t(this);if(a.closest(e).length>0)for(;a.parent()[0]!==e[0];)a.unwrap()}),this},t.fn.hasDataSet=function(e){return"undefined"!=typeof t(this).data(e)};var e=0;t.fn.translate3d=function(a,i,r,s){var n=t.speed(i,r,s);return n.easing=n.easing||"ease",a=t.extend({x:0,y:0,z:0},a),this.each(function(){var i=t(this);i.css({transitionDuration:n.duration+"ms",transitionTimingFunction:n.easing,transform:"translate3d("+a.x+"px, "+a.y+"px, "+a.z+"px)"}),setTimeout(function(){i.css({transitionDuration:"0s",transitionTimingFunction:"ease"}),n.complete()},n.duration+(e||0))})}}(jQuery);var TS_VCSC_Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){var e,a,i,r,s,n,o,d="",u=0;for(t=TS_VCSC_Base64._utf8_encode(t);u<t.length;)e=t.charCodeAt(u++),a=t.charCodeAt(u++),i=t.charCodeAt(u++),r=e>>2,s=(3&e)<<4|a>>4,n=(15&a)<<2|i>>6,o=63&i,isNaN(a)?n=o=64:isNaN(i)&&(o=64),d=d+this._keyStr.charAt(r)+this._keyStr.charAt(s)+this._keyStr.charAt(n)+this._keyStr.charAt(o);return d},decode:function(t){var e,a,i,r,s,n,o,d="",u=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");u<t.length;)r=this._keyStr.indexOf(t.charAt(u++)),s=this._keyStr.indexOf(t.charAt(u++)),n=this._keyStr.indexOf(t.charAt(u++)),o=this._keyStr.indexOf(t.charAt(u++)),e=r<<2|s>>4,a=(15&s)<<4|n>>2,i=(3&n)<<6|o,d+=String.fromCharCode(e),64!=n&&(d+=String.fromCharCode(a)),64!=o&&(d+=String.fromCharCode(i));return d=TS_VCSC_Base64._utf8_decode(d)},_utf8_encode:function(t){t=t.replace(/\r\n/g,"\n");for(var e="",a=0;a<t.length;a++){var i=t.charCodeAt(a);128>i?e+=String.fromCharCode(i):i>127&&2048>i?(e+=String.fromCharCode(i>>6|192),e+=String.fromCharCode(63&i|128)):(e+=String.fromCharCode(i>>12|224),e+=String.fromCharCode(i>>6&63|128),e+=String.fromCharCode(63&i|128))}return e},_utf8_decode:function(t){for(var e="",a=0,i=c1=c2=0;a<t.length;)i=t.charCodeAt(a),128>i?(e+=String.fromCharCode(i),a++):i>191&&224>i?(c2=t.charCodeAt(a+1),e+=String.fromCharCode((31&i)<<6|63&c2),a+=2):(c2=t.charCodeAt(a+1),c3=t.charCodeAt(a+2),e+=String.fromCharCode((15&i)<<12|(63&c2)<<6|63&c3),a+=3);return e}};!function(t){t.fn.picstrips=function(e){var a=t.extend({splits:8,hgutter:"10px",vgutter:"60px",bgcolor:"#fff"},e);return this.each(function(){function e(){var e=i(r,null);t(r).show(),e=i(r,e)}function i(e,i){var r=t(e).height(),s=t(e).width(),n=parseInt(a.hgutter,10),o=(s-n*a.splits)/a.splits,d="position: relative; float:left; margin-right: "+a.hgutter+"; background-image: url("+e.src+"); width: "+o+"px; height: "+r+"px; background-size: auto "+r+"px; ",u="position: absolute; left: 0px; width: "+o+"px; height: "+a.vgutter+"; background-color: "+a.bgcolor+"; top: ",l="position: relative; float:left; background-image: url("+e.src+"); width: "+o+"px; height: "+r+"px; background-size: auto "+r+"px; ";i&&i.remove();var c=t("[id^=molbars_]").length+1;i=t('<div id="molbars_'+c+'" class="molbars"></div>'),i.insertAfter(t(e));for(var h=0,p=0;p<a.splits;p++){var m=p%2!==0?"0px":r-parseInt(a.vgutter,10)+"px";d+=" background-position: -"+h+"px 100%;",l+=" background-position: -"+h+"px 100%;",p===a.splits-1?t('<div style="'+l+'"><span style="'+u+m+'"></span></div>').appendTo(i):t('<div style="'+d+'"><span style="'+u+m+'"></span></div>').appendTo(i),h+=o+n}return t(e).hide(),i}var r=this;if(this.complete&&this.width+this.height!==0)e();else{var s=new Image;s.src=this.src,t(s).load(function(){e()})}})}}(jQuery),function(t){"use strict";function e(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a]);return t}function a(t,a){this.el=t,this.options=e({},this.options),e(this.options,a),this._init()}a.prototype.options={start:0},a.prototype._init=function(){this.tabs=this.el.find("nav > ul > li"),this.items=this.el.find(".content-wrap > section"),this.current=-1,0!=this.tabs.length&&(this._show(),this._initEvents())},a.prototype._initEvents=function(){var t=this;this.el.find("nav > ul > li").each(function(){var e=jQuery(this).attr("data-order");jQuery(this).on("click touchstart",function(a){a.preventDefault(),t._show(e)})})},a.prototype._show=function(t){this.current>=0&&(this.tabs[this.current].className=this.items[this.current].className=""),this.current=void 0!=t?t:this.options.start>=0&&this.options.start<this.items.length?this.options.start:0,this.tabs[this.current].className="tab-current",this.items[this.current].className="content-current"},t.TS_VCVSC_CBPFWTabs=a}(window),function(t){t.fn.addBack=t.fn.addBack||t.fn.andSelf,t.fn.extend({actual:function(e,a){if(!this[e])throw'$.actual => The jQuery method "'+e+'" you called does not exist';var i,r,s={absolute:!1,clone:!1,includeMargin:!1},n=t.extend(s,a),o=this.eq(0);if(n.clone===!0)i=function(){var t="position: absolute !important; top: -1000 !important; ";o=o.clone().attr("style",t).appendTo("body")},r=function(){o.remove()};else{var d,u=[],l="";i=function(){d=o.parents().addBack().filter(":hidden"),l+="visibility: hidden !important; display: block !important; ",n.absolute===!0&&(l+="position: absolute !important; "),d.each(function(){var e=t(this),a=e.attr("style");u.push(a),e.attr("style",a?a+";"+l:l)})},r=function(){d.each(function(e){var a=t(this),i=u[e];void 0===i?a.removeAttr("style"):a.attr("style",i)})}}i();var c=/(outer)/.test(e)?o[e](n.includeMargin):o[e]();return r(),c}})}(jQuery);var roman=new Array;roman=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];var decimal=new Array;decimal=[1e3,900,500,400,100,90,50,40,10,9,5,4,1],function(t){function e(){jQuery(".ts-background").each(function(){if("false"==jQuery(this).attr("data-inline")){var e="true"==jQuery(this).attr("data-vc-full-width")?!0:!1,a=0,i=(jQuery(window).width(),"true"==jQuery(this).attr("data-svgshape")?!0:!1,parseInt(jQuery(this).attr("data-random")),jQuery(this).attr("data-type")),r=jQuery(this).attr("data-height"),s=jQuery(this).attr("data-screen"),n=parseInt(jQuery(this).attr("data-offset")),o=jQuery(this).hasClass("ts-background-blur");if(o)var d=parseInt(jQuery(this).attr("data-blur"));else var d=0;if("undefined"==typeof jQuery(this).attr("data-break-parents")||1==e)return;var u=parseInt(jQuery(this).attr("data-break-parents"));if(isNaN(u)||0==u&&"video"!=i)return;"movement"==i?($horizontalAdjust=parseInt(jQuery(this).attr("data-movex")),$verticalAdjust=parseInt(jQuery(this).attr("data-movey"))):($horizontalAdjust=0,$verticalAdjust=0);for(var l=jQuery(this).parent(),c=l,h=0;u>h&&!c.is("html");h++)c=c.parent(),"none"!=c.css("max-width")&&(a=parseInt(c.css("max-width").replace("px","").replace("%","").replace("em","")));var p=(c.width()+parseInt(c.css("paddingLeft"))+parseInt(c.css("paddingRight"))+parseInt(c.css("marginLeft"))+parseInt(c.css("marginRight")),-(l.offset().left-c.offset().left+1));if(p>0&&(p=0),jQuery(this).css("min-height","0px"),$heightMin=jQuery(this).parent().outerHeight(),$heightBrowser=t(window).height()-n,$widthMin=c.outerWidth(),$heightMin>parseInt(r));else{parseInt(r)}if("true"==s&&($heightMin=$heightBrowser),jQuery(this).addClass("fullwidth"),jQuery(this).css({position:"absolute","min-height":$heightMin+"px",width:$widthMin+d+"px","min-width":$widthMin+d+"px",left:parseInt(p)-d+"px"}),d>0&&jQuery(this).css({clip:"rect("+d+"px, "+($widthMin+d)+"px, "+$heightMin+"px, "+d+"px)"}),jQuery(this).attr("data-set-height",$heightMin),jQuery(this).attr("data-set-width",$widthMin+d),jQuery(this).attr("data-set-ratio",($widthMin+d)/$heightMin),"true"==s?l.addClass("fullwidth").css("min-height",parseInt($heightMin)+"px"):l.addClass("fullwidth").css("min-height",parseInt(r)+"px"),"video"==i){var m=$widthMin+d,f=$heightMin;jQuery(this).find(".ts-background-video-holder").width(m),jQuery(this).find(".ts-background-video-holder").height(f),jQuery(this).find(".ts-background-video-holder").find(".wallpaper-container").width(m).height(f),jQuery(this).find(".ts-background-video-holder").find("video").width(m)}if("movement"==i){var g=jQuery(this).width(),y=jQuery(this).height(),v=g/y,j=$widthMin+2*$horizontalAdjust*v,Q=-1*parseInt(jQuery(this).css("left"));jQuery(this).width(j).css("left","-"+(Q+$horizontalAdjust)+"px").css("max-width",j+"px")}}})}function i(){jQuery(".ts-image-full-frame").each(function(){if("false"==jQuery(this).attr("data-inline")){var t=0,e=(jQuery(window).width(),0),a="true"==jQuery(this).attr("data-svgshape")?!0:!1,i=parseInt(jQuery(this).attr("data-random")),r=jQuery(this).hasClass("ts-background-blur");if(r)var s=parseInt(jQuery(this).attr("data-blur")),n=1;else var s=0,n=0;if("undefined"==typeof jQuery(this).attr("data-break-parents"))return;var o=parseInt(jQuery(this).attr("data-break-parents"));if(isNaN(o)||0==o)return;jQuery(this).hasClass("ts-image-full-movement")?($horizontalAdjust=parseInt(jQuery(this).attr("data-movex")),$verticalAdjust=parseInt(jQuery(this).attr("data-movey")),jQuery(this).find("img.ts-imagefull").width("100%")):($horizontalAdjust=0,$verticalAdjust=0);for(var d=jQuery(this).parent(),u=d,l=0;o>l&&!u.is("html");l++)u=u.parent(),"none"!=u.css("max-width")&&(t=parseInt(u.css("max-width").replace("px","").replace("%","").replace("em","")));var c=(u.width()+parseInt(u.css("paddingLeft"))+parseInt(u.css("paddingRight"))+parseInt(u.css("marginLeft"))+parseInt(u.css("marginRight")),-(d.offset().left-u.offset().left+1)-parseInt(d.css("marginLeft"))-parseInt(d.css("paddingLeft")));if(c>0&&(c=0),$heightMin=jQuery(this).find("img.ts-imagefull").height(),$widthMin=u.outerWidth(),$heightMin>parseInt(e));else{parseInt(e)}if(jQuery(this).addClass("fullwidth"),jQuery(this).css({"min-height":$heightMin+"px",width:$widthMin+s+"px","min-width":$widthMin+s+"px",left:parseInt(c)-s+"px"}),s>0&&jQuery(this).css({clip:"rect("+s+"px, "+($widthMin+s)+"px, "+$heightMin+"px, "+s+"px)"}),jQuery(this).hasClass("ts-image-full-movement")){var h=jQuery(this).find("img.ts-imagefull").width(),p=jQuery(this).find("img.ts-imagefull").height(),m=h/p,f=$widthMin+2*$horizontalAdjust*m;jQuery(this).find("img.ts-imagefull").width(f).css("left","-"+$horizontalAdjust+"px").css("max-width",f+"px"),$horizontalAdjust=jQuery(this).find("img.ts-imagefull").height()-p,jQuery(this).find("img.ts-imagefull").css("top","-"+$horizontalAdjust/2+"px")}a&&(jQuery("#ts-background-separator-top-"+i).css({position:"absolute",width:$widthMin+s+"px","min-width":$widthMin+s+"px",left:parseInt(c)-s+"px","margin-top":-1-s-n+"px"}),jQuery("#ts-background-separator-bottom-"+i).css({position:"absolute",width:$widthMin+s+"px","min-width":$widthMin+s+"px",left:parseInt(c)-s+"px","margin-bottom":-1-s-n+"px"}))}})}function r(){jQuery(".ts-iframe-full-frame").each(function(){if("false"==jQuery(this).attr("data-inline")){var t=0,e=(jQuery(window).width(),0),a=2*parseInt(jQuery(this).attr("data-border"));if("undefined"==typeof jQuery(this).attr("data-break-parents"))return;var i=parseInt(jQuery(this).attr("data-break-parents"));if(isNaN(i)||0==i)return;for(var r=jQuery(this).parent(),s=r,n=0;i>n&&!s.is("html");n++)s=s.parent(),"none"!=s.css("max-width")&&(t=parseInt(s.css("max-width").replace("px","").replace("%","").replace("em","")));var o=(s.width()+parseInt(s.css("paddingLeft"))+parseInt(s.css("paddingRight"))+parseInt(s.css("marginLeft"))+parseInt(s.css("marginRight")),-(r.offset().left-s.offset().left+1)-parseInt(r.css("marginLeft"))-parseInt(r.css("paddingLeft")));if(o>0&&(o=0),$heightMin=0,$widthMin=s.outerWidth(),$heightMin>parseInt(e));else{parseInt(e)}jQuery(this).addClass("fullwidth"),jQuery(this).css({"min-height":$heightMin+"px",width:$widthMin-a+"px","min-width":$widthMin-a+"px",left:parseInt(o)+"px"})}})}function s(){jQuery(".ts-lightbox-nacho-full-frame").each(function(){if("false"==jQuery(this).attr("data-inline")){var t=0,e=(jQuery(window).width(),0);if("undefined"==typeof jQuery(this).attr("data-break-parents"))return;var a=parseInt(jQuery(this).attr("data-break-parents"));if(isNaN(a)||0==a)return;for(var i=jQuery(this).parent(),r=i,s=0;a>s&&!r.is("html");s++)r=r.parent(),"none"!=r.css("max-width")&&(t=parseInt(r.css("max-width").replace("px","").replace("%","").replace("em","")));var n=(r.width()+parseInt(r.css("paddingLeft"))+parseInt(r.css("paddingRight"))+parseInt(r.css("marginLeft"))+parseInt(r.css("marginRight")),-(i.offset().left-r.offset().left+1)-parseInt(i.css("marginLeft"))-parseInt(i.css("paddingLeft")));if(n>0&&(n=0),$heightMin=0,$widthMin=r.outerWidth(),$heightMin>parseInt(e));else{parseInt(e)}jQuery(this).addClass("fullwidth"),jQuery(this).css({"min-height":$heightMin+"px",width:$widthMin+"px","min-width":$widthMin+"px",left:parseInt(n)+"px"})}})}t(document).ready(function(){function n(){jQuery(".ts-skillset-raphael-container").each(function(){var t=jQuery(this).find("svg");0!=t.length&&(t.children().off().unbind(),t.off().remove());var e=jQuery(this).find(".ts-skillset-raphael-chart"),i=e.attr("data-raphael"),r=e.parent().width(),s=r/2,n="true"==e.attr("data-randomstart")?!0:!1,o="true"==e.attr("data-circlecustom")?!0:!1;if(o)var d=e.attr("data-circlecolor");else var d="none";var u=e.attr("data-textcolor"),l=e.attr("data-textdefault"),c=parseInt(e.attr("data-textsize")),h=parseInt(e.attr("data-maxstroke")),p=parseInt(e.attr("data-spacestroke")),m=l,f=140,g=250,v=20,j=Raphael(i,r,r);j.customAttributes.arc=function(t,e,i){var r=3.6*t,o=360==r?359.99:r;if(n)var d=240,u=91;else var d=0,u=0;return random=Math.floor(Math.random()*(d-u+1)+u),a=(random-o)*Math.PI/180,b=random*Math.PI/180,sx=s+i*Math.cos(b),sy=s-i*Math.sin(b),x=s+i*Math.cos(a),y=s-i*Math.sin(a),path=[["M",sx,sy],["A",i,i,0,+(o>180),1,x,y]],{path:path,stroke:e}};var Q=(j.circle(s,s,f/2).attr({stroke:"none",fill:d}),j.text(s,s,m).attr({font:c+"px Verdana",fill:u}).toFront()),w=jQuery(this).find(".ts-skillset-raphael-arch").length;if(p>0)var C=(w+1)*p+v/2;else var C=w+5;var _=Math.floor((r-f)/2),k=Math.floor((_-C)/w);k>h&&(k=h);var I=k+p,S=f/2-k/2;jQuery(this).find(".ts-skillset-raphael-arch").each(function(){var t=jQuery(this),e=t.find(".color").val(),a=t.find(".percent").val(),i=t.find(".name").val(),r={"stroke-width":k};S+=I;var s=j.path().attr(r).attr({arc:[a,e,S]});s.mouseover(function(){this.animate({"stroke-width":k+v,opacity:.9},800,"elastic"),"VML"!=Raphael.type&&this.toFront(),Q.stop().animate({opacity:0},g,">",function(){this.attr({text:i+"\n"+a+"%"}).animate({opacity:1},g,"<")})}).mouseout(function(){this.stop().animate({"stroke-width":k,opacity:1},4*g,"elastic"),Q.stop().animate({opacity:0},g,">",function(){Q.attr({text:m}).animate({opacity:1},g,"<")})})})})}function o(){jQuery(".ts-figure-navigation-container").each(function(){var t="true"==jQuery(this).attr("data-frontend")?!0:!1,e=jQuery(this).width(),a=parseInt(jQuery(this).attr("data-minwidth")),i="true"==jQuery(this).attr("data-widthfull")?!0:!1,r=jQuery(this).find(".ts-figure-navigation-item").length,s=a*r;if(0==t)if(s>e&&i===!1){for(var n=0;r>n;n++)if(e>=(r-n)*a){$itemwidth=100/(r-n),jQuery(this).find(".ts-figure-navigation-item").css("width",$itemwidth+"%").attr("data-width",$itemwidth);break}}else a>e||i===!0?jQuery(this).find(".ts-figure-navigation-item").css("width","100%").attr("data-width","100"):($itemwidth=100/r,jQuery(this).find(".ts-figure-navigation-item").css("width",$itemwidth+"%").attr("data-width",$itemwidth));else jQuery(this).find(".ts-figure-navigation-item").css("width","100%").attr("data-width","100");jQuery(this).find(".ts-figure-navigation-item").each(function(){if(jQuery(this).hasClass("ts-figure-navigation-hover")){var t=jQuery(this),e=(t.attr("data-frontend"),t.attr("data-group"),t.find(".ts-figure-navigation-title")),a=t.find(".ts-figure-navigation-image"),i=t.find(".ts-figure-navigation-handle"),r=t.find(".ts-figure-navigation-content"),s=t.find(".ts-figure-navigation-button");t.css("height","100px"),r.css("height","auto");var n=e.outerHeight(!0)+a.outerHeight(!0)+i.outerHeight(!0)+r.outerHeight(!0)+s.outerHeight(!0);t.css("height",n+"px");var o=t.find(".ts-figure-navigation-image").height();r.css("height",r.height()+"px"),t.find(".ts-figure-navigation-figure").css({height:o+"px"}),t.find(".ts-figure-navigation-content").stop(!0).animate({opacity:1},500)}})})}function d(){jQuery(".ts-horizontal-steps").each(function(){var t=jQuery(this),e="true"==t.attr("data-frontend")?!0:!1,a=t.width(),i=parseInt(t.attr("data-lastwidth")),r=0,s=0,n=parseInt(t.attr("data-minwidth")),o=parseInt(t.attr("data-iconsize")),d=parseInt(t.attr("data-iconmax")),u=t.find(".ts-horizontal-steps-item").length,l=n*u,c=t.find(".ts-horizontal-steps-item"),h=t.find(".ts-horizontal-step-icon"),p=0,m=0,f=0,g=0,y=[],v=[],j=!1;if(1==e);else if(a!=i){if(t.attr("data-lastwidth",a),c.css("height","auto"),l>a){for(var Q=0;u>Q;Q++)if(a>=(u-Q)*n){r=100/(u-Q),s=a/100*r/100*75,$height_icon=s*o>d?d:s*o,$margin_image=(s-$height_icon)/2,p=a/100*r,t.find(".ts-horizontal-steps-item").css("width",Math.floor(a/100*r)+"px").attr("data-width",Math.floor(a/100*r)),t.find(".ts-horizontal-steps-item").find(".ts-horizontal-step-icon").css("width",s+"px").css("height",s+"px"),t.find(".ts-horizontal-steps-item").find(".ts-horizontal-step-icon i").css("line-height",s+"px").css("font-size",$height_icon+"px"),t.find(".ts-horizontal-steps-item").find(".ts-horizontal-step-icon img").css("height",$height_icon+"px").css("width",$height_icon+"px").css("margin-top",$margin_image+"px");break}}else n>a?(p=a,s=a/100*75,$height_icon=s*o>d?d:s*o,$margin_image=(s-$height_icon)/2,c.css("width","100%").attr("data-width","100"),h.css("width",s+"px").css("height",s+"px"),h.find("i").css("line-height",s+"px").css("font-size",$height_icon+"px"),h.find("img").css("height",$height_icon+"px").css("width",$height_icon+"px").css("margin-top",$margin_image+"px")):(r=100/u,s=a/100*r/100*75,$height_icon=s*o>d?d:s*o,$margin_image=(s-$height_icon)/2,p=a/100*r,c.css("width",Math.floor(a/100*r)+"px").attr("data-width",Math.floor(a/100*r)),h.css("width",s+"px").css("height",s+"px"),h.find("i").css("line-height",s+"px").css("font-size",$height_icon+"px"),h.find("img").css("height",$height_icon+"px").css("width",$height_icon+"px").css("margin-top",$margin_image+"px"));setTimeout(function(){c.each(function(t){m+=jQuery(this).width(),m>a?(y.push(t),m=jQuery(this).width()):v.push(t)}),c.first().addClass("ts-horizontal-steps-first"),jQuery.each(y,function(t,e){c.eq(e-1).addClass("ts-horizontal-steps-break").addClass("ts-horizontal-steps-arrow")}),jQuery.each(v,function(t,e){c.eq(e-1).removeClass("ts-horizontal-steps-break").removeClass("ts-horizontal-steps-arrow")}),c.last().addClass("ts-horizontal-steps-break").addClass("ts-horizontal-steps-last"),t.find(".ts-horizontal-steps-break").length==u?(j=!0,c.css("height","auto").addClass("ts-horizontal-steps-full")):(j=!1,c.removeClass("ts-horizontal-steps-full"),jQuery.each(y,function(t,e){f=0,c.slice(g,e).each(function(){jQuery(this).height()>f&&(f=jQuery(this).height())}),c.slice(g,e).css("height",f+"px"),g=e}))},500)}})}function u(){jQuery(".ts-hover-effects-container").each(function(){var t=jQuery(this),e=t.find(".ts-hover-effects-grid"),a=t.find("figure");e.css("height","auto");var i=t.find("img");i.css("height","auto"),i.css("width","100%");var r=i.height(),s=i.width();e.height(r),a.hasClass("ts-hover-effect-lily")?i.width(s+50):a.hasClass("ts-hover-effect-layla")?i.height(r+40):a.hasClass("ts-hover-effect-roxy")||a.hasClass("ts-hover-effect-milo")?i.width(s+60):a.hasClass("ts-hover-effect-sarah")?i.width(s+20):a.hasClass("ts-hover-effect-lexi")&&i.width(s+15)})}function l(){[].slice.call(document.querySelectorAll(".ts-image-svg-main > .ts-image-svg-wrapper")).forEach(function(t){function e(){r.animate({path:d.to},s,o)}function a(){r.animate({path:d.from},s,o)}t.style.display="none";{var i=Snap(t.querySelector("svg")),r=i.select("path"),s=parseInt(t.getAttribute("data-speed")),n=t.getAttribute("data-easing");t.clientWidth,t.clientHeight}if("easeinout"==n)var o=mina.easeinout;else var o=mina.backout;var d={from:r.attr("d"),to:t.getAttribute("data-path-hover")};t.addEventListener("mouseenter",e,!1),t.addEventListener("touchstart",e,!1),t.addEventListener("touchenter",e,!1),t.addEventListener("mouseleave",a,!1),t.addEventListener("touchend",a,!1),t.addEventListener("touchleave",a,!1),t.style.display="block"})}jQuery(window).on("orientationchange",function(){}),jQuery(".ts-device-visibility").each(function(){var t=jQuery(this),e=t.next(),a=e.next();a.hasClass("vc_row-full-width")||(a=e);var i="true"==t.attr("data-showremove")?!0:!1,r=!1,s=!1,n="true"==t.attr("data-largeshow")?!0:!1,o=parseInt(t.attr("data-largelimit")),d="true"==t.attr("data-mediumshow")?!0:!1,u=parseInt(t.attr("data-mediumlimit")),l="true"==t.attr("data-smallshow")?!0:!1,c=parseInt(t.attr("data-smalllimit")),h="true"==t.attr("data-extrashow")?!0:!1,p=parseInt(t.attr("data-extralimit")),m=jQuery(window).width(),f=function(){m=jQuery(window).width(),m>=p&&c>m&&!h?i&&!r?(e.off().remove(),a.off().remove(),t.off().remove(),r=!0):(e.addClass("ts-device-row-hidden"),a.addClass("ts-device-row-hidden"),jQuery(this).addClass("ts-device-row-hidden"),s=!0):m>=c&&u>m&&!l?i&&!r?(e.off().remove(),a.off().remove(),t.off().remove(),r=!0):(e.addClass("ts-device-row-hidden"),a.addClass("ts-device-row-hidden"),jQuery(this).addClass("ts-device-row-hidden"),s=!0):m>=u&&o>m&&!d?i&&!r?(e.off().remove(),a.off().remove(),t.off().remove(),r=!0):(e.addClass("ts-device-row-hidden"),a.addClass("ts-device-row-hidden"),jQuery(this).addClass("ts-device-row-hidden"),s=!0):m>=o&&!n?i&&!r?(e.off().remove(),a.off().remove(),t.off().remove(),r=!0):(e.addClass("ts-device-row-hidden"),a.addClass("ts-device-row-hidden"),jQuery(this).addClass("ts-device-row-hidden"),s=!0):(e.removeClass("ts-device-row-hidden"),a.removeClass("ts-device-row-hidden"),jQuery(this).removeClass("ts-device-row-hidden"),s=!1)};f(),jQuery(window).on("debouncedresize",function(){f()})}),jQuery(window).on("debouncedresize",function(){n()});var c=0;jQuery(document).on("mouseenter touchstart",".ts-figure-navigation-item-hover",function(){var t=jQuery(this),e=t.attr("data-frontend"),a=t.attr("data-group"),i=t.find(".ts-figure-navigation-title"),r=t.find(".ts-figure-navigation-image"),s=t.find(".ts-figure-navigation-handle"),n=t.find(".ts-figure-navigation-content"),o=t.find(".ts-figure-navigation-button"),d="true"==jQuery(this).attr("data-multiple")?!0:!1;if("false"==e){0==d&&jQuery(".ts-figure-navigation-hover.ts-figure-navigation-group"+a).trigger("mouseleave");var u=i.outerHeight(!0)+r.outerHeight(!0)+s.outerHeight(!0)+n.outerHeight(!0)+o.outerHeight(!0);t.css("height",u+"px");var l=t.find(".ts-figure-navigation-image").height();n.css("height",n.height()+"px"),t.find(".ts-figure-navigation-figure").css({height:l+"px"}),t.addClass("ts-figure-navigation-hover"),t.find(".ts-figure-navigation-content").stop(!0).animate({opacity:1},500)}}),jQuery(document).on("mouseleave touchend",".ts-figure-navigation-item-hover",function(){{var t=jQuery(this),e=t.attr("data-frontend");t.attr("data-group")}"false"==e&&(t.removeClass("ts-figure-navigation-hover"),t.find(".ts-figure-navigation-content").stop(!0).animate({opacity:0},100),t.find(".ts-figure-navigation-figure").css({height:"0px"}),t.css("height","100px"),t.find(".ts-figure-navigation-content").css("height","auto"))}),jQuery(document).on("click",".ts-figure-navigation-item-click",function(t){var e=jQuery(this),a=(e.attr("data-frontend"),e.attr("data-group")),i=e.find(".ts-figure-navigation-title"),r=e.find(".ts-figure-navigation-image"),s=e.find(".ts-figure-navigation-handle"),n=e.find(".ts-figure-navigation-content"),o=e.find(".ts-figure-navigation-button"),d="true"==jQuery(this).attr("data-multiple")?!0:!1;if(e.hasClass("ts-figure-navigation-hover")&&!jQuery(t.target).hasClass("ts-figure-navigation-button"))e.removeClass("ts-figure-navigation-hover"),e.find(".ts-figure-navigation-content").stop(!0).animate({opacity:0},100),e.find(".ts-figure-navigation-figure").css({height:"0px"}),e.css("height","100px"),e.find(".ts-figure-navigation-content").css("height","auto");else{0==d&&jQuery(".ts-figure-navigation-hover.ts-figure-navigation-group"+a).trigger("click");var u=i.outerHeight(!0)+r.outerHeight(!0)+s.outerHeight(!0)+n.outerHeight(!0)+o.outerHeight(!0);e.css("height",u+"px");var l=e.find(".ts-figure-navigation-image").height();n.css("height",n.height()+"px"),e.find(".ts-figure-navigation-figure").css({height:l+"px"}),e.addClass("ts-figure-navigation-hover"),e.find(".ts-figure-navigation-content").stop(!0).animate({opacity:1},500)}}),jQuery(".ts-figure-navigation-container").each(function(){c++;var t=(jQuery(this).find(".ts-figure-navigation-item").length,jQuery(this).attr("data-numbering")),e=parseInt(jQuery(this).attr("data-start")),a=jQuery(this).attr("data-trigger"),i="true"==jQuery(this).attr("data-multiple")?!0:!1,r=0+e-1;jQuery(this).find(".ts-figure-navigation-item").each(function(){jQuery(this).addClass("ts-figure-navigation-group"+c).addClass("ts-figure-navigation-item-"+a).attr("data-group",c).attr("data-multiple",i),jQuery(this).find(".ts-figure-navigation-handle-text").length>0&&(r++,"number"==t?$running=r:"roman"==t?$running=TS_VCSC_DecimalToRoman(r):"letter"==t&&($running=TS_VCSC_CodeToCharacter(r-1).toUpperCase()),jQuery(this).find(".ts-figure-navigation-handle-text").empty().html($running))})}),o(),jQuery(window).on("debouncedresize",function(){o()}),d(),jQuery(window).on("debouncedresize",function(){d()}),jQuery(window).on("debouncedresize",function(){u()}),"undefined"!=typeof jQuery.fn.waypoint?0==TS_VCSC_MobileDevice&&jQuery(".ts-textillate").waypoint({handler:function(){var t=jQuery(this).attr("data-in-effect"),e=jQuery(this).attr("data-in-sync"),a=jQuery(this).attr("data-in-shuffle"),i=jQuery(this).attr("data-in-reverse"),r=jQuery(this).attr("data-out-effect"),s=jQuery(this).attr("data-out-sync"),n=jQuery(this).attr("data-out-shuffle"),o=jQuery(this).attr("data-in-reverse"),d=jQuery(this).attr("data-loop"),u=jQuery(this).attr("data-pause"),l=parseInt(jQuery(this).attr("data-delay"));jQuery(this).textillate({selector:".texts",loop:"true"==d?!0:!1,minDisplayTime:u,initialDelay:l,autoStart:!0,inEffects:[t],outEffects:[r],"in":{effect:t,delayScale:1.5,delay:50,sync:"true"==e?!0:!1,shuffle:"true"==a?!0:!1,reverse:"true"==i?!0:!1,callback:function(){}},out:{effect:r,delayScale:1.5,delay:50,sync:"true"==s?!0:!1,shuffle:"true"==n?!0:!1,reverse:"true"==o?!0:!1,callback:function(){}},callback:function(){}})
},offset:"85%",triggerOnce:!0}):0==TS_VCSC_MobileDevice&&jQuery(".ts-textillate").each(function(){var t=jQuery(this).attr("data-in-effect"),e=jQuery(this).attr("data-in-sync"),a=jQuery(this).attr("data-in-shuffle"),i=jQuery(this).attr("data-in-reverse"),r=jQuery(this).attr("data-out-effect"),s=jQuery(this).attr("data-out-sync"),n=jQuery(this).attr("data-out-shuffle"),o=jQuery(this).attr("data-in-reverse"),d=jQuery(this).attr("data-loop"),u=parseInt(jQuery(this).attr("data-delay"));jQuery(this).textillate({selector:".texts",loop:"true"==d?!0:!1,minDisplayTime:3e3,initialDelay:u,autoStart:!0,inEffects:[t],outEffects:[r],"in":{effect:t,delayScale:1.5,delay:50,sync:"true"==e?!0:!1,shuffle:"true"==a?!0:!1,reverse:"true"==i?!0:!1,callback:function(){}},out:{effect:r,delayScale:1.5,delay:50,sync:"true"==s?!0:!1,shuffle:"true"==n?!0:!1,reverse:"true"==o?!0:!1,callback:function(){}},callback:function(){}})}),jQuery(".ts-title-typed-container").each(function(){var t=jQuery(this),e="true"==t.attr("data-viewport")?!0:!1,a="true"==t.attr("data-frontend")?!0:!1,i="true"==t.attr("data-mobile")?!0:!1,r=t.find(".ts-title-typed-string"),s=t.attr("data-pretext"),n=t.attr("data-strings"),o=t.attr("data-title"),d=n.split(","),u=parseInt(t.attr("data-startdelay")),l=parseInt(t.attr("data-typespeed")),c=parseInt(t.attr("data-backdelay")),h=parseInt(t.attr("data-backspeed")),p=parseInt(t.attr("data-wrapper")),m="true"==t.attr("data-loop")?!0:!1;if(m)var f="false"==t.attr("data-loopcount")?!1:parseInt(t.attr("data-loopcount"));else var f=0;var g=0,y="true"==t.attr("data-showcursor")?!0:!1,v="true"==t.attr("data-removecursor")?!0:!1,j="true"==t.attr("data-showall")?!0:!1;1==a?r.text(s+n):1==TS_VCSC_MobileDevice&&0==i?(t.empty().html(""!=o?o:s+n),t.wrapInner("<"+p+' class="ts-title-typed-mobile"></'+p+">")):1==e?t.waypoint({handler:function(){r.typed({strings:d,typeSpeed:l,backSpeed:h,startDelay:u,backDelay:c,loop:m,loopCount:f,showCursor:y,cursorChar:"|",attr:null,callback:function(){g++,m?m&&0!=f&&(v&&g==f&&t.find(".typed-cursor").remove(),j&&g==f&&r.empty().text(s+n.replace(",",", "))):(v&&t.find(".typed-cursor").remove(),j&&r.empty().text(s+n.replace(",",", ")))},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}})},offset:"100%",triggerOnce:!0}):r.typed({strings:d,typeSpeed:l,backSpeed:h,startDelay:u,backDelay:c,loop:m,loopCount:f,showCursor:y,attr:null,callback:function(){g++,m?m&&0!=f&&(v&&g==f&&t.find(".typed-cursor").remove(),j&&g==f&&r.empty().text(s+n.replace(",",", "))):(v&&t.find(".typed-cursor").remove(),j&&r.empty().text(s+n.replace(",",", ")))},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}})}),jQuery(".ts-title-ticker-container").each(function(){var t=jQuery(this),e=t.find(".ts-title-ticker-animated"),a=t.find(".ts-title-ticker-list").find("li"),i=a.length,r=t.attr("data-direction"),s="true"==t.attr("data-controls")?!0:!1,n="true"==t.attr("data-reverse")?!0:!1,o="true"==t.attr("data-viewport")?!0:!1,d=("true"==t.attr("data-frontend")?!0:!1,"true"==t.attr("data-showall")?!0:!1),u=parseInt(t.attr("data-items")),l=parseInt(t.attr("data-delay")),c=parseInt(t.attr("data-speed")),h=parseInt(t.attr("data-break")),p=t.attr("data-alignment"),m="true"==t.attr("data-pretext")?!0:!1,f="true"==t.attr("data-hover")?!0:!1,g=t.find(".ts-title-ticker-controls"),y=t.attr("data-position");if("left"==y||"right"==y)var v="inline-block";else var v="block";var j=t.find(".ts-title-ticker-prev"),Q=t.find(".ts-title-ticker-next"),w=t.find(".ts-title-ticker-pause"),b=t.find(".ts-title-ticker-play");1==o?t.waypoint({handler:function(){setTimeout(function(){e.TS_VCSC_vTicker({speed:c,pause:h,showItems:d?i:u,mousePause:f,height:0,animate:!0,margin:0,padding:0,startPaused:!1,controls:s,controlsPosition:y,preText:m,direction:r,alignment:p,reverseList:n}),g&&g.css("display",v)},l)},offset:"100%",triggerOnce:!0}):setTimeout(function(){e.TS_VCSC_vTicker({speed:c,pause:h,showItems:d?i:u,mousePause:f,height:0,animate:!0,margin:0,padding:0,startPaused:!1,controls:s,controlsPosition:y,preText:m,direction:r,alignment:p,reverseList:n}),g&&g.css("display",v)},l),g&&(Q.on("mousedown touchstart",function(){event.preventDefault(),e.TS_VCSC_vTicker("next",{speed:250,animate:!0})}).on("mouseenter touchstart",function(){e.TS_VCSC_vTicker("pause",!0)}).on("mouseleave touchend",function(){"false"==w.attr("data-active")&&e.TS_VCSC_vTicker("pause",!1)}),j.on("mousedown touchstart",function(){event.preventDefault(),e.TS_VCSC_vTicker("prev",{speed:250,animate:!0})}).on("mouseenter touchstart",function(){e.TS_VCSC_vTicker("pause",!0)}).on("mouseleave touchend",function(){"false"==w.attr("data-active")&&e.TS_VCSC_vTicker("pause",!1)}),w.on("mousedown touchstart",function(){event.preventDefault(),e.TS_VCSC_vTicker("pause",!0),w.css("display","none").attr("data-active","true"),b.css("display","inline-block").attr("data-active","false")}),b.on("mousedown touchstart",function(){event.preventDefault(),e.TS_VCSC_vTicker("pause",!1),b.css("display","none").attr("data-active","true"),w.css("display","inline-block").attr("data-active","false")}))}),jQuery(".ts-splitflap-wrapper").each(function(){var t=jQuery(this),e="true"==t.attr("data-frontend")?!0:!1,a="true"==t.attr("data-mobile")?!0:!1,i="true"==t.attr("data-restart")?!0:!1,r=t.attr("data-chars"),s=t.attr("data-text"),n=t.attr("data-start"),o="true"==t.attr("data-equalize")?!0:!1,d="true"==t.attr("data-dotted")?!0:!1,u=parseInt(t.attr("data-speed")),l=(t.attr("data-size"),t.attr("data-image")),c=t.attr("data-wrapper"),h=parseInt(t.attr("data-height")),p=parseInt(t.attr("data-width")),m="true"==t.attr("data-viewport")?!0:!1,f=parseInt(t.attr("data-delay"));0==e&&(1==TS_VCSC_MobileDevice&&0==a?t.wrapInner("<"+c+' class="ts-splitflap-mobile"></'+c+">"):1==m?t.waypoint({handler:function(){t.TS_VCSC_SplitFlap({autoplay:!0,text:s,textInit:n,textFill:" ",textEqual:o,textDots:d,delay:f,restart:i,image:l,charWidth:p,charHeight:h,charsMap:r,padDir:"left",padChar:" ",speed:u,speedVariation:2})},offset:"100%",triggerOnce:!0}):t.TS_VCSC_SplitFlap({autoplay:!0,text:s,textInit:n,textFill:" ",textEqual:o,textDots:d,delay:f,restart:i,image:l,charWidth:p,charHeight:h,charsMap:r,padDir:"left",padChar:" ",speed:u,speedVariation:2}))}),jQuery(".ts-login-form-container").each(function(){jQuery(this).find(".ts-tab-login-form").hide(),jQuery(this).find("ul.ts-tab-login-tabs li:first").addClass("ts-tab-active-login").show(),jQuery(this).find(".ts-tab-login-form:first").show(),jQuery(this).find("ul.ts-tab-login-tabs li").click(function(){jQuery("ul.ts-tab-login-tabs li").removeClass("ts-tab-active-login"),jQuery(this).addClass("ts-tab-active-login"),jQuery(".ts-tab-login-form").hide();var t=jQuery(this).find("a").attr("href");return jQuery.browser.msie,jQuery(t).show(),!1})}),jQuery(document).on("mouseenter touchstart",".ts-list-item",function(){var t=jQuery(this),e=t.find("i"),a=t.attr("data-animation");""!=a&&e.addClass(a)}),jQuery(document).on("mouseleave touchend",".ts-list-item",function(){var t=jQuery(this),e=t.find("i"),a=t.attr("data-animation");""!=a&&e.removeClass(a)}),jQuery(".ts-image-full-frame").each(function(){$image=jQuery(this),$image.hasClass("ts-image-full-movement")&&($allowX="true"==$image.attr("data-allowx")?!0:!1,$allowY="true"==$image.attr("data-allowy")?!0:!1,$moveX=parseInt($image.attr("data-movex")),$moveY=parseInt($image.attr("data-movey")),jQuery(this).find("img").attr("data-parallaxify-range-x",$moveX),jQuery(this).find("img").attr("data-parallaxify-range-y",$moveY),$image.parallaxify({horizontalParallax:$allowX,verticalParallax:$allowY,parallaxBackgrounds:!1,parallaxElements:!0,positionProperty:"transform",responsive:!1,useMouseMove:!0,useGyroscope:!0,alphaFilter:.9,motionType:"natural",mouseMotionType:"gaussian",inputPriority:"mouse",motionAngleX:80,motionAngleY:80,adjustBasePosition:!0,alphaPosition:.05}))}),0==TS_VCSC_MobileDevice&&jQuery(".ts-image-full-frame").each(function(){var t=jQuery(this).attr("data-marginleft"),e=jQuery(this).attr("data-marginright"),a=jQuery(this).attr("data-index");jQuery(this).css({"margin-left":parseInt(t)+"px","margin-right":parseInt(e)+"px","z-index":parseInt(a)})}),jQuery(window).on("debouncedresize",function(){l()}),jQuery(".ts-pageback-image").each(function(){var t=jQuery(this),e=(jQuery(this).attr("data-image"),jQuery(this).attr("data-raster"),jQuery(this).attr("data-inline"));0!=TS_VCSC_MobileDevice||"false"!=e||jQuery("body").hasClass("ts-body-background-image")?(1==TS_VCSC_MobileDevice||"false"==e)&&t.remove():(jQuery("body").prepend(t),jQuery("body").addClass("ts-body-background-image"))}),"undefined"!=typeof jQuery.fn.YTPlaylist&&jQuery(".ts-pageback-youtube").each(function(){var t=jQuery(this),e=jQuery(this).attr("data-video"),a=jQuery(this).attr("data-mute"),i=jQuery(this).attr("data-loop"),r=jQuery(this).attr("data-start"),s=jQuery(this).attr("data-raster"),n=jQuery(this).attr("data-controls"),o=jQuery(this).attr("data-inline");if(n="true"==n?!0:!1,r="true"==r?!0:!1,a="true"==a?!0:!1,i="true"==i?!0:!1,s="true"==s?!0:!1,0!=TS_VCSC_MobileDevice||"false"!=o||jQuery("body").hasClass("ts-body-background-video"))(1==TS_VCSC_MobileDevice||"false"==o)&&t.remove();else{var d=[{videoURL:e,showControls:n,autoPlay:r,mute:a,startAt:0,opacity:1,loop:i,addRaster:s}];jQuery(this).YTPlaylist(d,!0),jQuery("body").addClass("ts-body-background-video")}}),"undefined"!=typeof jQuery.fn.TS_VCSC_Wallpaper&&jQuery(".ts-pageback-video").each(function(){var t=jQuery(this),e=jQuery(this).attr("data-mp4"),a=jQuery(this).attr("data-ogv"),i=jQuery(this).attr("data-webm"),r=jQuery(this).attr("data-image"),s=jQuery(this).attr("data-mute"),n=jQuery(this).attr("data-loop"),o=jQuery(this).attr("data-remove"),d=jQuery(this).attr("data-start"),u=(jQuery(this).attr("data-stop"),jQuery(this).attr("data-hover"),jQuery(this).attr("data-controls")),l=jQuery(this).attr("data-index"),c=jQuery(this).attr("data-raster"),h=jQuery(this).attr("data-overlay"),p=jQuery(this).attr("data-inline");if(0!=TS_VCSC_MobileDevice||"false"!=p||jQuery("body").hasClass("ts-body-background-video"))(1==TS_VCSC_MobileDevice||"false"==p)&&t.remove();else{jQuery("body").prepend(t),u="true"==u?!0:!1,d="true"==d?!0:!1,s="true"==s?!0:!1,n="true"==n?!0:!1,o="true"==o?!0:!1;var m=jQuery(this).find(".ts-background-video-holder");m.TS_VCSC_Wallpaper({embedRatio:1.777777,controls:u,autoPlay:d,loop:n,mute:s,hoverPlay:!1,raster:c,overlay:h,source:{poster:r,mp4:e,ogg:a,webm:i},onReady:function(){jQuery("body").addClass("ts-body-background-video");var t=m.find("video"),e=m.find(".wallpaper-play").show(),a=m.find(".wallpaper-pause").show(),i=m.find(".wallpaper-mute").show(),r=m.find(".wallpaper-unmute").show();1==u?(e.on("mousedown touchend",function(){m.TS_VCSC_Wallpaper("play")}),a.on("mousedown touchstart",function(){m.TS_VCSC_Wallpaper("stop")}),i.on("mousedown touchend",function(){t.prop("muted",!0)}),r.on("mousedown touchend",function(){t.prop("muted",!1)}),t.bind("contextmenu",function(){return!1})):(e.hide(),a.hide(),i.hide(),r.hide())},onLoad:function(){},onFinish:function(){0==n&&1==o&&(m.TS_VCSC_Wallpaper("unload"),m.TS_VCSC_Wallpaper("destroy"),m.off().remove(),t.find(".ts-background-raster").remove(),""!=r&&t.css({"background-image":'url("'+r+'")',"background-repeat":"no-repeat","background-size":"cover","-webkit-background-size":"cover","margin-left":parseInt($margin_left)+"px","margin-right":parseInt($margin_right)+"px","z-index":parseInt(l)}))}})}}),jQuery(".ts-background-image").each(function(){var t=jQuery(this).next(),e=("true"==jQuery(this).attr("data-svgshape")?!0:!1,jQuery(this).attr("data-marginleft")),a=jQuery(this).attr("data-marginright"),i=jQuery(this).attr("data-paddingtop"),r=jQuery(this).attr("data-paddingbottom"),s=jQuery(this).attr("data-image"),n=jQuery(this).attr("data-size"),o=jQuery(this).attr("data-position"),d=jQuery(this).attr("data-repeat"),u=jQuery(this).attr("data-index"),l=jQuery(this).attr("data-height");0==TS_VCSC_MobileDevice?(t.addClass("ts-image-processing"),jQuery(this).bind("inview",function(t,e,a,i){if(e){var r=jQuery(this);r.addClass("ts-image-visible")}else{var r=jQuery(this);r.removeClass("ts-image-visible")}}),"contain"==t.css("backgroundSize")&&t.css("backgroundSize","cover"),t.css("backgroundSize",n),jQuery(this).css({"background-image":'url("'+s+'")',"background-repeat":d,"background-size":n,"-webkit-background-size":n,"background-attachment":"scroll","margin-left":parseInt(e)+"px","margin-right":parseInt(a)+"px","z-index":parseInt(u)}),jQuery(this).prependTo(t.addClass("ts-background-image-parent")),t.css({background:"","background-color":"","background-image":"","background-repeat":"","background-size":"","padding-top":parseInt(i)+"px","padding-bottom":parseInt(r)+"px","min-height":parseInt(l)+"px"}),"undefined"!=typeof t.attr("style")&&($row_styles=t.attr("style")+";"),t.attr("style",$row_styles+" background-image: none !important; background-color: transparent !important;"),t.removeClass("ts-image-processing"),jQuery(this).addClass("ts-background-processed")):("contain"==t.css("backgroundSize")&&t.css("backgroundSize","cover"),t.css("backgroundSize",n),jQuery(this).css({"background-image":'url("'+s+'")',"background-repeat":d,"background-size":n,"-webkit-background-size":n,"background-position":o,"background-attachment":"scroll","margin-left":parseInt(e)+"px","margin-right":parseInt(a)+"px","z-index":parseInt(u)}),jQuery(this).prependTo(t.addClass("ts-background-image-parent")),t.css({background:"","background-color":"transparent !important","background-image":"none !important","background-repeat":"","background-size":"","padding-top":parseInt(i)+"px","padding-bottom":parseInt(r)+"px","min-height":parseInt(l)+"px"}),"undefined"!=typeof t.attr("style")&&($row_styles=t.attr("style")+";"),t.attr("style",$row_styles+" background-image: none !important; background-color: transparent !important;"),jQuery(this).addClass("ts-background-processed"))}),jQuery(".ts-background-single").each(function(){var t=jQuery(this).next(),e=("true"==jQuery(this).attr("data-svgshape")?!0:!1,jQuery(this).attr("data-marginleft"),jQuery(this).attr("data-marginright"),jQuery(this).attr("data-paddingtop")),a=jQuery(this).attr("data-paddingbottom"),i=jQuery(this).attr("data-index"),r=jQuery(this).attr("data-height"),s=(jQuery(this).attr("data-color"),jQuery(this).attr("data-inline"));0==TS_VCSC_MobileDevice&&"false"==s?(t.addClass("ts-single-processing"),jQuery(this).bind("inview",function(t,e,a,i){if(e){var r=jQuery(this);r.addClass("ts-single-visible")}else{var r=jQuery(this);r.removeClass("ts-single-visible")}}),jQuery(this).css({"z-index":parseInt(i)}).prependTo(t.addClass("ts-background-single-parent")).show(),t.css({background:"","background-image":"","background-repeat":"","background-size":"","background-color":"","padding-top":parseInt(e)+"px","padding-bottom":parseInt(a)+"px","min-height":parseInt(r)+"px"}),"undefined"!=typeof t.attr("style")&&($row_styles=t.attr("style")+";"),t.attr("style",$row_styles+" background-image: none !important; background-color: transparent !important;"),t.removeClass("ts-single-processing"),jQuery(this).addClass("ts-background-processed")):(t.css({"background-image":"","background-repeat":"","background-size":"","background-position":"","background-color":"","padding-top":parseInt(e)+"px","padding-bottom":parseInt(a)+"px","min-height":parseInt(r)+"px"}),"undefined"!=typeof t.attr("style")&&($row_styles=t.attr("style")+";"),t.attr("style",$row_styles+" background-image: none !important; background-color: transparent !important;"),jQuery(this).prependTo(t.addClass("ts-background-single-parent")).show(),jQuery(this).addClass("ts-background-processed"))}),jQuery(".ts-background-gradient").each(function(){var t=jQuery(this).next(),e=("true"==jQuery(this).attr("data-svgshape")?!0:!1,jQuery(this).attr("data-marginleft"),jQuery(this).attr("data-marginright"),jQuery(this).attr("data-paddingtop")),a=jQuery(this).attr("data-paddingbottom"),i=jQuery(this).attr("data-index"),r=jQuery(this).attr("data-height"),s=(jQuery(this).css("background"),jQuery(this).attr("data-inline"));0==TS_VCSC_MobileDevice&&"false"==s?(t.addClass("ts-gradient-processing"),jQuery(this).bind("inview",function(t,e,a,i){if(e){var r=jQuery(this);r.addClass("ts-gradient-visible")}else{var r=jQuery(this);r.removeClass("ts-gradient-visible")}}),jQuery(this).css({"z-index":parseInt(i)}).prependTo(t.addClass("ts-background-gradient-parent")).show(),t.css({background:"","background-image":"","background-repeat":"","background-size":"","background-color":"","padding-top":parseInt(e)+"px","padding-bottom":parseInt(a)+"px","min-height":parseInt(r)+"px"}),"undefined"!=typeof t.attr("style")&&($row_styles=t.attr("style")+";"),t.attr("style",$row_styles+" background-image: none !important; background-color: transparent !important;"),t.removeClass("ts-gradient-processing"),jQuery(this).addClass("ts-background-processed")):(t.css({"background-image":"","background-repeat":"","background-size":"","background-position":"",background:"","padding-top":parseInt(e)+"px","padding-bottom":parseInt(a)+"px","min-height":parseInt(r)+"px"}),"undefined"!=typeof t.attr("style")&&($row_styles=t.attr("style")+";"),t.attr("style",$row_styles+" background-image: none !important; background-color: transparent !important;"),jQuery(this).prependTo(t.addClass("ts-background-gradient-parent")).show(),jQuery(this).addClass("ts-background-processed"))}),jQuery(".ts-background-fixed").each(function(){var t=(jQuery(this),"true"==jQuery(this).attr("data-svgshape")?!0:!1,jQuery(this).next()),e=jQuery(this).attr("data-marginleft"),a=jQuery(this).attr("data-marginright"),i=jQuery(this).attr("data-paddingtop"),r=jQuery(this).attr("data-paddingbottom"),s=jQuery(this).attr("data-image"),n=jQuery(this).attr("data-size"),o=jQuery(this).attr("data-position"),d=jQuery(this).attr("data-repeat"),u=jQuery(this).attr("data-index"),l=jQuery(this).attr("data-height"),c="",h=jQuery(this).attr("data-inline");0==TS_VCSC_MobileDevice&&"false"==h?(t.addClass("ts-fixed-processing"),jQuery(this).bind("inview",function(t,e,a,i){if(e){var r=jQuery(this);r.addClass("ts-fixed-visible")}else{var r=jQuery(this);r.removeClass("ts-fixed-visible")}}),"contain"==t.css("backgroundSize")&&t.css("backgroundSize","cover"),t.css("backgroundSize",n),jQuery(this).css({"background-image":'url("'+s+'")',"background-repeat":d,"background-size":n,"-webkit-background-size":n,"background-attachment":"fixed","-webkit-background-attachment":"fixed","background-position":o,"margin-left":parseInt(e)+"px","margin-right":parseInt(a)+"px","z-index":parseInt(u)}),jQuery(this).prependTo(t.addClass("ts-background-fixed-parent")),t.css({background:"","background-color":"transparent !important","background-image":"none !important","background-repeat":"","background-size":"","padding-top":parseInt(i)+"px","padding-bottom":parseInt(r)+"px","min-height":parseInt(l)+"px"}),"undefined"!=typeof t.attr("style")&&(c=t.attr("style")+";"),t.attr("style",c+" background-image: none !important; background-color: transparent !important;"),t.removeClass("ts-fixed-processing"),jQuery(this).addClass("ts-background-processed")):("contain"==t.css("backgroundSize")&&t.css("backgroundSize","cover"),t.css("backgroundSize",n),jQuery(this).css({"background-image":'url("'+s+'")',"background-repeat":d,"background-size":n,"-webkit-background-size":n,"background-position":o,"margin-left":parseInt(e)+"px","margin-right":parseInt(a)+"px","z-index":parseInt(u)}),jQuery(this).prependTo(t.addClass("ts-background-image-parent")),t.css({background:"","background-color":"transparent !important","background-image":"none !important","background-repeat":"","background-size":"","padding-top":parseInt(i)+"px","padding-bottom":parseInt(r)+"px","min-height":parseInt(l)+"px"}),"undefined"!=typeof t.attr("style")&&(c=t.attr("style")+";"),t.attr("style",c+" background-image: none !important; background-color: transparent !important;"),jQuery(this).removeClass("ts-background-fixed").addClass("ts-background-image").addClass("ts-background-processed"))}),jQuery(".ts-background-automove").each(function(){var t=jQuery(this),e=("true"==jQuery(this).attr("data-svgshape")?!0:!1,jQuery(this).next()),a=jQuery(this).attr("data-marginleft"),i=jQuery(this).attr("data-marginright"),r=jQuery(this).attr("data-paddingtop"),s=jQuery(this).attr("data-paddingbottom"),n=jQuery(this).attr("data-image"),o=jQuery(this).attr("data-size"),d=jQuery(this).attr("data-position"),u=jQuery(this).attr("data-repeat"),l=jQuery(this).attr("data-index"),c=jQuery(this).attr("data-height"),h=jQuery(this).attr("data-alignment"),p=jQuery(this).attr("data-direction"),m=jQuery(this).attr("data-speed"),f=jQuery(this).attr("data-scroll"),g="",y=jQuery(this).attr("data-inline"),v=0,j=0,Q=null;0==TS_VCSC_MobileDevice&&"false"==y?(e.addClass("ts-automove-processing"),jQuery(this).bind("inview",function(e,a,i,r){if(a){var s=jQuery(this);t.hasClass("ts-device-row-hidden")||s.addClass("ts-automove-visible")}else{var s=jQuery(this);s.removeClass("ts-automove-visible")}}),"contain"==e.css("backgroundSize")&&e.css("backgroundSize","cover"),e.css("backgroundSize",o),jQuery(this).css({"background-image":'url("'+n+'")',"background-repeat":"repaet 0 0","background-size":o,"-webkit-background-size":o,"background-attachment":"true"==f?"scroll":"fixed","background-position":d,"margin-left":parseInt(a)+"px","margin-right":parseInt(i)+"px","z-index":parseInt(l)}),jQuery(this).prependTo(e.addClass("ts-background-automove-parent")),e.css({background:"","background-color":"transparent !important","background-image":"none !important","background-repeat":"","background-size":"","padding-top":parseInt(r)+"px","padding-bottom":parseInt(s)+"px","min-height":parseInt(c)+"px"}),"undefined"!=typeof e.attr("style")&&(g=e.attr("style")+";"),e.attr("style",g+" background-image: none !important; background-color: transparent !important;"),t.css("backgroundPosition",v+"px "+j+"px"),Q=window.setInterval(function(){t.hasClass("ts-automove-visible")&&(t.css("backgroundPosition",v+"px "+j+"px"),"vertical"==h?"bottomtop"==p?j--:"topbottom"==p&&j++:"horizontal"==h&&("leftright"==p?v--:"rightleft"==p&&v++))},m),e.removeClass("ts-automove-processing"),jQuery(this).addClass("ts-background-processed")):("contain"==e.css("backgroundSize")&&e.css("backgroundSize","cover"),e.css("backgroundSize",o),jQuery(this).css({"background-image":'url("'+n+'")',"background-repeat":u,"background-size":o,"-webkit-background-size":o,"background-position":d,"margin-left":parseInt(a)+"px","margin-right":parseInt(i)+"px","z-index":parseInt(l)}),jQuery(this).prependTo(e.addClass("ts-background-image-parent")),e.css({background:"","background-color":"transparent !important","background-image":"none !important","background-repeat":"","background-size":"","padding-top":parseInt(r)+"px","padding-bottom":parseInt(s)+"px","min-height":parseInt(c)+"px"}),"undefined"!=typeof e.attr("style")&&(g=e.attr("style")+";"),e.attr("style",g+" background-image: none !important; background-color: transparent !important;"),jQuery(this).removeClass("ts-background-automove").addClass("ts-background-image").addClass("ts-background-processed"))}),jQuery(".ts-background-parallax").each(function(){var t=jQuery(this),e=jQuery(this).next(),a=("true"==jQuery(this).attr("data-svgshape")?!0:!1,jQuery(this)),i=jQuery(this).attr("data-marginleft"),r=jQuery(this).attr("data-marginright"),s=jQuery(this).attr("data-paddingtop"),n=jQuery(this).attr("data-paddingbottom"),o=jQuery(this).attr("data-image"),d=jQuery(this).attr("data-size"),u=jQuery(this).attr("data-position"),l=(jQuery(this).attr("data-alignment"),jQuery(this).attr("data-repeat")),c=(jQuery(this).attr("data-direction"),jQuery(this).attr("data-index")),h=jQuery(this).attr("data-height"),p=(jQuery(this).attr("data-momentum"),""),u="",m=jQuery(this).attr("data-inline");0==TS_VCSC_MobileDevice&&"false"==m?(e.addClass("ts-parallax-processing"),a.bind("inview",function(e,a,i,r){if(a){var s=jQuery(this);t.hasClass("ts-device-row-hidden")||s.addClass("ts-parallax-visible")}else{var s=jQuery(this);s.removeClass("ts-parallax-visible")}}),"contain"==e.css("background-size")&&e.css("background-size","cover"),e.css("background-size","cover"),jQuery(this).css({"background-image":'url("'+o+'")',"background-repeat":l,"background-size":d,"-webkit-background-size":d,"background-position":u,"margin-left":parseInt(i)+"px","margin-right":parseInt(r)+"px","z-index":parseInt(c)}),jQuery(this).prependTo(e.addClass("ts-background-parallax-parent")),e.css({background:"","background-color":"","background-image":"","background-repeat":"","background-size":"","padding-top":parseInt(s)+"px","padding-bottom":parseInt(n)+"px","min-height":parseInt(h)+"px"}),"undefined"!=typeof e.attr("style")&&(p=e.attr("style")+";"),e.attr("style",p+" background-image: none !important; background-color: transparent !important;"),("up"==jQuery(this).attr("data-direction")||"down"==jQuery(this).attr("data-direction"))&&jQuery(this).css("background-attachment","fixed"),jQuery(this).scrollParallax().trigger("scroll"),e.removeClass("ts-parallax-processing"),jQuery(this).addClass("ts-background-processed")):("contain"==e.css("backgroundSize")&&e.css("backgroundSize","cover"),e.css("backgroundSize",d),jQuery(this).css({"background-image":'url("'+o+'")',"background-repeat":l,"background-size":d,"-webkit-background-size":d,"background-position":u,"margin-left":parseInt(i)+"px","margin-right":parseInt(r)+"px","z-index":parseInt(c)}),jQuery(this).prependTo(e.addClass("ts-background-image-parent")),e.css({background:"","background-color":"transparent !important","background-image":"none !important","background-repeat":"","background-size":"","padding-top":parseInt(s)+"px","padding-bottom":parseInt(n)+"px","min-height":parseInt(h)+"px"}),"undefined"!=typeof e.attr("style")&&(p=e.attr("style")+";"),e.attr("style",p+" background-image: none !important; background-color: transparent !important;"),jQuery(this).removeClass("ts-background-parallax").addClass("ts-background-image").addClass("ts-background-processed"))}),jQuery(".ts-background-movement").each(function(){var t=jQuery(this),e=jQuery(this).next(),a=("true"==jQuery(this).attr("data-svgshape")?!0:!1,jQuery(this)),i=jQuery(this).attr("data-marginleft"),r=jQuery(this).attr("data-marginright"),s=jQuery(this).attr("data-paddingtop"),n=jQuery(this).attr("data-paddingbottom"),o=jQuery(this).attr("data-image"),d=jQuery(this).attr("data-size"),u=jQuery(this).attr("data-position"),l=jQuery(this).attr("data-repeat"),c=jQuery(this).attr("data-index"),h=jQuery(this).attr("data-height"),p="true"==jQuery(this).attr("data-allowx")?!0:!1,m=parseInt(jQuery(this).attr("data-movex")),f="true"==jQuery(this).attr("data-allowy")?!0:!1,g=parseInt(jQuery(this).attr("data-movey")),y="true"==jQuery(this).attr("data-allowcontent")?!0:!1,v="",u="",j=jQuery(this).attr("data-inline");0==TS_VCSC_MobileDevice&&"false"==j?(e.addClass("ts-movement-processing"),a.bind("inview",function(e,a,i,r){if(a){var s=jQuery(this);t.hasClass("ts-device-row-hidden")||s.addClass("ts-movement-visible")}else{var s=jQuery(this);s.removeClass("ts-movement-visible")}}),"contain"==e.css("background-size")&&e.css("background-size","cover"),e.css("background-size","cover"),jQuery(this).css({"background-image":'url("'+o+'")',"background-repeat":l,"background-size":d,"-webkit-background-size":d,"background-position":u,"margin-left":parseInt(i)+"px","margin-right":parseInt(r)+"px","z-index":parseInt(c)}),jQuery(this).prependTo(e.addClass("ts-background-movement-parent")),e.css({background:"","background-color":"","background-image":"","background-repeat":"","background-size":"","padding-top":parseInt(s)+"px","padding-bottom":parseInt(n)+"px","min-height":parseInt(h)+"px"}),"undefined"!=typeof e.attr("style")&&(v=e.attr("style")+";"),e.attr("style",v+" background-image: none !important; background-color: transparent !important;"),jQuery(this).attr("data-parallaxify-background-range-x",m),jQuery(this).attr("data-parallaxify-background-range-y",g),y&&(jQuery(this).siblings().not(".ts-background-separator-container").attr("data-parallaxify-range-x",m),jQuery(this).siblings().not(".ts-background-separator-container").attr("data-parallaxify-range-y",g)),e.parallaxify({horizontalParallax:p,verticalParallax:f,parallaxBackgrounds:!0,parallaxElements:y,positionProperty:"transform",responsive:!1,useMouseMove:!0,useGyroscope:!0,alphaFilter:.9,motionType:"natural",mouseMotionType:"gaussian",inputPriority:"mouse",motionAngleX:80,motionAngleY:80,adjustBasePosition:!0,alphaPosition:.05}),e.removeClass("ts-movement-processing"),jQuery(this).addClass("ts-background-processed")):("contain"==e.css("backgroundSize")&&e.css("backgroundSize","cover"),e.css("backgroundSize",d),jQuery(this).css({"background-image":'url("'+o+'")',"background-repeat":l,"background-size":d,"-webkit-background-size":d,"background-position":u,"margin-left":parseInt(i)+"px","margin-right":parseInt(r)+"px","z-index":parseInt(c)}),jQuery(this).prependTo(e.addClass("ts-background-image-parent")),e.css({background:"","background-color":"transparent !important","background-image":"none !important","background-repeat":"","background-size":"","padding-top":parseInt(s)+"px","padding-bottom":parseInt(n)+"px","min-height":parseInt(h)+"px"}),"undefined"!=typeof e.attr("style")&&(v=e.attr("style")+";"),e.attr("style",v+" background-image: none !important; background-color: transparent !important;"),jQuery(this).removeClass("ts-background-movement").addClass("ts-background-image").addClass("ts-background-processed"))}),"undefined"!=typeof jQuery.fn.YTPlaylist&&jQuery(".ts-background-youtube").each(function(){var t=jQuery(this),e=("true"==jQuery(this).attr("data-svgshape")?!0:!1,jQuery(this).next()),a=jQuery(this).attr("data-marginleft"),i=jQuery(this).attr("data-marginright"),r=jQuery(this).attr("data-paddingtop"),s=jQuery(this).attr("data-paddingbottom"),n=jQuery(this).attr("data-height"),o=jQuery(this).attr("data-video"),d=jQuery(this).attr("data-image"),u=jQuery(this).attr("data-mute"),l=jQuery(this).attr("data-loop"),c=jQuery(this).attr("data-start"),h=jQuery(this).attr("data-stop"),p=jQuery(this).attr("data-hover"),m=jQuery(this).attr("data-raster"),f=jQuery(this).attr("data-remove"),g=jQuery(this).attr("data-controls"),y=jQuery(this).attr("data-index"),v=!1,j="",Q=jQuery(this).attr("data-inline");if(0==TS_VCSC_MobileDevice&&"false"==Q){e.addClass("ts-youtube-processing"),g="true"==g?!0:!1,c="true"==c?!0:!1,u="true"==u?!0:!1,l="true"==l?!0:!1,m="true"==m?!0:!1,f="true"==f?!0:!1,p="true"==p?!0:!1,jQuery(this).bind("inview",function(e,a,i,r){if(a){var s=jQuery(this);t.hasClass("ts-device-row-hidden")?s.pauseYTP():(s.addClass("ts-youtube-visible"),"true"==h&&0==v&&s.playYTP())}else{var s=jQuery(this);s.removeClass("ts-youtube-visible"),"true"==h&&0==v&&s.pauseYTP()}}),jQuery(this).css({"margin-left":parseInt(a)+"px","margin-right":parseInt(i)+"px","z-index":parseInt(y)}).prependTo(e.addClass("ts-background-youtube-parent")),e.css({background:"","background-color":"","background-image":"","background-repeat":"","background-size":"","padding-top":parseInt(r)+"px","padding-bottom":parseInt(s)+"px","min-height":parseInt(n)+"px"}),"undefined"!=typeof e.attr("style")&&(j=e.attr("style")+";"),e.attr("style",j+" background-image: none !important; background-color: transparent !important;"),e.removeClass("ts-youtube-processing");var w=[{videoURL:o,containment:jQuery(this),showControls:g,autoPlay:c,mute:u,startAt:0,opacity:1,loop:l,addRaster:m}];jQuery(this).YTPlaylist(w,!0),jQuery(this).addClass("ts-background-processed"),0==l&&1==f&&jQuery(this).on("YTPEnd",function(e){e.time;t.stopYTP(),t.muteYTPVolume(),t.find(".mbYTP_wrapper").hide(),t.find(".mb_YTVPBar").hide(),t.removeClass("mb_YTVPlayer").removeClass("ts-youtube-visible").removeClass("ts-background-youtube").addClass("ts-background-image"),v=!0,t.css("background","transparent")
})}else""!=d&&("contain"==e.css("backgroundSize")&&e.css("backgroundSize","cover"),jQuery(this).css({"background-image":'url("'+d+'")',"background-repeat":"no-repeat","background-size":"cover","-webkit-background-size":"cover","background-position":"center","margin-left":parseInt(a)+"px","margin-right":parseInt(i)+"px","z-index":parseInt(y)}),jQuery(this).prependTo(e.addClass("ts-background-image-parent")),e.css({background:"","background-color":"transparent !important","background-image":"none !important","background-repeat":"","background-size":"","padding-top":parseInt(r)+"px","padding-bottom":parseInt(s)+"px","min-height":parseInt(n)+"px"}),"undefined"!=typeof e.attr("style")&&(j=e.attr("style")+";"),e.attr("style",j+" background-image: none !important; background-color: transparent !important;"),jQuery(this).removeClass("ts-background-youtube").addClass("ts-background-image").addClass("ts-background-processed"))}),jQuery(".ts-background-video").each(function(){var t=jQuery(this),e=jQuery(this).next(),a=jQuery(this).attr("data-marginleft"),i=jQuery(this).attr("data-marginright"),r=jQuery(this).attr("data-paddingtop"),s=jQuery(this).attr("data-paddingbottom"),n=jQuery(this).attr("data-height"),o=jQuery(this).attr("data-mp4"),d=jQuery(this).attr("data-ogv"),u=jQuery(this).attr("data-webm"),l=jQuery(this).attr("data-image"),c=jQuery(this).attr("data-mute"),h=jQuery(this).attr("data-loop"),p=jQuery(this).attr("data-remove"),m=jQuery(this).attr("data-start"),f=jQuery(this).attr("data-stop"),g=jQuery(this).attr("data-hover"),y=jQuery(this).attr("data-raster"),v=jQuery(this).attr("data-overlay"),j=jQuery(this).attr("data-controls"),Q=jQuery(this).attr("data-index"),w="",b=jQuery(this).attr("data-inline");if(0==TS_VCSC_MobileDevice&&"false"==b){j="true"==j?!0:!1,m="true"==m?!0:!1,c="true"==c?!0:!1,h="true"==h?!0:!1,p="true"==p?!0:!1,g="true"==g?!0:!1,e.addClass("ts-video-processing"),jQuery(this).bind("inview",function(e,a,i,r){if(a){var s=jQuery(this);t.hasClass("ts-device-row-hidden")?C.TS_VCSC_Wallpaper("stop"):(s.addClass("ts-video-visible"),"true"==f&&0==g&&C.TS_VCSC_Wallpaper("play"))}else{var s=jQuery(this);s.removeClass("ts-video-visible"),"true"==f&&0==g&&C.TS_VCSC_Wallpaper("stop")}}),jQuery(this).css({"margin-left":parseInt(a)+"px","margin-right":parseInt(i)+"px","z-index":parseInt(Q)}).prependTo(e.addClass("ts-background-video-parent")),e.css({background:"","background-color":"","background-image":"","background-repeat":"","background-size":"","padding-top":parseInt(r)+"px","padding-bottom":parseInt(s)+"px","min-height":parseInt(n)+"px"}),"undefined"!=typeof e.attr("style")&&(w=e.attr("style")+";"),e.attr("style",w+" background-image: none !important; background-color: transparent !important;"),e.removeClass("ts-video-processing");var C=(parseInt(jQuery(this).attr("data-set-width")),parseInt(jQuery(this).attr("data-set-height")),jQuery(this).find(".ts-background-video-holder"));C.TS_VCSC_Wallpaper({embedRatio:1.777777,controls:j,autoPlay:m,loop:h,mute:c,hoverPlay:g,raster:y,overlay:v,source:{poster:l,mp4:o,ogg:d,webm:u},onReady:function(){var t=C.find("video"),e=C.find(".wallpaper-play").show(),a=C.find(".wallpaper-pause").show(),i=C.find(".wallpaper-mute").show(),r=C.find(".wallpaper-unmute").show();1==j?(0==g?(e.on("mousedown touchend",function(){C.TS_VCSC_Wallpaper("play")}),a.on("mousedown touchstart",function(){C.TS_VCSC_Wallpaper("stop")})):(e.hide(),a.hide()),i.on("mousedown touchend",function(){t.prop("muted",!0)}),r.on("mousedown touchend",function(){t.prop("muted",!1)}),t.bind("contextmenu",function(){return!1})):(e.hide(),a.hide(),i.hide(),r.hide())},onLoad:function(){},onFinish:function(){0==h&&1==p&&(C.TS_VCSC_Wallpaper("unload"),C.TS_VCSC_Wallpaper("destroy"),C.off().remove(),t.find(".ts-background-raster").remove(),""!=l&&t.css({"background-image":'url("'+l+'")',"background-repeat":"no-repeat","background-size":"cover","-webkit-background-size":"cover","margin-left":parseInt(a)+"px","margin-right":parseInt(i)+"px","z-index":parseInt(Q)}))}}),1==g&&e.on("mouseover touchstart",function(){C.TS_VCSC_Wallpaper("play")}).on("mouseout touchend",function(){C.TS_VCSC_Wallpaper("stop")})}else""!=l&&("contain"==e.css("backgroundSize")&&e.css("backgroundSize","cover"),jQuery(this).css({"background-image":'url("'+l+'")',"background-repeat":"no-repeat","background-size":"cover","-webkit-background-size":"cover","background-position":"center","margin-left":parseInt(a)+"px","margin-right":parseInt(i)+"px","z-index":parseInt(Q)}),jQuery(this).prependTo(e.addClass("ts-background-image-parent")),e.css({background:"","background-color":"transparent !important","background-image":"none !important","background-repeat":"","background-size":"","padding-top":parseInt(r)+"px","padding-bottom":parseInt(s)+"px","min-height":parseInt(n)+"px"}),"undefined"!=typeof e.attr("style")&&(w=e.attr("style")+";"),e.attr("style",w+" background-image: none !important; background-color: transparent !important;"),jQuery(this).removeClass("ts-background-video").addClass("ts-background-image").addClass("ts-background-processed"))}),"undefined"!=typeof jQuery.fn.waypoint&&jQuery(".ts-icon-counter").each(function(){var t=jQuery(this).find(".ts-counter-value"),e="true"==t.attr("data-viewport")?!0:!1,a=parseInt(t.attr("data-start")),i=parseInt(t.attr("data-end")),r=parseInt(t.attr("data-speed")),s=t.attr("data-before"),n=t.attr("data-after"),o=t.attr("data-format"),d=t.attr("data-plus"),u=t.attr("data-seperator"),l=t.attr("data-animation"),c=jQuery(this).find(".ts-font-icon");0==e?t.countTo({from:a,to:i,speed:r,refreshInterval:50,decimals:0,formatter:function(t,e){return s+t.toFixed(e.decimals)+n},onUpdate:function(){},onComplete:function(){jQuery(this).empty().html("true"==o?"true"==d&&""!=u?s+jQuery.number(i,0,"",u)+"+"+n:"true"==d?s+i+"+"+n:""!=u?s+jQuery.number(i,0,"",u)+n:s+i+n:i),c.addClass(l),setTimeout(function(){c.removeClass(l)},2e3)}}):jQuery(this).waypoint({handler:function(){t.countTo({from:a,to:i,speed:r,refreshInterval:50,decimals:0,formatter:function(t,e){return s+t.toFixed(e.decimals)+n},onUpdate:function(){},onComplete:function(){jQuery(this).empty().html("true"==o?"true"==d&&""!=u?s+jQuery.number(i,0,"",u)+"+"+n:"true"==d?s+i+"+"+n:""!=u?s+jQuery.number(i,0,"",u)+n:s+i+n:i),c.addClass(l),setTimeout(function(){c.removeClass(l)},2e3)}})},offset:"100%",triggerOnce:!0})}),"undefined"!=typeof jQuery.fn.waypoint&&"undefined"!=typeof jQuery.fn.circliful&&jQuery(".ts-circliful-counter").each(function(){jQuery(this).bind("inview",function(t,e,a,i){if(e){var r=jQuery(this);"top"==i||"bottom"==i||r.addClass("ts-circliful-visible")}else{var r=jQuery(this);r.removeClass("ts-circliful-visible")}})}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-circliful-counter").each(function(){if("true"==jQuery(this).attr("data-responsive")){var t=jQuery(this),e=parseInt(jQuery(this).parent().width()),a=parseInt(jQuery(this).attr("data-size"));e!=a&&(t.empty(),t.circliful())}})}),jQuery(".ts-countdown-parent").each(function(){
$TS_VCSC_Countdown_DaysLabel = $TS_VCSC_Countdown_DayLabel = jQuery(this).parent().find(".hidecountdownlabel").data("day");
$TS_VCSC_Countdown_HoursLabel =  $TS_VCSC_Countdown_HourLabel = jQuery(this).parent().find(".hidecountdownlabel").data("hour");
$TS_VCSC_Countdown_MinutesLabel =  $TS_VCSC_Countdown_MinuteLabel = jQuery(this).parent().find(".hidecountdownlabel").data("minute");
$TS_VCSC_Countdown_SecondsLabel =  $TS_VCSC_Countdown_SecondLabel  = jQuery(this).parent().find(".hidecountdownlabel").data("second");	
function t(_){var k=new Date,z=Date.UTC(k.getFullYear(),k.getMonth(),k.getDate()),P=k.getTimezoneOffset()/-60;if(0==u&&(u=P),1==r&&0==o){k.setHours(k.getHours()+parseInt(Q)),k.setMinutes(k.getMinutes()+parseInt(w)),k.setSeconds(k.getSeconds()+parseInt(b)),z=Date.UTC(k.getFullYear(),k.getMonth(),k.getDate()),$countdown_target_day=k.getDate(),$countdown_target_month=k.getMonth()+1,$countdown_target_year=k.getFullYear(),$countdown_target_hour=k.getHours(),$countdown_target_minute=k.getMinutes(),$countdown_target_second=k.getSeconds();{var E=new Date($countdown_target_year,k.getMonth(),$countdown_target_day,$countdown_target_hour,$countdown_target_minute,$countdown_target_second,0);Date.UTC($countdown_target_year,k.getMonth(),$countdown_target_day,$countdown_target_hour,$countdown_target_minute,$countdown_target_second,0)}}else if(1==o){$countdown_target_day=k.getDate(),$countdown_target_month=k.getMonth()+1,$countdown_target_year=k.getFullYear(),$countdown_target_hour=k.getHours(),$countdown_target_minute=k.getMinutes(),$countdown_target_second=k.getSeconds();{var E=new Date($countdown_target_year,k.getMonth(),$countdown_target_day,$countdown_target_hour,$countdown_target_minute,$countdown_target_second,0);Date.UTC($countdown_target_year,k.getMonth(),$countdown_target_day,$countdown_target_hour,$countdown_target_minute,$countdown_target_second,0)}}else if(1==s){k.getHours()>=parseInt(y)&&k.getMinutes()>=parseInt(v)&&k.getSeconds()>=parseInt(j)&&k.setDate(k.getDate()+1),$countdown_target_day=k.getDate(),$countdown_target_month=k.getMonth()+1,$countdown_target_year=k.getFullYear(),$countdown_target_hour=parseInt(y),$countdown_target_minute=parseInt(v),$countdown_target_second=parseInt(j);{var E=new Date($countdown_target_year,k.getMonth(),$countdown_target_day,$countdown_target_hour,$countdown_target_minute,$countdown_target_second,0);Date.UTC($countdown_target_year,k.getMonth(),$countdown_target_day,$countdown_target_hour,$countdown_target_minute,$countdown_target_second,0)}}else{$countdown_target_day=parseInt(m),$countdown_target_month=parseInt(f),$countdown_target_year=parseInt(g),$countdown_target_hour=parseInt(y),$countdown_target_minute=parseInt(v),$countdown_target_second=parseInt(j);{var E=new Date($countdown_target_year,$countdown_target_month-1,$countdown_target_day,$countdown_target_hour,$countdown_target_minute,$countdown_target_second,0);Date.UTC($countdown_target_year,$countdown_target_month-1,$countdown_target_day,$countdown_target_hour,$countdown_target_minute,$countdown_target_second,0)}}n=0==s&&(k>E&&1==n||1==o)?!0:!1,e.countEverest({day:$countdown_target_day,month:$countdown_target_month,year:$countdown_target_year,hour:$countdown_target_hour,minute:$countdown_target_minute,second:$countdown_target_second,countUp:n,leftHandZeros:d,timeZone:u,wrapDigits:"horizontal"==i?!1:!0,daysLabel:$TS_VCSC_Countdown_DaysLabel,dayLabel:$TS_VCSC_Countdown_DayLabel,daysWrapper:"horizontal"==i?".ce-days .ce-flip-back":".ce-days",hoursLabel:$TS_VCSC_Countdown_HoursLabel,hourLabel:$TS_VCSC_Countdown_HourLabel,hoursWrapper:"horizontal"==i?".ce-hours .ce-flip-back":".ce-hours",minutesLabel:$TS_VCSC_Countdown_MinutesLabel,minuteLabel:$TS_VCSC_Countdown_MinuteLabel,minutesWrapper:"horizontal"==i?".ce-minutes .ce-flip-back":".ce-minutes",secondsLabel:$TS_VCSC_Countdown_SecondsLabel,secondLabel:$TS_VCSC_Countdown_SecondLabel,secondsWrapper:"horizontal"==i?".ce-seconds .ce-flip-back":".ce-seconds",onInit:function(){},beforeCalculation:function(){},afterCalculation:function(){if("flipboard"==i){var t=this,a={days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds},r={hours:"23",minutes:"59",seconds:"59"},s="active",o="before";1==L&&1==_?(L=!1,e.find(".unit-wrap div").each(function(){for(var t=jQuery(this),e=t.attr("class"),i=a[e],r="",s="",n=0;10>n;n++)r+=['<div class="digits-inner">','<div class="flip-wrap">','<div class="up">','<div class="shadow"></div>','<div class="inn">'+n+"</div>","</div>",'<div class="down">','<div class="shadow"></div>','<div class="inn">'+n+"</div>","</div>","</div>","</div>"].join("");for(var o=0;o<i.length;o++)s+='<div class="digits">'+r+"</div>";t.append(s)})):1==L&&0==_&&(L=!1),jQuery.each(a,function(a){for(var i,d=e.find("."+a+" .digits").length,u=r[a],l=t.strPad(this,d,"0"),c=l.length-1;c>=0;c--){var h=e.find("."+a+" .digits:eq("+c+")"),p=h.find("div.digits-inner");i=u?n?9==u[c]?0:u[c]:0==u[c]?9:u[c]:n?0:9;var m=parseInt(l[c]);if(n)var f=m==i?9:m-1;else var f=m==i?0:m+1;p.eq(f).hasClass(s)&&p.parent().addClass("play"),p.removeClass(s).removeClass(o),p.eq(m).addClass(s),p.eq(f).addClass(o)}})}},onChange:function(){if("bars"==i&&("true"==l&&TS_VCSC_Countdown_SetBar(I,this.days,365),"true"==c&&TS_VCSC_Countdown_SetBar(S,this.hours,24),"true"==h&&TS_VCSC_Countdown_SetBar(T,this.minutes,60),"true"==p&&TS_VCSC_Countdown_SetBar($,this.seconds,60)),"columns"==i&&"true"==x){var t=0;e.find(".col").each(function(){jQuery(this).width()>t&&(t=jQuery(this).width())}),e.find(".col").each(function(){jQuery(this).width(t)})}"clock2"==i&&TS_VCSC_Countdown_Animate(e.find(".number")),"circles"==i&&("true"==l&&TS_VCSC_Countdown_DrawCircle(document.getElementById("days_"+a),this.days,365,D,M,H),"true"==c&&TS_VCSC_Countdown_DrawCircle(document.getElementById("hours_"+a),this.hours,24,D,V,H),"true"==h&&TS_VCSC_Countdown_DrawCircle(document.getElementById("minutes_"+a),this.minutes,60,D,A,H),"true"==p&&TS_VCSC_Countdown_DrawCircle(document.getElementById("seconds_"+a),this.seconds,60,D,F,H)),"horizontal"==i&&TS_VCSC_Countdown_Animate3D(e.find(".col").find("div:first-child"),this)},onComplete:function(){1==r&&(e.countEverest("destroy"),jQuery("#ts-vcsc-countdown-"+a+"_link").click(),"true"==C&&t(!1)),1==s&&(e.countEverest("destroy"),t(!0))}})}var e=jQuery(this).find(".ts-countdown"),a=jQuery(this).attr("data-id"),i=jQuery(this).attr("data-type"),r="true"==jQuery(this).attr("data-reset")?!0:!1,s="true"==jQuery(this).attr("data-repeat")?!0:!1,n="true"==jQuery(this).attr("data-countup")?!0:!1,o="true"==jQuery(this).attr("data-pageload")?!0:!1,d="true"==jQuery(this).attr("data-zeros")?!0:!1,u=jQuery(this).attr("data-zone");u="false"!=u?parseInt(u):!1;{var l=jQuery(this).attr("data-show-days"),c=jQuery(this).attr("data-show-hours"),h=jQuery(this).attr("data-show-minutes"),p=jQuery(this).attr("data-show-seconds"),m=jQuery(this).attr("data-day"),f=jQuery(this).attr("data-month"),g=jQuery(this).attr("data-year"),y=jQuery(this).attr("data-hour"),v=jQuery(this).attr("data-minute"),j=jQuery(this).attr("data-second"),Q=jQuery(this).attr("data-resethours"),w=jQuery(this).attr("data-resetminutes"),b=jQuery(this).attr("data-resetseconds"),C=jQuery(this).attr("data-resetrestart"),_=jQuery(this).attr("data-resetlink");jQuery(this).attr("data-resettarget")}if(""!=_&&jQuery("#ts-vcsc-countdown-"+a+"_link").click(function(t){t.preventDefault();var e=jQuery(this),a=e.attr("target");jQuery.trim(a).length>0?window.open(e.attr("href"),a):window.location=e.attr("href")}),"columns"==i)var x=jQuery(this).attr("data-equalize");if("bars"==i){var k=jQuery(this),I=(k.find("#ce-days_"+a),k.find("#ce-hours_"+a),k.find("#ce-minutes_"+a),k.find("#ce-seconds_"+a),jQuery("#bar-days_"+a).find(".fill")),S=jQuery("#bar-hours_"+a).find(".fill"),T=jQuery("#bar-minutes_"+a).find(".fill"),$=jQuery("#bar-seconds_"+a).find(".fill"),z=new Date;new Date(z.getTime()+12096e5)}if("circles"==i)var D=jQuery(this).attr("data-color-back"),M=jQuery(this).attr("data-color-days"),V=jQuery(this).attr("data-color-hours"),A=jQuery(this).attr("data-color-minutes"),F=jQuery(this).attr("data-color-seconds"),H=jQuery(this).attr("data-color-width");if("horizontal"==i&&(-1!==navigator.userAgent.indexOf("MSIE")||navigator.appVersion.indexOf("Trident/")>0)&&jQuery("html").addClass("internet-explorer"),"flipboard"==i)var L=!0;t(!0)});var h=function(t){t.preventDefault();var e=jQuery(this),a=e.find(".ts-imageswitch-overlay"),i="true"==a.attr("data-remove")?!0:!1,r=t.originalEvent.touches&&t.originalEvent.touches[0]&&t.originalEvent.touches[0].pageX,s=e.offset(),n=(r||t.pageX)-s.left;n=Math.round(n),jQuery(".ts-imageswitch__after, .ts-imageswitch__handle",e).css("left",n+"px"),jQuery(".ts-imageswitch__after img",e).css("right",n+"px"),i&&a.removeClass("active")},p=function(t){t.preventDefault();var e=jQuery(this),a=e.find(".ts-imageswitch-overlay"),i="true"==a.attr("data-remove")?!0:!1,r=e.width()/2,s=100,n=200;"true"==jQuery(".ts-imageswitch__handle",jQuery(this)).attr("data-center")&&(jQuery(".ts-imageswitch__after, .ts-imageswitch__handle",e).delay(s).animate({left:r},n),jQuery(".ts-imageswitch__after img",e).delay(s).animate({right:r},n)),i&&a.addClass("active")};jQuery(".ts-imageswitch-slide > .ts-switch-wrapper > div").each(function(){jQuery(this).on("mousemove touchmove",h).on("mouseleave touchend",p)}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-imageswitch-slide > .ts-switch-wrapper > div").each(function(){var t=jQuery(this),e=t.width()/2,a=100,i=200;jQuery(".ts-imageswitch__after, .ts-imageswitch__handle",jQuery(this)).delay(a).animate({left:e},i),jQuery(".ts-imageswitch__after img",jQuery(this)).delay(a).animate({right:e},i)})}),jQuery(".ts-imageswitch.ts-imageswitch-flip.ts-trigger-click").each(function(){var t=jQuery(this),e=t.find(".ts-imageswitch-overlay"),a="true"==e.attr("data-remove")?!0:!1;t.addClass("ts-imageswitch-before"),t.on("click",function(){t.addClass("ts-imageswitch-activated"),t.toggleClass("ts-imageswitch-before ts-imageswitch-after"),a&&(t.hasClass("ts-imageswitch-before")?e.addClass("active"):e.removeClass("active"))})}),jQuery(".ts-imageswitch.ts-imageswitch-flip.ts-trigger-hover").each(function(){var e=t(this);e.addClass("ts-imageswitch-before")}),jQuery(document).on("mouseenter touchstart",".ts-imageswitch.ts-imageswitch-flip.ts-trigger-hover",function(){var t=jQuery(this),e=t.find(".ts-imageswitch-overlay"),a="true"==e.attr("data-remove")?!0:!1;t.addClass("ts-imageswitch-activated"),t.toggleClass("ts-imageswitch-before ts-imageswitch-after"),a&&(t.hasClass("ts-imageswitch-before")?e.addClass("active"):e.removeClass("active"))}),jQuery(document).on("mouseleave touchend",".ts-imageswitch.ts-imageswitch-flip.ts-trigger-hover",function(){var t=jQuery(this),e=t.find(".ts-imageswitch-overlay"),a="true"==e.attr("data-remove")?!0:!1;t.addClass("ts-imageswitch-activated"),t.toggleClass("ts-imageswitch-before ts-imageswitch-after"),a&&(t.hasClass("ts-imageswitch-before")?e.addClass("active"):e.removeClass("active"))}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-imageswitch-fade").find(".ts-imageswitch-items").find("li").each(function(){var t=jQuery(this),e=t.find("img").height(),a=t.hasClass("active");t.css("height",e+"px").attr("data-height",e),a&&t.parent().css("height",e+"px")})}),jQuery(document).on("mouseenter touchstart",".ts-imageswitch.ts-imageswitch-fade.ts-trigger-hover",function(){var t=jQuery(this),e=t.find(".ts-imageswitch__before"),a=t.find(".ts-imageswitch__after"),i=t.find(".ts-imageswitch-overlay"),r="true"==i.attr("data-remove")?!0:!1;t.toggleClass("ts-imageswitch-before ts-imageswitch-after"),a.toggleClass("active"),e.toggleClass("active"),e.hasClass("active")?e.parent().css("height",e.find("img").height()+"px"):a.hasClass("active")&&a.parent().css("height",a.find("img").height()+"px"),r&&(t.hasClass("ts-imageswitch-before")?i.addClass("active"):i.removeClass("active"))}),jQuery(document).on("mouseleave touchend",".ts-imageswitch.ts-imageswitch-fade.ts-trigger-hover",function(){var t=jQuery(this),e=t.find(".ts-imageswitch__before"),a=t.find(".ts-imageswitch__after"),i=t.find(".ts-imageswitch-overlay"),r="true"==i.attr("data-remove")?!0:!1;t.toggleClass("ts-imageswitch-before ts-imageswitch-after"),a.toggleClass("active"),e.toggleClass("active"),e.hasClass("active")?e.parent().css("height",e.find("img").height()+"px"):a.hasClass("active")&&a.parent().css("height",a.find("img").height()+"px"),r&&(t.hasClass("ts-imageswitch-before")?i.addClass("active"):i.removeClass("active"))}),jQuery(document).on("click",".ts-imageswitch.ts-imageswitch-fade.ts-trigger-click",function(){var t=jQuery(this),e=t.find(".ts-imageswitch__before"),a=t.find(".ts-imageswitch__after"),i=t.find(".ts-imageswitch-overlay"),r="true"==i.attr("data-remove")?!0:!1;t.toggleClass("ts-imageswitch-before ts-imageswitch-after"),a.toggleClass("active"),e.toggleClass("active"),e.hasClass("active")?e.parent().css("height",e.find("img").height()+"px"):a.hasClass("active")&&a.parent().css("height",a.find("img").height()+"px"),r&&(t.hasClass("ts-imageswitch-before")?i.addClass("active"):i.removeClass("active"))}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-imageswitch-overlay").each(function(){var t=jQuery(this),e=t.siblings(".ts-imageswitch-items"),a=e.height(),i=(e.width(),t.find(".ts-imageswitch-overlay-image")),r=i.height()/2,s=i.width()/2;t.css({height:a+"px","line-height":a+"px"}),i.css({"margin-left":"-"+s+"px","margin-top":"-"+r+"px"})})}),jQuery(".ts-image-hotspot-switch").each(function(){var t=jQuery(this),e="true"==jQuery(this).attr("data-toggle")?!0:!1,a=t.find(".ts-image-hotspot-trigger-dot"),i=t.parents().parents().siblings(".ts-image-hotspot-image"),r=i.attr("src"),s=t.attr("data-image");t.attr("data-original",r),a.on("mousedown touchend",function(a){a.preventDefault();var n=i.attr("src");s!=r&&n!=s?(i.fadeOut(250,function(){i.attr("src",s),t.attr("data-switch","true")}),i.fadeIn(250)):e&&n!=r&&(i.fadeOut(250,function(){i.attr("src",r),t.attr("data-switch","false")}),i.fadeIn(250))})}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-image-hotspot-container").each(function(){var t=jQuery(this),e=parseInt(t.attr("data-large")),a=parseInt(t.attr("data-medium")),i=t.width();i>=e?t.alterClass("ts-image-hotspot-container-size-*","ts-image-hotspot-container-size-large"):i>=a&&e>i?t.alterClass("ts-image-hotspot-container-size-*","ts-image-hotspot-container-size-medium"):t.alterClass("ts-image-hotspot-container-size-*","ts-image-hotspot-container-size-small")})}),jQuery(".ts-qrcode-parent").each(function(){var t=jQuery(this).attr("data-render"),e=jQuery(this).attr("data-responsive"),a=jQuery(this).attr("data-size"),i=jQuery(this).attr("data-min"),r=jQuery(this).attr("data-max"),s=jQuery(this).attr("data-qrcode"),n=jQuery(this).attr("data-color");if("true"==e){var o=jQuery(this).width()*a/100;a=i>o?i:o>r?r:o}else a=a;jQuery(this).qrcode({render:t,size:a,width:a,height:a,fill:n,fontcolor:n,text:s})}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-qrcode-parent.responsive").each(function(){jQuery(this).empty();var t=jQuery(this).attr("data-render"),e=jQuery(this).attr("data-responsive"),a=jQuery(this).attr("data-size"),i=jQuery(this).attr("data-min"),r=jQuery(this).attr("data-max"),s=jQuery(this).attr("data-qrcode"),n=jQuery(this).attr("data-color");if("true"==e){var o=jQuery(this).width()*a/100;a=i>o?i:o>r?r:o}else a=a;jQuery(this).qrcode({render:t,size:a,width:a,height:a,fill:n,fontcolor:n,text:s})})}),jQuery(document).on("click","a.ts-to-top",function(){return t("html, body").animate({scrollTop:0},500),!1}),jQuery(".ts-teampage-member-skills").find(".ts-skillbars-style1-value").css("width","0%").css("opacity","0"),jQuery(".ts-teampage-member-skills").find(".ts-skillbars-style1-tooltip").css("opacity","0"),jQuery(".ts-teampage-member-skills").each(function(){jQuery(this).bind("inview",function(t,e,a,i){if(e){{jQuery(this)}"top"==i||"bottom"==i||jQuery(this).find(".ts-skillbars-style1-value").each(function(){var t=0,e=jQuery(this),a=e.attr("data-level"),i=e.width();if(e.css("opacity","1"),e.find(".ts-skillbars-style1-tooltip").css("opacity","1"),0==i){a=a.substring(0,a.length-1);var r=function(){return t>=a||t>=100?(jQuery(this).unbind("inview"),!1):(t+=1,t>a?t=a:t>100&&(t=100),e.css("width",t+"%"),setTimeout(r,2),void 0)};r()}else jQuery(this).unbind("inview")})}else{jQuery(this)}})}),jQuery(".ts-teammate-member-skills").find(".ts-skillbars-style1-value").css("width","0%").css("opacity","0"),jQuery(".ts-teammate-member-skills").find(".ts-skillbars-style1-tooltip").css("opacity","0"),jQuery(".ts-teammate-member-skills").each(function(){jQuery(this).bind("inview",function(t,e,a,i){if(e){{jQuery(this)}"top"==i||"bottom"==i||jQuery(this).find(".ts-skillbars-style1-value").each(function(){var t=0,e=jQuery(this),a=e.attr("data-level"),i=e.width();if(e.css("opacity","1"),e.find(".ts-skillbars-style1-tooltip").css("opacity","1"),0==i){a=a.substring(0,a.length-1);var r=function(){return t>=a||t>=100?(jQuery(this).unbind("inview"),!1):(t+=1,t>a?t=a:t>100&&(t=100),e.css("width",t+"%"),setTimeout(r,2),void 0)};r()}else jQuery(this).unbind("inview")})}else{jQuery(this)}})}),jQuery(".ts-post-skills").find(".ts-skillbars-style1-value").css("width","0%").css("opacity","0"),jQuery(".ts-post-skills").find(".ts-skillbars-style2-skillbar").css("width","0%").css("opacity","0"),jQuery(".ts-post-skills").find(".ts-skillbars-style3-countbar").css("width","0%").css("opacity","0"),jQuery(".ts-post-skills").find(".ts-skillbars-style1-tooltip").css("opacity","0"),jQuery(".ts-post-skills").find(".ts-skillbars-style2-tooltip").css("opacity","0"),jQuery(".ts-post-skills").find(".ts-skillbars-style3-tooltip").css("opacity","0"),jQuery(".ts-skillbars-style2-wrapper").each(function(){$full_width=jQuery(this).width(),$title_width=jQuery(this).find(".ts-skillbars-style2-title").width(),jQuery(this).find(".ts-skillbars-style2-area").css("margin-left",$title_width+"px").width($full_width-$title_width)}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-skillbars-style2-wrapper").each(function(){$full_width=jQuery(this).width(),$title_width=jQuery(this).find(".ts-skillbars-style2-title").width(),jQuery(this).find(".ts-skillbars-style2-area").css("margin-left",$title_width+"px").width($full_width-$title_width)})}),jQuery(".ts-post-skills").each(function(){jQuery(this).bind("inview",function(t,e,a,i){if(e){{jQuery(this)}"top"==i||"bottom"==i||(jQuery(this).find(".ts-skillbars-style1-value").each(function(){var t=0,e=jQuery(this),a=parseInt(e.attr("data-level")),i=e.width();if(e.css("opacity","1"),e.find(".ts-skillbars-style1-tooltip").css("opacity","1"),0==i){var r=function(){return t>=a||t>=100?(jQuery(this).unbind("inview"),!1):(t+=1,t>a?t=a:t>100&&(t=100),e.css("width",t+"%"),setTimeout(r,2),void 0)};r()}else jQuery(this).unbind("inview")}),jQuery(this).find(".ts-skillbars-style2-skillbar").each(function(){var t=0,e=jQuery(this),a=parseInt(e.attr("data-level")),i=e.width();if(e.css("opacity","1"),e.find(".ts-skillbars-style2-tooltip").css("opacity","1"),0==i){var r=function(){return t>=a||t>=100?(jQuery(this).unbind("inview"),!1):(t+=1,t>a?t=a:t>100&&(t=100),e.css("width",t+"%"),setTimeout(r,2),void 0)};r()}else jQuery(this).unbind("inview")}),jQuery(this).find(".ts-skillbars-style3-countbar").each(function(){var t=0,e=jQuery(this),a=parseInt(e.attr("data-level")),i=e.width();if(e.css("opacity","0.75"),e.find(".ts-skillbars-style3-tooltip").css("opacity","1"),0==i){var r=function(){return t>=a||t>=100?(jQuery(this).unbind("inview"),!1):(t+=1,t>a?t=a:t>100&&(t=100),e.css("width",t+"%"),setTimeout(r,2),void 0)};r()}else jQuery(this).unbind("inview")}))}else{jQuery(this)}})}),jQuery(".ts-animation-container-enabled").each(function(){jQuery(this).css(0==TS_VCSC_MobileDevice||1==TS_VCSC_MobileDevice&&"true"==jQuery(this).attr("data-mobile")?{opacity:0,"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"',filter:"alpha(opacity=0)","-moz-opacity":0,"-khtml-opacity":0}:{opacity:1,"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"',filter:"alpha(opacity=100)","-moz-opacity":1,"-khtml-opacity":1})}),"undefined"!=typeof jQuery.fn.waypoint?jQuery(".ts-animation-container-viewport").waypoint({handler:function(){if(0==TS_VCSC_MobileDevice||1==TS_VCSC_MobileDevice&&"true"==jQuery(this).attr("data-mobile")){var t=jQuery(this),e=t.attr("data-animation"),a=parseInt(t.attr("data-delay")),i=parseInt(t.attr("data-duration")),r=parseInt(t.attr("data-repeat")),s=t.attr("data-infinite"),n=t.attr("data-once");setTimeout(function(){t.addClass(e).css({opacity:1,"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"',filter:"alpha(opacity=100)","-moz-opacity":1,"-khtml-opacity":1}),"false"==s?setTimeout(function(){"true"==n?(t.removeAttr("data-viewport"),t.removeClass(e),t.removeClass("ts-animation-frame").removeClass("ts-animation-container-viewport"),t.waypoint("destroy")):t.removeClass(e)},i*r):t.waypoint("destroy")},a)}},offset:"100%",triggerOnce:!1}):(0==TS_VCSC_MobileDevice||1==TS_VCSC_MobileDevice&&"true"==jQuery(this).attr("data-mobile"))&&jQuery(".ts-animation-container-viewport").each(function(){jQuery(this).addClass("ts-animation-container-instant").removeClass("ts-animation-container-viewport")}),jQuery(".ts-animation-container-instant").each(function(){if(0==TS_VCSC_MobileDevice||1==TS_VCSC_MobileDevice&&"true"==jQuery(this).attr("data-mobile")){var t=jQuery(this),e=t.attr("data-animation"),a=parseInt(t.attr("data-delay")),i=parseInt(t.attr("data-duration")),r=parseInt(t.attr("data-repeat")),s=t.attr("data-infinite");setTimeout(function(){t.addClass(e).css({opacity:1,"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"',filter:"alpha(opacity=100)","-moz-opacity":1,"-khtml-opacity":1}),"false"==s&&setTimeout(function(){t.removeAttr("data-viewport"),t.removeClass(e),t.removeClass("ts-animation-frame").removeClass("ts-animation-container-viewport")},i*r)},a)}}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-rating-stars-frame").each(function(){var t=jQuery(this).attr("data-auto");if("true"==t){var e=Math.floor(jQuery(this).width());if(0!=jQuery(this).find(".ts-rating-caption").length)var a=jQuery(this).find(".ts-rating-caption").outerWidth(!0),i=jQuery(this).find(".ts-rating-caption").find(".label").outerHeight(!0);else var a=0,i=0;var r=Math.floor(jQuery(this).outerWidth(!0)-a),s=(parseInt(jQuery(this).attr("data-rating")),parseInt(jQuery(this).attr("data-width"))),n=parseInt(jQuery(this).attr("data-size"));if(r>s){if(r-s>25)var o=0;else var o=25;r=s}else var o=25;if(0==a)if(e>s)var d=n;else var d=Math.floor((r-o)/5);else var d=Math.floor((r-o)/5);jQuery(this).find(".ts-star-rating").css({"font-size":d+"px","line-height":(d>i?d+5:i+5)+"px"}).attr("data-width",r).attr("data-caption",a),jQuery(this).find(".ts-star-rating-rtl").css({"font-size":d+"px","line-height":(d>i?d+5:i+5)+"px"}).attr("data-width",r).attr("data-caption",a)}})}),jQuery(".ts-font-icon-generator").css({opacity:jQuery(this).attr("data-opacity"),"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+100*jQuery(this).attr("data-opacity")+')"',filter:"alpha(opacity="+100*jQuery(this).attr("data-opacity")+")","-moz-opacity":jQuery(this).attr("data-opacity"),"-khtml-opacity":jQuery(this).attr("data-opacity")}),jQuery(document).on("mouseenter",".ts-font-icon-generator",function(){"true"==jQuery(this).attr("data-hover")&&jQuery(this).css({color:jQuery(this).attr("data-hovercolor"),background:jQuery(this).attr("data-hoverbackground"),opacity:jQuery(this).attr("data-hoveropacity"),"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+100*jQuery(this).attr("data-hoveropacity")+')"',filter:"alpha(opacity="+100*jQuery(this).attr("data-hoveropacity")+")","-moz-opacity":jQuery(this).attr("data-hoveropacity"),"-khtml-opacity":jQuery(this).attr("data-hoveropacity")})}),jQuery(document).on("mouseleave",".ts-font-icon-generator",function(){"true"==jQuery(this).attr("data-hover")&&jQuery(this).css({color:jQuery(this).attr("data-color"),background:jQuery(this).attr("data-background"),opacity:jQuery(this).attr("data-opacity"),"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+100*jQuery(this).attr("data-opacity")+')"',filter:"alpha(opacity="+100*jQuery(this).attr("data-opacity")+")","-moz-opacity":jQuery(this).attr("data-opacity"),"-khtml-opacity":jQuery(this).attr("data-opacity")})}),"undefined"!=typeof jQuery.fn.waypoint?(jQuery(".ts-font-icon-generator-viewport").each(function(){jQuery(this).css({opacity:0,"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"',filter:"alpha(opacity=0)","-moz-opacity":0,"-khtml-opacity":0})}),jQuery(".ts-font-icon-generator-viewport").waypoint({handler:function(){var t=jQuery(this),e=t.attr("data-viewport"),a=parseInt(t.attr("data-delay"));setTimeout(function(){t.addClass(e).css({opacity:t.attr("data-opacity"),"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+100*t.attr("data-opacity")+')"',filter:"alpha(opacity="+100*t.attr("data-opacity")+")","-moz-opacity":t.attr("data-opacity"),"-khtml-opacity":t.attr("data-opacity")}),setTimeout(function(){t.removeAttr("data-viewport"),t.removeClass(e),t.removeClass("ts-font-icon-generator-viewport")},2e3)},a)},offset:"100%",triggerOnce:!0})):jQuery(".ts-font-icon-generator-viewport").each(function(){jQuery(this).css({opacity:1,"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"',filter:"alpha(opacity=100)","-moz-opacity":1,"-khtml-opacity":1})
}),jQuery(".ts-imagehover").each(function(){var t=jQuery(this),e=t.attr("data-closer"),a=t.attr("data-trigger");"ts-trigger-click"==a&&t.on("click",function(){jQuery(this).hasClass("active")||(jQuery(this).toggleClass("active"),jQuery(this).find(".mask").show(),0!=jQuery(this).find(".badonkatrunc-wrapper").length&&jQuery(this).find(".badonkatrunc-wrapper").parent().badonkatrunc("refresh"))}),0!=e.length&&jQuery("body").on("click","#"+e,function(){jQuery("#"+jQuery(this).attr("data-mask")).toggleClass("active"),t.find(".mask").hide()})}),jQuery(".ts-posts-timeline-view").each(function(){function t(){s.alterClass("ts-timeline-*","ts-timeline-asc"),listItem.alterClass("ts-timeline-order-*","ts-timeline-order-asc").attr("data-order","asc"),setTimeout(function(){r()},100)}function e(){s.alterClass("ts-timeline-*","ts-timeline-desc"),listItem.alterClass("ts-timeline-order-*","ts-timeline-order-desc").attr("data-order","desc"),setTimeout(function(){r()},100)}function a(){show=0,listItem.each(function(){"true"==jQuery(this).attr("data-visible")&&show++}),show=parseInt(show)+parseInt(loadmore),listCount>=parseInt(show)?(visible=0,listItem=s.find("li.ts-timeline-list-item"),listItem.each(function(){visible++,visible<=parseInt(show)&&jQuery(this).attr("data-visible","true").addClass("ts-timeline-visible").fadeIn()}),s.find('li[data-visible*="false"]').removeClass("ts-timeline-visible").hide()):(listItem.fadeIn().addClass("ts-timeline-visible").attr("data-visible","true"),moreButton.hide()),setTimeout(function(){listHolder.isotope("reloadItems"),r(),listHolder.isotope("reLayout")},750)}function i(t){("spineTimeline"==layoutSelect||"straightDown"==layoutSelect)&&"postDate"==sortCriteria?(breakItem.addClass("ts-timeline-visible"),s.find('li[data-visible*="false"]').removeClass("ts-timeline-visible").hide()):breakItem.removeClass("ts-timeline-visible").hide(),listHolder.isotope({itemSelector:".ts-timeline-list-item.ts-timeline-visible",animationEngine:"best-available",itemPositionDataEnabled:!1,transformsEnabled:!0,resizesContainer:!0,sortAscending:t,getSortData:{postDate:function(t){return parseInt(t.attr("data-date"))},postModified:function(t){return parseInt(t.attr("data-modified"))},postName:function(t){return t.attr("data-title")},postAuthor:function(t){return t.attr("data-author")},postComments:function(t){return parseInt(t.attr("data-comments"))},postID:function(t){return parseInt(t.attr("data-id"))},postPrice:function(t){return parseInt(t.attr("data-price"))},postRatings:function(t){return parseInt(t.attr("data-rating"))}},sortBy:sortCriteria,layoutMode:layoutMode,filter:listFilter,spineTimeline:{gutterWidth:20,columnPadding:50,spineHolder:spineHolder},onLayout:function(){}},function(){setTimeout(function(){"spineTimeline"==layoutSelect?jQuery("#"+spineHolder).height(listHolder.height()):jQuery("span",jQuery("#"+spineHolder)).remove()},750)})}function r(){s.each(function(){$this=jQuery(this),$this.width(n.width()),listHolder.width(n.width()),"spineTimeline"==layoutSelect?("postDate"==sortCriteria?breakItem.addClass("ts-timeline-visible").show():breakItem.removeClass("ts-timeline-visible").hide(),s.removeClass("ts-postsgrid").addClass("ts-timeline"),jQuery("#"+spineHolder).show(),$this.outerWidth()<=mediaQuery?(layoutMode="masonry",layoutSelect="spineTimeline",listItem.each(function(){jQuery(this).width("100%").removeClass("ts-timeline-layout-straightDown").removeClass("colA").removeClass("colB").removeClass("ts-timeline-layout-spine").addClass("ts-timeline-layout-masonry")}),jQuery("span",jQuery("#"+spineHolder)).remove()):(layoutMode="spineTimeline",layoutSelect="spineTimeline",listItem.each(function(){jQuery(this).width("50%").removeClass("ts-timeline-layout-straightDown").removeClass("ts-timeline-layout-masonry").addClass("ts-timeline-layout-spine")}))):("straightDown"==layoutSelect?(s.removeClass("ts-postsgrid").addClass("ts-timeline"),jQuery("#"+spineHolder).hide(),"postDate"==sortCriteria?(breakItem.addClass("ts-timeline-visible").show(),s.find('li[data-visible*="false"]').removeClass("ts-timeline-visible").hide()):breakItem.removeClass("ts-timeline-visible").hide()):(s.removeClass("ts-timeline").addClass("ts-postsgrid"),jQuery("#"+spineHolder).hide(),breakItem.removeClass("ts-timeline-visible").hide()),listItem.each(function(){"straightDown"==layoutSelect?(layoutMode="masonry",layoutSelect="straightDown",jQuery(this).width("100%").addClass("ts-timeline-layout-straightDown").removeClass("colA").removeClass("colB").removeClass("ts-timeline-layout-spine").addClass("ts-timeline-layout-masonry")):jQuery(this).css("width",columnWidth).removeClass("ts-timeline-layout-straightDown")})),listHolder.attr("data-layout",layoutMode),jQuery("#"+spineHolder).alterClass("ts-posts-spine-layout-*","ts-posts-spine-layout-"+layoutMode),setTimeout(function(){listHolder.hasClass("isotope")&&listHolder.isotope("reloadItems"),i(o),listHolder.isotope("reLayout"),"spineTimeline"==layoutSelect&&jQuery("#"+spineHolder).height(listHolder.height())},750)})}var s=jQuery(this),n=s.parent();if(loadLazy=s.attr("data-lazy"),loadPosts=s.attr("data-ajax"),order=s.attr("data-order"),sortCriteria=s.attr("data-sort"),columnWidth=parseInt(s.attr("data-column")),postType=s.attr("data-type"),shown=loadPosts,loadmore=loadPosts,loadMethod=s.attr("data-trigger"),controlBar=s.find(".ts-isotope-posts-grid-controls"),controlsUp=s.find(".ts-timeline-css-controls-asc"),controlsDown=s.find(".ts-timeline-css-controls-desc"),listHolder=s.find("ul.ts-timeline-list"),listTarget=s.find("ul.ts-timeline-list").attr("id"),listItem=s.find("li.ts-timeline-list-item"),breakItem=s.find("li.ts-timeline-break"),dateHolder=listItem.find(".ts-timeline-date"),listCount=parseInt(listItem.length),listCounter=0,listFilter="",moreButton=s.find(".ts-timeline-load-more"),mediaQuery=parseInt(s.attr("data-break")),spineHolder=s.find(".ts-timeline-spine").attr("id"),layoutSelect=s.attr("data-layout"),layoutMode=s.attr("data-layout"),"desc"==order)var o=!1;else var o=!0;controlsUp.on("click",function(){jQuery(this).hasClass("active")||(jQuery(this).toggleClass("active"),controlsDown.toggleClass("active"),o=o?!1:!0,breakItem.each(function(){jQuery(this).attr("data-date",jQuery(this).attr("data-start"))}),t())}),controlsDown.on("click",function(){jQuery(this).hasClass("active")||(jQuery(this).toggleClass("active"),controlsUp.toggleClass("active"),o=o?!1:!0,breakItem.each(function(){jQuery(this).attr("data-date",jQuery(this).attr("data-end"))}),e())}),"postDate"==sortCriteria?sortAttribute="data-date":"postModified"==sortCriteria?sortAttribute="data-modified":"postName"==sortCriteria?sortAttribute="data-title":"postAuthor"==sortCriteria?sortAttribute="data-author":"postComments"==sortCriteria?sortAttribute="data-comments":"postID"==sortCriteria?sortAttribute="data-id":"postRating"==sortCriteria?sortAttribute="data-rating":"postPrice"==sortCriteria&&(sortAttribute="data-price"),jQuery("ul#"+listTarget+">li").tsort({order:order,attr:sortAttribute}),listItem.each(function(){listCounter++,jQuery(this).addClass("ts-timeline-order-"+order).attr("data-order",order).attr("data-number",listCounter)}),"true"==loadLazy?(s.find("li.ts-timeline-list-item:lt("+shown+")").addClass("ts-timeline-visible").attr("data-visible","true").fadeIn(),s.find('li[data-visible*="false"]').removeClass("ts-timeline-visible").hide(),moreButton.on("click",a)):listItem.fadeIn().attr("data-visible","true").addClass("ts-timeline-visible"),"true"==loadLazy&&"scroll"==loadMethod&&moreButton.bind("inview",function(t,e,i,r){if(e){var s=jQuery(this);"top"==r||"bottom"==r||(s.addClass("ts-loadmore-visible"),a())}else{var s=jQuery(this);s.removeClass("ts-loadmore-visible")}}),jQuery(window).on("debouncedresize",function(){r()}),jQuery(this).find(".ts-isotope-posts-sort").change(function(){return sortCriteria=jQuery(this).attr("data-sort"),r(o),!1}),jQuery(this).find(".ts-isotope-posts-layout").change(function(){return s.width("100%"),layoutSelect=jQuery(this).attr("data-layout"),layoutMode=jQuery(this).attr("data-layout"),i(o),r(),("spineTimeline"==layoutSelect||"straightDown"==layoutSelect)&&setTimeout(function(){r()},100),!1}),jQuery(this).find(".ts-isotope-posts-filter").change(function(){var t=s.find(".ts-isotope-posts-filter").length-1,e=0,a=jQuery(this).attr("data-type"),i=jQuery(this).attr("data-key"),r=s.find(".ts-isotope-posts-filter-all"),n=[];return"all"==a?(jQuery(".ts-isotope-posts-filter").each(function(){jQuery(this).attr("data-key")==i&&"single"==jQuery(this).attr("data-type")&&jQuery(this).prop("checked",!1)}),n=jQuery(this).attr("data-filter")):(jQuery(".ts-isotope-posts-filter").each(function(){jQuery(this).attr("data-key")==i&&"all"==jQuery(this).attr("data-type")&&jQuery(this).prop("checked",!1),jQuery(this).attr("data-key")==i&&jQuery(this).is(":checked")&&(e++,n.push(jQuery(this).attr("data-filter")))}),0==e?r.prop("checked",!0):e==t&&(r.prop("checked",!0),jQuery(".ts-isotope-posts-filter").each(function(){jQuery(this).attr("data-key")==i&&"single"==jQuery(this).attr("data-type")&&jQuery(this).prop("checked",!1)})),n=n.join(", ")),listFilter=n,listHolder.isotope({filter:listFilter}),!1})}),jQuery(".ts-newsticker-oneliner").each(function(){{var t=jQuery(this).attr("id"),e=jQuery(this).hasClass("ts-newsticker-fixed"),a=jQuery(this).attr("data-parent"),i=jQuery(this).attr("data-header"),r=jQuery(this).attr("data-direction"),s=jQuery(this).attr("data-ticker"),n=parseInt(jQuery(this).attr("data-break")),o=jQuery(this).attr("data-navigation"),d=jQuery(this).attr("data-controls"),u=jQuery(this).attr("data-auto"),l=parseInt(jQuery(this).attr("data-speed")),c=jQuery(this).attr("data-hover"),h=jQuery(this).attr("data-next"),p=jQuery(this).attr("data-prev"),m=jQuery(this).attr("data-stop"),f=jQuery(this).attr("data-play");jQuery(this).find(".newsticker").newsTicker({row_height:44,max_rows:1,speed:500,duration:l,direction:r,autostart:"true"==u?!0:!1,pauseOnHover:"true"==c?!0:!1,nextButton:jQuery("#"+h),prevButton:jQuery("#"+p),stopButton:jQuery("#"+m),startButton:jQuery("#"+f)})}jQuery("#"+m).on("click",function(){jQuery("#"+m).hide(),jQuery("#"+f).show()}),jQuery("#"+f).on("click",function(){jQuery("#"+f).hide(),jQuery("#"+m).show()}),jQuery(window).on("debouncedresize",function(){if("true"==o)var r=jQuery("#"+d).width()+10;else var r=0;1==e?jQuery("#"+t).width()<n?(jQuery("#"+t).addClass("breakline"),jQuery("#"+s).css("width","100%")):(jQuery("#"+t).removeClass("breakline"),setTimeout(function(){var e=jQuery("#"+i).width(),a=jQuery("#"+t).width()-r-e-10;jQuery("#"+s).css("width",a+"px")},500)):jQuery("#"+a).width()<n?(jQuery("#"+t).addClass("breakline"),jQuery("#"+s).css("width","100%")):(jQuery("#"+t).removeClass("breakline"),setTimeout(function(){var t=jQuery("#"+i).width(),e=jQuery("#"+a).width()-r-t-10;jQuery("#"+s).css("width",e+"px")},500))})}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-lightbox-gallery-stack").each(function(){jQuery(this).stackslider()})}),jQuery(".ts_html5_video_hide").each(function(){1==TS_VCSC_MobileDevice&&"true"==jQuery(this).attr("data-show")&&jQuery(this).attr("data-show","false")}),jQuery("body").on("click",".ts_html5_video_remove",function(t){t.preventDefault();var e=jQuery(this).attr("data-player");jQuery("#"+e).remove(),jQuery(this).off().remove()}),jQuery("body").on("click",".ts_html5_video_hide",function(t){t.preventDefault();var e=jQuery(this).attr("data-player"),a=jQuery(this).attr("data-position"),i=jQuery(this).attr("data-width"),r=jQuery(this).hasClass("active");r?(jQuery(this).removeClass("active").addClass("inactive"),"topleft"==a||"bottomleft"==a?(jQuery("#"+e).animate({left:0},250,function(){}),jQuery(this).animate({left:parseInt(i)+2},250,function(){})):("topright"==a||"bottomright"==a)&&(jQuery("#"+e).animate({right:0},250,function(){}),jQuery(this).animate({right:parseInt(i)+2},250,function(){}))):(jQuery(this).removeClass("inactive").addClass("active"),"topleft"==a||"bottomleft"==a?(jQuery("#"+e).animate({left:-(parseInt(i)+2)},250,function(){}),jQuery(this).animate({left:0},250,function(){})):("topright"==a||"bottomright"==a)&&(jQuery("#"+e).animate({right:-(parseInt(i)+2)},250,function(){}),jQuery(this).animate({right:0},250,function(){})),jQuery("#"+e).find("iframe").contents().find(".pppause").click())}),jQuery(".ts_html5_audio_hide").each(function(){1==TS_VCSC_MobileDevice&&"true"==jQuery(this).attr("data-show")&&jQuery(this).attr("data-show","false")}),jQuery("body").on("click",".ts_html5_audio_remove",function(t){t.preventDefault();var e=jQuery(this).attr("data-player"),a=jQuery(this).attr("data-info"),i=jQuery(this).attr("data-controls");jQuery("#"+e).remove(),jQuery("#"+a).off(),jQuery(this).off(),jQuery("#"+i).remove()}),jQuery("body").on("click",".ts_html5_audio_hide",function(t){t.preventDefault();var e=jQuery(this).attr("data-controls"),a=jQuery(this).attr("data-player"),i=jQuery(this).attr("data-position"),r=jQuery(this).attr("data-width"),s=jQuery(this).attr("data-info"),n=jQuery(this).hasClass("active");n?(jQuery(this).removeClass("active").addClass("inactive"),"topleft"==i||"bottomleft"==i?(jQuery("#"+a).animate({left:0},250,function(){}),jQuery("#"+s).show(),jQuery("#"+e).animate({left:parseInt(r)+2},250,function(){})):("topright"==i||"bottomright"==i)&&(jQuery("#"+a).animate({right:0},250,function(){}),jQuery("#"+s).show(),jQuery("#"+e).animate({right:parseInt(r)+2},250,function(){}))):(jQuery(this).removeClass("inactive").addClass("active"),"topleft"==i||"bottomleft"==i?(jQuery("#"+a).animate({left:-(parseInt(r)+2)},250,function(){}),jQuery("#"+s).hide(),jQuery("#"+e).animate({left:0},250,function(){})):("topright"==i||"bottomright"==i)&&(jQuery("#"+a).animate({right:-(parseInt(r)+2)},250,function(){}),jQuery("#"+s).hide(),jQuery("#"+e).animate({right:0},250,function(){})))}),jQuery(".ts-ipresenter-container").each(function(){var t=jQuery(this),e=t.find(".ts-ipresenter-main"),a="true"==t.attr("data-autoheight")?!0:!1,i="true"==t.attr("data-fixedheight")?!0:!1,r=parseInt(t.attr("data-setheight")),s=parseInt(t.attr("data-animationspeed")),n="true"==t.attr("data-randomstart")?!0:!1,o="true"==t.attr("data-zoomeffect")?!0:!1,d="true"==t.attr("data-autoplay")?!0:!1,u="true"==t.attr("data-viewport")?!0:!1,l="true"==t.attr("data-mobile")?!0:!1;1==TS_VCSC_MobileDevice&&0==l&&(d=!1);var c="true"==t.attr("data-replay")?!0:!1,h="true"==t.attr("data-pauseonhover")?!0:!1,p=parseInt(t.attr("data-pausetime")),m=t.attr("data-timer"),f=t.attr("data-timerposition"),g=parseInt(t.attr("data-timerdiameter")),y=t.attr("data-timerbackground"),v=t.attr("data-timercolor"),j=parseInt(t.attr("data-timeropacity"))/100,Q="true"==t.attr("data-directionnav")?!0:!1,w="true"==t.attr("data-controlnav")?!0:!1,b="true"==t.attr("data-controlnavthumbs")?!0:!1,C="true"==t.attr("data-controlnavtooltip")?!0:!1,_="true"==t.attr("data-keyboardnav")?!0:!1,x="true"==t.attr("data-touchnav")?!0:!1;e.TS_VCSC_iPresenter({autoHeight:a,fixedHeight:i,height:r,easing:"ease-in-out",animSpeed:s,itemsOpacity:.4,nextLabel:"Next",previousLabel:"Previous",playLabel:"Play",pauseLabel:"Pause",randomStart:n,startStep:1,zoomEffect:o,autoPlay:d,playViewport:u,replay:c,pauseOnHover:h,pauseTime:p,timer:m,timerPosition:f,timerDiameter:g,timerBg:y,timerColor:v,timerOpacity:j,timerPadding:4,timerStroke:4,timerBarStroke:1,timerBarStrokeColor:y,timerBarStrokeStyle:"solid",timerBarStrokeRadius:4,directionNav:Q,directionNavHoverOpacity:.6,controlNav:w,controlNavNextPrev:!1,controlNavHoverOpacity:.6,controlNavThumbs:b,controlNavTooltip:C,keyboardNav:_,touchNav:x,onPlay:function(){},onPause:function(){},onAfterLoad:function(){},onBeforeChange:function(){},onAfterChange:function(){},onSlideshowEnd:function(){},onLastStep:function(){}})}),"undefined"!=typeof jQuery.fn.tooltipster&&jQuery(".ts-has-tooltipster-tooltip").each(function(){$tipster_html="true"==jQuery(this).attr("data-tooltipster-html")?!0:!1,$tipster_title=jQuery(this).attr("data-tooltipster-title"),$tipster_text=jQuery(this).attr("data-tooltipster-text"),$tipster_html&&($tipster_text=decodeURIComponent(TS_VCSC_Base64.decode($tipster_text))),$tipser_image=jQuery(this).attr("data-tooltipster-image"),$tipster_content=0!=$tipser_image.length?'<img class="tooltipster-content-image" src="'+$tipser_image+'">':0!=$tipster_title.length?'<div class="tooltipster-content-title">'+$tipster_title+'</div><div class="tooltipster-content-text">'+$tipster_text+"</div>":'<div class="tooltipster-content-text">'+$tipster_text+"</div>",$tipster_trigger=jQuery(this).attr("data-tooltipster-trigger"),$tipster_theme=jQuery(this).attr("data-tooltipster-theme"),$tipster_position=jQuery(this).attr("data-tooltipster-position"),$tipster_animation=jQuery(this).attr("data-tooltipster-animation"),$tipster_arrow="true"==jQuery(this).attr("data-tooltipster-arrow")?!0:!1,$tipster_touchicon="true"==jQuery(this).attr("data-tooltipster-touch")?!0:!1,$tipster_offsetx=parseInt(jQuery(this).attr("data-tooltipster-offsetx")),$tipster_offsety=parseInt(jQuery(this).attr("data-tooltipster-offsety")),jQuery(this).tooltipster({theme:$tipster_theme,arrow:$tipster_arrow,content:$tipster_content,contentAsHTML:!0,trigger:$tipster_trigger,animation:$tipster_animation,onlyOne:!0,position:$tipster_position,delay:200,minWidth:75,maxWidth:300,iconDesktop:!1,iconTouch:$tipster_touchicon,offsetX:$tipster_offsetx,offsetY:$tipster_offsety,interactive:!0})}),"undefined"!=typeof jQuery.fn.nchlightbox&&(jQuery.fn.nchlightbox("addEvent","open",function(t,e){if(jQuery("body, html").addClass("ts-composer-extensions-noscroll"),jQuery(".ts_html5_media_frame_insert").each(function(){jQuery(this).contents().find(".projekktor").hasClass("ppstateplaying")&&($projekktor=jQuery(this).contents().find(".projekktor"),$projekktor.find(".pppause").click())}),jQuery(".ts-ihover-image-container").fadeTo(100,0),"undefined"!=typeof jQuery.fn.tooltipster&&jQuery(".tooltipstered").tooltipster("hide"),!e.numbered){var a,i=e.set,r=i.length;if(1!=i.length){for(var s=0;r>s;s++)i[s].opts.title=((a=i[s].opts.title)?a:"")+" ("+(s+1)+" / "+r+")";e.numbered=!0}}}),jQuery.fn.nchlightbox("addEvent","close",function(){jQuery("body, html").removeClass("ts-composer-extensions-noscroll"),jQuery(".ts-ihover-image-container").fadeTo(100,1)}),jQuery.fn.nchlightbox("addEvent","next",function(t,e,a){!e.playing||"youtube"!=a.opts.type&&"vimeo"!=a.opts.type&&"dailymotion"!=a.opts.type||jQuery.fn.nchlightbox("stop")}),jQuery("body").on("click",".nch-lightbox-trigger",function(t){t.preventDefault();var e=jQuery(this).attr("data-group");""!=e&&jQuery("#"+e+"-0").click()}),jQuery(".nch-lightbox-media").nchlightbox(),jQuery(".nch-lightbox-modal").nchlightbox({thumbs:0,share:0,zoom:0,fxspeed:$TS_VCSC_Lightbox_FXSpeed,keyboard:!1,bgclose:!0,notouch:!1,backlight:$TS_VCSC_Lightbox_Backlight,usecolor:$TS_VCSC_Lightbox_UseColor}),jQuery(".nch-lightbox-html5").nchlightbox({share:0,zoom:0,fxspeed:$TS_VCSC_Lightbox_FXSpeed,keyboard:$TS_VCSC_Lightbox_Keyboard,bgclose:!0,notouch:!1,backlight:$TS_VCSC_Lightbox_Backlight,usecolor:$TS_VCSC_Lightbox_UseColor,fullscreen:!1}),jQuery(".ts-image-link-grid").each(function(){var t=jQuery(this).find("img"),e=jQuery(this).attr("data-grid").split(","),a=parseInt(jQuery(this).attr("data-margin")),i=parseInt(jQuery(this).attr("data-random")),r="true"==jQuery(this).attr("data-order")?!0:!1,s="true"==jQuery(this).attr("data-always")?!0:!1,n=jQuery(this).attr("data-gridavailable"),o=jQuery(this).attr("data-gridselected"),d=jQuery(this).attr("data-gridnogroups"),u=jQuery(this).attr("data-gridtoggle"),l=jQuery(this).attr("data-gridtogglestyle"),c=jQuery(this).attr("data-gridshowall"),h=jQuery(this).attr("data-gridshowallstyle");t.nchgrid({margin:a,grid:e,order:r,captions:!0,linkGrid:!0,target:!1,random:i,filter:!0,titles:s,selector:"nch-lb-filter-"+i,toggle:"nch-lb-toggle-"+i,showall:"nch-lb-showall-"+i,textAvailable:n,textSelected:o,textNoGroups:d,textToggle:u,textToggleStyle:l,textShowAll:c,textShowAllStyle:h})})),e(),i(),r(),s()}),jQuery(window).load(function(){function a(){jQuery(".ts-image-picstrips").each(function(){var t=parseInt(jQuery(this).attr("data-strips")),e=parseInt(jQuery(this).attr("data-space")),a=parseInt(jQuery(this).attr("data-offset")),i=jQuery(this).attr("data-color");jQuery(this).height("100%");var r=jQuery(this).find("img").height();jQuery(this).find(".molbars").remove(),jQuery(this).find("img").picstrips({splits:t,hgutter:e+"px",vgutter:a+"px",bgcolor:i}),jQuery(this).height(r)})}function n(){jQuery(".ts-image-caman-canvas").each(function(){jQuery("#ts-image-caman-process-"+t).show();var t=jQuery(this).attr("data-number"),e=jQuery("#ts-image-caman-original-"+t).width();jQuery("#ts-image-caman-original-"+t).attr("data-width",e);var a=jQuery("#ts-image-caman-original-"+t).height();jQuery("#ts-image-caman-original-"+t).attr("data-height",a),jQuery(this).attr("data-camanwidth",e).attr("data-camanheight",a),jQuery(this).height(a),jQuery("#ts-image-caman-process-"+t).hide(),jQuery("#ts-image-caman-handle-"+t).show()})}function o(){jQuery(".flip-container-frame.auto").each(function(){var t=0;jQuery(this).find(".flip-container-flipper-front > *").each(function(e,a){t+=jQuery(a).outerHeight(!0)});var e=0;jQuery(this).find(".flip-container-flipper-back > *").each(function(t,a){e+=jQuery(a).outerHeight(!0)});var a=t>e?t:e;jQuery(this).css("height",a+"px"),jQuery(this).find(".flip-container-flipper-front").css("height",a+"px"),jQuery(this).find(".flip-container-flipper-back").css("height",a+"px")}),jQuery(".ts-flip-cube.auto").each(function(){var t=20;jQuery(this).find(".ts-front").find(".ts-flip-content > *").each(function(e,a){t+=jQuery(a).outerHeight(!0)});var e=20;jQuery(this).find(".ts-back").find(".ts-flip-content > *").each(function(t,a){e+=jQuery(a).outerHeight(!0)});var a=t>e?t:e;jQuery(this).css("height",a+"px"),jQuery(this).find(".ts-front").find(".ts-flip-content").css("height",a+"px"),jQuery(this).find(".ts-back").find(".ts-flip-content").css("height",a+"px")})}if("undefined"!=typeof jQuery.fn.nchlightbox&&jQuery(".nch-lightbox-open").each(function(){if("true"==jQuery(this).attr("data-open")){var t=jQuery(this).attr("data-delay");setTimeout(function(){jQuery(".nch-lightbox-open").nchlightbox({thumbs:0,share:0,social:"",zoom:0,bgclose:!0}).nchlightbox("open")},t)}}),"undefined"!=typeof jQuery.fn.adipoli&&(jQuery("img.ts-imageadipoli").each(function(){var t=jQuery(this).attr("data-start"),e=jQuery(this).attr("data-hover"),a=jQuery(this).attr("data-text"),i=jQuery(this).attr("data-frame"),r=jQuery(this).height(),s=jQuery(this).width();jQuery(this).height(r),jQuery(this).width(s),jQuery("#"+i).width(s),jQuery("#"+i+"-counter").width(s),jQuery(this).adipoli({startEffect:t,hoverEffect:e,overlayText:a})}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-image-adipoli-frame").each(function(){var t=jQuery(this).find("img.ts-imageadipoli"),e=t.attr("data-responsive");if("true"==e){jQuery(this).find(".adipoli-before").remove(),jQuery(this).find(".adipoli-after").remove(),t.show();var a=t.attr("data-frame"),i=t.attr("data-width"),r=t.attr("data-height"),s=t.attr("data-handle"),n=parseInt(jQuery(this).find(".ts-image-adipoli-padding").css("padding-bottom"));jQuery("#"+a).width(i+"%"),jQuery("#"+a+"-counter").width("100%"),t.width("100%"),t.height(r),"true"==s?(t.unwrapUntil(".ts-image-adipoli-padding"),jQuery("#"+a+"-counter").height(t.height()+n+"px")):(t.unwrapUntil("#"+a+"-counter"),jQuery("#"+a+"-counter").height(t.height()+"px"));var o=t.attr("data-start"),d=t.attr("data-hover"),u=t.attr("data-text");r=t.height(),i=t.width(),jQuery("#"+a).width(i),jQuery("#"+a+"-counter").width(i),t.adipoli({startEffect:o,hoverEffect:d,overlayText:u})}else{var a=t.attr("data-frame"),s=t.attr("data-handle"),n=parseInt(jQuery(this).find(".ts-image-adipoli-padding").css("padding-bottom"));jQuery("#"+a+"-counter").height("true"==s?t.height()+n+"px":t.height()+"px")}})})),"undefined"!=typeof jQuery.fn.picstrips&&jQuery(window).on("debouncedresize",function(){a()}),jQuery(".ts-image-caman-canvas").each(function(){var t=jQuery(this).attr("data-effect"),e=jQuery(this).attr("data-number");Caman(this,function(){"vintage"==t?this.vintage():"lomo"==t?this.lomo():"clarity"==t?this.clarity():"sinCity"==t?this.sinCity():"sunrise"==t?this.sunrise():"crossProcess"==t?this.crossProcess():"orangePeel"==t?this.orangePeel():"love"==t?this.love():"grungy"==t?this.grungy():"jarques"==t?this.jarques():"pinhole"==t?this.pinhole():"oldBoot"==t?this.oldBoot():"glowingSun"==t?this.glowingSun():"hazyDays"==t?this.hazyDays():"herMajesty"==t?this.herMajesty():"nostalgia"==t?this.nostalgia():"hemingway"==t?this.hemingway():"concentrate"==t?this.concentrate():"emboss"==t?this.emboss():"greyscale"==t?this.greyscale():"invert"==t&&this.invert(),this.render(function(){var t=jQuery("#ts-image-caman-original-"+e).width();jQuery("#ts-image-caman-original-"+e).attr("data-width",t);var a=jQuery("#ts-image-caman-original-"+e).height();jQuery("#ts-image-caman-original-"+e).attr("data-height",a),jQuery(this).attr("data-camanwidth",t).attr("data-camanheight",a),jQuery(this).height(a),jQuery("#ts-image-caman-process-"+e).hide(),jQuery("#ts-image-caman-handle-"+e).show()})})}),jQuery(window).on("debouncedresize",function(){n()}),jQuery(".ts-image-magnify-container").each(function(){function t(){var t=s.width()*h,e=s.height()*h,a=s.offset();b.css("background-size",t,e);var i=b.width()/2,r=b.height()/2,n=-z*h+i+a.left*h,o=-D*h+r+a.top*h,d=n+"px "+o+"px";b.css({backgroundPosition:d});var u=(Math.round(100*h)/100).toFixed(1);b.attr("data-zoom",u),C.empty().html(u+"x"),_&&(k.val(u),x.empty().html(u+"x")),h=100*h/100,j&&jQuery("body, html").addClass("ts-composer-extensions-noscroll")}function e(t){clearTimeout(l),T=S.width()/100*n-b.width()/2,$=S.height()/100*o-b.height()/2;{var e=s.offset();s.width(),s.height()}z=e.left+T+b.width()/2,D=e.top+$+b.height()/2;var a=s.width()*h,i=s.height()*h,e=s.offset();b.css("background-size",a,i);var r=b.width()/2,d=b.height()/2,u=-z*h+r+e.left*h,c=-D*h+d+e.top*h,p=u+"px "+c+"px",m=z-r-e.left,f=D-d-e.top;t?b.animate({top:f,left:m},{duration:500,easing:"easeInOutBack",complete:function(){b.css({backgroundPosition:p}),b.attr("data-position",p)}}):(b.css({left:m,top:f,backgroundPosition:p}),b.attr("data-position",p))}function a(){clearTimeout(l),s.height("100%");var t=parseInt(s.attr("data-zoomsize")),a=s.find(".ts-image-magnify-preview"),i=s.find(".ts-image-magnify-glass"),r=0;s.height(a.height()),a.height()/2<i.height()?(r=a.height()/2,r>t&&(r=t),i.css("width",r),i.css("height",r)):a.height()/2<t?(r=a.height()/2,r>t&&(r=t),i.css("width",r),i.css("height",r)):(r=t,r>a.height()/2&&(r=a.height()/2),i.css("width",r),i.css("height",r)),e(!1)}var i=!1,r=!1,s=jQuery(this),n=parseInt(s.attr("data-zoomstartx")),o=parseInt(s.attr("data-zoomstarty")),d="true"==s.attr("data-zoomrestore")?!0:!1,u=parseInt(s.attr("data-zoomtimeout")),l="",c=parseInt(s.attr("data-zoomlevel")),h=(Math.round(100*c)/100).toFixed(1),p=0,m=((Math.round(100*c)/100).toFixed(1),parseInt(s.attr("data-zoomsize")),"true"==s.attr("data-zoomdrag")?!0:!1),f="true"==s.attr("data-zoomcircle")?!0:!1,g="true"==s.attr("data-zoomreflect")?!0:!1,y="true"==s.attr("data-zoomshow")?!0:!1,v="true"==s.attr("data-zoomoutside")?!0:!1;v||s.addClass("ts-image-magnify-contained");var j="true"==s.attr("data-zoommouse")?!0:!1,Q=parseInt(s.attr("data-zoomwheel"))/100,w="true"==s.attr("data-zoompinch")?!0:!1,b=s.find(".ts-image-magnify-glass"),C=s.find(".ts-image-magnify-level"),_="true"==s.attr("data-zoomrange")?!0:!1,x=s.find(".ts-image-magnify-scale"),k=s.find(".ts-image-magnify-range"),I=s.find(".ts-image-magnify-link");0!=I.length&&"undefined"!=typeof $TS_VCSC_Magnify_Lightbox&&I.attr("title",$TS_VCSC_Magnify_Lightbox);var S=s.find(".ts-image-magnify-preview"),T=0,$=0,z=0,D=0;if(f?(b.addClass("ts-image-magnify-circle"),b.children(".ts-image-magnify-zoomed").addClass("ts-image-magnify-circle")):(b.removeClass("ts-image-magnify-circle"),b.children(".ts-image-magnify-zoomed").removeClass("ts-image-magnify-circle")),g?b.children(".ts-image-magnify-zoomed").addClass("ts-image-magnify-reflected"):b.children(".ts-image-magnify-zoomed").removeClass("ts-image-magnify-reflected"),m?(s.addClass("ts-image-magnify-dragging"),s.on("mousedown touchstart",function(){i=!0,s.trigger("mouseenter"),b.fadeIn(200)}),s.on("mouseup touchend",function(){i=!1,s.trigger("mouseleave"),y||b.fadeOut(200)})):(s.removeClass("ts-image-magnify-dragging"),s.on("touchstart",function(){s.trigger("mouseenter")}),s.on("mouseup touchend",function(){s.trigger("mouseleave")})),_&&(k.on("mousedown touchstart mouseenter",function(){j&&jQuery("body, html").addClass("ts-composer-extensions-noscroll"),r=!0}),k.on("mouseup touchend",function(){h=jQuery(this).val(),t(),r=!1}),k.on("mouseleave",function(){j&&jQuery("body, html").addClass("ts-composer-extensions-noscroll")}),"undefined"!=typeof $TS_VCSC_Magnify_ChangeLevel&&x.attr("title",$TS_VCSC_Magnify_ChangeLevel),x.on("click",function(){j&&jQuery("body, html").addClass("ts-composer-extensions-noscroll"),r=!0,k.slideToggle(),r=!1})),s.bind("mousemove "+b,function(t){if(t.preventDefault(),s.trigger("hover"),!r){var e=s.offset(),a=s.width(),n=s.height();if(t.pageX<a+e.left&&t.pageY<n+e.top&&t.pageX>0+e.left&&t.pageY>0+e.top?b.fadeIn(200):y||b.fadeOut(200),!m||i&&m){z=t.pageX,D=t.pageY;var o=s.width()*h,d=s.height()*h,e=s.offset();b.css("background-size",o,d);var u=b.width()/2,l=b.height()/2,c=-t.pageX*h+u+e.left*h,p=-t.pageY*h+l+e.top*h,f=c+"px "+p+"px",g=t.pageX-u-e.left,v=t.pageY-l-e.top;b.css({left:g,top:v,backgroundPosition:f}),b.attr("data-position",f)}}}),s.on("mouseleave touchend",function(){d&&(clearTimeout(l),l=setTimeout(function(){e(!0)},u),clearTimeout(l))}),TS_VCSC_SimulateTouchEvents(b,!1),w&&TS_VCSC_IsTouchDevice){Hammer(s).on("pinchin",function(t){return t.preventDefault(),r=!0,scale=t.gesture.scale,p=-Math.round(100*scale).toFixed(0)/100,!1}).on("pinchout",function(t){return t.preventDefault(),r=!0,scale=t.gesture.scale,p=(Math.round(400*scale)/4).toFixed(0)/100,p>10&&(p=10),!1}).on("release",function(e){return e.preventDefault(),r&&(h=parseInt(b.attr("data-zoom"))+p,1>h?h=1:h>10&&(h=10),t(),r=!1),!1})}j&&!TS_VCSC_MobileDevice&&(s.on("mouseenter",function(){jQuery("body, html").addClass("ts-composer-extensions-noscroll")}),s.on("mouseleave",function(){r||jQuery("body, html").removeClass("ts-composer-extensions-noscroll")}),s.bind("mousewheel",function(e,a){a>0?h+=Q:h>1&&(h-=Q),1>h?h=1:h>10&&(h=10),t()})),y&&b.fadeIn(200),b.attr("data-zoom",h),C.empty().html(h+"x"),h=parseInt(h),_&&(k.val(h),x.empty().html(h+"x")),jQuery(window).on("debouncedresize",function(){a()})}),jQuery(".ts-image-zoomer-container").each(function(){function e(){"tall"==n?(i.height("100%"),i.width("100%"),h=a.width(),p=h/o/2,i.css("width",h+"px"),i.css("height",p+"px")):(i.height("100%"),i.width("100%"),h=r.width(),p=r.height(),i.css("width",h+"px"),i.css("height",p+"px")),i.TS_VCSC_ImageZoomer("resize"),i.TS_VCSC_ImageZoomer("pan",50,50)}var a=jQuery(this),i=a.find(".ts-image-zoomer-viewer"),r=(a.find(".ts-image-zoomer-preview"),a.find(".ts-image-zoomer-holder")),s=a.attr("data-position"),n=a.attr("data-aspect"),o=a.attr("data-ratio"),d=(parseInt(a.attr("data-width")),parseInt(a.attr("data-height")),"true"==a.attr("data-scale")?!0:!1),u="true"==a.attr("data-reset")?!0:!1,l="true"==a.attr("data-rotate")?!0:!1,c="true"==a.attr("data-lightbox")?!0:!1,h=(a.width(),r.width()),p=r.height();r.show(),"tall"==n?(i.height("100%"),i.width("100%"),h=a.width(),p=h/o/2,i.css("width",h+"px"),i.css("height",p+"px")):(i.height("100%"),i.width("100%"),h=r.width(),p=r.height(),i.css("width",h+"px"),i.css("height",p+"px")),i.TS_VCSC_ImageZoomer({callback:t.noop,controls:{position:s,zoomIn:null,zoomOut:null,zoomLevel:null,next:null,previous:null,reset:null,rotate:null,lightbox:null},text:{zoomIn:$TS_VCSC_Magnify_ZoomIn,zoomOut:$TS_VCSC_Magnify_ZoomOut,zoomLevel:$TS_VCSC_Magnify_ZoomLevel,next:$TS_VCSC_Magnify_Next,previous:$TS_VCSC_Magnify_Previous,reset:$TS_VCSC_Magnify_Reset,rotate:$TS_VCSC_Magnify_Rotate,lightbox:$TS_VCSC_Magnify_Lightbox},customClass:"",enertia:.2,increment:.01,marginMin:0,marginMax:0,zoomLevel:d,reset:u,rotate:l,lightbox:c,retina:!1,source:null}),jQuery(window).on("debouncedresize",function(){e()
})}),jQuery(".ts_html5_audio_hide").each(function(){"false"==jQuery(this).attr("data-show")&&jQuery(this).click()}),jQuery(".ts_html5_video_hide").each(function(){"false"==jQuery(this).attr("data-show")&&jQuery(this).click()}),jQuery(".ts-imagehover-truncate").each(function(){var t=jQuery(this),e=t.find(".maskcontent");jQuery(window).on("debouncedresize",function(){e.css("height","auto");var a=t.find(".mask").height(),i=t.find(".ts-image-hover-title").outerHeight(!0),r=t.find(".ts-image-hover-button").outerHeight(!0);if(""!=e)var s=parseInt(e.css("paddingTop").replace("px",""))+parseInt(e.css("paddingBottom").replace("px","")),n=parseInt(e.css("marginTop").replace("px",""))+parseInt(e.css("marginBottom").replace("px",""));else var s=0,n=0;var o=a-i-r-s-n;0!=e.find(".badonkatrunc-wrapper").length&&e.badonkatrunc("destroy"),e.css("height",o+"px"),e.badonkatrunc({automaticSizeTracking:!1,fitDirection:"vertical",minimumFontSize:1,fontSizeSynced:!0,letterSpacingSynced:!0,truncate:!0,truncateOnlyWholeWords:!0}),setTimeout(function(){e.badonkatrunc("refresh"),e.height(e.find(".badonkatrunc-wrapper").outerHeight(!0))},100)})}),jQuery(".ts-logohover-truncate").each(function(){var t=jQuery(this),e=t.find(".logotitle");jQuery(window).on("debouncedresize",function(){if(0!=e.length){e.css("height","auto");var a=t.find(".mask").height(),i=t.find(".maskcontent").outerHeight(!0),r=parseInt(e.css("paddingTop").replace("px",""))+parseInt(e.css("paddingBottom").replace("px","")),s=parseInt(e.css("marginTop").replace("px",""))+parseInt(e.css("marginBottom").replace("px","")),n=a-i-r-s;0!=e.find(".badonkatrunc-wrapper").length&&e.badonkatrunc("destroy"),e.css("height",n+"px"),e.badonkatrunc({automaticSizeTracking:!1,fitDirection:"horizontal",minimumFontSize:.75,maximumFontSize:1.75,fontSizeSynced:!0,letterSpacingSynced:!0,truncate:!0,truncateOnlyWholeWords:!1}),setTimeout(function(){e.badonkatrunc("refresh"),e.height("auto")},100)}})}),jQuery(window).on("debouncedresize",function(){e(),i(),r(),s(),e(),i(),r(),s()}),"undefined"!=typeof jQuery.fn.waypoint&&(jQuery(".ts-vcsc-font-icon-viewport").each(function(){jQuery(this).css({opacity:0,"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"',filter:"alpha(opacity=0)","-moz-opacity":0,"-khtml-opacity":0})}),jQuery(".ts-vcsc-font-icon-viewport").waypoint({handler:function(){var t=jQuery(this),e=t.attr("data-viewport"),a=parseInt(t.attr("data-delay"));setTimeout(function(){t.css({opacity:t.attr("data-opacity"),"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+100*t.attr("data-opacity")+')"',filter:"alpha(opacity="+100*t.attr("data-opacity")+")","-moz-opacity":t.attr("data-opacity"),"-khtml-opacity":t.attr("data-opacity")}),t.addClass(e),setTimeout(function(){t.removeAttr("data-viewport"),t.removeClass(e),t.removeClass("ts-vcsc-font-icon-viewport"),t.waypoint("destroy")},2e3)},a)},offset:"100%",triggerOnce:!0})),o(),jQuery(window).on("debouncedresize",function(){jQuery(".flip-container-frame.auto").each(function(){jQuery(this).height("100%"),jQuery(this).find(".flip-container-flipper-front").css("height","100%"),jQuery(this).find(".flip-container-flipper-back").css("height","100%")}),jQuery(".ts-flip-cube.auto").each(function(){jQuery(this).find(".ts-front").find(".ts-flip-content").css("height","100%"),jQuery(this).find(".ts-back").find(".ts-flip-content").css("height","100%"),jQuery(this).height("100%")}),o()}),TS_VCSC_Supports3D?jQuery(".flip-container-frame").on("mouseenter mouseleave",function(t){var e=jQuery(this).find(".ts-font-icon"),a=jQuery(this).find(".ts-font-icon").attr("data-animation"),i=jQuery(this).find(".flip-container-main").attr("data-speed");"mouseenter"===t.type||"touchstart"===t.type?e.removeClass(a):("mouseleave"===t.type||"touchend"===t.type)&&window.setTimeout(function(){e.addClass(a)},parseInt(i))}):jQuery(".flip-container-frame").on("mouseenter mouseleave",function(t){var e=jQuery(this).find(".ts-font-icon"),a=jQuery(this).find(".ts-font-icon").attr("data-animation"),i=jQuery(this).find(".flip-container-main").attr("data-speed"),r=jQuery(this).find(".flip-container-flipper-front"),s=jQuery(this).find(".flip-container-flipper-back");"mouseenter"===t.type||"touchstart"===t.type?(e.removeClass(a),r.fadeOut(i),s.fadeIn(i)):("mouseleave"===t.type||"touchend"===t.type)&&(window.setTimeout(function(){e.addClass(a)},parseInt(i)),s.fadeOut(i),r.fadeIn(i))}),jQuery(".ts-owlslider-parent").each(function(){function t(){S=jQuery("#"+$).find(".owl-item").length-1,Q=(new Date).setTime((new Date).getTime()+0),w=(new Date).setTime((new Date).getTime()+1e3*k),b=100,jQuery("#ts-owlslider-progressbar-"+z).prependTo(jQuery("#"+$)),h?jQuery("#"+$).find(".owl-dots").show():jQuery("#"+$).find(".owl-dots").hide(),window.setTimeout(function(){e(),jQuery(window).trigger("debouncedresize")},250),window.setTimeout(function(){B.trigger("refresh.owl.carousel"),r()},500)}function e(){if(1==o&&1==d){r(),jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width","0%"),v=!1,isRunning=!1;var t=1e3,e=60*t,a=3600*t,i=86400*t;Q=(new Date).setTime((new Date).getTime()+0),w=(new Date).setTime((new Date).getTime()+1e3*k);var s=w-Q;j=setInterval(function(){if(v===!1){C>0&&(w+=C,Q+=C,s=w-Q,C=0);var r=w-new Date,n=new Date-Q,o=parseInt(r/i),d=parseInt((r-o*i)/a),u=parseInt((r-o*i-d*a)/e),l=(parseInt((r-o*i-u*e-d*a)/t),n>0?n/s*b:0);jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width",l+"%").attr("data-progress",l)}l>=100&&(clearInterval(j),jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width","100%"),jQuery("#ts-owlslider-controls-next-"+z).click())},b)}}function a(){0==I&&(v=!0)}function i(){0==I&&(v=!1,jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width","0%"),clearInterval(j),e())}function r(){if(1==n){var t=jQuery("#"+$).find(".owl-stage").find(".active").length,e=jQuery("#"+$).find(".owl-stage .owl-item.active").first().height();if(1==t)var a=e;else{var i=Math.max.apply(null,jQuery("#"+$).find(".owl-stage").find(".active").map(function(){return jQuery(this).height()}).get());if(i>e)var a=i;else var a=e}jQuery("#"+$).find(".owl-stage-outer").height(a+5)}}if(jQuery(this).hasClass("ts-vcsc-anyslider"))var s=!0;else var s=!1;var n=jQuery(this).attr("data-height");n="false"==n?!1:!0;var o=jQuery(this).attr("data-play");o="false"==o?!1:!0;var d=jQuery(this).attr("data-bar"),u=jQuery(this).attr("data-speed");1==o&&("false"==d?(d=!1,o=!0):(d=!0,o=!0));var l=jQuery(this).attr("data-hover");l="false"==l?!1:!0;var c=jQuery(this).attr("data-navigation");c="false"==c?!1:!0;var h=jQuery(this).attr("data-dots");h="false"==h?!1:!0;var p=jQuery(this).attr("data-loop");p="false"==p?!1:!0;var m=jQuery(this).attr("data-rtl");m="false"==m?!1:!0;var f=jQuery(this).attr("data-mobile");if(f="false"==f?!1:!0,0==TS_VCSC_MobileDevice||1==TS_VCSC_MobileDevice&&1==f)var g=jQuery(this).attr("data-animationin"),y=jQuery(this).attr("data-animationout");else var g="",y="";var v,j,Q,w,b,C,_=(jQuery(this).attr("data-color"),jQuery(this).attr("data-items")),x=jQuery(this).parent(),k=parseInt(u)/1e3,I=!1,S=0;$isLastItem=!1,$isFirstItem=!0;var T=($current=$before=$after=$change=null,o),$=jQuery(this).attr("id"),z=jQuery(this).attr("data-id"),D="true"==jQuery(this).attr("data-breakpointscustom")?!0:!1,M=jQuery(this).attr("data-breakpointitems");if(""!=M&&void 0!=M&&1==D?(M=M.split(","),8!=M.length&&(D=!1)):D=!1,D)var V=1==parseInt(_)?1:parseInt(_)>M[0]?M[0]:parseInt(_),A=1==parseInt(_)?1:parseInt(_)>M[1]?M[1]:parseInt(_),F=1==parseInt(_)?1:parseInt(_)>M[2]?M[2]:parseInt(_),H=1==parseInt(_)?1:parseInt(_)>M[3]?M[3]:parseInt(_),L=1==parseInt(_)?1:parseInt(_)>M[4]?M[4]:parseInt(_),P=1==parseInt(_)?1:parseInt(_)>M[5]?M[5]:parseInt(_),E=1==parseInt(_)?1:parseInt(_)>M[6]?M[6]:parseInt(_),O=1==parseInt(_)?1:parseInt(_)>M[7]?M[7]:parseInt(_);else var V=1,A=1==parseInt(_)?1:parseInt(_)>2?2:parseInt(_),F=1==parseInt(_)?1:parseInt(_)>3?3:parseInt(_),H=1==parseInt(_)?1:parseInt(_)>4?4:parseInt(_),L=1==parseInt(_)?1:parseInt(_)>5?5:parseInt(_),P=1==parseInt(_)?1:parseInt(_)>6?6:parseInt(_),E=1==parseInt(_)?1:parseInt(_)>7?7:parseInt(_),O=1==parseInt(_)?1:parseInt(_)>8?8:parseInt(_);"rtl"==jQuery("body").css("direction")&&0==m&&jQuery(this).css("direction","ltr");var B=jQuery(this).owlCarousel2({animateOut:y,animateIn:g,margin:10,smartSpeed:450,autoHeight:n,responsive:{0:{items:V},360:{items:A},720:{items:F},960:{items:H},1280:{items:L},1440:{items:P},1600:{items:E},1920:{items:O}},responsiveClass:!0,responsiveBaseElement:x,responsiveRefreshRate:250,items:parseInt(_),loop:p,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,stagePadding:0,startPosition:0,rtl:m,nav:!1,navRewind:!0,navText:["<",">"],dots:!0,dotsEach:!1,buttons:!1,autoplay:0==d?o:!1,autoplayTimeout:parseInt(u),autoplayHoverPause:l,onInitialized:t,onDrag:a,onDragged:i});1==o&&($play_start=jQuery("#ts-owlslider-controls-play-"+z),$play_start.on("click",function(){if(jQuery(this).hasClass("active")){var t=new Date;v=!0,T=!1,I=!0,C=0,jQuery(this).attr("data-mouseenterTime",t.getTime()),0==d&&B.trigger("stop.owl.autoplay"),jQuery(this).removeClass("active"),jQuery(this).find("span").alterClass("ts-ecommerce-*","ts-ecommerce-play")}else{var t=new Date;v=!1,T=!0,I=!1,C=t.getTime()-jQuery(this).attr("data-mouseenterTime"),1==d?jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width","0%"):B.trigger("play.owl.autoplay"),jQuery(this).addClass("active"),jQuery(this).find("span").alterClass("ts-ecommerce-*","ts-ecommerce-pause");var e=0,a=jQuery("#"+$).find(".owl-stage").children(".owl-item").length;jQuery("#"+$).find(".owl-stage").children(".owl-item").each(function(){e++,e==a&&jQuery(this).hasClass("active")&&($isLastItem=!0,$isFirstItem=!1)}),(1==$isLastItem&&0==p&&0==d||jQuery("#"+$).find(".owl-stage .owl-item:last-child").hasClass("active")&&0==p&&0==d)&&B.trigger("to.owl.carousel",[0,0])}})),(1==c||1==o)&&($play_prev=jQuery("#ts-owlslider-controls-prev-"+z),$play_next=jQuery("#ts-owlslider-controls-next-"+z),$play_prev.on("click",function(){if(1==o&&0==d&&B.trigger("stop.owl.autoplay"),1==d&&(v=!0,jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width","100%"),clearInterval(j)),0==p){var t=0,e=jQuery("#"+$).find(".owl-stage").children(".owl-item").length;S=e-1,jQuery("#"+$).find(".owl-stage").children(".owl-item").each(function(){t++,1==t&&jQuery(this).hasClass("active")&&($isLastItem=!1,$isFirstItem=!0)})}jQuery("#ts-owlslider-controls-play-"+z).addClass("active").find("span").alterClass("ts-ecommerce-*","ts-ecommerce-pause"),1==$isFirstItem&&0==p||jQuery("#"+$).find(".owl-stage .owl-item:first-child").hasClass("active")&&0==p?(B.trigger("to.owl.carousel",[S,0]),$isFirstItem=!1):B.trigger("prev.owl.carousel")}),$play_next.on("click",function(){if(1==o&&0==d&&B.trigger("stop.owl.autoplay"),1==d&&(v=!0,jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width","100%"),clearInterval(j)),0==p){var t=0,e=jQuery("#"+$).find(".owl-stage").children(".owl-item").length;jQuery("#"+$).find(".owl-stage").children(".owl-item").each(function(){t++,t==e&&jQuery(this).hasClass("active")&&($isLastItem=!0,$isFirstItem=!1)})}jQuery("#ts-owlslider-controls-play-"+z).addClass("active").find("span").alterClass("ts-ecommerce-*","ts-ecommerce-pause"),1==$isLastItem&&0==p||jQuery("#"+$).find(".owl-stage .owl-item:last-child").hasClass("active")&&0==p?(B.trigger("to.owl.carousel",[0,0]),$isLastItem=!1):B.trigger("next.owl.carousel")})),B.find(".owl-stage-outer").on("mouseenter mouseleave",function(t){if(1==o&&1==d&&1==l)if(0==I){var e=new Date;"mouseenter"===t.type||"touchstart"===t.type?(v=!0,C=0,jQuery(this).attr("data-mouseenterTime",e.getTime()),T=!1):("mouseleave"===t.type||"touchend"===t.type)&&(v=!1,C=e.getTime()-jQuery(this).attr("data-mouseenterTime"),T=!0)}else v=!0,C=0,T=!1;else 1==o&&0==d&&1==l&&1==I&&(v=!0,C=0,T=!1)}),B.on("change.owl.carousel",function(t){if(t.namespace&&"position"==t.property.name){var e=t.relatedTarget;$current=t.item.index+1,S=t.item.count,$before=e.relative(e.normalize(e.current(),!1))+1,$after=e.relative(e.normalize(t.property.value,!1))+1,$change=!0,1==o&&1==d&&1==l||1==o&&1==d&&0==l?(1==d&&(jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width","100%"),clearInterval(j)),0==T&&1==o&&0==I&&(T=!0),$after==S||jQuery("#"+$).children(".owl-stage .owl-item:last-child").hasClass("active")?($isLastItem=!0,$isFirstItem=!1):($isLastItem=!1,$isFirstItem=1==$after?!0:!1),0==T&&1==o&&0==I&&(T=!0)):1==o&&0==d&&1==l&&(0==T&&1==o&&0==I&&(T=!0),$after==S||jQuery("#"+$).children(".owl-stage .owl-item:last-child").hasClass("active")?($isLastItem=!0,$isFirstItem=!1):($isLastItem=!1,$isFirstItem=1==$after?!0:!1),0==T&&1==o&&0==I&&(T=!0))}}),B.on("changed.owl.carousel",function(t){!t.namespace||"position"!=t.property.name}),B.on("resized.owl.carousel",function(){window.setTimeout(function(){s&&(jQuery(window).trigger("debouncedresize"),r())},500)}),B.on("translated.owl.carousel",function(){if(1==o&&1==d&&1==l)jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width","0%"),C=0,window.setTimeout(function(){e()},0);else if(1==o&&1==d&&0==l)jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width","0%"),C=0,window.setTimeout(function(){e()},0);else if(1==o&&0==d&&1==l){C=0,1==I&&0==d&&B.trigger("stop.owl.autoplay");var t=0,a=jQuery("#"+$).find(".owl-stage").children(".owl-item").length;jQuery("#"+$).find(".owl-stage").children(".owl-item").each(function(){t++,t==a&&jQuery(this).hasClass("active")&&($isLastItem=!0,$isFirstItem=!1)}),1==$isLastItem&&0==p&&0==I&&1==o&&window.setTimeout(function(){jQuery("#ts-owlslider-controls-next-"+z).click()},parseInt(u))}else if(1==o&&0==d&&0==l){var t=0,a=jQuery("#"+$).find(".owl-stage").children(".owl-item").length;jQuery("#"+$).find(".owl-stage").children(".owl-item").each(function(){t++,t==a&&jQuery(this).hasClass("active")&&($isLastItem=!0,$isFirstItem=!1)}),1==$isLastItem&&0==p&&0==I&&1==o&&window.setTimeout(function(){jQuery("#ts-owlslider-controls-next-"+z).click()},parseInt(u))}r()})}),jQuery(".ts-flexslider-container").each(function(){function t(){if(h=r.width(),$slider_breaks=l.split(","),$slider_breaks.length>0){for(var t in $slider_breaks.sort(function(t,e){return t-e}))$checkup=a($slider_breaks,h);return 0==$checkup?1:$checkup}return 1}function e(){if(h=r.width(),$slider_items=1,$slider_breaks=u.split(","),$slider_breaks.length>0)for(var t in $slider_breaks.sort(function(t,e){return t-e}))$slider_items=a($slider_breaks,h);else $slider_items=1;return $slider_items>T?0==T?1:T:0==$slider_items?1:$slider_items}function a(t,e){for(var a=t.length;t[--a]>e;);return++a}function i(){if(1==Q&&1==_){jQuery("#ts-flexslider-progressbar-container-"+s).children(".ts-flexslider-progressbar").css("width","0%"),isRunning=!1;var t=1e3,e=60*t,a=3600*t,i=86400*t;H=(new Date).setTime((new Date).getTime()+0),L=(new Date).setTime((new Date).getTime()+1e3*N);var r=L-H;F=setInterval(function(){if(A===!1&&w){E>0&&(L+=E,H+=E,r=L-H,E=0);var n=L-new Date,o=new Date-H,d=parseInt(n/i),u=parseInt((n-d*i)/a),l=parseInt((n-d*i-u*a)/e),c=(parseInt((n-d*i-l*e-u*a)/t),o>0?o/r*P:0);jQuery("#ts-flexslider-progressbar-container-"+s).children(".ts-flexslider-progressbar").css("width",c+"%").attr("data-progress",c)}c>=100&&(clearInterval(F),jQuery("#ts-flexslider-progressbar-container-"+s).children(".ts-flexslider-progressbar").css("width","100%"),M.click())},P)}}if(!jQuery(this).hasClass("ts-timeline-css-flexslider-container")){var r=jQuery(this),s=r.attr("data-id"),n="true"==r.attr("data-combo")?!0:!1,o=r.attr("data-main"),d=r.attr("data-thumbs"),u=jQuery("#"+o).attr("data-breaks"),l=jQuery("#"+d).attr("data-breaks"),c="true"==r.attr("data-frontend")?!0:!1,h=r.width(),p=r.attr("data-animation"),m="true"==r.attr("data-navigation")?!0:!1,f="",g=0,y=!1,v=!0,j="true"==r.attr("data-rtl")?!0:!1,Q="true"==r.attr("data-play")?!0:!1,w=Q,b=parseInt(r.attr("data-speed")),C=600,_="true"==r.attr("data-bar")?!0:!1,x="true"==r.attr("data-hover")?!0:!1,k=!0,I=0,S=parseInt(r.attr("data-margin")),T=parseInt(r.attr("data-images"));if("fade"==p&&0==n&&(T=1),1==T&&0==n&&(S=0),r.hasClass("ts-anyslider-flexslider-container"))var $=".slides > div",z=!0;else var $=".slides > li",z=!1;var D,M,V,A,F,H,L,P,E,O="",B="",N=parseInt(b)/1e3,R=!1;if("rtl"==jQuery("body").css("direction")&&0==$page_rtl&&jQuery(this).css("direction","ltr"),jQuery("#"+o).find(".slides").on("mouseenter mouseleave",function(t){if(1==Q&&1==_&&1==x)if(0==R){var e=new Date;"mouseenter"===t.type||"touchstart"===t.type?(A=!0,E=0,jQuery(this).attr("data-mouseenterTime",e.getTime()),w=!1):("mouseleave"===t.type||"touchend"===t.type)&&(A=!1,E=e.getTime()-jQuery(this).attr("data-mouseenterTime"),w=!0)}else A=!0,E=0,w=!1;else 1==Q&&0==_&&1==x&&1==R&&(A=!0,E=0,w=!1)}),1==Q){var W=jQuery("#ts-flexslider-controls-play-"+s);W.on("click",function(){if(jQuery(this).hasClass("active")){var t=new Date;A=!0,w=!1,R=!0,E=0,jQuery(this).attr("data-mouseenterTime",t.getTime()),0==_&&O.stop(),jQuery(this).removeClass("active"),jQuery(this).find("span").alterClass("ts-ecommerce-*","ts-ecommerce-play"),1==Q&&1==_&&(jQuery("#ts-flexslider-progressbar-container-"+s).children(".ts-flexslider-progressbar").css("width","0%"),clearInterval(F),i())}else{var t=new Date;A=!1,w=!0,R=!1,E=0,1==_?jQuery("#ts-flexslider-progressbar-container-"+s).children(".ts-flexslider-progressbar").css("width","0%"):O.play(),jQuery(this).addClass("active"),jQuery(this).find("span").alterClass("ts-ecommerce-*","ts-ecommerce-pause"),1==Q&&1==_&&(clearInterval(F),i())}})}var B;c||1!=n||jQuery("#"+d).TS_VCSC_FlexSlider({animation:"slide",direction:"horizontal",controlNav:m,animationLoop:!0,reverse:!1,smoothHeight:y,slideshow:!1,pauseOnAction:!1,pauseOnHover:!0,itemWidth:h/t()-S,itemMargin:S,startAt:0,minItems:t(),maxItems:t(),move:0,asNavFor:"#"+o,prevText:"",nextText:"",rtl:j,mousewheel:!0,start:function(e){B=e,e.slides.removeClass("current");for(var a=0,i=t(),r=0;i>r;r++)e.slides.eq(r).addClass("current"),1==v&&e.slides.eq(r).height()>a&&(a=e.slides.eq(r).height());1==v&&jQuery("#"+d).stop().animate({height:a},250)},before:function(e){var a=0,i=t();e.slides.removeClass("current");for(var r=0;i>r;r++)e.slides.eq(r+e.animatingTo*i).addClass("current"),1==v&&e.slides.eq(r+e.animatingTo*i).height()>a&&(a=e.slides.eq(r+e.animatingTo*i).height());1==v&&a!=jQuery("#"+o).height()&&jQuery("#"+d).stop().animate({height:a},C/2)},after:function(){},end:function(){},added:function(){},removed:function(){}});var O;jQuery("#"+o).TS_VCSC_FlexSlider({animation:p,direction:"horizontal",selector:$,controlNav:1==n?!1:m,animationLoop:1==n?!1:!0,smoothHeight:y,reverse:!1,slideshow:1==Q&&1==_?!1:Q,slideshowSpeed:b,animationSpeed:C,pauseOnAction:!1,pauseOnHover:1==Q&&1==_?!1:x,pausePlay:!0,pauseText:"",playText:"",initDelay:0,itemWidth:1==n?0:h/e()-S,itemMargin:S,minItems:1==n?1:e(),maxItems:1==n?0:e(),move:1,startAt:0,prevText:"",nextText:"",sync:1==c||0==n?"":"#"+d,rtl:j,mousewheel:1==n?!1:!0,start:function(t){O=t,$isPlaying=t.playing,M=t.find(".flex-next"),V=t.find(".flex-prev"),jQuery("#ts-flexslider-controls-"+s).show(),Q&&_&&(H=(new Date).setTime((new Date).getTime()+0),L=(new Date).setTime((new Date).getTime()+1e3*N),P=100,A=!1,i()),t.slides.removeClass("current"),m&&(f=O.find(".flex-control-paging"),g=f.height()+10),z&&1==e()&&t.slides.each(function(){j?jQuery(this).css("margin","0 "+S+"px 0 0"):jQuery(this).css("margin","0 0 0 "+S+"px")});for(var a=0,r=0;r<e();r++)t.slides.eq(r).addClass("current"),1==v&&t.slides.eq(r).height()>a&&(a=t.slides.eq(r).height());1==v&&jQuery("#"+o).stop().animate({height:a+g},250)},before:function(t){$isPlaying=t.playing,Q&&_&&(clearInterval(F),window.setTimeout(function(){i()},C));var a=0;t.slides.removeClass("current");for(var r=0;r<e();r++)t.slides.eq(r+t.animatingTo).addClass("current"),1==v&&t.slides.eq(r+t.animatingTo).height()>a&&(a=t.slides.eq(r+t.animatingTo).height());a+=g,1==v&&a!=jQuery("#"+o).height()&&jQuery("#"+o).stop().animate({height:a},C/2)},after:function(t){$isPlaying=t.playing,I=t.currentSlide,D=t.count,0==w&&1==Q&&0==R&&(w=!0),I==D-1?Q&&w&&setTimeout(function(){jQuery("#"+o).data("flexslider").flexAnimate(0,!0),1==n&&jQuery("#"+d).data("flexslider").flexAnimate(0,!0),0==_&&(O.stop(),O.play())},b):Q&&w&&0==_&&(O.stop(),O.play())},end:function(){}}),jQuery(window).on("debouncedresize",function(){if(h=r.width(),!c){if(1==n){var a=t(),i=h/a-S;""!=B&&(B.vars.minItems=a,B.vars.maxItems=a,B.vars.itemWidth=i,B.setup())}else if(0==n){var a=e(),i=h/a-S;""!=O&&(O.vars.minItems=a,O.vars.maxItems=a,O.vars.itemWidth=i)}""!=O&&O.setup(),setTimeout(function(){jQuery("#"+o).data("flexslider").flexAnimate(0,!0)},C),setTimeout(function(){var a=0;if(I=0,""!=O){O.slides.removeClass("current");for(var i=0;i<e();i++)O.slides.eq(i+I).addClass("current"),1==v&&O.slides.eq(i+I).height()>a&&(a=O.slides.eq(i+I).height());a+=g,1==v&&a!=jQuery("#"+o).height()&&jQuery("#"+o).stop().animate({height:a},C/2),O.update()}if(1==n&&""!=B){a=0,B.slides.removeClass("current");for(var r=t(),i=0;r>i;i++)B.slides.eq(i).addClass("current"),1==v&&B.slides.eq(i).height()>a&&(a=B.slides.eq(i).height());1==v&&a!=jQuery("#"+d).height()&&jQuery("#"+d).stop().animate({height:a},C/2),B.update(),jQuery("#"+d).find(".flex-control-nav").find("li:first").find("a").click()}else jQuery("#"+o).find(".flex-control-nav").find("li:first").find("a").click()},C)}}),k&&jQuery("#"+o).find(".nch-lightbox-media").each(function(){jQuery(this).on("click",function(){_&&Q&&0==R?(A=!0,w=!1,R=!0,jQuery("#ts-flexslider-progressbar-container-"+s).children(".ts-flexslider-progressbar").css("width","0%"),E=0,clearInterval(F),W.click()):0==_&&Q&&(O.stop(),W.click())})})}}),jQuery(".ts-lightbox-gallery-slicebox").each(function(){var e,a,i,r,s,n,o=jQuery(this),d=o.attr("data-id"),u=o.find(".ts-slicebox-controls-arrows"),l=u.find(".ts-slicebox-controls-next"),c=u.find(".ts-slicebox-controls-prev"),h=o.find(".ts-slicebox-controls-options"),p=h.find(".ts-slicebox-controls-play"),m=h.find(".ts-slicebox-controls-pause"),f=o.find(".ts-slicebox-controls-dots"),g=o.find(".ts-lightbox-gallery-slicebox-slider"),y=!1,v="true"==o.attr("data-play")?!0:!1,j=v,Q=parseInt(o.attr("data-speed")),w="true"==o.attr("data-bar")?!0:!1,b="true"==o.attr("data-hover")?!0:!1,C=600,_=!0,x=parseInt(Q)/1e3,k=!1;"rtl"==jQuery("body").css("direction")&&0==y&&jQuery(this).css("direction","ltr");var I=function(){var o=u.hide(),y=h.hide(),I=f.hide(),S=I.children("span"),T=g.slicebox({orientation:"r",perspective:1200,cuboidsCount:3,cuboidsRandom:!0,maxCuboidsCount:6,disperseFactor:0,colorHiddenSides:"#222",sequentialFactor:150,speed:C,easing:"ease",autoplay:1==v&&1==w||1==v&&0==w&&1==b?!1:v,interval:Q+C,fallbackFadeSpeed:300,onReady:function(){y.show(),o.show(),I.show(),1!=v||1!=w&&1!=b||(i=(new Date).setTime((new Date).getTime()+0),r=(new Date).setTime((new Date).getTime()+1e3*x),s=100,e=!1,D())},onBeforeChange:function(t){S.removeClass("nav-dot-current"),S.eq(t).addClass("nav-dot-current"),1!=v||1!=w&&1!=b||(clearInterval(a),setTimeout(function(){D()},C))},onAfterChange:function(){return 0==j&&1==v&&0==k&&(j=!0),!1}}),$=function(){z()},z=function(){l.on("click",function(){return T.next(),1!=v||1!=w&&1!=b?1==v&&0==k?T.play():(m.hide(),p.show()):(clearInterval(a),jQuery("#ts-slicebox-progressbar-container-"+d).children(".ts-slicebox-progressbar").css("width","100%")),!1}),c.on("click",function(){return T.previous(),1!=v||1!=w&&1!=b?1==v&&0==k?T.play():(m.hide(),p.show()):(clearInterval(a),jQuery("#ts-slicebox-progressbar-container-"+d).children(".ts-slicebox-progressbar").css("width","100%")),!1}),p.on("click",function(){new Date;return e=!1,j=!0,k=!1,n=0,0==v||0==w&&0==b?T.play():1!=v||1!=w&&1!=b||(jQuery("#ts-slicebox-progressbar-container-"+d).children(".ts-slicebox-progressbar").css("width","0%"),clearInterval(a),D()),p.hide(),m.show(),!1}),m.on("click",function(){var t=new Date;return e=!0,j=!1,k=!0,n=0,jQuery(this).attr("data-mouseenterTime",t.getTime()),0==v||0==w&&0==b?T.pause():1==v&&1==w&&jQuery("#ts-slicebox-progressbar-container-"+d).children(".ts-slicebox-progressbar").css("width","0%"),1!=v||1!=w&&1!=b||(clearInterval(a),D()),m.hide(),p.show(),!1}),S.each(function(e){jQuery(this).on("click",function(){var i=t(this);return T.isActive()||(S.removeClass("nav-dot-current"),i.addClass("nav-dot-current")),T.jump(e+1),0==v||0==w?(m.hide(),p.show()):1!=v||1!=w&&1!=b||(clearInterval(a),jQuery("#ts-slicebox-progressbar-container-"+d).children(".ts-slicebox-progressbar").css("width","100%")),!1})}),g.on("mouseenter mouseleave",function(t){if(0==k){var a=new Date;"mouseenter"===t.type||"touchstart"===t.type?(e=!0,n=0,jQuery(this).attr("data-mouseenterTime",a.getTime()),j=!1):("mouseleave"===t.type||"touchend"===t.type)&&(e=!1,n=a.getTime()-jQuery(this).attr("data-mouseenterTime"),j=!0)}else e=!0,n=0,j=!1}),_&&g.find(".nch-lightbox-media").each(function(){jQuery(this).on("click",function(){w&&v&&0==k?(e=!0,j=!1,k=!0,jQuery("#ts-slicebox-progressbar-container-"+d).children(".ts-slicebox-progressbar").css("width","0%"),n=0,clearInterval(a),m.hide(),p.show()):0==w&&v&&(T.pause(),m.hide(),p.show())})})},D=function(){if(1==v){1==w&&jQuery("#ts-slicebox-progressbar-container-"+d).children(".ts-slicebox-progressbar").css("width","0%"),isRunning=!1;var t=1e3,o=60*t,u=3600*t,c=86400*t;i=(new Date).setTime((new Date).getTime()+0),r=(new Date).setTime((new Date).getTime()+1e3*x);var h=r-i;a=setInterval(function(){if(e===!1&&j){n>0&&(r+=n,i+=n,h=r-i,n=0);var p=r-new Date,m=new Date-i,f=parseInt(p/c),g=parseInt((p-f*c)/u),y=parseInt((p-f*c-g*u)/o),v=(parseInt((p-f*c-y*o-g*u)/t),m>0?m/h*s:0);1==w&&jQuery("#ts-slicebox-progressbar-container-"+d).children(".ts-slicebox-progressbar").css("width",v+"%").attr("data-progress",v)}v>=100&&(clearInterval(a),1==w&&jQuery("#ts-flexslider-slicebox-container-"+d).children(".ts-slicebox-progressbar").css("width","100%"),l.click())},s)}};return{init:$}}();I.init()}),jQuery(".ts-nivoslider-container").each(function(){function t(){if(1==r&&1==g){jQuery("#ts-nivoslider-progressbar-container-"+i).children(".ts-nivoslider-progressbar").css("width","0%"),isRunning=!1;var t=1e3,e=60*t,a=3600*t,n=86400*t;h=(new Date).setTime((new Date).getTime()+0),p=(new Date).setTime((new Date).getTime()+1e3*Q);var o=p-h;c=setInterval(function(){if(l===!1&&s){f>0&&(p+=f,h+=f,o=p-h,f=0);var r=p-new Date,u=new Date-h,g=parseInt(r/n),y=parseInt((r-g*n)/a),v=parseInt((r-g*n-y*a)/e),j=(parseInt((r-g*n-v*e-y*a)/t),u>0?u/o*m:0);jQuery("#ts-nivoslider-progressbar-container-"+i).children(".ts-nivoslider-progressbar").css("width",j+"%").attr("data-progress",j)}j>=100&&(clearInterval(c),jQuery("#ts-nivoslider-progressbar-container-"+i).children(".ts-nivoslider-progressbar").css("width","100%"),d.click())},m)}}var e=jQuery(this),a=e.find(".ts-nivoslider-parent"),i=a.attr("data-id"),r="true"==a.attr("data-play")?!0:!1,s=r,n=parseInt(a.attr("data-speed"));if("ontouchstart"in document.documentElement)var o=300;else var o=600;var d,u,l,c,h,p,m,f,g="true"==a.attr("data-bar")?!0:!1,y="true"==a.attr("data-hover")?!0:!1,v="true"==a.attr("data-navigation")?!0:!1,j=!0,Q=parseInt(n)/1e3,w=!1;if(a.TS_VCSC_NivoSlider({effect:"random",slices:15,boxCols:8,boxRows:4,animSpeed:o,pauseTime:n,startSlide:0,playpauseNav:1==r&&0==g?!0:!1,directionNav:!0,controlNav:v,controlNavThumbs:!1,pauseOnHover:1==r&&1==g?!1:!0,manualAdvance:1==r&&0==g?!1:!0,prevText:"",nextText:"",playText:"",pauseText:"",randomStart:!1,beforeChange:function(){r&&g&&clearInterval(c)},afterChange:function(){r&&g&&t()},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){d=a.find(".nivo-nextNav"),u=a.find(".nivo-prevNav"),$nivo_play=a.find(".nivo-playNav"),$nivo_pause=a.find(".nivo-pauseNav"),r&&g&&(h=(new Date).setTime((new Date).getTime()+0),p=(new Date).setTime((new Date).getTime()+1e3*Q),m=100,l=!1,t())}}),"ontouchstart"in document.documentElement||1==TS_VCSC_MobileDevice){1==TS_VCSC_MobileDevice&&(d.hide(),u.hide());{Hammer(a).on("swipeleft",function(){return d.trigger("click"),!1}),Hammer(a).on("swiperight",function(){return u.trigger("click"),!1})}}if(1==r&&1==g){var b=jQuery("#ts-nivoslider-controls-play-"+i),C=jQuery("#ts-nivoslider-controls-pause-"+i);b.on("click",function(){new Date;l=!1,s=!0,w=!1,f=0,jQuery("#ts-nivoslider-progressbar-container-"+i).children(".ts-nivoslider-progressbar").css("width","0%"),b.hide(),C.show(),jQuery(this).find("span").alterClass("ts-ecommerce-*","ts-ecommerce-pause"),clearInterval(c),t()}),C.on("click",function(){var e=new Date;l=!0,s=!1,w=!0,f=0,jQuery(this).attr("data-mouseenterTime",e.getTime()),b.show(),C.hide(),jQuery(this).find("span").alterClass("ts-ecommerce-*","ts-ecommerce-play"),jQuery("#ts-nivoslider-progressbar-container-"+i).children(".ts-nivoslider-progressbar").css("width","0%"),clearInterval(c),t()})}a.on("mouseenter mouseleave",function(t){if(1==r&&1==g&&1==y)if(0==w){var e=new Date;"mouseenter"===t.type||"touchstart"===t.type?(l=!0,f=0,jQuery(this).attr("data-mouseenterTime",e.getTime()),s=!1):("mouseleave"===t.type||"touchend"===t.type)&&(l=!1,f=e.getTime()-jQuery(this).attr("data-mouseenterTime"),s=!0)}else l=!0,f=0,s=!1;else 1==r&&0==g&&1==y&&1==w&&(l=!0,f=0,s=!1)}),j&&a.find(".nch-lightbox-media").each(function(){jQuery(this).on("click",function(){g&&r&&0==w?(l=!0,s=!1,w=!0,jQuery("#ts-nivoslider-progressbar-container-"+i).children(".ts-nivoslider-progressbar").css("width","0%"),f=0,clearInterval(c),C.click()):0==g&&r&&$nivo_pause.click()})})}),jQuery(".ts-timeline.ts-timeline-view").each(function(){function t(){show=i.find("li.ts-timeline-list-item.ts-timeline-visible").size()+d,f>=show?jQuery(this).closest(".ts-timeline").find("li.ts-timeline-list-item:lt("+show+")").fadeIn().addClass("ts-timeline-visible"):(p.fadeIn().addClass("ts-timeline-visible"),"desc"==n&&y.fadeIn(),w.hide()),setTimeout(function(){h.isotope("reloadItems"),e(),h.isotope("reLayout")},750)}function e(t){h.isotope({itemSelector:".ts-timeline-list-item.ts-timeline-visible",animationEngine:"best-available",itemPositionDataEnabled:!1,transformsEnabled:!0,resizesContainer:!0,sortAscending:t,getSortData:{eventOrder:function(t){return t.attr("data-order")}},sortBy:"eventOrder",layoutMode:layoutMode,spineTimeline:{gutterWidth:20,columnPadding:50,spineHolder:spineHolder},onLayout:function(){}},function(){setTimeout(function(){m.each(function(){if(jQuery(this).hasClass("ts-timeline-icon-half")){if(jQuery(this).next().hasClass("ts-timeline-text-wrap-inner")){var t=(parseInt(jQuery(this).next().outerHeight(!0))-parseInt(jQuery(this).outerHeight(!0)))/2;jQuery(this).animate({top:t+"px"},500)}}else if(jQuery(this).prev().hasClass("ts-timeline-text-wrap-inner")){var t=(parseInt(jQuery(this).prev().outerHeight(!0))-parseInt(jQuery(this).outerHeight(!0)))/2;jQuery(this).animate({top:t+"px"},500)}}),jQuery("#"+spineHolder).height(h.height())},750)})}function a(){i.each(function(){$this=jQuery(this),$this.width("100%"),h.width("100%"),$this.outerWidth()<=b?(layoutMode="masonry",p.each(function(){jQuery(this).width("100%").removeClass("colA").removeClass("colB").removeClass("ts-timeline-layout-spine").addClass("ts-timeline-layout-masonry"),jQuery(this).hasClass("ts-timeline-full")?(jQuery(this).find(".ts-timeline-full-colA").addClass("no-columns"),jQuery(this).find(".ts-timeline-full-colB").addClass("no-columns")):jQuery(this).hasClass("ts-timeline-break")&&jQuery(this).removeClass("ts-timeline-layout-spine").removeClass("ts-timeline-layout-masonry")}),jQuery("span",jQuery("#"+spineHolder)).remove()):(layoutMode="spineTimeline",p.each(function(){jQuery(this).hasClass("ts-timeline-full")?(jQuery(this).width("100%").removeClass("ts-timeline-layout-masonry").addClass("ts-timeline-layout-spine"),jQuery(this).find(".ts-timeline-full-colA").removeClass("no-columns"),jQuery(this).find(".ts-timeline-full-colB").removeClass("no-columns")):jQuery(this).hasClass("ts-timeline-break")?jQuery(this).removeClass("ts-timeline-layout-spine").removeClass("ts-timeline-layout-masonry"):jQuery(this).width("50%").removeClass("ts-timeline-layout-masonry").addClass("ts-timeline-layout-spine")
})),setTimeout(function(){h.hasClass("isotope")&&h.isotope("reloadItems"),e(C),h.isotope("reLayout"),m.each(function(){if(jQuery(this).hasClass("ts-timeline-icon-half")){if(jQuery(this).next().hasClass("ts-timeline-text-wrap-inner")){var t=(parseInt(jQuery(this).next().outerHeight(!0))-parseInt(jQuery(this).outerHeight(!0)))/2;jQuery(this).animate({top:t+"px"},500)}}else if(jQuery(this).prev().hasClass("ts-timeline-text-wrap-inner")){var t=(parseInt(jQuery(this).prev().outerHeight(!0))-parseInt(jQuery(this).outerHeight(!0)))/2;jQuery(this).animate({top:t+"px"},500)}}),jQuery("#"+spineHolder).height(h.height())},750)})}var i=jQuery(this),r=i.attr("data-lazy"),s=i.attr("data-count"),n=i.attr("data-order"),o=s,d=s,u=i.attr("data-trigger"),l=i.find(".ts-timeline-css-controls-asc"),c=i.find(".ts-timeline-css-controls-desc"),h=i.find("ul.ts-timeline-list"),p=i.find("li.ts-timeline-list-item"),m=(p.find(".ts-timeline-date"),p.find(".ts-timeline-icon")),f=p.length,g=0,y=i.find(".ts-timeline-footer-wrap"),v=i.find(".ts-timeline-header-wrap"),j=i.find(".ts-timeline-begin-top"),Q=i.find(".ts-timeline-begin-bottom"),w=i.find(".ts-timeline-load-more"),b=parseInt(i.attr("data-break"));spineHolder=i.find(".ts-timeline-spine").attr("id"),layoutMode="spineTimeline","asc"==n?(Q.fadeIn(),v.fadeIn()):j.fadeIn();var C=!0;l.on("click",function(){jQuery(this).hasClass("active")||(jQuery(this).toggleClass("active"),c.toggleClass("active"),C=C?!1:!0,Q.fadeIn(),v.fadeIn(),j.hide(),y.hide(),i.alterClass("ts-timeline-*","ts-timeline-asc"),p.alterClass("ts-timeline-order-*","ts-timeline-order-asc").attr("data-order","asc"),e(C))}),c.on("click",function(){jQuery(this).hasClass("active")||(jQuery(this).toggleClass("active"),l.toggleClass("active"),C=C?!1:!0,Q.hide(),v.hide(),j.fadeIn(),y.fadeIn(),i.alterClass("ts-timeline-*","ts-timeline-desc"),p.alterClass("ts-timeline-order-*","ts-timeline-order-desc").attr("data-order","desc"),e(C))}),p.each(function(){g++,jQuery(this).addClass("ts-timeline-order-"+n).attr("data-order",n).attr("data-number",g)}),"true"==r?(i.find("li.ts-timeline-list-item:lt("+o+")").addClass("ts-timeline-visible").fadeIn(),w.on("click",t)):(p.fadeIn().addClass("ts-timeline-visible"),"desc"==n&&y.fadeIn()),"true"==r&&"scroll"==u&&w.bind("inview",function(e,a,i,r){if(a){var s=jQuery(this);"top"==r||"bottom"==r||(s.addClass("ts-loadmore-visible"),t())}else s.removeClass("ts-loadmore-visible")}),e(C),a(),jQuery(window).on("debouncedresize",function(){a()}),jQuery(this).find(".ts-timeline-gallery-slider").each(function(){function t(){T=jQuery("#"+z).find(".owl-item").length-1,w=(new Date).setTime((new Date).getTime()+0),b=(new Date).setTime((new Date).getTime()+1e3*I),C=100,jQuery("#ts-owlslider-progressbar-"+D).prependTo(jQuery("#"+z)),jQuery("#"+z).find(".owl-dots").show(),window.setTimeout(function(){n(),i(),h.isotope("reloadItems"),e(),h.isotope("reLayout")},100)}function i(){if(1==d&&1==u){n(),jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width","0%"),j=!1,isRunning=!1;var t=1e3,e=60*t,a=3600*t,i=86400*t;w=(new Date).setTime((new Date).getTime()+0),b=(new Date).setTime((new Date).getTime()+1e3*I);var r=b-w;Q=setInterval(function(){if(j===!1){_>0&&(b+=_,w+=_,r=b-w,_=0);var s=b-new Date,n=new Date-w,o=parseInt(s/i),d=parseInt((s-o*i)/a),u=parseInt((s-o*i-d*a)/e),l=(parseInt((s-o*i-u*e-d*a)/t),n>0?n/r*C:0);jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width",l+"%").attr("data-progress",l)}l>=100&&(clearInterval(Q),jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width","100%"),jQuery("#ts-owlslider-controls-next-"+D).click())},C)}}function r(){0==S&&(j=!0)}function s(){0==S&&(j=!1,jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width","0%"),clearInterval(Q),i())}function n(){if(1==o){var t=jQuery("#"+z).find(".owl-stage").find(".active").length,e=jQuery("#"+z).find(".owl-stage .owl-item.active").first().height();if(1==t)var a=e;else{var i=Math.max.apply(null,jQuery("#"+z).find(".owl-stage").find(".active").map(function(){return jQuery(this).height()}).get());if(i>e)var a=i;else var a=e}jQuery("#"+z).find(".owl-stage-outer").height(a+5)}}var o=jQuery(this).attr("data-height");o="false"==o?!1:!0;var d=jQuery(this).attr("data-play");d="false"==d?!1:!0;var u=jQuery(this).attr("data-bar"),l=jQuery(this).attr("data-speed");1==d&&("false"==u?(u=!1,d=l):(u=!0,d=l));var c=jQuery(this).attr("data-hover");c="false"==c?!1:!0;var p=jQuery(this).attr("data-navigation");p="false"==p?!1:!0;var m=jQuery(this).attr("data-loop");m="false"==m?!1:!0;var f=jQuery(this).attr("data-rtl");f="false"==f?!1:!0;var g=jQuery(this).attr("data-mobile");if(g="false"==g?!1:!0,0==TS_VCSC_MobileDevice||1==TS_VCSC_MobileDevice&&1==g)var y=jQuery(this).attr("data-animationin"),v=jQuery(this).attr("data-animationout");else var y="",v="";var j,Q,w,b,C,_,x=(jQuery(this).attr("data-color"),jQuery(this).attr("data-items")),k=jQuery(this).parent(),I=parseInt(l)/1e3,S=!1,T=0;$isLastItem=!1,$isFirstItem=!0;var $=($current=$before=$after=$change=null,d),z=jQuery(this).attr("id"),D=jQuery(this).attr("data-id"),M=1,V=1==parseInt(x)?1:parseInt(x)>2?2:parseInt(x),A=1==parseInt(x)?1:parseInt(x)>3?3:parseInt(x),F=1==parseInt(x)?1:parseInt(x)>4?4:parseInt(x),H=1==parseInt(x)?1:parseInt(x)>5?5:parseInt(x),L=1==parseInt(x)?1:parseInt(x)>6?6:parseInt(x),P=1==parseInt(x)?1:parseInt(x)>7?7:parseInt(x),E=1==parseInt(x)?1:parseInt(x)>8?8:parseInt(x);"rtl"==jQuery("body").css("direction")&&0==f&&jQuery(this).css("direction","ltr");var O=jQuery(this).owlCarousel2({animateOut:v,animateIn:y,margin:10,smartSpeed:450,autoHeight:o,responsive:{0:{items:M},250:{items:V},500:{items:A},750:{items:F},1e3:{items:H},1250:{items:L},1500:{items:P},1750:{items:E}},responsiveClass:!0,responsiveBaseElement:k,responsiveRefreshRate:1e3,items:parseInt(x),loop:m,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,stagePadding:0,startPosition:0,rtl:f,nav:!1,navRewind:!0,navText:["<",">"],dots:!0,dotsEach:!1,buttons:!1,autoplay:0==u?d:!1,autoplayTimeout:parseInt(l),autoplayHoverPause:c,onInitialized:t,onDrag:r,onDragged:s});1==d&&($play_start=jQuery("#ts-owlslider-controls-play-"+D),$play_start.on("click",function(){if(jQuery(this).hasClass("active")){var t=new Date;j=!0,$=!1,S=!0,_=0,jQuery(this).attr("data-mouseenterTime",t.getTime()),0==u&&O.trigger("stop.owl.autoplay"),jQuery(this).removeClass("active"),jQuery(this).find("span").alterClass("ts-ecommerce-*","ts-ecommerce-play")}else{var t=new Date;j=!1,$=!0,S=!1,_=t.getTime()-jQuery(this).attr("data-mouseenterTime"),1==u?jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width","0%"):O.trigger("play.owl.autoplay"),jQuery(this).addClass("active"),jQuery(this).find("span").alterClass("ts-ecommerce-*","ts-ecommerce-pause");var e=0,a=jQuery("#"+z).find(".owl-stage").children(".owl-item").length;jQuery("#"+z).find(".owl-stage").children(".owl-item").each(function(){e++,e==a&&jQuery(this).hasClass("active")&&($isLastItem=!0,$isFirstItem=!1)}),(1==$isLastItem&&0==m&&0==u||jQuery("#"+z).find(".owl-stage .owl-item:last-child").hasClass("active")&&0==m&&0==u)&&O.trigger("to.owl.carousel",[0,0])}})),(1==p||1==d)&&($play_prev=jQuery("#ts-owlslider-controls-prev-"+D),$play_next=jQuery("#ts-owlslider-controls-next-"+D),$play_prev.on("click",function(){if(1==d&&0==u&&O.trigger("stop.owl.autoplay"),1==u&&(j=!0,jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width","100%"),clearInterval(Q)),0==m){var t=0,e=jQuery("#"+z).find(".owl-stage").children(".owl-item").length;T=e-1,jQuery("#"+z).find(".owl-stage").children(".owl-item").each(function(){t++,1==t&&jQuery(this).hasClass("active")&&($isLastItem=!1,$isFirstItem=!0)})}jQuery("#ts-owlslider-controls-play-"+D).addClass("active").find("span").alterClass("ts-ecommerce-*","ts-ecommerce-pause"),1==$isFirstItem&&0==m||jQuery("#"+z).find(".owl-stage .owl-item:first-child").hasClass("active")&&0==m?(O.trigger("to.owl.carousel",[T,0]),$isFirstItem=!1):O.trigger("prev.owl.carousel")}),$play_next.on("click",function(){if(1==d&&0==u&&O.trigger("stop.owl.autoplay"),1==u&&(j=!0,jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width","100%"),clearInterval(Q)),0==m){var t=0,e=jQuery("#"+z).find(".owl-stage").children(".owl-item").length;jQuery("#"+z).find(".owl-stage").children(".owl-item").each(function(){t++,t==e&&jQuery(this).hasClass("active")&&($isLastItem=!0,$isFirstItem=!1)})}jQuery("#ts-owlslider-controls-play-"+D).addClass("active").find("span").alterClass("ts-ecommerce-*","ts-ecommerce-pause"),1==$isLastItem&&0==m||jQuery("#"+z).find(".owl-stage .owl-item:last-child").hasClass("active")&&0==m?(O.trigger("to.owl.carousel",[0,0]),$isLastItem=!1):O.trigger("next.owl.carousel")})),O.find(".owl-stage-outer").on("mouseenter mouseleave",function(t){if(1==d&&1==u&&1==c)if(0==S){var e=new Date;"mouseenter"===t.type||"touchstart"===t.type?(j=!0,_=0,jQuery(this).attr("data-mouseenterTime",e.getTime()),$=!1):("mouseleave"===t.type||"touchend"===t.type)&&(j=!1,_=e.getTime()-jQuery(this).attr("data-mouseenterTime"),$=!0)}else j=!0,_=0,$=!1;else 1==d&&0==u&&1==c&&1==S&&(j=!0,_=0,$=!1)}),O.on("change.owl.carousel",function(t){if(t.namespace&&"position"==t.property.name){var e=t.relatedTarget;$current=t.item.index+1,T=t.item.count,$before=e.relative(e.normalize(e.current(),!1))+1,$after=e.relative(e.normalize(t.property.value,!1))+1,$change=!0,1==d&&1==u&&1==c||1==d&&1==u&&0==c?(1==u&&(jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width","100%"),clearInterval(Q)),0==$&&1==d&&0==S&&($=!0),$after==T||jQuery("#"+z).children(".owl-stage .owl-item:last-child").hasClass("active")?($isLastItem=!0,$isFirstItem=!1):($isLastItem=!1,$isFirstItem=1==$after?!0:!1),0==$&&1==d&&0==S&&($=!0)):1==d&&0==u&&1==c&&(0==$&&1==d&&0==S&&($=!0),$after==T||jQuery("#"+z).children(".owl-stage .owl-item:last-child").hasClass("active")?($isLastItem=!0,$isFirstItem=!1):($isLastItem=!1,$isFirstItem=1==$after?!0:!1),0==$&&1==d&&0==S&&($=!0))}}),O.on("changed.owl.carousel",function(t){t.namespace&&"position"==t.property.name&&setTimeout(function(){h.isotope("reloadItems"),e(),h.isotope("reLayout")},1e3)}),O.on("translated.owl.carousel",function(){if(1==d&&1==u&&1==c)jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width","0%"),_=0,window.setTimeout(function(){i()},0);else if(1==d&&1==u&&0==c)jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width","0%"),_=0,window.setTimeout(function(){i()},0);else if(1==d&&0==u&&1==c){_=0,1==S&&0==u&&O.trigger("stop.owl.autoplay");var t=0,e=jQuery("#"+z).find(".owl-stage").children(".owl-item").length;jQuery("#"+z).find(".owl-stage").children(".owl-item").each(function(){t++,t==e&&jQuery(this).hasClass("active")&&($isLastItem=!0,$isFirstItem=!1)}),1==$isLastItem&&0==m&&0==S&&1==d&&window.setTimeout(function(){jQuery("#ts-owlslider-controls-next-"+D).click()},parseInt(l))}else if(1==d&&0==u&&0==c){var t=0,e=jQuery("#"+z).find(".owl-stage").children(".owl-item").length;jQuery("#"+z).find(".owl-stage").children(".owl-item").each(function(){t++,t==e&&jQuery(this).hasClass("active")&&($isLastItem=!0,$isFirstItem=!1)}),1==$isLastItem&&0==m&&0==S&&1==d&&window.setTimeout(function(){jQuery("#ts-owlslider-controls-next-"+D).click()},parseInt(l))}n(),a()})})}),jQuery(".ts-timeline-css-container").each(function(){function e(){show=d.find(".ts-timeline-css-section.ts-timeline-css-visible").size()+_,l>=show?jQuery(this).closest(".ts-timeline").find(".ts-timeline-css-section:lt("+b+")").fadeIn().addClass("ts-timeline-css-visible"):(u.fadeIn().addClass("ts-timeline-visible"),"desc"==m&&g.fadeIn(),C.hide(),k.show(),I.show()),setTimeout(function(){r()},750)}function a(){n.width("100%"),u.each(n.outerWidth()<=c?function(){jQuery(this).hasClass("ts-timeline-css-fullwidth")&&(jQuery(this).find(".ts-timeline-css-fullwidth-colA").addClass("no-columns"),jQuery(this).find(".ts-timeline-css-fullwidth-colB").addClass("no-columns"))}:function(){jQuery(this).hasClass("ts-timeline-css-fullwidth")&&(jQuery(this).find(".ts-timeline-css-fullwidth-colA").removeClass("no-columns"),jQuery(this).find(".ts-timeline-css-fullwidth-colB").removeClass("no-columns"))}),setTimeout(function(){Q.each(function(){if(jQuery(this).hasClass("ts-timeline-css-icon-half")){if(jQuery(this).next().hasClass("ts-timeline-css-text-wrap-inner")){var t=(parseInt(jQuery(this).next().outerHeight(!0))-parseInt(jQuery(this).outerHeight(!0)))/2;jQuery(this).animate({top:t+"px"},500)}}else if(jQuery(this).prev().hasClass("ts-timeline-css-text-wrap-inner")){var t=(parseInt(jQuery(this).prev().outerHeight(!0))-parseInt(jQuery(this).outerHeight(!0)))/2;jQuery(this).animate({top:t+"px"},500)}})},250)}function i(){o.find(".ts-timeline-css-section").each(function(t,e){jQuery(e).addClass("ts-timeline-css-order-"+m).attr("data-item",t).attr("data-order",m),jQuery(e).attr("data-height",jQuery(e).height())})}function r(){if("ts-timeline-css-columns"==h){var t=0,e=0,a=0,i=0,r=0,s=32;o.find(".ts-timeline-css-section").each(function(i,r){jQuery(r).attr("data-height",jQuery(r).height()),jQuery(r).hasClass("ts-timeline-css-event")?(a=jQuery(r).height(),e>t?(jQuery(r).alterClass("ts-timeline-css-event-*","ts-timeline-css-event-right"),t+=a):(jQuery(r).alterClass("ts-timeline-css-event-*","ts-timeline-css-event-left"),e+=a)):(t=0,e=0)}),o.find(".ts-timeline-css-section").each(function(t,e){i=jQuery(e).offset(),jQuery(e).hasClass("ts-timeline-css-event")&&(jQuery(e).attr("data-offset",i.top),r+s>i.top&&jQuery(e).hasClass("ts-timeline-css-event-right")?jQuery(e).addClass("ts-timeline-css-event-right-offset"):jQuery(e).removeClass("ts-timeline-css-event-right-offset"),r=i.top)})}}function s(t,e,a){return jQuery(jQuery(t).toArray().sort(function(t,i){var r=parseInt(t.getAttribute(e)),s=parseInt(i.getAttribute(e));return"asc"==a?r-s:s-r}))}var n=jQuery(this),o=n.find(".ts-timeline-css-wrapper"),d=o.find(".ts-timeline-css-content"),u=d.find(".ts-timeline-css-section"),l=d.length,c=parseInt(n.attr("data-break")),h=n.attr("data-layout"),p=n.attr("data-switch"),m=n.attr("data-order"),f=n.width(),g=n.find(".ts-timeline-css-footer-wrap"),y=n.find(".ts-timeline-css-header-wrap"),v=n.find(".ts-timeline-css-begin-top"),j=n.find(".ts-timeline-css-begin-bottom"),Q=u.find(".ts-timeline-css-icon"),w="true"==n.attr("data-lazy")?!0:!1,b=parseInt(n.attr("data-count")),C=n.find(".ts-timeline-css-showmore"),_=C,x=n.attr("data-trigger"),k=(n.find(".ts-timeline-css-slickslider-container").length,n.find(".ts-timeline-css-controls-asc")),I=n.find(".ts-timeline-css-controls-desc");f>c&&"ts-timeline-css-columns"==h?o.find(".ts-timeline-css-event").each(function(t,e){var a=t%2==0?"ts-timeline-css-event-left":"ts-timeline-css-event-right";jQuery(e).addClass(a)}):c>f&&"ts-timeline-css-columns"==h&&(o.alterClass("ts-timeline-css-*",p),u.each(function(){jQuery(this).hasClass("ts-timeline-css-break")&&jQuery(this).css("width","98%")})),"asc"==m?(y.fadeIn(),j.fadeIn()):v.fadeIn(),b>l&&(w=!1),w?(d.find(".ts-timeline-css-section:lt("+b+")").addClass("ts-timeline-css-visible").fadeIn(),1==TS_VCSC_MobileDevice&&(x="click"),C.on("click",e)):(u.fadeIn().addClass("ts-timeline-css-visible"),"desc"==m&&g.fadeIn(),C.hide(),k.show(),I.show()),w&&"scroll"==x&&C.bind("inview",function(t,a,i,r){if(a){var s=jQuery(this);"top"==r||"bottom"==r||(s.addClass("ts-timeline-css-showmore-visible"),e())}else s.removeClass("ts-timeline-css-showmore-visible")}),k.on("click",function(){jQuery(this).hasClass("active")||(jQuery(this).toggleClass("active"),I.toggleClass("active"),j.fadeIn(),y.fadeIn(),v.hide(),g.hide(),$direction="asc",n.attr("data-order",$direction),n.alterClass("ts-timeline-css-container-*","ts-timeline-css-container-asc"),u.alterClass("ts-timeline-css-order-*","ts-timeline-css-order-asc").attr("data-order","asc"),t.each(s(u,"data-item","asc"),function(t,e){d.append(e)}),r())}),I.on("click",function(){jQuery(this).hasClass("active")||(jQuery(this).toggleClass("active"),k.toggleClass("active"),j.hide(),y.hide(),v.fadeIn(),g.fadeIn(),$direction="desc",n.attr("data-order",$direction),n.alterClass("ts-timeline-css-container-*","ts-timeline-css-container-desc"),u.alterClass("ts-timeline-css-order-*","ts-timeline-css-order-desc").attr("data-order","desc"),t.each(s(u,"data-item","desc"),function(t,e){d.append(e)}),r())}),r(),i(),a(),jQuery(this).find(".ts-timeline-css-imageslider-container").each(function(){var t=jQuery(this),e=(t.attr("data-parents"),parseInt(t.attr("data-items"))),a=t.find(".ts-timeline-css-imageslider-slides"),i=t.find(".ts-timeline-css-imageslider-item"),s=t.find(".ts-timeline-css-imageslider-dot"),n=t.find(".ts-timeline-css-imageslider-next"),o=t.find(".ts-timeline-css-imageslider-prev"),d=0,u=d+1,l=e,c=!1;if(n.on("click",function(){c=!0,u=d+1>e-1?0:d+1,i.removeClass("ts-timeline-css-slider-view-active").addClass("ts-timeline-css-slider-view-hidden").css("display","none"),s.removeClass("ts-timeline-css-imageslider-dotactive"),t.find(".ts-timeline-css-imageslider-item[data-order='"+u+"']").show().alterClass("ts-timeline-css-slider-view-*","ts-timeline-css-slider-view-active"),t.find(".ts-timeline-css-imageslider-dot[data-order='"+u+"']").addClass("ts-timeline-css-imageslider-dotactive"),d=u,r(),c=!1}),o.on("click",function(){c=!0,l=0>d-1?e-1:d-1,i.removeClass("ts-timeline-css-slider-view-active").addClass("ts-timeline-css-slider-view-hidden").css("display","none"),s.removeClass("ts-timeline-css-imageslider-dotactive"),t.find(".ts-timeline-css-imageslider-item[data-order='"+l+"']").show().alterClass("ts-timeline-css-slider-view-*","ts-timeline-css-slider-view-active"),t.find(".ts-timeline-css-imageslider-dot[data-order='"+l+"']").addClass("ts-timeline-css-imageslider-dotactive"),d=l,r(),c=!1}),s.on("click",function(){d=parseInt(jQuery(this).attr("data-order")),s.removeClass("ts-timeline-css-imageslider-dotactive"),i.removeClass("ts-timeline-css-slider-view-active").addClass("ts-timeline-css-slider-view-hidden").css("display","none"),t.find(".ts-timeline-css-imageslider-item[data-order='"+d+"']").show().alterClass("ts-timeline-css-slider-view-*","ts-timeline-css-slider-view-active"),jQuery(this).addClass("ts-timeline-css-imageslider-dotactive"),r()}),"ontouchstart"in document.documentElement||1==TS_VCSC_MobileDevice){var h=new Hammer(a,"");h.on("swipeleft",function(){return c||n.trigger("click"),!1}),h.on("swiperight",function(){return c||o.trigger("click"),!1})}}),jQuery(window).on("debouncedresize",function(){h=n.attr("data-layout"),f=n.width(),c>f&&"ts-timeline-css-columns"==h?(o.alterClass("ts-timeline-css-*",p),u.each(function(){jQuery(this).hasClass("ts-timeline-css-break")&&jQuery(this).css("width","98%")})):f>c&&"ts-timeline-css-columns"==h&&(o.alterClass("ts-timeline-css-*","ts-timeline-css-columns"),u.each(function(){jQuery(this).hasClass("ts-timeline-css-break")&&"false"==jQuery(this).attr("data-fullwidth")&&jQuery(this).css("width","50%")})),o.addClass("ts-timeline-css-wrapper"),a(),"ts-timeline-css-columns"==h&&setTimeout(function(){r()},750)})}),"undefined"!=typeof $TS_VCSC_SmoothScrollActive&&$TS_VCSC_SmoothScrollActive&&0==TS_VCSC_MobileDevice){window.TS_VCSC_UseRequestAnimationFrame=!0;var d=null,u=!1,l=0,c=$TS_VCSC_SmoothScrollSpeed,h=!1,p=window,m=-1!==navigator.platform.toUpperCase().indexOf("MAC"),f=function(t){40===t.which?(h=!0,c=$TS_VCSC_SmoothScrollSpeed,l=-1,u=!0,p=window):38===t.which&&(h=!0,c=$TS_VCSC_SmoothScrollSpeed,l=1,u=!0,p=window)},g=function(t){if(t.preventDefault&&t.preventDefault(),!h){t.wheelDelta?l=t.wheelDelta/120:m&&t.detail?l=-t.detail:t.detail&&(l=-t.detail/3),c=$TS_VCSC_SmoothScrollSpeed;var e=t.target;for(p=window;"HTML"!=e.tagName;){if(e.scrollHeight>e.clientHeight&&"undefined"!=typeof e.style.overflow&&"hidden"!==e.style.overflow&&"visible"!==e.style.overflow&&""!==e.style.overflow){p=e;break}e=e.parentNode}}u=!0},y=function(){u&&(p==window?p.scrollBy(p.scrollX,-l*c):p.scrollTop=p.scrollTop-l*c,c*=.94,1>=c&&(c=0,u=!1,l=0,h=!1)),window.TS_VCSC_UseRequestAnimationFrame?(window.requestAnimationFrame(y),null!=d&&(clearInterval(d),d=null)):null===d&&(d=setInterval(function(){y()},16.667))};window.addEventListener("mousewheel",g,!1),window.addEventListener("DOMMouseScroll",g,!1),window.addEventListener("keydown",f,!1),window.TS_VCSC_UseRequestAnimationFrame?window.requestAnimationFrame(y):d=setInterval(function(){y()},16.667)}"undefined"!=typeof jQuery.fn.waypoint&&jQuery(".ts-viewport-column").each(function(){if(0==TS_VCSC_MobileDevice){{var t=jQuery(this),e=t.next();t.attr("data-scrollup")}e.css("opacity",0),e.attr("data-viewport",t.attr("data-viewport")),e.attr("data-speed",t.attr("data-speed")),e.attr("data-scrollup",t.attr("data-scrollup")),e.bind("inview",function(t,e,a,i){if(e){var r=jQuery(this);r.addClass("ts-waypoint-visible")}else{var r=jQuery(this);r.removeClass("ts-waypoint-visible")}}),e.waypoint({offset:"85%",handler:function(){var t=jQuery(this),e=t.attr("data-viewport"),a=t.attr("data-speed"),i=t.attr("data-scrollup"),r=t.width();t.css("-webkit-animation-duration",a+"ms").css("-moz-animation-duration",a+"ms").css("-ms-animation-duration",a+"ms").css("-o-animation-duration",a+"ms").css("animation-duration",a+"ms"),t.addClass(e+" animated"),t.css("opacity",1).css("width",r),setTimeout(function(){t.removeClass("animated").removeClass(e),"false"==i&&t.waypoint("destroy"),t.css("width",""),t.css("-webkit-animation-duration","").css("-moz-animation-duration","").css("-ms-animation-duration","").css("-o-animation-duration","").css("animation-duration","")},a)}}),t.remove()}else{var t=jQuery(this),e=t.next();e.css("opacity",1)}}),"undefined"!=typeof jQuery.fn.waypoint&&jQuery(".ts-viewport-row").each(function(){if(0==TS_VCSC_MobileDevice){{var t=jQuery(this),e=t.next();t.attr("data-scrollup")}e.css("opacity",0),e.attr("data-viewport",t.attr("data-viewport")),e.attr("data-speed",t.attr("data-speed")),e.attr("data-scrollup",t.attr("data-scrollup")),e.bind("inview",function(t,e,a,i){if(e){var r=jQuery(this);r.addClass("ts-waypoint-visible")}else{var r=jQuery(this);r.removeClass("ts-waypoint-visible")}}),e.waypoint({offset:"85%",handler:function(){var t=jQuery(this);if(!t.hasClass("ts-parallax-processing")){var e=t.attr("data-viewport"),a=t.attr("data-speed"),i=t.attr("data-scrollup"),r=t.width();t.css("-webkit-animation-duration",a+"ms").css("-moz-animation-duration",a+"ms").css("-ms-animation-duration",a+"ms").css("-o-animation-duration",a+"ms").css("animation-duration",a+"ms"),t.addClass(e),t.css("opacity",1).css("width",r),setTimeout(function(){t.removeClass(e),"false"==i&&t.waypoint("destroy"),t.css("width",""),t.css("-webkit-animation-duration","").css("-moz-animation-duration","").css("-ms-animation-duration","").css("-o-animation-duration","").css("animation-duration","")},a)}}}),t.remove()}else{var t=jQuery(this),e=t.next();e.css("opacity",1)}}),setTimeout(function(){jQuery(window).trigger("resize"),jQuery(window).trigger("debouncedresize"),jQuery(window).trigger("debouncedresize.stackslider")},250),setTimeout(function(){jQuery(".ts-figure-navigation-item").each(function(){var t=jQuery(this),e=jQuery(this).attr("data-frontend"),a=jQuery(this).attr("data-active");if("true"==a&&"false"==e){var i=(t.attr("data-group"),t.find(".ts-figure-navigation-title")),r=t.find(".ts-figure-navigation-image"),s=t.find(".ts-figure-navigation-handle"),n=t.find(".ts-figure-navigation-content"),o=t.find(".ts-figure-navigation-button"),d=i.outerHeight(!0)+r.outerHeight(!0)+s.outerHeight(!0)+n.outerHeight(!0)+o.outerHeight(!0);t.css("height",d+"px");var u=t.find(".ts-figure-navigation-image").height();n.css("height",n.height()+"px"),t.find(".ts-figure-navigation-figure").css({height:u+"px"}),t.addClass("ts-figure-navigation-hover"),t.find(".ts-figure-navigation-content").stop(!0).animate({opacity:1},500)}})},1250),(0!=jQuery(".ts-amaran-popup-main").length||0!=jQuery(".ts-amaran-popup-trigger").length)&&(TS_VCSC_Amaran_Overlay=t('<div id="ts-amaran-overlay-color"></div>').appendTo("body"),TS_VCSC_Amaran_Overlay.attr("data-visible","false"),TS_VCSC_Amaran_Noise=t('<div id="ts-amaran-overlay-noise"></div>').appendTo("body"),TS_VCSC_Amaran_Noise.attr("data-visible","false")),jQuery(".ts-amaran-popup-main").each(function(){function t(){setTimeout(function(){jQuery.TS_VCSC_Amaran_Main({randomizer:i,position:r,overlay:z,overlayColor:D,rasterUse:M,rasterType:V,background:u,width:l,marginTop:p,marginBottom:m,marginLeft:f,marginRight:g,content:{title:w,titleColor:b,titleBack:C,message:_,info:x,infoColor:k,infoBack:I,icon:y,iconColor:v,iconAnimate:j,image:Q,close:H,closeColor:L},theme:"composer",delay:c,duration:h,sticky:F,closeOnClick:P,closeButton:H,closeColor:L,clearAll:E,clearSticky:O,inEffect:s,outEffect:o,cssanimationIn:n,cssanimationOut:d,beforeStart:function(){},afterEnd:function(){var t=!0;0==jQuery(".ts-amaran.composer").length?t=!0:jQuery(".ts-amaran.composer").each(function(){jQuery(this).attr("data-randomizer")!=i&&"true"==jQuery(this).attr("data-overlay")&&(t=!1)}),t&&(TS_VCSC_Amaran_Overlay.fadeOut(250).attr("data-visible","false"),TS_VCSC_Amaran_Noise.fadeOut(250).attr("data-visible","false"))},onClick:function(){}})},c)}var e=jQuery(this),a=e.attr("id"),i=jQuery(this).attr("data-randomizer"),r=jQuery(this).attr("data-position"),s=jQuery(this).attr("data-entry"),n=jQuery(this).attr("data-entryanimate"),o=jQuery(this).attr("data-exit"),d=jQuery(this).attr("data-exitanimate"),u=jQuery(this).attr("data-background"),l=parseInt(jQuery(this).attr("data-width")),c=parseInt(jQuery(this).attr("data-delay")),h=parseInt(jQuery(this).attr("data-duration")),p=parseInt(jQuery(this).attr("data-top")),m=parseInt(jQuery(this).attr("data-bottom")),f=parseInt(jQuery(this).attr("data-left")),g=parseInt(jQuery(this).attr("data-right")),y=jQuery(this).attr("data-icon");if("transparent"==y)var y="";var v=jQuery(this).attr("data-iconcolor"),j=jQuery(this).attr("data-iconanimate"),Q=jQuery(this).attr("data-image"),w=jQuery(this).attr("data-title"),b=jQuery(this).attr("data-titlecolor"),C=jQuery(this).attr("data-titlebackground"),_=jQuery(this).find(".ts-amaran-popup-content").html(),x=jQuery(this).attr("data-info"),k=jQuery(this).attr("data-infocolor"),I=jQuery(this).attr("data-infobackground"),S=(jQuery(this).attr("data-theme"),"true"==jQuery(this).attr("data-viewport")?!0:!1),T="true"==jQuery(this).attr("data-viewportonce")?!0:!1,$=parseInt(jQuery(this).attr("data-viewportwait")),z="true"==jQuery(this).attr("data-overlay")?!0:!1,D=jQuery(this).attr("data-overlaycolor"),M="true"==jQuery(this).attr("data-rasteruse")?!0:!1,V=jQuery(this).attr("data-rastertype"),A="true"==jQuery(this).attr("data-mobile")?!0:!1,F="true"==jQuery(this).attr("data-sticky")?!0:!1,H="true"==jQuery(this).attr("data-button")?!0:!1,L=jQuery(this).attr("data-buttoncolor"),P="true"==jQuery(this).attr("data-close")?!0:!1,E="true"==jQuery(this).attr("data-clearall")?!0:!1,O="true"==jQuery(this).attr("data-clearsticky")?!0:!1;(0==TS_VCSC_MobileDevice||1==TS_VCSC_MobileDevice&&1==A)&&(S?jQuery("#"+a).waypoint({handler:function(){var e=!1;if(T||jQuery(".ts-amaran.composer").each(function(){jQuery(this).attr("data-randomizer")==i&&(e=!0)}),!e){var a=(new Date).setTime((new Date).getTime()+0),r=parseInt(jQuery(this).attr("data-viewportlast"));a-r>$&&(jQuery(this).attr("data-viewportlast",a),t())}},offset:"100%",triggerOnce:T}):t())}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-amaran.composer").each(function(){var t=jQuery(this).attr("data-position"),e=parseInt(jQuery(this).attr("data-width")),a=jQuery(window).width(),i=jQuery(window).height(),r=parseInt(jQuery(this).attr("data-marginheight")),s=parseInt(jQuery(this).attr("data-marginwidth")),n=i-r,o=a-s;if(jQuery(this).css({"max-height":n+"px","max-width":(o>e?e:o)+"px"}),"center center"==t){var d=jQuery(this).height(),u=jQuery(this).outerWidth();jQuery(this).animate({"margin-left":"-"+u/2+"px","margin-top":"-"+d/2+"px"},250,function(){})}})}),setTimeout(function(){jQuery(window).trigger("resize"),jQuery(window).trigger("debouncedresize"),jQuery(window).trigger("debouncedresize.stackslider")},500)})}(jQuery),function(t,e){"use strict";function a(t){return t&&t.toLowerCase?t.toLowerCase():t}function i(t,e){for(var a=0,i=t.length;i>a;a++)if(t[a]==e)return!r;return r}var r=!1,s=null,n=parseFloat,o=Math.min,d=/(-?\d+\.?\d*)$/g,u=/(\d+\.?\d*)$/g,l=[],c=[],h=function(t){return"string"==typeof t},p=function(t,e){for(var a,i=t.length,r=i;r--;)a=i-r-1,e(t[a],a)},m=Array.prototype.indexOf||function(t){var e=this.length,a=Number(arguments[1])||0;for(a=0>a?Math.ceil(a):Math.floor(a),0>a&&(a+=e);e>a;a++)if(a in this&&this[a]===t)return a;return-1};t.tinysort={id:"TinySort",version:"1.5.6",copyright:"Copyright (c) 2008-2013 Ron Valstar",uri:"http://tinysort.sjeiti.com/",licensed:{MIT:"http://www.opensource.org/licenses/mit-license.php",GPL:"http://www.gnu.org/licenses/gpl.html"},plugin:function(){var t=function(t,e){l.push(t),c.push(e)};return t.indexOf=m,t}(),defaults:{order:"asc",attr:s,data:s,useVal:r,place:"start",returns:r,cases:r,forceStrings:r,ignoreDashes:r,sortFunction:s}},t.fn.extend({tinysort:function(){var f,g,y,v,j=this,Q=[],w=[],b=[],C=[],_=0,x=[],k=[],I=function(t){p(l,function(e){e.call(e,t)})},S=function(t,e){return"string"==typeof e&&(t.cases||(e=a(e)),e=e.replace(/^\s*(.*?)\s*$/i,"$1")),e},T=function(t,e){var a=0;for(0!==_&&(_=0);0===a&&v>_;){var i=C[_],s=i.oSettings,o=s.ignoreDashes?u:d;if(I(s),s.sortFunction)a=s.sortFunction(t,e);else if("rand"==s.order)a=Math.random()<.5?1:-1;else{var l=r,m=S(s,t.s[_]),f=S(s,e.s[_]);if(!s.forceStrings){var g=h(m)?m&&m.match(o):r,y=h(f)?f&&f.match(o):r;if(g&&y){var j=m.substr(0,m.length-g[0].length),Q=f.substr(0,f.length-y[0].length);j==Q&&(l=!r,m=n(g[0]),f=n(y[0]))}}a=i.iAsc*(f>m?-1:m>f?1:0)}p(c,function(t){a=t.call(t,l,m,f,a)}),0===a&&_++}return a};for(f=0,y=arguments.length;y>f;f++){var $=arguments[f];h($)?x.push($)-1>k.length&&(k.length=x.length-1):k.push($)>x.length&&(x.length=k.length)}for(x.length>k.length&&(k.length=x.length),v=x.length,0===v&&(v=x.length=1,k.push({})),f=0,y=v;y>f;f++){var z=x[f],D=t.extend({},t.tinysort.defaults,k[f]),M=!(!z||""===z),V=M&&":"===z[0];C.push({sFind:z,oSettings:D,bFind:M,bAttr:!(D.attr===s||""===D.attr),bData:D.data!==s,bFilter:V,$Filter:V?j.filter(z):j,fnSort:D.sortFunction,iAsc:"asc"==D.order?1:-1})}return j.each(function(a,i){var r,s=t(i),n=s.parent().get(0),o=[];for(g=0;v>g;g++){var d=C[g],u=d.bFind?d.bFilter?d.$Filter.filter(i):s.find(d.sFind):s;o.push(d.bData?u.data(d.oSettings.data):d.bAttr?u.attr(d.oSettings.attr):d.oSettings.useVal?u.val():u.text()),r===e&&(r=u)}var l=m.call(b,n);0>l&&(l=b.push(n)-1,w[l]={s:[],n:[]}),r.length>0?w[l].s.push({s:o,e:s,n:a}):w[l].n.push({e:s,n:a})}),p(w,function(t){t.s.sort(T)}),p(w,function(t){var e=t.s,a=t.n,s=e.length,n=a.length,d=s+n,u=[],l=d,c=[0,0];switch(D.place){case"first":p(e,function(t){l=o(l,t.n)});break;case"org":p(e,function(t){u.push(t.n)});break;case"end":l=n;break;default:l=0}for(f=0;d>f;f++){var h=i(u,f)?!r:f>=l&&l+s>f,m=h?0:1,g=(h?e:a)[c[m]].e;g.parent().append(g),(h||!D.returns)&&Q.push(g.get(0)),c[m]++}}),j.length=0,Array.prototype.push.apply(j,Q),j}}),t.fn.TinySort=t.fn.Tinysort=t.fn.tsort=t.fn.tinysort}(jQuery),function(){}(jQuery),function(t){function e(e,a,i,r){var s=e.text().split(a),n="";s.length&&(t(s).each(function(t,e){n+='<span class="'+i+(t+1)+'">'+e+"</span>"+r}),e.empty().append(n))}var a={init:function(){return this.each(function(){e(t(this),"","char","")})},words:function(){return this.each(function(){e(t(this)," ","word"," ")})},lines:function(){return this.each(function(){var a="eefec303079ad17405c889e092e105b0";e(t(this).children("br").replaceWith(a).end(),a,"line","")})}};t.fn.lettering=function(e){return e&&a[e]?a[e].apply(this,[].slice.call(arguments,1)):"letters"!==e&&e?(t.error("Method "+e+" does not exist on jQuery.lettering"),this):a.init.apply(this,[].slice.call(arguments,0))
}}(jQuery),function(t){t.fn.textfill=function(e){function a(){o.debug&&"undefined"!=typeof console&&"undefined"!=typeof console.debug&&console.debug.apply(console,arguments)}function i(){"undefined"!=typeof console&&"undefined"!=typeof console.warn&&console.warn.apply(console,arguments)}function r(t,e,i,r,s,n){function o(t,e){var a=" / ";return t>e?a=" > ":t==e&&(a=" = "),a}a(t+"font: "+e.css("font-size")+", H: "+e.height()+o(e.height(),i)+i+", W: "+e.width()+o(e.width(),r)+r+", minFontPixels: "+s+", maxFontPixels: "+n)}function s(t,e,a,i,s,n,o,d){for(r(t+": ",e,s,n,o,d);d-1>o;){var u=Math.floor((o+d)/2);if(e.css("font-size",u),a.call(e)<=i){if(o=u,a.call(e)==i)break}else d=u;r(t+": ",e,s,n,o,d)}return e.css("font-size",d),a.call(e)<=i&&(o=d,r(t+"* ",e,s,n,o,d)),o}var n={debug:!1,maxFontPixels:40,minFontPixels:4,innerTag:"span",widthOnly:!1,success:null,callback:null,fail:null,complete:null,explicitWidth:null,explicitHeight:null},o=t.extend(n,e);return this.each(function(){var e=t(o.innerTag+":visible:first",this),r=o.explicitHeight||t(this).height(),n=o.explicitWidth||t(this).width(),d=e.css("font-size");a("Opts: ",o),a("Vars: maxHeight: "+r+", maxWidth: "+n);var u=o.minFontPixels,l=o.maxFontPixels<=0?r:o.maxFontPixels,c=void 0;o.widthOnly||(c=s("H",e,t.fn.height,r,r,n,u,l));var h=s("W",e,t.fn.width,n,r,n,u,l);o.widthOnly?e.css("font-size",h):e.css("font-size",Math.min(c,h)),a("Final: "+e.css("font-size")),e.width()>n||e.height()>r&&!o.widthOnly?(e.css("font-size",d),o.fail&&o.fail(this)):o.success?o.success(this):o.callback&&(i("callback is deprecated, use success, instead"),o.callback(this))}),o.complete&&o.complete(this),this}}(window.jQuery),function(t){t.fn.fitText=function(e,a){var i=e||1,r=t.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY,lineHeight:!1},a);return this.each(function(){var e=t(this),a=function(){e.css("font-size",Math.max(Math.min(e.width()/(10*i),parseFloat(r.maxFontSize)),parseFloat(r.minFontSize))+"px"),1==r.lineHeight&&e.css("line-height",Math.max(Math.min(e.width()/(10*i),parseFloat(r.maxFontSize)),parseFloat(r.minFontSize))+"px")};a(),t(window).on("resize.fittext orientationchange.fittext",a)})}}(jQuery),function(t,e,a){t.fn.backstretch=function(i,r){return(i===a||0===i.length)&&t.error("No images were supplied for Backstretch"),0===t(e).scrollTop()&&e.scrollTo(0,0),this.each(function(){var e=t(this),a=e.data("backstretch");if(a){if("string"==typeof i&&"function"==typeof a[i])return void a[i](r);r=t.extend(a.options,r),a.destroy(!0)}a=new s(this,i,r),e.data("backstretch",a)})},t.backstretch=function(e,a){return t("body").backstretch(e,a).data("backstretch")},t.expr[":"].backstretch=function(e){return t(e).data("backstretch")!==a},t.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0};var i={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},r={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},s=function(a,r,s){this.options=t.extend({},t.fn.backstretch.defaults,s||{}),this.images=t.isArray(r)?r:[r],t.each(this.images,function(){t("<img />")[0].src=this}),this.isBody=a===document.body,this.$container=t(a),this.$root=this.isBody?t(n?e:document):this.$container,a=this.$container.children(".backstretch").first(),this.$wrap=a.length?a:t('<div class="backstretch"></div>').css(i).appendTo(this.$container),this.isBody||(a=this.$container.css("position"),r=this.$container.css("zIndex"),this.$container.css({position:"static"===a?"relative":a,zIndex:"auto"===r?0:r,background:"none"}),this.$wrap.css({zIndex:-999998})),this.$wrap.css({position:this.isBody&&n?"fixed":"absolute"}),this.index=0,this.show(this.index),t(e).on("resize.backstretch",t.proxy(this.resize,this)).on("orientationchange.backstretch",t.proxy(function(){this.isBody&&0===e.pageYOffset&&(e.scrollTo(0,1),this.resize())},this))};s.prototype={resize:function(){try{var t,a={left:0,top:0},i=this.isBody?this.$root.width():this.$root.innerWidth(),r=i,s=this.isBody?e.innerHeight?e.innerHeight:this.$root.height():this.$root.innerHeight(),n=r/this.$img.data("ratio");n>=s?(t=(n-s)/2,this.options.centeredY&&(a.top="-"+t+"px")):(n=s,r=n*this.$img.data("ratio"),t=(r-i)/2,this.options.centeredX&&(a.left="-"+t+"px")),this.$wrap.css({width:i,height:s}).find("img:not(.deleteable)").css({width:r,height:n}).css(a)}catch(o){}return this},show:function(e){if(!(Math.abs(e)>this.images.length-1)){var a=this,i=a.$wrap.find("img").addClass("deleteable"),s={relatedTarget:a.$container[0]};return a.$container.trigger(t.Event("backstretch.before",s),[a,e]),this.index=e,clearInterval(a.interval),a.$img=t("<img />").css(r).bind("load",function(r){var n=this.width||t(r.target).width();r=this.height||t(r.target).height(),t(this).data("ratio",n/r),t(this).fadeIn(a.options.speed||a.options.fade,function(){i.remove(),a.paused||a.cycle(),t(["after","show"]).each(function(){a.$container.trigger(t.Event("backstretch."+this,s),[a,e])})}),a.resize()}).appendTo(a.$wrap),a.$img.attr("src",a.images[e]),a}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this.next(),this},cycle:function(){return 1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(t.proxy(function(){this.paused||this.next()},this),this.options.duration)),this},destroy:function(a){t(e).off("resize.backstretch orientationchange.backstretch"),clearInterval(this.interval),a||this.$wrap.remove(),this.$container.removeData("backstretch")}};var n,o=navigator.userAgent,d=navigator.platform,u=o.match(/AppleWebKit\/([0-9]+)/),u=!!u&&u[1],l=o.match(/Fennec\/([0-9]+)/),l=!!l&&l[1],c=o.match(/Opera Mobi\/([0-9]+)/),h=!!c&&c[1],p=o.match(/MSIE ([0-9]+)/),p=!!p&&p[1];n=!((-1<d.indexOf("iPhone")||-1<d.indexOf("iPad")||-1<d.indexOf("iPod"))&&u&&534>u||e.operamini&&"[object OperaMini]"==={}.toString.call(e.operamini)||c&&7458>h||-1<o.indexOf("Android")&&u&&533>u||l&&6>l||"palmGetResource"in e&&u&&534>u||-1<o.indexOf("MeeGo")&&-1<o.indexOf("NokiaBrowser/8.5.0")||p&&6>=p)}(jQuery,window),function(t){function e(){var e,a,i={height:u.innerHeight,width:u.innerWidth};return i.height||(e=d.compatMode,(e||!t.support.boxModel)&&(a="CSS1Compat"===e?l:d.body,i={height:a.clientHeight,width:a.clientWidth})),i}function a(){return{top:u.pageYOffset||l.scrollTop||d.body.scrollTop,left:u.pageXOffset||l.scrollLeft||d.body.scrollLeft}}function i(){var i,n=t(),d=0;if(t.each(o,function(t,e){var a=e.data.selector,i=e.$element;n=n.add(a?i.find(a):i)}),i=n.length)for(r=r||e(),s=s||a();i>d;d++)if(t.contains(l,n[d])){var u,c,h,p=t(n[d]),m={height:p.height(),width:p.width()},f=p.offset(),g=p.data("inview");if(!s||!r)return;f.top+m.height>s.top&&f.top<s.top+r.height&&f.left+m.width>s.left&&f.left<s.left+r.width?(u=s.left>f.left?"right":s.left+r.width<f.left+m.width?"left":"both",c=s.top>f.top?"bottom":s.top+r.height<f.top+m.height?"top":"both",h=u+"-"+c,g&&g===h||p.data("inview",h).trigger("inview",[!0,u,c])):g&&p.data("inview",!1).trigger("inview",[!1])}}var r,s,n,o={},d=document,u=window,l=d.documentElement,c=t.expando;t.event.special.inview={add:function(e){o[e.guid+"-"+this[c]]={data:e,$element:t(this)},n||t.isEmptyObject(o)||(n=setInterval(i,250))},remove:function(e){try{delete o[e.guid+"-"+this[c]]}catch(a){}t.isEmptyObject(o)&&(clearInterval(n),n=null)}},t(u).bind("scroll resize",function(){r=s=null}),!l.addEventListener&&l.attachEvent&&l.attachEvent("onfocusin",function(){s=null})}(jQuery),function(){for(var t=["ms","moz","webkit","o"],e=0;e<t.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[t[e]+"RequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){return window.setTimeout(function(){t()},16)})}(),function(t){var e=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();t.fn.requestAnimation=function(t){var a;return a=window.mozAnimationStartTime?window.mozAnimationStartTime:window.webkitAnimationStartTime?window.webkitAnimationStartTime:(new Date).getTime(),this.each(function(){function i(u){u||(u=(new Date).getTime()),u-n>=1e3&&(o=d,d=0,n=u),t({timestamp:u,elapsed:u-a,frameTime:u-s,framesPerSecond:o})!==!1&&(e(i,r),++d)}var r=this,s=a,n=a,o=0,d=0;i(a)})}}(jQuery),function(t,e){function a(t){this.$element=jQuery(t),this.init()}var i="scrollParallax";a.prototype.init=function(){var e=this;this.startPosition=0,this.offsetTop=this.$element.offset().top,this.height=this.$element.outerHeight(!0),this.momentum=this.$element.attr("data-momentum"),this.direction=this.$element.attr("data-direction"),this.alignment=this.$element.attr("data-alignment"),t(this).requestAnimation(function(){e.scrollParallax()})},a.prototype.scrollParallax=function(){var a=(jQuery(e).height(),jQuery(e).scrollTop()-20),i=jQuery(e).scrollTop()+jQuery(e).height()+20,r=this.$element.offset().top,s=this.$element.offset().top+this.$element.height(),n=this.$element.attr("data-disabled");if(!(r>=i||a>=s||"true"==n||this.$element.hasClass("ts-device-row-hidden"))){this.$element.offset().top>jQuery(e).height()&&"none"!=this.direction&&(this.startPosition=(this.$element.offset().top-jQuery(e).height())*Math.abs(this.momentum)),position=this.startPosition+jQuery(e).scrollTop()*this.momentum;var o="50%",d="50%";if("up"===this.direction||"down"===this.direction?"left"===this.alignment?o=this.$element.offset().left+"px":"right"===this.alignment&&(o="calc(100% - "+(t(e).width()-this.$element.offset().left-this.$element.width())+"px)"):("left"===this.direction||"right"===this.direction)&&("top"===this.alignment?d="0":"bottom"===this.alignment&&(d="100%")),"left"==this.direction)o=position+"px";else if("right"==this.direction)o="calc(100% + "+-position+"px)";else if("down"==this.direction){var u=-(jQuery(e).height()-this.$element.offset().top-this.$element.height()-parseInt(this.$element.css("paddingTop"))-parseInt(this.$element.css("paddingBottom")));d="calc(100% + "+(u-jQuery(e).scrollTop()-position)+"px)"}else d=this.$element.offset().top-jQuery(e).scrollTop()+position+"px";this.$element.css({backgroundPosition:o+" "+d})}},t.fn[i]=function(e){return this.each(function(){t.data(this,"plugin_"+i)||t.data(this,"plugin_"+i,new a(this,e))})}}(jQuery,window,document),function(t){"use strict";function e(t,e){if(this.createTextRange){var a=this.createTextRange();a.collapse(!0),a.moveStart("character",t),a.moveEnd("character",e-t),a.select()}else this.setSelectionRange&&(this.focus(),this.setSelectionRange(t,e))}function a(t){var e=this.value.length;if(t="start"==t.toLowerCase()?"Start":"End",document.selection){var a,i,r,s=document.selection.createRange();return a=s.duplicate(),a.expand("textedit"),a.setEndPoint("EndToEnd",s),i=a.text.length-s.text.length,r=i+s.text.length,"Start"==t?i:r}return"undefined"!=typeof this["selection"+t]&&(e=this["selection"+t]),e}var i={codes:{188:44,109:45,190:46,191:47,192:96,220:92,222:39,221:93,219:91,173:45,187:61,186:59,189:45,110:46},shifts:{96:"~",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",48:")",45:"_",61:"+",91:"{",93:"}",92:"|",59:":",39:'"',44:"<",46:">",47:"?"}};t.fn.number=function(r,s,n,o){o="undefined"==typeof o?",":o,n="undefined"==typeof n?".":n,s="undefined"==typeof s?0:s;var d="\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4),u=new RegExp("[^"+d+"0-9]","g"),l=new RegExp(d,"g");return r===!0?this.is("input:text")?this.on({"keydown.format":function(r){var d=t(this),c=d.data("numFormat"),h=r.keyCode?r.keyCode:r.which,p="",m=a.apply(this,["start"]),f=a.apply(this,["end"]),g="",y=!1;if(i.codes.hasOwnProperty(h)&&(h=i.codes[h]),!r.shiftKey&&h>=65&&90>=h?h+=32:!r.shiftKey&&h>=69&&105>=h?h-=48:r.shiftKey&&i.shifts.hasOwnProperty(h)&&(p=i.shifts[h]),""==p&&(p=String.fromCharCode(h)),8!==h&&p!=n&&!p.match(/[0-9]/)){var v=!0;if(p.match(/[-]/)&&(c.isNegative||(c.isNegative=!0,v=!1)),v){var j=r.keyCode?r.keyCode:r.which;if(46==j||8==j||9==j||27==j||13==j||(65==j||82==j)&&(r.ctrlKey||r.metaKey)===!0||(86==j||67==j)&&(r.ctrlKey||r.metaKey)===!0||j>=35&&39>=j)return;return r.preventDefault(),!1}}if(0==m&&f==this.value.length||0==d.val()?8===h?(m=f=1,this.value="",c.init=s>0?-1:0,c.c=s>0?-(s+1):0,e.apply(this,[0,0])):p===n?(m=f=1,this.value="0"+n+new Array(s+1).join("0"),c.init=s>0?1:0,c.c=s>0?-(s+1):0):0===this.value.length&&(c.init=s>0?-1:0,c.c=s>0?-s:0):c.c=f-this.value.length,8==h&&1>=m&&c.isNegative)r.preventDefault(),c.isNegative=!1,c.c--,y=this.value.length+c.c;else if(s>0&&p==n&&m==this.value.length-s-1)c.c++,c.init=Math.max(0,c.init),r.preventDefault(),y=this.value.length+c.c;else if(p==n)c.init=Math.max(0,c.init),r.preventDefault();else if(s>0&&8==h&&m==this.value.length-s)r.preventDefault(),c.c--,y=this.value.length+c.c;else if(s>0&&8==h&&m>this.value.length-s){if(""===this.value)return;"0"!=this.value.slice(m-1,m)&&(g=this.value.slice(0,m-1)+"0"+this.value.slice(m),d.val(g.replace(u,"").replace(l,n))),r.preventDefault(),c.c--,y=this.value.length+c.c}else 8==h&&this.value.slice(m-1,m)==o?(r.preventDefault(),c.c--,y=this.value.length+c.c):s>0&&m==f&&this.value.length>s+1&&m>this.value.length-s-1&&isFinite(+p)&&!r.metaKey&&!r.ctrlKey&&!r.altKey&&1===p.length&&(g=f===this.value.length?this.value.slice(0,m-1):this.value.slice(0,m)+this.value.slice(m+1),this.value=g,y=m);y!==!1&&e.apply(this,[y,y]),d.data("numFormat",c)},"keyup.format":function(i){var r,n=t(this),o=n.data("numFormat"),d=i.keyCode?i.keyCode:i.which,u=a.apply(this,["start"]);""===this.value||(48>d||d>57)&&(96>d||d>105)&&8!==d||(n.val(n.val()),s>0&&(o.init<1?(u=this.value.length-s-(o.init<0?1:0),o.c=u-this.value.length,o.init=1,n.data("numFormat",o)):u>this.value.length-s&&8!=d&&(o.c++,n.data("numFormat",o))),n.get(0).value.length?o.isNegative&&(n.get(0).value="-"+this.value):o.isNegative=!1,r=this.value.length+o.c,e.apply(this,[r,r]))},"paste.format":function(e){var a=t(this),i=e.originalEvent,r=null;return window.clipboardData&&window.clipboardData.getData?r=window.clipboardData.getData("Text"):i.clipboardData&&i.clipboardData.getData&&(r=i.clipboardData.getData("text/plain")),a.val(r),e.preventDefault(),!1}}).each(function(){var e=t(this).data("numFormat",{c:-(s+1),decimals:s,thousands_sep:o,dec_point:n,regex_dec_num:u,regex_dec:l,init:!1});""!==this.value&&e.val(e.val())}):this.each(function(){var e=t(this),a=e.text().match(/^-/)?-1:1,i=+e.text().replace(u,"").replace(l,".")*a;e.number(isFinite(i)?+i:0,s,n,o)}):this.text(t.number.apply(window,arguments))};var r=null,s=null;t.isPlainObject(t.valHooks.text)?(t.isFunction(t.valHooks.text.get)&&(r=t.valHooks.text.get),t.isFunction(t.valHooks.text.set)&&(s=t.valHooks.text.set)):t.valHooks.text={},t.valHooks.text.get=function(e){var a,i=t(e),s=i.data("numFormat");return s?""===e.value?"":(e.value.match(/^-/)&&(s.isNegative=!0),a=+e.value.replace(s.regex_dec_num,"").replace(s.regex_dec,"."),a=isFinite(a)?a:0,0!=a&&s.isNegative&&(a*=-1),""+a):t.isFunction(r)?r(e):void 0},t.valHooks.text.set=function(e,a){var i=t(e),r=i.data("numFormat");return r?e.value=""===a?"":t.number(a,r.decimals,r.dec_point,r.thousands_sep):t.isFunction(s)?s(e,a):void 0},t.number=function(t,e,a,i){i="undefined"==typeof i?",":i,a="undefined"==typeof a?".":a,e=isFinite(+e)?Math.abs(e):0;var r="\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4),s="\\u"+("0000"+i.charCodeAt(0).toString(16)).slice(-4);t=(t+"").replace(".",a).replace(new RegExp(s,"g"),"").replace(new RegExp(r,"g"),".").replace(new RegExp("[^0-9+-Ee.]","g"),"");var n=isFinite(+t)?+t:0,o="",d=function(t,e){var a=Math.pow(10,e);return""+Math.round(t*a)/a};return o=(e?d(n,e):""+Math.round(n)).split("."),o[0].length>3&&(o[0]=o[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,i)),(o[1]||"").length<e&&(o[1]=o[1]||"",o[1]+=new Array(e-o[1].length+1).join("0")),o.join(a)}}(jQuery),function(t){var e,a,i=t.event;e=i.special.debouncedresize={setup:function(){t(this).on("resize",e.handler)},teardown:function(){t(this).off("resize",e.handler)},handler:function(t,r){var s=this,n=arguments,o=function(){t.type="debouncedresize",i.dispatch.apply(s,n)};a&&clearTimeout(a),r?o():a=setTimeout(o,e.threshold)},threshold:150},t.event.special.debouncedresize.threshold=250}(jQuery);
;

/* ts-extend-countdown: (http://w-70982-96990-52773.10615136203.sites.cnfree04.qifeiye.com/FeiEditor/bitSite/js/jquery.vcsc.counteverest.min.js) */
!function(e){"use strict";function t(t,l){this.$element=t,this.settings=e.extend({},s,l),this._defaults=s,this._name=n,this._serverDate=null,this._javaScriptDate=null,this.currentDate=null,this.targetDate=null,this.days=null,this.hours=null,this.minutes=null,this.seconds=null,this.deciseconds=null,this.milliseconds=null,this.daysLabel=null,this.hoursLabel=null,this.minutesLabel=null,this.secondsLabel=null,this.decisecondsLabel=null,this.millisecondsLabel=null,this._intervalId=null,this._wrapsExists={},this._oldValues={},this._changed=!1,this.init()}var n="countEverest",s={day:1,month:1,year:2050,hour:0,minute:0,second:0,millisecond:0,timeZone:null,countUp:!1,currentDateTime:null,daysWrapper:".ce-days",hoursWrapper:".ce-hours",minutesWrapper:".ce-minutes",secondsWrapper:".ce-seconds",decisecondsWrapper:".ce-dseconds",millisecondsWrapper:".ce-mseconds",daysLabelWrapper:".ce-days-label",hoursLabelWrapper:".ce-hours-label",minutesLabelWrapper:".ce-minutes-label",secondsLabelWrapper:".ce-seconds-label",decisecondsLabelWrapper:".ce-dseconds-label",millisecondsLabelWrapper:".ce-mseconds-label",singularLabels:!1,daysLabel:"Days",dayLabel:"Day",hoursLabel:"Hours",hourLabel:"Hour",minutesLabel:"Minutes",minuteLabel:"Minute",secondsLabel:"Seconds",secondLabel:"Second",decisecondsLabel:"Deciseconds",decisecondLabel:"Decisecond",millisecondsLabel:"Milliseconds",millisecondLabel:"Millisecond",timeout:1e3,highspeedTimeout:4,leftHandZeros:!0,wrapDigits:!0,wrapDigitsTag:"span",dayInMilliseconds:864e5,hourInMilliseconds:36e5,minuteInMilliseconds:6e4,secondInMilliseconds:1e3,decisecondInMilliseconds:100,onInit:null,beforeCalculation:null,afterCalculation:null,onChange:null,onComplete:null};t.prototype={init:function(){var t=this,n=t.$element,s=t.settings;(e(n).find(s.decisecondsWrapper).length>0||e(n).find(s.millisecondsWrapper).length>0)&&(s.timeout=s.highspeedTimeout),null!=s.currentDateTime&&t.setCurrentDate(s.currentDateTime),e.isFunction(s.onInit)&&s.onInit.call(t),t._intervalId=setInterval(function(){t.calculate()},s.timeout),t.calculate()},calculate:function(){var t=this,n=t.settings,s=n.dayInMilliseconds,l=n.hourInMilliseconds,i=n.minuteInMilliseconds,a=n.secondInMilliseconds,r=n.decisecondInMilliseconds,o=!1;t._changed=!1,t.setTargetDate(new Date(n.year,n.month-1,n.day,n.hour,n.minute,n.second)),e.isFunction(n.beforeCalculation)&&n.beforeCalculation.call(t);var u=t.getCurrentDate(),c=t.getTargetDate(),d=u.getTime(),h=null===n.timeZone?0:(c.getTimezoneOffset()/60+n.timeZone)*n.hourInMilliseconds,m=c.getTime()-h,p=m-d,g=p;t.currentDate=u;var b=t.round(g/s);g%=s;var f=t.round(g/l);g%=l;var L=t.round(g/i);g%=i;var D=t.round(g/a),v=g%a,_=t.round(v/r);0==n.countUp?(b=t.naturalNum(b),f=t.naturalNum(f),L=t.naturalNum(L),D=t.naturalNum(D),v=t.naturalNum(v),_=t.naturalNum(_)):(b=-1*b,f=-1*f,L=-1*L,D=-1*D,v=-1*v,_=-1*_),t.days=b,t.hours=f,t.minutes=L,t.seconds=D,t.milliseconds=v,t.deciseconds=_,t.format(),t.output(),Math.floor(p/n.timeout)<=0&&0==n.countUp&&(o=!0,(null!=n.millisecondsWrapper||null!=n.decisecondsWrapper)&&(o=0>=p?!0:!1)),1==o&&(e.isFunction(n.onComplete)&&n.onComplete.call(t),clearInterval(t._intervalId)),e.isFunction(n.afterCalculation)&&n.afterCalculation.call(t)},format:function(){var e=this,t=e.settings,n=t.singularLabels,s=e.days,l=e.hours,i=e.minutes,a=e.seconds,r=e.deciseconds,o=e.milliseconds,u=t.dayLabel,c=t.hourLabel,d=t.minuteLabel,h=t.secondLabel,m=t.decisecondLabel,p=t.millisecondsLabel;1==t.leftHandZeros&&(e.days=e.strPad(s,2),e.hours=e.strPad(l,2),e.minutes=e.strPad(i,2),e.seconds=e.strPad(a,2),e.milliseconds=e.strPad(o,3)),e.daysLabel=1==s&&null!==u&&1==n?u:t.daysLabel,e.hoursLabel=1==l&&null!==c&&1==n?c:t.hoursLabel,e.minutesLabel=1==i&&null!==d&&1==n?d:t.minutesLabel,e.secondsLabel=1==a&&null!==h&&1==n?h:t.secondsLabel,e.decisecondsLabel=1==r&&null!==m&&1==n?m:t.decisecondsLabel,e.millisecondsLabel=1==o&&null!==p&&1==n?p:t.millisecondsLabel},output:function(){var t=this,n=t.settings;t.writeLabelToDom(n.daysLabelWrapper,t.daysLabel),t.writeLabelToDom(n.hoursLabelWrapper,t.hoursLabel),t.writeLabelToDom(n.minutesLabelWrapper,t.minutesLabel),t.writeLabelToDom(n.secondsLabelWrapper,t.secondsLabel),t.writeLabelToDom(n.decisecondsLabelWrapper,t.decisecondsLabel),t.writeLabelToDom(n.millisecondsLabelWrapper,t.millisecondsLabel),t.writeDigitsToDom(n.daysWrapper,t.days,"ce-days-digit"),t.writeDigitsToDom(n.hoursWrapper,t.hours,"ce-hours-digit"),t.writeDigitsToDom(n.minutesWrapper,t.minutes,"ce-minutes-digit"),t.writeDigitsToDom(n.secondsWrapper,t.seconds,"ce-seconds-digit"),t.writeDigitsToDom(n.decisecondsWrapper,t.deciseconds,"ce-dseconds-digit"),t.writeDigitsToDom(n.millisecondsWrapper,t.milliseconds,"ce-mseconds-digit"),e.isFunction(n.onChange)&&1==t._changed&&n.onChange.call(t)},pause:function(){var e=this,t=e._intervalId;t&&clearInterval(t)},resume:function(){var e=this,t=e.settings;e._intervalId=setInterval(function(){e.calculate()},t.timeout)},destroy:function(){var e=this,t=e._intervalId;t&&clearInterval(t)},getOption:function(e){return this.settings[e]},setOption:function(e,t){this.settings[e]=t,"currentDateTime"==e&&this.setCurrentDate(t)},setTargetDate:function(e){this.targetDate=e},getTargetDate:function(){return this.targetDate},setCurrentDate:function(e){this._serverDate=new Date(e),this._javaScriptDate=new Date},getCurrentDate:function(){var e,t,n=this,s=n.settings;return null!=s.currentDateTime?(e=n._serverDate-n._javaScriptDate,t=(new Date).getTime(),new Date(t+e)):new Date},round:function(e){return 0==this.settings.countUp?Math.floor(e):Math.ceil(e)},naturalNum:function(e){return 0>e?0:e},strPad:function(e,t,n){var s=e.toString();for(n||(n="0");s.length<t;)s=n+s;return s},writeLabelToDom:function(t,n){var s=this,l=e(s.$element);null==s._wrapsExists[t]&&(s._wrapsExists[t]=l.find(t).length>0?!0:!1),s._oldValues[t]!=n&&s._wrapsExists[t]&&(s._oldValues[t]=n,l.find(t).text(n),s._changed=!0)},writeDigitsToDom:function(t,n,s){var l,i,a=this,r=a.settings,o=r.wrapDigitsTag,u=e(a.$element),c=u.find(t),n=n.toString(),d=[];if(null==a._wrapsExists[t]&&(a._wrapsExists[t]=c.length>0?!0:!1),0==a._wrapsExists[t])return!1;if(1==r.wrapDigits)for(var h=0;h<n.length;h++)d[h]=n[h];else d[0]=n;if("undefined"==typeof a._oldValues[t]&&(a._oldValues[t]=[]),a._oldValues[t].length>d.length){i=a._oldValues[t].length-d.length,l=c.find(o),l.slice(0,i).remove(),l=c.find(o);for(var h=0;h<d.length;h++)l.eq(h).text(d[h]);a._changed=!0}if(a._oldValues[t].length<d.length){if(0==r.wrapDigits)c.text(d[0]);else{0==a._oldValues[t].length&&c.text("");for(var m="",h=0;h<d.length;h++)i=d.length-a._oldValues[t].length,i>h?m+="<"+o+' class="'+s+'">'+d[h]+"</"+o+">":(l=c.find(o),l.eq(h-i).text(d[h]));c.prepend(m)}a._changed=!0}if(a._oldValues[t].length==d.length)if(0==r.wrapDigits)a._oldValues[t][0]!=d[0]&&(c.text(d[0]),a._changed=!0);else for(var h=0;h<d.length;h++)a._oldValues[t][h]!=d[h]&&(l=c.find(o),l.eq(h).text(d[h]),a._changed=!0);a._oldValues[t]=[];for(var h=0;h<d.length;h++)a._oldValues[t][h]=d[h]}},e.fn[n]=function(s,l,i){var a=null,r=this.each(function(){var r=null;if(e.data(this,n)){if(r=e.data(this,n),"destroy"===s)return r.destroy(),e.data(this,n,null),void 0;var o=r[s];return"function"==typeof o&&(a=o.call(r,l,i)),!1}r=new t(this,s),e.data(this,n,r)});return a?a:r}}(jQuery,window,document);;

/* ts-extend-circliful: (http://w-70982-96990-52773.10615136203.sites.cnfree04.qifeiye.com/qfy-content/plugins/qfy_editor/js/jquery.circliful.min.js) */
!function(e){e.fn.circliful=function(t){var i=e.extend({fgcolor:"#556b2f",bgcolor:"#eee",fill:!1,width:15,responsive:!0,dimension:200,maxsize:250,fontsize:30,infosize:15,percent:50,animationstep:1,iconsize:30,iconcolor:"#dddddd",iconposition:"left",border:"default",type:"full",complete:null},t);return this.each(function(){function e(e,t,i){if(0!=u.length)var n=_+'<span id="'+m+'-value">'+u+"</span>"+j;else var n="";0==u.length&&0==d.length?"half"==M?jQuery("<span></span>").appendTo(e).addClass(t).attr("id",m+"-text").html(n).prepend(icon).css({"line-height":T+"px",height:T+"px",top:y/2-T+"px"}):jQuery("<span></span>").appendTo(e).addClass(t).attr("id",m+"-text").html(n).prepend(icon).css({"line-height":T+"px",height:T+"px",top:(y-T)/2+"px"}):(1==I&&0!=u.length,"left"==k?jQuery("<span></span>").appendTo(e).addClass(t).attr("id",m+"-text").html(n).prepend(icon).css({"line-height":i+"px","font-size":Q+"px"}):jQuery("<span></span>").appendTo(e).addClass(t).attr("id",m+"-text").html(n).append(icon).css({"line-height":i+"px","font-size":Q+"px"}))}function n(e,t){jQuery("<span></span>").appendTo(e).addClass("circle-info-half").text(d).css({"line-height":y*t+"px","font-size":x+"px"})}function r(e){jQuery.each(o,function(t,n){s[n]=void 0!=e.data(n)?e.data(n):jQuery(i).attr(n),"fill"==n&&void 0!=e.data("fill")&&(c=!0)})}function a(e){A.clearRect(0,0,P.width,P.height),A.beginPath(),A.arc(B,L,z,H,F,!1),A.lineWidth=f+1,A.strokeStyle=b,A.stroke(),c&&(A.fillStyle=s.fill,A.fill()),A.beginPath(),A.arc(B,L,z,-$,Y*e-$,!1),"outline"==s.border?A.lineWidth=f+.75*f:"inline"==s.border&&(A.lineWidth=f-.75*f),A.strokeStyle=v,A.stroke(),D>E&&(E+=R,requestAnimationFrame(function(){a(Math.min(E,D)/100)},l)),E==D&&N&&"undefined"!=typeof t&&jQuery.isFunction(t.complete)&&(t.complete(),N=!1)}var o=["id","responsive","fgcolor","bgcolor","type","fill","width","dimension","maxsize","fontsize","infosize","animationstep","endPercent","text","info","seperator","decimals","prefix","postfix","group","fontsize","icon","image","iconcolor","iconsize","iconposition","border"],s={},l=jQuery(this),c=!1,u="",d="";l.addClass("circliful"),r(l);var h=l.parent().width(),p=s.responsive,y=parseInt(s.dimension),m=s.id,f=parseInt(s.width),g=parseInt(s.maxsize);y=1==p?h>g?g:h:y;var v=s.fgcolor,b=s.bgcolor,w=s.animationstep,_=s.prefix,j=s.postfix,Q=s.fontsize,x=s.infosize,T=s.iconsize,C=s.iconcolor,k=s.iconposition;if(void 0!=l.data("total")&&void 0!=l.data("part")){var S=l.data("total")/100;(l.data("part")/S/100).toFixed(3);var D=(l.data("part")/S).toFixed(3)}else if(void 0!=l.data("percent")){l.data("percent")/100;var D=l.data("percent")}else{i.percent/100;var D=0}if(void 0!=l.data("text")){if(u=l.data("text"),0!=u.length?(_=jQuery(this).data("prefix"),j=jQuery(this).data("postfix")):(u="",_="",j=""),void 0!=l.data("icon")&&"transparent"!=l.data("icon")){icon=jQuery("<i></i>").addClass("ts-font-icon circle-icon "+l.data("icon")).attr("id",m+"-icon").css({color:C,"font-size":T+"px",height:T+"px",width:T+"px","line-height":T+"px",margin:0!=u.length?"0 5px":0});var I=!0}else if(void 0!=l.data("image")&&""!=l.data("image")){icon=jQuery('<img src="'+l.data("image")+'">').addClass("ts-font-icon circle-image").attr("id",m+"-image").css({"font-size":T+"px",height:T+"px",width:T+"px","line-height":T+"px",margin:0!=u.length?"0 5px":0});var I=!0}else{icon="";var I=!1}if(void 0!=l.data("type")){var M=l.data("type");"half"==M?e(l,"circle-text-half",y/1.45):e(l,"circle-text",y)}else{var M=i.type;e(l,"circle-text",y)}}void 0!=jQuery(this).data("info")&&(d=l.data("info"),0!=d.length&&(void 0!=jQuery(this).data("type")?(M=l.data("type"),"half"==M?n(l,.9):n(l,1.25)):n(l,1.25))),jQuery(this).width(y+"px");var P=jQuery("<canvas></canvas>").attr({width:y,height:y}).appendTo(jQuery(this)).get(0),A=P.getContext("2d"),B=P.width/2,L=P.height/2,O=360*s.percent;O*(Math.PI/180);var z=.4*P.width;.1*P.width;var F=2.3*Math.PI,H=0,E=0===w?D:0,R=Math.max(w,0),Y=2*Math.PI,$=Math.PI/2,M="",N=!0;void 0!=jQuery(this).data("type")&&(M=jQuery(this).data("type"),"half"==M&&(F=2*Math.PI,H=3.13,Y=1*Math.PI,$=Math.PI/.996,l.css("margin-bottom","-"+y/2+"px"))),jQuery(this).attr("data-size",jQuery(this).parent().width()),jQuery(this).waypoint({handler:function(){if(jQuery(this).attr("data-view","true"),0!=u.length){var e=jQuery(this).attr("data-decimals"),t=jQuery(this).attr("data-group"),i=jQuery(this).attr("data-seperator")/*,n=new countUp(m+"-value",0,u,parseInt(e),1.5,{useEasing:!0,useGrouping:!0,separator:t,decimal:i})*/;/*n.start()*/}a(E/100)},offset:"85%",triggerOnce:!0})})}}(jQuery);;

/* ts-extend-countto: (http://w-70982-96990-52773.10615136203.sites.cnfree04.qifeiye.com/qfy-content/plugins/qfy_editor/js/jquery.countto.min.js) */
!function(e){function t(e,t){return e.toFixed(t.decimals)}e.fn.countTo=function(t){return t=t||{},e(this).each(function(){function i(){u+=r,c++,n(u),"function"==typeof s.onUpdate&&s.onUpdate.call(o,u),c>=a&&(l.removeData("countTo"),clearInterval(h.interval),u=s.to,"function"==typeof s.onComplete&&s.onComplete.call(o,u))}function n(e){var t=s.formatter.call(o,e,s);l.text(t)}var s=e.extend({},e.fn.countTo.defaults,{from:e(this).data("from"),to:e(this).data("to"),speed:e(this).data("speed"),refreshInterval:e(this).data("refresh-interval"),decimals:e(this).data("decimals")},t),a=Math.ceil(s.speed/s.refreshInterval),r=(s.to-s.from)/a,o=this,l=e(this),c=0,u=s.from,h=l.data("countTo")||{};l.data("countTo",h),h.interval&&clearInterval(h.interval),h.interval=setInterval(i,s.refreshInterval),n(u)})},e.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:t,onUpdate:null,onComplete:null}}(jQuery);;

