var ip=Object.defineProperty;var sp=(i,e,t)=>e in i?ip(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var F=(i,e,t)=>sp(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const rp="modulepreload",op=function(i,e){return new URL(i,e).href},rh={},hd=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let o=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(t.map(h=>{if(h=op(h,n),h in rh)return;rh[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!n)for(let v=a.length-1;v>=0;v--){const m=a[v];if(m.href===h&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":rp,u||(g.as="script"),g.crossOrigin="",g.href=h,l&&g.setAttribute("nonce",l),document.head.appendChild(g),u)return new Promise((v,m)=>{g.addEventListener("load",v),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pl="170",ap=0,oh=1,cp=2,ml=1,cc=2,ni=3,Ci=0,cn=1,si=2,ai=0,Ps=1,lc=2,ah=3,ch=4,lp=5,Gi=100,hp=101,up=102,dp=103,fp=104,pp=200,mp=201,gp=202,vp=203,hc=204,uc=205,_p=206,xp=207,wp=208,yp=209,Mp=210,bp=211,Sp=212,Ep=213,Tp=214,dc=0,fc=1,pc=2,Ds=3,mc=4,gc=5,vc=6,_c=7,ud=0,Ap=1,Cp=2,Ti=0,dd=1,fd=2,pd=3,gl=4,Rp=5,md=6,gd=7,lh="attached",Pp="detached",vd=300,ks=301,Us=302,xc=303,wc=304,Qo=306,yc=1e3,Xi=1001,Mc=1002,en=1003,Lp=1004,Fr=1005,Hn=1006,fa=1007,ji=1008,hi=1009,_d=1010,xd=1011,_r=1012,vl=1013,Zi=1014,kn=1015,Vn=1016,_l=1017,xl=1018,Ns=1020,wd=35902,yd=1021,Md=1022,wn=1023,bd=1024,Sd=1025,Ls=1026,Fs=1027,wl=1028,yl=1029,Ed=1030,Ml=1031,bl=1033,bo=33776,So=33777,Eo=33778,To=33779,bc=35840,Sc=35841,Ec=35842,Tc=35843,Ac=36196,Cc=37492,Rc=37496,Pc=37808,Lc=37809,Ic=37810,Dc=37811,kc=37812,Uc=37813,Nc=37814,Fc=37815,Oc=37816,Bc=37817,zc=37818,Hc=37819,Vc=37820,Gc=37821,Ao=36492,Wc=36494,$c=36495,Td=36283,Xc=36284,jc=36285,qc=36286,Do=2300,Yc=2301,pa=2302,hh=2400,uh=2401,dh=2402,Ip=2500,K1=0,J1=1,Z1=2,Dp=3200,Ad=3201,Cd=0,kp=1,Mi="",pn="srgb",Gs="srgb-linear",ea="linear",yt="srgb",ls=7680,fh=519,Up=512,Np=513,Fp=514,Rd=515,Op=516,Bp=517,zp=518,Hp=519,Kc=35044,Q1=35048,ph="300 es",oi=2e3,ko=2001;class Ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mh=1234567;const dr=Math.PI/180,Os=180/Math.PI;function Mn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Nt(i,e,t){return Math.max(e,Math.min(t,i))}function Sl(i,e){return(i%e+e)%e}function Vp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Gp(i,e,t){return i!==e?(t-i)/(e-i):0}function fr(i,e,t){return(1-t)*i+t*e}function Wp(i,e,t,n){return fr(i,e,1-Math.exp(-t*n))}function $p(i,e=1){return e-Math.abs(Sl(i,e*2)-e)}function Xp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function jp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function qp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Yp(i,e){return i+Math.random()*(e-i)}function Kp(i){return i*(.5-Math.random())}function Jp(i){i!==void 0&&(mh=i);let e=mh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zp(i){return i*dr}function Qp(i){return i*Os}function em(i){return(i&i-1)===0&&i!==0}function tm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function im(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const st={DEG2RAD:dr,RAD2DEG:Os,generateUUID:Mn,clamp:Nt,euclideanModulo:Sl,mapLinear:Vp,inverseLerp:Gp,lerp:fr,damp:Wp,pingpong:$p,smoothstep:Xp,smootherstep:jp,randInt:qp,randFloat:Yp,randFloatSpread:Kp,seededRandom:Jp,degToRad:Zp,radToDeg:Qp,isPowerOfTwo:em,ceilPowerOfTwo:tm,floorPowerOfTwo:nm,setQuaternionFromProperEuler:im,normalize:Mt,denormalize:In};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,s,r,o,a,c,l){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],x=s[4],_=s[7],I=s[2],E=s[5],T=s[8];return r[0]=o*v+a*y+c*I,r[3]=o*m+a*x+c*E,r[6]=o*p+a*_+c*T,r[1]=l*v+h*y+u*I,r[4]=l*m+h*x+u*E,r[7]=l*p+h*_+u*T,r[2]=d*v+f*y+g*I,r[5]=d*m+f*x+g*E,r[8]=d*p+f*_+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new tt;function Pd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sm(){const i=xr("canvas");return i.style.display="block",i}const gh={};function cr(i){i in gh||(gh[i]=!0,console.warn(i))}function rm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function om(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function am(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const at={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===yt&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===yt&&(i.r=Is(i.r),i.g=Is(i.g),i.b=Is(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mi?ea:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const vh=[.64,.33,.3,.6,.15,.06],_h=[.2126,.7152,.0722],xh=[.3127,.329],wh=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yh=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);at.define({[Gs]:{primaries:vh,whitePoint:xh,transfer:ea,toXYZ:wh,fromXYZ:yh,luminanceCoefficients:_h,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:vh,whitePoint:xh,transfer:yt,toXYZ:wh,fromXYZ:yh,luminanceCoefficients:_h,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}});let hs;class cm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hs===void 0&&(hs=xr("canvas")),hs.width=e.width,hs.height=e.height;const n=hs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lm=0;class Ld{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ga(s[o].image)):r.push(ga(s[o]))}else r=ga(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hm=0;class qt extends Ws{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=Xi,s=Xi,r=Hn,o=ji,a=wn,c=hi,l=qt.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Mn(),this.name="",this.source=new Ld(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yc:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yc:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=vd;qt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,s=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,_=(f+1)/2,I=(p+1)/2,E=(h+d)/4,T=(u+v)/4,R=(g+m)/4;return x>_&&x>I?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=T/n):_>I?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=R/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=T/r,s=R/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class um extends Ws{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new qt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ld(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends um{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Id extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dm extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const I=Math.sqrt(x),E=Math.atan2(I,p*y);m=Math.sin(m*E)/I,a=Math.sin(a*E)/I}const _=a*y;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+v*_,m===1-a){const I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new k,Mh=new ss;class Ri{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)),Or.applyMatrix4(e.matrixWorld),this.union(Or)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),Br.subVectors(this.max,Js),us.subVectors(e.a,Js),ds.subVectors(e.b,Js),fs.subVectors(e.c,Js),pi.subVectors(ds,us),mi.subVectors(fs,ds),Li.subVectors(us,fs);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Li.z,Li.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Li.z,0,-Li.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Li.y,Li.x,0];return!_a(t,us,ds,fs,Br)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,us,ds,fs,Br))?!1:(zr.crossVectors(pi,mi),t=[zr.x,zr.y,zr.z],_a(t,us,ds,fs,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new k,new k,new k,new k,new k,new k,new k,new k],Cn=new k,Or=new Ri,us=new k,ds=new k,fs=new k,pi=new k,mi=new k,Li=new k,Js=new k,Br=new k,zr=new k,Ii=new k;function _a(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ii.fromArray(i,r);const a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),c=e.dot(Ii),l=t.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const fm=new Ri,Zs=new k,xa=new k;class ui{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(xa)),this.expandByPoint(Zs.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new k,wa=new k,Hr=new k,gi=new k,ya=new k,Vr=new k,Ma=new k;class Rr{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){wa.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(wa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Hr),a=gi.dot(this.direction),c=-gi.dot(Hr),l=gi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wa).addScaledVector(Hr,d),f}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,s,r){ya.subVectors(t,e),Vr.subVectors(n,e),Ma.crossVectors(ya,Vr);let o=this.direction.dot(Ma),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);const c=a*this.direction.dot(Vr.crossVectors(gi,Vr));if(c<0)return null;const l=a*this.direction.dot(ya.cross(gi));if(l<0||c+l>o)return null;const h=-a*gi.dot(Ma);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ps.setFromMatrixColumn(e,0).length(),r=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pm,e,mm)}lookAt(e,t,n){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),vi.crossVectors(n,dn),vi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),vi.crossVectors(n,dn)),vi.normalize(),Gr.crossVectors(dn,vi),s[0]=vi.x,s[4]=Gr.x,s[8]=dn.x,s[1]=vi.y,s[5]=Gr.y,s[9]=dn.y,s[2]=vi.z,s[6]=Gr.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],x=n[7],_=n[11],I=n[15],E=s[0],T=s[4],R=s[8],M=s[12],w=s[1],L=s[5],B=s[9],O=s[13],N=s[2],V=s[6],z=s[10],q=s[14],G=s[3],oe=s[7],ue=s[11],ge=s[15];return r[0]=o*E+a*w+c*N+l*G,r[4]=o*T+a*L+c*V+l*oe,r[8]=o*R+a*B+c*z+l*ue,r[12]=o*M+a*O+c*q+l*ge,r[1]=h*E+u*w+d*N+f*G,r[5]=h*T+u*L+d*V+f*oe,r[9]=h*R+u*B+d*z+f*ue,r[13]=h*M+u*O+d*q+f*ge,r[2]=g*E+v*w+m*N+p*G,r[6]=g*T+v*L+m*V+p*oe,r[10]=g*R+v*B+m*z+p*ue,r[14]=g*M+v*O+m*q+p*ge,r[3]=y*E+x*w+_*N+I*G,r[7]=y*T+x*L+_*V+I*oe,r[11]=y*R+x*B+_*z+I*ue,r[15]=y*M+x*O+_*q+I*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+v*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=u*m*l-v*d*l+v*c*f-a*m*f-u*c*p+a*d*p,x=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,_=h*v*l-g*u*l+g*a*f-o*v*f-h*a*p+o*u*p,I=g*u*c-h*v*c-g*a*d+o*v*d+h*a*m-o*u*m,E=t*y+n*x+s*_+r*I;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=y*T,e[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*T,e[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*p+n*c*p)*T,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*T,e[4]=x*T,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*T,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*T,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*T,e[8]=_*T,e[9]=(g*u*r-h*v*r-g*n*f+t*v*f+h*n*p-t*u*p)*T,e[10]=(o*v*r-g*a*r+g*n*l-t*v*l-o*n*p+t*a*p)*T,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*T,e[12]=I*T,e[13]=(h*v*s-g*u*s+g*n*d-t*v*d-h*n*m+t*u*m)*T,e[14]=(g*a*s-o*v*s-g*n*c+t*v*c+o*n*m-t*a*m)*T,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,y=c*l,x=c*h,_=c*u,I=n.x,E=n.y,T=n.z;return s[0]=(1-(v+p))*I,s[1]=(f+_)*I,s[2]=(g-x)*I,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(d+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+x)*T,s[9]=(m-y)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ps.set(s[0],s[1],s[2]).length();const o=ps.set(s[4],s[5],s[6]).length(),a=ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Rn.copy(this);const l=1/r,h=1/o,u=1/a;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,t.setFromRotationMatrix(Rn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=oi){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===oi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ko)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=oi){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,f=(n+s)*h;let g,v;if(a===oi)g=(o+r)*u,v=-2*u;else if(a===ko)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ps=new k,Rn=new nt,pm=new k(0,0,0),mm=new k(1,1,1),vi=new k,Gr=new k,dn=new k,bh=new nt,Sh=new ss;class Fn{constructor(e=0,t=0,n=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class El{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gm=0;const Eh=new k,ms=new ss,Zn=new nt,Wr=new k,Qs=new k,vm=new k,_m=new ss,Th=new k(1,0,0),Ah=new k(0,1,0),Ch=new k(0,0,1),Rh={type:"added"},xm={type:"removed"},gs={type:"childadded",child:null},ba={type:"childremoved",child:null};class It extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new k,t=new Fn,n=new ss,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new tt}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Th,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,t){return Eh.copy(e).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Th,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Qs,Wr,this.up):Zn.lookAt(Wr,Qs,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(Zn),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rh),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xm),ba.child=e,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rh),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,_m,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}It.DEFAULT_UP=new k(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new k,Qn=new k,Sa=new k,ei=new k,vs=new k,_s=new k,Ph=new k,Ea=new k,Ta=new k,Aa=new k,Ca=new vt,Ra=new vt,Pa=new vt;class Dn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),Qn.subVectors(n,t),Sa.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(Qn),c=Pn.dot(Sa),l=Qn.dot(Qn),h=Qn.dot(Sa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(a,ei.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ca.setScalar(0),Ra.setScalar(0),Pa.setScalar(0),Ca.fromBufferAttribute(e,t),Ra.fromBufferAttribute(e,n),Pa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ca,r.x),o.addScaledVector(Ra,r.y),o.addScaledVector(Pa,r.z),o}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),Qn.subVectors(e,t),Pn.cross(Qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Pn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;vs.subVectors(s,n),_s.subVectors(r,n),Ea.subVectors(e,n);const c=vs.dot(Ea),l=_s.dot(Ea);if(c<=0&&l<=0)return t.copy(n);Ta.subVectors(e,s);const h=vs.dot(Ta),u=_s.dot(Ta);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(vs,o);Aa.subVectors(e,r);const f=vs.dot(Aa),g=_s.dot(Aa);if(g>=0&&f<=g)return t.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(_s,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ph.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Ph,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(vs,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},$r={h:0,s:0,l:0};function La(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=Sl(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=La(o,r,e+1/3),this.g=La(o,r,e),this.b=La(o,r,e-1/3)}return at.toWorkingColorSpace(this,s),this}setStyle(e,t=pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const n=Dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return at.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Nt(Xt.r*255,0,255))*65536+Math.round(Nt(Xt.g*255,0,255))*256+Math.round(Nt(Xt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Xt.copy(this),t);const n=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=pn){at.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,s=Xt.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL($r);const n=fr(_i.h,$r.h,t),s=fr(_i.s,$r.s,t),r=fr(_i.l,$r.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Ne;Ne.NAMES=Dd;let wm=0;class rs extends Ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Mn(),this.name="",this.blending=Ps,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=uc,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hc&&(n.blendSrc=this.blendSrc),this.blendDst!==uc&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ta extends rs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new k,Xr=new Re;class ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),e}}class kd extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ud extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wt extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ym=0;const xn=new nt,Ia=new It,xs=new k,fn=new Ri,er=new Ri,zt=new k;class Wt extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pd(e)?Ud:kd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Ia.lookAt(e),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];er.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(fn.min,er.min),fn.expandByPoint(zt),zt.addVectors(fn.max,er.max),fn.expandByPoint(zt)):(fn.expandByPoint(er.min),fn.expandByPoint(er.max))}fn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)zt.fromBufferAttribute(a,l),c&&(xs.fromBufferAttribute(e,l),zt.add(xs)),s=Math.max(s,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new k,c[R]=new k;const l=new k,h=new k,u=new k,d=new Re,f=new Re,g=new Re,v=new k,m=new k;function p(R,M,w){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,w),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,w),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[R].add(v),a[M].add(v),a[w].add(v),c[R].add(m),c[M].add(m),c[w].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,M=y.length;R<M;++R){const w=y[R],L=w.start,B=w.count;for(let O=L,N=L+B;O<N;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new k,_=new k,I=new k,E=new k;function T(R){I.fromBufferAttribute(s,R),E.copy(I);const M=a[R];x.copy(M),x.sub(I.multiplyScalar(I.dot(M))).normalize(),_.crossVectors(E,M);const L=_.dot(c[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,L)}for(let R=0,M=y.length;R<M;++R){const w=y[R],L=w.start,B=w.count;for(let O=L,N=L+B;O<N;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new k,r=new k,o=new k,a=new k,c=new k,l=new k,h=new k,u=new k;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new ln(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new nt,Di=new Rr,jr=new ui,Ih=new k,qr=new k,Yr=new k,Kr=new k,Da=new k,Jr=new k,Dh=new k,Zr=new k;class b extends It{constructor(e=new Wt,t=new ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Jr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Da.fromBufferAttribute(u,e),o?Jr.addScaledVector(Da,h):Jr.addScaledVector(Da.sub(t),h))}t.add(Jr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(jr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(jr,Ih)===null||Di.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Lh.copy(r).invert(),Di.copy(e.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,I=x;_<I;_+=3){const E=a.getX(_),T=a.getX(_+1),R=a.getX(_+2);s=Qr(this,p,e,n,l,h,u,E,T,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);s=Qr(this,o,e,n,l,h,u,y,x,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,I=x;_<I;_+=3){const E=_,T=_+1,R=_+2;s=Qr(this,p,e,n,l,h,u,E,T,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,x=m+1,_=m+2;s=Qr(this,o,e,n,l,h,u,y,x,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Mm(i,e,t,n,s,r,o,a){let c;if(e.side===cn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ci,a),c===null)return null;Zr.copy(a),Zr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Zr);return l<t.near||l>t.far?null:{distance:l,point:Zr.clone(),object:i}}function Qr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,qr),i.getVertexPosition(c,Yr),i.getVertexPosition(l,Kr);const h=Mm(i,e,t,n,qr,Yr,Kr,Dh);if(h){const u=new k;Dn.getBarycoord(Dh,qr,Yr,Kr,u),s&&(h.uv=Dn.getInterpolatedAttribute(s,a,c,l,u,new Re)),r&&(h.uv1=Dn.getInterpolatedAttribute(r,a,c,l,u,new Re)),o&&(h.normal=Dn.getInterpolatedAttribute(o,a,c,l,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new k,materialIndex:0};Dn.getNormal(qr,Yr,Kr,d.normal),h.face=d,h.barycoord=u}return h}class le extends Wt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(u,2));function g(v,m,p,y,x,_,I,E,T,R,M){const w=_/T,L=I/R,B=_/2,O=I/2,N=E/2,V=T+1,z=R+1;let q=0,G=0;const oe=new k;for(let ue=0;ue<z;ue++){const ge=ue*L-O;for(let Se=0;Se<V;Se++){const Oe=Se*w-B;oe[v]=Oe*y,oe[m]=ge*x,oe[p]=N,l.push(oe.x,oe.y,oe.z),oe[v]=0,oe[m]=0,oe[p]=E>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(Se/T),u.push(1-ue/R),q+=1}}for(let ue=0;ue<R;ue++)for(let ge=0;ge<T;ge++){const Se=d+ge+V*ue,Oe=d+ge+V*(ue+1),j=d+(ge+1)+V*(ue+1),ce=d+(ge+1)+V*ue;c.push(Se,Oe,ce),c.push(Oe,j,ce),G+=6}a.addGroup(f,G,M),f+=G,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new le(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=Bs(i[t]);for(const s in n)e[s]=n[s]}return e}function bm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const wr={clone:Bs,merge:Kt};var Sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jt extends rs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sm,this.fragmentShader=Em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=bm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fd extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new k,kh=new Re,Uh=new Re;class on extends Fd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,kh,Uh),t.subVectors(Uh,kh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ws=-90,ys=1;class Tm extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(ws,ys,e,t);s.layers=this.layers,this.add(s);const r=new on(ws,ys,e,t);r.layers=this.layers,this.add(r);const o=new on(ws,ys,e,t);o.layers=this.layers,this.add(o);const a=new on(ws,ys,e,t);a.layers=this.layers,this.add(a);const c=new on(ws,ys,e,t);c.layers=this.layers,this.add(c);const l=new on(ws,ys,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Od extends qt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ks,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Am extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Od(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new le(5,5,5),r=new jt({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:ai});r.uniforms.tEquirect.value=t;const o=new b(s,r),a=t.minFilter;return t.minFilter===ji&&(t.minFilter=Hn),new Tm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const ka=new k,Cm=new k,Rm=new tt;class zi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ka.subVectors(n,t).cross(Cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ka),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rm.getNormalMatrix(e),s=this.coplanarPoint(ka).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new ui,eo=new k;class Tl{constructor(e=new zi,t=new zi,n=new zi,s=new zi,r=new zi,o=new zi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],y=s[13],x=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+o,d+h,m+g,_+y).normalize(),n[3].setComponents(c-o,d-h,m-g,_-y).normalize(),n[4].setComponents(c-a,d-u,m-v,_-x).normalize(),t===oi)n[5].setComponents(c+a,d+u,m+v,_+x).normalize();else if(t===ko)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(eo.x=s.normal.x>0?e.max.x:e.min.x,eo.y=s.normal.y>0?e.max.y:e.min.y,eo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Pm(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class $s extends Wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*d-o;for(let x=0;x<l;x++){const _=x*u-r;g.push(_,-y,0),v.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const x=y+l*p,_=y+l*(p+1),I=y+1+l*(p+1),E=y+1+l*p;f.push(x,_,E),f.push(_,I,E)}this.setIndex(f),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Im=`#ifdef USE_ALPHAHASH
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
#endif`,Dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fm=`#ifdef USE_AOMAP
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
#endif`,Om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bm=`#ifdef USE_BATCHING
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
#endif`,zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wm=`#ifdef USE_IRIDESCENCE
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
#endif`,$m=`#ifdef USE_BUMPMAP
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
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,e0=`#define PI 3.141592653589793
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
} // validated`,t0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n0=`vec3 transformedNormal = objectNormal;
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
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a0="gl_FragColor = linearToOutputTexel( gl_FragColor );",c0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l0=`#ifdef USE_ENVMAP
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
#endif`,h0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_0=`#ifdef USE_GRADIENTMAP
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
}`,x0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M0=`uniform bool receiveShadow;
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
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,S0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C0=`PhysicalMaterial material;
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
#endif`,R0=`struct PhysicalMaterial {
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
}`,P0=`
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
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
#endif`,I0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z0=`#if defined( USE_POINTS_UV )
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
#endif`,H0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`#ifdef USE_MORPHTARGETS
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
#endif`,j0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q0=`#ifdef USE_NORMALMAP
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
#endif`,eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mg=`float getShadowMask() {
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
}`,gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,_g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xg=`#ifdef USE_SKINNING
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
#endif`,wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sg=`#ifdef USE_TRANSMISSION
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
#endif`,Eg=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lg=`uniform sampler2D t2D;
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`#include <common>
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
}`,Fg=`#if DEPTH_PACKING == 3200
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
}`,Og=`#define DISTANCE
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
}`,Bg=`#define DISTANCE
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`uniform float scale;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,$g=`uniform vec3 diffuse;
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
}`,Xg=`#define LAMBERT
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
}`,jg=`#define LAMBERT
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
}`,qg=`#define MATCAP
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
}`,Yg=`#define MATCAP
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
}`,Kg=`#define NORMAL
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
}`,Jg=`#define NORMAL
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
}`,Zg=`#define PHONG
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
}`,Qg=`#define PHONG
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
}`,ev=`#define STANDARD
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
}`,tv=`#define STANDARD
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
}`,nv=`#define TOON
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
}`,iv=`#define TOON
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
}`,sv=`uniform float size;
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
}`,rv=`uniform vec3 diffuse;
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
}`,ov=`#include <common>
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
}`,av=`uniform vec3 color;
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
}`,cv=`uniform float rotation;
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
}`,lv=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Lm,alphahash_pars_fragment:Im,alphamap_fragment:Dm,alphamap_pars_fragment:km,alphatest_fragment:Um,alphatest_pars_fragment:Nm,aomap_fragment:Fm,aomap_pars_fragment:Om,batching_pars_vertex:Bm,batching_vertex:zm,begin_vertex:Hm,beginnormal_vertex:Vm,bsdfs:Gm,iridescence_fragment:Wm,bumpmap_pars_fragment:$m,clipping_planes_fragment:Xm,clipping_planes_pars_fragment:jm,clipping_planes_pars_vertex:qm,clipping_planes_vertex:Ym,color_fragment:Km,color_pars_fragment:Jm,color_pars_vertex:Zm,color_vertex:Qm,common:e0,cube_uv_reflection_fragment:t0,defaultnormal_vertex:n0,displacementmap_pars_vertex:i0,displacementmap_vertex:s0,emissivemap_fragment:r0,emissivemap_pars_fragment:o0,colorspace_fragment:a0,colorspace_pars_fragment:c0,envmap_fragment:l0,envmap_common_pars_fragment:h0,envmap_pars_fragment:u0,envmap_pars_vertex:d0,envmap_physical_pars_fragment:b0,envmap_vertex:f0,fog_vertex:p0,fog_pars_vertex:m0,fog_fragment:g0,fog_pars_fragment:v0,gradientmap_pars_fragment:_0,lightmap_pars_fragment:x0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:y0,lights_pars_begin:M0,lights_toon_fragment:S0,lights_toon_pars_fragment:E0,lights_phong_fragment:T0,lights_phong_pars_fragment:A0,lights_physical_fragment:C0,lights_physical_pars_fragment:R0,lights_fragment_begin:P0,lights_fragment_maps:L0,lights_fragment_end:I0,logdepthbuf_fragment:D0,logdepthbuf_pars_fragment:k0,logdepthbuf_pars_vertex:U0,logdepthbuf_vertex:N0,map_fragment:F0,map_pars_fragment:O0,map_particle_fragment:B0,map_particle_pars_fragment:z0,metalnessmap_fragment:H0,metalnessmap_pars_fragment:V0,morphinstance_vertex:G0,morphcolor_vertex:W0,morphnormal_vertex:$0,morphtarget_pars_vertex:X0,morphtarget_vertex:j0,normal_fragment_begin:q0,normal_fragment_maps:Y0,normal_pars_fragment:K0,normal_pars_vertex:J0,normal_vertex:Z0,normalmap_pars_fragment:Q0,clearcoat_normal_fragment_begin:eg,clearcoat_normal_fragment_maps:tg,clearcoat_pars_fragment:ng,iridescence_pars_fragment:ig,opaque_fragment:sg,packing:rg,premultiplied_alpha_fragment:og,project_vertex:ag,dithering_fragment:cg,dithering_pars_fragment:lg,roughnessmap_fragment:hg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:dg,shadowmap_pars_vertex:fg,shadowmap_vertex:pg,shadowmask_pars_fragment:mg,skinbase_vertex:gg,skinning_pars_vertex:vg,skinning_vertex:_g,skinnormal_vertex:xg,specularmap_fragment:wg,specularmap_pars_fragment:yg,tonemapping_fragment:Mg,tonemapping_pars_fragment:bg,transmission_fragment:Sg,transmission_pars_fragment:Eg,uv_pars_fragment:Tg,uv_pars_vertex:Ag,uv_vertex:Cg,worldpos_vertex:Rg,background_vert:Pg,background_frag:Lg,backgroundCube_vert:Ig,backgroundCube_frag:Dg,cube_vert:kg,cube_frag:Ug,depth_vert:Ng,depth_frag:Fg,distanceRGBA_vert:Og,distanceRGBA_frag:Bg,equirect_vert:zg,equirect_frag:Hg,linedashed_vert:Vg,linedashed_frag:Gg,meshbasic_vert:Wg,meshbasic_frag:$g,meshlambert_vert:Xg,meshlambert_frag:jg,meshmatcap_vert:qg,meshmatcap_frag:Yg,meshnormal_vert:Kg,meshnormal_frag:Jg,meshphong_vert:Zg,meshphong_frag:Qg,meshphysical_vert:ev,meshphysical_frag:tv,meshtoon_vert:nv,meshtoon_frag:iv,points_vert:sv,points_frag:rv,shadow_vert:ov,shadow_frag:av,sprite_vert:cv,sprite_frag:lv},Be={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Bn={basic:{uniforms:Kt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Kt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ne(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Kt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Kt([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Kt([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ne(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Kt([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Kt([Be.points,Be.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Kt([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Kt([Be.common,Be.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Kt([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Kt([Be.sprite,Be.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Kt([Be.common,Be.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Kt([Be.lights,Be.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Bn.physical={uniforms:Kt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const to={r:0,b:0,g:0},Ui=new Fn,hv=new nt;function uv(i,e,t,n,s,r,o){const a=new Ne(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function v(y){let x=!1;const _=g(y);_===null?p(a,c):_&&_.isColor&&(p(_,1),x=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const _=g(x);_&&(_.isCubeTexture||_.mapping===Qo)?(h===void 0&&(h=new b(new le(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:Bs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ui.copy(x.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hv.makeRotationFromEuler(Ui)),h.material.toneMapped=at.getTransfer(_.colorSpace)!==yt,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new b(new $s(2,2),new jt({name:"BackgroundMaterial",uniforms:Bs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=at.getTransfer(_.colorSpace)!==yt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(to,Nd(i)),n.buffers.color.setClear(to.r,to.g,to.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:v,addToRenderList:m}}function dv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(w,L,B,O,N){let V=!1;const z=u(O,B,L);r!==z&&(r=z,l(r.object)),V=f(w,O,B,N),V&&g(w,O,B,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(w,L,B,O),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,L,B){const O=B.wireframe===!0;let N=n[w.id];N===void 0&&(N={},n[w.id]=N);let V=N[L.id];V===void 0&&(V={},N[L.id]=V);let z=V[O];return z===void 0&&(z=d(c()),V[O]=z),z}function d(w){const L=[],B=[],O=[];for(let N=0;N<t;N++)L[N]=0,B[N]=0,O[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:O,object:w,attributes:{},index:null}}function f(w,L,B,O){const N=r.attributes,V=L.attributes;let z=0;const q=B.getAttributes();for(const G in q)if(q[G].location>=0){const ue=N[G];let ge=V[G];if(ge===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(ge=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(ge=w.instanceColor)),ue===void 0||ue.attribute!==ge||ge&&ue.data!==ge.data)return!0;z++}return r.attributesNum!==z||r.index!==O}function g(w,L,B,O){const N={},V=L.attributes;let z=0;const q=B.getAttributes();for(const G in q)if(q[G].location>=0){let ue=V[G];ue===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor));const ge={};ge.attribute=ue,ue&&ue.data&&(ge.data=ue.data),N[G]=ge,z++}r.attributes=N,r.attributesNum=z,r.index=O}function v(){const w=r.newAttributes;for(let L=0,B=w.length;L<B;L++)w[L]=0}function m(w){p(w,0)}function p(w,L){const B=r.newAttributes,O=r.enabledAttributes,N=r.attributeDivisors;B[w]=1,O[w]===0&&(i.enableVertexAttribArray(w),O[w]=1),N[w]!==L&&(i.vertexAttribDivisor(w,L),N[w]=L)}function y(){const w=r.newAttributes,L=r.enabledAttributes;for(let B=0,O=L.length;B<O;B++)L[B]!==w[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function x(w,L,B,O,N,V,z){z===!0?i.vertexAttribIPointer(w,L,B,N,V):i.vertexAttribPointer(w,L,B,O,N,V)}function _(w,L,B,O){v();const N=O.attributes,V=B.getAttributes(),z=L.defaultAttributeValues;for(const q in V){const G=V[q];if(G.location>=0){let oe=N[q];if(oe===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(oe=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(oe=w.instanceColor)),oe!==void 0){const ue=oe.normalized,ge=oe.itemSize,Se=e.get(oe);if(Se===void 0)continue;const Oe=Se.buffer,j=Se.type,ce=Se.bytesPerElement,ve=j===i.INT||j===i.UNSIGNED_INT||oe.gpuType===vl;if(oe.isInterleavedBufferAttribute){const de=oe.data,ke=de.stride,ze=oe.offset;if(de.isInstancedInterleavedBuffer){for(let Fe=0;Fe<G.locationSize;Fe++)p(G.location+Fe,de.meshPerAttribute);w.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Fe=0;Fe<G.locationSize;Fe++)m(G.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let Fe=0;Fe<G.locationSize;Fe++)x(G.location+Fe,ge/G.locationSize,j,ue,ke*ce,(ze+ge/G.locationSize*Fe)*ce,ve)}else{if(oe.isInstancedBufferAttribute){for(let de=0;de<G.locationSize;de++)p(G.location+de,oe.meshPerAttribute);w.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<G.locationSize;de++)m(G.location+de);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let de=0;de<G.locationSize;de++)x(G.location+de,ge/G.locationSize,j,ue,ge*ce,ge/G.locationSize*de*ce,ve)}}else if(z!==void 0){const ue=z[q];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(G.location,ue);break;case 3:i.vertexAttrib3fv(G.location,ue);break;case 4:i.vertexAttrib4fv(G.location,ue);break;default:i.vertexAttrib1fv(G.location,ue)}}}}y()}function I(){R();for(const w in n){const L=n[w];for(const B in L){const O=L[B];for(const N in O)h(O[N].object),delete O[N];delete L[B]}delete n[w]}}function E(w){if(n[w.id]===void 0)return;const L=n[w.id];for(const B in L){const O=L[B];for(const N in O)h(O[N].object),delete O[N];delete L[B]}delete n[w.id]}function T(w){for(const L in n){const B=n[L];if(B[w.id]===void 0)continue;const O=B[w.id];for(const N in O)h(O[N].object),delete O[N];delete B[w.id]}}function R(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function fv(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function pv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==wn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==hi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==kn&&!R)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:I,maxSamples:E}}function mv(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new zi,a=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,x=y*4;let _=p.clippingState||null;c.value=_,_=h(g,d,x,f);for(let I=0;I!==x;++I)_[I]=t[I];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=f;x!==v;++x,_+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function gv(i){let e=new WeakMap;function t(o,a){return a===xc?o.mapping=ks:a===wc&&(o.mapping=Us),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xc||a===wc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Am(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Al extends Fd{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const As=4,Nh=[.125,.215,.35,.446,.526,.582],Wi=20,Ua=new Al,Fh=new Ne;let Na=null,Fa=0,Oa=0,Ba=!1;const Hi=(1+Math.sqrt(5))/2,Ms=1/Hi,Oh=[new k(-Hi,Ms,0),new k(Hi,Ms,0),new k(-Ms,0,Hi),new k(Ms,0,Hi),new k(0,Hi,-Ms),new k(0,Hi,Ms),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Bh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Na,Fa,Oa),this._renderer.xr.enabled=Ba,e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ks||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Vn,format:wn,colorSpace:Gs,depthBuffer:!1},s=zh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vv(r)),this._blurMaterial=_v(r,e,t)}return s}_compileMaterial(e){const t=new b(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,n,s){const a=new on(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Fh),h.toneMapping=Ti,h.autoClear=!1;const f=new ta({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new b(new le,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Fh),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;no(s,y*x,p>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ks||e.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new b(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;no(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Oh[(s-r-1)%Oh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new b(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Wi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Wi;m>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const p=[];let y=0;for(let T=0;T<Wi;++T){const R=T/v,M=Math.exp(-R*R/2);p.push(M),T===0?y+=M:T<m&&(y+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const _=this._sizeLods[s],I=3*_*(s>x-As?s-x+As:0),E=4*(this._cubeSize-_);no(t,I,E,3*_,2*_),c.setRenderTarget(t),c.render(u,Ua)}}function vv(i){const e=[],t=[],n=[];let s=i;const r=i-As+1+Nh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-As?c=Nh[o-i+As-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),x=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,R=E>2?0:-1,M=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];y.set(M,v*g*E),x.set(d,m*g*E);const w=[E,E,E,E,E,E];_.set(w,p*g*E)}const I=new Wt;I.setAttribute("position",new ln(y,v)),I.setAttribute("uv",new ln(x,m)),I.setAttribute("faceIndex",new ln(_,p)),e.push(I),s>As&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zh(i,e,t){const n=new vn(i,e,t);return n.texture.mapping=Qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function no(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function _v(i,e,t){const n=new Float32Array(Wi),s=new k(0,1,0);return new jt({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Hh(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Vh(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Cl(){return`

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
	`}function xv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===xc||c===wc,h=c===ks||c===Us;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Bh(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Bh(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function wv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&cr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function yv(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let x=0,_=y.length;x<_;x+=3){const I=y[x+0],E=y[x+1],T=y[x+2];d.push(I,E,E,T,T,I)}}else if(g!==void 0){const y=g.array;v=g.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const I=x+0,E=x+1,T=x+2;d.push(I,E,E,T,T,I)}}else return;const m=new(Pd(d)?Ud:kd)(d,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Mv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*v[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function bv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sv(i,e,t){const n=new WeakMap,s=new vt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let _=a.attributes.position.count*x,I=1;_>e.maxTextureSize&&(I=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const E=new Float32Array(_*I*4*u),T=new Id(E,_,I,u);T.type=kn,T.needsUpdate=!0;const R=x*4;for(let w=0;w<u;w++){const L=m[w],B=p[w],O=y[w],N=_*I*4*w;for(let V=0;V<L.count;V++){const z=V*R;f===!0&&(s.fromBufferAttribute(L,V),E[N+z+0]=s.x,E[N+z+1]=s.y,E[N+z+2]=s.z,E[N+z+3]=0),g===!0&&(s.fromBufferAttribute(B,V),E[N+z+4]=s.x,E[N+z+5]=s.y,E[N+z+6]=s.z,E[N+z+7]=0),v===!0&&(s.fromBufferAttribute(O,V),E[N+z+8]=s.x,E[N+z+9]=s.y,E[N+z+10]=s.z,E[N+z+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new Re(_,I)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ev(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Uo extends qt{constructor(e,t,n,s,r,o,a,c,l,h=Ls){if(h!==Ls&&h!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ls&&(n=Zi),n===void 0&&h===Fs&&(n=Ns),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zd=new qt,Gh=new Uo(1,1),Hd=new Id,Vd=new dm,Gd=new Od,Wh=[],$h=[],Xh=new Float32Array(16),jh=new Float32Array(9),qh=new Float32Array(4);function Xs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Wh[s];if(r===void 0&&(r=new Float32Array(s),Wh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function na(i,e){let t=$h[e];t===void 0&&(t=new Int32Array(e),$h[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function Cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function Rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function Pv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;qh.set(n),i.uniformMatrix2fv(this.addr,!1,qh),Ot(t,n)}}function Lv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;jh.set(n),i.uniformMatrix3fv(this.addr,!1,jh),Ot(t,n)}}function Iv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Xh.set(n),i.uniformMatrix4fv(this.addr,!1,Xh),Ot(t,n)}}function Dv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function Uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function Nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function Fv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ov(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function Bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function Hv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gh.compareFunction=Rd,r=Gh):r=zd,t.setTexture2D(e||r,s)}function Vv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vd,s)}function Gv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Gd,s)}function Wv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hd,s)}function $v(i){switch(i){case 5126:return Tv;case 35664:return Av;case 35665:return Cv;case 35666:return Rv;case 35674:return Pv;case 35675:return Lv;case 35676:return Iv;case 5124:case 35670:return Dv;case 35667:case 35671:return kv;case 35668:case 35672:return Uv;case 35669:case 35673:return Nv;case 5125:return Fv;case 36294:return Ov;case 36295:return Bv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return Vv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Wv}}function Xv(i,e){i.uniform1fv(this.addr,e)}function jv(i,e){const t=Xs(e,this.size,2);i.uniform2fv(this.addr,t)}function qv(i,e){const t=Xs(e,this.size,3);i.uniform3fv(this.addr,t)}function Yv(i,e){const t=Xs(e,this.size,4);i.uniform4fv(this.addr,t)}function Kv(i,e){const t=Xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jv(i,e){const t=Xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zv(i,e){const t=Xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qv(i,e){i.uniform1iv(this.addr,e)}function e_(i,e){i.uniform2iv(this.addr,e)}function t_(i,e){i.uniform3iv(this.addr,e)}function n_(i,e){i.uniform4iv(this.addr,e)}function i_(i,e){i.uniform1uiv(this.addr,e)}function s_(i,e){i.uniform2uiv(this.addr,e)}function r_(i,e){i.uniform3uiv(this.addr,e)}function o_(i,e){i.uniform4uiv(this.addr,e)}function a_(i,e,t){const n=this.cache,s=e.length,r=na(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||zd,r[o])}function c_(i,e,t){const n=this.cache,s=e.length,r=na(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Vd,r[o])}function l_(i,e,t){const n=this.cache,s=e.length,r=na(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Gd,r[o])}function h_(i,e,t){const n=this.cache,s=e.length,r=na(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Hd,r[o])}function u_(i){switch(i){case 5126:return Xv;case 35664:return jv;case 35665:return qv;case 35666:return Yv;case 35674:return Kv;case 35675:return Jv;case 35676:return Zv;case 5124:case 35670:return Qv;case 35667:case 35671:return e_;case 35668:case 35672:return t_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return s_;case 36295:return r_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return h_}}class d_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$v(t.type)}}class f_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u_(t.type)}}class p_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const za=/(\w+)(\])?(\[|\.)?/g;function Yh(i,e){i.seq.push(e),i.map[e.id]=e}function m_(i,e,t){const n=i.name,s=n.length;for(za.lastIndex=0;;){const r=za.exec(n),o=za.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Yh(t,l===void 0?new d_(a,i,e):new f_(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new p_(a),Yh(t,u)),t=u}}}class Co{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);m_(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Kh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const g_=37297;let v_=0;function __(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Jh=new tt;function x_(i){at._getMatrix(Jh,at.workingColorSpace,i);const e=`mat3( ${Jh.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case ea:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+__(i.getShaderSource(e),o)}else return s}function w_(i,e){const t=x_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function y_(i,e){let t;switch(e){case dd:t="Linear";break;case fd:t="Reinhard";break;case pd:t="Cineon";break;case gl:t="ACESFilmic";break;case md:t="AgX";break;case gd:t="Neutral";break;case Rp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const io=new k;function M_(){at.getLuminanceCoefficients(io);const i=io.x.toFixed(4),e=io.y.toFixed(4),t=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function S_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function E_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function lr(i){return i!==""}function Qh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(i){return i.replace(T_,C_)}const A_=new Map;function C_(i,e){let t=it[e];if(t===void 0){const n=A_.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jc(t)}const R_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(i){return i.replace(R_,P_)}function P_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function L_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ml?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===cc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function I_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ks:case Us:e="ENVMAP_TYPE_CUBE";break;case Qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function k_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ud:e="ENVMAP_BLENDING_MULTIPLY";break;case Ap:e="ENVMAP_BLENDING_MIX";break;case Cp:e="ENVMAP_BLENDING_ADD";break}return e}function U_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function N_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=L_(t),l=I_(t),h=D_(t),u=k_(t),d=U_(t),f=b_(t),g=S_(r),v=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lr).join(`
`),p.length>0&&(p+=`
`)):(m=[nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),p=[nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?it.tonemapping_pars_fragment:"",t.toneMapping!==Ti?y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,w_("linearToOutputTexel",t.outputColorSpace),M_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),o=Jc(o),o=Qh(o,t),o=eu(o,t),a=Jc(a),a=Qh(a,t),a=eu(a,t),o=tu(o),a=tu(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+o,_=y+p+a,I=Kh(s,s.VERTEX_SHADER,x),E=Kh(s,s.FRAGMENT_SHADER,_);s.attachShader(v,I),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(L){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(I).trim(),N=s.getShaderInfoLog(E).trim();let V=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,E);else{const q=Zh(s,I,"vertex"),G=Zh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+q+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||N==="")&&(z=!1);z&&(L.diagnostics={runnable:V,programLog:B,vertexShader:{log:O,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(I),s.deleteShader(E),R=new Co(s,v),M=E_(s,v)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(v,g_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=E,this}let F_=0;class O_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new B_(e),t.set(e,n)),n}}class B_{constructor(e){this.id=F_++,this.code=e,this.usedTimes=0}}function z_(i,e,t,n,s,r,o){const a=new El,c=new O_,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,w,L,B,O){const N=B.fog,V=O.geometry,z=M.isMeshStandardMaterial?B.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),G=q&&q.mapping===Qo?q.image.height:null,oe=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ue=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ge=ue!==void 0?ue.length:0;let Se=0;V.morphAttributes.position!==void 0&&(Se=1),V.morphAttributes.normal!==void 0&&(Se=2),V.morphAttributes.color!==void 0&&(Se=3);let Oe,j,ce,ve;if(oe){const gt=Bn[oe];Oe=gt.vertexShader,j=gt.fragmentShader}else Oe=M.vertexShader,j=M.fragmentShader,c.update(M),ce=c.getVertexShaderID(M),ve=c.getFragmentShaderID(M);const de=i.getRenderTarget(),ke=i.state.buffers.depth.getReversed(),ze=O.isInstancedMesh===!0,Fe=O.isBatchedMesh===!0,Ce=!!M.map,X=!!M.matcap,te=!!q,P=!!M.aoMap,Le=!!M.lightMap,ie=!!M.bumpMap,he=!!M.normalMap,pe=!!M.displacementMap,xe=!!M.emissiveMap,fe=!!M.metalnessMap,A=!!M.roughnessMap,S=M.anisotropy>0,H=M.clearcoat>0,Z=M.dispersion>0,ne=M.iridescence>0,Y=M.sheen>0,Ee=M.transmission>0,Pe=S&&!!M.anisotropyMap,Ie=H&&!!M.clearcoatMap,We=H&&!!M.clearcoatNormalMap,Te=H&&!!M.clearcoatRoughnessMap,J=ne&&!!M.iridescenceMap,re=ne&&!!M.iridescenceThicknessMap,we=Y&&!!M.sheenColorMap,Me=Y&&!!M.sheenRoughnessMap,He=!!M.specularMap,qe=!!M.specularColorMap,Ae=!!M.specularIntensityMap,U=Ee&&!!M.transmissionMap,_e=Ee&&!!M.thicknessMap,K=!!M.gradientMap,ae=!!M.alphaMap,ye=M.alphaTest>0,De=!!M.alphaHash,Ke=!!M.extensions;let mt=Ti;M.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(mt=i.toneMapping);const Je={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:Oe,fragmentShader:j,defines:M.defines,customVertexShaderID:ce,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Fe,batchingColor:Fe&&O._colorsTexture!==null,instancing:ze,instancingColor:ze&&O.instanceColor!==null,instancingMorph:ze&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Gs,alphaToCoverage:!!M.alphaToCoverage,map:Ce,matcap:X,envMap:te,envMapMode:te&&q.mapping,envMapCubeUVHeight:G,aoMap:P,lightMap:Le,bumpMap:ie,normalMap:he,displacementMap:d&&pe,emissiveMap:xe,normalMapObjectSpace:he&&M.normalMapType===kp,normalMapTangentSpace:he&&M.normalMapType===Cd,metalnessMap:fe,roughnessMap:A,anisotropy:S,anisotropyMap:Pe,clearcoat:H,clearcoatMap:Ie,clearcoatNormalMap:We,clearcoatRoughnessMap:Te,dispersion:Z,iridescence:ne,iridescenceMap:J,iridescenceThicknessMap:re,sheen:Y,sheenColorMap:we,sheenRoughnessMap:Me,specularMap:He,specularColorMap:qe,specularIntensityMap:Ae,transmission:Ee,transmissionMap:U,thicknessMap:_e,gradientMap:K,opaque:M.transparent===!1&&M.blending===Ps&&M.alphaToCoverage===!1,alphaMap:ae,alphaTest:ye,alphaHash:De,combine:M.combine,mapUv:Ce&&v(M.map.channel),aoMapUv:P&&v(M.aoMap.channel),lightMapUv:Le&&v(M.lightMap.channel),bumpMapUv:ie&&v(M.bumpMap.channel),normalMapUv:he&&v(M.normalMap.channel),displacementMapUv:pe&&v(M.displacementMap.channel),emissiveMapUv:xe&&v(M.emissiveMap.channel),metalnessMapUv:fe&&v(M.metalnessMap.channel),roughnessMapUv:A&&v(M.roughnessMap.channel),anisotropyMapUv:Pe&&v(M.anisotropyMap.channel),clearcoatMapUv:Ie&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:We&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:we&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(M.sheenRoughnessMap.channel),specularMapUv:He&&v(M.specularMap.channel),specularColorMapUv:qe&&v(M.specularColorMap.channel),specularIntensityMapUv:Ae&&v(M.specularIntensityMap.channel),transmissionMapUv:U&&v(M.transmissionMap.channel),thicknessMapUv:_e&&v(M.thicknessMap.channel),alphaMapUv:ae&&v(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(he||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Ce||ae),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ke,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Se,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,decodeVideoTexture:Ce&&M.map.isVideoTexture===!0&&at.getTransfer(M.map.colorSpace)===yt,decodeVideoTextureEmissive:xe&&M.emissiveMap.isVideoTexture===!0&&at.getTransfer(M.emissiveMap.colorSpace)===yt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===si,flipSided:M.side===cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ke&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&M.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function p(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)w.push(L),w.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(y(w,M),x(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function y(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const w=g[M.type];let L;if(w){const B=Bn[w];L=wr.clone(B.uniforms)}else L=M.uniforms;return L}function I(M,w){let L;for(let B=0,O=h.length;B<O;B++){const N=h[B];if(N.cacheKey===w){L=N,++L.usedTimes;break}}return L===void 0&&(L=new N_(i,w,M,r),h.push(L)),L}function E(M){if(--M.usedTimes===0){const w=h.indexOf(M);h[w]=h[h.length-1],h.pop(),M.destroy()}}function T(M){c.remove(M)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:I,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:R}}function H_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function V_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function iu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function su(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||V_),n.length>1&&n.sort(d||iu),s.length>1&&s.sort(d||iu)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function G_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new su,i.set(n,[o])):s>=r.length?(o=new su,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function W_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ne};break;case"SpotLight":t={position:new k,direction:new k,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function $_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let X_=0;function j_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function q_(i){const e=new W_,t=$_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);const s=new k,r=new nt,o=new nt;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,x=0,_=0,I=0,E=0,T=0;l.sort(j_);for(let M=0,w=l.length;M<w;M++){const L=l[M],B=L.color,O=L.intensity,N=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=B.r*O,u+=B.g*O,d+=B.b*O;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],O);T++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const q=L.shadow,G=t.get(L);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=z,f++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(B).multiplyScalar(O),z.distance=N,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[v]=z;const q=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,q.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[v]=q.matrix,L.castShadow){const G=t.get(L);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=V,_++}v++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy(B).multiplyScalar(O),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=z,m++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const q=L.shadow,G=t.get(L);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=z,g++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(O),z.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==_||R.numSpotMaps!==I||R.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+I-E,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,R.directionalLength=f,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=_,R.numSpotMaps=I,R.numLightProbes=T,n.version=X_++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const x=l[p];if(x.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(x.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function ru(i){const e=new q_(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Y_(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ru(i),e.set(s,[a])):r>=o.length?(a=new ru(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Wd extends rs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class K_ extends rs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const J_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z_=`uniform sampler2D shadow_pass;
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
}`;function Q_(i,e,t){let n=new Tl;const s=new Re,r=new Re,o=new vt,a=new Wd({depthPacking:Ad}),c=new K_,l={},h=t.maxTextureSize,u={[Ci]:cn,[cn]:Ci,[si]:si},d=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:J_,fragmentShader:Z_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new b(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let p=this.type;this.render=function(E,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),w=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ai),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=p!==ni&&this.type===ni,N=p===ni&&this.type!==ni;for(let V=0,z=E.length;V<z;V++){const q=E[V],G=q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const oe=G.getFrameExtents();if(s.multiply(oe),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,G.mapSize.y=r.y)),G.map===null||O===!0||N===!0){const ge=this.type!==ni?{minFilter:en,magFilter:en}:{};G.map!==null&&G.map.dispose(),G.map=new vn(s.x,s.y,ge),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ue=G.getViewportCount();for(let ge=0;ge<ue;ge++){const Se=G.getViewport(ge);o.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),B.viewport(o),G.updateMatrices(q,ge),n=G.getFrustum(),_(T,R,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===ni&&y(G,R),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,w,L)};function y(E,T){const R=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new vn(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,R,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,R,f,v,null)}function x(E,T,R,M){let w=null;const L=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)w=L;else if(w=R.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=w.uuid,O=T.uuid;let N=l[B];N===void 0&&(N={},l[B]=N);let V=N[O];V===void 0&&(V=w.clone(),N[O]=V,T.addEventListener("dispose",I)),w=V}if(w.visible=T.visible,w.wireframe=T.wireframe,M===ni?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:u[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,R.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const B=i.properties.get(w);B.light=R}return w}function _(E,T,R,M,w){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===ni)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const O=e.update(E),N=E.material;if(Array.isArray(N)){const V=O.groups;for(let z=0,q=V.length;z<q;z++){const G=V[z],oe=N[G.materialIndex];if(oe&&oe.visible){const ue=x(E,oe,M,w);E.onBeforeShadow(i,E,T,R,O,ue,G),i.renderBufferDirect(R,null,O,ue,E,G),E.onAfterShadow(i,E,T,R,O,ue,G)}}}else if(N.visible){const V=x(E,N,M,w);E.onBeforeShadow(i,E,T,R,O,V,null),i.renderBufferDirect(R,null,O,V,E,null),E.onAfterShadow(i,E,T,R,O,V,null)}}const B=E.children;for(let O=0,N=B.length;O<N;O++)_(B[O],T,R,M,w)}function I(E){E.target.removeEventListener("dispose",I);for(const R in l){const M=l[R],w=E.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}const ex={[dc]:fc,[pc]:vc,[mc]:_c,[Ds]:gc,[fc]:dc,[vc]:pc,[_c]:mc,[gc]:Ds};function tx(i,e){function t(){let U=!1;const _e=new vt;let K=null;const ae=new vt(0,0,0,0);return{setMask:function(ye){K!==ye&&!U&&(i.colorMask(ye,ye,ye,ye),K=ye)},setLocked:function(ye){U=ye},setClear:function(ye,De,Ke,mt,Je){Je===!0&&(ye*=mt,De*=mt,Ke*=mt),_e.set(ye,De,Ke,mt),ae.equals(_e)===!1&&(i.clearColor(ye,De,Ke,mt),ae.copy(_e))},reset:function(){U=!1,K=null,ae.set(-1,0,0,0)}}}function n(){let U=!1,_e=!1,K=null,ae=null,ye=null;return{setReversed:function(De){if(_e!==De){const Ke=e.get("EXT_clip_control");_e?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);const mt=ye;ye=null,this.setClear(mt)}_e=De},getReversed:function(){return _e},setTest:function(De){De?de(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(De){K!==De&&!U&&(i.depthMask(De),K=De)},setFunc:function(De){if(_e&&(De=ex[De]),ae!==De){switch(De){case dc:i.depthFunc(i.NEVER);break;case fc:i.depthFunc(i.ALWAYS);break;case pc:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case mc:i.depthFunc(i.EQUAL);break;case gc:i.depthFunc(i.GEQUAL);break;case vc:i.depthFunc(i.GREATER);break;case _c:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=De}},setLocked:function(De){U=De},setClear:function(De){ye!==De&&(_e&&(De=1-De),i.clearDepth(De),ye=De)},reset:function(){U=!1,K=null,ae=null,ye=null,_e=!1}}}function s(){let U=!1,_e=null,K=null,ae=null,ye=null,De=null,Ke=null,mt=null,Je=null;return{setTest:function(gt){U||(gt?de(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(gt){_e!==gt&&!U&&(i.stencilMask(gt),_e=gt)},setFunc:function(gt,Tn,qn){(K!==gt||ae!==Tn||ye!==qn)&&(i.stencilFunc(gt,Tn,qn),K=gt,ae=Tn,ye=qn)},setOp:function(gt,Tn,qn){(De!==gt||Ke!==Tn||mt!==qn)&&(i.stencilOp(gt,Tn,qn),De=gt,Ke=Tn,mt=qn)},setLocked:function(gt){U=gt},setClear:function(gt){Je!==gt&&(i.clearStencil(gt),Je=gt)},reset:function(){U=!1,_e=null,K=null,ae=null,ye=null,De=null,Ke=null,mt=null,Je=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,x=null,_=null,I=null,E=null,T=new Ne(0,0,0),R=0,M=!1,w=null,L=null,B=null,O=null,N=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,q=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=q>=2);let oe=null,ue={};const ge=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),Oe=new vt().fromArray(ge),j=new vt().fromArray(Se);function ce(U,_e,K,ae){const ye=new Uint8Array(4),De=i.createTexture();i.bindTexture(U,De),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<K;Ke++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(_e+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return De}const ve={};ve[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(Ds),ie(!1),he(oh),de(i.CULL_FACE),P(ai);function de(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function ke(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function ze(U,_e){return u[U]!==_e?(i.bindFramebuffer(U,_e),u[U]=_e,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_e),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function Fe(U,_e){let K=f,ae=!1;if(U){K=d.get(_e),K===void 0&&(K=[],d.set(_e,K));const ye=U.textures;if(K.length!==ye.length||K[0]!==i.COLOR_ATTACHMENT0){for(let De=0,Ke=ye.length;De<Ke;De++)K[De]=i.COLOR_ATTACHMENT0+De;K.length=ye.length,ae=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ae=!0);ae&&i.drawBuffers(K)}function Ce(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const X={[Gi]:i.FUNC_ADD,[hp]:i.FUNC_SUBTRACT,[up]:i.FUNC_REVERSE_SUBTRACT};X[dp]=i.MIN,X[fp]=i.MAX;const te={[pp]:i.ZERO,[mp]:i.ONE,[gp]:i.SRC_COLOR,[hc]:i.SRC_ALPHA,[Mp]:i.SRC_ALPHA_SATURATE,[wp]:i.DST_COLOR,[_p]:i.DST_ALPHA,[vp]:i.ONE_MINUS_SRC_COLOR,[uc]:i.ONE_MINUS_SRC_ALPHA,[yp]:i.ONE_MINUS_DST_COLOR,[xp]:i.ONE_MINUS_DST_ALPHA,[bp]:i.CONSTANT_COLOR,[Sp]:i.ONE_MINUS_CONSTANT_COLOR,[Ep]:i.CONSTANT_ALPHA,[Tp]:i.ONE_MINUS_CONSTANT_ALPHA};function P(U,_e,K,ae,ye,De,Ke,mt,Je,gt){if(U===ai){v===!0&&(ke(i.BLEND),v=!1);return}if(v===!1&&(de(i.BLEND),v=!0),U!==lp){if(U!==m||gt!==M){if((p!==Gi||_!==Gi)&&(i.blendEquation(i.FUNC_ADD),p=Gi,_=Gi),gt)switch(U){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lc:i.blendFunc(i.ONE,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ch:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ch:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,x=null,I=null,E=null,T.set(0,0,0),R=0,m=U,M=gt}return}ye=ye||_e,De=De||K,Ke=Ke||ae,(_e!==p||ye!==_)&&(i.blendEquationSeparate(X[_e],X[ye]),p=_e,_=ye),(K!==y||ae!==x||De!==I||Ke!==E)&&(i.blendFuncSeparate(te[K],te[ae],te[De],te[Ke]),y=K,x=ae,I=De,E=Ke),(mt.equals(T)===!1||Je!==R)&&(i.blendColor(mt.r,mt.g,mt.b,Je),T.copy(mt),R=Je),m=U,M=!1}function Le(U,_e){U.side===si?ke(i.CULL_FACE):de(i.CULL_FACE);let K=U.side===cn;_e&&(K=!K),ie(K),U.blending===Ps&&U.transparent===!1?P(ai):P(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const ae=U.stencilWrite;a.setTest(ae),ae&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),xe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(U){w!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),w=U)}function he(U){U!==ap?(de(i.CULL_FACE),U!==L&&(U===oh?i.cullFace(i.BACK):U===cp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),L=U}function pe(U){U!==B&&(z&&i.lineWidth(U),B=U)}function xe(U,_e,K){U?(de(i.POLYGON_OFFSET_FILL),(O!==_e||N!==K)&&(i.polygonOffset(_e,K),O=_e,N=K)):ke(i.POLYGON_OFFSET_FILL)}function fe(U){U?de(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function A(U){U===void 0&&(U=i.TEXTURE0+V-1),oe!==U&&(i.activeTexture(U),oe=U)}function S(U,_e,K){K===void 0&&(oe===null?K=i.TEXTURE0+V-1:K=oe);let ae=ue[K];ae===void 0&&(ae={type:void 0,texture:void 0},ue[K]=ae),(ae.type!==U||ae.texture!==_e)&&(oe!==K&&(i.activeTexture(K),oe=K),i.bindTexture(U,_e||ve[U]),ae.type=U,ae.texture=_e)}function H(){const U=ue[oe];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(U){Oe.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Oe.copy(U))}function Me(U){j.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),j.copy(U))}function He(U,_e){let K=l.get(_e);K===void 0&&(K=new WeakMap,l.set(_e,K));let ae=K.get(U);ae===void 0&&(ae=i.getUniformBlockIndex(_e,U.name),K.set(U,ae))}function qe(U,_e){const ae=l.get(_e).get(U);c.get(_e)!==ae&&(i.uniformBlockBinding(_e,ae,U.__bindingPointIndex),c.set(_e,ae))}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},oe=null,ue={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,x=null,_=null,I=null,E=null,T=new Ne(0,0,0),R=0,M=!1,w=null,L=null,B=null,O=null,N=null,Oe.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:ke,bindFramebuffer:ze,drawBuffers:Fe,useProgram:Ce,setBlending:P,setMaterial:Le,setFlipSided:ie,setCullFace:he,setLineWidth:pe,setPolygonOffset:xe,setScissorTest:fe,activeTexture:A,bindTexture:S,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:ne,texImage2D:J,texImage3D:re,updateUBOMapping:He,uniformBlockBinding:qe,texStorage2D:We,texStorage3D:Te,texSubImage2D:Y,texSubImage3D:Ee,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Ie,scissor:we,viewport:Me,reset:Ae}}function ou(i,e,t,n){const s=nx(n);switch(t){case yd:return i*e;case bd:return i*e;case Sd:return i*e*2;case wl:return i*e/s.components*s.byteLength;case yl:return i*e/s.components*s.byteLength;case Ed:return i*e*2/s.components*s.byteLength;case Ml:return i*e*2/s.components*s.byteLength;case Md:return i*e*3/s.components*s.byteLength;case wn:return i*e*4/s.components*s.byteLength;case bl:return i*e*4/s.components*s.byteLength;case bo:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Eo:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sc:case Tc:return Math.max(i,16)*Math.max(e,8)/4;case bc:case Ec:return Math.max(i,8)*Math.max(e,8)/2;case Ac:case Cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ao:case Wc:case $c:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Td:case Xc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case jc:case qc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nx(i){switch(i){case hi:case _d:return{byteLength:1,components:1};case _r:case xd:case Vn:return{byteLength:2,components:1};case _l:case xl:return{byteLength:2,components:4};case Zi:case vl:case kn:return{byteLength:4,components:1};case wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ix(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Re,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return f?new OffscreenCanvas(A,S):xr("canvas")}function v(A,S,H){let Z=1;const ne=fe(A);if((ne.width>H||ne.height>H)&&(Z=H/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(Z*ne.width),Ee=Math.floor(Z*ne.height);u===void 0&&(u=g(Y,Ee));const Pe=S?g(Y,Ee):u;return Pe.width=Y,Pe.height=Ee,Pe.getContext("2d").drawImage(A,0,0,Y,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Y+"x"+Ee+")."),Pe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,S,H,Z,ne=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=S;if(S===i.RED&&(H===i.FLOAT&&(Y=i.R32F),H===i.HALF_FLOAT&&(Y=i.R16F),H===i.UNSIGNED_BYTE&&(Y=i.R8)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.R8UI),H===i.UNSIGNED_SHORT&&(Y=i.R16UI),H===i.UNSIGNED_INT&&(Y=i.R32UI),H===i.BYTE&&(Y=i.R8I),H===i.SHORT&&(Y=i.R16I),H===i.INT&&(Y=i.R32I)),S===i.RG&&(H===i.FLOAT&&(Y=i.RG32F),H===i.HALF_FLOAT&&(Y=i.RG16F),H===i.UNSIGNED_BYTE&&(Y=i.RG8)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RG8UI),H===i.UNSIGNED_SHORT&&(Y=i.RG16UI),H===i.UNSIGNED_INT&&(Y=i.RG32UI),H===i.BYTE&&(Y=i.RG8I),H===i.SHORT&&(Y=i.RG16I),H===i.INT&&(Y=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),H===i.UNSIGNED_INT&&(Y=i.RGB32UI),H===i.BYTE&&(Y=i.RGB8I),H===i.SHORT&&(Y=i.RGB16I),H===i.INT&&(Y=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),H===i.UNSIGNED_INT&&(Y=i.RGBA32UI),H===i.BYTE&&(Y=i.RGBA8I),H===i.SHORT&&(Y=i.RGBA16I),H===i.INT&&(Y=i.RGBA32I)),S===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),S===i.RGBA){const Ee=ne?ea:at.getTransfer(Z);H===i.FLOAT&&(Y=i.RGBA32F),H===i.HALF_FLOAT&&(Y=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Y=Ee===yt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(A,S){let H;return A?S===null||S===Zi||S===Ns?H=i.DEPTH24_STENCIL8:S===kn?H=i.DEPTH32F_STENCIL8:S===_r&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Zi||S===Ns?H=i.DEPTH_COMPONENT24:S===kn?H=i.DEPTH_COMPONENT32F:S===_r&&(H=i.DEPTH_COMPONENT16),H}function I(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==en&&A.minFilter!==Hn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function E(A){const S=A.target;S.removeEventListener("dispose",E),R(S),S.isVideoTexture&&h.delete(S)}function T(A){const S=A.target;S.removeEventListener("dispose",T),w(S)}function R(A){const S=n.get(A);if(S.__webglInit===void 0)return;const H=A.source,Z=d.get(H);if(Z){const ne=Z[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(A),Object.keys(Z).length===0&&d.delete(H)}n.remove(A)}function M(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const H=A.source,Z=d.get(H);delete Z[S.__cacheKey],o.memory.textures--}function w(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let ne=0;ne<S.__webglFramebuffer[Z].length;ne++)i.deleteFramebuffer(S.__webglFramebuffer[Z][ne]);else i.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[Z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=A.textures;for(let Z=0,ne=H.length;Z<ne;Z++){const Y=n.get(H[Z]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(H[Z])}n.remove(A)}let L=0;function B(){L=0}function O(){const A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function N(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function V(A,S){const H=n.get(A);if(A.isVideoTexture&&pe(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(H,A,S);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function z(A,S){const H=n.get(A);if(A.version>0&&H.__version!==A.version){j(H,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function q(A,S){const H=n.get(A);if(A.version>0&&H.__version!==A.version){j(H,A,S);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function G(A,S){const H=n.get(A);if(A.version>0&&H.__version!==A.version){ce(H,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}const oe={[yc]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[Mc]:i.MIRRORED_REPEAT},ue={[en]:i.NEAREST,[Lp]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[Hn]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},ge={[Up]:i.NEVER,[Hp]:i.ALWAYS,[Np]:i.LESS,[Rd]:i.LEQUAL,[Fp]:i.EQUAL,[zp]:i.GEQUAL,[Op]:i.GREATER,[Bp]:i.NOTEQUAL};function Se(A,S){if(S.type===kn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Hn||S.magFilter===fa||S.magFilter===Fr||S.magFilter===ji||S.minFilter===Hn||S.minFilter===fa||S.minFilter===Fr||S.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,oe[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,oe[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,oe[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ue[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ue[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===en||S.minFilter!==Fr&&S.minFilter!==ji||S.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Oe(A,S){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",E));const Z=S.source;let ne=d.get(Z);ne===void 0&&(ne={},d.set(Z,ne));const Y=N(S);if(Y!==A.__cacheKey){ne[Y]===void 0&&(ne[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[Y].usedTimes++;const Ee=ne[A.__cacheKey];Ee!==void 0&&(ne[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&M(S)),A.__cacheKey=Y,A.__webglTexture=ne[Y].texture}return H}function j(A,S,H){let Z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=i.TEXTURE_3D);const ne=Oe(A,S),Y=S.source;t.bindTexture(Z,A.__webglTexture,i.TEXTURE0+H);const Ee=n.get(Y);if(Y.version!==Ee.__version||ne===!0){t.activeTexture(i.TEXTURE0+H);const Pe=at.getPrimaries(at.workingColorSpace),Ie=S.colorSpace===Mi?null:at.getPrimaries(S.colorSpace),We=S.colorSpace===Mi||Pe===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Te=v(S.image,!1,s.maxTextureSize);Te=xe(S,Te);const J=r.convert(S.format,S.colorSpace),re=r.convert(S.type);let we=x(S.internalFormat,J,re,S.colorSpace,S.isVideoTexture);Se(Z,S);let Me;const He=S.mipmaps,qe=S.isVideoTexture!==!0,Ae=Ee.__version===void 0||ne===!0,U=Y.dataReady,_e=I(S,Te);if(S.isDepthTexture)we=_(S.format===Fs,S.type),Ae&&(qe?t.texStorage2D(i.TEXTURE_2D,1,we,Te.width,Te.height):t.texImage2D(i.TEXTURE_2D,0,we,Te.width,Te.height,0,J,re,null));else if(S.isDataTexture)if(He.length>0){qe&&Ae&&t.texStorage2D(i.TEXTURE_2D,_e,we,He[0].width,He[0].height);for(let K=0,ae=He.length;K<ae;K++)Me=He[K],qe?U&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,J,re,Me.data):t.texImage2D(i.TEXTURE_2D,K,we,Me.width,Me.height,0,J,re,Me.data);S.generateMipmaps=!1}else qe?(Ae&&t.texStorage2D(i.TEXTURE_2D,_e,we,Te.width,Te.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te.width,Te.height,J,re,Te.data)):t.texImage2D(i.TEXTURE_2D,0,we,Te.width,Te.height,0,J,re,Te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,we,He[0].width,He[0].height,Te.depth);for(let K=0,ae=He.length;K<ae;K++)if(Me=He[K],S.format!==wn)if(J!==null)if(qe){if(U)if(S.layerUpdates.size>0){const ye=ou(Me.width,Me.height,S.format,S.type);for(const De of S.layerUpdates){const Ke=Me.data.subarray(De*ye/Me.data.BYTES_PER_ELEMENT,(De+1)*ye/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,De,Me.width,Me.height,1,J,Ke)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,Te.depth,J,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,we,Me.width,Me.height,Te.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,Te.depth,J,re,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,we,Me.width,Me.height,Te.depth,0,J,re,Me.data)}else{qe&&Ae&&t.texStorage2D(i.TEXTURE_2D,_e,we,He[0].width,He[0].height);for(let K=0,ae=He.length;K<ae;K++)Me=He[K],S.format!==wn?J!==null?qe?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,J,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,K,we,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?U&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,J,re,Me.data):t.texImage2D(i.TEXTURE_2D,K,we,Me.width,Me.height,0,J,re,Me.data)}else if(S.isDataArrayTexture)if(qe){if(Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,we,Te.width,Te.height,Te.depth),U)if(S.layerUpdates.size>0){const K=ou(Te.width,Te.height,S.format,S.type);for(const ae of S.layerUpdates){const ye=Te.data.subarray(ae*K/Te.data.BYTES_PER_ELEMENT,(ae+1)*K/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,Te.width,Te.height,1,J,re,ye)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,J,re,Te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,Te.width,Te.height,Te.depth,0,J,re,Te.data);else if(S.isData3DTexture)qe?(Ae&&t.texStorage3D(i.TEXTURE_3D,_e,we,Te.width,Te.height,Te.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,J,re,Te.data)):t.texImage3D(i.TEXTURE_3D,0,we,Te.width,Te.height,Te.depth,0,J,re,Te.data);else if(S.isFramebufferTexture){if(Ae)if(qe)t.texStorage2D(i.TEXTURE_2D,_e,we,Te.width,Te.height);else{let K=Te.width,ae=Te.height;for(let ye=0;ye<_e;ye++)t.texImage2D(i.TEXTURE_2D,ye,we,K,ae,0,J,re,null),K>>=1,ae>>=1}}else if(He.length>0){if(qe&&Ae){const K=fe(He[0]);t.texStorage2D(i.TEXTURE_2D,_e,we,K.width,K.height)}for(let K=0,ae=He.length;K<ae;K++)Me=He[K],qe?U&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,J,re,Me):t.texImage2D(i.TEXTURE_2D,K,we,J,re,Me);S.generateMipmaps=!1}else if(qe){if(Ae){const K=fe(Te);t.texStorage2D(i.TEXTURE_2D,_e,we,K.width,K.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J,re,Te)}else t.texImage2D(i.TEXTURE_2D,0,we,J,re,Te);m(S)&&p(Z),Ee.__version=Y.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ce(A,S,H){if(S.image.length!==6)return;const Z=Oe(A,S),ne=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);const Y=n.get(ne);if(ne.version!==Y.__version||Z===!0){t.activeTexture(i.TEXTURE0+H);const Ee=at.getPrimaries(at.workingColorSpace),Pe=S.colorSpace===Mi?null:at.getPrimaries(S.colorSpace),Ie=S.colorSpace===Mi||Ee===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const We=S.isCompressedTexture||S.image[0].isCompressedTexture,Te=S.image[0]&&S.image[0].isDataTexture,J=[];for(let ae=0;ae<6;ae++)!We&&!Te?J[ae]=v(S.image[ae],!0,s.maxCubemapSize):J[ae]=Te?S.image[ae].image:S.image[ae],J[ae]=xe(S,J[ae]);const re=J[0],we=r.convert(S.format,S.colorSpace),Me=r.convert(S.type),He=x(S.internalFormat,we,Me,S.colorSpace),qe=S.isVideoTexture!==!0,Ae=Y.__version===void 0||Z===!0,U=ne.dataReady;let _e=I(S,re);Se(i.TEXTURE_CUBE_MAP,S);let K;if(We){qe&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,He,re.width,re.height);for(let ae=0;ae<6;ae++){K=J[ae].mipmaps;for(let ye=0;ye<K.length;ye++){const De=K[ye];S.format!==wn?we!==null?qe?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,0,0,De.width,De.height,we,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,He,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,0,0,De.width,De.height,we,Me,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,He,De.width,De.height,0,we,Me,De.data)}}}else{if(K=S.mipmaps,qe&&Ae){K.length>0&&_e++;const ae=fe(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,He,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Te){qe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,J[ae].width,J[ae].height,we,Me,J[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,He,J[ae].width,J[ae].height,0,we,Me,J[ae].data);for(let ye=0;ye<K.length;ye++){const Ke=K[ye].image[ae].image;qe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,0,0,Ke.width,Ke.height,we,Me,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,He,Ke.width,Ke.height,0,we,Me,Ke.data)}}else{qe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,we,Me,J[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,He,we,Me,J[ae]);for(let ye=0;ye<K.length;ye++){const De=K[ye];qe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,0,0,we,Me,De.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,He,we,Me,De.image[ae])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),Y.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ve(A,S,H,Z,ne,Y){const Ee=r.convert(H.format,H.colorSpace),Pe=r.convert(H.type),Ie=x(H.internalFormat,Ee,Pe,H.colorSpace),We=n.get(S),Te=n.get(H);if(Te.__renderTarget=S,!We.__hasExternalTextures){const J=Math.max(1,S.width>>Y),re=Math.max(1,S.height>>Y);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,Y,Ie,J,re,S.depth,0,Ee,Pe,null):t.texImage2D(ne,Y,Ie,J,re,0,Ee,Pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),he(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ne,Te.__webglTexture,0,ie(S)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ne,Te.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(A,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const Z=S.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,Y=_(S.stencilBuffer,ne),Ee=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=ie(S);he(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,Y,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,A)}else{const Z=S.textures;for(let ne=0;ne<Z.length;ne++){const Y=Z[ne],Ee=r.convert(Y.format,Y.colorSpace),Pe=r.convert(Y.type),Ie=x(Y.internalFormat,Ee,Pe,Y.colorSpace),We=ie(S);H&&he(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Ie,S.width,S.height):he(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We,Ie,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const ne=Z.__webglTexture,Y=ie(S);if(S.depthTexture.format===Ls)he(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(S.depthTexture.format===Fs)he(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ze(A){const S=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=Z}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ke(S.__webglFramebuffer,A)}else if(H){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=i.createRenderbuffer(),de(S.__webglDepthbuffer[Z],A,!1);else{const ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),de(S.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(A,S,H){const Z=n.get(A);S!==void 0&&ve(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ze(A)}function Ce(A){const S=A.texture,H=n.get(A),Z=n.get(S);A.addEventListener("dispose",T);const ne=A.textures,Y=A.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=S.version,o.memory.textures++),Y){H.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[Pe]=[];for(let Ie=0;Ie<S.mipmaps.length;Ie++)H.__webglFramebuffer[Pe][Ie]=i.createFramebuffer()}else H.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let Pe=0;Pe<S.mipmaps.length;Pe++)H.__webglFramebuffer[Pe]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let Pe=0,Ie=ne.length;Pe<Ie;Pe++){const We=n.get(ne[Pe]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&he(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Pe=0;Pe<ne.length;Pe++){const Ie=ne[Pe];H.__webglColorRenderbuffer[Pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Pe]);const We=r.convert(Ie.format,Ie.colorSpace),Te=r.convert(Ie.type),J=x(Ie.internalFormat,We,Te,Ie.colorSpace,A.isXRRenderTarget===!0),re=ie(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,J,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,H.__webglColorRenderbuffer[Pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),de(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Se(i.TEXTURE_CUBE_MAP,S);for(let Pe=0;Pe<6;Pe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ie=0;Ie<S.mipmaps.length;Ie++)ve(H.__webglFramebuffer[Pe][Ie],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ie);else ve(H.__webglFramebuffer[Pe],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let Pe=0,Ie=ne.length;Pe<Ie;Pe++){const We=ne[Pe],Te=n.get(We);t.bindTexture(i.TEXTURE_2D,Te.__webglTexture),Se(i.TEXTURE_2D,We),ve(H.__webglFramebuffer,A,We,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,0),m(We)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Pe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Z.__webglTexture),Se(Pe,S),S.mipmaps&&S.mipmaps.length>0)for(let Ie=0;Ie<S.mipmaps.length;Ie++)ve(H.__webglFramebuffer[Ie],A,S,i.COLOR_ATTACHMENT0,Pe,Ie);else ve(H.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,Pe,0);m(S)&&p(Pe),t.unbindTexture()}A.depthBuffer&&ze(A)}function X(A){const S=A.textures;for(let H=0,Z=S.length;H<Z;H++){const ne=S[H];if(m(ne)){const Y=y(A),Ee=n.get(ne).__webglTexture;t.bindTexture(Y,Ee),p(Y),t.unbindTexture()}}}const te=[],P=[];function Le(A){if(A.samples>0){if(he(A)===!1){const S=A.textures,H=A.width,Z=A.height;let ne=i.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(A),Pe=S.length>1;if(Pe)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),Pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ie]);const We=n.get(S[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,ne,i.NEAREST),c===!0&&(te.length=0,P.length=0,te.push(i.COLOR_ATTACHMENT0+Ie),A.depthBuffer&&A.resolveDepthBuffer===!1&&(te.push(Y),P.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Pe)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ie]);const We=n.get(S[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ie(A){return Math.min(s.maxSamples,A.samples)}function he(A){const S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pe(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function xe(A,S){const H=A.colorSpace,Z=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Gs&&H!==Mi&&(at.getTransfer(H)===yt?(Z!==wn||ne!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function fe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=G,this.rebindTextures=Fe,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=he}function sx(i,e){function t(n,s=Mi){let r;const o=at.getTransfer(s);if(n===hi)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_d)return i.BYTE;if(n===xd)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===vl)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===yd)return i.ALPHA;if(n===Md)return i.RGB;if(n===wn)return i.RGBA;if(n===bd)return i.LUMINANCE;if(n===Sd)return i.LUMINANCE_ALPHA;if(n===Ls)return i.DEPTH_COMPONENT;if(n===Fs)return i.DEPTH_STENCIL;if(n===wl)return i.RED;if(n===yl)return i.RED_INTEGER;if(n===Ed)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===bo||n===So||n===Eo||n===To)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===Sc||n===Ec||n===Tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ac||n===Cc||n===Rc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ac||n===Cc)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pc||n===Lc||n===Ic||n===Dc||n===kc||n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===zc||n===Hc||n===Vc||n===Gc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ic)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ao||n===Wc||n===$c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ao)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Td||n===Xc||n===jc||n===qc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class rx extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class me extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ox={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ox)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new me;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cx=`
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

}`;class lx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new qt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new jt({vertexShader:ax,fragmentShader:cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new b(new $s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hx extends Ws{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new lx,m=t.getContextAttributes();let p=null,y=null;const x=[],_=[],I=new Re;let E=null;const T=new on;T.viewport=new vt;const R=new on;R.viewport=new vt;const M=[T,R],w=new rx;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ce=x[j];return ce===void 0&&(ce=new Ha,x[j]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(j){let ce=x[j];return ce===void 0&&(ce=new Ha,x[j]=ce),ce.getGripSpace()},this.getHand=function(j){let ce=x[j];return ce===void 0&&(ce=new Ha,x[j]=ce),ce.getHandSpace()};function O(j){const ce=_.indexOf(j.inputSource);if(ce===-1)return;const ve=x[ce];ve!==void 0&&(ve.update(j.inputSource,j.frame,l||o),ve.dispatchEvent({type:j.type,data:j.inputSource}))}function N(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",V);for(let j=0;j<x.length;j++){const ce=_[j];ce!==null&&(_[j]=null,x[j].disconnect(ce))}L=null,B=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",N),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new vn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ce=null,ve=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?Fs:Ls,ve=m.stencil?Ns:Zi);const ke={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new vn(d.textureWidth,d.textureHeight,{format:wn,type:hi,depthTexture:new Uo(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V(j){for(let ce=0;ce<j.removed.length;ce++){const ve=j.removed[ce],de=_.indexOf(ve);de>=0&&(_[de]=null,x[de].disconnect(ve))}for(let ce=0;ce<j.added.length;ce++){const ve=j.added[ce];let de=_.indexOf(ve);if(de===-1){for(let ze=0;ze<x.length;ze++)if(ze>=_.length){_.push(ve),de=ze;break}else if(_[ze]===null){_[ze]=ve,de=ze;break}if(de===-1)break}const ke=x[de];ke&&ke.connect(ve)}}const z=new k,q=new k;function G(j,ce,ve){z.setFromMatrixPosition(ce.matrixWorld),q.setFromMatrixPosition(ve.matrixWorld);const de=z.distanceTo(q),ke=ce.projectionMatrix.elements,ze=ve.projectionMatrix.elements,Fe=ke[14]/(ke[10]-1),Ce=ke[14]/(ke[10]+1),X=(ke[9]+1)/ke[5],te=(ke[9]-1)/ke[5],P=(ke[8]-1)/ke[0],Le=(ze[8]+1)/ze[0],ie=Fe*P,he=Fe*Le,pe=de/(-P+Le),xe=pe*-P;if(ce.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(xe),j.translateZ(pe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ke[10]===-1)j.projectionMatrix.copy(ce.projectionMatrix),j.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const fe=Fe+pe,A=Ce+pe,S=ie-xe,H=he+(de-xe),Z=X*Ce/A*fe,ne=te*Ce/A*fe;j.projectionMatrix.makePerspective(S,H,Z,ne,fe,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function oe(j,ce){ce===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ce.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ce=j.near,ve=j.far;v.texture!==null&&(v.depthNear>0&&(ce=v.depthNear),v.depthFar>0&&(ve=v.depthFar)),w.near=R.near=T.near=ce,w.far=R.far=T.far=ve,(L!==w.near||B!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,B=w.far),T.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,w.layers.mask=T.layers.mask|R.layers.mask;const de=j.parent,ke=w.cameras;oe(w,de);for(let ze=0;ze<ke.length;ze++)oe(ke[ze],de);ke.length===2?G(w,T,R):w.projectionMatrix.copy(T.projectionMatrix),ue(j,w,de)};function ue(j,ce,ve){ve===null?j.matrix.copy(ce.matrixWorld):(j.matrix.copy(ve.matrixWorld),j.matrix.invert(),j.matrix.multiply(ce.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ce.projectionMatrix),j.projectionMatrixInverse.copy(ce.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Os*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(w)};let ge=null;function Se(j,ce){if(h=ce.getViewerPose(l||o),g=ce,h!==null){const ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let de=!1;ve.length!==w.cameras.length&&(w.cameras.length=0,de=!0);for(let ze=0;ze<ve.length;ze++){const Fe=ve[ze];let Ce=null;if(f!==null)Ce=f.getViewport(Fe);else{const te=u.getViewSubImage(d,Fe);Ce=te.viewport,ze===0&&(e.setRenderTargetTextures(y,te.colorTexture,d.ignoreDepthValues?void 0:te.depthStencilTexture),e.setRenderTarget(y))}let X=M[ze];X===void 0&&(X=new on,X.layers.enable(ze),X.viewport=new vt,M[ze]=X),X.matrix.fromArray(Fe.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(Fe.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ze===0&&(w.matrix.copy(X.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),de===!0&&w.cameras.push(X)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const ze=u.getDepthInformation(ve[0]);ze&&ze.isValid&&ze.texture&&v.init(e,ze,s.renderState)}}for(let ve=0;ve<x.length;ve++){const de=_[ve],ke=x[ve];de!==null&&ke!==void 0&&ke.update(de,ce,l||o)}ge&&ge(j,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),g=null}const Oe=new Bd;Oe.setAnimationLoop(Se),this.setAnimationLoop=function(j){ge=j},this.dispose=function(){}}}const Ni=new Fn,ux=new nt;function dx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,_=y.envMapRotation;x&&(m.envMap.value=x,Ni.copy(_),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(ux.makeRotationFromEuler(Ni)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fx(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const _=x.program;n.uniformBlockBinding(y,_)}function l(y,x){let _=s[y.id];_===void 0&&(g(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",m));const I=x.program;n.updateUBOMapping(y,I);const E=e.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function h(y){const x=u();y.__bindingPointIndex=x;const _=i.createBuffer(),I=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=s[y.id],_=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,T=_.length;E<T;E++){const R=Array.isArray(_[E])?_[E]:[_[E]];for(let M=0,w=R.length;M<w;M++){const L=R[M];if(f(L,E,M,I)===!0){const B=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let N=0;for(let V=0;V<O.length;V++){const z=O[V],q=v(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,B+N,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,_,I){const E=y.value,T=x+"_"+_;if(I[T]===void 0)return typeof E=="number"||typeof E=="boolean"?I[T]=E:I[T]=E.clone(),!0;{const R=I[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return I[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(y){const x=y.uniforms;let _=0;const I=16;for(let T=0,R=x.length;T<R;T++){const M=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,L=M.length;w<L;w++){const B=M[w],O=Array.isArray(B.value)?B.value:[B.value];for(let N=0,V=O.length;N<V;N++){const z=O[N],q=v(z),G=_%I,oe=G%q.boundary,ue=G+oe;_+=oe,ue!==0&&I-ue<q.storage&&(_+=I-ue),B.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=q.storage}}}const E=_%I;return E>0&&(_+=I-E),y.__size=_,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class px{constructor(e={}){const{canvas:t=sm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=Ti,this.toneMappingExposure=1;const _=this;let I=!1,E=0,T=0,R=null,M=-1,w=null;const L=new vt,B=new vt;let O=null;const N=new Ne(0);let V=0,z=t.width,q=t.height,G=1,oe=null,ue=null;const ge=new vt(0,0,z,q),Se=new vt(0,0,z,q);let Oe=!1;const j=new Tl;let ce=!1,ve=!1;const de=new nt,ke=new nt,ze=new k,Fe=new vt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let X=!1;function te(){return R===null?G:1}let P=n;function Le(C,W){return t.getContext(C,W)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pl}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",De,!1),P===null){const W="webgl2";if(P=Le(W,C),P===null)throw Le(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ie,he,pe,xe,fe,A,S,H,Z,ne,Y,Ee,Pe,Ie,We,Te,J,re,we,Me,He,qe,Ae,U;function _e(){ie=new wv(P),ie.init(),qe=new sx(P,ie),he=new pv(P,ie,e,qe),pe=new tx(P,ie),he.reverseDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),xe=new bv(P),fe=new H_,A=new ix(P,ie,pe,fe,he,qe,xe),S=new gv(_),H=new xv(_),Z=new Pm(P),Ae=new dv(P,Z),ne=new yv(P,Z,xe,Ae),Y=new Ev(P,ne,Z,xe),we=new Sv(P,he,A),Te=new mv(fe),Ee=new z_(_,S,H,ie,he,Ae,Te),Pe=new dx(_,fe),Ie=new G_,We=new Y_(ie),re=new uv(_,S,H,pe,Y,f,c),J=new Q_(_,Y,he),U=new fx(P,xe,he,pe),Me=new fv(P,ie,xe),He=new Mv(P,ie,xe),xe.programs=Ee.programs,_.capabilities=he,_.extensions=ie,_.properties=fe,_.renderLists=Ie,_.shadowMap=J,_.state=pe,_.info=xe}_e();const K=new hx(_,P);this.xr=K,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const C=ie.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ie.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(z,q,!1))},this.getSize=function(C){return C.set(z,q)},this.setSize=function(C,W,Q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,q=W,t.width=Math.floor(C*G),t.height=Math.floor(W*G),Q===!0&&(t.style.width=C+"px",t.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(z*G,q*G).floor()},this.setDrawingBufferSize=function(C,W,Q){z=C,q=W,G=Q,t.width=Math.floor(C*Q),t.height=Math.floor(W*Q),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(ge)},this.setViewport=function(C,W,Q,ee){C.isVector4?ge.set(C.x,C.y,C.z,C.w):ge.set(C,W,Q,ee),pe.viewport(L.copy(ge).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(Se)},this.setScissor=function(C,W,Q,ee){C.isVector4?Se.set(C.x,C.y,C.z,C.w):Se.set(C,W,Q,ee),pe.scissor(B.copy(Se).multiplyScalar(G).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(C){pe.setScissorTest(Oe=C)},this.setOpaqueSort=function(C){oe=C},this.setTransparentSort=function(C){ue=C},this.getClearColor=function(C){return C.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(C=!0,W=!0,Q=!0){let ee=0;if(C){let $=!1;if(R!==null){const Ue=R.texture.format;$=Ue===bl||Ue===Ml||Ue===yl}if($){const Ue=R.texture.type,Ge=Ue===hi||Ue===Zi||Ue===_r||Ue===Ns||Ue===_l||Ue===xl,$e=re.getClearColor(),Xe=re.getClearAlpha(),Ze=$e.r,et=$e.g,je=$e.b;Ge?(g[0]=Ze,g[1]=et,g[2]=je,g[3]=Xe,P.clearBufferuiv(P.COLOR,0,g)):(v[0]=Ze,v[1]=et,v[2]=je,v[3]=Xe,P.clearBufferiv(P.COLOR,0,v))}else ee|=P.COLOR_BUFFER_BIT}W&&(ee|=P.DEPTH_BUFFER_BIT),Q&&(ee|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Ie.dispose(),We.dispose(),fe.dispose(),S.dispose(),H.dispose(),Y.dispose(),Ae.dispose(),U.dispose(),Ee.dispose(),K.dispose(),K.removeEventListener("sessionstart",Jl),K.removeEventListener("sessionend",Zl),Pi.stop()};function ae(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const C=xe.autoReset,W=J.enabled,Q=J.autoUpdate,ee=J.needsUpdate,$=J.type;_e(),xe.autoReset=C,J.enabled=W,J.autoUpdate=Q,J.needsUpdate=ee,J.type=$}function De(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ke(C){const W=C.target;W.removeEventListener("dispose",Ke),mt(W)}function mt(C){Je(C),fe.remove(C)}function Je(C){const W=fe.get(C).programs;W!==void 0&&(W.forEach(function(Q){Ee.releaseProgram(Q)}),C.isShaderMaterial&&Ee.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,Q,ee,$,Ue){W===null&&(W=Ce);const Ge=$.isMesh&&$.matrixWorld.determinant()<0,$e=ep(C,W,Q,ee,$);pe.setMaterial(ee,Ge);let Xe=Q.index,Ze=1;if(ee.wireframe===!0){if(Xe=ne.getWireframeAttribute(Q),Xe===void 0)return;Ze=2}const et=Q.drawRange,je=Q.attributes.position;let ut=et.start*Ze,Et=(et.start+et.count)*Ze;Ue!==null&&(ut=Math.max(ut,Ue.start*Ze),Et=Math.min(Et,(Ue.start+Ue.count)*Ze)),Xe!==null?(ut=Math.max(ut,0),Et=Math.min(Et,Xe.count)):je!=null&&(ut=Math.max(ut,0),Et=Math.min(Et,je.count));const Tt=Et-ut;if(Tt<0||Tt===1/0)return;Ae.setup($,ee,$e,Q,Xe);let nn,_t=Me;if(Xe!==null&&(nn=Z.get(Xe),_t=He,_t.setIndex(nn)),$.isMesh)ee.wireframe===!0?(pe.setLineWidth(ee.wireframeLinewidth*te()),_t.setMode(P.LINES)):_t.setMode(P.TRIANGLES);else if($.isLine){let Ye=ee.linewidth;Ye===void 0&&(Ye=1),pe.setLineWidth(Ye*te()),$.isLineSegments?_t.setMode(P.LINES):$.isLineLoop?_t.setMode(P.LINE_LOOP):_t.setMode(P.LINE_STRIP)}else $.isPoints?_t.setMode(P.POINTS):$.isSprite&&_t.setMode(P.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)_t.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))_t.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ye=$._multiDrawStarts,Yn=$._multiDrawCounts,xt=$._multiDrawCount,An=Xe?Z.get(Xe).bytesPerElement:1,cs=fe.get(ee).currentProgram.getUniforms();for(let un=0;un<xt;un++)cs.setValue(P,"_gl_DrawID",un),_t.render(Ye[un]/An,Yn[un])}else if($.isInstancedMesh)_t.renderInstances(ut,Tt,$.count);else if(Q.isInstancedBufferGeometry){const Ye=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Yn=Math.min(Q.instanceCount,Ye);_t.renderInstances(ut,Tt,Yn)}else _t.render(ut,Tt)};function gt(C,W,Q){C.transparent===!0&&C.side===si&&C.forceSinglePass===!1?(C.side=cn,C.needsUpdate=!0,Nr(C,W,Q),C.side=Ci,C.needsUpdate=!0,Nr(C,W,Q),C.side=si):Nr(C,W,Q)}this.compile=function(C,W,Q=null){Q===null&&(Q=C),p=We.get(Q),p.init(W),x.push(p),Q.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),C!==Q&&C.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();const ee=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ue=$.material;if(Ue)if(Array.isArray(Ue))for(let Ge=0;Ge<Ue.length;Ge++){const $e=Ue[Ge];gt($e,Q,$),ee.add($e)}else gt(Ue,Q,$),ee.add(Ue)}),x.pop(),p=null,ee},this.compileAsync=function(C,W,Q=null){const ee=this.compile(C,W,Q);return new Promise($=>{function Ue(){if(ee.forEach(function(Ge){fe.get(Ge).currentProgram.isReady()&&ee.delete(Ge)}),ee.size===0){$(C);return}setTimeout(Ue,10)}ie.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Tn=null;function qn(C){Tn&&Tn(C)}function Jl(){Pi.stop()}function Zl(){Pi.start()}const Pi=new Bd;Pi.setAnimationLoop(qn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(C){Tn=C,K.setAnimationLoop(C),C===null?Pi.stop():Pi.start()},K.addEventListener("sessionstart",Jl),K.addEventListener("sessionend",Zl),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(W),W=K.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,W,R),p=We.get(C,x.length),p.init(W),x.push(p),ke.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),j.setFromProjectionMatrix(ke),ve=this.localClippingEnabled,ce=Te.init(this.clippingPlanes,ve),m=Ie.get(C,y.length),m.init(),y.push(m),K.enabled===!0&&K.isPresenting===!0){const Ue=_.xr.getDepthSensingMesh();Ue!==null&&da(Ue,W,-1/0,_.sortObjects)}da(C,W,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(oe,ue),X=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,X&&re.addToRenderList(m,C),this.info.render.frame++,ce===!0&&Te.beginShadows();const Q=p.state.shadowsArray;J.render(Q,C,W),ce===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=m.opaque,$=m.transmissive;if(p.setupLights(),W.isArrayCamera){const Ue=W.cameras;if($.length>0)for(let Ge=0,$e=Ue.length;Ge<$e;Ge++){const Xe=Ue[Ge];eh(ee,$,C,Xe)}X&&re.render(C);for(let Ge=0,$e=Ue.length;Ge<$e;Ge++){const Xe=Ue[Ge];Ql(m,C,Xe,Xe.viewport)}}else $.length>0&&eh(ee,$,C,W),X&&re.render(C),Ql(m,C,W);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(_,C,W),Ae.resetDefaultState(),M=-1,w=null,x.pop(),x.length>0?(p=x[x.length-1],ce===!0&&Te.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function da(C,W,Q,ee){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||j.intersectsSprite(C)){ee&&Fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ke);const Ge=Y.update(C),$e=C.material;$e.visible&&m.push(C,Ge,$e,Q,Fe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||j.intersectsObject(C))){const Ge=Y.update(C),$e=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Fe.copy(C.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),Fe.copy(Ge.boundingSphere.center)),Fe.applyMatrix4(C.matrixWorld).applyMatrix4(ke)),Array.isArray($e)){const Xe=Ge.groups;for(let Ze=0,et=Xe.length;Ze<et;Ze++){const je=Xe[Ze],ut=$e[je.materialIndex];ut&&ut.visible&&m.push(C,Ge,ut,Q,Fe.z,je)}}else $e.visible&&m.push(C,Ge,$e,Q,Fe.z,null)}}const Ue=C.children;for(let Ge=0,$e=Ue.length;Ge<$e;Ge++)da(Ue[Ge],W,Q,ee)}function Ql(C,W,Q,ee){const $=C.opaque,Ue=C.transmissive,Ge=C.transparent;p.setupLightsView(Q),ce===!0&&Te.setGlobalState(_.clippingPlanes,Q),ee&&pe.viewport(L.copy(ee)),$.length>0&&Ur($,W,Q),Ue.length>0&&Ur(Ue,W,Q),Ge.length>0&&Ur(Ge,W,Q),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function eh(C,W,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new vn(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Vn:hi,minFilter:ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const Ue=p.state.transmissionRenderTarget[ee.id],Ge=ee.viewport||L;Ue.setSize(Ge.z,Ge.w);const $e=_.getRenderTarget();_.setRenderTarget(Ue),_.getClearColor(N),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),X&&re.render(Q);const Xe=_.toneMapping;_.toneMapping=Ti;const Ze=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),ce===!0&&Te.setGlobalState(_.clippingPlanes,ee),Ur(C,Q,ee),A.updateMultisampleRenderTarget(Ue),A.updateRenderTargetMipmap(Ue),ie.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let je=0,ut=W.length;je<ut;je++){const Et=W[je],Tt=Et.object,nn=Et.geometry,_t=Et.material,Ye=Et.group;if(_t.side===si&&Tt.layers.test(ee.layers)){const Yn=_t.side;_t.side=cn,_t.needsUpdate=!0,th(Tt,Q,ee,nn,_t,Ye),_t.side=Yn,_t.needsUpdate=!0,et=!0}}et===!0&&(A.updateMultisampleRenderTarget(Ue),A.updateRenderTargetMipmap(Ue))}_.setRenderTarget($e),_.setClearColor(N,V),Ze!==void 0&&(ee.viewport=Ze),_.toneMapping=Xe}function Ur(C,W,Q){const ee=W.isScene===!0?W.overrideMaterial:null;for(let $=0,Ue=C.length;$<Ue;$++){const Ge=C[$],$e=Ge.object,Xe=Ge.geometry,Ze=ee===null?Ge.material:ee,et=Ge.group;$e.layers.test(Q.layers)&&th($e,W,Q,Xe,Ze,et)}}function th(C,W,Q,ee,$,Ue){C.onBeforeRender(_,W,Q,ee,$,Ue),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(_,W,Q,ee,C,Ue),$.transparent===!0&&$.side===si&&$.forceSinglePass===!1?($.side=cn,$.needsUpdate=!0,_.renderBufferDirect(Q,W,ee,$,C,Ue),$.side=Ci,$.needsUpdate=!0,_.renderBufferDirect(Q,W,ee,$,C,Ue),$.side=si):_.renderBufferDirect(Q,W,ee,$,C,Ue),C.onAfterRender(_,W,Q,ee,$,Ue)}function Nr(C,W,Q){W.isScene!==!0&&(W=Ce);const ee=fe.get(C),$=p.state.lights,Ue=p.state.shadowsArray,Ge=$.state.version,$e=Ee.getParameters(C,$.state,Ue,W,Q),Xe=Ee.getProgramCacheKey($e);let Ze=ee.programs;ee.environment=C.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(C.isMeshStandardMaterial?H:S).get(C.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Ze===void 0&&(C.addEventListener("dispose",Ke),Ze=new Map,ee.programs=Ze);let et=Ze.get(Xe);if(et!==void 0){if(ee.currentProgram===et&&ee.lightsStateVersion===Ge)return ih(C,$e),et}else $e.uniforms=Ee.getUniforms(C),C.onBeforeCompile($e,_),et=Ee.acquireProgram($e,Xe),Ze.set(Xe,et),ee.uniforms=$e.uniforms;const je=ee.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=Te.uniform),ih(C,$e),ee.needsLights=np(C),ee.lightsStateVersion=Ge,ee.needsLights&&(je.ambientLightColor.value=$.state.ambient,je.lightProbe.value=$.state.probe,je.directionalLights.value=$.state.directional,je.directionalLightShadows.value=$.state.directionalShadow,je.spotLights.value=$.state.spot,je.spotLightShadows.value=$.state.spotShadow,je.rectAreaLights.value=$.state.rectArea,je.ltc_1.value=$.state.rectAreaLTC1,je.ltc_2.value=$.state.rectAreaLTC2,je.pointLights.value=$.state.point,je.pointLightShadows.value=$.state.pointShadow,je.hemisphereLights.value=$.state.hemi,je.directionalShadowMap.value=$.state.directionalShadowMap,je.directionalShadowMatrix.value=$.state.directionalShadowMatrix,je.spotShadowMap.value=$.state.spotShadowMap,je.spotLightMatrix.value=$.state.spotLightMatrix,je.spotLightMap.value=$.state.spotLightMap,je.pointShadowMap.value=$.state.pointShadowMap,je.pointShadowMatrix.value=$.state.pointShadowMatrix),ee.currentProgram=et,ee.uniformsList=null,et}function nh(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Co.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function ih(C,W){const Q=fe.get(C);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function ep(C,W,Q,ee,$){W.isScene!==!0&&(W=Ce),A.resetTextureUnits();const Ue=W.fog,Ge=ee.isMeshStandardMaterial?W.environment:null,$e=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Gs,Xe=(ee.isMeshStandardMaterial?H:S).get(ee.envMap||Ge),Ze=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,et=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),je=!!Q.morphAttributes.position,ut=!!Q.morphAttributes.normal,Et=!!Q.morphAttributes.color;let Tt=Ti;ee.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Tt=_.toneMapping);const nn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_t=nn!==void 0?nn.length:0,Ye=fe.get(ee),Yn=p.state.lights;if(ce===!0&&(ve===!0||C!==w)){const _n=C===w&&ee.id===M;Te.setState(ee,C,_n)}let xt=!1;ee.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Yn.state.version||Ye.outputColorSpace!==$e||$.isBatchedMesh&&Ye.batching===!1||!$.isBatchedMesh&&Ye.batching===!0||$.isBatchedMesh&&Ye.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ye.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ye.instancing===!1||!$.isInstancedMesh&&Ye.instancing===!0||$.isSkinnedMesh&&Ye.skinning===!1||!$.isSkinnedMesh&&Ye.skinning===!0||$.isInstancedMesh&&Ye.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ye.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ye.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ye.instancingMorph===!1&&$.morphTexture!==null||Ye.envMap!==Xe||ee.fog===!0&&Ye.fog!==Ue||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Te.numPlanes||Ye.numIntersection!==Te.numIntersection)||Ye.vertexAlphas!==Ze||Ye.vertexTangents!==et||Ye.morphTargets!==je||Ye.morphNormals!==ut||Ye.morphColors!==Et||Ye.toneMapping!==Tt||Ye.morphTargetsCount!==_t)&&(xt=!0):(xt=!0,Ye.__version=ee.version);let An=Ye.currentProgram;xt===!0&&(An=Nr(ee,W,$));let cs=!1,un=!1,Ys=!1;const At=An.getUniforms(),On=Ye.uniforms;if(pe.useProgram(An.program)&&(cs=!0,un=!0,Ys=!0),ee.id!==M&&(M=ee.id,un=!0),cs||w!==C){pe.buffers.depth.getReversed()?(de.copy(C.projectionMatrix),om(de),am(de),At.setValue(P,"projectionMatrix",de)):At.setValue(P,"projectionMatrix",C.projectionMatrix),At.setValue(P,"viewMatrix",C.matrixWorldInverse);const di=At.map.cameraPosition;di!==void 0&&di.setValue(P,ze.setFromMatrixPosition(C.matrixWorld)),he.logarithmicDepthBuffer&&At.setValue(P,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&At.setValue(P,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,un=!0,Ys=!0)}if($.isSkinnedMesh){At.setOptional(P,$,"bindMatrix"),At.setOptional(P,$,"bindMatrixInverse");const _n=$.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),At.setValue(P,"boneTexture",_n.boneTexture,A))}$.isBatchedMesh&&(At.setOptional(P,$,"batchingTexture"),At.setValue(P,"batchingTexture",$._matricesTexture,A),At.setOptional(P,$,"batchingIdTexture"),At.setValue(P,"batchingIdTexture",$._indirectTexture,A),At.setOptional(P,$,"batchingColorTexture"),$._colorsTexture!==null&&At.setValue(P,"batchingColorTexture",$._colorsTexture,A));const Ks=Q.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0)&&we.update($,Q,An),(un||Ye.receiveShadow!==$.receiveShadow)&&(Ye.receiveShadow=$.receiveShadow,At.setValue(P,"receiveShadow",$.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(On.envMap.value=Xe,On.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&W.environment!==null&&(On.envMapIntensity.value=W.environmentIntensity),un&&(At.setValue(P,"toneMappingExposure",_.toneMappingExposure),Ye.needsLights&&tp(On,Ys),Ue&&ee.fog===!0&&Pe.refreshFogUniforms(On,Ue),Pe.refreshMaterialUniforms(On,ee,G,q,p.state.transmissionRenderTarget[C.id]),Co.upload(P,nh(Ye),On,A)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Co.upload(P,nh(Ye),On,A),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&At.setValue(P,"center",$.center),At.setValue(P,"modelViewMatrix",$.modelViewMatrix),At.setValue(P,"normalMatrix",$.normalMatrix),At.setValue(P,"modelMatrix",$.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const _n=ee.uniformsGroups;for(let di=0,fi=_n.length;di<fi;di++){const sh=_n[di];U.update(sh,An),U.bind(sh,An)}}return An}function tp(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function np(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,W,Q){fe.get(C.texture).__webglTexture=W,fe.get(C.depthTexture).__webglTexture=Q;const ee=fe.get(C);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const Q=fe.get(C);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,Q=0){R=C,E=W,T=Q;let ee=!0,$=null,Ue=!1,Ge=!1;if(C){const Xe=fe.get(C);if(Xe.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(P.FRAMEBUFFER,null),ee=!1;else if(Xe.__webglFramebuffer===void 0)A.setupRenderTarget(C);else if(Xe.__hasExternalTextures)A.rebindTextures(C,fe.get(C.texture).__webglTexture,fe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const je=C.depthTexture;if(Xe.__boundDepthTexture!==je){if(je!==null&&fe.has(je)&&(C.width!==je.image.width||C.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(C)}}const Ze=C.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ge=!0);const et=fe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(et[W])?$=et[W][Q]:$=et[W],Ue=!0):C.samples>0&&A.useMultisampledRTT(C)===!1?$=fe.get(C).__webglMultisampledFramebuffer:Array.isArray(et)?$=et[Q]:$=et,L.copy(C.viewport),B.copy(C.scissor),O=C.scissorTest}else L.copy(ge).multiplyScalar(G).floor(),B.copy(Se).multiplyScalar(G).floor(),O=Oe;if(pe.bindFramebuffer(P.FRAMEBUFFER,$)&&ee&&pe.drawBuffers(C,$),pe.viewport(L),pe.scissor(B),pe.setScissorTest(O),Ue){const Xe=fe.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+W,Xe.__webglTexture,Q)}else if(Ge){const Xe=fe.get(C.texture),Ze=W||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Xe.__webglTexture,Q||0,Ze)}M=-1},this.readRenderTargetPixels=function(C,W,Q,ee,$,Ue,Ge){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&($e=$e[Ge]),$e){pe.bindFramebuffer(P.FRAMEBUFFER,$e);try{const Xe=C.texture,Ze=Xe.format,et=Xe.type;if(!he.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-ee&&Q>=0&&Q<=C.height-$&&P.readPixels(W,Q,ee,$,qe.convert(Ze),qe.convert(et),Ue)}finally{const Xe=R!==null?fe.get(R).__webglFramebuffer:null;pe.bindFramebuffer(P.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(C,W,Q,ee,$,Ue,Ge){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&($e=$e[Ge]),$e){const Xe=C.texture,Ze=Xe.format,et=Xe.type;if(!he.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-ee&&Q>=0&&Q<=C.height-$){pe.bindFramebuffer(P.FRAMEBUFFER,$e);const je=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,je),P.bufferData(P.PIXEL_PACK_BUFFER,Ue.byteLength,P.STREAM_READ),P.readPixels(W,Q,ee,$,qe.convert(Ze),qe.convert(et),0);const ut=R!==null?fe.get(R).__webglFramebuffer:null;pe.bindFramebuffer(P.FRAMEBUFFER,ut);const Et=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await rm(P,Et,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,je),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Ue),P.deleteBuffer(je),P.deleteSync(Et),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,Q=0){C.isTexture!==!0&&(cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const ee=Math.pow(2,-Q),$=Math.floor(C.image.width*ee),Ue=Math.floor(C.image.height*ee),Ge=W!==null?W.x:0,$e=W!==null?W.y:0;A.setTexture2D(C,0),P.copyTexSubImage2D(P.TEXTURE_2D,Q,0,0,Ge,$e,$,Ue),pe.unbindTexture()},this.copyTextureToTexture=function(C,W,Q=null,ee=null,$=0){C.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,C=arguments[1],W=arguments[2],$=arguments[3]||0,Q=null);let Ue,Ge,$e,Xe,Ze,et,je,ut,Et;const Tt=C.isCompressedTexture?C.mipmaps[$]:C.image;Q!==null?(Ue=Q.max.x-Q.min.x,Ge=Q.max.y-Q.min.y,$e=Q.isBox3?Q.max.z-Q.min.z:1,Xe=Q.min.x,Ze=Q.min.y,et=Q.isBox3?Q.min.z:0):(Ue=Tt.width,Ge=Tt.height,$e=Tt.depth||1,Xe=0,Ze=0,et=0),ee!==null?(je=ee.x,ut=ee.y,Et=ee.z):(je=0,ut=0,Et=0);const nn=qe.convert(W.format),_t=qe.convert(W.type);let Ye;W.isData3DTexture?(A.setTexture3D(W,0),Ye=P.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(A.setTexture2DArray(W,0),Ye=P.TEXTURE_2D_ARRAY):(A.setTexture2D(W,0),Ye=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,W.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,W.unpackAlignment);const Yn=P.getParameter(P.UNPACK_ROW_LENGTH),xt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),An=P.getParameter(P.UNPACK_SKIP_PIXELS),cs=P.getParameter(P.UNPACK_SKIP_ROWS),un=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Tt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Tt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Xe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ze),P.pixelStorei(P.UNPACK_SKIP_IMAGES,et);const Ys=C.isDataArrayTexture||C.isData3DTexture,At=W.isDataArrayTexture||W.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const On=fe.get(C),Ks=fe.get(W),_n=fe.get(On.__renderTarget),di=fe.get(Ks.__renderTarget);pe.bindFramebuffer(P.READ_FRAMEBUFFER,_n.__webglFramebuffer),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let fi=0;fi<$e;fi++)Ys&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fe.get(C).__webglTexture,$,et+fi),C.isDepthTexture?(At&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fe.get(W).__webglTexture,$,Et+fi),P.blitFramebuffer(Xe,Ze,Ue,Ge,je,ut,Ue,Ge,P.DEPTH_BUFFER_BIT,P.NEAREST)):At?P.copyTexSubImage3D(Ye,$,je,ut,Et+fi,Xe,Ze,Ue,Ge):P.copyTexSubImage2D(Ye,$,je,ut,Et+fi,Xe,Ze,Ue,Ge);pe.bindFramebuffer(P.READ_FRAMEBUFFER,null),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else At?C.isDataTexture||C.isData3DTexture?P.texSubImage3D(Ye,$,je,ut,Et,Ue,Ge,$e,nn,_t,Tt.data):W.isCompressedArrayTexture?P.compressedTexSubImage3D(Ye,$,je,ut,Et,Ue,Ge,$e,nn,Tt.data):P.texSubImage3D(Ye,$,je,ut,Et,Ue,Ge,$e,nn,_t,Tt):C.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,$,je,ut,Ue,Ge,nn,_t,Tt.data):C.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,$,je,ut,Tt.width,Tt.height,nn,Tt.data):P.texSubImage2D(P.TEXTURE_2D,$,je,ut,Ue,Ge,nn,_t,Tt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Yn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,An),P.pixelStorei(P.UNPACK_SKIP_ROWS,cs),P.pixelStorei(P.UNPACK_SKIP_IMAGES,un),$===0&&W.generateMipmaps&&P.generateMipmap(Ye),pe.unbindTexture()},this.copyTextureToTexture3D=function(C,W,Q=null,ee=null,$=0){return C.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,ee=arguments[1]||null,C=arguments[2],W=arguments[3],$=arguments[4]||0),cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,Q,ee,$)},this.initRenderTarget=function(C){fe.get(C).__webglFramebuffer===void 0&&A.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),pe.unbindTexture()},this.resetState=function(){E=0,T=0,R=null,pe.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}class Rl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new Rl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mx extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class eM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kc,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new k;class $d{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $d(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const au=new k,cu=new vt,lu=new vt,gx=new k,hu=new nt,so=new k,Va=new ui,uu=new nt,Ga=new Rr;class tM extends b{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lh,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ri),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,so),this.boundingBox.expandByPoint(so)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ui),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,so),this.boundingSphere.expandByPoint(so)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(s),e.ray.intersectsSphere(Va)!==!1&&(uu.copy(s).invert(),Ga.copy(e.ray).applyMatrix4(uu),!(this.boundingBox!==null&&Ga.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ga)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;cu.fromBufferAttribute(s.attributes.skinIndex,e),lu.fromBufferAttribute(s.attributes.skinWeight,e),au.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=lu.getComponent(r);if(o!==0){const a=cu.getComponent(r);hu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(gx.copy(au).applyMatrix4(hu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class vx extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xd extends qt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=en,h=en,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const du=new nt,_x=new nt;class jd{constructor(e=[],t=[]){this.uuid=Mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:_x;du.multiplyMatrices(a,t[r]),du.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new jd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Xd(t,e,e,wn,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new vx),this.bones.push(o),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class fu extends ln{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bs=new nt,pu=new nt,ro=[],mu=new Ri,xx=new nt,tr=new b,nr=new ui;class Ln extends b{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),mu.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(mu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),nr.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),e.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bs),pu.multiplyMatrices(n,bs),tr.matrixWorld=pu,tr.raycast(e,ro);for(let o=0,a=ro.length;o<a;o++){const c=ro[o];c.instanceId=r,c.object=this,t.push(c)}ro.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xd(new Float32Array(s*this.count),s,this.count,wl,kn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class qd extends rs{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const No=new k,Fo=new k,gu=new nt,ir=new Rr,oo=new ui,Wa=new k,vu=new k;class Yd extends It{constructor(e=new Wt,t=new qd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)No.fromBufferAttribute(t,s-1),Fo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=No.distanceTo(Fo);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;gu.copy(s).invert(),ir.copy(e.ray).applyMatrix4(gu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=h.getX(v),y=h.getX(v+1),x=ao(this,e,ir,c,p,y);x&&t.push(x)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=ao(this,e,ir,c,v,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=ao(this,e,ir,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=ao(this,e,ir,c,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ao(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(No.fromBufferAttribute(o,s),Fo.fromBufferAttribute(o,r),t.distanceSqToSegment(No,Fo,Wa,vu)>n)return;Wa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Wa);if(!(c<e.near||c>e.far))return{distance:c,point:vu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const _u=new k,xu=new k;class wx extends Yd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)_u.fromBufferAttribute(t,s),xu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_u.distanceTo(xu);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nM extends Yd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class yx extends rs{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wu=new nt,Zc=new Rr,co=new ui,lo=new k;class iM extends It{constructor(e=new Wt,t=new yx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),co.radius+=r,e.ray.intersectsSphere(co)===!1)return;wu.copy(s).invert(),Zc.copy(e.ray).applyMatrix4(wu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);lo.fromBufferAttribute(u,m),yu(lo,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)lo.fromBufferAttribute(u,g),yu(lo,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yu(i,e,t,n,s,r,o){const a=Zc.distanceSqToPoint(i);if(a<t){const c=new k;Zc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Re:new k);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new k,s=[],r=[],o=[],a=new k,c=new nt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new k)}r[0]=new k,o[0]=new k;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Nt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Nt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Pl extends Xn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Re){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Mx extends Pl{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ll(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const ho=new k,$a=new Ll,Xa=new Ll,ja=new Ll;class bx extends Xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ho.subVectors(s[0],s[1]).add(s[0]),l=ho);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ho.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ho),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),$a.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),Xa.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),ja.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&($a.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Xa.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ja.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set($a.calc(c),Xa.calc(c),ja.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Mu(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Sx(i,e){const t=1-i;return t*t*e}function Ex(i,e){return 2*(1-i)*i*e}function Tx(i,e){return i*i*e}function pr(i,e,t,n){return Sx(i,e)+Ex(i,t)+Tx(i,n)}function Ax(i,e){const t=1-i;return t*t*t*e}function Cx(i,e){const t=1-i;return 3*t*t*i*e}function Rx(i,e){return 3*(1-i)*i*i*e}function Px(i,e){return i*i*i*e}function mr(i,e,t,n,s){return Ax(i,e)+Cx(i,t)+Rx(i,n)+Px(i,s)}class Kd extends Xn{constructor(e=new Re,t=new Re,n=new Re,s=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Re){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mr(e,s.x,r.x,o.x,a.x),mr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lx extends Xn{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mr(e,s.x,r.x,o.x,a.x),mr(e,s.y,r.y,o.y,a.y),mr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jd extends Xn{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ix extends Xn{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zd extends Xn{constructor(e=new Re,t=new Re,n=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Re){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(pr(e,s.x,r.x,o.x),pr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dx extends Xn{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(pr(e,s.x,r.x,o.x),pr(e,s.y,r.y,o.y),pr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qd extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Mu(a,c.x,l.x,h.x,u.x),Mu(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Re().fromArray(s))}return this}}var Qc=Object.freeze({__proto__:null,ArcCurve:Mx,CatmullRomCurve3:bx,CubicBezierCurve:Kd,CubicBezierCurve3:Lx,EllipseCurve:Pl,LineCurve:Jd,LineCurve3:Ix,QuadraticBezierCurve:Zd,QuadraticBezierCurve3:Dx,SplineCurve:Qd});class kx extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Qc[s.type]().fromJSON(s))}return this}}class el extends kx{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Jd(this.currentPoint.clone(),new Re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Zd(this.currentPoint.clone(),new Re(e,t),new Re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Kd(this.currentPoint.clone(),new Re(e,t),new Re(n,s),new Re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Qd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Pl(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Il extends Wt{constructor(e=[new Re(0,-.5),new Re(.5,0),new Re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Nt(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new k,d=new Re,f=new k,g=new k,v=new k;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=t;y++){const x=n+y*h*s,_=Math.sin(x),I=Math.cos(x);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*_,u.y=e[E].y,u.z=e[E].x*I,o.push(u.x,u.y,u.z),d.x=y/t,d.y=E/(e.length-1),a.push(d.x,d.y);const T=c[3*E+0]*_,R=c[3*E+1],M=c[3*E+0]*I;l.push(T,R,M)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const _=x+y*e.length,I=_,E=_+e.length,T=_+e.length+1,R=_+1;r.push(I,E,R),r.push(T,R,E)}this.setIndex(r),this.setAttribute("position",new wt(o,3)),this.setAttribute("uv",new wt(a,2)),this.setAttribute("normal",new wt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.points,e.segments,e.phiStart,e.phiLength)}}class an extends Il{constructor(e=1,t=1,n=4,s=8){const r=new el;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new an(e.radius,e.length,e.capSegments,e.radialSegments)}}class be extends Wt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(f,2));function y(){const _=new k,I=new k;let E=0;const T=(t-e)/n;for(let R=0;R<=r;R++){const M=[],w=R/r,L=w*(t-e)+e;for(let B=0;B<=s;B++){const O=B/s,N=O*c+a,V=Math.sin(N),z=Math.cos(N);I.x=L*V,I.y=-w*n+m,I.z=L*z,u.push(I.x,I.y,I.z),_.set(V,T,z).normalize(),d.push(_.x,_.y,_.z),f.push(O,1-w),M.push(g++)}v.push(M)}for(let R=0;R<s;R++)for(let M=0;M<r;M++){const w=v[M][R],L=v[M+1][R],B=v[M+1][R+1],O=v[M][R+1];(e>0||M!==0)&&(h.push(w,L,O),E+=3),(t>0||M!==r-1)&&(h.push(L,B,O),E+=3)}l.addGroup(p,E,0),p+=E}function x(_){const I=g,E=new Re,T=new k;let R=0;const M=_===!0?e:t,w=_===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;const L=g;for(let B=0;B<=s;B++){const N=B/s*c+a,V=Math.cos(N),z=Math.sin(N);T.x=M*z,T.y=m*w,T.z=M*V,u.push(T.x,T.y,T.z),d.push(0,w,0),E.x=V*.5+.5,E.y=z*.5*w+.5,f.push(E.x,E.y),g++}for(let B=0;B<s;B++){const O=I+B,N=L+B;_===!0?h.push(N,N+1,O):h.push(N+1,N,O),R+=3}l.addGroup(p,R,_===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new be(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pt extends be{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new pt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pr extends Wt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new wt(r,3)),this.setAttribute("normal",new wt(r.slice(),3)),this.setAttribute("uv",new wt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new k,_=new k,I=new k;for(let E=0;E<t.length;E+=3)f(t[E+0],x),f(t[E+1],_),f(t[E+2],I),c(x,_,I,y)}function c(y,x,_,I){const E=I+1,T=[];for(let R=0;R<=E;R++){T[R]=[];const M=y.clone().lerp(_,R/E),w=x.clone().lerp(_,R/E),L=E-R;for(let B=0;B<=L;B++)B===0&&R===E?T[R][B]=M:T[R][B]=M.clone().lerp(w,B/L)}for(let R=0;R<E;R++)for(let M=0;M<2*(E-R)-1;M++){const w=Math.floor(M/2);M%2===0?(d(T[R][w+1]),d(T[R+1][w]),d(T[R][w])):(d(T[R][w+1]),d(T[R+1][w+1]),d(T[R+1][w]))}}function l(y){const x=new k;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(y),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){const y=new k;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const _=m(y)/2/Math.PI+.5,I=p(y)/Math.PI+.5;o.push(_,1-I)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const x=o[y+0],_=o[y+2],I=o[y+4],E=Math.max(x,_,I),T=Math.min(x,_,I);E>.9&&T<.1&&(x<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),I<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){const _=y*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function g(){const y=new k,x=new k,_=new k,I=new k,E=new Re,T=new Re,R=new Re;for(let M=0,w=0;M<r.length;M+=9,w+=6){y.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),E.set(o[w+0],o[w+1]),T.set(o[w+2],o[w+3]),R.set(o[w+4],o[w+5]),I.copy(y).add(x).add(_).divideScalar(3);const L=m(I);v(E,w+0,y,L),v(T,w+2,x,L),v(R,w+4,_,L)}}function v(y,x,_,I){I<0&&y.x===1&&(o[x]=y.x-1),_.x===0&&_.z===0&&(o[x]=I/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.vertices,e.indices,e.radius,e.details)}}class tn extends Pr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tn(e.radius,e.detail)}}class Dl extends el{constructor(e){super(e),this.uuid=Mn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new el().fromJSON(s))}return this}}const Ux={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=ef(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=zx(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return yr(r,o,t,a,c,f,0),o}};function ef(i,e,t,n,s){let r,o;if(s===Jx(i,e,t,n)>0)for(r=e;r<t;r+=n)o=bu(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=bu(r,i[r],i[r+1],o);return o&&ia(o,o.next)&&(br(o),o=o.next),o}function Qi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ia(t,t.next)||Dt(t.prev,t,t.next)===0)){if(br(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function yr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&$x(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Fx(i,n,s,r):Nx(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),br(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Ox(Qi(i),e,t),yr(i,e,t,n,s,r,2)):o===2&&Bx(i,e,t,n,s,r):yr(Qi(i),e,t,n,s,r,1);break}}}function Nx(i){const e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Cs(s,a,r,c,o,l,g.x,g.y)&&Dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Fx(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Dt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=tl(f,g,e,t,n),y=tl(v,m,e,t,n);let x=i.prevZ,_=i.nextZ;for(;x&&x.z>=p&&_&&_.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Cs(a,h,c,u,l,d,x.x,x.y)&&Dt(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Cs(a,h,c,u,l,d,_.x,_.y)&&Dt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Cs(a,h,c,u,l,d,x.x,x.y)&&Dt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Cs(a,h,c,u,l,d,_.x,_.y)&&Dt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ox(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!ia(s,r)&&tf(s,n,n.next,r)&&Mr(s,r)&&Mr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),br(n),br(n.next),n=i=r),n=n.next}while(n!==i);return Qi(n)}function Bx(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qx(o,a)){let c=nf(o,a);o=Qi(o,o.next),c=Qi(c,c.next),yr(o,e,t,n,s,r,0),yr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function zx(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=ef(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(jx(l));for(s.sort(Hx),r=0;r<s.length;r++)t=Vx(s[r],t);return t}function Hx(i,e){return i.x-e.x}function Vx(i,e){const t=Gx(i,e);if(!t)return e;const n=nf(t,i);return Qi(n,n.next),Qi(t,t.next)}function Gx(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Cs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Mr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Wx(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function Wx(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function $x(i,e,t,n){let s=i;do s.z===0&&(s.z=tl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Xx(s)}function Xx(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function tl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function jx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Cs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function qx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Yx(i,e)&&(Mr(i,e)&&Mr(e,i)&&Kx(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||ia(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ia(i,e){return i.x===e.x&&i.y===e.y}function tf(i,e,t,n){const s=fo(Dt(i,e,t)),r=fo(Dt(i,e,n)),o=fo(Dt(t,n,i)),a=fo(Dt(t,n,e));return!!(s!==r&&o!==a||s===0&&uo(i,t,e)||r===0&&uo(i,n,e)||o===0&&uo(t,i,n)||a===0&&uo(t,e,n))}function uo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fo(i){return i>0?1:i<0?-1:0}function Yx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&tf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Mr(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function Kx(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function nf(i,e){const t=new nl(i.i,i.x,i.y),n=new nl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function bu(i,e,t,n){const s=new nl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Jx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class gr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return gr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Su(e),Eu(n,e);let o=e.length;t.forEach(Su);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Eu(n,t[c]);const a=Ux.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Su(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Eu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class sa extends Wt{constructor(e=new Dl([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new wt(s,3)),this.setAttribute("uv",new wt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Zx;let x,_=!1,I,E,T,R;p&&(x=p.getSpacedPoints(h),_=!0,d=!1,I=p.computeFrenetFrames(h,!1),E=new k,T=new k,R=new k),d||(m=0,f=0,g=0,v=0);const M=a.extractPoints(l);let w=M.shape;const L=M.holes;if(!gr.isClockWise(w)){w=w.reverse();for(let X=0,te=L.length;X<te;X++){const P=L[X];gr.isClockWise(P)&&(L[X]=P.reverse())}}const O=gr.triangulateShape(w,L),N=w;for(let X=0,te=L.length;X<te;X++){const P=L[X];w=w.concat(P)}function V(X,te,P){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(te,P)}const z=w.length,q=O.length;function G(X,te,P){let Le,ie,he;const pe=X.x-te.x,xe=X.y-te.y,fe=P.x-X.x,A=P.y-X.y,S=pe*pe+xe*xe,H=pe*A-xe*fe;if(Math.abs(H)>Number.EPSILON){const Z=Math.sqrt(S),ne=Math.sqrt(fe*fe+A*A),Y=te.x-xe/Z,Ee=te.y+pe/Z,Pe=P.x-A/ne,Ie=P.y+fe/ne,We=((Pe-Y)*A-(Ie-Ee)*fe)/(pe*A-xe*fe);Le=Y+pe*We-X.x,ie=Ee+xe*We-X.y;const Te=Le*Le+ie*ie;if(Te<=2)return new Re(Le,ie);he=Math.sqrt(Te/2)}else{let Z=!1;pe>Number.EPSILON?fe>Number.EPSILON&&(Z=!0):pe<-Number.EPSILON?fe<-Number.EPSILON&&(Z=!0):Math.sign(xe)===Math.sign(A)&&(Z=!0),Z?(Le=-xe,ie=pe,he=Math.sqrt(S)):(Le=pe,ie=xe,he=Math.sqrt(S/2))}return new Re(Le/he,ie/he)}const oe=[];for(let X=0,te=N.length,P=te-1,Le=X+1;X<te;X++,P++,Le++)P===te&&(P=0),Le===te&&(Le=0),oe[X]=G(N[X],N[P],N[Le]);const ue=[];let ge,Se=oe.concat();for(let X=0,te=L.length;X<te;X++){const P=L[X];ge=[];for(let Le=0,ie=P.length,he=ie-1,pe=Le+1;Le<ie;Le++,he++,pe++)he===ie&&(he=0),pe===ie&&(pe=0),ge[Le]=G(P[Le],P[he],P[pe]);ue.push(ge),Se=Se.concat(ge)}for(let X=0;X<m;X++){const te=X/m,P=f*Math.cos(te*Math.PI/2),Le=g*Math.sin(te*Math.PI/2)+v;for(let ie=0,he=N.length;ie<he;ie++){const pe=V(N[ie],oe[ie],Le);de(pe.x,pe.y,-P)}for(let ie=0,he=L.length;ie<he;ie++){const pe=L[ie];ge=ue[ie];for(let xe=0,fe=pe.length;xe<fe;xe++){const A=V(pe[xe],ge[xe],Le);de(A.x,A.y,-P)}}}const Oe=g+v;for(let X=0;X<z;X++){const te=d?V(w[X],Se[X],Oe):w[X];_?(T.copy(I.normals[0]).multiplyScalar(te.x),E.copy(I.binormals[0]).multiplyScalar(te.y),R.copy(x[0]).add(T).add(E),de(R.x,R.y,R.z)):de(te.x,te.y,0)}for(let X=1;X<=h;X++)for(let te=0;te<z;te++){const P=d?V(w[te],Se[te],Oe):w[te];_?(T.copy(I.normals[X]).multiplyScalar(P.x),E.copy(I.binormals[X]).multiplyScalar(P.y),R.copy(x[X]).add(T).add(E),de(R.x,R.y,R.z)):de(P.x,P.y,u/h*X)}for(let X=m-1;X>=0;X--){const te=X/m,P=f*Math.cos(te*Math.PI/2),Le=g*Math.sin(te*Math.PI/2)+v;for(let ie=0,he=N.length;ie<he;ie++){const pe=V(N[ie],oe[ie],Le);de(pe.x,pe.y,u+P)}for(let ie=0,he=L.length;ie<he;ie++){const pe=L[ie];ge=ue[ie];for(let xe=0,fe=pe.length;xe<fe;xe++){const A=V(pe[xe],ge[xe],Le);_?de(A.x,A.y+x[h-1].y,x[h-1].x+P):de(A.x,A.y,u+P)}}}j(),ce();function j(){const X=s.length/3;if(d){let te=0,P=z*te;for(let Le=0;Le<q;Le++){const ie=O[Le];ke(ie[2]+P,ie[1]+P,ie[0]+P)}te=h+m*2,P=z*te;for(let Le=0;Le<q;Le++){const ie=O[Le];ke(ie[0]+P,ie[1]+P,ie[2]+P)}}else{for(let te=0;te<q;te++){const P=O[te];ke(P[2],P[1],P[0])}for(let te=0;te<q;te++){const P=O[te];ke(P[0]+z*h,P[1]+z*h,P[2]+z*h)}}n.addGroup(X,s.length/3-X,0)}function ce(){const X=s.length/3;let te=0;ve(N,te),te+=N.length;for(let P=0,Le=L.length;P<Le;P++){const ie=L[P];ve(ie,te),te+=ie.length}n.addGroup(X,s.length/3-X,1)}function ve(X,te){let P=X.length;for(;--P>=0;){const Le=P;let ie=P-1;ie<0&&(ie=X.length-1);for(let he=0,pe=h+m*2;he<pe;he++){const xe=z*he,fe=z*(he+1),A=te+Le+xe,S=te+ie+xe,H=te+ie+fe,Z=te+Le+fe;ze(A,S,H,Z)}}}function de(X,te,P){c.push(X),c.push(te),c.push(P)}function ke(X,te,P){Fe(X),Fe(te),Fe(P);const Le=s.length/3,ie=y.generateTopUV(n,s,Le-3,Le-2,Le-1);Ce(ie[0]),Ce(ie[1]),Ce(ie[2])}function ze(X,te,P,Le){Fe(X),Fe(te),Fe(Le),Fe(te),Fe(P),Fe(Le);const ie=s.length/3,he=y.generateSideWallUV(n,s,ie-6,ie-3,ie-2,ie-1);Ce(he[0]),Ce(he[1]),Ce(he[3]),Ce(he[1]),Ce(he[2]),Ce(he[3])}function Fe(X){s.push(c[X*3+0]),s.push(c[X*3+1]),s.push(c[X*3+2])}function Ce(X){r.push(X.x),r.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Qx(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Qc[s.type]().fromJSON(s)),new sa(n,e.options)}}const Zx={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Re(r,o),new Re(a,c),new Re(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Re(o,1-c),new Re(l,1-u),new Re(d,1-g),new Re(v,1-p)]:[new Re(a,1-c),new Re(h,1-u),new Re(f,1-g),new Re(m,1-p)]}};function Qx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class bn extends Pr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bn(e.radius,e.detail)}}class kl extends Pr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new kl(e.radius,e.detail)}}class St extends Wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new k,d=new k,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let _=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let I=0;I<=t;I++){const E=I/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(E+_,1-x),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=h[p][y+1],_=h[p][y],I=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&f.push(x,_,E),(p!==n-1||c<Math.PI)&&f.push(_,I,E)}this.setIndex(f),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(v,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class es extends Wt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new k,u=new k,d=new k;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(v,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ew extends jt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class ft extends rs{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cd,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sM extends ft{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function po(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function tw(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function nw(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Tu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function sf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class ra{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class iw extends ra{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hh,endingEnd:hh}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case uh:r=e,a=2*t-n;break;case dh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case uh:o=e,c=2*n-t;break;case dh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*v+.5*g,_=f*m-f*v;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+y*o[l+I]+x*o[c+I]+_*o[u+I];return r}}class sw extends ra{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class rw extends ra{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class jn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=po(t,this.TimeBufferType),this.values=po(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:po(e.times,Array),values:po(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new rw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new iw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Do:t=this.InterpolantFactoryMethodDiscrete;break;case Yc:t=this.InterpolantFactoryMethodLinear;break;case pa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Do;case this.InterpolantFactoryMethodLinear:return Yc;case this.InterpolantFactoryMethodSmooth:return pa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&tw(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Yc;class js extends jn{constructor(e,t,n){super(e,t,n)}}js.prototype.ValueTypeName="bool";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=Do;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;class rf extends jn{}rf.prototype.ValueTypeName="color";class Oo extends jn{}Oo.prototype.ValueTypeName="number";class ow extends ra{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)ss.slerpFlat(r,0,o,l-a,o,l,c);return r}}class oa extends jn{InterpolantFactoryMethodLinear(e){return new ow(this.times,this.values,this.getValueSize(),e)}}oa.prototype.ValueTypeName="quaternion";oa.prototype.InterpolantFactoryMethodSmooth=void 0;class qs extends jn{constructor(e,t,n){super(e,t,n)}}qs.prototype.ValueTypeName="string";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=Do;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Bo extends jn{}Bo.prototype.ValueTypeName="vector";class rM{constructor(e="",t=-1,n=[],s=Ip){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(cw(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(jn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=nw(c);c=Tu(c,1,h),l=Tu(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Oo(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,v){if(f.length!==0){const m=[],p=[];sf(f,m,p,g),m.length!==0&&v.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const x=d[g];m.push(x.time),p.push(x.morphTarget===v?1:0)}s.push(new Oo(".morphTargetInfluence["+v+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(Bo,f+".position",d,"pos",s),n(oa,f+".quaternion",d,"rot",s),n(Bo,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function aw(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oo;case"vector":case"vector2":case"vector3":case"vector4":return Bo;case"color":return rf;case"quaternion":return oa;case"bool":case"boolean":return js;case"string":return qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function cw(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=aw(i.type);if(i.times===void 0){const t=[],n=[];sf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class lw{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const hw=new lw;class Lr{constructor(e){this.manager=e!==void 0?e:hw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Lr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class uw extends Error{constructor(e,t){super(e),this.response=t}}class oM extends Lr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=bi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:n,onError:s});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ti[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:_})=>{if(x)p.close();else{v+=_.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let E=0,T=h.length;E<T;E++){const R=h[E];R.onProgress&&R.onProgress(I)}p.enqueue(_),y()}},x=>{p.error(x)})}}});return new Response(m)}else throw new uw(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{bi.add(e,l);const h=ti[e];delete ti[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=ti[e];if(h===void 0)throw this.manager.itemError(e),l;delete ti[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class dw extends Lr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=bi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=xr("img");function c(){h(),bi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class aM extends Lr{constructor(e){super(e)}load(e,t,n,s){const r=new qt,o=new dw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class aa extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class fw extends aa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const qa=new nt,Au=new k,Cu=new k;class Ul{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Au.setFromMatrixPosition(e.matrixWorld),t.position.copy(Au),Cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cu),t.updateMatrixWorld(),qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pw extends Ul{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Os*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class cM extends aa{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new pw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ru=new nt,sr=new k,Ya=new k;class mw extends Ul{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),sr.setFromMatrixPosition(e.matrixWorld),n.position.copy(sr),Ya.copy(n.position),Ya.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ya),n.updateMatrixWorld(),s.makeTranslation(-sr.x,-sr.y,-sr.z),Ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru)}}class gw extends aa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new mw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vw extends Ul{constructor(){super(new Al(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _w extends aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new vw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lM{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hM extends Lr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=bi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return bi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),bi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});bi.add(e,c),r.manager.itemStart(e)}}class of{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Pu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Pu(){return performance.now()}const Nl="\\[\\]\\.:\\/",xw=new RegExp("["+Nl+"]","g"),Fl="[^"+Nl+"]",ww="[^"+Nl.replace("\\.","")+"]",yw=/((?:WC+[\/:])*)/.source.replace("WC",Fl),Mw=/(WCOD+)?/.source.replace("WCOD",ww),bw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),Sw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),Ew=new RegExp("^"+yw+Mw+bw+Sw+"$"),Tw=["material","materials","bones","map"];class Aw{constructor(e,t,n){const s=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class bt{constructor(e,t,n){this.path=t,this.parsedPath=n||bt.parseTrackName(t),this.node=bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new bt.Composite(e,t,n):new bt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xw,"")}static parseTrackName(e){const t=Ew.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Tw.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}bt.Composite=Aw;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class uM{constructor(e,t,n,s,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Lu=new nt;class Iu{constructor(e,t,n=0,s=1/0){this.ray=new Rr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new El,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lu),this}intersectObject(e,t=!0,n=[]){return il(e,this,n,t),n.sort(Du),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)il(e[s],this,n,t);return n.sort(Du),n}}function Du(i,e){return i.distance-e.distance}function il(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)il(r[o],e,t,!0)}}class dM extends wx{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Wt;s.setAttribute("position",new wt(t,3)),s.setAttribute("color",new wt(n,3));const r=new qd({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new Ne,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);const lt={grass:7319103,grassDark:5213996,grassLight:9225297,dirt:13214826,dirtDark:11109455,soil:8016434,wheatYoung:8372026,wheatRipe:14725959,treeLeaf:3116878,treeLeafDark:2060352,trunk:8081971,roofRed:12731693,roofOrange:15238970,roofSlate:3096151,wallCream:15852484,wallWood:10185283,stone:14275783,fire:16752704,sky:12575743},ku={morning:{sunColor:16773590,sunIntensity:2.6,sunDir:[-.55,1,.45],hemiSky:13625599,hemiGround:6126133,hemiIntensity:1.1,fire:.6,exposure:1,background:12575743},afternoon:{sunColor:16766362,sunIntensity:2.4,sunDir:[.5,.8,.5],hemiSky:16769720,hemiGround:6974e3,hemiIntensity:.95,fire:.8,exposure:1,background:15980968},evening:{sunColor:16751210,sunIntensity:1.3,sunDir:[.75,.35,.2],hemiSky:8425680,hemiGround:3820084,hemiIntensity:1.05,fire:1.6,exposure:1,background:4871816}},D={...lt,grass:6724676,grassDark:4748594,grassLight:8172116,grassSunlit:9354848,grassDeepMoss:4023336,grassGoldenMeadow:10269790,roadEdgeGrass:7769684,flourRibbon:2843320,carrotFoliage:2657330,cabbageHeartLight:8045700,appleShine:15608876,breadGolden:13270582,cobbleLight:14933715,cobbleMid:13748925,cobbleDark:11906464,woodDark:6044193,woodLight:12882528,soilDark:5913378,soilFurrow:7030313,wheatMid:12111682,wheatGold:15448382,sackBurlap:14266476,sackRope:9199154,flourBag:16249574,flourBand:13191730,windowDay:16770216,windowNight:16758861,emberRed:16734758,flameCore:16773288,smoke:15262940,daisyWhite:16579575,daisyCenter:16103470,skinFair:16175796,skinWarm:15778462,blush:15240578,ironHoop:4670272,carrotOrange:15625754,carrotGreen:3050296,cabbageEmerald:2984533,cabbageLeaf:5810276,shroomRed:13379627,shroomStem:16117734,grassTuftDark:5081641,grassTuftBright:8962626,appleRed:14034984,breadCrust:12877370,jamBerry:11018296,jamAmber:14451236,jamLid:16183522,preserveryRoof:4017e3,bakeryRoof:12080691,copperHoop:12084024,wickerBasket:11568466,scaffoldWood:10254930,tarpBlue:3892889};function Cw(i=20261025){let e=i%2147483647;return e<=0&&(e+=2147483646),()=>(e=e*16807%2147483647,(e-1)/2147483646)}function Bt(i,e=!0,t=!0){return i.traverse(n=>{if(n.isMesh){const s=n,r=s.material;(Array.isArray(r)?r:[r]).some(c=>c&&c.emissive&&c.emissive.getHex()>0)?(s.castShadow=!1,s.receiveShadow=!1):(s.castShadow=e,s.receiveShadow=t)}}),i}function ca(i,e,t,n){const s=n[0]-t[0],r=n[1]-t[1],o=s*s+r*r||1,a=Math.max(0,Math.min(1,((i-t[0])*s+(e-t[1])*r)/o));return Math.hypot(i-(t[0]+s*a),e-(t[1]+r*a))}function os(){return{body:new be(.28,.25,.68,8),hoop:new be(.288,.288,.05,8)}}function Un(i,e=os()){const t=new me,n=new b(e.body,i.flat(D.wallWood,.88));n.position.y=.34;const s=i.flat(D.ironHoop,.65,.25),r=new b(e.hoop,s);r.position.y=.52;const o=new b(e.hoop,s);return o.position.y=.16,t.add(n,r,o),Bt(t)}class Rw{constructor(){F(this,"cache",new Map);F(this,"windowMaterials",[])}flat(e,t=.88,n=.02){const s=`f:${e}:${t}:${n}`;let r=this.cache.get(s);return r||(r=new ft({color:e,roughness:t,metalness:n,flatShading:!0}),this.cache.set(s,r)),r}smooth(e,t=.78,n=.04){const s=`s:${e}:${t}:${n}`;let r=this.cache.get(s);return r||(r=new ft({color:e,roughness:t,metalness:n,flatShading:!1}),this.cache.set(s,r)),r}windowGlow(){if(this.windowMaterials.length>0)return this.windowMaterials[0];const e=new ft({color:D.windowDay,emissive:D.windowNight,emissiveIntensity:.45,roughness:.35,metalness:.05});return this.windowMaterials.push(e),e}setWindowEveningFactor(e){const t=.35+e*1.15;for(const n of this.windowMaterials)n.emissiveIntensity=t}dispose(){for(const e of this.cache.values())e.dispose();for(const e of this.windowMaterials)e.dispose();this.cache.clear(),this.windowMaterials.length=0}}function qi(i,e,t,n){const s=new Dl;s.moveTo(-i/2,0),s.lineTo(0,t),s.lineTo(i/2,0),s.closePath();const r=new sa(s,{depth:e,bevelEnabled:!1});return r.translate(0,0,-e/2),new b(r,n)}function Ir(){return{body:new tn(.38,1),neck:new be(.15,.09,.15,6),ear:new pt(.18,.18,5),band:new be(.38,.38,.12,8)}}function zo(i,e,t=!1,n=Ir()){const s=new me,r=new b(n.body,i);r.scale.set(1.15,.95,.9),r.position.y=.32,s.add(r);const o=new b(n.neck,e);o.position.y=.62;const a=new b(n.ear,i);if(a.position.y=.72,a.rotation.z=.15,s.add(o,a),t){const c=new b(n.band,e);c.scale.set(1.08,1,.88),c.position.y=.34,s.add(c)}return Bt(s)}function Pw(i,e=Ir(),t=os()){const n=new me;n.userData.buildingId="warehouse";const s=new me;s.position.set(-.75,0,-.1),n.add(s);const r=3.5,o=4.6,a=2.8,c=new b(new le(r+.3,.32,o+.3),i.flat(D.cobbleDark,.92));c.position.y=.16,s.add(c);const l=new b(new le(r,a,o),i.flat(D.roofOrange,.86));l.position.y=.32+a/2,s.add(l);const h=i.flat(D.woodDark,.9),u=new le(.2,a+.1,.2);for(const Ae of[-1,1])for(const U of[-1,1]){const _e=new b(u,h);_e.position.set(Ae*r/2,.32+a/2,U*o/2),s.add(_e)}const f=qi(r+.65,o+.65,2.15,i.flat(D.roofSlate,.82));f.position.y=.32+a,s.add(f);const g=new le(.85,.65,.75),v=new le(.12,.36,.42),m=i.flat(D.roofOrange),p=i.windowGlow();for(const Ae of[-1.05,.95]){const U=new me;U.position.set(r*.32,.32+a+.85,Ae);const _e=new b(g,m),K=new b(v,p);K.position.x=.4,U.add(_e,K),s.add(U)}const y=new b(new le(1.45,1.85,.18),h);y.position.set(0,1.24,o/2+.06);const x=new b(new le(1.15,1.6,.12),i.windowGlow());x.position.set(0,1.2,o/2+.1),s.add(y,x);const _=new b(new le(1.35,.14,1.65),i.flat(D.wallWood,.88));_.position.set(0,.2,o/2+.78),_.rotation.x=.16,s.add(_);const I=Un(i,t);I.position.set(-1.15,0,o/2+.65);const E=Un(i,t);E.position.set(-1.15,0,o/2+1.35),E.rotation.y=.75,s.add(I,E);const T=new me;T.position.set(1.75,0,-.45),n.add(T);const R=new b(new be(1.18,1.26,.55,10),i.flat(D.cobbleMid,.9));R.position.y=.27;const M=new b(new be(1.08,1.14,3.3,10),i.flat(D.stone,.86));M.position.y=.55+1.65;const w=new b(new pt(1.26,1.35,10),i.flat(D.roofOrange,.82));w.position.y=.55+3.3+.65;const L=new b(new St(.18,6,5),i.flat(D.roofRed,.8));L.position.y=.55+3.3+1.32,T.add(R,M,w,L);const B=new be(1.13,1.13,.08,10),O=i.flat(D.ironHoop,.68,.28);for(const Ae of[.95,1.85,2.75,3.65]){const U=new b(B,O);U.position.y=Ae,T.add(U)}const N=new le(.04,3.1,.04),V=new le(.04,.03,.3),z=new b(N,O);z.position.set(1.14,2.1,-.14);const q=new b(N,O);q.position.set(1.14,2.1,.14),T.add(z,q);for(let Ae=.8;Ae<=3.5;Ae+=.35){const U=new b(V,O);U.position.set(1.14,Ae,0),T.add(U)}const G=new be(.09,.09,1.5,6);G.rotateZ(Math.PI/2-.26);const oe=new b(G,O);oe.position.set(-.85,3.8,.08),T.add(oe);const ue=Un(i,t);ue.position.set(.85,0,1.15);const ge=Un(i,t);ge.position.set(1.35,0,.75),ge.rotation.y=.55,T.add(ue,ge);const Se=new me;Se.position.set(.9,.14,5.4),n.add(Se);const Oe=i.flat(D.sackBurlap,.88),j=i.flat(D.sackRope,.9),ce=i.flat(D.flourBag,.82),ve=i.flat(D.flourBand,.85),de=i.flat(D.wallWood,.88),ke=i.flat(D.woodDark,.9),ze=i.flat(D.wickerBasket,.88),Fe=i.flat(D.appleRed,.7),Ce=i.flat(D.carrotOrange,.8),X=i.flat(D.cabbageEmerald,.8),te=i.flat(D.breadCrust,.85),P=i.flat(D.jamBerry,.6),Le=i.flat(D.jamAmber,.6),ie=new le(.58,.28,.42),he=new le(.62,.07,.46),pe=new be(.28,.22,.32,8),xe=new St(.095,6,5),fe=new an(.065,.24,3,5),A=new be(.07,.07,.15,6),S=new pt(.1,.26,5),H=new tn(.14,0),Z=Ae=>{const U=new me,_e=new b(ie,de);_e.position.y=.14;const K=new b(he,ke);return K.position.y=.27,Ae.position.y=.2,U.add(_e,K,Ae),U},ne=i.flat(D.wallWood,.9),Y=new b(new le(2.4,.08,1.4),ne);Y.position.set(-1.15,.04,-.05);const Ee=new b(new le(2.2,.08,1.4),ne);Ee.position.set(1.95,.04,-.05);const Pe=new b(new le(1.6,.08,1.4),ne);Pe.position.set(.22,.04,.05);const Ie=new b(new le(1.6,.08,1.4),ne);Ie.position.set(3.05,.04,.05),Se.add(Y,Ee,Pe,Ie);const We=[];for(let Ae=0;Ae<16;Ae++){const U=Math.floor(Ae/8),_e=Ae%8,K=Math.floor(_e/4),ae=_e%4,ye=zo(Oe,j,!1,e);ye.position.set(-1.45+ae*.6+U*.08,.08+U*.48,-.38+K*.62),ye.rotation.y=Ae*37%10*.05-.25,ye.visible=!1,Se.add(ye),We.push(ye)}const Te=[];for(let Ae=0;Ae<12;Ae++){const U=Math.floor(Ae/6),_e=Ae%6,K=Math.floor(_e/3),ae=_e%3,ye=zo(ce,ve,!0,e);ye.position.set(1.35+ae*.6,.08+U*.48,-.35+K*.62),ye.rotation.y=Ae*23%8*.05-.2,ye.visible=!1,Se.add(ye),Te.push(ye)}const J=[];for(let Ae=0;Ae<4;Ae++){const U=new me,_e=new b(S,Ce);_e.position.set(-.14,0,0),_e.rotation.z=-.15;const K=new b(S,Ce);K.position.set(.14,0,0),K.rotation.z=.15;const ae=new b(S,Ce);ae.position.set(0,.04,.06);const ye=new b(new pt(.08,.14,5),i.flat(D.carrotFoliage,.8));ye.position.set(0,.16,.06),U.add(_e,K,ae,ye);const De=Z(U),Ke=Math.floor(Ae/2),mt=Ae%2;De.position.set(-.06+mt*.56,.08+Ke*.32,.42),De.visible=!1,Se.add(De),J.push(De)}const re=[];for(let Ae=0;Ae<4;Ae++){const U=new me,_e=new b(H,X);_e.position.set(-.14,0,0);const K=new b(H,X);K.position.set(.14,0,0);const ae=new b(H,i.flat(D.cabbageHeartLight,.8));ae.position.set(0,.04,.05),U.add(_e,K,ae);const ye=Z(U),De=Math.floor(Ae/2),Ke=Ae%2;ye.position.set(-.06+Ke*.56,.08+De*.32,-.4),ye.visible=!1,Se.add(ye),re.push(ye)}const we=[];for(let Ae=0;Ae<4;Ae++){const U=new me,_e=new b(pe,ze);_e.position.y=.16,U.add(_e);for(let ye=0;ye<5;ye++){const De=new b(xe,Fe);if(ye===4)De.position.set(0,.34,0);else{const Ke=ye/4*Math.PI*2;De.position.set(Math.cos(Ke)*.11,.26,Math.sin(Ke)*.11)}U.add(De)}const K=Math.floor(Ae/2),ae=Ae%2;U.position.set(.7+ae*.52,.08+K*.34,.05),U.visible=!1,Se.add(U),we.push(U)}const Me=[];for(let Ae=0;Ae<4;Ae++){const U=new me,_e=new b(fe,te);_e.rotation.z=Math.PI/2.3,_e.position.set(-.12,0,0);const K=new b(fe,te);K.rotation.z=Math.PI/2.3,K.position.set(.12,0,0);const ae=new b(fe,i.flat(D.breadGolden,.85));ae.rotation.z=Math.PI/2.3,ae.position.set(0,.05,.06),U.add(_e,K,ae);const ye=Z(U),De=Math.floor(Ae/2),Ke=Ae%2;ye.position.set(2.8+Ke*.54,.08+De*.32,-.38),ye.visible=!1,Se.add(ye),Me.push(ye)}const He=[];for(let Ae=0;Ae<4;Ae++){const U=new me,_e=new b(A,P);_e.position.set(-.12,0,0);const K=new b(A,Le);K.position.set(.12,0,0);const ae=new b(A,P);ae.position.set(0,.03,.06);const ye=new b(new be(.08,.08,.03,6),i.flat(D.jamLid,.8));ye.position.set(-.12,.09,0);const De=ye.clone();De.position.set(.12,.09,0);const Ke=ye.clone();Ke.position.set(0,.12,.06),U.add(_e,K,ae,ye,De,Ke);const mt=Z(U),Je=Math.floor(Ae/2),gt=Ae%2;mt.position.set(2.8+gt*.54,.08+Je*.32,.38),mt.visible=!1,Se.add(mt),He.push(mt)}Bt(n);const qe=(Ae,U)=>{const _e=Math.min(We.length,Math.ceil((Ae.wheat??0)/1.5));for(let Je=0;Je<We.length;Je++)We[Je].visible=Je<_e;const K=Math.min(Te.length,Math.ceil(Ae.flour??0));for(let Je=0;Je<Te.length;Je++)Te[Je].visible=Je<K;const ae=Math.min(J.length,Math.ceil((Ae.carrot??0)/1.5));for(let Je=0;Je<J.length;Je++)J[Je].visible=Je<ae;const ye=Math.min(re.length,Math.ceil((Ae.cabbage??0)/1.5));for(let Je=0;Je<re.length;Je++)re[Je].visible=Je<ye;const De=Math.min(we.length,Math.ceil((Ae.apple??0)/1.5));for(let Je=0;Je<we.length;Je++)we[Je].visible=Je<De;const Ke=Math.min(Me.length,Math.ceil((Ae.bread??0)/1.5));for(let Je=0;Je<Me.length;Je++)Me[Je].visible=Je<Ke;const mt=Math.min(He.length,Math.ceil((Ae.jam??0)/1.5));for(let Je=0;Je<He.length;Je++)He[Je].visible=Je<mt};return{group:n,setStockItems:qe,setStock(Ae,U,_e){qe({wheat:Ae,flour:U})}}}function Lw(i,e=Ir(),t=os()){const n=new me;n.userData.buildingId="mill";const s=new b(new be(1.85,2.15,1.4,8),i.flat(D.cobbleMid,.9));s.position.y=.7;const r=new b(new be(1.38,1.82,4.2,8),i.flat(D.wallCream,.86));r.position.y=1.4+2.1;const o=new b(new be(1.95,1.95,.18,8),i.flat(D.wallWood,.88));o.position.y=2.6;const a=new b(new pt(1.75,2.1,8),i.flat(D.roofRed,.82));a.position.y=5.6+1.05;const c=new b(new le(1.8,2.1,2.2),i.flat(D.wallWood,.88));c.position.set(-1.55,1.05,.2);const l=qi(2.1,2.5,.95,i.flat(D.roofOrange,.84));l.position.set(-1.55,2.1,.2);const h=new b(new le(.85,1.45,.2),i.flat(D.woodDark,.9));h.position.set(0,.75,1.92);const u=new b(new le(.5,.65,.16),i.windowGlow());u.position.set(0,3.6,1.6);const d=u.clone();d.position.set(-1.55,1.25,1.32);const f=Un(i,t);f.position.set(1.15,0,1.85);const g=Un(i,t);g.position.set(1.7,0,1.35),g.rotation.y=.45;const v=zo(i.flat(D.flourBag,.82),i.flat(D.flourBand,.85),!0,e);v.position.set(1.6,0,1.75);const m=new b(new be(.12,.09,.24,6),i.windowGlow());m.position.set(.65,1.85,1.95);const p=new me;p.name="blades",p.position.set(0,4.95,1.62);const y=new b(new be(.24,.24,.7,8),i.flat(D.woodDark,.9));y.rotation.x=Math.PI/2,p.add(y);const x=i.flat(D.woodDark,.9),_=i.flat(D.wallCream,.78),I=i.flat(D.roofOrange,.84),E=new le(.14,3.5,.12),T=new le(.68,2.75,.05),R=new le(.7,.22,.07);for(let M=0;M<4;M++){const w=new me;w.rotation.z=M*Math.PI/2;const L=new b(E,x);L.position.y=1.75;const B=new b(T,_);B.position.set(.32,1.98,.04),B.rotation.y=.14;const O=new b(R,I);O.position.set(.32,3.25,.04),O.rotation.y=.14,w.add(L,B,O),p.add(w)}return n.add(s,r,o,a,c,l,h,u,d,f,g,v,m,p),{group:Bt(n),blades:p}}function Iw(i,e=Ir(),t=os()){const n=new me;n.userData.buildingId="shop";const s=4.6,r=3.6,o=2.55,a=new b(new le(s,o,r),i.flat(D.wallCream,.86));a.position.y=o/2;const c=qi(s+.6,r+.6,1.55,i.flat(D.roofRed,.82));c.position.y=o;const l=new me;l.position.set(0,1.85,r/2+.65),l.rotation.x=.32;const h=7,u=(s-.2)/h,d=new le(u,.1,1.45);for(let M=0;M<h;M++){const w=i.flat(M%2===0?D.roofRed:D.wallCream,.8),L=new b(d,w);L.position.x=-3.7714285714285705/2+M*u,l.add(L)}const f=new b(new le(s-.8,.85,.75),i.flat(D.wallWood,.88));f.position.set(0,.42,r/2+.45);const g=new St(.18,6,5);g.scale(1.3,.75,.9);const v=i.flat(D.wheatGold,.78);for(let M=-2;M<=2;M++){const w=new b(g,v);w.position.set(M*.62,.92,r/2+.45),n.add(w)}const m=new b(new le(.85,.75,.14),i.windowGlow());m.position.set(-1.15,1.45,r/2+.04);const p=m.clone();p.position.x=1.15;const y=new b(new be(.42,.42,.12,10),i.flat(D.wheatGold,.6,.25));y.rotation.x=Math.PI/2,y.position.set(0,3.05,r/2+.35);const x=i.flat(D.wallWood,.88),_=i.flat(D.woodDark,.9),I=new le(.75,.48,.62),E=new le(.79,.08,.66);for(const[M,w,L]of[[-2.1,r/2-.25,.12],[2.05,r/2+.52,-.22]]){const B=new me;B.position.set(M,0,w),B.rotation.y=L;const O=new b(I,x);O.position.y=.24;const N=new b(E,_);N.position.y=.46;const V=zo(i.flat(D.flourBag,.82),i.flat(D.flourBand,.85),!0,e);V.scale.setScalar(.75),V.position.set(0,.38,0),B.add(O,N,V),n.add(B)}const T=Un(i,t);T.position.set(-s/2-.32,0,r/2-.8);const R=new b(new be(.12,.09,.22,6),i.windowGlow());return R.position.set(0,2.15,r/2+1.15),n.add(T,R),n.add(a,c,l,f,m,p,y),Bt(n)}function Dw(i,e=os()){const t=new me;t.userData.buildingId="farmhouse";const n=5.4,s=4.2,r=2.85,o=new b(new le(n,r,s),i.flat(D.wallCream,.86));o.position.y=r/2;const a=new b(new le(n+.12,.75,s+.12),i.flat(D.wallWood,.9));a.position.y=.38;const c=qi(n+.7,s+.7,1.85,i.flat(D.roofOrange,.82));c.position.y=r;const l=qi(2.2,1.5,.75,i.flat(D.roofOrange,.82));l.position.set(0,1.95,s/2+.55);const h=new b(new le(2.1,.28,1.35),i.flat(D.wallWood,.88));h.position.set(0,.14,s/2+.55);const u=new b(new le(.95,1.65,.16),i.flat(D.woodDark,.9));u.position.set(0,.95,s/2+.04);const d=new le(.82,.78,.15),f=new le(.92,.2,.28),g=i.windowGlow(),v=i.flat(D.roofRed,.85),m=new tn(.08,0),p=[D.roofRed,D.blush,D.daisyWhite,D.daisyCenter];for(const Y of[-1.65,1.65]){const Ee=new b(d,g);Ee.position.set(Y,1.48,s/2+.04);const Pe=new b(f,v);Pe.position.set(Y,.98,s/2+.14),t.add(Ee,Pe);for(let Ie=-.3;Ie<=.3;Ie+=.15){const We=new b(m,i.flat(p[Math.floor(Math.abs(Ie*17+Y*3))%p.length],.82));We.position.set(Y+Ie,1.12,s/2+.16),t.add(We)}}const y=new b(new le(.68,.68,.15),i.windowGlow());y.position.set(0,r+.65,s/2+.36);const x=new b(new le(.72,2.2,.72),i.flat(D.roofRed,.88));x.position.set(1.65,r+1.1,-.6);const _=[],I=new bn(.26,0),E=i.flat(D.smoke,.95);for(let Y=0;Y<3;Y++){const Ee=new b(I,E);Ee.position.set(1.65,r+2.3+Y*.55,-.6),t.add(Ee),_.push(Ee)}const T=new b(new be(.12,.09,.24,6),i.windowGlow());T.position.set(0,1.75,s/2+1.2);const R=Un(i,e);R.position.set(1.45,0,s/2+.45);const M=Un(i,e);M.position.set(1.95,0,s/2+.2),M.rotation.y=.65,t.add(T,R,M),t.add(o,a,c,l,h,u,y,x);const w=new me;w.name="farmhouse_wing_lv1";const L=1.05,B=2.5,O=2.1,N=-2.82,V=-.2,z=new b(new le(L,O,B),i.flat(D.wallCream,.86));z.position.set(N,O/2,V);const q=new b(new le(L+.08,.72,B+.08),i.flat(D.wallWood,.9));q.position.set(N,.36,V);const G=qi(L+.45,B+.4,.85,i.flat(D.roofOrange,.82));G.position.set(N,O,V);const oe=new b(new le(.12,.62,.62),i.windowGlow());oe.position.set(N-L/2-.03,1.25,V);const ue=new b(new le(.2,.16,.72),i.flat(D.roofRed,.85));ue.position.set(N-L/2-.05,.85,V),w.add(z,q,G,oe,ue);const ge=new be(.065,.065,.62,6);ge.rotateX(Math.PI/2);const Se=i.flat(D.trunk,.88),Oe=[[-.13,.065],[0,.065],[.13,.065],[-.065,.18],[.065,.18],[0,.295]];for(const[Y,Ee]of Oe){const Pe=new b(ge,Se);Pe.position.set(N+Y,Ee,V+B/2+.45),w.add(Pe)}const j=new le(.045,.38,.045),ce=i.flat(D.woodDark,.9);for(const Y of[-.21,.21]){const Ee=new b(j,ce);Ee.position.set(N+Y,.19,V+B/2+.45),w.add(Ee)}const ve=new me;ve.name="farmhouse_manor_lv2";const de=1.15,ke=1.1,ze=.95,Fe=-1.15,Ce=.85,X=new b(new le(de,ze,ke),i.flat(D.wallCream,.86));X.position.set(Fe,r+ze/2+.15,Ce);const te=qi(de+.35,ke+.3,.6,i.flat(D.roofOrange,.82));te.position.set(Fe,r+ze+.15,Ce);const P=new b(new le(.62,.58,.12),i.windowGlow());P.position.set(Fe,r+.65,Ce+ke/2+.04),ve.add(X,te,P);const Le=new b(new le(.72,2.2,.72),i.flat(D.roofRed,.88));Le.position.set(-1.65,r+1.1,-.6),ve.add(Le);const ie=[];for(let Y=0;Y<3;Y++){const Ee=new b(I,E);Ee.position.set(-1.65,r+2.3+Y*.55,-.6),t.add(Ee),ie.push(Ee)}const he=new me;he.position.set(0,r+1.85,0);const pe=new b(new be(.02,.02,.65,6),i.flat(D.copperHoop,.5,.6));pe.position.y=.32;const xe=new b(new be(.015,.015,.55,5),i.flat(D.copperHoop,.5,.6));xe.rotation.z=Math.PI/2,xe.position.y=.44;const fe=new b(new pt(.05,.12,4),i.flat(D.copperHoop,.5,.6));fe.rotation.z=-Math.PI/2,fe.position.set(.28,.44,0);const A=new b(new le(.22,.2,.03),i.flat(D.roofRed,.85));A.position.set(0,.62,0),he.add(pe,xe,fe,A),ve.add(he);const S=new b(new le(.9,.1,.35),i.flat(D.woodDark,.9));S.position.set(.85,.36,s/2+.55);const H=new b(new be(.12,.09,.24,6),i.windowGlow());H.position.set(-.85,1.75,s/2+1.2),ve.add(S,H),t.add(w,ve);let Z=0;const ne=Y=>{Z=Math.max(0,Math.min(2,Math.floor(Y))),w.visible=Z>=1,ve.visible=Z>=2;for(const Ee of ie)Ee.visible=Z>=2};ne(0),Bt(t);for(const Y of _)Y.castShadow=!1,Y.receiveShadow=!1;for(const Y of ie)Y.castShadow=!1,Y.receiveShadow=!1;return{group:t,smokePuffs:_,smokePuffs2:ie,weatherVane:he,getHousingLevel:()=>Z,setHousingLevel:ne}}function kw(i,e){const t=new me,n=i.buildings,s=Ir(),r=os(),o=(d,f)=>{d.position.set(f.pos[0],0,f.pos[1]),d.rotation.y=f.rotY,t.add(d)},a=Pw(e,s,r);o(a.group,n.warehouse);const c=Lw(e,s,r);o(c.group,n.mill);const l=Iw(e,s,r);o(l,n.shop);const h=Dw(e,r);o(h.group,n.farmhouse);let u=0;return{group:t,setStock:a.setStock,setStockItems:a.setStockItems,setHousingLevel:h.setHousingLevel,update(d){u+=d,c.blades.rotation.z-=d*.95;for(let f=0;f<h.smokePuffs.length;f++){const g=(u*.42+f*.33)%1,v=h.smokePuffs[f];v.position.y=4.95+g*2.1,v.position.x=1.65+Math.sin(u*1.6+f)*.25*g;const m=Math.sin(g*Math.PI)*(.7+g*.65);v.scale.setScalar(Math.max(.01,m))}if(h.getHousingLevel()>=2){for(let f=0;f<h.smokePuffs2.length;f++){const g=(u*.38+f*.33+.5)%1,v=h.smokePuffs2[f];v.position.y=4.95+g*2.1,v.position.x=-1.65+Math.sin(u*1.4+f+1.2)*.25*g;const m=Math.sin(g*Math.PI)*(.7+g*.65);v.scale.setScalar(Math.max(.01,m))}h.weatherVane&&(h.weatherVane.rotation.y=.35+Math.sin(u*.65)*.22)}}}}function af(i){const[e,t]=i.fieldSize,n=new pt(.26,.92,5);n.translate(0,.46,0);const s=new be(.11,.16,.42,6);s.translate(0,.82,0);const r=new pt(.24,.54,5);r.translate(0,.46,0);const o=new pt(.12,.28,5);o.translate(0,.14,0);const a=new bn(.28,0);a.scale(1.15,.72,1.15),a.translate(0,.14,0);const c=new tn(.18,0);return c.translate(0,.2,0),{soilBase:new le(e,.22,t),furrow:new le(e-.65,.11,.5),borderX:new le(e+.16,.22,.16),borderZ:new le(.16,.22,t+.16),post:new le(.22,.68,.22),stalk:n,ear:s,carrotTop:r,carrotRoot:o,cabbageRosette:a,cabbageHeart:c,sheafBale:new be(.28,.36,.72,7),sheafTie:new be(.3,.3,.09,7),crateBox:new le(.64,.34,.48),crateRim:new le(.68,.08,.52)}}function Uw(i,e,t,n=af(e)){const[s,r]=e.fieldSize,o=new me,a=new ft({color:D.soil,roughness:.94,flatShading:!0}),c=new Ne(D.soil),l=new Ne(3678740),h=new Ne(7754296),u=new b(n.soilBase,a);u.position.y=.11,u.receiveShadow=!0,o.add(u);const d=6,f=6,g=new ft({color:D.soilFurrow,roughness:.94,flatShading:!0}),v=new Ne(D.soilFurrow),m=new Ne(4072466),p=new Ne(8148024);for(let xe=0;xe<d;xe++){const fe=(xe/(d-1)-.5)*(r-1.35),A=new b(n.furrow,g);A.position.set(0,.24,fe),A.receiveShadow=!0,o.add(A)}const y=t.flat(D.trunk,.9),x=new b(n.borderX,y);x.position.set(0,.18,-r/2);const _=new b(n.borderX,y);_.position.set(0,.18,r/2);const I=new b(n.borderZ,y);I.position.set(-s/2,.18,0);const E=new b(n.borderZ,y);E.position.set(s/2,.18,0),o.add(x,_,I,E);for(const xe of[-1,1])for(const fe of[-1,1]){const A=new b(n.post,y);A.position.set(xe*s/2,.34,fe*r/2),o.add(A)}const T=d*f,R=new ft({color:D.wheatYoung,roughness:.85,flatShading:!0}),M=new ft({color:D.wheatGold,roughness:.78,flatShading:!0}),w=new Ln(n.stalk,R,T);w.castShadow=!0,w.receiveShadow=!0,w.visible=!1;const L=new Ln(n.ear,M,T);L.castShadow=!0,L.visible=!1;const B=new ft({color:D.carrotGreen,roughness:.85,flatShading:!0}),O=new ft({color:D.carrotOrange,roughness:.78,flatShading:!0}),N=new Ln(n.carrotTop,B,T);N.castShadow=!0,N.receiveShadow=!0,N.visible=!1;const V=new Ln(n.carrotRoot,O,T);V.castShadow=!0,V.visible=!1;const z=new ft({color:D.cabbageLeaf,roughness:.85,flatShading:!0}),q=new ft({color:D.cabbageEmerald,roughness:.78,flatShading:!0}),G=new Ln(n.cabbageRosette,z,T);G.castShadow=!0,G.receiveShadow=!0,G.visible=!1;const oe=new Ln(n.cabbageHeart,q,T);oe.castShadow=!0,oe.visible=!1,o.add(w,L,N,V,G,oe);const ue=new me;ue.position.set(0,.22,r/2-.25),o.add(ue);const ge=new b(new le(s-.4,.08,.72),t.flat(D.wallWood,.9));ge.position.set(0,.04,.1),ge.receiveShadow=!0,ue.add(ge);const Se=[],Oe=t.flat(D.wheatGold,.82),j=t.flat(D.sackRope,.9),ce=t.flat(D.wallWood,.88),ve=t.flat(D.woodDark,.9),de=t.flat(D.carrotOrange,.8),ke=t.flat(D.cabbageEmerald,.8);for(let xe=0;xe<8;xe++){const fe=new me,A=Math.floor(xe/4),S=xe%4,H=-1.8+S*1.2+A*.12,Z=A*.36,ne=.1+(A===0?S%2*.12:-.06);fe.position.set(H,Z,ne),fe.visible=!1;const Y=new me,Ee=new b(n.sheafBale,Oe);Ee.position.y=.36,Ee.rotation.z=(xe%2===0?1:-1)*.08;const Pe=new b(n.sheafTie,j);Pe.position.y=.34;const Ie=new b(n.ear,t.flat(D.wheatRipe,.82));Ie.position.set(0,.72,0),Ie.scale.set(1.6,1.4,1.6),Y.add(Ee,Pe,Ie),fe.add(Y);const We=new me,Te=new b(n.crateBox,ce);Te.position.y=.17;const J=new b(n.crateRim,ve);J.position.y=.32;const re=new b(n.carrotRoot,de);re.position.set(-.16,.3,0),re.scale.set(1.4,1.4,1.4),re.rotation.z=-.15;const we=new b(n.carrotRoot,de);we.position.set(.16,.3,0),we.scale.set(1.4,1.4,1.4),we.rotation.z=.15;const Me=new b(n.carrotRoot,de);Me.position.set(0,.34,.08),Me.scale.set(1.5,1.5,1.5);const He=new b(n.carrotTop,t.flat(D.carrotFoliage,.8));He.position.set(0,.44,.08),He.scale.set(1.3,1.3,1.3),We.add(Te,J,re,we,Me,He),fe.add(We);const qe=new me,Ae=new b(n.crateBox,ce);Ae.position.y=.17;const U=new b(n.crateRim,ve);U.position.y=.32;const _e=new b(n.cabbageHeart,ke);_e.position.set(-.16,.28,0),_e.scale.setScalar(1.4);const K=new b(n.cabbageHeart,ke);K.position.set(.16,.28,0),K.scale.setScalar(1.4);const ae=new b(n.cabbageHeart,t.flat(D.cabbageHeartLight,.8));ae.position.set(0,.34,.06),ae.scale.setScalar(1.5),qe.add(Ae,U,_e,K,ae),fe.add(qe),Bt(fe),ue.add(fe),Se.push({group:fe,sheaf:Y,carrotBox:We,cabbageBox:qe})}Bt(o);const ze=new Ne(D.wheatYoung),Fe=new Ne(D.wheatMid),Ce=new Ne(D.wheatRipe),X=new It;let te="wheat",P=0,Le=!1,ie=0,he=!1;const pe=(xe=0)=>{if(!Le){w.visible=!1,L.visible=!1,N.visible=!1,V.visible=!1,G.visible=!1,oe.visible=!1;return}const fe=.16+P*.92,A=P>.42,S=A?st.smoothstep(P,.42,.95):0;w.visible=te==="wheat",L.visible=te==="wheat"&&A,N.visible=te==="carrot",V.visible=te==="carrot"&&P>.35,G.visible=te==="cabbage",oe.visible=te==="cabbage"&&P>.38;let H=0;for(let Z=0;Z<d;Z++)for(let ne=0;ne<f;ne++){const Y=(ne/(f-1)-.5)*(s-1.35),Ee=(Z/(d-1)-.5)*(r-1.35),Pe=.88+(Z*7+ne*5)%5*.06,Ie=xe*(.3+P*.7)*Math.sin(Z*.9+ne*.7);if(X.position.set(Y,.26,Ee),X.rotation.set(Ie,(Z*3+ne*11)%8*.4,-Ie*.6),X.scale.set(fe,fe*Pe,fe),X.updateMatrix(),te==="wheat")w.setMatrixAt(H,X.matrix),A&&(X.scale.set(S,S*Pe,S),X.updateMatrix(),L.setMatrixAt(H,X.matrix));else if(te==="carrot"){if(N.setMatrixAt(H,X.matrix),P>.35){const We=st.smoothstep(P,.35,1);X.position.set(Y,.2,Ee),X.scale.set(We,We,We),X.updateMatrix(),V.setMatrixAt(H,X.matrix)}}else if(te==="cabbage"&&(G.setMatrixAt(H,X.matrix),P>.38)){const We=st.smoothstep(P,.38,1);X.position.set(Y,.22,Ee),X.scale.set(We,We,We),X.updateMatrix(),oe.setMatrixAt(H,X.matrix)}H++}te==="wheat"?(w.instanceMatrix.needsUpdate=!0,A&&(L.instanceMatrix.needsUpdate=!0)):te==="carrot"?(N.instanceMatrix.needsUpdate=!0,P>.35&&(V.instanceMatrix.needsUpdate=!0)):te==="cabbage"&&(G.instanceMatrix.needsUpdate=!0,P>.38&&(oe.instanceMatrix.needsUpdate=!0))};return pe(0),{object:o,setCrop(xe,fe,A,S){const H=S??"wheat";if((H!==te||fe!==Le||Math.abs(xe-P)>1e-4)&&(te=H,P=xe,Le=fe,he=!0,fe&&te==="wheat"&&(xe<.55?R.color.copy(ze).lerp(Fe,xe/.55):R.color.copy(Fe).lerp(Ce,(xe-.55)/.45))),!Le&&he&&(pe(0),he=!1),A!==ie||he){ie=A;const Z=Math.min(Se.length,Math.ceil(A/1.5));for(let ne=0;ne<Se.length;ne++){const Y=Se[ne],Ee=ne<Z;Y.group.visible=Ee,Ee&&(Y.sheaf.visible=te==="wheat",Y.carrotBox.visible=te==="carrot",Y.cabbageBox.visible=te==="cabbage")}}},sway(xe){Le?(pe(Math.sin(xe*2.2)*.07),he=!1):he&&(pe(0),he=!1)},setWeather(xe){g.color.copy(v),a.color.copy(c),xe.rain>.001&&(g.color.lerp(m,xe.rain*.45),a.color.lerp(l,xe.rain*.42)),xe.drought>.001&&(g.color.lerp(p,xe.drought*.35),a.color.lerp(h,xe.drought*.32));const fe=.94-xe.rain*.35+xe.drought*.04;g.roughness=fe,a.roughness=fe}}}const mo=[{name:"Claude",isFemale:!1,skin:D.skinWarm,hair:2365973,tunic:9385511,pants:2829877,boots:4073754,accent:13933378},{name:"Codex",isFemale:!1,skin:D.skinFair,hair:7885102,tunic:3694910,pants:5722179,boots:4336155,accent:13145662},{name:"Gemini",isFemale:!1,skin:14855046,hair:2435638,tunic:2446755,pants:2962498,boots:1974309,accent:5871080},{name:"DeepSeek",isFemale:!0,skin:16507861,hair:2381982,tunic:1979998,pants:1979998,boots:2827037,accent:16052712},{name:"Pip",isFemale:!1,skin:D.skinWarm,hair:14264409,tunic:1931906,pants:3681316,boots:2825750,accent:15051067},{name:"Ivy",isFemale:!0,skin:D.skinFair,hair:9124382,tunic:4879189,pants:3362107,boots:3680029,accent:15787730},{name:"Rusty",isFemale:!1,skin:D.skinWarm,hair:3811357,tunic:10898218,pants:3030354,boots:2300436,accent:14596202},{name:"Rowan",isFemale:!0,skin:16771549,hair:14473424,tunic:7218500,pants:2496294,boots:2233630,accent:16109400}];function cf(){return{leg:new an(.065,.44,3,6),boot:new le(.13,.16,.22),pantsTrousers:new be(.16,.15,.16,8),skirt:new be(.16,.32,.7,10),torsoMale:new be(.2,.16,.42,8),torsoFemale:new be(.17,.13,.38,8),chestLapel:new le(.12,.2,.05),belt:new be(.165,.165,.06,8),beltBuckle:new le(.06,.07,.04),apron:new le(.22,.48,.06),neck:new be(.055,.065,.1,6),arm:new an(.048,.38,3,6),hand:new St(.045,5,4),toolHandle:new be(.025,.025,.75,5),toolBlade:new le(.04,.24,.14),head:new St(.135,10,8),eye:new St(.024,5,4),sunglasses:new le(.14,.036,.03),hairCapMale:new St(.142,9,7),hairBangsMale:new le(.09,.06,.05),hairCapFemale:new St(.144,9,7),hairLockFemale:new an(.032,.32,3,5),hairBackFemale:new an(.05,.4,3,5),maidRibbon:new pt(.05,.12,5),maidFrill:new es(.138,.022,4,12,Math.PI),hatBrim:new be(.3,.32,.025,12),hatCrown:new be(.15,.17,.12,10),beretCap:new be(.17,.19,.07,10),cargoSack:new tn(.38,1),bakerToque:new be(.16,.15,.22,10),bakerPeelHandle:new be(.02,.02,.72,5),bakerPeelBlade:new le(.22,.2,.03),preserveBandana:new be(.165,.165,.09,10),preservePaddle:new be(.022,.022,.65,5),cargoBox:new le(.62,.35,.48),cargoBoxRim:new le(.66,.08,.52),cargoBasket:new be(.32,.25,.38,8),cargoApple:new St(.105,6,5),cargoBread:new an(.08,.28,3,5),cargoJar:new be(.08,.08,.2,6),cargoCarrot:new pt(.12,.3,5),cargoCabbage:new tn(.15,0),headband:new be(.142,.142,.035,10),brooch:new tn(.045,0)}}function Nw(i,e,t=cf()){const n=(i%mo.length+mo.length)%mo.length,s=mo[n],r=new me,o=new ft({color:s.tunic,roughness:.82,flatShading:!0}),a=new ft({color:s.accent,roughness:.8,flatShading:!0}),c=e.smooth(s.skin,.72),l=e.flat(s.hair,.78),h=e.flat(s.pants,.84),u=e.flat(s.boots,.88),d=e.flat(3547926,.85),f=e.flat(13740622,.4,.6),g=new me;g.position.set(-.11,.82,0);const v=new me;v.position.set(.11,.82,0);const m=()=>{const J=new me,re=new b(t.leg,s.isFemale?c:h);re.position.y=-.34;const we=new b(t.boot,u);return we.position.set(0,-.74,.03),J.add(re,we),J};g.add(m()),v.add(m()),r.add(g,v);const p=new me;p.position.set(0,.82,0),r.add(p);let y=null;if(s.isFemale){y=new b(t.skirt,o),y.position.y=-.35;const J=new b(t.torsoFemale,o);J.position.y=.2;const re=new b(t.apron,a);re.position.set(0,-.16,.14);const we=new b(t.belt,a);we.position.y=.02,p.add(y,J,re,we)}else{const J=new b(t.pantsTrousers,h);J.position.y=.08;const re=new b(t.belt,d);re.position.y=.16;const we=new b(t.beltBuckle,f);we.position.set(0,.16,.17);const Me=new b(t.torsoMale,o);if(Me.position.y=.38,p.add(J,re,we,Me),n===0){const He=new b(t.chestLapel,c);He.position.set(0,.44,.15),p.add(He)}}const x=s.isFemale?.2:.24,_=s.isFemale?.4:.48,I=new me;I.position.set(-x,_,0);const E=new me;E.position.set(x,_,0);const T=()=>{const J=new me,re=new b(t.arm,o);re.position.y=-.22;const we=new b(t.hand,c);return we.position.y=-.43,J.add(re,we),J};I.add(T()),E.add(T());const R=new me,M=new b(t.toolHandle,e.flat(D.woodDark,.88));M.rotation.x=Math.PI/2.2,M.position.set(0,-.42,.2);const w=new b(t.toolBlade,e.flat(D.cobbleLight,.5,.4));w.position.set(0,-.5,.48),R.add(M,w),R.visible=!1;const L=new me,B=new b(t.bakerPeelHandle,e.flat(D.wallWood,.88));B.rotation.x=Math.PI/2.2,B.position.set(0,-.4,.2);const O=new b(t.bakerPeelBlade,e.flat(D.woodLight,.85));O.position.set(0,-.46,.5),L.add(B,O),L.visible=!1;const N=new me,V=new b(t.preservePaddle,e.flat(D.woodDark,.88));V.rotation.x=Math.PI/2.2,V.position.set(0,-.38,.2);const z=new b(new be(.06,.04,.08,6),e.flat(D.copperHoop,.6,.3));z.position.set(0,-.44,.46),N.add(V,z),N.visible=!1,E.add(R,L,N),p.add(I,E);const q=new me;q.position.set(0,s.isFemale?.42:.58,0),p.add(q);const G=new b(t.neck,c);G.position.y=.05,q.add(G);const oe=new b(t.head,c);oe.position.y=.2,q.add(oe);const ue=e.flat(2039076,.4);for(const J of[-.045,.045]){const re=new b(t.eye,ue);re.position.set(J,.2,.13),q.add(re)}if(n===3){const J=new b(t.hairCapFemale,l);J.position.set(0,.22,-.02);const re=new b(t.hairLockFemale,l);re.position.set(-.11,.05,.06),re.rotation.z=.1;const we=new b(t.hairLockFemale,l);we.position.set(.11,.05,.06),we.rotation.z=-.1;const Me=new b(t.hairBackFemale,l);Me.position.set(0,.02,-.13),Me.rotation.x=-.22;const He=new b(t.maidFrill,a);He.position.set(0,.23,.01),He.rotation.x=-Math.PI/2.3;const qe=new b(t.maidRibbon,l);qe.position.set(-.16,.2,.02),qe.rotation.z=Math.PI/2.8;const Ae=new b(t.maidRibbon,l);Ae.position.set(.16,.2,.02),Ae.rotation.z=-Math.PI/2.8,q.add(J,re,we,Me,He,qe,Ae)}else if(n===0){const J=new b(t.hairCapMale,l);J.position.set(0,.22,-.01),J.scale.set(1.02,1.05,1.02);const re=new b(t.hairBangsMale,l);re.position.set(.02,.31,.1),re.rotation.z=-.15,q.add(J,re)}else if(n===1){const J=new b(t.hairCapMale,l);J.position.set(0,.23,-.02);const re=new b(t.hairBangsMale,l);re.position.set(-.03,.3,.11),re.rotation.z=.18,q.add(J,re)}else if(n===2){const J=new b(t.hairCapMale,l);J.position.set(0,.23,-.02),J.scale.set(.98,.98,.98);const re=new b(t.sunglasses,e.flat(1381915,.3,.8));re.position.set(0,.2,.132),q.add(J,re)}else if(n===4){const J=new b(t.hairCapMale,l);J.position.set(0,.22,-.02);const re=new b(t.beretCap,e.flat(1931906,.82));re.position.set(.03,.31,-.02),re.rotation.z=-.22,q.add(J,re)}else if(n===5){const J=new b(t.hairCapFemale,l);J.position.set(0,.22,-.02);const re=new b(t.hairLockFemale,l);re.position.set(-.11,.05,.06),re.rotation.z=.12;const we=new b(t.hairLockFemale,l);we.position.set(.11,.05,.06),we.rotation.z=-.12;const Me=new b(t.hairBackFemale,l);Me.position.set(0,.02,-.13),Me.rotation.x=-.22;const He=new b(t.brooch,e.flat(D.daisyCenter,.8));He.position.set(.12,.24,.08),q.add(J,re,we,Me,He)}else if(n===6){const J=new b(t.hairCapMale,l);J.position.set(0,.22,-.02);const re=new b(t.headband,e.flat(4466200,.88));re.position.set(0,.22,-.01),q.add(J,re)}else{const J=new b(t.hairCapFemale,l);J.position.set(0,.22,-.02);const re=new b(t.hairLockFemale,l);re.position.set(-.11,.05,.06),re.rotation.z=.1;const we=new b(t.hairBackFemale,l);we.position.set(0,.02,-.13),we.rotation.x=-.22;const Me=new b(t.brooch,e.flat(16109400,.4,.6));Me.position.set(0,.08,.14),q.add(J,re,we,Me)}const ge=new b(t.hatBrim,e.flat(14595932,.85));ge.position.y=.35,ge.visible=!1;const Se=new b(t.hatCrown,e.flat(14595932,.85));Se.position.y=.42,Se.visible=!1;const Oe=new b(t.beretCap,e.flat(15920868,.8));Oe.position.set(.02,.34,-.02),Oe.rotation.z=.15,Oe.visible=!1;const j=new b(t.bakerToque,e.flat(16052712,.85));j.position.set(0,.42,0),j.visible=!1;const ce=new b(t.preserveBandana,e.flat(D.jamBerry,.82));ce.position.set(0,.31,-.01),ce.visible=!1,q.add(ge,Se,Oe,j,ce);const ve=new me;ve.position.set(0,.52,-.28);const de=new me,ke=new b(t.cargoSack,e.flat(D.wheatRipe,.84));ke.scale.set(1.15,.95,.9);const ze=new b(new be(.14,.14,.06,6),e.flat(D.sackRope,.9));ze.position.y=.38,ke.add(ze);const Fe=ke.clone();Fe.position.set(0,.42,.05),Fe.scale.set(.92,.82,.82),de.add(ke,Fe);const Ce=new me,X=new b(t.cargoSack,e.flat(D.flourBag,.82));X.scale.set(1.15,.95,.9);const te=new b(new be(.38,.38,.12,8),e.flat(D.flourRibbon,.85));te.position.y=.04;const P=new b(new be(.14,.14,.06,6),e.flat(D.flourRibbon,.85));P.position.y=.38,X.add(te,P);const Le=X.clone();Le.position.set(0,.42,.05),Le.scale.set(.92,.82,.82),Ce.add(X,Le);const ie=J=>{const re=new me,we=e.flat(D.wallWood,.88),Me=e.flat(D.woodDark,.9),He=new me,qe=new b(t.cargoBox,we),Ae=new b(t.cargoBoxRim,Me);Ae.position.y=.16,He.add(qe,Ae,J());const U=new me,_e=new b(t.cargoBox,we),K=new b(t.cargoBoxRim,Me);return K.position.y=.16,U.add(_e,K,J()),U.position.set(0,.42,.04),U.scale.setScalar(.92),re.add(He,U),{group:re,layer2:U}},he=ie(()=>{const J=new me,re=new b(t.cargoCarrot,e.flat(D.carrotOrange,.8));re.position.set(-.16,.12,0),re.rotation.z=-.15;const we=new b(t.cargoCarrot,e.flat(D.carrotOrange,.8));we.position.set(.16,.12,0),we.rotation.z=.15;const Me=new b(t.cargoCarrot,e.flat(D.carrotOrange,.8));Me.position.set(0,.16,.08);const He=new b(new pt(.1,.16,5),e.flat(D.carrotFoliage,.8));return He.position.set(0,.32,.08),J.add(re,we,Me,He),J}),pe=ie(()=>{const J=new me,re=new b(t.cargoCabbage,e.flat(D.cabbageEmerald,.8));re.position.set(-.16,.12,0);const we=new b(t.cargoCabbage,e.flat(D.cabbageEmerald,.8));we.position.set(.16,.12,0);const Me=new b(t.cargoCabbage,e.flat(D.cabbageHeartLight,.8));return Me.position.set(0,.16,.06),J.add(re,we,Me),J}),xe=new me,fe=new me,A=new b(t.cargoBasket,e.flat(D.wickerBasket,.88));fe.add(A);for(let J=0;J<5;J++){const re=new b(t.cargoApple,e.flat(J===0?D.appleShine:D.appleRed,.65));if(J===4)re.position.set(0,.3,0);else{const we=J/4*Math.PI*2;re.position.set(Math.cos(we)*.12,.22,Math.sin(we)*.12)}fe.add(re)}const S=fe.clone();S.position.set(0,.44,.04),S.scale.setScalar(.9),xe.add(fe,S);const H=ie(()=>{const J=new me,re=e.flat(D.breadGolden,.85),we=new b(t.cargoBread,re);we.rotation.z=Math.PI/2.3,we.position.set(-.14,.14,0);const Me=new b(t.cargoBread,re);Me.rotation.z=Math.PI/2.3,Me.position.set(.14,.14,0);const He=new b(t.cargoBread,e.flat(D.breadCrust,.85));return He.rotation.z=Math.PI/2.3,He.position.set(0,.18,.08),J.add(we,Me,He),J}),Z=ie(()=>{const J=new me,re=new b(t.cargoJar,e.flat(D.jamBerry,.55));re.position.set(-.15,.12,0);const we=new b(t.cargoJar,e.flat(D.jamAmber,.55));we.position.set(.15,.12,0);const Me=new b(t.cargoJar,e.flat(D.jamBerry,.55));Me.position.set(0,.16,.08);const He=new b(new be(.09,.09,.04,6),e.flat(D.jamLid,.8));He.position.set(-.15,.24,0);const qe=He.clone();qe.position.set(.15,.24,0);const Ae=He.clone();return Ae.position.set(0,.28,.08),J.add(re,we,Me,He,qe,Ae),J});ve.add(de,Ce,he.group,pe.group,xe,H.group,Z.group),ve.visible=!1,p.add(ve),Bt(r);let ne=i*1.3,Y=!1,Ee=null,Pe=-1,Ie="wheat",We=!0;const Te=()=>{if(Pe<=0){ve.visible=!1;return}ve.visible=!0;const J=Pe>=3;de.visible=Ie==="wheat",Fe.visible=J,Ce.visible=Ie==="flour",Le.visible=J,he.group.visible=Ie==="carrot",he.layer2.visible=J,pe.group.visible=Ie==="cabbage",pe.layer2.visible=J,xe.visible=Ie==="apple",S.visible=J,H.group.visible=Ie==="bread",H.layer2.visible=J,Z.group.visible=Ie==="jam",Z.layer2.visible=J};return{object:r,setState(J,re,we,Me){J!==Ee&&(Ee=J,ge.visible=J==="farm"||J==="sell",Se.visible=J==="farm",Oe.visible=J==="mill",R.visible=J==="farm",j.visible=J==="bake",L.visible=J==="bake",ce.visible=J==="preserve",N.visible=J==="preserve",We=!0),re!==Y&&(Y=re,We=!0);const He=Me??"wheat";(we!==Pe||He!==Ie)&&(Pe=we,Ie=He,Te(),We=!0)},tick(J){if(!(J===0&&!We))if(We=!1,ne+=J,Y){const re=ne*7.5,we=Math.sin(re)*.45;g.rotation.x=we,v.rotation.x=-we,y&&(y.rotation.x=-we*.12),Pe>0?(I.rotation.x=-.55+Math.sin(re)*.08,E.rotation.x=-.55-Math.sin(re)*.08):(I.rotation.x=-we*.65,E.rotation.x=we*.65),p.position.y=.82+Math.abs(Math.sin(re))*.035,p.rotation.x=.05,q.rotation.z=Math.sin(re*.5)*.04}else g.rotation.x=0,v.rotation.x=0,y&&(y.rotation.x=0),p.position.y=.82+Math.sin(ne*2)*.012,p.rotation.x=0,Ee==="farm"?(E.rotation.x=-.45+Math.sin(ne*4.2)*.4,I.rotation.x=-.15):Ee==="mill"||Ee==="sell"?(I.rotation.x=-.28+Math.sin(ne*3.2)*.18,E.rotation.x=-.28-Math.sin(ne*3.2)*.18):Ee==="bake"?(I.rotation.x=-.32+Math.sin(ne*3.5)*.18,E.rotation.x=-.42+Math.cos(ne*3.5)*.22):Ee==="preserve"?(I.rotation.x=-.18,E.rotation.x=-.38+Math.sin(ne*3)*.16,E.rotation.z=Math.cos(ne*3)*.16):(I.rotation.x=0,E.rotation.x=0),q.rotation.z=Math.sin(ne*1.5)*.02}}}function Fw(i,e,t){const n=new me;n.name=`FruitTree_${i}`;const s=new me;n.add(s);const r=new be(1.7,1.85,.12,16);r.translate(0,.06,0);const o=new ft({color:D.soilDark,roughness:.94,flatShading:!0}),a=new b(r,o);a.receiveShadow=!0,s.add(a);const c=new es(1.78,.12,6,16);c.rotateX(Math.PI/2),c.translate(0,.09,0);const l=t.flat(D.cobbleMid,.9),h=new b(c,l);s.add(h);const u=new me,d=new be(.04,.04,.9,6),f=t.flat(D.woodDark,.9),g=new b(d,f);g.position.set(.4,.45,.3),g.rotation.z=-.1;const v=new le(.36,.24,.04),m=t.flat(D.woodLight,.85),p=new b(v,m);p.position.set(.4,.8,.3),p.rotation.y=.3;const y=new b(new be(.02,.02,.75,5),f);y.position.set(-.35,.42,-.2),y.rotation.x=.22,y.rotation.z=.18;const x=new b(new le(.12,.18,.02),t.flat(D.ironHoop,.5,.3));x.position.set(-.35,.14,-.26),x.rotation.x=.22,x.rotation.z=.18,u.add(g,p,y,x),n.add(u);const _=new me,I=new b(new be(.04,.06,1.4,6),t.flat(D.trunk,.88));I.position.y=.7;const E=new b(new be(.035,.035,1.5,5),f);E.position.set(.12,.75,.02),E.rotation.z=-.05;const T=t.flat(D.treeLeaf,.85),R=new b(new bn(.24,0),T);R.position.set(0,1.35,0);const M=new b(new bn(.18,0),T);M.position.set(.14,1.25,.08),_.add(I,E,R,M),_.visible=!1,n.add(_);const w=new me;n.add(w);const L=t.flat(D.trunk,.88),B=new b(new be(.32,.48,1.4,8),L);B.position.y=.7;const O=new b(new be(.26,.32,1.2,7),L);O.position.set(.04,1.8,.02),O.rotation.z=-.08;const N=new be(.14,.22,1.2,6),V=new b(N,L);V.position.set(-.45,2.6,.2),V.rotation.set(.3,.4,.6);const z=new b(N,L);z.position.set(.48,2.55,-.3),z.rotation.set(-.4,.2,-.65);const q=new b(N,L);q.position.set(.1,2.7,.55),q.rotation.set(-.7,-.2,.1),w.add(B,O,V,z,q);const G=new me;G.position.y=2.8,w.add(G);const oe=new ft({color:D.treeLeaf,roughness:.84,flatShading:!0}),ue=new ft({color:D.treeLeafDark,roughness:.86,flatShading:!0}),ge=[[0,.9,0,1.35,!1],[-1,.6,.4,1.15,!0],[1.1,.5,-.35,1.12,!1],[.2,.4,1.05,1.1,!0],[-.3,.35,-1,1.05,!1],[.85,.85,.6,.95,!1],[-.7,.95,-.5,.92,!0]];for(const[he,pe,xe,fe,A]of ge){const S=new bn(fe,0),H=new b(S,A?ue:oe);H.position.set(he,pe,xe),G.add(H)}const Se=new me;G.add(Se);const Oe=new St(.12,7,6);Oe.scale(1,.95,1);const j=t.flat(D.appleRed,.65,.08),ce=[[-.8,.2,.9],[-1.3,.5,.2],[-1,1,.4],[-.4,.3,1.4],[.3,.1,1.4],[.9,.3,1],[1.4,.4,.1],[1.3,.7,-.5],[.8,.2,-1.1],[-.2,.2,-1.3],[-.9,.4,-.9],[-.1,1.5,.3],[.6,1.3,.4],[-.6,1.3,-.4],[.3,1.4,-.5],[0,1.8,0],[-1.1,.2,-.3],[1.1,.3,.6]];for(const[he,pe,xe]of ce){const fe=new b(Oe,j);fe.position.set(he,pe,xe),Se.add(fe)}Se.visible=!1;const ve=new me;n.add(ve);const de=new be(.26,.21,.32,8);de.translate(0,.16,0);const ke=new es(.26,.035,4,8);ke.rotateX(Math.PI/2),ke.translate(0,.32,0);const ze=t.flat(D.wickerBasket,.88),Fe=t.flat(D.woodDark,.9),Ce=[[.95,.12,.45],[.65,.12,.85],[1.15,.12,.95],[-.85,.12,.65],[-.65,.12,1.05]],X=[];for(let he=0;he<Ce.length;he++){const[pe,xe,fe]=Ce[he],A=new me;A.position.set(pe,xe,fe);const S=new b(de,ze),H=new b(ke,Fe);A.add(S,H);for(let Z=0;Z<5;Z++){const ne=new b(Oe,j);ne.scale.setScalar(.72);const Y=Z/4*Math.PI*2,Ee=Z===4?0:.11;ne.position.set(Math.cos(Y)*Ee,.28+(Z===4?.07:0),Math.sin(Y)*Ee),A.add(ne)}A.visible=!1,ve.add(A),X.push(A)}Bt(n);let te=!1,P=0,Le=!1,ie=0;return{object:n,setState(he,pe,xe,fe){if(te=he,P=Math.max(0,Math.min(1,pe)),Le=xe,ie=Math.max(0,fe),!he){u.visible=!0,_.visible=!1,w.visible=!1,Se.visible=!1;for(const S of X)S.visible=!1;return}if(u.visible=!1,P<.28){_.visible=!0,w.visible=!1,Se.visible=!1;const S=.55+P/.28*.45;_.scale.set(S,S,S)}else{_.visible=!1,w.visible=!0;const H=.45+st.smoothstep(P,.28,1)*.55;w.scale.set(H,H,H),Se.visible=Le&&P>=.7}const A=Math.min(X.length,Math.ceil(ie/1));for(let S=0;S<X.length;S++)X[S].visible=S<A},update(he,pe,xe){if(te&&P>=.28){const fe=Math.sin(pe*1.8)*.04;G.rotation.z=fe,G.rotation.x=Math.cos(pe*1.3)*.025}xe.drought>.01?oe.roughness=.88+xe.drought*.06:xe.rain>.01&&(oe.roughness=.84-xe.rain*.25)}}}function Ow(i){const e=[];for(const s of Object.values(i.paths))for(let r=1;r<s.length;r++)e.push([s[r-1],s[r]]);const t=i.plaza,n=i.buildings.farmhouse.door;return e.push([n,[0,5.5]],[[0,5.5],t]),e.push([t,[12,-3.5]],[[12,-3.5],[24,-14]],[[24,-14],[38,-26]],[[0,5.5],[-14,14]],[[-14,14],[-32,25]],[[-1.5,-2],[-4.5,-13]],[[-4.5,-13],[-5.5,-27]]),e}function go(i,e,t,n,s=0){var r,o;if(Math.hypot(i-t.plaza[0],e-t.plaza[1])<6.8+s)return!0;for(const a of Object.values(t.buildings)){const c=a.size[0]/2+2.6+s,l=a.size[1]/2+2.6+s;if(Math.abs(i-a.pos[0])<c&&Math.abs(e-a.pos[1])<l||Math.hypot(i-a.door[0],e-a.door[1])<2.6+s)return!0}for(const a of t.fieldSlots){const c=t.fieldSize[0]/2+2+s,l=t.fieldSize[1]/2+2+s;if(Math.abs(i-a[0])<c&&Math.abs(e-a[1])<l)return!0}if(t.orchardSlots){const a=(((r=t.orchardSize)==null?void 0:r[0])??5)/2+2+s,c=(((o=t.orchardSize)==null?void 0:o[1])??5)/2+2+s;for(const l of t.orchardSlots)if(Math.abs(i-l[0])<a&&Math.abs(e-l[1])<c)return!0}for(const[a,c]of n)if(ca(i,e,a,c)<2.5+s)return!0;if(t.villagers){for(const a of Object.values(t.villagers))if(Math.hypot(i-a.gate[0],e-a.gate[1])<3.8+s||Math.hypot(i-a.plaza[0],e-a.plaza[1])<2.2+s||Math.hypot(i-a.shop[0],e-a.shop[1])<2.2+s)return!0}return!1}function ii(i,e,t,n){const s=t.plaza[0],r=t.plaza[1];let o=Math.hypot(i-s,e-r)-4.8;for(const[l,h]of n){const u=ca(i,e,l,h)-1.35;u<o&&(o=u)}let a=Math.sin(i*.09)*Math.cos(e*.11)*.09;const c=Math.max(0,Math.hypot(i*.75,e)-28);if(a+=Math.min(1.8,c*.045)*(.5+.5*Math.sin(i*.12+e*.1)),o<1.1){const l=st.smoothstep(1.1-o,0,1.35);a*=1-l*.85,a-=l*.03}return a}function Bw(i,e,t){const[n,s]=i.mapSize,r=new $s(n+84,s+84,136,108);r.rotateX(-Math.PI/2);const o=r.attributes.position,a=new Float32Array(o.count*3),c=new Ne,l=new Ne(D.grass),h=new Ne(D.grassDark),u=new Ne(D.grassLight),d=new Ne(D.grassSunlit),f=new Ne(D.grassDeepMoss),g=new Ne(D.grassGoldenMeadow),v=new Ne(D.roadEdgeGrass),m=new Ne(D.dirt),p=new Ne(D.dirtDark),y=i.plaza[0],x=i.plaza[1];for(let N=0;N<o.count;N++){const V=o.getX(N),z=o.getZ(N),q=Math.sin(V*.048+1.2)*Math.cos(z*.054-.7),G=Math.sin(V*.125-z*.11+.35)*Math.cos(V*.075+z*.14),oe=(t()-.5)*.18,ue=q*.55+G*.75+oe;if(ue>.42){const j=Math.min(1,(ue-.42)*1.5);c.copy(u).lerp(g,j*.65).lerp(d,j*.4)}else if(ue>.08)c.copy(l).lerp(u,Math.min(1,(ue-.08)*1.8));else if(ue<-.32){const j=Math.min(1,(-ue-.32)*1.6);c.copy(h).lerp(f,j*.75)}else c.copy(l).lerp(h,Math.min(1,-ue*1.4));let ge=Math.hypot(V-y,z-x)-4.8;for(const[j,ce]of e){const ve=ca(V,z,j,ce)-1.35;ve<ge&&(ge=ve)}if(ge>=1.1&&ge<2.8){const j=st.smoothstep(2.8-ge,0,1.7);c.lerp(v,j*.45)}let Se=Math.sin(V*.09)*Math.cos(z*.11)*.09;const Oe=Math.max(0,Math.hypot(V*.75,z)-28);if(Se+=Math.min(1.8,Oe*.045)*(.5+.5*Math.sin(V*.12+z*.1)),ge<1.1){const j=st.smoothstep(1.1-ge,0,1.35),ve=Math.abs(Math.abs(ge+1.35)-.52)<.24&&ge<-.15;c.lerp(ve?p:m,j),Se*=1-j*.85,Se-=j*.03}c.toArray(a,N*3),o.setY(N,Se)}r.setAttribute("color",new ln(a,3)),r.computeVertexNormals();const _=new ft({vertexColors:!0,roughness:.96,metalness:0}),I=new b(r,_);I.receiveShadow=!0;const E=new me;E.name="rainPuddles";const T=new ft({color:2966360,roughness:.08,metalness:.45,transparent:!0,opacity:0,depthWrite:!1}),R=[{pos:[-3.2,-2.4],scale:[1.25,.75],rotY:.3},{pos:[.6,-2.6],scale:[1.4,.8],rotY:-.2},{pos:[8.6,-3.8],scale:[1.3,.75],rotY:.6},{pos:[5.6,2.4],scale:[1.15,.65],rotY:-.4},{pos:[-1.4,5.2],scale:[1.2,.7],rotY:.5}],M=new be(.85,.85,.02,8);for(const N of R){const V=new b(M,T),z=ii(N.pos[0],N.pos[1],i,e)+.025;V.position.set(N.pos[0],z,N.pos[1]),V.scale.set(N.scale[0],1,N.scale[1]),V.rotation.y=N.rotY,V.receiveShadow=!0,E.add(V)}E.visible=!1;const w=new Ne(16777215),L=new Ne(8556188),B=new Ne(16114877);return{mesh:I,puddles:E,setWeather:N=>{_.color.copy(w),N.drought>.001&&_.color.lerp(B,N.drought*.42),N.rain>.001&&_.color.lerp(L,N.rain*.45),_.roughness=.96-N.rain*.44+N.drought*.03;const V=N.rain>.015;E.visible=V,V&&(T.opacity=Math.min(.82,N.rain*.82))}}}function lf(i){const e=new me,t=i.flat(D.trunk,.9),n=new b(new be(.08,.11,2.5,6),t);n.position.y=1.25;const s=new b(new le(.75,.09,.09),t);s.position.set(.32,2.38,0);const r=new b(new le(.42,.08,.08),t);r.position.set(.18,2.14,0),r.rotation.z=-Math.PI/4;const o=new b(new pt(.18,.12,6),i.flat(D.ironHoop,.7,.3));o.position.set(.62,2.32,0);const a=new b(new be(.13,.1,.26,6),i.windowGlow());return a.position.set(.62,2.14,0),e.add(n,s,r,o,a),Bt(e,!0,!0)}function zw(i,e,t){const n=new me,[s,r]=i.plaza;n.position.set(s,0,r);const o=7.4,a=4.6,c=new b(new le(o,.12,a),e.flat(D.dirtDark,.95));c.position.set(.4,.05,-.3),c.receiveShadow=!0,n.add(c);const l=e.flat(D.trunk,.9),h=new le(o+.2,.18,.18),u=new le(.18,.18,a-.18),d=new le(.22,.22,.22),f=new b(h,l);f.position.set(.4,.09,a/2-.3),f.receiveShadow=!0,f.castShadow=!0;const g=new b(h,l);g.position.set(.4,.09,-a/2-.3),g.receiveShadow=!0,g.castShadow=!0;const v=new b(u,l);v.position.set(.4-o/2,.09,-.3),v.receiveShadow=!0,v.castShadow=!0;const m=new b(u,l);m.position.set(.4+o/2,.09,-.3),m.receiveShadow=!0,m.castShadow=!0,n.add(f,g,v,m);for(const z of[-1,1])for(const q of[-1,1]){const G=new b(d,l);G.position.set(.4+z*o/2,.11,-.3+q*a/2),G.receiveShadow=!0,G.castShadow=!0,n.add(G)}const p=[D.cobbleLight,D.cobbleMid,D.cobbleDark],y=new be(.42,.46,.1,7);for(let z=-3;z<=3.6;z+=.82)for(let q=-2.2;q<=1.6;q+=.78){const G=z+(t()-.5)*.22,oe=q+(t()-.5)*.22,ue=new b(y,e.flat(p[Math.floor(t()*p.length)],.88)),ge=.75+t()*.55,Se=.75+t()*.55;ue.scale.set(ge,1,Se),ue.rotation.y=t()*Math.PI,ue.position.set(G,.1+t()*.02,oe),ue.receiveShadow=!0,n.add(ue)}const x=new me;x.position.set(-2.2,.08,.1),n.add(x);const _=new tn(.24,0);for(let z=0;z<10;z++){const q=z/10*Math.PI*2,G=.78+(t()-.5)*.06,oe=new b(_,e.flat(p[z%3],.85));oe.position.set(Math.cos(q)*G,.14,Math.sin(q)*G),oe.scale.set(1.1,.75,.95),oe.rotation.y=q,oe.castShadow=!0,oe.receiveShadow=!0,x.add(oe)}const I=new b(new be(.62,.68,.1,8),new ft({color:D.emberRed,emissive:D.emberRed,emissiveIntensity:1.4,roughness:.7}));I.position.y=.06,x.add(I);const E=new be(.1,.11,1.15,6);E.rotateZ(Math.PI/2);const T=e.flat(D.woodDark,.92);for(let z=0;z<3;z++){const q=new b(E,T);q.position.y=.18+z*.03,q.rotation.y=z*Math.PI/3+.3,q.rotation.z=.12,q.castShadow=!0,x.add(q)}const R=new ft({color:D.fire,emissive:D.fire,emissiveIntensity:1.5,roughness:.35,flatShading:!0}),M=new ft({color:D.flameCore,emissive:D.flameCore,emissiveIntensity:1.9,roughness:.25,flatShading:!0}),w=new b(new pt(.42,1.05,6),R);w.position.y=.65;const L=new b(new pt(.24,.72,5),M);L.position.set(.03,.52,.02),x.add(w,L);const B=[],O=new kl(.06,0);for(let z=0;z<4;z++){const q=new b(O,M);q.position.set((t()-.5)*.3,.9+z*.3,(t()-.5)*.3),x.add(q),B.push(q)}const N=lf(e);N.position.set(-3.1,0,-.6),n.add(N);let V=0;return{group:n,anim:{update(z,q,G){V+=z;const oe=G?Math.max(.65,1-G.rain*.35):1,ue=(1+q*.45)*oe,ge=(1+Math.sin(V*14)*.09+Math.cos(V*8.3)*.06)*oe,Se=(1+Math.cos(V*17)*.11)*oe;w.scale.set(ge,ge*ue,ge),w.rotation.y=V*1.8,L.scale.set(Se,Se*ue,Se),R.emissiveIntensity=(1.45+q*.55+Math.sin(V*11)*.2)*oe;for(let Oe=0;Oe<B.length;Oe++){const j=(V*1.1+Oe*.25)%1,ce=B[Oe];ce.position.y=.75+j*1.45,ce.position.x=Math.sin(V*4+Oe*2)*.22,ce.position.z=Math.cos(V*3.5+Oe*2)*.22,ce.scale.setScalar((1-j)*1.1)}}}}}function Ol(){return{coniferTrunk:new be(.16,.26,1,6),coniferCone:new pt(1,1,7),broadTrunk:new be(.18,.28,1,6),crownMain:new bn(1,1),crownPuff:new bn(1,0)}}function Hw(i,e,t=Ol()){const n=new me,s=.85+e()*.45,r=1.1+e()*.4,o=new b(t.coniferTrunk,i.flat(D.trunk,.92));o.scale.set(1,r,1),o.position.y=r/2,n.add(o);const a=[D.treeLeaf,D.treeLeafDark,2522435],c=i.flat(a[Math.floor(e()*a.length)],.86),l=3;for(let h=0;h<l;h++){const u=(1.35-h*.28)*s,d=(1.55-h*.18)*s,f=new b(t.coniferCone,c);f.scale.set(u,d,u),f.position.y=r+h*(.82*s)+d*.42,f.rotation.y=e()*Math.PI,f.rotation.z=(e()-.5)*.06,n.add(f)}return Bt(n)}function Vw(i,e,t=Ol()){const n=new me,s=1.35+e()*.55,r=new b(t.broadTrunk,i.flat(D.trunk,.92));r.scale.set(1,s,1),r.position.y=s/2,n.add(r);const o=[D.treeLeaf,D.grassDark,3710034,D.treeLeafDark],a=i.flat(o[Math.floor(e()*o.length)],.85),c=i.flat(o[Math.floor(e()*o.length)],.85),l=1.15+e()*.35,h=new b(t.crownMain,a);h.position.y=s+l*.72,h.scale.set(l*1.08,l*.88,l*1.04),n.add(h);const u=2+Math.floor(e()*2);for(let d=0;d<u;d++){const f=d/u*Math.PI*2+e()*.8,g=l*(.62+e()*.2),v=new b(t.crownPuff,d%2===0?a:c);v.scale.setScalar(g),v.position.set(Math.cos(f)*l*.58,s+l*(.55+e()*.35),Math.sin(f)*l*.58),n.add(v)}return n.rotation.y=e()*Math.PI*2,Bt(n)}function hf(){return{post:new le(.14,.72,.14),rail:new le(1,.08,.06)}}function Gw(i,e,t=hf()){const n=new me,s=e.flat(D.trunk,.9),r=Math.max(2,Math.round(i/2.2)+1),o=i/(r-1);for(let l=0;l<r;l++){const h=new b(t.post,s);h.position.set(-i/2+l*o,.36,0),n.add(h)}const a=new b(t.rail,s);a.scale.x=i,a.position.y=.56;const c=new b(t.rail,s);return c.scale.x=i,c.position.y=.28,n.add(a,c),Bt(n)}function uf(){return{pillar:new be(.18,.22,3.2,7),plinth:new tn(.36,0),lintel:new le(4.2,.24,.26),brace:new le(.14,.75,.14),roof:new le(4.5,.12,.72),roofRidge:new le(4.6,.08,.14),signPlaque:new le(1.8,.46,.08),signBorder:new le(1.88,.54,.06),chain:new be(.015,.015,.22,5),lanternGlass:new be(.11,.08,.2,6),lanternCap:new pt(.16,.1,6),milestone:new tn(.38,0)}}function Ww(i,e=uf(),t="village"){const n=new me;n.name=`VillageGate_${t}`;const s=i.flat(D.trunk,.88),r=i.flat(D.woodDark,.92),o=i.flat(D.cobbleMid,.85),a=i.flat(D.roofOrange,.82),c=i.flat(D.ironHoop,.6,.3),l=i.flat(D.woodLight,.85),h=1.9;for(const T of[-h,h]){const R=new b(e.plinth,o);R.position.set(T,.22,0),R.scale.set(1.2,.85,1.2);const M=new b(e.pillar,s);M.position.set(T,1.6,0),n.add(R,M)}const u=new b(e.lintel,s);u.position.set(0,2.85,0);const d=new b(e.brace,s);d.position.set(-h+.38,2.52,0),d.rotation.z=Math.PI/4;const f=new b(e.brace,s);f.position.set(h-.38,2.52,0),f.rotation.z=-Math.PI/4;const g=new b(e.roof,a);g.position.set(0,3.02,0);const v=new b(e.roofRidge,r);v.position.set(0,3.1,0);const m=new me;m.position.set(0,2.4,0);const p=new b(e.signPlaque,l),y=new b(e.signBorder,r);y.position.z=-.01;for(const T of[-.6,.6]){const R=new b(e.chain,c);R.position.set(T,.33,0),m.add(R)}m.add(p,y);const x=new me;x.position.set(-h-.12,2.1,.28);const _=new b(e.lanternGlass,i.windowGlow()),I=new b(e.lanternCap,c);I.position.y=.14,x.add(_,I);const E=new b(e.milestone,o);return E.position.set(h+.45,.3,.15),E.scale.set(1,1.4,.85),n.add(u,d,f,g,v,m,x,E),Bt(n)}function $w(i,e,t,n,s,r){var ke,ze,Fe;const o=[{pos:[-5.2,-7.2],rotY:1.52,len:6},{pos:[-4.4,2.8],rotY:1.35,len:5.5},{pos:[10.2,.8],rotY:-.38,len:3.6},{pos:[4.4,7.6],rotY:-.96,len:4},{pos:[16.5,-1.8],rotY:-.78,len:5.2},{pos:[-9.8,12.8],rotY:.54,len:4.8}],a=hf();for(const Ce of o){const X=Gw(Ce.len,n,a);X.position.set(Ce.pos[0],ii(Ce.pos[0],Ce.pos[1],e,t),Ce.pos[1]),X.rotation.y=Ce.rotY,i.add(X)}const c=uf(),l=[{id:"sw",pos:((ke=e.villagers)==null?void 0:ke.tom.gate)??[-30,23.8],rotY:Math.atan2(16,-9.8)},{id:"north",pos:((ze=e.villagers)==null?void 0:ze.yuki.gate)??[-5.4,-25],rotY:Math.atan2(.9,12)},{id:"ne",pos:((Fe=e.villagers)==null?void 0:Fe.lin.gate)??[34,-22.6],rotY:Math.atan2(-10,8.6)}];for(const Ce of l){const X=Ww(n,c,Ce.id);X.position.set(Ce.pos[0],ii(Ce.pos[0],Ce.pos[1],e,t),Ce.pos[1]),X.rotation.y=Ce.rotY,i.add(X)}const h=r==="high"?125:65,u=Ol(),[d,f]=e.mapSize;for(let Ce=0,X=0;Ce<h&&X<2400;X++){const te=(s()-.5)*(d+30),P=(s()-.5)*(f+26);if(go(te,P,e,t,.6))continue;const Le=s()>.46?Vw(n,s,u):Hw(n,s,u);Le.position.set(te,ii(te,P,e,t),P),i.add(Le),Ce++}const g=r==="high"?55:28,v=new bn(.48,0),m=new tn(.42,0);for(let Ce=0,X=0;Ce<g&&X<900;X++){const te=(s()-.5)*(d+16),P=(s()-.5)*(f+14);if(go(te,P,e,t,-.4))continue;const Le=ii(te,P,e,t);if(s()>.32){const ie=new b(v,n.flat(s()>.5?D.treeLeaf:D.grassDark,.88)),he=.65+s()*.7;ie.scale.set(he*1.2,he*.85,he),ie.position.set(te,Le+he*.3,P),ie.rotation.y=s()*Math.PI,ie.castShadow=!0,ie.receiveShadow=!0,i.add(ie)}else{const ie=new b(m,n.flat(D.cobbleMid,.9)),he=.6+s()*.85;ie.scale.set(he*1.3,he*.75,he),ie.position.set(te,Le+he*.22,P),ie.rotation.set(s()*.3,s()*Math.PI,s()*.3),ie.castShadow=!0,ie.receiveShadow=!0,i.add(ie)}Ce++}const p=r==="high"?220:100,y=new be(.16,.1,.06,6);y.translate(0,.22,0);const x=new pt(.11,.2,4);x.translate(0,.1,0);const _=new Ln(y,n.flat(16777215,.7),p),I=new Ln(x,n.flat(D.grassDark,.9),p);_.receiveShadow=!0,I.receiveShadow=!0;const E=new Ne(D.daisyWhite),T=new Ne(D.daisyCenter),R=new It;let M=0;for(let Ce=0;M<p&&Ce<1800;Ce++){const X=(s()-.5)*(d+10),te=(s()-.5)*(f+10);if(go(X,te,e,t,-.8))continue;const P=ii(X,te,e,t),Le=.7+s()*.65;R.position.set(X,P+.02,te),R.rotation.set(0,s()*Math.PI*2,0),R.scale.setScalar(Le),R.updateMatrix(),_.setMatrixAt(M,R.matrix),_.setColorAt(M,M%3===0?T:E),I.setMatrixAt(M,R.matrix),M++}_.count=M,I.count=M,_.instanceMatrix.needsUpdate=!0,_.instanceColor&&(_.instanceColor.needsUpdate=!0),I.instanceMatrix.needsUpdate=!0,i.add(I,_);const w=[{pos:[-5.6,-2.4],rotY:.35},{pos:[7.8,-4.6],rotY:-.65},{pos:[8.6,2.2],rotY:.9},{pos:[-1.6,8.5],rotY:-.3}];for(const Ce of w){const X=lf(n);X.position.set(Ce.pos[0],ii(Ce.pos[0],Ce.pos[1],e,t),Ce.pos[1]),X.rotation.y=Ce.rotY,i.add(X)}const L=r==="high"?180:80,B=new pt(.12,.36,4);B.translate(0,.18,0);const O=new ft({color:16777215,roughness:.92,flatShading:!0}),N=new Ln(B,O,L);N.receiveShadow=!0;const V=new Ne(D.grassTuftBright),z=new Ne(D.grassTuftDark);let q=0;for(let Ce=0;q<L&&Ce<1500;Ce++){const X=(s()-.5)*(d+8),te=(s()-.5)*(f+8);let P=999;for(const[he,pe]of t){const xe=ca(X,te,he,pe);xe<P&&(P=xe)}if((P<1.35||P>3.8)&&s()>.35||go(X,te,e,t,-.6))continue;const Le=ii(X,te,e,t),ie=.75+s()*.7;R.position.set(X,Le,te),R.rotation.set((s()-.5)*.25,s()*Math.PI*2,(s()-.5)*.25),R.scale.set(ie*1.3,ie,ie*.9),R.updateMatrix(),N.setMatrixAt(q,R.matrix),N.setColorAt(q,q%2===0?V:z),q++}N.count=q,N.instanceMatrix.needsUpdate=!0,N.instanceColor&&(N.instanceColor.needsUpdate=!0),i.add(N);const G=new be(.32,.38,.36,7),oe=new pt(.14,.16,6),ue=new be(.04,.05,.16,5),ge=n.flat(D.shroomRed,.8),Se=n.flat(D.shroomStem,.9),Oe=n.flat(D.trunk,.9),j=[[-11.5,-16.2],[8.4,-13.5],[18.5,3.2],[-10.2,17.5],[2.5,16.8]];for(const[Ce,X]of j){const te=ii(Ce,X,e,t),P=new me;P.position.set(Ce,te,X),P.rotation.y=s()*Math.PI*2;const Le=new b(G,Oe);Le.position.y=.18,P.add(Le);for(let ie=0;ie<3;ie++){const he=new me,pe=ie*Math.PI*2/3+.4,xe=.48+s()*.15;he.position.set(Math.cos(pe)*xe,0,Math.sin(pe)*xe);const fe=new b(ue,Se);fe.position.y=.08;const A=new b(oe,ge);A.position.y=.18,he.add(fe,A);const S=.7+s()*.5;he.scale.setScalar(S),P.add(he)}Bt(P),i.add(P)}const ce=new Ne(16777215),ve=new Ne(14074984),de=new Ne(9222276);return{setWeather(Ce){O.color.copy(ce),Ce.drought>.001&&O.color.lerp(ve,Ce.drought*.42),Ce.rain>.001&&O.color.lerp(de,Ce.rain*.35)}}}function Ka(i,e,t,n){const s=new Dl;s.moveTo(-i/2,0),s.lineTo(0,t),s.lineTo(i/2,0),s.closePath();const r=new sa(s,{depth:e,bevelEnabled:!1});return r.translate(0,0,-e/2),new b(r,n)}function Xw(i,e){const t=new me;t.name="UnderConstruction";const n=new b(new le(4.6,.22,3.6),i.flat(D.cobbleDark,.94));n.position.y=.11,n.receiveShadow=!0,t.add(n);const s=i.flat(D.woodDark,.9);for(const g of[-2.35,2.35])for(const v of[-1.85,1.85]){const m=new b(new be(.04,.04,.8,6),s);m.position.set(g,.4,v),t.add(m)}const r=i.flat(D.scaffoldWood,.88),o=new be(.05,.05,3.2,6);for(const g of[.6,2.1])for(const v of[-1.2,.5]){const m=new b(o,r);m.position.set(g,1.6,v),t.add(m)}const a=new le(1.8,.08,.35);for(let g=0;g<3;g++){const v=new b(a,r);v.position.set(1.35,1.8+g%2*.05,-.9+g*.4),t.add(v)}const c=new b(new le(.9,.48,.7),i.flat(D.cobbleMid,.9));c.position.set(-1.4,.46,-.6),t.add(c);const l=new b(new le(1.6,.42,.65),i.flat(D.wallWood,.88));l.position.set(-1.2,.43,.7),l.rotation.y=.12,t.add(l);const h=new b(new pt(.75,.65,5),i.flat(D.tarpBlue,.85));h.position.set(.1,.54,.8),h.rotation.y=.4,t.add(h);const u=new b(new be(.04,.04,1.3,6),s);u.position.set(0,.65,1.85);const d=new b(new le(.65,.48,.05),i.flat(D.woodLight,.85));d.position.set(0,1.15,1.85);const f=new b(new le(.52,.36,.02),i.flat(3501222,.8));return f.position.set(0,1.15,1.88),t.add(u,d,f),Bt(t),t}function jw(i,e,t=os()){const n=new me;n.name=`Processor_${i}`;const s=Xw(e);n.add(s);const r=new me;r.name=`Building_${i}`,n.add(r);const o=[],a=[],c=new ft({color:i==="bakery"?D.smoke:15920629,roughness:.95,flatShading:!0}),l=new tn(.24,0);if(i==="bakery"){const p=new b(new le(4.6000000000000005,.28,3.7),e.flat(D.cobbleDark,.92));p.position.y=.14,r.add(p);const y=new b(new le(4.4,2.4,3.5),e.flat(D.wallCream,.88));y.position.y=.28+2.4/2,r.add(y);const x=e.flat(D.wallWood,.88);for(const ve of[-4.4/2+.1,4.4/2-.1])for(const de of[-3.5/2+.1,3.5/2-.1]){const ke=new b(new le(.22,2.4,.22),x);ke.position.set(ve,.28+2.4/2,de),r.add(ke)}const _=new b(new le(4.4+.05,.14,3.5+.05),x);_.position.y=.28+2.4,r.add(_);const I=Ka(4.4+.6,3.5+.7,1.8,e.flat(D.bakeryRoof,.82));I.position.y=.28+2.4,r.add(I);const E=Ka(1.8,1,.5,e.flat(D.bakeryRoof,.82));E.position.set(.6,2.45,3.5/2+.45),E.rotation.y=Math.PI/2,r.add(E);const T=new b(new le(.85,1.6,.1),e.flat(D.woodDark,.88));T.position.set(.6,.28+.8,3.5/2+.06),r.add(T);const R=new b(new le(1.4,1.1,.12),x);R.position.set(-1,1.5,3.5/2+.06);const M=e.windowGlow().clone(),w=new b(new le(1.2,.9,.06),M);w.position.set(-1,1.5,3.5/2+.1),r.add(R,w),a.push({mesh:w,baseIntensity:.4,workIntensity:1.8});const L=new b(new le(1.3,.08,.32),x);L.position.set(-1,1.05,3.5/2+.2);const B=e.flat(D.breadCrust,.85),O=new b(new an(.06,.28,3,5),B);O.rotation.z=Math.PI/2.2,O.position.set(-1.25,1.15,3.5/2+.2);const N=new b(new St(.09,6,5),B);N.scale.set(1.1,.7,1.1),N.position.set(-.85,1.14,3.5/2+.2),r.add(L,O,N);const V=new b(new le(.85,.38,.05),e.flat(D.woodLight,.85));V.position.set(.6,2.75,3.5/2+.12);const z=new b(new es(.1,.035,4,8),B);z.position.set(.6,2.75,3.5/2+.16),r.add(V,z);const q=e.flat(D.cobbleMid,.9),G=new b(new le(1.3,1.8,2.1),q);G.position.set(4.4/2+.45,.28+.9,-.2);const oe=new b(new be(.65,.65,2.1,8,1,!1,0,Math.PI),q);oe.rotation.x=Math.PI/2,oe.position.set(4.4/2+.45,.28+1.8,-.2);const ue=new ft({color:2232584,emissive:D.emberRed,emissiveIntensity:.6,roughness:.7,flatShading:!0}),ge=new b(new le(.08,.65,.65),ue);ge.position.set(4.4/2+.45,.28+.65,.88),r.add(G,oe,ge),a.push({mesh:ge,baseIntensity:.6,workIntensity:2.8});const Se=new b(new le(.7,3.4,.7),e.flat(D.cobbleDark,.92));Se.position.set(4.4/2+.25,.28+1.7+1.6,-.6);const Oe=new b(new le(.85,.16,.85),e.flat(D.wallWood,.88));Oe.position.set(4.4/2+.25,.28+3.4+1.6,-.6),r.add(Se,Oe);const j=new k(4.4/2+.25,.28+3.5+1.6,-.6);for(let ve=0;ve<4;ve++){const de=new b(l,c);de.position.copy(j),de.castShadow=!1,de.receiveShadow=!1,de.visible=!1,r.add(de),o.push(de)}const ce=new be(.09,.09,.9,6);ce.rotateZ(Math.PI/2);for(let ve=0;ve<4;ve++){const de=new b(ce,e.flat(D.woodDark,.9));de.position.set(-4.4/2-.1,.28+.15+ve%2*.18,-.4+Math.floor(ve/2)*.4),r.add(de)}}else{const p=new b(new le(4.6000000000000005,.28,3.7),e.flat(D.cobbleMid,.9));p.position.y=.14,r.add(p);const y=new b(new le(4.4,2.3,3.5),e.flat(D.wallCream,.88));y.position.y=.28+2.3/2,r.add(y);const x=e.flat(D.wallWood,.88);for(const j of[-4.4/2+.1,4.4/2-.1])for(const ce of[-3.5/2+.1,3.5/2-.1]){const ve=new b(new le(.2,2.3,.2),x);ve.position.set(j,.28+2.3/2,ce),r.add(ve)}const _=Ka(4.4+.6,3.5+.7,1.7,e.flat(D.preserveryRoof,.84));_.position.y=.28+2.3,r.add(_);const I=new b(new le(.85,1.55,.1),e.flat(D.woodDark,.88));I.position.set(-.6,.28+.77,3.5/2+.06),r.add(I);const E=new b(new le(1.5,1.1,.12),x);E.position.set(.9,1.45,3.5/2+.06);const T=e.windowGlow().clone(),R=new b(new le(1.3,.9,.06),T);R.position.set(.9,1.45,3.5/2+.1),r.add(E,R),a.push({mesh:R,baseIntensity:.45,workIntensity:1.9});const M=new be(.06,.06,.14,6),w=new be(.07,.07,.03,6),L=e.flat(D.jamLid,.8),B=e.flat(D.jamBerry,.6),O=e.flat(D.jamAmber,.6);for(let j=0;j<4;j++){const ce=new b(M,j%2===0?B:O),ve=new b(w,L);ve.position.y=.08,ce.add(ve),ce.position.set(.55+j*.24,1.25,3.5/2+.16),r.add(ce)}const N=new b(new le(.75,.36,.05),e.flat(D.woodLight,.85));N.position.set(-.6,2.65,3.5/2+.12);const V=new b(new be(.08,.08,.18,6),B);V.position.set(-.6,2.65,3.5/2+.16),r.add(N,V);const z=e.flat(D.copperHoop,.62,.38),q=new b(new be(.55,.55,1.6,8),z);q.position.set(-4.4/2-.25,.28+.8,.2);const G=new b(new St(.55,8,6,0,Math.PI*2,0,Math.PI/2),z);G.position.set(-4.4/2-.25,.28+1.6,.2);const oe=new b(new be(.18,.18,2.2,7),z);oe.position.set(-4.4/2-.25,.28+1.6+1.1,.2);const ue=new b(new pt(.3,.25,7),z);ue.position.set(-4.4/2-.25,.28+1.6+2.25,.2),r.add(q,G,oe,ue);const ge=new k(-4.4/2-.25,.28+1.6+2.3,.2);for(let j=0;j<4;j++){const ce=new b(l,c);ce.position.copy(ge),ce.castShadow=!1,ce.receiveShadow=!1,ce.visible=!1,r.add(ce),o.push(ce)}const Se=Un(e,t);Se.position.set(4.4/2+.25,0,.5);const Oe=Un(e,t);Oe.position.set(4.4/2+.45,0,-.2),Oe.rotation.y=.4,r.add(Se,Oe)}Bt(r),r.visible=!1;let h=!1,u=!1,d=0,f=0;return{object:n,setState(g,v,m){if(h=g,u=v,d=Math.max(0,Math.min(1,m)),s.visible=!g,r.visible=g,!g){for(const p of o)p.visible=!1;return}for(const p of a){const y=p.mesh.material;if(y&&y.emissive){const x=u?p.workIntensity+d*.4:p.baseIntensity;y.emissiveIntensity=x}}for(const p of o)p.visible=u},update(g){if(!h||!u)return;f+=g;const v=i==="bakery"?new k(2.45,5.38,-.6):new k(-2.45,4.18,.2);for(let m=0;m<o.length;m++){const p=(f*.48+m*.25)%1,y=o[m];y.position.y=v.y+p*2.2,y.position.x=v.x+Math.sin(f*1.8+m)*.22*p,y.position.z=v.z+Math.cos(f*1.5+m)*.18*p;const x=Math.sin(p*Math.PI)*(.65+p*.55);y.scale.setScalar(Math.max(.01,x))}}}}function df(){return{leg:new an(.062,.44,3,6),boot:new le(.13,.16,.22),pantsTrousers:new be(.16,.15,.16,8),skirtLong:new be(.17,.36,.74,10),skirtTeacher:new be(.16,.31,.64,10),torsoMale:new be(.2,.165,.44,8),torsoFemale:new be(.17,.135,.38,8),belt:new be(.165,.165,.06,8),beltBuckle:new le(.06,.07,.04),neck:new be(.055,.065,.1,6),arm:new an(.048,.36,3,6),hand:new St(.045,5,4),head:new St(.135,10,8),eye:new St(.024,5,4),chefToqueBase:new be(.15,.145,.08,10),chefToquePuff:new be(.185,.16,.2,10),chefApronChest:new le(.22,.24,.05),chefApronSkirt:new le(.26,.44,.05),chefApronPocket:new le(.14,.12,.02),chefButton:new be(.018,.018,.02,6),chefPanHandle:new be(.02,.02,.38,5),chefPanBase:new be(.16,.14,.06,8),spectaclesFrame:new le(.145,.038,.025),teacherCollar:new le(.16,.08,.06),teacherRibbon:new pt(.04,.11,4),bunnyBody:new tn(.115,1),bunnyHead:new St(.075,7,6),bunnyEar:new pt(.028,.13,4),bunnyInnerEar:new pt(.016,.1,4),bunnyTail:new St(.032,5,4),bunnyEye:new St(.014,4,3),bunnyNose:new le(.016,.012,.014),shawlWrap:new be(.25,.22,.28,9),shawlFold:new le(.24,.34,.08),shawlBrooch:new be(.035,.035,.03,6),hairBun:new St(.08,8,6),hairPin:new be(.012,.012,.22,5),hairCap:new St(.142,9,7),hairBangs:new le(.1,.06,.05),hairTeacherLock:new an(.032,.28,3,5)}}function qw(i,e,t=df()){const n=new me;n.name=`VillagerVisual_${i}`;const s=new me;s.position.set(-.11,.82,0);const r=new me;r.position.set(.11,.82,0),n.add(s,r);const o=new me;o.position.set(0,.82,0),n.add(o);const a=new me;a.position.set(-.25,1.25,0);const c=new me;c.position.set(.25,1.25,0),n.add(a,c);const l=new me;l.position.set(0,1.4,0),n.add(l);const h=e.flat(2234901,.5,.2),u=new b(t.eye,h);u.position.set(-.048,.01,.125);const d=new b(t.eye,h);d.position.set(.048,.01,.125),l.add(u,d);let f=null,g=null;if(i==="tom"){const x=e.smooth(D.skinWarm,.72),_=e.flat(2759959,.8),I=e.flat(16052198,.85),E=e.flat(16777215,.75),T=e.flat(2632757,.85),R=e.flat(3679255,.88),M=e.flat(D.copperHoop,.45,.6),w=e.flat(D.woodDark,.9),L=()=>{const ke=new me,ze=new b(t.leg,T);ze.position.y=-.34;const Fe=new b(t.boot,R);return Fe.position.set(0,-.74,.03),ke.add(ze,Fe),ke};s.add(L()),r.add(L());const B=new b(t.torsoMale,I);B.position.y=.22;const O=new b(t.neck,x);O.position.y=.48;const N=e.flat(4865072,.5,.3);for(const ke of[-.045,.045])for(let ze=.14;ze<=.34;ze+=.09){const Fe=new b(t.chefButton,N);Fe.rotation.x=Math.PI/2,Fe.position.set(ke,ze,.165),o.add(Fe)}const V=new b(t.chefApronChest,E);V.position.set(0,.22,.155);const z=new b(t.chefApronSkirt,E);z.position.set(0,-.2,.145);const q=new b(t.chefApronPocket,E);q.position.set(0,-.15,.175),o.add(B,O,V,z,q);const G=new b(t.head,x),oe=new b(t.hairCap,_);oe.position.set(0,.02,-.015);const ue=new b(t.hairBangs,_);ue.position.set(0,.09,.11);const ge=new b(t.chefToqueBase,E);ge.position.set(0,.14,-.01);const Se=new b(t.chefToquePuff,E);Se.position.set(0,.26,-.01),l.add(G,oe,ue,ge,Se);const Oe=ke=>{const ze=new me,Fe=new b(t.arm,I);Fe.position.y=-.2;const Ce=new b(t.hand,x);return Ce.position.y=-.42,ze.add(Fe,Ce),{g:ze,handMesh:Ce}},j=Oe();a.add(j.g);const ce=Oe();c.add(ce.g),g=new me;const ve=new b(t.chefPanHandle,w);ve.rotation.x=Math.PI/2,ve.position.set(0,0,.15);const de=new b(t.chefPanBase,M);de.position.set(0,0,.35),g.add(ve,de),g.position.set(0,-.42,.05),g.rotation.set(.3,.2,0),c.add(g)}else if(i==="yuki"){const x=e.smooth(D.skinFair,.72),_=e.flat(7226662,.78),I=e.flat(14083058,.84),E=e.flat(12075602,.75),T=e.flat(2573140,.86),R=e.flat(2761760,.88),M=e.flat(16579836,.82),w=e.flat(16103618,.75),L=e.flat(1578002,.4),B=()=>{const ie=new me,he=new b(t.leg,x);he.position.y=-.34;const pe=new b(t.boot,R);return pe.position.set(0,-.74,.03),ie.add(he,pe),ie};s.add(B()),r.add(B());const O=new b(t.skirtTeacher,T);O.position.y=-.32;const N=new b(t.torsoFemale,I);N.position.y=.2;const V=new b(t.neck,x);V.position.y=.44;const z=new b(t.teacherCollar,e.flat(16777215,.8));z.position.set(0,.38,.12);const q=new b(t.teacherRibbon,E);q.rotation.x=Math.PI,q.position.set(0,.33,.15),o.add(O,N,V,z,q);const G=new b(t.head,x),oe=new b(t.hairCap,_);oe.position.set(0,.02,-.015);const ue=new b(t.hairBangs,_);ue.position.set(0,.09,.11);const ge=new b(t.hairTeacherLock,_);ge.position.set(-.13,-.08,.02);const Se=new b(t.hairTeacherLock,_);Se.position.set(.13,-.08,.02);const Oe=e.flat(9065514,.4,.3),j=new b(t.spectaclesFrame,Oe);j.position.set(0,.012,.138),l.add(G,oe,ue,ge,Se,j),a.rotation.set(.95,-.42,.22),c.rotation.set(.95,.42,-.22);const ce=()=>{const ie=new me,he=new b(t.arm,I);he.position.y=-.19;const pe=new b(t.hand,x);return pe.position.y=-.4,ie.add(he,pe),ie};a.add(ce()),c.add(ce()),f=new me,f.name="YukiPetBunny";const ve=new b(t.bunnyBody,M);ve.scale.set(1.1,.95,1.25);const de=new b(t.bunnyHead,M);de.position.set(0,.09,.11);const ke=new b(t.bunnyEar,M);ke.position.set(-.038,.21,.08),ke.rotation.set(-.15,0,-.12);const ze=new b(t.bunnyInnerEar,w);ze.position.set(-.038,.2,.095),ze.rotation.set(-.15,0,-.12);const Fe=new b(t.bunnyEar,M);Fe.position.set(.038,.21,.08),Fe.rotation.set(-.15,0,.12);const Ce=new b(t.bunnyInnerEar,w);Ce.position.set(.038,.2,.095),Ce.rotation.set(-.15,0,.12);const X=new b(t.bunnyEye,L);X.position.set(-.052,.1,.16);const te=new b(t.bunnyEye,L);te.position.set(.052,.1,.16);const P=new b(t.bunnyNose,w);P.position.set(0,.075,.18);const Le=new b(t.bunnyTail,M);Le.position.set(0,.02,-.14),f.add(ve,de,ke,ze,Fe,Ce,X,te,P,Le),f.position.set(0,.24,.24),o.add(f)}else{const x=e.smooth(D.skinWarm,.72),_=e.flat(3483682,.82),I=e.flat(7023938,.85),E=e.flat(13016143,.88),T=e.flat(14201416,.35,.65),R=e.flat(2366746,.9),M=()=>{const Se=new me,Oe=new b(t.leg,x);Oe.position.y=-.34;const j=new b(t.boot,R);return j.position.set(0,-.74,.03),Se.add(Oe,j),Se};s.add(M()),r.add(M());const w=new b(t.skirtLong,I);w.position.y=-.36;const L=new b(t.torsoFemale,I);L.position.y=.2;const B=new b(t.neck,x);B.position.y=.44;const O=new b(t.shawlWrap,E);O.position.set(0,.3,0);const N=new b(t.shawlFold,E);N.position.set(0,.2,.15);const V=new b(t.shawlBrooch,T);V.rotation.x=Math.PI/2,V.position.set(0,.24,.195),o.add(w,L,B,O,N,V);const z=new b(t.head,x),q=new b(t.hairCap,_);q.position.set(0,.02,-.015);const G=new b(t.hairBangs,_);G.position.set(0,.08,.11);const oe=new b(t.hairBun,_);oe.position.set(0,.05,-.16);const ue=new b(t.hairPin,T);ue.rotation.z=Math.PI/3,ue.position.set(0,.06,-.16),l.add(z,q,G,oe,ue),a.rotation.set(.65,-.32,.18),c.rotation.set(.65,.32,-.18);const ge=()=>{const Se=new me,Oe=new b(t.arm,I);Oe.position.y=-.19;const j=new b(t.hand,x);return j.position.y=-.4,Se.add(Oe,j),Se};a.add(ge()),c.add(ge())}Bt(n);let v=!1,m=!1,p=0,y=0;return{object:n,setState(x,_){v=x,m=_,x||(s.rotation.x=0,r.rotation.x=0,o.position.y=.82)},tick(x){if(p+=x,v){y+=x*7.2;const _=Math.sin(y)*.44;s.rotation.x=_,r.rotation.x=-_;const I=Math.abs(Math.sin(y*2))*.032;o.position.y=.82+I,i==="tom"?(a.rotation.x=-_*.7,c.rotation.x=.15+_*.25,g&&(g.rotation.z=Math.sin(y)*.08)):i==="yuki"?(a.rotation.x=.95+Math.sin(y)*.06,c.rotation.x=.95+Math.sin(y)*.06,f&&(f.position.y=.24+I*.7,f.rotation.z=Math.sin(y)*.04)):(a.rotation.x=.65-_*.18,c.rotation.x=.65+_*.18)}else{const _=Math.sin(p*2.2)*.012;if(o.position.y=.82+_,m){const I=Math.sin(p*.9)*.14;l.rotation.y=I,i==="tom"?(c.rotation.x=.25+Math.sin(p*1.4)*.08,g&&(g.rotation.x=.3+Math.sin(p*1.8)*.08)):i==="yuki"?f&&(f.position.y=.24+Math.sin(p*2.8)*.015,f.rotation.y=Math.sin(p*1.2)*.06):l.rotation.z=Math.sin(p*.6)*.03}else l.rotation.y=0,l.rotation.z=0}}}}const Yw=(i,e)=>{const t=Cw(20261025),n=new Rw,s=new me;s.name="FarmProtoWorldRoot";const r=Ow(i),o=Bw(i,r,t);s.add(o.mesh,o.puddles);const a=zw(i,n,t);s.add(a.group);const c=kw(i,n);s.add(c.group);const l=$w(s,i,r,n,t,e.quality),h=af(i),u=cf(),d=df(),f=[],g=[],v=[],m=[],p=[];let y=0,x=-1;const _={rain:0,drought:0,sunny:1};return{root:s,createField(I){const E=Uw(I,i,n,h);return f.push(E),E},createWorker(I){const E=Nw(I,n,u);return g.push(E),E},setStock(I,E,T){c.setStock(I,E)},setStockItems(I,E){var T;(T=c.setStockItems)==null||T.call(c,I)},setHousing(I){var E;(E=c.setHousingLevel)==null||E.call(c,I)},createFruitTree(I){const E=Fw(I,i,n);return v.push(E),E},createProcessor(I){const E=jw(I,n);return m.push(E),E},createVillager(I){const E=qw(I,n,d);return p.push(E),E},update(I,E){var B,O;y+=I;const T=E.weather??"sunny",R=T==="rain"?1:0,M=T==="drought"?1:0,w=T==="sunny"?1:0;_.rain=st.damp(_.rain,R,2.2,I),_.drought=st.damp(_.drought,M,2.2,I),_.sunny=st.damp(_.sunny,w,2.2,I);const L=E.phase==="evening"?1:E.time01>.58?st.smoothstep(E.time01,.58,.72):0;Math.abs(L-x)>1e-4&&(x=L,n.setWindowEveningFactor(L)),o.setWeather(_),l.setWeather(_),a.anim.update(I,L,_),c.update(I);for(const N of f)(B=N.setWeather)==null||B.call(N,_),N.sway(y);for(const N of v)N.update(I,y,_);for(const N of m)N.update(I);for(const N of p)(O=N.tick)==null||O.call(N,I)},dispose(){const I=new Set,E=new Set,T=new Set,R=M=>{M.traverse(w=>{const L=w;if(L.isMesh){if(L.geometry&&I.add(L.geometry),Array.isArray(L.material))for(const B of L.material)B&&E.add(B);else L.material&&E.add(L.material);L.isInstancedMesh&&T.add(L)}})};R(s);for(const M of f)R(M.object);for(const M of g)R(M.object);for(const M of v)R(M.object);for(const M of m)R(M.object);for(const M of p)R(M.object);for(const M of Object.values(h))I.add(M);for(const M of Object.values(u))I.add(M);for(const M of Object.values(d))I.add(M);for(const M of T)M.dispose();for(const M of I)M.dispose();for(const M of E)M.dispose();n.dispose()}}},Kw=Object.freeze(Object.defineProperty({__proto__:null,buildWorld:Yw},Symbol.toStringTag,{value:"Module"})),Jw={mapSize:[72,56],fieldSlots:[[-17,-9],[-9,-9],[-17,-1],[-9,-1],[-17,7],[-9,7]],fieldSize:[6.5,6.5],orchardSlots:[[-13,-17]],orchardSize:[5,5],buildings:{warehouse:{pos:[2,-6],rotY:0,size:[6,5],door:[2,-3]},mill:{pos:[15,-10],rotY:-.35,size:[5,5],door:[14,-7]},shop:{pos:[14,9],rotY:-.5,size:[6,5],door:[12.4,12]},farmhouse:{pos:[-3,14],rotY:.3,size:[7,6],door:[-3,10.5]},bakery:{pos:[8,-15],rotY:0,size:[5,4],door:[8,-12]},preservery:{pos:[1,-15],rotY:0,size:[5,4],door:[1,-12]}},spots:{field:[-5,-3],warehouse:[2,-3],mill:[14,-7],shop:[12.4,12],orchard:[-13,-14],bakery:[8,-12],preservery:[1,-12]},paths:{"field>warehouse":[[-5,-3],[-1.5,-2],[2,-3]],"warehouse>mill":[[2,-3],[7,-3],[11,-5],[14,-7]],"warehouse>shop":[[2,-3],[4,0],[7.5,5],[9.1,8.8],[10,11.1],[12.4,12]],"orchard>warehouse":[[-13,-14],[-5,-12],[-3,-5],[-1.5,-2],[2,-3]],"warehouse>bakery":[[2,-3],[5.8,-3.6],[7,-8],[8,-12]],"warehouse>preservery":[[2,-3],[-1.5,-2],[-2.4,-6],[-1.5,-10],[1,-12]]},plaza:[3,.5],villagers:{tom:{gate:[-30,23.8],plaza:[-.8,2.8],shop:[10.4,13.2],toPlaza:[[-30,23.8],[-14,14],[0,5.5],[-.8,2.8]],toShop:[[-.8,2.8],[2.5,4.6],[7.5,5],[9.1,8.8],[10.4,13.2]]},yuki:{gate:[-5.4,-25],plaza:[1.2,-1.6],shop:[11.4,13.8],toPlaza:[[-5.4,-25],[-4.5,-13],[-1.5,-2],[1.2,-1.6]],toShop:[[1.2,-1.6],[4.6,-.6],[6.6,2.6],[7.5,5],[9.1,8.8],[11.4,13.8]]},lin:{gate:[34,-22.6],plaza:[6.5,-.8],shop:[12.5,14.3],toPlaza:[[34,-22.6],[24,-14],[12,-3.5],[6.5,-.8]],toShop:[[6.5,-.8],[7,2],[7.5,5],[9.1,8.8],[12.5,14.3]]}}},Nn=Object.freeze({seed:178,cooldown:50,lifetime:120,multiplier:1.02,heartBonus:0,morningGift:!0,travelSeconds:8}),yn={tom:{name:"阿湯",day:1,favorite:"bread",likes:["flour","cabbage"]},yuki:{name:"小雪",day:2,favorite:"carrot",likes:["apple"]},lin:{name:"林嬸",day:3,favorite:"jam",likes:["apple","bread"]}},Dr=["tom","yuki","lin"];function ff(){return{socialSeed:Nn.seed,nextCommissionId:1,gifted:Object.fromEntries(Ct.map(i=>[i,0])),received:Object.fromEntries(Ct.map(i=>[i,0])),villagers:Dr.map(i=>({id:i,appeared:!1,points:0,giftedDay:0,rewardDay:0,location:"gate",destination:"gate",progress:0,commission:null,nextCommissionAt:0,completed:0,expired:0}))}}const Uu=i=>Math.floor(i.points/10),pf=(i,e)=>e==="wheat"?0:yn[i].favorite===e?3:yn[i].likes.includes(e)?2:1;function Zw(i,e,t){const n=i.villagers.find(r=>r.id===e);if(!n)return{ok:!1,reason:"Invalid villager"};if(!Ct.includes(t))return{ok:!1,reason:"Unknown item"};if(!n.appeared)return{ok:!1,reason:"Locked"};const s=Math.floor(i.time/180)+1;return n.giftedDay===s?{ok:!1,reason:"Already gifted"}:i.inventory[t]?(i.inventory[t]--,i.gifted[t]++,n.giftedDay=s,n.points=Math.min(50,n.points+pf(e,t)),{ok:!0}):{ok:!1,reason:"No item"}}const Ho=_f;function mf(i,e,t){return Math.round(e*Vo[i]*Nn.multiplier*(t?1+Nn.heartBonus:1))}function gf(i,e,t){e.commission=null,e.nextCommissionAt=i.time+Nn.cooldown,e.points=Math.max(0,Math.min(50,e.points+(t?-1:4))),t?e.expired++:e.completed++}function Qw(i){for(const e of i.villagers)if(!(i.day<yn[e.id].day)){if(e.appeared=!0,e.commission&&e.commission.expiresAt<=i.time&&gf(i,e,!0),i.time%180===0&&e.rewardDay!==i.day){e.rewardDay=i.day;const t=yn[e.id].likes[0];Nn.morningGift&&Uu(e)>=3&&Ho(i,t)&&$n(i)<En(i)&&(i.inventory[t]++,i.received[t]++)}if(!e.commission&&i.time>=e.nextCommissionAt&&i.time%180<120){i.socialSeed=Math.imul(i.socialSeed,1664525)+1013904223>>>0;const t=Ct.filter(o=>(o===yn[e.id].favorite||yn[e.id].likes.includes(o))&&Ho(i,o)&&i.produced[o]>0),n=t.length?t[(i.socialSeed>>>8)%t.length]:"flour",s=2+i.socialSeed%3,r=Uu(e)>=2;e.commission={id:i.nextCommissionId++,items:[{item:n,required:s,delivered:0}],bonus:r,reward:mf(n,s,r),expiresAt:i.time+Nn.lifetime}}ey(e,i.time%180>=120?"gate":e.commission?"shop":"plaza")}}function ey(i,e){i.location!==i.destination&&(i.progress++,i.progress>=Nn.travelSeconds&&(i.location=i.destination,i.progress=0)),i.location===i.destination&&i.location!==e&&(i.destination=i.location==="plaza"?e:"plaza",i.progress=0)}function ty(i){const e=s=>Number.isSafeInteger(s)&&s>=0,t=Math.floor(i.time/180)+1;if(!e(i.socialSeed)||i.socialSeed>4294967295||!e(i.nextCommissionId)||!i.nextCommissionId||![i.gifted,i.received].every(s=>s&&Object.keys(s).length===Ct.length&&Ct.every(r=>e(s[r])&&(Ho(i,r)||!s[r])))||!Array.isArray(i.villagers)||i.villagers.length!==3)return!1;const n=new Set;return i.villagers.every((s,r)=>{var c;if(!s||s.id!==Dr[r]||typeof s.appeared!="boolean"||s.appeared&&t<yn[s.id].day||!e(s.points)||s.points>50||!e(s.giftedDay)||s.giftedDay>t||!e(s.rewardDay)||s.rewardDay>t||!e(s.completed)||!e(s.expired)||!e(s.nextCommissionAt)||s.nextCommissionAt>i.time+Nn.cooldown||!["gate","plaza","shop"].includes(s.location)||!["gate","plaza","shop"].includes(s.destination)||!e(s.progress)||s.progress>=Nn.travelSeconds||s.location===s.destination&&s.progress!==0||s.location!==s.destination&&s.location!=="plaza"&&s.destination!=="plaza"||!s.appeared&&(s.points||s.giftedDay||s.rewardDay||s.completed||s.expired||s.commission||s.nextCommissionAt||s.location!=="gate"||s.destination!=="gate"))return!1;if(s.commission===null)return!0;const o=s.commission,a=(c=o==null?void 0:o.items)==null?void 0:c[0];return!o||!e(o.id)||!o.id||o.id>=i.nextCommissionId||n.has(o.id)||!Array.isArray(o.items)||o.items.length!==1||!a||!Ct.includes(a.item)||a.item==="wheat"||!Ho(i,a.item)||a.item!=="flour"&&(!yn[s.id].likes.includes(a.item)&&yn[s.id].favorite!==a.item||!i.produced[a.item])||!e(a.required)||a.required<2||a.required>4||!e(a.delivered)||a.delivered>=a.required||typeof o.bonus!="boolean"||o.reward!==mf(a.item,a.required,o.bonus)||!e(o.expiresAt)||o.expiresAt<=i.time||o.expiresAt>i.time+Nn.lifetime?!1:(n.add(o.id),!0)})}const Nu={field:"farm",orchard:"farm",warehouse:"haul",mill:"mill",shop:"sell",bakery:"bake",preservery:"preserve"},Ja=i=>Ct.map(e=>({item:e,amount:i.reduce((t,n)=>t+(n.item===e?n.amount:0),0)})).filter(e=>e.amount>0);function Vi(i,e,t){if(!Object.hasOwn(Nu,e))return null;const n=t===void 0?i.fields:i.fields.filter(u=>u.id===t);if(t!==void 0&&(e!=="field"||!n.length))return null;const s=Nu[e],r=i.workers.filter(u=>u.job===s),o=ht(i),a=u=>u.map(d=>({item:d,amount:i.inventory[d]})),c=n.map(u=>({item:u.crop,amount:u.harvested})),l=i.trees.map(u=>({item:"apple",amount:u.harvested})),h={site:e,job:s,workerIds:r.map(u=>u.id),waiting:null,paused:i.paused,inputs:[],outputs:[],groundStock:[],inTransit:[],progress01:0};if(e==="field"||e==="orchard"){const u=e==="orchard";h.groundStock=Ja(u?l:c);const d=u?i.trees.some(v=>v.ripe):n.some(v=>v.planted&&v.growth>=Gt[v.crop].seconds),f=u?i.trees.some(v=>!v.planted):n.some(v=>!v.planted&&!v.harvested),g=u?i.trees.map(v=>v.growth/40):n.map(v=>v.growth/Gt[v.crop].seconds);h.progress01=Math.min(1,Math.max(0,...g)),h.waiting=u&&!o.orchard?"Locked":h.groundStock.length?"Awaiting haul":d?r.length?"Awaiting harvest":"No worker":f?u||r.length?"Ready to plant":"No worker":"Growing"}else if(e==="warehouse")h.outputs=a(Ct),h.groundStock=Ja([...c,...l]),h.inTransit=Ja(i.workers.map(u=>({item:u.cargoItem,amount:u.cargo}))),h.waiting=r.length?$n(i)>=En(i)?"Warehouse full":!h.groundStock.length&&!h.inTransit.length?"Missing ingredients":null:"No worker",h.progress01=Math.max(0,...r.filter(u=>u.cargo>0).map(u=>u.progress/Qe.haulSeconds));else if(e==="mill"||e==="shop"){const u=e==="mill",d=u?["wheat"]:Ct.filter(v=>v!=="wheat");h.inputs=a(d),h.outputs=u?a(["flour"]):[];const f=u?i.inventory.wheat>=Qe.wheatPerFlour:h.inputs.some(v=>v.amount>0);h.waiting=r.length?f?null:"Missing ingredients":"No worker";const g=u?Math.max(1,Qe.millSeconds-i.upgrades.mill):Qe.sellSeconds;h.progress01=f?Math.min(1,Math.max(0,...r.map(v=>v.progress/g))):0}else{const u=hn[e],d=i.processors[e];h.inputs=a([u.input]),h.outputs=a([u.output]),h.waiting=o[e]?r.length?d.batch?null:i.inventory[u.input]<u.amount?"Missing ingredients":$n(i)-u.amount+1>En(i)?"Warehouse full":null:"No worker":"Locked",h.progress01=d.batch?1-d.batch.remaining/u.seconds:0}return h}const Ct=["wheat","flour","carrot","cabbage","apple","bread","jam"],Vo={wheat:0,flour:8,carrot:4,cabbage:7,apple:5,bread:20,jam:42},Gt={wheat:{seconds:20,yield:4},carrot:{seconds:24,yield:3},cabbage:{seconds:36,yield:4}},hn={bakery:{job:"bake",input:"flour",amount:2,output:"bread",seconds:6,day:3},preservery:{job:"preserve",input:"apple",amount:3,output:"jam",seconds:8,day:5}},Si=()=>({wheat:0,flour:0,carrot:0,cabbage:0,apple:0,bread:0,jam:0}),Go=()=>({batch:null,progress01:0,reserved:0,waiting:"Locked"}),vf=()=>({id:0,planted:!1,growth:0,growth01:0,progress01:0,ripe:!1,harvested:0,readyAt:0,harvestedAt:0,batches:0,waiting:"Locked"}),Bl=i=>({id:i,growth:0,planted:!0,harvested:0,crop:"wheat",nextCrop:"wheat",readyAt:0,harvestedAt:0});function ht(i){var a;const e=Math.floor(i.time/180)+1,t=(c,l)=>i.mode==="endless"?i.stats.earned>=l:e>=c,n=t(2,120),s=t(3,300),r=t(4,600),o=t(5,1e3);return{crops:n?["wheat","carrot","cabbage"]:["wheat"],jobs:Gl.filter(c=>(c!=="bake"||s)&&(c!=="preserve"||o)),orchard:r,bakery:s,preservery:o,newToday:i.mode==="endless"?[]:((a={2:["carrot","cabbage"],3:["bakery"],4:["orchard"],5:["preservery"]}[e])==null?void 0:a.slice())??[]}}function _f(i,e){const t=ht(i);return e==="carrot"||e==="cabbage"?t.crops.includes(e):e==="bread"?t.bakery:e==="apple"?t.orchard:e==="jam"?t.preservery:!0}const ts=Object.freeze({capacities:Object.freeze([4,6,8]),upgradeCosts:Object.freeze([120,240]),recruitCost:80});function zn(i){return ts.capacities[i.housingLevel]}function zl(i){return ts.upgradeCosts[i.housingLevel]??0}function Wo(i){return ts.recruitCost}function $o(i){return i.mode!=="endless"?{ok:!1,reason:"Locked"}:i.housingLevel>=ts.capacities.length-1?{ok:!1,reason:"Max level"}:i.coins<zl(i)?{ok:!1,reason:"Not enough coins"}:{ok:!0}}function Xo(i){return i.mode!=="endless"?{ok:!1,reason:"Locked"}:i.workers.length>=zn(i)?{ok:!1,reason:"Housing full"}:i.coins<Wo()?{ok:!1,reason:"Not enough coins"}:{ok:!0}}const gn=Object.freeze({earned:2600,days:5}),Ei=Object.freeze({sold:24,milled:24,ordersCompleted:2,reward:8}),vr=["sold","milled","ordersCompleted"],Hl=i=>({day:i,sold:0,milled:0,ordersCompleted:0,claimed:[]});function Vl(i){return i>=gn.earned?3:i>=Math.round(gn.earned*.85)?2:1}function ny(i,e){const t=!i||e&&e.earned>i.earned?e:i;return t?{...t}:null}function iy(i){return{daily:vr.map(e=>({key:e,progress:i.daily[e],target:Ei[e],claimed:i.daily.claimed.includes(e),reward:Ei.reward})),day:i.daily.day,streak:i.streak,bestStreak:i.bestStreak,bonusEarned:i.bonusEarned,result:i.result?{...i.result}:null,resultUnknown:i.resultUnknown}}const Qe=Object.freeze({daySeconds:180,growSeconds:20,harvestYield:4,haulSeconds:3,millSeconds:5,maxFields:6,sellSeconds:3,flourPrice:8,wheatPerFlour:2,capacity:24,weatherGrowth:Object.freeze({sunny:1,rain:1.3,drought:.7})}),Sr=i=>Math.imul(i,1664525)+1013904223>>>0,jo=i=>["sunny","rain","drought"][(i>>>16)%3],sl=178,Fu=["field","warehouse","mill","shop","orchard","bakery","preservery"],Gl=["farm","haul","mill","sell","idle","bake","preserve"],Er=["Claude","Codex","Gemini","DeepSeek"],qo=12;function xf(i){return typeof i=="string"&&i.trim().length>0&&Array.from(i).length<=qo&&!/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}]/u.test(i)}function sy(i="challenge"){if(i!=="challenge"&&i!=="endless")throw new Error("Invalid game mode");return{weather:"sunny",forecast:jo(Sr(sl)),weatherSeed:sl,...ff(),version:6,mode:i,housingLevel:0,daily:Hl(1),streak:0,bestStreak:0,bonusEarned:0,result:null,resultUnknown:!1,orders:[],seed:178,nextOrderId:1,time:0,remainder:0,day:1,phase:"morning",paused:!1,coins:30,inventory:Si(),produced:Si(),consumed:Si(),shipped:Si(),trees:[vf()],processors:{bakery:Go(),preservery:Go()},fields:[0,1,2].map(Bl),workers:Gl.slice(0,4).map((e,t)=>({id:t,name:Er[t],job:e,progress:0,location:"field",destination:"field",cargo:0,cargoItem:"wheat"})),upgrades:{field:0,warehouse:0,mill:0},stats:{harvested:0,milled:0,sold:0,earned:0}}}function En(i){return Qe.capacity+i.upgrades.warehouse*12}function la(i,e){return 40*(i.upgrades[e]+1)}function Ai(i,e){return e!=="field"&&e!=="warehouse"&&e!=="mill"?{ok:!1,reason:"Invalid upgrade"}:e==="field"&&i.fields.length>=Qe.maxFields?{ok:!1,reason:"No land"}:e==="mill"&&i.upgrades.mill>=Qe.millSeconds-1?{ok:!1,reason:"Max level"}:i.coins<la(i,e)?{ok:!1,reason:"Not enough coins"}:{ok:!0}}function $n(i){return Ct.reduce((e,t)=>e+i.inventory[t],0)+i.processors.bakery.reserved+i.processors.preservery.reserved}function ry(i){return Math.max(0,En(i)-$n(i))}function wf(i,e){switch(e.type){case"upgradeHousing":{const t=$o(i);return t.ok?(i.coins-=zl(i),i.housingLevel++,{ok:!0}):t}case"recruitWorker":{const t=Xo(i);if(!t.ok)return t;const n=i.workers.length;return i.coins-=Wo(),i.workers.push({id:n,name:`農友 ${n+1}`,job:"idle",progress:0,location:"field",destination:"field",cargo:0,cargoItem:"wheat"}),{ok:!0}}case"gift":return Zw(i,e.villagerId,e.item);case"renameWorker":{const t=i.workers.find(s=>s.id===e.workerId);if(!t)return{ok:!1,reason:"Invalid worker"};const n=typeof e.name=="string"?e.name.trim():e.name;return xf(n)?(t.name=n,{ok:!0}):{ok:!1,reason:"Invalid name"}}case"pause":return typeof e.paused!="boolean"?{ok:!1,reason:"Invalid pause"}:(i.paused=e.paused,{ok:!0});case"plantTree":{if(!ht(i).orchard)return{ok:!1,reason:"Locked"};const t=i.trees.find(n=>n.id===(e.treeId??0));return!t||t.planted?{ok:!1,reason:"Tree unavailable"}:(t.planted=!0,t.waiting="Growing",{ok:!0})}case"setNextCrop":case"plant":{const t=i.fields.find(s=>s.id===e.fieldId),n=e.crop??(t==null?void 0:t.nextCrop)??"wheat";return Object.hasOwn(Gt,n)?ht(i).crops.includes(n)?e.type==="setNextCrop"?t?(t.nextCrop=n,{ok:!0}):{ok:!1,reason:"Field unavailable"}:!t||t.planted||t.harvested>0?{ok:!1,reason:"Field unavailable"}:(t.crop=t.nextCrop=n,t.readyAt=0,t.planted=!0,t.growth=0,{ok:!0}):{ok:!1,reason:"Locked"}:{ok:!1,reason:"Unknown crop"}}case"assign":{const t=i.workers.find(n=>n.id===e.workerId);return!t||!Gl.includes(e.job)?{ok:!1,reason:"Invalid worker or job"}:ht(i).jobs.includes(e.job)?t.job!==e.job&&Object.values(i.processors).some(n=>{var s;return((s=n.batch)==null?void 0:s.workerId)===t.id})?{ok:!1,reason:"Batch in progress"}:["bake","preserve"].includes(e.job)&&i.workers.some(n=>n.id!==t.id&&n.job===e.job)?{ok:!1,reason:"Station busy"}:t.cargo?{ok:!1,reason:"Worker must deliver cargo first"}:t.job===e.job?{ok:!0}:(t.job=e.job,t.progress=0,{ok:!0}):{ok:!1,reason:"Locked"}}case"upgrade":{const t=Ai(i,e.target);if(!t.ok)return t;const n=la(i,e.target);return i.coins-=n,i.upgrades[e.target]++,e.target==="field"&&i.fields.push(Bl(i.fields.length)),{ok:!0}}default:return{ok:!1,reason:"Unknown action"}}}function oy(i){if(i.time++,i.day=Math.floor(i.time/Qe.daySeconds)+1,i.daily.day!==i.day&&(i.daily=Hl(i.day),i.weather=i.forecast,i.weatherSeed=Sr(i.weatherSeed),i.forecast=jo(Sr(i.weatherSeed))),Qw(i),i.orders.some(e=>e.expiresAt<=i.time)&&(i.streak=0),i.orders=i.orders.filter(e=>e.expiresAt>i.time),i.time%40===0&&i.orders.length<3){i.seed=Math.imul(i.seed,1664525)+1013904223>>>0;const e=2+i.seed%5,t=Ct.filter(o=>o!=="wheat"&&(o==="flour"||i.produced[o]>0)),n=Math.min(t.length,e,i.day>=5?3:i.day>=2?2:1),s=(i.seed>>>8)%t.length,r=Array.from({length:n},(o,a)=>({item:t[(s+a)%t.length],required:Math.floor(e/n)+(a<e%n?1:0),delivered:0}));i.orders.push({id:i.nextOrderId++,items:r,reward:Math.round(r.reduce((o,a)=>o+a.required*Vo[a.item],0)*1.5),expiresAt:i.time+90})}i.phase=["morning","afternoon","evening"][Math.floor(i.time%Qe.daySeconds/60)];for(const e of i.fields)e.planted&&(e.growth=Math.min(Gt[e.crop].seconds,Math.round((e.growth+Qe.weatherGrowth[i.weather])*10)/10));for(const e of i.fields)e.planted&&e.growth>=Gt[e.crop].seconds&&!e.readyAt&&(e.readyAt=i.time);for(const e of i.trees)e.planted&&!e.ripe&&!e.harvested&&(e.growth=Math.min(40,Math.round((e.growth+Qe.weatherGrowth[i.weather])*10)/10),e.growth===40&&(e.ripe=!0,e.readyAt=i.time)),e.growth01=e.batches>0?1:e.growth/40;for(const e of i.workers)if(e.job==="farm"){e.location=e.destination="field";const t=[...i.fields.filter(n=>n.planted&&n.growth>=Gt[n.crop].seconds).map(n=>({at:n.readyAt,id:n.id,f:n})),...i.trees.filter(n=>n.ripe).map(n=>({at:n.readyAt,id:100+n.id,t:n}))].sort((n,s)=>n.at-s.at||n.id-s.id)[0];if(t&&"f"in t){const n=t.f;n.planted=!1,n.growth=0,n.harvested=Gt[n.crop].yield,n.harvestedAt=i.time,i.stats.harvested+=n.harvested,i.produced[n.crop]+=n.harvested}else if(t&&"t"in t){const n=t.t;n.ripe=!1,n.growth=0,n.harvested=3,n.harvestedAt=i.time,n.batches++,i.stats.harvested+=3,i.produced.apple+=3,e.location=e.destination="orchard"}else{const n=i.fields.find(s=>!s.planted&&!s.harvested);n&&(n.crop=n.nextCrop,n.planted=!0,n.growth=0,n.readyAt=0)}}else if(e.job==="haul"){if(e.cargo){if(e.destination="warehouse",e.progress=Math.min(Qe.haulSeconds,e.progress+1),e.progress>=Qe.haulSeconds){const t=Math.min(e.cargo,ry(i));i.inventory[e.cargoItem]+=t,e.cargo-=t,e.location="warehouse",e.cargo||(e.progress=0)}}else if(e.destination="field",e.progress++,e.progress>=Qe.haulSeconds){e.location="field",e.progress=0;const t=[...i.fields.map(n=>({source:n,item:n.crop,spot:"field",id:n.id})),...i.trees.map(n=>({source:n,item:"apple",spot:"orchard",id:100+n.id}))].filter(n=>n.source.harvested>0).sort((n,s)=>n.source.harvestedAt-s.source.harvestedAt||n.id-s.id)[0];t&&(e.cargo=Math.min(4,t.source.harvested),t.source.harvested-=e.cargo,e.cargoItem=t.item,e.location=e.destination=t.spot)}}else if(e.job==="mill"){if(e.location=e.destination="mill",i.inventory.wheat<Qe.wheatPerFlour){e.progress=0;continue}++e.progress>=Math.max(1,Qe.millSeconds-i.upgrades.mill)&&(e.progress=0,i.inventory.wheat-=Qe.wheatPerFlour,i.inventory.flour++,i.consumed.wheat+=Qe.wheatPerFlour,i.produced.flour++,i.stats.milled++,i.daily.milled++)}else if(e.job==="sell"){e.location=e.destination="shop";const n=[...i.orders,...i.villagers.flatMap(o=>o.commission?[o.commission]:[])].sort((o,a)=>o.expiresAt-a.expiresAt||o.id-a.id).find(o=>o.items.some(a=>a.delivered<a.required&&i.inventory[a.item]>0)),s=n==null?void 0:n.items.slice().sort((o,a)=>Ct.indexOf(o.item)-Ct.indexOf(a.item)).find(o=>o.delivered<o.required&&i.inventory[o.item]>0),r=(s==null?void 0:s.item)??Ct.find(o=>o!=="wheat"&&i.inventory[o]>0);if(!r){e.progress=0;continue}if(++e.progress>=Qe.sellSeconds){e.progress=0,i.inventory[r]--,i.shipped[r]++,i.stats.sold++,i.daily.sold++;let o=Vo[r];if(n&&s&&(s.delivered++,o=0,n.items.every(a=>a.delivered===a.required))){const a=i.villagers.find(c=>c.commission===n);if(a)o=n.reward,gf(i,a,!1);else{o=n.reward,i.orders.splice(i.orders.indexOf(n),1),i.daily.ordersCompleted++,i.streak++,i.bestStreak=Math.max(i.bestStreak,i.streak);const c=Math.min(8,(i.streak-1)*2);o+=c,i.bonusEarned+=c}}i.coins+=o,i.stats.earned+=o}}for(const e of["bakery","preservery"]){const t=i.processors[e],n=hn[e],s=i.workers.find(r=>r.job===n.job);if(!ht(i)[e]){t.waiting="Locked";continue}if(!s){t.waiting="No worker";continue}if(s.location=s.destination=e,!t.batch){if(t.progress01=0,i.inventory[n.input]<n.amount){t.waiting="Missing ingredients";continue}if($n(i)-n.amount+1>En(i)){t.waiting="Warehouse full";continue}i.inventory[n.input]-=n.amount,i.consumed[n.input]+=n.amount,t.batch={item:n.output,remaining:n.seconds,workerId:s.id},t.reserved=1}t.waiting=null,t.batch.remaining--,t.progress01=1-t.batch.remaining/n.seconds,t.batch.remaining||(i.inventory[n.output]++,i.produced[n.output]++,t.batch=null,t.reserved=0)}for(const e of i.trees)e.progress01=e.growth/40,e.waiting=ht(i).orchard?e.planted?e.harvested?"Awaiting haul":e.ripe?"Awaiting harvest":"Growing":null:"Locked";for(const e of vr)i.daily[e]>=Ei[e]&&!i.daily.claimed.includes(e)&&(i.daily.claimed.push(e),i.coins+=Ei.reward,i.stats.earned+=Ei.reward,i.bonusEarned+=Ei.reward);i.mode==="challenge"&&i.time===gn.days*Qe.daySeconds&&!i.resultUnknown&&!i.result&&(i.result={earned:i.stats.earned,stars:Vl(i.stats.earned)})}function yf(i,e){if(!Number.isFinite(e)||e<0||e>3600)throw new RangeError("seconds must be between 0 and 3600");if(i.paused)return i;i.remainder+=e;const t=Math.floor(i.remainder+1e-9);i.remainder=Math.max(0,i.remainder-t);for(let n=0;n<t;n++)oy(i);return i}function ay(i){return JSON.stringify(i)}function cy(i){var o,a,c,l;const e=JSON.parse(i),t=[1,2,3].includes(e==null?void 0:e.version);if((e==null?void 0:e.version)===1&&(e.version=2,e.orders=[],e.seed=178,e.nextOrderId=1),(e==null?void 0:e.version)===2&&(e.version=3,e.daily=Hl(Math.floor(e.time/Qe.daySeconds)+1),e.streak=0,e.bestStreak=0,e.bonusEarned=0,e.result=null,e.resultUnknown=e.time>=gn.days*Qe.daySeconds),(e==null?void 0:e.version)===3){e.version=4,e.inventory&&(e.inventory={...Si(),...e.inventory}),Array.isArray(e.fields)&&(e.fields=e.fields.map(h=>({...Bl(h.id),...h}))),Array.isArray(e.workers)&&(e.workers=e.workers.map(h=>({...h,cargoItem:h.cargoItem??"wheat"}))),Array.isArray(e.orders)&&(e.orders=e.orders.map(h=>h.items?h:{id:h.id,items:[{item:"flour",required:h.flour,delivered:h.delivered}],reward:h.reward,expiresAt:h.expiresAt})),e.produced??(e.produced={...Si(),wheat:(o=e.stats)==null?void 0:o.harvested,flour:(a=e.stats)==null?void 0:a.milled}),e.consumed??(e.consumed={...Si(),wheat:2*((c=e.stats)==null?void 0:c.milled)}),e.shipped??(e.shipped={...Si(),flour:(l=e.stats)==null?void 0:l.sold}),e.trees??(e.trees=[vf()]),e.processors??(e.processors={bakery:Go(),preservery:Go()});for(const h of["bakery","preservery"])e.processors[h].batch||(e.processors[h].waiting=Math.floor(e.time/180)+1<hn[h].day?"Locked":"No worker");for(const h of e.trees)h.planted||(h.waiting=e.time<540?"Locked":null)}(e==null?void 0:e.version)===4&&(Object.assign(e,ff()),e.version=5),(e==null?void 0:e.version)===5&&(e.version=6,e.mode="challenge",e.housingLevel=0);const n=e;t&&n&&!["weather","forecast","weatherSeed"].some(h=>Object.hasOwn(n,h))&&(n.weather="sunny",n.weatherSeed=sl,n.forecast=jo(Sr(n.weatherSeed)));const s=h=>Number.isSafeInteger(h)&&h>=0,r=h=>h==="haul"?Qe.haulSeconds:h==="mill"?Qe.millSeconds-1:h==="sell"?Qe.sellSeconds-1:0;if(!n||n.version!==6||!["challenge","endless"].includes(n.mode)||!s(n.housingLevel)||n.housingLevel>=ts.capacities.length||n.mode==="challenge"&&n.housingLevel!==0||!s(n.time)||!s(n.coins)||typeof n.paused!="boolean"||!s(n.seed)||n.seed>4294967295||!s(n.nextOrderId)||n.nextOrderId<1||!s(n.weatherSeed)||n.weatherSeed>4294967295||!["sunny","rain","drought"].includes(n.weather)||n.time<Qe.daySeconds&&n.weather!=="sunny"||n.forecast!==jo(Sr(n.weatherSeed))||!Array.isArray(n.orders)||n.orders.length>3||!n.orders.every((h,u)=>h&&s(h.id)&&h.id>0&&h.id<n.nextOrderId&&(u===0||h.id>n.orders[u-1].id)&&Array.isArray(h.items)&&h.items.length>=1&&h.items.length<=3&&new Set(h.items.map(d=>d.item)).size===h.items.length&&h.items.every(d=>d&&Ct.includes(d.item)&&d.item!=="wheat"&&s(d.required)&&d.required>=1&&s(d.delivered)&&d.delivered<=d.required)&&h.items.some(d=>d.delivered<d.required)&&h.items.reduce((d,f)=>d+f.required,0)>=2&&h.items.reduce((d,f)=>d+f.required,0)<=6&&h.reward===Math.round(h.items.reduce((d,f)=>d+f.required*Vo[f.item],0)*1.5)&&s(h.expiresAt)&&h.expiresAt>n.time&&h.expiresAt<=n.time+90)||!Number.isFinite(n.remainder)||n.remainder<0||n.remainder>=1||!n.inventory||!Ct.every(h=>s(n.inventory[h]))||!n.upgrades||!["field","warehouse","mill"].every(h=>s(n.upgrades[h]))||n.upgrades.mill>Qe.millSeconds-1||!n.stats||!["harvested","milled","sold","earned"].every(h=>s(n.stats[h]))||!Array.isArray(n.fields)||n.fields.length!==3+n.upgrades.field||n.fields.length>Qe.maxFields||!n.fields.every((h,u)=>h&&h.id===u&&Number.isFinite(h.growth)&&h.growth>=0&&Object.hasOwn(Gt,h.crop)&&ht(n).crops.includes(h.crop)&&ht(n).crops.includes(h.nextCrop)&&s(h.readyAt)&&h.readyAt<=n.time&&s(h.harvestedAt)&&h.harvestedAt<=n.time&&h.growth<=Gt[h.crop].seconds&&typeof h.planted=="boolean"&&(h.planted||h.growth===0)&&s(h.harvested)&&h.harvested<=Gt[h.crop].yield&&(!h.planted||!h.harvested))||!Array.isArray(n.workers)||(n.mode==="challenge"?n.workers.length!==4:n.workers.length<4||n.workers.length>zn(n))||!n.workers.every((h,u)=>h&&h.id===u&&ht(n).jobs.includes(h.job)&&Ct.includes(h.cargoItem)&&s(h.progress)&&h.progress<=r(h.job)&&s(h.cargo)&&h.cargo<=4&&(h.cargo===0||h.job==="haul")&&Fu.includes(h.location)&&Fu.includes(h.destination))||!ly(n)||!ty(n)||$n(n)>En(n))throw new Error("Invalid farm save");if(!n.daily||n.daily.day!==Math.floor(n.time/Qe.daySeconds)+1||!vr.every(h=>s(n.daily[h]))||n.daily.sold>n.stats.sold||n.daily.milled>n.stats.milled||n.daily.ordersCompleted>n.daily.sold||!Array.isArray(n.daily.claimed)||new Set(n.daily.claimed).size!==n.daily.claimed.length||!n.daily.claimed.every(h=>vr.includes(h))||!vr.every(h=>n.daily.claimed.includes(h)===n.daily[h]>=Ei[h])||!s(n.streak)||!s(n.bestStreak)||n.streak>n.bestStreak||n.bestStreak>=n.nextOrderId||!s(n.bonusEarned)||n.bonusEarned>n.stats.earned||n.bonusEarned<n.daily.claimed.length*Ei.reward||typeof n.resultUnknown!="boolean"||(n.mode==="endless"||n.time<gn.days*Qe.daySeconds?n.result!==null||n.resultUnknown:n.resultUnknown?n.result!==null:!n.result||!s(n.result.earned)||n.result.earned>n.stats.earned||n.time===gn.days*Qe.daySeconds&&n.result.earned!==n.stats.earned))throw new Error("Invalid farm save");n.result&&(n.result.stars=Vl(n.result.earned));for(const h of n.workers){if(Object.hasOwn(h,"name")||(h.name=Er[h.id]),!xf(h.name))throw new Error("Invalid farm save");h.name=h.name.trim()}return n.day=Math.floor(n.time/Qe.daySeconds)+1,n.phase=["morning","afternoon","evening"][Math.floor(n.time%Qe.daySeconds/60)],n}function ly(i){const e=o=>Number.isSafeInteger(o)&&o>=0,t=o=>o&&Object.keys(o).length===Ct.length&&Ct.every(a=>e(o[a]));if(![i.inventory,i.produced,i.consumed,i.shipped].every(t)||!i.processors||Object.keys(i.processors).length!==2||!Array.isArray(i.trees)||i.trees.length!==1)return!1;const n=Math.floor(i.time/180)+1,s=[null,"Locked","No worker","Missing ingredients","Warehouse full","Growing","Awaiting harvest","Awaiting haul"];for(const o of["bakery","preservery"]){const a=i.processors[o],c=hn[o];if(!a||!Number.isFinite(a.progress01)||a.progress01<0||a.progress01>1||!s.includes(a.waiting)||i.workers.filter(l=>l.job===c.job).length>1)return!1;if(a.batch){const l=a.batch;if(!ht(i)[o]||l.item!==c.output||!e(l.remaining)||l.remaining<1||l.remaining>=c.seconds||a.reserved!==1||a.progress01!==1-l.remaining/c.seconds||!i.workers.some(h=>h.id===l.workerId&&h.job===c.job))return!1}else if(a.batch!==null||a.reserved!==0||a.progress01!==0&&a.progress01!==1)return!1}if(!i.trees.every((o,a)=>o&&o.id===a&&typeof o.planted=="boolean"&&typeof o.ripe=="boolean"&&Number.isFinite(o.growth)&&o.growth>=0&&o.growth<=40&&e(o.harvested)&&o.harvested<=3&&e(o.batches)&&e(o.readyAt)&&o.readyAt<=i.time&&e(o.harvestedAt)&&o.harvestedAt<=i.time&&s.includes(o.waiting)&&o.progress01===o.growth/40&&o.growth01===(o.batches?1:o.growth/40)&&(!o.ripe||o.growth===40&&!o.harvested)&&(!o.harvested||o.growth===0&&!o.ripe)&&(o.planted?ht(i).orchard:!o.growth&&!o.ripe&&!o.harvested&&!o.batches)))return!1;const r=o=>_f(i,o);return Ct.every(o=>r(o)||!i.inventory[o]&&!i.produced[o]&&!i.consumed[o]&&!i.shipped[o])&&i.workers.every(o=>!o.cargo||r(o.cargoItem)&&["wheat","carrot","cabbage","apple"].includes(o.cargoItem))&&i.orders.every(o=>o.items.length<=(n>=5?3:n>=2?2:1)&&o.items.every(a=>r(a.item)&&(a.item==="flour"||i.produced[a.item]>0)))}const Rt={wheat:"🌾",flour:"🥣",carrot:"🥕",cabbage:"🥬",apple:"🍎",bread:"🍞",jam:"🍯"},ri={wheat:"小麥",flour:"麵粉",carrot:"胡蘿蔔",cabbage:"甘藍",apple:"蘋果",bread:"麵包",jam:"果醬"},Mf=["wheat","carrot","cabbage"],Za={carrot:"🥕胡蘿蔔",cabbage:"🥬甘藍",bakery:"🍞麵包坊",orchard:"🍎蘋果樹",preservery:"🍯果醬坊"},Ou={carrot:"點空田名牌選作物",cabbage:"點空田名牌選作物",bakery:"派一個人去烘焙（2 麵粉 → 1 麵包）",orchard:"點蘋果樹的名牌種下去",preservery:"派一個人去製醬（3 蘋果 → 1 果醬）"},bf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class as{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const hy=new Al(-1,1,1,-1,0,1);class uy extends Wt{constructor(){super(),this.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new wt([0,2,0,0,2,0],2))}}const dy=new uy;class ha{constructor(e){this._mesh=new b(dy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,hy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class fy extends as{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=wr.clone(e.uniforms),this.material=new jt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ha(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Bu extends as{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class py extends as{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class my{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Re);this._width=n.width,this._height=n.height,t=new vn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fy(bf),this.copyPass.material.blending=ai,this.clock=new of}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Bu!==void 0&&(o instanceof Bu?n=!0:o instanceof py&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class gy extends as{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const vy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class zs extends as{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Re(e.x,e.y):new Re(256,256),this.clearColor=new Ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new vn(r,o,{type:Vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new vn(r,o,{type:Vn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new vn(r,o,{type:Vn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=vy;this.highPassUniforms=wr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new jt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=bf;this.copyUniforms=wr.clone(h.uniforms),this.blendMaterial=new jt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:lc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ne,this.oldClearAlpha=1,this.basic=new ta,this.fsQuad=new ha(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=zs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=zs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new jt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Re(.5,.5)},direction:{value:new Re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new jt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}zs.BlurDirectionX=new Re(1,0);zs.BlurDirectionY=new Re(0,1);const _y={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class xy extends as{constructor(){super();const e=_y;this.uniforms=wr.clone(e.uniforms),this.material=new ew({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ha(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===dd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===pd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===md?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===gd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class wy extends as{constructor(t){super();F(this,"mat");F(this,"quad");this.camera=t,this.mat=new jt({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tChar:{value:null},hasChar:{value:0},texel:{value:new Re(1,1)},near:{value:t.near},far:{value:t.far},ink:{value:new Ne(0)},width:{value:1},crease0:{value:.004}},vertexShader:`
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
        }`}),this.quad=new ha(this.mat)}setWidth(t){this.mat.uniforms.width.value=t}setCrease(t){this.mat.uniforms.crease0.value=t}setCharDepth(t){this.mat.uniforms.tChar.value=t,this.mat.uniforms.hasChar.value=t?1:0}setSize(t,n){this.mat.uniforms.texel.value.set(1/t,1/n)}render(t,n,s){const r=this.mat.uniforms;r.tDiffuse.value=s.texture,r.tDepth.value=s.depthTexture,r.near.value=this.camera.near,r.far.value=this.camera.far,t.setRenderTarget(this.renderToScreen?null:n),this.clear&&t.clear(),this.quad.render(t)}dispose(){this.mat.dispose(),this.quad.dispose()}}const wi={x:70,y:26,z:56},zu=17,Hu=2.2;class yy{constructor(e){F(this,"mesh");F(this,"pos");F(this,"m",new nt);F(this,"q",new ss().setFromEuler(new Fn(0,0,-Math.atan2(Hu,zu))));F(this,"s",new k(1,1,1));F(this,"p",new k);F(this,"mat");F(this,"amount",0);const t=e==="high"?1500:450,n=new le(.025,.75,.025);this.mat=new ta({color:13031662,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),this.mesh=new Ln(n,this.mat,t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,this.mesh.visible=!1,this.pos=new Float32Array(t*3);for(let s=0;s<t;s++)this.pos[s*3]=(Math.random()-.5)*wi.x,this.pos[s*3+1]=Math.random()*wi.y,this.pos[s*3+2]=(Math.random()-.5)*wi.z}update(e,t,n){if(this.amount=t,this.mesh.visible=t>.02,!this.mesh.visible)return;this.mat.opacity=.42*t;const s=this.mesh.count,r=Math.ceil(s*Math.min(1,t*1.2));for(let o=0;o<s;o++){let a=this.pos[o*3+1]-zu*e,c=this.pos[o*3]+Hu*e;a<0&&(a+=wi.y,c=(Math.random()-.5)*wi.x,this.pos[o*3+2]=(Math.random()-.5)*wi.z),c>wi.x/2&&(c-=wi.x),this.pos[o*3]=c,this.pos[o*3+1]=a;const l=o>=r?0:1;this.p.set(n.x+c,a,n.z+this.pos[o*3+2]),this.s.set(l,l,l),this.m.compose(this.p,this.q,this.s),this.mesh.setMatrixAt(o,this.m)}this.mesh.instanceMatrix.needsUpdate=!0}get raining(){return this.amount}dispose(){this.mesh.geometry.dispose(),this.mat.dispose(),this.mesh.dispose()}}const Vu={rain:{sun:11846358,sunK:.5,sunMul:.45,sky:10465476,skyK:.55,bg:9872564,bgK:.65,exposure:.9},drought:{sun:16760426,sunK:.35,sunMul:1.08,sky:16769192,skyK:.3,bg:15783066,bgK:.5,exposure:1.03}},Gu={sunny:{icon:"☀️",name:"晴",tip:"放晴了"},rain:{icon:"🌧️",name:"雨",tip:"今天下雨：作物長得比較快"},drought:{icon:"🔥",name:"旱",tip:"今天乾旱：作物長得比較慢"}};at.enabled=!0;const Wu=["morning","afternoon","evening"],Fi=new Ne,My=new Ne,$u=new k,Xu=new k,by=new k,Sy=new k,Oi=st.degToRad(46),Ey=st.degToRad(45),Qa=st.degToRad(34),Ty=10,Ay=1.7,vo=6,_o=140,ju=2,qu=new Ne;class Cy{constructor(e,t,n,s=!1){F(this,"renderer");F(this,"scene",new mx);F(this,"bgColor",new Ne(12575743));F(this,"camera");F(this,"sun");F(this,"hemi");F(this,"fireLight");F(this,"quality");F(this,"outline");F(this,"composer",null);F(this,"bloom",null);F(this,"outlinePass",null);F(this,"charTarget",null);F(this,"charDepthMat",new Wd({depthPacking:Ad}));F(this,"characters",null);F(this,"composerKey","");F(this,"events",new AbortController);F(this,"target",new k);F(this,"distance",64);F(this,"pitch",Oi);F(this,"yaw",0);F(this,"home",null);F(this,"manual",!1);F(this,"insetGoal",{top:0,bottom:0});F(this,"insetShift",0);F(this,"insetApplied",NaN);F(this,"shadowHalf",0);F(this,"shadowMax");F(this,"onResize",null);F(this,"followPos",null);F(this,"backTo",null);F(this,"onUnfollow",null);F(this,"occluders",null);F(this,"followDist",Ty);F(this,"followPitch",Qa);F(this,"occludeClock",0);F(this,"occludeRay",new Iu);F(this,"weatherGoal","sunny");F(this,"weatherMix",{rain:0,drought:0});F(this,"rain");F(this,"bounds");F(this,"dragDist",0);this.canvas=e,this.layout=t,this.quality=n,this.outline=s,this.renderer=new px({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=pn,this.renderer.toneMapping=gl,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=cc,this.camera=new on(30,1,1,400),this.bounds={x:t.mapSize[0]/2-8,z:t.mapSize[1]/2-6},this.target.set(0,0,0),this.hemi=new fw(16777215,4473924,1),this.scene.add(this.hemi),this.sun=new _w(16777215,2.5),this.sun.castShadow=!0,this.shadowMax=Math.max(t.mapSize[0],t.mapSize[1])/2+4,this.setShadowHalf(this.shadowMax),this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=220,this.sun.shadow.bias=-5e-4,this.sun.shadow.normalBias=.04,this.scene.add(this.sun,this.sun.target),this.fireLight=new gw(16752704,1,26,1.6),this.fireLight.position.set(t.plaza[0],2.2,t.plaza[1]),this.scene.add(this.fireLight),this.scene.fog=new Rl(12575743,110,220),this.scene.background=this.bgColor,this.rain=new yy(n),this.scene.add(this.rain.mesh),this.applyQuality(n),this.bindControls(),this.resize(),window.addEventListener("resize",()=>this.resize(),{signal:this.events.signal})}applyQuality(e){var s;this.quality=e;const t=Math.min(window.devicePixelRatio||1,e==="high"?2:1.5);this.renderer.setPixelRatio(t);const n=e==="high"?2048:1024;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),(s=this.sun.shadow.map)==null||s.dispose(),this.sun.shadow.map=null),this.renderer.shadowMap.type=e==="high"?cc:ml,this.buildComposer(),this.resize()}setOutline(e){this.outline=e,this.buildComposer(),this.resize()}setOutlineCrease(e){var t;(t=this.outlinePass)==null||t.setCrease(e)}buildComposer(){var r;const e=this.quality==="high",t=`${e}|${this.outline}`;if(t===this.composerKey||(this.composerKey=t,this.disposeComposer(),!e&&!this.outline))return;const n=this.renderer.getDrawingBufferSize(new Re),s=new vn(n.x,n.y,{type:Vn,samples:e?4:0,depthTexture:this.outline?new Uo(n.x,n.y):null});if(s.texture.name="EffectComposer.rt1",this.composer=new my(this.renderer,s),this.outline){const o=this.composer.renderTarget2;(r=o.depthTexture)==null||r.dispose(),o.depthTexture=new Uo(n.x,n.y)}this.composer.addPass(new gy(this.scene,this.camera)),this.outline&&(this.outlinePass=new wy(this.camera),this.outlinePass.setWidth(1.5*this.renderer.getPixelRatio()),this.charTarget=new vn(n.x,n.y,{minFilter:en,magFilter:en}),this.charTarget.texture.name="Stage.charDepth",this.outlinePass.setCharDepth(this.charTarget.texture),this.composer.addPass(this.outlinePass)),e&&(this.bloom=new zs(new Re(256,256),.45,.6,.88),this.composer.addPass(this.bloom)),this.composer.addPass(new xy)}resize(){var s,r,o,a;const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;if(this.renderer.setSize(e,t,!1),(s=this.composer)==null||s.setPixelRatio(this.renderer.getPixelRatio()),(r=this.composer)==null||r.setSize(e,t),(o=this.outlinePass)==null||o.setWidth(1.5*this.renderer.getPixelRatio()),this.charTarget){const c=this.renderer.getDrawingBufferSize(new Re);this.charTarget.setSize(c.x,c.y)}this.camera.aspect=e/t,this.camera.fov=e<t?42:30,this.camera.updateProjectionMatrix();const n=e<t;this.yaw=n?Ey:0,this.insetApplied=NaN,(a=this.onResize)==null||a.call(this)}distanceForWidth(e){return st.clamp(e/(2*Math.tan(st.degToRad(this.camera.fov/2))*this.camera.aspect),vo,_o)}distanceForHeight(e,t){const n=e*Math.cos(Oi)/(2*Math.tan(st.degToRad(this.camera.fov/2))*t);return st.clamp(n,vo,_o)}setHome(e,t,n,s=!1,r=0){const o=this.home??(this.home={x:e,z:t,d:n,y:r});o.y=r,o.x=st.clamp(e,-this.bounds.x,this.bounds.x),o.z=st.clamp(t,-this.bounds.z,this.bounds.z),o.d=st.clamp(n,vo,_o),s&&(this.target.set(o.x,0,o.z),this.distance=o.d,this.manual=!1,this.backTo=null)}goHome(){this.manual=!1,this.backTo=null}hold(){this.manual=!0}get isManual(){return this.manual}setInsets(e,t){this.insetGoal.top=Math.max(0,e),this.insetGoal.bottom=Math.max(0,t)}setShadowHalf(e){const t=this.sun.shadow.camera;this.shadowHalf=e,t.left=-e,t.right=e,t.top=e,t.bottom=-e,t.updateProjectionMatrix()}setDayTime(e){const t=e*3,n=Math.min(2,Math.floor(t)),s=t-n,r=ku[Wu[n]],o=ku[Wu[(n+1)%3]],a=st.smoothstep(s,.75,1);this.applyLight(r,o,a)}applyLight(e,t,n){const s=(a,c)=>a+(c-a)*n,r=(a,c,l)=>l.copy(Fi.setHex(a)).lerp(My.setHex(c),n);r(e.sunColor,t.sunColor,this.sun.color),this.sun.intensity=s(e.sunIntensity,t.sunIntensity);const o=Xu.set(...e.sunDir).normalize().lerp(by.set(...t.sunDir).normalize(),n).normalize();this.sun.position.copy(this.target).addScaledVector(o,90),this.sun.target.position.copy(this.target),r(e.hemiSky,t.hemiSky,this.hemi.color),r(e.hemiGround,t.hemiGround,this.hemi.groundColor),this.hemi.intensity=s(e.hemiIntensity,t.hemiIntensity),this.fireLight.intensity=s(e.fire,t.fire)*12,this.renderer.toneMappingExposure=s(e.exposure,t.exposure),this.scene.fog.color.copy(r(e.background,t.background,this.bgColor)),this.applyWeatherTint()}applyWeatherTint(){const e=this.weatherMix.rain,t=this.weatherMix.drought;if(e<.001&&t<.001)return;const n=Vu.rain,s=Vu.drought;this.sun.color.lerp(Fi.setHex(n.sun),n.sunK*e).lerp(Fi.setHex(s.sun),s.sunK*t),this.sun.intensity*=st.lerp(1,n.sunMul,e)*st.lerp(1,s.sunMul,t),this.hemi.color.lerp(Fi.setHex(n.sky),n.skyK*e).lerp(Fi.setHex(s.sky),s.skyK*t),this.bgColor.lerp(Fi.setHex(n.bg),n.bgK*e).lerp(Fi.setHex(s.bg),s.bgK*t),this.scene.fog.color.copy(this.bgColor),this.renderer.toneMappingExposure*=st.lerp(1,n.exposure,e)*st.lerp(1,s.exposure,t)}setWeather(e){this.weatherGoal=e}get rainAmount(){return this.weatherMix.rain}follow(e){var t;this.backTo===null&&(this.backTo=this.manual?this.distance:((t=this.home)==null?void 0:t.d)??this.distance),this.followPos=e,this.followPitch=Qa,this.occludeClock=0}get following(){return this.followPos!==null}get cameraDistance(){return this.distance}unfollow(){var e;this.followPos&&(this.followPos=null,(e=this.onUnfollow)==null||e.call(this))}update(e){var r;const t=1-Math.exp(-e*1.2);this.weatherMix.rain+=((this.weatherGoal==="rain"?1:0)-this.weatherMix.rain)*t,this.weatherMix.drought+=((this.weatherGoal==="drought"?1:0)-this.weatherMix.drought)*t,this.rain.update(e,this.weatherMix.rain,this.target);const n=1-Math.exp(-e*4),s=(r=this.followPos)==null?void 0:r.call(this);if(s)this.occludeClock-=e,this.occludeClock<=0&&(this.occludeClock=.3,this.checkOcclusion(s)),this.target.x+=(s.x-this.target.x)*n,this.target.z+=(s.z-this.target.z)*n,this.target.y+=(Ay-this.target.y)*n,this.distance+=(this.followDist-this.distance)*n,this.pitch+=(this.followPitch-this.pitch)*n;else if(this.home&&!this.manual){const o=this.home,a=1-Math.exp(-e*3);this.lookAt(this.target.x+(o.x-this.target.x)*a,this.target.z+(o.z-this.target.z)*a),this.distance+=(o.d-this.distance)*a,this.target.y+=(o.y-this.target.y)*n,this.pitch+=(Oi-this.pitch)*n,this.backTo=null}else this.backTo!==null&&(this.target.y+=(0-this.target.y)*n,this.distance+=(this.backTo-this.distance)*n,this.pitch+=(Oi-this.pitch)*n,Math.abs(this.distance-this.backTo)<.05&&Math.abs(this.pitch-Oi)<.001&&(this.distance=this.backTo,this.pitch=Oi,this.target.y=0,this.backTo=null))}checkOcclusion(e){if(!this.occluders)return;const t=st.degToRad(8),n=st.degToRad(78),s=r=>{const o=$u.set(e.x,1.5,e.z),a=Xu.set(Math.sin(this.yaw)*Math.cos(r),Math.sin(r),Math.cos(this.yaw)*Math.cos(r));return this.occludeRay.set(o,a),this.occludeRay.far=this.followDist,this.occludeRay.intersectObject(this.occluders,!0).length>0};s(this.followPitch)?this.followPitch=Math.min(n,this.followPitch+t):this.followPitch>Qa&&!s(this.followPitch-t)&&(this.followPitch-=t)}applyInsets(e){const t=this.canvas.clientWidth||window.innerWidth,n=this.canvas.clientHeight||window.innerHeight,s=st.clamp((this.insetGoal.top-this.insetGoal.bottom)/2,-n*.35,n*.35);this.insetShift+=(s-this.insetShift)*(1-Math.exp(-e*6)),Math.abs(this.insetShift-s)<.3&&(this.insetShift=s);const r=Math.round(this.insetShift*2)/2;r!==this.insetApplied&&(this.insetApplied=r,r?this.camera.setViewOffset(t,n,0,-r,t,n):this.camera.clearViewOffset())}render(e=1/60){this.applyInsets(e);const t=st.clamp(this.distance*.9+6,14,this.shadowMax);Math.abs(t-this.shadowHalf)>this.shadowHalf*.15&&this.setShadowHalf(t);const n=Sy.set(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)).multiplyScalar(this.distance);this.camera.position.copy(this.target).add(n),this.camera.lookAt(this.target);const s=this.scene.fog,r=Math.max(this.distance,40),o=1-.35*this.weatherMix.rain-.2*this.weatherMix.drought;s.near=r*1.5*o,s.far=r*3.2*o,this.composer?(this.charTarget&&this.renderCharDepth(this.charTarget),this.composer.render()):this.renderer.render(this.scene,this.camera)}renderCharDepth(e){var h;const t=((h=this.characters)==null?void 0:h.call(this))??[];for(const u of t)u.traverse(d=>d.layers.enable(ju));const n=this.renderer,s=this.scene,r=this.camera,o=s.background,a=r.layers.mask,c=n.shadowMap.autoUpdate,l=n.getClearAlpha();n.getClearColor(qu),s.background=null,s.overrideMaterial=this.charDepthMat,r.layers.set(ju),n.shadowMap.autoUpdate=!1,n.setRenderTarget(e),n.setClearColor(16777215,1),n.clear(),t.length&&n.render(s,r),n.setRenderTarget(null),n.setClearColor(qu,l),n.shadowMap.autoUpdate=c,r.layers.mask=a,s.overrideMaterial=null,s.background=o}project(e,t){const n=$u.copy(e).project(this.camera);return n.z>1?!1:(t.x=(n.x*.5+.5)*this.canvas.clientWidth,t.y=(-n.y*.5+.5)*this.canvas.clientHeight,!0)}raycaster(e,t){const n=this.canvas.getBoundingClientRect(),s=new Re((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),r=new Iu;return r.setFromCamera(s,this.camera),r}bindControls(){const e=new Map;let t=0,n=this.distance;const s=this.canvas,r=this.events.signal;s.style.touchAction="none",s.addEventListener("pointerdown",a=>{if(s.setPointerCapture(a.pointerId),this.dragDist=0,e.set(a.pointerId,{x:a.clientX,y:a.clientY}),e.size===2){const[c,l]=[...e.values()];t=Math.hypot(c.x-l.x,c.y-l.y),n=this.distance}},{signal:r}),s.addEventListener("pointermove",a=>{const c=e.get(a.pointerId);if(!c)return;const l={x:a.clientX,y:a.clientY};if(e.set(a.pointerId,l),this.dragDist+=Math.hypot(l.x-c.x,l.y-c.y),this.dragDist>8&&(this.unfollow(),this.manual=!0),e.size===1){const h=this.distance*Math.tan(st.degToRad(this.camera.fov/2))*2/s.clientHeight;this.pan(-(l.x-c.x)*h,-(l.y-c.y)*h/Math.sin(this.pitch))}else if(e.size===2&&t>0){const[h,u]=[...e.values()],d=Math.hypot(h.x-u.x,h.y-u.y);this.interrupt(),this.zoomTo(n*(t/Math.max(d,1)))}},{signal:r});const o=a=>{e.delete(a.pointerId),e.size<2&&(t=0)};s.addEventListener("pointerup",o,{signal:r}),s.addEventListener("pointercancel",o,{signal:r}),s.addEventListener("wheel",a=>{a.preventDefault(),this.interrupt(),this.zoomTo(this.distance*Math.exp(a.deltaY*.001))},{passive:!1,signal:r})}interrupt(){this.manual=!0,!(this.backTo===null&&!this.followPos)&&(this.unfollow(),this.backTo=null,this.pitch=Oi,this.target.y=0,this.zoomTo(this.distance))}wasDrag(){return this.dragDist>8}pan(e,t){const n=Math.cos(this.yaw),s=Math.sin(this.yaw);this.target.x=st.clamp(this.target.x+e*n+t*s,-this.bounds.x,this.bounds.x),this.target.z=st.clamp(this.target.z-e*s+t*n,-this.bounds.z,this.bounds.z)}lookAt(e,t){this.target.x=st.clamp(e,-this.bounds.x,this.bounds.x),this.target.z=st.clamp(t,-this.bounds.z,this.bounds.z)}zoomTo(e){this.distance=st.clamp(e,vo,_o)}disposeComposer(){var e;if(this.composer){for(const t of this.composer.passes)t.dispose();this.composer.dispose(),this.composer=null,this.bloom=null,this.outlinePass=null,(e=this.charTarget)==null||e.dispose(),this.charTarget=null}}dispose(){this.events.abort(),this.disposeComposer(),this.charDepthMat.dispose(),this.rain.dispose(),this.sun.shadow.dispose(),this.renderer.dispose()}}const kt=(i,e={})=>new ft({color:i,roughness:.9,metalness:0,flatShading:!0,...e});function li(i){return i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),i}function Ry(i){return()=>((i=i*16807%2147483647)-1)/2147483646}function Sf(i,e,t,n){const s=n[0]-t[0],r=n[1]-t[1],o=Math.max(0,Math.min(1,((i-t[0])*s+(e-t[1])*r)/(s*s+r*r||1)));return Math.hypot(i-(t[0]+s*o),e-(t[1]+r*o))}function Py(i,e){const[t,n]=i.mapSize,s=new $s(t+60,n+60,90,70);s.rotateX(-Math.PI/2);const r=s.attributes.position,o=new Float32Array(r.count*3),a=new Ne,c=new Ne(lt.grass),l=new Ne(lt.grassDark),h=new Ne(lt.grassLight),u=new Ne(lt.dirt),d=[];for(const v of Object.values(i.paths))for(let m=1;m<v.length;m++)d.push([v[m-1],v[m]]);const f=4.5;for(let v=0;v<r.count;v++){const m=r.getX(v),p=r.getZ(v),y=Math.sin(m*.17+1.3)*Math.cos(p*.21-.4)+Math.sin(m*.05-p*.08)*.8+(e()-.5)*.35;a.copy(c).lerp(y>0?h:l,Math.min(1,Math.abs(y)*.55));let x=Math.hypot(m-i.plaza[0],p-i.plaza[1])-f;for(const[_,I]of d)x=Math.min(x,Sf(m,p,_,I)-1.1);x<.9&&a.lerp(u,st.smoothstep(.9-x,0,1.2)),a.toArray(o,v*3),r.setY(v,Math.sin(m*.11)*Math.cos(p*.13)*.08)}s.setAttribute("color",new ln(o,3)),s.computeVertexNormals();const g=new b(s,new ft({vertexColors:!0,roughness:1}));return g.receiveShadow=!0,g}function Ro(i,e,t,n,s){const r=new me,o=new b(new le(i,t,e),kt(n));o.position.y=t/2;const a=new be(.01,i*.62,t*.7,4,1);a.rotateY(Math.PI/4),a.scale(1,1,e/i);const c=new b(a,kt(s));c.position.y=t+t*.35;const l=new b(new le(i*.22,t*.55,.1),kt(lt.wallWood));l.position.set(0,t*.275,e/2+.05);const h=new b(new le(i*.16,t*.2,.1),kt(16765562,{emissive:16757575,emissiveIntensity:.6}));h.position.set(i*.3,t*.62,e/2+.05);const u=h.clone();return u.position.x=-i*.3,r.add(o,c,l,h,u),li(r)}function Ly(){const i=new me,e=new b(new be(1.5,2.1,6,8),kt(lt.stone));e.position.y=3;const t=new b(new pt(2,2.2,8),kt(lt.roofRed));t.position.y=7.1;const n=new me;n.position.set(0,5.6,2);for(let s=0;s<4;s++){const r=new b(new le(.5,3.6,.08),kt(lt.wallCream));r.position.y=1.8;const o=new me;o.rotation.z=s*Math.PI/2,o.add(r),n.add(o)}return n.name="blades",i.add(e,t,n),li(i)}function Iy(i){const e=new me,t=1.2+i()*.8,n=new b(new be(.18,.25,t,5),kt(lt.trunk));n.position.y=t/2;const s=kt(i()>.5?lt.treeLeaf:lt.treeLeafDark),r=i()>.45,o=r?new b(new bn(1.3+i()*.6,0),s):new b(new pt(1.2+i()*.4,3+i(),6),s);return o.position.y=t+(r?.9:1.4),e.add(n,o),e.rotation.y=i()*Math.PI*2,li(e)}function Dy(i){const[e,t]=i.fieldSize,n=new me,s=new b(new le(e,.25,t),kt(lt.soil));s.position.y=.12,s.receiveShadow=!0,n.add(s);for(const[p,y]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const x=new b(new le(.18,.8,.18),kt(lt.wallWood));x.position.set(p*e/2,.4,y*t/2),n.add(li(x))}const r=5,o=6,a=new pt(.28,1,5);a.translate(0,.5,0);const c=kt(lt.wheatYoung),l=new Ln(a,c,r*o);l.castShadow=!0;const h=new nt,u=new Ne(lt.wheatYoung),d=new Ne(lt.wheatRipe);n.add(l);const f=new me;f.position.set(e/2+.5,0,t/2-.6),n.add(f);const g=new St(.32,6,4);g.scale(1,.85,.8);const v=kt(lt.wheatRipe);let m=-1;return{object:n,setCrop(p,y,x){const _=y?.15+p*.95:0;let I=0;for(let T=0;T<r;T++)for(let R=0;R<o;R++){const M=(R/(o-1)-.5)*(e-1.2),w=(T/(r-1)-.5)*(t-1.2);h.makeScale(_,_*(.9+(T*7+R*3)%5*.06),_).setPosition(M,.25,w),l.setMatrixAt(I++,h)}l.instanceMatrix.needsUpdate=!0,c.color.copy(u).lerp(d,st.smoothstep(p,.55,1));const E=Math.min(8,Math.ceil(x/2));if(E!==m){m=E,f.clear();for(let T=0;T<E;T++){const R=new b(g,v);R.position.set(T%2*.55,.28+Math.floor(T/4)*.45,-Math.floor(T%4/2)*.6),R.castShadow=!0,f.add(R)}}}}}const Yu={farm:5941298,haul:15238970,mill:15852484,sell:4161488,bake:13208138,preserve:12071498,idle:10132122};function ky(){const i=new me,e=kt(Yu.idle),t=new b(new an(.32,.6,3,8),e);t.position.y=.75;const n=new b(new St(.3,10,8),kt(15911328));n.position.y=1.5;const s=new b(new pt(.45,.3,10),kt(15254890));s.position.y=1.78;const r=new b(new St(.34,6,4),kt(lt.wheatRipe));r.scale.set(1,.8,.8),r.position.set(0,1.2,-.38),r.visible=!1,i.add(t,n,s,r),li(i);let o=0,a=!1;return{object:i,setState(c,l,h){e.color.setHex(Yu[c]),r.visible=h>0,a=l},tick(c){o+=c,t.position.y=.75+(a?Math.abs(Math.sin(o*10))*.12:Math.sin(o*2)*.02),n.position.y=t.position.y+.75,s.position.y=n.position.y+.28}}}function Ef(){const i=new me,e=new b(new be(.9,1.1,.25,8),kt(lt.dirt));e.position.y=.12;const t=new me,n=new b(new be(.22,.32,2,6),kt(8016434));n.position.y=1;const s=new b(new bn(1.8,0),kt(5216826));s.position.y=2.9,t.add(n,s);const r=new me,o=new St(.18,6,5),a=kt(14168618);for(let l=0;l<10;l++){const h=new b(o,a),u=l/10*Math.PI*2;h.position.set(Math.cos(u)*1.6,2.4+l%3*.5,Math.sin(u)*1.6),r.add(h)}t.add(r);const c=new b(new le(.8,.45,.6),kt(12073514));return c.position.set(1.2,.22,1.2),i.add(li(e),li(t),li(c)),{object:i,setState(l,h,u,d){t.visible=l,t.scale.setScalar(.35+.65*h),r.visible=u,c.visible=d>0}}}function Tf(i,e){const[t,n]=e.buildings[i].size,s=new me,r=Ro(t,n,2.8,lt.wallCream,i==="bakery"?lt.roofOrange:8014474),o=new b(new le(t,2.8,n),new ft({color:16777215,transparent:!0,opacity:.25}));o.position.y=1.4;const a=new b(new St(.4,8,6),new ft({color:lt.fire,emissive:lt.fire,emissiveIntensity:2}));return a.position.set(0,4.2,0),s.add(r,o,a),{object:s,setState(c,l){r.visible=c,o.visible=!c,a.visible=c&&l}}}const Uy=(i,e)=>{const t=Ry(20261025),n=new me;n.add(Py(i,t));const s=i.buildings,r=(m,p)=>{m.position.set(p.pos[0],0,p.pos[1]),m.rotation.y=p.rotY,n.add(m)};r(Ro(s.warehouse.size[0],s.warehouse.size[1],3.2,lt.wallWood,lt.roofSlate),s.warehouse);const o=Ly();r(o,s.mill),r(Ro(s.shop.size[0],s.shop.size[1],2.8,lt.wallCream,lt.roofOrange),s.shop),r(Ro(s.farmhouse.size[0],s.farmhouse.size[1],3,lt.wallCream,lt.roofRed),s.farmhouse);const a=new me,c=new b(new es(.7,.22,5,10),kt(lt.stone));c.rotation.x=Math.PI/2,c.position.y=.15;const l=new b(new pt(.45,1.1,6),new ft({color:lt.fire,emissive:lt.fire,emissiveIntensity:2.5}));l.position.y=.65,a.add(li(c),l),a.position.set(i.plaza[0],0,i.plaza[1]),n.add(a);const h=(m,p)=>{if(Math.hypot(m-i.plaza[0],p-i.plaza[1])<7)return!0;for(const y of Object.values(s))if(Math.abs(m-y.pos[0])<y.size[0]/2+2.5&&Math.abs(p-y.pos[1])<y.size[1]/2+2.5)return!0;for(const y of i.fieldSlots)if(Math.abs(m-y[0])<i.fieldSize[0]/2+2&&Math.abs(p-y[1])<i.fieldSize[1]/2+2)return!0;for(const y of i.orchardSlots)if(Math.hypot(m-y[0],p-y[1])<i.orchardSize[0]/2+2)return!0;for(const y of Object.values(i.paths))for(let x=1;x<y.length;x++)if(Sf(m,p,y[x-1],y[x])<2.5)return!0;return!1},u=e.quality==="high"?110:55,[d,f]=i.mapSize;for(let m=0,p=0;m<u&&p<2e3;p++){const y=(t()-.5)*(d+24),x=(t()-.5)*(f+20);if(h(y,x))continue;const _=Iy(t);_.position.set(y,0,x),n.add(_),m++}const g=o.getObjectByName("blades");let v=0;return{root:n,createField:()=>Dy(i),createWorker:()=>ky(),createFruitTree:()=>Ef(),createProcessor:m=>Tf(m,i),update(m){g&&(g.rotation.z-=m*.8),v+=m,l.scale.setScalar(1+Math.sin(v*13)*.08+Math.sin(v*7.3)*.05)}}},Ny=40,Fy=2.5,Oy=5.5;function rl(i,e,t){if(e===t)return[i.spots[e]];const n=i.paths[`${e}>${t}`];if(n)return[...n];const s=i.paths[`${t}>${e}`];return s?[...s].reverse():e!=="warehouse"&&t!=="warehouse"?[...rl(i,e,"warehouse"),...rl(i,"warehouse",t).slice(1)]:[i.spots[e],i.spots[t]]}const Ku=(i,e)=>Math.hypot(i[e+1][0]-i[e][0],i[e+1][1]-i[e][1]),xo=(i,e)=>i.set(i.x+(e%2-.5)*1.1+Math.floor(e/4)*1.6,0,i.z+(e%4-1.5)*.35);function Af(i,e,t){if(i.length===1)return t.set(i[0][0],0,i[0][1]);let n=0;for(let r=0;r<i.length-1;r++)n+=Ku(i,r);let s=st.clamp(e,0,1)*n;for(let r=0;r<i.length-1;r++){const o=Ku(i,r);if(s<=o||r===i.length-2){const a=o?Math.min(1,s/o):0;return t.set(i[r][0]+(i[r+1][0]-i[r][0])*a,0,i[r][1]+(i[r+1][1]-i[r][1])*a)}s-=o}return t}class By{constructor(e,t,n){F(this,"fields",[]);F(this,"workers",[]);F(this,"trees",[]);F(this,"processors",[]);F(this,"tmp",new k);F(this,"targetTmp",new k);F(this,"paths",new Map);var s;this.art=e,this.layout=t,this.parent=n,t.orchardSlots.forEach(([r,o],a)=>{var l;const c=((l=e.createFruitTree)==null?void 0:l.call(e,a))??Ef();c.object.position.set(r,0,o),n.add(c.object),this.trees.push(c)});for(const r of["bakery","preservery"]){const o=t.buildings[r],a=((s=e.createProcessor)==null?void 0:s.call(e,r))??Tf(r,t);a.object.position.set(o.pos[0],0,o.pos[1]),a.object.rotation.y=o.rotY,n.add(a.object),this.processors.push({id:r,vis:a})}}workerPosition(e){var t;return((t=this.workers[e])==null?void 0:t.pos)??null}sync(e,t){var s,r;for(;this.fields.length<e.fields.length&&this.fields.length<this.layout.fieldSlots.length;){const o=this.fields.length,a=this.art.createField(o),[c,l]=this.layout.fieldSlots[o];a.object.position.set(c,0,l),this.parent.add(a.object),this.fields.push(a)}for(let o=0;o<this.fields.length;o++){const a=e.fields[o];if(!a)continue;const c=a.planted?Math.min(1,(a.growth+e.remainder)/Gt[a.crop].seconds):0;this.fields[o].setCrop(c,a.planted,a.harvested,a.crop)}this.trees.forEach((o,a)=>{const c=e.trees[a];if(!c)return;const l=c.planted&&c.growth01<1&&!c.ripe?Math.min(1,c.growth01+e.remainder/Ny):c.growth01;o.setState(c.planted,l,c.ripe,c.harvested)});const n=ht(e);for(const{id:o,vis:a}of this.processors){const c=e.processors[o],l=c.batch?Math.min(1,c.progress01+e.remainder/hn[o].seconds):0;a.setState(n[o],!!c.batch,l)}for(;this.workers.length<e.workers.length;){const o=this.workers.length,a=this.art.createWorker(o),c={vis:a,pos:new k,heading:0,wanderIdx:o%3,wanderClock:o*1.7,orchard:0};c.pos.copy(this.targetFor(e,o,c,0)),a.object.position.copy(c.pos),this.parent.add(a.object),this.workers.push(c)}for(let o=0;o<this.workers.length;o++){const a=e.workers[o],c=this.workers[o],l=this.targetFor(e,o,c,t),h=this.tmp.copy(l).sub(c.pos);h.y=0;const u=h.length(),d=Math.min(u,Oy*t*(u>3?1.6:1)),f=u>.08;if(f){c.pos.addScaledVector(h.normalize(),d);let v=Math.atan2(h.x,h.z)-c.heading;v=Math.atan2(Math.sin(v),Math.cos(v)),c.heading+=v*Math.min(1,t*10)}c.vis.object.position.copy(c.pos),c.vis.object.rotation.y=c.heading,c.vis.setState(a.job,f,a.cargo,a.cargoItem),(r=(s=c.vis).tick)==null||r.call(s,t)}}path(e,t){const n=`${e}>${t}`;let s=this.paths.get(n);return s||this.paths.set(n,s=rl(this.layout,e,t)),s}targetFor(e,t,n,s){const r=e.workers[t],o=this.layout,a=this.targetTmp;switch(r.job){case"haul":{const c=r.location,l=r.destination;if(c===l)return xo(a.set(o.spots[c][0],0,o.spots[c][1]),t);const h=(r.progress+e.remainder)/Qe.haulSeconds;return Af(this.path(c,l),h,a)}case"farm":{if(r.location==="orchard"&&(n.orchard=Fy),n.orchard>0)return n.orchard-=s,a.set(o.spots.orchard[0],0,o.spots.orchard[1]);n.wanderClock+=s,n.wanderClock>4&&(n.wanderClock=0,n.wanderIdx=(n.wanderIdx+1)%Math.max(1,Math.min(e.fields.length,o.fieldSlots.length)));const[c,l]=o.fieldSlots[n.wanderIdx]??o.fieldSlots[0];return a.set(c+o.fieldSize[0]/2+.6,0,l+Math.sin(n.wanderClock*.8)*1.5)}case"mill":return xo(a.set(o.buildings.mill.door[0],0,o.buildings.mill.door[1]),t);case"sell":return xo(a.set(o.buildings.shop.door[0],0,o.buildings.shop.door[1]),t);case"bake":return a.set(o.buildings.bakery.door[0],0,o.buildings.bakery.door[1]);case"preserve":return a.set(o.buildings.preservery.door[0],0,o.buildings.preservery.door[1]);default:return xo(a.set(o.plaza[0]-2.5,0,o.plaza[1]+2),t)}}}const Hs=1.25;class zy{constructor(e){F(this,"object",new me);F(this,"cur");F(this,"state",["idle",!1,0,"wheat"]);this.fallback=e,this.cur=e,this.object.scale.setScalar(Hs),this.object.add(e.object)}use(e){this.object.remove(this.cur.object),this.cur=e,this.object.add(e.object),e.setState(...this.state)}get swapped(){return this.cur!==this.fallback}setState(e,t,n,s="wheat"){this.state[0]=e,this.state[1]=t,this.state[2]=n,this.state[3]=s,this.cur.setState(e,t,n,s)}tick(e){var t,n;(n=(t=this.cur).tick)==null||n.call(t,e)}}function Hy(i,e){const t=new Map,n=new Map;return{world:{root:i.root,setStock:i.setStock?(r,o,a)=>i.setStock(r,o,a):void 0,setStockItems:i.setStockItems?(r,o)=>i.setStockItems(r,o):void 0,createFruitTree:i.createFruitTree?r=>i.createFruitTree(r):void 0,createProcessor:i.createProcessor?r=>i.createProcessor(r):void 0,update:i.update?(r,o)=>i.update(r,o):void 0,setHousing:i.setHousing?r=>i.setHousing(r):void 0,createField:r=>i.createField(r),createWorker:r=>{const o=new zy(i.createWorker(r));t.set(r,o);const a=n.get(r);return a&&(n.delete(r),o.use(a)),o},dispose:()=>{var r;e==null||e(),(r=i.dispose)==null||r.call(i)}},provide(r,o){const a=t.get(r);a?a.use(o):n.set(r,o)},get ready(){return[...t.values()].filter(r=>r.swapped).length}}}const Vy={tom:15921126,yuki:11127018,lin:8006197};function Gy(i){const e=new me,t=new b(new an(.3,.6,3,8),new ft({color:Vy[i],roughness:.9}));t.position.y=.75;const n=new b(new St(.28,10,8),new ft({color:15911328,roughness:.9}));return n.position.y=1.5,e.add(t,n),e.traverse(s=>{s.castShadow=!0}),{object:e,setState(){}}}class Wy{constructor(e){F(this,"object",new me);F(this,"pos",new k);F(this,"heading",0);F(this,"swapped",!1);F(this,"cur");F(this,"state",[!1,!1]);this.cur=e,this.object.scale.setScalar(Hs),this.object.add(e.object)}use(e){this.object.remove(this.cur.object),this.cur=e,this.object.add(e.object),this.swapped=!0,e.setState(...this.state)}setState(e,t){this.state[0]=e,this.state[1]=t,this.cur.setState(e,t)}tick(e){var t,n;(n=(t=this.cur).tick)==null||n.call(t,e)}}class $y{constructor(e,t,n){F(this,"slots",new Map);F(this,"tmp",new k);F(this,"legs",new Map);var s;this.layout=t;for(const r of Dr){const o=new Wy(((s=e.createVillager)==null?void 0:s.call(e,r))??Gy(r));o.object.visible=!1,n.add(o.object),this.slots.set(r,o)}}provide(e,t){var n;(n=this.slots.get(e))==null||n.use(t)}get objects(){return[...this.slots.values()].map(e=>e.object)}get ready(){return[...this.slots.values()].filter(e=>e.swapped).length}position(e){const t=this.slots.get(e);return t!=null&&t.object.visible?t.pos:null}leg(e,t,n){const s=`${e}:${t}>${n}`;let r=this.legs.get(s);if(!r){const o=this.layout.villagers[e];r={"gate>plaza":o.toPlaza,"plaza>gate":[...o.toPlaza].reverse(),"plaza>shop":o.toShop,"shop>plaza":[...o.toShop].reverse(),"gate>shop":[...o.toPlaza,...o.toShop.slice(1)],"shop>gate":[...o.toPlaza,...o.toShop.slice(1)].reverse()}[`${t}>${n}`]??[o[n]],this.legs.set(s,r)}return r}sync(e,t){for(const n of e.villagers){const s=this.slots.get(n.id);if(!s||(s.object.visible!==n.appeared&&(s.object.visible=n.appeared),!n.appeared))continue;const r=this.layout.villagers[n.id],o=n.location===n.destination?this.tmp.set(r[n.location][0],0,r[n.location][1]):Af(this.leg(n.id,n.location,n.destination),(n.progress+e.remainder)/Nn.travelSeconds,this.tmp),a=!Number.isFinite(s.pos.x)||s.pos.lengthSq()===0,c=o.x-s.pos.x,l=o.z-s.pos.z,h=!a&&Math.hypot(c,l)>.02&&t>0;if(h){let u=Math.atan2(c,l)-s.heading;u=Math.atan2(Math.sin(u),Math.cos(u)),s.heading+=u*Math.min(1,t*10)}else if(n.location==="shop"&&n.destination==="shop"){const u=this.layout.buildings.shop.door;let d=Math.atan2(u[0]-s.pos.x,u[1]-s.pos.z)-s.heading;d=Math.atan2(Math.sin(d),Math.cos(d)),s.heading+=d*Math.min(1,t*4)}s.pos.copy(o),s.object.position.copy(s.pos),s.object.rotation.y=s.heading,s.setState(h,n.location==="shop"&&n.destination==="shop"&&!!n.commission),s.tick(t)}}}const ct={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,e){try{localStorage.setItem(i,e)}catch{}},remove(i){try{localStorage.removeItem(i)}catch{}}},ec={tom:"旅店廚師",yuki:"學校老師",lin:"村長太太"},Xy={tom:[["你好！我是旅店的廚師阿湯。","旅店的客人一直問有沒有新鮮麵包。"],["你們的麵粉真細，做出來的湯都變好喝了。","下次幫我留幾袋麵粉好嗎？"],["昨天的燉菜加了你們的甘藍，客人吃光光！","欸，你有沒有試過剛出爐的麵包配奶油？"],["以後每天早上我都送一袋麵粉給你，算我的謝禮。","我在想，旅店的招牌菜要不要用你們的名字？"],["我以前在城裡的大餐廳做菜，可是我更喜歡這個小村子。","跟你們一起做事很開心，真的。"],["（故事）阿湯說，他小時候家裡窮，每天最期待的就是奶奶烤的那條麵包。他離開大城市，是想做出「讓人想回家的味道」。今天他把第一條用你們麵粉烤的麵包，放在奶奶的照片前面。","「謝謝你，讓我找到那個味道。」"]],yuki:[["你好，我是學校的老師小雪。這是小白（兔子）。","小白最喜歡胡蘿蔔了。"],["孩子們今天在畫農莊，畫裡有你們的風車喔。","小白吃了你們的胡蘿蔔，整天都在跳。"],["可以帶孩子們來參觀磨坊嗎？他們一定很興奮。","蘋果切成小兔子的樣子，孩子們最喜歡了。"],["以後早上我會帶蘋果過來，是學校那棵樹結的。","孩子們都叫你「農莊的大哥哥大姊姊」。"],["其實我剛來村子的時候很怕生，是孩子們陪我的。","小白好像也很喜歡你，牠今天一直在你腳邊。"],["（故事）小雪帶全班孩子來農莊上了一堂課：從種子、麥田、磨坊到麵包。回去後，每個孩子都寫了一封信給你們。最後一封是小雪寫的，她說，這是她當老師以來最棒的一堂課。","「明年，我們一起在學校種一小塊田好不好？」"]],lin:[["我是林嬸，村長家的。你們就是新來的農莊吧？","村裡好久沒有這麼熱鬧了。"],["你們的蘋果醬，跟我年輕時做的一個味道。","有空來家裡喝杯茶。"],["村長說，秋天的豐收祭想請你們幫忙。","這條披肩是我自己織的，冬天到了再織一條給你。"],["我每天早上幫你們帶些蘋果來，家裡的樹結太多啦。","村裡的人都在說你們的好話呢。"],["我年輕時也想開一間果醬鋪，後來就……嫁進村長家了。","看你們把農莊經營起來，我真的很高興。"],["（故事）豐收祭那天，林嬸拿出一本舊筆記本，裡面是她四十年前寫的果醬配方。她說，一直想找一個能把它做出來的人。「這本給你們。村子的味道，要有人傳下去。」","「以後豐收祭的果醬，就交給你們了。」"]]},Bi=(i,e)=>i.workers.filter(t=>t.job===e).length,Ju=i=>Ct.reduce((e,t)=>e+(t==="wheat"?0:i.inventory[t]),0);function jy(i,e=Tr(i)){if(i.result)return null;if(e)return!Bi(i,"sell")&&Ju(i)?{key:"jam-sell",text:"倉庫滿了！貨沒人賣：點 🪙商店，＋ 派人賣貨",target:"site:shop"}:i.inventory.wheat>=8&&Bi(i,"mill")<2?{key:"jam-mill",text:"倉庫滿了！麥子堆太多：點 ⚙️磨坊，＋ 再派一人",target:"site:mill"}:Ai(i,"warehouse").ok?{key:"jam-up",text:"倉庫滿了！點 🔨升級 擴建倉庫",target:"upgrade"}:{key:"jam",text:"倉庫滿了！多派人 ⚙️磨粉、🪙賣貨，倉庫才有空位",target:"site:warehouse"};if((i.fields.some(r=>r.harvested>0)||i.trees.some(r=>r.harvested>0))&&!Bi(i,"haul"))return{key:"haul",text:"田邊的收成沒人搬：點 🏠倉庫，＋ 派人搬運",target:"site:warehouse"};if(i.inventory.wheat>=4&&!Bi(i,"mill"))return{key:"mill",text:"倉庫的麥子沒人磨：點 ⚙️磨坊，＋ 派人磨粉",target:"site:mill"};if(Ju(i)>=2&&!Bi(i,"sell"))return{key:"sell",text:"有貨沒人賣：點 🪙商店，＋ 派人賣貨",target:"site:shop"};if(!Bi(i,"farm")&&i.fields.some(r=>!r.planted&&!r.harvested))return{key:"farm",text:"沒人種田：點田，＋ 派人種田",target:"site:field"};const n=ht(i);for(const r of["bakery","preservery"]){const o=hn[r];if(n[r]&&!Bi(i,o.job)&&i.inventory[o.input]>=o.amount)return{key:r,text:`${r==="bakery"?"🍞 麵包坊":"🍯 果醬坊"}開了：點它派一個人去${r==="bakery"?"烘焙":"製醬"}，${ri[o.output]}賣得比${ri[o.input]}貴`,target:`site:${r}`}}if(n.orchard&&i.trees[0]&&!i.trees[0].planted)return{key:"tree",text:"🍎 蘋果樹可以種了：點樹上的紅色名牌",target:"tree"};const s=i.workers.find(r=>r.job==="idle");if(s)return{key:"idle",text:i.mode==="endless"?`${s.name} 在休息：按下方工作列的 ＋ 派工作`:`${s.name} 在休息：點他的卡派個工作`,target:"crew"};if(["warehouse","mill","field"].some(r=>Ai(i,r).ok))return{key:"up",text:"錢夠了：點 🔨升級，農莊會做得更快",target:"upgrade"};if(i.mode==="endless"){if(Xo(i).ok)return{key:"recruit",text:"錢夠雇人了：點 🔨升級 招募新農友",target:"upgrade"};if(i.workers.length>=zn(i)&&$o(i).ok)return{key:"house",text:"宿舍住滿了：點 🔨升級 加蓋宿舍，才能再雇人",target:"upgrade"}}return null}const qy={crops:2,bakery:3,orchard:4,preservery:5},Wl={crops:120,bakery:300,orchard:600,preservery:1e3},Cf=["crops","bakery","orchard","preservery"],Rf={crops:["carrot","cabbage"],bakery:["bakery"],orchard:["orchard"],preservery:["preservery"]},Vs=i=>i.mode==="endless";function Pf(i,e){const t=ht(i);return e==="crops"?t.crops.length>1:t[e]}function $l(i,e){return Vs(i)?`🪙${Wl[e]}`:`第 ${qy[e]} 天`}function Yy(i){const e=Cf.find(t=>!Pf(i,t));return e?{key:e,ids:Rf[e],earned:Wl[e]}:null}function Ky(i){return Cf.filter(e=>Pf(i,e)).flatMap(e=>Rf[e])}const mn={farm:"種田",haul:"搬運",mill:"磨粉",sell:"賣貨",bake:"烘焙",preserve:"製醬",idle:"休息"},$i={farm:"🌾",haul:"🧺",mill:"⚙️",sell:"🪙",bake:"🍞",preserve:"🥄",idle:"💤"},Zu=["farm","haul","mill","bake","preserve","sell","idle"],Jy={morning:"早上",afternoon:"下午",evening:"傍晚"},Zy={"Field unavailable":"這塊田現在不能種","Invalid worker or job":"派工失敗","Worker must deliver cargo first":"他手上還有貨，送到倉庫才能換工作",Locked:"還沒解鎖","Unknown crop":"不認得的作物","Tree unavailable":"蘋果樹已經種了","Station busy":"這間工坊已經有人在做了","Batch in progress":"這批還沒做完，做完才能換工作","Invalid villager":"找不到這位村民","Unknown item":"不認得的貨","Already gifted":"今天已經送過了，明天再來","No item":"倉庫沒有這個貨","Not enough coins":"金幣不夠","Invalid upgrade":"不能升級","No land":`田最多 ${Qe.maxFields} 塊，已經開滿了`,"Max level":"磨坊已經升到最快了","Unknown action":"不認得的操作","Invalid worker":"找不到這個工人","Invalid name":`名字要 1～${qo} 個字，不能只有空白`,"Housing full":"宿舍住滿了：先加蓋宿舍"},Qy={"Max level":"宿舍已經蓋到最大了",Locked:"無盡農莊才能加蓋宿舍、招募"},tc={field:"開新田",warehouse:"擴建倉庫",mill:"磨坊加速"},e1={field:"多一塊田，多收一份作物",warehouse:"倉庫多放 12 格，比較不會塞住",mill:"磨一袋麵粉快 1 秒"},nc=(i,e)=>`./portraits/${i%4}-${e}.webp`,t1=i=>Er[i]??`農友 ${i+1}`,ic={farm:["今年的麥子長得真好。","再一輪就能收了。","太陽好，田也好。"],haul:["這袋有點重……","倉庫，我來了！","多跑幾趟，大家就有麵粉。"],mill:["風車轉起來囉。","磨得細一點，賣得好一點。","麥香好濃。"],sell:["新鮮麵粉，歡迎來看看！","今天客人真多。","這袋算你便宜一點。"],idle:["休息一下，等等再忙。","有什麼要我做的嗎？","曬曬太陽也不錯。"],bake:["麵包快出爐了，好香！","揉麵團是體力活。","烤得金黃才好賣。"],preserve:["蘋果醬要慢慢熬。","小心燙，糖還在冒泡。","這罐顏色真漂亮。"],jam:["倉庫塞滿了，快叫人去磨粉！","放不進去啦……"],wait:["還在等貨。","手上沒東西可以做。"]},Qu={carrot:["🥕胡蘿蔔、🥬甘藍收成後不用磨，直接就能賣，磨坊忙不過來時很好用。點田上的名牌，選下一輪要種什麼。","fields"],bakery:["2 袋麵粉烤成 1 個麵包，一個賣 🪙20（麵粉一袋才 🪙8）。點工人卡，派一個人去 🍞烘焙。","bakery"],orchard:["蘋果樹在農莊左上角：點它頭上的紅色名牌種下去。長大後會一直結果，蘋果可以直接賣。","tree"],preservery:["3 顆蘋果熬成 1 罐果醬，一罐賣 🪙42！點工人卡，派一個人去 🍯製醬。","preservery"]},ed="farmproto.tip.villager",Yo="farmproto.result",Ko="farmproto.unlockSeen",Jo="farmproto.unlockSeen.endless",td="farmproto.album",ol=(i,e)=>`./portraits/v-${i}-${e}.webp`,al=i=>Math.floor(i/10),sc=i=>"♥".repeat(i)+"♡".repeat(5-i),Lf="farmproto.best",rc={sold:["🛒","賣出"],milled:["⚙️","磨粉"],ordersCompleted:["📜","交訂單"]},oc=i=>i>=2?Math.min(8,2*(i-1)):0,n1=()=>Math.round(gn.earned*.85);function i1(){try{const i=JSON.parse(ct.get(Lf)??"null");return i&&Number.isFinite(i.earned)?{earned:i.earned,stars:Vl(i.earned)}:null}catch{return null}}const If=i=>i.job==="haul"&&i.cargo>0&&i.location==="warehouse"&&i.destination==="warehouse";function Tr(i){return $n(i)>=En(i)||i.workers.some(If)}function Df(i,e){const t=i.processors[e];if(t.batch)return null;switch(t.waiting){case"Locked":return Vs(i)?`賺到 🪙${Wl[e]} 開放`:`第 ${hn[e].day} 天開放`;case"No worker":return"沒人做";case"Missing ingredients":return`缺${ri[hn[e].input]}`;case"Warehouse full":return"倉庫滿了";default:return null}}function kf(i,e){switch(e.job){case"haul":return If(e)?{text:"倉庫滿了",warn:!0}:!e.cargo&&e.location==="field"&&e.destination==="field"&&!i.fields.some(t=>t.harvested>0)&&!i.trees.some(t=>t.harvested>0)?{text:"等收成",warn:!1}:{text:"",warn:!1};case"farm":return e.location==="orchard"?{text:"採蘋果",warn:!1}:{text:"",warn:!1};case"mill":return i.inventory.wheat<Qe.wheatPerFlour?{text:"等麥子",warn:!1}:{text:"",warn:!1};case"sell":return Ct.some(t=>t!=="wheat"&&i.inventory[t]>0)?{text:"",warn:!1}:{text:"沒貨賣",warn:!1};case"bake":case"preserve":{const t=e.job==="bake"?"bakery":"preservery",n=Df(i,t);return{text:n??"",warn:n==="倉庫滿了"}}case"idle":return{text:"💤",warn:!1};default:return{text:"",warn:!1}}}const se=(i,e="",t="")=>{const n=document.createElement(i);return e&&(n.className=e),t&&(n.textContent=t),n},dt=(i,e)=>{i.textContent!==e&&(i.textContent=e)},wo=(i,e)=>{const t=`scaleX(${Number(e.toFixed(3))})`;i.style.transform!==t&&(i.style.transform=t)};class s1{constructor(e,t,n,s=!1,r={music:!0,sfx:!0}){F(this,"root");F(this,"day",se("span"));F(this,"weatherEl",se("small","weather"));F(this,"weatherPrev",null);F(this,"dayBar",se("i"));F(this,"coins",se("b"));F(this,"house",se("span","house"));F(this,"stock",se("span","stock"));F(this,"res",se("div","pill res"));F(this,"workerCards",[]);F(this,"workerNames",[]);F(this,"workerLabels",[]);F(this,"upgradeBtns",{});F(this,"speedBtns",[]);F(this,"lastRun",1);F(this,"upBtn",se("button","gold upbtn"));F(this,"upPop",se("div","pill uppop hidden"));F(this,"menuPop",se("div","pill menupop hidden"));F(this,"tasks",se("div","pill tasks"));F(this,"tasksTitle",se("span"));F(this,"crewEl",se("div","crew"));F(this,"jobsEl",se("div","jobs"));F(this,"jobCols",new Map);F(this,"rosterBtn",se("button","jobcol roster-btn"));F(this,"rosterIdle",se("b"));F(this,"jobState",null);F(this,"rosterPop",se("div","pill rosterpop hidden"));F(this,"rosterSig","");F(this,"houseRows",[]);F(this,"houseUpBtn",se("button","gold"));F(this,"recruitBtn",se("button","gold"));F(this,"houseBox",se("div","modal hidden housecard"));F(this,"houseInfo",se("p"));F(this,"houseUp2",se("button","gold"));F(this,"recruit2",se("button","gold"));F(this,"houseWhy",se("p","hint"));F(this,"houseOpen",!1);F(this,"mode","challenge");F(this,"hintEl",se("button","nexthint hidden"));F(this,"hintNow",null);F(this,"hintCand","");F(this,"hintSince",0);F(this,"hintSeen",0);F(this,"hintLast",null);F(this,"jamSeen",-1e9);F(this,"quiet",!1);F(this,"picker",se("div","picker hidden"));F(this,"toastEl",se("div","toast"));F(this,"tagLayer",se("div","tags"));F(this,"goal",se("small","goal"));F(this,"goalBar",se("i"));F(this,"orders",se("div","orders"));F(this,"streakEl",se("div","it streak hidden"));F(this,"daily",se("div","daily"));F(this,"dailyRows",[]);F(this,"streakText",se("span"));F(this,"dailyPrev",null);F(this,"dailyDay",0);F(this,"streakPrev",-1);F(this,"earnedPrev",-1);F(this,"best",i1());F(this,"modal",se("div","modal hidden"));F(this,"renameBox",se("div","modal hidden rename"));F(this,"renameTitle",se("h2"));F(this,"renameInput",se("input"));F(this,"renameFor",-1);F(this,"names",Er);F(this,"focusBox",se("div","focus hidden"));F(this,"focusImg",se("img"));F(this,"focusName",se("b"));F(this,"focusJob",se("span"));F(this,"focusLine",se("p"));F(this,"focusFor",-1);F(this,"toastTimer",0);F(this,"resultShown",ct.get(Yo)==="shown");F(this,"pickFor",-1);F(this,"pickCard",null);F(this,"sizeGen",0);F(this,"lastCoins",-1);F(this,"speedNow",1);F(this,"taskCounts",{orders:0,jobs:0,daily:0});F(this,"orderSig","?");F(this,"vBox",se("div","modal hidden vcard"));F(this,"vImg",se("img"));F(this,"vName",se("h2"));F(this,"vHearts",se("div","hearts"));F(this,"vLine",se("p","line"));F(this,"vJob",se("div","vjob"));F(this,"vGifts",se("div","gifts"));F(this,"vGiftHint",se("p","hint"));F(this,"vAlbum",se("p","hint album"));F(this,"vFor",null);F(this,"vSig","");F(this,"vPrev",null);F(this,"album",(()=>{try{return JSON.parse(ct.get(td)??"{}")??{}}catch{return{}}})());F(this,"unlockSeen",Number(ct.get(Ko)??0));F(this,"unlockSeenEndless",null);F(this,"cropBox",se("div","pill croppick hidden"));F(this,"cropTitle",se("div","ttl"));F(this,"cropBtns",new Map);F(this,"cropFor",-1);this.cb=t,this.root=e,e.append(this.tagLayer);const o=se("div","pill day"),a=se("div","daybar");a.append(this.dayBar);const c=se("div","daybar goalbar");c.append(this.goalBar),o.append(this.day,this.weatherEl,a,this.goal,c);const l=se("button","tasks-head");l.append(this.tasksTitle,se("i","caret","▾")),l.onclick=()=>this.tasks.classList.toggle("open"),this.tasks.append(l,this.orders,this.daily),matchMedia("(min-width: 641px) and (min-height: 560px)").matches&&this.tasks.classList.add("open");const h=se("div","col");h.append(o,this.tasks),this.buildDaily();const u=se("span","coin");u.append("🪙 ",this.coins),this.res.append(u,this.house,this.stock),this.res.addEventListener("click",()=>this.res.classList.toggle("open"));const d=se("div","pill ctl"),f=se("button","chip pause-btn");f.dataset.speed="0",f.title="暫停／繼續",f.onclick=()=>this.setSpeed(this.speed===0?this.lastRun:0);const g=se("button","chip speed-btn");g.title="快轉",g.onclick=()=>this.setSpeed(this.speed===0?this.lastRun:this.speed>=4?1:this.speed*2),this.speedBtns.push(f,g);const v=se("button","chip menu-btn","☰");v.title="選單",v.onclick=()=>this.menuPop.classList.toggle("hidden"),this.buildMenu(n,s,r),d.append(f,g,v,this.menuPop),document.addEventListener("pointerdown",T=>{!this.menuPop.contains(T.target)&&T.target!==v&&this.menuPop.classList.add("hidden"),!this.upPop.contains(T.target)&&!this.upBtn.contains(T.target)&&this.upPop.classList.add("hidden")});const m=se("div","rcol");m.append(d,this.res);const p=se("div","top");p.append(h,m);const y=se("div","bottom"),x=this.crewEl;Er.forEach((T,R)=>{const M=se("button","card"),w=se("b","",T),L=se("span"),B=se("img","face");B.src=nc(R,"head"),B.alt="",B.draggable=!1;const O=se("div","txt");O.append(w,L),M.append(B,O),M.dataset.worker=String(R),M.onclick=()=>this.openPicker(R,M),this.workerCards.push(M),this.workerNames.push(w),this.workerLabels.push(L),x.append(M)}),this.buildJobs(),x.append(this.jobsEl),this.upBtn.append(se("i","","🔨"),se("small","","升級")),this.upBtn.title="升級農莊",this.upBtn.onclick=()=>this.upPop.classList.toggle("hidden");const _=se("div","ups");for(const T of["field","warehouse","mill"]){const R=se("div","uprow"),M=se("button","gold");M.onclick=()=>{t.onAction({type:"upgrade",target:T})&&(this.toast(`${tc[T]}完成！`),this.upPop.classList.add("hidden"))},this.upgradeBtns[T]=M,R.append(M,se("small","",e1[T])),_.append(R)}for(const[T,R,M]of[[this.houseUpBtn,"宿舍多住 2 人，才能再招募",()=>this.upgradeHousing()],[this.recruitBtn,"多一個人幫忙（宿舍要有空床）",()=>this.recruit()]]){const w=se("div","uprow");T.onclick=()=>{M()&&this.upPop.classList.add("hidden")},w.append(T,se("small","",R)),w.hidden=!0,this.houseRows.push(w),_.append(w)}this.upPop.append(se("div","ttl","🔨 升級農莊"),_),y.append(x,this.upBtn),this.hintEl.onclick=()=>this.pointHint();for(const T of Zu){const R=se("button","chip",`${$i[T]} ${mn[T]}`);R.dataset.job=T,(T==="bake"||T==="preserve")&&(R.hidden=!0),R.onclick=()=>{this.pickFor>=0&&t.onAction({type:"assign",workerId:this.pickFor,job:T}),this.closePicker()},this.picker.append(R)}const I=se("button","chip follow-btn","🎥 近看");I.onclick=()=>{const T=this.pickFor;this.closePicker(),T>=0&&t.onFollow(T)};const E=se("button","chip rename-btn","✏️ 改名");E.onclick=()=>{const T=this.pickFor;this.closePicker(),T>=0&&this.openRename(T)},this.picker.append(I,E),this.buildRename(),this.buildFocus(),document.addEventListener("pointerdown",T=>{var M;const R=T.target;!this.picker.contains(R)&&!((M=R.closest)!=null&&M.call(R,"[data-worker]"))&&this.closePicker(),!this.rosterPop.contains(R)&&!this.picker.contains(R)&&!this.rosterBtn.contains(R)&&this.rosterPop.classList.add("hidden")}),this.buildHouseCard(),this.buildCropPicker(),this.buildVillagerCard(),this.orders.addEventListener("click",T=>{const R=T.target.closest("[data-villager]");R&&this.openVillager(R.dataset.villager)}),e.append(p,y,this.hintEl,this.focusBox,this.upPop,this.rosterPop,this.picker,this.cropBox,this.toastEl,this.modal,this.renameBox,this.vBox,this.houseBox),this.refreshSpeed(),window.addEventListener("resize",()=>{this.sizeGen++,this.pickFor>=0&&this.placePicker()})}get speed(){return this.speedNow}set speed(e){this.speedNow=e,this.refreshSpeed()}refreshSpeed(){this.speed>0&&(this.lastRun=this.speed);const[e,t]=this.speedBtns;dt(e,this.speed===0?"▶":"⏸"),e.classList.toggle("on",this.speed===0),dt(t,`${this.lastRun}×`),t.dataset.speed=String(this.lastRun),t.classList.toggle("on",this.speed>1)}setSpeed(e){e!==this.speed&&(this.speed=e,this.cb.onSpeed(e))}buildMenu(e,t,n){const s=se("button","chip tour-btn","📖 新手導覽");s.onclick=()=>{var l,h;this.menuPop.classList.add("hidden"),(h=(l=this.cb).onTour)==null||h.call(l)};const r=se("button","chip",e==="high"?"🖥️ 高畫質":"🔋 省電");r.title="切換畫質（會重新載入）",r.onclick=()=>this.cb.onQuality(e==="high"?"low":"high");const o=se("button",`chip outline-btn${t?" on":""}`,"✒️ 描邊");o.title="建築和樹外緣加一圈細線",o.onclick=()=>{t=!t,o.classList.toggle("on",t),this.cb.onOutline(t)};const a=[];for(const[l,h]of[["music","🎵 音樂"],["sfx","🔔 音效"]]){const u=se("button",`chip ${l}-btn${n[l]?" on":""}`,h);u.onclick=()=>{n[l]=!n[l],u.classList.toggle("on",n[l]),this.cb.onSound(l,n[l])},a.push(u)}const c=se("button","chip restart-btn","🔄 開新局");c.onclick=()=>{this.menuPop.classList.add("hidden"),this.openNewGame()},this.menuPop.append(s,r,o,...a,c)}buildJobs(){for(const e of Zu){if(e==="idle")continue;const t=se("div","jobcol");t.dataset.job=e;const n=se("button","pm plus","＋"),s=se("button","pm minus","−"),r=se("b"),o=se("div","mid");o.append(se("i","",$i[e]),r,se("small","",mn[e])),n.title=`多派一個人去${mn[e]}`,s.title=`${mn[e]}的人少一個（改成休息）`,n.onclick=()=>this.jobPlus(e),s.onclick=()=>this.jobMinus(e),t.append(n,o,s),this.jobCols.set(e,{col:t,n:r,plus:n,minus:s}),this.jobsEl.append(t)}this.rosterBtn.title="名冊：每個人的卡片（近看、改名、單獨派工）",this.rosterBtn.append(this.rosterIdle,se("small","","👥 名冊")),this.rosterBtn.onclick=()=>this.toggleRoster(),this.jobsEl.append(this.rosterBtn)}jobPlus(e){const t=this.jobState;if(!t)return;const n=t.workers.find(s=>s.job==="idle");if(!n){this.toast(t.workers.length<zn(t)?"沒有人在休息：先按別的工作的 −，或招募新農友":"沒有人在休息：先按別的工作的 −",2600,!0);return}this.cb.onAction({type:"assign",workerId:n.id,job:e})}jobMinus(e){const t=this.jobState;if(!t)return;const n=o=>Object.values(t.processors).some(a=>{var c;return((c=a.batch)==null?void 0:c.workerId)===o}),s=t.workers.filter(o=>o.job===e),r=[...s].reverse().find(o=>!o.cargo&&!n(o.id))??s[s.length-1];r&&this.cb.onAction({type:"assign",workerId:r.id,job:"idle"})}renderJobs(e){const t=ht(e).jobs,n=e.workers.filter(s=>s.job==="idle").length;for(const[s,r]of this.jobCols){const o=t.includes(s);if(r.col.hidden===o&&(r.col.hidden=!o),!o)continue;const a=e.workers.filter(l=>l.job===s).length;dt(r.n,String(a));const c=(s==="bake"||s==="preserve")&&a>=1;r.plus.disabled!==c&&(r.plus.disabled=c),r.plus.classList.contains("dim")!==!n&&r.plus.classList.toggle("dim",!n),r.minus.disabled!==!a&&(r.minus.disabled=!a),r.col.classList.contains("none")!==!a&&r.col.classList.toggle("none",!a)}dt(this.rosterIdle,`💤${n}`),this.rosterBtn.classList.contains("alert")!==n>0&&this.rosterBtn.classList.toggle("alert",n>0),this.rosterPop.classList.contains("hidden")||this.renderRoster(e)}toggleRoster(){this.rosterPop.classList.toggle("hidden"),this.rosterSig="",this.jobState&&!this.rosterPop.classList.contains("hidden")&&this.renderRoster(this.jobState)}renderRoster(e){const t=e.workers.map(r=>`${r.name}:${r.job}:${r.cargo}`).join("|");if(t===this.rosterSig)return;this.rosterSig=t;const n=se("div","ttl",`👥 名冊 ${e.workers.length}/${zn(e)} 人`),s=se("div","rlist");if(e.workers.forEach((r,o)=>{const a=se("button","rrow");a.dataset.worker=String(o),a.dataset.job=r.job;const c=se("img","face");c.src=nc(o,"head"),c.alt="",c.draggable=!1,a.append(c,se("b","",r.name),se("span","",`${$i[r.job]} ${mn[r.job]}${r.cargo?` · 扛 ${Rt[r.cargoItem]}${r.cargo}`:""}`)),a.onclick=()=>this.openPicker(o,a),s.append(a)}),this.rosterPop.replaceChildren(n,s),this.pickFor>=0&&this.pickCard&&!this.workerCards.includes(this.pickCard)){const r=s.querySelector(`[data-worker="${this.pickFor}"]`);r&&(this.pickCard=r,this.placePicker())}}buildHouseCard(){const e=se("div","sheet"),t=se("button","chip","關閉");t.onclick=()=>this.closeHousing(),this.houseUp2.onclick=()=>this.upgradeHousing(),this.recruit2.onclick=()=>this.recruit();const n=se("div","hbtns");n.append(this.houseUp2,this.recruit2);const s=se("div","row");s.append(t),e.append(se("h2","","🏡 宿舍"),this.houseInfo,n,this.houseWhy,s),this.houseBox.append(e),this.houseBox.addEventListener("pointerdown",r=>{r.target===this.houseBox&&this.closeHousing()})}openHousing(){this.houseOpen=!0,this.houseBox.classList.remove("hidden"),this.jobState&&this.renderHousing(this.jobState)}closeHousing(){this.houseOpen=!1,this.houseBox.classList.add("hidden")}get housingOpen(){return this.houseOpen}renderHousing(e){const t=zn(e),n=e.housingLevel>=ts.capacities.length-1,s=$o(e),r=Xo(e),o=n?"🏡 宿舍已經最大":`🏡 加蓋宿舍 🪙${zl(e)}`,a=`👤 招募農友 🪙${Wo()}`;for(const[c,l,h]of[[this.houseUpBtn,o,s.ok],[this.houseUp2,o,s.ok],[this.recruitBtn,a,r.ok],[this.recruit2,a,r.ok]])dt(c,l),c.disabled!==!h&&(c.disabled=!h);this.houseOpen&&(dt(this.houseInfo,`住了 ${e.workers.length}/${t} 人・Lv${e.housingLevel+1}${n?"（最大）":`，加蓋後住 ${ts.capacities[e.housingLevel+1]} 人`}`),dt(this.houseWhy,r.ok?"新來的農友先休息，用下方的 ＋ 派工作。":r.reason==="Housing full"?n?"宿舍住滿了，已經蓋到最大。":"宿舍住滿了：先加蓋宿舍才能再招募。":r.reason==="Not enough coins"?`招募還差 🪙${Wo()-e.coins}。`:this.housingReason(r.reason)))}housingReason(e){return e&&Qy[e]||this.reason(e)}upgradeHousing(){const e=this.jobState;return!e||!this.cb.onAction({type:"upgradeHousing"})?!1:(this.toast(`🏡 宿舍加蓋好了！現在住得下 ${zn(e)} 人`),!0)}recruit(){const e=this.jobState;if(!e||!this.cb.onAction({type:"recruitWorker"}))return!1;const t=e.workers[e.workers.length-1];return this.toast(`👤 ${t.name} 來幫忙了！先在休息，用下方的 ＋ 派工作`,3200),!0}openNewGame(){this.modal.innerHTML=`<div class="sheet newgame"><h2>開新局</h2><p class="hint">會清掉現在的進度。</p><button class="gold mode" data-mode="challenge"><b>🏆 5 天挑戰</b><small>5 天內賺 🪙${gn.earned} 拿三星</small></button><button class="gold mode" data-mode="endless"><b>🌾 無盡農莊</b><small>沒有期限：賺錢解鎖新東西、招募農友、加蓋宿舍</small></button><div class="row"><button class="chip" data-k="cancel">取消</button></div></div>`,this.modal.classList.remove("hidden");for(const e of this.modal.querySelectorAll("[data-mode]"))e.onclick=()=>this.cb.onRestart(e.dataset.mode);this.modal.querySelector('[data-k="cancel"]').onclick=()=>this.modal.classList.add("hidden")}rectOf(e){const n={crew:this.crewEl,upgrade:this.upBtn,tasks:this.tasks,speed:this.speedBtns[0].parentElement,hint:this.hintEl}[e].getBoundingClientRect();return n.width?n:null}renderHint(e){if(this.quiet||this.focusFor>=0){this.hintCand="",this.hintNow&&(this.hintNow=null,this.hintEl.classList.add("hidden"));return}if(e.paused)return;const t=performance.now();Tr(e)&&(this.jamSeen=t);const n=jy(e,t-this.jamSeen<3e3),s=o=>(o==null?void 0:o.key.split("-")[0])??"";let r=s(n);if(n?(this.hintSeen=t,this.hintLast=n):this.hintCand&&t-this.hintSeen<2500&&(r=this.hintCand),r!==this.hintCand&&(this.hintCand=r,this.hintSince=t),r===s(this.hintNow)){r&&n&&n.key!==this.hintNow.key&&(this.hintNow=n,dt(this.hintEl,n.text));return}t-this.hintSince<1500||(this.hintNow=r?this.hintLast:null,this.hintEl.classList.toggle("hidden",!this.hintNow),this.hintNow&&(dt(this.hintEl,this.hintNow.text),this.hintEl.classList.remove("pop"),this.hintEl.offsetWidth,this.hintEl.classList.add("pop")))}pointHint(){var t,n,s;const e=(t=this.hintNow)==null?void 0:t.target;e==="upgrade"?this.upPop.classList.remove("hidden"):e==="crew"?(this.crewEl.classList.remove("nudge"),this.crewEl.offsetWidth,this.crewEl.classList.add("nudge")):e==="tree"?this.toast("蘋果樹在農莊左上角，點它頭上的紅色名牌"):e!=null&&e.startsWith("site:")&&((s=(n=this.cb).onSite)==null||s.call(n,e.slice(5)))}openPicker(e,t){if(this.pickFor===e)return this.closePicker();this.pickFor=e,this.pickCard=t,this.picker.classList.remove("hidden"),this.placePicker()}placePicker(){const e=this.pickCard.getBoundingClientRect();this.picker.style.left="0px";const t=this.picker.offsetWidth;this.picker.style.left=`${Math.max(8,Math.min(window.innerWidth-t-8,e.left+e.width/2-t/2))}px`,this.picker.style.bottom=`${window.innerHeight-e.top+8}px`}closePicker(){this.pickFor=-1,this.pickCard=null,this.picker.classList.add("hidden")}buildFocus(){this.focusImg.alt="",this.focusImg.draggable=!1;const e=se("div","info"),t=se("button","chip back-btn","🔙 回去");t.onclick=()=>this.cb.onUnfollow();const n=se("div","head");n.append(this.focusName,t),e.append(n,this.focusJob,this.focusLine),this.focusBox.append(this.focusImg,e)}get focused(){return this.focusFor}setFocus(e){this.focusFor=e,this.focusBox.classList.toggle("hidden",e<0),e>=0&&(this.focusImg.src=nc(e,"half"))}renderFocus(e){const t=e.workers[this.focusFor];if(!t)return;const n=kf(e,t);dt(this.focusName,t.name),dt(this.focusJob,`${$i[t.job]} ${mn[t.job]}${t.cargo?` · 扛 ${Rt[t.cargoItem]}${t.cargo}`:""}${n.text&&n.text!=="💤"?` · ${n.text}`:""}`);const s=n.warn?ic.jam:n.text&&t.job!=="idle"?ic.wait:ic[t.job];dt(this.focusLine,`「${s[(Math.floor(e.time/8)+t.id)%s.length]}」`),this.focusBox.classList.toggle("warn",n.warn)}buildRename(){const e=se("div","sheet"),t=se("p","hint",`最多 ${qo} 個字，會自動存檔`);this.renameInput.type="text",this.renameInput.maxLength=qo*2,this.renameInput.autocomplete="off",this.renameInput.enterKeyHint="done";const n=se("button","chip","用原本的名字"),s=se("button","chip","取消"),r=se("button","gold","確定"),o=se("div","row");o.append(n,s,r),e.append(this.renameTitle,this.renameInput,t,o),this.renameBox.append(e),n.onclick=()=>{this.renameFor>=0&&(this.renameInput.value=t1(this.renameFor)),this.renameInput.focus()},s.onclick=()=>this.closeRename(),r.onclick=()=>this.submitRename(),this.renameInput.addEventListener("keydown",a=>{a.key==="Enter"&&!a.isComposing?(a.preventDefault(),this.submitRename()):a.key==="Escape"&&this.closeRename()}),this.renameBox.addEventListener("pointerdown",a=>{a.target===this.renameBox&&this.closeRename()})}openRename(e){this.renameFor=e,this.renameTitle.textContent=`幫 ${this.names[e]??""} 取新名字`,this.renameInput.value=this.names[e]??"",this.renameBox.classList.remove("hidden"),this.renameInput.focus(),this.renameInput.select()}submitRename(){const e=this.renameFor;if(e<0)return;const t=this.renameInput.value.trim();if(t===this.names[e])return this.closeRename();this.cb.onAction({type:"renameWorker",workerId:e,name:t})&&(this.closeRename(),this.toast(`改好了：${t}`))}closeRename(){this.renameFor=-1,this.renameBox.classList.add("hidden"),this.renameInput.blur()}toast(e,t=2200,n=!1){this.toastEl.textContent=e,this.toastEl.classList.toggle("warn",n),this.toastEl.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove("show"),t)}reason(e){return e&&Zy[e]||e||"做不到"}tag(e){const t=se("div",`tag ${e}`);this.tagLayer.append(t);let n="",s=!0,r=this.sizeGen;const o={w:0,h:0};return{el:t,set:a=>{a!==n&&(n=a,t.textContent=a,s=!0)},size:()=>((s||!o.w||r!==this.sizeGen)&&(o.w=t.offsetWidth,o.h=t.offsetHeight,s=!1,r=this.sizeGen),o)}}renderTaskTitle(){const e=this.taskCounts;dt(this.tasksTitle,`📜 訂單 ${e.orders}${e.jobs?`・委託 ${e.jobs}`:""}`)}renderOrders(e){const t=e.villagers.filter(r=>r.commission),n=[...e.orders.map(r=>`${r.id}:${r.items.map(o=>o.delivered).join(",")}:${r.expiresAt-e.time}`),...t.map(r=>`commission:${r.id}:${r.commission.id}:${r.commission.items.map(o=>o.delivered).join(",")}:${r.commission.expiresAt-e.time}`)].join("|");if(n===this.orderSig)return;this.orderSig=n,this.taskCounts.orders=e.orders.length,this.taskCounts.jobs=t.length,this.renderTaskTitle();const s=t.map(r=>{const o=r.commission,a=o.expiresAt-e.time;return`<div class="ord commission${a<=20?" hurry":""}" data-villager="${r.id}"><span><img class="vface" src="${ol(r.id,"head")}" alt="">${o.items.map(c=>`<i class="${c.delivered>=c.required?"ok":""}">${Rt[c.item]}${c.delivered}/${c.required}</i>`).join(" ")}</span><b>🪙${o.reward}</b><em>⏳${a}s</em></div>`}).join("");if(!e.orders.length){this.orders.innerHTML='<div class="ord none">📜 等客人下訂單…</div>'+s;return}this.orders.innerHTML=e.orders.map((r,o)=>{const a=r.expiresAt-e.time;return`<div class="ord${o===0?" active":""}${a<=20?" hurry":""}"><span>📜 ${r.items.map(c=>`<i class="${c.delivered>=c.required?"ok":""}" title="${ri[c.item]}">${Rt[c.item]}${c.delivered}/${c.required}</i>`).join(" ")}</span><b>🪙${r.reward}</b><em>⏳${a}s</em></div>`}).join("")+s}buildDaily(){const e=se("div","ttl");e.append(se("span","","今日目標"),se("small","","每項 🪙+8")),this.daily.append(e);for(const t of Object.keys(rc)){const[n,s]=rc[t],r=se("div","it");r.dataset.key=t;const o=se("span"),a=se("div","daybar"),c=se("i");a.append(c),r.append(se("b","",n),se("em","",s),o,a),this.daily.append(r),this.dailyRows.push({row:r,text:o,bar:c})}this.streakEl.append(se("b","","🔥"),this.streakText),this.daily.append(this.streakEl)}renderDaily(e){const t=new Set;e.daily.forEach((n,s)=>{const r=this.dailyRows[s];if(!r)return;const o=rc[n.key][1];n.claimed&&t.add(n.key),dt(r.text,n.claimed?"✅":`${Math.min(n.progress,n.target)}/${n.target}`),wo(r.bar,n.claimed?1:Math.min(1,n.progress/n.target)),r.row.classList.contains("done")!==n.claimed&&r.row.classList.toggle("done",n.claimed),n.claimed&&this.dailyPrev&&this.dailyDay===e.day&&!this.dailyPrev.has(n.key)&&(this.toast(`今日目標「${o}」完成 🪙+${n.reward}`),r.row.classList.remove("pop"),r.row.offsetWidth,r.row.classList.add("pop"))}),this.dailyPrev=t,this.dailyDay=e.day,this.taskCounts.daily=t.size,this.renderTaskTitle()}renderStreak(e){e!==this.streakPrev&&(this.streakPrev>=0&&e>=2&&e>this.streakPrev&&this.toast(`🔥 連擊 ×${e}！多拿 🪙${oc(e)}`),this.streakPrev=e,this.streakEl.classList.toggle("hidden",e<1),dt(this.streakText,`×${e}`),this.streakEl.title=`連續準時交訂單 ${e} 張，下一張多拿 🪙${oc(e+1)}`,this.streakEl.dataset.next=`下一單 +${oc(e+1)}`)}showResult(e,t,n){this.resultShown=!0,ct.set(Yo,"shown");const s=this.best;this.best=ny(s,e);const r=!s||e.earned>s.earned;ct.set(Lf,JSON.stringify(this.best));const o=e.stars===3?"🎉 三星農莊！":e.stars===2?"👍 二星！差一點就三星":"🌱 一星，下一局會更好",a=[1,2,3].map(l=>`<span class="${l<=e.stars?"on":""}">★</span>`).join(""),c=this.best;this.modal.innerHTML=`<div class="sheet result"><div class="stars">${a}</div><h2>${o}</h2><p>五天收入 🪙${e.earned}（三星 🪙${gn.earned}、二星 🪙${n1()}）</p><ul><li>每日目標＋連擊獎勵 🪙${t.bonusEarned}</li><li>最長連擊 ×${t.bestStreak}</li><li>賣出 🥖${n.stats.sold} 袋　磨粉 ${n.stats.milled}</li><li>升級 田+${n.upgrades.field}／倉+${n.upgrades.warehouse}／磨+${n.upgrades.mill}</li></ul><p class="best">${r?"🏆 新紀錄！":`🏆 最高紀錄 🪙${c.earned} ${"★".repeat(c.stars)}`}</p>`+(e.stars<3?'<p class="hint">提示：倉庫快滿就多派人磨粉；連續準時交訂單有加成。</p>':"")+'<div class="row"><button class="chip" data-k="go">繼續經營</button><button class="gold" data-k="new">再玩一局</button></div><div class="row"><button class="chip" data-k="endless">🌾 改玩無盡農莊（沒有期限）</button></div></div>',this.modal.classList.remove("hidden"),this.modal.querySelector('[data-k="go"]').onclick=()=>this.modal.classList.add("hidden"),this.modal.querySelector('[data-k="new"]').onclick=()=>this.cb.onRestart("challenge"),this.modal.querySelector('[data-k="endless"]').onclick=()=>this.cb.onRestart("endless")}renderWeather(e,t){const n=Gu[t],s=e.forecast;dt(this.weatherEl,`${n.icon} ${n.name}${s?`　明天 ${Gu[s].icon}`:""}`),this.weatherPrev&&this.weatherPrev!==t&&this.toast(`${n.icon} ${n.tip}`),this.weatherPrev=t}update(e,t="sunny"){var v;this.renderWeather(e,t),this.renderOrders(e);const n=iy(e);this.renderDaily(n),this.renderStreak(n.streak);const s=e.stats.earned,r=gn.earned,o=n.result,a=Vs(e);if(a!==(this.mode==="endless")&&this.setMode(e.mode),a){const m=Yy(e);dt(this.goal,m?`🎯 再賺 🪙${m.earned-s} 開 ${m.ids.map(p=>Za[p]??p).join("")}`:`👥 農友 ${e.workers.length}/${zn(e)}・累計 🪙${s}`),wo(this.goalBar,m?Math.min(1,s/m.earned):e.workers.length/zn(e))}else dt(this.goal,o?`${"★".repeat(o.stars)}${"☆".repeat(3-o.stars)} 五天成績 🪙${o.earned}`:n.resultUnknown?`🎯 舊存檔繼續經營 🪙${s}`:s>=r?`✅ 三星門檻 🪙${s}/${r}`:`🎯 ${gn.days} 天內賺 🪙${s}/${r}`),wo(this.goalBar,Math.min(1,s/r)),this.earnedPrev>=0&&this.earnedPrev<r&&s>=r&&!o&&this.toast("🎉 達到三星門檻！撐到第 5 天結束就是 3 星");this.earnedPrev=s,o&&!this.resultShown&&this.showResult(o,n,e);const c=e.time%Qe.daySeconds+e.remainder;dt(this.day,`第 ${e.day} 天・${Jy[e.phase]}`),wo(this.dayBar,c/Qe.daySeconds),e.coins!==this.lastCoins&&(this.lastCoins>=0&&e.coins>this.lastCoins&&(this.coins.classList.remove("bump"),this.coins.offsetWidth,this.coins.classList.add("bump")),this.lastCoins=e.coins,this.coins.textContent=String(e.coins));const l=En(e),h=$n(e),u=Ct.filter(m=>m==="wheat"||m==="flour"||e.inventory[m]>0).map(m=>`${Rt[m]}${e.inventory[m]}`);dt(this.stock,u.join(" ")),dt(this.house,`🏠 ${h}/${l}`);const d=Tr(e);this.house.classList.contains("full")!==d&&this.house.classList.toggle("full",d),this.renderUnlocks(e),this.names=e.workers.map(m=>m.name),e.workers.forEach((m,p)=>{const y=this.workerCards[p];y&&(dt(this.workerNames[p],m.name),dt(this.workerLabels[p],`${$i[m.job]} ${mn[m.job]}`),y.dataset.job!==m.job&&(y.dataset.job=m.job))}),this.focusFor>=0&&this.renderFocus(e);for(const m of["field","warehouse","mill"]){const p=this.upgradeBtns[m],y=la(e,m),x=Ai(e,m),_=x.reason==="No land"||x.reason==="Max level";dt(p,_?`${tc[m]} 已滿`:`${tc[m]} 🪙${y}`),p.disabled!==!x.ok&&(p.disabled=!x.ok)}this.jobState=e,a&&(this.renderJobs(e),this.renderHousing(e));const f=["field","warehouse","mill"].some(m=>Ai(e,m).ok)||a&&($o(e).ok||Xo(e).ok);this.upBtn.classList.contains("ready")!==f&&this.upBtn.classList.toggle("ready",f),this.renderHint(e);const g=ht(e).jobs;for(const m of this.picker.querySelectorAll("button")){m.classList.toggle("on",this.pickFor>=0&&((v=e.workers[this.pickFor])==null?void 0:v.job)===m.dataset.job);const p=m.dataset.job;p&&m.hidden===g.includes(p)&&(m.hidden=!g.includes(p))}this.cropFor>=0&&this.refreshCropPicker(e),this.renderVillagers(e)}buildVillagerCard(){const e=se("div","sheet");this.vImg.alt="",this.vImg.draggable=!1;const t=se("div","vhead"),n=se("div","info");n.append(this.vName,this.vHearts,this.vLine),t.append(this.vImg,n);const s=se("button","chip","關閉");s.onclick=()=>this.closeVillager();const r=se("div","row");r.append(s),e.append(t,this.vJob,se("div","ttl","🎁 送禮（每天一次）"),this.vGifts,this.vGiftHint,this.vAlbum,r),this.vBox.append(e),this.vBox.addEventListener("pointerdown",o=>{o.target===this.vBox&&this.closeVillager()})}openVillager(e){this.vFor=e,this.vSig="",this.vImg.src=ol(e,"half"),this.vBox.classList.remove("hidden")}get villagerOpen(){return this.vFor}closeVillager(){this.vFor=null,this.vBox.classList.add("hidden")}renderVillagers(e){var s,r,o,a,c,l;const t=this.vPrev,n=new Map;for(const h of e.villagers){const u=al(h.points);n.set(h.id,{appeared:h.appeared,hearts:u,completed:h.completed}),(this.album[h.id]??0)<u&&(this.album[h.id]=u,ct.set(td,JSON.stringify(this.album)));const d=t==null?void 0:t.get(h.id);if(!d)continue;const f=yn[h.id].name;h.appeared&&!d.appeared?(!ct.get(ed)&&((r=(s=this.cb).explain)!=null&&r.call(s,`${f}來村裡了！`,`${f}是${ec[h.id]}。點頭上的粉紅名牌可以聊天、送禮，好感高了會回送東西；名牌有 📜 是在下委託，賣貨的人交齊就有報酬。`,`villager:${h.id}`))?ct.set(ed,"1"):this.toast(`${f}（${ec[h.id]}）來村裡了！點名牌可以聊天、送禮`,4e3),(a=(o=this.cb).onVillagerEvent)==null||a.call(o,"greet")):u>d.hearts?(this.toast(`${f} ${sc(u)}${u===3?"　以後每天早上會送你東西":u===5?"　解鎖專屬故事！":""}`,3500),(l=(c=this.cb).onVillagerEvent)==null||l.call(c,"heart")):h.completed>d.completed&&this.toast(`完成${f}的委託！好感 +4`)}this.vPrev=n,this.vFor&&this.renderVillagerCard(e)}renderVillagerCard(e){const t=e.villagers.find(u=>u.id===this.vFor);if(!t)return this.closeVillager();const n=Math.floor(e.time/Qe.daySeconds)+1,s=t.giftedDay===n,r=Ct.filter(u=>e.inventory[u]>0),o=`${t.points}|${s}|${r.map(u=>`${u}${e.inventory[u]}`).join(",")}|${t.commission?`${t.commission.items[0].delivered}:${t.commission.expiresAt-e.time}`:"-"}|${Math.floor(e.time/8)}`;if(o===this.vSig)return;this.vSig=o;const a=yn[t.id],c=al(t.points);dt(this.vName,`${a.name}　${ec[t.id]}`),dt(this.vHearts,`${sc(c)}　${t.points}/50`);const l=Xy[t.id][c];dt(this.vLine,c>=5?l.join(`
`):`「${l[Math.floor(e.time/8)%l.length]}」`),this.vLine.classList.toggle("story",c>=5);const h=t.commission;dt(this.vJob,t.appeared?h?`📜 委託：${h.items.map(u=>`${Rt[u.item]}${ri[u.item]} ${u.delivered}/${u.required}`).join("、")}　🪙${h.reward}　⏳${h.expiresAt-e.time}s（賣貨的人會送過去）`:"📜 現在沒有委託":"還沒來村裡"),this.vGifts.textContent="";for(const u of r){const d=pf(t.id,u),f=se("button","chip",`${Rt[u]}${e.inventory[u]}${d===3?" ❤️":d===2?" 👍":""}`);f.title=`${ri[u]}（好感 +${d}）`,f.dataset.item=u,f.disabled=s||!t.appeared,f.onclick=()=>{this.cb.onAction({type:"gift",villagerId:t.id,item:u})&&(this.toast(`送給${a.name} ${Rt[u]}${ri[u]}，好感 +${d}${d===3?"　他最喜歡這個！":""}`),this.vSig="")},this.vGifts.append(f)}dt(this.vGiftHint,t.appeared?s?"今天已經送過了，明天再來。":r.length?`❤️ 最愛 ${Rt[a.favorite]}　👍 喜歡 ${a.likes.map(u=>Rt[u]).join("")}`:"倉庫沒有貨可以送。":""),dt(this.vAlbum,`📔 回憶相簿：最高 ${sc(this.album[t.id]??0)}`)}setMode(e){this.mode=e;const t=e==="endless";this.crewEl.classList.toggle("endless",t),this.root.classList.toggle("endless",t);for(const n of this.houseRows)n.hidden=!t;t||(this.rosterPop.classList.add("hidden"),this.closeHousing())}renderUnlocks(e){var r,o,a,c;if(Vs(e))return this.renderEndlessUnlocks(e);if(e.day<=this.unlockSeen)return;this.unlockSeen=e.day,ct.set(Ko,String(e.day));const t=ht(e).newToday;if(!t.length)return;const n=t.map(l=>Za[l]??l).join("、"),s=Qu[t[0]];(!s||!((o=(r=this.cb).explain)!=null&&o.call(r,`第 ${e.day} 天解鎖：${n}`,s[0],s[1])))&&this.toast(`第 ${e.day} 天解鎖：${n}！${Ou[t[0]]??""}`,5e3),(c=(a=this.cb).onUnlock)==null||c.call(a,t)}renderEndlessUnlocks(e){var l,h,u,d;const t=Ky(e);if(!this.unlockSeenEndless){try{this.unlockSeenEndless=JSON.parse(ct.get(Jo)??"[]")}catch{this.unlockSeenEndless=[]}Array.isArray(this.unlockSeenEndless)||(this.unlockSeenEndless=[])}const n=this.unlockSeenEndless,s=t.filter(f=>!n.includes(f));if(!s.length)return;this.unlockSeenEndless=t,ct.set(Jo,JSON.stringify(t));const r=s.map(f=>Za[f]??f).join("、"),o=Qu[s[0]],a=o==null?void 0:o[0].replace("點工人卡，派一個人去","按下方工作列的 ＋，派一個人去"),c=`累計賺到 🪙${e.stats.earned}，解鎖：${r}`;(!o||!a||!((h=(l=this.cb).explain)!=null&&h.call(l,c,a,o[1])))&&this.toast(`解鎖：${r}！${Ou[s[0]]??""}`,5e3),(d=(u=this.cb).onUnlock)==null||d.call(u,s)}buildCropPicker(){this.cropBox.append(this.cropTitle);for(const e of Mf){const t=se("button","chip");t.dataset.crop=e,t.onclick=()=>this.pickCrop(e),this.cropBtns.set(e,t),this.cropBox.append(t)}document.addEventListener("pointerdown",e=>{var t,n;this.cropFor>=0&&!this.cropBox.contains(e.target)&&!((n=(t=e.target).closest)!=null&&n.call(t,".tag.field"))&&this.closeCropPicker()},{capture:!0})}openCropPicker(e,t,n,s){this.cropFor=e,this.cropBox.classList.remove("hidden"),this.refreshCropPicker(s);const r=this.cropBox.offsetWidth,o=this.cropBox.offsetHeight;this.cropBox.style.left=`${Math.max(8,Math.min(window.innerWidth-r-8,t-r/2))}px`,this.cropBox.style.top=`${Math.max(8,Math.min(window.innerHeight-o-8,n-o-10))}px`}get cropPickerFor(){return this.cropFor}refreshCropPicker(e){const t=e.fields[this.cropFor];if(!t)return this.closeCropPicker();const n=t.planted||t.harvested>0;dt(this.cropTitle,n?"下一輪種什麼？":"種什麼？");const s=ht(e).crops;for(const[r,o]of this.cropBtns)dt(o,`${Rt[r]} ${ri[r]} ${Gt[r].seconds}秒×${Gt[r].yield}`),o.hidden===s.includes(r)&&(o.hidden=!s.includes(r)),o.classList.toggle("on",n&&t.nextCrop===r)}pickCrop(e){const t=this.cropFor;this.closeCropPicker(),t>=0&&this.cb.onCrop(t,e)}closeCropPicker(){this.cropFor=-1,this.cropBox.classList.add("hidden")}get element(){return this.root}}const Ar=[{id:"welcome",title:"把收成變成收入",body:`你的目標：${gn.days} 天內累積賺到 ${gn.earned} 金幣。種田 → 搬進倉庫 → 磨粉 → 賣出，四位工人會分工。花錢升級不會扣掉累積收入。`,target:"farm",interactive:!1},{id:"fields",title:"先看麥田",body:"三塊田的小麥正在長。種田工人會收成補種，搬運工人把收成送進倉庫。之後有空田時，點田上名牌就能自己選作物。",target:"fields",interactive:!1},{id:"workers",title:"你負責安排工作",body:"四位工人已分好工：種田、搬運、磨粉、賣貨。先別動，看看生產線怎麼跑。哪一環卡住，再點下方工人卡換工作。",target:"workers",interactive:!1},{id:"mill",title:"看第一袋麵粉完成",body:"倉庫的小麥會送進磨坊，2 份小麥磨成 1 袋麵粉。讓時間繼續，等工人完成一袋；沒有動靜時，檢查搬運和磨粉是否有人。",target:"mill",interactive:!0},{id:"sell",title:"把麵粉賣出去",body:"賣貨工人會自動把貨送到商店，交訂單或直接出售，不用自己點。等一筆貨款入帳；倉庫滿時，先確保有人賣貨。",target:"shop",interactive:!0},{id:"upgrade",title:"用收入改善農莊",body:"點升級選單：倉庫常滿就擴建倉庫，磨粉太慢就升級磨坊。選一項買得起的升級；錢不夠先繼續賣貨，也可以略過導覽。",target:"upgrades",interactive:!0},{id:"done",title:"開始經營你的小農莊",body:"留意哪個環節停住，再調整工人或升級。先維持種田、搬運、磨粉、賣貨，之後每天會開放新作物和工坊。",target:"farm",interactive:!1}],Xl=i=>({milled:i.stats.milled,sold:i.stats.sold,earned:i.stats.earned,upgrades:i.upgrades.field+i.upgrades.warehouse+i.upgrades.mill});function r1(i){return{index:0,completed:!1,baseline:Xl(i)}}function cl(i){return Ar[i.index]??Ar[0]}function Uf(i,e){if(i.completed)return!1;switch(cl(i).id){case"mill":return e.stats.milled>i.baseline.milled;case"sell":return e.stats.sold>i.baseline.sold&&e.stats.earned>i.baseline.earned;case"upgrade":return Xl(e).upgrades>i.baseline.upgrades;default:return!0}}function o1(i,e){return Uf(i,e)?i.index===Ar.length-1?Nf(i):{index:i.index+1,completed:!1,baseline:Xl(e)}:i}function Nf(i){return{...i,completed:!0,baseline:{...i.baseline}}}const Ff="farmproto.tour.v1",a1=[["🌾","種田"],["🧺","搬進倉庫"],["⚙️","磨成麵粉"],["🪙","賣掉賺錢"]],ll={mill:"⏳ 等第一袋麵粉磨好…（遊戲 2× 快轉中）",sell:"⏳ 等第一筆貨款入帳…",upgrade:"👉 點右下角 🔨升級，買一項升級"};function c1(i){const e=["warehouse","mill","field"].filter(n=>Ai(i,n).reason!=="No land"&&Ai(i,n).reason!=="Max level");if(e.some(n=>Ai(i,n).ok))return ll.upgrade;const t=Math.min(...e.map(n=>la(i,n)))-i.coins;return t>0?`💰 還差 🪙${t}：遊戲照跑，賣貨工人賣了貨就夠（也可以跳過導覽）`:ll.upgrade}const Ht=(i,e="",t="")=>{const n=document.createElement(i);return e&&(n.className=e),t&&(n.textContent=t),n};class l1{constructor(e,t){F(this,"el",Ht("div","coach hidden"));F(this,"ring",Ht("div","coach-ring"));F(this,"bubble",Ht("div","coach-bubble"));F(this,"face",Ht("img","coach-face"));F(this,"title",Ht("b"));F(this,"body",Ht("p"));F(this,"flow",Ht("div","coach-flow"));F(this,"status",Ht("div","coach-status"));F(this,"dots",Ht("div","coach-dots"));F(this,"skipBtn",Ht("button","chip","跳過導覽"));F(this,"nextBtn",Ht("button","gold","下一步"));F(this,"tour",null);F(this,"queue",[]);F(this,"saying",null);F(this,"resumeSpeed",1);F(this,"shownIndex",-1);F(this,"ringKey","");F(this,"bubbleKey","");F(this,"bubbleH",230);this.host=e,this.face.src=t,this.face.alt="",this.face.draggable=!1;for(const[o,a]of a1){const c=Ht("span","step");c.append(Ht("i","",o),Ht("small","",a)),this.flow.append(c)}const n=Ht("div","coach-head"),s=Ht("div","coach-text");s.append(this.title,this.body),n.append(this.face,s);const r=Ht("div","coach-row");r.append(this.dots,this.skipBtn,this.nextBtn),this.bubble.append(n,this.flow,this.status,r),this.el.append(this.ring,this.bubble),this.nextBtn.onclick=()=>this.next(),this.skipBtn.onclick=()=>this.finish(!0)}get active(){return!!this.tour||!!this.saying}get stepId(){return this.tour?cl(this.tour).id:null}start(){this.saying=null,this.tour||(this.resumeSpeed=Math.max(1,this.host.speed())),this.tour=r1(this.host.state()),this.shownIndex=-1,this.el.classList.remove("hidden")}say(e,t,n=null){this.queue.push({title:e,body:t,target:n}),this.active||this.nextSay()}nextSay(){const e=this.queue.shift();e&&(this.saying||(this.resumeSpeed=Math.max(1,this.host.speed())),this.saying=e,this.shownIndex=-1,this.el.classList.remove("hidden"))}next(){if(this.saying)return this.saying=null,this.queue.length?this.nextSay():this.close();if(!this.tour)return;const e=this.tour;this.tour=o1(this.tour,this.host.state()),this.tour.completed?this.finish(!1):this.tour===e&&this.nextBtn.classList.add("nudge")}finish(e){if(this.tour&&(this.tour=Nf(this.tour)),this.tour=null,this.host.onDone(e),this.queue.length)return this.nextSay();this.close()}close(){this.el.classList.add("hidden"),this.ringKey=this.bubbleKey="",this.host.setSpeed(this.resumeSpeed)}update(){if(!this.tour&&!this.saying)return;const e=this.host.state();let t,n=!1,s=!0;if(this.saying)t=this.saying.target,this.shownIndex!==0&&(this.shownIndex=0,this.show(this.saying.title,this.saying.body,!1),this.host.setSpeed(0),this.dots.textContent="",this.skipBtn.hidden=!0),this.nextBtn.textContent="知道了";else{const r=cl(this.tour);t=r.target==="farm"?null:r.target,n=r.interactive,s=Uf(this.tour,e),this.shownIndex!==this.tour.index&&(this.shownIndex=this.tour.index,this.show(r.title,r.body,r.id==="welcome"),this.host.setSpeed(n?2:0),this.dots.textContent=`${this.tour.index+1}/${Ar.length}`,this.skipBtn.hidden=!1,this.nextBtn.classList.remove("nudge"));const o=this.tour.index===Ar.length-1,a=s?n?"做到了！下一步":o?"開始經營":"下一步":"還沒完成";this.nextBtn.textContent!==a&&(this.nextBtn.textContent=a),this.nextBtn.disabled===s&&(this.nextBtn.disabled=!s);const c=n?s?"✅ 完成了！":r.id==="upgrade"?c1(e):ll[r.id]??"":"";this.status.textContent!==c&&(this.status.textContent=c),this.status.classList.toggle("done",n&&s)}this.el.classList.toggle("dim",!n),this.place(t?this.host.locate(t):null)}show(e,t,n){this.title.textContent=e,this.body.textContent=t,this.flow.hidden=!n,this.status.textContent="",this.status.classList.remove("done"),this.bubble.classList.remove("pop"),this.bubbleH=this.bubble.offsetHeight||this.bubbleH,this.bubble.classList.add("pop")}place(e){const t=window.innerHeight,n=8;let s="none";if(e){const c=Math.round(e.l-n),l=Math.round(e.t-n),h=Math.round(e.r-e.l+n*2),u=Math.round(e.b-e.t+n*2);if(s=`${c},${l},${h},${u},${e.round?1:0}`,s!==this.ringKey){const d=this.ring.style;d.transform=`translate(${c}px, ${l}px)`,d.width=`${h}px`,d.height=`${u}px`,d.borderRadius=e.round?"50%":"16px"}}s!==this.ringKey&&(this.ring.classList.toggle("none",!e),this.el.classList.toggle("nospot",!e),this.ringKey=s);const r=this.host.bottomReserve(),o=this.bubbleH;let a="center";if(e&&(e.b+n+10<=t-r-o?a=`above:${Math.round(r)}`:e.t-n-12-o>=8?a=`above:${Math.round(t-e.t+n+12)}`:a=`below:${Math.round(Math.min(t-o-8,e.b+n+12))}`),a!==this.bubbleKey){this.bubbleKey=a;const c=this.bubble.style,[l,h]=a.split(":");c.top=l==="below"?`${h}px`:l==="center"?"50%":"",c.bottom=l==="above"?`${h}px`:"",this.bubble.classList.toggle("center",l==="center")}}}const h1={field:"🌾 田",orchard:"🍎 蘋果樹",warehouse:"🏠 倉庫",mill:"⚙️ 磨坊",shop:"🪙 商店",bakery:"🍞 麵包坊",preservery:"🍯 果醬坊"},u1=["bake","preserve"],Vt=(i,e="",t="")=>{const n=document.createElement(i);return e&&(n.className=e),t&&(n.textContent=t),n},rr=i=>i.map(e=>`${Rt[e.item]}${e.amount}`).join(" ");function d1(i,e,t){const n=mn[e.job];switch(e.waiting){case null:return{text:`✅ ${t.site==="warehouse"?"搬運中":`${n}中`}`,warn:!1};case"Locked":{const s=t.site==="orchard"?"orchard":t.site==="bakery"?"bakery":"preservery";return{text:`🔒 還沒開放（${$l(i,s)}）`,warn:!1}}case"No worker":return{text:`⚠️ 沒人${n}：按「＋ 派人」`,warn:!0};case"Warehouse full":return{text:"⚠️ 倉庫滿了：派人賣貨、磨粉，或升級倉庫",warn:!0};case"Awaiting haul":return{text:"收好了，等搬運的人來搬",warn:!1};case"Awaiting harvest":return{text:"熟了，種田的人馬上來收",warn:!1};case"Ready to plant":return{text:t.site==="orchard"?"還沒種：按下面「🌱 種蘋果樹」":"空田：種田的人會自動種下",warn:!1};case"Growing":return{text:`🌱 長大中 ${Math.round(e.progress01*100)}%`,warn:!1};case"Missing ingredients":switch(t.site){case"mill":return{text:`等小麥：倉庫要有 ${Qe.wheatPerFlour} 束才能磨`,warn:!1};case"shop":return{text:"沒貨可賣：要先磨粉或收成",warn:!1};case"warehouse":return{text:"田邊沒有要搬的貨",warn:!1};case"bakery":return{text:`等麵粉：倉庫要有 ${hn.bakery.amount} 袋`,warn:!1};case"preservery":return{text:`等蘋果：倉庫要有 ${hn.preservery.amount} 顆`,warn:!1};default:return{text:"缺材料",warn:!1}}default:return{text:"",warn:!1}}}class f1{constructor(e){F(this,"el",Vt("div","sitecard hidden"));F(this,"cur",null);F(this,"sig","");this.host=e,this.el.addEventListener("pointerdown",t=>t.stopPropagation())}get target(){return this.cur}open(e,t){var n;this.cur=e,this.sig="",this.el.classList.remove("hidden"),(n=this.el.parentElement)==null||n.classList.add("site-open"),this.update(t)}close(){var e;this.cur&&(this.cur=null,this.el.classList.add("hidden"),(e=this.el.parentElement)==null||e.classList.remove("site-open"),this.host.onClose())}update(e){const t=this.cur;if(!t)return;const n=Vi(e,t.site,t.fieldId);if(!n){this.close();return}const s=t.fieldId!==void 0?e.fields[t.fieldId]:void 0,r=t.site==="orchard"?e.trees[0]:void 0,o=JSON.stringify([n,s==null?void 0:s.crop,s==null?void 0:s.nextCrop,s==null?void 0:s.planted,r==null?void 0:r.planted,e.workers.map(a=>a.job+a.name),ht(e).crops.length,ht(e).jobs.length]);o!==this.sig&&(this.sig=o,this.render(e,t,n))}render(e,t,n){var v;const s=this.el;s.replaceChildren();const r=Vt("div","shead"),o=t.site==="field"&&t.fieldId!==void 0?`🌾 第 ${t.fieldId+1} 塊田`:h1[t.site],a=Vt("button","x","✕");a.title="關閉",a.onclick=()=>this.close(),r.append(Vt("b","",o),a),s.append(r);const c=d1(e,n,t),l=Vt("div",`why${c.warn?" warn":""}`,c.text);if(s.append(l),n.waiting===null||n.waiting==="Growing"){const m=Vt("div","pbar");m.style.setProperty("--p",String(n.progress01)),s.append(m)}const h=[];if(n.groundStock.length&&h.push(`${t.site==="warehouse"?"田邊待搬":"地上待搬"} ${rr(n.groundStock)}`),n.inTransit.length&&h.push(`路上 ${rr(n.inTransit)}`),t.site==="warehouse")n.outputs.length&&h.push(`倉庫裡 ${rr(n.outputs.filter(m=>m.amount>0))||"空的"}`);else if(n.inputs.length||n.outputs.length){const m=n.inputs.filter(y=>y.amount>0),p=t.site==="mill"?`${Qe.wheatPerFlour}${Rt.wheat}→1${Rt.flour}`:t.site==="bakery"||t.site==="preservery"?`${hn[t.site].amount}${Rt[hn[t.site].input]}→1${Rt[hn[t.site].output]}`:"";h.push(`倉庫原料 ${rr(m)||"沒有"}${n.outputs.length?`　成品 ${rr(n.outputs)}`:""}${p?`　（${p}）`:""}`)}for(const m of h)s.append(Vt("div","flow",m));const u=Vt("div","who"),d=n.workerIds;u.append(Vt("span","lbl",`${$i[n.job]} ${mn[n.job]} ${d.length} 人${n.job==="farm"?"（田和果樹共用）":""}`));for(const m of d){const p=e.workers.findIndex(x=>x.id===m),y=Vt("button","chip name",((v=e.workers[p])==null?void 0:v.name)??"");y.onclick=()=>{this.host.follow(p)},u.append(y)}s.append(u);const f=Vt("div","row");if(ht(e).jobs.includes(n.job)&&n.waiting!=="Locked"){const m=Vt("button","chip minus","− 少一人");m.disabled=!d.length,m.onclick=()=>this.minus(this.host.state(),n.job);const p=Vt("button","gold plus","＋ 派人");p.disabled=u1.includes(n.job)&&d.length>=1,p.disabled&&(p.title="這裡一次只能一個人"),p.onclick=()=>this.plus(this.host.state(),n.job),f.append(m,p)}if(t.site==="field"&&t.fieldId!==void 0){const m=e.fields[t.fieldId],p=ht(e).crops,y=!m.planted&&!m.harvested,x=Vt("div","row crops");x.append(Vt("span","lbl",y?"種：":"下一輪："));for(const _ of Mf){if(!p.includes(_))continue;const I=Vt("button",`chip crop${!y&&m.nextCrop===_?" on":""}`,`${Rt[_]} ${ri[_]}`);I.title=`${Gt[_].seconds} 秒長大、收 ${Gt[_].yield} 個`,I.onclick=()=>{(y?this.host.act({type:"plant",fieldId:m.id,crop:_}):this.host.act({type:"setNextCrop",fieldId:m.id,crop:_}))&&!y&&this.host.toast(`這塊田收成後改種${Rt[_]}`)},x.append(I)}(p.length>1||y)&&s.append(x)}if(t.site==="orchard"&&ht(e).orchard&&e.trees[0]&&!e.trees[0].planted){const m=Vt("button","gold","🌱 種蘋果樹");m.onclick=()=>this.host.act({type:"plantTree",treeId:0}),f.append(m)}f.childElementCount&&s.append(f)}plus(e,t){const n=r=>Object.values(e.processors).some(o=>{var a;return((a=o.batch)==null?void 0:a.workerId)===r});let s=e.workers.find(r=>r.job==="idle");if(!s){const r=l=>e.workers.filter(h=>h.job===l).length;if(s=e.workers.filter(l=>l.job!==t&&!n(l.id)).sort((l,h)=>r(h.job)-r(l.job)||+!!l.cargo-+!!h.cargo||h.id-l.id)[0],!s){this.host.toast("沒有人可以調過來",!0);return}const a=s.job,c=r(a)-1;this.host.act({type:"assign",workerId:s.id,job:t})&&this.host.toast(`${s.name} 從${mn[a]}改去${mn[t]}${c?"":`（${mn[a]}現在沒人了）`}`,!c);return}this.host.act({type:"assign",workerId:s.id,job:t})&&this.host.toast(`${s.name} 去${mn[t]}了`)}minus(e,t){const n=o=>Object.values(e.processors).some(a=>{var c;return((c=a.batch)==null?void 0:c.workerId)===o}),s=e.workers.filter(o=>o.job===t),r=[...s].reverse().find(o=>!o.cargo&&!n(o.id))??s[s.length-1];r&&this.host.act({type:"assign",workerId:r.id,job:"idle"})&&this.host.toast(`${r.name} 先休息（可以派去別的地方）`)}}const p1=.6,nd=[{item:"flour",site:"mill"},{item:"bread",site:"bakery"},{item:"jam",site:"preservery"}];class m1{constructor(e,t){F(this,"el",document.createElement("div"));F(this,"prev",null);F(this,"pending",new Map);F(this,"clock",0);F(this,"count",0);this.layout=e,this.project=t,this.el.className="floaters"}reset(){this.prev=null,this.pending.clear()}update(e,t){const n={earned:e.stats.earned,made:nd.map(r=>e.produced[r.item]),fields:e.fields.map(r=>r.harvested),trees:e.trees.map(r=>r.harvested)},s=this.prev;if(s){const r=this.layout.buildings;n.earned>s.earned&&this.add("shop",o=>`+🪙${o}`,n.earned-s.earned,r.shop.pos[0],6,r.shop.pos[1],!0),nd.forEach((o,a)=>{const c=n.made[a]-s.made[a];c>0&&this.add(o.site,l=>`${Rt[o.item]}+${l}`,c,r[o.site].pos[0],o.site==="mill"?6:4.5,r[o.site].pos[1],!1)}),e.fields.forEach((o,a)=>{const c=n.fields[a]-(s.fields[a]??0),l=this.layout.fieldSlots[a];c>0&&l&&this.add(`field${a}`,h=>`${Rt[o.crop]}+${h}`,c,l[0],1.5,l[1],!1)}),e.trees.forEach((o,a)=>{const c=n.trees[a]-(s.trees[a]??0),l=this.layout.orchardSlots[a];c>0&&l&&this.add(`tree${a}`,h=>`🍎+${h}`,c,l[0],3,l[1],!1)})}this.prev=n,this.clock+=t,this.clock>=p1&&(this.clock=0,this.flush())}add(e,t,n,s,r,o,a){const c=this.pending.get(e);c?c.n+=n:this.pending.set(e,{text:t,n,x:s,y:r,z:o,gold:a})}flush(){for(const e of this.pending.values()){const t=this.project(e.x,e.y,e.z);if(!t||t.x<0||t.y<0||t.x>innerWidth||t.y>innerHeight)continue;const n=document.createElement("div");n.className=`floater${e.gold?" gold":""}`,n.textContent=e.text(e.n),n.style.left=`${t.x.toFixed(0)}px`,n.style.top=`${t.y.toFixed(0)}px`,n.addEventListener("animationend",()=>n.remove()),this.el.append(n),this.count++}this.pending.clear()}}const g1={farm:["🌾","農田"],store:["🏠","倉庫"],craft:["⚙️","加工"],market:["🪙","市場"],overview:["🗺️","全景"]},v1=["farm","store","craft","market"];function _1(i){switch(i){case"field":case"orchard":return"farm";case"warehouse":return"store";case"shop":return"market";default:return"craft"}}const yo=i=>i.reduce((e,t)=>e+t.amount,0);function x1(i,e){if(e==="overview")return{text:"看全部",warn:!1};if(e==="farm"){const s=Vi(i,"field"),r=ht(i).orchard?Vi(i,"orchard"):null,o=yo(s.groundStock)+(r?yo(r.groundStock):0);return s.waiting==="No worker"?{text:"沒人種",warn:!0}:o?{text:`待搬 ${o}`,warn:!1}:s.waiting==="Awaiting harvest"?{text:"可收成",warn:!1}:s.waiting==="Ready to plant"?{text:"待種",warn:!1}:{text:`長大 ${Math.round(s.progress01*100)}%`,warn:!1}}if(e==="store"){const s=Vi(i,"warehouse"),r=yo(s.groundStock),o=$n(i),a=En(i);return s.waiting==="Warehouse full"?{text:`滿 ${o}/${a}`,warn:!0}:s.waiting==="No worker"&&r?{text:`沒人搬 ${r}`,warn:!0}:r?{text:`待搬 ${r}`,warn:!1}:{text:`${o}/${a}`,warn:!1}}if(e==="market"){const s=Vi(i,"shop"),r=yo(s.inputs);return s.waiting==="No worker"?r?{text:`沒人賣 ${r}`,warn:!0}:{text:"沒人賣",warn:!1}:s.waiting==="Missing ingredients"?{text:"沒貨",warn:!1}:{text:`可賣 ${r}`,warn:!1}}const t=Vi(i,"mill");return t.waiting==="No worker"?{text:"沒人磨",warn:i.inventory.wheat>0}:["bakery","preservery"].filter(s=>ht(i)[s]).map(s=>Vi(i,s)).some(s=>s.waiting==="Warehouse full")?{text:"倉庫滿",warn:!0}:t.waiting==="Missing ingredients"?{text:"缺 🌾",warn:!1}:{text:`磨粉 ${Math.round(t.progress01*100)}%`,warn:!1}}const id={portrait:.135,landscape:.135},w1=.24,Mo={landscape:{w:48,x:-1,z:-1.5},portrait:{w:46,x:2.5,z:-1.5}},y1=10,M1=4.5,b1=5,yi=(i,e="",t="")=>{const n=document.createElement(i);return e&&(n.className=e),t&&(n.textContent=t),n};class S1{constructor(e){F(this,"el",yi("div","zonebar"));F(this,"subRow",yi("div","zonesubs"));F(this,"row",yi("div","zones"));F(this,"btns",new Map);F(this,"subs");F(this,"modeNow","farm");F(this,"subNow");F(this,"cardFocus",null);F(this,"zoneD",20);F(this,"overviewD",60);F(this,"portrait",!1);F(this,"sig","");F(this,"statusClock",0);F(this,"lastGoal",null);this.host=e;const t=e.layout,n=t.buildings,s=l=>({x:(n[l].pos[0]+n[l].door[0])/2,z:(n[l].pos[1]+n[l].door[1])/2}),r=(l,h)=>()=>({...s(l),jobs:h}),o=l=>{const h=t.fieldSlots.slice(0,Math.max(1,l.fields.length));return{x:h.reduce((u,d)=>u+d[0],0)/h.length,z:h.reduce((u,d)=>u+d[1],0)/h.length,jobs:["farm"],reach:16}},a={x:t.orchardSlots[0][0],z:(t.orchardSlots[0][1]+t.spots.orchard[1])/2,jobs:[],y:2.5},c=()=>!0;this.subs={farm:[{id:"field",label:"🌾 田",show:c,focus:o},{id:"orchard",label:"🍎 果樹",show:l=>ht(l).orchard,focus:()=>a}],store:[{id:"warehouse",label:"🏠 倉庫",show:c,focus:()=>({...s("warehouse"),jobs:["haul"],reach:12})},{id:"farmhouse",label:"🏡 宿舍",show:Vs,focus:r("farmhouse",[])}],craft:[{id:"mill",label:"⚙️ 磨坊",show:c,focus:r("mill",["mill"])},{id:"bakery",label:"🍞 麵包坊",show:l=>ht(l).bakery,focus:r("bakery",["bake"])},{id:"preservery",label:"🍯 果醬坊",show:l=>ht(l).preservery,focus:r("preservery",["preserve"])}],market:[{id:"shop",label:"🪙 商店",show:c,focus:r("shop",["sell"])}]},this.subNow={farm:"field",store:"warehouse",craft:"mill",market:"shop"};for(const l of[...v1,"overview"]){const[h,u]=g1[l],d=yi("button",`zone${l==="overview"?" ov":""}`);d.dataset.zone=l;const f=yi("small");d.append(yi("i","",h),yi("b","",u),f),d.onclick=()=>this.select(l),this.btns.set(l,{b:d,small:f}),this.row.append(d)}this.el.append(this.subRow,this.row),this.el.addEventListener("pointerdown",l=>l.stopPropagation())}get mode(){return this.modeNow}get sub(){return this.modeNow==="overview"?"":this.subNow[this.modeNow]}get distances(){return{zone:this.zoneD,overview:this.overviewD}}select(e){e!==this.modeNow&&this.host.closeCard(),this.modeNow=e,this.cardFocus=null,this.host.stage.goHome(),this.sig="",this.refresh(this.host.state())}selectSub(e,t){this.host.closeCard(),this.subNow[e]=t,this.select(e),t==="farmhouse"&&this.host.openHousing()}openCard(e,t,n){const s=e.site==="field"||e.site==="orchard"?"farm":e.site==="warehouse"?"haul":e.site==="mill"?"mill":e.site==="shop"?"sell":e.site==="bakery"?"bake":"preserve";if(this.modeNow!=="overview"){const r=_1(e.site);this.modeNow=r;const o=e.site==="field"?"field":e.site;this.subs[r].some(a=>a.id===o)&&(this.subNow[r]=o),this.sig=""}this.cardFocus={x:t,z:n,jobs:[s]},this.host.stage.goHome()}closeCard(){this.modeNow==="overview"&&(this.cardFocus=null,this.host.stage.goHome())}resize(){this.portrait=window.innerWidth<window.innerHeight;const e=this.host.stage;this.zoneD=e.distanceForHeight(this.host.personHeight,this.portrait?id.portrait:id.landscape),this.overviewD=e.distanceForWidth(this.portrait?Mo.portrait.w:Mo.landscape.w),e.followDist=e.distanceForHeight(this.host.personHeight,w1),e.goHome()}update(e,t,n=!1){const s=this.goal(e);this.host.stage.setHome(s.x,s.z,s.d,n,s.y),this.statusClock-=t,this.statusClock<=0&&(this.statusClock=.3,this.refresh(e))}goal(e){if(this.modeNow==="overview"){const c=this.portrait?Mo.portrait:Mo.landscape;return this.cardFocus?{x:this.cardFocus.x,z:this.cardFocus.z,d:Math.min(this.overviewD,this.zoneD*2.2)}:{x:c.x,z:c.z,d:this.overviewD}}const t=this.cardFocus??this.focusOf(e,this.modeNow),n=t.reach??y1,s=t.reach??M1,r=[];e.workers.forEach((c,l)=>{if(!t.jobs.includes(c.job))return;const h=this.host.workerPos(l);h&&Math.hypot(h.x-t.x,h.z-t.z)<=n&&r.push({x:h.x,z:h.z})});let o=t.x,a=t.z;if(r.length){let c=r.reduce((g,v)=>g+v.x,0)/r.length,l=r.reduce((g,v)=>g+v.z,0)/r.length;if(r.some(g=>Math.hypot(g.x-c,g.z-l)>b1)){const g=this.lastGoal??{x:t.x,z:t.z},v=r.reduce((m,p)=>Math.hypot(p.x-g.x,p.z-g.z)<Math.hypot(m.x-g.x,m.z-g.z)?p:m);c=v.x,l=v.z}const h=t.reach?.9:.6;let u=(c-t.x)*h,d=(l-t.z)*h;const f=Math.hypot(u,d);f>s&&(u*=s/f,d*=s/f),o+=u,a+=d}return this.lastGoal={x:o,z:a},{x:o,z:a,d:this.zoneD,y:t.y}}focusOf(e,t){const n=this.subs[t].filter(s=>s.show(e));return(n.find(s=>s.id===this.subNow[t])??n[0]).focus(e)}refresh(e){for(const[r,{b:o,small:a}]of this.btns){const c=x1(e,r);a.textContent!==c.text&&(a.textContent=c.text),o.classList.toggle("warn",c.warn&&r!==this.modeNow),o.classList.toggle("on",r===this.modeNow)}const t=this.modeNow,n=t==="overview"?[]:this.subs[t].filter(r=>r.show(e)),s=`${t}|${this.sub}|${n.map(r=>r.id).join(",")}`;if(s!==this.sig){if(this.sig=s,this.subRow.replaceChildren(),n.length>1&&t!=="overview")for(const r of n){const o=yi("button",`chip zsub${r.id===this.subNow[t]?" on":""}`,r.label);o.dataset.sub=r.id,o.onclick=()=>this.selectSub(t,r.id),this.subRow.append(o)}this.subRow.hidden=!this.subRow.childElementCount}}}const sd=["harvest","mill","sack","rooster","hammer"],rd=["amb-day","amb-evening","amb-rain","bgm-day","bgm-evening"],E1={harvest:.35,mill:.5,sack:.3,coin:.12,click:.05,plant:.15,hammer:.4,rooster:20,oven:.5,jar:.5,pick:.4},T1={harvest:.55,mill:.4,sack:.5,rooster:.32,hammer:.6},Ss={music:.42,amb:.5,sfx:.9};class A1{constructor(e,t,n="./"){F(this,"ctx",null);F(this,"master");F(this,"musicBus");F(this,"ambBus");F(this,"sfxBus");F(this,"verb");F(this,"buffers",new Map);F(this,"loops",new Map);F(this,"last",new Map);F(this,"scene",{evening:!1,rain:!1,paused:!1});F(this,"played",{});F(this,"loaded",0);this.musicOn=e,this.sfxOn=t,this.base=n;const s=()=>this.unlock();window.addEventListener("pointerdown",s,{capture:!0}),window.addEventListener("keydown",s,{capture:!0}),document.addEventListener("visibilitychange",()=>{this.ctx&&(document.hidden?this.ctx.suspend():this.ctx.resume())})}get music(){return this.musicOn}get sfx(){return this.sfxOn}get running(){var e;return((e=this.ctx)==null?void 0:e.state)==="running"}unlock(){if(this.ctx){this.ctx.state==="suspended"&&!document.hidden&&this.ctx.resume();return}const e=window.AudioContext??window.webkitAudioContext;if(!e)return;const t=new e;this.ctx=t,this.master=t.createGain(),this.master.connect(t.destination),this.musicBus=this.bus(this.musicOn?Ss.music:0),this.ambBus=this.bus(this.sfxOn?Ss.amb:0),this.sfxBus=this.bus(this.sfxOn?Ss.sfx:0);const n=t.createConvolver();n.buffer=this.impulse(1.4),this.verb=t.createGain(),this.verb.gain.value=.22,this.verb.connect(n).connect(this.sfxBus),this.loadAll()}setMusic(e){this.musicOn=e,this.ctx&&this.fade(this.musicBus.gain,e?Ss.music:0,.3)}setSfx(e){this.sfxOn=e,this.ctx&&(this.fade(this.ambBus.gain,e?Ss.amb:0,.3),this.fade(this.sfxBus.gain,e?Ss.sfx:0,.1))}setScene(e){const t=this.scene;t.evening===e.evening&&t.rain===e.rain&&t.paused===e.paused||(this.scene={...e},this.mix(4))}play(e,t={}){const n=this.ctx;if(!n||n.state!=="running"||!this.sfxOn)return;const s=n.currentTime,r=E1[e]??0;if(!(s-(this.last.get(e)??-1e9)<r)){if(this.last.set(e,s),sd.includes(e)){const o=this.buffers.get(e);if(!o)return;const a=n.createBufferSource();a.buffer=o,a.playbackRate.value=(t.pitch??1)*(.94+Math.random()*.12);const c=n.createGain();c.gain.value=T1[e]*(t.gain??1)*(.85+Math.random()*.15),a.connect(c).connect(this.sfxBus),a.start(s)}else this.synth(e,s,t);this.played[e]=(this.played[e]??0)+1}}bus(e){const t=this.ctx.createGain();return t.gain.value=e,t.connect(this.master),t}fade(e,t,n){const s=this.ctx.currentTime;e.cancelScheduledValues(s),e.setValueAtTime(e.value,s),e.setTargetAtTime(t,s,n/3)}async loadAll(){for(const e of[...sd,...rd])try{const t=await fetch(`${this.base}audio/${e}.mp3`);if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await this.ctx.decodeAudioData(await t.arrayBuffer());this.buffers.set(e,n),this.loaded++,rd.includes(e)&&this.startLoop(e,n)}catch(t){console.warn(`音檔 ${e} 載入失敗，略過`,t)}}startLoop(e,t){const n=this.ctx,s=n.createBufferSource();s.buffer=t,s.loop=!0;const r=t.getChannelData(0);let o=0,a=r.length-1;for(;o<8192&&Math.abs(r[o])<1e-4;)o++;for(;a>r.length-8192&&Math.abs(r[a])<1e-4;)a--;s.loopStart=o/t.sampleRate,s.loopEnd=(a+1)/t.sampleRate;const c=n.createGain();c.gain.value=0,s.connect(c).connect(e.startsWith("bgm")?this.musicBus:this.ambBus),s.start(),this.loops.set(e,{src:s,gain:c}),this.mix(e.startsWith("bgm")?2:1.5)}mix(e){if(!this.ctx)return;const{evening:t,rain:n,paused:s}=this.scene,r={"bgm-day":t?0:1,"bgm-evening":t?1:0,"amb-day":t?0:n?.25:1,"amb-evening":t?n?.3:1:0,"amb-rain":n?1:0},o=s?.35:1;for(const[a,c]of this.loops)this.fade(c.gain.gain,r[a]*(a.startsWith("bgm")?o:1),e)}impulse(e){const t=this.ctx,n=Math.floor(t.sampleRate*e),s=t.createBuffer(2,n,t.sampleRate);for(let r=0;r<2;r++){const o=s.getChannelData(r);for(let a=0;a<n;a++)o[a]=(Math.random()*2-1)*Math.pow(1-a/n,3.2)}return s}tone(e,t,n,s,r="sine",o=.5,a=0){const c=this.ctx,l=c.createOscillator();l.type=r,l.frequency.setValueAtTime(t,e),a&&l.frequency.exponentialRampToValueAtTime(a,e+n*.6);const h=c.createGain();if(h.gain.setValueAtTime(1e-4,e),h.gain.exponentialRampToValueAtTime(s,e+.006),h.gain.exponentialRampToValueAtTime(1e-4,e+n),l.connect(h),h.connect(this.sfxBus),o){const u=c.createGain();u.gain.value=o,h.connect(u).connect(this.verb)}l.start(e),l.stop(e+n+.05)}bell(e,t,n,s){this.tone(e,t,n,s),this.tone(e,t*2,n*.55,s*.35),this.tone(e,t*3.01,n*.3,s*.14),this.tone(e,t*4.2,n*.18,s*.07)}knock(e,t,n,s=.05){const r=this.ctx,o=Math.floor(r.sampleRate*s),a=r.createBuffer(1,o,r.sampleRate),c=a.getChannelData(0);for(let d=0;d<o;d++)c[d]=(Math.random()*2-1)*Math.pow(1-d/o,4);const l=r.createBufferSource();l.buffer=a;const h=r.createBiquadFilter();h.type="bandpass",h.frequency.value=t,h.Q.value=4;const u=r.createGain();u.gain.value=n,l.connect(h).connect(u).connect(this.sfxBus),l.start(e)}synth(e,t,n){const s=n.gain??1,r=o=>523.25*Math.pow(2,o/12);switch(e){case"coin":this.tone(t,r(16),.09,.16*s,"triangle",.2),this.bell(t+.055,r(23),.45,.13*s);break;case"order":[0,4,7,12].forEach((o,a)=>this.bell(t+a*.07,r(o+7),.7,.12*s));break;case"streak":{const o=Math.min(n.n??1,6);this.tone(t,r(12+o),.12,.1*s,"triangle",.3),this.tone(t+.08,r(19+o),.25,.1*s,"triangle",.4);break}case"goal":[[0,0],[4,.09],[7,.18],[12,.27],[16,.36]].forEach(([o,a])=>{this.tone(t+a,r(o),.35,.14*s,"sine",.35),this.knock(t+a,r(o)*2,.06*s,.03)}),this.bell(t+.45,r(24),1,.08*s);break;case"upgrade":this.tone(t,r(0),.35,.09*s,"triangle",.3,r(12)),this.bell(t+.2,r(19),.8,.12*s),this.bell(t+.2,r(24),.8,.07*s);break;case"result":{[[0,4,7],[5,9,12],[7,11,14],[12,16,19]].forEach((c,l)=>c.forEach(h=>this.tone(t+l*.28,r(h-12),.9,.06*s,"triangle",.5)));const a=n.n??3;for(let c=0;c<a;c++)this.bell(t+1.25+c*.32,r(19+c*5),1.1,.13*s);break}case"click":this.knock(t,2400,.25*s,.025);break;case"plant":this.tone(t,260,.14,.18*s,"sine",.1,520),this.knock(t,900,.12*s,.04);break;case"oven":this.knock(t,700,.18*s,.06),this.bell(t+.04,r(16),.9,.14*s);break;case"jar":this.tone(t,2637,.25,.08*s,"sine",.3),this.tone(t+.07,3136,.3,.06*s,"sine",.3),this.knock(t,3200,.1*s,.02);break;case"pick":this.tone(t,420,.1,.16*s,"sine",.1,840),this.tone(t+.11,520,.1,.14*s,"sine",.1,1040);break;case"unlock":[0,2,4,7,9,12].forEach((o,a)=>this.tone(t+a*.06,r(o+12),.25,.08*s,"triangle",.4)),this.bell(t+.4,r(24),1.2,.12*s);break;case"heart":[0,4,7,11,14].forEach((o,a)=>this.tone(t+a*.08,r(o+5),.4,.09*s,"sine",.5)),this.bell(t+.45,r(19),1.1,.12*s),this.bell(t+.62,r(24),1.2,.08*s);break;case"greet":this.tone(t,r(7),.18,.1*s,"sine",.3,r(12)),this.tone(t+.22,r(12),.28,.1*s,"sine",.4,r(9));break;case"commission":[0,5,9].forEach((o,a)=>this.bell(t+a*.09,r(o+5),.8,.11*s));break;case"fail":this.tone(t,r(-8),.14,.1*s,"triangle",.1),this.tone(t+.12,r(-12),.22,.1*s,"triangle",.1);break}}}const C1=i=>({harvested:i.stats.harvested,milled:i.stats.milled,sold:i.stats.sold,earned:i.stats.earned,ordersCompleted:i.daily.ordersCompleted,streak:i.streak,claimed:i.daily.claimed.length,dailyDay:i.daily.day,upgrades:i.upgrades.field+i.upgrades.warehouse+i.upgrades.mill,day:i.day,result:!!i.result,cargo:i.workers.map(e=>e.job==="haul"?e.cargo:0),bread:i.produced.bread,jam:i.produced.jam,apple:i.produced.apple,commissions:i.villagers.reduce((e,t)=>e+t.completed,0)});class R1{constructor(e){F(this,"prev",null);this.engine=e}reset(){this.prev=null}update(e,t){var c;this.engine.setScene({evening:e.phase==="evening",rain:t==="rain",paused:e.paused});const n=C1(e),s=this.prev;if(this.prev=n,!s)return;const r=this.engine;n.apple>s.apple?r.play("pick"):n.harvested>s.harvested&&r.play("harvest"),n.bread>s.bread&&r.play("oven"),n.jam>s.jam&&r.play("jar"),n.cargo.some((l,h)=>l<(s.cargo[h]??0))&&r.play("sack"),n.milled>s.milled&&r.play("mill");const o=n.dailyDay===s.dailyDay;o&&n.ordersCompleted>s.ordersCompleted?(r.play("order"),n.streak>=2&&r.play("streak",{n:n.streak})):n.earned>s.earned&&n.sold>s.sold&&r.play("coin"),n.commissions>s.commissions&&r.play("commission"),o&&n.claimed>s.claimed&&r.play("goal"),n.upgrades>s.upgrades&&(r.play("hammer"),r.play("upgrade")),n.result&&!s.result?r.play("result",{n:((c=e.result)==null?void 0:c.stars)??1}):n.day>s.day&&r.play("rooster")}}const jl="farmproto.save.v1",hl="farmproto.newMode",Of="farmproto.quality",Bf="farmproto.outline.v2",zf="farmproto.music",Hf="farmproto.sfx",Lt=Jw,Jt=new URLSearchParams(location.search),P1=Object.assign({"./art/index.ts":Kw});var ld;const od=(ld=P1["./art/index.ts"])==null?void 0:ld.buildWorld;function L1(){const i=Jt.get("q")??ct.get(Of);return i==="high"||i==="low"?i:matchMedia("(pointer: coarse)").matches&&Math.min(screen.width,screen.height)<820?"low":"high"}const ad=i=>i==="challenge"||i==="endless"?i:null;function I1(){const i=ad(ct.get(hl));ct.remove(hl);const e=i??ad(Jt.get("mode")),t=()=>(ct.remove(Yo),ct.remove(Ko),ct.remove(Jo),sy(e??"challenge"));if(Jt.has("fresh")||i)return t();const n=ct.get(jl);if(!n)return t();try{const s=cy(n);return e&&s.mode!==e?t():s}catch(s){return console.warn("存檔讀不到，開新局",s),t()}}function D1(i){if(od&&Jt.get("art")!=="placeholder")try{return{world:od(Lt,{quality:i}),source:"art"}}catch(e){console.warn("src/art 建場景失敗，改用備用場景",e)}return{world:Uy(Lt,{quality:i}),source:"placeholder"}}const ua=L1(),Vf=(Jt.get("outline")??ct.get(Bf)??"1")==="1";let Ve=I1(),Yi=1;const ul={music:ct.get(zf)!=="0",sfx:ct.get(Hf)!=="0"},Zt=new A1(ul.music,ul.sfx),k1=new R1(Zt),Gf=document.getElementById("view"),rt=new Cy(Gf,Lt,ua,Vf),{world:Wf,source:U1}=D1(ua),ql=Hy(Wf,()=>{hd(()=>import("./vrmCrew-C3Z5O5U9.js"),[],import.meta.url).then(i=>i.disposeVrmWorkers())}),sn=ql.world;rt.scene.add(sn.root);rt.occluders=sn.root;const Sn=new By(sn,Lt,rt.scene),ns=new $y(Wf,Lt,rt.scene);rt.characters=()=>[...Sn.workers.map(i=>i.vis.object),...ns.objects];const N1=Jt.get("crew")!=="box",Zo=N1?hd(()=>import("./vrmCrew-C3Z5O5U9.js"),[],import.meta.url):null;let dl=0,$f=!1;async function F1(i){try{const e=await(await Zo).loadVrmWorker(i);e&&ql.provide(i,e)}catch(e){console.warn(`工人 ${i} 的 VRoid 模型載入失敗，繼續用方塊版`,e)}}function Xf(){const i=[];for(;Zo&&dl<Ve.workers.length;)i.push(F1(dl++));return Promise.all(i).then(()=>{})}Zo&&Zo.then(async i=>{$f=!0,await Xf(),await Promise.all(Dr.map(async(e,t)=>{try{const n=await i.loadVrmVillager(e,t);n&&ns.provide(e,n)}catch(n){console.warn(`村民 ${e} 的 VRoid 模型載入失敗，繼續用備用外觀`,n)}}))});let jf=!1;function kr(){jf||ct.set(jl,ay(Ve))}function Ki(i){if(i.type==="upgrade"&&i.target==="field"&&Ve.fields.length>=Lt.fieldSlots.length)return ot.toast("地圖上沒有空地可以開田了"),Zt.play("fail"),!1;const e=wf(Ve,i),t=i.type==="upgradeHousing"||i.type==="recruitWorker";return e.ok?(kr(),i.type==="plant"?Zt.play("plant"):t&&Zt.play("unlock")):(ot.toast(t?ot.housingReason(e.reason):ot.reason(e.reason),2200,!0),Zt.play("fail")),e.ok}const ot=new s1(document.getElementById("hud"),{onAction:Ki,onSpeed:i=>{Yi=i,wf(Ve,{type:"pause",paused:i===0})},onQuality:i=>{ct.set(Of,i),kr(),location.reload()},onFollow:i=>{rt.follow(()=>Sn.workerPosition(i)),ot.setFocus(i)},onUnfollow:()=>{rt.unfollow(),rt.goHome()},onOutline:i=>{ct.set(Bf,i?"1":"0"),rt.setOutline(i)},onSound:(i,e)=>{ct.set(i==="music"?zf:Hf,e?"1":"0"),i==="music"?Zt.setMusic(e):Zt.setSfx(e)},onCrop:(i,e)=>{const t=Ve.fields[i];t&&(!t.planted&&!t.harvested?Ki({type:"plant",fieldId:i,crop:e}):Ki({type:"setNextCrop",fieldId:i,crop:e})&&ot.toast(`這塊田收成後改種${Rt[e]}`))},onUnlock:()=>Zt.play("unlock"),onTour:()=>Gn.start(),explain:(i,e,t)=>qf?(Gn.say(i,e,t),!0):!1,onVillagerEvent:i=>Zt.play(i),onSite:i=>{if(i==="field"){const t=Lt.fieldSlots.slice(0,Ve.fields.length);fl({site:i},t.reduce((n,s)=>n+s[0],0)/t.length,t.reduce((n,s)=>n+s[1],0)/t.length);return}const e=Kl.find(t=>t.t.site===i);e&&fl(e.t,e.x,e.z)},onRestart:i=>{if(jf=!0,ct.remove(jl),ct.remove(Yo),ct.remove(Ko),ct.remove(Jo),ct.set(hl,i??Ve.mode),Jt.has("mode")||Jt.has("fresh")){Jt.delete("mode"),Jt.delete("fresh");const e=Jt.toString();location.replace(`${location.pathname}${e?`?${e}`:""}${location.hash}`)}else location.reload()}},ua,Vf,{...ul});document.getElementById("hud").addEventListener("click",i=>{i.target.closest("button")&&Zt.play("click")});Ve.paused&&(Yi=0,ot.speed=0);rt.onUnfollow=()=>ot.setFocus(-1);const qf=Jt.get("tour")==="1"||Jt.get("tour")!=="0"&&!navigator.webdriver,Gn=new l1({state:()=>Ve,locate:i=>O1(i),setSpeed:i=>ot.setSpeed(i),speed:()=>ot.speed,onDone:()=>ct.set(Ff,"1"),bottomReserve:()=>{const i=ot.rectOf("crew");return i?window.innerHeight-i.top+12:80}},ol("lin","head"));document.getElementById("hud").append(Gn.el);qf&&(Jt.get("tour")==="1"||!ct.get(Ff))&&Gn.start();const cd=i=>i?{l:i.left,t:i.top,r:i.right,b:i.bottom}:null;function or(i,e,t,n){if(!rt.project(Wn.set(i,e,t),Pt))return null;const s=Pt.x,r=Pt.y;rt.project(Wn.set(i+n,e,t),Pt);const o=Math.max(36,Math.abs(Pt.x-s));return{l:s-o,t:r-o,r:s+o,b:r+o,round:!0}}function O1(i){const e=Lt.buildings;switch(i){case"workers":return cd(ot.rectOf("crew"));case"upgrades":return cd(ot.rectOf("upgrade"));case"mill":return or(e.mill.pos[0],3,e.mill.pos[1],4.5);case"shop":return or(e.shop.pos[0],2.5,e.shop.pos[1],4.5);case"bakery":case"preservery":return or(e[i].pos[0],2.5,e[i].pos[1],3.5);case"tree":return or(Lt.orchardSlots[0][0],2,Lt.orchardSlots[0][1],3);case"fields":{let t=1/0,n=1/0,s=-1/0,r=-1/0;const[o,a]=Lt.fieldSize;for(const[c,l]of Lt.fieldSlots.slice(0,Ve.fields.length))for(const[h,u]of[[-1,-1],[1,-1],[-1,1],[1,1]])rt.project(Wn.set(c+h*o/2,0,l+u*a/2),Pt)&&(t=Math.min(t,Pt.x),s=Math.max(s,Pt.x),n=Math.min(n,Pt.y),r=Math.max(r,Pt.y));return t<s?{l:t,t:n,r:s,b:r}:null}default:if(i.startsWith("villager:")){const t=ns.position(i.slice(9));return t?or(t.x,1.2,t.z,1.4):null}return null}}const Ts=(i,e,t)=>new k(i,e,t),rn=Lt.buildings,Cr=[{tag:ot.tag("building"),pos:Ts(rn.warehouse.pos[0],7.2,rn.warehouse.pos[1]),text:()=>{const i=$n(Ve),e=En(Ve);return Tr(Ve)?`🏠 倉庫滿了 ${i}/${e}`:`🏠 倉庫 ${i}/${e}`}},{tag:ot.tag("building"),pos:Ts(rn.mill.pos[0],9.5,rn.mill.pos[1]),text:()=>`⚙️ 磨坊${Ve.upgrades.mill?` Lv${Ve.upgrades.mill+1}`:""}`},{tag:ot.tag("building"),pos:Ts(rn.shop.pos[0],8,rn.shop.pos[1]),text:()=>"🪙 商店"},...["bakery","preservery"].map(i=>({tag:ot.tag("building"),pos:Ts(rn[i].pos[0],5.2,rn[i].pos[1]),dodge:!0,text:()=>{const e=i==="bakery"?"🍞 麵包坊":"🍯 果醬坊",t=Ve.processors[i];if(t.batch)return`${e} ${Math.round(Math.min(1,t.progress01+Ve.remainder/hn[i].seconds)*100)}%`;if(t.waiting==="Locked")return`🔒${i==="bakery"?"🍞":"🍯"} ${$l(Ve,i)}`;const n=Df(Ve,i);return n?`${e} · ${n}`:e}})),{tag:ot.tag("building house"),pos:Ts(rn.farmhouse.pos[0],6.4,rn.farmhouse.pos[1]),dodge:!0,show:()=>Vs(Ve),text:()=>`🏡 宿舍 ${Ve.workers.length}/${zn(Ve)}`}];Cr[Cr.length-1].tag.el.addEventListener("click",()=>ot.openHousing());const hr=ot.tag("tree");hr.el.addEventListener("click",()=>Ki({type:"plantTree",treeId:0}));const B1=Ts(Lt.orchardSlots[0][0],4.2,Lt.orchardSlots[0][1]);function z1(){const i=Ve.trees[0];return!i||!ht(Ve).orchard?`🔒🍎 ${$l(Ve,"orchard")}`:i.planted?i.harvested>0?`待搬 🍎${i.harvested}`:i.ripe?"🍎 可採收":`🍎 ${i.batches?"結果中":"長大中"} ${Math.round(i.progress01*100)}%`:"🍎 蘋果樹 · 點我種"}const ur=[],Ji=[];function Yf(){const i=Ji.length,e=ot.tag("worker");e.el.addEventListener("click",()=>{rt.follow(()=>Sn.workerPosition(i)),ot.setFocus(i)}),Ji.push(e)}for(;Ji.length<Ve.workers.length;)Yf();const Kf=new Map(Dr.map(i=>{const e=ot.tag("villager");return e.el.addEventListener("click",()=>ot.openVillager(i)),[i,e]})),Pt={x:0,y:0},Wn=new k,Po=[];let Rs=0;function H1(i,e,t,n){for(let s=0;s<Rs;s++){const r=Po[s];if(i<r.r&&e>r.l&&t<r.b&&n>r.t)return r}return null}function ar(i,e,t=!1){if(!rt.project(e,Pt)){i.el.classList.add("off");return}i.el.classList.remove("off");const{w:n,h:s}=i.size(),r=Pt.x,o=n/2;let a=Pt.y;for(let l=0;t&&l<4;l++){const h=H1(r-o,r+o,a-s,a);if(!h)break;const u=h.b+s+2,d=h.t-2;a=Math.abs(u-a)<Math.abs(d-a)?u:d}const c=Po[Rs]??(Po[Rs]={l:0,r:0,t:0,b:0});Rs++,c.l=r-o,c.r=r+o,c.t=a-s,c.b=a,i.el.style.transform=`translate(${r.toFixed(1)}px, ${a.toFixed(1)}px) translate(-50%, -100%)`}function V1(){var e;Rs=0;for(const t of Cr){if(t.show&&!t.show()){t.tag.el.classList.add("off");continue}t.tag.set(t.text()),ar(t.tag,t.pos,t.dodge)}for(Cr[0].tag.el.classList.toggle("warn",Tr(Ve)),hr.set(z1()),hr.el.classList.toggle("empty",ht(Ve).orchard&&!((e=Ve.trees[0])!=null&&e.planted)),hr.el.classList.toggle("ready",!!Ve.trees[0]&&(Ve.trees[0].ripe||Ve.trees[0].harvested>0)),ar(hr,B1,!0);ur.length<Math.min(Ve.fields.length,Lt.fieldSlots.length);){const t=ur.length,n=ot.tag("field");n.el.addEventListener("click",()=>{const s=n.el.getBoundingClientRect();G1(t,(s.left+s.right)/2,s.top)}),ur.push(n)}const i=ht(Ve).crops.length>1;ur.forEach((t,n)=>{const s=Ve.fields[n],[r,o]=Lt.fieldSlots[n],a=s.planted&&s.growth>=Gt[s.crop].seconds,c=Rt[s.crop],l=s.nextCrop!==s.crop?` →${Rt[s.nextCrop]}`:"";t.el.classList.toggle("ready",a||s.harvested>0),t.el.classList.toggle("empty",!s.planted&&!s.harvested),t.el.classList.toggle("pick",i);const h=s.planted&&!a&&!s.harvested;if(t.el.classList.toggle("grow",h),h){const u=String(Math.round(s.growth/Gt[s.crop].seconds*20)/20);t.el.style.getPropertyValue("--p")!==u&&t.el.style.setProperty("--p",u)}t.set(s.harvested>0?`${c}×${s.harvested}${l}`:s.planted?a?`${c}✓${l}`:`${c}${l}`:"＋ 種田"),ar(t,Wn.set(r,1.2,o-Lt.fieldSize[1]/2),!0)});for(const t of Ve.villagers){const n=Kf.get(t.id),s=ns.position(t.id);if(!s){n.el.classList.add("off");continue}const r=al(t.points);n.set(`${t.commission?"📜":""}${yn[t.id].name}${r?` ♥${r}`:""}`),n.el.classList.toggle("ask",!!t.commission),ar(n,Wn.set(s.x,2.3*Hs,s.z),!0)}for(;Ji.length<Ve.workers.length;)Yf();Ve.workers.forEach((t,n)=>{const s=Sn.workerPosition(n);if(!s)return;const r=kf(Ve,t),o=r.warn?"⚠️":t.cargo?Rt[t.cargoItem]:`${$i[t.job]}${r.text&&r.text!=="💤"?"…":""}`,a=Ji[n];a.set(ot.focused===n?`${o} ${t.name}`:o),a.el.title!==t.name&&(a.el.title=t.name),a.el.classList.toggle("warn",r.warn),a.el.classList.toggle("carry",t.cargo>0&&!r.warn),ar(Ji[n],Wn.set(s.x,2.4*Hs,s.z),!0)})}function G1(i,e,t){const n=Ve.fields[i];n&&(ht(Ve).crops.length>1?ot.cropPickerFor===i?ot.closeCropPicker():ot.openCropPicker(i,e,t,Ve):!n.planted&&!n.harvested&&Ki({type:"plant",fieldId:i}))}const is=new f1({state:()=>Ve,act:i=>Ki(i),toast:(i,e)=>ot.toast(i,2200,e),follow:i=>{is.close(),rt.follow(()=>Sn.workerPosition(i)),ot.setFocus(i)},onClose:()=>Qt.closeCard()});document.getElementById("hud").append(is.el);const Qt=new S1({state:()=>Ve,layout:Lt,workerPos:i=>Sn.workerPosition(i),personHeight:1.7*Hs,stage:rt,closeCard:()=>is.close(),openHousing:()=>ot.openHousing()});document.getElementById("hud").append(Qt.el);rt.onResize=()=>Qt.resize();Qt.resize();Qt.update(Ve,0,!0);const ac=document.getElementById("hud");let Lo=0;function W1(){const i=window.innerWidth,e=window.innerHeight;ac.style.setProperty("--zone-h",`${Qt.el.offsetHeight}px`);let t=0;for(const s of ac.querySelectorAll(".top .day, .top .tasks, .top .ctl, .top .res")){const r=s.getBoundingClientRect();r.width&&r.right>i*.3&&r.left<i*.7&&(t=Math.max(t,r.bottom))}let n=e;for(const s of ac.querySelectorAll(".crew, .upbtn, .zonebar, .sitecard:not(.hidden), .focus:not(.hidden)")){const r=s.getBoundingClientRect();r.height&&r.right>i*.3&&r.left<i*.7&&(n=Math.min(n,r.top))}rt.setInsets(t,e-n)}const Yl=new m1(Lt,(i,e,t)=>rt.project(Wn.set(i,e,t),Pt)?{x:Pt.x,y:Pt.y}:null);document.getElementById("hud").prepend(Yl.el);const Kl=[...["warehouse","mill","shop","bakery","preservery"].map(i=>({t:{site:i},x:rn[i].pos[0],y:i==="mill"?3:2,z:rn[i].pos[1],r:Math.max(...rn[i].size)/2+.6})),{t:{site:"orchard"},x:Lt.orchardSlots[0][0],y:1.5,z:Lt.orchardSlots[0][1],r:3}];function Jf(i,e){const n=rt.raycaster(i,e).intersectObjects(Sn.fields.map(o=>o.object),!0)[0];if(n){const o=Sn.fields.findIndex(a=>{let c=n.object;for(;c;){if(c===a.object)return!0;c=c.parent}return!1});if(o>=0&&Ve.fields[o])return{t:{site:"field",fieldId:o},x:Lt.fieldSlots[o][0],z:Lt.fieldSlots[o][1]}}let s=null,r=1;for(const o of Kl){if(!rt.project(Wn.set(o.x,o.y,o.z),Pt))continue;const a=Pt.x,c=Pt.y;rt.project(Wn.set(o.x+o.r,o.y,o.z),Pt);const l=Math.hypot(Pt.x-a,Pt.y-c),h=Math.hypot(i-a,e-c)/Math.max(24,l);h<r&&(r=h,s=o)}return s?{t:s.t,x:s.x,z:s.z}:null}function fl(i,e,t){ot.closeCropPicker();const n=ot.rectOf("crew");is.el.style.bottom=`${n?window.innerHeight-n.top+8:80}px`,is.open(i,Ve);const r=Kl.find(o=>o.t.site===i.site)&&i.site!=="field"&&i.site!=="orchard"?rn[i.site].door:null;Qt.openCard(i,r?(e+r[0])/2:e,r?(t+r[1])/2:t),Lo=0}Gf.addEventListener("click",i=>{if(rt.wasDrag())return;const e=Jf(i.clientX,i.clientY);e?fl(e.t,e.x,e.z):is.close()});document.addEventListener("visibilitychange",()=>{document.hidden&&kr()});window.addEventListener("pagehide",kr);setInterval(kr,5e3);const $1=["sunny","rain","drought"],X1=$1.find(i=>i===Jt.get("weather"))??null,j1=i=>X1??i.weather??"sunny",q1=new of;let Zf=0,Es=null,Io=-1;function Qf(){var s,r,o,a;const i=Math.min(.1,q1.getDelta());Yi>0&&yf(Ve,i*Yi),$f&&dl<Ve.workers.length&&Xf(),Io!==Ve.housingLevel&&(Io=Ve.housingLevel,(s=sn.setHousing)==null||s.call(sn,Io)),Sn.sync(Ve,i*Yi),ns.sync(Ve,i*Yi),sn.setStockItems?sn.setStockItems(Ve.inventory,En(Ve)):(r=sn.setStock)==null||r.call(sn,Ve.inventory.wheat,Ve.inventory.flour,En(Ve));const e=(Ve.time%Qe.daySeconds+Ve.remainder)/Qe.daySeconds,t=j1(Ve);(o=sn.update)==null||o.call(sn,i,{phase:Ve.phase,time01:e,weather:t}),rt.setWeather(t),rt.setDayTime(e),Qt.update(Ve,i),Lo-=i,Lo<=0&&(Lo=.2,W1()),rt.update(i),rt.render(i);const n=Gn.stepId;n&&!Es?(Es=Qt.mode,Qt.select("overview")):!n&&Es&&(Qt.select(Es==="overview"?"farm":Es),Es=null),ot.quiet=Gn.active,ot.update(Ve,t),Gn.update(),is.update(Ve),Yl.update(Ve,i),k1.update(Ve,t),V1(),++Zf===2&&((a=document.getElementById("boot"))==null||a.classList.add("done")),requestAnimationFrame(Qf)}requestAnimationFrame(Qf);window.__farm={get state(){return Ve},get frames(){return Zf},workerHeight:1.7*Hs,get workerPos(){return Sn.workers.map(i=>[i.pos.x,i.pos.z])},artSource:U1,quality:ua,get outline(){return rt.outline},get crewReady(){return ql.ready},get mode(){return Ve.mode},get housingShown(){return Io},get following(){return rt.following},get cameraDistance(){return rt.cameraDistance},get rainAmount(){return rt.rainAmount},outlineCrease:i=>rt.setOutlineCrease(i),audio:{get running(){return Zt.running},get loaded(){return Zt.loaded},get played(){return{...Zt.played}},get music(){return Zt.music},get sfx(){return Zt.sfx}},act:Ki,get tour(){return Gn.stepId},get coachOpen(){return Gn.active},startTour:()=>Gn.start(),setSpeed:i=>{Yi=i},zoom:(i,e,t)=>{rt.hold(),rt.zoomTo(i),e!==void 0&&t!==void 0&&rt.lookAt(e,t)},get view(){return Qt.mode},get viewSub(){return Qt.sub},get viewDistances(){return Qt.distances},get cameraManual(){return rt.isManual},selectView:i=>Qt.select(i),get floaters(){return Yl.count},siteAt:(i,e)=>{var t;return((t=Jf(i,e))==null?void 0:t.t)??null},advance:i=>{yf(Ve,i)},get villagersReady(){return ns.ready},villagerPos:i=>{const e=ns.position(i);return e?[e.x,e.z]:null},get m8Visuals(){return{trees:Sn.trees.length,processors:Sn.processors.length}},project:(i,e,t)=>rt.project(Wn.set(i,e,t),Pt)?{...Pt}:null,tagSizeDrift:()=>Math.max(0,...[...Cr.map(i=>i.tag),...ur,...Ji,...Kf.values()].filter(i=>!i.el.classList.contains("off")).map(i=>Math.abs(i.size().w-i.el.offsetWidth)))};export{vx as $,tM as A,ln as B,Ne as C,_w as D,b as E,oM as F,wx as G,Yd as H,Ln as I,nM as J,iM as K,Lr as L,sM as M,Fr as N,It as O,gw as P,ss as Q,yc as R,pn as S,K1 as T,me as U,Re as V,on as W,st as X,Al as Y,jd as Z,rM as _,Z1 as a,Do as a0,Yc as a1,$d as a2,qt as a3,Bo as a4,Oo as a5,oa as a6,at as a7,Ci as a8,ra as a9,Ri as aa,ui as ab,cn as ac,Fn as ad,dw as ae,jt as af,Cd as ag,wr as ah,Be as ai,tt as aj,Q1 as ak,uM as al,dM as am,pl as an,St as ao,pt as ap,le as aq,be as ar,J1 as b,lM as c,Gs as d,cM as e,nt as f,k as g,fu as h,aM as i,hM as j,eM as k,ji as l,fa as m,Lp as n,Hn as o,en as p,Mc as q,Xi as r,yx as s,rs as t,qd as u,ft as v,si as w,ta as x,bt as y,Wt as z};
