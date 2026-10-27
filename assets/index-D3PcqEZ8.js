var kf=Object.defineProperty;var Ff=(i,e,t)=>e in i?kf(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var B=(i,e,t)=>Ff(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Of="modulepreload",Bf=function(i,e){return new URL(i,e).href},zl={},Gu=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let o=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(t.map(h=>{if(h=Bf(h,n),h in zl)return;zl[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!n)for(let v=a.length-1;v>=0;v--){const m=a[v];if(m.href===h&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":Of,u||(g.as="script"),g.crossOrigin="",g.href=h,l&&g.setAttribute("nonce",l),document.head.appendChild(g),u)return new Promise((v,m)=>{g.addEventListener("load",v),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zc="170",zf=0,Hl=1,Hf=2,Qc=1,ja=2,qn=3,Mi=0,sn=1,Kn=2,Zn=0,ws=1,qa=2,Vl=3,Gl=4,Vf=5,Fi=100,Gf=101,Wf=102,Xf=103,$f=104,jf=200,qf=201,Yf=202,Kf=203,Ya=204,Ka=205,Jf=206,Zf=207,Qf=208,ep=209,tp=210,np=211,ip=212,sp=213,rp=214,Ja=0,Za=1,Qa=2,Es=3,ec=4,tc=5,nc=6,ic=7,Wu=0,op=1,ap=2,yi=0,Xu=1,$u=2,ju=3,el=4,cp=5,qu=6,Yu=7,Wl="attached",lp="detached",Ku=300,Ts=301,As=302,sc=303,rc=304,zo=306,oc=1e3,Bi=1001,ac=1002,Kt=1003,hp=1004,Rr=1005,Nn=1006,ea=1007,zi=1008,ni=1009,Ju=1010,Zu=1011,lr=1012,tl=1013,Wi=1014,An=1015,kn=1016,nl=1017,il=1018,Cs=1020,Qu=35902,ed=1021,td=1022,mn=1023,nd=1024,id=1025,Ms=1026,Rs=1027,sl=1028,rl=1029,sd=1030,ol=1031,al=1033,ho=33776,uo=33777,fo=33778,po=33779,cc=35840,lc=35841,hc=35842,uc=35843,dc=36196,fc=37492,pc=37496,mc=37808,gc=37809,vc=37810,_c=37811,xc=37812,yc=37813,wc=37814,Mc=37815,bc=37816,Sc=37817,Ec=37818,Tc=37819,Ac=37820,Cc=37821,mo=36492,Rc=36494,Pc=36495,rd=36283,Lc=36284,Ic=36285,Dc=36286,yo=2300,Uc=2301,ta=2302,Xl=2400,$l=2401,jl=2402,up=2500,dM=0,fM=1,pM=2,dp=3200,od=3201,ad=0,fp=1,pi="",ln="srgb",Ds="srgb-linear",Ho="linear",vt="srgb",ts=7680,ql=519,pp=512,mp=513,gp=514,cd=515,vp=516,_p=517,xp=518,yp=519,Nc=35044,mM=35048,Yl="300 es",Jn=2e3,wo=2001;class Us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kl=1234567;const ir=Math.PI/180,Ps=180/Math.PI;function vn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function It(i,e,t){return Math.max(e,Math.min(t,i))}function cl(i,e){return(i%e+e)%e}function wp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Mp(i,e,t){return i!==e?(t-i)/(e-i):0}function sr(i,e,t){return(1-t)*i+t*e}function bp(i,e,t,n){return sr(i,e,1-Math.exp(-t*n))}function Sp(i,e=1){return e-Math.abs(cl(i,e*2)-e)}function Ep(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Tp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ap(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Cp(i,e){return i+Math.random()*(e-i)}function Rp(i){return i*(.5-Math.random())}function Pp(i){i!==void 0&&(Kl=i);let e=Kl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lp(i){return i*ir}function Ip(i){return i*Ps}function Dp(i){return(i&i-1)===0&&i!==0}function Up(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Np(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kp(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function En(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const dt={DEG2RAD:ir,RAD2DEG:Ps,generateUUID:vn,clamp:It,euclideanModulo:cl,mapLinear:wp,inverseLerp:Mp,lerp:sr,damp:bp,pingpong:Sp,smoothstep:Ep,smootherstep:Tp,randInt:Ap,randFloat:Cp,randFloatSpread:Rp,seededRandom:Pp,degToRad:Lp,radToDeg:Ip,isPowerOfTwo:Dp,ceilPowerOfTwo:Up,floorPowerOfTwo:Np,setQuaternionFromProperEuler:kp,normalize:_t,denormalize:En};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,s,r,o,a,c,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],M=s[1],x=s[4],_=s[7],I=s[2],E=s[5],T=s[8];return r[0]=o*v+a*M+c*I,r[3]=o*m+a*x+c*E,r[6]=o*p+a*_+c*T,r[1]=l*v+h*M+u*I,r[4]=l*m+h*x+u*E,r[7]=l*p+h*_+u*T,r[2]=d*v+f*M+g*I,r[5]=d*m+f*x+g*E,r[8]=d*p+f*_+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(na.makeScale(e,t)),this}rotate(e){return this.premultiply(na.makeRotation(-e)),this}translate(e,t){return this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const na=new Qe;function ld(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fp(){const i=hr("canvas");return i.style.display="block",i}const Jl={};function Qs(i){i in Jl||(Jl[i]=!0,console.warn(i))}function Op(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Bp(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zp(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const it={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===vt&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===vt&&(i.r=bs(i.r),i.g=bs(i.g),i.b=bs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pi?Ho:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Zl=[.64,.33,.3,.6,.15,.06],Ql=[.2126,.7152,.0722],eh=[.3127,.329],th=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it.define({[Ds]:{primaries:Zl,whitePoint:eh,transfer:Ho,toXYZ:th,fromXYZ:nh,luminanceCoefficients:Ql,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:Zl,whitePoint:eh,transfer:vt,toXYZ:th,fromXYZ:nh,luminanceCoefficients:Ql,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}});let ns;class Hp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ns===void 0&&(ns=hr("canvas")),ns.width=e.width,ns.height=e.height;const n=ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vp=0;class hd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ia(s[o].image)):r.push(ia(s[o]))}else r=ia(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gp=0;class Wt extends Us{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=Bi,s=Bi,r=Nn,o=zi,a=mn,c=ni,l=Wt.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=vn(),this.name="",this.source=new hd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oc:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oc:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Ku;Wt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,_=(f+1)/2,I=(p+1)/2,E=(h+d)/4,T=(u+v)/4,P=(g+m)/4;return x>_&&x>I?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=T/n):_>I?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=P/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=T/r,s=P/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wp extends Us{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends Wp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ud extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xp extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*v,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const I=Math.sqrt(x),E=Math.atan2(I,p*M);m=Math.sin(m*E)/I,a=Math.sin(a*E)/I}const _=a*M;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+v*_,m===1-a){const I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ih.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sa.copy(this).projectOnVector(e),this.sub(sa)}reflect(e){return this.sub(sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new D,ih=new Yi;class Si{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),Lr.subVectors(this.max,Hs),is.subVectors(e.a,Hs),ss.subVectors(e.b,Hs),rs.subVectors(e.c,Hs),ai.subVectors(ss,is),ci.subVectors(rs,ss),Ti.subVectors(is,rs);let t=[0,-ai.z,ai.y,0,-ci.z,ci.y,0,-Ti.z,Ti.y,ai.z,0,-ai.x,ci.z,0,-ci.x,Ti.z,0,-Ti.x,-ai.y,ai.x,0,-ci.y,ci.x,0,-Ti.y,Ti.x,0];return!ra(t,is,ss,rs,Lr)||(t=[1,0,0,0,1,0,0,0,1],!ra(t,is,ss,rs,Lr))?!1:(Ir.crossVectors(ai,ci),t=[Ir.x,Ir.y,Ir.z],ra(t,is,ss,rs,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new D,new D,new D,new D,new D,new D,new D,new D],wn=new D,Pr=new Si,is=new D,ss=new D,rs=new D,ai=new D,ci=new D,Ti=new D,Hs=new D,Lr=new D,Ir=new D,Ai=new D;function ra(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ai.fromArray(i,r);const a=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=e.dot(Ai),l=t.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const $p=new Si,Vs=new D,oa=new D;class si{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$p.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(oa)),this.expandByPoint(Vs.copy(e.center).sub(oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new D,aa=new D,Dr=new D,li=new D,ca=new D,Ur=new D,la=new D;class wr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){aa.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),li.copy(this.origin).sub(aa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Dr),a=li.dot(this.direction),c=-li.dot(Dr),l=li.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(aa).addScaledVector(Dr,d),f}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,s,r){ca.subVectors(t,e),Ur.subVectors(n,e),la.crossVectors(ca,Ur);let o=this.direction.dot(la),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const c=a*this.direction.dot(Ur.crossVectors(li,Ur));if(c<0)return null;const l=a*this.direction.dot(ca.cross(li));if(l<0||c+l>o)return null;const h=-a*li.dot(la);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/os.setFromMatrixColumn(e,0).length(),r=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jp,e,qp)}lookAt(e,t,n){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),hi.crossVectors(n,an),hi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),hi.crossVectors(n,an)),hi.normalize(),Nr.crossVectors(an,hi),s[0]=hi.x,s[4]=Nr.x,s[8]=an.x,s[1]=hi.y,s[5]=Nr.y,s[9]=an.y,s[2]=hi.z,s[6]=Nr.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],x=n[7],_=n[11],I=n[15],E=s[0],T=s[4],P=s[8],w=s[12],y=s[1],C=s[5],N=s[9],F=s[13],O=s[2],j=s[6],H=s[10],$=s[14],V=s[3],se=s[7],_e=s[11],xe=s[15];return r[0]=o*E+a*y+c*O+l*V,r[4]=o*T+a*C+c*j+l*se,r[8]=o*P+a*N+c*H+l*_e,r[12]=o*w+a*F+c*$+l*xe,r[1]=h*E+u*y+d*O+f*V,r[5]=h*T+u*C+d*j+f*se,r[9]=h*P+u*N+d*H+f*_e,r[13]=h*w+u*F+d*$+f*xe,r[2]=g*E+v*y+m*O+p*V,r[6]=g*T+v*C+m*j+p*se,r[10]=g*P+v*N+m*H+p*_e,r[14]=g*w+v*F+m*$+p*xe,r[3]=M*E+x*y+_*O+I*V,r[7]=M*T+x*C+_*j+I*se,r[11]=M*P+x*N+_*H+I*_e,r[15]=M*w+x*F+_*$+I*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+v*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=u*m*l-v*d*l+v*c*f-a*m*f-u*c*p+a*d*p,x=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,_=h*v*l-g*u*l+g*a*f-o*v*f-h*a*p+o*u*p,I=g*u*c-h*v*c-g*a*d+o*v*d+h*a*m-o*u*m,E=t*M+n*x+s*_+r*I;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=M*T,e[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*T,e[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*p+n*c*p)*T,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*T,e[4]=x*T,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*T,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*T,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*T,e[8]=_*T,e[9]=(g*u*r-h*v*r-g*n*f+t*v*f+h*n*p-t*u*p)*T,e[10]=(o*v*r-g*a*r+g*n*l-t*v*l-o*n*p+t*a*p)*T,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*T,e[12]=I*T,e[13]=(h*v*s-g*u*s+g*n*d-t*v*d-h*n*m+t*u*m)*T,e[14]=(g*a*s-o*v*s-g*n*c+t*v*c+o*n*m-t*a*m)*T,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,M=c*l,x=c*h,_=c*u,I=n.x,E=n.y,T=n.z;return s[0]=(1-(v+p))*I,s[1]=(f+_)*I,s[2]=(g-x)*I,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(d+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+x)*T,s[9]=(m-M)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=os.set(s[0],s[1],s[2]).length();const o=os.set(s[4],s[5],s[6]).length(),a=os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Mn.copy(this);const l=1/r,h=1/o,u=1/a;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,t.setFromRotationMatrix(Mn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Jn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===Jn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===wo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Jn){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,f=(n+s)*h;let g,v;if(a===Jn)g=(o+r)*u,v=-2*u;else if(a===wo)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const os=new D,Mn=new et,jp=new D(0,0,0),qp=new D(1,1,1),hi=new D,Nr=new D,an=new D,sh=new et,rh=new Yi;class Pn{constructor(e=0,t=0,n=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(It(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rh.setFromEuler(this),this.setFromQuaternion(rh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class ll{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yp=0;const oh=new D,as=new Yi,Wn=new et,kr=new D,Gs=new D,Kp=new D,Jp=new Yi,ah=new D(1,0,0),ch=new D(0,1,0),lh=new D(0,0,1),hh={type:"added"},Zp={type:"removed"},cs={type:"childadded",child:null},ha={type:"childremoved",child:null};class Et extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new D,t=new Pn,n=new Yi,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new Qe}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(ah,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(lh,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ah,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kr.copy(e):kr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Gs,kr,this.up):Wn.lookAt(kr,Gs,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(Wn),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hh),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zp),ha.child=e,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hh),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,Kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Jp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Et.DEFAULT_UP=new D(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new D,Xn=new D,ua=new D,$n=new D,ls=new D,hs=new D,uh=new D,da=new D,fa=new D,pa=new D,ma=new lt,ga=new lt,va=new lt;class Tn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),bn.subVectors(e,t),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){bn.subVectors(s,t),Xn.subVectors(n,t),ua.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(Xn),c=bn.dot(ua),l=Xn.dot(Xn),h=Xn.dot(ua),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$n.x),c.addScaledVector(o,$n.y),c.addScaledVector(a,$n.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return ma.setScalar(0),ga.setScalar(0),va.setScalar(0),ma.fromBufferAttribute(e,t),ga.fromBufferAttribute(e,n),va.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ma,r.x),o.addScaledVector(ga,r.y),o.addScaledVector(va,r.z),o}static isFrontFacing(e,t,n,s){return bn.subVectors(n,t),Xn.subVectors(e,t),bn.cross(Xn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),bn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ls.subVectors(s,n),hs.subVectors(r,n),da.subVectors(e,n);const c=ls.dot(da),l=hs.dot(da);if(c<=0&&l<=0)return t.copy(n);fa.subVectors(e,s);const h=ls.dot(fa),u=hs.dot(fa);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ls,o);pa.subVectors(e,r);const f=ls.dot(pa),g=hs.dot(pa);if(g>=0&&f<=g)return t.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(hs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return uh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(uh,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(ls,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function _a(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=cl(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=_a(o,r,e+1/3),this.g=_a(o,r,e),this.b=_a(o,r,e-1/3)}return it.toWorkingColorSpace(this,s),this}setStyle(e,t=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const n=dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return it.fromWorkingColorSpace(Vt.copy(this),e),Math.round(It(Vt.r*255,0,255))*65536+Math.round(It(Vt.g*255,0,255))*256+Math.round(It(Vt.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Vt.copy(this),t);const n=Vt.r,s=Vt.g,r=Vt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=ln){it.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,s=Vt.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Fr);const n=sr(ui.h,Fr.h,t),s=sr(ui.s,Fr.s,t),r=sr(ui.l,Fr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Ue;Ue.NAMES=dd;let Qp=0;class Ki extends Us{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=vn(),this.name="",this.blending=ws,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=Ka,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ya&&(n.blendSrc=this.blendSrc),this.blendDst!==Ka&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vo extends Ki{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new D,Or=new Ce;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nc,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nc&&(e.usage=this.usage),e}}class fd extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pd extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let em=0;const pn=new et,xa=new Et,us=new D,cn=new Si,Ws=new Si,kt=new D;class Bt extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ld(e)?pd:fd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return xa.lookAt(e),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(cn.min,Ws.min),cn.expandByPoint(kt),kt.addVectors(cn.max,Ws.max),cn.expandByPoint(kt)):(cn.expandByPoint(Ws.min),cn.expandByPoint(Ws.max))}cn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)kt.fromBufferAttribute(a,l),c&&(us.fromBufferAttribute(e,l),kt.add(us)),s=Math.max(s,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new D,c[P]=new D;const l=new D,h=new D,u=new D,d=new Ce,f=new Ce,g=new Ce,v=new D,m=new D;function p(P,w,y){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[P].add(v),a[w].add(v),a[y].add(v),c[P].add(m),c[w].add(m),c[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,w=M.length;P<w;++P){const y=M[P],C=y.start,N=y.count;for(let F=C,O=C+N;F<O;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new D,_=new D,I=new D,E=new D;function T(P){I.fromBufferAttribute(s,P),E.copy(I);const w=a[P];x.copy(w),x.sub(I.multiplyScalar(I.dot(w))).normalize(),_.crossVectors(E,w);const C=_.dot(c[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,C)}for(let P=0,w=M.length;P<w;++P){const y=M[P],C=y.start,N=y.count;for(let F=C,O=C+N;F<O;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new rn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dh=new et,Ci=new wr,Br=new si,fh=new D,zr=new D,Hr=new D,Vr=new D,ya=new D,Gr=new D,ph=new D,Wr=new D;class S extends Et{constructor(e=new Bt,t=new Vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ya.fromBufferAttribute(u,e),o?Gr.addScaledVector(ya,h):Gr.addScaledVector(ya.sub(t),h))}t.add(Gr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(Br.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Br,fh)===null||Ci.origin.distanceToSquared(fh)>(e.far-e.near)**2))&&(dh.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(dh),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,I=x;_<I;_+=3){const E=a.getX(_),T=a.getX(_+1),P=a.getX(_+2);s=Xr(this,p,e,n,l,h,u,E,T,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);s=Xr(this,o,e,n,l,h,u,M,x,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,I=x;_<I;_+=3){const E=_,T=_+1,P=_+2;s=Xr(this,p,e,n,l,h,u,E,T,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=m,x=m+1,_=m+2;s=Xr(this,o,e,n,l,h,u,M,x,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function tm(i,e,t,n,s,r,o,a){let c;if(e.side===sn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Mi,a),c===null)return null;Wr.copy(a),Wr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Wr);return l<t.near||l>t.far?null:{distance:l,point:Wr.clone(),object:i}}function Xr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,zr),i.getVertexPosition(c,Hr),i.getVertexPosition(l,Vr);const h=tm(i,e,t,n,zr,Hr,Vr,ph);if(h){const u=new D;Tn.getBarycoord(ph,zr,Hr,Vr,u),s&&(h.uv=Tn.getInterpolatedAttribute(s,a,c,l,u,new Ce)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,a,c,l,u,new Ce)),o&&(h.normal=Tn.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new D,materialIndex:0};Tn.getNormal(zr,Hr,Vr,d.normal),h.face=d,h.barycoord=u}return h}class le extends Bt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(u,2));function g(v,m,p,M,x,_,I,E,T,P,w){const y=_/T,C=I/P,N=_/2,F=I/2,O=E/2,j=T+1,H=P+1;let $=0,V=0;const se=new D;for(let _e=0;_e<H;_e++){const xe=_e*C-F;for(let Te=0;Te<j;Te++){const Ne=Te*y-N;se[v]=Ne*M,se[m]=xe*x,se[p]=O,l.push(se.x,se.y,se.z),se[v]=0,se[m]=0,se[p]=E>0?1:-1,h.push(se.x,se.y,se.z),u.push(Te/T),u.push(1-_e/P),$+=1}}for(let _e=0;_e<P;_e++)for(let xe=0;xe<T;xe++){const Te=d+xe+j*_e,Ne=d+xe+j*(_e+1),K=d+(xe+1)+j*(_e+1),ce=d+(xe+1)+j*_e;c.push(Te,Ne,ce),c.push(Ne,K,ce),V+=6}a.addGroup(f,V,w),f+=V,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new le(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function $t(i){const e={};for(let t=0;t<i.length;t++){const n=Ls(i[t]);for(const s in n)e[s]=n[s]}return e}function nm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function md(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const ur={clone:Ls,merge:$t};var im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gt extends Ki{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=im,this.fragmentShader=sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=nm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gd extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new D,mh=new Ce,gh=new Ce;class tn extends gd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,mh,gh),t.subVectors(gh,mh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ds=-90,fs=1;class rm extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(ds,fs,e,t);s.layers=this.layers,this.add(s);const r=new tn(ds,fs,e,t);r.layers=this.layers,this.add(r);const o=new tn(ds,fs,e,t);o.layers=this.layers,this.add(o);const a=new tn(ds,fs,e,t);a.layers=this.layers,this.add(a);const c=new tn(ds,fs,e,t);c.layers=this.layers,this.add(c);const l=new tn(ds,fs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vd extends Wt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ts,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class om extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new vd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new le(5,5,5),r=new Gt({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Zn});r.uniforms.tEquirect.value=t;const o=new S(s,r),a=t.minFilter;return t.minFilter===zi&&(t.minFilter=Nn),new rm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const wa=new D,am=new D,cm=new Qe;class Ni{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=wa.subVectors(n,t).cross(am.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(wa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cm.getNormalMatrix(e),s=this.coplanarPoint(wa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new si,$r=new D;class hl{constructor(e=new Ni,t=new Ni,n=new Ni,s=new Ni,r=new Ni,o=new Ni){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],M=s[13],x=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+o,d+h,m+g,_+M).normalize(),n[3].setComponents(c-o,d-h,m-g,_-M).normalize(),n[4].setComponents(c-a,d-u,m-v,_-x).normalize(),t===Jn)n[5].setComponents(c+a,d+u,m+v,_+x).normalize();else if(t===wo)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if($r.x=s.normal.x>0?e.max.x:e.min.x,$r.y=s.normal.y>0?e.max.y:e.min.y,$r.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _d(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function lm(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Ns extends Bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const M=p*d-o;for(let x=0;x<l;x++){const _=x*u-r;g.push(_,-M,0),v.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const x=M+l*p,_=M+l*(p+1),I=M+1+l*(p+1),E=M+1+l*p;f.push(x,_,E),f.push(_,I,E)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.widthSegments,e.heightSegments)}}var hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,um=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_m=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bm=`#ifdef USE_IRIDESCENCE
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
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
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
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dm=`#define PI 3.141592653589793
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
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Um=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,Nm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,n0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,i0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,c0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,l0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,x0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,T0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,C0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,D0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,B0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,J0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z0=`#ifdef USE_SKINNING
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
#endif`,Q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ng=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ig=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sg=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,gg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,_g=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Tg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Cg=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Ig=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ug=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,kg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:hm,alphahash_pars_fragment:um,alphamap_fragment:dm,alphamap_pars_fragment:fm,alphatest_fragment:pm,alphatest_pars_fragment:mm,aomap_fragment:gm,aomap_pars_fragment:vm,batching_pars_vertex:_m,batching_vertex:xm,begin_vertex:ym,beginnormal_vertex:wm,bsdfs:Mm,iridescence_fragment:bm,bumpmap_pars_fragment:Sm,clipping_planes_fragment:Em,clipping_planes_pars_fragment:Tm,clipping_planes_pars_vertex:Am,clipping_planes_vertex:Cm,color_fragment:Rm,color_pars_fragment:Pm,color_pars_vertex:Lm,color_vertex:Im,common:Dm,cube_uv_reflection_fragment:Um,defaultnormal_vertex:Nm,displacementmap_pars_vertex:km,displacementmap_vertex:Fm,emissivemap_fragment:Om,emissivemap_pars_fragment:Bm,colorspace_fragment:zm,colorspace_pars_fragment:Hm,envmap_fragment:Vm,envmap_common_pars_fragment:Gm,envmap_pars_fragment:Wm,envmap_pars_vertex:Xm,envmap_physical_pars_fragment:n0,envmap_vertex:$m,fog_vertex:jm,fog_pars_vertex:qm,fog_fragment:Ym,fog_pars_fragment:Km,gradientmap_pars_fragment:Jm,lightmap_pars_fragment:Zm,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:e0,lights_pars_begin:t0,lights_toon_fragment:i0,lights_toon_pars_fragment:s0,lights_phong_fragment:r0,lights_phong_pars_fragment:o0,lights_physical_fragment:a0,lights_physical_pars_fragment:c0,lights_fragment_begin:l0,lights_fragment_maps:h0,lights_fragment_end:u0,logdepthbuf_fragment:d0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:p0,logdepthbuf_vertex:m0,map_fragment:g0,map_pars_fragment:v0,map_particle_fragment:_0,map_particle_pars_fragment:x0,metalnessmap_fragment:y0,metalnessmap_pars_fragment:w0,morphinstance_vertex:M0,morphcolor_vertex:b0,morphnormal_vertex:S0,morphtarget_pars_vertex:E0,morphtarget_vertex:T0,normal_fragment_begin:A0,normal_fragment_maps:C0,normal_pars_fragment:R0,normal_pars_vertex:P0,normal_vertex:L0,normalmap_pars_fragment:I0,clearcoat_normal_fragment_begin:D0,clearcoat_normal_fragment_maps:U0,clearcoat_pars_fragment:N0,iridescence_pars_fragment:k0,opaque_fragment:F0,packing:O0,premultiplied_alpha_fragment:B0,project_vertex:z0,dithering_fragment:H0,dithering_pars_fragment:V0,roughnessmap_fragment:G0,roughnessmap_pars_fragment:W0,shadowmap_pars_fragment:X0,shadowmap_pars_vertex:$0,shadowmap_vertex:j0,shadowmask_pars_fragment:q0,skinbase_vertex:Y0,skinning_pars_vertex:K0,skinning_vertex:J0,skinnormal_vertex:Z0,specularmap_fragment:Q0,specularmap_pars_fragment:eg,tonemapping_fragment:tg,tonemapping_pars_fragment:ng,transmission_fragment:ig,transmission_pars_fragment:sg,uv_pars_fragment:rg,uv_pars_vertex:og,uv_vertex:ag,worldpos_vertex:cg,background_vert:lg,background_frag:hg,backgroundCube_vert:ug,backgroundCube_frag:dg,cube_vert:fg,cube_frag:pg,depth_vert:mg,depth_frag:gg,distanceRGBA_vert:vg,distanceRGBA_frag:_g,equirect_vert:xg,equirect_frag:yg,linedashed_vert:wg,linedashed_frag:Mg,meshbasic_vert:bg,meshbasic_frag:Sg,meshlambert_vert:Eg,meshlambert_frag:Tg,meshmatcap_vert:Ag,meshmatcap_frag:Cg,meshnormal_vert:Rg,meshnormal_frag:Pg,meshphong_vert:Lg,meshphong_frag:Ig,meshphysical_vert:Dg,meshphysical_frag:Ug,meshtoon_vert:Ng,meshtoon_frag:kg,points_vert:Fg,points_frag:Og,shadow_vert:Bg,shadow_frag:zg,sprite_vert:Hg,sprite_frag:Vg},Oe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Dn={basic:{uniforms:$t([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:$t([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:$t([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:$t([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:$t([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:$t([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:$t([Oe.points,Oe.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:$t([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:$t([Oe.common,Oe.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:$t([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:$t([Oe.sprite,Oe.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:$t([Oe.common,Oe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:$t([Oe.lights,Oe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Dn.physical={uniforms:$t([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const jr={r:0,b:0,g:0},Pi=new Pn,Gg=new et;function Wg(i,e,t,n,s,r,o){const a=new Ue(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function v(M){let x=!1;const _=g(M);_===null?p(a,c):_&&_.isColor&&(p(_,1),x=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const _=g(x);_&&(_.isCubeTexture||_.mapping===zo)?(h===void 0&&(h=new S(new le(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:Ls(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Pi.copy(x.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gg.makeRotationFromEuler(Pi)),h.material.toneMapped=it.getTransfer(_.colorSpace)!==vt,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new S(new Ns(2,2),new Gt({name:"BackgroundMaterial",uniforms:Ls(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=it.getTransfer(_.colorSpace)!==vt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,x){M.getRGB(jr,md(i)),n.buffers.color.setClear(jr.r,jr.g,jr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:v,addToRenderList:m}}function Xg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,C,N,F,O){let j=!1;const H=u(F,N,C);r!==H&&(r=H,l(r.object)),j=f(y,F,N,O),j&&g(y,F,N,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,_(y,C,N,F),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,C,N){const F=N.wireframe===!0;let O=n[y.id];O===void 0&&(O={},n[y.id]=O);let j=O[C.id];j===void 0&&(j={},O[C.id]=j);let H=j[F];return H===void 0&&(H=d(c()),j[F]=H),H}function d(y){const C=[],N=[],F=[];for(let O=0;O<t;O++)C[O]=0,N[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,C,N,F){const O=r.attributes,j=C.attributes;let H=0;const $=N.getAttributes();for(const V in $)if($[V].location>=0){const _e=O[V];let xe=j[V];if(xe===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor)),_e===void 0||_e.attribute!==xe||xe&&_e.data!==xe.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function g(y,C,N,F){const O={},j=C.attributes;let H=0;const $=N.getAttributes();for(const V in $)if($[V].location>=0){let _e=j[V];_e===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor));const xe={};xe.attribute=_e,_e&&_e.data&&(xe.data=_e.data),O[V]=xe,H++}r.attributes=O,r.attributesNum=H,r.index=F}function v(){const y=r.newAttributes;for(let C=0,N=y.length;C<N;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){const N=r.newAttributes,F=r.enabledAttributes,O=r.attributeDivisors;N[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),O[y]!==C&&(i.vertexAttribDivisor(y,C),O[y]=C)}function M(){const y=r.newAttributes,C=r.enabledAttributes;for(let N=0,F=C.length;N<F;N++)C[N]!==y[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function x(y,C,N,F,O,j,H){H===!0?i.vertexAttribIPointer(y,C,N,O,j):i.vertexAttribPointer(y,C,N,F,O,j)}function _(y,C,N,F){v();const O=F.attributes,j=N.getAttributes(),H=C.defaultAttributeValues;for(const $ in j){const V=j[$];if(V.location>=0){let se=O[$];if(se===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),se!==void 0){const _e=se.normalized,xe=se.itemSize,Te=e.get(se);if(Te===void 0)continue;const Ne=Te.buffer,K=Te.type,ce=Te.bytesPerElement,we=K===i.INT||K===i.UNSIGNED_INT||se.gpuType===tl;if(se.isInterleavedBufferAttribute){const fe=se.data,De=fe.stride,Fe=se.offset;if(fe.isInstancedInterleavedBuffer){for(let ke=0;ke<V.locationSize;ke++)p(V.location+ke,fe.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ke=0;ke<V.locationSize;ke++)m(V.location+ke);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let ke=0;ke<V.locationSize;ke++)x(V.location+ke,xe/V.locationSize,K,_e,De*ce,(Fe+xe/V.locationSize*ke)*ce,we)}else{if(se.isInstancedBufferAttribute){for(let fe=0;fe<V.locationSize;fe++)p(V.location+fe,se.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let fe=0;fe<V.locationSize;fe++)m(V.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let fe=0;fe<V.locationSize;fe++)x(V.location+fe,xe/V.locationSize,K,_e,xe*ce,xe/V.locationSize*fe*ce,we)}}else if(H!==void 0){const _e=H[$];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(V.location,_e);break;case 3:i.vertexAttrib3fv(V.location,_e);break;case 4:i.vertexAttrib4fv(V.location,_e);break;default:i.vertexAttrib1fv(V.location,_e)}}}}M()}function I(){P();for(const y in n){const C=n[y];for(const N in C){const F=C[N];for(const O in F)h(F[O].object),delete F[O];delete C[N]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const N in C){const F=C[N];for(const O in F)h(F[O].object),delete F[O];delete C[N]}delete n[y.id]}function T(y){for(const C in n){const N=n[C];if(N[y.id]===void 0)continue;const F=N[y.id];for(const O in F)h(F[O].object),delete F[O];delete N[y.id]}}function P(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function $g(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function jg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==mn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ni&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==An&&!P)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:I,maxSamples:E}}function qg(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ni,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,x=M*4;let _=p.clippingState||null;c.value=_,_=h(g,d,x,f);for(let I=0;I!==x;++I)_[I]=t[I];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=f;x!==v;++x,_+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Yg(i){let e=new WeakMap;function t(o,a){return a===sc?o.mapping=Ts:a===rc&&(o.mapping=As),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===sc||a===rc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new om(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ul extends gd{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _s=4,vh=[.125,.215,.35,.446,.526,.582],Oi=20,Ma=new ul,_h=new Ue;let ba=null,Sa=0,Ea=0,Ta=!1;const ki=(1+Math.sqrt(5))/2,ps=1/ki,xh=[new D(-ki,ps,0),new D(ki,ps,0),new D(-ps,0,ki),new D(ps,0,ki),new D(0,ki,-ps),new D(0,ki,ps),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class yh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ba=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ba,Sa,Ea),this._renderer.xr.enabled=Ta,e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ba=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:kn,format:mn,colorSpace:Ds,depthBuffer:!1},s=wh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kg(r)),this._blurMaterial=Jg(r,e,t)}return s}_compileMaterial(e){const t=new S(this._lodPlanes[0],e);this._renderer.compile(t,Ma)}_sceneToCubeUV(e,t,n,s){const a=new tn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(_h),h.toneMapping=yi,h.autoClear=!1;const f=new Vo({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new S(new le,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(_h),v=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;qr(s,M*x,p>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ts||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new S(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;qr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xh[(s-r-1)%xh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new S(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const p=[];let M=0;for(let T=0;T<Oi;++T){const P=T/v,w=Math.exp(-P*P/2);p.push(w),T===0?M+=w:T<m&&(M+=2*w)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const _=this._sizeLods[s],I=3*_*(s>x-_s?s-x+_s:0),E=4*(this._cubeSize-_);qr(t,I,E,3*_,2*_),c.setRenderTarget(t),c.render(u,Ma)}}function Kg(i){const e=[],t=[],n=[];let s=i;const r=i-_s+1+vh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-_s?c=vh[o-i+_s-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*f),x=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,P=E>2?0:-1,w=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];M.set(w,v*g*E),x.set(d,m*g*E);const y=[E,E,E,E,E,E];_.set(y,p*g*E)}const I=new Bt;I.setAttribute("position",new rn(M,v)),I.setAttribute("uv",new rn(x,m)),I.setAttribute("faceIndex",new rn(_,p)),e.push(I),s>_s&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wh(i,e,t){const n=new dn(i,e,t);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Jg(i,e,t){const n=new Float32Array(Oi),s=new D(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Mh(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function bh(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function dl(){return`

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
	`}function Zg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===sc||c===rc,h=c===Ts||c===As;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new yh(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new yh(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Qg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Qs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ev(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let x=0,_=M.length;x<_;x+=3){const I=M[x+0],E=M[x+1],T=M[x+2];d.push(I,E,E,T,T,I)}}else if(g!==void 0){const M=g.array;v=g.version;for(let x=0,_=M.length/3-1;x<_;x+=3){const I=x+0,E=x+1,T=x+2;d.push(I,E,E,T,T,I)}}else return;const m=new(ld(d)?pd:fd)(d,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function tv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*v[M];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function nv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function iv(i,e,t){const n=new WeakMap,s=new lt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let w=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let _=a.attributes.position.count*x,I=1;_>e.maxTextureSize&&(I=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const E=new Float32Array(_*I*4*u),T=new ud(E,_,I,u);T.type=An,T.needsUpdate=!0;const P=x*4;for(let y=0;y<u;y++){const C=m[y],N=p[y],F=M[y],O=_*I*4*y;for(let j=0;j<C.count;j++){const H=j*P;f===!0&&(s.fromBufferAttribute(C,j),E[O+H+0]=s.x,E[O+H+1]=s.y,E[O+H+2]=s.z,E[O+H+3]=0),g===!0&&(s.fromBufferAttribute(N,j),E[O+H+4]=s.x,E[O+H+5]=s.y,E[O+H+6]=s.z,E[O+H+7]=0),v===!0&&(s.fromBufferAttribute(F,j),E[O+H+8]=s.x,E[O+H+9]=s.y,E[O+H+10]=s.z,E[O+H+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new Ce(_,I)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function sv(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Mo extends Wt{constructor(e,t,n,s,r,o,a,c,l,h=Ms){if(h!==Ms&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ms&&(n=Wi),n===void 0&&h===Rs&&(n=Cs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=c!==void 0?c:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xd=new Wt,Sh=new Mo(1,1),yd=new ud,wd=new Xp,Md=new vd,Eh=[],Th=[],Ah=new Float32Array(16),Ch=new Float32Array(9),Rh=new Float32Array(4);function ks(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Eh[s];if(r===void 0&&(r=new Float32Array(s),Eh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Go(i,e){let t=Th[e];t===void 0&&(t=new Int32Array(e),Th[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ov(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function lv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Rh.set(n),i.uniformMatrix2fv(this.addr,!1,Rh),Ut(t,n)}}function hv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Ch.set(n),i.uniformMatrix3fv(this.addr,!1,Ch),Ut(t,n)}}function uv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Ah.set(n),i.uniformMatrix4fv(this.addr,!1,Ah),Ut(t,n)}}function dv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function gv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function _v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function yv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sh.compareFunction=cd,r=Sh):r=xd,t.setTexture2D(e||r,s)}function wv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wd,s)}function Mv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Md,s)}function bv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||yd,s)}function Sv(i){switch(i){case 5126:return rv;case 35664:return ov;case 35665:return av;case 35666:return cv;case 35674:return lv;case 35675:return hv;case 35676:return uv;case 5124:case 35670:return dv;case 35667:case 35671:return fv;case 35668:case 35672:return pv;case 35669:case 35673:return mv;case 5125:return gv;case 36294:return vv;case 36295:return _v;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return bv}}function Ev(i,e){i.uniform1fv(this.addr,e)}function Tv(i,e){const t=ks(e,this.size,2);i.uniform2fv(this.addr,t)}function Av(i,e){const t=ks(e,this.size,3);i.uniform3fv(this.addr,t)}function Cv(i,e){const t=ks(e,this.size,4);i.uniform4fv(this.addr,t)}function Rv(i,e){const t=ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Pv(i,e){const t=ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Lv(i,e){const t=ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Iv(i,e){i.uniform1iv(this.addr,e)}function Dv(i,e){i.uniform2iv(this.addr,e)}function Uv(i,e){i.uniform3iv(this.addr,e)}function Nv(i,e){i.uniform4iv(this.addr,e)}function kv(i,e){i.uniform1uiv(this.addr,e)}function Fv(i,e){i.uniform2uiv(this.addr,e)}function Ov(i,e){i.uniform3uiv(this.addr,e)}function Bv(i,e){i.uniform4uiv(this.addr,e)}function zv(i,e,t){const n=this.cache,s=e.length,r=Go(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||xd,r[o])}function Hv(i,e,t){const n=this.cache,s=e.length,r=Go(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wd,r[o])}function Vv(i,e,t){const n=this.cache,s=e.length,r=Go(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Md,r[o])}function Gv(i,e,t){const n=this.cache,s=e.length,r=Go(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||yd,r[o])}function Wv(i){switch(i){case 5126:return Ev;case 35664:return Tv;case 35665:return Av;case 35666:return Cv;case 35674:return Rv;case 35675:return Pv;case 35676:return Lv;case 5124:case 35670:return Iv;case 35667:case 35671:return Dv;case 35668:case 35672:return Uv;case 35669:case 35673:return Nv;case 5125:return kv;case 36294:return Fv;case 36295:return Ov;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Gv}}class Xv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sv(t.type)}}class $v{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wv(t.type)}}class jv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function Ph(i,e){i.seq.push(e),i.map[e.id]=e}function qv(i,e,t){const n=i.name,s=n.length;for(Aa.lastIndex=0;;){const r=Aa.exec(n),o=Aa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ph(t,l===void 0?new Xv(a,i,e):new $v(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new jv(a),Ph(t,u)),t=u}}}class go{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);qv(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Lh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Yv=37297;let Kv=0;function Jv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ih=new Qe;function Zv(i){it._getMatrix(Ih,it.workingColorSpace,i);const e=`mat3( ${Ih.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case Ho:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Dh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Jv(i.getShaderSource(e),o)}else return s}function Qv(i,e){const t=Zv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function e_(i,e){let t;switch(e){case Xu:t="Linear";break;case $u:t="Reinhard";break;case ju:t="Cineon";break;case el:t="ACESFilmic";break;case qu:t="AgX";break;case Yu:t="Neutral";break;case cp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yr=new D;function t_(){it.getLuminanceCoefficients(Yr);const i=Yr.x.toFixed(4),e=Yr.y.toFixed(4),t=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function i_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function s_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function er(i){return i!==""}function Uh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r_=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(i){return i.replace(r_,a_)}const o_=new Map;function a_(i,e){let t=tt[e];if(t===void 0){const n=o_.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kc(t)}const c_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(i){return i.replace(c_,l_)}function l_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function h_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ja?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function u_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ts:case As:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function f_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wu:e="ENVMAP_BLENDING_MULTIPLY";break;case op:e="ENVMAP_BLENDING_MIX";break;case ap:e="ENVMAP_BLENDING_ADD";break}return e}function p_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function m_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=h_(t),l=u_(t),h=d_(t),u=f_(t),d=p_(t),f=n_(t),g=i_(r),v=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),p.length>0&&(p+=`
`)):(m=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),p=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?tt.tonemapping_pars_fragment:"",t.toneMapping!==yi?e_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Qv("linearToOutputTexel",t.outputColorSpace),t_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),o=kc(o),o=Uh(o,t),o=Nh(o,t),a=kc(a),a=Uh(a,t),a=Nh(a,t),o=kh(o),a=kh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+o,_=M+p+a,I=Lh(s,s.VERTEX_SHADER,x),E=Lh(s,s.FRAGMENT_SHADER,_);s.attachShader(v,I),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(I).trim(),O=s.getShaderInfoLog(E).trim();let j=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,E);else{const $=Dh(s,I,"vertex"),V=Dh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+$+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||O==="")&&(H=!1);H&&(C.diagnostics={runnable:j,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(I),s.deleteShader(E),P=new go(s,v),w=s_(s,v)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Yv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=E,this}let g_=0;class v_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new __(e),t.set(e,n)),n}}class __{constructor(e){this.id=g_++,this.code=e,this.usedTimes=0}}function x_(i,e,t,n,s,r,o){const a=new ll,c=new v_,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,y,C,N,F){const O=N.fog,j=F.geometry,H=w.isMeshStandardMaterial?N.environment:null,$=(w.isMeshStandardMaterial?t:e).get(w.envMap||H),V=$&&$.mapping===zo?$.image.height:null,se=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const _e=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xe=_e!==void 0?_e.length:0;let Te=0;j.morphAttributes.position!==void 0&&(Te=1),j.morphAttributes.normal!==void 0&&(Te=2),j.morphAttributes.color!==void 0&&(Te=3);let Ne,K,ce,we;if(se){const gt=Dn[se];Ne=gt.vertexShader,K=gt.fragmentShader}else Ne=w.vertexShader,K=w.fragmentShader,c.update(w),ce=c.getVertexShaderID(w),we=c.getFragmentShaderID(w);const fe=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),Fe=F.isInstancedMesh===!0,ke=F.isBatchedMesh===!0,pe=!!w.map,X=!!w.matcap,ne=!!$,L=!!w.aoMap,Pe=!!w.lightMap,Z=!!w.bumpMap,de=!!w.normalMap,Q=!!w.displacementMap,Ee=!!w.emissiveMap,ge=!!w.metalnessMap,R=!!w.roughnessMap,b=w.anisotropy>0,z=w.clearcoat>0,J=w.dispersion>0,re=w.iridescence>0,Y=w.sheen>0,be=w.transmission>0,Ae=b&&!!w.anisotropyMap,Re=z&&!!w.clearcoatMap,ae=z&&!!w.clearcoatNormalMap,q=z&&!!w.clearcoatRoughnessMap,ue=re&&!!w.iridescenceMap,Be=re&&!!w.iridescenceThicknessMap,he=Y&&!!w.sheenColorMap,ve=Y&&!!w.sheenRoughnessMap,ze=!!w.specularMap,He=!!w.specularColorMap,qe=!!w.specularIntensityMap,k=be&&!!w.transmissionMap,Le=be&&!!w.thicknessMap,oe=!!w.gradientMap,ye=!!w.alphaMap,Me=w.alphaTest>0,Ve=!!w.alphaHash,Je=!!w.extensions;let Ct=yi;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ct=i.toneMapping);const zt={shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:Ne,fragmentShader:K,defines:w.defines,customVertexShaderID:ce,customFragmentShaderID:we,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ke,batchingColor:ke&&F._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&F.instanceColor!==null,instancingMorph:Fe&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ds,alphaToCoverage:!!w.alphaToCoverage,map:pe,matcap:X,envMap:ne,envMapMode:ne&&$.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:Pe,bumpMap:Z,normalMap:de,displacementMap:d&&Q,emissiveMap:Ee,normalMapObjectSpace:de&&w.normalMapType===fp,normalMapTangentSpace:de&&w.normalMapType===ad,metalnessMap:ge,roughnessMap:R,anisotropy:b,anisotropyMap:Ae,clearcoat:z,clearcoatMap:Re,clearcoatNormalMap:ae,clearcoatRoughnessMap:q,dispersion:J,iridescence:re,iridescenceMap:ue,iridescenceThicknessMap:Be,sheen:Y,sheenColorMap:he,sheenRoughnessMap:ve,specularMap:ze,specularColorMap:He,specularIntensityMap:qe,transmission:be,transmissionMap:k,thicknessMap:Le,gradientMap:oe,opaque:w.transparent===!1&&w.blending===ws&&w.alphaToCoverage===!1,alphaMap:ye,alphaTest:Me,alphaHash:Ve,combine:w.combine,mapUv:pe&&v(w.map.channel),aoMapUv:L&&v(w.aoMap.channel),lightMapUv:Pe&&v(w.lightMap.channel),bumpMapUv:Z&&v(w.bumpMap.channel),normalMapUv:de&&v(w.normalMap.channel),displacementMapUv:Q&&v(w.displacementMap.channel),emissiveMapUv:Ee&&v(w.emissiveMap.channel),metalnessMapUv:ge&&v(w.metalnessMap.channel),roughnessMapUv:R&&v(w.roughnessMap.channel),anisotropyMapUv:Ae&&v(w.anisotropyMap.channel),clearcoatMapUv:Re&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(w.sheenRoughnessMap.channel),specularMapUv:ze&&v(w.specularMap.channel),specularColorMapUv:He&&v(w.specularColorMap.channel),specularIntensityMapUv:qe&&v(w.specularIntensityMap.channel),transmissionMapUv:k&&v(w.transmissionMap.channel),thicknessMapUv:Le&&v(w.thicknessMap.channel),alphaMapUv:ye&&v(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(de||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(pe||ye),fog:!!O,useFog:w.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:De,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Te,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:pe&&w.map.isVideoTexture===!0&&it.getTransfer(w.map.colorSpace)===vt,decodeVideoTextureEmissive:Ee&&w.emissiveMap.isVideoTexture===!0&&it.getTransfer(w.emissiveMap.colorSpace)===vt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Kn,flipSided:w.side===sn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Je&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&w.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)y.push(C),y.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(M(y,w),x(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function M(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function x(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){const y=g[w.type];let C;if(y){const N=Dn[y];C=ur.clone(N.uniforms)}else C=w.uniforms;return C}function I(w,y){let C;for(let N=0,F=h.length;N<F;N++){const O=h[N];if(O.cacheKey===y){C=O,++C.usedTimes;break}}return C===void 0&&(C=new m_(i,y,w,r),h.push(C)),C}function E(w){if(--w.usedTimes===0){const y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function T(w){c.remove(w)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:I,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:P}}function y_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function w_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Oh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||w_),n.length>1&&n.sort(d||Oh),s.length>1&&s.sort(d||Oh)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function M_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Bh,i.set(n,[o])):s>=r.length?(o=new Bh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function b_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ue};break;case"SpotLight":t={position:new D,direction:new D,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function S_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let E_=0;function T_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function A_(i){const e=new b_,t=S_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new et,o=new et;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,x=0,_=0,I=0,E=0,T=0;l.sort(T_);for(let w=0,y=l.length;w<y;w++){const C=l[w],N=C.color,F=C.intensity,O=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=N.r*F,u+=N.g*F,d+=N.b*F;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],F);T++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const $=C.shadow,V=t.get(C);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=C.shadow.matrix,M++}n.directional[f]=H,f++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(N).multiplyScalar(F),H.distance=O,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[v]=H;const $=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,$.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[v]=$.matrix,C.castShadow){const V=t.get(C);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=j,_++}v++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(N).multiplyScalar(F),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=H,m++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const $=C.shadow,V=t.get(C);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=C.shadow.matrix,x++}n.point[g]=H,g++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(F),H.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==x||P.numSpotShadows!==_||P.numSpotMaps!==I||P.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+I-E,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=x,P.numSpotShadows=_,P.numSpotMaps=I,P.numLightProbes=T,n.version=E_++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const x=l[p];if(x.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(x.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function zh(i){const e=new A_(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function C_(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new zh(i),e.set(s,[a])):r>=o.length?(a=new zh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class bd extends Ki{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class R_ extends Ki{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const P_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L_=`uniform sampler2D shadow_pass;
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
}`;function I_(i,e,t){let n=new hl;const s=new Ce,r=new Ce,o=new lt,a=new bd({depthPacking:od}),c=new R_,l={},h=t.maxTextureSize,u={[Mi]:sn,[sn]:Mi,[Kn]:Kn},d=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:P_,fragmentShader:L_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new S(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let p=this.type;this.render=function(E,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Zn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==qn&&this.type===qn,O=p===qn&&this.type!==qn;for(let j=0,H=E.length;j<H;j++){const $=E[j],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const se=V.getFrameExtents();if(s.multiply(se),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,V.mapSize.y=r.y)),V.map===null||F===!0||O===!0){const xe=this.type!==qn?{minFilter:Kt,magFilter:Kt}:{};V.map!==null&&V.map.dispose(),V.map=new dn(s.x,s.y,xe),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const _e=V.getViewportCount();for(let xe=0;xe<_e;xe++){const Te=V.getViewport(xe);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),N.viewport(o),V.updateMatrices($,xe),n=V.getFrustum(),_(T,P,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===qn&&M(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,y,C)};function M(E,T){const P=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new dn(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,P,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,P,f,v,null)}function x(E,T,P,w){let y=null;const C=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)y=C;else if(y=P.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=y.uuid,F=T.uuid;let O=l[N];O===void 0&&(O={},l[N]=O);let j=O[F];j===void 0&&(j=y.clone(),O[F]=j,T.addEventListener("dispose",I)),y=j}if(y.visible=T.visible,y.wireframe=T.wireframe,w===qn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=i.properties.get(y);N.light=P}return y}function _(E,T,P,w,y){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===qn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const F=e.update(E),O=E.material;if(Array.isArray(O)){const j=F.groups;for(let H=0,$=j.length;H<$;H++){const V=j[H],se=O[V.materialIndex];if(se&&se.visible){const _e=x(E,se,w,y);E.onBeforeShadow(i,E,T,P,F,_e,V),i.renderBufferDirect(P,null,F,_e,E,V),E.onAfterShadow(i,E,T,P,F,_e,V)}}}else if(O.visible){const j=x(E,O,w,y);E.onBeforeShadow(i,E,T,P,F,j,null),i.renderBufferDirect(P,null,F,j,E,null),E.onAfterShadow(i,E,T,P,F,j,null)}}const N=E.children;for(let F=0,O=N.length;F<O;F++)_(N[F],T,P,w,y)}function I(E){E.target.removeEventListener("dispose",I);for(const P in l){const w=l[P],y=E.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const D_={[Ja]:Za,[Qa]:nc,[ec]:ic,[Es]:tc,[Za]:Ja,[nc]:Qa,[ic]:ec,[tc]:Es};function U_(i,e){function t(){let k=!1;const Le=new lt;let oe=null;const ye=new lt(0,0,0,0);return{setMask:function(Me){oe!==Me&&!k&&(i.colorMask(Me,Me,Me,Me),oe=Me)},setLocked:function(Me){k=Me},setClear:function(Me,Ve,Je,Ct,zt){zt===!0&&(Me*=Ct,Ve*=Ct,Je*=Ct),Le.set(Me,Ve,Je,Ct),ye.equals(Le)===!1&&(i.clearColor(Me,Ve,Je,Ct),ye.copy(Le))},reset:function(){k=!1,oe=null,ye.set(-1,0,0,0)}}}function n(){let k=!1,Le=!1,oe=null,ye=null,Me=null;return{setReversed:function(Ve){if(Le!==Ve){const Je=e.get("EXT_clip_control");Le?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT);const Ct=Me;Me=null,this.setClear(Ct)}Le=Ve},getReversed:function(){return Le},setTest:function(Ve){Ve?fe(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(Ve){oe!==Ve&&!k&&(i.depthMask(Ve),oe=Ve)},setFunc:function(Ve){if(Le&&(Ve=D_[Ve]),ye!==Ve){switch(Ve){case Ja:i.depthFunc(i.NEVER);break;case Za:i.depthFunc(i.ALWAYS);break;case Qa:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case ec:i.depthFunc(i.EQUAL);break;case tc:i.depthFunc(i.GEQUAL);break;case nc:i.depthFunc(i.GREATER);break;case ic:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=Ve}},setLocked:function(Ve){k=Ve},setClear:function(Ve){Me!==Ve&&(Le&&(Ve=1-Ve),i.clearDepth(Ve),Me=Ve)},reset:function(){k=!1,oe=null,ye=null,Me=null,Le=!1}}}function s(){let k=!1,Le=null,oe=null,ye=null,Me=null,Ve=null,Je=null,Ct=null,zt=null;return{setTest:function(gt){k||(gt?fe(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(gt){Le!==gt&&!k&&(i.stencilMask(gt),Le=gt)},setFunc:function(gt,xn,zn){(oe!==gt||ye!==xn||Me!==zn)&&(i.stencilFunc(gt,xn,zn),oe=gt,ye=xn,Me=zn)},setOp:function(gt,xn,zn){(Ve!==gt||Je!==xn||Ct!==zn)&&(i.stencilOp(gt,xn,zn),Ve=gt,Je=xn,Ct=zn)},setLocked:function(gt){k=gt},setClear:function(gt){zt!==gt&&(i.clearStencil(gt),zt=gt)},reset:function(){k=!1,Le=null,oe=null,ye=null,Me=null,Ve=null,Je=null,Ct=null,zt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,x=null,_=null,I=null,E=null,T=new Ue(0,0,0),P=0,w=!1,y=null,C=null,N=null,F=null,O=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=$>=2);let se=null,_e={};const xe=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),Ne=new lt().fromArray(xe),K=new lt().fromArray(Te);function ce(k,Le,oe,ye){const Me=new Uint8Array(4),Ve=i.createTexture();i.bindTexture(k,Ve),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<oe;Je++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Le,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(Le+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Ve}const we={};we[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(i.DEPTH_TEST),o.setFunc(Es),Z(!1),de(Hl),fe(i.CULL_FACE),L(Zn);function fe(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function De(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Fe(k,Le){return u[k]!==Le?(i.bindFramebuffer(k,Le),u[k]=Le,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Le),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Le),!0):!1}function ke(k,Le){let oe=f,ye=!1;if(k){oe=d.get(Le),oe===void 0&&(oe=[],d.set(Le,oe));const Me=k.textures;if(oe.length!==Me.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let Ve=0,Je=Me.length;Ve<Je;Ve++)oe[Ve]=i.COLOR_ATTACHMENT0+Ve;oe.length=Me.length,ye=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,ye=!0);ye&&i.drawBuffers(oe)}function pe(k){return g!==k?(i.useProgram(k),g=k,!0):!1}const X={[Fi]:i.FUNC_ADD,[Gf]:i.FUNC_SUBTRACT,[Wf]:i.FUNC_REVERSE_SUBTRACT};X[Xf]=i.MIN,X[$f]=i.MAX;const ne={[jf]:i.ZERO,[qf]:i.ONE,[Yf]:i.SRC_COLOR,[Ya]:i.SRC_ALPHA,[tp]:i.SRC_ALPHA_SATURATE,[Qf]:i.DST_COLOR,[Jf]:i.DST_ALPHA,[Kf]:i.ONE_MINUS_SRC_COLOR,[Ka]:i.ONE_MINUS_SRC_ALPHA,[ep]:i.ONE_MINUS_DST_COLOR,[Zf]:i.ONE_MINUS_DST_ALPHA,[np]:i.CONSTANT_COLOR,[ip]:i.ONE_MINUS_CONSTANT_COLOR,[sp]:i.CONSTANT_ALPHA,[rp]:i.ONE_MINUS_CONSTANT_ALPHA};function L(k,Le,oe,ye,Me,Ve,Je,Ct,zt,gt){if(k===Zn){v===!0&&(De(i.BLEND),v=!1);return}if(v===!1&&(fe(i.BLEND),v=!0),k!==Vf){if(k!==m||gt!==w){if((p!==Fi||_!==Fi)&&(i.blendEquation(i.FUNC_ADD),p=Fi,_=Fi),gt)switch(k){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qa:i.blendFunc(i.ONE,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,x=null,I=null,E=null,T.set(0,0,0),P=0,m=k,w=gt}return}Me=Me||Le,Ve=Ve||oe,Je=Je||ye,(Le!==p||Me!==_)&&(i.blendEquationSeparate(X[Le],X[Me]),p=Le,_=Me),(oe!==M||ye!==x||Ve!==I||Je!==E)&&(i.blendFuncSeparate(ne[oe],ne[ye],ne[Ve],ne[Je]),M=oe,x=ye,I=Ve,E=Je),(Ct.equals(T)===!1||zt!==P)&&(i.blendColor(Ct.r,Ct.g,Ct.b,zt),T.copy(Ct),P=zt),m=k,w=!1}function Pe(k,Le){k.side===Kn?De(i.CULL_FACE):fe(i.CULL_FACE);let oe=k.side===sn;Le&&(oe=!oe),Z(oe),k.blending===ws&&k.transparent===!1?L(Zn):L(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const ye=k.stencilWrite;a.setTest(ye),ye&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ee(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(k){y!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),y=k)}function de(k){k!==zf?(fe(i.CULL_FACE),k!==C&&(k===Hl?i.cullFace(i.BACK):k===Hf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),C=k}function Q(k){k!==N&&(H&&i.lineWidth(k),N=k)}function Ee(k,Le,oe){k?(fe(i.POLYGON_OFFSET_FILL),(F!==Le||O!==oe)&&(i.polygonOffset(Le,oe),F=Le,O=oe)):De(i.POLYGON_OFFSET_FILL)}function ge(k){k?fe(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function R(k){k===void 0&&(k=i.TEXTURE0+j-1),se!==k&&(i.activeTexture(k),se=k)}function b(k,Le,oe){oe===void 0&&(se===null?oe=i.TEXTURE0+j-1:oe=se);let ye=_e[oe];ye===void 0&&(ye={type:void 0,texture:void 0},_e[oe]=ye),(ye.type!==k||ye.texture!==Le)&&(se!==oe&&(i.activeTexture(oe),se=oe),i.bindTexture(k,Le||we[k]),ye.type=k,ye.texture=Le)}function z(){const k=_e[se];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Be(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(k){Ne.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Ne.copy(k))}function ve(k){K.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),K.copy(k))}function ze(k,Le){let oe=l.get(Le);oe===void 0&&(oe=new WeakMap,l.set(Le,oe));let ye=oe.get(k);ye===void 0&&(ye=i.getUniformBlockIndex(Le,k.name),oe.set(k,ye))}function He(k,Le){const ye=l.get(Le).get(k);c.get(Le)!==ye&&(i.uniformBlockBinding(Le,ye,k.__bindingPointIndex),c.set(Le,ye))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},se=null,_e={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,x=null,_=null,I=null,E=null,T=new Ue(0,0,0),P=0,w=!1,y=null,C=null,N=null,F=null,O=null,Ne.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:De,bindFramebuffer:Fe,drawBuffers:ke,useProgram:pe,setBlending:L,setMaterial:Pe,setFlipSided:Z,setCullFace:de,setLineWidth:Q,setPolygonOffset:Ee,setScissorTest:ge,activeTexture:R,bindTexture:b,unbindTexture:z,compressedTexImage2D:J,compressedTexImage3D:re,texImage2D:ue,texImage3D:Be,updateUBOMapping:ze,uniformBlockBinding:He,texStorage2D:ae,texStorage3D:q,texSubImage2D:Y,texSubImage3D:be,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Re,scissor:he,viewport:ve,reset:qe}}function Hh(i,e,t,n){const s=N_(n);switch(t){case ed:return i*e;case nd:return i*e;case id:return i*e*2;case sl:return i*e/s.components*s.byteLength;case rl:return i*e/s.components*s.byteLength;case sd:return i*e*2/s.components*s.byteLength;case ol:return i*e*2/s.components*s.byteLength;case td:return i*e*3/s.components*s.byteLength;case mn:return i*e*4/s.components*s.byteLength;case al:return i*e*4/s.components*s.byteLength;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fo:case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lc:case uc:return Math.max(i,16)*Math.max(e,8)/4;case cc:case hc:return Math.max(i,8)*Math.max(e,8)/2;case dc:case fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case mo:case Rc:case Pc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case rd:case Lc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ic:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function N_(i){switch(i){case ni:case Ju:return{byteLength:1,components:1};case lr:case Zu:case kn:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case Wi:case tl:case An:return{byteLength:4,components:1};case Qu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function k_(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ce,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):hr("canvas")}function v(R,b,z){let J=1;const re=ge(R);if((re.width>z||re.height>z)&&(J=z/Math.max(re.width,re.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(J*re.width),be=Math.floor(J*re.height);u===void 0&&(u=g(Y,be));const Ae=b?g(Y,be):u;return Ae.width=Y,Ae.height=be,Ae.getContext("2d").drawImage(R,0,0,Y,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Y+"x"+be+")."),Ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,b,z,J,re=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=b;if(b===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),b===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),b===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),b===i.RGBA){const be=re?Ho:it.getTransfer(J);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=be===vt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(R,b){let z;return R?b===null||b===Wi||b===Cs?z=i.DEPTH24_STENCIL8:b===An?z=i.DEPTH32F_STENCIL8:b===lr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Wi||b===Cs?z=i.DEPTH_COMPONENT24:b===An?z=i.DEPTH_COMPONENT32F:b===lr&&(z=i.DEPTH_COMPONENT16),z}function I(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Kt&&R.minFilter!==Nn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function E(R){const b=R.target;b.removeEventListener("dispose",E),P(b),b.isVideoTexture&&h.delete(b)}function T(R){const b=R.target;b.removeEventListener("dispose",T),y(b)}function P(R){const b=n.get(R);if(b.__webglInit===void 0)return;const z=R.source,J=d.get(z);if(J){const re=J[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&w(R),Object.keys(J).length===0&&d.delete(z)}n.remove(R)}function w(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const z=R.source,J=d.get(z);delete J[b.__cacheKey],o.memory.textures--}function y(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let re=0;re<b.__webglFramebuffer[J].length;re++)i.deleteFramebuffer(b.__webglFramebuffer[J][re]);else i.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)i.deleteFramebuffer(b.__webglFramebuffer[J]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=R.textures;for(let J=0,re=z.length;J<re;J++){const Y=n.get(z[J]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[J])}n.remove(R)}let C=0;function N(){C=0}function F(){const R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function O(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function j(R,b){const z=n.get(R);if(R.isVideoTexture&&Q(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,R,b);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function H(R,b){const z=n.get(R);if(R.version>0&&z.__version!==R.version){K(z,R,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function $(R,b){const z=n.get(R);if(R.version>0&&z.__version!==R.version){K(z,R,b);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function V(R,b){const z=n.get(R);if(R.version>0&&z.__version!==R.version){ce(z,R,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}const se={[oc]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[ac]:i.MIRRORED_REPEAT},_e={[Kt]:i.NEAREST,[hp]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},xe={[pp]:i.NEVER,[yp]:i.ALWAYS,[mp]:i.LESS,[cd]:i.LEQUAL,[gp]:i.EQUAL,[xp]:i.GEQUAL,[vp]:i.GREATER,[_p]:i.NOTEQUAL};function Te(R,b){if(b.type===An&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Nn||b.magFilter===ea||b.magFilter===Rr||b.magFilter===zi||b.minFilter===Nn||b.minFilter===ea||b.minFilter===Rr||b.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,se[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,se[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,se[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,_e[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,_e[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,xe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Kt||b.minFilter!==Rr&&b.minFilter!==zi||b.type===An&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ne(R,b){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",E));const J=b.source;let re=d.get(J);re===void 0&&(re={},d.set(J,re));const Y=O(b);if(Y!==R.__cacheKey){re[Y]===void 0&&(re[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),re[Y].usedTimes++;const be=re[R.__cacheKey];be!==void 0&&(re[R.__cacheKey].usedTimes--,be.usedTimes===0&&w(b)),R.__cacheKey=Y,R.__webglTexture=re[Y].texture}return z}function K(R,b,z){let J=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=i.TEXTURE_3D);const re=Ne(R,b),Y=b.source;t.bindTexture(J,R.__webglTexture,i.TEXTURE0+z);const be=n.get(Y);if(Y.version!==be.__version||re===!0){t.activeTexture(i.TEXTURE0+z);const Ae=it.getPrimaries(it.workingColorSpace),Re=b.colorSpace===pi?null:it.getPrimaries(b.colorSpace),ae=b.colorSpace===pi||Ae===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let q=v(b.image,!1,s.maxTextureSize);q=Ee(b,q);const ue=r.convert(b.format,b.colorSpace),Be=r.convert(b.type);let he=x(b.internalFormat,ue,Be,b.colorSpace,b.isVideoTexture);Te(J,b);let ve;const ze=b.mipmaps,He=b.isVideoTexture!==!0,qe=be.__version===void 0||re===!0,k=Y.dataReady,Le=I(b,q);if(b.isDepthTexture)he=_(b.format===Rs,b.type),qe&&(He?t.texStorage2D(i.TEXTURE_2D,1,he,q.width,q.height):t.texImage2D(i.TEXTURE_2D,0,he,q.width,q.height,0,ue,Be,null));else if(b.isDataTexture)if(ze.length>0){He&&qe&&t.texStorage2D(i.TEXTURE_2D,Le,he,ze[0].width,ze[0].height);for(let oe=0,ye=ze.length;oe<ye;oe++)ve=ze[oe],He?k&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ve.width,ve.height,ue,Be,ve.data):t.texImage2D(i.TEXTURE_2D,oe,he,ve.width,ve.height,0,ue,Be,ve.data);b.generateMipmaps=!1}else He?(qe&&t.texStorage2D(i.TEXTURE_2D,Le,he,q.width,q.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,q.width,q.height,ue,Be,q.data)):t.texImage2D(i.TEXTURE_2D,0,he,q.width,q.height,0,ue,Be,q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){He&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,he,ze[0].width,ze[0].height,q.depth);for(let oe=0,ye=ze.length;oe<ye;oe++)if(ve=ze[oe],b.format!==mn)if(ue!==null)if(He){if(k)if(b.layerUpdates.size>0){const Me=Hh(ve.width,ve.height,b.format,b.type);for(const Ve of b.layerUpdates){const Je=ve.data.subarray(Ve*Me/ve.data.BYTES_PER_ELEMENT,(Ve+1)*Me/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Ve,ve.width,ve.height,1,ue,Je)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,q.depth,ue,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,he,ve.width,ve.height,q.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ve.width,ve.height,q.depth,ue,Be,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,he,ve.width,ve.height,q.depth,0,ue,Be,ve.data)}else{He&&qe&&t.texStorage2D(i.TEXTURE_2D,Le,he,ze[0].width,ze[0].height);for(let oe=0,ye=ze.length;oe<ye;oe++)ve=ze[oe],b.format!==mn?ue!==null?He?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,ve.width,ve.height,ue,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,he,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?k&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ve.width,ve.height,ue,Be,ve.data):t.texImage2D(i.TEXTURE_2D,oe,he,ve.width,ve.height,0,ue,Be,ve.data)}else if(b.isDataArrayTexture)if(He){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,he,q.width,q.height,q.depth),k)if(b.layerUpdates.size>0){const oe=Hh(q.width,q.height,b.format,b.type);for(const ye of b.layerUpdates){const Me=q.data.subarray(ye*oe/q.data.BYTES_PER_ELEMENT,(ye+1)*oe/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ye,q.width,q.height,1,ue,Be,Me)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ue,Be,q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,q.width,q.height,q.depth,0,ue,Be,q.data);else if(b.isData3DTexture)He?(qe&&t.texStorage3D(i.TEXTURE_3D,Le,he,q.width,q.height,q.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ue,Be,q.data)):t.texImage3D(i.TEXTURE_3D,0,he,q.width,q.height,q.depth,0,ue,Be,q.data);else if(b.isFramebufferTexture){if(qe)if(He)t.texStorage2D(i.TEXTURE_2D,Le,he,q.width,q.height);else{let oe=q.width,ye=q.height;for(let Me=0;Me<Le;Me++)t.texImage2D(i.TEXTURE_2D,Me,he,oe,ye,0,ue,Be,null),oe>>=1,ye>>=1}}else if(ze.length>0){if(He&&qe){const oe=ge(ze[0]);t.texStorage2D(i.TEXTURE_2D,Le,he,oe.width,oe.height)}for(let oe=0,ye=ze.length;oe<ye;oe++)ve=ze[oe],He?k&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ue,Be,ve):t.texImage2D(i.TEXTURE_2D,oe,he,ue,Be,ve);b.generateMipmaps=!1}else if(He){if(qe){const oe=ge(q);t.texStorage2D(i.TEXTURE_2D,Le,he,oe.width,oe.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Be,q)}else t.texImage2D(i.TEXTURE_2D,0,he,ue,Be,q);m(b)&&p(J),be.__version=Y.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ce(R,b,z){if(b.image.length!==6)return;const J=Ne(R,b),re=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);const Y=n.get(re);if(re.version!==Y.__version||J===!0){t.activeTexture(i.TEXTURE0+z);const be=it.getPrimaries(it.workingColorSpace),Ae=b.colorSpace===pi?null:it.getPrimaries(b.colorSpace),Re=b.colorSpace===pi||be===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const ae=b.isCompressedTexture||b.image[0].isCompressedTexture,q=b.image[0]&&b.image[0].isDataTexture,ue=[];for(let ye=0;ye<6;ye++)!ae&&!q?ue[ye]=v(b.image[ye],!0,s.maxCubemapSize):ue[ye]=q?b.image[ye].image:b.image[ye],ue[ye]=Ee(b,ue[ye]);const Be=ue[0],he=r.convert(b.format,b.colorSpace),ve=r.convert(b.type),ze=x(b.internalFormat,he,ve,b.colorSpace),He=b.isVideoTexture!==!0,qe=Y.__version===void 0||J===!0,k=re.dataReady;let Le=I(b,Be);Te(i.TEXTURE_CUBE_MAP,b);let oe;if(ae){He&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,ze,Be.width,Be.height);for(let ye=0;ye<6;ye++){oe=ue[ye].mipmaps;for(let Me=0;Me<oe.length;Me++){const Ve=oe[Me];b.format!==mn?he!==null?He?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me,0,0,Ve.width,Ve.height,he,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me,ze,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me,0,0,Ve.width,Ve.height,he,ve,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me,ze,Ve.width,Ve.height,0,he,ve,Ve.data)}}}else{if(oe=b.mipmaps,He&&qe){oe.length>0&&Le++;const ye=ge(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,ze,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(q){He?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ue[ye].width,ue[ye].height,he,ve,ue[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ze,ue[ye].width,ue[ye].height,0,he,ve,ue[ye].data);for(let Me=0;Me<oe.length;Me++){const Je=oe[Me].image[ye].image;He?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me+1,0,0,Je.width,Je.height,he,ve,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me+1,ze,Je.width,Je.height,0,he,ve,Je.data)}}else{He?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,he,ve,ue[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ze,he,ve,ue[ye]);for(let Me=0;Me<oe.length;Me++){const Ve=oe[Me];He?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me+1,0,0,he,ve,Ve.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me+1,ze,he,ve,Ve.image[ye])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),Y.__version=re.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function we(R,b,z,J,re,Y){const be=r.convert(z.format,z.colorSpace),Ae=r.convert(z.type),Re=x(z.internalFormat,be,Ae,z.colorSpace),ae=n.get(b),q=n.get(z);if(q.__renderTarget=b,!ae.__hasExternalTextures){const ue=Math.max(1,b.width>>Y),Be=Math.max(1,b.height>>Y);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,Y,Re,ue,Be,b.depth,0,be,Ae,null):t.texImage2D(re,Y,Re,ue,Be,0,be,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),de(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,re,q.__webglTexture,0,Z(b)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,re,q.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(R,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const J=b.depthTexture,re=J&&J.isDepthTexture?J.type:null,Y=_(b.stencilBuffer,re),be=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=Z(b);de(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,Y,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,Y,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Y,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,R)}else{const J=b.textures;for(let re=0;re<J.length;re++){const Y=J[re],be=r.convert(Y.format,Y.colorSpace),Ae=r.convert(Y.type),Re=x(Y.internalFormat,be,Ae,Y.colorSpace),ae=Z(b);z&&de(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Re,b.width,b.height):de(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,Re,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Re,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),j(b.depthTexture,0);const re=J.__webglTexture,Y=Z(b);if(b.depthTexture.format===Ms)de(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(b.depthTexture.format===Rs)de(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Fe(R){const b=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){const re=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",re)};J.addEventListener("dispose",re),b.__depthDisposeCallback=re}b.__boundDepthTexture=J}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");De(b.__webglFramebuffer,R)}else if(z){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=i.createRenderbuffer(),fe(b.__webglDepthbuffer[J],R,!1);else{const re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),fe(b.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(R,b,z){const J=n.get(R);b!==void 0&&we(J.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Fe(R)}function pe(R){const b=R.texture,z=n.get(R),J=n.get(b);R.addEventListener("dispose",T);const re=R.textures,Y=R.isWebGLCubeRenderTarget===!0,be=re.length>1;if(be||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=b.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[Ae]=[];for(let Re=0;Re<b.mipmaps.length;Re++)z.__webglFramebuffer[Ae][Re]=i.createFramebuffer()}else z.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let Ae=0;Ae<b.mipmaps.length;Ae++)z.__webglFramebuffer[Ae]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(be)for(let Ae=0,Re=re.length;Ae<Re;Ae++){const ae=n.get(re[Ae]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&de(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Ae=0;Ae<re.length;Ae++){const Re=re[Ae];z.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Ae]);const ae=r.convert(Re.format,Re.colorSpace),q=r.convert(Re.type),ue=x(Re.internalFormat,ae,q,Re.colorSpace,R.isXRRenderTarget===!0),Be=Z(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,ue,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,z.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Te(i.TEXTURE_CUBE_MAP,b);for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)we(z.__webglFramebuffer[Ae][Re],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Re);else we(z.__webglFramebuffer[Ae],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let Ae=0,Re=re.length;Ae<Re;Ae++){const ae=re[Ae],q=n.get(ae);t.bindTexture(i.TEXTURE_2D,q.__webglTexture),Te(i.TEXTURE_2D,ae),we(z.__webglFramebuffer,R,ae,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),m(ae)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ae=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,J.__webglTexture),Te(Ae,b),b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)we(z.__webglFramebuffer[Re],R,b,i.COLOR_ATTACHMENT0,Ae,Re);else we(z.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,Ae,0);m(b)&&p(Ae),t.unbindTexture()}R.depthBuffer&&Fe(R)}function X(R){const b=R.textures;for(let z=0,J=b.length;z<J;z++){const re=b[z];if(m(re)){const Y=M(R),be=n.get(re).__webglTexture;t.bindTexture(Y,be),p(Y),t.unbindTexture()}}}const ne=[],L=[];function Pe(R){if(R.samples>0){if(de(R)===!1){const b=R.textures,z=R.width,J=R.height;let re=i.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(R),Ae=b.length>1;if(Ae)for(let Re=0;Re<b.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Re=0;Re<b.length;Re++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),Ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[Re]);const ae=n.get(b[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,z,J,0,0,z,J,re,i.NEAREST),c===!0&&(ne.length=0,L.length=0,ne.push(i.COLOR_ATTACHMENT0+Re),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ne.push(Y),L.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Re=0;Re<b.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,be.__webglColorRenderbuffer[Re]);const ae=n.get(b[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Z(R){return Math.min(s.maxSamples,R.samples)}function de(R){const b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Q(R){const b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Ee(R,b){const z=R.colorSpace,J=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Ds&&z!==pi&&(it.getTransfer(z)===vt?(J!==mn||re!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=j,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=ke,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=de}function F_(i,e){function t(n,s=pi){let r;const o=it.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ju)return i.BYTE;if(n===Zu)return i.SHORT;if(n===lr)return i.UNSIGNED_SHORT;if(n===tl)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===kn)return i.HALF_FLOAT;if(n===ed)return i.ALPHA;if(n===td)return i.RGB;if(n===mn)return i.RGBA;if(n===nd)return i.LUMINANCE;if(n===id)return i.LUMINANCE_ALPHA;if(n===Ms)return i.DEPTH_COMPONENT;if(n===Rs)return i.DEPTH_STENCIL;if(n===sl)return i.RED;if(n===rl)return i.RED_INTEGER;if(n===sd)return i.RG;if(n===ol)return i.RG_INTEGER;if(n===al)return i.RGBA_INTEGER;if(n===ho||n===uo||n===fo||n===po)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cc||n===lc||n===hc||n===uc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dc||n===fc||n===pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dc||n===fc)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mc||n===gc||n===vc||n===_c||n===xc||n===yc||n===wc||n===Mc||n===bc||n===Sc||n===Ec||n===Tc||n===Ac||n===Cc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ec)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ac)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===Rc||n===Pc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mo)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rd||n===Lc||n===Ic||n===Dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class O_ extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class me extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B_={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(B_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new me;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class V_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Wt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Gt({vertexShader:z_,fragmentShader:H_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new S(new Ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G_ extends Us{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new V_,m=t.getContextAttributes();let p=null,M=null;const x=[],_=[],I=new Ce;let E=null;const T=new tn;T.viewport=new lt;const P=new tn;P.viewport=new lt;const w=[T,P],y=new O_;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=x[K];return ce===void 0&&(ce=new Ca,x[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=x[K];return ce===void 0&&(ce=new Ca,x[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=x[K];return ce===void 0&&(ce=new Ca,x[K]=ce),ce.getHandSpace()};function F(K){const ce=_.indexOf(K.inputSource);if(ce===-1)return;const we=x[ce];we!==void 0&&(we.update(K.inputSource,K.frame,l||o),we.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",j);for(let K=0;K<x.length;K++){const ce=_[K];ce!==null&&(_[K]=null,x[K].disconnect(ce))}C=null,N=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,M=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",O),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new dn(f.framebufferWidth,f.framebufferHeight,{format:mn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ce=null,we=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?Rs:Ms,we=m.stencil?Cs:Wi);const De={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(De),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new dn(d.textureWidth,d.textureHeight,{format:mn,type:ni,depthTexture:new Mo(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(K){for(let ce=0;ce<K.removed.length;ce++){const we=K.removed[ce],fe=_.indexOf(we);fe>=0&&(_[fe]=null,x[fe].disconnect(we))}for(let ce=0;ce<K.added.length;ce++){const we=K.added[ce];let fe=_.indexOf(we);if(fe===-1){for(let Fe=0;Fe<x.length;Fe++)if(Fe>=_.length){_.push(we),fe=Fe;break}else if(_[Fe]===null){_[Fe]=we,fe=Fe;break}if(fe===-1)break}const De=x[fe];De&&De.connect(we)}}const H=new D,$=new D;function V(K,ce,we){H.setFromMatrixPosition(ce.matrixWorld),$.setFromMatrixPosition(we.matrixWorld);const fe=H.distanceTo($),De=ce.projectionMatrix.elements,Fe=we.projectionMatrix.elements,ke=De[14]/(De[10]-1),pe=De[14]/(De[10]+1),X=(De[9]+1)/De[5],ne=(De[9]-1)/De[5],L=(De[8]-1)/De[0],Pe=(Fe[8]+1)/Fe[0],Z=ke*L,de=ke*Pe,Q=fe/(-L+Pe),Ee=Q*-L;if(ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ee),K.translateZ(Q),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),De[10]===-1)K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const ge=ke+Q,R=pe+Q,b=Z-Ee,z=de+(fe-Ee),J=X*pe/R*ge,re=ne*pe/R*ge;K.projectionMatrix.makePerspective(b,z,J,re,ge,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function se(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ce=K.near,we=K.far;v.texture!==null&&(v.depthNear>0&&(ce=v.depthNear),v.depthFar>0&&(we=v.depthFar)),y.near=P.near=T.near=ce,y.far=P.far=T.far=we,(C!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,N=y.far),T.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,y.layers.mask=T.layers.mask|P.layers.mask;const fe=K.parent,De=y.cameras;se(y,fe);for(let Fe=0;Fe<De.length;Fe++)se(De[Fe],fe);De.length===2?V(y,T,P):y.projectionMatrix.copy(T.projectionMatrix),_e(K,y,fe)};function _e(K,ce,we){we===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(we.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ps*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let xe=null;function Te(K,ce){if(h=ce.getViewerPose(l||o),g=ce,h!==null){const we=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let fe=!1;we.length!==y.cameras.length&&(y.cameras.length=0,fe=!0);for(let Fe=0;Fe<we.length;Fe++){const ke=we[Fe];let pe=null;if(f!==null)pe=f.getViewport(ke);else{const ne=u.getViewSubImage(d,ke);pe=ne.viewport,Fe===0&&(e.setRenderTargetTextures(M,ne.colorTexture,d.ignoreDepthValues?void 0:ne.depthStencilTexture),e.setRenderTarget(M))}let X=w[Fe];X===void 0&&(X=new tn,X.layers.enable(Fe),X.viewport=new lt,w[Fe]=X),X.matrix.fromArray(ke.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(ke.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(pe.x,pe.y,pe.width,pe.height),Fe===0&&(y.matrix.copy(X.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),fe===!0&&y.cameras.push(X)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")){const Fe=u.getDepthInformation(we[0]);Fe&&Fe.isValid&&Fe.texture&&v.init(e,Fe,s.renderState)}}for(let we=0;we<x.length;we++){const fe=_[we],De=x[we];fe!==null&&De!==void 0&&De.update(fe,ce,l||o)}xe&&xe(K,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),g=null}const Ne=new _d;Ne.setAnimationLoop(Te),this.setAnimationLoop=function(K){xe=K},this.dispose=function(){}}}const Li=new Pn,W_=new et;function X_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,md(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),x=M.envMap,_=M.envMapRotation;x&&(m.envMap.value=x,Li.copy(_),Li.x*=-1,Li.y*=-1,Li.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),m.envMapRotation.value.setFromMatrix4(W_.makeRotationFromEuler(Li)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $_(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const _=x.program;n.uniformBlockBinding(M,_)}function l(M,x){let _=s[M.id];_===void 0&&(g(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",m));const I=x.program;n.updateUBOMapping(M,I);const E=e.render.frame;r[M.id]!==E&&(d(M),r[M.id]=E)}function h(M){const x=u();M.__bindingPointIndex=x;const _=i.createBuffer(),I=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=s[M.id],_=M.uniforms,I=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,T=_.length;E<T;E++){const P=Array.isArray(_[E])?_[E]:[_[E]];for(let w=0,y=P.length;w<y;w++){const C=P[w];if(f(C,E,w,I)===!0){const N=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let j=0;j<F.length;j++){const H=F[j],$=v(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+O,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,O),O+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,x,_,I){const E=M.value,T=x+"_"+_;if(I[T]===void 0)return typeof E=="number"||typeof E=="boolean"?I[T]=E:I[T]=E.clone(),!0;{const P=I[T];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return I[T]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(M){const x=M.uniforms;let _=0;const I=16;for(let T=0,P=x.length;T<P;T++){const w=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,C=w.length;y<C;y++){const N=w[y],F=Array.isArray(N.value)?N.value:[N.value];for(let O=0,j=F.length;O<j;O++){const H=F[O],$=v(H),V=_%I,se=V%$.boundary,_e=V+se;_+=se,_e!==0&&I-_e<$.storage&&(_+=I-_e),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=$.storage}}}const E=_%I;return E>0&&(_+=I-E),M.__size=_,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class j_{constructor(e={}){const{canvas:t=Fp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const M=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=yi,this.toneMappingExposure=1;const _=this;let I=!1,E=0,T=0,P=null,w=-1,y=null;const C=new lt,N=new lt;let F=null;const O=new Ue(0);let j=0,H=t.width,$=t.height,V=1,se=null,_e=null;const xe=new lt(0,0,H,$),Te=new lt(0,0,H,$);let Ne=!1;const K=new hl;let ce=!1,we=!1;const fe=new et,De=new et,Fe=new D,ke=new lt,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let X=!1;function ne(){return P===null?V:1}let L=n;function Pe(A,G){return t.getContext(A,G)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zc}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),L===null){const G="webgl2";if(L=Pe(G,A),L===null)throw Pe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Z,de,Q,Ee,ge,R,b,z,J,re,Y,be,Ae,Re,ae,q,ue,Be,he,ve,ze,He,qe,k;function Le(){Z=new Qg(L),Z.init(),He=new F_(L,Z),de=new jg(L,Z,e,He),Q=new U_(L,Z),de.reverseDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),Ee=new nv(L),ge=new y_,R=new k_(L,Z,Q,ge,de,He,Ee),b=new Yg(_),z=new Zg(_),J=new lm(L),qe=new Xg(L,J),re=new ev(L,J,Ee,qe),Y=new sv(L,re,J,Ee),he=new iv(L,de,R),q=new qg(ge),be=new x_(_,b,z,Z,de,qe,q),Ae=new X_(_,ge),Re=new M_,ae=new C_(Z),Be=new Wg(_,b,z,Q,Y,f,c),ue=new I_(_,Y,de),k=new $_(L,Ee,de,Q),ve=new $g(L,Z,Ee),ze=new tv(L,Z,Ee),Ee.programs=be.programs,_.capabilities=de,_.extensions=Z,_.properties=ge,_.renderLists=Re,_.shadowMap=ue,_.state=Q,_.info=Ee}Le();const oe=new G_(_,L);this.xr=oe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=Z.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Z.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(H,$,!1))},this.getSize=function(A){return A.set(H,$)},this.setSize=function(A,G,ee=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,$=G,t.width=Math.floor(A*V),t.height=Math.floor(G*V),ee===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(H*V,$*V).floor()},this.setDrawingBufferSize=function(A,G,ee){H=A,$=G,V=ee,t.width=Math.floor(A*ee),t.height=Math.floor(G*ee),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(xe)},this.setViewport=function(A,G,ee,te){A.isVector4?xe.set(A.x,A.y,A.z,A.w):xe.set(A,G,ee,te),Q.viewport(C.copy(xe).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(Te)},this.setScissor=function(A,G,ee,te){A.isVector4?Te.set(A.x,A.y,A.z,A.w):Te.set(A,G,ee,te),Q.scissor(N.copy(Te).multiplyScalar(V).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){Q.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){se=A},this.setTransparentSort=function(A){_e=A},this.getClearColor=function(A){return A.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(A=!0,G=!0,ee=!0){let te=0;if(A){let W=!1;if(P!==null){const Ie=P.texture.format;W=Ie===al||Ie===ol||Ie===rl}if(W){const Ie=P.texture.type,Ge=Ie===ni||Ie===Wi||Ie===lr||Ie===Cs||Ie===nl||Ie===il,Xe=Be.getClearColor(),$e=Be.getClearAlpha(),Ke=Xe.r,Ze=Xe.g,je=Xe.b;Ge?(g[0]=Ke,g[1]=Ze,g[2]=je,g[3]=$e,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Ke,v[1]=Ze,v[2]=je,v[3]=$e,L.clearBufferiv(L.COLOR,0,v))}else te|=L.COLOR_BUFFER_BIT}G&&(te|=L.DEPTH_BUFFER_BIT),ee&&(te|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),Re.dispose(),ae.dispose(),ge.dispose(),b.dispose(),z.dispose(),Y.dispose(),qe.dispose(),k.dispose(),be.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Il),oe.removeEventListener("sessionend",Dl),Ei.stop()};function ye(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=Ee.autoReset,G=ue.enabled,ee=ue.autoUpdate,te=ue.needsUpdate,W=ue.type;Le(),Ee.autoReset=A,ue.enabled=G,ue.autoUpdate=ee,ue.needsUpdate=te,ue.type=W}function Ve(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Je(A){const G=A.target;G.removeEventListener("dispose",Je),Ct(G)}function Ct(A){zt(A),ge.remove(A)}function zt(A){const G=ge.get(A).programs;G!==void 0&&(G.forEach(function(ee){be.releaseProgram(ee)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,ee,te,W,Ie){G===null&&(G=pe);const Ge=W.isMesh&&W.matrixWorld.determinant()<0,Xe=Df(A,G,ee,te,W);Q.setMaterial(te,Ge);let $e=ee.index,Ke=1;if(te.wireframe===!0){if($e=re.getWireframeAttribute(ee),$e===void 0)return;Ke=2}const Ze=ee.drawRange,je=ee.attributes.position;let ot=Ze.start*Ke,Mt=(Ze.start+Ze.count)*Ke;Ie!==null&&(ot=Math.max(ot,Ie.start*Ke),Mt=Math.min(Mt,(Ie.start+Ie.count)*Ke)),$e!==null?(ot=Math.max(ot,0),Mt=Math.min(Mt,$e.count)):je!=null&&(ot=Math.max(ot,0),Mt=Math.min(Mt,je.count));const bt=Mt-ot;if(bt<0||bt===1/0)return;qe.setup(W,te,Xe,ee,$e);let Zt,ht=ve;if($e!==null&&(Zt=J.get($e),ht=ze,ht.setIndex(Zt)),W.isMesh)te.wireframe===!0?(Q.setLineWidth(te.wireframeLinewidth*ne()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(W.isLine){let Ye=te.linewidth;Ye===void 0&&(Ye=1),Q.setLineWidth(Ye*ne()),W.isLineSegments?ht.setMode(L.LINES):W.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else W.isPoints?ht.setMode(L.POINTS):W.isSprite&&ht.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ht.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))ht.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ye=W._multiDrawStarts,Hn=W._multiDrawCounts,ut=W._multiDrawCount,yn=$e?J.get($e).bytesPerElement:1,es=ge.get(te).currentProgram.getUniforms();for(let on=0;on<ut;on++)es.setValue(L,"_gl_DrawID",on),ht.render(Ye[on]/yn,Hn[on])}else if(W.isInstancedMesh)ht.renderInstances(ot,bt,W.count);else if(ee.isInstancedBufferGeometry){const Ye=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Hn=Math.min(ee.instanceCount,Ye);ht.renderInstances(ot,bt,Hn)}else ht.render(ot,bt)};function gt(A,G,ee){A.transparent===!0&&A.side===Kn&&A.forceSinglePass===!1?(A.side=sn,A.needsUpdate=!0,Cr(A,G,ee),A.side=Mi,A.needsUpdate=!0,Cr(A,G,ee),A.side=Kn):Cr(A,G,ee)}this.compile=function(A,G,ee=null){ee===null&&(ee=A),p=ae.get(ee),p.init(G),x.push(p),ee.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),A!==ee&&A.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const te=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ie=W.material;if(Ie)if(Array.isArray(Ie))for(let Ge=0;Ge<Ie.length;Ge++){const Xe=Ie[Ge];gt(Xe,ee,W),te.add(Xe)}else gt(Ie,ee,W),te.add(Ie)}),x.pop(),p=null,te},this.compileAsync=function(A,G,ee=null){const te=this.compile(A,G,ee);return new Promise(W=>{function Ie(){if(te.forEach(function(Ge){ge.get(Ge).currentProgram.isReady()&&te.delete(Ge)}),te.size===0){W(A);return}setTimeout(Ie,10)}Z.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let xn=null;function zn(A){xn&&xn(A)}function Il(){Ei.stop()}function Dl(){Ei.start()}const Ei=new _d;Ei.setAnimationLoop(zn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(A){xn=A,oe.setAnimationLoop(A),A===null?Ei.stop():Ei.start()},oe.addEventListener("sessionstart",Il),oe.addEventListener("sessionend",Dl),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(G),G=oe.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,G,P),p=ae.get(A,x.length),p.init(G),x.push(p),De.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),K.setFromProjectionMatrix(De),we=this.localClippingEnabled,ce=q.init(this.clippingPlanes,we),m=Re.get(A,M.length),m.init(),M.push(m),oe.enabled===!0&&oe.isPresenting===!0){const Ie=_.xr.getDepthSensingMesh();Ie!==null&&Qo(Ie,G,-1/0,_.sortObjects)}Qo(A,G,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(se,_e),X=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,X&&Be.addToRenderList(m,A),this.info.render.frame++,ce===!0&&q.beginShadows();const ee=p.state.shadowsArray;ue.render(ee,A,G),ce===!0&&q.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=m.opaque,W=m.transmissive;if(p.setupLights(),G.isArrayCamera){const Ie=G.cameras;if(W.length>0)for(let Ge=0,Xe=Ie.length;Ge<Xe;Ge++){const $e=Ie[Ge];Nl(te,W,A,$e)}X&&Be.render(A);for(let Ge=0,Xe=Ie.length;Ge<Xe;Ge++){const $e=Ie[Ge];Ul(m,A,$e,$e.viewport)}}else W.length>0&&Nl(te,W,A,G),X&&Be.render(A),Ul(m,A,G);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(_,A,G),qe.resetDefaultState(),w=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],ce===!0&&q.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Qo(A,G,ee,te){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){te&&ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(De);const Ge=Y.update(A),Xe=A.material;Xe.visible&&m.push(A,Ge,Xe,ee,ke.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const Ge=Y.update(A),Xe=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ke.copy(A.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),ke.copy(Ge.boundingSphere.center)),ke.applyMatrix4(A.matrixWorld).applyMatrix4(De)),Array.isArray(Xe)){const $e=Ge.groups;for(let Ke=0,Ze=$e.length;Ke<Ze;Ke++){const je=$e[Ke],ot=Xe[je.materialIndex];ot&&ot.visible&&m.push(A,Ge,ot,ee,ke.z,je)}}else Xe.visible&&m.push(A,Ge,Xe,ee,ke.z,null)}}const Ie=A.children;for(let Ge=0,Xe=Ie.length;Ge<Xe;Ge++)Qo(Ie[Ge],G,ee,te)}function Ul(A,G,ee,te){const W=A.opaque,Ie=A.transmissive,Ge=A.transparent;p.setupLightsView(ee),ce===!0&&q.setGlobalState(_.clippingPlanes,ee),te&&Q.viewport(C.copy(te)),W.length>0&&Ar(W,G,ee),Ie.length>0&&Ar(Ie,G,ee),Ge.length>0&&Ar(Ge,G,ee),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Nl(A,G,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[te.id]===void 0&&(p.state.transmissionRenderTarget[te.id]=new dn(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?kn:ni,minFilter:zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const Ie=p.state.transmissionRenderTarget[te.id],Ge=te.viewport||C;Ie.setSize(Ge.z,Ge.w);const Xe=_.getRenderTarget();_.setRenderTarget(Ie),_.getClearColor(O),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),X&&Be.render(ee);const $e=_.toneMapping;_.toneMapping=yi;const Ke=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),p.setupLightsView(te),ce===!0&&q.setGlobalState(_.clippingPlanes,te),Ar(A,ee,te),R.updateMultisampleRenderTarget(Ie),R.updateRenderTargetMipmap(Ie),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let je=0,ot=G.length;je<ot;je++){const Mt=G[je],bt=Mt.object,Zt=Mt.geometry,ht=Mt.material,Ye=Mt.group;if(ht.side===Kn&&bt.layers.test(te.layers)){const Hn=ht.side;ht.side=sn,ht.needsUpdate=!0,kl(bt,ee,te,Zt,ht,Ye),ht.side=Hn,ht.needsUpdate=!0,Ze=!0}}Ze===!0&&(R.updateMultisampleRenderTarget(Ie),R.updateRenderTargetMipmap(Ie))}_.setRenderTarget(Xe),_.setClearColor(O,j),Ke!==void 0&&(te.viewport=Ke),_.toneMapping=$e}function Ar(A,G,ee){const te=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Ie=A.length;W<Ie;W++){const Ge=A[W],Xe=Ge.object,$e=Ge.geometry,Ke=te===null?Ge.material:te,Ze=Ge.group;Xe.layers.test(ee.layers)&&kl(Xe,G,ee,$e,Ke,Ze)}}function kl(A,G,ee,te,W,Ie){A.onBeforeRender(_,G,ee,te,W,Ie),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(_,G,ee,te,A,Ie),W.transparent===!0&&W.side===Kn&&W.forceSinglePass===!1?(W.side=sn,W.needsUpdate=!0,_.renderBufferDirect(ee,G,te,W,A,Ie),W.side=Mi,W.needsUpdate=!0,_.renderBufferDirect(ee,G,te,W,A,Ie),W.side=Kn):_.renderBufferDirect(ee,G,te,W,A,Ie),A.onAfterRender(_,G,ee,te,W,Ie)}function Cr(A,G,ee){G.isScene!==!0&&(G=pe);const te=ge.get(A),W=p.state.lights,Ie=p.state.shadowsArray,Ge=W.state.version,Xe=be.getParameters(A,W.state,Ie,G,ee),$e=be.getProgramCacheKey(Xe);let Ke=te.programs;te.environment=A.isMeshStandardMaterial?G.environment:null,te.fog=G.fog,te.envMap=(A.isMeshStandardMaterial?z:b).get(A.envMap||te.environment),te.envMapRotation=te.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",Je),Ke=new Map,te.programs=Ke);let Ze=Ke.get($e);if(Ze!==void 0){if(te.currentProgram===Ze&&te.lightsStateVersion===Ge)return Ol(A,Xe),Ze}else Xe.uniforms=be.getUniforms(A),A.onBeforeCompile(Xe,_),Ze=be.acquireProgram(Xe,$e),Ke.set($e,Ze),te.uniforms=Xe.uniforms;const je=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=q.uniform),Ol(A,Xe),te.needsLights=Nf(A),te.lightsStateVersion=Ge,te.needsLights&&(je.ambientLightColor.value=W.state.ambient,je.lightProbe.value=W.state.probe,je.directionalLights.value=W.state.directional,je.directionalLightShadows.value=W.state.directionalShadow,je.spotLights.value=W.state.spot,je.spotLightShadows.value=W.state.spotShadow,je.rectAreaLights.value=W.state.rectArea,je.ltc_1.value=W.state.rectAreaLTC1,je.ltc_2.value=W.state.rectAreaLTC2,je.pointLights.value=W.state.point,je.pointLightShadows.value=W.state.pointShadow,je.hemisphereLights.value=W.state.hemi,je.directionalShadowMap.value=W.state.directionalShadowMap,je.directionalShadowMatrix.value=W.state.directionalShadowMatrix,je.spotShadowMap.value=W.state.spotShadowMap,je.spotLightMatrix.value=W.state.spotLightMatrix,je.spotLightMap.value=W.state.spotLightMap,je.pointShadowMap.value=W.state.pointShadowMap,je.pointShadowMatrix.value=W.state.pointShadowMatrix),te.currentProgram=Ze,te.uniformsList=null,Ze}function Fl(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=go.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function Ol(A,G){const ee=ge.get(A);ee.outputColorSpace=G.outputColorSpace,ee.batching=G.batching,ee.batchingColor=G.batchingColor,ee.instancing=G.instancing,ee.instancingColor=G.instancingColor,ee.instancingMorph=G.instancingMorph,ee.skinning=G.skinning,ee.morphTargets=G.morphTargets,ee.morphNormals=G.morphNormals,ee.morphColors=G.morphColors,ee.morphTargetsCount=G.morphTargetsCount,ee.numClippingPlanes=G.numClippingPlanes,ee.numIntersection=G.numClipIntersection,ee.vertexAlphas=G.vertexAlphas,ee.vertexTangents=G.vertexTangents,ee.toneMapping=G.toneMapping}function Df(A,G,ee,te,W){G.isScene!==!0&&(G=pe),R.resetTextureUnits();const Ie=G.fog,Ge=te.isMeshStandardMaterial?G.environment:null,Xe=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ds,$e=(te.isMeshStandardMaterial?z:b).get(te.envMap||Ge),Ke=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ze=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),je=!!ee.morphAttributes.position,ot=!!ee.morphAttributes.normal,Mt=!!ee.morphAttributes.color;let bt=yi;te.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(bt=_.toneMapping);const Zt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ht=Zt!==void 0?Zt.length:0,Ye=ge.get(te),Hn=p.state.lights;if(ce===!0&&(we===!0||A!==y)){const fn=A===y&&te.id===w;q.setState(te,A,fn)}let ut=!1;te.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Hn.state.version||Ye.outputColorSpace!==Xe||W.isBatchedMesh&&Ye.batching===!1||!W.isBatchedMesh&&Ye.batching===!0||W.isBatchedMesh&&Ye.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ye.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ye.instancing===!1||!W.isInstancedMesh&&Ye.instancing===!0||W.isSkinnedMesh&&Ye.skinning===!1||!W.isSkinnedMesh&&Ye.skinning===!0||W.isInstancedMesh&&Ye.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ye.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ye.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ye.instancingMorph===!1&&W.morphTexture!==null||Ye.envMap!==$e||te.fog===!0&&Ye.fog!==Ie||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==q.numPlanes||Ye.numIntersection!==q.numIntersection)||Ye.vertexAlphas!==Ke||Ye.vertexTangents!==Ze||Ye.morphTargets!==je||Ye.morphNormals!==ot||Ye.morphColors!==Mt||Ye.toneMapping!==bt||Ye.morphTargetsCount!==ht)&&(ut=!0):(ut=!0,Ye.__version=te.version);let yn=Ye.currentProgram;ut===!0&&(yn=Cr(te,G,W));let es=!1,on=!1,Bs=!1;const St=yn.getUniforms(),Ln=Ye.uniforms;if(Q.useProgram(yn.program)&&(es=!0,on=!0,Bs=!0),te.id!==w&&(w=te.id,on=!0),es||y!==A){Q.buffers.depth.getReversed()?(fe.copy(A.projectionMatrix),Bp(fe),zp(fe),St.setValue(L,"projectionMatrix",fe)):St.setValue(L,"projectionMatrix",A.projectionMatrix),St.setValue(L,"viewMatrix",A.matrixWorldInverse);const ri=St.map.cameraPosition;ri!==void 0&&ri.setValue(L,Fe.setFromMatrixPosition(A.matrixWorld)),de.logarithmicDepthBuffer&&St.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&St.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,on=!0,Bs=!0)}if(W.isSkinnedMesh){St.setOptional(L,W,"bindMatrix"),St.setOptional(L,W,"bindMatrixInverse");const fn=W.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),St.setValue(L,"boneTexture",fn.boneTexture,R))}W.isBatchedMesh&&(St.setOptional(L,W,"batchingTexture"),St.setValue(L,"batchingTexture",W._matricesTexture,R),St.setOptional(L,W,"batchingIdTexture"),St.setValue(L,"batchingIdTexture",W._indirectTexture,R),St.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&St.setValue(L,"batchingColorTexture",W._colorsTexture,R));const zs=ee.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0)&&he.update(W,ee,yn),(on||Ye.receiveShadow!==W.receiveShadow)&&(Ye.receiveShadow=W.receiveShadow,St.setValue(L,"receiveShadow",W.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Ln.envMap.value=$e,Ln.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&G.environment!==null&&(Ln.envMapIntensity.value=G.environmentIntensity),on&&(St.setValue(L,"toneMappingExposure",_.toneMappingExposure),Ye.needsLights&&Uf(Ln,Bs),Ie&&te.fog===!0&&Ae.refreshFogUniforms(Ln,Ie),Ae.refreshMaterialUniforms(Ln,te,V,$,p.state.transmissionRenderTarget[A.id]),go.upload(L,Fl(Ye),Ln,R)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(go.upload(L,Fl(Ye),Ln,R),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&St.setValue(L,"center",W.center),St.setValue(L,"modelViewMatrix",W.modelViewMatrix),St.setValue(L,"normalMatrix",W.normalMatrix),St.setValue(L,"modelMatrix",W.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const fn=te.uniformsGroups;for(let ri=0,oi=fn.length;ri<oi;ri++){const Bl=fn[ri];k.update(Bl,yn),k.bind(Bl,yn)}}return yn}function Uf(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Nf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,G,ee){ge.get(A.texture).__webglTexture=G,ge.get(A.depthTexture).__webglTexture=ee;const te=ge.get(A);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){const ee=ge.get(A);ee.__webglFramebuffer=G,ee.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,ee=0){P=A,E=G,T=ee;let te=!0,W=null,Ie=!1,Ge=!1;if(A){const $e=ge.get(A);if($e.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(L.FRAMEBUFFER,null),te=!1;else if($e.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if($e.__hasExternalTextures)R.rebindTextures(A,ge.get(A.texture).__webglTexture,ge.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const je=A.depthTexture;if($e.__boundDepthTexture!==je){if(je!==null&&ge.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ge=!0);const Ze=ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[G])?W=Ze[G][ee]:W=Ze[G],Ie=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?W=ge.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?W=Ze[ee]:W=Ze,C.copy(A.viewport),N.copy(A.scissor),F=A.scissorTest}else C.copy(xe).multiplyScalar(V).floor(),N.copy(Te).multiplyScalar(V).floor(),F=Ne;if(Q.bindFramebuffer(L.FRAMEBUFFER,W)&&te&&Q.drawBuffers(A,W),Q.viewport(C),Q.scissor(N),Q.setScissorTest(F),Ie){const $e=ge.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+G,$e.__webglTexture,ee)}else if(Ge){const $e=ge.get(A.texture),Ke=G||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,$e.__webglTexture,ee||0,Ke)}w=-1},this.readRenderTargetPixels=function(A,G,ee,te,W,Ie,Ge){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe){Q.bindFramebuffer(L.FRAMEBUFFER,Xe);try{const $e=A.texture,Ke=$e.format,Ze=$e.type;if(!de.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-te&&ee>=0&&ee<=A.height-W&&L.readPixels(G,ee,te,W,He.convert(Ke),He.convert(Ze),Ie)}finally{const $e=P!==null?ge.get(P).__webglFramebuffer:null;Q.bindFramebuffer(L.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(A,G,ee,te,W,Ie,Ge){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe){const $e=A.texture,Ke=$e.format,Ze=$e.type;if(!de.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=A.width-te&&ee>=0&&ee<=A.height-W){Q.bindFramebuffer(L.FRAMEBUFFER,Xe);const je=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.bufferData(L.PIXEL_PACK_BUFFER,Ie.byteLength,L.STREAM_READ),L.readPixels(G,ee,te,W,He.convert(Ke),He.convert(Ze),0);const ot=P!==null?ge.get(P).__webglFramebuffer:null;Q.bindFramebuffer(L.FRAMEBUFFER,ot);const Mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Op(L,Mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ie),L.deleteBuffer(je),L.deleteSync(Mt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,G=null,ee=0){A.isTexture!==!0&&(Qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1]);const te=Math.pow(2,-ee),W=Math.floor(A.image.width*te),Ie=Math.floor(A.image.height*te),Ge=G!==null?G.x:0,Xe=G!==null?G.y:0;R.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,ee,0,0,Ge,Xe,W,Ie),Q.unbindTexture()},this.copyTextureToTexture=function(A,G,ee=null,te=null,W=0){A.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,A=arguments[1],G=arguments[2],W=arguments[3]||0,ee=null);let Ie,Ge,Xe,$e,Ke,Ze,je,ot,Mt;const bt=A.isCompressedTexture?A.mipmaps[W]:A.image;ee!==null?(Ie=ee.max.x-ee.min.x,Ge=ee.max.y-ee.min.y,Xe=ee.isBox3?ee.max.z-ee.min.z:1,$e=ee.min.x,Ke=ee.min.y,Ze=ee.isBox3?ee.min.z:0):(Ie=bt.width,Ge=bt.height,Xe=bt.depth||1,$e=0,Ke=0,Ze=0),te!==null?(je=te.x,ot=te.y,Mt=te.z):(je=0,ot=0,Mt=0);const Zt=He.convert(G.format),ht=He.convert(G.type);let Ye;G.isData3DTexture?(R.setTexture3D(G,0),Ye=L.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(R.setTexture2DArray(G,0),Ye=L.TEXTURE_2D_ARRAY):(R.setTexture2D(G,0),Ye=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment);const Hn=L.getParameter(L.UNPACK_ROW_LENGTH),ut=L.getParameter(L.UNPACK_IMAGE_HEIGHT),yn=L.getParameter(L.UNPACK_SKIP_PIXELS),es=L.getParameter(L.UNPACK_SKIP_ROWS),on=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,bt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,bt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,$e),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ke),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ze);const Bs=A.isDataArrayTexture||A.isData3DTexture,St=G.isDataArrayTexture||G.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Ln=ge.get(A),zs=ge.get(G),fn=ge.get(Ln.__renderTarget),ri=ge.get(zs.__renderTarget);Q.bindFramebuffer(L.READ_FRAMEBUFFER,fn.__webglFramebuffer),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let oi=0;oi<Xe;oi++)Bs&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ge.get(A).__webglTexture,W,Ze+oi),A.isDepthTexture?(St&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ge.get(G).__webglTexture,W,Mt+oi),L.blitFramebuffer($e,Ke,Ie,Ge,je,ot,Ie,Ge,L.DEPTH_BUFFER_BIT,L.NEAREST)):St?L.copyTexSubImage3D(Ye,W,je,ot,Mt+oi,$e,Ke,Ie,Ge):L.copyTexSubImage2D(Ye,W,je,ot,Mt+oi,$e,Ke,Ie,Ge);Q.bindFramebuffer(L.READ_FRAMEBUFFER,null),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else St?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Ye,W,je,ot,Mt,Ie,Ge,Xe,Zt,ht,bt.data):G.isCompressedArrayTexture?L.compressedTexSubImage3D(Ye,W,je,ot,Mt,Ie,Ge,Xe,Zt,bt.data):L.texSubImage3D(Ye,W,je,ot,Mt,Ie,Ge,Xe,Zt,ht,bt):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,W,je,ot,Ie,Ge,Zt,ht,bt.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,W,je,ot,bt.width,bt.height,Zt,bt.data):L.texSubImage2D(L.TEXTURE_2D,W,je,ot,Ie,Ge,Zt,ht,bt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Hn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut),L.pixelStorei(L.UNPACK_SKIP_PIXELS,yn),L.pixelStorei(L.UNPACK_SKIP_ROWS,es),L.pixelStorei(L.UNPACK_SKIP_IMAGES,on),W===0&&G.generateMipmaps&&L.generateMipmap(Ye),Q.unbindTexture()},this.copyTextureToTexture3D=function(A,G,ee=null,te=null,W=0){return A.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,A=arguments[2],G=arguments[3],W=arguments[4]||0),Qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,ee,te,W)},this.initRenderTarget=function(A){ge.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),Q.unbindTexture()},this.resetState=function(){E=0,T=0,P=null,Q.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}class fl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new fl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class q_ extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nc,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new D;class Sd{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vh=new D,Gh=new lt,Wh=new lt,Y_=new D,Xh=new et,Kr=new D,Ra=new si,$h=new et,Pa=new wr;class vM extends S{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wl,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Si),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Kr),this.boundingBox.expandByPoint(Kr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Kr),this.boundingSphere.expandByPoint(Kr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ra.copy(this.boundingSphere),Ra.applyMatrix4(s),e.ray.intersectsSphere(Ra)!==!1&&($h.copy(s).invert(),Pa.copy(e.ray).applyMatrix4($h),!(this.boundingBox!==null&&Pa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Gh.fromBufferAttribute(s.attributes.skinIndex,e),Wh.fromBufferAttribute(s.attributes.skinWeight,e),Vh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Wh.getComponent(r);if(o!==0){const a=Gh.getComponent(r);Xh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Y_.copy(Vh).applyMatrix4(Xh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class K_ extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ed extends Wt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Kt,h=Kt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jh=new et,J_=new et;class Td{constructor(e=[],t=[]){this.uuid=vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:J_;jh.multiplyMatrices(a,t[r]),jh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Td(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ed(t,e,e,mn,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new K_),this.bones.push(o),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class qh extends rn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ms=new et,Yh=new et,Jr=[],Kh=new Si,Z_=new et,Xs=new S,$s=new si;class Sn extends S{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Z_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),Kh.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(Kh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),$s.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union($s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),e.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ms),Yh.multiplyMatrices(n,ms),Xs.matrixWorld=Yh,Xs.raycast(e,Jr);for(let o=0,a=Jr.length;o<a;o++){const c=Jr[o];c.instanceId=r,c.object=this,t.push(c)}Jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ed(new Float32Array(s*this.count),s,this.count,sl,An));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ad extends Ki{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bo=new D,So=new D,Jh=new et,js=new wr,Zr=new si,La=new D,Zh=new D;class Cd extends Et{constructor(e=new Bt,t=new Ad){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)bo.fromBufferAttribute(t,s-1),So.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=bo.distanceTo(So);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,e.ray.intersectsSphere(Zr)===!1)return;Jh.copy(s).invert(),js.copy(e.ray).applyMatrix4(Jh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=h.getX(v),M=h.getX(v+1),x=Qr(this,e,js,c,p,M);x&&t.push(x)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=Qr(this,e,js,c,v,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=Qr(this,e,js,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Qr(this,e,js,c,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Qr(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(bo.fromBufferAttribute(o,s),So.fromBufferAttribute(o,r),t.distanceSqToSegment(bo,So,La,Zh)>n)return;La.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(La);if(!(c<e.near||c>e.far))return{distance:c,point:Zh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Qh=new D,eu=new D;class Q_ extends Cd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Qh.fromBufferAttribute(t,s),eu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Qh.distanceTo(eu);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _M extends Cd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ex extends Ki{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tu=new et,Fc=new wr,eo=new si,to=new D;class xM extends Et{constructor(e=new Bt,t=new ex){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;tu.copy(s).invert(),Fc.copy(e.ray).applyMatrix4(tu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);to.fromBufferAttribute(u,m),nu(to,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)to.fromBufferAttribute(u,g),nu(to,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function nu(i,e,t,n,s,r,o){const a=Fc.distanceSqToPoint(i);if(a<t){const c=new D;Fc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Ce:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,s=[],r=[],o=[],a=new D,c=new et;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(It(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(It(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class pl extends On{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ce){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class tx extends pl{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ml(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const no=new D,Ia=new ml,Da=new ml,Ua=new ml;class nx extends On{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(no.subVectors(s[0],s[1]).add(s[0]),l=no);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(no.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=no),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ia.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),Da.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),Ua.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Ia.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Da.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ua.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Ia.calc(c),Da.calc(c),Ua.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function iu(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function ix(i,e){const t=1-i;return t*t*e}function sx(i,e){return 2*(1-i)*i*e}function rx(i,e){return i*i*e}function rr(i,e,t,n){return ix(i,e)+sx(i,t)+rx(i,n)}function ox(i,e){const t=1-i;return t*t*t*e}function ax(i,e){const t=1-i;return 3*t*t*i*e}function cx(i,e){return 3*(1-i)*i*i*e}function lx(i,e){return i*i*i*e}function or(i,e,t,n,s){return ox(i,e)+ax(i,t)+cx(i,n)+lx(i,s)}class Rd extends On{constructor(e=new Ce,t=new Ce,n=new Ce,s=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ce){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(e,s.x,r.x,o.x,a.x),or(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hx extends On{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(e,s.x,r.x,o.x,a.x),or(e,s.y,r.y,o.y,a.y),or(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pd extends On{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ux extends On{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ld extends On{constructor(e=new Ce,t=new Ce,n=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ce){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(rr(e,s.x,r.x,o.x),rr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dx extends On{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(rr(e,s.x,r.x,o.x),rr(e,s.y,r.y,o.y),rr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Id extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(iu(a,c.x,l.x,h.x,u.x),iu(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Ce().fromArray(s))}return this}}var Oc=Object.freeze({__proto__:null,ArcCurve:tx,CatmullRomCurve3:nx,CubicBezierCurve:Rd,CubicBezierCurve3:hx,EllipseCurve:pl,LineCurve:Pd,LineCurve3:ux,QuadraticBezierCurve:Ld,QuadraticBezierCurve3:dx,SplineCurve:Id});class fx extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Oc[s.type]().fromJSON(s))}return this}}class Bc extends fx{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Pd(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Ld(this.currentPoint.clone(),new Ce(e,t),new Ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Rd(this.currentPoint.clone(),new Ce(e,t),new Ce(n,s),new Ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Id(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new pl(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class gl extends Bt{constructor(e=[new Ce(0,-.5),new Ce(.5,0),new Ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=It(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new D,d=new Ce,f=new D,g=new D,v=new D;let m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let M=0;M<=t;M++){const x=n+M*h*s,_=Math.sin(x),I=Math.cos(x);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*_,u.y=e[E].y,u.z=e[E].x*I,o.push(u.x,u.y,u.z),d.x=M/t,d.y=E/(e.length-1),a.push(d.x,d.y);const T=c[3*E+0]*_,P=c[3*E+1],w=c[3*E+0]*I;l.push(T,P,w)}}for(let M=0;M<t;M++)for(let x=0;x<e.length-1;x++){const _=x+M*e.length,I=_,E=_+e.length,T=_+e.length+1,P=_+1;r.push(I,E,P),r.push(T,P,E)}this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("uv",new pt(a,2)),this.setAttribute("normal",new pt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.points,e.segments,e.phiStart,e.phiLength)}}class nn extends gl{constructor(e=1,t=1,n=4,s=8){const r=new Bc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new nn(e.radius,e.length,e.capSegments,e.radialSegments)}}class Se extends Bt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(f,2));function M(){const _=new D,I=new D;let E=0;const T=(t-e)/n;for(let P=0;P<=r;P++){const w=[],y=P/r,C=y*(t-e)+e;for(let N=0;N<=s;N++){const F=N/s,O=F*c+a,j=Math.sin(O),H=Math.cos(O);I.x=C*j,I.y=-y*n+m,I.z=C*H,u.push(I.x,I.y,I.z),_.set(j,T,H).normalize(),d.push(_.x,_.y,_.z),f.push(F,1-y),w.push(g++)}v.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){const y=v[w][P],C=v[w+1][P],N=v[w+1][P+1],F=v[w][P+1];(e>0||w!==0)&&(h.push(y,C,F),E+=3),(t>0||w!==r-1)&&(h.push(C,N,F),E+=3)}l.addGroup(p,E,0),p+=E}function x(_){const I=g,E=new Ce,T=new D;let P=0;const w=_===!0?e:t,y=_===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const C=g;for(let N=0;N<=s;N++){const O=N/s*c+a,j=Math.cos(O),H=Math.sin(O);T.x=w*H,T.y=m*y,T.z=w*j,u.push(T.x,T.y,T.z),d.push(0,y,0),E.x=j*.5+.5,E.y=H*.5*y+.5,f.push(E.x,E.y),g++}for(let N=0;N<s;N++){const F=I+N,O=C+N;_===!0?h.push(O,O+1,F):h.push(O+1,O,F),P+=3}l.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Se(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mt extends Se{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new mt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mr extends Bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(r.slice(),3)),this.setAttribute("uv",new pt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new D,_=new D,I=new D;for(let E=0;E<t.length;E+=3)f(t[E+0],x),f(t[E+1],_),f(t[E+2],I),c(x,_,I,M)}function c(M,x,_,I){const E=I+1,T=[];for(let P=0;P<=E;P++){T[P]=[];const w=M.clone().lerp(_,P/E),y=x.clone().lerp(_,P/E),C=E-P;for(let N=0;N<=C;N++)N===0&&P===E?T[P][N]=w:T[P][N]=w.clone().lerp(y,N/C)}for(let P=0;P<E;P++)for(let w=0;w<2*(E-P)-1;w++){const y=Math.floor(w/2);w%2===0?(d(T[P][y+1]),d(T[P+1][y]),d(T[P][y])):(d(T[P][y+1]),d(T[P+1][y+1]),d(T[P+1][y]))}}function l(M){const x=new D;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(M),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){const M=new D;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const _=m(M)/2/Math.PI+.5,I=p(M)/Math.PI+.5;o.push(_,1-I)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){const x=o[M+0],_=o[M+2],I=o[M+4],E=Math.max(x,_,I),T=Math.min(x,_,I);E>.9&&T<.1&&(x<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,x){const _=M*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function g(){const M=new D,x=new D,_=new D,I=new D,E=new Ce,T=new Ce,P=new Ce;for(let w=0,y=0;w<r.length;w+=9,y+=6){M.set(r[w+0],r[w+1],r[w+2]),x.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),E.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),I.copy(M).add(x).add(_).divideScalar(3);const C=m(I);v(E,y+0,M,C),v(T,y+2,x,C),v(P,y+4,_,C)}}function v(M,x,_,I){I<0&&M.x===1&&(o[x]=M.x-1),_.x===0&&_.z===0&&(o[x]=I/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.vertices,e.indices,e.radius,e.details)}}class Jt extends Mr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Jt(e.radius,e.detail)}}class vl extends Bc{constructor(e){super(e),this.uuid=vn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Bc().fromJSON(s))}return this}}const px={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Dd(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=xx(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return dr(r,o,t,a,c,f,0),o}};function Dd(i,e,t,n,s){let r,o;if(s===Px(i,e,t,n)>0)for(r=e;r<t;r+=n)o=su(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=su(r,i[r],i[r+1],o);return o&&Wo(o,o.next)&&(pr(o),o=o.next),o}function Xi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Wo(t,t.next)||Tt(t.prev,t,t.next)===0)){if(pr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function dr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Sx(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?gx(i,n,s,r):mx(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),pr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=vx(Xi(i),e,t),dr(i,e,t,n,s,r,2)):o===2&&_x(i,e,t,n,s,r):dr(Xi(i),e,t,n,s,r,1);break}}}function mx(i){const e=i.prev,t=i,n=i.next;if(Tt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&xs(s,a,r,c,o,l,g.x,g.y)&&Tt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gx(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Tt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=zc(f,g,e,t,n),M=zc(v,m,e,t,n);let x=i.prevZ,_=i.nextZ;for(;x&&x.z>=p&&_&&_.z<=M;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&xs(a,h,c,u,l,d,x.x,x.y)&&Tt(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&xs(a,h,c,u,l,d,_.x,_.y)&&Tt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&xs(a,h,c,u,l,d,x.x,x.y)&&Tt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&xs(a,h,c,u,l,d,_.x,_.y)&&Tt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function vx(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Wo(s,r)&&Ud(s,n,n.next,r)&&fr(s,r)&&fr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),pr(n),pr(n.next),n=i=r),n=n.next}while(n!==i);return Xi(n)}function _x(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ax(o,a)){let c=Nd(o,a);o=Xi(o,o.next),c=Xi(c,c.next),dr(o,e,t,n,s,r,0),dr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function xx(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Dd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Tx(l));for(s.sort(yx),r=0;r<s.length;r++)t=wx(s[r],t);return t}function yx(i,e){return i.x-e.x}function wx(i,e){const t=Mx(i,e);if(!t)return e;const n=Nd(t,i);return Xi(n,n.next),Xi(t,t.next)}function Mx(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&xs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),fr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&bx(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function bx(i,e){return Tt(i.prev,i,e.prev)<0&&Tt(e.next,i,i.next)<0}function Sx(i,e,t,n){let s=i;do s.z===0&&(s.z=zc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ex(s)}function Ex(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function zc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Tx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function xs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Ax(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Cx(i,e)&&(fr(i,e)&&fr(e,i)&&Rx(i,e)&&(Tt(i.prev,i,e.prev)||Tt(i,e.prev,e))||Wo(i,e)&&Tt(i.prev,i,i.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Wo(i,e){return i.x===e.x&&i.y===e.y}function Ud(i,e,t,n){const s=so(Tt(i,e,t)),r=so(Tt(i,e,n)),o=so(Tt(t,n,i)),a=so(Tt(t,n,e));return!!(s!==r&&o!==a||s===0&&io(i,t,e)||r===0&&io(i,n,e)||o===0&&io(t,i,n)||a===0&&io(t,e,n))}function io(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function so(i){return i>0?1:i<0?-1:0}function Cx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ud(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function fr(i,e){return Tt(i.prev,i,i.next)<0?Tt(i,e,i.next)>=0&&Tt(i,i.prev,e)>=0:Tt(i,e,i.prev)<0||Tt(i,i.next,e)<0}function Rx(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Nd(i,e){const t=new Hc(i.i,i.x,i.y),n=new Hc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function su(i,e,t,n){const s=new Hc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function pr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Px(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ar{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return ar.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];ru(e),ou(n,e);let o=e.length;t.forEach(ru);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,ou(n,t[c]);const a=px.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function ru(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ou(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Xo extends Bt{constructor(e=new vl([new Ce(.5,.5),new Ce(-.5,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new pt(s,3)),this.setAttribute("uv",new pt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Lx;let x,_=!1,I,E,T,P;p&&(x=p.getSpacedPoints(h),_=!0,d=!1,I=p.computeFrenetFrames(h,!1),E=new D,T=new D,P=new D),d||(m=0,f=0,g=0,v=0);const w=a.extractPoints(l);let y=w.shape;const C=w.holes;if(!ar.isClockWise(y)){y=y.reverse();for(let X=0,ne=C.length;X<ne;X++){const L=C[X];ar.isClockWise(L)&&(C[X]=L.reverse())}}const F=ar.triangulateShape(y,C),O=y;for(let X=0,ne=C.length;X<ne;X++){const L=C[X];y=y.concat(L)}function j(X,ne,L){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(ne,L)}const H=y.length,$=F.length;function V(X,ne,L){let Pe,Z,de;const Q=X.x-ne.x,Ee=X.y-ne.y,ge=L.x-X.x,R=L.y-X.y,b=Q*Q+Ee*Ee,z=Q*R-Ee*ge;if(Math.abs(z)>Number.EPSILON){const J=Math.sqrt(b),re=Math.sqrt(ge*ge+R*R),Y=ne.x-Ee/J,be=ne.y+Q/J,Ae=L.x-R/re,Re=L.y+ge/re,ae=((Ae-Y)*R-(Re-be)*ge)/(Q*R-Ee*ge);Pe=Y+Q*ae-X.x,Z=be+Ee*ae-X.y;const q=Pe*Pe+Z*Z;if(q<=2)return new Ce(Pe,Z);de=Math.sqrt(q/2)}else{let J=!1;Q>Number.EPSILON?ge>Number.EPSILON&&(J=!0):Q<-Number.EPSILON?ge<-Number.EPSILON&&(J=!0):Math.sign(Ee)===Math.sign(R)&&(J=!0),J?(Pe=-Ee,Z=Q,de=Math.sqrt(b)):(Pe=Q,Z=Ee,de=Math.sqrt(b/2))}return new Ce(Pe/de,Z/de)}const se=[];for(let X=0,ne=O.length,L=ne-1,Pe=X+1;X<ne;X++,L++,Pe++)L===ne&&(L=0),Pe===ne&&(Pe=0),se[X]=V(O[X],O[L],O[Pe]);const _e=[];let xe,Te=se.concat();for(let X=0,ne=C.length;X<ne;X++){const L=C[X];xe=[];for(let Pe=0,Z=L.length,de=Z-1,Q=Pe+1;Pe<Z;Pe++,de++,Q++)de===Z&&(de=0),Q===Z&&(Q=0),xe[Pe]=V(L[Pe],L[de],L[Q]);_e.push(xe),Te=Te.concat(xe)}for(let X=0;X<m;X++){const ne=X/m,L=f*Math.cos(ne*Math.PI/2),Pe=g*Math.sin(ne*Math.PI/2)+v;for(let Z=0,de=O.length;Z<de;Z++){const Q=j(O[Z],se[Z],Pe);fe(Q.x,Q.y,-L)}for(let Z=0,de=C.length;Z<de;Z++){const Q=C[Z];xe=_e[Z];for(let Ee=0,ge=Q.length;Ee<ge;Ee++){const R=j(Q[Ee],xe[Ee],Pe);fe(R.x,R.y,-L)}}}const Ne=g+v;for(let X=0;X<H;X++){const ne=d?j(y[X],Te[X],Ne):y[X];_?(T.copy(I.normals[0]).multiplyScalar(ne.x),E.copy(I.binormals[0]).multiplyScalar(ne.y),P.copy(x[0]).add(T).add(E),fe(P.x,P.y,P.z)):fe(ne.x,ne.y,0)}for(let X=1;X<=h;X++)for(let ne=0;ne<H;ne++){const L=d?j(y[ne],Te[ne],Ne):y[ne];_?(T.copy(I.normals[X]).multiplyScalar(L.x),E.copy(I.binormals[X]).multiplyScalar(L.y),P.copy(x[X]).add(T).add(E),fe(P.x,P.y,P.z)):fe(L.x,L.y,u/h*X)}for(let X=m-1;X>=0;X--){const ne=X/m,L=f*Math.cos(ne*Math.PI/2),Pe=g*Math.sin(ne*Math.PI/2)+v;for(let Z=0,de=O.length;Z<de;Z++){const Q=j(O[Z],se[Z],Pe);fe(Q.x,Q.y,u+L)}for(let Z=0,de=C.length;Z<de;Z++){const Q=C[Z];xe=_e[Z];for(let Ee=0,ge=Q.length;Ee<ge;Ee++){const R=j(Q[Ee],xe[Ee],Pe);_?fe(R.x,R.y+x[h-1].y,x[h-1].x+L):fe(R.x,R.y,u+L)}}}K(),ce();function K(){const X=s.length/3;if(d){let ne=0,L=H*ne;for(let Pe=0;Pe<$;Pe++){const Z=F[Pe];De(Z[2]+L,Z[1]+L,Z[0]+L)}ne=h+m*2,L=H*ne;for(let Pe=0;Pe<$;Pe++){const Z=F[Pe];De(Z[0]+L,Z[1]+L,Z[2]+L)}}else{for(let ne=0;ne<$;ne++){const L=F[ne];De(L[2],L[1],L[0])}for(let ne=0;ne<$;ne++){const L=F[ne];De(L[0]+H*h,L[1]+H*h,L[2]+H*h)}}n.addGroup(X,s.length/3-X,0)}function ce(){const X=s.length/3;let ne=0;we(O,ne),ne+=O.length;for(let L=0,Pe=C.length;L<Pe;L++){const Z=C[L];we(Z,ne),ne+=Z.length}n.addGroup(X,s.length/3-X,1)}function we(X,ne){let L=X.length;for(;--L>=0;){const Pe=L;let Z=L-1;Z<0&&(Z=X.length-1);for(let de=0,Q=h+m*2;de<Q;de++){const Ee=H*de,ge=H*(de+1),R=ne+Pe+Ee,b=ne+Z+Ee,z=ne+Z+ge,J=ne+Pe+ge;Fe(R,b,z,J)}}}function fe(X,ne,L){c.push(X),c.push(ne),c.push(L)}function De(X,ne,L){ke(X),ke(ne),ke(L);const Pe=s.length/3,Z=M.generateTopUV(n,s,Pe-3,Pe-2,Pe-1);pe(Z[0]),pe(Z[1]),pe(Z[2])}function Fe(X,ne,L,Pe){ke(X),ke(ne),ke(Pe),ke(ne),ke(L),ke(Pe);const Z=s.length/3,de=M.generateSideWallUV(n,s,Z-6,Z-3,Z-2,Z-1);pe(de[0]),pe(de[1]),pe(de[3]),pe(de[1]),pe(de[2]),pe(de[3])}function ke(X){s.push(c[X*3+0]),s.push(c[X*3+1]),s.push(c[X*3+2])}function pe(X){r.push(X.x),r.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ix(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Oc[s.type]().fromJSON(s)),new Xo(n,e.options)}}const Lx={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Ce(r,o),new Ce(a,c),new Ce(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Ce(o,1-c),new Ce(l,1-u),new Ce(d,1-g),new Ce(v,1-p)]:[new Ce(a,1-c),new Ce(h,1-u),new Ce(f,1-g),new Ce(m,1-p)]}};function Ix(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class _n extends Mr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _n(e.radius,e.detail)}}class _l extends Mr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _l(e.radius,e.detail)}}class yt extends Bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new D,d=new D,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let _=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let I=0;I<=t;I++){const E=I/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(E+_,1-x),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const x=h[p][M+1],_=h[p][M],I=h[p+1][M],E=h[p+1][M+1];(p!==0||o>0)&&f.push(x,_,E),(p!==n-1||c<Math.PI)&&f.push(_,I,E)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $i extends Bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,M=(s+1)*f+g;o.push(v,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Dx extends Gt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class ct extends Ki{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ad,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yM extends ct{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ro(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ux(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Nx(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function au(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function kd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class $o{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class kx extends $o{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xl,endingEnd:Xl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $l:r=e,a=2*t-n;break;case jl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $l:o=e,c=2*n-t;break;case jl:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*v+.5*g,_=f*m-f*v;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+M*o[l+I]+x*o[c+I]+_*o[u+I];return r}}class Fx extends $o{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class Ox extends $o{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ro(t,this.TimeBufferType),this.values=ro(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ro(e.times,Array),values:ro(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ox(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yo:t=this.InterpolantFactoryMethodDiscrete;break;case Uc:t=this.InterpolantFactoryMethodLinear;break;case ta:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return Uc;case this.InterpolantFactoryMethodSmooth:return ta}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Ux(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ta,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Uc;class Fs extends Bn{constructor(e,t,n){super(e,t,n)}}Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=yo;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Fd extends Bn{}Fd.prototype.ValueTypeName="color";class Eo extends Bn{}Eo.prototype.ValueTypeName="number";class Bx extends $o{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Yi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class jo extends Bn{InterpolantFactoryMethodLinear(e){return new Bx(this.times,this.values,this.getValueSize(),e)}}jo.prototype.ValueTypeName="quaternion";jo.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends Bn{constructor(e,t,n){super(e,t,n)}}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=yo;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class To extends Bn{}To.prototype.ValueTypeName="vector";class wM{constructor(e="",t=-1,n=[],s=up){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=vn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Hx(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=Nx(c);c=au(c,1,h),l=au(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Eo(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,v){if(f.length!==0){const m=[],p=[];kd(f,m,p,g),m.length!==0&&v.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const x=d[g];m.push(x.time),p.push(x.morphTarget===v?1:0)}s.push(new Eo(".morphTargetInfluence["+v+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(To,f+".position",d,"pos",s),n(jo,f+".quaternion",d,"rot",s),n(To,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Eo;case"vector":case"vector2":case"vector3":case"vector4":return To;case"color":return Fd;case"quaternion":return jo;case"bool":case"boolean":return Fs;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Hx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zx(i.type);if(i.times===void 0){const t=[],n=[];kd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const gi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Vx{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Gx=new Vx;class br{constructor(e){this.manager=e!==void 0?e:Gx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}br.DEFAULT_MATERIAL_NAME="__DEFAULT";const jn={};class Wx extends Error{constructor(e,t){super(e),this.response=t}}class MM extends br{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=gi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(jn[e]!==void 0){jn[e].push({onLoad:t,onProgress:n,onError:s});return}jn[e]=[],jn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=jn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){M();function M(){u.read().then(({done:x,value:_})=>{if(x)p.close();else{v+=_.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let E=0,T=h.length;E<T;E++){const P=h[E];P.onProgress&&P.onProgress(I)}p.enqueue(_),M()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Wx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{gi.add(e,l);const h=jn[e];delete jn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=jn[e];if(h===void 0)throw this.manager.itemError(e),l;delete jn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Xx extends br{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=gi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=hr("img");function c(){h(),gi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class bM extends br{constructor(e){super(e)}load(e,t,n,s){const r=new Wt,o=new Xx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class qo extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $x extends qo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Na=new et,cu=new D,lu=new D;class xl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hl,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(cu),lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lu),t.updateMatrixWorld(),Na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jx extends xl{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ps*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class SM extends qo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new jx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hu=new et,qs=new D,ka=new D;class qx extends xl{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qs.setFromMatrixPosition(e.matrixWorld),n.position.copy(qs),ka.copy(n.position),ka.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ka),n.updateMatrixWorld(),s.makeTranslation(-qs.x,-qs.y,-qs.z),hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu)}}class Yx extends qo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Kx extends xl{constructor(){super(new ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jx extends qo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Kx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class EM{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class TM extends br{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=gi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return gi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),gi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});gi.add(e,c),r.manager.itemStart(e)}}class Od{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=uu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function uu(){return performance.now()}const yl="\\[\\]\\.:\\/",Zx=new RegExp("["+yl+"]","g"),wl="[^"+yl+"]",Qx="[^"+yl.replace("\\.","")+"]",ey=/((?:WC+[\/:])*)/.source.replace("WC",wl),ty=/(WCOD+)?/.source.replace("WCOD",Qx),ny=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wl),iy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wl),sy=new RegExp("^"+ey+ty+ny+iy+"$"),ry=["material","materials","bones","map"];class oy{constructor(e,t,n){const s=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class xt{constructor(e,t,n){this.path=t,this.parsedPath=n||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,n):new xt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zx,"")}static parseTrackName(e){const t=sy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);ry.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=oy;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class AM{constructor(e,t,n,s,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const du=new et;class fu{constructor(e,t,n=0,s=1/0){this.ray=new wr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ll,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return du.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(du),this}intersectObject(e,t=!0,n=[]){return Vc(e,this,n,t),n.sort(pu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Vc(e[s],this,n,t);return n.sort(pu),n}}function pu(i,e){return i.distance-e.distance}function Vc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Vc(r[o],e,t,!0)}}class CM extends Q_{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Bt;s.setAttribute("position",new pt(t,3)),s.setAttribute("color",new pt(n,3));const r=new Ad({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new Ue,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zc);const rt={grass:7319103,grassDark:5213996,grassLight:9225297,dirt:13214826,dirtDark:11109455,soil:8016434,wheatYoung:8372026,wheatRipe:14725959,treeLeaf:3116878,treeLeafDark:2060352,trunk:8081971,roofRed:12731693,roofOrange:15238970,roofSlate:3096151,wallCream:15852484,wallWood:10185283,stone:14275783,fire:16752704,sky:12575743},mu={morning:{sunColor:16773590,sunIntensity:2.6,sunDir:[-.55,1,.45],hemiSky:13625599,hemiGround:6126133,hemiIntensity:1.1,fire:.6,exposure:1,background:12575743},afternoon:{sunColor:16766362,sunIntensity:2.4,sunDir:[.5,.8,.5],hemiSky:16769720,hemiGround:6974e3,hemiIntensity:.95,fire:.8,exposure:1,background:15980968},evening:{sunColor:16751210,sunIntensity:1.3,sunDir:[.75,.35,.2],hemiSky:8425680,hemiGround:3820084,hemiIntensity:1.05,fire:1.6,exposure:1,background:4871816}},U={...rt,grassSunlit:10277208,cobbleLight:14933715,cobbleMid:13748925,cobbleDark:11906464,woodDark:6044193,woodLight:12882528,soilDark:5913378,soilFurrow:7030313,wheatMid:12111682,wheatGold:15448382,sackBurlap:14266476,sackRope:9199154,flourBag:16249574,flourBand:13191730,windowDay:16770216,windowNight:16758861,emberRed:16734758,flameCore:16773288,smoke:15262940,daisyWhite:16579575,daisyCenter:16103470,skinFair:16175796,skinWarm:15778462,blush:15240578,ironHoop:4670272,carrotOrange:15625754,carrotGreen:3050296,cabbageEmerald:2984533,cabbageLeaf:5810276,shroomRed:13379627,shroomStem:16117734,grassTuftDark:5081641,grassTuftBright:8962626,appleRed:14034984,breadCrust:12877370,jamBerry:11018296,jamAmber:14451236,jamLid:16183522,preserveryRoof:4017e3,bakeryRoof:12080691,copperHoop:12084024,wickerBasket:11568466,scaffoldWood:10254930,tarpBlue:3892889};function ay(i=20261025){let e=i%2147483647;return e<=0&&(e+=2147483646),()=>(e=e*16807%2147483647,(e-1)/2147483646)}function Nt(i,e=!0,t=!0){return i.traverse(n=>{if(n.isMesh){const s=n,r=s.material;(Array.isArray(r)?r:[r]).some(c=>c&&c.emissive&&c.emissive.getHex()>0)?(s.castShadow=!1,s.receiveShadow=!1):(s.castShadow=e,s.receiveShadow=t)}}),i}function Yo(i,e,t,n){const s=n[0]-t[0],r=n[1]-t[1],o=s*s+r*r||1,a=Math.max(0,Math.min(1,((i-t[0])*s+(e-t[1])*r)/o));return Math.hypot(i-(t[0]+s*a),e-(t[1]+r*a))}function Ji(){return{body:new Se(.28,.25,.68,8),hoop:new Se(.288,.288,.05,8)}}function Cn(i,e=Ji()){const t=new me,n=new S(e.body,i.flat(U.wallWood,.88));n.position.y=.34;const s=i.flat(U.ironHoop,.65,.25),r=new S(e.hoop,s);r.position.y=.52;const o=new S(e.hoop,s);return o.position.y=.16,t.add(n,r,o),Nt(t)}class cy{constructor(){B(this,"cache",new Map);B(this,"windowMaterials",[])}flat(e,t=.88,n=.02){const s=`f:${e}:${t}:${n}`;let r=this.cache.get(s);return r||(r=new ct({color:e,roughness:t,metalness:n,flatShading:!0}),this.cache.set(s,r)),r}smooth(e,t=.78,n=.04){const s=`s:${e}:${t}:${n}`;let r=this.cache.get(s);return r||(r=new ct({color:e,roughness:t,metalness:n,flatShading:!1}),this.cache.set(s,r)),r}windowGlow(){if(this.windowMaterials.length>0)return this.windowMaterials[0];const e=new ct({color:U.windowDay,emissive:U.windowNight,emissiveIntensity:.45,roughness:.35,metalness:.05});return this.windowMaterials.push(e),e}setWindowEveningFactor(e){const t=.35+e*1.15;for(const n of this.windowMaterials)n.emissiveIntensity=t}dispose(){for(const e of this.cache.values())e.dispose();for(const e of this.windowMaterials)e.dispose();this.cache.clear(),this.windowMaterials.length=0}}function Hi(i,e,t,n){const s=new vl;s.moveTo(-i/2,0),s.lineTo(0,t),s.lineTo(i/2,0),s.closePath();const r=new Xo(s,{depth:e,bevelEnabled:!1});return r.translate(0,0,-e/2),new S(r,n)}function Sr(){return{body:new Jt(.3,1),neck:new Se(.12,.07,.12,6),ear:new mt(.14,.14,5),band:new Se(.29,.29,.1,8)}}function Ao(i,e,t=!1,n=Sr()){const s=new me,r=new S(n.body,i);r.scale.set(1.05,.88,.85),r.position.y=.24,s.add(r);const o=new S(n.neck,e);o.position.y=.48;const a=new S(n.ear,i);if(a.position.y=.56,a.rotation.z=.15,s.add(o,a),t){const c=new S(n.band,e);c.scale.set(1.04,1,.84),c.position.y=.25,s.add(c)}return Nt(s)}function ly(i,e=Sr(),t=Ji()){const n=new me;n.userData.buildingId="warehouse";const s=new me;s.position.set(-.75,0,-.1),n.add(s);const r=3.5,o=4.6,a=2.8,c=new S(new le(r+.3,.32,o+.3),i.flat(U.cobbleDark,.92));c.position.y=.16,s.add(c);const l=new S(new le(r,a,o),i.flat(U.roofOrange,.86));l.position.y=.32+a/2,s.add(l);const h=i.flat(U.woodDark,.9),u=new le(.2,a+.1,.2);for(const he of[-1,1])for(const ve of[-1,1]){const ze=new S(u,h);ze.position.set(he*r/2,.32+a/2,ve*o/2),s.add(ze)}const f=Hi(r+.65,o+.65,2.15,i.flat(U.roofSlate,.82));f.position.y=.32+a,s.add(f);const g=new le(.85,.65,.75),v=new le(.12,.36,.42),m=i.flat(U.roofOrange),p=i.windowGlow();for(const he of[-1.05,.95]){const ve=new me;ve.position.set(r*.32,.32+a+.85,he);const ze=new S(g,m),He=new S(v,p);He.position.x=.4,ve.add(ze,He),s.add(ve)}const M=new S(new le(1.45,1.85,.18),h);M.position.set(0,1.24,o/2+.06);const x=new S(new le(1.15,1.6,.12),i.windowGlow());x.position.set(0,1.2,o/2+.1),s.add(M,x);const _=new S(new le(1.35,.14,1.65),i.flat(U.wallWood,.88));_.position.set(0,.2,o/2+.78),_.rotation.x=.16,s.add(_);const I=Cn(i,t);I.position.set(-1.15,0,o/2+.65);const E=Cn(i,t);E.position.set(-1.15,0,o/2+1.35),E.rotation.y=.75,s.add(I,E);const T=new me;T.position.set(1.75,0,-.45),n.add(T);const P=new S(new Se(1.18,1.26,.55,10),i.flat(U.cobbleMid,.9));P.position.y=.27;const w=new S(new Se(1.08,1.14,3.3,10),i.flat(U.stone,.86));w.position.y=.55+1.65;const y=new S(new mt(1.26,1.35,10),i.flat(U.roofOrange,.82));y.position.y=.55+3.3+.65;const C=new S(new yt(.18,6,5),i.flat(U.roofRed,.8));C.position.y=.55+3.3+1.32,T.add(P,w,y,C);const N=new Se(1.13,1.13,.08,10),F=i.flat(U.ironHoop,.68,.28);for(const he of[.95,1.85,2.75,3.65]){const ve=new S(N,F);ve.position.y=he,T.add(ve)}const O=new le(.04,3.1,.04),j=new le(.04,.03,.3),H=new S(O,F);H.position.set(1.14,2.1,-.14);const $=new S(O,F);$.position.set(1.14,2.1,.14),T.add(H,$);for(let he=.8;he<=3.5;he+=.35){const ve=new S(j,F);ve.position.set(1.14,he,0),T.add(ve)}const V=new Se(.09,.09,1.5,6);V.rotateZ(Math.PI/2-.26);const se=new S(V,F);se.position.set(-.85,3.8,.08),T.add(se);const _e=Cn(i,t);_e.position.set(.85,0,1.15);const xe=Cn(i,t);xe.position.set(1.35,0,.75),xe.rotation.y=.55,T.add(_e,xe);const Te=new me;Te.position.set(.9,.14,5.4),n.add(Te);const Ne=i.flat(U.sackBurlap,.88),K=i.flat(U.sackRope,.9),ce=i.flat(U.flourBag,.82),we=i.flat(U.flourBand,.85),fe=i.flat(U.wallWood,.88),De=i.flat(U.woodDark,.9),Fe=i.flat(U.wickerBasket,.88),ke=i.flat(U.appleRed,.7),pe=i.flat(U.carrotOrange,.8),X=i.flat(U.cabbageEmerald,.8),ne=i.flat(U.breadCrust,.85),L=i.flat(U.jamBerry,.6),Pe=i.flat(U.jamAmber,.6),Z=new le(.48,.24,.36),de=new le(.51,.05,.39),Q=new Se(.22,.18,.26,8),Ee=new yt(.075,6,5),ge=new nn(.05,.18,3,5),R=new Se(.05,.05,.12,6),b=new mt(.08,.22,5),z=new Jt(.11,0),J=he=>{const ve=new me,ze=new S(Z,fe);ze.position.y=.12;const He=new S(de,De);return He.position.y=.23,he.position.y=.18,ve.add(ze,He,he),ve},re=[];for(let he=0;he<16;he++){const ve=Math.floor(he/8),ze=he%8,He=Math.floor(ze/4),qe=ze%4,k=Ao(Ne,K,!1,e);k.position.set(-1.35+qe*.52+ve*.08,ve*.42,-.35+He*.56),k.rotation.y=he*37%10*.05-.25,k.visible=!1,Te.add(k),re.push(k)}const Y=[],be=new S(new le(1.9,.1,1.3),i.flat(U.wallWood,.9));be.position.set(1.95,.04,-.05),Te.add(be);for(let he=0;he<12;he++){const ve=Math.floor(he/6),ze=he%6,He=Math.floor(ze/3),qe=ze%3,k=Ao(ce,we,!0,e);k.position.set(1.38+qe*.55,.08+ve*.42,-.32+He*.56),k.rotation.y=he*23%8*.05-.2,k.visible=!1,Te.add(k),Y.push(k)}const Ae=[];for(let he=0;he<4;he++){const ve=new me,ze=new S(b,pe);ze.position.set(-.08,0,0);const He=new S(b,pe);He.position.set(.08,0,0),ve.add(ze,He);const qe=J(ve),k=Math.floor(he/2),Le=he%2;qe.position.set(-.05+Le*.48,k*.26,.42),qe.visible=!1,Te.add(qe),Ae.push(qe)}const Re=[];for(let he=0;he<4;he++){const ve=new me,ze=new S(z,X);ze.position.set(-.08,0,0);const He=new S(z,X);He.position.set(.08,0,0),ve.add(ze,He);const qe=J(ve),k=Math.floor(he/2),Le=he%2;qe.position.set(-.05+Le*.48,k*.26,-.38),qe.visible=!1,Te.add(qe),Re.push(qe)}const ae=[];for(let he=0;he<4;he++){const ve=new me,ze=new S(Q,Fe);ze.position.y=.13,ve.add(ze);for(let k=0;k<4;k++){const Le=new S(Ee,ke),oe=k/3*Math.PI*2;Le.position.set(Math.cos(oe)*.08,.24,Math.sin(oe)*.08),ve.add(Le)}const He=Math.floor(he/2),qe=he%2;ve.position.set(.72+qe*.44,He*.27,.05),ve.visible=!1,Te.add(ve),ae.push(ve)}const q=[];for(let he=0;he<4;he++){const ve=new me,ze=new S(ge,ne);ze.rotation.z=Math.PI/2.2,ze.position.set(-.07,0,0);const He=new S(ge,ne);He.rotation.z=Math.PI/2.2,He.position.set(.07,0,0),ve.add(ze,He);const qe=J(ve),k=Math.floor(he/2),Le=he%2;qe.position.set(2.8+Le*.46,k*.26,-.35),qe.visible=!1,Te.add(qe),q.push(qe)}const ue=[];for(let he=0;he<4;he++){const ve=new me,ze=new S(R,L);ze.position.set(-.08,0,0);const He=new S(R,Pe);He.position.set(.08,0,0),ve.add(ze,He);const qe=J(ve),k=Math.floor(he/2),Le=he%2;qe.position.set(2.8+Le*.46,k*.26,.35),qe.visible=!1,Te.add(qe),ue.push(qe)}Nt(n);const Be=(he,ve)=>{const ze=Math.min(re.length,Math.ceil((he.wheat??0)/1.5));for(let Me=0;Me<re.length;Me++)re[Me].visible=Me<ze;const He=Math.min(Y.length,Math.ceil(he.flour??0));for(let Me=0;Me<Y.length;Me++)Y[Me].visible=Me<He;const qe=Math.min(Ae.length,Math.ceil((he.carrot??0)/1.5));for(let Me=0;Me<Ae.length;Me++)Ae[Me].visible=Me<qe;const k=Math.min(Re.length,Math.ceil((he.cabbage??0)/1.5));for(let Me=0;Me<Re.length;Me++)Re[Me].visible=Me<k;const Le=Math.min(ae.length,Math.ceil((he.apple??0)/1.5));for(let Me=0;Me<ae.length;Me++)ae[Me].visible=Me<Le;const oe=Math.min(q.length,Math.ceil((he.bread??0)/1.5));for(let Me=0;Me<q.length;Me++)q[Me].visible=Me<oe;const ye=Math.min(ue.length,Math.ceil((he.jam??0)/1.5));for(let Me=0;Me<ue.length;Me++)ue[Me].visible=Me<ye};return{group:n,setStockItems:Be,setStock(he,ve,ze){Be({wheat:he,flour:ve})}}}function hy(i,e=Sr(),t=Ji()){const n=new me;n.userData.buildingId="mill";const s=new S(new Se(1.85,2.15,1.4,8),i.flat(U.cobbleMid,.9));s.position.y=.7;const r=new S(new Se(1.38,1.82,4.2,8),i.flat(U.wallCream,.86));r.position.y=1.4+2.1;const o=new S(new Se(1.95,1.95,.18,8),i.flat(U.wallWood,.88));o.position.y=2.6;const a=new S(new mt(1.75,2.1,8),i.flat(U.roofRed,.82));a.position.y=5.6+1.05;const c=new S(new le(1.8,2.1,2.2),i.flat(U.wallWood,.88));c.position.set(-1.55,1.05,.2);const l=Hi(2.1,2.5,.95,i.flat(U.roofOrange,.84));l.position.set(-1.55,2.1,.2);const h=new S(new le(.85,1.45,.2),i.flat(U.woodDark,.9));h.position.set(0,.75,1.92);const u=new S(new le(.5,.65,.16),i.windowGlow());u.position.set(0,3.6,1.6);const d=u.clone();d.position.set(-1.55,1.25,1.32);const f=Cn(i,t);f.position.set(1.15,0,1.85);const g=Cn(i,t);g.position.set(1.7,0,1.35),g.rotation.y=.45;const v=Ao(i.flat(U.flourBag,.82),i.flat(U.flourBand,.85),!0,e);v.position.set(1.6,0,1.75);const m=new S(new Se(.12,.09,.24,6),i.windowGlow());m.position.set(.65,1.85,1.95);const p=new me;p.name="blades",p.position.set(0,4.95,1.62);const M=new S(new Se(.24,.24,.7,8),i.flat(U.woodDark,.9));M.rotation.x=Math.PI/2,p.add(M);const x=i.flat(U.woodDark,.9),_=i.flat(U.wallCream,.78),I=i.flat(U.roofOrange,.84),E=new le(.14,3.5,.12),T=new le(.68,2.75,.05),P=new le(.7,.22,.07);for(let w=0;w<4;w++){const y=new me;y.rotation.z=w*Math.PI/2;const C=new S(E,x);C.position.y=1.75;const N=new S(T,_);N.position.set(.32,1.98,.04),N.rotation.y=.14;const F=new S(P,I);F.position.set(.32,3.25,.04),F.rotation.y=.14,y.add(C,N,F),p.add(y)}return n.add(s,r,o,a,c,l,h,u,d,f,g,v,m,p),{group:Nt(n),blades:p}}function uy(i,e=Sr(),t=Ji()){const n=new me;n.userData.buildingId="shop";const s=4.6,r=3.6,o=2.55,a=new S(new le(s,o,r),i.flat(U.wallCream,.86));a.position.y=o/2;const c=Hi(s+.6,r+.6,1.55,i.flat(U.roofRed,.82));c.position.y=o;const l=new me;l.position.set(0,1.85,r/2+.65),l.rotation.x=.32;const h=7,u=(s-.2)/h,d=new le(u,.1,1.45);for(let w=0;w<h;w++){const y=i.flat(w%2===0?U.roofRed:U.wallCream,.8),C=new S(d,y);C.position.x=-3.7714285714285705/2+w*u,l.add(C)}const f=new S(new le(s-.8,.85,.75),i.flat(U.wallWood,.88));f.position.set(0,.42,r/2+.45);const g=new yt(.18,6,5);g.scale(1.3,.75,.9);const v=i.flat(U.wheatGold,.78);for(let w=-2;w<=2;w++){const y=new S(g,v);y.position.set(w*.62,.92,r/2+.45),n.add(y)}const m=new S(new le(.85,.75,.14),i.windowGlow());m.position.set(-1.15,1.45,r/2+.04);const p=m.clone();p.position.x=1.15;const M=new S(new Se(.42,.42,.12,10),i.flat(U.wheatGold,.6,.25));M.rotation.x=Math.PI/2,M.position.set(0,3.05,r/2+.35);const x=i.flat(U.wallWood,.88),_=i.flat(U.woodDark,.9),I=new le(.75,.48,.62),E=new le(.79,.08,.66);for(const[w,y,C]of[[-2.1,r/2-.25,.12],[2.05,r/2+.52,-.22]]){const N=new me;N.position.set(w,0,y),N.rotation.y=C;const F=new S(I,x);F.position.y=.24;const O=new S(E,_);O.position.y=.46;const j=Ao(i.flat(U.flourBag,.82),i.flat(U.flourBand,.85),!0,e);j.scale.setScalar(.75),j.position.set(0,.38,0),N.add(F,O,j),n.add(N)}const T=Cn(i,t);T.position.set(-s/2-.32,0,r/2-.8);const P=new S(new Se(.12,.09,.22,6),i.windowGlow());return P.position.set(0,2.15,r/2+1.15),n.add(T,P),n.add(a,c,l,f,m,p,M),Nt(n)}function dy(i,e=Ji()){const t=new me;t.userData.buildingId="farmhouse";const n=5.4,s=4.2,r=2.85,o=new S(new le(n,r,s),i.flat(U.wallCream,.86));o.position.y=r/2;const a=new S(new le(n+.12,.75,s+.12),i.flat(U.wallWood,.9));a.position.y=.38;const c=Hi(n+.7,s+.7,1.85,i.flat(U.roofOrange,.82));c.position.y=r;const l=Hi(2.2,1.5,.75,i.flat(U.roofOrange,.82));l.position.set(0,1.95,s/2+.55);const h=new S(new le(2.1,.28,1.35),i.flat(U.wallWood,.88));h.position.set(0,.14,s/2+.55);const u=new S(new le(.95,1.65,.16),i.flat(U.woodDark,.9));u.position.set(0,.95,s/2+.04);const d=new le(.82,.78,.15),f=new le(.92,.2,.28),g=i.windowGlow(),v=i.flat(U.roofRed,.85),m=new Jt(.08,0),p=[U.roofRed,U.blush,U.daisyWhite,U.daisyCenter];for(const Y of[-1.65,1.65]){const be=new S(d,g);be.position.set(Y,1.48,s/2+.04);const Ae=new S(f,v);Ae.position.set(Y,.98,s/2+.14),t.add(be,Ae);for(let Re=-.3;Re<=.3;Re+=.15){const ae=new S(m,i.flat(p[Math.floor(Math.abs(Re*17+Y*3))%p.length],.82));ae.position.set(Y+Re,1.12,s/2+.16),t.add(ae)}}const M=new S(new le(.68,.68,.15),i.windowGlow());M.position.set(0,r+.65,s/2+.36);const x=new S(new le(.72,2.2,.72),i.flat(U.roofRed,.88));x.position.set(1.65,r+1.1,-.6);const _=[],I=new _n(.26,0),E=i.flat(U.smoke,.95);for(let Y=0;Y<3;Y++){const be=new S(I,E);be.position.set(1.65,r+2.3+Y*.55,-.6),t.add(be),_.push(be)}const T=new S(new Se(.12,.09,.24,6),i.windowGlow());T.position.set(0,1.75,s/2+1.2);const P=Cn(i,e);P.position.set(1.45,0,s/2+.45);const w=Cn(i,e);w.position.set(1.95,0,s/2+.2),w.rotation.y=.65,t.add(T,P,w),t.add(o,a,c,l,h,u,M,x);const y=new me;y.name="farmhouse_wing_lv1";const C=1.05,N=2.5,F=2.1,O=-2.82,j=-.2,H=new S(new le(C,F,N),i.flat(U.wallCream,.86));H.position.set(O,F/2,j);const $=new S(new le(C+.08,.72,N+.08),i.flat(U.wallWood,.9));$.position.set(O,.36,j);const V=Hi(C+.45,N+.4,.85,i.flat(U.roofOrange,.82));V.position.set(O,F,j);const se=new S(new le(.12,.62,.62),i.windowGlow());se.position.set(O-C/2-.03,1.25,j);const _e=new S(new le(.2,.16,.72),i.flat(U.roofRed,.85));_e.position.set(O-C/2-.05,.85,j),y.add(H,$,V,se,_e);const xe=new Se(.065,.065,.62,6);xe.rotateX(Math.PI/2);const Te=i.flat(U.trunk,.88),Ne=[[-.13,.065],[0,.065],[.13,.065],[-.065,.18],[.065,.18],[0,.295]];for(const[Y,be]of Ne){const Ae=new S(xe,Te);Ae.position.set(O+Y,be,j+N/2+.45),y.add(Ae)}const K=new le(.045,.38,.045),ce=i.flat(U.woodDark,.9);for(const Y of[-.21,.21]){const be=new S(K,ce);be.position.set(O+Y,.19,j+N/2+.45),y.add(be)}const we=new me;we.name="farmhouse_manor_lv2";const fe=1.15,De=1.1,Fe=.95,ke=-1.15,pe=.85,X=new S(new le(fe,Fe,De),i.flat(U.wallCream,.86));X.position.set(ke,r+Fe/2+.15,pe);const ne=Hi(fe+.35,De+.3,.6,i.flat(U.roofOrange,.82));ne.position.set(ke,r+Fe+.15,pe);const L=new S(new le(.62,.58,.12),i.windowGlow());L.position.set(ke,r+.65,pe+De/2+.04),we.add(X,ne,L);const Pe=new S(new le(.72,2.2,.72),i.flat(U.roofRed,.88));Pe.position.set(-1.65,r+1.1,-.6),we.add(Pe);const Z=[];for(let Y=0;Y<3;Y++){const be=new S(I,E);be.position.set(-1.65,r+2.3+Y*.55,-.6),t.add(be),Z.push(be)}const de=new me;de.position.set(0,r+1.85,0);const Q=new S(new Se(.02,.02,.65,6),i.flat(U.copperHoop,.5,.6));Q.position.y=.32;const Ee=new S(new Se(.015,.015,.55,5),i.flat(U.copperHoop,.5,.6));Ee.rotation.z=Math.PI/2,Ee.position.y=.44;const ge=new S(new mt(.05,.12,4),i.flat(U.copperHoop,.5,.6));ge.rotation.z=-Math.PI/2,ge.position.set(.28,.44,0);const R=new S(new le(.22,.2,.03),i.flat(U.roofRed,.85));R.position.set(0,.62,0),de.add(Q,Ee,ge,R),we.add(de);const b=new S(new le(.9,.1,.35),i.flat(U.woodDark,.9));b.position.set(.85,.36,s/2+.55);const z=new S(new Se(.12,.09,.24,6),i.windowGlow());z.position.set(-.85,1.75,s/2+1.2),we.add(b,z),t.add(y,we);let J=0;const re=Y=>{J=Math.max(0,Math.min(2,Math.floor(Y))),y.visible=J>=1,we.visible=J>=2;for(const be of Z)be.visible=J>=2};re(0),Nt(t);for(const Y of _)Y.castShadow=!1,Y.receiveShadow=!1;for(const Y of Z)Y.castShadow=!1,Y.receiveShadow=!1;return{group:t,smokePuffs:_,smokePuffs2:Z,weatherVane:de,getHousingLevel:()=>J,setHousingLevel:re}}function fy(i,e){const t=new me,n=i.buildings,s=Sr(),r=Ji(),o=(d,f)=>{d.position.set(f.pos[0],0,f.pos[1]),d.rotation.y=f.rotY,t.add(d)},a=ly(e,s,r);o(a.group,n.warehouse);const c=hy(e,s,r);o(c.group,n.mill);const l=uy(e,s,r);o(l,n.shop);const h=dy(e,r);o(h.group,n.farmhouse);let u=0;return{group:t,setStock:a.setStock,setStockItems:a.setStockItems,setHousingLevel:h.setHousingLevel,update(d){u+=d,c.blades.rotation.z-=d*.95;for(let f=0;f<h.smokePuffs.length;f++){const g=(u*.42+f*.33)%1,v=h.smokePuffs[f];v.position.y=4.95+g*2.1,v.position.x=1.65+Math.sin(u*1.6+f)*.25*g;const m=Math.sin(g*Math.PI)*(.7+g*.65);v.scale.setScalar(Math.max(.01,m))}if(h.getHousingLevel()>=2){for(let f=0;f<h.smokePuffs2.length;f++){const g=(u*.38+f*.33+.5)%1,v=h.smokePuffs2[f];v.position.y=4.95+g*2.1,v.position.x=-1.65+Math.sin(u*1.4+f+1.2)*.25*g;const m=Math.sin(g*Math.PI)*(.7+g*.65);v.scale.setScalar(Math.max(.01,m))}h.weatherVane&&(h.weatherVane.rotation.y=.35+Math.sin(u*.65)*.22)}}}}function Bd(i){const[e,t]=i.fieldSize,n=new mt(.26,.92,5);n.translate(0,.46,0);const s=new Se(.11,.16,.42,6);s.translate(0,.82,0);const r=new mt(.24,.54,5);r.translate(0,.46,0);const o=new mt(.12,.28,5);o.translate(0,.14,0);const a=new _n(.28,0);a.scale(1.15,.72,1.15),a.translate(0,.14,0);const c=new Jt(.18,0);return c.translate(0,.2,0),{soilBase:new le(e,.22,t),furrow:new le(e-.65,.11,.5),borderX:new le(e+.16,.22,.16),borderZ:new le(.16,.22,t+.16),post:new le(.22,.68,.22),stalk:n,ear:s,carrotTop:r,carrotRoot:o,cabbageRosette:a,cabbageHeart:c,sheafBale:new Se(.22,.26,.56,7),sheafTie:new Se(.23,.23,.08,7),crateBox:new le(.52,.28,.42),crateRim:new le(.55,.06,.45)}}function py(i,e,t,n=Bd(e)){const[s,r]=e.fieldSize,o=new me,a=new ct({color:U.soil,roughness:.94,flatShading:!0}),c=new Ue(U.soil),l=new Ue(3678740),h=new Ue(7754296),u=new S(n.soilBase,a);u.position.y=.11,u.receiveShadow=!0,o.add(u);const d=6,f=6,g=new ct({color:U.soilFurrow,roughness:.94,flatShading:!0}),v=new Ue(U.soilFurrow),m=new Ue(4072466),p=new Ue(8148024);for(let Q=0;Q<d;Q++){const Ee=(Q/(d-1)-.5)*(r-1.35),ge=new S(n.furrow,g);ge.position.set(0,.24,Ee),ge.receiveShadow=!0,o.add(ge)}const M=t.flat(U.trunk,.9),x=new S(n.borderX,M);x.position.set(0,.18,-r/2);const _=new S(n.borderX,M);_.position.set(0,.18,r/2);const I=new S(n.borderZ,M);I.position.set(-s/2,.18,0);const E=new S(n.borderZ,M);E.position.set(s/2,.18,0),o.add(x,_,I,E);for(const Q of[-1,1])for(const Ee of[-1,1]){const ge=new S(n.post,M);ge.position.set(Q*s/2,.34,Ee*r/2),o.add(ge)}const T=d*f,P=new ct({color:U.wheatYoung,roughness:.85,flatShading:!0}),w=new ct({color:U.wheatGold,roughness:.78,flatShading:!0}),y=new Sn(n.stalk,P,T);y.castShadow=!0,y.receiveShadow=!0,y.visible=!1;const C=new Sn(n.ear,w,T);C.castShadow=!0,C.visible=!1;const N=new ct({color:U.carrotGreen,roughness:.85,flatShading:!0}),F=new ct({color:U.carrotOrange,roughness:.78,flatShading:!0}),O=new Sn(n.carrotTop,N,T);O.castShadow=!0,O.receiveShadow=!0,O.visible=!1;const j=new Sn(n.carrotRoot,F,T);j.castShadow=!0,j.visible=!1;const H=new ct({color:U.cabbageLeaf,roughness:.85,flatShading:!0}),$=new ct({color:U.cabbageEmerald,roughness:.78,flatShading:!0}),V=new Sn(n.cabbageRosette,H,T);V.castShadow=!0,V.receiveShadow=!0,V.visible=!1;const se=new Sn(n.cabbageHeart,$,T);se.castShadow=!0,se.visible=!1,o.add(y,C,O,j,V,se);const _e=new me;_e.position.set(0,.22,r/2-.25),o.add(_e);const xe=[],Te=t.flat(U.wheatGold,.82),Ne=t.flat(U.sackRope,.9),K=t.flat(U.wallWood,.88),ce=t.flat(U.woodDark,.9),we=t.flat(U.carrotOrange,.8),fe=t.flat(U.cabbageEmerald,.8);for(let Q=0;Q<8;Q++){const Ee=new me;Ee.position.set(-2.1+Q*.6,0,Q%2*.22),Ee.visible=!1;const ge=new me,R=new S(n.sheafBale,Te);R.position.y=.26,R.rotation.z=(Q%2===0?1:-1)*.08;const b=new S(n.sheafTie,Ne);b.position.y=.26,ge.add(R,b),Ee.add(ge);const z=new me,J=new S(n.crateBox,K);J.position.y=.14;const re=new S(n.crateRim,ce);re.position.y=.26;const Y=new S(n.carrotRoot,we);Y.position.y=.25,Y.scale.setScalar(1.2),z.add(J,re,Y),Ee.add(z);const be=new me,Ae=new S(n.crateBox,K);Ae.position.y=.14;const Re=new S(n.crateRim,ce);Re.position.y=.26;const ae=new S(n.cabbageHeart,fe);ae.position.y=.25,ae.scale.setScalar(1.2),be.add(Ae,Re,ae),Ee.add(be),Nt(Ee),_e.add(Ee),xe.push({group:Ee,sheaf:ge,carrotBox:z,cabbageBox:be})}Nt(o);const De=new Ue(U.wheatYoung),Fe=new Ue(U.wheatMid),ke=new Ue(U.wheatRipe),pe=new Et;let X="wheat",ne=0,L=!1,Pe=0,Z=!1;const de=(Q=0)=>{if(!L){y.visible=!1,C.visible=!1,O.visible=!1,j.visible=!1,V.visible=!1,se.visible=!1;return}const Ee=.16+ne*.92,ge=ne>.42,R=ge?dt.smoothstep(ne,.42,.95):0;y.visible=X==="wheat",C.visible=X==="wheat"&&ge,O.visible=X==="carrot",j.visible=X==="carrot"&&ne>.35,V.visible=X==="cabbage",se.visible=X==="cabbage"&&ne>.38;let b=0;for(let z=0;z<d;z++)for(let J=0;J<f;J++){const re=(J/(f-1)-.5)*(s-1.35),Y=(z/(d-1)-.5)*(r-1.35),be=.88+(z*7+J*5)%5*.06,Ae=Q*(.3+ne*.7)*Math.sin(z*.9+J*.7);if(pe.position.set(re,.26,Y),pe.rotation.set(Ae,(z*3+J*11)%8*.4,-Ae*.6),pe.scale.set(Ee,Ee*be,Ee),pe.updateMatrix(),X==="wheat")y.setMatrixAt(b,pe.matrix),ge&&(pe.scale.set(R,R*be,R),pe.updateMatrix(),C.setMatrixAt(b,pe.matrix));else if(X==="carrot"){if(O.setMatrixAt(b,pe.matrix),ne>.35){const Re=dt.smoothstep(ne,.35,1);pe.position.set(re,.2,Y),pe.scale.set(Re,Re,Re),pe.updateMatrix(),j.setMatrixAt(b,pe.matrix)}}else if(X==="cabbage"&&(V.setMatrixAt(b,pe.matrix),ne>.38)){const Re=dt.smoothstep(ne,.38,1);pe.position.set(re,.22,Y),pe.scale.set(Re,Re,Re),pe.updateMatrix(),se.setMatrixAt(b,pe.matrix)}b++}X==="wheat"?(y.instanceMatrix.needsUpdate=!0,ge&&(C.instanceMatrix.needsUpdate=!0)):X==="carrot"?(O.instanceMatrix.needsUpdate=!0,ne>.35&&(j.instanceMatrix.needsUpdate=!0)):X==="cabbage"&&(V.instanceMatrix.needsUpdate=!0,ne>.38&&(se.instanceMatrix.needsUpdate=!0))};return de(0),{object:o,setCrop(Q,Ee,ge,R){const b=R??"wheat";if((b!==X||Ee!==L||Math.abs(Q-ne)>1e-4)&&(X=b,ne=Q,L=Ee,Z=!0,Ee&&X==="wheat"&&(Q<.55?P.color.copy(De).lerp(Fe,Q/.55):P.color.copy(Fe).lerp(ke,(Q-.55)/.45))),!L&&Z&&(de(0),Z=!1),ge!==Pe||Z){Pe=ge;const z=Math.min(xe.length,Math.ceil(ge/1.5));for(let J=0;J<xe.length;J++){const re=xe[J],Y=J<z;re.group.visible=Y,Y&&(re.sheaf.visible=X==="wheat",re.carrotBox.visible=X==="carrot",re.cabbageBox.visible=X==="cabbage")}}},sway(Q){L?(de(Math.sin(Q*2.2)*.07),Z=!1):Z&&(de(0),Z=!1)},setWeather(Q){g.color.copy(v),a.color.copy(c),Q.rain>.001&&(g.color.lerp(m,Q.rain*.45),a.color.lerp(l,Q.rain*.42)),Q.drought>.001&&(g.color.lerp(p,Q.drought*.35),a.color.lerp(h,Q.drought*.32));const Ee=.94-Q.rain*.35+Q.drought*.04;g.roughness=Ee,a.roughness=Ee}}}const oo=[{name:"Claude",isFemale:!1,skin:U.skinWarm,hair:2365973,tunic:9385511,pants:2829877,boots:4073754,accent:13933378},{name:"Codex",isFemale:!1,skin:U.skinFair,hair:7885102,tunic:3694910,pants:5722179,boots:4336155,accent:13145662},{name:"Gemini",isFemale:!1,skin:14855046,hair:2435638,tunic:2446755,pants:2962498,boots:1974309,accent:5871080},{name:"DeepSeek",isFemale:!0,skin:16507861,hair:2381982,tunic:1979998,pants:1979998,boots:2827037,accent:16052712},{name:"Pip",isFemale:!1,skin:U.skinWarm,hair:14264409,tunic:1931906,pants:3681316,boots:2825750,accent:15051067},{name:"Ivy",isFemale:!0,skin:U.skinFair,hair:9124382,tunic:4879189,pants:3362107,boots:3680029,accent:15787730},{name:"Rusty",isFemale:!1,skin:U.skinWarm,hair:3811357,tunic:10898218,pants:3030354,boots:2300436,accent:14596202},{name:"Rowan",isFemale:!0,skin:16771549,hair:14473424,tunic:7218500,pants:2496294,boots:2233630,accent:16109400}];function zd(){return{leg:new nn(.065,.44,3,6),boot:new le(.13,.16,.22),pantsTrousers:new Se(.16,.15,.16,8),skirt:new Se(.16,.32,.7,10),torsoMale:new Se(.2,.16,.42,8),torsoFemale:new Se(.17,.13,.38,8),chestLapel:new le(.12,.2,.05),belt:new Se(.165,.165,.06,8),beltBuckle:new le(.06,.07,.04),apron:new le(.22,.48,.06),neck:new Se(.055,.065,.1,6),arm:new nn(.048,.38,3,6),hand:new yt(.045,5,4),toolHandle:new Se(.025,.025,.75,5),toolBlade:new le(.04,.24,.14),head:new yt(.135,10,8),eye:new yt(.024,5,4),sunglasses:new le(.14,.036,.03),hairCapMale:new yt(.142,9,7),hairBangsMale:new le(.09,.06,.05),hairCapFemale:new yt(.144,9,7),hairLockFemale:new nn(.032,.32,3,5),hairBackFemale:new nn(.05,.4,3,5),maidRibbon:new mt(.05,.12,5),maidFrill:new $i(.138,.022,4,12,Math.PI),hatBrim:new Se(.3,.32,.025,12),hatCrown:new Se(.15,.17,.12,10),beretCap:new Se(.17,.19,.07,10),cargoSack:new Jt(.28,1),bakerToque:new Se(.16,.15,.22,10),bakerPeelHandle:new Se(.02,.02,.72,5),bakerPeelBlade:new le(.22,.2,.03),preserveBandana:new Se(.165,.165,.09,10),preservePaddle:new Se(.022,.022,.65,5),cargoBox:new le(.48,.28,.38),cargoBoxRim:new le(.5,.06,.4),cargoBasket:new Se(.24,.2,.3,8),cargoApple:new yt(.075,5,4),cargoBread:new nn(.055,.2,3,5),cargoJar:new Se(.055,.055,.14,6),cargoCarrot:new mt(.08,.22,5),cargoCabbage:new Jt(.11,0),headband:new Se(.142,.142,.035,10),brooch:new Jt(.045,0)}}function my(i,e,t=zd()){const n=(i%oo.length+oo.length)%oo.length,s=oo[n],r=new me,o=new ct({color:s.tunic,roughness:.82,flatShading:!0}),a=new ct({color:s.accent,roughness:.8,flatShading:!0}),c=e.smooth(s.skin,.72),l=e.flat(s.hair,.78),h=e.flat(s.pants,.84),u=e.flat(s.boots,.88),d=e.flat(3547926,.85),f=e.flat(13740622,.4,.6),g=new me;g.position.set(-.11,.82,0);const v=new me;v.position.set(.11,.82,0);const m=()=>{const ae=new me,q=new S(t.leg,s.isFemale?c:h);q.position.y=-.34;const ue=new S(t.boot,u);return ue.position.set(0,-.74,.03),ae.add(q,ue),ae};g.add(m()),v.add(m()),r.add(g,v);const p=new me;p.position.set(0,.82,0),r.add(p);let M=null;if(s.isFemale){M=new S(t.skirt,o),M.position.y=-.35;const ae=new S(t.torsoFemale,o);ae.position.y=.2;const q=new S(t.apron,a);q.position.set(0,-.16,.14);const ue=new S(t.belt,a);ue.position.y=.02,p.add(M,ae,q,ue)}else{const ae=new S(t.pantsTrousers,h);ae.position.y=.08;const q=new S(t.belt,d);q.position.y=.16;const ue=new S(t.beltBuckle,f);ue.position.set(0,.16,.17);const Be=new S(t.torsoMale,o);if(Be.position.y=.38,p.add(ae,q,ue,Be),n===0){const he=new S(t.chestLapel,c);he.position.set(0,.44,.15),p.add(he)}}const x=s.isFemale?.2:.24,_=s.isFemale?.4:.48,I=new me;I.position.set(-x,_,0);const E=new me;E.position.set(x,_,0);const T=()=>{const ae=new me,q=new S(t.arm,o);q.position.y=-.22;const ue=new S(t.hand,c);return ue.position.y=-.43,ae.add(q,ue),ae};I.add(T()),E.add(T());const P=new me,w=new S(t.toolHandle,e.flat(U.woodDark,.88));w.rotation.x=Math.PI/2.2,w.position.set(0,-.42,.2);const y=new S(t.toolBlade,e.flat(U.cobbleLight,.5,.4));y.position.set(0,-.5,.48),P.add(w,y),P.visible=!1;const C=new me,N=new S(t.bakerPeelHandle,e.flat(U.wallWood,.88));N.rotation.x=Math.PI/2.2,N.position.set(0,-.4,.2);const F=new S(t.bakerPeelBlade,e.flat(U.woodLight,.85));F.position.set(0,-.46,.5),C.add(N,F),C.visible=!1;const O=new me,j=new S(t.preservePaddle,e.flat(U.woodDark,.88));j.rotation.x=Math.PI/2.2,j.position.set(0,-.38,.2);const H=new S(new Se(.06,.04,.08,6),e.flat(U.copperHoop,.6,.3));H.position.set(0,-.44,.46),O.add(j,H),O.visible=!1,E.add(P,C,O),p.add(I,E);const $=new me;$.position.set(0,s.isFemale?.42:.58,0),p.add($);const V=new S(t.neck,c);V.position.y=.05,$.add(V);const se=new S(t.head,c);se.position.y=.2,$.add(se);const _e=e.flat(2039076,.4);for(const ae of[-.045,.045]){const q=new S(t.eye,_e);q.position.set(ae,.2,.13),$.add(q)}if(n===3){const ae=new S(t.hairCapFemale,l);ae.position.set(0,.22,-.02);const q=new S(t.hairLockFemale,l);q.position.set(-.11,.05,.06),q.rotation.z=.1;const ue=new S(t.hairLockFemale,l);ue.position.set(.11,.05,.06),ue.rotation.z=-.1;const Be=new S(t.hairBackFemale,l);Be.position.set(0,.02,-.13),Be.rotation.x=-.22;const he=new S(t.maidFrill,a);he.position.set(0,.23,.01),he.rotation.x=-Math.PI/2.3;const ve=new S(t.maidRibbon,l);ve.position.set(-.16,.2,.02),ve.rotation.z=Math.PI/2.8;const ze=new S(t.maidRibbon,l);ze.position.set(.16,.2,.02),ze.rotation.z=-Math.PI/2.8,$.add(ae,q,ue,Be,he,ve,ze)}else if(n===0){const ae=new S(t.hairCapMale,l);ae.position.set(0,.22,-.01),ae.scale.set(1.02,1.05,1.02);const q=new S(t.hairBangsMale,l);q.position.set(.02,.31,.1),q.rotation.z=-.15,$.add(ae,q)}else if(n===1){const ae=new S(t.hairCapMale,l);ae.position.set(0,.23,-.02);const q=new S(t.hairBangsMale,l);q.position.set(-.03,.3,.11),q.rotation.z=.18,$.add(ae,q)}else if(n===2){const ae=new S(t.hairCapMale,l);ae.position.set(0,.23,-.02),ae.scale.set(.98,.98,.98);const q=new S(t.sunglasses,e.flat(1381915,.3,.8));q.position.set(0,.2,.132),$.add(ae,q)}else if(n===4){const ae=new S(t.hairCapMale,l);ae.position.set(0,.22,-.02);const q=new S(t.beretCap,e.flat(1931906,.82));q.position.set(.03,.31,-.02),q.rotation.z=-.22,$.add(ae,q)}else if(n===5){const ae=new S(t.hairCapFemale,l);ae.position.set(0,.22,-.02);const q=new S(t.hairLockFemale,l);q.position.set(-.11,.05,.06),q.rotation.z=.12;const ue=new S(t.hairLockFemale,l);ue.position.set(.11,.05,.06),ue.rotation.z=-.12;const Be=new S(t.hairBackFemale,l);Be.position.set(0,.02,-.13),Be.rotation.x=-.22;const he=new S(t.brooch,e.flat(U.daisyCenter,.8));he.position.set(.12,.24,.08),$.add(ae,q,ue,Be,he)}else if(n===6){const ae=new S(t.hairCapMale,l);ae.position.set(0,.22,-.02);const q=new S(t.headband,e.flat(4466200,.88));q.position.set(0,.22,-.01),$.add(ae,q)}else{const ae=new S(t.hairCapFemale,l);ae.position.set(0,.22,-.02);const q=new S(t.hairLockFemale,l);q.position.set(-.11,.05,.06),q.rotation.z=.1;const ue=new S(t.hairBackFemale,l);ue.position.set(0,.02,-.13),ue.rotation.x=-.22;const Be=new S(t.brooch,e.flat(16109400,.4,.6));Be.position.set(0,.08,.14),$.add(ae,q,ue,Be)}const xe=new S(t.hatBrim,e.flat(14595932,.85));xe.position.y=.35,xe.visible=!1;const Te=new S(t.hatCrown,e.flat(14595932,.85));Te.position.y=.42,Te.visible=!1;const Ne=new S(t.beretCap,e.flat(15920868,.8));Ne.position.set(.02,.34,-.02),Ne.rotation.z=.15,Ne.visible=!1;const K=new S(t.bakerToque,e.flat(16052712,.85));K.position.set(0,.42,0),K.visible=!1;const ce=new S(t.preserveBandana,e.flat(U.jamBerry,.82));ce.position.set(0,.31,-.01),ce.visible=!1,$.add(xe,Te,Ne,K,ce);const we=new me;we.position.set(0,.46,-.24);const fe=new me,De=new S(t.cargoSack,e.flat(U.wheatRipe,.84));De.scale.set(1.05,.88,.85);const Fe=De.clone();Fe.position.set(0,.32,.04),Fe.scale.set(.88,.76,.76),fe.add(De,Fe);const ke=new me,pe=new S(t.cargoSack,e.flat(U.flourBag,.82));pe.scale.set(1.05,.88,.85);const X=new S(new Se(.25,.25,.08,8),e.flat(3696035,.85));X.position.y=.02,pe.add(X);const ne=pe.clone();ne.position.set(0,.32,.04),ne.scale.set(.88,.76,.76),ke.add(pe,ne);const L=ae=>{const q=new me,ue=e.flat(U.wallWood,.88),Be=e.flat(U.woodDark,.9),he=new me,ve=new S(t.cargoBox,ue),ze=new S(t.cargoBoxRim,Be);ze.position.y=.12,he.add(ve,ze,ae());const He=new me,qe=new S(t.cargoBox,ue),k=new S(t.cargoBoxRim,Be);return k.position.y=.12,He.add(qe,k,ae()),He.position.set(0,.32,.02),He.scale.setScalar(.9),q.add(he,He),{group:q,layer2:He}},Pe=L(()=>{const ae=new me,q=new S(t.cargoCarrot,e.flat(U.carrotOrange,.8));q.position.set(-.09,.08,0);const ue=new S(t.cargoCarrot,e.flat(U.carrotOrange,.8));return ue.position.set(.09,.08,0),ae.add(q,ue),ae}),Z=L(()=>{const ae=new me,q=new S(t.cargoCabbage,e.flat(U.cabbageEmerald,.8));q.position.set(-.09,.08,0);const ue=new S(t.cargoCabbage,e.flat(U.cabbageEmerald,.8));return ue.position.set(.09,.08,0),ae.add(q,ue),ae}),de=new me,Q=new me,Ee=new S(t.cargoBasket,e.flat(U.wickerBasket,.88));Q.add(Ee);for(let ae=0;ae<4;ae++){const q=new S(t.cargoApple,e.flat(U.appleRed,.7)),ue=ae/3*Math.PI*2;q.position.set(Math.cos(ue)*.08,.12,Math.sin(ue)*.08),Q.add(q)}const ge=Q.clone();ge.position.set(0,.32,.02),ge.scale.setScalar(.88),de.add(Q,ge);const R=L(()=>{const ae=new me,q=e.flat(U.breadCrust,.85),ue=new S(t.cargoBread,q);ue.rotation.z=Math.PI/2.2,ue.position.set(-.08,.08,0);const Be=new S(t.cargoBread,q);return Be.rotation.z=Math.PI/2.2,Be.position.set(.08,.08,0),ae.add(ue,Be),ae}),b=L(()=>{const ae=new me,q=new S(t.cargoJar,e.flat(U.jamBerry,.6));q.position.set(-.09,.08,0);const ue=new S(t.cargoJar,e.flat(U.jamAmber,.6));return ue.position.set(.09,.08,0),ae.add(q,ue),ae});we.add(fe,ke,Pe.group,Z.group,de,R.group,b.group),we.visible=!1,p.add(we),Nt(r);let z=i*1.3,J=!1,re=null,Y=-1,be="wheat",Ae=!0;const Re=()=>{if(Y<=0){we.visible=!1;return}we.visible=!0;const ae=Y>=3;fe.visible=be==="wheat",Fe.visible=ae,ke.visible=be==="flour",ne.visible=ae,Pe.group.visible=be==="carrot",Pe.layer2.visible=ae,Z.group.visible=be==="cabbage",Z.layer2.visible=ae,de.visible=be==="apple",ge.visible=ae,R.group.visible=be==="bread",R.layer2.visible=ae,b.group.visible=be==="jam",b.layer2.visible=ae};return{object:r,setState(ae,q,ue,Be){ae!==re&&(re=ae,xe.visible=ae==="farm"||ae==="sell",Te.visible=ae==="farm",Ne.visible=ae==="mill",P.visible=ae==="farm",K.visible=ae==="bake",C.visible=ae==="bake",ce.visible=ae==="preserve",O.visible=ae==="preserve",Ae=!0),q!==J&&(J=q,Ae=!0);const he=Be??"wheat";(ue!==Y||he!==be)&&(Y=ue,be=he,Re(),Ae=!0)},tick(ae){if(!(ae===0&&!Ae))if(Ae=!1,z+=ae,J){const q=z*7.5,ue=Math.sin(q)*.45;g.rotation.x=ue,v.rotation.x=-ue,M&&(M.rotation.x=-ue*.12),Y>0?(I.rotation.x=-.55+Math.sin(q)*.08,E.rotation.x=-.55-Math.sin(q)*.08):(I.rotation.x=-ue*.65,E.rotation.x=ue*.65),p.position.y=.82+Math.abs(Math.sin(q))*.035,p.rotation.x=.05,$.rotation.z=Math.sin(q*.5)*.04}else g.rotation.x=0,v.rotation.x=0,M&&(M.rotation.x=0),p.position.y=.82+Math.sin(z*2)*.012,p.rotation.x=0,re==="farm"?(E.rotation.x=-.45+Math.sin(z*4.2)*.4,I.rotation.x=-.15):re==="mill"||re==="sell"?(I.rotation.x=-.28+Math.sin(z*3.2)*.18,E.rotation.x=-.28-Math.sin(z*3.2)*.18):re==="bake"?(I.rotation.x=-.32+Math.sin(z*3.5)*.18,E.rotation.x=-.42+Math.cos(z*3.5)*.22):re==="preserve"?(I.rotation.x=-.18,E.rotation.x=-.38+Math.sin(z*3)*.16,E.rotation.z=Math.cos(z*3)*.16):(I.rotation.x=0,E.rotation.x=0),$.rotation.z=Math.sin(z*1.5)*.02}}}function gy(i,e,t){const n=new me;n.name=`FruitTree_${i}`;const s=new me;n.add(s);const r=new Se(1.7,1.85,.12,16);r.translate(0,.06,0);const o=new ct({color:U.soilDark,roughness:.94,flatShading:!0}),a=new S(r,o);a.receiveShadow=!0,s.add(a);const c=new $i(1.78,.12,6,16);c.rotateX(Math.PI/2),c.translate(0,.09,0);const l=t.flat(U.cobbleMid,.9),h=new S(c,l);s.add(h);const u=new me,d=new Se(.04,.04,.9,6),f=t.flat(U.woodDark,.9),g=new S(d,f);g.position.set(.4,.45,.3),g.rotation.z=-.1;const v=new le(.36,.24,.04),m=t.flat(U.woodLight,.85),p=new S(v,m);p.position.set(.4,.8,.3),p.rotation.y=.3;const M=new S(new Se(.02,.02,.75,5),f);M.position.set(-.35,.42,-.2),M.rotation.x=.22,M.rotation.z=.18;const x=new S(new le(.12,.18,.02),t.flat(U.ironHoop,.5,.3));x.position.set(-.35,.14,-.26),x.rotation.x=.22,x.rotation.z=.18,u.add(g,p,M,x),n.add(u);const _=new me,I=new S(new Se(.04,.06,1.4,6),t.flat(U.trunk,.88));I.position.y=.7;const E=new S(new Se(.035,.035,1.5,5),f);E.position.set(.12,.75,.02),E.rotation.z=-.05;const T=t.flat(U.treeLeaf,.85),P=new S(new _n(.24,0),T);P.position.set(0,1.35,0);const w=new S(new _n(.18,0),T);w.position.set(.14,1.25,.08),_.add(I,E,P,w),_.visible=!1,n.add(_);const y=new me;n.add(y);const C=t.flat(U.trunk,.88),N=new S(new Se(.32,.48,1.4,8),C);N.position.y=.7;const F=new S(new Se(.26,.32,1.2,7),C);F.position.set(.04,1.8,.02),F.rotation.z=-.08;const O=new Se(.14,.22,1.2,6),j=new S(O,C);j.position.set(-.45,2.6,.2),j.rotation.set(.3,.4,.6);const H=new S(O,C);H.position.set(.48,2.55,-.3),H.rotation.set(-.4,.2,-.65);const $=new S(O,C);$.position.set(.1,2.7,.55),$.rotation.set(-.7,-.2,.1),y.add(N,F,j,H,$);const V=new me;V.position.y=2.8,y.add(V);const se=new ct({color:U.treeLeaf,roughness:.84,flatShading:!0}),_e=new ct({color:U.treeLeafDark,roughness:.86,flatShading:!0}),xe=[[0,.9,0,1.35,!1],[-1,.6,.4,1.15,!0],[1.1,.5,-.35,1.12,!1],[.2,.4,1.05,1.1,!0],[-.3,.35,-1,1.05,!1],[.85,.85,.6,.95,!1],[-.7,.95,-.5,.92,!0]];for(const[de,Q,Ee,ge,R]of xe){const b=new _n(ge,0),z=new S(b,R?_e:se);z.position.set(de,Q,Ee),V.add(z)}const Te=new me;V.add(Te);const Ne=new yt(.12,7,6);Ne.scale(1,.95,1);const K=t.flat(U.appleRed,.65,.08),ce=[[-.8,.2,.9],[-1.3,.5,.2],[-1,1,.4],[-.4,.3,1.4],[.3,.1,1.4],[.9,.3,1],[1.4,.4,.1],[1.3,.7,-.5],[.8,.2,-1.1],[-.2,.2,-1.3],[-.9,.4,-.9],[-.1,1.5,.3],[.6,1.3,.4],[-.6,1.3,-.4],[.3,1.4,-.5],[0,1.8,0],[-1.1,.2,-.3],[1.1,.3,.6]];for(const[de,Q,Ee]of ce){const ge=new S(Ne,K);ge.position.set(de,Q,Ee),Te.add(ge)}Te.visible=!1;const we=new me;n.add(we);const fe=new Se(.26,.21,.32,8);fe.translate(0,.16,0);const De=new $i(.26,.035,4,8);De.rotateX(Math.PI/2),De.translate(0,.32,0);const Fe=t.flat(U.wickerBasket,.88),ke=t.flat(U.woodDark,.9),pe=[[.95,.12,.45],[.65,.12,.85],[1.15,.12,.95],[-.85,.12,.65],[-.65,.12,1.05]],X=[];for(let de=0;de<pe.length;de++){const[Q,Ee,ge]=pe[de],R=new me;R.position.set(Q,Ee,ge);const b=new S(fe,Fe),z=new S(De,ke);R.add(b,z);for(let J=0;J<5;J++){const re=new S(Ne,K);re.scale.setScalar(.72);const Y=J/4*Math.PI*2,be=J===4?0:.11;re.position.set(Math.cos(Y)*be,.28+(J===4?.07:0),Math.sin(Y)*be),R.add(re)}R.visible=!1,we.add(R),X.push(R)}Nt(n);let ne=!1,L=0,Pe=!1,Z=0;return{object:n,setState(de,Q,Ee,ge){if(ne=de,L=Math.max(0,Math.min(1,Q)),Pe=Ee,Z=Math.max(0,ge),!de){u.visible=!0,_.visible=!1,y.visible=!1,Te.visible=!1;for(const b of X)b.visible=!1;return}if(u.visible=!1,L<.28){_.visible=!0,y.visible=!1,Te.visible=!1;const b=.55+L/.28*.45;_.scale.set(b,b,b)}else{_.visible=!1,y.visible=!0;const z=.45+dt.smoothstep(L,.28,1)*.55;y.scale.set(z,z,z),Te.visible=Pe&&L>=.7}const R=Math.min(X.length,Math.ceil(Z/1));for(let b=0;b<X.length;b++)X[b].visible=b<R},update(de,Q,Ee){if(ne&&L>=.28){const ge=Math.sin(Q*1.8)*.04;V.rotation.z=ge,V.rotation.x=Math.cos(Q*1.3)*.025}Ee.drought>.01?se.roughness=.88+Ee.drought*.06:Ee.rain>.01&&(se.roughness=.84-Ee.rain*.25)}}}function vy(i){const e=[];for(const s of Object.values(i.paths))for(let r=1;r<s.length;r++)e.push([s[r-1],s[r]]);const t=i.plaza,n=i.buildings.farmhouse.door;return e.push([n,[0,5.5]],[[0,5.5],t]),e.push([t,[12,-3.5]],[[12,-3.5],[24,-14]],[[24,-14],[38,-26]],[[0,5.5],[-14,14]],[[-14,14],[-32,25]],[[-1.5,-2],[-4.5,-13]],[[-4.5,-13],[-5.5,-27]]),e}function ao(i,e,t,n,s=0){var r,o;if(Math.hypot(i-t.plaza[0],e-t.plaza[1])<6.8+s)return!0;for(const a of Object.values(t.buildings)){const c=a.size[0]/2+2.6+s,l=a.size[1]/2+2.6+s;if(Math.abs(i-a.pos[0])<c&&Math.abs(e-a.pos[1])<l||Math.hypot(i-a.door[0],e-a.door[1])<2.6+s)return!0}for(const a of t.fieldSlots){const c=t.fieldSize[0]/2+2+s,l=t.fieldSize[1]/2+2+s;if(Math.abs(i-a[0])<c&&Math.abs(e-a[1])<l)return!0}if(t.orchardSlots){const a=(((r=t.orchardSize)==null?void 0:r[0])??5)/2+2+s,c=(((o=t.orchardSize)==null?void 0:o[1])??5)/2+2+s;for(const l of t.orchardSlots)if(Math.abs(i-l[0])<a&&Math.abs(e-l[1])<c)return!0}for(const[a,c]of n)if(Yo(i,e,a,c)<2.5+s)return!0;if(t.villagers){for(const a of Object.values(t.villagers))if(Math.hypot(i-a.gate[0],e-a.gate[1])<3.8+s||Math.hypot(i-a.plaza[0],e-a.plaza[1])<2.2+s||Math.hypot(i-a.shop[0],e-a.shop[1])<2.2+s)return!0}return!1}function Yn(i,e,t,n){const s=t.plaza[0],r=t.plaza[1];let o=Math.hypot(i-s,e-r)-4.8;for(const[l,h]of n){const u=Yo(i,e,l,h)-1.35;u<o&&(o=u)}let a=Math.sin(i*.09)*Math.cos(e*.11)*.09;const c=Math.max(0,Math.hypot(i*.75,e)-28);if(a+=Math.min(1.8,c*.045)*(.5+.5*Math.sin(i*.12+e*.1)),o<1.1){const l=dt.smoothstep(1.1-o,0,1.35);a*=1-l*.85,a-=l*.03}return a}function _y(i,e,t){const[n,s]=i.mapSize,r=new Ns(n+84,s+84,136,108);r.rotateX(-Math.PI/2);const o=r.attributes.position,a=new Float32Array(o.count*3),c=new Ue,l=new Ue(U.grass),h=new Ue(U.grassDark),u=new Ue(U.grassLight),d=new Ue(U.grassSunlit),f=new Ue(U.dirt),g=new Ue(U.dirtDark),v=i.plaza[0],m=i.plaza[1];for(let C=0;C<o.count;C++){const N=o.getX(C),F=o.getZ(C),O=Math.sin(N*.14+.9)*Math.cos(F*.16-.5),j=Math.sin(N*.055-F*.07)*.75,H=(t()-.5)*.22,$=O*.6+j+H;$>.2?c.copy(l).lerp($>.65?d:u,Math.min(1,$*.68)):c.copy(l).lerp(h,Math.min(1,Math.abs($)*.62));let V=Math.hypot(N-v,F-m)-4.8;for(const[xe,Te]of e){const Ne=Yo(N,F,xe,Te)-1.35;Ne<V&&(V=Ne)}let se=Math.sin(N*.09)*Math.cos(F*.11)*.09;const _e=Math.max(0,Math.hypot(N*.75,F)-28);if(se+=Math.min(1.8,_e*.045)*(.5+.5*Math.sin(N*.12+F*.1)),V<1.1){const xe=dt.smoothstep(1.1-V,0,1.35),Ne=Math.abs(Math.abs(V+1.35)-.52)<.24&&V<-.15;c.lerp(Ne?g:f,xe),se*=1-xe*.85,se-=xe*.03}c.toArray(a,C*3),o.setY(C,se)}r.setAttribute("color",new rn(a,3)),r.computeVertexNormals();const p=new ct({vertexColors:!0,roughness:.96,metalness:0}),M=new S(r,p);M.receiveShadow=!0;const x=new me;x.name="rainPuddles";const _=new ct({color:2966360,roughness:.08,metalness:.45,transparent:!0,opacity:0,depthWrite:!1}),I=[{pos:[-3.2,-2.4],scale:[1.25,.75],rotY:.3},{pos:[.6,-2.6],scale:[1.4,.8],rotY:-.2},{pos:[8.6,-3.8],scale:[1.3,.75],rotY:.6},{pos:[5.6,2.4],scale:[1.15,.65],rotY:-.4},{pos:[-1.4,5.2],scale:[1.2,.7],rotY:.5}],E=new Se(.85,.85,.02,8);for(const C of I){const N=new S(E,_),F=Yn(C.pos[0],C.pos[1],i,e)+.025;N.position.set(C.pos[0],F,C.pos[1]),N.scale.set(C.scale[0],1,C.scale[1]),N.rotation.y=C.rotY,N.receiveShadow=!0,x.add(N)}x.visible=!1;const T=new Ue(16777215),P=new Ue(8556188),w=new Ue(16114877);return{mesh:M,puddles:x,setWeather:C=>{p.color.copy(T),C.drought>.001&&p.color.lerp(w,C.drought*.42),C.rain>.001&&p.color.lerp(P,C.rain*.45),p.roughness=.96-C.rain*.44+C.drought*.03;const N=C.rain>.015;x.visible=N,N&&(_.opacity=Math.min(.82,C.rain*.82))}}}function Hd(i){const e=new me,t=i.flat(U.trunk,.9),n=new S(new Se(.08,.11,2.5,6),t);n.position.y=1.25;const s=new S(new le(.75,.09,.09),t);s.position.set(.32,2.38,0);const r=new S(new le(.42,.08,.08),t);r.position.set(.18,2.14,0),r.rotation.z=-Math.PI/4;const o=new S(new mt(.18,.12,6),i.flat(U.ironHoop,.7,.3));o.position.set(.62,2.32,0);const a=new S(new Se(.13,.1,.26,6),i.windowGlow());return a.position.set(.62,2.14,0),e.add(n,s,r,o,a),Nt(e,!0,!0)}function xy(i,e,t){const n=new me,[s,r]=i.plaza;n.position.set(s,0,r);const o=7.4,a=4.6,c=new S(new le(o,.12,a),e.flat(U.dirtDark,.95));c.position.set(.4,.05,-.3),c.receiveShadow=!0,n.add(c);const l=e.flat(U.trunk,.9),h=new le(o+.2,.18,.18),u=new le(.18,.18,a-.18),d=new le(.22,.22,.22),f=new S(h,l);f.position.set(.4,.09,a/2-.3),f.receiveShadow=!0,f.castShadow=!0;const g=new S(h,l);g.position.set(.4,.09,-a/2-.3),g.receiveShadow=!0,g.castShadow=!0;const v=new S(u,l);v.position.set(.4-o/2,.09,-.3),v.receiveShadow=!0,v.castShadow=!0;const m=new S(u,l);m.position.set(.4+o/2,.09,-.3),m.receiveShadow=!0,m.castShadow=!0,n.add(f,g,v,m);for(const H of[-1,1])for(const $ of[-1,1]){const V=new S(d,l);V.position.set(.4+H*o/2,.11,-.3+$*a/2),V.receiveShadow=!0,V.castShadow=!0,n.add(V)}const p=[U.cobbleLight,U.cobbleMid,U.cobbleDark],M=new Se(.42,.46,.1,7);for(let H=-3;H<=3.6;H+=.82)for(let $=-2.2;$<=1.6;$+=.78){const V=H+(t()-.5)*.22,se=$+(t()-.5)*.22,_e=new S(M,e.flat(p[Math.floor(t()*p.length)],.88)),xe=.75+t()*.55,Te=.75+t()*.55;_e.scale.set(xe,1,Te),_e.rotation.y=t()*Math.PI,_e.position.set(V,.1+t()*.02,se),_e.receiveShadow=!0,n.add(_e)}const x=new me;x.position.set(-2.2,.08,.1),n.add(x);const _=new Jt(.24,0);for(let H=0;H<10;H++){const $=H/10*Math.PI*2,V=.78+(t()-.5)*.06,se=new S(_,e.flat(p[H%3],.85));se.position.set(Math.cos($)*V,.14,Math.sin($)*V),se.scale.set(1.1,.75,.95),se.rotation.y=$,se.castShadow=!0,se.receiveShadow=!0,x.add(se)}const I=new S(new Se(.62,.68,.1,8),new ct({color:U.emberRed,emissive:U.emberRed,emissiveIntensity:1.4,roughness:.7}));I.position.y=.06,x.add(I);const E=new Se(.1,.11,1.15,6);E.rotateZ(Math.PI/2);const T=e.flat(U.woodDark,.92);for(let H=0;H<3;H++){const $=new S(E,T);$.position.y=.18+H*.03,$.rotation.y=H*Math.PI/3+.3,$.rotation.z=.12,$.castShadow=!0,x.add($)}const P=new ct({color:U.fire,emissive:U.fire,emissiveIntensity:1.5,roughness:.35,flatShading:!0}),w=new ct({color:U.flameCore,emissive:U.flameCore,emissiveIntensity:1.9,roughness:.25,flatShading:!0}),y=new S(new mt(.42,1.05,6),P);y.position.y=.65;const C=new S(new mt(.24,.72,5),w);C.position.set(.03,.52,.02),x.add(y,C);const N=[],F=new _l(.06,0);for(let H=0;H<4;H++){const $=new S(F,w);$.position.set((t()-.5)*.3,.9+H*.3,(t()-.5)*.3),x.add($),N.push($)}const O=Hd(e);O.position.set(-3.1,0,-.6),n.add(O);let j=0;return{group:n,anim:{update(H,$,V){j+=H;const se=V?Math.max(.65,1-V.rain*.35):1,_e=(1+$*.45)*se,xe=(1+Math.sin(j*14)*.09+Math.cos(j*8.3)*.06)*se,Te=(1+Math.cos(j*17)*.11)*se;y.scale.set(xe,xe*_e,xe),y.rotation.y=j*1.8,C.scale.set(Te,Te*_e,Te),P.emissiveIntensity=(1.45+$*.55+Math.sin(j*11)*.2)*se;for(let Ne=0;Ne<N.length;Ne++){const K=(j*1.1+Ne*.25)%1,ce=N[Ne];ce.position.y=.75+K*1.45,ce.position.x=Math.sin(j*4+Ne*2)*.22,ce.position.z=Math.cos(j*3.5+Ne*2)*.22,ce.scale.setScalar((1-K)*1.1)}}}}}function Ml(){return{coniferTrunk:new Se(.16,.26,1,6),coniferCone:new mt(1,1,7),broadTrunk:new Se(.18,.28,1,6),crownMain:new _n(1,1),crownPuff:new _n(1,0)}}function yy(i,e,t=Ml()){const n=new me,s=.85+e()*.45,r=1.1+e()*.4,o=new S(t.coniferTrunk,i.flat(U.trunk,.92));o.scale.set(1,r,1),o.position.y=r/2,n.add(o);const a=[U.treeLeaf,U.treeLeafDark,2522435],c=i.flat(a[Math.floor(e()*a.length)],.86),l=3;for(let h=0;h<l;h++){const u=(1.35-h*.28)*s,d=(1.55-h*.18)*s,f=new S(t.coniferCone,c);f.scale.set(u,d,u),f.position.y=r+h*(.82*s)+d*.42,f.rotation.y=e()*Math.PI,f.rotation.z=(e()-.5)*.06,n.add(f)}return Nt(n)}function wy(i,e,t=Ml()){const n=new me,s=1.35+e()*.55,r=new S(t.broadTrunk,i.flat(U.trunk,.92));r.scale.set(1,s,1),r.position.y=s/2,n.add(r);const o=[U.treeLeaf,U.grassDark,3710034,U.treeLeafDark],a=i.flat(o[Math.floor(e()*o.length)],.85),c=i.flat(o[Math.floor(e()*o.length)],.85),l=1.15+e()*.35,h=new S(t.crownMain,a);h.position.y=s+l*.72,h.scale.set(l*1.08,l*.88,l*1.04),n.add(h);const u=2+Math.floor(e()*2);for(let d=0;d<u;d++){const f=d/u*Math.PI*2+e()*.8,g=l*(.62+e()*.2),v=new S(t.crownPuff,d%2===0?a:c);v.scale.setScalar(g),v.position.set(Math.cos(f)*l*.58,s+l*(.55+e()*.35),Math.sin(f)*l*.58),n.add(v)}return n.rotation.y=e()*Math.PI*2,Nt(n)}function Vd(){return{post:new le(.14,.72,.14),rail:new le(1,.08,.06)}}function My(i,e,t=Vd()){const n=new me,s=e.flat(U.trunk,.9),r=Math.max(2,Math.round(i/2.2)+1),o=i/(r-1);for(let l=0;l<r;l++){const h=new S(t.post,s);h.position.set(-i/2+l*o,.36,0),n.add(h)}const a=new S(t.rail,s);a.scale.x=i,a.position.y=.56;const c=new S(t.rail,s);return c.scale.x=i,c.position.y=.28,n.add(a,c),Nt(n)}function Gd(){return{pillar:new Se(.18,.22,3.2,7),plinth:new Jt(.36,0),lintel:new le(4.2,.24,.26),brace:new le(.14,.75,.14),roof:new le(4.5,.12,.72),roofRidge:new le(4.6,.08,.14),signPlaque:new le(1.8,.46,.08),signBorder:new le(1.88,.54,.06),chain:new Se(.015,.015,.22,5),lanternGlass:new Se(.11,.08,.2,6),lanternCap:new mt(.16,.1,6),milestone:new Jt(.38,0)}}function by(i,e=Gd(),t="village"){const n=new me;n.name=`VillageGate_${t}`;const s=i.flat(U.trunk,.88),r=i.flat(U.woodDark,.92),o=i.flat(U.cobbleMid,.85),a=i.flat(U.roofOrange,.82),c=i.flat(U.ironHoop,.6,.3),l=i.flat(U.woodLight,.85),h=1.9;for(const T of[-h,h]){const P=new S(e.plinth,o);P.position.set(T,.22,0),P.scale.set(1.2,.85,1.2);const w=new S(e.pillar,s);w.position.set(T,1.6,0),n.add(P,w)}const u=new S(e.lintel,s);u.position.set(0,2.85,0);const d=new S(e.brace,s);d.position.set(-h+.38,2.52,0),d.rotation.z=Math.PI/4;const f=new S(e.brace,s);f.position.set(h-.38,2.52,0),f.rotation.z=-Math.PI/4;const g=new S(e.roof,a);g.position.set(0,3.02,0);const v=new S(e.roofRidge,r);v.position.set(0,3.1,0);const m=new me;m.position.set(0,2.4,0);const p=new S(e.signPlaque,l),M=new S(e.signBorder,r);M.position.z=-.01;for(const T of[-.6,.6]){const P=new S(e.chain,c);P.position.set(T,.33,0),m.add(P)}m.add(p,M);const x=new me;x.position.set(-h-.12,2.1,.28);const _=new S(e.lanternGlass,i.windowGlow()),I=new S(e.lanternCap,c);I.position.y=.14,x.add(_,I);const E=new S(e.milestone,o);return E.position.set(h+.45,.3,.15),E.scale.set(1,1.4,.85),n.add(u,d,f,g,v,m,x,E),Nt(n)}function Sy(i,e,t,n,s,r){var De,Fe,ke;const o=[{pos:[-5.2,-7.2],rotY:1.52,len:6},{pos:[-4.4,2.8],rotY:1.35,len:5.5},{pos:[10.2,.8],rotY:-.38,len:3.6},{pos:[4.4,7.6],rotY:-.96,len:4},{pos:[16.5,-1.8],rotY:-.78,len:5.2},{pos:[-9.8,12.8],rotY:.54,len:4.8}],a=Vd();for(const pe of o){const X=My(pe.len,n,a);X.position.set(pe.pos[0],Yn(pe.pos[0],pe.pos[1],e,t),pe.pos[1]),X.rotation.y=pe.rotY,i.add(X)}const c=Gd(),l=[{id:"sw",pos:((De=e.villagers)==null?void 0:De.tom.gate)??[-30,23.8],rotY:Math.atan2(16,-9.8)},{id:"north",pos:((Fe=e.villagers)==null?void 0:Fe.yuki.gate)??[-5.4,-25],rotY:Math.atan2(.9,12)},{id:"ne",pos:((ke=e.villagers)==null?void 0:ke.lin.gate)??[34,-22.6],rotY:Math.atan2(-10,8.6)}];for(const pe of l){const X=by(n,c,pe.id);X.position.set(pe.pos[0],Yn(pe.pos[0],pe.pos[1],e,t),pe.pos[1]),X.rotation.y=pe.rotY,i.add(X)}const h=r==="high"?125:65,u=Ml(),[d,f]=e.mapSize;for(let pe=0,X=0;pe<h&&X<2400;X++){const ne=(s()-.5)*(d+30),L=(s()-.5)*(f+26);if(ao(ne,L,e,t,.6))continue;const Pe=s()>.46?wy(n,s,u):yy(n,s,u);Pe.position.set(ne,Yn(ne,L,e,t),L),i.add(Pe),pe++}const g=r==="high"?55:28,v=new _n(.48,0),m=new Jt(.42,0);for(let pe=0,X=0;pe<g&&X<900;X++){const ne=(s()-.5)*(d+16),L=(s()-.5)*(f+14);if(ao(ne,L,e,t,-.4))continue;const Pe=Yn(ne,L,e,t);if(s()>.32){const Z=new S(v,n.flat(s()>.5?U.treeLeaf:U.grassDark,.88)),de=.65+s()*.7;Z.scale.set(de*1.2,de*.85,de),Z.position.set(ne,Pe+de*.3,L),Z.rotation.y=s()*Math.PI,Z.castShadow=!0,Z.receiveShadow=!0,i.add(Z)}else{const Z=new S(m,n.flat(U.cobbleMid,.9)),de=.6+s()*.85;Z.scale.set(de*1.3,de*.75,de),Z.position.set(ne,Pe+de*.22,L),Z.rotation.set(s()*.3,s()*Math.PI,s()*.3),Z.castShadow=!0,Z.receiveShadow=!0,i.add(Z)}pe++}const p=r==="high"?220:100,M=new Se(.16,.1,.06,6);M.translate(0,.22,0);const x=new mt(.11,.2,4);x.translate(0,.1,0);const _=new Sn(M,n.flat(16777215,.7),p),I=new Sn(x,n.flat(U.grassDark,.9),p);_.receiveShadow=!0,I.receiveShadow=!0;const E=new Ue(U.daisyWhite),T=new Ue(U.daisyCenter),P=new Et;let w=0;for(let pe=0;w<p&&pe<1800;pe++){const X=(s()-.5)*(d+10),ne=(s()-.5)*(f+10);if(ao(X,ne,e,t,-.8))continue;const L=Yn(X,ne,e,t),Pe=.7+s()*.65;P.position.set(X,L+.02,ne),P.rotation.set(0,s()*Math.PI*2,0),P.scale.setScalar(Pe),P.updateMatrix(),_.setMatrixAt(w,P.matrix),_.setColorAt(w,w%3===0?T:E),I.setMatrixAt(w,P.matrix),w++}_.count=w,I.count=w,_.instanceMatrix.needsUpdate=!0,_.instanceColor&&(_.instanceColor.needsUpdate=!0),I.instanceMatrix.needsUpdate=!0,i.add(I,_);const y=[{pos:[-5.6,-2.4],rotY:.35},{pos:[7.8,-4.6],rotY:-.65},{pos:[8.6,2.2],rotY:.9},{pos:[-1.6,8.5],rotY:-.3}];for(const pe of y){const X=Hd(n);X.position.set(pe.pos[0],Yn(pe.pos[0],pe.pos[1],e,t),pe.pos[1]),X.rotation.y=pe.rotY,i.add(X)}const C=r==="high"?180:80,N=new mt(.12,.36,4);N.translate(0,.18,0);const F=new ct({color:16777215,roughness:.92,flatShading:!0}),O=new Sn(N,F,C);O.receiveShadow=!0;const j=new Ue(U.grassTuftBright),H=new Ue(U.grassTuftDark);let $=0;for(let pe=0;$<C&&pe<1500;pe++){const X=(s()-.5)*(d+8),ne=(s()-.5)*(f+8);let L=999;for(const[de,Q]of t){const Ee=Yo(X,ne,de,Q);Ee<L&&(L=Ee)}if((L<1.35||L>3.8)&&s()>.35||ao(X,ne,e,t,-.6))continue;const Pe=Yn(X,ne,e,t),Z=.75+s()*.7;P.position.set(X,Pe,ne),P.rotation.set((s()-.5)*.25,s()*Math.PI*2,(s()-.5)*.25),P.scale.set(Z*1.3,Z,Z*.9),P.updateMatrix(),O.setMatrixAt($,P.matrix),O.setColorAt($,$%2===0?j:H),$++}O.count=$,O.instanceMatrix.needsUpdate=!0,O.instanceColor&&(O.instanceColor.needsUpdate=!0),i.add(O);const V=new Se(.32,.38,.36,7),se=new mt(.14,.16,6),_e=new Se(.04,.05,.16,5),xe=n.flat(U.shroomRed,.8),Te=n.flat(U.shroomStem,.9),Ne=n.flat(U.trunk,.9),K=[[-11.5,-16.2],[8.4,-13.5],[18.5,3.2],[-10.2,17.5],[2.5,16.8]];for(const[pe,X]of K){const ne=Yn(pe,X,e,t),L=new me;L.position.set(pe,ne,X),L.rotation.y=s()*Math.PI*2;const Pe=new S(V,Ne);Pe.position.y=.18,L.add(Pe);for(let Z=0;Z<3;Z++){const de=new me,Q=Z*Math.PI*2/3+.4,Ee=.48+s()*.15;de.position.set(Math.cos(Q)*Ee,0,Math.sin(Q)*Ee);const ge=new S(_e,Te);ge.position.y=.08;const R=new S(se,xe);R.position.y=.18,de.add(ge,R);const b=.7+s()*.5;de.scale.setScalar(b),L.add(de)}Nt(L),i.add(L)}const ce=new Ue(16777215),we=new Ue(14074984),fe=new Ue(9222276);return{setWeather(pe){F.color.copy(ce),pe.drought>.001&&F.color.lerp(we,pe.drought*.42),pe.rain>.001&&F.color.lerp(fe,pe.rain*.35)}}}function Fa(i,e,t,n){const s=new vl;s.moveTo(-i/2,0),s.lineTo(0,t),s.lineTo(i/2,0),s.closePath();const r=new Xo(s,{depth:e,bevelEnabled:!1});return r.translate(0,0,-e/2),new S(r,n)}function Ey(i,e){const t=new me;t.name="UnderConstruction";const n=new S(new le(4.6,.22,3.6),i.flat(U.cobbleDark,.94));n.position.y=.11,n.receiveShadow=!0,t.add(n);const s=i.flat(U.woodDark,.9);for(const g of[-2.35,2.35])for(const v of[-1.85,1.85]){const m=new S(new Se(.04,.04,.8,6),s);m.position.set(g,.4,v),t.add(m)}const r=i.flat(U.scaffoldWood,.88),o=new Se(.05,.05,3.2,6);for(const g of[.6,2.1])for(const v of[-1.2,.5]){const m=new S(o,r);m.position.set(g,1.6,v),t.add(m)}const a=new le(1.8,.08,.35);for(let g=0;g<3;g++){const v=new S(a,r);v.position.set(1.35,1.8+g%2*.05,-.9+g*.4),t.add(v)}const c=new S(new le(.9,.48,.7),i.flat(U.cobbleMid,.9));c.position.set(-1.4,.46,-.6),t.add(c);const l=new S(new le(1.6,.42,.65),i.flat(U.wallWood,.88));l.position.set(-1.2,.43,.7),l.rotation.y=.12,t.add(l);const h=new S(new mt(.75,.65,5),i.flat(U.tarpBlue,.85));h.position.set(.1,.54,.8),h.rotation.y=.4,t.add(h);const u=new S(new Se(.04,.04,1.3,6),s);u.position.set(0,.65,1.85);const d=new S(new le(.65,.48,.05),i.flat(U.woodLight,.85));d.position.set(0,1.15,1.85);const f=new S(new le(.52,.36,.02),i.flat(3501222,.8));return f.position.set(0,1.15,1.88),t.add(u,d,f),Nt(t),t}function Ty(i,e,t=Ji()){const n=new me;n.name=`Processor_${i}`;const s=Ey(e);n.add(s);const r=new me;r.name=`Building_${i}`,n.add(r);const o=[],a=[],c=new ct({color:i==="bakery"?U.smoke:15920629,roughness:.95,flatShading:!0}),l=new Jt(.24,0);if(i==="bakery"){const p=new S(new le(4.6000000000000005,.28,3.7),e.flat(U.cobbleDark,.92));p.position.y=.14,r.add(p);const M=new S(new le(4.4,2.4,3.5),e.flat(U.wallCream,.88));M.position.y=.28+2.4/2,r.add(M);const x=e.flat(U.wallWood,.88);for(const we of[-4.4/2+.1,4.4/2-.1])for(const fe of[-3.5/2+.1,3.5/2-.1]){const De=new S(new le(.22,2.4,.22),x);De.position.set(we,.28+2.4/2,fe),r.add(De)}const _=new S(new le(4.4+.05,.14,3.5+.05),x);_.position.y=.28+2.4,r.add(_);const I=Fa(4.4+.6,3.5+.7,1.8,e.flat(U.bakeryRoof,.82));I.position.y=.28+2.4,r.add(I);const E=Fa(1.8,1,.5,e.flat(U.bakeryRoof,.82));E.position.set(.6,2.45,3.5/2+.45),E.rotation.y=Math.PI/2,r.add(E);const T=new S(new le(.85,1.6,.1),e.flat(U.woodDark,.88));T.position.set(.6,.28+.8,3.5/2+.06),r.add(T);const P=new S(new le(1.4,1.1,.12),x);P.position.set(-1,1.5,3.5/2+.06);const w=e.windowGlow().clone(),y=new S(new le(1.2,.9,.06),w);y.position.set(-1,1.5,3.5/2+.1),r.add(P,y),a.push({mesh:y,baseIntensity:.4,workIntensity:1.8});const C=new S(new le(1.3,.08,.32),x);C.position.set(-1,1.05,3.5/2+.2);const N=e.flat(U.breadCrust,.85),F=new S(new nn(.06,.28,3,5),N);F.rotation.z=Math.PI/2.2,F.position.set(-1.25,1.15,3.5/2+.2);const O=new S(new yt(.09,6,5),N);O.scale.set(1.1,.7,1.1),O.position.set(-.85,1.14,3.5/2+.2),r.add(C,F,O);const j=new S(new le(.85,.38,.05),e.flat(U.woodLight,.85));j.position.set(.6,2.75,3.5/2+.12);const H=new S(new $i(.1,.035,4,8),N);H.position.set(.6,2.75,3.5/2+.16),r.add(j,H);const $=e.flat(U.cobbleMid,.9),V=new S(new le(1.3,1.8,2.1),$);V.position.set(4.4/2+.45,.28+.9,-.2);const se=new S(new Se(.65,.65,2.1,8,1,!1,0,Math.PI),$);se.rotation.x=Math.PI/2,se.position.set(4.4/2+.45,.28+1.8,-.2);const _e=new ct({color:2232584,emissive:U.emberRed,emissiveIntensity:.6,roughness:.7,flatShading:!0}),xe=new S(new le(.08,.65,.65),_e);xe.position.set(4.4/2+.45,.28+.65,.88),r.add(V,se,xe),a.push({mesh:xe,baseIntensity:.6,workIntensity:2.8});const Te=new S(new le(.7,3.4,.7),e.flat(U.cobbleDark,.92));Te.position.set(4.4/2+.25,.28+1.7+1.6,-.6);const Ne=new S(new le(.85,.16,.85),e.flat(U.wallWood,.88));Ne.position.set(4.4/2+.25,.28+3.4+1.6,-.6),r.add(Te,Ne);const K=new D(4.4/2+.25,.28+3.5+1.6,-.6);for(let we=0;we<4;we++){const fe=new S(l,c);fe.position.copy(K),fe.castShadow=!1,fe.receiveShadow=!1,fe.visible=!1,r.add(fe),o.push(fe)}const ce=new Se(.09,.09,.9,6);ce.rotateZ(Math.PI/2);for(let we=0;we<4;we++){const fe=new S(ce,e.flat(U.woodDark,.9));fe.position.set(-4.4/2-.1,.28+.15+we%2*.18,-.4+Math.floor(we/2)*.4),r.add(fe)}}else{const p=new S(new le(4.6000000000000005,.28,3.7),e.flat(U.cobbleMid,.9));p.position.y=.14,r.add(p);const M=new S(new le(4.4,2.3,3.5),e.flat(U.wallCream,.88));M.position.y=.28+2.3/2,r.add(M);const x=e.flat(U.wallWood,.88);for(const K of[-4.4/2+.1,4.4/2-.1])for(const ce of[-3.5/2+.1,3.5/2-.1]){const we=new S(new le(.2,2.3,.2),x);we.position.set(K,.28+2.3/2,ce),r.add(we)}const _=Fa(4.4+.6,3.5+.7,1.7,e.flat(U.preserveryRoof,.84));_.position.y=.28+2.3,r.add(_);const I=new S(new le(.85,1.55,.1),e.flat(U.woodDark,.88));I.position.set(-.6,.28+.77,3.5/2+.06),r.add(I);const E=new S(new le(1.5,1.1,.12),x);E.position.set(.9,1.45,3.5/2+.06);const T=e.windowGlow().clone(),P=new S(new le(1.3,.9,.06),T);P.position.set(.9,1.45,3.5/2+.1),r.add(E,P),a.push({mesh:P,baseIntensity:.45,workIntensity:1.9});const w=new Se(.06,.06,.14,6),y=new Se(.07,.07,.03,6),C=e.flat(U.jamLid,.8),N=e.flat(U.jamBerry,.6),F=e.flat(U.jamAmber,.6);for(let K=0;K<4;K++){const ce=new S(w,K%2===0?N:F),we=new S(y,C);we.position.y=.08,ce.add(we),ce.position.set(.55+K*.24,1.25,3.5/2+.16),r.add(ce)}const O=new S(new le(.75,.36,.05),e.flat(U.woodLight,.85));O.position.set(-.6,2.65,3.5/2+.12);const j=new S(new Se(.08,.08,.18,6),N);j.position.set(-.6,2.65,3.5/2+.16),r.add(O,j);const H=e.flat(U.copperHoop,.62,.38),$=new S(new Se(.55,.55,1.6,8),H);$.position.set(-4.4/2-.25,.28+.8,.2);const V=new S(new yt(.55,8,6,0,Math.PI*2,0,Math.PI/2),H);V.position.set(-4.4/2-.25,.28+1.6,.2);const se=new S(new Se(.18,.18,2.2,7),H);se.position.set(-4.4/2-.25,.28+1.6+1.1,.2);const _e=new S(new mt(.3,.25,7),H);_e.position.set(-4.4/2-.25,.28+1.6+2.25,.2),r.add($,V,se,_e);const xe=new D(-4.4/2-.25,.28+1.6+2.3,.2);for(let K=0;K<4;K++){const ce=new S(l,c);ce.position.copy(xe),ce.castShadow=!1,ce.receiveShadow=!1,ce.visible=!1,r.add(ce),o.push(ce)}const Te=Cn(e,t);Te.position.set(4.4/2+.25,0,.5);const Ne=Cn(e,t);Ne.position.set(4.4/2+.45,0,-.2),Ne.rotation.y=.4,r.add(Te,Ne)}Nt(r),r.visible=!1;let h=!1,u=!1,d=0,f=0;return{object:n,setState(g,v,m){if(h=g,u=v,d=Math.max(0,Math.min(1,m)),s.visible=!g,r.visible=g,!g){for(const p of o)p.visible=!1;return}for(const p of a){const M=p.mesh.material;if(M&&M.emissive){const x=u?p.workIntensity+d*.4:p.baseIntensity;M.emissiveIntensity=x}}for(const p of o)p.visible=u},update(g){if(!h||!u)return;f+=g;const v=i==="bakery"?new D(2.45,5.38,-.6):new D(-2.45,4.18,.2);for(let m=0;m<o.length;m++){const p=(f*.48+m*.25)%1,M=o[m];M.position.y=v.y+p*2.2,M.position.x=v.x+Math.sin(f*1.8+m)*.22*p,M.position.z=v.z+Math.cos(f*1.5+m)*.18*p;const x=Math.sin(p*Math.PI)*(.65+p*.55);M.scale.setScalar(Math.max(.01,x))}}}}function Wd(){return{leg:new nn(.062,.44,3,6),boot:new le(.13,.16,.22),pantsTrousers:new Se(.16,.15,.16,8),skirtLong:new Se(.17,.36,.74,10),skirtTeacher:new Se(.16,.31,.64,10),torsoMale:new Se(.2,.165,.44,8),torsoFemale:new Se(.17,.135,.38,8),belt:new Se(.165,.165,.06,8),beltBuckle:new le(.06,.07,.04),neck:new Se(.055,.065,.1,6),arm:new nn(.048,.36,3,6),hand:new yt(.045,5,4),head:new yt(.135,10,8),eye:new yt(.024,5,4),chefToqueBase:new Se(.15,.145,.08,10),chefToquePuff:new Se(.185,.16,.2,10),chefApronChest:new le(.22,.24,.05),chefApronSkirt:new le(.26,.44,.05),chefApronPocket:new le(.14,.12,.02),chefButton:new Se(.018,.018,.02,6),chefPanHandle:new Se(.02,.02,.38,5),chefPanBase:new Se(.16,.14,.06,8),spectaclesFrame:new le(.145,.038,.025),teacherCollar:new le(.16,.08,.06),teacherRibbon:new mt(.04,.11,4),bunnyBody:new Jt(.115,1),bunnyHead:new yt(.075,7,6),bunnyEar:new mt(.028,.13,4),bunnyInnerEar:new mt(.016,.1,4),bunnyTail:new yt(.032,5,4),bunnyEye:new yt(.014,4,3),bunnyNose:new le(.016,.012,.014),shawlWrap:new Se(.25,.22,.28,9),shawlFold:new le(.24,.34,.08),shawlBrooch:new Se(.035,.035,.03,6),hairBun:new yt(.08,8,6),hairPin:new Se(.012,.012,.22,5),hairCap:new yt(.142,9,7),hairBangs:new le(.1,.06,.05),hairTeacherLock:new nn(.032,.28,3,5)}}function Ay(i,e,t=Wd()){const n=new me;n.name=`VillagerVisual_${i}`;const s=new me;s.position.set(-.11,.82,0);const r=new me;r.position.set(.11,.82,0),n.add(s,r);const o=new me;o.position.set(0,.82,0),n.add(o);const a=new me;a.position.set(-.25,1.25,0);const c=new me;c.position.set(.25,1.25,0),n.add(a,c);const l=new me;l.position.set(0,1.4,0),n.add(l);const h=e.flat(2234901,.5,.2),u=new S(t.eye,h);u.position.set(-.048,.01,.125);const d=new S(t.eye,h);d.position.set(.048,.01,.125),l.add(u,d);let f=null,g=null;if(i==="tom"){const x=e.smooth(U.skinWarm,.72),_=e.flat(2759959,.8),I=e.flat(16052198,.85),E=e.flat(16777215,.75),T=e.flat(2632757,.85),P=e.flat(3679255,.88),w=e.flat(U.copperHoop,.45,.6),y=e.flat(U.woodDark,.9),C=()=>{const De=new me,Fe=new S(t.leg,T);Fe.position.y=-.34;const ke=new S(t.boot,P);return ke.position.set(0,-.74,.03),De.add(Fe,ke),De};s.add(C()),r.add(C());const N=new S(t.torsoMale,I);N.position.y=.22;const F=new S(t.neck,x);F.position.y=.48;const O=e.flat(4865072,.5,.3);for(const De of[-.045,.045])for(let Fe=.14;Fe<=.34;Fe+=.09){const ke=new S(t.chefButton,O);ke.rotation.x=Math.PI/2,ke.position.set(De,Fe,.165),o.add(ke)}const j=new S(t.chefApronChest,E);j.position.set(0,.22,.155);const H=new S(t.chefApronSkirt,E);H.position.set(0,-.2,.145);const $=new S(t.chefApronPocket,E);$.position.set(0,-.15,.175),o.add(N,F,j,H,$);const V=new S(t.head,x),se=new S(t.hairCap,_);se.position.set(0,.02,-.015);const _e=new S(t.hairBangs,_);_e.position.set(0,.09,.11);const xe=new S(t.chefToqueBase,E);xe.position.set(0,.14,-.01);const Te=new S(t.chefToquePuff,E);Te.position.set(0,.26,-.01),l.add(V,se,_e,xe,Te);const Ne=De=>{const Fe=new me,ke=new S(t.arm,I);ke.position.y=-.2;const pe=new S(t.hand,x);return pe.position.y=-.42,Fe.add(ke,pe),{g:Fe,handMesh:pe}},K=Ne();a.add(K.g);const ce=Ne();c.add(ce.g),g=new me;const we=new S(t.chefPanHandle,y);we.rotation.x=Math.PI/2,we.position.set(0,0,.15);const fe=new S(t.chefPanBase,w);fe.position.set(0,0,.35),g.add(we,fe),g.position.set(0,-.42,.05),g.rotation.set(.3,.2,0),c.add(g)}else if(i==="yuki"){const x=e.smooth(U.skinFair,.72),_=e.flat(7226662,.78),I=e.flat(14083058,.84),E=e.flat(12075602,.75),T=e.flat(2573140,.86),P=e.flat(2761760,.88),w=e.flat(16579836,.82),y=e.flat(16103618,.75),C=e.flat(1578002,.4),N=()=>{const Z=new me,de=new S(t.leg,x);de.position.y=-.34;const Q=new S(t.boot,P);return Q.position.set(0,-.74,.03),Z.add(de,Q),Z};s.add(N()),r.add(N());const F=new S(t.skirtTeacher,T);F.position.y=-.32;const O=new S(t.torsoFemale,I);O.position.y=.2;const j=new S(t.neck,x);j.position.y=.44;const H=new S(t.teacherCollar,e.flat(16777215,.8));H.position.set(0,.38,.12);const $=new S(t.teacherRibbon,E);$.rotation.x=Math.PI,$.position.set(0,.33,.15),o.add(F,O,j,H,$);const V=new S(t.head,x),se=new S(t.hairCap,_);se.position.set(0,.02,-.015);const _e=new S(t.hairBangs,_);_e.position.set(0,.09,.11);const xe=new S(t.hairTeacherLock,_);xe.position.set(-.13,-.08,.02);const Te=new S(t.hairTeacherLock,_);Te.position.set(.13,-.08,.02);const Ne=e.flat(9065514,.4,.3),K=new S(t.spectaclesFrame,Ne);K.position.set(0,.012,.138),l.add(V,se,_e,xe,Te,K),a.rotation.set(.95,-.42,.22),c.rotation.set(.95,.42,-.22);const ce=()=>{const Z=new me,de=new S(t.arm,I);de.position.y=-.19;const Q=new S(t.hand,x);return Q.position.y=-.4,Z.add(de,Q),Z};a.add(ce()),c.add(ce()),f=new me,f.name="YukiPetBunny";const we=new S(t.bunnyBody,w);we.scale.set(1.1,.95,1.25);const fe=new S(t.bunnyHead,w);fe.position.set(0,.09,.11);const De=new S(t.bunnyEar,w);De.position.set(-.038,.21,.08),De.rotation.set(-.15,0,-.12);const Fe=new S(t.bunnyInnerEar,y);Fe.position.set(-.038,.2,.095),Fe.rotation.set(-.15,0,-.12);const ke=new S(t.bunnyEar,w);ke.position.set(.038,.21,.08),ke.rotation.set(-.15,0,.12);const pe=new S(t.bunnyInnerEar,y);pe.position.set(.038,.2,.095),pe.rotation.set(-.15,0,.12);const X=new S(t.bunnyEye,C);X.position.set(-.052,.1,.16);const ne=new S(t.bunnyEye,C);ne.position.set(.052,.1,.16);const L=new S(t.bunnyNose,y);L.position.set(0,.075,.18);const Pe=new S(t.bunnyTail,w);Pe.position.set(0,.02,-.14),f.add(we,fe,De,Fe,ke,pe,X,ne,L,Pe),f.position.set(0,.24,.24),o.add(f)}else{const x=e.smooth(U.skinWarm,.72),_=e.flat(3483682,.82),I=e.flat(7023938,.85),E=e.flat(13016143,.88),T=e.flat(14201416,.35,.65),P=e.flat(2366746,.9),w=()=>{const Te=new me,Ne=new S(t.leg,x);Ne.position.y=-.34;const K=new S(t.boot,P);return K.position.set(0,-.74,.03),Te.add(Ne,K),Te};s.add(w()),r.add(w());const y=new S(t.skirtLong,I);y.position.y=-.36;const C=new S(t.torsoFemale,I);C.position.y=.2;const N=new S(t.neck,x);N.position.y=.44;const F=new S(t.shawlWrap,E);F.position.set(0,.3,0);const O=new S(t.shawlFold,E);O.position.set(0,.2,.15);const j=new S(t.shawlBrooch,T);j.rotation.x=Math.PI/2,j.position.set(0,.24,.195),o.add(y,C,N,F,O,j);const H=new S(t.head,x),$=new S(t.hairCap,_);$.position.set(0,.02,-.015);const V=new S(t.hairBangs,_);V.position.set(0,.08,.11);const se=new S(t.hairBun,_);se.position.set(0,.05,-.16);const _e=new S(t.hairPin,T);_e.rotation.z=Math.PI/3,_e.position.set(0,.06,-.16),l.add(H,$,V,se,_e),a.rotation.set(.65,-.32,.18),c.rotation.set(.65,.32,-.18);const xe=()=>{const Te=new me,Ne=new S(t.arm,I);Ne.position.y=-.19;const K=new S(t.hand,x);return K.position.y=-.4,Te.add(Ne,K),Te};a.add(xe()),c.add(xe())}Nt(n);let v=!1,m=!1,p=0,M=0;return{object:n,setState(x,_){v=x,m=_,x||(s.rotation.x=0,r.rotation.x=0,o.position.y=.82)},tick(x){if(p+=x,v){M+=x*7.2;const _=Math.sin(M)*.44;s.rotation.x=_,r.rotation.x=-_;const I=Math.abs(Math.sin(M*2))*.032;o.position.y=.82+I,i==="tom"?(a.rotation.x=-_*.7,c.rotation.x=.15+_*.25,g&&(g.rotation.z=Math.sin(M)*.08)):i==="yuki"?(a.rotation.x=.95+Math.sin(M)*.06,c.rotation.x=.95+Math.sin(M)*.06,f&&(f.position.y=.24+I*.7,f.rotation.z=Math.sin(M)*.04)):(a.rotation.x=.65-_*.18,c.rotation.x=.65+_*.18)}else{const _=Math.sin(p*2.2)*.012;if(o.position.y=.82+_,m){const I=Math.sin(p*.9)*.14;l.rotation.y=I,i==="tom"?(c.rotation.x=.25+Math.sin(p*1.4)*.08,g&&(g.rotation.x=.3+Math.sin(p*1.8)*.08)):i==="yuki"?f&&(f.position.y=.24+Math.sin(p*2.8)*.015,f.rotation.y=Math.sin(p*1.2)*.06):l.rotation.z=Math.sin(p*.6)*.03}else l.rotation.y=0,l.rotation.z=0}}}}const Cy=(i,e)=>{const t=ay(20261025),n=new cy,s=new me;s.name="FarmProtoWorldRoot";const r=vy(i),o=_y(i,r,t);s.add(o.mesh,o.puddles);const a=xy(i,n,t);s.add(a.group);const c=fy(i,n);s.add(c.group);const l=Sy(s,i,r,n,t,e.quality),h=Bd(i),u=zd(),d=Wd(),f=[],g=[],v=[],m=[],p=[];let M=0,x=-1;const _={rain:0,drought:0,sunny:1};return{root:s,createField(I){const E=py(I,i,n,h);return f.push(E),E},createWorker(I){const E=my(I,n,u);return g.push(E),E},setStock(I,E,T){c.setStock(I,E)},setStockItems(I,E){var T;(T=c.setStockItems)==null||T.call(c,I)},setHousing(I){var E;(E=c.setHousingLevel)==null||E.call(c,I)},createFruitTree(I){const E=gy(I,i,n);return v.push(E),E},createProcessor(I){const E=Ty(I,n);return m.push(E),E},createVillager(I){const E=Ay(I,n,d);return p.push(E),E},update(I,E){var N,F;M+=I;const T=E.weather??"sunny",P=T==="rain"?1:0,w=T==="drought"?1:0,y=T==="sunny"?1:0;_.rain=dt.damp(_.rain,P,2.2,I),_.drought=dt.damp(_.drought,w,2.2,I),_.sunny=dt.damp(_.sunny,y,2.2,I);const C=E.phase==="evening"?1:E.time01>.58?dt.smoothstep(E.time01,.58,.72):0;Math.abs(C-x)>1e-4&&(x=C,n.setWindowEveningFactor(C)),o.setWeather(_),l.setWeather(_),a.anim.update(I,C,_),c.update(I);for(const O of f)(N=O.setWeather)==null||N.call(O,_),O.sway(M);for(const O of v)O.update(I,M,_);for(const O of m)O.update(I);for(const O of p)(F=O.tick)==null||F.call(O,I)},dispose(){const I=new Set,E=new Set,T=new Set,P=w=>{w.traverse(y=>{const C=y;if(C.isMesh){if(C.geometry&&I.add(C.geometry),Array.isArray(C.material))for(const N of C.material)N&&E.add(N);else C.material&&E.add(C.material);C.isInstancedMesh&&T.add(C)}})};P(s);for(const w of f)P(w.object);for(const w of g)P(w.object);for(const w of v)P(w.object);for(const w of m)P(w.object);for(const w of p)P(w.object);for(const w of Object.values(h))I.add(w);for(const w of Object.values(u))I.add(w);for(const w of Object.values(d))I.add(w);for(const w of T)w.dispose();for(const w of I)w.dispose();for(const w of E)w.dispose();n.dispose()}}},Ry=Object.freeze(Object.defineProperty({__proto__:null,buildWorld:Cy},Symbol.toStringTag,{value:"Module"})),Py={mapSize:[72,56],fieldSlots:[[-17,-9],[-9,-9],[-17,-1],[-9,-1],[-17,7],[-9,7]],fieldSize:[6.5,6.5],orchardSlots:[[-13,-17]],orchardSize:[5,5],buildings:{warehouse:{pos:[2,-6],rotY:0,size:[6,5],door:[2,-3]},mill:{pos:[15,-10],rotY:-.35,size:[5,5],door:[14,-7]},shop:{pos:[14,9],rotY:-.5,size:[6,5],door:[12.4,12]},farmhouse:{pos:[-3,14],rotY:.3,size:[7,6],door:[-3,10.5]},bakery:{pos:[8,-15],rotY:0,size:[5,4],door:[8,-12]},preservery:{pos:[1,-15],rotY:0,size:[5,4],door:[1,-12]}},spots:{field:[-5,-3],warehouse:[2,-3],mill:[14,-7],shop:[12.4,12],orchard:[-13,-14],bakery:[8,-12],preservery:[1,-12]},paths:{"field>warehouse":[[-5,-3],[-1.5,-2],[2,-3]],"warehouse>mill":[[2,-3],[7,-3],[11,-5],[14,-7]],"warehouse>shop":[[2,-3],[4,0],[7.5,5],[9.1,8.8],[10,11.1],[12.4,12]],"orchard>warehouse":[[-13,-14],[-5,-12],[-3,-5],[-1.5,-2],[2,-3]],"warehouse>bakery":[[2,-3],[5.8,-3.6],[7,-8],[8,-12]],"warehouse>preservery":[[2,-3],[-1.5,-2],[-2.4,-6],[-1.5,-10],[1,-12]]},plaza:[3,.5],villagers:{tom:{gate:[-30,23.8],plaza:[-.8,2.8],shop:[10.4,13.2],toPlaza:[[-30,23.8],[-14,14],[0,5.5],[-.8,2.8]],toShop:[[-.8,2.8],[2.5,4.6],[7.5,5],[9.1,8.8],[10.4,13.2]]},yuki:{gate:[-5.4,-25],plaza:[1.2,-1.6],shop:[11.4,13.8],toPlaza:[[-5.4,-25],[-4.5,-13],[-1.5,-2],[1.2,-1.6]],toShop:[[1.2,-1.6],[4.6,-.6],[6.6,2.6],[7.5,5],[9.1,8.8],[11.4,13.8]]},lin:{gate:[34,-22.6],plaza:[6.5,-.8],shop:[12.5,14.3],toPlaza:[[34,-22.6],[24,-14],[12,-3.5],[6.5,-.8]],toShop:[[6.5,-.8],[7,2],[7.5,5],[9.1,8.8],[12.5,14.3]]}}},Rn=Object.freeze({seed:178,cooldown:50,lifetime:120,multiplier:1.02,heartBonus:0,morningGift:!0,travelSeconds:8}),gn={tom:{name:"阿湯",day:1,favorite:"bread",likes:["flour","cabbage"]},yuki:{name:"小雪",day:2,favorite:"carrot",likes:["apple"]},lin:{name:"林嬸",day:3,favorite:"jam",likes:["apple","bread"]}},Er=["tom","yuki","lin"];function Xd(){return{socialSeed:Rn.seed,nextCommissionId:1,gifted:Object.fromEntries(Rt.map(i=>[i,0])),received:Object.fromEntries(Rt.map(i=>[i,0])),villagers:Er.map(i=>({id:i,appeared:!1,points:0,giftedDay:0,rewardDay:0,location:"gate",destination:"gate",progress:0,commission:null,nextCommissionAt:0,completed:0,expired:0}))}}const gu=i=>Math.floor(i.points/10),$d=(i,e)=>e==="wheat"?0:gn[i].favorite===e?3:gn[i].likes.includes(e)?2:1;function Ly(i,e,t){const n=i.villagers.find(r=>r.id===e);if(!n)return{ok:!1,reason:"Invalid villager"};if(!Rt.includes(t))return{ok:!1,reason:"Unknown item"};if(!n.appeared)return{ok:!1,reason:"Locked"};const s=Math.floor(i.time/180)+1;return n.giftedDay===s?{ok:!1,reason:"Already gifted"}:i.inventory[t]?(i.inventory[t]--,i.gifted[t]++,n.giftedDay=s,n.points=Math.min(50,n.points+$d(e,t)),{ok:!0}):{ok:!1,reason:"No item"}}const Co=Kd;function jd(i,e,t){return Math.round(e*Ro[i]*Rn.multiplier*(t?1+Rn.heartBonus:1))}function qd(i,e,t){e.commission=null,e.nextCommissionAt=i.time+Rn.cooldown,e.points=Math.max(0,Math.min(50,e.points+(t?-1:4))),t?e.expired++:e.completed++}function Iy(i){for(const e of i.villagers)if(!(i.day<gn[e.id].day)){if(e.appeared=!0,e.commission&&e.commission.expiresAt<=i.time&&qd(i,e,!0),i.time%180===0&&e.rewardDay!==i.day){e.rewardDay=i.day;const t=gn[e.id].likes[0];Rn.morningGift&&gu(e)>=3&&Co(i,t)&&Zi(i)<ii(i)&&(i.inventory[t]++,i.received[t]++)}if(!e.commission&&i.time>=e.nextCommissionAt&&i.time%180<120){i.socialSeed=Math.imul(i.socialSeed,1664525)+1013904223>>>0;const t=Rt.filter(o=>(o===gn[e.id].favorite||gn[e.id].likes.includes(o))&&Co(i,o)&&i.produced[o]>0),n=t.length?t[(i.socialSeed>>>8)%t.length]:"flour",s=2+i.socialSeed%3,r=gu(e)>=2;e.commission={id:i.nextCommissionId++,items:[{item:n,required:s,delivered:0}],bonus:r,reward:jd(n,s,r),expiresAt:i.time+Rn.lifetime}}Dy(e,i.time%180>=120?"gate":e.commission?"shop":"plaza")}}function Dy(i,e){i.location!==i.destination&&(i.progress++,i.progress>=Rn.travelSeconds&&(i.location=i.destination,i.progress=0)),i.location===i.destination&&i.location!==e&&(i.destination=i.location==="plaza"?e:"plaza",i.progress=0)}function Uy(i){const e=s=>Number.isSafeInteger(s)&&s>=0,t=Math.floor(i.time/180)+1;if(!e(i.socialSeed)||i.socialSeed>4294967295||!e(i.nextCommissionId)||!i.nextCommissionId||![i.gifted,i.received].every(s=>s&&Object.keys(s).length===Rt.length&&Rt.every(r=>e(s[r])&&(Co(i,r)||!s[r])))||!Array.isArray(i.villagers)||i.villagers.length!==3)return!1;const n=new Set;return i.villagers.every((s,r)=>{var c;if(!s||s.id!==Er[r]||typeof s.appeared!="boolean"||s.appeared&&t<gn[s.id].day||!e(s.points)||s.points>50||!e(s.giftedDay)||s.giftedDay>t||!e(s.rewardDay)||s.rewardDay>t||!e(s.completed)||!e(s.expired)||!e(s.nextCommissionAt)||s.nextCommissionAt>i.time+Rn.cooldown||!["gate","plaza","shop"].includes(s.location)||!["gate","plaza","shop"].includes(s.destination)||!e(s.progress)||s.progress>=Rn.travelSeconds||s.location===s.destination&&s.progress!==0||s.location!==s.destination&&s.location!=="plaza"&&s.destination!=="plaza"||!s.appeared&&(s.points||s.giftedDay||s.rewardDay||s.completed||s.expired||s.commission||s.nextCommissionAt||s.location!=="gate"||s.destination!=="gate"))return!1;if(s.commission===null)return!0;const o=s.commission,a=(c=o==null?void 0:o.items)==null?void 0:c[0];return!o||!e(o.id)||!o.id||o.id>=i.nextCommissionId||n.has(o.id)||!Array.isArray(o.items)||o.items.length!==1||!a||!Rt.includes(a.item)||a.item==="wheat"||!Co(i,a.item)||a.item!=="flour"&&(!gn[s.id].likes.includes(a.item)&&gn[s.id].favorite!==a.item||!i.produced[a.item])||!e(a.required)||a.required<2||a.required>4||!e(a.delivered)||a.delivered>=a.required||typeof o.bonus!="boolean"||o.reward!==jd(a.item,a.required,o.bonus)||!e(o.expiresAt)||o.expiresAt<=i.time||o.expiresAt>i.time+Rn.lifetime?!1:(n.add(o.id),!0)})}const Rt=["wheat","flour","carrot","cabbage","apple","bread","jam"],Ro={wheat:0,flour:8,carrot:4,cabbage:7,apple:5,bread:20,jam:42},hn={wheat:{seconds:20,yield:4},carrot:{seconds:24,yield:3},cabbage:{seconds:36,yield:4}},bi={bakery:{job:"bake",input:"flour",amount:2,output:"bread",seconds:6,day:3},preservery:{job:"preserve",input:"apple",amount:3,output:"jam",seconds:8,day:5}},vi=()=>({wheat:0,flour:0,carrot:0,cabbage:0,apple:0,bread:0,jam:0}),Po=()=>({batch:null,progress01:0,reserved:0,waiting:"Locked"}),Yd=()=>({id:0,planted:!1,growth:0,growth01:0,progress01:0,ripe:!1,harvested:0,readyAt:0,harvestedAt:0,batches:0,waiting:"Locked"}),bl=i=>({id:i,growth:0,planted:!0,harvested:0,crop:"wheat",nextCrop:"wheat",readyAt:0,harvestedAt:0});function Pt(i){var a;const e=Math.floor(i.time/180)+1,t=(c,l)=>i.mode==="endless"?i.stats.earned>=l:e>=c,n=t(2,120),s=t(3,300),r=t(4,600),o=t(5,1e3);return{crops:n?["wheat","carrot","cabbage"]:["wheat"],jobs:Al.filter(c=>(c!=="bake"||s)&&(c!=="preserve"||o)),orchard:r,bakery:s,preservery:o,newToday:i.mode==="endless"?[]:((a={2:["carrot","cabbage"],3:["bakery"],4:["orchard"],5:["preservery"]}[e])==null?void 0:a.slice())??[]}}function Kd(i,e){const t=Pt(i);return e==="carrot"||e==="cabbage"?t.crops.includes(e):e==="bread"?t.bakery:e==="apple"?t.orchard:e==="jam"?t.preservery:!0}const ji=Object.freeze({capacities:Object.freeze([4,6,8]),upgradeCosts:Object.freeze([120,240]),recruitCost:80});function Un(i){return ji.capacities[i.housingLevel]}function Sl(i){return ji.upgradeCosts[i.housingLevel]??0}function Lo(i){return ji.recruitCost}function Io(i){return i.mode!=="endless"?{ok:!1,reason:"Locked"}:i.housingLevel>=ji.capacities.length-1?{ok:!1,reason:"Max level"}:i.coins<Sl(i)?{ok:!1,reason:"Not enough coins"}:{ok:!0}}function Do(i){return i.mode!=="endless"?{ok:!1,reason:"Locked"}:i.workers.length>=Un(i)?{ok:!1,reason:"Housing full"}:i.coins<Lo()?{ok:!1,reason:"Not enough coins"}:{ok:!0}}const un=Object.freeze({earned:2600,days:5}),_i=Object.freeze({sold:24,milled:24,ordersCompleted:2,reward:8}),cr=["sold","milled","ordersCompleted"],El=i=>({day:i,sold:0,milled:0,ordersCompleted:0,claimed:[]});function Tl(i){return i>=un.earned?3:i>=Math.round(un.earned*.85)?2:1}function Ny(i,e){const t=!i||e&&e.earned>i.earned?e:i;return t?{...t}:null}function ky(i){return{daily:cr.map(e=>({key:e,progress:i.daily[e],target:_i[e],claimed:i.daily.claimed.includes(e),reward:_i.reward})),day:i.daily.day,streak:i.streak,bestStreak:i.bestStreak,bonusEarned:i.bonusEarned,result:i.result?{...i.result}:null,resultUnknown:i.resultUnknown}}const nt=Object.freeze({daySeconds:180,growSeconds:20,harvestYield:4,haulSeconds:3,millSeconds:5,maxFields:6,sellSeconds:3,flourPrice:8,wheatPerFlour:2,capacity:24,weatherGrowth:Object.freeze({sunny:1,rain:1.3,drought:.7})}),mr=i=>Math.imul(i,1664525)+1013904223>>>0,Uo=i=>["sunny","rain","drought"][(i>>>16)%3],Gc=178,vu=["field","warehouse","mill","shop","orchard","bakery","preservery"],Al=["farm","haul","mill","sell","idle","bake","preserve"],gr=["Claude","Codex","Gemini","DeepSeek"],No=12;function Jd(i){return typeof i=="string"&&i.trim().length>0&&Array.from(i).length<=No&&!/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}]/u.test(i)}function Fy(i="challenge"){if(i!=="challenge"&&i!=="endless")throw new Error("Invalid game mode");return{weather:"sunny",forecast:Uo(mr(Gc)),weatherSeed:Gc,...Xd(),version:6,mode:i,housingLevel:0,daily:El(1),streak:0,bestStreak:0,bonusEarned:0,result:null,resultUnknown:!1,orders:[],seed:178,nextOrderId:1,time:0,remainder:0,day:1,phase:"morning",paused:!1,coins:30,inventory:vi(),produced:vi(),consumed:vi(),shipped:vi(),trees:[Yd()],processors:{bakery:Po(),preservery:Po()},fields:[0,1,2].map(bl),workers:Al.slice(0,4).map((e,t)=>({id:t,name:gr[t],job:e,progress:0,location:"field",destination:"field",cargo:0,cargoItem:"wheat"})),upgrades:{field:0,warehouse:0,mill:0},stats:{harvested:0,milled:0,sold:0,earned:0}}}function ii(i){return nt.capacity+i.upgrades.warehouse*12}function Ko(i,e){return 40*(i.upgrades[e]+1)}function wi(i,e){return e!=="field"&&e!=="warehouse"&&e!=="mill"?{ok:!1,reason:"Invalid upgrade"}:e==="field"&&i.fields.length>=nt.maxFields?{ok:!1,reason:"No land"}:e==="mill"&&i.upgrades.mill>=nt.millSeconds-1?{ok:!1,reason:"Max level"}:i.coins<Ko(i,e)?{ok:!1,reason:"Not enough coins"}:{ok:!0}}function Zi(i){return Rt.reduce((e,t)=>e+i.inventory[t],0)+i.processors.bakery.reserved+i.processors.preservery.reserved}function Oy(i){return Math.max(0,ii(i)-Zi(i))}function Zd(i,e){switch(e.type){case"upgradeHousing":{const t=Io(i);return t.ok?(i.coins-=Sl(i),i.housingLevel++,{ok:!0}):t}case"recruitWorker":{const t=Do(i);if(!t.ok)return t;const n=i.workers.length;return i.coins-=Lo(),i.workers.push({id:n,name:`農友 ${n+1}`,job:"idle",progress:0,location:"field",destination:"field",cargo:0,cargoItem:"wheat"}),{ok:!0}}case"gift":return Ly(i,e.villagerId,e.item);case"renameWorker":{const t=i.workers.find(s=>s.id===e.workerId);if(!t)return{ok:!1,reason:"Invalid worker"};const n=typeof e.name=="string"?e.name.trim():e.name;return Jd(n)?(t.name=n,{ok:!0}):{ok:!1,reason:"Invalid name"}}case"pause":return typeof e.paused!="boolean"?{ok:!1,reason:"Invalid pause"}:(i.paused=e.paused,{ok:!0});case"plantTree":{if(!Pt(i).orchard)return{ok:!1,reason:"Locked"};const t=i.trees.find(n=>n.id===(e.treeId??0));return!t||t.planted?{ok:!1,reason:"Tree unavailable"}:(t.planted=!0,t.waiting="Growing",{ok:!0})}case"setNextCrop":case"plant":{const t=i.fields.find(s=>s.id===e.fieldId),n=e.crop??(t==null?void 0:t.nextCrop)??"wheat";return Object.hasOwn(hn,n)?Pt(i).crops.includes(n)?e.type==="setNextCrop"?t?(t.nextCrop=n,{ok:!0}):{ok:!1,reason:"Field unavailable"}:!t||t.planted||t.harvested>0?{ok:!1,reason:"Field unavailable"}:(t.crop=t.nextCrop=n,t.readyAt=0,t.planted=!0,t.growth=0,{ok:!0}):{ok:!1,reason:"Locked"}:{ok:!1,reason:"Unknown crop"}}case"assign":{const t=i.workers.find(n=>n.id===e.workerId);return!t||!Al.includes(e.job)?{ok:!1,reason:"Invalid worker or job"}:Pt(i).jobs.includes(e.job)?t.job!==e.job&&Object.values(i.processors).some(n=>{var s;return((s=n.batch)==null?void 0:s.workerId)===t.id})?{ok:!1,reason:"Batch in progress"}:["bake","preserve"].includes(e.job)&&i.workers.some(n=>n.id!==t.id&&n.job===e.job)?{ok:!1,reason:"Station busy"}:t.cargo?{ok:!1,reason:"Worker must deliver cargo first"}:t.job===e.job?{ok:!0}:(t.job=e.job,t.progress=0,{ok:!0}):{ok:!1,reason:"Locked"}}case"upgrade":{const t=wi(i,e.target);if(!t.ok)return t;const n=Ko(i,e.target);return i.coins-=n,i.upgrades[e.target]++,e.target==="field"&&i.fields.push(bl(i.fields.length)),{ok:!0}}default:return{ok:!1,reason:"Unknown action"}}}function By(i){if(i.time++,i.day=Math.floor(i.time/nt.daySeconds)+1,i.daily.day!==i.day&&(i.daily=El(i.day),i.weather=i.forecast,i.weatherSeed=mr(i.weatherSeed),i.forecast=Uo(mr(i.weatherSeed))),Iy(i),i.orders.some(e=>e.expiresAt<=i.time)&&(i.streak=0),i.orders=i.orders.filter(e=>e.expiresAt>i.time),i.time%40===0&&i.orders.length<3){i.seed=Math.imul(i.seed,1664525)+1013904223>>>0;const e=2+i.seed%5,t=Rt.filter(o=>o!=="wheat"&&(o==="flour"||i.produced[o]>0)),n=Math.min(t.length,e,i.day>=5?3:i.day>=2?2:1),s=(i.seed>>>8)%t.length,r=Array.from({length:n},(o,a)=>({item:t[(s+a)%t.length],required:Math.floor(e/n)+(a<e%n?1:0),delivered:0}));i.orders.push({id:i.nextOrderId++,items:r,reward:Math.round(r.reduce((o,a)=>o+a.required*Ro[a.item],0)*1.5),expiresAt:i.time+90})}i.phase=["morning","afternoon","evening"][Math.floor(i.time%nt.daySeconds/60)];for(const e of i.fields)e.planted&&(e.growth=Math.min(hn[e.crop].seconds,Math.round((e.growth+nt.weatherGrowth[i.weather])*10)/10));for(const e of i.fields)e.planted&&e.growth>=hn[e.crop].seconds&&!e.readyAt&&(e.readyAt=i.time);for(const e of i.trees)e.planted&&!e.ripe&&!e.harvested&&(e.growth=Math.min(40,Math.round((e.growth+nt.weatherGrowth[i.weather])*10)/10),e.growth===40&&(e.ripe=!0,e.readyAt=i.time)),e.growth01=e.batches>0?1:e.growth/40;for(const e of i.workers)if(e.job==="farm"){e.location=e.destination="field";const t=[...i.fields.filter(n=>n.planted&&n.growth>=hn[n.crop].seconds).map(n=>({at:n.readyAt,id:n.id,f:n})),...i.trees.filter(n=>n.ripe).map(n=>({at:n.readyAt,id:100+n.id,t:n}))].sort((n,s)=>n.at-s.at||n.id-s.id)[0];if(t&&"f"in t){const n=t.f;n.planted=!1,n.growth=0,n.harvested=hn[n.crop].yield,n.harvestedAt=i.time,i.stats.harvested+=n.harvested,i.produced[n.crop]+=n.harvested}else if(t&&"t"in t){const n=t.t;n.ripe=!1,n.growth=0,n.harvested=3,n.harvestedAt=i.time,n.batches++,i.stats.harvested+=3,i.produced.apple+=3,e.location=e.destination="orchard"}else{const n=i.fields.find(s=>!s.planted&&!s.harvested);n&&(n.crop=n.nextCrop,n.planted=!0,n.growth=0,n.readyAt=0)}}else if(e.job==="haul"){if(e.cargo){if(e.destination="warehouse",e.progress=Math.min(nt.haulSeconds,e.progress+1),e.progress>=nt.haulSeconds){const t=Math.min(e.cargo,Oy(i));i.inventory[e.cargoItem]+=t,e.cargo-=t,e.location="warehouse",e.cargo||(e.progress=0)}}else if(e.destination="field",e.progress++,e.progress>=nt.haulSeconds){e.location="field",e.progress=0;const t=[...i.fields.map(n=>({source:n,item:n.crop,spot:"field",id:n.id})),...i.trees.map(n=>({source:n,item:"apple",spot:"orchard",id:100+n.id}))].filter(n=>n.source.harvested>0).sort((n,s)=>n.source.harvestedAt-s.source.harvestedAt||n.id-s.id)[0];t&&(e.cargo=Math.min(4,t.source.harvested),t.source.harvested-=e.cargo,e.cargoItem=t.item,e.location=e.destination=t.spot)}}else if(e.job==="mill"){if(e.location=e.destination="mill",i.inventory.wheat<nt.wheatPerFlour){e.progress=0;continue}++e.progress>=Math.max(1,nt.millSeconds-i.upgrades.mill)&&(e.progress=0,i.inventory.wheat-=nt.wheatPerFlour,i.inventory.flour++,i.consumed.wheat+=nt.wheatPerFlour,i.produced.flour++,i.stats.milled++,i.daily.milled++)}else if(e.job==="sell"){e.location=e.destination="shop";const n=[...i.orders,...i.villagers.flatMap(o=>o.commission?[o.commission]:[])].sort((o,a)=>o.expiresAt-a.expiresAt||o.id-a.id).find(o=>o.items.some(a=>a.delivered<a.required&&i.inventory[a.item]>0)),s=n==null?void 0:n.items.slice().sort((o,a)=>Rt.indexOf(o.item)-Rt.indexOf(a.item)).find(o=>o.delivered<o.required&&i.inventory[o.item]>0),r=(s==null?void 0:s.item)??Rt.find(o=>o!=="wheat"&&i.inventory[o]>0);if(!r){e.progress=0;continue}if(++e.progress>=nt.sellSeconds){e.progress=0,i.inventory[r]--,i.shipped[r]++,i.stats.sold++,i.daily.sold++;let o=Ro[r];if(n&&s&&(s.delivered++,o=0,n.items.every(a=>a.delivered===a.required))){const a=i.villagers.find(c=>c.commission===n);if(a)o=n.reward,qd(i,a,!1);else{o=n.reward,i.orders.splice(i.orders.indexOf(n),1),i.daily.ordersCompleted++,i.streak++,i.bestStreak=Math.max(i.bestStreak,i.streak);const c=Math.min(8,(i.streak-1)*2);o+=c,i.bonusEarned+=c}}i.coins+=o,i.stats.earned+=o}}for(const e of["bakery","preservery"]){const t=i.processors[e],n=bi[e],s=i.workers.find(r=>r.job===n.job);if(!Pt(i)[e]){t.waiting="Locked";continue}if(!s){t.waiting="No worker";continue}if(s.location=s.destination=e,!t.batch){if(t.progress01=0,i.inventory[n.input]<n.amount){t.waiting="Missing ingredients";continue}if(Zi(i)-n.amount+1>ii(i)){t.waiting="Warehouse full";continue}i.inventory[n.input]-=n.amount,i.consumed[n.input]+=n.amount,t.batch={item:n.output,remaining:n.seconds,workerId:s.id},t.reserved=1}t.waiting=null,t.batch.remaining--,t.progress01=1-t.batch.remaining/n.seconds,t.batch.remaining||(i.inventory[n.output]++,i.produced[n.output]++,t.batch=null,t.reserved=0)}for(const e of i.trees)e.progress01=e.growth/40,e.waiting=Pt(i).orchard?e.planted?e.harvested?"Awaiting haul":e.ripe?"Awaiting harvest":"Growing":null:"Locked";for(const e of cr)i.daily[e]>=_i[e]&&!i.daily.claimed.includes(e)&&(i.daily.claimed.push(e),i.coins+=_i.reward,i.stats.earned+=_i.reward,i.bonusEarned+=_i.reward);i.mode==="challenge"&&i.time===un.days*nt.daySeconds&&!i.resultUnknown&&!i.result&&(i.result={earned:i.stats.earned,stars:Tl(i.stats.earned)})}function Qd(i,e){if(!Number.isFinite(e)||e<0||e>3600)throw new RangeError("seconds must be between 0 and 3600");if(i.paused)return i;i.remainder+=e;const t=Math.floor(i.remainder+1e-9);i.remainder=Math.max(0,i.remainder-t);for(let n=0;n<t;n++)By(i);return i}function zy(i){return JSON.stringify(i)}function Hy(i){var o,a,c,l;const e=JSON.parse(i),t=[1,2,3].includes(e==null?void 0:e.version);if((e==null?void 0:e.version)===1&&(e.version=2,e.orders=[],e.seed=178,e.nextOrderId=1),(e==null?void 0:e.version)===2&&(e.version=3,e.daily=El(Math.floor(e.time/nt.daySeconds)+1),e.streak=0,e.bestStreak=0,e.bonusEarned=0,e.result=null,e.resultUnknown=e.time>=un.days*nt.daySeconds),(e==null?void 0:e.version)===3){e.version=4,e.inventory&&(e.inventory={...vi(),...e.inventory}),Array.isArray(e.fields)&&(e.fields=e.fields.map(h=>({...bl(h.id),...h}))),Array.isArray(e.workers)&&(e.workers=e.workers.map(h=>({...h,cargoItem:h.cargoItem??"wheat"}))),Array.isArray(e.orders)&&(e.orders=e.orders.map(h=>h.items?h:{id:h.id,items:[{item:"flour",required:h.flour,delivered:h.delivered}],reward:h.reward,expiresAt:h.expiresAt})),e.produced??(e.produced={...vi(),wheat:(o=e.stats)==null?void 0:o.harvested,flour:(a=e.stats)==null?void 0:a.milled}),e.consumed??(e.consumed={...vi(),wheat:2*((c=e.stats)==null?void 0:c.milled)}),e.shipped??(e.shipped={...vi(),flour:(l=e.stats)==null?void 0:l.sold}),e.trees??(e.trees=[Yd()]),e.processors??(e.processors={bakery:Po(),preservery:Po()});for(const h of["bakery","preservery"])e.processors[h].batch||(e.processors[h].waiting=Math.floor(e.time/180)+1<bi[h].day?"Locked":"No worker");for(const h of e.trees)h.planted||(h.waiting=e.time<540?"Locked":null)}(e==null?void 0:e.version)===4&&(Object.assign(e,Xd()),e.version=5),(e==null?void 0:e.version)===5&&(e.version=6,e.mode="challenge",e.housingLevel=0);const n=e;t&&n&&!["weather","forecast","weatherSeed"].some(h=>Object.hasOwn(n,h))&&(n.weather="sunny",n.weatherSeed=Gc,n.forecast=Uo(mr(n.weatherSeed)));const s=h=>Number.isSafeInteger(h)&&h>=0,r=h=>h==="haul"?nt.haulSeconds:h==="mill"?nt.millSeconds-1:h==="sell"?nt.sellSeconds-1:0;if(!n||n.version!==6||!["challenge","endless"].includes(n.mode)||!s(n.housingLevel)||n.housingLevel>=ji.capacities.length||n.mode==="challenge"&&n.housingLevel!==0||!s(n.time)||!s(n.coins)||typeof n.paused!="boolean"||!s(n.seed)||n.seed>4294967295||!s(n.nextOrderId)||n.nextOrderId<1||!s(n.weatherSeed)||n.weatherSeed>4294967295||!["sunny","rain","drought"].includes(n.weather)||n.time<nt.daySeconds&&n.weather!=="sunny"||n.forecast!==Uo(mr(n.weatherSeed))||!Array.isArray(n.orders)||n.orders.length>3||!n.orders.every((h,u)=>h&&s(h.id)&&h.id>0&&h.id<n.nextOrderId&&(u===0||h.id>n.orders[u-1].id)&&Array.isArray(h.items)&&h.items.length>=1&&h.items.length<=3&&new Set(h.items.map(d=>d.item)).size===h.items.length&&h.items.every(d=>d&&Rt.includes(d.item)&&d.item!=="wheat"&&s(d.required)&&d.required>=1&&s(d.delivered)&&d.delivered<=d.required)&&h.items.some(d=>d.delivered<d.required)&&h.items.reduce((d,f)=>d+f.required,0)>=2&&h.items.reduce((d,f)=>d+f.required,0)<=6&&h.reward===Math.round(h.items.reduce((d,f)=>d+f.required*Ro[f.item],0)*1.5)&&s(h.expiresAt)&&h.expiresAt>n.time&&h.expiresAt<=n.time+90)||!Number.isFinite(n.remainder)||n.remainder<0||n.remainder>=1||!n.inventory||!Rt.every(h=>s(n.inventory[h]))||!n.upgrades||!["field","warehouse","mill"].every(h=>s(n.upgrades[h]))||n.upgrades.mill>nt.millSeconds-1||!n.stats||!["harvested","milled","sold","earned"].every(h=>s(n.stats[h]))||!Array.isArray(n.fields)||n.fields.length!==3+n.upgrades.field||n.fields.length>nt.maxFields||!n.fields.every((h,u)=>h&&h.id===u&&Number.isFinite(h.growth)&&h.growth>=0&&Object.hasOwn(hn,h.crop)&&Pt(n).crops.includes(h.crop)&&Pt(n).crops.includes(h.nextCrop)&&s(h.readyAt)&&h.readyAt<=n.time&&s(h.harvestedAt)&&h.harvestedAt<=n.time&&h.growth<=hn[h.crop].seconds&&typeof h.planted=="boolean"&&(h.planted||h.growth===0)&&s(h.harvested)&&h.harvested<=hn[h.crop].yield&&(!h.planted||!h.harvested))||!Array.isArray(n.workers)||(n.mode==="challenge"?n.workers.length!==4:n.workers.length<4||n.workers.length>Un(n))||!n.workers.every((h,u)=>h&&h.id===u&&Pt(n).jobs.includes(h.job)&&Rt.includes(h.cargoItem)&&s(h.progress)&&h.progress<=r(h.job)&&s(h.cargo)&&h.cargo<=4&&(h.cargo===0||h.job==="haul")&&vu.includes(h.location)&&vu.includes(h.destination))||!Vy(n)||!Uy(n)||Zi(n)>ii(n))throw new Error("Invalid farm save");if(!n.daily||n.daily.day!==Math.floor(n.time/nt.daySeconds)+1||!cr.every(h=>s(n.daily[h]))||n.daily.sold>n.stats.sold||n.daily.milled>n.stats.milled||n.daily.ordersCompleted>n.daily.sold||!Array.isArray(n.daily.claimed)||new Set(n.daily.claimed).size!==n.daily.claimed.length||!n.daily.claimed.every(h=>cr.includes(h))||!cr.every(h=>n.daily.claimed.includes(h)===n.daily[h]>=_i[h])||!s(n.streak)||!s(n.bestStreak)||n.streak>n.bestStreak||n.bestStreak>=n.nextOrderId||!s(n.bonusEarned)||n.bonusEarned>n.stats.earned||n.bonusEarned<n.daily.claimed.length*_i.reward||typeof n.resultUnknown!="boolean"||(n.mode==="endless"||n.time<un.days*nt.daySeconds?n.result!==null||n.resultUnknown:n.resultUnknown?n.result!==null:!n.result||!s(n.result.earned)||n.result.earned>n.stats.earned||n.time===un.days*nt.daySeconds&&n.result.earned!==n.stats.earned))throw new Error("Invalid farm save");n.result&&(n.result.stars=Tl(n.result.earned));for(const h of n.workers){if(Object.hasOwn(h,"name")||(h.name=gr[h.id]),!Jd(h.name))throw new Error("Invalid farm save");h.name=h.name.trim()}return n.day=Math.floor(n.time/nt.daySeconds)+1,n.phase=["morning","afternoon","evening"][Math.floor(n.time%nt.daySeconds/60)],n}function Vy(i){const e=o=>Number.isSafeInteger(o)&&o>=0,t=o=>o&&Object.keys(o).length===Rt.length&&Rt.every(a=>e(o[a]));if(![i.inventory,i.produced,i.consumed,i.shipped].every(t)||!i.processors||Object.keys(i.processors).length!==2||!Array.isArray(i.trees)||i.trees.length!==1)return!1;const n=Math.floor(i.time/180)+1,s=[null,"Locked","No worker","Missing ingredients","Warehouse full","Growing","Awaiting harvest","Awaiting haul"];for(const o of["bakery","preservery"]){const a=i.processors[o],c=bi[o];if(!a||!Number.isFinite(a.progress01)||a.progress01<0||a.progress01>1||!s.includes(a.waiting)||i.workers.filter(l=>l.job===c.job).length>1)return!1;if(a.batch){const l=a.batch;if(!Pt(i)[o]||l.item!==c.output||!e(l.remaining)||l.remaining<1||l.remaining>=c.seconds||a.reserved!==1||a.progress01!==1-l.remaining/c.seconds||!i.workers.some(h=>h.id===l.workerId&&h.job===c.job))return!1}else if(a.batch!==null||a.reserved!==0||a.progress01!==0&&a.progress01!==1)return!1}if(!i.trees.every((o,a)=>o&&o.id===a&&typeof o.planted=="boolean"&&typeof o.ripe=="boolean"&&Number.isFinite(o.growth)&&o.growth>=0&&o.growth<=40&&e(o.harvested)&&o.harvested<=3&&e(o.batches)&&e(o.readyAt)&&o.readyAt<=i.time&&e(o.harvestedAt)&&o.harvestedAt<=i.time&&s.includes(o.waiting)&&o.progress01===o.growth/40&&o.growth01===(o.batches?1:o.growth/40)&&(!o.ripe||o.growth===40&&!o.harvested)&&(!o.harvested||o.growth===0&&!o.ripe)&&(o.planted?Pt(i).orchard:!o.growth&&!o.ripe&&!o.harvested&&!o.batches)))return!1;const r=o=>Kd(i,o);return Rt.every(o=>r(o)||!i.inventory[o]&&!i.produced[o]&&!i.consumed[o]&&!i.shipped[o])&&i.workers.every(o=>!o.cargo||r(o.cargoItem)&&["wheat","carrot","cabbage","apple"].includes(o.cargoItem))&&i.orders.every(o=>o.items.length<=(n>=5?3:n>=2?2:1)&&o.items.every(a=>r(a.item)&&(a.item==="flour"||i.produced[a.item]>0)))}const Qt={wheat:"🌾",flour:"🥣",carrot:"🥕",cabbage:"🥬",apple:"🍎",bread:"🍞",jam:"🍯"},mi={wheat:"小麥",flour:"麵粉",carrot:"胡蘿蔔",cabbage:"甘藍",apple:"蘋果",bread:"麵包",jam:"果醬"},Gy=["wheat","carrot","cabbage"],Oa={carrot:"🥕胡蘿蔔",cabbage:"🥬甘藍",bakery:"🍞麵包坊",orchard:"🍎蘋果樹",preservery:"🍯果醬坊"},_u={carrot:"點空田名牌選作物",cabbage:"點空田名牌選作物",bakery:"派一個人去烘焙（2 麵粉 → 1 麵包）",orchard:"點蘋果樹的名牌種下去",preservery:"派一個人去製醬（3 蘋果 → 1 果醬）"},ef={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Qi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Wy=new ul(-1,1,1,-1,0,1);class Xy extends Bt{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}}const $y=new Xy;class Jo{constructor(e){this._mesh=new S($y,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Wy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class jy extends Qi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ur.clone(e.uniforms),this.material=new Gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Jo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class xu extends Qi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class qy extends Qi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Yy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ce);this._width=n.width,this._height=n.height,t=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:kn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jy(ef),this.copyPass.material.blending=Zn,this.clock=new Od}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}xu!==void 0&&(o instanceof xu?n=!0:o instanceof qy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ky extends Qi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ue}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const Jy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Is extends Qi{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new Ue(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(r,o,{type:kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new dn(r,o,{type:kn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new dn(r,o,{type:kn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Jy;this.highPassUniforms=ur.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=ef;this.copyUniforms=ur.clone(h.uniforms),this.blendMaterial=new Gt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:qa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ue,this.oldClearAlpha=1,this.basic=new Vo,this.fsQuad=new Jo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Is.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Is.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Gt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Is.BlurDirectionX=new Ce(1,0);Is.BlurDirectionY=new Ce(0,1);const Zy={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Qy extends Qi{constructor(){super();const e=Zy;this.uniforms=ur.clone(e.uniforms),this.material=new Dx({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Jo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$u?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ju?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===el?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Yu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ew extends Qi{constructor(t){super();B(this,"mat");B(this,"quad");this.camera=t,this.mat=new Gt({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tChar:{value:null},hasChar:{value:0},texel:{value:new Ce(1,1)},near:{value:t.near},far:{value:t.far},ink:{value:new Ue(0)},width:{value:1},crease0:{value:.004}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        #include <packing>
        uniform sampler2D tDiffuse;
        uniform sampler2D tDepth;
        uniform sampler2D tChar;
        uniform float hasChar;
        uniform vec2 texel;
        uniform float near;
        uniform float far;
        uniform vec3 ink;
        uniform float width;
        uniform float crease0;
        varying vec2 vUv;
        float dist(vec2 uv) { return -perspectiveDepthToViewZ(texture2D(tDepth, uv).x, near, far); }
        void main() {
          vec4 c = texture2D(tDiffuse, vUv);
          float z = dist(vUv);
          // 人物深度圖沒畫到是白的（≈1）；有畫到而且跟畫面深度差不到幾公分＝這格是看得到的人物，不描
          if (hasChar > 0.5) {
            float cd = unpackRGBAToDepth(texture2D(tChar, vUv));
            if (cd < 0.9999 && abs(-perspectiveDepthToViewZ(cd, near, far) - z) < 0.05 + 0.002 * z) { gl_FragColor = c; return; }
          }
          vec2 o = texel * width;
          // 只描「比旁邊近」的那一側：線畫在前面物體的邊上，不會往外胖一圈
          float d = 0.0;
          d = max(d, dist(vUv + vec2(o.x, 0.0)) - z);
          d = max(d, dist(vUv - vec2(o.x, 0.0)) - z);
          d = max(d, dist(vUv + vec2(0.0, o.y)) - z);
          d = max(d, dist(vUv - vec2(0.0, o.y)) - z);
          d = max(d, 0.7 * (dist(vUv + o) - z));
          d = max(d, 0.7 * (dist(vUv - o) - z));
          d = max(d, 0.7 * (dist(vUv + vec2(o.x, -o.y)) - z));
          d = max(d, 0.7 * (dist(vUv + vec2(-o.x, o.y)) - z));
          // 轉角線：平面上 1/距離 在畫面上是線性的，二階差分≈0；牆角、屋簷、屋脊這種折線才會跳出來
          float w = 1.0 / z;
          float lx = abs(1.0 / dist(vUv + vec2(o.x, 0.0)) + 1.0 / dist(vUv - vec2(o.x, 0.0)) - 2.0 * w);
          float ly = abs(1.0 / dist(vUv + vec2(0.0, o.y)) + 1.0 / dist(vUv - vec2(0.0, o.y)) - 2.0 * w);
          float crease = smoothstep(crease0, crease0 * 2.5, max(lx, ly) / w);
          float e = max(smoothstep(0.12, 0.45, d), crease * 0.7);
          gl_FragColor = vec4(mix(c.rgb, ink, e * 0.92), c.a);
        }`}),this.quad=new Jo(this.mat)}setWidth(t){this.mat.uniforms.width.value=t}setCrease(t){this.mat.uniforms.crease0.value=t}setCharDepth(t){this.mat.uniforms.tChar.value=t,this.mat.uniforms.hasChar.value=t?1:0}setSize(t,n){this.mat.uniforms.texel.value.set(1/t,1/n)}render(t,n,s){const r=this.mat.uniforms;r.tDiffuse.value=s.texture,r.tDepth.value=s.depthTexture,r.near.value=this.camera.near,r.far.value=this.camera.far,t.setRenderTarget(this.renderToScreen?null:n),this.clear&&t.clear(),this.quad.render(t)}dispose(){this.mat.dispose(),this.quad.dispose()}}const fi={x:70,y:26,z:56},yu=17,wu=2.2;class tw{constructor(e){B(this,"mesh");B(this,"pos");B(this,"m",new et);B(this,"q",new Yi().setFromEuler(new Pn(0,0,-Math.atan2(wu,yu))));B(this,"s",new D(1,1,1));B(this,"p",new D);B(this,"mat");B(this,"amount",0);const t=e==="high"?1500:450,n=new le(.025,.75,.025);this.mat=new Vo({color:13031662,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),this.mesh=new Sn(n,this.mat,t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,this.mesh.visible=!1,this.pos=new Float32Array(t*3);for(let s=0;s<t;s++)this.pos[s*3]=(Math.random()-.5)*fi.x,this.pos[s*3+1]=Math.random()*fi.y,this.pos[s*3+2]=(Math.random()-.5)*fi.z}update(e,t,n){if(this.amount=t,this.mesh.visible=t>.02,!this.mesh.visible)return;this.mat.opacity=.42*t;const s=this.mesh.count,r=Math.ceil(s*Math.min(1,t*1.2));for(let o=0;o<s;o++){let a=this.pos[o*3+1]-yu*e,c=this.pos[o*3]+wu*e;a<0&&(a+=fi.y,c=(Math.random()-.5)*fi.x,this.pos[o*3+2]=(Math.random()-.5)*fi.z),c>fi.x/2&&(c-=fi.x),this.pos[o*3]=c,this.pos[o*3+1]=a;const l=o>=r?0:1;this.p.set(n.x+c,a,n.z+this.pos[o*3+2]),this.s.set(l,l,l),this.m.compose(this.p,this.q,this.s),this.mesh.setMatrixAt(o,this.m)}this.mesh.instanceMatrix.needsUpdate=!0}get raining(){return this.amount}dispose(){this.mesh.geometry.dispose(),this.mat.dispose(),this.mesh.dispose()}}const Mu={rain:{sun:11846358,sunK:.5,sunMul:.45,sky:10465476,skyK:.55,bg:9872564,bgK:.65,exposure:.9},drought:{sun:16760426,sunK:.35,sunMul:1.08,sky:16769192,skyK:.3,bg:15783066,bgK:.5,exposure:1.03}},bu={sunny:{icon:"☀️",name:"晴",tip:"放晴了"},rain:{icon:"🌧️",name:"雨",tip:"今天下雨：作物長得比較快"},drought:{icon:"🔥",name:"旱",tip:"今天乾旱：作物長得比較慢"}};it.enabled=!0;const Su=["morning","afternoon","evening"],Ii=new Ue,nw=new Ue,Eu=new D,Tu=new D,iw=new D,sw=new D,Ys=dt.degToRad(58),Ba=dt.degToRad(34),Au=9,rw=.9,Cu=2,Ru=new Ue;class ow{constructor(e,t,n,s=!1){B(this,"renderer");B(this,"scene",new q_);B(this,"bgColor",new Ue(12575743));B(this,"camera");B(this,"sun");B(this,"hemi");B(this,"fireLight");B(this,"quality");B(this,"outline");B(this,"composer",null);B(this,"bloom",null);B(this,"outlinePass",null);B(this,"charTarget",null);B(this,"charDepthMat",new bd({depthPacking:od}));B(this,"characters",null);B(this,"composerKey","");B(this,"events",new AbortController);B(this,"target",new D);B(this,"distance",64);B(this,"pitch",Ys);B(this,"followPos",null);B(this,"backTo",null);B(this,"onUnfollow",null);B(this,"occluders",null);B(this,"followPitch",Ba);B(this,"occludeClock",0);B(this,"occludeRay",new fu);B(this,"weatherGoal","sunny");B(this,"weatherMix",{rain:0,drought:0});B(this,"rain");B(this,"bounds");B(this,"fit",0);B(this,"homeZ",0);B(this,"dragDist",0);this.canvas=e,this.layout=t,this.quality=n,this.outline=s,this.renderer=new j_({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=ln,this.renderer.toneMapping=el,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ja,this.camera=new tn(30,1,1,400),this.bounds={x:t.mapSize[0]/2-8,z:t.mapSize[1]/2-6},this.target.set(0,0,0),this.hemi=new $x(16777215,4473924,1),this.scene.add(this.hemi),this.sun=new Jx(16777215,2.5),this.sun.castShadow=!0;const r=Math.max(t.mapSize[0],t.mapSize[1])/2+4,o=this.sun.shadow.camera;o.left=-r,o.right=r,o.top=r,o.bottom=-r,o.near=1,o.far=220,this.sun.shadow.bias=-5e-4,this.sun.shadow.normalBias=.04,this.scene.add(this.sun,this.sun.target),this.fireLight=new Yx(16752704,1,26,1.6),this.fireLight.position.set(t.plaza[0],2.2,t.plaza[1]),this.scene.add(this.fireLight),this.scene.fog=new fl(12575743,110,220),this.scene.background=this.bgColor,this.rain=new tw(n),this.scene.add(this.rain.mesh),this.applyQuality(n),this.bindControls(),this.resize(),window.addEventListener("resize",()=>this.resize(),{signal:this.events.signal})}applyQuality(e){var s;this.quality=e;const t=Math.min(window.devicePixelRatio||1,e==="high"?2:1.5);this.renderer.setPixelRatio(t);const n=e==="high"?2048:1024;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),(s=this.sun.shadow.map)==null||s.dispose(),this.sun.shadow.map=null),this.renderer.shadowMap.type=e==="high"?ja:Qc,this.buildComposer(),this.resize()}setOutline(e){this.outline=e,this.buildComposer(),this.resize()}setOutlineCrease(e){var t;(t=this.outlinePass)==null||t.setCrease(e)}buildComposer(){var r;const e=this.quality==="high",t=`${e}|${this.outline}`;if(t===this.composerKey||(this.composerKey=t,this.disposeComposer(),!e&&!this.outline))return;const n=this.renderer.getDrawingBufferSize(new Ce),s=new dn(n.x,n.y,{type:kn,samples:e?4:0,depthTexture:this.outline?new Mo(n.x,n.y):null});if(s.texture.name="EffectComposer.rt1",this.composer=new Yy(this.renderer,s),this.outline){const o=this.composer.renderTarget2;(r=o.depthTexture)==null||r.dispose(),o.depthTexture=new Mo(n.x,n.y)}this.composer.addPass(new Ky(this.scene,this.camera)),this.outline&&(this.outlinePass=new ew(this.camera),this.outlinePass.setWidth(1.5*this.renderer.getPixelRatio()),this.charTarget=new dn(n.x,n.y,{minFilter:Kt,magFilter:Kt}),this.charTarget.texture.name="Stage.charDepth",this.outlinePass.setCharDepth(this.charTarget.texture),this.composer.addPass(this.outlinePass)),e&&(this.bloom=new Is(new Ce(256,256),.45,.6,.88),this.composer.addPass(this.bloom)),this.composer.addPass(new Qy)}resize(){var r,o,a;const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;if(this.renderer.setSize(e,t,!1),(r=this.composer)==null||r.setPixelRatio(this.renderer.getPixelRatio()),(o=this.composer)==null||o.setSize(e,t),(a=this.outlinePass)==null||a.setWidth(1.5*this.renderer.getPixelRatio()),this.charTarget){const c=this.renderer.getDrawingBufferSize(new Ce);this.charTarget.setSize(c.x,c.y)}this.camera.aspect=e/t,this.camera.fov=e<t?42:30,this.camera.updateProjectionMatrix();const n=Math.max(64,48/(2*Math.tan(dt.degToRad(this.camera.fov/2))*this.camera.aspect)),s=e<t?-6:-3;this.fit&&Math.abs(this.target.x+2)<.01&&Math.abs(this.target.z-this.homeZ)<.01&&(this.target.z=s),this.homeZ=s,this.fit?n!==this.fit&&(this.backTo!==null?this.backTo=dt.clamp(this.backTo*(n/this.fit),22,140):this.zoomTo(this.distance*(n/this.fit))):(this.zoomTo(n),this.target.set(-2,0,s)),this.fit=n}setDayTime(e){const t=e*3,n=Math.min(2,Math.floor(t)),s=t-n,r=mu[Su[n]],o=mu[Su[(n+1)%3]],a=dt.smoothstep(s,.75,1);this.applyLight(r,o,a)}applyLight(e,t,n){const s=(a,c)=>a+(c-a)*n,r=(a,c,l)=>l.copy(Ii.setHex(a)).lerp(nw.setHex(c),n);r(e.sunColor,t.sunColor,this.sun.color),this.sun.intensity=s(e.sunIntensity,t.sunIntensity);const o=Tu.set(...e.sunDir).normalize().lerp(iw.set(...t.sunDir).normalize(),n).normalize();this.sun.position.copy(this.target).addScaledVector(o,90),this.sun.target.position.copy(this.target),r(e.hemiSky,t.hemiSky,this.hemi.color),r(e.hemiGround,t.hemiGround,this.hemi.groundColor),this.hemi.intensity=s(e.hemiIntensity,t.hemiIntensity),this.fireLight.intensity=s(e.fire,t.fire)*12,this.renderer.toneMappingExposure=s(e.exposure,t.exposure),this.scene.fog.color.copy(r(e.background,t.background,this.bgColor)),this.applyWeatherTint()}applyWeatherTint(){const e=this.weatherMix.rain,t=this.weatherMix.drought;if(e<.001&&t<.001)return;const n=Mu.rain,s=Mu.drought;this.sun.color.lerp(Ii.setHex(n.sun),n.sunK*e).lerp(Ii.setHex(s.sun),s.sunK*t),this.sun.intensity*=dt.lerp(1,n.sunMul,e)*dt.lerp(1,s.sunMul,t),this.hemi.color.lerp(Ii.setHex(n.sky),n.skyK*e).lerp(Ii.setHex(s.sky),s.skyK*t),this.bgColor.lerp(Ii.setHex(n.bg),n.bgK*e).lerp(Ii.setHex(s.bg),s.bgK*t),this.scene.fog.color.copy(this.bgColor),this.renderer.toneMappingExposure*=dt.lerp(1,n.exposure,e)*dt.lerp(1,s.exposure,t)}setWeather(e){this.weatherGoal=e}get rainAmount(){return this.weatherMix.rain}follow(e){this.backTo===null&&(this.backTo=this.distance),this.followPos=e,this.followPitch=Ba,this.occludeClock=0}get following(){return this.followPos!==null}get cameraDistance(){return this.distance}unfollow(){var e;this.followPos&&(this.followPos=null,(e=this.onUnfollow)==null||e.call(this))}update(e){var r;const t=1-Math.exp(-e*1.2);this.weatherMix.rain+=((this.weatherGoal==="rain"?1:0)-this.weatherMix.rain)*t,this.weatherMix.drought+=((this.weatherGoal==="drought"?1:0)-this.weatherMix.drought)*t,this.rain.update(e,this.weatherMix.rain,this.target);const n=1-Math.exp(-e*4),s=(r=this.followPos)==null?void 0:r.call(this);s?(this.occludeClock-=e,this.occludeClock<=0&&(this.occludeClock=.3,this.checkOcclusion(s)),this.target.x+=(s.x-this.target.x)*n,this.target.z+=(s.z-this.target.z)*n,this.target.y+=(rw-this.target.y)*n,this.distance+=(Au-this.distance)*n,this.pitch+=(this.followPitch-this.pitch)*n):this.backTo!==null&&(this.target.y+=(0-this.target.y)*n,this.distance+=(this.backTo-this.distance)*n,this.pitch+=(Ys-this.pitch)*n,Math.abs(this.distance-this.backTo)<.05&&Math.abs(this.pitch-Ys)<.001&&(this.distance=this.backTo,this.pitch=Ys,this.target.y=0,this.backTo=null))}checkOcclusion(e){if(!this.occluders)return;const t=dt.degToRad(8),n=dt.degToRad(78),s=r=>{const o=Eu.set(e.x,1.5,e.z),a=Tu.set(0,Math.sin(r),Math.cos(r));return this.occludeRay.set(o,a),this.occludeRay.far=Au,this.occludeRay.intersectObject(this.occluders,!0).length>0};s(this.followPitch)?this.followPitch=Math.min(n,this.followPitch+t):this.followPitch>Ba&&!s(this.followPitch-t)&&(this.followPitch-=t)}render(){const e=sw.set(0,Math.sin(this.pitch),Math.cos(this.pitch)).multiplyScalar(this.distance);this.camera.position.copy(this.target).add(e),this.camera.lookAt(this.target);const t=this.scene.fog,n=Math.max(this.distance,40),s=1-.35*this.weatherMix.rain-.2*this.weatherMix.drought;t.near=n*1.5*s,t.far=n*3.2*s,this.composer?(this.charTarget&&this.renderCharDepth(this.charTarget),this.composer.render()):this.renderer.render(this.scene,this.camera)}renderCharDepth(e){var h;const t=((h=this.characters)==null?void 0:h.call(this))??[];for(const u of t)u.traverse(d=>d.layers.enable(Cu));const n=this.renderer,s=this.scene,r=this.camera,o=s.background,a=r.layers.mask,c=n.shadowMap.autoUpdate,l=n.getClearAlpha();n.getClearColor(Ru),s.background=null,s.overrideMaterial=this.charDepthMat,r.layers.set(Cu),n.shadowMap.autoUpdate=!1,n.setRenderTarget(e),n.setClearColor(16777215,1),n.clear(),t.length&&n.render(s,r),n.setRenderTarget(null),n.setClearColor(Ru,l),n.shadowMap.autoUpdate=c,r.layers.mask=a,s.overrideMaterial=null,s.background=o}project(e,t){const n=Eu.copy(e).project(this.camera);return n.z>1?!1:(t.x=(n.x*.5+.5)*this.canvas.clientWidth,t.y=(-n.y*.5+.5)*this.canvas.clientHeight,!0)}raycaster(e,t){const n=this.canvas.getBoundingClientRect(),s=new Ce((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),r=new fu;return r.setFromCamera(s,this.camera),r}bindControls(){const e=new Map;let t=0,n=this.distance;const s=this.canvas,r=this.events.signal;s.style.touchAction="none",s.addEventListener("pointerdown",a=>{if(s.setPointerCapture(a.pointerId),this.dragDist=0,e.set(a.pointerId,{x:a.clientX,y:a.clientY}),e.size===2){const[c,l]=[...e.values()];t=Math.hypot(c.x-l.x,c.y-l.y),n=this.distance}},{signal:r}),s.addEventListener("pointermove",a=>{const c=e.get(a.pointerId);if(!c)return;const l={x:a.clientX,y:a.clientY};if(e.set(a.pointerId,l),this.dragDist+=Math.hypot(l.x-c.x,l.y-c.y),this.dragDist>8&&this.unfollow(),e.size===1){const h=this.distance*Math.tan(dt.degToRad(this.camera.fov/2))*2/s.clientHeight;this.pan(-(l.x-c.x)*h,-(l.y-c.y)*h/Math.sin(this.pitch))}else if(e.size===2&&t>0){const[h,u]=[...e.values()],d=Math.hypot(h.x-u.x,h.y-u.y);this.interrupt(),this.zoomTo(n*(t/Math.max(d,1)))}},{signal:r});const o=a=>{e.delete(a.pointerId),e.size<2&&(t=0)};s.addEventListener("pointerup",o,{signal:r}),s.addEventListener("pointercancel",o,{signal:r}),s.addEventListener("wheel",a=>{a.preventDefault(),this.interrupt(),this.zoomTo(this.distance*Math.exp(a.deltaY*.001))},{passive:!1,signal:r})}interrupt(){this.backTo===null&&!this.followPos||(this.unfollow(),this.backTo=null,this.pitch=Ys,this.target.y=0,this.zoomTo(this.distance))}wasDrag(){return this.dragDist>8}pan(e,t){this.target.x=dt.clamp(this.target.x+e,-this.bounds.x,this.bounds.x),this.target.z=dt.clamp(this.target.z+t,-this.bounds.z,this.bounds.z)}lookAt(e,t){this.target.x=dt.clamp(e,-this.bounds.x,this.bounds.x),this.target.z=dt.clamp(t,-this.bounds.z,this.bounds.z)}zoomTo(e){this.distance=dt.clamp(e,22,140)}disposeComposer(){var e;if(this.composer){for(const t of this.composer.passes)t.dispose();this.composer.dispose(),this.composer=null,this.bloom=null,this.outlinePass=null,(e=this.charTarget)==null||e.dispose(),this.charTarget=null}}dispose(){this.events.abort(),this.disposeComposer(),this.charDepthMat.dispose(),this.rain.dispose(),this.sun.shadow.dispose(),this.renderer.dispose()}}const At=(i,e={})=>new ct({color:i,roughness:.9,metalness:0,flatShading:!0,...e});function ei(i){return i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),i}function aw(i){return()=>((i=i*16807%2147483647)-1)/2147483646}function tf(i,e,t,n){const s=n[0]-t[0],r=n[1]-t[1],o=Math.max(0,Math.min(1,((i-t[0])*s+(e-t[1])*r)/(s*s+r*r||1)));return Math.hypot(i-(t[0]+s*o),e-(t[1]+r*o))}function cw(i,e){const[t,n]=i.mapSize,s=new Ns(t+60,n+60,90,70);s.rotateX(-Math.PI/2);const r=s.attributes.position,o=new Float32Array(r.count*3),a=new Ue,c=new Ue(rt.grass),l=new Ue(rt.grassDark),h=new Ue(rt.grassLight),u=new Ue(rt.dirt),d=[];for(const v of Object.values(i.paths))for(let m=1;m<v.length;m++)d.push([v[m-1],v[m]]);const f=4.5;for(let v=0;v<r.count;v++){const m=r.getX(v),p=r.getZ(v),M=Math.sin(m*.17+1.3)*Math.cos(p*.21-.4)+Math.sin(m*.05-p*.08)*.8+(e()-.5)*.35;a.copy(c).lerp(M>0?h:l,Math.min(1,Math.abs(M)*.55));let x=Math.hypot(m-i.plaza[0],p-i.plaza[1])-f;for(const[_,I]of d)x=Math.min(x,tf(m,p,_,I)-1.1);x<.9&&a.lerp(u,dt.smoothstep(.9-x,0,1.2)),a.toArray(o,v*3),r.setY(v,Math.sin(m*.11)*Math.cos(p*.13)*.08)}s.setAttribute("color",new rn(o,3)),s.computeVertexNormals();const g=new S(s,new ct({vertexColors:!0,roughness:1}));return g.receiveShadow=!0,g}function vo(i,e,t,n,s){const r=new me,o=new S(new le(i,t,e),At(n));o.position.y=t/2;const a=new Se(.01,i*.62,t*.7,4,1);a.rotateY(Math.PI/4),a.scale(1,1,e/i);const c=new S(a,At(s));c.position.y=t+t*.35;const l=new S(new le(i*.22,t*.55,.1),At(rt.wallWood));l.position.set(0,t*.275,e/2+.05);const h=new S(new le(i*.16,t*.2,.1),At(16765562,{emissive:16757575,emissiveIntensity:.6}));h.position.set(i*.3,t*.62,e/2+.05);const u=h.clone();return u.position.x=-i*.3,r.add(o,c,l,h,u),ei(r)}function lw(){const i=new me,e=new S(new Se(1.5,2.1,6,8),At(rt.stone));e.position.y=3;const t=new S(new mt(2,2.2,8),At(rt.roofRed));t.position.y=7.1;const n=new me;n.position.set(0,5.6,2);for(let s=0;s<4;s++){const r=new S(new le(.5,3.6,.08),At(rt.wallCream));r.position.y=1.8;const o=new me;o.rotation.z=s*Math.PI/2,o.add(r),n.add(o)}return n.name="blades",i.add(e,t,n),ei(i)}function hw(i){const e=new me,t=1.2+i()*.8,n=new S(new Se(.18,.25,t,5),At(rt.trunk));n.position.y=t/2;const s=At(i()>.5?rt.treeLeaf:rt.treeLeafDark),r=i()>.45,o=r?new S(new _n(1.3+i()*.6,0),s):new S(new mt(1.2+i()*.4,3+i(),6),s);return o.position.y=t+(r?.9:1.4),e.add(n,o),e.rotation.y=i()*Math.PI*2,ei(e)}function uw(i){const[e,t]=i.fieldSize,n=new me,s=new S(new le(e,.25,t),At(rt.soil));s.position.y=.12,s.receiveShadow=!0,n.add(s);for(const[p,M]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const x=new S(new le(.18,.8,.18),At(rt.wallWood));x.position.set(p*e/2,.4,M*t/2),n.add(ei(x))}const r=5,o=6,a=new mt(.28,1,5);a.translate(0,.5,0);const c=At(rt.wheatYoung),l=new Sn(a,c,r*o);l.castShadow=!0;const h=new et,u=new Ue(rt.wheatYoung),d=new Ue(rt.wheatRipe);n.add(l);const f=new me;f.position.set(e/2+.5,0,t/2-.6),n.add(f);const g=new yt(.32,6,4);g.scale(1,.85,.8);const v=At(rt.wheatRipe);let m=-1;return{object:n,setCrop(p,M,x){const _=M?.15+p*.95:0;let I=0;for(let T=0;T<r;T++)for(let P=0;P<o;P++){const w=(P/(o-1)-.5)*(e-1.2),y=(T/(r-1)-.5)*(t-1.2);h.makeScale(_,_*(.9+(T*7+P*3)%5*.06),_).setPosition(w,.25,y),l.setMatrixAt(I++,h)}l.instanceMatrix.needsUpdate=!0,c.color.copy(u).lerp(d,dt.smoothstep(p,.55,1));const E=Math.min(8,Math.ceil(x/2));if(E!==m){m=E,f.clear();for(let T=0;T<E;T++){const P=new S(g,v);P.position.set(T%2*.55,.28+Math.floor(T/4)*.45,-Math.floor(T%4/2)*.6),P.castShadow=!0,f.add(P)}}}}}const Pu={farm:5941298,haul:15238970,mill:15852484,sell:4161488,bake:13208138,preserve:12071498,idle:10132122};function dw(){const i=new me,e=At(Pu.idle),t=new S(new nn(.32,.6,3,8),e);t.position.y=.75;const n=new S(new yt(.3,10,8),At(15911328));n.position.y=1.5;const s=new S(new mt(.45,.3,10),At(15254890));s.position.y=1.78;const r=new S(new yt(.34,6,4),At(rt.wheatRipe));r.scale.set(1,.8,.8),r.position.set(0,1.2,-.38),r.visible=!1,i.add(t,n,s,r),ei(i);let o=0,a=!1;return{object:i,setState(c,l,h){e.color.setHex(Pu[c]),r.visible=h>0,a=l},tick(c){o+=c,t.position.y=.75+(a?Math.abs(Math.sin(o*10))*.12:Math.sin(o*2)*.02),n.position.y=t.position.y+.75,s.position.y=n.position.y+.28}}}function nf(){const i=new me,e=new S(new Se(.9,1.1,.25,8),At(rt.dirt));e.position.y=.12;const t=new me,n=new S(new Se(.22,.32,2,6),At(8016434));n.position.y=1;const s=new S(new _n(1.8,0),At(5216826));s.position.y=2.9,t.add(n,s);const r=new me,o=new yt(.18,6,5),a=At(14168618);for(let l=0;l<10;l++){const h=new S(o,a),u=l/10*Math.PI*2;h.position.set(Math.cos(u)*1.6,2.4+l%3*.5,Math.sin(u)*1.6),r.add(h)}t.add(r);const c=new S(new le(.8,.45,.6),At(12073514));return c.position.set(1.2,.22,1.2),i.add(ei(e),ei(t),ei(c)),{object:i,setState(l,h,u,d){t.visible=l,t.scale.setScalar(.35+.65*h),r.visible=u,c.visible=d>0}}}function sf(i,e){const[t,n]=e.buildings[i].size,s=new me,r=vo(t,n,2.8,rt.wallCream,i==="bakery"?rt.roofOrange:8014474),o=new S(new le(t,2.8,n),new ct({color:16777215,transparent:!0,opacity:.25}));o.position.y=1.4;const a=new S(new yt(.4,8,6),new ct({color:rt.fire,emissive:rt.fire,emissiveIntensity:2}));return a.position.set(0,4.2,0),s.add(r,o,a),{object:s,setState(c,l){r.visible=c,o.visible=!c,a.visible=c&&l}}}const fw=(i,e)=>{const t=aw(20261025),n=new me;n.add(cw(i,t));const s=i.buildings,r=(m,p)=>{m.position.set(p.pos[0],0,p.pos[1]),m.rotation.y=p.rotY,n.add(m)};r(vo(s.warehouse.size[0],s.warehouse.size[1],3.2,rt.wallWood,rt.roofSlate),s.warehouse);const o=lw();r(o,s.mill),r(vo(s.shop.size[0],s.shop.size[1],2.8,rt.wallCream,rt.roofOrange),s.shop),r(vo(s.farmhouse.size[0],s.farmhouse.size[1],3,rt.wallCream,rt.roofRed),s.farmhouse);const a=new me,c=new S(new $i(.7,.22,5,10),At(rt.stone));c.rotation.x=Math.PI/2,c.position.y=.15;const l=new S(new mt(.45,1.1,6),new ct({color:rt.fire,emissive:rt.fire,emissiveIntensity:2.5}));l.position.y=.65,a.add(ei(c),l),a.position.set(i.plaza[0],0,i.plaza[1]),n.add(a);const h=(m,p)=>{if(Math.hypot(m-i.plaza[0],p-i.plaza[1])<7)return!0;for(const M of Object.values(s))if(Math.abs(m-M.pos[0])<M.size[0]/2+2.5&&Math.abs(p-M.pos[1])<M.size[1]/2+2.5)return!0;for(const M of i.fieldSlots)if(Math.abs(m-M[0])<i.fieldSize[0]/2+2&&Math.abs(p-M[1])<i.fieldSize[1]/2+2)return!0;for(const M of i.orchardSlots)if(Math.hypot(m-M[0],p-M[1])<i.orchardSize[0]/2+2)return!0;for(const M of Object.values(i.paths))for(let x=1;x<M.length;x++)if(tf(m,p,M[x-1],M[x])<2.5)return!0;return!1},u=e.quality==="high"?110:55,[d,f]=i.mapSize;for(let m=0,p=0;m<u&&p<2e3;p++){const M=(t()-.5)*(d+24),x=(t()-.5)*(f+20);if(h(M,x))continue;const _=hw(t);_.position.set(M,0,x),n.add(_),m++}const g=o.getObjectByName("blades");let v=0;return{root:n,createField:()=>uw(i),createWorker:()=>dw(),createFruitTree:()=>nf(),createProcessor:m=>sf(m,i),update(m){g&&(g.rotation.z-=m*.8),v+=m,l.scale.setScalar(1+Math.sin(v*13)*.08+Math.sin(v*7.3)*.05)}}},pw=40,mw=2.5,gw=5.5;function Wc(i,e,t){if(e===t)return[i.spots[e]];const n=i.paths[`${e}>${t}`];if(n)return[...n];const s=i.paths[`${t}>${e}`];return s?[...s].reverse():e!=="warehouse"&&t!=="warehouse"?[...Wc(i,e,"warehouse"),...Wc(i,"warehouse",t).slice(1)]:[i.spots[e],i.spots[t]]}const Lu=(i,e)=>Math.hypot(i[e+1][0]-i[e][0],i[e+1][1]-i[e][1]),co=(i,e)=>i.set(i.x+(e%2-.5)*1.1+Math.floor(e/4)*1.6,0,i.z+(e%4-1.5)*.35);function rf(i,e,t){if(i.length===1)return t.set(i[0][0],0,i[0][1]);let n=0;for(let r=0;r<i.length-1;r++)n+=Lu(i,r);let s=dt.clamp(e,0,1)*n;for(let r=0;r<i.length-1;r++){const o=Lu(i,r);if(s<=o||r===i.length-2){const a=o?Math.min(1,s/o):0;return t.set(i[r][0]+(i[r+1][0]-i[r][0])*a,0,i[r][1]+(i[r+1][1]-i[r][1])*a)}s-=o}return t}class vw{constructor(e,t,n){B(this,"fields",[]);B(this,"workers",[]);B(this,"trees",[]);B(this,"processors",[]);B(this,"tmp",new D);B(this,"targetTmp",new D);B(this,"paths",new Map);var s;this.art=e,this.layout=t,this.parent=n,t.orchardSlots.forEach(([r,o],a)=>{var l;const c=((l=e.createFruitTree)==null?void 0:l.call(e,a))??nf();c.object.position.set(r,0,o),n.add(c.object),this.trees.push(c)});for(const r of["bakery","preservery"]){const o=t.buildings[r],a=((s=e.createProcessor)==null?void 0:s.call(e,r))??sf(r,t);a.object.position.set(o.pos[0],0,o.pos[1]),a.object.rotation.y=o.rotY,n.add(a.object),this.processors.push({id:r,vis:a})}}workerPosition(e){var t;return((t=this.workers[e])==null?void 0:t.pos)??null}sync(e,t){var s,r;for(;this.fields.length<e.fields.length&&this.fields.length<this.layout.fieldSlots.length;){const o=this.fields.length,a=this.art.createField(o),[c,l]=this.layout.fieldSlots[o];a.object.position.set(c,0,l),this.parent.add(a.object),this.fields.push(a)}for(let o=0;o<this.fields.length;o++){const a=e.fields[o];if(!a)continue;const c=a.planted?Math.min(1,(a.growth+e.remainder)/hn[a.crop].seconds):0;this.fields[o].setCrop(c,a.planted,a.harvested,a.crop)}this.trees.forEach((o,a)=>{const c=e.trees[a];if(!c)return;const l=c.planted&&c.growth01<1&&!c.ripe?Math.min(1,c.growth01+e.remainder/pw):c.growth01;o.setState(c.planted,l,c.ripe,c.harvested)});const n=Pt(e);for(const{id:o,vis:a}of this.processors){const c=e.processors[o],l=c.batch?Math.min(1,c.progress01+e.remainder/bi[o].seconds):0;a.setState(n[o],!!c.batch,l)}for(;this.workers.length<e.workers.length;){const o=this.workers.length,a=this.art.createWorker(o),c={vis:a,pos:new D,heading:0,wanderIdx:o%3,wanderClock:o*1.7,orchard:0};c.pos.copy(this.targetFor(e,o,c,0)),a.object.position.copy(c.pos),this.parent.add(a.object),this.workers.push(c)}for(let o=0;o<this.workers.length;o++){const a=e.workers[o],c=this.workers[o],l=this.targetFor(e,o,c,t),h=this.tmp.copy(l).sub(c.pos);h.y=0;const u=h.length(),d=Math.min(u,gw*t*(u>3?1.6:1)),f=u>.08;if(f){c.pos.addScaledVector(h.normalize(),d);let v=Math.atan2(h.x,h.z)-c.heading;v=Math.atan2(Math.sin(v),Math.cos(v)),c.heading+=v*Math.min(1,t*10)}c.vis.object.position.copy(c.pos),c.vis.object.rotation.y=c.heading,c.vis.setState(a.job,f,a.cargo,a.cargoItem),(r=(s=c.vis).tick)==null||r.call(s,t)}}path(e,t){const n=`${e}>${t}`;let s=this.paths.get(n);return s||this.paths.set(n,s=Wc(this.layout,e,t)),s}targetFor(e,t,n,s){const r=e.workers[t],o=this.layout,a=this.targetTmp;switch(r.job){case"haul":{const c=r.location,l=r.destination;if(c===l)return co(a.set(o.spots[c][0],0,o.spots[c][1]),t);const h=(r.progress+e.remainder)/nt.haulSeconds;return rf(this.path(c,l),h,a)}case"farm":{if(r.location==="orchard"&&(n.orchard=mw),n.orchard>0)return n.orchard-=s,a.set(o.spots.orchard[0],0,o.spots.orchard[1]);n.wanderClock+=s,n.wanderClock>4&&(n.wanderClock=0,n.wanderIdx=(n.wanderIdx+1)%Math.max(1,Math.min(e.fields.length,o.fieldSlots.length)));const[c,l]=o.fieldSlots[n.wanderIdx]??o.fieldSlots[0];return a.set(c+o.fieldSize[0]/2+.6,0,l+Math.sin(n.wanderClock*.8)*1.5)}case"mill":return co(a.set(o.buildings.mill.door[0],0,o.buildings.mill.door[1]),t);case"sell":return co(a.set(o.buildings.shop.door[0],0,o.buildings.shop.door[1]),t);case"bake":return a.set(o.buildings.bakery.door[0],0,o.buildings.bakery.door[1]);case"preserve":return a.set(o.buildings.preservery.door[0],0,o.buildings.preservery.door[1]);default:return co(a.set(o.plaza[0]-2.5,0,o.plaza[1]+2),t)}}}const _w={tom:15921126,yuki:11127018,lin:8006197};function xw(i){const e=new me,t=new S(new nn(.3,.6,3,8),new ct({color:_w[i],roughness:.9}));t.position.y=.75;const n=new S(new yt(.28,10,8),new ct({color:15911328,roughness:.9}));return n.position.y=1.5,e.add(t,n),e.traverse(s=>{s.castShadow=!0}),{object:e,setState(){}}}class yw{constructor(e){B(this,"object",new me);B(this,"pos",new D);B(this,"heading",0);B(this,"swapped",!1);B(this,"cur");B(this,"state",[!1,!1]);this.cur=e,this.object.add(e.object)}use(e){this.object.remove(this.cur.object),this.cur=e,this.object.add(e.object),this.swapped=!0,e.setState(...this.state)}setState(e,t){this.state[0]=e,this.state[1]=t,this.cur.setState(e,t)}tick(e){var t,n;(n=(t=this.cur).tick)==null||n.call(t,e)}}class ww{constructor(e,t,n){B(this,"slots",new Map);B(this,"tmp",new D);B(this,"legs",new Map);var s;this.layout=t;for(const r of Er){const o=new yw(((s=e.createVillager)==null?void 0:s.call(e,r))??xw(r));o.object.visible=!1,n.add(o.object),this.slots.set(r,o)}}provide(e,t){var n;(n=this.slots.get(e))==null||n.use(t)}get objects(){return[...this.slots.values()].map(e=>e.object)}get ready(){return[...this.slots.values()].filter(e=>e.swapped).length}position(e){const t=this.slots.get(e);return t!=null&&t.object.visible?t.pos:null}leg(e,t,n){const s=`${e}:${t}>${n}`;let r=this.legs.get(s);if(!r){const o=this.layout.villagers[e];r={"gate>plaza":o.toPlaza,"plaza>gate":[...o.toPlaza].reverse(),"plaza>shop":o.toShop,"shop>plaza":[...o.toShop].reverse(),"gate>shop":[...o.toPlaza,...o.toShop.slice(1)],"shop>gate":[...o.toPlaza,...o.toShop.slice(1)].reverse()}[`${t}>${n}`]??[o[n]],this.legs.set(s,r)}return r}sync(e,t){for(const n of e.villagers){const s=this.slots.get(n.id);if(!s||(s.object.visible!==n.appeared&&(s.object.visible=n.appeared),!n.appeared))continue;const r=this.layout.villagers[n.id],o=n.location===n.destination?this.tmp.set(r[n.location][0],0,r[n.location][1]):rf(this.leg(n.id,n.location,n.destination),(n.progress+e.remainder)/Rn.travelSeconds,this.tmp),a=!Number.isFinite(s.pos.x)||s.pos.lengthSq()===0,c=o.x-s.pos.x,l=o.z-s.pos.z,h=!a&&Math.hypot(c,l)>.02&&t>0;if(h){let u=Math.atan2(c,l)-s.heading;u=Math.atan2(Math.sin(u),Math.cos(u)),s.heading+=u*Math.min(1,t*10)}else if(n.location==="shop"&&n.destination==="shop"){const u=this.layout.buildings.shop.door;let d=Math.atan2(u[0]-s.pos.x,u[1]-s.pos.z)-s.heading;d=Math.atan2(Math.sin(d),Math.cos(d)),s.heading+=d*Math.min(1,t*4)}s.pos.copy(o),s.object.position.copy(s.pos),s.object.rotation.y=s.heading,s.setState(h,n.location==="shop"&&n.destination==="shop"&&!!n.commission),s.tick(t)}}}class Mw{constructor(e){B(this,"object",new me);B(this,"cur");B(this,"state",["idle",!1,0,"wheat"]);this.fallback=e,this.cur=e,this.object.add(e.object)}use(e){this.object.remove(this.cur.object),this.cur=e,this.object.add(e.object),e.setState(...this.state)}get swapped(){return this.cur!==this.fallback}setState(e,t,n,s="wheat"){this.state[0]=e,this.state[1]=t,this.state[2]=n,this.state[3]=s,this.cur.setState(e,t,n,s)}tick(e){var t,n;(n=(t=this.cur).tick)==null||n.call(t,e)}}function bw(i,e){const t=new Map,n=new Map;return{world:{root:i.root,setStock:i.setStock?(r,o,a)=>i.setStock(r,o,a):void 0,setStockItems:i.setStockItems?(r,o)=>i.setStockItems(r,o):void 0,createFruitTree:i.createFruitTree?r=>i.createFruitTree(r):void 0,createProcessor:i.createProcessor?r=>i.createProcessor(r):void 0,update:i.update?(r,o)=>i.update(r,o):void 0,setHousing:i.setHousing?r=>i.setHousing(r):void 0,createField:r=>i.createField(r),createWorker:r=>{const o=new Mw(i.createWorker(r));t.set(r,o);const a=n.get(r);return a&&(n.delete(r),o.use(a)),o},dispose:()=>{var r;e==null||e(),(r=i.dispose)==null||r.call(i)}},provide(r,o){const a=t.get(r);a?a.use(o):n.set(r,o)},get ready(){return[...t.values()].filter(r=>r.swapped).length}}}const st={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,e){try{localStorage.setItem(i,e)}catch{}},remove(i){try{localStorage.removeItem(i)}catch{}}},za={tom:"旅店廚師",yuki:"學校老師",lin:"村長太太"},Sw={tom:[["你好！我是旅店的廚師阿湯。","旅店的客人一直問有沒有新鮮麵包。"],["你們的麵粉真細，做出來的湯都變好喝了。","下次幫我留幾袋麵粉好嗎？"],["昨天的燉菜加了你們的甘藍，客人吃光光！","欸，你有沒有試過剛出爐的麵包配奶油？"],["以後每天早上我都送一袋麵粉給你，算我的謝禮。","我在想，旅店的招牌菜要不要用你們的名字？"],["我以前在城裡的大餐廳做菜，可是我更喜歡這個小村子。","跟你們一起做事很開心，真的。"],["（故事）阿湯說，他小時候家裡窮，每天最期待的就是奶奶烤的那條麵包。他離開大城市，是想做出「讓人想回家的味道」。今天他把第一條用你們麵粉烤的麵包，放在奶奶的照片前面。","「謝謝你，讓我找到那個味道。」"]],yuki:[["你好，我是學校的老師小雪。這是小白（兔子）。","小白最喜歡胡蘿蔔了。"],["孩子們今天在畫農莊，畫裡有你們的風車喔。","小白吃了你們的胡蘿蔔，整天都在跳。"],["可以帶孩子們來參觀磨坊嗎？他們一定很興奮。","蘋果切成小兔子的樣子，孩子們最喜歡了。"],["以後早上我會帶蘋果過來，是學校那棵樹結的。","孩子們都叫你「農莊的大哥哥大姊姊」。"],["其實我剛來村子的時候很怕生，是孩子們陪我的。","小白好像也很喜歡你，牠今天一直在你腳邊。"],["（故事）小雪帶全班孩子來農莊上了一堂課：從種子、麥田、磨坊到麵包。回去後，每個孩子都寫了一封信給你們。最後一封是小雪寫的，她說，這是她當老師以來最棒的一堂課。","「明年，我們一起在學校種一小塊田好不好？」"]],lin:[["我是林嬸，村長家的。你們就是新來的農莊吧？","村裡好久沒有這麼熱鬧了。"],["你們的蘋果醬，跟我年輕時做的一個味道。","有空來家裡喝杯茶。"],["村長說，秋天的豐收祭想請你們幫忙。","這條披肩是我自己織的，冬天到了再織一條給你。"],["我每天早上幫你們帶些蘋果來，家裡的樹結太多啦。","村裡的人都在說你們的好話呢。"],["我年輕時也想開一間果醬鋪，後來就……嫁進村長家了。","看你們把農莊經營起來，我真的很高興。"],["（故事）豐收祭那天，林嬸拿出一本舊筆記本，裡面是她四十年前寫的果醬配方。她說，一直想找一個能把它做出來的人。「這本給你們。村子的味道，要有人傳下去。」","「以後豐收祭的果醬，就交給你們了。」"]]},Di=(i,e)=>i.workers.filter(t=>t.job===e).length,Iu=i=>Rt.reduce((e,t)=>e+(t==="wheat"?0:i.inventory[t]),0),Ew=i=>i.mode==="endless"?"按下方工作列的 ＋，":"點工人卡，";function Tw(i,e=_r(i)){if(i.result)return null;if(e)return!Di(i,"sell")&&Iu(i)?{key:"jam-sell",text:`倉庫滿了！貨沒人賣：${Ew(i)}派一個人去 🪙賣貨`,target:"crew"}:i.inventory.wheat>=8&&Di(i,"mill")<2?{key:"jam-mill",text:"倉庫滿了！麥子堆太多：再派一個人去 ⚙️磨粉",target:"crew"}:wi(i,"warehouse").ok?{key:"jam-up",text:"倉庫滿了！點 🔨升級 擴建倉庫",target:"upgrade"}:{key:"jam",text:"倉庫滿了！多派人 ⚙️磨粉、🪙賣貨，倉庫才有空位",target:"crew"};if((i.fields.some(r=>r.harvested>0)||i.trees.some(r=>r.harvested>0))&&!Di(i,"haul"))return{key:"haul",text:"田邊的收成沒人搬：派一個人去 🧺搬運",target:"crew"};if(i.inventory.wheat>=4&&!Di(i,"mill"))return{key:"mill",text:"倉庫的麥子沒人磨：派一個人去 ⚙️磨粉",target:"crew"};if(Iu(i)>=2&&!Di(i,"sell"))return{key:"sell",text:"有貨沒人賣：派一個人去 🪙賣貨",target:"crew"};if(!Di(i,"farm")&&i.fields.some(r=>!r.planted&&!r.harvested))return{key:"farm",text:"沒人種田：派一個人去 🌾種田",target:"crew"};const n=Pt(i);for(const r of["bakery","preservery"]){const o=bi[r];if(n[r]&&!Di(i,o.job)&&i.inventory[o.input]>=o.amount)return{key:r,text:`${r==="bakery"?"🍞 麵包坊":"🍯 果醬坊"}開了：派一個人去${r==="bakery"?"烘焙":"製醬"}，${mi[o.output]}賣得比${mi[o.input]}貴`,target:"crew"}}if(n.orchard&&i.trees[0]&&!i.trees[0].planted)return{key:"tree",text:"🍎 蘋果樹可以種了：點樹上的紅色名牌",target:"tree"};const s=i.workers.find(r=>r.job==="idle");if(s)return{key:"idle",text:i.mode==="endless"?`${s.name} 在休息：按下方工作列的 ＋ 派工作`:`${s.name} 在休息：點他的卡派個工作`,target:"crew"};if(["warehouse","mill","field"].some(r=>wi(i,r).ok))return{key:"up",text:"錢夠了：點 🔨升級，農莊會做得更快",target:"upgrade"};if(i.mode==="endless"){if(Do(i).ok)return{key:"recruit",text:"錢夠雇人了：點 🔨升級 招募新農友",target:"upgrade"};if(i.workers.length>=Un(i)&&Io(i).ok)return{key:"house",text:"宿舍住滿了：點 🔨升級 加蓋宿舍，才能再雇人",target:"upgrade"}}return null}const Aw={crops:2,bakery:3,orchard:4,preservery:5},Cl={crops:120,bakery:300,orchard:600,preservery:1e3},of=["crops","bakery","orchard","preservery"],af={crops:["carrot","cabbage"],bakery:["bakery"],orchard:["orchard"],preservery:["preservery"]},vr=i=>i.mode==="endless";function cf(i,e){const t=Pt(i);return e==="crops"?t.crops.length>1:t[e]}function lf(i,e){return vr(i)?`🪙${Cl[e]}`:`第 ${Aw[e]} 天`}function Cw(i){const e=of.find(t=>!cf(i,t));return e?{key:e,ids:af[e],earned:Cl[e]}:null}function Rw(i){return of.filter(e=>cf(i,e)).flatMap(e=>af[e])}const Ui={farm:"種田",haul:"搬運",mill:"磨粉",sell:"賣貨",bake:"烘焙",preserve:"製醬",idle:"休息"},Ks={farm:"🌾",haul:"🧺",mill:"⚙️",sell:"🪙",bake:"🍞",preserve:"🥄",idle:"💤"},Du=["farm","haul","mill","bake","preserve","sell","idle"],Pw={morning:"早上",afternoon:"下午",evening:"傍晚"},Lw={"Field unavailable":"這塊田現在不能種","Invalid worker or job":"派工失敗","Worker must deliver cargo first":"他手上還有貨，送到倉庫才能換工作",Locked:"還沒解鎖","Unknown crop":"不認得的作物","Tree unavailable":"蘋果樹已經種了","Station busy":"這間工坊已經有人在做了","Batch in progress":"這批還沒做完，做完才能換工作","Invalid villager":"找不到這位村民","Unknown item":"不認得的貨","Already gifted":"今天已經送過了，明天再來","No item":"倉庫沒有這個貨","Not enough coins":"金幣不夠","Invalid upgrade":"不能升級","No land":`田最多 ${nt.maxFields} 塊，已經開滿了`,"Max level":"磨坊已經升到最快了","Unknown action":"不認得的操作","Invalid worker":"找不到這個工人","Invalid name":`名字要 1～${No} 個字，不能只有空白`,"Housing full":"宿舍住滿了：先加蓋宿舍"},Iw={"Max level":"宿舍已經蓋到最大了",Locked:"無盡農莊才能加蓋宿舍、招募"},Ha={field:"開新田",warehouse:"擴建倉庫",mill:"磨坊加速"},Dw={field:"多一塊田，多收一份作物",warehouse:"倉庫多放 12 格，比較不會塞住",mill:"磨一袋麵粉快 1 秒"},Va=(i,e)=>`./portraits/${i%4}-${e}.webp`,Uw=i=>gr[i]??`農友 ${i+1}`,Ga={farm:["今年的麥子長得真好。","再一輪就能收了。","太陽好，田也好。"],haul:["這袋有點重……","倉庫，我來了！","多跑幾趟，大家就有麵粉。"],mill:["風車轉起來囉。","磨得細一點，賣得好一點。","麥香好濃。"],sell:["新鮮麵粉，歡迎來看看！","今天客人真多。","這袋算你便宜一點。"],idle:["休息一下，等等再忙。","有什麼要我做的嗎？","曬曬太陽也不錯。"],bake:["麵包快出爐了，好香！","揉麵團是體力活。","烤得金黃才好賣。"],preserve:["蘋果醬要慢慢熬。","小心燙，糖還在冒泡。","這罐顏色真漂亮。"],jam:["倉庫塞滿了，快叫人去磨粉！","放不進去啦……"],wait:["還在等貨。","手上沒東西可以做。"]},Uu={carrot:["🥕胡蘿蔔、🥬甘藍收成後不用磨，直接就能賣，磨坊忙不過來時很好用。點田上的名牌，選下一輪要種什麼。","fields"],bakery:["2 袋麵粉烤成 1 個麵包，一個賣 🪙20（麵粉一袋才 🪙8）。點工人卡，派一個人去 🍞烘焙。","bakery"],orchard:["蘋果樹在農莊左上角：點它頭上的紅色名牌種下去。長大後會一直結果，蘋果可以直接賣。","tree"],preservery:["3 顆蘋果熬成 1 罐果醬，一罐賣 🪙42！點工人卡，派一個人去 🍯製醬。","preservery"]},Nu="farmproto.tip.villager",ko="farmproto.result",Fo="farmproto.unlockSeen",Oo="farmproto.unlockSeen.endless",ku="farmproto.album",Xc=(i,e)=>`./portraits/v-${i}-${e}.webp`,$c=i=>Math.floor(i/10),Wa=i=>"♥".repeat(i)+"♡".repeat(5-i),hf="farmproto.best",Xa={sold:["🛒","賣出"],milled:["⚙️","磨粉"],ordersCompleted:["📜","交訂單"]},$a=i=>i>=2?Math.min(8,2*(i-1)):0,Nw=()=>Math.round(un.earned*.85);function kw(){try{const i=JSON.parse(st.get(hf)??"null");return i&&Number.isFinite(i.earned)?{earned:i.earned,stars:Tl(i.earned)}:null}catch{return null}}const uf=i=>i.job==="haul"&&i.cargo>0&&i.location==="warehouse"&&i.destination==="warehouse";function _r(i){return Zi(i)>=ii(i)||i.workers.some(uf)}function df(i,e){const t=i.processors[e];if(t.batch)return null;switch(t.waiting){case"Locked":return vr(i)?`賺到 🪙${Cl[e]} 開放`:`第 ${bi[e].day} 天開放`;case"No worker":return"沒人做";case"Missing ingredients":return`缺${mi[bi[e].input]}`;case"Warehouse full":return"倉庫滿了";default:return null}}function ff(i,e){switch(e.job){case"haul":return uf(e)?{text:"倉庫滿了",warn:!0}:!e.cargo&&e.location==="field"&&e.destination==="field"&&!i.fields.some(t=>t.harvested>0)&&!i.trees.some(t=>t.harvested>0)?{text:"等收成",warn:!1}:{text:"",warn:!1};case"farm":return e.location==="orchard"?{text:"採蘋果",warn:!1}:{text:"",warn:!1};case"mill":return i.inventory.wheat<nt.wheatPerFlour?{text:"等麥子",warn:!1}:{text:"",warn:!1};case"sell":return Rt.some(t=>t!=="wheat"&&i.inventory[t]>0)?{text:"",warn:!1}:{text:"沒貨賣",warn:!1};case"bake":case"preserve":{const t=e.job==="bake"?"bakery":"preservery",n=df(i,t);return{text:n??"",warn:n==="倉庫滿了"}}case"idle":return{text:"💤",warn:!1};default:return{text:"",warn:!1}}}const ie=(i,e="",t="")=>{const n=document.createElement(i);return e&&(n.className=e),t&&(n.textContent=t),n},at=(i,e)=>{i.textContent!==e&&(i.textContent=e)},lo=(i,e)=>{const t=`scaleX(${Number(e.toFixed(3))})`;i.style.transform!==t&&(i.style.transform=t)};class Fw{constructor(e,t,n,s=!1,r={music:!0,sfx:!0}){B(this,"root");B(this,"day",ie("span"));B(this,"weatherEl",ie("small","weather"));B(this,"weatherPrev",null);B(this,"dayBar",ie("i"));B(this,"coins",ie("b"));B(this,"house",ie("span","house"));B(this,"stock",ie("span","stock"));B(this,"res",ie("div","pill res"));B(this,"workerCards",[]);B(this,"workerNames",[]);B(this,"workerLabels",[]);B(this,"upgradeBtns",{});B(this,"speedBtns",[]);B(this,"lastRun",1);B(this,"upBtn",ie("button","gold upbtn"));B(this,"upPop",ie("div","pill uppop hidden"));B(this,"menuPop",ie("div","pill menupop hidden"));B(this,"tasks",ie("div","pill tasks"));B(this,"tasksTitle",ie("span"));B(this,"crewEl",ie("div","crew"));B(this,"jobsEl",ie("div","jobs"));B(this,"jobCols",new Map);B(this,"rosterBtn",ie("button","jobcol roster-btn"));B(this,"rosterIdle",ie("b"));B(this,"jobState",null);B(this,"rosterPop",ie("div","pill rosterpop hidden"));B(this,"rosterSig","");B(this,"houseRows",[]);B(this,"houseUpBtn",ie("button","gold"));B(this,"recruitBtn",ie("button","gold"));B(this,"houseBox",ie("div","modal hidden housecard"));B(this,"houseInfo",ie("p"));B(this,"houseUp2",ie("button","gold"));B(this,"recruit2",ie("button","gold"));B(this,"houseWhy",ie("p","hint"));B(this,"houseOpen",!1);B(this,"mode","challenge");B(this,"hintEl",ie("button","nexthint hidden"));B(this,"hintNow",null);B(this,"hintCand","");B(this,"hintSince",0);B(this,"hintSeen",0);B(this,"hintLast",null);B(this,"jamSeen",-1e9);B(this,"quiet",!1);B(this,"picker",ie("div","picker hidden"));B(this,"toastEl",ie("div","toast"));B(this,"tagLayer",ie("div","tags"));B(this,"goal",ie("small","goal"));B(this,"goalBar",ie("i"));B(this,"orders",ie("div","orders"));B(this,"streakEl",ie("div","it streak hidden"));B(this,"daily",ie("div","daily"));B(this,"dailyRows",[]);B(this,"streakText",ie("span"));B(this,"dailyPrev",null);B(this,"dailyDay",0);B(this,"streakPrev",-1);B(this,"earnedPrev",-1);B(this,"best",kw());B(this,"modal",ie("div","modal hidden"));B(this,"renameBox",ie("div","modal hidden rename"));B(this,"renameTitle",ie("h2"));B(this,"renameInput",ie("input"));B(this,"renameFor",-1);B(this,"names",gr);B(this,"focusBox",ie("div","focus hidden"));B(this,"focusImg",ie("img"));B(this,"focusName",ie("b"));B(this,"focusJob",ie("span"));B(this,"focusLine",ie("p"));B(this,"focusFor",-1);B(this,"toastTimer",0);B(this,"resultShown",st.get(ko)==="shown");B(this,"pickFor",-1);B(this,"pickCard",null);B(this,"sizeGen",0);B(this,"lastCoins",-1);B(this,"speedNow",1);B(this,"taskCounts",{orders:0,jobs:0,daily:0});B(this,"orderSig","?");B(this,"vBox",ie("div","modal hidden vcard"));B(this,"vImg",ie("img"));B(this,"vName",ie("h2"));B(this,"vHearts",ie("div","hearts"));B(this,"vLine",ie("p","line"));B(this,"vJob",ie("div","vjob"));B(this,"vGifts",ie("div","gifts"));B(this,"vGiftHint",ie("p","hint"));B(this,"vAlbum",ie("p","hint album"));B(this,"vFor",null);B(this,"vSig","");B(this,"vPrev",null);B(this,"album",(()=>{try{return JSON.parse(st.get(ku)??"{}")??{}}catch{return{}}})());B(this,"unlockSeen",Number(st.get(Fo)??0));B(this,"unlockSeenEndless",null);B(this,"cropBox",ie("div","pill croppick hidden"));B(this,"cropTitle",ie("div","ttl"));B(this,"cropBtns",new Map);B(this,"cropFor",-1);this.cb=t,this.root=e,e.append(this.tagLayer);const o=ie("div","pill day"),a=ie("div","daybar");a.append(this.dayBar);const c=ie("div","daybar goalbar");c.append(this.goalBar),o.append(this.day,this.weatherEl,a,this.goal,c);const l=ie("button","tasks-head");l.append(this.tasksTitle,ie("i","caret","▾")),l.onclick=()=>this.tasks.classList.toggle("open"),this.tasks.append(l,this.orders,this.daily),matchMedia("(min-width: 641px) and (min-height: 560px)").matches&&this.tasks.classList.add("open");const h=ie("div","col");h.append(o,this.tasks),this.buildDaily();const u=ie("span","coin");u.append("🪙 ",this.coins),this.res.append(u,this.house,this.stock),this.res.addEventListener("click",()=>this.res.classList.toggle("open"));const d=ie("div","pill ctl"),f=ie("button","chip pause-btn");f.dataset.speed="0",f.title="暫停／繼續",f.onclick=()=>this.setSpeed(this.speed===0?this.lastRun:0);const g=ie("button","chip speed-btn");g.title="快轉",g.onclick=()=>this.setSpeed(this.speed===0?this.lastRun:this.speed>=4?1:this.speed*2),this.speedBtns.push(f,g);const v=ie("button","chip menu-btn","☰");v.title="選單",v.onclick=()=>this.menuPop.classList.toggle("hidden"),this.buildMenu(n,s,r),d.append(f,g,v,this.menuPop),document.addEventListener("pointerdown",T=>{!this.menuPop.contains(T.target)&&T.target!==v&&this.menuPop.classList.add("hidden"),!this.upPop.contains(T.target)&&!this.upBtn.contains(T.target)&&this.upPop.classList.add("hidden")});const m=ie("div","rcol");m.append(d,this.res);const p=ie("div","top");p.append(h,m);const M=ie("div","bottom"),x=this.crewEl;gr.forEach((T,P)=>{const w=ie("button","card"),y=ie("b","",T),C=ie("span"),N=ie("img","face");N.src=Va(P,"head"),N.alt="",N.draggable=!1;const F=ie("div","txt");F.append(y,C),w.append(N,F),w.dataset.worker=String(P),w.onclick=()=>this.openPicker(P,w),this.workerCards.push(w),this.workerNames.push(y),this.workerLabels.push(C),x.append(w)}),this.buildJobs(),x.append(this.jobsEl),this.upBtn.append(ie("i","","🔨"),ie("small","","升級")),this.upBtn.title="升級農莊",this.upBtn.onclick=()=>this.upPop.classList.toggle("hidden");const _=ie("div","ups");for(const T of["field","warehouse","mill"]){const P=ie("div","uprow"),w=ie("button","gold");w.onclick=()=>{t.onAction({type:"upgrade",target:T})&&(this.toast(`${Ha[T]}完成！`),this.upPop.classList.add("hidden"))},this.upgradeBtns[T]=w,P.append(w,ie("small","",Dw[T])),_.append(P)}for(const[T,P,w]of[[this.houseUpBtn,"宿舍多住 2 人，才能再招募",()=>this.upgradeHousing()],[this.recruitBtn,"多一個人幫忙（宿舍要有空床）",()=>this.recruit()]]){const y=ie("div","uprow");T.onclick=()=>{w()&&this.upPop.classList.add("hidden")},y.append(T,ie("small","",P)),y.hidden=!0,this.houseRows.push(y),_.append(y)}this.upPop.append(ie("div","ttl","🔨 升級農莊"),_),M.append(x,this.upBtn),this.hintEl.onclick=()=>this.pointHint();for(const T of Du){const P=ie("button","chip",`${Ks[T]} ${Ui[T]}`);P.dataset.job=T,(T==="bake"||T==="preserve")&&(P.hidden=!0),P.onclick=()=>{this.pickFor>=0&&t.onAction({type:"assign",workerId:this.pickFor,job:T}),this.closePicker()},this.picker.append(P)}const I=ie("button","chip follow-btn","🎥 近看");I.onclick=()=>{const T=this.pickFor;this.closePicker(),T>=0&&t.onFollow(T)};const E=ie("button","chip rename-btn","✏️ 改名");E.onclick=()=>{const T=this.pickFor;this.closePicker(),T>=0&&this.openRename(T)},this.picker.append(I,E),this.buildRename(),this.buildFocus(),document.addEventListener("pointerdown",T=>{var w;const P=T.target;!this.picker.contains(P)&&!((w=P.closest)!=null&&w.call(P,"[data-worker]"))&&this.closePicker(),!this.rosterPop.contains(P)&&!this.picker.contains(P)&&!this.rosterBtn.contains(P)&&this.rosterPop.classList.add("hidden")}),this.buildHouseCard(),this.buildCropPicker(),this.buildVillagerCard(),this.orders.addEventListener("click",T=>{const P=T.target.closest("[data-villager]");P&&this.openVillager(P.dataset.villager)}),e.append(p,M,this.hintEl,this.focusBox,this.upPop,this.rosterPop,this.picker,this.cropBox,this.toastEl,this.modal,this.renameBox,this.vBox,this.houseBox),this.refreshSpeed(),window.addEventListener("resize",()=>{this.sizeGen++,this.pickFor>=0&&this.placePicker()})}get speed(){return this.speedNow}set speed(e){this.speedNow=e,this.refreshSpeed()}refreshSpeed(){this.speed>0&&(this.lastRun=this.speed);const[e,t]=this.speedBtns;at(e,this.speed===0?"▶":"⏸"),e.classList.toggle("on",this.speed===0),at(t,`${this.lastRun}×`),t.dataset.speed=String(this.lastRun),t.classList.toggle("on",this.speed>1)}setSpeed(e){e!==this.speed&&(this.speed=e,this.cb.onSpeed(e))}buildMenu(e,t,n){const s=ie("button","chip tour-btn","📖 新手導覽");s.onclick=()=>{var l,h;this.menuPop.classList.add("hidden"),(h=(l=this.cb).onTour)==null||h.call(l)};const r=ie("button","chip",e==="high"?"🖥️ 高畫質":"🔋 省電");r.title="切換畫質（會重新載入）",r.onclick=()=>this.cb.onQuality(e==="high"?"low":"high");const o=ie("button",`chip outline-btn${t?" on":""}`,"✒️ 描邊");o.title="建築和樹外緣加一圈細線",o.onclick=()=>{t=!t,o.classList.toggle("on",t),this.cb.onOutline(t)};const a=[];for(const[l,h]of[["music","🎵 音樂"],["sfx","🔔 音效"]]){const u=ie("button",`chip ${l}-btn${n[l]?" on":""}`,h);u.onclick=()=>{n[l]=!n[l],u.classList.toggle("on",n[l]),this.cb.onSound(l,n[l])},a.push(u)}const c=ie("button","chip restart-btn","🔄 開新局");c.onclick=()=>{this.menuPop.classList.add("hidden"),this.openNewGame()},this.menuPop.append(s,r,o,...a,c)}buildJobs(){for(const e of Du){if(e==="idle")continue;const t=ie("div","jobcol");t.dataset.job=e;const n=ie("button","pm plus","＋"),s=ie("button","pm minus","−"),r=ie("b"),o=ie("div","mid");o.append(ie("i","",Ks[e]),r,ie("small","",Ui[e])),n.title=`多派一個人去${Ui[e]}`,s.title=`${Ui[e]}的人少一個（改成休息）`,n.onclick=()=>this.jobPlus(e),s.onclick=()=>this.jobMinus(e),t.append(n,o,s),this.jobCols.set(e,{col:t,n:r,plus:n,minus:s}),this.jobsEl.append(t)}this.rosterBtn.title="名冊：每個人的卡片（近看、改名、單獨派工）",this.rosterBtn.append(this.rosterIdle,ie("small","","👥 名冊")),this.rosterBtn.onclick=()=>this.toggleRoster(),this.jobsEl.append(this.rosterBtn)}jobPlus(e){const t=this.jobState;if(!t)return;const n=t.workers.find(s=>s.job==="idle");if(!n){this.toast(t.workers.length<Un(t)?"沒有人在休息：先按別的工作的 −，或招募新農友":"沒有人在休息：先按別的工作的 −",2600,!0);return}this.cb.onAction({type:"assign",workerId:n.id,job:e})}jobMinus(e){const t=this.jobState;if(!t)return;const n=o=>Object.values(t.processors).some(a=>{var c;return((c=a.batch)==null?void 0:c.workerId)===o}),s=t.workers.filter(o=>o.job===e),r=[...s].reverse().find(o=>!o.cargo&&!n(o.id))??s[s.length-1];r&&this.cb.onAction({type:"assign",workerId:r.id,job:"idle"})}renderJobs(e){const t=Pt(e).jobs,n=e.workers.filter(s=>s.job==="idle").length;for(const[s,r]of this.jobCols){const o=t.includes(s);if(r.col.hidden===o&&(r.col.hidden=!o),!o)continue;const a=e.workers.filter(l=>l.job===s).length;at(r.n,String(a));const c=(s==="bake"||s==="preserve")&&a>=1;r.plus.disabled!==c&&(r.plus.disabled=c),r.plus.classList.contains("dim")!==!n&&r.plus.classList.toggle("dim",!n),r.minus.disabled!==!a&&(r.minus.disabled=!a),r.col.classList.contains("none")!==!a&&r.col.classList.toggle("none",!a)}at(this.rosterIdle,`💤${n}`),this.rosterBtn.classList.contains("alert")!==n>0&&this.rosterBtn.classList.toggle("alert",n>0),this.rosterPop.classList.contains("hidden")||this.renderRoster(e)}toggleRoster(){this.rosterPop.classList.toggle("hidden"),this.rosterSig="",this.jobState&&!this.rosterPop.classList.contains("hidden")&&this.renderRoster(this.jobState)}renderRoster(e){const t=e.workers.map(r=>`${r.name}:${r.job}:${r.cargo}`).join("|");if(t===this.rosterSig)return;this.rosterSig=t;const n=ie("div","ttl",`👥 名冊 ${e.workers.length}/${Un(e)} 人`),s=ie("div","rlist");if(e.workers.forEach((r,o)=>{const a=ie("button","rrow");a.dataset.worker=String(o),a.dataset.job=r.job;const c=ie("img","face");c.src=Va(o,"head"),c.alt="",c.draggable=!1,a.append(c,ie("b","",r.name),ie("span","",`${Ks[r.job]} ${Ui[r.job]}${r.cargo?` · 扛 ${Qt[r.cargoItem]}${r.cargo}`:""}`)),a.onclick=()=>this.openPicker(o,a),s.append(a)}),this.rosterPop.replaceChildren(n,s),this.pickFor>=0&&this.pickCard&&!this.workerCards.includes(this.pickCard)){const r=s.querySelector(`[data-worker="${this.pickFor}"]`);r&&(this.pickCard=r,this.placePicker())}}buildHouseCard(){const e=ie("div","sheet"),t=ie("button","chip","關閉");t.onclick=()=>this.closeHousing(),this.houseUp2.onclick=()=>this.upgradeHousing(),this.recruit2.onclick=()=>this.recruit();const n=ie("div","hbtns");n.append(this.houseUp2,this.recruit2);const s=ie("div","row");s.append(t),e.append(ie("h2","","🏡 宿舍"),this.houseInfo,n,this.houseWhy,s),this.houseBox.append(e),this.houseBox.addEventListener("pointerdown",r=>{r.target===this.houseBox&&this.closeHousing()})}openHousing(){this.houseOpen=!0,this.houseBox.classList.remove("hidden"),this.jobState&&this.renderHousing(this.jobState)}closeHousing(){this.houseOpen=!1,this.houseBox.classList.add("hidden")}get housingOpen(){return this.houseOpen}renderHousing(e){const t=Un(e),n=e.housingLevel>=ji.capacities.length-1,s=Io(e),r=Do(e),o=n?"🏡 宿舍已經最大":`🏡 加蓋宿舍 🪙${Sl(e)}`,a=`👤 招募農友 🪙${Lo()}`;for(const[c,l,h]of[[this.houseUpBtn,o,s.ok],[this.houseUp2,o,s.ok],[this.recruitBtn,a,r.ok],[this.recruit2,a,r.ok]])at(c,l),c.disabled!==!h&&(c.disabled=!h);this.houseOpen&&(at(this.houseInfo,`住了 ${e.workers.length}/${t} 人・Lv${e.housingLevel+1}${n?"（最大）":`，加蓋後住 ${ji.capacities[e.housingLevel+1]} 人`}`),at(this.houseWhy,r.ok?"新來的農友先休息，用下方的 ＋ 派工作。":r.reason==="Housing full"?n?"宿舍住滿了，已經蓋到最大。":"宿舍住滿了：先加蓋宿舍才能再招募。":r.reason==="Not enough coins"?`招募還差 🪙${Lo()-e.coins}。`:this.housingReason(r.reason)))}housingReason(e){return e&&Iw[e]||this.reason(e)}upgradeHousing(){const e=this.jobState;return!e||!this.cb.onAction({type:"upgradeHousing"})?!1:(this.toast(`🏡 宿舍加蓋好了！現在住得下 ${Un(e)} 人`),!0)}recruit(){const e=this.jobState;if(!e||!this.cb.onAction({type:"recruitWorker"}))return!1;const t=e.workers[e.workers.length-1];return this.toast(`👤 ${t.name} 來幫忙了！先在休息，用下方的 ＋ 派工作`,3200),!0}openNewGame(){this.modal.innerHTML=`<div class="sheet newgame"><h2>開新局</h2><p class="hint">會清掉現在的進度。</p><button class="gold mode" data-mode="challenge"><b>🏆 5 天挑戰</b><small>5 天內賺 🪙${un.earned} 拿三星</small></button><button class="gold mode" data-mode="endless"><b>🌾 無盡農莊</b><small>沒有期限：賺錢解鎖新東西、招募農友、加蓋宿舍</small></button><div class="row"><button class="chip" data-k="cancel">取消</button></div></div>`,this.modal.classList.remove("hidden");for(const e of this.modal.querySelectorAll("[data-mode]"))e.onclick=()=>this.cb.onRestart(e.dataset.mode);this.modal.querySelector('[data-k="cancel"]').onclick=()=>this.modal.classList.add("hidden")}rectOf(e){const n={crew:this.crewEl,upgrade:this.upBtn,tasks:this.tasks,speed:this.speedBtns[0].parentElement,hint:this.hintEl}[e].getBoundingClientRect();return n.width?n:null}renderHint(e){if(this.quiet||this.focusFor>=0){this.hintCand="",this.hintNow&&(this.hintNow=null,this.hintEl.classList.add("hidden"));return}if(e.paused)return;const t=performance.now();_r(e)&&(this.jamSeen=t);const n=Tw(e,t-this.jamSeen<3e3),s=o=>(o==null?void 0:o.key.split("-")[0])??"";let r=s(n);if(n?(this.hintSeen=t,this.hintLast=n):this.hintCand&&t-this.hintSeen<2500&&(r=this.hintCand),r!==this.hintCand&&(this.hintCand=r,this.hintSince=t),r===s(this.hintNow)){r&&n&&n.key!==this.hintNow.key&&(this.hintNow=n,at(this.hintEl,n.text));return}t-this.hintSince<1500||(this.hintNow=r?this.hintLast:null,this.hintEl.classList.toggle("hidden",!this.hintNow),this.hintNow&&(at(this.hintEl,this.hintNow.text),this.hintEl.classList.remove("pop"),this.hintEl.offsetWidth,this.hintEl.classList.add("pop")))}pointHint(){var t;const e=(t=this.hintNow)==null?void 0:t.target;e==="upgrade"?this.upPop.classList.remove("hidden"):e==="crew"?(this.crewEl.classList.remove("nudge"),this.crewEl.offsetWidth,this.crewEl.classList.add("nudge")):e==="tree"&&this.toast("蘋果樹在農莊左上角，點它頭上的紅色名牌")}openPicker(e,t){if(this.pickFor===e)return this.closePicker();this.pickFor=e,this.pickCard=t,this.picker.classList.remove("hidden"),this.placePicker()}placePicker(){const e=this.pickCard.getBoundingClientRect();this.picker.style.left="0px";const t=this.picker.offsetWidth;this.picker.style.left=`${Math.max(8,Math.min(window.innerWidth-t-8,e.left+e.width/2-t/2))}px`,this.picker.style.bottom=`${window.innerHeight-e.top+8}px`}closePicker(){this.pickFor=-1,this.pickCard=null,this.picker.classList.add("hidden")}buildFocus(){this.focusImg.alt="",this.focusImg.draggable=!1;const e=ie("div","info"),t=ie("button","chip","🔙 全景");t.onclick=()=>this.cb.onUnfollow();const n=ie("div","head");n.append(this.focusName,t),e.append(n,this.focusJob,this.focusLine),this.focusBox.append(this.focusImg,e)}setFocus(e){this.focusFor=e,this.focusBox.classList.toggle("hidden",e<0),e>=0&&(this.focusImg.src=Va(e,"half"))}renderFocus(e){const t=e.workers[this.focusFor];if(!t)return;const n=ff(e,t);at(this.focusName,t.name),at(this.focusJob,`${Ks[t.job]} ${Ui[t.job]}${t.cargo?` · 扛 ${Qt[t.cargoItem]}${t.cargo}`:""}${n.text&&n.text!=="💤"?` · ${n.text}`:""}`);const s=n.warn?Ga.jam:n.text&&t.job!=="idle"?Ga.wait:Ga[t.job];at(this.focusLine,`「${s[(Math.floor(e.time/8)+t.id)%s.length]}」`),this.focusBox.classList.toggle("warn",n.warn)}buildRename(){const e=ie("div","sheet"),t=ie("p","hint",`最多 ${No} 個字，會自動存檔`);this.renameInput.type="text",this.renameInput.maxLength=No*2,this.renameInput.autocomplete="off",this.renameInput.enterKeyHint="done";const n=ie("button","chip","用原本的名字"),s=ie("button","chip","取消"),r=ie("button","gold","確定"),o=ie("div","row");o.append(n,s,r),e.append(this.renameTitle,this.renameInput,t,o),this.renameBox.append(e),n.onclick=()=>{this.renameFor>=0&&(this.renameInput.value=Uw(this.renameFor)),this.renameInput.focus()},s.onclick=()=>this.closeRename(),r.onclick=()=>this.submitRename(),this.renameInput.addEventListener("keydown",a=>{a.key==="Enter"&&!a.isComposing?(a.preventDefault(),this.submitRename()):a.key==="Escape"&&this.closeRename()}),this.renameBox.addEventListener("pointerdown",a=>{a.target===this.renameBox&&this.closeRename()})}openRename(e){this.renameFor=e,this.renameTitle.textContent=`幫 ${this.names[e]??""} 取新名字`,this.renameInput.value=this.names[e]??"",this.renameBox.classList.remove("hidden"),this.renameInput.focus(),this.renameInput.select()}submitRename(){const e=this.renameFor;if(e<0)return;const t=this.renameInput.value.trim();if(t===this.names[e])return this.closeRename();this.cb.onAction({type:"renameWorker",workerId:e,name:t})&&(this.closeRename(),this.toast(`改好了：${t}`))}closeRename(){this.renameFor=-1,this.renameBox.classList.add("hidden"),this.renameInput.blur()}toast(e,t=2200,n=!1){this.toastEl.textContent=e,this.toastEl.classList.toggle("warn",n),this.toastEl.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove("show"),t)}reason(e){return e&&Lw[e]||e||"做不到"}tag(e){const t=ie("div",`tag ${e}`);this.tagLayer.append(t);let n="",s=!0,r=this.sizeGen;const o={w:0,h:0};return{el:t,set:a=>{a!==n&&(n=a,t.textContent=a,s=!0)},size:()=>((s||!o.w||r!==this.sizeGen)&&(o.w=t.offsetWidth,o.h=t.offsetHeight,s=!1,r=this.sizeGen),o)}}renderTaskTitle(){const e=this.taskCounts;at(this.tasksTitle,`📜 訂單 ${e.orders}${e.jobs?`・委託 ${e.jobs}`:""}`)}renderOrders(e){const t=e.villagers.filter(r=>r.commission),n=[...e.orders.map(r=>`${r.id}:${r.items.map(o=>o.delivered).join(",")}:${r.expiresAt-e.time}`),...t.map(r=>`commission:${r.id}:${r.commission.id}:${r.commission.items.map(o=>o.delivered).join(",")}:${r.commission.expiresAt-e.time}`)].join("|");if(n===this.orderSig)return;this.orderSig=n,this.taskCounts.orders=e.orders.length,this.taskCounts.jobs=t.length,this.renderTaskTitle();const s=t.map(r=>{const o=r.commission,a=o.expiresAt-e.time;return`<div class="ord commission${a<=20?" hurry":""}" data-villager="${r.id}"><span><img class="vface" src="${Xc(r.id,"head")}" alt="">${o.items.map(c=>`<i class="${c.delivered>=c.required?"ok":""}">${Qt[c.item]}${c.delivered}/${c.required}</i>`).join(" ")}</span><b>🪙${o.reward}</b><em>⏳${a}s</em></div>`}).join("");if(!e.orders.length){this.orders.innerHTML='<div class="ord none">📜 等客人下訂單…</div>'+s;return}this.orders.innerHTML=e.orders.map((r,o)=>{const a=r.expiresAt-e.time;return`<div class="ord${o===0?" active":""}${a<=20?" hurry":""}"><span>📜 ${r.items.map(c=>`<i class="${c.delivered>=c.required?"ok":""}" title="${mi[c.item]}">${Qt[c.item]}${c.delivered}/${c.required}</i>`).join(" ")}</span><b>🪙${r.reward}</b><em>⏳${a}s</em></div>`}).join("")+s}buildDaily(){const e=ie("div","ttl");e.append(ie("span","","今日目標"),ie("small","","每項 🪙+8")),this.daily.append(e);for(const t of Object.keys(Xa)){const[n,s]=Xa[t],r=ie("div","it");r.dataset.key=t;const o=ie("span"),a=ie("div","daybar"),c=ie("i");a.append(c),r.append(ie("b","",n),ie("em","",s),o,a),this.daily.append(r),this.dailyRows.push({row:r,text:o,bar:c})}this.streakEl.append(ie("b","","🔥"),this.streakText),this.daily.append(this.streakEl)}renderDaily(e){const t=new Set;e.daily.forEach((n,s)=>{const r=this.dailyRows[s];if(!r)return;const o=Xa[n.key][1];n.claimed&&t.add(n.key),at(r.text,n.claimed?"✅":`${Math.min(n.progress,n.target)}/${n.target}`),lo(r.bar,n.claimed?1:Math.min(1,n.progress/n.target)),r.row.classList.contains("done")!==n.claimed&&r.row.classList.toggle("done",n.claimed),n.claimed&&this.dailyPrev&&this.dailyDay===e.day&&!this.dailyPrev.has(n.key)&&(this.toast(`今日目標「${o}」完成 🪙+${n.reward}`),r.row.classList.remove("pop"),r.row.offsetWidth,r.row.classList.add("pop"))}),this.dailyPrev=t,this.dailyDay=e.day,this.taskCounts.daily=t.size,this.renderTaskTitle()}renderStreak(e){e!==this.streakPrev&&(this.streakPrev>=0&&e>=2&&e>this.streakPrev&&this.toast(`🔥 連擊 ×${e}！多拿 🪙${$a(e)}`),this.streakPrev=e,this.streakEl.classList.toggle("hidden",e<1),at(this.streakText,`×${e}`),this.streakEl.title=`連續準時交訂單 ${e} 張，下一張多拿 🪙${$a(e+1)}`,this.streakEl.dataset.next=`下一單 +${$a(e+1)}`)}showResult(e,t,n){this.resultShown=!0,st.set(ko,"shown");const s=this.best;this.best=Ny(s,e);const r=!s||e.earned>s.earned;st.set(hf,JSON.stringify(this.best));const o=e.stars===3?"🎉 三星農莊！":e.stars===2?"👍 二星！差一點就三星":"🌱 一星，下一局會更好",a=[1,2,3].map(l=>`<span class="${l<=e.stars?"on":""}">★</span>`).join(""),c=this.best;this.modal.innerHTML=`<div class="sheet result"><div class="stars">${a}</div><h2>${o}</h2><p>五天收入 🪙${e.earned}（三星 🪙${un.earned}、二星 🪙${Nw()}）</p><ul><li>每日目標＋連擊獎勵 🪙${t.bonusEarned}</li><li>最長連擊 ×${t.bestStreak}</li><li>賣出 🥖${n.stats.sold} 袋　磨粉 ${n.stats.milled}</li><li>升級 田+${n.upgrades.field}／倉+${n.upgrades.warehouse}／磨+${n.upgrades.mill}</li></ul><p class="best">${r?"🏆 新紀錄！":`🏆 最高紀錄 🪙${c.earned} ${"★".repeat(c.stars)}`}</p>`+(e.stars<3?'<p class="hint">提示：倉庫快滿就多派人磨粉；連續準時交訂單有加成。</p>':"")+'<div class="row"><button class="chip" data-k="go">繼續經營</button><button class="gold" data-k="new">再玩一局</button></div><div class="row"><button class="chip" data-k="endless">🌾 改玩無盡農莊（沒有期限）</button></div></div>',this.modal.classList.remove("hidden"),this.modal.querySelector('[data-k="go"]').onclick=()=>this.modal.classList.add("hidden"),this.modal.querySelector('[data-k="new"]').onclick=()=>this.cb.onRestart("challenge"),this.modal.querySelector('[data-k="endless"]').onclick=()=>this.cb.onRestart("endless")}renderWeather(e,t){const n=bu[t],s=e.forecast;at(this.weatherEl,`${n.icon} ${n.name}${s?`　明天 ${bu[s].icon}`:""}`),this.weatherPrev&&this.weatherPrev!==t&&this.toast(`${n.icon} ${n.tip}`),this.weatherPrev=t}update(e,t="sunny"){var v;this.renderWeather(e,t),this.renderOrders(e);const n=ky(e);this.renderDaily(n),this.renderStreak(n.streak);const s=e.stats.earned,r=un.earned,o=n.result,a=vr(e);if(a!==(this.mode==="endless")&&this.setMode(e.mode),a){const m=Cw(e);at(this.goal,m?`🎯 再賺 🪙${m.earned-s} 開 ${m.ids.map(p=>Oa[p]??p).join("")}`:`👥 農友 ${e.workers.length}/${Un(e)}・累計 🪙${s}`),lo(this.goalBar,m?Math.min(1,s/m.earned):e.workers.length/Un(e))}else at(this.goal,o?`${"★".repeat(o.stars)}${"☆".repeat(3-o.stars)} 五天成績 🪙${o.earned}`:n.resultUnknown?`🎯 舊存檔繼續經營 🪙${s}`:s>=r?`✅ 三星門檻 🪙${s}/${r}`:`🎯 ${un.days} 天內賺 🪙${s}/${r}`),lo(this.goalBar,Math.min(1,s/r)),this.earnedPrev>=0&&this.earnedPrev<r&&s>=r&&!o&&this.toast("🎉 達到三星門檻！撐到第 5 天結束就是 3 星");this.earnedPrev=s,o&&!this.resultShown&&this.showResult(o,n,e);const c=e.time%nt.daySeconds+e.remainder;at(this.day,`第 ${e.day} 天・${Pw[e.phase]}`),lo(this.dayBar,c/nt.daySeconds),e.coins!==this.lastCoins&&(this.lastCoins>=0&&e.coins>this.lastCoins&&(this.coins.classList.remove("bump"),this.coins.offsetWidth,this.coins.classList.add("bump")),this.lastCoins=e.coins,this.coins.textContent=String(e.coins));const l=ii(e),h=Zi(e),u=Rt.filter(m=>m==="wheat"||m==="flour"||e.inventory[m]>0).map(m=>`${Qt[m]}${e.inventory[m]}`);at(this.stock,u.join(" ")),at(this.house,`🏠 ${h}/${l}`);const d=_r(e);this.house.classList.contains("full")!==d&&this.house.classList.toggle("full",d),this.renderUnlocks(e),this.names=e.workers.map(m=>m.name),e.workers.forEach((m,p)=>{const M=this.workerCards[p];M&&(at(this.workerNames[p],m.name),at(this.workerLabels[p],`${Ks[m.job]} ${Ui[m.job]}`),M.dataset.job!==m.job&&(M.dataset.job=m.job))}),this.focusFor>=0&&this.renderFocus(e);for(const m of["field","warehouse","mill"]){const p=this.upgradeBtns[m],M=Ko(e,m),x=wi(e,m),_=x.reason==="No land"||x.reason==="Max level";at(p,_?`${Ha[m]} 已滿`:`${Ha[m]} 🪙${M}`),p.disabled!==!x.ok&&(p.disabled=!x.ok)}this.jobState=e,a&&(this.renderJobs(e),this.renderHousing(e));const f=["field","warehouse","mill"].some(m=>wi(e,m).ok)||a&&(Io(e).ok||Do(e).ok);this.upBtn.classList.contains("ready")!==f&&this.upBtn.classList.toggle("ready",f),this.renderHint(e);const g=Pt(e).jobs;for(const m of this.picker.querySelectorAll("button")){m.classList.toggle("on",this.pickFor>=0&&((v=e.workers[this.pickFor])==null?void 0:v.job)===m.dataset.job);const p=m.dataset.job;p&&m.hidden===g.includes(p)&&(m.hidden=!g.includes(p))}this.cropFor>=0&&this.refreshCropPicker(e),this.renderVillagers(e)}buildVillagerCard(){const e=ie("div","sheet");this.vImg.alt="",this.vImg.draggable=!1;const t=ie("div","vhead"),n=ie("div","info");n.append(this.vName,this.vHearts,this.vLine),t.append(this.vImg,n);const s=ie("button","chip","關閉");s.onclick=()=>this.closeVillager();const r=ie("div","row");r.append(s),e.append(t,this.vJob,ie("div","ttl","🎁 送禮（每天一次）"),this.vGifts,this.vGiftHint,this.vAlbum,r),this.vBox.append(e),this.vBox.addEventListener("pointerdown",o=>{o.target===this.vBox&&this.closeVillager()})}openVillager(e){this.vFor=e,this.vSig="",this.vImg.src=Xc(e,"half"),this.vBox.classList.remove("hidden")}get villagerOpen(){return this.vFor}closeVillager(){this.vFor=null,this.vBox.classList.add("hidden")}renderVillagers(e){var s,r,o,a,c,l;const t=this.vPrev,n=new Map;for(const h of e.villagers){const u=$c(h.points);n.set(h.id,{appeared:h.appeared,hearts:u,completed:h.completed}),(this.album[h.id]??0)<u&&(this.album[h.id]=u,st.set(ku,JSON.stringify(this.album)));const d=t==null?void 0:t.get(h.id);if(!d)continue;const f=gn[h.id].name;h.appeared&&!d.appeared?(!st.get(Nu)&&((r=(s=this.cb).explain)!=null&&r.call(s,`${f}來村裡了！`,`${f}是${za[h.id]}。點頭上的粉紅名牌可以聊天、送禮，好感高了會回送東西；名牌有 📜 是在下委託，賣貨的人交齊就有報酬。`,`villager:${h.id}`))?st.set(Nu,"1"):this.toast(`${f}（${za[h.id]}）來村裡了！點名牌可以聊天、送禮`,4e3),(a=(o=this.cb).onVillagerEvent)==null||a.call(o,"greet")):u>d.hearts?(this.toast(`${f} ${Wa(u)}${u===3?"　以後每天早上會送你東西":u===5?"　解鎖專屬故事！":""}`,3500),(l=(c=this.cb).onVillagerEvent)==null||l.call(c,"heart")):h.completed>d.completed&&this.toast(`完成${f}的委託！好感 +4`)}this.vPrev=n,this.vFor&&this.renderVillagerCard(e)}renderVillagerCard(e){const t=e.villagers.find(u=>u.id===this.vFor);if(!t)return this.closeVillager();const n=Math.floor(e.time/nt.daySeconds)+1,s=t.giftedDay===n,r=Rt.filter(u=>e.inventory[u]>0),o=`${t.points}|${s}|${r.map(u=>`${u}${e.inventory[u]}`).join(",")}|${t.commission?`${t.commission.items[0].delivered}:${t.commission.expiresAt-e.time}`:"-"}|${Math.floor(e.time/8)}`;if(o===this.vSig)return;this.vSig=o;const a=gn[t.id],c=$c(t.points);at(this.vName,`${a.name}　${za[t.id]}`),at(this.vHearts,`${Wa(c)}　${t.points}/50`);const l=Sw[t.id][c];at(this.vLine,c>=5?l.join(`
`):`「${l[Math.floor(e.time/8)%l.length]}」`),this.vLine.classList.toggle("story",c>=5);const h=t.commission;at(this.vJob,t.appeared?h?`📜 委託：${h.items.map(u=>`${Qt[u.item]}${mi[u.item]} ${u.delivered}/${u.required}`).join("、")}　🪙${h.reward}　⏳${h.expiresAt-e.time}s（賣貨的人會送過去）`:"📜 現在沒有委託":"還沒來村裡"),this.vGifts.textContent="";for(const u of r){const d=$d(t.id,u),f=ie("button","chip",`${Qt[u]}${e.inventory[u]}${d===3?" ❤️":d===2?" 👍":""}`);f.title=`${mi[u]}（好感 +${d}）`,f.dataset.item=u,f.disabled=s||!t.appeared,f.onclick=()=>{this.cb.onAction({type:"gift",villagerId:t.id,item:u})&&(this.toast(`送給${a.name} ${Qt[u]}${mi[u]}，好感 +${d}${d===3?"　他最喜歡這個！":""}`),this.vSig="")},this.vGifts.append(f)}at(this.vGiftHint,t.appeared?s?"今天已經送過了，明天再來。":r.length?`❤️ 最愛 ${Qt[a.favorite]}　👍 喜歡 ${a.likes.map(u=>Qt[u]).join("")}`:"倉庫沒有貨可以送。":""),at(this.vAlbum,`📔 回憶相簿：最高 ${Wa(this.album[t.id]??0)}`)}setMode(e){this.mode=e;const t=e==="endless";this.crewEl.classList.toggle("endless",t),this.root.classList.toggle("endless",t);for(const n of this.houseRows)n.hidden=!t;t||(this.rosterPop.classList.add("hidden"),this.closeHousing())}renderUnlocks(e){var r,o,a,c;if(vr(e))return this.renderEndlessUnlocks(e);if(e.day<=this.unlockSeen)return;this.unlockSeen=e.day,st.set(Fo,String(e.day));const t=Pt(e).newToday;if(!t.length)return;const n=t.map(l=>Oa[l]??l).join("、"),s=Uu[t[0]];(!s||!((o=(r=this.cb).explain)!=null&&o.call(r,`第 ${e.day} 天解鎖：${n}`,s[0],s[1])))&&this.toast(`第 ${e.day} 天解鎖：${n}！${_u[t[0]]??""}`,5e3),(c=(a=this.cb).onUnlock)==null||c.call(a,t)}renderEndlessUnlocks(e){var l,h,u,d;const t=Rw(e);if(!this.unlockSeenEndless){try{this.unlockSeenEndless=JSON.parse(st.get(Oo)??"[]")}catch{this.unlockSeenEndless=[]}Array.isArray(this.unlockSeenEndless)||(this.unlockSeenEndless=[])}const n=this.unlockSeenEndless,s=t.filter(f=>!n.includes(f));if(!s.length)return;this.unlockSeenEndless=t,st.set(Oo,JSON.stringify(t));const r=s.map(f=>Oa[f]??f).join("、"),o=Uu[s[0]],a=o==null?void 0:o[0].replace("點工人卡，派一個人去","按下方工作列的 ＋，派一個人去"),c=`累計賺到 🪙${e.stats.earned}，解鎖：${r}`;(!o||!a||!((h=(l=this.cb).explain)!=null&&h.call(l,c,a,o[1])))&&this.toast(`解鎖：${r}！${_u[s[0]]??""}`,5e3),(d=(u=this.cb).onUnlock)==null||d.call(u,s)}buildCropPicker(){this.cropBox.append(this.cropTitle);for(const e of Gy){const t=ie("button","chip");t.dataset.crop=e,t.onclick=()=>this.pickCrop(e),this.cropBtns.set(e,t),this.cropBox.append(t)}document.addEventListener("pointerdown",e=>{var t,n;this.cropFor>=0&&!this.cropBox.contains(e.target)&&!((n=(t=e.target).closest)!=null&&n.call(t,".tag.field"))&&this.closeCropPicker()},{capture:!0})}openCropPicker(e,t,n,s){this.cropFor=e,this.cropBox.classList.remove("hidden"),this.refreshCropPicker(s);const r=this.cropBox.offsetWidth,o=this.cropBox.offsetHeight;this.cropBox.style.left=`${Math.max(8,Math.min(window.innerWidth-r-8,t-r/2))}px`,this.cropBox.style.top=`${Math.max(8,Math.min(window.innerHeight-o-8,n-o-10))}px`}get cropPickerFor(){return this.cropFor}refreshCropPicker(e){const t=e.fields[this.cropFor];if(!t)return this.closeCropPicker();const n=t.planted||t.harvested>0;at(this.cropTitle,n?"下一輪種什麼？":"種什麼？");const s=Pt(e).crops;for(const[r,o]of this.cropBtns)at(o,`${Qt[r]} ${mi[r]} ${hn[r].seconds}秒×${hn[r].yield}`),o.hidden===s.includes(r)&&(o.hidden=!s.includes(r)),o.classList.toggle("on",n&&t.nextCrop===r)}pickCrop(e){const t=this.cropFor;this.closeCropPicker(),t>=0&&this.cb.onCrop(t,e)}closeCropPicker(){this.cropFor=-1,this.cropBox.classList.add("hidden")}get element(){return this.root}}const xr=[{id:"welcome",title:"把收成變成收入",body:`你的目標：${un.days} 天內累積賺到 ${un.earned} 金幣。種田 → 搬進倉庫 → 磨粉 → 賣出，四位工人會分工。花錢升級不會扣掉累積收入。`,target:"farm",interactive:!1},{id:"fields",title:"先看麥田",body:"三塊田的小麥正在長。種田工人會收成補種，搬運工人把收成送進倉庫。之後有空田時，點田上名牌就能自己選作物。",target:"fields",interactive:!1},{id:"workers",title:"你負責安排工作",body:"四位工人已分好工：種田、搬運、磨粉、賣貨。先別動，看看生產線怎麼跑。哪一環卡住，再點下方工人卡換工作。",target:"workers",interactive:!1},{id:"mill",title:"看第一袋麵粉完成",body:"倉庫的小麥會送進磨坊，2 份小麥磨成 1 袋麵粉。讓時間繼續，等工人完成一袋；沒有動靜時，檢查搬運和磨粉是否有人。",target:"mill",interactive:!0},{id:"sell",title:"把麵粉賣出去",body:"賣貨工人會自動把貨送到商店，交訂單或直接出售，不用自己點。等一筆貨款入帳；倉庫滿時，先確保有人賣貨。",target:"shop",interactive:!0},{id:"upgrade",title:"用收入改善農莊",body:"點升級選單：倉庫常滿就擴建倉庫，磨粉太慢就升級磨坊。選一項買得起的升級；錢不夠先繼續賣貨，也可以略過導覽。",target:"upgrades",interactive:!0},{id:"done",title:"開始經營你的小農莊",body:"留意哪個環節停住，再調整工人或升級。先維持種田、搬運、磨粉、賣貨，之後每天會開放新作物和工坊。",target:"farm",interactive:!1}],Rl=i=>({milled:i.stats.milled,sold:i.stats.sold,earned:i.stats.earned,upgrades:i.upgrades.field+i.upgrades.warehouse+i.upgrades.mill});function Ow(i){return{index:0,completed:!1,baseline:Rl(i)}}function jc(i){return xr[i.index]??xr[0]}function pf(i,e){if(i.completed)return!1;switch(jc(i).id){case"mill":return e.stats.milled>i.baseline.milled;case"sell":return e.stats.sold>i.baseline.sold&&e.stats.earned>i.baseline.earned;case"upgrade":return Rl(e).upgrades>i.baseline.upgrades;default:return!0}}function Bw(i,e){return pf(i,e)?i.index===xr.length-1?mf(i):{index:i.index+1,completed:!1,baseline:Rl(e)}:i}function mf(i){return{...i,completed:!0,baseline:{...i.baseline}}}const gf="farmproto.tour.v1",zw=[["🌾","種田"],["🧺","搬進倉庫"],["⚙️","磨成麵粉"],["🪙","賣掉賺錢"]],qc={mill:"⏳ 等第一袋麵粉磨好…（遊戲 2× 快轉中）",sell:"⏳ 等第一筆貨款入帳…",upgrade:"👉 點右下角 🔨升級，買一項升級"};function Hw(i){const e=["warehouse","mill","field"].filter(n=>wi(i,n).reason!=="No land"&&wi(i,n).reason!=="Max level");if(e.some(n=>wi(i,n).ok))return qc.upgrade;const t=Math.min(...e.map(n=>Ko(i,n)))-i.coins;return t>0?`💰 還差 🪙${t}：遊戲照跑，賣貨工人賣了貨就夠（也可以跳過導覽）`:qc.upgrade}const Ft=(i,e="",t="")=>{const n=document.createElement(i);return e&&(n.className=e),t&&(n.textContent=t),n};class Vw{constructor(e,t){B(this,"el",Ft("div","coach hidden"));B(this,"ring",Ft("div","coach-ring"));B(this,"bubble",Ft("div","coach-bubble"));B(this,"face",Ft("img","coach-face"));B(this,"title",Ft("b"));B(this,"body",Ft("p"));B(this,"flow",Ft("div","coach-flow"));B(this,"status",Ft("div","coach-status"));B(this,"dots",Ft("div","coach-dots"));B(this,"skipBtn",Ft("button","chip","跳過導覽"));B(this,"nextBtn",Ft("button","gold","下一步"));B(this,"tour",null);B(this,"queue",[]);B(this,"saying",null);B(this,"resumeSpeed",1);B(this,"shownIndex",-1);B(this,"ringKey","");B(this,"bubbleKey","");B(this,"bubbleH",230);this.host=e,this.face.src=t,this.face.alt="",this.face.draggable=!1;for(const[o,a]of zw){const c=Ft("span","step");c.append(Ft("i","",o),Ft("small","",a)),this.flow.append(c)}const n=Ft("div","coach-head"),s=Ft("div","coach-text");s.append(this.title,this.body),n.append(this.face,s);const r=Ft("div","coach-row");r.append(this.dots,this.skipBtn,this.nextBtn),this.bubble.append(n,this.flow,this.status,r),this.el.append(this.ring,this.bubble),this.nextBtn.onclick=()=>this.next(),this.skipBtn.onclick=()=>this.finish(!0)}get active(){return!!this.tour||!!this.saying}get stepId(){return this.tour?jc(this.tour).id:null}start(){this.saying=null,this.tour||(this.resumeSpeed=Math.max(1,this.host.speed())),this.tour=Ow(this.host.state()),this.shownIndex=-1,this.el.classList.remove("hidden")}say(e,t,n=null){this.queue.push({title:e,body:t,target:n}),this.active||this.nextSay()}nextSay(){const e=this.queue.shift();e&&(this.saying||(this.resumeSpeed=Math.max(1,this.host.speed())),this.saying=e,this.shownIndex=-1,this.el.classList.remove("hidden"))}next(){if(this.saying)return this.saying=null,this.queue.length?this.nextSay():this.close();if(!this.tour)return;const e=this.tour;this.tour=Bw(this.tour,this.host.state()),this.tour.completed?this.finish(!1):this.tour===e&&this.nextBtn.classList.add("nudge")}finish(e){if(this.tour&&(this.tour=mf(this.tour)),this.tour=null,this.host.onDone(e),this.queue.length)return this.nextSay();this.close()}close(){this.el.classList.add("hidden"),this.ringKey=this.bubbleKey="",this.host.setSpeed(this.resumeSpeed)}update(){if(!this.tour&&!this.saying)return;const e=this.host.state();let t,n=!1,s=!0;if(this.saying)t=this.saying.target,this.shownIndex!==0&&(this.shownIndex=0,this.show(this.saying.title,this.saying.body,!1),this.host.setSpeed(0),this.dots.textContent="",this.skipBtn.hidden=!0),this.nextBtn.textContent="知道了";else{const r=jc(this.tour);t=r.target==="farm"?null:r.target,n=r.interactive,s=pf(this.tour,e),this.shownIndex!==this.tour.index&&(this.shownIndex=this.tour.index,this.show(r.title,r.body,r.id==="welcome"),this.host.setSpeed(n?2:0),this.dots.textContent=`${this.tour.index+1}/${xr.length}`,this.skipBtn.hidden=!1,this.nextBtn.classList.remove("nudge"));const o=this.tour.index===xr.length-1,a=s?n?"做到了！下一步":o?"開始經營":"下一步":"還沒完成";this.nextBtn.textContent!==a&&(this.nextBtn.textContent=a),this.nextBtn.disabled===s&&(this.nextBtn.disabled=!s);const c=n?s?"✅ 完成了！":r.id==="upgrade"?Hw(e):qc[r.id]??"":"";this.status.textContent!==c&&(this.status.textContent=c),this.status.classList.toggle("done",n&&s)}this.el.classList.toggle("dim",!n),this.place(t?this.host.locate(t):null)}show(e,t,n){this.title.textContent=e,this.body.textContent=t,this.flow.hidden=!n,this.status.textContent="",this.status.classList.remove("done"),this.bubble.classList.remove("pop"),this.bubbleH=this.bubble.offsetHeight||this.bubbleH,this.bubble.classList.add("pop")}place(e){const t=window.innerHeight,n=8;let s="none";if(e){const c=Math.round(e.l-n),l=Math.round(e.t-n),h=Math.round(e.r-e.l+n*2),u=Math.round(e.b-e.t+n*2);if(s=`${c},${l},${h},${u},${e.round?1:0}`,s!==this.ringKey){const d=this.ring.style;d.transform=`translate(${c}px, ${l}px)`,d.width=`${h}px`,d.height=`${u}px`,d.borderRadius=e.round?"50%":"16px"}}s!==this.ringKey&&(this.ring.classList.toggle("none",!e),this.el.classList.toggle("nospot",!e),this.ringKey=s);const r=this.host.bottomReserve(),o=this.bubbleH;let a="center";if(e&&(e.b+n+10<=t-r-o?a=`above:${Math.round(r)}`:e.t-n-12-o>=8?a=`above:${Math.round(t-e.t+n+12)}`:a=`below:${Math.round(Math.min(t-o-8,e.b+n+12))}`),a!==this.bubbleKey){this.bubbleKey=a;const c=this.bubble.style,[l,h]=a.split(":");c.top=l==="below"?`${h}px`:l==="center"?"50%":"",c.bottom=l==="above"?`${h}px`:"",this.bubble.classList.toggle("center",l==="center")}}}const Fu=["harvest","mill","sack","rooster","hammer"],Ou=["amb-day","amb-evening","amb-rain","bgm-day","bgm-evening"],Gw={harvest:.35,mill:.5,sack:.3,coin:.12,click:.05,plant:.15,hammer:.4,rooster:20,oven:.5,jar:.5,pick:.4},Ww={harvest:.55,mill:.4,sack:.5,rooster:.32,hammer:.6},gs={music:.42,amb:.5,sfx:.9};class Xw{constructor(e,t,n="./"){B(this,"ctx",null);B(this,"master");B(this,"musicBus");B(this,"ambBus");B(this,"sfxBus");B(this,"verb");B(this,"buffers",new Map);B(this,"loops",new Map);B(this,"last",new Map);B(this,"scene",{evening:!1,rain:!1,paused:!1});B(this,"played",{});B(this,"loaded",0);this.musicOn=e,this.sfxOn=t,this.base=n;const s=()=>this.unlock();window.addEventListener("pointerdown",s,{capture:!0}),window.addEventListener("keydown",s,{capture:!0}),document.addEventListener("visibilitychange",()=>{this.ctx&&(document.hidden?this.ctx.suspend():this.ctx.resume())})}get music(){return this.musicOn}get sfx(){return this.sfxOn}get running(){var e;return((e=this.ctx)==null?void 0:e.state)==="running"}unlock(){if(this.ctx){this.ctx.state==="suspended"&&!document.hidden&&this.ctx.resume();return}const e=window.AudioContext??window.webkitAudioContext;if(!e)return;const t=new e;this.ctx=t,this.master=t.createGain(),this.master.connect(t.destination),this.musicBus=this.bus(this.musicOn?gs.music:0),this.ambBus=this.bus(this.sfxOn?gs.amb:0),this.sfxBus=this.bus(this.sfxOn?gs.sfx:0);const n=t.createConvolver();n.buffer=this.impulse(1.4),this.verb=t.createGain(),this.verb.gain.value=.22,this.verb.connect(n).connect(this.sfxBus),this.loadAll()}setMusic(e){this.musicOn=e,this.ctx&&this.fade(this.musicBus.gain,e?gs.music:0,.3)}setSfx(e){this.sfxOn=e,this.ctx&&(this.fade(this.ambBus.gain,e?gs.amb:0,.3),this.fade(this.sfxBus.gain,e?gs.sfx:0,.1))}setScene(e){const t=this.scene;t.evening===e.evening&&t.rain===e.rain&&t.paused===e.paused||(this.scene={...e},this.mix(4))}play(e,t={}){const n=this.ctx;if(!n||n.state!=="running"||!this.sfxOn)return;const s=n.currentTime,r=Gw[e]??0;if(!(s-(this.last.get(e)??-1e9)<r)){if(this.last.set(e,s),Fu.includes(e)){const o=this.buffers.get(e);if(!o)return;const a=n.createBufferSource();a.buffer=o,a.playbackRate.value=(t.pitch??1)*(.94+Math.random()*.12);const c=n.createGain();c.gain.value=Ww[e]*(t.gain??1)*(.85+Math.random()*.15),a.connect(c).connect(this.sfxBus),a.start(s)}else this.synth(e,s,t);this.played[e]=(this.played[e]??0)+1}}bus(e){const t=this.ctx.createGain();return t.gain.value=e,t.connect(this.master),t}fade(e,t,n){const s=this.ctx.currentTime;e.cancelScheduledValues(s),e.setValueAtTime(e.value,s),e.setTargetAtTime(t,s,n/3)}async loadAll(){for(const e of[...Fu,...Ou])try{const t=await fetch(`${this.base}audio/${e}.mp3`);if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await this.ctx.decodeAudioData(await t.arrayBuffer());this.buffers.set(e,n),this.loaded++,Ou.includes(e)&&this.startLoop(e,n)}catch(t){console.warn(`音檔 ${e} 載入失敗，略過`,t)}}startLoop(e,t){const n=this.ctx,s=n.createBufferSource();s.buffer=t,s.loop=!0;const r=t.getChannelData(0);let o=0,a=r.length-1;for(;o<8192&&Math.abs(r[o])<1e-4;)o++;for(;a>r.length-8192&&Math.abs(r[a])<1e-4;)a--;s.loopStart=o/t.sampleRate,s.loopEnd=(a+1)/t.sampleRate;const c=n.createGain();c.gain.value=0,s.connect(c).connect(e.startsWith("bgm")?this.musicBus:this.ambBus),s.start(),this.loops.set(e,{src:s,gain:c}),this.mix(e.startsWith("bgm")?2:1.5)}mix(e){if(!this.ctx)return;const{evening:t,rain:n,paused:s}=this.scene,r={"bgm-day":t?0:1,"bgm-evening":t?1:0,"amb-day":t?0:n?.25:1,"amb-evening":t?n?.3:1:0,"amb-rain":n?1:0},o=s?.35:1;for(const[a,c]of this.loops)this.fade(c.gain.gain,r[a]*(a.startsWith("bgm")?o:1),e)}impulse(e){const t=this.ctx,n=Math.floor(t.sampleRate*e),s=t.createBuffer(2,n,t.sampleRate);for(let r=0;r<2;r++){const o=s.getChannelData(r);for(let a=0;a<n;a++)o[a]=(Math.random()*2-1)*Math.pow(1-a/n,3.2)}return s}tone(e,t,n,s,r="sine",o=.5,a=0){const c=this.ctx,l=c.createOscillator();l.type=r,l.frequency.setValueAtTime(t,e),a&&l.frequency.exponentialRampToValueAtTime(a,e+n*.6);const h=c.createGain();if(h.gain.setValueAtTime(1e-4,e),h.gain.exponentialRampToValueAtTime(s,e+.006),h.gain.exponentialRampToValueAtTime(1e-4,e+n),l.connect(h),h.connect(this.sfxBus),o){const u=c.createGain();u.gain.value=o,h.connect(u).connect(this.verb)}l.start(e),l.stop(e+n+.05)}bell(e,t,n,s){this.tone(e,t,n,s),this.tone(e,t*2,n*.55,s*.35),this.tone(e,t*3.01,n*.3,s*.14),this.tone(e,t*4.2,n*.18,s*.07)}knock(e,t,n,s=.05){const r=this.ctx,o=Math.floor(r.sampleRate*s),a=r.createBuffer(1,o,r.sampleRate),c=a.getChannelData(0);for(let d=0;d<o;d++)c[d]=(Math.random()*2-1)*Math.pow(1-d/o,4);const l=r.createBufferSource();l.buffer=a;const h=r.createBiquadFilter();h.type="bandpass",h.frequency.value=t,h.Q.value=4;const u=r.createGain();u.gain.value=n,l.connect(h).connect(u).connect(this.sfxBus),l.start(e)}synth(e,t,n){const s=n.gain??1,r=o=>523.25*Math.pow(2,o/12);switch(e){case"coin":this.tone(t,r(16),.09,.16*s,"triangle",.2),this.bell(t+.055,r(23),.45,.13*s);break;case"order":[0,4,7,12].forEach((o,a)=>this.bell(t+a*.07,r(o+7),.7,.12*s));break;case"streak":{const o=Math.min(n.n??1,6);this.tone(t,r(12+o),.12,.1*s,"triangle",.3),this.tone(t+.08,r(19+o),.25,.1*s,"triangle",.4);break}case"goal":[[0,0],[4,.09],[7,.18],[12,.27],[16,.36]].forEach(([o,a])=>{this.tone(t+a,r(o),.35,.14*s,"sine",.35),this.knock(t+a,r(o)*2,.06*s,.03)}),this.bell(t+.45,r(24),1,.08*s);break;case"upgrade":this.tone(t,r(0),.35,.09*s,"triangle",.3,r(12)),this.bell(t+.2,r(19),.8,.12*s),this.bell(t+.2,r(24),.8,.07*s);break;case"result":{[[0,4,7],[5,9,12],[7,11,14],[12,16,19]].forEach((c,l)=>c.forEach(h=>this.tone(t+l*.28,r(h-12),.9,.06*s,"triangle",.5)));const a=n.n??3;for(let c=0;c<a;c++)this.bell(t+1.25+c*.32,r(19+c*5),1.1,.13*s);break}case"click":this.knock(t,2400,.25*s,.025);break;case"plant":this.tone(t,260,.14,.18*s,"sine",.1,520),this.knock(t,900,.12*s,.04);break;case"oven":this.knock(t,700,.18*s,.06),this.bell(t+.04,r(16),.9,.14*s);break;case"jar":this.tone(t,2637,.25,.08*s,"sine",.3),this.tone(t+.07,3136,.3,.06*s,"sine",.3),this.knock(t,3200,.1*s,.02);break;case"pick":this.tone(t,420,.1,.16*s,"sine",.1,840),this.tone(t+.11,520,.1,.14*s,"sine",.1,1040);break;case"unlock":[0,2,4,7,9,12].forEach((o,a)=>this.tone(t+a*.06,r(o+12),.25,.08*s,"triangle",.4)),this.bell(t+.4,r(24),1.2,.12*s);break;case"heart":[0,4,7,11,14].forEach((o,a)=>this.tone(t+a*.08,r(o+5),.4,.09*s,"sine",.5)),this.bell(t+.45,r(19),1.1,.12*s),this.bell(t+.62,r(24),1.2,.08*s);break;case"greet":this.tone(t,r(7),.18,.1*s,"sine",.3,r(12)),this.tone(t+.22,r(12),.28,.1*s,"sine",.4,r(9));break;case"commission":[0,5,9].forEach((o,a)=>this.bell(t+a*.09,r(o+5),.8,.11*s));break;case"fail":this.tone(t,r(-8),.14,.1*s,"triangle",.1),this.tone(t+.12,r(-12),.22,.1*s,"triangle",.1);break}}}const $w=i=>({harvested:i.stats.harvested,milled:i.stats.milled,sold:i.stats.sold,earned:i.stats.earned,ordersCompleted:i.daily.ordersCompleted,streak:i.streak,claimed:i.daily.claimed.length,dailyDay:i.daily.day,upgrades:i.upgrades.field+i.upgrades.warehouse+i.upgrades.mill,day:i.day,result:!!i.result,cargo:i.workers.map(e=>e.job==="haul"?e.cargo:0),bread:i.produced.bread,jam:i.produced.jam,apple:i.produced.apple,commissions:i.villagers.reduce((e,t)=>e+t.completed,0)});class jw{constructor(e){B(this,"prev",null);this.engine=e}reset(){this.prev=null}update(e,t){var c;this.engine.setScene({evening:e.phase==="evening",rain:t==="rain",paused:e.paused});const n=$w(e),s=this.prev;if(this.prev=n,!s)return;const r=this.engine;n.apple>s.apple?r.play("pick"):n.harvested>s.harvested&&r.play("harvest"),n.bread>s.bread&&r.play("oven"),n.jam>s.jam&&r.play("jar"),n.cargo.some((l,h)=>l<(s.cargo[h]??0))&&r.play("sack"),n.milled>s.milled&&r.play("mill");const o=n.dailyDay===s.dailyDay;o&&n.ordersCompleted>s.ordersCompleted?(r.play("order"),n.streak>=2&&r.play("streak",{n:n.streak})):n.earned>s.earned&&n.sold>s.sold&&r.play("coin"),n.commissions>s.commissions&&r.play("commission"),o&&n.claimed>s.claimed&&r.play("goal"),n.upgrades>s.upgrades&&(r.play("hammer"),r.play("upgrade")),n.result&&!s.result?r.play("result",{n:((c=e.result)==null?void 0:c.stars)??1}):n.day>s.day&&r.play("rooster")}}const Pl="farmproto.save.v1",Yc="farmproto.newMode",vf="farmproto.quality",_f="farmproto.outline.v2",xf="farmproto.music",yf="farmproto.sfx",Ot=Py,jt=new URLSearchParams(location.search),qw=Object.assign({"./art/index.ts":Ry});var Vu;const Bu=(Vu=qw["./art/index.ts"])==null?void 0:Vu.buildWorld;function Yw(){const i=jt.get("q")??st.get(vf);return i==="high"||i==="low"?i:matchMedia("(pointer: coarse)").matches&&Math.min(screen.width,screen.height)<820?"low":"high"}const zu=i=>i==="challenge"||i==="endless"?i:null;function Kw(){const i=zu(st.get(Yc));st.remove(Yc);const e=i??zu(jt.get("mode")),t=()=>(st.remove(ko),st.remove(Fo),st.remove(Oo),Fy(e??"challenge"));if(jt.has("fresh")||i)return t();const n=st.get(Pl);if(!n)return t();try{const s=Hy(n);return e&&s.mode!==e?t():s}catch(s){return console.warn("存檔讀不到，開新局",s),t()}}function Jw(i){if(Bu&&jt.get("art")!=="placeholder")try{return{world:Bu(Ot,{quality:i}),source:"art"}}catch(e){console.warn("src/art 建場景失敗，改用備用場景",e)}return{world:fw(Ot,{quality:i}),source:"placeholder"}}const Zo=Yw(),wf=(jt.get("outline")??st.get(_f)??"1")==="1";let We=Kw(),Vi=1;const Kc={music:st.get(xf)!=="0",sfx:st.get(yf)!=="0"},qt=new Xw(Kc.music,Kc.sfx),Zw=new jw(qt),Mf=document.getElementById("view"),wt=new ow(Mf,Ot,Zo,wf),{world:bf,source:Qw}=Jw(Zo),Ll=bw(bf,()=>{Gu(()=>import("./vrmCrew-Cy4opykY.js"),[],import.meta.url).then(i=>i.disposeVrmWorkers())}),en=Ll.world;wt.scene.add(en.root);wt.occluders=en.root;const Fn=new vw(en,Ot,wt.scene),qi=new ww(bf,Ot,wt.scene);wt.characters=()=>[...Fn.workers.map(i=>i.vis.object),...qi.objects];const eM=jt.get("crew")!=="box",Bo=eM?Gu(()=>import("./vrmCrew-Cy4opykY.js"),[],import.meta.url):null;let Jc=0,Sf=!1;async function tM(i){try{const e=await(await Bo).loadVrmWorker(i);e&&Ll.provide(i,e)}catch(e){console.warn(`工人 ${i} 的 VRoid 模型載入失敗，繼續用方塊版`,e)}}function Ef(){const i=[];for(;Bo&&Jc<We.workers.length;)i.push(tM(Jc++));return Promise.all(i).then(()=>{})}Bo&&Bo.then(async i=>{Sf=!0,await Ef(),await Promise.all(Er.map(async(e,t)=>{try{const n=await i.loadVrmVillager(e,t);n&&qi.provide(e,n)}catch(n){console.warn(`村民 ${e} 的 VRoid 模型載入失敗，繼續用備用外觀`,n)}}))});let Tf=!1;function Tr(){Tf||st.set(Pl,zy(We))}function Ss(i){if(i.type==="upgrade"&&i.target==="field"&&We.fields.length>=Ot.fieldSlots.length)return ft.toast("地圖上沒有空地可以開田了"),qt.play("fail"),!1;const e=Zd(We,i),t=i.type==="upgradeHousing"||i.type==="recruitWorker";return e.ok?(Tr(),i.type==="plant"?qt.play("plant"):t&&qt.play("unlock")):(ft.toast(t?ft.housingReason(e.reason):ft.reason(e.reason),2200,!0),qt.play("fail")),e.ok}const ft=new Fw(document.getElementById("hud"),{onAction:Ss,onSpeed:i=>{Vi=i,Zd(We,{type:"pause",paused:i===0})},onQuality:i=>{st.set(vf,i),Tr(),location.reload()},onFollow:i=>{wt.follow(()=>Fn.workerPosition(i)),ft.setFocus(i)},onUnfollow:()=>wt.unfollow(),onOutline:i=>{st.set(_f,i?"1":"0"),wt.setOutline(i)},onSound:(i,e)=>{st.set(i==="music"?xf:yf,e?"1":"0"),i==="music"?qt.setMusic(e):qt.setSfx(e)},onCrop:(i,e)=>{const t=We.fields[i];t&&(!t.planted&&!t.harvested?Ss({type:"plant",fieldId:i,crop:e}):Ss({type:"setNextCrop",fieldId:i,crop:e})&&ft.toast(`這塊田收成後改種${Qt[e]}`))},onUnlock:()=>qt.play("unlock"),onTour:()=>ti.start(),explain:(i,e,t)=>Af?(ti.say(i,e,t),!0):!1,onVillagerEvent:i=>qt.play(i),onRestart:i=>{if(Tf=!0,st.remove(Pl),st.remove(ko),st.remove(Fo),st.remove(Oo),st.set(Yc,i??We.mode),jt.has("mode")||jt.has("fresh")){jt.delete("mode"),jt.delete("fresh");const e=jt.toString();location.replace(`${location.pathname}${e?`?${e}`:""}${location.hash}`)}else location.reload()}},Zo,wf,{...Kc});document.getElementById("hud").addEventListener("click",i=>{i.target.closest("button")&&qt.play("click")});We.paused&&(Vi=0,ft.speed=0);wt.onUnfollow=()=>ft.setFocus(-1);const Af=jt.get("tour")==="1"||jt.get("tour")!=="0"&&!navigator.webdriver,ti=new Vw({state:()=>We,locate:i=>nM(i),setSpeed:i=>ft.setSpeed(i),speed:()=>ft.speed,onDone:()=>st.set(gf,"1"),bottomReserve:()=>{const i=ft.rectOf("crew");return i?window.innerHeight-i.top+12:80}},Xc("lin","head"));document.getElementById("hud").append(ti.el);Af&&(jt.get("tour")==="1"||!st.get(gf))&&ti.start();const Hu=i=>i?{l:i.left,t:i.top,r:i.right,b:i.bottom}:null;function Js(i,e,t,n){if(!wt.project(Gi.set(i,e,t),Yt))return null;const s=Yt.x,r=Yt.y;wt.project(Gi.set(i+n,e,t),Yt);const o=Math.max(36,Math.abs(Yt.x-s));return{l:s-o,t:r-o,r:s+o,b:r+o,round:!0}}function nM(i){const e=Ot.buildings;switch(i){case"workers":return Hu(ft.rectOf("crew"));case"upgrades":return Hu(ft.rectOf("upgrade"));case"mill":return Js(e.mill.pos[0],3,e.mill.pos[1],4.5);case"shop":return Js(e.shop.pos[0],2.5,e.shop.pos[1],4.5);case"bakery":case"preservery":return Js(e[i].pos[0],2.5,e[i].pos[1],3.5);case"tree":return Js(Ot.orchardSlots[0][0],2,Ot.orchardSlots[0][1],3);case"fields":{let t=1/0,n=1/0,s=-1/0,r=-1/0;const[o,a]=Ot.fieldSize;for(const[c,l]of Ot.fieldSlots.slice(0,We.fields.length))for(const[h,u]of[[-1,-1],[1,-1],[-1,1],[1,1]])wt.project(Gi.set(c+h*o/2,0,l+u*a/2),Yt)&&(t=Math.min(t,Yt.x),s=Math.max(s,Yt.x),n=Math.min(n,Yt.y),r=Math.max(r,Yt.y));return t<s?{l:t,t:n,r:s,b:r}:null}default:if(i.startsWith("villager:")){const t=qi.position(i.slice(9));return t?Js(t.x,1.2,t.z,1.4):null}return null}}const vs=(i,e,t)=>new D(i,e,t),In=Ot.buildings,yr=[{tag:ft.tag("building"),pos:vs(In.warehouse.pos[0],7.2,In.warehouse.pos[1]),text:()=>{const i=Zi(We),e=ii(We);return _r(We)?`🏠 倉庫滿了 ${i}/${e}`:`🏠 倉庫 ${i}/${e}`}},{tag:ft.tag("building"),pos:vs(In.mill.pos[0],9.5,In.mill.pos[1]),text:()=>`⚙️ 磨坊${We.upgrades.mill?` Lv${We.upgrades.mill+1}`:""}`},{tag:ft.tag("building"),pos:vs(In.shop.pos[0],8,In.shop.pos[1]),text:()=>"🪙 商店"},...["bakery","preservery"].map(i=>({tag:ft.tag("building"),pos:vs(In[i].pos[0],5.2,In[i].pos[1]),dodge:!0,text:()=>{const e=i==="bakery"?"🍞 麵包坊":"🍯 果醬坊",t=We.processors[i];if(t.batch)return`${e} ${Math.round(Math.min(1,t.progress01+We.remainder/bi[i].seconds)*100)}%`;if(t.waiting==="Locked")return`🔒${i==="bakery"?"🍞":"🍯"} ${lf(We,i)}`;const n=df(We,i);return n?`${e} · ${n}`:e}})),{tag:ft.tag("building house"),pos:vs(In.farmhouse.pos[0],6.4,In.farmhouse.pos[1]),dodge:!0,show:()=>vr(We),text:()=>`🏡 宿舍 ${We.workers.length}/${Un(We)}`}];yr[yr.length-1].tag.el.addEventListener("click",()=>ft.openHousing());const tr=ft.tag("tree");tr.el.addEventListener("click",()=>Ss({type:"plantTree",treeId:0}));const iM=vs(Ot.orchardSlots[0][0],4.2,Ot.orchardSlots[0][1]);function sM(){const i=We.trees[0];return!i||!Pt(We).orchard?`🔒🍎 ${lf(We,"orchard")}`:i.planted?i.harvested>0?`待搬 🍎${i.harvested}`:i.ripe?"🍎 可採收":`🍎 ${i.batches?"結果中":"長大中"} ${Math.round(i.progress01*100)}%`:"🍎 蘋果樹 · 點我種"}const nr=[],xi=[];function Cf(){const i=xi.length,e=ft.tag("worker");e.el.addEventListener("click",()=>{wt.follow(()=>Fn.workerPosition(i)),ft.setFocus(i)}),xi.push(e)}for(;xi.length<We.workers.length;)Cf();const Rf=new Map(Er.map(i=>{const e=ft.tag("villager");return e.el.addEventListener("click",()=>ft.openVillager(i)),[i,e]})),Yt={x:0,y:0},Gi=new D,_o=[];let ys=0;function rM(i,e,t,n){for(let s=0;s<ys;s++){const r=_o[s];if(i<r.r&&e>r.l&&t<r.b&&n>r.t)return r}return null}function Zs(i,e,t=!1){if(!wt.project(e,Yt)){i.el.classList.add("off");return}i.el.classList.remove("off");const{w:n,h:s}=i.size(),r=Yt.x,o=n/2;let a=Yt.y;for(let l=0;t&&l<4;l++){const h=rM(r-o,r+o,a-s,a);if(!h)break;const u=h.b+s+2,d=h.t-2;a=Math.abs(u-a)<Math.abs(d-a)?u:d}const c=_o[ys]??(_o[ys]={l:0,r:0,t:0,b:0});ys++,c.l=r-o,c.r=r+o,c.t=a-s,c.b=a,i.el.style.transform=`translate(${r.toFixed(1)}px, ${a.toFixed(1)}px) translate(-50%, -100%)`}function oM(){var e;ys=0;for(const t of yr){if(t.show&&!t.show()){t.tag.el.classList.add("off");continue}t.tag.set(t.text()),Zs(t.tag,t.pos,t.dodge)}for(yr[0].tag.el.classList.toggle("warn",_r(We)),tr.set(sM()),tr.el.classList.toggle("empty",Pt(We).orchard&&!((e=We.trees[0])!=null&&e.planted)),tr.el.classList.toggle("ready",!!We.trees[0]&&(We.trees[0].ripe||We.trees[0].harvested>0)),Zs(tr,iM,!0);nr.length<Math.min(We.fields.length,Ot.fieldSlots.length);){const t=nr.length,n=ft.tag("field");n.el.addEventListener("click",()=>{const s=n.el.getBoundingClientRect();Pf(t,(s.left+s.right)/2,s.top)}),nr.push(n)}const i=Pt(We).crops.length>1;nr.forEach((t,n)=>{const s=We.fields[n],[r,o]=Ot.fieldSlots[n],a=s.planted&&s.growth>=hn[s.crop].seconds,c=Qt[s.crop],l=s.nextCrop!==s.crop?` →${Qt[s.nextCrop]}`:"";t.el.classList.toggle("ready",a||s.harvested>0),t.el.classList.toggle("empty",!s.planted&&!s.harvested),t.el.classList.toggle("pick",i);const h=s.planted&&!a&&!s.harvested;if(t.el.classList.toggle("grow",h),h){const u=String(Math.round(s.growth/hn[s.crop].seconds*20)/20);t.el.style.getPropertyValue("--p")!==u&&t.el.style.setProperty("--p",u)}t.set(s.harvested>0?`${c}×${s.harvested}${l}`:s.planted?a?`${c}✓${l}`:`${c}${l}`:"＋ 種田"),Zs(t,Gi.set(r,1.2,o-Ot.fieldSize[1]/2),!0)});for(const t of We.villagers){const n=Rf.get(t.id),s=qi.position(t.id);if(!s){n.el.classList.add("off");continue}const r=$c(t.points);n.set(`${t.commission?"📜":""}${gn[t.id].name}${r?` ♥${r}`:""}`),n.el.classList.toggle("ask",!!t.commission),Zs(n,Gi.set(s.x,2.3,s.z),!0)}for(;xi.length<We.workers.length;)Cf();We.workers.forEach((t,n)=>{const s=Fn.workerPosition(n);if(!s)return;const r=ff(We,t);xi[n].set(`${t.name}${r.warn?" ⚠️":""}`),xi[n].el.classList.toggle("warn",r.warn),Zs(xi[n],Gi.set(s.x,2.4,s.z),!0)})}function Pf(i,e,t){const n=We.fields[i];n&&(Pt(We).crops.length>1?ft.cropPickerFor===i?ft.closeCropPicker():ft.openCropPicker(i,e,t,We):!n.planted&&!n.harvested&&Ss({type:"plant",fieldId:i}))}Mf.addEventListener("click",i=>{if(wt.wasDrag())return;const t=wt.raycaster(i.clientX,i.clientY).intersectObjects(Fn.fields.map(s=>s.object),!0)[0];if(!t)return;const n=Fn.fields.findIndex(s=>{let r=t.object;for(;r;){if(r===s.object)return!0;r=r.parent}return!1});n>=0&&Pf(n,i.clientX,i.clientY)});document.addEventListener("visibilitychange",()=>{document.hidden&&Tr()});window.addEventListener("pagehide",Tr);setInterval(Tr,5e3);const aM=["sunny","rain","drought"],cM=aM.find(i=>i===jt.get("weather"))??null,lM=i=>cM??i.weather??"sunny",hM=new Od;let Lf=0,xo=-1;function If(){var n,s,r,o;const i=Math.min(.1,hM.getDelta());Vi>0&&Qd(We,i*Vi),Sf&&Jc<We.workers.length&&Ef(),xo!==We.housingLevel&&(xo=We.housingLevel,(n=en.setHousing)==null||n.call(en,xo)),Fn.sync(We,i*Vi),qi.sync(We,i*Vi),en.setStockItems?en.setStockItems(We.inventory,ii(We)):(s=en.setStock)==null||s.call(en,We.inventory.wheat,We.inventory.flour,ii(We));const e=(We.time%nt.daySeconds+We.remainder)/nt.daySeconds,t=lM(We);(r=en.update)==null||r.call(en,i,{phase:We.phase,time01:e,weather:t}),wt.setWeather(t),wt.setDayTime(e),wt.update(i),wt.render(),ft.quiet=ti.active,ft.update(We,t),ti.update(),Zw.update(We,t),oM(),++Lf===2&&((o=document.getElementById("boot"))==null||o.classList.add("done")),requestAnimationFrame(If)}requestAnimationFrame(If);window.__farm={get state(){return We},get frames(){return Lf},get workerPos(){return Fn.workers.map(i=>[i.pos.x,i.pos.z])},artSource:Qw,quality:Zo,get outline(){return wt.outline},get crewReady(){return Ll.ready},get mode(){return We.mode},get housingShown(){return xo},get following(){return wt.following},get cameraDistance(){return wt.cameraDistance},get rainAmount(){return wt.rainAmount},outlineCrease:i=>wt.setOutlineCrease(i),audio:{get running(){return qt.running},get loaded(){return qt.loaded},get played(){return{...qt.played}},get music(){return qt.music},get sfx(){return qt.sfx}},act:Ss,get tour(){return ti.stepId},get coachOpen(){return ti.active},startTour:()=>ti.start(),setSpeed:i=>{Vi=i},zoom:(i,e,t)=>{wt.zoomTo(i),e!==void 0&&t!==void 0&&wt.lookAt(e,t)},advance:i=>{Qd(We,i)},get villagersReady(){return qi.ready},villagerPos:i=>{const e=qi.position(i);return e?[e.x,e.z]:null},get m8Visuals(){return{trees:Fn.trees.length,processors:Fn.processors.length}},project:(i,e,t)=>wt.project(Gi.set(i,e,t),Yt)?{...Yt}:null,tagSizeDrift:()=>Math.max(0,...[...yr.map(i=>i.tag),...nr,...xi,...Rf.values()].filter(i=>!i.el.classList.contains("off")).map(i=>Math.abs(i.size().w-i.el.offsetWidth)))};export{K_ as $,vM as A,rn as B,Ue as C,Jx as D,S as E,MM as F,Q_ as G,Cd as H,Sn as I,_M as J,xM as K,br as L,yM as M,Rr as N,Et as O,Yx as P,Yi as Q,oc as R,ln as S,dM as T,me as U,Ce as V,tn as W,dt as X,ul as Y,Td as Z,wM as _,pM as a,yo as a0,Uc as a1,Sd as a2,Wt as a3,To as a4,Eo as a5,jo as a6,it as a7,Mi as a8,$o as a9,Si as aa,si as ab,sn as ac,Pn as ad,Xx as ae,Gt as af,ad as ag,ur as ah,Oe as ai,Qe as aj,mM as ak,AM as al,CM as am,Zc as an,yt as ao,mt as ap,le as aq,Se as ar,fM as b,EM as c,Ds as d,SM as e,et as f,D as g,qh as h,bM as i,TM as j,gM as k,zi as l,ea as m,hp as n,Nn as o,Kt as p,ac as q,Bi as r,ex as s,Ki as t,Ad as u,ct as v,Kn as w,Vo as x,xt as y,Bt as z};
