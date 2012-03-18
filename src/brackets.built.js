
/*
 RequireJS 1.0.3 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(){function J(a){return M.call(a)==="[object Function]"}function E(a){return M.call(a)==="[object Array]"}function Z(a,c,h){for(var k in c)if(!(k in K)&&(!(k in a)||h))a[k]=c[k];return d}function N(a,c,d){a=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+a);if(d)a.originalError=d;return a}function $(a,c,d){var k,j,q;for(k=0;q=c[k];k++){q=typeof q==="string"?{name:q}:q;j=q.location;if(d&&(!j||j.indexOf("/")!==0&&j.indexOf(":")===-1))j=d+"/"+(j||q.name);a[q.name]={name:q.name,location:j||
q.name,main:(q.main||"main").replace(ea,"").replace(aa,"")}}}function U(a,c){a.holdReady?a.holdReady(c):c?a.readyWait+=1:a.ready(!0)}function fa(a){function c(b,l){var f,a;if(b&&b.charAt(0)===".")if(l){p.pkgs[l]?l=[l]:(l=l.split("/"),l=l.slice(0,l.length-1));f=b=l.concat(b.split("/"));var c;for(a=0;c=f[a];a++)if(c===".")f.splice(a,1),a-=1;else if(c==="..")if(a===1&&(f[2]===".."||f[0]===".."))break;else a>0&&(f.splice(a-1,2),a-=2);a=p.pkgs[f=b[0]];b=b.join("/");a&&b===f+"/"+a.main&&(b=f)}else b.indexOf("./")===
0&&(b=b.substring(2));return b}function h(b,l){var f=b?b.indexOf("!"):-1,a=null,d=l?l.name:null,i=b,e,h;f!==-1&&(a=b.substring(0,f),b=b.substring(f+1,b.length));a&&(a=c(a,d));b&&(a?e=(f=m[a])&&f.normalize?f.normalize(b,function(b){return c(b,d)}):c(b,d):(e=c(b,d),h=E[e],h||(h=g.nameToUrl(e,null,l),E[e]=h)));return{prefix:a,name:e,parentMap:l,url:h,originalName:i,fullName:a?a+"!"+(e||""):e}}function k(){var b=!0,l=p.priorityWait,f,a;if(l){for(a=0;f=l[a];a++)if(!s[f]){b=!1;break}b&&delete p.priorityWait}return b}
function j(b,l,f){return function(){var a=ga.call(arguments,0),c;if(f&&J(c=a[a.length-1]))c.__requireJsBuild=!0;a.push(l);return b.apply(null,a)}}function q(b,l){var a=j(g.require,b,l);Z(a,{nameToUrl:j(g.nameToUrl,b),toUrl:j(g.toUrl,b),defined:j(g.requireDefined,b),specified:j(g.requireSpecified,b),isBrowser:d.isBrowser});return a}function o(b){var l,a,c,B=b.callback,i=b.map,e=i.fullName,ba=b.deps;c=b.listeners;if(B&&J(B)){if(p.catchError.define)try{a=d.execCb(e,b.callback,ba,m[e])}catch(k){l=k}else a=
d.execCb(e,b.callback,ba,m[e]);if(e)(B=b.cjsModule)&&B.exports!==void 0&&B.exports!==m[e]?a=m[e]=b.cjsModule.exports:a===void 0&&b.usingExports?a=m[e]:(m[e]=a,F[e]&&(Q[e]=!0))}else e&&(a=m[e]=B,F[e]&&(Q[e]=!0));if(C[b.id])delete C[b.id],b.isDone=!0,g.waitCount-=1,g.waitCount===0&&(I=[]);delete R[e];if(d.onResourceLoad&&!b.placeholder)d.onResourceLoad(g,i,b.depArray);if(l)return a=(e?h(e).url:"")||l.fileName||l.sourceURL,c=l.moduleTree,l=N("defineerror",'Error evaluating module "'+e+'" at location "'+
a+'":\n'+l+"\nfileName:"+a+"\nlineNumber: "+(l.lineNumber||l.line),l),l.moduleName=e,l.moduleTree=c,d.onError(l);for(l=0;B=c[l];l++)B(a)}function r(b,a){return function(f){b.depDone[a]||(b.depDone[a]=!0,b.deps[a]=f,b.depCount-=1,b.depCount||o(b))}}function u(b,a){var f=a.map,c=f.fullName,h=f.name,i=L[b]||(L[b]=m[b]),e;if(!a.loading)a.loading=!0,e=function(b){a.callback=function(){return b};o(a);s[a.id]=!0;w()},e.fromText=function(b,a){var l=O;s[b]=!1;g.scriptCount+=1;g.fake[b]=!0;l&&(O=!1);d.exec(a);
l&&(O=!0);g.completeLoad(b)},c in m?e(m[c]):i.load(h,q(f.parentMap,!0),e,p)}function v(b){C[b.id]||(C[b.id]=b,I.push(b),g.waitCount+=1)}function D(b){this.listeners.push(b)}function t(b,a){var f=b.fullName,c=b.prefix,d=c?L[c]||(L[c]=m[c]):null,i,e;f&&(i=R[f]);if(!i&&(e=!0,i={id:(c&&!d?M++ +"__p@:":"")+(f||"__r@"+M++),map:b,depCount:0,depDone:[],depCallbacks:[],deps:[],listeners:[],add:D},x[i.id]=!0,f&&(!c||L[c])))R[f]=i;c&&!d?(f=t(h(c),!0),f.add(function(){var a=h(b.originalName,b.parentMap),a=t(a,
!0);i.placeholder=!0;a.add(function(b){i.callback=function(){return b};o(i)})})):e&&a&&(s[i.id]=!1,g.paused.push(i),v(i));return i}function A(b,a,f,c){var b=h(b,c),d=b.name,i=b.fullName,e=t(b),k=e.id,j=e.deps,n;if(i){if(i in m||s[k]===!0||i==="jquery"&&p.jQuery&&p.jQuery!==f().fn.jquery)return;x[k]=!0;s[k]=!0;i==="jquery"&&f&&V(f())}e.depArray=a;e.callback=f;for(f=0;f<a.length;f++)if(k=a[f])k=h(k,d?b:c),n=k.fullName,a[f]=n,n==="require"?j[f]=q(b):n==="exports"?(j[f]=m[i]={},e.usingExports=!0):n===
"module"?e.cjsModule=j[f]={id:d,uri:d?g.nameToUrl(d,null,c):void 0,exports:m[i]}:n in m&&!(n in C)&&(!(i in F)||i in F&&Q[n])?j[f]=m[n]:(i in F&&(F[n]=!0,delete m[n],S[k.url]=!1),e.depCount+=1,e.depCallbacks[f]=r(e,f),t(k,!0).add(e.depCallbacks[f]));e.depCount?v(e):o(e)}function n(b){A.apply(null,b)}function y(b,a){if(!b.isDone){var c=b.map.fullName,d=b.depArray,g,i,e,k;if(c){if(a[c])return m[c];a[c]=!0}if(d)for(g=0;g<d.length;g++)if(i=d[g])if((e=h(i).prefix)&&(k=C[e])&&y(k,a),(e=C[i])&&!e.isDone&&
s[i])i=y(e,a),b.depCallbacks[g](i);return c?m[c]:void 0}}function z(){var b=p.waitSeconds*1E3,a=b&&g.startTime+b<(new Date).getTime(),b="",c=!1,h=!1,j;if(!(g.pausedCount>0)){if(p.priorityWait)if(k())w();else return;for(j in s)if(!(j in K)&&(c=!0,!s[j]))if(a)b+=j+" ";else{h=!0;break}if(c||g.waitCount){if(a&&b)return j=N("timeout","Load timeout for modules: "+b),j.requireType="timeout",j.requireModules=b,d.onError(j);if(h||g.scriptCount){if((G||ca)&&!W)W=setTimeout(function(){W=0;z()},50)}else{if(g.waitCount){for(H=
0;b=I[H];H++)y(b,{});g.paused.length&&w();X<5&&(X+=1,z())}X=0;d.checkReadyState()}}}}var g,w,p={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},catchError:{}},P=[],x={require:!0,exports:!0,module:!0},E={},m={},s={},C={},I=[],S={},M=0,R={},L={},F={},Q={},Y=0;V=function(b){if(!g.jQuery&&(b=b||(typeof jQuery!=="undefined"?jQuery:null))&&!(p.jQuery&&b.fn.jquery!==p.jQuery)&&("holdReady"in b||"readyWait"in b))if(g.jQuery=b,n(["jquery",[],function(){return jQuery}]),g.scriptCount)U(b,!0),g.jQueryIncremented=
!0};w=function(){var b,a,c,h,j,i;Y+=1;if(g.scriptCount<=0)g.scriptCount=0;for(;P.length;)if(b=P.shift(),b[0]===null)return d.onError(N("mismatch","Mismatched anonymous define() module: "+b[b.length-1]));else n(b);if(!p.priorityWait||k())for(;g.paused.length;){j=g.paused;g.pausedCount+=j.length;g.paused=[];for(h=0;b=j[h];h++)a=b.map,c=a.url,i=a.fullName,a.prefix?u(a.prefix,b):!S[c]&&!s[i]&&(d.load(g,i,c),c.indexOf("empty:")!==0&&(S[c]=!0));g.startTime=(new Date).getTime();g.pausedCount-=j.length}Y===
1&&z();Y-=1};g={contextName:a,config:p,defQueue:P,waiting:C,waitCount:0,specified:x,loaded:s,urlMap:E,urlFetched:S,scriptCount:0,defined:m,paused:[],pausedCount:0,plugins:L,needFullExec:F,fake:{},fullExec:Q,managerCallbacks:R,makeModuleMap:h,normalize:c,configure:function(b){var a,c,d;b.baseUrl&&b.baseUrl.charAt(b.baseUrl.length-1)!=="/"&&(b.baseUrl+="/");a=p.paths;d=p.pkgs;Z(p,b,!0);if(b.paths){for(c in b.paths)c in K||(a[c]=b.paths[c]);p.paths=a}if((a=b.packagePaths)||b.packages){if(a)for(c in a)c in
K||$(d,a[c],c);b.packages&&$(d,b.packages);p.pkgs=d}if(b.priority)c=g.requireWait,g.requireWait=!1,g.takeGlobalQueue(),w(),g.require(b.priority),w(),g.requireWait=c,p.priorityWait=b.priority;if(b.deps||b.callback)g.require(b.deps||[],b.callback)},requireDefined:function(b,a){return h(b,a).fullName in m},requireSpecified:function(b,a){return h(b,a).fullName in x},require:function(b,c,f){if(typeof b==="string"){if(J(c))return d.onError(N("requireargs","Invalid require call"));if(d.get)return d.get(g,
b,c);c=h(b,c);b=c.fullName;return!(b in m)?d.onError(N("notloaded","Module name '"+c.fullName+"' has not been loaded yet for context: "+a)):m[b]}(b&&b.length||c)&&A(null,b,c,f);if(!g.requireWait)for(;!g.scriptCount&&g.paused.length;)g.takeGlobalQueue(),w();return g.require},takeGlobalQueue:function(){T.length&&(ha.apply(g.defQueue,[g.defQueue.length-1,0].concat(T)),T=[])},completeLoad:function(b){var a;for(g.takeGlobalQueue();P.length;)if(a=P.shift(),a[0]===null){a[0]=b;break}else if(a[0]===b)break;
else n(a),a=null;a?n(a):n([b,[],b==="jquery"&&typeof jQuery!=="undefined"?function(){return jQuery}:null]);d.isAsync&&(g.scriptCount-=1);w();d.isAsync||(g.scriptCount-=1)},toUrl:function(a,c){var d=a.lastIndexOf("."),h=null;d!==-1&&(h=a.substring(d,a.length),a=a.substring(0,d));return g.nameToUrl(a,h,c)},nameToUrl:function(a,h,f){var j,k,i,e,m=g.config,a=c(a,f&&f.fullName);if(d.jsExtRegExp.test(a))h=a+(h?h:"");else{j=m.paths;k=m.pkgs;f=a.split("/");for(e=f.length;e>0;e--)if(i=f.slice(0,e).join("/"),
j[i]){f.splice(0,e,j[i]);break}else if(i=k[i]){a=a===i.name?i.location+"/"+i.main:i.location;f.splice(0,e,a);break}h=f.join("/")+(h||".js");h=(h.charAt(0)==="/"||h.match(/^\w+:/)?"":m.baseUrl)+h}return m.urlArgs?h+((h.indexOf("?")===-1?"?":"&")+m.urlArgs):h}};g.jQueryCheck=V;g.resume=w;return g}function ia(){var a,c,d;if(n&&n.readyState==="interactive")return n;a=document.getElementsByTagName("script");for(c=a.length-1;c>-1&&(d=a[c]);c--)if(d.readyState==="interactive")return n=d;return null}var ja=
/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ka=/require\(\s*["']([^'"\s]+)["']\s*\)/g,ea=/^\.\//,aa=/\.js$/,M=Object.prototype.toString,r=Array.prototype,ga=r.slice,ha=r.splice,G=!!(typeof window!=="undefined"&&navigator&&document),ca=!G&&typeof importScripts!=="undefined",la=G&&navigator.platform==="PLAYSTATION 3"?/^complete$/:/^(complete|loaded)$/,da=typeof opera!=="undefined"&&opera.toString()==="[object Opera]",K={},D={},T=[],n=null,X=0,O=!1,d,r={},I,v,t,x,u,y,z,H,A,V,W;if(typeof define==="undefined"){if(typeof requirejs!==
"undefined")if(J(requirejs))return;else r=requirejs,requirejs=void 0;typeof require!=="undefined"&&!J(require)&&(r=require,require=void 0);d=requirejs=function(a,c,d){var k="_",j;!E(a)&&typeof a!=="string"&&(j=a,E(c)?(a=c,c=d):a=[]);if(j&&j.context)k=j.context;d=D[k]||(D[k]=fa(k));j&&d.configure(j);return d.require(a,c)};d.config=function(a){return d(a)};require||(require=d);d.toUrl=function(a){return D._.toUrl(a)};d.version="1.0.3";d.jsExtRegExp=/^\/|:|\?|\.js$/;v=d.s={contexts:D,skipAsync:{}};if(d.isAsync=
d.isBrowser=G)if(t=v.head=document.getElementsByTagName("head")[0],x=document.getElementsByTagName("base")[0])t=v.head=x.parentNode;d.onError=function(a){throw a;};d.load=function(a,c,h){d.resourcesReady(!1);a.scriptCount+=1;d.attach(h,a,c);if(a.jQuery&&!a.jQueryIncremented)U(a.jQuery,!0),a.jQueryIncremented=!0};define=function(a,c,d){var k,j;typeof a!=="string"&&(d=c,c=a,a=null);E(c)||(d=c,c=[]);!c.length&&J(d)&&d.length&&(d.toString().replace(ja,"").replace(ka,function(a,d){c.push(d)}),c=(d.length===
1?["require"]:["require","exports","module"]).concat(c));if(O&&(k=I||ia()))a||(a=k.getAttribute("data-requiremodule")),j=D[k.getAttribute("data-requirecontext")];(j?j.defQueue:T).push([a,c,d])};define.amd={multiversion:!0,plugins:!0,jQuery:!0};d.exec=function(a){return eval(a)};d.execCb=function(a,c,d,k){return c.apply(k,d)};d.addScriptToDom=function(a){I=a;x?t.insertBefore(a,x):t.appendChild(a);I=null};d.onScriptLoad=function(a){var c=a.currentTarget||a.srcElement,h;if(a.type==="load"||c&&la.test(c.readyState))n=
null,a=c.getAttribute("data-requirecontext"),h=c.getAttribute("data-requiremodule"),D[a].completeLoad(h),c.detachEvent&&!da?c.detachEvent("onreadystatechange",d.onScriptLoad):c.removeEventListener("load",d.onScriptLoad,!1)};d.attach=function(a,c,h,k,j,n){var o;if(G)return k=k||d.onScriptLoad,o=c&&c.config&&c.config.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),o.type=j||"text/javascript",o.charset="utf-8",o.async=!v.skipAsync[a],c&&o.setAttribute("data-requirecontext",
c.contextName),o.setAttribute("data-requiremodule",h),o.attachEvent&&!da?(O=!0,n?o.onreadystatechange=function(){if(o.readyState==="loaded")o.onreadystatechange=null,o.attachEvent("onreadystatechange",k),n(o)}:o.attachEvent("onreadystatechange",k)):o.addEventListener("load",k,!1),o.src=a,n||d.addScriptToDom(o),o;else ca&&(importScripts(a),c.completeLoad(h));return null};if(G){u=document.getElementsByTagName("script");for(H=u.length-1;H>-1&&(y=u[H]);H--){if(!t)t=y.parentNode;if(z=y.getAttribute("data-main")){if(!r.baseUrl)u=
z.split("/"),y=u.pop(),u=u.length?u.join("/")+"/":"./",r.baseUrl=u,z=y.replace(aa,"");r.deps=r.deps?r.deps.concat(z):[z];break}}}d.checkReadyState=function(){var a=v.contexts,c;for(c in a)if(!(c in K)&&a[c].waitCount)return;d.resourcesReady(!0)};d.resourcesReady=function(a){var c,h;d.resourcesDone=a;if(d.resourcesDone)for(h in a=v.contexts,a)if(!(h in K)&&(c=a[h],c.jQueryIncremented))U(c.jQuery,!1),c.jQueryIncremented=!1};d.pageLoaded=function(){if(document.readyState!=="complete")document.readyState=
"complete"};if(G&&document.addEventListener&&!document.readyState)document.readyState="loading",window.addEventListener("load",d.pageLoaded,!1);d(r);if(d.isAsync&&typeof setTimeout!=="undefined")A=v.contexts[r.context||"_"],A.requireWait=!0,setTimeout(function(){A.requireWait=!1;A.takeGlobalQueue();A.scriptCount||A.resume();d.checkReadyState()},0)}})();

define("thirdparty/require", function(){});

/* ============================================================
 * bootstrap-dropdown.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#dropdown
 * ============================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function( $ ){

  "use strict"

  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  $.fn.dropdown = function ( selector ) {
    return this.each(function () {
      $(this).delegate(selector || d, 'click', function (e) {
        var li = $(this).parent('li')
          , isActive = li.hasClass('open')

        clearMenus()
        !isActive && li.toggleClass('open')
        return false
      })
    })
  }

  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  var d = 'a.menu, .dropdown-toggle'

  function clearMenus() {
    $(d).parent('li').removeClass('open')
  }

  $(function () {
    $('html').bind("click", clearMenus)
    $('body').dropdown( '[data-dropdown] a.menu, [data-dropdown] .dropdown-toggle' )
  })

}( window.jQuery || window.ender );

define("widgets/bootstrap-dropdown", function(){});

/* =========================================================
 * bootstrap-modal.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#modal
 * =========================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function( $ ){

  "use strict"

 /* CSS TRANSITION SUPPORT (https://gist.github.com/373874)
  * ======================================================= */

  var transitionEnd

  $(document).ready(function () {

    $.support.transition = (function () {
      var thisBody = document.body || document.documentElement
        , thisStyle = thisBody.style
        , support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined
      return support
    })()

    // set CSS transition event type
    if ( $.support.transition ) {
      transitionEnd = "TransitionEnd"
      if ( $.browser.webkit ) {
      	transitionEnd = "webkitTransitionEnd"
      } else if ( $.browser.mozilla ) {
      	transitionEnd = "transitionend"
      } else if ( $.browser.opera ) {
      	transitionEnd = "oTransitionEnd"
      }
    }

  })


 /* MODAL PUBLIC CLASS DEFINITION
  * ============================= */

  var Modal = function ( content, options ) {
    this.settings = $.extend({}, $.fn.modal.defaults, options)
    this.$element = $(content)
      .delegate('.close', 'click.modal', $.proxy(this.hide, this))

    if ( this.settings.show ) {
      this.show()
    }

    return this
  }

  Modal.prototype = {

      toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
        this.isShown = true
        this.$element.trigger('show')

        escape.call(this)
        backdrop.call(this, function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          that.$element
            .appendTo(document.body)
            .show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element.addClass('in')

          transition ?
            that.$element.one(transitionEnd, function () { that.$element.trigger('shown') }) :
            that.$element.trigger('shown')

        })

        return this
      }

    , hide: function (e) {
        e && e.preventDefault()

        if ( !this.isShown ) {
          return this
        }

        var that = this
        this.isShown = false

        escape.call(this)

        this.$element
          .trigger('hide')
          .removeClass('in')

        $.support.transition && this.$element.hasClass('fade') ?
          hideWithTransition.call(this) :
          hideModal.call(this)

        return this
      }

  }


 /* MODAL PRIVATE METHODS
  * ===================== */

  function hideWithTransition() {
    // firefox drops transitionEnd events :{o
    var that = this
      , timeout = setTimeout(function () {
          that.$element.unbind(transitionEnd)
          hideModal.call(that)
        }, 500)

    this.$element.one(transitionEnd, function () {
      clearTimeout(timeout)
      hideModal.call(that)
    })
  }

  function hideModal (that) {
    this.$element
      .hide()
      .trigger('hidden')

    backdrop.call(this)
  }

  function backdrop ( callback ) {
    var that = this
      , animate = this.$element.hasClass('fade') ? 'fade' : ''
    if ( this.isShown && this.settings.backdrop ) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      if ( this.settings.backdrop != 'static' ) {
        this.$backdrop.click($.proxy(this.hide, this))
      }

      if ( doAnimate ) {
        this.$backdrop[0].offsetWidth // force reflow
      }

      this.$backdrop.addClass('in')

      doAnimate ?
        this.$backdrop.one(transitionEnd, callback) :
        callback()

    } else if ( !this.isShown && this.$backdrop ) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop.one(transitionEnd, $.proxy(removeBackdrop, this)) :
        removeBackdrop.call(this)

    } else if ( callback ) {
       callback()
    }
  }

  function removeBackdrop() {
    this.$backdrop.remove()
    this.$backdrop = null
  }

  function escape() {
    var that = this
    if ( this.isShown && this.settings.keyboard ) {
      $(document).bind('keyup.modal', function ( e ) {
        if ( e.which == 27 ) {
          that.hide()
        }
      })
    } else if ( !this.isShown ) {
      $(document).unbind('keyup.modal')
    }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  $.fn.modal = function ( options ) {
    var modal = this.data('modal')

    if (!modal) {

      if (typeof options == 'string') {
        options = {
          show: /show|toggle/.test(options)
        }
      }

      return this.each(function () {
        $(this).data('modal', new Modal(this, options))
      })
    }

    if ( options === true ) {
      return modal
    }

    if ( typeof options == 'string' ) {
      modal[options]()
    } else if ( modal ) {
      modal.toggle()
    }

    return this
  }

  $.fn.modal.Modal = Modal

  $.fn.modal.defaults = {
    backdrop: false
  , keyboard: false
  , show: false
  }


 /* MODAL DATA- IMPLEMENTATION
  * ========================== */

  $(document).ready(function () {
    $('body').delegate('[data-controls-modal]', 'click', function (e) {
      e.preventDefault()
      var $this = $(this).data('show', true)
      $('#' + $this.attr('data-controls-modal')).modal( $this.data() )
    })
  })

}( window.jQuery || window.ender );

define("widgets/bootstrap-modal", function(){});

// path-utils.js - version 0.1
// Copyright (c) 2011, Kin Blas
// All rights reserved.
// 
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the <organization> nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

(function(l){function m(a){return function(e){return b.parseUrl(e)[a]}}var b={urlParseRE:/^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#\.]*(?:\.[^\?#\.]+)*(\.[^\?#\.]+)|[^\?#]*)))?(\?[^#]+)?)(#.*)?/,parsedUrlPropNames:"href,hrefNoHash,hrefNoSearch,domain,protocol,doubleSlash,authority,userinfo,username,password,host,hostname,port,pathname,directory,filename,filenameExtension,search,hash".split(","),
defaultPorts:{http:"80",https:"443",ftp:"20",ftps:"990"},parseUrl:function(a){if(a&&typeof a==="object")return a;var a=b.urlParseRE.exec(a||"")||[],e=b.parsedUrlPropNames,c=e.length,f={},d;for(d=0;d<c;d++)f[e[d]]=a[d]||"";return f},port:function(a){a=b.parseUrl(a);return a.port||b.defaultPorts[a.protocol]},isSameDomain:function(a,e){return b.parseUrl(a).domain===b.parseUrl(e).domain},isRelativeUrl:function(a){return b.parseUrl(a).protocol===""},isAbsoluteUrl:function(a){return b.parseUrl(a).protocol!==
""},makePathAbsolute:function(a,e){if(a&&a.charAt(0)==="/")return a;for(var a=a||"",c=(e=e?e.replace(/^\/|(\/[^\/]*|[^\/]+)$/g,""):"")?e.split("/"):[],b=a.split("/"),d=0;d<b.length;d++){var j=b[d];switch(j){case ".":break;case "..":c.length&&c.pop();break;default:c.push(j)}}return"/"+c.join("/")},makePathRelative:function(a,b){for(var b=b?b.replace(/^\/|\/?[^\/]*$/g,""):"",a=a?a.replace(/^\//,""):"",c=b?b.split("/"):[],f=a.split("/"),d=[],j=c.length,g=false,i=0;i<j;i++)(g=g||f[0]!==c[i])?d.push(".."):
f.shift();return d.concat(f).join("/")},makeUrlAbsolute:function(a,e){if(!b.isRelativeUrl(a))return a;var c=b.parseUrl(a),f=b.parseUrl(e),d=c.protocol||f.protocol,g=c.protocol?c.doubleSlash:c.doubleSlash||f.doubleSlash,h=c.authority||f.authority,i=c.pathname!=="",k=b.makePathAbsolute(c.pathname||f.filename,f.pathname);return d+g+h+k+(c.search||!i&&f.search||"")+c.hash}},g,h,k=b.parsedUrlPropNames,n=k.length;for(g=0;g<n;g++)h=k[g],b[h]||(b[h]=m(h));l.PathUtils=b})(window);

define("thirdparty/path-utils/path-utils.min", function(){});

/**
 * Smart Auto Complete plugin 
 * 
 * Copyright (c) 2011 Lakshan Perera (laktek.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)  licenses.
 * 
*/

/*
 Requirements: jQuery 1.5 or above

  Usage:
  $(target).smartAutoComplete({options})

  Options:
  minCharLimit: (integer) minimum characters user have to type before invoking the autocomplete (default: 1)
  maxCharLimit: (integer) maximum characters user can type while invoking the autocomplete (default: null (unlimited))
  maxResults: (integer) maximum number of results to return (default: null (unlimited))
  delay: (integer) delay before autocomplete starts (default: 0)
  disabled: (boolean) whether autocomplete disabled on the field (default: false)
  forceSelect: (boolean) If set to true, field will be always filled with best matching result, without leaving the custom input.
               Better to enable this option, if you want autocomplete field to behave similar to a HTML select field. (Check Example 2 in the demo)
               (default: false)
  typeAhead: (boolean) If set to true, it will offer the best matching result in grey within the field; that can be auto-completed by pressing the right arrow-key or enter.
             This is similar to behaviour in Google Instant Search's query field (Check Example 3 in the demo) 
             (default: false)
  source:  (string/array) you can supply an array with items or a string containing a URL to fetch items for the source
           this is optional if you prefer to have your own filter method 
  filter: (function) define a custom function that would return matching items to the entered text (this will override the default filtering algorithm)
          should return an array or a Deferred object (ajax call)
          parameters available: term, source 
  resultFormatter: (function) the function you supply here will be called to format the output of an individual result.
                   should return a string
                   parameters available: result 
  resultsContainer: (selector) to which element(s) the result should be appended.
  resultElement: (selector) references to the result elements collection (e.g. li, div.result) 

  Events:
  keyIn: fires when user types into the field (parameters: query)
  resultsReady: fires when the filter function returns (parameters: results)
  showResults: fires when results are shown (parameters: results)
  noResults: fires when filter returns an empty array
  itemSelect: fires when user selects an item from the result list (paramters: item)
  itemFocus: fires when user highlights an item with mouse or arrow keys (paramters: item)
  itemUnfocus: fires when user moves out from an highlighted item (paramters: item)
  lostFocus: fires when autocomplete field loses focus by user clicking outside of the field or focusing on another field. Also, this event is fired when a value is selected

 })
*/

(function($){
  $.fn.smartAutoComplete = function(){    

    if(arguments.length < 1){
      // get the smart autocomplete object of the first element and return 
      var first_element = this[0];
      return $(first_element).data("smart-autocomplete")
    }

    var default_filter_matcher = function(term, source, context){
                                    var matcher = new RegExp(term.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i" );

                                    return $.grep(source, function(value) {
                                      return matcher.test( value );
                                    });

                                 }

    var default_options = {
                            minCharLimit: 1, 
                            maxCharLimit: null, 
                            maxResults: null,
                            delay: 0,
                            disabled: false,
                            forceSelect: false,
                            typeAhead: false,
                            resultElement: "li",
                            resultFormatter: function(r){ return ("<li>" + r + "</li>"); },
                            filter: function(term, source){    
                              var context = this;
                              var options = $(context).data('smart-autocomplete');
                              

                              //when source is an array
                              if($.type(source) === "array") {
                                // directly map
                                var results = default_filter_matcher(term, source, context);
                                return results; 
                              }
                              //when source is a string
                              else if($.type(source) === "string"){
                                // treat the string as a URL endpoint
                                // pass the query as 'term'
                                
                                return $.Deferred(function(dfd){ 
                                  $.ajax({
                                    url: source,
                                    data: {"term": term},
                                    dataType: "json"
                                  }).success( function(data){
                                    dfd.resolve( default_filter_matcher(term, data, context) );          
                                  }); 
                                }).promise();
                                
                              }

                            },

                            alignResultsContainer: false,

                            clearResults: function(){
                              //remove type ahead field
                              var type_ahead_field = $(this.context).prev(".smart_autocomplete_type_ahead_field");
                              $(this.context).css({ background: type_ahead_field.css("background") });
                              type_ahead_field.remove();
                              
                              //clear results div
                              $(this.resultsContainer).html("");
                            },

                            setCurrentSelectionToContext: function(){
                                if(this.rawResults.length > 0 && this.currentSelection >= 0)
                                  $(this.context).val(this.rawResults[(this.currentSelection)]);
                            },

                            setItemSelected: function(val){
                              this.itemSelected = val;
                            },

                            autocompleteFocused: false,

                            setAutocompleteFocused: function(val){
                              this.autocompleteFocused = val;
                            }

    };

    //define the default events
    $.event.special.keyIn = {
      setup: function(){ return false; }, 

      _default: function(ev){
        var context = ev.target;
        var options = $(context).data("smart-autocomplete");
        var source = options.source || null;
        var filter = options.filter;
        var maxChars = (options.maxCharLimit > 0 ?  options.maxCharLimit : Number.POSITIVE_INFINITY)

        //event specific data
        var query = ev.smartAutocompleteData.query;

        if(options.disabled || (query.length > maxChars)){
          return false;
        }

        //set item selected property
        options.setItemSelected(false);

        //set autocomplete focused
        options.setAutocompleteFocused(true);

        //call the filter function with delay
        setTimeout(function(){
          $.when( filter.apply(options, [query, options.source]) ).done(function( results ){
            //do the trimming
            var trimmed_results = (options.maxResults > 0 ? results.splice(0, options.maxResults) : results);

            $(context).trigger('resultsReady', [trimmed_results]);
          });
        }, options.delay);
      }
    };

    $.event.special.resultsReady = {
      setup: function(){ return false },

      _default: function(ev){
        var context = ev.target;
        var options = $(context).data("smart-autocomplete");

        //event specific data
        var results = ev.smartAutocompleteData.results;

        //exit if smart complete is disabled
        if(options.disabled)
          return false;

        //clear all previous results 
        $(context).smartAutoComplete().clearResults();

        //save the raw results
        options.rawResults = results;

        //fire the no match event and exit if no matching results
        if(results.length < 1){
          $(context).trigger('noResults');
          return false
        }

        //call the results formatter function
        var formatted_results = $.map(results, function(result){
        return options.resultFormatter.apply(options, [result]);
        });

        var formatted_results_html = formatted_results.join("");

        //append the results to the container
        if(options.resultsContainer)
          $(options.resultsContainer).append(formatted_results_html);

        //trigger results ready event
        $(context).trigger('showResults', [results]);
      }             
    };

    $.event.special.showResults = {
      setup: function(){ return false },

      _default: function(ev){    
        var context = ev.target;
        var options = $(context).data("smart-autocomplete");
        var results_container = $(options.resultsContainer);

        //event specific data
        var raw_results = ev.smartAutocompleteData.results; 

        //type ahead
        if(options.typeAhead && (raw_results[0].substr(0, $(context).val().length) == $(context).val()) ){
          var suggestion = raw_results[0]; //options.typeAheadExtractor($(context).val(), raw_results[0]); 
          
          //add new typeAhead field
          $(context).before("<input class='smart_autocomplete_type_ahead_field' type='text' autocomplete='off' disabled='disabled' value='" + suggestion + "'/>");

          $(context).css({
            position: "relative",
            zIndex: 2,
            background: 'transparent'
          });

          var typeAheadField = $(context).prev("input");
          typeAheadField.css({
            position: "absolute",
            zIndex: 1,
            overflow: 'hidden',
            background: $(context).css("background"),
            borderColor: 'transparent',
            width: $(context).width(),
            color: 'silver'
          });

          //trigger item over for first item
          options.currentSelection = 0;
          if(results_container)
            $(context).trigger('itemFocus', results_container.children()[options.currentSelection]);
        }

        //show the results container after aligning it with the field 
        if(results_container){
          if(options.alignResultsContainer){
            results_container.css({ 
                  position: "absolute",
                  top: function(){ return $(context).offset().top + $(context).height(); }, 
                  left: function(){ return $(context).offset().left; }, 
                  width: function(){ return $(context).width(); }, 
                  zIndex: 1000
            })
          }  
          results_container.show();
        }

      }
    };

    $.event.special.noResults = {
      setup: function(){ return false },

      _default: function(ev){    
        var context = ev.target;
        var options = $(context).data("smart-autocomplete");
        var result_container = $(options.resultsContainer);

        if(result_container){
         //clear previous results
         options.clearResults(); 
        }

      }
    };

    $.event.special.itemSelect = { 
      setup: function(){ return false },

      _default: function(ev){    
        var context = ev.target;
        var options = $(context).data("smart-autocomplete");

        //event specific data
        var selected_item = ev.smartAutocompleteData.item;

        //get the text from selected item
        var selected_value = $(selected_item).text() || $(selected_item).val();
        //set it as the value of the autocomplete field
        $(context).val(selected_value); 

        //set item selected property
        options.setItemSelected(true);

        //set number of current chars in field 
        options.originalCharCount = $(context).val().length;
        
        //trigger lost focus
        $(context).trigger('lostFocus');
      }
    };

    $.event.special.itemFocus = {
      setup: function(){ return false },

      _default: function(ev){    

        //event specific data
        var item = ev.smartAutocompleteData.item;

        $(item).addClass("smart_autocomplete_highlight");
      }
    };

    $.event.special.itemUnfocus = { 
      setup: function(){ return false },

      _default: function(ev){    

        //event specific data
        var item = ev.smartAutocompleteData.item;

        $(item).removeClass("smart_autocomplete_highlight");
      }
    }

    $.event.special.lostFocus = {
      setup: function(){ return false },

      _default: function(ev){    
        var context = ev.target;
        var options = $(context).data("smart-autocomplete");

        //if force select is selected and no item is selected, clear currently entered text 
        if(options.forceSelect && !options.itemSelected)
          $(options.context).val("");

        //unset autocomplete focused
        options.setAutocompleteFocused(false);

        //clear results
        options.clearResults(); 

        //hide the results container
        if(options.resultsContainer)
          $(options.resultsContainer).hide();

        //set current selection to null
        options.currentSelection = null;
      }
    };

    var passed_options = arguments[0];

    return this.each(function(i) { 
      //set the options
      var options = $.extend(default_options, $(this).data("smart-autocomplete"), passed_options);
      //set the context
      options['context'] = this;

      //if a result container is not defined
      if($.type(options.resultsContainer) === 'undefined' ){
        //define the default result container if it is already not defined
        var default_container = $("<ul class='smart_autocomplete_container' style='display:none'></ul>");
        default_container.appendTo("body");

        options.resultsContainer = default_container;
        options.alignResultsContainer = true;
      }

      $(this).data("smart-autocomplete", options);

      // bind user events
      $(this).keyup(function(ev){
        //get the options
        var options = $(this).data("smart-autocomplete");

        //up arrow
        if(ev.keyCode == '38'){

          if(options.resultsContainer){
            var current_selection = options.currentSelection || 0;
            var result_suggestions = $(options.resultsContainer).children();

            if(current_selection >= 0)
              $(options.context).trigger('itemUnfocus', result_suggestions[current_selection] );

            if(--current_selection <= 0)
              current_selection = 0;

            options['currentSelection'] = current_selection;

            $(options.context).trigger('itemFocus', [ result_suggestions[current_selection] ] );
          }
        }

        //down arrow
        else if(ev.keyCode == '40'){

          if(options.resultsContainer && options.resultsContainer.is(':visible')){
            var current_selection = options.currentSelection;
            var result_suggestions = $(options.resultsContainer).children();

            if(current_selection >= 0)
              $(options.context).trigger('itemUnfocus', result_suggestions[current_selection] );

            if(isNaN(current_selection) || null == current_selection || (++current_selection >= result_suggestions.length) )
              current_selection = 0;

            options['currentSelection'] = current_selection;

            $(options.context).trigger('itemFocus', [ result_suggestions[current_selection] ] );
          }
          //trigger keyIn event on down key
          else {
            $(options.context).trigger('keyIn', [$(this).val()]); 
          }
          
        }

        //right arrow & enter key
        else if(ev.keyCode == '39' || ev.keyCode == '13'){
          var type_ahead_field = $(options.context).prev('.smart_autocomplete_type_ahead_field');
          if(options.resultsContainer && $(options.resultsContainer).is(':visible')){
            var current_selection = options.currentSelection;
            var result_suggestions = $(options.resultsContainer).children();

            $(options.context).trigger('itemSelect', [ result_suggestions[current_selection] ] );
          }
          else if(options.typeAhead && type_ahead_field.is(':visible'))
            $(options.context).trigger('itemSelect', [ type_ahead_field ] );

          return false;
        }

        else {
         var current_char_count = $(options.context).val().length;
         //check whether the string has modified
         if(options.originalCharCount == current_char_count)
           return;

         //check minimum and maximum number of characters are typed
         if(current_char_count >= options.minCharLimit){
          $(options.context).trigger('keyIn', [$(this).val()]); 
         }
         else{
            if(options.autocompleteFocused){ 
              options.currentSelection = null;
              $(options.context).trigger('lostFocus');
            }
         }

        }
      });

      $(this).focus(function(){
        //if the field is in a form capture the return key event 
        $(this).closest("form").bind("keydown.block_for_smart_autocomplete", function(ev){
          var type_ahead_field = $(options.context).prev('.smart_autocomplete_type_ahead_field');
          if(ev.keyCode == '13'){
            if(options.resultsContainer && $(options.resultsContainer).is(':visible')){
              var current_selection = options.currentSelection;
              var result_suggestions = $(options.resultsContainer).children();

              $(options.context).trigger('itemSelect', [ result_suggestions[current_selection] ] );
              return false;
            }
            else if(options.typeAhead && type_ahead_field.is(':visible') ){
              $(options.context).trigger('itemSelect', [ type_ahead_field ] );
              return false;
            }
          }
        });

        if(options.forceSelect){
          $(this).select(); 
        }
      });

      //check for loosing focus on smart complete field and results container
      //$(this).blur(function(ev){
      $(document).bind("focusin click", function(ev){
        if(options.autocompleteFocused){ 
          var elemIsParent = $.contains(options.resultsContainer[0], ev.target);
          if(ev.target == options.resultsContainer[0] || ev.target == options.context || elemIsParent) return

          $(options.context).closest("form").unbind("keydown.block_for_smart_autocomplete");
          $(options.context).trigger('lostFocus');
        }
      });

      //bind events to results container
      $(options.resultsContainer).delegate(options.resultElement, 'mouseenter.smart_autocomplete', function(){
        var current_selection = options.currentSelection || 0;
        var result_suggestions = $(options.resultsContainer).children();

        options['currentSelection'] = $(this).prevAll().length;

        $(options.context).trigger('itemFocus', [this] );
          
      });

      $(options.resultsContainer).delegate(options.resultElement, 'mouseleave.smart_autocomplete', function(){
        $(options.context).trigger('itemUnfocus', [this] );
      });

      $(options.resultsContainer).delegate(options.resultElement, 'click.smart_autocomplete', function(){
        $(options.context).trigger('itemSelect', [this]);
        return false
      });

      //bind plugin specific events
      $(this).bind({
        keyIn: function(ev, query){ ev.smartAutocompleteData  = {'query': query }; },
        resultsReady: function(ev, results){ ev.smartAutocompleteData  = {'results': results }; }, 
        showResults: function(ev, results){ ev.smartAutocompleteData = {'results': results } },
        noResults: function(){},
        lostFocus: function(){},
        itemSelect: function(ev, item){ ev.smartAutocompleteData = {'item': item }; },
        itemFocus: function(ev, item){ ev.smartAutocompleteData = {'item': item }; },
        itemUnfocus: function(ev, item){ ev.smartAutocompleteData = {'item': item }; }
      });
    });
      
  }
})(jQuery);

define("thirdparty/smart-auto-complete/jquery.smart_autocomplete", function(){});

/*
 * jsTree 1.0-rc3
 * http://jstree.com/
 *
 * Copyright (c) 2010 Ivan Bozhanov (vakata.com)
 *
 * Licensed same as jquery - under the terms of either the MIT License or the GPL Version 2 License
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * $Date: 2011-02-09 01:17:14 +0200 (ср, 09 февр 2011) $
 * $Revision: 236 $
 */

/*jslint browser: true, onevar: true, undef: true, bitwise: true, strict: true */
/*global window : false, clearInterval: false, clearTimeout: false, document: false, setInterval: false, setTimeout: false, jQuery: false, navigator: false, XSLTProcessor: false, DOMParser: false, XMLSerializer: false*/

"use strict";

// top wrapper to prevent multiple inclusion (is this OK?)
(function () { if(jQuery && jQuery.jstree) { return; }
	var is_ie6 = false, is_ie7 = false, is_ff2 = false;

/* 
 * jsTree core
 */
(function ($) {
	// Common functions not related to jsTree 
	// decided to move them to a `vakata` "namespace"
	$.vakata = {};
	// CSS related functions
	$.vakata.css = {
		get_css : function(rule_name, delete_flag, sheet) {
			rule_name = rule_name.toLowerCase();
			var css_rules = sheet.cssRules || sheet.rules,
				j = 0;
			do {
				if(css_rules.length && j > css_rules.length + 5) { return false; }
				if(css_rules[j].selectorText && css_rules[j].selectorText.toLowerCase() == rule_name) {
					if(delete_flag === true) {
						if(sheet.removeRule) { sheet.removeRule(j); }
						if(sheet.deleteRule) { sheet.deleteRule(j); }
						return true;
					}
					else { return css_rules[j]; }
				}
			}
			while (css_rules[++j]);
			return false;
		},
		add_css : function(rule_name, sheet) {
			if($.jstree.css.get_css(rule_name, false, sheet)) { return false; }
			if(sheet.insertRule) { sheet.insertRule(rule_name + ' { }', 0); } else { sheet.addRule(rule_name, null, 0); }
			return $.vakata.css.get_css(rule_name);
		},
		remove_css : function(rule_name, sheet) { 
			return $.vakata.css.get_css(rule_name, true, sheet); 
		},
		add_sheet : function(opts) {
			var tmp = false, is_new = true;
			if(opts.str) {
				if(opts.title) { tmp = $("style[id='" + opts.title + "-stylesheet']")[0]; }
				if(tmp) { is_new = false; }
				else {
					tmp = document.createElement("style");
					tmp.setAttribute('type',"text/css");
					if(opts.title) { tmp.setAttribute("id", opts.title + "-stylesheet"); }
				}
				if(tmp.styleSheet) {
					if(is_new) { 
						document.getElementsByTagName("head")[0].appendChild(tmp); 
						tmp.styleSheet.cssText = opts.str; 
					}
					else {
						tmp.styleSheet.cssText = tmp.styleSheet.cssText + " " + opts.str; 
					}
				}
				else {
					tmp.appendChild(document.createTextNode(opts.str));
					document.getElementsByTagName("head")[0].appendChild(tmp);
				}
				return tmp.sheet || tmp.styleSheet;
			}
			if(opts.url) {
				if(document.createStyleSheet) {
					try { tmp = document.createStyleSheet(opts.url); } catch (e) { }
				}
				else {
					tmp			= document.createElement('link');
					tmp.rel		= 'stylesheet';
					tmp.type	= 'text/css';
					tmp.media	= "all";
					tmp.href	= opts.url;
					document.getElementsByTagName("head")[0].appendChild(tmp);
					return tmp.styleSheet;
				}
			}
		}
	};

	// private variables 
	var instances = [],			// instance array (used by $.jstree.reference/create/focused)
		focused_instance = -1,	// the index in the instance array of the currently focused instance
		plugins = {},			// list of included plugins
		prepared_move = {};		// for the move_node function

	// jQuery plugin wrapper (thanks to jquery UI widget function)
	$.fn.jstree = function (settings) {
		var isMethodCall = (typeof settings == 'string'), // is this a method call like $().jstree("open_node")
			args = Array.prototype.slice.call(arguments, 1), 
			returnValue = this;

		// if a method call execute the method on all selected instances
		if(isMethodCall) {
			if(settings.substring(0, 1) == '_') { return returnValue; }
			this.each(function() {
				var instance = instances[$.data(this, "jstree_instance_id")],
					methodValue = (instance && $.isFunction(instance[settings])) ? instance[settings].apply(instance, args) : instance;
					if(typeof methodValue !== "undefined" && (settings.indexOf("is_") === 0 || (methodValue !== true && methodValue !== false))) { returnValue = methodValue; return false; }
			});
		}
		else {
			this.each(function() {
				// extend settings and allow for multiple hashes and $.data
				var instance_id = $.data(this, "jstree_instance_id"),
					a = [],
					b = settings ? $.extend({}, true, settings) : {},
					c = $(this), 
					s = false, 
					t = [];
				a = a.concat(args);
				if(c.data("jstree")) { a.push(c.data("jstree")); }
				b = a.length ? $.extend.apply(null, [true, b].concat(a)) : b;

				// if an instance already exists, destroy it first
				if(typeof instance_id !== "undefined" && instances[instance_id]) { instances[instance_id].destroy(); }
				// push a new empty object to the instances array
				instance_id = parseInt(instances.push({}),10) - 1;
				// store the jstree instance id to the container element
				$.data(this, "jstree_instance_id", instance_id);
				// clean up all plugins
				b.plugins = $.isArray(b.plugins) ? b.plugins : $.jstree.defaults.plugins.slice();
				b.plugins.unshift("core");
				// only unique plugins
				b.plugins = b.plugins.sort().join(",,").replace(/(,|^)([^,]+)(,,\2)+(,|$)/g,"$1$2$4").replace(/,,+/g,",").replace(/,$/,"").split(",");

				// extend defaults with passed data
				s = $.extend(true, {}, $.jstree.defaults, b);
				s.plugins = b.plugins;
				$.each(plugins, function (i, val) { 
					if($.inArray(i, s.plugins) === -1) { s[i] = null; delete s[i]; } 
					else { t.push(i); }
				});
				s.plugins = t;

				// push the new object to the instances array (at the same time set the default classes to the container) and init
				instances[instance_id] = new $.jstree._instance(instance_id, $(this).addClass("jstree jstree-" + instance_id), s); 
				// init all activated plugins for this instance
				$.each(instances[instance_id]._get_settings().plugins, function (i, val) { instances[instance_id].data[val] = {}; });
				$.each(instances[instance_id]._get_settings().plugins, function (i, val) { if(plugins[val]) { plugins[val].__init.apply(instances[instance_id]); } });
				// initialize the instance
				setTimeout(function() { if(instances[instance_id]) { instances[instance_id].init(); } }, 0);
			});
		}
		// return the jquery selection (or if it was a method call that returned a value - the returned value)
		return returnValue;
	};
	// object to store exposed functions and objects
	$.jstree = {
		defaults : {
			plugins : []
		},
		_focused : function () { return instances[focused_instance] || null; },
		_reference : function (needle) { 
			// get by instance id
			if(instances[needle]) { return instances[needle]; }
			// get by DOM (if still no luck - return null
			var o = $(needle); 
			if(!o.length && typeof needle === "string") { o = $("#" + needle); }
			if(!o.length) { return null; }
			return instances[o.closest(".jstree").data("jstree_instance_id")] || null; 
		},
		_instance : function (index, container, settings) { 
			// for plugins to store data in
			this.data = { core : {} };
			this.get_settings	= function () { return $.extend(true, {}, settings); };
			this._get_settings	= function () { return settings; };
			this.get_index		= function () { return index; };
			this.get_container	= function () { return container; };
			this.get_container_ul = function () { return container.children("ul:eq(0)"); };
			this._set_settings	= function (s) { 
				settings = $.extend(true, {}, settings, s);
			};
		},
		_fn : { },
		plugin : function (pname, pdata) {
			pdata = $.extend({}, {
				__init		: $.noop, 
				__destroy	: $.noop,
				_fn			: {},
				defaults	: false
			}, pdata);
			plugins[pname] = pdata;

			$.jstree.defaults[pname] = pdata.defaults;
			$.each(pdata._fn, function (i, val) {
				val.plugin		= pname;
				val.old			= $.jstree._fn[i];
				$.jstree._fn[i] = function () {
					var rslt,
						func = val,
						args = Array.prototype.slice.call(arguments),
						evnt = new $.Event("before.jstree"),
						rlbk = false;

					if(this.data.core.locked === true && i !== "unlock" && i !== "is_locked") { return; }

					// Check if function belongs to the included plugins of this instance
					do {
						if(func && func.plugin && $.inArray(func.plugin, this._get_settings().plugins) !== -1) { break; }
						func = func.old;
					} while(func);
					if(!func) { return; }

					// context and function to trigger events, then finally call the function
					if(i.indexOf("_") === 0) {
						rslt = func.apply(this, args);
					}
					else {
						rslt = this.get_container().triggerHandler(evnt, { "func" : i, "inst" : this, "args" : args, "plugin" : func.plugin });
						if(rslt === false) { return; }
						if(typeof rslt !== "undefined") { args = rslt; }

						rslt = func.apply(
							$.extend({}, this, { 
								__callback : function (data) { 
									this.get_container().triggerHandler( i + '.jstree', { "inst" : this, "args" : args, "rslt" : data, "rlbk" : rlbk });
								},
								__rollback : function () { 
									rlbk = this.get_rollback();
									return rlbk;
								},
								__call_old : function (replace_arguments) {
									return func.old.apply(this, (replace_arguments ? Array.prototype.slice.call(arguments, 1) : args ) );
								}
							}), args);
					}

					// return the result
					return rslt;
				};
				$.jstree._fn[i].old = val.old;
				$.jstree._fn[i].plugin = pname;
			});
		},
		rollback : function (rb) {
			if(rb) {
				if(!$.isArray(rb)) { rb = [ rb ]; }
				$.each(rb, function (i, val) {
					instances[val.i].set_rollback(val.h, val.d);
				});
			}
		}
	};
	// set the prototype for all instances
	$.jstree._fn = $.jstree._instance.prototype = {};

	// load the css when DOM is ready
	$(function() {
		// code is copied from jQuery ($.browser is deprecated + there is a bug in IE)
		var u = navigator.userAgent.toLowerCase(),
			v = (u.match( /.+?(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1],
			css_string = '' + 
				'.jstree ul, .jstree li { display:block; margin:0 0 0 0; padding:0 0 0 0; list-style-type:none; } ' + 
				'.jstree li { display:block; min-height:18px; line-height:18px; white-space:nowrap; margin-left:18px; min-width:18px; } ' + 
				'.jstree-rtl li { margin-left:0; margin-right:18px; } ' + 
				'.jstree > ul > li { margin-left:0px; } ' + 
				'.jstree-rtl > ul > li { margin-right:0px; } ' + 
				'.jstree ins { display:inline-block; text-decoration:none; width:18px; height:18px; margin:0 0 0 0; padding:0; } ' + 
				'.jstree a { display:inline-block; line-height:16px; height:16px; color:black; white-space:nowrap; text-decoration:none; padding:1px 2px; margin:0; } ' + 
				'.jstree a:focus { outline: none; } ' + 
				'.jstree a > ins { height:16px; width:16px; } ' + 
				'.jstree a > .jstree-icon { margin-right:3px; } ' + 
				'.jstree-rtl a > .jstree-icon { margin-left:3px; margin-right:0; } ' + 
				'li.jstree-open > ul { display:block; } ' + 
				'li.jstree-closed > ul { display:none; } ';
		// Correct IE 6 (does not support the > CSS selector)
		if(/msie/.test(u) && parseInt(v, 10) == 6) { 
			is_ie6 = true;

			// fix image flicker and lack of caching
			try {
				document.execCommand("BackgroundImageCache", false, true);
			} catch (err) { }

			css_string += '' + 
				'.jstree li { height:18px; margin-left:0; margin-right:0; } ' + 
				'.jstree li li { margin-left:18px; } ' + 
				'.jstree-rtl li li { margin-left:0px; margin-right:18px; } ' + 
				'li.jstree-open ul { display:block; } ' + 
				'li.jstree-closed ul { display:none !important; } ' + 
				'.jstree li a { display:inline; border-width:0 !important; padding:0px 2px !important; } ' + 
				'.jstree li a ins { height:16px; width:16px; margin-right:3px; } ' + 
				'.jstree-rtl li a ins { margin-right:0px; margin-left:3px; } ';
		}
		// Correct IE 7 (shifts anchor nodes onhover)
		if(/msie/.test(u) && parseInt(v, 10) == 7) { 
			is_ie7 = true;
			css_string += '.jstree li a { border-width:0 !important; padding:0px 2px !important; } ';
		}
		// correct ff2 lack of display:inline-block
		if(!/compatible/.test(u) && /mozilla/.test(u) && parseFloat(v, 10) < 1.9) {
			is_ff2 = true;
			css_string += '' + 
				'.jstree ins { display:-moz-inline-box; } ' + 
				'.jstree li { line-height:12px; } ' + // WHY??
				'.jstree a { display:-moz-inline-box; } ' + 
				'.jstree .jstree-no-icons .jstree-checkbox { display:-moz-inline-stack !important; } ';
				/* this shouldn't be here as it is theme specific */
		}
		// the default stylesheet
		$.vakata.css.add_sheet({ str : css_string, title : "jstree" });
	});

	// core functions (open, close, create, update, delete)
	$.jstree.plugin("core", {
		__init : function () {
			this.data.core.locked = false;
			this.data.core.to_open = this.get_settings().core.initially_open;
			this.data.core.to_load = this.get_settings().core.initially_load;
		},
		defaults : { 
			html_titles	: false,
			animation	: 500,
			initially_open : [],
			initially_load : [],
			open_parents : true,
			notify_plugins : true,
			rtl			: false,
			load_open	: false,
			strings		: {
				loading		: "Loading ...",
				new_node	: "New node",
				multiple_selection : "Multiple selection"
			}
		},
		_fn : { 
			init	: function () { 
				this.set_focus(); 
				if(this._get_settings().core.rtl) {
					this.get_container().addClass("jstree-rtl").css("direction", "rtl");
				}
				this.get_container().html("<ul><li class='jstree-last jstree-leaf'><ins>&#160;</ins><a class='jstree-loading' href='#'><ins class='jstree-icon'>&#160;</ins>" + this._get_string("loading") + "</a></li></ul>");
				this.data.core.li_height = this.get_container_ul().find("li.jstree-closed, li.jstree-leaf").eq(0).height() || 18;

				this.get_container()
					.delegate("li > ins", "click.jstree", $.proxy(function (event) {
							var trgt = $(event.target);
							// if(trgt.is("ins") && event.pageY - trgt.offset().top < this.data.core.li_height) { this.toggle_node(trgt); }
							this.toggle_node(trgt);
						}, this))
					.bind("mousedown.jstree", $.proxy(function () { 
							this.set_focus(); // This used to be setTimeout(set_focus,0) - why?
						}, this))
					.bind("dblclick.jstree", function (event) { 
						var sel;
						if(document.selection && document.selection.empty) { document.selection.empty(); }
						else {
							if(window.getSelection) {
								sel = window.getSelection();
								try { 
									sel.removeAllRanges();
									sel.collapse();
								} catch (err) { }
							}
						}
					});
				if(this._get_settings().core.notify_plugins) {
					this.get_container()
						.bind("load_node.jstree", $.proxy(function (e, data) { 
								var o = this._get_node(data.rslt.obj),
									t = this;
								if(o === -1) { o = this.get_container_ul(); }
								if(!o.length) { return; }
								o.find("li").each(function () {
									var th = $(this);
									if(th.data("jstree")) {
										$.each(th.data("jstree"), function (plugin, values) {
											if(t.data[plugin] && $.isFunction(t["_" + plugin + "_notify"])) {
												t["_" + plugin + "_notify"].call(t, th, values);
											}
										});
									}
								});
							}, this));
				}
				if(this._get_settings().core.load_open) {
					this.get_container()
						.bind("load_node.jstree", $.proxy(function (e, data) { 
								var o = this._get_node(data.rslt.obj),
									t = this;
								if(o === -1) { o = this.get_container_ul(); }
								if(!o.length) { return; }
								o.find("li.jstree-open:not(:has(ul))").each(function () {
									t.load_node(this, $.noop, $.noop);
								});
							}, this));
				}
				this.__callback();
				this.load_node(-1, function () { this.loaded(); this.reload_nodes(); });
			},
			destroy	: function () { 
				var i,
					n = this.get_index(),
					s = this._get_settings(),
					_this = this;

				$.each(s.plugins, function (i, val) {
					try { plugins[val].__destroy.apply(_this); } catch(err) { }
				});
				this.__callback();
				// set focus to another instance if this one is focused
				if(this.is_focused()) { 
					for(i in instances) { 
						if(instances.hasOwnProperty(i) && i != n) { 
							instances[i].set_focus(); 
							break; 
						} 
					}
				}
				// if no other instance found
				if(n === focused_instance) { focused_instance = -1; }
				// remove all traces of jstree in the DOM (only the ones set using jstree*) and cleans all events
				this.get_container()
					.unbind(".jstree")
					.undelegate(".jstree")
					.removeData("jstree_instance_id")
					.find("[class^='jstree']")
						.andSelf()
						.attr("class", function () { return this.className.replace(/jstree[^ ]*|$/ig,''); });
				$(document)
					.unbind(".jstree-" + n)
					.undelegate(".jstree-" + n);
				// remove the actual data
				instances[n] = null;
				delete instances[n];
			},

			_core_notify : function (n, data) {
				if(data.opened) {
					this.open_node(n, false, true);
				}
			},

			lock : function () {
				this.data.core.locked = true;
				this.get_container().children("ul").addClass("jstree-locked").css("opacity","0.7");
				this.__callback({});
			},
			unlock : function () {
				this.data.core.locked = false;
				this.get_container().children("ul").removeClass("jstree-locked").css("opacity","1");
				this.__callback({});
			},
			is_locked : function () { return this.data.core.locked; },
			save_opened : function () {
				var _this = this;
				this.data.core.to_open = [];
				this.get_container_ul().find("li.jstree-open").each(function () { 
					if(this.id) { _this.data.core.to_open.push("#" + this.id.toString().replace(/^#/,"").replace(/\\\//g,"/").replace(/\//g,"\\\/").replace(/\\\./g,".").replace(/\./g,"\\.").replace(/\:/g,"\\:")); }
				});
				this.__callback(_this.data.core.to_open);
			},
			save_loaded : function () { },
			reload_nodes : function (is_callback) {
				var _this = this,
					done = true,
					current = [],
					remaining = [];
				if(!is_callback) { 
					this.data.core.reopen = false; 
					this.data.core.refreshing = true; 
					this.data.core.to_open = $.map($.makeArray(this.data.core.to_open), function (n) { return "#" + n.toString().replace(/^#/,"").replace(/\\\//g,"/").replace(/\//g,"\\\/").replace(/\\\./g,".").replace(/\./g,"\\.").replace(/\:/g,"\\:"); });
					this.data.core.to_load = $.map($.makeArray(this.data.core.to_load), function (n) { return "#" + n.toString().replace(/^#/,"").replace(/\\\//g,"/").replace(/\//g,"\\\/").replace(/\\\./g,".").replace(/\./g,"\\.").replace(/\:/g,"\\:"); });
					if(this.data.core.to_open.length) {
						this.data.core.to_load = this.data.core.to_load.concat(this.data.core.to_open);
					}
				}
				if(this.data.core.to_load.length) {
					$.each(this.data.core.to_load, function (i, val) {
						if(val == "#") { return true; }
						if($(val).length) { current.push(val); }
						else { remaining.push(val); }
					});
					if(current.length) {
						this.data.core.to_load = remaining;
						$.each(current, function (i, val) { 
							if(!_this._is_loaded(val)) {
								_this.load_node(val, function () { _this.reload_nodes(true); }, function () { _this.reload_nodes(true); });
								done = false;
							}
						});
					}
				}
				if(this.data.core.to_open.length) {
					$.each(this.data.core.to_open, function (i, val) {
						_this.open_node(val, false, true); 
					});
				}
				if(done) { 
					// TODO: find a more elegant approach to syncronizing returning requests
					if(this.data.core.reopen) { clearTimeout(this.data.core.reopen); }
					this.data.core.reopen = setTimeout(function () { _this.__callback({}, _this); }, 50);
					this.data.core.refreshing = false;
					this.reopen();
				}
			},
			reopen : function () {
				var _this = this;
				if(this.data.core.to_open.length) {
					$.each(this.data.core.to_open, function (i, val) {
						_this.open_node(val, false, true); 
					});
				}
				this.__callback({});
			},
			refresh : function (obj) {
				var _this = this;
				this.save_opened();
				if(!obj) { obj = -1; }
				obj = this._get_node(obj);
				if(!obj) { obj = -1; }
				if(obj !== -1) { obj.children("UL").remove(); }
				else { this.get_container_ul().empty(); }
				this.load_node(obj, function () { _this.__callback({ "obj" : obj}); _this.reload_nodes(); });
			},
			// Dummy function to fire after the first load (so that there is a jstree.loaded event)
			loaded	: function () { 
				this.__callback(); 
			},
			// deal with focus
			set_focus	: function () { 
				if(this.is_focused()) { return; }
				var f = $.jstree._focused();
				if(f) { f.unset_focus(); }

				this.get_container().addClass("jstree-focused"); 
				focused_instance = this.get_index(); 
				this.__callback();
			},
			is_focused	: function () { 
				return focused_instance == this.get_index(); 
			},
			unset_focus	: function () {
				if(this.is_focused()) {
					this.get_container().removeClass("jstree-focused"); 
					focused_instance = -1; 
				}
				this.__callback();
			},

			// traverse
			_get_node		: function (obj) { 
				var $obj = $(obj, this.get_container()); 
				if($obj.is(".jstree") || obj == -1) { return -1; } 
				$obj = $obj.closest("li", this.get_container()); 
				return $obj.length ? $obj : false; 
			},
			_get_next		: function (obj, strict) {
				obj = this._get_node(obj);
				if(obj === -1) { return this.get_container().find("> ul > li:first-child"); }
				if(!obj.length) { return false; }
				if(strict) { return (obj.nextAll("li").size() > 0) ? obj.nextAll("li:eq(0)") : false; }

				if(obj.hasClass("jstree-open")) { return obj.find("li:eq(0)"); }
				else if(obj.nextAll("li").size() > 0) { return obj.nextAll("li:eq(0)"); }
				else { return obj.parentsUntil(".jstree","li").next("li").eq(0); }
			},
			_get_prev		: function (obj, strict) {
				obj = this._get_node(obj);
				if(obj === -1) { return this.get_container().find("> ul > li:last-child"); }
				if(!obj.length) { return false; }
				if(strict) { return (obj.prevAll("li").length > 0) ? obj.prevAll("li:eq(0)") : false; }

				if(obj.prev("li").length) {
					obj = obj.prev("li").eq(0);
					while(obj.hasClass("jstree-open")) { obj = obj.children("ul:eq(0)").children("li:last"); }
					return obj;
				}
				else { var o = obj.parentsUntil(".jstree","li:eq(0)"); return o.length ? o : false; }
			},
			_get_parent		: function (obj) {
				obj = this._get_node(obj);
				if(obj == -1 || !obj.length) { return false; }
				var o = obj.parentsUntil(".jstree", "li:eq(0)");
				return o.length ? o : -1;
			},
			_get_children	: function (obj) {
				obj = this._get_node(obj);
				if(obj === -1) { return this.get_container().children("ul:eq(0)").children("li"); }
				if(!obj.length) { return false; }
				return obj.children("ul:eq(0)").children("li");
			},
			get_path		: function (obj, id_mode) {
				var p = [],
					_this = this;
				obj = this._get_node(obj);
				if(obj === -1 || !obj || !obj.length) { return false; }
				obj.parentsUntil(".jstree", "li").each(function () {
					p.push( id_mode ? this.id : _this.get_text(this) );
				});
				p.reverse();
				p.push( id_mode ? obj.attr("id") : this.get_text(obj) );
				return p;
			},

			// string functions
			_get_string : function (key) {
				return this._get_settings().core.strings[key] || key;
			},

			is_open		: function (obj) { obj = this._get_node(obj); return obj && obj !== -1 && obj.hasClass("jstree-open"); },
			is_closed	: function (obj) { obj = this._get_node(obj); return obj && obj !== -1 && obj.hasClass("jstree-closed"); },
			is_leaf		: function (obj) { obj = this._get_node(obj); return obj && obj !== -1 && obj.hasClass("jstree-leaf"); },
			correct_state	: function (obj) {
				obj = this._get_node(obj);
				if(!obj || obj === -1) { return false; }
				obj.removeClass("jstree-closed jstree-open").addClass("jstree-leaf").children("ul").remove();
				this.__callback({ "obj" : obj });
			},
			// open/close
			open_node	: function (obj, callback, skip_animation) {
				obj = this._get_node(obj);
				if(!obj.length) { return false; }
				if(!obj.hasClass("jstree-closed")) { if(callback) { callback.call(); } return false; }
				var s = skip_animation || is_ie6 ? 0 : this._get_settings().core.animation,
					t = this;
				if(!this._is_loaded(obj)) {
					obj.children("a").addClass("jstree-loading");
					this.load_node(obj, function () { t.open_node(obj, callback, skip_animation); }, callback);
				}
				else {
					if(this._get_settings().core.open_parents) {
						obj.parentsUntil(".jstree",".jstree-closed").each(function () {
							t.open_node(this, false, true);
						});
					}
					if(s) { obj.children("ul").css("display","none"); }
					obj.removeClass("jstree-closed").addClass("jstree-open").children("a").removeClass("jstree-loading");
					if(s) { obj.children("ul").stop(true, true).slideDown(s, function () { this.style.display = ""; t.after_open(obj); }); }
					else { t.after_open(obj); }
					this.__callback({ "obj" : obj });
					if(callback) { callback.call(); }
				}
			},
			after_open	: function (obj) { this.__callback({ "obj" : obj }); },
			close_node	: function (obj, skip_animation) {
				obj = this._get_node(obj);
				var s = skip_animation || is_ie6 ? 0 : this._get_settings().core.animation,
					t = this;
				if(!obj.length || !obj.hasClass("jstree-open")) { return false; }
				if(s) { obj.children("ul").attr("style","display:block !important"); }
				obj.removeClass("jstree-open").addClass("jstree-closed");
				if(s) { obj.children("ul").stop(true, true).slideUp(s, function () { this.style.display = ""; t.after_close(obj); }); }
				else { t.after_close(obj); }
				this.__callback({ "obj" : obj });
			},
			after_close	: function (obj) { this.__callback({ "obj" : obj }); },
			toggle_node	: function (obj) {
				obj = this._get_node(obj);
				if(obj.hasClass("jstree-closed")) { return this.open_node(obj); }
				if(obj.hasClass("jstree-open")) { return this.close_node(obj); }
			},
			open_all	: function (obj, do_animation, original_obj) {
				obj = obj ? this._get_node(obj) : -1;
				if(!obj || obj === -1) { obj = this.get_container_ul(); }
				if(original_obj) { 
					obj = obj.find("li.jstree-closed");
				}
				else {
					original_obj = obj;
					if(obj.is(".jstree-closed")) { obj = obj.find("li.jstree-closed").andSelf(); }
					else { obj = obj.find("li.jstree-closed"); }
				}
				var _this = this;
				obj.each(function () { 
					var __this = this; 
					if(!_this._is_loaded(this)) { _this.open_node(this, function() { _this.open_all(__this, do_animation, original_obj); }, !do_animation); }
					else { _this.open_node(this, false, !do_animation); }
				});
				// so that callback is fired AFTER all nodes are open
				if(original_obj.find('li.jstree-closed').length === 0) { this.__callback({ "obj" : original_obj }); }
			},
			close_all	: function (obj, do_animation) {
				var _this = this;
				obj = obj ? this._get_node(obj) : this.get_container();
				if(!obj || obj === -1) { obj = this.get_container_ul(); }
				obj.find("li.jstree-open").andSelf().each(function () { _this.close_node(this, !do_animation); });
				this.__callback({ "obj" : obj });
			},
			clean_node	: function (obj) {
				obj = obj && obj != -1 ? $(obj) : this.get_container_ul();
				obj = obj.is("li") ? obj.find("li").andSelf() : obj.find("li");
				obj.removeClass("jstree-last")
					.filter("li:last-child").addClass("jstree-last").end()
					.filter(":has(li)")
						.not(".jstree-open").removeClass("jstree-leaf").addClass("jstree-closed");
				obj.not(".jstree-open, .jstree-closed").addClass("jstree-leaf").children("ul").remove();
				this.__callback({ "obj" : obj });
			},
			// rollback
			get_rollback : function () { 
				this.__callback();
				return { i : this.get_index(), h : this.get_container().children("ul").clone(true), d : this.data }; 
			},
			set_rollback : function (html, data) {
				this.get_container().empty().append(html);
				this.data = data;
				this.__callback();
			},
			// Dummy functions to be overwritten by any datastore plugin included
			load_node	: function (obj, s_call, e_call) { this.__callback({ "obj" : obj }); },
			_is_loaded	: function (obj) { return true; },

			// Basic operations: create
			create_node	: function (obj, position, js, callback, is_loaded) {
				obj = this._get_node(obj);
				position = typeof position === "undefined" ? "last" : position;
				var d = $("<li />"),
					s = this._get_settings().core,
					tmp;

				if(obj !== -1 && !obj.length) { return false; }
				if(!is_loaded && !this._is_loaded(obj)) { this.load_node(obj, function () { this.create_node(obj, position, js, callback, true); }); return false; }

				this.__rollback();

				if(typeof js === "string") { js = { "data" : js }; }
				if(!js) { js = {}; }
				if(js.attr) { d.attr(js.attr); }
				if(js.metadata) { d.data(js.metadata); }
				if(js.state) { d.addClass("jstree-" + js.state); }
				if(!js.data) { js.data = this._get_string("new_node"); }
				if(!$.isArray(js.data)) { tmp = js.data; js.data = []; js.data.push(tmp); }
				$.each(js.data, function (i, m) {
					tmp = $("<a />");
					if($.isFunction(m)) { m = m.call(this, js); }
					if(typeof m == "string") { tmp.attr('href','#')[ s.html_titles ? "html" : "text" ](m); }
					else {
						if(!m.attr) { m.attr = {}; }
						if(!m.attr.href) { m.attr.href = '#'; }
						tmp.attr(m.attr)[ s.html_titles ? "html" : "text" ](m.title);
						if(m.language) { tmp.addClass(m.language); }
					}
					tmp.prepend("<ins class='jstree-icon'>&#160;</ins>");
					if(!m.icon && js.icon) { m.icon = js.icon; }
					if(m.icon) { 
						if(m.icon.indexOf("/") === -1) { tmp.children("ins").addClass(m.icon); }
						else { tmp.children("ins").css("background","url('" + m.icon + "') center center no-repeat"); }
					}
					d.append(tmp);
				});
				d.prepend("<ins class='jstree-icon'>&#160;</ins>");
				if(obj === -1) {
					obj = this.get_container();
					if(position === "before") { position = "first"; }
					if(position === "after") { position = "last"; }
				}
				switch(position) {
					case "before": obj.before(d); tmp = this._get_parent(obj); break;
					case "after" : obj.after(d);  tmp = this._get_parent(obj); break;
					case "inside":
					case "first" :
						if(!obj.children("ul").length) { obj.append("<ul />"); }
						obj.children("ul").prepend(d);
						tmp = obj;
						break;
					case "last":
						if(!obj.children("ul").length) { obj.append("<ul />"); }
						obj.children("ul").append(d);
						tmp = obj;
						break;
					default:
						if(!obj.children("ul").length) { obj.append("<ul />"); }
						if(!position) { position = 0; }
						tmp = obj.children("ul").children("li").eq(position);
						if(tmp.length) { tmp.before(d); }
						else { obj.children("ul").append(d); }
						tmp = obj;
						break;
				}
				if(tmp === -1 || tmp.get(0) === this.get_container().get(0)) { tmp = -1; }
				this.clean_node(tmp);
				this.__callback({ "obj" : d, "parent" : tmp });
				if(callback) { callback.call(this, d); }
				return d;
			},
			// Basic operations: rename (deal with text)
			get_text	: function (obj) {
				obj = this._get_node(obj);
				if(!obj.length) { return false; }
				var s = this._get_settings().core.html_titles;
				obj = obj.children("a:eq(0)");
				if(s) {
					obj = obj.clone();
					obj.children("INS").remove();
					return obj.html();
				}
				else {
					obj = obj.contents().filter(function() { return this.nodeType == 3; })[0];
					return obj.nodeValue;
				}
			},
			set_text	: function (obj, val) {
				obj = this._get_node(obj);
				if(!obj.length) { return false; }
				obj = obj.children("a:eq(0)");
				if(this._get_settings().core.html_titles) {
					var tmp = obj.children("INS").clone();
					obj.html(val).prepend(tmp);
					this.__callback({ "obj" : obj, "name" : val });
					return true;
				}
				else {
					obj = obj.contents().filter(function() { return this.nodeType == 3; })[0];
					this.__callback({ "obj" : obj, "name" : val });
					return (obj.nodeValue = val);
				}
			},
			rename_node : function (obj, val) {
				obj = this._get_node(obj);
				this.__rollback();
				if(obj && obj.length && this.set_text.apply(this, Array.prototype.slice.call(arguments))) { this.__callback({ "obj" : obj, "name" : val }); }
			},
			// Basic operations: deleting nodes
			delete_node : function (obj) {
				obj = this._get_node(obj);
				if(!obj.length) { return false; }
				this.__rollback();
				var p = this._get_parent(obj), prev = $([]), t = this;
				obj.each(function () {
					prev = prev.add(t._get_prev(this));
				});
				obj = obj.detach();
				if(p !== -1 && p.find("> ul > li").length === 0) {
					p.removeClass("jstree-open jstree-closed").addClass("jstree-leaf");
				}
				this.clean_node(p);
				this.__callback({ "obj" : obj, "prev" : prev, "parent" : p });
				return obj;
			},
			prepare_move : function (o, r, pos, cb, is_cb) {
				var p = {};

				p.ot = $.jstree._reference(o) || this;
				p.o = p.ot._get_node(o);
				p.r = r === - 1 ? -1 : this._get_node(r);
				p.p = (typeof pos === "undefined" || pos === false) ? "last" : pos; // TODO: move to a setting
				if(!is_cb && prepared_move.o && prepared_move.o[0] === p.o[0] && prepared_move.r[0] === p.r[0] && prepared_move.p === p.p) {
					this.__callback(prepared_move);
					if(cb) { cb.call(this, prepared_move); }
					return;
				}
				p.ot = $.jstree._reference(p.o) || this;
				p.rt = $.jstree._reference(p.r) || this; // r === -1 ? p.ot : $.jstree._reference(p.r) || this
				if(p.r === -1 || !p.r) {
					p.cr = -1;
					switch(p.p) {
						case "first":
						case "before":
						case "inside":
							p.cp = 0; 
							break;
						case "after":
						case "last":
							p.cp = p.rt.get_container().find(" > ul > li").length; 
							break;
						default:
							p.cp = p.p;
							break;
					}
				}
				else {
					if(!/^(before|after)$/.test(p.p) && !this._is_loaded(p.r)) {
						return this.load_node(p.r, function () { this.prepare_move(o, r, pos, cb, true); });
					}
					switch(p.p) {
						case "before":
							p.cp = p.r.index();
							p.cr = p.rt._get_parent(p.r);
							break;
						case "after":
							p.cp = p.r.index() + 1;
							p.cr = p.rt._get_parent(p.r);
							break;
						case "inside":
						case "first":
							p.cp = 0;
							p.cr = p.r;
							break;
						case "last":
							p.cp = p.r.find(" > ul > li").length; 
							p.cr = p.r;
							break;
						default: 
							p.cp = p.p;
							p.cr = p.r;
							break;
					}
				}
				p.np = p.cr == -1 ? p.rt.get_container() : p.cr;
				p.op = p.ot._get_parent(p.o);
				p.cop = p.o.index();
				if(p.op === -1) { p.op = p.ot ? p.ot.get_container() : this.get_container(); }
				if(!/^(before|after)$/.test(p.p) && p.op && p.np && p.op[0] === p.np[0] && p.o.index() < p.cp) { p.cp++; }
				//if(p.p === "before" && p.op && p.np && p.op[0] === p.np[0] && p.o.index() < p.cp) { p.cp--; }
				p.or = p.np.find(" > ul > li:nth-child(" + (p.cp + 1) + ")");
				prepared_move = p;
				this.__callback(prepared_move);
				if(cb) { cb.call(this, prepared_move); }
			},
			check_move : function () {
				var obj = prepared_move, ret = true, r = obj.r === -1 ? this.get_container() : obj.r;
				if(!obj || !obj.o || obj.or[0] === obj.o[0]) { return false; }
				if(obj.op && obj.np && obj.op[0] === obj.np[0] && obj.cp - 1 === obj.o.index()) { return false; }
				obj.o.each(function () { 
					if(r.parentsUntil(".jstree", "li").andSelf().index(this) !== -1) { ret = false; return false; }
				});
				return ret;
			},
			move_node : function (obj, ref, position, is_copy, is_prepared, skip_check) {
				if(!is_prepared) { 
					return this.prepare_move(obj, ref, position, function (p) {
						this.move_node(p, false, false, is_copy, true, skip_check);
					});
				}
				if(is_copy) { 
					prepared_move.cy = true;
				}
				if(!skip_check && !this.check_move()) { return false; }

				this.__rollback();
				var o = false;
				if(is_copy) {
					o = obj.o.clone(true);
					o.find("*[id]").andSelf().each(function () {
						if(this.id) { this.id = "copy_" + this.id; }
					});
				}
				else { o = obj.o; }

				if(obj.or.length) { obj.or.before(o); }
				else { 
					if(!obj.np.children("ul").length) { $("<ul />").appendTo(obj.np); }
					obj.np.children("ul:eq(0)").append(o); 
				}

				try { 
					obj.ot.clean_node(obj.op);
					obj.rt.clean_node(obj.np);
					if(!obj.op.find("> ul > li").length) {
						obj.op.removeClass("jstree-open jstree-closed").addClass("jstree-leaf").children("ul").remove();
					}
				} catch (e) { }

				if(is_copy) { 
					prepared_move.cy = true;
					prepared_move.oc = o; 
				}
				this.__callback(prepared_move);
				return prepared_move;
			},
			_get_move : function () { return prepared_move; }
		}
	});
})(jQuery);
//*/

/* 
 * jsTree ui plugin
 * This plugins handles selecting/deselecting/hovering/dehovering nodes
 */
(function ($) {
	var scrollbar_width, e1, e2;
	$(function() {
		if (/msie/.test(navigator.userAgent.toLowerCase())) {
			e1 = $('<textarea cols="10" rows="2"></textarea>').css({ position: 'absolute', top: -1000, left: 0 }).appendTo('body');
			e2 = $('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>').css({ position: 'absolute', top: -1000, left: 0 }).appendTo('body');
			scrollbar_width = e1.width() - e2.width();
			e1.add(e2).remove();
		} 
		else {
			e1 = $('<div />').css({ width: 100, height: 100, overflow: 'auto', position: 'absolute', top: -1000, left: 0 })
					.prependTo('body').append('<div />').find('div').css({ width: '100%', height: 200 });
			scrollbar_width = 100 - e1.width();
			e1.parent().remove();
		}
	});
	$.jstree.plugin("ui", {
		__init : function () { 
			this.data.ui.selected = $(); 
			this.data.ui.last_selected = false; 
			this.data.ui.hovered = null;
			this.data.ui.to_select = this.get_settings().ui.initially_select;

			this.get_container()
				.delegate("a", "click.jstree", $.proxy(function (event) {
						event.preventDefault();
						event.currentTarget.blur();
						if(!$(event.currentTarget).hasClass("jstree-loading")) {
							this.select_node(event.currentTarget, true, event);
						}
					}, this))
				.delegate("a", "mouseenter.jstree", $.proxy(function (event) {
						if(!$(event.currentTarget).hasClass("jstree-loading")) {
							this.hover_node(event.target);
						}
					}, this))
				.delegate("a", "mouseleave.jstree", $.proxy(function (event) {
						if(!$(event.currentTarget).hasClass("jstree-loading")) {
							this.dehover_node(event.target);
						}
					}, this))
				.bind("reopen.jstree", $.proxy(function () { 
						this.reselect();
					}, this))
				.bind("get_rollback.jstree", $.proxy(function () { 
						this.dehover_node();
						this.save_selected();
					}, this))
				.bind("set_rollback.jstree", $.proxy(function () { 
						this.reselect();
					}, this))
				.bind("close_node.jstree", $.proxy(function (event, data) { 
						var s = this._get_settings().ui,
							obj = this._get_node(data.rslt.obj),
							clk = (obj && obj.length) ? obj.children("ul").find("a.jstree-clicked") : $(),
							_this = this;
						if(s.selected_parent_close === false || !clk.length) { return; }
						clk.each(function () { 
							_this.deselect_node(this);
							if(s.selected_parent_close === "select_parent") { _this.select_node(obj); }
						});
					}, this))
				.bind("delete_node.jstree", $.proxy(function (event, data) { 
						var s = this._get_settings().ui.select_prev_on_delete,
							obj = this._get_node(data.rslt.obj),
							clk = (obj && obj.length) ? obj.find("a.jstree-clicked") : [],
							_this = this;
						clk.each(function () { _this.deselect_node(this); });
						if(s && clk.length) { 
							data.rslt.prev.each(function () { 
								if(this.parentNode) { _this.select_node(this); return false; /* if return false is removed all prev nodes will be selected */}
							});
						}
					}, this))
				.bind("move_node.jstree", $.proxy(function (event, data) { 
						if(data.rslt.cy) { 
							data.rslt.oc.find("a.jstree-clicked").removeClass("jstree-clicked");
						}
					}, this));
		},
		defaults : {
			select_limit : -1, // 0, 1, 2 ... or -1 for unlimited
			select_multiple_modifier : "ctrl", // on, or ctrl, shift, alt
			select_range_modifier : "shift",
			selected_parent_close : "select_parent", // false, "deselect", "select_parent"
			selected_parent_open : true,
			select_prev_on_delete : true,
			disable_selecting_children : false,
			initially_select : []
		},
		_fn : { 
			_get_node : function (obj, allow_multiple) {
				if(typeof obj === "undefined" || obj === null) { return allow_multiple ? this.data.ui.selected : this.data.ui.last_selected; }
				var $obj = $(obj, this.get_container()); 
				if($obj.is(".jstree") || obj == -1) { return -1; } 
				$obj = $obj.closest("li", this.get_container()); 
				return $obj.length ? $obj : false; 
			},
			_ui_notify : function (n, data) {
				if(data.selected) {
					this.select_node(n, false);
				}
			},
			save_selected : function () {
				var _this = this;
				this.data.ui.to_select = [];
				this.data.ui.selected.each(function () { if(this.id) { _this.data.ui.to_select.push("#" + this.id.toString().replace(/^#/,"").replace(/\\\//g,"/").replace(/\//g,"\\\/").replace(/\\\./g,".").replace(/\./g,"\\.").replace(/\:/g,"\\:")); } });
				this.__callback(this.data.ui.to_select);
			},
			reselect : function () {
				var _this = this,
					s = this.data.ui.to_select;
				s = $.map($.makeArray(s), function (n) { return "#" + n.toString().replace(/^#/,"").replace(/\\\//g,"/").replace(/\//g,"\\\/").replace(/\\\./g,".").replace(/\./g,"\\.").replace(/\:/g,"\\:"); });
				// this.deselect_all(); WHY deselect, breaks plugin state notifier?
				$.each(s, function (i, val) { if(val && val !== "#") { _this.select_node(val); } });
				this.data.ui.selected = this.data.ui.selected.filter(function () { return this.parentNode; });
				this.__callback();
			},
			refresh : function (obj) {
				this.save_selected();
				return this.__call_old();
			},
			hover_node : function (obj) {
				obj = this._get_node(obj);
				if(!obj.length) { return false; }
				//if(this.data.ui.hovered && obj.get(0) === this.data.ui.hovered.get(0)) { return; }
				if(!obj.hasClass("jstree-hovered")) { this.dehover_node(); }
				this.data.ui.hovered = obj.children("a").addClass("jstree-hovered").parent();
				this._fix_scroll(obj);
				this.__callback({ "obj" : obj });
			},
			dehover_node : function () {
				var obj = this.data.ui.hovered, p;
				if(!obj || !obj.length) { return false; }
				p = obj.children("a").removeClass("jstree-hovered").parent();
				if(this.data.ui.hovered[0] === p[0]) { this.data.ui.hovered = null; }
				this.__callback({ "obj" : obj });
			},
			select_node : function (obj, check, e) {
				obj = this._get_node(obj);
				if(obj == -1 || !obj || !obj.length) { return false; }
				var s = this._get_settings().ui,
					is_multiple = (s.select_multiple_modifier == "on" || (s.select_multiple_modifier !== false && e && e[s.select_multiple_modifier + "Key"])),
					is_range = (s.select_range_modifier !== false && e && e[s.select_range_modifier + "Key"] && this.data.ui.last_selected && this.data.ui.last_selected[0] !== obj[0] && this.data.ui.last_selected.parent()[0] === obj.parent()[0]),
					is_selected = this.is_selected(obj),
					proceed = true,
					t = this;
				if(check) {
					if(s.disable_selecting_children && is_multiple && 
						(
							(obj.parentsUntil(".jstree","li").children("a.jstree-clicked").length) ||
							(obj.children("ul").find("a.jstree-clicked:eq(0)").length)
						)
					) {
						return false;
					}
					proceed = false;
					switch(!0) {
						case (is_range):
							this.data.ui.last_selected.addClass("jstree-last-selected");
							obj = obj[ obj.index() < this.data.ui.last_selected.index() ? "nextUntil" : "prevUntil" ](".jstree-last-selected").andSelf();
							if(s.select_limit == -1 || obj.length < s.select_limit) {
								this.data.ui.last_selected.removeClass("jstree-last-selected");
								this.data.ui.selected.each(function () {
									if(this !== t.data.ui.last_selected[0]) { t.deselect_node(this); }
								});
								is_selected = false;
								proceed = true;
							}
							else {
								proceed = false;
							}
							break;
						case (is_selected && !is_multiple): 
							this.deselect_all();
							is_selected = false;
							proceed = true;
							break;
						case (!is_selected && !is_multiple): 
							if(s.select_limit == -1 || s.select_limit > 0) {
								this.deselect_all();
								proceed = true;
							}
							break;
						case (is_selected && is_multiple): 
							this.deselect_node(obj);
							break;
						case (!is_selected && is_multiple): 
							if(s.select_limit == -1 || this.data.ui.selected.length + 1 <= s.select_limit) { 
								proceed = true;
							}
							break;
					}
				}
				if(proceed && !is_selected) {
					if(!is_range) { this.data.ui.last_selected = obj; }
					obj.children("a").addClass("jstree-clicked");
					if(s.selected_parent_open) {
						obj.parents(".jstree-closed").each(function () { t.open_node(this, false, true); });
					}
					this.data.ui.selected = this.data.ui.selected.add(obj);
					this._fix_scroll(obj.eq(0));
					this.__callback({ "obj" : obj, "e" : e });
				}
			},
			_fix_scroll : function (obj) {
				var c = this.get_container()[0], t;
				if(c.scrollHeight > c.offsetHeight) {
					obj = this._get_node(obj);
					if(!obj || obj === -1 || !obj.length || !obj.is(":visible")) { return; }
					t = obj.offset().top - this.get_container().offset().top;
					if(t < 0) { 
						c.scrollTop = c.scrollTop + t - 1; 
					}
					if(t + this.data.core.li_height + (c.scrollWidth > c.offsetWidth ? scrollbar_width : 0) > c.offsetHeight) { 
						c.scrollTop = c.scrollTop + (t - c.offsetHeight + this.data.core.li_height + 1 + (c.scrollWidth > c.offsetWidth ? scrollbar_width : 0)); 
					}
				}
			},
			deselect_node : function (obj) {
				obj = this._get_node(obj);
				if(!obj.length) { return false; }
				if(this.is_selected(obj)) {
					obj.children("a").removeClass("jstree-clicked");
					this.data.ui.selected = this.data.ui.selected.not(obj);
					if(this.data.ui.last_selected.get(0) === obj.get(0)) { this.data.ui.last_selected = this.data.ui.selected.eq(0); }
					this.__callback({ "obj" : obj });
				}
			},
			toggle_select : function (obj) {
				obj = this._get_node(obj);
				if(!obj.length) { return false; }
				if(this.is_selected(obj)) { this.deselect_node(obj); }
				else { this.select_node(obj); }
			},
			is_selected : function (obj) { return this.data.ui.selected.index(this._get_node(obj)) >= 0; },
			get_selected : function (context) { 
				return context ? $(context).find("a.jstree-clicked").parent() : this.data.ui.selected; 
			},
			deselect_all : function (context) {
				var ret = context ? $(context).find("a.jstree-clicked").parent() : this.get_container().find("a.jstree-clicked").parent();
				ret.children("a.jstree-clicked").removeClass("jstree-clicked");
				this.data.ui.selected = $([]);
				this.data.ui.last_selected = false;
				this.__callback({ "obj" : ret });
			}
		}
	});
	// include the selection plugin by default
	$.jstree.defaults.plugins.push("ui");
})(jQuery);
//*/

/* 
 * jsTree CRRM plugin
 * Handles creating/renaming/removing/moving nodes by user interaction.
 */
(function ($) {
	$.jstree.plugin("crrm", { 
		__init : function () {
			this.get_container()
				.bind("move_node.jstree", $.proxy(function (e, data) {
					if(this._get_settings().crrm.move.open_onmove) {
						var t = this;
						data.rslt.np.parentsUntil(".jstree").andSelf().filter(".jstree-closed").each(function () {
							t.open_node(this, false, true);
						});
					}
				}, this));
		},
		defaults : {
			input_width_limit : 200,
			move : {
				always_copy			: false, // false, true or "multitree"
				open_onmove			: true,
				default_position	: "last",
				check_move			: function (m) { return true; }
			}
		},
		_fn : {
			_show_input : function (obj, callback) {
				obj = this._get_node(obj);
				var rtl = this._get_settings().core.rtl,
					w = this._get_settings().crrm.input_width_limit,
					w1 = obj.children("ins").width(),
					w2 = obj.find("> a:visible > ins").width() * obj.find("> a:visible > ins").length,
					t = this.get_text(obj),
					h1 = $("<div />", { css : { "position" : "absolute", "top" : "-200px", "left" : (rtl ? "0px" : "-1000px"), "visibility" : "hidden" } }).appendTo("body"),
					h2 = obj.css("position","relative").append(
					$("<input />", { 
						"value" : t,
						"class" : "jstree-rename-input",
						// "size" : t.length,
						"css" : {
							"padding" : "0",
							"border" : "1px solid silver",
							"position" : "absolute",
							"left"  : (rtl ? "auto" : (w1 + w2 + 4) + "px"),
							"right" : (rtl ? (w1 + w2 + 4) + "px" : "auto"),
							"top" : "0px",
							"height" : (this.data.core.li_height - 2) + "px",
							"lineHeight" : (this.data.core.li_height - 2) + "px",
							"width" : "150px" // will be set a bit further down
						},
						"blur" : $.proxy(function () {
							var i = obj.children(".jstree-rename-input"),
								v = i.val();
							if(v === "") { v = t; }
							h1.remove();
							i.remove(); // rollback purposes
							this.set_text(obj,t); // rollback purposes
							this.rename_node(obj, v);
							callback.call(this, obj, v, t);
							obj.css("position","");
						}, this),
						"keyup" : function (event) {
							var key = event.keyCode || event.which;
							if(key == 27) { this.value = t; this.blur(); return; }
							else if(key == 13) { this.blur(); return; }
							else {
								h2.width(Math.min(h1.text("pW" + this.value).width(),w));
							}
						},
						"keypress" : function(event) {
							var key = event.keyCode || event.which;
							if(key == 13) { return false; }
						}
					})
				).children(".jstree-rename-input"); 
				this.set_text(obj, "");
				h1.css({
						fontFamily		: h2.css('fontFamily')		|| '',
						fontSize		: h2.css('fontSize')		|| '',
						fontWeight		: h2.css('fontWeight')		|| '',
						fontStyle		: h2.css('fontStyle')		|| '',
						fontStretch		: h2.css('fontStretch')		|| '',
						fontVariant		: h2.css('fontVariant')		|| '',
						letterSpacing	: h2.css('letterSpacing')	|| '',
						wordSpacing		: h2.css('wordSpacing')		|| ''
				});
				h2.width(Math.min(h1.text("pW" + h2[0].value).width(),w))[0].select();
			},
			rename : function (obj) {
				obj = this._get_node(obj);
				this.__rollback();
				var f = this.__callback;
				this._show_input(obj, function (obj, new_name, old_name) { 
					f.call(this, { "obj" : obj, "new_name" : new_name, "old_name" : old_name });
				});
			},
			create : function (obj, position, js, callback, skip_rename) {
				var t, _this = this;
				obj = this._get_node(obj);
				if(!obj) { obj = -1; }
				this.__rollback();
				t = this.create_node(obj, position, js, function (t) {
					var p = this._get_parent(t),
						pos = $(t).index();
					if(callback) { callback.call(this, t); }
					if(p.length && p.hasClass("jstree-closed")) { this.open_node(p, false, true); }
					if(!skip_rename) { 
						this._show_input(t, function (obj, new_name, old_name) { 
							_this.__callback({ "obj" : obj, "name" : new_name, "parent" : p, "position" : pos });
						});
					}
					else { _this.__callback({ "obj" : t, "name" : this.get_text(t), "parent" : p, "position" : pos }); }
				});
				return t;
			},
			remove : function (obj) {
				obj = this._get_node(obj, true);
				var p = this._get_parent(obj), prev = this._get_prev(obj);
				this.__rollback();
				obj = this.delete_node(obj);
				if(obj !== false) { this.__callback({ "obj" : obj, "prev" : prev, "parent" : p }); }
			},
			check_move : function () {
				if(!this.__call_old()) { return false; }
				var s = this._get_settings().crrm.move;
				if(!s.check_move.call(this, this._get_move())) { return false; }
				return true;
			},
			move_node : function (obj, ref, position, is_copy, is_prepared, skip_check) {
				var s = this._get_settings().crrm.move;
				if(!is_prepared) { 
					if(typeof position === "undefined") { position = s.default_position; }
					if(position === "inside" && !s.default_position.match(/^(before|after)$/)) { position = s.default_position; }
					return this.__call_old(true, obj, ref, position, is_copy, false, skip_check);
				}
				// if the move is already prepared
				if(s.always_copy === true || (s.always_copy === "multitree" && obj.rt.get_index() !== obj.ot.get_index() )) {
					is_copy = true;
				}
				this.__call_old(true, obj, ref, position, is_copy, true, skip_check);
			},

			cut : function (obj) {
				obj = this._get_node(obj, true);
				if(!obj || !obj.length) { return false; }
				this.data.crrm.cp_nodes = false;
				this.data.crrm.ct_nodes = obj;
				this.__callback({ "obj" : obj });
			},
			copy : function (obj) {
				obj = this._get_node(obj, true);
				if(!obj || !obj.length) { return false; }
				this.data.crrm.ct_nodes = false;
				this.data.crrm.cp_nodes = obj;
				this.__callback({ "obj" : obj });
			},
			paste : function (obj) { 
				obj = this._get_node(obj);
				if(!obj || !obj.length) { return false; }
				var nodes = this.data.crrm.ct_nodes ? this.data.crrm.ct_nodes : this.data.crrm.cp_nodes;
				if(!this.data.crrm.ct_nodes && !this.data.crrm.cp_nodes) { return false; }
				if(this.data.crrm.ct_nodes) { this.move_node(this.data.crrm.ct_nodes, obj); this.data.crrm.ct_nodes = false; }
				if(this.data.crrm.cp_nodes) { this.move_node(this.data.crrm.cp_nodes, obj, false, true); }
				this.__callback({ "obj" : obj, "nodes" : nodes });
			}
		}
	});
	// include the crr plugin by default
	// $.jstree.defaults.plugins.push("crrm");
})(jQuery);
//*/

/* 
 * jsTree themes plugin
 * Handles loading and setting themes, as well as detecting path to themes, etc.
 */
(function ($) {
	var themes_loaded = [];
	// this variable stores the path to the themes folder - if left as false - it will be autodetected
	$.jstree._themes = false;
	$.jstree.plugin("themes", {
		__init : function () { 
			this.get_container()
				.bind("init.jstree", $.proxy(function () {
						var s = this._get_settings().themes;
						this.data.themes.dots = s.dots; 
						this.data.themes.icons = s.icons; 
						this.set_theme(s.theme, s.url);
					}, this))
				.bind("loaded.jstree", $.proxy(function () {
						// bound here too, as simple HTML tree's won't honor dots & icons otherwise
						if(!this.data.themes.dots) { this.hide_dots(); }
						else { this.show_dots(); }
						if(!this.data.themes.icons) { this.hide_icons(); }
						else { this.show_icons(); }
					}, this));
		},
		defaults : { 
			theme : "default", 
			url : false,
			dots : true,
			icons : true
		},
		_fn : {
			set_theme : function (theme_name, theme_url) {
				if(!theme_name) { return false; }
				if(!theme_url) { theme_url = $.jstree._themes + theme_name + '/style.css'; }
				if($.inArray(theme_url, themes_loaded) == -1) {
					$.vakata.css.add_sheet({ "url" : theme_url });
					themes_loaded.push(theme_url);
				}
				if(this.data.themes.theme != theme_name) {
					this.get_container().removeClass('jstree-' + this.data.themes.theme);
					this.data.themes.theme = theme_name;
				}
				this.get_container().addClass('jstree-' + theme_name);
				if(!this.data.themes.dots) { this.hide_dots(); }
				else { this.show_dots(); }
				if(!this.data.themes.icons) { this.hide_icons(); }
				else { this.show_icons(); }
				this.__callback();
			},
			get_theme	: function () { return this.data.themes.theme; },

			show_dots	: function () { this.data.themes.dots = true; this.get_container().children("ul").removeClass("jstree-no-dots"); },
			hide_dots	: function () { this.data.themes.dots = false; this.get_container().children("ul").addClass("jstree-no-dots"); },
			toggle_dots	: function () { if(this.data.themes.dots) { this.hide_dots(); } else { this.show_dots(); } },

			show_icons	: function () { this.data.themes.icons = true; this.get_container().children("ul").removeClass("jstree-no-icons"); },
			hide_icons	: function () { this.data.themes.icons = false; this.get_container().children("ul").addClass("jstree-no-icons"); },
			toggle_icons: function () { if(this.data.themes.icons) { this.hide_icons(); } else { this.show_icons(); } }
		}
	});
	// autodetect themes path
	$(function () {
		if($.jstree._themes === false) {
			$("script").each(function () { 
				if(this.src.toString().match(/jquery\.jstree[^\/]*?\.js(\?.*)?$/)) { 
					$.jstree._themes = this.src.toString().replace(/jquery\.jstree[^\/]*?\.js(\?.*)?$/, "") + 'themes/'; 
					return false; 
				}
			});
		}
		if($.jstree._themes === false) { $.jstree._themes = "themes/"; }
	});
	// include the themes plugin by default
	$.jstree.defaults.plugins.push("themes");
})(jQuery);
//*/

/*
 * jsTree hotkeys plugin
 * Enables keyboard navigation for all tree instances
 * Depends on the jstree ui & jquery hotkeys plugins
 */
(function ($) {
	var bound = [];
	function exec(i, event) {
		var f = $.jstree._focused(), tmp;
		if(f && f.data && f.data.hotkeys && f.data.hotkeys.enabled) { 
			tmp = f._get_settings().hotkeys[i];
			if(tmp) { return tmp.call(f, event); }
		}
	}
	$.jstree.plugin("hotkeys", {
		__init : function () {
			if(typeof $.hotkeys === "undefined") { throw "jsTree hotkeys: jQuery hotkeys plugin not included."; }
			if(!this.data.ui) { throw "jsTree hotkeys: jsTree UI plugin not included."; }
			$.each(this._get_settings().hotkeys, function (i, v) {
				if(v !== false && $.inArray(i, bound) == -1) {
					$(document).bind("keydown", i, function (event) { return exec(i, event); });
					bound.push(i);
				}
			});
			this.get_container()
				.bind("lock.jstree", $.proxy(function () {
						if(this.data.hotkeys.enabled) { this.data.hotkeys.enabled = false; this.data.hotkeys.revert = true; }
					}, this))
				.bind("unlock.jstree", $.proxy(function () {
						if(this.data.hotkeys.revert) { this.data.hotkeys.enabled = true; }
					}, this));
			this.enable_hotkeys();
		},
		defaults : {
			"up" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected || -1;
				this.hover_node(this._get_prev(o));
				return false; 
			},
			"ctrl+up" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected || -1;
				this.hover_node(this._get_prev(o));
				return false; 
			},
			"shift+up" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected || -1;
				this.hover_node(this._get_prev(o));
				return false; 
			},
			"down" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected || -1;
				this.hover_node(this._get_next(o));
				return false;
			},
			"ctrl+down" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected || -1;
				this.hover_node(this._get_next(o));
				return false;
			},
			"shift+down" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected || -1;
				this.hover_node(this._get_next(o));
				return false;
			},
			"left" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected;
				if(o) {
					if(o.hasClass("jstree-open")) { this.close_node(o); }
					else { this.hover_node(this._get_prev(o)); }
				}
				return false;
			},
			"ctrl+left" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected;
				if(o) {
					if(o.hasClass("jstree-open")) { this.close_node(o); }
					else { this.hover_node(this._get_prev(o)); }
				}
				return false;
			},
			"shift+left" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected;
				if(o) {
					if(o.hasClass("jstree-open")) { this.close_node(o); }
					else { this.hover_node(this._get_prev(o)); }
				}
				return false;
			},
			"right" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected;
				if(o && o.length) {
					if(o.hasClass("jstree-closed")) { this.open_node(o); }
					else { this.hover_node(this._get_next(o)); }
				}
				return false;
			},
			"ctrl+right" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected;
				if(o && o.length) {
					if(o.hasClass("jstree-closed")) { this.open_node(o); }
					else { this.hover_node(this._get_next(o)); }
				}
				return false;
			},
			"shift+right" : function () { 
				var o = this.data.ui.hovered || this.data.ui.last_selected;
				if(o && o.length) {
					if(o.hasClass("jstree-closed")) { this.open_node(o); }
					else { this.hover_node(this._get_next(o)); }
				}
				return false;
			},
			"space" : function () { 
				if(this.data.ui.hovered) { this.data.ui.hovered.children("a:eq(0)").click(); } 
				return false; 
			},
			"ctrl+space" : function (event) { 
				event.type = "click";
				if(this.data.ui.hovered) { this.data.ui.hovered.children("a:eq(0)").trigger(event); } 
				return false; 
			},
			"shift+space" : function (event) { 
				event.type = "click";
				if(this.data.ui.hovered) { this.data.ui.hovered.children("a:eq(0)").trigger(event); } 
				return false; 
			},
			"f2" : function () { this.rename(this.data.ui.hovered || this.data.ui.last_selected); },
			"del" : function () { this.remove(this.data.ui.hovered || this._get_node(null)); }
		},
		_fn : {
			enable_hotkeys : function () {
				this.data.hotkeys.enabled = true;
			},
			disable_hotkeys : function () {
				this.data.hotkeys.enabled = false;
			}
		}
	});
})(jQuery);
//*/

/* 
 * jsTree JSON plugin
 * The JSON data store. Datastores are build by overriding the `load_node` and `_is_loaded` functions.
 */
(function ($) {
	$.jstree.plugin("json_data", {
		__init : function() {
			var s = this._get_settings().json_data;
			if(s.progressive_unload) {
				this.get_container().bind("after_close.jstree", function (e, data) {
					data.rslt.obj.children("ul").remove();
				});
			}
		},
		defaults : { 
			// `data` can be a function:
			//  * accepts two arguments - node being loaded and a callback to pass the result to
			//  * will be executed in the current tree's scope & ajax won't be supported
			data : false, 
			ajax : false,
			correct_state : true,
			progressive_render : false,
			progressive_unload : false
		},
		_fn : {
			load_node : function (obj, s_call, e_call) { var _this = this; this.load_node_json(obj, function () { _this.__callback({ "obj" : _this._get_node(obj) }); s_call.call(this); }, e_call); },
			_is_loaded : function (obj) { 
				var s = this._get_settings().json_data;
				obj = this._get_node(obj); 
				return obj == -1 || !obj || (!s.ajax && !s.progressive_render && !$.isFunction(s.data)) || obj.is(".jstree-open, .jstree-leaf") || obj.children("ul").children("li").length > 0;
			},
			refresh : function (obj) {
				obj = this._get_node(obj);
				var s = this._get_settings().json_data;
				if(obj && obj !== -1 && s.progressive_unload && ($.isFunction(s.data) || !!s.ajax)) {
					obj.removeData("jstree_children");
				}
				return this.__call_old();
			},
			load_node_json : function (obj, s_call, e_call) {
				var s = this.get_settings().json_data, d,
					error_func = function () {},
					success_func = function () {};
				obj = this._get_node(obj);

				if(obj && obj !== -1 && (s.progressive_render || s.progressive_unload) && !obj.is(".jstree-open, .jstree-leaf") && obj.children("ul").children("li").length === 0 && obj.data("jstree_children")) {
					d = this._parse_json(obj.data("jstree_children"), obj);
					if(d) {
						obj.append(d);
						if(!s.progressive_unload) { obj.removeData("jstree_children"); }
					}
					this.clean_node(obj);
					if(s_call) { s_call.call(this); }
					return;
				}

				if(obj && obj !== -1) {
					if(obj.data("jstree_is_loading")) { return; }
					else { obj.data("jstree_is_loading",true); }
				}
				switch(!0) {
					case (!s.data && !s.ajax): throw "Neither data nor ajax settings supplied.";
					// function option added here for easier model integration (also supporting async - see callback)
					case ($.isFunction(s.data)):
						s.data.call(this, obj, $.proxy(function (d) {
							d = this._parse_json(d, obj);
							if(!d) { 
								if(obj === -1 || !obj) {
									if(s.correct_state) { this.get_container().children("ul").empty(); }
								}
								else {
									obj.children("a.jstree-loading").removeClass("jstree-loading");
									obj.removeData("jstree_is_loading");
									if(s.correct_state) { this.correct_state(obj); }
								}
								if(e_call) { e_call.call(this); }
							}
							else {
								if(obj === -1 || !obj) { this.get_container().children("ul").empty().append(d.children()); }
								else { obj.append(d).children("a.jstree-loading").removeClass("jstree-loading"); obj.removeData("jstree_is_loading"); }
								this.clean_node(obj);
								if(s_call) { s_call.call(this); }
							}
						}, this));
						break;
					case (!!s.data && !s.ajax) || (!!s.data && !!s.ajax && (!obj || obj === -1)):
						if(!obj || obj == -1) {
							d = this._parse_json(s.data, obj);
							if(d) {
								this.get_container().children("ul").empty().append(d.children());
								this.clean_node();
							}
							else { 
								if(s.correct_state) { this.get_container().children("ul").empty(); }
							}
						}
						if(s_call) { s_call.call(this); }
						break;
					case (!s.data && !!s.ajax) || (!!s.data && !!s.ajax && obj && obj !== -1):
						error_func = function (x, t, e) {
							var ef = this.get_settings().json_data.ajax.error; 
							if(ef) { ef.call(this, x, t, e); }
							if(obj != -1 && obj.length) {
								obj.children("a.jstree-loading").removeClass("jstree-loading");
								obj.removeData("jstree_is_loading");
								if(t === "success" && s.correct_state) { this.correct_state(obj); }
							}
							else {
								if(t === "success" && s.correct_state) { this.get_container().children("ul").empty(); }
							}
							if(e_call) { e_call.call(this); }
						};
						success_func = function (d, t, x) {
							var sf = this.get_settings().json_data.ajax.success; 
							if(sf) { d = sf.call(this,d,t,x) || d; }
							if(d === "" || (d && d.toString && d.toString().replace(/^[\s\n]+$/,"") === "") || (!$.isArray(d) && !$.isPlainObject(d))) {
								return error_func.call(this, x, t, "");
							}
							d = this._parse_json(d, obj);
							if(d) {
								if(obj === -1 || !obj) { this.get_container().children("ul").empty().append(d.children()); }
								else { obj.append(d).children("a.jstree-loading").removeClass("jstree-loading"); obj.removeData("jstree_is_loading"); }
								this.clean_node(obj);
								if(s_call) { s_call.call(this); }
							}
							else {
								if(obj === -1 || !obj) {
									if(s.correct_state) { 
										this.get_container().children("ul").empty(); 
										if(s_call) { s_call.call(this); }
									}
								}
								else {
									obj.children("a.jstree-loading").removeClass("jstree-loading");
									obj.removeData("jstree_is_loading");
									if(s.correct_state) { 
										this.correct_state(obj);
										if(s_call) { s_call.call(this); } 
									}
								}
							}
						};
						s.ajax.context = this;
						s.ajax.error = error_func;
						s.ajax.success = success_func;
						if(!s.ajax.dataType) { s.ajax.dataType = "json"; }
						if($.isFunction(s.ajax.url)) { s.ajax.url = s.ajax.url.call(this, obj); }
						if($.isFunction(s.ajax.data)) { s.ajax.data = s.ajax.data.call(this, obj); }
						$.ajax(s.ajax);
						break;
				}
			},
			_parse_json : function (js, obj, is_callback) {
				var d = false, 
					p = this._get_settings(),
					s = p.json_data,
					t = p.core.html_titles,
					tmp, i, j, ul1, ul2;

				if(!js) { return d; }
				if(s.progressive_unload && obj && obj !== -1) { 
					obj.data("jstree_children", d);
				}
				if($.isArray(js)) {
					d = $();
					if(!js.length) { return false; }
					for(i = 0, j = js.length; i < j; i++) {
						tmp = this._parse_json(js[i], obj, true);
						if(tmp.length) { d = d.add(tmp); }
					}
				}
				else {
					if(typeof js == "string") { js = { data : js }; }
					if(!js.data && js.data !== "") { return d; }
					d = $("<li />");
					if(js.attr) { d.attr(js.attr); }
					if(js.metadata) { d.data(js.metadata); }
					if(js.state) { d.addClass("jstree-" + js.state); }
					if(!$.isArray(js.data)) { tmp = js.data; js.data = []; js.data.push(tmp); }
					$.each(js.data, function (i, m) {
						tmp = $("<a />");
						if($.isFunction(m)) { m = m.call(this, js); }
						if(typeof m == "string") { tmp.attr('href','#')[ t ? "html" : "text" ](m); }
						else {
							if(!m.attr) { m.attr = {}; }
							if(!m.attr.href) { m.attr.href = '#'; }
							tmp.attr(m.attr)[ t ? "html" : "text" ](m.title);
							if(m.language) { tmp.addClass(m.language); }
						}
						tmp.prepend("<ins class='jstree-icon'>&#160;</ins>");
						if(!m.icon && js.icon) { m.icon = js.icon; }
						if(m.icon) { 
							if(m.icon.indexOf("/") === -1) { tmp.children("ins").addClass(m.icon); }
							else { tmp.children("ins").css("background","url('" + m.icon + "') center center no-repeat"); }
						}
						d.append(tmp);
					});
					d.prepend("<ins class='jstree-icon'>&#160;</ins>");
					if(js.children) { 
						if(s.progressive_render && js.state !== "open") {
							d.addClass("jstree-closed").data("jstree_children", js.children);
						}
						else {
							if(s.progressive_unload) { d.data("jstree_children", js.children); }
							if($.isArray(js.children) && js.children.length) {
								tmp = this._parse_json(js.children, obj, true);
								if(tmp.length) {
									ul2 = $("<ul />");
									ul2.append(tmp);
									d.append(ul2);
								}
							}
						}
					}
				}
				if(!is_callback) {
					ul1 = $("<ul />");
					ul1.append(d);
					d = ul1;
				}
				return d;
			},
			get_json : function (obj, li_attr, a_attr, is_callback) {
				var result = [], 
					s = this._get_settings(), 
					_this = this,
					tmp1, tmp2, li, a, t, lang;
				obj = this._get_node(obj);
				if(!obj || obj === -1) { obj = this.get_container().find("> ul > li"); }
				li_attr = $.isArray(li_attr) ? li_attr : [ "id", "class" ];
				if(!is_callback && this.data.types) { li_attr.push(s.types.type_attr); }
				a_attr = $.isArray(a_attr) ? a_attr : [ ];

				obj.each(function () {
					li = $(this);
					tmp1 = { data : [] };
					if(li_attr.length) { tmp1.attr = { }; }
					$.each(li_attr, function (i, v) { 
						tmp2 = li.attr(v); 
						if(tmp2 && tmp2.length && tmp2.replace(/jstree[^ ]*/ig,'').length) {
							tmp1.attr[v] = (" " + tmp2).replace(/ jstree[^ ]*/ig,'').replace(/\s+$/ig," ").replace(/^ /,"").replace(/ $/,""); 
						}
					});
					if(li.hasClass("jstree-open")) { tmp1.state = "open"; }
					if(li.hasClass("jstree-closed")) { tmp1.state = "closed"; }
					if(li.data()) { tmp1.metadata = li.data(); }
					a = li.children("a");
					a.each(function () {
						t = $(this);
						if(
							a_attr.length || 
							$.inArray("languages", s.plugins) !== -1 || 
							t.children("ins").get(0).style.backgroundImage.length || 
							(t.children("ins").get(0).className && t.children("ins").get(0).className.replace(/jstree[^ ]*|$/ig,'').length)
						) { 
							lang = false;
							if($.inArray("languages", s.plugins) !== -1 && $.isArray(s.languages) && s.languages.length) {
								$.each(s.languages, function (l, lv) {
									if(t.hasClass(lv)) {
										lang = lv;
										return false;
									}
								});
							}
							tmp2 = { attr : { }, title : _this.get_text(t, lang) }; 
							$.each(a_attr, function (k, z) {
								tmp2.attr[z] = (" " + (t.attr(z) || "")).replace(/ jstree[^ ]*/ig,'').replace(/\s+$/ig," ").replace(/^ /,"").replace(/ $/,"");
							});
							if($.inArray("languages", s.plugins) !== -1 && $.isArray(s.languages) && s.languages.length) {
								$.each(s.languages, function (k, z) {
									if(t.hasClass(z)) { tmp2.language = z; return true; }
								});
							}
							if(t.children("ins").get(0).className.replace(/jstree[^ ]*|$/ig,'').replace(/^\s+$/ig,"").length) {
								tmp2.icon = t.children("ins").get(0).className.replace(/jstree[^ ]*|$/ig,'').replace(/\s+$/ig," ").replace(/^ /,"").replace(/ $/,"");
							}
							if(t.children("ins").get(0).style.backgroundImage.length) {
								tmp2.icon = t.children("ins").get(0).style.backgroundImage.replace("url(","").replace(")","");
							}
						}
						else {
							tmp2 = _this.get_text(t);
						}
						if(a.length > 1) { tmp1.data.push(tmp2); }
						else { tmp1.data = tmp2; }
					});
					li = li.find("> ul > li");
					if(li.length) { tmp1.children = _this.get_json(li, li_attr, a_attr, true); }
					result.push(tmp1);
				});
				return result;
			}
		}
	});
})(jQuery);
//*/

/* 
 * jsTree languages plugin
 * Adds support for multiple language versions in one tree
 * This basically allows for many titles coexisting in one node, but only one of them being visible at any given time
 * This is useful for maintaining the same structure in many languages (hence the name of the plugin)
 */
(function ($) {
	$.jstree.plugin("languages", {
		__init : function () { this._load_css();  },
		defaults : [],
		_fn : {
			set_lang : function (i) { 
				var langs = this._get_settings().languages,
					st = false,
					selector = ".jstree-" + this.get_index() + ' a';
				if(!$.isArray(langs) || langs.length === 0) { return false; }
				if($.inArray(i,langs) == -1) {
					if(!!langs[i]) { i = langs[i]; }
					else { return false; }
				}
				if(i == this.data.languages.current_language) { return true; }
				st = $.vakata.css.get_css(selector + "." + this.data.languages.current_language, false, this.data.languages.language_css);
				if(st !== false) { st.style.display = "none"; }
				st = $.vakata.css.get_css(selector + "." + i, false, this.data.languages.language_css);
				if(st !== false) { st.style.display = ""; }
				this.data.languages.current_language = i;
				this.__callback(i);
				return true;
			},
			get_lang : function () {
				return this.data.languages.current_language;
			},
			_get_string : function (key, lang) {
				var langs = this._get_settings().languages,
					s = this._get_settings().core.strings;
				if($.isArray(langs) && langs.length) {
					lang = (lang && $.inArray(lang,langs) != -1) ? lang : this.data.languages.current_language;
				}
				if(s[lang] && s[lang][key]) { return s[lang][key]; }
				if(s[key]) { return s[key]; }
				return key;
			},
			get_text : function (obj, lang) {
				obj = this._get_node(obj) || this.data.ui.last_selected;
				if(!obj.size()) { return false; }
				var langs = this._get_settings().languages,
					s = this._get_settings().core.html_titles;
				if($.isArray(langs) && langs.length) {
					lang = (lang && $.inArray(lang,langs) != -1) ? lang : this.data.languages.current_language;
					obj = obj.children("a." + lang);
				}
				else { obj = obj.children("a:eq(0)"); }
				if(s) {
					obj = obj.clone();
					obj.children("INS").remove();
					return obj.html();
				}
				else {
					obj = obj.contents().filter(function() { return this.nodeType == 3; })[0];
					return obj.nodeValue;
				}
			},
			set_text : function (obj, val, lang) {
				obj = this._get_node(obj) || this.data.ui.last_selected;
				if(!obj.size()) { return false; }
				var langs = this._get_settings().languages,
					s = this._get_settings().core.html_titles,
					tmp;
				if($.isArray(langs) && langs.length) {
					lang = (lang && $.inArray(lang,langs) != -1) ? lang : this.data.languages.current_language;
					obj = obj.children("a." + lang);
				}
				else { obj = obj.children("a:eq(0)"); }
				if(s) {
					tmp = obj.children("INS").clone();
					obj.html(val).prepend(tmp);
					this.__callback({ "obj" : obj, "name" : val, "lang" : lang });
					return true;
				}
				else {
					obj = obj.contents().filter(function() { return this.nodeType == 3; })[0];
					this.__callback({ "obj" : obj, "name" : val, "lang" : lang });
					return (obj.nodeValue = val);
				}
			},
			_load_css : function () {
				var langs = this._get_settings().languages,
					str = "/* languages css */",
					selector = ".jstree-" + this.get_index() + ' a',
					ln;
				if($.isArray(langs) && langs.length) {
					this.data.languages.current_language = langs[0];
					for(ln = 0; ln < langs.length; ln++) {
						str += selector + "." + langs[ln] + " {";
						if(langs[ln] != this.data.languages.current_language) { str += " display:none; "; }
						str += " } ";
					}
					this.data.languages.language_css = $.vakata.css.add_sheet({ 'str' : str, 'title' : "jstree-languages" });
				}
			},
			create_node : function (obj, position, js, callback) {
				var t = this.__call_old(true, obj, position, js, function (t) {
					var langs = this._get_settings().languages,
						a = t.children("a"),
						ln;
					if($.isArray(langs) && langs.length) {
						for(ln = 0; ln < langs.length; ln++) {
							if(!a.is("." + langs[ln])) {
								t.append(a.eq(0).clone().removeClass(langs.join(" ")).addClass(langs[ln]));
							}
						}
						a.not("." + langs.join(", .")).remove();
					}
					if(callback) { callback.call(this, t); }
				});
				return t;
			}
		}
	});
})(jQuery);
//*/

/*
 * jsTree cookies plugin
 * Stores the currently opened/selected nodes in a cookie and then restores them
 * Depends on the jquery.cookie plugin
 */
(function ($) {
	$.jstree.plugin("cookies", {
		__init : function () {
			if(typeof $.cookie === "undefined") { throw "jsTree cookie: jQuery cookie plugin not included."; }

			var s = this._get_settings().cookies,
				tmp;
			if(!!s.save_loaded) {
				tmp = $.cookie(s.save_loaded);
				if(tmp && tmp.length) { this.data.core.to_load = tmp.split(","); }
			}
			if(!!s.save_opened) {
				tmp = $.cookie(s.save_opened);
				if(tmp && tmp.length) { this.data.core.to_open = tmp.split(","); }
			}
			if(!!s.save_selected) {
				tmp = $.cookie(s.save_selected);
				if(tmp && tmp.length && this.data.ui) { this.data.ui.to_select = tmp.split(","); }
			}
			this.get_container()
				.one( ( this.data.ui ? "reselect" : "reopen" ) + ".jstree", $.proxy(function () {
					this.get_container()
						.bind("open_node.jstree close_node.jstree select_node.jstree deselect_node.jstree", $.proxy(function (e) { 
								if(this._get_settings().cookies.auto_save) { this.save_cookie((e.handleObj.namespace + e.handleObj.type).replace("jstree","")); }
							}, this));
				}, this));
		},
		defaults : {
			save_loaded		: "jstree_load",
			save_opened		: "jstree_open",
			save_selected	: "jstree_select",
			auto_save		: true,
			cookie_options	: {}
		},
		_fn : {
			save_cookie : function (c) {
				if(this.data.core.refreshing) { return; }
				var s = this._get_settings().cookies;
				if(!c) { // if called manually and not by event
					if(s.save_loaded) {
						this.save_loaded();
						$.cookie(s.save_loaded, this.data.core.to_load.join(","), s.cookie_options);
					}
					if(s.save_opened) {
						this.save_opened();
						$.cookie(s.save_opened, this.data.core.to_open.join(","), s.cookie_options);
					}
					if(s.save_selected && this.data.ui) {
						this.save_selected();
						$.cookie(s.save_selected, this.data.ui.to_select.join(","), s.cookie_options);
					}
					return;
				}
				switch(c) {
					case "open_node":
					case "close_node":
						if(!!s.save_opened) { 
							this.save_opened(); 
							$.cookie(s.save_opened, this.data.core.to_open.join(","), s.cookie_options); 
						}
						if(!!s.save_loaded) { 
							this.save_loaded(); 
							$.cookie(s.save_loaded, this.data.core.to_load.join(","), s.cookie_options); 
						}
						break;
					case "select_node":
					case "deselect_node":
						if(!!s.save_selected && this.data.ui) { 
							this.save_selected(); 
							$.cookie(s.save_selected, this.data.ui.to_select.join(","), s.cookie_options); 
						}
						break;
				}
			}
		}
	});
	// include cookies by default
	// $.jstree.defaults.plugins.push("cookies");
})(jQuery);
//*/

/*
 * jsTree sort plugin
 * Sorts items alphabetically (or using any other function)
 */
(function ($) {
	$.jstree.plugin("sort", {
		__init : function () {
			this.get_container()
				.bind("load_node.jstree", $.proxy(function (e, data) {
						var obj = this._get_node(data.rslt.obj);
						obj = obj === -1 ? this.get_container().children("ul") : obj.children("ul");
						this.sort(obj);
					}, this))
				.bind("rename_node.jstree create_node.jstree create.jstree", $.proxy(function (e, data) {
						this.sort(data.rslt.obj.parent());
					}, this))
				.bind("move_node.jstree", $.proxy(function (e, data) {
						var m = data.rslt.np == -1 ? this.get_container() : data.rslt.np;
						this.sort(m.children("ul"));
					}, this));
		},
		defaults : function (a, b) { return this.get_text(a) > this.get_text(b) ? 1 : -1; },
		_fn : {
			sort : function (obj) {
				var s = this._get_settings().sort,
					t = this;
				obj.append($.makeArray(obj.children("li")).sort($.proxy(s, t)));
				obj.find("> li > ul").each(function() { t.sort($(this)); });
				this.clean_node(obj);
			}
		}
	});
})(jQuery);
//*/

/*
 * jsTree DND plugin
 * Drag and drop plugin for moving/copying nodes
 */
(function ($) {
	var o = false,
		r = false,
		m = false,
		ml = false,
		sli = false,
		sti = false,
		dir1 = false,
		dir2 = false,
		last_pos = false;
	$.vakata.dnd = {
		is_down : false,
		is_drag : false,
		helper : false,
		scroll_spd : 10,
		init_x : 0,
		init_y : 0,
		threshold : 5,
		helper_left : 5,
		helper_top : 10,
		user_data : {},

		drag_start : function (e, data, html) { 
			if($.vakata.dnd.is_drag) { $.vakata.drag_stop({}); }
			try {
				e.currentTarget.unselectable = "on";
				e.currentTarget.onselectstart = function() { return false; };
				if(e.currentTarget.style) { e.currentTarget.style.MozUserSelect = "none"; }
			} catch(err) { }
			$.vakata.dnd.init_x = e.pageX;
			$.vakata.dnd.init_y = e.pageY;
			$.vakata.dnd.user_data = data;
			$.vakata.dnd.is_down = true;
			$.vakata.dnd.helper = $("<div id='vakata-dragged' />").html(html); //.fadeTo(10,0.25);
			$(document).bind("mousemove", $.vakata.dnd.drag);
			$(document).bind("mouseup", $.vakata.dnd.drag_stop);
			return false;
		},
		drag : function (e) { 
			if(!$.vakata.dnd.is_down) { return; }
			if(!$.vakata.dnd.is_drag) {
				if(Math.abs(e.pageX - $.vakata.dnd.init_x) > 5 || Math.abs(e.pageY - $.vakata.dnd.init_y) > 5) { 
					$.vakata.dnd.helper.appendTo("body");
					$.vakata.dnd.is_drag = true;
					$(document).triggerHandler("drag_start.vakata", { "event" : e, "data" : $.vakata.dnd.user_data });
				}
				else { return; }
			}

			// maybe use a scrolling parent element instead of document?
			if(e.type === "mousemove") { // thought of adding scroll in order to move the helper, but mouse poisition is n/a
				var d = $(document), t = d.scrollTop(), l = d.scrollLeft();
				if(e.pageY - t < 20) { 
					if(sti && dir1 === "down") { clearInterval(sti); sti = false; }
					if(!sti) { dir1 = "up"; sti = setInterval(function () { $(document).scrollTop($(document).scrollTop() - $.vakata.dnd.scroll_spd); }, 150); }
				}
				else { 
					if(sti && dir1 === "up") { clearInterval(sti); sti = false; }
				}
				if($(window).height() - (e.pageY - t) < 20) {
					if(sti && dir1 === "up") { clearInterval(sti); sti = false; }
					if(!sti) { dir1 = "down"; sti = setInterval(function () { $(document).scrollTop($(document).scrollTop() + $.vakata.dnd.scroll_spd); }, 150); }
				}
				else { 
					if(sti && dir1 === "down") { clearInterval(sti); sti = false; }
				}

				if(e.pageX - l < 20) {
					if(sli && dir2 === "right") { clearInterval(sli); sli = false; }
					if(!sli) { dir2 = "left"; sli = setInterval(function () { $(document).scrollLeft($(document).scrollLeft() - $.vakata.dnd.scroll_spd); }, 150); }
				}
				else { 
					if(sli && dir2 === "left") { clearInterval(sli); sli = false; }
				}
				if($(window).width() - (e.pageX - l) < 20) {
					if(sli && dir2 === "left") { clearInterval(sli); sli = false; }
					if(!sli) { dir2 = "right"; sli = setInterval(function () { $(document).scrollLeft($(document).scrollLeft() + $.vakata.dnd.scroll_spd); }, 150); }
				}
				else { 
					if(sli && dir2 === "right") { clearInterval(sli); sli = false; }
				}
			}

			$.vakata.dnd.helper.css({ left : (e.pageX + $.vakata.dnd.helper_left) + "px", top : (e.pageY + $.vakata.dnd.helper_top) + "px" });
			$(document).triggerHandler("drag.vakata", { "event" : e, "data" : $.vakata.dnd.user_data });
		},
		drag_stop : function (e) {
			if(sli) { clearInterval(sli); }
			if(sti) { clearInterval(sti); }
			$(document).unbind("mousemove", $.vakata.dnd.drag);
			$(document).unbind("mouseup", $.vakata.dnd.drag_stop);
			$(document).triggerHandler("drag_stop.vakata", { "event" : e, "data" : $.vakata.dnd.user_data });
			$.vakata.dnd.helper.remove();
			$.vakata.dnd.init_x = 0;
			$.vakata.dnd.init_y = 0;
			$.vakata.dnd.user_data = {};
			$.vakata.dnd.is_down = false;
			$.vakata.dnd.is_drag = false;
		}
	};
	$(function() {
		var css_string = '#vakata-dragged { display:block; margin:0 0 0 0; padding:4px 4px 4px 24px; position:absolute; top:-2000px; line-height:16px; z-index:10000; } ';
		$.vakata.css.add_sheet({ str : css_string, title : "vakata" });
	});

	$.jstree.plugin("dnd", {
		__init : function () {
			this.data.dnd = {
				active : false,
				after : false,
				inside : false,
				before : false,
				off : false,
				prepared : false,
				w : 0,
				to1 : false,
				to2 : false,
				cof : false,
				cw : false,
				ch : false,
				i1 : false,
				i2 : false,
				mto : false
			};
			this.get_container()
				.bind("mouseenter.jstree", $.proxy(function (e) {
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree) {
							if(this.data.themes) {
								m.attr("class", "jstree-" + this.data.themes.theme); 
								if(ml) { ml.attr("class", "jstree-" + this.data.themes.theme); }
								$.vakata.dnd.helper.attr("class", "jstree-dnd-helper jstree-" + this.data.themes.theme);
							}
							//if($(e.currentTarget).find("> ul > li").length === 0) {
							if(e.currentTarget === e.target && $.vakata.dnd.user_data.obj && $($.vakata.dnd.user_data.obj).length && $($.vakata.dnd.user_data.obj).parents(".jstree:eq(0)")[0] !== e.target) { // node should not be from the same tree
								var tr = $.jstree._reference(e.target), dc;
								if(tr.data.dnd.foreign) {
									dc = tr._get_settings().dnd.drag_check.call(this, { "o" : o, "r" : tr.get_container(), is_root : true });
									if(dc === true || dc.inside === true || dc.before === true || dc.after === true) {
										$.vakata.dnd.helper.children("ins").attr("class","jstree-ok");
									}
								}
								else {
									tr.prepare_move(o, tr.get_container(), "last");
									if(tr.check_move()) {
										$.vakata.dnd.helper.children("ins").attr("class","jstree-ok");
									}
								}
							}
						}
					}, this))
				.bind("mouseup.jstree", $.proxy(function (e) {
						//if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree && $(e.currentTarget).find("> ul > li").length === 0) {
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree && e.currentTarget === e.target && $.vakata.dnd.user_data.obj && $($.vakata.dnd.user_data.obj).length && $($.vakata.dnd.user_data.obj).parents(".jstree:eq(0)")[0] !== e.target) { // node should not be from the same tree
							var tr = $.jstree._reference(e.currentTarget), dc;
							if(tr.data.dnd.foreign) {
								dc = tr._get_settings().dnd.drag_check.call(this, { "o" : o, "r" : tr.get_container(), is_root : true });
								if(dc === true || dc.inside === true || dc.before === true || dc.after === true) {
									tr._get_settings().dnd.drag_finish.call(this, { "o" : o, "r" : tr.get_container(), is_root : true });
								}
							}
							else {
								tr.move_node(o, tr.get_container(), "last", e[tr._get_settings().dnd.copy_modifier + "Key"]);
							}
						}
					}, this))
				.bind("mouseleave.jstree", $.proxy(function (e) {
						if(e.relatedTarget && e.relatedTarget.id && e.relatedTarget.id === "jstree-marker-line") {
							return false; 
						}
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree) {
							if(this.data.dnd.i1) { clearInterval(this.data.dnd.i1); }
							if(this.data.dnd.i2) { clearInterval(this.data.dnd.i2); }
							if(this.data.dnd.to1) { clearTimeout(this.data.dnd.to1); }
							if(this.data.dnd.to2) { clearTimeout(this.data.dnd.to2); }
							if($.vakata.dnd.helper.children("ins").hasClass("jstree-ok")) {
								$.vakata.dnd.helper.children("ins").attr("class","jstree-invalid");
							}
						}
					}, this))
				.bind("mousemove.jstree", $.proxy(function (e) {
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree) {
							var cnt = this.get_container()[0];

							// Horizontal scroll
							if(e.pageX + 24 > this.data.dnd.cof.left + this.data.dnd.cw) {
								if(this.data.dnd.i1) { clearInterval(this.data.dnd.i1); }
								this.data.dnd.i1 = setInterval($.proxy(function () { this.scrollLeft += $.vakata.dnd.scroll_spd; }, cnt), 100);
							}
							else if(e.pageX - 24 < this.data.dnd.cof.left) {
								if(this.data.dnd.i1) { clearInterval(this.data.dnd.i1); }
								this.data.dnd.i1 = setInterval($.proxy(function () { this.scrollLeft -= $.vakata.dnd.scroll_spd; }, cnt), 100);
							}
							else {
								if(this.data.dnd.i1) { clearInterval(this.data.dnd.i1); }
							}

							// Vertical scroll
							if(e.pageY + 24 > this.data.dnd.cof.top + this.data.dnd.ch) {
								if(this.data.dnd.i2) { clearInterval(this.data.dnd.i2); }
								this.data.dnd.i2 = setInterval($.proxy(function () { this.scrollTop += $.vakata.dnd.scroll_spd; }, cnt), 100);
							}
							else if(e.pageY - 24 < this.data.dnd.cof.top) {
								if(this.data.dnd.i2) { clearInterval(this.data.dnd.i2); }
								this.data.dnd.i2 = setInterval($.proxy(function () { this.scrollTop -= $.vakata.dnd.scroll_spd; }, cnt), 100);
							}
							else {
								if(this.data.dnd.i2) { clearInterval(this.data.dnd.i2); }
							}

						}
					}, this))
				.bind("scroll.jstree", $.proxy(function (e) { 
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree && m && ml) {
							m.hide();
							ml.hide();
						}
					}, this))
				.delegate("a", "mousedown.jstree", $.proxy(function (e) { 
						if(e.which === 1) {
							this.start_drag(e.currentTarget, e);
							return false;
						}
					}, this))
				.delegate("a", "mouseenter.jstree", $.proxy(function (e) { 
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree) {
							this.dnd_enter(e.currentTarget);
						}
					}, this))
				.delegate("a", "mousemove.jstree", $.proxy(function (e) { 
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree) {
							if(!r || !r.length || r.children("a")[0] !== e.currentTarget) {
								this.dnd_enter(e.currentTarget);
							}
							if(typeof this.data.dnd.off.top === "undefined") { this.data.dnd.off = $(e.target).offset(); }
							this.data.dnd.w = (e.pageY - (this.data.dnd.off.top || 0)) % this.data.core.li_height;
							if(this.data.dnd.w < 0) { this.data.dnd.w += this.data.core.li_height; }
							this.dnd_show();
						}
					}, this))
				.delegate("a", "mouseleave.jstree", $.proxy(function (e) { 
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree) {
							if(e.relatedTarget && e.relatedTarget.id && e.relatedTarget.id === "jstree-marker-line") {
								return false; 
							}
								if(m) { m.hide(); }
								if(ml) { ml.hide(); }
							/*
							var ec = $(e.currentTarget).closest("li"), 
								er = $(e.relatedTarget).closest("li");
							if(er[0] !== ec.prev()[0] && er[0] !== ec.next()[0]) {
								if(m) { m.hide(); }
								if(ml) { ml.hide(); }
							}
							*/
							this.data.dnd.mto = setTimeout( 
								(function (t) { return function () { t.dnd_leave(e); }; })(this),
							0);
						}
					}, this))
				.delegate("a", "mouseup.jstree", $.proxy(function (e) { 
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree) {
							this.dnd_finish(e);
						}
					}, this));

			$(document)
				.bind("drag_stop.vakata", $.proxy(function () {
						if(this.data.dnd.to1) { clearTimeout(this.data.dnd.to1); }
						if(this.data.dnd.to2) { clearTimeout(this.data.dnd.to2); }
						if(this.data.dnd.i1) { clearInterval(this.data.dnd.i1); }
						if(this.data.dnd.i2) { clearInterval(this.data.dnd.i2); }
						this.data.dnd.after		= false;
						this.data.dnd.before	= false;
						this.data.dnd.inside	= false;
						this.data.dnd.off		= false;
						this.data.dnd.prepared	= false;
						this.data.dnd.w			= false;
						this.data.dnd.to1		= false;
						this.data.dnd.to2		= false;
						this.data.dnd.i1		= false;
						this.data.dnd.i2		= false;
						this.data.dnd.active	= false;
						this.data.dnd.foreign	= false;
						if(m) { m.css({ "top" : "-2000px" }); }
						if(ml) { ml.css({ "top" : "-2000px" }); }
					}, this))
				.bind("drag_start.vakata", $.proxy(function (e, data) {
						if(data.data.jstree) { 
							var et = $(data.event.target);
							if(et.closest(".jstree").hasClass("jstree-" + this.get_index())) {
								this.dnd_enter(et);
							}
						}
					}, this));
				/*
				.bind("keydown.jstree-" + this.get_index() + " keyup.jstree-" + this.get_index(), $.proxy(function(e) {
						if($.vakata.dnd.is_drag && $.vakata.dnd.user_data.jstree && !this.data.dnd.foreign) {
							var h = $.vakata.dnd.helper.children("ins");
							if(e[this._get_settings().dnd.copy_modifier + "Key"] && h.hasClass("jstree-ok")) {
								h.parent().html(h.parent().html().replace(/ \(Copy\)$/, "") + " (Copy)");
							} 
							else {
								h.parent().html(h.parent().html().replace(/ \(Copy\)$/, ""));
							}
						}
					}, this)); */



			var s = this._get_settings().dnd;
			if(s.drag_target) {
				$(document)
					.delegate(s.drag_target, "mousedown.jstree-" + this.get_index(), $.proxy(function (e) {
						o = e.target;
						$.vakata.dnd.drag_start(e, { jstree : true, obj : e.target }, "<ins class='jstree-icon'></ins>" + $(e.target).text() );
						if(this.data.themes) { 
							if(m) { m.attr("class", "jstree-" + this.data.themes.theme); }
							if(ml) { ml.attr("class", "jstree-" + this.data.themes.theme); }
							$.vakata.dnd.helper.attr("class", "jstree-dnd-helper jstree-" + this.data.themes.theme); 
						}
						$.vakata.dnd.helper.children("ins").attr("class","jstree-invalid");
						var cnt = this.get_container();
						this.data.dnd.cof = cnt.offset();
						this.data.dnd.cw = parseInt(cnt.width(),10);
						this.data.dnd.ch = parseInt(cnt.height(),10);
						this.data.dnd.foreign = true;
						e.preventDefault();
					}, this));
			}
			if(s.drop_target) {
				$(document)
					.delegate(s.drop_target, "mouseenter.jstree-" + this.get_index(), $.proxy(function (e) {
							if(this.data.dnd.active && this._get_settings().dnd.drop_check.call(this, { "o" : o, "r" : $(e.target), "e" : e })) {
								$.vakata.dnd.helper.children("ins").attr("class","jstree-ok");
							}
						}, this))
					.delegate(s.drop_target, "mouseleave.jstree-" + this.get_index(), $.proxy(function (e) {
							if(this.data.dnd.active) {
								$.vakata.dnd.helper.children("ins").attr("class","jstree-invalid");
							}
						}, this))
					.delegate(s.drop_target, "mouseup.jstree-" + this.get_index(), $.proxy(function (e) {
							if(this.data.dnd.active && $.vakata.dnd.helper.children("ins").hasClass("jstree-ok")) {
								this._get_settings().dnd.drop_finish.call(this, { "o" : o, "r" : $(e.target), "e" : e });
							}
						}, this));
			}
		},
		defaults : {
			copy_modifier	: "ctrl",
			check_timeout	: 100,
			open_timeout	: 500,
			drop_target		: ".jstree-drop",
			drop_check		: function (data) { return true; },
			drop_finish		: $.noop,
			drag_target		: ".jstree-draggable",
			drag_finish		: $.noop,
			drag_check		: function (data) { return { after : false, before : false, inside : true }; }
		},
		_fn : {
			dnd_prepare : function () {
				if(!r || !r.length) { return; }
				this.data.dnd.off = r.offset();
				if(this._get_settings().core.rtl) {
					this.data.dnd.off.right = this.data.dnd.off.left + r.width();
				}
				if(this.data.dnd.foreign) {
					var a = this._get_settings().dnd.drag_check.call(this, { "o" : o, "r" : r });
					this.data.dnd.after = a.after;
					this.data.dnd.before = a.before;
					this.data.dnd.inside = a.inside;
					this.data.dnd.prepared = true;
					return this.dnd_show();
				}
				this.prepare_move(o, r, "before");
				this.data.dnd.before = this.check_move();
				this.prepare_move(o, r, "after");
				this.data.dnd.after = this.check_move();
				if(this._is_loaded(r)) {
					this.prepare_move(o, r, "inside");
					this.data.dnd.inside = this.check_move();
				}
				else {
					this.data.dnd.inside = false;
				}
				this.data.dnd.prepared = true;
				return this.dnd_show();
			},
			dnd_show : function () {
				if(!this.data.dnd.prepared) { return; }
				var o = ["before","inside","after"],
					r = false,
					rtl = this._get_settings().core.rtl,
					pos;
				if(this.data.dnd.w < this.data.core.li_height/3) { o = ["before","inside","after"]; }
				else if(this.data.dnd.w <= this.data.core.li_height*2/3) {
					o = this.data.dnd.w < this.data.core.li_height/2 ? ["inside","before","after"] : ["inside","after","before"];
				}
				else { o = ["after","inside","before"]; }
				$.each(o, $.proxy(function (i, val) { 
					if(this.data.dnd[val]) {
						$.vakata.dnd.helper.children("ins").attr("class","jstree-ok");
						r = val;
						return false;
					}
				}, this));
				if(r === false) { $.vakata.dnd.helper.children("ins").attr("class","jstree-invalid"); }
				
				pos = rtl ? (this.data.dnd.off.right - 18) : (this.data.dnd.off.left + 10);
				switch(r) {
					case "before":
						m.css({ "left" : pos + "px", "top" : (this.data.dnd.off.top - 6) + "px" }).show();
						if(ml) { ml.css({ "left" : (pos + 8) + "px", "top" : (this.data.dnd.off.top - 1) + "px" }).show(); }
						break;
					case "after":
						m.css({ "left" : pos + "px", "top" : (this.data.dnd.off.top + this.data.core.li_height - 6) + "px" }).show();
						if(ml) { ml.css({ "left" : (pos + 8) + "px", "top" : (this.data.dnd.off.top + this.data.core.li_height - 1) + "px" }).show(); }
						break;
					case "inside":
						m.css({ "left" : pos + ( rtl ? -4 : 4) + "px", "top" : (this.data.dnd.off.top + this.data.core.li_height/2 - 5) + "px" }).show();
						if(ml) { ml.hide(); }
						break;
					default:
						m.hide();
						if(ml) { ml.hide(); }
						break;
				}
				last_pos = r;
				return r;
			},
			dnd_open : function () {
				this.data.dnd.to2 = false;
				this.open_node(r, $.proxy(this.dnd_prepare,this), true);
			},
			dnd_finish : function (e) {
				if(this.data.dnd.foreign) {
					if(this.data.dnd.after || this.data.dnd.before || this.data.dnd.inside) {
						this._get_settings().dnd.drag_finish.call(this, { "o" : o, "r" : r, "p" : last_pos });
					}
				}
				else {
					this.dnd_prepare();
					this.move_node(o, r, last_pos, e[this._get_settings().dnd.copy_modifier + "Key"]);
				}
				o = false;
				r = false;
				m.hide();
				if(ml) { ml.hide(); }
			},
			dnd_enter : function (obj) {
				if(this.data.dnd.mto) { 
					clearTimeout(this.data.dnd.mto);
					this.data.dnd.mto = false;
				}
				var s = this._get_settings().dnd;
				this.data.dnd.prepared = false;
				r = this._get_node(obj);
				if(s.check_timeout) { 
					// do the calculations after a minimal timeout (users tend to drag quickly to the desired location)
					if(this.data.dnd.to1) { clearTimeout(this.data.dnd.to1); }
					this.data.dnd.to1 = setTimeout($.proxy(this.dnd_prepare, this), s.check_timeout); 
				}
				else { 
					this.dnd_prepare(); 
				}
				if(s.open_timeout) { 
					if(this.data.dnd.to2) { clearTimeout(this.data.dnd.to2); }
					if(r && r.length && r.hasClass("jstree-closed")) { 
						// if the node is closed - open it, then recalculate
						this.data.dnd.to2 = setTimeout($.proxy(this.dnd_open, this), s.open_timeout);
					}
				}
				else {
					if(r && r.length && r.hasClass("jstree-closed")) { 
						this.dnd_open();
					}
				}
			},
			dnd_leave : function (e) {
				this.data.dnd.after		= false;
				this.data.dnd.before	= false;
				this.data.dnd.inside	= false;
				$.vakata.dnd.helper.children("ins").attr("class","jstree-invalid");
				m.hide();
				if(ml) { ml.hide(); }
				if(r && r[0] === e.target.parentNode) {
					if(this.data.dnd.to1) {
						clearTimeout(this.data.dnd.to1);
						this.data.dnd.to1 = false;
					}
					if(this.data.dnd.to2) {
						clearTimeout(this.data.dnd.to2);
						this.data.dnd.to2 = false;
					}
				}
			},
			start_drag : function (obj, e) {
				o = this._get_node(obj);
				if(this.data.ui && this.is_selected(o)) { o = this._get_node(null, true); }
				var dt = o.length > 1 ? this._get_string("multiple_selection") : this.get_text(o),
					cnt = this.get_container();
				if(!this._get_settings().core.html_titles) { dt = dt.replace(/</ig,"&lt;").replace(/>/ig,"&gt;"); }
				$.vakata.dnd.drag_start(e, { jstree : true, obj : o }, "<ins class='jstree-icon'></ins>" + dt );
				if(this.data.themes) { 
					if(m) { m.attr("class", "jstree-" + this.data.themes.theme); }
					if(ml) { ml.attr("class", "jstree-" + this.data.themes.theme); }
					$.vakata.dnd.helper.attr("class", "jstree-dnd-helper jstree-" + this.data.themes.theme); 
				}
				this.data.dnd.cof = cnt.offset();
				this.data.dnd.cw = parseInt(cnt.width(),10);
				this.data.dnd.ch = parseInt(cnt.height(),10);
				this.data.dnd.active = true;
			}
		}
	});
	$(function() {
		var css_string = '' + 
			'#vakata-dragged ins { display:block; text-decoration:none; width:16px; height:16px; margin:0 0 0 0; padding:0; position:absolute; top:4px; left:4px; ' + 
			' -moz-border-radius:4px; border-radius:4px; -webkit-border-radius:4px; ' +
			'} ' + 
			'#vakata-dragged .jstree-ok { background:green; } ' + 
			'#vakata-dragged .jstree-invalid { background:red; } ' + 
			'#jstree-marker { padding:0; margin:0; font-size:12px; overflow:hidden; height:12px; width:8px; position:absolute; top:-30px; z-index:10001; background-repeat:no-repeat; display:none; background-color:transparent; text-shadow:1px 1px 1px white; color:black; line-height:10px; } ' + 
			'#jstree-marker-line { padding:0; margin:0; line-height:0%; font-size:1px; overflow:hidden; height:1px; width:100px; position:absolute; top:-30px; z-index:10000; background-repeat:no-repeat; display:none; background-color:#456c43; ' + 
			' cursor:pointer; border:1px solid #eeeeee; border-left:0; -moz-box-shadow: 0px 0px 2px #666; -webkit-box-shadow: 0px 0px 2px #666; box-shadow: 0px 0px 2px #666; ' + 
			' -moz-border-radius:1px; border-radius:1px; -webkit-border-radius:1px; ' +
			'}' + 
			'';
		$.vakata.css.add_sheet({ str : css_string, title : "jstree" });
		m = $("<div />").attr({ id : "jstree-marker" }).hide().html("&raquo;")
			.bind("mouseleave mouseenter", function (e) { 
				m.hide();
				ml.hide();
				e.preventDefault(); 
				e.stopImmediatePropagation(); 
				return false; 
			})
			.appendTo("body");
		ml = $("<div />").attr({ id : "jstree-marker-line" }).hide()
			.bind("mouseup", function (e) { 
				if(r && r.length) { 
					r.children("a").trigger(e); 
					e.preventDefault(); 
					e.stopImmediatePropagation(); 
					return false; 
				} 
			})
			.bind("mouseleave", function (e) { 
				var rt = $(e.relatedTarget);
				if(rt.is(".jstree") || rt.closest(".jstree").length === 0) {
					if(r && r.length) { 
						r.children("a").trigger(e); 
						m.hide();
						ml.hide();
						e.preventDefault(); 
						e.stopImmediatePropagation(); 
						return false; 
					}
				}
			})
			.appendTo("body");
		$(document).bind("drag_start.vakata", function (e, data) {
			if(data.data.jstree) { m.show(); if(ml) { ml.show(); } }
		});
		$(document).bind("drag_stop.vakata", function (e, data) {
			if(data.data.jstree) { m.hide(); if(ml) { ml.hide(); } }
		});
	});
})(jQuery);
//*/

/*
 * jsTree checkbox plugin
 * Inserts checkboxes in front of every node
 * Depends on the ui plugin
 * DOES NOT WORK NICELY WITH MULTITREE DRAG'N'DROP
 */
(function ($) {
	$.jstree.plugin("checkbox", {
		__init : function () {
			this.data.checkbox.noui = this._get_settings().checkbox.override_ui;
			if(this.data.ui && this.data.checkbox.noui) {
				this.select_node = this.deselect_node = this.deselect_all = $.noop;
				this.get_selected = this.get_checked;
			}

			this.get_container()
				.bind("open_node.jstree create_node.jstree clean_node.jstree refresh.jstree", $.proxy(function (e, data) { 
						this._prepare_checkboxes(data.rslt.obj);
					}, this))
				.bind("loaded.jstree", $.proxy(function (e) {
						this._prepare_checkboxes();
					}, this))
				.delegate( (this.data.ui && this.data.checkbox.noui ? "a" : "ins.jstree-checkbox") , "click.jstree", $.proxy(function (e) {
						e.preventDefault();
						if(this._get_node(e.target).hasClass("jstree-checked")) { this.uncheck_node(e.target); }
						else { this.check_node(e.target); }
						if(this.data.ui && this.data.checkbox.noui) {
							this.save_selected();
							if(this.data.cookies) { this.save_cookie("select_node"); }
						}
						else {
							e.stopImmediatePropagation();
							return false;
						}
					}, this));
		},
		defaults : {
			override_ui : false,
			two_state : false,
			real_checkboxes : false,
			checked_parent_open : true,
			real_checkboxes_names : function (n) { return [ ("check_" + (n[0].id || Math.ceil(Math.random() * 10000))) , 1]; }
		},
		__destroy : function () {
			this.get_container()
				.find("input.jstree-real-checkbox").removeClass("jstree-real-checkbox").end()
				.find("ins.jstree-checkbox").remove();
		},
		_fn : {
			_checkbox_notify : function (n, data) {
				if(data.checked) {
					this.check_node(n, false);
				}
			},
			_prepare_checkboxes : function (obj) {
				obj = !obj || obj == -1 ? this.get_container().find("> ul > li") : this._get_node(obj);
				if(obj === false) { return; } // added for removing root nodes
				var c, _this = this, t, ts = this._get_settings().checkbox.two_state, rc = this._get_settings().checkbox.real_checkboxes, rcn = this._get_settings().checkbox.real_checkboxes_names;
				obj.each(function () {
					t = $(this);
					c = t.is("li") && (t.hasClass("jstree-checked") || (rc && t.children(":checked").length)) ? "jstree-checked" : "jstree-unchecked";
					t.find("li").andSelf().each(function () {
						var $t = $(this), nm;
						$t.children("a" + (_this.data.languages ? "" : ":eq(0)") ).not(":has(.jstree-checkbox)").prepend("<ins class='jstree-checkbox'>&#160;</ins>").parent().not(".jstree-checked, .jstree-unchecked").addClass( ts ? "jstree-unchecked" : c );
						if(rc) {
							if(!$t.children(":checkbox").length) {
								nm = rcn.call(_this, $t);
								$t.prepend("<input type='checkbox' class='jstree-real-checkbox' id='" + nm[0] + "' name='" + nm[0] + "' value='" + nm[1] + "' />");
							}
							else {
								$t.children(":checkbox").addClass("jstree-real-checkbox");
							}
						}
						if(!ts) {
							if(c === "jstree-checked" || $t.hasClass("jstree-checked") || $t.children(':checked').length) {
								$t.find("li").andSelf().addClass("jstree-checked").children(":checkbox").prop("checked", true);
							}
						}
						else {
							if($t.hasClass("jstree-checked") || $t.children(':checked').length) {
								$t.addClass("jstree-checked").children(":checkbox").prop("checked", true);
							}
						}
					});
				});
				if(!ts) {
					obj.find(".jstree-checked").parent().parent().each(function () { _this._repair_state(this); }); 
				}
			},
			change_state : function (obj, state) {
				obj = this._get_node(obj);
				var coll = false, rc = this._get_settings().checkbox.real_checkboxes;
				if(!obj || obj === -1) { return false; }
				state = (state === false || state === true) ? state : obj.hasClass("jstree-checked");
				if(this._get_settings().checkbox.two_state) {
					if(state) { 
						obj.removeClass("jstree-checked").addClass("jstree-unchecked"); 
						if(rc) { obj.children(":checkbox").prop("checked", false); }
					}
					else { 
						obj.removeClass("jstree-unchecked").addClass("jstree-checked"); 
						if(rc) { obj.children(":checkbox").prop("checked", true); }
					}
				}
				else {
					if(state) { 
						coll = obj.find("li").andSelf();
						if(!coll.filter(".jstree-checked, .jstree-undetermined").length) { return false; }
						coll.removeClass("jstree-checked jstree-undetermined").addClass("jstree-unchecked"); 
						if(rc) { coll.children(":checkbox").prop("checked", false); }
					}
					else { 
						coll = obj.find("li").andSelf();
						if(!coll.filter(".jstree-unchecked, .jstree-undetermined").length) { return false; }
						coll.removeClass("jstree-unchecked jstree-undetermined").addClass("jstree-checked"); 
						if(rc) { coll.children(":checkbox").prop("checked", true); }
						if(this.data.ui) { this.data.ui.last_selected = obj; }
						this.data.checkbox.last_selected = obj;
					}
					obj.parentsUntil(".jstree", "li").each(function () {
						var $this = $(this);
						if(state) {
							if($this.children("ul").children("li.jstree-checked, li.jstree-undetermined").length) {
								$this.parentsUntil(".jstree", "li").andSelf().removeClass("jstree-checked jstree-unchecked").addClass("jstree-undetermined");
								if(rc) { $this.parentsUntil(".jstree", "li").andSelf().children(":checkbox").prop("checked", false); }
								return false;
							}
							else {
								$this.removeClass("jstree-checked jstree-undetermined").addClass("jstree-unchecked");
								if(rc) { $this.children(":checkbox").prop("checked", false); }
							}
						}
						else {
							if($this.children("ul").children("li.jstree-unchecked, li.jstree-undetermined").length) {
								$this.parentsUntil(".jstree", "li").andSelf().removeClass("jstree-checked jstree-unchecked").addClass("jstree-undetermined");
								if(rc) { $this.parentsUntil(".jstree", "li").andSelf().children(":checkbox").prop("checked", false); }
								return false;
							}
							else {
								$this.removeClass("jstree-unchecked jstree-undetermined").addClass("jstree-checked");
								if(rc) { $this.children(":checkbox").prop("checked", true); }
							}
						}
					});
				}
				if(this.data.ui && this.data.checkbox.noui) { this.data.ui.selected = this.get_checked(); }
				this.__callback(obj);
				return true;
			},
			check_node : function (obj) {
				if(this.change_state(obj, false)) { 
					obj = this._get_node(obj);
					if(this._get_settings().checkbox.checked_parent_open) {
						var t = this;
						obj.parents(".jstree-closed").each(function () { t.open_node(this, false, true); });
					}
					this.__callback({ "obj" : obj }); 
				}
			},
			uncheck_node : function (obj) {
				if(this.change_state(obj, true)) { this.__callback({ "obj" : this._get_node(obj) }); }
			},
			check_all : function () {
				var _this = this, 
					coll = this._get_settings().checkbox.two_state ? this.get_container_ul().find("li") : this.get_container_ul().children("li");
				coll.each(function () {
					_this.change_state(this, false);
				});
				this.__callback();
			},
			uncheck_all : function () {
				var _this = this,
					coll = this._get_settings().checkbox.two_state ? this.get_container_ul().find("li") : this.get_container_ul().children("li");
				coll.each(function () {
					_this.change_state(this, true);
				});
				this.__callback();
			},

			is_checked : function(obj) {
				obj = this._get_node(obj);
				return obj.length ? obj.is(".jstree-checked") : false;
			},
			get_checked : function (obj, get_all) {
				obj = !obj || obj === -1 ? this.get_container() : this._get_node(obj);
				return get_all || this._get_settings().checkbox.two_state ? obj.find(".jstree-checked") : obj.find("> ul > .jstree-checked, .jstree-undetermined > ul > .jstree-checked");
			},
			get_unchecked : function (obj, get_all) { 
				obj = !obj || obj === -1 ? this.get_container() : this._get_node(obj);
				return get_all || this._get_settings().checkbox.two_state ? obj.find(".jstree-unchecked") : obj.find("> ul > .jstree-unchecked, .jstree-undetermined > ul > .jstree-unchecked");
			},

			show_checkboxes : function () { this.get_container().children("ul").removeClass("jstree-no-checkboxes"); },
			hide_checkboxes : function () { this.get_container().children("ul").addClass("jstree-no-checkboxes"); },

			_repair_state : function (obj) {
				obj = this._get_node(obj);
				if(!obj.length) { return; }
				if(this._get_settings().checkbox.two_state) {
					obj.find('li').andSelf().not('.jstree-checked').removeClass('jstree-undetermined').addClass('jstree-unchecked').children(':checkbox').prop('checked', true);
					return;
				}
				var rc = this._get_settings().checkbox.real_checkboxes,
					a = obj.find("> ul > .jstree-checked").length,
					b = obj.find("> ul > .jstree-undetermined").length,
					c = obj.find("> ul > li").length;
				if(c === 0) { if(obj.hasClass("jstree-undetermined")) { this.change_state(obj, false); } }
				else if(a === 0 && b === 0) { this.change_state(obj, true); }
				else if(a === c) { this.change_state(obj, false); }
				else { 
					obj.parentsUntil(".jstree","li").andSelf().removeClass("jstree-checked jstree-unchecked").addClass("jstree-undetermined");
					if(rc) { obj.parentsUntil(".jstree", "li").andSelf().children(":checkbox").prop("checked", false); }
				}
			},
			reselect : function () {
				if(this.data.ui && this.data.checkbox.noui) { 
					var _this = this,
						s = this.data.ui.to_select;
					s = $.map($.makeArray(s), function (n) { return "#" + n.toString().replace(/^#/,"").replace(/\\\//g,"/").replace(/\//g,"\\\/").replace(/\\\./g,".").replace(/\./g,"\\.").replace(/\:/g,"\\:"); });
					this.deselect_all();
					$.each(s, function (i, val) { _this.check_node(val); });
					this.__callback();
				}
				else { 
					this.__call_old(); 
				}
			},
			save_loaded : function () {
				var _this = this;
				this.data.core.to_load = [];
				this.get_container_ul().find("li.jstree-closed.jstree-undetermined").each(function () {
					if(this.id) { _this.data.core.to_load.push("#" + this.id); }
				});
			}
		}
	});
	$(function() {
		var css_string = '.jstree .jstree-real-checkbox { display:none; } ';
		$.vakata.css.add_sheet({ str : css_string, title : "jstree" });
	});
})(jQuery);
//*/

/* 
 * jsTree XML plugin
 * The XML data store. Datastores are build by overriding the `load_node` and `_is_loaded` functions.
 */
(function ($) {
	$.vakata.xslt = function (xml, xsl, callback) {
		var rs = "", xm, xs, processor, support;
		// TODO: IE9 no XSLTProcessor, no document.recalc
		if(document.recalc) {
			xm = document.createElement('xml');
			xs = document.createElement('xml');
			xm.innerHTML = xml;
			xs.innerHTML = xsl;
			$("body").append(xm).append(xs);
			setTimeout( (function (xm, xs, callback) {
				return function () {
					callback.call(null, xm.transformNode(xs.XMLDocument));
					setTimeout( (function (xm, xs) { return function () { $(xm).remove(); $(xs).remove(); }; })(xm, xs), 200);
				};
			})(xm, xs, callback), 100);
			return true;
		}
		if(typeof window.DOMParser !== "undefined" && typeof window.XMLHttpRequest !== "undefined" && typeof window.XSLTProcessor === "undefined") {
			xml = new DOMParser().parseFromString(xml, "text/xml");
			xsl = new DOMParser().parseFromString(xsl, "text/xml");
			// alert(xml.transformNode());
			// callback.call(null, new XMLSerializer().serializeToString(rs));
			
		}
		if(typeof window.DOMParser !== "undefined" && typeof window.XMLHttpRequest !== "undefined" && typeof window.XSLTProcessor !== "undefined") {
			processor = new XSLTProcessor();
			support = $.isFunction(processor.transformDocument) ? (typeof window.XMLSerializer !== "undefined") : true;
			if(!support) { return false; }
			xml = new DOMParser().parseFromString(xml, "text/xml");
			xsl = new DOMParser().parseFromString(xsl, "text/xml");
			if($.isFunction(processor.transformDocument)) {
				rs = document.implementation.createDocument("", "", null);
				processor.transformDocument(xml, xsl, rs, null);
				callback.call(null, new XMLSerializer().serializeToString(rs));
				return true;
			}
			else {
				processor.importStylesheet(xsl);
				rs = processor.transformToFragment(xml, document);
				callback.call(null, $("<div />").append(rs).html());
				return true;
			}
		}
		return false;
	};
	var xsl = {
		'nest' : '<' + '?xml version="1.0" encoding="utf-8" ?>' + 
			'<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >' + 
			'<xsl:output method="html" encoding="utf-8" omit-xml-declaration="yes" standalone="no" indent="no" media-type="text/html" />' + 
			'<xsl:template match="/">' + 
			'	<xsl:call-template name="nodes">' + 
			'		<xsl:with-param name="node" select="/root" />' + 
			'	</xsl:call-template>' + 
			'</xsl:template>' + 
			'<xsl:template name="nodes">' + 
			'	<xsl:param name="node" />' + 
			'	<ul>' + 
			'	<xsl:for-each select="$node/item">' + 
			'		<xsl:variable name="children" select="count(./item) &gt; 0" />' + 
			'		<li>' + 
			'			<xsl:attribute name="class">' + 
			'				<xsl:if test="position() = last()">jstree-last </xsl:if>' + 
			'				<xsl:choose>' + 
			'					<xsl:when test="@state = \'open\'">jstree-open </xsl:when>' + 
			'					<xsl:when test="$children or @hasChildren or @state = \'closed\'">jstree-closed </xsl:when>' + 
			'					<xsl:otherwise>jstree-leaf </xsl:otherwise>' + 
			'				</xsl:choose>' + 
			'				<xsl:value-of select="@class" />' + 
			'			</xsl:attribute>' + 
			'			<xsl:for-each select="@*">' + 
			'				<xsl:if test="name() != \'class\' and name() != \'state\' and name() != \'hasChildren\'">' + 
			'					<xsl:attribute name="{name()}"><xsl:value-of select="." /></xsl:attribute>' + 
			'				</xsl:if>' + 
			'			</xsl:for-each>' + 
			'	<ins class="jstree-icon"><xsl:text>&#xa0;</xsl:text></ins>' + 
			'			<xsl:for-each select="content/name">' + 
			'				<a>' + 
			'				<xsl:attribute name="href">' + 
			'					<xsl:choose>' + 
			'					<xsl:when test="@href"><xsl:value-of select="@href" /></xsl:when>' + 
			'					<xsl:otherwise>#</xsl:otherwise>' + 
			'					</xsl:choose>' + 
			'				</xsl:attribute>' + 
			'				<xsl:attribute name="class"><xsl:value-of select="@lang" /> <xsl:value-of select="@class" /></xsl:attribute>' + 
			'				<xsl:attribute name="style"><xsl:value-of select="@style" /></xsl:attribute>' + 
			'				<xsl:for-each select="@*">' + 
			'					<xsl:if test="name() != \'style\' and name() != \'class\' and name() != \'href\'">' + 
			'						<xsl:attribute name="{name()}"><xsl:value-of select="." /></xsl:attribute>' + 
			'					</xsl:if>' + 
			'				</xsl:for-each>' + 
			'					<ins>' + 
			'						<xsl:attribute name="class">jstree-icon ' + 
			'							<xsl:if test="string-length(attribute::icon) > 0 and not(contains(@icon,\'/\'))"><xsl:value-of select="@icon" /></xsl:if>' + 
			'						</xsl:attribute>' + 
			'						<xsl:if test="string-length(attribute::icon) > 0 and contains(@icon,\'/\')"><xsl:attribute name="style">background:url(<xsl:value-of select="@icon" />) center center no-repeat;</xsl:attribute></xsl:if>' + 
			'						<xsl:text>&#xa0;</xsl:text>' + 
			'					</ins>' + 
			'					<xsl:copy-of select="./child::node()" />' + 
			'				</a>' + 
			'			</xsl:for-each>' + 
			'			<xsl:if test="$children or @hasChildren"><xsl:call-template name="nodes"><xsl:with-param name="node" select="current()" /></xsl:call-template></xsl:if>' + 
			'		</li>' + 
			'	</xsl:for-each>' + 
			'	</ul>' + 
			'</xsl:template>' + 
			'</xsl:stylesheet>',

		'flat' : '<' + '?xml version="1.0" encoding="utf-8" ?>' + 
			'<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >' + 
			'<xsl:output method="html" encoding="utf-8" omit-xml-declaration="yes" standalone="no" indent="no" media-type="text/xml" />' + 
			'<xsl:template match="/">' + 
			'	<ul>' + 
			'	<xsl:for-each select="//item[not(@parent_id) or @parent_id=0 or not(@parent_id = //item/@id)]">' + /* the last `or` may be removed */
			'		<xsl:call-template name="nodes">' + 
			'			<xsl:with-param name="node" select="." />' + 
			'			<xsl:with-param name="is_last" select="number(position() = last())" />' + 
			'		</xsl:call-template>' + 
			'	</xsl:for-each>' + 
			'	</ul>' + 
			'</xsl:template>' + 
			'<xsl:template name="nodes">' + 
			'	<xsl:param name="node" />' + 
			'	<xsl:param name="is_last" />' + 
			'	<xsl:variable name="children" select="count(//item[@parent_id=$node/attribute::id]) &gt; 0" />' + 
			'	<li>' + 
			'	<xsl:attribute name="class">' + 
			'		<xsl:if test="$is_last = true()">jstree-last </xsl:if>' + 
			'		<xsl:choose>' + 
			'			<xsl:when test="@state = \'open\'">jstree-open </xsl:when>' + 
			'			<xsl:when test="$children or @hasChildren or @state = \'closed\'">jstree-closed </xsl:when>' + 
			'			<xsl:otherwise>jstree-leaf </xsl:otherwise>' + 
			'		</xsl:choose>' + 
			'		<xsl:value-of select="@class" />' + 
			'	</xsl:attribute>' + 
			'	<xsl:for-each select="@*">' + 
			'		<xsl:if test="name() != \'parent_id\' and name() != \'hasChildren\' and name() != \'class\' and name() != \'state\'">' + 
			'		<xsl:attribute name="{name()}"><xsl:value-of select="." /></xsl:attribute>' + 
			'		</xsl:if>' + 
			'	</xsl:for-each>' + 
			'	<ins class="jstree-icon"><xsl:text>&#xa0;</xsl:text></ins>' + 
			'	<xsl:for-each select="content/name">' + 
			'		<a>' + 
			'		<xsl:attribute name="href">' + 
			'			<xsl:choose>' + 
			'			<xsl:when test="@href"><xsl:value-of select="@href" /></xsl:when>' + 
			'			<xsl:otherwise>#</xsl:otherwise>' + 
			'			</xsl:choose>' + 
			'		</xsl:attribute>' + 
			'		<xsl:attribute name="class"><xsl:value-of select="@lang" /> <xsl:value-of select="@class" /></xsl:attribute>' + 
			'		<xsl:attribute name="style"><xsl:value-of select="@style" /></xsl:attribute>' + 
			'		<xsl:for-each select="@*">' + 
			'			<xsl:if test="name() != \'style\' and name() != \'class\' and name() != \'href\'">' + 
			'				<xsl:attribute name="{name()}"><xsl:value-of select="." /></xsl:attribute>' + 
			'			</xsl:if>' + 
			'		</xsl:for-each>' + 
			'			<ins>' + 
			'				<xsl:attribute name="class">jstree-icon ' + 
			'					<xsl:if test="string-length(attribute::icon) > 0 and not(contains(@icon,\'/\'))"><xsl:value-of select="@icon" /></xsl:if>' + 
			'				</xsl:attribute>' + 
			'				<xsl:if test="string-length(attribute::icon) > 0 and contains(@icon,\'/\')"><xsl:attribute name="style">background:url(<xsl:value-of select="@icon" />) center center no-repeat;</xsl:attribute></xsl:if>' + 
			'				<xsl:text>&#xa0;</xsl:text>' + 
			'			</ins>' + 
			'			<xsl:copy-of select="./child::node()" />' + 
			'		</a>' + 
			'	</xsl:for-each>' + 
			'	<xsl:if test="$children">' + 
			'		<ul>' + 
			'		<xsl:for-each select="//item[@parent_id=$node/attribute::id]">' + 
			'			<xsl:call-template name="nodes">' + 
			'				<xsl:with-param name="node" select="." />' + 
			'				<xsl:with-param name="is_last" select="number(position() = last())" />' + 
			'			</xsl:call-template>' + 
			'		</xsl:for-each>' + 
			'		</ul>' + 
			'	</xsl:if>' + 
			'	</li>' + 
			'</xsl:template>' + 
			'</xsl:stylesheet>'
	},
	escape_xml = function(string) {
		return string
			.toString()
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&apos;');
	};
	$.jstree.plugin("xml_data", {
		defaults : { 
			data : false,
			ajax : false,
			xsl : "flat",
			clean_node : false,
			correct_state : true,
			get_skip_empty : false,
			get_include_preamble : true
		},
		_fn : {
			load_node : function (obj, s_call, e_call) { var _this = this; this.load_node_xml(obj, function () { _this.__callback({ "obj" : _this._get_node(obj) }); s_call.call(this); }, e_call); },
			_is_loaded : function (obj) { 
				var s = this._get_settings().xml_data;
				obj = this._get_node(obj);
				return obj == -1 || !obj || (!s.ajax && !$.isFunction(s.data)) || obj.is(".jstree-open, .jstree-leaf") || obj.children("ul").children("li").size() > 0;
			},
			load_node_xml : function (obj, s_call, e_call) {
				var s = this.get_settings().xml_data,
					error_func = function () {},
					success_func = function () {};

				obj = this._get_node(obj);
				if(obj && obj !== -1) {
					if(obj.data("jstree_is_loading")) { return; }
					else { obj.data("jstree_is_loading",true); }
				}
				switch(!0) {
					case (!s.data && !s.ajax): throw "Neither data nor ajax settings supplied.";
					case ($.isFunction(s.data)):
						s.data.call(this, obj, $.proxy(function (d) {
							this.parse_xml(d, $.proxy(function (d) {
								if(d) {
									d = d.replace(/ ?xmlns="[^"]*"/ig, "");
									if(d.length > 10) {
										d = $(d);
										if(obj === -1 || !obj) { this.get_container().children("ul").empty().append(d.children()); }
										else { obj.children("a.jstree-loading").removeClass("jstree-loading"); obj.append(d); obj.removeData("jstree_is_loading"); }
										if(s.clean_node) { this.clean_node(obj); }
										if(s_call) { s_call.call(this); }
									}
									else {
										if(obj && obj !== -1) { 
											obj.children("a.jstree-loading").removeClass("jstree-loading");
											obj.removeData("jstree_is_loading");
											if(s.correct_state) { 
												this.correct_state(obj);
												if(s_call) { s_call.call(this); } 
											}
										}
										else {
											if(s.correct_state) { 
												this.get_container().children("ul").empty();
												if(s_call) { s_call.call(this); } 
											}
										}
									}
								}
							}, this));
						}, this));
						break;
					case (!!s.data && !s.ajax) || (!!s.data && !!s.ajax && (!obj || obj === -1)):
						if(!obj || obj == -1) {
							this.parse_xml(s.data, $.proxy(function (d) {
								if(d) {
									d = d.replace(/ ?xmlns="[^"]*"/ig, "");
									if(d.length > 10) {
										d = $(d);
										this.get_container().children("ul").empty().append(d.children());
										if(s.clean_node) { this.clean_node(obj); }
										if(s_call) { s_call.call(this); }
									}
								}
								else { 
									if(s.correct_state) { 
										this.get_container().children("ul").empty(); 
										if(s_call) { s_call.call(this); }
									}
								}
							}, this));
						}
						break;
					case (!s.data && !!s.ajax) || (!!s.data && !!s.ajax && obj && obj !== -1):
						error_func = function (x, t, e) {
							var ef = this.get_settings().xml_data.ajax.error; 
							if(ef) { ef.call(this, x, t, e); }
							if(obj !== -1 && obj.length) {
								obj.children("a.jstree-loading").removeClass("jstree-loading");
								obj.removeData("jstree_is_loading");
								if(t === "success" && s.correct_state) { this.correct_state(obj); }
							}
							else {
								if(t === "success" && s.correct_state) { this.get_container().children("ul").empty(); }
							}
							if(e_call) { e_call.call(this); }
						};
						success_func = function (d, t, x) {
							d = x.responseText;
							var sf = this.get_settings().xml_data.ajax.success; 
							if(sf) { d = sf.call(this,d,t,x) || d; }
							if(d === "" || (d && d.toString && d.toString().replace(/^[\s\n]+$/,"") === "")) {
								return error_func.call(this, x, t, "");
							}
							this.parse_xml(d, $.proxy(function (d) {
								if(d) {
									d = d.replace(/ ?xmlns="[^"]*"/ig, "");
									if(d.length > 10) {
										d = $(d);
										if(obj === -1 || !obj) { this.get_container().children("ul").empty().append(d.children()); }
										else { obj.children("a.jstree-loading").removeClass("jstree-loading"); obj.append(d); obj.removeData("jstree_is_loading"); }
										if(s.clean_node) { this.clean_node(obj); }
										if(s_call) { s_call.call(this); }
									}
									else {
										if(obj && obj !== -1) { 
											obj.children("a.jstree-loading").removeClass("jstree-loading");
											obj.removeData("jstree_is_loading");
											if(s.correct_state) { 
												this.correct_state(obj);
												if(s_call) { s_call.call(this); } 
											}
										}
										else {
											if(s.correct_state) { 
												this.get_container().children("ul").empty();
												if(s_call) { s_call.call(this); } 
											}
										}
									}
								}
							}, this));
						};
						s.ajax.context = this;
						s.ajax.error = error_func;
						s.ajax.success = success_func;
						if(!s.ajax.dataType) { s.ajax.dataType = "xml"; }
						if($.isFunction(s.ajax.url)) { s.ajax.url = s.ajax.url.call(this, obj); }
						if($.isFunction(s.ajax.data)) { s.ajax.data = s.ajax.data.call(this, obj); }
						$.ajax(s.ajax);
						break;
				}
			},
			parse_xml : function (xml, callback) {
				var s = this._get_settings().xml_data;
				$.vakata.xslt(xml, xsl[s.xsl], callback);
			},
			get_xml : function (tp, obj, li_attr, a_attr, is_callback) {
				var result = "", 
					s = this._get_settings(), 
					_this = this,
					tmp1, tmp2, li, a, lang;
				if(!tp) { tp = "flat"; }
				if(!is_callback) { is_callback = 0; }
				obj = this._get_node(obj);
				if(!obj || obj === -1) { obj = this.get_container().find("> ul > li"); }
				li_attr = $.isArray(li_attr) ? li_attr : [ "id", "class" ];
				if(!is_callback && this.data.types && $.inArray(s.types.type_attr, li_attr) === -1) { li_attr.push(s.types.type_attr); }

				a_attr = $.isArray(a_attr) ? a_attr : [ ];

				if(!is_callback) { 
					if(s.xml_data.get_include_preamble) { 
						result += '<' + '?xml version="1.0" encoding="UTF-8"?' + '>'; 
					}
					result += "<root>"; 
				}
				obj.each(function () {
					result += "<item";
					li = $(this);
					$.each(li_attr, function (i, v) { 
						var t = li.attr(v);
						if(!s.xml_data.get_skip_empty || typeof t !== "undefined") {
							result += " " + v + "=\"" + escape_xml((" " + (t || "")).replace(/ jstree[^ ]*/ig,'').replace(/\s+$/ig," ").replace(/^ /,"").replace(/ $/,"")) + "\""; 
						}
					});
					if(li.hasClass("jstree-open")) { result += " state=\"open\""; }
					if(li.hasClass("jstree-closed")) { result += " state=\"closed\""; }
					if(tp === "flat") { result += " parent_id=\"" + escape_xml(is_callback) + "\""; }
					result += ">";
					result += "<content>";
					a = li.children("a");
					a.each(function () {
						tmp1 = $(this);
						lang = false;
						result += "<name";
						if($.inArray("languages", s.plugins) !== -1) {
							$.each(s.languages, function (k, z) {
								if(tmp1.hasClass(z)) { result += " lang=\"" + escape_xml(z) + "\""; lang = z; return false; }
							});
						}
						if(a_attr.length) { 
							$.each(a_attr, function (k, z) {
								var t = tmp1.attr(z);
								if(!s.xml_data.get_skip_empty || typeof t !== "undefined") {
									result += " " + z + "=\"" + escape_xml((" " + t || "").replace(/ jstree[^ ]*/ig,'').replace(/\s+$/ig," ").replace(/^ /,"").replace(/ $/,"")) + "\"";
								}
							});
						}
						if(tmp1.children("ins").get(0).className.replace(/jstree[^ ]*|$/ig,'').replace(/^\s+$/ig,"").length) {
							result += ' icon="' + escape_xml(tmp1.children("ins").get(0).className.replace(/jstree[^ ]*|$/ig,'').replace(/\s+$/ig," ").replace(/^ /,"").replace(/ $/,"")) + '"';
						}
						if(tmp1.children("ins").get(0).style.backgroundImage.length) {
							result += ' icon="' + escape_xml(tmp1.children("ins").get(0).style.backgroundImage.replace("url(","").replace(")","").replace(/'/ig,"").replace(/"/ig,"")) + '"';
						}
						result += ">";
						result += "<![CDATA[" + _this.get_text(tmp1, lang) + "]]>";
						result += "</name>";
					});
					result += "</content>";
					tmp2 = li[0].id || true;
					li = li.find("> ul > li");
					if(li.length) { tmp2 = _this.get_xml(tp, li, li_attr, a_attr, tmp2); }
					else { tmp2 = ""; }
					if(tp == "nest") { result += tmp2; }
					result += "</item>";
					if(tp == "flat") { result += tmp2; }
				});
				if(!is_callback) { result += "</root>"; }
				return result;
			}
		}
	});
})(jQuery);
//*/

/*
 * jsTree search plugin
 * Enables both sync and async search on the tree
 * DOES NOT WORK WITH JSON PROGRESSIVE RENDER
 */
(function ($) {
	$.expr[':'].jstree_contains = function(a,i,m){
		return (a.textContent || a.innerText || "").toLowerCase().indexOf(m[3].toLowerCase())>=0;
	};
	$.expr[':'].jstree_title_contains = function(a,i,m) {
		return (a.getAttribute("title") || "").toLowerCase().indexOf(m[3].toLowerCase())>=0;
	};
	$.jstree.plugin("search", {
		__init : function () {
			this.data.search.str = "";
			this.data.search.result = $();
			if(this._get_settings().search.show_only_matches) {
				this.get_container()
					.bind("search.jstree", function (e, data) {
						$(this).children("ul").find("li").hide().removeClass("jstree-last");
						data.rslt.nodes.parentsUntil(".jstree").andSelf().show()
							.filter("ul").each(function () { $(this).children("li:visible").eq(-1).addClass("jstree-last"); });
					})
					.bind("clear_search.jstree", function () {
						$(this).children("ul").find("li").css("display","").end().end().jstree("clean_node", -1);
					});
			}
		},
		defaults : {
			ajax : false,
			search_method : "jstree_contains", // for case insensitive - jstree_contains
			show_only_matches : false
		},
		_fn : {
			search : function (str, skip_async) {
				if($.trim(str) === "") { this.clear_search(); return; }
				var s = this.get_settings().search, 
					t = this,
					error_func = function () { },
					success_func = function () { };
				this.data.search.str = str;

				if(!skip_async && s.ajax !== false && this.get_container_ul().find("li.jstree-closed:not(:has(ul)):eq(0)").length > 0) {
					this.search.supress_callback = true;
					error_func = function () { };
					success_func = function (d, t, x) {
						var sf = this.get_settings().search.ajax.success; 
						if(sf) { d = sf.call(this,d,t,x) || d; }
						this.data.search.to_open = d;
						this._search_open();
					};
					s.ajax.context = this;
					s.ajax.error = error_func;
					s.ajax.success = success_func;
					if($.isFunction(s.ajax.url)) { s.ajax.url = s.ajax.url.call(this, str); }
					if($.isFunction(s.ajax.data)) { s.ajax.data = s.ajax.data.call(this, str); }
					if(!s.ajax.data) { s.ajax.data = { "search_string" : str }; }
					if(!s.ajax.dataType || /^json/.exec(s.ajax.dataType)) { s.ajax.dataType = "json"; }
					$.ajax(s.ajax);
					return;
				}
				if(this.data.search.result.length) { this.clear_search(); }
				this.data.search.result = this.get_container().find("a" + (this.data.languages ? "." + this.get_lang() : "" ) + ":" + (s.search_method) + "(" + this.data.search.str + ")");
				this.data.search.result.addClass("jstree-search").parent().parents(".jstree-closed").each(function () {
					t.open_node(this, false, true);
				});
				this.__callback({ nodes : this.data.search.result, str : str });
			},
			clear_search : function (str) {
				this.data.search.result.removeClass("jstree-search");
				this.__callback(this.data.search.result);
				this.data.search.result = $();
			},
			_search_open : function (is_callback) {
				var _this = this,
					done = true,
					current = [],
					remaining = [];
				if(this.data.search.to_open.length) {
					$.each(this.data.search.to_open, function (i, val) {
						if(val == "#") { return true; }
						if($(val).length && $(val).is(".jstree-closed")) { current.push(val); }
						else { remaining.push(val); }
					});
					if(current.length) {
						this.data.search.to_open = remaining;
						$.each(current, function (i, val) { 
							_this.open_node(val, function () { _this._search_open(true); }); 
						});
						done = false;
					}
				}
				if(done) { this.search(this.data.search.str, true); }
			}
		}
	});
})(jQuery);
//*/

/* 
 * jsTree contextmenu plugin
 */
(function ($) {
	$.vakata.context = {
		hide_on_mouseleave : false,

		cnt		: $("<div id='vakata-contextmenu' />"),
		vis		: false,
		tgt		: false,
		par		: false,
		func	: false,
		data	: false,
		rtl		: false,
		show	: function (s, t, x, y, d, p, rtl) {
			$.vakata.context.rtl = !!rtl;
			var html = $.vakata.context.parse(s), h, w;
			if(!html) { return; }
			$.vakata.context.vis = true;
			$.vakata.context.tgt = t;
			$.vakata.context.par = p || t || null;
			$.vakata.context.data = d || null;
			$.vakata.context.cnt
				.html(html)
				.css({ "visibility" : "hidden", "display" : "block", "left" : 0, "top" : 0 });

			if($.vakata.context.hide_on_mouseleave) {
				$.vakata.context.cnt
					.one("mouseleave", function(e) { $.vakata.context.hide(); });
			}

			h = $.vakata.context.cnt.height();
			w = $.vakata.context.cnt.width();
			if(x + w > $(document).width()) { 
				x = $(document).width() - (w + 5); 
				$.vakata.context.cnt.find("li > ul").addClass("right"); 
			}
			if(y + h > $(document).height()) { 
				y = y - (h + t[0].offsetHeight); 
				$.vakata.context.cnt.find("li > ul").addClass("bottom"); 
			}

			$.vakata.context.cnt
				.css({ "left" : x, "top" : y })
				.find("li:has(ul)")
					.bind("mouseenter", function (e) { 
						var w = $(document).width(),
							h = $(document).height(),
							ul = $(this).children("ul").show(); 
						if(w !== $(document).width()) { ul.toggleClass("right"); }
						if(h !== $(document).height()) { ul.toggleClass("bottom"); }
					})
					.bind("mouseleave", function (e) { 
						$(this).children("ul").hide(); 
					})
					.end()
				.css({ "visibility" : "visible" })
				.show();
			$(document).triggerHandler("context_show.vakata");
		},
		hide	: function () {
			$.vakata.context.vis = false;
			$.vakata.context.cnt.attr("class","").css({ "visibility" : "hidden" });
			$(document).triggerHandler("context_hide.vakata");
		},
		parse	: function (s, is_callback) {
			if(!s) { return false; }
			var str = "",
				tmp = false,
				was_sep = true;
			if(!is_callback) { $.vakata.context.func = {}; }
			str += "<ul>";
			$.each(s, function (i, val) {
				if(!val) { return true; }
				$.vakata.context.func[i] = val.action;
				if(!was_sep && val.separator_before) {
					str += "<li class='vakata-separator vakata-separator-before'></li>";
				}
				was_sep = false;
				str += "<li class='" + (val._class || "") + (val._disabled ? " jstree-contextmenu-disabled " : "") + "'><ins ";
				if(val.icon && val.icon.indexOf("/") === -1) { str += " class='" + val.icon + "' "; }
				if(val.icon && val.icon.indexOf("/") !== -1) { str += " style='background:url(" + val.icon + ") center center no-repeat;' "; }
				str += ">&#160;</ins><a href='#' rel='" + i + "'>";
				if(val.submenu) {
					str += "<span style='float:" + ($.vakata.context.rtl ? "left" : "right") + ";'>&raquo;</span>";
				}
				str += val.label + "</a>";
				if(val.submenu) {
					tmp = $.vakata.context.parse(val.submenu, true);
					if(tmp) { str += tmp; }
				}
				str += "</li>";
				if(val.separator_after) {
					str += "<li class='vakata-separator vakata-separator-after'></li>";
					was_sep = true;
				}
			});
			str = str.replace(/<li class\='vakata-separator vakata-separator-after'\><\/li\>$/,"");
			str += "</ul>";
			$(document).triggerHandler("context_parse.vakata");
			return str.length > 10 ? str : false;
		},
		exec	: function (i) {
			if($.isFunction($.vakata.context.func[i])) {
				// if is string - eval and call it!
				$.vakata.context.func[i].call($.vakata.context.data, $.vakata.context.par);
				return true;
			}
			else { return false; }
		}
	};
	$(function () {
		var css_string = '' + 
			'#vakata-contextmenu { display:block; visibility:hidden; left:0; top:-200px; position:absolute; margin:0; padding:0; min-width:180px; background:#ebebeb; border:1px solid silver; z-index:10000; *width:180px; } ' + 
			'#vakata-contextmenu ul { min-width:180px; *width:180px; } ' + 
			'#vakata-contextmenu ul, #vakata-contextmenu li { margin:0; padding:0; list-style-type:none; display:block; } ' + 
			'#vakata-contextmenu li { line-height:20px; min-height:20px; position:relative; padding:0px; } ' + 
			'#vakata-contextmenu li a { padding:1px 6px; line-height:17px; display:block; text-decoration:none; margin:1px 1px 0 1px; } ' + 
			'#vakata-contextmenu li ins { float:left; width:16px; height:16px; text-decoration:none; margin-right:2px; } ' + 
			'#vakata-contextmenu li a:hover, #vakata-contextmenu li.vakata-hover > a { background:gray; color:white; } ' + 
			'#vakata-contextmenu li ul { display:none; position:absolute; top:-2px; left:100%; background:#ebebeb; border:1px solid gray; } ' + 
			'#vakata-contextmenu .right { right:100%; left:auto; } ' + 
			'#vakata-contextmenu .bottom { bottom:-1px; top:auto; } ' + 
			'#vakata-contextmenu li.vakata-separator { min-height:0; height:1px; line-height:1px; font-size:1px; overflow:hidden; margin:0 2px; background:silver; /* border-top:1px solid #fefefe; */ padding:0; } ';
		$.vakata.css.add_sheet({ str : css_string, title : "vakata" });
		$.vakata.context.cnt
			.delegate("a","click", function (e) { e.preventDefault(); })
			.delegate("a","mouseup", function (e) {
				if(!$(this).parent().hasClass("jstree-contextmenu-disabled") && $.vakata.context.exec($(this).attr("rel"))) {
					$.vakata.context.hide();
				}
				else { $(this).blur(); }
			})
			.delegate("a","mouseover", function () {
				$.vakata.context.cnt.find(".vakata-hover").removeClass("vakata-hover");
			})
			.appendTo("body");
		$(document).bind("mousedown", function (e) { if($.vakata.context.vis && !$.contains($.vakata.context.cnt[0], e.target)) { $.vakata.context.hide(); } });
		if(typeof $.hotkeys !== "undefined") {
			$(document)
				.bind("keydown", "up", function (e) { 
					if($.vakata.context.vis) { 
						var o = $.vakata.context.cnt.find("ul:visible").last().children(".vakata-hover").removeClass("vakata-hover").prevAll("li:not(.vakata-separator)").first();
						if(!o.length) { o = $.vakata.context.cnt.find("ul:visible").last().children("li:not(.vakata-separator)").last(); }
						o.addClass("vakata-hover");
						e.stopImmediatePropagation(); 
						e.preventDefault();
					} 
				})
				.bind("keydown", "down", function (e) { 
					if($.vakata.context.vis) { 
						var o = $.vakata.context.cnt.find("ul:visible").last().children(".vakata-hover").removeClass("vakata-hover").nextAll("li:not(.vakata-separator)").first();
						if(!o.length) { o = $.vakata.context.cnt.find("ul:visible").last().children("li:not(.vakata-separator)").first(); }
						o.addClass("vakata-hover");
						e.stopImmediatePropagation(); 
						e.preventDefault();
					} 
				})
				.bind("keydown", "right", function (e) { 
					if($.vakata.context.vis) { 
						$.vakata.context.cnt.find(".vakata-hover").children("ul").show().children("li:not(.vakata-separator)").removeClass("vakata-hover").first().addClass("vakata-hover");
						e.stopImmediatePropagation(); 
						e.preventDefault();
					} 
				})
				.bind("keydown", "left", function (e) { 
					if($.vakata.context.vis) { 
						$.vakata.context.cnt.find(".vakata-hover").children("ul").hide().children(".vakata-separator").removeClass("vakata-hover");
						e.stopImmediatePropagation(); 
						e.preventDefault();
					} 
				})
				.bind("keydown", "esc", function (e) { 
					$.vakata.context.hide(); 
					e.preventDefault();
				})
				.bind("keydown", "space", function (e) { 
					$.vakata.context.cnt.find(".vakata-hover").last().children("a").click();
					e.preventDefault();
				});
		}
	});

	$.jstree.plugin("contextmenu", {
		__init : function () {
			this.get_container()
				.delegate("a", "contextmenu.jstree", $.proxy(function (e) {
						e.preventDefault();
						if(!$(e.currentTarget).hasClass("jstree-loading")) {
							this.show_contextmenu(e.currentTarget, e.pageX, e.pageY);
						}
					}, this))
				.delegate("a", "click.jstree", $.proxy(function (e) {
						if(this.data.contextmenu) {
							$.vakata.context.hide();
						}
					}, this))
				.bind("destroy.jstree", $.proxy(function () {
						// TODO: move this to descruct method
						if(this.data.contextmenu) {
							$.vakata.context.hide();
						}
					}, this));
			$(document).bind("context_hide.vakata", $.proxy(function () { this.data.contextmenu = false; }, this));
		},
		defaults : { 
			select_node : false, // requires UI plugin
			show_at_node : true,
			items : { // Could be a function that should return an object like this one
				"create" : {
					"separator_before"	: false,
					"separator_after"	: true,
					"label"				: "Create",
					"action"			: function (obj) { this.create(obj); }
				},
				"rename" : {
					"separator_before"	: false,
					"separator_after"	: false,
					"label"				: "Rename",
					"action"			: function (obj) { this.rename(obj); }
				},
				"remove" : {
					"separator_before"	: false,
					"icon"				: false,
					"separator_after"	: false,
					"label"				: "Delete",
					"action"			: function (obj) { if(this.is_selected(obj)) { this.remove(); } else { this.remove(obj); } }
				},
				"ccp" : {
					"separator_before"	: true,
					"icon"				: false,
					"separator_after"	: false,
					"label"				: "Edit",
					"action"			: false,
					"submenu" : { 
						"cut" : {
							"separator_before"	: false,
							"separator_after"	: false,
							"label"				: "Cut",
							"action"			: function (obj) { this.cut(obj); }
						},
						"copy" : {
							"separator_before"	: false,
							"icon"				: false,
							"separator_after"	: false,
							"label"				: "Copy",
							"action"			: function (obj) { this.copy(obj); }
						},
						"paste" : {
							"separator_before"	: false,
							"icon"				: false,
							"separator_after"	: false,
							"label"				: "Paste",
							"action"			: function (obj) { this.paste(obj); }
						}
					}
				}
			}
		},
		_fn : {
			show_contextmenu : function (obj, x, y) {
				obj = this._get_node(obj);
				var s = this.get_settings().contextmenu,
					a = obj.children("a:visible:eq(0)"),
					o = false,
					i = false;
				if(s.select_node && this.data.ui && !this.is_selected(obj)) {
					this.deselect_all();
					this.select_node(obj, true);
				}
				if(s.show_at_node || typeof x === "undefined" || typeof y === "undefined") {
					o = a.offset();
					x = o.left;
					y = o.top + this.data.core.li_height;
				}
				i = obj.data("jstree") && obj.data("jstree").contextmenu ? obj.data("jstree").contextmenu : s.items;
				if($.isFunction(i)) { i = i.call(this, obj); }
				this.data.contextmenu = true;
				$.vakata.context.show(i, a, x, y, this, obj, this._get_settings().core.rtl);
				if(this.data.themes) { $.vakata.context.cnt.attr("class", "jstree-" + this.data.themes.theme + "-context"); }
			}
		}
	});
})(jQuery);
//*/

/* 
 * jsTree types plugin
 * Adds support types of nodes
 * You can set an attribute on each li node, that represents its type.
 * According to the type setting the node may get custom icon/validation rules
 */
(function ($) {
	$.jstree.plugin("types", {
		__init : function () {
			var s = this._get_settings().types;
			this.data.types.attach_to = [];
			this.get_container()
				.bind("init.jstree", $.proxy(function () { 
						var types = s.types, 
							attr  = s.type_attr, 
							icons_css = "", 
							_this = this;

						$.each(types, function (i, tp) {
							$.each(tp, function (k, v) { 
								if(!/^(max_depth|max_children|icon|valid_children)$/.test(k)) { _this.data.types.attach_to.push(k); }
							});
							if(!tp.icon) { return true; }
							if( tp.icon.image || tp.icon.position) {
								if(i == "default")	{ icons_css += '.jstree-' + _this.get_index() + ' a > .jstree-icon { '; }
								else				{ icons_css += '.jstree-' + _this.get_index() + ' li[' + attr + '="' + i + '"] > a > .jstree-icon { '; }
								if(tp.icon.image)	{ icons_css += ' background-image:url(' + tp.icon.image + '); '; }
								if(tp.icon.position){ icons_css += ' background-position:' + tp.icon.position + '; '; }
								else				{ icons_css += ' background-position:0 0; '; }
								icons_css += '} ';
							}
						});
						if(icons_css !== "") { $.vakata.css.add_sheet({ 'str' : icons_css, title : "jstree-types" }); }
					}, this))
				.bind("before.jstree", $.proxy(function (e, data) { 
						var s, t, 
							o = this._get_settings().types.use_data ? this._get_node(data.args[0]) : false, 
							d = o && o !== -1 && o.length ? o.data("jstree") : false;
						if(d && d.types && d.types[data.func] === false) { e.stopImmediatePropagation(); return false; }
						if($.inArray(data.func, this.data.types.attach_to) !== -1) {
							if(!data.args[0] || (!data.args[0].tagName && !data.args[0].jquery)) { return; }
							s = this._get_settings().types.types;
							t = this._get_type(data.args[0]);
							if(
								( 
									(s[t] && typeof s[t][data.func] !== "undefined") || 
									(s["default"] && typeof s["default"][data.func] !== "undefined") 
								) && this._check(data.func, data.args[0]) === false
							) {
								e.stopImmediatePropagation();
								return false;
							}
						}
					}, this));
			if(is_ie6) {
				this.get_container()
					.bind("load_node.jstree set_type.jstree", $.proxy(function (e, data) {
							var r = data && data.rslt && data.rslt.obj && data.rslt.obj !== -1 ? this._get_node(data.rslt.obj).parent() : this.get_container_ul(),
								c = false,
								s = this._get_settings().types;
							$.each(s.types, function (i, tp) {
								if(tp.icon && (tp.icon.image || tp.icon.position)) {
									c = i === "default" ? r.find("li > a > .jstree-icon") : r.find("li[" + s.type_attr + "='" + i + "'] > a > .jstree-icon");
									if(tp.icon.image) { c.css("backgroundImage","url(" + tp.icon.image + ")"); }
									c.css("backgroundPosition", tp.icon.position || "0 0");
								}
							});
						}, this));
			}
		},
		defaults : {
			// defines maximum number of root nodes (-1 means unlimited, -2 means disable max_children checking)
			max_children		: -1,
			// defines the maximum depth of the tree (-1 means unlimited, -2 means disable max_depth checking)
			max_depth			: -1,
			// defines valid node types for the root nodes
			valid_children		: "all",

			// whether to use $.data
			use_data : false, 
			// where is the type stores (the rel attribute of the LI element)
			type_attr : "rel",
			// a list of types
			types : {
				// the default type
				"default" : {
					"max_children"	: -1,
					"max_depth"		: -1,
					"valid_children": "all"

					// Bound functions - you can bind any other function here (using boolean or function)
					//"select_node"	: true
				}
			}
		},
		_fn : {
			_types_notify : function (n, data) {
				if(data.type && this._get_settings().types.use_data) {
					this.set_type(data.type, n);
				}
			},
			_get_type : function (obj) {
				obj = this._get_node(obj);
				return (!obj || !obj.length) ? false : obj.attr(this._get_settings().types.type_attr) || "default";
			},
			set_type : function (str, obj) {
				obj = this._get_node(obj);
				var ret = (!obj.length || !str) ? false : obj.attr(this._get_settings().types.type_attr, str);
				if(ret) { this.__callback({ obj : obj, type : str}); }
				return ret;
			},
			_check : function (rule, obj, opts) {
				obj = this._get_node(obj);
				var v = false, t = this._get_type(obj), d = 0, _this = this, s = this._get_settings().types, data = false;
				if(obj === -1) { 
					if(!!s[rule]) { v = s[rule]; }
					else { return; }
				}
				else {
					if(t === false) { return; }
					data = s.use_data ? obj.data("jstree") : false;
					if(data && data.types && typeof data.types[rule] !== "undefined") { v = data.types[rule]; }
					else if(!!s.types[t] && typeof s.types[t][rule] !== "undefined") { v = s.types[t][rule]; }
					else if(!!s.types["default"] && typeof s.types["default"][rule] !== "undefined") { v = s.types["default"][rule]; }
				}
				if($.isFunction(v)) { v = v.call(this, obj); }
				if(rule === "max_depth" && obj !== -1 && opts !== false && s.max_depth !== -2 && v !== 0) {
					// also include the node itself - otherwise if root node it is not checked
					obj.children("a:eq(0)").parentsUntil(".jstree","li").each(function (i) {
						// check if current depth already exceeds global tree depth
						if(s.max_depth !== -1 && s.max_depth - (i + 1) <= 0) { v = 0; return false; }
						d = (i === 0) ? v : _this._check(rule, this, false);
						// check if current node max depth is already matched or exceeded
						if(d !== -1 && d - (i + 1) <= 0) { v = 0; return false; }
						// otherwise - set the max depth to the current value minus current depth
						if(d >= 0 && (d - (i + 1) < v || v < 0) ) { v = d - (i + 1); }
						// if the global tree depth exists and it minus the nodes calculated so far is less than `v` or `v` is unlimited
						if(s.max_depth >= 0 && (s.max_depth - (i + 1) < v || v < 0) ) { v = s.max_depth - (i + 1); }
					});
				}
				return v;
			},
			check_move : function () {
				if(!this.__call_old()) { return false; }
				var m  = this._get_move(),
					s  = m.rt._get_settings().types,
					mc = m.rt._check("max_children", m.cr),
					md = m.rt._check("max_depth", m.cr),
					vc = m.rt._check("valid_children", m.cr),
					ch = 0, d = 1, t;

				if(vc === "none") { return false; } 
				if($.isArray(vc) && m.ot && m.ot._get_type) {
					m.o.each(function () {
						if($.inArray(m.ot._get_type(this), vc) === -1) { d = false; return false; }
					});
					if(d === false) { return false; }
				}
				if(s.max_children !== -2 && mc !== -1) {
					ch = m.cr === -1 ? this.get_container().find("> ul > li").not(m.o).length : m.cr.find("> ul > li").not(m.o).length;
					if(ch + m.o.length > mc) { return false; }
				}
				if(s.max_depth !== -2 && md !== -1) {
					d = 0;
					if(md === 0) { return false; }
					if(typeof m.o.d === "undefined") {
						// TODO: deal with progressive rendering and async when checking max_depth (how to know the depth of the moved node)
						t = m.o;
						while(t.length > 0) {
							t = t.find("> ul > li");
							d ++;
						}
						m.o.d = d;
					}
					if(md - m.o.d < 0) { return false; }
				}
				return true;
			},
			create_node : function (obj, position, js, callback, is_loaded, skip_check) {
				if(!skip_check && (is_loaded || this._is_loaded(obj))) {
					var p  = (typeof position == "string" && position.match(/^before|after$/i) && obj !== -1) ? this._get_parent(obj) : this._get_node(obj),
						s  = this._get_settings().types,
						mc = this._check("max_children", p),
						md = this._check("max_depth", p),
						vc = this._check("valid_children", p),
						ch;
					if(typeof js === "string") { js = { data : js }; }
					if(!js) { js = {}; }
					if(vc === "none") { return false; } 
					if($.isArray(vc)) {
						if(!js.attr || !js.attr[s.type_attr]) { 
							if(!js.attr) { js.attr = {}; }
							js.attr[s.type_attr] = vc[0]; 
						}
						else {
							if($.inArray(js.attr[s.type_attr], vc) === -1) { return false; }
						}
					}
					if(s.max_children !== -2 && mc !== -1) {
						ch = p === -1 ? this.get_container().find("> ul > li").length : p.find("> ul > li").length;
						if(ch + 1 > mc) { return false; }
					}
					if(s.max_depth !== -2 && md !== -1 && (md - 1) < 0) { return false; }
				}
				return this.__call_old(true, obj, position, js, callback, is_loaded, skip_check);
			}
		}
	});
})(jQuery);
//*/

/* 
 * jsTree HTML plugin
 * The HTML data store. Datastores are build by replacing the `load_node` and `_is_loaded` functions.
 */
(function ($) {
	$.jstree.plugin("html_data", {
		__init : function () { 
			// this used to use html() and clean the whitespace, but this way any attached data was lost
			this.data.html_data.original_container_html = this.get_container().find(" > ul > li").clone(true);
			// remove white space from LI node - otherwise nodes appear a bit to the right
			this.data.html_data.original_container_html.find("li").andSelf().contents().filter(function() { return this.nodeType == 3; }).remove();
		},
		defaults : { 
			data : false,
			ajax : false,
			correct_state : true
		},
		_fn : {
			load_node : function (obj, s_call, e_call) { var _this = this; this.load_node_html(obj, function () { _this.__callback({ "obj" : _this._get_node(obj) }); s_call.call(this); }, e_call); },
			_is_loaded : function (obj) { 
				obj = this._get_node(obj); 
				return obj == -1 || !obj || (!this._get_settings().html_data.ajax && !$.isFunction(this._get_settings().html_data.data)) || obj.is(".jstree-open, .jstree-leaf") || obj.children("ul").children("li").size() > 0;
			},
			load_node_html : function (obj, s_call, e_call) {
				var d,
					s = this.get_settings().html_data,
					error_func = function () {},
					success_func = function () {};
				obj = this._get_node(obj);
				if(obj && obj !== -1) {
					if(obj.data("jstree_is_loading")) { return; }
					else { obj.data("jstree_is_loading",true); }
				}
				switch(!0) {
					case ($.isFunction(s.data)):
						s.data.call(this, obj, $.proxy(function (d) {
							if(d && d !== "" && d.toString && d.toString().replace(/^[\s\n]+$/,"") !== "") {
								d = $(d);
								if(!d.is("ul")) { d = $("<ul />").append(d); }
								if(obj == -1 || !obj) { this.get_container().children("ul").empty().append(d.children()).find("li, a").filter(function () { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon"); }
								else { obj.children("a.jstree-loading").removeClass("jstree-loading"); obj.append(d).children("ul").find("li, a").filter(function () { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon"); obj.removeData("jstree_is_loading"); }
								this.clean_node(obj);
								if(s_call) { s_call.call(this); }
							}
							else {
								if(obj && obj !== -1) {
									obj.children("a.jstree-loading").removeClass("jstree-loading");
									obj.removeData("jstree_is_loading");
									if(s.correct_state) { 
										this.correct_state(obj);
										if(s_call) { s_call.call(this); } 
									}
								}
								else {
									if(s.correct_state) { 
										this.get_container().children("ul").empty();
										if(s_call) { s_call.call(this); } 
									}
								}
							}
						}, this));
						break;
					case (!s.data && !s.ajax):
						if(!obj || obj == -1) {
							this.get_container()
								.children("ul").empty()
								.append(this.data.html_data.original_container_html)
								.find("li, a").filter(function () { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='jstree-icon'>&#160;</ins>").end()
								.filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon");
							this.clean_node();
						}
						if(s_call) { s_call.call(this); }
						break;
					case (!!s.data && !s.ajax) || (!!s.data && !!s.ajax && (!obj || obj === -1)):
						if(!obj || obj == -1) {
							d = $(s.data);
							if(!d.is("ul")) { d = $("<ul />").append(d); }
							this.get_container()
								.children("ul").empty().append(d.children())
								.find("li, a").filter(function () { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='jstree-icon'>&#160;</ins>").end()
								.filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon");
							this.clean_node();
						}
						if(s_call) { s_call.call(this); }
						break;
					case (!s.data && !!s.ajax) || (!!s.data && !!s.ajax && obj && obj !== -1):
						obj = this._get_node(obj);
						error_func = function (x, t, e) {
							var ef = this.get_settings().html_data.ajax.error; 
							if(ef) { ef.call(this, x, t, e); }
							if(obj != -1 && obj.length) {
								obj.children("a.jstree-loading").removeClass("jstree-loading");
								obj.removeData("jstree_is_loading");
								if(t === "success" && s.correct_state) { this.correct_state(obj); }
							}
							else {
								if(t === "success" && s.correct_state) { this.get_container().children("ul").empty(); }
							}
							if(e_call) { e_call.call(this); }
						};
						success_func = function (d, t, x) {
							var sf = this.get_settings().html_data.ajax.success; 
							if(sf) { d = sf.call(this,d,t,x) || d; }
							if(d === "" || (d && d.toString && d.toString().replace(/^[\s\n]+$/,"") === "")) {
								return error_func.call(this, x, t, "");
							}
							if(d) {
								d = $(d);
								if(!d.is("ul")) { d = $("<ul />").append(d); }
								if(obj == -1 || !obj) { this.get_container().children("ul").empty().append(d.children()).find("li, a").filter(function () { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon"); }
								else { obj.children("a.jstree-loading").removeClass("jstree-loading"); obj.append(d).children("ul").find("li, a").filter(function () { return !this.firstChild || !this.firstChild.tagName || this.firstChild.tagName !== "INS"; }).prepend("<ins class='jstree-icon'>&#160;</ins>").end().filter("a").children("ins:first-child").not(".jstree-icon").addClass("jstree-icon"); obj.removeData("jstree_is_loading"); }
								this.clean_node(obj);
								if(s_call) { s_call.call(this); }
							}
							else {
								if(obj && obj !== -1) {
									obj.children("a.jstree-loading").removeClass("jstree-loading");
									obj.removeData("jstree_is_loading");
									if(s.correct_state) { 
										this.correct_state(obj);
										if(s_call) { s_call.call(this); } 
									}
								}
								else {
									if(s.correct_state) { 
										this.get_container().children("ul").empty();
										if(s_call) { s_call.call(this); } 
									}
								}
							}
						};
						s.ajax.context = this;
						s.ajax.error = error_func;
						s.ajax.success = success_func;
						if(!s.ajax.dataType) { s.ajax.dataType = "html"; }
						if($.isFunction(s.ajax.url)) { s.ajax.url = s.ajax.url.call(this, obj); }
						if($.isFunction(s.ajax.data)) { s.ajax.data = s.ajax.data.call(this, obj); }
						$.ajax(s.ajax);
						break;
				}
			}
		}
	});
	// include the HTML data plugin by default
	$.jstree.defaults.plugins.push("html_data");
})(jQuery);
//*/

/* 
 * jsTree themeroller plugin
 * Adds support for jQuery UI themes. Include this at the end of your plugins list, also make sure "themes" is not included.
 */
(function ($) {
	$.jstree.plugin("themeroller", {
		__init : function () {
			var s = this._get_settings().themeroller;
			this.get_container()
				.addClass("ui-widget-content")
				.addClass("jstree-themeroller")
				.delegate("a","mouseenter.jstree", function (e) {
					if(!$(e.currentTarget).hasClass("jstree-loading")) {
						$(this).addClass(s.item_h);
					}
				})
				.delegate("a","mouseleave.jstree", function () {
					$(this).removeClass(s.item_h);
				})
				.bind("init.jstree", $.proxy(function (e, data) { 
						data.inst.get_container().find("> ul > li > .jstree-loading > ins").addClass("ui-icon-refresh");
						this._themeroller(data.inst.get_container().find("> ul > li"));
					}, this))
				.bind("open_node.jstree create_node.jstree", $.proxy(function (e, data) { 
						this._themeroller(data.rslt.obj);
					}, this))
				.bind("loaded.jstree refresh.jstree", $.proxy(function (e) {
						this._themeroller();
					}, this))
				.bind("close_node.jstree", $.proxy(function (e, data) {
						this._themeroller(data.rslt.obj);
					}, this))
				.bind("delete_node.jstree", $.proxy(function (e, data) {
						this._themeroller(data.rslt.parent);
					}, this))
				.bind("correct_state.jstree", $.proxy(function (e, data) {
						data.rslt.obj
							.children("ins.jstree-icon").removeClass(s.opened + " " + s.closed + " ui-icon").end()
							.find("> a > ins.ui-icon")
								.filter(function() { 
									return this.className.toString()
										.replace(s.item_clsd,"").replace(s.item_open,"").replace(s.item_leaf,"")
										.indexOf("ui-icon-") === -1; 
								}).removeClass(s.item_open + " " + s.item_clsd).addClass(s.item_leaf || "jstree-no-icon");
					}, this))
				.bind("select_node.jstree", $.proxy(function (e, data) {
						data.rslt.obj.children("a").addClass(s.item_a);
					}, this))
				.bind("deselect_node.jstree deselect_all.jstree", $.proxy(function (e, data) {
						this.get_container()
							.find("a." + s.item_a).removeClass(s.item_a).end()
							.find("a.jstree-clicked").addClass(s.item_a);
					}, this))
				.bind("dehover_node.jstree", $.proxy(function (e, data) {
						data.rslt.obj.children("a").removeClass(s.item_h);
					}, this))
				.bind("hover_node.jstree", $.proxy(function (e, data) {
						this.get_container()
							.find("a." + s.item_h).not(data.rslt.obj).removeClass(s.item_h);
						data.rslt.obj.children("a").addClass(s.item_h);
					}, this))
				.bind("move_node.jstree", $.proxy(function (e, data) {
						this._themeroller(data.rslt.o);
						this._themeroller(data.rslt.op);
					}, this));
		},
		__destroy : function () {
			var s = this._get_settings().themeroller,
				c = [ "ui-icon" ];
			$.each(s, function (i, v) {
				v = v.split(" ");
				if(v.length) { c = c.concat(v); }
			});
			this.get_container()
				.removeClass("ui-widget-content")
				.find("." + c.join(", .")).removeClass(c.join(" "));
		},
		_fn : {
			_themeroller : function (obj) {
				var s = this._get_settings().themeroller;
				obj = !obj || obj == -1 ? this.get_container_ul() : this._get_node(obj).parent();
				obj
					.find("li.jstree-closed")
						.children("ins.jstree-icon").removeClass(s.opened).addClass("ui-icon " + s.closed).end()
						.children("a").addClass(s.item)
							.children("ins.jstree-icon").addClass("ui-icon")
								.filter(function() { 
									return this.className.toString()
										.replace(s.item_clsd,"").replace(s.item_open,"").replace(s.item_leaf,"")
										.indexOf("ui-icon-") === -1; 
								}).removeClass(s.item_leaf + " " + s.item_open).addClass(s.item_clsd || "jstree-no-icon")
								.end()
							.end()
						.end()
					.end()
					.find("li.jstree-open")
						.children("ins.jstree-icon").removeClass(s.closed).addClass("ui-icon " + s.opened).end()
						.children("a").addClass(s.item)
							.children("ins.jstree-icon").addClass("ui-icon")
								.filter(function() { 
									return this.className.toString()
										.replace(s.item_clsd,"").replace(s.item_open,"").replace(s.item_leaf,"")
										.indexOf("ui-icon-") === -1; 
								}).removeClass(s.item_leaf + " " + s.item_clsd).addClass(s.item_open || "jstree-no-icon")
								.end()
							.end()
						.end()
					.end()
					.find("li.jstree-leaf")
						.children("ins.jstree-icon").removeClass(s.closed + " ui-icon " + s.opened).end()
						.children("a").addClass(s.item)
							.children("ins.jstree-icon").addClass("ui-icon")
								.filter(function() { 
									return this.className.toString()
										.replace(s.item_clsd,"").replace(s.item_open,"").replace(s.item_leaf,"")
										.indexOf("ui-icon-") === -1; 
								}).removeClass(s.item_clsd + " " + s.item_open).addClass(s.item_leaf || "jstree-no-icon");
			}
		},
		defaults : {
			"opened"	: "ui-icon-triangle-1-se",
			"closed"	: "ui-icon-triangle-1-e",
			"item"		: "ui-state-default",
			"item_h"	: "ui-state-hover",
			"item_a"	: "ui-state-active",
			"item_open"	: "ui-icon-folder-open",
			"item_clsd"	: "ui-icon-folder-collapsed",
			"item_leaf"	: "ui-icon-document"
		}
	});
	$(function() {
		var css_string = '' + 
			'.jstree-themeroller .ui-icon { overflow:visible; } ' + 
			'.jstree-themeroller a { padding:0 2px; } ' + 
			'.jstree-themeroller .jstree-no-icon { display:none; }';
		$.vakata.css.add_sheet({ str : css_string, title : "jstree" });
	});
})(jQuery);
//*/

/* 
 * jsTree unique plugin
 * Forces different names amongst siblings (still a bit experimental)
 * NOTE: does not check language versions (it will not be possible to have nodes with the same title, even in different languages)
 */
(function ($) {
	$.jstree.plugin("unique", {
		__init : function () {
			this.get_container()
				.bind("before.jstree", $.proxy(function (e, data) { 
						var nms = [], res = true, p, t;
						if(data.func == "move_node") {
							// obj, ref, position, is_copy, is_prepared, skip_check
							if(data.args[4] === true) {
								if(data.args[0].o && data.args[0].o.length) {
									data.args[0].o.children("a").each(function () { nms.push($(this).text().replace(/^\s+/g,"")); });
									res = this._check_unique(nms, data.args[0].np.find("> ul > li").not(data.args[0].o), "move_node");
								}
							}
						}
						if(data.func == "create_node") {
							// obj, position, js, callback, is_loaded
							if(data.args[4] || this._is_loaded(data.args[0])) {
								p = this._get_node(data.args[0]);
								if(data.args[1] && (data.args[1] === "before" || data.args[1] === "after")) {
									p = this._get_parent(data.args[0]);
									if(!p || p === -1) { p = this.get_container(); }
								}
								if(typeof data.args[2] === "string") { nms.push(data.args[2]); }
								else if(!data.args[2] || !data.args[2].data) { nms.push(this._get_string("new_node")); }
								else { nms.push(data.args[2].data); }
								res = this._check_unique(nms, p.find("> ul > li"), "create_node");
							}
						}
						if(data.func == "rename_node") {
							// obj, val
							nms.push(data.args[1]);
							t = this._get_node(data.args[0]);
							p = this._get_parent(t);
							if(!p || p === -1) { p = this.get_container(); }
							res = this._check_unique(nms, p.find("> ul > li").not(t), "rename_node");
						}
						if(!res) {
							e.stopPropagation();
							return false;
						}
					}, this));
		},
		defaults : { 
			error_callback : $.noop
		},
		_fn : { 
			_check_unique : function (nms, p, func) {
				var cnms = [];
				p.children("a").each(function () { cnms.push($(this).text().replace(/^\s+/g,"")); });
				if(!cnms.length || !nms.length) { return true; }
				cnms = cnms.sort().join(",,").replace(/(,|^)([^,]+)(,,\2)+(,|$)/g,"$1$2$4").replace(/,,+/g,",").replace(/,$/,"").split(",");
				if((cnms.length + nms.length) != cnms.concat(nms).sort().join(",,").replace(/(,|^)([^,]+)(,,\2)+(,|$)/g,"$1$2$4").replace(/,,+/g,",").replace(/,$/,"").split(",").length) {
					this._get_settings().unique.error_callback.call(null, nms, p, func);
					return false;
				}
				return true;
			},
			check_move : function () {
				if(!this.__call_old()) { return false; }
				var p = this._get_move(), nms = [];
				if(p.o && p.o.length) {
					p.o.children("a").each(function () { nms.push($(this).text().replace(/^\s+/g,"")); });
					return this._check_unique(nms, p.np.find("> ul > li").not(p.o), "check_move");
				}
				return true;
			}
		}
	});
})(jQuery);
//*/

/*
 * jsTree wholerow plugin
 * Makes select and hover work on the entire width of the node
 * MAY BE HEAVY IN LARGE DOM
 */
(function ($) {
	$.jstree.plugin("wholerow", {
		__init : function () {
			if(!this.data.ui) { throw "jsTree wholerow: jsTree UI plugin not included."; }
			this.data.wholerow.html = false;
			this.data.wholerow.to = false;
			this.get_container()
				.bind("init.jstree", $.proxy(function (e, data) { 
						this._get_settings().core.animation = 0;
					}, this))
				.bind("open_node.jstree create_node.jstree clean_node.jstree loaded.jstree", $.proxy(function (e, data) { 
						this._prepare_wholerow_span( data && data.rslt && data.rslt.obj ? data.rslt.obj : -1 );
					}, this))
				.bind("search.jstree clear_search.jstree reopen.jstree after_open.jstree after_close.jstree create_node.jstree delete_node.jstree clean_node.jstree", $.proxy(function (e, data) { 
						if(this.data.to) { clearTimeout(this.data.to); }
						this.data.to = setTimeout( (function (t, o) { return function() { t._prepare_wholerow_ul(o); }; })(this,  data && data.rslt && data.rslt.obj ? data.rslt.obj : -1), 0);
					}, this))
				.bind("deselect_all.jstree", $.proxy(function (e, data) { 
						this.get_container().find(" > .jstree-wholerow .jstree-clicked").removeClass("jstree-clicked " + (this.data.themeroller ? this._get_settings().themeroller.item_a : "" ));
					}, this))
				.bind("select_node.jstree deselect_node.jstree ", $.proxy(function (e, data) { 
						data.rslt.obj.each(function () { 
							var ref = data.inst.get_container().find(" > .jstree-wholerow li:visible:eq(" + ( parseInt((($(this).offset().top - data.inst.get_container().offset().top + data.inst.get_container()[0].scrollTop) / data.inst.data.core.li_height),10)) + ")");
							// ref.children("a")[e.type === "select_node" ? "addClass" : "removeClass"]("jstree-clicked");
							ref.children("a").attr("class",data.rslt.obj.children("a").attr("class"));
						});
					}, this))
				.bind("hover_node.jstree dehover_node.jstree", $.proxy(function (e, data) { 
						this.get_container().find(" > .jstree-wholerow .jstree-hovered").removeClass("jstree-hovered " + (this.data.themeroller ? this._get_settings().themeroller.item_h : "" ));
						if(e.type === "hover_node") {
							var ref = this.get_container().find(" > .jstree-wholerow li:visible:eq(" + ( parseInt(((data.rslt.obj.offset().top - this.get_container().offset().top + this.get_container()[0].scrollTop) / this.data.core.li_height),10)) + ")");
							// ref.children("a").addClass("jstree-hovered");
							ref.children("a").attr("class",data.rslt.obj.children(".jstree-hovered").attr("class"));
						}
					}, this))
				.delegate(".jstree-wholerow-span, ins.jstree-icon, li", "click.jstree", function (e) {
						var n = $(e.currentTarget);
						if(e.target.tagName === "A" || (e.target.tagName === "INS" && n.closest("li").is(".jstree-open, .jstree-closed"))) { return; }
						n.closest("li").children("a:visible:eq(0)").click();
						e.stopImmediatePropagation();
					})
				.delegate("li", "mouseover.jstree", $.proxy(function (e) {
						e.stopImmediatePropagation();
						if($(e.currentTarget).children(".jstree-hovered, .jstree-clicked").length) { return false; }
						this.hover_node(e.currentTarget);
						return false;
					}, this))
				.delegate("li", "mouseleave.jstree", $.proxy(function (e) {
						if($(e.currentTarget).children("a").hasClass("jstree-hovered").length) { return; }
						this.dehover_node(e.currentTarget);
					}, this));
			if(is_ie7 || is_ie6) {
				$.vakata.css.add_sheet({ str : ".jstree-" + this.get_index() + " { position:relative; } ", title : "jstree" });
			}
		},
		defaults : {
		},
		__destroy : function () {
			this.get_container().children(".jstree-wholerow").remove();
			this.get_container().find(".jstree-wholerow-span").remove();
		},
		_fn : {
			_prepare_wholerow_span : function (obj) {
				obj = !obj || obj == -1 ? this.get_container().find("> ul > li") : this._get_node(obj);
				if(obj === false) { return; } // added for removing root nodes
				obj.each(function () {
					$(this).find("li").andSelf().each(function () {
						var $t = $(this);
						if($t.children(".jstree-wholerow-span").length) { return true; }
						$t.prepend("<span class='jstree-wholerow-span' style='width:" + ($t.parentsUntil(".jstree","li").length * 18) + "px;'>&#160;</span>");
					});
				});
			},
			_prepare_wholerow_ul : function () {
				var o = this.get_container().children("ul").eq(0), h = o.html();
				o.addClass("jstree-wholerow-real");
				if(this.data.wholerow.last_html !== h) {
					this.data.wholerow.last_html = h;
					this.get_container().children(".jstree-wholerow").remove();
					this.get_container().append(
						o.clone().removeClass("jstree-wholerow-real")
							.wrapAll("<div class='jstree-wholerow' />").parent()
							.width(o.parent()[0].scrollWidth)
							.css("top", (o.height() + ( is_ie7 ? 5 : 0)) * -1 )
							.find("li[id]").each(function () { this.removeAttribute("id"); }).end()
					);
				}
			}
		}
	});
	$(function() {
		var css_string = '' + 
			'.jstree .jstree-wholerow-real { position:relative; z-index:1; } ' + 
			'.jstree .jstree-wholerow-real li { cursor:pointer; } ' + 
			'.jstree .jstree-wholerow-real a { border-left-color:transparent !important; border-right-color:transparent !important; } ' + 
			'.jstree .jstree-wholerow { position:relative; z-index:0; height:0; } ' + 
			'.jstree .jstree-wholerow ul, .jstree .jstree-wholerow li { width:100%; } ' + 
			'.jstree .jstree-wholerow, .jstree .jstree-wholerow ul, .jstree .jstree-wholerow li, .jstree .jstree-wholerow a { margin:0 !important; padding:0 !important; } ' + 
			'.jstree .jstree-wholerow, .jstree .jstree-wholerow ul, .jstree .jstree-wholerow li { background:transparent !important; }' + 
			'.jstree .jstree-wholerow ins, .jstree .jstree-wholerow span, .jstree .jstree-wholerow input { display:none !important; }' + 
			'.jstree .jstree-wholerow a, .jstree .jstree-wholerow a:hover { text-indent:-9999px; !important; width:100%; padding:0 !important; border-right-width:0px !important; border-left-width:0px !important; } ' + 
			'.jstree .jstree-wholerow-span { position:absolute; left:0; margin:0px; padding:0; height:18px; border-width:0; padding:0; z-index:0; }';
		if(is_ff2) {
			css_string += '' + 
				'.jstree .jstree-wholerow a { display:block; height:18px; margin:0; padding:0; border:0; } ' + 
				'.jstree .jstree-wholerow-real a { border-color:transparent !important; } ';
		}
		if(is_ie7 || is_ie6) {
			css_string += '' + 
				'.jstree .jstree-wholerow, .jstree .jstree-wholerow li, .jstree .jstree-wholerow ul, .jstree .jstree-wholerow a { margin:0; padding:0; line-height:18px; } ' + 
				'.jstree .jstree-wholerow a { display:block; height:18px; line-height:18px; overflow:hidden; } ';
		}
		$.vakata.css.add_sheet({ str : css_string, title : "jstree" });
	});
})(jQuery);
//*/

/*
* jsTree model plugin
* This plugin gets jstree to use a class model to retrieve data, creating great dynamism
*/
(function ($) {
	var nodeInterface = ["getChildren","getChildrenCount","getAttr","getName","getProps"],
		validateInterface = function(obj, inter) {
			var valid = true;
			obj = obj || {};
			inter = [].concat(inter);
			$.each(inter, function (i, v) {
				if(!$.isFunction(obj[v])) { valid = false; return false; }
			});
			return valid;
		};
	$.jstree.plugin("model", {
		__init : function () {
			if(!this.data.json_data) { throw "jsTree model: jsTree json_data plugin not included."; }
			this._get_settings().json_data.data = function (n, b) {
				var obj = (n == -1) ? this._get_settings().model.object : n.data("jstree_model");
				if(!validateInterface(obj, nodeInterface)) { return b.call(null, false); }
				if(this._get_settings().model.async) {
					obj.getChildren($.proxy(function (data) {
						this.model_done(data, b);
					}, this));
				}
				else {
					this.model_done(obj.getChildren(), b);
				}
			};
		},
		defaults : {
			object : false,
			id_prefix : false,
			async : false
		},
		_fn : {
			model_done : function (data, callback) {
				var ret = [], 
					s = this._get_settings(),
					_this = this;

				if(!$.isArray(data)) { data = [data]; }
				$.each(data, function (i, nd) {
					var r = nd.getProps() || {};
					r.attr = nd.getAttr() || {};
					if(nd.getChildrenCount()) { r.state = "closed"; }
					r.data = nd.getName();
					if(!$.isArray(r.data)) { r.data = [r.data]; }
					if(_this.data.types && $.isFunction(nd.getType)) {
						r.attr[s.types.type_attr] = nd.getType();
					}
					if(r.attr.id && s.model.id_prefix) { r.attr.id = s.model.id_prefix + r.attr.id; }
					if(!r.metadata) { r.metadata = { }; }
					r.metadata.jstree_model = nd;
					ret.push(r);
				});
				callback.call(null, ret);
			}
		}
	});
})(jQuery);
//*/

})();
define("thirdparty/jstree_pre1.0_fix_1/jquery.jstree", function(){});

/*
 * Copyright 2012 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $ */

/**
 * Utilities for working with Deferred, Promise, and other asynchronous processes.
 */
define('Async',['require','exports','module'],function (require, exports, module) {
    'use strict';
    
    // Further ideas for Async utilities...
    //  - Utilities for blocking UI until a Promise completes?
    //  - A "SuperDeferred" could feature some very useful enhancements:
    //     - API for cancellation (non guaranteed, best attempt)
    //     - Easier way to add a timeout clause (withTimeout() wrapper below is more verbose)
    //     - Encapsulate the task kickoff code so you can start it later, e.g. superDeferred.start()
    //  - Deferred/Promise are unable to do anything akin to a 'finally' block. It'd be nice if we
    //    could harvest exceptions across all steps of an async process and pipe them to a handler,
    //    so that we don't leave UI-blocking overlays up forever, etc. But this is hard: we'd have
    //    wrap every async callback (including low-level native ones that don't use [Super]Deferred)
    //    to catch exceptions, and then understand which Deferred(s) the code *would* have resolved/
    //    rejected had it run to completion.
    

    /**
     * Executes a series of tasks in parallel, returning a "master" Promise that is resolved once
     * all the tasks have resolved. If one or more tasks fail, behavior depends on the failFast
     * flag:
     *   - If true, the master Promise is rejected as soon as the first task fails. The remaining
     *     tasks continue to completion in the background.
     *   - If false, the master Promise is rejected after all tasks have completed.
     *
     * If nothing fails:          (M = master promise; 1-4 = tasks; d = done; F = fail)
     *  M  ------------d
     *  1 >---d        .
     *  2 >------d     .
     *  3 >---------d  .
     *  4 >------------d
     *
     * With failFast = false:
     *  M  ------------F
     *  1 >---d     .  .
     *  2 >------d  .  .
     *  3 >---------F  .
     *  4 >------------d
     *
     * With failFast = true: -- equivalent to $.when()
     *  M  ---------F
     *  1 >---d     .
     *  2 >------d  .
     *  3 >---------F
     *  4 >------------d   (#4 continues even though master Promise has failed)
     * (Note: if tasks finish synchronously, the behavior is more like failFast=false because you
     * won't get a chance to respond to the master Promise until after all items have been processed)
     *
     * To perform task-specific work after an individual task completes, attach handlers to each
     * Promise before beginProcessItem() returns it.
     *
     * Note: don't use this if individual tasks (or their done/fail handlers) could ever show a user-
     * visible dialog: because they run in parallel, you could show multiple dialogs atop each other.
     *
     * @param {!Array.<*>} items
     * @param {!function(*, number):Promise} beginProcessItem
     * @param {!boolean} failFast
     * @return {$.Promise}
     */
    function doInParallel(items, beginProcessItem, failFast) {
        var promises = [];
        var masterDeferred = new $.Deferred();
        
        if (items.length === 0) {
            masterDeferred.resolve();
            
        } else {
            var numCompleted = 0;
            var hasFailed = false;
            
            items.forEach(function (item, i) {
                var itemPromise = beginProcessItem(item, i);
                promises.push(itemPromise);
                
                itemPromise.fail(function () {
                    if (failFast) {
                        masterDeferred.reject();
                    } else {
                        hasFailed = true;
                    }
                });
                itemPromise.always(function () {
                    numCompleted++;
                    if (numCompleted === items.length) {
                        if (hasFailed) {
                            masterDeferred.reject();
                        } else {
                            masterDeferred.resolve();
                        }
                    }
                });
            });
            
        }
        
        return masterDeferred.promise();
    }
    
    /**
     * Executes a series of tasks in serial (task N does not begin until task N-1 has completed).
     * Returns a "master" Promise that is resolved once all the tasks have resolved. If one or more
     * tasks fail, behavior depends on the failAndStopFast flag:
     *   - If true, the master Promise is rejected as soon as the first task fails. The remaining
     *     tasks are never started (the serial sequence is stopped).
     *   - If false, the master Promise is rejected after all tasks have completed.
     *
     * If nothing fails:
     *  M  ------------d
     *  1 >---d        .
     *  2     >--d     .
     *  3        >--d  .
     *  4           >--d
     *
     * With failAndStopFast = false:
     *  M  ------------F
     *  1 >---d     .  .
     *  2     >--d  .  .
     *  3        >--F  .
     *  4           >--d
     *
     * With failAndStopFast = true:
     *  M  ---------F
     *  1 >---d     .
     *  2     >--d  .
     *  3        >--F
     *  4          (#4 never runs)
     *
     * To perform task-specific work after an individual task completes, attach handlers to each
     * Promise before beginProcessItem() returns it.
     *
     * @param {!Array.<*>} items
     * @param {!function(*, number):Promise} beginProcessItem
     * @param {!boolean} failAndStopFast
     * @return {$.Promise}
     */
    function doSequentially(items, beginProcessItem, failAndStopFast) {

        var masterDeferred = new $.Deferred();
        var hasFailed = false;
        
        function doItem(i) {
            if (i >= items.length) {
                if (hasFailed) {
                    masterDeferred.reject();
                } else {
                    masterDeferred.resolve();
                }
                return;
            }
            
            var itemPromise = beginProcessItem(items[i], i);
            
            itemPromise.done(function () {
                doItem(i + 1);
            });
            itemPromise.fail(function () {
                if (failAndStopFast) {
                    masterDeferred.reject();
                    // note: we do NOT process any further items in this case
                } else {
                    hasFailed = true;
                    doItem(i + 1);
                }
            });
        }
        
        doItem(0);
        
        return masterDeferred.promise();
    }
    
    
    /**
     * Executes a series of tasks in parallel, saving up error info from any that fail along the way.
     * Returns a Promise that is only resolved/rejected once all tasks are complete. This is
     * essentially a wrapper around doInParallel(..., false).
     *
     * If one or more tasks failed, the entire "master" promise is rejected at the end - with one
     * argument: an array objects, one per failed task. Each error object contains:
     *  - item -- the entry in items whose task failed
     *  - error -- the first argument passed to the fail() handler when the task failed
     *
     * @param {!Array.<*>} items
     * @param {!function(*, number):Promise} beginProcessItem
     * @return {$.Promise}
     */
    function doInParallel_aggregateErrors(items, beginProcessItem) {
        var errors = [];
        
        var masterDeferred = new $.Deferred();
        
        var parallelResult = doInParallel(
            items,
            function (item, i) {
                var itemResult = beginProcessItem(item, i);
                itemResult.fail(function (error) {
                    errors.push({ item: item, error: error });
                });
                return itemResult;
            },
            false
        );
        
        parallelResult
            .done(function () {
                masterDeferred.resolve();
            })
            .fail(function () {
                masterDeferred.reject(errors);
            });
        
        return masterDeferred.promise();
    }
    
    
    /** Value passed to fail() handlers that have been triggered due to withTimeout()'s timeout */
    var ERROR_TIMEOUT = {};
    
    /**
     * Adds timeout-driven failure to a Promise: returns a new Promise that is resolved/rejected when
     * the given original Promise is resolved/rejected, OR is rejected after the given delay - whichever
     * happens first.
     * 
     * If the original Promise is resolved/rejected first, done()/fail() handlers receive arguments
     * piped from the original Promise. If the timeout occurs first instead, fail() is called with the
     * token Async.ERROR_TIMEOUT.
     * 
     * @param {$.Promise} promise
     * @param {number} timeout
     * @return {$.Promise}
     */
    function withTimeout(promise, timeout) {
        var wrapper = new $.Deferred();
        
        var timer = setTimeout(function () {
            wrapper.reject(ERROR_TIMEOUT);
        }, timeout);
        promise.always(function () {
            clearTimeout(timer);
        });
        
        // If the wrapper was already rejected due to timeout, the Promise's calls to resolve/reject
        // won't do anything
        promise.pipe(wrapper.resolve, wrapper.reject);
        
        return wrapper.promise();
    }
    
    

    // Define public API
    exports.doInParallel   = doInParallel;
    exports.doSequentially = doSequentially;
    exports.doInParallel_aggregateErrors = doInParallel_aggregateErrors;
    exports.withTimeout    = withTimeout;
    exports.ERROR_TIMEOUT  = ERROR_TIMEOUT;
});
/*
 * Copyright 2011 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50*/
/*global $: false, define: false, brackets: false, FileError: false, InvalidateStateError: false */

define('NativeFileSystem',['require','exports','module','Async'],function (require, exports, module) {
    'use strict';
    
    var Async = require("Async");

    var NativeFileSystem = {
        
        /** 
         * Amount of time we wait for async calls to return (in milliseconds)
         * Not all async calls are wrapped with something that times out and 
         * calls the error callback. Timeouts are not specified in the W3C spec.
         * @const
         * @type {number}
         */
        ASYNC_TIMEOUT: 2000,
        
        /** showOpenDialog
         *
         * @param {bool} allowMultipleSelection
         * @param {bool} chooseDirectories
         * @param {string} title
         * @param {string} initialPath
         * @param {Array.<string>} fileTypes
         * @param {function(...)} successCallback
         * @param {function(...)} errorCallback
         * @constructor
         */
        showOpenDialog: function (allowMultipleSelection,
                                  chooseDirectories,
                                  title,
                                  initialPath,
                                  fileTypes,
                                  successCallback,
                                  errorCallback) {
            if (!successCallback) {
                return;
            }

            var files = brackets.fs.showOpenDialog(
                allowMultipleSelection,
                chooseDirectories,
                title,
                initialPath,
                fileTypes,
                function (err, data) {
                    if (!err) {
                        successCallback(data);
                    } else if (errorCallback) {
                        errorCallback(NativeFileSystem._nativeToFileError(err));
                    }
                }
            );
        },

        /** requestNativeFileSystem
         *
         * @param {string} path
         * @param {function(...)} successCallback
         * @param {function(...)} errorCallback
         */
        requestNativeFileSystem: function (path, successCallback, errorCallback) {
            brackets.fs.stat(path, function (err, data) {
                if (!err) {
                    // FIXME (issue #247): return a NativeFileSystem object
                    var root = new NativeFileSystem.DirectoryEntry(path);
                    successCallback(root);
                } else if (errorCallback) {
                    errorCallback(NativeFileSystem._nativeToFileError(err));
                }
            });
        },

        _nativeToFileError: function (nativeErr) {
            var error;

            switch (nativeErr) {
                // We map ERR_UNKNOWN and ERR_INVALID_PARAMS to SECURITY_ERR,
                // since there aren't specific mappings for these.
            case brackets.fs.ERR_UNKNOWN:
            case brackets.fs.ERR_INVALID_PARAMS:
                error = FileError.SECURITY_ERR;
                break;
            case brackets.fs.ERR_NOT_FOUND:
                error = FileError.NOT_FOUND_ERR;
                break;
            case brackets.fs.ERR_CANT_READ:
                error = FileError.NOT_READABLE_ERR;
                break;
            // It might seem like you should use FileError.ENCODING_ERR for this,
            // but according to the spec that's for malformed URLs.
            case brackets.fs.ERR_UNSUPPORTED_ENCODING:
                error = FileError.SECURITY_ERR;
                break;
            case brackets.fs.ERR_CANT_WRITE:
                error = FileError.NO_MODIFICATION_ALLOWED_ERR;
                break;
            case brackets.fs.ERR_OUT_OF_SPACE:
                error = FileError.QUOTA_EXCEEDED_ERR;
                break;
            case brackets.fs.PATH_EXISTS_ERR:
                error = FileError.PATH_EXISTS_ERR;
                break;
            default:
                // The HTML file spec says SECURITY_ERR is a catch-all to be used in situations
                // not covered by other error codes. 
                error = FileError.SECURITY_ERR;
            }
            return new NativeFileSystem.FileError(error);
        }
    };

    /** class: Entry
     *
     * @param {string} name
     * @param {string} isFile
     * @constructor
     */
    NativeFileSystem.Entry = function (fullPath, isDirectory) {
        this.isDirectory = isDirectory;
        this.isFile = !isDirectory;
        
        if (fullPath) {
            // add trailing "/" to directory paths
            if (isDirectory && (fullPath.charAt(fullPath.length - 1) !== '/')) {
                fullPath = fullPath.concat("/");
            }
        }
        
        this.fullPath = fullPath;

        this.name = null; // default if extraction fails
        if (fullPath) {
            var pathParts = fullPath.split("/");
            
            // Extract name from the end of the fullPath (account for trailing slash(es))
            while (!this.name && pathParts.length) {
                this.name = pathParts.pop();
            }
        }

        // TODO (issue #241)
        // http://www.w3.org/TR/2011/WD-file-system-api-20110419/#widl-Entry-filesystem
        this.filesystem = null;
    };
    
    NativeFileSystem.Entry.prototype.moveTo = function (parent, newName, successCallback, errorCallback) {
        // TODO (issue #241)
        // http://www.w3.org/TR/2011/WD-file-system-api-20110419/#widl-Entry-moveTo
    };
    
    NativeFileSystem.Entry.prototype.copyTo = function (parent, newName, successCallback, errorCallback) {
        // TODO (issue #241)
        // http://www.w3.org/TR/2011/WD-file-system-api-20110419/#widl-Entry-copyTo
    };
    
    NativeFileSystem.Entry.prototype.toURL = function (mimeType) {
        // TODO (issue #241)
        // http://www.w3.org/TR/2011/WD-file-system-api-20110419/#widl-Entry-toURL
    };
    
    NativeFileSystem.Entry.prototype.remove = function (successCallback, errorCallback) {
        // TODO (issue #241)
        // http://www.w3.org/TR/2011/WD-file-system-api-20110419/#widl-Entry-remove
    };
    
    NativeFileSystem.Entry.prototype.getParent = function (successCallback, errorCallback) {
        // TODO (issue #241)
        // http://www.w3.org/TR/2011/WD-file-system-api-20110419/#widl-Entry-remove
    };
    
    NativeFileSystem.Entry.prototype.getMetadata = function (successCallBack, errorCallback) {
        brackets.fs.stat(this.fullPath, function (err, stat) {
            if (err === brackets.fs.NO_ERROR) {
                var metadata = new NativeFileSystem.Metadata(stat.mtime);
                successCallBack(metadata);
            } else {
                errorCallback(NativeFileSystem._nativeToFileError(err));
            }
        });
    };


    /**
     * Stores information about a FileEntry
    */
    NativeFileSystem.Metadata = function (modificationTime) {
        // modificationTime is read only
        this.modificationTime = modificationTime;
    };

    /** class: FileEntry
     * This interface represents a file on a file system.
     *
     * @param {string} name
     * @constructor
     * @extends {Entry}
     */
    NativeFileSystem.FileEntry = function (name) {
        NativeFileSystem.Entry.call(this, name, false);
    };
    NativeFileSystem.FileEntry.prototype = new NativeFileSystem.Entry();

    /**
     * Creates a new FileWriter associated with the file that this FileEntry represents.
     *
     * @param {function (FileWriter)} successCallback
     * @param {function (FileError)} errorCallback
     */
    NativeFileSystem.FileEntry.prototype.createWriter = function (successCallback, errorCallback) {
        var fileEntry = this;

        // [NoInterfaceObject]
        // interface FileWriter : FileSaver
        var FileWriter = function (data) {
            NativeFileSystem.FileSaver.call(this, data);

            // FileWriter private memeber vars
            this._length = 0;
            this._position = 0;
        };

        FileWriter.prototype.length = function () {
            return this._length;
        };

        FileWriter.prototype.position = function () {
            return this._position;
        };

        // TODO (issue #241): handle Blob data instead of string
        FileWriter.prototype.write = function (data) {
            if (data === null || data === undefined) {
                throw new Error();
            }

            if (this.readyState === NativeFileSystem.FileSaver.WRITING) {
                throw new NativeFileSystem.FileException(NativeFileSystem.FileException.INVALID_STATE_ERR);
            }

            this._readyState = NativeFileSystem.FileSaver.WRITING;

            if (this.onwritestart) {
                // TODO (issue #241): progressevent
                this.onwritestart();
            }

            var self = this;

            brackets.fs.writeFile(fileEntry.fullPath, data, "utf8", function (err) {

                if ((err !== brackets.fs.NO_ERROR) && self.onerror) {
                    var fileError = NativeFileSystem._nativeToFileError(err);

                    // TODO (issue #241): set readonly FileSaver.error attribute
                    // self._error = fileError;
                    self.onerror(fileError);

                    // TODO (issue #241): partial write, update length and position
                }
                // else {
                    // TODO (issue #241): After changing data argument to Blob, use
                    // Blob.size to update position and length upon successful
                    // completion of a write.

                    // self.position = ;
                    // self.length = ;
                // }

                // DONE is set regardless of error
                self._readyState = NativeFileSystem.FileSaver.DONE;
                
                if (self.onwrite) {
                    // TODO (issue #241): progressevent
                    self.onwrite();
                }

                if (self.onwriteend) {
                    // TODO (issue #241): progressevent
                    self.onwriteend();
                }
            });
        };

        FileWriter.prototype.seek = function (offset) {
        };

        FileWriter.prototype.truncate = function (size) {
        };

        var fileWriter = new FileWriter();

        // initialize file length
        var result = new $.Deferred();
        brackets.fs.readFile(fileEntry.fullPath, "utf8", function (err, contents) {
            // Ignore "file not found" errors. It's okay if the file doesn't exist yet.
            if (err !== brackets.fs.ERR_NOT_FOUND) {
                fileWriter._err = err;
            }
            
            if (contents) {
                fileWriter._length = contents.length;
            }
            
            result.resolve();
        });

        result.done(function () {
            if (fileWriter._err && (errorCallback !== undefined)) {
                errorCallback(NativeFileSystem._nativeToFileError(fileWriter._err));
            } else if (successCallback !== undefined) {
                successCallback(fileWriter);
            }
        });
    };

    /**
     * Obtains the File objecte for a FileEntry object
     *
     * @param {function(...)} successCallback
     * @param {function(...)} errorCallback
     */
    NativeFileSystem.FileEntry.prototype.file = function (successCallback, errorCallback) {
        var newFile = new NativeFileSystem.File(this);
        successCallback(newFile);

        // TODO (issue #241): errorCallback
    };

    /**
     * This interface extends the FileException interface described in to add
     * several new error codes. Any errors that need to be reported synchronously,
     * including all that occur during use of the synchronous filesystem methods,
     * are reported using the FileException exception.
     *
     * @param {number} code The code attribute, on getting, must return one of the
     * constants of the FileException exception, which must be the most appropriate
     * code from the table below.
     */
    NativeFileSystem.FileException = function (code) {
        this.code = code || 0;
    };

    // FileException constants
    Object.defineProperties(
        NativeFileSystem.FileException,
        {
            NOT_FOUND_ERR:                { value: 1, writable: false },
            SECURITY_ERR:                 { value: 2, writable: false },
            ABORT_ERR:                    { value: 3, writable: false },
            NOT_READABLE_ERR:             { value: 4, writable: false },
            ENCODING_ERR:                 { value: 5, writable: false },
            NO_MODIFICATION_ALLOWED_ERR:  { value: 6, writable: false },
            INVALID_STATE_ERR:            { value: 7, writable: false },
            SYNTAX_ERR:                   { value: 8, writable: false },
            QUOTA_EXCEEDED_ERR:           { value: 10, writable: false }
        }
    );

    /**
     * This interface provides methods to monitor the asynchronous writing of blobs
     * to disk using progress events and event handler attributes.
     *
     * This interface is specified to be used within the context of the global
     * object (Window) and within Web Workers.
     *
     * @param {Blob} data
     * @constructor
     */
    NativeFileSystem.FileSaver = function (data) {
        // FileSaver private member vars
        this._data = data;
        this._readyState = NativeFileSystem.FileSaver.INIT;
        this._error = null;
    };

    // FileSaver constants
    Object.defineProperties(
        NativeFileSystem.FileSaver,
        {
            INIT:     { value: 1, writable: false },
            WRITING:  { value: 2, writable: false },
            DONE:     { value: 3, writable: false }
        }
    );

    // FileSaver methods

    /**
     *
     */
    NativeFileSystem.FileSaver.prototype.readyState = function () {
        return this._readyState;
    };

    // TODO (issue #241): http://dev.w3.org/2009/dap/file-system/file-writer.html#widl-FileSaver-abort-void
    NativeFileSystem.FileSaver.prototype.abort = function () {
        // If readyState is DONE or INIT, terminate this overall series of steps without doing anything else..
        if (this._readyState === NativeFileSystem.FileSaver.INIT || this._readyState === NativeFileSystem.FileSaver.DONE) {
            return;
        }

        // TODO (issue #241): Terminate any steps having to do with writing a file.

        // Set the error attribute to a FileError object with the code ABORT_ERR.
        this._error = new NativeFileSystem.FileError(FileError.ABORT_ERR);

        // Set readyState to DONE.
        this._readyState = NativeFileSystem.FileSaver.DONE;

        /*
        TODO (issue #241): 
        Dispatch a progress event called abort
        Dispatch a progress event called writeend
        Stop dispatching any further progress events.
        Terminate this overall set of steps.
        */
    };

    /**
     * This interface represents a directory on a file system.
     *
     * @constructor
     * @param {string} name
     * @extends {Entry}
     */
    NativeFileSystem.DirectoryEntry = function (name) {
        NativeFileSystem.Entry.call(this, name, true);

        // TODO (issue #241): void removeRecursively (VoidCallback successCallback, optional ErrorCallback errorCallback);
    };
    NativeFileSystem.DirectoryEntry.prototype = new NativeFileSystem.Entry();
    
    NativeFileSystem.DirectoryEntry.prototype.getDirectory = function (path, options, successCallback, errorCallback) {
        // TODO (issue #241)
        // http://www.w3.org/TR/2011/WD-file-system-api-20110419/#widl-DirectoryEntry-getDirectory
    };
    
    NativeFileSystem.DirectoryEntry.prototype.removeRecursively = function (successCallback, errorCallback) {
        // TODO (issue #241)
        // http://www.w3.org/TR/2011/WD-file-system-api-20110419/#widl-DirectoryEntry-removeRecursively
    };

    NativeFileSystem.DirectoryEntry.prototype.createReader = function () {
        var dirReader = new NativeFileSystem.DirectoryReader();
        dirReader._directory = this;

        return dirReader;
    };

    /**
     * Creates or looks up a file.
     *
     * @param {string} path Either an absolute path or a relative path from this
     *        DirectoryEntry to the file to be looked up or created. It is an error
     *        to attempt to create a file whose immediate parent does not yet
     *        exist.
     * @param {Object.<string, boolean>} options
     * @param {function (number)} successCallback
     * @param {function (number)} errorCallback
     */
    NativeFileSystem.DirectoryEntry.prototype.getFile = function (path, options, successCallback, errorCallback) {
        var fileFullPath = path;
        
        function isRelativePath(path) {
            // If the path contains a colons it must be a full path on Windows (colons are
            // not valid path characters on mac or in URIs)
            if (path.indexOf(":") !== -1) {
                return false;
            }
            
            // For everyone else, absolute paths start with a "/"
            return path[0] !== "/";
        }

        // resolve relative paths relative to the DirectoryEntry
        if (isRelativePath(path)) {
            fileFullPath = this.fullPath + path;
        }

        var createFileEntry = function () {
            if (successCallback) {
                successCallback(new NativeFileSystem.FileEntry(fileFullPath));
            }
        };

        var createFileError = function (err) {
            if (errorCallback) {
                errorCallback(NativeFileSystem._nativeToFileError(err));
            }
        };

        // Use stat() to check if file exists
        brackets.fs.stat(fileFullPath, function (err, stats) {
            if ((err === brackets.fs.NO_ERROR)) {
                // NO_ERROR implies the path already exists

                // throw error if the file the path is a directory
                if (stats.isDirectory()) {
                    if (errorCallback) {
                        errorCallback(new NativeFileSystem.FileError(FileError.TYPE_MISMATCH_ERR));
                    }

                    return;
                }

                // throw error if the file exists but create is exclusive
                if (options.create && options.exclusive) {
                    if (errorCallback) {
                        errorCallback(new NativeFileSystem.FileError(FileError.PATH_EXISTS_ERR));
                    }

                    return;
                }

                // Create a file entry for the existing file. If create == true,
                // a file entry is created without error.
                createFileEntry();
            } else if (err === brackets.fs.ERR_NOT_FOUND) {
                // ERR_NOT_FOUND implies we write a new, empty file

                // create the file
                if (options.create) {
                    brackets.fs.writeFile(fileFullPath, "", "utf8", function (err) {
                        if (err) {
                            createFileError(err);
                        } else {
                            createFileEntry();
                        }
                    });

                    return;
                }

                // throw error if file not found and the create == false
                if (errorCallback) {
                    errorCallback(new NativeFileSystem.FileError(FileError.NOT_FOUND_ERR));
                }
            } else {
                // all other brackets.fs.stat() errors
                createFileError(err);
            }
        });
    };

    /** class: DirectoryReader
     */
    NativeFileSystem.DirectoryReader = function () {

    };

    /** readEntries
     *
     * @param {function(...)} successCallback
     * @param {function(...)} errorCallback
     * @returns {Array.<Entry>}
     */
    NativeFileSystem.DirectoryReader.prototype.readEntries = function (successCallback, errorCallback) {
        var rootPath = this._directory.fullPath;
        brackets.fs.readdir(rootPath, function (err, filelist) {
            if (!err) {
                var entries = [];
                var lastError = null;

                // stat() to determine type of each entry, then populare entries array with objects
                var masterPromise = Async.doInParallel(filelist, function (filename, index) {
                    
                    var deferred = new $.Deferred();
                    var itemFullPath = rootPath + filelist[index];
                    
                    brackets.fs.stat(itemFullPath, function (statErr, statData) {
                        if (!statErr) {
                            if (statData.isDirectory()) {
                                entries[index] = new NativeFileSystem.DirectoryEntry(itemFullPath);
                            } else if (statData.isFile()) {
                                entries[index] = new NativeFileSystem.FileEntry(itemFullPath);
                            } else {
                                entries[index] = null;  // neither a file nor a dir, so don't include it
                            }
                            deferred.resolve();
                        } else {
                            lastError = NativeFileSystem._nativeToFileError(statErr);
                            deferred.reject(lastError);
                        }
                    });
                    
                    return deferred;
                }, true);

                // We want the error callback to get called after some timeout (in case some deferreds don't return).
                // So, we need to wrap masterPromise in another deferred that has this timeout functionality    
                var timeoutWrapper = Async.withTimeout(masterPromise, NativeFileSystem.ASYNC_TIMEOUT);

                // Add the callbacks to this top-level Promise, which wraps all the individual deferred objects
                timeoutWrapper.then(
                    function () { // success
                        // The entries array may have null values if stat returned things that were
                        // neither a file nor a dir. So, we need to clean those out.
                        var cleanedEntries = [], i;
                        for (i = 0; i < entries.length; i++) {
                            if (entries[i]) {
                                cleanedEntries.push(entries[i]);
                            }
                        }
                        successCallback(cleanedEntries);
                    },
                    function (err) { // error
                        if (err === Async.ERROR_TIMEOUT) {
                            // SECURITY_ERR is the HTML5 File catch-all error, and there isn't anything
                            // more fitting for a timeout.
                            err = new NativeFileSystem.FileError(FileError.SECURITY_ERR);
                        } else {
                            err = lastError;
                        }
                        
                        if (errorCallback) {
                            errorCallback(err);
                        }
                    }
                );

            } else { // There was an error reading the initial directory.
                errorCallback(NativeFileSystem._nativeToFileError(err));
            }
        });
    };

    /** class: FileReader
     *
     * @extends {EventTarget}
     */
    NativeFileSystem.FileReader = function () {
        // TODO (issue #241): this classes should extend EventTarget

        // states
        this.EMPTY = 0;
        this.LOADING = 1;
        this.DONE = 2;

        // readyState is read only
        this.readyState = this.EMPTY;

        // File or Blob data
        // TODO (issue #241): readonly attribute any result;
        // TODO (issue #241): readonly attribute DOMError error;

        // event handler attributes
        this.onloadstart = null;
        this.onprogress = null;
        this.onload = null;
        this.onabort = null;
        this.onerror = null;
        this.onloadend = null;
    };
    // TODO (issue #241): extend EventTarget (draft status, not implememnted in webkit)
    // NativeFileSystem.FileReader.prototype = new NativeFileSystem.EventTarget()
    
    NativeFileSystem.FileReader.prototype.readAsArrayBuffer = function (blob) {
        // TODO (issue #241): implement
        // http://www.w3.org/TR/2011/WD-FileAPI-20111020/#dfn-readAsArrayBuffer
    };
    
    NativeFileSystem.FileReader.prototype.readAsBinaryString = function (blob) {
        // TODO (issue #241): implement
        // http://www.w3.org/TR/2011/WD-FileAPI-20111020/#dfn-readAsBinaryStringAsync
    };
    
    NativeFileSystem.FileReader.prototype.readAsDataURL = function (blob) {
        // TODO (issue #241): implement
        // http://www.w3.org/TR/2011/WD-FileAPI-20111020/#dfn-readAsDataURL
    };
    
    NativeFileSystem.FileReader.prototype.abort = function () {
        // TODO (issue #241): implement
        // http://www.w3.org/TR/2011/WD-FileAPI-20111020/#dfn-abort
    };
    
    /** readAsText
     *
     * @param {Blob} blob
     * @param {string} encoding
     */
    NativeFileSystem.FileReader.prototype.readAsText = function (blob, encoding) {
        var self = this;

        if (!encoding) {
            encoding = "utf-8";
        }

        if (this.readyState === this.LOADING) {
            throw new InvalidateStateError();
        }

        this.readyState = this.LOADING;

        if (this.onloadstart) {
            this.onloadstart(); // TODO (issue #241): progressevent
        }

        brackets.fs.readFile(blob._fullPath, encoding, function (err, data) {

            // TODO (issue #241): the event objects passed to these event handlers is fake and incomplete right now
            var fakeEvent = {
                loaded: 0,
                total: 0
            };

            // The target for this event is the FileReader and the data/err result is stored in the FileReader
            fakeEvent.target = self;
            self.result = data;
            self.error = NativeFileSystem._nativeToFileError(err);

            if (err) {
                self.readyState = self.DONE;
                if (self.onerror) {
                    self.onerror(fakeEvent);
                }
            } else {
                self.readyState = self.DONE;

                // TODO (issue #241): this should be the file/blob size, but we don't have code to get that yet, so for know assume a file size of 1
                // and since we read the file in one go, assume 100% after the first read
                fakeEvent.loaded = 1;
                fakeEvent.total = 1;

                if (self.onprogress) {
                    self.onprogress(fakeEvent);
                }

                // TODO (issue #241): onabort not currently supported since our native implementation doesn't support it
                // if (self.onabort)
                //    self.onabort(fakeEvent);

                if (self.onload) {
                    self.onload(fakeEvent);
                }

                if (self.onloadend) {
                    self.onloadend();
                }
            }

        });
    };

    /** class: Blob
     *
     * @constructor
     * param {Entry} entry
     */
    NativeFileSystem.Blob = function (fullPath) {
        this._fullPath = fullPath;
        
        // TODO (issue #241): implement, readonly
        this.size = 0;
        
        // TODO (issue #241): implement, readonly
        this.type = null;
    };
    
    NativeFileSystem.Blob.prototype.slice = function (start, end, contentType) {
        // TODO (issue #241): implement
        // http://www.w3.org/TR/2011/WD-FileAPI-20111020/#dfn-slice
    };
    
    /** class: File
     *
     * @constructor
     * param {Entry} entry
     * @extends {Blob}
     */
    NativeFileSystem.File = function (entry) {
        NativeFileSystem.Blob.call(this, entry.fullPath);
        
        // TODO (issue #241): implement, readonly
        this.name = "";
        
        // TODO (issue #241): implement, readonly
        this.lastModifiedDate = null;
    };

    /** class: FileError
     *
     * Implementation of HTML file API error code return class. Note that we don't
     * actually define the error codes here--we rely on the browser's built-in FileError
     * class's constants. In other words, external clients of this API should always
     * use FileError.<constant-name>, not NativeFileSystem.FileError.<constant-name>.
     *
     * @constructor
     * @param {number} code The error code to return with this FileError. Must be
     * one of the codes defined in the FileError class.
     */
    NativeFileSystem.FileError = function (code) {
        this.code = code || 0;
    };

    // Define public API
    exports.NativeFileSystem    = NativeFileSystem;
});

/*
 * Copyright 2012 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false, brackets: false */

/**
 * Utilities for creating and managing standard modal dialogs.
 */
define('Dialogs',['require','exports','module'],function (require, exports, module) {
    'use strict';

    var DIALOG_BTN_CANCEL = "cancel",
        DIALOG_BTN_OK = "ok",
        DIALOG_BTN_DONTSAVE = "dontsave",
        DIALOG_CANCELED = "_canceled";
    
    // TODO: (issue #258) In future, we should templatize the HTML for the dialogs rather than having 
    // it live directly in the HTML.
    var DIALOG_ID_ERROR = "error-dialog",
        DIALOG_ID_SAVE_CLOSE = "save-close-dialog",
        DIALOG_ID_EXT_CHANGED = "ext-changed-dialog",
        DIALOG_ID_EXT_DELETED = "ext-deleted-dialog";

    function _dismissDialog(dlg, buttonId) {
        dlg.data("buttonId", buttonId);
        dlg.modal(true).hide();
    }
    
    function _hasButton(dlg, buttonId) {
        return dlg.find("[data-button-id='" + buttonId + "']");
    }

    var _handleKeyDown = function (e) {
        var primaryBtn = this.find(".primary"),
            buttonId = null,
            which = String.fromCharCode(e.which);
        
        if (e.which === 13) {
            // Click primary button
            if (primaryBtn) {
                buttonId = primaryBtn.attr("data-button-id");
            }
        } else if (e.which === 32) {
            // Space bar on focused button
            this.find(".dialog-button:focus").click();
        } else if (brackets.platform === "mac") {
            // CMD+D Don't Save
            if (e.metaKey && (which === 'D')) {
                if (_hasButton(this, DIALOG_BTN_DONTSAVE)) {
                    buttonId = DIALOG_BTN_DONTSAVE;
                }
            // FIXME (issue #418) CMD+. Cancel swallowed by native shell
            } else if (e.metaKey && (e.which === 190)) {
                buttonId = DIALOG_BTN_CANCEL;
            }
        } else { // if (brackets.platform === "win") {
            // 'N' Don't Save
            if (which === 'N') {
                if (_hasButton(this, DIALOG_BTN_DONTSAVE)) {
                    buttonId = DIALOG_BTN_DONTSAVE;
                }
            }
        }
        
        if (buttonId) {
            _dismissDialog(this, buttonId);
        } else if (!($.contains(this.get(0), e.target)) ||
                  (this.filter(":input").length === 0)) {
            // Stop the event if the target is not inside the dialog
            // or if the target is not a form element.
            // TODO (issue #414): more robust handling of dialog scoped
            //                    vs. global key bindings
            e.stopPropagation();
            e.preventDefault();
        }
    };
    
    /**
     * General purpose modal dialog. Assumes that:
     * -- the root tag of the dialog is marked with a unique class name (passed as dlgClass), as well as the
     *    classes "template modal hide".
     * -- the HTML for the dialog contains elements with "title" and "message" classes, as well as a number 
     *    of elements with "dialog-button" class, each of which has a "data-button-id".
     *
     * @param {string} dlgClass The class of the dialog node in the HTML.
     * @param {string} title The title of the error dialog. Can contain HTML markup.
     * @param {string} message The message to display in the error dialog. Can contain HTML markup.
     * @return {Deferred} a $.Deferred() that will be resolved with the ID of the clicked button when the dialog
     *     is dismissed. Never rejected.
     */
    function showModalDialog(dlgClass, title, message, callback) {
        var result = $.Deferred();
        
        // We clone the HTML rather than using it directly so that if two dialogs of the same
        // type happen to show up, they can appear at the same time. (This is an edge case that
        // shouldn't happen often, but we can't prevent it from happening since everything is
        // asynchronous.)
        var dlg = $("." + dlgClass + ".template")
            .clone()
            .removeClass("template")
            .addClass("instance")
            .appendTo(document.body);

        // Set title and message
        $(".dialog-title", dlg).html(title);
        $(".dialog-message", dlg).html(message);

        var handleKeyDown = _handleKeyDown.bind(dlg);

        // Pipe dialog-closing notification back to client code
        dlg.one("hidden", function () {
            var buttonId = dlg.data("buttonId");
            if (!buttonId) {    // buttonId will be undefined if closed via Bootstrap's "x" button
                buttonId = DIALOG_BTN_CANCEL;
            }
            
            // Let call stack return before notifying that dialog has closed; this avoids issue #191
            // if the handler we're triggering might show another dialog (as long as there's no
            // fade-out animation)
            setTimeout(function () {
                result.resolve(buttonId);
            }, 0);
            
            // Remove the dialog instance from the DOM.
            dlg.remove();

            // Remove keydown event handler
            document.body.removeEventListener("keydown", handleKeyDown, true);
        }).one("shown", function () {
            // Set focus to the default button
            var primaryBtn = dlg.find(".primary");

            if (primaryBtn) {
                primaryBtn.focus();
            }

            // Listen for dialog keyboard shortcuts
            document.body.addEventListener("keydown", handleKeyDown, true);
        });
        
        // Click handler for buttons
        dlg.one("click", ".dialog-button", function (e) {
            _dismissDialog(dlg, $(this).attr("data-button-id"));
        });

        // Run the dialog
        dlg.modal({
            backdrop: "static",
            show: true,
            keyboard: true
        });
        return result;
    }
    
    /**
     * Immediately closes any dialog instances with the given class. The dialog callback for each instance will 
     * be called with the special buttonId DIALOG_CANCELED (note: callback is run asynchronously).
     */
    function cancelModalDialogIfOpen(dlgClass) {
        $("." + dlgClass + ".instance").each(function (dlg) {
            if (dlg.is(":visible")) {   // Bootstrap breaks if try to hide dialog that's already hidden
                _dismissDialog(dlg, DIALOG_CANCELED);
            }
        });
    }
    
    exports.DIALOG_BTN_CANCEL = DIALOG_BTN_CANCEL;
    exports.DIALOG_BTN_OK = DIALOG_BTN_OK;
    exports.DIALOG_BTN_DONTSAVE = DIALOG_BTN_DONTSAVE;
    exports.DIALOG_CANCELED = DIALOG_CANCELED;
    
    exports.DIALOG_ID_ERROR = DIALOG_ID_ERROR;
    exports.DIALOG_ID_SAVE_CLOSE = DIALOG_ID_SAVE_CLOSE;
    exports.DIALOG_ID_EXT_CHANGED = DIALOG_ID_EXT_CHANGED;
    exports.DIALOG_ID_EXT_DELETED = DIALOG_ID_EXT_DELETED;
    
    exports.showModalDialog = showModalDialog;
    exports.cancelModalDialogIfOpen = cancelModalDialogIfOpen;
});
/*
 * Copyright 2011 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false */

define('strings',['require','exports','module'],function (require, exports, module) {
    
    'use strict';
    
    /**
     * Format a string by replacing placeholder symbols with passed in arguments.
     *
     * Example: var formatted = Strings.format("Hello {0}", "World");
     *
     * @param {string} str The base string
     * @param {...} Arguments to be substituted into the string
     *
     * @return {string} Formatted string
     */
    function format(str) {
        // arguments[0] is the base string, so we need to adjust index values here
        var args = [].slice.call(arguments, 1);
        return str.replace(/\{(\d+)\}/g, function (match, num) {
            return typeof args[num] !== 'undefined' ? args[num] : match;
        });
    }

    
    // Define public API
    exports.format                            = format;
        
    // General file io error strings
    exports.GENERIC_ERROR                     = "(error {0})";
    exports.NOT_FOUND_ERR                     = "The file could not be found.";
    exports.NOT_READABLE_ERR                  = "The file could not be read.";
    exports.NO_MODIFICATION_ALLOWED_ERR       = "The target directory cannot be modified.";
    exports.NO_MODIFICATION_ALLOWED_ERR_FILE  = "The permissions do not allow you to make modifications.";

    // Project error strings
    exports.ERROR_LOADING_PROJECT             = "Error loading project";
    exports.OPEN_DIALOG_ERROR                 = "An error occurred when showing the open file dialog. (error {0})";
    exports.REQUEST_NATIVE_FILE_SYSTEM_ERROR  = "An error occurred when trying to load the directory \"{0}\". (error {1})";
    exports.READ_DIRECTORY_ENTRIES_ERROR      = "An error occurred when reading the contents of the directory \"{0}\". (error {1})";

    // File open/save error string
    exports.ERROR_OPENING_FILE_TITLE          = "Error opening file";
    exports.ERROR_OPENING_FILE                = "An error occurred when trying to open the file \"{0}\". {1}";
    exports.ERROR_RELOADING_FILE_TITLE        = "Error reloading changes from disk";
    exports.ERROR_RELOADING_FILE              = "An error occurred when trying to reload the file \"{0}\". {1}";
    exports.ERROR_SAVING_FILE_TITLE           = "Error saving file";
    exports.ERROR_SAVING_FILE                 = "An error occurred when trying to save the file \"{0}\". {1}";
    exports.INVALID_FILENAME_TITLE            = "Invalid file name";
    exports.INVALID_FILENAME_MESSAGE          = "Filenames cannot contain the following characters: /?*:;{}<>\\|";
    exports.FILE_ALREADY_EXISTS               = "The file \"{0}\" already exists.";
    exports.ERROR_CREATING_FILE_TITLE         = "Error creating file";
    exports.ERROR_CREATING_FILE               = "An error occurred when trying to create the file \"{0}\". {1}";

    // FileIndexManager error string
    exports.ERROR_MAX_FILES_TITLE             = "Error Indexing Files";
    exports.ERROR_MAX_FILES                   = "The maximum number of files have been indexed. Actions that look up files in the index may function incorrectly.";
    
    // CSSManager error strings
    exports.ERROR_PARSE_TITLE                 = "Error parsing CSS file(s):";

    exports.SAVE_CLOSE_TITLE                  = "Save Changes";
    exports.SAVE_CLOSE_MESSAGE                = "Do you want to save the changes you made in the document \"{0}\"?";
    exports.SAVE_CLOSE_MULTI_MESSAGE          = "Do you want to save your changes to the following files?";
    exports.EXT_MODIFIED_TITLE                = "External Changes";
    exports.EXT_MODIFIED_MESSAGE              = "<b>{0}</b> has been modified on disk, but also has unsaved changes in Brackets."
                                                + "<br><br>"
                                                + "Which version do you want to keep?";
    exports.EXT_DELETED_MESSAGE               = "<b>{0}</b> has been deleted on disk, but has unsaved changes in Brackets."
                                                + "<br><br>"
                                                + "Do you want to keep your changes?";
    
    exports.OPEN_FILE                         = "Open File";
});

/*
 * Copyright 2012 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false */

define('ViewUtils',['require','exports','module'],function (require, exports, module) {
    'use strict';

    // Load dependent modules


    /** If a parent div has overflow:auto then the child will have a problem
     * setting the background color. The reason for this is the width of the 
     * child is the visible width of the parent and not the scrollWidth, so if
     * the div scrolls the background looks wrong.
     * @param {!JQuery} $parent the jQuery parent for the object 
     */
    function updateChildrenToParentScrollwidth($parent) {
        var $children = $parent.children();
        //clear the width first so we get the natural scrollWidth below
        $children.width("");
        
        var targetWidth = $parent[0].scrollWidth -
            parseInt($parent.css("paddingLeft"), 10) -
            parseInt($parent.css("paddingRight"), 10);
        
        $children.width(targetWidth);
    }


    // Define public API
    exports.updateChildrenToParentScrollwidth = updateChildrenToParentScrollwidth;
});

/*
 * Copyright 2012 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define: false, $: false, FileError: false, brackets: false */

/**
 * Set of utilites for working with files and text content.
 */
define('FileUtils',['require','exports','module','NativeFileSystem','Dialogs','strings'],function (require, exports, module) {
    'use strict';
    
    var NativeFileSystem    = require("NativeFileSystem").NativeFileSystem,
        Dialogs             = require("Dialogs"),
        Strings             = require("strings");
    
    /**
     * Asynchronously reads a file as UTF-8 encoded text.
     * @return {Deferred} a jQuery Deferred that will be resolved with the 
     *  file's text content plus its timestamp, or rejected with a FileError if
     *  the file can not be read.
     */
    function readAsText(fileEntry) {
        var result = new $.Deferred(),
            reader = new NativeFileSystem.FileReader();

        fileEntry.file(function (file) {
            reader.onload = function (event) {
                var text = event.target.result;
                
                fileEntry.getMetadata(
                    function (metadata) {
                        result.resolve(text, metadata.modificationTime);
                    },
                    function (error) {
                        result.reject(error);
                    }
                );
            };

            reader.onerror = function (event) {
                result.reject(event.target.error);
            };

            reader.readAsText(file, "utf8");
        });

        return result.promise();
    }
    
    /**
     * Asynchronously writes a file as UTF-8 encoded text.
     * @param {!FileEntry} fileEntry
     * @param {!string} text
     * @return {Deferred} a jQuery Deferred that will be resolved when
     * file writing completes, or rejected with a FileError.
     */
    function writeText(fileEntry, text) {
        var result = new $.Deferred();
        
        fileEntry.createWriter(function (fileWriter) {
            fileWriter.onwriteend = function (e) {
                result.resolve();
            };
            fileWriter.onerror = function (err) {
                result.reject(err);
            };

            // TODO (issue #241): NativeFileSystem.BlobBulder
            fileWriter.write(text);
        });
        
        return result.promise();
    }

    /** @const */
    var LINE_ENDINGS_CRLF = "CRLF";
    /** @const */
    var LINE_ENDINGS_LF = "LF";
    
    /**
     * Returns the standard line endings for the current platform
     * @return {LINE_ENDINGS_CRLF|LINE_ENDINGS_LF}
     */
    function getPlatformLineEndings() {
        return brackets.platform === "win" ? LINE_ENDINGS_CRLF : LINE_ENDINGS_LF;
    }
    
    /**
     * Scans the first 1000 chars of the text to determine how it encodes line endings. Returns
     * null if usage is mixed or if no line endings found.
     * @param {!string} text
     * @return {null|LINE_ENDINGS_CRLF|LINE_ENDINGS_LF}
     */
    function sniffLineEndings(text) {
        var subset = text.substr(0, 1000);  // (length is clipped to text.length)
        var hasCRLF = /\r\n/.test(subset);
        var hasLF = /[^\r]\n/.test(subset);
        
        if ((hasCRLF && hasLF) || (!hasCRLF && !hasLF)) {
            return null;
        } else {
            return hasCRLF ? LINE_ENDINGS_CRLF : LINE_ENDINGS_LF;
        }
    }

    function getFileErrorString(code) {
        // There are a few error codes that we have specific error messages for. The rest are
        // displayed with a generic "(error N)" message.
        var result;

        if (code === FileError.NOT_FOUND_ERR) {
            result = Strings.NOT_FOUND_ERR;
        } else if (code === FileError.NOT_READABLE_ERR) {
            result = Strings.NOT_READABLE_ERR;
        } else if (code === FileError.NO_MODIFICATION_ALLOWED_ERR) {
            result = Strings.NO_MODIFICATION_ALLOWED_ERR_FILE;
        } else {
            result = Strings.format(Strings.GENERIC_ERROR, code);
        }

        return result;
    }
    
    function showFileOpenError(code, path) {
        return Dialogs.showModalDialog(
            Dialogs.DIALOG_ID_ERROR,
            Strings.ERROR_OPENING_FILE_TITLE,
            Strings.format(
                Strings.ERROR_OPENING_FILE,
                path,
                getFileErrorString(code)
            )
        );
    }

    /**
     * Convert a URI path to a native path.
     * On the mac, this is a no-op
     * On windows, URI paths start with a "/", but have a drive letter ("C:"). In this
     * case, remove the initial "/".
     * @param {!string} path
     * @return {string}
     */
    function convertToNativePath(path) {
        if (path.indexOf(":") !== -1 && path[0] === "/") {
            return path.substr(1);
        }
        
        return path;
    }
    
    // Define public API
    exports.LINE_ENDINGS_CRLF        = LINE_ENDINGS_CRLF;
    exports.LINE_ENDINGS_LF          = LINE_ENDINGS_LF;
    exports.getPlatformLineEndings   = getPlatformLineEndings;
    exports.sniffLineEndings         = sniffLineEndings;
    exports.showFileOpenError        = showFileOpenError;
    exports.getFileErrorString       = getFileErrorString;
    exports.readAsText               = readAsText;
    exports.writeText                = writeText;
    exports.convertToNativePath      = convertToNativePath;
});
CodeMirror.defineMode("xml", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var Kludges = parserConfig.htmlMode ? {
    autoSelfClosers: {"br": true, "img": true, "hr": true, "link": true, "input": true,
                      "meta": true, "col": true, "frame": true, "base": true, "area": true},
    doNotIndent: {"pre": true},
    allowUnquoted: true
  } : {autoSelfClosers: {}, doNotIndent: {}, allowUnquoted: false};
  var alignCDATA = parserConfig.alignCDATA;

  // Return variables for tokenizers
  var tagName, type;

  function inText(stream, state) {
    function chain(parser) {
      state.tokenize = parser;
      return parser(stream, state);
    }

    var ch = stream.next();
    if (ch == "<") {
      if (stream.eat("!")) {
        if (stream.eat("[")) {
          if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>"));
          else return null;
        }
        else if (stream.match("--")) return chain(inBlock("comment", "-->"));
        else if (stream.match("DOCTYPE", true, true)) {
          stream.eatWhile(/[\w\._\-]/);
          return chain(doctype(1));
        }
        else return null;
      }
      else if (stream.eat("?")) {
        stream.eatWhile(/[\w\._\-]/);
        state.tokenize = inBlock("meta", "?>");
        return "meta";
      }
      else {
        type = stream.eat("/") ? "closeTag" : "openTag";
        stream.eatSpace();
        tagName = "";
        var c;
        while ((c = stream.eat(/[^\s\u00a0=<>\"\'\/?]/))) tagName += c;
        state.tokenize = inTag;
        return "tag";
      }
    }
    else if (ch == "&") {
      var ok;
      if (stream.eat("#")) {
        if (stream.eat("x")) {
          ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");          
        } else {
          ok = stream.eatWhile(/[\d]/) && stream.eat(";");
        }
      } else {
        ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
      }
      return ok ? "atom" : "error";
    }
    else {
      stream.eatWhile(/[^&<]/);
      return null;
    }
  }

  function inTag(stream, state) {
    var ch = stream.next();
    if (ch == ">" || (ch == "/" && stream.eat(">"))) {
      state.tokenize = inText;
      type = ch == ">" ? "endTag" : "selfcloseTag";
      return "tag";
    }
    else if (ch == "=") {
      type = "equals";
      return null;
    }
    else if (/[\'\"]/.test(ch)) {
      state.tokenize = inAttribute(ch);
      return state.tokenize(stream, state);
    }
    else {
      stream.eatWhile(/[^\s\u00a0=<>\"\'\/?]/);
      return "word";
    }
  }

  function inAttribute(quote) {
    return function(stream, state) {
      while (!stream.eol()) {
        if (stream.next() == quote) {
          state.tokenize = inTag;
          break;
        }
      }
      return "string";
    };
  }

  function inBlock(style, terminator) {
    return function(stream, state) {
      while (!stream.eol()) {
        if (stream.match(terminator)) {
          state.tokenize = inText;
          break;
        }
        stream.next();
      }
      return style;
    };
  }
  function doctype(depth) {
    return function(stream, state) {
      var ch;
      while ((ch = stream.next()) != null) {
        if (ch == "<") {
          state.tokenize = doctype(depth + 1);
          return state.tokenize(stream, state);
        } else if (ch == ">") {
          if (depth == 1) {
            state.tokenize = inText;
            break;
          } else {
            state.tokenize = doctype(depth - 1);
            return state.tokenize(stream, state);
          }
        }
      }
      return "meta";
    };
  }

  var curState, setStyle;
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) curState.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }

  function pushContext(tagName, startOfLine) {
    var noIndent = Kludges.doNotIndent.hasOwnProperty(tagName) || (curState.context && curState.context.noIndent);
    curState.context = {
      prev: curState.context,
      tagName: tagName,
      indent: curState.indented,
      startOfLine: startOfLine,
      noIndent: noIndent
    };
  }
  function popContext() {
    if (curState.context) curState.context = curState.context.prev;
  }

  function element(type) {
    if (type == "openTag") {
      curState.tagName = tagName;
      return cont(attributes, endtag(curState.startOfLine));
    } else if (type == "closeTag") {
      var err = false;
      if (curState.context) {
        err = curState.context.tagName != tagName;
      } else {
        err = true;
      }
      if (err) setStyle = "error";
      return cont(endclosetag(err));
    }
    return cont();
  }
  function endtag(startOfLine) {
    return function(type) {
      if (type == "selfcloseTag" ||
          (type == "endTag" && Kludges.autoSelfClosers.hasOwnProperty(curState.tagName.toLowerCase())))
        return cont();
      if (type == "endTag") {pushContext(curState.tagName, startOfLine); return cont();}
      return cont();
    };
  }
  function endclosetag(err) {
    return function(type) {
      if (err) setStyle = "error";
      if (type == "endTag") { popContext(); return cont(); }
      setStyle = "error";
      return cont(arguments.callee);
    }
  }

  function attributes(type) {
    if (type == "word") {setStyle = "attribute"; return cont(attributes);}
    if (type == "equals") return cont(attvalue, attributes);
    if (type == "string") {setStyle = "error"; return cont(attributes);}
    return pass();
  }
  function attvalue(type) {
    if (type == "word" && Kludges.allowUnquoted) {setStyle = "string"; return cont();}
    if (type == "string") return cont(attvaluemaybe);
    return pass();
  }
  function attvaluemaybe(type) {
    if (type == "string") return cont(attvaluemaybe);
    else return pass();
  }

  return {
    startState: function() {
      return {tokenize: inText, cc: [], indented: 0, startOfLine: true, tagName: null, context: null};
    },

    token: function(stream, state) {
      if (stream.sol()) {
        state.startOfLine = true;
        state.indented = stream.indentation();
      }
      if (stream.eatSpace()) return null;

      setStyle = type = tagName = null;
      var style = state.tokenize(stream, state);
      state.type = type;
      if ((style || type) && style != "comment") {
        curState = state;
        while (true) {
          var comb = state.cc.pop() || element;
          if (comb(type || style)) break;
        }
      }
      state.startOfLine = false;
      return setStyle || style;
    },

    indent: function(state, textAfter, fullLine) {
      var context = state.context;
      if ((state.tokenize != inTag && state.tokenize != inText) ||
          context && context.noIndent)
        return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
      if (alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
      if (context && /^<\//.test(textAfter))
        context = context.prev;
      while (context && !context.startOfLine)
        context = context.prev;
      if (context) return context.indent + indentUnit;
      else return 0;
    },

    compareStates: function(a, b) {
      if (a.indented != b.indented || a.tokenize != b.tokenize) return false;
      for (var ca = a.context, cb = b.context; ; ca = ca.prev, cb = cb.prev) {
        if (!ca || !cb) return ca == cb;
        if (ca.tagName != cb.tagName) return false;
      }
    },

    electricChars: "/"
  };
});

CodeMirror.defineMIME("application/xml", "xml");
CodeMirror.defineMIME("text/html", {name: "xml", htmlMode: true});

define("thirdparty/CodeMirror2/mode/xml/xml", function(){});

CodeMirror.defineMode("javascript", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var jsonMode = parserConfig.json;

  // Tokenizer

  var keywords = function(){
    function kw(type) {return {type: type, style: "keyword"};}
    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c");
    var operator = kw("operator"), atom = {type: "atom", style: "atom"};
    return {
      "if": A, "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
      "return": C, "break": C, "continue": C, "new": C, "delete": C, "throw": C,
      "var": kw("var"), "const": kw("var"), "let": kw("var"),
      "function": kw("function"), "catch": kw("catch"),
      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
      "in": operator, "typeof": operator, "instanceof": operator,
      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom
    };
  }();

  var isOperatorChar = /[+\-*&%=<>!?|]/;

  function chain(stream, state, f) {
    state.tokenize = f;
    return f(stream, state);
  }

  function nextUntilUnescaped(stream, end) {
    var escaped = false, next;
    while ((next = stream.next()) != null) {
      if (next == end && !escaped)
        return false;
      escaped = !escaped && next == "\\";
    }
    return escaped;
  }

  // Used as scratch variables to communicate multiple values without
  // consing up tons of objects.
  var type, content;
  function ret(tp, style, cont) {
    type = tp; content = cont;
    return style;
  }

  function jsTokenBase(stream, state) {
    var ch = stream.next();
    if (ch == '"' || ch == "'")
      return chain(stream, state, jsTokenString(ch));
    else if (/[\[\]{}\(\),;\:\.]/.test(ch))
      return ret(ch);
    else if (ch == "0" && stream.eat(/x/i)) {
      stream.eatWhile(/[\da-f]/i);
      return ret("number", "number");
    }      
    else if (/\d/.test(ch)) {
      stream.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);
      return ret("number", "number");
    }
    else if (ch == "/") {
      if (stream.eat("*")) {
        return chain(stream, state, jsTokenComment);
      }
      else if (stream.eat("/")) {
        stream.skipToEnd();
        return ret("comment", "comment");
      }
      else if (state.reAllowed) {
        nextUntilUnescaped(stream, "/");
        stream.eatWhile(/[gimy]/); // 'y' is "sticky" option in Mozilla
        return ret("regexp", "string-2");
      }
      else {
        stream.eatWhile(isOperatorChar);
        return ret("operator", null, stream.current());
      }
    }
    else if (ch == "#") {
        stream.skipToEnd();
        return ret("error", "error");
    }
    else if (isOperatorChar.test(ch)) {
      stream.eatWhile(isOperatorChar);
      return ret("operator", null, stream.current());
    }
    else {
      stream.eatWhile(/[\w\$_]/);
      var word = stream.current(), known = keywords.propertyIsEnumerable(word) && keywords[word];
      return (known && state.kwAllowed) ? ret(known.type, known.style, word) :
                     ret("variable", "variable", word);
    }
  }

  function jsTokenString(quote) {
    return function(stream, state) {
      if (!nextUntilUnescaped(stream, quote))
        state.tokenize = jsTokenBase;
      return ret("string", "string");
    };
  }

  function jsTokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = jsTokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  // Parser

  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true};

  function JSLexical(indented, column, type, align, prev, info) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.prev = prev;
    this.info = info;
    if (align != null) this.align = align;
  }

  function inScope(state, varname) {
    for (var v = state.localVars; v; v = v.next)
      if (v.name == varname) return true;
  }

  function parseJS(state, style, type, content, stream) {
    var cc = state.cc;
    // Communicate our context to the combinators.
    // (Less wasteful than consing up a hundred closures on every call.)
    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc;
  
    if (!state.lexical.hasOwnProperty("align"))
      state.lexical.align = true;

    while(true) {
      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
      if (combinator(type, content)) {
        while(cc.length && cc[cc.length - 1].lex)
          cc.pop()();
        if (cx.marked) return cx.marked;
        if (type == "variable" && inScope(state, content)) return "variable-2";
        return style;
      }
    }
  }

  // Combinator utils

  var cx = {state: null, column: null, marked: null, cc: null};
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }
  function register(varname) {
    var state = cx.state;
    if (state.context) {
      cx.marked = "def";
      for (var v = state.localVars; v; v = v.next)
        if (v.name == varname) return;
      state.localVars = {name: varname, next: state.localVars};
    }
  }

  // Combinators

  var defaultVars = {name: "this", next: {name: "arguments"}};
  function pushcontext() {
    if (!cx.state.context) cx.state.localVars = defaultVars;
    cx.state.context = {prev: cx.state.context, vars: cx.state.localVars};
  }
  function popcontext() {
    cx.state.localVars = cx.state.context.vars;
    cx.state.context = cx.state.context.prev;
  }
  function pushlex(type, info) {
    var result = function() {
      var state = cx.state;
      state.lexical = new JSLexical(state.indented, cx.stream.column(), type, null, state.lexical, info)
    };
    result.lex = true;
    return result;
  }
  function poplex() {
    var state = cx.state;
    if (state.lexical.prev) {
      if (state.lexical.type == ")")
        state.indented = state.lexical.indented;
      state.lexical = state.lexical.prev;
    }
  }
  poplex.lex = true;

  function expect(wanted) {
    return function expecting(type) {
      if (type == wanted) return cont();
      else if (wanted == ";") return pass();
      else return cont(arguments.callee);
    };
  }

  function statement(type) {
    if (type == "var") return cont(pushlex("vardef"), vardef1, expect(";"), poplex);
    if (type == "keyword a") return cont(pushlex("form"), expression, statement, poplex);
    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
    if (type == "{") return cont(pushlex("}"), block, poplex);
    if (type == ";") return cont();
    if (type == "function") return cont(functiondef);
    if (type == "for") return cont(pushlex("form"), expect("("), pushlex(")"), forspec1, expect(")"),
                                      poplex, statement, poplex);
    if (type == "variable") return cont(pushlex("stat"), maybelabel);
    if (type == "switch") return cont(pushlex("form"), expression, pushlex("}", "switch"), expect("{"),
                                         block, poplex, poplex);
    if (type == "case") return cont(expression, expect(":"));
    if (type == "default") return cont(expect(":"));
    if (type == "catch") return cont(pushlex("form"), pushcontext, expect("("), funarg, expect(")"),
                                        statement, poplex, popcontext);
    return pass(pushlex("stat"), expression, expect(";"), poplex);
  }
  function expression(type) {
    if (atomicTypes.hasOwnProperty(type)) return cont(maybeoperator);
    if (type == "function") return cont(functiondef);
    if (type == "keyword c") return cont(maybeexpression);
    if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeoperator);
    if (type == "operator") return cont(expression);
    if (type == "[") return cont(pushlex("]"), commasep(expression, "]"), poplex, maybeoperator);
    if (type == "{") return cont(pushlex("}"), commasep(objprop, "}"), poplex, maybeoperator);
    return cont();
  }
  function maybeexpression(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expression);
  }
    
  function maybeoperator(type, value) {
    if (type == "operator" && /\+\+|--/.test(value)) return cont(maybeoperator);
    if (type == "operator") return cont(expression);
    if (type == ";") return;
    if (type == "(") return cont(pushlex(")"), commasep(expression, ")"), poplex, maybeoperator);
    if (type == ".") return cont(property, maybeoperator);
    if (type == "[") return cont(pushlex("]"), expression, expect("]"), poplex, maybeoperator);
  }
  function maybelabel(type) {
    if (type == ":") return cont(poplex, statement);
    return pass(maybeoperator, expect(";"), poplex);
  }
  function property(type) {
    if (type == "variable") {cx.marked = "property"; return cont();}
  }
  function objprop(type) {
    if (type == "variable") cx.marked = "property";
    if (atomicTypes.hasOwnProperty(type)) return cont(expect(":"), expression);
  }
  function commasep(what, end) {
    function proceed(type) {
      if (type == ",") return cont(what, proceed);
      if (type == end) return cont();
      return cont(expect(end));
    }
    return function commaSeparated(type) {
      if (type == end) return cont();
      else return pass(what, proceed);
    };
  }
  function block(type) {
    if (type == "}") return cont();
    return pass(statement, block);
  }
  function vardef1(type, value) {
    if (type == "variable"){register(value); return cont(vardef2);}
    return cont();
  }
  function vardef2(type, value) {
    if (value == "=") return cont(expression, vardef2);
    if (type == ",") return cont(vardef1);
  }
  function forspec1(type) {
    if (type == "var") return cont(vardef1, forspec2);
    if (type == ";") return pass(forspec2);
    if (type == "variable") return cont(formaybein);
    return pass(forspec2);
  }
  function formaybein(type, value) {
    if (value == "in") return cont(expression);
    return cont(maybeoperator, forspec2);
  }
  function forspec2(type, value) {
    if (type == ";") return cont(forspec3);
    if (value == "in") return cont(expression);
    return cont(expression, expect(";"), forspec3);
  }
  function forspec3(type) {
    if (type != ")") cont(expression);
  }
  function functiondef(type, value) {
    if (type == "variable") {register(value); return cont(functiondef);}
    if (type == "(") return cont(pushlex(")"), pushcontext, commasep(funarg, ")"), poplex, statement, popcontext);
  }
  function funarg(type, value) {
    if (type == "variable") {register(value); return cont();}
  }

  // Interface

  return {
    startState: function(basecolumn) {
      return {
        tokenize: jsTokenBase,
        reAllowed: true,
        kwAllowed: true,
        cc: [],
        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
        localVars: null,
        context: null,
        indented: 0
      };
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (!state.lexical.hasOwnProperty("align"))
          state.lexical.align = false;
        state.indented = stream.indentation();
      }
      if (stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);
      if (type == "comment") return style;
      state.reAllowed = type == "operator" || type == "keyword c" || type.match(/^[\[{}\(,;:]$/);
      state.kwAllowed = type != '.';
      return parseJS(state, style, type, content, stream);
    },

    indent: function(state, textAfter) {
      if (state.tokenize != jsTokenBase) return 0;
      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical,
          type = lexical.type, closing = firstChar == type;
      if (type == "vardef") return lexical.indented + 4;
      else if (type == "form" && firstChar == "{") return lexical.indented;
      else if (type == "stat" || type == "form") return lexical.indented + indentUnit;
      else if (lexical.info == "switch" && !closing)
        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
      else return lexical.indented + (closing ? 0 : indentUnit);
    },

    electricChars: ":{}"
  };
});

CodeMirror.defineMIME("text/javascript", "javascript");
CodeMirror.defineMIME("application/json", {name: "javascript", json: true});

define("thirdparty/CodeMirror2/mode/javascript/javascript", function(){});

CodeMirror.defineMode("css", function(config) {
  var indentUnit = config.indentUnit, type;
  function ret(style, tp) {type = tp; return style;}

  function tokenBase(stream, state) {
    var ch = stream.next();
    if (ch == "@") {stream.eatWhile(/[\w\\\-]/); return ret("meta", stream.current());}
    else if (ch == "/" && stream.eat("*")) {
      state.tokenize = tokenCComment;
      return tokenCComment(stream, state);
    }
    else if (ch == "<" && stream.eat("!")) {
      state.tokenize = tokenSGMLComment;
      return tokenSGMLComment(stream, state);
    }
    else if (ch == "=") ret(null, "compare");
    else if ((ch == "~" || ch == "|") && stream.eat("=")) return ret(null, "compare");
    else if (ch == "\"" || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    }
    else if (ch == "#") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("atom", "hash");
    }
    else if (ch == "!") {
      stream.match(/^\s*\w*/);
      return ret("keyword", "important");
    }
    else if (/\d/.test(ch)) {
      stream.eatWhile(/[\w.%]/);
      return ret("number", "unit");
    }
    else if (/[,.+>*\/]/.test(ch)) {
      return ret(null, "select-op");
    }
    else if (/[;{}:\[\]]/.test(ch)) {
      return ret(null, ch);
    }
    else {
      stream.eatWhile(/[\w\\\-]/);
      return ret("variable", "variable");
    }
  }

  function tokenCComment(stream, state) {
    var maybeEnd = false, ch;
    while ((ch = stream.next()) != null) {
      if (maybeEnd && ch == "/") {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenSGMLComment(stream, state) {
    var dashes = 0, ch;
    while ((ch = stream.next()) != null) {
      if (dashes >= 2 && ch == ">") {
        state.tokenize = tokenBase;
        break;
      }
      dashes = (ch == "-") ? dashes + 1 : 0;
    }
    return ret("comment", "comment");
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, ch;
      while ((ch = stream.next()) != null) {
        if (ch == quote && !escaped)
          break;
        escaped = !escaped && ch == "\\";
      }
      if (!escaped) state.tokenize = tokenBase;
      return ret("string", "string");
    };
  }

  return {
    startState: function(base) {
      return {tokenize: tokenBase,
              baseIndent: base || 0,
              stack: []};
    },

    token: function(stream, state) {
      if (stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);

      var context = state.stack[state.stack.length-1];
      if (type == "hash" && context == "rule") style = "atom";
      else if (style == "variable") {
        if (context == "rule") style = "number";
        else if (!context || context == "@media{") style = "tag";
      }

      if (context == "rule" && /^[\{\};]$/.test(type))
        state.stack.pop();
      if (type == "{") {
        if (context == "@media") state.stack[state.stack.length-1] = "@media{";
        else state.stack.push("{");
      }
      else if (type == "}") state.stack.pop();
      else if (type == "@media") state.stack.push("@media");
      else if (context == "{" && type != "comment") state.stack.push("rule");
      return style;
    },

    indent: function(state, textAfter) {
      var n = state.stack.length;
      if (/^\}/.test(textAfter))
        n -= state.stack[state.stack.length-1] == "rule" ? 2 : 1;
      return state.baseIndent + n * indentUnit;
    },

    electricChars: "}"
  };
});

CodeMirror.defineMIME("text/css", "css");

define("thirdparty/CodeMirror2/mode/css/css", function(){});

CodeMirror.defineMode("less", function(config) {
  var indentUnit = config.indentUnit, type;
  function ret(style, tp) {type = tp; return style;}
  //html5 tags
  var tags = ["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","command","datalist","dd","del","details","dfn","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","keygen","kbd","label","legend","li","link","map","mark","menu","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strike","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr"];
  
  function inTagsArray(val){
    for(var i=0; i<tags.length; i++){
      if(val === tags[i]){
	return true;
      }
    }
  }

  function tokenBase(stream, state) {
    var ch = stream.next();

    if (ch == "@") {stream.eatWhile(/[\w\-]/); return ret("meta", stream.current());}
    else if (ch == "/" && stream.eat("*")) {
      state.tokenize = tokenCComment;
      return tokenCComment(stream, state);
    }
    else if (ch == "<" && stream.eat("!")) {
      state.tokenize = tokenSGMLComment;
      return tokenSGMLComment(stream, state);
    }
    else if (ch == "=") ret(null, "compare");
    else if ((ch == "~" || ch == "|") && stream.eat("=")) return ret(null, "compare");
    else if (ch == "\"" || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    }
    else if (ch == "/") { // lesscss e.g.: .png will not be parsed as a class
      if(stream.eat("/")){
	state.tokenize = tokenSComment
      	return tokenSComment(stream, state);
      }else{
	stream.eatWhile(/[\a-zA-Z0-9\-_.]/);
        return ret("number", "unit");
      }
    }
    else if (ch == "!") {
      stream.match(/^\s*\w*/);
      return ret("keyword", "important");
    }
    else if (/\d/.test(ch)) {
      stream.eatWhile(/[\w.%]/);
      return ret("number", "unit");
    }
    else if (/[,+>*\/]/.test(ch)) {//removed . dot character original was [,.+>*\/]
      return ret(null, "select-op");
    }
    else if (/[;{}:\[\]()]/.test(ch)) { //added () char for lesscss original was [;{}:\[\]]
      if(ch == ":"){
	stream.eatWhile(/[active|hover|link|visited]/);
	if( stream.current().match(/[active|hover|link|visited]/)){
	  return ret("tag", "tag");
	}else{
	  return ret(null, ch);	
	}
      }else{
  	return ret(null, ch);
      }
    }
    else if (ch == ".") { // lesscss
      stream.eatWhile(/[\a-zA-Z0-9\-_]/);
      return ret("tag", "tag");
    }
    else if (ch == "#") { // lesscss
      stream.match(/([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/);
      if(stream.current().length >1){
	if(stream.current().match(/([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/) != null){
	  return ret("number", "unit");
	}else{
	  stream.eatWhile(/[\w\-]/);
	  return ret("atom", "tag"); 
	}
      }else{
	stream.eatWhile(/[\w\-]/);
	return ret("atom", "tag");
      }
    }
    else if (ch == "&") {
      stream.eatWhile(/[\w\-]/);
      return ret(null, ch);
    }
    else {
      stream.eatWhile(/[\w\\\-_.%{]/);
      if( stream.eat("(") ){ // lesscss
	return ret(null, ch);
      }else if( stream.current().match(/\-\d|\-.\d/) ){ // lesscss match e.g.: -5px -0.4 etc...
	return ret("number", "unit");
      }else if( inTagsArray(stream.current()) ){ // lesscss match html tags
	return ret("tag", "tag");
      }else{
      	return ret("variable", "variable");
      }
    }
    
  }

  function tokenSComment(stream, state) {// SComment = Slash comment
    stream.skipToEnd();
    state.tokenize = tokenBase;
    return ret("comment", "comment");
  }
  
  function tokenCComment(stream, state) {
    var maybeEnd = false, ch;
    while ((ch = stream.next()) != null) {
      if (maybeEnd && ch == "/") {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenSGMLComment(stream, state) {
    var dashes = 0, ch;
    while ((ch = stream.next()) != null) {
      if (dashes >= 2 && ch == ">") {
        state.tokenize = tokenBase;
        break;
      }
      dashes = (ch == "-") ? dashes + 1 : 0;
    }
    return ret("comment", "comment");
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, ch;
      while ((ch = stream.next()) != null) {
        if (ch == quote && !escaped)
          break;
        escaped = !escaped && ch == "\\";
      }
      if (!escaped) state.tokenize = tokenBase;
      return ret("string", "string");
    };
  }

  return {
    startState: function(base) {
      return {tokenize: tokenBase,
              baseIndent: base || 0,
              stack: []};
    },

    token: function(stream, state) {
      if (stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);

      var context = state.stack[state.stack.length-1];
      if (type == "hash" && context == "rule") style = "atom";
      else if (style == "variable") {
        if (context == "rule") style = null; //"tag"
        else if (!context || context == "@media{") style = "tag";
      }

      if (context == "rule" && /^[\{\};]$/.test(type))
        state.stack.pop();
      if (type == "{") {
        if (context == "@media") state.stack[state.stack.length-1] = "@media{";
        else state.stack.push("{");
      }
      else if (type == "}") state.stack.pop();
      else if (type == "@media") state.stack.push("@media");
      else if (context == "{" && type != "comment") state.stack.push("rule");
      return style;
    },

    indent: function(state, textAfter) {
      var n = state.stack.length;
      if (/^\}/.test(textAfter))
        n -= state.stack[state.stack.length-1] == "rule" ? 2 : 1;
      return state.baseIndent + n * indentUnit;
    },

    electricChars: "}"
  };
});

CodeMirror.defineMIME("text/less", "less");

define("thirdparty/CodeMirror2/mode/less/less", function(){});

CodeMirror.defineMode("htmlmixed", function(config, parserConfig) {
  var htmlMode = CodeMirror.getMode(config, {name: "xml", htmlMode: true});
  var unknownScriptMode = CodeMirror.getMode(config, "");
  var jsMode = CodeMirror.getMode(config, "javascript");
  var cssMode = CodeMirror.getMode(config, "css");

  function html(stream, state) {
    var style = htmlMode.token(stream, state.htmlState);
    if (style == "tag" && stream.current() == ">" && state.htmlState.context) {
      if (/^script$/i.test(state.htmlState.context.tagName)) {
        if (!stream.string.match(/type\s*=\s*["'].+["']/i, false) ||
            stream.string.match(/type\s*=\s*["'](text|application)\/(java|ecma)script["']/i, false)) {
          state.token = javascript;
          state.localState = jsMode.startState(htmlMode.indent(state.htmlState, ""));
          state.mode = "javascript";
        } else {
          state.token = unknownScript;
          state.localState = null;
          state.mode = "";
        }
      }
      else if (/^style$/i.test(state.htmlState.context.tagName)) {
        state.token = css;
        state.localState = cssMode.startState(htmlMode.indent(state.htmlState, ""));
        state.mode = "css";
      }
    }
    return style;
  }
  function maybeBackup(stream, pat, style) {
    var cur = stream.current();
    var close = cur.search(pat);
    if (close > -1) stream.backUp(cur.length - close);
    return style;
  }
  function unknownScript(stream, state) {
    if (stream.match(/^<\/\s*script\s*>/i, false)) {
      state.token = html;
      state.curState = null;
      state.mode = "html";
      return html(stream, state);
    }
    return maybeBackup(stream, /<\/\s*script\s*>/,
                       unknownScriptMode.token(stream, state.localState));
  }
  function javascript(stream, state) {
    if (stream.match(/^<\/\s*script\s*>/i, false)) {
      state.token = html;
      state.curState = null;
      state.mode = "html";
      return html(stream, state);
    }
    return maybeBackup(stream, /<\/\s*script\s*>/,
                       jsMode.token(stream, state.localState));
  }
  function css(stream, state) {
    if (stream.match(/^<\/\s*style\s*>/i, false)) {
      state.token = html;
      state.localState = null;
      state.mode = "html";
      return html(stream, state);
    }
    return maybeBackup(stream, /<\/\s*style\s*>/,
                       cssMode.token(stream, state.localState));
  }

  return {
    startState: function() {
      var state = htmlMode.startState();
      return {token: html, localState: null, mode: "html", htmlState: state};
    },

    copyState: function(state) {
      if (state.localState)
        var local = CodeMirror.copyState(state.token == css ? cssMode : jsMode, state.localState);
      return {token: state.token, localState: local, mode: state.mode,
              htmlState: CodeMirror.copyState(htmlMode, state.htmlState)};
    },

    token: function(stream, state) {
      return state.token(stream, state);
    },

    indent: function(state, textAfter) {
      if (state.token == html || /^\s*<\//.test(textAfter))
        return htmlMode.indent(state.htmlState, textAfter);
      else if (state.token == javascript)
        return jsMode.indent(state.localState, textAfter);
      else
        return cssMode.indent(state.localState, textAfter);
    },

    compareStates: function(a, b) {
      return htmlMode.compareStates(a.htmlState, b.htmlState);
    },

    electricChars: "/{}:"
  }
});

CodeMirror.defineMIME("text/html", "htmlmixed");

define("thirdparty/CodeMirror2/mode/htmlmixed/htmlmixed", function(){});

/*
 * Copyright 2011 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define: false, PathUtils: false, FileError: false, brackets: false */

/**
 * Set of utilites for working with the code editor
 */
define('EditorUtils',['require','exports','module','thirdparty/path-utils/path-utils.min','thirdparty/CodeMirror2/mode/xml/xml','thirdparty/CodeMirror2/mode/javascript/javascript','thirdparty/CodeMirror2/mode/css/css','thirdparty/CodeMirror2/mode/less/less','thirdparty/CodeMirror2/mode/htmlmixed/htmlmixed'],function (require, exports, module) {
    'use strict';

    require("thirdparty/path-utils/path-utils.min");
    require("thirdparty/CodeMirror2/mode/xml/xml");
    require("thirdparty/CodeMirror2/mode/javascript/javascript");
    require("thirdparty/CodeMirror2/mode/css/css");
    require("thirdparty/CodeMirror2/mode/less/less");
    require("thirdparty/CodeMirror2/mode/htmlmixed/htmlmixed");

    /**
     * @private
     * Given a file URL, determines the mode to use based
     * off the file's extension.
     * @param {string} fileUrl  A cannonical file URL to extract the extension from
     */
    function getModeFromFileExtension(fileUrl) {
        var ext = PathUtils.filenameExtension(fileUrl);
        //incase the arg is just the ext
        if (!ext) {
            ext = fileUrl;
        }
        if (ext.charAt(0) === '.') {
            ext = ext.substr(1);
        }

        switch (ext) {

        case "js":
            return "javascript";

        case "json":
            return {name: "javascript", json: true};

        case "css":
            return "css";

        case "less":
            return "less";

        case "html":
        case "htm":
            return "htmlmixed";

        default:
            console.log("Called EditorUtils.js _getModeFromFileExtensions with an unhandled file extension: " + ext);
            return "";
        }
    }

    // Define public API
    exports.getModeFromFileExtension = getModeFromFileExtension;
});
/*
 * Copyright 2012 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false */

define('CodeHintUtils',['require','exports','module'],function (require, exports, module) {
    'use strict';
    
    //constants
    var TAG_NAME = "tagName",
        ATTR_NAME = "attr.name",
        ATTR_VALUE = "attr.value";
    
    /**
     * @private
     * moves the current context backwards by one token
     * @param {editor:{CodeMirror}, pos:{ch:{string}, line:{number}}, token:{object}} ctx
     * @return {boolean} whether the context changed
     */
    function _movePrevToken(ctx) {
        if (ctx.pos.ch <= 0 || ctx.token.start <= 0) {
            //move up a line
            if (ctx.pos.line <= 0) {
                return false; //at the top already
            }
            ctx.pos.line--;
            ctx.pos.ch = ctx.editor.getLine(ctx.pos.line).length;
        } else {
            ctx.pos.ch = ctx.token.start;
        }
        ctx.token = ctx.editor.getTokenAt(ctx.pos);
        return true;
    }
    
    /**
     * @private
     * moves the current context forward by one token
     * @param {editor:{CodeMirror}, pos:{ch:{string}, line:{number}}, token:{object}} ctx
     * @return {boolean} whether the context changed
     */
    function _moveNextToken(ctx) {
        var eol = ctx.editor.getLine(ctx.pos.line).length;
        if (ctx.pos.ch >= eol || ctx.token.end >= eol) {
            //move down a line
            if (ctx.pos.line === ctx.editor.lineCount()) {
                return false; //at the bottom
            }
            ctx.pos.line++;
            ctx.pos.ch = 0;
        } else {
            ctx.pos.ch = ctx.token.end + 1;
        }
        ctx.token = ctx.editor.getTokenAt(ctx.pos);
        return true;
    }
    
   /**
     * @private
     * moves the current context in the given direction, skipping any whitespace it hits
     * @param {function} moveFxn the funciton to move the context
     * @param {editor:{CodeMirror}, pos:{ch:{string}, line:{number}}, token:{object}} ctx
     * @return {boolean} whether the context changed
     */
    function _moveSkippingWhitespace(moveFxn, ctx) {
        if (!moveFxn(ctx)) {
            return false;
        }
        while (!ctx.token.className && ctx.token.string.trim().length === 0) {
            if (!moveFxn(ctx)) {
                return false;
            }
        }
        return true;
    }

   /**
     * @private
     * creates a context object
     * @param {CodeMirror} editor
     * @param {{ch:{string}, line:{number}} pos
     * @return {editor:{CodeMirror}, pos:{ch:{string}, line:{number}}, token:{object}}
     */
    function _getInitialContext(editor, pos) {
        return {
            "editor": editor,
            "pos": pos,
            "token": editor.getTokenAt(pos)
        };
    }
    
    /**
     * @private
     * in the given context, get the character offset of pos from the start of the token
     * @param {editor:{CodeMirror}, pos:{ch:{string}, line:{number}}, token:{object}} context
     * @return {number}
     */
    function _offsetInToken(ctx) {
        var offset = ctx.pos.ch - ctx.token.start;
        if (offset < 0) {
            console.log("CodeHintUtils: _offsetInToken - Invalid context: the pos what not in the current token!");
        }
        return offset;
    }
 
   /**
     * @private
     * Sometimes as attr values are getting typed, if the quotes aren't balanced yet
     * some extra 'non attribute value' text gets included in the token. This attempts
     * to assure the attribute value we grab is always good
     * @param {editor:{CodeMirror}, pos:{ch:{string}, line:{number}}, token:{object}} context
     * @return { val:{string}, offset:{number}}
     */
    function _extractAttrVal(ctx) {
        var attrValue = ctx.token.string;
        var startChar = attrValue.charAt(0);
        var endChar = attrValue.charAt(attrValue.length - 1);
        var offset = _offsetInToken(ctx);
        
        //If this is a fully quoted value, return the whole
        //thing regardless of position
        if (attrValue.length > 1 &&
                (startChar === "'" || startChar === '"') &&
                endChar === startChar) {
            //strip the quotes and return;
            attrValue = attrValue.substring(1, attrValue.length - 1);
            offset = offset - 1 > attrValue.length ? attrValue.length : offset - 1;
            return {val: attrValue, offset: offset};
        }
        
        //The att value it getting edit in progress. There is possible extra
        //stuff in this token state since the quote isn't closed, so we assume
        //the stuff from the quote to the current pos is definitely in the attribute 
        //value.
        if (offset > 0) {
            attrValue = attrValue.substring(0, offset);
        }
        
        //If the attrValue start with a quote, trim that now
        startChar = attrValue.charAt(0);
        if (startChar === "'" || startChar === '"') {
            attrValue = attrValue.substring(1);
            offset--;
        }
        
        return {val: attrValue, offset: offset};
    }
    
    /**
     * @private
     * Gets the tagname from where ever you are in the currect state
     * @param {editor:{CodeMirror}, pos:{ch:{string}, line:{number}}, token:{object}} context
     * @return {string}
     */
    function _extractTagName(ctx) {
        if (ctx.token.state.tagName) {
            return ctx.token.state.tagName; //XML mode
        } else {
            return ctx.token.state.htmlState.tagName; //HTML mode
        }
    }
    
    /**
     * Creates a tagInfo object and assures all the values are entered or are empty strings
     * @param {string} tokenType what is getting edited and should be hinted
     * @param {number} offset where the cursor is for the part getting hinted
     * @param {string} tagName The name of the tag
     * @param {string} attrName The name of the attribute
     * @param {string} attrValue The value of the attribute
     * @return {{tagName:string, attr{name:string, value:string}, hint:{type:{string}, offset{number}}}}
     *              A tagInfo object with some context about the current tag hint.            
     */
    function createTagInfo(tokenType, offset, tagName, attrName, attrValue) {
        return { tagName: tagName || "",
                 attr:
                    { name: attrName || "",
                      value: attrValue || ""},
                 position:
                    { tokenType: tokenType || "",
                      offset: offset || 0} };
    }
    
    /**
     * @private
     * Gets the taginfo starting from the attribute value and moving backwards
     * @param {editor:{CodeMirror}, pos:{ch:{string}, line:{number}}, token:{object}} context
     * @return {string}
     */
    function _getTagInfoStartingFromAttrValue(ctx) {
        // Assume we in the attr value
        // and validate that by going backwards
        var attrInfo = _extractAttrVal(ctx);
        var attrVal = attrInfo.val;
        var offset = attrInfo.offset;
        
        
        //Move to the prev token, and check if it's "="
        if (!_moveSkippingWhitespace(_movePrevToken, ctx) || ctx.token.string !== "=") {
            return createTagInfo();
        }
        
        //Move to the prev token, and check if it's an attribute
        if (!_moveSkippingWhitespace(_movePrevToken, ctx) || ctx.token.className !== "attribute") {
            return createTagInfo();
        }
        
        var attrName = ctx.token.string;
        var tagName = _extractTagName(ctx);
 
        //We're good. 
        return createTagInfo(ATTR_VALUE, offset, tagName, attrName, attrVal);
    }

    /**
     * @private
     * Gets the taginfo starting from the attribute name and moving forwards
     * @param {editor:{CodeMirror}, pos:{ch:{string}, line:{number}}, token:{object}} context
     * @return {string}
     */
    function _getTagInfoStartingFromAttrName(ctx) {
        //Verify We're in the attribute name, move forward and try to extract the rest of
        //the info. If the user it typing the attr the rest might not be here
        if (ctx.token.className !== "attribute") {
            return createTagInfo();
        }
        
        var tagName = _extractTagName(ctx);
        var attrName = ctx.token.string;
        var offset = _offsetInToken(ctx);
        
        if (!_moveSkippingWhitespace(_moveNextToken, ctx) || ctx.token.string !== "=") {
            return createTagInfo(ATTR_NAME, offset, tagName, attrName);
        }
        
        if (!_moveSkippingWhitespace(_moveNextToken, ctx)) {
            return createTagInfo(ATTR_NAME, offset, tagName, attrName);
        }
        //this should be the attrvalue
        var attrInfo = _extractAttrVal(ctx);
        var attrVal = attrInfo.val;
        
        return createTagInfo(ATTR_NAME, offset, tagName, attrName, attrVal);
    }
    
    /**
     * Figure out if we're in a tag, and if we are return info about what to hint about it
     * An example token stream for this tag is <span id="open-files-disclosure-arrow"></span> : 
     *      className:tag       string:"<span"
     *      className:          string:" "
     *      className:attribute string:"id"
     *      className:          string:"="
     *      className:string    string:""open-files-disclosure-arrow""
     *      className:tag       string:"></span>"
     * @param {Editor} editor An instance of a Brackets editor
     * @param {{ch: number, line: number}} constPos  A CM pos (likely from editor.getCursor())
     * @return {{tagName:string, attr{name:string, value:string}, hint:{type:{string}, offset{number}}}}
     *              A tagInfo object with some context about the current tag hint.
     */
    function getTagInfo(editor, constPos) {
        //we're going to changing pos a lot, but we don't want to mess up
        //the pos the caller passed in so we use extend to make a safe copy of it.	
        //This is what pass by value in c++ would do.	
        var pos = $.extend(constPos),
            ctx = _getInitialContext(editor._codeMirror, pos),
            offset = _offsetInToken(ctx),
            tagInfo,
            tokenType;
        
        //check and see where we are in the tag
        //first check, if we're in an all whitespace token and move back
        //and see what's before us
        if (ctx.token.string.length > 0 && ctx.token.string.trim().length === 0) {
            if (!_movePrevToken(ctx)) {
                return createTagInfo();
            }
            
            if (ctx.token.className !== "tag") {
                //if wasn't the tag name, assume it was an attr value
                tagInfo = _getTagInfoStartingFromAttrValue(ctx);
                //We don't want to give context for the previous attr
                //and we want it to look like the user is going to add a new attr
                if (tagInfo.tagName) {
                    return createTagInfo(ATTR_NAME, 0, tagInfo.tagName);
                }
                return createTagInfo();
            }
            
            //we know the tag was here, so they user is adding an attr name
            tokenType = ATTR_NAME;
            offset = 0;
        }
        
        if (ctx.token.className === "tag") {
            //check to see if this is the closing of a tag (either the start or end)
            if (ctx.token.string === ">" ||
                    (ctx.token.string.charAt(0) === '<' && ctx.token.string.charAt(1) === '/')) {
                return createTagInfo();
            }
            
            if (!tokenType) {
                tokenType = TAG_NAME;
                offset--; //need to take off 1 for the leading "<"
            }
            
            //we're actually in the tag, just return that as we have no relevant 
            //info about what attr is selected
            return createTagInfo(tokenType, offset, _extractTagName(ctx));
        }
        
        if (ctx.token.string === "=") {
            //we could be between the attr and the value
            //step back and check
            if (!_moveSkippingWhitespace(_movePrevToken, ctx) || ctx.token.className !== "attribute") {
                return createTagInfo();
            }
            
            //The "=" is added, time to hint for values
            tokenType = ATTR_VALUE;
            offset = 0;
        }
        
        if (ctx.token.className === "attribute") {
            tagInfo = _getTagInfoStartingFromAttrName(ctx);
        } else {
            // if we're not at a tag, "=", or attribute name, assume we're in the value
            tagInfo = _getTagInfoStartingFromAttrValue(ctx);
        }
        
        if (tokenType && tagInfo.tagName) {
            tagInfo.position.tokenType = tokenType;
            tagInfo.position.offset = offset;
        }
        
        return tagInfo;
    }
    
    // Define public API
    exports.TAG_NAME = TAG_NAME;
    exports.ATTR_NAME = ATTR_NAME;
    exports.ATTR_VALUE = ATTR_VALUE;
    
    exports.getTagInfo = getTagInfo;
    //The createTagInfo is really only for the unit tests so they can make the same structure to 
    //compare results with
    exports.createTagInfo = createTagInfo;
});

/*
 * Copyright 2012 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false */

define('KeyMap',['require','exports','module'],function (require, exports, module) {
    'use strict';

    /**
     * @private
     * builds the keyDescriptor string from the given parts
     * @param {boolean} hasCtrl Is Ctrl key enabled
     * @param {boolean} hasAlt Is Alt key enabled
     * @param {boolean} hasShift Is Shift key enabled
     * @param {string} key The key that's pressed
     * @return {string} The normalized key descriptor
     */
    function _buildKeyDescriptor(hasCtrl, hasAlt, hasShift, key) {
        if (!key) {
            console.log("KeyMap _buildKeyDescriptor() - No key provided!");
            return "";
        }
        
        var keyDescriptor = [];
        if (hasCtrl) {
            keyDescriptor.push("Ctrl");
        }
        if (hasAlt) {
            keyDescriptor.push("Alt");
        }
        if (hasShift) {
            keyDescriptor.push("Shift");
        }
        keyDescriptor.push(key);
        
        return keyDescriptor.join("-");
    }
    
    /**
     * @private
     * normalizes the incoming key descriptor so the modifier keys are always specified in the correct order
     * @param {string} The string for a key descriptor, can be in any order, the result will be Ctrl-Alt-Shift-<Key>
     * @return {string} The normalized key descriptor
     */
    function _normalizeKeyDescriptorString(origDescriptor) {
        var hasCtrl = false,
            hasAlt = false,
            hasShift = false,
            key = "";
        
        function _isModifier(left, right, previouslyFound) {
            if (!left || !right) {
                return false;
            }
            left = left.trim().toLowerCase();
            right = right.trim().toLowerCase();
            var matched = (left.length > 0 && left === right);
            if (matched && previouslyFound) {
                console.log("KeyMap _normalizeKeyDescriptorString() - Modifier defined twice: " + origDescriptor);
            }
            return matched;
        }
        
        origDescriptor.split("-").forEach(function parseDescriptor(ele, i, arr) {
            if (_isModifier("ctrl", ele, hasCtrl)) {
                hasCtrl = true;
            } else if (_isModifier("cmd", ele, hasCtrl)) {
                console.log("KeyMap _normalizeKeyDescriptorString() - Cmd getting mapped to Ctrl from: " + origDescriptor);
                hasCtrl = true;
            } else if (_isModifier("alt", ele, hasAlt)) {
                hasAlt = true;
            } else if (_isModifier("opt", ele, hasAlt)) {
                console.log("KeyMap _normalizeKeyDescriptorString() - Opt getting mapped to Alt from: " + origDescriptor);
                hasAlt = true;
            } else if (_isModifier("shift", ele, hasShift)) {
                hasShift = true;
            } else if (key.length > 0) {
                console.log("KeyMap _normalizeKeyDescriptorString() - Multiple keys defined. Using key: " + key + " from: " + origDescriptor);
            } else {
                key = ele;
            }
        });
        
        return _buildKeyDescriptor(hasCtrl, hasAlt, hasShift, key);
    }
    
    /**
     * @private
     * normalizes the incoming map so all the key descriptors are specified the correct way
     * @param {map} map The string for a key descriptor, can be in any order, the result will be Ctrl-Alt-Shift-<Key>
     * @return {map} The normalized map
     */
    function _normalizeMap(map) {
        var finalMap = {};
        Object.keys(map).forEach(function normalizeKey(ele, i, arr) {
            var val = map[ele];
            var normalizedKey = _normalizeKeyDescriptorString(ele);
            if (normalizedKey.length === 0) {
                console.log("KeyMap _normalizeMap() - Rejecting malformed key: " + ele + " (value: " + val + ")");
            } else if (!val) {
                console.log("KeyMap _normalizeMap() - Rejecting key for falsy value: " + ele + " (value: " + val + ")");
            } else if (finalMap[normalizedKey]) {
                console.log("KeyMap _normalizeMap() - Rejecting key because it was defined twice: " + ele + " (value: " + val + ")");
            } else {
                if (normalizedKey !== ele) {
                    console.log("KeyMap _normalizeMap() - Corrected a malformed key: " + ele + " (value: " + val + ")");
                }
                finalMap[normalizedKey] = val;
            }
        });
        return finalMap;
    }
    
    /**
     * @private
     * given a list of bindings, goes through and turns them into a map. The list is filter based 
     * on platform, so if I binding has no specific platform or needs to match the given platform
     * @param [{bindings}] bindings A list of binding objects
     * @param {string} platform The platform to filter on
     */
    function _bindingsToMap(bindings, platform) {
        var map = {};
        bindings.forEach(function transformToMap(ele, i, arr) {
            var keys = Object.keys(ele);
            var platformIndex = keys.indexOf("platform");
            if (platformIndex > -1) {
                if (ele.platform !== platform) {
                    return; //don't add this to the map
                }
                keys.splice(platformIndex, 1);
            }
            if (keys.length !== 1) {
                console.log("KeyMap _bindingsToMap() - bindings list has unknown keys: " + bindings);
                return;
            }
            var key = keys[0];
            map[key] = ele[key];
        });
        return map;
    }
    
    /** class Keymap
     *
     * A keymap specifies how keys are mapped to commands. This currently just holds the map, but in future
     * it will likely be extended to include other metadata about the keymap.
     *
     * Keys are described by strings of the form "[modifier-modifier-...-]key", where modifier is one of
     * Ctrl, Alt, or Shift. If multiple modifiers are specified, they will get normalized to the form
     * "Ctrl-Alt-Shift-<Key>" so modifiers are always stored and lookedup in that order.
     *    -- Ctrl maps to Cmd on Mac. (This means that you can't specifically bind to the Ctrl key on Mac.)
     *    -- Alt maps to the Option key on Mac.
     *    -- Letters must be uppercase, but do not require Shift by default. To indicate that Shift must be held
     *       down, you must specifically include Shift.
     *
     * @constructor
     * @param {args} An object with a list of objects mapping key-description strings to command IDs and a platform
     */
    var KeyMap = function (args) {
        if (args === undefined) {
            throw new Error("All parameters to the KeyMap constructor must be specified");
        }
        this.map = _normalizeMap(_bindingsToMap(args.bindings, args.platform));
    };
    
    /**
     * simple creator
     * @param {map} map An object mapping key-description strings to command IDs.
     */
    function create(map) {
        return new KeyMap(map);
    }
    
    /**
     * Takes a keyboard event and translates it into a key in a key map
     */
    function translateKeyboardEvent(event) {
        var hasCtrl = (event.metaKey || event.ctrlKey),
            hasAlt = (event.altKey),
            hasShift = (event.shiftKey),
            key = String.fromCharCode(event.keyCode);
        
        //From the W3C, if we can get the KeyboardEvent.keyIdentifier then look here
        //As that will let us use keys like then function keys "F5" for commands. The
        //full set of values we can use is here
        //http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/keyset.html#KeySet-Set
        var ident = event.originalEvent.keyIdentifier;
        if (ident) {
            if (ident.charAt(0) === "U" && ident.charAt(1) === "+") {
                //This is a unicode code point like "U+002A", get the 002A and use that
                key = String.fromCharCode(parseInt(ident.substring(2), 16));
            } else {
                //This is some non-character key, just use the raw identifier
                key = ident;
            }
        }
        
        return _buildKeyDescriptor(hasCtrl, hasAlt, hasShift, key);
    }
    
    // Define public API
    exports.create = create;
    exports.translateKeyboardEvent = translateKeyboardEvent;
});

/*
 * Copyright 2011 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false */

define('Commands',['require','exports','module'],function (require, exports, module) {
    'use strict';
    
    /**
     * List of constants for global command IDs.
     */
    exports.FILE_OPEN   = "file.open";
    exports.FILE_NEW    = "file.new";
    exports.FILE_SAVE   = "file.save";
    exports.FILE_CLOSE  = "file.close";
    exports.FILE_CLOSE_ALL = "file.close_all";
    exports.FILE_CLOSE_WINDOW = "file.close_window";
    exports.FILE_ADD_TO_WORKING_SET = "file.addToWorkingSet";
    exports.FILE_RELOAD = "file.reload";
    exports.FILE_QUIT = "file.quit";
    exports.FILE_QUICK_NAVIGATE = "file.quickNaviate";
    exports.DEBUG_RUN_UNIT_TESTS = "debug.runUnitTests";
    exports.DEBUG_JSLINT = "debug.jslint";
    exports.DEBUG_SHOW_PERF_DATA = "debug.showPerfData";
    exports.DEBUG_NEW_BRACKETS_WINDOW = "debug.newBracketsWindow";
});


/*
 * Copyright 2011 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false */

 /**
  * Manages global application commands that can be called from menu items, key bindings, or subparts
  * of the application.
  */
define('CommandManager',['require','exports','module'],function (require, exports, module) {
    'use strict';
    
    var _commands = {};

    /**
     * Registers a global command.
     *
     * @param {string} id The ID of the command.
     * @param {function(...)} command The function to call when the command is executed. Any arguments passed to
     *     execute() (after the id) are passed as arguments to the function. If the function is asynchronous,
     *     it must return a jQuery Deferred that is resolved when the command completes. Otherwise, the
     *     CommandManager will assume it is synchronous, and return a Deferred that is already resolved.
     */
    function register(id, command) {
        if (_commands[id]) {
            throw new Error("Attempting to register an already-registered command: " + id);
        }
        _commands[id] = command;
    }

    /**
     * Runs a global command. Additional arguments are passed to the command.
     *
     * @param {string} id The ID of the command to run.
     * @return {Deferred} a jQuery Deferred that will be resolved when the command completes.
     */
    function execute(id) {
        var command = _commands[id];
        if (command) {
            var result = command.apply(null, Array.prototype.slice.call(arguments, 1));
            if (!result) {
                return (new $.Deferred()).resolve();
            } else {
                return result;
            }
        } else {
            return (new $.Deferred()).reject();
        }
    }

    // Define public API
    exports.register = register;
    exports.execute = execute;
});
/*
 * Copyright 2011 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false */

/**
 * Manages the mapping of keyboard inputs to commands.
 */
define('KeyBindingManager',['require','exports','module','CommandManager'],function (require, exports, module) {
    'use strict';
    
    var CommandManager = require("CommandManager");
    
    /**
     * The currently installed keymap.
     */
    var _keymap = null;

    /**
     * Install the specified keymap as the current keymap, overwriting the existing keymap.
     *
     * @param {KeyMap} keymap The keymap to install.
     */
    function installKeymap(keymap) {
        _keymap = keymap;
    }

    /**
     * Process the keybinding for the current key.
     *
     * @param {string} A key-description string.
     * @return {boolean} true if the key was processed, false otherwise
     */
    function handleKey(key) {
        if (_keymap && _keymap.map[key]) {
            CommandManager.execute(_keymap.map[key]);
            return true;
        }
        return false;
    }

    
    // Define public API
    exports.installKeymap = installKeymap;
    exports.handleKey = handleKey;
});

/*
 * Copyright 2012 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, brackets */

/**
 * This is a collection of utility functions for gathering performance data.
 */
define('PerfUtils',['require','exports','module'],function (require, exports, module) {
    'use strict';
    
    /**
     * Peformance data is stored in this hash object. The key is the name of the
     * test (passed to markStart/addMeasurement), and the value is the time, in 
     * milliseconds, that it took to run the test. If multiple runs of the same test
     * are made, the value is an Array with each run stored as an entry in the Array.
     */
    var perfData = {};
    
    /**
     * Active tests. This is a hash of all tests that have had markStart() called,
     * but have not yet had addMeasurement() called.
     */
    var activeTests = {};
    
    /**
     * Start a new named timer. The name should be as descriptive as possible, since
     * this name will appear as an entry in the performance report. 
     * For example: "Open file: /Users/brackets/src/ProjectManager.js"
     *
     * Multiple timers can be opened simultaneously, but all open timers must have
     * a unique name. 
     */
    function markStart(name) {
        if (activeTests[name]) {
            console.log("Recursive tests with the same name are not supported.");
            return;
        }
        
        activeTests[name] = {
            startTime: brackets.app.getElapsedMilliseconds()
        };
    }
    
    /**
     * Stop a timer and add its measurements to the performance data.
     *
     * Multiple measurements can be stored for any given name. If there are
     * multiple values for a name, they are stored in an Array.
     *
     * If the markStart() was not called for the specified timer, the
     * measured time is relative to app startup.
     */
    function addMeasurement(name) {
        var elapsedTime = brackets.app.getElapsedMilliseconds();
        
        if (activeTests[name]) {
            elapsedTime -= activeTests[name].startTime;
            delete activeTests[name];
        }
        
        if (perfData[name]) {
            // We have existing data, add to it
            if (Array.isArray(perfData[name])) {
                perfData[name].push(elapsedTime);
            } else {
                // Current data is a number, convert to Array
                perfData[name] = [perfData[name], elapsedTime];
            }
        } else {
            perfData[name] = elapsedTime;
        }
    }
    
    exports.markStart       = markStart;
    exports.addMeasurement  = addMeasurement;
    exports.perfData        = perfData;
});
/*
 * Copyright 2012 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false */

define('Menus',['require','exports','module','Commands','CommandManager'],function (require, exports, module) {
    'use strict';
    
    // Load dependent modules
    var Commands                = require("Commands"),
        CommandManager          = require("CommandManager");
    
    function init() {
        // Implements the File menu items
        $("#menu-file-new").click(function () {
            CommandManager.execute(Commands.FILE_NEW);
        });
        $("#menu-file-open").click(function () {
            CommandManager.execute(Commands.FILE_OPEN);
        });
        $("#menu-file-close").click(function () {
            CommandManager.execute(Commands.FILE_CLOSE);
        });
        $("#menu-file-save").click(function () {
            CommandManager.execute(Commands.FILE_SAVE);
        });
        $("#menu-file-quit").click(function () {
            CommandManager.execute(Commands.FILE_QUIT);
        });

        $("#menu-debug-runtests").click(function () {
            CommandManager.execute(Commands.DEBUG_RUN_UNIT_TESTS);
        });
        
        // Other debug menu items
//            $("#menu-debug-wordwrap").click(function() {
//                editor.setOption("lineWrapping", !(editor.getOption("lineWrapping")));
//            });     
        
        $("#menu-debug-jslint").click(function () {
            CommandManager.execute(Commands.DEBUG_JSLINT);
        });
        
        $("#menu-debug-show-perf").click(function () {
            CommandManager.execute(Commands.DEBUG_SHOW_PERF_DATA);
        });
        
        $("#menu-debug-new-brackets-window").click(function () {
            CommandManager.execute(Commands.DEBUG_NEW_BRACKETS_WINDOW);
        });
    }

    // Define public API
    exports.init = init;
});

// jslint.js
// 2012-01-13

// Copyright (c) 2002 Douglas Crockford  (www.JSLint.com)

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// The Software shall be used for Good, not Evil.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// WARNING: JSLint will hurt your feelings.

// JSLINT is a global function. It takes two parameters.

//     var myResult = JSLINT(source, option);

// The first parameter is either a string or an array of strings. If it is a
// string, it will be split on '\n' or '\r'. If it is an array of strings, it
// is assumed that each string represents one line. The source can be a
// JavaScript text, or HTML text, or a JSON text, or a CSS text.

// The second parameter is an optional object of options that control the
// operation of JSLINT. Most of the options are booleans: They are all
// optional and have a default value of false. One of the options, predef,
// can be an array of names, which will be used to declare global variables,
// or an object whose keys are used as global names, with a boolean value
// that determines if they are assignable.

// If it checks out, JSLINT returns true. Otherwise, it returns false.

// If false, you can inspect JSLINT.errors to find out the problems.
// JSLINT.errors is an array of objects containing these properties:

//  {
//      line      : The line (relative to 0) at which the lint was found
//      character : The character (relative to 0) at which the lint was found
//      reason    : The problem
//      evidence  : The text line in which the problem occurred
//      raw       : The raw message before the details were inserted
//      a         : The first detail
//      b         : The second detail
//      c         : The third detail
//      d         : The fourth detail
//  }

// If a stopping error was found, a null will be the last element of the
// JSLINT.errors array. A stopping error means that JSLint was not confident
// enough to continue. It does not necessarily mean that the error was
// especially heinous.

// You can request a Function Report, which shows all of the functions
// and the parameters and vars that they use. This can be used to find
// implied global variables and other problems. The report is in HTML and
// can be inserted in an HTML <body>.

//     var myReport = JSLINT.report(errors_only);

// If errors_only is true, then the report will be limited to only errors.

// You can request a data structure that contains JSLint's results.

//     var myData = JSLINT.data();

// It returns a structure with this form:

//     {
//         errors: [
//             {
//                 line: NUMBER,
//                 character: NUMBER,
//                 reason: STRING,
//                 evidence: STRING
//             }
//         ],
//         functions: [
//             {
//                 name: STRING,
//                 line: NUMBER,
//                 last: NUMBER,
//                 params: [
//                     {
//                         string: STRING
//                     }
//                 ],
//                 closure: [
//                     STRING
//                 ],
//                 var: [
//                     STRING
//                 ],
//                 exception: [
//                     STRING
//                 ],
//                 outer: [
//                     STRING
//                 ],
//                 unused: [
//                     STRING
//                 ],
//                 undef: [
//                     STRING
//                 ],
//                 global: [
//                     STRING
//                 ],
//                 label: [
//                     STRING
//                 ]
//             }
//         ],
//         globals: [
//             STRING
//         ],
//         member: {
//             STRING: NUMBER
//         },
//         urls: [
//             STRING
//         ],
//         json: BOOLEAN
//     }

// Empty arrays will not be included.

// You can obtain the parse tree that JSLint constructed while parsing. The
// latest tree is kept in JSLINT.tree. A nice stringication can be produced
// with

//     JSON.stringify(JSLINT.tree, [
//         'string',  'arity', 'name',  'first',
//         'second', 'third', 'block', 'else'
//     ], 4));

// JSLint provides three directives. They look like slashstar comments, and
// allow for setting options, declaring global variables, and establishing a
// set of allowed property names.

// These directives respect function scope.

// The jslint directive is a special comment that can set one or more options.
// The current option set is

//     anon       true, if the space may be omitted in anonymous function declarations
//     bitwise    true, if bitwise operators should be allowed
//     browser    true, if the standard browser globals should be predefined
//     cap        true, if upper case HTML should be allowed
//     confusion  true, if types can be used inconsistently
//     'continue' true, if the continuation statement should be tolerated
//     css        true, if CSS workarounds should be tolerated
//     debug      true, if debugger statements should be allowed
//     devel      true, if logging should be allowed (console, alert, etc.)
//     eqeq       true, if == should be allowed
//     es5        true, if ES5 syntax should be allowed
//     evil       true, if eval should be allowed
//     forin      true, if for in statements need not filter
//     fragment   true, if HTML fragments should be allowed
//     indent     the indentation factor
//     maxerr     the maximum number of errors to allow
//     maxlen     the maximum length of a source line
//     newcap     true, if constructor names capitalization is ignored
//     node       true, if Node.js globals should be predefined
//     nomen      true, if names may have dangling _
//     on         true, if HTML event handlers should be allowed
//     passfail   true, if the scan should stop on first error
//     plusplus   true, if increment/decrement should be allowed
//     properties true, if all property names must be declared with /*properties*/
//     regexp     true, if the . should be allowed in regexp literals
//     rhino      true, if the Rhino environment globals should be predefined
//     undef      true, if variables can be declared out of order
//     unparam    true, if unused parameters should be tolerated
//     sloppy     true, if the 'use strict'; pragma is optional
//     sub        true, if all forms of subscript notation are tolerated
//     vars       true, if multiple var statements per function should be allowed
//     white      true, if sloppy whitespace is tolerated
//     widget     true  if the Yahoo Widgets globals should be predefined
//     windows    true, if MS Windows-specific globals should be predefined

// For example:

/*jslint
    evil: true, nomen: true, regexp: true
*/

// The properties directive declares an exclusive list of property names.
// Any properties named in the program that are not in the list will
// produce a warning.

// For example:

/*properties
    '\b': string, '\t': string, '\n': string, '\f': string, '\r': string,
    '!=': boolean, '!==': boolean, '"': string, '%': boolean, '\'': string,
    '(begin)', '(breakage)': number, '(confusion)': boolean,
    '(context)': object, '(error)', '(identifier)', '(line)': number,
    '(loopage)': number, '(name)', '(old_property_type)', '(params)',
    '(scope)': object, '(token)', '(vars)', '(verb)', '*': boolean,
    '+': boolean, '-': boolean, '/': *, '<': boolean, '<=': boolean,
    '==': boolean, '===': boolean, '>': boolean, '>=': boolean,
    ADSAFE: boolean, Array, Date, E: string, Function, LN10: string,
    LN2: string, LOG10E: string, LOG2E: string, MAX_VALUE: string,
    MIN_VALUE: string, NEGATIVE_INFINITY: string, Object, PI: string,
    POSITIVE_INFINITY: string, SQRT1_2: string, SQRT2: string, '\\': string,
    a: object, a_label: string, a_not_allowed: string, a_not_defined: string,
    a_scope: string, abbr: object, acronym: object, address: object, adsafe,
    adsafe_a: string, adsafe_autocomplete: string, adsafe_bad_id: string,
    adsafe_div: string, adsafe_fragment: string, adsafe_go: string,
    adsafe_html: string, adsafe_id: string, adsafe_id_go: string,
    adsafe_lib: string, adsafe_lib_second: string, adsafe_missing_id: string,
    adsafe_name_a: string, adsafe_placement: string, adsafe_prefix_a: string,
    adsafe_script: string, adsafe_source: string, adsafe_subscript_a: string,
    adsafe_tag: string, all: boolean, already_defined: string, and: string,
    anon, applet: object, apply: string, approved: array, area: object,
    arity: string, article: object, aside: object, assign: boolean,
    assign_exception: string, assignment_function_expression: string,
    at: number, attribute_case_a: string, audio: object, autocomplete: string,
    avoid_a: string, b: *, background: array, 'background-attachment': array,
    'background-color': array, 'background-image': array,
    'background-position': array, 'background-repeat': array,
    bad_assignment: string, bad_color_a: string, bad_constructor: string,
    bad_entity: string, bad_html: string, bad_id_a: string, bad_in_a: string,
    bad_invocation: string, bad_name_a: string, bad_new: string,
    bad_number: string, bad_operand: string, bad_style: string,
    bad_type: string, bad_url_a: string, bad_wrap: string, base: object,
    bdo: object, big: object, bind: string, bitwise: boolean, block: array,
    blockquote: object, body: object, border: array, 'border-bottom': array,
    'border-bottom-color', 'border-bottom-left-radius',
    'border-bottom-right-radius', 'border-bottom-style': array,
    'border-bottom-width', 'border-collapse': array, 'border-color': array,
    'border-left': array, 'border-left-color', 'border-left-style': array,
    'border-left-width', 'border-radius', 'border-right': array,
    'border-right-color', 'border-right-style': array, 'border-right-width',
    'border-spacing': array, 'border-style': array, 'border-top': array,
    'border-top-color', 'border-top-left-radius', 'border-top-right-radius',
    'border-top-style': array, 'border-top-width', 'border-width': array,
    bottom: array, br: object, braille: boolean, browser: boolean,
    button: object, c, call: string, canvas: object, cap, caption: object,
    'caption-side': array, ceil: string, center: object, charAt: *,
    charCodeAt: *, character, cite: object, clear: array, clip: array, closure,
    cm: boolean, code: object, col: object, colgroup: object, color,
    combine_var: string, command: object, concat: string,
    conditional_assignment: string, confusing_a: string,
    confusing_regexp: string, confusion: boolean, constructor: string,
    constructor_name_a: string, content: array, continue, control_a: string,
    'counter-increment': array, 'counter-reset': array, create: *, css: string,
    cursor: array, d, dangerous_comment: string, dangling_a: string,
    data: function object, datalist: object, dd: object, debug,
    defineProperties: string, defineProperty: string, del: object,
    deleted: string, details: object, devel: boolean, dfn: object,
    dialog: object, dir: object, direction: array, display: array,
    disrupt: boolean, div: object, dl: object, dt: object, duplicate_a: string,
    edge: string, edition: string, else, em: *, embed: object,
    embossed: boolean, empty: boolean, 'empty-cells': array,
    empty_block: string, empty_case: string, empty_class: string,
    entityify: function, eqeq, errors: array, es5: string, eval, every: string,
    evidence, evil: string, ex: boolean, exception, exec: *,
    expected_a: string, expected_a_at_b_c: string, expected_a_b: string,
    expected_a_b_from_c_d: string, expected_at_a: string,
    expected_attribute_a: string, expected_attribute_value_a: string,
    expected_class_a: string, expected_fraction_a: string,
    expected_id_a: string, expected_identifier_a: string,
    expected_identifier_a_reserved: string, expected_lang_a: string,
    expected_linear_a: string, expected_media_a: string,
    expected_name_a: string, expected_nonstandard_style_attribute: string,
    expected_number_a: string, expected_operator_a: string,
    expected_percent_a: string, expected_positive_a: string,
    expected_pseudo_a: string, expected_selector_a: string,
    expected_small_a: string, expected_space_a_b: string,
    expected_string_a: string, expected_style_attribute: string,
    expected_style_pattern: string, expected_tagname_a: string,
    expected_type_a: string, f: string, fieldset: object, figure: object,
    filter: *, first: *, flag, float: array, floor: *, font: *, 'font-family',
    'font-size': array, 'font-size-adjust': array, 'font-stretch': array,
    'font-style': array, 'font-variant': array, 'font-weight': array,
    footer: object, for, forEach: *, for_if: string, forin, form: object,
    fragment, frame: object, frameset: object, freeze: string, from: number,
    fromCharCode: function, fud: function, funct: object, function,
    function_block: string, function_eval: string, function_loop: string,
    function_statement: string, function_strict: string, functions: array,
    getDate: string, getDay: string, getFullYear: string, getHours: string,
    getMilliseconds: string, getMinutes: string, getMonth: string,
    getOwnPropertyDescriptor: string, getOwnPropertyNames: string,
    getPrototypeOf: string, getSeconds: string, getTime: string,
    getTimezoneOffset: string, getUTCDate: string, getUTCDay: string,
    getUTCFullYear: string, getUTCHours: string, getUTCMilliseconds: string,
    getUTCMinutes: string, getUTCMonth: string, getUTCSeconds: string,
    getYear: string, global, globals, h1: object, h2: object, h3: object,
    h4: object, h5: object, h6: object, handheld: boolean, hasOwnProperty: *,
    head: object, header: object, height: array, hgroup: object, hr: object,
    'hta:application': object, html: *, html_confusion_a: string,
    html_handlers: string, i: object, id: string, identifier: boolean,
    identifier_function: string, iframe: object, img: object, immed: boolean,
    implied_evil: string, in, indent: number, indexOf: *, infix_in: string,
    init: function, input: object, ins: object, insecure_a: string,
    isAlpha: function, isArray: function boolean, isDigit: function,
    isExtensible: string, isFrozen: string, isNaN: string,
    isPrototypeOf: string, isSealed: string, join: *, jslint: function boolean,
    json: boolean, kbd: object, keygen: object, keys: *, label: object,
    label_a_b: string, labeled: boolean, lang: string, lastIndex: string,
    lastIndexOf: *, lbp: number, leading_decimal_a: string, led: function,
    left: array, legend: object, length: *, 'letter-spacing': array,
    li: object, lib: boolean, line: number, 'line-height': array, link: object,
    'list-style': array, 'list-style-image': array,
    'list-style-position': array, 'list-style-type': array, map: *,
    margin: array, 'margin-bottom', 'margin-left', 'margin-right',
    'margin-top', mark: object, 'marker-offset': array, match: function,
    'max-height': array, 'max-width': array, maxerr: number,
    maxlen: number, member: object, menu: object, message, meta: object,
    meter: object, 'min-height': function, 'min-width': function,
    missing_a: string, missing_a_after_b: string, missing_option: string,
    missing_property: string, missing_space_a_b: string, missing_url: string,
    missing_use_strict: string, mixed: string, mm: boolean, mode: string,
    move_invocation: string, move_var: string, n: string, name: string,
    name_function: string, nav: object, nested_comment: string,
    newcap: boolean, node: boolean, noframes: object, nomen, noscript: object,
    not: string, not_a_constructor: string, not_a_defined: string,
    not_a_function: string, not_a_label: string, not_a_scope: string,
    not_greater: string, now: string, nud: function, number: number,
    object: object, ol: object, on, opacity, open: boolean, optgroup: object,
    option: object, outer: regexp, outline: array, 'outline-color': array,
    'outline-style': array, 'outline-width', output: object, overflow: array,
    'overflow-x': array, 'overflow-y': array, p: object, padding: array,
    'padding-bottom': function, 'padding-left': function,
    'padding-right': function, 'padding-top': function,
    'page-break-after': array, 'page-break-before': array, param: object,
    parameter_a_get_b: string, parameter_set_a: string, params: array,
    paren: boolean, parent: string, parse: string, passfail, pc: boolean,
    plusplus, pop: *, position: array, postscript: boolean, pre: object,
    predef, preventExtensions: string, print: boolean, progress: object,
    projection: boolean, properties: boolean, propertyIsEnumerable: string,
    prototype: string, pt: boolean, push: *, px: boolean, q: object, quote,
    quotes: array, r: string, radix: string, range: function, raw,
    read_only: string, reason, redefinition_a: string, reduce: string,
    reduceRight: string, regexp, replace: function, report: function,
    reserved: boolean, reserved_a: string, reverse: string, rhino: boolean,
    right: array, rp: object, rt: object, ruby: object, safe: boolean,
    samp: object, scanned_a_b: string, screen: boolean, script: object,
    seal: string, search: function, second: *, section: object, select: object,
    setDate: string, setDay: string, setFullYear: string, setHours: string,
    setMilliseconds: string, setMinutes: string, setMonth: string,
    setSeconds: string, setTime: string, setTimezoneOffset: string,
    setUTCDate: string, setUTCDay: string, setUTCFullYear: string,
    setUTCHours: string, setUTCMilliseconds: string, setUTCMinutes: string,
    setUTCMonth: string, setUTCSeconds: string, setYear: string, shift: *,
    slash_equal: string, slice: string, sloppy, small: object, some: string,
    sort: *, source: object, span: object, speech: boolean, splice: string,
    split: function, src, statement_block: string, stopping: string,
    strange_loop: string, strict: string, string: string, stringify: string,
    strong: object, style: *, styleproperty: regexp, sub: object,
    subscript: string, substr: *, substring: string, sup: object,
    supplant: function, t: string, table: object, 'table-layout': array,
    tag_a_in_b: string, tbody: object, td: object, test: *,
    'text-align': array, 'text-decoration': array, 'text-indent': function,
    'text-shadow': array, 'text-transform': array, textarea: object,
    tfoot: object, th: object, thead: object, third: array, thru: number,
    time: object, title: object, toDateString: string, toExponential: string,
    toFixed: string, toISOString: string, toJSON: string,
    toLocaleDateString: string, toLocaleLowerCase: string,
    toLocaleString: string, toLocaleTimeString: string,
    toLocaleUpperCase: string, toLowerCase: *, toPrecision: string,
    toString: function, toTimeString: string, toUTCString: string,
    toUpperCase: *, token: function, too_long: string, too_many: string,
    top: array, tr: object, trailing_decimal_a: string, tree: string,
    trim: string, tt: object, tty: boolean, tv: boolean, type: string,
    type_confusion_a_b: string, u: object, ul: object, unclosed: string,
    unclosed_comment: string, unclosed_regexp: string, undef: boolean,
    undefined, unescaped_a: string, unexpected_a: string,
    unexpected_char_a_b: string, unexpected_comment: string,
    unexpected_property_a: string, unexpected_space_a_b: string,
    'unicode-bidi': array, unnecessary_initialize: string,
    unnecessary_use: string, unparam, unreachable_a_b: string,
    unrecognized_style_attribute_a: string, unrecognized_tag_a: string,
    unsafe: string, unshift: string, unused: array, url: string, urls: array,
    use_array: string, use_braces: string, use_charAt: string,
    use_object: string, use_or: string, use_param: string,
    used_before_a: string, valueOf: string, var: object, var_a_not: string,
    vars, 'vertical-align': array, video: object, visibility: array,
    warn: boolean, was: object, weird_assignment: string,
    weird_condition: string, weird_new: string, weird_program: string,
    weird_relation: string, weird_ternary: string, white: boolean,
    'white-space': array, widget: boolean, width: array, windows: boolean,
    'word-spacing': array, 'word-wrap': array, wrap: boolean,
    wrap_immediate: string, wrap_regexp: string, write_is_wrong: string,
    writeable: boolean, 'z-index': array
*/

// The global directive is used to declare global variables that can
// be accessed by the program. If a declaration is true, then the variable
// is writeable. Otherwise, it is read-only.

// We build the application inside a function so that we produce only a single
// global variable. That function will be invoked immediately, and its return
// value is the JSLINT function itself. That function is also an object that
// can contain data and other functions.

var JSLINT = (function () {
    'use strict';

    function array_to_object(array, value) {

// Make an object from an array of keys and a common value.

        var i, length = array.length, object = {};
        for (i = 0; i < length; i += 1) {
            object[array[i]] = value;
        }
        return object;
    }


    var adsafe_id,      // The widget's ADsafe id.
        adsafe_may,     // The widget may load approved scripts.
        adsafe_top,     // At the top of the widget script.
        adsafe_went,    // ADSAFE.go has been called.
        allowed_option = {
            anon      : true,
            bitwise   : true,
            browser   : true,
            cap       : true,
            confusion : true,
            'continue': true,
            css       : true,
            debug     : true,
            devel     : true,
            eqeq      : true,
            es5       : true,
            evil      : true,
            forin     : true,
            fragment  : true,
            indent    :   10,
            maxerr    : 1000,
            maxlen    :  256,
            newcap    : true,
            node      : true,
            nomen     : true,
            on        : true,
            passfail  : true,
            plusplus  : true,
            properties: true,
            regexp    : true,
            rhino     : true,
            undef     : true,
            unparam   : true,
            sloppy    : true,
            sub       : true,
            vars      : true,
            white     : true,
            widget    : true,
            windows   : true
        },
        anonname,       // The guessed name for anonymous functions.
        approved,       // ADsafe approved urls.

// These are operators that should not be used with the ! operator.

        bang = {
            '<'  : true,
            '<=' : true,
            '==' : true,
            '===': true,
            '!==': true,
            '!=' : true,
            '>'  : true,
            '>=' : true,
            '+'  : true,
            '-'  : true,
            '*'  : true,
            '/'  : true,
            '%'  : true
        },

// These are property names that should not be permitted in the safe subset.

        banned = array_to_object([
            'arguments', 'callee', 'caller', 'constructor', 'eval', 'prototype',
            'stack', 'unwatch', 'valueOf', 'watch'
        ], true),
        begin,          // The root token

// browser contains a set of global names that are commonly provided by a
// web browser environment.

        browser = array_to_object([
            'clearInterval', 'clearTimeout', 'document', 'event', 'frames',
            'history', 'Image', 'localStorage', 'location', 'name', 'navigator',
            'Option', 'parent', 'screen', 'sessionStorage', 'setInterval',
            'setTimeout', 'Storage', 'window', 'XMLHttpRequest'
        ], false),

// bundle contains the text messages.

        bundle = {
            a_label: "'{a}' is a statement label.",
            a_not_allowed: "'{a}' is not allowed.",
            a_not_defined: "'{a}' is not defined.",
            a_scope: "'{a}' used out of scope.",
            adsafe_a: "ADsafe violation: '{a}'.",
            adsafe_autocomplete: "ADsafe autocomplete violation.",
            adsafe_bad_id: "ADSAFE violation: bad id.",
            adsafe_div: "ADsafe violation: Wrap the widget in a div.",
            adsafe_fragment: "ADSAFE: Use the fragment option.",
            adsafe_go: "ADsafe violation: Misformed ADSAFE.go.",
            adsafe_html: "Currently, ADsafe does not operate on whole HTML " +
                "documents. It operates on <div> fragments and .js files.",
            adsafe_id: "ADsafe violation: id does not match.",
            adsafe_id_go: "ADsafe violation: Missing ADSAFE.id or ADSAFE.go.",
            adsafe_lib: "ADsafe lib violation.",
            adsafe_lib_second: "ADsafe: The second argument to lib must be a function.",
            adsafe_missing_id: "ADSAFE violation: missing ID_.",
            adsafe_name_a: "ADsafe name violation: '{a}'.",
            adsafe_placement: "ADsafe script placement violation.",
            adsafe_prefix_a: "ADsafe violation: An id must have a '{a}' prefix",
            adsafe_script: "ADsafe script violation.",
            adsafe_source: "ADsafe unapproved script source.",
            adsafe_subscript_a: "ADsafe subscript '{a}'.",
            adsafe_tag: "ADsafe violation: Disallowed tag '{a}'.",
            already_defined: "'{a}' is already defined.",
            and: "The '&&' subexpression should be wrapped in parens.",
            assign_exception: "Do not assign to the exception parameter.",
            assignment_function_expression: "Expected an assignment or " +
                "function call and instead saw an expression.",
            attribute_case_a: "Attribute '{a}' not all lower case.",
            avoid_a: "Avoid '{a}'.",
            bad_assignment: "Bad assignment.",
            bad_color_a: "Bad hex color '{a}'.",
            bad_constructor: "Bad constructor.",
            bad_entity: "Bad entity.",
            bad_html: "Bad HTML string",
            bad_id_a: "Bad id: '{a}'.",
            bad_in_a: "Bad for in variable '{a}'.",
            bad_invocation: "Bad invocation.",
            bad_name_a: "Bad name: '{a}'.",
            bad_new: "Do not use 'new' for side effects.",
            bad_number: "Bad number '{a}'.",
            bad_operand: "Bad operand.",
            bad_style: "Bad style.",
            bad_type: "Bad type.",
            bad_url_a: "Bad url '{a}'.",
            bad_wrap: "Do not wrap function literals in parens unless they " +
                "are to be immediately invoked.",
            combine_var: "Combine this with the previous 'var' statement.",
            conditional_assignment: "Expected a conditional expression and " +
                "instead saw an assignment.",
            confusing_a: "Confusing use of '{a}'.",
            confusing_regexp: "Confusing regular expression.",
            constructor_name_a: "A constructor name '{a}' should start with " +
                "an uppercase letter.",
            control_a: "Unexpected control character '{a}'.",
            css: "A css file should begin with @charset 'UTF-8';",
            dangling_a: "Unexpected dangling '_' in '{a}'.",
            dangerous_comment: "Dangerous comment.",
            deleted: "Only properties should be deleted.",
            duplicate_a: "Duplicate '{a}'.",
            empty_block: "Empty block.",
            empty_case: "Empty case.",
            empty_class: "Empty class.",
            es5: "This is an ES5 feature.",
            evil: "eval is evil.",
            expected_a: "Expected '{a}'.",
            expected_a_b: "Expected '{a}' and instead saw '{b}'.",
            expected_a_b_from_c_d: "Expected '{a}' to match '{b}' from line " +
                "{c} and instead saw '{d}'.",
            expected_at_a: "Expected an at-rule, and instead saw @{a}.",
            expected_a_at_b_c: "Expected '{a}' at column {b}, not column {c}.",
            expected_attribute_a: "Expected an attribute, and instead saw [{a}].",
            expected_attribute_value_a: "Expected an attribute value and " +
                "instead saw '{a}'.",
            expected_class_a: "Expected a class, and instead saw .{a}.",
            expected_fraction_a: "Expected a number between 0 and 1 and " +
                "instead saw '{a}'",
            expected_id_a: "Expected an id, and instead saw #{a}.",
            expected_identifier_a: "Expected an identifier and instead saw '{a}'.",
            expected_identifier_a_reserved: "Expected an identifier and " +
                "instead saw '{a}' (a reserved word).",
            expected_linear_a: "Expected a linear unit and instead saw '{a}'.",
            expected_lang_a: "Expected a lang code, and instead saw :{a}.",
            expected_media_a: "Expected a CSS media type, and instead saw '{a}'.",
            expected_name_a: "Expected a name and instead saw '{a}'.",
            expected_nonstandard_style_attribute: "Expected a non-standard " +
                "style attribute and instead saw '{a}'.",
            expected_number_a: "Expected a number and instead saw '{a}'.",
            expected_operator_a: "Expected an operator and instead saw '{a}'.",
            expected_percent_a: "Expected a percentage and instead saw '{a}'",
            expected_positive_a: "Expected a positive number and instead saw '{a}'",
            expected_pseudo_a: "Expected a pseudo, and instead saw :{a}.",
            expected_selector_a: "Expected a CSS selector, and instead saw {a}.",
            expected_small_a: "Expected a small positive integer and instead saw '{a}'",
            expected_space_a_b: "Expected exactly one space between '{a}' and '{b}'.",
            expected_string_a: "Expected a string and instead saw {a}.",
            expected_style_attribute: "Excepted a style attribute, and instead saw '{a}'.",
            expected_style_pattern: "Expected a style pattern, and instead saw '{a}'.",
            expected_tagname_a: "Expected a tagName, and instead saw {a}.",
            expected_type_a: "Expected a type, and instead saw {a}.",
            for_if: "The body of a for in should be wrapped in an if " +
                "statement to filter unwanted properties from the prototype.",
            function_block: "Function statements should not be placed in blocks. " +
                "Use a function expression or move the statement to the top of " +
                "the outer function.",
            function_eval: "The Function constructor is eval.",
            function_loop: "Don't make functions within a loop.",
            function_statement: "Function statements are not invocable. " +
                "Wrap the whole function invocation in parens.",
            function_strict: "Use the function form of 'use strict'.",
            html_confusion_a: "HTML confusion in regular expression '<{a}'.",
            html_handlers: "Avoid HTML event handlers.",
            identifier_function: "Expected an identifier in an assignment " +
                "and instead saw a function invocation.",
            implied_evil: "Implied eval is evil. Pass a function instead of a string.",
            infix_in: "Unexpected 'in'. Compare with undefined, or use the " +
                "hasOwnProperty method instead.",
            insecure_a: "Insecure '{a}'.",
            isNaN: "Use the isNaN function to compare with NaN.",
            label_a_b: "Label '{a}' on '{b}' statement.",
            lang: "lang is deprecated.",
            leading_decimal_a: "A leading decimal point can be confused with a dot: '.{a}'.",
            missing_a: "Missing '{a}'.",
            missing_a_after_b: "Missing '{a}' after '{b}'.",
            missing_option: "Missing option value.",
            missing_property: "Missing property name.",
            missing_space_a_b: "Missing space between '{a}' and '{b}'.",
            missing_url: "Missing url.",
            missing_use_strict: "Missing 'use strict' statement.",
            mixed: "Mixed spaces and tabs.",
            move_invocation: "Move the invocation into the parens that " +
                "contain the function.",
            move_var: "Move 'var' declarations to the top of the function.",
            name_function: "Missing name in function statement.",
            nested_comment: "Nested comment.",
            not: "Nested not.",
            not_a_constructor: "Do not use {a} as a constructor.",
            not_a_defined: "'{a}' has not been fully defined yet.",
            not_a_function: "'{a}' is not a function.",
            not_a_label: "'{a}' is not a label.",
            not_a_scope: "'{a}' is out of scope.",
            not_greater: "'{a}' should not be greater than '{b}'.",
            parameter_a_get_b: "Unexpected parameter '{a}' in get {b} function.",
            parameter_set_a: "Expected parameter (value) in set {a} function.",
            radix: "Missing radix parameter.",
            read_only: "Read only.",
            redefinition_a: "Redefinition of '{a}'.",
            reserved_a: "Reserved name '{a}'.",
            scanned_a_b: "{a} ({b}% scanned).",
            slash_equal: "A regular expression literal can be confused with '/='.",
            statement_block: "Expected to see a statement and instead saw a block.",
            stopping: "Stopping. ",
            strange_loop: "Strange loop.",
            strict: "Strict violation.",
            subscript: "['{a}'] is better written in dot notation.",
            tag_a_in_b: "A '<{a}>' must be within '<{b}>'.",
            too_long: "Line too long.",
            too_many: "Too many errors.",
            trailing_decimal_a: "A trailing decimal point can be confused " +
                "with a dot: '.{a}'.",
            type: "type is unnecessary.",
            type_confusion_a_b: "Type confusion: {a} and {b}.",
            unclosed: "Unclosed string.",
            unclosed_comment: "Unclosed comment.",
            unclosed_regexp: "Unclosed regular expression.",
            unescaped_a: "Unescaped '{a}'.",
            unexpected_a: "Unexpected '{a}'.",
            unexpected_char_a_b: "Unexpected character '{a}' in {b}.",
            unexpected_comment: "Unexpected comment.",
            unexpected_property_a: "Unexpected /*property*/ '{a}'.",
            unexpected_space_a_b: "Unexpected space between '{a}' and '{b}'.",
            unnecessary_initialize: "It is not necessary to initialize '{a}' " +
                "to 'undefined'.",
            unnecessary_use: "Unnecessary 'use strict'.",
            unreachable_a_b: "Unreachable '{a}' after '{b}'.",
            unrecognized_style_attribute_a: "Unrecognized style attribute '{a}'.",
            unrecognized_tag_a: "Unrecognized tag '<{a}>'.",
            unsafe: "Unsafe character.",
            url: "JavaScript URL.",
            use_array: "Use the array literal notation [].",
            use_braces: "Spaces are hard to count. Use {{a}}.",
            use_charAt: "Use the charAt method.",
            use_object: "Use the object literal notation {}.",
            use_or: "Use the || operator.",
            use_param: "Use a named parameter.",
            used_before_a: "'{a}' was used before it was defined.",
            var_a_not: "Variable {a} was not declared correctly.",
            weird_assignment: "Weird assignment.",
            weird_condition: "Weird condition.",
            weird_new: "Weird construction. Delete 'new'.",
            weird_program: "Weird program.",
            weird_relation: "Weird relation.",
            weird_ternary: "Weird ternary.",
            wrap_immediate: "Wrap an immediate function invocation in parentheses " +
                "to assist the reader in understanding that the expression " +
                "is the result of a function, and not the function itself.",
            wrap_regexp: "Wrap the /regexp/ literal in parens to " +
                "disambiguate the slash operator.",
            write_is_wrong: "document.write can be a form of eval."
        },
        comments_off,
        css_attribute_data,
        css_any,

        css_colorData = array_to_object([
            "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige",
            "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown",
            "burlywood", "cadetblue", "chartreuse", "chocolate", "coral",
            "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue",
            "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki",
            "darkmagenta", "darkolivegreen", "darkorange", "darkorchid",
            "darkred", "darksalmon", "darkseagreen", "darkslateblue",
            "darkslategray", "darkturquoise", "darkviolet", "deeppink",
            "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite",
            "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold",
            "goldenrod", "gray", "green", "greenyellow", "honeydew", "hotpink",
            "indianred", "indigo", "ivory", "khaki", "lavender",
            "lavenderblush", "lawngreen", "lemonchiffon", "lightblue",
            "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgreen",
            "lightpink", "lightsalmon", "lightseagreen", "lightskyblue",
            "lightslategray", "lightsteelblue", "lightyellow", "lime",
            "limegreen", "linen", "magenta", "maroon", "mediumaquamarine",
            "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen",
            "mediumslateblue", "mediumspringgreen", "mediumturquoise",
            "mediumvioletred", "midnightblue", "mintcream", "mistyrose",
            "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab",
            "orange", "orangered", "orchid", "palegoldenrod", "palegreen",
            "paleturquoise", "palevioletred", "papayawhip", "peachpuff",
            "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown",
            "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen",
            "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray",
            "snow", "springgreen", "steelblue", "tan", "teal", "thistle",
            "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke",
            "yellow", "yellowgreen",

            "activeborder", "activecaption", "appworkspace", "background",
            "buttonface", "buttonhighlight", "buttonshadow", "buttontext",
            "captiontext", "graytext", "highlight", "highlighttext",
            "inactiveborder", "inactivecaption", "inactivecaptiontext",
            "infobackground", "infotext", "menu", "menutext", "scrollbar",
            "threeddarkshadow", "threedface", "threedhighlight",
            "threedlightshadow", "threedshadow", "window", "windowframe",
            "windowtext"
        ], true),

        css_border_style,
        css_break,

        css_lengthData = {
            '%': true,
            'cm': true,
            'em': true,
            'ex': true,
            'in': true,
            'mm': true,
            'pc': true,
            'pt': true,
            'px': true
        },

        css_media,
        css_overflow,

        descapes = {
            'b': '\b',
            't': '\t',
            'n': '\n',
            'f': '\f',
            'r': '\r',
            '"': '"',
            '/': '/',
            '\\': '\\'
        },

        devel = array_to_object([
            'alert', 'confirm', 'console', 'Debug', 'opera', 'prompt', 'WSH'
        ], false),
        directive,
        escapes = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '\'': '\\\'',
            '"' : '\\"',
            '/' : '\\/',
            '\\': '\\\\'
        },

        funct,          // The current function, including the labels used in
                        // the function, as well as (breakage),
                        // (context), (loopage), (name), (params), (token),
                        // (vars), (verb)

        functionicity = [
            'closure', 'exception', 'global', 'label', 'outer', 'undef',
            'unused', 'var'
        ],

        functions,      // All of the functions
        global_funct,   // The global body
        global_scope,   // The global scope
        html_tag = {
            a:        {},
            abbr:     {},
            acronym:  {},
            address:  {},
            applet:   {},
            area:     {empty: true, parent: ' map '},
            article:  {},
            aside:    {},
            audio:    {},
            b:        {},
            base:     {empty: true, parent: ' head '},
            bdo:      {},
            big:      {},
            blockquote: {},
            body:     {parent: ' html noframes '},
            br:       {empty: true},
            button:   {},
            canvas:   {parent: ' body p div th td '},
            caption:  {parent: ' table '},
            center:   {},
            cite:     {},
            code:     {},
            col:      {empty: true, parent: ' table colgroup '},
            colgroup: {parent: ' table '},
            command:  {parent: ' menu '},
            datalist: {},
            dd:       {parent: ' dl '},
            del:      {},
            details:  {},
            dialog:   {},
            dfn:      {},
            dir:      {},
            div:      {},
            dl:       {},
            dt:       {parent: ' dl '},
            em:       {},
            embed:    {},
            fieldset: {},
            figure:   {},
            font:     {},
            footer:   {},
            form:     {},
            frame:    {empty: true, parent: ' frameset '},
            frameset: {parent: ' html frameset '},
            h1:       {},
            h2:       {},
            h3:       {},
            h4:       {},
            h5:       {},
            h6:       {},
            head:     {parent: ' html '},
            header:   {},
            hgroup:   {},
            hr:       {empty: true},
            'hta:application':
                      {empty: true, parent: ' head '},
            html:     {parent: '*'},
            i:        {},
            iframe:   {},
            img:      {empty: true},
            input:    {empty: true},
            ins:      {},
            kbd:      {},
            keygen:   {},
            label:    {},
            legend:   {parent: ' details fieldset figure '},
            li:       {parent: ' dir menu ol ul '},
            link:     {empty: true, parent: ' head '},
            map:      {},
            mark:     {},
            menu:     {},
            meta:     {empty: true, parent: ' head noframes noscript '},
            meter:    {},
            nav:      {},
            noframes: {parent: ' html body '},
            noscript: {parent: ' body head noframes '},
            object:   {},
            ol:       {},
            optgroup: {parent: ' select '},
            option:   {parent: ' optgroup select '},
            output:   {},
            p:        {},
            param:    {empty: true, parent: ' applet object '},
            pre:      {},
            progress: {},
            q:        {},
            rp:       {},
            rt:       {},
            ruby:     {},
            samp:     {},
            script:   {empty: true, parent: ' body div frame head iframe p pre span '},
            section:  {},
            select:   {},
            small:    {},
            span:     {},
            source:   {},
            strong:   {},
            style:    {parent: ' head ', empty: true},
            sub:      {},
            sup:      {},
            table:    {},
            tbody:    {parent: ' table '},
            td:       {parent: ' tr '},
            textarea: {},
            tfoot:    {parent: ' table '},
            th:       {parent: ' tr '},
            thead:    {parent: ' table '},
            time:     {},
            title:    {parent: ' head '},
            tr:       {parent: ' table tbody thead tfoot '},
            tt:       {},
            u:        {},
            ul:       {},
            'var':    {},
            video:    {}
        },

        ids,            // HTML ids
        in_block,
        indent,
//         infer_statement,// Inference rules for statements
        is_type = array_to_object([
            '*', 'array', 'boolean', 'function', 'number', 'object',
            'regexp', 'string'
        ], true),
        itself,         // JSLint itself
        json_mode,
        lex,            // the tokenizer
        lines,
        lookahead,
        member,
        node = array_to_object([
            'Buffer', 'clearInterval', 'clearTimeout', 'console', 'exports',
            'global', 'module', 'process', 'querystring', 'require',
            'setInterval', 'setTimeout', '__dirname', '__filename'
        ], false),
        node_js,
        numbery = array_to_object(['indexOf', 'lastIndexOf', 'search'], true),
        next_token,
        option,
        predefined,     // Global variables defined by option
        prereg,
        prev_token,
        property_type,
        regexp_flag = array_to_object(['g', 'i', 'm'], true),
        return_this = function return_this() {
            return this;
        },
        rhino = array_to_object([
            'defineClass', 'deserialize', 'gc', 'help', 'load', 'loadClass',
            'print', 'quit', 'readFile', 'readUrl', 'runCommand', 'seal',
            'serialize', 'spawn', 'sync', 'toint32', 'version'
        ], false),

        scope,      // An object containing an object for each variable in scope
        semicolon_coda = array_to_object([';', '"', '\'', ')'], true),
        src,
        stack,

// standard contains the global names that are provided by the
// ECMAScript standard.

        standard = array_to_object([
            'Array', 'Boolean', 'Date', 'decodeURI', 'decodeURIComponent',
            'encodeURI', 'encodeURIComponent', 'Error', 'eval', 'EvalError',
            'Function', 'isFinite', 'isNaN', 'JSON', 'Math', 'Number', 'Object',
            'parseInt', 'parseFloat', 'RangeError', 'ReferenceError', 'RegExp',
            'String', 'SyntaxError', 'TypeError', 'URIError'
        ], false),

        standard_property_type = {
            E                   : 'number',
            LN2                 : 'number',
            LN10                : 'number',
            LOG2E               : 'number',
            LOG10E              : 'number',
            MAX_VALUE           : 'number',
            MIN_VALUE           : 'number',
            NEGATIVE_INFINITY   : 'number',
            PI                  : 'number',
            POSITIVE_INFINITY   : 'number',
            SQRT1_2             : 'number',
            SQRT2               : 'number',
            apply               : 'function',
            bind                : 'function function',
            call                : 'function',
            ceil                : 'function number',
            charAt              : 'function string',
            concat              : 'function',
            constructor         : 'function object',
            create              : 'function object',
            defineProperty      : 'function object',
            defineProperties    : 'function object',
            every               : 'function boolean',
            exec                : 'function array',
            filter              : 'function array',
            floor               : 'function number',
            forEach             : 'function',
            freeze              : 'function object',
            getDate             : 'function number',
            getDay              : 'function number',
            getFullYear         : 'function number',
            getHours            : 'function number',
            getMilliseconds     : 'function number',
            getMinutes          : 'function number',
            getMonth            : 'function number',
            getOwnPropertyDescriptor
                                : 'function object',
            getOwnPropertyNames : 'function array',
            getPrototypeOf      : 'function object',
            getSeconds          : 'function number',
            getTime             : 'function number',
            getTimezoneOffset   : 'function number',
            getUTCDate          : 'function number',
            getUTCDay           : 'function number',
            getUTCFullYear      : 'function number',
            getUTCHours         : 'function number',
            getUTCMilliseconds  : 'function number',
            getUTCMinutes       : 'function number',
            getUTCMonth         : 'function number',
            getUTCSeconds       : 'function number',
            getYear             : 'function number',
            hasOwnProperty      : 'function boolean',
            indexOf             : 'function number',
            isExtensible        : 'function boolean',
            isFrozen            : 'function boolean',
            isPrototypeOf       : 'function boolean',
            isSealed            : 'function boolean',
            join                : 'function string',
            keys                : 'function array',
            lastIndexOf         : 'function number',
            lastIndex           : 'number',
            length              : 'number',
            map                 : 'function array',
            now                 : 'function number',
            parse               : 'function',
            pop                 : 'function',
            preventExtensions   : 'function object',
            propertyIsEnumerable: 'function boolean',
            prototype           : 'object',
            push                : 'function number',
            reduce              : 'function',
            reduceRight         : 'function',
            reverse             : 'function',
            seal                : 'function object',
            setDate             : 'function',
            setDay              : 'function',
            setFullYear         : 'function',
            setHours            : 'function',
            setMilliseconds     : 'function',
            setMinutes          : 'function',
            setMonth            : 'function',
            setSeconds          : 'function',
            setTime             : 'function',
            setTimezoneOffset   : 'function',
            setUTCDate          : 'function',
            setUTCDay           : 'function',
            setUTCFullYear      : 'function',
            setUTCHours         : 'function',
            setUTCMilliseconds  : 'function',
            setUTCMinutes       : 'function',
            setUTCMonth         : 'function',
            setUTCSeconds       : 'function',
            setYear             : 'function',
            shift               : 'function',
            slice               : 'function',
            some                : 'function boolean',
            sort                : 'function',
            splice              : 'function',
            stringify           : 'function string',
            substr              : 'function string',
            substring           : 'function string',
            test                : 'function boolean',
            toDateString        : 'function string',
            toExponential       : 'function string',
            toFixed             : 'function string',
            toJSON              : 'function',
            toISOString         : 'function string',
            toLocaleDateString  : 'function string',
            toLocaleLowerCase   : 'function string',
            toLocaleUpperCase   : 'function string',
            toLocaleString      : 'function string',
            toLocaleTimeString  : 'function string',
            toLowerCase         : 'function string',
            toPrecision         : 'function string',
            toTimeString        : 'function string',
            toUpperCase         : 'function string',
            toUTCString         : 'function string',
            trim                : 'function string',
            unshift             : 'function number',
            valueOf             : 'function'
        },

        strict_mode,
        syntax = {},
        tab,
        token,
//         type_state_change,
        urls,
        var_mode,
        warnings,

// widget contains the global names which are provided to a Yahoo
// (fna Konfabulator) widget.

        widget = array_to_object([
            'alert', 'animator', 'appleScript', 'beep', 'bytesToUIString',
            'Canvas', 'chooseColor', 'chooseFile', 'chooseFolder',
            'closeWidget', 'COM', 'convertPathToHFS', 'convertPathToPlatform',
            'CustomAnimation', 'escape', 'FadeAnimation', 'filesystem', 'Flash',
            'focusWidget', 'form', 'FormField', 'Frame', 'HotKey', 'Image',
            'include', 'isApplicationRunning', 'iTunes', 'konfabulatorVersion',
            'log', 'md5', 'MenuItem', 'MoveAnimation', 'openURL', 'play',
            'Point', 'popupMenu', 'preferenceGroups', 'preferences', 'print',
            'prompt', 'random', 'Rectangle', 'reloadWidget', 'ResizeAnimation',
            'resolvePath', 'resumeUpdates', 'RotateAnimation', 'runCommand',
            'runCommandInBg', 'saveAs', 'savePreferences', 'screen',
            'ScrollBar', 'showWidgetPreferences', 'sleep', 'speak', 'Style',
            'suppressUpdates', 'system', 'tellWidget', 'Text', 'TextArea',
            'Timer', 'unescape', 'updateNow', 'URL', 'Web', 'widget', 'Window',
            'XMLDOM', 'XMLHttpRequest', 'yahooCheckLogin', 'yahooLogin',
            'yahooLogout'
        ], true),

        windows = array_to_object([
            'ActiveXObject', 'CScript', 'Debug', 'Enumerator', 'System',
            'VBArray', 'WScript', 'WSH'
        ], false),

//  xmode is used to adapt to the exceptions in html parsing.
//  It can have these states:
//      ''      .js script file
//      'html'
//      'outer'
//      'script'
//      'style'
//      'scriptstring'
//      'styleproperty'

        xmode,
        xquote,

// Regular expressions. Some of these are stupidly long.

// unsafe comment or string
        ax = /@cc|<\/?|script|\]\s*\]|<\s*!|&lt/i,
// carriage return, or carriage return linefeed
        crx = /\r/g,
        crlfx = /\r\n/g,
// unsafe characters that are silently deleted by one or more browsers
        cx = /[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/,
// query characters for ids
        dx = /[\[\]\/\\"'*<>.&:(){}+=#]/,
// html token
        hx = /^\s*(['"=>\/&#]|<(?:\/|\!(?:--)?)?|[a-zA-Z][a-zA-Z0-9_\-:]*|[0-9]+|--)/,
// identifier
        ix = /^([a-zA-Z_$][a-zA-Z0-9_$]*)$/,
// javascript url
        jx = /^(?:javascript|jscript|ecmascript|vbscript|mocha|livescript)\s*:/i,
// star slash
        lx = /\*\/|\/\*/,
// characters in strings that need escapement
        nx = /[\u0000-\u001f'\\\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
// outer html token
        ox = /[>&]|<[\/!]?|--/,
// attributes characters
        qx = /[^a-zA-Z0-9+\-_\/ ]/,
// style
        sx = /^\s*([{}:#%.=,>+\[\]@()"';]|[*$\^~]=|[a-zA-Z_][a-zA-Z0-9_\-]*|[0-9]+|<\/|\/\*)/,
        ssx = /^\s*([@#!"'};:\-%.=,+\[\]()*_]|[a-zA-Z][a-zA-Z0-9._\-]*|\/\*?|\d+(?:\.\d+)?|<\/)/,
// token
        tx = /^\s*([(){}\[\]\?.,:;'"~#@`]|={1,3}|\/(\*(jslint|properties|property|members?|globals?)?|=|\/)?|\*[\/=]?|\+(?:=|\++)?|-(?:=|-+)?|[\^%]=?|&[&=]?|\|[|=]?|>{1,3}=?|<(?:[\/=!]|\!(\[|--)?|<=?)?|\!={0,2}|[a-zA-Z_$][a-zA-Z0-9_$]*|[0-9]+(?:[xX][0-9a-fA-F]+|\.[0-9]*)?(?:[eE][+\-]?[0-9]+)?)/,
// url badness
        ux = /&|\+|\u00AD|\.\.|\/\*|%[^;]|base64|url|expression|data|mailto|script/i,

        rx = {
            outer: hx,
            html: hx,
            style: sx,
            styleproperty: ssx
        };


    function F() {}     // Used by Object.create

// Provide critical ES5 functions to ES3.

    if (typeof Array.prototype.filter !== 'function') {
        Array.prototype.filter = function (f) {
            var i, length = this.length, result = [], value;
            for (i = 0; i < length; i += 1) {
                try {
                    value = this[i];
                    if (f(value)) {
                        result.push(value);
                    }
                } catch (ignore) {
                }
            }
            return result;
        };
    }

    if (typeof Array.prototype.forEach !== 'function') {
        Array.prototype.forEach = function (f) {
            var i, length = this.length;
            for (i = 0; i < length; i += 1) {
                try {
                    f(this[i]);
                } catch (ignore) {
                }
            }
        };
    }

    if (typeof Array.isArray !== 'function') {
        Array.isArray = function (o) {
            return Object.prototype.toString.apply(o) === '[object Array]';
        };
    }

    if (!Object.prototype.hasOwnProperty.call(Object, 'create')) {
        Object.create = function (o) {
            F.prototype = o;
            return new F();
        };
    }

    if (typeof Object.keys !== 'function') {
        Object.keys = function (o) {
            var array = [], key;
            for (key in o) {
                if (Object.prototype.hasOwnProperty.call(o, key)) {
                    array.push(key);
                }
            }
            return array;
        };
    }

    if (typeof String.prototype.entityify !== 'function') {
        String.prototype.entityify = function () {
            return this
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        };
    }

    if (typeof String.prototype.isAlpha !== 'function') {
        String.prototype.isAlpha = function () {
            return (this >= 'a' && this <= 'z\uffff') ||
                (this >= 'A' && this <= 'Z\uffff');
        };
    }

    if (typeof String.prototype.isDigit !== 'function') {
        String.prototype.isDigit = function () {
            return (this >= '0' && this <= '9');
        };
    }

    if (typeof String.prototype.supplant !== 'function') {
        String.prototype.supplant = function (o) {
            return this.replace(/\{([^{}]*)\}/g, function (a, b) {
                var replacement = o[b];
                return typeof replacement === 'string' ||
                    typeof replacement === 'number' ? replacement : a;
            });
        };
    }


    function sanitize(a) {

//  Escapify a troublesome character.

        return escapes[a] ||
            '\\u' + ('0000' + a.charCodeAt().toString(16)).slice(-4);
    }


    function add_to_predefined(group) {
        Object.keys(group).forEach(function (name) {
            predefined[name] = group[name];
        });
    }


    function assume() {
        if (!option.safe) {
            if (option.rhino) {
                add_to_predefined(rhino);
                option.rhino = false;
            }
            if (option.devel) {
                add_to_predefined(devel);
                option.devel = false;
            }
            if (option.browser) {
                add_to_predefined(browser);
                option.browser = false;
            }
            if (option.windows) {
                add_to_predefined(windows);
                option.windows = false;
            }
            if (option.node) {
                add_to_predefined(node);
                option.node = false;
                node_js = true;
            }
            if (option.widget) {
                add_to_predefined(widget);
                option.widget = false;
            }
        }
        if (option.type) {
            option.confusion = true;
        }
    }


// Produce an error warning.

    function artifact(tok) {
        if (!tok) {
            tok = next_token;
        }
        return tok.number || tok.string;
    }

    function quit(message, line, character) {
        throw {
            name: 'JSLintError',
            line: line,
            character: character,
            message: bundle.scanned_a_b.supplant({
                a: message,
                b: Math.floor((line / lines.length) * 100)
            })
        };
    }

    function warn(message, offender, a, b, c, d) {
        var character, line, warning;
        offender = offender || next_token;  // `~
        line = offender.line || 0;
        character = offender.from || 0;
        warning = {
            id: '(error)',
            raw: bundle[message] || message,
            evidence: lines[line - 1] || '',
            line: line,
            character: character,
            a: a || (offender.id === '(number)'
                ? String(offender.number)
                : offender.string),
            b: b,
            c: c,
            d: d
        };
        warning.reason = warning.raw.supplant(warning);
        JSLINT.errors.push(warning);
        if (option.passfail) {
            quit(bundle.stopping, line, character);
        }
        warnings += 1;
        if (warnings >= option.maxerr) {
            quit(bundle.too_many, line, character);
        }
        return warning;
    }

    function warn_at(message, line, character, a, b, c, d) {
        return warn(message, {
            line: line,
            from: character
        }, a, b, c, d);
    }

    function stop(message, offender, a, b, c, d) {
        var warning = warn(message, offender, a, b, c, d);
        quit(bundle.stopping, warning.line, warning.character);
    }

    function stop_at(message, line, character, a, b, c, d) {
        return stop(message, {
            line: line,
            from: character
        }, a, b, c, d);
    }

    function expected_at(at) {
        if (!option.white && next_token.from !== at) {
            warn('expected_a_at_b_c', next_token, '', at,
                next_token.from);
        }
    }

    function aint(it, name, expected) {
        if (it[name] !== expected) {
            warn('expected_a_b', it, expected, it[name]);
            return true;
        } else {
            return false;
        }
    }


// lexical analysis and token construction

    lex = (function lex() {
        var character, c, from, length, line, pos, source_row;

// Private lex methods

        function next_line() {
            var at;
            if (line >= lines.length) {
                return false;
            }
            character = 1;
            source_row = lines[line];
            line += 1;
            at = source_row.search(/ \t/);
            if (at >= 0) {
                warn_at('mixed', line, at + 1);
            }
            source_row = source_row.replace(/\t/g, tab);
            at = source_row.search(cx);
            if (at >= 0) {
                warn_at('unsafe', line, at);
            }
            if (option.maxlen && option.maxlen < source_row.length) {
                warn_at('too_long', line, source_row.length);
            }
            return true;
        }

// Produce a token object.  The token inherits from a syntax symbol.

        function it(type, value) {
            var id, the_token;
            if (type === '(string)' || type === '(range)') {
                if (jx.test(value)) {
                    warn_at('url', line, from);
                }
            }
            the_token = Object.create(syntax[(
                type === '(punctuator)' || (type === '(identifier)' &&
                        Object.prototype.hasOwnProperty.call(syntax, value))
                    ? value
                    : type
            )] || syntax['(error)']);
            if (type === '(identifier)') {
                the_token.identifier = true;
                if (value === '__iterator__' || value === '__proto__') {
                    stop_at('reserved_a', line, from, value);
                } else if (!option.nomen &&
                        (value.charAt(0) === '_' ||
                        value.charAt(value.length - 1) === '_')) {
                    warn_at('dangling_a', line, from, value);
                }
            }
            if (type === '(number)') {
                the_token.number = +value;
            } else if (value !== undefined) {
                the_token.string = String(value);
            }
            the_token.line = line;
            the_token.from = from;
            the_token.thru = character;
            id = the_token.id;
            prereg = id && (
                ('(,=:[!&|?{};'.indexOf(id.charAt(id.length - 1)) >= 0) ||
                id === 'return' || id === 'case'
            );
            return the_token;
        }

        function match(x) {
            var exec = x.exec(source_row), first;
            if (exec) {
                length = exec[0].length;
                first = exec[1];
                c = first.charAt(0);
                source_row = source_row.slice(length);
                from = character + length - first.length;
                character += length;
                return first;
            }
        }

        function string(x) {
            var c, pos = 0, r = '', result;

            function hex(n) {
                var i = parseInt(source_row.substr(pos + 1, n), 16);
                pos += n;
                if (i >= 32 && i <= 126 &&
                        i !== 34 && i !== 92 && i !== 39) {
                    warn_at('unexpected_a', line, character, '\\');
                }
                character += n;
                c = String.fromCharCode(i);
            }

            if (json_mode && x !== '"') {
                warn_at('expected_a', line, character, '"');
            }

            if (xquote === x || (xmode === 'scriptstring' && !xquote)) {
                return it('(punctuator)', x);
            }

            for (;;) {
                while (pos >= source_row.length) {
                    pos = 0;
                    if (xmode !== 'html' || !next_line()) {
                        stop_at('unclosed', line, from);
                    }
                }
                c = source_row.charAt(pos);
                if (c === x) {
                    character += 1;
                    source_row = source_row.slice(pos + 1);
                    result = it('(string)', r);
                    result.quote = x;
                    return result;
                }
                if (c < ' ') {
                    if (c === '\n' || c === '\r') {
                        break;
                    }
                    warn_at('control_a', line, character + pos,
                        source_row.slice(0, pos));
                } else if (c === xquote) {
                    warn_at('bad_html', line, character + pos);
                } else if (c === '<') {
                    if (option.safe && xmode === 'html') {
                        warn_at('adsafe_a', line, character + pos, c);
                    } else if (source_row.charAt(pos + 1) === '/' && (xmode || option.safe)) {
                        warn_at('expected_a_b', line, character,
                            '<\\/', '</');
                    } else if (source_row.charAt(pos + 1) === '!' && (xmode || option.safe)) {
                        warn_at('unexpected_a', line, character, '<!');
                    }
                } else if (c === '\\') {
                    if (xmode === 'html') {
                        if (option.safe) {
                            warn_at('adsafe_a', line, character + pos, c);
                        }
                    } else if (xmode === 'styleproperty') {
                        pos += 1;
                        character += 1;
                        c = source_row.charAt(pos);
                        if (c !== x) {
                            warn_at('unexpected_a', line, character, '\\');
                        }
                    } else {
                        pos += 1;
                        character += 1;
                        c = source_row.charAt(pos);
                        switch (c) {
                        case '':
                            if (!option.es5) {
                                warn_at('es5', line, character);
                            }
                            next_line();
                            pos = -1;
                            break;
                        case xquote:
                            warn_at('bad_html', line, character + pos);
                            break;
                        case '\'':
                            if (json_mode) {
                                warn_at('unexpected_a', line, character, '\\\'');
                            }
                            break;
                        case 'u':
                            hex(4);
                            break;
                        case 'v':
                            if (json_mode) {
                                warn_at('unexpected_a', line, character, '\\v');
                            }
                            c = '\v';
                            break;
                        case 'x':
                            if (json_mode) {
                                warn_at('unexpected_a', line, character, '\\x');
                            }
                            hex(2);
                            break;
                        default:
                            c = descapes[c];
                            if (typeof c !== 'string') {
                                warn_at('unexpected_a', line, character, '\\');
                            }
                        }
                    }
                }
                r += c;
                character += 1;
                pos += 1;
            }
        }

        function number(snippet) {
            var digit;
            if (xmode !== 'style' && xmode !== 'styleproperty' &&
                    source_row.charAt(0).isAlpha()) {
                warn_at('expected_space_a_b',
                    line, character, c, source_row.charAt(0));
            }
            if (c === '0') {
                digit = snippet.charAt(1);
                if (digit.isDigit()) {
                    if (token.id !== '.' && xmode !== 'styleproperty') {
                        warn_at('unexpected_a', line, character, snippet);
                    }
                } else if (json_mode && (digit === 'x' || digit === 'X')) {
                    warn_at('unexpected_a', line, character, '0x');
                }
            }
            if (snippet.slice(snippet.length - 1) === '.') {
                warn_at('trailing_decimal_a', line, character, snippet);
            }
            if (xmode !== 'style') {
                digit = +snippet;
                if (!isFinite(digit)) {
                    warn_at('bad_number', line, character, snippet);
                }
                snippet = digit;
            }
            return it('(number)', snippet);
        }

        function comment(snippet) {
            if (comments_off || src || (xmode && xmode !== 'script' &&
                    xmode !== 'style' && xmode !== 'styleproperty')) {
                warn_at('unexpected_comment', line, character);
            } else if (xmode === 'script' && /<\//i.test(source_row)) {
                warn_at('unexpected_a', line, character, '<\/');
            } else if (option.safe && ax.test(snippet)) {
                warn_at('dangerous_comment', line, character);
            }
        }

        function regexp() {
            var b,
                bit,
                captures = 0,
                depth = 0,
                flag = '',
                high,
                letter,
                length = 0,
                low,
                potential,
                quote,
                result;
            for (;;) {
                b = true;
                c = source_row.charAt(length);
                length += 1;
                switch (c) {
                case '':
                    stop_at('unclosed_regexp', line, from);
                    return;
                case '/':
                    if (depth > 0) {
                        warn_at('unescaped_a', line, from + length, '/');
                    }
                    c = source_row.slice(0, length - 1);
                    potential = Object.create(regexp_flag);
                    for (;;) {
                        letter = source_row.charAt(length);
                        if (potential[letter] !== true) {
                            break;
                        }
                        potential[letter] = false;
                        length += 1;
                        flag += letter;
                    }
                    if (source_row.charAt(length).isAlpha()) {
                        stop_at('unexpected_a', line, from, source_row.charAt(length));
                    }
                    character += length;
                    source_row = source_row.slice(length);
                    quote = source_row.charAt(0);
                    if (quote === '/' || quote === '*') {
                        stop_at('confusing_regexp', line, from);
                    }
                    result = it('(regexp)', c);
                    result.flag = flag;
                    return result;
                case '\\':
                    c = source_row.charAt(length);
                    if (c < ' ') {
                        warn_at('control_a', line, from + length, String(c));
                    } else if (c === '<') {
                        warn_at(bundle.unexpected_a, line, from + length, '\\');
                    }
                    length += 1;
                    break;
                case '(':
                    depth += 1;
                    b = false;
                    if (source_row.charAt(length) === '?') {
                        length += 1;
                        switch (source_row.charAt(length)) {
                        case ':':
                        case '=':
                        case '!':
                            length += 1;
                            break;
                        default:
                            warn_at(bundle.expected_a_b, line, from + length,
                                ':', source_row.charAt(length));
                        }
                    } else {
                        captures += 1;
                    }
                    break;
                case '|':
                    b = false;
                    break;
                case ')':
                    if (depth === 0) {
                        warn_at('unescaped_a', line, from + length, ')');
                    } else {
                        depth -= 1;
                    }
                    break;
                case ' ':
                    pos = 1;
                    while (source_row.charAt(length) === ' ') {
                        length += 1;
                        pos += 1;
                    }
                    if (pos > 1) {
                        warn_at('use_braces', line, from + length, pos);
                    }
                    break;
                case '[':
                    c = source_row.charAt(length);
                    if (c === '^') {
                        length += 1;
                        if (!option.regexp) {
                            warn_at('insecure_a', line, from + length, c);
                        } else if (source_row.charAt(length) === ']') {
                            stop_at('unescaped_a', line, from + length, '^');
                        }
                    }
                    bit = false;
                    if (c === ']') {
                        warn_at('empty_class', line, from + length - 1);
                        bit = true;
                    }
klass:              do {
                        c = source_row.charAt(length);
                        length += 1;
                        switch (c) {
                        case '[':
                        case '^':
                            warn_at('unescaped_a', line, from + length, c);
                            bit = true;
                            break;
                        case '-':
                            if (bit) {
                                bit = false;
                            } else {
                                warn_at('unescaped_a', line, from + length, '-');
                                bit = true;
                            }
                            break;
                        case ']':
                            if (!bit) {
                                warn_at('unescaped_a', line, from + length - 1, '-');
                            }
                            break klass;
                        case '\\':
                            c = source_row.charAt(length);
                            if (c < ' ') {
                                warn_at(bundle.control_a, line, from + length, String(c));
                            } else if (c === '<') {
                                warn_at(bundle.unexpected_a, line, from + length, '\\');
                            }
                            length += 1;
                            bit = true;
                            break;
                        case '/':
                            warn_at('unescaped_a', line, from + length - 1, '/');
                            bit = true;
                            break;
                        case '<':
                            if (xmode === 'script') {
                                c = source_row.charAt(length);
                                if (c === '!' || c === '/') {
                                    warn_at(bundle.html_confusion_a, line,
                                        from + length, c);
                                }
                            }
                            bit = true;
                            break;
                        default:
                            bit = true;
                        }
                    } while (c);
                    break;
                case '.':
                    if (!option.regexp) {
                        warn_at('insecure_a', line, from + length, c);
                    }
                    break;
                case ']':
                case '?':
                case '{':
                case '}':
                case '+':
                case '*':
                    warn_at('unescaped_a', line, from + length, c);
                    break;
                case '<':
                    if (xmode === 'script') {
                        c = source_row.charAt(length);
                        if (c === '!' || c === '/') {
                            warn_at(bundle.html_confusion_a, line, from + length, c);
                        }
                    }
                    break;
                }
                if (b) {
                    switch (source_row.charAt(length)) {
                    case '?':
                    case '+':
                    case '*':
                        length += 1;
                        if (source_row.charAt(length) === '?') {
                            length += 1;
                        }
                        break;
                    case '{':
                        length += 1;
                        c = source_row.charAt(length);
                        if (c < '0' || c > '9') {
                            warn_at(bundle.expected_number_a, line,
                                from + length, c);
                        }
                        length += 1;
                        low = +c;
                        for (;;) {
                            c = source_row.charAt(length);
                            if (c < '0' || c > '9') {
                                break;
                            }
                            length += 1;
                            low = +c + (low * 10);
                        }
                        high = low;
                        if (c === ',') {
                            length += 1;
                            high = Infinity;
                            c = source_row.charAt(length);
                            if (c >= '0' && c <= '9') {
                                length += 1;
                                high = +c;
                                for (;;) {
                                    c = source_row.charAt(length);
                                    if (c < '0' || c > '9') {
                                        break;
                                    }
                                    length += 1;
                                    high = +c + (high * 10);
                                }
                            }
                        }
                        if (source_row.charAt(length) !== '}') {
                            warn_at(bundle.expected_a_b, line, from + length,
                                '}', c);
                        } else {
                            length += 1;
                        }
                        if (source_row.charAt(length) === '?') {
                            length += 1;
                        }
                        if (low > high) {
                            warn_at(bundle.not_greater, line, from + length,
                                low, high);
                        }
                        break;
                    }
                }
            }
            c = source_row.slice(0, length - 1);
            character += length;
            source_row = source_row.slice(length);
            return it('(regexp)', c);
        }

// Public lex methods

        return {
            init: function (source) {
                if (typeof source === 'string') {
                    lines = source
                        .replace(crlfx, '\n')
                        .replace(crx, '\n')
                        .split('\n');
                } else {
                    lines = source;
                }
                line = 0;
                next_line();
                from = 1;
            },

            range: function (begin, end) {
                var c, value = '';
                from = character;
                if (source_row.charAt(0) !== begin) {
                    stop_at('expected_a_b', line, character, begin,
                        source_row.charAt(0));
                }
                for (;;) {
                    source_row = source_row.slice(1);
                    character += 1;
                    c = source_row.charAt(0);
                    switch (c) {
                    case '':
                        stop_at('missing_a', line, character, c);
                        break;
                    case end:
                        source_row = source_row.slice(1);
                        character += 1;
                        return it('(range)', value);
                    case xquote:
                    case '\\':
                        warn_at('unexpected_a', line, character, c);
                        break;
                    }
                    value += c;
                }
            },

// token -- this is called by advance to get the next token.

            token: function () {
                var c, i, snippet;

                for (;;) {
                    while (!source_row) {
                        if (!next_line()) {
                            return it('(end)');
                        }
                    }
                    while (xmode === 'outer') {
                        i = source_row.search(ox);
                        if (i === 0) {
                            break;
                        } else if (i > 0) {
                            character += 1;
                            source_row = source_row.slice(i);
                            break;
                        } else {
                            if (!next_line()) {
                                return it('(end)', '');
                            }
                        }
                    }
                    snippet = match(rx[xmode] || tx);
                    if (!snippet) {
                        if (source_row) {
                            if (source_row.charAt(0) === ' ') {
                                if (!option.white) {
                                    warn_at('unexpected_a', line, character,
                                        '(space)');
                                }
                                character += 1;
                                source_row = '';
                            } else {
                                stop_at('unexpected_a', line, character,
                                    source_row.charAt(0));
                            }
                        }
                    } else {

//      identifier

                        c = snippet.charAt(0);
                        if (c.isAlpha() || c === '_' || c === '$') {
                            return it('(identifier)', snippet);
                        }

//      number

                        if (c.isDigit()) {
                            return number(snippet);
                        }
                        switch (snippet) {

//      string

                        case '"':
                        case "'":
                            return string(snippet);

//      // comment

                        case '//':
                            comment(source_row);
                            source_row = '';
                            break;

//      /* comment

                        case '/*':
                            for (;;) {
                                i = source_row.search(lx);
                                if (i >= 0) {
                                    break;
                                }
                                comment(source_row);
                                if (!next_line()) {
                                    stop_at('unclosed_comment', line, character);
                                }
                            }
                            comment(source_row.slice(0, i));
                            character += i + 2;
                            if (source_row.charAt(i) === '/') {
                                stop_at('nested_comment', line, character);
                            }
                            source_row = source_row.slice(i + 2);
                            break;

                        case '':
                            break;
//      /
                        case '/':
                            if (token.id === '/=') {
                                stop_at(
                                    bundle.slash_equal,
                                    line,
                                    from
                                );
                            }
                            return prereg
                                ? regexp()
                                : it('(punctuator)', snippet);

//      punctuator

                        case '<!--':
                            length = line;
//                            c = character;
                            for (;;) {
                                i = source_row.indexOf('--');
                                if (i >= 0) {
                                    break;
                                }
                                i = source_row.indexOf('<!');
                                if (i >= 0) {
                                    stop_at('nested_comment',
                                        line, character + i);
                                }
                                if (!next_line()) {
                                    stop_at('unclosed_comment', length, c);
                                }
                            }
                            length = source_row.indexOf('<!');
                            if (length >= 0 && length < i) {
                                stop_at('nested_comment',
                                    line, character + length);
                            }
                            character += i;
                            if (source_row.charAt(i + 2) !== '>') {
                                stop_at('expected_a', line, character, '-->');
                            }
                            character += 3;
                            source_row = source_row.slice(i + 3);
                            break;
                        case '#':
                            if (xmode === 'html' || xmode === 'styleproperty') {
                                for (;;) {
                                    c = source_row.charAt(0);
                                    if ((c < '0' || c > '9') &&
                                            (c < 'a' || c > 'f') &&
                                            (c < 'A' || c > 'F')) {
                                        break;
                                    }
                                    character += 1;
                                    source_row = source_row.slice(1);
                                    snippet += c;
                                }
                                if (snippet.length !== 4 && snippet.length !== 7) {
                                    warn_at('bad_color_a', line,
                                        from + length, snippet);
                                }
                                return it('(color)', snippet);
                            }
                            return it('(punctuator)', snippet);

                        default:
                            if (xmode === 'outer' && c === '&') {
                                character += 1;
                                source_row = source_row.slice(1);
                                for (;;) {
                                    c = source_row.charAt(0);
                                    character += 1;
                                    source_row = source_row.slice(1);
                                    if (c === ';') {
                                        break;
                                    }
                                    if (!((c >= '0' && c <= '9') ||
                                            (c >= 'a' && c <= 'z') ||
                                            c === '#')) {
                                        stop_at('bad_entity', line, from + length,
                                            character);
                                    }
                                }
                                break;
                            }
                            return it('(punctuator)', snippet);
                        }
                    }
                }
            }
        };
    }());


    function add_label(token, kind, name) {

// Define the symbol in the current function in the current scope.

        name = name || token.string;

// Global variables cannot be created in the safe subset. If a global variable
// already exists, do nothing. If it is predefined, define it.

        if (funct === global_funct) {
            if (option.safe) {
                warn('adsafe_a', token, name);
            }
            if (typeof global_funct[name] !== 'string') {
                token.writeable = typeof predefined[name] === 'boolean'
                    ? predefined[name]
                    : true;
                token.funct = funct;
                global_scope[name] = token;
            }
            if (kind === 'becoming') {
                kind = 'var';
            }

// Ordinary variables.

        } else {

// Warn if the variable already exists.

            if (typeof funct[name] === 'string') {
                if (funct[name] === 'undef') {
                    if (!option.undef) {
                        warn('used_before_a', token, name);
                    }
                    kind = 'var';
                } else {
                    warn('already_defined', token, name);
                }
            } else {

// Add the symbol to the current function.

                token.funct = funct;
                token.writeable = true;
                scope[name] = token;
            }
        }
        funct[name] = kind;
    }


    function peek(distance) {

// Peek ahead to a future token. The distance is how far ahead to look. The
// default is the next token.

        var found, slot = 0;

        distance = distance || 0;
        while (slot <= distance) {
            found = lookahead[slot];
            if (!found) {
                found = lookahead[slot] = lex.token();
            }
            slot += 1;
        }
        return found;
    }


    function advance(id, match) {

// Produce the next token, also looking for programming errors.

        if (indent) {

// If indentation checking was requested, then inspect all of the line breakings.
// The var statement is tricky because the names might be aligned or not. We
// look at the first line break after the var to determine the programmer's
// intention.

            if (var_mode && next_token.line !== token.line) {
                if ((var_mode !== indent || !next_token.edge) &&
                        next_token.from === indent.at -
                        (next_token.edge ? option.indent : 0)) {
                    var dent = indent;
                    for (;;) {
                        dent.at -= option.indent;
                        if (dent === var_mode) {
                            break;
                        }
                        dent = dent.was;
                    }
                    dent.open = false;
                }
                var_mode = null;
            }
            if (next_token.id === '?' && indent.mode === ':' &&
                    token.line !== next_token.line) {
                indent.at -= option.indent;
            }
            if (indent.open) {

// If the token is an edge.

                if (next_token.edge) {
                    if (next_token.edge === 'label') {
                        expected_at(1);
                    } else if (next_token.edge === 'case' || indent.mode === 'statement') {
                        expected_at(indent.at - option.indent);
                    } else if (indent.mode !== 'array' || next_token.line !== token.line) {
                        expected_at(indent.at);
                    }

// If the token is not an edge, but is the first token on the line.

                } else if (next_token.line !== token.line) {
                    if (next_token.from < indent.at + (indent.mode ===
                            'expression' ? 0 : option.indent)) {
                        expected_at(indent.at + option.indent);
                    }
                    indent.wrap = true;
                }
            } else if (next_token.line !== token.line) {
                if (next_token.edge) {
                    expected_at(indent.at);
                } else {
                    indent.wrap = true;
                    if (indent.mode === 'statement' || indent.mode === 'var') {
                        expected_at(indent.at + option.indent);
                    } else if (next_token.from < indent.at + (indent.mode ===
                            'expression' ? 0 : option.indent)) {
                        expected_at(indent.at + option.indent);
                    }
                }
            }
        }

        switch (token.id) {
        case '(number)':
            if (next_token.id === '.') {
                warn('trailing_decimal_a');
            }
            break;
        case '-':
            if (next_token.id === '-' || next_token.id === '--') {
                warn('confusing_a');
            }
            break;
        case '+':
            if (next_token.id === '+' || next_token.id === '++') {
                warn('confusing_a');
            }
            break;
        }
        if (token.id === '(string)' || token.identifier) {
            anonname = token.string;
        }

        if (id && next_token.id !== id) {
            if (match) {
                warn('expected_a_b_from_c_d', next_token, id,
                    match.id, match.line, artifact());
            } else if (!next_token.identifier || next_token.string !== id) {
                warn('expected_a_b', next_token, id, artifact());
            }
        }
        prev_token = token;
        token = next_token;
        next_token = lookahead.shift() || lex.token();
    }


    function advance_identifier(string) {
        if (next_token.identifier && next_token.string === string) {
            advance();
        } else {
            warn('expected_a_b', next_token, string, artifact());
        }
    }


    function do_safe() {
        if (option.adsafe) {
            option.safe = true;
        }
        if (option.safe) {
            option.browser     =
                option['continue'] =
                option.css     =
                option.debug   =
                option.devel   =
                option.evil    =
                option.forin   =
                option.newcap  =
                option.nomen   =
                option.on      =
                option.rhino   =
                option.sloppy  =
                option.sub     =
                option.undef   =
                option.widget  =
                option.windows = false;


            delete predefined.Array;
            delete predefined.Date;
            delete predefined.Function;
            delete predefined.Object;
            delete predefined['eval'];

            add_to_predefined({
                ADSAFE: false,
                lib: false
            });
        }
    }


    function do_globals() {
        var name, writeable;
        for (;;) {
            if (next_token.id !== '(string)' && !next_token.identifier) {
                return;
            }
            name = next_token.string;
            advance();
            writeable = false;
            if (next_token.id === ':') {
                advance(':');
                switch (next_token.id) {
                case 'true':
                    writeable = predefined[name] !== false;
                    advance('true');
                    break;
                case 'false':
                    advance('false');
                    break;
                default:
                    stop('unexpected_a');
                }
            }
            predefined[name] = writeable;
            if (next_token.id !== ',') {
                return;
            }
            advance(',');
        }
    }


    function do_jslint() {
        var name, value;
        while (next_token.id === '(string)' || next_token.identifier) {
            name = next_token.string;
            if (!allowed_option[name]) {
                stop('unexpected_a');
            }
            advance();
            if (next_token.id !== ':') {
                stop('expected_a_b', next_token, ':', artifact());
            }
            advance(':');
            if (typeof allowed_option[name] === 'number') {
                value = next_token.number;
                if (value > allowed_option[name] || value <= 0 ||
                        Math.floor(value) !== value) {
                    stop('expected_small_a');
                }
                option[name] = value;
            } else {
                if (next_token.id === 'true') {
                    option[name] = true;
                } else if (next_token.id === 'false') {
                    option[name] = false;
                } else {
                    stop('unexpected_a');
                }
            }
            advance();
            if (next_token.id === ',') {
                advance(',');
            }
        }
        assume();
    }


    function do_properties() {
        var name, type;
        option.properties = true;
        if (!funct['(old_property_type)']) {
            funct['(old_property_type)'] = property_type;
            property_type = Object.create(property_type);
        }
        for (;;) {
            if (next_token.id !== '(string)' && !next_token.identifier) {
                return;
            }
            name = next_token.string;
            type = '';
            advance();
            if (next_token.id === ':') {
                advance(':');
                if (next_token.id === 'function') {
                    advance('function');
                    if (is_type[next_token.string] === true) {
                        type = 'function ' + next_token.string;
                        advance();
                    } else {
                        type = 'function';
                    }
                } else {
                    type = next_token.string;
                    if (is_type[type] !== true) {
                        warn('expected_type_a', next_token);
                        type = '';
                    }
                    advance();
                }
            }
            property_type[name] = type;
            if (next_token.id !== ',') {
                return;
            }
            advance(',');
        }
    }


    directive = function directive() {
        var command = this.id,
            old_comments_off = comments_off,
            old_indent = indent;
        comments_off = true;
        indent = null;
        if (next_token.line === token.line && next_token.from === token.thru) {
            warn('missing_space_a_b', next_token, artifact(token), artifact());
        }
        if (lookahead.length > 0) {
            warn('unexpected_a', this);
        }
        switch (command) {
        case '/*properties':
        case '/*property':
        case '/*members':
        case '/*member':
            do_properties();
            break;
        case '/*jslint':
            if (option.safe) {
                warn('adsafe_a', this);
            }
            do_jslint();
            break;
        case '/*globals':
        case '/*global':
            if (option.safe) {
                warn('adsafe_a', this);
            }
            do_globals();
            break;
        default:
            stop('unexpected_a', this);
        }
        comments_off = old_comments_off;
        advance('*/');
        indent = old_indent;
    };


// Indentation intention

    function edge(mode) {
        next_token.edge = indent ? indent.open && (mode || 'edge') : '';
    }


    function step_in(mode) {
        var open;
        if (typeof mode === 'number') {
            indent = {
                at: +mode,
                open: true,
                was: indent
            };
        } else if (mode === 'statement') {
            indent = {
                at: indent.at,
                open: true,
                was: indent
            };
        } else if (!indent) {
            indent = {
                at: 1,
                mode: 'statement',
                open: true
            };
        } else {
            open = mode === 'var' || next_token.line !== token.line;
            indent = {
                at: (open || mode === 'control'
                    ? indent.at + option.indent
                    : indent.at) + (indent.wrap ? option.indent : 0),
                mode: mode,
                open: open,
                was: indent
            };
            if (mode === 'var' && open) {
                var_mode = indent;
            }
        }
    }

    function step_out(id, symbol) {
        if (id) {
            if (indent && indent.open) {
                indent.at -= option.indent;
                edge();
            }
            advance(id, symbol);
        }
        if (indent) {
            indent = indent.was;
        }
    }

// Functions for conformance of whitespace.

    function one_space(left, right) {
        left = left || token;
        right = right || next_token;
        if (right.id !== '(end)' && !option.white &&
                (token.line !== right.line ||
                token.thru + 1 !== right.from)) {
            warn('expected_space_a_b', right, artifact(token), artifact(right));
        }
    }

    function one_space_only(left, right) {
        left = left || token;
        right = right || next_token;
        if (right.id !== '(end)' && (left.line !== right.line ||
                (!option.white && left.thru + 1 !== right.from))) {
            warn('expected_space_a_b', right, artifact(left), artifact(right));
        }
    }

    function no_space(left, right) {
        left = left || token;
        right = right || next_token;
        if ((!option.white || xmode === 'styleproperty' || xmode === 'style') &&
                left.thru !== right.from && left.line === right.line) {
            warn('unexpected_space_a_b', right, artifact(left), artifact(right));
        }
    }

    function no_space_only(left, right) {
        left = left || token;
        right = right || next_token;
        if (right.id !== '(end)' && (left.line !== right.line ||
                (!option.white && left.thru !== right.from))) {
            warn('unexpected_space_a_b', right, artifact(left), artifact(right));
        }
    }

    function spaces(left, right) {
        if (!option.white) {
            left = left || token;
            right = right || next_token;
            if (left.thru === right.from && left.line === right.line) {
                warn('missing_space_a_b', right, artifact(left), artifact(right));
            }
        }
    }

    function comma() {
        if (next_token.id !== ',') {
            warn_at('expected_a_b', token.line, token.thru, ',', artifact());
        } else {
            if (!option.white) {
                no_space_only();
            }
            advance(',');
            spaces();
        }
    }


    function semicolon() {
        if (next_token.id !== ';') {
            warn_at('expected_a_b', token.line, token.thru, ';', artifact());
        } else {
            if (!option.white) {
                no_space_only();
            }
            advance(';');
            if (semicolon_coda[next_token.id] !== true) {
                spaces();
            }
        }
    }

    function use_strict() {
        if (next_token.string === 'use strict') {
            if (strict_mode) {
                warn('unnecessary_use');
            }
            edge();
            advance();
            semicolon();
            strict_mode = true;
            option.newcap = false;
            option.undef = false;
            return true;
        } else {
            return false;
        }
    }


    function are_similar(a, b) {
        if (a === b) {
            return true;
        }
        if (Array.isArray(a)) {
            if (Array.isArray(b) && a.length === b.length) {
                var i;
                for (i = 0; i < a.length; i += 1) {
                    if (!are_similar(a[i], b[i])) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        }
        if (Array.isArray(b)) {
            return false;
        }
        if (a.id === '(number)' && b.id === '(number)') {
            return a.number === b.number;
        }
        if (a.arity === b.arity && a.string === b.string) {
            switch (a.arity) {
            case 'prefix':
            case 'suffix':
            case undefined:
                return a.id === b.id && are_similar(a.first, b.first);
            case 'infix':
                return are_similar(a.first, b.first) &&
                    are_similar(a.second, b.second);
            case 'ternary':
                return are_similar(a.first, b.first) &&
                    are_similar(a.second, b.second) &&
                    are_similar(a.third, b.third);
            case 'function':
            case 'regexp':
                return false;
            default:
                return true;
            }
        } else {
            if (a.id === '.' && b.id === '[' && b.arity === 'infix') {
                return a.second.string === b.second.string && b.second.id === '(string)';
            } else if (a.id === '[' && a.arity === 'infix' && b.id === '.') {
                return a.second.string === b.second.string && a.second.id === '(string)';
            }
        }
        return false;
    }


// This is the heart of JSLINT, the Pratt parser. In addition to parsing, it
// is looking for ad hoc lint patterns. We add .fud to Pratt's model, which is
// like .nud except that it is only used on the first token of a statement.
// Having .fud makes it much easier to define statement-oriented languages like
// JavaScript. I retained Pratt's nomenclature.

// .nud     Null denotation
// .fud     First null denotation
// .led     Left denotation
//  lbp     Left binding power
//  rbp     Right binding power

// They are elements of the parsing method called Top Down Operator Precedence.

    function expression(rbp, initial) {

// rbp is the right binding power.
// initial indicates that this is the first expression of a statement.

        var left;
        if (next_token.id === '(end)') {
            stop('unexpected_a', token, next_token.id);
        }
        advance();
        if (option.safe && scope[token.string] &&
                scope[token.string] === global_scope[token.string] &&
                (next_token.id !== '(' && next_token.id !== '.')) {
            warn('adsafe_a', token);
        }
        if (initial) {
            anonname = 'anonymous';
            funct['(verb)'] = token.string;
        }
        if (initial === true && token.fud) {
            left = token.fud();
        } else {
            if (token.nud) {
                left = token.nud();
            } else {
                if (next_token.id === '(number)' && token.id === '.') {
                    warn('leading_decimal_a', token, artifact());
                    advance();
                    return token;
                } else {
                    stop('expected_identifier_a', token, token.id);
                }
            }
            while (rbp < next_token.lbp) {
                advance();
                if (token.led) {
                    left = token.led(left);
                } else {
                    stop('expected_operator_a', token, token.id);
                }
            }
        }
        return left;
    }


// Functional constructors for making the symbols that will be inherited by
// tokens.

    function symbol(s, p) {
        var x = syntax[s];
        if (!x || typeof x !== 'object') {
            syntax[s] = x = {
                id: s,
                lbp: p || 0,
                string: s
            };
        }
        return x;
    }

    function postscript(x) {
        x.postscript = true;
        return x;
    }

    function ultimate(s) {
        var x = symbol(s, 0);
        x.from = 1;
        x.thru = 1;
        x.line = 0;
        x.edge = 'edge';
        s.string = s;
        return postscript(x);
    }


    function stmt(s, f) {
        var x = symbol(s);
        x.identifier = x.reserved = true;
        x.fud = f;
        return x;
    }

    function labeled_stmt(s, f) {
        var x = stmt(s, f);
        x.labeled = true;
    }

    function disrupt_stmt(s, f) {
        var x = stmt(s, f);
        x.disrupt = true;
    }


    function reserve_name(x) {
        var c = x.id.charAt(0);
        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
            x.identifier = x.reserved = true;
        }
        return x;
    }


    function prefix(s, f, type) {
        var x = symbol(s, 150);
        reserve_name(x);
        x.nud = typeof f === 'function'
            ? f
            : function () {
                if (s === 'typeof') {
                    one_space();
                } else {
                    no_space_only();
                }
                this.first = expression(150);
                this.arity = 'prefix';
                if (this.id === '++' || this.id === '--') {
                    if (!option.plusplus) {
                        warn('unexpected_a', this);
                    } else if ((!this.first.identifier || this.first.reserved) &&
                            this.first.id !== '.' && this.first.id !== '[') {
                        warn('bad_operand', this);
                    }
                }
                this.type = type;
                return this;
            };
        return x;
    }


    function type(s, t, nud) {
        var x = symbol(s);
        x.arity = x.type = t;
        if (nud) {
            x.nud = nud;
        }
        return x;
    }


    function reserve(s, f) {
        var x = symbol(s);
        x.identifier = x.reserved = true;
        if (typeof f === 'function') {
            x.nud = f;
        }
        return x;
    }


    function constant(name, type) {
        var x = reserve(name);
        x.type = type;
        x.string = name;
        x.nud = return_this;
        return x;
    }


    function reservevar(s, v) {
        return reserve(s, function () {
            if (typeof v === 'function') {
                v(this);
            }
            return this;
        });
    }


    function infix(s, p, f, type, w) {
        var x = symbol(s, p);
        reserve_name(x);
        x.led = function (left) {
            this.arity = 'infix';
            if (!w) {
                spaces(prev_token, token);
                spaces();
            }
            if (!option.bitwise && this.bitwise) {
                warn('unexpected_a', this);
            }
            if (typeof f === 'function') {
                return f(left, this);
            } else {
                this.first = left;
                this.second = expression(p);
                return this;
            }
        };
        if (type) {
            x.type = type;
        }
        return x;
    }

    function expected_relation(node, message) {
        if (node.assign) {
            warn(message || bundle.conditional_assignment, node);
        }
        return node;
    }

    function expected_condition(node, message) {
        switch (node.id) {
        case '[':
        case '-':
            if (node.arity !== 'infix') {
                warn(message || bundle.weird_condition, node);
            }
            break;
        case 'false':
        case 'function':
        case 'Infinity':
        case 'NaN':
        case 'null':
        case 'true':
        case 'undefined':
        case 'void':
        case '(number)':
        case '(regexp)':
        case '(string)':
        case '{':
            warn(message || bundle.weird_condition, node);
            break;
        case '(':
            if (node.first.id === '.' && numbery[node.first.second.string] === true) {
                warn(message || bundle.weird_condition, node);
            }
            break;
        }
        return node;
    }

    function check_relation(node) {
        switch (node.arity) {
        case 'prefix':
            switch (node.id) {
            case '{':
            case '[':
                warn('unexpected_a', node);
                break;
            case '!':
                warn('confusing_a', node);
                break;
            }
            break;
        case 'function':
        case 'regexp':
            warn('unexpected_a', node);
            break;
        default:
            if (node.id  === 'NaN') {
                warn('isnan', node);
            }
        }
        return node;
    }


    function relation(s, eqeq) {
        return infix(s, 100, function (left, that) {
            check_relation(left);
            if (eqeq && !option.eqeq) {
                warn('expected_a_b', that, eqeq, that.id);
            }
            var right = expression(100);
            if (are_similar(left, right) ||
                    ((left.id === '(string)' || left.id === '(number)') &&
                    (right.id === '(string)' || right.id === '(number)'))) {
                warn('weird_relation', that);
            }
            that.first = left;
            that.second = check_relation(right);
            return that;
        }, 'boolean');
    }


    function assignop(s, op) {
        var x = infix(s, 20, function (left, that) {
            var l;
            that.first = left;
            if (left.identifier) {
                if (scope[left.string]) {
                    if (scope[left.string].writeable === false) {
                        warn('read_only', left);
                    }
                } else {
                    stop('read_only');
                }
            } else if (option.safe) {
                l = left;
                do {
                    if (typeof predefined[l.string] === 'boolean') {
                        warn('adsafe_a', l);
                    }
                    l = l.first;
                } while (l);
            }
            if (left === syntax['function']) {
                warn('identifier_function', token);
            }
            if (left.id === '.' || left.id === '[') {
                if (!left.first || left.first.string === 'arguments') {
                    warn('bad_assignment', that);
                }
            } else if (left.identifier) {
                if (!left.reserved && funct[left.string] === 'exception') {
                    warn('assign_exception', left);
                }
            } else {
                warn('bad_assignment', that);
            }
            that.second = expression(19);
            if (that.id === '=' && are_similar(that.first, that.second)) {
                warn('weird_assignment', that);
            }
            return that;
        });
        x.assign = true;
        if (op) {
            if (syntax[op].type) {
                x.type = syntax[op].type;
            }
            if (syntax[op].bitwise) {
                x.bitwise = true;
            }
        }
        return x;
    }


    function bitwise(s, p) {
        var x = infix(s, p, 'number');
        x.bitwise = true;
        return x;
    }


    function suffix(s) {
        var x = symbol(s, 150);
        x.led = function (left) {
            no_space_only(prev_token, token);
            if (!option.plusplus) {
                warn('unexpected_a', this);
            } else if ((!left.identifier || left.reserved) &&
                    left.id !== '.' && left.id !== '[') {
                warn('bad_operand', this);
            }
            this.first = left;
            this.arity = 'suffix';
            return this;
        };
        return x;
    }


    function optional_identifier() {
        if (next_token.identifier) {
            advance();
            if (option.safe && banned[token.string]) {
                warn('adsafe_a', token);
            } else if (token.reserved && !option.es5) {
                warn('expected_identifier_a_reserved', token);
            }
            return token.string;
        }
    }


    function identifier() {
        var i = optional_identifier();
        if (!i) {
            stop(token.id === 'function' && next_token.id === '('
                ? 'name_function'
                : 'expected_identifier_a');
        }
        return i;
    }


    function statement() {

        var label, old_scope = scope, the_statement;

// We don't like the empty statement.

        if (next_token.id === ';') {
            warn('unexpected_a');
            semicolon();
            return;
        }

// Is this a labeled statement?

        if (next_token.identifier && !next_token.reserved && peek().id === ':') {
            edge('label');
            label = next_token;
            advance();
            advance(':');
            scope = Object.create(old_scope);
            add_label(label, 'label');
            if (next_token.labeled !== true) {
                warn('label_a_b', next_token, label.string, artifact());
            } else if (jx.test(label.string + ':')) {
                warn('url', label);
            } else if (funct === global_funct) {
                stop('unexpected_a', token);
            }
            next_token.label = label;
        }

// Parse the statement.

        if (token.id !== 'else') {
            edge();
        }
        step_in('statement');
        the_statement = expression(0, true);
        if (the_statement) {

// Look for the final semicolon.

            if (the_statement.arity === 'statement') {
                if (the_statement.id === 'switch' ||
                        (the_statement.block && the_statement.id !== 'do')) {
                    spaces();
                } else {
                    semicolon();
                }
            } else {

// If this is an expression statement, determine if it is acceptable.
// We do not like
//      new Blah();
// statments. If it is to be used at all, new should only be used to make
// objects, not side effects. The expression statements we do like do
// assignment or invocation or delete.

                if (the_statement.id === '(') {
                    if (the_statement.first.id === 'new') {
                        warn('bad_new');
                    }
                } else if (!the_statement.assign &&
                        the_statement.id !== 'delete' &&
                        the_statement.id !== '++' &&
                        the_statement.id !== '--') {
                    warn('assignment_function_expression', token);
                }
                semicolon();
            }
        }
        step_out();
        scope = old_scope;
        return the_statement;
    }


    function statements() {
        var array = [], disruptor, the_statement;

// A disrupt statement may not be followed by any other statement.
// If the last statement is disrupt, then the sequence is disrupt.

        while (next_token.postscript !== true) {
            if (next_token.id === ';') {
                warn('unexpected_a', next_token);
                semicolon();
            } else {
                if (next_token.string === 'use strict') {
                    if ((!node_js && xmode !== 'script') || funct !== global_funct || array.length > 0) {
                        warn('function_strict');
                    }
                    use_strict();
                }
                if (disruptor) {
                    warn('unreachable_a_b', next_token, next_token.string,
                        disruptor.string);
                    disruptor = null;
                }
                the_statement = statement();
                if (the_statement) {
                    array.push(the_statement);
                    if (the_statement.disrupt) {
                        disruptor = the_statement;
                        array.disrupt = true;
                    }
                }
            }
        }
        return array;
    }


    function block(ordinary) {

// array block is array sequence of statements wrapped in braces.
// ordinary is false for function bodies and try blocks.
// ordinary is true for if statements, while, etc.

        var array,
            curly = next_token,
            old_in_block = in_block,
            old_scope = scope,
            old_strict_mode = strict_mode;

        in_block = ordinary;
        scope = Object.create(scope);
        spaces();
        if (next_token.id === '{') {
            advance('{');
            step_in();
            if (!ordinary && !use_strict() && !old_strict_mode &&
                    !option.sloppy && funct['(context)'] === global_funct) {
                warn('missing_use_strict');
            }
            array = statements();
            strict_mode = old_strict_mode;
            step_out('}', curly);
        } else if (!ordinary) {
            stop('expected_a_b', next_token, '{', artifact());
        } else {
            warn('expected_a_b', next_token, '{', artifact());
            array = [statement()];
            array.disrupt = array[0].disrupt;
        }
        funct['(verb)'] = null;
        scope = old_scope;
        in_block = old_in_block;
        if (ordinary && array.length === 0) {
            warn('empty_block');
        }
        return array;
    }


    function tally_property(name) {
        if (option.properties && typeof property_type[name] !== 'string') {
            warn('unexpected_property_a', token, name);
        }
        if (typeof member[name] === 'number') {
            member[name] += 1;
        } else {
            member[name] = 1;
        }
    }


// ECMAScript parser

    syntax['(identifier)'] = {
        id: '(identifier)',
        lbp: 0,
        identifier: true,
        nud: function () {
            var name = this.string,
                variable = scope[name],
                site,
                writeable;

// If the variable is not in scope, then we may have an undeclared variable.
// Check the predefined list. If it was predefined, create the global
// variable.

            if (typeof variable !== 'object') {
                writeable = predefined[name];
                if (typeof writeable === 'boolean') {
                    global_scope[name] = variable = {
                        string:    name,
                        writeable: writeable,
                        funct:     global_funct
                    };
                    global_funct[name] = 'var';

// But if the variable is not in scope, and is not predefined, and if we are not
// in the global scope, then we have an undefined variable error.

                } else {
                    if (!option.undef) {
                        warn('used_before_a', token);
                    }
                    scope[name] = variable = {
                        string: name,
                        writeable: true,
                        funct: funct
                    };
                    funct[name] = 'undef';
                }

            }
            site = variable.funct;

// The name is in scope and defined in the current function.

            if (funct === site) {

//      Change 'unused' to 'var', and reject labels.

                switch (funct[name]) {
                case 'becoming':
                    warn('unexpected_a', token);
                    funct[name] = 'var';
                    break;
                case 'unused':
                    funct[name] = 'var';
                    break;
                case 'unparam':
                    funct[name] = 'parameter';
                    break;
                case 'unction':
                    funct[name] = 'function';
                    break;
                case 'label':
                    warn('a_label', token, name);
                    break;
                }

// If the name is already defined in the current
// function, but not as outer, then there is a scope error.

            } else {
                switch (funct[name]) {
                case 'closure':
                case 'function':
                case 'var':
                case 'unused':
                    warn('a_scope', token, name);
                    break;
                case 'label':
                    warn('a_label', token, name);
                    break;
                case 'outer':
                case 'global':
                    break;
                default:

// If the name is defined in an outer function, make an outer entry, and if
// it was unused, make it var.

                    switch (site[name]) {
                    case 'becoming':
                    case 'closure':
                    case 'function':
                    case 'parameter':
                    case 'unction':
                    case 'unused':
                    case 'var':
                        site[name] = 'closure';
                        funct[name] = site === global_funct
                            ? 'global'
                            : 'outer';
                        break;
                    case 'unparam':
                        site[name] = 'parameter';
                        funct[name] = 'outer';
                        break;
                    case 'undef':
                        funct[name] = 'undef';
                        break;
                    case 'label':
                        warn('a_label', token, name);
                        break;
                    }
                }
            }
            return this;
        },
        led: function () {
            stop('expected_operator_a');
        }
    };

// Build the syntax table by declaring the syntactic elements.

    type('(array)', 'array');
    type('(color)', 'color');
    type('(function)', 'function');
    type('(number)', 'number', return_this);
    type('(object)', 'object');
    type('(string)', 'string', return_this);
    type('(boolean)', 'boolean', return_this);
    type('(range)', 'range');
    type('(regexp)', 'regexp', return_this);

    ultimate('(begin)');
    ultimate('(end)');
    ultimate('(error)');
    postscript(symbol('</'));
    symbol('<!');
    symbol('<!--');
    symbol('-->');
    postscript(symbol('}'));
    symbol(')');
    symbol(']');
    postscript(symbol('"'));
    postscript(symbol('\''));
    symbol(';');
    symbol(':');
    symbol(',');
    symbol('#');
    symbol('@');
    symbol('*/');
    postscript(reserve('case'));
    reserve('catch');
    postscript(reserve('default'));
    reserve('else');
    reserve('finally');

    reservevar('arguments', function (x) {
        if (strict_mode && funct === global_funct) {
            warn('strict', x);
        } else if (option.safe) {
            warn('adsafe_a', x);
        }
    });
    reservevar('eval', function (x) {
        if (option.safe) {
            warn('adsafe_a', x);
        }
    });
    constant('false', 'boolean');
    constant('Infinity', 'number');
    constant('NaN', 'number');
    constant('null', '');
    reservevar('this', function (x) {
        if (option.safe) {
            warn('adsafe_a', x);
        } else if (strict_mode && funct['(token)'].arity === 'statement' &&
                funct['(name)'].charAt(0) > 'Z') {
            warn('strict', x);
        }
    });
    constant('true', 'boolean');
    constant('undefined', '');

    infix('?', 30, function (left, that) {
        step_in('?');
        that.first = expected_condition(expected_relation(left));
        that.second = expression(0);
        spaces();
        step_out();
        var colon = next_token;
        advance(':');
        step_in(':');
        spaces();
        that.third = expression(10);
        that.arity = 'ternary';
        if (are_similar(that.second, that.third)) {
            warn('weird_ternary', colon);
        } else if (are_similar(that.first, that.second)) {
            warn('use_or', that);
        }
        step_out();
        return that;
    });

    infix('||', 40, function (left, that) {
        function paren_check(that) {
            if (that.id === '&&' && !that.paren) {
                warn('and', that);
            }
            return that;
        }

        that.first = paren_check(expected_condition(expected_relation(left)));
        that.second = paren_check(expected_relation(expression(40)));
        if (are_similar(that.first, that.second)) {
            warn('weird_condition', that);
        }
        return that;
    });

    infix('&&', 50, function (left, that) {
        that.first = expected_condition(expected_relation(left));
        that.second = expected_relation(expression(50));
        if (are_similar(that.first, that.second)) {
            warn('weird_condition', that);
        }
        return that;
    });

    prefix('void', function () {
        this.first = expression(0);
        this.arity = 'prefix';
        if (option.es5) {
            warn('expected_a_b', this, 'undefined', 'void');
        } else if (this.first.number !== 0) {
            warn('expected_a_b', this.first, '0', artifact(this.first));
        }
        this.type = 'undefined';
        return this;
    });

    bitwise('|', 70);
    bitwise('^', 80);
    bitwise('&', 90);

    relation('==', '===');
    relation('===');
    relation('!=', '!==');
    relation('!==');
    relation('<');
    relation('>');
    relation('<=');
    relation('>=');

    bitwise('<<', 120);
    bitwise('>>', 120);
    bitwise('>>>', 120);

    infix('in', 120, function (left, that) {
        warn('infix_in', that);
        that.left = left;
        that.right = expression(130);
        return that;
    }, 'boolean');
    infix('instanceof', 120, null, 'boolean');
    infix('+', 130, function (left, that) {
        if (left.id === '(number)') {
            if (left.number === 0) {
                warn('unexpected_a', left, '0');
            }
        } else if (left.id === '(string)') {
            if (left.string === '') {
                warn('expected_a_b', left, 'String', '\'\'');
            }
        }
        var right = expression(130);
        if (right.id === '(number)') {
            if (right.number === 0) {
                warn('unexpected_a', right, '0');
            }
        } else if (right.id === '(string)') {
            if (right.string === '') {
                warn('expected_a_b', right, 'String', '\'\'');
            }
        }
        if (left.id === right.id) {
            if (left.id === '(string)' || left.id === '(number)') {
                if (left.id === '(string)') {
                    left.string += right.string;
                    if (jx.test(left.string)) {
                        warn('url', left);
                    }
                } else {
                    left.number += right.number;
                }
                left.thru = right.thru;
                return left;
            }
        }
        that.first = left;
        that.second = right;
        return that;
    });
    prefix('+', 'num');
    prefix('+++', function () {
        warn('confusing_a', token);
        this.first = expression(150);
        this.arity = 'prefix';
        return this;
    });
    infix('+++', 130, function (left) {
        warn('confusing_a', token);
        this.first = left;
        this.second = expression(130);
        return this;
    });
    infix('-', 130, function (left, that) {
        if ((left.id === '(number)' && left.number === 0) || left.id === '(string)') {
            warn('unexpected_a', left);
        }
        var right = expression(130);
        if ((right.id === '(number)' && right.number === 0) || right.id === '(string)') {
            warn('unexpected_a', left);
        }
        if (left.id === right.id && left.id === '(number)') {
            left.number -= right.number;
            left.thru = right.thru;
            return left;
        }
        that.first = left;
        that.second = right;
        return that;
    }, 'number');
    prefix('-');
    prefix('---', function () {
        warn('confusing_a', token);
        this.first = expression(150);
        this.arity = 'prefix';
        return this;
    });
    infix('---', 130, function (left) {
        warn('confusing_a', token);
        this.first = left;
        this.second = expression(130);
        return this;
    });
    infix('*', 140, function (left, that) {
        if ((left.id === '(number)' && (left.number === 0 || left.number === 1)) || left.id === '(string)') {
            warn('unexpected_a', left);
        }
        var right = expression(140);
        if ((right.id === '(number)' && (right.number === 0 || right.number === 1)) || right.id === '(string)') {
            warn('unexpected_a', right);
        }
        if (left.id === right.id && left.id === '(number)') {
            left.number *= right.number;
            left.thru = right.thru;
            return left;
        }
        that.first = left;
        that.second = right;
        return that;
    }, 'number');
    infix('/', 140, function (left, that) {
        if ((left.id === '(number)' && left.number === 0) || left.id === '(string)') {
            warn('unexpected_a', left);
        }
        var right = expression(140);
        if ((right.id === '(number)' && (right.number === 0 || right.number === 1)) || right.id === '(string)') {
            warn('unexpected_a', right);
        }
        if (left.id === right.id && left.id === '(number)') {
            left.number /= right.number;
            left.thru = right.thru;
            return left;
        }
        that.first = left;
        that.second = right;
        return that;
    }, 'number');
    infix('%', 140, function (left, that) {
        if ((left.id === '(number)' && (left.number === 0 || left.number === 1)) || left.id === '(string)') {
            warn('unexpected_a', left);
        }
        var right = expression(140);
        if ((right.id === '(number)' && right.number === 0) || right.id === '(string)') {
            warn('unexpected_a', right);
        }
        if (left.id === right.id && left.id === '(number)') {
            left.number %= right.number;
            left.thru = right.thru;
            return left;
        }
        that.first = left;
        that.second = right;
        return that;
    }, 'number');

    suffix('++');
    prefix('++');

    suffix('--');
    prefix('--');
    prefix('delete', function () {
        one_space();
        var p = expression(0);
        if (!p || (p.id !== '.' && p.id !== '[')) {
            warn('deleted');
        }
        this.first = p;
        return this;
    });


    prefix('~', function () {
        no_space_only();
        if (!option.bitwise) {
            warn('unexpected_a', this);
        }
        expression(150);
        return this;
    }, 'number');
    prefix('!', function () {
        no_space_only();
        this.first = expected_condition(expression(150));
        this.arity = 'prefix';
        if (bang[this.first.id] === true || this.first.assign) {
            warn('confusing_a', this);
        }
        return this;
    }, 'boolean');
    prefix('typeof', null, 'string');
    prefix('new', function () {
        one_space();
        var c = expression(160), n, p, v;
        this.first = c;
        if (c.id !== 'function') {
            if (c.identifier) {
                switch (c.string) {
                case 'Object':
                    warn('use_object', token);
                    break;
                case 'Array':
                    if (next_token.id === '(') {
                        p = next_token;
                        p.first = this;
                        advance('(');
                        if (next_token.id !== ')') {
                            n = expression(0);
                            p.second = [n];
                            if (n.type !== 'number' || next_token.id === ',') {
                                warn('use_array', p);
                            }
                            while (next_token.id === ',') {
                                advance(',');
                                p.second.push(expression(0));
                            }
                        } else {
                            warn('use_array', token);
                        }
                        advance(')', p);
                        return p;
                    }
                    warn('use_array', token);
                    break;
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Math':
                case 'JSON':
                    warn('not_a_constructor', c);
                    break;
                case 'Function':
                    if (!option.evil) {
                        warn('function_eval');
                    }
                    break;
                case 'Date':
                case 'RegExp':
                case 'this':
                    break;
                default:
                    if (c.id !== 'function') {
                        v = c.string.charAt(0);
                        if (!option.newcap && (v < 'A' || v > 'Z')) {
                            warn('constructor_name_a', token);
                        }
                    }
                }
            } else {
                if (c.id !== '.' && c.id !== '[' && c.id !== '(') {
                    warn('bad_constructor', token);
                }
            }
        } else {
            warn('weird_new', this);
        }
        if (next_token.id !== '(') {
            warn('missing_a', next_token, '()');
        }
        return this;
    });

    infix('(', 160, function (left, that) {
        var p;
        if (indent && indent.mode === 'expression') {
            no_space(prev_token, token);
        } else {
            no_space_only(prev_token, token);
        }
        if (!left.immed && left.id === 'function') {
            warn('wrap_immediate');
        }
        p = [];
        if (left.identifier) {
            if (left.string.match(/^[A-Z]([A-Z0-9_$]*[a-z][A-Za-z0-9_$]*)?$/)) {
                if (left.string !== 'Number' && left.string !== 'String' &&
                        left.string !== 'Boolean' && left.string !== 'Date') {
                    if (left.string === 'Math' || left.string === 'JSON') {
                        warn('not_a_function', left);
                    } else if (left.string === 'Object') {
                        warn('use_object', token);
                    } else if (left.string === 'Array' || !option.newcap) {
                        warn('missing_a', left, 'new');
                    }
                }
            }
        } else if (left.id === '.') {
            if (option.safe && left.first.string === 'Math' &&
                    left.second === 'random') {
                warn('adsafe_a', left);
            } else if (left.second.string === 'split' &&
                    left.first.id === '(string)') {
                warn('use_array', left.second);
            }
        }
        step_in();
        if (next_token.id !== ')') {
            no_space();
            for (;;) {
                edge();
                p.push(expression(10));
                if (next_token.id !== ',') {
                    break;
                }
                comma();
            }
        }
        no_space();
        step_out(')', that);
        if (typeof left === 'object') {
            if (left.string === 'parseInt' && p.length === 1) {
                warn('radix', left);
            }
            if (!option.evil) {
                if (left.string === 'eval' || left.string === 'Function' ||
                        left.string === 'execScript') {
                    warn('evil', left);
                } else if (p[0] && p[0].id === '(string)' &&
                        (left.string === 'setTimeout' ||
                        left.string === 'setInterval')) {
                    warn('implied_evil', left);
                }
            }
            if (!left.identifier && left.id !== '.' && left.id !== '[' &&
                    left.id !== '(' && left.id !== '&&' && left.id !== '||' &&
                    left.id !== '?') {
                warn('bad_invocation', left);
            }
        }
        that.first = left;
        that.second = p;
        return that;
    }, '', true);

    prefix('(', function () {
        step_in('expression');
        no_space();
        edge();
        if (next_token.id === 'function') {
            next_token.immed = true;
        }
        var value = expression(0);
        value.paren = true;
        no_space();
        step_out(')', this);
        if (value.id === 'function') {
            if (next_token.id === '(') {
                warn('move_invocation');
            } else {
                warn('bad_wrap', this);
            }
        }
        return value;
    });

    infix('.', 170, function (left, that) {
        no_space(prev_token, token);
        no_space();
        var name = identifier(), type;
        if (typeof name === 'string') {
            tally_property(name);
        }
        that.first = left;
        that.second = token;
        if (left && left.string === 'arguments' &&
                (name === 'callee' || name === 'caller')) {
            warn('avoid_a', left, 'arguments.' + name);
        } else if (!option.evil && left && left.string === 'document' &&
                (name === 'write' || name === 'writeln')) {
            warn('write_is_wrong', left);
        } else if (option.adsafe) {
            if (!adsafe_top && left.string === 'ADSAFE') {
                if (name === 'id' || name === 'lib') {
                    warn('adsafe_a', that);
                } else if (name === 'go') {
                    if (xmode !== 'script') {
                        warn('adsafe_a', that);
                    } else if (adsafe_went || next_token.id !== '(' ||
                            peek(0).id !== '(string)' ||
                            peek(0).string !== adsafe_id ||
                            peek(1).id !== ',') {
                        stop('adsafe_a', that, 'go');
                    }
                    adsafe_went = true;
                    adsafe_may = false;
                }
            }
            adsafe_top = false;
        }
        if (!option.evil && (name === 'eval' || name === 'execScript')) {
            warn('evil');
        } else if (option.safe) {
            for (;;) {
                if (banned[name] === true) {
                    warn('adsafe_a', token, name);
                }
                if (typeof predefined[left.string] !== 'boolean' ||    //// check for writeable
                        next_token.id === '(') {
                    break;
                }
                if (next_token.id !== '.') {
                    warn('adsafe_a', that);
                    break;
                }
                advance('.');
                token.first = that;
                token.second = name;
                that = token;
                name = identifier();
                if (typeof name === 'string') {
                    tally_property(name);
                }
            }
        }
        type = property_type[name];
        if (type && typeof type === 'string' && type !== '*') {
            that.type = type;
        }
        return that;
    }, '', true);

    infix('[', 170, function (left, that) {
        var e, s;
        no_space_only(prev_token, token);
        no_space();
        step_in();
        edge();
        e = expression(0);
        switch (e.type) {
        case 'number':
            if (e.id === '(number)' && left.id === 'arguments') {
                warn('use_param', left);
            }
            break;
        case 'string':
            if (e.id === '(string)') {
                if (option.safe && (banned[e.string] ||
                        e.string.charAt(0) === '_' || e.string.slice(-1) === '_')) {
                    warn('adsafe_subscript_a', e);
                } else if (!option.evil &&
                        (e.string === 'eval' || e.string === 'execScript')) {
                    warn('evil', e);
                } else if (!option.sub && ix.test(e.string)) {
                    s = syntax[e.string];
                    if (!s || !s.reserved) {
                        warn('subscript', e);
                    }
                }
                tally_property(e.string);
            } else if (option.safe && e.id !== 'typeof') {
                warn('adsafe_subscript_a', e);
            }
            break;
        case undefined:
            if (option.safe) {
                warn('adsafe_subscript_a', e);
            }
            break;
        default:
            if (option.safe) {
                warn('adsafe_subscript_a', e);
            }
        }
        step_out(']', that);
        no_space(prev_token, token);
        that.first = left;
        that.second = e;
        return that;
    }, '', true);

    prefix('[', function () {
        this.arity = 'prefix';
        this.first = [];
        step_in('array');
        while (next_token.id !== '(end)') {
            while (next_token.id === ',') {
                warn('unexpected_a', next_token);
                advance(',');
            }
            if (next_token.id === ']') {
                break;
            }
            indent.wrap = false;
            edge();
            this.first.push(expression(10));
            if (next_token.id === ',') {
                comma();
                if (next_token.id === ']' && !option.es5) {
                    warn('unexpected_a', token);
                    break;
                }
            } else {
                break;
            }
        }
        step_out(']', this);
        return this;
    }, 170);


    function property_name() {
        var id = optional_identifier(true);
        if (!id) {
            if (next_token.id === '(string)') {
                id = next_token.string;
                if (option.safe) {
                    if (banned[id]) {
                        warn('adsafe_a');
                    } else if (id.charAt(0) === '_' ||
                            id.charAt(id.length - 1) === '_') {
                        warn('dangling_a');
                    }
                }
                advance();
            } else if (next_token.id === '(number)') {
                id = next_token.number.toString();
                advance();
            }
        }
        return id;
    }


    function function_params() {
        var id, paren = next_token, params = [];
        advance('(');
        step_in();
        no_space();
        if (next_token.id === ')') {
            no_space();
            step_out(')', paren);
            return;
        }
        for (;;) {
            edge();
            id = identifier();
            params.push(token);
            add_label(token, option.unparam ? 'parameter' : 'unparam');
            if (next_token.id === ',') {
                comma();
            } else {
                no_space();
                step_out(')', paren);
                return params;
            }
        }
    }



    function do_function(func, name) {
        var old_funct      = funct,
            old_option     = option,
            old_scope      = scope;
        funct = {
            '(name)'     : name || '\'' + (anonname || '').replace(nx, sanitize) + '\'',
            '(line)'     : next_token.line,
            '(context)'  : old_funct,
            '(breakage)' : 0,
            '(loopage)'  : 0,
            '(scope)'    : scope,
            '(token)'    : func
        };
        option = Object.create(old_option);
        scope = Object.create(old_scope);
        functions.push(funct);
        func.name = name;
        if (name) {
            add_label(func, 'function', name);
        }
        func.writeable = false;
        func.first = funct['(params)'] = function_params();
        one_space();
        func.block = block(false);
        if (funct['(old_property_type)']) {
            property_type = funct['(old_property_type)'];
            delete funct['(old_property_type)'];
        }
        if (option.confusion) {
            funct['(confusion)'] = true;
        }
        funct      = old_funct;
        option     = old_option;
        scope      = old_scope;
    }


    assignop('=');
    assignop('+=', '+');
    assignop('-=', '-');
    assignop('*=', '*');
    assignop('/=', '/').nud = function () {
        stop('slash_equal');
    };
    assignop('%=', '%');
    assignop('&=', '&');
    assignop('|=', '|');
    assignop('^=', '^');
    assignop('<<=', '<<');
    assignop('>>=', '>>');
    assignop('>>>=', '>>>');


    prefix('{', function () {
        var get, i, j, name, p, set, seen = {};
        this.arity = 'prefix';
        this.first = [];
        step_in();
        while (next_token.id !== '}') {
            indent.wrap = false;

// JSLint recognizes the ES5 extension for get/set in object literals,
// but requires that they be used in pairs.

            edge();
            if (next_token.string === 'get' && peek().id !== ':') {
                if (!option.es5) {
                    warn('es5');
                }
                get = next_token;
                advance('get');
                one_space_only();
                name = next_token;
                i = property_name();
                if (!i) {
                    stop('missing_property');
                }
                get.string = '';
                do_function(get);
                if (funct['(loopage)']) {
                    warn('function_loop', get);
                }
                p = get.first;
                if (p) {
                    warn('parameter_a_get_b', p[0], p[0].string, i);
                }
                comma();
                set = next_token;
                spaces();
                edge();
                advance('set');
                set.string = '';
                one_space_only();
                j = property_name();
                if (i !== j) {
                    stop('expected_a_b', token, i, j || next_token.string);
                }
                do_function(set);
                if (set.block.length === 0) {
                    warn('missing_a', token, 'throw');
                }
                p = set.first;
                if (!p || p.length !== 1) {
                    stop('parameter_set_a', set, 'value');
                } else if (p[0].string !== 'value') {
                    stop('expected_a_b', p[0], 'value', p[0].string);
                }
                name.first = [get, set];
            } else {
                name = next_token;
                i = property_name();
                if (typeof i !== 'string') {
                    stop('missing_property');
                }
                advance(':');
                spaces();
                name.first = expression(10);
            }
            this.first.push(name);
            if (seen[i] === true) {
                warn('duplicate_a', next_token, i);
            }
            seen[i] = true;
            tally_property(i);
            if (next_token.id !== ',') {
                break;
            }
            for (;;) {
                comma();
                if (next_token.id !== ',') {
                    break;
                }
                warn('unexpected_a', next_token);
            }
            if (next_token.id === '}' && !option.es5) {
                warn('unexpected_a', token);
            }
        }
        step_out('}', this);
        return this;
    });

    stmt('{', function () {
        warn('statement_block');
        this.arity = 'statement';
        this.block = statements();
        this.disrupt = this.block.disrupt;
        advance('}', this);
        return this;
    });

    stmt('/*global', directive);
    stmt('/*globals', directive);
    stmt('/*jslint', directive);
    stmt('/*member', directive);
    stmt('/*members', directive);
    stmt('/*property', directive);
    stmt('/*properties', directive);

    stmt('var', function () {

// JavaScript does not have block scope. It only has function scope. So,
// declaring a variable in a block can have unexpected consequences.

// var.first will contain an array, the array containing name tokens
// and assignment tokens.

        var assign, id, name;

        if (funct['(vars)'] && !option.vars) {
            warn('combine_var');
        } else if (funct !== global_funct) {
            funct['(vars)'] = true;
        }
        this.arity = 'statement';
        this.first = [];
        step_in('var');
        for (;;) {
            name = next_token;
            id = identifier();
            add_label(name, 'becoming');

            if (next_token.id === '=') {
                assign = next_token;
                assign.first = name;
                spaces();
                advance('=');
                spaces();
                if (next_token.id === 'undefined') {
                    warn('unnecessary_initialize', token, id);
                }
                if (peek(0).id === '=' && next_token.identifier) {
                    stop('var_a_not');
                }
                assign.second = expression(0);
                assign.arity = 'infix';
                this.first.push(assign);
            } else {
                this.first.push(name);
            }
            if (funct[id] === 'becoming') {
                funct[id] = 'unused';
            }
            if (next_token.id !== ',') {
                break;
            }
            comma();
            indent.wrap = false;
            if (var_mode && next_token.line === token.line &&
                    this.first.length === 1) {
                var_mode = null;
                indent.open = false;
                indent.at -= option.indent;
            }
            spaces();
            edge();
        }
        var_mode = null;
        step_out();
        return this;
    });

    stmt('function', function () {
        one_space();
        if (in_block) {
            warn('function_block', token);
        }
        var name = next_token, id = identifier();
        add_label(name, 'unction');
        no_space();
        this.arity = 'statement';
        do_function(this, id);
        if (next_token.id === '(' && next_token.line === token.line) {
            stop('function_statement');
        }
        return this;
    });

    prefix('function', function () {
        if (!option.anon) {
            one_space();
        }
        var id = optional_identifier();
        if (id) {
            no_space();
        } else {
            id = '';
        }
        do_function(this, id);
        if (funct['(loopage)']) {
            warn('function_loop');
        }
        this.arity = 'function';
        return this;
    });

    stmt('if', function () {
        var paren = next_token;
        one_space();
        advance('(');
        step_in('control');
        no_space();
        edge();
        this.arity = 'statement';
        this.first = expected_condition(expected_relation(expression(0)));
        no_space();
        step_out(')', paren);
        one_space();
        this.block = block(true);
        if (next_token.id === 'else') {
            one_space();
            advance('else');
            one_space();
            this['else'] = next_token.id === 'if' || next_token.id === 'switch'
                ? statement(true)
                : block(true);
            if (this['else'].disrupt && this.block.disrupt) {
                this.disrupt = true;
            }
        }
        return this;
    });

    stmt('try', function () {

// try.first    The catch variable
// try.second   The catch clause
// try.third    The finally clause
// try.block    The try block

        var exception_variable, old_scope, paren;
        if (option.adsafe) {
            warn('adsafe_a', this);
        }
        one_space();
        this.arity = 'statement';
        this.block = block(false);
        if (next_token.id === 'catch') {
            one_space();
            advance('catch');
            one_space();
            paren = next_token;
            advance('(');
            step_in('control');
            no_space();
            edge();
            old_scope = scope;
            scope = Object.create(old_scope);
            exception_variable = next_token.string;
            this.first = exception_variable;
            if (!next_token.identifier) {
                warn('expected_identifier_a', next_token);
            } else {
                add_label(next_token, 'exception');
            }
            advance();
            no_space();
            step_out(')', paren);
            one_space();
            this.second = block(false);
            scope = old_scope;
        }
        if (next_token.id === 'finally') {
            one_space();
            advance('finally');
            one_space();
            this.third = block(false);
        } else if (!this.second) {
            stop('expected_a_b', next_token, 'catch', artifact());
        }
        return this;
    });

    labeled_stmt('while', function () {
        one_space();
        var paren = next_token;
        funct['(breakage)'] += 1;
        funct['(loopage)'] += 1;
        advance('(');
        step_in('control');
        no_space();
        edge();
        this.arity = 'statement';
        this.first = expected_relation(expression(0));
        if (this.first.id !== 'true') {
            expected_condition(this.first, bundle.unexpected_a);
        }
        no_space();
        step_out(')', paren);
        one_space();
        this.block = block(true);
        if (this.block.disrupt) {
            warn('strange_loop', prev_token);
        }
        funct['(breakage)'] -= 1;
        funct['(loopage)'] -= 1;
        return this;
    });

    reserve('with');

    labeled_stmt('switch', function () {

// switch.first         the switch expression
// switch.second        the array of cases. A case is 'case' or 'default' token:
//    case.first        the array of case expressions
//    case.second       the array of statements
// If all of the arrays of statements are disrupt, then the switch is disrupt.

        var cases = [],
            old_in_block = in_block,
            particular,
            the_case = next_token,
            unbroken = true;

        function find_duplicate_case(value) {
            if (are_similar(particular, value)) {
                warn('duplicate_a', value);
            }
        }

        funct['(breakage)'] += 1;
        one_space();
        advance('(');
        no_space();
        step_in();
        this.arity = 'statement';
        this.first = expected_condition(expected_relation(expression(0)));
        no_space();
        step_out(')', the_case);
        one_space();
        advance('{');
        step_in();
        in_block = true;
        this.second = [];
        while (next_token.id === 'case') {
            the_case = next_token;
            cases.forEach(find_duplicate_case);
            the_case.first = [];
            the_case.arity = 'case';
            spaces();
            edge('case');
            advance('case');
            for (;;) {
                one_space();
                particular = expression(0);
                cases.forEach(find_duplicate_case);
                cases.push(particular);
                the_case.first.push(particular);
                if (particular.id === 'NaN') {
                    warn('unexpected_a', particular);
                }
                no_space_only();
                advance(':');
                if (next_token.id !== 'case') {
                    break;
                }
                spaces();
                edge('case');
                advance('case');
            }
            spaces();
            the_case.second = statements();
            if (the_case.second && the_case.second.length > 0) {
                particular = the_case.second[the_case.second.length - 1];
                if (particular.disrupt) {
                    if (particular.id === 'break') {
                        unbroken = false;
                    }
                } else {
                    warn('missing_a_after_b', next_token, 'break', 'case');
                }
            } else {
                warn('empty_case');
            }
            this.second.push(the_case);
        }
        if (this.second.length === 0) {
            warn('missing_a', next_token, 'case');
        }
        if (next_token.id === 'default') {
            spaces();
            the_case = next_token;
            the_case.arity = 'case';
            edge('case');
            advance('default');
            no_space_only();
            advance(':');
            spaces();
            the_case.second = statements();
            if (the_case.second && the_case.second.length > 0) {
                particular = the_case.second[the_case.second.length - 1];
                if (unbroken && particular.disrupt && particular.id !== 'break') {
                    this.disrupt = true;
                }
            }
            this.second.push(the_case);
        }
        funct['(breakage)'] -= 1;
        spaces();
        step_out('}', this);
        in_block = old_in_block;
        return this;
    });

    stmt('debugger', function () {
        if (!option.debug) {
            warn('unexpected_a', this);
        }
        this.arity = 'statement';
        return this;
    });

    labeled_stmt('do', function () {
        funct['(breakage)'] += 1;
        funct['(loopage)'] += 1;
        one_space();
        this.arity = 'statement';
        this.block = block(true);
        if (this.block.disrupt) {
            warn('strange_loop', prev_token);
        }
        one_space();
        advance('while');
        var paren = next_token;
        one_space();
        advance('(');
        step_in();
        no_space();
        edge();
        this.first = expected_condition(expected_relation(expression(0)), bundle.unexpected_a);
        no_space();
        step_out(')', paren);
        funct['(breakage)'] -= 1;
        funct['(loopage)'] -= 1;
        return this;
    });

    labeled_stmt('for', function () {

        var blok, filter, ok = false, paren = next_token, value;
        this.arity = 'statement';
        funct['(breakage)'] += 1;
        funct['(loopage)'] += 1;
        advance('(');
        if (next_token.id === ';') {
            no_space();
            advance(';');
            no_space();
            advance(';');
            no_space();
            advance(')');
            blok = block(true);
        } else {
            step_in('control');
            spaces(this, paren);
            no_space();
            if (next_token.id === 'var') {
                stop('move_var');
            }
            edge();
            if (peek(0).id === 'in') {
                this.forin = true;
                value = next_token;
                switch (funct[value.string]) {
                case 'unused':
                    funct[value.string] = 'var';
                    break;
                case 'closure':
                case 'var':
                    break;
                default:
                    warn('bad_in_a', value);
                }
                advance();
                advance('in');
                this.first = value;
                this.second = expression(20);
                step_out(')', paren);
                blok = block(true);
                if (!option.forin) {
                    if (blok.length === 1 && typeof blok[0] === 'object' &&
                            blok[0].string === 'if' && !blok[0]['else']) {
                        filter = blok[0].first;
                        while (filter.id === '&&') {
                            filter = filter.first;
                        }
                        switch (filter.id) {
                        case '===':
                        case '!==':
                            ok = filter.first.id === '['
                                ? filter.first.first.string === this.second.string &&
                                    filter.first.second.string === this.first.string
                                : filter.first.id === 'typeof' &&
                                    filter.first.first.id === '[' &&
                                    filter.first.first.first.string === this.second.string &&
                                    filter.first.first.second.string === this.first.string;
                            break;
                        case '(':
                            ok = filter.first.id === '.' && ((
                                filter.first.first.string === this.second.string &&
                                filter.first.second.string === 'hasOwnProperty' &&
                                filter.second[0].string === this.first.string
                            ) || (
                                filter.first.first.string === 'ADSAFE' &&
                                filter.first.second.string === 'has' &&
                                filter.second[0].string === this.second.string &&
                                filter.second[1].string === this.first.string
                            ) || (
                                filter.first.first.id === '.' &&
                                filter.first.first.first.id === '.' &&
                                filter.first.first.first.first.string === 'Object' &&
                                filter.first.first.first.second.string === 'prototype' &&
                                filter.first.first.second.string === 'hasOwnProperty' &&
                                filter.first.second.string === 'call' &&
                                filter.second[0].string === this.second.string &&
                                filter.second[1].string === this.first.string
                            ));
                            break;
                        }
                    }
                    if (!ok) {
                        warn('for_if', this);
                    }
                }
            } else {
                edge();
                this.first = [];
                for (;;) {
                    this.first.push(expression(0, 'for'));
                    if (next_token.id !== ',') {
                        break;
                    }
                    comma();
                }
                semicolon();
                edge();
                this.second = expected_relation(expression(0));
                if (this.second.id !== 'true') {
                    expected_condition(this.second, bundle.unexpected_a);
                }
                semicolon(token);
                if (next_token.id === ';') {
                    stop('expected_a_b', next_token, ')', ';');
                }
                this.third = [];
                edge();
                for (;;) {
                    this.third.push(expression(0, 'for'));
                    if (next_token.id !== ',') {
                        break;
                    }
                    comma();
                }
                no_space();
                step_out(')', paren);
                one_space();
                blok = block(true);
            }
        }
        if (blok.disrupt) {
            warn('strange_loop', prev_token);
        }
        this.block = blok;
        funct['(breakage)'] -= 1;
        funct['(loopage)'] -= 1;
        return this;
    });

    disrupt_stmt('break', function () {
        var label = next_token.string;
        this.arity = 'statement';
        if (funct['(breakage)'] === 0) {
            warn('unexpected_a', this);
        }
        if (next_token.identifier && token.line === next_token.line) {
            one_space_only();
            if (funct[label] !== 'label') {
                warn('not_a_label', next_token);
            } else if (scope[label].funct !== funct) {
                warn('not_a_scope', next_token);
            }
            this.first = next_token;
            advance();
        }
        return this;
    });

    disrupt_stmt('continue', function () {
        if (!option['continue']) {
            warn('unexpected_a', this);
        }
        var label = next_token.string;
        this.arity = 'statement';
        if (funct['(breakage)'] === 0) {
            warn('unexpected_a', this);
        }
        if (next_token.identifier && token.line === next_token.line) {
            one_space_only();
            if (funct[label] !== 'label') {
                warn('not_a_label', next_token);
            } else if (scope[label].funct !== funct) {
                warn('not_a_scope', next_token);
            }
            this.first = next_token;
            advance();
        }
        return this;
    });

    disrupt_stmt('return', function () {
        if (funct === global_funct) {
            warn('unexpected_a', this);
        }
        this.arity = 'statement';
        if (next_token.id !== ';' && next_token.line === token.line) {
            one_space_only();
            if (next_token.id === '/' || next_token.id === '(regexp)') {
                warn('wrap_regexp');
            }
            this.first = expression(20);
        }
        return this;
    });

    disrupt_stmt('throw', function () {
        this.arity = 'statement';
        one_space_only();
        this.first = expression(20);
        return this;
    });


//  Superfluous reserved words

    reserve('class');
    reserve('const');
    reserve('enum');
    reserve('export');
    reserve('extends');
    reserve('import');
    reserve('super');

// Harmony reserved words

    reserve('implements');
    reserve('interface');
    reserve('let');
    reserve('package');
    reserve('private');
    reserve('protected');
    reserve('public');
    reserve('static');
    reserve('yield');


// Type inference

//     function get_type(one) {
//         var type;
//         if (typeof one === 'string') {
//             return one;
//         } else if (one.type) {
//             return one.type;
//         } else if (one.id === '.') {
//             type = property_type[one.second.string];
//             return typeof type === 'string' ? type : '';
//         } else {
//             return ((one.identifier && scope[one.string]) || one).type;
//         }
//     }


//     function match_type(one_type, two_type, one, two) {
//         if (one_type === two_type) {
//             return true;
//         } else {
//             if (!funct.confusion && !two.warn) {
//                 if (typeof one !== 'string') {
//                     if (one.id === '.') {
//                         one_type = '.' + one.second.string + ': ' + one_type;
//                     } else {
//                         one_type = one.string + ': ' + one_type;
//                     }
//                 }
//                 if (two.id === '.') {
//                     two_type = '.' + two.second.string + ': ' + one_type;
//                 } else {
//                     two_type = two.string + ': ' + one_type;
//                 }
//                 warn('type_confusion_a_b', two, one_type, two_type);
//                 two.warn = true;
//             }
//             return false;
//         }
//     }


//     function conform(one, two) {
//
// // The conform function takes a type string and a token, or two tokens.
//
//         var one_type = typeof one === 'string' ? one : one.type,
//             two_type = two.type,
//             two_thing;
//
// // If both tokens already have a type, and if they match, then we are done.
// // Once a token has a type, it is locked. Neither token will change, but if
// // they do not match, there will be a warning.
//
//         if (one_type) {
//             if (two_type) {
//                 match_type(one_type, two_type, one, two);
//             } else {
//
// // two does not have a type, so look deeper. If two is a variable or property,
// // then use its type if it has one, and make the deep type one's type if it
// // doesn't. If the type was *, or if there was a mismatch, don't change the
// // deep type.
//
//                 two_thing = two.id === '(identifier)'
//                     ? scope[two.string]
//                     : two.id === '.'
//                     ? property_type[two.second.string]
//                     : null;
//                 if (two_thing) {
//                     two_type = two_thing.type;
//                     if (two_type) {
//                         if (two_type !== '*') {
//                             if (!match_type(one_type, two_type, one, two)) {
//                                 return '';
//                             }
//                         }
//                     } else {
//                         two_thing.type = one_type;
//                     }
//                 }
//
// // In any case, we give two a type.
//
//                 two.type = one_type;
//                 type_state_change = true;
//                 return one_type;
//             }
//
// // one does not have a type, but two does, so do the old switcheroo.
//
//         } else {
//             if (two_type) {
//                 return conform(two, one);
//
// // Neither token has a type yet. So we have to look deeper to see if either
// // is a variable or property.
//
//             } else {
//                 if (one.id === '(identifier)') {
//                     one_type = scope[one.string].type;
//                     if (one_type && one_type !== '*') {
//                         one.type = one_type;
//                         return conform(one, two);
//                     }
//                 } else if (one.id === '.') {
//                     one_type = property_type[one.second.string];
//                     if (one_type && one_type !== '*') {
//                         one.type = scope[one.string].type;
//                         return conform(one, two);
//                     }
//                 }
//                 if (two.id === '(identifier)') {
//                     two_type = scope[two.string].type;
//                     if (two_type && two_type !== '*') {
//                         two.type = two_type;
//                         return conform(two, one);
//                     }
//                 } else if (two.id === '.') {
//                     two_type = property_type[two.second.string];
//                     if (two_type && two_type !== '*') {
//                         two.type = scope[two.string].type;
//                         return conform(two, one);
//                     }
//                 }
//             }
//         }
//
// // Return a falsy string if we were unable to determine the type of either token.
//
//         return '';
//     }

//     function conform_array(type, array) {
//         array.forEach(function (item) {
//             return conform(type, item);
//         }, type);
//     }


//     function infer(node) {
//         if (Array.isArray(node)) {
//             node.forEach(infer);
//         } else {
//             switch (node.arity) {
//             case 'statement':
//                 infer_statement[node.id](node);
//                 break;
//             case 'infix':
//                 infer(node.first);
//                 infer(node.second);
//                 switch (node.id) {
//                 case '(':
//                     conform('function', node.first);
//                     break;
//                 default:
//                     stop('unfinished');
//                 }
//                 break;
//             case 'number':
//             case 'string':
//             case 'boolean':
//                 break;
//             default:
//                 stop('unfinished');
//             }
//         }
//     }


//     infer_statement = {
//         'var': function (node) {
//             var i, item, list = node.first;
//             for (i = 0; i < list.length; i += 1) {
//                 item = list[i];
//                 if (item.id === '=') {
//                     infer(item.second);
//                     conform(item.first, item.second);
//                     conform(item.first, item);
//                 }
//             }
//         },
//         'for': function (node) {
//             infer(node.first);
//             infer(node.second);
//             if (node.forin) {
//                 conform('string', node.first);
//                 conform('object', node.second);
//             } else {
//                 infer(node.third);
//                 conform_array('number', node.first);
//                 conform('boolean', node.second);
//                 conform_array('number', node.third);
//             }
//             infer(node.block);
//         }
//     };


//     function infer_types(node) {
//         do {
//             funct = global_funct;
//             scope = global_scope;
//             type_state_change = false;
//             infer(node);
//         } while (type_state_change);
//     }


// Parse JSON

    function json_value() {

        function json_object() {
            var brace = next_token, object = {};
            advance('{');
            if (next_token.id !== '}') {
                while (next_token.id !== '(end)') {
                    while (next_token.id === ',') {
                        warn('unexpected_a', next_token);
                        advance(',');
                    }
                    if (next_token.id !== '(string)') {
                        warn('expected_string_a');
                    }
                    if (object[next_token.string] === true) {
                        warn('duplicate_a');
                    } else if (next_token.string === '__proto__') {
                        warn('dangling_a');
                    } else {
                        object[next_token.string] = true;
                    }
                    advance();
                    advance(':');
                    json_value();
                    if (next_token.id !== ',') {
                        break;
                    }
                    advance(',');
                    if (next_token.id === '}') {
                        warn('unexpected_a', token);
                        break;
                    }
                }
            }
            advance('}', brace);
        }

        function json_array() {
            var bracket = next_token;
            advance('[');
            if (next_token.id !== ']') {
                while (next_token.id !== '(end)') {
                    while (next_token.id === ',') {
                        warn('unexpected_a', next_token);
                        advance(',');
                    }
                    json_value();
                    if (next_token.id !== ',') {
                        break;
                    }
                    advance(',');
                    if (next_token.id === ']') {
                        warn('unexpected_a', token);
                        break;
                    }
                }
            }
            advance(']', bracket);
        }

        switch (next_token.id) {
        case '{':
            json_object();
            break;
        case '[':
            json_array();
            break;
        case 'true':
        case 'false':
        case 'null':
        case '(number)':
        case '(string)':
            advance();
            break;
        case '-':
            advance('-');
            no_space_only();
            advance('(number)');
            break;
        default:
            stop('unexpected_a');
        }
    }


// CSS parsing.

    function css_name() {
        if (next_token.identifier) {
            advance();
            return true;
        }
    }


    function css_number() {
        if (next_token.id === '-') {
            advance('-');
            no_space_only();
        }
        if (next_token.id === '(number)') {
            advance('(number)');
            return true;
        }
    }


    function css_string() {
        if (next_token.id === '(string)') {
            advance();
            return true;
        }
    }

    function css_color() {
        var i, number, paren, value;
        if (next_token.identifier) {
            value = next_token.string;
            if (value === 'rgb' || value === 'rgba') {
                advance();
                paren = next_token;
                advance('(');
                for (i = 0; i < 3; i += 1) {
                    if (i) {
                        comma();
                    }
                    number = next_token.number;
                    if (next_token.id !== '(number)' || number < 0) {
                        warn('expected_positive_a', next_token);
                        advance();
                    } else {
                        advance();
                        if (next_token.id === '%') {
                            advance('%');
                            if (number > 100) {
                                warn('expected_percent_a', token, number);
                            }
                        } else {
                            if (number > 255) {
                                warn('expected_small_a', token, number);
                            }
                        }
                    }
                }
                if (value === 'rgba') {
                    comma();
                    number = next_token.number;
                    if (next_token.id !== '(number)' || number < 0 || number > 1) {
                        warn('expected_fraction_a', next_token);
                    }
                    advance();
                    if (next_token.id === '%') {
                        warn('unexpected_a');
                        advance('%');
                    }
                }
                advance(')', paren);
                return true;
            } else if (css_colorData[next_token.string] === true) {
                advance();
                return true;
            }
        } else if (next_token.id === '(color)') {
            advance();
            return true;
        }
        return false;
    }


    function css_length() {
        if (next_token.id === '-') {
            advance('-');
            no_space_only();
        }
        if (next_token.id === '(number)') {
            advance();
            if (next_token.id !== '(string)' &&
                    css_lengthData[next_token.string] === true) {
                no_space_only();
                advance();
            } else if (+token.number !== 0) {
                warn('expected_linear_a');
            }
            return true;
        }
        return false;
    }


    function css_line_height() {
        if (next_token.id === '-') {
            advance('-');
            no_space_only();
        }
        if (next_token.id === '(number)') {
            advance();
            if (next_token.id !== '(string)' &&
                    css_lengthData[next_token.string] === true) {
                no_space_only();
                advance();
            }
            return true;
        }
        return false;
    }


    function css_width() {
        if (next_token.identifier) {
            switch (next_token.string) {
            case 'thin':
            case 'medium':
            case 'thick':
                advance();
                return true;
            }
        } else {
            return css_length();
        }
    }


    function css_margin() {
        if (next_token.identifier) {
            if (next_token.string === 'auto') {
                advance();
                return true;
            }
        } else {
            return css_length();
        }
    }

    function css_attr() {
        if (next_token.identifier && next_token.string === 'attr') {
            advance();
            advance('(');
            if (!next_token.identifier) {
                warn('expected_name_a');
            }
            advance();
            advance(')');
            return true;
        }
        return false;
    }


    function css_comma_list() {
        while (next_token.id !== ';') {
            if (!css_name() && !css_string()) {
                warn('expected_name_a');
            }
            if (next_token.id !== ',') {
                return true;
            }
            comma();
        }
    }


    function css_counter() {
        if (next_token.identifier && next_token.string === 'counter') {
            advance();
            advance('(');
            advance();
            if (next_token.id === ',') {
                comma();
                if (next_token.id !== '(string)') {
                    warn('expected_string_a');
                }
                advance();
            }
            advance(')');
            return true;
        }
        if (next_token.identifier && next_token.string === 'counters') {
            advance();
            advance('(');
            if (!next_token.identifier) {
                warn('expected_name_a');
            }
            advance();
            if (next_token.id === ',') {
                comma();
                if (next_token.id !== '(string)') {
                    warn('expected_string_a');
                }
                advance();
            }
            if (next_token.id === ',') {
                comma();
                if (next_token.id !== '(string)') {
                    warn('expected_string_a');
                }
                advance();
            }
            advance(')');
            return true;
        }
        return false;
    }


    function css_radius() {
        return css_length() && (next_token.id !== '(number)' || css_length());
    }


    function css_shape() {
        var i;
        if (next_token.identifier && next_token.string === 'rect') {
            advance();
            advance('(');
            for (i = 0; i < 4; i += 1) {
                if (!css_length()) {
                    warn('expected_number_a');
                    break;
                }
            }
            advance(')');
            return true;
        }
        return false;
    }


    function css_url() {
        var c, url;
        if (next_token.identifier && next_token.string === 'url') {
            next_token = lex.range('(', ')');
            url = next_token.string;
            c = url.charAt(0);
            if (c === '"' || c === '\'') {
                if (url.slice(-1) !== c) {
                    warn('bad_url_a');
                } else {
                    url = url.slice(1, -1);
                    if (url.indexOf(c) >= 0) {
                        warn('bad_url_a');
                    }
                }
            }
            if (!url) {
                warn('missing_url');
            }
            if (ux.test(url)) {
                stop('bad_url_a');
            }
            urls.push(url);
            advance();
            return true;
        }
        return false;
    }


    css_any = [css_url, function () {
        for (;;) {
            if (next_token.identifier) {
                switch (next_token.string.toLowerCase()) {
                case 'url':
                    css_url();
                    break;
                case 'expression':
                    warn('unexpected_a');
                    advance();
                    break;
                default:
                    advance();
                }
            } else {
                if (next_token.id === ';' || next_token.id === '!'  ||
                        next_token.id === '(end)' || next_token.id === '}') {
                    return true;
                }
                advance();
            }
        }
    }];


    function font_face() {
        advance_identifier('font-family');
        advance(':');
        if (!css_name() && !css_string()) {
            stop('expected_name_a');
        }
        semicolon();
        advance_identifier('src');
        advance(':');
        while (true) {
            if (next_token.string === 'local') {
                advance_identifier('local');
                advance('(');
                if (ux.test(next_token.string)) {
                    stop('bad_url_a');
                }

                if (!css_name() && !css_string()) {
                    stop('expected_name_a');
                }
                advance(')');
            } else if (!css_url()) {
                stop('expected_a_b', next_token, 'url', artifact());
            }
            if (next_token.id !== ',') {
                break;
            }
            comma();
        }
        semicolon();
    }


    css_border_style = [
        'none', 'dashed', 'dotted', 'double', 'groove',
        'hidden', 'inset', 'outset', 'ridge', 'solid'
    ];

    css_break = [
        'auto', 'always', 'avoid', 'left', 'right'
    ];

    css_media = {
        'all': true,
        'braille': true,
        'embossed': true,
        'handheld': true,
        'print': true,
        'projection': true,
        'screen': true,
        'speech': true,
        'tty': true,
        'tv': true
    };

    css_overflow = [
        'auto', 'hidden', 'scroll', 'visible'
    ];

    css_attribute_data = {
        background: [
            true, 'background-attachment', 'background-color',
            'background-image', 'background-position', 'background-repeat'
        ],
        'background-attachment': ['scroll', 'fixed'],
        'background-color': ['transparent', css_color],
        'background-image': ['none', css_url],
        'background-position': [
            2, [css_length, 'top', 'bottom', 'left', 'right', 'center']
        ],
        'background-repeat': [
            'repeat', 'repeat-x', 'repeat-y', 'no-repeat'
        ],
        'border': [true, 'border-color', 'border-style', 'border-width'],
        'border-bottom': [
            true, 'border-bottom-color', 'border-bottom-style',
            'border-bottom-width'
        ],
        'border-bottom-color': css_color,
        'border-bottom-left-radius': css_radius,
        'border-bottom-right-radius': css_radius,
        'border-bottom-style': css_border_style,
        'border-bottom-width': css_width,
        'border-collapse': ['collapse', 'separate'],
        'border-color': ['transparent', 4, css_color],
        'border-left': [
            true, 'border-left-color', 'border-left-style', 'border-left-width'
        ],
        'border-left-color': css_color,
        'border-left-style': css_border_style,
        'border-left-width': css_width,
        'border-radius': function () {
            function count(separator) {
                var n = 1;
                if (separator) {
                    advance(separator);
                }
                if (!css_length()) {
                    return false;
                }
                while (next_token.id === '(number)') {
                    if (!css_length()) {
                        return false;
                    }
                    n += 1;
                }
                if (n > 4) {
                    warn('bad_style');
                }
                return true;
            }

            return count() && (next_token.id !== '/' || count('/'));
        },
        'border-right': [
            true, 'border-right-color', 'border-right-style',
            'border-right-width'
        ],
        'border-right-color': css_color,
        'border-right-style': css_border_style,
        'border-right-width': css_width,
        'border-spacing': [2, css_length],
        'border-style': [4, css_border_style],
        'border-top': [
            true, 'border-top-color', 'border-top-style', 'border-top-width'
        ],
        'border-top-color': css_color,
        'border-top-left-radius': css_radius,
        'border-top-right-radius': css_radius,
        'border-top-style': css_border_style,
        'border-top-width': css_width,
        'border-width': [4, css_width],
        bottom: [css_length, 'auto'],
        'caption-side' : ['bottom', 'left', 'right', 'top'],
        clear: ['both', 'left', 'none', 'right'],
        clip: [css_shape, 'auto'],
        color: css_color,
        content: [
            'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote',
            css_string, css_url, css_counter, css_attr
        ],
        'counter-increment': [
            css_name, 'none'
        ],
        'counter-reset': [
            css_name, 'none'
        ],
        cursor: [
            css_url, 'auto', 'crosshair', 'default', 'e-resize', 'help', 'move',
            'n-resize', 'ne-resize', 'nw-resize', 'pointer', 's-resize',
            'se-resize', 'sw-resize', 'w-resize', 'text', 'wait'
        ],
        direction: ['ltr', 'rtl'],
        display: [
            'block', 'compact', 'inline', 'inline-block', 'inline-table',
            'list-item', 'marker', 'none', 'run-in', 'table', 'table-caption',
            'table-cell', 'table-column', 'table-column-group',
            'table-footer-group', 'table-header-group', 'table-row',
            'table-row-group'
        ],
        'empty-cells': ['show', 'hide'],
        'float': ['left', 'none', 'right'],
        font: [
            'caption', 'icon', 'menu', 'message-box', 'small-caption',
            'status-bar', true, 'font-size', 'font-style', 'font-weight',
            'font-family'
        ],
        'font-family': css_comma_list,
        'font-size': [
            'xx-small', 'x-small', 'small', 'medium', 'large', 'x-large',
            'xx-large', 'larger', 'smaller', css_length
        ],
        'font-size-adjust': ['none', css_number],
        'font-stretch': [
            'normal', 'wider', 'narrower', 'ultra-condensed',
            'extra-condensed', 'condensed', 'semi-condensed',
            'semi-expanded', 'expanded', 'extra-expanded'
        ],
        'font-style': [
            'normal', 'italic', 'oblique'
        ],
        'font-variant': [
            'normal', 'small-caps'
        ],
        'font-weight': [
            'normal', 'bold', 'bolder', 'lighter', css_number
        ],
        height: [css_length, 'auto'],
        left: [css_length, 'auto'],
        'letter-spacing': ['normal', css_length],
        'line-height': ['normal', css_line_height],
        'list-style': [
            true, 'list-style-image', 'list-style-position', 'list-style-type'
        ],
        'list-style-image': ['none', css_url],
        'list-style-position': ['inside', 'outside'],
        'list-style-type': [
            'circle', 'disc', 'square', 'decimal', 'decimal-leading-zero',
            'lower-roman', 'upper-roman', 'lower-greek', 'lower-alpha',
            'lower-latin', 'upper-alpha', 'upper-latin', 'hebrew', 'katakana',
            'hiragana-iroha', 'katakana-oroha', 'none'
        ],
        margin: [4, css_margin],
        'margin-bottom': css_margin,
        'margin-left': css_margin,
        'margin-right': css_margin,
        'margin-top': css_margin,
        'marker-offset': [css_length, 'auto'],
        'max-height': [css_length, 'none'],
        'max-width': [css_length, 'none'],
        'min-height': css_length,
        'min-width': css_length,
        opacity: css_number,
        outline: [true, 'outline-color', 'outline-style', 'outline-width'],
        'outline-color': ['invert', css_color],
        'outline-style': [
            'dashed', 'dotted', 'double', 'groove', 'inset', 'none',
            'outset', 'ridge', 'solid'
        ],
        'outline-width': css_width,
        overflow: css_overflow,
        'overflow-x': css_overflow,
        'overflow-y': css_overflow,
        padding: [4, css_length],
        'padding-bottom': css_length,
        'padding-left': css_length,
        'padding-right': css_length,
        'padding-top': css_length,
        'page-break-after': css_break,
        'page-break-before': css_break,
        position: ['absolute', 'fixed', 'relative', 'static'],
        quotes: [8, css_string],
        right: [css_length, 'auto'],
        'table-layout': ['auto', 'fixed'],
        'text-align': ['center', 'justify', 'left', 'right'],
        'text-decoration': [
            'none', 'underline', 'overline', 'line-through', 'blink'
        ],
        'text-indent': css_length,
        'text-shadow': ['none', 4, [css_color, css_length]],
        'text-transform': ['capitalize', 'uppercase', 'lowercase', 'none'],
        top: [css_length, 'auto'],
        'unicode-bidi': ['normal', 'embed', 'bidi-override'],
        'vertical-align': [
            'baseline', 'bottom', 'sub', 'super', 'top', 'text-top', 'middle',
            'text-bottom', css_length
        ],
        visibility: ['visible', 'hidden', 'collapse'],
        'white-space': [
            'normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'inherit'
        ],
        width: [css_length, 'auto'],
        'word-spacing': ['normal', css_length],
        'word-wrap': ['break-word', 'normal'],
        'z-index': ['auto', css_number]
    };

    function style_attribute() {
        var v;
        while (next_token.id === '*' || next_token.id === '#' ||
                next_token.string === '_') {
            if (!option.css) {
                warn('unexpected_a');
            }
            advance();
        }
        if (next_token.id === '-') {
            if (!option.css) {
                warn('unexpected_a');
            }
            advance('-');
            if (!next_token.identifier) {
                warn('expected_nonstandard_style_attribute');
            }
            advance();
            return css_any;
        } else {
            if (!next_token.identifier) {
                warn('expected_style_attribute');
            } else {
                if (Object.prototype.hasOwnProperty.call(css_attribute_data,
                        next_token.string)) {
                    v = css_attribute_data[next_token.string];
                } else {
                    v = css_any;
                    if (!option.css) {
                        warn('unrecognized_style_attribute_a');
                    }
                }
            }
            advance();
            return v;
        }
    }


    function style_value(v) {

        /*jslint confusion: true */

        var i = 0,
            n,
            once,
            match,
            round,
            start = 0,
            vi;
        switch (typeof v) {
        case 'function':
            return v();
        case 'string':
            if (next_token.identifier && next_token.string === v) {
                advance();
                return true;
            }
            return false;
        }
        for (;;) {
            if (i >= v.length) {
                return false;
            }
            vi = v[i];
            i += 1;
            if (typeof vi === 'boolean') {
                break;
            } else if (typeof vi === 'number') {
                n = vi;
                vi = v[i];
                i += 1;
            } else {
                n = 1;
            }
            match = false;
            while (n > 0) {
                if (style_value(vi)) {
                    match = true;
                    n -= 1;
                } else {
                    break;
                }
            }
            if (match) {
                return true;
            }
        }
        start = i;
        once = [];
        for (;;) {
            round = false;
            for (i = start; i < v.length; i += 1) {
                if (!once[i]) {
                    if (style_value(css_attribute_data[v[i]])) {
                        match = true;
                        round = true;
                        once[i] = true;
                        break;
                    }
                }
            }
            if (!round) {
                return match;
            }
        }
    }

    function style_child() {
        if (next_token.id === '(number)') {
            advance();
            if (next_token.string === 'n' && next_token.identifier) {
                no_space_only();
                advance();
                if (next_token.id === '+') {
                    no_space_only();
                    advance('+');
                    no_space_only();
                    advance('(number)');
                }
            }
            return;
        } else {
            if (next_token.identifier &&
                    (next_token.string === 'odd' || next_token.string === 'even')) {
                advance();
                return;
            }
        }
        warn('unexpected_a');
    }

    function substyle() {
        var v;
        for (;;) {
            if (next_token.id === '}' || next_token.id === '(end)' ||
                    (xquote && next_token.id === xquote)) {
                return;
            }
            v = style_attribute();
            advance(':');
            if (next_token.identifier && next_token.string === 'inherit') {
                advance();
            } else {
                if (!style_value(v)) {
                    warn('unexpected_a');
                    advance();
                }
            }
            if (next_token.id === '!') {
                advance('!');
                no_space_only();
                if (next_token.identifier && next_token.string === 'important') {
                    advance();
                } else {
                    warn('expected_a_b',
                        next_token, 'important', artifact());
                }
            }
            if (next_token.id === '}' || next_token.id === xquote) {
                warn('expected_a_b', next_token, ';', artifact());
            } else {
                semicolon();
            }
        }
    }

    function style_selector() {
        if (next_token.identifier) {
            if (!Object.prototype.hasOwnProperty.call(html_tag, option.cap
                    ? next_token.string.toLowerCase()
                    : next_token.string)) {
                warn('expected_tagname_a');
            }
            advance();
        } else {
            switch (next_token.id) {
            case '>':
            case '+':
                advance();
                style_selector();
                break;
            case ':':
                advance(':');
                switch (next_token.string) {
                case 'active':
                case 'after':
                case 'before':
                case 'checked':
                case 'disabled':
                case 'empty':
                case 'enabled':
                case 'first-child':
                case 'first-letter':
                case 'first-line':
                case 'first-of-type':
                case 'focus':
                case 'hover':
                case 'last-child':
                case 'last-of-type':
                case 'link':
                case 'only-of-type':
                case 'root':
                case 'target':
                case 'visited':
                    advance_identifier(next_token.string);
                    break;
                case 'lang':
                    advance_identifier('lang');
                    advance('(');
                    if (!next_token.identifier) {
                        warn('expected_lang_a');
                    }
                    advance(')');
                    break;
                case 'nth-child':
                case 'nth-last-child':
                case 'nth-last-of-type':
                case 'nth-of-type':
                    advance_identifier(next_token.string);
                    advance('(');
                    style_child();
                    advance(')');
                    break;
                case 'not':
                    advance_identifier('not');
                    advance('(');
                    if (next_token.id === ':' && peek(0).string === 'not') {
                        warn('not');
                    }
                    style_selector();
                    advance(')');
                    break;
                default:
                    warn('expected_pseudo_a');
                }
                break;
            case '#':
                advance('#');
                if (!next_token.identifier) {
                    warn('expected_id_a');
                }
                advance();
                break;
            case '*':
                advance('*');
                break;
            case '.':
                advance('.');
                if (!next_token.identifier) {
                    warn('expected_class_a');
                }
                advance();
                break;
            case '[':
                advance('[');
                if (!next_token.identifier) {
                    warn('expected_attribute_a');
                }
                advance();
                if (next_token.id === '=' || next_token.string === '~=' ||
                        next_token.string === '$=' ||
                        next_token.string === '|=' ||
                        next_token.id === '*=' ||
                        next_token.id === '^=') {
                    advance();
                    if (next_token.id !== '(string)') {
                        warn('expected_string_a');
                    }
                    advance();
                }
                advance(']');
                break;
            default:
                stop('expected_selector_a');
            }
        }
    }

    function style_pattern() {
        if (next_token.id === '{') {
            warn('expected_style_pattern');
        }
        for (;;) {
            style_selector();
            if (next_token.id === '</' || next_token.id === '{' ||
                    next_token.id === '}' || next_token.id === '(end)') {
                return '';
            }
            if (next_token.id === ',') {
                comma();
            }
        }
    }

    function style_list() {
        while (next_token.id !== '}' && next_token.id !== '</' &&
                next_token.id !== '(end)') {
            style_pattern();
            xmode = 'styleproperty';
            if (next_token.id === ';') {
                semicolon();
            } else {
                advance('{');
                substyle();
                xmode = 'style';
                advance('}');
            }
        }
    }

    function styles() {
        var i;
        while (next_token.id === '@') {
            i = peek();
            advance('@');
            switch (next_token.string) {
            case 'import':
                advance_identifier('import');
                if (!css_url()) {
                    warn('expected_a_b',
                        next_token, 'url', artifact());
                    advance();
                }
                semicolon();
                break;
            case 'media':
                advance_identifier('media');
                for (;;) {
                    if (!next_token.identifier || css_media[next_token.string] !== true) {
                        stop('expected_media_a');
                    }
                    advance();
                    if (next_token.id !== ',') {
                        break;
                    }
                    comma();
                }
                advance('{');
                style_list();
                advance('}');
                break;
            case 'font-face':
                advance_identifier('font-face');
                advance('{');
                font_face();
                advance('}');
                break;
            default:
                stop('expected_at_a');
            }
        }
        style_list();
    }


// Parse HTML

    function do_begin(n) {
        if (n !== 'html' && !option.fragment) {
            if (n === 'div' && option.adsafe) {
                stop('adsafe_fragment');
            } else {
                stop('expected_a_b', token, 'html', n);
            }
        }
        if (option.adsafe) {
            if (n === 'html') {
                stop('adsafe_html', token);
            }
            if (option.fragment) {
                if (n !== 'div') {
                    stop('adsafe_div', token);
                }
            } else {
                stop('adsafe_fragment', token);
            }
        }
        option.browser = true;
    }

    function do_attribute(a, v) {
        var u, x;
        if (a === 'id') {
            u = typeof v === 'string' ? v.toUpperCase() : '';
            if (ids[u] === true) {
                warn('duplicate_a', next_token, v);
            }
            if (!/^[A-Za-z][A-Za-z0-9._:\-]*$/.test(v)) {
                warn('bad_id_a', next_token, v);
            } else if (option.adsafe) {
                if (adsafe_id) {
                    if (v.slice(0, adsafe_id.length) !== adsafe_id) {
                        warn('adsafe_prefix_a', next_token, adsafe_id);
                    } else if (!/^[A-Z]+_[A-Z]+$/.test(v)) {
                        warn('adsafe_bad_id');
                    }
                } else {
                    adsafe_id = v;
                    if (!/^[A-Z]+_$/.test(v)) {
                        warn('adsafe_bad_id');
                    }
                }
            }
            x = v.search(dx);
            if (x >= 0) {
                warn('unexpected_char_a_b', token, v.charAt(x), a);
            }
            ids[u] = true;
        } else if (a === 'class' || a === 'type' || a === 'name') {
            x = v.search(qx);
            if (x >= 0) {
                warn('unexpected_char_a_b', token, v.charAt(x), a);
            }
            ids[u] = true;
        } else if (a === 'href' || a === 'background' ||
                a === 'content' || a === 'data' ||
                a.indexOf('src') >= 0 || a.indexOf('url') >= 0) {
            if (option.safe && ux.test(v)) {
                stop('bad_url_a', next_token, v);
            }
            urls.push(v);
        } else if (a === 'for') {
            if (option.adsafe) {
                if (adsafe_id) {
                    if (v.slice(0, adsafe_id.length) !== adsafe_id) {
                        warn('adsafe_prefix_a', next_token, adsafe_id);
                    } else if (!/^[A-Z]+_[A-Z]+$/.test(v)) {
                        warn('adsafe_bad_id');
                    }
                } else {
                    warn('adsafe_bad_id');
                }
            }
        } else if (a === 'name') {
            if (option.adsafe && v.indexOf('_') >= 0) {
                warn('adsafe_name_a', next_token, v);
            }
        }
    }

    function do_tag(name, attribute) {
        var i, tag = html_tag[name], script, x;
        src = false;
        if (!tag) {
            stop(
                bundle.unrecognized_tag_a,
                next_token,
                name === name.toLowerCase()
                    ? name
                    : name + ' (capitalization error)'
            );
        }
        if (stack.length > 0) {
            if (name === 'html') {
                stop('unexpected_a', token, name);
            }
            x = tag.parent;
            if (x) {
                if (x.indexOf(' ' + stack[stack.length - 1].name + ' ') < 0) {
                    stop('tag_a_in_b', token, name, x);
                }
            } else if (!option.adsafe && !option.fragment) {
                i = stack.length;
                do {
                    if (i <= 0) {
                        stop('tag_a_in_b', token, name, 'body');
                    }
                    i -= 1;
                } while (stack[i].name !== 'body');
            }
        }
        switch (name) {
        case 'div':
            if (option.adsafe && stack.length === 1 && !adsafe_id) {
                warn('adsafe_missing_id');
            }
            break;
        case 'script':
            xmode = 'script';
            advance('>');
            if (attribute.lang) {
                warn('lang', token);
            }
            if (option.adsafe && stack.length !== 1) {
                warn('adsafe_placement', token);
            }
            if (attribute.src) {
                if (option.adsafe && (!adsafe_may || !approved[attribute.src])) {
                    warn('adsafe_source', token);
                }
                if (attribute.type) {
                    warn('type', token);
                }
            } else {
                step_in(next_token.from);
                edge();
                use_strict();
                adsafe_top = true;
                script = statements();

// JSLint is also the static analyzer for ADsafe. See www.ADsafe.org.

                if (option.adsafe) {
                    if (adsafe_went) {
                        stop('adsafe_script', token);
                    }
                    if (script.length !== 1 ||
                            aint(script[0],             'id',     '(') ||
                            aint(script[0].first,       'id',     '.') ||
                            aint(script[0].first.first, 'string', 'ADSAFE') ||
                            aint(script[0].second[0],   'string', adsafe_id)) {
                        stop('adsafe_id_go');
                    }
                    switch (script[0].first.second.string) {
                    case 'id':
                        if (adsafe_may || adsafe_went ||
                                script[0].second.length !== 1) {
                            stop('adsafe_id', next_token);
                        }
                        adsafe_may = true;
                        break;
                    case 'go':
                        if (adsafe_went) {
                            stop('adsafe_go');
                        }
                        if (script[0].second.length !== 2 ||
                                aint(script[0].second[1], 'id', 'function') ||
                                !script[0].second[1].first ||
                                aint(script[0].second[1].first[0], 'string', 'dom') ||
                                script[0].second[1].first.length > 2 ||
                                (script[0].second[1].first.length === 2 &&
                                aint(script[0].second[1].first[1], 'string', 'lib'))) {
                            stop('adsafe_go', next_token);
                        }
                        adsafe_went = true;
                        break;
                    default:
                        stop('adsafe_id_go');
                    }
                }
                indent = null;
            }
            xmode = 'html';
            advance('</');
            advance_identifier('script');
            xmode = 'outer';
            break;
        case 'style':
            xmode = 'style';
            advance('>');
            styles();
            xmode = 'html';
            advance('</');
            advance_identifier('style');
            break;
        case 'input':
            switch (attribute.type) {
            case 'button':
            case 'checkbox':
            case 'radio':
            case 'reset':
            case 'submit':
                break;
            case 'file':
            case 'hidden':
            case 'image':
            case 'password':
            case 'text':
                if (option.adsafe && attribute.autocomplete !== 'off') {
                    warn('adsafe_autocomplete');
                }
                break;
            default:
                warn('bad_type');
            }
            break;
        case 'applet':
        case 'body':
        case 'embed':
        case 'frame':
        case 'frameset':
        case 'head':
        case 'iframe':
        case 'noembed':
        case 'noframes':
        case 'object':
        case 'param':
            if (option.adsafe) {
                warn('adsafe_tag', next_token, name);
            }
            break;
        }
    }


    function closetag(name) {
        return '</' + name + '>';
    }

    function html() {

        /*jslint confusion: true */

        var attribute, attributes, is_empty, name, old_white = option.white,
            quote, tag_name, tag, wmode;
        xmode = 'html';
        xquote = '';
        stack = null;
        for (;;) {
            switch (next_token.string) {
            case '<':
                xmode = 'html';
                advance('<');
                attributes = {};
                tag_name = next_token;
                name = tag_name.string;
                advance_identifier(name);
                if (option.cap) {
                    name = name.toLowerCase();
                }
                tag_name.name = name;
                if (!stack) {
                    stack = [];
                    do_begin(name);
                }
                tag = html_tag[name];
                if (typeof tag !== 'object') {
                    stop('unrecognized_tag_a', tag_name, name);
                }
                is_empty = tag.empty;
                tag_name.type = name;
                for (;;) {
                    if (next_token.id === '/') {
                        advance('/');
                        if (next_token.id !== '>') {
                            warn('expected_a_b', next_token, '>', artifact());
                        }
                        break;
                    }
                    if (next_token.id && next_token.id.charAt(0) === '>') {
                        break;
                    }
                    if (!next_token.identifier) {
                        if (next_token.id === '(end)' || next_token.id === '(error)') {
                            warn('expected_a_b', next_token, '>', artifact());
                        }
                        warn('bad_name_a');
                    }
                    option.white = false;
                    spaces();
                    attribute = next_token.string;
                    option.white = old_white;
                    advance();
                    if (!option.cap && attribute !== attribute.toLowerCase()) {
                        warn('attribute_case_a', token);
                    }
                    attribute = attribute.toLowerCase();
                    xquote = '';
                    if (Object.prototype.hasOwnProperty.call(attributes, attribute)) {
                        warn('duplicate_a', token, attribute);
                    }
                    if (attribute.slice(0, 2) === 'on') {
                        if (!option.on) {
                            warn('html_handlers');
                        }
                        xmode = 'scriptstring';
                        advance('=');
                        quote = next_token.id;
                        if (quote !== '"' && quote !== '\'') {
                            stop('expected_a_b', next_token, '"', artifact());
                        }
                        xquote = quote;
                        wmode = option.white;
                        option.white = true;
                        advance(quote);
                        use_strict();
                        statements();
                        option.white = wmode;
                        if (next_token.id !== quote) {
                            stop('expected_a_b', next_token, quote, artifact());
                        }
                        xmode = 'html';
                        xquote = '';
                        advance(quote);
                        tag = false;
                    } else if (attribute === 'style') {
                        xmode = 'scriptstring';
                        advance('=');
                        quote = next_token.id;
                        if (quote !== '"' && quote !== '\'') {
                            stop('expected_a_b', next_token, '"', artifact());
                        }
                        xmode = 'styleproperty';
                        xquote = quote;
                        advance(quote);
                        substyle();
                        xmode = 'html';
                        xquote = '';
                        advance(quote);
                        tag = false;
                    } else {
                        if (next_token.id === '=') {
                            advance('=');
                            tag = next_token.string;
                            if (!next_token.identifier &&
                                    next_token.id !== '"' &&
                                    next_token.id !== '\'' &&
                                    next_token.id !== '(string)' &&
                                    next_token.id !== '(string)' &&
                                    next_token.id !== '(color)') {
                                warn('expected_attribute_value_a', token, attribute);
                            }
                            advance();
                        } else {
                            tag = true;
                        }
                    }
                    attributes[attribute] = tag;
                    do_attribute(attribute, tag);
                }
                do_tag(name, attributes);
                if (!is_empty) {
                    stack.push(tag_name);
                }
                xmode = 'outer';
                advance('>');
                break;
            case '</':
                xmode = 'html';
                advance('</');
                if (!next_token.identifier) {
                    warn('bad_name_a');
                }
                name = next_token.string;
                if (option.cap) {
                    name = name.toLowerCase();
                }
                advance();
                if (!stack) {
                    stop('unexpected_a', next_token, closetag(name));
                }
                tag_name = stack.pop();
                if (!tag_name) {
                    stop('unexpected_a', next_token, closetag(name));
                }
                if (tag_name.name !== name) {
                    stop('expected_a_b',
                        next_token, closetag(tag_name.name), closetag(name));
                }
                if (next_token.id !== '>') {
                    stop('expected_a_b', next_token, '>', artifact());
                }
                xmode = 'outer';
                advance('>');
                break;
            case '<!':
                if (option.safe) {
                    warn('adsafe_a');
                }
                xmode = 'html';
                for (;;) {
                    advance();
                    if (next_token.id === '>' || next_token.id === '(end)') {
                        break;
                    }
                    if (next_token.string.indexOf('--') >= 0) {
                        stop('unexpected_a', next_token, '--');
                    }
                    if (next_token.string.indexOf('<') >= 0) {
                        stop('unexpected_a', next_token, '<');
                    }
                    if (next_token.string.indexOf('>') >= 0) {
                        stop('unexpected_a', next_token, '>');
                    }
                }
                xmode = 'outer';
                advance('>');
                break;
            case '(end)':
                return;
            default:
                if (next_token.id === '(end)') {
                    stop('missing_a', next_token,
                        '</' + stack[stack.length - 1].string + '>');
                } else {
                    advance();
                }
            }
            if (stack && stack.length === 0 && (option.adsafe ||
                    !option.fragment || next_token.id === '(end)')) {
                break;
            }
        }
        if (next_token.id !== '(end)') {
            stop('unexpected_a');
        }
    }


// The actual JSLINT function itself.

    itself = function JSLint(the_source, the_option) {

        var i, predef, tree;
        JSLINT.errors = [];
        JSLINT.tree = '';
        begin = prev_token = token = next_token =
            Object.create(syntax['(begin)']);
        predefined = {};
        add_to_predefined(standard);
        property_type = Object.create(standard_property_type);
        if (the_option) {
            option = Object.create(the_option);
            predef = option.predef;
            if (predef) {
                if (Array.isArray(predef)) {
                    for (i = 0; i < predef.length; i += 1) {
                        predefined[predef[i]] = true;
                    }
                } else if (typeof predef === 'object') {
                    add_to_predefined(predef);
                }
            }
            do_safe();
        } else {
            option = {};
        }
        option.indent = +option.indent || 4;
        option.maxerr = +option.maxerr || 50;
        adsafe_id = '';
        adsafe_may = adsafe_top = adsafe_went = false;
        approved = {};
        if (option.approved) {
            for (i = 0; i < option.approved.length; i += 1) {
                approved[option.approved[i]] = option.approved[i];
            }
        } else {
            approved.test = 'test';
        }
        tab = '';
        for (i = 0; i < option.indent; i += 1) {
            tab += ' ';
        }
        global_scope = scope = {};
        global_funct = funct = {
            '(scope)': scope,
            '(breakage)': 0,
            '(loopage)': 0
        };
        functions = [funct];

        comments_off = false;
        ids = {};
        in_block = false;
        indent = null;
        json_mode = false;
        lookahead = [];
        member = {};
        node_js = false;
        prereg = true;
        src = false;
        stack = null;
        strict_mode = false;
        urls = [];
        var_mode = null;
        warnings = 0;
        xmode = '';
        lex.init(the_source);

        assume();

        try {
            advance();
            if (next_token.id === '(number)') {
                stop('unexpected_a');
            } else if (next_token.string.charAt(0) === '<') {
                html();
                if (option.adsafe && !adsafe_went) {
                    warn('adsafe_go', this);
                }
            } else {
                switch (next_token.id) {
                case '{':
                case '[':
                    json_mode = true;
                    json_value();
                    break;
                case '@':
                case '*':
                case '#':
                case '.':
                case ':':
                    xmode = 'style';
                    advance();
                    if (token.id !== '@' || !next_token.identifier ||
                            next_token.string !== 'charset' || token.line !== 1 ||
                            token.from !== 1) {
                        stop('css');
                    }
                    advance();
                    if (next_token.id !== '(string)' &&
                            next_token.string !== 'UTF-8') {
                        stop('css');
                    }
                    advance();
                    semicolon();
                    styles();
                    break;

                default:
                    if (option.adsafe && option.fragment) {
                        stop('expected_a_b',
                            next_token, '<div>', artifact());
                    }

// If the first token is a semicolon, ignore it. This is sometimes used when
// files are intended to be appended to files that may be sloppy. A sloppy
// file may be depending on semicolon insertion on its last line.

                    step_in(1);
                    if (next_token.id === ';' && !node_js) {
                        semicolon();
                    }
                    adsafe_top = true;
                    tree = statements();
                    begin.first = tree;
                    JSLINT.tree = begin;
                    // infer_types(tree);
                    if (option.adsafe && (tree.length !== 1 ||
                            aint(tree[0], 'id', '(') ||
                            aint(tree[0].first, 'id', '.') ||
                            aint(tree[0].first.first, 'string', 'ADSAFE') ||
                            aint(tree[0].first.second, 'string', 'lib') ||
                            tree[0].second.length !== 2 ||
                            tree[0].second[0].id !== '(string)' ||
                            aint(tree[0].second[1], 'id', 'function'))) {
                        stop('adsafe_lib');
                    }
                    if (tree.disrupt) {
                        warn('weird_program', prev_token);
                    }
                }
            }
            indent = null;
            advance('(end)');
        } catch (e) {
            if (e) {        // `~
                JSLINT.errors.push({
                    reason    : e.message,
                    line      : e.line || next_token.line,
                    character : e.character || next_token.from
                }, null);
            }
        }
        return JSLINT.errors.length === 0;
    };


// Data summary.

    itself.data = function () {
        var data = {functions: []},
            function_data,
            globals,
            i,
            j,
            kind,
            members = [],
            name,
            the_function,
            undef = [],
            unused = [];
        if (itself.errors.length) {
            data.errors = itself.errors;
        }

        if (json_mode) {
            data.json = true;
        }

        if (urls.length > 0) {
            data.urls = urls;
        }

        globals = Object.keys(global_scope).filter(function (value) {
            return value.charAt(0) !== '(' && typeof standard[value] !== 'boolean';
        });
        if (globals.length > 0) {
            data.globals = globals;
        }

        for (i = 1; i < functions.length; i += 1) {
            the_function = functions[i];
            function_data = {};
            for (j = 0; j < functionicity.length; j += 1) {
                function_data[functionicity[j]] = [];
            }
            for (name in the_function) {
                if (Object.prototype.hasOwnProperty.call(the_function, name)) {
                    if (name.charAt(0) !== '(') {
                        kind = the_function[name];
                        if (kind === 'unction' || kind === 'unparam') {
                            kind = 'unused';
                        }
                        if (Array.isArray(function_data[kind])) {
                            function_data[kind].push(name);
                            if (kind === 'unused') {
                                unused.push({
                                    name: name,
                                    line: the_function['(line)'],
                                    'function': the_function['(name)']
                                });
                            } else if (kind === 'undef') {
                                undef.push({
                                    name: name,
                                    line: the_function['(line)'],
                                    'function': the_function['(name)']
                                });
                            }
                        }
                    }
                }
            }
            for (j = 0; j < functionicity.length; j += 1) {
                if (function_data[functionicity[j]].length === 0) {
                    delete function_data[functionicity[j]];
                }
            }
            function_data.name = the_function['(name)'];
            function_data.params = the_function['(params)'];
            function_data.line = the_function['(line)'];
            data.functions.push(function_data);
        }

        if (unused.length > 0) {
            data.unused = unused;
        }
        if (undef.length > 0) {
            data['undefined'] = undef;
        }

        members = [];
        for (name in member) {
            if (typeof member[name] === 'number') {
                data.member = member;
                break;
            }
        }

        return data;
    };


    itself.report = function (errors_only) {
        var data = itself.data(), err, evidence, i, italics, j, key, keys, length,
            mem = '', name, names, output = [], snippets, the_function, type,
            warning;

        function detail(h, value) {
            var comma_needed, singularity;
            if (Array.isArray(value)) {
                output.push('<div><i>' + h + '</i> ');
                value.sort().forEach(function (item) {
                    if (item !== singularity) {
                        singularity = item;
                        output.push((comma_needed ? ', ' : '') + singularity);
                        comma_needed = true;
                    }
                });
                output.push('</div>');
            } else if (value) {
                output.push('<div><i>' + h + '</i> ' + value + '</div>');
            }
        }

        if (data.errors || data.unused || data['undefined']) {
            err = true;
            output.push('<div id=errors><i>Error:</i>');
            if (data.errors) {
                for (i = 0; i < data.errors.length; i += 1) {
                    warning = data.errors[i];
                    if (warning) {
                        evidence = warning.evidence || '';
                        output.push('<p>Problem' + (isFinite(warning.line)
                            ? ' at line ' + String(warning.line) +
                                ' character ' + String(warning.character)
                            : '') +
                            ': ' + warning.reason.entityify() +
                            '</p><p class=evidence>' +
                            (evidence && (evidence.length > 80
                                ? evidence.slice(0, 77) + '...'
                                : evidence).entityify()) + '</p>');
                    }
                }
            }

            if (data['undefined']) {
                snippets = [];
                for (i = 0; i < data['undefined'].length; i += 1) {
                    snippets[i] = '<code><u>' + data['undefined'][i].name + '</u></code>&nbsp;<i>' +
                        String(data['undefined'][i].line) + ' </i> <small>' +
                        data['undefined'][i]['function'] + '</small>';
                }
                output.push('<p><i>Undefined variable:</i> ' + snippets.join(', ') + '</p>');
            }
            if (data.unused) {
                snippets = [];
                for (i = 0; i < data.unused.length; i += 1) {
                    snippets[i] = '<code><u>' + data.unused[i].name + '</u></code>&nbsp;<i>' +
                        String(data.unused[i].line) + ' </i> <small>' +
                        data.unused[i]['function'] + '</small>';
                }
                output.push('<p><i>Unused variable:</i> ' + snippets.join(', ') + '</p>');
            }
            if (data.json) {
                output.push('<p>JSON: bad.</p>');
            }
            output.push('</div>');
        }

        if (!errors_only) {

            output.push('<br><div id=functions>');

            if (data.urls) {
                detail("URLs<br>", data.urls, '<br>');
            }

            if (xmode === 'style') {
                output.push('<p>CSS.</p>');
            } else if (data.json && !err) {
                output.push('<p>JSON: good.</p>');
            } else if (data.globals) {
                output.push('<div><i>Global</i> ' +
                    data.globals.sort().join(', ') + '</div>');
            } else {
                output.push('<div><i>No new global variables introduced.</i></div>');
            }

            for (i = 0; i < data.functions.length; i += 1) {
                the_function = data.functions[i];
                names = [];
                if (the_function.params) {
                    for (j = 0; j < the_function.params.length; j += 1) {
                        names[j] = the_function.params[j].string;
                    }
                }
                output.push('<br><div class=function><i>' +
                    String(the_function.line) + '</i> ' +
                    the_function.name.entityify() +
                    '(' + names.join(', ') + ')</div>');
                detail('<big><b>Undefined</b></big>', the_function['undefined']);
                detail('<big><b>Unused</b></big>', the_function.unused);
                detail('Closure', the_function.closure);
                detail('Variable', the_function['var']);
                detail('Exception', the_function.exception);
                detail('Outer', the_function.outer);
                detail('Global', the_function.global);
                detail('Label', the_function.label);
            }

            if (data.member) {
                keys = Object.keys(data.member);
                if (keys.length) {
                    keys = keys.sort();
                    output.push('<br><pre id=properties>/*properties<br>');
                    mem = '    ';
                    italics = 0;
                    j = 0;
                    if (option.confusion) {
                        for (i = 0; i < keys.length; i += 1) {
                            key = keys[i];
                            if (typeof standard_property_type[key] !== 'string') {
                                name = ix.test(key)
                                    ? key
                                    : '\'' + key.entityify().replace(nx, sanitize) + '\'';
                                if (data.member[key] === 1) {
                                    name = '<i>' + name + '</i>';
                                    italics += 1;
                                    j = 1;
                                }
                                if (i < keys.length - 1) {
                                    name += ', ';
                                }
                                if (mem.length + name.length - (italics * 7) > 80) {
                                    output.push(mem + '<br>');
                                    mem = '    ';
                                    italics = j;
                                }
                                mem += name;
                                j = 0;
                            }
                        }
                    } else {
                        for (i = 0; i < keys.length; i += 1) {
                            key = keys[i];
                            type = property_type[key];
                            if (typeof type !== 'string') {
                                type = '';
                            }
                            if (standard_property_type[key] !== type) {
                                name = ix.test(key)
                                    ? key
                                    : '\'' + key.entityify().replace(nx, sanitize) + '\'';
                                length += name.length + 2;
                                if (data.member[key] === 1) {
                                    name = '<i>' + name + '</i>';
                                    italics += 1;
                                    j = 1;
                                }
                                if (type) {
                                    name += ': ' + type;
                                }
                                if (i < keys.length - 1) {
                                    name += ', ';
                                }
                                if (mem.length + name.length - (italics * 7) > 80) {
                                    output.push(mem + '<br>');
                                    mem = '    ';
                                    italics = j;
                                }
                                mem += name;
                                j = 0;
                            }
                        }
                    }
                    output.push(mem + '<br>*/</pre>');
                }
                output.push('</div>');
            }
        }
        return output.join('');
    };
    itself.jslint = itself;

    itself.edition = '2012-01-13';

    return itself;
}());

define("thirdparty/jslint/jslint", function(){});

/*
 * Copyright 2012 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false */

/**
 * PreferencesManager
 *
 */
define('PreferencesManager',['require','exports','module'],function (require, exports, module) {
    'use strict';
    
    var PREFERENCES_KEY = "com.adobe.brackets.preferences";

    // Private Properties
    var preferencesKey,
        callbacks = {}, /* associative array with clientID keys */
        prefStorage,
        persistentStorage,
        doLoadPreferences   = false;

    /**
     * Retrieves a copy of the client's preferences object.
     *
     * @param {string}  unique identifier clientID
     * @return {object} preference
     */
    function getPreferences(clientID) {
        if ((clientID === undefined) || (clientID === null)) {
            throw new Error("Invalid clientID");
        }

        var prefs = prefStorage[clientID];

        if (prefs === undefined) {
            return undefined;
        }

        // create a deep copy to return to the client
        return JSON.parse(JSON.stringify(prefs));
    }

    /**
     * Saves to persistent storage.
     */
    function saveToPersistentStorage() {
        // save all preferences
        persistentStorage.setItem(preferencesKey, JSON.stringify(prefStorage));
    }

    /**
     * Registers a save participant callback for a client. The callback is
     * fired when Brackets quits (window.unload). When fired, callbacks may
     * persist data (e.g. preferences or current state) as valid JSON values
     * to the storage argument.
     *
     * @param {string}          unique identifier clientID for this client
     * @param {function(...)}   callback function
     * @param {object}          optional "this" object for the callback
     * @param {object}          optional default preferences object for this client
     */
    function addPreferencesClient(clientID, callback, instance, defaults) {
        if (typeof callback !== "function") {
            throw new Error("Invalid arguments");
        }

        // attempt to load existing preferences
        var clientPrefs = getPreferences(clientID);

        // if clientPrefs is undefined, try defaults
        if (clientPrefs === undefined) {
            if (JSON.stringify(defaults)) {
                // use defaults if it is a valid JSON object
                clientPrefs = defaults;
            } else {
                // use empty defaults if JSON validation fails
                clientPrefs = {};
            }

            // save defaults in-memory, storage
            prefStorage[clientID] = clientPrefs;
            saveToPersistentStorage();
        }

        var callbackData = { clientID: clientID,
                             callback: callback,
                             instance: instance };

        // add to callbacks list
        callbacks[clientID] = callbackData;
    }

    /**
     * Save all preference clients.
     */
    function savePreferences() {
        var data,
            storage;

        // iterate over all preference clients
        $.each(callbacks, function (index, value) {
            data = callbacks[index];
            storage = getPreferences(data.clientID);

            // fire callback with thisArg and preference storage
            try {
                data.callback.call(data.instance, storage);
            } catch (e) {
                console.log("PreferenceManager.savePreferences(): Failed to save data for clientID " + data.clientID);
            }

            // only save preferences that can be serialized with JSON
            if (JSON.stringify(storage)) {
                prefStorage[data.clientID] = storage;
            }
        });

        saveToPersistentStorage();
    }

    /**
     * @private
     * Reset preferences and callbacks
     */
    function _reset() {
        callbacks = {};
        prefStorage = {};

        // Note that storage.clear() is not used. Production and unit test code
        // both rely on the same backing storage but unique item keys.
        persistentStorage.setItem(preferencesKey, JSON.stringify(prefStorage));
    }

    /**
     * @private
     * Initialize persistent storage implementation
     */
    function _initStorage(storage) {
        persistentStorage = storage;

        if (doLoadPreferences) {
            prefStorage = JSON.parse(persistentStorage.getItem(preferencesKey));
        }

        // initialize empty preferences if none were found in storage
        if (!prefStorage) {
            _reset();
        }
    }

    // check localStorage for a preferencesKey
    preferencesKey = localStorage.getItem("preferencesKey");

    if (!preferencesKey) {
        // use default key if none is found
        preferencesKey = PREFERENCES_KEY;
        doLoadPreferences = true;
    } else {
        // using a non-default key, check for additional settings
        doLoadPreferences = !!(localStorage.getItem("doLoadPreferences"));
    }

    // Use localStorage by default
    _initStorage(localStorage);

    // Public API
    exports.getPreferences          = getPreferences;
    exports.addPreferencesClient    = addPreferencesClient;
    exports.savePreferences         = savePreferences;

    // Internal Use Only
    exports._reset                  = _reset;
});
/*
 * Copyright 2012 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false */

 /**
  * This is JavaScript API exposed to the native shell when Brackets is run in a native shell rather than a browser.
  */
define('ShellAPI',['require','exports','module','CommandManager'],function (require, exports, module) {
    'use strict';

    // Load dependent modules
    var CommandManager     = require("CommandManager");

    /**
     * The native function BracketsShellAPI::DispatchBracketsJSCommand calls this function in order to enable
     * calling Brackets commands from the native shell.
     */
    function executeCommand(eventName) {
        var evt = document.createEvent("Event");
        evt.initEvent(eventName, false, true);
        
        CommandManager.execute(eventName, {evt: evt});
        
        //return if default was prevented
        return evt.defaultPrevented;
    }

    exports.executeCommand = executeCommand;
});
/*
 * Copyright 2012 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false, CodeMirror: false */

/**
 * Editor is a 1-to-1 wrapper for a CodeMirror editor instance. It layers on Brackets-specific
 * functionality and provides APIs that cleanly pass through the bits of CodeMirror that the rest
 * of our codebase may want to interact with. An Editor is always backed by a Document, and stays
 * in sync with its content; because Editor keeps the Document alive, it's important to always
 * destroy() an Editor that's going away so it can release its Document ref.
 *
 * For now, there's a distinction between the "master" Editor for a Document - which secretly acts
 * as the Document's internal model of the text state - and the multitude of "slave" secondary Editors
 * which, via Document, sync their changes to and from that master.
 * Note: in sprint 5, secondary Editors only sync TO the Document; they cannot sync FROM the Document
 * if anyone else changes it (see lostSync event below).
 *
 * For now, direct access to the underlying CodeMirror object is still possible via _codeMirror --
 * but this is considered deprecated and may go away.
 *  
 * The Editor object dispatches the following events:
 *    - change -- When the text of the editor changes (including due to undo/redo)
 *    - keyEvent -- When any key event happens in the editor (whether it changes the text or not).
 *          Event handlers are passed ({Editor}, {KeyboardEvent}). The 2nd arg is the raw DOM event.
 *          Note: most listeners will only want to respond when event.type === "keypress".
 *    - lostSync -- When the backing Document changes in such a way that this Editor is no longer
 *          able to stay in sync with the text. Only fired by secondary (inline) editors. This will
 *          go away completely once we have full cross-Editor syncing.
 *
 * These are jQuery events, so to listen for them you do something like this:
 *    $(editorInstance).on("eventname", handler);
 */
define('Editor',['require','exports','module','EditorManager'],function (require, exports, module) {
    'use strict';
    
    var EditorManager    = require("EditorManager");
    
    
    /**
     * @private
     * Handle Tab key press.
     * @param {!CodeMirror} instance CodeMirror instance.
     */
    function _handleTabKey(instance) {
        // Tab key handling is done as follows:
        // 1. If the selection is before any text and the indentation is to the left of 
        //    the proper indentation then indent it to the proper place. Otherwise,
        //    add another tab. In either case, move the insertion point to the 
        //    beginning of the text.
        // 2. If the selection is after the first non-space character, and is not an 
        //    insertion point, indent the entire line(s).
        // 3. If the selection is after the first non-space character, and is an 
        //    insertion point, insert a tab character or the appropriate number 
        //    of spaces to pad to the nearest tab boundary.
        var from = instance.getCursor(true),
            to = instance.getCursor(false),
            line = instance.getLine(from.line),
            indentAuto = false,
            insertTab = false;
        
        if (from.line === to.line) {
            if (line.search(/\S/) > to.ch || to.ch === 0) {
                indentAuto = true;
            }
        }

        if (indentAuto) {
            var currentLength = line.length;
            CodeMirror.commands.indentAuto(instance);
            // If the amount of whitespace didn't change, insert another tab
            if (instance.getLine(from.line).length === currentLength) {
                insertTab = true;
                to.ch = 0;
            }
        } else if (instance.somethingSelected()) {
            CodeMirror.commands.indentMore(instance);
        } else {
            insertTab = true;
        }
        
        if (insertTab) {
            if (instance.getOption("indentWithTabs")) {
                CodeMirror.commands.insertTab(instance);
            } else {
                var i, ins = "", numSpaces = instance.getOption("tabSize");
                numSpaces -= to.ch % numSpaces;
                for (i = 0; i < numSpaces; i++) {
                    ins += " ";
                }
                instance.replaceSelection(ins, "end");
            }
        }
    }
    
    /**
     * @private
     * Handle left arrow, right arrow, backspace and delete keys when soft tabs are used.
     * @param {!CodeMirror} instance CodeMirror instance 
     * @param {number} direction Direction of movement: 1 for forward, -1 for backward
     * @param {function} functionName name of the CodeMirror function to call
     * @return {boolean} true if key was handled
     */
    function _handleSoftTabNavigation(instance, direction, functionName) {
        var handled = false;
        if (!instance.getOption("indentWithTabs")) {
            var cursor = instance.getCursor(),
                tabSize = instance.getOption("tabSize"),
                jump = cursor.ch % tabSize,
                line = instance.getLine(cursor.line);

            if (direction === 1) {
                jump = tabSize - jump;

                if (cursor.ch + jump > line.length) { // Jump would go beyond current line
                    return false;
                }

                if (line.substr(cursor.ch, jump).search(/\S/) === -1) {
                    instance[functionName](jump, "char");
                    handled = true;
                }
            } else {
                // Quick exit if we are at the beginning of the line
                if (cursor.ch === 0) {
                    return false;
                }
                
                // If we are on the tab boundary, jump by the full amount, 
                // but not beyond the start of the line.
                if (jump === 0) {
                    jump = tabSize;
                }

                // Search backwards to the first non-space character
                var offset = line.substr(cursor.ch - jump, jump).search(/\s*$/g);

                if (offset !== -1) { // Adjust to jump to first non-space character
                    jump -= offset;
                }

                if (jump > 0) {
                    instance[functionName](-jump, "char");
                    handled = true;
                }
            }
        }

        return handled;
    }
    
    /**
     * Checks if the user just typed a closing brace/bracket/paren, and considers automatically
     * back-indenting it if so.
     */
    function _checkElectricChars(jqEvent, editor, event) {
        var instance = editor._codeMirror;
        if (event.type === "keypress") {
            var keyStr = String.fromCharCode(event.which || event.keyCode);
            if (/[\]\}\)]/.test(keyStr)) {
                // If the whole line is whitespace, auto-indent it
                var lineNum = instance.getCursor().line;
                var lineStr = instance.getLine(lineNum);
                
                if (!/\S/.test(lineStr)) {
                    // Need to do the auto-indent on a timeout to ensure
                    // the keypress is handled before auto-indenting.
                    // This is the same timeout value used by the
                    // electricChars feature in CodeMirror.
                    setTimeout(function () {
                        instance.indentLine(lineNum);
                    }, 75);
                }
            }
        }
    }
    

    /**
     * Creates a new CodeMirror editor instance bound to the given Document. The Document need not have
     * a "master" Editor realized yet, even if makeMasterEditor is false; in that case, the first time
     * an edit occurs we will automatically ask EditorManager to create a "master" editor to render the
     * Document modifiable.
     *
     * ALWAYS call destroy() when you are done with an Editor - otherwise it will leak a Document ref.
     *
     * @param {!Document} document  
     * @param {!boolean} makeMasterEditor  If true, this Editor will set itself as the (secret) "master"
     *          Editor for the Document. If false, this Editor will attach to the Document as a "slave"/
     *          secondary editor.
     * @param {!string} mode  Syntax-highlighting language mode; "" means plain-text mode.
     *          See {@link EditorUtils#getModeFromFileExtension()}.
     * @param {!jQueryObject} container  Container to add the editor to.
     * @param {!Object<string, function(Editor)} additionalKeys  Mapping of keyboard shortcuts to
     *          custom handler functions. Mapping is in CodeMirror format, NOT in our KeyMap format.
     */
    function Editor(document, makeMasterEditor, mode, container, additionalKeys) {
        var self = this;
        
        // Attach to document
        this.document = document;
        document.addRef();
        this._handleDocumentChange = this._handleDocumentChange.bind(this); // store bound version to we can remove listener later
        $(document).on("change", this._handleDocumentChange);
        
        // (if makeMasterEditor, we attach the Doc back to ourselves below once we're fully initialized)
        
        this._inlineWidgets = [];
        
        // Editor supplies some standard keyboard behavior extensions of its own
        var codeMirrorKeyMap = {
            "Tab"  : _handleTabKey,
            "Left" : function (instance) {
                if (!_handleSoftTabNavigation(instance, -1, "moveH")) {
                    CodeMirror.commands.goCharLeft(instance);
                }
            },
            "Right" : function (instance) {
                if (!_handleSoftTabNavigation(instance, 1, "moveH")) {
                    CodeMirror.commands.goCharRight(instance);
                }
            },
            "Backspace" : function (instance) {
                if (!_handleSoftTabNavigation(instance, -1, "deleteH")) {
                    CodeMirror.commands.delCharLeft(instance);
                }
            },
            "Delete" : function (instance) {
                if (!_handleSoftTabNavigation(instance, 1, "deleteH")) {
                    CodeMirror.commands.delCharRight(instance);
                }
            },
            "F3": "findNext",
            "Shift-F3": "findPrev",
            "Ctrl-H": "replace",
            "Shift-Delete": "cut",
            "Ctrl-Insert": "copy",
            "Shift-Insert": "paste"
        };
        
        // Merge in the additionalKeys we were passed
        function wrapEventHandler(externalHandler) {
            return function (instance) {
                externalHandler(self);
            };
        }
        var key;
        for (key in additionalKeys) {
            if (additionalKeys.hasOwnProperty(key)) {
                if (codeMirrorKeyMap.hasOwnProperty(key)) {
                    console.log("Warning: overwriting standard Editor shortcut " + key);
                }
                codeMirrorKeyMap[key] = wrapEventHandler(additionalKeys[key]);
            }
        }
        
        // We'd like null/"" to mean plain text mode. CodeMirror defaults to plaintext for any
        // unrecognized mode, but it complains on the console in that fallback case: so, convert
        // here so we're always explicit, avoiding console noise.
        if (!mode) {
            mode = "text/plain";
        }
        
        // Create the CodeMirror instance
        // (note: CodeMirror doesn't actually require using 'new', but jslint complains without it)
        this._codeMirror = new CodeMirror(container, {
            electricChars: false,   // we use our own impl of this to avoid CodeMirror bugs; see _checkElectricChars()
            indentUnit : 4,
            lineNumbers: true,
            matchBrackets: true,
            extraKeys: codeMirrorKeyMap
        });
        
        this._installEditorListeners();
        
        $(this)
            .on("keyEvent", _checkElectricChars)
            .on("change", this._handleEditorChange.bind(this));
        
        // Set code-coloring mode BEFORE populating with text, to avoid a flash of uncolored text
        this._codeMirror.setOption("mode", mode);
        
        // Initially populate with text. This will send a spurious change event, so need to make
        // sure this is understood as a 'sync from document' case, not a genuine edit
        this._duringSync = true;
        this._resetText(document.getText());
        this._duringSync = false;
        
        // Now that we're fully initialized, we can point the document back at us if needed
        if (makeMasterEditor) {
            document._makeEditable(this);
        }
    }
    
    /**
     * Removes this editor from the DOM and detaches from the Document. If this is the "master"
     * Editor that is secretly providing the Document's backing state, then the Document reverts to
     * a read-only string-backed mode.
     */
    Editor.prototype.destroy = function () {
        // CodeMirror docs for getWrapperElement() say all you have to do is "Remove this from your
        // tree to delete an editor instance."
        $(this._codeMirror.getWrapperElement()).remove();
        
        // Disconnect from Document
        this.document.releaseRef();
        $(this.document).off("change", this._handleDocumentChange);
        
        if (this.document._masterEditor === this) {
            this.document._makeNonEditable();
        }
        
        // Destroying us destroys any inline widgets we're hosting. Make sure their closeCallbacks
        // run, at least, since they may also need to release Document refs
        this._inlineWidgets.forEach(function (inlineInfo) {
            inlineInfo.closeCallback();
        });
    };
    
    /**
     * Responds to changes in the CodeMirror editor's text, syncing the changes to the Document.
     * There are several cases where we want to ignore a CodeMirror change:
     *  - if we're the master editor, editor changes can be ignored because Document is already listening
     *    for our changes
     *  - if we're a secondary editor, editor changes should be ignored if they were caused by us reacting
     *    to a Document change
     */
    Editor.prototype._handleEditorChange = function () {
        // we're currently syncing from the Document, so don't echo back TO the Document
        if (this._duringSync) {
            return;
        }
        
        // Secondary editor: force creation of "master" editor backing the model, if doesn't exist yet
        if (!this.document._masterEditor) {
            EditorManager._createFullEditorForDocument(this.document);
        }
        
        if (this.document._masterEditor !== this) {
            // Secondary editor:
            // we're not the ground truth; if we got here, this was a real editor change (not a
            // sync from the real ground truth), so we need to sync from us into the document
            this._duringSync = true;
            this.document.setText(this._getText());
            this._duringSync = false;
        }
        // Else, Master editor:
        // we're the ground truth; nothing else to do, since everyone else will sync from us
        // note: this change might have been a real edit made by the user, OR this might have
        // been a change synced from another editor
    };
    
    /**
     * Responds to changes in the Document's text, syncing the changes into our CodeMirror instance.
     * There are several cases where we want to ignore a Document change:
     *  - if we're the master editor, Document changes should be ignored becuase we already have the right
     *    text (either the change originated with us, or it has already been set into us by Document)
     *  - if we're a secondary editor, Document changes should be ignored if they were caused by us sending
     *    the document an editor change that originated with us
     */
    Editor.prototype._handleDocumentChange = function () {
        // we're currently syncing to the Document, so don't echo back FROM the Document
        if (this._duringSync) {
            return;
        }
        
        if (this.document._masterEditor !== this) {
            // Secondary editor:
            // we're not the ground truth; and if we got here, this was a Document change that
            // didn't come from us (e.g. a sync from another editor, a direct programmatic change
            // to the document, or a sync from external disk changes)... so sync from the Document
            
            // Syncing from Document / main editor back to inline editors is NOT supported yet!
            $(this).triggerHandler("lostSync");
            
            // FUTURE: do full cross-editor syncing without losing visible range, scroll pos, etc.
            // this._duringSync = true;
            // this.setText(this.document.getText());
            // this._duringSync = false;
        }
        // Else, Master editor:
        // we're the ground truth; nothing to do since Document change is just echoing that our
        // editor changes
    };
    
    
    /**
     * Install singleton event handlers on the CodeMirror instance, translating them into multi-
     * listener-capable jQuery events on the Editor instance.
     */
    Editor.prototype._installEditorListeners = function () {
        var self = this;
        
        // FUTURE: if this list grows longer, consider making this a more generic mapping
        this._codeMirror.setOption("onChange", function () {
            $(self).triggerHandler("change");
        });
        this._codeMirror.setOption("onKeyEvent", function (instance, event) {
            $(self).triggerHandler("keyEvent", [self, event]);
            return false;   // false tells CodeMirror we didn't eat the event
        });
    };
    
    /**
     * @return {string} The editor's current contents
     * Semi-private: only Document/EditableDocumentModel should call this.
     */
    Editor.prototype._getText = function () {
        return this._codeMirror.getValue();
    };
    
    /**
     * Sets the contents of the editor. Treated as an edit: adds an undo step and dispatches a
     * change event.
     * Note: all line endings will be changed to LFs.
     * Semi-private: only Document/EditableDocumentModel should call this.
     * @param {!string} text
     */
    Editor.prototype._setText = function (text) {
        this._codeMirror.setValue(text);
    };
    
    /**
     * Sets the contents of the editor and clears the undo/redo history. Dispatches a change event.
     * Semi-private: only Document/EditableDocumentModel should call this.
     * @param {!string} text
     */
    Editor.prototype._resetText = function (text) {
        // This *will* fire a change event, but we clear the undo immediately afterward
        this._codeMirror.setValue(text);
        
        // Make sure we can't undo back to the empty state before setValue()
        this._codeMirror.clearHistory();
    };
    
    
    /**
     * Gets the current cursor position within the editor. If there is a selection, returns whichever
     * end of the range the cursor lies at.
     * @return !{line:number, ch:number}
     */
    Editor.prototype.getCursorPos = function () {
        return this._codeMirror.getCursor();
    };
    
    /**
     * Sets the cursor position within the editor. Removes any selection.
     * @param {number} line The 0 based line number.
     * @param {number} ch   The 0 based character position.
     */
    Editor.prototype.setCursorPos = function (line, ch) {
        this._codeMirror.setCursor(line, ch);
    };
    
    /**
     * Gets the current selection. Start is inclusive, end is exclusive. If there is no selection,
     * returns the current cursor position as both the start and end of the range (i.e. a selection
     * of length zero).
     * @return !{start:{line:number, ch:number}, end:{line:number, ch:number}}
     */
    Editor.prototype.getSelection = function () {
        var selStart = this._codeMirror.getCursor(true),
            selEnd = this._codeMirror.getCursor(false);
        return { start: selStart, end: selEnd };
    };
    
    /**
     * Sets the current selection. Start is inclusive, end is exclusive. Places the cursor at the
     * end of the selection range.
     * @param {!{line:number, ch:number}} start
     * @param {!{line:number, ch:number}} end
     */
    Editor.prototype.setSelection = function (start, end) {
        this._codeMirror.setSelection(start, end);
    };


    /**
     * Gets the total number of lines in the the document (includes lines not visible in the viewport)
     * @returns {!number}
     */
    Editor.prototype.lineCount = function () {
        return this._codeMirror.lineCount();
    };

    /* Hides the specified line number in the editor
     * @param {!number}
     */
    Editor.prototype.hideLine = function (lineNumber) {
        return this._codeMirror.hideLine(lineNumber);
    };

    /**
     * Gets the total height of the document in pixels (not the viewport)
     * @param {!boolean} includePadding
     * @returns {!number} height in pixels
     */
    Editor.prototype.totalHeight = function (includePadding) {
        return this._codeMirror.totalHeight(includePadding);
    };

    /**
     * Gets the scroller element from the editor.
     * @returns {!HTMLDivElement} scroller
     */
    Editor.prototype.getScrollerElement = function () {
        return this._codeMirror.getScrollerElement();
    };
    
    
    /**
     * Adds an inline widget below the given line. If any inline widget was already open for that
     * line, it is closed without warning.
     * @param {!{line:number, ch:number}} pos  Position in text to anchor the inline.
     * @param {!DOMElement} domContent  DOM node of widget UI to insert.
     * @param {number} initialHeight  Initial height to accomodate.
     * @param {function()} closeCallback  Function called when inline is closed, either automatically
     *          by CodeMirror, or by this host Editor closing, or manually via removeInlineWidget().
     * @param {Object} data  Extra data to track along with the widget. Accessible later via
     *          {@link #getInlineWidgets()}.
     * @return {number} id for this inline widget instance; unique to this Editor
     */
    Editor.prototype.addInlineWidget = function (pos, domContent, initialHeight, closeCallback, data) {
        // Now add the new widget
        var self = this;
        var inlineId = this._codeMirror.addInlineWidget(pos, domContent, initialHeight, function (id) {
            self._removeInlineWidgetInternal(id);
            
            // TODO: remove timeout once issue #454 is fixed
            setTimeout(function () {
                closeCallback();
            }, 0);
        });
        this._inlineWidgets.push({ id: inlineId, data: data, closeCallback: closeCallback });
        
        return inlineId;
    };
    
    /**
     * Removes the given inline widget.
     * @param {number} inlineId  id returned by addInlineWidget().
     */
    Editor.prototype.removeInlineWidget = function (inlineId) {
        // _removeInlineWidgetInternal will get called from the destroy callback in CodeMirror.
        this._codeMirror.removeInlineWidget(inlineId);
    };
    
    /**
     * Cleans up the given inline widget from our internal list of widgets.
     * @param {number} inlineId  id returned by addInlineWidget().
     */
    Editor.prototype._removeInlineWidgetInternal = function (inlineId) {
        var i;
        for (i = 0; i < this._inlineWidgets.length; i++) {
            if (this._inlineWidgets[i].id === inlineId) {
                this._inlineWidgets.splice(i, 1);
                break;
            }
        }
    };

    /**
     * Returns a list of all inline widgets currently open in this editor. Each entry contains the
     * inline's id, and the data parameter that was passed to addInlineWidget().
     * @return {!Array.<{id:number, data:Object}>}
     */
    Editor.prototype.getInlineWidgets = function () {
        return this._inlineWidgets;
    };

    /**
     * Sets the height of the inline widget for this editor. The inline editor is identified by id.
     * @param {!number} id
     * @param {!height} height
     * @param {boolean} ensureVisible
     */
    Editor.prototype.setInlineWidgetHeight = function (id, height, ensureVisible) {
        this._codeMirror.setInlineWidgetHeight(id, height, ensureVisible);
    };
    
    
    /** Gives focus to the editor control */
    Editor.prototype.focus = function () {
        this._codeMirror.focus();
    };
    
    /** Returns true if the editor has focus */
    Editor.prototype.hasFocus = function () {
        // The CodeMirror instance wrapper has a "CodeMirror-focused" class set when focused
        return $(this._codeMirror.getWrapperElement()).hasClass("CodeMirror-focused");
    };
    
    /**
     * Re-renders the editor UI
     */
    Editor.prototype.refresh = function () {
        this._codeMirror.refresh();
    };
    
    
    /**
     * The Document we're bound to
     * @type {!Document}
     */
    Editor.prototype.document = null;
    
    /**
     * If true, we're in the middle of syncing to/from the Document. Used to ignore spurious change
     * events caused by us (vs. change events caused by others, which we need to pay attention to).
     * @type {!boolean}
     */
    Editor.prototype._duringSync = false;
    
    /**
     * @private
     * NOTE: this is actually "semi-private": EditorManager also accesses this field... as well as
     * a few other modules. However, we should try to gradually move most code away from talking to
     * CodeMirror directly.
     * @type {!CodeMirror}
     */
    Editor.prototype._codeMirror = null;
    
    /**
     * @private
     * @type {!Array.<{id:number, data:Object}>}
     */
    Editor.prototype._inlineWidgets = null;



    // Define public API
    exports.Editor = Editor;
});

/*
 * Copyright 2011 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false, CodeMirror: false */

/**
 * EditorManager owns the UI for the editor area. This essentially mirrors the 'current document'
 * property maintained by DocumentManager's model.
 *
 * Note that there is a little bit of unusual overlap between EditorManager and DocumentManager:
 * because the Document state is actually stored in the CodeMirror editor UI, DocumentManager is
 * not a pure headless model. Each Document encapsulates an editor instance, and thus EditorManager
 * must have some knowledge about Document's internal state (we access its _editor property).
 *
 * This module does not dispatch any events.
 */
define('EditorManager',['require','exports','module','FileUtils','DocumentManager','Editor','EditorUtils','strings'],function (require, exports, module) {
    'use strict';
    
    // Load dependent modules
    var FileUtils           = require("FileUtils"),
        DocumentManager     = require("DocumentManager"),
        Editor              = require("Editor").Editor,
        EditorUtils         = require("EditorUtils"),
        Strings             = require("strings");
    
    /** @type {jQueryObject} DOM node that contains all editors (visible and hidden alike) */
    var _editorHolder = null;
    
    /** @type {Editor} */
    var _currentEditor = null;
    /** @type {Document} */
    var _currentEditorsDocument = null;
    
    /** @type {number} Used by {@link #_updateEditorSize()} */
    var _resizeTimeout = null;
    
    /**
     * Registered inline-editor widget providers. See {@link #registerInlineEditProvider()}.
     * @type {Array.<function(...)>}
     */
    var _inlineEditProviders = [];
    
    /**
     * Creates a new Editor bound to the given Document. The editor's mode is inferred based on the
     * file extension. The editor is appended to the given container as a visible child.
     * @param {!Document} doc  Document for the Editor's content
     * @param {!boolean} makeMasterEditor  If true, the Editor will set itself as the private "master"
     *          Editor for the Document. If false, the Editor will attach to the Document as a "slave."
     * @param {!jQueryObject} container  Container to add the editor to.
     * @param {!function} onInlineGesture  Handler for Ctrl+E command (open/close inline, depending
                on context)
     * @return {Editor} the newly created editor.
     */
    function _createEditorForDocument(doc, makeMasterEditor, container, onInlineGesture) {
        var mode = EditorUtils.getModeFromFileExtension(doc.file.fullPath);
        
        var extraKeys = {
            "Ctrl-E" : function (editor) {
                onInlineGesture(editor);
            },
            "Cmd-E" : function (editor) {
                onInlineGesture(editor);
            }
        };

        return new Editor(doc, makeMasterEditor, mode, container, extraKeys);
    }
    
    /** Bound to Ctrl+E on outermost editors */
    function _openInlineWidget(editor) {
        // Run through inline-editor providers until one responds
        var pos = editor.getCursorPos();
        var inlinePromise;
        var i;
        for (i = 0; i < _inlineEditProviders.length && !inlinePromise; i++) {
            var provider = _inlineEditProviders[i];
            inlinePromise = provider(editor, pos);
        }
        
        // If one of them will provide a widget, show it inline once ready
        if (inlinePromise) {
            inlinePromise.done(function (inlineContent) {
                var inlineId = editor.addInlineWidget(pos, inlineContent.content, inlineContent.height,
                                            inlineContent.onClosed, inlineContent);
                inlineContent.onAdded(inlineId);
            });
        }
    }
    
    /**
     * Removes the given widget UI from the given hostEdtior (agnostic of what the widget's content
     * is). The widget's onClosed() callback will be run as a result.
     * @param {!Editor} hostEditor
     * @param {!number} inlineId
     * @param {!boolean} moveFocus  If true, focuses hostEditor and ensures the cursor position lies
     *      near the inline's location.
     */
    function _closeInlineWidget(hostEditor, inlineId, moveFocus) {
        if (moveFocus) {
            // Place cursor back on the line just above the inline (the line from which it was opened)
            // If cursor's already on that line, leave it be to preserve column position
            var widgetLine = hostEditor._codeMirror.getInlineWidgetInfo(inlineId).line;
            var cursorLine = hostEditor.getCursorPos().line;
            if (cursorLine !== widgetLine) {
                hostEditor.setCursorPos({ line: widgetLine, pos: 0 });
            }
            
            hostEditor.focus();
        }
        
        hostEditor.removeInlineWidget(inlineId);
        
    }
    
    function registerInlineEditProvider(provider) {
        _inlineEditProviders.push(provider);
    }
    
    /**
     * @private
     * Given a host editor, return a list of all its open inline Editors. (Ignoring any other
     * inline widgets that might be open).
     * @param {!Editor} hostEditor
     * @return {Array.<Editor>}
     */
    function _getInlineEditors(hostEditor) {
        var inlineEditors = [];
        hostEditor.getInlineWidgets().forEach(function (widget) {
            if (widget.data.editor) {
                inlineEditors.push(widget.data.editor);
            }
        });
        return inlineEditors;
    }
    
    /**
     * @private
     * Given a host editor and its inline editors, find the widest gutter and make all the others match
     * @param {!Editor} hostEditor Host editor containing all the inline editors to sync
     */
    function _syncGutterWidths(hostEditor) {
        var editors = _getInlineEditors(hostEditor);
        // add the host to the list and go through them all
        editors.push(hostEditor);
        
        var maxWidth = 0;
        editors.forEach(function (editor) {
            var gutter = $(editor._codeMirror.getGutterElement());
            gutter.css("min-width", "");
            var curWidth = gutter.width();
            if (curWidth > maxWidth) {
                maxWidth = curWidth;
            }
        });
        
        if (editors.length === 1) {
            //There's only the host, just bail
            editors[0]._codeMirror.setOption("gutter", true);
            return;
        }
        
        maxWidth = maxWidth + "px";
        editors.forEach(function (editor) {
            $(editor._codeMirror.getGutterElement()).css("min-width", maxWidth);
            editor._codeMirror.setOption("gutter", true);
        });
    }
    
    
    /**
     * @private
     * Creates a new "full-size" (not inline) Editor for the given Document, and sets it as the
     * Document's master backing editor. The editor is not yet visible; to show it, use
     * DocumentManager.setCurrentDocument().
     * Semi-private: should not be called outside this module other than by Editor.
     * @param {!Document} document  Document whose main/full Editor to create
     */
    function _createFullEditorForDocument(document) {
        // Create editor; make it initially invisible
        var container = _editorHolder.get(0);
        var editor = _createEditorForDocument(document, true, container, _openInlineWidget);
        $(editor._codeMirror.getWrapperElement()).css("display", "none");
    }
    
    /** Returns the visible full-size Editor corresponding to DocumentManager.getCurrentDocument() */
    function getCurrentFullEditor() {
        // This *should* always be equivalent to DocumentManager.getCurrentDocument()._masterEditor
        return _currentEditor;
    }

    
    /**
     * Creates a new inline Editor instance for the given Document. The editor's mode is inferred
     * based on the file extension. The editor is not yet visible or attached to a host editor.
     * @param {!Editor} hostEditor  Outer Editor instance that inline editor will sit within.
     * @param {!Document} doc  Document for the Editor's content
     * @param {?{startLine:Number, endLine:Number}} range  If specified, all lines outside the given
     *      range are hidden from the editor. Range is inclusive. Line numbers start at 0.
     *
     * @return {{content:DOMElement, editor:Editor, height:Number, onAdded:function(inlineId:Number), onClosed:function()}}
     * FUTURE: we should really make the bag that _openInlineWidget() expects into an interface that's
     * also understood by Editor.addInlineWidget()... since it now contains methods & such.
     */
    function createInlineEditorForDocument(hostEditor, doc, range) {
        // Container to hold editor & render its stylized frame
        var inlineContent = document.createElement('div');
        $(inlineContent).addClass("inlineCodeEditor");
        
        var myInlineId;   // (id is set when afterAdded() runs)
        
        // Used to manually trigger closing this inline
        function closeThisInline(inlineEditor) {
            var shouldMoveFocus = inlineEditor.hasFocus();
            _closeInlineWidget(hostEditor, myInlineId, shouldMoveFocus);
            // _closeInlineWidget() causes afterClosed() to get run
        }
        
        // Create the Editor
        var inlineEditor = _createEditorForDocument(doc, false, inlineContent, closeThisInline);
        
        // Update the inline editor's height when the number of lines change
        var prevHeight;
        function sizeInlineEditorToContents() {
            var height = inlineEditor.totalHeight(true);
            if (height !== prevHeight) {
                prevHeight = height;
                hostEditor.setInlineWidgetHeight(myInlineId, height, true);
                $(inlineEditor.getScrollerElement()).height(height);
                inlineEditor.refresh();
            }
        }
        
        // When text is edited, auto-resize UI and sync changes to a backing full-size editor
        $(inlineEditor).on("change", function () {
            // Size editor to current contents
            sizeInlineEditorToContents();
        });
        
        // If anyone else touches the Document, close this editor since it has fallen out of date
        $(inlineEditor).on("lostSync", function () {
            closeThisInline(inlineEditor);
        });
        
        // Some tasks have to wait until we've been parented into the outer editor
        function afterAdded(inlineId) {
            myInlineId = inlineId;
            
            // Hide all lines other than those we want to show. We do this rather than trimming the
            // text itself so that the editor still shows accurate line numbers.
            var didHideLines  = false;
            if (range) {
                inlineEditor._codeMirror.operation(function () {
                    var i;
                    for (i = 0; i < range.startLine; i++) {
                        didHideLines  = true;
                        inlineEditor.hideLine(i);
                    }
                    var lineCount = inlineEditor.lineCount();
                    for (i = range.endLine + 1; i < lineCount; i++) {
                        didHideLines  = true;
                        inlineEditor.hideLine(i);
                    }
                });
                inlineEditor.setCursorPos(range.startLine, 0);
                _syncGutterWidths(hostEditor);
            }
            
            // If we haven't hidden any lines (which would have caused an update already), 
            // force the editor to update its display so we measure the correct height below
            // when sizeInlineEditorToContents() calls totalHeight().
            if (!didHideLines) {
                inlineEditor.refresh();
            }
            
            // Set initial size
            sizeInlineEditorToContents();
            
            inlineEditor.focus();
        }
        
        // Called any time inline was closed, whether manually (via closeThisInline()) or automatically
        function afterClosed() {
            //console.log("Inline editor is being destroyed!");
            _syncGutterWidths(hostEditor);
            inlineEditor.destroy(); //release ref on Document
        }
        
        return { content: inlineContent, editor: inlineEditor, height: 0, onAdded: afterAdded, onClosed: afterClosed };
    }
    
    
    /**
     * Disposes the given Document's full-size editor if the doc is no longer "open" from the user's
     * standpoint - not in the working set and not currentDocument).
     * 
     * Destroying the full-size editor releases ONE ref to the Document; if inline editors or other
     * UI elements are still referencing the Document it will still be 'open' (kept alive) from
     * DocumentManager's standpoint. However, destroying the full-size editor does remove the backing
     * "master" editor from the Document, rendering it immutable until either inline-editor edits or
     * currentDocument change triggers _createFullEditorForDocument() full-size editor again.
     *
     * @param {!Document} document Document whose "master" editor we may destroy
     */
    function _destroyEditorIfUnneeded(document) {
        var editor = document._masterEditor;

        if (!editor) {
            return;
        }
        
        // If outgoing editor is no longer needed, dispose it
        if (DocumentManager.getCurrentDocument() !== document && DocumentManager.findInWorkingSet(document.file.fullPath) === -1) {
            // Destroy the editor widget (which un-refs the Document and reverts it to read-only mode)
            editor.destroy();
            
            // Our callers should really ensure this, but just for safety...
            if (_currentEditor === editor) {
                _currentEditorsDocument = null;
                _currentEditor = null;
            }
        }
    }

    /** Focus the currently visible full-size editor. If no editor visible, does nothing. */
    function focusEditor() {
        if (_currentEditor) {
            _currentEditor.focus();
        }
    }
    
    
    /** 
     * Resize the editor. This should only be called if the contents of the editor holder are changed
     * or if the height of the editor holder changes (except for overall window resizes, which are
     * already taken care of automatically).
     * @see #_updateEditorSize()
     */
    function resizeEditor() {
        if (_currentEditor) {
            $(_currentEditor.getScrollerElement()).height(_editorHolder.height());
            _currentEditor.refresh();
        }
    }
    
    /**
     * NJ's editor-resizing fix. Whenever the window resizes, we immediately adjust the editor's
     * height.
     * @see #resizeEditor()
     */
    function _updateEditorSize() {
        // The editor itself will call refresh() when it gets the window resize event.
        if (_currentEditor) {
            $(_currentEditor.getScrollerElement()).height(_editorHolder.height());
        }
    }
    
    
    /**
     * @private
     */
    function _doShow(document) {
        // Show new editor
        _currentEditorsDocument = document;
        _currentEditor = document._masterEditor;
        
        $(_currentEditor._codeMirror.getWrapperElement()).css("display", "");
        
        // Window may have been resized since last time editor was visible, so kick it now
        resizeEditor();
    }

    /**
     * Make the given document's editor visible in the UI, hiding whatever was
     * visible before. Creates a new editor if none is assigned.
     * @param {!Document} document
     */
    function _showEditor(document) {
        // Hide whatever was visible before
        if (!_currentEditor) {
            $("#notEditor").css("display", "none");
        } else {
            $(_currentEditor._codeMirror.getWrapperElement()).css("display", "none");
            _destroyEditorIfUnneeded(_currentEditorsDocument);
        }
        
        // Ensure a main editor exists for this document to show in the UI
        if (!document._masterEditor) {
            // Editor doesn't exist: populate a new Editor with the text
            _createFullEditorForDocument(document);
        }
        
        _doShow(document);
    }
    

    /** Hide the currently visible editor and show a placeholder UI in its place */
    function _showNoEditor() {
        if (_currentEditor) {
            $(_currentEditor._codeMirror.getWrapperElement()).css("display", "none");
            _destroyEditorIfUnneeded(_currentEditorsDocument);
            
            _currentEditorsDocument = null;
            _currentEditor = null;
            
            $("#notEditor").css("display", "");
        }
    }

    /** Handles changes to DocumentManager.getCurrentDocument() */
    function _onCurrentDocumentChange() {
        var doc = DocumentManager.getCurrentDocument();
        
        // Update the UI to show the right editor (or nothing), and also dispose old editor if no
        // longer needed.
        if (doc) {
            _showEditor(doc);
        } else {
            _showNoEditor();
        }
    }
    
    /** Handles removals from DocumentManager's working set list */
    function _onWorkingSetRemove(event, removedDoc) {
        // There's one case where an editor should be disposed even though the current document
        // didn't change: removing a document from the working set (via the "X" button). (This may
        // also cover the case where the document WAS current, if the editor-swap happens before the
        // removal from the working set.
        _destroyEditorIfUnneeded(removedDoc);
    }
    // Note: there are several paths that can lead to an editor getting destroyed
    //  - file was in working set, but not open; then closed (via working set "X" button)
    //      --> handled by _onWorkingSetRemove()
    //  - file was open, but not in working set; then navigated away from
    //      --> handled by _onCurrentDocumentChange()
    //  - file was open, but not in working set; then closed (via File > Close) (and thus implicitly
    //    navigated away from)
    //      --> handled by _onCurrentDocumentChange()
    //  - file was open AND in working set; then closed (via File > Close OR working set "X" button)
    //    (and thus implicitly navigated away from)
    //      --> handled by _onWorkingSetRemove() currently, but could be _onCurrentDocumentChange()
    //      just as easily (depends on the order of events coming from DocumentManager)
    
    /**
     * Designates the DOM node that will contain the currently active editor instance. EditorManager
     * will own the content of this DOM node.
     * @param {!jQueryObject} holder
     */
    function setEditorHolder(holder) {
        if (_currentEditor) {
            throw new Error("Cannot change editor area after an editor has already been created!");
        }
        
        _editorHolder = holder;
    }
    
    /**
     * Returns the currently focused editor instance.
     * @returns {Editor}
     */
    function getFocusedEditor() {
        if (_currentEditor) {
            var focusedInline;
            
            // See if any inlines have focus
            _currentEditor.getInlineWidgets().forEach(function (widget) {
                if (widget.data.editor && widget.data.editor.hasFocus()) {
                    focusedInline = widget.data.editor;
                }
            });
            
            if (focusedInline) {
                return focusedInline;
            }
            
            if (_currentEditor.hasFocus()) {
                return _currentEditor;
            }
        }
        
        return null;
    }
    
    
    // Initialize: register listeners
    $(DocumentManager).on("currentDocumentChange", _onCurrentDocumentChange);
    $(DocumentManager).on("workingSetRemove", _onWorkingSetRemove);
    // Add this as a capture handler so we're guaranteed to run it before the editor does its own
    // refresh on resize.
    window.addEventListener("resize", _updateEditorSize, true);
    
    // Define public API
    exports._openInlineWidget = _openInlineWidget;
    exports.setEditorHolder = setEditorHolder;
    exports.getCurrentFullEditor = getCurrentFullEditor;
    exports.createInlineEditorForDocument = createInlineEditorForDocument;
    exports._createFullEditorForDocument = _createFullEditorForDocument;
    exports.focusEditor = focusEditor;
    exports.getFocusedEditor = getFocusedEditor;
    exports.resizeEditor = resizeEditor;
    exports.registerInlineEditProvider = registerInlineEditProvider;
});

/*
 * Copyright 2011 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false */

/**
 * DocumentManager maintains a list of currently 'open' Documents. It also owns the list of files in
 * the working set, and the notion of which Document is currently shown in the main editor UI area.
 * 
 * Document is the model for a file's contents; it dispatches events whenever those contents change.
 * To transiently inspect a file's content, simply get a Document and call getText() on it. However,
 * to be notified of Document changes or to modify a Document, you MUST call addRef() to ensure the
 * Document instance 'stays alive' and is shared by all other who read/modify that file. ('Open'
 * Documents are all Documents that are 'kept alive', i.e. have ref count > 0).
 *
 * To get a Document, call getDocumentForPath(); never new up a Document yourself.
 * 
 * Secretly, a Document may use an Editor instance to act as the model for its internal state. (This
 * is unavoidable because CodeMirror does not separate its model from its UI). Documents are not
 * modifiable until they have a backing 'master Editor'. Creation of the backing Editor is owned by
 * EditorManager. A Document only gets a backing Editor if it becomes the currentDocument, or if edits
 * occur in any Editor (inline or full-sized) bound to the Document; there is currently no other way
 * to ensure a Document is modifiable.
 *
 * A non-modifiable Document may still dispatch change notifications, if the Document was changed
 * externally on disk.
 *
 * Aside from the text content, Document tracks a few pieces of metadata - notably, whether there are
 * any unsaved changes.
 *
 * This module dispatches several events:
 *    - dirtyFlagChange -- When any Document's isDirty flag changes. The 2nd arg to the listener is the
 *      Document whose flag changed.
 *    - documentSaved -- When a Document's changes have been saved. The 2nd arg to the listener is the 
 *      Document that has been saved.
 *    - currentDocumentChange -- When the value of getCurrentDocument() changes.
 *    - workingSetAdd -- When a Document is added to the working set (see getWorkingSet()). The 2nd arg
 *      to the listener is the added Document.
 *    - workingSetRemove -- When a Document is removed from the working set (see getWorkingSet()). The
 *      2nd arg to the listener is the removed Document.
 *
 * These are jQuery events, so to listen for them you do something like this:
 *    $(DocumentManager).on("eventname", handler);
 */
define('DocumentManager',['require','exports','module','NativeFileSystem','ProjectManager','EditorManager','PreferencesManager','FileUtils','CommandManager','Async','Editor','Commands'],function (require, exports, module) {
    'use strict';
    
    var NativeFileSystem    = require("NativeFileSystem").NativeFileSystem,
        ProjectManager      = require("ProjectManager"),
        EditorManager       = require("EditorManager"),
        PreferencesManager  = require("PreferencesManager"),
        FileUtils           = require("FileUtils"),
        CommandManager      = require("CommandManager"),
        Async               = require("Async"),
        Editor              = require("Editor").Editor,
        Commands            = require("Commands");

    /**
     * Unique PreferencesManager clientID
     */
    var PREFERENCES_CLIENT_ID = "com.adobe.brackets.DocumentManager";
    
    /**
     * @private
     * @see DocumentManager.getCurrentDocument()
     */
    var _currentDocument = null;
    
    /**
     * Returns the Document that is currently open in the editor UI. May be null.
     * When this changes, DocumentManager dispatches a "currentDocumentChange" event. The current
     * document always has a backing Editor (Document._masterEditor != null) and is thus modifiable.
     * @return {?Document}
     */
    function getCurrentDocument() {
        return _currentDocument;
    }
    
    /**
     * @private
     * @see DocumentManager.getWorkingSet()
     */
    var _workingSet = [];
    
    /**
     * All documents with refCount > 0. Maps Document.file.fullPath -> Document.
     * @private
     * @type {Object.<string, Document>}
     */
    var _openDocuments = {};
    
    /**
     * Returns an ordered list of items in the working set. May be 0-length, but never null.
     *
     * When a Document is added this list, DocumentManager dispatches a "workingSetAdd" event.
     * When a Document is removed from list, DocumentManager dispatches a "workingSetRemove" event.
     * To listen for ALL changes to this list, you must listen for both events.
     *
     * Which items belong in the working set is managed entirely by DocumentManager. Callers cannot
     * (yet) change this collection on their own.
     *
     * @return {Array.<Document>}
     */
    function getWorkingSet() {
        return _workingSet;
        // TODO: (issue #297) return a clone to prevent meddling?
    }

    /** 
      * Returns the index of the file matching fullPath in the working set. 
      * Returns -1 if not found.
      * @param {!string} fullPath
      * @returns {number} index
     */
    function findInWorkingSet(fullPath) {
        var ret = -1;
        var found = _workingSet.some(function findByPath(ele, i, arr) {
                ret = i;
                return ele.file.fullPath === fullPath;
            });
            
        return (found ? ret : -1);
    }

    /**
     * Returns all Documents that are 'open' in the UI somewhere (for now, this means open in an
     * inline editor and/or a full-size editor). Only these Documents can be modified, and only
     * these Documents are synced with external changes on disk.
     * @return {Array.<Document>}
     */
    function getAllOpenDocuments() {
        var result = [];
        var path;
        for (path in _openDocuments) {
            if (_openDocuments.hasOwnProperty(path)) {
                result.push(_openDocuments[path]);
            }
        }
        return result;
    }
    
    
    /**
     * Adds the given document to the end of the working set list, if it is not already in the list.
     * Does not change which document is currently open in the editor.
     * @param {!Document} document
     */
    function addToWorkingSet(document) {
        // If doc is already in working set, don't add it again
        if (findInWorkingSet(document.file.fullPath) !== -1) {
            return;
        }
        
        // Add
        _workingSet.push(document);
        
        // Dispatch event
        $(exports).triggerHandler("workingSetAdd", document);
    }
    
    /**
     * Removes the given document from the working set list, if it was in the list. Does not change
     * the editor even if this document is the one currently open;.
     * @param {!Document} document
     */
    function _removeFromWorkingSet(document) {
        // If doc isn't in working set, do nothing
        var index = findInWorkingSet(document.file.fullPath);
        if (index === -1) {
            return;
        }
        
        // Remove
        _workingSet.splice(index, 1);
        
        // Dispatch event
        $(exports).triggerHandler("workingSetRemove", document);
    }

    
    /**
     * Changes currentDocument to the given Document, firing currentDocumentChange, which in turn
     * causes this Document's main editor UI to be shown in the editor pane, updates the selection
     * in the file tree / working set UI, etc. This call may also add the item to the working set.
     * 
     * @param {!Document} document  The Document to make current. May or may not already be in the
     *      working set.
     */
    function setCurrentDocument(document) {
        
        // If this doc is already current, do nothing
        if (_currentDocument === document) {
            return;
        }
        
        // If file not within project tree, add it to working set right now (don't wait for it to
        // become dirty)
        if (!ProjectManager.isWithinProject(document.file.fullPath)) {
            addToWorkingSet(document);
        }
        
        // Make it the current document
        _currentDocument = document;
        $(exports).triggerHandler("currentDocumentChange");
        // (this event triggers EditorManager to actually switch editors in the UI)
    }
    
    /** Changes currentDocument to null, causing no full Editor to be shown in the UI */
    function _clearCurrentDocument() {
        // If editor already blank, do nothing
        if (!_currentDocument) {
            return;
        }
        
        // Change model & dispatch event
        _currentDocument = null;
        $(exports).triggerHandler("currentDocumentChange");
        // (this event triggers EditorManager to actually clear the editor UI)
    }
    
    /**
     * Closes the given document (which may or may not be the current document in the editor UI, and
     * may or may not be in the working set). Discards any unsaved changes if isDirty - it is
     * expected that the UI has already confirmed with the user before calling us.
     *
     * This will change currentDocument if this document was current one (if possible; in some cases,
     * the editor may be left blank instead). This will also remove the doc from the working set if
     * it was in the set.
     *
     * TODO: disentangle the notion of closing the main editor vs. totally destroying a Document (e.g.
     * because it has been deleted on disk). The latter can happen even when there's no main editor,
     * and not in the working set.
     *
     * @param {!Document} document
     */
    function closeDocument(document) {
        // If this was the current document shown in the editor UI, we're going to switch to a
        // different document (or none if working set has no other options)
        if (_currentDocument === document) {
            var wsIndex = findInWorkingSet(document.file.fullPath);
            
            // Decide which doc to show in editor after this one
            var nextDocument;
            if (wsIndex === -1) {
                // If doc wasn't in working set, use bottommost working set item
                if (_workingSet.length > 0) {
                    nextDocument = _workingSet[_workingSet.length  - 1];
                }
                // else: leave nextDocument null; editor area will be blank
            } else {
                // If doc was in working set, use item next to it (below if possible)
                if (wsIndex < _workingSet.length - 1) {
                    nextDocument = _workingSet[wsIndex + 1];
                } else if (wsIndex > 0) {
                    nextDocument = _workingSet[wsIndex - 1];
                }
                // else: leave nextDocument null; editor area will be blank
            }
            
            // Switch editor to next document (or blank it out)
            if (nextDocument) {
                setCurrentDocument(nextDocument);
            } else {
                _clearCurrentDocument();
            }
        }
        
        // (Now we're guaranteed that the current document is not the one we're closing)
        console.assert(_currentDocument !== document);
        
        // Remove closed doc from working set, if it was in there
        // This happens regardless of whether the document being closed was the current one or not
        _removeFromWorkingSet(document);
        
        // Note: EditorManager will dispose the closed document's now-unneeded editor either in
        // response to the editor-swap call above, or the _removeFromWorkingSet() call, depending on
        // circumstances. See notes in EditorManager for more.
    }

    /**
     * Equivalent to calling closeDocument() for all Documents. Same caveat: this discards any
     * unsaved changes, so the UI should confirm with the user before calling this.
     */
    function closeAll() {
        var allDocs = getAllOpenDocuments();
        
        allDocs.forEach(closeDocument);
    }
    
    
    /**
     * @constructor
     * Model for the contents of a single file and its current modification state.
     * See DocumentManager documentation for important usage notes.
     *
     * Document dispatches one event:
     *   change -- When the value of getText() changes for any reason (including edits, undo/redo,
     *      or syncing from external changes). If you listen for this event, you MUST also
     *      addRef() the document (and releaseRef() it whenever you stop listening).
     *
     * @param {!FileEntry} file  Need not lie within the project.
     * @param {!Date} initialTimestamp  File's timestamp when we read it off disk.
     * @param {!string} rawText  Text content of the file.
     */
    function Document(file, initialTimestamp, rawText) {
        if (!(this instanceof Document)) {  // error if constructor called without 'new'
            throw new Error("Document constructor must be called with 'new'");
        }
        if (_openDocuments[file.fullPath]) {
            throw new Error("Creating a document when one already exists, for: " + file);
        }
        
        this.file = file;
        this.refreshText(rawText, initialTimestamp);
    }
    
    /**
     * Number of clients who want this Document to stay alive. The Document is listed in
     * DocumentManager._openDocuments whenever refCount > 0.
     */
    Document.prototype._refCount = 0;
    
    /**
     * The FileEntry for this document. Need not lie within the project.
     * @type {!FileEntry}
     */
    Document.prototype.file = null;
    
    /**
     * Whether this document has unsaved changes or not.
     * When this changes on any Document, DocumentManager dispatches a "dirtyFlagChange" event.
     * @type {boolean}
     */
    Document.prototype.isDirty = false;
    
    /**
     * What we expect the file's timestamp to be on disk. If the timestamp differs from this, then
     * it means the file was modified by an app other than Brackets.
     * @type {?Date}
     */
    Document.prototype.diskTimestamp = null;
    
    /**
     * The text contents of the file, or null if our backing model is _masterEditor.
     * @type {?string}
     */
    Document.prototype._text = null;
    
    /**
     * Editor object representing the full-size editor UI for this document. May be null if Document
     * has not yet been modified or been the currentDocument; in that case, our backing model is the
     * string _text.
     * @type {?Editor}
     */
    Document.prototype._masterEditor = null;
    
    /**
     * The content's line-endings style. If a Document is created on empty text, or text with
     * inconsistent line endings, defaults to the current platform's standard endings.
     * @type {FileUtils.LINE_ENDINGS_CRLF|FileUtils.LINE_ENDINGS_LF}
     */
    Document.prototype._lineEndings = null;

    /** Add a ref to keep this Document alive */
    Document.prototype.addRef = function () {
        //console.log("+++REF+++ "+this);
        
        if (this._refCount === 0) {
            //console.log("+++ adding to open list");
            if (_openDocuments[this.file.fullPath]) {
                throw new Error("Document for this path already in _openDocuments!");
            }
            _openDocuments[this.file.fullPath] = this;
        }
        this._refCount++;
    };
    /** Remove a ref that was keeping this Document alive */
    Document.prototype.releaseRef = function () {
        //console.log("---REF--- "+this);
        
        this._refCount--;
        if (this._refCount < 0) {
            throw new Error("Document ref count has fallen below zero!");
        }
        if (this._refCount === 0) {
            //console.log("--- removing from open list");
            if (!_openDocuments[this.file.fullPath]) {
                throw new Error("Document with references was not in _openDocuments!");
            }
            delete _openDocuments[this.file.fullPath];
        }
    };
    
    /**
     * Attach a backing Editor to the Document, enabling setText() to be called. Assumes Editor has
     * already been initialized with the value of getText(). ONLY Editor should call this (and only
     * when EditorManager has told it to act as the master editor).
     */
    Document.prototype._makeEditable = function (masterEditor) {
        if (this._masterEditor) {
            throw new Error("Document is already editable");
        } else {
            this._text = null;
            this._masterEditor = masterEditor;
            $(masterEditor).on("change", this._handleEditorChange.bind(this));
        }
    };
    
    /**
     * Detach the backing Editor from the Document, disallowing setText(). The text content is
     * stored back onto _text so other Document clients continue to have read-only access. ONLY
     * Editor.destroy() should call this.
     */
    Document.prototype._makeNonEditable = function () {
        if (!this._masterEditor) {
            throw new Error("Document is already non-editable");
        } else {
            this._text = this.getText();
            this._masterEditor = null;
            
            // FUTURE: If main editor was closed without saving changes, we should revert _text to
            // what's on disk. But since we currently close all secondary editors when anyone else
            // touches the Document content, there's no point in doing that yet. Just change the text
            // to a dummy value to trigger that closing. Ultimately, the nicer "revert" behavior
            // should probably live in FileCommandHandlers.handleFileClose().
            if (this.isDirty) {
                this.refreshText("");
            }
        }
    };
    
    /**
     * @return {string} The document's current contents; may not be saved to disk yet. Whenever this
     * value changes, the Document dispatches a "change" event.
     */
    Document.prototype.getText = function () {
        if (this._masterEditor) {
            // CodeMirror.getValue() always returns text with LF line endings; fix up to match line
            // endings preferred by the document, if necessary
            var codeMirrorText = this._masterEditor._getText();
            if (this._lineEndings === FileUtils.LINE_ENDINGS_LF) {
                return codeMirrorText;
            } else {
                return codeMirrorText.replace(/\n/g, "\r\n");
            }
        } else {
            return this._text;
        }
    };
    
    /**
     * Sets the contents of the document. Treated as an edit. Line endings will be rewritten to
     * match the document's current line-ending style. CANNOT be called unless the Document has a
     * backing editor. Only Editor can ensure that is true; from anywhere else, it's unsafe to call
     * setText() unless this is the currentDocument.
     * @param {!string} text The text to replace the contents of the document with.
     */
    Document.prototype.setText = function (text) {
        if (!this._masterEditor) {
            throw new Error("Cannot mutate a Document before it has been assigned a master Editor");
        }
        this._masterEditor._setText(text);
        // _handleEditorChange() triggers "change" event
    };
    
    
    /**
     * Sets the contents of the document. Treated as reloading the document from disk: the document
     * will be marked clean with a new timestamp, the undo/redo history is cleared, and we re-check
     * the text's line-ending style. CAN be called even if there is no backing editor.
     * @param {!string} text The text to replace the contents of the document with.
     * @param {!Date} newTimestamp Timestamp of file at the time we read its new contents from disk.
     */
    Document.prototype.refreshText = function (text, newTimestamp) {
        if (this._masterEditor) {
            this._masterEditor._resetText(text);
            // _handleEditorChange() triggers "change" event for us
        } else {
            this._text = text;
            $(this).triggerHandler("change", [this]);
        }
        this._markClean();
        this.diskTimestamp = newTimestamp;
        
        // Sniff line-ending style
        this._lineEndings = FileUtils.sniffLineEndings(text);
        if (!this._lineEndings) {
            this._lineEndings = FileUtils.getPlatformLineEndings();
        }
    };
    
    /**
     * Handles changes from the master backing Editor. Changes are triggered either by direct edits
     * to that Editor's UI, OR by our setText()/refreshText() methods.
     * @private
     */
    Document.prototype._handleEditorChange = function () {
        // On any change, mark the file dirty. In the future, we should make it so that if you
        // undo back to the last saved state, we mark the file clean.
        var wasDirty = this.isDirty;
        this.isDirty = true;

        // If file just became dirty, notify listeners, and add it to working set (if not already there)
        if (!wasDirty) {
            $(exports).triggerHandler("dirtyFlagChange", [this]);
            addToWorkingSet(this);
        }
        
        // Notify that Document's text has changed
        $(this).triggerHandler("change", [this]);
    };
    
    /**
     * @private
     */
    Document.prototype._markClean = function () {
        this.isDirty = false;
        $(exports).triggerHandler("dirtyFlagChange", this);
    };
    
    /** 
     * Called when the document is saved (which currently happens in FileCommandHandlers). Marks the
     * document not dirty and notifies listeners of the save.
     */
    Document.prototype.notifySaved = function () {
        if (!this._masterEditor) {
            console.log("### Warning: saving a Document that is not modifiable!");
        }
        
        this._markClean();
        $(exports).triggerHandler("documentSaved", this);
        
        // TODO: (issue #295) fetching timestamp async creates race conditions (albeit unlikely ones)
        var thisDoc = this;
        this.file.getMetadata(
            function (metadata) {
                thisDoc.diskTimestamp = metadata.modificationTime;
            },
            function (error) {
                console.log("Error updating timestamp after saving file: " + thisDoc.file.fullPath);
            }
        );
    };
    
    /* (pretty toString(), to aid debugging) */
    Document.prototype.toString = function () {
        var dirtyInfo = (this.isDirty ? " (dirty!)" : " (clean)");
        var editorInfo = (this._masterEditor ? " Editable" : " Non-editable");
        var refInfo = " refs:" + this._refCount;
        return "[Document " + this.file.fullPath + dirtyInfo + editorInfo + refInfo + "]";
    };
    
    
    /**
     * Gets an existing open Document for the given file, or creates a new one if the Document is
     * not currently open ('open' means referenced by the UI somewhere). Always use this method to
     * get Documents; do not call the Document constructor directly.
     *
     * If you are going to hang onto the Document for more than just the duration of a command - e.g.
     * if you are going to display its contents in a piece of UI - then you must addRef() the Document
     * and listen for changes on it. (Note: opening the Document in an Editor automatically manages
     * refs and listeners for that Editor UI).
     *
     * @param {!string} fullPath
     * @return {Deferred} A Deferred object that will be resolved with the Document, or rejected
     *      with a FileError if the file is not yet open and can't be read from disk.
     */
    function getDocumentForPath(fullPath) {
        var result = new $.Deferred();
        var doc = _openDocuments[fullPath];
        if (doc) {
            result.resolve(doc);
        } else {
            var fileEntry = new NativeFileSystem.FileEntry(fullPath);
            FileUtils.readAsText(fileEntry)
                .done(function (rawText, readTimestamp) {
                    doc = new Document(fileEntry, readTimestamp, rawText);
                    result.resolve(doc);
                })
                .fail(function (fileError) {
                    result.reject(fileError);
                });
        }
        return result;
    }
    
    
    /**
     * @private
     * Preferences callback. Saves the document file paths for the working set.
     */
    function _savePreferences(storage) {
        // save the working set file paths
        var files       = [],
            isActive    = false,
            workingSet  = getWorkingSet(),
            currentDoc  = getCurrentDocument();

        workingSet.forEach(function (value, index) {
            // flag the currently active editor
            isActive = (value === currentDoc);

            files.push({
                file: value.file.fullPath,
                active: isActive
            });
        });

        storage.files = files;
    }

    /**
     * @private
     * Initializes the working set.
     */
    function _init() {
        var prefs       = PreferencesManager.getPreferences(PREFERENCES_CLIENT_ID);

        if (!prefs.files) {
            return;
        }

        var projectRoot = ProjectManager.getProjectRoot(),
            filesToOpen = [],
            activeDoc;

        // in parallel, load working set files
        // TODO: (issue #298) delay this check until it becomes the current document?
        function loadOneFile(value, index) {
            var oneFileResult = new $.Deferred();
            
            // load files into Documents; silently ignore if file no longer exists
            getDocumentForPath(value.file)
                .done(function (doc) {
                    filesToOpen[index] = doc;
                    if (value.active) {
                        activeDoc = doc;
                    }
                    oneFileResult.resolve();
                })
                .fail(function (error) {
                    filesToOpen[index] = null;
                    oneFileResult.resolve();
                });
            
            return oneFileResult;
        }

        var result = Async.doInParallel(prefs.files, loadOneFile, false);

        result.done(function () {
            // Add all existing files to the working set
            // FIXME: for now, we're creating editors for them too at startup; otherwise nothing
            // keeps the Documents we just created alive, and thus the working set would contain
            // Documents that are not actually kept up to date
            // Possible fixes:
            //  1. be ok with working set Docs being "stale"; refresh them before loading if they don't have a backing editor
            //  2. make adding to the working set addRef() the Doc (NJ didn't like this - EditorManager should own Doc rooting)
            //  3. the set of Docs we keep in syn is the union openDocs (all Doccs with > 0 refCount) PLUS anything else in the working set
            //     (which is sort of a loophole that's otherwise equivalent to option 2)
            //---> make the working set a list of filenames instead of Docs; complicates live for WorkingSetView though, since
            //     it also cares if they're dirty and you can only find that out from a Doc
            filesToOpen.forEach(function (doc, index) {
                if (doc) {
                    addToWorkingSet(doc);
                    setCurrentDocument(doc);    // force creation of backing Editor to keep doc alive
                }
            });

            // Initialize the active editor
            if (!activeDoc && _workingSet.length > 0) {
                activeDoc = _workingSet[0];
            }

            if (activeDoc) {
                // CommandManager.execute(Commands.FILE_OPEN, { fullPath: activeDoc.file.fullPath });
                setCurrentDocument(activeDoc);
            }
        });
    }


    // Define public API
    exports.Document = Document;
    exports.getCurrentDocument = getCurrentDocument;
    exports.getDocumentForPath = getDocumentForPath;
    exports.getWorkingSet = getWorkingSet;
    exports.findInWorkingSet = findInWorkingSet;
    exports.getAllOpenDocuments = getAllOpenDocuments;
    exports.setCurrentDocument = setCurrentDocument;
    exports.addToWorkingSet = addToWorkingSet;
    exports.closeDocument = closeDocument;
    exports.closeAll = closeAll;

    // Register preferences callback
    PreferencesManager.addPreferencesClient(PREFERENCES_CLIENT_ID, _savePreferences, this);

    // Initialize after ProjectManager is loaded
    $(ProjectManager).on("initializeComplete", function (event, projectRoot) {
        _init();
    });
});

/*
 * Copyright 2012 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false */

/**
 * Responsible for coordinating file seletion between views by permitting only one view
 * to show the current file selection at a time. Currently, only WorkingSetView and 
 * ProjectManager can show file selection. In general the WorkingSetView takes higher
 * priority until the user selects a file in the ProjectManager.
 *
 * Current file selection rules in views:
 * - select a file in WorkingSetView > select in WorkingSetView
 * - add a file to the WorkingSetView > select in WorkingSetView
 * - select a file in ProjectManager > select in ProjectManager
 * - open a file from places other than the WorkingSetView or ProjectManager > 
 *       select file in WorkignSetView if its in the working set, otherwise select in ProjectManager
 */

define('FileViewController',['require','exports','module','DocumentManager','CommandManager','EditorManager','Commands'],function (require, exports, module) {
    'use strict';

    // Load dependent modules
    var DocumentManager     = require("DocumentManager"),
        CommandManager      = require("CommandManager"),
        EditorManager       = require("EditorManager"),
        Commands            = require("Commands");

    /** 
     * Tracks whether a "currentDocumentChange" notification occured due to a call to 
     * openAndSelectDocument.
     * @see FileviewController.openAndSelectDocument
     * @private 
     */
    var _curDocChangedDueToMe = false;
    var WORKING_SET_VIEW = "WorkingSetView";
    var PROJECT_MANAGER = "ProjectManager";

    /**
     * @private
     * @see FileViewController.getFileSelectionFocus()
     */
    var _fileSelectionFocus = PROJECT_MANAGER;
    
    /** 
     * Change the doc selection to the working set when ever a new file is added to the working set
     */
    $(DocumentManager).on("workingSetAdd", function (event, addedDoc) {
        _fileSelectionFocus = WORKING_SET_VIEW;
        $(exports).triggerHandler("documentSelectionFocusChange");
    });

    /** 
      * Update the file selection focus when ever the current document changes
      */
    $(DocumentManager).on("currentDocumentChange", function (event) {

        // The the cause of the doc change was not openAndSelectDocument, so pick the best fileSelectionFocus
        if (!_curDocChangedDueToMe) {
            var curDoc = DocumentManager.getCurrentDocument();
            if (curDoc && DocumentManager.findInWorkingSet(curDoc.file.fullPath) !== -1) {
                _fileSelectionFocus = WORKING_SET_VIEW;
            } else {
                _fileSelectionFocus = PROJECT_MANAGER;
            }
        }

        $(exports).triggerHandler("documentSelectionFocusChange");
    });

    /** 
     * Opens a document if it's not open and selects the file in the UI corresponding to
     * fileSelectionFocus
     * @param {!fullPath}
     * @param {string} - must be either WORKING_SET_VIEW or PROJECT_MANAGER
     * @returns {!Deferred}
     */
    function openAndSelectDocument(fullPath, fileSelectionFocus) {
        var result;

        if (fileSelectionFocus !== PROJECT_MANAGER && fileSelectionFocus !== WORKING_SET_VIEW) {
            throw new Error("Bad parameter passed to FileViewController.openAndSelectDocument");
        }

        // Opening files are asynchronous and we want to know when this function caused a file
        // to open so that _fileSelectionFocus is set appropriatly. _curDocChangedDueToMe is set here
        // and checked in the cyrrentDocumentChange handler
        _curDocChangedDueToMe = true;

        _fileSelectionFocus = fileSelectionFocus;

        // If fullPath corresonds to the current doc being viewed then opening the file won't
        // trigger a currentDocumentChanged event, so we need to trigger a documentSelectionFocusChange 
        // in this case to signify the selection focus has changed even though the current document has not.
        var curDoc = DocumentManager.getCurrentDocument();
        if (curDoc && curDoc.file.fullPath === fullPath) {
            $(exports).triggerHandler("documentSelectionFocusChange");
            // Ensure the editor has focus even though we didn't open a new file.
            EditorManager.focusEditor();
            result = (new $.Deferred()).resolve();
        } else {
            result = CommandManager.execute(Commands.FILE_OPEN, {fullPath: fullPath});
        }
        
        // clear after notification is done
        result.always(function () {
            _curDocChangedDueToMe = false;
        });
        
        return result;
    }

    /** 
     * Opens the specified document if it's not already open, adds it to the working set,
     * and selects it in the WorkingSetView
     * @param {!fullPath}
     */
    function addToWorkingSetAndSelect(fullPath) {
        CommandManager.execute(Commands.FILE_ADD_TO_WORKING_SET, {fullPath: fullPath});

        // This properly handles sending the right nofications in cases where the document
        // is already the curruent one. In that case we will want to notify with
        // documentSelectionFocusChange so the views change their selection
        openAndSelectDocument(fullPath, WORKING_SET_VIEW);
    }

    /**
     * returns either WORKING_SET_VIEW or PROJECT_MANAGER
     * @return {!String}
     */
    function getFileSelectionFocus() {
        return _fileSelectionFocus;
    }



    // Define public API
    exports.getFileSelectionFocus = getFileSelectionFocus;
    exports.openAndSelectDocument = openAndSelectDocument;
    exports.addToWorkingSetAndSelect = addToWorkingSetAndSelect;
    exports.WORKING_SET_VIEW = WORKING_SET_VIEW;
    exports.PROJECT_MANAGER = PROJECT_MANAGER;


});

/*
 * Copyright 2011 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false, brackets: false, FileError: false */

/**
 * ProjectManager is the model for the set of currently open project. It is responsible for
 * creating and updating the project tree when projects are opened and when changes occur to
 * the file tree.
 *
 * This module dispatches these events:
 *    - initializeComplete -- When the ProjectManager initializes the first 
 *                            project at application start-up.
 *    - projectRootChanged -- when _projectRoot changes
 *
 * These are jQuery events, so to listen for them you do something like this:
 *    $(ProjectManager).on("eventname", handler);
 */
define('ProjectManager',['require','exports','module','thirdparty/jstree_pre1.0_fix_1/jquery.jstree','NativeFileSystem','PreferencesManager','DocumentManager','EditorManager','CommandManager','Commands','Dialogs','strings','FileViewController','PerfUtils','ViewUtils','FileUtils'],function (require, exports, module) {
    'use strict';
    
    // Load dependent non-module scripts
    require("thirdparty/jstree_pre1.0_fix_1/jquery.jstree");

    // Load dependent modules
    var NativeFileSystem    = require("NativeFileSystem").NativeFileSystem,
        PreferencesManager  = require("PreferencesManager"),
        DocumentManager     = require("DocumentManager"),
        EditorManager       = require("EditorManager"),
        CommandManager      = require("CommandManager"),
        Commands            = require("Commands"),
        Dialogs             = require("Dialogs"),
        Strings             = require("strings"),
        FileViewController  = require("FileViewController"),
        PerfUtils           = require("PerfUtils"),
        ViewUtils           = require("ViewUtils"),
        FileUtils           = require("FileUtils");
    
    /**
     * @private
     * Reference to the tree control
     * @type {jQueryObject}
     */
    var _projectTree = null;
    
    /**
     * @private
     * @see getProjectRoot()
     */
    var _projectRoot = null;

    /**
     * @private
     * Used to initialize jstree state
     */
    var _projectInitialLoad = {
        previous        : [],   /* array of arrays containing full paths to open at each depth of the tree */
        id              : 0,    /* incrementing id */
        fullPathToIdMap : {}    /* mapping of fullPath to tree node id attr */
    };
    
    $(FileViewController).on("documentSelectionFocusChange", function (event) {
        var curDoc = DocumentManager.getCurrentDocument();
        if (curDoc
                && (FileViewController.getFileSelectionFocus() !== FileViewController.WORKING_SET_VIEW)) {
            $("#project-files-container li").is(function (index) {
                var entry = $(this).data("entry");
                
                if (entry && entry.fullPath === curDoc.file.fullPath && !_projectTree.jstree("is_selected", $(this))) {
                    //we don't want to trigger another selection change event, so manually deselect
                    //and select without sending out notifications
                    _projectTree.jstree("deselect_all");
                    _projectTree.jstree("select_node", $(this), false);
                    return true;
                }
                return false;
            });
        } else {
            _projectTree.jstree("deselect_all");
        }
    });
    
    /**
     * Unique PreferencesManager clientID
     */
    var PREFERENCES_CLIENT_ID = "com.adobe.brackets.ProjectManager";

    /**
     * Returns the root folder of the currently loaded project, or null if no project is open (during
     * startup, or running outside of app shell).
     * @return {DirectoryEntry}
     */
    function getProjectRoot() {
        return _projectRoot;
    }
    
    /**
     * Returns true if absPath lies within the project, false otherwise.
     * FIXME (issue #263): Does not support paths containing ".."
     */
    function isWithinProject(absPath) {
        return (absPath.indexOf(_projectRoot.fullPath) === 0);
    }
    /**
     * If absPath lies within the project, returns a project-relative path. Else returns absPath
     * unmodified.
     * FIXME (issue #263): Does not support paths containing ".."
     */
    function makeProjectRelativeIfPossible(absPath) {
        if (isWithinProject(absPath)) {
            return absPath.slice(_projectRoot.fullPath.length);
        }
        return absPath;
    }

    /**
     * @private
     * Preferences callback. Saves current project path.
     */
    function _savePreferences(storage) {
        // save the current project
        storage.projectPath = _projectRoot.fullPath;

        // save jstree state
        var openNodes = [],
            projectPathLength = _projectRoot.fullPath.length,
            entry,
            fullPath,
            shortPath,
            depth;

        // Query open nodes by class selector
        $(".jstree-open").each(function (index) {
            entry = $(this).data("entry");

            if (entry.fullPath) {
                fullPath = entry.fullPath;

                // Truncate project path prefix, remove the trailing slash
                shortPath = fullPath.slice(projectPathLength, -1);

                // Determine depth of the node by counting path separators.
                // Children at the root have depth of zero
                depth = shortPath.split("/").length - 1;

                // Map tree depth to list of open nodes
                if (openNodes[depth] === undefined) {
                    openNodes[depth] = [];
                }

                openNodes[depth].push(fullPath);
            }
        });

        // Store the open nodes by their full path and persist to storage
        storage.projectTreeState = openNodes;
    }


    /**
     * @private
     * Given an input to jsTree's json_data.data setting, display the data in the file tree UI
     * (replacing any existing file tree that was previously displayed). This input could be
     * raw JSON data, or it could be a dataprovider function. See jsTree docs for details:
     * http://www.jstree.com/documentation/json_data
     */
    function _renderTree(treeDataProvider) {
        var projectTreeContainer = $("#project-files-container"),
            result = new $.Deferred();

        // Instantiate tree widget
        // (jsTree is smart enough to replace the old tree if there's already one there)
        _projectTree = projectTreeContainer
            .jstree(
                {
                    plugins : ["ui", "themes", "json_data", "crrm", "sort"],
                    json_data : { data: treeDataProvider, correct_state: false },
                    core : { animation: 0 },
                    themes : { theme: "brackets", url: "styles/jsTreeTheme.css", dots: false, icons: false },
                        //(note: our actual jsTree theme CSS lives in brackets.less; we specify an empty .css
                        // file because jsTree insists on loading one itself)
                    strings : { loading : "Loading ...", new_node : "New node" },
                    sort :  function (a, b) {
                        if (brackets.platform === "win") {
                            // Windows: prepend folder names with a '0' and file names with a '1' so folders are listed first
                            var a1 = ($(a).hasClass("jstree-leaf") ? "1" : "0") + this.get_text(a).toLowerCase(),
                                b1 = ($(b).hasClass("jstree-leaf") ? "1" : "0") + this.get_text(b).toLowerCase();
                            return (a1 > b1) ? 1 : -1;
                        } else {
                            return this.get_text(a).toLowerCase() > this.get_text(b).toLowerCase() ? 1 : -1;
                        }
                    }
                }
            )
            .bind(
                "select_node.jstree",
                function (event, data) {
                    var entry = data.rslt.obj.data("entry");
                    if (entry.isFile) {
                        FileViewController.openAndSelectDocument(entry.fullPath, "ProjectManager");
                    }
                }
            )
            .bind(
                "reopen.jstree",
                function (event, data) {
                    // This handler fires for the initial load and subsequent
                    // reload_nodes events. For each depth level of the tree, we open
                    // the saved nodes by a fullPath lookup.
                    if (_projectInitialLoad.previous.length > 0) {
                        // load previously open nodes by increasing depth
                        var toOpenPaths = _projectInitialLoad.previous.shift(),
                            toOpenIds   = [],
                            node        = null;
        
                        // use path to lookup ID
                        $.each(toOpenPaths, function (index, value) {
                            node = _projectInitialLoad.fullPathToIdMap[value];
                            
                            if (node) {
                                toOpenIds.push(node);
                            }
                        });
        
                        // specify nodes to open and load
                        data.inst.data.core.to_open = toOpenIds;
                        _projectTree.jstree("reload_nodes", false);
                    }
                    if (_projectInitialLoad.previous.length === 0) {
                        // resolve after all paths are opened
                        result.resolve();
                    }
                }
            );

        // jstree has a default event handler for dblclick that attempts to clear the
        // global window selection (presumably because it doesn't want text within the tree
        // to be selected). This ends up messing up CodeMirror, and we don't need this anyway
        // since we've turned off user selection of UI text globally. So we just unbind it,
        // and add our own double-click handler here.
        // Filed this bug against jstree at https://github.com/vakata/jstree/issues/163
        _projectTree.bind("init.jstree", function () {
            _projectTree
                .unbind("dblclick.jstree")
                .bind("dblclick.jstree", function (event) {
                    var entry = $(event.target).closest("li").data("entry");
                    if (entry && entry.isFile) {
                        FileViewController.addToWorkingSetAndSelect(entry.fullPath);
                    }
                });
        });
        
        result.always(function () {
            ViewUtils.updateChildrenToParentScrollwidth($("#project-files-container"));
        });
        
        return result;
    }
    
    /** @param {Entry} entry File or directory to filter */
    function _shouldShowInTree(entry) {
        if (entry.name[0] === ".") {       // "." prefix is always hidden on Mac
            return false;
        }
        
        if (entry.name === "Thumbs.db") {  // "Thumbs.db" hidden file auto-generated by Win
            return false;
        }
        
        return true;
    }

    /**
     * @private
     * Given an array of NativeFileSystem entries, returns a JSON array representing them in the format
     * required by jsTree. Saves the corresponding Entry object as metadata (which jsTree will store in
     * the DOM via $.data()).
     *
     * Does NOT recursively traverse the file system: folders are marked as expandable but are given no
     * children initially.
     *
     * @param {Array.<Entry>} entries  Array of NativeFileSystem entry objects.
     * @return {Array} jsTree node data: array of JSON objects
     */
    function _convertEntriesToJSON(entries) {
        var jsonEntryList = [],
            entry,
            entryI;

        for (entryI = 0; entryI < entries.length; entryI++) {
            entry = entries[entryI];
            
            if (_shouldShowInTree(entry)) {
                var jsonEntry = {
                    data: entry.name,
                    attr: { id: "node" + _projectInitialLoad.id++ },
                    metadata: { entry: entry }
                };
                if (entry.isDirectory) {
                    jsonEntry.children = [];
                    jsonEntry.state = "closed";
                }
    
                // For more info on jsTree's JSON format see: http://www.jstree.com/documentation/json_data
                jsonEntryList.push(jsonEntry);
    
                // Map path to ID to initialize loaded and opened states
                _projectInitialLoad.fullPathToIdMap[entry.fullPath] = jsonEntry.attr.id;
            }
        }
        return jsonEntryList;
    }

    /**
     * @private
     * Called by jsTree when the user has expanded a node that has never been expanded before. We call
     * jsTree back asynchronously with the node's immediate children data once the subfolder is done
     * being fetched.
     *
     * @param {jQueryObject} treeNode  jQ object for the DOM node being expanded
     * @param {function(Array)} jsTreeCallback  jsTree callback to provide children to
     */
    function _treeDataProvider(treeNode, jsTreeCallback) {
        var dirEntry, isProjectRoot = false;

        if (treeNode === -1) {
            // Special case: root of tree
            dirEntry = _projectRoot;
            isProjectRoot = true;
        } else {
            // All other nodes: the DirectoryEntry is saved as jQ data in the tree (by _convertEntriesToJSON())
            dirEntry = treeNode.data("entry");
        }

        // Fetch dirEntry's contents
        dirEntry.createReader().readEntries(
            function (entries) {
                var subtreeJSON = _convertEntriesToJSON(entries),
                    wasNodeOpen = false,
                    emptyDirectory = (subtreeJSON.length === 0);
                
                if (emptyDirectory) {
                    if (!isProjectRoot) {
                        wasNodeOpen = treeNode.hasClass("jstree-open");
                    } else {
                        // project root is a special case, add a placeholder
                        subtreeJSON.push({});
                    }
                }
                
                jsTreeCallback(subtreeJSON);
                
                if (!isProjectRoot && emptyDirectory) {
                    // If the directory is empty, force it to appear as an open or closed node.
                    // This is a workaround for issue #149 where jstree would show this node as a leaf.
                    var classToAdd = (wasNodeOpen) ? "jstree-closed" : "jstree-open";
                    
                    treeNode.removeClass("jstree-leaf jstree-closed jstree-open")
                            .addClass(classToAdd);
                }
                
                ViewUtils.updateChildrenToParentScrollwidth($("#project-files-container"));
            },
            function (error) {
                Dialogs.showModalDialog(
                    Dialogs.DIALOG_ID_ERROR,
                    Strings.ERROR_LOADING_PROJECT,
                    Strings.format(Strings.READ_DIRECTORY_ENTRIES_ERROR, dirEntry.fullPath, error.code)
                );
            }
        );

    }
    
    /** Returns the full path to the default project folder. The path is currently the brackets src folder.
     * TODO: (issue #267): Brackets does not yet support operating when there is no project folder. This code will likely
     * not be needed when this support is added.
     * @private
     * @return {!string} fullPath reference
     */
    function _getDefaultProjectPath() {
        var loadedPath = window.location.pathname;
        var bracketsSrc = loadedPath.substr(0, loadedPath.lastIndexOf("/"));
        
        bracketsSrc = FileUtils.convertToNativePath(bracketsSrc);

        return bracketsSrc;
    }
    
    /**
     * Loads the given folder as a project. Normally, you would call openProject() instead to let the
     * user choose a folder.
     *
     * @param {string} rootPath  Absolute path to the root folder of the project. 
     *  If rootPath is undefined or null, the last open project will be restored.
     * @return {Deferred} A $.Deferred() object that will be resolved when the
     *  project is loaded and tree is rendered, or rejected if the project path
     *  fails to load.
     */
    function loadProject(rootPath) {
        // reset tree node id's
        _projectInitialLoad.id = 0;

        var prefs = PreferencesManager.getPreferences(PREFERENCES_CLIENT_ID),
            result = new $.Deferred(),
            resultRenderTree,
            isFirstProjectOpen = false;

        if (rootPath === null || rootPath === undefined) {
            // Load the last known project into the tree
            rootPath = prefs.projectPath;
            isFirstProjectOpen = true;

            _projectInitialLoad.previous = prefs.projectTreeState;

            if (brackets.inBrowser) {
                // In browser: dummy folder tree (hardcoded in ProjectManager)
                rootPath = "DummyProject";
                $("#project-title").html(rootPath);
            }
        }
        
        PerfUtils.markStart("Load Project: " + rootPath);

        // Populate file tree as long as we aren't running in the browser
        if (!brackets.inBrowser) {
            // Point at a real folder structure on local disk
            NativeFileSystem.requestNativeFileSystem(rootPath,
                function (rootEntry) {
                    var projectRootChanged = (!_projectRoot || !rootEntry)
                        || _projectRoot.fullPath !== rootEntry.fullPath;

                    // Success!
                    _projectRoot = rootEntry;

                    // Set title
                    $("#project-title").html(_projectRoot.name);

                    // The tree will invoke our "data provider" function to populate the top-level items, then
                    // go idle until a node is expanded - at which time it'll call us again to fetch the node's
                    // immediate children, and so on.
                    resultRenderTree = _renderTree(_treeDataProvider);

                    resultRenderTree.done(function () {
                        result.resolve();

                        if (isFirstProjectOpen) {
                            $(exports).triggerHandler("initializeComplete", _projectRoot);
                        }

                        if (projectRootChanged) {
                            $(exports).triggerHandler("projectRootChanged", _projectRoot);
                        }
                    });
                    resultRenderTree.fail(function () {
                        result.reject();
                    });
                    resultRenderTree.always(function () {
                        PerfUtils.addMeasurement("Load Project: " + rootPath);
                    });
                },
                function (error) {
                    Dialogs.showModalDialog(
                        Dialogs.DIALOG_ID_ERROR,
                        Strings.ERROR_LOADING_PROJECT,
                        Strings.format(
                            Strings.REQUEST_NATIVE_FILE_SYSTEM_ERROR,
                            rootPath,
                            error.code,
                            function () {
                                result.reject();
                            }
                        )
                    ).done(function () {
                        // The project folder stored in preference doesn't exist, so load the default 
                        // project directory.
                        // TODO (issue #267): When Brackets supports having no project directory
                        // defined this code will need to change
                        return loadProject(_getDefaultProjectPath());
                    });
                }
                );
        }

        return result;
    }

    /**
     * Displays a browser dialog where the user can choose a folder to load.
     * (If the user cancels the dialog, nothing more happens).
     */
    function openProject() {
        // Confirm any unsaved changes first. We run the command in "prompt-only" mode, meaning it won't
        // actually close any documents even on success; we'll do that manually after the user also oks
        //the folder-browse dialog.
        CommandManager.execute(Commands.FILE_CLOSE_ALL, { promptOnly: true })
            .done(function () {
                // Pop up a folder browse dialog
                NativeFileSystem.showOpenDialog(false, true, "Choose a folder", _projectRoot.fullPath, null,
                    function (files) {
                        // If length == 0, user canceled the dialog; length should never be > 1
                        if (files.length > 0) {
                            // Actually close all the old files now that we know for sure we're proceeding
                            DocumentManager.closeAll();
                            
                            // Load the new project into the folder tree
                            loadProject(files[0]);
                        }
                    },
                    function (error) {
                        Dialogs.showModalDialog(
                            Dialogs.DIALOG_ID_ERROR,
                            Strings.ERROR_LOADING_PROJECT,
                            Strings.format(Strings.OPEN_DIALOG_ERROR, error.code)
                        );
                    }
                    );
            });
        // if fail, don't open new project: user canceled (or we failed to save its unsaved changes)
    }

    /**
     * Returns the FileEntry or DirectoryEntry corresponding to the selected item, or null
     * if no item is selected.
     *
     * @return {?Entry}
     */
    function getSelectedItem() {
        var selected = _projectTree.jstree("get_selected");
        if (selected) {
            return selected.data("entry");
        }
        return null;
    }

    /**
     * Create a new item in the project tree.
     *
     * @param baseDir {string} Full path of the directory where the item should go
     * @param initialName {string} Initial name for the item
     * @param skipRename {boolean} If true, don't allow the user to rename the item
     * @return {Deferred} A $.Deferred() object that will be resolved with the FileEntry
     *  of the created object, or rejected if the user cancelled or entered an illegal
     *  filename.
     */
    function createNewItem(baseDir, initialName, skipRename) {
        var node                = null,
            selection           = _projectTree.jstree("get_selected"),
            selectionEntry      = null,
            position            = "inside",
            escapeKeyPressed    = false,
            result              = new $.Deferred(),
            wasNodeOpen         = true;

        // get the FileEntry or DirectoryEntry
        if (selection) {
            selectionEntry = selection.data("entry");
        }

        // move selection to parent DirectoryEntry
        if (selectionEntry) {
            if (selectionEntry.isFile) {
                position = "after";
                
                var parent = $.jstree._reference(_projectTree)._get_parent(selection);
                
                if (typeof (parent.data) === "function") {
                    // get Entry from tree node
                    // note that the jstree root will return undefined
                    selectionEntry = parent.data("entry");
                } else {
                    // reset here. will be replaced with project root.
                    selectionEntry = null;
                }
            } else if (selectionEntry.isDirectory) {
                wasNodeOpen = selection.hasClass("jstree-open");
            }
        }

        // use the project root DirectoryEntry
        if (!selectionEntry) {
            selectionEntry = getProjectRoot();
        }

        _projectTree.on("create.jstree", function (event, data) {
            $(event.target).off("create.jstree");

            function errorCleanup() {
                // TODO (issue #115): If an error occurred, we should allow the user to fix the filename.
                // For now we just remove the node so you have to start again.
                var parent = data.inst._get_parent(data.rslt.obj);
                
                _projectTree.jstree("remove", data.rslt.obj);
                
                // Restore tree node state and styling when errors occur.
                // parent returns -1 when at the root
                if (parent && (parent !== -1)) {
                    var methodName = (wasNodeOpen) ? "open_node" : "close_node";
                    var classToAdd = (wasNodeOpen) ? "jstree-open" : "jstree-closed";
                    
                    // This is a workaround for issue #149 where jstree would show this node as a leaf.
                    _projectTree.jstree(methodName, parent);
                    parent.removeClass("jstree-leaf jstree-closed jstree-open")
                          .addClass(classToAdd);
                }
                
                result.reject();
            }

            if (!escapeKeyPressed) {
                // Validate file name
                // TODO (issue #270): There are some filenames like COM1, LPT3, etc. that are not valid on Windows.
                // We may want to add checks for those here.
                // See http://msdn.microsoft.com/en-us/library/windows/desktop/aa365247(v=vs.85).aspx
                if (data.rslt.name.search(/[\/?*:;\{\}<>\\|]+/) !== -1) {
                    Dialogs.showModalDialog(
                        Dialogs.DIALOG_ID_ERROR,
                        Strings.INVALID_FILENAME_TITLE,
                        Strings.INVALID_FILENAME_MESSAGE
                    );

                    errorCleanup();
                    return;
                }

                // Use getFile() to create the new file
                selectionEntry.getFile(
                    data.rslt.name,
                    {create: true, exclusive: true},
                    function (entry) {
                        data.rslt.obj.data("entry", entry);
                        _projectTree.jstree("select_node", data.rslt.obj, true);
                        result.resolve(entry);
                    },
                    function (error) {
                        if ((error.code === FileError.PATH_EXISTS_ERR)
                                || (error.code === FileError.TYPE_MISMATCH_ERR)) {
                            Dialogs.showModalDialog(
                                Dialogs.DIALOG_ID_ERROR,
                                Strings.INVALID_FILENAME_TITLE,
                                Strings.format(Strings.FILE_ALREADY_EXISTS, data.rslt.name)
                            );
                        } else {
                            var errString = error.code === FileError.NO_MODIFICATION_ALLOWED_ERR ?
                                             Strings.NO_MODIFICATION_ALLOWED_ERR :
                                             Strings.format(String.GENERIC_ERROR, error.code);
                            var errMsg = Strings.format(Strings.ERROR_CREATING_FILE, data.rslt.name, errString);
                          
                            Dialogs.showModalDialog(
                                Dialogs.DIALOG_ID_ERROR,
                                Strings.ERROR_CREATING_FILE_TITLE,
                                errMsg
                            );
                        }

                        errorCleanup();
                    }
                );
            } else { //escapeKeyPressed
                errorCleanup();
            }
        });
        
        // TODO (issue #115): Need API to get tree node for baseDir.
        // In the meantime, pass null for node so new item is placed
        // relative to the selection
        node = selection;
        
        // Open the node before creating the new child
        _projectTree.jstree("open_node", node);

        // Create the node and open the editor
        _projectTree.jstree("create", node, position, {data: initialName}, null, skipRename);

        var renameInput = _projectTree.find(".jstree-rename-input");

        renameInput.on("keydown", function (event) {
            // Listen for escape key on keydown, so we can remove the node in the create.jstree handler above
            if (event.keyCode === 27) {
                escapeKeyPressed = true;
            }
        });

        // TODO (issue #277): Figure out better way to style this input. All styles are inlined by jsTree...
        renameInput.css({ left: "17px", height: "24px"})
            .parent().css({ height: "26px"});

        return result;
    }

    // Define public API
    exports.getProjectRoot  = getProjectRoot;
    exports.isWithinProject = isWithinProject;
    exports.makeProjectRelativeIfPossible = makeProjectRelativeIfPossible;
    exports.openProject     = openProject;
    exports.loadProject     = loadProject;
    exports.getSelectedItem = getSelectedItem;
    exports.createNewItem   = createNewItem;

    // Initialize now
    (function () {
        
        
        var defaults = {
            projectPath:      _getDefaultProjectPath(), /* initialze to brackets source */
            projectTreeState: ""
        };
        PreferencesManager.addPreferencesClient(PREFERENCES_CLIENT_ID, _savePreferences, this, defaults);
    }());
});

/*
 * Copyright 2011 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false, brackets: false, PathUtils: false */

define('FileCommandHandlers',['require','exports','module','thirdparty/path-utils/path-utils.min','CommandManager','Commands','NativeFileSystem','ProjectManager','DocumentManager','EditorManager','FileUtils','Async','Dialogs','strings','PreferencesManager','PerfUtils'],function (require, exports, module) {
    'use strict';
    
    require("thirdparty/path-utils/path-utils.min");
    
    // Load dependent modules
    var CommandManager      = require("CommandManager"),
        Commands            = require("Commands"),
        NativeFileSystem    = require("NativeFileSystem").NativeFileSystem,
        ProjectManager      = require("ProjectManager"),
        DocumentManager     = require("DocumentManager"),
        EditorManager       = require("EditorManager"),
        FileUtils           = require("FileUtils"),
        Async               = require("Async"),
        Dialogs             = require("Dialogs"),
        Strings             = require("strings"),
        PreferencesManager  = require("PreferencesManager"),
        PerfUtils           = require("PerfUtils");
    
    /**
     * Handlers for commands related to file handling (opening, saving, etc.)
     */
    
    /** @type {jQueryObject} Container for label shown above editor */
    var _title = null;
    /** @type {string} Label shown above editor for current document: filename and potentially some of its path */
    var _currentTitlePath = null;
    
    function updateTitle() {
        var currentDoc = DocumentManager.getCurrentDocument();
        if (currentDoc) {
            _title.text(_currentTitlePath + (currentDoc.isDirty ? " \u2022" : ""));
        } else {
            _title.text("");
        }
    }
    
    function handleCurrentDocumentChange() {
        var newDocument = DocumentManager.getCurrentDocument();
        
        if (newDocument) {
            var fullPath = newDocument.file.fullPath;
    
            // In the main toolbar, show the project-relative path (if the file is inside the current project)
            // or the full absolute path (if it's not in the project).
            _currentTitlePath = ProjectManager.makeProjectRelativeIfPossible(fullPath);
            
        } else {
            _currentTitlePath = null;
        }
        
        // Update title text & "dirty dot" display
        updateTitle();
    }
    
    function handleDirtyChange(event, changedDoc) {
        var currentDoc = DocumentManager.getCurrentDocument();
        
        if (currentDoc && changedDoc.file.fullPath === currentDoc.file.fullPath) {
            updateTitle();
        }
    }

    /**
     * @private
     * Creates a document and displays an editor for the specified file path.
     * @param {!string} fullPath
     * @return {Deferred} a jQuery Deferred that will be resolved with a
     *  document for the specified file path, or rejected if the file can not be read.
     */
    function doOpen(fullPath) {
        
        var result = new $.Deferred();
        if (!fullPath) {
            console.log("doOpen() called without fullPath");
            return result.reject();
        }
        
        PerfUtils.markStart("Open File: " + fullPath);
        result.always(function () {
            PerfUtils.addMeasurement("Open File: " + fullPath);
        });
        
        // Load the file if it was never open before, and then switch to it in the UI
        DocumentManager.getDocumentForPath(fullPath)
            .done(function (doc) {
                DocumentManager.setCurrentDocument(doc);
                result.resolve(doc);
            })
            .fail(function (fileError) {
                FileUtils.showFileOpenError(fileError.code, fullPath).done(function () {
                    EditorManager.focusEditor();
                    result.reject();
                });
            });

        return result;
    }
    
    /**
     * @private
     * Used to track the default directory for the file open dialog
     */
    var _defaultOpenDialogFullPath = null;
    
    /**
     * @private
     * Creates a document and displays an editor for the specified file path. 
     * If no path is specified, a file prompt is provided for input.
     * @param {?string} fullPath - The path of the file to open; if it's null we'll prompt for it
     * @return {Deferred} a jQuery Deferred that will be resolved with a new 
     *  document for the specified file path, or rejected if the file can not be read.
     */
    function _doOpenWithOptionalPath(fullPath) {
        var result;
        if (!fullPath) {
            //first time through, default to the current project path
            if (!_defaultOpenDialogFullPath) {
                _defaultOpenDialogFullPath = ProjectManager.getProjectRoot().fullPath;
            }
            // Prompt the user with a dialog
            // TODO (issue #117): we're relying on this to not be asynchronous ('result' not set until
            // dialog is dismissed); won't work in a browser-based version
            NativeFileSystem.showOpenDialog(false, false, Strings.OPEN_FILE, _defaultOpenDialogFullPath,
                null, function (files) {
                    if (files.length > 0) {
                        result = doOpen(files[0])
                            .always(function updateDefualtOpenDialogFullPath(doc) {
                                var url = PathUtils.parseUrl(doc.file.fullPath);
                                //reconstruct the url but use the directory and stop there
                                _defaultOpenDialogFullPath = url.protocol + url.doubleSlash + url.authority + url.directory;
                            });
                        return;
                    }
                });
        } else {
            result = doOpen(fullPath);
        }
        if (!result) {
            result = (new $.Deferred()).reject();
        }
        return result;
    }

    function handleFileOpen(commandData) {
        var fullPath = null;
        if (commandData) {
            fullPath = commandData.fullPath;
        }
        
        return _doOpenWithOptionalPath(fullPath)
                 .always(EditorManager.focusEditor);
    }

    function handleFileAddToWorkingSet(commandData) {
        handleFileOpen(commandData).done(function (doc) {
            DocumentManager.addToWorkingSet(doc);
        });
    }

    /**
     * @private
     * Ensures the suggested file name doesn't already exit.
     * @param {string} dir  The directory to use
     * @param {string} baseFileName  The base to start with, "-n" will get appened to make unique
     * @param {string} fileExt  The file extension
     */
    function _getUntitledFileSuggestion(dir, baseFileName, fileExt) {
        var result = new $.Deferred();
        var suggestedName = baseFileName + fileExt;
        var dirEntry = new NativeFileSystem.DirectoryEntry(dir);

        result.progress(function attemptNewName(suggestedName, nextIndexToUse) {
            if (nextIndexToUse > 99) {
                //we've tried this enough
                result.reject();
                return;
            }

            //check this name
            dirEntry.getFile(
                suggestedName,
                {},
                function successCallback(entry) {
                    //file exists, notify to the next progress
                    result.notify(baseFileName + "-" + nextIndexToUse + fileExt, nextIndexToUse + 1);
                },
                function errorCallback(error) {
                    //most likely error is FNF, user is better equiped to handle the rest
                    result.resolve(suggestedName);
                }
            );
        });

        //kick it off
        result.notify(baseFileName + fileExt, 1);

        return result;
    }

    function handleFileNewInProject() {
        // Determine the directory to put the new file
        // If a file is currently selected, put it next to it.
        // If a directory is currently selected, put it in it.
        // If nothing is selected, put it at the root of the project
        var baseDir,
            selected = ProjectManager.getSelectedItem() || ProjectManager.getProjectRoot();
        
        baseDir = selected.fullPath;
        if (selected.isFile) {
            baseDir = baseDir.substr(0, baseDir.lastIndexOf("/"));
        }
        
        // Create the new node. The createNewItem function does all the heavy work
        // of validating file name, creating the new file and selecting.
        var deferred = _getUntitledFileSuggestion(baseDir, "Untitled", ".js");
        var createWithSuggestedName = function (suggestedName) {
            ProjectManager.createNewItem(baseDir, suggestedName, false).pipe(deferred.resolve, deferred.reject, deferred.notify);
        };

        deferred.done(createWithSuggestedName);
        deferred.fail(function createWithDefault() { createWithSuggestedName("Untitled.js"); });
        return deferred;
    }
    
    function showSaveFileError(code, path) {
        return Dialogs.showModalDialog(
            Dialogs.DIALOG_ID_ERROR,
            Strings.ERROR_SAVING_FILE_TITLE,
            Strings.format(
                Strings.ERROR_SAVING_FILE,
                path,
                FileUtils.getFileErrorString(code)
            )
        );
    }
    
    /** Note: if there is an error, the Deferred is not rejected until the user has dimissed the dialog */
    function doSave(docToSave) {
        var result = new $.Deferred();
        
        function handleError(error, fileEntry) {
            showSaveFileError(error.code, fileEntry.fullPath)
                .always(function () {
                    result.reject(error);
                });
        }
            
        if (docToSave && docToSave.isDirty) {
            var fileEntry = docToSave.file;
            var writeError = false;
            
            fileEntry.createWriter(
                function (writer) {
                    writer.onwriteend = function () {
                        // Per spec, onwriteend is called after onerror too
                        if (!writeError) {
                            docToSave.notifySaved();
                            result.resolve();
                        }
                    };
                    writer.onerror = function (error) {
                        writeError = true;
                        handleError(error, fileEntry);
                    };

                    // TODO (issue #241): Blob instead of string
                    writer.write(docToSave.getText());
                },
                function (error) {
                    handleError(error, fileEntry);
                }
            );
        } else {
            result.resolve();
        }
        result.always(function () {
            EditorManager.focusEditor();
        });
        return result;
    }
    
    /**
     * Saves the given file. If no file specified, assumes the current document.
     * @param {?{doc: Document}} commandData  Document to close, or null
     * @return {$.Deferred}
     */
    function handleFileSave(commandData) {
        // Default to current document if doc is null
        var doc = null;
        if (commandData) {
            doc = commandData.doc;
        }
        if (!doc) {
            var focusedEditor = EditorManager.getFocusedEditor();
            
            if (focusedEditor) {
                doc = focusedEditor.document;
            }
            
            // doc may still be null, e.g. if no editors are open, but doSave() does a null check on
            // doc and makes sure the document is dirty before saving.
        }
        
        return doSave(doc);
    }
    
    /**
     * Saves all unsaved documents. Returns a Promise that will be resolved once ALL the save
     * operations have been completed. If ANY save operation fails, an error dialog is immediately
     * shown and the other files wait to save until it is dismissed; after all files have been
     * processed, the Promise is rejected if any ONE save operation failed.
     *
     * @return {$.Promise}
     */
    function saveAll() {
        // Do in serial because doSave shows error UI for each file, and we don't want to stack
        // multiple dialogs on top of each other
        return Async.doSequentially(DocumentManager.getWorkingSet(), doSave, false);
    }
    

    /**
     * Closes the specified document. Prompts user about saving file if document is dirty.
     *
     * @param {?{doc: Document}} commandData  Document to close; assumes the current document if null.
     * @param {boolean} promptOnly  If true, only displays the relevant confirmation UI and does NOT
     *          actually close the document. This is useful when chaining file-close together with
     *          other user prompts that may be cancelable.
     * @return {$.Deferred}
     */
    function handleFileClose(commandData) {
        var doc = null;
        if (commandData) {
            doc = commandData.doc;
        }
        
        // utility function for handleFileClose: closes document & removes from working set
        function doClose(doc) {
            if (!commandData || !commandData.promptOnly) {
                // This selects a different document if the working set has any other options
                DocumentManager.closeDocument(doc);
            
                EditorManager.focusEditor();
            }
        }
        
        
        var result = new $.Deferred();
        
        // Default to current document if doc is null
        if (!doc) {
            doc = DocumentManager.getCurrentDocument();
        }
        
        // No-op if called when nothing is open; TODO: (issue #273) should command be grayed out instead?
        if (!doc) {
            return;
        }
        
        if (doc.isDirty) {
            var filename = PathUtils.parseUrl(doc.file.fullPath).filename;
            
            Dialogs.showModalDialog(
                Dialogs.DIALOG_ID_SAVE_CLOSE,
                Strings.SAVE_CLOSE_TITLE,
                Strings.format(Strings.SAVE_CLOSE_MESSAGE, filename)
            ).done(function (id) {
                if (id === Dialogs.DIALOG_BTN_CANCEL) {
                    result.reject();
                } else if (id === Dialogs.DIALOG_BTN_OK) {
                    doSave(doc)
                        .done(function () {
                            doClose(doc);
                            result.resolve();
                        })
                        .fail(function () {
                            result.reject();
                        });
                } else {
                    // This is the "Don't Save" case--we can just go ahead and close the file.
                    doClose(doc);
                    result.resolve();
                }
            });
            result.always(function () {
                EditorManager.focusEditor();
            });
        } else {
            // Doc is not dirty, just close
            doClose(doc);
            EditorManager.focusEditor();
            result.resolve();
        }
        return result;
    }
    
    /**
     * Closes all open documents; equivalent to calling handleFileClose() for each document, except
     * that unsaved changes are confirmed once, in bulk.
     * @param {?{promptOnly: boolean}}  If true, only displays the relevant confirmation UI and does NOT
     *          actually close any documents. This is useful when chaining close-all together with
     *          other user prompts that may be cancelable.
     * @return {$.Deferred}
     */
    function handleFileCloseAll(commandData) {
        var result = new $.Deferred();
        
        var unsavedDocs = DocumentManager.getWorkingSet().filter(function (doc) {
            return doc.isDirty;
        });
        
        if (unsavedDocs.length === 0) {
            // No unsaved changes, so we can proceed without a prompt
            result.resolve();
            
        } else if (unsavedDocs.length === 1) {
            // Only one unsaved file: show the usual single-file-close confirmation UI
            var fileCloseArgs = { doc: unsavedDocs[0], promptOnly: commandData.promptOnly };

            handleFileClose(fileCloseArgs).done(function () {
                // still need to close any other, non-unsaved documents
                result.resolve();
            }).fail(function () {
                result.reject();
            });
            
        } else {
            // Multiple unsaved files: show a single bulk prompt listing all files
            var message = Strings.SAVE_CLOSE_MULTI_MESSAGE;
            
            message += "<ul>";
            unsavedDocs.forEach(function (doc) {
                message += "<li>" + ProjectManager.makeProjectRelativeIfPossible(doc.file.fullPath) + "</li>";
            });
            message += "</ul>";
            
            Dialogs.showModalDialog(
                Dialogs.DIALOG_ID_SAVE_CLOSE,
                Strings.SAVE_CLOSE_TITLE,
                message
            ).done(function (id) {
                if (id === Dialogs.DIALOG_BTN_CANCEL) {
                    result.reject();
                } else if (id === Dialogs.DIALOG_BTN_OK) {
                    // Save all unsaved files, then if that succeeds, close all
                    saveAll().done(function () {
                        result.resolve();
                    }).fail(function () {
                        result.reject();
                    });
                } else {
                    // "Don't Save" case--we can just go ahead and close all  files.
                    result.resolve();
                }
            });
        }
        
        // If all the unsaved-changes confirmations pan out above, then go ahead & close all editors
        // NOTE: this still happens before any done() handlers added by our caller, because jQ
        // guarantees that handlers run in the order they are added.
        result.done(function () {
            if (!commandData || !commandData.promptOnly) {
                DocumentManager.closeAll();
            }
        });
        
        return result;
    }
    
    /**
    * @private - tracks our closing state if we get called again
    */
    var _windowGoingAway = false;
    
    /**
    * @private
    * Common implementation for close/quit/reload which all mostly
    * the same except for the final step
    */
    function _handleWindowGoingAway(commandData, postCloseHandler) {
        if (_windowGoingAway) {
            //if we get called back while we're closing, then just return
            return (new $.Deferred()).resolve();
        }
        
        //prevent the default action of closing the window until we can save all the files
        if (commandData && commandData.evt && commandData.evt.cancelable) {
            commandData.evt.preventDefault();
        }

        return CommandManager.execute(Commands.FILE_CLOSE_ALL, { promptOnly: true })
            .done(function () {
                _windowGoingAway = true;
                PreferencesManager.savePreferences();
                postCloseHandler();
            });
    }
    
    /** Confirms any unsaved changes, then closes the window */
    function handleFileCloseWindow(commandData) {
        return _handleWindowGoingAway(commandData, function () {
            window.close();
        });
    }
    
    /** Closes the window, then quits the app */
    function handleFileQuit(commandData) {
        return _handleWindowGoingAway(commandData, function () {
            brackets.app.quit();
        });
        // if fail, don't exit: user canceled (or asked us to save changes first, but we failed to do so)
    }
    
     /** Does a full reload of the browser window */
    function handleFileReload(commandData) {
        return _handleWindowGoingAway(commandData, function () {
            window.location.reload();
        });
    }

    function init(title) {
        _title = title;

        // Register global commands
        CommandManager.register(Commands.FILE_OPEN, handleFileOpen);
        CommandManager.register(Commands.FILE_ADD_TO_WORKING_SET, handleFileAddToWorkingSet);
        // TODO: (issue #274) For now, hook up File > New to the "new in project" handler. Eventually
        // File > New should open a new blank tab, and handleFileNewInProject should
        // be called from a "+" button in the project
        CommandManager.register(Commands.FILE_NEW, handleFileNewInProject);
        CommandManager.register(Commands.FILE_SAVE, handleFileSave);
        CommandManager.register(Commands.FILE_CLOSE, handleFileClose);
        CommandManager.register(Commands.FILE_CLOSE_ALL, handleFileCloseAll);
        CommandManager.register(Commands.FILE_CLOSE_WINDOW, handleFileCloseWindow);
        CommandManager.register(Commands.FILE_QUIT, handleFileQuit);
        CommandManager.register(Commands.FILE_RELOAD, handleFileReload);
        
        
        $(DocumentManager).on("dirtyFlagChange", handleDirtyChange);
        $(DocumentManager).on("currentDocumentChange", handleCurrentDocumentChange);
    }

    // Define public API
    exports.init = init;
});


/*
 * Copyright 2012 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false, brackets, PathUtils */

/*
 * Manages a collection of FileIndexes where each index maintains a list of information about
 * files that meet the criteria specified by the index. The indexes are created lazily when
 * they are queried and marked dirty when Brackets becomes active.
 *
 * TODO (issue 325 ) - FileIndexer doesn't currently add a file to the index when the user createa
 * a new file within brackets.
 *
 */


define('FileIndexManager',['require','exports','module','NativeFileSystem','PerfUtils','ProjectManager','Dialogs','strings'],function (require, exports, module) {
    'use strict';
    
    var NativeFileSystem    = require("NativeFileSystem").NativeFileSystem,
        PerfUtils           = require("PerfUtils"),
        ProjectManager      = require("ProjectManager"),
        Dialogs             = require("Dialogs"),
        Strings             = require("strings");

    /**
     * All the indexes are stored in this object. The key is the name of the index
     * and the value is a FileIndex. 
     */
    var _indexList = {};

    /**
     * Tracks whether _indexList should be considered dirty and invalid. Calls that access
     * any data in _indexList should call syncFileIndex prior to accessing the data.
     * @type {boolean}
     */
    var _indexListDirty = true;

    /** class FileIndex
     *
     * A FileIndex contains an array of fileInfos that meet the criteria specified by
     * the filterFunction. FileInfo's in the fileInfo array should unique map to one file.
     *  
     * @constructor
     * @param {!string} indexname
     * @param {function({!entry})} filterFunction returns true to indicate the entry
     *                             should be included in the index
     */
    function FileIndex(indexName, filterFunction) {
        this.name = indexName;
        this.fileInfos = [];
        this.filterFunction = filterFunction;
    }

    /** class FileInfo
     * 
     *  Class to hold info about a file that a FileIndex wishes to retain.
     *
     * @constructor
     * @param {!string}
     */
    function FileInfo(entry) {
        this.name = entry.name;
        this.fullPath = entry.fullPath;
    }


    /**
    * Adds a new index to _indexList and marks the list dirty 
    *
    * A future performance optimization is to only build the new index rather than 
    * marking them all dirty
    *
    * @private
    * @param {!string} indexName must be unque
    * @param {!function({entry} filterFunction should return true to include an
    *   entry in the index

    */
    function _addIndex(indexName, filterFunction) {
        if (_indexList.hasOwnProperty(indexName)) {
            throw new Error("Duplicate index name");
        }
        if (typeof filterFunction !== "function") {
            throw new Error("Invalid arguments");
        }

        _indexList[indexName] = new FileIndex(indexName, filterFunction);

        _indexListDirty = true;
    }


    /**
    * Checks the entry against the filterFunction for each index and adds
    * a fileInfo to the index if the entry meets the criteria. FileInfo's are
    * shared between indexes.
    *
    * @private
    * @param {!entry} entry to be added to the indexes
    */
    // future use when files are incrementally added
    //
    function _addFileToIndexes(entry) {

        // skip invisible files on mac
        if (brackets.platform === "mac" && entry.name.charAt(0) === ".") {
            return;
        }

        var fileInfo = new FileInfo(entry);
        //console.log(entry.name);
  
        $.each(_indexList, function (indexName, index) {
            if (index.filterFunction(entry)) {
                index.fileInfos.push(fileInfo);
            }
        });
    }
    
  /**
    * Error dialog when max files in index is hit
    */
    function _showMaxFilesDialog() {
        return Dialogs.showModalDialog(
            Dialogs.DIALOG_ID_ERROR,
            Strings.ERROR_MAX_FILES_TITLE,
            Strings.ERROR_MAX_FILES
        );
    }

    /* Recursively visits all files that are descendent of dirEntry and adds
    * files files to each index when the file matches the filter critera
    * @private
    * @param {!DirectoryEntry} dirEntry
    * @returns {$.Promise}
    */
    function _scanDirectorySubTree(dirEntry) {
        if (!dirEntry) {
            throw new Error("Bad dirEntry passed to _scanDirectorySubTree");
        }

        // keep track of directories as they are asynchronously read. We know we are done
        // when dirInProgress becomes empty again.
        var state = { fileCount: 0,
                      dirInProgress: {},    // directory names that are in progress of being read
                      dirError: {},         // directory names with read errors. key=dir path, value=error
                      maxFilesHit: false    // used to show warning dialog only once
                    };

        var deferred = new $.Deferred();

        // inner helper function
        function _dirScanDone() {
            var key;
            for (key in state.dirInProgress) {
                if (state.dirInProgress.hasOwnProperty(key)) {
                    return false;
                }
            }
            return true;
        }

        function _finishDirScan(dirEntry) {
            //console.log("finished: " + dirEntry.fullPath);
            delete state.dirInProgress[dirEntry.fullPath];

            if (_dirScanDone()) {
                //console.log("dir scan completly done");
                deferred.resolve();
            }
        }

        // inner helper function
        function _scanDirectoryRecurse(dirEntry) {
            // skip invisible directories on mac
            if (brackets.platform === "mac" && dirEntry.name.charAt(0) === ".") {
                return;
            }

            state.dirInProgress[dirEntry.fullPath] = true;
            //console.log("started dir: " + dirEntry.fullPath);

            dirEntry.createReader().readEntries(
                // success callback
                function (entries) {
                    // inspect all children of dirEntry
                    entries.forEach(function (entry) {
                        // For now limit the number of files that are indexed by preventing adding files
                        // or scanning additional directories once a max has been hit. Also notify the 
                        // user once via a dialog. This limit could be increased
                        // if files were indexed in a worker thread so scanning didn't block the UI
                        if (state.fileCount > 10000) {
                            if (!state.maxFilesHit) {
                                state.maxFilesHit = true;
                                _showMaxFilesDialog();
                            }
                            return;
                        }

                        if (entry.isFile) {
                            _addFileToIndexes(entry);
                            state.fileCount++;

                        } else if (entry.isDirectory) {
                            _scanDirectoryRecurse(entry);
                        }
                    });

                    _finishDirScan(dirEntry);
                },
                // error callback
                function (error) {
                    state.dirError[dirEntry.fullPath] = error;
                    _finishDirScan(dirEntry);
                }
            );
        }

        _scanDirectoryRecurse(dirEntry);

        return deferred.promise();
    }
    
    


    
    // debug 
    function _logFileList(list) {
        list.forEach(function (fileInfo) {
            console.log(fileInfo.name);
        });
        console.log("length: " + list.length);
    }
    

    /**
    * Clears the fileInfo array for all the indexes in _indexList
    * @private
    */
    function _clearIndexes() {
        $.each(_indexList, function (indexName, index) {
            index.fileInfos = [];
        });
    }

    /**
     * Markes all file indexes dirty
     */
    function markDirty() {
        _indexListDirty = true;
    }

    /**
     * Used by syncFileIndex function to prevent reentrancy
     * @private
     */
    var _syncFileIndexReentracyGuard = false;

    /**
    * Clears and rebuilds all of the fileIndexes and sets _indexListDirty to false
    * @return {$.Promise} resolved when index has been updated
    */
    function syncFileIndex() {

        // TODO (issue 330) - allow multiple calls to syncFileIndex to be batched up so that this code isn't necessary
        if (_syncFileIndexReentracyGuard) {
            throw new Error("syncFileIndex cannot be called Recursively");
        }

        _syncFileIndexReentracyGuard = true;

        var rootDir = ProjectManager.getProjectRoot();
        if (_indexListDirty) {
            PerfUtils.markStart("FileIndexManager.syncFileIndex(): " + rootDir.fullPath);

            _clearIndexes();

            return _scanDirectorySubTree(rootDir)
                .done(function () {
                    PerfUtils.addMeasurement("FileIndexManager.syncFileIndex(): " + rootDir.fullPath);
                    _indexListDirty = false;
                    _syncFileIndexReentracyGuard = false;

                    //_logFileList(_indexList["all"].fileInfos);
                    //_logFileList(_indexList["css"].fileInfos);
                });
        } else {
            _syncFileIndexReentracyGuard = false;
            return $.Deferred().resolve().promise();
        }
    }

    /**
    * Returns the FileInfo array for the specified index
    * @param {!string} indexname
    * @return {$.Promise} a promise that is resolved with an Array of FileInfo's
    */
    function getFileInfoList(indexName) {
        var result = new $.Deferred();

        if (!_indexList.hasOwnProperty(indexName)) {
            throw new Error("indexName not found");
        }

        syncFileIndex()
            .done(function () {
                result.resolve(_indexList[indexName].fileInfos);
            });

        return result.promise();
    }
    
    /**
     * Calls the filterFunction on every in the index specified by indexName
     * and return a a new list of FileInfo's
     * @param {!string}
     * @param {function({string})} filterFunction
     * @return {$.Promise} a promise that is resolved with an Array of FileInfo's
     */
    function getFilteredList(indexName, filterFunction) {
        var result = new $.Deferred();

        if (!_indexList.hasOwnProperty(indexName)) {
            throw new Error("indexName not found");
        }

        syncFileIndex()
            .done(function () {
                var resultList = [];
                getFileInfoList(indexName)
                    .done(function (fileList) {
                        resultList = fileList.filter(function (fileInfo) {
                            return filterFunction(fileInfo.name);
                        });

                        result.resolve(resultList);
                    });
            });

        return result.promise();
    }
    
    /**
     * returns an array of fileInfo's that match the filename parameter
     * @param {!string} indexName
     * @param {!filename}
     * @return {$.Promise} a promise that is resolved with an Array of FileInfo's
     */
    function getFilenameMatches(indexName, filename) {
        return getFilteredList(indexName, function (item) {
            return item === filename;
        });
    }
    
    /**
    * Add the indexes
    */

    _addIndex(
        "all",
        function (entry) {
            return true;
        }
    );

    _addIndex(
        "css",
        function (entry) {
            var filename = entry.name;
            return PathUtils.filenameExtension(filename) === ".css";
        }
    );
    
    $(ProjectManager).on("projectRootChanged", function (event, projectRoot) {
        markDirty();
    });

    exports.markDirty = markDirty;
    exports.getFileInfoList = getFileInfoList;
    exports.getFilenameMatches = getFilenameMatches;


});
/*
 * Copyright 2012 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false, CodeMirror: false */

/**
 * Set of utilities for simple parsing of CSS text.
 */
define('CSSUtils',['require','exports','module','Async','DocumentManager','FileIndexManager','NativeFileSystem'],function (require, exports, module) {
    'use strict';
    
    var Async               = require("Async"),
        DocumentManager     = require("DocumentManager"),
        FileIndexManager    = require("FileIndexManager"),
        NativeFileSystem    = require("NativeFileSystem").NativeFileSystem;

    /**
     * Extracts all CSS selectors from the given text
     * Returns an array of selectors. Each selector is an object with the following properties:
         selector:                 the text of the selector (note: comma separated selector groups like 
                                   "h1, h2" are broken into separate selectors)
         line:                     line in the text where the selector appears
         character:                column in the line where the selector starts
         selectorEndLine:          line where the selector ends
         selectorEndChar:          column where the selector ends
         selectorGroupStartLine:   line where the comma-separated selector group (e.g. .foo, .bar, .baz)
                                   starts that this selector (e.g. .baz) is part of. Particularly relevant for
                                   groups that are on multiple lines.
         selectorGroupStartChar:   column in line where the selector group starts.
         ruleStartLine:            line where the rules for the selector start
         ruleStartChar:            column in line where the rules for the selector start
         ruleEndLine:              line where the rules for the selector end
         ruleEndChar:              column in the line where the rules for the selector end
     * @param text {!String} CSS text to extract from
     * @return {Array.<Object>} Array with objects specifying selectors.
     */
    function extractAllSelectors(text) {
        var selectors = [];
        var mode = CodeMirror.getMode({indentUnit: 2}, "css");
        var state = CodeMirror.startState(mode);

        var lines = CodeMirror.splitLines(text);
        var lineCount = lines.length;
        
        var currentSelector = "", currentPosition = -1, selectorStartLine;
        var token, style, stream, i, j;

        var inRules = false;
        var selectorGroupStartLine = -1, selectorGroupStartChar = -1;
        var ruleStartLine = -1, ruleStartChar = -1;

        for (i = 0; i < lineCount; ++i) {
            if (currentSelector.trim() !== "") {
                // If we are in a current selector and starting a newline, make sure there is whitespace in the selector
                currentSelector += " ";
            }
            
            stream = new CodeMirror.StringStream(lines[i]);
            while (!stream.eol()) {
                style = mode.token(stream, state);
                token = stream.current();

                // DEBUG STATEMENT -- printer(token, style, i, stream.start, state.stack);

                if (state.stack.indexOf("{") === -1 && // not in a rule
                        (state.stack.length === 0 || state.stack[state.stack.length - 1] !== "@media") && // not parsing a media query
                        ((style === null && token !== "{" && token !== "}" && token !== ",") || (style !== null && style !== "comment" && style !== "meta"))) { // not at a non-selector token
                    // we're parsing a selector!
                    if (currentPosition < 0) { // start of a new selector
                        currentPosition = stream.start;
                        selectorStartLine = i;
                        if (selectorGroupStartLine < 0) {
                            // this is the start of a new comma-separated selector group
                            // (whenever we start parsing rules, we set selectorGroupStartLine to -1)
                            selectorGroupStartLine = selectorStartLine;
                            selectorGroupStartChar = currentPosition;
                        }
                    }
                    currentSelector += token;
                } else { // we aren't parsing a selector
                    if (currentSelector.trim() !== "") { // we have a selector, and we parsed something that is not part of a selector, so we just finished parsing a selector
                        selectors.push({selector: currentSelector.trim(),
                                        line: selectorStartLine,
                                        character: currentPosition,
                                        ruleEndLine: -1,
                                        selectorEndLine: i,
                                        selectorEndChar: stream.start - 1, // stream.start points to the first char of the non-selector token
                                        selectorGroupStartLine: selectorGroupStartLine,
                                        selectorGroupStartChar: selectorGroupStartChar
                                       });
                    }
                    currentSelector = "";
                    currentPosition = -1;

                    if (!inRules && state.stack.indexOf("{") > -1) { // just started parsing a rule
                        inRules = true;
                        ruleStartLine = i;
                        ruleStartChar = stream.start;

                        // Since we're now in a rule set, that means we also finished parsing the whole selector group.
                        // Therefore, reset selectorGroupStartLine so that next time we parse a selector we know it's a new group
                        selectorGroupStartLine = -1;
                        selectorGroupStartChar = -1;

                    } else if (inRules && state.stack.indexOf("{") === -1) {  // just finished parsing a rule
                        inRules = false;
                        // assign this rule position to every selector on the stack that doesn't have a rule start and end line
                        for (j = selectors.length - 1; j >= 0; j--) {
                            if (selectors[j].ruleEndLine !== -1) {
                                break;
                            } else {
                                selectors[j].ruleStartLine = ruleStartLine;
                                selectors[j].ruleStartChar = ruleStartChar;
                                selectors[j].ruleEndLine = i;
                                selectors[j].ruleEndChar = stream.pos - 1; // stream.pos actually points to the char after the }
                            }
                        }
                    }
                }

                // advance the stream past this token
                stream.start = stream.pos;
            }
        }

        return selectors;
    }
    
    /*
     * This code can be used to create an "independent" HTML document that can be passed to jQuery
     * calls. Allows using jQuery's CSS selector engine without actually putting anything in the browser's DOM
     *
    var _htmlDoctype = document.implementation.createDocumentType('html',
        '-//W3C//DTD XHTML 1.0 Strict//EN',
        'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'
    );
    var _htmlDocument = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', _htmlDoctype);

    function checkIfSelectorSelectsHTML(selector, theHTML) {
        $('html', _htmlDocument).html(theHTML);
        return ($(selector, _htmlDocument).length > 0);
    }
    */
    
    /**
     * Finds all instances of the specified selector in "text".
     * Returns an Array of Objects with start and end properties.
     *
     * For Sprint 4, we only support simple selectors. This function will need to change
     * dramatically to support full selectors.
     *
     * FUTURE: (JRB) It would be nice to eventually use the browser/jquery to do the selector evaluation.
     * One way to do this would be to take the user's HTML, add a special attribute to every tag with a UID,
     * and then construct a DOM (using the commented out code above). Then, give this DOM and the selector to 
     * jquery and ask what matches. If the node that the user's cursor is in comes back from jquery, then 
     * we know the selector applies.
     *
     * @param text {!String} CSS text to search
     * @param selector {!String} selector to search for
     * @return {Array.<{line:number, ruleEndLine:number}>} Array of objects containing the start
     *      and end line numbers (0-based, inclusive range) for each matched selector.
     */
    function _findAllMatchingSelectorsInText(text, selector) {
        var allSelectors = extractAllSelectors(text);
        var result = [];
        var i;
        
        // For sprint 4 we only match the rightmost simple selector, and ignore 
        // attribute selectors and pseudo selectors
        var classOrIdSelector = selector[0] === "." || selector[0] === "#";
        var prefix = "";
        
        // Escape initial "." in selector, if present.
        if (selector[0] === ".") {
            selector = "\\" + selector;
        }
        
        if (!classOrIdSelector) {
            // Tag selectors must have nothing or whitespace before it.
            selector = "(^|\\s)" + selector;
        }
        
        var re = new RegExp(selector + "(\\[[^\\]]*\\]|:{1,2}[\\w-()]+|\\.[\\w-]+|#[\\w-]+)*\\s*$", classOrIdSelector ? "" : "i");
        allSelectors.forEach(function (entry) {
            if (entry.selector.search(re) !== -1) {
                result.push(entry);
            } else if (!classOrIdSelector) {
                // Special case for tag selectors - match "*" as the rightmost character
                if (entry.selector.trim().search(/\*$/) !== -1) {
                    result.push(entry);
                }
            }
        });
        
        return result;
    }
    
    /**
     * Return all rules matching the specified selector.
     * For Sprint 4, we only look at the rightmost simple selector. For example, searching for ".foo" will 
     * match these rules:
     *  .foo {}
     *  div .foo {}
     *  div.foo {}
     *  div .foo[bar="42"] {}
     *  div .foo:hovered {}
     *  div .foo::first-child
     * but will *not* match these rules:
     *  .foobar {}
     *  .foo .bar {}
     *  div .foo .bar {}
     *  .foo.bar {}
     *
     * @param {!String} selector The selector to match. This can be a tag selector, class selector or id selector
     * @return {$.Promise} that will be resolved with an Array of objects containing the
     *      source document, start line, and end line (0-based, inclusive range) for each matching rule.
     *      Does not addRef() the documents returned in the array.
     */
    function findMatchingRules(selector) {
        var result          = new $.Deferred(),
            cssFilesResult  = FileIndexManager.getFileInfoList("css"),
            selectors       = [];
        
        function _loadFileAndScan(fullPath, selector) {
            var result = new $.Deferred();
            
            DocumentManager.getDocumentForPath(fullPath)
                .done(function (doc) {
                    var localResults = _findAllMatchingSelectorsInText(doc.getText(), selector);
                    var fileEntry = new NativeFileSystem.FileEntry(fullPath);
                    
                    localResults.forEach(function (value) {
                        selectors.push({
                            document: doc,
                            lineStart: value.selectorGroupStartLine,
                            lineEnd: value.ruleEndLine
                        });
                    });
                    result.resolve();
                })
                .fail(function (error) {
                    result.reject(error);
                });
        
            return result.promise();
        }
        
        cssFilesResult.done(function (fileInfos) {
            Async.doInParallel(fileInfos, function (fileInfo, number) {
                return _loadFileAndScan(fileInfo.fullPath, selector);
            })
                .done(function () {
                    result.resolve(selectors);
                })
                .fail(function (error) {
                    console.log("Error reading CSS files.");
                    result.reject(error);
                });
        });
        
        return result.promise();
    }
    
    exports._findAllMatchingSelectorsInText = _findAllMatchingSelectorsInText; // For testing only
    exports.findMatchingRules = findMatchingRules;
    exports.extractAllSelectors = extractAllSelectors;
});

/*
 * Copyright 2012 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false, CodeMirror: false */

/**
 * InlineEditorProviders contains providers for Brackets' various built-in code editors. "Provider"
 * essentially means "a function that you pass to EditorManager.registerInlineEditProvider()".
 */
define('InlineEditorProviders',['require','exports','module','CodeHintUtils','CSSUtils','DocumentManager','EditorManager','FileUtils','ProjectManager'],function (require, exports, module) {
    'use strict';
    
    // Load dependent modules
    var CodeHintUtils       = require("CodeHintUtils"),
        CSSUtils            = require("CSSUtils"),
        DocumentManager     = require("DocumentManager"),
        EditorManager       = require("EditorManager"),
        FileUtils           = require("FileUtils"),
        ProjectManager      = require("ProjectManager");

    // track divs to re-position manually
    var _htmlToCSSProviderContent   = [];
    
    /**
     * Reposition a .inlineCodeEditor .filename div { right: 20px; }
     * @private
     */
    function _updateInlineEditorFilename(holderWidth, filenameDiv) {
        var filenameWidth = $(filenameDiv).outerWidth();
        $(filenameDiv).css("left", holderWidth - filenameWidth - 40);
    }
    
    /**
     * Shows or hides the dirty indicator
     * @private
     */
    function _showDirtyIndicator($indicatorDiv, isDirty) {
        // Show or hide the dirty indicator by adjusting
        // the width of the div. The "hidden" width is 
        // 4 pixels to make the padding look correct.
        $indicatorDiv.css("width", isDirty ? 16 : 4);
    }
    
    /**
     * Returns editor holder width (not CodeMirror's width).
     * @private
     */
    function _editorHolderWidth() {
        return $("#editorHolder").width();
    }
    
    /**
     * Reposition all filename divs after a window resize.
     * @private
     */
    function _updateAllFilenames() {
        var holderWidth = _editorHolderWidth();
        
        _htmlToCSSProviderContent.forEach(function (value) {
            var filenameDiv = $(value).find(".filename");
            _updateInlineEditorFilename(holderWidth, filenameDiv);
        });
    }
    
    /**
     * Respond to dirty flag change event. If the dirty flag is associated with an inline editor,
     * show (or hide) the dirty indicator.
     * @private
     */
    function _dirtyFlagChangeHandler(event, doc) {
        
        _htmlToCSSProviderContent.forEach(function (value) {
            var $filenameDiv = $(value).find(".filename");
            // This only checks filename here. If there are multiple documents with the same filename
            // (in different directories), this test will fail.
            // TODO: This needs to be fixed by connecting this method with a specific inline editor's state
            if ($filenameDiv.text() === doc.file.name) {
                _showDirtyIndicator($filenameDiv.find(".dirty-indicator"), doc.isDirty);
            }
        });
    }
    
    /**
     * Stops tracking an editor after being removed from the document.
     * @private
     */
    function _inlineEditorRemoved(inlineContent) {
        var indexOf = _htmlToCSSProviderContent.indexOf(inlineContent);
        
        if (indexOf >= 0) {
            _htmlToCSSProviderContent.splice(indexOf, 1);
        }
        
        // stop listening for resize when all inline editors are closed
        if (_htmlToCSSProviderContent.length === 0) {
            $(window).off("resize", _updateAllFilenames);
            $(DocumentManager).off("dirtyFlagChange", _dirtyFlagChangeHandler);
        }
    }

    /**
     * Create an inline Editor UI showing a range of text within the given Document
     * 
     * @param {!Editor} parentEditor The parent editor that will contain the inline editor
     * @param {!Document} doc Document for the inline content
     * @param {!Number} startLine The first line to be shown in the inline editor 
     * @param {!Number} endLine The last line to be shown in the inline editor
     */
    function _showTextRangeInInlineEditor(parentEditor, doc, startLine, endLine) {
        var range = {
            startLine: startLine,
            endLine: endLine
        };
        
        var inlineInfo = EditorManager.createInlineEditorForDocument(parentEditor, doc, range);
        return inlineInfo;
    }
    
    /**
     * Given a position in an HTML editor, returns the relevant selector for the attribute/tag
     * surrounding that position, or "" if none is found.
     * @param {!Editor} editor
     * @private
     */
    function _getSelectorName(editor, pos) {
        var tagInfo = CodeHintUtils.getTagInfo(editor, pos),
            selectorName = "";
        
        if (tagInfo.position.tokenType === CodeHintUtils.TAG_NAME) {
            // Type selector
            selectorName = tagInfo.tagName;
        } else if (tagInfo.position.tokenType === CodeHintUtils.ATTR_NAME ||
                   tagInfo.position.tokenType === CodeHintUtils.ATTR_VALUE) {
            if (tagInfo.attr.name === "class") {
                // Class selector. We only look for the class name
                // that includes the insertion point. For example, if
                // the attribute is: 
                //   class="error-dialog modal hide"
                // and the insertion point is inside "modal", we want ".modal"
                var attributeValue = tagInfo.attr.value;
                var startIndex = attributeValue.substr(0, tagInfo.position.offset).lastIndexOf(" ");
                var endIndex = attributeValue.indexOf(" ", tagInfo.position.offset);
                selectorName = "." +
                    attributeValue.substring(
                        startIndex === -1 ? 0 : startIndex + 1,
                        endIndex === -1 ? attributeValue.length : endIndex
                    );
                
                // If the insertion point is surrounded by space, selectorName is "."
                // Check for that here
                if (selectorName === ".") {
                    selectorName = "";
                }
            } else if (tagInfo.attr.name === "id") {
                // ID selector
                selectorName = "#" + tagInfo.attr.value;
            }
        }
        
        return selectorName;
    }
    
    /**
     * Create the shadowing and filename tab for an inline editor.
     * TODO (issue #424): move to createInlineEditorFromText()
     * @private
     */
    function _createInlineEditorDecorations(editor, doc) {
        // create the filename div
        var filenameDiv = $('<div class="filename" style="visibility: hidden"/>')
            .append('<div class="dirty-indicator"/>')
            .append(doc.file.name);
        
        // add inline editor styling
        $(editor.getScrollerElement())
            .append('<div class="shadow top"/>')
            .append('<div class="shadow bottom"/>')
            .append(filenameDiv);

        // update the current inline editor immediately
        // use setTimeout to allow filenameDiv to render first
        setTimeout(function () {
            _updateInlineEditorFilename(_editorHolderWidth(), filenameDiv);
            _showDirtyIndicator(filenameDiv.find(".dirty-indicator"), doc.isDirty);
            filenameDiv.css("visibility", "");
        }, 0);
    }
    
    /**
     * When cursor is on an HTML tag name, class attribute, or id attribute, find associated
     * CSS rules and show (one/all of them) in an inline editor.
     *
     * @param {!Editor} editor
     * @param {!{line:Number, ch:Number}} pos
     * @return {$.Promise} a promise that will be resolved with:
     *      {{content:DOMElement, height:Number, onAdded:function(inlineId:Number), onClosed:function()}}
     *      or null if we're not going to provide anything.
     */
    function htmlToCSSProvider(editor, pos) {
        // Only provide a CSS editor when cursor is in HTML content
        if (editor._codeMirror.getOption("mode") !== "htmlmixed") {
            return null;
        }
        var htmlmixedState = editor._codeMirror.getTokenAt(pos).state;
        if (htmlmixedState.mode !== "html") {
            return null;
        }
        
        // Only provide CSS editor if the selection is an insertion point
        var sel = editor.getSelection(false);
        if (sel.start.line !== sel.end.line || sel.start.ch !== sel.end.ch) {
            return null;
        }
        
        var selectorName = _getSelectorName(editor, pos);
        if (selectorName === "") {
            return null;
        }

        var result = new $.Deferred();

        CSSUtils.findMatchingRules(selectorName)
            .done(function (rules) {
                if (rules && rules.length > 0) {
                    var rule = rules[0];  // For Sprint 4 we use the first match only
                    
                    var inlineInfo = _showTextRangeInInlineEditor(editor, rule.document, rule.lineStart, rule.lineEnd);
                    
                    // track inlineEditor content removal
                    var origOnClosed = inlineInfo.onClosed;
                    inlineInfo.onClosed = function () {
                        origOnClosed();
                        _inlineEditorRemoved(inlineInfo.content);
                    };
                    
                    _createInlineEditorDecorations(inlineInfo.editor, rule.document);
                    
                    _htmlToCSSProviderContent.push(inlineInfo.content);
                    
                    // Manually position filename div's. Can't use CSS positioning in this case
                    // since the label is relative to the window boundary, not CodeMirror.
                    if (_htmlToCSSProviderContent.length > 0) {
                        $(window).on("resize", _updateAllFilenames);
                        $(DocumentManager).on("dirtyFlagChange", _dirtyFlagChangeHandler);
                    }
                    
                    result.resolve(inlineInfo);
                } else {
                    // No matching rules were found.
                    result.reject();
                }
            })
            .fail(function () {
                console.log("Error in findMatchingRules()");
                result.reject();
            });
        
        return result.promise();
    }


    /** Initialize: register listeners */
    function init() {
        EditorManager.registerInlineEditProvider(htmlToCSSProvider);
    }
    
    // Define public API
    exports.init = init;
});

/*
 * Copyright 2011 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: true  */

/**
 * WorkingSetView generates the UI for the list of the files user is editing based on the model provided by EditorManager.
 * The UI allows the user to see what files are open/dirty and allows them to close files and specify the current editor.
 */
define('WorkingSetView',['require','exports','module','DocumentManager','CommandManager','Commands','EditorManager','FileViewController','NativeFileSystem','ViewUtils'],function (require, exports, module) {
    'use strict';

    // Load dependent modules
    var DocumentManager       = require("DocumentManager"),
        CommandManager        = require("CommandManager"),
        Commands              = require("Commands"),
        EditorManager         = require("EditorManager"),
        FileViewController    = require("FileViewController"),
        NativeFileSystem      = require("NativeFileSystem").NativeFileSystem,
        ViewUtils             = require("ViewUtils");
    
    
    /** Each list item in the working set stores a references to the related document in the list item's data.  
     *  Use listItem.data(_DOCUMENT_KEY) to get the document reference
     */
    var _DOCUMENT_KEY = "document";

    function _hideShowOpenFileHeader() {
        if (DocumentManager.getWorkingSet().length === 0) {
            $("#open-files-header").hide();
            $("#open-files-container").hide();
            $("#open-files-divider").hide();
        } else {
            $("#open-files-header").show();
            $("#open-files-container").show();
            $("#open-files-divider").show();
        }
        
        ViewUtils.updateChildrenToParentScrollwidth($("#open-files-container"));
    }
    
    /** 
     * Updates the appearance of the list element based on the parameters provided
     * @private
     * @param {!HTMLLIElement} listElement
     * @param {bool} isDirty 
     * @param {bool} canClose
     */
    function _updateFileStatusIcon(listElement, isDirty, canClose) {
        var fileStatusIcon = listElement.find(".file-status-icon");
        var showIcon = isDirty || canClose;

        // remove icon if its not needed
        if (!showIcon && fileStatusIcon.length !== 0) {
            fileStatusIcon.remove();
            fileStatusIcon = null;
            
        // create icon if its needed and doesn't exist
        } else if (showIcon && fileStatusIcon.length === 0) {
            
            fileStatusIcon = $("<div class='file-status-icon'></div>")
                .prependTo(listElement)
                .click(function () {
                    var doc = listElement.data(_DOCUMENT_KEY);
                    CommandManager.execute(Commands.FILE_CLOSE, {doc: doc});
                });
        }

        // Set icon's class
        if (fileStatusIcon) {
            fileStatusIcon.toggleClass("dirty", isDirty);
            fileStatusIcon.toggleClass("canClose", canClose);
        }
    }
    
    /** 
     * Updates the appearance of the list element based on the parameters provided.
    * @private
    * @param {HTMLLIElement} listElement
    * @param {Document} curDoc 
    */
    function _updateListItemSelection(listItem, curDoc) {
        $(listItem).toggleClass("selected", ($(listItem).data(_DOCUMENT_KEY) === curDoc));
    }

    /** 
     * Builds the UI for a new list item and inserts in into the end of the list
     * @private
     * @param {Document} document
     * @return {HTMLLIElement} newListItem
     */
    function _createNewListItem(doc) {
        var curDoc = DocumentManager.getCurrentDocument();

        // Create new list item with a link
        var link = $("<a href='#'></a>").text(doc.file.name);
        var newItem = $("<li></li>")
            .append(link)
            .data(_DOCUMENT_KEY, doc);

        $("#open-files-container > ul").append(newItem);

        // Update the listItem's apperance
        _updateFileStatusIcon(newItem, doc.isDirty, false);
        _updateListItemSelection(newItem, curDoc);

        newItem.click(function () {
            FileViewController.openAndSelectDocument(doc.file.fullPath, FileViewController.WORKING_SET_VIEW);
        });

        newItem.hover(
            function () {
                _updateFileStatusIcon($(this), doc.isDirty, true);
            },
            function () {
                _updateFileStatusIcon($(this), doc.isDirty, false);
            }
        );
    }
    
    /** 
     * Deletes all the list items in the view and rebuilds them from the working set model
     * @private
     */
    function _rebuildWorkingSet() {
        $("#open-files-container > ul").empty();

        DocumentManager.getWorkingSet().forEach(function (item) {
            _createNewListItem(item);
        });

        _hideShowOpenFileHeader();
    }
    
  /** 
    * @private
    */
    function _updateListSelection() {
        var doc;
        if (FileViewController.getFileSelectionFocus() === FileViewController.WORKING_SET_VIEW) {
            doc = DocumentManager.getCurrentDocument();
        } else {
            doc = null;
        }
            
        // Iterate through working set list and update the selection on each
        var items = $("#open-files-container > ul").children().each(function () {
            _updateListItemSelection(this, doc);
        });
    }

    /** 
    * @private
    */
    function _handleDocumentAdded(doc) {
        _createNewListItem(doc);
        _hideShowOpenFileHeader();
    }
    
    /** 
    * @private
    */
    function _handleDocumentSelectionChange() {
        _updateListSelection();
    }



    /** 
     * @private
     * @param {Document} curDoc 
     */
    function _closeDoc(doc) {
        CommandManager.execute(Commands.FILE_CLOSE, {doc: doc});
    }


    /** 
     * Finds the listItem item assocated with the doc. Returns null if not found.
    * @private
    * @param {Document} curDoc 
    * @return {HTMLLIItem}
    */
    function _findListItemFromDocument(doc) {
        var result = null;

        if (doc) {
            var items = $("#open-files-container > ul").children();
            items.each(function () {
                var listItem = $(this);
                if (listItem.data(_DOCUMENT_KEY) === doc) {
                    result = listItem;
                    return false;
                    // breaks each
                }
            });
        }

        return result;
    }

    /** 
    * @private
    * @param {Document} curDoc 
    */
    function _handleDocumentRemoved(doc) {
        var listItem = _findListItemFromDocument(doc);
        if (listItem) {
            listItem.remove();
        }

        _hideShowOpenFileHeader();
    }

    /** 
     * @private
     * @param {Document} curDoc 
     */
    function _handleDirtyFlagChanged(doc) {
        var listItem = _findListItemFromDocument(doc);
        if (listItem) {
            var canClose = $(listItem).find("canClose").length === 1;
            _updateFileStatusIcon(listItem, doc.isDirty, canClose);
        }

    }
    
    // Initialize: register listeners
    $(DocumentManager).on("workingSetAdd", function (event, addedDoc) {
        //console.log("Working set ++ " + addedDoc);
        //console.log("  set: " + DocumentManager.getWorkingSet().join());
        _handleDocumentAdded(addedDoc);
    });

    $(DocumentManager).on("workingSetRemove", function (event, removedDoc) {
        //console.log("Working set -- " + removedDoc);
        //console.log("  set: " + DocumentManager.getWorkingSet().join());
        _handleDocumentRemoved(removedDoc);
    });

    $(DocumentManager).on("dirtyFlagChange", function (event, doc) {
        //console.log("Dirty flag change: " + doc);
        _handleDirtyFlagChanged(doc);
    });

    $(FileViewController).on("documentSelectionFocusChange", function (event, eventTarget) {
        _handleDocumentSelectionChange();
    });

    _hideShowOpenFileHeader();


});

/*
 * Copyright 2012 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, FileError */

/**
 * FileSyncManager is a set of utilities to help track external modifications to the files and folders
 * in the currently open project.
 *
 * Currently, we look for external changes purely by checking file timestamps against the last-sync
 * timestamp recorded on Document. Later, we will use actual native directory-watching callbacks
 * instead.
 */
define('FileSyncManager',['require','exports','module','ProjectManager','DocumentManager','EditorManager','Commands','CommandManager','Async','Dialogs','strings','FileUtils'],function (require, exports, module) {
    'use strict';
    
    // Load dependent modules
    var ProjectManager      = require("ProjectManager"),
        DocumentManager     = require("DocumentManager"),
        EditorManager       = require("EditorManager"),
        Commands            = require("Commands"),
        CommandManager      = require("CommandManager"),
        Async               = require("Async"),
        Dialogs             = require("Dialogs"),
        Strings             = require("strings"),
        FileUtils           = require("FileUtils");

    
    /**
     * Guard to spot re-entrancy while syncOpenDocuments() is still in progress
     * @type {boolean}
     */
    var _alreadyChecking = false;
    
    /**
     * If true, we should bail from the syncOpenDocuments() process and then re-run it. See
     * comments in syncOpenDocuments() for how this works.
     * @type {boolean}
     */
    var _restartPending = false;
    
    /** @type {Array.<Document>} */
    var toReload;
    /** @type {Array.<Document>} */
    var toClose;
    /** @type {Array.<Document>} */
    var editConflicts;
    /** @type {Array.<Document>} */
    var deleteConflicts;
    
    
    /**
     * Scans all the given Documents for changes on disk, and sorts them into four buckets,
     * populating the corresponding arrays:
     *  toReload        - changed on disk; unchanged within Brackets
     *  toClose         - deleted on disk; unchanged within Brackets
     *  editConflicts   - changed on disk; also dirty in Brackets
     *  deleteConflicts - deleted on disk; also dirty in Brackets
     *
     * @param {!Array.<Document>} docs
     * @return {$.Deferred}  Resolved when all scanning done, or rejected immediately if there's any
     *      error while reading file timestamps. Errors are logged but no UI is shown.
     */
    function findExternalChanges(docs) {

        toReload = [];
        toClose = [];
        editConflicts = [];
        deleteConflicts = [];
    
        function checkDoc(doc) {
            var result = new $.Deferred();
            
            // Docs restored from last launch aren't really "open" yet, so skip those
            if (!doc.diskTimestamp) {
                result.resolve();
            } else {
                doc.file.getMetadata(
                    function (metadata) {
                        // Does file's timestamp differ from last sync time on the Document?
                        if (metadata.modificationTime.getTime() !== doc.diskTimestamp.getTime()) {
                            if (doc.isDirty) {
                                editConflicts.push(doc);
                            } else {
                                toReload.push(doc);
                            }
                        }
                        result.resolve();
                    },
                    function (error) {
                        // File has been deleted externally
                        if (error.code === FileError.NOT_FOUND_ERR) {
                            if (doc.isDirty) {
                                deleteConflicts.push(doc);
                            } else {
                                toClose.push(doc);
                            }
                            result.resolve();
                        } else {
                            // Some other error fetching metadata: treat as a real error
                            console.log("Error checking modification status of " + doc.file.fullPath, error.code);
                            result.reject();
                        }
                    }
                );
            }
            return result;
        }
        
        // Check all docs in parallel
        // (fail fast b/c we won't continue syncing if there was any error fetching timestamps)
        return Async.doInParallel(docs, checkDoc, true);
    }
    
    
    /**
     * Reloads the Document's contents from disk, discarding any unsaved changes in the editor.
     *
     * @param {!Document} doc
     * @return {$.Deferred} Resolved after editor has been refreshed; rejected if unable to load the
     *      file's new content. Errors are logged but no UI is shown.
     */
    function reloadDoc(doc) {
        
        var promise = FileUtils.readAsText(doc.file);
        
        promise.done(function (text, readTimestamp) {
            doc.refreshText(text, readTimestamp);
        });
        promise.fail(function (error) {
            console.log("Error reloading contents of " + doc.file.fullPath, error.code);
        });
        return promise;
    }
    
    /**
     * Reloads all the documents in "toReload" silently (no prompts). The operations are all run
     * in parallel.
     * @return {$.Deferred} Resolved/rejected after all reloads done; will be rejected if any one
     *      file's reload failed. Errors are logged (by reloadDoc()) but no UI is shown.
     */
    function reloadChangedDocs() {
        // Reload each doc in turn, and once all are (async) done, signal that we're done
        return Async.doInParallel(toReload, reloadDoc, false);
    }
    
    /**
     * @param {FileError} error
     * @param {!Document} doc
     * @return {$.Deferred}
     */
    function showReloadError(error, doc) {
        return Dialogs.showModalDialog(
            Dialogs.DIALOG_ID_ERROR,
            Strings.ERROR_RELOADING_FILE_TITLE,
            Strings.format(
                Strings.ERROR_RELOADING_FILE,
                doc.file.fullPath,
                FileUtils.getFileErrorString(error.code)
            )
        );
    }
    
    
    /**
     * Closes all the documents in "toClose" silently (no prompts). Completes synchronously.
     */
    function closeDeletedDocs() {
        toClose.forEach(function (doc) {
            DocumentManager.closeDocument(doc);
        });
    }
    
    
    /**
     * Walks through all the documents in "editConflicts" & "deleteConflicts" and prompts the user
     * about each one. Processing is sequential: if the user chooses to reload a document, the next
     * prompt is not shown until after the reload has completed.
     *
     * @return {$.Deferred} Resolved/rejected after all documents have been prompted and (if
     *      applicable) reloaded (and any resulting error UI has been dismissed). Rejected if any
     *      one reload failed.
     */
    function presentConflicts() {
        
        var allConflicts = editConflicts.concat(deleteConflicts);
        
        function presentConflict(doc, i) {
            var result = new $.Deferred();
            
            // If window has been re-focused, skip all remaining conflicts so the sync can bail & restart
            if (_restartPending) {
                result.resolve();
                return result;
            }
            
            var message;
            var dialogId;
            var toClose;
            
            // Prompt UI varies depending on whether the file on disk was modified vs. deleted
            if (i < editConflicts.length) {
                toClose = false;
                dialogId = Dialogs.DIALOG_ID_EXT_CHANGED;
                message = Strings.format(
                    Strings.EXT_MODIFIED_MESSAGE,
                    ProjectManager.makeProjectRelativeIfPossible(doc.file.fullPath)
                );
                
            } else {
                toClose = true;
                dialogId = Dialogs.DIALOG_ID_EXT_DELETED;
                message = Strings.format(
                    Strings.EXT_DELETED_MESSAGE,
                    ProjectManager.makeProjectRelativeIfPossible(doc.file.fullPath)
                );
            }
            
            Dialogs.showModalDialog(dialogId, Strings.EXT_MODIFIED_TITLE, message)
                .done(function (id) {
                    if (id === Dialogs.DIALOG_BTN_DONTSAVE) {
                        if (toClose) {
                            // Discard - close editor
                            DocumentManager.closeDocument(doc);
                            result.resolve();
                        } else {
                            // Discard - load changes from disk
                            reloadDoc(doc)
                                .done(function () {
                                    result.resolve();
                                })
                                .fail(function (error) {
                                    // Unable to load changed version from disk - show error UI
                                    showReloadError(error, doc)
                                        .always(function () {
                                            // After user dismisses, move on to next conflict prompt
                                            result.reject();
                                        });
                                });
                        }
                        
                    } else {
                        // Cancel - if user doesn't manually save or close, we'll prompt again next
                        // time window is reactivated;
                        // OR programmatically canceled due to _resetPending - we'll skip all
                        // remaining files in the conflicts list (see above)
                        result.resolve();
                    }
                });
            
            return result;
        }
        
        // Begin walking through the conflicts, one at a time
        return Async.doSequentially(allConflicts, presentConflict, false);
    }
    
    
    
    /**
     * Check to see whether any open files have been modified by an external app since the last time
     * Brackets synced up with the copy on disk (either by loading or saving the file). For clean
     * files, we silently upate the editor automatically. For files with unsaved changes, we prompt
     * the user.
     */
    function syncOpenDocuments() {
        
        // We can become "re-entrant" if the user leaves & then returns to Brackets before we're
        // done -- easy if a prompt dialog is left open. Since the user may have left Brackets to
        // revert some of the disk changes, etc. we want to cancel the current sync and immediately
        // begin a new one. We let the orig sync run until the user-visible dialog phase, then
        // bail; if we're already there we programmatically close the dialog to bail right away.
        if (_alreadyChecking) {
            _restartPending = true;
            
            // Close dialog if it was open. This will 'unblock' presentConflict(), which bails back
            // to us immediately upon seeing _restartPending. We then restart the sync - see below
            Dialogs.cancelModalDialogIfOpen(Dialogs.DIALOG_ID_EXT_CHANGED);
            Dialogs.cancelModalDialogIfOpen(Dialogs.DIALOG_ID_EXT_DELETED);
            
            return;
        }
        
        _alreadyChecking = true;
        
        
        // Syncing proceeds in four phases:
        //  1) Check all files for external modifications
        //  2) Refresh all editors that are clean (if file changed on disk)
        //  3) Close all editors that are clean (if file deleted on disk)
        //  4) Prompt about any editors that are dirty (if file changed/deleted on disk)
        // Each phase fully completes (asynchronously) before the next one begins.
        
        // 1) Check for external modifications
        var allDocs = DocumentManager.getAllOpenDocuments();
        
        findExternalChanges(allDocs)
            .done(function () {
                // 2) Reload clean docs as needed
                reloadChangedDocs()
                    .always(function () {
                        // 3) Close clean docs as needed
                        // This phase completes synchronously
                        closeDeletedDocs();
                        
                        // 4) Prompt for dirty editors (conflicts)
                        presentConflicts()
                            .always(function () {
                                if (_restartPending) {
                                    // Restart the sync if needed
                                    _restartPending = false;
                                    _alreadyChecking = false;
                                    syncOpenDocuments();
                                } else {
                                    // We're really done!
                                    _alreadyChecking = false;
                                    
                                    // If we showed a dialog, restore focus to editor
                                    if (editConflicts.length > 0 || deleteConflicts.length > 0) {
                                        EditorManager.focusEditor();
                                    }
                                    
                                    // (Any errors that ocurred during presentConflicts() have already
                                    // shown UI & been dismissed, so there's no fail() handler here)
                                }
                            });
                    });
                    // Note: if any auto-reloads failed, we silently ignore (after logging to console)
                    // and we still continue onto phase 4 and try to process those files anyway.
                    // (We'll retry the auto-reloads next time window is activated... and evenually
                    // we'll also be double checking before each Save).
                    
            }).fail(function () {
                // Unable to fetch timestamps for some reason - silently ignore (after logging to console)
                // (We'll retry next time window is activated... and evenually we'll also be double
                // checking before each Save).
                
                // We can't go on without knowing which files are dirty, so bail now
                _alreadyChecking = false;
            });
        
    }
    
    
    // Define public API
    exports.syncOpenDocuments = syncOpenDocuments;
});

/*
 * Copyright 2012 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false */

define('CodeHintManager',['require','exports','module','CodeHintUtils','EditorManager'],function (require, exports, module) {
    'use strict';
    
    // Load dependent modules
    var CodeHintUtils   = require("CodeHintUtils"),
        EditorManager   = require("EditorManager");
    
    /**
     * @private
     * Test functions to see if the hinting is working
     * @param {CodeMirror} editor An instance of a CodeMirror editor
     */
    function _triggerClassHint(editor, pos, tagInfo) {
        //console.log("_triggerClassHint called for tag: " + tagInfo.tagName + " and attr value: " + tagInfo.attr.value);
    }
    
    function _triggerIdHint(editor, pos, tagInfo) {
        //console.log("_triggerIdHint called for tag: " + tagInfo.tagName + " and attr value: " + tagInfo.attr.value);
    }
    
    /**
     * @private
     * Checks to see if this is an attribute value we can hint
     * @param {CodeMirror} editor An instance of a CodeMirror editor
     */
    function _checkForHint(editor) {
        var pos = editor.getCursor();
        var tagInfo = CodeHintUtils.getTagInfo(editor, pos);
        if (tagInfo.position.type === CodeHintUtils.ATTR_VALUE) {
            if (tagInfo.attr.name === "class") {
                _triggerClassHint(editor, pos, tagInfo);
            } else if (tagInfo.attr.name === "id") {
                _triggerIdHint(editor, pos, tagInfo);
            }
        }
    }
    
    /**
     * @private
     * Called whenever a CodeMirror editor gets a key event
     * @param {object} event the jQuery event for onKeyEvent
     * @param {CodeMirror} editor An instance of a CodeMirror editor
     * @param {object} keyboardEvent  the raw keyboard event that CM is handling
     */
    function _onKeyEvent(event, editor, keyboardEvent) {
        if (keyboardEvent.type !== "keypress") {
            return;
        }
        setTimeout(function () { _checkForHint(editor); }, 40);
    }
    
    // Register our listeners
    // Commenting out the code hinting for now. Uncomment this line to re-enable.
    // NOTE: this has gone stale a bit; individual Editors now dispatch a keyEvent event; there is
    // no global EditorManager event
    //$(EditorManager).on("onKeyEvent", _onKeyEvent);
    
    // Define public API
});

/*
 * Copyright 2011 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $ */

/*
* Displays an auto suggest popup list of files to allow the user to quickly navigate to a file.
* Uses FileIndexManger to supply the file list and registers Commands.FILE_QUICK_NAVIGATE with Brackets.
* 
* TODO (issue 333) - currently jquery smart auto complete is used for the popup list. While it mostly works
* it has several issues, so it should be replace with an alternative. Issues:
* - only accepts an array of strings. A list of objects is preferred to avoid some work arounds to display 
*   both the path and filename.
* - the popup position logic has flaws that require css work-arounds
* - the popup properties cannot be modified once the object is constructed
*/


define('QuickFileOpen',['require','exports','module','FileIndexManager','DocumentManager','CommandManager','EditorManager','Commands','ProjectManager'],function (require, exports, module) {
    'use strict';
    
    var FileIndexManager    = require("FileIndexManager"),
        DocumentManager     = require("DocumentManager"),
        CommandManager      = require("CommandManager"),
        EditorManager       = require("EditorManager"),
        Commands            = require("Commands"),
        ProjectManager      = require("ProjectManager");

    /**
    * QuickNavigateDialog class
    * @constructor
    *
    */
    function QuickNavigateDialog() {
        this.closed = false;
        this.result = null; // $.Deferred
    }

    /**
    * Creates a dialog div floating on top of the current code mirror editor
    */
    QuickNavigateDialog.prototype._createDialogDiv = function (template) {
        var wrap = $("#editorHolder")[0];
        this.dialog = wrap.insertBefore(document.createElement("div"), wrap.firstChild);
        this.dialog.className = "CodeMirror-dialog";
        this.dialog.innerHTML = '<div>' + template + '</div>';
    };

    function _filenameFromPath(path) {
        return path.slice(path.lastIndexOf("/") + 1, path.length);
    }
    
    /**
    * Closes the search dialog and resolves the promise that showDialog returned
    */
    QuickNavigateDialog.prototype._close = function (value) {
        if (this.closed) {
            return;
        }
        
        this.closed = true;
            
        this.dialog.parentNode.removeChild(this.dialog);

        $(".smart_autocomplete_container").remove();

        this.result.resolve(value);
    };
        
    /**
    * Shows the search dialog and initializes the auto suggestion list with filenames from the current project
    * @returns {$.Promise} a promise that is resolved when the dialgo closes with the string value from the search field
    */
    QuickNavigateDialog.prototype.showDialog = function () {
        var that = this;
        var fileInfoList;
        this.result = new $.Deferred();

        FileIndexManager.getFileInfoList("all")
            .done(function (filelistResult) {
                fileInfoList = filelistResult;
                var dialogHTML = 'Quick Open: <input type="text" autocomplete="off" id="quickFileOpenSearch" style="width: 30em">';
                that._createDialogDiv(dialogHTML);
                var closed = false;
                var searchField = $('input#quickFileOpenSearch');

                // auto suggest list helper function
                function _handleResultsFormatter(path) {
                    var filename = _filenameFromPath(path);
                    var rPath = ProjectManager.makeProjectRelativeIfPossible(path);
                    var boldName = filename.replace(new RegExp($('input#quickFileOpenSearch').val(), "gi"), "<strong>$&</strong>");
                    return "<li data-fullpath='" + encodeURIComponent(path) + "'>" + boldName +
                        "<br><span class='quickOpenPath'>" + rPath + "</span></li>";
                }

                // auto suggest list helper function
                function _handleFilter(term, source) {
                    var filteredList = $.map(source, function (fileInfo) {
                        // match term again filename only (not the path)
                        var path = fileInfo.fullPath;
                        var filename = _filenameFromPath(path);
                        if (filename.toLowerCase().indexOf(term.toLowerCase()) !== -1) {
                            return fileInfo.fullPath;
                        } else {
                            return null;
                        }
                    }).sort(function (a, b) {
                        // sort by filename
                        var filenameA = _filenameFromPath(a).toLowerCase();
                        var filenameB = _filenameFromPath(b).toLowerCase();
                        if (filenameA < filenameB) {
                            return -1;
                        } else if (filenameA > filenameB) {
                            return 1;
                        } else {
                            return 0;
                        }
                    });

                    return filteredList;
                }

                // Create the auto suggest list of filenames
                searchField.smartAutoComplete({
                    source: fileInfoList,
                    maxResults: 10,
                    forceSelect: false,
                    typeAhead: true,
                    filter: _handleFilter,
                    resultFormatter: _handleResultsFormatter
                });
        
                searchField.bind({
                    // close the dialog when the user selects an item
                    itemSelect: function (ev, selected_item) {
                        var value = decodeURIComponent($(selected_item).attr("data-fullpath"));
                        that._close(value);
                    },
        
                    keydown: function (e) {
                        var query = searchField.val();

                        // close the dialog when the ENTER (23) or ESC (27) key is pressed
                        if ((e.keyCode === 13 && query.charAt(0) === ":") || e.keyCode === 27) {
                            e.stopPropagation();
                            e.preventDefault();

                            // clear the query on ESC key
                            if (e.keyCode === 27) {
                                query = null;
                            }
                            
                            that._close(query);
                            EditorManager.focusEditor();
                        }
                    }

        
                });
        
                searchField.focus();
            });

        return this.result;
    };


        
    /**
    * Displays a non-modal embedded dialog above the code mirror edit that allows the user to quickly 
    * navigate to different files and parts of the current file.
    * The search field lists files in the project. The user can enter ":" followed by a line
    * number to navigate to a specific line in the current file.
    */
    function doFileSearch() {

        var dialog = new QuickNavigateDialog();
        dialog.showDialog()
            .done(function (query) {
                if (query) {
                    if (query.charAt(0) === ":") {
                        var lineNumber = parseInt(query.slice(1, query.length), 10);
                        if (!isNaN(lineNumber)) {
                            var editor = EditorManager.getCurrentFullEditor();
                            editor.setCursorPos(lineNumber - 1, 0);
                        }
                    } else {
                        CommandManager.execute(Commands.FILE_OPEN, {fullPath: query});
                    }
                }
            });
    }

    CommandManager.register(Commands.FILE_QUICK_NAVIGATE, doFileSearch);
});
/*
 * Copyright 2012 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false, JSLINT: false, PathUtils: false*/

define('JSLint',['require','exports','module','thirdparty/path-utils/path-utils.min','thirdparty/jslint/jslint','DocumentManager','EditorManager'],function (require, exports, module) {
    'use strict';
    
    // Load dependent non-module scripts
    require("thirdparty/path-utils/path-utils.min");
    require("thirdparty/jslint/jslint");
    
    // Load dependent modules
    var DocumentManager         = require("DocumentManager"),
        EditorManager           = require("EditorManager");
    
    var _enabled = true;
    
    function getEnabled() {
        return _enabled;
    }
    
    function setEnabled(enabled) {
        _enabled = enabled;
    }
    
    
    function run() {
        var currentDoc = DocumentManager.getCurrentDocument();
        var ext = currentDoc ? PathUtils.filenameExtension(currentDoc.file.fullPath) : "";
        var lintResults = $("#jslint-results");
        var goldStar = $("#gold-star");
        
        if (getEnabled() && /^(\.js|\.htm|\.html)$/i.test(ext)) {
            var text = currentDoc.getText();
            
            // If a line contains only whitespace, remove the whitespace
            // This should be doable with a regexp: text.replace(/\r[\x20|\t]+\r/g, "\r\r");,
            // but that doesn't work.
            var i, arr = text.split("\n");
            for (i = 0; i < arr.length; i++) {
                if (!arr[i].match(/\S/)) {
                    arr[i] = "";
                }
            }
            text = arr.join("\n");
            
            var result = JSLINT(text, null);
            
            if (!result) {
                var errorTable = $("<table class='zebra-striped condensed-table'>")
                                   .append("<tbody>");
                var selectedRow;
                
                JSLINT.errors.forEach(function (item, i) {
                    if (item) {
                        var makeCell = function (content) {
                            return $("<td/>").text(content);
                        };
                        
                        // Add row to error table
                        var row = $("<tr/>")
                            .append(makeCell(item.line))
                            .append(makeCell(item.reason))
                            .append(makeCell(item.evidence || ""))
                            .appendTo(errorTable);
                        
                        row.click(function () {
                            if (selectedRow) {
                                selectedRow.removeClass("selected");
                            }
                            row.addClass("selected");
                            selectedRow = row;
                            
                            var editor = EditorManager.getCurrentFullEditor();
                            editor.setCursorPos(item.line - 1, item.character - 1);
                            EditorManager.focusEditor();
                        });
                    }
                });

                $("#jslint-results .table-container")
                    .empty()
                    .append(errorTable);
                lintResults.show();
                goldStar.hide();
            } else {
                lintResults.hide();
                goldStar.show();
            }
        } else {
            // JSLint is disabled or does not apply to the current file, hide
            // both the results and the gold star
            lintResults.hide();
            goldStar.hide();
        }
        
        EditorManager.resizeEditor();
    }
    
    
    //register our event listeners
    $(DocumentManager).on("currentDocumentChange", function () {
        run();
    });
    
    $(DocumentManager).on("documentSaved", function (event, document) {
        if (document === DocumentManager.getCurrentDocument()) {
            run();
        }
    });
    
    // Define public API
    exports.run = run;
    exports.getEnabled = getEnabled;
    exports.setEnabled = setEnabled;
});

/*
 * Copyright 2011 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, $: false*/

define('DebugCommandHandlers',['require','exports','module','Commands','CommandManager','JSLint','PerfUtils'],function (require, exports, module) {
    'use strict';
    
    var Commands                = require("Commands"),
        CommandManager          = require("CommandManager"),
        JSLint                  = require("JSLint"),
        PerfUtils               = require("PerfUtils");
    
    function _handleEnableJSLint() {
        JSLint.setEnabled(!JSLint.getEnabled());
        JSLint.run();
        $("#jslint-enabled-checkbox").css("display", JSLint.getEnabled() ? "" : "none");
    }
    
    // Implements the 'Run Tests' menu to bring up the Jasmine unit test window
    var _testWindow = null;
    function _handleRunUnitTests() {
        if (_testWindow) {
            try {
                _testWindow.location.reload();
            } catch (e) {
                _testWindow = null;  // the window was probably closed
            }
        }

        if (!_testWindow) {
            _testWindow = window.open("../test/SpecRunner.html");
            _testWindow.location.reload(); // if it was opened before, we need to reload because it will be cached
        }
    }
    
    function _handleShowPerfData() {
        var perfHeader = $("<div class='modal-header' />")
            .append("<a href='#' class='close'>&times;</a>")
            .append("<h3 class='dialog-title'>Performance Data</h3>");
        
        var perfBody = $("<div class='modal-body' style='padding: 0' />");

        var data = $("<table class='zebra-striped condensed-table' style='max-height: 600px; overflow: auto;'>")
            .append("<thead><th>Operation</th><th>Time (ms)</th></thead>")
            .append("<tbody />")
            .appendTo(perfBody);
        
        var makeCell = function (content) {
            return $("<td/>").text(content);
        };
        
        var getValue = function (entry) {
            // entry is either an Array or a number
            // If it is an Array, return the average value
            if (Array.isArray(entry)) {
                var i, sum = 0;
                
                for (i = 0; i < entry.length; i++) {
                    sum += entry[i];
                }
                return String(Math.floor(sum / entry.length)) + " (avg)";
            } else {
                return entry;
            }
        };
            
        var testName;
        var perfData = PerfUtils.perfData;
        for (testName in perfData) {
            if (perfData.hasOwnProperty(testName)) {
                // Add row to error table
                var row = $("<tr/>")
                    .append(makeCell(testName))
                    .append(makeCell(getValue(perfData[testName])))
                    .appendTo(data);
            }
        }
                                                     
        var perfDlog = $("<div class='modal hide' />")
            .append(perfHeader)
            .append(perfBody)
            .appendTo(document.body)
            .modal({
                backdrop: "static",
                show: true
            });
    }
    
    function _handleNewBracketsWindow() {
        window.open(window.location.href);
    }
    
    CommandManager.register(Commands.DEBUG_JSLINT, _handleEnableJSLint);
    CommandManager.register(Commands.DEBUG_RUN_UNIT_TESTS, _handleRunUnitTests);
    CommandManager.register(Commands.DEBUG_SHOW_PERF_DATA, _handleShowPerfData);
    CommandManager.register(Commands.DEBUG_NEW_BRACKETS_WINDOW, _handleNewBracketsWindow);
});

/*
 * Copyright 2011 Adobe Systems Incorporated. All Rights Reserved.
 */

/*jslint vars: true, plusplus: true, devel: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define: false, brackets: true, $: false, PathUtils: false */

/**
 * brackets is the root of the Brackets codebase. This file pulls in all other modules as
 * dependencies (or dependencies thereof), initializes the UI, and binds global menus & keyboard
 * shortcuts to their Commands.
 *
 * TODO: (issue #264) break out the definition of brackets into a separate module from the application controller logic
 *
 * Unlike other modules, this one can be accessed without an explicit require() because it exposes
 * a global object, window.brackets.
 */
define('brackets',['require','exports','module','widgets/bootstrap-dropdown','widgets/bootstrap-modal','thirdparty/path-utils/path-utils.min','thirdparty/smart-auto-complete/jquery.smart_autocomplete','ProjectManager','DocumentManager','EditorManager','InlineEditorProviders','WorkingSetView','FileCommandHandlers','FileViewController','FileSyncManager','KeyBindingManager','KeyMap','Commands','CommandManager','CodeHintManager','PerfUtils','FileIndexManager','QuickFileOpen','Menus','JSLint','CodeHintManager','DebugCommandHandlers','PreferencesManager','CommandManager','CSSUtils','ShellAPI'],function (require, exports, module) {
    'use strict';
    
    // Load dependent non-module scripts
    require("widgets/bootstrap-dropdown");
    require("widgets/bootstrap-modal");
    require("thirdparty/path-utils/path-utils.min");
    require("thirdparty/smart-auto-complete/jquery.smart_autocomplete");

    
    // Load dependent modules
    var ProjectManager          = require("ProjectManager"),
        DocumentManager         = require("DocumentManager"),
        EditorManager           = require("EditorManager"),
        InlineEditorProviders   = require("InlineEditorProviders"),
        WorkingSetView          = require("WorkingSetView"),
        FileCommandHandlers     = require("FileCommandHandlers"),
        FileViewController      = require("FileViewController"),
        FileSyncManager         = require("FileSyncManager"),
        KeyBindingManager       = require("KeyBindingManager"),
        KeyMap                  = require("KeyMap"),
        Commands                = require("Commands"),
        CommandManager          = require("CommandManager"),
        CodeHintManager         = require("CodeHintManager"),
        PerfUtils               = require("PerfUtils"),
        FileIndexManager        = require("FileIndexManager"),
        QuickFileOpen           = require("QuickFileOpen"),
        Menus                   = require("Menus");
    
    //Load modules the self-register and just need to get included in the main project
    require("JSLint");
    require("CodeHintManager");
    require("DebugCommandHandlers");

    // Define core brackets namespace if it isn't already defined
    //
    // We can't simply do 'brackets = {}' to define it in the global namespace because
    // we're in "use strict" mode. Most likely, 'window' will always point to the global
    // object when this code is running. However, in case it isn't (e.g. if we're running 
    // inside Node for CI testing) we use this trick to get the global object.
    //
    // Taken from:
    //   http://stackoverflow.com/questions/3277182/how-to-get-the-global-object-in-javascript
    var Fn = Function, global = (new Fn('return this'))();
    if (!global.brackets) {
        global.brackets = {};
    }
    
    // TODO: (issue #265) Make sure the "test" object is not included in final builds
    // All modules that need to be tested from the context of the application
    // must to be added to this object. The unit tests cannot just pull
    // in the modules since they would run in context of the unit test window,
    // and would not have access to the app html/css.
    brackets.test = {
        PreferencesManager      : require("PreferencesManager"),
        ProjectManager          : ProjectManager,
        FileCommandHandlers     : FileCommandHandlers,
        FileViewController      : FileViewController,
        DocumentManager         : DocumentManager,
        EditorManager           : EditorManager,
        Commands                : Commands,
        WorkingSetView          : WorkingSetView,
        CommandManager          : require("CommandManager"),
        FileIndexManager        : FileIndexManager,
        CSSUtils                : require("CSSUtils")
    };
    
    // Uncomment the following line to force all low level file i/o routines to complete
    // asynchronously. This should only be done for testing/debugging.
    // NOTE: Make sure this line is commented out again before committing!
    //brackets.forceAsyncCallbacks = true;

    // Load native shell when brackets is run in a native shell rather than the browser
    // TODO: (issue #266) load conditionally
    brackets.shellAPI = require("ShellAPI");
    
    brackets.inBrowser = !brackets.hasOwnProperty("fs");
    
    brackets.platform = (global.navigator.platform === "MacIntel" || global.navigator.platform === "MacPPC") ? "mac" : "win";

    // Main Brackets initialization
    $(document).ready(function () {
        
        function initListeners() {
            // Prevent unhandled drag and drop of files into the browser from replacing 
            // the entire Brackets app. This doesn't prevent children from choosing to
            // handle drops.
            $(document.body)
                .on("dragover", function (event) {
                    if (event.originalEvent.dataTransfer.files) {
                        event.stopPropagation();
                        event.preventDefault();
                        event.originalEvent.dataTransfer.dropEffect = "none";
                    }
                })
                .on("drop", function (event) {
                    if (event.originalEvent.dataTransfer.files) {
                        event.stopPropagation();
                        event.preventDefault();
                    }
                });
        }
        
        function initProject() {
            ProjectManager.loadProject();

            // Open project button
            $("#btn-open-project").click(function () {
                ProjectManager.openProject();
            });


            // Handle toggling top level disclosure arrows of file list area
            $("#open-files-header").click(function () {
                $("#open-files-disclosure-arrow").toggleClass("disclosure-arrow-closed");
                $("#open-files-container").toggle();
            });
            $("#project-files-header").click(function () {
                $("#project-files-disclosure-arrow").toggleClass("disclosure-arrow-closed");
                $("#project-files-container").toggle();
            });
        }
        
        
        function initCommandHandlers() {
            FileCommandHandlers.init($("#main-toolbar .title"));
        }

        function initKeyBindings() {
            // Register keymaps and install the keyboard handler
            // TODO: (issue #268) show keyboard equivalents in the menus
            var _globalKeymap = KeyMap.create({
                "bindings": [
                    {"Ctrl-O": Commands.FILE_OPEN},
                    {"Ctrl-S": Commands.FILE_SAVE},
                    {"Ctrl-W": Commands.FILE_CLOSE},
                    {"Ctrl-Shift-O": Commands.FILE_QUICK_NAVIGATE},
                    {"Ctrl-R": Commands.FILE_RELOAD, "platform": "mac"},
                    {"F5"    : Commands.FILE_RELOAD, "platform": "win"}
                ],
                "platform": brackets.platform
            });
            KeyBindingManager.installKeymap(_globalKeymap);

            $(document.body).keydown(function (event) {
                if (KeyBindingManager.handleKey(KeyMap.translateKeyboardEvent(event))) {
                    event.preventDefault();
                }
            });
        }
        
        function initWindowListeners() {
            // TODO: (issue 269) to support IE, need to listen to document instead (and even then it may not work when focus is in an input field?)
            $(window).focus(function () {
                FileSyncManager.syncOpenDocuments();
                FileIndexManager.markDirty();
            });
            
            $(window).unload(function () {
                CommandManager.execute(Commands.FILE_CLOSE_WINDOW);
            });
            
            $(window).contextmenu(function (e) {
                e.preventDefault();
            });
        }


        EditorManager.setEditorHolder($('#editorHolder'));
        InlineEditorProviders.init();
    
        initListeners();
        initProject();
        Menus.init();
        initCommandHandlers();
        initKeyBindings();
        initWindowListeners();
        
        PerfUtils.addMeasurement("Application Startup");
    });
    
});
