var CD=Object.create;var xg=Object.defineProperty;var PD=Object.getOwnPropertyDescriptor;var DD=Object.getOwnPropertyNames;var ID=Object.getPrototypeOf,OD=Object.prototype.hasOwnProperty;var bg=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),LD=(n,e)=>{for(var t in e)xg(n,t,{get:e[t],enumerable:!0})},_D=(n,e,t,A)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of DD(e))!OD.call(n,r)&&r!==t&&xg(n,r,{get:()=>e[r],enumerable:!(A=PD(e,r))||A.enumerable});return n};var ch=(n,e,t)=>(t=n!=null?CD(ID(n)):{},_D(e||!n||!n.__esModule?xg(t,"default",{value:n,enumerable:!0}):t,n));var gE=bg((n0,mE)=>{(function(n,e){typeof n0=="object"?mE.exports=e():typeof define=="function"&&define.amd?define(e):n.Alea=e()})(n0,function(){"use strict";return n.importState=function(t){var A=new n;return A.importState(t),A},n;function n(){return function(t){var A=0,r=0,i=0,s=1;t.length==0&&(t=[+new Date]);var o=e();A=o(" "),r=o(" "),i=o(" ");for(var a=0;a<t.length;a++)A-=o(t[a]),A<0&&(A+=1),r-=o(t[a]),r<0&&(r+=1),i-=o(t[a]),i<0&&(i+=1);o=null;var c=function(){var l=2091639*A+s*23283064365386963e-26;return A=r,r=i,i=l-(s=l|0)};return c.next=c,c.uint32=function(){return c()*4294967296},c.fract53=function(){return c()+(c()*2097152|0)*11102230246251565e-32},c.version="Alea 0.9",c.args=t,c.exportState=function(){return[A,r,i,s]},c.importState=function(l){A=+l[0]||0,r=+l[1]||0,i=+l[2]||0,s=+l[3]||0},c}(Array.prototype.slice.call(arguments))}function e(){var t=4022871197,A=function(r){r=r.toString();for(var i=0;i<r.length;i++){t+=r.charCodeAt(i);var s=.02519603282416938*t;t=s>>>0,s-=t,s*=t,t=s>>>0,s-=t,t+=s*4294967296}return(t>>>0)*23283064365386963e-26};return A.version="Mash 0.9",A}})});var O0=bg((Kp,CC)=>{(function(n,e){typeof Kp=="object"&&typeof CC<"u"?e(Kp):typeof define=="function"&&define.amd?define(["exports"],e):e((n=typeof globalThis<"u"?globalThis:n||self).SVDJS={})})(Kp,function(n){"use strict";n.SVD=function(e,t,A,r,i){if(t=t===void 0||t,A=A===void 0||A,i=1e-64/(r=r||Math.pow(2,-52)),!e)throw new TypeError("Matrix a is not defined");var s,o,a,c,l,u,d,h,f,p,m,g,y=e[0].length,x=e.length;if(x<y)throw new TypeError("Invalid matrix: m < n");for(var b=[],w=[],T=[],M=t==="f"?x:y,v=p=d=0;v<x;v++)w[v]=new Array(M).fill(0);for(v=0;v<y;v++)T[v]=new Array(y).fill(0);var E,C=new Array(y).fill(0);for(v=0;v<x;v++)for(s=0;s<y;s++)w[v][s]=e[v][s];for(v=0;v<y;v++){for(b[v]=d,f=0,a=v+1,s=v;s<x;s++)f+=Math.pow(w[s][v],2);if(f<i)d=0;else for(h=(u=w[v][v])*(d=u<0?Math.sqrt(f):-Math.sqrt(f))-f,w[v][v]=u-d,s=a;s<y;s++){for(f=0,o=v;o<x;o++)f+=w[o][v]*w[o][s];for(u=f/h,o=v;o<x;o++)w[o][s]=w[o][s]+u*w[o][v]}for(C[v]=d,f=0,s=a;s<y;s++)f+=Math.pow(w[v][s],2);if(f<i)d=0;else{for(h=(u=w[v][v+1])*(d=u<0?Math.sqrt(f):-Math.sqrt(f))-f,w[v][v+1]=u-d,s=a;s<y;s++)b[s]=w[v][s]/h;for(s=a;s<x;s++){for(f=0,o=a;o<y;o++)f+=w[s][o]*w[v][o];for(o=a;o<y;o++)w[s][o]=w[s][o]+f*b[o]}}p<(m=Math.abs(C[v])+Math.abs(b[v]))&&(p=m)}if(A)for(v=y-1;0<=v;v--){if(d!==0){for(h=w[v][v+1]*d,s=a;s<y;s++)T[s][v]=w[v][s]/h;for(s=a;s<y;s++){for(f=0,o=a;o<y;o++)f+=w[v][o]*T[o][s];for(o=a;o<y;o++)T[o][s]=T[o][s]+f*T[o][v]}}for(s=a;s<y;s++)T[v][s]=0,T[s][v]=0;T[v][v]=1,d=b[v],a=v}if(t){if(t==="f")for(v=y;v<x;v++){for(s=y;s<x;s++)w[v][s]=0;w[v][v]=1}for(v=y-1;0<=v;v--){for(a=v+1,d=C[v],s=a;s<M;s++)w[v][s]=0;if(d!==0){for(h=w[v][v]*d,s=a;s<M;s++){for(f=0,o=a;o<x;o++)f+=w[o][v]*w[o][s];for(u=f/h,o=v;o<x;o++)w[o][s]=w[o][s]+u*w[o][v]}for(s=v;s<x;s++)w[s][v]=w[s][v]/d}else for(s=v;s<x;s++)w[s][v]=0;w[v][v]=w[v][v]+1}}for(r*=p,o=y-1;0<=o;o--)for(var P=0;P<50;P++){for(E=!1,a=o;0<=a;a--){if(Math.abs(b[a])<=r){E=!0;break}if(Math.abs(C[a-1])<=r)break}if(!E){for(l=0,c=a-(f=1),v=a;v<o+1&&(u=f*b[v],b[v]=l*b[v],!(Math.abs(u)<=r));v++)if(d=C[v],C[v]=Math.sqrt(u*u+d*d),l=d/(h=C[v]),f=-u/h,t)for(s=0;s<x;s++)m=w[s][c],g=w[s][v],w[s][c]=m*l+g*f,w[s][v]=-m*f+g*l}if(g=C[o],a===o){if(g<0&&(C[o]=-g,A))for(s=0;s<y;s++)T[s][o]=-T[s][o];break}for(p=C[a],u=(((m=C[o-1])-g)*(m+g)+((d=b[o-1])-(h=b[o]))*(d+h))/(2*h*m),d=Math.sqrt(u*u+1),u=((p-g)*(p+g)+h*(m/(u<0?u-d:u+d)-h))/p,v=a+(f=l=1);v<o+1;v++){if(d=b[v],m=C[v],h=f*d,d*=l,g=Math.sqrt(u*u+h*h),u=p*(l=u/(b[v-1]=g))+d*(f=h/g),d=-p*f+d*l,h=m*f,m*=l,A)for(s=0;s<y;s++)p=T[s][v-1],g=T[s][v],T[s][v-1]=p*l+g*f,T[s][v]=-p*f+g*l;if(g=Math.sqrt(u*u+h*h),u=(l=u/(C[v-1]=g))*d+(f=h/g)*m,p=-f*d+l*m,t)for(s=0;s<x;s++)m=w[s][v-1],g=w[s][v],w[s][v-1]=m*l+g*f,w[s][v]=-m*f+g*l}b[a]=0,b[o]=u,C[o]=p}for(v=0;v<y;v++)C[v]<r&&(C[v]=0);return{u:w,q:C,v:T}},n.VERSION="1.1.1",Object.defineProperty(n,"__esModule",{value:!0})})});var BC=bg(sm=>{(function(){"use strict";var n=function(){this.init()};n.prototype={init:function(){var l=this||e;return l._counter=1e3,l._html5AudioPool=[],l.html5PoolSize=10,l._codecs={},l._howls=[],l._muted=!1,l._volume=1,l._canPlayEvent="canplaythrough",l._navigator=typeof window<"u"&&window.navigator?window.navigator:null,l.masterGain=null,l.noAudio=!1,l.usingWebAudio=!0,l.autoSuspend=!0,l.ctx=null,l.autoUnlock=!0,l._setup(),l},volume:function(l){var u=this||e;if(l=parseFloat(l),u.ctx||c(),typeof l<"u"&&l>=0&&l<=1){if(u._volume=l,u._muted)return u;u.usingWebAudio&&u.masterGain.gain.setValueAtTime(l,e.ctx.currentTime);for(var d=0;d<u._howls.length;d++)if(!u._howls[d]._webAudio)for(var h=u._howls[d]._getSoundIds(),f=0;f<h.length;f++){var p=u._howls[d]._soundById(h[f]);p&&p._node&&(p._node.volume=p._volume*l)}return u}return u._volume},mute:function(l){var u=this||e;u.ctx||c(),u._muted=l,u.usingWebAudio&&u.masterGain.gain.setValueAtTime(l?0:u._volume,e.ctx.currentTime);for(var d=0;d<u._howls.length;d++)if(!u._howls[d]._webAudio)for(var h=u._howls[d]._getSoundIds(),f=0;f<h.length;f++){var p=u._howls[d]._soundById(h[f]);p&&p._node&&(p._node.muted=l?!0:p._muted)}return u},stop:function(){for(var l=this||e,u=0;u<l._howls.length;u++)l._howls[u].stop();return l},unload:function(){for(var l=this||e,u=l._howls.length-1;u>=0;u--)l._howls[u].unload();return l.usingWebAudio&&l.ctx&&typeof l.ctx.close<"u"&&(l.ctx.close(),l.ctx=null,c()),l},codecs:function(l){return(this||e)._codecs[l.replace(/^x-/,"")]},_setup:function(){var l=this||e;if(l.state=l.ctx&&l.ctx.state||"suspended",l._autoSuspend(),!l.usingWebAudio)if(typeof Audio<"u")try{var u=new Audio;typeof u.oncanplaythrough>"u"&&(l._canPlayEvent="canplay")}catch{l.noAudio=!0}else l.noAudio=!0;try{var u=new Audio;u.muted&&(l.noAudio=!0)}catch{}return l.noAudio||l._setupCodecs(),l},_setupCodecs:function(){var l=this||e,u=null;try{u=typeof Audio<"u"?new Audio:null}catch{return l}if(!u||typeof u.canPlayType!="function")return l;var d=u.canPlayType("audio/mpeg;").replace(/^no$/,""),h=l._navigator?l._navigator.userAgent:"",f=h.match(/OPR\/([0-6].)/g),p=f&&parseInt(f[0].split("/")[1],10)<33,m=h.indexOf("Safari")!==-1&&h.indexOf("Chrome")===-1,g=h.match(/Version\/(.*?) /),y=m&&g&&parseInt(g[1],10)<15;return l._codecs={mp3:!!(!p&&(d||u.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(u.canPlayType('audio/wav; codecs="1"')||u.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!u.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!u.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(u.canPlayType("audio/x-m4a;")||u.canPlayType("audio/m4a;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(u.canPlayType("audio/x-m4b;")||u.canPlayType("audio/m4b;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(u.canPlayType("audio/x-mp4;")||u.canPlayType("audio/mp4;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!y&&u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!y&&u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!u.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(u.canPlayType("audio/x-flac;")||u.canPlayType("audio/flac;")).replace(/^no$/,"")},l},_unlockAudio:function(){var l=this||e;if(!(l._audioUnlocked||!l.ctx)){l._audioUnlocked=!1,l.autoUnlock=!1,!l._mobileUnloaded&&l.ctx.sampleRate!==44100&&(l._mobileUnloaded=!0,l.unload()),l._scratchBuffer=l.ctx.createBuffer(1,1,22050);var u=function(d){for(;l._html5AudioPool.length<l.html5PoolSize;)try{var h=new Audio;h._unlocked=!0,l._releaseHtml5Audio(h)}catch{l.noAudio=!0;break}for(var f=0;f<l._howls.length;f++)if(!l._howls[f]._webAudio)for(var p=l._howls[f]._getSoundIds(),m=0;m<p.length;m++){var g=l._howls[f]._soundById(p[m]);g&&g._node&&!g._node._unlocked&&(g._node._unlocked=!0,g._node.load())}l._autoResume();var y=l.ctx.createBufferSource();y.buffer=l._scratchBuffer,y.connect(l.ctx.destination),typeof y.start>"u"?y.noteOn(0):y.start(0),typeof l.ctx.resume=="function"&&l.ctx.resume(),y.onended=function(){y.disconnect(0),l._audioUnlocked=!0,document.removeEventListener("touchstart",u,!0),document.removeEventListener("touchend",u,!0),document.removeEventListener("click",u,!0),document.removeEventListener("keydown",u,!0);for(var x=0;x<l._howls.length;x++)l._howls[x]._emit("unlock")}};return document.addEventListener("touchstart",u,!0),document.addEventListener("touchend",u,!0),document.addEventListener("click",u,!0),document.addEventListener("keydown",u,!0),l}},_obtainHtml5Audio:function(){var l=this||e;if(l._html5AudioPool.length)return l._html5AudioPool.pop();var u=new Audio().play();return u&&typeof Promise<"u"&&(u instanceof Promise||typeof u.then=="function")&&u.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(l){var u=this||e;return l._unlocked&&u._html5AudioPool.push(l),u},_autoSuspend:function(){var l=this;if(!(!l.autoSuspend||!l.ctx||typeof l.ctx.suspend>"u"||!e.usingWebAudio)){for(var u=0;u<l._howls.length;u++)if(l._howls[u]._webAudio){for(var d=0;d<l._howls[u]._sounds.length;d++)if(!l._howls[u]._sounds[d]._paused)return l}return l._suspendTimer&&clearTimeout(l._suspendTimer),l._suspendTimer=setTimeout(function(){if(!!l.autoSuspend){l._suspendTimer=null,l.state="suspending";var h=function(){l.state="suspended",l._resumeAfterSuspend&&(delete l._resumeAfterSuspend,l._autoResume())};l.ctx.suspend().then(h,h)}},3e4),l}},_autoResume:function(){var l=this;if(!(!l.ctx||typeof l.ctx.resume>"u"||!e.usingWebAudio))return l.state==="running"&&l.ctx.state!=="interrupted"&&l._suspendTimer?(clearTimeout(l._suspendTimer),l._suspendTimer=null):l.state==="suspended"||l.state==="running"&&l.ctx.state==="interrupted"?(l.ctx.resume().then(function(){l.state="running";for(var u=0;u<l._howls.length;u++)l._howls[u]._emit("resume")}),l._suspendTimer&&(clearTimeout(l._suspendTimer),l._suspendTimer=null)):l.state==="suspending"&&(l._resumeAfterSuspend=!0),l}};var e=new n,t=function(l){var u=this;if(!l.src||l.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}u.init(l)};t.prototype={init:function(l){var u=this;return e.ctx||c(),u._autoplay=l.autoplay||!1,u._format=typeof l.format!="string"?l.format:[l.format],u._html5=l.html5||!1,u._muted=l.mute||!1,u._loop=l.loop||!1,u._pool=l.pool||5,u._preload=typeof l.preload=="boolean"||l.preload==="metadata"?l.preload:!0,u._rate=l.rate||1,u._sprite=l.sprite||{},u._src=typeof l.src!="string"?l.src:[l.src],u._volume=l.volume!==void 0?l.volume:1,u._xhr={method:l.xhr&&l.xhr.method?l.xhr.method:"GET",headers:l.xhr&&l.xhr.headers?l.xhr.headers:null,withCredentials:l.xhr&&l.xhr.withCredentials?l.xhr.withCredentials:!1},u._duration=0,u._state="unloaded",u._sounds=[],u._endTimers={},u._queue=[],u._playLock=!1,u._onend=l.onend?[{fn:l.onend}]:[],u._onfade=l.onfade?[{fn:l.onfade}]:[],u._onload=l.onload?[{fn:l.onload}]:[],u._onloaderror=l.onloaderror?[{fn:l.onloaderror}]:[],u._onplayerror=l.onplayerror?[{fn:l.onplayerror}]:[],u._onpause=l.onpause?[{fn:l.onpause}]:[],u._onplay=l.onplay?[{fn:l.onplay}]:[],u._onstop=l.onstop?[{fn:l.onstop}]:[],u._onmute=l.onmute?[{fn:l.onmute}]:[],u._onvolume=l.onvolume?[{fn:l.onvolume}]:[],u._onrate=l.onrate?[{fn:l.onrate}]:[],u._onseek=l.onseek?[{fn:l.onseek}]:[],u._onunlock=l.onunlock?[{fn:l.onunlock}]:[],u._onresume=[],u._webAudio=e.usingWebAudio&&!u._html5,typeof e.ctx<"u"&&e.ctx&&e.autoUnlock&&e._unlockAudio(),e._howls.push(u),u._autoplay&&u._queue.push({event:"play",action:function(){u.play()}}),u._preload&&u._preload!=="none"&&u.load(),u},load:function(){var l=this,u=null;if(e.noAudio){l._emit("loaderror",null,"No audio support.");return}typeof l._src=="string"&&(l._src=[l._src]);for(var d=0;d<l._src.length;d++){var h,f;if(l._format&&l._format[d])h=l._format[d];else{if(f=l._src[d],typeof f!="string"){l._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}h=/^data:audio\/([^;,]+);/i.exec(f),h||(h=/\.([^.]+)$/.exec(f.split("?",1)[0])),h&&(h=h[1].toLowerCase())}if(h||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),h&&e.codecs(h)){u=l._src[d];break}}if(!u){l._emit("loaderror",null,"No codec support for selected audio sources.");return}return l._src=u,l._state="loading",window.location.protocol==="https:"&&u.slice(0,5)==="http:"&&(l._html5=!0,l._webAudio=!1),new A(l),l._webAudio&&i(l),l},play:function(l,u){var d=this,h=null;if(typeof l=="number")h=l,l=null;else{if(typeof l=="string"&&d._state==="loaded"&&!d._sprite[l])return null;if(typeof l>"u"&&(l="__default",!d._playLock)){for(var f=0,p=0;p<d._sounds.length;p++)d._sounds[p]._paused&&!d._sounds[p]._ended&&(f++,h=d._sounds[p]._id);f===1?l=null:h=null}}var m=h?d._soundById(h):d._inactiveSound();if(!m)return null;if(h&&!l&&(l=m._sprite||"__default"),d._state!=="loaded"){m._sprite=l,m._ended=!1;var g=m._id;return d._queue.push({event:"play",action:function(){d.play(g)}}),g}if(h&&!m._paused)return u||d._loadQueue("play"),m._id;d._webAudio&&e._autoResume();var y=Math.max(0,m._seek>0?m._seek:d._sprite[l][0]/1e3),x=Math.max(0,(d._sprite[l][0]+d._sprite[l][1])/1e3-y),b=x*1e3/Math.abs(m._rate),w=d._sprite[l][0]/1e3,T=(d._sprite[l][0]+d._sprite[l][1])/1e3;m._sprite=l,m._ended=!1;var M=function(){m._paused=!1,m._seek=y,m._start=w,m._stop=T,m._loop=!!(m._loop||d._sprite[l][2])};if(y>=T){d._ended(m);return}var v=m._node;if(d._webAudio){var E=function(){d._playLock=!1,M(),d._refreshBuffer(m);var L=m._muted||d._muted?0:m._volume;v.gain.setValueAtTime(L,e.ctx.currentTime),m._playStart=e.ctx.currentTime,typeof v.bufferSource.start>"u"?m._loop?v.bufferSource.noteGrainOn(0,y,86400):v.bufferSource.noteGrainOn(0,y,x):m._loop?v.bufferSource.start(0,y,86400):v.bufferSource.start(0,y,x),b!==1/0&&(d._endTimers[m._id]=setTimeout(d._ended.bind(d,m),b)),u||setTimeout(function(){d._emit("play",m._id),d._loadQueue()},0)};e.state==="running"&&e.ctx.state!=="interrupted"?E():(d._playLock=!0,d.once("resume",E),d._clearTimer(m._id))}else{var C=function(){v.currentTime=y,v.muted=m._muted||d._muted||e._muted||v.muted,v.volume=m._volume*e.volume(),v.playbackRate=m._rate;try{var L=v.play();if(L&&typeof Promise<"u"&&(L instanceof Promise||typeof L.then=="function")?(d._playLock=!0,M(),L.then(function(){d._playLock=!1,v._unlocked=!0,u?d._loadQueue():d._emit("play",m._id)}).catch(function(){d._playLock=!1,d._emit("playerror",m._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),m._ended=!0,m._paused=!0})):u||(d._playLock=!1,M(),d._emit("play",m._id)),v.playbackRate=m._rate,v.paused){d._emit("playerror",m._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}l!=="__default"||m._loop?d._endTimers[m._id]=setTimeout(d._ended.bind(d,m),b):(d._endTimers[m._id]=function(){d._ended(m),v.removeEventListener("ended",d._endTimers[m._id],!1)},v.addEventListener("ended",d._endTimers[m._id],!1))}catch(I){d._emit("playerror",m._id,I)}};v.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(v.src=d._src,v.load());var P=window&&window.ejecta||!v.readyState&&e._navigator.isCocoonJS;if(v.readyState>=3||P)C();else{d._playLock=!0,d._state="loading";var D=function(){d._state="loaded",C(),v.removeEventListener(e._canPlayEvent,D,!1)};v.addEventListener(e._canPlayEvent,D,!1),d._clearTimer(m._id)}}return m._id},pause:function(l){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"pause",action:function(){u.pause(l)}}),u;for(var d=u._getSoundIds(l),h=0;h<d.length;h++){u._clearTimer(d[h]);var f=u._soundById(d[h]);if(f&&!f._paused&&(f._seek=u.seek(d[h]),f._rateSeek=0,f._paused=!0,u._stopFade(d[h]),f._node))if(u._webAudio){if(!f._node.bufferSource)continue;typeof f._node.bufferSource.stop>"u"?f._node.bufferSource.noteOff(0):f._node.bufferSource.stop(0),u._cleanBuffer(f._node)}else(!isNaN(f._node.duration)||f._node.duration===1/0)&&f._node.pause();arguments[1]||u._emit("pause",f?f._id:null)}return u},stop:function(l,u){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(l)}}),d;for(var h=d._getSoundIds(l),f=0;f<h.length;f++){d._clearTimer(h[f]);var p=d._soundById(h[f]);p&&(p._seek=p._start||0,p._rateSeek=0,p._paused=!0,p._ended=!0,d._stopFade(h[f]),p._node&&(d._webAudio?p._node.bufferSource&&(typeof p._node.bufferSource.stop>"u"?p._node.bufferSource.noteOff(0):p._node.bufferSource.stop(0),d._cleanBuffer(p._node)):(!isNaN(p._node.duration)||p._node.duration===1/0)&&(p._node.currentTime=p._start||0,p._node.pause(),p._node.duration===1/0&&d._clearSound(p._node))),u||d._emit("stop",p._id))}return d},mute:function(l,u){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(l,u)}}),d;if(typeof u>"u")if(typeof l=="boolean")d._muted=l;else return d._muted;for(var h=d._getSoundIds(u),f=0;f<h.length;f++){var p=d._soundById(h[f]);p&&(p._muted=l,p._interval&&d._stopFade(p._id),d._webAudio&&p._node?p._node.gain.setValueAtTime(l?0:p._volume,e.ctx.currentTime):p._node&&(p._node.muted=e._muted?!0:l),d._emit("mute",p._id))}return d},volume:function(){var l=this,u=arguments,d,h;if(u.length===0)return l._volume;if(u.length===1||u.length===2&&typeof u[1]>"u"){var f=l._getSoundIds(),p=f.indexOf(u[0]);p>=0?h=parseInt(u[0],10):d=parseFloat(u[0])}else u.length>=2&&(d=parseFloat(u[0]),h=parseInt(u[1],10));var m;if(typeof d<"u"&&d>=0&&d<=1){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"volume",action:function(){l.volume.apply(l,u)}}),l;typeof h>"u"&&(l._volume=d),h=l._getSoundIds(h);for(var g=0;g<h.length;g++)m=l._soundById(h[g]),m&&(m._volume=d,u[2]||l._stopFade(h[g]),l._webAudio&&m._node&&!m._muted?m._node.gain.setValueAtTime(d,e.ctx.currentTime):m._node&&!m._muted&&(m._node.volume=d*e.volume()),l._emit("volume",m._id))}else return m=h?l._soundById(h):l._sounds[0],m?m._volume:0;return l},fade:function(l,u,d,h){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"fade",action:function(){f.fade(l,u,d,h)}}),f;l=Math.min(Math.max(0,parseFloat(l)),1),u=Math.min(Math.max(0,parseFloat(u)),1),d=parseFloat(d),f.volume(l,h);for(var p=f._getSoundIds(h),m=0;m<p.length;m++){var g=f._soundById(p[m]);if(g){if(h||f._stopFade(p[m]),f._webAudio&&!g._muted){var y=e.ctx.currentTime,x=y+d/1e3;g._volume=l,g._node.gain.setValueAtTime(l,y),g._node.gain.linearRampToValueAtTime(u,x)}f._startFadeInterval(g,l,u,d,p[m],typeof h>"u")}}return f},_startFadeInterval:function(l,u,d,h,f,p){var m=this,g=u,y=d-u,x=Math.abs(y/.01),b=Math.max(4,x>0?h/x:h),w=Date.now();l._fadeTo=d,l._interval=setInterval(function(){var T=(Date.now()-w)/h;w=Date.now(),g+=y*T,g=Math.round(g*100)/100,y<0?g=Math.max(d,g):g=Math.min(d,g),m._webAudio?l._volume=g:m.volume(g,l._id,!0),p&&(m._volume=g),(d<u&&g<=d||d>u&&g>=d)&&(clearInterval(l._interval),l._interval=null,l._fadeTo=null,m.volume(d,l._id),m._emit("fade",l._id))},b)},_stopFade:function(l){var u=this,d=u._soundById(l);return d&&d._interval&&(u._webAudio&&d._node.gain.cancelScheduledValues(e.ctx.currentTime),clearInterval(d._interval),d._interval=null,u.volume(d._fadeTo,l),d._fadeTo=null,u._emit("fade",l)),u},loop:function(){var l=this,u=arguments,d,h,f;if(u.length===0)return l._loop;if(u.length===1)if(typeof u[0]=="boolean")d=u[0],l._loop=d;else return f=l._soundById(parseInt(u[0],10)),f?f._loop:!1;else u.length===2&&(d=u[0],h=parseInt(u[1],10));for(var p=l._getSoundIds(h),m=0;m<p.length;m++)f=l._soundById(p[m]),f&&(f._loop=d,l._webAudio&&f._node&&f._node.bufferSource&&(f._node.bufferSource.loop=d,d&&(f._node.bufferSource.loopStart=f._start||0,f._node.bufferSource.loopEnd=f._stop,l.playing(p[m])&&(l.pause(p[m],!0),l.play(p[m],!0)))));return l},rate:function(){var l=this,u=arguments,d,h;if(u.length===0)h=l._sounds[0]._id;else if(u.length===1){var f=l._getSoundIds(),p=f.indexOf(u[0]);p>=0?h=parseInt(u[0],10):d=parseFloat(u[0])}else u.length===2&&(d=parseFloat(u[0]),h=parseInt(u[1],10));var m;if(typeof d=="number"){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"rate",action:function(){l.rate.apply(l,u)}}),l;typeof h>"u"&&(l._rate=d),h=l._getSoundIds(h);for(var g=0;g<h.length;g++)if(m=l._soundById(h[g]),m){l.playing(h[g])&&(m._rateSeek=l.seek(h[g]),m._playStart=l._webAudio?e.ctx.currentTime:m._playStart),m._rate=d,l._webAudio&&m._node&&m._node.bufferSource?m._node.bufferSource.playbackRate.setValueAtTime(d,e.ctx.currentTime):m._node&&(m._node.playbackRate=d);var y=l.seek(h[g]),x=(l._sprite[m._sprite][0]+l._sprite[m._sprite][1])/1e3-y,b=x*1e3/Math.abs(m._rate);(l._endTimers[h[g]]||!m._paused)&&(l._clearTimer(h[g]),l._endTimers[h[g]]=setTimeout(l._ended.bind(l,m),b)),l._emit("rate",m._id)}}else return m=l._soundById(h),m?m._rate:l._rate;return l},seek:function(){var l=this,u=arguments,d,h;if(u.length===0)l._sounds.length&&(h=l._sounds[0]._id);else if(u.length===1){var f=l._getSoundIds(),p=f.indexOf(u[0]);p>=0?h=parseInt(u[0],10):l._sounds.length&&(h=l._sounds[0]._id,d=parseFloat(u[0]))}else u.length===2&&(d=parseFloat(u[0]),h=parseInt(u[1],10));if(typeof h>"u")return 0;if(typeof d=="number"&&(l._state!=="loaded"||l._playLock))return l._queue.push({event:"seek",action:function(){l.seek.apply(l,u)}}),l;var m=l._soundById(h);if(m)if(typeof d=="number"&&d>=0){var g=l.playing(h);g&&l.pause(h,!0),m._seek=d,m._ended=!1,l._clearTimer(h),!l._webAudio&&m._node&&!isNaN(m._node.duration)&&(m._node.currentTime=d);var y=function(){g&&l.play(h,!0),l._emit("seek",h)};if(g&&!l._webAudio){var x=function(){l._playLock?setTimeout(x,0):y()};setTimeout(x,0)}else y()}else if(l._webAudio){var b=l.playing(h)?e.ctx.currentTime-m._playStart:0,w=m._rateSeek?m._rateSeek-m._seek:0;return m._seek+(w+b*Math.abs(m._rate))}else return m._node.currentTime;return l},playing:function(l){var u=this;if(typeof l=="number"){var d=u._soundById(l);return d?!d._paused:!1}for(var h=0;h<u._sounds.length;h++)if(!u._sounds[h]._paused)return!0;return!1},duration:function(l){var u=this,d=u._duration,h=u._soundById(l);return h&&(d=u._sprite[h._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var l=this,u=l._sounds,d=0;d<u.length;d++)u[d]._paused||l.stop(u[d]._id),l._webAudio||(l._clearSound(u[d]._node),u[d]._node.removeEventListener("error",u[d]._errorFn,!1),u[d]._node.removeEventListener(e._canPlayEvent,u[d]._loadFn,!1),u[d]._node.removeEventListener("ended",u[d]._endFn,!1),e._releaseHtml5Audio(u[d]._node)),delete u[d]._node,l._clearTimer(u[d]._id);var h=e._howls.indexOf(l);h>=0&&e._howls.splice(h,1);var f=!0;for(d=0;d<e._howls.length;d++)if(e._howls[d]._src===l._src||l._src.indexOf(e._howls[d]._src)>=0){f=!1;break}return r&&f&&delete r[l._src],e.noAudio=!1,l._state="unloaded",l._sounds=[],l=null,null},on:function(l,u,d,h){var f=this,p=f["_on"+l];return typeof u=="function"&&p.push(h?{id:d,fn:u,once:h}:{id:d,fn:u}),f},off:function(l,u,d){var h=this,f=h["_on"+l],p=0;if(typeof u=="number"&&(d=u,u=null),u||d)for(p=0;p<f.length;p++){var m=d===f[p].id;if(u===f[p].fn&&m||!u&&m){f.splice(p,1);break}}else if(l)h["_on"+l]=[];else{var g=Object.keys(h);for(p=0;p<g.length;p++)g[p].indexOf("_on")===0&&Array.isArray(h[g[p]])&&(h[g[p]]=[])}return h},once:function(l,u,d){var h=this;return h.on(l,u,d,1),h},_emit:function(l,u,d){for(var h=this,f=h["_on"+l],p=f.length-1;p>=0;p--)(!f[p].id||f[p].id===u||l==="load")&&(setTimeout(function(m){m.call(this,u,d)}.bind(h,f[p].fn),0),f[p].once&&h.off(l,f[p].fn,f[p].id));return h._loadQueue(l),h},_loadQueue:function(l){var u=this;if(u._queue.length>0){var d=u._queue[0];d.event===l&&(u._queue.shift(),u._loadQueue()),l||d.action()}return u},_ended:function(l){var u=this,d=l._sprite;if(!u._webAudio&&l._node&&!l._node.paused&&!l._node.ended&&l._node.currentTime<l._stop)return setTimeout(u._ended.bind(u,l),100),u;var h=!!(l._loop||u._sprite[d][2]);if(u._emit("end",l._id),!u._webAudio&&h&&u.stop(l._id,!0).play(l._id),u._webAudio&&h){u._emit("play",l._id),l._seek=l._start||0,l._rateSeek=0,l._playStart=e.ctx.currentTime;var f=(l._stop-l._start)*1e3/Math.abs(l._rate);u._endTimers[l._id]=setTimeout(u._ended.bind(u,l),f)}return u._webAudio&&!h&&(l._paused=!0,l._ended=!0,l._seek=l._start||0,l._rateSeek=0,u._clearTimer(l._id),u._cleanBuffer(l._node),e._autoSuspend()),!u._webAudio&&!h&&u.stop(l._id,!0),u},_clearTimer:function(l){var u=this;if(u._endTimers[l]){if(typeof u._endTimers[l]!="function")clearTimeout(u._endTimers[l]);else{var d=u._soundById(l);d&&d._node&&d._node.removeEventListener("ended",u._endTimers[l],!1)}delete u._endTimers[l]}return u},_soundById:function(l){for(var u=this,d=0;d<u._sounds.length;d++)if(l===u._sounds[d]._id)return u._sounds[d];return null},_inactiveSound:function(){var l=this;l._drain();for(var u=0;u<l._sounds.length;u++)if(l._sounds[u]._ended)return l._sounds[u].reset();return new A(l)},_drain:function(){var l=this,u=l._pool,d=0,h=0;if(!(l._sounds.length<u)){for(h=0;h<l._sounds.length;h++)l._sounds[h]._ended&&d++;for(h=l._sounds.length-1;h>=0;h--){if(d<=u)return;l._sounds[h]._ended&&(l._webAudio&&l._sounds[h]._node&&l._sounds[h]._node.disconnect(0),l._sounds.splice(h,1),d--)}}},_getSoundIds:function(l){var u=this;if(typeof l>"u"){for(var d=[],h=0;h<u._sounds.length;h++)d.push(u._sounds[h]._id);return d}else return[l]},_refreshBuffer:function(l){var u=this;return l._node.bufferSource=e.ctx.createBufferSource(),l._node.bufferSource.buffer=r[u._src],l._panner?l._node.bufferSource.connect(l._panner):l._node.bufferSource.connect(l._node),l._node.bufferSource.loop=l._loop,l._loop&&(l._node.bufferSource.loopStart=l._start||0,l._node.bufferSource.loopEnd=l._stop||0),l._node.bufferSource.playbackRate.setValueAtTime(l._rate,e.ctx.currentTime),u},_cleanBuffer:function(l){var u=this,d=e._navigator&&e._navigator.vendor.indexOf("Apple")>=0;if(e._scratchBuffer&&l.bufferSource&&(l.bufferSource.onended=null,l.bufferSource.disconnect(0),d))try{l.bufferSource.buffer=e._scratchBuffer}catch{}return l.bufferSource=null,u},_clearSound:function(l){var u=/MSIE |Trident\//.test(e._navigator&&e._navigator.userAgent);u||(l.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var A=function(l){this._parent=l,this.init()};A.prototype={init:function(){var l=this,u=l._parent;return l._muted=u._muted,l._loop=u._loop,l._volume=u._volume,l._rate=u._rate,l._seek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++e._counter,u._sounds.push(l),l.create(),l},create:function(){var l=this,u=l._parent,d=e._muted||l._muted||l._parent._muted?0:l._volume;return u._webAudio?(l._node=typeof e.ctx.createGain>"u"?e.ctx.createGainNode():e.ctx.createGain(),l._node.gain.setValueAtTime(d,e.ctx.currentTime),l._node.paused=!0,l._node.connect(e.masterGain)):e.noAudio||(l._node=e._obtainHtml5Audio(),l._errorFn=l._errorListener.bind(l),l._node.addEventListener("error",l._errorFn,!1),l._loadFn=l._loadListener.bind(l),l._node.addEventListener(e._canPlayEvent,l._loadFn,!1),l._endFn=l._endListener.bind(l),l._node.addEventListener("ended",l._endFn,!1),l._node.src=u._src,l._node.preload=u._preload===!0?"auto":u._preload,l._node.volume=d*e.volume(),l._node.load()),l},reset:function(){var l=this,u=l._parent;return l._muted=u._muted,l._loop=u._loop,l._volume=u._volume,l._rate=u._rate,l._seek=0,l._rateSeek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++e._counter,l},_errorListener:function(){var l=this;l._parent._emit("loaderror",l._id,l._node.error?l._node.error.code:0),l._node.removeEventListener("error",l._errorFn,!1)},_loadListener:function(){var l=this,u=l._parent;u._duration=Math.ceil(l._node.duration*10)/10,Object.keys(u._sprite).length===0&&(u._sprite={__default:[0,u._duration*1e3]}),u._state!=="loaded"&&(u._state="loaded",u._emit("load"),u._loadQueue()),l._node.removeEventListener(e._canPlayEvent,l._loadFn,!1)},_endListener:function(){var l=this,u=l._parent;u._duration===1/0&&(u._duration=Math.ceil(l._node.duration*10)/10,u._sprite.__default[1]===1/0&&(u._sprite.__default[1]=u._duration*1e3),u._ended(l)),l._node.removeEventListener("ended",l._endFn,!1)}};var r={},i=function(l){var u=l._src;if(r[u]){l._duration=r[u].duration,a(l);return}if(/^data:[^;]+;base64,/.test(u)){for(var d=atob(u.split(",")[1]),h=new Uint8Array(d.length),f=0;f<d.length;++f)h[f]=d.charCodeAt(f);o(h.buffer,l)}else{var p=new XMLHttpRequest;p.open(l._xhr.method,u,!0),p.withCredentials=l._xhr.withCredentials,p.responseType="arraybuffer",l._xhr.headers&&Object.keys(l._xhr.headers).forEach(function(m){p.setRequestHeader(m,l._xhr.headers[m])}),p.onload=function(){var m=(p.status+"")[0];if(m!=="0"&&m!=="2"&&m!=="3"){l._emit("loaderror",null,"Failed loading audio file with status: "+p.status+".");return}o(p.response,l)},p.onerror=function(){l._webAudio&&(l._html5=!0,l._webAudio=!1,l._sounds=[],delete r[u],l.load())},s(p)}},s=function(l){try{l.send()}catch{l.onerror()}},o=function(l,u){var d=function(){u._emit("loaderror",null,"Decoding audio data failed.")},h=function(f){f&&u._sounds.length>0?(r[u._src]=f,a(u,f)):d()};typeof Promise<"u"&&e.ctx.decodeAudioData.length===1?e.ctx.decodeAudioData(l).then(h).catch(d):e.ctx.decodeAudioData(l,h,d)},a=function(l,u){u&&!l._duration&&(l._duration=u.duration),Object.keys(l._sprite).length===0&&(l._sprite={__default:[0,l._duration*1e3]}),l._state!=="loaded"&&(l._state="loaded",l._emit("load"),l._loadQueue())},c=function(){if(!!e.usingWebAudio){try{typeof AudioContext<"u"?e.ctx=new AudioContext:typeof webkitAudioContext<"u"?e.ctx=new webkitAudioContext:e.usingWebAudio=!1}catch{e.usingWebAudio=!1}e.ctx||(e.usingWebAudio=!1);var l=/iP(hone|od|ad)/.test(e._navigator&&e._navigator.platform),u=e._navigator&&e._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=u?parseInt(u[1],10):null;if(l&&d&&d<9){var h=/safari/.test(e._navigator&&e._navigator.userAgent.toLowerCase());e._navigator&&!h&&(e.usingWebAudio=!1)}e.usingWebAudio&&(e.masterGain=typeof e.ctx.createGain>"u"?e.ctx.createGainNode():e.ctx.createGain(),e.masterGain.gain.setValueAtTime(e._muted?0:e._volume,e.ctx.currentTime),e.masterGain.connect(e.ctx.destination)),e._setup()}};typeof define=="function"&&define.amd&&define([],function(){return{Howler:e,Howl:t}}),typeof sm<"u"&&(sm.Howler=e,sm.Howl=t),typeof global<"u"?(global.HowlerGlobal=n,global.Howler=e,global.Howl=t,global.Sound=A):typeof window<"u"&&(window.HowlerGlobal=n,window.Howler=e,window.Howl=t,window.Sound=A)})();(function(){"use strict";HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(e){var t=this;if(!t.ctx||!t.ctx.listener)return t;for(var A=t._howls.length-1;A>=0;A--)t._howls[A].stereo(e);return t},HowlerGlobal.prototype.pos=function(e,t,A){var r=this;if(!r.ctx||!r.ctx.listener)return r;if(t=typeof t!="number"?r._pos[1]:t,A=typeof A!="number"?r._pos[2]:A,typeof e=="number")r._pos=[e,t,A],typeof r.ctx.listener.positionX<"u"?(r.ctx.listener.positionX.setTargetAtTime(r._pos[0],Howler.ctx.currentTime,.1),r.ctx.listener.positionY.setTargetAtTime(r._pos[1],Howler.ctx.currentTime,.1),r.ctx.listener.positionZ.setTargetAtTime(r._pos[2],Howler.ctx.currentTime,.1)):r.ctx.listener.setPosition(r._pos[0],r._pos[1],r._pos[2]);else return r._pos;return r},HowlerGlobal.prototype.orientation=function(e,t,A,r,i,s){var o=this;if(!o.ctx||!o.ctx.listener)return o;var a=o._orientation;if(t=typeof t!="number"?a[1]:t,A=typeof A!="number"?a[2]:A,r=typeof r!="number"?a[3]:r,i=typeof i!="number"?a[4]:i,s=typeof s!="number"?a[5]:s,typeof e=="number")o._orientation=[e,t,A,r,i,s],typeof o.ctx.listener.forwardX<"u"?(o.ctx.listener.forwardX.setTargetAtTime(e,Howler.ctx.currentTime,.1),o.ctx.listener.forwardY.setTargetAtTime(t,Howler.ctx.currentTime,.1),o.ctx.listener.forwardZ.setTargetAtTime(A,Howler.ctx.currentTime,.1),o.ctx.listener.upX.setTargetAtTime(r,Howler.ctx.currentTime,.1),o.ctx.listener.upY.setTargetAtTime(i,Howler.ctx.currentTime,.1),o.ctx.listener.upZ.setTargetAtTime(s,Howler.ctx.currentTime,.1)):o.ctx.listener.setOrientation(e,t,A,r,i,s);else return a;return o},Howl.prototype.init=function(e){return function(t){var A=this;return A._orientation=t.orientation||[1,0,0],A._stereo=t.stereo||null,A._pos=t.pos||null,A._pannerAttr={coneInnerAngle:typeof t.coneInnerAngle<"u"?t.coneInnerAngle:360,coneOuterAngle:typeof t.coneOuterAngle<"u"?t.coneOuterAngle:360,coneOuterGain:typeof t.coneOuterGain<"u"?t.coneOuterGain:0,distanceModel:typeof t.distanceModel<"u"?t.distanceModel:"inverse",maxDistance:typeof t.maxDistance<"u"?t.maxDistance:1e4,panningModel:typeof t.panningModel<"u"?t.panningModel:"HRTF",refDistance:typeof t.refDistance<"u"?t.refDistance:1,rolloffFactor:typeof t.rolloffFactor<"u"?t.rolloffFactor:1},A._onstereo=t.onstereo?[{fn:t.onstereo}]:[],A._onpos=t.onpos?[{fn:t.onpos}]:[],A._onorientation=t.onorientation?[{fn:t.onorientation}]:[],e.call(this,t)}}(Howl.prototype.init),Howl.prototype.stereo=function(e,t){var A=this;if(!A._webAudio)return A;if(A._state!=="loaded")return A._queue.push({event:"stereo",action:function(){A.stereo(e,t)}}),A;var r=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof t>"u")if(typeof e=="number")A._stereo=e,A._pos=[e,0,0];else return A._stereo;for(var i=A._getSoundIds(t),s=0;s<i.length;s++){var o=A._soundById(i[s]);if(o)if(typeof e=="number")o._stereo=e,o._pos=[e,0,0],o._node&&(o._pannerAttr.panningModel="equalpower",(!o._panner||!o._panner.pan)&&n(o,r),r==="spatial"?typeof o._panner.positionX<"u"?(o._panner.positionX.setValueAtTime(e,Howler.ctx.currentTime),o._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),o._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):o._panner.setPosition(e,0,0):o._panner.pan.setValueAtTime(e,Howler.ctx.currentTime)),A._emit("stereo",o._id);else return o._stereo}return A},Howl.prototype.pos=function(e,t,A,r){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"pos",action:function(){i.pos(e,t,A,r)}}),i;if(t=typeof t!="number"?0:t,A=typeof A!="number"?-.5:A,typeof r>"u")if(typeof e=="number")i._pos=[e,t,A];else return i._pos;for(var s=i._getSoundIds(r),o=0;o<s.length;o++){var a=i._soundById(s[o]);if(a)if(typeof e=="number")a._pos=[e,t,A],a._node&&((!a._panner||a._panner.pan)&&n(a,"spatial"),typeof a._panner.positionX<"u"?(a._panner.positionX.setValueAtTime(e,Howler.ctx.currentTime),a._panner.positionY.setValueAtTime(t,Howler.ctx.currentTime),a._panner.positionZ.setValueAtTime(A,Howler.ctx.currentTime)):a._panner.setPosition(e,t,A)),i._emit("pos",a._id);else return a._pos}return i},Howl.prototype.orientation=function(e,t,A,r){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"orientation",action:function(){i.orientation(e,t,A,r)}}),i;if(t=typeof t!="number"?i._orientation[1]:t,A=typeof A!="number"?i._orientation[2]:A,typeof r>"u")if(typeof e=="number")i._orientation=[e,t,A];else return i._orientation;for(var s=i._getSoundIds(r),o=0;o<s.length;o++){var a=i._soundById(s[o]);if(a)if(typeof e=="number")a._orientation=[e,t,A],a._node&&(a._panner||(a._pos||(a._pos=i._pos||[0,0,-.5]),n(a,"spatial")),typeof a._panner.orientationX<"u"?(a._panner.orientationX.setValueAtTime(e,Howler.ctx.currentTime),a._panner.orientationY.setValueAtTime(t,Howler.ctx.currentTime),a._panner.orientationZ.setValueAtTime(A,Howler.ctx.currentTime)):a._panner.setOrientation(e,t,A)),i._emit("orientation",a._id);else return a._orientation}return i},Howl.prototype.pannerAttr=function(){var e=this,t=arguments,A,r,i;if(!e._webAudio)return e;if(t.length===0)return e._pannerAttr;if(t.length===1)if(typeof t[0]=="object")A=t[0],typeof r>"u"&&(A.pannerAttr||(A.pannerAttr={coneInnerAngle:A.coneInnerAngle,coneOuterAngle:A.coneOuterAngle,coneOuterGain:A.coneOuterGain,distanceModel:A.distanceModel,maxDistance:A.maxDistance,refDistance:A.refDistance,rolloffFactor:A.rolloffFactor,panningModel:A.panningModel}),e._pannerAttr={coneInnerAngle:typeof A.pannerAttr.coneInnerAngle<"u"?A.pannerAttr.coneInnerAngle:e._coneInnerAngle,coneOuterAngle:typeof A.pannerAttr.coneOuterAngle<"u"?A.pannerAttr.coneOuterAngle:e._coneOuterAngle,coneOuterGain:typeof A.pannerAttr.coneOuterGain<"u"?A.pannerAttr.coneOuterGain:e._coneOuterGain,distanceModel:typeof A.pannerAttr.distanceModel<"u"?A.pannerAttr.distanceModel:e._distanceModel,maxDistance:typeof A.pannerAttr.maxDistance<"u"?A.pannerAttr.maxDistance:e._maxDistance,refDistance:typeof A.pannerAttr.refDistance<"u"?A.pannerAttr.refDistance:e._refDistance,rolloffFactor:typeof A.pannerAttr.rolloffFactor<"u"?A.pannerAttr.rolloffFactor:e._rolloffFactor,panningModel:typeof A.pannerAttr.panningModel<"u"?A.pannerAttr.panningModel:e._panningModel});else return i=e._soundById(parseInt(t[0],10)),i?i._pannerAttr:e._pannerAttr;else t.length===2&&(A=t[0],r=parseInt(t[1],10));for(var s=e._getSoundIds(r),o=0;o<s.length;o++)if(i=e._soundById(s[o]),i){var a=i._pannerAttr;a={coneInnerAngle:typeof A.coneInnerAngle<"u"?A.coneInnerAngle:a.coneInnerAngle,coneOuterAngle:typeof A.coneOuterAngle<"u"?A.coneOuterAngle:a.coneOuterAngle,coneOuterGain:typeof A.coneOuterGain<"u"?A.coneOuterGain:a.coneOuterGain,distanceModel:typeof A.distanceModel<"u"?A.distanceModel:a.distanceModel,maxDistance:typeof A.maxDistance<"u"?A.maxDistance:a.maxDistance,refDistance:typeof A.refDistance<"u"?A.refDistance:a.refDistance,rolloffFactor:typeof A.rolloffFactor<"u"?A.rolloffFactor:a.rolloffFactor,panningModel:typeof A.panningModel<"u"?A.panningModel:a.panningModel};var c=i._panner;c?(c.coneInnerAngle=a.coneInnerAngle,c.coneOuterAngle=a.coneOuterAngle,c.coneOuterGain=a.coneOuterGain,c.distanceModel=a.distanceModel,c.maxDistance=a.maxDistance,c.refDistance=a.refDistance,c.rolloffFactor=a.rolloffFactor,c.panningModel=a.panningModel):(i._pos||(i._pos=e._pos||[0,0,-.5]),n(i,"spatial"))}return e},Sound.prototype.init=function(e){return function(){var t=this,A=t._parent;t._orientation=A._orientation,t._stereo=A._stereo,t._pos=A._pos,t._pannerAttr=A._pannerAttr,e.call(this),t._stereo?A.stereo(t._stereo):t._pos&&A.pos(t._pos[0],t._pos[1],t._pos[2],t._id)}}(Sound.prototype.init),Sound.prototype.reset=function(e){return function(){var t=this,A=t._parent;return t._orientation=A._orientation,t._stereo=A._stereo,t._pos=A._pos,t._pannerAttr=A._pannerAttr,t._stereo?A.stereo(t._stereo):t._pos?A.pos(t._pos[0],t._pos[1],t._pos[2],t._id):t._panner&&(t._panner.disconnect(0),t._panner=void 0,A._refreshBuffer(t)),e.call(this)}}(Sound.prototype.reset);var n=function(e,t){t=t||"spatial",t==="spatial"?(e._panner=Howler.ctx.createPanner(),e._panner.coneInnerAngle=e._pannerAttr.coneInnerAngle,e._panner.coneOuterAngle=e._pannerAttr.coneOuterAngle,e._panner.coneOuterGain=e._pannerAttr.coneOuterGain,e._panner.distanceModel=e._pannerAttr.distanceModel,e._panner.maxDistance=e._pannerAttr.maxDistance,e._panner.refDistance=e._pannerAttr.refDistance,e._panner.rolloffFactor=e._pannerAttr.rolloffFactor,e._panner.panningModel=e._pannerAttr.panningModel,typeof e._panner.positionX<"u"?(e._panner.positionX.setValueAtTime(e._pos[0],Howler.ctx.currentTime),e._panner.positionY.setValueAtTime(e._pos[1],Howler.ctx.currentTime),e._panner.positionZ.setValueAtTime(e._pos[2],Howler.ctx.currentTime)):e._panner.setPosition(e._pos[0],e._pos[1],e._pos[2]),typeof e._panner.orientationX<"u"?(e._panner.orientationX.setValueAtTime(e._orientation[0],Howler.ctx.currentTime),e._panner.orientationY.setValueAtTime(e._orientation[1],Howler.ctx.currentTime),e._panner.orientationZ.setValueAtTime(e._orientation[2],Howler.ctx.currentTime)):e._panner.setOrientation(e._orientation[0],e._orientation[1],e._orientation[2])):(e._panner=Howler.ctx.createStereoPanner(),e._panner.pan.setValueAtTime(e._stereo,Howler.ctx.currentTime)),e._panner.connect(e._node),e._paused||e._parent.pause(e._id,!0).play(e._id,!0)}})()});var go="142";var Fn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},RD=0,hb=1,BD=2;var df=1,Wy=2,tu=3,kr=0,DA=1,Rn=2,ND=1;var Bt=0,va=1,fb=2,pb=3,mb=4,FD=5,ma=100,GD=101,kD=102,gb=103,yb=104,UD=200,VD=201,zD=202,HD=203,Yw=204,qw=205,WD=206,jD=207,YD=208,qD=209,XD=210,QD=0,KD=1,ZD=2,ry=3,JD=4,$D=5,eI=6,tI=7,Xw=0,AI=1,nI=2,Ei=0,rI=1,iI=2,sI=3,oI=4,aI=5,Qw=300,rs=301,is=302,iy=303,sy=304,ka=306,ba=1e3,sn=1001,oy=1002,Ft=1003,vb=1004;var xb=1005;var it=1006,lI=1007;var Ua=1008;var Gt=1009,cI=1010,uI=1011,Kw=1012,dI=1013,Mi=1014,Nr=1015,au=1016,hI=1017,fI=1018,ns=1020,pI=1021,mI=1022,dr=1023,gI=1024,yI=1025,io=1026,ss=1027,vI=1028,xI=1029,bI=1030,wI=1031,SI=1033,wg=33776,Sg=33777,Tg=33778,Mg=33779,bb=35840,wb=35841,Sb=35842,Tb=35843,TI=36196,Mb=37492,Eb=37496,Cb=37808,Pb=37809,Db=37810,Ib=37811,Ob=37812,Lb=37813,_b=37814,Rb=37815,Bb=37816,Nb=37817,Fb=37818,Gb=37819,kb=37820,Ub=37821,Vb=36492;var Uh=2300,Vh=2301,Eg=2302,zb=2400,Hb=2401,Wb=2402;var MI=2501;var Bn=3e3,qe=3001,OA=3200,jy=3201,Zw=0,EI=1;var Ti="srgb",ro="srgb-linear";var Cg=7680;var CI=519,ay=35044;var jb="300 es",ly=1035,Ut=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let A=this._listeners;A[e]===void 0&&(A[e]=[]),A[e].indexOf(t)===-1&&A[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let A=this._listeners;return A[e]!==void 0&&A[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let i=r.indexOf(t);i!==-1&&r.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let A=this._listeners[e.type];if(A!==void 0){e.target=this;let r=A.slice(0);for(let i=0,s=r.length;i<s;i++)r[i].call(this,e);e.target=null}}},QA=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yb=1234567,nu=Math.PI/180,lu=180/Math.PI;function Gr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,A=Math.random()*4294967295|0;return(QA[n&255]+QA[n>>8&255]+QA[n>>16&255]+QA[n>>24&255]+"-"+QA[e&255]+QA[e>>8&255]+"-"+QA[e>>16&15|64]+QA[e>>24&255]+"-"+QA[t&63|128]+QA[t>>8&255]+"-"+QA[t>>16&255]+QA[t>>24&255]+QA[A&255]+QA[A>>8&255]+QA[A>>16&255]+QA[A>>24&255]).toLowerCase()}function mA(n,e,t){return Math.max(e,Math.min(t,n))}function Yy(n,e){return(n%e+e)%e}function PI(n,e,t,A,r){return A+(n-e)*(r-A)/(t-e)}function DI(n,e,t){return n!==e?(t-n)/(e-n):0}function ru(n,e,t){return(1-t)*n+t*e}function II(n,e,t,A){return ru(n,e,1-Math.exp(-t*A))}function OI(n,e=1){return e-Math.abs(Yy(n,e*2)-e)}function LI(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function _I(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function RI(n,e){return n+Math.floor(Math.random()*(e-n+1))}function BI(n,e){return n+Math.random()*(e-n)}function NI(n){return n*(.5-Math.random())}function FI(n){n!==void 0&&(Yb=n);let e=Yb+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function GI(n){return n*nu}function kI(n){return n*lu}function cy(n){return(n&n-1)===0&&n!==0}function UI(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function zh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function VI(n,e,t,A,r){let i=Math.cos,s=Math.sin,o=i(t/2),a=s(t/2),c=i((e+A)/2),l=s((e+A)/2),u=i((e-A)/2),d=s((e-A)/2),h=i((A-e)/2),f=s((A-e)/2);switch(r){case"XYX":n.set(o*l,a*u,a*d,o*c);break;case"YZY":n.set(a*d,o*l,a*u,o*c);break;case"ZXZ":n.set(a*u,a*d,o*l,o*c);break;case"XZX":n.set(o*l,a*f,a*h,o*c);break;case"YXY":n.set(a*h,o*l,a*f,o*c);break;case"ZYZ":n.set(a*f,a*h,o*l,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function zI(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function HI(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ve=Object.freeze({__proto__:null,DEG2RAD:nu,RAD2DEG:lu,generateUUID:Gr,clamp:mA,euclideanModulo:Yy,mapLinear:PI,inverseLerp:DI,lerp:ru,damp:II,pingpong:OI,smoothstep:LI,smootherstep:_I,randInt:RI,randFloat:BI,randFloatSpread:NI,seededRandom:FI,degToRad:GI,radToDeg:kI,isPowerOfTwo:cy,ceilPowerOfTwo:UI,floorPowerOfTwo:zh,setQuaternionFromProperEuler:VI,normalize:HI,denormalize:zI}),G=class{constructor(e=0,t=0){G.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,A=this.y,r=e.elements;return this.x=r[0]*t+r[3]*A+r[6],this.y=r[1]*t+r[4]*A+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let A=this.length();return this.divideScalar(A||1).multiplyScalar(Math.max(e,Math.min(t,A)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,A=this.y-e.y;return t*t+A*A}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,A){return this.x=e.x+(t.x-e.x)*A,this.y=e.y+(t.y-e.y)*A,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,A){return A!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let A=Math.cos(t),r=Math.sin(t),i=this.x-e.x,s=this.y-e.y;return this.x=i*A-s*r+e.x,this.y=i*r+s*A+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rA=class{constructor(){rA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,A,r,i,s,o,a,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=a,l[6]=A,l[7]=s,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,A=e.elements;return t[0]=A[0],t[1]=A[1],t[2]=A[2],t[3]=A[3],t[4]=A[4],t[5]=A[5],t[6]=A[6],t[7]=A[7],t[8]=A[8],this}extractBasis(e,t,A){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),A.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let A=e.elements,r=t.elements,i=this.elements,s=A[0],o=A[3],a=A[6],c=A[1],l=A[4],u=A[7],d=A[2],h=A[5],f=A[8],p=r[0],m=r[3],g=r[6],y=r[1],x=r[4],b=r[7],w=r[2],T=r[5],M=r[8];return i[0]=s*p+o*y+a*w,i[3]=s*m+o*x+a*T,i[6]=s*g+o*b+a*M,i[1]=c*p+l*y+u*w,i[4]=c*m+l*x+u*T,i[7]=c*g+l*b+u*M,i[2]=d*p+h*y+f*w,i[5]=d*m+h*x+f*T,i[8]=d*g+h*b+f*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],A=e[1],r=e[2],i=e[3],s=e[4],o=e[5],a=e[6],c=e[7],l=e[8];return t*s*l-t*o*c-A*i*l+A*o*a+r*i*c-r*s*a}invert(){let e=this.elements,t=e[0],A=e[1],r=e[2],i=e[3],s=e[4],o=e[5],a=e[6],c=e[7],l=e[8],u=l*s-o*c,d=o*a-l*i,h=c*i-s*a,f=t*u+A*d+r*h;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/f;return e[0]=u*p,e[1]=(r*c-l*A)*p,e[2]=(o*A-r*s)*p,e[3]=d*p,e[4]=(l*t-r*a)*p,e[5]=(r*i-o*t)*p,e[6]=h*p,e[7]=(A*a-c*t)*p,e[8]=(s*t-A*i)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,A,r,i,s,o){let a=Math.cos(i),c=Math.sin(i);return this.set(A*a,A*c,-A*(a*s+c*o)+s+e,-r*c,r*a,-r*(-c*s+a*o)+o+t,0,0,1),this}scale(e,t){let A=this.elements;return A[0]*=e,A[3]*=e,A[6]*=e,A[1]*=t,A[4]*=t,A[7]*=t,this}rotate(e){let t=Math.cos(e),A=Math.sin(e),r=this.elements,i=r[0],s=r[3],o=r[6],a=r[1],c=r[4],l=r[7];return r[0]=t*i+A*a,r[3]=t*s+A*c,r[6]=t*o+A*l,r[1]=-A*i+t*a,r[4]=-A*s+t*c,r[7]=-A*o+t*l,this}translate(e,t){let A=this.elements;return A[0]+=e*A[2],A[3]+=e*A[5],A[6]+=e*A[8],A[1]+=t*A[2],A[4]+=t*A[5],A[7]+=t*A[8],this}equals(e){let t=this.elements,A=e.elements;for(let r=0;r<9;r++)if(t[r]!==A[r])return!1;return!0}fromArray(e,t=0){for(let A=0;A<9;A++)this.elements[A]=e[A+t];return this}toArray(e=[],t=0){let A=this.elements;return e[t]=A[0],e[t+1]=A[1],e[t+2]=A[2],e[t+3]=A[3],e[t+4]=A[4],e[t+5]=A[5],e[t+6]=A[6],e[t+7]=A[7],e[t+8]=A[8],e}clone(){return new this.constructor().fromArray(this.elements)}};function Jw(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}var WI={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function uh(n,e){return new WI[n](e)}function Hh(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function so(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function kh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Pg={[Ti]:{[ro]:so},[ro]:{[Ti]:kh}},ar={legacyMode:!0,get workingColorSpace(){return ro},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Pg[e]&&Pg[e][t]!==void 0){let A=Pg[e][t];return n.r=A(n.r),n.g=A(n.g),n.b=A(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},$w={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fA={r:0,g:0,b:0},lr={h:0,s:0,l:0},dh={h:0,s:0,l:0};function Dg(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function hh(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}var Le=class{constructor(e,t,A){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&A===void 0?this.set(e):this.setRGB(e,t,A)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ar.toWorkingColorSpace(this,t),this}setRGB(e,t,A,r=ro){return this.r=e,this.g=t,this.b=A,ar.toWorkingColorSpace(this,r),this}setHSL(e,t,A,r=ro){if(e=Yy(e,1),t=mA(t,0,1),A=mA(A,0,1),t===0)this.r=this.g=this.b=A;else{let i=A<=.5?A*(1+t):A+t-A*t,s=2*A-i;this.r=Dg(s,i,e+1/3),this.g=Dg(s,i,e),this.b=Dg(s,i,e-1/3)}return ar.toWorkingColorSpace(this,r),this}setStyle(e,t=Ti){function A(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i,s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,ar.toWorkingColorSpace(this,t),A(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,ar.toWorkingColorSpace(this,t),A(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let a=parseFloat(i[1])/360,c=parseInt(i[2],10)/100,l=parseInt(i[3],10)/100;return A(i[4]),this.setHSL(a,c,l,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=r[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,ar.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,ar.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ti){let A=$w[e.toLowerCase()];return A!==void 0?this.setHex(A,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}copyLinearToSRGB(e){return this.r=kh(e.r),this.g=kh(e.g),this.b=kh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ti){return ar.fromWorkingColorSpace(hh(this,fA),e),mA(fA.r*255,0,255)<<16^mA(fA.g*255,0,255)<<8^mA(fA.b*255,0,255)<<0}getHexString(e=Ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ro){ar.fromWorkingColorSpace(hh(this,fA),t);let A=fA.r,r=fA.g,i=fA.b,s=Math.max(A,r,i),o=Math.min(A,r,i),a,c,l=(o+s)/2;if(o===s)a=0,c=0;else{let u=s-o;switch(c=l<=.5?u/(s+o):u/(2-s-o),s){case A:a=(r-i)/u+(r<i?6:0);break;case r:a=(i-A)/u+2;break;case i:a=(A-r)/u+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getRGB(e,t=ro){return ar.fromWorkingColorSpace(hh(this,fA),t),e.r=fA.r,e.g=fA.g,e.b=fA.b,e}getStyle(e=Ti){return ar.fromWorkingColorSpace(hh(this,fA),e),e!==Ti?`color(${e} ${fA.r} ${fA.g} ${fA.b})`:`rgb(${fA.r*255|0},${fA.g*255|0},${fA.b*255|0})`}offsetHSL(e,t,A){return this.getHSL(lr),lr.h+=e,lr.s+=t,lr.l+=A,this.setHSL(lr.h,lr.s,lr.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,A){return this.r=e.r+(t.r-e.r)*A,this.g=e.g+(t.g-e.g)*A,this.b=e.b+(t.b-e.b)*A,this}lerpHSL(e,t){this.getHSL(lr),e.getHSL(dh);let A=ru(lr.h,dh.h,t),r=ru(lr.s,dh.s,t),i=ru(lr.l,dh.l,t);return this.setHSL(A,r,i),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Le.NAMES=$w;var Aa,Wh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Aa===void 0&&(Aa=Hh("canvas")),Aa.width=e.width,Aa.height=e.height;let A=Aa.getContext("2d");e instanceof ImageData?A.putImageData(e,0,0):A.drawImage(e,0,0,e.width,e.height),t=Aa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hh("canvas");t.width=e.width,t.height=e.height;let A=t.getContext("2d");A.drawImage(e,0,0,e.width,e.height);let r=A.getImageData(0,0,e.width,e.height),i=r.data;for(let s=0;s<i.length;s++)i[s]=so(i[s]/255)*255;return A.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let A=0;A<t.length;A++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[A]=Math.floor(so(t[A]/255)*255):t[A]=so(t[A]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jh=class{constructor(e=null){this.isSource=!0,this.uuid=Gr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let A={uuid:this.uuid,url:""},r=this.data;if(r!==null){let i;if(Array.isArray(r)){i=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?i.push(Ig(r[s].image)):i.push(Ig(r[s]))}else i=Ig(r);A.url=i}return t||(e.images[this.uuid]=A),A}};function Ig(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jI=0,Wt=class extends Ut{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,A=sn,r=sn,i=it,s=Ua,o=dr,a=Gt,c=1,l=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jI++}),this.uuid=Gr(),this.name="",this.source=new jh(e),this.mipmaps=[],this.mapping=t,this.wrapS=A,this.wrapT=r,this.magFilter=i,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let A={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(A.userData=this.userData),t||(e.textures[this.uuid]=A),A}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qw)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ba:e.x=e.x-Math.floor(e.x);break;case sn:e.x=e.x<0?0:1;break;case oy:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ba:e.y=e.y-Math.floor(e.y);break;case sn:e.y=e.y<0?0:1;break;case oy:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Qw;var He=class{constructor(e=0,t=0,A=0,r=1){He.prototype.isVector4=!0,this.x=e,this.y=t,this.z=A,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,A,r){return this.x=e,this.y=t,this.z=A,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,A=this.y,r=this.z,i=this.w,s=e.elements;return this.x=s[0]*t+s[4]*A+s[8]*r+s[12]*i,this.y=s[1]*t+s[5]*A+s[9]*r+s[13]*i,this.z=s[2]*t+s[6]*A+s[10]*r+s[14]*i,this.w=s[3]*t+s[7]*A+s[11]*r+s[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,A,r,i,a=e.elements,c=a[0],l=a[4],u=a[8],d=a[1],h=a[5],f=a[9],p=a[2],m=a[6],g=a[10];if(Math.abs(l-d)<.01&&Math.abs(u-p)<.01&&Math.abs(f-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(u+p)<.1&&Math.abs(f+m)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,b=(h+1)/2,w=(g+1)/2,T=(l+d)/4,M=(u+p)/4,v=(f+m)/4;return x>b&&x>w?x<.01?(A=0,r=.707106781,i=.707106781):(A=Math.sqrt(x),r=T/A,i=M/A):b>w?b<.01?(A=.707106781,r=0,i=.707106781):(r=Math.sqrt(b),A=T/r,i=v/r):w<.01?(A=.707106781,r=.707106781,i=0):(i=Math.sqrt(w),A=M/i,r=v/i),this.set(A,r,i,t),this}let y=Math.sqrt((m-f)*(m-f)+(u-p)*(u-p)+(d-l)*(d-l));return Math.abs(y)<.001&&(y=1),this.x=(m-f)/y,this.y=(u-p)/y,this.z=(d-l)/y,this.w=Math.acos((c+h+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let A=this.length();return this.divideScalar(A||1).multiplyScalar(Math.max(e,Math.min(t,A)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,A){return this.x=e.x+(t.x-e.x)*A,this.y=e.y+(t.y-e.y)*A,this.z=e.z+(t.z-e.z)*A,this.w=e.w+(t.w-e.w)*A,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,A){return A!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ht=class extends Ut{constructor(e,t,A={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new He(0,0,e,t),this.scissorTest=!1,this.viewport=new He(0,0,e,t);let r={width:e,height:t,depth:1};this.texture=new Wt(r,A.mapping,A.wrapS,A.wrapT,A.magFilter,A.minFilter,A.format,A.type,A.anisotropy,A.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=A.generateMipmaps!==void 0?A.generateMipmaps:!1,this.texture.internalFormat=A.internalFormat!==void 0?A.internalFormat:null,this.texture.minFilter=A.minFilter!==void 0?A.minFilter:it,this.depthBuffer=A.depthBuffer!==void 0?A.depthBuffer:!0,this.stencilBuffer=A.stencilBuffer!==void 0?A.stencilBuffer:!1,this.depthTexture=A.depthTexture!==void 0?A.depthTexture:null,this.samples=A.samples!==void 0?A.samples:0}setSize(e,t,A=1){(this.width!==e||this.height!==t||this.depth!==A)&&(this.width=e,this.height=t,this.depth=A,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=A,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new jh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yh=class extends Wt{constructor(e=null,t=1,A=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:A,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var uy=class extends Wt{constructor(e=null,t=1,A=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:A,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ze=class{constructor(e=0,t=0,A=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=A,this._w=r}static slerp(e,t,A,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),A.slerpQuaternions(e,t,r)}static slerpFlat(e,t,A,r,i,s,o){let a=A[r+0],c=A[r+1],l=A[r+2],u=A[r+3],d=i[s+0],h=i[s+1],f=i[s+2],p=i[s+3];if(o===0){e[t+0]=a,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=f,e[t+3]=p;return}if(u!==p||a!==d||c!==h||l!==f){let m=1-o,g=a*d+c*h+l*f+u*p,y=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){let w=Math.sqrt(x),T=Math.atan2(w,g*y);m=Math.sin(m*T)/w,o=Math.sin(o*T)/w}let b=o*y;if(a=a*m+d*b,c=c*m+h*b,l=l*m+f*b,u=u*m+p*b,m===1-o){let w=1/Math.sqrt(a*a+c*c+l*l+u*u);a*=w,c*=w,l*=w,u*=w}}e[t]=a,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,A,r,i,s){let o=A[r],a=A[r+1],c=A[r+2],l=A[r+3],u=i[s],d=i[s+1],h=i[s+2],f=i[s+3];return e[t]=o*f+l*u+a*h-c*d,e[t+1]=a*f+l*d+c*u-o*h,e[t+2]=c*f+l*h+o*d-a*u,e[t+3]=l*f-o*u-a*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,A,r){return this._x=e,this._y=t,this._z=A,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let A=e._x,r=e._y,i=e._z,s=e._order,o=Math.cos,a=Math.sin,c=o(A/2),l=o(r/2),u=o(i/2),d=a(A/2),h=a(r/2),f=a(i/2);switch(s){case"XYZ":this._x=d*l*u+c*h*f,this._y=c*h*u-d*l*f,this._z=c*l*f+d*h*u,this._w=c*l*u-d*h*f;break;case"YXZ":this._x=d*l*u+c*h*f,this._y=c*h*u-d*l*f,this._z=c*l*f-d*h*u,this._w=c*l*u+d*h*f;break;case"ZXY":this._x=d*l*u-c*h*f,this._y=c*h*u+d*l*f,this._z=c*l*f+d*h*u,this._w=c*l*u-d*h*f;break;case"ZYX":this._x=d*l*u-c*h*f,this._y=c*h*u+d*l*f,this._z=c*l*f-d*h*u,this._w=c*l*u+d*h*f;break;case"YZX":this._x=d*l*u+c*h*f,this._y=c*h*u+d*l*f,this._z=c*l*f-d*h*u,this._w=c*l*u-d*h*f;break;case"XZY":this._x=d*l*u-c*h*f,this._y=c*h*u-d*l*f,this._z=c*l*f+d*h*u,this._w=c*l*u+d*h*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let A=t/2,r=Math.sin(A);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(A),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,A=t[0],r=t[4],i=t[8],s=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10],d=A+o+u;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(l-a)*h,this._y=(i-c)*h,this._z=(s-r)*h}else if(A>o&&A>u){let h=2*Math.sqrt(1+A-o-u);this._w=(l-a)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(i+c)/h}else if(o>u){let h=2*Math.sqrt(1+o-A-u);this._w=(i-c)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(a+l)/h}else{let h=2*Math.sqrt(1+u-A-o);this._w=(s-r)/h,this._x=(i+c)/h,this._y=(a+l)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let A=e.dot(t)+1;return A<Number.EPSILON?(A=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=A):(this._x=0,this._y=-e.z,this._z=e.y,this._w=A)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=A),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mA(this.dot(e),-1,1)))}rotateTowards(e,t){let A=this.angleTo(e);if(A===0)return this;let r=Math.min(1,t/A);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let A=e._x,r=e._y,i=e._z,s=e._w,o=t._x,a=t._y,c=t._z,l=t._w;return this._x=A*l+s*o+r*c-i*a,this._y=r*l+s*a+i*o-A*c,this._z=i*l+s*c+A*a-r*o,this._w=s*l-A*o-r*a-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let A=this._x,r=this._y,i=this._z,s=this._w,o=s*e._w+A*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=A,this._y=r,this._z=i,this;let a=1-o*o;if(a<=Number.EPSILON){let h=1-t;return this._w=h*s+t*this._w,this._x=h*A+t*this._x,this._y=h*r+t*this._y,this._z=h*i+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(a),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=s*u+this._w*d,this._x=A*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,A){return this.copy(e).slerp(t,A)}random(){let e=Math.random(),t=Math.sqrt(1-e),A=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),A*Math.sin(i),A*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class{constructor(e=0,t=0,A=0){S.prototype.isVector3=!0,this.x=e,this.y=t,this.z=A}set(e,t,A){return A===void 0&&(A=this.z),this.x=e,this.y=t,this.z=A,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(qb.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qb.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,A=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*A+i[6]*r,this.y=i[1]*t+i[4]*A+i[7]*r,this.z=i[2]*t+i[5]*A+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,A=this.y,r=this.z,i=e.elements,s=1/(i[3]*t+i[7]*A+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*A+i[8]*r+i[12])*s,this.y=(i[1]*t+i[5]*A+i[9]*r+i[13])*s,this.z=(i[2]*t+i[6]*A+i[10]*r+i[14])*s,this}applyQuaternion(e){let t=this.x,A=this.y,r=this.z,i=e.x,s=e.y,o=e.z,a=e.w,c=a*t+s*r-o*A,l=a*A+o*t-i*r,u=a*r+i*A-s*t,d=-i*t-s*A-o*r;return this.x=c*a+d*-i+l*-o-u*-s,this.y=l*a+d*-s+u*-i-c*-o,this.z=u*a+d*-o+c*-s-l*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,A=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*A+i[8]*r,this.y=i[1]*t+i[5]*A+i[9]*r,this.z=i[2]*t+i[6]*A+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let A=this.length();return this.divideScalar(A||1).multiplyScalar(Math.max(e,Math.min(t,A)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,A){return this.x=e.x+(t.x-e.x)*A,this.y=e.y+(t.y-e.y)*A,this.z=e.z+(t.z-e.z)*A,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let A=e.x,r=e.y,i=e.z,s=t.x,o=t.y,a=t.z;return this.x=r*a-i*o,this.y=i*s-A*a,this.z=A*o-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let A=e.dot(this)/t;return this.copy(e).multiplyScalar(A)}projectOnPlane(e){return Og.copy(this).projectOnVector(e),this.sub(Og)}reflect(e){return this.sub(Og.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let A=this.dot(e)/t;return Math.acos(mA(A,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,A=this.y-e.y,r=this.z-e.z;return t*t+A*A+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,A){let r=Math.sin(t)*e;return this.x=r*Math.sin(A),this.y=Math.cos(t)*e,this.z=r*Math.cos(A),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,A){return this.x=e*Math.sin(t),this.y=A,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),A=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=A,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,A){return A!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,A=Math.sqrt(1-e**2);return this.x=A*Math.cos(t),this.y=A*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Og=new S,qb=new Ze,mt=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,A=1/0,r=1/0,i=-1/0,s=-1/0,o=-1/0;for(let a=0,c=e.length;a<c;a+=3){let l=e[a],u=e[a+1],d=e[a+2];l<t&&(t=l),u<A&&(A=u),d<r&&(r=d),l>i&&(i=l),u>s&&(s=u),d>o&&(o=d)}return this.min.set(t,A,r),this.max.set(i,s,o),this}setFromBufferAttribute(e){let t=1/0,A=1/0,r=1/0,i=-1/0,s=-1/0,o=-1/0;for(let a=0,c=e.count;a<c;a++){let l=e.getX(a),u=e.getY(a),d=e.getZ(a);l<t&&(t=l),u<A&&(A=u),d<r&&(r=d),l>i&&(i=l),u>s&&(s=u),d>o&&(o=d)}return this.min.set(t,A,r),this.max.set(i,s,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,A=e.length;t<A;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let A=$s.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(A),this.max.copy(e).add(A),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let A=e.geometry;if(A!==void 0)if(t&&A.attributes!=null&&A.attributes.position!==void 0){let i=A.attributes.position;for(let s=0,o=i.count;s<o;s++)$s.fromBufferAttribute(i,s).applyMatrix4(e.matrixWorld),this.expandByPoint($s)}else A.boundingBox===null&&A.computeBoundingBox(),Lg.copy(A.boundingBox),Lg.applyMatrix4(e.matrixWorld),this.union(Lg);let r=e.children;for(let i=0,s=r.length;i<s;i++)this.expandByObject(r[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$s),$s.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,A;return e.normal.x>0?(t=e.normal.x*this.min.x,A=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,A=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,A+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,A+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,A+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,A+=e.normal.z*this.min.z),t<=-e.constant&&A>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zc),fh.subVectors(this.max,Zc),na.subVectors(e.a,Zc),ra.subVectors(e.b,Zc),ia.subVectors(e.c,Zc),Ki.subVectors(ra,na),Zi.subVectors(ia,ra),eo.subVectors(na,ia);let t=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-eo.z,eo.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,eo.z,0,-eo.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-eo.y,eo.x,0];return!_g(t,na,ra,ia,fh)||(t=[1,0,0,0,1,0,0,0,1],!_g(t,na,ra,ia,fh))?!1:(ph.crossVectors(Ki,Zi),t=[ph.x,ph.y,ph.z],_g(t,na,ra,ia,fh))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return $s.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize($s).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},yi=[new S,new S,new S,new S,new S,new S,new S,new S],$s=new S,Lg=new mt,na=new S,ra=new S,ia=new S,Ki=new S,Zi=new S,eo=new S,Zc=new S,fh=new S,ph=new S,to=new S;function _g(n,e,t,A,r){for(let i=0,s=n.length-3;i<=s;i+=3){to.fromArray(n,i);let o=r.x*Math.abs(to.x)+r.y*Math.abs(to.y)+r.z*Math.abs(to.z),a=e.dot(to),c=t.dot(to),l=A.dot(to);if(Math.max(-Math.max(a,c,l),Math.min(a,c,l))>o)return!1}return!0}var YI=new mt,Xb=new S,mh=new S,Rg=new S,uA=class{constructor(e=new S,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let A=this.center;t!==void 0?A.copy(t):YI.setFromPoints(e).getCenter(A);let r=0;for(let i=0,s=e.length;i<s;i++)r=Math.max(r,A.distanceToSquared(e[i]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let A=this.center.distanceToSquared(e);return t.copy(e),A>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Rg.subVectors(e,this.center);let t=Rg.lengthSq();if(t>this.radius*this.radius){let A=Math.sqrt(t),r=(A-this.radius)*.5;this.center.add(Rg.multiplyScalar(r/A)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?mh.set(0,0,1).multiplyScalar(e.radius):mh.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Xb.copy(e.center).add(mh)),this.expandByPoint(Xb.copy(e.center).sub(mh)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vi=new S,Bg=new S,gh=new S,Ji=new S,Ng=new S,yh=new S,Fg=new S,hr=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let A=t.dot(this.direction);return A<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(A).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.direction).multiplyScalar(t).add(this.origin),vi.distanceToSquared(e))}distanceSqToSegment(e,t,A,r){Bg.copy(e).add(t).multiplyScalar(.5),gh.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(Bg);let i=e.distanceTo(t)*.5,s=-this.direction.dot(gh),o=Ji.dot(this.direction),a=-Ji.dot(gh),c=Ji.lengthSq(),l=Math.abs(1-s*s),u,d,h,f;if(l>0)if(u=s*a-o,d=s*o-a,f=i*l,u>=0)if(d>=-f)if(d<=f){let p=1/l;u*=p,d*=p,h=u*(u+s*d+2*o)+d*(s*u+d+2*a)+c}else d=i,u=Math.max(0,-(s*d+o)),h=-u*u+d*(d+2*a)+c;else d=-i,u=Math.max(0,-(s*d+o)),h=-u*u+d*(d+2*a)+c;else d<=-f?(u=Math.max(0,-(-s*i+o)),d=u>0?-i:Math.min(Math.max(-i,-a),i),h=-u*u+d*(d+2*a)+c):d<=f?(u=0,d=Math.min(Math.max(-i,-a),i),h=d*(d+2*a)+c):(u=Math.max(0,-(s*i+o)),d=u>0?i:Math.min(Math.max(-i,-a),i),h=-u*u+d*(d+2*a)+c);else d=s>0?-i:i,u=Math.max(0,-(s*d+o)),h=-u*u+d*(d+2*a)+c;return A&&A.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(gh).multiplyScalar(d).add(Bg),h}intersectSphere(e,t){vi.subVectors(e.center,this.origin);let A=vi.dot(this.direction),r=vi.dot(vi)-A*A,i=e.radius*e.radius;if(r>i)return null;let s=Math.sqrt(i-r),o=A-s,a=A+s;return o<0&&a<0?null:o<0?this.at(a,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let A=-(this.origin.dot(e.normal)+e.constant)/t;return A>=0?A:null}intersectPlane(e,t){let A=this.distanceToPlane(e);return A===null?null:this.at(A,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let A,r,i,s,o,a,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(A=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(A=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,s=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,s=(e.min.y-d.y)*l),A>s||i>r||((i>A||A!==A)&&(A=i),(s<r||r!==r)&&(r=s),u>=0?(o=(e.min.z-d.z)*u,a=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,a=(e.min.z-d.z)*u),A>a||o>r)||((o>A||A!==A)&&(A=o),(a<r||r!==r)&&(r=a),r<0)?null:this.at(A>=0?A:r,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,A,r,i){Ng.subVectors(t,e),yh.subVectors(A,e),Fg.crossVectors(Ng,yh);let s=this.direction.dot(Fg),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Ji.subVectors(this.origin,e);let a=o*this.direction.dot(yh.crossVectors(Ji,yh));if(a<0)return null;let c=o*this.direction.dot(Ng.cross(Ji));if(c<0||a+c>s)return null;let l=-o*Ji.dot(Fg);return l<0?null:this.at(l/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class{constructor(){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,A,r,i,s,o,a,c,l,u,d,h,f,p,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=A,g[12]=r,g[1]=i,g[5]=s,g[9]=o,g[13]=a,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=h,g[7]=f,g[11]=p,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(e){let t=this.elements,A=e.elements;return t[0]=A[0],t[1]=A[1],t[2]=A[2],t[3]=A[3],t[4]=A[4],t[5]=A[5],t[6]=A[6],t[7]=A[7],t[8]=A[8],t[9]=A[9],t[10]=A[10],t[11]=A[11],t[12]=A[12],t[13]=A[13],t[14]=A[14],t[15]=A[15],this}copyPosition(e){let t=this.elements,A=e.elements;return t[12]=A[12],t[13]=A[13],t[14]=A[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,A){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),A.setFromMatrixColumn(this,2),this}makeBasis(e,t,A){return this.set(e.x,t.x,A.x,0,e.y,t.y,A.y,0,e.z,t.z,A.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,A=e.elements,r=1/sa.setFromMatrixColumn(e,0).length(),i=1/sa.setFromMatrixColumn(e,1).length(),s=1/sa.setFromMatrixColumn(e,2).length();return t[0]=A[0]*r,t[1]=A[1]*r,t[2]=A[2]*r,t[3]=0,t[4]=A[4]*i,t[5]=A[5]*i,t[6]=A[6]*i,t[7]=0,t[8]=A[8]*s,t[9]=A[9]*s,t[10]=A[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,A=e.x,r=e.y,i=e.z,s=Math.cos(A),o=Math.sin(A),a=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order==="XYZ"){let d=s*l,h=s*u,f=o*l,p=o*u;t[0]=a*l,t[4]=-a*u,t[8]=c,t[1]=h+f*c,t[5]=d-p*c,t[9]=-o*a,t[2]=p-d*c,t[6]=f+h*c,t[10]=s*a}else if(e.order==="YXZ"){let d=a*l,h=a*u,f=c*l,p=c*u;t[0]=d+p*o,t[4]=f*o-h,t[8]=s*c,t[1]=s*u,t[5]=s*l,t[9]=-o,t[2]=h*o-f,t[6]=p+d*o,t[10]=s*a}else if(e.order==="ZXY"){let d=a*l,h=a*u,f=c*l,p=c*u;t[0]=d-p*o,t[4]=-s*u,t[8]=f+h*o,t[1]=h+f*o,t[5]=s*l,t[9]=p-d*o,t[2]=-s*c,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){let d=s*l,h=s*u,f=o*l,p=o*u;t[0]=a*l,t[4]=f*c-h,t[8]=d*c+p,t[1]=a*u,t[5]=p*c+d,t[9]=h*c-f,t[2]=-c,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){let d=s*a,h=s*c,f=o*a,p=o*c;t[0]=a*l,t[4]=p-d*u,t[8]=f*u+h,t[1]=u,t[5]=s*l,t[9]=-o*l,t[2]=-c*l,t[6]=h*u+f,t[10]=d-p*u}else if(e.order==="XZY"){let d=s*a,h=s*c,f=o*a,p=o*c;t[0]=a*l,t[4]=-u,t[8]=c*l,t[1]=d*u+p,t[5]=s*l,t[9]=h*u-f,t[2]=f*u-h,t[6]=o*l,t[10]=p*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qI,e,XI)}lookAt(e,t,A){let r=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),$i.crossVectors(A,Ln),$i.lengthSq()===0&&(Math.abs(A.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),$i.crossVectors(A,Ln)),$i.normalize(),vh.crossVectors(Ln,$i),r[0]=$i.x,r[4]=vh.x,r[8]=Ln.x,r[1]=$i.y,r[5]=vh.y,r[9]=Ln.y,r[2]=$i.z,r[6]=vh.z,r[10]=Ln.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let A=e.elements,r=t.elements,i=this.elements,s=A[0],o=A[4],a=A[8],c=A[12],l=A[1],u=A[5],d=A[9],h=A[13],f=A[2],p=A[6],m=A[10],g=A[14],y=A[3],x=A[7],b=A[11],w=A[15],T=r[0],M=r[4],v=r[8],E=r[12],C=r[1],P=r[5],D=r[9],L=r[13],I=r[2],B=r[6],N=r[10],W=r[14],X=r[3],F=r[7],k=r[11],Q=r[15];return i[0]=s*T+o*C+a*I+c*X,i[4]=s*M+o*P+a*B+c*F,i[8]=s*v+o*D+a*N+c*k,i[12]=s*E+o*L+a*W+c*Q,i[1]=l*T+u*C+d*I+h*X,i[5]=l*M+u*P+d*B+h*F,i[9]=l*v+u*D+d*N+h*k,i[13]=l*E+u*L+d*W+h*Q,i[2]=f*T+p*C+m*I+g*X,i[6]=f*M+p*P+m*B+g*F,i[10]=f*v+p*D+m*N+g*k,i[14]=f*E+p*L+m*W+g*Q,i[3]=y*T+x*C+b*I+w*X,i[7]=y*M+x*P+b*B+w*F,i[11]=y*v+x*D+b*N+w*k,i[15]=y*E+x*L+b*W+w*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],A=e[4],r=e[8],i=e[12],s=e[1],o=e[5],a=e[9],c=e[13],l=e[2],u=e[6],d=e[10],h=e[14],f=e[3],p=e[7],m=e[11],g=e[15];return f*(+i*a*u-r*c*u-i*o*d+A*c*d+r*o*h-A*a*h)+p*(+t*a*h-t*c*d+i*s*d-r*s*h+r*c*l-i*a*l)+m*(+t*c*u-t*o*h-i*s*u+A*s*h+i*o*l-A*c*l)+g*(-r*o*l-t*a*u+t*o*d+r*s*u-A*s*d+A*a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,A){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=A),this}invert(){let e=this.elements,t=e[0],A=e[1],r=e[2],i=e[3],s=e[4],o=e[5],a=e[6],c=e[7],l=e[8],u=e[9],d=e[10],h=e[11],f=e[12],p=e[13],m=e[14],g=e[15],y=u*m*c-p*d*c+p*a*h-o*m*h-u*a*g+o*d*g,x=f*d*c-l*m*c-f*a*h+s*m*h+l*a*g-s*d*g,b=l*p*c-f*u*c+f*o*h-s*p*h-l*o*g+s*u*g,w=f*u*a-l*p*a-f*o*d+s*p*d+l*o*m-s*u*m,T=t*y+A*x+r*b+i*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let M=1/T;return e[0]=y*M,e[1]=(p*d*i-u*m*i-p*r*h+A*m*h+u*r*g-A*d*g)*M,e[2]=(o*m*i-p*a*i+p*r*c-A*m*c-o*r*g+A*a*g)*M,e[3]=(u*a*i-o*d*i-u*r*c+A*d*c+o*r*h-A*a*h)*M,e[4]=x*M,e[5]=(l*m*i-f*d*i+f*r*h-t*m*h-l*r*g+t*d*g)*M,e[6]=(f*a*i-s*m*i-f*r*c+t*m*c+s*r*g-t*a*g)*M,e[7]=(s*d*i-l*a*i+l*r*c-t*d*c-s*r*h+t*a*h)*M,e[8]=b*M,e[9]=(f*u*i-l*p*i-f*A*h+t*p*h+l*A*g-t*u*g)*M,e[10]=(s*p*i-f*o*i+f*A*c-t*p*c-s*A*g+t*o*g)*M,e[11]=(l*o*i-s*u*i-l*A*c+t*u*c+s*A*h-t*o*h)*M,e[12]=w*M,e[13]=(l*p*r-f*u*r+f*A*d-t*p*d-l*A*m+t*u*m)*M,e[14]=(f*o*r-s*p*r-f*A*a+t*p*a+s*A*m-t*o*m)*M,e[15]=(s*u*r-l*o*r+l*A*a-t*u*a-s*A*d+t*o*d)*M,this}scale(e){let t=this.elements,A=e.x,r=e.y,i=e.z;return t[0]*=A,t[4]*=r,t[8]*=i,t[1]*=A,t[5]*=r,t[9]*=i,t[2]*=A,t[6]*=r,t[10]*=i,t[3]*=A,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],A=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,A,r))}makeTranslation(e,t,A){return this.set(1,0,0,e,0,1,0,t,0,0,1,A,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),A=Math.sin(e);return this.set(1,0,0,0,0,t,-A,0,0,A,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),A=Math.sin(e);return this.set(t,0,A,0,0,1,0,0,-A,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),A=Math.sin(e);return this.set(t,-A,0,0,A,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let A=Math.cos(t),r=Math.sin(t),i=1-A,s=e.x,o=e.y,a=e.z,c=i*s,l=i*o;return this.set(c*s+A,c*o-r*a,c*a+r*o,0,c*o+r*a,l*o+A,l*a-r*s,0,c*a-r*o,l*a+r*s,i*a*a+A,0,0,0,0,1),this}makeScale(e,t,A){return this.set(e,0,0,0,0,t,0,0,0,0,A,0,0,0,0,1),this}makeShear(e,t,A,r,i,s){return this.set(1,A,i,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,A){let r=this.elements,i=t._x,s=t._y,o=t._z,a=t._w,c=i+i,l=s+s,u=o+o,d=i*c,h=i*l,f=i*u,p=s*l,m=s*u,g=o*u,y=a*c,x=a*l,b=a*u,w=A.x,T=A.y,M=A.z;return r[0]=(1-(p+g))*w,r[1]=(h+b)*w,r[2]=(f-x)*w,r[3]=0,r[4]=(h-b)*T,r[5]=(1-(d+g))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(f+x)*M,r[9]=(m-y)*M,r[10]=(1-(d+p))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,A){let r=this.elements,i=sa.set(r[0],r[1],r[2]).length(),s=sa.set(r[4],r[5],r[6]).length(),o=sa.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],cr.copy(this);let c=1/i,l=1/s,u=1/o;return cr.elements[0]*=c,cr.elements[1]*=c,cr.elements[2]*=c,cr.elements[4]*=l,cr.elements[5]*=l,cr.elements[6]*=l,cr.elements[8]*=u,cr.elements[9]*=u,cr.elements[10]*=u,t.setFromRotationMatrix(cr),A.x=i,A.y=s,A.z=o,this}makePerspective(e,t,A,r,i,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let o=this.elements,a=2*i/(t-e),c=2*i/(A-r),l=(t+e)/(t-e),u=(A+r)/(A-r),d=-(s+i)/(s-i),h=-2*s*i/(s-i);return o[0]=a,o[4]=0,o[8]=l,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=h,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,A,r,i,s){let o=this.elements,a=1/(t-e),c=1/(A-r),l=1/(s-i),u=(t+e)*a,d=(A+r)*c,h=(s+i)*l;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*l,o[14]=-h,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,A=e.elements;for(let r=0;r<16;r++)if(t[r]!==A[r])return!1;return!0}fromArray(e,t=0){for(let A=0;A<16;A++)this.elements[A]=e[A+t];return this}toArray(e=[],t=0){let A=this.elements;return e[t]=A[0],e[t+1]=A[1],e[t+2]=A[2],e[t+3]=A[3],e[t+4]=A[4],e[t+5]=A[5],e[t+6]=A[6],e[t+7]=A[7],e[t+8]=A[8],e[t+9]=A[9],e[t+10]=A[10],e[t+11]=A[11],e[t+12]=A[12],e[t+13]=A[13],e[t+14]=A[14],e[t+15]=A[15],e}},sa=new S,cr=new de,qI=new S(0,0,0),XI=new S(1,1,1),$i=new S,vh=new S,Ln=new S,Qb=new de,Kb=new Ze,jt=class{constructor(e=0,t=0,A=0,r=jt.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=A,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,A,r=this._order){return this._x=e,this._y=t,this._z=A,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,A=!0){let r=e.elements,i=r[0],s=r[4],o=r[8],a=r[1],c=r[5],l=r[9],u=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(mA(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,h),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mA(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case"ZXY":this._x=Math.asin(mA(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(a,i));break;case"ZYX":this._y=Math.asin(-mA(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(a,i)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(mA(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-mA(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,A===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,A){return Qb.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qb,t,A)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kb.setFromEuler(this),this.setFromQuaternion(Kb,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};jt.DefaultOrder="XYZ";jt.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var cu=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},QI=0,Zb=new S,oa=new Ze,xi=new de,xh=new S,Jc=new S,KI=new S,ZI=new Ze,Jb=new S(1,0,0),$b=new S(0,1,0),ew=new S(0,0,1),JI={type:"added"},tw={type:"removed"},dt=class extends Ut{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QI++}),this.uuid=Gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DefaultUp.clone();let e=new S,t=new jt,A=new Ze,r=new S(1,1,1);function i(){A.setFromEuler(t,!1)}function s(){t.setFromQuaternion(A,void 0,!1)}t._onChange(i),A._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:A},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new de},normalMatrix:{value:new rA}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=dt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oa.setFromAxisAngle(e,t),this.quaternion.multiply(oa),this}rotateOnWorldAxis(e,t){return oa.setFromAxisAngle(e,t),this.quaternion.premultiply(oa),this}rotateX(e){return this.rotateOnAxis(Jb,e)}rotateY(e){return this.rotateOnAxis($b,e)}rotateZ(e){return this.rotateOnAxis(ew,e)}translateOnAxis(e,t){return Zb.copy(e).applyQuaternion(this.quaternion),this.position.add(Zb.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jb,e)}translateY(e){return this.translateOnAxis($b,e)}translateZ(e){return this.translateOnAxis(ew,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,A){e.isVector3?xh.copy(e):xh.set(e,t,A);let r=this.parent;this.updateWorldMatrix(!0,!1),Jc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Jc,xh,this.up):xi.lookAt(xh,Jc,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),oa.setFromRotationMatrix(xi),this.quaternion.premultiply(oa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(JI)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let A=0;A<arguments.length;A++)this.remove(arguments[A]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tw)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(tw)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let A=0,r=this.children.length;A<r;A++){let s=this.children[A].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jc,e,KI),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jc,ZI,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let A=0,r=t.length;A<r;A++)t[A].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let A=0,r=t.length;A<r;A++)t[A].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let A=0,r=t.length;A<r;A++)t[A].updateMatrixWorld(e)}updateWorldMatrix(e,t){let A=this.parent;if(e===!0&&A!==null&&A.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let i=0,s=r.length;i<s;i++)r[i].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",A={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},A.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function i(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){let u=a[c];i(e.shapes,u)}else i(e.shapes,a)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(i(e.materials,this.material[a]));r.material=o}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];r.animations.push(i(e.animations,a))}}if(t){let o=s(e.geometries),a=s(e.materials),c=s(e.textures),l=s(e.images),u=s(e.shapes),d=s(e.skeletons),h=s(e.animations),f=s(e.nodes);o.length>0&&(A.geometries=o),a.length>0&&(A.materials=a),c.length>0&&(A.textures=c),l.length>0&&(A.images=l),u.length>0&&(A.shapes=u),d.length>0&&(A.skeletons=d),h.length>0&&(A.animations=h),f.length>0&&(A.nodes=f)}return A.object=r,A;function s(o){let a=[];for(let c in o){let l=o[c];delete l.metadata,a.push(l)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let A=0;A<e.children.length;A++){let r=e.children[A];this.add(r.clone())}return this}};dt.DefaultUp=new S(0,1,0);dt.DefaultMatrixAutoUpdate=!0;var ur=new S,bi=new S,Gg=new S,wi=new S,aa=new S,la=new S,Aw=new S,kg=new S,Ug=new S,Vg=new S,Qt=class{constructor(e=new S,t=new S,A=new S){this.a=e,this.b=t,this.c=A}static getNormal(e,t,A,r){r.subVectors(A,t),ur.subVectors(e,t),r.cross(ur);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,A,r,i){ur.subVectors(r,t),bi.subVectors(A,t),Gg.subVectors(e,t);let s=ur.dot(ur),o=ur.dot(bi),a=ur.dot(Gg),c=bi.dot(bi),l=bi.dot(Gg),u=s*c-o*o;if(u===0)return i.set(-2,-1,-1);let d=1/u,h=(c*a-o*l)*d,f=(s*l-o*a)*d;return i.set(1-h-f,f,h)}static containsPoint(e,t,A,r){return this.getBarycoord(e,t,A,r,wi),wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getUV(e,t,A,r,i,s,o,a){return this.getBarycoord(e,t,A,r,wi),a.set(0,0),a.addScaledVector(i,wi.x),a.addScaledVector(s,wi.y),a.addScaledVector(o,wi.z),a}static isFrontFacing(e,t,A,r){return ur.subVectors(A,t),bi.subVectors(e,t),ur.cross(bi).dot(r)<0}set(e,t,A){return this.a.copy(e),this.b.copy(t),this.c.copy(A),this}setFromPointsAndIndices(e,t,A,r){return this.a.copy(e[t]),this.b.copy(e[A]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,A,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,A),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ur.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ur.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,A,r,i){return Qt.getUV(e,this.a,this.b,this.c,t,A,r,i)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let A=this.a,r=this.b,i=this.c,s,o;aa.subVectors(r,A),la.subVectors(i,A),kg.subVectors(e,A);let a=aa.dot(kg),c=la.dot(kg);if(a<=0&&c<=0)return t.copy(A);Ug.subVectors(e,r);let l=aa.dot(Ug),u=la.dot(Ug);if(l>=0&&u<=l)return t.copy(r);let d=a*u-l*c;if(d<=0&&a>=0&&l<=0)return s=a/(a-l),t.copy(A).addScaledVector(aa,s);Vg.subVectors(e,i);let h=aa.dot(Vg),f=la.dot(Vg);if(f>=0&&h<=f)return t.copy(i);let p=h*c-a*f;if(p<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(A).addScaledVector(la,o);let m=l*f-h*u;if(m<=0&&u-l>=0&&h-f>=0)return Aw.subVectors(i,r),o=(u-l)/(u-l+(h-f)),t.copy(r).addScaledVector(Aw,o);let g=1/(m+p+d);return s=p*g,o=d*g,t.copy(A).addScaledVector(aa,s).addScaledVector(la,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$I=0,os=class extends Ut{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$I++}),this.uuid=Gr(),this.name="",this.type="Material",this.blending=va,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Yw,this.blendDst=qw,this.blendEquation=ma,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ry,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=CI,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cg,this.stencilZFail=Cg,this.stencilZPass=Cg,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let A=e[t];if(A===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=A===ND;continue}let r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(A):r&&r.isVector3&&A&&A.isVector3?r.copy(A):this[t]=A}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let A={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),this.color&&this.color.isColor&&(A.color=this.color.getHex()),this.roughness!==void 0&&(A.roughness=this.roughness),this.metalness!==void 0&&(A.metalness=this.metalness),this.sheen!==void 0&&(A.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(A.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(A.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(A.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(A.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(A.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(A.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(A.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(A.shininess=this.shininess),this.clearcoat!==void 0&&(A.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(A.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(A.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(A.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(A.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,A.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(A.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(A.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(A.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(A.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(A.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(A.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(A.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(A.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(A.lightMap=this.lightMap.toJSON(e).uuid,A.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(A.aoMap=this.aoMap.toJSON(e).uuid,A.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(A.bumpMap=this.bumpMap.toJSON(e).uuid,A.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(A.normalMap=this.normalMap.toJSON(e).uuid,A.normalMapType=this.normalMapType,A.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(A.displacementMap=this.displacementMap.toJSON(e).uuid,A.displacementScale=this.displacementScale,A.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(A.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(A.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(A.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(A.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(A.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(A.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(A.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(A.combine=this.combine)),this.envMapIntensity!==void 0&&(A.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(A.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(A.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(A.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(A.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(A.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(A.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(A.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(A.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(A.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(A.size=this.size),this.shadowSide!==null&&(A.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(A.sizeAttenuation=this.sizeAttenuation),this.blending!==va&&(A.blending=this.blending),this.side!==kr&&(A.side=this.side),this.vertexColors&&(A.vertexColors=!0),this.opacity<1&&(A.opacity=this.opacity),this.transparent===!0&&(A.transparent=this.transparent),A.depthFunc=this.depthFunc,A.depthTest=this.depthTest,A.depthWrite=this.depthWrite,A.colorWrite=this.colorWrite,A.stencilWrite=this.stencilWrite,A.stencilWriteMask=this.stencilWriteMask,A.stencilFunc=this.stencilFunc,A.stencilRef=this.stencilRef,A.stencilFuncMask=this.stencilFuncMask,A.stencilFail=this.stencilFail,A.stencilZFail=this.stencilZFail,A.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(A.rotation=this.rotation),this.polygonOffset===!0&&(A.polygonOffset=!0),this.polygonOffsetFactor!==0&&(A.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(A.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(A.linewidth=this.linewidth),this.dashSize!==void 0&&(A.dashSize=this.dashSize),this.gapSize!==void 0&&(A.gapSize=this.gapSize),this.scale!==void 0&&(A.scale=this.scale),this.dithering===!0&&(A.dithering=!0),this.alphaTest>0&&(A.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(A.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(A.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(A.wireframe=this.wireframe),this.wireframeLinewidth>1&&(A.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(A.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(A.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(A.flatShading=this.flatShading),this.visible===!1&&(A.visible=!1),this.toneMapped===!1&&(A.toneMapped=!1),this.fog===!1&&(A.fog=!1),JSON.stringify(this.userData)!=="{}"&&(A.userData=this.userData);function r(i){let s=[];for(let o in i){let a=i[o];delete a.metadata,s.push(a)}return s}if(t){let i=r(e.textures),s=r(e.images);i.length>0&&(A.textures=i),s.length>0&&(A.images=s)}return A}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,A=null;if(t!==null){let r=t.length;A=new Array(r);for(let i=0;i!==r;++i)A[i]=t[i].clone()}return this.clippingPlanes=A,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},oo=class extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xw,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},cA=new S,bh=new G,Fe=class{constructor(e,t,A){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=A===!0,this.usage=ay,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,A){e*=this.itemSize,A*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[A+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,A=0;for(let r=0,i=e.length;r<i;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),s=new Le),t[A++]=s.r,t[A++]=s.g,t[A++]=s.b}return this}copyVector2sArray(e){let t=this.array,A=0;for(let r=0,i=e.length;r<i;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),s=new G),t[A++]=s.x,t[A++]=s.y}return this}copyVector3sArray(e){let t=this.array,A=0;for(let r=0,i=e.length;r<i;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),s=new S),t[A++]=s.x,t[A++]=s.y,t[A++]=s.z}return this}copyVector4sArray(e){let t=this.array,A=0;for(let r=0,i=e.length;r<i;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),s=new He),t[A++]=s.x,t[A++]=s.y,t[A++]=s.z,t[A++]=s.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,A=this.count;t<A;t++)bh.fromBufferAttribute(this,t),bh.applyMatrix3(e),this.setXY(t,bh.x,bh.y);else if(this.itemSize===3)for(let t=0,A=this.count;t<A;t++)cA.fromBufferAttribute(this,t),cA.applyMatrix3(e),this.setXYZ(t,cA.x,cA.y,cA.z);return this}applyMatrix4(e){for(let t=0,A=this.count;t<A;t++)cA.fromBufferAttribute(this,t),cA.applyMatrix4(e),this.setXYZ(t,cA.x,cA.y,cA.z);return this}applyNormalMatrix(e){for(let t=0,A=this.count;t<A;t++)cA.fromBufferAttribute(this,t),cA.applyNormalMatrix(e),this.setXYZ(t,cA.x,cA.y,cA.z);return this}transformDirection(e){for(let t=0,A=this.count;t<A;t++)cA.fromBufferAttribute(this,t),cA.transformDirection(e),this.setXYZ(t,cA.x,cA.y,cA.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,A){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=A,this}setXYZ(e,t,A,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=A,this.array[e+2]=r,this}setXYZW(e,t,A,r,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=A,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ay&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};var qh=class extends Fe{constructor(e,t,A){super(new Uint16Array(e),t,A)}};var as=class extends Fe{constructor(e,t,A){super(new Uint32Array(e),t,A)}},Xh=class extends Fe{constructor(e,t,A){super(new Uint16Array(e),t,A),this.isFloat16BufferAttribute=!0}},Se=class extends Fe{constructor(e,t,A){super(new Float32Array(e),t,A)}};var eO=0,Xn=new de,zg=new dt,ca=new S,_n=new mt,$c=new mt,CA=new S,Ie=class extends Ut{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eO++}),this.uuid=Gr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jw(e)?as:qh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,A=0){this.groups.push({start:e,count:t,materialIndex:A})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let A=this.attributes.normal;if(A!==void 0){let i=new rA().getNormalMatrix(e);A.applyNormalMatrix(i),A.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,A){return Xn.makeTranslation(e,t,A),this.applyMatrix4(Xn),this}scale(e,t,A){return Xn.makeScale(e,t,A),this.applyMatrix4(Xn),this}lookAt(e){return zg.lookAt(e),zg.updateMatrix(),this.applyMatrix4(zg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ca).negate(),this.translate(ca.x,ca.y,ca.z),this}setFromPoints(e){let t=[];for(let A=0,r=e.length;A<r;A++){let i=e[A];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Se(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let A=0,r=t.length;A<r;A++){let i=t[A];_n.setFromBufferAttribute(i),this.morphTargetsRelative?(CA.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(CA),CA.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(CA)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uA);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){let A=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let o=t[i];$c.setFromBufferAttribute(o),this.morphTargetsRelative?(CA.addVectors(_n.min,$c.min),_n.expandByPoint(CA),CA.addVectors(_n.max,$c.max),_n.expandByPoint(CA)):(_n.expandByPoint($c.min),_n.expandByPoint($c.max))}_n.getCenter(A);let r=0;for(let i=0,s=e.count;i<s;i++)CA.fromBufferAttribute(e,i),r=Math.max(r,A.distanceToSquared(CA));if(t)for(let i=0,s=t.length;i<s;i++){let o=t[i],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)CA.fromBufferAttribute(o,c),a&&(ca.fromBufferAttribute(e,c),CA.add(ca)),r=Math.max(r,A.distanceToSquared(CA))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let A=e.array,r=t.position.array,i=t.normal.array,s=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*o),4));let a=this.getAttribute("tangent").array,c=[],l=[];for(let C=0;C<o;C++)c[C]=new S,l[C]=new S;let u=new S,d=new S,h=new S,f=new G,p=new G,m=new G,g=new S,y=new S;function x(C,P,D){u.fromArray(r,C*3),d.fromArray(r,P*3),h.fromArray(r,D*3),f.fromArray(s,C*2),p.fromArray(s,P*2),m.fromArray(s,D*2),d.sub(u),h.sub(u),p.sub(f),m.sub(f);let L=1/(p.x*m.y-m.x*p.y);!isFinite(L)||(g.copy(d).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(L),y.copy(h).multiplyScalar(p.x).addScaledVector(d,-m.x).multiplyScalar(L),c[C].add(g),c[P].add(g),c[D].add(g),l[C].add(y),l[P].add(y),l[D].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:A.length}]);for(let C=0,P=b.length;C<P;++C){let D=b[C],L=D.start,I=D.count;for(let B=L,N=L+I;B<N;B+=3)x(A[B+0],A[B+1],A[B+2])}let w=new S,T=new S,M=new S,v=new S;function E(C){M.fromArray(i,C*3),v.copy(M);let P=c[C];w.copy(P),w.sub(M.multiplyScalar(M.dot(P))).normalize(),T.crossVectors(v,P);let L=T.dot(l[C])<0?-1:1;a[C*4]=w.x,a[C*4+1]=w.y,a[C*4+2]=w.z,a[C*4+3]=L}for(let C=0,P=b.length;C<P;++C){let D=b[C],L=D.start,I=D.count;for(let B=L,N=L+I;B<N;B+=3)E(A[B+0]),E(A[B+1]),E(A[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let A=this.getAttribute("normal");if(A===void 0)A=new Fe(new Float32Array(t.count*3),3),this.setAttribute("normal",A);else for(let d=0,h=A.count;d<h;d++)A.setXYZ(d,0,0,0);let r=new S,i=new S,s=new S,o=new S,a=new S,c=new S,l=new S,u=new S;if(e)for(let d=0,h=e.count;d<h;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,m),l.subVectors(s,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(A,f),a.fromBufferAttribute(A,p),c.fromBufferAttribute(A,m),o.add(l),a.add(l),c.add(l),A.setXYZ(f,o.x,o.y,o.z),A.setXYZ(p,a.x,a.y,a.z),A.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),i.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),l.subVectors(s,i),u.subVectors(r,i),l.cross(u),A.setXYZ(d+0,l.x,l.y,l.z),A.setXYZ(d+1,l.x,l.y,l.z),A.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),A.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let A=this.attributes;for(let r in A){if(e.attributes[r]===void 0)continue;let s=A[r].array,o=e.attributes[r],a=o.array,c=o.itemSize*t,l=Math.min(a.length,s.length-c);for(let u=0,d=c;u<l;u++,d++)s[d]=a[u]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,A=e.count;t<A;t++)CA.fromBufferAttribute(e,t),CA.normalize(),e.setXYZ(t,CA.x,CA.y,CA.z)}toNonIndexed(){function e(o,a){let c=o.array,l=o.itemSize,u=o.normalized,d=new c.constructor(a.length*l),h=0,f=0;for(let p=0,m=a.length;p<m;p++){o.isInterleavedBufferAttribute?h=a[p]*o.data.stride+o.offset:h=a[p]*l;for(let g=0;g<l;g++)d[f++]=c[h++]}return new Fe(d,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Ie,A=this.index.array,r=this.attributes;for(let o in r){let a=r[o],c=e(a,A);t.setAttribute(o,c)}let i=this.morphAttributes;for(let o in i){let a=[],c=i[o];for(let l=0,u=c.length;l<u;l++){let d=c[l],h=e(d,A);a.push(h)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let a=this.parameters;for(let c in a)a[c]!==void 0&&(e[c]=a[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let A=this.attributes;for(let a in A){let c=A[a];e.data.attributes[a]=c.toJSON(e.data)}let r={},i=!1;for(let a in this.morphAttributes){let c=this.morphAttributes[a],l=[];for(let u=0,d=c.length;u<d;u++){let h=c[u];l.push(h.toJSON(e.data))}l.length>0&&(r[a]=l,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let A=e.index;A!==null&&this.setIndex(A.clone(t));let r=e.attributes;for(let c in r){let l=r[c];this.setAttribute(c,l.clone(t))}let i=e.morphAttributes;for(let c in i){let l=[],u=i[c];for(let d=0,h=u.length;d<h;d++)l.push(u[d].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,l=s.length;c<l;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},nw=new de,ua=new hr,Hg=new uA,es=new S,ts=new S,As=new S,Wg=new S,jg=new S,Yg=new S,wh=new S,Sh=new S,Th=new S,Mh=new G,Eh=new G,Ch=new G,qg=new S,Ph=new S,PA=class extends dt{constructor(e=new Ie,t=new oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,A=Object.keys(t);if(A.length>0){let r=t[A[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=r.length;i<s;i++){let o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}raycast(e,t){let A=this.geometry,r=this.material,i=this.matrixWorld;if(r===void 0||(A.boundingSphere===null&&A.computeBoundingSphere(),Hg.copy(A.boundingSphere),Hg.applyMatrix4(i),e.ray.intersectsSphere(Hg)===!1)||(nw.copy(i).invert(),ua.copy(e.ray).applyMatrix4(nw),A.boundingBox!==null&&ua.intersectsBox(A.boundingBox)===!1))return;let s,o=A.index,a=A.attributes.position,c=A.morphAttributes.position,l=A.morphTargetsRelative,u=A.attributes.uv,d=A.attributes.uv2,h=A.groups,f=A.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,m=h.length;p<m;p++){let g=h[p],y=r[g.materialIndex],x=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let w=x,T=b;w<T;w+=3){let M=o.getX(w),v=o.getX(w+1),E=o.getX(w+2);s=Dh(this,y,e,ua,a,c,l,u,d,M,v,E),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),m=Math.min(o.count,f.start+f.count);for(let g=p,y=m;g<y;g+=3){let x=o.getX(g),b=o.getX(g+1),w=o.getX(g+2);s=Dh(this,r,e,ua,a,c,l,u,d,x,b,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(a!==void 0)if(Array.isArray(r))for(let p=0,m=h.length;p<m;p++){let g=h[p],y=r[g.materialIndex],x=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let w=x,T=b;w<T;w+=3){let M=w,v=w+1,E=w+2;s=Dh(this,y,e,ua,a,c,l,u,d,M,v,E),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let g=p,y=m;g<y;g+=3){let x=g,b=g+1,w=g+2;s=Dh(this,r,e,ua,a,c,l,u,d,x,b,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function tO(n,e,t,A,r,i,s,o){let a;if(e.side===DA?a=A.intersectTriangle(s,i,r,!0,o):a=A.intersectTriangle(r,i,s,e.side!==Rn,o),a===null)return null;Ph.copy(o),Ph.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ph);return c<t.near||c>t.far?null:{distance:c,point:Ph.clone(),object:n}}function Dh(n,e,t,A,r,i,s,o,a,c,l,u){es.fromBufferAttribute(r,c),ts.fromBufferAttribute(r,l),As.fromBufferAttribute(r,u);let d=n.morphTargetInfluences;if(i&&d){wh.set(0,0,0),Sh.set(0,0,0),Th.set(0,0,0);for(let f=0,p=i.length;f<p;f++){let m=d[f],g=i[f];m!==0&&(Wg.fromBufferAttribute(g,c),jg.fromBufferAttribute(g,l),Yg.fromBufferAttribute(g,u),s?(wh.addScaledVector(Wg,m),Sh.addScaledVector(jg,m),Th.addScaledVector(Yg,m)):(wh.addScaledVector(Wg.sub(es),m),Sh.addScaledVector(jg.sub(ts),m),Th.addScaledVector(Yg.sub(As),m)))}es.add(wh),ts.add(Sh),As.add(Th)}n.isSkinnedMesh&&(n.boneTransform(c,es),n.boneTransform(l,ts),n.boneTransform(u,As));let h=tO(n,e,t,A,es,ts,As,qg);if(h){o&&(Mh.fromBufferAttribute(o,c),Eh.fromBufferAttribute(o,l),Ch.fromBufferAttribute(o,u),h.uv=Qt.getUV(qg,es,ts,As,Mh,Eh,Ch,new G)),a&&(Mh.fromBufferAttribute(a,c),Eh.fromBufferAttribute(a,l),Ch.fromBufferAttribute(a,u),h.uv2=Qt.getUV(qg,es,ts,As,Mh,Eh,Ch,new G));let f={a:c,b:l,c:u,normal:new S,materialIndex:0};Qt.getNormal(es,ts,As,f.normal),h.face=f}return h}var IA=class extends Ie{constructor(e=1,t=1,A=1,r=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:A,widthSegments:r,heightSegments:i,depthSegments:s};let o=this;r=Math.floor(r),i=Math.floor(i),s=Math.floor(s);let a=[],c=[],l=[],u=[],d=0,h=0;f("z","y","x",-1,-1,A,t,e,s,i,0),f("z","y","x",1,-1,A,t,-e,s,i,1),f("x","z","y",1,1,e,A,t,r,s,2),f("x","z","y",1,-1,e,A,-t,r,s,3),f("x","y","z",1,-1,e,t,A,r,i,4),f("x","y","z",-1,-1,e,t,-A,r,i,5),this.setIndex(a),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(u,2));function f(p,m,g,y,x,b,w,T,M,v,E){let C=b/M,P=w/v,D=b/2,L=w/2,I=T/2,B=M+1,N=v+1,W=0,X=0,F=new S;for(let k=0;k<N;k++){let Q=k*P-L;for(let z=0;z<B;z++){let U=z*C-D;F[p]=U*y,F[m]=Q*x,F[g]=I,c.push(F.x,F.y,F.z),F[p]=0,F[m]=0,F[g]=T>0?1:-1,l.push(F.x,F.y,F.z),u.push(z/M),u.push(1-k/v),W+=1}}for(let k=0;k<v;k++)for(let Q=0;Q<M;Q++){let z=d+Q+B*k,U=d+Q+B*(k+1),j=d+(Q+1)+B*(k+1),q=d+(Q+1)+B*k;a.push(z,U,q),a.push(U,j,q),X+=6}o.addGroup(h,X,E),h+=X,d+=W}}static fromJSON(e){return new IA(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function wa(n){let e={};for(let t in n){e[t]={};for(let A in n[t]){let r=n[t][A];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][A]=r.clone():Array.isArray(r)?e[t][A]=r.slice():e[t][A]=r}}return e}function KA(n){let e={};for(let t=0;t<n.length;t++){let A=wa(n[t]);for(let r in A)e[r]=A[r]}return e}var mr={clone:wa,merge:KA},AO=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nO=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gt=class extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=AO,this.fragmentShader=nO,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wa(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let A={};for(let r in this.extensions)this.extensions[r]===!0&&(A[r]=!0);return Object.keys(A).length>0&&(t.extensions=A),t}},fr=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},nA=class extends fr{constructor(e=50,t=1,A=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=A,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lu*2*Math.atan(Math.tan(nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,A,r,i,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=A,this.view.offsetY=r,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nu*.5*this.fov)/this.zoom,A=2*t,r=this.aspect*A,i=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let a=s.fullWidth,c=s.fullHeight;i+=s.offsetX*r/a,t-=s.offsetY*A/c,r*=s.width/a,A*=s.height/c}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-A,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},da=90,ha=1,dy=class extends dt{constructor(e,t,A){if(super(),this.type="CubeCamera",A.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=A;let r=new nA(da,ha,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new S(1,0,0)),this.add(r);let i=new nA(da,ha,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new S(-1,0,0)),this.add(i);let s=new nA(da,ha,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new S(0,1,0)),this.add(s);let o=new nA(da,ha,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new S(0,-1,0)),this.add(o);let a=new nA(da,ha,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new S(0,0,1)),this.add(a);let c=new nA(da,ha,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new S(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let A=this.renderTarget,[r,i,s,o,a,c]=this.children,l=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=Ei,e.xr.enabled=!1;let h=A.texture.generateMipmaps;A.texture.generateMipmaps=!1,e.setRenderTarget(A,0),e.render(t,r),e.setRenderTarget(A,1),e.render(t,i),e.setRenderTarget(A,2),e.render(t,s),e.setRenderTarget(A,3),e.render(t,o),e.setRenderTarget(A,4),e.render(t,a),A.texture.generateMipmaps=h,e.setRenderTarget(A,5),e.render(t,c),e.setRenderTarget(l),e.toneMapping=u,e.xr.enabled=d,A.texture.needsPMREMUpdate=!0}},Sa=class extends Wt{constructor(e,t,A,r,i,s,o,a,c,l){e=e!==void 0?e:[],t=t!==void 0?t:rs,super(e,t,A,r,i,s,o,a,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},hy=class extends ht{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let A={width:e,height:e,depth:1},r=[A,A,A,A,A,A];this.texture=new Sa(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:it}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let A={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new IA(5,5,5),i=new gt({name:"CubemapFromEquirect",uniforms:wa(A.uniforms),vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,side:DA,blending:Bt});i.uniforms.tEquirect.value=t;let s=new PA(r,i),o=t.minFilter;return t.minFilter===Ua&&(t.minFilter=it),new dy(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,A,r){let i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,A,r);e.setRenderTarget(i)}},Xg=new S,rO=new S,iO=new rA,gA=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,A,r){return this.normal.set(e,t,A),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,A){let r=Xg.subVectors(A,t).cross(rO.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let A=e.delta(Xg),r=this.normal.dot(A);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(A).multiplyScalar(i).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),A=this.distanceToPoint(e.end);return t<0&&A>0||A<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let A=t||iO.getNormalMatrix(e),r=this.coplanarPoint(Xg).applyMatrix4(e),i=this.normal.applyMatrix3(A).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fa=new uA,Ih=new S,uu=class{constructor(e=new gA,t=new gA,A=new gA,r=new gA,i=new gA,s=new gA){this.planes=[e,t,A,r,i,s]}set(e,t,A,r,i,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(A),o[3].copy(r),o[4].copy(i),o[5].copy(s),this}copy(e){let t=this.planes;for(let A=0;A<6;A++)t[A].copy(e.planes[A]);return this}setFromProjectionMatrix(e){let t=this.planes,A=e.elements,r=A[0],i=A[1],s=A[2],o=A[3],a=A[4],c=A[5],l=A[6],u=A[7],d=A[8],h=A[9],f=A[10],p=A[11],m=A[12],g=A[13],y=A[14],x=A[15];return t[0].setComponents(o-r,u-a,p-d,x-m).normalize(),t[1].setComponents(o+r,u+a,p+d,x+m).normalize(),t[2].setComponents(o+i,u+c,p+h,x+g).normalize(),t[3].setComponents(o-i,u-c,p-h,x-g).normalize(),t[4].setComponents(o-s,u-l,p-f,x-y).normalize(),t[5].setComponents(o+s,u+l,p+f,x+y).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),fa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(fa)}intersectsSprite(e){return fa.center.set(0,0,0),fa.radius=.7071067811865476,fa.applyMatrix4(e.matrixWorld),this.intersectsSphere(fa)}intersectsSphere(e){let t=this.planes,A=e.center,r=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(A)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let A=0;A<6;A++){let r=t[A];if(Ih.x=r.normal.x>0?e.max.x:e.min.x,Ih.y=r.normal.y>0?e.max.y:e.min.y,Ih.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ih)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let A=0;A<6;A++)if(t[A].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function eS(){let n=null,e=!1,t=null,A=null;function r(i,s){t(i,s),A=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(A=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(A),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){n=i}}}function sO(n,e){let t=e.isWebGL2,A=new WeakMap;function r(c,l){let u=c.array,d=c.usage,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,d),c.onUploadCallback();let f;if(u instanceof Float32Array)f=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)f=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else f=5123;else if(u instanceof Int16Array)f=5122;else if(u instanceof Uint32Array)f=5125;else if(u instanceof Int32Array)f=5124;else if(u instanceof Int8Array)f=5120;else if(u instanceof Uint8Array)f=5121;else if(u instanceof Uint8ClampedArray)f=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function i(c,l,u){let d=l.array,h=l.updateRange;n.bindBuffer(u,c),h.count===-1?n.bufferSubData(u,0,d):(t?n.bufferSubData(u,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count):n.bufferSubData(u,h.offset*d.BYTES_PER_ELEMENT,d.subarray(h.offset,h.offset+h.count)),h.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),A.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let l=A.get(c);l&&(n.deleteBuffer(l.buffer),A.delete(c))}function a(c,l){if(c.isGLBufferAttribute){let d=A.get(c);(!d||d.version<c.version)&&A.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=A.get(c);u===void 0?A.set(c,r(c,l)):u.version<c.version&&(i(u.buffer,c,l),u.version=c.version)}return{get:s,remove:o,update:a}}var Ci=class extends Ie{constructor(e=1,t=1,A=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:A,heightSegments:r};let i=e/2,s=t/2,o=Math.floor(A),a=Math.floor(r),c=o+1,l=a+1,u=e/o,d=t/a,h=[],f=[],p=[],m=[];for(let g=0;g<l;g++){let y=g*d-s;for(let x=0;x<c;x++){let b=x*u-i;f.push(b,-y,0),p.push(0,0,1),m.push(x/o),m.push(1-g/a)}}for(let g=0;g<a;g++)for(let y=0;y<o;y++){let x=y+c*g,b=y+c*(g+1),w=y+1+c*(g+1),T=y+1+c*g;h.push(x,b,T),h.push(b,w,T)}this.setIndex(h),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(p,3)),this.setAttribute("uv",new Se(m,2))}static fromJSON(e){return new Ci(e.width,e.height,e.widthSegments,e.heightSegments)}},oO=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,aO=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lO=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,cO=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uO=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dO=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hO="vec3 transformed = vec3( position );",fO=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pO=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,mO=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,gO=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yO=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,vO=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xO=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bO=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wO=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SO=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TO=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,MO=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,EO=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,CO=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PO=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,DO=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IO=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,OO=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LO=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_O="gl_FragColor = linearToOutputTexel( gl_FragColor );",RO=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BO=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,NO=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,FO=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GO=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kO=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,UO=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VO=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zO=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HO=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WO=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,jO=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,YO=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qO=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,XO=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,QO=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,KO=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZO=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,JO=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$O=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,eL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,tL=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AL=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nL=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rL=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,iL=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sL=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oL=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,aL=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pL=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gL=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,xL=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TL=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ML=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,EL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,CL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,PL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IL=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,OL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_L=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FL=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,GL=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kL=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,UL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,HL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WL=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,QL=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,KL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ZL=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,JL=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,$L=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,e_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,t_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,A_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,n_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,r_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i_=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,a_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,l_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,c_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,f_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,b_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,S_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,C_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,R_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nt={alphamap_fragment:oO,alphamap_pars_fragment:aO,alphatest_fragment:lO,alphatest_pars_fragment:cO,aomap_fragment:uO,aomap_pars_fragment:dO,begin_vertex:hO,beginnormal_vertex:fO,bsdfs:pO,iridescence_fragment:mO,bumpmap_pars_fragment:gO,clipping_planes_fragment:yO,clipping_planes_pars_fragment:vO,clipping_planes_pars_vertex:xO,clipping_planes_vertex:bO,color_fragment:wO,color_pars_fragment:SO,color_pars_vertex:TO,color_vertex:MO,common:EO,cube_uv_reflection_fragment:CO,defaultnormal_vertex:PO,displacementmap_pars_vertex:DO,displacementmap_vertex:IO,emissivemap_fragment:OO,emissivemap_pars_fragment:LO,encodings_fragment:_O,encodings_pars_fragment:RO,envmap_fragment:BO,envmap_common_pars_fragment:NO,envmap_pars_fragment:FO,envmap_pars_vertex:GO,envmap_physical_pars_fragment:QO,envmap_vertex:kO,fog_vertex:UO,fog_pars_vertex:VO,fog_fragment:zO,fog_pars_fragment:HO,gradientmap_pars_fragment:WO,lightmap_fragment:jO,lightmap_pars_fragment:YO,lights_lambert_vertex:qO,lights_pars_begin:XO,lights_toon_fragment:KO,lights_toon_pars_fragment:ZO,lights_phong_fragment:JO,lights_phong_pars_fragment:$O,lights_physical_fragment:eL,lights_physical_pars_fragment:tL,lights_fragment_begin:AL,lights_fragment_maps:nL,lights_fragment_end:rL,logdepthbuf_fragment:iL,logdepthbuf_pars_fragment:sL,logdepthbuf_pars_vertex:oL,logdepthbuf_vertex:aL,map_fragment:lL,map_pars_fragment:cL,map_particle_fragment:uL,map_particle_pars_fragment:dL,metalnessmap_fragment:hL,metalnessmap_pars_fragment:fL,morphcolor_vertex:pL,morphnormal_vertex:mL,morphtarget_pars_vertex:gL,morphtarget_vertex:yL,normal_fragment_begin:vL,normal_fragment_maps:xL,normal_pars_fragment:bL,normal_pars_vertex:wL,normal_vertex:SL,normalmap_pars_fragment:TL,clearcoat_normal_fragment_begin:ML,clearcoat_normal_fragment_maps:EL,clearcoat_pars_fragment:CL,iridescence_pars_fragment:PL,output_fragment:DL,packing:IL,premultiplied_alpha_fragment:OL,project_vertex:LL,dithering_fragment:_L,dithering_pars_fragment:RL,roughnessmap_fragment:BL,roughnessmap_pars_fragment:NL,shadowmap_pars_fragment:FL,shadowmap_pars_vertex:GL,shadowmap_vertex:kL,shadowmask_pars_fragment:UL,skinbase_vertex:VL,skinning_pars_vertex:zL,skinning_vertex:HL,skinnormal_vertex:WL,specularmap_fragment:jL,specularmap_pars_fragment:YL,tonemapping_fragment:qL,tonemapping_pars_fragment:XL,transmission_fragment:QL,transmission_pars_fragment:KL,uv_pars_fragment:ZL,uv_pars_vertex:JL,uv_vertex:$L,uv2_pars_fragment:e_,uv2_pars_vertex:t_,uv2_vertex:A_,worldpos_vertex:n_,background_vert:r_,background_frag:i_,cube_vert:s_,cube_frag:o_,depth_vert:a_,depth_frag:l_,distanceRGBA_vert:c_,distanceRGBA_frag:u_,equirect_vert:d_,equirect_frag:h_,linedashed_vert:f_,linedashed_frag:p_,meshbasic_vert:m_,meshbasic_frag:g_,meshlambert_vert:y_,meshlambert_frag:v_,meshmatcap_vert:x_,meshmatcap_frag:b_,meshnormal_vert:w_,meshnormal_frag:S_,meshphong_vert:T_,meshphong_frag:M_,meshphysical_vert:E_,meshphysical_frag:C_,meshtoon_vert:P_,meshtoon_frag:D_,points_vert:I_,points_frag:O_,shadow_vert:L_,shadow_frag:__,sprite_vert:R_,sprite_frag:B_},pe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new rA},uv2Transform:{value:new rA},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new rA}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new rA}}},Br={basic:{uniforms:KA([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:KA([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.fog,pe.lights,{emissive:{value:new Le(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:KA([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:KA([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:KA([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Le(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:KA([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:KA([pe.points,pe.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:KA([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:KA([pe.common,pe.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:KA([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:KA([pe.sprite,pe.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new rA},t2D:{value:null}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},cube:{uniforms:KA([pe.envmap,{opacity:{value:1}}]),vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:KA([pe.common,pe.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:KA([pe.lights,pe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Br.physical={uniforms:KA([Br.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new G(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};function N_(n,e,t,A,r,i){let s=new Le(0),o=r===!0?0:1,a,c,l=null,u=0,d=null;function h(p,m){let g=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=e.get(y));let x=n.xr,b=x.getSession&&x.getSession();b&&b.environmentBlendMode==="additive"&&(y=null),y===null?f(s,o):y&&y.isColor&&(f(y,1),g=!0),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ka)?(c===void 0&&(c=new PA(new IA(1,1,1),new gt({name:"BackgroundCubeMaterial",uniforms:wa(Br.cube.uniforms),vertexShader:Br.cube.vertexShader,fragmentShader:Br.cube.fragmentShader,side:DA,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),A.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(l!==y||u!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,l=y,u=y.version,d=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(a===void 0&&(a=new PA(new Ci(2,2),new gt({name:"BackgroundMaterial",uniforms:wa(Br.background.uniforms),vertexShader:Br.background.vertexShader,fragmentShader:Br.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),A.update(a)),a.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),a.material.uniforms.uvTransform.value.copy(y.matrix),(l!==y||u!==y.version||d!==n.toneMapping)&&(a.material.needsUpdate=!0,l=y,u=y.version,d=n.toneMapping),a.layers.enableAll(),p.unshift(a,a.geometry,a.material,0,0,null))}function f(p,m){t.buffers.color.setClear(p.r,p.g,p.b,m,i)}return{getClearColor:function(){return s},setClearColor:function(p,m=1){s.set(p),o=m,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,f(s,o)},render:h}}function F_(n,e,t,A){let r=n.getParameter(34921),i=A.isWebGL2?null:e.get("OES_vertex_array_object"),s=A.isWebGL2||i!==null,o={},a=m(null),c=a,l=!1;function u(I,B,N,W,X){let F=!1;if(s){let k=p(W,N,B);c!==k&&(c=k,h(c.object)),F=g(I,W,N,X),F&&y(I,W,N,X)}else{let k=B.wireframe===!0;(c.geometry!==W.id||c.program!==N.id||c.wireframe!==k)&&(c.geometry=W.id,c.program=N.id,c.wireframe=k,F=!0)}X!==null&&t.update(X,34963),(F||l)&&(l=!1,v(I,B,N,W),X!==null&&n.bindBuffer(34963,t.get(X).buffer))}function d(){return A.isWebGL2?n.createVertexArray():i.createVertexArrayOES()}function h(I){return A.isWebGL2?n.bindVertexArray(I):i.bindVertexArrayOES(I)}function f(I){return A.isWebGL2?n.deleteVertexArray(I):i.deleteVertexArrayOES(I)}function p(I,B,N){let W=N.wireframe===!0,X=o[I.id];X===void 0&&(X={},o[I.id]=X);let F=X[B.id];F===void 0&&(F={},X[B.id]=F);let k=F[W];return k===void 0&&(k=m(d()),F[W]=k),k}function m(I){let B=[],N=[],W=[];for(let X=0;X<r;X++)B[X]=0,N[X]=0,W[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:N,attributeDivisors:W,object:I,attributes:{},index:null}}function g(I,B,N,W){let X=c.attributes,F=B.attributes,k=0,Q=N.getAttributes();for(let z in Q)if(Q[z].location>=0){let j=X[z],q=F[z];if(q===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),j===void 0||j.attribute!==q||q&&j.data!==q.data)return!0;k++}return c.attributesNum!==k||c.index!==W}function y(I,B,N,W){let X={},F=B.attributes,k=0,Q=N.getAttributes();for(let z in Q)if(Q[z].location>=0){let j=F[z];j===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));let q={};q.attribute=j,j&&j.data&&(q.data=j.data),X[z]=q,k++}c.attributes=X,c.attributesNum=k,c.index=W}function x(){let I=c.newAttributes;for(let B=0,N=I.length;B<N;B++)I[B]=0}function b(I){w(I,0)}function w(I,B){let N=c.newAttributes,W=c.enabledAttributes,X=c.attributeDivisors;N[I]=1,W[I]===0&&(n.enableVertexAttribArray(I),W[I]=1),X[I]!==B&&((A.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[A.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,B),X[I]=B)}function T(){let I=c.newAttributes,B=c.enabledAttributes;for(let N=0,W=B.length;N<W;N++)B[N]!==I[N]&&(n.disableVertexAttribArray(N),B[N]=0)}function M(I,B,N,W,X,F){A.isWebGL2===!0&&(N===5124||N===5125)?n.vertexAttribIPointer(I,B,N,X,F):n.vertexAttribPointer(I,B,N,W,X,F)}function v(I,B,N,W){if(A.isWebGL2===!1&&(I.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let X=W.attributes,F=N.getAttributes(),k=B.defaultAttributeValues;for(let Q in F){let z=F[Q];if(z.location>=0){let U=X[Q];if(U===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(U=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(U=I.instanceColor)),U!==void 0){let j=U.normalized,q=U.itemSize,V=t.get(U);if(V===void 0)continue;let ue=V.buffer,Ae=V.type,Z=V.bytesPerElement;if(U.isInterleavedBufferAttribute){let Y=U.data,ne=Y.stride,le=U.offset;if(Y.isInstancedInterleavedBuffer){for(let se=0;se<z.locationSize;se++)w(z.location+se,Y.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let se=0;se<z.locationSize;se++)b(z.location+se);n.bindBuffer(34962,ue);for(let se=0;se<z.locationSize;se++)M(z.location+se,q/z.locationSize,Ae,j,ne*Z,(le+q/z.locationSize*se)*Z)}else{if(U.isInstancedBufferAttribute){for(let Y=0;Y<z.locationSize;Y++)w(z.location+Y,U.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Y=0;Y<z.locationSize;Y++)b(z.location+Y);n.bindBuffer(34962,ue);for(let Y=0;Y<z.locationSize;Y++)M(z.location+Y,q/z.locationSize,Ae,j,q*Z,q/z.locationSize*Y*Z)}}else if(k!==void 0){let j=k[Q];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(z.location,j);break;case 3:n.vertexAttrib3fv(z.location,j);break;case 4:n.vertexAttrib4fv(z.location,j);break;default:n.vertexAttrib1fv(z.location,j)}}}}T()}function E(){D();for(let I in o){let B=o[I];for(let N in B){let W=B[N];for(let X in W)f(W[X].object),delete W[X];delete B[N]}delete o[I]}}function C(I){if(o[I.id]===void 0)return;let B=o[I.id];for(let N in B){let W=B[N];for(let X in W)f(W[X].object),delete W[X];delete B[N]}delete o[I.id]}function P(I){for(let B in o){let N=o[B];if(N[I.id]===void 0)continue;let W=N[I.id];for(let X in W)f(W[X].object),delete W[X];delete N[I.id]}}function D(){L(),l=!0,c!==a&&(c=a,h(c.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:D,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:b,disableUnusedAttributes:T}}function G_(n,e,t,A){let r=A.isWebGL2,i;function s(c){i=c}function o(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,u){if(u===0)return;let d,h;if(r)d=n,h="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[h](i,c,l,u),t.update(l,i,u)}this.setMode=s,this.render=o,this.renderInstances=a}function k_(n,e,t){let A;function r(){if(A!==void 0)return A;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");A=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else A=0;return A}function i(M){if(M==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext,o=t.precision!==void 0?t.precision:"highp",a=i(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);let c=s||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,u=n.getParameter(34930),d=n.getParameter(35660),h=n.getParameter(3379),f=n.getParameter(34076),p=n.getParameter(34921),m=n.getParameter(36347),g=n.getParameter(36348),y=n.getParameter(36349),x=d>0,b=s||e.has("OES_texture_float"),w=x&&b,T=s?n.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:i,precision:o,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:w,maxSamples:T}}function U_(n){let e=this,t=null,A=0,r=!1,i=!1,s=new gA,o=new rA,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,h){let f=u.length!==0||d||A!==0||r;return r=d,t=l(u,h,0),A=u.length,f},this.beginShadows=function(){i=!0,l(null)},this.endShadows=function(){i=!1,c()},this.setState=function(u,d,h){let f=u.clippingPlanes,p=u.clipIntersection,m=u.clipShadows,g=n.get(u);if(!r||f===null||f.length===0||i&&!m)i?l(null):c();else{let y=i?0:A,x=y*4,b=g.clippingState||null;a.value=b,b=l(f,d,x,h);for(let w=0;w!==x;++w)b[w]=t[w];g.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){a.value!==t&&(a.value=t,a.needsUpdate=A>0),e.numPlanes=A,e.numIntersection=0}function l(u,d,h,f){let p=u!==null?u.length:0,m=null;if(p!==0){if(m=a.value,f!==!0||m===null){let g=h+p*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,b=h;x!==p;++x,b+=4)s.copy(u[x]).applyMatrix4(y,o),s.normal.toArray(m,b),m[b+3]=s.constant}a.value=m,a.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function V_(n){let e=new WeakMap;function t(s,o){return o===iy?s.mapping=rs:o===sy&&(s.mapping=is),s}function A(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){let o=s.mapping;if(o===iy||o===sy)if(e.has(s)){let a=e.get(s).texture;return t(a,s.mapping)}else{let a=s.image;if(a&&a.height>0){let c=new hy(a.height/2);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){let o=s.target;o.removeEventListener("dispose",r);let a=e.get(o);a!==void 0&&(e.delete(o),a.dispose())}function i(){e=new WeakMap}return{get:A,dispose:i}}var Ta=class extends fr{constructor(e=-1,t=1,A=1,r=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=A,this.bottom=r,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,A,r,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=A,this.view.offsetY=r,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),A=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=A-e,s=A+e,o=r+t,a=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,s=i+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(i,s,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ga=4,rw=[.125,.215,.35,.446,.526,.582],no=20,Qg=new Ta,iw=new Le,Kg=null,Ao=(1+Math.sqrt(5))/2,pa=1/Ao,sw=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,Ao,pa),new S(0,Ao,-pa),new S(pa,0,Ao),new S(-pa,0,Ao),new S(Ao,pa,0),new S(-Ao,pa,0)],Qh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,A=.1,r=100){Kg=this._renderer.getRenderTarget(),this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,A,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lw(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=aw(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kg),e.scissorTest=!1,Oh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kg=this._renderer.getRenderTarget();let A=t||this._allocateTargets();return this._textureToCubeUV(e,A),this._applyPMREM(A),this._cleanup(A),A}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,A={magFilter:it,minFilter:it,generateMipmaps:!1,type:au,format:dr,encoding:Bn,depthBuffer:!1},r=ow(e,t,A);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ow(e,t,A);let{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z_(i)),this._blurMaterial=H_(i,e,t)}return r}_compileMaterial(e){let t=new PA(this._lodPlanes[0],e);this._renderer.compile(t,Qg)}_sceneToCubeUV(e,t,A,r){let o=new nA(90,1,t,A),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(iw),l.toneMapping=Ei,l.autoClear=!1;let h=new oo({name:"PMREM.Background",side:DA,depthWrite:!1,depthTest:!1}),f=new PA(new IA,h),p=!1,m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,p=!0):(h.color.copy(iw),p=!0);for(let g=0;g<6;g++){let y=g%3;y===0?(o.up.set(0,a[g],0),o.lookAt(c[g],0,0)):y===1?(o.up.set(0,0,a[g]),o.lookAt(0,c[g],0)):(o.up.set(0,a[g],0),o.lookAt(0,0,c[g]));let x=this._cubeSize;Oh(r,y*x,g>2?x:0,x,x),l.setRenderTarget(r),p&&l.render(f,o),l.render(e,o)}f.geometry.dispose(),f.material.dispose(),l.toneMapping=d,l.autoClear=u,e.background=m}_textureToCubeUV(e,t){let A=this._renderer,r=e.mapping===rs||e.mapping===is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lw()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=aw());let i=r?this._cubemapMaterial:this._equirectMaterial,s=new PA(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let a=this._cubeSize;Oh(t,0,0,3*a,2*a),A.setRenderTarget(t),A.render(s,Qg)}_applyPMREM(e){let t=this._renderer,A=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let i=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=sw[(r-1)%sw.length];this._blur(e,r-1,r,i,s)}t.autoClear=A}_blur(e,t,A,r,i){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,A,r,"latitudinal",i),this._halfBlur(s,e,A,A,r,"longitudinal",i)}_halfBlur(e,t,A,r,i,s,o){let a=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,u=new PA(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[A]-1,f=isFinite(i)?Math.PI/(2*h):2*Math.PI/(2*no-1),p=i/f,m=isFinite(i)?1+Math.floor(l*p):no;m>no&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${no}`);let g=[],y=0;for(let M=0;M<no;++M){let v=M/p,E=Math.exp(-v*v/2);g.push(E),M===0?y+=E:M<m&&(y+=2*E)}for(let M=0;M<g.length;M++)g[M]=g[M]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=f,d.mipInt.value=x-A;let b=this._sizeLods[r],w=3*b*(r>x-ga?r-x+ga:0),T=4*(this._cubeSize-b);Oh(t,w,T,3*b,2*b),a.setRenderTarget(t),a.render(u,Qg)}};function z_(n){let e=[],t=[],A=[],r=n,i=n-ga+1+rw.length;for(let s=0;s<i;s++){let o=Math.pow(2,r);t.push(o);let a=1/o;s>n-ga?a=rw[s-n+ga-1]:s===0&&(a=0),A.push(a);let c=1/(o-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],h=6,f=6,p=3,m=2,g=1,y=new Float32Array(p*f*h),x=new Float32Array(m*f*h),b=new Float32Array(g*f*h);for(let T=0;T<h;T++){let M=T%3*2/3-1,v=T>2?0:-1,E=[M,v,0,M+2/3,v,0,M+2/3,v+1,0,M,v,0,M+2/3,v+1,0,M,v+1,0];y.set(E,p*f*T),x.set(d,m*f*T);let C=[T,T,T,T,T,T];b.set(C,g*f*T)}let w=new Ie;w.setAttribute("position",new Fe(y,p)),w.setAttribute("uv",new Fe(x,m)),w.setAttribute("faceIndex",new Fe(b,g)),e.push(w),r>ga&&r--}return{lodPlanes:e,sizeLods:t,sigmas:A}}function ow(n,e,t){let A=new ht(n,e,t);return A.texture.mapping=ka,A.texture.name="PMREM.cubeUv",A.scissorTest=!0,A}function Oh(n,e,t,A,r){n.viewport.set(e,t,A,r),n.scissor.set(e,t,A,r)}function H_(n,e,t){let A=new Float32Array(no),r=new S(0,1,0);return new gt({name:"SphericalGaussianBlur",defines:{n:no,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:A},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qy(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bt,depthTest:!1,depthWrite:!1})}function aw(){return new gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qy(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bt,depthTest:!1,depthWrite:!1})}function lw(){return new gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qy(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bt,depthTest:!1,depthWrite:!1})}function qy(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function W_(n){let e=new WeakMap,t=null;function A(o){if(o&&o.isTexture){let a=o.mapping,c=a===iy||a===sy,l=a===rs||a===is;if(c||l)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Qh(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||l&&u&&r(u)){t===null&&(t=new Qh(n));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",i),d.texture}else return null}}}return o}function r(o){let a=0,c=6;for(let l=0;l<c;l++)o[l]!==void 0&&a++;return a===c}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:A,dispose:s}}function j_(n){let e={};function t(A){if(e[A]!==void 0)return e[A];let r;switch(A){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(A)}return e[A]=r,r}return{has:function(A){return t(A)!==null},init:function(A){A.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(A){let r=t(A);return r===null&&console.warn("THREE.WebGLRenderer: "+A+" extension not supported."),r}}}function Y_(n,e,t,A){let r={},i=new WeakMap;function s(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let f in d.attributes)e.remove(d.attributes[f]);d.removeEventListener("dispose",s),delete r[d.id];let h=i.get(d);h&&(e.remove(h),i.delete(d)),A.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function a(u){let d=u.attributes;for(let f in d)e.update(d[f],34962);let h=u.morphAttributes;for(let f in h){let p=h[f];for(let m=0,g=p.length;m<g;m++)e.update(p[m],34962)}}function c(u){let d=[],h=u.index,f=u.attributes.position,p=0;if(h!==null){let y=h.array;p=h.version;for(let x=0,b=y.length;x<b;x+=3){let w=y[x+0],T=y[x+1],M=y[x+2];d.push(w,T,T,M,M,w)}}else{let y=f.array;p=f.version;for(let x=0,b=y.length/3-1;x<b;x+=3){let w=x+0,T=x+1,M=x+2;d.push(w,T,T,M,M,w)}}let m=new(Jw(d)?as:qh)(d,1);m.version=p;let g=i.get(u);g&&e.remove(g),i.set(u,m)}function l(u){let d=i.get(u);if(d){let h=u.index;h!==null&&d.version<h.version&&c(u)}else c(u);return i.get(u)}return{get:o,update:a,getWireframeAttribute:l}}function q_(n,e,t,A){let r=A.isWebGL2,i;function s(d){i=d}let o,a;function c(d){o=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,o,d*a),t.update(h,i,1)}function u(d,h,f){if(f===0)return;let p,m;if(r)p=n,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](i,h,o,d*a,f),t.update(h,i,f)}this.setMode=s,this.setIndex=c,this.render=l,this.renderInstances=u}function X_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function A(i,s,o){switch(t.calls++,s){case 4:t.triangles+=o*(i/3);break;case 1:t.lines+=o*(i/2);break;case 3:t.lines+=o*(i-1);break;case 2:t.lines+=o*i;break;case 0:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:A}}function Q_(n,e){return n[0]-e[0]}function K_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Zg(n,e){let t=1,A=e.isInterleavedBufferAttribute?e.data.array:e.array;A instanceof Int8Array?t=127:A instanceof Uint8Array?t=255:A instanceof Uint16Array?t=65535:A instanceof Int16Array?t=32767:A instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",A),n.divideScalar(t)}function Z_(n,e,t){let A={},r=new Float32Array(8),i=new WeakMap,s=new He,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function a(c,l,u,d){let h=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=f!==void 0?f.length:0,m=i.get(l);if(m===void 0||m.count!==p){let B=function(){L.dispose(),i.delete(l),l.removeEventListener("dispose",B)};m!==void 0&&m.texture.dispose();let x=l.morphAttributes.position!==void 0,b=l.morphAttributes.normal!==void 0,w=l.morphAttributes.color!==void 0,T=l.morphAttributes.position||[],M=l.morphAttributes.normal||[],v=l.morphAttributes.color||[],E=0;x===!0&&(E=1),b===!0&&(E=2),w===!0&&(E=3);let C=l.attributes.position.count*E,P=1;C>e.maxTextureSize&&(P=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);let D=new Float32Array(C*P*4*p),L=new Yh(D,C,P,p);L.type=Nr,L.needsUpdate=!0;let I=E*4;for(let N=0;N<p;N++){let W=T[N],X=M[N],F=v[N],k=C*P*4*N;for(let Q=0;Q<W.count;Q++){let z=Q*I;x===!0&&(s.fromBufferAttribute(W,Q),W.normalized===!0&&Zg(s,W),D[k+z+0]=s.x,D[k+z+1]=s.y,D[k+z+2]=s.z,D[k+z+3]=0),b===!0&&(s.fromBufferAttribute(X,Q),X.normalized===!0&&Zg(s,X),D[k+z+4]=s.x,D[k+z+5]=s.y,D[k+z+6]=s.z,D[k+z+7]=0),w===!0&&(s.fromBufferAttribute(F,Q),F.normalized===!0&&Zg(s,F),D[k+z+8]=s.x,D[k+z+9]=s.y,D[k+z+10]=s.z,D[k+z+11]=F.itemSize===4?s.w:1)}}m={count:p,texture:L,size:new G(C,P)},i.set(l,m),l.addEventListener("dispose",B)}let g=0;for(let x=0;x<h.length;x++)g+=h[x];let y=l.morphTargetsRelative?1:1-g;d.getUniforms().setValue(n,"morphTargetBaseInfluence",y),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{let f=h===void 0?0:h.length,p=A[l.id];if(p===void 0||p.length!==f){p=[];for(let b=0;b<f;b++)p[b]=[b,0];A[l.id]=p}for(let b=0;b<f;b++){let w=p[b];w[0]=b,w[1]=h[b]}p.sort(K_);for(let b=0;b<8;b++)b<f&&p[b][1]?(o[b][0]=p[b][0],o[b][1]=p[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(Q_);let m=l.morphAttributes.position,g=l.morphAttributes.normal,y=0;for(let b=0;b<8;b++){let w=o[b],T=w[0],M=w[1];T!==Number.MAX_SAFE_INTEGER&&M?(m&&l.getAttribute("morphTarget"+b)!==m[T]&&l.setAttribute("morphTarget"+b,m[T]),g&&l.getAttribute("morphNormal"+b)!==g[T]&&l.setAttribute("morphNormal"+b,g[T]),r[b]=M,y+=M):(m&&l.hasAttribute("morphTarget"+b)===!0&&l.deleteAttribute("morphTarget"+b),g&&l.hasAttribute("morphNormal"+b)===!0&&l.deleteAttribute("morphNormal"+b),r[b]=0)}let x=l.morphTargetsRelative?1:1-y;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:a}}function J_(n,e,t,A){let r=new WeakMap;function i(a){let c=A.render.frame,l=a.geometry,u=e.get(a,l);return r.get(u)!==c&&(e.update(u),r.set(u,c)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),u}function s(){r=new WeakMap}function o(a){let c=a.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:s}}var tS=new Wt,AS=new Yh,nS=new uy,rS=new Sa,cw=[],uw=[],dw=new Float32Array(16),hw=new Float32Array(9),fw=new Float32Array(4);function Va(n,e,t){let A=n[0];if(A<=0||A>0)return n;let r=e*t,i=cw[r];if(i===void 0&&(i=new Float32Array(r),cw[r]=i),e!==0){A.toArray(i,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(i,o)}return i}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,A=n.length;t<A;t++)if(n[t]!==e[t])return!1;return!0}function an(n,e){for(let t=0,A=e.length;t<A;t++)n[t]=e[t]}function hf(n,e){let t=uw[e];t===void 0&&(t=new Int32Array(e),uw[e]=t);for(let A=0;A!==e;++A)t[A]=n.allocateTextureUnit();return t}function $_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function eR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),an(t,e)}}function tR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),an(t,e)}}function AR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),an(t,e)}}function nR(n,e){let t=this.cache,A=e.elements;if(A===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,A))return;fw.set(A),n.uniformMatrix2fv(this.addr,!1,fw),an(t,A)}}function rR(n,e){let t=this.cache,A=e.elements;if(A===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,A))return;hw.set(A),n.uniformMatrix3fv(this.addr,!1,hw),an(t,A)}}function iR(n,e){let t=this.cache,A=e.elements;if(A===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,A))return;dw.set(A),n.uniformMatrix4fv(this.addr,!1,dw),an(t,A)}}function sR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function oR(n,e){let t=this.cache;on(t,e)||(n.uniform2iv(this.addr,e),an(t,e))}function aR(n,e){let t=this.cache;on(t,e)||(n.uniform3iv(this.addr,e),an(t,e))}function lR(n,e){let t=this.cache;on(t,e)||(n.uniform4iv(this.addr,e),an(t,e))}function cR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function uR(n,e){let t=this.cache;on(t,e)||(n.uniform2uiv(this.addr,e),an(t,e))}function dR(n,e){let t=this.cache;on(t,e)||(n.uniform3uiv(this.addr,e),an(t,e))}function hR(n,e){let t=this.cache;on(t,e)||(n.uniform4uiv(this.addr,e),an(t,e))}function fR(n,e,t){let A=this.cache,r=t.allocateTextureUnit();A[0]!==r&&(n.uniform1i(this.addr,r),A[0]=r),t.setTexture2D(e||tS,r)}function pR(n,e,t){let A=this.cache,r=t.allocateTextureUnit();A[0]!==r&&(n.uniform1i(this.addr,r),A[0]=r),t.setTexture3D(e||nS,r)}function mR(n,e,t){let A=this.cache,r=t.allocateTextureUnit();A[0]!==r&&(n.uniform1i(this.addr,r),A[0]=r),t.setTextureCube(e||rS,r)}function gR(n,e,t){let A=this.cache,r=t.allocateTextureUnit();A[0]!==r&&(n.uniform1i(this.addr,r),A[0]=r),t.setTexture2DArray(e||AS,r)}function yR(n){switch(n){case 5126:return $_;case 35664:return eR;case 35665:return tR;case 35666:return AR;case 35674:return nR;case 35675:return rR;case 35676:return iR;case 5124:case 35670:return sR;case 35667:case 35671:return oR;case 35668:case 35672:return aR;case 35669:case 35673:return lR;case 5125:return cR;case 36294:return uR;case 36295:return dR;case 36296:return hR;case 35678:case 36198:case 36298:case 36306:case 35682:return fR;case 35679:case 36299:case 36307:return pR;case 35680:case 36300:case 36308:case 36293:return mR;case 36289:case 36303:case 36311:case 36292:return gR}}function vR(n,e){n.uniform1fv(this.addr,e)}function xR(n,e){let t=Va(e,this.size,2);n.uniform2fv(this.addr,t)}function bR(n,e){let t=Va(e,this.size,3);n.uniform3fv(this.addr,t)}function wR(n,e){let t=Va(e,this.size,4);n.uniform4fv(this.addr,t)}function SR(n,e){let t=Va(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function TR(n,e){let t=Va(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function MR(n,e){let t=Va(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ER(n,e){n.uniform1iv(this.addr,e)}function CR(n,e){n.uniform2iv(this.addr,e)}function PR(n,e){n.uniform3iv(this.addr,e)}function DR(n,e){n.uniform4iv(this.addr,e)}function IR(n,e){n.uniform1uiv(this.addr,e)}function OR(n,e){n.uniform2uiv(this.addr,e)}function LR(n,e){n.uniform3uiv(this.addr,e)}function _R(n,e){n.uniform4uiv(this.addr,e)}function RR(n,e,t){let A=e.length,r=hf(t,A);n.uniform1iv(this.addr,r);for(let i=0;i!==A;++i)t.setTexture2D(e[i]||tS,r[i])}function BR(n,e,t){let A=e.length,r=hf(t,A);n.uniform1iv(this.addr,r);for(let i=0;i!==A;++i)t.setTexture3D(e[i]||nS,r[i])}function NR(n,e,t){let A=e.length,r=hf(t,A);n.uniform1iv(this.addr,r);for(let i=0;i!==A;++i)t.setTextureCube(e[i]||rS,r[i])}function FR(n,e,t){let A=e.length,r=hf(t,A);n.uniform1iv(this.addr,r);for(let i=0;i!==A;++i)t.setTexture2DArray(e[i]||AS,r[i])}function GR(n){switch(n){case 5126:return vR;case 35664:return xR;case 35665:return bR;case 35666:return wR;case 35674:return SR;case 35675:return TR;case 35676:return MR;case 5124:case 35670:return ER;case 35667:case 35671:return CR;case 35668:case 35672:return PR;case 35669:case 35673:return DR;case 5125:return IR;case 36294:return OR;case 36295:return LR;case 36296:return _R;case 35678:case 36198:case 36298:case 36306:case 35682:return RR;case 35679:case 36299:case 36307:return BR;case 35680:case 36300:case 36308:case 36293:return NR;case 36289:case 36303:case 36311:case 36292:return FR}}var fy=class{constructor(e,t,A){this.id=e,this.addr=A,this.cache=[],this.setValue=yR(t.type)}},py=class{constructor(e,t,A){this.id=e,this.addr=A,this.cache=[],this.size=t.size,this.setValue=GR(t.type)}},my=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,A){let r=this.seq;for(let i=0,s=r.length;i!==s;++i){let o=r[i];o.setValue(e,t[o.id],A)}}},Jg=/(\w+)(\])?(\[|\.)?/g;function pw(n,e){n.seq.push(e),n.map[e.id]=e}function kR(n,e,t){let A=n.name,r=A.length;for(Jg.lastIndex=0;;){let i=Jg.exec(A),s=Jg.lastIndex,o=i[1],a=i[2]==="]",c=i[3];if(a&&(o=o|0),c===void 0||c==="["&&s+2===r){pw(t,c===void 0?new fy(o,n,e):new py(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new my(o),pw(t,u)),t=u}}}var xa=class{constructor(e,t){this.seq=[],this.map={};let A=e.getProgramParameter(t,35718);for(let r=0;r<A;++r){let i=e.getActiveUniform(t,r),s=e.getUniformLocation(t,i.name);kR(i,s,this)}}setValue(e,t,A,r){let i=this.map[t];i!==void 0&&i.setValue(e,A,r)}setOptional(e,t,A){let r=t[A];r!==void 0&&this.setValue(e,A,r)}static upload(e,t,A,r){for(let i=0,s=t.length;i!==s;++i){let o=t[i],a=A[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,r)}}static seqWithValue(e,t){let A=[];for(let r=0,i=e.length;r!==i;++r){let s=e[r];s.id in t&&A.push(s)}return A}};function mw(n,e,t){let A=n.createShader(e);return n.shaderSource(A,t),n.compileShader(A),A}var UR=0;function VR(n,e){let t=n.split(`
`),A=[],r=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let s=r;s<i;s++){let o=s+1;A.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return A.join(`
`)}function zR(n){switch(n){case Bn:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function gw(n,e,t){let A=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(A&&r==="")return"";let i=/ERROR: 0:(\d+)/.exec(r);if(i){let s=parseInt(i[1]);return t.toUpperCase()+`

`+r+`

`+VR(n.getShaderSource(e),s)}else return r}function HR(n,e){let t=zR(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function WR(n,e){let t;switch(e){case rI:t="Linear";break;case iI:t="Reinhard";break;case sI:t="OptimizedCineon";break;case oI:t="ACESFilmic";break;case aI:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jR(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Au).join(`
`)}function YR(n){let e=[];for(let t in n){let A=n[t];A!==!1&&e.push("#define "+t+" "+A)}return e.join(`
`)}function qR(n,e){let t={},A=n.getProgramParameter(e,35721);for(let r=0;r<A;r++){let i=n.getActiveAttrib(e,r),s=i.name,o=1;i.type===35674&&(o=2),i.type===35675&&(o=3),i.type===35676&&(o=4),t[s]={type:i.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Au(n){return n!==""}function yw(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vw(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var XR=/^[ \t]*#include +<([\w\d./]+)>/gm;function gy(n){return n.replace(XR,QR)}function QR(n,e){let t=nt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return gy(t)}var KR=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,ZR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xw(n){return n.replace(ZR,iS).replace(KR,JR)}function JR(n,e,t,A){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),iS(n,e,t,A)}function iS(n,e,t,A){let r="";for(let i=parseInt(e);i<parseInt(t);i++)r+=A.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return r}function bw(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $R(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===df?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Wy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===tu&&(e="SHADOWMAP_TYPE_VSM"),e}function eB(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case rs:case is:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tB(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case is:e="ENVMAP_MODE_REFRACTION";break}return e}function AB(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xw:e="ENVMAP_BLENDING_MULTIPLY";break;case AI:e="ENVMAP_BLENDING_MIX";break;case nI:e="ENVMAP_BLENDING_ADD";break}return e}function nB(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,A=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:A,maxMip:t}}function rB(n,e,t,A){let r=n.getContext(),i=t.defines,s=t.vertexShader,o=t.fragmentShader,a=$R(t),c=eB(t),l=tB(t),u=AB(t),d=nB(t),h=t.isWebGL2?"":jR(t),f=YR(i),p=r.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[f].filter(Au).join(`
`),m.length>0&&(m+=`
`),g=[h,f].filter(Au).join(`
`),g.length>0&&(g+=`
`)):(m=[bw(t),"#define SHADER_NAME "+t.shaderName,f,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Au).join(`
`),g=[h,bw(t),"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?nt.tonemapping_pars_fragment:"",t.toneMapping!==Ei?WR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.encodings_pars_fragment,HR("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Au).join(`
`)),s=gy(s),s=yw(s,t),s=vw(s,t),o=gy(o),o=yw(o,t),o=vw(o,t),s=xw(s),o=xw(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===jb?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jb?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=y+m+s,b=y+g+o,w=mw(r,35633,x),T=mw(r,35632,b);if(r.attachShader(p,w),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){let E=r.getProgramInfoLog(p).trim(),C=r.getShaderInfoLog(w).trim(),P=r.getShaderInfoLog(T).trim(),D=!0,L=!0;if(r.getProgramParameter(p,35714)===!1){D=!1;let I=gw(r,w,"vertex"),B=gw(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+I+`
`+B)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(C===""||P==="")&&(L=!1);L&&(this.diagnostics={runnable:D,programLog:E,vertexShader:{log:C,prefix:m},fragmentShader:{log:P,prefix:g}})}r.deleteShader(w),r.deleteShader(T);let M;this.getUniforms=function(){return M===void 0&&(M=new xa(r,p)),M};let v;return this.getAttributes=function(){return v===void 0&&(v=qR(r,p)),v},this.destroy=function(){A.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=UR++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=T,this}var iB=0,yy=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,A=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(A),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let A of t)A.usedTimes--,A.usedTimes===0&&this.shaderCache.delete(A.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){let t=this.shaderCache;if(t.has(e)===!1){let A=new vy(e);t.set(e,A)}return t.get(e)}},vy=class{constructor(e){this.id=iB++,this.code=e,this.usedTimes=0}};function sB(n,e,t,A,r,i,s){let o=new cu,a=new yy,c=[],l=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures,h=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,E,C,P,D){let L=P.fog,I=D.geometry,B=v.isMeshStandardMaterial?P.environment:null,N=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),W=!!N&&N.mapping===ka?N.image.height:null,X=f[v.type];v.precision!==null&&(h=r.getMaxPrecision(v.precision),h!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let F=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,k=F!==void 0?F.length:0,Q=0;I.morphAttributes.position!==void 0&&(Q=1),I.morphAttributes.normal!==void 0&&(Q=2),I.morphAttributes.color!==void 0&&(Q=3);let z,U,j,q;if(X){let ne=Br[X];z=ne.vertexShader,U=ne.fragmentShader}else z=v.vertexShader,U=v.fragmentShader,a.update(v),j=a.getVertexShaderID(v),q=a.getFragmentShaderID(v);let V=n.getRenderTarget(),ue=v.alphaTest>0,Ae=v.clearcoat>0,Z=v.iridescence>0;return{isWebGL2:l,shaderID:X,shaderName:v.type,vertexShader:z,fragmentShader:U,defines:v.defines,customVertexShaderID:j,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,instancing:D.isInstancedMesh===!0,instancingColor:D.isInstancedMesh===!0&&D.instanceColor!==null,supportsVertexTextures:d,outputEncoding:V===null?n.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:Bn,map:!!v.map,matcap:!!v.matcap,envMap:!!N,envMapMode:N&&N.mapping,envMapCubeUVHeight:W,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===EI,tangentSpaceNormalMap:v.normalMapType===Zw,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===qe,clearcoat:Ae,clearcoatMap:Ae&&!!v.clearcoatMap,clearcoatRoughnessMap:Ae&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Ae&&!!v.clearcoatNormalMap,iridescence:Z,iridescenceMap:Z&&!!v.iridescenceMap,iridescenceThicknessMap:Z&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===va,alphaMap:!!v.alphaMap,alphaTest:ue,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!I.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:u,skinning:D.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:v.toneMapped?n.toneMapping:Ei,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rn,flipSided:v.side===DA,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||A.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||A.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||A.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)E.push(C),E.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(g(E,v),y(E,v),E.push(n.outputEncoding)),E.push(v.customProgramCacheKey),E.join()}function g(v,E){v.push(E.precision),v.push(E.outputEncoding),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.combine),v.push(E.vertexUvs),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function y(v,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),E.fog&&o.enable(33),v.push(o.mask),o.disableAll(),E.useFog&&o.enable(0),E.flatShading&&o.enable(1),E.logarithmicDepthBuffer&&o.enable(2),E.skinning&&o.enable(3),E.morphTargets&&o.enable(4),E.morphNormals&&o.enable(5),E.morphColors&&o.enable(6),E.premultipliedAlpha&&o.enable(7),E.shadowMapEnabled&&o.enable(8),E.physicallyCorrectLights&&o.enable(9),E.doubleSided&&o.enable(10),E.flipSided&&o.enable(11),E.useDepthPacking&&o.enable(12),E.dithering&&o.enable(13),E.specularIntensityMap&&o.enable(14),E.specularColorMap&&o.enable(15),E.transmission&&o.enable(16),E.transmissionMap&&o.enable(17),E.thicknessMap&&o.enable(18),E.sheen&&o.enable(19),E.sheenColorMap&&o.enable(20),E.sheenRoughnessMap&&o.enable(21),E.decodeVideoTexture&&o.enable(22),E.opaque&&o.enable(23),v.push(o.mask)}function x(v){let E=f[v.type],C;if(E){let P=Br[E];C=mr.clone(P.uniforms)}else C=v.uniforms;return C}function b(v,E){let C;for(let P=0,D=c.length;P<D;P++){let L=c[P];if(L.cacheKey===E){C=L,++C.usedTimes;break}}return C===void 0&&(C=new rB(n,E,v,i),c.push(C)),C}function w(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function T(v){a.remove(v)}function M(){a.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:b,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:M}}function oB(){let n=new WeakMap;function e(i){let s=n.get(i);return s===void 0&&(s={},n.set(i,s)),s}function t(i){n.delete(i)}function A(i,s,o){n.get(i)[s]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:A,dispose:r}}function aB(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ww(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Sw(){let n=[],e=0,t=[],A=[],r=[];function i(){e=0,t.length=0,A.length=0,r.length=0}function s(u,d,h,f,p,m){let g=n[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:h,groupOrder:f,renderOrder:u.renderOrder,z:p,group:m},n[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=h,g.groupOrder=f,g.renderOrder=u.renderOrder,g.z=p,g.group=m),e++,g}function o(u,d,h,f,p,m){let g=s(u,d,h,f,p,m);h.transmission>0?A.push(g):h.transparent===!0?r.push(g):t.push(g)}function a(u,d,h,f,p,m){let g=s(u,d,h,f,p,m);h.transmission>0?A.unshift(g):h.transparent===!0?r.unshift(g):t.unshift(g)}function c(u,d){t.length>1&&t.sort(u||aB),A.length>1&&A.sort(d||ww),r.length>1&&r.sort(d||ww)}function l(){for(let u=e,d=n.length;u<d;u++){let h=n[u];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:A,transparent:r,init:i,push:o,unshift:a,finish:l,sort:c}}function lB(){let n=new WeakMap;function e(A,r){let i;return n.has(A)===!1?(i=new Sw,n.set(A,[i])):r>=n.get(A).length?(i=new Sw,n.get(A).push(i)):i=n.get(A)[r],i}function t(){n=new WeakMap}return{get:e,dispose:t}}function cB(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new Le};break;case"SpotLight":t={position:new S,direction:new S,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new S,halfWidth:new S,halfHeight:new S};break}return n[e.id]=t,t}}}function uB(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var dB=0;function hB(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function fB(n,e){let t=new cB,A=uB(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let l=0;l<9;l++)r.probe.push(new S);let i=new S,s=new de,o=new de;function a(l,u){let d=0,h=0,f=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let p=0,m=0,g=0,y=0,x=0,b=0,w=0,T=0;l.sort(hB);let M=u!==!0?Math.PI:1;for(let E=0,C=l.length;E<C;E++){let P=l[E],D=P.color,L=P.intensity,I=P.distance,B=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=D.r*L*M,h+=D.g*L*M,f+=D.b*L*M;else if(P.isLightProbe)for(let N=0;N<9;N++)r.probe[N].addScaledVector(P.sh.coefficients[N],L);else if(P.isDirectionalLight){let N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity*M),P.castShadow){let W=P.shadow,X=A.get(P);X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,r.directionalShadow[p]=X,r.directionalShadowMap[p]=B,r.directionalShadowMatrix[p]=P.shadow.matrix,b++}r.directional[p]=N,p++}else if(P.isSpotLight){let N=t.get(P);if(N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(D).multiplyScalar(L*M),N.distance=I,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,P.castShadow){let W=P.shadow,X=A.get(P);X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,r.spotShadow[g]=X,r.spotShadowMap[g]=B,r.spotShadowMatrix[g]=P.shadow.matrix,T++}r.spot[g]=N,g++}else if(P.isRectAreaLight){let N=t.get(P);N.color.copy(D).multiplyScalar(L),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),r.rectArea[y]=N,y++}else if(P.isPointLight){let N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity*M),N.distance=P.distance,N.decay=P.decay,P.castShadow){let W=P.shadow,X=A.get(P);X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,X.shadowCameraNear=W.camera.near,X.shadowCameraFar=W.camera.far,r.pointShadow[m]=X,r.pointShadowMap[m]=B,r.pointShadowMatrix[m]=P.shadow.matrix,w++}r.point[m]=N,m++}else if(P.isHemisphereLight){let N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(L*M),N.groundColor.copy(P.groundColor).multiplyScalar(L*M),r.hemi[x]=N,x++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=h,r.ambient[2]=f;let v=r.hash;(v.directionalLength!==p||v.pointLength!==m||v.spotLength!==g||v.rectAreaLength!==y||v.hemiLength!==x||v.numDirectionalShadows!==b||v.numPointShadows!==w||v.numSpotShadows!==T)&&(r.directional.length=p,r.spot.length=g,r.rectArea.length=y,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=w,r.spotShadowMatrix.length=T,v.directionalLength=p,v.pointLength=m,v.spotLength=g,v.rectAreaLength=y,v.hemiLength=x,v.numDirectionalShadows=b,v.numPointShadows=w,v.numSpotShadows=T,r.version=dB++)}function c(l,u){let d=0,h=0,f=0,p=0,m=0,g=u.matrixWorldInverse;for(let y=0,x=l.length;y<x;y++){let b=l[y];if(b.isDirectionalLight){let w=r.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),d++}else if(b.isSpotLight){let w=r.spot[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),f++}else if(b.isRectAreaLight){let w=r.rectArea[p];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),o.identity(),s.copy(b.matrixWorld),s.premultiply(g),o.extractRotation(s),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){let w=r.point[h];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),h++}else if(b.isHemisphereLight){let w=r.hemi[m];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:r}}function Tw(n,e){let t=new fB(n,e),A=[],r=[];function i(){A.length=0,r.length=0}function s(u){A.push(u)}function o(u){r.push(u)}function a(u){t.setup(A,u)}function c(u){t.setupView(A,u)}return{init:i,state:{lightsArray:A,shadowsArray:r,lights:t},setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function pB(n,e){let t=new WeakMap;function A(i,s=0){let o;return t.has(i)===!1?(o=new Tw(n,e),t.set(i,[o])):s>=t.get(i).length?(o=new Tw(n,e),t.get(i).push(o)):o=t.get(i)[s],o}function r(){t=new WeakMap}return{get:A,dispose:r}}var du=class extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xy=class extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new S,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},mB=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gB=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
`?(A[A.length-1]+=r,r="",i===`
`&&A.push("")):e.getTextWidth(A[A.length-1]+r,n)>n.width&&(A[A.length-1].length&&A.push(""),e.getTextWidth(A[A.length-1]+r,n)>n.width&&(r.length===1?(A[A.length-1]+=r,r=""):(A[A.length-1]+=r.slice(0,-1),r=r[r.length-1],A.push(""))));return A[A.length-1]+=r,A}var pC,ic=new Promise(n=>{pC=n}),fC=!1;async function mC(){if(fC)return;let e=!1?".":"https://unpkg.com/@splinetool/modelling-wasm@0.9.176/build",[t,A]=await Promise.all([import("./process.js"),fetch(`${e}/process.wasm`).then(s=>s.arrayBuffer())]),r=t.default,i=await r({wasmBinary:A});pC(i),fC=!0}function ko(n,e,t){let A={parameters:n,type:n.type};if(n.type==="VectorGeometry"){let i=yt.createFromState(n.shape,n.width,n.height);A.shape=i}else if(n.type==="NonParametricGeometry")n.data.groups&&n.data.groups.forEach(i=>i.materialIndex=Math.max(i.materialIndex??0,0)),A.geometry=new Fa().parse(n);else{if(n.type==="SubdivGeometry")return new sA(n,t);if(n.type==="TextGeometry")return new rc(n,e)}let r;try{r=M0(A)}catch(i){console.error(i)}if(!r){let i=yt.createFromState(Cl.defaultData(),100,100);A.shape=i,r=M0(A)}return r}var S4=new de;function ld(n,e,t,A){let r=n.position.array,i=n.normal.array,s=S4.makeScale(e,t,A).invert().elements,o,a,c;for(var l=0,u=r.length;l<u;l+=3)r[l]*=e,r[l+1]*=t,r[l+2]*=A,o=i[l],a=i[l+1],c=i[l+2],i[l]=s[0]*o+s[4]*a+s[8]*c,i[l+1]=s[1]*o+s[5]*a+s[9]*c,i[l+2]=s[2]*o+s[6]*a+s[10]*c;n.position.needsUpdate=!0,n.normal.needsUpdate=!0}var qp=new mt,sc=new S,ze;ic.then(n=>{ze=n});var gC=new Float32Array([10,10,0,-10,10,0,-10,-10,0,10,-10,0]),yC=new Uint32Array([0,1,2,3]),vC=new Uint8Array([4]),sA=class extends Ie{constructor(t,A){super();this.data=t;this.flatShading=A;this.subdivPointer=0;this.rebuild(),this.freeSubdivPointer()}mutateDirectlyScaleBaked(t,A){this.freeSubdivPointer();let r=this.data.scaleBaked,i=qr.div(A,r);this.subdividedGeometry&&ld(this.subdividedGeometry.attributes,...i),this.originalGeometry&&ld(this.originalGeometry.attributes,...i),this.data=t;let s=this.userData.parameters;this.userData.parameters={width:s.width*i[0],height:s.height*i[1],depth:s.depth*i[2]},this.originalGeometry.boundingSphere.center.multiply(sc.fromArray(i));let o=sc.set(s.width,s.height,s.depth).length();this.originalGeometry.boundingSphere.radius=o/2}ensureSubdivPointer(){return this.subdivPointer===0&&this.rebuild(),this.subdivPointer}rebuild(){let t,A,r;try{({originalGeometry:t,subdividedGeometry:A,subdivPointer:r}=sA.build(this.data,void 0,!this.flatShading,void 0))}catch{t=new IA(100,100,100),r=0}this.subdivPointer=r,this.originalGeometry=t,this.subdividedGeometry=A??void 0;let i=this.subdividedGeometry??this.originalGeometry;Object.assign(this,i),this.calcBoundingBox()}freeSubdivPointer(){this.subdivPointer&&(sA.freeSubdivPointer(this.subdivPointer),this.subdivPointer=0)}dispose(){super.dispose(),this.freeSubdivPointer()}calcBoundingBox(){let t=this.originalGeometry;t.boundingSphere===null&&(t.boundingSphere=new uA,this.subdividedGeometry&&(this.subdividedGeometry.boundingSphere=t.boundingSphere));let A=t.attributes.position,r=t.boundingSphere.center;qp.setFromBufferAttribute(A),qp.getCenter(r),t.boundingSphere.radius=r.distanceTo(qp.max),isNaN(t.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this),qp.getSize(sc);let i={width:sc.x,height:sc.y,depth:sc.z};return this.userData.parameters=i,i}static build(t,A,r,i){let s,o,a,c=t?.phongAngle??35;r===!1&&(c=-1),A&&(ze.free_bvh(A),ze.free_subdivision_surface(A));try{s=sA.allocate(t,i)}catch(l){console.error(l,t),s=sA.allocate({positionWASM:gC,indexWASM:yC,verticesPerFaceWASM:vC},i)}if(ze.set_destination_refinement_level(s,0),o=sA.buildLevel(s,!0,c),t.subdivisions>0)try{ze.set_destination_refinement_level(s,t.subdivisions),a=sA.buildLevel(s,!1,c)}catch{try{ze.set_destination_refinement_level(s,t.subdivisions-1),a=sA.buildLevel(s,!1,c)}catch{a=null}}else a=null;return{subdivPointer:s,originalGeometry:o,subdividedGeometry:a}}static primitiveToQuads(t,A,r){t.widthSegments>16&&(t.widthSegments=16),t.heightSegments>16&&(t.heightSegments=16),t.depthSegments>16&&(t.depthSegments=16),t.radialSegments>16&&(t.radialSegments=16),t.type==="DodecahedronGeometry"&&(t.detail=0);let i=t.shape!==void 0?A.geometry:ko(t,r,!1),s,o,a,c;({positions:s,triIndices:c}=cd(i.getAttribute("position"),i.getIndex()));let l;if(t.type==="CylinderGeometry"&&t.cornerRadius===0&&t.hollow===0&&t.openEnded===!1){let u=t.radialSegments*t.heightSegments*3*2,d=u+t.radialSegments*3;l=[u,d]}return{indices:o,verticesPerFace:a}=D0(s,c,i,l),{positions:s,indices:o,verticesPerFace:a}}static allocate(t,A){let r,i,s,o=[],a=[];t.positionWASM&&t.positionWASM.length>0?(r=t.positionWASM,i=t.indexWASM,s=t.verticesPerFaceWASM):(r=gC,i=yC,s=vC);let c=r.length,l=i.length,u=s.length,d=r.length+o.length+a.length,h=i.length+s.length,f=d*Float32Array.BYTES_PER_ELEMENT+h*Uint32Array.BYTES_PER_ELEMENT,p=d*Float32Array.BYTES_PER_ELEMENT,m=h*Uint32Array.BYTES_PER_ELEMENT,g=ze._malloc(f),y=new Float32Array(ze.HEAPF32.buffer,g,d),x=new Uint32Array(ze.HEAPU32.buffer,g+p,h);y.set(r,0),y.set(o,r.length),y.set(a,r.length+o.length),x.set(i,0),x.set(s,i.length);let b;t?.scaleBaked?.some(T=>T!==1)&&(b=new de().makeScale(...t.scaleBaked)),A&&(b?b.premultiply(A):b=A);let w=b?ze.alloc_subdivision_surface2(g,c,g+p,l,g+p+i.length*Uint32Array.BYTES_PER_ELEMENT,u,b.elements):ze.alloc_subdivision_surface(g,c,g+p,l,g+p+i.length*Uint32Array.BYTES_PER_ELEMENT,u);return ze._free(g),w}static buildLevel(t,A,r,i,s){let o=s?ze.get_mesh_data2(t,A?ze.Level.CONTROL:ze.Level.REFINED,r,s.elements):ze.get_mesh_data(t,A?ze.Level.CONTROL:ze.Level.REFINED,r),a=8,c=ze.HEAPU32.subarray(o>>2,(o>>2)+a),l=c.subarray(4,4+4),u=0,d=ze.HEAPU32[c[u]>>2],h=ze.HEAPF32.subarray(d>>2,(d>>2)+l[u]);u++;let f=ze.HEAPU32[c[u]>>2],p=ze.HEAPF32.subarray(f>>2,(f>>2)+l[u]);u++;let m=ze.HEAPU32[c[u]>>2],g=ze.HEAPU32.subarray(m>>2,(m>>2)+l[u]);u++;let y=ze.HEAPU32[c[u]>>2],x=ze.HEAPU32.subarray(y>>2,(y>>2)+l[u]);if(u++,i===void 0){let b=new Ie;if(b.setIndex(new as(x,1)),b.setAttribute("position",new Se(h,3)),b.setAttribute("normal",new Se(p,3)),A){b.setAttribute("faceMap",new as(g,1));let w=new Float32Array(p.length/3*4).fill(0);b.setAttribute("color",new Fe(w,4))}return ze.free_mesh_data(o),b.userData.type="SubdivGeometry",b}i.getAttribute("position").copyArray(h),i.getAttribute("normal").copyArray(p),i.attributes.position.needsUpdate=!0,i.attributes.normal.needsUpdate=!0,ze.free_mesh_data(o)}static freeSubdivPointer(t){ze.free_bvh(t),ze.free_subdivision_surface(t)}static buildControlCageWireframe(t,A,r){let i=ze.get_wireframe_data_for_base_level(t),s=4,o=ze.HEAPU32.subarray(i>>2,(i>>2)+s),a=o.subarray(2,2+2),c=0,l=ze.HEAPU32[o[c]>>2],u=ze.HEAPF32.subarray(l>>2,(l>>2)+a[c]);c++;let d=ze.HEAPU32[o[c]>>2],h=ze.HEAPU32.subarray(d>>2,(d>>2)+a[c]);if(A===void 0){let f=new Ie;f.setAttribute("position",new Se(u,3));let p=new Float32Array(u.length);for(let m=0,g=u.length;m<g;)p[m++]=r.r,p[m++]=r.g,p[m++]=r.b;return f.setAttribute("color",new Fe(p,3)),f.setIndex(new as(h,1)),ze.free_wireframe_data_for_base_level(i),f}A.getAttribute("position").copyArray(u),A.attributes.position.needsUpdate=!0,ze.free_wireframe_data_for_base_level(i)}static updateCollabMesh(t,A,r){let i=A===0;i||ze.set_destination_refinement_level(t,A);let s=r?ze.get_topological_data2(t,i?ze.Level.CONTROL:ze.Level.REFINED,r.elements):ze.get_topological_data(t,i?ze.Level.CONTROL:ze.Level.REFINED),o=6,a=ze.HEAPU32.subarray(s>>2,(s>>2)+o),c=a.subarray(3,3+3),l=0,u=ze.HEAPU32[a[l]>>2],d=new Float32Array(ze.HEAPF32.subarray(u>>2,(u>>2)+c[l]));l++;let h=ze.HEAPU32[a[l]>>2],f=new Uint32Array(ze.HEAPU32.subarray(h>>2,(h>>2)+c[l]));l++;let p=ze.HEAPU32[a[l]>>2],m=new Uint8Array(ze.HEAPU32.subarray(p>>2,(p>>2)+c[l]));return ze.free_topological_data(s),{positions:d,indices:f,verticesPerFace:m}}};var xC=["getX","getY","getZ"];function cd(n,e){let t={},A=e?e.count:n.count,r=0,i=[],s=[],o=1e4;for(let c=0;c<A;c++){let l=e?e.getX(c):c,u="";for(let d=0;d<3;d++)u+=`${~~(n[xC[d]](l)*o)},`;if(u in t)i.push(t[u]);else{for(let d=0;d<3;d++)s.push(n[xC[d]](l));t[u]=r,i.push(r),r++}}let a=[];for(let c=0;c<i.length;c+=3)i[c]===i[c+1]||i[c]===i[c+2]||i[c+1]===i[c+2]||a.push(i[c],i[c+1],i[c+2]);return{positions:s,triIndices:a}}var Xp=new S,E0=new S,C0=new S,P0=new S;function D0(n,e,t,A){let r=[],i=[];if(t.userData.shape!==void 0&&t.userData.parameters.depth===0&&t.userData.shape.shapeHoles.length===0){let s=t.userData.shape.extractShapePointsToFlatArray([]),o=t.userData.parameters.spikes;if(t.userData.type==="EllipseGeometry"&&o<=24&&o%4===0&&t.userData.parameters.angle>=360){let l=s.length/2/o;s=s.filter((u,d)=>Math.floor(d/2)%l===0)}let a=0;for(let l=0;l<s.length;l+=2)a+=(s[l]-s[(l===0?s.length:l)-2])*(s[l+1]+s[(l===0?s.length:l)-1]);n.length=0;let c=0;if(a<0)for(let l=0;l<s.length;l+=2)n.push(s[l],s[l+1],0),r.push(c++);else for(let l=s.length-2;l>=0;l-=2)n.push(s[l],s[l+1],0),r.push(c++);return i.push(c),{indices:r,verticesPerFace:i}}for(let s=0,o=t.capStartIndex??e.length;s<o;)if(e[s+1]===e[s+3]&&e[s+2]===e[s+5]||e[s+0]===e[s+3]&&e[s+2]===e[s+4]){Xp.set(n[e[s]*3],n[e[s]*3+1],n[e[s]*3+2]),E0.set(n[e[s+1]*3],n[e[s+1]*3+1],n[e[s+1]*3+2]),C0.set(n[e[s+4]*3],n[e[s+4]*3+1],n[e[s+4]*3+2]),P0.set(n[e[s+5]*3],n[e[s+5]*3+1],n[e[s+5]*3+2]),E0.sub(Xp).normalize(),C0.sub(Xp).normalize(),P0.sub(Xp).normalize();let a=E0.cross(C0).dot(P0);Math.abs(a)>.005||A&&A.some((c,l)=>l%2===1?!1:s>=A[l]&&s<A[l+1])?(r.push(e[s],e[s+1],e[s+2]),i.push(3),s+=3):(r.push(e[s],e[s+1],e[s+4],e[s+5]),i.push(4),s+=6)}else r.push(e[s],e[s+1],e[s+2]),i.push(3),s+=3;if(t.capStartIndex!==void 0){let s=[],o=[],a=0,c=new Float32Array([t.userData.parameters.depth])[0];for(let l=0,u=0;l<n.length;l+=3,u++)n[l+2]===0&&(s.push(u),a++),n[l+2]===c&&o.push(u);if(t.userData.parameters.extrudeBevelSize===0){let l=o[0];o[0]=o[1],o[1]=l}s.reverse(),r.push(...s,...o),i.push(a,a)}return{indices:r,verticesPerFace:i}}var wr={};LD(wr,{calcBoolean:()=>E4,calcBooleanTopological:()=>M4,freeMeshSet:()=>D4,getMeshSet:()=>C4,transformMeshSet:()=>P4});var wC,SC=new Promise(n=>{wC=n}),bC=!1;async function TC(){if(bC)return;let e=!1?".":"https://unpkg.com/@splinetool/boolean-wasm@0.9.176/build",[t,A]=await Promise.all([import("./boolean.js"),fetch(`${e}/boolean.wasm`).then(s=>s.arrayBuffer())]),r=t.default,i=await r({wasmBinary:A});wC(i),bC=!0}var lt,oc;SC.then(n=>lt=n);function T4(n,e,t){let A,{positions:r,triIndices:i}=cd(n.getAttribute("position"),n.getIndex()),s;if(e&&t){let{indices:o,verticesPerFace:a}=D0(r,i,n);s=a.length,A=[];for(let c=0,l=0;c<s;c++){A.push(a[c]);for(let u=0;u<a[c];u++)A.push(o[l++])}}else{let o=i.length;A=Array(o+o/3),s=0;for(let a=0,c=0;c<A.length;)A[c++]=3,s++,A[c++]=i[a++],A[c++]=i[a++],A[c++]=i[a++]}return{positions:r,faceIndices:A,nFaces:s}}function MC(n){let e=n.length,t=e*Uint32Array.BYTES_PER_ELEMENT,A=e*Float32Array.BYTES_PER_ELEMENT,r=Number.isInteger(n[0])?t:A,i=lt._malloc(r);return(Number.isInteger(n[0])?new Uint32Array(lt.HEAPU32.buffer,i,e):new Float32Array(lt.HEAPF32.buffer,i,e)).set(n,0),i}function EC(n){switch(n){case 0:return lt.OP.UNION;case 1:return lt.OP.INTERSECTION;case 2:return lt.OP.A_MINUS_B;case 3:return lt.OP.B_MINUS_A;case 4:return lt.OP.SYMMETRIC_DIFFERENCE;case 5:return lt.OP.ALL;default:throw new Error("Unknown boolean operation "+n)}}function M4(n,e){oc===void 0&&(oc=lt.init_csg());let t=MC(n),A=lt.csg_calc_topological(oc,t,n.length,EC(e));lt._free(t);let r=6,i=lt.HEAPU32.subarray(A>>2,(A>>2)+r),s=i.subarray(3,3+3),o=0,a=lt.HEAPU32[i[o]>>2],c=new Float32Array(lt.HEAPF32.subarray(a>>2,(a>>2)+s[o]));o++;let l=lt.HEAPU32[i[o]>>2],u=new Uint32Array(lt.HEAPU32.subarray(l>>2,(l>>2)+s[o]));o++;let d=lt.HEAPU32[i[o]>>2],h=new Uint8Array(lt.HEAPU32.subarray(d>>2,(d>>2)+s[o]));return lt.free_mesh_data(A),{positions:c,indices:u,verticesPerFace:h}}function E4(n,e,t,A){oc===void 0&&(oc=lt.init_csg());let r=MC(n),i=lt.csg_calc(oc,r,n.length,A,EC(e));lt._free(r);let s=5,o=lt.HEAPU32.subarray(i>>2,(i>>2)+s),a=o.subarray(2,2+3),c=0,l=lt.HEAPU32[o[c]>>2],u=lt.HEAPF32.subarray(l>>2,(l>>2)+a[c]);c++;let d=lt.HEAPU32[o[c]>>2],h=lt.HEAPF32.subarray(d>>2,(d>>2)+a[c]);c++;let f=a[c];t.setAttribute("position",new Se(u,3)),t.setAttribute("normal",new Se(h,3));let p=lt.HEAPF32.subarray((i>>2)+5,(i>>2)+5+6);return t.boundingSphere===null&&(t.boundingSphere=new uA),t.boundingSphere.center.set(p[0],p[1],p[2]),t.boundingSphere.radius=(p[3]**2+p[4]**2+p[5]**2)**.5,t.userData.parameters={width:p[3]*2,height:p[4]*2,depth:p[5]*2},lt.free_mesh_data(i),f}function C4(n,e,t){if(lt===void 0)return-1;let A,r,i;if(e&&n.userData.positions!==void 0){let m=n.userData;i=m.verticesPerFace.length,A=m.positions,r=Array(m.verticesPerFace.reduce((g,y)=>g+y,0)+i);for(let g=0,y=0,x=0;g<m.verticesPerFace.length;g++){r[x++]=m.verticesPerFace[g];for(let b=0;b<m.verticesPerFace[g];b++)r[x++]=m.indices[y++]}}else({positions:A,faceIndices:r,nFaces:i}=T4(n,e,t));let s=A.length,o=r.length,a=A.length,c=r.length,l=a*Float32Array.BYTES_PER_ELEMENT+c*Uint32Array.BYTES_PER_ELEMENT,u=a*Float32Array.BYTES_PER_ELEMENT,d=c*Uint32Array.BYTES_PER_ELEMENT,h=lt._malloc(l),f=new Float32Array(lt.HEAPF32.buffer,h,a),p=new Uint32Array(lt.HEAPU32.buffer,h+u,c);return f.set(A,0),p.set(r,0),lt.get_csg_mesh(h,s,h+u,o,i)}function P4(n,e){lt.transform_csg_mesh(n,e.elements)}function D4(n){lt.free_csg_mesh(n)}var I4={ConeGeometry:ME,CubeGeometry:EE,CylinderGeometry:TE,DodecahedronGeometry:CE,EllipseGeometry:QE,HelixGeometry:$E,IcosahedronGeometry:eC,LatheGeometry:tC,NonParametricGeometry:AC,PolygonGeometry:nC,PyramidGeometry:rC,RectangleGeometry:iC,SphereGeometry:sC,PlaneGeometry:oC,BackdropGeometry:aC,StarGeometry:lC,TextFrameGeometry:cC,TorusGeometry:uC,TorusKnotGeometry:dC,TriangleGeometry:hC,VectorGeometry:Tn},M0=n=>I4[n.type].create(n);function ud(n){return n!==null&&"booleanOp"in n}var ac=class extends Gp(PA){constructor(){super(...arguments);this.booleanMeshSetAddress=-1;this.booleanWasTransformed=!1;this.booleanMatrixInvOld=new de}updateVisible(){super.updateVisible(),this.visible=!ud(this.parent)&&this.visible,ud(this.parent)&&this.parent.invalidateDownstreamBooleanData()}freeBooleanPointer(){this.booleanMeshSetAddress!==-1&&(wr.freeMeshSet(this.booleanMeshSetAddress),this.booleanMeshSetAddress=-1)}invalidateDownstreamBooleanData(t=!1){return t?this.booleanWasTransformed=!0:this.freeBooleanPointer(),ud(this.parent)?this.parent.invalidateDownstreamBooleanData():this}invalidateUpstreamBooleanData(){this.freeBooleanPointer();for(let t of this.children)t instanceof ac&&(t.freeBooleanPointer(),ud(t)&&t.invalidateUpstreamBooleanData())}updateTransformState(t){let A=super.updateTransformState(t);return A&&ud(this.parent)&&this.invalidateDownstreamBooleanData(!0),A}};var Qp=new mt;function I0(n,e=0,t=n.count,A,r){let i=1/0,s=1/0,o=1/0,a=-1/0,c=-1/0,l=-1/0;for(let u=e;u<t;u++){let d=n.getX(u),h=n.getY(u),f=n.getZ(u);d<i&&(i=d),h<s&&(s=h),f<o&&(o=f),d>a&&(a=d),h>c&&(c=h),f>l&&(l=f)}Qp.min.set(i,s,o),Qp.max.set(a,c,l),Qp.getCenter(A),Qp.getSize(r).multiplyScalar(.5)}var O4=new Ie,L4=new oo,Lt=class extends ac{constructor(e,t){super(O4,L4),this.super_Entity(e,t)}updateState(e,t){this.updateState_Entity(e,t)}updateEntityBoxSize(e,t){let A=this.geometry.getAttribute("position");A!==void 0?I0(A,this.geometry.drawRange.start,this.geometry.drawRange.count<1/0?this.geometry.drawRange.count:A.count,e,t):super.updateEntityBoxSize(e,t)}};var HC=ch(O0());var dd=class{constructor(e){e=e??{},this.name=e.name,this.type=e.type,this.node=e.node,this.size=e.size,this.needsUpdate=e.needsUpdate}get value(){return this.node.value}set value(e){this.node.value=e}};var GA=class{constructor(e){this.hashProperties=void 0;this.isNode=!0;this.shortcuts={};this.uuid=Ve.generateUUID(),this.type=e,this.name=""}analyze(e,t){t=t??{},e.analyzing=!0,this.build(e.addFlow(t.slot,t.cache,t.context),"v4"),e.clearVertexNodeCode(),e.clearFragmentNodeCode(),e.removeFlow(),e.analyzing=!1}analyzeAndFlow(e,t,A){return A=A??{},this.analyze(e,A),this.flow(e,t,A)}flow(e,t,A){A=A??{},e.addFlow(A.slot,A.cache,A.context);let r={result:this.build(e,t),code:e.clearNodeCode(),extra:e.context.extra};return e.removeFlow(),r}build(e,t,A){t=t??this.getType(e,t);let r=e.getNodeData(A??this);return e.analyzing&&this.appendDepsNode(e,r,t),e.nodes.indexOf(this)===-1&&e.nodes.push(this),this.updateFrame!==void 0&&e.updaters.indexOf(this)===-1&&e.updaters.push(this),this.generate(e,t,A)}updateFrame(e){}generateReadonly(e,t,A,r,i,s){return""}generate(e,t,A,r,i){return""}parse(e,t,A,r){}appendDepsNode(e,t,A){t.deps=(t.deps||0)+1;let r=e.getTypeLength(A);(r>(t.outputMax||0)||this.getType(e,A))&&(t.outputMax=r,t.output=A)}setName(e){this.name=e}getName(){return this.name}getType(e,t){return t==="sampler2D"||t==="samplerCube"?t:this.type}getHash(){let e="{",t,A;for(t in this)A=this[t],A instanceof GA&&(e+='"'+t+'":'+A.getHash()+",");if(this.hashProperties)for(let r=0;r<this.hashProperties.length;r++)t=this.hashProperties[r],A=this[t],e+='"'+t+'":"'+String(A)+'",';return e+='"id":"'+this.uuid+'"}',e}};var L0=class{constructor(){this.nodes={};this.keywords={}}add(e){this.nodes[e.name]=e}addKeyword(e,t,A){A=A!==void 0?A:!0,this.keywords[e]={callback:t,cache:A}}remove(e){delete this.nodes[e.name]}removeKeyword(e){delete this.keywords[e]}get(e){return this.nodes[e]}getKeyword(e,t){return this.keywords[e].callback(t)}getKeywordData(e){return this.keywords[e]}contains(e){return this.nodes[e]!==void 0}containsKeyword(e){return this.keywords[e]!==void 0}},TA=new L0;var Ue=class extends GA{constructor(t,A){super(t);this.scope="";A=A??{},this.shared=A.shared!==void 0?A.shared:!0,this.unique=A.unique!==void 0?A.unique:!1}build(t,A,r,i){if(A=A??this.getType(t),this.getShared(t,A)){let s=this.getUnique(t,A);s&&this.uuid===void 0&&(this.uuid=Ve.generateUUID()),r=t.getUUID(r??this.getUUID(),!s);let o=t.getNodeData(r),a=o.output||this.getType(t);if(t.analyzing)return(o.deps||0)>0||this.getLabel()?(this.appendDepsNode(t,o,A),this.generate(t,A,r)):super.build(t,A,r);if(s)return o.name=o.name||super.build(t,A,r),o.name;if(!this.getLabel()&&(!this.getShared(t,a)||t.context.ignoreCache||o.deps===1))return super.build(t,A,r);r=this.getUUID(!1);let c=this.getTemp(t,r);if(c)return t.format(c,a,A);{c=super.generate(t,A,r,o.output,i);let l=this.generate(t,a,r);return t.addNodeCode(c+" = "+l+";"),t.format(c,a,A)}}return super.build(t,A,r)}getShared(t,A){return A!=="sampler2D"&&A!=="samplerCube"&&this.shared}getUnique(t,A){return this.unique}setLabel(t){return this.label=t,this}getLabel(){return this.label}getUUID(t){let A=this.uuid;return typeof this.scope=="string"&&(A=this.scope+"-"+A),A}getTemp(t,A){A=A||this.uuid;let r=t.getVars()[A];return r?r.name:void 0}generate(t,A,r,i,s){return this.getShared(t,A)||console.error("TempNode is not shared"),r=r??this.uuid,t.getTempVar(r,i??this.getType(t),s,this.getLabel()).name}};var _t=class extends Ue{constructor(t,A){A=A??{},A.shared=A.shared!==void 0?A.shared:!1;super(t,A);this.readonly=!1}setReadonly(t){return this.readonly=t,this.hashProperties=this.readonly?["value"]:void 0,this}getReadonly(){return this.readonly}generate(t,A,r,i,s,o){r=t.getUUID(r??this.getUUID()),i=i??this.getType(t);let a=t.getNodeData(r);return this.getReadonly()&&this.generateReadonly!==void 0?this.generateReadonly(t,A,r,i,s,o):t.isShader("vertex")?(a.vertex||(a.vertex=t.createVertexUniform(i,this,s,o,this.getLabel())),t.format(a.vertex.name,i,A)):(a.fragment||(a.fragment=t.createFragmentUniform(i,this,s,o,this.getLabel())),t.format(a.fragment.name,i,A))}};var kA=class extends _t{constructor(t=0,A){super("v2");this.nodeType="Vector2";this.value=t instanceof G?t:new G(t,A)}get x(){return this.value.x}set x(t){this.value.x=t}get y(){return this.value.y}set y(t){this.value.y=t}generateReadonly(t,A,r,i,s,o){return t.format("vec2("+this.value.x+", "+this.value.y+")",i,A)}};var qA=class extends _t{constructor(t=0,A,r){super("v3");this.nodeType="Vector3";this.value=t instanceof S?t:new S(t,A,r)}get x(){return this.value.x}set x(t){this.value.x=t}get y(){return this.value.y}set y(t){this.value.y=t}get z(){return this.value.z}set z(t){this.value.z=t}generateReadonly(t,A,r,i,s,o){return t.format("vec3("+this.value.x+", "+this.value.y+", "+this.value.z+")",i,A)}};var $t=class extends Le{constructor(t,A,r,i){super(t,A,r);this.isColorA=!0;this.a=i}setRGBA(t,A,r,i){super.setRGB(t,A,r),this.a=i}copy(t){return super.copy(t),this.a="a"in t?t.a:1,this}clone(){return new this.constructor(this.r,this.g,this.b,this.a)}get x(){return this.r}get y(){return this.g}get z(){return this.b}get w(){return this.a}set x(t){this.r=t}set y(t){this.g=t}set z(t){this.b=t}set w(t){this.a=t}};var tr=class extends _t{constructor(t){super("v4");this.nodeType="Vector4";this.value=t instanceof $t?t:new $t(t.r,t.g,t.b,t.a)}generateReadonly(t,A,r,i,s,o){return t.format("vec4("+this.value.r+", "+this.value.g+", "+this.value.b+", "+this.value.a+")",i,A)}};var _4=/^\s*([a-z_0-9]+)\s([a-z_0-9]+)\s*\((.*?)\)/i,PC=/[a-z_0-9]+/gi,Ee=class extends Ue{constructor(t,A,r,i,s){super(s);this.src="";this.nodeType="Function";this.useKeywords=!0;this.includes=[];this.extensions={};this.keywords={};this.isMethod=s===void 0,this.isInterface=!1,this.parse(t,A,r,i)}getShared(t,A){return!this.isMethod}getType(t){return t.getTypeByFormat(this.type)}getInputByName(t){if(this.inputs){let A=this.inputs.length;for(;A--;)if(this.inputs[A].name===t)return this.inputs[A]}}getIncludeByName(t){if(this.includes){let A=this.includes.length;for(;A--;)if(this.includes[A].name===t)return this.includes[A]}}generate(t,A,r,i,s){let o,a=0,c=this.src;if(this.includes)for(let u=0;u<this.includes.length;u++)t.include(this.includes[u],this);for(let u in this.extensions)t.extensions[u]=!0;let l=[];for(;o=PC.exec(this.src);)l.push(o);for(let u=0;u<l.length;u++){let d=l[u],h=d[0],f=this.isMethod?!this.getInputByName(h):!0,p=h;if(this.keywords[h]||this.useKeywords&&f&&TA.containsKeyword(h)){let m=this.keywords[h];if(!m){let g=TA.getKeywordData(h);g.cache&&(m=t.keywords[h]),m=m||TA.getKeyword(h,t),g.cache&&(t.keywords[h]=m)}p=m.build(t)}h!==p&&c[d.index+a-1]!=="."&&(c=c.substring(0,d.index+a)+p+c.substring(d.index+h.length+a),a+=p.length-h.length),this.getIncludeByName(p)===void 0&&TA.contains(p)&&t.include(TA.get(p))}return A==="source"?c:this.isMethod?(this.isInterface||t.include(this,void 0,c),this.name):t.format("( "+c+" )",this.getType(t),A)}parse(t,A,r,i){if(this.src=t||"",this.includes=A??[],this.extensions=r??{},this.keywords=i??{},this.isMethod){let s=_4.exec(this.src);if(this.inputs=[],s&&s.length==4){this.type=s[1],this.name=s[2];let o=s[3].match(PC);if(o){let a=0;for(;a<o.length;){let c=o[a++],l;c==="in"||c==="out"||c==="inout"?l=o[a++]:(l=c,c="");let u=o[a++];this.inputs.push({name:u,type:l,qualifier:c})}}this.isInterface=this.src.indexOf("{")===-1}else this.type="",this.name=""}}};var R4=/^([a-z_0-9]+)\s([a-z_0-9]+)\s?\=?\s?(.*?)(\;|$)/i,_0=class extends Ue{constructor(t="",A){super();this.src="";this.useDefine=!1;this.nodeType="Const";this.parse(t||_0.PI,void 0,void 0,void 0,A)}getType(t){return t.getTypeByFormat(this.type)}parse(t,A,r,i,s){this.src=t||"";let o,a,c="",l=R4.exec(t);this.useDefine=s??this.src.charAt(0)==="#",l&&l.length>1?(a=l[1],o=l[2],c=l[3]):(o=this.src,a="f"),this.name=o,this.type=a,this.value=c}build(t,A){if(A==="source"){if(this.value)return this.useDefine?"#define "+this.name+" "+this.value:"const "+this.type+" "+this.name+" = "+this.value+";";if(this.useDefine)return this.src}return t.include(this),t.format(this.name,this.getType(t),A)}generate(t,A,r,i,s){return t.format(this.name,this.getType(t),A)}},ft=_0;ft.PI="PI",ft.PI2="PI2",ft.RECIPROCAL_PI="RECIPROCAL_PI",ft.RECIPROCAL_PI2="RECIPROCAL_PI2",ft.LOG2="LOG2",ft.EPSILON="EPSILON";var B4=new RegExp(`^structs*([a-z_0-9]+)s*{s*((.|
)*?)}`,"gim"),N4=new RegExp("s*(w*?)s*(w*?)(=|;)","gim"),lc=class extends Ue{constructor(t=""){super();this.inputs=[];this.src="";this.nodeType="Struct";this.parse(t)}getType(t){return t.getTypeByFormat(this.name)}getInputByName(t){let A=this.inputs.length;for(;A--;)if(this.inputs[A].name===t)return this.inputs[A]}generate(t,A,r,i,s){return A==="source"?this.src+";":t.format("( "+this.src+" )",this.getType(t),A)}parse(t=""){this.src=t,this.inputs=[];let A=B4.exec(t);if(A){let r=A[2],i;for(;i=N4.exec(r);)this.inputs.push({type:i[1],name:i[2]});this.name=A[1]}else this.name="";this.type=this.name}};var cc=class extends Ue{constructor(t){super("v2",{shared:!1});this.nodeType="UV";this.index=t??0}generate(t,A){t.requires.uv[this.index]=!0;let r=this.index>0?this.index+1:"",i=t.isShader("vertex")?"uv"+r:"vUv"+r;return t.format(i,this.getType(t),A)}};TA.addKeyword("uv",function(){return new cc});TA.addKeyword("uv2",function(){return new cc(1)});var Uo=class extends Ue{constructor(t,A){super("v4");this.nodeType="ColorSpace";this.input=t,this.method=A??Uo.LINEAR_TO_LINEAR,this.hashProperties=["method"]}static getEncodingComponents(t){switch(t){case Bn:return["Linear"];case qe:return["sRGB"];default:return[]}}generate(t,A){let r=this.input.build(t,"v4"),i=this.getType(t),s=Uo.Nodes[this.method],o=t.include(s);if(o===Uo.LINEAR_TO_LINEAR)return t.format(r,i,A);if(s.inputs?.length===2){let a=this.factor.build(t,"f");return t.format(o+"( "+r+", "+a+" )",i,A)}else return t.format(o+"( "+r+" )",i,A)}fromEncoding(t){let A=Uo.getEncodingComponents(t);this.method="LinearTo"+A[0],this.factor=A[1]}fromDecoding(t){let A=Uo.getEncodingComponents(t);this.method=A[0]+"ToLinear",this.factor=A[1]}},fn=Uo;fn.Nodes={LinearToLinear:new Ee(["vec4 LinearToLinear( in vec4 value ) {","	return value;","}"].join(`
`)),sRGBToLinear:new Ee(["vec4 sRGBToLinear( in vec4 value ) {","	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );","}"].join(`
`)),LinearTosRGB:new Ee(["vec4 LinearTosRGB( in vec4 value ) {","	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );","}"].join(`
`))},fn.LINEAR_TO_LINEAR="LinearToLinear",fn.SRGB_TO_LINEAR="sRGBToLinear",fn.LINEAR_TO_SRGB="LinearTosRGB";var wt=class extends Ee{constructor(t="",A,r,i,s){super(t,s,i,r,A);this.nodeType="Expression"}};var Mn=class extends _t{constructor(t=new Wt,A,r,i){super("v4",{shared:!0});this.nodeType="Texture";this.value=t,this.uv=A??new cc,this.bias=r,this.project=i!==void 0?i:!1}getTexture(t,A){return super.generate(t,A,this.value.uuid,"t")}generate(t,A){if(A==="sampler2D")return this.getTexture(t,A);let r=this.getTexture(t,A),i=this.uv.build(t,this.project?"v4":"v2"),s=this.bias?this.bias.build(t,"f"):void 0;s===void 0&&t.context.bias&&(s=t.context.bias.setTexture(this).build(t,"f"));let o,a;this.project?o="texture2DProj":o=s?"tex2DBias":"tex2D",s?a=o+"( "+r+", "+i+", "+s+" )":a=o+"( "+r+", "+i+" )";let c={include:t.isShader("vertex"),ignoreCache:!0},l=this.getType(t);return t.addContext(c),this.colorSpace=this.colorSpace??new fn(new wt("",l)),this.colorSpace.fromDecoding(t.getTextureEncodingFromMap(this.value)),this.colorSpace.input.parse(a),a=this.colorSpace.build(t,l),t.removeContext(),t.format(a,l,A)}};var Pe=class extends _t{constructor(t){super("f");this.nodeType="Float";this.value=t??0}generateReadonly(t,A,r,i,s,o){return t.format(this.value+(this.value%1?"":".0"),i,A)}};var hd=class extends Ue{constructor(t,A){super();this.inputs=[];this.nodeType="FunctionCall";this.value=t,this.inputs=A??[]}getFunction(){return this.value}getType(t){return this.value.getType(t)}generate(t,A,r,i,s){i=this.getType(t);let o=this.value,a=o.build(t,A)+"( ",c=[];if(o.inputs){for(let l=0;l<o.inputs.length;l++){let u=o.inputs[l],d=this.inputs[l]||this.inputs[u.name];c.push(d.build(t,t.getTypeByFormat(u.type)))}a+=c.join(", ")+" )"}return t.format(a,i,A)}};var R0=class extends Ue{constructor(t,A,r=R0.ADD){super();this.nodeType="Operator";this.type=t.type,this.a=t,this.b=A,this.op=r}getType(t){let A=this.a.getType(t),r=this.b.getType(t);return t.isTypeMatrix(A)?"v4":t.getTypeLength(r)>t.getTypeLength(A)?r:A}generate(t,A){let r=this.getType(t);this.type=r;let i=this.a.build(t,r),s=this.b.build(t,r);return t.format("( "+i+" "+this.op+" "+s+" )",r,A)}},En=R0;En.ADD="+",En.SUB="-",En.MUL="*",En.DIV="/";var Pt=class extends Ue{constructor(t,A=Pt.ABS,r,i){super();this.nodeType="Math";this.a=t,typeof A!="string"?this.b=A:i=A,typeof r!="string"?this.c=r:i=r,this.method=i,this.hashProperties=["method"]}getNumInputs(t){switch(this.method){case Pt.MIX:case Pt.CLAMP:case Pt.REFRACT:case Pt.SMOOTHSTEP:case Pt.FACEFORWARD:return 3;case Pt.MIN:case Pt.MAX:case Pt.MOD:case Pt.STEP:case Pt.REFLECT:case Pt.DISTANCE:case Pt.DOT:case Pt.CROSS:case Pt.POW:return 2;default:return 1}}getInputType(t){let A=t.getTypeLength(this.a.getType(t)),r=this.b?t.getTypeLength(this.b.getType(t)):0,i=this.c?t.getTypeLength(this.c.getType(t)):0;return A>r&&A>i?this.a.getType(t):r>i?this.b.getType(t):this.c.getType(t)}getType(t){switch(this.method){case Pt.LENGTH:case Pt.DISTANCE:case Pt.DOT:return"f";case Pt.CROSS:return"v3"}return this.getInputType(t)}generate(t,A){let r,i,s,o=this.a?t.getTypeLength(this.a.getType(t)):0,a=this.b?t.getTypeLength(this.b.getType(t)):0,c=this.c?t.getTypeLength(this.c.getType(t)):0,l=this.getInputType(t),u=this.getType(t);switch(this.type=u,this.method){case Pt.NEGATE:return t.format("( -"+this.a.build(t,l)+" )",l,A);case Pt.INVERT:return t.format("( 1.0 - "+this.a.build(t,l)+" )",l,A);case Pt.CROSS:r=this.a.build(t,"v3"),i=this.b.build(t,"v3");break;case Pt.STEP:r=this.a.build(t,o===1?"f":l),i=this.b.build(t,l);break;case Pt.MIN:case Pt.MAX:case Pt.MOD:r=this.a.build(t,l),i=this.b.build(t,a===1?"f":l);break;case Pt.REFRACT:r=this.a.build(t,l),i=this.b.build(t,l),s=this.c.build(t,"f");break;case Pt.MIX:r=this.a.build(t,l),i=this.b.build(t,l),s=this.c.build(t,c===1?"f":l);break;default:r=this.a.build(t,l),this.b&&(i=this.b.build(t,l)),this.c&&(s=this.c.build(t,l));break}let d=[];d.push(r),i&&d.push(i),s&&d.push(s);let h=this.getNumInputs(t);if(d.length!==h)throw Error(`Arguments not match used in "${this.method}". Require ${h}, currently ${d.length}.`);return t.format(this.method+"( "+d.join(", ")+" )",u,A)}},Xe=Pt;Xe.RAD="radians",Xe.DEG="degrees",Xe.EXP="exp",Xe.EXP2="exp2",Xe.LOG="log",Xe.LOG2="log2",Xe.SQRT="sqrt",Xe.INV_SQRT="inversesqrt",Xe.FLOOR="floor",Xe.CEIL="ceil",Xe.NORMALIZE="normalize",Xe.FRACT="fract",Xe.SATURATE="saturate",Xe.SIN="sin",Xe.COS="cos",Xe.TAN="tan",Xe.ASIN="asin",Xe.ACOS="acos",Xe.ARCTAN="atan",Xe.ABS="abs",Xe.SIGN="sign",Xe.LENGTH="length",Xe.NEGATE="negate",Xe.INVERT="invert",Xe.MIN="min",Xe.MAX="max",Xe.MOD="mod",Xe.STEP="step",Xe.REFLECT="reflect",Xe.DISTANCE="distance",Xe.DOT="dot",Xe.CROSS="cross",Xe.POW="pow",Xe.MIX="mix",Xe.CLAMP="clamp",Xe.REFRACT="refract",Xe.SMOOTHSTEP="smoothstep",Xe.FACEFORWARD="faceforward";var uc=class extends Ue{constructor(t,A,r){super("v4");this.nodeType="TextureCubeUV";this.value=t,this.uv=A,this.bias=r}bilinearCubeUV(t,A,r,i){let s=new hd(uc.Nodes.bilinearCubeUV,[A,r,i]);this.colorSpaceTL=this.colorSpaceTL??new fn(new wt("","v4")),this.colorSpaceTL.fromDecoding(t.getTextureEncodingFromMap(this.value.value)),this.colorSpaceTL.input.parse(s.build(t)+".tl"),this.colorSpaceTR=this.colorSpaceTR??new fn(new wt("","v4")),this.colorSpaceTR.fromDecoding(t.getTextureEncodingFromMap(this.value.value)),this.colorSpaceTR.input.parse(s.build(t)+".tr"),this.colorSpaceBL=this.colorSpaceBL??new fn(new wt("","v4")),this.colorSpaceBL.fromDecoding(t.getTextureEncodingFromMap(this.value.value)),this.colorSpaceBL.input.parse(s.build(t)+".bl"),this.colorSpaceBR=this.colorSpaceBR??new fn(new wt("","v4")),this.colorSpaceBR.fromDecoding(t.getTextureEncodingFromMap(this.value.value)),this.colorSpaceBR.input.parse(s.build(t)+".br");let o={include:t.isShader("vertex"),ignoreCache:!0};t.addContext(o),this.colorSpaceTLExp=new wt(this.colorSpaceTL.build(t,"v4"),"v4"),this.colorSpaceTRExp=new wt(this.colorSpaceTR.build(t,"v4"),"v4"),this.colorSpaceBLExp=new wt(this.colorSpaceBL.build(t,"v4"),"v4"),this.colorSpaceBRExp=new wt(this.colorSpaceBR.build(t,"v4"),"v4"),t.removeContext();let a=new wt("mix( mix( cubeUV_TL, cubeUV_TR, cubeUV.f.x ), mix( cubeUV_BL, cubeUV_BR, cubeUV.f.x ), cubeUV.f.y )","v4");return a.keywords.cubeUV_TL=this.colorSpaceTLExp,a.keywords.cubeUV_TR=this.colorSpaceTRExp,a.keywords.cubeUV_BL=this.colorSpaceBLExp,a.keywords.cubeUV_BR=this.colorSpaceBRExp,a.keywords.cubeUV=s,a}generate(t,A){if(t.isShader("fragment")){let r=this.uv,i=this.bias||t.context.roughness,s=new hd(uc.Nodes.roughnessToMip,[i]),o=new Xe(s,uc.Nodes.m0,uc.Nodes.cubeUV_maxMipLevel,Xe.CLAMP),a=new Xe(o,Xe.FLOOR),c=new Xe(o,Xe.FRACT),l=this.bilinearCubeUV(t,this.value,r,a),u=this.bilinearCubeUV(t,this.value,r,new En(a,new Pe(1).setReadonly(!0),En.ADD)),d=new Xe(l,u,c,Xe.MIX);return t.format(d.build(t),"v4",A)}else return console.warn("TextureCubeUVNode is not compatible with "+t.shader+" shader."),t.format("vec4( 0.0 )",this.getType(t),A)}},dc=uc;dc.Nodes=function(){let t=new lc(`struct TextureCubeUVData {
			vec4 tl;
			vec4 tr;
			vec4 br;
			vec4 bl;
			vec2 f;
		}`),A=new ft("float cubeUV_maxMipLevel 8.0",!0),r=new ft("float cubeUV_minMipLevel 4.0",!0),i=new ft("float cubeUV_maxTileSize 256.0",!0),s=new ft("float cubeUV_minTileSize 16.0",!0),o=new Ee(`float getFace(vec3 direction) {
				vec3 absDirection = abs(direction);
				float face = -1.0;
				if (absDirection.x > absDirection.z) {
					if (absDirection.x > absDirection.y)
						face = direction.x > 0.0 ? 0.0 : 3.0;
					else
						face = direction.y > 0.0 ? 1.0 : 4.0;
				} else {
					if (absDirection.z > absDirection.y)
						face = direction.z > 0.0 ? 2.0 : 5.0;
					else
						face = direction.y > 0.0 ? 1.0 : 4.0;
				}
				return face;
		}`);o.useKeywords=!1;let a=new Ee(`vec2 getUV(vec3 direction, float face) {
				vec2 uv;
				if (face == 0.0) {
					uv = vec2(direction.z, direction.y) / abs(direction.x); // pos x
				} else if (face == 1.0) {
					uv = vec2(-direction.x, -direction.z) / abs(direction.y); // pos y
				} else if (face == 2.0) {
					uv = vec2(-direction.x, direction.y) / abs(direction.z); // pos z
				} else if (face == 3.0) {
					uv = vec2(-direction.z, direction.y) / abs(direction.x); // neg x
				} else if (face == 4.0) {
					uv = vec2(-direction.x, direction.z) / abs(direction.y); // neg y
				} else {
					uv = vec2(direction.x, direction.y) / abs(direction.z); // neg z
				}
				return 0.5 * (uv + 1.0);
		}`);a.useKeywords=!1;let c=new Ee(`TextureCubeUVData bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
			float face = getFace(direction);
			float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
			mipInt = max(mipInt, cubeUV_minMipLevel);
			float faceSize = exp2(mipInt);
			float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);
			vec2 uv = getUV(direction, face) * (faceSize - 1.0);
			vec2 f = fract(uv);
			uv += 0.5 - f;
			if (face > 2.0) {
				uv.y += faceSize;
				face -= 3.0;
			}
			uv.x += face * faceSize;
			if(mipInt < cubeUV_maxMipLevel){
				uv.y += 2.0 * cubeUV_maxTileSize;
			}
			uv.y += filterInt * 2.0 * cubeUV_minTileSize;
			uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);
			uv *= texelSize;
			vec4 tl = texture2D(envMap, uv);
			uv.x += texelSize;
			vec4 tr = texture2D(envMap, uv);
			uv.y += texelSize;
			vec4 br = texture2D(envMap, uv);
			uv.x -= texelSize;
			vec4 bl = texture2D(envMap, uv);
			return TextureCubeUVData( tl, tr, br, bl, f );
		}`,[t,o,a,A,r,i,s]);c.useKeywords=!1;let l=new ft("float r0 1.0",!0),u=new ft("float v0 0.339",!0),d=new ft("float m0 -2.0",!0),h=new ft("float r1 0.8",!0),f=new ft("float v1 0.276",!0),p=new ft("float m1 -1.0",!0),m=new ft("float r4 0.4",!0),g=new ft("float v4 0.046",!0),y=new ft("float m4 2.0",!0),x=new ft("float r5 0.305",!0),b=new ft("float v5 0.016",!0),w=new ft("float m5 3.0",!0),T=new ft("float r6 0.21",!0),M=new ft("float v6 0.0038",!0),v=new ft("float m6 4.0",!0),E=[l,u,d,h,f,p,m,g,y,x,b,w,T,M,v],C=new Ee(`float roughnessToMip(float roughness) {
			float mip = 0.0;
			if (roughness >= r1) {
				mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;
			} else if (roughness >= r4) {
				mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;
			} else if (roughness >= r5) {
				mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;
			} else if (roughness >= r6) {
				mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;
			} else {
				mip = -2.0 * log2(1.16 * roughness);// 1.16 = 1.79^0.25
			}
			return mip;
		}`,E);return{bilinearCubeUV:c,roughnessToMip:C,m0:d,cubeUV_maxMipLevel:A}}();var Vo=class extends Ue{constructor(t){super("v3");this.nodeType="Normal";this.scope=t??Vo.VIEW}getShared(){return this.scope===Vo.WORLD}build(t,A,r,i){let s=t.context[this.scope+"Normal"];return s?s.build(t,A,r,i):super.build(t,A,r)}generate(t,A,r,i,s){let o;switch(this.scope){case Vo.VIEW:t.isShader("vertex")?o="transformedNormal":o="geometryNormal";break;case Vo.LOCAL:t.isShader("vertex")?o="objectNormal":(t.requires.normal=!0,o="vObjectNormal");break;case Vo.WORLD:t.isShader("vertex")?o="inverseTransformDirection( transformedNormal, viewMatrix ).xyz":(t.requires.worldNormal=!0,o="vWNormal");break}return t.format(o,this.getType(t),A)}},UA=Vo;UA.LOCAL="local",UA.WORLD="world",UA.VIEW="view",UA.NORMAL="normal";TA.addKeyword("viewNormal",function(){return new UA(UA.VIEW)});TA.addKeyword("localNormal",function(){return new UA(UA.NORMAL)});TA.addKeyword("worldNormal",function(){return new UA(UA.WORLD)});var $r=class extends Ue{constructor(t){super("v3");this.nodeType="Position";this.scope=t??$r.LOCAL}getType(){switch(this.scope){case $r.PROJECTION:return"v4"}return this.type}getShader(){switch(this.scope){case $r.LOCAL:case $r.WORLD:return!1}return!0}generate(t,A,r,i,s){let o;switch(this.scope){case $r.LOCAL:t.isShader("vertex")?o="transformed":(t.requires.position=!0,o="vPosition");break;case $r.WORLD:if(t.isShader("vertex"))return"( modelMatrix * vec4( transformed, 1.0 ) ).xyz";t.requires.worldPosition=!0,o="vWPosition";break;case $r.VIEW:o=t.isShader("vertex")?"-mvPosition.xyz":"vViewPosition";break;case $r.PROJECTION:o=t.isShader("vertex")?"( projectionMatrix * modelViewMatrix * vec4( position, 1.0 ) )":"vec4( 0.0 )";break}return t.format(o,this.getType(),A)}},Cn=$r;Cn.LOCAL="local",Cn.WORLD="world",Cn.VIEW="view",Cn.PROJECTION="projection";TA.addKeyword("position",function(){return new Cn});TA.addKeyword("worldPosition",function(){return new Cn(Cn.WORLD)});TA.addKeyword("viewPosition",function(){return new Cn(Cn.VIEW)});var Sr=class extends Ue{constructor(t){super("v3");this.nodeType="Reflect";this.scope=t??Sr.CUBE}getUnique(t){return!t.context.viewNormal}getType(){switch(this.scope){case Sr.SPHERE:return"v2"}return this.type}generate(t,A){let r=this.getUnique(t);if(t.isShader("fragment")){let i;switch(this.scope){case Sr.VECTOR:{let s=new UA(UA.VIEW),o=t.context.roughness,a=s.build(t,"v3"),c=new Cn(Cn.VIEW).build(t,"v3"),l=o?o.build(t,"f"):void 0,u=`reflect( -normalize( ${c} ), ${a} )`;l&&(u=`normalize( mix( ${u}, ${a}, ${l} * ${l} ) )`);let d=`inverseTransformDirection( ${u}, viewMatrix )`;r?(t.addNodeCode(`vec3 reflectVec = ${d};`),i="reflectVec"):i=d;break}case Sr.CUBE:{let s=new Sr(Sr.VECTOR).build(t,"v3"),o="vec3( -"+s+".x, "+s+".yz )";r?(t.addNodeCode(`vec3 reflectCubeVec = ${o};`),i="reflectCubeVec"):i=o;break}case Sr.SPHERE:{let o="normalize( ( viewMatrix * vec4( "+new Sr(Sr.VECTOR).build(t,"v3")+", 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) ).xy * 0.5 + 0.5";r?(t.addNodeCode(`vec2 reflectSphereVec = ${o};`),i="reflectSphereVec"):i=o;break}}return t.format(i,this.getType(),A)}else return console.warn("ReflectNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.type,A)}},ei=Sr;ei.CUBE="cube",ei.SPHERE="sphere",ei.VECTOR="vector";var Zp=class extends Ue{constructor(t=new Mn,A,r){super("v4");this.nodeType="TextureCube";this.value=t,this.radianceNode=new dc(this.value,A??new ei(ei.VECTOR),r),this.irradianceNode=new dc(this.value,new UA(UA.WORLD),new Pe(1).setReadonly(!0))}generate(t,A){return t.isShader("fragment")?(t.require("irradiance"),t.context.bias&&t.context.bias.setTexture(this.value),(t.slot==="irradiance"?this.irradianceNode:this.radianceNode).build(t,A)):(console.warn("TextureCubeNode is not compatible with "+t.shader+" shader."),t.format("vec4( 0.0 )",this.getType(t),A))}};var Jp=class extends _t{constructor(t=new Sa,A,r){super("v4",{shared:!0});this.nodeType="CubeTexture";this.value=t,this.uv=A??new ei,this.bias=r}getTexture(t,A){return super.generate(t,A,this.value.uuid,"tc")}generate(t,A){if(A==="samplerCube")return this.getTexture(t,A);let r=this.getTexture(t,A),i=this.uv?.build(t,"v3"),s=this.bias?this.bias.build(t,"f"):void 0;s===void 0&&t.context.bias&&(s=t.context.bias.setTexture(this).build(t,"f"));let o;s?o="texCubeBias( "+r+", "+i+", "+s+" )":o="texCube( "+r+", "+i+" )";let a={include:t.isShader("vertex"),ignoreCache:!0},c=this.getType(t);return t.addContext(a),this.colorSpace=this.colorSpace??new fn(new wt("",c)),this.colorSpace.fromDecoding(t.getTextureEncodingFromMap(this.value)),this.colorSpace.input.parse(o),o=this.colorSpace.build(t,c),t.removeContext(),t.format(o,c,A)}};var DC=["x","y","z","w"],F4=["float","vec2","vec3","vec4"],G4={float:"f",vec2:"v2",vec3:"v3",vec4:"v4",mat4:"v4",int:"i",bool:"b","float[]":"f[]","vec4[]":"v4[]"},k4={t:"sampler2D",tc:"samplerCube",b:"bool",i:"int",f:"float",c:"vec3",v2:"vec2",v3:"vec3",v4:"vec4",m3:"mat3",m4:"mat4","f[]":"float[]","v4[]":"vec4[]"},$p=class{constructor(){this.includes={consts:{},functions:{},structs:{}};this.cache="";this.slot="";this.shader="";this.context={};this.getIncludesCode=function(){function e(t,A){return t.deps.length-A.deps.length}return function(A,r){let i=this.getIncludes(A,r);if(!i)return"";let s="";i=i.sort(e);for(let o=0;o<i.length;o++)i[o].src&&(s+=i[o].src+`
`);return s}}();this.slots=[],this.caches=[],this.contexts=[],this.keywords={},this.nodeData={},this.fragmentVariables={},this.fragmentParsVariables={},this.vertexParsVariables={},this.requires={uv:[],color:[],transparent:!1,irradiance:!1,position:!1,worldPosition:!1,normal:!1,worldNormal:!1,vWorldViewDir:!1,modelMatrix:!1,viewMatrix:!1,projectionMatrix:!1},this.includes={consts:[],functions:[],structs:[]},this.attributes={},this.prefixCode=["#ifdef TEXTURE_LOD_EXT","	#define texCube(a, b) textureCube(a, b)","	#define texCubeBias(a, b, c) textureCubeLodEXT(a, b, c)","	#define tex2D(a, b) texture2D(a, b)","	#define tex2DBias(a, b, c) texture2DLodEXT(a, b, c)","#else","	#define texCube(a, b) textureCube(a, b)","	#define texCubeBias(a, b, c) textureCube(a, b, c)","	#define tex2D(a, b) texture2D(a, b)","	#define tex2DBias(a, b, c) texture2D(a, b, c)","#endif",`
			// NOTE: Include Spline's blending modes. This could be part of BlendNode
			#define SPE_BLENDING_NORMAL 0
			#define SPE_BLENDING_MULTIPLY 1
			#define SPE_BLENDING_SCREEN 2
			#define SPE_BLENDING_OVERLAY 3

			vec3 spe_normalBlend( vec3 a, vec3 b, float alpha ) {
				return mix( a, b, alpha );
			}

			vec3 spe_multiplyBlend( vec3 a, vec3 b, float alpha ) {
				return mix( a, a * b, alpha );
			}

			vec3 spe_screenBlend( vec3 a, vec3 b, float alpha ) {
				vec3 tmp = 1.0 - ( 1.0 - a ) * ( 1.0 - b );
				return mix( a, tmp, alpha );
			}

			vec3 spe_overlayBlend( vec3 a, vec3 b, float alpha ) {
				vec3 tmp = mix( 1. - 2. * (1. - a) * (1. - b), 2. * a * b, step( a, vec3(.5) ) );
				return clamp( mix( a, tmp, alpha ), 0.0, 1.0 );
			}

			vec3 spe_blend( vec3 a, vec3 b, float alpha, int mode ) {
				if ( mode == SPE_BLENDING_NORMAL ) return spe_normalBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_MULTIPLY ) return spe_multiplyBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_SCREEN ) return spe_screenBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_OVERLAY ) return spe_overlayBlend( a, b, alpha );
				return vec3( 1.0 );
			}
			`,"#include <packing>","#include <common>"].join(`
`),this.parsCode={vertex:["float neighbor_offset = 0.0001;",""].join(`
`),fragment:["float accumAlpha = 0.0;",`void accumulateAlpha(float alpha) {
					accumAlpha += (1.0 - accumAlpha) * alpha;
				}`,""].join(`
`)},this.code={vertex:"",fragment:""},this.nodeCode={vertex:"",fragment:""},this.resultCode={vertex:"",fragment:""},this.finalCode={vertex:"",fragment:""},this.inputs={uniforms:{list:[],vertex:[],fragment:[]},arrayUniforms:{list:[],vertex:[],fragment:[]},vars:{varying:[],vertex:[],fragment:[]}},this.defines={},this.uniforms={},this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.updaters=[],this.nodes=[],this.analyzing=!1}build(e,t){this.buildShader("vertex",e),this.buildShader("fragment",t);for(let A=0;A<this.requires.uv.length;A++)if(this.requires.uv[A]){let r=A>0?A+1:"";this.addVaryCode("varying vec2 vUv"+r+";"),A>0&&this.addVertexParsCode("attribute vec2 uv"+r+";"),this.addVertexFinalCode("vUv"+r+" = uv"+r+";")}return this.requires.color[0]&&(this.addVaryCode("varying vec4 vColor;"),this.addVertexParsCode("attribute vec4 color;"),this.addVertexFinalCode("vColor = color;")),this.requires.color[1]&&(this.addVaryCode("varying vec4 vColor2;"),this.addVertexParsCode("attribute vec4 color2;"),this.addVertexFinalCode("vColor2 = color2;")),this.requires.position&&(this.addVaryCode("varying vec3 vPosition;"),this.addVertexFinalCode("vPosition = transformed;")),this.requires.worldPosition,this.requires.normal&&(this.addVaryCode("varying vec3 vObjectNormal;"),this.addVertexFinalCode("vObjectNormal = normal;")),this.requires.modelMatrix&&this.addFragmentParsCode("uniform mat4 modelMatrix;"),this.requires.viewMatrix&&this.addFragmentParsCode("uniform mat4 viewMatrix;"),this.requires.projectionMatrix&&this.addFragmentParsCode("uniform mat4 projectionMatrix;"),this.requires.worldNormal&&(this.addVaryCode("varying vec3 vWNormal;"),this.addVertexFinalCode("vWNormal = inverseTransformDirection( transformedNormal, viewMatrix ).xyz;")),this.requires.vWorldViewDir&&(this.addVaryCode("varying vec3 vWorldViewDir;"),this.addVertexFinalCode("vWorldViewDir = isPerspectiveMatrix( projectionMatrix ) ?  ( (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition ) : vec3( -viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2] );")),this}buildShader(e,t){this.resultCode[e]=t.build(this.setShader(e),"v4")}setMaterial(e,t){return this.defines={},this}addFlow(e,t,A){return this.addSlot(e).addCache(t).addContext(A)}removeFlow(){return this.removeSlot().removeCache().removeContext()}addCache(e){return this.cache=e??"",this.caches.push(this.cache),this}removeCache(){return this.caches.pop(),this.cache=this.caches[this.caches.length-1]||"",this}addContext(e){return this.context=Object.assign({},this.context,e),this.context.extra=this.context.extra||{},this.contexts.push(this.context),this}removeContext(){return this.contexts.pop(),this.context=this.contexts[this.contexts.length-1]||{},this}addSlot(e){return this.slot=e||"",this.slots.push(this.slot),this}removeSlot(){return this.slots.pop(),this.slot=this.slots[this.slots.length-1]||"",this}addFragmentVariable(e,t){this.fragmentVariables[e]===void 0&&(this.addFragmentCode(`${t} ${e};`),this.fragmentVariables[e]="")}addFragmentParsVariable(e,t){this.fragmentParsVariables[e]===void 0&&(this.addFragmentParsCode(`${t} ${e};`),this.fragmentParsVariables[e]="")}addVertexParsVariable(e,t){this.vertexParsVariables[e]===void 0&&(this.addVertexParsCode(`${t} ${e};`),this.vertexParsVariables[e]="")}addVertexCode(e){this.addCode(e,"vertex")}addFragmentCode(e){this.addCode(e,"fragment")}addCode(e,t){this.code[t??this.shader]+=e+`
`}addVertexNodeCode(e){this.addNodeCode(e,"vertex")}addFragmentNodeCode(e){this.addNodeCode(e,"fragment")}addNodeCode(e,t){this.nodeCode[t??this.shader]+=e+`
`}clearNodeCode(e){e=e??this.shader;let t=this.nodeCode[e];return this.nodeCode[e]="",t}clearVertexNodeCode(){return this.clearNodeCode("vertex")}clearFragmentNodeCode(){return this.clearNodeCode("fragment")}addVertexFinalCode(e){this.addFinalCode(e,"vertex")}addFragmentFinalCode(e){this.addFinalCode(e,"fragment")}addFinalCode(e,t){this.finalCode[t??this.shader]+=e+`
`}addVertexParsCode(e){this.addParsCode(e,"vertex")}addFragmentParsCode(e){this.addParsCode(e,"fragment")}addParsCode(e,t){this.parsCode[t??this.shader]+=e+`
`}addVaryCode(e){this.addVertexParsCode(e),this.addFragmentParsCode(e)}isCache(e){return this.caches.indexOf(e)!==-1}isSlot(e){return this.slots.indexOf(e)!==-1}define(e,t){this.defines[e]=t===void 0?1:t}require(e){this.requires[e]=!0}isDefined(e){return this.defines[e]!==void 0}getVar(e,t,A,r="varying",i="V",s=""){let o=this.getVars(r),a=o[e];if(!a){let c=o.length;a={name:A||"node"+i+c+(s?"_"+s:""),type:t},o.push(a),o[e]=a}return a}getTempVar(e,t,A,r){return this.getVar(e,t,A,this.shader,"T",r)}getAttribute(e,t){if(!this.attributes[e]){let A=this.getVar(e,t);this.addVertexParsCode("attribute "+t+" "+e+";"),this.addVertexFinalCode(A.name+" = "+e+";"),this.attributes[e]={varying:A,name:e,type:t}}return this.attributes[e]}getCode(e){return[this.prefixCode,this.parsCode[e],this.getVarListCode(this.getVars("varying"),"varying"),this.getVarListCode(this.inputs.uniforms[e],"uniform"),this.getVarListCode(this.inputs.arrayUniforms[e],"uniform"),this.getIncludesCode("consts",e),this.getIncludesCode("structs",e),this.getIncludesCode("functions",e),"void main() {",this.getVarListCode(this.getVars(e)),this.code[e],this.resultCode[e],this.finalCode[e],"}"].join(`
`)}getVarListCode(e,t){t=t??"";let A="";for(let r=0,i=e.length;r<i;++r){let s=e[r],o=s.type,a=s.name,c=s.size,l=this.getFormatByType(o);if(l===void 0)throw new Error("Node pars "+l+" not found.");l.includes("[]")?A+=t+" "+l.substring(0,l.length-2)+" "+a+`[${c}];
`:A+=t+" "+l+" "+a+`;
`}return A}getVars(e){return this.inputs.vars[e??this.shader]}getNodeData(e){let t=e instanceof GA?e.uuid:e;return this.nodeData[t]=this.nodeData[t]||{}}createUniform(e,t,A,r,i,s){if(t.includes("[]")){let o=this.inputs.arrayUniforms,a=o.list.length,c=new dd({type:t,size:A.size,name:r||"nodeUA"+a+(s?"_"+s:""),node:A,needsUpdate:i});return o.list.push(c),o[e].push(c),o[e][c.name]=c,this.uniforms[c.name]=c,c}else{let o=this.inputs.uniforms,a=o.list.length,c=new dd({type:t,name:r||"nodeU"+a+(s?"_"+s:""),node:A,needsUpdate:i});return o.list.push(c),o[e].push(c),o[e][c.name]=c,this.uniforms[c.name]=c,c}}createVertexUniform(e,t,A,r,i){return this.createUniform("vertex",e,t,A,r,i)}createFragmentUniform(e,t,A,r,i){return this.createUniform("fragment",e,t,A,r,i)}include(e,t,A){let r;if(e=typeof e=="string"?TA.get(e):e,this.context.include===!1)return e.name;e instanceof Ee?r=this.includes.functions:e instanceof ft?r=this.includes.consts:e instanceof lc&&(r=this.includes.structs);let i=r[this.shader]=r[this.shader]||[];if(e){let s=i[e.name];if(s||(s=i[e.name]={node:e,deps:[]},i.push(s),s.src=e.build(this,"source")),e instanceof Ee&&t&&i[t.name]&&i[t.name].deps.indexOf(e)===-1&&(i[t.name].deps.push(e),e.includes?.length)){let o=0;do this.include(e.includes[o++],t);while(o<e.includes.length)}return A&&(s.src=A),e.name}else throw new Error("Include not found.")}colorToVectorProperties(e){return e.replace("r","x").replace("g","y").replace("b","z").replace("a","w")}colorToVector(e){return e.replace(/c/g,"v3")}getIncludes(e,t){return this.includes[e][t||this.shader]}getConstructorFromLength(e){return F4[e-1]}isTypeMatrix(e){return/^m/.test(e)}getTypeLength(e){return e==="f"?1:parseInt(this.colorToVector(e).substr(1))}getTypeFromLength(e){return e===1?"f":"v"+e}findNode(...e){for(let t=0;t<arguments.length;t++){let A=e[t];if(A?.isNode)return A}}resolve(...e){for(let t=0;t<arguments.length;t++){let A=e[t];if(A!==void 0){if(A.isNode)return A;if(A.isTexture)switch(A.mapping){case rs:case is:return new Jp(A);case ka:return new Zp(new Mn(A));default:return new Mn(A)}else{if(A.isVector2)return new kA(A);if(A.isVector3)return new qA(A);if(A.isVector4)return new tr(A)}}}}format(e,t,A){switch(this.colorToVector(A+" <- "+t)){case"f <- v2":return e+".x";case"f <- v3":return e+".x";case"f <- v4":return e+".x";case"f <- i":case"f <- b":return"float( "+e+" )";case"v2 <- f":return"vec2( "+e+" )";case"v2 <- v3":return e+".xy";case"v2 <- v4":return e+".xy";case"v2 <- i":case"v2 <- b":return"vec2( float( "+e+" ) )";case"v3 <- f":return"vec3( "+e+" )";case"v3 <- v2":return"vec3( "+e+", 0.0 )";case"v3 <- v4":return e+".xyz";case"v3 <- i":case"v3 <- b":return"vec2( float( "+e+" ) )";case"v4 <- f":return"vec4( "+e+" )";case"v4 <- v2":return"vec4( "+e+", 0.0, 1.0 )";case"v4 <- v3":return"vec4( "+e+", 1.0 )";case"v4 <- i":case"v4 <- b":return"vec4( float( "+e+" ) )";case"i <- f":case"i <- b":return"int( "+e+" )";case"i <- v2":return"int( "+e+".x )";case"i <- v3":return"int( "+e+".x )";case"i <- v4":return"int( "+e+".x )";case"b <- f":return"( "+e+" != 0.0 )";case"b <- v2":return"( "+e+" != vec2( 0.0 ) )";case"b <- v3":return"( "+e+" != vec3( 0.0 ) )";case"b <- v4":return"( "+e+" != vec4( 0.0 ) )";case"b <- i":return"( "+e+" != 0 )"}return e}getTypeByFormat(e){return G4[e]||e}getFormatByType(e){return k4[e]||e}getUUID(e,t){return t=t!==void 0?t:!0,t&&this.cache&&(e=this.cache+"-"+e),e}getElementByIndex(e){return DC[e]}getIndexByElement(e){return DC.indexOf(e)}isShader(e){return this.shader===e}setShader(e){return this.shader=e,this}mergeDefines(e){for(let t in e)this.defines[t]=e[t];return this.defines}mergeUniform(e){for(let t in e)this.uniforms[t]=e[t];return this.uniforms}getTextureEncodingFromMap(e){let t;return e?e.isTexture&&(t=e.encoding):t=Bn,t===Bn&&this.context.gamma&&(t=qe),t}};var St=class extends _t{constructor(t=0,A,r,i){super("c");this.nodeType="Color";this.value=t instanceof $t?t:new $t(t||0,A,r,i)}setRGBA(t){this.value.setRGBA(t.r,t.g,t.b,t.a)}generate(t,A,r,i,s,o){r=t.getUUID(r??this.getUUID()),i=i??this.getType(t);let a=t.getNodeData(r),c=this.getReadonly()&&this.generateReadonly!==void 0;if(this.alpha){let l=this.alpha.build(t,"f");t.addFragmentNodeCode(`accumAlpha += ( 1.0 - accumAlpha ) * ${l};`)}return c?this.generateReadonly(t,A,r,i,s,o):t.isShader("vertex")?(a.vertex||(a.vertex=t.createVertexUniform(i,this,s,o,this.getLabel())),t.format(a.vertex.name,i,A)):(a.fragment||(a.fragment=t.createFragmentUniform(i,this,s,o,this.getLabel())),t.format(a.fragment.name,i,A))}generateReadonly(t,A,r,i,s,o){return t.format("vec3("+this.value.r+", "+this.value.g+", "+this.value.b+")",i,A)}};var ct=class extends _t{constructor(t){super("i");this.nodeType="Int";this.value=Math.floor(t??0)}generateReadonly(t,A,r,i,s,o){return t.format(this.value.toString(),i,A)}};var zo=class extends GA{constructor(){super("basic");this.nodeType="Basic";this.color=new St(5855577),this.shadingAlpha=new Pe(1),this.shadingBlend=new ct(0)}get category(){return"phong"}generate(t){let A;if(t.isShader("vertex")){let r=this.position?this.position.analyzeAndFlow(t,"v3",{cache:"position"}):void 0;t.mergeUniform(mr.merge([pe.fog])),t.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <normal_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#if !defined( USE_LAYER_DISPLACE )
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#if defined( USE_LAYER_DISPLACE )
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#if !defined( USE_LAYER_DISPLACE )
					#include <begin_vertex>
				#endif /* !USE_LAYER_DISPLACE */
				`];r&&i.push(r.code,r.result?"displaced_position = "+r.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","	vNormal = transformedNormal;","#endif"),i.push("#include <project_vertex>","#include <fog_vertex>","#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","#include <worldpos_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),A=i.join(`
`)}else{this.color===void 0&&(this.color=new St(5855577)),this.color.analyze(t,{slot:"color"}),this.alpha&&this.alpha.analyze(t),this.afterColor&&this.afterColor.analyze(t,{slot:"afterColor"});let r=this.color.flow(t,"c",{slot:"color"}),i=this.alpha?this.alpha.flow(t,"f"):void 0,s=this.afterColor?this.afterColor.flow(t,"c",{slot:"afterColor"}):void 0;t.requires.transparent=i!==void 0,t.addParsCode(["varying vec3 vWPosition;","#include <fog_pars_fragment>","#include <dithering_pars_fragment>","varying vec3 vViewPosition;","#include <normal_pars_fragment>"].join(`
`));let o=["#include <normal_fragment_begin>",r.code];i&&o.push(i.code,"#ifdef ALPHATEST"," if ( "+i.result+" <= ALPHATEST ) discard;","#endif"),s?o.push(s.code,`vec3 outgoingLight = ${r.result};`,`vec3 finalColor = spe_blend(outgoingLight, ${s.result}, 1.0, SPE_BLENDING_NORMAL);`):o.push(`vec3 finalColor = ${r.result};`),i?o.push(`gl_FragColor = vec4( finalColor, accumAlpha * ${i.result} );`):o.push("gl_FragColor = vec4("+r.result+", 1.0 );"),o.push("#include <fog_fragment>","#include <dithering_fragment>"),A=o.join(`
`)}return A}};var Tr=class extends _t{constructor(t=1,A){super("f[]");this.nodeType="FloatArray";this.size=t,this.value=Array.isArray(A)?A:typeof A=="number"?new Array(t).fill(A):new Array(t).fill(0)}};var Dt={normalRenderTarget:new Mn,normalRenderTargetDepth:new Mn,transmissionRenderTarget:new Mn,transmissionSize:new kA(2048,2048),transmissionRenderTargetDepth:new Mn,pixelRatioNode:new Pe(1),resolution:new kA,penumbraSize:new Tr(5,.5)};for(let n of Object.values(Dt))n.isRenderGlobal=!0;var fd=class extends GA{constructor(){super("lambert");this.nodeType="Lambert";this.color=new St(5855577),this.emissive=new St(0),this.emissiveIntensity=new Pe(1),this.shadingAlpha=new Pe(1),this.shadingBlend=new ct(0)}get category(){return"lambert"}build(t){let A;if(t.define("LAMBERT"),t.requires.lights=!0,t.extensions.derivatives=!0,t.isShader("vertex")){let r=this.position?this.position.analyzeAndFlow(t,"v3",{cache:"position"}):void 0;t.mergeUniform(mr.merge([pe.fog,pe.lights])),t.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","varying vec3 vLightFront;","varying vec3 vIndirectFront;","#ifndef DOUBLE_SIDED","   #define DOUBLE_SIDED","#endif","#ifdef DOUBLE_SIDED","	varying vec3 vLightBack;","	varying vec3 vIndirectBack;","#endif","#include <bsdfs>","#include <lights_pars_begin>","#include <color_pars_vertex>","#include <fog_pars_vertex>","#include <normal_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`];r&&i.push(r.code,r.result?"displaced_position = "+r.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("	#include <project_vertex>","	#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","	#include <worldpos_vertex>",`
					vec3 diffuse = vec3( 1.0 );
					GeometricContext geometry;
					geometry.position = mvPosition.xyz;
					geometry.normal = normalize( transformedNormal );
					geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
					GeometricContext backGeometry;
					backGeometry.position = geometry.position;
					backGeometry.normal = -geometry.normal;
					backGeometry.viewDir = geometry.viewDir;
					vLightFront = vec3( 0.0 );
					vIndirectFront = vec3( 0.0 );
					#ifdef DOUBLE_SIDED
						vLightBack = vec3( 0.0 );
						vIndirectBack = vec3( 0.0 );
					#endif
					IncidentLight directLight;
					float dotNL;
					vec3 directLightColor_Diffuse;
					vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
					vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
					#ifdef DOUBLE_SIDED
						vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
						vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
					#endif
					#if NUM_POINT_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
							getPointLightInfo( pointLights[ i ], geometry, directLight );
							dotNL = dot( geometry.normal, directLight.direction );
							directLightColor_Diffuse = directLight.color;
							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
							#ifdef DOUBLE_SIDED
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
							#endif
						}
						#pragma unroll_loop_end
					#endif
					#if NUM_SPOT_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
							getSpotLightInfo( spotLights[ i ], geometry, directLight );
							dotNL = dot( geometry.normal, directLight.direction );
							directLightColor_Diffuse = directLight.color;
							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
							#ifdef DOUBLE_SIDED
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
							#endif
						}
						#pragma unroll_loop_end
					#endif
					#if NUM_DIR_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
							getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
							dotNL = dot( geometry.normal, directLight.direction );
							directLightColor_Diffuse = directLight.color;
							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
							#ifdef DOUBLE_SIDED
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
							#endif
						}
						#pragma unroll_loop_end
					#endif
					#if NUM_HEMI_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
							vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
							#ifdef DOUBLE_SIDED
								vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
							#endif
						}
						#pragma unroll_loop_end
					#endif
				`,"	#include <shadowmap_vertex>","	#include <fog_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),A=i.join(`
`)}else{t.mergeUniform({penumbraSize:Dt.penumbraSize}),this.color===void 0&&(this.color=new St(5855577)),this.color.analyze(t,{slot:"color"}),this.shadingAlpha.analyze(t),this.shadingBlend.analyze(t),this.afterColor&&this.afterColor.analyze(t,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(t);let r=this.color.flow(t,"c",{slot:"color"}),i=this.emissive.flow(t,"c",{slot:"emissive"}),s=this.emissiveIntensity.flow(t,"f",{slot:"emissive"}),o=this.shadingAlpha.flow(t,"f"),a=this.shadingBlend.flow(t,"i"),c=this.afterColor?this.afterColor.flow(t,"c",{slot:"afterColor"}):void 0,l=this.alpha?this.alpha.flow(t,"f"):void 0;t.requires.transparent=l!==void 0,t.addParsCode([`uniform float penumbraSize[${5}];`,"varying vec3 vViewPosition;","varying vec3 vWPosition;","varying vec3 vLightFront;","varying vec3 vIndirectFront;","#ifndef DOUBLE_SIDED","   #define DOUBLE_SIDED","#endif","#include <normal_pars_fragment>","#ifdef DOUBLE_SIDED","	varying vec3 vLightBack;","	varying vec3 vIndirectBack;","#endif","#include <bsdfs>","#include <lights_pars_begin>","#include <fog_pars_fragment>","#include <shadowmap_pars_fragment>","#include <shadowmask_pars_fragment>","#include <clipping_planes_pars_fragment>","#include <dithering_pars_fragment>"].join(`
`));let u=["#include <normal_fragment_begin>",`
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx, viewdy));
				bool isFrontFacing = (dot(normal, faceNormal) >= 0.0);
				`,"#include <clipping_planes_fragment>"];u.push(r.code,"vec3 diffuseColor = "+r.result+";","ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );"),l&&u.push(l.code,"#ifdef ALPHATEST","if ( "+l.result+" <= ALPHATEST ) discard;","#endif"),u.push("#ifdef DOUBLE_SIDED","	reflectedLight.indirectDiffuse += ( isFrontFacing ) ? vIndirectFront : vIndirectBack;","#else","	reflectedLight.indirectDiffuse += vIndirectFront;","#endif","#include <lightmap_fragment>","reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );","#ifdef DOUBLE_SIDED","	reflectedLight.directDiffuse = ( isFrontFacing ) ? vLightFront : vLightBack;","#else","	reflectedLight.directDiffuse = vLightFront;","#endif","reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();"),i&&u.push(i.code,"reflectedLight.directDiffuse += "+i.result+" * "+s.result+";"),u.push("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;"),u.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${o.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${o.result}, ${a.result} );
				}
				`),c&&u.push(c.code,`outgoingLight = spe_blend(outgoingLight, ${c.result}, 1.0, SPE_BLENDING_NORMAL);`),l?u.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${l.result} );`):u.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),u.push("#include <encodings_fragment>","#include <fog_fragment>","#include <dithering_fragment>"),A=u.join(`
`)}return A}};var em=class extends GA{constructor(){super("phong");this.nodeType="Phong";this.color=new St(5855577),this.specular=new St(1118481),this.shininess=new Pe(30),this.shadingAlpha=new Pe(1),this.shadingBlend=new ct(0)}get category(){return"phong"}build(t){let A;if(t.define("PHONG"),t.requires.lights=!0,t.extensions.derivatives=!0,t.isShader("vertex")){let r=this.position?this.position.analyzeAndFlow(t,"v3",{cache:"position"}):void 0;t.mergeUniform(mr.merge([pe.fog,pe.lights])),t.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <normal_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif


				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`];r&&i.push(r.code,r.result?"displaced_position = "+r.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("	#include <project_vertex>","	#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","	#include <worldpos_vertex>","	#include <shadowmap_vertex>","	#include <fog_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),A=i.join(`
`)}else{t.mergeUniform({penumbraSize:Dt.penumbraSize}),this.color===void 0&&(this.color=new St(5855577)),this.color.analyze(t,{slot:"color"}),this.specular.analyze(t),this.shininess.analyze(t),this.shadingAlpha.analyze(t),this.shadingBlend.analyze(t),this.afterColor&&this.afterColor.analyze(t,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(t);let r=this.color.flow(t,"c",{slot:"color"}),i=this.specular.flow(t,"c"),s=this.shininess.flow(t,"f"),o=this.shadingAlpha.flow(t,"f"),a=this.shadingBlend.flow(t,"i"),c=this.afterColor?this.afterColor.flow(t,"c",{slot:"afterColor"}):void 0,l=this.alpha?this.alpha.flow(t,"f"):void 0;t.requires.transparent=l!==void 0,t.addParsCode(["varying vec3 vWPosition;","uniform vec3 emissive;",`uniform float penumbraSize[${5}];`,"#include <normal_pars_fragment>","#include <fog_pars_fragment>","#include <bsdfs>","#include <lights_pars_begin>","#include <lights_phong_pars_fragment>","#include <shadowmap_pars_fragment>","#include <dithering_pars_fragment>"].join(`
`));let u=["#include <normal_fragment_begin>",`
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,"	BlinnPhongMaterial material;"];u.push(r.code,"	vec3 diffuseColor = "+r.result+";","	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );","	vec3 totalEmissiveRadiance = emissive;",i.code,"	vec3 specular = "+i.result+";",s.code,"	float shininess = max( 0.0001, "+s.result+" );","	float specularStrength = 1.0;"),l&&u.push(l.code,"#ifdef ALPHATEST","if ( "+l.result+" <= ALPHATEST ) discard;","#endif"),u.push("material.diffuseColor = diffuseColor;"),u.push("material.specularColor = specular;","material.specularShininess = shininess;","material.specularStrength = specularStrength;","#include <lights_fragment_begin>","#include <lights_fragment_end>"),u.push("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;"),u.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${o.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${o.result}, ${a.result} );
				}
				`),c&&u.push(c.code,`outgoingLight = spe_blend(outgoingLight, ${c.result}, 1.0, SPE_BLENDING_NORMAL);`),l?u.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${l.result} );`):u.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),u.push("#include <encodings_fragment>","#include <fog_fragment>","#include <dithering_fragment>"),A=u.join(`
`)}return A}};var pd=class extends GA{constructor(){super("standard");this.nodeType="Standard";this.color=new St(5855577),this.roughness=new Pe(.3),this.metalness=new Pe(0),this.reflectivity=new Pe(.5),this.shadingAlpha=new Pe(1),this.shadingBlend=new ct(0)}get category(){return"physical"}build(t){let A;if(t.define("STANDARD"),t.requires.lights=!0,t.extensions.derivatives=!0,t.extensions.shaderTextureLOD=!0,t.isShader("vertex")){let r=this.position?this.position.analyzeAndFlow(t,"v3",{cache:"position"}):void 0;t.mergeUniform(mr.merge([pe.fog,pe.lights])),pe.LTC_1&&(t.uniforms.ltc_1={value:void 0},t.uniforms.ltc_2={value:void 0}),t.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <normal_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#if !defined( USE_LAYER_DISPLACE )
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#if defined( USE_LAYER_DISPLACE )
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#if !defined( USE_LAYER_DISPLACE )
					#include <begin_vertex>
				#endif /* !USE_LAYER_DISPLACE */
				`];r&&i.push(r.code,r.result?"displaced_position = "+r.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("#include <project_vertex>","#include <fog_vertex>","#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","#include <worldpos_vertex>","#include <shadowmap_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),A=i.join(`
`)}else{t.mergeUniform({penumbraSize:Dt.penumbraSize});let r={gamma:!0};this.color===void 0&&(this.color=new St(5855577)),this.color.analyze(t,{slot:"color",context:r}),this.roughness.analyze(t),this.metalness.analyze(t),this.shadingAlpha.analyze(t),this.shadingBlend.analyze(t),this.afterColor&&this.afterColor.analyze(t,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(t),this.reflectivity&&this.reflectivity.analyze(t);let i=this.color.flow(t,"c",{slot:"color",context:r}),s=this.roughness.flow(t,"f"),o=this.metalness.flow(t,"f"),a=this.shadingAlpha.flow(t,"f"),c=this.shadingBlend.flow(t,"i"),l=this.afterColor?this.afterColor.flow(t,"c",{slot:"afterColor"}):void 0,u=this.alpha?this.alpha.flow(t,"f"):void 0,d=this.reflectivity?this.reflectivity.flow(t,"f"):void 0;t.requires.transparent=u!==void 0,t.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;",`uniform float penumbraSize[${5}];`,"#include <normal_pars_fragment>","#include <dithering_pars_fragment>","#include <fog_pars_fragment>","#include <bsdfs>","#include <lights_pars_begin>","#include <lights_physical_pars_fragment>","#include <shadowmap_pars_fragment>"].join(`
`));let h=["#include <clipping_planes_fragment>","	#include <normal_fragment_begin>",`
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,"	PhysicalMaterial material;","	material.diffuseColor = vec3( 1.0 );"];h.push(i.code,"	vec3 diffuseColor = "+i.result+";","	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );",s.code,"	float roughnessFactor = "+s.result+";",o.code,"	float metalnessFactor = "+o.result+";"),u&&h.push(u.code,"#ifdef ALPHATEST","	if ( "+u.result+" <= ALPHATEST ) discard;","#endif"),h.push("vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );"),h.push("material.diffuseColor = diffuseColor * ( 1.0 - metalnessFactor );","material.roughness = max( roughnessFactor, 0.0525 );","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.roughness = clamp( roughnessFactor, 0.04, 1.0 );"),d?h.push(d.code,"material.specularColor = mix( vec3( 0.16 * pow2( "+d.result+" ) ), diffuseColor, metalnessFactor );"):h.push("material.specularColor = mix( vec3( 0.04 ), diffuseColor, metalnessFactor );"),h.push("#include <lights_fragment_begin>"),h.push("#include <lights_fragment_end>"),h.push("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular;"),h.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${a.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${a.result}, ${c.result} );
				}
				`),l&&h.push(l.code,`outgoingLight = spe_blend(outgoingLight, ${l.result}, 1.0, SPE_BLENDING_NORMAL);`),u?h.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${u.result} );`):h.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),h.push("#include <encodings_fragment>","#include <fog_fragment>","#include <dithering_fragment>"),A=h.join(`
`)}return A}};var md=class extends GA{constructor(){super("toon");this.nodeType="Toon";this.color=new St(5855577),this.specular=new St(1118481),this.shininess=new Pe(30),this.shadingAlpha=new Pe(1),this.shadingBlend=new ct(0)}get category(){return"toon"}build(t){let A;if(t.define("TOON"),t.requires.lights=!0,t.extensions.derivatives=!0,t.isShader("vertex")){let r=this.position?this.position.analyzeAndFlow(t,"v3",{cache:"position"}):void 0;t.mergeUniform(mr.merge([pe.fog,pe.lights])),t.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <normal_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`];r&&i.push(r.code,r.result?"displaced_position = "+r.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("	#include <project_vertex>","	#include <fog_vertex>","	#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","	#include <worldpos_vertex>","	#include <shadowmap_vertex>","	#include <fog_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),A=i.join(`
`)}else{t.mergeUniform({penumbraSize:Dt.penumbraSize}),this.color===void 0&&(this.color=new St(5855577)),this.color.analyze(t,{slot:"color"}),this.specular.analyze(t),this.shininess.analyze(t),this.shadingAlpha.analyze(t),this.shadingBlend.analyze(t),this.afterColor&&this.afterColor.analyze(t,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(t);let r=this.color.flow(t,"c",{slot:"color"}),i=this.specular.flow(t,"c"),s=this.shininess.flow(t,"f"),o=this.shadingAlpha.flow(t,"f"),a=this.shadingBlend.flow(t,"i"),c=this.afterColor?this.afterColor.flow(t,"c",{slot:"afterColor"}):void 0,l=this.alpha?this.alpha.flow(t,"f"):void 0;t.requires.transparent=l!==void 0,t.addParsCode([`uniform float penumbraSize[${5}];`,"varying vec3 vWPosition;","#include <normal_pars_fragment>","#include <gradientmap_pars_fragment>","#include <fog_pars_fragment>","#include <bsdfs>","#include <lights_pars_begin>","#include <dithering_pars_fragment>",`
					varying vec3 vViewPosition;
					struct ToonMaterial {
						vec3	diffuseColor;
						vec3	specularColor;
						float	specularShininess;
						float	specularStrength;
					};
					void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
						vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
			
						reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
						reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
					}
					void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
						reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
					}
					#define RE_Direct				RE_Direct_Toon
					#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
					#define Material_LightProbeLOD( material )	(0)
					`,"#include <shadowmap_pars_fragment>","#include <bumpmap_pars_fragment>","#include <normalmap_pars_fragment>"].join(`
`));let u=["#include <normal_fragment_begin>",`
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,"	ToonMaterial material;"];u.push(r.code,"	vec3 diffuseColor = "+r.result+";","	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );",i.code,"	vec3 specular = "+i.result+";",s.code,"	float shininess = max( 0.0001, "+s.result+" );","	float specularStrength = 1.0;"),l&&u.push(l.code,"#ifdef ALPHATEST","if ( "+l.result+" <= ALPHATEST ) discard;","#endif"),u.push("material.diffuseColor = diffuseColor;"),u.push("material.specularColor = specular;","material.specularShininess = shininess;","material.specularStrength = specularStrength;","#include <lights_fragment_begin>","#include <lights_fragment_end>"),u.push("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular;"),u.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${o.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${o.result}, ${a.result} );
				}
				`),c&&u.push(c.code,`outgoingLight = spe_blend(outgoingLight, ${c.result}, 1.0, SPE_BLENDING_NORMAL);`),l?u.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${l.result} );`):u.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),u.push("#include <encodings_fragment>","#include <fog_fragment>","#include <dithering_fragment>"),A=u.join(`
`)}return A}};var Bs=class extends _t{constructor(t){super("b");this.nodeType="Bool";this.value=t??!1}generateReadonly(t,A,r,i){return t.format(this.value?"true":"false",i,A)}};var hc=class extends _t{constructor(t){super("m3");this.nodeType="Matrix3";this.value=t??new rA}generateReadonly(t,A,r,i,s,o){return t.format("mat3("+this.value.elements.join(", ")+")",i,A)}get elements(){return this.value.elements}set elements(t){this.value.fromArray(t)}};var Mr=class extends _t{constructor(t=1,A){super("v4[]");this.nodeType="Vector4Array";this.size=t,this.value=Array.isArray(A)?A:A instanceof He?new Array(t).fill(A):new Array(t).fill(new He(0))}};var gd=(i=>(i.SIMPLEX="simplex3d",i.SIMPLEX_FRACTAL="simplex3dFractal",i.ASHIMA="simplexAshima",i.FBM="fbm",i.PERLIN="perlin",i))(gd||{}),en=function(){let e=new Ee(`vec3 random3(vec3 c) {
			float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
			vec3 r;
			r.z = fract(512.0*j);
			j *= .125;
			r.x = fract(512.0*j);
			j *= .125;
			r.y = fract(512.0*j);
			return r-0.5;
		}`),t=new Ee(`float simplex3d(vec3 p) {
			 vec3 s = floor(p + dot(p, vec3(F3)));
			 vec3 x = p - s + dot(s, vec3(G3));
			 
			 vec3 e = step(vec3(0.0), x - x.yzx);
			 vec3 i1 = e*(1.0 - e.zxy);
			 vec3 i2 = 1.0 - e.zxy*(1.0 - e);
				
			 vec3 x1 = x - i1 + G3;
			 vec3 x2 = x - i2 + 2.0*G3;
			 vec3 x3 = x - 1.0 + 3.0*G3;
			 
			 vec4 w, d;
			 
			 w.x = dot(x, x);
			 w.y = dot(x1, x1);
			 w.z = dot(x2, x2);
			 w.w = dot(x3, x3);
			 
			 w = max(0.6 - w, 0.0);
			 
			 d.x = dot(random3(s), x);
			 d.y = dot(random3(s + i1), x1);
			 d.z = dot(random3(s + i2), x2);
			 d.w = dot(random3(s + 1.0), x3);
			 
			 w *= w;
			 w *= w;
			 d *= w;
			 
			 return dot(d, vec4(52.0));
		}`,[e]);t.keywords.F3=new ft("float F3 0.3333333"),t.keywords.G3=new ft("float G3 0.1666667");let A=new Ee(`float simplex3dFractal(vec3 m) {
			mat3 rot1 = mat3(-0.37, 0.36, 0.85,-0.14,-0.93, 0.34,0.92, 0.01,0.4);
			mat3 rot2 = mat3(-0.55,-0.39, 0.74, 0.33,-0.91,-0.24,0.77, 0.12,0.63);
			mat3 rot3 = mat3(-0.71, 0.52,-0.47,-0.08,-0.72,-0.68,-0.7,-0.45,0.56);
			return 0.5333333 * simplex3d(m * rot1)
				 + 0.2666667 * simplex3d(2.0 * m * rot2)
				 + 0.1333333 * simplex3d(4.0 * m * rot3)
				 + 0.0666667 * simplex3d(8.0 * m);
		}`,[t]),r=new Ee("vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}"),i=new Ee("vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}"),s=new Ee(`float simplexAshima(vec3 v) {
		  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
		  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
		  vec3 i  = floor(v + dot(v, C.yyy) );
		  vec3 x0 =   v - i + dot(i, C.xxx) ;
		  vec3 g = step(x0.yzx, x0.xyz);
		  vec3 l = 1.0 - g;
		  vec3 i1 = min( g.xyz, l.zxy );
		  vec3 i2 = max( g.xyz, l.zxy );
		  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
		  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
		  vec3 x3 = x0 - 1. + 3.0 * C.xxx;
		  i = mod(i, 289.0 ); 
		  vec4 p = permute( permute( permute( 
					 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
				   + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
				   + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
		  float n_ = 1.0/7.0; // N=7
		  vec3  ns = n_ * D.wyz - D.xzx;
		  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)
		  vec4 x_ = floor(j * ns.z);
		  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
		  vec4 x = x_ *ns.x + ns.yyyy;
		  vec4 y = y_ *ns.x + ns.yyyy;
		  vec4 h = 1.0 - abs(x) - abs(y);
		  vec4 b0 = vec4( x.xy, y.xy );
		  vec4 b1 = vec4( x.zw, y.zw );
		  vec4 s0 = floor(b0)*2.0 + 1.0;
		  vec4 s1 = floor(b1)*2.0 + 1.0;
		  vec4 sh = -step(h, vec4(0.0));
		  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
		  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
		  vec3 p0 = vec3(a0.xy,h.x);
		  vec3 p1 = vec3(a0.zw,h.y);
		  vec3 p2 = vec3(a1.xy,h.z);
		  vec3 p3 = vec3(a1.zw,h.w);
		  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
		  p0 *= norm.x;
		  p1 *= norm.y;
		  p2 *= norm.z;
		  p3 *= norm.w;
		  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
		  m = m * m;
		  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
										dot(p2,x2), dot(p3,x3) ) );
		}`,[r,i]),o=new Ee("vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}"),a=new Ee("vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}",[o]),c=new Ee(`float noise(vec3 p){
			vec3 a = floor(p);
			vec3 d = p - a;
			d = d * d * (3.0 - 2.0 * d);
			vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
			vec4 k1 = perm(b.xyxy);
			vec4 k2 = perm(k1.xyxy + b.zzww);
			vec4 c = k2 + a.zzzz;
			vec4 k3 = perm(c);
			vec4 k4 = perm(c + 1.0);
			vec4 o1 = fract(k3 * (1.0 / 41.0));
			vec4 o2 = fract(k4 * (1.0 / 41.0));
			vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
			vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
			return o4.y * d.y + o4.x * (1.0 - d.y);
		}`,[a]),l=new Ee(`float fbm(vec3 x) {
			float v = 0.0;
			float a = 0.5;
			vec3 shift = vec3(100);
			for (int i = 0; i < NUM_OCTAVES; ++i) {
				v += a * noise(x);
				x = x * 2.0 + shift;
				a *= 0.5;
			}
			return v;
		}`,[c]);l.keywords.NUM_OCTAVES=new ft(`int NUM_OCTAVES ${5}`);let u=new Ee("vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}"),d=new Ee(`float perlin(vec3 P){
		  vec3 Pi0 = floor(P);
		  vec3 Pi1 = Pi0 + vec3(1.0);
		  Pi0 = mod(Pi0, 289.0);
		  Pi1 = mod(Pi1, 289.0);
		  vec3 Pf0 = fract(P);
		  vec3 Pf1 = Pf0 - vec3(1.0);
		  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
		  vec4 iy = vec4(Pi0.yy, Pi1.yy);
		  vec4 iz0 = Pi0.zzzz;
		  vec4 iz1 = Pi1.zzzz;
		  vec4 ixy = permute(permute(ix) + iy);
		  vec4 ixy0 = permute(ixy + iz0);
		  vec4 ixy1 = permute(ixy + iz1);
		  vec4 gx0 = ixy0 / 7.0;
		  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
		  gx0 = fract(gx0);
		  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
		  vec4 sz0 = step(gz0, vec4(0.0));
		  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
		  gy0 -= sz0 * (step(0.0, gy0) - 0.5);
		  vec4 gx1 = ixy1 / 7.0;
		  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
		  gx1 = fract(gx1);
		  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
		  vec4 sz1 = step(gz1, vec4(0.0));
		  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
		  gy1 -= sz1 * (step(0.0, gy1) - 0.5);
		  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
		  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
		  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
		  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
		  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
		  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
		  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
		  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
		  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
		  g000 *= norm0.x;
		  g010 *= norm0.y;
		  g100 *= norm0.z;
		  g110 *= norm0.w;
		  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
		  g001 *= norm1.x;
		  g011 *= norm1.y;
		  g101 *= norm1.z;
		  g111 *= norm1.w;
		  float n000 = dot(g000, Pf0);
		  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
		  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
		  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
		  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
		  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
		  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
		  float n111 = dot(g111, Pf1);
		  vec3 fade_xyz = fade(Pf0);
		  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
		  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
		  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
		  return 2.2 * n_xyz;
		}`,[r,i,u]);return{simplex:t,simplexFractal:A,simplexAshima:s,fbm:l,perlin:d}}();var yd=class extends Ue{constructor(t,A,r,i,s,o,a,c,l,u,d,h){super("v3");this.nodeType="Noise";this.scale=t,this.size=A,this.move=r,this.fA=i,this.fB=s,this.distortion=o,this.colorA=a,this.colorB=c,this.colorC=l,this.colorD=u,this.alpha=d,this.noiseType=h,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,A,r,i,s){t.require("uv"),t.requires.uv=[!0],t.addFragmentVariable(this.calpha,"float");let o=Object.values(gd)[this.noiseType.value],a=new Ee(`vec3 ${o}customNoise(float scale, vec3 size, float move, vec2 fA, vec2 fB, vec2 distortion, vec4 colorA, vec4 colorB, vec4 colorC, vec4 colorD, float alpha, out float calpha) {
                vec3 st = position / size;
				st /= scale;
				vec3 q = vec3(${o}(st),
							  ${o}(st + vec3(1.0)),
							  ${o}(st + vec3(1.0)));
				vec3 r = vec3(${o}(st + vec3(distortion, 1.0) * q + vec3(fA, 1.0) + move),
							  ${o}(st + vec3(distortion, 1.0) * q + vec3(fB, 1.0) + move), 
							  ${o}(st * q));
				float f = ${o}(st + r);
				vec4 color;
				color = mix(colorA, colorB, clamp((f * f) * 4.0, 0.0, 1.0));
				color = mix(color, colorC, clamp(length(q), 0.0, 1.0));
				color = mix(color, colorD, clamp(length(r.x), 0.0, 1.0));

                float lalpha = alpha * color.a;
                calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );

			    accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return clamp(color, 0.0, 1.0).rgb;
			}`,[en.simplex,en.simplexFractal,en.simplexAshima,en.fbm,en.perlin]),c=t.include(a),l=[];return l.push(this.scale.build(t,"f")),l.push(this.size.build(t,"v3")),l.push(this.move.build(t,"f")),l.push(this.fA.build(t,"v2")),l.push(this.fB.build(t,"v2")),l.push(this.distortion.build(t,"v2")),l.push(this.colorA.build(t,"v4")),l.push(this.colorB.build(t,"v4")),l.push(this.colorC.build(t,"v4")),l.push(this.colorD.build(t,"v4")),l.push(this.alpha.build(t,"f")),l.push(this.calpha),t.format(c+"("+l.join(",")+")",this.getType(t),A)}};yd.numOctaves=5;var B0=class extends Ue{constructor(t,A,r,i,s,o,a){super("v3");this.nodeType="Fresnel";this.color=t,this.bias=A,this.scale=r,this.intensity=i,this.factor=s,this.alpha=o,this.mode=a,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,A){if(t.require("vWorldViewDir"),t.require("worldNormal"),t.isShader("fragment")){t.addFragmentVariable(this.calpha,"float");let r=t.include(B0.Nodes.fresnel),i=[];return i.push(this.color.build(t,"c")),i.push(this.bias.build(t,"f")),i.push(this.scale.build(t,"f")),i.push(this.intensity.build(t,"f")),i.push(this.factor.build(t,"f")),i.push(this.alpha.build(t,"f")),i.push(this.mode.build(t,"i")),i.push(this.calpha),t.format(r+"("+i.join(",")+")",this.getType(t),A)}else return console.warn("FresnelNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),A)}},vd=B0;vd.Nodes=function(){return{fresnel:new Ee(`vec3 fresnel(vec3 color, float bias, float scale, float intensity, float factor, float alpha, int mode, out float calpha) {
				float fresnel = bias + scale * pow( abs( factor + dot( normalize( vWorldViewDir ), normalize( vWNormal ) ) ), intensity );

				float lalpha = clamp( fresnel, 0.0, 1.0 ) * alpha;
				calpha = lalpha / clamp(lalpha + accumAlpha, 0.001, 1.0);
				accumAlpha += (1.0 - accumAlpha) * lalpha;
				return color;
			}`)}}();var N0=class extends Ue{constructor(t,A,r,i,s,o,a){super("v3");this.nodeType="Rainbow";this.filmThickness=t,this.movement=A,this.wavelengths=r,this.noiseStrength=i,this.noiseScale=s,this.offset=o,this.alpha=a,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,A){if(t.require("vWorldViewDir"),t.require("worldNormal"),t.isShader("fragment")){t.require("uv"),t.requires.uv=[!0],t.addFragmentVariable(this.calpha,"float");let r=t.include(N0.Nodes.rainbow),i=[];return i.push(this.filmThickness.build(t,"f")),i.push(this.movement.build(t,"f")),i.push(this.wavelengths.build(t,"v3")),i.push(this.noiseStrength.build(t,"f")),i.push(this.noiseScale.build(t,"f")),i.push(this.offset.build(t,"v3")),i.push(this.alpha.build(t,"f")),i.push(this.calpha),t.format(r+"("+i.join(",")+")",this.getType(t),A)}else return console.warn("RainbowNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),A)}},xd=N0;xd.Nodes=function(){let t=new Ee(`vec3 attenuation(vec3 wavelengths, float filmThickness, float movement, float noiseStrength, float noiseScale, vec3 offset) {
                 vec3 st = position / noiseScale;
				 vec3 q = vec3(simplex3d(st),
							  simplex3d(st + vec3(1.0)),
							  simplex3d(st + vec3(1.0)));

				 vec3 r = vec3(simplex3d(st + vec3(1.4, 1.3, 1.0) * q + vec3(1.7, 9.2, 1.0)),
							  simplex3d(st + vec3(2.0, 1.2, 1.0) * q + vec3(8.3, 2.8, 1.0)),
							  simplex3d(st * q));

                 float noise = simplex3d(st + r);

                 return .5 + .5 * cos((((filmThickness + (noise * noiseStrength)) / (vec3(wavelengths.r * 1.0, wavelengths.g * 0.8, wavelengths.b * 0.6) + 1.0)) * dot(normalize(vWorldViewDir + (offset * -0.001)), normalize(vWNormal))) + movement);
             }`,[en.simplex]);return{rainbow:new Ee(`vec3 rainbow(float filmThickness, float movement, vec3 wavelengths, float noiseStrength, float noiseScale, vec3 offset, float alpha, out float calpha) {
                 vec3 res = clamp(attenuation(wavelengths, filmThickness, movement, noiseStrength, noiseScale, offset), 0.0, 2.0);

                 float rainbowContribution = clamp(res.r + res.g + res.b, 0.0, 1.0);
                 float lalpha = alpha * rainbowContribution;
                 calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
                 accumAlpha += ( 1.0 - accumAlpha ) * lalpha;

                 return res;
             }`,[t])}}();var F0=class extends Ue{constructor(t,A,r,i,s,o,a,c,l,u,d,h,f,p,m,g){super("v3");this.nodeType="Outline";this.firstTime=!0,this.outlineColor=t,this.contourColor=A,this.outlineWidth=r,this.contourWidth=i,this.contourThreshold=s,this.outlineThreshold=o,this.contourFrequency=a,this.outlineSmoothing=c,this.contourDirection=l,this.positionalLines=u,this.compensation=d,this.resolution=h,this.normalMap=f,this.depthMap=p,this.pixelRatio=m,this.alpha=g,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,A){if(t.require("vWorldViewDir"),t.require("worldNormal"),t.extensions.derivatives=!0,this.firstTime){let r=this.outlineWidth.build(t,"f"),i=this.resolution.build(t,"v2"),s=this.compensation.build(t,"b"),o=this.pixelRatio.build(t,"f");t.addVertexParsVariable("randomColor","attribute vec3"),t.addVertexParsVariable("extrudeNormal","attribute vec3"),t.addVertexParsVariable(r,"uniform float"),t.addVertexParsVariable(i,"uniform vec2"),t.addVertexParsVariable(s,"uniform bool"),t.addVertexParsVariable(o,"uniform float"),t.addVertexParsVariable("vID","flat out float"),t.addFragmentParsVariable("vID","flat in float");let a=`g${this.uuid.toString().replace(/-/g,"")}`;t.addVertexFinalCode(`
                vID = randomColor.r;
                if (${s}) {
                    vec4 ${a}_clipPosition = projectionMatrix * (modelViewMatrix * vec4(position, 1.0));
                    // NOTE: For certain shapes, like spheres, we get incorrect extrusion when the
                    // normals face the camera directly. So we hackily fix this by offsetting the normal
                    // by a tiny amount.
                    vec3 ${a}_clipNormal = mat3(projectionMatrix) * (mat3(modelViewMatrix) * extrudeNormal) + 0.0000001;
                    vec2 ${a}_offset = normalize(${a}_clipNormal.xy) / ${i} * (${r} / 2.0) * ${a}_clipPosition.w * 2.0 * ${o};
                    ${a}_clipPosition.xy += ${a}_offset;
                    // TODO(MAX): To handle multiple outline layers, we only want to extrude
                    // if this offset is the biggest of all the potential offsets
                    gl_Position = ${a}_clipPosition;
                }
            `)}if(t.isShader("fragment")){t.require("uv"),t.requires.uv=[!0],t.addFragmentVariable(this.calpha,"float");let r=t.include(F0.Nodes.outline),i=[];return i.push(this.outlineColor.build(t,"c")),i.push(this.contourColor.build(t,"c")),i.push(this.outlineWidth.build(t,"f")),i.push(this.contourWidth.build(t,"f")),i.push(this.contourThreshold.build(t,"f")),i.push(this.outlineThreshold.build(t,"f")),i.push(this.contourFrequency.build(t,"f")),i.push(this.outlineSmoothing.build(t,"f")),i.push(this.contourDirection.build(t,"v3")),i.push(this.positionalLines.build(t,"b")),i.push(this.resolution.build(t,"v2")),i.push(this.normalMap.getTexture(t,"t")),i.push(this.depthMap.getTexture(t,"t")),i.push(this.pixelRatio.build(t,"f")),i.push(this.compensation.build(t,"b")),i.push(this.alpha.build(t,"f")),i.push(this.calpha),this.firstTime=!this.firstTime,t.format(r+"("+i.join(",")+")",this.getType(t),A)}else return console.warn("OutlineNode is not compatible with "+t.shader+" shader."),""}},bd=F0;bd.Nodes=function(){let t=new Ee(`
float sobelSample(sampler2D t, sampler2D d, vec2 uv, vec2 resolution, float outlineWidth, float pixelRatio)
{
    vec2 texelSize = (vec2(1.0) / resolution) * outlineWidth * pixelRatio;

    vec2 uvSamples[9];
    vec4 normalSamples[9];

	uvSamples[0] = uv + vec2( -texelSize.x, -texelSize.y);
	uvSamples[1] = uv + vec2(0.0, -texelSize.y);
	uvSamples[2] = uv + vec2(  texelSize.x, -texelSize.y);
	uvSamples[3] = uv + vec2( -texelSize.x, 0.0);
	uvSamples[4] = uv;
	uvSamples[5] = uv + vec2(  texelSize.x, 0.0);
	uvSamples[6] = uv + vec2( -texelSize.x, texelSize.y);
	uvSamples[7] = uv + vec2(0.0, texelSize.y);
	uvSamples[8] = uv + vec2(  texelSize.x, texelSize.y);


    normalSamples[0] = texture2D(t, uvSamples[0]);
    normalSamples[1] = texture2D(t, uvSamples[1]);
    normalSamples[2] = texture2D(t, uvSamples[2]);
    normalSamples[3] = texture2D(t, uvSamples[3]);
    normalSamples[4] = texture2D(t, uvSamples[4]);
    normalSamples[5] = texture2D(t, uvSamples[5]);
    normalSamples[6] = texture2D(t, uvSamples[6]);
    normalSamples[7] = texture2D(t, uvSamples[7]);
    normalSamples[8] = texture2D(t, uvSamples[8]);

    float depthBias = 0.0001;
    // TODO(MAX): Can we somehow reduce the number of conditionals here with MATH?!
    if (normalSamples[0].a != vID && normalSamples[0].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[0]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[1].a != vID && normalSamples[1].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[1]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[2].a != vID && normalSamples[2].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[2]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[3].a != vID && normalSamples[3].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[3]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }


    if (normalSamples[4].a != vID && normalSamples[4].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[4]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[5].a != vID && normalSamples[5].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[5]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[6].a != vID && normalSamples[6].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[6]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[7].a != vID && normalSamples[7].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[7]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[8].a != vID && normalSamples[8].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[8]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    vec4 sobel_edge_h = normalSamples[2] + (2.0*normalSamples[5]) + normalSamples[8] - (normalSamples[0] + (2.0*normalSamples[3]) + normalSamples[6]);
  	vec4 sobel_edge_v = normalSamples[0] + (2.0*normalSamples[1]) + normalSamples[2] - (normalSamples[6] + (2.0*normalSamples[7]) + normalSamples[8]);

    float edgeNormal = sqrt(dot(sobel_edge_h, sobel_edge_h) + dot(sobel_edge_v, sobel_edge_v));
    return edgeNormal;
}
`);return{outline:new Ee(`vec3 outline(vec3 outlineColor, vec3 contourColor, float outlineWidth, float contourWidth, float outlineThreshold, float contourThreshold, float outlineSmoothing, float contourFrequency, vec3 contourDirection, bool positionalLines, vec2 resolution, sampler2D normalMap, sampler2D depthMap, float pixelRatio, bool compensation, float alpha, out float calpha) {
                vec3 result = outlineColor;
                float resultAlpha = 0.0;

                vec3 N = normalize(vWNormal);
                vec2 nuv = (gl_FragCoord.xy / resolution);
                float sobelSample = compensation ? sobelSample(normalMap, depthMap, nuv, resolution, outlineWidth / 2., pixelRatio) : sobelSample(normalMap, depthMap, nuv, resolution, outlineWidth, pixelRatio);
                resultAlpha = smoothstep(outlineThreshold - outlineSmoothing, outlineThreshold + outlineSmoothing, sobelSample);

                float t = 1.0 - contourThreshold;
                if(positionalLines) {
                    vec3 NDir = position * contourDirection;
                    float NT = NDir.x + NDir.y + NDir.z;
                    float f  = fract(NT * contourFrequency * 0.01);
                    float df = fwidth(NT * contourFrequency);

                    float g = smoothstep(df * (contourWidth * 0.01), df * (contourWidth * 0.01 * 2.0), f);
                    if (g < 1.0 && resultAlpha == 0.0) {
                        result = contourColor;
                        resultAlpha = 1.0;
                    }
                 }
                 else {
                    vec3 NDir = N * contourDirection;
                    float NT = NDir.x + NDir.y + NDir.z;
                    float df = fwidth(NT * contourThreshold);
                    float f = sin(NT * 1.0 * contourFrequency);
                    float g = smoothstep(0.0, df * contourWidth, 1.0 - f);

                    if (df > (t * 0.5) && g < 1.0 && resultAlpha == 0.0) {
                        result = contourColor;
                        resultAlpha = 1.0 - g;
                    }
                 }

                 float lalpha = alpha * resultAlpha;
                 calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
                 accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
                 return result;
             }`,[t])}}();var G0=class extends Ue{constructor(t,A,r,i,s,o,a,c){super("v3");this.nodeType="Transmission";this.thickness=t,this.ior=A,this.roughness=r,this.transmissionSamplerSize=i,this.transmissionSamplerMap=s,this.transmissionDepthMap=o,this.aspectRatio=a,this.alpha=c,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,A){if(t.extensions.shaderTextureLOD=!0,t.extensions.derivatives=!0,t.isShader("fragment")){t.define("NUM_SAMPLES",30),t.require("worldPosition"),t.requires.worldNormal=!0,t.requires.modelMatrix=!0,t.requires.projectionMatrix=!0,t.addFragmentVariable(this.calpha,"float");let r=t.include(G0.Nodes.transmission),i=[];return i.push(this.thickness.build(t,"f")),i.push(this.ior.build(t,"f")),i.push(this.roughness.build(t,"f")),i.push(this.transmissionSamplerSize.build(t,"v2")),i.push(this.transmissionSamplerMap.getTexture(t,"t")),i.push(this.transmissionDepthMap.getTexture(t,"t")),i.push(this.aspectRatio.build(t,"v2")),i.push("normal"),i.push(this.alpha.build(t,"f")),i.push(this.calpha),t.format(r+"("+i.join(",")+")",this.getType(t),A)}else return console.warn("TransmissionNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),A)}},wd=G0;wd.Nodes=function(){let t=new Ee(`
            float gaussian(vec2 i) {
                const float sigma = float(NUM_SAMPLES) * .25;
                return exp( -.5* dot(i/=sigma,i) ) / ( 6.28 * sigma*sigma );
            }`),A=new Ee(`
            vec3 blur(sampler2D sp, vec2 U, vec2 scale, float lod, sampler2D dm, vec2 unrefractedU, vec2 aspectRatio) {
                // Slightly modified version of this:
                // https://www.shadertoy.com/view/ltScRG

                const int LOD = 2;
                const int sLOD = 4; // tile size = 2^LOD

                vec3 O = vec3(0);
                float a = 0.0;
                const int s = NUM_SAMPLES/sLOD;
                for ( int i = 0; i < s*s; i++ ) {
                    int modulo = (i)-((i)/(s))*(s);
                    vec2 d = vec2(float(modulo), float(i/s))*float(sLOD) - float(NUM_SAMPLES)/2.;
                    vec2 uv = U + (scale * aspectRatio) * d;
                    // What is the depth of the opaque object we're trying to sample
                    float opaqueDepth = unpackRGBAToDepth(texture2D(dm, uv));
                    if (opaqueDepth != 0.0 && opaqueDepth < gl_FragCoord.z) {
                        uv = unrefractedU + ((scale * min(lod / 2., 1.)) * aspectRatio) * d;
                        lod = lod > 4.0 ? lod : lod / 2.0;
                    }
                    float gaussian = gaussian(d);
		            #ifdef TEXTURE_LOD_EXT
                    O += gaussian * texture2DLodEXT( sp, uv, lod).rgb;
                    #else
                    O += gaussian * textureLod( sp, uv, lod).rgb;
                    #endif
                    a += gaussian;
                }
                return O / a;
            }`,[t]),r=new Ee(`
            vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		        // Direction of refracted light.
		        vec3 refractionVector = refract( -v,  n, 1.0 / ior );
		        // Compute rotation-independant scaling of the model matrix.
		        vec3 modelScale;
		        modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		        modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		        modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		        // The thickness is specified in local space.
		        return normalize( refractionVector ) * thickness * modelScale;
	        }`),i=new Ee(`
float applyIorToRoughness( float roughness, float ior ) {
		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	} `),s=new Ee(`
vec3 getTransmissionSample( vec2 fragCoord, float roughness, float ior, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 unrefractedCoords, vec2 aspectRatio) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
        float lod = applyIorToRoughness(roughness, ior);

        return blur(transmissionSamplerMap, fragCoord, vec2(lod / (transmissionSamplerSize.x / 2.)), min(framebufferLod / 5.5, 8.5), transmissionDepthMap, unrefractedCoords, aspectRatio);
	}`,[i,A]),o=new Ee(`
vec3 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 aspectRatio ) {
        vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
        vec3 refractedRayExit = position + transmissionRay;

        // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
        vec4 ndcPos = projMatrix * viewMatrix *  vec4( refractedRayExit, 1.0 );
        vec2 refractionCoords = ndcPos.xy / ndcPos.w;
        refractionCoords += 1.0;
        refractionCoords /= 2.0;

        vec4 ndcPosUnrefracted = projMatrix * viewMatrix * vec4(position, 1.0 );
        vec2 unrefractedCoords = ndcPosUnrefracted.xy / ndcPosUnrefracted.w;
        unrefractedCoords += 1.0;
        unrefractedCoords /= 2.0;

        // Sample framebuffer to get pixel the refracted ray hits.
        return getTransmissionSample( refractionCoords, roughness, ior, transmissionSamplerSize, transmissionSamplerMap, transmissionDepthMap, unrefractedCoords, aspectRatio );
    }`,[s,r]);return{transmission:new Ee(`
            vec3 transmission(float thickness, float ior, float roughness, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 aspectRatio, vec3 normal, float alpha, out float calpha) {
                vec3 v = vec3(0.);
                if (isOrthographic) {
                    v = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
                } else {
                    v = normalize(vWPosition - cameraPosition);
                }
                vec3 transmission = getIBLVolumeRefraction(vWNormal, -v, roughness,  vWPosition, modelMatrix, viewMatrix, projectionMatrix, ior, thickness, transmissionSamplerSize, transmissionSamplerMap, transmissionDepthMap, aspectRatio );
                float lalpha = alpha;

                 calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
                 accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
                 return transmission;
            }`,[o])}}();var fc=class extends Ue{constructor(t,A,r,i,s,o,a,c,l,u,d){super("v3");this.nodeType="Depth";this.gradientType=t,this.smooth=A,this.near=r,this.far=i,this.isVector=s,this.isWorldSpace=o,this.origin=a,this.direction=c,this.colors=l,this.steps=u,this.alpha=d,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,A){let r=`g${this.uuid.toString().replace(/-/g,"")}`,i=new Ee(`vec3 ${r}_sdepth(float near, float far, vec3 origin, vec3 direction, vec4 colors[${r}_MAX_COLORS], float steps[${r}_MAX_COLORS], float alpha, out float calpha) {
               vec4 color = colors[0];
               #ifdef ${r}_IS_VECTOR
                   #ifdef ${r}_LINEAR
                       #ifdef ${r}_WORLDSPACE
                       float depth = vectorLinearWorldSpaceDepth(direction, origin, near, far);
                       #else
                       float depth = vectorLinearObjectSpaceDepth(direction, origin, near, far);
                       #endif
                   #else
                       #ifdef ${r}_WORLDSPACE
                           float depth = vectorSphericalWorldSpaceDepth(origin, near, far);
                       #else
                           float depth = vectorSphericalObjectSpaceDepth(origin, near, far);
                       #endif
                   #endif
               #else
                   float dist = length(vWPosition - cameraPosition);
			       float depth = ( dist - near ) / ( far - near );
               #endif


              float p;
              #ifdef ${r}_SMOOTH
				for ( int i = 1; i < ${r}_MAX_COLORS; i++ ) {
						p = clamp( ( depth - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
					}
              #else
                for ( int i = 1; i < ${r}_MAX_COLORS; i++ ) {
                   p = clamp(( depth - steps[i - 1] ) / ( steps[i] - steps[i - 1] ), 0.0, 1.0);
                   color = mix(color, colors[i], p);
                 }
              #endif

               float lalpha = alpha * color.a;
               calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );

			   accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
               return color.rgb;
			}`,[fc.Nodes.vectorLinearWorldSpaceDepth,fc.Nodes.vectorLinearObjectSpaceDepth,fc.Nodes.vectorSphericalObjectSpaceDepth,fc.Nodes.vectorSphericalWorldSpaceDepth]);if(t.isShader("fragment")){t.define(`${r}_MAX_COLORS`,this.colors.value.length),this.smooth.value&&t.define(`${r}_SMOOTH`),this.isVector.value>.5&&t.define(`${r}_IS_VECTOR`),this.gradientType.value===0&&t.define(`${r}_LINEAR`),this.isWorldSpace.value>.5&&t.define(`${r}_WORLDSPACE`),t.require("worldPosition"),t.addFragmentVariable(this.calpha,"float");let s=t.include(i),o=[];return o.push(this.near.build(t,"f")),o.push(this.far.build(t,"f")),o.push(this.origin.build(t,"v3")),o.push(this.direction.build(t,"v3")),o.push(this.colors.build(t,"v4[]")),o.push(this.steps.build(t,"f[]")),o.push(this.alpha.build(t,"f")),o.push(this.calpha),t.format(s+"("+o.join(",")+")",this.getType(t),A)}else return console.warn("DepthNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),A)}},Sd=fc;Sd.Nodes=function(){let t=new Ee(`float vectorLinearWorldSpaceDepth(vec3 direction, vec3 origin, float near, float far) {
               vec3 n = normalize(direction);
               float dist = (n.x*(vWPosition.x - origin.x) + n.y*(vWPosition.y - origin.y) + n.z*(vWPosition.z - origin.z));
               return ( dist - near ) / ( far - near );
            }`),A=new Ee(`float vectorLinearObjectSpaceDepth(vec3 direction, vec3 origin, float near, float far) {
               vec3 n = normalize(direction);
               float dist = (n.x*(position.x - origin.x) + n.y*(position.y - origin.y) + n.z*(position.z - origin.z));
               return ( dist - near ) / ( far - near );
            }`),r=new Ee(`float vectorSphericalWorldSpaceDepth(vec3 origin, float near, float far) {
               float dist = length(vWPosition - origin);
               return ( dist - near ) / ( far - near );
            }`),i=new Ee(`float vectorSphericalObjectSpaceDepth(vec3 origin, float near, float far) {
               float dist = length(position - origin);
               return ( dist - near ) / ( far - near );
            }`);return{vectorLinearWorldSpaceDepth:t,vectorLinearObjectSpaceDepth:A,vectorSphericalWorldSpaceDepth:r,vectorSphericalObjectSpaceDepth:i}}();var Td=class extends Ue{constructor(t,A,r,i){super("v3");this.nodeType="Blend";this.a=t,this.b=A,this.alpha=r,this.mode=i}generate(t,A){if(t.isShader("fragment")){let r=[];return r.push(this.a.build(t,"c")),r.push(this.b.build(t,"c")),r.push(this.alpha.build(t,"f")),r.push(this.mode.build(t,"i")),t.format("spe_blend("+r.join(",")+")",this.getType(t),A)}else return console.warn("BlendNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),A)}};var k0=(t=>(t.NOISE="noise",t.MAP="map",t))(k0||{}),U0=class extends Ue{constructor(t,A,r,i,s){super("v3");this.displacementTypeIndex=new ct(0);this.nodeType="VertexDisplacement";this.intensity=t,this.movementOrTexture=A,Object.values(k0)[this.displacementTypeIndex.value]==="map"&&(this.mat=new hc(this.movementOrTexture.value.matrix)),this.cropOrOffset=r,this.scale=i,this.noiseFunctionIndex=s}generate(t,A){if(t.isShader("vertex")){t.define("USE_LAYER_DISPLACE");let r,i=[];switch(i.push("displaced_position"),i.push("displaced_normal"),Object.values(k0)[this.displacementTypeIndex.value]){case"map":{r=t.include(U0.Nodes.map),i.push(this.movementOrTexture.getTexture(t,"t")),i.push("uv"),i.push(this.cropOrOffset.build(t,"f")),this.mat&&i.push(this.mat.build(t,"mat3"));break}case"noise":{let o=Object.values(gd)[this.noiseFunctionIndex.value],a=new Ee(`vec3 orthogonal(vec3 v) {
							return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));
						}`),c=new Ee(`vec3 distorted(vec3 p, vec3 n, float scale, float intensity, vec3 offset, float neighbour_offset, float movement) {
							return p + n * ${o}((p + offset) * scale * 0.001 + neighbour_offset + (movement * 0.1)) * intensity;
						}`,[en.simplex,en.simplexFractal,en.simplexAshima,en.fbm,en.perlin]),l=new Ee(`vec3 vertexDisplacementNoise(vec3 position, vec3 normal, float scale, vec3 offset, float movement, float intensity, out vec3 displaced_normal) {
							vec3 displaced_position = distorted(position, normal, scale, intensity, offset, neighbor_offset, movement);
							vec3 tangent1 = orthogonal(normal);
							vec3 tangent2 = normalize(cross(normal, tangent1));

                            // TODO(Max): The distance to the neighbors was originally scaled by 0.1.
                            // This caused some small oval/circular visual artifacts in the lighting.
                            // For now, simply using neighbors further away betters the problem,
                            // but we should figure out the underlying cause when we have some time.
                            // Maybe its related to how we calculate the tangent and bitangent?
							vec3 nearby1 = position + tangent1;
							vec3 nearby2 = position + tangent2;
							vec3 distorted1 = distorted(nearby1, normal, scale, intensity, offset, neighbor_offset, movement);
							vec3 distorted2 = distorted(nearby2, normal, scale, intensity, offset, neighbor_offset, movement);
							displaced_normal = normalize(cross(distorted1 - displaced_position, distorted2 - displaced_position));
							return displaced_position;
						}`,[c,a]);r=t.include(l),i.push(this.scale.build(t,"f")),i.push(this.cropOrOffset.build(t,"v3")),i.push(this.movementOrTexture.build(t,"f"));break}}return i.push(this.intensity.build(t,"f")),i.push("displaced_normal"),t.format(r+"("+i.join(",")+")",this.getType(t),A)}else return console.warn("VertexDisplacementNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),A)}},Md=U0;Md.Nodes=function(){let t=new Ee(`vec3 orthogonal(vec3 v) {
				return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));
			}`),A=new Ee(`float displacementMapTexture(sampler2D tex, float crop, vec2 uv, mat3 mat, vec2 offset) {
				vec2 uvs = (mat * vec3(uv * 2.0 - 1.0, 1.0) / 2.0 + 0.5).xy + offset;
				vec4 tmp = texture2D(tex, uvs);
				vec3 col = tmp.rgb;
				if (crop > 0.5) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						return 0.0;
					}
				}
				return col.r;
			}`);return{map:new Ee(`vec3 vertexDisplacementMap(vec3 position, vec3 normal, sampler2D tex, vec2 uv, float crop, mat3 mat, float intensity, out vec3 displaced_normal) {
				vec3 displaced_position = position + normal * displacementMapTexture(tex, crop, uv, mat, vec2(0.0)) * intensity;
				vec3 tangent1 = normalize(orthogonal(normal));
				vec3 tangent2 = normalize(cross(normal, tangent1));
				vec3 nearby1 = position + tangent1 * 0.1;
				vec3 nearby2 = position + tangent2 * 0.1;
				vec3 distorted1 = nearby1 + normal * displacementMapTexture(tex, crop, uv, mat, vec2(neighbor_offset)) * intensity;
				vec3 distorted2 = nearby2 + normal * displacementMapTexture(tex, crop, uv, mat, vec2(neighbor_offset)) * intensity;
				displaced_normal = normalize(cross(distorted1 - displaced_position, distorted2 - displaced_position));
				return displaced_position;
			}`,[t,A])}}();var V0=class extends Ue{constructor(t,A,r,i,s,o,a,c){super("v3");this.nodeType="Gradient";this.gradientType=t,this.smooth=A,this.colors=r,this.steps=i,this.offset=s,this.morph=o,this.angle=a,this.alpha=c,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,A){if(t.isShader("fragment")){t.define("GRAD_MAX",10),t.require("uv"),t.requires.uv=[!0],t.addFragmentVariable(this.calpha,"float");let r=t.include(V0.Nodes.gradient),i=[];return i.push(this.gradientType.build(t,"i")),i.push(this.smooth.build(t,"b")),i.push(this.colors.build(t,"v4[]")),i.push(this.steps.build(t,"f[]")),i.push(this.offset.build(t,"v2")),i.push(this.morph.build(t,"v2")),i.push(this.angle.build(t,"f")),i.push(this.alpha.build(t,"f")),i.push(this.calpha),t.format(r+"("+i.join(",")+")",this.getType(t),A)}else return console.warn("GradientNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),A)}},Ed=V0;Ed.Nodes=function(){return{gradient:new Ee(`vec3 gradient(int gradientType, bool smoothed, vec4 colors[GRAD_MAX], float steps[GRAD_MAX], vec2 offset, vec2 morph, float angle, float alpha, out float calpha) {
				vec4 color = colors[0];
				vec2 m = morph / vUv.xy;
				vec2 rot = vec2( 0.5 + m.x, m.y );
				vec2 dt = vec2(
					cos( angle ) * rot.x - sin( angle ) * rot.y,
					sin( angle ) * rot.x + cos( angle ) * rot.y
				);
				vec2 pt = ( vUv - 0.5 + offset ) / 2.0 + dt / 2.0;
				float t = dot( pt, dt ) / dot( dt, dt );
				if ( gradientType == 1 ) {
					t = distance (
						( vUv + morph ) * 3.0,
						( vUv + offset ) + 1.0
					) + angle;
				} else if ( gradientType == 2 ) {
					float polar = atan(
						vUv.x + morph.x - 0.5 + offset.x,
						vUv.y + morph.y - 0.5 + offset.y
					) * -1.0;
					t = fract( ( angle / PI / -2.0 ) + 0.5 * ( polar / PI ) );
				}

				float p;
				if (smoothed) {
					for ( int i = 1; i < GRAD_MAX; i++ ) {
						p = clamp( ( t - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
					}

				} else {
					for ( int i = 1; i < GRAD_MAX; i++ ) {
						p = clamp( ( t - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], p);
					}
				}

				float lalpha = alpha * color.a;
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;

				return color.xyz;
			}`)}}();var Pd=class extends Ue{constructor(t,A,r,i,s,o,a,c,l,u){super("v3");this.nodeType="CustomTexture";this.firstTime=!0,this.texture=t,this.textureSize=A,this.crop=r,this.projection=i,this.axis=s,this.side=o,this.size=a,this.mat=c,this.alpha=l,this.mode=u,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,A){t.require("position"),t.require("normal"),t.require("uv"),t.requires.uv=[!0],t.extensions.shaderTextureLOD=!0,t.extensions.derivatives=!0;let r=`g${this.uuid.toString().replace(/-/g,"")}`,i;switch(this.projection.value){case 3:i=t.include(Pd.Nodes.cylindrical);break;case 2:i=t.include(Pd.Nodes.spherical);break;case 1:let o=["vec3(1.0, 0.0, 0.0)","vec3(0.0, 1.0, 0.0)","vec3(0.0, 0.0, 1.0)"][this.axis.value],a=new Ee(`
		vec3 ${r}_planarTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {

				vec2 uvs = ( mat * vec3( (${r}_vCustomUv * 2. - 1.) / (size * .5), 1. ) / 2. + 0.5 ).xy;

				vec4 tmp = texture2D( tex, uvs );

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				${this.side.value===2?"":`lalpha *= step(0.0, ${this.side.value===1?"-1.0 * ":""}dot(vObjectNormal, mat * ${o}));`}

				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}`);i=t.include(a);break;default:i=t.include(Pd.Nodes.uv);break}if(this.projection.value===1&&this.firstTime){t.addVertexParsCode(`varying vec2 ${r}_vCustomUv;`),t.addFragmentParsCode(`varying vec2 ${r}_vCustomUv;`);let o=["zy","xz","xy"][this.axis.value];t.addVertexFinalCode(`${r}_vCustomUv = (1. + (transformed.${o})) / 2.;`)}t.addFragmentVariable(this.calpha,"float");let s=[];return s.push(this.texture.generate(t,"t")),s.push(this.textureSize.build(t,"v2")),s.push(this.crop.build(t,"f")),s.push(this.mat.build(t,"mat3")),s.push(this.size.build(t,"v2")),s.push(this.alpha.build(t,"f")),s.push(this.mode.build(t,"i")),s.push(this.calpha),this.firstTime=!this.firstTime,t.format(i+"("+s.join(",")+")",this.getType(t),A)}},Cd=Pd;Cd.Nodes=function(){let t=new Ee(`
vec3 cylindricalTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {
                vec3 posN = normalize(position);
                float u = 0.5 + atan(posN.z, posN.x) / (2.*3.1415);
                float scaledHeight = position.y / (size.y * 0.5);
                float v =  (scaledHeight / 2.) + .5;

                vec2 calculatedUv = vec2(u,v);
				vec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;

                vec2 df = fwidth(uvs);
               	if(df.x > 0.5) df.x = 0.;

				#ifdef GL_EXT_shader_texture_lod
                vec4 tmp = texture2DLodEXT(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#else
                vec4 tmp = textureLod(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#endif

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}
`),A=new Ee(`
vec3 sphericalTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {
                vec3 posN = normalize(vPosition);
                float u = 0.5 + atan(posN.z, posN.x) / (2.*3.1415);
                float v = 0.5 + asin(posN.y) / 3.1415;

                vec2 calculatedUv = vec2(u,v);
				vec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;

                vec2 df = fwidth(uvs);
               	if(df.x > 0.5) df.x = 0.;
				#ifdef GL_EXT_shader_texture_lod
                vec4 tmp = texture2DLodEXT(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#else
                vec4 tmp = textureLod(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#endif

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}
`),r=new Ee(`vec3 uvTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {

				vec2 uvs = ( mat * vec3( vUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;
				vec4 tmp = texture2D( tex, uvs );

				vec3 col = tmp.rgb;

				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}`);return{cylindrical:t,spherical:A,uv:r}}();var z0=class extends Ue{constructor(t,A){super("v3");this.nodeType="CustomNormal";this.cnormal=t,this.alpha=A}generate(t,A){if(t.isShader("fragment")){let r=t.include(z0.Nodes.customNormal),i=[];return i.push(this.cnormal.build(t,"v3")),i.push("normal"),i.push(this.alpha.build(t,"f")),t.format(r+"("+i.join(",")+")",this.getType(t),A)}else return console.warn("CustomNormalNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),A)}},Dd=z0;Dd.Nodes=function(){return{customNormal:new Ee(`vec3 customNormal(vec3 cnormal, vec3 norm, float alpha) {
				vec3 normal = packNormalToRGB( norm ).rgb;
				normal *= step( vec3(0.5), cnormal );

				accumAlpha += ( 1.0 - accumAlpha ) * alpha;

				return normal;
			}`)}}();function pn(n,e){return e.color(n)}function IC(n,e){switch(n.type){case"fresnel":return z4(n,e);case"gradient":return H4(n);case"depth":return W4(n);case"normal":return j4(n);case"noise":return Y4(n,e);case"rainbow":return q4(n);case"toon":return X4(n,e);case"outline":return Q4(n,e);case"transmission":return K4(n,e);case"color":return V4(n,e)}}function U4(n){return{type:n.type}}function Ai(n){let{alpha:e,mode:t}=n;return{...U4(n),alpha:e,mode:t}}function V4(n,e){return{...Ai(n),color:pn(n.color,e)}}function z4(n,e){let{bias:t,scale:A,intensity:r,factor:i,color:s}=n;return{...Ai(n),color:pn(s,e),bias:t,scale:A,intensity:r,factor:i}}function H4(n){let{gradientType:e,smooth:t,colors:A,steps:r,angle:i,offset:s,morph:o}=n;return{...Ai(n),gradientType:e,smooth:t,colors:A.map(a=>new He(a[0],a[1],a[2],a[3])),num:A.length,steps:r,offset:new G(...s),morph:new G(...o),angle:i}}function W4(n){let{gradientType:e,near:t,far:A,isVector:r,isWorldSpace:i,origin:s,direction:o,colors:a,steps:c,smooth:l}=n;return{...Ai(n),gradientType:e,near:t,far:A,isVector:r,isWorldSpace:i,origin:new S(...s),direction:o?new S(...o):new S(1,0,0),colors:a.map(u=>u!==void 0?new He(u[0],u[1],u[2],u[3]):new He(0,0,0,0)),steps:c.slice(0,a.length),smooth:l}}function j4(n){let{cnormal:e}=n;return{...Ai(n),cnormal:new S(e[0],e[1],e[2])}}function Y4(n,e){return{...Ai(n),scale:n.scale,move:n.move,fA:new G(...n.fA),fB:new G(...n.fB),size:new S(...n.size),distortion:new G(...n.distortion),colorA:pn(n.colorA,e),colorB:pn(n.colorB,e),colorC:pn(n.colorC,e),colorD:pn(n.colorD,e),noiseType:n.noiseType}}function q4(n){return{...Ai(n),filmThickness:n.filmThickness,movement:n.movement,wavelengths:new S(...n.wavelengths),noiseStrength:n.noiseStrength,noiseScale:n.noiseScale,offset:new S(...n.offset)}}function X4(n,e){return{...Ai(n),positioning:n.positioning,colors:n.colors.map(t=>new He(t[0],t[1],t[2],t[3])),num:n.colors.length,steps:n.steps,source:new S(...n.source),isWorldSpace:n.isWorldSpace,noiseStrength:n.noiseStrength,noiseScale:n.noiseScale,shadowColor:pn(n.shadowColor,e),offset:new S(...n.offset)}}function Q4(n,e){return{...Ai(n),outlineColor:pn(n.outlineColor,e),contourColor:pn(n.contourColor,e),outlineWidth:n.outlineWidth,contourWidth:n.contourWidth,outlineThreshold:n.outlineThreshold,contourThreshold:n.contourThreshold,outlineSmoothing:n.outlineSmoothing,contourFrequency:n.contourFrequency,contourDirection:n.contourDirection,positionalLines:n.positionalLines,compensation:n.compensation}}function K4(n,e){return{...Ai(n),thickness:n.thickness,ior:n.ior,roughness:n.roughness}}var Ns=class extends $t{};var tm=class{constructor(e=1e3*10){this.timeout=e;this.cache=new Map;this.head={data:null,time:0,src:null,next:null,prev:null};this.tail={data:null,time:1/0,src:null,next:null,prev:null};this.hasClean=!1;this.head.next=this.tail,this.tail.prev=this.head}log(...e){}remove(e){let t=this.cache.get(e);t&&(this.dispose(e,t.data),this.cache.delete(e),t.prev.next=t.next,t.next.prev=t.prev)}scheduleCleanup(){this.hasClean||(this.log("scheduled cleanup"),this.hasClean=!0,setTimeout(()=>{this.hasClean=!1,this.log("cleaning");let e=Date.now(),t=this.head.next;for(;t.time<e-this.timeout;)this.dispose(t.src,t.data),this.cache.delete(t.src),t=t.next,t.prev=this.head,this.head.next=t;this.head.next!==this.tail?this.scheduleCleanup():this.log("no more cleanup")},this.timeout+1e3))}has(e){return this.cache.get(e)?.data}load(e){let t=Date.now(),A=this.cache.get(e);return A===void 0?(A={data:this.create(e),src:e,time:t,next:null,prev:null},this.cache.set(e,A)):(A.time=t,A.prev.next=A.next,A.next.prev=A.prev),A.prev=this.tail.prev,A.next=this.tail,this.tail.prev.next=A,this.tail.prev=A,this.scheduleCleanup(),A.data}};var W0=class extends tm{create(e){return URL.createObjectURL(new Blob([e]))}dispose(e,t){URL.revokeObjectURL(t)}},H0;function OC(n){return typeof n=="string"?n:(H0||(H0=new W0),H0.load(n))}var Am=class{constructor(e,t){this.data=e;this.cache=t;this.refCount=0}deref(){if(this.refCount===0&&!1)throw new Error("ref count -1?");this.refCount-=1,this.refCount===0&&(this.cache.remove(this),this.dispose())}dispose(){if(this.refCount!==0&&!1)throw new Error("ref count is not 0")}},nm=class{constructor(){this.cache=new Map}remove(e){if(this.cache.delete(e.data)===!1&&!1)throw new Error("ref count remove non-exists")}load(e){let t=this.cache.get(e);return t===void 0&&(t=this.create(e),this.cache.set(e,t)),t.refCount+=1,t}};var pc=class extends Am{constructor(t,A){super(t,A.imageHolderCache);this.data=t;this.shared=A;this.loaded=!1;this.isVideo=!1;this.isVideo=t.type=="video",this.updateSrc(t.data)}async updateSrc(t){if(typeof document>"u")return;this.disposeTextures(),this.loaded=!1;let A=()=>{this.loaded=!0;let i=[1e3,1001,1002];for(let s of i){let o=this[s];o&&(o.image=this.img,o.needsUpdate=!0)}this.shared.requestRender()};if(this.isVideo){if(this.img=document.createElement("video"),this.img.preload="auto",this.img.playsInline=!0,this.img.currentTime=.01,typeof t!="string"){var r=new FileReader;r.readAsDataURL(new Blob([t],{type:"video/mp4"}));let i;await new Promise(s=>{r.onloadend=o=>{i=o.target?.result,s(null)}}),this.img.src=i}else this.img.src=t;this.img.onloadeddata=()=>{A()}}else this.img=new Image,this.img.src=OC(t),this.img.onload=A}getTexture(t){let A=this[t];if(A)return A;{let r;return this.isVideo?r=new Jh(this.img,void 0,t,t):r=new Wt(this.img,void 0,t,t),this.loaded&&(r.needsUpdate=!0),this[t]=r,r}}disposeTextures(){this[1e3]?.dispose(),this[1e3]=void 0,this[1001]?.dispose(),this[1001]=void 0,this[1002]?.dispose(),this[1002]=void 0}dispose(){super.dispose(),this.disposeTextures()}};1e3,1001,1002;var Ar=class extends pc{};var Fs=class extends _t{};var j0={noise:["noiseType"],texture:["projection","axis","side"],video:["projection","axis","side"],displace:["noiseType"],depth:["smooth","isWorldSpace","gradientType","isVector"]},Y0={depth:["colors"]};function Z4(n,e,t){let A=j0[n.type],r=Y0[n.type];if(r!==void 0){let i=n.color;if(r.includes(e)){let s=i[e]?.value?.length;if(s!==void 0&&s!==t.length)return!0}}return A!==void 0?A.includes(e):!1}function q0(n,e,t){let A=t.uniforms[`f${t.id}_texture`];if(!A)return!1;let r=!1,i=n;if("image"in i){let s=i.image,o=e.image(s),a=A;a.image instanceof Ar||a.image.deref(),a.image=o}if("video"in i){let s=i.video,o=e.video(s),a=A;a.image instanceof Ar||a.image.deref(),a.image=o}if("wrapping"in i){let s=A;s.wrap=i.wrapping}if("repeat"in i||"offset"in i){let s="mat",o=t.uniforms[`f${t.id}_${s}`];"repeat"in i&&(o.repeat=i.repeat),"offset"in i&&(o.offset=i.offset),o.updateMatrix()}return r}function LC(n,e,t,A){let r=!1;for(let[i,s]of Object.entries(n)){if(!i||s===void 0)continue;if(X0(i,t,A)){i==="visible"&&t.type==="light"&&(r=!0);continue}t.visible=A.visible;let o=t.uniforms[`f${t.id}_${i}`];if(!!o&&!(o instanceof Fs))switch(r=r||Z4(t,i,s),o.constructor){case St:if(typeof s=="string"){let a=e.getColor(s);a&&(o.value=a);break}else{let a=s;o.value instanceof Ns?o.value=new $t(a.r,a.g,a.b,a.a):o.setRGBA(a);break}case tr:if(typeof s=="string"){let a=e.getColor(s);a&&(o.value=a);break}else{let a=s;o.value instanceof Ns?o.value=new $t(a.r,a.g,a.b,a.a):o.value.setRGBA(a.r,a.g,a.b,a.a);break}case kA:{let a=s;o.value.setX(a[0]),o.value.setY(a[1]);break}case qA:{let a=s;o.value.setX(a[0]),o.value.setY(a[1]),o.value.setZ(a[2]);break}case Mn:{q0(s,e,t);break}case Mr:{o.value=s.map(a=>new He(...a));break}default:{o.value=s;break}}}return r}var Q0=class extends Ue{constructor(t,A,r){super("v3");this.nodeType="Matcap";this.texture=t,this.alpha=A,this.mode=r,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,A){if(t.isShader("fragment")){t.addFragmentVariable(this.calpha,"float");let r=t.include(Q0.Nodes.matcap);t.require("normal"),t.requires.normal=!0;let i=[];return i.push(this.texture.generate(t,"t")),i.push("normal"),i.push(this.alpha.build(t,"f")),i.push(this.mode.build(t,"i")),i.push(this.calpha),t.format(r+"("+i.join(",")+")",this.getType(t),A)}else return console.warn("MatcapNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),A)}},Id=Q0;Id.Nodes=function(){return{matcap:new Ee(`vec3 matcap(sampler2D matcapTex, vec3 normal, float alpha, int mode, out float calpha) {
                vec3 viewDir = normalize( vViewPosition );
                vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
                vec3 y = cross( viewDir, x );
                vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks
                vec4 matcapColor = texture2D( matcapTex, uv );

                calpha =  alpha / clamp( alpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * alpha;
                
                return matcapColor.rgb;
            }
            `)}}();var Ho=class extends Fs{constructor(t,A){super("t");this.image=t;this.wrap=A}get value(){return this.image.getTexture(this.wrap)}};var rm=class extends Fs{constructor(t){super("v3");this.image=t;this._value=new S}get value(){return this._value.x=this.image.isVideo?this.image.img.videoWidth??0:this.image.img.width,this._value.y=this.image.isVideo?this.image.img.videoHeight??0:this.image.img.height,this._value}};var K0=class extends Ue{constructor(t,A,r,i,s,o,a,c,l,u){super("v3");this.nodeType="Toon";this.positioning=t,this.colors=A,this.steps=r,this.source=i,this.isWorldSpace=s,this.noiseStrength=o,this.noiseScale=a,this.shadowColor=c,this.offset=l,this.alpha=u,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(t,A){if(t.require("worldNormal"),t.require("worldPosition"),t.isShader("fragment")){t.define("COLORS_MAX",10),t.addFragmentVariable(this.calpha,"float");let r=t.include(K0.Nodes.toon),i=[];return i.push(this.positioning.build(t,"i")),i.push(this.colors.build(t,"v4[]")),i.push(this.steps.build(t,"f[]")),i.push(this.source.build(t,"v3")),i.push(this.isWorldSpace.build(t,"b")),i.push(this.noiseStrength.build(t,"f")),i.push(this.noiseScale.build(t,"f")),i.push(this.shadowColor.build(t,"v4")),i.push(this.offset.build(t,"v3")),i.push(this.alpha.build(t,"f")),i.push(this.calpha),t.format(r+"("+i.join(",")+")",this.getType(t),A)}else return console.warn("ToonNode is not compatible with "+t.shader+" shader."),t.format("vec3( 0.0 )",this.getType(t),A)}},Od=K0;Od.Nodes=function(){let t=new Ee(`float rand(float n) {
				return fract(sin(n) * 43758.5453123);
			}`),A=new Ee(`float hash1(float p) { 
				p = fract(p * 0.011); 
				p *= p + 7.5; 
				p *= p + p; 
				return fract(p); 
			}`),r=new Ee(`float valueNoise(vec3 x) {
				const vec3 step = vec3(110, 241, 171);
			
				vec3 i = floor(x);
				vec3 f = fract(x);
			 
				// For performance, compute the base input to a 1D hash from the integer part of the argument and the 
				// incremental change to the 1D based on the 3D -> 1D wrapping
				float n = dot(i, step);
			
				vec3 u = f * f * (3.0 - 2.0 * f);
				return mix(mix(mix( hash1(n + dot(step, vec3(0, 0, 0))), hash1(n + dot(step, vec3(1, 0, 0))), u.x),
							   mix( hash1(n + dot(step, vec3(0, 1, 0))), hash1(n + dot(step, vec3(1, 1, 0))), u.x), u.y),
						   mix(mix( hash1(n + dot(step, vec3(0, 0, 1))), hash1(n + dot(step, vec3(1, 0, 1))), u.x),
							   mix( hash1(n + dot(step, vec3(0, 1, 1))), hash1(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);
			}`,[A]),i=new Ee(`vec3 hash3(vec3 x) {
				x = vec3(dot(x,vec3(127.1, 311.7, 74.7)),
						 dot(x,vec3(269.5, 183.3, 246.1)),
						 dot(x,vec3(113.5, 271.9, 124.6)));
			
				return fract(sin(x)*43758.5453123);
			}`),s=new Ee(`vec3 voronoiNoise(in vec3 x)
			{
				vec3 p = floor(x);
				vec3 f = fract(x);

				float id = 0.0;
				vec2 res = vec2(100.0);

				for(int k=-1; k<=1; k++)
				for(int j=-1; j<=1; j++)
				for(int i=-1; i<=1; i++)
				{
					vec3 b = vec3(float(i), float(j), float(k));

					// Comment out the "+ hash(p + b);" part below to get "square" cells
					vec3 r = vec3(b) - f + hash3(p + b);
					float d = dot(r, r);

					if (d < res.x)
					{
						id = dot(p + b, vec3(1.0, 57.0, 113.0));
						res = vec2(d, res.x);			
					}
					else if (d < res.y)
					{
						res.y = d;
					}
				}

				return vec3(sqrt(res), abs(id));
			}
			`,[i]);return{toon:new Ee(`vec3 toon(int positioning, vec4 colors[COLORS_MAX], float steps[COLORS_MAX], vec3 source, bool isWorldSpace, float noiseStrength, float noiseScale, vec4 shadowColor, vec3 offset, float alpha, out float calpha) {
				float t = 0.0;
				float shadow = 1.0;

				if (positioning == 0) {

					// Can't do this mode if lighting is "none"
					#if (defined(PHONG) || defined(LAMBERT) || defined(STANDARD))

						// Algorithm from Chapter 10 of Graphics Shaders
						const vec3 weights = vec3(0.2125, 0.7154, 0.0721);
						vec3 lpos;
						vec3 l;
						float dproduct;

						#if (NUM_POINT_LIGHTS > 0)

							#if defined(USE_SHADOWMAP) && (NUM_POINT_LIGHT_SHADOWS > 0)
								PointLightShadow pointLightShadow;
							#endif 

							#pragma unroll_loop_start
							for (int i = 0; i < NUM_POINT_LIGHTS; i++) {
								// Light positions are in view-space for some reason?
								lpos = (inverse(viewMatrix) * vec4(pointLights[UNROLLED_LOOP_INDEX].position, 1.0)).xyz;
								l = normalize(lpos - worldPosition);
								
								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;
								
								// TODO: we want to use "intensity" but it isn't available in the shader code
								//dproduct += dot(pointLights[UNROLLED_LOOP_INDEX].color, weights);

								t = max(t, dproduct);

								// Accumulate shadow contribution
								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS)
									pointLightShadow = pointLightShadows[UNROLLED_LOOP_INDEX];
									shadow *= getPointShadow( 
											pointShadowMap[UNROLLED_LOOP_INDEX], 
											pointLightShadow.shadowMapSize, 
											pointLightShadow.shadowBias, 
											pointLightShadow.shadowRadius,
											vPointShadowCoord[UNROLLED_LOOP_INDEX], 
											pointLightShadow.shadowCameraNear, 
											pointLightShadow.shadowCameraFar);
								#endif
							}
							#pragma unroll_loop_end

						#endif

						#if NUM_DIR_LIGHTS > 0 
							
							#if defined(USE_SHADOWMAP) && (NUM_DIR_LIGHT_SHADOWS > 0)
								DirectionalLightShadow directionalLightShadow;
							#endif 

							#pragma unroll_loop_start
							for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
								// Use the direction vector for directional lights instead
								l = (inverse(viewMatrix) * vec4(directionalLights[UNROLLED_LOOP_INDEX].direction, 0.0)).xyz;
		
								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;
								t = max(t, dproduct);

								// Accumulate shadow contribution
								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS)
									directionalLightShadow = directionalLightShadows[UNROLLED_LOOP_INDEX];
									shadow *= getShadow( 
										UNROLLED_LOOP_INDEX,
										directionalShadowMap[UNROLLED_LOOP_INDEX], 
										directionalLightShadow.shadowMapSize, 
										directionalLightShadow.shadowBias, 
										directionalLightShadow.shadowRadius, 
										vDirectionalShadowCoord[UNROLLED_LOOP_INDEX]);
								#endif
							}
							#pragma unroll_loop_end

						#endif

						#if NUM_SPOT_LIGHTS > 0 
							
							#if defined(USE_SHADOWMAP) && (NUM_SPOT_LIGHT_SHADOWS > 0)
								SpotLightShadow spotLightShadow;
							#endif 

							#pragma unroll_loop_start
							for (int i = 0; i < NUM_SPOT_LIGHTS; i++) {
								lpos = (inverse(viewMatrix) * vec4(spotLights[UNROLLED_LOOP_INDEX].position, 1.0)).xyz;
								l = normalize(lpos - worldPosition);
								
								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;
								t = max(t, dproduct);

								// Accumulate shadow contribution
								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS)
									spotLightShadow = spotLightShadows[UNROLLED_LOOP_INDEX];
									shadow *= getShadow(
										UNROLLED_LOOP_INDEX,
										spotShadowMap[UNROLLED_LOOP_INDEX], 
										spotLightShadow.shadowMapSize, 
										spotLightShadow.shadowBias, 
										spotLightShadow.shadowRadius, 
										vSpotShadowCoord[UNROLLED_LOOP_INDEX]);
								#endif
							}
							#pragma unroll_loop_end

						#endif

						t = clamp(t, 0.0, 1.0);
				
					#endif

				} else if (positioning == 1) {
					
					vec3 origin = mix(position, worldPosition, float(isWorldSpace));
					vec3 direction = normalize(source - origin);
					t = dot(direction, normalize(worldNormal)) * 0.5 + 0.5;	

				} else {

					vec3 origin = worldPosition;
					vec3 source = cameraPosition - offset;
					vec3 direction = normalize(source - origin);
					t = dot(direction, normalize(worldNormal)) * 0.5 + 0.5;	
					
				}

				if (noiseStrength > 0.0) {
					// Distort with noise
					vec3 st = position / noiseScale;
					
					// Voronoi "smooth" noise
					float noise = 1.0 - voronoiNoise(st).x;

					// Voronoi cellular noise
					//float noise = 1.0 - rand(voronoiNoise(st).z);

					// Position warp noise
					// vec3 offset = vec3(
					// 	simplex3d(st),
					// 	simplex3d(st + vec3(111.1, 143.89, 217.19)),
					// 	simplex3d(st + vec3(171.1, 247.89, 117.23))
					// );
					// st += offset;
					// float noise = valueNoise(st);

					t += noise * noiseStrength;
				}

				t = clamp(t, 0.0, 1.0);

				// Compute ramp color
				float p;
				vec4 color = colors[0];
				for (int i = 1; i < COLORS_MAX; i++) {
					p = clamp((t - steps[i-1]) / (steps[i] - steps[i-1]), 0.0, 1.0);
					color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
				}

				// Incorporate custom shadow color
				if (positioning == 0) {

					vec3 blendedShadow = mix(color.rgb, shadowColor.rgb, shadowColor.a);
					color.rgb = mix(blendedShadow, color.rgb, shadow);
				
				}

				// Accumulate alpha as usual
				float lalpha = alpha * color.a;
				calpha =  lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0);
				accumAlpha += (1.0 - accumAlpha) * lalpha;

				return color.xyz;

            }`,[en.simplex,t,r,s])}}();function _C(n,e,t){n.setUvTransform(t[0],t[1],e[0],e[1],0,0,0)}var im=class extends hc{constructor(t,A){super(new rA);this.repeat=t;this.offset=A;_C(this.value,t,A)}updateMatrix(){_C(this.value,this.repeat,this.offset)}};var ni=class{constructor(e,t,A,r){this.id=e;this.uuid=t;this.data=A;this.uniforms={};for(let i in r)this.uniforms[`f${this.id}_${i}`]=r[i];for(let i in A)X0(i,this,A)}get type(){return this.data.type}static create(e,t,A,r){if(A.type==="light")return ri.createLigherLayer(e,t,A,r);if(A.type==="texture"||A.type==="video"){let i=A.type==="texture"?r.image(A.texture.image):r.video(A.texture.video),s=new Ho(i,A.texture.wrapping),o=new rm(i),a=new im(A.texture.repeat,A.texture.offset),c=new Pe(A.crop?1:0),l=new ct(A.projection??0),u=new ct(["x","y","z"].indexOf(A.axis)??0),d=new ct(A.side??0),h=new kA(A.size?new G(A.size[0],A.size[1]):new G(100,100)),f=new Pe(A.alpha??1),p=new ct(A.mode??0),m=new Cd(s,o,c,l,u,d,h,a,f,p),g=new wt(m.calpha,"f");return new dA(e,t,A,{texture:s,textureSize:o,crop:c,projection:l,axis:u,side:d,size:h,mat:a,alpha:f,mode:p},m,p,g)}else if(A.type==="matcap"){let i=r.image(A.texture.image),s=new Ho(i,A.texture.wrapping),o=new Pe(A.alpha??1),a=new ct(A.mode??0),c=new Id(s,o,a),l=new wt(c.calpha,"f");return new dA(e,t,A,{texture:s,alpha:o,mode:a},c,a,l)}else if(A.type==="displace")if(A.displacementType==="noise"){let i=new qA(new S(...A.offset)),s=new Pe(A.scale??10),o=new Pe(A.intensity??8),a=new Pe(A.movement??1),c=new ct(A.noiseType??0),l=new Md(o,a,i,s,c);return new Ld(e,t,A,{offset:i,scale:s,intensity:o,movement:a,noiseType:c},l)}else throw new Error;else return eH(e,t,A,r)}updateByOp(e,t,A){let r=e;if(r.path[0]===void 0){if(r.type===0)return"type"in r.props||"category"in r.props?(A.scene?.markNeedsUpdateRendererDirty(),!0):LC(r.props,A.shared,this,t)}else if(r.path[0]==="texture")return"texture"in t||"video"in t?q0(r.props,A.shared,this):!0;return!1}dispose(){if(J4(this)){let e=this.uniforms[`f${this.id}_texture`];if(!e)return!1;let t=e;t.image instanceof Ar||t.image.deref()}}hasValueByKey(e){return this.uniforms[e]!==void 0}hasValue(e){return this.hasValueByKey(`f${this.id}_${e}`)}setValue(e,t){let A=`f${this.id}_${e}`;this.hasValueByKey(A)&&t!==void 0&&(this.uniforms[A].value=t)}getNode(e){let t=`f${this.id}_${e}`;if(this.hasValueByKey(t))return this.uniforms[t]}getValue(e){let t=`f${this.id}_${e}`;if(this.hasValueByKey(t))return this.uniforms[t].value}getName(e){let A=/f\d+_(.*)/.exec(e);if(A&&A.length>1)return A[1];console.log(`Layer.getName: error ${e}`)}getNames(){let e=[];for(let t in this.uniforms){let A=this.getName(t);A&&e.push(A)}return e}},dA=class extends ni{constructor(t,A,r,i,s,o,a){super(t,A,r,i);this.params=i;this.color=s;this.mode=o;this.alpha=a}},Ld=class extends ni{constructor(t,A,r,i,s){super(t,A,r,i);this.position=s}},ri=class extends ni{constructor(t,A,r,i,s){super(t,A,r,s);this.node=i}static createLigherLayer(t,A,r,i){let s,o=new Pe(r.alpha),a=new ct(r.mode),c;if(!r.visible)s=new zo,c={};else if(r.category==="lambert"){s=new fd;let l=new St(i.color(r.emissive)??0);c={emissive:l},s.emissive=l}else if(r.category==="toon"){s=new md;let l=new Pe(r.shininess??30),u=new St(i.color(r.specular)??1118481);c={shininess:l,specular:u},s.shininess=l,s.specular=u}else if(r.category==="physical"){s=new pd;let l=new Pe(r.roughness??.3),u=new Pe(r.metalness??0),d=new Pe(r.reflectivity??.5);c={roughness:l,metalness:u,reflectivity:d},s.roughness=l,s.metalness=u,s.reflectivity=d}else{s=new em;let l=new Pe(r.shininess??30),u=new St(i.color(r.specular)??1118481);c={shininess:l,specular:u},s.shininess=l,s.specular=u}return s.alpha=new Pe(1),s.shadingAlpha=o,s.shadingBlend=a,c.alpha=s.shadingAlpha,c.mode=s.shadingBlend,new ri(t,A,r,s,c)}get category(){return this.node.category}};function J4(n){let e=n instanceof ni?n.type:n;return e==="texture"||e==="video"||e==="displace_map"||e==="matcap"}function $4(n,e,t,A){switch(n.type){case"color":{let r=new St(A.color??5855577),i=new Pe(A.alpha??1),s=new wt("alpha / clamp(alpha + accumAlpha, 0.00001, 1.0 )","f");s.keywords.alpha=i;let o=new ct(A.mode??0);return r.alpha=i,new dA(e,t,n,{color:r,alpha:i,mode:o},r,o,s)}case"fresnel":{let r=new St(A.color??16777215),i=new Pe(A.bias??.1),s=new Pe(A.scale??1),o=new Pe(A.intensity??2),a=new Pe(A.factor??1),c=new Pe(A.alpha??1),l=new ct(A.mode??0),u=new vd(r,i,s,o,a,c,l),d=new wt(u.calpha,"f");return new dA(e,t,n,{color:r,bias:i,scale:s,intensity:o,factor:a,alpha:c,mode:l},u,l,d)}case"rainbow":{let r=new Pe(A.filmThickness??30),i=new Pe(A.movement??0),s=new qA(A.wavelengths??new S(0,0,0)),o=new Pe(A.noiseStrength??0),a=new Pe(A.noiseScale??1),c=new qA(A.offset??new S(0,0,0)),l=new Pe(A.alpha??1),u=new xd(r,i,s,o,a,c,l),d=new wt(u.calpha,"f"),h=new ct(A.mode??0);return new dA(e,t,n,{filmThickness:r,movement:i,wavelengths:s,noiseStrength:o,noiseScale:a,offset:c,alpha:l,mode:h},u,h,d)}case"transmission":{let r=new Pe(A.thickness??10),i=new Pe(A.ior??1.5),s=new Pe(A.roughness??.5),o=Dt.transmissionSize,a=Dt.transmissionRenderTarget,c=Dt.transmissionRenderTargetDepth,l=window.innerWidth,u=window.innerHeight,d=l>=u?new kA(u/l,1):new kA(1,l/u),h=new Pe(A.alpha??1),f=new wd(r,i,s,o,a,c,d,h),p=new wt(f.calpha,"f"),m=new ct(A.mode??0);return new dA(e,t,n,{thickness:r,ior:i,roughness:s,aspectRatio:d,alpha:h,mode:m},f,m,p)}case"toon":{let r=new ct(A.positioning??0),i;A.colors?i=new Mr(A.colors.length,A.colors):(i=new Mr(10,new He(0,0,0,1)),i.value[1]=new He(1,1,1,1));let s;A.steps?s=new Tr(A.steps.length,A.steps):(s=new Tr(10,1),s.value[0]=0);let o=new qA(A.source??new S(0,0,0)),a=new Bs(A.isWorldSpace??!0),c=new Pe(A.noiseStrength??0),l=new Pe(A.noiseScale??1),u=new tr(A.shadowColor),d=new qA(A.offset??new S(0,0,0)),h=new Pe(A.alpha??1),f=new Od(r,i,s,o,a,c,l,u,d,h),p=new wt(f.calpha,"f"),m=new ct(A.mode??0);return new dA(e,t,n,{positioning:r,colors:i,steps:s,source:o,isWorldSpace:a,noiseStrength:c,noiseScale:l,shadowColor:u,offset:d,alpha:h,mode:m},f,m,p)}case"outline":{let r=new St(A.outlineColor??16777215),i=new St(A.contourColor??16777215),s=new Pe(A.outlineWidth??.1),o=new Pe(A.contourWidth??.1),a=new Pe(A.outlineThreshold??.1),c=new Pe(A.contourThreshold??.1),l=new Pe(A.outlineSmoothing??.1),u=new Pe(A.contourFrequency??.1),d=new qA(A.contourDirections??new S(0,1,0)),h=new Bs(A.positionalLines??!1),f=new Bs(A.compensation??!0),p=Dt.normalRenderTarget,m=Dt.normalRenderTargetDepth,g=Dt.pixelRatioNode,y=Dt.resolution,x=new Pe(A.alpha??1),b=new bd(r,i,s,o,a,c,l,u,d,h,f,y,p,m,g,x),w=new wt(b.calpha,"f"),T=new ct(A.mode??0);return new dA(e,t,n,{outlineColor:r,contourColor:i,outlineWidth:s,contourWidth:o,outlineThreshold:a,contourThreshold:c,outlineSmoothing:l,contourFrequency:u,contourDirection:d,positionalLines:h,compensation:f,alpha:x,mode:T},b,T,w)}case"depth":{let r=new ct(A.gradientType??0),i=new Bs(A.smooth??!1),s=new Pe(A.near??50),o=new Pe(A.far??200),a=new Pe(A.isVector??1),c=new Pe(A.isWorldSpace??0),l=new qA(A.origin??new S),u=new qA(A.direction??new S),d;A.colors?d=new Mr(A.colors.length,A.colors):(d=new Mr(2,new He(0,0,0,1)),d.value[1]=new He(1,1,1,1));let h;A.steps?h=new Tr(A.steps.length,A.steps):(h=new Tr(2,1),h.value[0]=0);let f=new Pe(A.alpha??1),p=new ct(A.mode??0),m=new Sd(r,i,s,o,a,c,l,u,d,h,f),g=new wt(m.calpha,"f");return new dA(e,t,n,{gradientType:r,smooth:i,near:s,far:o,isVector:a,isWorldSpace:c,origin:l,direction:u,colors:d,steps:h,alpha:f,mode:p},m,p,g)}case"noise":{let r=new Pe(A.scale??1),i=new qA(A.size??new S(100,100,100)),s=new Pe(A.move??1),o=new kA(A.fA??new G(1.7,9.2)),a=new kA(A.fB??new G(8.3,2.8)),c=new kA(A.distortion??new G(1,1)),l=new tr(A.colorA),u=new tr(A.colorB),d=new tr(A.colorC),h=new tr(A.colorD),f=new Pe(A.alpha??1),p=new ct(A.mode??0),m=new ct(A.noiseType??0),g=new yd(r,i,s,o,a,c,l,u,d,h,f,m),y=new wt(g.calpha,"f");return new dA(e,t,n,{scale:r,size:i,move:s,fA:o,fB:a,distortion:c,colorA:l,colorB:u,colorC:d,colorD:h,alpha:f,mode:p,noiseType:m},g,p,y)}case"normal":{let r=new qA(A.cnormal??new S(1,1,1)),i=new Pe(A.alpha??1),s=new ct(A.mode??0),o=new Dd(r,i),a=new wt("alpha / clamp(alpha + accumAlpha, 0.00001, 1.0 )","f");return a.keywords.alpha=i,new dA(e,t,n,{cnormal:r,alpha:i,mode:s},o,s,a)}case"gradient":{let r=new ct(A.gradientType??0),i=new Bs(A.smooth??!1),s;A.colors?s=new Mr(A.colors.length,A.colors):(s=new Mr(10,new He(0,0,0,1)),s.value[1]=new He(1,1,1,1));let o;A.steps?o=new Tr(A.steps.length,A.steps):(o=new Tr(10,1),o.value[0]=0);let a=new kA(A.offset??new G(0,0)),c=new kA(A.morph??new G(0,0)),l=new Pe(A.angle??0),u=new Pe(A.alpha??1),d=new ct(A.mode??0),h=new Ed(r,i,s,o,a,c,l,u),f=new wt(h.calpha,"f");return new dA(e,t,n,{gradientType:r,smooth:i,colors:s,steps:o,offset:a,morph:c,angle:l,alpha:u,mode:d},h,d,f)}default:{let r=new St(1,0,0,1),i=new Pe(1),s=new wt("alpha / clamp(alpha + accumAlpha, 0.00001, 1.0 )","f");s.keywords.alpha=i;let o=new ct(0);return r.alpha=i,new dA(e,t,n,{color:r,alpha:i,mode:o},r,o,s)}}}function eH(n,e,t,A){let r=IC(t,A);return $4(t,n,e,r)}function X0(n,e,t){if(t.type==="displace"&&(n==="intensity"||n==="visible")){let A=e.uniforms[`f${e.id}_intensity`];return A?(A.value=t.intensity*(t.visible?1:0),A):void 0}if(t.type!=="displace"&&(n==="alpha"||n==="visible")){let A=e.uniforms[`f${e.id}_alpha`];if(!A)return;if(A.value=t.alpha*(t.visible?1:0),t.type==="outline"&&n==="visible"){let r=e.uniforms[`f${e.id}_compensation`];r&&(r.value=t.compensation&&t.visible)}return A}}function RC(n,e){let t=0;for(let A of n.layers)if(A.data.type!=="displace"&&"alpha"in A.data&&A.data.type!=="light"&&A.data.type!=="fresnel"&&A.data.type!=="texture"&&A.data.type!=="matcap"&&A.data.type!=="rainbow"&&A.data.type!=="outline"){let r=A.data.visible?A.data.alpha:0;if(r==1&&A.data.type=="depth"||A.data.type=="gradient"){for(let i of A.data.colors)if(i[3]<1){r=i[3];break}}else if(r==1&&A.data.type=="noise"){let i=e.color(A.data.colorA).a,s=e.color(A.data.colorB).a,o=e.color(A.data.colorC).a,a=e.color(A.data.colorD).a,c=Math.min(i,Math.min(s,Math.min(o,a)));c<1&&(r=c)}t+=(1-t)*r}return t<1}var Pn=class extends gt{constructor(){super(void 0);this.flatShading=!1;this.cacheKey="";this.fog=!0,this.dithering=!0,this.vertexColors=!0,this.transparent=!0}customProgramCacheKey(){return this.cacheKey}},Z0=class extends Pn{constructor(t,A,r,i){super();this.flatShading=t;this.side=A;this.wireframe=r;this.root=i}updateAfterBuild(){let t=this.root;this.lights=t.lights,this.vertexShader=t.vertexShader,this.fragmentShader=t.fragmentShader,this.defines=t.defines,this.uniforms=t.uniforms,this.extensions=t.extensions,this.transparent=t.transparent,this.cacheKey=t.customProgramCacheKey()+"flat"+this.flatShading+this.side}onBeforeCompile(t,A){this.root.onBeforeCompile(t)}get data(){return this.root.data}get category(){return this.root.category}getFlavor(t,A,r){return this.root.getFlavor(t,A,r)}get layers(){return this.root.layers}get fragment(){return this.root.fragment}getLayersOfType(t){return this.root.getLayersOfType(t)}getLayerByUuid(t){return this.root.getLayerByUuid(t)}updateByOp(t,A,r){this.root.updateByOp(t,A,r)}nodeMaterialDispose(){this.root.nodeMaterialDispose()}},mc=class extends Pn{constructor(t,A){super();this.data=t;this.layerIdGen=0;this.flavors=[];this.type="NodeMaterial";this.updaters=[],this.reset0(t,A)}get nodeMaterial(){return this}getFlavor(t,A,r){let i=r?6:(t?3:0)+A;if(i===0)return this;this.flavors===void 0&&(this.flavors=[]),i-=1;let s=this.flavors[i];return s===void 0&&(s=new Z0(t,A,r,this),this.flavors[i]=s,s.flatShading=t,s.side=A,s.updateAfterBuild()),s}get fragment(){return this.lightLayer.node}get category(){return this.lightLayer.category}reset(t,A){this.data!==t&&this.reset0(t,A)}reset0(t,A){this.data=t;let r=t.layers??FA.defaultTwoLayerData("phong").layers;this.layers=r.map(i=>ni.create(this.layerIdGen++,i.id,i.data,A.shared)),this.layers.reverse(),this.name=t.name??"Untitled Material",this.onUpdate(),this.transparent=RC(t,A.shared)}getLayersOfType(t){return this.layers.filter(A=>A.type===t)}getLayerByUuid(t){return this.layers.find(A=>A.uuid===t)}onUpdate(){this.cacheKey=this.computeCacheKey(),this.lightLayer=this.layers.find(t=>t instanceof ri),this.lightLayer===void 0&&(this.lightLayer=new ri(0,"",{...dn.defaultData("light","phong"),visible:!1},new zo,{})),this.dispose(),this.needsUpdate=!0,this.blendColors(),this.blendAfterColors(),this.blendPositions()}updateByOp(t,A,r){if(this.data=A,this.transparent=RC(A,r.shared),t.path[0]==="layers"){this.data=A;let i=r.shared,s=t.path[1];if(s===void 0){if(this.layers.reverse(),t.type===4){let o=ni.create(this.layerIdGen++,t.id,t.data,r.shared);this.layers.splice(t.localIndex,0,o),r.scene?.markNeedsUpdateRendererDirty()}else if(t.type===5)this.layers.splice(t.localIndex,1)[0].dispose(),r.scene?.markNeedsUpdateRendererDirty();else if(t.type===6){let o=this.layers.findIndex(c=>c.uuid===t.id),a=this.layers[o];this.layers.splice(o,1),this.layers.splice(t.localIndex,0,a),r.scene?.markNeedsUpdateRendererDirty()}this.layers.reverse(),this.onUpdate()}else{let o=this.layers.find(a=>a.uuid===s);if(o){let a=A.layers.data(s);if(o.updateByOp({...t,path:t.path.slice(2)},a,r)){let l=ni.create(this.layerIdGen++,s,a,i);this.layers.splice(this.layers.findIndex(u=>u.uuid===s),1,l),this.onUpdate()}}}}else this.reset(A,r)}blendColors(){let t=this.layers.findIndex(r=>r instanceof dA),A=this.layers.findIndex(r=>r instanceof ri);if(t!==-1&&t<A){let r=this.layers[t].color;for(let i=t+1;i<A;++i){let s=this.layers[i];s instanceof dA&&(r=new Td(r,s.color,s.alpha,s.mode))}this.fragment.color=r}else this.fragment.color=void 0}blendAfterColors(){let t=new wt("outgoingLight","f"),A=this.layers.findIndex(r=>r instanceof ri);if(this.layers.length>A+1){for(let r=A+1;r<this.layers.length;++r){let i=this.layers[r];i instanceof dA&&(t=new Td(t,i.color,i.alpha,i.mode))}this.fragment.afterColor=t}else this.fragment.afterColor=void 0}blendPositions(){let t=this.layers.filter(A=>A instanceof Ld);if(t.length>0){let A=t[0].position;for(let r=1;r<t.length;++r)t[r]&&(A=new En(A,t[r].position,En.ADD),A=new En(A,new Pe(.5).setReadonly(!0),En.MUL));this.fragment.position=A}else this.fragment.position=void 0}getDefines(){return this.defines}getUniforms(){return this.uniforms}getVertexShader(){return this.vertexShader}getFragmentShader(){return this.fragmentShader}onBeforeCompile(t){this.build(),t.defines=this.defines,t.uniforms=this.uniforms,t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.extensionDerivatives=this.extensions.derivatives===!0,t.extensionFragDepth=this.extensions.fragDepth===!0,t.extensionDrawBuffers=this.extensions.drawBuffers===!0,t.extensionShaderTextureLOD=this.extensions.shaderTextureLOD===!0}clampUniformsForPreview(t,A){let r=(i,s,o)=>Math.min(Math.max(i,s),o);for(let i of this.layers)if(i.type==="displace"){let s=r(i.uniforms[`f${i.id}_intensity`].value,t,A);i.uniforms[`f${i.id}_intensity`].value=s}}computeCacheKey(){let t="[";for(let{data:A}of this.data.layers)if(A.type==="light")t+=`"${A.visible?A.category.toUpperCase():"Basic"}"`;else{let r=(j0[A.type]??[]).map(o=>A[o]),i=(Y0[A.type]??[]).map(o=>A[o]?.length??0),s=[...r,...i];s.length?t+=`["${A.type}", "${s.join('","')}"],`:t+=`"${A.type}",`}return t=t.slice(0,-1)+"]",t}updateFrame(t){for(let A=0;A<this.updaters.length;++A)t.updateNode(this.updaters[A])}build(){let t=new $p;this.lights=this.lightLayer.data.visible,t.build(this.fragment,this.fragment),this.vertexShader=t.getCode("vertex"),this.fragmentShader=t.getCode("fragment"),this.defines=t.defines,this.uniforms=t.uniforms,this.extensions=t.extensions,this.updaters=t.updaters;for(let A of this.flavors)A&&A.updateAfterBuild();return this}nodeMaterialDispose(){this.layers.forEach(t=>t.dispose()),super.dispose();for(let t of this.flavors)t&&t.dispose()}assetsLoaded(){for(let t of this.layers)if(t instanceof dA){let A=t.params.texture;if(A instanceof Ho&&!A.image.loaded)return!1}return!0}getHash(){let t="{";return t+='"fragment":'+this.fragment.getHash(),t+="}",t}};Object.defineProperties(Pn.prototype,{properties:{get:function(){return this.fragment.properties}}});var Wo=class extends mc{};var GC=ch(BC());var NC=new Map;function FC(n){if(typeof n=="string")return n;let e=NC.get(n);return e||(e={url:URL.createObjectURL(new Blob([n]))},NC.set(n,e)),e.url}var Vi=class{constructor({src:e,volume:t,delay:A,loop:r}){this._volume=1;this.delay=0;this._loop=1;this.loopsRemaining=0;this._status="stopped";this.onEnd=()=>{this.loopsRemaining===1/0?this.replay():this.loopsRemaining>1?(this.replay(),this.loopsRemaining--):(this._status="stopped",this.loopsRemaining=this._loop)};let i;typeof e=="string"?i={src:e}:i={src:FC(e),format:"wav"},this.sound=new GC.Howl(i),this.sound.on("end",this.onEnd),this.src=e,t!==void 0&&(this.volume=t),A!==void 0&&(this.delay=A),r!==void 0&&(this.loop=r)}get status(){return this._status}get volume(){return this._volume}set volume(e){this._volume=e,this.sound.volume(e)}get loop(){return this._loop}set loop(e){this._loop=e,this.loopsRemaining=e}replay(){this.clearDelay(),this.delayTimerId=window.setTimeout(()=>{this.sound.play(),this.clearDelay()},this.delay)}fade(e,t=1e3){e?(this.sound.volume(this._volume),this.clearFade(),this.fadeTimerId=window.setTimeout(()=>{this.sound.fade(this._volume,0,t),this.clearFade()},e)):this.sound.fade(this._volume,0,t)}on(e,t,A){this.sound.on(e,t,A)}off(e,t,A){this.sound.off(e,t,A)}play(){this._status==="playing"||this.sound.playing()||(this._status==="paused"?(this.sound.seek()===0?this.replay():this.sound.play(),this._status="playing"):this._status==="stopped"&&(this.replay(),this._status="playing"))}pause(){this._status==="playing"&&(this.sound.pause(),this.clearFade(),this.clearDelay(),this._status="paused")}stop(){this.sound.stop(),this.loopsRemaining=this._loop,this.clearFade(),this.clearDelay(),this._status="stopped"}clearFade(){this.fadeTimerId&&(clearTimeout(this.fadeTimerId),delete this.fadeTimerId)}clearDelay(){this.delayTimerId&&(clearTimeout(this.delayTimerId),delete this.delayTimerId)}dispose(e=!1){this.off(),this.stop(),this.clearFade(),this.clearDelay()}};var om=class{constructor(){this.type="ShapePath";this.color=new Le;this.subPaths=[];this.currentPath=null}moveTo(e,t){return this.currentPath=new uo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath?.lineTo(e,t),this}quadraticCurveTo(e,t,A,r){return this.currentPath?.quadraticCurveTo(e,t,A,r),this}bezierCurveTo(e,t,A,r,i,s){return this.currentPath?.bezierCurveTo(e,t,A,r,i,s),this}splineThru(e){return this.currentPath?.splineThru(e),this}toShapes(){let t={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},A={loc:t.ORIGIN,t:0};function r(p,m,g,y){let x=p.x,b=m.x,w=g.x,T=y.x,M=p.y,v=m.y,E=g.y,C=y.y,P=(T-w)*(M-E)-(C-E)*(x-w),D=(b-x)*(M-E)-(v-M)*(x-w),L=(C-E)*(b-x)-(T-w)*(v-M),I=P/L,B=D/L;if(L===0&&P!==0||I<=0||I>=1||B<0||B>1)return null;if(P===0&&L===0){for(let N=0;N<2;N++)if(i(N===0?g:y,p,m),A.loc===t.ORIGIN){let W=N===0?g:y;return{x:W.x,y:W.y,t:A.t}}else if(A.loc===t.BETWEEN){let W=+(x+A.t*(b-x)).toPrecision(10),X=+(M+A.t*(v-M)).toPrecision(10);return{x:W,y:X,t:A.t}}return null}else{for(let X=0;X<2;X++)if(i(X===0?g:y,p,m),A.loc===t.ORIGIN){let F=X===0?g:y;return{x:F.x,y:F.y,t:A.t}}let N=+(x+I*(b-x)).toPrecision(10),W=+(M+I*(v-M)).toPrecision(10);return{x:N,y:W,t:I}}}function i(p,m,g){let y=g.x-m.x,x=g.y-m.y,b=p.x-m.x,w=p.y-m.y,T=y*w-b*x;if(p.x===m.x&&p.y===m.y){A.loc=t.ORIGIN,A.t=0;return}if(p.x===g.x&&p.y===g.y){A.loc=t.DESTINATION,A.t=1;return}if(T<-Number.EPSILON){A.loc=t.LEFT;return}if(T>Number.EPSILON){A.loc=t.RIGHT;return}if(y*b<0||x*w<0){A.loc=t.BEHIND;return}if(Math.sqrt(y*y+x*x)<Math.sqrt(b*b+w*w)){A.loc=t.BEYOND;return}let M;y!==0?M=b/y:M=w/x,A.loc=t.BETWEEN,A.t=M}function s(p,m){let g=[],y=[];for(let x=1;x<p.length;x++){let b=p[x-1],w=p[x];for(let T=1;T<m.length;T++){let M=m[T-1],v=m[T],E=r(b,w,M,v);E!==null&&g.find(C=>C.t<=E.t+Number.EPSILON&&C.t>=E.t-Number.EPSILON)===void 0&&(g.push(E),y.push(new G(E.x,E.y)))}}return y}function o(p,m,g){let y=new G;m.getCenter(y);let x=[];return g.forEach(b=>{b.boundingBox.containsPoint(y)&&s(p,b.points).forEach(T=>{x.push({identifier:b.identifier,isCW:b.isCW,point:T})})}),x.sort((b,w)=>b.point.x-w.point.x),x}function a(p,m,g,y,x){(x==null||x==="")&&(x="nonzero");let b=new G;p.boundingBox.getCenter(b);let w=[new G(g,b.y),new G(y,b.y)],T=o(w,p.boundingBox,m);T.sort((D,L)=>D.point.x-L.point.x);let M=[],v=[];T.forEach(D=>{D.identifier===p.identifier?M.push(D):v.push(D)});let E=M[0].point.x,C=[],P=0;for(;P<v.length&&v[P].point.x<E;)C.length>0&&C[C.length-1]===v[P].identifier?C.pop():C.push(v[P].identifier),P++;if(C.push(p.identifier),x==="evenodd"){let D=C.length%2===0,L=C[C.length-2];return{identifier:p.identifier,isHole:D,for:L}}else if(x==="nonzero"){let D=!0,L=null,I=null;for(let B=0;B<C.length;B++){let N=C[B];m[N]&&(D?(I=m[N].isCW,D=!1,L=N):I!==m[N].isCW&&(I=m[N].isCW,D=!0))}return{identifier:p.identifier,isHole:D,for:L}}else console.warn('fill-rule: "'+x+'" is currently not implemented.')}let c=0,l=999999999,u=-999999999,d=[];this.subPaths.forEach(p=>{let m=p.getPoints(),g=-999999999,y=999999999,x=-999999999,b=999999999;for(let w=0;w<m.length;w++){let T=m[w];T.y>g&&(g=T.y),T.y<y&&(y=T.y),T.x>x&&(x=T.x),T.x<b&&(b=T.x)}u<=x&&(u=x+1),l>=b&&(l=b-1),m.length&&d.push({curves:p.curves,points:m,isCW:Oa.isClockWise(m),identifier:c++,boundingBox:new sf(new G(b,y),new G(x,g))})});let h=d.map(p=>a(p,d,l,u,this.userData?.style.fillRule)),f=[];return d.forEach(p=>{let m=h[p.identifier];if(m&&!m.isHole){let g=new Pi;g.curves=p.curves,h.filter(x=>x?.isHole&&x.for===p.identifier).forEach(x=>{if(x){let b=d[x.identifier],w=new uo;w.curves=b.curves,g.holes.push(w)}}),f.push(g)}}),f}};var UC,J0=new Promise(n=>{UC=n}),kC=!1;async function VC(){if(kC)return;let n=await import("./opentype.js");UC(n),kC=!0}var _d=class{async load(e,t,A=()=>{}){let{load:r}=await J0;r(e,(i,s)=>{i||!s?A(i??"Something went wrong"):t(s)})}async parse(e){let{parse:t,Bidi:A}=await J0;try{let r=t(e),i=new A,s=o=>r.charToGlyphIndex(o.char);return i.registerModifier("glyphIndex",null,s),i.applyFeatures(r,r.defaultRenderOptions.features),{font:r,bidi:i}}catch(r){console.error(r)}}};async function tH(n){return await(await fetch(n)).arrayBuffer()}var AH=new _d;async function $0(n){let e,t,A=!1;if(n.url?(e=await tH(n.url),t=n.url,A=n.url.startsWith("/")):n.data&&(e=n.data.buffer),e){let r=await AH.parse(e);if(r)return{font:r.font,url:t,intercepted:A,arr:e,bidi:r.bidi}}}function nH(n,e){return e.state.glyphIndex===n||e.state.fina===n||e.state.medi===n||e.state.init===n}var am=class{constructor(e){this._arrayBuffer=new ArrayBuffer(1);this._isLoaded=!1;this._intercepted=!1;this._isUserFont=e.isUserFont??!1,this._loadingPromise=$0(e).then(t=>{t&&(this._arrayBuffer=t.arr,this._url=t.url,this.font=t.font,this._intercepted=t.intercepted,this._isLoaded=!0,this._bidi=t.bidi)})}update(e){this._isLoaded=!1,this._isUserFont=e.isUserFont??!1,this._loadingPromise=$0(e).then(t=>{t&&(this._arrayBuffer=t.arr,this._url=t.url,this.font=t.font,this._intercepted=t.intercepted,this._isLoaded=!0,this._bidi=t.bidi)})}get url(){return this._url}get intercepted(){return this._intercepted}get isLoaded(){return this._isLoaded}get loadingPromise(){return this._loadingPromise}reverseLigaturesTable(e,t,A){if(!this._bidi)return[];let r=this._bidi;r.getTextGlyphs(t);let i=r.tokenizer.tokens,s=[],o=0,a=A.length===i.length;for(let c=0;c<A.length;c++){let l=A[c].index,u=String.fromCharCode(A[c].unicode),d=i[o];if(nH(l,d)||a)s.push({char:u,index:l,replacements:[d.state.glyphIndex],replacementChars:[d.char]}),o++;else{let h=d.char,f="",p=[d.state.glyphIndex],m=[],g=!1;for(;!g;)o++,f=t.charAt(o),h+=f,p.push(e.charToGlyphIndex(f)),m=e.stringToGlyphs(h),m.length===1&&m[0].index===l&&(g=!0),o>t.length&&(g=!0);s.push({char:u,index:l,replacements:p,replacementChars:Array.from(h)}),o++}}return s}generateShapes(e,t){if(!this._isLoaded)return;let A=this.font,r=t.fontSize/this.unitsPerEm,i=t.fontSize*t.lineHeight,s=e.map(y=>this.getTextWidth(y,t)),o=t.width,a=this.getCharWidth(`
`,t),c=t.horizontalAlign===1?a:0,l=this.computeSpaceWidthForLine(e,0,t),u=this.getLineInitialOffsetX(s[0],o,t.horizontalAlign,e[0],a),d=this.getLineInitialOffsetY(i,e.length,t.height,r,t.verticalAlign),h=[],f=e.map(y=>[]),p=e.map(y=>[]),m;for(let y=0;y<e.length;y++){let x=e[y],b={features:{liga:!0}},w=[];try{w=A.stringToGlyphs(x,b)}catch(M){console.warn(M)}u=this.getLineInitialOffsetX(s[y],o,t.horizontalAlign,x,a);let T=[];try{T=this.reverseLigaturesTable(A,x,w)}catch(M){console.warn(M)}l=this.computeSpaceWidthForLine(e,y,t);for(let M=0;M<w.length;M++){let v=w[M],E=v.index===0?`
`:v.unicode?String.fromCharCode(v.unicode):void 0,C=T[M],P=0,D=0;M===0&&t.horizontalAlign===2&&v.leftSideBearing!==void 0&&(D=-v.leftSideBearing*r),m&&(P=A.getKerningValue(v,m)*r),u+=D+P;let L=0;if(E===`
`)L=c;else if(E===" ")L=l;else{let I=this.createPath(v,r,u,d,t);I&&(L=I.offsetX-(P+D),h.push(I.path))}if(C.replacements.length===1)p[y].push([u,d]),f[y].push(L);else{let I=C.replacements.map(X=>(A.glyphs.get(X).advanceWidth??0)*r),B=I.reduce((X,F)=>X+=F,0),N=I.map(X=>X/B),W=u;for(let X=0;X<N.length;X++){let F=L*N[X];p[y].push([W,d]),f[y].push(F),W+=F}}u+=L,m=v}d-=i}let g=[];for(let y=0,x=h.length;y<x;y++)g.push(...h[y].toShapes());return{shapes:g,charWidths:f,lineWidths:s,charCoords:p}}get isUserFont(){return this._isUserFont}get arrayBuffer(){return this._arrayBuffer}get ascender(){return this.font?.ascender??0}get descender(){return this.font?.descender??0}get familyName(){return this.font?.names.fontFamily??""}get subfamilyName(){return this.font?.names.fontSubfamily??""}get unitsPerEm(){return this.font?.unitsPerEm??1}getLineInitialOffsetX(e,t,A,r,i){return(A===3||A===2)&&r.indexOf(`
`)>=0&&(e-=i),A===3?t*.5-e*.5:A===2?t-e:0}getLineInitialOffsetY(e,t,A,r,i){let s=t*e,o=Math.abs(this.ascender-this.descender)*r,a=e-o,c=-this.ascender*r-a/2;return i===3?-(A-s-c):i===2?-(A*.5-s*.5-c):c}createPath(e,t,A,r,i){let s=e.getPath(A,-r,i.fontSize,{kerning:!1,letterSpacing:i.letterSpacing});if(!s){console.error('THREE.Font: character "'+e+'" does not exists in font family '+this.familyName+".");return}let o=new om,a=(e.advanceWidth??1)*t;if(e)for(let c of s.commands){let l=o.currentPath?.currentPoint;if(!(l&&c.type!=="Z"&&l.x===c.x&&-l.y===c.y))switch(c.type){case"M":o.moveTo(c.x,-c.y);break;case"L":o.lineTo(c.x,-c.y);break;case"Q":o.quadraticCurveTo(c.x1,-c.y1,c.x,-c.y);break;case"C":o.bezierCurveTo(c.x1,-c.y1,c.x2,-c.y2,c.x,-c.y);break}}return o.subPaths.forEach(c=>{let l=rH(c.curves);l!==void 0&&c.currentPoint.distanceTo(l)>0&&c.lineTo(l.x,l.y)}),{offsetX:a+i.fontSize*i.letterSpacing,path:o}}getCharWidth(e,t){return this.font?.getAdvanceWidth(e,t.fontSize,{kerning:!0,letterSpacing:t.letterSpacing})??0}getTextWidth(e,t){return this.font?.getAdvanceWidth(e,t.fontSize,{kerning:!0,letterSpacing:t.letterSpacing})??0}computeSpaceWidthForLine(e,t,A){let r=this.getCharWidth(" ",A),i=e[t];if(i){let s=this.countSpaces(i.trimEnd());if(A.horizontalAlign===4&&t<e.length-1&&s){let o=A.width,a=this.getTextWidth(i,A);return(o-(a-s*r))/s}}return r}countSpaces(e){return(e.match(/ /g)||[]).length}};function rH(n){if(n.length){let e=n[0];if(e instanceof JA)return e.v1;if(e instanceof ZA||e instanceof Nn)return e.v0}}var ex=class{constructor(){this.objects=new Map;this.unreachable=new Set}getCached(e){return this.objects.get(e)}get size(){return this.objects.size}get(e,t){let A=this.objects.get(e);return A===void 0?(A=this.createObject(e,t),this.objects.set(e,A)):A.isShared=!0,A}mutateIfUnique(e,t){let A=this.objects.get(e);if(A&&A.isShared!==!0)return this.objects.delete(e),this.objects.set(t,A),A}startGc(){this.unreachable=new Set(this.objects.keys())}markAsReachable(e,t){let A=this.objects.get(e);t===A?this.unreachable.delete(e):!1&&console.warn("Reachable but deleted",e)}endGc(){this.unreachable.forEach(e=>{this.disposeObject(this.objects.get(e)),this.objects.delete(e)}),this.unreachable.clear()}dispose(){this.objects.forEach(e=>{this.disposeObject(e)}),this.objects.clear()}},Rd=class extends ex{constructor(t){super();this.flatShading=t}disposeObject(t){t.dispose()}createObject(t,A){let r=ko(t,A,this.flatShading);return r.computeBoundingSphere(),r}};var zC={find(n){},markNeedsUpdateRendererDirty:function(){},markGeometryCacheDirty:function(){},addPendingExpandCloner:function(n){},addPendingUpdateCloner(n){}};var tx=class extends nm{constructor(t){super();this.shared=t}create(t){return new pc(t,this.shared)}},zi=class{constructor(e,t={}){this.geometryCache=new Rd(!0);this.geometryCache2=new Rd(!1);this.imageHolderCache=new tx(this);this.thisContext={scene:zC,shared:this};this.deletedMaterial=new Wo(FA.defaultTwoLayerData("phong"),this.thisContext);this.deletedImage=new Ar(Sp.emptyImage,this);this.deletedVideo=new Ar(El.defaultVideo,this);this.materials={};this.images={};this.videos={};this.colors={};this.audios={};this.fonts={};this.penumbraSize=[];this.requestRender=()=>{this._requestRender&&this._requestRender()};if(t.images)for(let[A,r]of Object.entries(t.images))this.addImage(A,r);if(t.videos)for(let[A,r]of Object.entries(t.videos))this.addVideo(A,r);if(t.audios)for(let[A,r]of Object.entries(t.audios))this.addAudio(A,r.data);this.reset(e)}setRequestRender(e){this._requestRender=e}reset(e){for(let[t,A]of Object.entries(e.images))this.addImage(t,A);for(let[t,A]of Object.entries(e.videos))this.addVideo(t,A);for(let[t,A]of Object.entries(e.colors))this.addColor(t,A);for(let[t,A]of Object.entries(e.materials))this.addMaterial(t,new Wo(A,this.thisContext));for(let[t,A]of Object.entries(e.audios))this.addAudio(t,A.data);for(let[t,A]of Object.entries(e.fonts))this.addFont(t,A);this.penumbraSize=e.penumbraSize}addMaterial(e,t){t.uuid=e,this.materials[e]=t}deleteMaterial(e){this.materials[e]&&(this.materials[e].nodeMaterialDispose(),delete this.materials[e])}getMaterial(e){let t=this.materials[e];return t}getMaterialOrDeletedPlaceholder(e){return this.materials[e]??this.deletedMaterial}material(e){return typeof e=="string"?this.getMaterialOrDeletedPlaceholder(e):new mc(e,this.thisContext)}getMaterials(){return this.materials}addImage(e,t){return this.images[e]?(this.onColorOrImageUpdate&&this.onColorOrImageUpdate(),this.images[e].updateSrc(t.data),!0):(this.images[e]=new Ar(t,this),!1)}deleteImage(e){let t=this.images[e];t&&(t.dispose(),delete this.images[e])}getDefaultImage(){return this.images.image_0}getImage(e){return this.images[e]??this.deletedImage}image(e){return typeof e=="string"?this.getImage(e):this.imageHolderCache.load(e)}addVideo(e,t){return this.videos[e]?(this.videos[e].updateSrc(t.data),!0):(this.videos[e]=new Ar(t,this),!1)}deleteVideo(e){let t=this.videos[e];t&&(t.dispose(),delete this.videos[e])}getVideo(e){return this.videos[e]??this.deletedVideo}video(e){return typeof e=="string"?this.getVideo(e):this.imageHolderCache.load(e)}addColor(e,t){return this.colors[e]?(this.onColorOrImageUpdate&&this.onColorOrImageUpdate(),"a"in t?this.colors[e].setRGBA(t.r,t.g,t.b,t.a):this.colors[e].setRGBA(t.r,t.g,t.b,1),!0):("a"in t?this.colors[e]=new Ns(t.r,t.g,t.b,t.a):this.colors[e]=new Ns(t.r,t.g,t.b,1),!1)}updateColor(e,t){if(this.colors[e]){this.onColorOrImageUpdate&&this.onColorOrImageUpdate();let A=this.colors[e];return this.colors[e].r=t.r??A.r,this.colors[e].g=t.g??A.g,this.colors[e].b=t.b??A.b,this.colors[e].a=t.a??A.a,!0}return!1}deleteColor(e){this.colors[e]&&delete this.colors[e]}getColor(e){return this.colors[e]}color(e){let t;if(typeof e=="string"){let A=this.getColor(e);A?t=A:(console.warn("Tried to create color layer params with a color key that does not exist in the assets manager"),t=new $t(0,0,0,0))}else return"a"in e?new $t(e.r,e.g,e.b,e.a):new $t(e.r,e.g,e.b,1);return t}addAudio(e,t){this.audios[e]=t}getAudio(e){let t=this.audios[e];if(t instanceof Vi)return t;{let A=new Vi({src:t});return this.audios[e]=A,A}}deleteAudio(e){let t=this.audios[e];t&&(t instanceof Vi&&t.dispose(),delete this.audios[e])}addFont(e,t){this.fonts[e]=new am(t),this.fonts[e].loadingPromise.then(()=>this.requestRender())}getFont(e){return this.fonts[e]}deleteFont(e){this.fonts[e]&&delete this.fonts[e]}dispose(){Object.keys(this.materials).forEach(t=>this.deleteMaterial(t)),this._requestRender=void 0,Object.values(this.audios).forEach(t=>{t instanceof Vi&&t.dispose()}),this.audios={},this.geometryCache.dispose(),this.geometryCache2.dispose()}},Zhe=new zi(Bl.emptyData());var Hi=class extends Lt{updateByPatchedOp(t,A,r){if(super.updateByPatchedOp(t,A,r),ZT(t.path,["materials"])!==null&&t.type===0&&Array.isArray(this.material))for(let[i,s]of Object.entries(t.props)){let o=r.shared.material(s);this.material[Number(i)]=o}else if(zr(t.path,["material"])&&this.material instanceof Pn)"material"in A&&typeof A.material!="string"&&this.material.updateByOp(YA.drop(t,1),A.material,r);else if(zr(t.path,["materials","*"])&&Array.isArray(this.material)){let i=t.path[1];if("materials"in A&&i<this.material.length){let s=A.materials[i];typeof s!="string"&&this.material[i].updateByOp(YA.drop(t,2),s,r)}}}updateState(t,A){super.updateState(t,A),t.castShadow!==void 0&&(this.castShadow=t.castShadow),t.receiveShadow!==void 0&&(this.receiveShadow=t.receiveShadow);let r=this.dataPatched;if(t.geometry?.type!=="NonParametricGeometry"&&"material"in t&&t.material!==void 0&&(this.disposeMaterial(),this.material=A.shared.material(t.material).getFlavor(r.flatShading,r.side,r.wireframe),A.scene?.markNeedsUpdateRendererDirty()),t.geometry?.type==="NonParametricGeometry"&&("materials"in t&&t.materials!==void 0?(this.disposeMaterial(),this.material=t.materials.map(i=>A.shared.material(i).getFlavor(r.flatShading,r.side,r.wireframe)),A.scene?.markNeedsUpdateRendererDirty()):"material"in t&&t.material!==void 0&&(this.disposeMaterial(),this.material=[A.shared.material(t.material).getFlavor(r.flatShading,r.side,r.wireframe)],A.scene?.markNeedsUpdateRendererDirty())),t.flatShading!==void 0||t.wireframe!==void 0||t.side!==void 0)if(Array.isArray(this.material))for(let i=0;i<this.material.length;i++)this.material[i]=this.material[i].getFlavor(r.flatShading,r.side,r.wireframe);else this.material=this.material.getFlavor(r.flatShading,r.side,r.wireframe)}disposeMaterial(){this.material&&pp(this.material).forEach(t=>{t instanceof Pn&&(t instanceof Wo||t.nodeMaterialDispose())})}dispose(){this.disposeMaterial(),super.dispose()}};var eA=class extends Hi{constructor(t,A,r){super(t,A);this.data=A;this.localGeometry=void 0}chooseGeoemtryCache(t){return t.geometryCache}markGeometryAsReachable(t){this.geometryCreateDeleyed instanceof Ie&&this.chooseGeoemtryCache(t).markAsReachable(this.dataPatched.geometry,this.geometryCreateDeleyed)}get geometry(){if(this.localGeometry!==void 0)return this.localGeometry;if(this.geometryCreateDeleyed instanceof zi){let t=this.geometryCreateDeleyed,A=this.chooseGeoemtryCache(t);this.geometryCreateDeleyed=A.get(this.dataPatched.geometry,t)}return this.geometryCreateDeleyed}set geometry(t){this.localGeometry=t}get is2DAndNoDepth(){let t=this.dataPatched.geometry;return Uu.is2DParametricMesh(t.type)&&t.depth===0}get is2DType(){return Uu.is2DParametricMesh(this.geometry.userData.type)}updateByPatchedOp(t,A,r){super.updateByPatchedOp(t,A,r),zr(t.path,["geometry"])&&this.updateByPatchedOpGeometry(YA.drop(t,1),A.geometry,r)}removeInteractionGeometry(){this.localGeometry?.dispose(),this.localGeometry=void 0}updateGeometryInteractions(t,A){this.invalidateDownstreamBooleanData();let r=this.data.geometry.type;if(r==="NonParametricGeometry"||r==="SubdivGeometry"){let i=t;if(this.localGeometry===void 0){let l={...this.data.geometry,...i};this.localGeometry=ko(l,A,this.data.flatShading)}let s,o,a;i.scaleBaked?[s,o,a]=i.scaleBaked:{width:s,height:o,depth:a}=i;let c=this.localGeometry.userData;c.sxPrev!==void 0&&ld(this.localGeometry.attributes,s/c.sxPrev,o/c.syPrev,a/c.szPrev),c.sxPrev=s,c.syPrev=o,c.szPrev=a}else{let i={...this.data.geometry,...t};this.localGeometry?.dispose(),this.localGeometry=ko(i,A,this.data.flatShading)}}refreshAttachedCloners(t){for(let A of this.attachedSurfaceCloners)t.scene.addPendingUpdateCloner(A.object)}createGeometryDelayed(t){this.geometryCreateDeleyed=t.shared,this.refreshAttachedCloners(t)}updateByPatchedOpGeometry(t,A,r){let i=!1;t.type===0&&t.path.length===0&&So(["scaleBaked"],Object.keys(t.props))&&this.geometryCreateDeleyed instanceof sA&&this.chooseGeoemtryCache(r.shared).mutateIfUnique(this.geometryCreateDeleyed.data,A)===this.geometryCreateDeleyed&&(i=!0,this.geometryCreateDeleyed.mutateDirectlyScaleBaked(A,t.props.scaleBaked),this.refreshAttachedCloners(r)),i||(r.scene?.markGeometryCacheDirty(),this.createGeometryDelayed(r)),this.resetBBoxNeedsUpdate(),this.invalidateDownstreamBooleanData()}updateGeometryOnStateUpdate(t,A){this.createGeometryDelayed(A)}updateState(t,A){t.geometry!==void 0&&this.updateGeometryOnStateUpdate(t.geometry,A),super.updateState(t,A)}updateGeometryGroupsIfNeeded(){Array.isArray(this.material)&&this.geometry.groups.length===0&&this.geometry.addGroup(0,Math.max(this.geometry.getIndex()?.count??0,this.geometry.getAttribute("position").count),0)}updateEntityBoxSize(t,A){let r=this.geometry.userData.parameters;this.is2DType?t.set(0,0,r.depth*.5):t.setScalar(0),A.set(r.width,r.height,r.depth??0).multiplyScalar(.5)}};function iH(n){if(n.geometry.attributes.extrudeNormal||!n.geometry.attributes.position||!n.geometry.attributes.normal)return;let e=new Map,t=n.geometry.attributes.position.array,A=n.geometry.attributes.normal.array,r=new Float32Array(t.length);for(let i=0;i<t.length;i+=3){let s=`${t[i]}_${t[i+1]}_${t[i+2]}`,o=new S(A[i],A[i+1],A[i+2]);e.has(s)?e.get(s)?.normals.push(o):e.set(s,{normals:[o],result:new S})}e.forEach((i,s)=>{for(let o of i.normals)i.result.add(o);i.result.divideScalar(i.normals.length)});for(let i=0;i<t.length;i+=3){let s=`${t[i]}_${t[i+1]}_${t[i+2]}`,o=e.get(s)?.result;o&&(r[i]=o.x,r[i+1]=o.y,r[i+2]=o.z)}n.geometry.setAttribute("extrudeNormal",new Se(r,3))}function sH(n){if(n.geometry.attributes.extrudeNormals||!n.geometry.attributes.position)return;let e=n.geometry.attributes.position.array,t=new Float32Array(e.length),A=new S;for(let r=0;r<e.length;r+=3)A.set(e[r],e[r+1],e[r+2]).normalize(),t[r]=A.x,t[r+1]=A.y,t[r+2]=A.z;n.geometry.setAttribute("extrudeNormal",new Se(t,3))}function gc(n){if(Array.isArray(n.material)){for(let e of n.material)if(e.getLayersOfType("outline").length===0)return}else if(!(n.material instanceof Pn)||n.material.getLayersOfType("outline").length===0)return;n instanceof eA&&n.is2DAndNoDepth?sH(n):iH(n)}function yc(n){if(!n.geometry.attributes.position)return;let e=n.geometry.attributes.position.array,t=new Float32Array(e.length),A=parseInt(n.uuid.replace(/\D/g,"")),r=[Ve.seededRandom(A),Ve.seededRandom(A+1e4),Ve.seededRandom(A+2e4)];for(let i=0;i<e.length;i++)t[i]=r[i%3];n.geometry.setAttribute("randomColor",new Fe(t,3))}var oH;ic.then(n=>{oH=n});var aH=new de,lH=new de,cH=new de,ii=new mt,Bd=new S,uH=new de,dH=new de;function WC(n){let e=!1;return n.scene.objects.traverse((t,A)=>{A.type==="Mesh"&&A.geometry.type==="SubdivGeometry"&&(e=!0)}),e}var Er=class extends eA{constructor(t,A,r){super(t,A,r);this.data=A;this.hiddenMatrixOld=new de;this.smoothShading=!0;this.matrixWorldRigid=new de;this.skipReactionUpdate=!1}chooseGeoemtryCache(t){return this.dataPatched.flatShading?t.geometryCache:t.geometryCache2}get subdivPointerNew(){return this.localGeometry!==void 0?this.subdivPointer:this.geometry.ensureSubdivPointer()}get originalGeometryNew(){return this.localGeometry!==void 0?this.originalGeometry:this.geometry.originalGeometry}get phongAngle(){return this.data.geometry.phongAngle??45}updateEntityBoxSize(t,A){let r=this.geometry.userData.parameters;t.copy(this.originalGeometryNew.boundingSphere.center),A.set(r.width,r.height,r.depth??0).multiplyScalar(.5)}createGeometryByControls(t){if(this.skipReactionUpdate===!0)return;let A=this.localGeometry?.uuid,{originalGeometry:r,subdividedGeometry:i,subdivPointer:s}=sA.build(t,this.subdivPointer,this.smoothShading,this.shearScale);this.subdivPointer=s,r!==void 0&&(this.originalGeometry?.dispose(),this.originalGeometry=r),i!==void 0&&(this.subdividedGeometry?.dispose(),this.subdividedGeometry=i??void 0),this.localGeometry=this.subdividedGeometry??this.originalGeometry,gc(this),yc(this),this.calcBoundingBox(),A&&(this.localGeometry.uuid=A)}updateState(t,A){if(super.updateState(t,A),t.flatShading!==void 0){let r=this.material;this.material=r.getFlavor(!1,r.side,r.wireframe),this.smoothShading=!t.flatShading,this.createGeometryDelayed(A)}}updateMesh(t=!1){sA.buildLevel(this.subdivPointer,!0,this.smoothShading?this.phongAngle:-1,this.originalGeometry,t?this.shearScaleInv:void 0),this.subdividedGeometry&&sA.buildLevel(this.subdivPointer,!1,this.smoothShading?this.phongAngle:-1,this.subdividedGeometry,t?this.shearScaleInv:void 0)}updateTopology(){this.originalGeometry.dispose(),this.originalGeometry=sA.buildLevel(this.subdivPointer,!0,this.smoothShading?this.phongAngle:-1),this.subdividedGeometry&&(this.subdividedGeometry.dispose(),this.subdividedGeometry=sA.buildLevel(this.subdivPointer,!1,this.smoothShading?this.phongAngle:-1)),this.localGeometry=this.subdividedGeometry??this.originalGeometry}raycast(t,A){let r=this.localGeometry;this.localGeometry=this.originalGeometryNew,Lt.prototype.raycast.call(this,t,A),this.localGeometry=r}updateMatrixWorldSVD(){let t=this.matrixWorld.elements,A=[[t[0],t[4],t[8]],[t[1],t[5],t[9]],[t[2],t[6],t[10]]],{u:r,v:i,q:s}=(0,HC.SVD)(A),o=aH.set(r[0][0],r[0][1],r[0][2],0,r[1][0],r[1][1],r[1][2],0,r[2][0],r[2][1],r[2][2],0,0,0,0,1),a=lH.set(i[0][0],i[0][1],i[0][2],0,i[1][0],i[1][1],i[1][2],0,i[2][0],i[2][1],i[2][2],0,0,0,0,1),c=cH.copy(a).transpose();this.shearScale=uH.makeScale(s[0],s[1],s[2]).multiply(c).premultiply(a),this.shearScaleInv=dH.copy(this.shearScale).invert(),this.matrixWorldRigid.multiplyMatrices(o,c),s.every(l=>Math.abs(s[0]-l)<.01)&&(this.shearScale=void 0,this.shearScaleInv=void 0)}activateSVDCompensation(){this.shearScale!==void 0&&(this.matrixAutoUpdate=!1,this.matrix.copy(this.matrixWorldRigid).copyPosition(this.matrixWorld),this.hiddenMatrixOld.copy(this.hiddenMatrix),this.hiddenMatrix.copy(this.parent.matrixWorld).invert())}deactivateSVDCompensation(){this.shearScale!==void 0&&(this.shearScale=void 0,this.shearScaleInv=void 0,this.matrixAutoUpdate=!0,this.hiddenMatrix.copy(this.hiddenMatrixOld))}calcBoundingBox(){let t=this.originalGeometry;t.boundingSphere===null&&(t.boundingSphere=new uA,this.subdividedGeometry&&(this.subdividedGeometry.boundingSphere=t.boundingSphere));let A=t.attributes.position,r=t.boundingSphere.center;ii.setFromBufferAttribute(A),ii.getCenter(r),t.boundingSphere.radius=r.distanceTo(ii.max),isNaN(t.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this),ii.getSize(Bd),this.shearScale&&Bd.divide(this.scale);let i={width:Bd.x,height:Bd.y,depth:Bd.z};return this.geometry.userData.parameters=i,i}updateBoundingSphere(t){let A=this.originalGeometry;ii.min.set(t[0],t[2],t[4]),ii.max.set(t[1],t[3],t[5]),this.shearScaleInv&&(ii.min.applyMatrix4(this.shearScaleInv),ii.max.applyMatrix4(this.shearScaleInv)),A.boundingSphere===null&&(A.boundingSphere=new uA);let r=A.boundingSphere.center;ii.getCenter(r),A.boundingSphere.radius=r.distanceTo(ii.max)}freeSubdivPointer(){this.subdivPointer&&(sA.freeSubdivPointer(this.subdivPointer),this.subdivPointer=0),this.localGeometry=void 0,this.originalGeometry?.dispose(),this.subdividedGeometry?.dispose()}dispose(){super.dispose(),this.freeSubdivPointer()}updateByPatchedOpGeometry(t,A,r){super.updateByPatchedOpGeometry(t,A,r),this.localGeometry&&this.createGeometryByControls(A)}};var jC=-1,hH=1,YC={x:[1,0,0],"-x":[-1,0,0],y:[0,1,0],"-y":[0,-1,0],z:[0,0,1],"-z":[0,0,-1]},qC={polygon_center:0,edge:1,vertex:2},Nd=(n,e)=>(t,A)=>!e||t===0||n===0?0:n*A/100,tt=(n,e)=>{let t=Math.abs(e),A=t*-1;return(n-jC)*(t-A)/(hH-jC)+A};function XC(n){let e=[],t={};for(var A=0,r=n.length;A<r;A++){var i=JSON.stringify(n[A].pos.map(s=>Math.round(s*1e4)/1e4));t[i]||(e.push(n[A]),t[i]=!0)}return e}var fH=new S,lm=new S,pH=new S,mH=new S;function vc(n,e){let t=pH.fromArray(n),A=mH.fromArray(e);lm.copy(A).sub(t);let r=lm.length();return lm.normalize().multiplyScalar(r*.5),fH.copy(t).add(lm).toArray()}var nr=new Qt,cm=new S,um=new S,jo=new S;function QC(n){let e=[];for(let t=0;t<=n.index.count;t++)if(cm.fromArray(n.index.array,t*3),nr.setFromAttributeAndIndices(n.attributes.position,cm.x,cm.y,cm.z),nr.getNormal(um),nr.getMidpoint(jo),!(isNaN(jo.x)||isNaN(jo.y)||isNaN(jo.z))){let{a:A,b:r,c:i}=nr,s=A.toArray(),o=r.toArray(),a=i.toArray(),c=A.distanceTo(r),l=r.distanceTo(i),u=i.distanceTo(A),d=vc(s,o),h=vc(o,a),f=vc(a,s),p=[c,l,u],m=Math.max(...p),g=p.filter(b=>Math.round(b)===Math.round(m)).length>1,y=[],x=nr.getMidpoint(jo).toArray();m===c&&!g&&(y=[h,f,f],x=d),m===l&&!g&&(y=[d,f,f],x=h),m===u&&!g&&(y=[d,h,h],x=f),g&&(y=[d,h,f]),e.push({vertices:[s,o,a],faceCenters:y,midpoint:x,norm:nr.getNormal(um).toArray()})}return e}function KC(n){let e=[],{position:t}=n.attributes;for(let A=0;A<t.count;A++){nr.setFromAttributeAndIndices(t,A*3,A*3+1,A*3+2),nr.getNormal(um),nr.getMidpoint(jo);let r=nr.a.toArray(),i=nr.b.toArray(),s=nr.c.toArray();e.push({vertices:[r,i,s],faceCenters:[vc(r,i),vc(i,s),vc(s,r)],midpoint:jo.toArray(),norm:um.toArray()})}return e}var gH=4,yH=.5,Ax=n=>.5*(1-Math.cos(n*Math.PI)),nx=class{constructor(){this.perlin=new Array(4095+1)}noise(e,t=0,A=0){if(this.perlin==null){this.perlin=new Array(4095+1);for(let g=0;g<4095+1;g++)this.perlin[g]=Math.random()}e<0&&(e=-e),t<0&&(t=-t),A<0&&(A=-A);let r=Math.floor(e),i=Math.floor(t),s=Math.floor(A),o=e-r,a=t-i,c=A-s,l,u,d=0,h=.5,f,p,m;for(let g=0;g<gH;g++){let y=r+(i<<4)+(s<<8);l=Ax(o),u=Ax(a),f=this.perlin[y&4095],f+=l*(this.perlin[y+1&4095]-f),p=this.perlin[y+16&4095],p+=l*(this.perlin[y+16+1&4095]-p),f+=u*(p-f),y+=256,p=this.perlin[y&4095],p+=l*(this.perlin[y+1&4095]-p),m=this.perlin[y+16&4095],m+=l*(this.perlin[y+16+1&4095]-m),p+=u*(m-p),f+=Ax(c)*(p-f),d+=f*h,h*=yH,r<<=1,o*=2,i<<=1,a*=2,s<<=1,c*=2,o>=1&&(r++,o--),a>=1&&(i++,a--),c>=1&&(s++,c--)}return d}noiseSeed(e){let t=(()=>{let s,o;return{setSeed(a){o=s=(a??Math.random()*4294967296)>>>0},getSeed(){return s},rand(){return o=(1664525*o+1013904223)%4294967296,o/4294967296}}})();t.setSeed(e),this.perlin=new Array(4095+1);for(let A=0;A<4095+1;A++)this.perlin[A]=t.rand()}},ZC=nx;var JC=new S,$C=new de,eP=new hr;function rx(n){let e=!1;return n.scene.objects.traverse((t,A)=>{A.type==="Mesh"&&A.geometry.type==="TextGeometry"&&(e=!0)}),e}var xc=class extends eA{constructor(t,A,r){super(t,A,r);this.data=A}get textGeometry(){return this.geometry}get charWidths(){return this.textGeometry.charWidths}get charCoords(){return this.textGeometry.charCoords}get wrappedText(){return this.textGeometry.wrappedText}get font(){return this.textGeometry.font}get initialOffsetY(){let t=this.dataPatched;return this.font?.getLineInitialOffsetY(this.lineHeight,this.wrappedText.length,t.geometry.height,this.fontScale,t.geometry.verticalAlign)??0}get fontScale(){let t=this.dataPatched;return this.font?t.geometry.fontSize/this.font.unitsPerEm:1}get AD(){return Math.abs(this.ascender-this.descender)}get ascender(){return(this.font?.ascender??1)*this.fontScale}get descender(){return(this.font?.descender??1)*this.fontScale}get lineHeight(){let t=this.dataPatched;return t.geometry.fontSize*t.geometry.lineHeight}raycast(t,A){let{matrixWorld:r}=this;if($C.copy(r).invert(),eP.copy(t.ray).applyMatrix4($C),eP.intersectBox(this.singleBBox,JC)){let i=JC.applyMatrix4(r),s=t.ray.origin.distanceTo(i);A.push({distance:s,point:i.clone(),object:this})}}};var mn=1e-4,si,nP,rP,iP,tP=new S,AP=new S;ic.then(n=>{si=n,nP=[si.get_face_center,si.get_edge_midpoint,si.get_vertex_position],rP=[si.get_face_normal,si.get_edge_normal,si.get_vertex_normal],iP=[si.face_count,si.edge_count,si.vertex_count]});var vH=new de,xH=new de,Gs=new S,Yo=new S,Fd=new S,ix=new S,bH=new S,wH=new S;var Wi=new ZC,wc=class extends ql(dt){constructor(t,A){super();this.parameters=A;this.objectForSample=void 0;this._pendingMediaLoad=!1;this.object=t}resetOnMove(){this.removeFromParent(),this.parent=null}expandClones(t){if(this.parent===null)this.updateState(this.parameters,t);else for(let A of this.children)A instanceof Ui&&A.expand()}invalidateTransform(t){this.matrixWorldNeedsUpdate=!0,this.traverse(A=>{A instanceof Ui&&A.object===t&&(A.matrixWorldNeedsUpdate=!0)})}onObjUpdateMatrix(){this.parameters.type!=="toObject"&&(this.matrixWorldNeedsUpdate=!0)}update(){switch(this._updateCount(),this.parameters.type){case"radial":this._updateRadial(this.parameters);break;case"linear":this._updateLinear(this.parameters);break;case"grid":this._updateGrid(this.parameters);break;case"toObject":this._updateToObject(this.parameters)}}_updateCount(t){let A;if(t!==void 0?A=t:A=this.parameters.type==="grid"?this.parameters.grid.count[0]*this.parameters.grid.count[1]*this.parameters.grid.count[2]:this.parameters.count,this.parameters.type==="toObject"&&!this.parameters.toObject.object&&(A=0),this.parameters.type==="toObject"&&this.objectForSample){for(let i=0,s=this.children.length;i<s;++i)this.remove(this.children[0]);let r=this.children;if(r.length===A)return;if(r.length<A)for(let i=0,s=A-r.length;i<s;++i){let o=new Ui(this.object);o.expand(),this.add(o)}else for(let i=0,s=r.length-A;i<s;++i)this.remove(r[i])}else{if(this.children.length===A)return;if(this.children.length<A)for(let r=0,i=A-this.children.length;r<i;++r){let s=new Ui(this.object);s.expand(),this.add(s)}else for(let r=0,i=this.children.length-A;r<i;++r)this.remove(this.children[0])}}_updateRadial(t){let A=t.radial,r=A.start*Ve.DEG2RAD,i=A.end*Ve.DEG2RAD,s=r-i,o=new jt(A.rotation[0],A.rotation[1],A.rotation[2]),a;switch(A.axis){case"z":a=new S(0,0,1);break;case"y":a=new S(0,1,0);break;default:case"x":a=new S(1,0,0);break}let c=t.randomnessObject??Xr.defaultData([1,1,1]).randomnessObject,l=c.noiseType==="perlin";Wi.noiseSeed(c.seed);let u=Np((0,bc.default)(c.seed)),d=Nd(c.strength,this.parameters.randomness);for(let[h,f]of this.children.entries()){let p=h*(c.freqScale/10)+c.movement,m=l?Wi.noise(p):u(p,p);f.scale.x=A.scale[0]+d(h,tt(m,c.scale[0]))||mn,f.scale.y=A.scale[1]+d(h,tt(m,c.scale[1]))||mn,f.scale.z=A.scale[2]+d(h,tt(m,c.scale[2]))||mn,f.position.setScalar(0);let g=s/t.count*h-r;switch(A.axis){case"x":f.rotation.set(0,g,0);break;case"y":f.rotation.set(0,0,g);break;case"z":f.rotation.set(g,0,0);break}f.translateOnAxis(a,A.radius),f.position.x+=A.position[0]+d(h,tt(m,c.position[0])),f.position.y+=A.position[1]+d(h,tt(m,c.position[1])),f.position.z+=A.position[2]+d(h,tt(m,c.position[2]));let y=d(h,tt(m,c.rotation[0])),x=d(h,tt(m,c.rotation[1])),b=d(h,tt(m,c.rotation[2]));A.alignment===!0?(f.rotation.x+=o.x+y,f.rotation.y+=o.y+x,f.rotation.z+=o.z+b):f.rotation.set(o.x+y,o.y+x,o.z+b)}}_updateLinear(t){if(t.type!=="linear")throw new Error;let A=t.linear,r=new jt(A.rotation[0],A.rotation[1],A.rotation[2]),i=t.randomnessObject??Xr.defaultData([1,1,1]).randomnessObject,s=i.noiseType==="perlin";Wi.noiseSeed(i.seed);let o=Np((0,bc.default)(i.seed)),a=Nd(i.strength,this.parameters.randomness);for(let[c,l]of this.children.entries()){let u=c*(i.freqScale/10)+i.movement,d=s?Wi.noise(u):o(u,u),h=a(c,tt(d,i.rotation[0])),f=a(c,tt(d,i.rotation[1])),p=a(c,tt(d,i.rotation[2]));l.scale.x=1+(A.scale[0]-1)*c+a(c,tt(d,i.scale[0]))||mn,l.scale.y=1+(A.scale[1]-1)*c+a(c,tt(d,i.scale[1]))||mn,l.scale.z=1+(A.scale[2]-1)*c+a(c,tt(d,i.scale[2]))||mn,l.rotation.x=r.x*c+h,l.rotation.y=r.y*c+f,l.rotation.z=r.z*c+p,l.position.x=A.position[0]*c+a(c,tt(d,i.position[0])),l.position.y=A.position[1]*c+a(c,tt(d,i.position[1])),l.position.z=A.position[2]*c+a(c,tt(d,i.position[2]))}}_updateGrid(t){let A=0,r=t.grid,i=t.randomnessObject??Xr.defaultData([1,1,1]).randomnessObject,s=Nd(i.strength,this.parameters.randomness),o=i.noiseType==="perlin";Wi.noiseSeed(i.seed);let a=vE((0,bc.default)(i.seed));if(r.useCenter===!0){let c={x:r.count[0]%2===0?2:1,y:r.count[1]%2===0?2:1,z:r.count[2]%2===0?2:1},l=new S(r.size[0]*(r.count[0]-c.x)*.5,r.size[1]*(r.count[1]-c.y)*.5,r.size[2]*(r.count[2]-c.z)*.5);for(let u=0;u<r.count[0];u++)for(let d=0;d<r.count[1];d++)for(let h=0;h<r.count[2];h++){let f=[(u+1)*(i.freqScale/10)+i.movement,(d+1)*(i.freqScale/10)+i.movement,(h+1)*(i.freqScale/10)+i.movement],p=o?Wi.noise(...f):a(...f),m=this.children[A++];m.scale.x=1+s(A,tt(p,i.scale[0]))||mn,m.scale.y=1+s(A,tt(p,i.scale[1]))||mn,m.scale.z=1+s(A,tt(p,i.scale[2]))||mn;let g=s(A,tt(p,i.rotation[0])),y=s(A,tt(p,i.rotation[1])),x=s(A,tt(p,i.rotation[2]));m.rotation.set(g,y,x),m.position.x=r.size[0]*u-l.x+s(A,tt(p,i.position[0])),m.position.y=r.size[1]*d-l.y+s(A,tt(p,i.position[1])),m.position.z=r.size[2]*h-l.z+s(A,tt(p,i.position[2]))}}else for(let c=0;c<r.count[0];c++)for(let l=0;l<r.count[1];l++)for(let u=0;u<r.count[2];u++){let d=[(c+1)*(i.freqScale/10)+i.movement,(l+1)*(i.freqScale/10)+i.movement,(u+1)*(i.freqScale/10)+i.movement],h=o?Wi.noise(...d):a(...d),f=this.children[A++];f.scale.x=1+s(A,tt(h,i.scale[0]))||mn,f.scale.y=1+s(A,tt(h,i.scale[1]))||mn,f.scale.z=1+s(A,tt(h,i.scale[2]))||mn;let p=s(A,tt(h,i.rotation[0])),m=s(A,tt(h,i.rotation[1])),g=s(A,tt(h,i.rotation[2]));f.rotation.set(p,m,g),f.position.x=r.size[0]*c+s(A,tt(h,i.position[0])),f.position.y=-r.size[1]*l+s(A,tt(h,i.position[1])),f.position.z=-r.size[2]*u+s(A,tt(h,i.position[2]))}}_updateToObject(t){if(t.type!=="toObject")throw new Error;let{toObject:A}=t,r=new jt(A.rotation[0],A.rotation[1],A.rotation[2]),i=t.randomnessObject??Xr.defaultData([1,1,1]).randomnessObject,s=i.noiseType==="perlin";Wi.noiseSeed(i.seed);let o=Np((0,bc.default)(i.seed)),a=Nd(i.strength,this.parameters.randomness);if(!A.object){for(let[,g]of this.children.entries())g.position.set(0,0,0),g.scale.setScalar(1),g.rotation.set(0,0,0);this.objectForSample=void 0;return}if(!this.objectForSample)return;if(this.objectForSample instanceof xc)if(!this.objectForSample.font?.isLoaded||this.objectForSample.geometry.attributes.position===void 0){this._pendingMediaLoad=!0;return}else this._pendingMediaLoad=!1;let c=this.getSubdivData(),l=[],u=g=>{let y=g.length,x=g.map(T=>T[0]).reduce((T,M)=>T+M,0),b=g.map(T=>T[1]).reduce((T,M)=>T+M,0),w=g.map(T=>T[2]).reduce((T,M)=>T+M,0);return[x/y,b/y,w/y]},d=g=>Math.round(g*1e6)/1e6;c.forEach(g=>{let y=c.filter(x=>d(g.pos[0])===d(x.pos[0])&&d(g.pos[1])===d(x.pos[1])&&d(g.pos[2])===d(x.pos[2]));y.length>1?l.push({pos:g.pos,norm:u(y.map(x=>x.norm))}):l.push(g)});let h=XC(l);if(c.length>0){let g=Math.round(h.length*A.count/100);this._updateCount(g)}this.objectForSample.updateMatrixWorld();let f=new Fp(this.objectForSample).build(),p=YC[A.axis],m=this.children;f.setRandomGenerator((0,bc.default)(this.object.uuid+A.seed));for(let[g,y]of m.entries()){let x=g*(i.freqScale/10)+i.movement,b=s?Wi.noise(x):o(x,x),w=a(g,tt(b,i.rotation[0])),T=a(g,tt(b,i.rotation[1])),M=a(g,tt(b,i.rotation[2]));A.spreadType==="random"?f.sample(Fd,ix):(h.length&&(Fd.fromArray(h[g].pos),ix.fromArray(h[g].norm)),this.objectForSample instanceof Er&&Fd.applyMatrix4(vH.copy(this.objectForSample.matrixWorld).invert())),Fd.applyMatrix4(this.object.hiddenMatrix.clone().invert()),y.position.copy(Fd),Gs.fromArray(p);let v=A.align==="normal"?ix:this.object.getWorldDirection(wH),E=Yo.fromArray(A.position);Yo.x+=Yo.x+a(g,tt(b,i.position[0])),Yo.y+=Yo.y+a(g,tt(b,i.position[1])),Yo.z+=Yo.z+a(g,tt(b,i.position[2]));let C=Math.acos(v.dot(Gs)),P=bH.crossVectors(Gs,v).normalize(),D=xH.makeRotationAxis(P,C),L=v.clone().cross(this.object.up).normalize(),I=L.clone().cross(v).normalize(),B=new de().makeBasis(L,v,I),N=new S(Gs.y,Gs.z,Gs.x).normalize(),W=N.clone().cross(Gs).normalize(),X=new de().makeBasis(N,Gs,W).invert(),F=new de().multiplyMatrices(B,X);y.rotation.setFromRotationMatrix(F),E.applyMatrix4(D),y.position.add(E),y.rotation.x=y.rotation.x+r.x+w,y.rotation.y=y.rotation.y+r.y+T,y.rotation.z=y.rotation.z+r.z+M,y.scale.setScalar(1),y.scale.x=y.scale.x+A.scale[0]+a(g,tt(b,i.scale[0]))||mn,y.scale.y=y.scale.y+A.scale[1]+a(g,tt(b,i.scale[1]))||mn,y.scale.z=y.scale.z+A.scale[2]+a(g,tt(b,i.scale[2]))||mn,y.scale.multiply(this.object.scale),y.hiddenMatrix=this.object.hiddenMatrix}}getSubdivData(){if(!this.objectForSample)return[];let t=this.parameters.toObject.spreadType;if(t==="random")return[];if(this.objectForSample instanceof Er){let A=this.objectForSample,r=qC[t],i=iP[r],s=nP[r],o=rP[r],a=[],c=i(A.subdivPointerNew);for(let l=0;l<=c-1;l++){let u=s(A.subdivPointerNew,l),d=o(A.subdivPointerNew,l);tP.fromArray(u).applyMatrix4(A.matrixWorld),AP.fromArray(d),a.push({pos:tP.toArray(),norm:AP.toArray()})}return a}else return(this.objectForSample.geometry.index?QC(this.objectForSample.geometry):KC(this.objectForSample.geometry)).map((r,i)=>t==="polygon_center"?{pos:r.midpoint,norm:r.norm}:t==="vertex"?[{pos:r.vertices[0],norm:r.norm},{pos:r.vertices[1],norm:r.norm},{pos:r.vertices[2],norm:r.norm}]:t==="edge"?[{pos:r.faceCenters[0],norm:r.norm},{pos:r.faceCenters[1],norm:r.norm},{pos:r.faceCenters[2],norm:r.norm}]:[]).flat()}updateState(t,A){if(this.parameters=wo(t),this.parameters.type!=="toObject")(this.parent===null||this.parent!==this.object)&&(this.removeFromParent(),this.object.parent?.add(this),this.matrix=this.object.matrix,this.hiddenMatrix=this.object.hiddenMatrix,this.matrixWorldNeedsUpdate=!0,this.matrixAutoUpdate=!1);else if(this.parent===null||this.parent.uuid!==this.parameters.toObject.object){this.removeFromParent();let r=A.find(this.parameters.toObject.object);r instanceof Lt?this.objectForSample=r:this.objectForSample=void 0,this.matrix=new de,this.hiddenMatrix=new de,this.matrixWorldNeedsUpdate=!0,this.matrixAutoUpdate=!1,r&&r.add(this)}this.update()}get pendingMediaLoad(){return this._pendingMediaLoad}};var oi=n=>{var e;return e=class extends n{},e.geometryHelper=new IA(30,30,30),e};var dm=new hr,sx=new uA,sP=new de,ai=(n,e,t,A,r=!1)=>{let i=e,s=n.matrixWorld;if(i.boundingSphere===null&&i.computeBoundingSphere(),sx.copy(i.boundingSphere),sx.applyMatrix4(s),t.ray.intersectsSphere(sx)===!1||(sP.copy(s).invert(),dm.copy(t.ray).applyMatrix4(sP),i.boundingBox!==null&&dm.intersectsBox(i.boundingBox)===!1))return;let o,a,c,l,u=i.index,d=i.attributes.position,h=i.drawRange,f,p;if(r===!1){let g=Math.max(0,h.start),y=Math.min(u.count,h.start+h.count);for(f=g,p=y;f<p;f+=3)if(a=u.getX(f),c=u.getX(f+1),l=u.getX(f+2),o=m(n,t,dm,d,a,c,l),o){o.faceIndex=Math.floor(f/3),A.push(o);return}}else{let y=i.attributes.position,x=new S,b=new S,w=new S,T=new S,M=2,E=1/((n.scale.x+n.scale.y+n.scale.z)/3),C=E*E,P=Math.max(0,h.start),D=Math.min(y.count,h.start+h.count);for(let L=P,I=D-1;L<I;L+=M){if(x.fromBufferAttribute(y,L),b.fromBufferAttribute(y,L+1),dm.distanceSqToSegment(x,b,T,w)>C)continue;T.applyMatrix4(n.matrixWorld);let N=t.ray.origin.distanceTo(T);N<t.near||N>t.far||A.push({distance:N,point:w.clone().applyMatrix4(n.matrixWorld),object:n})}}function m(g,y,x,b,w,T,M){let v=new S,E=new S,C=new S,P=new S,D=new S;if(v.fromBufferAttribute(b,w),E.fromBufferAttribute(b,T),C.fromBufferAttribute(b,M),x.intersectTriangle(v,E,C,!1,P)===null)return null;D.copy(P),D.applyMatrix4(g.matrixWorld);let I=y.ray.origin.distanceTo(D);return I<y.near||I>y.far?null:{faceIndex:1,distance:I,point:D.clone(),object:g}}};var hm=new S,rr=new fr,ox=class extends cs{constructor(t){let A=new Ie,r=new Qn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={},a=new Le(15711266),c=new Le(15711266),l=new Le(2857471);u("n1","n2",a),u("n2","n4",a),u("n4","n3",a),u("n3","n1",a),u("f1","f2",a),u("f2","f4",a),u("f4","f3",a),u("f3","f1",a),u("n1","f1",a),u("n2","f2",a),u("n3","f3",a),u("n4","f4",a),u("p","n1",c),u("p","n2",c),u("p","n3",c),u("p","n4",c),u("u1","u2",l),u("u2","u3",l),u("u3","u1",l);function u(h,f,p){d(h,p),d(f,p)}function d(h,f){i.push(0,0,0),s.push(f.r,f.g,f.b),o[h]===void 0&&(o[h]=[]),o[h].push(i.length/3-1)}A.setAttribute("position",new Se(i,3)),A.setAttribute("color",new Se(s,3));super(A,r);this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update()}update(){let t=this.geometry,A=this.pointMap,r=!0;rr.projectionMatrixInverse.elements=[.5112609807824982,-0,-0,-0,-0,.41421356237309503,-0,-0,-0,-0,-0,-.099999,-0,-0,-1.0000000000000002,.100001];let i=1,s=1,o=r?.8:1e-4;Cr("n1",A,t,rr,-i,-s,o),Cr("n2",A,t,rr,i,-s,o),Cr("n3",A,t,rr,-i,s,o),Cr("n4",A,t,rr,i,s,o);let a=o;Cr("f1",A,t,rr,-i,-s,a),Cr("f2",A,t,rr,i,-s,a),Cr("f3",A,t,rr,-i,s,a),Cr("f4",A,t,rr,i,s,a);let c=a,l=.5;Cr("u1",A,t,rr,i*.7*l,s*1.1,c),Cr("u2",A,t,rr,-i*.7*l,s*1.1,c),Cr("u3",A,t,rr,0,s*(1.1+.9*l),c),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Cr(n,e,t,A,r,i,s){hm.set(r,i,s).unproject(A);let o=e[n];if(o!==void 0){let a=t.getAttribute("position");for(let c=0,l=o.length;c<l;c++)a.setXYZ(o[c],hm.x,hm.y,hm.z)}}var fm=class extends oi(ox){constructor(t){super(t);this.object=t;this.object=t,this.name=`CombinedCameraHelper: ${t.uuid}`}updateMatrixWorld(t){super.updateMatrixWorld(t),this.updateTarget()}updateTarget(){let t=this.object.getTarget();this.updateWorldMatrix(!0,!1),this.worldToLocal(t)}raycast(t,A){ai(this.object,this.geometry,t,A,!0)}};var pm;(e=>e.is=t=>"objectHelper"in t)(pm||(pm={}));var ks=(n,e)=>class extends Gp(n){constructor(){super(...arguments);this.objectHelper=new e(this);this.gizmos={}}get geometryHelper(){return e.geometryHelper}raycast(r,i){this.objectHelper.raycast(r,i)}showGizmos(){for(let r in this.gizmos){let i=this.gizmos[r];i instanceof fs&&(i.visible=!0)}}updateEntityBoxSize(r,i){this.objectHelper.visible&&this.geometryHelper instanceof IA?(r.setScalar(0),i.set(this.geometryHelper.parameters.width,this.geometryHelper.parameters.height,this.geometryHelper.parameters.height).multiplyScalar(.5)):super.updateEntityBoxSize(r,i)}hideGizmos(){for(let r in this.gizmos){let i=this.gizmos[r];i instanceof fs&&(i.visible=!1)}}};var Sc=new S,ax=new S,VA=class extends ks(fr,fm){constructor(t="",A={...Dl.defaultData,name:""}){super();this._cameraType="OrthographicCamera";this.targetOffset=Po.DefaultTargetOffset;this.isUpVectorFlipped=!1;this.angleOffsetFromUp=0;this.super_Entity(t,A),this.matrixAutoUpdate=!0,this.width=window.innerWidth,this.height=window.innerHeight;let r=this.width,i=this.height;this.orthoCamera=new Ta(r*-.5,r*.5,i*.5,i*-.5,-5e4,1e4),this.perspCamera=new nA(45,r/i,50,1e4),this.left=this.orthoCamera.left,this.right=this.orthoCamera.right,this.top=this.orthoCamera.top,this.bottom=this.orthoCamera.bottom,this.far=this.orthoCamera.far,this.view=this.orthoCamera.view,this.aspect=this.perspCamera.aspect,this.focus=this.perspCamera.focus,this.filmGauge=this.perspCamera.filmGauge,this.filmOffset=this.perspCamera.filmOffset,this.objectHelper.update()}get isPerspectiveCamera(){return this.cameraType==="PerspectiveCamera"}get isOrthographicCamera(){return!this.isPerspectiveCamera}get cameraType(){return this._cameraType}set fov(t){this.perspCamera.fov=t}get fov(){return this.perspCamera.fov}setNear(t,A){t==="PerspectiveCamera"?this.perspCamera.near=A:this.orthoCamera.near=A}setZoom(t,A){A>=0&&(t==="PerspectiveCamera"?this.perspCamera.zoom=A:this.orthoCamera.zoom=A)}set cameraType(t){t==="PerspectiveCamera"?this.toPerspective():t==="OrthographicCamera"&&this.toOrthographic()}get near(){return this._cameraType==="PerspectiveCamera"?this.perspCamera.near:this.orthoCamera.near}set near(t){this._cameraType==="PerspectiveCamera"?this.perspCamera.near=t:this.orthoCamera.near=t}get zoom(){return this._cameraType==="PerspectiveCamera"?this.perspCamera.zoom:this.orthoCamera.zoom}set zoom(t){t>=0&&(this._cameraType==="PerspectiveCamera"?this.perspCamera.zoom=t:this.orthoCamera.zoom=t)}lookAt(t){super.lookAt(t),this.getWorldPosition(Sc),this.targetOffset=Sc.distanceTo(t)}getTarget(t=new S){return this.getWorldDirection(ax),this.getWorldPosition(Sc),ax.multiplyScalar(this.targetOffset),t.copy(Sc).add(ax),t}getDistanceToTarget(){let t=this.getTarget();return this.getWorldPosition(Sc),Sc.distanceTo(t)}updateUp(){let t=this.getWorldQuaternion(new Ze),A=new S(0,0,1).applyQuaternion(t),r=new S().copy(dt.DefaultUp);this.isUpVectorFlipped&&r.negate(),r.applyQuaternion(t);let i=new S().copy(dt.DefaultUp).projectOnPlane(A),s=new S().crossVectors(i,r).dot(A)>=0?1:-1;this.angleOffsetFromUp=i.angleTo(r)*s}updateTransformState(t){let A=super.updateTransformState(t);return t.isUpVectorFlipped!==void 0&&(this.isUpVectorFlipped=t.isUpVectorFlipped),this.updateUp(),A}getViewFrontToObject(t){let A=t.getWorldPosition(new S),i=t.getWorldDirection(new S).multiplyScalar(this.targetOffset);return{position:A.clone().add(i),target:A}}getViewToObject(t){let A=t.getWorldPosition(new S),i=this.getWorldDirection(new S).multiplyScalar(this.targetOffset);return{position:A.clone().sub(i),target:A}}setViewplaneSize(t,A){this.left=-t*.5,this.right=t*.5,this.top=A*.5,this.bottom=-A*.5,this.aspect=t/A,this.updateProjectionMatrix()}toOrthographic(){this.orthoCamera.left=this.left,this.orthoCamera.right=this.right,this.orthoCamera.top=this.top,this.orthoCamera.bottom=this.bottom,this.orthoCamera.view=this.view,this.orthoCamera.far=this.far,this.orthoCamera.updateProjectionMatrix(),this.projectionMatrix=this.orthoCamera.projectionMatrix,this.projectionMatrixInverse=this.orthoCamera.projectionMatrixInverse,this._cameraType="OrthographicCamera",this.objectHelper&&this.objectHelper.update()}toPerspective(){this.perspCamera.aspect=this.aspect,this.perspCamera.fov=this.fov,this.perspCamera.view=this.view,this.perspCamera.far=this.far,this.perspCamera.updateProjectionMatrix(),this.projectionMatrix=this.perspCamera.projectionMatrix,this.projectionMatrixInverse=this.perspCamera.projectionMatrixInverse,this._cameraType="PerspectiveCamera",this.objectHelper&&this.objectHelper.update()}setFocalLength(t){this.perspCamera.setFocalLength(t),this.toPerspective()}getFocalLength(){return this.perspCamera.getFocalLength()}getEffectiveFOV(){return this.perspCamera.getEffectiveFOV()}getFilmWidth(){return this.perspCamera.getFilmWidth()}getFilmHeight(){return this.perspCamera.getFilmHeight()}setViewOffset(t,A,r,i,s,o){this._cameraType==="PerspectiveCamera"?this.perspCamera.setViewOffset(t,A,r,i,s,o):this.orthoCamera.setViewOffset(t,A,r,i,s,o)}clearViewOffset(){this._cameraType==="PerspectiveCamera"?(this.perspCamera.clearViewOffset(),this.toPerspective()):(this.orthoCamera.clearViewOffset(),this.toOrthographic())}updateProjectionMatrix(){this._cameraType==="PerspectiveCamera"?this.toPerspective():this._cameraType==="OrthographicCamera"&&this.toOrthographic()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,A){super.updateWorldMatrix(t,A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}copy(t,A){return super.copy(t,A),this.orthoCamera.copy(t.orthoCamera),this.perspCamera.copy(t.perspCamera),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.far=t.far,this.view=t.view===null?null:Object.assign({},t.view),this._cameraType=t._cameraType,this.aspect=t.aspect,this.fov=t.fov,this.focus=t.focus,this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this.targetOffset=t.targetOffset,this.updateProjectionMatrix(),this}toCameraState(t=[]){let A={type:this.cameraType,far:this.far,orthographic:{near:this.orthoCamera.near,zoom:this.orthoCamera.zoom},perspective:{near:this.perspCamera.near,fov:this.perspCamera.fov,zoom:this.perspCamera.zoom},up:this.up.toArray(),targetOffset:this.targetOffset,isUpVectorFlipped:this.isUpVectorFlipped};return ml(A,t)}updateCameraSubtype(t,A){let r=t==="perspective"?"PerspectiveCamera":"OrthographicCamera";A.zoom!==void 0&&this.setZoom(r,A.zoom),A.near!==void 0&&this.setNear(r,A.near),A.fov!==void 0&&r==="PerspectiveCamera"&&(this.fov=A.fov)}updateState(t){this.updateCameraState(t)}updateCameraState(t){this.updateState_Entity(t,{}),t.far!==void 0&&(this.far=t.far),t.orthographic!==void 0&&this.updateCameraSubtype("orthographic",t.orthographic),t.perspective!==void 0&&this.updateCameraSubtype("perspective",t.perspective),t.type!==void 0&&(this.cameraType=t.type),t.up!==void 0&&this.up.fromArray(t.up),t.targetOffset!==void 0&&(this.targetOffset=t.targetOffset),t.isUpVectorFlipped!==void 0&&(this.isUpVectorFlipped=t.isUpVectorFlipped),this.updateProjectionMatrix()}updateByPatchedOp(t,A,r){super.updateByPatchedOp(t,A,r),t.path.length===1&&t.type===0&&this.updateCameraSubtype(t.path[0],t.props)}toState(t){return{...super.toState(t),...this.toCameraState(t),type:this.cameraType}}};var oP=new de;function lx(n){let e=!1;return n.scene.objects.traverse((t,A)=>{A.geometry?.type==="BooleanGeometry"&&(e=!0)}),e}var ir=class extends Hi{constructor(t,A,r){super(t,A);this.data=A;this.meshSetAddresses=[];this.needsTransformForDownstream=!1;this.geometry=new Ie;this.geometry.userData.parameters={width:0,height:0,depth:0}}get booleanOp(){return this.data.geometry.operation}get phongAngle(){return this.data.geometry.phongAngle??45}get isLOD(){return this.recomputeBoolean(),!1}updateByPatchedOp(t,A,r){super.updateByPatchedOp(t,A,r),t.path.length===1&&t.path[0]==="geometry"&&t.type===0&&t.props.operation!==void 0&&(this.freeBooleanPointer(),this.resetBBoxNeedsUpdate())}freeBooleanPointer(){super.freeBooleanPointer(),this.geometry.dispose()}recomputeBoolean(t,A=!0){if(this.booleanMeshSetAddress!==-1)return;for(let i=0;i<this.children.length;i++){let s=this.children[i];s instanceof ir&&s.recomputeBoolean(t===!0,A)}this.meshSetAddresses=[];for(let i=0;i<this.children.length;i++){let s=this.children[i];if(s instanceof Lt&&s.dataPatched.visible===!0&&s.geometry.attributes.position?.count>0&&s.geometry.drawRange.count>0){if(s.booleanMeshSetAddress===-1){if((s.geometry.index??s.geometry.getAttribute("position")).count/3<15e5&&(s.booleanMeshSetAddress=wr.getMeshSet(s.geometry,t===!0,A)),s.booleanMeshSetAddress===-1)return;wr.transformMeshSet(s.booleanMeshSetAddress,s.matrix),s.booleanMatrixInvOld.copy(s.matrix).invert(),s.booleanWasTransformed=!1}else s instanceof ir&&s.needsTransformForDownstream===!0?(wr.transformMeshSet(s.booleanMeshSetAddress,s.matrix),s.needsTransformForDownstream=!1):s.booleanWasTransformed===!0&&(oP.multiplyMatrices(s.matrix,s.booleanMatrixInvOld),wr.transformMeshSet(s.booleanMeshSetAddress,oP),s.booleanMatrixInvOld.copy(s.matrix).invert(),s.booleanWasTransformed=!1);this.meshSetAddresses.push(s.booleanMeshSetAddress)}}if(this.meshSetAddresses.length===0){this.geometry.setAttribute("position",new Xh([],0)),this.geometry.setDrawRange(0,0);return}if(t===!0)return wr.calcBooleanTopological(this.meshSetAddresses,this.booleanOp);let r=this.geometry;r.dispose(),this.geometry=new Ie,this.geometry.userData=r.userData,this.geometry.boundingSphere=r.boundingSphere;try{this.booleanMeshSetAddress=wr.calcBoolean(this.meshSetAddresses,this.booleanOp,this.geometry,this.phongAngle)}catch(i){this.booleanMeshSetAddress=0,console.error(i)}this.booleanMatrixInvOld.copy(this.matrix).invert(),this.needsTransformForDownstream=!0,gc(this),yc(this)}dispose(){super.dispose(),this.geometry.dispose()}};var mm;(e=>{function n(t){return Yt.is(t)&&t instanceof ds}e.is=n})(mm||(mm={}));var Tc=(n,e)=>class extends ks(n,e){updateState_Light(A,r){this.updateState_Entity(A,r),A.color!==void 0&&(this.color=r.shared.color(A.color)),A.intensity!==void 0&&(this.intensity=A.intensity),A.depth!==void 0&&(this.shadow.camera.far=A.depth,this.shadow.needsUpdate=!0),A.shadows!==void 0&&(this.castShadow=A.shadows)}};var MA=n=>n instanceof Lt,Hn=n=>n!==null&&n instanceof ir,aP=n=>n instanceof VA,lP=n=>mm.is(n),cP=n=>pm.is(n);var Us=class extends oi(cf){constructor(t,A=15){super(A);this.object=t;this.object.updateMatrixWorld(),this.name=`EmptyObjectHelper: ${t.uuid}`,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}raycast(t,A){ai(this.object,Us.geometryHelper,t,A)}update(){}};var qo=class extends ks(Fr,Us){constructor(e,t){super(),this.super_Entity(e,t),this.objectHelper.update()}updateState(e,t){this.updateState_Entity(e,t)}};var Mc=class extends oi(lf){constructor(t,A=15,r=10066329){super(t,A,r);this.object=t;this.added=!1;this.name=`DirectionalLightHelper: ${t.uuid}`}raycast(t,A){ai(this.object,Mc.geometryHelper,t,A)}};var Ec=class extends oi(af){constructor(t,A=15,r=6710886){super(t,A,r);this.object=t;this.name=`PointLightHelper: ${t.uuid}`}raycast(t,A){ai(this.object,Ec.geometryHelper,t,A)}};var gm=class extends oi(of){constructor(t,A=6710886){super(t,A);this.object=t;this.name=`SpotLightHelper: ${t.uuid}`}raycast(t,A){ai(this.object,gm.geometryHelper,t,A)}update(){if(this.object!==void 0){let t=gm._vector,A=this.object.distance?this.object.distance:1e3,r=A*Math.tan(this.object.angle);this.cone.scale.set(r,r,A),t.setFromMatrixPosition(this.object.target.matrixWorld),this.cone.lookAt(t);let i=this.color!==void 0?this.color:this.light.color;if(this.cone.material instanceof Array)for(let s=0,o=this.cone.material.length;s<o;s++)this.cone.material[s].color.set(i);else this.cone.material.color.set(i)}}},Gd=gm;Gd._vector=new S;function TH(n,e){n.shadow.camera.right=e/2,n.shadow.camera.left=-e/2,n.shadow.camera.top=e/2,n.shadow.camera.bottom=-e/2,n.shadow.needsUpdate=!0}var ym=class extends Tc(nf,Mc){constructor(e,t,A){super(),this.super_Entity(e,t),this.castShadow=!0,this.shadow.mapSize.width=2048,this.shadow.mapSize.height=2048,this.shadow.normalBias=1,this.layers.enable(3);let i=this.shadow.camera;i.top=1250,i.bottom=-1250,i.right=1250,i.left=-1250,i.near=-1e4,i.far=2500;let s=new hs(this.shadow.camera);s.visible=!1,this.gizmos.shadowmap=s}update(){this.shadow.camera.updateProjectionMatrix();for(let e in this.gizmos){let t=this.gizmos[e];t instanceof hs&&t.update()}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.objectHelper&&this.objectHelper.update()}updateState(e,t){this.updateState_Light(e,t);let A=e.depth!==void 0&&e.depth!==this.shadow.camera.far||e.size!==void 0&&e.size/2!==this.shadow.camera.right;e.size!==void 0&&TH(this,e.size),e.shadowRadius!==void 0&&(this.shadow.radius=e.shadowRadius),e.shadowResolution!==void 0&&(this.shadow.mapSize.set(e.shadowResolution,e.shadowResolution),this.shadow.map&&(this.shadow.map.dispose(),this.shadow.map=null)),A&&this.update()}};var vm=class extends Tc(Af,Ec){constructor(e,t,A){super(),this.super_Entity(e,t),this.castShadow=!0,this.shadow.mapSize.width=1024,this.shadow.mapSize.height=1024,this.shadow.normalBias=1,this.layers.enable(3);let i=this.shadow.camera;i.fov=90,i.aspect=1,i.near=100,i.far=2500;let s=new S(-i.far+this.position.x,-i.far+this.position.y,-i.far+this.position.z),o=new S(i.far+this.position.x,i.far+this.position.y,i.far+this.position.z),a=new mt(s,o),c=new fs(a,new Le(16755200));c.visible=!1,this.gizmos.shadowmap=c,this.update()}update(){if(this.shadow&&(this.shadow.camera.updateProjectionMatrix(),this.gizmos))for(let e in this.gizmos){let t=this.gizmos[e];if(t instanceof fs){let A=this.shadow.camera,r=new S(-A.far+this.position.x,-A.far+this.position.y,-A.far+this.position.z),i=new S(A.far+this.position.x,A.far+this.position.y,A.far+this.position.z);t.box.set(r,i),t.updateMatrixWorld(!0)}}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.objectHelper&&this.objectHelper.update()}updateState(e,t){this.updateState_Light(e,t),e.distance!==void 0&&(this.distance=e.distance),e.decay!==void 0&&(this.decay=e.decay),e.shadowRadius!==void 0&&(this.shadow.radius=e.shadowRadius),e.shadowResolution!==void 0&&(this.shadow.mapSize.set(e.shadowResolution,e.shadowResolution),this.shadow.map&&(this.shadow.map.dispose(),this.shadow.map=null))}};var uP=new S,dP=new S,hP=new Ze,xm=class extends Tc(tf,Gd){constructor(e,t,A){super(),this.super_Entity(e,t),this.castShadow=!0,this.shadow.mapSize.width=1024,this.shadow.mapSize.height=1024,this.shadow.normalBias=1,this.layers.enable(3);let i=this.shadow.camera;i.fov=Ve.RAD2DEG*2*this.angle,i.aspect=1,i.near=100,i.far=2500;let s=new hs(this.shadow.camera);s.visible=!1,this.gizmos.shadowmap=s,this.update()}update(){this.shadow.camera.updateProjectionMatrix();for(let e in this.gizmos){let t=this.gizmos[e];t instanceof hs&&t.update()}}updateMatrixWorld(e){super.updateMatrixWorld(e),dP.setFromMatrixPosition(this.matrixWorld),hP.setFromRotationMatrix(this.matrixWorld),uP.copy(this.up).applyQuaternion(hP).negate().multiplyScalar(this.distance),this.target.position.copy(dP).add(uP),this.target.updateMatrixWorld(),this.objectHelper&&this.objectHelper.update()}updateState(e,t){this.updateState_Light(e,t),e.distance!==void 0&&(this.distance=e.distance),e.decay!==void 0&&(this.decay=e.decay),e.angle!==void 0&&(this.angle=e.angle),e.penumbra!==void 0&&(this.penumbra=e.penumbra),e.shadowRadius!==void 0&&(this.shadow.radius=e.shadowRadius),e.shadowResolution!==void 0&&(this.shadow.mapSize.set(e.shadowResolution,e.shadowResolution),this.shadow.map&&(this.shadow.map.dispose(),this.shadow.map=null))}};var bm=class extends eA{get forceComputeSize(){return!0}get shape(){return this.geometry.userData.shape}constructor(e,t,A){super(e,t,A)}updateEntityBoxSize(e,t){let A=this.geometry.getAttribute("position");A!==void 0?I0(A,this.geometry.drawRange.start,this.geometry.drawRange.count<1/0?this.geometry.drawRange.count:A.count,e,t):super.updateEntityBoxSize(e,t)}};var Pr=class extends ks(Fr,Us){constructor(t,A,r){super();A.type==="Instance"&&typeof t=="string"&&(A=this.transformAssignData(A,r)),this.super_Entity(t,A),this.objectHelper.update()}get isComponentRoot(){return this.data.type==="Component"&&typeof this.identity=="string"}get isInstanceRoot(){return this.data.type==="Instance"&&typeof this.identity=="string"}transformAssignData(t,A){let r=A.scene.data.objects.get(t.component);if(r){let i,s;for(let o of Cs.rootOverrideProps)t[o]===void 0?(i===void 0&&(i={...t}),i[o]=r.data[o]):(s===void 0&&(s={}),s[o]=t[o]);return this.overrideData=s,i??t}return t}updateByOp(t,A,r,i){let s;if(this.isInstanceRoot&&!i&&(A=this.transformAssignData(A,r),t.type===0&&t.path.length===0&&this.component))for(let o of Cs.rootOverrideProps)o in t.props&&t.props[o]===void 0&&(s===void 0&&(s={...t,props:{...t.props}}),s.props[o]=this.component.data[o]);super.updateByOp(s??t,A,r,i)}updateState(t,A){this.updateState_Entity(t,A)}expandInstanceChildren(t){let A=this.data;if(this.component===void 0){this.component=t.scene.find(A.component)??null;let r=!1;if(this.component!==this.oldComponent){if(this.oldComponent){let i=0;for(let s of this.children)if(Yt.is(s))t.scene.disposeAndUnregisterEntityRecursivelyIfNotReregistered(s),wm(s),i+=1;else break;this.children.splice(0,i)}r=!0}this.component&&pP(t,[this.uuid],A.overrides,this,this.component,this.component,0,r),this.oldComponent=this.component}}};function wm(n){if(n.component){let e=n.component.instances.indexOf(n);e>=0&&n.component.instances.splice(e,1);for(let t of n.children)Yt.is(t)&&wm(t)}}function fP(n,e,t,A){return n.component===e&&So(n.identity,A)?n.overrideData===t?2:1:0}function pP(n,e,t,A,r,i,s,o){if(s>50)return!1;if(A.component!==r){if(A.component){let c=A.component.instances.indexOf(A);c>=0&&A.component.instances.splice(c,1)}r.instances.push(A),A.component=r}r instanceof Pr&&r.isInstanceRoot&&r.expandInstanceChildren(n);let a=0;for(let c of r.children)if(Yt.is(c)){let l=[...e,...typeof c.identity=="string"?[c.identity]:c.identity],u=Il.resolve(t,l,1),d=null,h;if(!o){let f=A.children[a];if(d=Yt.is(f)?f:null,d!==null){let p=fP(d,c,u,l);h=p>=1?d.stateSelection:void 0,p!==2&&(d=null)}if(d===null&&(d=n.scene.findInstance(l)??null,d!==null)){let p=fP(d,c,u,l);if(h=p>=1?d.stateSelection:void 0,p!==2)d=null;else{let m=d.parent.children.indexOf(d);d.parent.children.splice(m,1),A.children.splice(a,0,d),d.parent===A?(m<=a&&console.error("not possible"),void 0):(d.parent=A,d.matrixWorldNeedsUpdate=!0,d.resetBBoxNeedsUpdate(),d.updateVisible(),n.pendingDeletes.delete(d),void 0)}}}if(d===null){let f=u?_i.apply(c.data,u):c.data;yr.is(f.type)&&(f={...f,type:"Empty"}),d=xr.createEntity(l,f,n),d.overrideData=u,A.add(d),A.children.splice(A.children.length-1,1),A.children.splice(a,0,d),d.updateState(d.data,n),h&&d.changeSelectedState(h,n),n.scene.registerInstanceAndSetUuid(d)}a+=1,pP(n,e,t,d,c,i,s+1,o)}if(!o){let c=a;for(;;){let l=A.children[a];if(Yt.is(l))n.pendingDeletes.add(l);else break;a+=1}A.children.splice(c,a-c)}return!0}function MH(n,e,t){let A;return e.geometry.type==="TextGeometry"?new xc(n,e,t):(e.geometry.type==="SubdivGeometry"?A=new Er(n,e,t):e.geometry.type==="VectorGeometry"?A=new bm(n,e,t):e.geometry.type==="BooleanGeometry"?A=new ir(n,e,t):A=new eA(n,e,t),A)}function Sm(n,e,t){return e.type==="Mesh"?MH(n,e,t):e.type==="Empty"?new qo(n,e):e.type==="PointLight"?new vm(n,e,t):e.type==="SpotLight"?new xm(n,e,t):e.type==="DirectionalLight"?new ym(n,e,t):e.type==="Component"||e.type==="Instance"?new Pr(n,e,t):yr.is(e.type)?new VA(n,e):(console.error(e),new qo(n,e))}xr.createEntity=Sm;function EH(n,e,t){let A=Sm(n.identity,e,t),r=n.children,i=n.parent,s=n.component,o=n.instances,a=n.overrideData,c=n.uuid,l=n.stateSelection;n.dispose();for(let u of Object.keys(n))delete n[u];Object.setPrototypeOf(n,Object.getPrototypeOf(A));for(let u of Object.keys(A))n[u]=A[u];n.children=[...n.children,...r],n.parent=i,n.component=s,n.instances=o,n.uuid=c,n.overrideData=a,n.updateState(n.data,t),l&&n.changeSelectedState(l,t),n.resetBBoxNeedsUpdate()}xr.changeEntityProptotype=EH;xr.Cloner=wc;function mP(n,e,t,A){n.updateByOp(e,t,A,!1)}function gP(n,e){let t=!1,A=e.getLayersOfType("transmission"),r=e.getLayersOfType("outline");return r.length>0&&(n.layers.set(8),A.length>0&&n.layers.enable(3),t=!0,yc(n),gc(n)),A.length===0&&r.length===0&&n.layers.set(0),t}function yP(n,e){if(!e.layers)return!1;let t=!1,A=e.getLayersOfType("transmission"),r=e.getLayersOfType("outline");return A.length>0&&(n.layers.set(3),r.length>0&&n.layers.enable(8),t=!0),A.length===0&&r.length===0&&n.layers.set(0),t}function vP(n){let e=!1;return n.traverseEntity(t=>{if(t instanceof Hi)if(Array.isArray(t.material))for(let A=0;A<t.material.length;A++)gP(t,t.material[A])&&(e=!0);else gP(t,t.material)&&(e=!0)}),e}function xP(n){let e=!1;return n.traverseEntity(t=>{if(t instanceof Hi)if(Array.isArray(t.material))for(let A=0;A<t.material.length;A++)yP(t,t.material[A])&&(e=!0);else yP(t,t.material)&&(e=!0)}),e}var CH=new Ga,PH=new de,DH=new hr;function bP(n,e,t){let A=n.cloner;if(A)for(let r of A.children){let i=PH.copy(r.matrixWorld).invert(),s=DH.copy(e.ray).applyMatrix4(i),o=n.matrixWorld;s.applyMatrix4(o);let a=CH;a.set(s.origin,s.direction),a.near=e.near,a.far=e.far,a.intersectObject(n,!1).length>0&&t.push({object:n})}}var IH=n=>`

// PCSS implementation based on:
// https://www.gamedev.net/articles/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/
// NOTE: This number affects how big the shadow blur can
// possibly get. Bigger number == bigger blur, but less precise results

const float  gPenumbraFilterSize = 80.0;
const int   gPenumbraSamples = ${n};
const int gShadowSamples = ${n};
const float gShadowSamplesRpc = 1.0f / float(gShadowSamples);

vec2 vogelDiskSample(int sample_index, int sample_count, float angle)
{
  const float goldenAngle = 2.399963f; // radians
  float r = sqrt(float(sample_index) + 0.5f) / sqrt(float(sample_count));
  float theta = float(sample_index) * goldenAngle + angle;
  float sine = sin(theta);
  float cosine = cos(theta);
  return vec2(cosine, sine) * r;
}

// NOTE: For now we aren't using this screen-space noise. But we should enable
// it again once we do some sort of temporal AA. Then we could potentially lower
// the number of samples needed and still get a pretty smooth result.
// Derived from the interleaved gradient function from Jimenez 2014 http:goo.gl/eomGso
float getNoiseInterleavedGradient(vec2 screenPos)
{
    vec3 magic = vec3(0.06711056f, 0.00583715f, 52.9829189f);
    return fract(magic.z * fract(dot(screenPos, magic.xy)));
}

#ifdef USE_SHADOWMAP
    #if NUM_DIR_LIGHT_SHADOWS > 0

        uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
        varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

        struct DirectionalLightShadow {
            float shadowBias;
            float shadowNormalBias;
            float shadowRadius;
            vec2 shadowMapSize;
        };

        uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

    #endif

    #if NUM_SPOT_LIGHT_SHADOWS > 0

        uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
        varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

        struct SpotLightShadow {
            float shadowBias;
            float shadowNormalBias;
            float shadowRadius;
            vec2 shadowMapSize;
        };

        uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

    #endif

    #if NUM_POINT_LIGHT_SHADOWS > 0

        uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
        varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

        struct PointLightShadow {
            float shadowBias;
            float shadowNormalBias;
            float shadowRadius;
            vec2 shadowMapSize;
            float shadowCameraNear;
            float shadowCameraFar;
        };

        uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

    #endif

    /*
    #if NUM_RECT_AREA_LIGHTS > 0

        // TODO (abelnation): create uniforms for area light shadows

    #endif
    */

float computePenumbra(int index, sampler2D shadowMap, float temporalAngle, float texelSize, vec2 uv, float compare, float texelScalar, float shadowRadius)
{
    float penumbra = 1.0;
    float blockerDepthAvg = 0.0;
    float blockerCount = 0.0;

    #pragma unroll_loop_start
    for(int i = 0; i < gPenumbraSamples; i ++)
    {
        vec2 offset = (vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize) * texelScalar;
        float depth = unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) );

        if(depth < compare + 0.0001)
        {
            blockerDepthAvg += depth;
            blockerCount++;
        }
    }
    #pragma unroll_loop_end

    if (blockerCount > 0.0)
    {
        blockerDepthAvg /= blockerCount;

        // Compute penumbra
        penumbra = (compare - blockerDepthAvg) / (blockerDepthAvg);
        penumbra *= penumbra;
        penumbra *= 200.0 * penumbraSize[min(index, ${5} - 1)]; // Magic number that affects how quickly the penumbra grows

        return clamp(penumbra, 0.00, 1.0);
    }
    return 0.0;
}

vec4 shadowmod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 shadowperm(vec4 x){return shadowmod289(((x * 34.0) + 1.0) * x);}
float shadowNoise(vec3 p){
            vec3 a = floor(p);
            vec3 d = p - a;
            d = d * d * (3.0 - 2.0 * d);
            vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
            vec4 k1 = shadowperm(b.xyxy);
            vec4 k2 = shadowperm(k1.xyxy + b.zzww);
            vec4 c = k2 + a.zzzz;
            vec4 k3 = shadowperm(c);
            vec4 k4 = shadowperm(c + 1.0);
            vec4 o1 = fract(k3 * (1.0 / 41.0));
            vec4 o2 = fract(k4 * (1.0 / 41.0));
            vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
            vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
            return o4.y * d.y + o4.x * (1.0 - d.y);
        }

float vogelShadow(int index, sampler2D shadowMap, vec2 uv, float texelSize, float compare, float shadowRadius)
{
    float shadow         = 0.0f;
    float temporalOffset = shadowNoise(floor(vWPosition * 10.));

    // NOTE: When using TAA, we should use screen space interleaved gradient noise
    //float temporalOffset = getNoiseInterleavedGradient(gl_FragCoord.xy);
    float temporalAngle  = temporalOffset * PI2;

    float texelScalar = (gPenumbraFilterSize) / (texelSize * 1024.);
    float penumbra = computePenumbra(index, shadowMap, temporalAngle, texelSize, uv, compare, texelScalar, shadowRadius);
    if (penumbra == -1.0) {
        return 1.0;
    }

    #pragma unroll_loop_start
    for (int i = 0; i < gShadowSamples; i++)
    {
        vec2 vogelSample =  vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize;
        // Overall blurring offset
        vec2 offset = vogelSample * (shadowRadius * 2.);

        // Penumbra offset
        offset += vogelSample * (penumbra * texelScalar);

        shadow += step( compare, unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) ) );
    }
    #pragma unroll_loop_end

    return shadow * gShadowSamplesRpc;
}


    float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

        return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

    }

    vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

        return unpackRGBATo2Half( texture2D( shadow, uv ) );

    }

    float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

        float occlusion = 1.0;

        vec2 distribution = texture2DDistribution( shadow, uv );

        float hard_shadow = step( compare , distribution.x ); // Hard Shadow

        if (hard_shadow != 1.0 ) {

            float distance = compare - distribution.x ;
            float variance = max( 0.00000, distribution.y * distribution.y );
            float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
            softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
            occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

        }
        return occlusion;

    }

    float getShadow( int i, sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

        float shadow = 1.0;

        shadowCoord.xyz /= shadowCoord.w;
        shadowCoord.z += shadowBias;

        // if ( something && something ) breaks ATI OpenGL shader compiler
        // if ( all( something, something ) ) using this instead

        bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
        bool inFrustum = all( inFrustumVec );

        bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );

        bool frustumTest = all( frustumTestVec );

        if ( frustumTest ) {

        #if defined( SHADOWMAP_TYPE_PCF )

            vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
            return vogelShadow(i, shadowMap, shadowCoord.xy, texelSize.x, shadowCoord.z, shadowRadius );

        #elif defined( SHADOWMAP_TYPE_PCF_SOFT )

            vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
            float dx = texelSize.x;
            float dy = texelSize.y;

            vec2 uv = shadowCoord.xy;
            vec2 f = fract( uv * shadowMapSize + 0.5 );
            uv -= f * texelSize;

            shadow = (
                texture2DCompare( shadowMap, uv, shadowCoord.z ) +
                texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
                texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
                mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
                     texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
                     f.x ) +
                mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
                     texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
                     f.x ) +
                mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
                     texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
                     f.y ) +
                mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
                     texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
                     f.y ) +
                mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
                          texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
                          f.x ),
                     mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
                          texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
                          f.x ),
                     f.y )
            ) * ( 1.0 / 9.0 );

        #elif defined( SHADOWMAP_TYPE_VSM )

            shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

        #else // no percentage-closer filtering:

            shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

        #endif

        }

        return shadow;

    }

    // cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
    // vector suitable for 2D texture mapping. This code uses the following layout for the
    // 2D texture:
    //
    // xzXZ
    //  y Y
    //
    // Y - Positive y direction
    // y - Negative y direction
    // X - Positive x direction
    // x - Negative x direction
    // Z - Positive z direction
    // z - Negative z direction
    //
    // Source and test bed:
    // https://gist.github.com/tschw/da10c43c467ce8afd0c4

    vec2 cubeToUV( vec3 v, float texelSizeY ) {

        // Number of texels to avoid at the edge of each square

        vec3 absV = abs( v );

        // Intersect unit cube

        float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
        absV *= scaleToCube;

        // Apply scale to avoid seams

        // two texels less per square (one texel will do for NEAREST)
        v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

        // Unwrap

        // space: -1 ... 1 range for each square
        //
        // #X##         dim    := ( 4 , 2 )
        //  # #         center := ( 1 , 1 )

        vec2 planar = v.xy;

        float almostATexel = 1.5 * texelSizeY;
        float almostOne = 1.0 - almostATexel;

        if ( absV.z >= almostOne ) {

            if ( v.z > 0.0 )
                planar.x = 4.0 - v.x;

        } else if ( absV.x >= almostOne ) {

            float signX = sign( v.x );
            planar.x = v.z * signX + 2.0 * signX;

        } else if ( absV.y >= almostOne ) {

            float signY = sign( v.y );
            planar.x = v.x + 2.0 * signY + 2.0;
            planar.y = v.z * signY - 2.0;

        }

        // Transform to UV space

        // scale := 0.5 / dim
        // translate := ( center + 0.5 ) / dim
        return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

    }

    float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

        float shadow = 1.0;
        vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

        // for point lights, the uniform @vShadowCoord is re-purposed to hold
        // the vector from the light to the world-space position of the fragment.
        vec3 lightToPosition = shadowCoord.xyz;

        // dp = normalized distance from light to fragment position
        float compare = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
        compare += shadowBias;

        // bd3D = base direction 3D
        vec3 bd3D = normalize( lightToPosition );

        float temporalOffset = shadowNoise(floor(vWPosition * 10.));
        float temporalAngle  = temporalOffset * PI2;


        #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_VSM )
            for (int i = 0; i < gShadowSamples; i++) {
                vec2 vogelSample = vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize;

                // Overall blurring offset
                vec3 offset = vec3(vogelSample.x, vogelSample.y, -vogelSample.x) * (shadowRadius + 5.);

                // NOTE: Removed for now
                // Penumbra offset
                //offset += vec3(vogelSample.x, vogelSample.y, vogelSample.y)  * (penumbra * gPenumbraFilterSize);

                shadow += texture2DCompare( shadowMap, cubeToUV( bd3D + offset, texelSize.y ), compare );

            }
            return shadow * gShadowSamplesRpc;

        #elif defined( SHADOWMAP_TYPE_PCF_SOFT )
            for (int i = 0; i < 16; i++) {
                vec2 vogelSample = vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize;

                // Overall blurring offset
                vec3 offset = vec3(vogelSample.x, vogelSample.y, -vogelSample.x) * (shadowRadius + 5.);

                shadow += texture2DCompare( shadowMap, cubeToUV( bd3D + offset, texelSize.y ), compare );

            }
            return shadow * (1.0 / 16.0);
        #else // no percentage-closer filtering

            return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), compare );

        #endif

    }

#endif
`,OH=nt.lights_fragment_begin,LH=nt.shadowmask_pars_fragment,wP=!1,_H=n=>{switch(n){case"low":return 8;case"medium":return 16;case"high":return 32;default:return 16}},SP=(n="medium")=>{if(wP)return;wP=!0;let e=_H(n);nt.shadowmap_pars_fragment=IH(e);let t=OH.slice();t=t.replace("getShadow( spotShadowMap[ i ]",`getShadow( UNROLLED_LOOP_INDEX + ${3}, spotShadowMap[ i ]`),t=t.replace("getShadow( directionalShadowMap[ i ]","getShadow( UNROLLED_LOOP_INDEX, directionalShadowMap[ i ]"),nt.lights_fragment_begin=t;let A=LH.slice();A=A.replaceAll("getShadow(","getShadow( UNROLLED_LOOP_INDEX, "),nt.shadowmask_pars_fragment=A};var RH=`
attribute vec3 randomColor;
varying vec3 vNormal;
flat out vec3 vColor;

void main()
{
vNormal = normal;
vColor = randomColor;
gl_Position = projectionMatrix * (modelViewMatrix * vec4(position, 1.0));
}
`,BH=`
uniform float depthContrast;
varying vec3 vNormal;
flat in vec3 vColor;
void main()
{
vec3 normal = (normalize(vNormal)).rgb;

float contrastDepth = (gl_FragCoord.z - 0.5) * depthContrast + 0.5;

vec3 resultColor = mix(mix(vColor, normal, 0.2), vec3(contrastDepth), 0.4);
gl_FragColor = vec4(resultColor, vColor.r);
}
`,Tm=new gt({vertexShader:RH,fragmentShader:BH,uniforms:{depthContrast:{value:1}}});var Mm=new $h;Mm.wireframe=!0;var TP=new S,cx=class extends ln{constructor(t,A){super();this.data=t;this.backupFog=new Ma(16777215,.1,2e3);this.fogUseBGColor=!1;this.enableHelpers=!1;this.wireframeState=!1;this.needsTransmissionDirty=!0;this.needsNormalDirty=!0;this._needsTransmission=!1;this._needsNormal=!1;this.geometryCacheChanged=!1;this.bgColor=new $t(1,1,1,1);this.entityByUuid={};this.entityIdentityToEntity={};this.toExpandCloner=new Set;this.toUpdateCloner=new Set;this.needsRecomputeInstances=!1;this.ambientLight=new ef(13882323,8553090,.75),this.ambientLight.name="Default Ambient Light",this.ambientLight.layers.enable(3),this.personalCamera=this.createPersonalCamera(),this.activeCamera=this.personalCamera,this.postprocessing=t.postprocessing,this.init(t,A),this.matrixAutoUpdate=!1}markGeometryCacheDirty(){this.geometryCacheChanged=!0}markNeedsUpdateRendererDirty(){this.needsTransmissionDirty=!0,this.needsNormalDirty=!0}needsTransmission(){return this.needsTransmissionDirty&&(this._needsTransmission=xP(this),this.needsTransmissionDirty=!1),this._needsTransmission}needsNormal(){return this.needsNormalDirty&&(this._needsNormal=vP(this),this.needsNormalDirty=!1),this._needsNormal}registerInstanceAndSetUuid(t){let A=t.identity.join("-"),r=this.entityIdentityToEntity[A];r&&(t.uuid=r.uuid),this.entityIdentityToEntity[A]=t,this.entityByUuid[t.uuid]=t}findInstance(t){return this.entityIdentityToEntity[t.join("-")]}getWithSortKey(t){let A=this.find(t);if(A===void 0)return;let r=[],i=A;for(;i!==this;){let s=i;i=i.parent;let o=i.children.indexOf(s);r.splice(0,0,o)}return{entity:A,sortKey:r}}getAllSorted(t){let A=[];for(let r of t){let i=this.getWithSortKey(r.id);i!==void 0&&A.push(i)}return A.sort((r,i)=>BM(r.sortKey,i.sortKey)),A.map(r=>r.entity)}nonExistOrDescendantOf(t,A){let r=this.find(t);if(r===void 0)return!0;for(;r;){if(r.uuid===A)return!0;r=r.parent}return!1}find(t){if(t===""||t===void 0)return;let A=this.entityByUuid[t];return A===void 0?this.getObjectByProperty("uuid",t):A}debugEnsureEntity(t){let A=this.find(t);if(A){if(Array.isArray(A.identity)&&this.findInstance(A.identity)===void 0){console.error("not found instance");debugger}}else{console.error("not found");debugger}}addPendingExpandCloner(t){this.toExpandCloner.add(t)}addPendingUpdateCloner(t){this.toUpdateCloner.add(t)}markToExpandCloner(t){this.toExpandCloner.add(t),t.traverseEntityAncestors(A=>{this.toExpandCloner.add(A)})}doPendingExpandCloner(){this.toExpandCloner.forEach(t=>{t.expandCloner(this)}),this.toExpandCloner.clear()}doPendingUpdateCloner(){this.toUpdateCloner.forEach(t=>{t.cloner?.update()}),this.toUpdateCloner.clear()}doPendingUpdates(){this.doPendingExpandCloner(),this.doPendingUpdateCloner()}updateTreeByOp(t,A){if(t.path.length===0&&t.type===7){let r=t.parent===null?this:this.find(t.parent);if(r===void 0)throw new Error("unexpected");let i=this.createObject(t.id,t.data,t.children,r,t.localIndex,A);i.updateVisible(),i.resetBBoxNeedsUpdate(),MA(i)&&Hn(i.parent)&&(i.invalidateUpstreamBooleanData(),i.parent.invalidateDownstreamBooleanData().recomputeBoolean()),this.markNeedsRecomputeInstancesForAncessors(r),this.markNeedsRecomputeInstancesForChildren(i),this.markToExpandCloner(i)}else if(t.path.length===0&&t.type===8){let r=this.find(t.id);if(r===void 0)throw new Error("unexpected");this.markToExpandCloner(r),r.resetBBoxNeedsUpdate(),this.unregisterObject(r);let i=r.parent;this.markNeedsRecomputeInstancesForAncessors(i),this.markNeedsRecomputeInstancesForChildren(r),r.parent.remove(r),Hn(r.parent)&&(r.parent.invalidateUpstreamBooleanData(),r.parent.invalidateDownstreamBooleanData().recomputeBoolean()),MA(r)&&(r.freeBooleanPointer(),i instanceof ir&&i.invalidateDownstreamBooleanData().recomputeBoolean()),this.disposeAndUnregisterEntityRecursivelyIfNotReregistered(r)}else if(t.path.length===0&&t.type===9){let r=this.find(t.id);if(r===void 0)throw new Error("unexpected");this.markNeedsRecomputeInstancesForChildren(r);let i=r.parent;this.markNeedsRecomputeInstancesForAncessors(i),r.cloner?.resetOnMove(),this.markToExpandCloner(r);let s=t.parent===null?this:this.find(t.parent);if(s===void 0)throw new Error("unexpected");s.add(r),this.markNeedsRecomputeInstancesForAncessors(s),this.markToExpandCloner(r),r.invalidateClonerTransform(r),r.updateVisible(),r.resetBBoxNeedsUpdate();let o=t.localIndex;s.children.splice(o,0,s.children.pop()),MA(r)&&(r.invalidateUpstreamBooleanData(),Hn(r.parent)?r.parent.invalidateDownstreamBooleanData().recomputeBoolean():i instanceof ir&&i.invalidateDownstreamBooleanData().recomputeBoolean())}this.markNeedsUpdateRendererDirty(),this.markGeometryCacheDirty()}updateEntityByOp(t,A,r,i){if(A.type===0&&(("overrides"in A.props||"component"in A.props)&&this.markNeedsRecomputeInstances(),A.path.includes("overrides")&&"states"in A.props)){let{states:o,rest:a}=A.props;A={...A,props:a},this.markNeedsRecomputeInstances()}let s=this.find(t);if(s)try{mP(s,A,r,{scene:this,shared:i}),s instanceof eA&&s.updateGeometryGroupsIfNeeded()}catch(o){console.error(o)}}get enableFog(){return this.fog!==null}set enableFog(t){this.fog=t===!0?this.backupFog:null}init(t,A){if(this.createChildrenObjects(t.objects,this,A),this.personalCamera.removeFromParent(),this.add(this.personalCamera),this.ambientLight.removeFromParent(),this.add(this.ambientLight),this.setBackgroundColor(pn(t.backgroundColor,A)),this.updateFog(t.fog,A),this.updateAmbientLight(t.environment.ambientLight,A),this.activeCamera=this.personalCamera,t.publish.playCamera!==null){let r=this.find(t.publish.playCamera);r instanceof VA&&this.switchActiveCamera(r)}this.expandInstances(A,!0),this.traverseEntity(r=>{Hn(r)&&r.recomputeBoolean()}),this.doPendingExpandCloner()}markNeedsRecomputeInstances(){this.needsRecomputeInstances=!0}markNeedsRecomputeInstancesForChildren(t){t.traverseEntity(A=>{(A.data.type==="Component"||A.data.type==="Instance")&&this.markNeedsRecomputeInstances()})}markNeedsRecomputeInstancesForAncessors(t){Yt.is(t)&&(t.data.type==="Component"&&this.markNeedsRecomputeInstances(),t.traverseAncestors(A=>{Yt.is(A)&&A.data.type==="Component"&&this.markNeedsRecomputeInstances()}))}relativeizeInner(t,A,r,i,s){if(t.data.type==="Transition"){let o=t.data.object;o&&o!==A.uuid&&A.find(o)&&r.forInstancesRec(c=>{c.isInstanceRoot||(c.data=Tl(c.data,l=>{let u=l.events.data(s.id),d=c.goUp(i);if(d){let h=[...pp(d.identity),t.data.object].join("-"),f=this.entityIdentityToEntity[h];if(f){let p=f.uuid;u.actions.data(t.id).object=p}else{if(!1)debugger;console.warn("cannot find instance")}}}).data)})}}rewriteEventsBeforeGoToPlayMode(){this.traverseEntity(t=>{if(t instanceof Pr&&typeof t.identity=="string"&&t.data.type==="Component")return t.traverseEntity((A,r)=>{A.data.events.forEach(i=>{i.data.type==="GameControl"?A.forInstancesRec(s=>{s.isInstanceRoot||(s.data=Tl(s.data,o=>{o.events.delete(i.id)}).data)}):"actions"in i.data&&i.data.actions.forEach(s=>{this.relativeizeInner(s,t,A,r,i)})})}),!0})}expandInstances(t,A){let r=new Set;this.traverseEntity(i=>{if(i instanceof Pr&&i.isInstanceRoot)return i.expandInstanceChildren({scene:this,shared:t,pendingDeletes:r}),A||i.resetBBoxNeedsUpdate(),!0});for(let i of r)this.disposeAndUnregisterEntityRecursivelyIfNotReregistered(i),wm(i)}recomputeInstances(t){this.needsRecomputeInstances&&(this.needsRecomputeInstances=!1,this.traverseEntity(A=>{A instanceof Pr&&A.isInstanceRoot&&(A.component=void 0)}),this.expandInstances(t,!1))}disposeAndUnregisterEntityRecursivelyIfNotReregistered(t){t.traverseEntity(A=>{let r=typeof A.identity=="string"?A.identity:A.identity.join("-");this.entityIdentityToEntity[r]===A&&(delete this.entityByUuid[A.uuid],delete this.entityIdentityToEntity[r]),A.dispose()})}clearScene(){for(let t of this.children)bA(t)&&t.disposeRecursively();this.children.length=0}resetAfterClear(t,A){this.init(t,A)}createPersonalCamera(){let t=new VA(cx.PERSONAL_CAMERA_ID,{...Dl.defaultData,name:"Personal Camera"});return t.objectHelper.visible=!1,this.registerObjectCreatedInLegacy(t),t}raycast(t){let A=[],r=i=>{for(let s of i.children)bA(s)&&!s.raycastLock&&s.visible&&((MA(s)||cP(s)&&this.enableHelpers&&s.objectHelper.visible)&&(t.intersectObject(s,!1,A),bP(s,t,A)),r(s))};return r(this),A}forEachEntity(t){for(let A of this.children)bA(A)&&t(A)}traverseEntity(t){for(let A of this.children)bA(A)&&A.traverseEntity(t)}traverseVisibleEntity(t){for(let A of this.children)bA(A)&&A.visible&&A.traverseVisibleEntity(t)}updateFog(t,A){this.enableFog=t.enabled,this.fogUseBGColor=t.useBackgroundColor,t.useBackgroundColor?this.backupFog.color.set(this.bgColor):this.backupFog.color=pn(t.color,A),this.backupFog.near=t.near,this.backupFog.far=t.far}dispose(){this.clearScene()}updateAmbientLight(t,A){t.color!==void 0&&(this.ambientLight.color=pn(t.color,A)),t.intensity!==void 0&&(this.ambientLight.intensity=t.intensity),t.groundColor!==void 0&&(this.ambientLight.groundColor=pn(t.groundColor,A)),t.enabled!==void 0&&(this.ambientLight.visible=t.enabled)}switchActiveCamera(t){this.activeCamera!==this.personalCamera&&(this.activeCamera.objectHelper.visible=!0),this.activeCamera=t,t.objectHelper.visible=!1}setBackgroundColor(t){this.bgColor=t,this.fogUseBGColor===!0&&(this.backupFog.color=t)}createChildrenObjects(t,A,r){let i=0;for(let s of t)this.createObject(s.id,s.data,s.children,A,i,r),i+=1}registerObjectCreatedInLegacy(t){this.entityByUuid[t.uuid]=t}unregisterObject(t){delete this.entityByUuid[t.uuid];for(let A of t.children)this.unregisterObject(A)}createObject(t,A,r,i,s,o){let a={scene:this,shared:o},c=Sm(t,A,a);return c&&(this.entityByUuid[t]=c,i.add(c),i.children.splice(s,0,i.children.pop()),r.length>0&&(c.isInstanceRoot?console.error("instance should not have children!"):this.createChildrenObjects(r,c,o)),c.updateState(A,a),c instanceof eA&&c.updateGeometryGroupsIfNeeded(),c.updateVisible(),c.cloner&&this.toExpandCloner.add(c)),c}getCenter(t){let A=[];for(let i=0,s=t.length;i<s;++i){let{id:o,recursive:a}=t[i],c=this.find(o),l=a?c.recursiveBBox:c.singleBBox;A.push(...l.vertices)}let r=new mt;return r.setFromPoints(A),r.getCenter(TP),TP}copyMatrixWorld(t,A){if(t===null){A.identity();return}let r=this.find(t);r?A.copy(r.matrixWorld):A.identity()}copyParentMatrixWorld(t,A){if(t===null){A.identity();return}let r=this.find(t)?.parent;r?A.copy(r.matrixWorld):A.identity()}traverseMaterial(t){this.traverseEntity(A=>{if(A instanceof Lt)if(Array.isArray(A.material))for(let r=0;r<A.material.length;r++)A.material[r]instanceof Pn&&t(A.material[r]);else A.material instanceof Pn&&t(A.material)})}updateCanvasSize(t,A){this.activeCamera.setViewplaneSize(t,A);let r,i;t>=A?(r=A/t,i=1):(r=1,i=t/A),this.traverseMaterial(s=>{s.getLayersOfType("transmission").forEach(a=>{a.uniforms[`f${a.id}_aspectRatio`].value.x=r,a.uniforms[`f${a.id}_aspectRatio`].value.y=i})})}},ji=cx;ji.PERSONAL_CAMERA_ID="f23858d0-4a3b-4bd8-8173-66ed0af7f6fb-personalCamera";var Ud=(n,e)=>{let t=e.x-n.x,A=e.y-n.y;return Math.sqrt(t*t+A*A)},MP=(n,e)=>{let t=e.x-n.x,A=e.y-n.y;return NH(Math.atan2(A,t))},EP=(n,e,t)=>{let A={x:0,y:0};return t=Em(t),A.x=n.x-e*Math.cos(t),A.y=n.y-e*Math.sin(t),A},Em=n=>n*(Math.PI/180),NH=n=>n*(180/Math.PI),CP=n=>isNaN(n.buttons)?n.pressure!==0:n.buttons!==0,ux=new Map,dx=n=>{ux.has(n)&&clearTimeout(ux.get(n)),ux.set(n,setTimeout(n,100))},Cc=(n,e,t)=>{let A=e.split(/[ ,]+/g),r;for(let i=0;i<A.length;i+=1)r=A[i],n.addEventListener?n.addEventListener(r,t,!1):n.attachEvent&&n.attachEvent(r,t)},hx=(n,e,t)=>{let A=e.split(/[ ,]+/g),r;for(let i=0;i<A.length;i+=1)r=A[i],n.removeEventListener?n.removeEventListener(r,t):n.detachEvent&&n.detachEvent(r,t)};var Cm=n=>(n.preventDefault(),n.type.match(/^touch/)?n.changedTouches:n),fx=()=>{if(typeof window>"u")return;let n=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:n,y:e}},Pm=(n,e)=>{e.top||e.right||e.bottom||e.left?(n.style.top=e.top,n.style.right=e.right,n.style.bottom=e.bottom,n.style.left=e.left):(n.style.left=e.x+"px",n.style.top=e.y+"px")},Dm=(n,e,t)=>{let A=DP(n);for(let r in A)if(A.hasOwnProperty(r))if(typeof e=="string")A[r]=e+" "+t;else{let i="";for(let s=0,o=e.length;s<o;s+=1)i+=e[s]+" "+t+", ";A[r]=i.slice(0,-2)}return A},PP=(n,e)=>{let t=DP(n);for(let A in t)t.hasOwnProperty(A)&&(t[A]=e);return t},DP=n=>{let e={};return e[n]="",["webkit","Moz","o"].forEach(function(A){e[A+n.charAt(0).toUpperCase()+n.slice(1)]=""}),e},Im=(n,e)=>{for(let t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n},IP=(n,e)=>{let t={};for(let A in n)n.hasOwnProperty(A)&&e.hasOwnProperty(A)?t[A]=e[A]:n.hasOwnProperty(A)&&(t[A]=n[A]);return t},Vd=(n,e)=>{if(n.length)for(let t=0,A=n.length;t<A;t+=1)e(n[t]);else e(n)},OP=(n,e,t)=>({x:Math.min(Math.max(n.x,e.x-t),e.x+t),y:Math.min(Math.max(n.y,e.y-t),e.y+t)});typeof window<"u"&&(LP="ontouchstart"in window,_P=!!window.PointerEvent,RP=!!window.MSPointerEvent);var LP,_P,RP,zd={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},Pc,Hd={};_P?Pc=zd.pointer:RP?Pc=zd.MSPointer:LP?(Pc=zd.touch,Hd=zd.mouse):Pc=zd.mouse;function Xo(){}Xo.prototype.on=function(n,e){var t=this,A=n.split(/[ ,]+/g),r;t._handlers_=t._handlers_||{};for(var i=0;i<A.length;i+=1)r=A[i],t._handlers_[r]=t._handlers_[r]||[],t._handlers_[r].push(e);return t};Xo.prototype.off=function(n,e){var t=this;return t._handlers_=t._handlers_||{},n===void 0?t._handlers_={}:e===void 0?t._handlers_[n]=null:t._handlers_[n]&&t._handlers_[n].indexOf(e)>=0&&t._handlers_[n].splice(t._handlers_[n].indexOf(e),1),t};Xo.prototype.trigger=function(n,e){var t=this,A=n.split(/[ ,]+/g),r;t._handlers_=t._handlers_||{};for(var i=0;i<A.length;i+=1)r=A[i],t._handlers_[r]&&t._handlers_[r].length&&t._handlers_[r].forEach(function(s){s.call(t,{type:r,target:t},e)})};Xo.prototype.config=function(n){var e=this;e.options=e.defaults||{},n&&(e.options=IP(e.options,n))};Xo.prototype.bindEvt=function(n,e){var t=this;return t._domHandlers_=t._domHandlers_||{},t._domHandlers_[e]=function(){typeof t["on"+e]=="function"?t["on"+e].apply(t,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},Cc(n,Pc[e],t._domHandlers_[e]),Hd[e]&&Cc(n,Hd[e],t._domHandlers_[e]),t};Xo.prototype.unbindEvt=function(n,e){var t=this;return t._domHandlers_=t._domHandlers_||{},hx(n,Pc[e],t._domHandlers_[e]),Hd[e]&&hx(n,Hd[e],t._domHandlers_[e]),delete t._domHandlers_[e],this};var Dc=Xo;function EA(n,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=n,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:1,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(e),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=EA.id,EA.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}EA.prototype=new Dc;EA.constructor=EA;EA.id=0;EA.prototype.buildEl=function(n){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};EA.prototype.stylize=function(){if(this.options.dataOnly)return this;var n=this.options.fadeTime+"ms",e=PP("borderRadius","50%"),t=Dm("transition","opacity",n),A={};return A.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},A.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:"rgba(255, 255, 255, .4)",border:"solid 2px rgba(0, 0, 0, .1)"},A.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:"rgba(255, 255, 255, .8)",border:"solid 2px rgba(0, 0, 0, .1)"},Im(A.el,t),this.options.shape==="circle"&&Im(A.back,e),Im(A.front,e),this.applyStyles(A),this};EA.prototype.applyStyles=function(n){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var t in n[e])this.ui[e].style[t]=n[e][t];return this};EA.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};EA.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};EA.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};EA.prototype.show=function(n){var e=this;return e.options.dataOnly||(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),typeof n=="function"&&n.call(this)},e.options.fadeTime)),e};EA.prototype.hide=function(n){var e=this;if(e.options.dataOnly)return e;if(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var t=e.options.mode==="dynamic"?"none":"block";e.ui.el.style.display=t,typeof n=="function"&&n.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick){let t=e.options.restJoystick,A={};A.x=t===!0||t.x!==!1?0:e.instance.frontPosition.x,A.y=t===!0||t.y!==!1?0:e.instance.frontPosition.y,e.setPosition(n,A)}return e};EA.prototype.setPosition=function(n,e){var t=this;t.frontPosition={x:e.x,y:e.y};var A=t.options.fadeTime+"ms",r={};r.front=Dm("transition",["top","left"],A);var i={front:{}};i.front={left:t.frontPosition.x+"px",top:t.frontPosition.y+"px"},t.applyStyles(r),t.applyStyles(i),t.restTimeout=setTimeout(function(){typeof n=="function"&&n.call(t),t.restCallback()},t.options.fadeTime)};EA.prototype.restCallback=function(){var n=this,e={};e.front=Dm("transition","none",""),n.applyStyles(e),n.trigger("rested",n.instance)};EA.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};EA.prototype.computeDirection=function(n){var e=n.angle.radian,t=Math.PI/4,A=Math.PI/2,r,i,s;if(e>t&&e<t*3&&!n.lockX?r="up":e>-t&&e<=t&&!n.lockY?r="left":e>-t*3&&e<=-t&&!n.lockX?r="down":n.lockY||(r="right"),n.lockY||(e>-A&&e<A?i="left":i="right"),n.lockX||(e>0?s="up":s="down"),n.force>this.options.threshold){var o={},a;for(a in this.direction)this.direction.hasOwnProperty(a)&&(o[a]=this.direction[a]);var c={};this.direction={x:i,y:s,angle:r},n.direction=this.direction;for(a in o)o[a]===this.direction[a]&&(c[a]=!0);if(c.x&&c.y&&c.angle)return n;(!c.x||!c.y)&&this.trigger("plain",n),c.x||this.trigger("plain:"+i,n),c.y||this.trigger("plain:"+s,n),c.angle||this.trigger("dir dir:"+r,n)}else this.resetDirection();return n};var BP=EA;function oA(n,e){var t=this;t.nipples=[],t.idles=[],t.actives=[],t.ids=[],t.pressureIntervals={},t.manager=n,t.id=oA.id,oA.id+=1,t.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:1,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},t.config(e),(t.options.mode==="static"||t.options.mode==="semi")&&(t.options.multitouch=!1),t.options.multitouch||(t.options.maxNumberOfNipples=1);let A=getComputedStyle(t.options.zone.parentElement);return A&&A.display==="flex"&&(t.parentIsFlex=!0),t.updateBox(),t.prepareNipples(),t.bindings(),t.begin(),t.nipples}oA.prototype=new Dc;oA.constructor=oA;oA.id=0;oA.prototype.prepareNipples=function(){var n=this,e=n.nipples;e.on=n.on.bind(n),e.off=n.off.bind(n),e.options=n.options,e.destroy=n.destroy.bind(n),e.ids=n.ids,e.id=n.id,e.processOnMove=n.processOnMove.bind(n),e.processOnEnd=n.processOnEnd.bind(n),e.get=function(t){if(t===void 0)return e[0];for(var A=0,r=e.length;A<r;A+=1)if(e[A].identifier===t)return e[A];return!1}};oA.prototype.bindings=function(){var n=this;n.bindEvt(n.options.zone,"start"),n.options.zone.style.touchAction="none",n.options.zone.style.msTouchAction="none"};oA.prototype.begin=function(){var n=this,e=n.options;if(e.mode==="static"){var t=n.createNipple(e.position,n.manager.getIdentifier());t.add(),n.idles.push(t)}};oA.prototype.createNipple=function(n,e){var t=this,A=t.manager.scroll,r={},i=t.options,s={x:t.parentIsFlex?A.x:A.x+t.box.left,y:t.parentIsFlex?A.y:A.y+t.box.top};if(n.x&&n.y)r={x:n.x-s.x,y:n.y-s.y};else if(n.top||n.right||n.bottom||n.left){var o=document.createElement("DIV");o.style.display="hidden",o.style.top=n.top,o.style.right=n.right,o.style.bottom=n.bottom,o.style.left=n.left,o.style.position="absolute",i.zone.appendChild(o);var a=o.getBoundingClientRect();i.zone.removeChild(o),r=n,n={x:a.left+A.x,y:a.top+A.y}}var c=new BP(t,{color:i.color,size:i.size,threshold:i.threshold,fadeTime:i.fadeTime,dataOnly:i.dataOnly,restJoystick:i.restJoystick,restOpacity:i.restOpacity,mode:i.mode,identifier:e,position:n,zone:i.zone,frontPosition:{x:0,y:0},shape:i.shape});return i.dataOnly||(Pm(c.ui.el,r),Pm(c.ui.front,c.frontPosition)),t.nipples.push(c),t.trigger("added "+c.identifier+":added",c),t.manager.trigger("added "+c.identifier+":added",c),t.bindNipple(c),c};oA.prototype.updateBox=function(){var n=this;n.box=n.options.zone.getBoundingClientRect()};oA.prototype.bindNipple=function(n){var e=this,t,A=function(r,i){t=r.type+" "+i.id+":"+r.type,e.trigger(t,i)};n.on("destroyed",e.onDestroyed.bind(e)),n.on("shown hidden rested dir plain",A),n.on("dir:up dir:right dir:down dir:left",A),n.on("plain:up plain:right plain:down plain:left",A)};oA.prototype.pressureFn=function(n,e,t){var A=this,r=0;clearInterval(A.pressureIntervals[t]),A.pressureIntervals[t]=setInterval(function(){var i=n.force||n.pressure||n.webkitForce||0;i!==r&&(e.trigger("pressure",i),A.trigger("pressure "+e.identifier+":pressure",i),r=i)}.bind(A),100)};oA.prototype.onstart=function(n){var e=this,t=e.options,A=n;n=Cm(n),e.updateBox();var r=function(i){e.actives.length<t.maxNumberOfNipples?e.processOnStart(i):A.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(s){if(Object.values(A.touches).findIndex(function(a){return a.identifier===s})<0){var o=[n[0]];o.identifier=s,e.processOnEnd(o)}}),e.actives.length<t.maxNumberOfNipples&&e.processOnStart(i))};return Vd(n,r),e.manager.bindDocument(),!1};oA.prototype.processOnStart=function(n){var e=this,t=e.options,A,r=e.manager.getIdentifier(n),i=n.force||n.pressure||n.webkitForce||0,s={x:n.pageX,y:n.pageY},o=e.getOrCreate(r,s);o.identifier!==r&&e.manager.removeIdentifier(o.identifier),o.identifier=r;var a=function(l){l.trigger("start",l),e.trigger("start "+l.id+":start",l),l.show(),i>0&&e.pressureFn(n,l,l.identifier),e.processOnMove(n)};if((A=e.idles.indexOf(o))>=0&&e.idles.splice(A,1),e.actives.push(o),e.ids.push(o.identifier),t.mode!=="semi")a(o);else{var c=Ud(s,o.position);if(c<=t.catchDistance)a(o);else{o.destroy(),e.processOnStart(n);return}}return o};oA.prototype.getOrCreate=function(n,e){var t=this,A=t.options,r;return/(semi|static)/.test(A.mode)?(r=t.idles[0],r?(t.idles.splice(0,1),r):A.mode==="semi"?t.createNipple(e,n):(console.warn("Coudln't find the needed nipple."),!1)):(r=t.createNipple(e,n),r)};oA.prototype.processOnMove=function(n){var e=this,t=e.options,A=e.manager.getIdentifier(n),r=e.nipples.get(A),i=e.manager.scroll;if(!CP(n)){this.processOnEnd(n);return}if(!r){console.error("Found zombie joystick with ID "+A),e.manager.removeIdentifier(A);return}if(t.dynamicPage){var s=r.el.getBoundingClientRect();r.position={x:i.x+s.left,y:i.y+s.top}}r.identifier=A;var o=r.options.size/2,a={x:n.pageX,y:n.pageY};t.lockX&&(a.y=r.position.y),t.lockY&&(a.x=r.position.x);var c=Ud(a,r.position),l=MP(a,r.position),u=Em(l),d=c/o,h={distance:c,position:a},f,p;if(r.options.shape==="circle"?(f=Math.min(c,o),p=EP(r.position,f,l)):(p=OP(a,r.position,o),f=Ud(p,r.position)),t.follow){if(c>o){let x=a.x-p.x,b=a.y-p.y;r.position.x+=x,r.position.y+=b,r.el.style.top=r.position.y-(e.box.top+i.y)+"px",r.el.style.left=r.position.x-(e.box.left+i.x)+"px",c=Ud(a,r.position)}}else a=p,c=f;var m=a.x-r.position.x,g=a.y-r.position.y;r.frontPosition={x:m,y:g},t.dataOnly||Pm(r.ui.front,r.frontPosition);var y={identifier:r.identifier,position:a,force:d,pressure:n.force||n.pressure||n.webkitForce||0,distance:c,angle:{radian:u,degree:l},vector:{x:m/o,y:-g/o},raw:h,instance:r,lockX:t.lockX,lockY:t.lockY};y=r.computeDirection(y),y.angle={radian:Em(180-l),degree:180-l},r.trigger("move",y),e.trigger("move "+r.id+":move",y)};oA.prototype.processOnEnd=function(n){var e=this,t=e.options,A=e.manager.getIdentifier(n),r=e.nipples.get(A),i=e.manager.removeIdentifier(r.identifier);!r||(t.dataOnly||r.hide(function(){t.mode==="dynamic"&&(r.trigger("removed",r),e.trigger("removed "+r.id+":removed",r),e.manager.trigger("removed "+r.id+":removed",r),r.destroy())}),clearInterval(e.pressureIntervals[r.identifier]),r.resetDirection(),r.trigger("end",r),e.trigger("end "+r.id+":end",r),e.ids.indexOf(r.identifier)>=0&&e.ids.splice(e.ids.indexOf(r.identifier),1),e.actives.indexOf(r)>=0&&e.actives.splice(e.actives.indexOf(r),1),/(semi|static)/.test(t.mode)?e.idles.push(r):e.nipples.indexOf(r)>=0&&e.nipples.splice(e.nipples.indexOf(r),1),e.manager.unbindDocument(),/(semi|static)/.test(t.mode)&&(e.manager.ids[i.id]=i.identifier))};oA.prototype.onDestroyed=function(n,e){var t=this;t.nipples.indexOf(e)>=0&&t.nipples.splice(t.nipples.indexOf(e),1),t.actives.indexOf(e)>=0&&t.actives.splice(t.actives.indexOf(e),1),t.idles.indexOf(e)>=0&&t.idles.splice(t.idles.indexOf(e),1),t.ids.indexOf(e.identifier)>=0&&t.ids.splice(t.ids.indexOf(e.identifier),1),t.manager.removeIdentifier(e.identifier),t.manager.unbindDocument()};oA.prototype.destroy=function(){var n=this;n.unbindEvt(n.options.zone,"start"),n.nipples.forEach(function(t){t.destroy()});for(var e in n.pressureIntervals)n.pressureIntervals.hasOwnProperty(e)&&clearInterval(n.pressureIntervals[e]);n.trigger("destroyed",n.nipples),n.manager.unbindDocument(),n.off()};var NP=oA;function zA(n){var e=this;e.ids={},e.index=0,e.collections=[],e.scroll=fx(),e.config(n),e.prepareCollections();var t=function(){var r;e.collections.forEach(function(i){i.forEach(function(s){r=s.el.getBoundingClientRect(),s.position={x:e.scroll.x+r.left,y:e.scroll.y+r.top}})})};if(typeof window>"u")return e.collections;Cc(window,"resize",function(){dx(t)});var A=function(){e.scroll=fx()};return Cc(window,"scroll",function(){dx(A)}),e.collections}zA.prototype=new Dc;zA.constructor=zA;zA.prototype.prepareCollections=function(){var n=this;n.collections.create=n.create.bind(n),n.collections.on=n.on.bind(n),n.collections.off=n.off.bind(n),n.collections.destroy=n.destroy.bind(n),n.collections.get=function(e){var t;return n.collections.every(function(A){return t=A.get(e),!t}),t}};zA.prototype.create=function(n){return this.createCollection(n)};zA.prototype.createCollection=function(n){var e=this,t=new NP(e,n);return e.bindCollection(t),e.collections.push(t),t};zA.prototype.bindCollection=function(n){var e=this,t,A=function(r,i){t=r.type+" "+i.id+":"+r.type,e.trigger(t,i)};n.on("destroyed",e.onDestroyed.bind(e)),n.on("shown hidden rested dir plain",A),n.on("dir:up dir:right dir:down dir:left",A),n.on("plain:up plain:right plain:down plain:left",A)};zA.prototype.bindDocument=function(){var n=this;n.binded||(n.bindEvt(document,"move").bindEvt(document,"end"),n.binded=!0)};zA.prototype.unbindDocument=function(n){var e=this;(!Object.keys(e.ids).length||n===!0)&&(e.unbindEvt(document,"move").unbindEvt(document,"end"),e.binded=!1)};zA.prototype.getIdentifier=function(n){var e;return n?(e=n.identifier===void 0?n.pointerId:n.identifier,e===void 0&&(e=this.latest||0)):e=this.index,this.ids[e]===void 0&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]};zA.prototype.removeIdentifier=function(n){var e={};for(var t in this.ids)if(this.ids[t]===n){e.id=t,e.identifier=this.ids[t],delete this.ids[t];break}return e};zA.prototype.onmove=function(n){var e=this;return e.onAny("move",n),!1};zA.prototype.onend=function(n){var e=this;return e.onAny("end",n),!1};zA.prototype.oncancel=function(n){var e=this;return e.onAny("end",n),!1};zA.prototype.onAny=function(n,e){var t=this,A,r="processOn"+n.charAt(0).toUpperCase()+n.slice(1);e=Cm(e);var i=function(o,a,c){c.ids.indexOf(a)>=0&&(c[r](o),o._found_=!0)},s=function(o){A=t.getIdentifier(o),Vd(t.collections,i.bind(null,o,A)),o._found_||t.removeIdentifier(A)};return Vd(e,s),!1};zA.prototype.destroy=function(){var n=this;n.unbindDocument(!0),n.ids={},n.index=0,n.collections.forEach(function(e){e.destroy()}),n.off()};zA.prototype.onDestroyed=function(n,e){var t=this;if(t.collections.indexOf(e)<0)return!1;t.collections.splice(t.collections.indexOf(e),1)};var FP=zA;var GP=new FP,kP={create:function(n){return GP.create(n)},factory:GP};var UP=ch(O0());function Vs(n,e){let t=new Ie;if(!n.getAttribute("position"))return t.setAttribute("position",new Se([],3)),t.setIndex([]),t;let{positions:A,triIndices:r}=cd(n.getAttribute("position"),n.getIndex());return t.setAttribute("position",new Se(A,3)),t.setIndex(r),e&&t.applyMatrix4(e),t}function VP(n){return n.elements.every((e,t)=>t%5===0&&Math.abs(1-e)<1e-8||Math.abs(e)<1e-8)}var FH=new de,GH=new de,li=[[0,0,0],[0,0,0],[0,0,0]];function px(n){let e=n.elements;li[0][0]=e[0],li[0][1]=e[4],li[0][2]=e[8],li[1][0]=e[1],li[1][1]=e[5],li[1][2]=e[9],li[2][0]=e[2],li[2][1]=e[6],li[2][2]=e[10];let{u:t,v:A}=(0,UP.SVD)(li),r=FH.set(t[0][0],t[0][1],t[0][2],0,t[1][0],t[1][1],t[1][2],0,t[2][0],t[2][1],t[2][2],0,0,0,0,1),i=GH.set(A[0][0],A[0][1],A[0][2],0,A[1][0],A[1][1],A[1][2],0,A[2][0],A[2][1],A[2][2],0,0,0,0,1);return r.multiply(i.transpose())}var Lm=class extends Ga{constructor(){super(),this.layers.enable(3),this.layers.enable(8)}setFromCamera(e,t){t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,-1).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):t.isPerspectiveCamera?(this.ray.origin.set(e.x,e.y,-1).unproject(t),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):console.error("Raycaster: Unsupported camera type.")}intersectVisibleObjects(e,t=!0,A=[]){return e.forEach(r=>{r.visible&&this.intersectObject(r,t,A)}),A}createRaycastLineHelper(){let e=new Qn({color:65280,linewidth:10}),t=new S(this.ray.origin.x,this.ray.origin.y,this.ray.origin.z),A=new S(this.ray.direction.x,this.ray.direction.y,this.ray.direction.z),r=this.camera.far-this.camera.near,i=new S().addVectors(t,A.multiplyScalar(r)),s=new Ie;return s.setFromPoints([t,i]),new lo(s,e)}};var HP=n=>n instanceof qo||n instanceof Pr;function kH(n,e){return n.distance-e.distance}function WP(n,e,t){if(!(!bA(e)||!e.visible||e.raycastLock)){MA(e)&&e.raycast(n,t);for(let A of e.children)WP(n,A,t)}}function Wd(n,e,t){if(!t.some(r=>Ic(n,r)!==void 0))return[];let A=[];return e.children.forEach(r=>WP(n,r,A)),A.sort(kH),A}function jd(n){let e=[];if(n.length){let t=n[0].object;bA(t)&&e.push(t);let A=t.parent;for(;A;)HP(A)&&e.push(A),A=A.parent}return e}function Ic(n,e){if(MA(e)){if(!e.raycastLock&&e.visible){let t=[];return e.raycast(n,t),t.length?t[0]:void 0}}else if(HP(e))return jP(n,e)}function jP(n,e){if(!(!bA(e)||!e.visible||e.raycastLock)){if(MA(e)){let t=[];if(e.raycast(n,t),t.length)return t[0]}for(let t of e.children){let A=jP(n,t);if(A)return A}}}function UH(n){if(n.style.transform!==""){let e=getComputedStyle(n).getPropertyValue("transform");if(e!=="none"){let t=e.replace("matrix(","").split(",");return{x:parseFloat(t[0]),y:parseFloat(t[3])}}}return{x:1,y:1}}function zP(n){let e=n.getViewport(new He),t=UH(n.domElement);return{left:e.x*t.x,top:e.y*t.y,width:e.z*t.x,height:e.w*t.y}}function VH(n,e,t,A){let r=t.height-A.height,i=(n-A.left-t.left)*(t.width/A.width),s=(e-r+A.top-t.top)*(t.height/A.height);return{x:i/t.width*2-1,y:-(s/t.height)*2+1}}var _m=class{constructor(e,t,A,r,i,s){this.isExport=s;this.raycaster=new Lm;this.raycasterNeedsUpdate=!0;this.stopRaycast=!1;this.sharedAssets=new zi(Bl.emptyData());this.scene=new ji({...xp.defaultData},this.sharedAssets);this.camera=new VA;this.renderer=e,this.domElement=e.domElement,this._domRect=this.domElement.getBoundingClientRect(),this._viewRect=zP(this.renderer),this.stopRaycast=i,this.sharedAssets=r,this.scene=t,this.camera=A}get domRect(){return this._domRect}get viewRect(){return this._viewRect}updaterRect(){this._domRect=this.domElement.getBoundingClientRect(),this._viewRect=zP(this.renderer)}updateRaycaster(e){if(!this.raycasterNeedsUpdate)return;this.raycasterNeedsUpdate=!1;let{pageX:t,pageY:A}=e.touches!==void 0&&e.touches.length>0?e.touches[0]:e;this.raycaster.setFromCamera(VH(t,A,this._domRect,this._viewRect),this.camera)}};var mx=(s=>(s[s.keydown=0]="keydown",s[s.keyup=1]="keyup",s[s.pointerdown=2]="pointerdown",s[s.pointerup=3]="pointerup",s[s.pointermove=4]="pointermove",s[s.wheel=5]="wheel",s))(mx||{}),HA=class{constructor(e){this.eventContext=e;this.domEventsNeeded=new Set;this.hasVideoAction=!1}connect(){}disconnect(){}};var YP=new Map,Yd=new Map,Yi=class{constructor(e,t,A,r){this.data=t;let{audio:i,volume:s,delay:o,loop:a}=t;if(!i)throw new Error("Missing property");let c=typeof i=="string"?r.getAudio(i).src:i.data;this.audioPlayer=new Vi({src:c,volume:s,delay:o,loop:a}),Yd.has(A.uuid)?Yd.get(A.uuid).push(this):Yd.set(A.uuid,[this]),YP.set(e,this)}playByToggle(){this.data.toggle==="stop"?this.audioPlayer.status==="playing"?this.audioPlayer.stop():(this.audioPlayer.stop(),this.audioPlayer.play()):this.data.toggle==="pause"?this.audioPlayer.status==="playing"?this.audioPlayer.pause():this.audioPlayer.play():(this.audioPlayer.stop(),this.audioPlayer.play())}dispose(){this.audioPlayer.stop()}},Oc=class{constructor(e){this.data=e}dispatch(){this.data.playAudio?this.pauseAudio(this.data.playAudio):this.data.object?this.pauseAllAudiosFromObject(this.data.object):this.pauseAllAudios()}pauseAudio(e){let t=YP.get(e);!t||(this.data.delay>0?(this.disposeDelay(),this.timeoutId=window.setTimeout(()=>{t.audioPlayer[this.data.interaction](),this.disposeDelay()},this.data.delay)):t.audioPlayer[this.data.interaction]())}pauseAllAudiosFromObject(e){let t=Yd.get(e);!t?.length||(this.data.delay>0?(this.disposeDelay(),this.timeoutId=window.setTimeout(()=>{t.forEach(A=>A.audioPlayer[this.data.interaction]()),this.disposeDelay()},this.data.delay)):t.forEach(A=>A.audioPlayer[this.data.interaction]()))}pauseAllAudios(){let e=[...Yd.values()];!e.length||(this.data.delay>0?(this.disposeDelay(),this.timeoutId=window.setTimeout(()=>{e.forEach(t=>{t.forEach(A=>{A.audioPlayer[this.data.interaction]()})}),this.disposeDelay()},this.data.delay)):e.forEach(t=>{t.forEach(A=>{A.audioPlayer[this.data.interaction]()})}))}disposeDelay(){clearTimeout(this.timeoutId),delete this.timeoutId}dispose(){clearTimeout(this.timeoutId),delete this.timeoutId}},ci=class{constructor(e,t,A,r){this.data=t;if(t.interaction==="play")this.interaction=new Yi(e,t,A,r);else if(t.interaction==="pause"||t.interaction==="stop")this.interaction=new Oc(t);else throw new Error("Missing property")}dispatchBasic(){this.interaction instanceof Yi?this.interaction.playByToggle():this.interaction.dispatch()}dispatchConditional(){this.interaction instanceof Yi?this.interaction.audioPlayer.play():this.interaction.dispatch()}dispatchGameControl(e){this.interaction instanceof Yi&&(e==="start"?this.interaction.audioPlayer.play():this.interaction.audioPlayer.stop())}dispose(){this.interaction.dispose()}};function qP(n,e){let t=n.material.layers.find(A=>A.uuid===e);return t.color.texture.image.img instanceof HTMLVideoElement?t.color.texture.image.img:void 0}var XP=new Map,qd=new Map,zs=class{constructor(e,t,A){this.data=t;this.delay=0;this.status="stopped";let{layerId:r,loop:i,volume:s,delay:o}=t;if(this.object=A,r===void 0)throw new Error("Missing property");let a=qP(A,r);if(a)this.videoElement=a,this.videoElement.loop=i===1/0,this.videoElement.autoplay=!0,s!==void 0&&(this.videoElement.volume=s);else throw new Error("Missing property");o!==void 0&&(this.delay=o),qd.has(A.uuid)?qd.get(A.uuid).push(this):qd.set(A.uuid,[this]),XP.set(e,this),this.pause()}mute(){this.videoElement.muted=!0}unMute(){this.videoElement.muted=!1}play(e){let t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);e?this.mute():t?(this.mute(),window.setTimeout(()=>{this.unMute()},100)):this.unMute(),this.delayTimerId=window.setTimeout(()=>{this.videoElement.play(),this.clearDelay()},this.delay),this.status="playing"}clearDelay(){this.delayTimerId&&(clearTimeout(this.delayTimerId),delete this.delayTimerId)}pause(){this.videoElement.pause(),this.status="paused"}stop(){this.videoElement.pause(),this.videoElement.currentTime=0,this.status="stopped",this.clearDelay()}playByToggle(){this.data.toggle==="stop"?this.status==="playing"?this.stop():(this.stop(),this.play()):this.data.toggle==="pause"?this.status==="playing"?this.pause():this.play():(this.stop(),this.play())}dispose(){this.stop(),this.videoElement.muted=!0}},Lc=class{constructor(e){this.data=e}dispatch(){this.data.playVideo?this.pauseVideo(this.data.playVideo):this.data.object?this.pauseAllVideosFromObject(this.data.object):this.pauseAllVideos()}pauseVideo(e){let t=XP.get(e);!t||(this.data.delay>0?(this.disposeDelay(),this.timeoutId=window.setTimeout(()=>{t[this.data.interaction](),this.disposeDelay()},this.data.delay)):t[this.data.interaction]())}pauseAllVideosFromObject(e){let t=qd.get(e);!t?.length||(this.data.delay>0?(this.disposeDelay(),this.timeoutId=window.setTimeout(()=>{t.forEach(A=>A[this.data.interaction]()),this.disposeDelay()},this.data.delay)):t.forEach(A=>A[this.data.interaction]()))}pauseAllVideos(){let e=[...qd.values()];!e.length||(this.data.delay>0?(this.disposeDelay(),this.timeoutId=window.setTimeout(()=>{e.forEach(t=>{t.forEach(A=>{A[this.data.interaction]()})}),this.disposeDelay()},this.data.delay)):e.forEach(t=>{t.forEach(A=>{A[this.data.interaction]()})}))}disposeDelay(){clearTimeout(this.timeoutId),delete this.timeoutId}dispose(){clearTimeout(this.timeoutId),delete this.timeoutId}},Hs=class{constructor(e,t,A){this.data=t;if(t.interaction==="play")this.interaction=new zs(e,t,A);else if(t.interaction==="pause"||t.interaction==="stop")this.interaction=new Lc(t);else throw new Error("Missing property")}dispatchBasic(){this.interaction instanceof zs?this.interaction.playByToggle():this.interaction.dispatch()}dispatchConditional(){this.interaction instanceof zs?this.interaction.play():this.interaction.dispatch()}dispose(){this.interaction.dispose()}};var zH="text/plain",HH="us-ascii",QP=(n,e)=>e.some(t=>t instanceof RegExp?t.test(n):t===n),WH=(n,{stripHash:e})=>{let t=/^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(n);if(!t)throw new Error(`Invalid URL: ${n}`);let{type:A,data:r,hash:i}=t.groups,s=A.split(";");i=e?"":i;let o=!1;s[s.length-1]==="base64"&&(s.pop(),o=!0);let a=(s.shift()||"").toLowerCase(),l=[...s.map(u=>{let[d,h=""]=u.split("=").map(f=>f.trim());return d==="charset"&&(h=h.toLowerCase(),h===HH)?"":`${d}${h?`=${h}`:""}`}).filter(Boolean)];return o&&l.push("base64"),(l.length>0||a&&a!==zH)&&l.unshift(a),`data:${l.join(";")},${o?r.trim():r}${i?`#${i}`:""}`};function gx(n,e){if(e={defaultProtocol:"http:",normalizeProtocol:!0,forceHttp:!1,forceHttps:!1,stripAuthentication:!0,stripHash:!1,stripTextFragment:!0,stripWWW:!0,removeQueryParameters:[/^utm_\w+/i],removeTrailingSlash:!0,removeSingleSlash:!0,removeDirectoryIndex:!1,sortQueryParameters:!0,...e},n=n.trim(),/^data:/i.test(n))return WH(n,e);if(/^view-source:/i.test(n))throw new Error("`view-source:` is not supported as it is a non-standard protocol");let t=n.startsWith("//");!t&&/^\.*\//.test(n)||(n=n.replace(/^(?!(?:\w+:)?\/\/)|^\/\//,e.defaultProtocol));let r=new URL(n);if(e.forceHttp&&e.forceHttps)throw new Error("The `forceHttp` and `forceHttps` options cannot be used together");if(e.forceHttp&&r.protocol==="https:"&&(r.protocol="http:"),e.forceHttps&&r.protocol==="http:"&&(r.protocol="https:"),e.stripAuthentication&&(r.username="",r.password=""),e.stripHash?r.hash="":e.stripTextFragment&&(r.hash=r.hash.replace(/#?:~:text.*?$/i,"")),r.pathname){let s=/\b[a-z][a-z\d+\-.]{1,50}:\/\//g,o=0,a="";for(;;){let l=s.exec(r.pathname);if(!l)break;let u=l[0],d=l.index,h=r.pathname.slice(o,d);a+=h.replace(/\/{2,}/g,"/"),a+=u,o=d+u.length}let c=r.pathname.slice(o,r.pathname.length);a+=c.replace(/\/{2,}/g,"/"),r.pathname=a}if(r.pathname)try{r.pathname=decodeURI(r.pathname)}catch{}if(e.removeDirectoryIndex===!0&&(e.removeDirectoryIndex=[/^index\.[a-z]+$/]),Array.isArray(e.removeDirectoryIndex)&&e.removeDirectoryIndex.length>0){let s=r.pathname.split("/"),o=s[s.length-1];QP(o,e.removeDirectoryIndex)&&(s=s.slice(0,-1),r.pathname=s.slice(1).join("/")+"/")}if(r.hostname&&(r.hostname=r.hostname.replace(/\.$/,""),e.stripWWW&&/^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(r.hostname)&&(r.hostname=r.hostname.replace(/^www\./,""))),Array.isArray(e.removeQueryParameters))for(let s of[...r.searchParams.keys()])QP(s,e.removeQueryParameters)&&r.searchParams.delete(s);if(e.removeQueryParameters===!0&&(r.search=""),e.sortQueryParameters){r.searchParams.sort();try{r.search=decodeURIComponent(r.search)}catch{}}e.removeTrailingSlash&&(r.pathname=r.pathname.replace(/\/$/,""));let i=n;return n=r.toString(),!e.removeSingleSlash&&r.pathname==="/"&&!i.endsWith("/")&&r.hash===""&&(n=n.replace(/\/$/,"")),(e.removeTrailingSlash||r.pathname==="/")&&r.hash===""&&e.removeSingleSlash&&(n=n.replace(/\/$/,"")),t&&!e.normalizeProtocol&&(n=n.replace(/^http:\/\//,"//")),e.stripProtocol&&(n=n.replace(/^(?:https?:)?\/\//,"")),n}var Rm=class{constructor({url:e,context:t}){if(!e)throw new Error("Missing property");this.url=e.startsWith("mailto:")?e:gx(e),this.context=t??"tab"}dispatch(){Hu?window.location.assign(this.url):this.context==="tab"?window.open(this.url,"_blank"):this.context==="window"?window.open(this.url,"_blank",`width=${window.innerWidth}, height=${window.innerHeight}`):window.location.assign(this.url)}};var t2={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0,rewind:!0},bx={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},jH=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Nm={CSS:{},springs:{}};function ui(n,e,t){return Math.min(Math.max(n,e),t)}function Xd(n,e){return n.indexOf(e)>-1}function yx(n,e){return n.apply(null,e)}var Ye={arr:function(n){return Array.isArray(n)},obj:function(n){return Xd(Object.prototype.toString.call(n),"Object")},pth:function(n){return Ye.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return!("isNode"in n)&&(n.nodeType||Ye.svg(n))},str:function(n){return typeof n=="string"},fnc:function(n){return typeof n=="function"},und:function(n){return typeof n>"u"},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return Ye.hex(n)||Ye.rgb(n)||Ye.hsl(n)},key:function(n){return!t2.hasOwnProperty(n)&&!bx.hasOwnProperty(n)&&n!=="targets"&&n!=="keyframes"}};function A2(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function n2(n,e){var t=A2(n),A=ui(Ye.und(t[0])?1:t[0],.1,100),r=ui(Ye.und(t[1])?100:t[1],.1,100),i=ui(Ye.und(t[2])?10:t[2],.1,100),s=ui(Ye.und(t[3])?0:t[3],.1,100),o=Math.sqrt(r/A),a=i/(2*Math.sqrt(r*A)),c=a<1?o*Math.sqrt(1-a*a):0,l=1,u=a<1?(a*o+-s)/c:-s+o;function d(f){var p=e?e*f/1e3:f;return a<1?p=Math.exp(-p*a*o)*(l*Math.cos(c*p)+u*Math.sin(c*p)):p=(l+u*p)*Math.exp(-p*o),f===0||f===1?f:1-p}function h(){var f=Nm.springs[n];if(f)return f;for(var p=1/6,m=0,g=0;;)if(m+=p,d(m)===1){if(g++,g>=16)break}else g=0;var y=m*p*1e3;return Nm.springs[n]=y,y}return e?d:h}function YH(n){return n===void 0&&(n=10),function(e){return Math.ceil(ui(e,1e-6,1)*n)*(1/n)}}var qH=function(){var n=11,e=1/(n-1);function t(l,u){return 1-3*u+3*l}function A(l,u){return 3*u-6*l}function r(l){return 3*l}function i(l,u,d){return((t(u,d)*l+A(u,d))*l+r(u))*l}function s(l,u,d){return 3*t(u,d)*l*l+2*A(u,d)*l+r(u)}function o(l,u,d,h,f){var p,m,g=0;do m=u+(d-u)/2,p=i(m,h,f)-l,p>0?d=m:u=m;while(Math.abs(p)>1e-7&&++g<10);return m}function a(l,u,d,h){for(var f=0;f<4;++f){var p=s(u,d,h);if(p===0)return u;var m=i(u,d,h)-l;u-=m/p}return u}function c(l,u,d,h){if(!(0<=l&&l<=1&&0<=d&&d<=1))return;var f=new Float32Array(n);if(l!==u||d!==h)for(var p=0;p<n;++p)f[p]=i(p*e,l,d);function m(g){for(var y=0,x=1,b=n-1;x!==b&&f[x]<=g;++x)y+=e;--x;var w=(g-f[x])/(f[x+1]-f[x]),T=y+w*e,M=s(T,l,d);return M>=.001?a(g,T,l,d):M===0?T:o(g,y,y+e,l,d)}return function(g){return l===u&&d===h||g===0||g===1?g:i(m(g),u,h)}}return c}(),r2=function(){var n={linear:function(){return function(A){return A}}},e={Sine:function(){return function(A){return 1-Math.cos(A*Math.PI/2)}},Circ:function(){return function(A){return 1-Math.sqrt(1-A*A)}},Back:function(){return function(A){return A*A*(3*A-2)}},Bounce:function(){return function(A){for(var r,i=4;A<((r=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((r*3-2)/22-A,2)}},Elastic:function(A,r){A===void 0&&(A=1),r===void 0&&(r=.5);var i=ui(A,1,10),s=ui(r,.1,2);return function(o){return o===0||o===1?o:-i*Math.pow(2,10*(o-1))*Math.sin((o-1-s/(Math.PI*2)*Math.asin(1/i))*(Math.PI*2)/s)}}},t=["Quad","Cubic","Quart","Quint","Expo"];return t.forEach(function(A,r){e[A]=function(){return function(i){return Math.pow(i,r+2)}}}),Object.keys(e).forEach(function(A){var r=e[A];n["easeIn"+A]=r,n["easeOut"+A]=function(i,s){return function(o){return 1-r(i,s)(1-o)}},n["easeInOut"+A]=function(i,s){return function(o){return o<.5?r(i,s)(o*2)/2:1-r(i,s)(o*-2+2)/2}}}),n}();function wx(n,e){if(Ye.fnc(n))return n;var t=n.split("(")[0],A=r2[t],r=A2(n);switch(t){case"spring":return n2(n,e);case"cubicBezier":return yx(qH,r);case"steps":return yx(YH,r);default:return yx(A,r)}}function i2(n){try{var e=document.querySelectorAll(n);return e}catch{return}}function Fm(n,e){for(var t=n.length,A=arguments.length>=2?arguments[1]:void 0,r=[],i=0;i<t;i++)if(i in n){var s=n[i];e.call(A,s,i,n)&&r.push(s)}return r}function Gm(n){return n.reduce(function(e,t){return e.concat(Ye.arr(t)?Gm(t):t)},[])}function KP(n){return Ye.arr(n)?n:(Ye.str(n)&&(n=i2(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function Sx(n,e){return n.some(function(t){return t===e})}function Tx(n){var e={};for(var t in n)e[t]=n[t];return e}function vx(n,e){var t=Tx(n);for(var A in n)t[A]=e.hasOwnProperty(A)?e[A]:n[A];return t}function km(n,e){var t=Tx(n);for(var A in e)t[A]=Ye.und(n[A])?e[A]:n[A];return t}function XH(n){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);return e?"rgba("+e[1]+",1)":n}function QH(n){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=n.replace(e,function(o,a,c,l){return a+a+c+c+l+l}),A=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),r=parseInt(A[1],16),i=parseInt(A[2],16),s=parseInt(A[3],16);return"rgba("+r+","+i+","+s+",1)"}function KH(n){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),t=parseInt(e[1],10)/360,A=parseInt(e[2],10)/100,r=parseInt(e[3],10)/100,i=e[4]||1;function s(d,h,f){return f<0&&(f+=1),f>1&&(f-=1),f<1/6?d+(h-d)*6*f:f<1/2?h:f<2/3?d+(h-d)*(2/3-f)*6:d}var o,a,c;if(A==0)o=a=c=r;else{var l=r<.5?r*(1+A):r+A-r*A,u=2*r-l;o=s(u,l,t+1/3),a=s(u,l,t),c=s(u,l,t-1/3)}return"rgba("+o*255+","+a*255+","+c*255+","+i+")"}function ZH(n){if(Ye.rgb(n))return XH(n);if(Ye.hex(n))return QH(n);if(Ye.hsl(n))return KH(n)}function qi(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function JH(n){if(Xd(n,"translate")||n==="perspective")return"px";if(Xd(n,"rotate")||Xd(n,"skew"))return"deg"}function xx(n,e){return Ye.fnc(n)?n(e.target,e.id,e.total):n}function di(n,e){return n.getAttribute(e)}function Mx(n,e,t){var A=qi(e);if(Sx([t,"deg","rad","turn"],A))return e;var r=Nm.CSS[e+t];if(!Ye.und(r))return r;var i=100,s=document.createElement(n.tagName),o=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;o.appendChild(s),s.style.position="absolute",s.style.width=i+t;var a=i/s.offsetWidth;o.removeChild(s);var c=a*parseFloat(e);return Nm.CSS[e+t]=c,c}function s2(n,e,t){if(e in n.style){var A=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=n.style[e]||getComputedStyle(n).getPropertyValue(A)||"0";return t?Mx(n,r,t):r}}function Ex(n,e){if(Ye.dom(n)&&!Ye.inp(n)&&(di(n,e)||Ye.svg(n)&&n[e]))return"attribute";if(Ye.dom(n)&&Sx(jH,e))return"transform";if(Ye.dom(n)&&e!=="transform"&&s2(n,e))return"css";if(n[e]!=null)return"object"}function o2(n){if(!!Ye.dom(n)){for(var e=n.style.transform||"",t=/(\w+)\(([^)]*)\)/g,A=new Map,r;r=t.exec(e);)A.set(r[1],r[2]);return A}}function $H(n,e,t,A){var r=Xd(e,"scale")?1:0+JH(e),i=o2(n).get(e)||r;return t&&(t.transforms.list.set(e,i),t.transforms.last=e),A?Mx(n,i,A):i}function Cx(n,e,t,A){switch(Ex(n,e)){case"transform":return $H(n,e,A,t);case"css":return s2(n,e,t);case"attribute":return di(n,e);default:return n[e]||0}}function Px(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var A=qi(n)||0,r=parseFloat(e),i=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return r+i+A;case"-":return r-i+A;case"*":return r*i+A}}function a2(n,e){if(Ye.col(n))return ZH(n);if(/\s/g.test(n))return n;var t=qi(n),A=t?n.substr(0,n.length-t.length):n;return e?A+e:A}function Dx(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function e5(n){return Math.PI*2*di(n,"r")}function t5(n){return di(n,"width")*2+di(n,"height")*2}function A5(n){return Dx({x:di(n,"x1"),y:di(n,"y1")},{x:di(n,"x2"),y:di(n,"y2")})}function l2(n){for(var e=n.points,t=0,A,r=0;r<e.numberOfItems;r++){var i=e.getItem(r);r>0&&(t+=Dx(A,i)),A=i}return t}function n5(n){var e=n.points;return l2(n)+Dx(e.getItem(e.numberOfItems-1),e.getItem(0))}function c2(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return e5(n);case"rect":return t5(n);case"line":return A5(n);case"polyline":return l2(n);case"polygon":return n5(n)}}function r5(n){var e=c2(n);return n.setAttribute("stroke-dasharray",e),e}function i5(n){for(var e=n.parentNode;Ye.svg(e)&&Ye.svg(e.parentNode);)e=e.parentNode;return e}function u2(n,e){var t=e||{},A=t.el||i5(n),r=A.getBoundingClientRect(),i=di(A,"viewBox"),s=r.width,o=r.height,a=t.viewBox||(i?i.split(" "):[0,0,s,o]);return{el:A,viewBox:a,x:a[0]/1,y:a[1]/1,w:s/a[2],h:o/a[3]}}function s5(n,e){var t=Ye.str(n)?i2(n)[0]:n,A=e||100;return function(r){return{property:r,el:t,svg:u2(t),totalLength:c2(t)*(A/100)}}}function o5(n,e){function t(o){o===void 0&&(o=0);var a=e+o>=1?e+o:0;return n.el.getPointAtLength(a)}var A=u2(n.el,n.svg),r=t(),i=t(-1),s=t(1);switch(n.property){case"x":return(r.x-A.x)*A.w;case"y":return(r.y-A.y)*A.h;case"angle":return Math.atan2(s.y-i.y,s.x-i.x)*180/Math.PI}}function ZP(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,A=a2(Ye.pth(n)?n.totalLength:n,e)+"";return{original:A,numbers:A.match(t)?A.match(t).map(Number):[0],strings:Ye.str(n)||e?A.split(t):[]}}function d2(n){var e=n?Gm(Ye.arr(n)?n.map(KP):KP(n)):[];return Fm(e,function(t,A,r){return r.indexOf(t)===A})}function h2(n){var e=d2(n);return e.map(function(t,A){return{target:t,id:A,total:e.length,transforms:{list:o2(t)}}})}function a5(n,e){var t=Tx(e);if(/^spring/.test(t.easing)&&(t.duration=n2(t.easing)),Ye.arr(n)){var A=n.length,r=A===2&&!Ye.obj(n[0]);r?n={value:n}:Ye.fnc(e.duration)||(t.duration=e.duration/A)}var i=Ye.arr(n)?n:[n];return i.map(function(s,o){var a=Ye.obj(s)&&!Ye.pth(s)?s:{value:s};return Ye.und(a.delay)&&(a.delay=o?0:e.delay),Ye.und(a.endDelay)&&(a.endDelay=o===i.length-1?e.endDelay:0),a}).map(function(s){return km(s,t)})}function l5(n){for(var e=Fm(Gm(n.map(function(i){return Object.keys(i)})),function(i){return Ye.key(i)}).reduce(function(i,s){return i.indexOf(s)<0&&i.push(s),i},[]),t={},A=function(i){var s=e[i];t[s]=n.map(function(o){var a={};for(var c in o)Ye.key(c)?c==s&&(a.value=o[c]):a[c]=o[c];return a})},r=0;r<e.length;r++)A(r);return t}function c5(n,e){var t=[],A=e.keyframes;A&&(e=km(l5(A),e));for(var r in e)Ye.key(r)&&t.push({name:r,tweens:a5(e[r],n)});return t}function u5(n,e){var t={};for(var A in n){var r=xx(n[A],e);Ye.arr(r)&&(r=r.map(function(i){return xx(i,e)}),r.length===1&&(r=r[0])),t[A]=r}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function d5(n,e){var t;return n.tweens.map(function(A){var r=u5(A,e),i=r.value,s=Ye.arr(i)?i[1]:i,o=qi(s),a=Cx(e.target,n.name,o,e),c=t?t.to.original:a,l=Ye.arr(i)?i[0]:c,u=qi(l)||qi(a),d=o||u;return Ye.und(s)&&(s=c),r.from=ZP(l,d),r.to=ZP(Px(s,l),d),r.start=t?t.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=wx(r.easing,r.duration),r.isPath=Ye.pth(i),r.isColor=Ye.col(r.from.original),r.isColor&&(r.round=1),t=r,r})}var f2={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,A,r){if(A.list.set(e,t),e===A.last||r){var i="";A.list.forEach(function(s,o){i+=o+"("+s+") "}),n.style.transform=i}}};function p2(n,e){var t=h2(n);t.forEach(function(A){for(var r in e){var i=xx(e[r],A),s=A.target,o=qi(i),a=Cx(s,r,o,A),c=o||qi(a),l=Px(a2(i,c),a),u=Ex(s,r);f2[u](s,r,l,A.transforms,!0)}})}function h5(n,e){var t=Ex(n.target,e.name);if(t){var A=d5(e,n),r=A[A.length-1];return{type:t,property:e.name,animatable:n,tweens:A,duration:r.end,delay:A[0].delay,endDelay:r.endDelay}}}function f5(n,e){return Fm(Gm(n.map(function(t){return e.map(function(A){return h5(t,A)})})),function(t){return!Ye.und(t)})}function m2(n,e){var t=n.length,A=function(i){return i.timelineOffset?i.timelineOffset:0},r={};return r.duration=t?Math.max.apply(Math,n.map(function(i){return A(i)+i.duration})):e.duration,r.delay=t?Math.min.apply(Math,n.map(function(i){return A(i)+i.delay})):e.delay,r.endDelay=t?r.duration-Math.max.apply(Math,n.map(function(i){return A(i)+i.duration-i.endDelay})):e.endDelay,r}var JP=0;function p5(n){var e=vx(t2,n),t=vx(bx,n),A=c5(t,n),r=h2(n.targets),i=f5(r,A),s=m2(i,t),o=JP;return JP++,km(e,{id:o,children:[],animatables:r,animations:i,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}var sr=[],$P=[],Bm,m5=function(){function n(){Bm=requestAnimationFrame(e)}function e(t){var A=sr.length;if(A){for(var r=0;r<A;){var i=sr[r];i.paused?(sr.splice(r,1),A-=1):(i.tick(t),r++)}n()}else Bm=cancelAnimationFrame(Bm)}return n}();function g5(){document.hidden?(sr.forEach(function(n){return n.pause()}),$P=sr.slice(0),hA.running=sr=[]):$P.forEach(function(n){return n.play()})}typeof document<"u"&&document.addEventListener("visibilitychange",g5);function hA(n){n===void 0&&(n={});var e=0,t=0,A=0,r,i=0,s=null;function o(x){var b=window.Promise&&new Promise(function(w){return s=w});return x.finished=b,b}var a=p5(n),c=o(a);function l(){var x=a.direction;x!=="alternate"&&(a.direction=x!=="normal"?"normal":"reverse"),a.reversed=!a.reversed,r.forEach(function(b){return b.reversed=a.reversed})}function u(x){return a.reversed?a.duration-x:x}function d(){e=0,t=u(a.currentTime)*(1/hA.speed)}function h(x,b){b&&b.seek(x-b.timelineOffset)}function f(x){if(a.reversePlayback)for(var w=i;w--;)h(x,r[w]);else for(var b=0;b<i;b++)h(x,r[b])}function p(x){var b=0,w=a.animations,T=w.length;for(a.reversePlayback===!0&&a.rewind===!1&&(x=a.duration+a.delay-a.endDelay-x);b<T;){var M=w[b],v=M.animatable,E=M.tweens,C=E.length-1,P=E[C];C&&(P=Fm(E,function(Ae){return x<Ae.end})[0]||P);for(var D=ui(x-P.start-P.delay,0,P.duration)/P.duration,L=isNaN(D)?1:P.easing(D),I=P.to.strings,B=P.round,N=[],W=P.to.numbers.length,X=void 0,F=0;F<W;F++){var k=void 0;if(a.reversePlayback===!0&&a.rewind===!1)var Q=P.to.numbers[F],z=P.from.numbers[F]||0;else var z=P.to.numbers[F],Q=P.from.numbers[F]||0;P.isPath?k=o5(P.value,L*z):k=Q+L*(z-Q),B&&(P.isColor&&F>2||(k=Math.round(k*B)/B)),N.push(k)}var U=I.length;if(!U)X=N[0];else{X=I[0];for(var j=0;j<U;j++){var q=I[j],V=I[j+1],ue=N[j];isNaN(ue)||(V?X+=ue+V:X+=ue+" ")}}f2[M.type](v.target,M.property,X,v.transforms),M.currentValue=X,b++}}function m(x){a[x]&&!a.passThrough&&a[x](a)}function g(){a.remaining&&a.remaining!==!0&&a.remaining--}function y(x){var b=a.duration,w=a.delay,T=b-a.endDelay,M=u(x);a.progress=ui(M/b*100,0,100),a.reversePlayback=M<a.currentTime,r&&f(M),!a.began&&a.currentTime>=0&&(a.began=!0,m("begin")),!a.loopBegan&&a.currentTime>0&&(a.loopBegan=!0,m("loopBegin")),M<=w&&a.currentTime!==0&&(p(0),m("change")),(M>=T&&a.currentTime!==b||!b)&&(p(b),m("change")),M>w&&M<T?(a.changeBegan||(a.changeBegan=!0,a.changeCompleted=!1,m("changeBegin")),m("change"),p(M)):a.changeBegan?(a.changeCompleted=!0,a.changeBegan=!1,m("change"),m("changeComplete")):a.began&&M>T&&(m("change"),m("changeComplete")),a.currentTime=ui(M,0,b),a.began&&m("update"),x>=b&&(t=0,g(),a.remaining?(e=A,m("loopComplete"),a.loopBegan=!1,a.direction==="alternate"&&l()):(a.paused=!0,a.completed||(a.completed=!0,m("loopComplete"),m("complete"),!a.passThrough&&"Promise"in window&&(s(),c=o(a)))))}return a.reset=function(){var x=a.direction;a.passThrough=!1,a.currentTime=0,a.progress=0,a.paused=!0,a.began=!1,a.loopBegan=!1,a.changeBegan=!1,a.completed=!1,a.changeCompleted=!1,a.reversePlayback=!1,a.reversed=x==="reverse",a.remaining=a.loop,r=a.children,i=r.length;for(var b=i;b--;)a.children[b].reset();(a.reversed&&a.loop!==!0||x==="alternate"&&a.loop===1)&&a.remaining++,p(a.reversed?a.duration:0)},a.set=function(x,b){return p2(x,b),a},a.tick=function(x){A=x,e||(e=A),y((A+(t-e))*hA.speed)},a.seek=function(x){y(u(x))},a.pause=function(){a.paused=!0,d()},a.play=function(){!a.paused||(a.completed&&a.reset(),a.paused=!1,sr.push(a),d(),Bm||m5())},a.reverse=function(){l(),a.completed=!a.reversed,d()},a.restart=function(){a.reset(),a.play()},a.reset(),a.autoplay&&a.play(),a}function e2(n,e){for(var t=e.length;t--;)Sx(n,e[t].animatable.target)&&e.splice(t,1)}function y5(n){for(var e=d2(n),t=sr.length;t--;){var A=sr[t],r=A.animations,i=A.children;e2(e,r);for(var s=i.length;s--;){var o=i[s],a=o.animations;e2(e,a),!a.length&&!o.children.length&&i.splice(s,1)}!r.length&&!i.length&&A.pause()}}function v5(n,e){e===void 0&&(e={});var t=e.direction||"normal",A=e.easing?wx(e.easing):null,r=e.grid,i=e.axis,s=e.from||0,o=s==="first",a=s==="center",c=s==="last",l=Ye.arr(n),u=parseFloat(l?n[0]:n),d=l?parseFloat(n[1]):0,h=qi(l?n[1]:n)||0,f=e.start||0+(l?u:0),p=[],m=0;return function(g,y,x){if(o&&(s=0),a&&(s=(x-1)/2),c&&(s=x-1),!p.length){for(var b=0;b<x;b++){if(!r)p.push(Math.abs(s-b));else{var w=a?(r[0]-1)/2:s%r[0],T=a?(r[1]-1)/2:Math.floor(s/r[0]),M=b%r[0],v=Math.floor(b/r[0]),E=w-M,C=T-v,P=Math.sqrt(E*E+C*C);i==="x"&&(P=-E),i==="y"&&(P=-C),p.push(P)}m=Math.max.apply(Math,p)}A&&(p=p.map(function(L){return A(L/m)*m})),t==="reverse"&&(p=p.map(function(L){return i?L<0?L*-1:-L:Math.abs(m-L)}))}var D=l?(d-u)/m:u;return f+D*(Math.round(p[y]*100)/100)+h}}function x5(n){n===void 0&&(n={});var e=hA(n);return e.duration=0,e.add=function(t,A){var r=sr.indexOf(e),i=e.children;r>-1&&sr.splice(r,1);function s(d){d.passThrough=!0}for(var o=0;o<i.length;o++)s(i[o]);var a=km(t,vx(bx,n));a.targets=a.targets||n.targets;var c=e.duration;a.autoplay=!1,a.direction=e.direction,a.timelineOffset=Ye.und(A)?c:Px(A,c),s(e),a.rewind=e.rewind,e.seek(a.timelineOffset);var l=hA(a);s(l),i.push(l);var u=m2(i,n);return e.delay=u.delay,e.endDelay=u.endDelay,e.duration=u.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}hA.version="3.2.0";hA.speed=1;hA.running=sr;hA.remove=y5;hA.get=Cx;hA.set=p2;hA.convertPx=Mx;hA.path=s5;hA.setDashoffset=r5;hA.stagger=v5;hA.timeline=x5;hA.easing=wx;hA.penner=r2;hA.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n};var Ix=hA;var g2=new S,y2=new S,v2=new Ze;function x2(n,e,t,A){if(A===0)return t.copy(n);if(A===1)return t.copy(e);let r=n.w*e.w+n.x*e.x+n.y*e.y+n.z*e.z;if(r>=1)return t.copy(n);let i=1-r*r;if(i<=Number.EPSILON){let l=1-A;return t.w=l*n.w+A*e.w,t.x=l*n.x+A*e.x,t.y=l*n.y+A*e.y,t.z=l*n.z+A*e.z,t.normalize(),t}let s=Math.sqrt(i),o=Math.atan2(s,r),a=Math.sin((1-A)*o)/s,c=Math.sin(A*o)/s;return t.w=n.w*a+e.w*c,t.x=n.x*a+e.x*c,t.y=n.y*a+e.y*c,t.z=n.z*a+e.z*c,t}function Ws(n,e,t,A,r){let i=t[n]?t[n]:void 0,s=A[n];if(s==null)return;let o=i??e[n],a=s;if(o!==a)return{update:c=>{let l=Ve.lerp(o,a,c);r?e[n]=Math.trunc(l):e[n]=l},start:()=>{e[n]=o},end:()=>{e[n]=a}}}function Ox(n,e,t,A,r){let i=t[n]?t[n]:void 0,s=A[n];if(!s)return;let o=e[n],a=[...i??o],c=[...s];if(!(a.length!==c.length||So(a,c)))return{update:l=>{a.forEach((u,d)=>{let h=Ve.lerp(u,c[d],l);e[n][d]=r?Math.trunc(h):h})},start:()=>{Object.assign(e[n],a)},end:()=>{Object.assign(e[n],c)}}}function Lx(n,e,t,A){let r=t[n]?t[n]:void 0,i=A[n];if(!i)return;let s=e[n],o=r?new S().fromArray(r):s.clone(),a=new S().fromArray(i);if(!o.equals(a))return{update:c=>{s.lerpVectors(o,a,c)},start:()=>{s.copy(o)},end:()=>{s.copy(a)}}}function b2(n,e,t,A){let r=t[n]?t[n]:void 0,i=A[n];if(!i)return;let s=e[n],o=r?new de().fromArray(r):s.clone(),a=new S,c=new Ze,l=new S;o.decompose(a,c,l);let u=new de().fromArray(i),d=new S,h=new Ze,f=new S;if(u.decompose(d,h,f),!o.equals(u))return{update:p=>{v2.slerpQuaternions(c,h,p),g2.lerpVectors(a,d,p),y2.lerpVectors(l,f,p),s.compose(g2,v2,y2)},start:()=>{s.compose(a,c,l)},end:()=>{s.compose(d,h,f)}}}function w2(n,e,t,A,r){let i=t[n]?t[n]:void 0,s=A[n];if(!s)return;let o=e[n],a=i?typeof i=="string"?r.getColor(i).clone():new Le().setRGB(i.r,i.g,i.b):o.clone(),c=typeof s=="string"?r.getColor(s).clone():new Le().setRGB(s.r,s.g,s.b);if(a.equals(c))return;let l=o.clone();return e[n]=l,{update:u=>{l.lerpColors(a,c,u)},start:()=>{l.copy(a)},end:()=>{l.copy(c)}}}function S2(n,e,t){let A=[],r=n.cameraType==="OrthographicCamera"?e.orthographic?.zoom:e.perspective?.zoom,i=n.cameraType==="OrthographicCamera"?t.orthographic?.zoom:t.perspective?.zoom;if(i!==void 0){let s=r??n.zoom,o=i;s!==o&&A.push({update:a=>{n.zoom=Ve.lerp(s,o,a),n.updateProjectionMatrix()},start:()=>{n.zoom=s,n.updateProjectionMatrix()},end:()=>{n.zoom=o,n.updateProjectionMatrix()}})}if(t.targetOffset!==void 0){let s=Ws("targetOffset",n,e,t);s&&A.push(s)}return A}function T2(n,e,t,A){let r=[];if(!("geometry"in t))return r;let i="geometry"in e?e.geometry:{},s=t.geometry;if(n instanceof Er){let h=i.scaleBaked??n.data.geometry.scaleBaked,f=s.scaleBaked??n.data.geometry.scaleBaked;return qr.isEqual(h,f)||r.push({update:p=>{n.updateGeometryInteractions({scaleBaked:[Ve.lerp(h[0],f[0],p),Ve.lerp(h[1],f[1],p),Ve.lerp(h[2],f[2],p)]},A),n.invalidateDownstreamBooleanData()},start:()=>{n.updateGeometryInteractions({scaleBaked:h},A),n.invalidateDownstreamBooleanData()},end:()=>{n.updateGeometryInteractions({scaleBaked:f},A),n.invalidateDownstreamBooleanData()}}),r}let{width:o,height:a,depth:c}=i,{width:l,height:u,depth:d}=s;if(l!==void 0||u!==void 0||d!==void 0){let{width:h,height:f,depth:p}=n.geometry.userData.parameters,m=o??h,g=a??f,y=c??p,x=l??h,b=u??f,w=d??p;(m!==x||g!==b||y!==w)&&r.push({update:T=>{n.updateGeometryInteractions({width:Ve.lerp(m,x,T),height:Ve.lerp(g,b,T),depth:Ve.lerp(y,w,T)},A),n.updateGeometryGroupsIfNeeded(),n.invalidateDownstreamBooleanData()},start:()=>{n.updateGeometryInteractions({width:m,height:g,depth:y},A),n.invalidateDownstreamBooleanData()},end:()=>{n.updateGeometryInteractions({width:x,height:b,depth:w},A),n.invalidateDownstreamBooleanData()}})}return r}function M2(n,e,t,A){let r=[];if(t.intensity!==void 0){let i=Ws("intensity",n,e,t);i&&r.push(i)}if(t.color!==void 0){let i=w2("color",n,e,t,A);i&&r.push(i)}return r}function C2(n,e,t,A){let r=[];if(Array.isArray(n.material)){if(!("materials"in t&&t.materials))return r;let i="materials"in e&&e.materials?e.materials:[],s=t.materials;n.material.forEach((o,a)=>{if(!s[a])return;let c=i[a]??{},l=s[a];typeof c=="string"||typeof l=="string"||r.push(...E2(o,c,l,A))})}else{if(!("material"in t&&t.material))return r;let i="material"in e&&e.material?e.material:{},s=t.material;if(typeof i=="string"||typeof s=="string")return r;r.push(...E2(n.material,i,s,A))}return r}function E2(n,e,t,A){let r=[];for(let i of n.layers){let s=e.layers?.data(i.uuid),o=t.layers.data(i.uuid);if(!o||!(i.visible??!0)||!(o.visible??!0))continue;let a=i.getNames().filter(c=>!dp.some(l=>c.includes(l)));for(let c of a)try{let l=i.getValue(c),u;if(c==="colors")u=C5(i,s,o,c);else if(Array.isArray(l))c==="steps"&&(u=E5(i,s,o,c));else if(typeof l=="number")u=b5(i,s,o,c);else{if(typeof l=="boolean")continue;l instanceof G?u=w5(i,s,o,c):l instanceof S?u=S5(i,s,o,c):l instanceof $t?u=M5(i,s,o,c,A):l instanceof Le?u=T5(i,s,o,c,A):"isTexture"in l&&(u=P5(i,s,o,c))}u&&(Array.isArray(u)?r.push(...u):r.push(u))}catch(l){console.error(`lerpMaterial: unexpected material layer for ${c}`,l)}}return r}function b5(n,e,t,A){if(!n.hasValue(A)||!(A in t))return;let r=e?e[A]:n.getValue(A),i=t[A];if(r!==i)return{update:s=>{n.setValue(A,Ve.lerp(r,i,s))},start:()=>{n.setValue(A,r)},end:()=>{n.setValue(A,i)}}}function w5(n,e,t,A){if(!n.hasValue(A)||!(A in t))return;let r=n.getValue(A),i=e?new G().fromArray(e[A]):r.clone(),s=new G().fromArray(t[A]);if(!i.equals(s))return{update:o=>{r.lerpVectors(i,s,o)},start:()=>{r.copy(i)},end:()=>{r.copy(s)}}}function S5(n,e,t,A){if(!n.hasValue(A)||!(A in t))return;let r=n.getValue(A),i=e?new S().fromArray(e[A]):r.clone(),s=new S().fromArray(t[A]);if(!i.equals(s))return{update:o=>{r.lerpVectors(i,s,o)},start:()=>{r.copy(i)},end:()=>{r.copy(s)}}}function T5(n,e,t,A,r){if(!n.hasValue(A)||!(A in t))return;let i=e?e[A]:void 0,s=t[A],o=n.getValue(A),a=i?typeof i=="string"?r.getColor(i).clone():new Le().setRGB(i.r,i.g,i.b):o.clone(),c=typeof s=="string"?r.getColor(s).clone():new Le().setRGB(s.r,s.g,s.b);if(a.equals(c))return;let l=o.clone();return n.setValue(A,l),{update:u=>{l.lerpColors(a,c,u)},start:()=>{l.copy(a)},end:()=>{l.copy(c)}}}function M5(n,e,t,A,r){if(!n.hasValue(A)||!(A in t))return;let i=e?e[A]:void 0,s=t[A],o=n.getValue(A),a=i?typeof i=="string"?r.getColor(i).clone():new Le().setRGB(i.r,i.g,i.b):o.clone(),c=typeof s=="string"?r.getColor(s).clone():new $t(s.r,s.g,s.b,s.a);if(a.equals(c))return;let l=o.clone();return n.setValue(A,l),{update:u=>{l.lerpColors(a,c,u)},start:()=>{l.copy(a)},end:()=>{l.copy(c)}}}function E5(n,e,t,A="steps"){if(!n.hasValue(A)||!(A in t))return;let r=[],i=n.getValue(A),s=e?e[A]:i,o=t[A];for(let a=0;a<i.length;++a){let c=s[a],l=o[a];c!==l&&r.push({update:u=>{i[a]=Ve.lerp(c,l,u)},start:()=>{i[a]=c},end:()=>{i[a]=l}})}return r.length?r:void 0}function C5(n,e,t,A="colors"){if(!n.hasValue(A)||!(A in t))return;let r=[],i=n.getValue(A),s=e?e[A]:i.map(a=>a.toArray()),o=t[A];for(let a=0;a<i.length;++a){let c=[...s[a]],l=[...o[a]];ku.isEqual(c,l)||r.push({update:u=>{i[a].fromArray(ku.lerp(c,l,u))},start:()=>{i[a].fromArray(c)},end:()=>{i[a].fromArray(l)}})}return r.length?r:void 0}function P5(n,e,t,A="texture"){if(!n.hasValue(A)||!(A in t))return;let r=n.getNode("mat");if(!r)return;let i=e?e[A]:r,s=t[A],o=[...i.repeat],a=[...i.offset],c=[...s.repeat],l=[...s.offset];if(!Co.isEqual(o,c)||!Co.isEqual(a,l))return{update:u=>{r.repeat=Co.lerp(o,c,u),r.offset=Co.lerp(a,l,u),r.updateMatrix()},start:()=>{r.repeat=[...o],r.offset=[...a],r.updateMatrix()},end:()=>{r.repeat=[...c],r.offset=[...l],r.updateMatrix()}}}var _x=new S,P2=new jt;function D2(n,e,t,A){let r=[],i=Lx("position",n,e,t);i&&r.push(i);let s=Lx("scale",n,e,t);s&&r.push(s);let o=D5(n,e,t,A);o&&r.push(o);let a=b2("hiddenMatrix",n,e,t);if(a&&r.push(a),i||s||o||a){let c=()=>{n.updateMatrix(),n.parent?.matrixWorldFusedFalse&&(n.matrixWorld.multiplyMatrices(n.parent.matrixWorldFusedFalse,n.matrix),n.matrixWorldNeedsUpdate=!1),MA(n)&&Hn(n.parent)&&n.invalidateDownstreamBooleanData(!0)};r.push({update:c,start:c,end:c})}return r}function D5(n,e,t,A){let r=e?.rotation?e.rotation:void 0,i=t.rotation;if(!i)return;let s=r?new S().fromArray(r):new S().setFromEuler(n.rotation),o=new S().fromArray(i);if(s.equals(o))return;let a=_x.subVectors(o,s);if(A&&a.toArray().every(c=>Math.abs(c)<2*Math.PI)){let c=new Ze().setFromEuler(P2.setFromVector3(s)),l=new Ze().setFromEuler(P2.setFromVector3(o));return{update:u=>{x2(c,l,n.quaternion,u)},start:()=>{n.rotation.setFromVector3(s)},end:()=>{n.rotation.setFromVector3(o)}}}else return{update:c=>{_x.lerpVectors(s,o,c),n.rotation.setFromVector3(_x)},start:()=>{n.rotation.setFromVector3(s)},end:()=>{n.rotation.setFromVector3(o)}}}function _c(n,e,t,A){if(typeof e[n]=="number")return Ws(n,e,t??{},A);if(Array.isArray(e[n]))return Ox(n,e,t??{},A)}function I2(n,e,t){let A=[];if(!("cloner"in t)||!n.cloner)return A;let r=n.cloner,i="cloner"in e?e.cloner:{},s=t.cloner;Rv.forEach(d=>{let h;d==="count"?h=Ws("count",r.parameters,i,s,!0):h=_c(d,r.parameters,i??{},s),h&&A.push(h)});let o=I5(r,i,s);o?.length&&A.push(...o);let a=O5(r,i,s);a?.length&&A.push(...a);let c=L5(r,i,s);c?.length&&A.push(...c);let l=_5(r,i,s);l?.length&&A.push(...l);let u=R5(r,i,s);return u?.length&&A.push(...u),A.length&&A.push({update:()=>{r.update()}}),A}function I5(n,e,t){if(n.parameters.type!=="radial")return;let A=e.radial,r=t.radial;if(!r)return;let i=n.parameters.radial,s=[];return Bv.forEach(o=>{let a=_c(o,i,A??{},r);a&&s.push(a)}),s}function O5(n,e,t){if(n.parameters.type!=="linear")return;let A=e.linear,r=t.linear;if(!r)return;let i=[],s=n.parameters.linear;return Nv.forEach(o=>{let a=_c(o,s,A??{},r);a&&i.push(a)}),i}function L5(n,e,t){if(n.parameters.type!=="grid")return;let A=e.grid,r=t.grid;if(!r)return;let i=[],s=n.parameters.grid;return Fv.forEach(o=>{let a;o==="count"?a=Ox(o,s,A??{},r,!0):a=_c(o,s,A??{},r),a&&i.push(a)}),i}function _5(n,e,t){if(n.parameters.type!=="toObject")return;let A=e.toObject,r=t.toObject;if(!r)return;let i=[],s=n.parameters.toObject;return Gv.forEach(o=>{let a;o==="count"?a=Ws(o,s,A??{},r,!0):a=_c(o,s,A??{},r),a&&i.push(a)}),i}function R5(n,e,t){if(!n.parameters.randomness)return;let A=e.randomnessObject,r=t.randomnessObject;if(!r)return;let i=[],s=n.parameters.randomnessObject;return kv.forEach(o=>{let a=_c(o,s,A??{},r);a&&i.push(a)}),i}function Um(n,e,t,A,r){let i=[];return n.data.visible&&i.push(...D2(n,e,t,r)),n.data.visible&&i.push(...I2(n,e,t)),MA(n)?(n instanceof eA&&n.data.visible&&i.push(...T2(n,e,t,A)),n.data.visible&&i.push(...C2(n,e,t,A))):lP(n)?n.data.visible&&i.push(...M2(n,e,t,A)):aP(n)&&i.push(...S2(n,e,t)),i.length?{update:s=>{i.forEach(o=>o.update(s))},start:s=>{i.forEach(o=>o.start?.(s))},end:s=>{i.forEach(o=>o.end?.(s))}}:void 0}var Qd=new S,B5=new Ze;function O2(n,e,t,A=!1){let r=[];e.traverseEntity(i=>{let s=i.uuid,o=i.data;if(!i||(delete i.states,!o.states))return;let a=!1;r.some(l=>n.objects.isDescendantOf(s,l))?a=!0:o.physics?.fusedBody===!0&&o.physics.rigidBody==="dynamic"&&r.push(s),i.data=o,i.currentState=null,i.currentTransitionAction=null;let c=!1;for(let l of o.states){let u=l.data.geometry;u&&Object.keys(u).length!==0&&(c=!0),!(n.environment.usePhysics===!0&&o.physics&&(o.physics.rigidBody==="dynamic"||a)&&(l.data.position!==void 0||l.data.rotation!==void 0||l.data.hiddenMatrix!==void 0))&&(i.states||(i.states={}),i.states[l.id]=Bi.patch(o,l.data))}A&&(i.matrixWorld0!==void 0?(i.matrixWorld.identity(),i.rigidBody?.setTranslation(Qd,!0),i.rigidBody?.setRotation(B5,!0),i.rigidBody?.setLinvel(Qd,!0),i.rigidBody?.setAngvel(Qd,!0)):i.rigidBody&&(i.rigidBody?.setTranslation(i.position0,!0),i.rigidBody?.setRotation(i.rotation0,!0),i.rigidBody?.setLinvel(Qd,!0),i.rigidBody?.setAngvel(Qd,!0)),i.hiddenMatrix0!==void 0&&(i.hiddenMatrix.copy(i.hiddenMatrix0),i.hiddenMatrix.premultiply(i.parent.matrixWorld0))),N5(e,i,null,t,o.events.find(l=>l.data.type==="Follow"||l.data.type==="LookAt")!==void 0)})}function N5(n,e,t,A,r=!1){e instanceof eA&&e.removeInteractionGeometry(),e.changeSelectedState(t,{scene:n,shared:A},r),e instanceof eA&&e.updateGeometryGroupsIfNeeded()}function F5(n){let e={duration:n.duration,easing:"linear"};switch(n.easing){case 0:e.easing="cubicBezier( 0, 0, 1, 1 )";break;case 1:e.easing="cubicBezier( .25, .1, .25, 1 )";break;case 2:e.easing="cubicBezier( .42, 0, 1, 1 )";break;case 3:e.easing="cubicBezier( 0, 0, .58, 1 )";break;case 4:e.easing="cubicBezier( .42, 0, .58, 1 )";break;case 5:let{control1:t,control2:A}=n;e.easing=`cubicBezier(
				${t[0]}, ${t[1]}, ${A[0]}, ${A[1]}
			)`;break;case 6:let{mass:r,stiffness:i,damping:s,velocity:o}=n;e.easing=`spring( ${r}, ${i}, ${s}, ${o} )`}return e}function G5(n){let e={startOnceDelay:0,delay:0,repeatDelay:0,loop:n.repeat===-1?!0:n.repeat+1};if(n.repeat===0)e.direction="normal",e.rewind=n.direction==="pingpong-rewind";else switch(n.direction){case"pingpong":e.direction="alternate",e.rewind=!1;break;case"pingpong-rewind":e.direction="alternate",e.rewind=!0;break;default:e.direction="normal",e.rewind=!1;break}switch(n.delayDirection){case"start-once":break;case"start":e.delay=n.delay;break;case"end":e.endDelay=n.delay;break;case"start-end":case void 0:e.delay=n.delay,e.endDelay=n.delay;break}return e}var Rx=class{constructor(e,t,A,r,i,s,o){this.object=e;this.data=r;this.sharedAssets=i;this.allowSlerp=s;this.id=o;this.targets={t:0};this.firstLoop=!0;this.reverse=!1;this._changeBegan=!1;this._changeCompleted=!0;this.onChange=()=>{this.callback&&(this.callback.update(this.targets.t),this.object.dispatchEvent({type:"requestRender"})),this.targets.t===0?this._changeCompleted||(this._changeCompleted=!0,this._changeBegan=!1,this.onChangeComplete()):this.targets.t===1?this._changeCompleted||(this._changeCompleted=!0,this._changeBegan=!1,this.onChangeComplete()):(this._changeCompleted&&(this._changeCompleted=!1),this._changeBegan||(this._changeBegan=!0,this.onChangeBegin()))};this.onChangeBegin=()=>{let e,t;this.reverse?(e=this.to,t=this.from):(e=this.from,t=this.to),this.object.currentState=t.id,this.object.dispatchEvent({type:"beginState",state:this.targets.t>.5?e.id:t.id})};this.onChangeComplete=()=>{let e,t;this.reverse?(e=this.to,t=this.from):(e=this.from,t=this.to),this.firstLoop&&(this.onFirstLoop(),this.firstLoop=!1),this.object.currentState=t.id,this.object.dispatchEvent({type:"completeState",state:this.targets.t<.5?e.id:t.id})};this.onFirstLoop=()=>{if(this.useCurrentState){let e,t;this.reverse?(e=this.to,t=this.from):(e=this.from,t=this.to),this.callback=Um(this.object,e.data,t.data,this.sharedAssets,this.allowSlerp)}};let a=this.getState(t);if(!a)throw new Error("Missing property");this.from=a;let c=this.getState(A);if(!c)throw new Error("Missing property");this.to=c,this.useCurrentState=t===void 0||A===void 0;let l={};this.object.hiddenMatrix0&&(l.hiddenMatrix=this.object.hiddenMatrix0.elements),this.callback=Um(this.object,t===void 0?l:this.from.data,A===void 0?l:this.to.data,this.sharedAssets,this.allowSlerp),this.core={targets:this.targets,t:1,autoplay:!1,...G5(r),...F5(r),change:this.onChange},this.startOnceDelay=r.delayDirection==="start-once"?r.delay:0}get changeBegan(){return this._changeBegan}get changeCompleted(){return this._changeCompleted}getState(e){let t,A;if(typeof e=="string"?(t=e,A=this.object.states?.[t]):e===null?(t=null,A=this.object.data):e===void 0&&(t=this.object.currentState,A=t?this.object.states?.[t]:this.object.data),!(t===void 0||A===void 0))return{id:t,data:A}}toggle(e){this._changeBegan=!1,this._changeCompleted=!0,this.targets.t=0;let t;e!==void 0?e?(this.reverse=!1,t=this.to):(this.reverse=!0,t=this.from):this.object.currentState===this.from.id?(this.reverse=!1,t=this.to):(this.reverse=!0,t=this.from),this.callback=Um(this.object,{},t.data,this.sharedAssets,this.allowSlerp)}},Kd=class{constructor(e,t,A,r){this.object=t;this.id=r;this.tweens=[];this._finished=!1;if(e.tweens.length<1)throw new Error("Missing property");try{let i=new Rx(t,e.tweens[0].data.state,e.tweens[1].data.state,e.tweens[1].data,A,e.allowSlerp??!1,"0");this.tween=i,this.core=Ix({...i.core}),this.core.finished.then(()=>this._finished=!0),this.startOnceDelay=i.startOnceDelay}catch{throw new Error("Missing property")}}get finished(){return this._finished}get paused(){return this.core.paused}play(){this._finished||(clearTimeout(this.timeoutId),this.timeoutId=window.setTimeout(()=>this.core.play(),this.startOnceDelay))}pause(){this.core.pause(),clearTimeout(this.timeoutId),delete this.timeoutId}stop(){this.pause(),this.seek(0),this.core.reset(),this._finished=!1}seek(e){let t=e*this.core.duration;this.core.seek(t)}toggle(e){this.core.pause(),clearTimeout(this.timeoutId),this.tween.toggle(e),this.core=Ix({...this.tween.core}),this.core.finished.then(()=>this._finished=!0),this.tween.changeCompleted?this.timeoutId=window.setTimeout(()=>this.core.play(),this.startOnceDelay):this.core.play()}dispose(){this.pause()}},hi=class extends Ut{constructor(t,A,r,i){super();this.id=t;this.data=A;this.sharedAssets=i;if(!A.object)throw new Error("Missing property");let s=r.find(A.object);if(!s)throw new Error("Missing property");if(!s.states)throw new Error("Missing property");this.object=s;try{this.timeline=new Kd(this.data,this.object,this.sharedAssets,"0")}catch{throw new Error("Missing property")}}play(){this.object.currentTransitionAction!==this&&(this.object.currentTransitionAction?.dispose(),this.object.currentTransitionAction=this,this.timeline=new Kd(this.data,this.object,this.sharedAssets,"0"),this.dispatchEvent({type:"reset"})),this.timeline.play()}stop(){this.timeline.stop()}seek(t){this.timeline.seek(t)}toggle(t){this.object.currentTransitionAction!==this&&(this.object.currentTransitionAction?.dispose(),this.object.currentTransitionAction=this,this.timeline=new Kd(this.data,this.object,this.sharedAssets,"0"),this.dispatchEvent({type:"reset"})),this.timeline.toggle(t)}dispose(){this.timeline.dispose()}};function jn(n,e,t,A,r){let i={Audio:[],Video:[],Link:[],Transition:[]};return e.forEach(({id:s,data:o})=>{try{o.type==="Audio"?Gu[n.type].includes("Audio")&&i.Audio.push(new ci(s,o,t,r)):o.type==="Video"?Gu[n.type].includes("Video")&&i.Video.push(new Hs(s,o,t)):o.type==="Link"?Gu[n.type].includes("Link")&&i.Link.push(new Rm(o)):o.type==="Transition"&&Gu[n.type].includes("Transition")&&i.Transition.push(new hi(s,o,A,r))}catch{}}),i}function Yn(n){Object.values(n).forEach(e=>{e.forEach(t=>{(t instanceof ci||t instanceof Hs||t instanceof hi)&&t.dispose()})})}var Bx=[["start","Start"],["keyDown","KeyDown"],["keyUp","KeyUp"],["mouseDown","MouseDown"],["mouseUp","MouseUp"],["mouseHover","MouseHover"],["collision","Collision"],["lookAt","LookAt"],["follow","Follow"],["scroll","Scroll"]],L2=n=>Bx.find(([e,t])=>t===n)?.[0],js=n=>Bx.find(([e])=>e===n)?.[1],k5=(n,e)=>{let t=L2(n);if(t){let A=new CustomEvent(t,{bubbles:!0});return Object.defineProperty(A,"target",{writable:!1,value:e}),A}},Vm=class extends HA{constructor(t){super(t);this.objectsPerEvents=new Map;this.splineEvents={};this.onBeginEvent=t=>{if(!t.eventName||!t.target)return;let A=this.splineEvents[L2(t.eventName)]?.[t.target.uuid];if(!A)return;t.eventName==="Scroll"&&t.deltaY!==void 0&&Object.assign(A,{deltaY:t.deltaY});let{domElement:r}=this.eventContext;r.dispatchEvent(A)};let{scene:A}=this.eventContext;A.traverseEntity(r=>{if(!!r.data?.events.length){for(let[i,s]of Bx)if(r.data.events.some(o=>o.data.type===s&&!o.data.disabled)){this.objectsPerEvents.has(i)?this.objectsPerEvents.get(i)?.push(r):this.objectsPerEvents.set(i,[r]);let o={id:r.uuid,name:r.name},a=k5(s,o),c=this.splineEvents[i];c?c[r.uuid]=a:this.splineEvents[i]={[r.uuid]:a}}}})}connect(){this.objectsPerEvents.forEach(t=>{t.forEach(A=>{A.addEventListener("beginEvent",this.onBeginEvent)})})}disconnect(){this.objectsPerEvents.forEach(t=>{t.forEach(A=>{A.removeEventListener("beginEvent",this.onBeginEvent)})})}};var Nx=class{constructor(e,t,A,r){this.data=e;this.object=t;this.entered=!1;if(this.useToggle=e.toggle,(e.type==="KeyDown"||e.type==="KeyUp"||e.type==="KeyPress")&&!e.key)throw new Error("Missing property");this.actions=jn(e,e.actions,t,A,r)}disconnect(){Yn(this.actions)}dispatch(){this.useToggle?this.actions.Transition.forEach(e=>{e.toggle()}):this.data.type==="MousePress"||this.data.type==="KeyPress"?this.entered||(this.entered=!0,this.actions.Transition.forEach(e=>e.toggle(!0))):this.actions.Transition.forEach(e=>{e.play()}),this.actions.Link.forEach(e=>{e.dispatch()}),this.actions.Audio.forEach(e=>{e.dispatchBasic()}),this.actions.Video.forEach(e=>{e.dispatchBasic()})}dispatchRelease(){this.entered&&(this.entered=!1,this.actions.Transition.forEach(e=>e.toggle(!1)))}dispatchUserEvent(e){this.actions.Transition.forEach(t=>{t.toggle(!e)}),this.actions.Link.forEach(t=>{t.dispatch()}),this.actions.Audio.forEach(t=>{t.dispatchBasic()}),this.actions.Video.forEach(t=>{t.dispatchBasic()})}},zm=class extends HA{constructor(t){super(t);this.objectsPerTypes={MouseDown:[],MouseUp:[],MousePress:[],KeyDown:[],KeyUp:[],KeyPress:[]};this.eventsPerObjects={MouseDown:{},MouseUp:{},MousePress:{},KeyDown:{},KeyUp:{},KeyPress:{}};this.heldKeys={};this._prevObjects=[];this.onMouseDown=t=>{Je.length>1||(this.eventContext.updateRaycaster(t),this.handleMouseEvent("MouseDown"))};this.onMouseUp=t=>{Je.length>1||(this.eventContext.updateRaycaster(t),this.handleMouseEvent("MouseUp"))};this.onMousePressDown=t=>{Je.length>1||(this.eventContext.updateRaycaster(t),this.handleMousePressEvent())};this.onMousePressRelease=t=>{Je.length>1||(this.eventContext.updateRaycaster(t),this.handleMousePressEvent(!0))};this.onKeyDown=t=>{this.heldKeys[t.key]||this.handleKeyEvent(t,"KeyDown"),this.heldKeys[t.key]=!0};this.onKeyUp=t=>{this.handleKeyEvent(t,"KeyUp")};this.onKeyPressDown=t=>{this.heldKeys[t.key]||this.handleKeyEvent(t,"KeyPress"),this.heldKeys[t.key]=!0};this.onKeyPressUp=t=>{this.handleKeyEvent(t,"KeyPress",!0)};this.releaseHeldKey=t=>{delete this.heldKeys[t.key]};this._onUserEvent=({eventName:t,target:A,reverse:r})=>{if(!t||!A)return;let i=js(t);i&&(i==="MouseDown"||i==="MouseUp"||i==="MousePress"?(A.dispatchEvent({type:"beginEvent",eventName:i}),this.eventsPerObjects[i]?.[A.uuid]?.forEach(s=>{s.dispatchUserEvent(r)})):(i==="KeyDown"||i==="KeyUp"||i==="KeyPress")&&(A.dispatchEvent({type:"beginEvent",eventName:i}),this.eventsPerObjects[i]?.[A.uuid]?.forEach(s=>{s.dispatchUserEvent()})))};let{scene:A,sharedAssets:r}=this.eventContext;A.traverseEntity(i=>{if(!i.data?.events.length)return;let s=i.visible?["MouseDown","MouseUp","MousePress","KeyDown","KeyUp","KeyPress"]:["KeyDown","KeyUp","KeyPress"];for(let o of s){let a=this.eventsPerObjects[o];i.data.events.filter(({data:c})=>c.type===o&&c.disabled!==!0).forEach(({data:c})=>{try{let l=new Nx(c,i,A,r);l.actions.Video.length&&(this.hasVideoAction=!0),a[i.uuid]?a[i.uuid].push(l):a[i.uuid]=[l]}catch{}}),a[i.uuid]?.length&&this.objectsPerTypes[o].push(i)}})}connect(){let{domElement:t}=this.eventContext;this.heldKeys={},this.domEventsNeeded.clear(),this.objectsPerTypes.MouseDown?.length&&(this.domEventsNeeded.add("pointerdown"),t.addEventListener("pointerdown",this.onMouseDown)),this.objectsPerTypes.MouseUp?.length&&(this.domEventsNeeded.add("pointerup"),t.addEventListener("pointerup",this.onMouseUp)),this.objectsPerTypes.MousePress?.length&&(this.domEventsNeeded.add("pointerdown"),t.addEventListener("pointerdown",this.onMousePressDown),this.domEventsNeeded.add("pointerup"),t.addEventListener("pointerup",this.onMousePressRelease)),this.objectsPerTypes.KeyDown?.length&&(this.domEventsNeeded.add("keydown"),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.releaseHeldKey)),this.objectsPerTypes.KeyUp?.length&&(this.domEventsNeeded.add("keyup"),document.addEventListener("keyup",this.onKeyUp)),this.objectsPerTypes.KeyPress?.length&&(this.domEventsNeeded.add("keydown"),document.addEventListener("keydown",this.onKeyPressDown),document.addEventListener("keyup",this.releaseHeldKey),this.domEventsNeeded.add("keyup"),document.addEventListener("keyup",this.onKeyPressUp)),Object.entries(this.objectsPerTypes).forEach(([A,r])=>{r.forEach(i=>{i.addEventListener("userEvent",this._onUserEvent)})})}disconnect(){let{domElement:t}=this.eventContext;this.domEventsNeeded.clear(),this.heldKeys={},t.removeEventListener("pointerdown",this.onMouseDown),t.removeEventListener("pointerdown",this.onMousePressDown),t.removeEventListener("pointerup",this.onMouseUp),t.removeEventListener("pointerup",this.onMousePressRelease),document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("keyup",this.onKeyUp),document.removeEventListener("keydown",this.onKeyPressDown),document.removeEventListener("keyup",this.onKeyPressUp),document.removeEventListener("keyup",this.releaseHeldKey),Object.values(this.eventsPerObjects).forEach(A=>{Object.values(A).forEach(r=>{r.forEach(i=>{i.disconnect()})})}),Object.entries(this.objectsPerTypes).forEach(([A,r])=>{r.forEach(i=>{i.removeEventListener("userEvent",this._onUserEvent)})})}handleMouseEvent(t){let{stopRaycast:A,raycaster:r,scene:i}=this.eventContext,s=this.objectsPerTypes[t];if(!!s.length)if(A){let o=Wd(r,i,s);jd(o).forEach(a=>{this.eventsPerObjects[t][a.uuid]&&this.handleObjectMouseEventDispatch(a,t)})}else s.forEach(o=>{Ic(r,o)&&this.handleObjectMouseEventDispatch(o,t)})}handleMousePressEvent(t=!1){let A="MousePress",r=this.objectsPerTypes[A],i=[];if(!!r.length){if(!t){let{stopRaycast:s,raycaster:o,scene:a}=this.eventContext;if(s){let c=Wd(o,a,r);i=jd(c)}else r.forEach(c=>{Ic(o,c)&&i.push(c)})}this._prevObjects.length&&this._prevObjects.forEach(s=>{i.includes(s)||this.handleObjectMouseEventDispatchRelease(s,A)}),i.length&&i.forEach(s=>{this.handleObjectMouseEventDispatch(s,A)}),this._prevObjects=i}}handleObjectMouseEventDispatch(t,A){t.dispatchEvent({type:"beginEvent",eventName:A}),this.eventsPerObjects[A]?.[t.uuid]?.forEach(r=>{r.dispatch()})}handleObjectMouseEventDispatchRelease(t,A){t.dispatchEvent({type:"beginEvent",eventName:A}),this.eventsPerObjects[A]?.[t.uuid]?.forEach(r=>{r.dispatchRelease()})}handleKeyEvent(t,A,r=!1){this.objectsPerTypes[A].forEach(i=>{let s=this.eventsPerObjects[A][i.uuid];s.some(({data:o})=>"key"in o&&o.key===t.key)&&i.dispatchEvent({type:"beginEvent",eventName:A}),s.forEach(o=>{"key"in o.data&&o.data.key===t.key&&(r?o.dispatchRelease():o.dispatch())})})}};var U5=new S,V5=new S,Fx=new de,Gx=new de;var Hm=class{constructor(e,t,A,r){this.actionsIn=jn(e,e.inActions,t,A,r),this.actionsOut=jn(e,e.outActions,t,A,r)}disconnect(){Yn(this.actionsIn),Yn(this.actionsOut)}};var kx=class extends Hm{constructor(t,A,r,i){super(t,A,r,i);this.data=t;this.object=A;this.stage="out";this.objects=[];this.onUpdateMatrix=()=>{Fx.copy(this.objects[0].matrixWorld),this.objects[0].matrixWorld0&&Fx.multiply(this.objects[0].matrixWorld0);let t=U5.setFromMatrixPosition(Fx);Gx.copy(this.objects[1].matrixWorld),this.objects[1].matrixWorld0&&Gx.multiply(this.objects[1].matrixWorld0);let A=V5.setFromMatrixPosition(Gx),r=t.distanceTo(A)<=this.distance?"in":"out";if(this.stage!==r){this.stage=r;let i=this.stage==="in"?this.actionsIn:this.actionsOut;i.Audio.forEach(s=>s.dispatchConditional()),i.Video.forEach(s=>s.dispatchConditional()),i.Transition.forEach(s=>s.play())}};let{distance:s,fromObject:o,toObject:a}=t.condition;this.distance=s;for(let c of[o,a]){if(!c)throw new Error("Missing property");let l=r.find(c);if(!l)throw new Error("Missing property");this.objects.push(l)}}connect(){this.objects.forEach(t=>{t.addEventListener("updateMatrix",this.onUpdateMatrix)}),this.onUpdateMatrix()}disconnect(){super.disconnect(),this.stage="out",this.objects.forEach(t=>{t.removeEventListener("updateMatrix",this.onUpdateMatrix)})}},Ux=class extends Hm{constructor(t,A,r,i){super(t,A,r,i);this.data=t;this.object=A;this.onBegin=({target:t,state:A})=>{this.toState!==A&&(this.actionsOut.Audio.forEach(r=>r.dispatchConditional()),this.actionsOut.Video.forEach(r=>r.dispatchConditional()),this.actionsOut.Transition.forEach(r=>r.play()))};this.onComplete=({target:t,state:A})=>{this.toState===A&&(this.actionsIn.Audio.forEach(r=>r.dispatchConditional()),this.actionsIn.Video.forEach(r=>r.dispatchConditional()),this.actionsIn.Transition.forEach(r=>r.play()))};let{condition:s}=t;if(!s.object)throw new Error("Missing property");let o=r.find(s.object);if(!o)throw new Error("Missing property");if(this.toObject=o,s.state&&!this.toObject.states?.[s.state])throw new Error("Missing property");this.toState=s.state}connect(){(this.actionsOut.Audio.length||this.actionsOut.Video.length||this.actionsOut.Transition.length)&&this.toObject.addEventListener("beginState",this.onBegin),(this.actionsIn.Audio.length||this.actionsIn.Video.length||this.actionsIn.Transition.length)&&this.toObject.addEventListener("completeState",this.onComplete)}disconnect(){super.disconnect(),(this.actionsOut.Audio.length||this.actionsOut.Video.length||this.actionsOut.Transition.length)&&this.toObject.removeEventListener("beginState",this.onBegin),(this.actionsIn.Audio.length||this.actionsIn.Video.length||this.actionsIn.Transition.length)&&this.toObject.removeEventListener("completeState",this.onComplete)}},Wm=class extends HA{constructor(t){super(t);this.eventsPerConditions={Comparison:[],Distance:[],State:[]};this.hasVideoAction=!1;let{scene:A,sharedAssets:r}=this.eventContext;A.traverseEntity(i=>{if(!!i.data?.events.length){for(let{data:s}of i.data.events)if(!s.disabled&&s.type==="Conditional")try{let o;s.condition.type==="Comparison"||(s.condition.type==="Distance"?o=new kx(s,i,A,r):s.condition.type==="State"&&(o=new Ux(s,i,A,r))),o&&(this.eventsPerConditions[s.condition.type].push(o),(o.actionsIn.Video.length||o.actionsOut.Video.length)&&(this.hasVideoAction=!0))}catch{}}})}connect(){super.connect(),Object.values(this.eventsPerConditions).forEach(t=>t.forEach(A=>A.connect()))}disconnect(){super.disconnect(),Object.values(this.eventsPerConditions).forEach(t=>t.forEach(A=>A.disconnect()))}};var Rc=new S,Vx=new S,zx=new S,jm=new S,_2=new gA,R2=.01,z5={type:"requestRender"},H5=function(){let n=new S,e=new S;return(t,A,r)=>r>0?(n.subVectors(t,A),n.length()<=r?t:e.copy(A).add(n.normalize().multiplyScalar(r))):A}(),B2=function(){let n=new de;return(e,t)=>{e.position.copy(t),e.parent!==null&&(n.copy(e.parent.matrixWorld).invert(),e.position.applyMatrix4(n)),n.copy(e.hiddenMatrix).invert(),e.position.applyMatrix4(n),e.updateMatrix(),e instanceof Lt&&Hn(e.parent)&&e.invalidateDownstreamBooleanData(!0)}}(),Hx=class{constructor(e,t,A){this.data=e;this.object=t;this.tempPosition=new S;this.started=!1;this.paused=!0;this.snapComplete=!1;this.isReset=!1;this.worldPosition0=new S;this.target=e.target?A.find(e.target):void 0,this.maxDelta=e.maxDelta??0,this.dampingFactor=e.dampingFactor?Math.max(e.dampingFactor,1):1,this.plane=e.plane??"custom",this.snapDampingFactor=8,this.currentDampingFactor=this.snapDampingFactor,this.object.getWorldPosition(this.worldPosition0)}},Ym=class extends HA{constructor(t){super(t);this.events=[];this.onTargetChangeCallbacks=[];this.onMouseMove=t=>{if(!(Je.length>1)){this.eventContext.updateRaycaster(t);for(let A of this.events)A.target===void 0&&this.updateSingleEvent(A)}};this.onMouseEnter=t=>{for(let A of this.events)A.target===void 0&&(A.tempPosition.copy(A.object.position),A.snapComplete=!1,A.isReset=!1,A.currentDampingFactor=A.snapDampingFactor)};this.onMouseLeave=t=>{for(let A of this.events)A.target===void 0&&(A.tempPosition.copy(A.object.position),A.snapComplete=!1,(A.data.resetOnPointerLeave??!1)&&(A.isReset=!0,A.currentDampingFactor=A.snapDampingFactor),this.updateSingleEvent(A))};this.onTargetChange=t=>()=>{this.updateSingleEvent(t)};let{scene:A}=this.eventContext;A.traverseEntity(r=>{let i=r.data?.events.find(s=>s.data.type==="Follow"&&!s.data.disabled);i&&this.events.push(new Hx(i.data,r,A))})}connect(){if(!this.events.length)return;let{domElement:t}=this.eventContext;this.domEventsNeeded.clear(),xA&&(this.domEventsNeeded.add("pointerdown"),t.addEventListener("pointerdown",this.onMouseMove)),this.domEventsNeeded.add("pointermove"),t.addEventListener("pointermove",this.onMouseMove),t.addEventListener("pointerenter",this.onMouseEnter),t.addEventListener("pointerleave",this.onMouseLeave);for(let A of this.events)if(A.target!==void 0){let r=this.onTargetChange(A);this.onTargetChangeCallbacks.push(r),A.target.addEventListener("requestRender",r)}}disconnect(){if(!this.events.length)return;let{domElement:t}=this.eventContext;this.domEventsNeeded.clear(),xA&&t.removeEventListener("pointerdown",this.onMouseMove),t.removeEventListener("pointermove",this.onMouseMove),t.removeEventListener("pointerenter",this.onMouseEnter),t.removeEventListener("pointerleave",this.onMouseLeave);let A=0;for(let r of this.events)r.started=!1,r.paused=!0,r.target!==void 0&&r.target.removeEventListener("requestRender",this.onTargetChangeCallbacks[A++])}onAnimationFrameDamping(){for(let t of this.events)t.paused||this.updateSingleEvent(t)}updateSingleEvent(t){let{tempPosition:A,object:r,maxDelta:i,plane:s}=t;if(r.getWorldPosition(zx),t.isReset)jm.copy(t.worldPosition0);else if(t.target)t.target.getWorldPosition(jm);else{let{camera:a,raycaster:c}=this.eventContext;if(s==="custom"?(a.getWorldDirection(Vx),Vx.negate(),Rc.copy(Vx)):s==="xy"?Rc.set(0,0,1):s==="xz"?Rc.set(0,1,0):s==="yz"&&Rc.set(1,0,0),_2.setFromNormalAndCoplanarPoint(Rc,zx),!c.ray.intersectPlane(_2,jm))return}let o=H5(zx,jm,i);if(t.currentDampingFactor>1||t.snapComplete===!1){t.started||(t.started=!0,A.copy(o));let a=Rc.subVectors(o,A).divideScalar(t.currentDampingFactor);A.add(a),B2(r,A),t.paused=a.length()<R2,t.snapComplete=a.length()<R2*100,t.snapComplete&&(t.currentDampingFactor=t.dampingFactor)}else B2(r,o),t.paused=!0;t.object?.dispatchEvent({type:"beginEvent",eventName:"Follow"}),r.dispatchEvent(z5)}};var Zd=new S,qm=new S,Qo=new de,Jd=new Ze,Bc=new Ze,Xm=new S,Wx=new S,$d=new S,Qm=new gA,N2=1e-5,W5={type:"requestRender"},j5={type:"changeRotation"},Y5=function(){let n=new de,e=new S,t=new S,A=new S;return(r,i)=>(i==="x"?(e.set(0,0,1),t.set(0,1,0),A.set(-1,0,0)):i==="y"?(e.set(1,0,0),t.set(0,0,1),A.set(0,-1,0)):(e.set(1,0,0),t.set(0,1,0),A.set(0,0,1)),e.applyMatrix4(r),t.applyMatrix4(r),A.applyMatrix4(r),n.makeBasis(e,t,A))}(),F2=function(){let n=new de;return function(t,A){t.parent!==null?n.multiplyMatrices(t.parent.matrixWorld,t.hiddenMatrix):n.copy(t.hiddenMatrix),A.premultiply(px(n).invert()),t.rotation.setFromRotationMatrix(A),t.updateMatrix(),t instanceof Lt&&Hn(t.parent)&&t.invalidateDownstreamBooleanData(!0)}}(),jx=class{constructor(e,t,A){this.data=e;this.object=t;this.paused=!0;this.snapComplete=!1;this.isReset=!1;this.worldQuaternion0=new Ze;this.target=e.target?A.find(e.target):void 0,this.dampingFactor=e.dampingFactor?Math.max(e.dampingFactor,1):1,this.distance=e.distance??0,this.tilt=e.tilt??"up",this.axis=e.axis??"z",this.plane=e.plane??"custom",this.snapDampingFactor=8,this.currentDampingFactor=this.dampingFactor,this.object.getWorldQuaternion(this.worldQuaternion0)}},Km=class extends HA{constructor(t){super(t);this.events=[];this.onTargetChangeCallbacks=[];this.onMouseMove=t=>{if(!(Je.length>1)){this.eventContext.updateRaycaster(t);for(let A of this.events)A.target===void 0&&this.updateSingleEvent(A)}};this.onMouseEnter=t=>{for(let A of this.events)A.target===void 0&&(A.snapComplete=!1,A.isReset=!1,A.currentDampingFactor=A.snapDampingFactor)};this.onMouseLeave=t=>{for(let A of this.events)A.target===void 0&&(A.snapComplete=!1,(A.data.resetOnPointerLeave??!1)&&(A.isReset=!0,A.currentDampingFactor=A.snapDampingFactor),this.updateSingleEvent(A))};this.onTargetChange=t=>()=>{this.updateSingleEvent(t)};let{scene:A}=this.eventContext;A.traverseEntity(r=>{let i=r.data?.events.find(s=>s.data.type==="LookAt"&&!s.data.disabled);i&&this.events.push(new jx(i.data,r,A))})}connect(){if(!this.events.length)return;let{domElement:t}=this.eventContext;this.domEventsNeeded.clear(),xA&&(this.domEventsNeeded.add("pointerdown"),t.addEventListener("pointerdown",this.onMouseMove)),this.domEventsNeeded.add("pointermove"),t.addEventListener("pointermove",this.onMouseMove),t.addEventListener("pointerenter",this.onMouseEnter),t.addEventListener("pointerleave",this.onMouseLeave);for(let A of this.events)if(A.target!==void 0){let r=this.onTargetChange(A);this.onTargetChangeCallbacks.push(r),A.target.addEventListener("requestRender",r)}}disconnect(){if(!this.events.length)return;let{domElement:t}=this.eventContext;this.domEventsNeeded.clear(),xA&&t.removeEventListener("pointerdown",this.onMouseMove),t.removeEventListener("pointermove",this.onMouseMove),t.removeEventListener("pointerenter",this.onMouseEnter),t.removeEventListener("pointerleave",this.onMouseLeave);let A=0;for(let r of this.events)r.paused=!0,r.target!==void 0&&r.target.removeEventListener("requestRender",this.onTargetChangeCallbacks[A++])}onAnimationFrameDamping(){for(let t of this.events)t.paused||this.updateSingleEvent(t)}updateSingleEvent(t){let{target:A,tilt:r,axis:i,distance:s,plane:o,object:a}=t,{camera:c,raycaster:l}=this.eventContext;if(!t.isReset){if(t.target)t.target.getWorldPosition(Wx);else if(a.getWorldPosition(Xm),o==="custom"?(c.getWorldDirection(qm),qm.negate(),s>0?Qm.set(qm,-s):Qm.setFromNormalAndCoplanarPoint(qm,Xm)):(o==="xy"?Zd.set(0,0,1):o==="xz"?Zd.set(0,1,0):o==="yz"&&Zd.set(1,0,0),Qm.setFromNormalAndCoplanarPoint(Zd,Xm)),!l.ray.intersectPlane(Qm,Wx))return}t.isReset||(A?r==="up"?$d.set(0,1,0):r==="target"&&$d.copy(A.up).applyMatrix4(Qo.extractRotation(A.matrixWorld)).normalize():o==="custom"?$d.set(0,1,0):$d.copy(Zd)),t.isReset?Bc.copy(t.worldQuaternion0):(Qo.lookAt(Wx,Xm,$d),Qo.copy(Y5(Qo,i)),Bc.setFromRotationMatrix(Qo)),t.currentDampingFactor>1||t.snapComplete===!1?(a.updateWorldMatrix(!0,!1),Jd.setFromRotationMatrix(px(a.matrixWorld)),Jd.slerp(Bc,1/t.currentDampingFactor),F2(a,Qo.makeRotationFromQuaternion(Jd)),t.paused=8*(1-Jd.dot(Bc))<N2,t.snapComplete=8*(1-Jd.dot(Bc))<N2*100,t.snapComplete&&(t.currentDampingFactor=t.dampingFactor)):(F2(a,Qo.makeRotationFromQuaternion(Bc)),t.paused=!0),t.object?.dispatchEvent({type:"beginEvent",eventName:"LookAt"}),a.dispatchEvent(W5),a.dispatchEvent(j5)}};var Yx=class{constructor(e,t,A,r){this.data=e;this.object=t;this.entered=!1;this.actions=jn(e,e.actions,t,A,r)}disconnect(){Yn(this.actions)}dispatchEnter(){this.entered||(this.entered=!0,this.actions.Transition.forEach(e=>e.toggle(!0)))}dispatchLeave(){this.entered&&(this.entered=!1,this.actions.Transition.forEach(e=>e.toggle(!1)))}dispatchUserEvent(e){this.actions.Transition.forEach(t=>t.toggle(!e))}},Zm=class extends HA{constructor(t){super(t);this.eventsPerObjects={};this.objects=[];this._prevObjects=[];this.onMouseDown=t=>{Je.length>1||(this.eventContext.updateRaycaster(t),this.handleMouseHoverEvent())};this.onMouseUp=t=>{Je.length>1||this.handleMouseHoverEvent(!0)};this.onMouseMove=t=>{Je.length>1||(this.eventContext.updateRaycaster(t),this.handleMouseHoverEvent())};this.onUserEvent=({eventName:t,target:A,reverse:r})=>{if(!t||!A)return;let i=js(t);i&&i==="MouseHover"&&(A.dispatchEvent({type:"beginEvent",eventName:"MouseHover"}),this.eventsPerObjects[A.uuid]?.forEach(s=>s.dispatchUserEvent(r)))};let{scene:A,sharedAssets:r}=this.eventContext;A.traverseEntity(i=>{if(!(!i.visible||!i.data?.events.length)){for(let{data:s}of i.data.events)if(!s.disabled&&s.type==="MouseHover")try{let o=new Yx(s,i,A,r);this.eventsPerObjects[i.uuid]?this.eventsPerObjects[i.uuid].push(o):this.eventsPerObjects[i.uuid]=[o]}catch{}this.eventsPerObjects[i.uuid]?.length&&this.objects.push(i)}})}connect(){if(!this.objects.length)return;let{domElement:t}=this.eventContext;this.domEventsNeeded.clear(),xA&&(this.domEventsNeeded.add("pointerdown"),t.addEventListener("pointerdown",this.onMouseDown),this.domEventsNeeded.add("pointerup"),t.addEventListener("pointerup",this.onMouseUp)),this.domEventsNeeded.add("pointermove"),t.addEventListener("pointermove",this.onMouseMove),this.objects.forEach(A=>{A.addEventListener("userEvent",this.onUserEvent)})}disconnect(){if(!this.objects.length)return;let{domElement:t}=this.eventContext;this.domEventsNeeded.clear(),xA&&(t.removeEventListener("pointerdown",this.onMouseDown),t.removeEventListener("pointerup",this.onMouseUp)),t.removeEventListener("pointermove",this.onMouseMove),Object.values(this.eventsPerObjects).forEach(A=>{A.forEach(r=>{r.disconnect()})}),this.objects.forEach(A=>{A.removeEventListener("userEvent",this.onUserEvent)})}handleMouseHoverEvent(t=!1){let A=[];if(!t){let{stopRaycast:r,raycaster:i,scene:s}=this.eventContext;if(r){let o=Wd(i,s,this.objects);A=jd(o)}else this.objects.forEach(o=>{Ic(i,o)&&A.push(o)})}this._prevObjects.length&&this._prevObjects.forEach(r=>{A.includes(r)||(r.dispatchEvent({type:"beginEvent",eventName:"MouseHover"}),this.eventsPerObjects[r.uuid]?.forEach(i=>i.dispatchLeave()))}),A.length&&A.forEach(r=>{r.dispatchEvent({type:"beginEvent",eventName:"MouseHover"}),this.eventsPerObjects[r.uuid]?.forEach(i=>i.dispatchEnter())}),this._prevObjects=A}};var qx=class{constructor(e,t,A,r){this.data=e;this.object=t;this.scrollCounter=0;this.actions=jn(e,e.actions,t,A,r)}connect(){this.scrollCounter=0}disconnect(){Yn(this.actions)}dispatch(e){let t=e>0?1:-1;this.scrollCounter+=t,this.scrollCounter=Math.min(Math.max(this.scrollCounter,0),this.data.steps);let A=this.scrollCounter/this.data.steps;this.actions.Transition.forEach(r=>r.seek(A))}dispatchUserEvent(e){this.actions.Transition.forEach(t=>{t.toggle(!e)})}},Jm=class extends HA{constructor(t){super(t);this.eventsPerObject=new Map;this.onWheel=t=>{[...this.eventsPerObject.entries()].forEach(([A,r])=>{A.dispatchEvent({type:"beginEvent",eventName:"Scroll",deltaY:t.deltaY}),r.forEach(i=>i.dispatch(t.deltaY))})};this.onUserEvent=({eventName:t,target:A,reverse:r})=>{if(!t||!A)return;let i=js(t);i&&i==="Scroll"&&(A.dispatchEvent({type:"beginEvent",eventName:"Scroll"}),this.eventsPerObject.get(A)?.forEach(s=>{s.dispatchUserEvent(r)}))};let{scene:A,sharedAssets:r}=this.eventContext;A.traverseEntity(i=>{if(!!i.data?.events.length)for(let{data:s}of i.data.events){if(s.disabled||s.type!=="Scroll")continue;let o=new qx(s,i,A,r);this.eventsPerObject.has(i)?this.eventsPerObject.get(i)?.push(o):this.eventsPerObject.set(i,[o])}})}connect(){let{domElement:t}=this.eventContext;[...this.eventsPerObject.entries()].forEach(([A,r])=>{r.forEach(i=>i.connect()),A.addEventListener("userEvent",this.onUserEvent)}),[...this.eventsPerObject.values()].some(A=>A.length)&&(this.domEventsNeeded.add("wheel"),t.addEventListener("wheel",this.onWheel))}disconnect(){let{domElement:t}=this.eventContext;t.removeEventListener("wheel",this.onWheel),this.domEventsNeeded.clear(),[...this.eventsPerObject.entries()].forEach(([A,r])=>{r.forEach(i=>i.disconnect()),A.removeEventListener("userEvent",this.onUserEvent)})}};var Xx=class{constructor(e,t,A,r){this.data=e;this.object=t;this.actions=jn(e,e.actions,t,A,r)}disconnect(){Yn(this.actions)}dispatch(){this.actions.Transition.forEach(e=>{e.play()})}dispatchAfter(e){this.actions.Audio.forEach(t=>{(t.interaction.data.triggerAfter??"any")===e&&(t.interaction instanceof Yi?t.interaction.audioPlayer.play():t.interaction instanceof Oc&&t.interaction.dispatch())}),this.actions.Video.forEach(t=>{let A=t.interaction.data.triggerAfter??"autoplay";A===e&&(t.interaction instanceof zs?t.interaction.play(A==="autoplay"):t.interaction instanceof Lc&&t.interaction.dispatch())})}dispatchUserEvent(e){this.actions.Transition.forEach(t=>{t.toggle(!e)}),this.actions.Audio.forEach(t=>{t.interaction instanceof Yi?t.interaction.audioPlayer.play():t.interaction instanceof Oc&&t.interaction.dispatch()}),this.actions.Video.forEach(t=>{t.interaction instanceof zs?t.interaction.play():t.interaction instanceof Lc&&t.interaction.dispatch()})}},$m=class extends HA{constructor(t){super(t);this.eventsPerObject=new Map;this.eventsAfterPerObject=new Map;this.onMouseDown=()=>{[...this.eventsAfterPerObject.entries()].forEach(([t,A])=>{t.dispatchEvent({type:"beginEvent",eventName:"Start"}),A.forEach(r=>{r.dispatchAfter("mouseDown")})})};this.onKeyDown=()=>{[...this.eventsAfterPerObject.entries()].forEach(([t,A])=>{t.dispatchEvent({type:"beginEvent",eventName:"Start"}),A.forEach(r=>{r.dispatchAfter("keyDown")})})};this.onAny=()=>{let{domElement:t,isExport:A}=this.eventContext;(A?document:t).removeEventListener("pointerdown",this.onAny),document.removeEventListener("keydown",this.onAny),[...this.eventsAfterPerObject.entries()].forEach(([i,s])=>{i.dispatchEvent({type:"beginEvent",eventName:"Start"}),s.forEach(o=>{o.dispatchAfter("any")})})};this.onPlay=()=>{[...this.eventsAfterPerObject.entries()].forEach(([t,A])=>{t.dispatchEvent({type:"beginEvent",eventName:"Start"}),A.forEach(r=>{r.dispatchAfter("autoplay")})})};this.onUserEvent=({eventName:t,target:A,reverse:r})=>{if(!t||!A)return;let i=js(t);i&&i==="Start"&&(A.dispatchEvent({type:"beginEvent",eventName:"Start"}),this.eventsPerObject.get(A)?.forEach(s=>{s.dispatchUserEvent(r)}),this.eventsAfterPerObject.get(A)?.forEach(s=>{s.dispatchUserEvent(r)}))};let{scene:A,sharedAssets:r}=this.eventContext;A.traverseEntity(i=>{if(!!i.data?.events.length)for(let{data:s}of i.data.events){if(s.disabled||s.type!=="Start")continue;let o=new Xx(s,i,A,r);o.actions.Transition.length&&(this.eventsPerObject.has(i)?this.eventsPerObject.get(i)?.push(o):this.eventsPerObject.set(i,[o])),o.actions.Audio.length&&(this.eventsAfterPerObject.has(i)?this.eventsAfterPerObject.get(i)?.push(o):this.eventsAfterPerObject.set(i,[o])),o.actions.Video.length&&(this.hasVideoAction=!0,this.eventsAfterPerObject.has(i)?this.eventsAfterPerObject.get(i)?.push(o):this.eventsAfterPerObject.set(i,[o]))}})}connect(){if([...this.eventsAfterPerObject.values()].some(t=>t.length)){let{domElement:t,isExport:A}=this.eventContext,r=A?document:t;r.addEventListener("pointerdown",this.onMouseDown,{once:!0}),document.addEventListener("keydown",this.onKeyDown,{once:!0}),r.addEventListener("pointerdown",this.onAny),document.addEventListener("keydown",this.onAny),[...this.eventsAfterPerObject.entries()].forEach(([i,s])=>{i.addEventListener("userEvent",this.onUserEvent)}),this.onPlay()}[...this.eventsPerObject.entries()].forEach(([t,A])=>{t.dispatchEvent({type:"beginEvent",eventName:"Start"}),A.forEach(r=>r.dispatch()),t.addEventListener("userEvent",this.onUserEvent)})}disconnect(){if([...this.eventsAfterPerObject.values()].some(t=>t.length)){let{domElement:t,isExport:A}=this.eventContext,r=A?document:t;r.removeEventListener("pointerdown",this.onMouseDown),document.removeEventListener("keydown",this.onKeyDown),r.removeEventListener("pointerdown",this.onAny),document.removeEventListener("keydown",this.onAny),[...this.eventsAfterPerObject.entries()].forEach(([i,s])=>{i.removeEventListener("userEvent",this.onUserEvent),s.forEach(o=>o.disconnect())})}[...this.eventsPerObject.entries()].forEach(([t,A])=>{t.removeEventListener("userEvent",this.onUserEvent),A.forEach(r=>r.disconnect())})}};var eg=class{constructor(e,t,A,r){this.data=e;this.object=t;this.disabled=!0;this.actions=jn(e,e.actions,t,A,r),this.target=e.target,this.useToggle=e.toggle}disconnect(){Yn(this.actions)}dispatch(){this.disabled||(this.object.dispatchEvent({type:"beginEvent",eventName:"Collision"}),this.useToggle?this.actions.Transition.forEach(e=>{e.toggle()}):this.actions.Transition.forEach(e=>{e.play()}),this.actions.Link.forEach(e=>{e.dispatch()}),this.actions.Audio.forEach(e=>{e.dispatchBasic()}),this.actions.Video.forEach(e=>{e.dispatchBasic()}))}};var tA;VT.then(n=>tA=n);var Ko=new de,G2=new S(1,1,1),WA=new S,fi=new Ze,Dr=new S,Qx=new jt(0,0,0,"YXZ"),q5={type:"updateMatrix"},Kx={type:"beginEvent",eventName:"Collision"};function k2(n){if(n.scene.environment.usePhysics)return!0;let e=!1;return n.scene.objects.traverse((t,A)=>{for(let r of A.events)if(r.data.disabled!==!0&&r.data.type==="GameControl"&&r.data.collisionEnabled){e=!0;break}}),e}var tg=class{constructor(e,t,A,r,i,s=!1){this.scene=t;this.sharedAssets=i;this.isExport=s;this.orbitControlsNeedsUpdate=!0;this.gameControls=[];this.gameControlStates=[];this.joysticks=[];this.joystickToGameControls=[];this.sharedGameControlGlobals={entitiesWithTransformAnim:[],eventsPerObjects:{},colliderToEntity:{},gamePads:[]};this.needsCollisionDetection=!1;this.initializationCounter=-1;this.rigidBodyToMesh=new Map;this.nActiveRigidBodies=0;this.collisionEvents=[];this.processRigidBody=e=>{if(e.bodyType()!==tA.RigidBodyType.Dynamic)return;e.isSleeping()||this.nActiveRigidBodies++;let t=e.translation(),A=e.rotation(),r=this.rigidBodyToMesh.get(e.handle);if(WA.set(t.x,t.y,t.z),WA.multiplyScalar(this.pixelsPerMeter),fi.set(A.x,A.y,A.z,A.w),r[0].matrixWorld.compose(WA,fi,r[0].matrixWorld0?G2:r[1]),r[0].dispatchEvent(q5),r[2])for(let i of r[0].children)i.updateMatrixWorld(!0)};this.handleCollisionEvents=(e,t,A)=>{if(A!==!1)if(this.gameControls.some(r=>r.object===this.sharedGameControlGlobals.colliderToEntity[e])){let r=this.sharedGameControlGlobals.colliderToEntity[t],i=this.sharedGameControlGlobals.eventsPerObjects[r.uuid];if(i===void 0)return;for(let s of i)s.data.target==="character"&&this.dispatchCollisionEvent(s,r)}else if(this.gameControls.some(r=>r.object===this.sharedGameControlGlobals.colliderToEntity[t])){let r=this.sharedGameControlGlobals.colliderToEntity[e],i=this.sharedGameControlGlobals.eventsPerObjects[r.uuid];if(i===void 0)return;for(let s of i)s.data.target==="character"&&this.dispatchCollisionEvent(s,r)}else{let r=this.sharedGameControlGlobals.colliderToEntity[e],i=this.sharedGameControlGlobals.eventsPerObjects[r.uuid];if(i!==void 0)for(let a of i)a.data.target==="scene"&&this.dispatchCollisionEvent(a,r);let s=this.sharedGameControlGlobals.colliderToEntity[t],o=this.sharedGameControlGlobals.eventsPerObjects[s?.uuid];if(o!==void 0)for(let a of o)a.data.target==="scene"&&this.dispatchCollisionEvent(a,s)}};this.onBeginState=()=>{this.orbitControls&&(this.orbitControls.enabled=!1,this.orbitControlsNeedsUpdate=!1)};this.onCompleteState=({target:e})=>{this.orbitControls&&(this.orbitControls.enabled=!0,this.orbitControls.resetTo(e.getTarget(WA),e.position,e.zoom,e.isUpVectorFlipped),e.currentState=null,e.currentTransitionAction=null,this.orbitControlsNeedsUpdate=!0)};this.domElement=A.domElement;let o;e.scene.publish.playCamera===null?o=ji.PERSONAL_CAMERA_ID:o=e.scene.publish.playCamera;let a=this.scene.find(o),c=!1,l,u=5,d=8,h=9,f="drag";if(this.usePhysics=e.scene.environment.usePhysics??hn.defaultData.usePhysics,this.pixelsPerMeter=e.scene.environment.pixelsPerMeter??hn.defaultData.pixelsPerMeter,e.scene.objects.data(e.scene.publish.gameControlObject)?.events.forEach(g=>{g.data.disabled!==!0&&g.data.type==="GameControl"&&(l=g.data.keyAssignments,u=g.data.joystickPosLoc,d=g.data.joystickRotLoc,h=g.data.jumpTouchButtonLoc,f=g.data.rotByTouch)}),this.scene.traverseEntity(g=>{g.dataPatched.events.forEach(y=>{if(y.data.disabled||y.data.type!=="GameControl")return;let x=g;for(;(x=x.parent)?.parent!==null;)if(x.dataPatched.physics?.fusedBody)return;y.data.collisionEnabled&&(this.needsCollisionDetection=!0),this.gameControlStates.push([g,y.data])})}),this.usePhysics&&(this.gameControlStates.length===0||this.needsCollisionDetection)&&this.initPhysics(e.scene.environment.gravity??hn.defaultData.gravity),this.gameControlStates.forEach(([g,y])=>{c=c||y.camera===a.uuid||g.uuid===a.uuid;let x=new eh(g,A.domElement,{...y,keyAssignments:l},e.scene.environment,this.sharedGameControlGlobals,g.uuid!==a.uuid&&y.camera===a.uuid,a,this.scene,i);x.addEventListener("change",r),x.addEventListener("end",r),x.addEventListener("start",r),this.gameControls.push(x),xA&&y.touchControl&&(this.joystickToGameControls[u]!==void 0?this.joystickToGameControls[u].push([x,"pos"]):this.joystickToGameControls[u]=[[x,"pos"]],y.moveMode==="walk"&&(this.joystickToGameControls[h]!==void 0?this.joystickToGameControls[h].push([x,"jmp"]):this.joystickToGameControls[h]=[[x,"jmp"]]),f==="joystick"&&(this.joystickToGameControls[d]!==void 0?this.joystickToGameControls[d].push([x,"rot"]):this.joystickToGameControls[d]=[[x,"rot"]]))}),c===!1){let{enableRotate:g,enablePan:y,enableZoom:x,autoRotate:b,hoverRotatePanMode:w}=e.scene.publish.orbitControls;if(g||y||x||b||w!==0){this.orbitControls=new Nc(a,A.domElement,this.isExport),this.orbitControls.addEventListener("change",r),this.orbitControls.addEventListener("end",r),this.orbitControls.addEventListener("start",r),this.orbitControls.fromJSON(e.scene.publish.orbitControls),this.orbitControls.useKeyEvents=!1,this.orbitControls.connect(),this.orbitControls.update();let T=this.orbitControls.object;T.addEventListener("beginState",this.onBeginState),T.addEventListener("completeState",this.onCompleteState)}}let p=A.domElement.width/A.getPixelRatio(),m=A.domElement.height/A.getPixelRatio();this.joystickToGameControls.forEach((g,y)=>{let x=document.body.appendChild(document.createElement("div")),[b,w,T]=(e.scene.publish.joystickSizeAndXYOffset??Ni.defaultData.joystickSizeAndXYOffset)[y],M=(p-5*b)/4+b,v={},E=g.some(L=>L[1]==="jmp"),C=E?0:b;y<10?(y<5?v.top=C/2:v.bottom=C/2,v.left=C/2+y%5*M):y===10?(v.left=C/2,v.top=m/2):(v.right=C/2,v.top=m/2),v.top?v.top-=w[1]:v.bottom+=w[1],v.left?v.left+=w[0]:v.right-=w[0];for(let L in v)v[L]+="px";if(E){let L=x.appendChild(document.createElement("div"));Object.assign(L.style,v,{position:"absolute",width:b+"px",height:b+"px",backgroundColor:`rgba(255,255,255,${T==="show"?.4:0})`,zIndex:"9999",borderRadius:b+"px",border:T==="show"?"solid 2px rgba(0, 0, 0, .1)":"none",display:"flex",alignItems:"center",justifyContent:"center",touchAction:"none"});let I=b/16*16*.4;T==="show"&&(L.innerHTML=`
						<svg width="${I}" height="${b*.4}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2 10L8 4L14 10" stroke="black" stroke-opacity="40%" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					`),L.addEventListener("pointerdown",()=>{g.forEach(B=>{B[0].movementState.jump=1}),r()}),L.addEventListener("touchend",B=>B.preventDefault()),this.joysticks[y]=[void 0,x];return}let P={zone:x,mode:"static",position:v,size:b};T==="hide"&&(P.restOpacity=0);let D=kP.create(P);D.on("move",(L,I)=>{g.forEach(B=>{let N=B[0];B[1]==="pos"?I.force<.2?N.moveForce=0:(N.movementState.movePosZ=Math.sin(-I.angle.radian),N.movementState.movePosX=Math.cos(-I.angle.radian),I.force<.3?N.moveForce=(I.force-.2)/.1:N.moveForce=1):I.force<.2?N.rotForce=0:(N.movementState.rotPosX=I.vector.y,N.movementState.rotPosY=-I.vector.x,I.force<.3?N.rotForce=(I.force-.2)/.1:N.rotForce=1)}),r()}),D.on("end",(L,I)=>{g.forEach(B=>{let N=B[0];B[1]==="pos"?(N.movementState.movePosZ=0,N.movementState.movePosX=0,N.moveForce=1):(N.movementState.rotPosX=0,N.movementState.rotPosY=0,N.rotForce=1)})}),this.joysticks[y]=[D,x]}),this.usePhysics===!1&&this.needsCollisionDetection&&this.initBVH(),this.initializationCounter++,window.setTimeout(()=>this.collisionEvents.forEach(g=>g.disabled=!1),80)}attachVRControllers(e){e.forEach(t=>{t.addEventListener("connected",A=>{"gamepad"in A.data&&"axes"in A.data.gamepad&&this.sharedGameControlGlobals.gamePads.push(A.data.gamepad)})})}initBVH(){let e=[];this.scene.updateMatrixWorld(!0);let t=new Set;if(this.scene.traverse(A=>{if(!!bA(A))if(!A.visible||t.has(A))A.children.forEach(r=>bA(r)&&t.add(r));else if(A.states&&Object.keys(A.states).length||A.data?.events.some(r=>r.data.disabled!==!0&&r.data.type==="GameControl")){let r=[];A.matrixWorld.decompose(WA,fi,Dr);let i=new de().compose(WA,fi,G2);MA(A)&&r.push(Vs(A.geometry,Ko.makeScale(Dr.x,Dr.y,Dr.z))),A.updateMatrixWorld();let s=i.clone().invert();if(A.traverse(o=>{!MA(o)||(o.updateMatrixWorld(),Ko.multiplyMatrices(s,o.matrixWorld),r.push(Vs(o.geometry,Ko)))}),r.length>0){let o=Fi(r,!1);A.boundsTree=new Jt(o),this.sharedGameControlGlobals.entitiesWithTransformAnim.push(A)}}else MA(A)&&!this.sharedGameControlGlobals.entitiesWithTransformAnim.some(r=>A.isDescendantOf(r))&&e.push(Vs(A.geometry,A.matrixWorld))}),e.length>0){let A=Fi(e,!1);this.sharedGameControlGlobals.staticMeshBVH=new Jt(A)}}addCollider(e,t,A,r,i=!0){if(A?.getAttribute("position").count===0||A?.getIndex()?.count===0)return;let s=e.rigidBody,o;r!==void 0?r.collider.type==="sphere"?o=tA.ColliderDesc.ball(r.collider.radius/this.pixelsPerMeter):r.collider.type==="capsule"?o=tA.ColliderDesc.capsule((r.collider.height/2-r.collider.radius)/this.pixelsPerMeter,r.collider.radius/this.pixelsPerMeter):o=tA.ColliderDesc.cuboid(r.collider.width/this.pixelsPerMeter/2,r.collider.height/this.pixelsPerMeter/2,r.collider.depth/this.pixelsPerMeter/2):A&&(t.colliderType==="trimesh"?o=tA.ColliderDesc.trimesh(A.getAttribute("position").array,A.getIndex().array):o=tA.ColliderDesc.convexMesh(A.getAttribute("position").array,i?A.getIndex().array:void 0)),o.setFrictionCombineRule(tA.CoefficientCombineRule.Average).setRestitutionCombineRule(tA.CoefficientCombineRule.Average).setDensity(t.density).setFriction(t.friction).setRestitution(t.restitution);let a=this.sharedGameControlGlobals.rapierWorld.createCollider(o,s);if(this.sharedGameControlGlobals.colliderToEntity[a.handle]=e,r!==void 0){WA.fromArray(r.collider.position).multiply(Dr.setFromMatrixScale(e.matrixWorld)).divideScalar(this.pixelsPerMeter),a.setTranslationWrtParent(WA);let c=new Ze().setFromEuler(new jt().setFromVector3(new S().fromArray(r.collider.rotation)));a.setRotationWrtParent(c),a.setActiveEvents(tA.ActiveEvents.COLLISION_EVENTS)}else this.sharedGameControlGlobals.eventsPerObjects[e.uuid]?.some(c=>c.target==="scene")&&a.setActiveEvents(tA.ActiveEvents.COLLISION_EVENTS)}initPhysics(e){this.sharedGameControlGlobals.rapierWorld=new tA.World(new tA.Vector3(0,e??-10,0)),this.events=new tA.EventQueue(!0);let t=[];if(this.scene.traverseEntity(o=>{let a=o.dataPatched;if(o&&bA(o)&&o.visible){let c,l=a.states.some(h=>h.data.position!==void 0||h.data.rotation!==void 0||h.data.hiddenMatrix!==void 0),u=a.events.find(h=>h.data.disabled!==!0&&h.data.type==="Follow"),d=!1;for(let h of a.events)if(h.data.disabled!==!0){if(h.data.type==="GameControl")c=h.data;else if(h.data.type==="Collision"){d=!0;let f=new eg(h.data,o,this.scene,this.sharedAssets);this.collisionEvents.push(f),this.sharedGameControlGlobals.eventsPerObjects[o.uuid]?this.sharedGameControlGlobals.eventsPerObjects[o.uuid].push(f):this.sharedGameControlGlobals.eventsPerObjects[o.uuid]=[f]}}if(!a.physics)return!0;if(a.physics.rigidBody==="dynamic"&&a.physics.fusedBody===!1&&(o.matrixWorldFusedFalse=o.matrixWorld.clone()),a.physics.rigidBody==="dynamic"||l||u||d||c!==void 0){let h=[];c===void 0&&a.physics.rigidBody==="dynamic"&&!VP(o.hiddenMatrix)&&(o.matrixWorld0=o.matrixWorld.clone(),o.matrixWorld.identity()),o instanceof Lt&&o.geometry.getAttribute("position")!==void 0&&(o.matrixWorld0!==void 0&&o.geometry.applyMatrix4(o.matrixWorld0),h.push(Vs(o.geometry)));let f=o.matrixWorld.clone().invert();if(a.physics.fusedBody&&o.traverse(p=>{p!==o&&(o.matrixWorld0?(Ko.copy(p.matrixWorld),p.parent===o&&(p.hiddenMatrix0=p.hiddenMatrix.clone(),p.hiddenMatrix.premultiply(o.matrixWorld0))):Ko.multiplyMatrices(f,p.matrixWorld),p instanceof Lt&&p.geometry.getAttribute("position")!==void 0&&h.push(Vs(p.geometry,Ko)))}),h.length>0||c!==void 0){let p;c!==void 0?p=tA.RigidBodyDesc.kinematicPositionBased():a.physics.rigidBody==="dynamic"?(p=tA.RigidBodyDesc.dynamic(),p.setLinearDamping(a.physics.damping).setAdditionalMass(1e-9).setGravityScale(a.physics.gravityScale).enabledRotations(...a.physics.enabledRotation).enabledTranslations(...a.physics.enabledTranslation)):l||u?(p=tA.RigidBodyDesc.kinematicPositionBased(),this.sharedGameControlGlobals.entitiesWithTransformAnim.push(o)):p=tA.RigidBodyDesc.fixed();let m;m=h.length>0?Fi(h):void 0,o.matrixWorld0===void 0&&(o.matrixWorld.decompose(WA,fi,Dr),WA.divideScalar(this.pixelsPerMeter),o.position0=WA.clone(),o.rotation0=fi.clone(),p.setTranslation(WA.x,WA.y,WA.z).setRotation(fi),m?.scale(Dr.x,Dr.y,Dr.z)),m?.scale(1/this.pixelsPerMeter,1/this.pixelsPerMeter,1/this.pixelsPerMeter);let g=this.sharedGameControlGlobals.rapierWorld.createRigidBody(p);c===void 0&&a.physics.rigidBody==="dynamic"&&this.rigidBodyToMesh.set(g.handle,[o,Dr.clone(),a.physics.fusedBody]),o.rigidBody=g;let y=!(a.geometry===void 0||a.geometry.type==="SubdivGeometry"||a.geometry.type==="NonParametricGeometry"||a.geometry.type==="BooleanGeometry"||a.geometry.type==="VectorGeometry"||a.geometry.type==="StarGeometry"||a.geometry.type==="RectangleGeometry"||a.geometry.type==="EllipseGeometry"||a.geometry.type==="TriangleGeometry"||a.geometry.type==="TorusGeometry"||a.geometry.type==="HelixGeometry");try{this.addCollider(o,a.physics,m,c,y)}catch{this.addCollider(o,a.physics,m,c,!1)}}}else this.gameControlStates.some(([h])=>o.isDescendantOf(h))||(MA(o)&&t.push(Vs(o.geometry,o.matrixWorld)),a.physics.fusedBody&&o.traverse(h=>{!MA(h)||h===o||t.push(Vs(h.geometry,h.matrixWorld))}));if(a.physics?.fusedBody===!0)return!0}}),t.length===0)return;let A=Fi(t);A.scale(1/this.pixelsPerMeter,1/this.pixelsPerMeter,1/this.pixelsPerMeter);let r=tA.RigidBodyDesc.fixed(),i=this.sharedGameControlGlobals.rapierWorld.createRigidBody(r),s=tA.ColliderDesc.trimesh(A.getAttribute("position").array,A.getIndex().array).setFrictionCombineRule(tA.CoefficientCombineRule.Multiply).setRestitutionCombineRule(tA.CoefficientCombineRule.Multiply).setFriction(1).setRestitution(1);this.sharedGameControlGlobals.rapierWorld.createCollider(s,i)}updatePositions(){return this.nActiveRigidBodies=0,this.sharedGameControlGlobals.rapierWorld.forEachRigidBody(this.processRigidBody),this.nActiveRigidBodies>0}dispose(){if(this.scene.traverse(e=>{let t=e;if(t.matrixWorld0){let A=Ko.copy(t.matrixWorld0).invert();t instanceof Lt&&t.geometry.applyMatrix4(A),t.matrixWorld.copy(t.matrixWorld0),t.matrixWorld0=void 0}t.hiddenMatrix0&&(t.hiddenMatrix=t.hiddenMatrix0,t.hiddenMatrix0=void 0),t.matrixWorldFusedFalse&&(t.matrixWorldFusedFalse=void 0),t.rigidBody&&(t.rigidBody=void 0),t.position0&&(t.position0=void 0),t.rotation0&&(t.rotation0=void 0)}),this.sharedGameControlGlobals.rapierWorld?.free(),this.sharedGameControlGlobals.staticMeshBVH=void 0,this.sharedGameControlGlobals.entitiesWithTransformAnim=[],this.gameControls.forEach(e=>{e.reset(),e.dispose()}),this.gameControls=[],this.joysticks.forEach(([e,t])=>{e?.destroy(),t.remove()}),this.joystickToGameControls=[],this.joysticks=[],this.orbitControls){let e=this.orbitControls.object;e.removeEventListener("beginState",this.onBeginState),e.removeEventListener("completeState",this.onCompleteState),this.orbitControls.dispose(),this.orbitControls=void 0}for(let e of Object.values(this.sharedGameControlGlobals.eventsPerObjects))e.forEach(t=>t.disconnect());this.sharedGameControlGlobals.eventsPerObjects={},this.scene.updateMatrixWorld(!0)}update(e,t,A){let r=!0;if(this.orbitControls!==void 0&&this.orbitControlsNeedsUpdate&&(r=!this.orbitControls.update()),this.initializationCounter>=0&&this.initializationCounter<2)this.initializationCounter++,r=!1;else if(this.initializationCounter===2)for(let i of this.gameControls)r=!i.update(e,t,A)&&r;if(this.usePhysics&&(this.gameControls.length===0||this.needsCollisionDetection)){for(let i of this.sharedGameControlGlobals.entitiesWithTransformAnim){i.matrixWorld.decompose(WA,fi,Dr),Qx.setFromQuaternion(fi);let s=i;s.prevR===void 0?(s.prevR=Qx.clone(),s.prevT=WA.clone()):(s.prevR.copy(Qx),s.prevT.copy(WA)),i.rigidBody.setNextKinematicTranslation(WA.divideScalar(this.pixelsPerMeter)),i.rigidBody.setNextKinematicRotation(fi)}this.sharedGameControlGlobals.rapierWorld.step(this.events),this.events?.drainCollisionEvents(this.handleCollisionEvents),r=!this.updatePositions()&&r}return r}dispatchCollisionEvent(e,t){t.dispatchEvent(Kx),e.dispatch()}};var Zx={type:"change"},X5={type:"lock"},Q5={type:"unlock"},Gbe=new S,U2=new S,V2=new S,K5=new S,XA=new S,Dn=new S,Ys=new S,Fc=new de,z2=new de,Z5=new de,J5=new de,qn=new Ze,Xi=new Ze,pi=new jt(0,0,0,"YXZ"),$5=new S(1,0,0),Ir=new S(0,1,0),eW=new S(0,0,1),Jx=new S(1,1,1),tW=1,AW=.025,nW=16e-6,rW=12,iW=20,tn=new yA,or=new mt,sW={type:"requestRender"},H2=Math.PI/6,Ag=class extends Ut{constructor(t,A,r,i,s,o,a,c,l){super();this.object=t;this.domElement=A;this.sharedGameControlGlobals=s;this.cameraFollow=o;this.camera=a;this.scene=c;this.sharedAssets=l;this.enableDamping=!0;this.position0=new S;this.rotation0=new jt(0,0,0,"XYZ");this.scale0=new S;this.hiddenMatrix0=new de;this.target0=new S;this.zoom0=1;this.rotForce=1;this.moveForce=1;this.euler0=new jt(0,0,0,"YXZ");this.position0Cam=new S;this.quat0Cam=new Ze;this.scale0Cam=new S;this.hiddenMatrix0Cam=new de;this.threshEndTranslate=.01;this.threshEndRotate=1e-8;this.threshEndRotVel=.005;this.collider={type:"capsule",radius:40,segment:new yA(new S(0,-40,0),new S(0,40,0)),matrix:new de,position:new S,rotation:new Ze};this.euler=new jt(0,0,0,"YXZ");this.eulerDelta=new S;this.lastPosition=new S;this.lastCameraQuaternion=new Ze;this.lastCameraPosition=new S;this.PI_2=Math.PI/2;this.prevMouse=new G;this.velocityTarget=new S;this.velocity=new S;this.directionXZ=new S;this.rotVelocityStick=new S;this.rotVelocityTarget=new S;this.rotVelocity=new S;this.rotDirection=new S;this.nonColliderRotOffset=new de;this.nonColliderPosOffset=new de;this.firstPointerId=-1;this.rot=new S;this.movementState={moveNegZ:0,movePosZ:0,moveNegX:0,movePosX:0,moveNegY:0,movePosY:0,rotPosX:0,rotNegX:0,rotPosY:0,rotNegY:0,jump:0};this.vrEulerYOffset=0;this.onObject=!1;this.actionState={};this.keyAssignments=[["moveNegZ","W"],["moveNegX","A"],["movePosZ","S"],["movePosX","D"],["rotPosX","ArrowUp"],["rotPosY","ArrowLeft"],["rotNegX","ArrowDown"],["rotNegY","ArrowRight"],["jump"," "]];this.collisionEnabled=!0;this.offsetMatrix=new de;this.objectToTarget=new S;this.objectToTarget0=new S;this.objectToCamXZ=new S;this.objectToCamXZ0=new S;this.targetToCamera=new S;this.targetToCamera0=new S;this.cameraPolarAxis0=new S;this.targetPos=new S;this.targetQuat=new Ze;this.lerpFactorPos=new S().setScalar(.3);this.lerpFactorPosStart=.3;this.lerpFactorPosEnd=.3;this.lerpFactorRotStart=.3;this.lerpFactorRotEnd=.3;this.lerpFactorPosCamera=.3;this.lerpFactorRotCamera=.3;this.objXZQuat=new Ze;this.objXZQuatInv=new Ze;this.objXZRotMat=new de;this.isFirstPerson=!1;this.actions={};this.didHit=!1;this.groundVelocity=new S;this.pushedVelocity=new S;this.groundYRotation=0;this.objectRealQuat=new Ze;this.colliderWorldQuat=new Ze;this.groundNormal=new S;this.groundTilt=new Ze;this.groundTiltInv=new Ze;this.lastHitObj=null;this.isFirstFrame=!0;this.rotationAccumWhenOrientWithCamera=0;this.onPointerDown=t=>{t.target!==this.domElement||this.firstPointerId!==-1||(this.firstPointerId=t.pointerId,this.domElement.ownerDocument.addEventListener("pointermove",this.onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this.onPointerUp),this.rotBy!=="keys"&&!xA&&(!Ll||_l>=15.5)&&this.domElement.requestPointerLock(),this.prevMouse.set(t.clientX,t.clientY))};this.onPointerUp=t=>{this.firstPointerId=-1,this.domElement.ownerDocument.removeEventListener("pointermove",this.onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this.onPointerUp),t.pointerType==="mouse"&&this.domElement.ownerDocument.exitPointerLock()};this.onPointerMove=t=>{if(t.pointerId!==this.firstPointerId)return;let A=t.clientX-this.prevMouse.x,r=t.clientY-this.prevMouse.y;this.prevMouse.set(t.clientX,t.clientY),t.pointerType==="mouse"&&this.rotBy!=="keys"&&(Ll&&_l<15.5&&!xA?(this.eulerDelta.y=-A*this.mouseOrbitSensitivity,this.eulerDelta.x=-r*this.mouseOrbitSensitivity):(this.eulerDelta.y=-t.movementX*this.mouseOrbitSensitivity,this.eulerDelta.x=-t.movementY*this.mouseOrbitSensitivity)),t.pointerType!=="mouse"&&this.rotByTouch==="drag"&&(this.eulerDelta.y=-A*this.mouseOrbitSensitivity*5,this.eulerDelta.x=-r*this.mouseOrbitSensitivity*5),this.dispatchEvent(Zx)};this.onPointerlockChange=t=>{this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(X5),Ag.isLocked=!0):(this.dispatchEvent(Q5),Ag.isLocked=!1)};this.onPointerlockError=()=>{console.error("SPE.GameControls: Unable to use Pointer Lock API")};this.onKeyDown=t=>{t.preventDefault();for(let A of this.keyAssignments)if(t.key.toUpperCase()===A[1]||t.key===A[1]){this.movementState[A[0]]=1;break}this.dispatchEvent(Zx)};this.onKeyUp=t=>{for(let A of this.keyAssignments)if(t.key.toUpperCase()===A[1]||t.key===A[1]||t.code.slice(3,t.code.length).toUpperCase()===A[1]){this.movementState[A[0]]=0;break}};this.copyVRGamePadValues=(t,A)=>{for(let r=2;r<4;r++){let i=t.axes[r];A===0?r===2?this.movementState.movePosX=i:this.movementState.movePosZ=i:(t.buttons[3].pressed?this.movementState.jump=1:this.movementState.jump=0,r===2?(Math.abs(this.movementState.rotPosY)<.3&&Math.abs(i)>=.3&&(this.vrEulerYOffset+=i<0?1:-1),this.movementState.rotPosY=i):this.moveMode==="fly"&&(this.movementState.moveNegY=i))}};t===a&&(this.isFirstPerson=!0),this.position0.copy(this.object.position),this.rotation0.copy(this.object.rotation),this.scale0.copy(this.object.scale),this.hiddenMatrix0.copy(this.object.hiddenMatrix),this.object.parent?this.object.hiddenMatrix.copy(this.object.parent.matrixWorld).invert():this.object.hiddenMatrix.identity(),this.object.matrix.copy(this.object.matrixWorld),this.object.matrix.decompose(this.object.position,this.object.quaternion,this.object.scale),this.object.rotation.reorder("YXZ"),this.euler0.copy(this.object.rotation);let u=this.object.rotation.y;if(this.objectRealQuat.copy(this.object.quaternion),this.object.rotation.y=0,this.objXZQuat.copy(this.object.quaternion),this.objXZQuatInv.copy(this.objXZQuat).invert(),this.objXZRotMat.makeRotationFromQuaternion(this.object.quaternion),this.object.rotation.set(0,u,0),this.rot.setFromEuler(this.object.rotation),this.object.matrixAutoUpdate=!1,(this.isFirstPerson||this.cameraFollow===!0)&&(this.target0.copy(this.camera.getTarget()),this.zoom0=this.camera.zoom),this.cameraFollow===!0){if(this.position0Cam.copy(this.camera.position),this.quat0Cam.copy(this.camera.quaternion),this.scale0Cam.copy(this.camera.scale),this.hiddenMatrix0Cam.copy(this.camera.hiddenMatrix),this.camera?.parent?.parent){let b=this.camera.matrix.clone().invert().premultiply(this.camera.matrixWorld),w=b.clone().invert();this.camera.hiddenMatrix.multiply(w),this.camera.matrix.premultiply(b),this.camera.matrixWorld.decompose(this.camera.position,this.camera.quaternion,this.camera.scale)}this.camera.matrixAutoUpdate=!1,this.offsetMatrix.copy(this.object.matrix).invert().multiply(this.camera.matrix);let m=new S(0,0,-1).applyQuaternion(this.camera.quaternion),g=new S().subVectors(this.object.position,this.camera.position);this.objectToCamXZ.copy(g),this.objectToCamXZ.y=0,this.objectToCamXZ0.copy(this.objectToCamXZ);let y;if(Math.abs(m.y)<1e-6){g.y=0,m.y=0;let b=g.projectOnVector(m);this.targetToCamera0.copy(b).negate(),y=this.camera.position.clone().add(b)}else{let b=m.multiplyScalar(g.y/m.y);this.targetToCamera0.copy(b).negate(),y=b.clone().add(this.camera.position)}this.objectToTarget0.subVectors(y,this.object.position);let x=new jt().setFromQuaternion(this.camera.quaternion,"YXZ");this.cameraPolarOffset=-x.x,x.x=0,x.z=0,x.y-=Math.PI/2,this.cameraPolarAxis0.set(0,0,-1).applyEuler(x)}if(this.object instanceof VA&&(this.object.matrixAutoUpdate=!1),this.euler.setFromQuaternion(this.object.quaternion,"YXZ"),this.connect(),this.rotByTouch=r.rotByTouch??"joystick",this.rotBy=r.rotBy??"keys",this.rotationMode=r.rotationMode??"normal",this.moveMode=r.moveMode??"walk",this.collisionEnabled=r.collisionEnabled,this.speedTranslate=(r.speedTranslate??250)*tW,this.speedOrbit=(r.speedRotate??100)*AW,this.mouseOrbitSensitivity=(r.speedRotate??100)*nW,this.keyAssignments=r.keyAssignments.map(m=>{let g=[m[0],m[1]];return g[1]==="\u25B2"?g[1]="ArrowUp":g[1]==="\u25C0"?g[1]="ArrowLeft":g[1]==="\u25BC"?g[1]="ArrowDown":g[1]==="\u25B6"?g[1]="ArrowRight":g[1]==="\u21E7"?g[1]="Shift":g[1]==="\u21B5"?g[1]="Enter":g[1]==="Space"?g[1]=" ":g[1]==="\u2318"?g[1]="Meta":g[1]==="Ctrl"?g[1]="Control":g[1]==="Esc"&&(g[1]="Escape"),g}),r.rotBy==="mouse"){let m;m=this.keyAssignments.findIndex(g=>g[0]==="rotNegX"),m!==-1&&(this.keyAssignments[m][1]=""),m=this.keyAssignments.findIndex(g=>g[0]==="rotPosX"),m!==-1&&(this.keyAssignments[m][1]=""),m=this.keyAssignments.findIndex(g=>g[0]==="rotPosY"),m!==-1&&(this.keyAssignments[m][1]=""),m=this.keyAssignments.findIndex(g=>g[0]==="rotNegY"),m!==-1&&(this.keyAssignments[m][1]="")}this.lerpFactorPosStart=1-.02**(1/((r.delayPos[0]??.3)*60)),this.lerpFactorPosEnd=1-.02**(1/((r.delayPos[1]??.3)*60)),this.lerpFactorPos.setScalar(this.lerpFactorPosStart),this.lerpFactorRotStart=1-.02**(1/((r.delayRot[0]??.3)*60)),this.lerpFactorRotEnd=1-.02**(1/((r.delayRot[1]??.3)*60)),this.lerpFactorPosCamera=1-.02**(1/((r.delayPosCamera??.3)*60)),this.lerpFactorRotCamera=1-.02**(1/((r.delayRotCamera??.3)*60)),this.gravity=(i.gravity??hn.defaultData.gravity)*rW,this.pixelsPerMeter=i.pixelsPerMeter??hn.defaultData.pixelsPerMeter,this.usePhysics=i.usePhysics??hn.defaultData.usePhysics,this.jumpPower=r.jumpPower*iW,this.resetYPosition=r.resetYPosition,this.alignToGround=r.alignToGround??!1,this.orientMode=r.autoOrientMove?r.orientMode:"none",this.orientWith=r.orientWith??Tp.defaultDataThirdPerson.orientWith;let d=i.skinWidthRelative??hn.defaultData.skinWidthRelative,h=i.stepThreshRelative??hn.defaultData.stepThreshRelative;this.slopeThresh=(i.slopeThresh??hn.defaultData.slopeThresh)*Math.PI/180,r.collider.type==="capsule"?(this.collider.radius=r.collider.radius,this.collider.segment.start.y=r.collider.height/2-r.collider.radius,this.collider.segment.end.y=-this.collider.segment.start.y,this.offset=r.collider.height*d/this.pixelsPerMeter,this.stepThresh=r.collider.height*h/this.pixelsPerMeter):r.collider.type==="sphere"?(this.collider.radius=r.collider.radius,this.collider.segment.start.y=0,this.collider.segment.end.y=0,this.offset=2*r.collider.radius*d/this.pixelsPerMeter,this.stepThresh=2*r.collider.radius*h/this.pixelsPerMeter):(this.offset=r.collider.height*d/this.pixelsPerMeter,this.stepThresh=r.collider.height*h/this.pixelsPerMeter),this.collider.type=r.collider.type;let f=new S().fromArray(r.collider.position),p=new Ze().setFromEuler(new jt().fromArray([...r.collider.rotation,"XYZ"]));this.collider.position.copy(f).multiply(this.object.scale),this.collider.rotation.copy(p),this.collider.matrix.compose(f,p,Jx),r.cameraXAxis!==void 0&&(this.cameraXAxis=r.cameraXAxis,this.cameraYAxis=r.cameraYAxis,this.minPolarAngle=r.cameraRotXLimits[0],this.maxPolarAngle=r.cameraRotXLimits[1],this.minAzimuthAngleRel=r.cameraRotYLimits[0],this.maxAzimuthAngleRel=r.cameraRotYLimits[1]),r.gameActions!==void 0&&Object.entries(r.gameActions).forEach(([m,g],y)=>{g.forEach(({id:x,data:b})=>{try{this.actions[m]===void 0&&(this.actions[m]=[]),b.type==="Transition"?this.actions[m].push(new hi(x,b,c,l)):b.type==="Audio"?this.actions[m].push(new ci(x,b,t,l)):b.type==="Video"&&this.actions[m].push(new Hs(x,b,t))}catch{}})}),this.dispatchStopEvent("move"),this.dispatchStopEvent("jump"),this.dispatchStartEvent("idle")}reset(t=!1){if(this.object.rotation.copy(this.rotation0),this.object.position.copy(this.position0),this.object.scale.copy(this.scale0),this.object.hiddenMatrix.copy(this.hiddenMatrix0),t===!0){this.object.updateMatrix(),this.object.updateMatrixWorld(),this.object.matrix.copy(this.object.matrixWorld),this.object.matrix.decompose(this.object.position,this.object.quaternion,this.object.scale),this.object.parent?this.object.hiddenMatrix.copy(this.object.parent.matrixWorld).invert():this.object.hiddenMatrix.identity(),this.object.rotation.reorder("YXZ");let A=this.object.rotation.y;this.object.rotation.y=0,this.objXZQuat.copy(this.object.quaternion),this.objXZQuatInv.copy(this.objXZQuat).invert(),this.objXZRotMat.makeRotationFromQuaternion(this.object.quaternion),this.object.rotation.set(0,A,0),this.rot.setFromEuler(this.object.rotation),this.euler.setFromQuaternion(this.object.quaternion,"YXZ"),this.velocityTarget.set(0,0,0),this.velocity.set(0,0,0)}t===!1&&(this.object instanceof VA?this.object.matrixAutoUpdate=!0:this.object.updateMatrix()),this.cameraFollow===!0&&(this.camera.quaternion.copy(this.quat0Cam),this.camera.position.copy(this.position0Cam),this.camera.scale.copy(this.scale0Cam),this.camera.hiddenMatrix.copy(this.hiddenMatrix0Cam),this.camera.matrixAutoUpdate=!0),this.dispatchEvent(Zx)}connect(){this.domElement.ownerDocument.addEventListener("pointerdown",this.onPointerDown),this.domElement.ownerDocument.addEventListener("keydown",this.onKeyDown),this.domElement.ownerDocument.addEventListener("keyup",this.onKeyUp),this.domElement.ownerDocument.addEventListener("pointerlockchange",this.onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this.onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("pointerdown",this.onPointerDown),this.domElement.ownerDocument.removeEventListener("keydown",this.onKeyDown),this.domElement.ownerDocument.removeEventListener("keyup",this.onKeyUp),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this.onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this.onPointerlockError)}dispose(){this.disconnect(),Object.values(this.actions).forEach(t=>{t.forEach(A=>{(A instanceof hi||A instanceof ci||A instanceof Hs)&&A.dispose()})})}resetTo(t,A,r){}dispatchStartEvent(t){this.actions[t]!==void 0&&(this.actionState[t]||(this.actionState[t]=!0,this.actions[t].forEach(A=>{A instanceof hi?A.play():A instanceof ci&&A.dispatchGameControl("start")})))}dispatchStopEvent(t){this.actions[t]!==void 0&&(!this.actionState[t]||(this.actionState[t]=!1,this.actions[t].forEach(A=>{A instanceof hi?A.stop():A instanceof ci&&A.dispatchGameControl("stop")}),this.object.traverseEntity(A=>{A.currentState!==null&&A.changeSelectedState(null,{scene:this.scene,shared:this.sharedAssets})})))}update(t,A,r){if(this.gravity<0?this.object.position.y<this.resetYPosition:this.object.position.y>this.resetYPosition)return this.reset(!0),!0;this.sharedGameControlGlobals.gamePads.forEach(this.copyVRGamePadValues);let i=(this.isFirstFrame?16.6:t)/1e3;this.isFirstFrame&&(this.isFirstFrame=!1);let s=i*60,o=!1;if(this.usePhysics){let c=Dn.set(0,(this.velocity.y===0?-this.pixelsPerMeter:this.velocity.y)*i,0).divideScalar(this.pixelsPerMeter),l=this.sharedGameControlGlobals.rapierWorld.castShape(XA.copy(this.collider.position).applyQuaternion(this.objectRealQuat).add(this.object.position).divideScalar(this.pixelsPerMeter),this.colliderWorldQuat,c,this.object.rigidBody?.collider(0).shape,1,8,void 0,void 0,this.object.rigidBody);if(l){this.onObject=!0,this.groundNormal.set(l.normal2.x,l.normal2.y,l.normal2.z).applyQuaternion(this.colliderWorldQuat).negate(),this.alignToGround&&this.groundTiltAdjustment(this.groundNormal),Math.acos(this.groundNormal.y)<this.slopeThresh&&(o=!0);let u=l.collider._parent;this.groundYRotation=0,this.groundVelocity.set(0,0,0);for(let d of this.sharedGameControlGlobals.entitiesWithTransformAnim)if(d.rigidBody===u){d.matrixWorld.decompose(XA,Xi,Dn),this.groundVelocity.subVectors(XA,d.prevT),this.object.getWorldPosition(Dn).add(this.collider.position).sub(d.position),this.groundYRotation=pi.setFromQuaternion(Xi).y-d.prevR.y,Ys.copy(Dn).applyAxisAngle(Ir,this.groundYRotation),this.groundVelocity.add(Ys.sub(Dn)).divideScalar(i);break}}else this.onObject=!1}this.moveMode==="walk"&&this.collisionEnabled&&(this.movementState.jump===1&&this.onObject&&(this.velocityTarget.y=this.jumpPower,this.movementState.jump=0,this.dispatchStopEvent("idle"),this.dispatchStopEvent("move"),this.dispatchStopEvent("jump"),this.dispatchStartEvent("jump"),this.onObject=!1),this.velocityTarget.y+=this.onObject?0:this.gravity*s),this.moveMode==="fly"&&(this.velocityTarget.y=(this.movementState.movePosY-this.movementState.moveNegY)*this.speedTranslate),this.directionXZ.z=this.movementState.movePosZ-this.movementState.moveNegZ,this.directionXZ.x=this.movementState.movePosX-this.movementState.moveNegX,this.directionXZ.normalize(),this.movementState.moveNegZ||this.movementState.movePosZ?this.velocityTarget.z=this.directionXZ.z*this.speedTranslate*this.moveForce:this.velocityTarget.z=0,this.movementState.moveNegX||this.movementState.movePosX?this.velocityTarget.x=this.directionXZ.x*this.speedTranslate*this.moveForce:this.velocityTarget.x=0,(this.moveMode==="walk"?this.velocityTarget.x+this.velocityTarget.z===0:this.velocityTarget.manhattanLength()===0)?this.lerpFactorPos.setScalar(this.lerpFactorPosEnd):this.lerpFactorPos.setScalar(this.lerpFactorPosStart),this.moveMode==="walk"&&(this.lerpFactorPos.y=1),this.didHit===!1&&this.pushedVelocity.manhattanLength()===0||this.usePhysics===!1?(this.velocity.x+=(this.velocityTarget.x-this.velocity.x)*(1-(1-this.lerpFactorPos.x)**s),this.velocity.y+=(this.velocityTarget.y-this.velocity.y)*(1-(1-this.lerpFactorPos.y)**s),this.velocity.z+=(this.velocityTarget.z-this.velocity.z)*(1-(1-this.lerpFactorPos.z)**s)):this.velocity.copy(this.velocityTarget),(this.moveMode==="walk"?this.velocity.x**2+this.velocity.z**2<this.speedTranslate:this.velocity.lengthSq()<this.speedTranslate)?(this.dispatchStopEvent("move"),this.onObject&&(this.dispatchStopEvent("jump"),this.dispatchStartEvent("idle"))):(this.dispatchStopEvent("idle"),this.onObject&&(this.dispatchStopEvent("jump"),this.dispatchStartEvent("move")));let a=K5.copy(this.velocity);if(this.orientMode!=="none"&&this.isFirstPerson===!1){let c=Dn.copy(a);c.y=0,a.set(0,a.y,c.length()*-1)}if(pi.setFromVector3(this.rot),this.moveMode==="walk"&&(pi.x=0),a.applyEuler(pi),o&&(Xi.setFromUnitVectors(Ir,this.groundNormal),a.applyQuaternion(Xi)),r){let c=pi.set(0,this.vrEulerYOffset*H2,0);r.applyEuler(c),a.x+=r.x,a.z+=r.z,this.nonColliderPosOffset.elements[13]+=r.y*i}if(this.usePhysics===!0){let c=Dn;this.pushedVelocity.set(0,0,0);for(let l of this.sharedGameControlGlobals.entitiesWithTransformAnim){l.parent?.matrixWorldFusedFalse?Fc.multiplyMatrices(l.parent?.matrixWorldFusedFalse,l.matrix):Fc.multiplyMatrices(l.parent.matrixWorld,l.matrix);let u=Ys.setFromMatrixPosition(Fc).sub(l.prevT).divideScalar(i).divideScalar(this.pixelsPerMeter),d=l.rigidBody.collider(0).castCollider(u,this.object.rigidBody.collider(0),XA.copy(a).divideScalar(this.pixelsPerMeter),i);if(u.multiplyScalar(this.pixelsPerMeter),d!==null){this.pushedVelocity.copy(u),c.copy(d.normal1).applyQuaternion(l.quaternion);break}}if(this.pushedVelocity.manhattanLength()!==0){let l=c.dot(a);l<0&&a.addScaledVector(c,-l),a.add(this.pushedVelocity)}else a.add(this.groundVelocity)}if(this.rotDirection.y=Number(this.movementState.rotPosY)-Number(this.movementState.rotNegY),this.rotDirection.x=Number(this.movementState.rotPosX)-Number(this.movementState.rotNegX),this.rotDirection.normalize(),this.rotationMode==="normal"&&(this.movementState.rotPosX||this.movementState.rotNegX)||this.rotationMode==="steer"&&(this.movementState.rotPosX||this.movementState.rotNegX)&&(this.movementState.movePosZ||this.movementState.moveNegZ||this.moveMode==="walk")?this.rotVelocityStick.x=-this.rotDirection.x*this.speedOrbit*this.rotForce:this.rotVelocityStick.x=0,this.rotationMode==="normal"&&(this.movementState.rotPosY||this.movementState.rotNegY)||this.rotationMode==="steer"&&(this.movementState.rotPosY||this.movementState.rotNegY)&&(this.movementState.movePosZ||this.movementState.moveNegZ)?this.rotVelocityStick.y=-this.rotDirection.y*this.speedOrbit*this.rotForce:this.rotVelocityStick.y=0,this.rotVelocityTarget.subVectors(this.eulerDelta.divideScalar(i),this.rotVelocityStick),this.rotVelocityTarget.manhattanLength()===0?this.rotVelocity.lerp(this.rotVelocityTarget,1-(1-this.lerpFactorRotEnd)**s):this.rotVelocity.lerp(this.rotVelocityTarget,1-(1-this.lerpFactorRotStart)**s),this.euler.x+=this.rotVelocity.x*i,this.euler.y+=this.rotVelocity.y*i+this.groundYRotation,this.rotVelocityTarget.y===0&&this.directionXZ.manhattanLength()===0?this.rotationAccumWhenOrientWithCamera=0:(this.cameraFollow===!1||this.cameraYAxis==="Locked")&&(this.rotationAccumWhenOrientWithCamera+=this.rotVelocity.y*i),this.isFirstPerson===!1&&this.orientMode!=="none"&&this.directionXZ.manhattanLength()>0){let c=XA,l=Dn.copy(this.directionXZ);l.x*=-1,this.camera.getWorldDirection(c);let u=Ys.copy(Ir).multiplyScalar(c.dot(Ir));if(c.sub(u),this.orientWith==="camera"?this.rot.y=c.angleTo(l)*(c.cross(l).y>0?-1:1)+this.rotationAccumWhenOrientWithCamera:this.rot.y=this.euler.y+Math.atan2(-this.directionXZ.z,this.directionXZ.x)-Math.PI/2,this.orientMode==="radial"){this.objectToCamXZ.copy(this.objectToCamXZ0).applyAxisAngle(Ir,this.euler.y-this.euler0.y);let d=Dn.copy(this.objectToCamXZ).normalize(),h=Ys.copy(a).multiplyScalar(i);h.y=0;let f=h.sub(XA.copy(d).multiplyScalar(h.dot(d))).cross(d).y;this.euler.y-=Math.atan2(f,this.objectToCamXZ.length())}}else this.rot.y+=this.rotVelocity.y*i+this.groundYRotation,this.rotVelocityTarget.y!==0&&(this.cameraFollow===!1||this.cameraYAxis==="Locked")&&(this.euler.y=this.rot.y);if(this.cameraFollow===!0&&(this.moveMode==="walk"?this.cameraXAxis==="Limit"?this.euler.x=Ve.clamp(this.euler.x,-this.maxPolarAngle+this.cameraPolarOffset+1e-6,-this.minPolarAngle+this.cameraPolarOffset-1e-6):this.euler.x=Ve.clamp(this.euler.x,-this.PI_2+this.cameraPolarOffset,this.PI_2+this.cameraPolarOffset):this.cameraXAxis==="Limit"&&(this.euler.x=Ve.clamp(this.euler.x,-this.PI_2,this.PI_2))),this.moveMode==="fly"?this.rot.x=this.euler.x:this.isFirstPerson&&(A?(pi.copy(A),pi.y=0):(pi.copy(this.euler),pi.y=0),this.nonColliderRotOffset.makeRotationFromEuler(pi)),A&&(this.moveMode==="walk"?(this.rot.y=A.y,this.rot.x=0,this.rot.z=0):this.rot.setFromEuler(A),this.rot.y+=this.vrEulerYOffset*H2),qn.setFromAxisAngle($5,this.rot.x),Xi.setFromAxisAngle(Ir,this.rot.y),Xi.multiply(qn),qn.setFromAxisAngle(eW,this.rot.z),Xi.multiply(qn),this.object.quaternion.copy(Xi),this.objectRealQuat.multiplyQuaternions(this.object.quaternion,this.objXZQuat),this.objectRealQuat.multiply(this.objXZQuat),this.colliderWorldQuat.copy(this.objectRealQuat).multiply(this.collider.rotation),this.collisionEnabled)if(this.usePhysics){let c=Dn.copy(a).multiplyScalar(i/this.pixelsPerMeter),l;this.didHit=!1;let u=new S;for(let d=0;d<5;d++){let h=c.length(),f=Ys.copy(c).normalize();if(l=this.sharedGameControlGlobals.rapierWorld.castShape(XA.copy(this.collider.position).applyQuaternion(this.objectRealQuat).add(this.object.position).divideScalar(this.pixelsPerMeter).add(u),this.colliderWorldQuat,f,this.object.rigidBody?.collider(0).shape,h,8,void 0,void 0,this.object.rigidBody),l!==null){this.didHit=!0;let p=this.sharedGameControlGlobals.colliderToEntity[l.collider.handle];if(p!==this.lastHitObj&&d===0){this.lastHitObj=p;let x=this.sharedGameControlGlobals.eventsPerObjects[p?.uuid];if(x)for(let b of x)b.data.target==="character"&&(p.dispatchEvent(Kx),b.dispatch())}let m=U2.set(l.normal2.x,l.normal2.y,l.normal2.z).applyQuaternion(this.colliderWorldQuat),g=V2.copy(f).multiplyScalar(l.toi).dot(m),y=l.toi;if(y===0&&(this.object.position.y+=this.offset*this.pixelsPerMeter),g>this.offset&&(y=l.toi*(g-this.offset)/g,u.addScaledVector(f,y)),c.copy(f).multiplyScalar(h-y),Math.acos(-m.y)>this.slopeThresh){let x=XA.copy(this.collider.position).applyQuaternion(this.objectRealQuat).add(this.object.position).divideScalar(this.pixelsPerMeter).add(u),b=Ys.copy(l.witness2).applyQuaternion(this.colliderWorldQuat);b.y=0;let w=x.add(b);w.y+=this.stepThresh;let T=this.sharedGameControlGlobals.rapierWorld.castShape(w,this.colliderWorldQuat,c,this.object.rigidBody?.collider(0).shape,1,8,void 0,void 0,this.object.rigidBody);T!==null&&T.toi===0&&(m.y=0,m.normalize())}c.addScaledVector(m,-c.dot(m))}else{d===0&&this.directionXZ.manhattanLength()!==0&&(this.lastHitObj=null),u.add(c);break}}this.object.position.addScaledVector(u,this.pixelsPerMeter),this.object.rigidBody?.setTranslation(XA.copy(this.object.position).divideScalar(this.pixelsPerMeter),!0),this.object.rigidBody?.setRotation(qn.copy(this.object.quaternion).premultiply(this.groundTilt).multiply(this.objXZQuat),!0)}else{let c=this.onObject?1:5,l=a.multiplyScalar(i/c);for(let u=0;u<c;u++)this.object.position.add(l),this.collisionAdjustment(i/c)}else this.object.position.addScaledVector(a,i);if(this.moveMode==="walk"&&this.onObject&&(this.velocityTarget.y=0,this.velocity.y=0),this.object.quaternion.premultiply(this.groundTilt).multiply(this.objXZQuat),this.object.updateMatrix(),this.object.matrix.multiply(this.nonColliderPosOffset).multiply(this.nonColliderRotOffset),this.object.quaternion.premultiply(this.groundTiltInv).multiply(this.objXZQuatInv),this.cameraFollow===!0){this.updateFollowArms();let c=this.objectToTarget.add(this.object.position),l=this.targetToCamera.add(c);Fc.lookAt(l,c,Ir).setPosition(l),Fc.decompose(this.targetPos,this.targetQuat,XA),this.camera.quaternion.slerp(this.targetQuat,1-(1-this.lerpFactorRotCamera)**s),this.camera.position.lerp(this.targetPos,1-(1-this.lerpFactorPosCamera)**s),this.camera.updateMatrix(),this.camera.matrixWorldNeedsUpdate=!0,this.cameraYAxis==="Limit"&&this.orientMode==="cartesian"&&(this.euler.y=Ve.clamp(this.euler.y,this.minAzimuthAngleRel,this.maxAzimuthAngleRel)),this.euler.x=Ve.clamp(this.euler.x,-this.PI_2+(this.cameraPolarOffset<0?this.cameraPolarOffset:0),this.PI_2+(this.cameraPolarOffset>0?this.cameraPolarOffset:0))}return this.eulerDelta.set(0,0,0),this.lastPosition.distanceToSquared(this.object.position)<this.threshEndTranslate&&Math.abs(this.rotVelocity.x)<this.threshEndRotVel&&Math.abs(this.rotVelocity.y)<this.threshEndRotVel&&(this.camera===void 0||this.isFirstPerson||this.lastCameraPosition.distanceToSquared(this.camera.position)<this.threshEndTranslate&&8*(1-this.lastCameraQuaternion.dot(this.camera.quaternion))<this.threshEndRotate)&&(this.moveMode==="fly"||this.onObject===!0||this.collisionEnabled===!1)?!1:(this.camera&&(this.lastCameraPosition.copy(this.camera.position),this.lastCameraQuaternion.copy(this.camera.quaternion)),this.lastPosition.copy(this.object.position),this.object.dispatchEvent(sW),!0)}updateFollowArms(){this.objectToTarget.copy(this.objectToTarget0),this.targetToCamera.copy(this.targetToCamera0);let t=qn.setFromAxisAngle(Ir,this.cameraYAxis==="Limit"&&this.orientMode!=="radial"?Ve.clamp(this.euler.y-this.euler0.y,this.minAzimuthAngleRel,this.maxAzimuthAngleRel):this.euler.y-this.euler0.y);(this.cameraYAxis!=="Locked"||this.orientMode==="radial")&&this.objectToTarget.applyQuaternion(t);let A;this.cameraXAxis==="Limit"?A=Ve.clamp(this.euler.x,-this.maxPolarAngle+this.cameraPolarOffset+1e-6,-this.minPolarAngle+this.cameraPolarOffset-1e-6):A=Ve.clamp(this.euler.x,-this.PI_2+this.cameraPolarOffset+1e-6,this.PI_2+this.cameraPolarOffset-1e-6);let r=XA.copy(this.cameraPolarAxis0);(this.cameraYAxis!=="Locked"||this.orientMode==="radial")&&r.applyQuaternion(t);let i=Xi.setFromAxisAngle(r,A);this.cameraYAxis!=="Locked"&&this.targetToCamera.applyQuaternion(t),this.cameraXAxis!=="Locked"&&this.targetToCamera.applyQuaternion(i)}groundTiltAdjustment(t){Ir.angleTo(t)*180/Math.PI<15||Ir.angleTo(t)*180/Math.PI>85?qn.identity():qn.setFromUnitVectors(Ir,t),this.groundTilt.slerp(qn,.06),this.groundTiltInv.copy(this.groundTilt).invert()}collisionAdjustment(t){let A=V2.set(0,0,0);this.object.updateMatrix();let r=Fc.multiplyMatrices(this.object.matrix,this.objXZRotMat).multiply(this.collider.matrix).decompose(XA,qn,Dn).compose(XA,qn,Jx);this.sharedGameControlGlobals.entitiesWithTransformAnim.forEach(s=>{if(s===this.object||s.isDescendantOf(this.object))return;or.makeEmpty();let o=J5.copy(s.matrixWorld).decompose(XA,qn,Dn).compose(XA,qn,Jx),a=z2.copy(o).invert(),c=Z5.copy(z2).multiply(r);tn.copy(this.collider.segment),tn.start.applyMatrix4(c),tn.end.applyMatrix4(c);let l=U2.copy(this.object.position).applyMatrix4(a);or.expandByPoint(tn.start),or.expandByPoint(tn.end),or.min.addScalar(-this.collider.radius),or.max.addScalar(this.collider.radius),s.boundsTree.shapecast({intersectsBounds:u=>u.intersectsBox(or),intersectsTriangle:u=>{let d=XA,h=Dn,f=u.closestPointToSegment(tn,d,h);if(f<this.collider.radius){let p=this.collider.radius-f,m=h.sub(d).normalize(),g=Ys.copy(l);g.addScaledVector(m,p);let y=g.applyMatrix4(o).sub(this.object.position);A.add(y),tn.start.addScaledVector(m,p),tn.end.addScaledVector(m,p)}}})}),or.makeEmpty(),tn.copy(this.collider.segment),tn.start.applyMatrix4(r),tn.end.applyMatrix4(r),or.expandByPoint(tn.start),or.expandByPoint(tn.end),or.min.addScalar(-this.collider.radius),or.max.addScalar(this.collider.radius),this.sharedGameControlGlobals.staticMeshBVH?.shapecast({intersectsBounds:s=>s.intersectsBox(or),intersectsTriangle:s=>{let o=XA,a=Dn,c=s.closestPointToSegment(tn,o,a);if(c<this.collider.radius){let l=this.collider.radius-c,u=a.sub(o).normalize();this.alignToGround&&this.groundTiltAdjustment(u),A.addScaledVector(u,l),tn.start.addScaledVector(u,l),tn.end.addScaledVector(u,l)}}}),this.onObject=A.y>Math.abs(t*this.velocity.y*.25),this.onObject&&this.dispatchStopEvent("jump");let i=Math.max(0,A.length()-1e-5);A.normalize().multiplyScalar(i),this.object.position.add(A)}},eh=Ag;eh.isLocked=!1;var $x={type:"change"},W2={type:"changeZoom"},oW={type:"changePan"},th={type:"start"},Ah={type:"end",changed:!0},aW={type:"end",changed:!1},eb=new Ze,j2=new G,lW=2*Math.PI,cW=1e-8,uW=.01,Y2=2,tb=.125,q2=2,ng=1,rg=1,nh=.1,X2=new S,ig=new G;var Nc=class extends Ut{constructor(t,A,r=!1){super();this.object=t;this.domElement=A;this.isExport=r;this.enabled=!0;this.useKeyEvents=!0;this.enableDamping=!1;this.enableZoom=!0;this.enableRotate=!0;this.enablePan=!0;this.autoRotate=!1;this.rotationLimitsMode=0;this.panLimitsMode=0;this.rotationSoftLimit=2;this.panSoftLimit=2;this.hoverRotatePanMode=0;this.zoomLimitsEnabled=!1;this.mouseButtons=[0,5];this.mouseButtonsPlay=[3,4,5];this.touches=[null,Fn.DOLLY_ROTATE,Fn.PAN];this.offset=new S;this.eye=new S;this.lastPosition=new S;this.lastQuaternion=new Ze;this.current=new G;this.overShoot=new G;this.overRatio=new G;this.spherical=new xu;this.sphericalDelta=new xu;this.panOffset=new S;this.panLeftV=new S;this.panUpV=new S;this.panV=new S;this.rotateStart=new G;this.rotateEnd=new G;this.rotateDelta=new G;this.panStart=new G;this.panEnd=new G;this.panDelta=new G;this.dollyStart=new G;this.dollyEnd=new G;this.dollyDelta=new G;this.rotationRangeFactor=new G;this.panRangeFactor=new G;this.state=-1;this.zoomChanged=!1;this.isPointerDown=!1;this.isThetaFlipped=!1;this.prevScale=0;this.scale=1;this.gesture=!1;this.timer=-1;this.timerHover=-1;this.minDistance=0;this.maxDistance=1/0;this.minZoom=0;this.maxZoom=1/0;this.minPhi=0;this.maxPhi=Math.PI;this.minTheta=-1/0;this.maxTheta=1/0;this.minH=0;this.maxH=Math.PI;this.minV=-1/0;this.maxV=1/0;this.autoRotateClockwise=!0;this.isPanOverShoot=!1;this.isRotateOverShoot=!1;this.resetHoverEffectOnPointerLeave=!1;this.hasChange=!1;this.update=()=>{let t=this.object.position;this.offset.copy(t).sub(this.target),this.spherical.setFromVector3(this.offset),this.object.isUpVectorFlipped&&(this.spherical.phi*=-1,this.spherical.theta-=Math.PI),this.autoRotate&&this.state===-1&&this.rotateLeft((this.autoRotateClockwise===!0?1:-1)*this.getAutoRotationAngle()),this.rotationLimitsMode!==0&&this.applyLimits(this.sphericalDelta,this.rotationLimitsMode,this.rotationSoftLimit,this.maxTheta,this.minTheta,this.maxPhi,this.minPhi,this.rotationRangeFactor),this.rotationLimitsMode!==2&&(this.spherical.phi+=this.sphericalDelta.phi),(this.rotationLimitsMode!==1||this.autoRotate===!0)&&(this.spherical.theta+=this.sphericalDelta.theta),this.spherical.radius*=this.scale,this.zoomLimitsEnabled&&(this.spherical.radius=Math.max(this.minDistance,Math.min(this.maxDistance,this.spherical.radius))),this.panLimitsMode!==0&&(this.target.applyQuaternion(eb.copy(this.object.quaternion).invert()),this.panOffset.applyQuaternion(eb),this.applyLimits(this.panOffset,this.panLimitsMode,this.panSoftLimit,this.maxH,this.minH,this.maxV,this.minV,this.panRangeFactor),this.target.applyQuaternion(this.object.quaternion),this.panOffset.applyQuaternion(this.object.quaternion)),this.panLimitsMode===2&&(this.panOffset.y=0),this.panLimitsMode===1&&(this.panOffset.x=0),this.state===-1&&!this.gesture?(this.panOffset.multiplyScalar(1-tb),this.target.add(this.panOffset)):(this.target.add(this.panOffset),this.panOffset.set(0,0,0)),this.offset.setFromSpherical(this.spherical),t.copy(this.target).add(this.offset);let A=this.spherical.phi%lW;return this.eye.copy(this.offset).normalize(),this.object.up.copy(dt.DefaultUp).applyAxisAngle(this.eye,this.object.angleOffsetFromUp),A>0&&A>Math.PI||A<0&&A>-Math.PI?(this.object.up.negate(),this.object.lookAt(this.target),this.object.isUpVectorFlipped=!0):(this.object.lookAt(this.target),this.object.isUpVectorFlipped=!1),this.state===-1||this.enableDamping===!0?(this.sphericalDelta.theta*=1-tb,this.sphericalDelta.phi*=1-tb):this.sphericalDelta.set(0,0,0),this.scale=1,this.zoomChanged||this.lastPosition.distanceToSquared(this.object.position)>uW||8*(1-this.lastQuaternion.dot(this.object.quaternion))>cW?(this.dispatchEvent($x),this.lastPosition.copy(this.object.position),this.lastQuaternion.copy(this.object.quaternion),this.zoomChanged=!1,!0):(this.isPanOverShoot=!1,this.isRotateOverShoot=!1,this.sphericalDelta.set(0,0,0),this.panOffset.set(0,0,0),!1)};this.onPointerDown=t=>{this.enabled!==!1&&(t.pointerType==="touch"||t.pointerType==="pen"&&xA?this.onPointerDownTouch(t):this.onPointerDownMouse(t),this.state!==-1&&(this.isPointerDown=!0,this.dispatchEvent(th),this.domElement.ownerDocument.addEventListener("pointermove",this.onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this.onPointerUp)))};this.onPointerLeave=t=>{this.resetHoverEffectOnPointerLeave?(this.hoverRotatePanMode===1?(this.sphericalDelta.theta=-this.spherical.theta,this.sphericalDelta.phi=-this.spherical.phi,X2.subVectors(this.position0,this.target0),this.spherical.setFromVector3(X2),this.sphericalDelta.theta+=this.spherical.theta,this.sphericalDelta.phi+=this.spherical.phi,this.sphericalDelta.theta/=8,this.sphericalDelta.phi/=8):this.hoverRotatePanMode===2&&this.panOffset.subVectors(this.target0,this.target).divideScalar(8),this.update()):this.pointerLeaveEvent=t};this.onPointerEnter=t=>{this.resetHoverEffectOnPointerLeave||this.pointerLeaveEvent===void 0?ig.set(t.clientX-this.domElement.clientWidth/2,t.clientY-this.domElement.clientHeight/2):ig.set(t.clientX-this.pointerLeaveEvent.clientX,t.clientY-this.pointerLeaveEvent.clientY),this.hoverRotatePanMode===1?(this.rotateDelta.copy(ig).multiplyScalar(ng*nh).rotateAround(j2,-this.object.angleOffsetFromUp),this.rotateLeft(2*Math.PI*this.rotateDelta.x/this.domElement.clientHeight),this.rotateUp(2*Math.PI*this.rotateDelta.y/this.domElement.clientHeight),this.rotateStart.set(t.clientX,t.clientY)):this.hoverRotatePanMode===2&&(this.panDelta.copy(ig).multiplyScalar(rg*nh),this.pan(this.panDelta.x,this.panDelta.y),this.panStart.set(t.clientX,t.clientY)),this.update()};this.onPointerMove=t=>{this.enabled!==!1&&(t.pointerType==="touch"||t.pointerType==="pen"&&xA?this.onPointerMoveTouch(t):this.onPointerMoveMouse(t))};this.onPointerUp=t=>{this.isPointerDown=!1,Je.length===0&&(this.domElement.ownerDocument.removeEventListener("pointermove",this.onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this.onPointerUp)),this.hasChange?this.dispatchEvent(Ah):this.dispatchEvent(aW),this.state=-1};this.onPointerDownMouse=t=>{let A;switch(this.useKeyEvents?A=this.mouseButtons[t.button]:A=this.mouseButtonsPlay[t.button],A){case 0:if(t.altKey===!0&&!t.shiftKey&&!Wu(t)){if(this.enableRotate===!1)return;this.handleMouseDownRotate(t),this.state=0}else if(this.key===" "){if(this.enablePan===!1)return;this.handleMouseDownPan(t),this.state=2}break;case 4:if(this.enablePan===!1)return;this.handleMouseDownPan(t),this.state=2;break;case 3:if(Wu(t)||t.shiftKey){if(this.enablePan===!1)return;this.handleMouseDownPan(t),this.state=2}else{if(this.enableRotate===!1)return;this.handleMouseDownRotate(t),this.state=0}break;case 5:if(Wu(t)||t.shiftKey){if(this.enableRotate===!1)return;this.handleMouseDownRotate(t),this.state=0}else{if(this.enablePan===!1)return;this.handleMouseDownPan(t),this.state=2}break;default:this.state=-1}};this.onPointerMoveMouse=t=>{switch(this.state){case 0:if(this.enableRotate===!1)return;this.handleMouseMoveRotate(t);break;case 1:if(this.enableZoom===!1)return;this.handleMouseMoveDolly(t);break;case 2:if(this.enablePan===!1)return;this.handleMouseMovePan(t);break}};this.onPointerDownTouch=t=>{switch(this.touches[Je.length-1]){case Fn.ROTATE:if(this.enableRotate===!1){this.state=-1;return}this.handleTouchStartRotate(),this.state=3;break;case Fn.PAN:if(this.enablePan===!1){this.state=-1;return}this.handleTouchStartPan(),this.state=4;break;case Fn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this.handleTouchStartDollyPan(),this.state=5;break;case Fn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this.handleTouchStartDollyRotate(),this.state=6;break;default:this.state=-1}};this.onPointerMoveTouch=t=>{switch(this.state){case 3:if(this.enableRotate===!1)return;this.handleTouchMoveRotate(t),this.update();break;case 4:if(this.enablePan===!1)return;this.handleTouchMovePan(t),this.update();break;case 5:if(this.enableZoom===!1&&this.enablePan===!1)return;this.handleTouchMoveDollyPan(t),this.update();break;case 6:if(this.enableZoom===!1&&this.enableRotate===!1)return;this.handleTouchMoveDollyRotate(t),this.update();break;default:this.state=-1}};this.dispatchEndDebounced=Iu(()=>this.dispatchEvent(Ah),33);this.onMouseWheel=t=>{this.enabled===!1||this.enableZoom===!1&&this.enablePan===!1||(this.isExport===!1&&this.domElement.clientHeight===document.body.clientHeight&&this.domElement.clientWidth===document.body.clientWidth&&t.preventDefault(),this.dispatchEvent(th),this.handleMouseWheel(t),this.dispatchEndDebounced())};this.onGesture=t=>{if(this.enabled!==!1)if(t.preventDefault(),t.type==="gesturechange"){if(this.enableZoom===!1)return;this.dispatchEvent(th),t.scale>this.prevScale?this.dollyIn(this.getZoomScale()):t.scale<this.prevScale&&this.dollyOut(this.getZoomScale()),this.prevScale=t.scale,this.update()}else this.dispatchEvent(Ah)};this.onContextMenu=t=>{this.enabled!==!1&&t.preventDefault()};this.onTouchEnd=t=>{t.preventDefault()};this.onKeyDown=t=>{this.enabled!==!1&&(this.key=t.key)};this.onKeyUp=()=>{this.enabled!==!1&&(this.key=void 0,this.state!==-1&&this.onPointerUp(Je[0]))};this.onPointerHover=t=>{t.pointerType!=="mouse"||this.enabled===!1||this.state!==-1||this.hoverRotatePanMode===2&&this.isPanOverShoot||this.hoverRotatePanMode===1&&this.isRotateOverShoot||(this.isPointerDown=!0,this.hoverRotatePanMode===2?this.handleMouseMovePan(t,nh):this.hoverRotatePanMode===1&&this.handleMouseMoveRotate(t,nh))};this.target=this.object.getTarget(),this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.isUpVectorFlipped0=this.object.isUpVectorFlipped,this.offset.copy(this.object.position).sub(this.target),this.spherical.setFromVector3(this.offset)}dispatchEvent(t){t.type==="start"?this.hasChange=!1:this.hasChange=!0,super.dispatchEvent(t)}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.isUpVectorFlipped=this.isUpVectorFlipped0,this.object.updateProjectionMatrix(),this.dispatchEvent($x),this.update(),this.state=-1,this.pointerLeaveEvent=void 0}resetTo(t,A,r,i=!1){this.target.copy(t),this.object.position.copy(A),this.object.zoom=r,this.object.isUpVectorFlipped=i,this.object.updateProjectionMatrix(),this.dispatchEvent($x),this.update(),this.state=-1}fromJSON(t){this.setEnableDampingSpeed(t.enableDamping),this.enablePan=t.enablePan,this.enableZoom=t.enableZoom,this.enableRotate=t.enableRotate,this.rotationLimitsMode=t.rotationLimitsMode,this.panLimitsMode=t.panLimitsMode,this.panSoftLimit=t.panSoftLimit,this.rotationSoftLimit=t.rotationSoftLimit,this.hoverRotatePanMode=t.hoverRotatePanMode,this.hoverRotatePanMode!==0&&this.domElement.addEventListener("pointermove",this.onPointerHover),nh=(t.hoverRotatePanStrength/100)**2,this.zoomLimitsEnabled=t.zoomLimitsEnabled,this.minZoom=t.zoomLimits.min,this.maxZoom=Math.max(t.zoomLimits.min,t.zoomLimits.max),this.minDistance=1e3/t.zoomLimits.max,this.maxDistance=Math.max(this.minDistance,1e3/t.zoomLimits.min),this.autoRotate=t.autoRotate,Y2=t.autoRotateSpeed,this.autoRotateClockwise=t.autoRotateClockwise;let r=this.object.getTarget().applyQuaternion(eb.copy(this.object.quaternion).invert());this.minV=-t.panVerticalOffset.min+r.y,this.maxV=t.panVerticalOffset.max+r.y,this.minH=-t.panHorizontalOffset.min+r.x,this.maxH=t.panHorizontalOffset.max+r.x,this.panRangeFactor.set(this.maxH-this.minH,this.maxV-this.minV).divideScalar(2),this.rotationRangeFactor.setScalar(Math.PI).divideScalar(4),this.minPhi=qs(this.spherical.phi-t.rotationVerticalOffset.min),this.maxPhi=qs(this.spherical.phi+t.rotationVerticalOffset.max),this.minTheta=qs(this.spherical.theta-t.rotationHorizontalOffset.min),this.maxTheta=qs(this.spherical.theta+t.rotationHorizontalOffset.max),this.isThetaFlipped=this.minTheta>this.maxTheta,t.orbitTouches===1&&(this.touches[0]=Fn.ROTATE),t.panTouches===1&&(this.touches[0]=Fn.PAN),t.orbitTouches===2&&(this.touches[1]=Fn.DOLLY_ROTATE),t.panTouches===2&&(this.touches[1]=Fn.DOLLY_PAN),t.orbitTouches===3&&(this.touches[2]=Fn.ROTATE),t.panTouches===3&&(this.touches[2]=Fn.PAN),this.resetHoverEffectOnPointerLeave=t.resetHoverEffectOnPointerLeave??!1}connect(){this.domElement.addEventListener("contextmenu",this.onContextMenu),this.domElement.addEventListener("pointerdown",this.onPointerDown),this.domElement.addEventListener("wheel",this.onMouseWheel),window.addEventListener("keydown",this.onKeyDown,!1),window.addEventListener("keyup",this.onKeyUp,!1),Hu||(this.domElement.addEventListener("gesturestart",this.onGesture),this.domElement.addEventListener("gesturechange",this.onGesture),this.domElement.addEventListener("gestureend",this.onGesture)),this.domElement.addEventListener("touchend",this.onTouchEnd),this.hoverRotatePanMode!==0&&(this.domElement.addEventListener("pointerleave",this.onPointerLeave),this.domElement.addEventListener("pointerenter",this.onPointerEnter)),this.pointerLeaveEvent=void 0}dispose(){this.domElement.removeEventListener("contextmenu",this.onContextMenu),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("wheel",this.onMouseWheel),window.removeEventListener("keydown",this.onKeyDown,!1),window.removeEventListener("keyup",this.onKeyUp,!1),this.domElement.removeEventListener("pointermove",this.onPointerHover),Hu||(this.domElement.removeEventListener("gesturestart",this.onGesture),this.domElement.removeEventListener("gesturechange",this.onGesture),this.domElement.removeEventListener("gestureend",this.onGesture)),this.domElement.removeEventListener("touchend",this.onTouchEnd),this.domElement.removeEventListener("pointerleave",this.onPointerLeave),this.domElement.removeEventListener("pointerenter",this.onPointerEnter),this.domElement.ownerDocument.removeEventListener("pointermove",this.onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this.onPointerUp)}applyLimits(t,A,r,i,s,o,a,c){this.overShoot.set(0,0);let l,u,d;t instanceof S?(l=t.x,u=t.y,this.current.set(this.target.x,this.target.y),d=!0):(l=t.theta,u=t.phi,this.current.set(qs(this.spherical.theta),qs(this.spherical.phi)),d=!1),r===0&&(this.current.x+=l,this.current.y+=u),(A===3||A===2)&&(!d&&this.isThetaFlipped?this.current.x>i&&this.current.x<0?this.overShoot.x=i-this.current.x:this.current.x<s&&this.current.x>0&&(this.overShoot.x=s-this.current.x):this.current.x>i?this.overShoot.x=i-this.current.x:this.current.x<s&&(this.overShoot.x=s-this.current.x),i===s&&(l=0)),(A===3||A===1)&&(this.current.y>o?this.overShoot.y=o-this.current.y:this.current.y<a&&(this.overShoot.y=a-this.current.y),o===a&&(u=0)),d||(this.overShoot.x=qs(this.overShoot.x),this.overShoot.y=qs(this.overShoot.y)),r!==0?(this.overRatio.copy(this.overShoot).divide(c),this.overRatio.x=Math.min(Math.abs(this.overRatio.x),1),this.overRatio.y=Math.min(Math.abs(this.overRatio.y),1),r===1&&(this.overRatio.x=Q2(Math.abs(this.overRatio.x)),this.overRatio.y=Q2(Math.abs(this.overRatio.y))),this.isPointerDown||r===1?r===2&&(this.overRatio.x>.9||this.overRatio.y>.9)?this.isPointerDown=!1:(l*this.overShoot.x<0&&(l*=1-this.overRatio.x),u*this.overShoot.y<0&&(u*=1-this.overRatio.y)):r===2&&(!d&&(this.overRatio.x>.002||this.overRatio.y>.002)||d&&(Math.abs(this.overShoot.x)>2||Math.abs(this.overShoot.y)>2)?(l=this.overShoot.x*.05,u=this.overShoot.y*.05,d?this.isPanOverShoot=!0:this.isRotateOverShoot=!0):d?this.isPanOverShoot=!1:this.isRotateOverShoot=!1)):(l+=this.overShoot.x,u+=this.overShoot.y),t instanceof S?(t.x=l,t.y=u):(t.theta=l,t.phi=u)}setEnableDampingSpeed(t){this.enableDamping=t,ng=t===!0?.2:1}stopDamping(){this.sphericalDelta.theta=0,this.sphericalDelta.phi=0}getAutoRotationAngle(){return 2*Math.PI/60/60*Y2}getZoomScale(){return Math.pow(.95,q2)}rotateLeft(t){this.sphericalDelta.theta-=t}rotateUp(t){this.sphericalDelta.phi-=t}panLeft(t,A){this.panLeftV.setFromMatrixColumn(A,0),this.panLeftV.multiplyScalar(-t),this.panOffset.add(this.panLeftV)}panUp(t,A){this.panUpV.setFromMatrixColumn(A,1),this.panUpV.multiplyScalar(t),this.panOffset.add(this.panUpV)}pan(t,A){let r=this.domElement;if(r&&this.object.isPerspectiveCamera){let i=this.object.position;this.panV.copy(i).sub(this.target);let s=this.panV.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this.panLeft(2*t*s/r.clientHeight,this.object.matrix),this.panUp(2*A*s/r.clientHeight,this.object.matrix)}else r&&this.object.isOrthographicCamera&&(this.panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this.panUp(A*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix));this.dispatchEvent(oW)}dollyOut(t){this.object.isPerspectiveCamera?this.scale/=t:this.object.isOrthographicCamera&&(this.object.zoom*=t,this.zoomLimitsEnabled&&(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom))),this.object.updateProjectionMatrix(),this.zoomChanged=!0),this.dispatchEvent(W2)}dollyIn(t){this.object.isPerspectiveCamera?this.scale*=t:this.object.isOrthographicCamera&&(this.object.zoom/=t,this.zoomLimitsEnabled&&(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom))),this.object.updateProjectionMatrix(),this.zoomChanged=!0),this.dispatchEvent(W2)}zoomOut(t=this.getZoomScale()){this.dispatchEvent(th),this.dollyOut(t),this.dispatchEvent(Ah)}zoomIn(t=this.getZoomScale()){this.dispatchEvent(th),this.dollyIn(t),this.dispatchEvent(Ah)}handleMouseDownRotate(t){this.rotateStart.set(t.clientX,t.clientY)}handleMouseDownDolly(t){this.dollyStart.set(t.clientX,t.clientY)}handleMouseDownPan(t){this.panStart.set(t.clientX,t.clientY)}handleMouseMoveRotate(t,A=1){Ll&&_l<15.5&&!xA?(this.rotateEnd.set(t.clientX,t.clientY),this.rotateDelta.subVectors(this.rotateEnd,this.rotateStart),this.rotateStart.copy(this.rotateEnd)):this.rotateDelta.set(t.movementX,t.movementY),this.rotateDelta.multiplyScalar(ng*A).rotateAround(j2,-this.object.angleOffsetFromUp);let r=this.domElement;this.rotateLeft(2*Math.PI*this.rotateDelta.x/r.clientHeight),this.rotateUp(2*Math.PI*this.rotateDelta.y/r.clientHeight),this.update()}handleMouseMoveDolly(t){this.dollyEnd.set(t.clientX,t.clientY),this.dollyDelta.subVectors(this.dollyEnd,this.dollyStart),this.dollyDelta.y>0?this.dollyOut(this.getZoomScale()):this.dollyDelta.y<0&&this.dollyIn(this.getZoomScale()),this.dollyStart.copy(this.dollyEnd),this.update()}handleMouseMovePan(t,A=1){Ll&&_l<15.5&&!xA?(this.panEnd.set(t.clientX,t.clientY),this.panDelta.subVectors(this.panEnd,this.panStart),this.panStart.copy(this.panEnd)):this.panDelta.set(t.movementX,t.movementY),this.panDelta.multiplyScalar(rg*A),this.pan(this.panDelta.x,this.panDelta.y),this.update()}handleMouseWheel(t){if(RM===!1&&Wu(t)===!1&&dW(t)===!0){if(this.enablePan===!1)return;this.gesture?(this.panDelta.set(-t.deltaX,-t.deltaY).multiplyScalar(rg),this.panDelta.x=Math.min(Math.abs(this.panDelta.x),100)*(this.panDelta.x<0?-1:1),this.panDelta.y=Math.min(Math.abs(this.panDelta.y),100)*(this.panDelta.y<0?-1:1),t.altKey?this.pan(0,this.panDelta.y):t.shiftKey?this.pan(this.panDelta.x,0):this.pan(this.panDelta.x,this.panDelta.y),this.update()):(this.gesture=!0,this.isPointerDown=!0),window.clearTimeout(this.timer),this.timer=window.setTimeout(()=>{this.gesture=!1,this.isPointerDown=!1},30)}else{if(this.enableZoom===!1)return;t.deltaY===0?t.deltaX<0?this.dollyIn(this.getZoomScale()):t.deltaX>0&&this.dollyOut(this.getZoomScale()):t.deltaY<0?this.dollyIn(this.getZoomScale()):t.deltaY>0&&this.dollyOut(this.getZoomScale()),this.update(),this.gesture=!1,this.isPointerDown=!1}}handleTouchStartRotate(){if(Je.length===2){let t=.5*(Je[0].pageX+Je[1].pageX),A=.5*(Je[0].pageY+Je[1].pageY);this.rotateStart.set(t,A)}else this.rotateStart.set(Je[0].pageX,Je[0].pageY)}handleTouchStartPan(){if(Je.length===2){let t=.5*(Je[0].pageX+Je[1].pageX),A=.5*(Je[0].pageY+Je[1].pageY);this.panStart.set(t,A)}else this.panStart.set(Je[0].pageX,Je[0].pageY)}handleTouchStartDolly(){let t=Je[0].pageX-Je[1].pageX,A=Je[0].pageY-Je[1].pageY,r=Math.sqrt(t*t+A*A);this.dollyStart.set(0,r)}handleTouchStartDollyPan(){this.enableZoom&&this.handleTouchStartDolly(),this.enablePan&&this.handleTouchStartPan()}handleTouchStartDollyRotate(){this.enableZoom&&this.handleTouchStartDolly(),this.enableRotate&&this.handleTouchStartRotate()}handleTouchMoveRotate(t){if(Je.length===2){let r=vp(t),i=.5*(t.pageX+r.x),s=.5*(t.pageY+r.y);this.rotateEnd.set(i,s)}else{if(t.pointerId!==Je[0].pointerId)return;this.rotateEnd.set(t.pageX,t.pageY)}this.rotateDelta.subVectors(this.rotateEnd,this.rotateStart).multiplyScalar(ng);let A=this.domElement;A&&(this.rotateLeft(2*Math.PI*this.rotateDelta.x/A.clientHeight),this.rotateUp(2*Math.PI*this.rotateDelta.y/A.clientHeight)),this.rotateStart.copy(this.rotateEnd)}handleTouchMovePan(t){if(Je.length===2){let A=vp(t),r=.5*(t.pageX+A.x),i=.5*(t.pageY+A.y);this.panEnd.set(r,i)}else{if(t.pointerId!==Je[0].pointerId)return;this.panEnd.set(t.pageX,t.pageY)}this.panDelta.subVectors(this.panEnd,this.panStart).multiplyScalar(rg),this.pan(this.panDelta.x,this.panDelta.y),this.panStart.copy(this.panEnd)}handleTouchMoveDolly(t){let A=vp(t),r=t.pageX-A.x,i=t.pageY-A.y,s=Math.sqrt(r*r+i*i);this.dollyEnd.set(0,s),this.dollyDelta.set(0,Math.pow(this.dollyEnd.y/this.dollyStart.y,q2)),this.dollyOut(this.dollyDelta.y),this.dollyStart.copy(this.dollyEnd)}handleTouchMoveDollyPan(t){this.enableZoom&&this.handleTouchMoveDolly(t),this.enablePan&&this.handleTouchMovePan(t)}handleTouchMoveDollyRotate(t){this.enableZoom&&this.handleTouchMoveDolly(t),this.enableRotate&&this.handleTouchMoveRotate(t)}};function qs(n){let e=Math.PI*2;for(;n<=-Math.PI;)n+=e;for(;n>Math.PI;)n-=e;return n}function Q2(n){return 1-Math.pow(1-n,4)}function dW(n){return n.wheelDeltaY===0||n.deltaY===0?Oo&&n.shiftKey&&Math.abs(n.wheelDeltaX)>=120?!1:n.wheelDeltaX?n.wheelDeltaX===-3*n.deltaX:n.deltaMode===0:n.wheelDeltaY?n.wheelDeltaY===-3*n.deltaY:n.deltaMode===0}var Ab=new WeakMap,sg=class extends Ba{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,A,r){let i=new Na(this.manager);i.setPath(this.path),i.setResponseType("arraybuffer"),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(e,s=>{let o={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(s,o).then(t).catch(r)},A,r)}decodeDracoFile(e,t,A,r){let i={attributeIDs:A||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!A};this.decodeGeometry(e,i).then(t)}decodeGeometry(e,t){for(let a in t.attributeTypes){let c=t.attributeTypes[a];c.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[a]=c.name)}let A=JSON.stringify(t);if(Ab.has(e)){let a=Ab.get(e);if(a.key===A)return a.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r,i=this.workerNextTaskID++,s=e.byteLength,o=this._getWorker(i,s).then(a=>(r=a,new Promise((c,l)=>{r._callbacks[i]={resolve:c,reject:l},r.postMessage({type:"decode",id:i,taskConfig:t,buffer:e},[e])}))).then(a=>this._createGeometry(a.geometry));return o.catch(()=>!0).then(()=>{r&&i&&this._releaseTask(r,i)}),Ab.set(e,{key:A,promise:o}),o}_createGeometry(e){let t=new Ie;e.index&&t.setIndex(new Fe(e.index.array,1));for(let A=0;A<e.attributes.length;A++){let r=e.attributes[A],i=r.name,s=r.array,o=r.itemSize;t.setAttribute(i,new Fe(s,o))}return t}_loadLibrary(e,t){let A=new Na(this.manager);return A.setPath(this.decoderPath),A.setResponseType(t),A.setWithCredentials(this.withCredentials),new Promise((r,i)=>{A.load(e,r,void 0,i)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(A=>{let r=A[0];e||(this.decoderConfig.wasmBinary=A[1]);let i=hW.toString(),s=["/* draco decoder */",r,"","/* worker */",i.substring(i.indexOf("{")+1,i.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(i){let s=i.data;switch(s.type){case"decode":r._callbacks[s.id].resolve(s);break;case"error":r._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,i){return r._taskLoad>i._taskLoad?-1:1});let A=this.workerPool[this.workerPool.length-1];return A._taskCosts[e]=t,A._taskLoad+=t,A})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}};function hW(){let n,e;onmessage=function(s){let o=s.data;switch(o.type){case"init":n=o.decoderConfig,e=new Promise(function(l){n.onModuleLoaded=function(u){l({draco:u})},DracoDecoderModule(n)});break;case"decode":let a=o.buffer,c=o.taskConfig;e.then(l=>{let u=l.draco,d=new u.Decoder,h=new u.DecoderBuffer;h.Init(new Int8Array(a),a.byteLength);try{let f=t(u,d,h,c),p=f.attributes.map(m=>m.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{u.destroy(h),u.destroy(d)}});break}};function t(s,o,a,c){let l=c.attributeIDs,u=c.attributeTypes,d,h,f=o.GetEncodedGeometryType(a);if(f===s.TRIANGULAR_MESH)d=new s.Mesh,h=o.DecodeBufferToMesh(a,d);else if(f===s.POINT_CLOUD)d=new s.PointCloud,h=o.DecodeBufferToPointCloud(a,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!h.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+h.error_msg());let p={index:null,attributes:[]};for(let m in l){let g=self[u[m]],y,x;if(c.useUniqueIDs)x=l[m],y=o.GetAttributeByUniqueId(d,x);else{if(x=o.GetAttributeId(d,s[l[m]]),x===-1)continue;y=o.GetAttribute(d,x)}p.attributes.push(r(s,o,d,m,g,y))}return f===s.TRIANGULAR_MESH&&(p.index=A(s,o,d)),s.destroy(d),p}function A(s,o,a){let l=a.num_faces()*3,u=l*4,d=s._malloc(u);o.GetTrianglesUInt32Array(a,u,d);let h=new Uint32Array(s.HEAPF32.buffer,d,l).slice();return s._free(d),{array:h,itemSize:1}}function r(s,o,a,c,l,u){let d=u.num_components(),f=a.num_points()*d,p=f*l.BYTES_PER_ELEMENT,m=i(s,l),g=s._malloc(p);o.GetAttributeDataArrayForAllPoints(a,u,m,p,g);let y=new l(s.HEAPF32.buffer,g,f).slice();return s._free(g),{name:c,array:y,itemSize:d}}function i(s,o){switch(o){case Float32Array:return s.DT_FLOAT32;case Int8Array:return s.DT_INT8;case Int16Array:return s.DT_INT16;case Int32Array:return s.DT_INT32;case Uint8Array:return s.DT_UINT8;case Uint16Array:return s.DT_UINT16;case Uint32Array:return s.DT_UINT32}}}var Xs;function fW(){return Xs||(Xs=new sg,Xs.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.2/").preload()),Xs.decoderPending}async function pW(n){if(Xs){let e={attributeIDs:Xs.defaultAttributeIDs,attributeTypes:Xs.defaultAttributeTypes,useUniqueIDs:!1},t;try{t=await Xs.decodeGeometry(new Int8Array(n).buffer,e)}catch(A){console.error(A)}if(t)return{index:t.index?{array:t.index.array}:void 0,attributes:Object.entries(t.attributes).map(([A,r])=>({name:A,itemSize:r.itemSize,array:r.array}))}}return null}async function K2(n,e){let[t,A]=xv(ip.deserialize(new Uint8Array(n)));XM(t);let r=[];t.scene.objects.traverse((i,s)=>{s.type==="Mesh"&&s.geometry.type==="NonParametricGeometry"&&s.geometry.data.draco!==void 0&&r.push(s)}),r.length&&await fW();for(let i of r){let s=await pW(BA(i.geometry.data.draco));if(s){s.index&&(i.geometry.data.index={array:s.index.array,itemSize:1,normalized:!1,type:"Uint32Array"});let o={};s.attributes.forEach(({name:a,array:c,itemSize:l})=>{o[a]={array:c,itemSize:l,type:"Float32Array",normalized:!1}}),i.geometry.data.attributes=o,i.geometry.data.draco=void 0}}return e&&e(t),A.result().data}var Z2=Object.keys(mx).filter(n=>isNaN(Number(n))),og=class{constructor(e,t,A,r,i,s,o,a){this.preventScroll=i;this.requestRender=o;this.isEnable=!1;this.onResetRaycaster=()=>{this.eventContext.raycasterNeedsUpdate=!0};this.onTouchMovePreventScroll=e=>{(e.touches.length>1||this.preventScroll)&&e.preventDefault()};this.onMouseWheelPreventScroll=e=>{this.preventScroll&&e.preventDefault()};this.eventContext=new _m(e,t,A,s,r,a??!1),this.handlers={Spline:new Vm(this.eventContext),["Conditional"]:new Wm(this.eventContext),["Start"]:new $m(this.eventContext),Basic:new zm(this.eventContext),["MouseHover"]:new Zm(this.eventContext),["Scroll"]:new Jm(this.eventContext),["Follow"]:new Ym(this.eventContext),["LookAt"]:new Km(this.eventContext)}}activate(){let{scene:e,domElement:t}=this.eventContext;this.isEnable=!0,e.traverseEntity(A=>{A.addEventListener("requestRender",this.requestRender)}),Object.values(this.handlers).forEach(A=>A.connect()),this.resize(),Z2.forEach(A=>{Object.values(this.handlers).some(r=>r.domEventsNeeded.has(A))&&t.addEventListener(A,this.onResetRaycaster)}),t.addEventListener("wheel",this.onMouseWheelPreventScroll),t.addEventListener("touchmove",this.onTouchMovePreventScroll)}deactivate(){let{scene:e,domElement:t}=this.eventContext;this.isEnable=!1,Object.values(this.handlers).forEach(A=>A.disconnect()),e.traverseEntity(A=>{A.removeEventListener("requestRender",this.requestRender)}),Z2.forEach(A=>{t.removeEventListener(A,this.onResetRaycaster)}),t.removeEventListener("touchmove",this.onTouchMovePreventScroll),t.removeEventListener("wheel",this.onMouseWheelPreventScroll)}reset(){this.deactivate(),this.activate()}resize(){this.eventContext.updaterRect()}};var ag=class{constructor(e,t,A,r,i){this._aspect=1;this._renderer=e,this._camera=t,this._frameSize=new G().copy(A),this._editorSize=new G().copy(r),this._aspect=t.aspect,this._fov=i??t.fov}set frameSize(e){this._frameSize.copy(e)}updateRenderer(){!this._renderer||this._renderer.setSize(this._frameSize.x,this._frameSize.y)}updateViewportForImageExport(){if(!this._renderer||!this._camera||this._camera.cameraType!=="PerspectiveCamera")return;let e=this._frameSize.x,t=this._frameSize.y,A=this._editorSize.x,r=this._editorSize.y;this._aspect=e/t,this._camera.zoom*=Math.min(A/e,r/t),this._renderer.setViewport(0,0,e,t)}updateViewport(){if(!this._renderer||!this._camera||this._camera.cameraType!=="PerspectiveCamera")return;let e=this._frameSize.x,t=this._frameSize.y,A=this._editorSize.x,r=this._editorSize.y,i=0,s=0,o=e,a=t;e<A&&(i=(A-e)*.5,i=-i,o=A),t<r&&(s=(r-t)*.5,s=-s,a=r),this._aspect=o/a,this._renderer.setViewport(i,s,o,a)}updateCamera(){if(!!this._camera)if(this._camera.cameraType==="PerspectiveCamera"){let e=this._frameSize.y,t=this._editorSize.y,A=this._fov;if(e>t){let r=mW(e,1080,2160,1,15)/100;A*=e/t,A*=1-r}this._camera.aspect=this._aspect,this._camera.fov=A,this._camera.updateProjectionMatrix()}else this._camera.setViewplaneSize(this._frameSize.x,this._frameSize.y)}setCamera(e){this._camera=e,this._aspect=e.aspect,this._fov=e.fov}revert(){let e=window.innerWidth,t=window.innerHeight;this._renderer&&(this._renderer.setViewport(0,0,e,t),this._renderer.setSize(e,t)),this._camera&&(this._camera.aspect=e/t,this._camera.fov=this._fov,this._camera.setViewplaneSize(e,t),this._camera.updateProjectionMatrix())}};function mW(n,e,t,A,r){return(n-e)/(t-e)*(r-A)+A}var rD={RED:0,GREEN:1,BLUE:2,ALPHA:3};var rh="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}";var gW=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D cocBuffer;uniform vec2 texelSize;uniform float scale;
#if PASS == 1
uniform vec4 kernel64[32];
#else
uniform vec4 kernel16[8];
#endif
varying vec2 vUv;void main(){
#ifdef FOREGROUND
vec2 CoCNearFar=texture2D(cocBuffer,vUv).rg;float CoC=CoCNearFar.r*scale;
#else
float CoC=texture2D(cocBuffer,vUv).g*scale;
#endif
if(CoC==0.0){gl_FragColor=texture2D(inputBuffer,vUv);}else{
#ifdef FOREGROUND
vec2 step=texelSize*max(CoC,CoCNearFar.g*scale);
#else
vec2 step=texelSize*CoC;
#endif
#if PASS == 1
vec4 acc=vec4(0.0);for(int i=0;i<32;++i){vec4 kernel=kernel64[i];vec2 uv=step*kernel.xy+vUv;acc+=texture2D(inputBuffer,uv);uv=step*kernel.zw+vUv;acc+=texture2D(inputBuffer,uv);}gl_FragColor=acc/64.0;
#else
vec4 maxValue=texture2D(inputBuffer,vUv);for(int i=0;i<8;++i){vec4 kernel=kernel16[i];vec2 uv=step*kernel.xy+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);uv=step*kernel.zw+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);}gl_FragColor=maxValue;
#endif
}}`,lg=class extends gt{constructor(n=!1,e=!1){super({name:"BokehMaterial",defines:{PASS:n?"2":"1"},uniforms:{kernel64:new we(null),kernel16:new we(null),inputBuffer:new we(null),cocBuffer:new we(null),texelSize:new we(new G),scale:new we(1)},blending:Bt,depthWrite:!1,depthTest:!1,fragmentShader:gW,vertexShader:rh}),this.toneMapped=!1,e&&(this.defines.FOREGROUND="1"),this.generateKernel()}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}set cocBuffer(n){this.uniforms.cocBuffer.value=n}setCoCBuffer(n){this.uniforms.cocBuffer.value=n}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(n){return this.uniforms.scale.value=n}setScale(n){this.uniforms.scale.value=n}generateKernel(){let n=2.39996323,e=new Float32Array(128),t=new Float32Array(32),A=0,r=0;for(let o=0;o<80;++o){let a=o*n,c=Math.sqrt(o)/Math.sqrt(80),l=c*Math.cos(a),u=c*Math.sin(a);o%5===0?(t[r++]=l,t[r++]=u):(e[A++]=l,e[A++]=u)}let i=[],s=[];for(let o=0;o<128;)i.push(new He(e[o++],e[o++],e[o++],e[o++]));for(let o=0;o<32;)s.push(new He(t[o++],t[o++],t[o++],t[o++]));this.uniforms.kernel64.value=i,this.uniforms.kernel16.value=s}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e)}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}};function J2(n,e,t){return n*(e-t)-e}function ob(n,e,t){return Math.min(Math.max((n+e)/(e-t),0),1)}var yW=`#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform float focusDistance;uniform float focusRange;uniform float cameraNear;uniform float cameraFar;varying vec2 vUv;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}void main(){float depth=readDepth(vUv);
#ifdef PERSPECTIVE_CAMERA
float viewZ=perspectiveDepthToViewZ(depth,cameraNear,cameraFar);float linearDepth=viewZToOrthographicDepth(viewZ,cameraNear,cameraFar);
#else
float linearDepth=depth;
#endif
float signedDistance=linearDepth-focusDistance;float magnitude=smoothstep(0.0,focusRange,abs(signedDistance));gl_FragColor.rg=magnitude*vec2(step(signedDistance,0.0),step(0.0,signedDistance));}`,vW=class extends gt{constructor(n){super({name:"CircleOfConfusionMaterial",defines:{DEPTH_PACKING:"0"},uniforms:{depthBuffer:new we(null),focusDistance:new we(0),focusRange:new we(0),cameraNear:new we(.3),cameraFar:new we(1e3)},blending:Bt,depthWrite:!1,depthTest:!1,fragmentShader:yW,vertexShader:rh}),this.toneMapped=!1,this.uniforms.focalLength=this.uniforms.focusRange,this.adoptCameraSettings(n)}get near(){return this.uniforms.cameraNear.value}get far(){return this.uniforms.cameraFar.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=OA){this.depthBuffer=n,this.depthPacking=e}get focusDistance(){return this.uniforms.focusDistance.value}set focusDistance(n){this.uniforms.focusDistance.value=n}get worldFocusDistance(){return-J2(this.focusDistance,this.near,this.far)}set worldFocusDistance(n){this.focusDistance=ob(-n,this.near,this.far)}getFocusDistance(n){this.uniforms.focusDistance.value=n}setFocusDistance(n){this.uniforms.focusDistance.value=n}get focalLength(){return this.focusRange}set focalLength(n){this.focusRange=n}get focusRange(){return this.uniforms.focusRange.value}set focusRange(n){this.uniforms.focusRange.value=n}get worldFocusRange(){return-J2(this.focusRange,this.near,this.far)}set worldFocusRange(n){this.focusRange=ob(-n,this.near,this.far)}getFocalLength(n){return this.focusRange}setFocalLength(n){this.focusRange=n}adoptCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof nA?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}},xW=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <encodings_fragment>
#include <dithering_fragment>
}`,bW="uniform vec2 texelSize;uniform vec2 halfTexelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize*vec2(kernel)+halfTexelSize)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",$2=class extends gt{constructor(n=new G){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new we(null),texelSize:new we(new G),halfTexelSize:new we(new G),kernel:new we(0),scale:new we(1)},blending:Bt,depthWrite:!1,depthTest:!1,fragmentShader:xW,vertexShader:bW}),this.toneMapped=!1,this.setTexelSize(n.x,n.y)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e),this.uniforms.halfTexelSize.value.set(n,e).multiplyScalar(.5)}setSize(n,e){let t=this.uniforms;t.texelSize.value.set(1/n,1/e),t.halfTexelSize.value.copy(t.texelSize.value).multiplyScalar(.5)}},wW=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <encodings_fragment>
}`,SW=class extends gt{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new we(null),opacity:new we(1)},blending:Bt,depthWrite:!1,depthTest:!1,fragmentShader:wW,vertexShader:rh}),this.toneMapped=!1}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}};var TW=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
#if EDGE_DETECTION_MODE == 1
#include <common>
#endif
#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}
#elif PREDICATION_MODE == 2
uniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}
#endif
#if PREDICATION_MODE != 0
vec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}
#endif
#if EDGE_DETECTION_MODE != 0
uniform sampler2D inputBuffer;
#endif
void main(){
#if EDGE_DETECTION_MODE == 0
const vec2 threshold=vec2(DEPTH_THRESHOLD);
#elif PREDICATION_MODE != 0
vec2 threshold=calculatePredicatedThreshold();
#else
const vec2 threshold=vec2(EDGE_THRESHOLD);
#endif
#if EDGE_DETECTION_MODE == 0
vec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 1
float l=linearToRelativeLuminance(texture2D(inputBuffer,vUv).rgb);float lLeft=linearToRelativeLuminance(texture2D(inputBuffer,vUv0).rgb);float lTop=linearToRelativeLuminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=linearToRelativeLuminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=linearToRelativeLuminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=linearToRelativeLuminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=linearToRelativeLuminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 2
vec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#endif
}`,MW=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,ug={DEPTH:0,LUMA:1,COLOR:2},lb={DISABLED:0,DEPTH:1,CUSTOM:2},EW=class extends gt{constructor(n=new G,e=ug.COLOR){super({name:"EdgeDetectionMaterial",defines:{LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new we(null),depthBuffer:new we(null),predicationBuffer:new we(null),texelSize:new we(n)},blending:Bt,depthWrite:!1,depthTest:!1,fragmentShader:TW,vertexShader:MW}),this.toneMapped=!1,this.edgeDetectionMode=e}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=OA){this.depthBuffer=n,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(n){this.defines.EDGE_DETECTION_MODE=n.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(n){this.edgeDetectionMode=n}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(n){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=n.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(n){this.localContrastAdaptationFactor=n}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(n){this.defines.EDGE_THRESHOLD=n.toFixed("6"),this.defines.DEPTH_THRESHOLD=(n*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(n){this.edgeDetectionThreshold=n}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(n){this.defines.PREDICATION_MODE=n.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(n){this.predicationMode=n}set predicationBuffer(n){this.uniforms.predicationBuffer.value=n}setPredicationBuffer(n){this.uniforms.predicationBuffer.value=n}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(n){this.defines.PREDICATION_THRESHOLD=n.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(n){this.predicationThreshold=n}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(n){this.defines.PREDICATION_SCALE=n.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(n){this.predicationScale=n}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(n){this.defines.PREDICATION_STRENGTH=n.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(n){this.predicationStrength=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},CW=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;
#if THREE_REVISION >= 137
vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}FRAGMENT_HEADvoid main(){FRAGMENT_MAIN_UVvec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGEgl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <encodings_fragment>
#endif
#include <dithering_fragment>
}`,PW="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEADvoid main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORTgl_Position=vec4(position.xy,1.0,1.0);}",Or={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},ab=class extends gt{constructor(n,e,t,A,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:go.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new we(null),depthBuffer:new we(null),resolution:new we(new G),texelSize:new we(new G),cameraNear:new we(.3),cameraFar:new we(1e3),aspect:new we(1),time:new we(0)},blending:Bt,depthWrite:!1,depthTest:!1,dithering:r}),this.toneMapped=!1,n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.adoptCameraSettings(A)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=OA){this.depthBuffer=n,this.depthPacking=e}setShaderParts(n){return this.fragmentShader=CW.replace(Or.FRAGMENT_HEAD,n.get(Or.FRAGMENT_HEAD)).replace(Or.FRAGMENT_MAIN_UV,n.get(Or.FRAGMENT_MAIN_UV)).replace(Or.FRAGMENT_MAIN_IMAGE,n.get(Or.FRAGMENT_MAIN_IMAGE)),this.vertexShader=PW.replace(Or.VERTEX_HEAD,n.get(Or.VERTEX_HEAD)).replace(Or.VERTEX_MAIN_SUPPORT,n.get(Or.VERTEX_MAIN_SUPPORT)),this.needsUpdate=!0,this}setDefines(n){for(let e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(let e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(let e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof nA?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){let t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return Or}};var DW=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=linearToRelativeLuminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*l,l);
#else
gl_FragColor=vec4(l);
#endif
}`,IW=class extends gt{constructor(n=!1,e=null){super({name:"LuminanceMaterial",uniforms:{inputBuffer:new we(null),threshold:new we(0),smoothing:new we(1),range:new we(null)},blending:Bt,depthWrite:!1,depthTest:!1,fragmentShader:DW,vertexShader:rh}),this.toneMapped=!1,this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},OW=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef MASK_PRECISION_HIGH
uniform mediump sampler2D maskTexture;
#else
uniform lowp sampler2D maskTexture;
#endif
#if MASK_FUNCTION != 0
uniform float strength;
#endif
varying vec2 vUv;void main(){
#if COLOR_CHANNEL == 0
float mask=texture2D(maskTexture,vUv).r;
#elif COLOR_CHANNEL == 1
float mask=texture2D(maskTexture,vUv).g;
#elif COLOR_CHANNEL == 2
float mask=texture2D(maskTexture,vUv).b;
#else
float mask=texture2D(maskTexture,vUv).a;
#endif
#if MASK_FUNCTION == 0
#ifdef INVERTED
mask=step(mask,0.0);
#else
mask=1.0-step(mask,0.0);
#endif
#else
mask=clamp(mask*strength,0.0,1.0);
#ifdef INVERTED
mask=1.0-mask;
#endif
#endif
#if MASK_FUNCTION == 2
gl_FragColor=vec4(mask*texture2D(inputBuffer,vUv).rgb,mask);
#else
gl_FragColor=mask*texture2D(inputBuffer,vUv);
#endif
}`,iD={DISCARD:0,MULTIPLY:1,MULTIPLY_RGB_SET_ALPHA:2},LW=class extends gt{constructor(n=null){super({name:"MaskMaterial",uniforms:{maskTexture:new we(n),inputBuffer:new we(null),strength:new we(1)},blending:Bt,depthWrite:!1,depthTest:!1,fragmentShader:OW,vertexShader:rh}),this.toneMapped=!1,this.setColorChannel(rD.RED),this.setMaskFunction(iD.DISCARD)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}set maskTexture(n){this.uniforms.maskTexture.value=n,delete this.defines.MASK_PRECISION_HIGH,n.type!==Gt&&(this.defines.MASK_PRECISION_HIGH="1"),this.needsUpdate=!0}setMaskTexture(n){this.maskTexture=n}set colorChannel(n){this.defines.COLOR_CHANNEL=n.toFixed(0),this.needsUpdate=!0}setColorChannel(n){this.colorChannel=n}set maskFunction(n){this.defines.MASK_FUNCTION=n.toFixed(0),this.needsUpdate=!0}setMaskFunction(n){this.maskFunction=n}get inverted(){return this.defines.INVERTED!==void 0}set inverted(n){this.inverted&&!n?delete this.defines.INVERTED:n&&(this.defines.INVERTED="1"),this.needsUpdate=!0}isInverted(){return this.inverted}setInverted(n){this.inverted=n}get strength(){return this.uniforms.strength.value}set strength(n){this.uniforms.strength.value=n}getStrength(){return this.strength}setStrength(n){this.strength=n}};var _W=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
#if __VERSION__ < 300
#define round(v) floor(v + 0.5)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);
#endif
}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);
#endif
}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){
#if !defined(DISABLE_DIAG_DETECTION)
weights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){
#endif
vec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);
#if !defined(DISABLE_DIAG_DETECTION)
}else{e.r=0.0;}
#endif
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,RW="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",BW=class extends gt{constructor(n=new G,e=new G){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new we(null),searchTexture:new we(null),areaTexture:new we(null),resolution:new we(e),texelSize:new we(n)},blending:Bt,depthWrite:!1,depthTest:!1,fragmentShader:_W,vertexShader:RW}),this.toneMapped=!1}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(n){this.uniforms.searchTexture.value=n}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(n){this.uniforms.areaTexture.value=n}setLookupTextures(n,e){this.searchTexture=n,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(n){let e=Math.min(Math.max(n,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(n){this.orthogonalSearchSteps=n}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(n){let e=Math.min(Math.max(n,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(n){this.diagonalSearchSteps=n}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(n){n?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(n){this.diagonalDetection=n}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(n){let e=Math.min(Math.max(n,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(n){this.cornerRounding=n}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(n){n?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(n){this.cornerDetection=n}setSize(n,e){let t=this.uniforms;t.texelSize.value.set(1/n,1/e),t.resolution.value.set(n,e)}};var NW=new fr,Qs=null;function FW(){if(Qs===null){let n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]);Qs=new Ie,Qs.setAttribute!==void 0?(Qs.setAttribute("position",new Fe(n,3)),Qs.setAttribute("uv",new Fe(e,2))):(Qs.addAttribute("position",new Fe(n,3)),Qs.addAttribute("uv",new Fe(e,2)))}return Qs}var On=class{constructor(n="Pass",e=new ln,t=NW){this.name=n,this.renderer=null,this.scene=e,this.camera=t,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(n){if(this.rtt===n){let e=this.getFullscreenMaterial();e!==null&&(e.needsUpdate=!0),this.rtt=!n}}setRenderer(n){this.renderer=n}isEnabled(){return this.enabled}setEnabled(n){this.enabled=n}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(n){let e=this.screen;e!==null?e.material=n:(e=new PA(FW(),n),e.frustumCulled=!1,this.scene===null&&(this.scene=new ln),this.scene.add(e),this.screen=e)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(n){this.fullscreenMaterial=n}getDepthTexture(){return null}setDepthTexture(n,e=OA){}render(n,e,t,A,r){throw new Error("Render method not implemented!")}setSize(n,e){}initialize(n,e,t){}dispose(){for(let n of Object.keys(this)){let e=this[n];if(e!==null&&typeof e.dispose=="function"){if(e instanceof ln||e===this.renderer)continue;this[n].dispose()}}}},Gc=class extends On{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new SW,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new ht(1,1,{minFilter:it,magFilter:it,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,A,r){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Gt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n.outputEncoding===qe&&(this.renderTarget.texture.encoding=qe))}};var GW=class extends On{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,A,r){let i=n.state.buffers.stencil;i.setLocked(!1),i.setTest(!1)}},nb=new Le,ih=class extends On{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,A,r){let i=this.overrideClearColor,s=this.overrideClearAlpha,o=n.getClearAlpha(),a=i!==null,c=s>=0;a?(nb.copy(n.getClearColor(nb)),n.setClearColor(i,c?s:o)):c&&n.setClearAlpha(s),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),a?n.setClearColor(nb,o):c&&n.setClearAlpha(o)}},Ks=-1,In=class extends Ut{constructor(n,e=Ks,t=Ks,A=1){super(),this.resizable=n,this.base=new G(1,1),this.preferred=new G(e,t),this.target=this.preferred,this.s=A}get width(){let{base:n,preferred:e,scale:t}=this,A;return e.width!==Ks?A=e.width:e.height!==Ks?A=Math.round(e.height*(n.width/Math.max(n.height,1))):A=Math.round(n.width*t),A}set width(n){this.preferredWidth=n}get height(){let{base:n,preferred:e,scale:t}=this,A;return e.height!==Ks?A=e.height:e.width!==Ks?A=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):A=Math.round(n.height*t),A}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferred.setScalar(Ks),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.base.width}set baseWidth(n){this.base.width!==n&&(this.base.width=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}getBaseWidth(){return this.base.width}setBaseWidth(n){this.base.width!==n&&(this.base.width=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}get baseHeight(){return this.base.height}set baseHeight(n){this.base.height!==n&&(this.base.height=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.base.width!==n||this.base.height!==e)&&(this.base.set(n,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}get preferredWidth(){return this.preferred.width}set preferredWidth(n){this.preferred.width!==n&&(this.preferred.width=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferred.height}set preferredHeight(n){this.preferred.height!==n&&(this.preferred.height=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferred.width!==n||this.preferred.height!==e)&&(this.preferred.set(n,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}copy(n){this.base.set(n.getBaseWidth(),n.getBaseHeight()),this.preferred.set(n.getPreferredWidth(),n.getPreferredHeight()),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height)}static get AUTO_SIZE(){return Ks}},rb=!1,eD=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Rn:t=this.materialsFlatShadedDoubleSide;break;case DA:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Rn:t=this.materialsDoubleSide;break;case DA:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){let e=this.materials=[n.clone(),n.clone(),n.clone()];for(let t of e)t.uniforms=Object.assign({},n.uniforms),t.side=kr;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{let A=t.clone();return A.uniforms=Object.assign({},n.uniforms),A.side=DA,A}),this.materialsDoubleSide=e.map(t=>{let A=t.clone();return A.uniforms=Object.assign({},n.uniforms),A.side=Rn,A}),this.materialsFlatShaded=e.map(t=>{let A=t.clone();return A.uniforms=Object.assign({},n.uniforms),A.flatShading=!0,A}),this.materialsFlatShadedBackSide=e.map(t=>{let A=t.clone();return A.uniforms=Object.assign({},n.uniforms),A.flatShading=!0,A.side=DA,A}),this.materialsFlatShadedDoubleSide=e.map(t=>{let A=t.clone();return A.uniforms=Object.assign({},n.uniforms),A.flatShading=!0,A.side=Rn,A})}}render(n,e,t){let A=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,rb){let r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(let i of r)i[0].material=i[1];this.meshCount!==r.size&&r.clear()}else{let r=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=r}n.shadowMap.enabled=A}disposeMaterials(){if(this.material!==null){let n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(let e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return rb}static set workaroundEnabled(n){rb=n}},kW=class extends On{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.clearPass=new ih,this.overrideMaterialManager=t===null?null:new eD(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){let n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){let e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new eD(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,A,r){let i=this.scene,s=this.camera,o=this.selection,a=s.layers.mask,c=i.background,l=n.shadowMap.autoUpdate,u=this.renderToScreen?null:e;o!==null&&s.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(i.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(u),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,i,s):n.render(i,s),s.layers.mask=a,i.background=c,n.shadowMap.autoUpdate=l}},cb=class extends On{constructor(n,e,{resolutionScale:t=1,width:A=In.AUTO_SIZE,height:r=In.AUTO_SIZE,renderTarget:i}={}){super("DepthPass"),this.needsSwap=!1,this.renderPass=new kW(n,e,new du({depthPacking:jy}));let s=this.renderPass;s.skipShadowMapUpdate=!0,s.ignoreBackground=!0;let o=s.getClearPass();o.overrideClearColor=new Le(16777215),o.overrideClearAlpha=1,this.renderTarget=i,this.renderTarget===void 0&&(this.renderTarget=new ht(1,1,{minFilter:Ft,magFilter:Ft,stencilBuffer:!1}),this.renderTarget.texture.name="DepthPass.Target");let a=this.resolution=new In(this,A,r,t);a.addEventListener("change",c=>this.setSize(a.baseWidth,a.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,A,r){let i=this.renderToScreen?null:this.renderTarget;this.renderPass.render(n,i)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}};var Pwe=new Float32Array([255/256/256**3,255/256/256**2,255/256/256,255/256]);var ut={SKIP:0,ADD:1,ALPHA:2,AVERAGE:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,EXCLUSION:8,LIGHTEN:9,MULTIPLY:10,DIVIDE:11,NEGATION:12,NORMAL:13,OVERLAY:14,REFLECT:15,SCREEN:16,SOFT_LIGHT:17,SUBTRACT:18},UW="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x+y,1.0)*opacity+x*(1.0-opacity);}",VW="vec3 blend(const in vec3 x,const in vec3 y,const in float opacity){return y*opacity+x*(1.0-opacity);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){float a=min(y.a,opacity);return vec4(blend(x.rgb,y.rgb,a),max(x.a,a));}",zW="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y)*0.5*opacity+x*(1.0-opacity);}",HW="float blend(const in float x,const in float y){return(y==0.0)? y : max(1.0-(1.0-x)/y,0.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}",WW="float blend(const in float x,const in float y){return(y==1.0)? y : min(x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}",jW="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x,y)*opacity+x*(1.0-opacity);}",YW="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return abs(x-y)*opacity+x*(1.0-opacity);}",qW="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y-2.0*x*y)*opacity+x*(1.0-opacity);}",XW="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x,y)*opacity+x*(1.0-opacity);}",QW="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return x*y*opacity+x*(1.0-opacity);}",KW="float blend(const in float x,const in float y){return(y>0.0)? min(x/y,1.0): 1.0;}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}",ZW="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-abs(1.0-x-y))*opacity+x*(1.0-opacity);}",JW="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y*opacity+x*(1.0-opacity);}",$W="float blend(const in float x,const in float y){return(x<0.5)?(2.0*x*y):(1.0-2.0*(1.0-x)*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}",ej="float blend(const in float x,const in float y){return(y==1.0)? y : min(x*x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}",tj="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-(1.0-x)*(1.0-y))*opacity+x*(1.0-opacity);}",Aj="float blend(const in float x,const in float y){return(y<0.5)?(2.0*x*y+x*x*(1.0-2.0*y)):(sqrt(x)*(2.0*y-1.0)+2.0*x*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}",nj="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x+y-1.0,0.0)*opacity+x*(1.0-opacity);}",rj=new Map([[ut.SKIP,null],[ut.ADD,UW],[ut.ALPHA,VW],[ut.AVERAGE,zW],[ut.COLOR_BURN,HW],[ut.COLOR_DODGE,WW],[ut.DARKEN,jW],[ut.DIFFERENCE,YW],[ut.EXCLUSION,qW],[ut.LIGHTEN,XW],[ut.MULTIPLY,QW],[ut.DIVIDE,KW],[ut.NEGATION,ZW],[ut.NORMAL,JW],[ut.OVERLAY,$W],[ut.REFLECT,ej],[ut.SCREEN,tj],[ut.SOFT_LIGHT,Aj],[ut.SUBTRACT,nj]]),ij=class extends Ut{constructor(n,e=1){super(),this.f=n,this.opacity=new we(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this.f}set blendFunction(n){this.f=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return rj.get(this.blendFunction)}},mi={NONE:0,DEPTH:1,CONVOLUTION:2};var gi=class extends Ut{constructor(n,e,{attributes:t=mi.NONE,blendFunction:A=ut.SCREEN,defines:r=new Map,uniforms:i=new Map,extensions:s=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=i,this.extensions=s,this.blendMode=new ij(A),this.blendMode.addEventListener("change",a=>this.setChanged())}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=OA){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(let n of Object.keys(this)){let e=this[n];if(e!==null&&typeof e.dispose=="function"){if(e instanceof ln||e===this.renderer)continue;this[n].dispose()}}}};function tD(n,e,t){for(let A of e){let r="$1"+n+A.charAt(0).toUpperCase()+A.slice(1),i=new RegExp("([^\\.])(\\b"+A+"\\b)","g");for(let s of t.entries())s[1]!==null&&t.set(s[0],s[1].replace(i,r))}}function sj(n,e,t,A,r,i,s){let o=new Map([["fragment",e.getFragmentShader()],["vertex",e.getVertexShader()]]),a=o.get("fragment")!==void 0&&/mainImage/.test(o.get("fragment")),c=o.get("fragment")!==void 0&&/mainUv/.test(o.get("fragment")),l=[],u=[],d=!1,h=!1;if(o.get("fragment")===void 0)console.error("Missing fragment shader",e);else if(c&&(s&mi.CONVOLUTION)!==0)console.error("Effects that transform UV coordinates are incompatible with convolution effects",e);else if(!a&&!c)console.error("The fragment shader contains neither a mainImage nor a mainUv function",e);else{let f=/(?:\w+\s+(\w+)\([\w\s,]*\)\s*{[^}]+})/g,p=ab.Section;if(c){let g=`	${n}MainUv(UV);
`;t.set(p.FRAGMENT_MAIN_UV,t.get(p.FRAGMENT_MAIN_UV)+g),d=!0}if(o.get("vertex")!==null&&/mainSupport/.test(o.get("vertex"))){let g=`	${n}MainSupport(`;g+=/mainSupport *\([\w\s]*?uv\s*?\)/.test(o.get("vertex"))?`vUv);
`:`);
`,t.set(p.VERTEX_MAIN_SUPPORT,t.get(p.VERTEX_MAIN_SUPPORT)+g),l=l.concat([...o.get("vertex").matchAll(/(?:varying\s+\w+\s+(\w*))/g)].map(y=>y[1])),u=u.concat(l).concat([...o.get("vertex").matchAll(f)].map(y=>y[1]))}u=u.concat([...o.get("fragment").matchAll(f)].map(g=>g[1])),u=u.concat([...e.defines.keys()].map(g=>g.replace(/\([\w\s,]*\)/g,""))),u=u.concat([...e.uniforms.keys()]),e.uniforms.forEach((g,y)=>i.set(n+y.charAt(0).toUpperCase()+y.slice(1),g)),e.defines.forEach((g,y)=>r.set(n+y.charAt(0).toUpperCase()+y.slice(1),g)),tD(n,u,r),tD(n,u,o);let m=e.blendMode;if(A.set(m.blendFunction,m),a){let g=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/,y=`${n}MainImage(color0, UV, `;(s&mi.DEPTH)!==0&&g.test(o.get("fragment"))&&(y+="depth, ",h=!0),y+=`color1);
	`;let x=n+"BlendOpacity";i.set(x,m.opacity),y+=`color0 = blend${m.blendFunction}(color0, color1, ${x});

	`,t.set(p.FRAGMENT_MAIN_IMAGE,t.get(p.FRAGMENT_MAIN_IMAGE)+y),y=`uniform float ${x};

`,t.set(p.FRAGMENT_HEAD,t.get(p.FRAGMENT_HEAD)+y)}t.set(p.FRAGMENT_HEAD,t.get(p.FRAGMENT_HEAD)+o.get("fragment")+`
`),o.get("vertex")!==null&&t.set(p.VERTEX_HEAD,t.get(p.VERTEX_HEAD)+o.get("vertex")+`
`)}return{varyings:l,transformedUv:d,readDepth:h}}var dg=class extends On{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new ab(null,null,null,n),this.effects=e.sort((t,A)=>A.attributes-t.attributes),this.skipRendering=!1,this.uniformCount=0,this.varyingCount=0,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){let e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}verifyResources(){let n=this.renderer.capabilities,e=Math.min(n.maxFragmentUniforms,n.maxVertexUniforms);this.uniformCount>e&&console.warn("The current rendering context doesn't support more than "+e+" uniforms, but "+this.uniformCount+" were defined"),e=n.maxVaryings,this.varyingCount>e&&console.warn("The current rendering context doesn't support more than "+e+" varyings, but "+this.varyingCount+" were defined")}updateMaterial(){let n=ab.Section,e=new Map([[n.FRAGMENT_HEAD,""],[n.FRAGMENT_MAIN_UV,""],[n.FRAGMENT_MAIN_IMAGE,""],[n.VERTEX_HEAD,""],[n.VERTEX_MAIN_SUPPORT,""]]),t=new Map,A=new Map,r=new Map,i=new Set,s=0,o=0,a=0,c=!1,l=!1;for(let d of this.effects)if(d.blendMode.blendFunction===ut.SKIP)a|=d.getAttributes()&mi.DEPTH;else if((a&d.getAttributes()&mi.CONVOLUTION)!==0)console.error("Convolution effects cannot be merged",d);else{a|=d.getAttributes();let h="e"+s++,f=sj(h,d,e,t,A,r,a);if(o+=f.varyings.length,c=c||f.transformedUv,l=l||f.readDepth,d.extensions!==null)for(let p of d.extensions)i.add(p)}let u=/\bblend\b/g;for(let d of t.values()){let h=d.getShaderCode().replace(u,`blend${d.blendFunction}`);e.set(n.FRAGMENT_HEAD,e.get(n.FRAGMENT_HEAD)+h+`
`)}if((a&mi.DEPTH)!==0){if(l){let d=`float depth = readDepth(UV);

	`;e.set(n.FRAGMENT_MAIN_IMAGE,d+e.get(n.FRAGMENT_MAIN_IMAGE))}this.needsDepthTexture=this.getDepthTexture()===null}else this.needsDepthTexture=!1;if(c){let d=`vec2 transformedUv = vUv;
`;e.set(n.FRAGMENT_MAIN_UV,d+e.get(n.FRAGMENT_MAIN_UV)),A.set("UV","transformedUv")}else A.set("UV","vUv");e.forEach((d,h,f)=>f.set(h,d.trim().replace(/^#/,`
#`))),this.uniformCount=r.size,this.varyingCount=o,this.skipRendering=s===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderParts(e).setExtensions(i).setUniforms(r).setDefines(A)}recompile(){this.updateMaterial(),this.verifyResources()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=OA){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(let t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,A,r){for(let i of this.effects)i.update(n,e,A);if(!this.skipRendering||this.renderToScreen){let i=this.fullscreenMaterial;i.inputBuffer=e.texture,i.time+=A,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(let t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(let A of this.effects)A.initialize(n,e,t),A.addEventListener("change",r=>this.handleEvent(r));this.updateMaterial(),this.verifyResources(),t!==void 0&&t!==Gt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(let n of this.effects)n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}},oj=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],sD=class extends On{constructor({resolutionScale:n=.5,width:e=In.AUTO_SIZE,height:t=In.AUTO_SIZE,kernelSize:A=ub.LARGE}={}){super("KawaseBlurPass"),this.renderTargetA=new ht(1,1,{minFilter:it,magFilter:it,stencilBuffer:!1,depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";let r=this.resolution=new In(this,e,t,n);r.addEventListener("change",i=>this.setSize(r.baseWidth,r.baseHeight)),this.blurMaterial=new $2,this.ditheredBlurMaterial=new $2,this.ditheredBlurMaterial.uniforms.scale=this.blurMaterial.uniforms.scale,this.ditheredBlurMaterial.dithering=!0,this.dithering=!1,this.kernelSize=A}getResolution(){return this.resolution}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,A,r){let i=this.scene,s=this.camera,o=this.renderTargetA,a=this.renderTargetB,c=oj[this.kernelSize],l=this.blurMaterial,u=e,d,h;for(this.fullscreenMaterial=l,d=0,h=c.length-1;d<h;++d){let f=(d&1)===0?o:a;l.kernel=c[d],l.inputBuffer=u.texture,n.setRenderTarget(f),n.render(i,s),u=f}this.dithering&&(l=this.ditheredBlurMaterial,this.fullscreenMaterial=l),l.kernel=c[d],l.inputBuffer=u.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(i,s)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e);let A=t.width,r=t.height;this.renderTargetA.setSize(A,r),this.renderTargetB.setSize(A,r),this.blurMaterial.setSize(A,r),this.ditheredBlurMaterial.setSize(A,r)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==Gt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.ditheredBlurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n.outputEncoding===qe&&(this.renderTargetA.texture.encoding=qe,this.renderTargetB.texture.encoding=qe))}static get AUTO_SIZE(){return In.AUTO_SIZE}};var aj=class extends On{constructor({width:n=In.AUTO_SIZE,height:e=In.AUTO_SIZE,renderTarget:t,luminanceRange:A,colorOutput:r}={}){super("LuminancePass"),this.fullscreenMaterial=new IW(r,A),this.needsSwap=!1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new ht(1,1,{minFilter:it,magFilter:it,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target",this.renderTarget.texture.generateMipmaps=!1);let i=this.resolution=new In(this,n,e);i.addEventListener("change",s=>this.setSize(i.baseWidth,i.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,A,r){let i=this.fullscreenMaterial;i.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==Gt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},lj=class extends On{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new ih(!1,!1,!0),this.inverse=!1}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,A,r){let i=n.getContext(),s=n.state.buffers,o=this.scene,a=this.camera,c=this.clearPass,l=this.inverted?0:1,u=1-l;s.color.setMask(!1),s.depth.setMask(!1),s.color.setLocked(!0),s.depth.setLocked(!0),s.stencil.setTest(!0),s.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.stencil.setFunc(i.ALWAYS,l,4294967295),s.stencil.setClear(u),s.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(n,null):(c.render(n,e),c.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,a)):(n.setRenderTarget(e),n.render(o,a),n.setRenderTarget(t),n.render(o,a)),s.color.setLocked(!1),s.depth.setLocked(!1),s.stencil.setLocked(!1),s.stencil.setFunc(i.EQUAL,1,4294967295),s.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.stencil.setLocked(!0)}};var Zs=class extends On{constructor(n,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=n,this.inputBufferUniform=null,this.setInput(e)}setInput(n){if(this.inputBufferUniform=null,this.fullscreenMaterial!==null){let e=this.fullscreenMaterial.uniforms;e!==void 0&&e[n]!==void 0&&(this.inputBufferUniform=e[n])}}render(n,e,t,A,r){this.inputBufferUniform!==null&&e!==null&&(this.inputBufferUniform.value=e.texture),n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}initialize(n,e,t){t!==void 0&&t!==Gt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},ib=1/1e3,cj=1e3,uj=class{constructor(){this.previousTime=0,this.currentTime=0,this.delta=0,this.fixedDelta=1e3/60,this.elapsed=0,this.timescale=1,this.fixedDeltaEnabled=!1,this.autoReset=!1}setFixedDeltaEnabled(n){return this.fixedDeltaEnabled=n,this}isAutoResetEnabled(n){return this.autoReset}setAutoResetEnabled(n){return typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this.autoReset=n),this}getDelta(){return this.delta*ib}getFixedDelta(){return this.fixedDelta*ib}setFixedDelta(n){return this.fixedDelta=n*cj,this}getElapsed(){return this.elapsed*ib}getTimescale(){return this.timescale}setTimescale(n){return this.timescale=n,this}update(n){return this.fixedDeltaEnabled?this.delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=n!==void 0?n:performance.now(),this.delta=this.currentTime-this.previousTime),this.delta*=this.timescale,this.elapsed+=this.delta,this}reset(){return this.delta=0,this.elapsed=0,this.currentTime=performance.now(),this}handleEvent(n){document.hidden||(this.currentTime=performance.now())}dispose(){this.setAutoResetEnabled(!1)}},oD=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:A=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,r,A),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Gc,this.depthTexture=null,this.passes=[],this.timer=new uj,this.autoRenderToScreen=!0,this.setRenderer(n)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(n){let e=this.inputBuffer,t=this.multisampling;t>0&&n>0?(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==n&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,n),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){let e=n.getSize(new G),t=n.getContext().getContextAttributes().alpha,A=this.inputBuffer.texture.type;A===Gt&&n.outputEncoding===qe&&(this.inputBuffer.texture.encoding=qe,this.outputBuffer.texture.encoding=qe,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(let r of this.passes)r.initialize(n,t,A)}}replaceRenderer(n,e=!0){let t=this.renderer,A=t.domElement.parentNode;return this.setRenderer(n),e&&A!==null&&(A.removeChild(t.domElement),A.appendChild(n.domElement)),t}createDepthTexture(){let n=this.depthTexture=new ls;return this.inputBuffer.depthTexture=n,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(n.format=ss,n.type=ns):n.type=Mi,n}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(let n of this.passes)n.setDepthTexture(null)}}createBuffer(n,e,t,A){let r=this.renderer,i=r===null?new G:r.getDrawingBufferSize(new G),s={minFilter:it,magFilter:it,stencilBuffer:e,depthBuffer:n,type:t},o;return A>0?(o=Number(go.replace(/\D+/g,""))<138?new uf(i.width,i.height,s):new ht(i.width,i.height,s),o.ignoreDepthForMultisampleCopy=!1,o.samples=A):o=new ht(i.width,i.height,s),t===Gt&&r!==null&&r.outputEncoding===qe&&(o.texture.encoding=qe),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}addPass(n,e){let t=this.passes,A=this.renderer,r=A.getDrawingBufferSize(new G),i=A.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;if(n.setRenderer(A),n.setSize(r.width,r.height),n.initialize(A,i,s),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){let o=this.createDepthTexture();for(n of t)n.setDepthTexture(o)}else n.setDepthTexture(this.depthTexture)}removePass(n){let e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){let i=(o,a)=>o||a.needsDepthTexture;e.reduce(i,!1)||(n.getDepthTexture()===this.depthTexture&&n.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){let n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){let e=this.renderer,t=this.copyPass,A=this.inputBuffer,r=this.outputBuffer,i=!1,s,o,a;n===void 0&&(n=this.timer.update().getDelta());for(let c of this.passes)c.enabled&&(c.render(e,A,r,n,i),c.needsSwap&&(i&&(t.renderToScreen=c.renderToScreen,s=e.getContext(),o=e.state.buffers.stencil,o.setFunc(s.NOTEQUAL,1,4294967295),t.render(e,A,r,n,i),o.setFunc(s.EQUAL,1,4294967295)),a=A,A=r,r=a),c instanceof lj?i=!0:c instanceof GW&&(i=!1))}setSize(n,e,t){let A=this.renderer;if(n===void 0||e===void 0){let i=A.getSize(new G);n=i.width,e=i.height}A.setSize(n,e,t);let r=A.getDrawingBufferSize(new G);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height);for(let i of this.passes)i.setSize(r.width,r.height)}reset(){let n=this.timer.isAutoResetEnabled();this.dispose(),this.autoRenderToScreen=!0,this.timer.setAutoResetEnabled(n)}dispose(){for(let n of this.passes)n.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose()}};var ub={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5};var dj=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=clamp(texture2D(map,uv)*intensity,0.0,1.0);}`,aD=class extends gi{constructor({blendFunction:n=ut.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:t=.025,resolutionScale:A=.5,intensity:r=1,width:i=In.AUTO_SIZE,height:s=In.AUTO_SIZE,kernelSize:o=ub.LARGE}={}){super("BloomEffect",dj,{blendFunction:n,uniforms:new Map([["map",new we(null)],["intensity",new we(r)]])}),this.renderTarget=new ht(1,1,{minFilter:it,magFilter:it,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.renderTarget.texture.generateMipmaps=!1,this.uniforms.get("map").value=this.renderTarget.texture,this.luminancePass=new aj({renderTarget:this.renderTarget,colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothingFactor=t,this.blurPass=new sD({resolutionScale:A,width:i,height:s,kernelSize:o});let a=this.blurPass.getResolution();a.addEventListener("change",c=>this.setSize(a.baseWidth,a.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}get resolution(){return this.blurPass.resolution}getResolution(){return this.blurPass.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){let A=this.renderTarget;this.luminancePass.enabled?(this.luminancePass.render(n,e,A),this.blurPass.render(n,A,A)):this.blurPass.render(n,e,A)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.luminancePass.resolution.copy(t)}initialize(n,e,t){this.blurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,n.outputEncoding===qe&&(this.renderTarget.texture.encoding=qe))}};var hj="uniform float brightness;uniform float contrast;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 color=inputColor.rgb+vec3(brightness-0.5);if(contrast>0.0){color/=vec3(1.0-contrast);}else{color*=vec3(1.0+contrast);}outputColor=vec4(min(color+vec3(0.5),1.0),inputColor.a);}",lD=class extends gi{constructor({blendFunction:n=ut.NORMAL,brightness:e=0,contrast:t=0}={}){super("BrightnessContrastEffect",hj,{blendFunction:n,uniforms:new Map([["brightness",new we(e)],["contrast",new we(t)]])})}get brightness(){return this.uniforms.get("brightness").value}set brightness(n){this.uniforms.get("brightness").value=n}getBrightness(n){return this.brightness}setBrightness(n){this.brightness=n}get contrast(){return this.uniforms.get("contrast").value}set contrast(n){this.uniforms.get("contrast").value=n}getContrast(n){return this.contrast}setContrast(n){this.contrast=n}},fj="void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=vec4(vec3(average(inputColor.rgb)),inputColor.a);}",cD=class extends gi{constructor(n=ut.NORMAL){super("ColorAverageEffect",fj,{blendFunction:n})}};var pj="varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=texture2D(inputBuffer,vUvR).ra;vec2 ba=texture2D(inputBuffer,vUvB).ba;outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}",mj="uniform vec2 offset;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vUvR=uv+shift;vUvB=uv-shift;}",uD=class extends gi{constructor({blendFunction:n=ut.NORMAL,offset:e=new G(.001,5e-4)}={}){super("ChromaticAberrationEffect",pj,{vertexShader:mj,blendFunction:n,attributes:mi.CONVOLUTION,uniforms:new Map([["offset",new we(e)]])})}get offset(){return this.uniforms.get("offset").value}set offset(n){this.uniforms.get("offset").value=n}getOffset(){return this.offset}setOffset(n){this.offset=n}};var gj=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D nearColorBuffer;uniform mediump sampler2D farColorBuffer;
#else
uniform lowp sampler2D nearColorBuffer;uniform lowp sampler2D farColorBuffer;
#endif
uniform lowp sampler2D nearCoCBuffer;uniform float scale;void mainImage(const in vec4 inputColor,const in vec2 uv,const in float depth,out vec4 outputColor){vec4 colorNear=texture2D(nearColorBuffer,uv);vec4 colorFar=texture2D(farColorBuffer,uv);float CoCNear=texture2D(nearCoCBuffer,uv).r;CoCNear=min(CoCNear*scale,1.0);vec4 result=inputColor*(1.0-colorFar.a)+colorFar;result=mix(result,colorNear,CoCNear);outputColor=result;}`,dD=class extends gi{constructor(n,{blendFunction:e=ut.NORMAL,worldFocusDistance:t,worldFocusRange:A,focusDistance:r=0,focalLength:i=.1,focusRange:s=i,bokehScale:o=1,width:a=In.AUTO_SIZE,height:c=In.AUTO_SIZE}={}){super("DepthOfFieldEffect",gj,{blendFunction:e,attributes:mi.DEPTH,uniforms:new Map([["nearColorBuffer",new we(null)],["farColorBuffer",new we(null)],["nearCoCBuffer",new we(null)],["scale",new we(1)]])}),this.camera=n,this.renderTarget=new ht(1,1,{minFilter:it,magFilter:it,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="DoF.Intermediate",this.renderTarget.texture.generateMipmaps=!1,this.renderTargetMasked=this.renderTarget.clone(),this.renderTargetMasked.texture.name="DoF.Masked.Far",this.renderTargetNear=this.renderTarget.clone(),this.renderTargetNear.texture.name="DoF.Bokeh.Near",this.uniforms.get("nearColorBuffer").value=this.renderTargetNear.texture,this.renderTargetFar=this.renderTarget.clone(),this.renderTargetFar.texture.name="DoF.Bokeh.Far",this.uniforms.get("farColorBuffer").value=this.renderTargetFar.texture,this.renderTargetCoC=this.renderTarget.clone(),this.renderTargetCoC.texture.name="DoF.CoC",this.renderTargetCoCBlurred=this.renderTargetCoC.clone(),this.renderTargetCoCBlurred.texture.name="DoF.CoC.Blurred",this.uniforms.get("nearCoCBuffer").value=this.renderTargetCoCBlurred.texture,this.cocPass=new Zs(new vW(n));let l=this.cocMaterial;l.focusDistance=r,l.focusRange=s,t!==void 0&&(l.worldFocusDistance=t),A!==void 0&&(l.worldFocusRange=A),this.blurPass=new sD({kernelSize:ub.MEDIUM,width:a,height:c});let u=this.blurPass.getResolution();u.addEventListener("change",h=>this.setSize(u.getBaseWidth(),u.getBaseHeight())),this.maskPass=new Zs(new LW(this.renderTargetCoC.texture));let d=this.maskPass.fullscreenMaterial;d.maskFunction=iD.MULTIPLY,d.colorChannel=rD.GREEN,this.bokehNearBasePass=new Zs(new lg(!1,!0)),this.bokehNearBasePass.fullscreenMaterial.cocBuffer=this.renderTargetCoCBlurred.texture,this.bokehNearFillPass=new Zs(new lg(!0,!0)),this.bokehNearFillPass.fullscreenMaterial.cocBuffer=this.renderTargetCoCBlurred.texture,this.bokehFarBasePass=new Zs(new lg(!1,!1)),this.bokehFarBasePass.fullscreenMaterial.cocBuffer=this.renderTargetCoC.texture,this.bokehFarFillPass=new Zs(new lg(!0,!1)),this.bokehFarFillPass.fullscreenMaterial.cocBuffer=this.renderTargetCoC.texture,this.target=null,this.bokehScale=o}get cocTexture(){return this.renderTargetCoC.texture}get cocMaterial(){return this.cocPass.fullscreenMaterial}get circleOfConfusionMaterial(){return this.cocMaterial}getCircleOfConfusionMaterial(){return this.circleOfConfusionMaterial}getBlurPass(){return this.blurPass}get resolution(){return this.blurPass.getResolution()}getResolution(){return this.blurPass.getResolution()}get bokehScale(){return this.uniforms.get("scale").value}set bokehScale(n){let e=[this.bokehNearBasePass,this.bokehNearFillPass,this.bokehFarBasePass,this.bokehFarFillPass];for(let t of e)t.fullscreenMaterial.setScale(n);this.maskPass.fullscreenMaterial.setStrength(n),this.uniforms.get("scale").value=n}getBokehScale(){return this.bokehScale}setBokehScale(n){this.bokehScale=n}getTarget(){return this.target}setTarget(n){this.target=n}calculateFocusDistance(n){let e=this.camera,t=e.position.distanceTo(n);return ob(-t,e.near,e.far)}setDepthTexture(n,e=OA){this.circleOfConfusionMaterial.depthBuffer=n,this.circleOfConfusionMaterial.depthPacking=e}update(n,e,t){let A=this.renderTarget,r=this.renderTargetCoC,i=this.renderTargetCoCBlurred,s=this.renderTargetMasked;if(this.target!==null){let o=this.calculateFocusDistance(this.target);this.circleOfConfusionMaterial.focusDistance=o}this.cocPass.render(n,null,r),this.blurPass.render(n,r,i),this.maskPass.render(n,e,s),this.bokehFarBasePass.render(n,s,A),this.bokehFarFillPass.render(n,A,this.renderTargetFar),this.bokehNearBasePass.render(n,e,A),this.bokehNearFillPass.render(n,A,this.renderTargetNear)}setSize(n,e){let t=this.resolution;t.setBaseSize(n,e);let A=t.width,r=t.height,i=[this.cocPass,this.blurPass,this.maskPass,this.bokehNearBasePass,this.bokehNearFillPass,this.bokehFarBasePass,this.bokehFarFillPass];i.push(this.renderTargetCoC,this.renderTargetMasked),i.forEach(o=>o.setSize(n,e)),i=[this.renderTarget,this.renderTargetNear,this.renderTargetFar,this.renderTargetCoCBlurred],i.forEach(o=>o.setSize(A,r)),[this.bokehNearBasePass,this.bokehNearFillPass,this.bokehFarBasePass,this.bokehFarFillPass].forEach(o=>o.fullscreenMaterial.setSize(A,r))}initialize(n,e,t){[this.cocPass,this.maskPass,this.bokehNearBasePass,this.bokehNearFillPass,this.bokehFarBasePass,this.bokehFarFillPass].forEach(r=>r.initialize(n,e,t)),this.blurPass.initialize(n,e,Gt),t!==void 0&&(this.renderTarget.texture.type=t,this.renderTargetNear.texture.type=t,this.renderTargetFar.texture.type=t,this.renderTargetMasked.texture.type=t,n.outputEncoding===qe&&(this.renderTarget.texture.encoding=qe,this.renderTargetNear.texture.encoding=qe,this.renderTargetFar.texture.encoding=qe,this.renderTargetMasked.texture.encoding=qe))}};var Uwe=new S,Vwe=new de;var yj="uniform vec3 hue;uniform float saturation;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 color=vec3(dot(inputColor.rgb,hue.xyz),dot(inputColor.rgb,hue.zxy),dot(inputColor.rgb,hue.yzx));float average=(color.r+color.g+color.b)/3.0;vec3 diff=average-color;if(saturation>0.0){color+=diff*(1.0-1.0/(1.001-saturation));}else{color+=diff*-saturation;}outputColor=vec4(min(color,1.0),inputColor.a);}",hD=class extends gi{constructor({blendFunction:n=ut.NORMAL,hue:e=0,saturation:t=0}={}){super("HueSaturationEffect",yj,{blendFunction:n,uniforms:new Map([["hue",new we(new S)],["saturation",new we(t)]])}),this.hue=e}get saturation(){return this.uniforms.get("saturation").value}set saturation(n){this.uniforms.get("saturation").value=n}getSaturation(){return this.saturation}setSaturation(n){this.saturation=n}get hue(){let n=this.uniforms.get("hue").value;return Math.acos((n.x*3-1)/2)}set hue(n){let e=Math.sin(n),t=Math.cos(n);this.uniforms.get("hue").value.set((2*t+1)/3,(-Math.sqrt(3)*e-t+1)/3,(Math.sqrt(3)*e-t+1)/3)}getHue(){return this.hue}setHue(n){this.hue=n}};var Wwe=new Le;var vj=`void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 noise=vec3(rand(uv*time));
#ifdef PREMULTIPLY
outputColor=vec4(min(inputColor.rgb*noise,vec3(1.0)),inputColor.a);
#else
outputColor=vec4(noise,inputColor.a);
#endif
}`,fD=class extends gi{constructor({blendFunction:n=ut.SCREEN,premultiply:e=!1}={}){super("NoiseEffect",vj,{blendFunction:n}),this.premultiply=e}get premultiply(){return this.defines.has("PREMULTIPLY")}set premultiply(n){this.premultiply!==n&&(n?this.defines.set("PREMULTIPLY","1"):this.defines.delete("PREMULTIPLY"),this.setChanged())}isPremultiplied(){return this.premultiply}setPremultiplied(n){this.premultiply=n}};var xj="uniform bool active;uniform vec2 d;void mainUv(inout vec2 uv){if(active){uv=vec2(d.x*(floor(uv.x/d.x)+0.5),d.y*(floor(uv.y/d.y)+0.5));}}",pD=class extends gi{constructor(n=30){super("PixelationEffect",xj,{uniforms:new Map([["active",new we(!1)],["d",new we(new G)]])}),this.resolution=new G,this.d=0,this.granularity=n}get granularity(){return this.d}set granularity(n){let e=Math.floor(n);e%2>0&&(e+=1),this.d=e,this.uniforms.get("active").value=e>0,this.setSize(this.resolution.width,this.resolution.height)}getGranularity(){return this.granularity}setGranularity(n){this.granularity=n}setSize(n,e){this.resolution.set(n,e),this.uniforms.get("d").value.setScalar(this.d).divide(this.resolution)}};var qwe=Math.PI*.5,Xwe=new S,Qwe=new S;var AD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",nD="data:image/png;base64,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",bj="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",wj="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",Zo={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},mD=class extends gi{constructor({preset:n=Zo.MEDIUM,edgeDetectionMode:e=ug.COLOR,predicationMode:t=lb.DISABLED}={}){super("SMAAEffect",bj,{vertexShader:wj,blendFunction:ut.NORMAL,attributes:mi.CONVOLUTION|mi.DEPTH,uniforms:new Map([["weightMap",new we(null)]])});let A,r;arguments.length>1&&(A=arguments[0],r=arguments[1],arguments.length>2&&(n=arguments[2]),arguments.length>3&&(e=arguments[3])),this.renderTargetEdges=new ht(1,1,{minFilter:it,stencilBuffer:!1,depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new ih(!0,!1,!1),this.clearPass.overrideClearColor=new Le(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new Zs(new EW),this.edgeDetectionMaterial.edgeDetectionMode=e,this.edgeDetectionMaterial.predicationMode=t,this.weightsPass=new Zs(new BW);let i=new yu;i.onLoad=()=>{let s=new Wt(A);s.name="SMAA.Search",s.magFilter=Ft,s.minFilter=Ft,s.generateMipmaps=!1,s.needsUpdate=!0,s.flipY=!0,this.weightsMaterial.searchTexture=s;let o=new Wt(r);o.name="SMAA.Area",o.magFilter=it,o.minFilter=it,o.generateMipmaps=!1,o.needsUpdate=!0,o.flipY=!1,this.weightsMaterial.areaTexture=o,this.dispatchEvent({type:"load"})},i.itemStart("search"),i.itemStart("area"),A!==void 0&&r!==void 0?(i.itemEnd("search"),i.itemEnd("area")):typeof Image<"u"&&(A=new Image,r=new Image,A.addEventListener("load",()=>i.itemEnd("search")),r.addEventListener("load",()=>i.itemEnd("area")),A.src=AD,r.src=nD),this.applyPreset(n)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(n){this.edgeDetectionMaterial.edgeDetectionThreshold=n}setOrthogonalSearchSteps(n){this.weightsMaterial.orthogonalSearchSteps=n}applyPreset(n){let e=this.edgeDetectionMaterial,t=this.weightsMaterial;switch(n){case Zo.LOW:e.edgeDetectionThreshold=.15,t.orthogonalSearchSteps=4,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Zo.MEDIUM:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=8,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Zo.HIGH:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=16,t.diagonalSearchSteps=8,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break;case Zo.ULTRA:e.edgeDetectionThreshold=.05,t.orthogonalSearchSteps=32,t.diagonalSearchSteps=16,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break}}setDepthTexture(n,e=OA){this.edgeDetectionMaterial.depthBuffer=n,this.edgeDetectionMaterial.depthPacking=e}update(n,e,t){this.clearPass.render(n,this.renderTargetEdges),this.edgeDetectionPass.render(n,e,this.renderTargetEdges),this.weightsPass.render(n,this.renderTargetEdges,this.renderTargetWeights)}setSize(n,e){this.edgeDetectionMaterial.setSize(n,e),this.weightsMaterial.setSize(n,e),this.renderTargetEdges.setSize(n,e),this.renderTargetWeights.setSize(n,e)}dispose(){let{searchTexture:n,areaTexture:e}=this.weightsMaterial;n!==null&&e!==null&&(n.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return AD}static get areaImageDataURL(){return nD}};var Sj=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,cg={DEFAULT:0,ESKIL:1},gD=class extends gi{constructor({blendFunction:n=ut.NORMAL,technique:e=cg.DEFAULT,eskil:t=!1,offset:A=.5,darkness:r=.5}={}){super("VignetteEffect",Sj,{blendFunction:n,defines:new Map([["VIGNETTE_TECHNIQUE",e.toFixed(0)]]),uniforms:new Map([["offset",new we(A)],["darkness",new we(r)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(n){this.technique!==n&&(this.defines.set("VIGNETTE_TECHNIQUE",n.toFixed(0)),this.setChanged())}get eskil(){return this.technique===cg.ESKIL}set eskil(n){this.technique=n?cg.ESKIL:cg.DEFAULT}getTechnique(){return this.technique}setTechnique(n){this.technique=n}get offset(){return this.uniforms.get("offset").value}set offset(n){this.uniforms.get("offset").value=n}getOffset(){return this.offset}setOffset(n){this.offset=n}get darkness(){return this.uniforms.get("darkness").value}set darkness(n){this.uniforms.get("darkness").value=n}getDarkness(){return this.darkness}setDarkness(n){this.darkness=n}},Jwe=[new Float32Array(3),new Float32Array(3)],$we=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],eSe=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];var tSe=[new Float32Array(2),new Float32Array(2)];var ASe=new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),nSe=[new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125])],rSe=[new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4])],iSe=[new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3])];var sSe=new Map([[An(0,0,0,0),new Float32Array([0,0,0,0])],[An(0,0,0,1),new Float32Array([0,0,0,1])],[An(0,0,1,0),new Float32Array([0,0,1,0])],[An(0,0,1,1),new Float32Array([0,0,1,1])],[An(0,1,0,0),new Float32Array([0,1,0,0])],[An(0,1,0,1),new Float32Array([0,1,0,1])],[An(0,1,1,0),new Float32Array([0,1,1,0])],[An(0,1,1,1),new Float32Array([0,1,1,1])],[An(1,0,0,0),new Float32Array([1,0,0,0])],[An(1,0,0,1),new Float32Array([1,0,0,1])],[An(1,0,1,0),new Float32Array([1,0,1,0])],[An(1,0,1,1),new Float32Array([1,0,1,1])],[An(1,1,0,0),new Float32Array([1,1,0,0])],[An(1,1,0,1),new Float32Array([1,1,0,1])],[An(1,1,1,0),new Float32Array([1,1,1,0])],[An(1,1,1,1),new Float32Array([1,1,1,1])]]);function sb(n,e,t){return n+(e-n)*t}function An(n,e,t,A){let r=sb(n,e,.75),i=sb(t,A,1-.25);return sb(r,i,1-.125)}var aA=class{constructor(e,t){this.enabled=!1;this.effect=new e(t),Object.defineProperty(this,"opacity",{enumerable:!0,set(A){this.effect.blendMode.opacity.value=A},get(){return this.effect.blendMode.opacity.value}}),Object.defineProperty(this,"blendFunction",{enumerable:!0,set(A){this.effect.blendMode.setBlendFunction(Number(A))},get(){return this.effect.blendMode.blendFunction}}),this.blendFunction=ut.NORMAL}};var kc=class extends aA{constructor(){super(aD),this.blendFunction=ut.SCREEN}set intensity(e){this.effect.intensity=e}get intensity(){return this.effect.intensity}set luminanceThreshold(e){this.effect.luminanceMaterial.threshold=e}get luminanceThreshold(){return this.effect.luminanceMaterial.threshold}set luminanceSmoothing(e){this.effect.luminanceMaterial.smoothing=e}get luminanceSmoothing(){return this.effect.luminanceMaterial.smoothing}set blurScale(e){this.effect.blurPass.scale=e}get blurScale(){return this.effect.blurPass.scale}set kernelSize(e){this.effect.blurPass.kernelSize=e}get kernelSize(){return this.effect.blurPass.kernelSize}};var Uc=class extends aA{constructor(){super(lD)}set contrast(e){this.effect.uniforms.get("contrast").value=e}get contrast(){return this.effect.uniforms.get("contrast").value}set brightness(e){this.effect.uniforms.get("brightness").value=e}get brightness(){return this.effect.uniforms.get("brightness").value}};var Vc=class extends aA{constructor(){super(uD),this.effect.offset=new G(.01,.01)}set offset(e){this.effect.offset.set(e[0]/1e3,e[1]/1e3)}get offset(){return[this.effect.offset.x*1e3,this.effect.offset.y*1e3]}};var zc=class extends aA{constructor(){super(cD)}};var Hc=class extends aA{constructor(){super(hD);this._hue=0}set hue(t){this._hue=t,this.effect.setHue(t)}get hue(){return this._hue}set saturation(t){this.effect.uniforms.get("saturation").value=t}get saturation(){return this.effect.uniforms.get("saturation").value}};var Wc=class extends aA{constructor(){super(fD),this.blendFunction=ut.OVERLAY}};var jc=class extends aA{constructor(){super(gD)}get eskil(){return this.effect.eskil}set eskil(e){this.effect.eskil=e}get darkness(){return this.effect.uniforms.get("darkness").value}set darkness(e){this.effect.uniforms.get("darkness").value=e}get offset(){return this.effect.uniforms.get("offset").value}set offset(e){this.effect.uniforms.get("offset").value=e}};var Yc=class extends aA{constructor(e){super(dD,e)}set focalLength(e){this.effect.circleOfConfusionMaterial.uniforms.focalLength.value=e}get focalLength(){return this.effect.circleOfConfusionMaterial.uniforms.focalLength.value}set focusDistance(e){this.effect.circleOfConfusionMaterial.uniforms.focusDistance.value=e}get focusDistance(){return this.effect.circleOfConfusionMaterial.uniforms.focusDistance.value}get bokehScale(){return this.effect.bokehScale}set bokehScale(e){this.effect.bokehScale=e}};var qc=class extends aA{constructor(){super(pD)}get granularity(){return this.effect.getGranularity()}set granularity(e){this.effect.setGranularity(e)}};var hg=class extends On{constructor(t,A,r){super("TransmissionPass",t,A);this.copyPass=new Gc(r.transmissionRenderTarget),this.depthPass=new cb(t,A,{renderTarget:r.transmissionDepthTarget}),this.needsSwap=!1}updatePasses(t){this.copyPass=new Gc(t.transmissionRenderTarget),this.depthPass=new cb(this.scene,this.camera,{renderTarget:t.transmissionDepthTarget})}setCamera(t){this.camera=t}setScene(t){this.scene=t}render(t,A,r){let i=this.camera.layers.mask;this.copyPass.render(t,A,r),this.camera.layers.disable(3),this.depthPass.render(t,A,r),t.shadowMap.needsUpdate=!1,t.shadowMap.autoUpdate=!1;let s=this.renderToScreen?null:A;this.camera.layers.set(3),t.setRenderTarget(s),t.render(this.scene,this.camera),this.camera.layers.mask=i}};var yD=new ln,Mj=new gt({transparent:!0,vertexShader:`
        void main() {
            gl_Position = vec4(0.0);
        }
    `,fragmentShader:`
        void main() {
            gl_FragColor = vec4(0.0);
        }
    `}),Xc=class extends On{constructor(t,A){super("OpaquePass",t??yD,A);this.hasTransmissionPass=!1;this.clear=!0;this.needsSwap=!1,this.originalMaterials=new Map}setCamera(t){this.camera=t}setScene(t){this.scene=t??yD}getScene(){return this.scene}render(t,A){this.originalMaterials.clear(),this.camera.layers.enable(3),this.hasTransmissionPass&&this.scene.traverse(i=>{i.layers.isEnabled(3)&&i instanceof Lt&&(this.originalMaterials.set(i.id,i.material),i.material=Mj)}),this.camera.layers.enable(8),t.shadowMap.needsUpdate=!0,t.shadowMap.autoUpdate=!0;let r=this.renderToScreen?null:A;t.setRenderTarget(r),this.clear&&t.clear(),t.render(this.scene,this.camera),this.hasTransmissionPass&&this.originalMaterials.forEach((i,s)=>{let o=this.scene.getObjectById(s);o&&(o.material=i)})}};function vD(n,e){return e&&e.enabled&&n.push(e.effect),n}var sh=class extends Ut{constructor(t){super();this.postprocessingState=Do.defaultData;this._scene=new ln;this._camera=new VA;this.effects=new Map;this._renderToScreen=!0;this.clock=new rf,this.renderer=t,this.debug=!1,this.effects.set("bloom",new kc),this.effects.set("chromaticAberration",new Vc),this.effects.set("vignette",new jc),this.effects.set("noise",new Wc),this.effects.set("colorAverage",new zc),this.effects.set("hueSaturation",new Hc),this.effects.set("brightnessContrast",new Uc),this.effects.set("depthOfField",new Yc),this.effects.set("pixelation",new qc),this.effectComposer=new oD(this.renderer),this.opaquePass=new Xc(this.scene,this.camera),this.transmissionPass=new hg(this.scene,this.camera,this.renderer),this.helperPass=new Xc(void 0,this.camera),this.helperPass.hasTransmissionPass=!1,this.helperPass.clear=!1,this.helperClearPass=new ih(!1,!0,!1),this.helperPassOnTop=new Xc(void 0,this.camera),this.helperPassOnTop.hasTransmissionPass=!1,this.helperPassOnTop.clear=!1,this._initCopyPass(),this._initSmaa(),this._initPasses()}get scene(){return this._scene}set scene(t){this._scene=t,this.opaquePass.setScene(t),this.transmissionPass.setScene(t)}set sceneHelpers(t){this.helperPass.setScene(t)}get sceneHelpers(){return this.helperPass.getScene()}set sceneHelpersOnTop(t){this.helperPassOnTop.setScene(t)}get sceneHelpersOnTop(){return this.helperPassOnTop.getScene()}get camera(){return this._camera}set camera(t){this._camera=t,this.opaquePass.setCamera(t),this.transmissionPass.setCamera(t),this.helperPass.setCamera(t),this.helperPassOnTop.setCamera(t)}setTransmissionPassEnabled(t){this.transmissionPass.enabled=t,this.opaquePass.hasTransmissionPass=t}disableHelpers(){this.helperPass.enabled=!1,this.helperClearPass.enabled=!1,this.helperPassOnTop.enabled=!1}enableHelpers(){this.helperPass.enabled=!0,this.helperClearPass.enabled=!0,this.helperPassOnTop.enabled=!0}_initSmaa(){let t=new mD({preset:Zo.ULTRA,edgeDetectionMode:ug.COLOR}),A=()=>{t.removeEventListener("load",A),this.dispatchEvent({type:"smaaloaded"})};t.addEventListener("load",A),t.edgeDetectionMaterial.predicationMode=lb.DEPTH,t.edgeDetectionMaterial.edgeDetectionThreshold=.05,t.edgeDetectionMaterial.predicationThreshold=.002,t.edgeDetectionMaterial.predicationScale=1,this.smaaPass=new dg(this.camera,t)}_initPasses(){if(this.uvEffectPass?.dispose(),this.effectPass?.dispose(),this.effectComposer.removeAllPasses(),this.transmissionPass.updatePasses(this.renderer),this.effectComposer.addPass(this.opaquePass),this.effectComposer.addPass(this.transmissionPass),this.postprocessingState.enabled){let t=[this.effects.get("pixelation")].reduce(vD,[]);t.length>0&&(this.uvEffectPass=new dg(this.camera,...t),this.effectComposer.addPass(this.uvEffectPass));let A=[this.effects.get("chromaticAberration"),this.effects.get("bloom"),this.effects.get("colorAverage"),this.effects.get("hueSaturation"),this.effects.get("brightnessContrast"),this.effects.get("vignette"),this.effects.get("noise")].reduce(vD,[]);A.length>0&&(this.effectPass=new dg(this.camera,...A),this.effectComposer.addPass(this.effectPass))}this.effectComposer.addPass(this.helperPass),this.effectComposer.addPass(this.helperClearPass),this.effectComposer.addPass(this.helperPassOnTop),this.effectComposer.addPass(this.smaaPass)}_initCopyPass(){if(this._savePass)return;let t=new G;this.renderer.getDrawingBufferSize(t),this._rt=new ht(t.x,t.y,{depthBuffer:!1,stencilBuffer:!1,wrapS:ba,wrapT:ba}),this._rt.samples=0,this._savePass=new Gc(this._rt,!1),this._savePass.renderToScreen=!1}get renderToScreen(){return this._renderToScreen}set renderToScreen(t){if(this._renderToScreen===t)return;let A=this.effectComposer;!A||(t===!0?(A.removePass(this._savePass),A.passes[A.passes.length-1].renderToScreen=!0,A.autoRenderToScreen=!0):(A.autoRenderToScreen=!1,A.passes[A.passes.length-1].renderToScreen=!1,this._savePass.renderToScreen=!1,this.postprocessingState.enabled||(this._savePass.needsDepthTexture=!0),A.addPass(this._savePass)),this._renderToScreen=t)}get texture(){return this._rt&&this._rt.texture}get renderTarget(){return this._rt}updatePostprocessing(t){let{enabled:A,...r}=t,i=!1;A!==this.postprocessingState.enabled&&(i=!0);for(let s of Object.entries(r)){let o=s[1],a=this.effects.get(s[0]);if(a){a.enabled!==o.enabled&&(i=!0),a.enabled=o.enabled;for(let[c,l]of Object.entries(o))a[c]=l}}this.postprocessingState=t,i&&this._initPasses()}render(){this.effectComposer.render(this.clock.getDelta())}setScissor(t,A,r,i){t instanceof He?(this.effectComposer.inputBuffer.scissor.set(t.x,t.y,t.z,t.w),this.effectComposer.outputBuffer.scissor.set(t.x,t.y,t.z,t.w)):(this.effectComposer.inputBuffer.scissor.set(t,A,r,i),this.effectComposer.outputBuffer.scissor.set(t,A,r,i));let s=this.renderer.getPixelRatio();this.effectComposer.inputBuffer.scissor.multiplyScalar(s),this.effectComposer.outputBuffer.scissor.multiplyScalar(s),this.renderer.setScissor(t,A,r,i)}setScissorTest(t){this.effectComposer.inputBuffer.scissorTest=t,this.effectComposer.outputBuffer.scissorTest=t,this.renderer.setScissorTest(t)}setViewport(t,A,r,i){t instanceof He?(this.effectComposer.inputBuffer.viewport.copy(t),this.effectComposer.outputBuffer.viewport.copy(t)):(this.effectComposer.inputBuffer.viewport.set(t,A,r,i),this.effectComposer.outputBuffer.viewport.set(t,A,r,i))}resize(t,A,r){if(this.effectComposer.setSize(t,A,r),this._rt){let i=this.renderer.getPixelRatio();this._rt.setSize(t*i,A*i)}}dispose(){this.uvEffectPass?.dispose(),this.effectPass?.dispose(),this.effectComposer.dispose()}};var xD=new Wt,fg=class extends Xy{constructor(t){super(t);this._pixelRatio=this.getPixelRatio();this.viewportWidth=1;this.viewportHeight=1;this.resolution=new G;this.pipeline=new sh(this);this.overrideTransmission=t?.overrideTransmission,this.autoClear=!1;let A=this.setPixelRatio.bind(this),r=this.setSize.bind(this);this.setPixelRatio=i=>{this._pixelRatio=i,A(i)},this.setSize=(i,s,o=!0)=>{(this.viewportWidth!==i||this.viewportHeight!==s)&&(this.viewportWidth=i,this.viewportHeight=s,r(i,s,o),this.normalRenderTarget?.setSize(i*this._pixelRatio,s*this._pixelRatio),this.transmissionRenderTarget?.setSize(i*this._pixelRatio/2,s*this._pixelRatio/2),this.transmissionDepthTarget?.setSize(i*this._pixelRatio/2,s*this._pixelRatio/2),this.pipeline.resize(i,s,o))},this._superDispose=this.dispose,this.dispose=this._currentDispose}createTransmissionRenderTarget(){this.transmissionRenderTarget===void 0&&(this.transmissionRenderTarget=new ht(this.viewportWidth*this._pixelRatio/2,this.viewportHeight*this._pixelRatio/2,{generateMipmaps:!0,minFilter:Ua,magFilter:it,wrapS:sn,wrapT:sn,depthBuffer:!1}),this.transmissionDepthTarget=new ht(this.viewportWidth*this._pixelRatio/2,this.viewportHeight*this._pixelRatio/2,{minFilter:Ft,magFilter:Ft,depthBuffer:!1}))}createNormalRenderTarget(){this.normalRenderTarget===void 0&&(this.normalRenderTarget=new ht(this.viewportWidth*this._pixelRatio,this.viewportHeight*this._pixelRatio,{generateMipmaps:!1,minFilter:Ft,magFilter:Ft,type:Nr,depthTexture:new ls(this.viewportWidth*this._pixelRatio,this.viewportHeight*this._pixelRatio)}))}renderNormal(t,A){this.normalRenderTarget&&(this.setClearColor(0),A.layers.enable(8),A.layers.disable(0),A.layers.disable(3),this.setRenderTarget(this.normalRenderTarget),this.clear(),A instanceof VA?Tm.uniforms.depthContrast.value=(A.far-A.near)/1e4:Tm.uniforms.depthContrast.value=1,t.overrideMaterial=Tm,this.render(t,A),this.setClearColor(t.bgColor,t.bgColor.a),this.setRenderTarget(null),t.overrideMaterial=t.wireframeState?Mm:null,A.layers.enable(0),A.layers.enable(3))}renderSplineScene(t,A,r,i,s){this.setClearColor(t.bgColor,t.bgColor.a),r.penumbraSize.forEach((a,c)=>{Dt.penumbraSize.value[c]=a}),Dt.pixelRatioNode.value=this.getPixelRatio(),this.resolution.x!==0&&this.resolution.y!==0?Dt.resolution.value.set(this.resolution.x,this.resolution.y):Dt.resolution.value.set(this.viewportWidth*this._pixelRatio,this.viewportHeight*this._pixelRatio),this.overrideNormal!==void 0?(Dt.normalRenderTarget.value=this.overrideNormal,Dt.normalRenderTargetDepth.value=xD):t.needsNormal()&&(this.createNormalRenderTarget(),Dt.normalRenderTarget.value=this.normalRenderTarget.texture,Dt.normalRenderTargetDepth.value=this.normalRenderTarget.depthTexture,this.renderNormal(t,A));let o=!1;if(this.overrideTransmission!==void 0)Dt.transmissionRenderTarget.value=this.overrideTransmission,Dt.transmissionRenderTargetDepth.value=xD,this.pipeline.setTransmissionPassEnabled(!1);else{let a=t.needsTransmission();a&&(this.transmissionRenderTarget===void 0&&(o=!0),this.createTransmissionRenderTarget(),Dt.transmissionRenderTarget.value=this.transmissionRenderTarget.texture,Dt.transmissionRenderTargetDepth.value=this.transmissionDepthTarget.texture),this.pipeline.setTransmissionPassEnabled(a)}A.layers.enable(3),A.layers.enable(8),this.pipeline.sceneHelpers=i,this.pipeline.sceneHelpersOnTop=s,this.pipeline.scene=t,this.pipeline.camera=A,o&&this.pipeline.transmissionPass.updatePasses(this),this.pipeline.postprocessingState!==t.postprocessing&&this.pipeline.updatePostprocessing(t.postprocessing),this.clearAlphaOverride!==void 0&&this.setClearAlpha(this.clearAlphaOverride),t.overrideMaterial=t.wireframeState?Mm:null,this.pipeline.render()}_currentDispose(){this._superDispose(),this.pipeline.dispose(),this.transmissionRenderTarget?.dispose(),this.transmissionDepthTarget?.dispose(),this.normalRenderTarget?.dispose(),this.normalRenderTarget?.depthTexture?.dispose()}};var pg=class{get sharedAssets(){return this.shared}constructor(e,t={}){this.shared=new zi(e.shared,t),this.scene=new ji(e.scene,this.sharedAssets),this.scene.switchActiveCamera(this.scene.activeCamera)}reset(e,t){this.scene.clearScene(),this.sharedAssets.reset(e.shared),this.scene.resetAfterClear(e.scene,this.sharedAssets)}dispose(){this.scene.dispose(),this.shared.dispose()}gc(){this.shared.geometryCache.startGc(),this.shared.geometryCache2.startGc(),this.scene.traverseEntity(e=>{e instanceof eA&&e.markGeometryAsReachable(this.shared)}),this.shared.geometryCache.endGc(),this.shared.geometryCache2.endGc()}};var mg=class{constructor({x:e=10,y:t=10}){this._startTime=0;let A=document.getElementById("spe-perfs");A?this.element=A:(this.element=document.createElement("div"),document.body.appendChild(this.element),this.element.style.position="absolute",this.element.style.zIndex="10000",this.element.style.fontFamily="monospace",this.element.style.background="black",this.element.style.color="white",this.element.style.padding="10px",this.element.style.opacity="0.5",this.element.style.fontSize="11px",this.element.setAttribute("id","spe-perfs")),this.element.style.left=`${e}px`,this.element.style.top=`${t}px`}dispose(){this.element.parentElement?.removeChild(this.element)}start(){this._startTime=performance.now()}end(){let t=performance.now()-this._startTime;this.element.innerHTML=t.toFixed(3)+" ms"}};function Ej(n){let e;if(!!n.index)for(let t=0;t<n.index.array.length;t+=3)e=n.index.array[t],n.index.array[t]=n.index.array[t+2],n.index.array[t+2]=e}function oh(n){return n instanceof Er?"SubdivObject":n.geometry.type==="NonParametricGeometry"?"NonParametric":"Mesh"}function Cj(n,e){let t={};return n.traverseEntity(A=>{if(!A.visible||!(A instanceof Lt)||A.type!=="Mesh"||Array.isArray(A.material)||A.states&&Object.keys(A.states).length)return;let r=A.parent;for(;r;){if(r instanceof Lt&&A.states&&Object.keys(A.states).length)return;r=r.parent}let i=A.material.uuid,s=e.shared.materials[i];if(s){if(!FA.isMergable(s))return}else{let c=e.scene.objects.get(A.uuid)?.data;if(c&&"material"in c&&typeof c.material!="string"){if(!FA.isMergable(c.material))return;i=FA.getHash(c.material)}}t[i]||(t[i]={});let a=t[i][oh(A)];if(a){if(a.push(A),A.cloner)for(let c of A.cloner.children)a.push(c)}else if(t[i][oh(A)]=[A],A.cloner)for(let c of A.cloner.children)t[i][oh(A)].push(c)}),t}function Pj(n){let e=0;return Object.values(n).forEach(t=>{Object.values(t).forEach(A=>{let r=A.length;r>e&&(e=r)})}),e}function bD(n,e){let t=Cj(e,n),A=Pj(t),r=new Array(A),i=0,s=new Array(A),o=0,a=new Array(A),c=0,l=new Array(A),u=0;for(let[d,h]of Object.entries(t))for(let f of Object.values(h)){if(o=0,c=0,f.forEach(m=>{m instanceof Lt&&(s[o++]=m.geometry.clone(),a[c++]=m)}),c<2)continue;for(let m=0;m<c;m++)a[m].updateWorldMatrix(!0,!1),s[m].applyMatrix4(a[m].matrixWorld),a[m].matrixWorld.determinant()<0&&Ej(s[m]);let p=Fi(s.slice(0,o),!1);if(p){let m;switch(d){case"SubdivObject":{console.warn("Turning subdiv object into mesh"),m=new PA(p,a[0].material);break}default:{m=new PA(p,a[0].material);break}}m.castShadow=a[0].castShadow,m.receiveShadow=a[0].receiveShadow,e.add(m);let g=y=>{u=0;for(let x of y)x.children&&g(x.children),x instanceof Lt&&(Array.isArray(x.material)||t[x.material.uuid]&&t[x.material.uuid][oh(x)]&&t[x.material.uuid][oh(x)].length>1||(l[u++]=x));for(let x=0;x<u;x++)e.attach(l[x])};for(let y=0;y<c;y++){let x=a[y];g(x.children),r[i++]=x}}}for(let d=0;d<i;d++)r[d].removeFromParent()}var Dj=new G;function Ij(n){let e="The Spline Runtime only accepts .splinecode files that are generated from Spline export panel.";n.endsWith(".spline")?console.warn(e+" The .spline files are only meant to be used by the Editor."):n.endsWith(".splinecode")||console.warn(e)}var wD=class{constructor(e,{renderOnDemand:t=!0}={}){this._viewportMode=1;this._viewportWidth=window.innerWidth;this._viewportHeight=window.innerHeight;this._proxyObjectCache=new Map;this._lastTime=performance.now();this.time=performance.now();this.dt=0;this._skipRender=!1;this.renderOnDemand=!0;this.disposed=!1;this.requestRender=()=>{this._skipRender=!1};this.render=e=>{!this._renderer||(this._rafId=requestAnimationFrame(this.render),this.time=e,this.dt=this.time-this._lastTime,this._lastTime=this.time,this._perfs?.start(),!(this.renderOnDemand&&this._skipRender)&&(this._skipRender=this._controls?.update(this.dt)??!0,this._eventManager&&(this._eventManager.isEnable||this._eventManager.activate(),this._eventManager.handlers.Follow.onAnimationFrameDamping(),this._eventManager.handlers.LookAt.onAnimationFrameDamping(),(this._eventManager.handlers.Start.hasVideoAction||this._eventManager.handlers.Basic.hasVideoAction||this._eventManager.handlers.Conditional.hasVideoAction)&&(this._skipRender=!1)),this._scene&&this._camera&&this._renderer.renderSplineScene(this._scene,this._camera,this._sharedAssetsManager),this._perfs?.end()))};this._resize=Iu(()=>{!this._renderer||(this._viewportMode===1&&this._frameView&&(this._frameView.frameSize=Dj.set(this._viewportWidth,this._viewportHeight)),this._renderer.setSize(this._viewportWidth,this._viewportHeight,!1),this._viewportMode!==1&&this._frameView?.updateViewport(),this._camera&&(this._frameView?.updateCamera(),this._camera.cameraType==="PerspectiveCamera"&&this._viewportMode===1&&(this._camera.aspect=this._viewportWidth/this._viewportHeight),this._camera.updateProjectionMatrix()),this._eventManager?.resize(),this.requestRender())},10);this.canvas=e,this.renderOnDemand=t,window.location.search.includes("perfs")&&(this._perfs=new mg({x:10,y:10})),kM(e)}async load(e,t){Ij(e);let r=await(await fetch(e,t)).arrayBuffer();await this.start(r)}async start(e,{interactive:t=!0}={}){if(this.disposed)return;let A=await K2(e);await Promise.all([lx(A)&&TC(),WC(A)&&mC(),A.scene.environment.usePhysics&&zT(),rx(A)&&VC()].filter(Boolean)),this._eventManager&&this._eventManager.deactivate(),this._controls&&this._controls.dispose(),this._scene?.dispose();let r=new pg(A);if(this._scene=r.scene,this._sharedAssetsManager=r.sharedAssets,this._camera=this._scene.activeCamera,window.location.search.includes("merge-geometries")){let i=performance.now();bD(A,r.scene);let s=performance.now();console.log("Merged geometries in ",s-i," ms")}if(lx(A)&&this._scene.traverse(i=>{Hn(i)&&i.recomputeBoolean()}),this._sharedAssetsManager.setRequestRender(()=>{this.requestRender(),this._scene?.traverse(i=>{i instanceof wc&&i.pendingMediaLoad&&i.update()})}),rx(A)&&k2(A)){let s=Object.keys(A.shared.fonts).map(o=>this._sharedAssetsManager.getFont(o)).map(o=>o.loadingPromise);await Promise.all(s)}if(this._scene.rewriteEventsBeforeGoToPlayMode(),O2(A.scene,this._scene,this._sharedAssetsManager),this._renderer||(this._renderer=new fg({canvas:this.canvas,antialias:!1,alpha:!0,stencil:!1,depth:!1,powerPreference:"high-performance"}),this._renderer.setPixelRatio(window.devicePixelRatio),this._renderer.pipeline.addEventListener("smaaloaded",this.requestRender),this._renderer.shadowMap.enabled=!0,this._renderer.shadowMap.type=A.scene.environment.ambientLight.softShadows?df:Wy,SP(A.scene.environment.ambientLight.softShadowQuality)),this._frameView)this._frameView.setCamera(this._camera);else{let i=Object.values(A.frames)[0];if(i.preset==="fullscreen"){this._viewportMode=1;let{width:s,height:o}=window.getComputedStyle(this.canvas);this.canvas.parentElement&&(s==="300px"||s==="auto")?(this._viewportWidth=this.canvas.parentElement.clientWidth||300,this.canvas.style.width="100%"):this._viewportWidth=this.canvas.clientWidth,this.canvas.parentElement&&(o==="150px"||o==="auto")?(this._viewportHeight=this.canvas.parentElement.clientHeight||150,this.canvas.style.height="100%"):this._viewportHeight=this.canvas.clientHeight}else this._viewportMode=2,this._viewportWidth=i.size[0],this._viewportHeight=i.size[1],this.canvas.style.width=`${this._viewportWidth}px`,this.canvas.style.height=`${this._viewportHeight}px`;this._renderer.setSize(this._viewportWidth,this._viewportHeight,!1),this._frameView=new ag(this._renderer,this._camera,new G(this._viewportWidth,this._viewportHeight),new G(window.innerWidth,window.innerHeight))}if(t&&(this._scene.updateMatrixWorld(!0),this._controls=new tg(A,this._scene,this._renderer,this.requestRender,this._sharedAssetsManager,!0),this._eventManager=new og(this._renderer,this._scene,this._camera,A.scene.publish.stopRaycast,A.scene.publish.preventScroll,this._sharedAssetsManager,this.requestRender,!0)),this._resize(),!this._resizeObserver&&this.canvas.parentElement){let i=!0;this._resizeObserver=new ResizeObserver(()=>{if(i){i=!1;return}this._viewportWidth=this.canvas.clientWidth,this._viewportHeight=this.canvas.clientHeight,this._resize()}),this._resizeObserver.observe(this.canvas.parentElement)}this._rafId===void 0?this.render(performance.now()):this.requestRender()}findObjectById(e){let t=this._scene?.getObjectByProperty("uuid",e);return this._createProxyObject(t)}findObjectByName(e){let t=this._scene?.getObjectByName(e);return this._createProxyObject(t)}getSplineEvents(){return(this._eventManager?.handlers.Spline).splineEvents}emitEvent(e,t){(this.findObjectById(t)||this.findObjectByName(t))?.emitEvent(e)}emitEventReverse(e,t){(this.findObjectById(t)||this.findObjectByName(t))?.emitEventReverse(e)}addEventListener(e,t){this.canvas.addEventListener(e,t)}removeEventListener(e,t){this.canvas.removeEventListener(e,t)}setZoom(e){this._controls?.orbitControls instanceof Nc&&this._controls?.orbitControls.zoomOut(e)}setSize(e,t){this._viewportWidth=e,this._viewportHeight=t,this._viewportMode=2,this._resize()}dispose(){this.disposed=!0,this._eventManager?.deactivate(),this._scene?.dispose(),this._sharedAssetsManager?.dispose(),this._rafId&&cancelAnimationFrame(this._rafId),this._proxyObjectCache.forEach(e=>{ov.unsubscribe(e)}),this._renderer?.dispose(),this._sharedAssetsManager?.dispose(),this._resizeObserver&&this._resizeObserver.disconnect(),this.canvas.style.width="",this.canvas.style.height="",this._controls?.dispose(),UM(this.canvas)}_createProxyObject(e){if(e==null)return;if(this._proxyObjectCache.has(e.uuid))return this._proxyObjectCache.get(e.uuid);let t={name:e.name,uuid:e.uuid,visible:e.visible,intensity:e.intensity,position:e.position,rotation:e.rotation,scale:e.scale,emitEvent(r){e.dispatchEvent({type:"userEvent",eventName:r})},emitEventReverse(r){e.dispatchEvent({type:"userEvent",eventName:r,reverse:!0})}},A=ov(t,(r,i)=>{typeof e[r]!="object"&&Object.getOwnPropertyDescriptor(e,r)?.writable&&(e[r]=i),this.requestRender(),e.updateMatrix()});return this._proxyObjectCache.set(e.uuid,A),A}};export{wD as Application};