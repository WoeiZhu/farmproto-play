var uf=Object.defineProperty;var df=(i,t,e)=>t in i?uf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var G=(i,t,e)=>df(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ff="modulepreload",pf=function(i,t){return new URL(i,t).href},El={},Tu=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let o=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(e.map(h=>{if(h=pf(h,n),h in El)return;El[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!n)for(let v=a.length-1;v>=0;v--){const m=a[v];if(m.href===h&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":ff,u||(g.as="script"),g.crossOrigin="",g.href=h,l&&g.setAttribute("nonce",l),document.head.appendChild(g),u)return new Promise((v,m)=>{g.addEventListener("load",v),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bc="170",mf=0,Tl=1,gf=2,zc=1,Ua=2,Xn=3,wi=0,Qe=1,qn=2,jn=0,ms=1,Na=2,Al=3,Cl=4,vf=5,Ui=100,_f=101,xf=102,yf=103,wf=104,Mf=200,bf=201,Sf=202,Ef=203,ka=204,Fa=205,Tf=206,Af=207,Cf=208,Rf=209,Pf=210,Lf=211,If=212,Df=213,Uf=214,Oa=0,Ba=1,za=2,xs=3,Va=4,Ga=5,Ha=6,Wa=7,Au=0,Nf=1,kf=2,xi=0,Cu=1,Ru=2,Pu=3,Vc=4,Ff=5,Lu=6,Iu=7,Rl="attached",Of="detached",Du=300,ys=301,ws=302,Xa=303,$a=304,Eo=306,qa=1e3,ki=1001,Ya=1002,qe=1003,Bf=1004,Mr=1005,In=1006,Bo=1007,Fi=1008,Qn=1009,Uu=1010,Nu=1011,sr=1012,Gc=1013,zi=1014,Tn=1015,Dn=1016,Hc=1017,Wc=1018,Ms=1020,ku=35902,Fu=1021,Ou=1022,dn=1023,Bu=1024,zu=1025,gs=1026,bs=1027,Xc=1028,$c=1029,Vu=1030,qc=1031,Yc=1033,eo=33776,no=33777,io=33778,so=33779,ja=35840,Ka=35841,Za=35842,Ja=35843,Qa=36196,tc=37492,ec=37496,nc=37808,ic=37809,sc=37810,rc=37811,oc=37812,ac=37813,cc=37814,lc=37815,hc=37816,uc=37817,dc=37818,fc=37819,pc=37820,mc=37821,ro=36492,gc=36494,vc=36495,Gu=36283,_c=36284,xc=36285,yc=36286,ho=2300,wc=2301,zo=2302,Pl=2400,Ll=2401,Il=2402,zf=2500,kw=0,Fw=1,Ow=2,Vf=3200,Hu=3201,Wu=0,Gf=1,pi="",an="srgb",As="srgb-linear",To="linear",fe="srgb",Ki=7680,Dl=519,Hf=512,Wf=513,Xf=514,Xu=515,$f=516,qf=517,Yf=518,jf=519,Mc=35044,Bw=35048,Ul="300 es",Yn=2e3,uo=2001;class Cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nl=1234567;const Zs=Math.PI/180,Ss=180/Math.PI;function pn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Le(i,t,e){return Math.max(t,Math.min(e,i))}function jc(i,t){return(i%t+t)%t}function Kf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Zf(i,t,e){return i!==t?(e-i)/(t-i):0}function Js(i,t,e){return(1-e)*i+e*t}function Jf(i,t,e,n){return Js(i,t,1-Math.exp(-e*n))}function Qf(i,t=1){return t-Math.abs(jc(i,t*2)-t)}function tp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ep(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function np(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ip(i,t){return i+Math.random()*(t-i)}function sp(i){return i*(.5-Math.random())}function rp(i){i!==void 0&&(Nl=i);let t=Nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function op(i){return i*Zs}function ap(i){return i*Ss}function cp(i){return(i&i-1)===0&&i!==0}function lp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function up(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const he={DEG2RAD:Zs,RAD2DEG:Ss,generateUUID:pn,clamp:Le,euclideanModulo:jc,mapLinear:Kf,inverseLerp:Zf,lerp:Js,damp:Jf,pingpong:Qf,smoothstep:tp,smootherstep:ep,randInt:np,randFloat:ip,randFloatSpread:sp,seededRandom:rp,degToRad:op,radToDeg:ap,isPowerOfTwo:cp,ceilPowerOfTwo:lp,floorPowerOfTwo:hp,setQuaternionFromProperEuler:up,normalize:pe,denormalize:Sn};class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,s,r,o,a,c,l){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],M=s[1],x=s[4],_=s[7],L=s[2],T=s[5],E=s[8];return r[0]=o*v+a*M+c*L,r[3]=o*m+a*x+c*T,r[6]=o*p+a*_+c*E,r[1]=l*v+h*M+u*L,r[4]=l*m+h*x+u*T,r[7]=l*p+h*_+u*E,r[2]=d*v+f*M+g*L,r[5]=d*m+f*x+g*T,r[8]=d*p+f*_+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vo.makeScale(t,e)),this}rotate(t){return this.premultiply(Vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new Qt;function $u(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dp(){const i=rr("canvas");return i.style.display="block",i}const kl={};function $s(i){i in kl||(kl[i]=!0,console.warn(i))}function fp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function pp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function mp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:As,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(i.r=vs(i.r),i.g=vs(i.g),i.b=vs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pi?To:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Fl=[.64,.33,.3,.6,.15,.06],Ol=[.2126,.7152,.0722],Bl=[.3127,.329],zl=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vl=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[As]:{primaries:Fl,whitePoint:Bl,transfer:To,toXYZ:zl,fromXYZ:Vl,luminanceCoefficients:Ol,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:Fl,whitePoint:Bl,transfer:fe,toXYZ:zl,fromXYZ:Vl,luminanceCoefficients:Ol,outputColorSpaceConfig:{drawingBufferColorSpace:an}}});let Zi;class gp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zi===void 0&&(Zi=rr("canvas")),Zi.width=t.width,Zi.height=t.height;const n=Zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=rr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Kn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vp=0;class qu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=pn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Go(s[o].image)):r.push(Go(s[o]))}else r=Go(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Go(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _p=0;class He extends Cs{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=ki,s=ki,r=In,o=Fi,a=dn,c=Qn,l=He.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=pn(),this.name="",this.source=new qu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qa:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qa:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Du;He.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,_=(f+1)/2,L=(p+1)/2,T=(h+d)/4,E=(u+v)/4,P=(g+m)/4;return x>_&&x>L?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=E/n):_>L?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=E/r,s=P/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xp extends Cs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new He(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ln extends xp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yu extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yp extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*v,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),T=Math.atan2(L,p*M);m=Math.sin(m*T)/L,a=Math.sin(a*T)/L}const _=a*M;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+v*_,m===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ho.copy(this).projectOnVector(t),this.sub(Ho)}reflect(t){return this.sub(Ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new D,Gl=new Wi;class Mi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(t.matrixWorld),this.union(br)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),Sr.subVectors(this.max,Ns),Ji.subVectors(t.a,Ns),Qi.subVectors(t.b,Ns),ts.subVectors(t.c,Ns),oi.subVectors(Qi,Ji),ai.subVectors(ts,Qi),Si.subVectors(Ji,ts);let e=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Si.z,Si.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Si.z,0,-Si.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Si.y,Si.x,0];return!Wo(e,Ji,Qi,ts,Sr)||(e=[1,0,0,0,1,0,0,0,1],!Wo(e,Ji,Qi,ts,Sr))?!1:(Er.crossVectors(oi,ai),e=[Er.x,Er.y,Er.z],Wo(e,Ji,Qi,ts,Sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bn=[new D,new D,new D,new D,new D,new D,new D,new D],xn=new D,br=new Mi,Ji=new D,Qi=new D,ts=new D,oi=new D,ai=new D,Si=new D,Ns=new D,Sr=new D,Er=new D,Ei=new D;function Wo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ei.fromArray(i,r);const a=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),c=t.dot(Ei),l=e.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const wp=new Mi,ks=new D,Xo=new D;class ii{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ks.subVectors(t,this.center);const e=ks.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ks.copy(t.center).add(Xo)),this.expandByPoint(ks.copy(t.center).sub(Xo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new D,$o=new D,Tr=new D,ci=new D,qo=new D,Ar=new D,Yo=new D;class pr{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$o.copy(t).add(e).multiplyScalar(.5),Tr.copy(e).sub(t).normalize(),ci.copy(this.origin).sub($o);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Tr),a=ci.dot(this.direction),c=-ci.dot(Tr),l=ci.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($o).addScaledVector(Tr,d),f}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,r){qo.subVectors(e,t),Ar.subVectors(n,t),Yo.crossVectors(qo,Ar);let o=this.direction.dot(Yo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,t);const c=a*this.direction.dot(Ar.crossVectors(ci,Ar));if(c<0)return null;const l=a*this.direction.dot(qo.cross(ci));if(l<0||c+l>o)return null;const h=-a*ci.dot(Yo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,v,m){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,v,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),o=1/es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mp,t,bp)}lookAt(t,e,n){const s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),li.crossVectors(n,sn),li.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),li.crossVectors(n,sn)),li.normalize(),Cr.crossVectors(sn,li),s[0]=li.x,s[4]=Cr.x,s[8]=sn.x,s[1]=li.y,s[5]=Cr.y,s[9]=sn.y,s[2]=li.z,s[6]=Cr.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],x=n[7],_=n[11],L=n[15],T=s[0],E=s[4],P=s[8],w=s[12],y=s[1],C=s[5],N=s[9],U=s[13],O=s[2],$=s[6],B=s[10],j=s[14],z=s[3],rt=s[7],pt=s[11],vt=s[15];return r[0]=o*T+a*y+c*O+l*z,r[4]=o*E+a*C+c*$+l*rt,r[8]=o*P+a*N+c*B+l*pt,r[12]=o*w+a*U+c*j+l*vt,r[1]=h*T+u*y+d*O+f*z,r[5]=h*E+u*C+d*$+f*rt,r[9]=h*P+u*N+d*B+f*pt,r[13]=h*w+u*U+d*j+f*vt,r[2]=g*T+v*y+m*O+p*z,r[6]=g*E+v*C+m*$+p*rt,r[10]=g*P+v*N+m*B+p*pt,r[14]=g*w+v*U+m*j+p*vt,r[3]=M*T+x*y+_*O+L*z,r[7]=M*E+x*C+_*$+L*rt,r[11]=M*P+x*N+_*B+L*pt,r[15]=M*w+x*U+_*j+L*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+v*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],M=u*m*l-v*d*l+v*c*f-a*m*f-u*c*p+a*d*p,x=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,_=h*v*l-g*u*l+g*a*f-o*v*f-h*a*p+o*u*p,L=g*u*c-h*v*c-g*a*d+o*v*d+h*a*m-o*u*m,T=e*M+n*x+s*_+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=M*E,t[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*E,t[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*p+n*c*p)*E,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*E,t[4]=x*E,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*E,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*E,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*E,t[8]=_*E,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*E,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*p+e*a*p)*E,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*E,t[12]=L*E,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*E,t[14]=(g*a*s-o*v*s-g*n*c+e*v*c+o*n*m-e*a*m)*E,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,M=c*l,x=c*h,_=c*u,L=n.x,T=n.y,E=n.z;return s[0]=(1-(v+p))*L,s[1]=(f+_)*L,s[2]=(g-x)*L,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(d+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+x)*E,s[9]=(m-M)*E,s[10]=(1-(d+v))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=es.set(s[0],s[1],s[2]).length();const o=es.set(s[4],s[5],s[6]).length(),a=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);const l=1/r,h=1/o,u=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Yn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Yn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===uo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Yn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let g,v;if(a===Yn)g=(o+r)*u,v=-2*u;else if(a===uo)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const es=new D,yn=new te,Mp=new D(0,0,0),bp=new D(1,1,1),li=new D,Cr=new D,sn=new D,Hl=new te,Wl=new Wi;class Rn{constructor(t=0,e=0,n=0,s=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class Kc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sp=0;const Xl=new D,ns=new Wi,Vn=new te,Rr=new D,Fs=new D,Ep=new D,Tp=new Wi,$l=new D(1,0,0),ql=new D(0,1,0),Yl=new D(0,0,1),jl={type:"added"},Ap={type:"removed"},is={type:"childadded",child:null},jo={type:"childremoved",child:null};class Ee extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new D,e=new Rn,n=new Wi,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Qt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis($l,t)}rotateY(t){return this.rotateOnAxis(ql,t)}rotateZ(t){return this.rotateOnAxis(Yl,t)}translateOnAxis(t,e){return Xl.copy(t).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($l,t)}translateY(t){return this.translateOnAxis(ql,t)}translateZ(t){return this.translateOnAxis(Yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rr.copy(t):Rr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Fs,Rr,this.up):Vn.lookAt(Rr,Fs,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Vn),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jl),is.child=t,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ap),jo.child=t,this.dispatchEvent(jo),jo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jl),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,Ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Tp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new D(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new D,Gn=new D,Ko=new D,Hn=new D,ss=new D,rs=new D,Kl=new D,Zo=new D,Jo=new D,Qo=new D,ta=new ae,ea=new ae,na=new ae;class En{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),Gn.subVectors(n,e),Ko.subVectors(t,e);const o=wn.dot(wn),a=wn.dot(Gn),c=wn.dot(Ko),l=Gn.dot(Gn),h=Gn.dot(Ko),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ta.setScalar(0),ea.setScalar(0),na.setScalar(0),ta.fromBufferAttribute(t,e),ea.fromBufferAttribute(t,n),na.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ta,r.x),o.addScaledVector(ea,r.y),o.addScaledVector(na,r.z),o}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),Gn.subVectors(t,e),wn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),wn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return En.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ss.subVectors(s,n),rs.subVectors(r,n),Zo.subVectors(t,n);const c=ss.dot(Zo),l=rs.dot(Zo);if(c<=0&&l<=0)return e.copy(n);Jo.subVectors(t,s);const h=ss.dot(Jo),u=rs.dot(Jo);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ss,o);Qo.subVectors(t,r);const f=ss.dot(Qo),g=rs.dot(Qo);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(rs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Kl.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Kl,a);const p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(ss,o).addScaledVector(rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function ia(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=jc(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ia(o,r,t+1/3),this.g=ia(o,r,t),this.b=ia(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){const n=ju[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return ie.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Le(Ve.r*255,0,255))*65536+Math.round(Le(Ve.g*255,0,255))*256+Math.round(Le(Ve.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=an){ie.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==an?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Pr);const n=Js(hi.h,Pr.h,e),s=Js(hi.s,Pr.s,e),r=Js(hi.l,Pr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Dt;Dt.NAMES=ju;let Cp=0;class Xi extends Cs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=pn(),this.name="",this.blending=ms,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Fa,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Fa&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ao extends Xi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new D,Lr=new Et;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mc&&(t.usage=this.usage),t}}class Ku extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zu extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rp=0;const un=new te,sa=new Ee,os=new D,rn=new Mi,Os=new Mi,Ne=new D;class Oe extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($u(t)?Zu:Ku)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return sa.lookAt(t),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(rn.min,Os.min),rn.expandByPoint(Ne),Ne.addVectors(rn.max,Os.max),rn.expandByPoint(Ne)):(rn.expandByPoint(Os.min),rn.expandByPoint(Os.max))}rn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ne.fromBufferAttribute(a,l),c&&(os.fromBufferAttribute(t,l),Ne.add(os)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new D,c[P]=new D;const l=new D,h=new D,u=new D,d=new Et,f=new Et,g=new Et,v=new D,m=new D;function p(P,w,y){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[P].add(v),a[w].add(v),a[y].add(v),c[P].add(m),c[w].add(m),c[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,w=M.length;P<w;++P){const y=M[P],C=y.start,N=y.count;for(let U=C,O=C+N;U<O;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const x=new D,_=new D,L=new D,T=new D;function E(P){L.fromBufferAttribute(s,P),T.copy(L);const w=a[P];x.copy(w),x.sub(L.multiplyScalar(L.dot(w))).normalize(),_.crossVectors(T,w);const C=_.dot(c[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,C)}for(let P=0,w=M.length;P<w;++P){const y=M[P],C=y.start,N=y.count;for(let U=C,O=C+N;U<O;U+=3)E(t.getX(U+0)),E(t.getX(U+1)),E(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new tn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zl=new te,Ti=new pr,Ir=new ii,Jl=new D,Dr=new D,Ur=new D,Nr=new D,ra=new D,kr=new D,Ql=new D,Fr=new D;class S extends Ee{constructor(t=new Oe,e=new Ao){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){kr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ra.fromBufferAttribute(u,t),o?kr.addScaledVector(ra,h):kr.addScaledVector(ra.sub(e),h))}e.add(kr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(Ir.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Ir,Jl)===null||Ti.origin.distanceToSquared(Jl)>(t.far-t.near)**2))&&(Zl.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(Zl),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,L=x;_<L;_+=3){const T=a.getX(_),E=a.getX(_+1),P=a.getX(_+2);s=Or(this,p,t,n,l,h,u,T,E,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);s=Or(this,o,t,n,l,h,u,M,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,L=x;_<L;_+=3){const T=_,E=_+1,P=_+2;s=Or(this,p,t,n,l,h,u,T,E,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=m,x=m+1,_=m+2;s=Or(this,o,t,n,l,h,u,M,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Pp(i,t,e,n,s,r,o,a){let c;if(t.side===Qe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===wi,a),c===null)return null;Fr.copy(a),Fr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Fr);return l<e.near||l>e.far?null:{distance:l,point:Fr.clone(),object:i}}function Or(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Dr),i.getVertexPosition(c,Ur),i.getVertexPosition(l,Nr);const h=Pp(i,t,e,n,Dr,Ur,Nr,Ql);if(h){const u=new D;En.getBarycoord(Ql,Dr,Ur,Nr,u),s&&(h.uv=En.getInterpolatedAttribute(s,a,c,l,u,new Et)),r&&(h.uv1=En.getInterpolatedAttribute(r,a,c,l,u,new Et)),o&&(h.normal=En.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new D,materialIndex:0};En.getNormal(Dr,Ur,Nr,d.normal),h.face=d,h.barycoord=u}return h}class ct extends Oe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function g(v,m,p,M,x,_,L,T,E,P,w){const y=_/E,C=L/P,N=_/2,U=L/2,O=T/2,$=E+1,B=P+1;let j=0,z=0;const rt=new D;for(let pt=0;pt<B;pt++){const vt=pt*C-U;for(let bt=0;bt<$;bt++){const Nt=bt*y-N;rt[v]=Nt*M,rt[m]=vt*x,rt[p]=O,l.push(rt.x,rt.y,rt.z),rt[v]=0,rt[m]=0,rt[p]=T>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(bt/E),u.push(1-pt/P),j+=1}}for(let pt=0;pt<P;pt++)for(let vt=0;vt<E;vt++){const bt=d+vt+$*pt,Nt=d+vt+$*(pt+1),q=d+(vt+1)+$*(pt+1),at=d+(vt+1)+$*pt;c.push(bt,Nt,at),c.push(Nt,q,at),z+=6}a.addGroup(f,z,w),f+=z,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ct(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Es(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=Es(i[e]);for(const s in n)t[s]=n[s]}return t}function Lp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ju(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const or={clone:Es,merge:Xe};var Ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ge extends Xi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ip,this.fragmentShader=Dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=Lp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qu extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new D,th=new Et,eh=new Et;class Ke extends Qu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,th,eh),e.subVectors(eh,th)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const as=-90,cs=1;class Up extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ke(as,cs,t,e);s.layers=this.layers,this.add(s);const r=new Ke(as,cs,t,e);r.layers=this.layers,this.add(r);const o=new Ke(as,cs,t,e);o.layers=this.layers,this.add(o);const a=new Ke(as,cs,t,e);a.layers=this.layers,this.add(a);const c=new Ke(as,cs,t,e);c.layers=this.layers,this.add(c);const l=new Ke(as,cs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class td extends He{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ys,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Np extends ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new td(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:In}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ct(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:jn});r.uniforms.tEquirect.value=e;const o=new S(s,r),a=e.minFilter;return e.minFilter===Fi&&(e.minFilter=In),new Up(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const oa=new D,kp=new D,Fp=new Qt;class Ii{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=oa.subVectors(n,e).cross(kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(oa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fp.getNormalMatrix(t),s=this.coplanarPoint(oa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new ii,Br=new D;class Zc{constructor(t=new Ii,e=new Ii,n=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],M=s[13],x=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+o,d+h,m+g,_+M).normalize(),n[3].setComponents(c-o,d-h,m-g,_-M).normalize(),n[4].setComponents(c-a,d-u,m-v,_-x).normalize(),e===Yn)n[5].setComponents(c+a,d+u,m+v,_+x).normalize();else if(e===uo)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Br.x=s.normal.x>0?t.max.x:t.min.x,Br.y=s.normal.y>0?t.max.y:t.min.y,Br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ed(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Op(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Rs extends Oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const M=p*d-o;for(let x=0;x<l;x++){const _=x*u-r;g.push(_,-M,0),v.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const x=M+l*p,_=M+l*(p+1),L=M+1+l*(p+1),T=M+1+l*p;f.push(x,_,T),f.push(_,L,T)}this.setIndex(f),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zp=`#ifdef USE_ALPHAHASH
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
#endif`,Vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xp=`#ifdef USE_AOMAP
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
#endif`,$p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qp=`#ifdef USE_BATCHING
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
#endif`,Yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
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
#endif`,Qp=`#ifdef USE_BUMPMAP
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cm=`#define PI 3.141592653589793
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
} // validated`,lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hm=`vec3 transformedNormal = objectNormal;
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
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",gm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tm=`#ifdef USE_GRADIENTMAP
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
}`,Am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pm=`uniform bool receiveShadow;
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
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
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
#endif`,Fm=`struct PhysicalMaterial {
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
}`,Om=`
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
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
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
#endif`,zm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ym=`#if defined( USE_POINTS_UV )
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
#endif`,jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`#ifdef USE_MORPHTARGETS
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
#endif`,e0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
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
#endif`,c0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b0=`float getShadowMask() {
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
}`,S0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A0=`#ifdef USE_SKINNING
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
#endif`,C0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#ifdef USE_TRANSMISSION
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`#include <common>
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
}`,X0=`#if DEPTH_PACKING == 3200
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
}`,$0=`#define DISTANCE
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
}`,q0=`#define DISTANCE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`uniform float scale;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,J0=`#include <common>
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
}`,Q0=`uniform vec3 diffuse;
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
}`,tg=`#define LAMBERT
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
}`,eg=`#define LAMBERT
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
}`,ng=`#define MATCAP
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
}`,ig=`#define MATCAP
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
}`,sg=`#define NORMAL
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
}`,rg=`#define NORMAL
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
}`,og=`#define PHONG
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
}`,ag=`#define PHONG
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
}`,cg=`#define STANDARD
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
}`,lg=`#define STANDARD
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
}`,hg=`#define TOON
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
}`,ug=`#define TOON
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
}`,dg=`uniform float size;
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
}`,fg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 color;
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
}`,gg=`uniform float rotation;
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
}`,vg=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:Bp,alphahash_pars_fragment:zp,alphamap_fragment:Vp,alphamap_pars_fragment:Gp,alphatest_fragment:Hp,alphatest_pars_fragment:Wp,aomap_fragment:Xp,aomap_pars_fragment:$p,batching_pars_vertex:qp,batching_vertex:Yp,begin_vertex:jp,beginnormal_vertex:Kp,bsdfs:Zp,iridescence_fragment:Jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:tm,clipping_planes_pars_fragment:em,clipping_planes_pars_vertex:nm,clipping_planes_vertex:im,color_fragment:sm,color_pars_fragment:rm,color_pars_vertex:om,color_vertex:am,common:cm,cube_uv_reflection_fragment:lm,defaultnormal_vertex:hm,displacementmap_pars_vertex:um,displacementmap_vertex:dm,emissivemap_fragment:fm,emissivemap_pars_fragment:pm,colorspace_fragment:mm,colorspace_pars_fragment:gm,envmap_fragment:vm,envmap_common_pars_fragment:_m,envmap_pars_fragment:xm,envmap_pars_vertex:ym,envmap_physical_pars_fragment:Lm,envmap_vertex:wm,fog_vertex:Mm,fog_pars_vertex:bm,fog_fragment:Sm,fog_pars_fragment:Em,gradientmap_pars_fragment:Tm,lightmap_pars_fragment:Am,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Rm,lights_pars_begin:Pm,lights_toon_fragment:Im,lights_toon_pars_fragment:Dm,lights_phong_fragment:Um,lights_phong_pars_fragment:Nm,lights_physical_fragment:km,lights_physical_pars_fragment:Fm,lights_fragment_begin:Om,lights_fragment_maps:Bm,lights_fragment_end:zm,logdepthbuf_fragment:Vm,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:Hm,logdepthbuf_vertex:Wm,map_fragment:Xm,map_pars_fragment:$m,map_particle_fragment:qm,map_particle_pars_fragment:Ym,metalnessmap_fragment:jm,metalnessmap_pars_fragment:Km,morphinstance_vertex:Zm,morphcolor_vertex:Jm,morphnormal_vertex:Qm,morphtarget_pars_vertex:t0,morphtarget_vertex:e0,normal_fragment_begin:n0,normal_fragment_maps:i0,normal_pars_fragment:s0,normal_pars_vertex:r0,normal_vertex:o0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:h0,iridescence_pars_fragment:u0,opaque_fragment:d0,packing:f0,premultiplied_alpha_fragment:p0,project_vertex:m0,dithering_fragment:g0,dithering_pars_fragment:v0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:x0,shadowmap_pars_fragment:y0,shadowmap_pars_vertex:w0,shadowmap_vertex:M0,shadowmask_pars_fragment:b0,skinbase_vertex:S0,skinning_pars_vertex:E0,skinning_vertex:T0,skinnormal_vertex:A0,specularmap_fragment:C0,specularmap_pars_fragment:R0,tonemapping_fragment:P0,tonemapping_pars_fragment:L0,transmission_fragment:I0,transmission_pars_fragment:D0,uv_pars_fragment:U0,uv_pars_vertex:N0,uv_vertex:k0,worldpos_vertex:F0,background_vert:O0,background_frag:B0,backgroundCube_vert:z0,backgroundCube_frag:V0,cube_vert:G0,cube_frag:H0,depth_vert:W0,depth_frag:X0,distanceRGBA_vert:$0,distanceRGBA_frag:q0,equirect_vert:Y0,equirect_frag:j0,linedashed_vert:K0,linedashed_frag:Z0,meshbasic_vert:J0,meshbasic_frag:Q0,meshlambert_vert:tg,meshlambert_frag:eg,meshmatcap_vert:ng,meshmatcap_frag:ig,meshnormal_vert:sg,meshnormal_frag:rg,meshphong_vert:og,meshphong_frag:ag,meshphysical_vert:cg,meshphysical_frag:lg,meshtoon_vert:hg,meshtoon_frag:ug,points_vert:dg,points_frag:fg,shadow_vert:pg,shadow_frag:mg,sprite_vert:gg,sprite_frag:vg},Ft={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Ln={basic:{uniforms:Xe([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Xe([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Dt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Xe([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Xe([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Xe([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Dt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Xe([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Xe([Ft.points,Ft.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Xe([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Xe([Ft.common,Ft.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Xe([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Xe([Ft.sprite,Ft.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Xe([Ft.common,Ft.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Xe([Ft.lights,Ft.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Ln.physical={uniforms:Xe([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const zr={r:0,b:0,g:0},Ci=new Rn,_g=new te;function xg(i,t,e,n,s,r,o){const a=new Dt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function v(M){let x=!1;const _=g(M);_===null?p(a,c):_&&_.isColor&&(p(_,1),x=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const _=g(x);_&&(_.isCubeTexture||_.mapping===Eo)?(h===void 0&&(h=new S(new ct(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:Es(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(x.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_g.makeRotationFromEuler(Ci)),h.material.toneMapped=ie.getTransfer(_.colorSpace)!==fe,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new S(new Rs(2,2),new Ge({name:"BackgroundMaterial",uniforms:Es(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ie.getTransfer(_.colorSpace)!==fe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,x){M.getRGB(zr,Ju(i)),n.buffers.color.setClear(zr.r,zr.g,zr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:v,addToRenderList:m}}function yg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,C,N,U,O){let $=!1;const B=u(U,N,C);r!==B&&(r=B,l(r.object)),$=f(y,U,N,O),$&&g(y,U,N,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,_(y,C,N,U),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,C,N){const U=N.wireframe===!0;let O=n[y.id];O===void 0&&(O={},n[y.id]=O);let $=O[C.id];$===void 0&&($={},O[C.id]=$);let B=$[U];return B===void 0&&(B=d(c()),$[U]=B),B}function d(y){const C=[],N=[],U=[];for(let O=0;O<e;O++)C[O]=0,N[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,C,N,U){const O=r.attributes,$=C.attributes;let B=0;const j=N.getAttributes();for(const z in j)if(j[z].location>=0){const pt=O[z];let vt=$[z];if(vt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor)),pt===void 0||pt.attribute!==vt||vt&&pt.data!==vt.data)return!0;B++}return r.attributesNum!==B||r.index!==U}function g(y,C,N,U){const O={},$=C.attributes;let B=0;const j=N.getAttributes();for(const z in j)if(j[z].location>=0){let pt=$[z];pt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor));const vt={};vt.attribute=pt,pt&&pt.data&&(vt.data=pt.data),O[z]=vt,B++}r.attributes=O,r.attributesNum=B,r.index=U}function v(){const y=r.newAttributes;for(let C=0,N=y.length;C<N;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){const N=r.newAttributes,U=r.enabledAttributes,O=r.attributeDivisors;N[y]=1,U[y]===0&&(i.enableVertexAttribArray(y),U[y]=1),O[y]!==C&&(i.vertexAttribDivisor(y,C),O[y]=C)}function M(){const y=r.newAttributes,C=r.enabledAttributes;for(let N=0,U=C.length;N<U;N++)C[N]!==y[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function x(y,C,N,U,O,$,B){B===!0?i.vertexAttribIPointer(y,C,N,O,$):i.vertexAttribPointer(y,C,N,U,O,$)}function _(y,C,N,U){v();const O=U.attributes,$=N.getAttributes(),B=C.defaultAttributeValues;for(const j in $){const z=$[j];if(z.location>=0){let rt=O[j];if(rt===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),rt!==void 0){const pt=rt.normalized,vt=rt.itemSize,bt=t.get(rt);if(bt===void 0)continue;const Nt=bt.buffer,q=bt.type,at=bt.bytesPerElement,St=q===i.INT||q===i.UNSIGNED_INT||rt.gpuType===Gc;if(rt.isInterleavedBufferAttribute){const lt=rt.data,It=lt.stride,Bt=rt.offset;if(lt.isInstancedInterleavedBuffer){for(let kt=0;kt<z.locationSize;kt++)p(z.location+kt,lt.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let kt=0;kt<z.locationSize;kt++)m(z.location+kt);i.bindBuffer(i.ARRAY_BUFFER,Nt);for(let kt=0;kt<z.locationSize;kt++)x(z.location+kt,vt/z.locationSize,q,pt,It*at,(Bt+vt/z.locationSize*kt)*at,St)}else{if(rt.isInstancedBufferAttribute){for(let lt=0;lt<z.locationSize;lt++)p(z.location+lt,rt.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let lt=0;lt<z.locationSize;lt++)m(z.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Nt);for(let lt=0;lt<z.locationSize;lt++)x(z.location+lt,vt/z.locationSize,q,pt,vt*at,vt/z.locationSize*lt*at,St)}}else if(B!==void 0){const pt=B[j];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(z.location,pt);break;case 3:i.vertexAttrib3fv(z.location,pt);break;case 4:i.vertexAttrib4fv(z.location,pt);break;default:i.vertexAttrib1fv(z.location,pt)}}}}M()}function L(){P();for(const y in n){const C=n[y];for(const N in C){const U=C[N];for(const O in U)h(U[O].object),delete U[O];delete C[N]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const N in C){const U=C[N];for(const O in U)h(U[O].object),delete U[O];delete C[N]}delete n[y.id]}function E(y){for(const C in n){const N=n[C];if(N[y.id]===void 0)continue;const U=N[y.id];for(const O in U)h(U[O].object),delete U[O];delete N[y.id]}}function P(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function wg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Mg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==dn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===Dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Qn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Tn&&!P)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:L,maxSamples:T}}function bg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ii,a=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,x=M*4;let _=p.clippingState||null;c.value=_,_=h(g,d,x,f);for(let L=0;L!==x;++L)_[L]=e[L];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=f;x!==v;++x,_+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Sg(i){let t=new WeakMap;function e(o,a){return a===Xa?o.mapping=ys:a===$a&&(o.mapping=ws),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xa||a===$a)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Np(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Jc extends Qu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ds=4,nh=[.125,.215,.35,.446,.526,.582],Ni=20,aa=new Jc,ih=new Dt;let ca=null,la=0,ha=0,ua=!1;const Di=(1+Math.sqrt(5))/2,ls=1/Di,sh=[new D(-Di,ls,0),new D(Di,ls,0),new D(-ls,0,Di),new D(ls,0,Di),new D(0,Di,-ls),new D(0,Di,ls),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class rh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ca=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,la,ha),this._renderer.xr.enabled=ua,t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Dn,format:dn,colorSpace:As,depthBuffer:!1},s=oh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eg(r)),this._blurMaterial=Tg(r,t,e)}return s}_compileMaterial(t){const e=new S(this._lodPlanes[0],t);this._renderer.compile(e,aa)}_sceneToCubeUV(t,e,n,s){const a=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ih),h.toneMapping=xi,h.autoClear=!1;const f=new Ao({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new S(new ct,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(ih),v=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;Vr(s,M*x,p>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ys||t.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new S(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Vr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,aa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sh[(s-r-1)%sh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new S(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ni-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ni;m>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const p=[];let M=0;for(let E=0;E<Ni;++E){const P=E/v,w=Math.exp(-P*P/2);p.push(w),E===0?M+=w:E<m&&(M+=2*w)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const _=this._sizeLods[s],L=3*_*(s>x-ds?s-x+ds:0),T=4*(this._cubeSize-_);Vr(e,L,T,3*_,2*_),c.setRenderTarget(e),c.render(u,aa)}}function Eg(i){const t=[],e=[],n=[];let s=i;const r=i-ds+1+nh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ds?c=nh[o-i+ds-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*f),x=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let T=0;T<f;T++){const E=T%3*2/3-1,P=T>2?0:-1,w=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];M.set(w,v*g*T),x.set(d,m*g*T);const y=[T,T,T,T,T,T];_.set(y,p*g*T)}const L=new Oe;L.setAttribute("position",new tn(M,v)),L.setAttribute("uv",new tn(x,m)),L.setAttribute("faceIndex",new tn(_,p)),t.push(L),s>ds&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function oh(i,t,e){const n=new ln(i,t,e);return n.texture.mapping=Eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Tg(i,t,e){const n=new Float32Array(Ni),s=new D(0,1,0);return new Ge({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function ah(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function ch(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Qc(){return`

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
	`}function Ag(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Xa||c===$a,h=c===ys||c===ws;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new rh(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new rh(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Cg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&$s("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Rg(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let x=0,_=M.length;x<_;x+=3){const L=M[x+0],T=M[x+1],E=M[x+2];d.push(L,T,T,E,E,L)}}else if(g!==void 0){const M=g.array;v=g.version;for(let x=0,_=M.length/3-1;x<_;x+=3){const L=x+0,T=x+1,E=x+2;d.push(L,T,T,E,E,L)}}else return;const m=new($u(d)?Zu:Ku)(d,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Pg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*v[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Lg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ig(i,t,e){const n=new WeakMap,s=new ae;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let w=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let _=a.attributes.position.count*x,L=1;_>t.maxTextureSize&&(L=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const T=new Float32Array(_*L*4*u),E=new Yu(T,_,L,u);E.type=Tn,E.needsUpdate=!0;const P=x*4;for(let y=0;y<u;y++){const C=m[y],N=p[y],U=M[y],O=_*L*4*y;for(let $=0;$<C.count;$++){const B=$*P;f===!0&&(s.fromBufferAttribute(C,$),T[O+B+0]=s.x,T[O+B+1]=s.y,T[O+B+2]=s.z,T[O+B+3]=0),g===!0&&(s.fromBufferAttribute(N,$),T[O+B+4]=s.x,T[O+B+5]=s.y,T[O+B+6]=s.z,T[O+B+7]=0),v===!0&&(s.fromBufferAttribute(U,$),T[O+B+8]=s.x,T[O+B+9]=s.y,T[O+B+10]=s.z,T[O+B+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new Et(_,L)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Dg(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class fo extends He{constructor(t,e,n,s,r,o,a,c,l,h=gs){if(h!==gs&&h!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gs&&(n=zi),n===void 0&&h===bs&&(n=Ms),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const nd=new He,lh=new fo(1,1),id=new Yu,sd=new yp,rd=new td,hh=[],uh=[],dh=new Float32Array(16),fh=new Float32Array(9),ph=new Float32Array(4);function Ps(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=hh[s];if(r===void 0&&(r=new Float32Array(s),hh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Co(i,t){let e=uh[t];e===void 0&&(e=new Int32Array(t),uh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ug(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function Fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function Og(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;ph.set(n),i.uniformMatrix2fv(this.addr,!1,ph),De(e,n)}}function Bg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;fh.set(n),i.uniformMatrix3fv(this.addr,!1,fh),De(e,n)}}function zg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;dh.set(n),i.uniformMatrix4fv(this.addr,!1,dh),De(e,n)}}function Vg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function Hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function Wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function Xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function jg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lh.compareFunction=Xu,r=lh):r=nd,e.setTexture2D(t||r,s)}function Kg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||sd,s)}function Zg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||rd,s)}function Jg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||id,s)}function Qg(i){switch(i){case 5126:return Ug;case 35664:return Ng;case 35665:return kg;case 35666:return Fg;case 35674:return Og;case 35675:return Bg;case 35676:return zg;case 5124:case 35670:return Vg;case 35667:case 35671:return Gg;case 35668:case 35672:return Hg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return $g;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}function tv(i,t){i.uniform1fv(this.addr,t)}function ev(i,t){const e=Ps(t,this.size,2);i.uniform2fv(this.addr,e)}function nv(i,t){const e=Ps(t,this.size,3);i.uniform3fv(this.addr,e)}function iv(i,t){const e=Ps(t,this.size,4);i.uniform4fv(this.addr,e)}function sv(i,t){const e=Ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function rv(i,t){const e=Ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ov(i,t){const e=Ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function av(i,t){i.uniform1iv(this.addr,t)}function cv(i,t){i.uniform2iv(this.addr,t)}function lv(i,t){i.uniform3iv(this.addr,t)}function hv(i,t){i.uniform4iv(this.addr,t)}function uv(i,t){i.uniform1uiv(this.addr,t)}function dv(i,t){i.uniform2uiv(this.addr,t)}function fv(i,t){i.uniform3uiv(this.addr,t)}function pv(i,t){i.uniform4uiv(this.addr,t)}function mv(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||nd,r[o])}function gv(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||sd,r[o])}function vv(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||rd,r[o])}function _v(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||id,r[o])}function xv(i){switch(i){case 5126:return tv;case 35664:return ev;case 35665:return nv;case 35666:return iv;case 35674:return sv;case 35675:return rv;case 35676:return ov;case 5124:case 35670:return av;case 35667:case 35671:return cv;case 35668:case 35672:return lv;case 35669:case 35673:return hv;case 5125:return uv;case 36294:return dv;case 36295:return fv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return _v}}class yv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qg(e.type)}}class wv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xv(e.type)}}class Mv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function mh(i,t){i.seq.push(t),i.map[t.id]=t}function bv(i,t,e){const n=i.name,s=n.length;for(da.lastIndex=0;;){const r=da.exec(n),o=da.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){mh(e,l===void 0?new yv(a,i,t):new wv(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Mv(a),mh(e,u)),e=u}}}class oo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);bv(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function gh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Sv=37297;let Ev=0;function Tv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const vh=new Qt;function Av(i){ie._getMatrix(vh,ie.workingColorSpace,i);const t=`mat3( ${vh.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case To:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function _h(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Tv(i.getShaderSource(t),o)}else return s}function Cv(i,t){const e=Av(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rv(i,t){let e;switch(t){case Cu:e="Linear";break;case Ru:e="Reinhard";break;case Pu:e="Cineon";break;case Vc:e="ACESFilmic";break;case Lu:e="AgX";break;case Iu:e="Neutral";break;case Ff:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gr=new D;function Pv(){ie.getLuminanceCoefficients(Gr);const i=Gr.x.toFixed(4),t=Gr.y.toFixed(4),e=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function Iv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function qs(i){return i!==""}function xh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(i){return i.replace(Uv,kv)}const Nv=new Map;function kv(i,t){let e=ee[t];if(e===void 0){const n=Nv.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bc(e)}const Fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wh(i){return i.replace(Fv,Ov)}function Ov(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mh(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Bv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ua?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function zv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ys:case ws:t="ENVMAP_TYPE_CUBE";break;case Eo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function Gv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Au:t="ENVMAP_BLENDING_MULTIPLY";break;case Nf:t="ENVMAP_BLENDING_MIX";break;case kf:t="ENVMAP_BLENDING_ADD";break}return t}function Hv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Bv(e),l=zv(e),h=Vv(e),u=Gv(e),d=Hv(e),f=Lv(e),g=Iv(r),v=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qs).join(`
`),p.length>0&&(p+=`
`)):(m=[Mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),p=[Mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?ee.tonemapping_pars_fragment:"",e.toneMapping!==xi?Rv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Cv("linearToOutputTexel",e.outputColorSpace),Pv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qs).join(`
`)),o=bc(o),o=xh(o,e),o=yh(o,e),a=bc(a),a=xh(a,e),a=yh(a,e),o=wh(o),a=wh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+o,_=M+p+a,L=gh(s,s.VERTEX_SHADER,x),T=gh(s,s.FRAGMENT_SHADER,_);s.attachShader(v,L),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(v).trim(),U=s.getShaderInfoLog(L).trim(),O=s.getShaderInfoLog(T).trim();let $=!0,B=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,T);else{const j=_h(s,L,"vertex"),z=_h(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+j+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||O==="")&&(B=!1);B&&(C.diagnostics={runnable:$,programLog:N,vertexShader:{log:U,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(L),s.deleteShader(T),P=new oo(s,v),w=Dv(s,v)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Sv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ev++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=T,this}let Xv=0;class $v{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qv(t),e.set(t,n)),n}}class qv{constructor(t){this.id=Xv++,this.code=t,this.usedTimes=0}}function Yv(i,t,e,n,s,r,o){const a=new Kc,c=new $v,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,y,C,N,U){const O=N.fog,$=U.geometry,B=w.isMeshStandardMaterial?N.environment:null,j=(w.isMeshStandardMaterial?e:t).get(w.envMap||B),z=j&&j.mapping===Eo?j.image.height:null,rt=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const pt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,vt=pt!==void 0?pt.length:0;let bt=0;$.morphAttributes.position!==void 0&&(bt=1),$.morphAttributes.normal!==void 0&&(bt=2),$.morphAttributes.color!==void 0&&(bt=3);let Nt,q,at,St;if(rt){const de=Ln[rt];Nt=de.vertexShader,q=de.fragmentShader}else Nt=w.vertexShader,q=w.fragmentShader,c.update(w),at=c.getVertexShaderID(w),St=c.getFragmentShaderID(w);const lt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),Bt=U.isInstancedMesh===!0,kt=U.isBatchedMesh===!0,mt=!!w.map,X=!!w.matcap,it=!!j,I=!!w.aoMap,Ct=!!w.lightMap,et=!!w.bumpMap,ht=!!w.normalMap,nt=!!w.displacementMap,Mt=!!w.emissiveMap,_t=!!w.metalnessMap,R=!!w.roughnessMap,b=w.anisotropy>0,V=w.clearcoat>0,K=w.dispersion>0,ot=w.iridescence>0,Z=w.sheen>0,Ut=w.transmission>0,At=b&&!!w.anisotropyMap,Y=V&&!!w.clearcoatMap,wt=V&&!!w.clearcoatNormalMap,tt=V&&!!w.clearcoatRoughnessMap,Lt=ot&&!!w.iridescenceMap,Ht=ot&&!!w.iridescenceThicknessMap,ft=Z&&!!w.sheenColorMap,ut=Z&&!!w.sheenRoughnessMap,Ot=!!w.specularMap,Gt=!!w.specularColorMap,qt=!!w.specularIntensityMap,k=Ut&&!!w.transmissionMap,Rt=Ut&&!!w.thicknessMap,st=!!w.gradientMap,gt=!!w.alphaMap,yt=w.alphaTest>0,zt=!!w.alphaHash,Zt=!!w.extensions;let Ce=xi;w.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ce=i.toneMapping);const Be={shaderID:rt,shaderType:w.type,shaderName:w.name,vertexShader:Nt,fragmentShader:q,defines:w.defines,customVertexShaderID:at,customFragmentShaderID:St,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:kt,batchingColor:kt&&U._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&U.instanceColor!==null,instancingMorph:Bt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:As,alphaToCoverage:!!w.alphaToCoverage,map:mt,matcap:X,envMap:it,envMapMode:it&&j.mapping,envMapCubeUVHeight:z,aoMap:I,lightMap:Ct,bumpMap:et,normalMap:ht,displacementMap:d&&nt,emissiveMap:Mt,normalMapObjectSpace:ht&&w.normalMapType===Gf,normalMapTangentSpace:ht&&w.normalMapType===Wu,metalnessMap:_t,roughnessMap:R,anisotropy:b,anisotropyMap:At,clearcoat:V,clearcoatMap:Y,clearcoatNormalMap:wt,clearcoatRoughnessMap:tt,dispersion:K,iridescence:ot,iridescenceMap:Lt,iridescenceThicknessMap:Ht,sheen:Z,sheenColorMap:ft,sheenRoughnessMap:ut,specularMap:Ot,specularColorMap:Gt,specularIntensityMap:qt,transmission:Ut,transmissionMap:k,thicknessMap:Rt,gradientMap:st,opaque:w.transparent===!1&&w.blending===ms&&w.alphaToCoverage===!1,alphaMap:gt,alphaTest:yt,alphaHash:zt,combine:w.combine,mapUv:mt&&v(w.map.channel),aoMapUv:I&&v(w.aoMap.channel),lightMapUv:Ct&&v(w.lightMap.channel),bumpMapUv:et&&v(w.bumpMap.channel),normalMapUv:ht&&v(w.normalMap.channel),displacementMapUv:nt&&v(w.displacementMap.channel),emissiveMapUv:Mt&&v(w.emissiveMap.channel),metalnessMapUv:_t&&v(w.metalnessMap.channel),roughnessMapUv:R&&v(w.roughnessMap.channel),anisotropyMapUv:At&&v(w.anisotropyMap.channel),clearcoatMapUv:Y&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:wt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:ut&&v(w.sheenRoughnessMap.channel),specularMapUv:Ot&&v(w.specularMap.channel),specularColorMapUv:Gt&&v(w.specularColorMap.channel),specularIntensityMapUv:qt&&v(w.specularIntensityMap.channel),transmissionMapUv:k&&v(w.transmissionMap.channel),thicknessMapUv:Rt&&v(w.thicknessMap.channel),alphaMapUv:gt&&v(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ht||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!$.attributes.uv&&(mt||gt),fog:!!O,useFog:w.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:It,skinning:U.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:bt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:mt&&w.map.isVideoTexture===!0&&ie.getTransfer(w.map.colorSpace)===fe,decodeVideoTextureEmissive:Mt&&w.emissiveMap.isVideoTexture===!0&&ie.getTransfer(w.emissiveMap.colorSpace)===fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===qn,flipSided:w.side===Qe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Zt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&w.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)y.push(C),y.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(M(y,w),x(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function M(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function x(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){const y=g[w.type];let C;if(y){const N=Ln[y];C=or.clone(N.uniforms)}else C=w.uniforms;return C}function L(w,y){let C;for(let N=0,U=h.length;N<U;N++){const O=h[N];if(O.cacheKey===y){C=O,++C.usedTimes;break}}return C===void 0&&(C=new Wv(i,y,w,r),h.push(C)),C}function T(w){if(--w.usedTimes===0){const y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function E(w){c.remove(w)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:P}}function jv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Kv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Sh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Kv),n.length>1&&n.sort(d||bh),s.length>1&&s.sort(d||bh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Zv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Sh,i.set(n,[o])):s>=r.length?(o=new Sh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Jv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Dt};break;case"SpotLight":e={position:new D,direction:new D,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Qv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let t_=0;function e_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function n_(i){const t=new Jv,e=Qv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new te,o=new te;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,x=0,_=0,L=0,T=0,E=0;l.sort(e_);for(let w=0,y=l.length;w<y;w++){const C=l[w],N=C.color,U=C.intensity,O=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=N.r*U,u+=N.g*U,d+=N.b*U;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],U);E++}else if(C.isDirectionalLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,z=e.get(C);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=C.shadow.matrix,M++}n.directional[f]=B,f++}else if(C.isSpotLight){const B=t.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(N).multiplyScalar(U),B.distance=O,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[v]=B;const j=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,j.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[v]=j.matrix,C.castShadow){const z=e.get(C);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=$,_++}v++}else if(C.isRectAreaLight){const B=t.get(C);B.color.copy(N).multiplyScalar(U),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=B,m++}else if(C.isPointLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const j=C.shadow,z=e.get(C);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=C.shadow.matrix,x++}n.point[g]=B,g++}else if(C.isHemisphereLight){const B=t.get(C);B.skyColor.copy(C.color).multiplyScalar(U),B.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==x||P.numSpotShadows!==_||P.numSpotMaps!==L||P.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=x,P.numSpotShadows=_,P.numSpotMaps=L,P.numLightProbes=E,n.version=t_++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const x=l[p];if(x.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(x.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Eh(i){const t=new n_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function i_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Eh(i),t.set(s,[a])):r>=o.length?(a=new Eh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class od extends Xi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class s_ extends Xi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const r_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o_=`uniform sampler2D shadow_pass;
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
}`;function a_(i,t,e){let n=new Zc;const s=new Et,r=new Et,o=new ae,a=new od({depthPacking:Hu}),c=new s_,l={},h=e.maxTextureSize,u={[wi]:Qe,[Qe]:wi,[qn]:qn},d=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:r_,fragmentShader:o_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Oe;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new S(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let p=this.type;this.render=function(T,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(jn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=p!==Xn&&this.type===Xn,O=p===Xn&&this.type!==Xn;for(let $=0,B=T.length;$<B;$++){const j=T[$],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const rt=z.getFrameExtents();if(s.multiply(rt),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,z.mapSize.y=r.y)),z.map===null||U===!0||O===!0){const vt=this.type!==Xn?{minFilter:qe,magFilter:qe}:{};z.map!==null&&z.map.dispose(),z.map=new ln(s.x,s.y,vt),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const pt=z.getViewportCount();for(let vt=0;vt<pt;vt++){const bt=z.getViewport(vt);o.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),N.viewport(o),z.updateMatrices(j,vt),n=z.getFrustum(),_(E,P,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===Xn&&M(z,P),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,y,C)};function M(T,E){const P=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ln(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,P,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,P,f,v,null)}function x(T,E,P,w){let y=null;const C=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)y=C;else if(y=P.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=y.uuid,U=E.uuid;let O=l[N];O===void 0&&(O={},l[N]=O);let $=O[U];$===void 0&&($=y.clone(),O[U]=$,E.addEventListener("dispose",L)),y=$}if(y.visible=E.visible,y.wireframe=E.wireframe,w===Xn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=i.properties.get(y);N.light=P}return y}function _(T,E,P,w,y){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Xn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const U=t.update(T),O=T.material;if(Array.isArray(O)){const $=U.groups;for(let B=0,j=$.length;B<j;B++){const z=$[B],rt=O[z.materialIndex];if(rt&&rt.visible){const pt=x(T,rt,w,y);T.onBeforeShadow(i,T,E,P,U,pt,z),i.renderBufferDirect(P,null,U,pt,T,z),T.onAfterShadow(i,T,E,P,U,pt,z)}}}else if(O.visible){const $=x(T,O,w,y);T.onBeforeShadow(i,T,E,P,U,$,null),i.renderBufferDirect(P,null,U,$,T,null),T.onAfterShadow(i,T,E,P,U,$,null)}}const N=T.children;for(let U=0,O=N.length;U<O;U++)_(N[U],E,P,w,y)}function L(T){T.target.removeEventListener("dispose",L);for(const P in l){const w=l[P],y=T.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const c_={[Oa]:Ba,[za]:Ha,[Va]:Wa,[xs]:Ga,[Ba]:Oa,[Ha]:za,[Wa]:Va,[Ga]:xs};function l_(i,t){function e(){let k=!1;const Rt=new ae;let st=null;const gt=new ae(0,0,0,0);return{setMask:function(yt){st!==yt&&!k&&(i.colorMask(yt,yt,yt,yt),st=yt)},setLocked:function(yt){k=yt},setClear:function(yt,zt,Zt,Ce,Be){Be===!0&&(yt*=Ce,zt*=Ce,Zt*=Ce),Rt.set(yt,zt,Zt,Ce),gt.equals(Rt)===!1&&(i.clearColor(yt,zt,Zt,Ce),gt.copy(Rt))},reset:function(){k=!1,st=null,gt.set(-1,0,0,0)}}}function n(){let k=!1,Rt=!1,st=null,gt=null,yt=null;return{setReversed:function(zt){if(Rt!==zt){const Zt=t.get("EXT_clip_control");Rt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const Ce=yt;yt=null,this.setClear(Ce)}Rt=zt},getReversed:function(){return Rt},setTest:function(zt){zt?lt(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(zt){st!==zt&&!k&&(i.depthMask(zt),st=zt)},setFunc:function(zt){if(Rt&&(zt=c_[zt]),gt!==zt){switch(zt){case Oa:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case za:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Ha:i.depthFunc(i.GREATER);break;case Wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=zt}},setLocked:function(zt){k=zt},setClear:function(zt){yt!==zt&&(Rt&&(zt=1-zt),i.clearDepth(zt),yt=zt)},reset:function(){k=!1,st=null,gt=null,yt=null,Rt=!1}}}function s(){let k=!1,Rt=null,st=null,gt=null,yt=null,zt=null,Zt=null,Ce=null,Be=null;return{setTest:function(de){k||(de?lt(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(de){Rt!==de&&!k&&(i.stencilMask(de),Rt=de)},setFunc:function(de,vn,Fn){(st!==de||gt!==vn||yt!==Fn)&&(i.stencilFunc(de,vn,Fn),st=de,gt=vn,yt=Fn)},setOp:function(de,vn,Fn){(zt!==de||Zt!==vn||Ce!==Fn)&&(i.stencilOp(de,vn,Fn),zt=de,Zt=vn,Ce=Fn)},setLocked:function(de){k=de},setClear:function(de){Be!==de&&(i.clearStencil(de),Be=de)},reset:function(){k=!1,Rt=null,st=null,gt=null,yt=null,zt=null,Zt=null,Ce=null,Be=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,x=null,_=null,L=null,T=null,E=new Dt(0,0,0),P=0,w=!1,y=null,C=null,N=null,U=null,O=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,j=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(z)[1]),B=j>=1):z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),B=j>=2);let rt=null,pt={};const vt=i.getParameter(i.SCISSOR_BOX),bt=i.getParameter(i.VIEWPORT),Nt=new ae().fromArray(vt),q=new ae().fromArray(bt);function at(k,Rt,st,gt){const yt=new Uint8Array(4),zt=i.createTexture();i.bindTexture(k,zt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<st;Zt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Rt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(Rt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return zt}const St={};St[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(xs),et(!1),ht(Tl),lt(i.CULL_FACE),I(jn);function lt(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function It(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Bt(k,Rt){return u[k]!==Rt?(i.bindFramebuffer(k,Rt),u[k]=Rt,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Rt),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Rt),!0):!1}function kt(k,Rt){let st=f,gt=!1;if(k){st=d.get(Rt),st===void 0&&(st=[],d.set(Rt,st));const yt=k.textures;if(st.length!==yt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let zt=0,Zt=yt.length;zt<Zt;zt++)st[zt]=i.COLOR_ATTACHMENT0+zt;st.length=yt.length,gt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,gt=!0);gt&&i.drawBuffers(st)}function mt(k){return g!==k?(i.useProgram(k),g=k,!0):!1}const X={[Ui]:i.FUNC_ADD,[_f]:i.FUNC_SUBTRACT,[xf]:i.FUNC_REVERSE_SUBTRACT};X[yf]=i.MIN,X[wf]=i.MAX;const it={[Mf]:i.ZERO,[bf]:i.ONE,[Sf]:i.SRC_COLOR,[ka]:i.SRC_ALPHA,[Pf]:i.SRC_ALPHA_SATURATE,[Cf]:i.DST_COLOR,[Tf]:i.DST_ALPHA,[Ef]:i.ONE_MINUS_SRC_COLOR,[Fa]:i.ONE_MINUS_SRC_ALPHA,[Rf]:i.ONE_MINUS_DST_COLOR,[Af]:i.ONE_MINUS_DST_ALPHA,[Lf]:i.CONSTANT_COLOR,[If]:i.ONE_MINUS_CONSTANT_COLOR,[Df]:i.CONSTANT_ALPHA,[Uf]:i.ONE_MINUS_CONSTANT_ALPHA};function I(k,Rt,st,gt,yt,zt,Zt,Ce,Be,de){if(k===jn){v===!0&&(It(i.BLEND),v=!1);return}if(v===!1&&(lt(i.BLEND),v=!0),k!==vf){if(k!==m||de!==w){if((p!==Ui||_!==Ui)&&(i.blendEquation(i.FUNC_ADD),p=Ui,_=Ui),de)switch(k){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Na:i.blendFunc(i.ONE,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Na:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,x=null,L=null,T=null,E.set(0,0,0),P=0,m=k,w=de}return}yt=yt||Rt,zt=zt||st,Zt=Zt||gt,(Rt!==p||yt!==_)&&(i.blendEquationSeparate(X[Rt],X[yt]),p=Rt,_=yt),(st!==M||gt!==x||zt!==L||Zt!==T)&&(i.blendFuncSeparate(it[st],it[gt],it[zt],it[Zt]),M=st,x=gt,L=zt,T=Zt),(Ce.equals(E)===!1||Be!==P)&&(i.blendColor(Ce.r,Ce.g,Ce.b,Be),E.copy(Ce),P=Be),m=k,w=!1}function Ct(k,Rt){k.side===qn?It(i.CULL_FACE):lt(i.CULL_FACE);let st=k.side===Qe;Rt&&(st=!st),et(st),k.blending===ms&&k.transparent===!1?I(jn):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const gt=k.stencilWrite;a.setTest(gt),gt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Mt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(k){y!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),y=k)}function ht(k){k!==mf?(lt(i.CULL_FACE),k!==C&&(k===Tl?i.cullFace(i.BACK):k===gf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),C=k}function nt(k){k!==N&&(B&&i.lineWidth(k),N=k)}function Mt(k,Rt,st){k?(lt(i.POLYGON_OFFSET_FILL),(U!==Rt||O!==st)&&(i.polygonOffset(Rt,st),U=Rt,O=st)):It(i.POLYGON_OFFSET_FILL)}function _t(k){k?lt(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function R(k){k===void 0&&(k=i.TEXTURE0+$-1),rt!==k&&(i.activeTexture(k),rt=k)}function b(k,Rt,st){st===void 0&&(rt===null?st=i.TEXTURE0+$-1:st=rt);let gt=pt[st];gt===void 0&&(gt={type:void 0,texture:void 0},pt[st]=gt),(gt.type!==k||gt.texture!==Rt)&&(rt!==st&&(i.activeTexture(st),rt=st),i.bindTexture(k,Rt||St[k]),gt.type=k,gt.texture=Rt)}function V(){const k=pt[rt];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(k){Nt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Nt.copy(k))}function ut(k){q.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function Ot(k,Rt){let st=l.get(Rt);st===void 0&&(st=new WeakMap,l.set(Rt,st));let gt=st.get(k);gt===void 0&&(gt=i.getUniformBlockIndex(Rt,k.name),st.set(k,gt))}function Gt(k,Rt){const gt=l.get(Rt).get(k);c.get(Rt)!==gt&&(i.uniformBlockBinding(Rt,gt,k.__bindingPointIndex),c.set(Rt,gt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,pt={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,x=null,_=null,L=null,T=null,E=new Dt(0,0,0),P=0,w=!1,y=null,C=null,N=null,U=null,O=null,Nt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:It,bindFramebuffer:Bt,drawBuffers:kt,useProgram:mt,setBlending:I,setMaterial:Ct,setFlipSided:et,setCullFace:ht,setLineWidth:nt,setPolygonOffset:Mt,setScissorTest:_t,activeTexture:R,bindTexture:b,unbindTexture:V,compressedTexImage2D:K,compressedTexImage3D:ot,texImage2D:Lt,texImage3D:Ht,updateUBOMapping:Ot,uniformBlockBinding:Gt,texStorage2D:wt,texStorage3D:tt,texSubImage2D:Z,texSubImage3D:Ut,compressedTexSubImage2D:At,compressedTexSubImage3D:Y,scissor:ft,viewport:ut,reset:qt}}function Th(i,t,e,n){const s=h_(n);switch(e){case Fu:return i*t;case Bu:return i*t;case zu:return i*t*2;case Xc:return i*t/s.components*s.byteLength;case $c:return i*t/s.components*s.byteLength;case Vu:return i*t*2/s.components*s.byteLength;case qc:return i*t*2/s.components*s.byteLength;case Ou:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case Yc:return i*t*4/s.components*s.byteLength;case eo:case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case io:case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:case Ja:return Math.max(i,16)*Math.max(t,8)/4;case ja:case Za:return Math.max(i,8)*Math.max(t,8)/2;case Qa:case tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ro:case gc:case vc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gu:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xc:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function h_(i){switch(i){case Qn:case Uu:return{byteLength:1,components:1};case sr:case Nu:case Dn:return{byteLength:2,components:1};case Hc:case Wc:return{byteLength:2,components:4};case zi:case Gc:case Tn:return{byteLength:4,components:1};case ku:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function u_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Et,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):rr("canvas")}function v(R,b,V){let K=1;const ot=_t(R);if((ot.width>V||ot.height>V)&&(K=V/Math.max(ot.width,ot.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(K*ot.width),Ut=Math.floor(K*ot.height);u===void 0&&(u=g(Z,Ut));const At=b?g(Z,Ut):u;return At.width=Z,At.height=Ut,At.getContext("2d").drawImage(R,0,0,Z,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Z+"x"+Ut+")."),At}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,b,V,K,ot=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=b;if(b===i.RED&&(V===i.FLOAT&&(Z=i.R32F),V===i.HALF_FLOAT&&(Z=i.R16F),V===i.UNSIGNED_BYTE&&(Z=i.R8)),b===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.R8UI),V===i.UNSIGNED_SHORT&&(Z=i.R16UI),V===i.UNSIGNED_INT&&(Z=i.R32UI),V===i.BYTE&&(Z=i.R8I),V===i.SHORT&&(Z=i.R16I),V===i.INT&&(Z=i.R32I)),b===i.RG&&(V===i.FLOAT&&(Z=i.RG32F),V===i.HALF_FLOAT&&(Z=i.RG16F),V===i.UNSIGNED_BYTE&&(Z=i.RG8)),b===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RG8UI),V===i.UNSIGNED_SHORT&&(Z=i.RG16UI),V===i.UNSIGNED_INT&&(Z=i.RG32UI),V===i.BYTE&&(Z=i.RG8I),V===i.SHORT&&(Z=i.RG16I),V===i.INT&&(Z=i.RG32I)),b===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),V===i.UNSIGNED_INT&&(Z=i.RGB32UI),V===i.BYTE&&(Z=i.RGB8I),V===i.SHORT&&(Z=i.RGB16I),V===i.INT&&(Z=i.RGB32I)),b===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),V===i.UNSIGNED_INT&&(Z=i.RGBA32UI),V===i.BYTE&&(Z=i.RGBA8I),V===i.SHORT&&(Z=i.RGBA16I),V===i.INT&&(Z=i.RGBA32I)),b===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),b===i.RGBA){const Ut=ot?To:ie.getTransfer(K);V===i.FLOAT&&(Z=i.RGBA32F),V===i.HALF_FLOAT&&(Z=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Z=Ut===fe?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(R,b){let V;return R?b===null||b===zi||b===Ms?V=i.DEPTH24_STENCIL8:b===Tn?V=i.DEPTH32F_STENCIL8:b===sr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===zi||b===Ms?V=i.DEPTH_COMPONENT24:b===Tn?V=i.DEPTH_COMPONENT32F:b===sr&&(V=i.DEPTH_COMPONENT16),V}function L(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==qe&&R.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function T(R){const b=R.target;b.removeEventListener("dispose",T),P(b),b.isVideoTexture&&h.delete(b)}function E(R){const b=R.target;b.removeEventListener("dispose",E),y(b)}function P(R){const b=n.get(R);if(b.__webglInit===void 0)return;const V=R.source,K=d.get(V);if(K){const ot=K[b.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&w(R),Object.keys(K).length===0&&d.delete(V)}n.remove(R)}function w(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const V=R.source,K=d.get(V);delete K[b.__cacheKey],o.memory.textures--}function y(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let ot=0;ot<b.__webglFramebuffer[K].length;ot++)i.deleteFramebuffer(b.__webglFramebuffer[K][ot]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=R.textures;for(let K=0,ot=V.length;K<ot;K++){const Z=n.get(V[K]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(V[K])}n.remove(R)}let C=0;function N(){C=0}function U(){const R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function O(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function $(R,b){const V=n.get(R);if(R.isVideoTexture&&nt(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,R,b);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+b)}function B(R,b){const V=n.get(R);if(R.version>0&&V.__version!==R.version){q(V,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+b)}function j(R,b){const V=n.get(R);if(R.version>0&&V.__version!==R.version){q(V,R,b);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+b)}function z(R,b){const V=n.get(R);if(R.version>0&&V.__version!==R.version){at(V,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+b)}const rt={[qa]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[Ya]:i.MIRRORED_REPEAT},pt={[qe]:i.NEAREST,[Bf]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[Bo]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},vt={[Hf]:i.NEVER,[jf]:i.ALWAYS,[Wf]:i.LESS,[Xu]:i.LEQUAL,[Xf]:i.EQUAL,[Yf]:i.GEQUAL,[$f]:i.GREATER,[qf]:i.NOTEQUAL};function bt(R,b){if(b.type===Tn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===Bo||b.magFilter===Mr||b.magFilter===Fi||b.minFilter===In||b.minFilter===Bo||b.minFilter===Mr||b.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,rt[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,rt[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,rt[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,pt[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,pt[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,vt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===qe||b.minFilter!==Mr&&b.minFilter!==Fi||b.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Nt(R,b){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",T));const K=b.source;let ot=d.get(K);ot===void 0&&(ot={},d.set(K,ot));const Z=O(b);if(Z!==R.__cacheKey){ot[Z]===void 0&&(ot[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ot[Z].usedTimes++;const Ut=ot[R.__cacheKey];Ut!==void 0&&(ot[R.__cacheKey].usedTimes--,Ut.usedTimes===0&&w(b)),R.__cacheKey=Z,R.__webglTexture=ot[Z].texture}return V}function q(R,b,V){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const ot=Nt(R,b),Z=b.source;e.bindTexture(K,R.__webglTexture,i.TEXTURE0+V);const Ut=n.get(Z);if(Z.version!==Ut.__version||ot===!0){e.activeTexture(i.TEXTURE0+V);const At=ie.getPrimaries(ie.workingColorSpace),Y=b.colorSpace===pi?null:ie.getPrimaries(b.colorSpace),wt=b.colorSpace===pi||At===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let tt=v(b.image,!1,s.maxTextureSize);tt=Mt(b,tt);const Lt=r.convert(b.format,b.colorSpace),Ht=r.convert(b.type);let ft=x(b.internalFormat,Lt,Ht,b.colorSpace,b.isVideoTexture);bt(K,b);let ut;const Ot=b.mipmaps,Gt=b.isVideoTexture!==!0,qt=Ut.__version===void 0||ot===!0,k=Z.dataReady,Rt=L(b,tt);if(b.isDepthTexture)ft=_(b.format===bs,b.type),qt&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,ft,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,ft,tt.width,tt.height,0,Lt,Ht,null));else if(b.isDataTexture)if(Ot.length>0){Gt&&qt&&e.texStorage2D(i.TEXTURE_2D,Rt,ft,Ot[0].width,Ot[0].height);for(let st=0,gt=Ot.length;st<gt;st++)ut=Ot[st],Gt?k&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ut.width,ut.height,Lt,Ht,ut.data):e.texImage2D(i.TEXTURE_2D,st,ft,ut.width,ut.height,0,Lt,Ht,ut.data);b.generateMipmaps=!1}else Gt?(qt&&e.texStorage2D(i.TEXTURE_2D,Rt,ft,tt.width,tt.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,Lt,Ht,tt.data)):e.texImage2D(i.TEXTURE_2D,0,ft,tt.width,tt.height,0,Lt,Ht,tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Gt&&qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,ft,Ot[0].width,Ot[0].height,tt.depth);for(let st=0,gt=Ot.length;st<gt;st++)if(ut=Ot[st],b.format!==dn)if(Lt!==null)if(Gt){if(k)if(b.layerUpdates.size>0){const yt=Th(ut.width,ut.height,b.format,b.type);for(const zt of b.layerUpdates){const Zt=ut.data.subarray(zt*yt/ut.data.BYTES_PER_ELEMENT,(zt+1)*yt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,zt,ut.width,ut.height,1,Lt,Zt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ut.width,ut.height,tt.depth,Lt,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,ft,ut.width,ut.height,tt.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ut.width,ut.height,tt.depth,Lt,Ht,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,ft,ut.width,ut.height,tt.depth,0,Lt,Ht,ut.data)}else{Gt&&qt&&e.texStorage2D(i.TEXTURE_2D,Rt,ft,Ot[0].width,Ot[0].height);for(let st=0,gt=Ot.length;st<gt;st++)ut=Ot[st],b.format!==dn?Lt!==null?Gt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,ut.width,ut.height,Lt,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,st,ft,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?k&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ut.width,ut.height,Lt,Ht,ut.data):e.texImage2D(i.TEXTURE_2D,st,ft,ut.width,ut.height,0,Lt,Ht,ut.data)}else if(b.isDataArrayTexture)if(Gt){if(qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,ft,tt.width,tt.height,tt.depth),k)if(b.layerUpdates.size>0){const st=Th(tt.width,tt.height,b.format,b.type);for(const gt of b.layerUpdates){const yt=tt.data.subarray(gt*st/tt.data.BYTES_PER_ELEMENT,(gt+1)*st/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,tt.width,tt.height,1,Lt,Ht,yt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Lt,Ht,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,tt.width,tt.height,tt.depth,0,Lt,Ht,tt.data);else if(b.isData3DTexture)Gt?(qt&&e.texStorage3D(i.TEXTURE_3D,Rt,ft,tt.width,tt.height,tt.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Lt,Ht,tt.data)):e.texImage3D(i.TEXTURE_3D,0,ft,tt.width,tt.height,tt.depth,0,Lt,Ht,tt.data);else if(b.isFramebufferTexture){if(qt)if(Gt)e.texStorage2D(i.TEXTURE_2D,Rt,ft,tt.width,tt.height);else{let st=tt.width,gt=tt.height;for(let yt=0;yt<Rt;yt++)e.texImage2D(i.TEXTURE_2D,yt,ft,st,gt,0,Lt,Ht,null),st>>=1,gt>>=1}}else if(Ot.length>0){if(Gt&&qt){const st=_t(Ot[0]);e.texStorage2D(i.TEXTURE_2D,Rt,ft,st.width,st.height)}for(let st=0,gt=Ot.length;st<gt;st++)ut=Ot[st],Gt?k&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Lt,Ht,ut):e.texImage2D(i.TEXTURE_2D,st,ft,Lt,Ht,ut);b.generateMipmaps=!1}else if(Gt){if(qt){const st=_t(tt);e.texStorage2D(i.TEXTURE_2D,Rt,ft,st.width,st.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,Ht,tt)}else e.texImage2D(i.TEXTURE_2D,0,ft,Lt,Ht,tt);m(b)&&p(K),Ut.__version=Z.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function at(R,b,V){if(b.image.length!==6)return;const K=Nt(R,b),ot=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);const Z=n.get(ot);if(ot.version!==Z.__version||K===!0){e.activeTexture(i.TEXTURE0+V);const Ut=ie.getPrimaries(ie.workingColorSpace),At=b.colorSpace===pi?null:ie.getPrimaries(b.colorSpace),Y=b.colorSpace===pi||Ut===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const wt=b.isCompressedTexture||b.image[0].isCompressedTexture,tt=b.image[0]&&b.image[0].isDataTexture,Lt=[];for(let gt=0;gt<6;gt++)!wt&&!tt?Lt[gt]=v(b.image[gt],!0,s.maxCubemapSize):Lt[gt]=tt?b.image[gt].image:b.image[gt],Lt[gt]=Mt(b,Lt[gt]);const Ht=Lt[0],ft=r.convert(b.format,b.colorSpace),ut=r.convert(b.type),Ot=x(b.internalFormat,ft,ut,b.colorSpace),Gt=b.isVideoTexture!==!0,qt=Z.__version===void 0||K===!0,k=ot.dataReady;let Rt=L(b,Ht);bt(i.TEXTURE_CUBE_MAP,b);let st;if(wt){Gt&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,Ot,Ht.width,Ht.height);for(let gt=0;gt<6;gt++){st=Lt[gt].mipmaps;for(let yt=0;yt<st.length;yt++){const zt=st[yt];b.format!==dn?ft!==null?Gt?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt,0,0,zt.width,zt.height,ft,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt,Ot,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt,0,0,zt.width,zt.height,ft,ut,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt,Ot,zt.width,zt.height,0,ft,ut,zt.data)}}}else{if(st=b.mipmaps,Gt&&qt){st.length>0&&Rt++;const gt=_t(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,Ot,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(tt){Gt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Lt[gt].width,Lt[gt].height,ft,ut,Lt[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Ot,Lt[gt].width,Lt[gt].height,0,ft,ut,Lt[gt].data);for(let yt=0;yt<st.length;yt++){const Zt=st[yt].image[gt].image;Gt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt+1,0,0,Zt.width,Zt.height,ft,ut,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt+1,Ot,Zt.width,Zt.height,0,ft,ut,Zt.data)}}else{Gt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ft,ut,Lt[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Ot,ft,ut,Lt[gt]);for(let yt=0;yt<st.length;yt++){const zt=st[yt];Gt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt+1,0,0,ft,ut,zt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt+1,Ot,ft,ut,zt.image[gt])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),Z.__version=ot.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function St(R,b,V,K,ot,Z){const Ut=r.convert(V.format,V.colorSpace),At=r.convert(V.type),Y=x(V.internalFormat,Ut,At,V.colorSpace),wt=n.get(b),tt=n.get(V);if(tt.__renderTarget=b,!wt.__hasExternalTextures){const Lt=Math.max(1,b.width>>Z),Ht=Math.max(1,b.height>>Z);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,Z,Y,Lt,Ht,b.depth,0,Ut,At,null):e.texImage2D(ot,Z,Y,Lt,Ht,0,Ut,At,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ht(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ot,tt.__webglTexture,0,et(b)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ot,tt.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(R,b,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const K=b.depthTexture,ot=K&&K.isDepthTexture?K.type:null,Z=_(b.stencilBuffer,ot),Ut=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=et(b);ht(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,Z,b.width,b.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,R)}else{const K=b.textures;for(let ot=0;ot<K.length;ot++){const Z=K[ot],Ut=r.convert(Z.format,Z.colorSpace),At=r.convert(Z.type),Y=x(Z.internalFormat,Ut,At,Z.colorSpace),wt=et(b);V&&ht(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,Y,b.width,b.height):ht(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,Y,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Y,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const ot=K.__webglTexture,Z=et(b);if(b.depthTexture.format===gs)ht(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(b.depthTexture.format===bs)ht(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Bt(R){const b=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const ot=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",ot)};K.addEventListener("dispose",ot),b.__depthDisposeCallback=ot}b.__boundDepthTexture=K}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");It(b.__webglFramebuffer,R)}else if(V){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),lt(b.__webglDepthbuffer[K],R,!1);else{const ot=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),lt(b.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(R,b,V){const K=n.get(R);b!==void 0&&St(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Bt(R)}function mt(R){const b=R.texture,V=n.get(R),K=n.get(b);R.addEventListener("dispose",E);const ot=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Ut=ot.length>1;if(Ut||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),Z){V.__webglFramebuffer=[];for(let At=0;At<6;At++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[At]=[];for(let Y=0;Y<b.mipmaps.length;Y++)V.__webglFramebuffer[At][Y]=i.createFramebuffer()}else V.__webglFramebuffer[At]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let At=0;At<b.mipmaps.length;At++)V.__webglFramebuffer[At]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let At=0,Y=ot.length;At<Y;At++){const wt=n.get(ot[At]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&ht(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let At=0;At<ot.length;At++){const Y=ot[At];V.__webglColorRenderbuffer[At]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[At]);const wt=r.convert(Y.format,Y.colorSpace),tt=r.convert(Y.type),Lt=x(Y.internalFormat,wt,tt,Y.colorSpace,R.isXRRenderTarget===!0),Ht=et(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Lt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,V.__webglColorRenderbuffer[At])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),bt(i.TEXTURE_CUBE_MAP,b);for(let At=0;At<6;At++)if(b.mipmaps&&b.mipmaps.length>0)for(let Y=0;Y<b.mipmaps.length;Y++)St(V.__webglFramebuffer[At][Y],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Y);else St(V.__webglFramebuffer[At],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let At=0,Y=ot.length;At<Y;At++){const wt=ot[At],tt=n.get(wt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),bt(i.TEXTURE_2D,wt),St(V.__webglFramebuffer,R,wt,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,0),m(wt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let At=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(At=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,K.__webglTexture),bt(At,b),b.mipmaps&&b.mipmaps.length>0)for(let Y=0;Y<b.mipmaps.length;Y++)St(V.__webglFramebuffer[Y],R,b,i.COLOR_ATTACHMENT0,At,Y);else St(V.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,At,0);m(b)&&p(At),e.unbindTexture()}R.depthBuffer&&Bt(R)}function X(R){const b=R.textures;for(let V=0,K=b.length;V<K;V++){const ot=b[V];if(m(ot)){const Z=M(R),Ut=n.get(ot).__webglTexture;e.bindTexture(Z,Ut),p(Z),e.unbindTexture()}}}const it=[],I=[];function Ct(R){if(R.samples>0){if(ht(R)===!1){const b=R.textures,V=R.width,K=R.height;let ot=i.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(R),At=b.length>1;if(At)for(let Y=0;Y<b.length;Y++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Y=0;Y<b.length;Y++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),At){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Y]);const wt=n.get(b[Y]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,wt,0)}i.blitFramebuffer(0,0,V,K,0,0,V,K,ot,i.NEAREST),c===!0&&(it.length=0,I.length=0,it.push(i.COLOR_ATTACHMENT0+Y),R.depthBuffer&&R.resolveDepthBuffer===!1&&(it.push(Z),I.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),At)for(let Y=0;Y<b.length;Y++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Y]);const wt=n.get(b[Y]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function et(R){return Math.min(s.maxSamples,R.samples)}function ht(R){const b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function nt(R){const b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Mt(R,b){const V=R.colorSpace,K=R.format,ot=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==As&&V!==pi&&(ie.getTransfer(V)===fe?(K!==dn||ot!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function _t(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=$,this.setTexture2DArray=B,this.setTexture3D=j,this.setTextureCube=z,this.rebindTextures=kt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ht}function d_(i,t){function e(n,s=pi){let r;const o=ie.getTransfer(s);if(n===Qn)return i.UNSIGNED_BYTE;if(n===Hc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ku)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uu)return i.BYTE;if(n===Nu)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===Gc)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===Dn)return i.HALF_FLOAT;if(n===Fu)return i.ALPHA;if(n===Ou)return i.RGB;if(n===dn)return i.RGBA;if(n===Bu)return i.LUMINANCE;if(n===zu)return i.LUMINANCE_ALPHA;if(n===gs)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===Xc)return i.RED;if(n===$c)return i.RED_INTEGER;if(n===Vu)return i.RG;if(n===qc)return i.RG_INTEGER;if(n===Yc)return i.RGBA_INTEGER;if(n===eo||n===no||n===io||n===so)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ja||n===Ka||n===Za||n===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qa||n===tc)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ec)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ac)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ro||n===gc||n===vc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ro)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gu||n===_c||n===xc||n===yc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ro)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class f_ extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class dt extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p_={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(p_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g_=`
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

}`;class v_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ge({vertexShader:m_,fragmentShader:g_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new S(new Rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class __ extends Cs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new v_,m=e.getContextAttributes();let p=null,M=null;const x=[],_=[],L=new Et;let T=null;const E=new Ke;E.viewport=new ae;const P=new Ke;P.viewport=new ae;const w=[E,P],y=new f_;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let at=x[q];return at===void 0&&(at=new fa,x[q]=at),at.getTargetRaySpace()},this.getControllerGrip=function(q){let at=x[q];return at===void 0&&(at=new fa,x[q]=at),at.getGripSpace()},this.getHand=function(q){let at=x[q];return at===void 0&&(at=new fa,x[q]=at),at.getHandSpace()};function U(q){const at=_.indexOf(q.inputSource);if(at===-1)return;const St=x[at];St!==void 0&&(St.update(q.inputSource,q.frame,l||o),St.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",$);for(let q=0;q<x.length;q++){const at=_[q];at!==null&&(_[q]=null,x[q].disconnect(at))}C=null,N=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,M=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",O),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ln(f.framebufferWidth,f.framebufferHeight,{format:dn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,St=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?bs:gs,St=m.stencil?Ms:zi);const It={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(It),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ln(d.textureWidth,d.textureHeight,{format:dn,type:Qn,depthTexture:new fo(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Nt.setContext(s),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(q){for(let at=0;at<q.removed.length;at++){const St=q.removed[at],lt=_.indexOf(St);lt>=0&&(_[lt]=null,x[lt].disconnect(St))}for(let at=0;at<q.added.length;at++){const St=q.added[at];let lt=_.indexOf(St);if(lt===-1){for(let Bt=0;Bt<x.length;Bt++)if(Bt>=_.length){_.push(St),lt=Bt;break}else if(_[Bt]===null){_[Bt]=St,lt=Bt;break}if(lt===-1)break}const It=x[lt];It&&It.connect(St)}}const B=new D,j=new D;function z(q,at,St){B.setFromMatrixPosition(at.matrixWorld),j.setFromMatrixPosition(St.matrixWorld);const lt=B.distanceTo(j),It=at.projectionMatrix.elements,Bt=St.projectionMatrix.elements,kt=It[14]/(It[10]-1),mt=It[14]/(It[10]+1),X=(It[9]+1)/It[5],it=(It[9]-1)/It[5],I=(It[8]-1)/It[0],Ct=(Bt[8]+1)/Bt[0],et=kt*I,ht=kt*Ct,nt=lt/(-I+Ct),Mt=nt*-I;if(at.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Mt),q.translateZ(nt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),It[10]===-1)q.projectionMatrix.copy(at.projectionMatrix),q.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const _t=kt+nt,R=mt+nt,b=et-Mt,V=ht+(lt-Mt),K=X*mt/R*_t,ot=it*mt/R*_t;q.projectionMatrix.makePerspective(b,V,K,ot,_t,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function rt(q,at){at===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(at.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let at=q.near,St=q.far;v.texture!==null&&(v.depthNear>0&&(at=v.depthNear),v.depthFar>0&&(St=v.depthFar)),y.near=P.near=E.near=at,y.far=P.far=E.far=St,(C!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,N=y.far),E.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,y.layers.mask=E.layers.mask|P.layers.mask;const lt=q.parent,It=y.cameras;rt(y,lt);for(let Bt=0;Bt<It.length;Bt++)rt(It[Bt],lt);It.length===2?z(y,E,P):y.projectionMatrix.copy(E.projectionMatrix),pt(q,y,lt)};function pt(q,at,St){St===null?q.matrix.copy(at.matrixWorld):(q.matrix.copy(St.matrixWorld),q.matrix.invert(),q.matrix.multiply(at.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(at.projectionMatrix),q.projectionMatrixInverse.copy(at.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ss*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let vt=null;function bt(q,at){if(h=at.getViewerPose(l||o),g=at,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let lt=!1;St.length!==y.cameras.length&&(y.cameras.length=0,lt=!0);for(let Bt=0;Bt<St.length;Bt++){const kt=St[Bt];let mt=null;if(f!==null)mt=f.getViewport(kt);else{const it=u.getViewSubImage(d,kt);mt=it.viewport,Bt===0&&(t.setRenderTargetTextures(M,it.colorTexture,d.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(M))}let X=w[Bt];X===void 0&&(X=new Ke,X.layers.enable(Bt),X.viewport=new ae,w[Bt]=X),X.matrix.fromArray(kt.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(kt.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(mt.x,mt.y,mt.width,mt.height),Bt===0&&(y.matrix.copy(X.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),lt===!0&&y.cameras.push(X)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const Bt=u.getDepthInformation(St[0]);Bt&&Bt.isValid&&Bt.texture&&v.init(t,Bt,s.renderState)}}for(let St=0;St<x.length;St++){const lt=_[St],It=x[St];lt!==null&&It!==void 0&&It.update(lt,at,l||o)}vt&&vt(q,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const Nt=new ed;Nt.setAnimationLoop(bt),this.setAnimationLoop=function(q){vt=q},this.dispose=function(){}}}const Ri=new Rn,x_=new te;function y_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ju(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),x=M.envMap,_=M.envMapRotation;x&&(m.envMap.value=x,Ri.copy(_),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(x_.makeRotationFromEuler(Ri)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function w_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const _=x.program;n.uniformBlockBinding(M,_)}function l(M,x){let _=s[M.id];_===void 0&&(g(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",m));const L=x.program;n.updateUBOMapping(M,L);const T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){const x=u();M.__bindingPointIndex=x;const _=i.createBuffer(),L=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=s[M.id],_=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,E=_.length;T<E;T++){const P=Array.isArray(_[T])?_[T]:[_[T]];for(let w=0,y=P.length;w<y;w++){const C=P[w];if(f(C,T,w,L)===!0){const N=C.__offset,U=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let $=0;$<U.length;$++){const B=U[$],j=v(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,N+O,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,O),O+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,x,_,L){const T=M.value,E=x+"_"+_;if(L[E]===void 0)return typeof T=="number"||typeof T=="boolean"?L[E]=T:L[E]=T.clone(),!0;{const P=L[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return L[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(M){const x=M.uniforms;let _=0;const L=16;for(let E=0,P=x.length;E<P;E++){const w=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,C=w.length;y<C;y++){const N=w[y],U=Array.isArray(N.value)?N.value:[N.value];for(let O=0,$=U.length;O<$;O++){const B=U[O],j=v(B),z=_%L,rt=z%j.boundary,pt=z+rt;_+=rt,pt!==0&&L-pt<j.storage&&(_+=L-pt),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=j.storage}}}const T=_%L;return T>0&&(_+=L-T),M.__size=_,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class M_{constructor(t={}){const{canvas:e=dp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=xi,this.toneMappingExposure=1;const _=this;let L=!1,T=0,E=0,P=null,w=-1,y=null;const C=new ae,N=new ae;let U=null;const O=new Dt(0);let $=0,B=e.width,j=e.height,z=1,rt=null,pt=null;const vt=new ae(0,0,B,j),bt=new ae(0,0,B,j);let Nt=!1;const q=new Zc;let at=!1,St=!1;const lt=new te,It=new te,Bt=new D,kt=new ae,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let X=!1;function it(){return P===null?z:1}let I=n;function Ct(A,H){return e.getContext(A,H)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bc}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",zt,!1),I===null){const H="webgl2";if(I=Ct(H,A),I===null)throw Ct(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let et,ht,nt,Mt,_t,R,b,V,K,ot,Z,Ut,At,Y,wt,tt,Lt,Ht,ft,ut,Ot,Gt,qt,k;function Rt(){et=new Cg(I),et.init(),Gt=new d_(I,et),ht=new Mg(I,et,t,Gt),nt=new l_(I,et),ht.reverseDepthBuffer&&d&&nt.buffers.depth.setReversed(!0),Mt=new Lg(I),_t=new jv,R=new u_(I,et,nt,_t,ht,Gt,Mt),b=new Sg(_),V=new Ag(_),K=new Op(I),qt=new yg(I,K),ot=new Rg(I,K,Mt,qt),Z=new Dg(I,ot,K,Mt),ft=new Ig(I,ht,R),tt=new bg(_t),Ut=new Yv(_,b,V,et,ht,qt,tt),At=new y_(_,_t),Y=new Zv,wt=new i_(et),Ht=new xg(_,b,V,nt,Z,f,c),Lt=new a_(_,Z,ht),k=new w_(I,Mt,ht,nt),ut=new wg(I,et,Mt),Ot=new Pg(I,et,Mt),Mt.programs=Ut.programs,_.capabilities=ht,_.extensions=et,_.properties=_t,_.renderLists=Y,_.shadowMap=Lt,_.state=nt,_.info=Mt}Rt();const st=new __(_,I);this.xr=st,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(B,j,!1))},this.getSize=function(A){return A.set(B,j)},this.setSize=function(A,H,J=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,j=H,e.width=Math.floor(A*z),e.height=Math.floor(H*z),J===!0&&(e.style.width=A+"px",e.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(B*z,j*z).floor()},this.setDrawingBufferSize=function(A,H,J){B=A,j=H,z=J,e.width=Math.floor(A*J),e.height=Math.floor(H*J),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(vt)},this.setViewport=function(A,H,J,Q){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,H,J,Q),nt.viewport(C.copy(vt).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(bt)},this.setScissor=function(A,H,J,Q){A.isVector4?bt.set(A.x,A.y,A.z,A.w):bt.set(A,H,J,Q),nt.scissor(N.copy(bt).multiplyScalar(z).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(A){nt.setScissorTest(Nt=A)},this.setOpaqueSort=function(A){rt=A},this.setTransparentSort=function(A){pt=A},this.getClearColor=function(A){return A.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(A=!0,H=!0,J=!0){let Q=0;if(A){let W=!1;if(P!==null){const Pt=P.texture.format;W=Pt===Yc||Pt===qc||Pt===$c}if(W){const Pt=P.texture.type,Vt=Pt===Qn||Pt===zi||Pt===sr||Pt===Ms||Pt===Hc||Pt===Wc,Wt=Ht.getClearColor(),Xt=Ht.getClearAlpha(),Kt=Wt.r,Jt=Wt.g,$t=Wt.b;Vt?(g[0]=Kt,g[1]=Jt,g[2]=$t,g[3]=Xt,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=Kt,v[1]=Jt,v[2]=$t,v[3]=Xt,I.clearBufferiv(I.COLOR,0,v))}else Q|=I.COLOR_BUFFER_BIT}H&&(Q|=I.DEPTH_BUFFER_BIT),J&&(Q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",zt,!1),Y.dispose(),wt.dispose(),_t.dispose(),b.dispose(),V.dispose(),Z.dispose(),qt.dispose(),k.dispose(),Ut.dispose(),st.dispose(),st.removeEventListener("sessionstart",vl),st.removeEventListener("sessionend",_l),bi.stop()};function gt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const A=Mt.autoReset,H=Lt.enabled,J=Lt.autoUpdate,Q=Lt.needsUpdate,W=Lt.type;Rt(),Mt.autoReset=A,Lt.enabled=H,Lt.autoUpdate=J,Lt.needsUpdate=Q,Lt.type=W}function zt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Zt(A){const H=A.target;H.removeEventListener("dispose",Zt),Ce(H)}function Ce(A){Be(A),_t.remove(A)}function Be(A){const H=_t.get(A).programs;H!==void 0&&(H.forEach(function(J){Ut.releaseProgram(J)}),A.isShaderMaterial&&Ut.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,J,Q,W,Pt){H===null&&(H=mt);const Vt=W.isMesh&&W.matrixWorld.determinant()<0,Wt=cf(A,H,J,Q,W);nt.setMaterial(Q,Vt);let Xt=J.index,Kt=1;if(Q.wireframe===!0){if(Xt=ot.getWireframeAttribute(J),Xt===void 0)return;Kt=2}const Jt=J.drawRange,$t=J.attributes.position;let re=Jt.start*Kt,ye=(Jt.start+Jt.count)*Kt;Pt!==null&&(re=Math.max(re,Pt.start*Kt),ye=Math.min(ye,(Pt.start+Pt.count)*Kt)),Xt!==null?(re=Math.max(re,0),ye=Math.min(ye,Xt.count)):$t!=null&&(re=Math.max(re,0),ye=Math.min(ye,$t.count));const Me=ye-re;if(Me<0||Me===1/0)return;qt.setup(W,Q,Wt,J,Xt);let je,ce=ut;if(Xt!==null&&(je=K.get(Xt),ce=Ot,ce.setIndex(je)),W.isMesh)Q.wireframe===!0?(nt.setLineWidth(Q.wireframeLinewidth*it()),ce.setMode(I.LINES)):ce.setMode(I.TRIANGLES);else if(W.isLine){let Yt=Q.linewidth;Yt===void 0&&(Yt=1),nt.setLineWidth(Yt*it()),W.isLineSegments?ce.setMode(I.LINES):W.isLineLoop?ce.setMode(I.LINE_LOOP):ce.setMode(I.LINE_STRIP)}else W.isPoints?ce.setMode(I.POINTS):W.isSprite&&ce.setMode(I.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ce.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ce.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Yt=W._multiDrawStarts,On=W._multiDrawCounts,le=W._multiDrawCount,_n=Xt?K.get(Xt).bytesPerElement:1,ji=_t.get(Q).currentProgram.getUniforms();for(let nn=0;nn<le;nn++)ji.setValue(I,"_gl_DrawID",nn),ce.render(Yt[nn]/_n,On[nn])}else if(W.isInstancedMesh)ce.renderInstances(re,Me,W.count);else if(J.isInstancedBufferGeometry){const Yt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,On=Math.min(J.instanceCount,Yt);ce.renderInstances(re,Me,On)}else ce.render(re,Me)};function de(A,H,J){A.transparent===!0&&A.side===qn&&A.forceSinglePass===!1?(A.side=Qe,A.needsUpdate=!0,wr(A,H,J),A.side=wi,A.needsUpdate=!0,wr(A,H,J),A.side=qn):wr(A,H,J)}this.compile=function(A,H,J=null){J===null&&(J=A),p=wt.get(J),p.init(H),x.push(p),J.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),A!==J&&A.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const Q=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Pt=W.material;if(Pt)if(Array.isArray(Pt))for(let Vt=0;Vt<Pt.length;Vt++){const Wt=Pt[Vt];de(Wt,J,W),Q.add(Wt)}else de(Pt,J,W),Q.add(Pt)}),x.pop(),p=null,Q},this.compileAsync=function(A,H,J=null){const Q=this.compile(A,H,J);return new Promise(W=>{function Pt(){if(Q.forEach(function(Vt){_t.get(Vt).currentProgram.isReady()&&Q.delete(Vt)}),Q.size===0){W(A);return}setTimeout(Pt,10)}et.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let vn=null;function Fn(A){vn&&vn(A)}function vl(){bi.stop()}function _l(){bi.start()}const bi=new ed;bi.setAnimationLoop(Fn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){vn=A,st.setAnimationLoop(A),A===null?bi.stop():bi.start()},st.addEventListener("sessionstart",vl),st.addEventListener("sessionend",_l),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(H),H=st.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,H,P),p=wt.get(A,x.length),p.init(H),x.push(p),It.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),q.setFromProjectionMatrix(It),St=this.localClippingEnabled,at=tt.init(this.clippingPlanes,St),m=Y.get(A,M.length),m.init(),M.push(m),st.enabled===!0&&st.isPresenting===!0){const Pt=_.xr.getDepthSensingMesh();Pt!==null&&Oo(Pt,H,-1/0,_.sortObjects)}Oo(A,H,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(rt,pt),X=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,X&&Ht.addToRenderList(m,A),this.info.render.frame++,at===!0&&tt.beginShadows();const J=p.state.shadowsArray;Lt.render(J,A,H),at===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,W=m.transmissive;if(p.setupLights(),H.isArrayCamera){const Pt=H.cameras;if(W.length>0)for(let Vt=0,Wt=Pt.length;Vt<Wt;Vt++){const Xt=Pt[Vt];yl(Q,W,A,Xt)}X&&Ht.render(A);for(let Vt=0,Wt=Pt.length;Vt<Wt;Vt++){const Xt=Pt[Vt];xl(m,A,Xt,Xt.viewport)}}else W.length>0&&yl(Q,W,A,H),X&&Ht.render(A),xl(m,A,H);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(_,A,H),qt.resetDefaultState(),w=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],at===!0&&tt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Oo(A,H,J,Q){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){Q&&kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(It);const Vt=Z.update(A),Wt=A.material;Wt.visible&&m.push(A,Vt,Wt,J,kt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const Vt=Z.update(A),Wt=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),kt.copy(A.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),kt.copy(Vt.boundingSphere.center)),kt.applyMatrix4(A.matrixWorld).applyMatrix4(It)),Array.isArray(Wt)){const Xt=Vt.groups;for(let Kt=0,Jt=Xt.length;Kt<Jt;Kt++){const $t=Xt[Kt],re=Wt[$t.materialIndex];re&&re.visible&&m.push(A,Vt,re,J,kt.z,$t)}}else Wt.visible&&m.push(A,Vt,Wt,J,kt.z,null)}}const Pt=A.children;for(let Vt=0,Wt=Pt.length;Vt<Wt;Vt++)Oo(Pt[Vt],H,J,Q)}function xl(A,H,J,Q){const W=A.opaque,Pt=A.transmissive,Vt=A.transparent;p.setupLightsView(J),at===!0&&tt.setGlobalState(_.clippingPlanes,J),Q&&nt.viewport(C.copy(Q)),W.length>0&&yr(W,H,J),Pt.length>0&&yr(Pt,H,J),Vt.length>0&&yr(Vt,H,J),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function yl(A,H,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new ln(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Dn:Qn,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const Pt=p.state.transmissionRenderTarget[Q.id],Vt=Q.viewport||C;Pt.setSize(Vt.z,Vt.w);const Wt=_.getRenderTarget();_.setRenderTarget(Pt),_.getClearColor(O),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),X&&Ht.render(J);const Xt=_.toneMapping;_.toneMapping=xi;const Kt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),at===!0&&tt.setGlobalState(_.clippingPlanes,Q),yr(A,J,Q),R.updateMultisampleRenderTarget(Pt),R.updateRenderTargetMipmap(Pt),et.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let $t=0,re=H.length;$t<re;$t++){const ye=H[$t],Me=ye.object,je=ye.geometry,ce=ye.material,Yt=ye.group;if(ce.side===qn&&Me.layers.test(Q.layers)){const On=ce.side;ce.side=Qe,ce.needsUpdate=!0,wl(Me,J,Q,je,ce,Yt),ce.side=On,ce.needsUpdate=!0,Jt=!0}}Jt===!0&&(R.updateMultisampleRenderTarget(Pt),R.updateRenderTargetMipmap(Pt))}_.setRenderTarget(Wt),_.setClearColor(O,$),Kt!==void 0&&(Q.viewport=Kt),_.toneMapping=Xt}function yr(A,H,J){const Q=H.isScene===!0?H.overrideMaterial:null;for(let W=0,Pt=A.length;W<Pt;W++){const Vt=A[W],Wt=Vt.object,Xt=Vt.geometry,Kt=Q===null?Vt.material:Q,Jt=Vt.group;Wt.layers.test(J.layers)&&wl(Wt,H,J,Xt,Kt,Jt)}}function wl(A,H,J,Q,W,Pt){A.onBeforeRender(_,H,J,Q,W,Pt),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(_,H,J,Q,A,Pt),W.transparent===!0&&W.side===qn&&W.forceSinglePass===!1?(W.side=Qe,W.needsUpdate=!0,_.renderBufferDirect(J,H,Q,W,A,Pt),W.side=wi,W.needsUpdate=!0,_.renderBufferDirect(J,H,Q,W,A,Pt),W.side=qn):_.renderBufferDirect(J,H,Q,W,A,Pt),A.onAfterRender(_,H,J,Q,W,Pt)}function wr(A,H,J){H.isScene!==!0&&(H=mt);const Q=_t.get(A),W=p.state.lights,Pt=p.state.shadowsArray,Vt=W.state.version,Wt=Ut.getParameters(A,W.state,Pt,H,J),Xt=Ut.getProgramCacheKey(Wt);let Kt=Q.programs;Q.environment=A.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(A.isMeshStandardMaterial?V:b).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Kt===void 0&&(A.addEventListener("dispose",Zt),Kt=new Map,Q.programs=Kt);let Jt=Kt.get(Xt);if(Jt!==void 0){if(Q.currentProgram===Jt&&Q.lightsStateVersion===Vt)return bl(A,Wt),Jt}else Wt.uniforms=Ut.getUniforms(A),A.onBeforeCompile(Wt,_),Jt=Ut.acquireProgram(Wt,Xt),Kt.set(Xt,Jt),Q.uniforms=Wt.uniforms;const $t=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($t.clippingPlanes=tt.uniform),bl(A,Wt),Q.needsLights=hf(A),Q.lightsStateVersion=Vt,Q.needsLights&&($t.ambientLightColor.value=W.state.ambient,$t.lightProbe.value=W.state.probe,$t.directionalLights.value=W.state.directional,$t.directionalLightShadows.value=W.state.directionalShadow,$t.spotLights.value=W.state.spot,$t.spotLightShadows.value=W.state.spotShadow,$t.rectAreaLights.value=W.state.rectArea,$t.ltc_1.value=W.state.rectAreaLTC1,$t.ltc_2.value=W.state.rectAreaLTC2,$t.pointLights.value=W.state.point,$t.pointLightShadows.value=W.state.pointShadow,$t.hemisphereLights.value=W.state.hemi,$t.directionalShadowMap.value=W.state.directionalShadowMap,$t.directionalShadowMatrix.value=W.state.directionalShadowMatrix,$t.spotShadowMap.value=W.state.spotShadowMap,$t.spotLightMatrix.value=W.state.spotLightMatrix,$t.spotLightMap.value=W.state.spotLightMap,$t.pointShadowMap.value=W.state.pointShadowMap,$t.pointShadowMatrix.value=W.state.pointShadowMatrix),Q.currentProgram=Jt,Q.uniformsList=null,Jt}function Ml(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=oo.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function bl(A,H){const J=_t.get(A);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function cf(A,H,J,Q,W){H.isScene!==!0&&(H=mt),R.resetTextureUnits();const Pt=H.fog,Vt=Q.isMeshStandardMaterial?H.environment:null,Wt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:As,Xt=(Q.isMeshStandardMaterial?V:b).get(Q.envMap||Vt),Kt=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Jt=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),$t=!!J.morphAttributes.position,re=!!J.morphAttributes.normal,ye=!!J.morphAttributes.color;let Me=xi;Q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Me=_.toneMapping);const je=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ce=je!==void 0?je.length:0,Yt=_t.get(Q),On=p.state.lights;if(at===!0&&(St===!0||A!==y)){const hn=A===y&&Q.id===w;tt.setState(Q,A,hn)}let le=!1;Q.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==On.state.version||Yt.outputColorSpace!==Wt||W.isBatchedMesh&&Yt.batching===!1||!W.isBatchedMesh&&Yt.batching===!0||W.isBatchedMesh&&Yt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Yt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Yt.instancing===!1||!W.isInstancedMesh&&Yt.instancing===!0||W.isSkinnedMesh&&Yt.skinning===!1||!W.isSkinnedMesh&&Yt.skinning===!0||W.isInstancedMesh&&Yt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Yt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Yt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Yt.instancingMorph===!1&&W.morphTexture!==null||Yt.envMap!==Xt||Q.fog===!0&&Yt.fog!==Pt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==tt.numPlanes||Yt.numIntersection!==tt.numIntersection)||Yt.vertexAlphas!==Kt||Yt.vertexTangents!==Jt||Yt.morphTargets!==$t||Yt.morphNormals!==re||Yt.morphColors!==ye||Yt.toneMapping!==Me||Yt.morphTargetsCount!==ce)&&(le=!0):(le=!0,Yt.__version=Q.version);let _n=Yt.currentProgram;le===!0&&(_n=wr(Q,H,W));let ji=!1,nn=!1,Ds=!1;const be=_n.getUniforms(),Pn=Yt.uniforms;if(nt.useProgram(_n.program)&&(ji=!0,nn=!0,Ds=!0),Q.id!==w&&(w=Q.id,nn=!0),ji||y!==A){nt.buffers.depth.getReversed()?(lt.copy(A.projectionMatrix),pp(lt),mp(lt),be.setValue(I,"projectionMatrix",lt)):be.setValue(I,"projectionMatrix",A.projectionMatrix),be.setValue(I,"viewMatrix",A.matrixWorldInverse);const si=be.map.cameraPosition;si!==void 0&&si.setValue(I,Bt.setFromMatrixPosition(A.matrixWorld)),ht.logarithmicDepthBuffer&&be.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&be.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,nn=!0,Ds=!0)}if(W.isSkinnedMesh){be.setOptional(I,W,"bindMatrix"),be.setOptional(I,W,"bindMatrixInverse");const hn=W.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),be.setValue(I,"boneTexture",hn.boneTexture,R))}W.isBatchedMesh&&(be.setOptional(I,W,"batchingTexture"),be.setValue(I,"batchingTexture",W._matricesTexture,R),be.setOptional(I,W,"batchingIdTexture"),be.setValue(I,"batchingIdTexture",W._indirectTexture,R),be.setOptional(I,W,"batchingColorTexture"),W._colorsTexture!==null&&be.setValue(I,"batchingColorTexture",W._colorsTexture,R));const Us=J.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0)&&ft.update(W,J,_n),(nn||Yt.receiveShadow!==W.receiveShadow)&&(Yt.receiveShadow=W.receiveShadow,be.setValue(I,"receiveShadow",W.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Pn.envMap.value=Xt,Pn.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&H.environment!==null&&(Pn.envMapIntensity.value=H.environmentIntensity),nn&&(be.setValue(I,"toneMappingExposure",_.toneMappingExposure),Yt.needsLights&&lf(Pn,Ds),Pt&&Q.fog===!0&&At.refreshFogUniforms(Pn,Pt),At.refreshMaterialUniforms(Pn,Q,z,j,p.state.transmissionRenderTarget[A.id]),oo.upload(I,Ml(Yt),Pn,R)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(oo.upload(I,Ml(Yt),Pn,R),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&be.setValue(I,"center",W.center),be.setValue(I,"modelViewMatrix",W.modelViewMatrix),be.setValue(I,"normalMatrix",W.normalMatrix),be.setValue(I,"modelMatrix",W.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const hn=Q.uniformsGroups;for(let si=0,ri=hn.length;si<ri;si++){const Sl=hn[si];k.update(Sl,_n),k.bind(Sl,_n)}}return _n}function lf(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function hf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,H,J){_t.get(A.texture).__webglTexture=H,_t.get(A.depthTexture).__webglTexture=J;const Q=_t.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const J=_t.get(A);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,J=0){P=A,T=H,E=J;let Q=!0,W=null,Pt=!1,Vt=!1;if(A){const Xt=_t.get(A);if(Xt.__useDefaultFramebuffer!==void 0)nt.bindFramebuffer(I.FRAMEBUFFER,null),Q=!1;else if(Xt.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Xt.__hasExternalTextures)R.rebindTextures(A,_t.get(A.texture).__webglTexture,_t.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $t=A.depthTexture;if(Xt.__boundDepthTexture!==$t){if($t!==null&&_t.has($t)&&(A.width!==$t.image.width||A.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const Kt=A.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Vt=!0);const Jt=_t.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Jt[H])?W=Jt[H][J]:W=Jt[H],Pt=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?W=_t.get(A).__webglMultisampledFramebuffer:Array.isArray(Jt)?W=Jt[J]:W=Jt,C.copy(A.viewport),N.copy(A.scissor),U=A.scissorTest}else C.copy(vt).multiplyScalar(z).floor(),N.copy(bt).multiplyScalar(z).floor(),U=Nt;if(nt.bindFramebuffer(I.FRAMEBUFFER,W)&&Q&&nt.drawBuffers(A,W),nt.viewport(C),nt.scissor(N),nt.setScissorTest(U),Pt){const Xt=_t.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+H,Xt.__webglTexture,J)}else if(Vt){const Xt=_t.get(A.texture),Kt=H||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.__webglTexture,J||0,Kt)}w=-1},this.readRenderTargetPixels=function(A,H,J,Q,W,Pt,Vt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=_t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(Wt=Wt[Vt]),Wt){nt.bindFramebuffer(I.FRAMEBUFFER,Wt);try{const Xt=A.texture,Kt=Xt.format,Jt=Xt.type;if(!ht.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Q&&J>=0&&J<=A.height-W&&I.readPixels(H,J,Q,W,Gt.convert(Kt),Gt.convert(Jt),Pt)}finally{const Xt=P!==null?_t.get(P).__webglFramebuffer:null;nt.bindFramebuffer(I.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(A,H,J,Q,W,Pt,Vt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=_t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(Wt=Wt[Vt]),Wt){const Xt=A.texture,Kt=Xt.format,Jt=Xt.type;if(!ht.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=A.width-Q&&J>=0&&J<=A.height-W){nt.bindFramebuffer(I.FRAMEBUFFER,Wt);const $t=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,$t),I.bufferData(I.PIXEL_PACK_BUFFER,Pt.byteLength,I.STREAM_READ),I.readPixels(H,J,Q,W,Gt.convert(Kt),Gt.convert(Jt),0);const re=P!==null?_t.get(P).__webglFramebuffer:null;nt.bindFramebuffer(I.FRAMEBUFFER,re);const ye=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await fp(I,ye,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,$t),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Pt),I.deleteBuffer($t),I.deleteSync(ye),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,H=null,J=0){A.isTexture!==!0&&($s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1]);const Q=Math.pow(2,-J),W=Math.floor(A.image.width*Q),Pt=Math.floor(A.image.height*Q),Vt=H!==null?H.x:0,Wt=H!==null?H.y:0;R.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,J,0,0,Vt,Wt,W,Pt),nt.unbindTexture()},this.copyTextureToTexture=function(A,H,J=null,Q=null,W=0){A.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],H=arguments[2],W=arguments[3]||0,J=null);let Pt,Vt,Wt,Xt,Kt,Jt,$t,re,ye;const Me=A.isCompressedTexture?A.mipmaps[W]:A.image;J!==null?(Pt=J.max.x-J.min.x,Vt=J.max.y-J.min.y,Wt=J.isBox3?J.max.z-J.min.z:1,Xt=J.min.x,Kt=J.min.y,Jt=J.isBox3?J.min.z:0):(Pt=Me.width,Vt=Me.height,Wt=Me.depth||1,Xt=0,Kt=0,Jt=0),Q!==null?($t=Q.x,re=Q.y,ye=Q.z):($t=0,re=0,ye=0);const je=Gt.convert(H.format),ce=Gt.convert(H.type);let Yt;H.isData3DTexture?(R.setTexture3D(H,0),Yt=I.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(R.setTexture2DArray(H,0),Yt=I.TEXTURE_2D_ARRAY):(R.setTexture2D(H,0),Yt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);const On=I.getParameter(I.UNPACK_ROW_LENGTH),le=I.getParameter(I.UNPACK_IMAGE_HEIGHT),_n=I.getParameter(I.UNPACK_SKIP_PIXELS),ji=I.getParameter(I.UNPACK_SKIP_ROWS),nn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Me.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Me.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Jt);const Ds=A.isDataArrayTexture||A.isData3DTexture,be=H.isDataArrayTexture||H.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Pn=_t.get(A),Us=_t.get(H),hn=_t.get(Pn.__renderTarget),si=_t.get(Us.__renderTarget);nt.bindFramebuffer(I.READ_FRAMEBUFFER,hn.__webglFramebuffer),nt.bindFramebuffer(I.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let ri=0;ri<Wt;ri++)Ds&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(A).__webglTexture,W,Jt+ri),A.isDepthTexture?(be&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(H).__webglTexture,W,ye+ri),I.blitFramebuffer(Xt,Kt,Pt,Vt,$t,re,Pt,Vt,I.DEPTH_BUFFER_BIT,I.NEAREST)):be?I.copyTexSubImage3D(Yt,W,$t,re,ye+ri,Xt,Kt,Pt,Vt):I.copyTexSubImage2D(Yt,W,$t,re,ye+ri,Xt,Kt,Pt,Vt);nt.bindFramebuffer(I.READ_FRAMEBUFFER,null),nt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else be?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Yt,W,$t,re,ye,Pt,Vt,Wt,je,ce,Me.data):H.isCompressedArrayTexture?I.compressedTexSubImage3D(Yt,W,$t,re,ye,Pt,Vt,Wt,je,Me.data):I.texSubImage3D(Yt,W,$t,re,ye,Pt,Vt,Wt,je,ce,Me):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,W,$t,re,Pt,Vt,je,ce,Me.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,W,$t,re,Me.width,Me.height,je,Me.data):I.texSubImage2D(I.TEXTURE_2D,W,$t,re,Pt,Vt,je,ce,Me);I.pixelStorei(I.UNPACK_ROW_LENGTH,On),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,le),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_n),I.pixelStorei(I.UNPACK_SKIP_ROWS,ji),I.pixelStorei(I.UNPACK_SKIP_IMAGES,nn),W===0&&H.generateMipmaps&&I.generateMipmap(Yt),nt.unbindTexture()},this.copyTextureToTexture3D=function(A,H,J=null,Q=null,W=0){return A.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],H=arguments[3],W=arguments[4]||0),$s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,H,J,Q,W)},this.initRenderTarget=function(A){_t.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),nt.unbindTexture()},this.resetState=function(){T=0,E=0,P=null,nt.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class tl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new tl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class b_ extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zw{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mc,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new D;class ad{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ad(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ah=new D,Ch=new ae,Rh=new ae,S_=new D,Ph=new te,Hr=new D,pa=new ii,Lh=new te,ma=new pr;class Vw extends S{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rl,this.bindMatrix=new te,this.bindMatrixInverse=new te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Hr),this.boundingBox.expandByPoint(Hr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ii),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Hr),this.boundingSphere.expandByPoint(Hr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pa.copy(this.boundingSphere),pa.applyMatrix4(s),t.ray.intersectsSphere(pa)!==!1&&(Lh.copy(s).invert(),ma.copy(t.ray).applyMatrix4(Lh),!(this.boundingBox!==null&&ma.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ma)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ae,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Rl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Of?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Ch.fromBufferAttribute(s.attributes.skinIndex,t),Rh.fromBufferAttribute(s.attributes.skinWeight,t),Ah.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Rh.getComponent(r);if(o!==0){const a=Ch.getComponent(r);Ph.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(S_.copy(Ah).applyMatrix4(Ph),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class E_ extends Ee{constructor(){super(),this.isBone=!0,this.type="Bone"}}class cd extends He{constructor(t=null,e=1,n=1,s,r,o,a,c,l=qe,h=qe,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ih=new te,T_=new te;class ld{constructor(t=[],e=[]){this.uuid=pn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new te)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new te;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:T_;Ih.multiplyMatrices(a,e[r]),Ih.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ld(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new cd(e,t,t,dn,Tn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new E_),this.bones.push(o),this.boneInverses.push(new te().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Dh extends tn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const hs=new te,Uh=new te,Wr=[],Nh=new Mi,A_=new te,Bs=new S,zs=new ii;class bn extends S{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Dh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,A_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Nh.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(Nh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),zs.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),t.ray.intersectsSphere(zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),Uh.multiplyMatrices(n,hs),Bs.matrixWorld=Uh,Bs.raycast(t,Wr);for(let o=0,a=Wr.length;o<a;o++){const c=Wr[o];c.instanceId=r,c.object=this,e.push(c)}Wr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Dh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cd(new Float32Array(s*this.count),s,this.count,Xc,Tn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class hd extends Xi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const po=new D,mo=new D,kh=new te,Vs=new pr,Xr=new ii,ga=new D,Fh=new D;class ud extends Ee{constructor(t=new Oe,e=new hd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)po.fromBufferAttribute(e,s-1),mo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=po.distanceTo(mo);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,t.ray.intersectsSphere(Xr)===!1)return;kh.copy(s).invert(),Vs.copy(t.ray).applyMatrix4(kh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=h.getX(v),M=h.getX(v+1),x=$r(this,t,Vs,c,p,M);x&&e.push(x)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=$r(this,t,Vs,c,v,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=$r(this,t,Vs,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=$r(this,t,Vs,c,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $r(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(po.fromBufferAttribute(o,s),mo.fromBufferAttribute(o,r),e.distanceSqToSegment(po,mo,ga,Fh)>n)return;ga.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ga);if(!(c<t.near||c>t.far))return{distance:c,point:Fh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Oh=new D,Bh=new D;class C_ extends ud{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Oh.fromBufferAttribute(e,s),Bh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Oh.distanceTo(Bh);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gw extends ud{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class R_ extends Xi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zh=new te,Sc=new pr,qr=new ii,Yr=new D;class Hw extends Ee{constructor(t=new Oe,e=new R_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,t.ray.intersectsSphere(qr)===!1)return;zh.copy(s).invert(),Sc.copy(t.ray).applyMatrix4(zh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);Yr.fromBufferAttribute(u,m),Vh(Yr,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)Yr.fromBufferAttribute(u,g),Vh(Yr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vh(i,t,e,n,s,r,o){const a=Sc.distanceSqToPoint(i);if(a<e){const c=new D;Sc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Et:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],r=[],o=[],a=new D,c=new te;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Le(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Le(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class el extends Nn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Et){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class P_ extends el{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function nl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const jr=new D,va=new nl,_a=new nl,xa=new nl;class L_ extends Nn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(jr.subVectors(s[0],s[1]).add(s[0]),l=jr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),va.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),_a.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),xa.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(va.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),_a.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),xa.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(va.calc(c),_a.calc(c),xa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Gh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function I_(i,t){const e=1-i;return e*e*t}function D_(i,t){return 2*(1-i)*i*t}function U_(i,t){return i*i*t}function Qs(i,t,e,n){return I_(i,t)+D_(i,e)+U_(i,n)}function N_(i,t){const e=1-i;return e*e*e*t}function k_(i,t){const e=1-i;return 3*e*e*i*t}function F_(i,t){return 3*(1-i)*i*i*t}function O_(i,t){return i*i*i*t}function tr(i,t,e,n,s){return N_(i,t)+k_(i,e)+F_(i,n)+O_(i,s)}class dd extends Nn{constructor(t=new Et,e=new Et,n=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Et){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tr(t,s.x,r.x,o.x,a.x),tr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class B_ extends Nn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tr(t,s.x,r.x,o.x,a.x),tr(t,s.y,r.y,o.y,a.y),tr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fd extends Nn{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class z_ extends Nn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pd extends Nn{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Qs(t,s.x,r.x,o.x),Qs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class V_ extends Nn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Qs(t,s.x,r.x,o.x),Qs(t,s.y,r.y,o.y),Qs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class md extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Gh(a,c.x,l.x,h.x,u.x),Gh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Et().fromArray(s))}return this}}var Ec=Object.freeze({__proto__:null,ArcCurve:P_,CatmullRomCurve3:L_,CubicBezierCurve:dd,CubicBezierCurve3:B_,EllipseCurve:el,LineCurve:fd,LineCurve3:z_,QuadraticBezierCurve:pd,QuadraticBezierCurve3:V_,SplineCurve:md});class G_ extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ec[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ec[s.type]().fromJSON(s))}return this}}class Tc extends G_{constructor(t){super(),this.type="Path",this.currentPoint=new Et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new fd(this.currentPoint.clone(),new Et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new pd(this.currentPoint.clone(),new Et(t,e),new Et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new dd(this.currentPoint.clone(),new Et(t,e),new Et(n,s),new Et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new md(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new el(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class il extends Oe{constructor(t=[new Et(0,-.5),new Et(.5,0),new Et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Le(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new D,d=new Et,f=new D,g=new D,v=new D;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let M=0;M<=e;M++){const x=n+M*h*s,_=Math.sin(x),L=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*_,u.y=t[T].y,u.z=t[T].x*L,o.push(u.x,u.y,u.z),d.x=M/e,d.y=T/(t.length-1),a.push(d.x,d.y);const E=c[3*T+0]*_,P=c[3*T+1],w=c[3*T+0]*L;l.push(E,P,w)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const _=x+M*t.length,L=_,T=_+t.length,E=_+t.length+1,P=_+1;r.push(L,T,P),r.push(E,P,T)}this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.points,t.segments,t.phiStart,t.phiLength)}}class Ze extends il{constructor(t=1,e=1,n=4,s=8){const r=new Tc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Ze(t.radius,t.length,t.capSegments,t.radialSegments)}}class Tt extends Oe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(f,2));function M(){const _=new D,L=new D;let T=0;const E=(e-t)/n;for(let P=0;P<=r;P++){const w=[],y=P/r,C=y*(e-t)+t;for(let N=0;N<=s;N++){const U=N/s,O=U*c+a,$=Math.sin(O),B=Math.cos(O);L.x=C*$,L.y=-y*n+m,L.z=C*B,u.push(L.x,L.y,L.z),_.set($,E,B).normalize(),d.push(_.x,_.y,_.z),f.push(U,1-y),w.push(g++)}v.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){const y=v[w][P],C=v[w+1][P],N=v[w+1][P+1],U=v[w][P+1];(t>0||w!==0)&&(h.push(y,C,U),T+=3),(e>0||w!==r-1)&&(h.push(C,N,U),T+=3)}l.addGroup(p,T,0),p+=T}function x(_){const L=g,T=new Et,E=new D;let P=0;const w=_===!0?t:e,y=_===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const C=g;for(let N=0;N<=s;N++){const O=N/s*c+a,$=Math.cos(O),B=Math.sin(O);E.x=w*B,E.y=m*y,E.z=w*$,u.push(E.x,E.y,E.z),d.push(0,y,0),T.x=$*.5+.5,T.y=B*.5*y+.5,f.push(T.x,T.y),g++}for(let N=0;N<s;N++){const U=L+N,O=C+N;_===!0?h.push(O,O+1,U):h.push(O+1,O,U),P+=3}l.addGroup(p,P,_===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class me extends Tt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new me(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mr extends Oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new D,_=new D,L=new D;for(let T=0;T<e.length;T+=3)f(e[T+0],x),f(e[T+1],_),f(e[T+2],L),c(x,_,L,M)}function c(M,x,_,L){const T=L+1,E=[];for(let P=0;P<=T;P++){E[P]=[];const w=M.clone().lerp(_,P/T),y=x.clone().lerp(_,P/T),C=T-P;for(let N=0;N<=C;N++)N===0&&P===T?E[P][N]=w:E[P][N]=w.clone().lerp(y,N/C)}for(let P=0;P<T;P++)for(let w=0;w<2*(T-P)-1;w++){const y=Math.floor(w/2);w%2===0?(d(E[P][y+1]),d(E[P+1][y]),d(E[P][y])):(d(E[P][y+1]),d(E[P+1][y+1]),d(E[P+1][y]))}}function l(M){const x=new D;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(M),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){const M=new D;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const _=m(M)/2/Math.PI+.5,L=p(M)/Math.PI+.5;o.push(_,1-L)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){const x=o[M+0],_=o[M+2],L=o[M+4],T=Math.max(x,_,L),E=Math.min(x,_,L);T>.9&&E<.1&&(x<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),L<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,x){const _=M*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function g(){const M=new D,x=new D,_=new D,L=new D,T=new Et,E=new Et,P=new Et;for(let w=0,y=0;w<r.length;w+=9,y+=6){M.set(r[w+0],r[w+1],r[w+2]),x.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),T.set(o[y+0],o[y+1]),E.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),L.copy(M).add(x).add(_).divideScalar(3);const C=m(L);v(T,y+0,M,C),v(E,y+2,x,C),v(P,y+4,_,C)}}function v(M,x,_,L){L<0&&M.x===1&&(o[x]=M.x-1),_.x===0&&_.z===0&&(o[x]=L/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.vertices,t.indices,t.radius,t.details)}}class en extends mr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new en(t.radius,t.detail)}}class sl extends Tc{constructor(t){super(t),this.uuid=pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Tc().fromJSON(s))}return this}}const H_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=gd(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=Y_(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return ar(r,o,e,a,c,f,0),o}};function gd(i,t,e,n,s){let r,o;if(s===rx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Hh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Hh(r,i[r],i[r+1],o);return o&&Ro(o,o.next)&&(lr(o),o=o.next),o}function Vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ro(e,e.next)||Te(e.prev,e,e.next)===0)){if(lr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ar(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Q_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?X_(i,n,s,r):W_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),lr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=$_(Vi(i),t,e),ar(i,t,e,n,s,r,2)):o===2&&q_(i,t,e,n,s,r):ar(Vi(i),t,e,n,s,r,1);break}}}function W_(i){const t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&fs(s,a,r,c,o,l,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function X_(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Ac(f,g,t,e,n),M=Ac(v,m,t,e,n);let x=i.prevZ,_=i.nextZ;for(;x&&x.z>=p&&_&&_.z<=M;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&fs(a,h,c,u,l,d,x.x,x.y)&&Te(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&fs(a,h,c,u,l,d,_.x,_.y)&&Te(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&fs(a,h,c,u,l,d,x.x,x.y)&&Te(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&fs(a,h,c,u,l,d,_.x,_.y)&&Te(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function $_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Ro(s,r)&&vd(s,n,n.next,r)&&cr(s,r)&&cr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),lr(n),lr(n.next),n=i=r),n=n.next}while(n!==i);return Vi(n)}function q_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&nx(o,a)){let c=_d(o,a);o=Vi(o,o.next),c=Vi(c,c.next),ar(o,t,e,n,s,r,0),ar(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Y_(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=gd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(ex(l));for(s.sort(j_),r=0;r<s.length;r++)e=K_(s[r],e);return e}function j_(i,t){return i.x-t.x}function K_(i,t){const e=Z_(i,t);if(!e)return t;const n=_d(e,i);return Vi(n,n.next),Vi(e,e.next)}function Z_(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&fs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),cr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&J_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function J_(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function Q_(i,t,e,n){let s=i;do s.z===0&&(s.z=Ac(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,tx(s)}function tx(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Ac(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ex(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function fs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function nx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ix(i,t)&&(cr(i,t)&&cr(t,i)&&sx(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||Ro(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ro(i,t){return i.x===t.x&&i.y===t.y}function vd(i,t,e,n){const s=Zr(Te(i,t,e)),r=Zr(Te(i,t,n)),o=Zr(Te(e,n,i)),a=Zr(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&Kr(i,e,t)||r===0&&Kr(i,n,t)||o===0&&Kr(e,i,n)||a===0&&Kr(e,t,n))}function Kr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zr(i){return i>0?1:i<0?-1:0}function ix(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&vd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function cr(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function sx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _d(i,t){const e=new Cc(i.i,i.x,i.y),n=new Cc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Hh(i,t,e,n){const s=new Cc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Cc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function rx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class er{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return er.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Wh(t),Xh(n,t);let o=t.length;e.forEach(Wh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Xh(n,e[c]);const a=H_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Wh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Xh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Po extends Oe{constructor(t=new sl([new Et(.5,.5),new Et(-.5,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:ox;let x,_=!1,L,T,E,P;p&&(x=p.getSpacedPoints(h),_=!0,d=!1,L=p.computeFrenetFrames(h,!1),T=new D,E=new D,P=new D),d||(m=0,f=0,g=0,v=0);const w=a.extractPoints(l);let y=w.shape;const C=w.holes;if(!er.isClockWise(y)){y=y.reverse();for(let X=0,it=C.length;X<it;X++){const I=C[X];er.isClockWise(I)&&(C[X]=I.reverse())}}const U=er.triangulateShape(y,C),O=y;for(let X=0,it=C.length;X<it;X++){const I=C[X];y=y.concat(I)}function $(X,it,I){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(it,I)}const B=y.length,j=U.length;function z(X,it,I){let Ct,et,ht;const nt=X.x-it.x,Mt=X.y-it.y,_t=I.x-X.x,R=I.y-X.y,b=nt*nt+Mt*Mt,V=nt*R-Mt*_t;if(Math.abs(V)>Number.EPSILON){const K=Math.sqrt(b),ot=Math.sqrt(_t*_t+R*R),Z=it.x-Mt/K,Ut=it.y+nt/K,At=I.x-R/ot,Y=I.y+_t/ot,wt=((At-Z)*R-(Y-Ut)*_t)/(nt*R-Mt*_t);Ct=Z+nt*wt-X.x,et=Ut+Mt*wt-X.y;const tt=Ct*Ct+et*et;if(tt<=2)return new Et(Ct,et);ht=Math.sqrt(tt/2)}else{let K=!1;nt>Number.EPSILON?_t>Number.EPSILON&&(K=!0):nt<-Number.EPSILON?_t<-Number.EPSILON&&(K=!0):Math.sign(Mt)===Math.sign(R)&&(K=!0),K?(Ct=-Mt,et=nt,ht=Math.sqrt(b)):(Ct=nt,et=Mt,ht=Math.sqrt(b/2))}return new Et(Ct/ht,et/ht)}const rt=[];for(let X=0,it=O.length,I=it-1,Ct=X+1;X<it;X++,I++,Ct++)I===it&&(I=0),Ct===it&&(Ct=0),rt[X]=z(O[X],O[I],O[Ct]);const pt=[];let vt,bt=rt.concat();for(let X=0,it=C.length;X<it;X++){const I=C[X];vt=[];for(let Ct=0,et=I.length,ht=et-1,nt=Ct+1;Ct<et;Ct++,ht++,nt++)ht===et&&(ht=0),nt===et&&(nt=0),vt[Ct]=z(I[Ct],I[ht],I[nt]);pt.push(vt),bt=bt.concat(vt)}for(let X=0;X<m;X++){const it=X/m,I=f*Math.cos(it*Math.PI/2),Ct=g*Math.sin(it*Math.PI/2)+v;for(let et=0,ht=O.length;et<ht;et++){const nt=$(O[et],rt[et],Ct);lt(nt.x,nt.y,-I)}for(let et=0,ht=C.length;et<ht;et++){const nt=C[et];vt=pt[et];for(let Mt=0,_t=nt.length;Mt<_t;Mt++){const R=$(nt[Mt],vt[Mt],Ct);lt(R.x,R.y,-I)}}}const Nt=g+v;for(let X=0;X<B;X++){const it=d?$(y[X],bt[X],Nt):y[X];_?(E.copy(L.normals[0]).multiplyScalar(it.x),T.copy(L.binormals[0]).multiplyScalar(it.y),P.copy(x[0]).add(E).add(T),lt(P.x,P.y,P.z)):lt(it.x,it.y,0)}for(let X=1;X<=h;X++)for(let it=0;it<B;it++){const I=d?$(y[it],bt[it],Nt):y[it];_?(E.copy(L.normals[X]).multiplyScalar(I.x),T.copy(L.binormals[X]).multiplyScalar(I.y),P.copy(x[X]).add(E).add(T),lt(P.x,P.y,P.z)):lt(I.x,I.y,u/h*X)}for(let X=m-1;X>=0;X--){const it=X/m,I=f*Math.cos(it*Math.PI/2),Ct=g*Math.sin(it*Math.PI/2)+v;for(let et=0,ht=O.length;et<ht;et++){const nt=$(O[et],rt[et],Ct);lt(nt.x,nt.y,u+I)}for(let et=0,ht=C.length;et<ht;et++){const nt=C[et];vt=pt[et];for(let Mt=0,_t=nt.length;Mt<_t;Mt++){const R=$(nt[Mt],vt[Mt],Ct);_?lt(R.x,R.y+x[h-1].y,x[h-1].x+I):lt(R.x,R.y,u+I)}}}q(),at();function q(){const X=s.length/3;if(d){let it=0,I=B*it;for(let Ct=0;Ct<j;Ct++){const et=U[Ct];It(et[2]+I,et[1]+I,et[0]+I)}it=h+m*2,I=B*it;for(let Ct=0;Ct<j;Ct++){const et=U[Ct];It(et[0]+I,et[1]+I,et[2]+I)}}else{for(let it=0;it<j;it++){const I=U[it];It(I[2],I[1],I[0])}for(let it=0;it<j;it++){const I=U[it];It(I[0]+B*h,I[1]+B*h,I[2]+B*h)}}n.addGroup(X,s.length/3-X,0)}function at(){const X=s.length/3;let it=0;St(O,it),it+=O.length;for(let I=0,Ct=C.length;I<Ct;I++){const et=C[I];St(et,it),it+=et.length}n.addGroup(X,s.length/3-X,1)}function St(X,it){let I=X.length;for(;--I>=0;){const Ct=I;let et=I-1;et<0&&(et=X.length-1);for(let ht=0,nt=h+m*2;ht<nt;ht++){const Mt=B*ht,_t=B*(ht+1),R=it+Ct+Mt,b=it+et+Mt,V=it+et+_t,K=it+Ct+_t;Bt(R,b,V,K)}}}function lt(X,it,I){c.push(X),c.push(it),c.push(I)}function It(X,it,I){kt(X),kt(it),kt(I);const Ct=s.length/3,et=M.generateTopUV(n,s,Ct-3,Ct-2,Ct-1);mt(et[0]),mt(et[1]),mt(et[2])}function Bt(X,it,I,Ct){kt(X),kt(it),kt(Ct),kt(it),kt(I),kt(Ct);const et=s.length/3,ht=M.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);mt(ht[0]),mt(ht[1]),mt(ht[3]),mt(ht[1]),mt(ht[2]),mt(ht[3])}function kt(X){s.push(c[X*3+0]),s.push(c[X*3+1]),s.push(c[X*3+2])}function mt(X){r.push(X.x),r.push(X.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ax(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ec[s.type]().fromJSON(s)),new Po(n,t.options)}}const ox={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new Et(r,o),new Et(a,c),new Et(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Et(o,1-c),new Et(l,1-u),new Et(d,1-g),new Et(v,1-p)]:[new Et(a,1-c),new Et(h,1-u),new Et(f,1-g),new Et(m,1-p)]}};function ax(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class mn extends mr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new mn(t.radius,t.detail)}}class rl extends mr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rl(t.radius,t.detail)}}class ve extends Oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new D,d=new D,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){const T=L/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+_,1-x),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const x=h[p][M+1],_=h[p][M],L=h[p+1][M],T=h[p+1][M+1];(p!==0||o>0)&&f.push(x,_,T),(p!==n-1||c<Math.PI)&&f.push(_,L,T)}this.setIndex(f),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Gi extends Oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,M=(s+1)*f+g;o.push(v,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class cx extends Ge{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class oe extends Xi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wu,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ww extends oe{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function Jr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function lx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function hx(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function $h(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function xd(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}class Lo{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ux extends Lo{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ll:r=t,a=2*e-n;break;case Il:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ll:o=t,c=2*n-e;break;case Il:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*v+.5*g,_=f*m-f*v;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+M*o[l+L]+x*o[c+L]+_*o[u+L];return r}}class dx extends Lo{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class fx extends Lo{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class kn{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jr(e,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Jr(t.times,Array),values:Jr(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fx(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dx(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ux(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ho:e=this.InterpolantFactoryMethodDiscrete;break;case wc:e=this.InterpolantFactoryMethodLinear;break;case zo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ho;case this.InterpolantFactoryMethodLinear:return wc;case this.InterpolantFactoryMethodSmooth:return zo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&lx(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zo,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=e[u+g];if(v!==e[d+g]||v!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=wc;class Ls extends kn{constructor(t,e,n){super(t,e,n)}}Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=ho;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class yd extends kn{}yd.prototype.ValueTypeName="color";class go extends kn{}go.prototype.ValueTypeName="number";class px extends Lo{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let l=t*a;for(let h=l+a;l!==h;l+=4)Wi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Io extends kn{InterpolantFactoryMethodLinear(t){return new px(this.times,this.values,this.getValueSize(),t)}}Io.prototype.ValueTypeName="quaternion";Io.prototype.InterpolantFactoryMethodSmooth=void 0;class Is extends kn{constructor(t,e,n){super(t,e,n)}}Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=ho;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;class vo extends kn{}vo.prototype.ValueTypeName="vector";class Xw{constructor(t="",e=-1,n=[],s=zf){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(gx(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(kn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=hx(c);c=$h(c,1,h),l=$h(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new go(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,v){if(f.length!==0){const m=[],p=[];xd(f,m,p,g),m.length!==0&&v.push(new u(d,m,p))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const x=d[g];m.push(x.time),p.push(x.morphTarget===v?1:0)}s.push(new go(".morphTargetInfluence["+v+"]",m,p))}c=f.length*o}else{const f=".bones["+e[u].name+"]";n(vo,f+".position",d,"pos",s),n(Io,f+".quaternion",d,"rot",s),n(vo,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function mx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return go;case"vector":case"vector2":case"vector3":case"vector4":return vo;case"color":return yd;case"quaternion":return Io;case"bool":case"boolean":return Ls;case"string":return Is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function gx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=mx(i.type);if(i.times===void 0){const e=[],n=[];xd(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const gi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class vx{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const _x=new vx;class gr{constructor(t){this.manager=t!==void 0?t:_x,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}gr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class xx extends Error{constructor(t,e){super(t),this.response=e}}class $w extends gr{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=gi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Wn[t]!==void 0){Wn[t].push({onLoad:e,onProgress:n,onError:s});return}Wn[t]=[],Wn[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Wn[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){M();function M(){u.read().then(({done:x,value:_})=>{if(x)p.close();else{v+=_.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let T=0,E=h.length;T<E;T++){const P=h[T];P.onProgress&&P.onProgress(L)}p.enqueue(_),M()}},x=>{p.error(x)})}}});return new Response(m)}else throw new xx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{gi.add(t,l);const h=Wn[t];delete Wn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Wn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Wn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class yx extends gr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=gi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=rr("img");function c(){h(),gi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class qw extends gr{constructor(t){super(t)}load(t,e,n,s){const r=new He,o=new yx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Do extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class wx extends Do{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ya=new te,qh=new D,Yh=new D;class ol{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zc,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(qh),Yh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yh),e.updateMatrixWorld(),ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Mx extends ol{constructor(){super(new Ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ss*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Yw extends Do{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Mx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const jh=new te,Gs=new D,wa=new D;class bx extends ol{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gs),wa.copy(n.position),wa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wa),n.updateMatrixWorld(),s.makeTranslation(-Gs.x,-Gs.y,-Gs.z),jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh)}}class Sx extends Do{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new bx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ex extends ol{constructor(){super(new Jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tx extends Do{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Ex}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class jw{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Kw extends gr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=gi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return gi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),gi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});gi.add(t,c),r.manager.itemStart(t)}}class wd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Kh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Kh(){return performance.now()}const al="\\[\\]\\.:\\/",Ax=new RegExp("["+al+"]","g"),cl="[^"+al+"]",Cx="[^"+al.replace("\\.","")+"]",Rx=/((?:WC+[\/:])*)/.source.replace("WC",cl),Px=/(WCOD+)?/.source.replace("WCOD",Cx),Lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),Ix=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),Dx=new RegExp("^"+Rx+Px+Lx+Ix+"$"),Ux=["material","materials","bones","map"];class Nx{constructor(t,e,n){const s=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ge{constructor(t,e,n){this.path=e,this.parsedPath=n||ge.parseTrackName(e),this.node=ge.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ge.Composite(t,e,n):new ge(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ax,"")}static parseTrackName(t){const e=Dx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Ux.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=ge.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[s];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ge.Composite=Nx;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Zw{constructor(t,e,n,s,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=s,this.count=r,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const Zh=new te;class Jh{constructor(t,e,n=0,s=1/0){this.ray=new pr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Kc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Zh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zh),this}intersectObject(t,e=!0,n=[]){return Rc(t,this,n,e),n.sort(Qh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Rc(t[s],this,n,e);return n.sort(Qh),n}}function Qh(i,t){return i.distance-t.distance}function Rc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Rc(r[o],t,e,!0)}}class Jw extends C_{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Oe;s.setAttribute("position",new ue(e,3)),s.setAttribute("color",new ue(n,3));const r=new hd({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){const s=new Dt,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);const se={grass:7319103,grassDark:5213996,grassLight:9225297,dirt:13214826,dirtDark:11109455,soil:8016434,wheatYoung:8372026,wheatRipe:14725959,treeLeaf:3116878,treeLeafDark:2060352,trunk:8081971,roofRed:12731693,roofOrange:15238970,roofSlate:3096151,wallCream:15852484,wallWood:10185283,stone:14275783,fire:16752704,sky:12575743},tu={morning:{sunColor:16773590,sunIntensity:2.6,sunDir:[-.55,1,.45],hemiSky:13625599,hemiGround:6126133,hemiIntensity:1.1,fire:.6,exposure:1,background:12575743},afternoon:{sunColor:16766362,sunIntensity:2.4,sunDir:[.5,.8,.5],hemiSky:16769720,hemiGround:6974e3,hemiIntensity:.95,fire:.8,exposure:1,background:15980968},evening:{sunColor:16751210,sunIntensity:1.3,sunDir:[.75,.35,.2],hemiSky:8425680,hemiGround:3820084,hemiIntensity:1.05,fire:1.6,exposure:1,background:4871816}},F={...se,grassSunlit:10277208,cobbleLight:14933715,cobbleMid:13748925,cobbleDark:11906464,woodDark:6044193,woodLight:12882528,soilDark:5913378,soilFurrow:7030313,wheatMid:12111682,wheatGold:15448382,sackBurlap:14266476,sackRope:9199154,flourBag:16249574,flourBand:13191730,windowDay:16770216,windowNight:16758861,emberRed:16734758,flameCore:16773288,smoke:15262940,daisyWhite:16579575,daisyCenter:16103470,skinFair:16175796,skinWarm:15778462,blush:15240578,ironHoop:4670272,carrotOrange:15625754,carrotGreen:3050296,cabbageEmerald:2984533,cabbageLeaf:5810276,shroomRed:13379627,shroomStem:16117734,grassTuftDark:5081641,grassTuftBright:8962626,appleRed:14034984,breadCrust:12877370,jamBerry:11018296,jamAmber:14451236,jamLid:16183522,preserveryRoof:4017e3,bakeryRoof:12080691,copperHoop:12084024,wickerBasket:11568466,scaffoldWood:10254930,tarpBlue:3892889};function kx(i=20261025){let t=i%2147483647;return t<=0&&(t+=2147483646),()=>(t=t*16807%2147483647,(t-1)/2147483646)}function Ue(i,t=!0,e=!0){return i.traverse(n=>{if(n.isMesh){const s=n,r=s.material;(Array.isArray(r)?r:[r]).some(c=>c&&c.emissive&&c.emissive.getHex()>0)?(s.castShadow=!1,s.receiveShadow=!1):(s.castShadow=t,s.receiveShadow=e)}}),i}function Uo(i,t,e,n){const s=n[0]-e[0],r=n[1]-e[1],o=s*s+r*r||1,a=Math.max(0,Math.min(1,((i-e[0])*s+(t-e[1])*r)/o));return Math.hypot(i-(e[0]+s*a),t-(e[1]+r*a))}function $i(){return{body:new Tt(.28,.25,.68,8),hoop:new Tt(.288,.288,.05,8)}}function An(i,t=$i()){const e=new dt,n=new S(t.body,i.flat(F.wallWood,.88));n.position.y=.34;const s=i.flat(F.ironHoop,.65,.25),r=new S(t.hoop,s);r.position.y=.52;const o=new S(t.hoop,s);return o.position.y=.16,e.add(n,r,o),Ue(e)}class Fx{constructor(){G(this,"cache",new Map);G(this,"windowMaterials",[])}flat(t,e=.88,n=.02){const s=`f:${t}:${e}:${n}`;let r=this.cache.get(s);return r||(r=new oe({color:t,roughness:e,metalness:n,flatShading:!0}),this.cache.set(s,r)),r}smooth(t,e=.78,n=.04){const s=`s:${t}:${e}:${n}`;let r=this.cache.get(s);return r||(r=new oe({color:t,roughness:e,metalness:n,flatShading:!1}),this.cache.set(s,r)),r}windowGlow(){if(this.windowMaterials.length>0)return this.windowMaterials[0];const t=new oe({color:F.windowDay,emissive:F.windowNight,emissiveIntensity:.45,roughness:.35,metalness:.05});return this.windowMaterials.push(t),t}setWindowEveningFactor(t){const e=.35+t*1.15;for(const n of this.windowMaterials)n.emissiveIntensity=e}dispose(){for(const t of this.cache.values())t.dispose();for(const t of this.windowMaterials)t.dispose();this.cache.clear(),this.windowMaterials.length=0}}function hr(i,t,e,n){const s=new sl;s.moveTo(-i/2,0),s.lineTo(0,e),s.lineTo(i/2,0),s.closePath();const r=new Po(s,{depth:t,bevelEnabled:!1});return r.translate(0,0,-t/2),new S(r,n)}function vr(){return{body:new en(.3,1),neck:new Tt(.12,.07,.12,6),ear:new me(.14,.14,5),band:new Tt(.29,.29,.1,8)}}function _o(i,t,e=!1,n=vr()){const s=new dt,r=new S(n.body,i);r.scale.set(1.05,.88,.85),r.position.y=.24,s.add(r);const o=new S(n.neck,t);o.position.y=.48;const a=new S(n.ear,i);if(a.position.y=.56,a.rotation.z=.15,s.add(o,a),e){const c=new S(n.band,t);c.scale.set(1.04,1,.84),c.position.y=.25,s.add(c)}return Ue(s)}function Ox(i,t=vr(),e=$i()){const n=new dt;n.userData.buildingId="warehouse";const s=new dt;s.position.set(-.75,0,-.1),n.add(s);const r=3.5,o=4.6,a=2.8,c=new S(new ct(r+.3,.32,o+.3),i.flat(F.cobbleDark,.92));c.position.y=.16,s.add(c);const l=new S(new ct(r,a,o),i.flat(F.roofOrange,.86));l.position.y=.32+a/2,s.add(l);const h=i.flat(F.woodDark,.9),u=new ct(.2,a+.1,.2);for(const ft of[-1,1])for(const ut of[-1,1]){const Ot=new S(u,h);Ot.position.set(ft*r/2,.32+a/2,ut*o/2),s.add(Ot)}const f=hr(r+.65,o+.65,2.15,i.flat(F.roofSlate,.82));f.position.y=.32+a,s.add(f);const g=new ct(.85,.65,.75),v=new ct(.12,.36,.42),m=i.flat(F.roofOrange),p=i.windowGlow();for(const ft of[-1.05,.95]){const ut=new dt;ut.position.set(r*.32,.32+a+.85,ft);const Ot=new S(g,m),Gt=new S(v,p);Gt.position.x=.4,ut.add(Ot,Gt),s.add(ut)}const M=new S(new ct(1.45,1.85,.18),h);M.position.set(0,1.24,o/2+.06);const x=new S(new ct(1.15,1.6,.12),i.windowGlow());x.position.set(0,1.2,o/2+.1),s.add(M,x);const _=new S(new ct(1.35,.14,1.65),i.flat(F.wallWood,.88));_.position.set(0,.2,o/2+.78),_.rotation.x=.16,s.add(_);const L=An(i,e);L.position.set(-1.15,0,o/2+.65);const T=An(i,e);T.position.set(-1.15,0,o/2+1.35),T.rotation.y=.75,s.add(L,T);const E=new dt;E.position.set(1.75,0,-.45),n.add(E);const P=new S(new Tt(1.18,1.26,.55,10),i.flat(F.cobbleMid,.9));P.position.y=.27;const w=new S(new Tt(1.08,1.14,3.3,10),i.flat(F.stone,.86));w.position.y=.55+1.65;const y=new S(new me(1.26,1.35,10),i.flat(F.roofOrange,.82));y.position.y=.55+3.3+.65;const C=new S(new ve(.18,6,5),i.flat(F.roofRed,.8));C.position.y=.55+3.3+1.32,E.add(P,w,y,C);const N=new Tt(1.13,1.13,.08,10),U=i.flat(F.ironHoop,.68,.28);for(const ft of[.95,1.85,2.75,3.65]){const ut=new S(N,U);ut.position.y=ft,E.add(ut)}const O=new ct(.04,3.1,.04),$=new ct(.04,.03,.3),B=new S(O,U);B.position.set(1.14,2.1,-.14);const j=new S(O,U);j.position.set(1.14,2.1,.14),E.add(B,j);for(let ft=.8;ft<=3.5;ft+=.35){const ut=new S($,U);ut.position.set(1.14,ft,0),E.add(ut)}const z=new Tt(.09,.09,1.5,6);z.rotateZ(Math.PI/2-.26);const rt=new S(z,U);rt.position.set(-.85,3.8,.08),E.add(rt);const pt=An(i,e);pt.position.set(.85,0,1.15);const vt=An(i,e);vt.position.set(1.35,0,.75),vt.rotation.y=.55,E.add(pt,vt);const bt=new dt;bt.position.set(.9,.14,5.4),n.add(bt);const Nt=i.flat(F.sackBurlap,.88),q=i.flat(F.sackRope,.9),at=i.flat(F.flourBag,.82),St=i.flat(F.flourBand,.85),lt=i.flat(F.wallWood,.88),It=i.flat(F.woodDark,.9),Bt=i.flat(F.wickerBasket,.88),kt=i.flat(F.appleRed,.7),mt=i.flat(F.carrotOrange,.8),X=i.flat(F.cabbageEmerald,.8),it=i.flat(F.breadCrust,.85),I=i.flat(F.jamBerry,.6),Ct=i.flat(F.jamAmber,.6),et=new ct(.48,.24,.36),ht=new ct(.51,.05,.39),nt=new Tt(.22,.18,.26,8),Mt=new ve(.075,6,5),_t=new Ze(.05,.18,3,5),R=new Tt(.05,.05,.12,6),b=new me(.08,.22,5),V=new en(.11,0),K=ft=>{const ut=new dt,Ot=new S(et,lt);Ot.position.y=.12;const Gt=new S(ht,It);return Gt.position.y=.23,ft.position.y=.18,ut.add(Ot,Gt,ft),ut},ot=[];for(let ft=0;ft<16;ft++){const ut=Math.floor(ft/8),Ot=ft%8,Gt=Math.floor(Ot/4),qt=Ot%4,k=_o(Nt,q,!1,t);k.position.set(-1.35+qt*.52+ut*.08,ut*.42,-.35+Gt*.56),k.rotation.y=ft*37%10*.05-.25,k.visible=!1,bt.add(k),ot.push(k)}const Z=[],Ut=new S(new ct(1.9,.1,1.3),i.flat(F.wallWood,.9));Ut.position.set(1.95,.04,-.05),bt.add(Ut);for(let ft=0;ft<12;ft++){const ut=Math.floor(ft/6),Ot=ft%6,Gt=Math.floor(Ot/3),qt=Ot%3,k=_o(at,St,!0,t);k.position.set(1.38+qt*.55,.08+ut*.42,-.32+Gt*.56),k.rotation.y=ft*23%8*.05-.2,k.visible=!1,bt.add(k),Z.push(k)}const At=[];for(let ft=0;ft<4;ft++){const ut=new dt,Ot=new S(b,mt);Ot.position.set(-.08,0,0);const Gt=new S(b,mt);Gt.position.set(.08,0,0),ut.add(Ot,Gt);const qt=K(ut),k=Math.floor(ft/2),Rt=ft%2;qt.position.set(-.05+Rt*.48,k*.26,.42),qt.visible=!1,bt.add(qt),At.push(qt)}const Y=[];for(let ft=0;ft<4;ft++){const ut=new dt,Ot=new S(V,X);Ot.position.set(-.08,0,0);const Gt=new S(V,X);Gt.position.set(.08,0,0),ut.add(Ot,Gt);const qt=K(ut),k=Math.floor(ft/2),Rt=ft%2;qt.position.set(-.05+Rt*.48,k*.26,-.38),qt.visible=!1,bt.add(qt),Y.push(qt)}const wt=[];for(let ft=0;ft<4;ft++){const ut=new dt,Ot=new S(nt,Bt);Ot.position.y=.13,ut.add(Ot);for(let k=0;k<4;k++){const Rt=new S(Mt,kt),st=k/3*Math.PI*2;Rt.position.set(Math.cos(st)*.08,.24,Math.sin(st)*.08),ut.add(Rt)}const Gt=Math.floor(ft/2),qt=ft%2;ut.position.set(.72+qt*.44,Gt*.27,.05),ut.visible=!1,bt.add(ut),wt.push(ut)}const tt=[];for(let ft=0;ft<4;ft++){const ut=new dt,Ot=new S(_t,it);Ot.rotation.z=Math.PI/2.2,Ot.position.set(-.07,0,0);const Gt=new S(_t,it);Gt.rotation.z=Math.PI/2.2,Gt.position.set(.07,0,0),ut.add(Ot,Gt);const qt=K(ut),k=Math.floor(ft/2),Rt=ft%2;qt.position.set(2.8+Rt*.46,k*.26,-.35),qt.visible=!1,bt.add(qt),tt.push(qt)}const Lt=[];for(let ft=0;ft<4;ft++){const ut=new dt,Ot=new S(R,I);Ot.position.set(-.08,0,0);const Gt=new S(R,Ct);Gt.position.set(.08,0,0),ut.add(Ot,Gt);const qt=K(ut),k=Math.floor(ft/2),Rt=ft%2;qt.position.set(2.8+Rt*.46,k*.26,.35),qt.visible=!1,bt.add(qt),Lt.push(qt)}Ue(n);const Ht=(ft,ut)=>{const Ot=Math.min(ot.length,Math.ceil((ft.wheat??0)/1.5));for(let yt=0;yt<ot.length;yt++)ot[yt].visible=yt<Ot;const Gt=Math.min(Z.length,Math.ceil(ft.flour??0));for(let yt=0;yt<Z.length;yt++)Z[yt].visible=yt<Gt;const qt=Math.min(At.length,Math.ceil((ft.carrot??0)/1.5));for(let yt=0;yt<At.length;yt++)At[yt].visible=yt<qt;const k=Math.min(Y.length,Math.ceil((ft.cabbage??0)/1.5));for(let yt=0;yt<Y.length;yt++)Y[yt].visible=yt<k;const Rt=Math.min(wt.length,Math.ceil((ft.apple??0)/1.5));for(let yt=0;yt<wt.length;yt++)wt[yt].visible=yt<Rt;const st=Math.min(tt.length,Math.ceil((ft.bread??0)/1.5));for(let yt=0;yt<tt.length;yt++)tt[yt].visible=yt<st;const gt=Math.min(Lt.length,Math.ceil((ft.jam??0)/1.5));for(let yt=0;yt<Lt.length;yt++)Lt[yt].visible=yt<gt};return{group:n,setStockItems:Ht,setStock(ft,ut,Ot){Ht({wheat:ft,flour:ut})}}}function Bx(i,t=vr(),e=$i()){const n=new dt;n.userData.buildingId="mill";const s=new S(new Tt(1.85,2.15,1.4,8),i.flat(F.cobbleMid,.9));s.position.y=.7;const r=new S(new Tt(1.38,1.82,4.2,8),i.flat(F.wallCream,.86));r.position.y=1.4+2.1;const o=new S(new Tt(1.95,1.95,.18,8),i.flat(F.wallWood,.88));o.position.y=2.6;const a=new S(new me(1.75,2.1,8),i.flat(F.roofRed,.82));a.position.y=5.6+1.05;const c=new S(new ct(1.8,2.1,2.2),i.flat(F.wallWood,.88));c.position.set(-1.55,1.05,.2);const l=hr(2.1,2.5,.95,i.flat(F.roofOrange,.84));l.position.set(-1.55,2.1,.2);const h=new S(new ct(.85,1.45,.2),i.flat(F.woodDark,.9));h.position.set(0,.75,1.92);const u=new S(new ct(.5,.65,.16),i.windowGlow());u.position.set(0,3.6,1.6);const d=u.clone();d.position.set(-1.55,1.25,1.32);const f=An(i,e);f.position.set(1.15,0,1.85);const g=An(i,e);g.position.set(1.7,0,1.35),g.rotation.y=.45;const v=_o(i.flat(F.flourBag,.82),i.flat(F.flourBand,.85),!0,t);v.position.set(1.6,0,1.75);const m=new S(new Tt(.12,.09,.24,6),i.windowGlow());m.position.set(.65,1.85,1.95);const p=new dt;p.name="blades",p.position.set(0,4.95,1.62);const M=new S(new Tt(.24,.24,.7,8),i.flat(F.woodDark,.9));M.rotation.x=Math.PI/2,p.add(M);const x=i.flat(F.woodDark,.9),_=i.flat(F.wallCream,.78),L=i.flat(F.roofOrange,.84),T=new ct(.14,3.5,.12),E=new ct(.68,2.75,.05),P=new ct(.7,.22,.07);for(let w=0;w<4;w++){const y=new dt;y.rotation.z=w*Math.PI/2;const C=new S(T,x);C.position.y=1.75;const N=new S(E,_);N.position.set(.32,1.98,.04),N.rotation.y=.14;const U=new S(P,L);U.position.set(.32,3.25,.04),U.rotation.y=.14,y.add(C,N,U),p.add(y)}return n.add(s,r,o,a,c,l,h,u,d,f,g,v,m,p),{group:Ue(n),blades:p}}function zx(i,t=vr(),e=$i()){const n=new dt;n.userData.buildingId="shop";const s=4.6,r=3.6,o=2.55,a=new S(new ct(s,o,r),i.flat(F.wallCream,.86));a.position.y=o/2;const c=hr(s+.6,r+.6,1.55,i.flat(F.roofRed,.82));c.position.y=o;const l=new dt;l.position.set(0,1.85,r/2+.65),l.rotation.x=.32;const h=7,u=(s-.2)/h,d=new ct(u,.1,1.45);for(let w=0;w<h;w++){const y=i.flat(w%2===0?F.roofRed:F.wallCream,.8),C=new S(d,y);C.position.x=-3.7714285714285705/2+w*u,l.add(C)}const f=new S(new ct(s-.8,.85,.75),i.flat(F.wallWood,.88));f.position.set(0,.42,r/2+.45);const g=new ve(.18,6,5);g.scale(1.3,.75,.9);const v=i.flat(F.wheatGold,.78);for(let w=-2;w<=2;w++){const y=new S(g,v);y.position.set(w*.62,.92,r/2+.45),n.add(y)}const m=new S(new ct(.85,.75,.14),i.windowGlow());m.position.set(-1.15,1.45,r/2+.04);const p=m.clone();p.position.x=1.15;const M=new S(new Tt(.42,.42,.12,10),i.flat(F.wheatGold,.6,.25));M.rotation.x=Math.PI/2,M.position.set(0,3.05,r/2+.35);const x=i.flat(F.wallWood,.88),_=i.flat(F.woodDark,.9),L=new ct(.75,.48,.62),T=new ct(.79,.08,.66);for(const[w,y,C]of[[-2.1,r/2-.25,.12],[2.05,r/2+.52,-.22]]){const N=new dt;N.position.set(w,0,y),N.rotation.y=C;const U=new S(L,x);U.position.y=.24;const O=new S(T,_);O.position.y=.46;const $=_o(i.flat(F.flourBag,.82),i.flat(F.flourBand,.85),!0,t);$.scale.setScalar(.75),$.position.set(0,.38,0),N.add(U,O,$),n.add(N)}const E=An(i,e);E.position.set(-s/2-.32,0,r/2-.8);const P=new S(new Tt(.12,.09,.22,6),i.windowGlow());return P.position.set(0,2.15,r/2+1.15),n.add(E,P),n.add(a,c,l,f,m,p,M),Ue(n)}function Vx(i,t=$i()){const e=new dt;e.userData.buildingId="farmhouse";const n=5.4,s=4.2,r=2.85,o=new S(new ct(n,r,s),i.flat(F.wallCream,.86));o.position.y=r/2;const a=new S(new ct(n+.12,.75,s+.12),i.flat(F.wallWood,.9));a.position.y=.38;const c=hr(n+.7,s+.7,1.85,i.flat(F.roofOrange,.82));c.position.y=r;const l=hr(2.2,1.5,.75,i.flat(F.roofOrange,.82));l.position.set(0,1.95,s/2+.55);const h=new S(new ct(2.1,.28,1.35),i.flat(F.wallWood,.88));h.position.set(0,.14,s/2+.55);const u=new S(new ct(.95,1.65,.16),i.flat(F.woodDark,.9));u.position.set(0,.95,s/2+.04);const d=new ct(.82,.78,.15),f=new ct(.92,.2,.28),g=i.windowGlow(),v=i.flat(F.roofRed,.85),m=new en(.08,0),p=[F.roofRed,F.blush,F.daisyWhite,F.daisyCenter];for(const y of[-1.65,1.65]){const C=new S(d,g);C.position.set(y,1.48,s/2+.04);const N=new S(f,v);N.position.set(y,.98,s/2+.14),e.add(C,N);for(let U=-.3;U<=.3;U+=.15){const O=new S(m,i.flat(p[Math.floor(Math.abs(U*17+y*3))%p.length],.82));O.position.set(y+U,1.12,s/2+.16),e.add(O)}}const M=new S(new ct(.68,.68,.15),i.windowGlow());M.position.set(0,r+.65,s/2+.36);const x=new S(new ct(.72,2.2,.72),i.flat(F.roofRed,.88));x.position.set(1.65,r+1.1,-.6);const _=[],L=new mn(.26,0),T=i.flat(F.smoke,.95);for(let y=0;y<3;y++){const C=new S(L,T);C.position.set(1.65,r+2.3+y*.55,-.6),e.add(C),_.push(C)}const E=new S(new Tt(.12,.09,.24,6),i.windowGlow());E.position.set(0,1.75,s/2+1.2);const P=An(i,t);P.position.set(1.45,0,s/2+.45);const w=An(i,t);w.position.set(1.95,0,s/2+.2),w.rotation.y=.65,e.add(E,P,w),e.add(o,a,c,l,h,u,M,x),Ue(e);for(const y of _)y.castShadow=!1,y.receiveShadow=!1;return{group:e,smokePuffs:_}}function Gx(i,t){const e=new dt,n=i.buildings,s=vr(),r=$i(),o=(d,f)=>{d.position.set(f.pos[0],0,f.pos[1]),d.rotation.y=f.rotY,e.add(d)},a=Ox(t,s,r);o(a.group,n.warehouse);const c=Bx(t,s,r);o(c.group,n.mill);const l=zx(t,s,r);o(l,n.shop);const h=Vx(t,r);o(h.group,n.farmhouse);let u=0;return{group:e,setStock:a.setStock,setStockItems:a.setStockItems,update(d){u+=d,c.blades.rotation.z-=d*.95;for(let f=0;f<h.smokePuffs.length;f++){const g=(u*.42+f*.33)%1,v=h.smokePuffs[f];v.position.y=4.95+g*2.1,v.position.x=1.65+Math.sin(u*1.6+f)*.25*g;const m=Math.sin(g*Math.PI)*(.7+g*.65);v.scale.setScalar(Math.max(.01,m))}}}}function Md(i){const[t,e]=i.fieldSize,n=new me(.26,.92,5);n.translate(0,.46,0);const s=new Tt(.11,.16,.42,6);s.translate(0,.82,0);const r=new me(.24,.54,5);r.translate(0,.46,0);const o=new me(.12,.28,5);o.translate(0,.14,0);const a=new mn(.28,0);a.scale(1.15,.72,1.15),a.translate(0,.14,0);const c=new en(.18,0);return c.translate(0,.2,0),{soilBase:new ct(t,.22,e),furrow:new ct(t-.65,.11,.5),borderX:new ct(t+.16,.22,.16),borderZ:new ct(.16,.22,e+.16),post:new ct(.22,.68,.22),stalk:n,ear:s,carrotTop:r,carrotRoot:o,cabbageRosette:a,cabbageHeart:c,sheafBale:new Tt(.22,.26,.56,7),sheafTie:new Tt(.23,.23,.08,7),crateBox:new ct(.52,.28,.42),crateRim:new ct(.55,.06,.45)}}function Hx(i,t,e,n=Md(t)){const[s,r]=t.fieldSize,o=new dt,a=new oe({color:F.soil,roughness:.94,flatShading:!0}),c=new Dt(F.soil),l=new Dt(3678740),h=new Dt(7754296),u=new S(n.soilBase,a);u.position.y=.11,u.receiveShadow=!0,o.add(u);const d=6,f=6,g=new oe({color:F.soilFurrow,roughness:.94,flatShading:!0}),v=new Dt(F.soilFurrow),m=new Dt(4072466),p=new Dt(8148024);for(let nt=0;nt<d;nt++){const Mt=(nt/(d-1)-.5)*(r-1.35),_t=new S(n.furrow,g);_t.position.set(0,.24,Mt),_t.receiveShadow=!0,o.add(_t)}const M=e.flat(F.trunk,.9),x=new S(n.borderX,M);x.position.set(0,.18,-r/2);const _=new S(n.borderX,M);_.position.set(0,.18,r/2);const L=new S(n.borderZ,M);L.position.set(-s/2,.18,0);const T=new S(n.borderZ,M);T.position.set(s/2,.18,0),o.add(x,_,L,T);for(const nt of[-1,1])for(const Mt of[-1,1]){const _t=new S(n.post,M);_t.position.set(nt*s/2,.34,Mt*r/2),o.add(_t)}const E=d*f,P=new oe({color:F.wheatYoung,roughness:.85,flatShading:!0}),w=new oe({color:F.wheatGold,roughness:.78,flatShading:!0}),y=new bn(n.stalk,P,E);y.castShadow=!0,y.receiveShadow=!0,y.visible=!1;const C=new bn(n.ear,w,E);C.castShadow=!0,C.visible=!1;const N=new oe({color:F.carrotGreen,roughness:.85,flatShading:!0}),U=new oe({color:F.carrotOrange,roughness:.78,flatShading:!0}),O=new bn(n.carrotTop,N,E);O.castShadow=!0,O.receiveShadow=!0,O.visible=!1;const $=new bn(n.carrotRoot,U,E);$.castShadow=!0,$.visible=!1;const B=new oe({color:F.cabbageLeaf,roughness:.85,flatShading:!0}),j=new oe({color:F.cabbageEmerald,roughness:.78,flatShading:!0}),z=new bn(n.cabbageRosette,B,E);z.castShadow=!0,z.receiveShadow=!0,z.visible=!1;const rt=new bn(n.cabbageHeart,j,E);rt.castShadow=!0,rt.visible=!1,o.add(y,C,O,$,z,rt);const pt=new dt;pt.position.set(0,.22,r/2-.25),o.add(pt);const vt=[],bt=e.flat(F.wheatGold,.82),Nt=e.flat(F.sackRope,.9),q=e.flat(F.wallWood,.88),at=e.flat(F.woodDark,.9),St=e.flat(F.carrotOrange,.8),lt=e.flat(F.cabbageEmerald,.8);for(let nt=0;nt<8;nt++){const Mt=new dt;Mt.position.set(-2.1+nt*.6,0,nt%2*.22),Mt.visible=!1;const _t=new dt,R=new S(n.sheafBale,bt);R.position.y=.26,R.rotation.z=(nt%2===0?1:-1)*.08;const b=new S(n.sheafTie,Nt);b.position.y=.26,_t.add(R,b),Mt.add(_t);const V=new dt,K=new S(n.crateBox,q);K.position.y=.14;const ot=new S(n.crateRim,at);ot.position.y=.26;const Z=new S(n.carrotRoot,St);Z.position.y=.25,Z.scale.setScalar(1.2),V.add(K,ot,Z),Mt.add(V);const Ut=new dt,At=new S(n.crateBox,q);At.position.y=.14;const Y=new S(n.crateRim,at);Y.position.y=.26;const wt=new S(n.cabbageHeart,lt);wt.position.y=.25,wt.scale.setScalar(1.2),Ut.add(At,Y,wt),Mt.add(Ut),Ue(Mt),pt.add(Mt),vt.push({group:Mt,sheaf:_t,carrotBox:V,cabbageBox:Ut})}Ue(o);const It=new Dt(F.wheatYoung),Bt=new Dt(F.wheatMid),kt=new Dt(F.wheatRipe),mt=new Ee;let X="wheat",it=0,I=!1,Ct=0,et=!1;const ht=(nt=0)=>{if(!I){y.visible=!1,C.visible=!1,O.visible=!1,$.visible=!1,z.visible=!1,rt.visible=!1;return}const Mt=.16+it*.92,_t=it>.42,R=_t?he.smoothstep(it,.42,.95):0;y.visible=X==="wheat",C.visible=X==="wheat"&&_t,O.visible=X==="carrot",$.visible=X==="carrot"&&it>.35,z.visible=X==="cabbage",rt.visible=X==="cabbage"&&it>.38;let b=0;for(let V=0;V<d;V++)for(let K=0;K<f;K++){const ot=(K/(f-1)-.5)*(s-1.35),Z=(V/(d-1)-.5)*(r-1.35),Ut=.88+(V*7+K*5)%5*.06,At=nt*(.3+it*.7)*Math.sin(V*.9+K*.7);if(mt.position.set(ot,.26,Z),mt.rotation.set(At,(V*3+K*11)%8*.4,-At*.6),mt.scale.set(Mt,Mt*Ut,Mt),mt.updateMatrix(),X==="wheat")y.setMatrixAt(b,mt.matrix),_t&&(mt.scale.set(R,R*Ut,R),mt.updateMatrix(),C.setMatrixAt(b,mt.matrix));else if(X==="carrot"){if(O.setMatrixAt(b,mt.matrix),it>.35){const Y=he.smoothstep(it,.35,1);mt.position.set(ot,.2,Z),mt.scale.set(Y,Y,Y),mt.updateMatrix(),$.setMatrixAt(b,mt.matrix)}}else if(X==="cabbage"&&(z.setMatrixAt(b,mt.matrix),it>.38)){const Y=he.smoothstep(it,.38,1);mt.position.set(ot,.22,Z),mt.scale.set(Y,Y,Y),mt.updateMatrix(),rt.setMatrixAt(b,mt.matrix)}b++}X==="wheat"?(y.instanceMatrix.needsUpdate=!0,_t&&(C.instanceMatrix.needsUpdate=!0)):X==="carrot"?(O.instanceMatrix.needsUpdate=!0,it>.35&&($.instanceMatrix.needsUpdate=!0)):X==="cabbage"&&(z.instanceMatrix.needsUpdate=!0,it>.38&&(rt.instanceMatrix.needsUpdate=!0))};return ht(0),{object:o,setCrop(nt,Mt,_t,R){const b=R??"wheat";if((b!==X||Mt!==I||Math.abs(nt-it)>1e-4)&&(X=b,it=nt,I=Mt,et=!0,Mt&&X==="wheat"&&(nt<.55?P.color.copy(It).lerp(Bt,nt/.55):P.color.copy(Bt).lerp(kt,(nt-.55)/.45))),!I&&et&&(ht(0),et=!1),_t!==Ct||et){Ct=_t;const V=Math.min(vt.length,Math.ceil(_t/1.5));for(let K=0;K<vt.length;K++){const ot=vt[K],Z=K<V;ot.group.visible=Z,Z&&(ot.sheaf.visible=X==="wheat",ot.carrotBox.visible=X==="carrot",ot.cabbageBox.visible=X==="cabbage")}}},sway(nt){I?(ht(Math.sin(nt*2.2)*.07),et=!1):et&&(ht(0),et=!1)},setWeather(nt){g.color.copy(v),a.color.copy(c),nt.rain>.001&&(g.color.lerp(m,nt.rain*.45),a.color.lerp(l,nt.rain*.42)),nt.drought>.001&&(g.color.lerp(p,nt.drought*.35),a.color.lerp(h,nt.drought*.32));const Mt=.94-nt.rain*.35+nt.drought*.04;g.roughness=Mt,a.roughness=Mt}}}const eu=[{name:"Claude",isFemale:!1,skin:F.skinWarm,hair:2365973,tunic:9385511,pants:2829877,boots:4073754,accent:13933378},{name:"Codex",isFemale:!1,skin:F.skinFair,hair:7885102,tunic:3694910,pants:5722179,boots:4336155,accent:13145662},{name:"Gemini",isFemale:!1,skin:14855046,hair:2435638,tunic:2446755,pants:2962498,boots:1974309,accent:5871080},{name:"DeepSeek",isFemale:!0,skin:16507861,hair:2381982,tunic:1979998,pants:1979998,boots:2827037,accent:16052712}];function bd(){return{leg:new Ze(.065,.44,3,6),boot:new ct(.13,.16,.22),pantsTrousers:new Tt(.16,.15,.16,8),skirt:new Tt(.16,.32,.7,10),torsoMale:new Tt(.2,.16,.42,8),torsoFemale:new Tt(.17,.13,.38,8),chestLapel:new ct(.12,.2,.05),belt:new Tt(.165,.165,.06,8),beltBuckle:new ct(.06,.07,.04),apron:new ct(.22,.48,.06),neck:new Tt(.055,.065,.1,6),arm:new Ze(.048,.38,3,6),hand:new ve(.045,5,4),toolHandle:new Tt(.025,.025,.75,5),toolBlade:new ct(.04,.24,.14),head:new ve(.135,10,8),eye:new ve(.024,5,4),sunglasses:new ct(.14,.036,.03),hairCapMale:new ve(.142,9,7),hairBangsMale:new ct(.09,.06,.05),hairCapFemale:new ve(.144,9,7),hairLockFemale:new Ze(.032,.32,3,5),hairBackFemale:new Ze(.05,.4,3,5),maidRibbon:new me(.05,.12,5),maidFrill:new Gi(.138,.022,4,12,Math.PI),hatBrim:new Tt(.3,.32,.025,12),hatCrown:new Tt(.15,.17,.12,10),beretCap:new Tt(.17,.19,.07,10),cargoSack:new en(.28,1),bakerToque:new Tt(.16,.15,.22,10),bakerPeelHandle:new Tt(.02,.02,.72,5),bakerPeelBlade:new ct(.22,.2,.03),preserveBandana:new Tt(.165,.165,.09,10),preservePaddle:new Tt(.022,.022,.65,5),cargoBox:new ct(.48,.28,.38),cargoBoxRim:new ct(.5,.06,.4),cargoBasket:new Tt(.24,.2,.3,8),cargoApple:new ve(.075,5,4),cargoBread:new Ze(.055,.2,3,5),cargoJar:new Tt(.055,.055,.14,6),cargoCarrot:new me(.08,.22,5),cargoCabbage:new en(.11,0)}}function Wx(i,t,e=bd()){const n=eu[i%eu.length],s=new dt,r=new oe({color:n.tunic,roughness:.82,flatShading:!0}),o=new oe({color:n.accent,roughness:.8,flatShading:!0}),a=t.smooth(n.skin,.72),c=t.flat(n.hair,.78),l=t.flat(n.pants,.84),h=t.flat(n.boots,.88),u=t.flat(3547926,.85),d=t.flat(13740622,.4,.6),f=new dt;f.position.set(-.11,.82,0);const g=new dt;g.position.set(.11,.82,0);const v=()=>{const Y=new dt,wt=new S(e.leg,n.isFemale?a:l);wt.position.y=-.34;const tt=new S(e.boot,h);return tt.position.set(0,-.74,.03),Y.add(wt,tt),Y};f.add(v()),g.add(v()),s.add(f,g);const m=new dt;m.position.set(0,.82,0),s.add(m);let p=null;if(n.isFemale){p=new S(e.skirt,r),p.position.y=-.35;const Y=new S(e.torsoFemale,r);Y.position.y=.2;const wt=new S(e.apron,o);wt.position.set(0,-.16,.14);const tt=new S(e.belt,o);tt.position.y=.02,m.add(p,Y,wt,tt)}else{const Y=new S(e.pantsTrousers,l);Y.position.y=.08;const wt=new S(e.belt,u);wt.position.y=.16;const tt=new S(e.beltBuckle,d);tt.position.set(0,.16,.17);const Lt=new S(e.torsoMale,r);if(Lt.position.y=.38,m.add(Y,wt,tt,Lt),i===0){const Ht=new S(e.chestLapel,a);Ht.position.set(0,.44,.15),m.add(Ht)}}const M=n.isFemale?.2:.24,x=n.isFemale?.4:.48,_=new dt;_.position.set(-M,x,0);const L=new dt;L.position.set(M,x,0);const T=()=>{const Y=new dt,wt=new S(e.arm,r);wt.position.y=-.22;const tt=new S(e.hand,a);return tt.position.y=-.43,Y.add(wt,tt),Y};_.add(T()),L.add(T());const E=new dt,P=new S(e.toolHandle,t.flat(F.woodDark,.88));P.rotation.x=Math.PI/2.2,P.position.set(0,-.42,.2);const w=new S(e.toolBlade,t.flat(F.cobbleLight,.5,.4));w.position.set(0,-.5,.48),E.add(P,w),E.visible=!1;const y=new dt,C=new S(e.bakerPeelHandle,t.flat(F.wallWood,.88));C.rotation.x=Math.PI/2.2,C.position.set(0,-.4,.2);const N=new S(e.bakerPeelBlade,t.flat(F.woodLight,.85));N.position.set(0,-.46,.5),y.add(C,N),y.visible=!1;const U=new dt,O=new S(e.preservePaddle,t.flat(F.woodDark,.88));O.rotation.x=Math.PI/2.2,O.position.set(0,-.38,.2);const $=new S(new Tt(.06,.04,.08,6),t.flat(F.copperHoop,.6,.3));$.position.set(0,-.44,.46),U.add(O,$),U.visible=!1,L.add(E,y,U),m.add(_,L);const B=new dt;B.position.set(0,n.isFemale?.42:.58,0),m.add(B);const j=new S(e.neck,a);j.position.y=.05,B.add(j);const z=new S(e.head,a);z.position.y=.2,B.add(z);const rt=t.flat(2039076,.4);for(const Y of[-.045,.045]){const wt=new S(e.eye,rt);wt.position.set(Y,.2,.13),B.add(wt)}if(n.isFemale){const Y=new S(e.hairCapFemale,c);Y.position.set(0,.22,-.02);const wt=new S(e.hairLockFemale,c);wt.position.set(-.11,.05,.06),wt.rotation.z=.1;const tt=new S(e.hairLockFemale,c);tt.position.set(.11,.05,.06),tt.rotation.z=-.1;const Lt=new S(e.hairBackFemale,c);Lt.position.set(0,.02,-.13),Lt.rotation.x=-.22;const Ht=new S(e.maidFrill,o);Ht.position.set(0,.23,.01),Ht.rotation.x=-Math.PI/2.3;const ft=new S(e.maidRibbon,c);ft.position.set(-.16,.2,.02),ft.rotation.z=Math.PI/2.8;const ut=new S(e.maidRibbon,c);ut.position.set(.16,.2,.02),ut.rotation.z=-Math.PI/2.8,B.add(Y,wt,tt,Lt,Ht,ft,ut)}else if(i===0){const Y=new S(e.hairCapMale,c);Y.position.set(0,.22,-.01),Y.scale.set(1.02,1.05,1.02);const wt=new S(e.hairBangsMale,c);wt.position.set(.02,.31,.1),wt.rotation.z=-.15,B.add(Y,wt)}else if(i===1){const Y=new S(e.hairCapMale,c);Y.position.set(0,.23,-.02);const wt=new S(e.hairBangsMale,c);wt.position.set(-.03,.3,.11),wt.rotation.z=.18,B.add(Y,wt)}else{const Y=new S(e.hairCapMale,c);Y.position.set(0,.23,-.02),Y.scale.set(.98,.98,.98);const wt=new S(e.sunglasses,t.flat(1381915,.3,.8));wt.position.set(0,.2,.132),B.add(Y,wt)}const pt=new S(e.hatBrim,t.flat(14595932,.85));pt.position.y=.35,pt.visible=!1;const vt=new S(e.hatCrown,t.flat(14595932,.85));vt.position.y=.42,vt.visible=!1;const bt=new S(e.beretCap,t.flat(15920868,.8));bt.position.set(.02,.34,-.02),bt.rotation.z=.15,bt.visible=!1;const Nt=new S(e.bakerToque,t.flat(16052712,.85));Nt.position.set(0,.42,0),Nt.visible=!1;const q=new S(e.preserveBandana,t.flat(F.jamBerry,.82));q.position.set(0,.31,-.01),q.visible=!1,B.add(pt,vt,bt,Nt,q);const at=new dt;at.position.set(0,.46,-.24);const St=new dt,lt=new S(e.cargoSack,t.flat(F.wheatRipe,.84));lt.scale.set(1.05,.88,.85);const It=lt.clone();It.position.set(0,.32,.04),It.scale.set(.88,.76,.76),St.add(lt,It);const Bt=new dt,kt=new S(e.cargoSack,t.flat(F.flourBag,.82));kt.scale.set(1.05,.88,.85);const mt=new S(new Tt(.25,.25,.08,8),t.flat(3696035,.85));mt.position.y=.02,kt.add(mt);const X=kt.clone();X.position.set(0,.32,.04),X.scale.set(.88,.76,.76),Bt.add(kt,X);const it=Y=>{const wt=new dt,tt=t.flat(F.wallWood,.88),Lt=t.flat(F.woodDark,.9),Ht=new dt,ft=new S(e.cargoBox,tt),ut=new S(e.cargoBoxRim,Lt);ut.position.y=.12,Ht.add(ft,ut,Y());const Ot=new dt,Gt=new S(e.cargoBox,tt),qt=new S(e.cargoBoxRim,Lt);return qt.position.y=.12,Ot.add(Gt,qt,Y()),Ot.position.set(0,.32,.02),Ot.scale.setScalar(.9),wt.add(Ht,Ot),{group:wt,layer2:Ot}},I=it(()=>{const Y=new dt,wt=new S(e.cargoCarrot,t.flat(F.carrotOrange,.8));wt.position.set(-.09,.08,0);const tt=new S(e.cargoCarrot,t.flat(F.carrotOrange,.8));return tt.position.set(.09,.08,0),Y.add(wt,tt),Y}),Ct=it(()=>{const Y=new dt,wt=new S(e.cargoCabbage,t.flat(F.cabbageEmerald,.8));wt.position.set(-.09,.08,0);const tt=new S(e.cargoCabbage,t.flat(F.cabbageEmerald,.8));return tt.position.set(.09,.08,0),Y.add(wt,tt),Y}),et=new dt,ht=new dt,nt=new S(e.cargoBasket,t.flat(F.wickerBasket,.88));ht.add(nt);for(let Y=0;Y<4;Y++){const wt=new S(e.cargoApple,t.flat(F.appleRed,.7)),tt=Y/3*Math.PI*2;wt.position.set(Math.cos(tt)*.08,.12,Math.sin(tt)*.08),ht.add(wt)}const Mt=ht.clone();Mt.position.set(0,.32,.02),Mt.scale.setScalar(.88),et.add(ht,Mt);const _t=it(()=>{const Y=new dt,wt=t.flat(F.breadCrust,.85),tt=new S(e.cargoBread,wt);tt.rotation.z=Math.PI/2.2,tt.position.set(-.08,.08,0);const Lt=new S(e.cargoBread,wt);return Lt.rotation.z=Math.PI/2.2,Lt.position.set(.08,.08,0),Y.add(tt,Lt),Y}),R=it(()=>{const Y=new dt,wt=new S(e.cargoJar,t.flat(F.jamBerry,.6));wt.position.set(-.09,.08,0);const tt=new S(e.cargoJar,t.flat(F.jamAmber,.6));return tt.position.set(.09,.08,0),Y.add(wt,tt),Y});at.add(St,Bt,I.group,Ct.group,et,_t.group,R.group),at.visible=!1,m.add(at),Ue(s);let b=i*1.3,V=!1,K=null,ot=-1,Z="wheat",Ut=!0;const At=()=>{if(ot<=0){at.visible=!1;return}at.visible=!0;const Y=ot>=3;St.visible=Z==="wheat",It.visible=Y,Bt.visible=Z==="flour",X.visible=Y,I.group.visible=Z==="carrot",I.layer2.visible=Y,Ct.group.visible=Z==="cabbage",Ct.layer2.visible=Y,et.visible=Z==="apple",Mt.visible=Y,_t.group.visible=Z==="bread",_t.layer2.visible=Y,R.group.visible=Z==="jam",R.layer2.visible=Y};return{object:s,setState(Y,wt,tt,Lt){Y!==K&&(K=Y,pt.visible=Y==="farm"||Y==="sell",vt.visible=Y==="farm",bt.visible=Y==="mill",E.visible=Y==="farm",Nt.visible=Y==="bake",y.visible=Y==="bake",q.visible=Y==="preserve",U.visible=Y==="preserve",Ut=!0),wt!==V&&(V=wt,Ut=!0);const Ht=Lt??"wheat";(tt!==ot||Ht!==Z)&&(ot=tt,Z=Ht,At(),Ut=!0)},tick(Y){if(!(Y===0&&!Ut))if(Ut=!1,b+=Y,V){const wt=b*7.5,tt=Math.sin(wt)*.45;f.rotation.x=tt,g.rotation.x=-tt,p&&(p.rotation.x=-tt*.12),ot>0?(_.rotation.x=-.55+Math.sin(wt)*.08,L.rotation.x=-.55-Math.sin(wt)*.08):(_.rotation.x=-tt*.65,L.rotation.x=tt*.65),m.position.y=.82+Math.abs(Math.sin(wt))*.035,m.rotation.x=.05,B.rotation.z=Math.sin(wt*.5)*.04}else f.rotation.x=0,g.rotation.x=0,p&&(p.rotation.x=0),m.position.y=.82+Math.sin(b*2)*.012,m.rotation.x=0,K==="farm"?(L.rotation.x=-.45+Math.sin(b*4.2)*.4,_.rotation.x=-.15):K==="mill"||K==="sell"?(_.rotation.x=-.28+Math.sin(b*3.2)*.18,L.rotation.x=-.28-Math.sin(b*3.2)*.18):K==="bake"?(_.rotation.x=-.32+Math.sin(b*3.5)*.18,L.rotation.x=-.42+Math.cos(b*3.5)*.22):K==="preserve"?(_.rotation.x=-.18,L.rotation.x=-.38+Math.sin(b*3)*.16,L.rotation.z=Math.cos(b*3)*.16):(_.rotation.x=0,L.rotation.x=0),B.rotation.z=Math.sin(b*1.5)*.02}}}function Xx(i,t,e){const n=new dt;n.name=`FruitTree_${i}`;const s=new dt;n.add(s);const r=new Tt(1.7,1.85,.12,16);r.translate(0,.06,0);const o=new oe({color:F.soilDark,roughness:.94,flatShading:!0}),a=new S(r,o);a.receiveShadow=!0,s.add(a);const c=new Gi(1.78,.12,6,16);c.rotateX(Math.PI/2),c.translate(0,.09,0);const l=e.flat(F.cobbleMid,.9),h=new S(c,l);s.add(h);const u=new dt,d=new Tt(.04,.04,.9,6),f=e.flat(F.woodDark,.9),g=new S(d,f);g.position.set(.4,.45,.3),g.rotation.z=-.1;const v=new ct(.36,.24,.04),m=e.flat(F.woodLight,.85),p=new S(v,m);p.position.set(.4,.8,.3),p.rotation.y=.3;const M=new S(new Tt(.02,.02,.75,5),f);M.position.set(-.35,.42,-.2),M.rotation.x=.22,M.rotation.z=.18;const x=new S(new ct(.12,.18,.02),e.flat(F.ironHoop,.5,.3));x.position.set(-.35,.14,-.26),x.rotation.x=.22,x.rotation.z=.18,u.add(g,p,M,x),n.add(u);const _=new dt,L=new S(new Tt(.04,.06,1.4,6),e.flat(F.trunk,.88));L.position.y=.7;const T=new S(new Tt(.035,.035,1.5,5),f);T.position.set(.12,.75,.02),T.rotation.z=-.05;const E=e.flat(F.treeLeaf,.85),P=new S(new mn(.24,0),E);P.position.set(0,1.35,0);const w=new S(new mn(.18,0),E);w.position.set(.14,1.25,.08),_.add(L,T,P,w),_.visible=!1,n.add(_);const y=new dt;n.add(y);const C=e.flat(F.trunk,.88),N=new S(new Tt(.32,.48,1.4,8),C);N.position.y=.7;const U=new S(new Tt(.26,.32,1.2,7),C);U.position.set(.04,1.8,.02),U.rotation.z=-.08;const O=new Tt(.14,.22,1.2,6),$=new S(O,C);$.position.set(-.45,2.6,.2),$.rotation.set(.3,.4,.6);const B=new S(O,C);B.position.set(.48,2.55,-.3),B.rotation.set(-.4,.2,-.65);const j=new S(O,C);j.position.set(.1,2.7,.55),j.rotation.set(-.7,-.2,.1),y.add(N,U,$,B,j);const z=new dt;z.position.y=2.8,y.add(z);const rt=new oe({color:F.treeLeaf,roughness:.84,flatShading:!0}),pt=new oe({color:F.treeLeafDark,roughness:.86,flatShading:!0}),vt=[[0,.9,0,1.35,!1],[-1,.6,.4,1.15,!0],[1.1,.5,-.35,1.12,!1],[.2,.4,1.05,1.1,!0],[-.3,.35,-1,1.05,!1],[.85,.85,.6,.95,!1],[-.7,.95,-.5,.92,!0]];for(const[ht,nt,Mt,_t,R]of vt){const b=new mn(_t,0),V=new S(b,R?pt:rt);V.position.set(ht,nt,Mt),z.add(V)}const bt=new dt;z.add(bt);const Nt=new ve(.12,7,6);Nt.scale(1,.95,1);const q=e.flat(F.appleRed,.65,.08),at=[[-.8,.2,.9],[-1.3,.5,.2],[-1,1,.4],[-.4,.3,1.4],[.3,.1,1.4],[.9,.3,1],[1.4,.4,.1],[1.3,.7,-.5],[.8,.2,-1.1],[-.2,.2,-1.3],[-.9,.4,-.9],[-.1,1.5,.3],[.6,1.3,.4],[-.6,1.3,-.4],[.3,1.4,-.5],[0,1.8,0],[-1.1,.2,-.3],[1.1,.3,.6]];for(const[ht,nt,Mt]of at){const _t=new S(Nt,q);_t.position.set(ht,nt,Mt),bt.add(_t)}bt.visible=!1;const St=new dt;n.add(St);const lt=new Tt(.26,.21,.32,8);lt.translate(0,.16,0);const It=new Gi(.26,.035,4,8);It.rotateX(Math.PI/2),It.translate(0,.32,0);const Bt=e.flat(F.wickerBasket,.88),kt=e.flat(F.woodDark,.9),mt=[[.95,.12,.45],[.65,.12,.85],[1.15,.12,.95],[-.85,.12,.65],[-.65,.12,1.05]],X=[];for(let ht=0;ht<mt.length;ht++){const[nt,Mt,_t]=mt[ht],R=new dt;R.position.set(nt,Mt,_t);const b=new S(lt,Bt),V=new S(It,kt);R.add(b,V);for(let K=0;K<5;K++){const ot=new S(Nt,q);ot.scale.setScalar(.72);const Z=K/4*Math.PI*2,Ut=K===4?0:.11;ot.position.set(Math.cos(Z)*Ut,.28+(K===4?.07:0),Math.sin(Z)*Ut),R.add(ot)}R.visible=!1,St.add(R),X.push(R)}Ue(n);let it=!1,I=0,Ct=!1,et=0;return{object:n,setState(ht,nt,Mt,_t){if(it=ht,I=Math.max(0,Math.min(1,nt)),Ct=Mt,et=Math.max(0,_t),!ht){u.visible=!0,_.visible=!1,y.visible=!1,bt.visible=!1;for(const b of X)b.visible=!1;return}if(u.visible=!1,I<.28){_.visible=!0,y.visible=!1,bt.visible=!1;const b=.55+I/.28*.45;_.scale.set(b,b,b)}else{_.visible=!1,y.visible=!0;const V=.45+he.smoothstep(I,.28,1)*.55;y.scale.set(V,V,V),bt.visible=Ct&&I>=.7}const R=Math.min(X.length,Math.ceil(et/1));for(let b=0;b<X.length;b++)X[b].visible=b<R},update(ht,nt,Mt){if(it&&I>=.28){const _t=Math.sin(nt*1.8)*.04;z.rotation.z=_t,z.rotation.x=Math.cos(nt*1.3)*.025}Mt.drought>.01?rt.roughness=.88+Mt.drought*.06:Mt.rain>.01&&(rt.roughness=.84-Mt.rain*.25)}}}function $x(i){const t=[];for(const s of Object.values(i.paths))for(let r=1;r<s.length;r++)t.push([s[r-1],s[r]]);const e=i.plaza,n=i.buildings.farmhouse.door;return t.push([n,[0,5.5]],[[0,5.5],e]),t.push([e,[12,-3.5]],[[12,-3.5],[24,-14]],[[24,-14],[38,-26]],[[0,5.5],[-14,14]],[[-14,14],[-32,25]],[[-1.5,-2],[-4.5,-13]],[[-4.5,-13],[-5.5,-27]]),t}function Qr(i,t,e,n,s=0){var r,o;if(Math.hypot(i-e.plaza[0],t-e.plaza[1])<6.8+s)return!0;for(const a of Object.values(e.buildings)){const c=a.size[0]/2+2.6+s,l=a.size[1]/2+2.6+s;if(Math.abs(i-a.pos[0])<c&&Math.abs(t-a.pos[1])<l||Math.hypot(i-a.door[0],t-a.door[1])<2.6+s)return!0}for(const a of e.fieldSlots){const c=e.fieldSize[0]/2+2+s,l=e.fieldSize[1]/2+2+s;if(Math.abs(i-a[0])<c&&Math.abs(t-a[1])<l)return!0}if(e.orchardSlots){const a=(((r=e.orchardSize)==null?void 0:r[0])??5)/2+2+s,c=(((o=e.orchardSize)==null?void 0:o[1])??5)/2+2+s;for(const l of e.orchardSlots)if(Math.abs(i-l[0])<a&&Math.abs(t-l[1])<c)return!0}for(const[a,c]of n)if(Uo(i,t,a,c)<2.5+s)return!0;if(e.villagers){for(const a of Object.values(e.villagers))if(Math.hypot(i-a.gate[0],t-a.gate[1])<3.8+s||Math.hypot(i-a.plaza[0],t-a.plaza[1])<2.2+s||Math.hypot(i-a.shop[0],t-a.shop[1])<2.2+s)return!0}return!1}function $n(i,t,e,n){const s=e.plaza[0],r=e.plaza[1];let o=Math.hypot(i-s,t-r)-4.8;for(const[l,h]of n){const u=Uo(i,t,l,h)-1.35;u<o&&(o=u)}let a=Math.sin(i*.09)*Math.cos(t*.11)*.09;const c=Math.max(0,Math.hypot(i*.75,t)-28);if(a+=Math.min(1.8,c*.045)*(.5+.5*Math.sin(i*.12+t*.1)),o<1.1){const l=he.smoothstep(1.1-o,0,1.35);a*=1-l*.85,a-=l*.03}return a}function qx(i,t,e){const[n,s]=i.mapSize,r=new Rs(n+84,s+84,136,108);r.rotateX(-Math.PI/2);const o=r.attributes.position,a=new Float32Array(o.count*3),c=new Dt,l=new Dt(F.grass),h=new Dt(F.grassDark),u=new Dt(F.grassLight),d=new Dt(F.grassSunlit),f=new Dt(F.dirt),g=new Dt(F.dirtDark),v=i.plaza[0],m=i.plaza[1];for(let C=0;C<o.count;C++){const N=o.getX(C),U=o.getZ(C),O=Math.sin(N*.14+.9)*Math.cos(U*.16-.5),$=Math.sin(N*.055-U*.07)*.75,B=(e()-.5)*.22,j=O*.6+$+B;j>.2?c.copy(l).lerp(j>.65?d:u,Math.min(1,j*.68)):c.copy(l).lerp(h,Math.min(1,Math.abs(j)*.62));let z=Math.hypot(N-v,U-m)-4.8;for(const[vt,bt]of t){const Nt=Uo(N,U,vt,bt)-1.35;Nt<z&&(z=Nt)}let rt=Math.sin(N*.09)*Math.cos(U*.11)*.09;const pt=Math.max(0,Math.hypot(N*.75,U)-28);if(rt+=Math.min(1.8,pt*.045)*(.5+.5*Math.sin(N*.12+U*.1)),z<1.1){const vt=he.smoothstep(1.1-z,0,1.35),Nt=Math.abs(Math.abs(z+1.35)-.52)<.24&&z<-.15;c.lerp(Nt?g:f,vt),rt*=1-vt*.85,rt-=vt*.03}c.toArray(a,C*3),o.setY(C,rt)}r.setAttribute("color",new tn(a,3)),r.computeVertexNormals();const p=new oe({vertexColors:!0,roughness:.96,metalness:0}),M=new S(r,p);M.receiveShadow=!0;const x=new dt;x.name="rainPuddles";const _=new oe({color:2966360,roughness:.08,metalness:.45,transparent:!0,opacity:0,depthWrite:!1}),L=[{pos:[-3.2,-2.4],scale:[1.25,.75],rotY:.3},{pos:[.6,-2.6],scale:[1.4,.8],rotY:-.2},{pos:[8.6,-3.8],scale:[1.3,.75],rotY:.6},{pos:[5.6,2.4],scale:[1.15,.65],rotY:-.4},{pos:[-1.4,5.2],scale:[1.2,.7],rotY:.5}],T=new Tt(.85,.85,.02,8);for(const C of L){const N=new S(T,_),U=$n(C.pos[0],C.pos[1],i,t)+.025;N.position.set(C.pos[0],U,C.pos[1]),N.scale.set(C.scale[0],1,C.scale[1]),N.rotation.y=C.rotY,N.receiveShadow=!0,x.add(N)}x.visible=!1;const E=new Dt(16777215),P=new Dt(8556188),w=new Dt(16114877);return{mesh:M,puddles:x,setWeather:C=>{p.color.copy(E),C.drought>.001&&p.color.lerp(w,C.drought*.42),C.rain>.001&&p.color.lerp(P,C.rain*.45),p.roughness=.96-C.rain*.44+C.drought*.03;const N=C.rain>.015;x.visible=N,N&&(_.opacity=Math.min(.82,C.rain*.82))}}}function Sd(i){const t=new dt,e=i.flat(F.trunk,.9),n=new S(new Tt(.08,.11,2.5,6),e);n.position.y=1.25;const s=new S(new ct(.75,.09,.09),e);s.position.set(.32,2.38,0);const r=new S(new ct(.42,.08,.08),e);r.position.set(.18,2.14,0),r.rotation.z=-Math.PI/4;const o=new S(new me(.18,.12,6),i.flat(F.ironHoop,.7,.3));o.position.set(.62,2.32,0);const a=new S(new Tt(.13,.1,.26,6),i.windowGlow());return a.position.set(.62,2.14,0),t.add(n,s,r,o,a),Ue(t,!0,!0)}function Yx(i,t,e){const n=new dt,[s,r]=i.plaza;n.position.set(s,0,r);const o=7.4,a=4.6,c=new S(new ct(o,.12,a),t.flat(F.dirtDark,.95));c.position.set(.4,.05,-.3),c.receiveShadow=!0,n.add(c);const l=t.flat(F.trunk,.9),h=new ct(o+.2,.18,.18),u=new ct(.18,.18,a-.18),d=new ct(.22,.22,.22),f=new S(h,l);f.position.set(.4,.09,a/2-.3),f.receiveShadow=!0,f.castShadow=!0;const g=new S(h,l);g.position.set(.4,.09,-a/2-.3),g.receiveShadow=!0,g.castShadow=!0;const v=new S(u,l);v.position.set(.4-o/2,.09,-.3),v.receiveShadow=!0,v.castShadow=!0;const m=new S(u,l);m.position.set(.4+o/2,.09,-.3),m.receiveShadow=!0,m.castShadow=!0,n.add(f,g,v,m);for(const B of[-1,1])for(const j of[-1,1]){const z=new S(d,l);z.position.set(.4+B*o/2,.11,-.3+j*a/2),z.receiveShadow=!0,z.castShadow=!0,n.add(z)}const p=[F.cobbleLight,F.cobbleMid,F.cobbleDark],M=new Tt(.42,.46,.1,7);for(let B=-3;B<=3.6;B+=.82)for(let j=-2.2;j<=1.6;j+=.78){const z=B+(e()-.5)*.22,rt=j+(e()-.5)*.22,pt=new S(M,t.flat(p[Math.floor(e()*p.length)],.88)),vt=.75+e()*.55,bt=.75+e()*.55;pt.scale.set(vt,1,bt),pt.rotation.y=e()*Math.PI,pt.position.set(z,.1+e()*.02,rt),pt.receiveShadow=!0,n.add(pt)}const x=new dt;x.position.set(-2.2,.08,.1),n.add(x);const _=new en(.24,0);for(let B=0;B<10;B++){const j=B/10*Math.PI*2,z=.78+(e()-.5)*.06,rt=new S(_,t.flat(p[B%3],.85));rt.position.set(Math.cos(j)*z,.14,Math.sin(j)*z),rt.scale.set(1.1,.75,.95),rt.rotation.y=j,rt.castShadow=!0,rt.receiveShadow=!0,x.add(rt)}const L=new S(new Tt(.62,.68,.1,8),new oe({color:F.emberRed,emissive:F.emberRed,emissiveIntensity:1.4,roughness:.7}));L.position.y=.06,x.add(L);const T=new Tt(.1,.11,1.15,6);T.rotateZ(Math.PI/2);const E=t.flat(F.woodDark,.92);for(let B=0;B<3;B++){const j=new S(T,E);j.position.y=.18+B*.03,j.rotation.y=B*Math.PI/3+.3,j.rotation.z=.12,j.castShadow=!0,x.add(j)}const P=new oe({color:F.fire,emissive:F.fire,emissiveIntensity:1.5,roughness:.35,flatShading:!0}),w=new oe({color:F.flameCore,emissive:F.flameCore,emissiveIntensity:1.9,roughness:.25,flatShading:!0}),y=new S(new me(.42,1.05,6),P);y.position.y=.65;const C=new S(new me(.24,.72,5),w);C.position.set(.03,.52,.02),x.add(y,C);const N=[],U=new rl(.06,0);for(let B=0;B<4;B++){const j=new S(U,w);j.position.set((e()-.5)*.3,.9+B*.3,(e()-.5)*.3),x.add(j),N.push(j)}const O=Sd(t);O.position.set(-3.1,0,-.6),n.add(O);let $=0;return{group:n,anim:{update(B,j,z){$+=B;const rt=z?Math.max(.65,1-z.rain*.35):1,pt=(1+j*.45)*rt,vt=(1+Math.sin($*14)*.09+Math.cos($*8.3)*.06)*rt,bt=(1+Math.cos($*17)*.11)*rt;y.scale.set(vt,vt*pt,vt),y.rotation.y=$*1.8,C.scale.set(bt,bt*pt,bt),P.emissiveIntensity=(1.45+j*.55+Math.sin($*11)*.2)*rt;for(let Nt=0;Nt<N.length;Nt++){const q=($*1.1+Nt*.25)%1,at=N[Nt];at.position.y=.75+q*1.45,at.position.x=Math.sin($*4+Nt*2)*.22,at.position.z=Math.cos($*3.5+Nt*2)*.22,at.scale.setScalar((1-q)*1.1)}}}}}function ll(){return{coniferTrunk:new Tt(.16,.26,1,6),coniferCone:new me(1,1,7),broadTrunk:new Tt(.18,.28,1,6),crownMain:new mn(1,1),crownPuff:new mn(1,0)}}function jx(i,t,e=ll()){const n=new dt,s=.85+t()*.45,r=1.1+t()*.4,o=new S(e.coniferTrunk,i.flat(F.trunk,.92));o.scale.set(1,r,1),o.position.y=r/2,n.add(o);const a=[F.treeLeaf,F.treeLeafDark,2522435],c=i.flat(a[Math.floor(t()*a.length)],.86),l=3;for(let h=0;h<l;h++){const u=(1.35-h*.28)*s,d=(1.55-h*.18)*s,f=new S(e.coniferCone,c);f.scale.set(u,d,u),f.position.y=r+h*(.82*s)+d*.42,f.rotation.y=t()*Math.PI,f.rotation.z=(t()-.5)*.06,n.add(f)}return Ue(n)}function Kx(i,t,e=ll()){const n=new dt,s=1.35+t()*.55,r=new S(e.broadTrunk,i.flat(F.trunk,.92));r.scale.set(1,s,1),r.position.y=s/2,n.add(r);const o=[F.treeLeaf,F.grassDark,3710034,F.treeLeafDark],a=i.flat(o[Math.floor(t()*o.length)],.85),c=i.flat(o[Math.floor(t()*o.length)],.85),l=1.15+t()*.35,h=new S(e.crownMain,a);h.position.y=s+l*.72,h.scale.set(l*1.08,l*.88,l*1.04),n.add(h);const u=2+Math.floor(t()*2);for(let d=0;d<u;d++){const f=d/u*Math.PI*2+t()*.8,g=l*(.62+t()*.2),v=new S(e.crownPuff,d%2===0?a:c);v.scale.setScalar(g),v.position.set(Math.cos(f)*l*.58,s+l*(.55+t()*.35),Math.sin(f)*l*.58),n.add(v)}return n.rotation.y=t()*Math.PI*2,Ue(n)}function Ed(){return{post:new ct(.14,.72,.14),rail:new ct(1,.08,.06)}}function Zx(i,t,e=Ed()){const n=new dt,s=t.flat(F.trunk,.9),r=Math.max(2,Math.round(i/2.2)+1),o=i/(r-1);for(let l=0;l<r;l++){const h=new S(e.post,s);h.position.set(-i/2+l*o,.36,0),n.add(h)}const a=new S(e.rail,s);a.scale.x=i,a.position.y=.56;const c=new S(e.rail,s);return c.scale.x=i,c.position.y=.28,n.add(a,c),Ue(n)}function Td(){return{pillar:new Tt(.18,.22,3.2,7),plinth:new en(.36,0),lintel:new ct(4.2,.24,.26),brace:new ct(.14,.75,.14),roof:new ct(4.5,.12,.72),roofRidge:new ct(4.6,.08,.14),signPlaque:new ct(1.8,.46,.08),signBorder:new ct(1.88,.54,.06),chain:new Tt(.015,.015,.22,5),lanternGlass:new Tt(.11,.08,.2,6),lanternCap:new me(.16,.1,6),milestone:new en(.38,0)}}function Jx(i,t=Td(),e="village"){const n=new dt;n.name=`VillageGate_${e}`;const s=i.flat(F.trunk,.88),r=i.flat(F.woodDark,.92),o=i.flat(F.cobbleMid,.85),a=i.flat(F.roofOrange,.82),c=i.flat(F.ironHoop,.6,.3),l=i.flat(F.woodLight,.85),h=1.9;for(const E of[-h,h]){const P=new S(t.plinth,o);P.position.set(E,.22,0),P.scale.set(1.2,.85,1.2);const w=new S(t.pillar,s);w.position.set(E,1.6,0),n.add(P,w)}const u=new S(t.lintel,s);u.position.set(0,2.85,0);const d=new S(t.brace,s);d.position.set(-h+.38,2.52,0),d.rotation.z=Math.PI/4;const f=new S(t.brace,s);f.position.set(h-.38,2.52,0),f.rotation.z=-Math.PI/4;const g=new S(t.roof,a);g.position.set(0,3.02,0);const v=new S(t.roofRidge,r);v.position.set(0,3.1,0);const m=new dt;m.position.set(0,2.4,0);const p=new S(t.signPlaque,l),M=new S(t.signBorder,r);M.position.z=-.01;for(const E of[-.6,.6]){const P=new S(t.chain,c);P.position.set(E,.33,0),m.add(P)}m.add(p,M);const x=new dt;x.position.set(-h-.12,2.1,.28);const _=new S(t.lanternGlass,i.windowGlow()),L=new S(t.lanternCap,c);L.position.y=.14,x.add(_,L);const T=new S(t.milestone,o);return T.position.set(h+.45,.3,.15),T.scale.set(1,1.4,.85),n.add(u,d,f,g,v,m,x,T),Ue(n)}function Qx(i,t,e,n,s,r){var It,Bt,kt;const o=[{pos:[-5.2,-7.2],rotY:1.52,len:6},{pos:[-4.4,2.8],rotY:1.35,len:5.5},{pos:[10.2,.8],rotY:-.38,len:3.6},{pos:[4.4,7.6],rotY:-.96,len:4},{pos:[16.5,-1.8],rotY:-.78,len:5.2},{pos:[-9.8,12.8],rotY:.54,len:4.8}],a=Ed();for(const mt of o){const X=Zx(mt.len,n,a);X.position.set(mt.pos[0],$n(mt.pos[0],mt.pos[1],t,e),mt.pos[1]),X.rotation.y=mt.rotY,i.add(X)}const c=Td(),l=[{id:"sw",pos:((It=t.villagers)==null?void 0:It.tom.gate)??[-30,23.8],rotY:Math.atan2(16,-9.8)},{id:"north",pos:((Bt=t.villagers)==null?void 0:Bt.yuki.gate)??[-5.4,-25],rotY:Math.atan2(.9,12)},{id:"ne",pos:((kt=t.villagers)==null?void 0:kt.lin.gate)??[34,-22.6],rotY:Math.atan2(-10,8.6)}];for(const mt of l){const X=Jx(n,c,mt.id);X.position.set(mt.pos[0],$n(mt.pos[0],mt.pos[1],t,e),mt.pos[1]),X.rotation.y=mt.rotY,i.add(X)}const h=r==="high"?125:65,u=ll(),[d,f]=t.mapSize;for(let mt=0,X=0;mt<h&&X<2400;X++){const it=(s()-.5)*(d+30),I=(s()-.5)*(f+26);if(Qr(it,I,t,e,.6))continue;const Ct=s()>.46?Kx(n,s,u):jx(n,s,u);Ct.position.set(it,$n(it,I,t,e),I),i.add(Ct),mt++}const g=r==="high"?55:28,v=new mn(.48,0),m=new en(.42,0);for(let mt=0,X=0;mt<g&&X<900;X++){const it=(s()-.5)*(d+16),I=(s()-.5)*(f+14);if(Qr(it,I,t,e,-.4))continue;const Ct=$n(it,I,t,e);if(s()>.32){const et=new S(v,n.flat(s()>.5?F.treeLeaf:F.grassDark,.88)),ht=.65+s()*.7;et.scale.set(ht*1.2,ht*.85,ht),et.position.set(it,Ct+ht*.3,I),et.rotation.y=s()*Math.PI,et.castShadow=!0,et.receiveShadow=!0,i.add(et)}else{const et=new S(m,n.flat(F.cobbleMid,.9)),ht=.6+s()*.85;et.scale.set(ht*1.3,ht*.75,ht),et.position.set(it,Ct+ht*.22,I),et.rotation.set(s()*.3,s()*Math.PI,s()*.3),et.castShadow=!0,et.receiveShadow=!0,i.add(et)}mt++}const p=r==="high"?220:100,M=new Tt(.16,.1,.06,6);M.translate(0,.22,0);const x=new me(.11,.2,4);x.translate(0,.1,0);const _=new bn(M,n.flat(16777215,.7),p),L=new bn(x,n.flat(F.grassDark,.9),p);_.receiveShadow=!0,L.receiveShadow=!0;const T=new Dt(F.daisyWhite),E=new Dt(F.daisyCenter),P=new Ee;let w=0;for(let mt=0;w<p&&mt<1800;mt++){const X=(s()-.5)*(d+10),it=(s()-.5)*(f+10);if(Qr(X,it,t,e,-.8))continue;const I=$n(X,it,t,e),Ct=.7+s()*.65;P.position.set(X,I+.02,it),P.rotation.set(0,s()*Math.PI*2,0),P.scale.setScalar(Ct),P.updateMatrix(),_.setMatrixAt(w,P.matrix),_.setColorAt(w,w%3===0?E:T),L.setMatrixAt(w,P.matrix),w++}_.count=w,L.count=w,_.instanceMatrix.needsUpdate=!0,_.instanceColor&&(_.instanceColor.needsUpdate=!0),L.instanceMatrix.needsUpdate=!0,i.add(L,_);const y=[{pos:[-5.6,-2.4],rotY:.35},{pos:[7.8,-4.6],rotY:-.65},{pos:[8.6,2.2],rotY:.9},{pos:[-1.6,8.5],rotY:-.3}];for(const mt of y){const X=Sd(n);X.position.set(mt.pos[0],$n(mt.pos[0],mt.pos[1],t,e),mt.pos[1]),X.rotation.y=mt.rotY,i.add(X)}const C=r==="high"?180:80,N=new me(.12,.36,4);N.translate(0,.18,0);const U=new oe({color:16777215,roughness:.92,flatShading:!0}),O=new bn(N,U,C);O.receiveShadow=!0;const $=new Dt(F.grassTuftBright),B=new Dt(F.grassTuftDark);let j=0;for(let mt=0;j<C&&mt<1500;mt++){const X=(s()-.5)*(d+8),it=(s()-.5)*(f+8);let I=999;for(const[ht,nt]of e){const Mt=Uo(X,it,ht,nt);Mt<I&&(I=Mt)}if((I<1.35||I>3.8)&&s()>.35||Qr(X,it,t,e,-.6))continue;const Ct=$n(X,it,t,e),et=.75+s()*.7;P.position.set(X,Ct,it),P.rotation.set((s()-.5)*.25,s()*Math.PI*2,(s()-.5)*.25),P.scale.set(et*1.3,et,et*.9),P.updateMatrix(),O.setMatrixAt(j,P.matrix),O.setColorAt(j,j%2===0?$:B),j++}O.count=j,O.instanceMatrix.needsUpdate=!0,O.instanceColor&&(O.instanceColor.needsUpdate=!0),i.add(O);const z=new Tt(.32,.38,.36,7),rt=new me(.14,.16,6),pt=new Tt(.04,.05,.16,5),vt=n.flat(F.shroomRed,.8),bt=n.flat(F.shroomStem,.9),Nt=n.flat(F.trunk,.9),q=[[-11.5,-16.2],[8.4,-13.5],[18.5,3.2],[-10.2,17.5],[2.5,16.8]];for(const[mt,X]of q){const it=$n(mt,X,t,e),I=new dt;I.position.set(mt,it,X),I.rotation.y=s()*Math.PI*2;const Ct=new S(z,Nt);Ct.position.y=.18,I.add(Ct);for(let et=0;et<3;et++){const ht=new dt,nt=et*Math.PI*2/3+.4,Mt=.48+s()*.15;ht.position.set(Math.cos(nt)*Mt,0,Math.sin(nt)*Mt);const _t=new S(pt,bt);_t.position.y=.08;const R=new S(rt,vt);R.position.y=.18,ht.add(_t,R);const b=.7+s()*.5;ht.scale.setScalar(b),I.add(ht)}Ue(I),i.add(I)}const at=new Dt(16777215),St=new Dt(14074984),lt=new Dt(9222276);return{setWeather(mt){U.color.copy(at),mt.drought>.001&&U.color.lerp(St,mt.drought*.42),mt.rain>.001&&U.color.lerp(lt,mt.rain*.35)}}}function Ma(i,t,e,n){const s=new sl;s.moveTo(-i/2,0),s.lineTo(0,e),s.lineTo(i/2,0),s.closePath();const r=new Po(s,{depth:t,bevelEnabled:!1});return r.translate(0,0,-t/2),new S(r,n)}function ty(i,t){const e=new dt;e.name="UnderConstruction";const n=new S(new ct(4.6,.22,3.6),i.flat(F.cobbleDark,.94));n.position.y=.11,n.receiveShadow=!0,e.add(n);const s=i.flat(F.woodDark,.9);for(const g of[-2.35,2.35])for(const v of[-1.85,1.85]){const m=new S(new Tt(.04,.04,.8,6),s);m.position.set(g,.4,v),e.add(m)}const r=i.flat(F.scaffoldWood,.88),o=new Tt(.05,.05,3.2,6);for(const g of[.6,2.1])for(const v of[-1.2,.5]){const m=new S(o,r);m.position.set(g,1.6,v),e.add(m)}const a=new ct(1.8,.08,.35);for(let g=0;g<3;g++){const v=new S(a,r);v.position.set(1.35,1.8+g%2*.05,-.9+g*.4),e.add(v)}const c=new S(new ct(.9,.48,.7),i.flat(F.cobbleMid,.9));c.position.set(-1.4,.46,-.6),e.add(c);const l=new S(new ct(1.6,.42,.65),i.flat(F.wallWood,.88));l.position.set(-1.2,.43,.7),l.rotation.y=.12,e.add(l);const h=new S(new me(.75,.65,5),i.flat(F.tarpBlue,.85));h.position.set(.1,.54,.8),h.rotation.y=.4,e.add(h);const u=new S(new Tt(.04,.04,1.3,6),s);u.position.set(0,.65,1.85);const d=new S(new ct(.65,.48,.05),i.flat(F.woodLight,.85));d.position.set(0,1.15,1.85);const f=new S(new ct(.52,.36,.02),i.flat(3501222,.8));return f.position.set(0,1.15,1.88),e.add(u,d,f),Ue(e),e}function ey(i,t,e=$i()){const n=new dt;n.name=`Processor_${i}`;const s=ty(t);n.add(s);const r=new dt;r.name=`Building_${i}`,n.add(r);const o=[],a=[],c=new oe({color:i==="bakery"?F.smoke:15920629,roughness:.95,flatShading:!0}),l=new en(.24,0);if(i==="bakery"){const p=new S(new ct(4.6000000000000005,.28,3.7),t.flat(F.cobbleDark,.92));p.position.y=.14,r.add(p);const M=new S(new ct(4.4,2.4,3.5),t.flat(F.wallCream,.88));M.position.y=.28+2.4/2,r.add(M);const x=t.flat(F.wallWood,.88);for(const St of[-4.4/2+.1,4.4/2-.1])for(const lt of[-3.5/2+.1,3.5/2-.1]){const It=new S(new ct(.22,2.4,.22),x);It.position.set(St,.28+2.4/2,lt),r.add(It)}const _=new S(new ct(4.4+.05,.14,3.5+.05),x);_.position.y=.28+2.4,r.add(_);const L=Ma(4.4+.6,3.5+.7,1.8,t.flat(F.bakeryRoof,.82));L.position.y=.28+2.4,r.add(L);const T=Ma(1.8,1,.5,t.flat(F.bakeryRoof,.82));T.position.set(.6,2.45,3.5/2+.45),T.rotation.y=Math.PI/2,r.add(T);const E=new S(new ct(.85,1.6,.1),t.flat(F.woodDark,.88));E.position.set(.6,.28+.8,3.5/2+.06),r.add(E);const P=new S(new ct(1.4,1.1,.12),x);P.position.set(-1,1.5,3.5/2+.06);const w=t.windowGlow().clone(),y=new S(new ct(1.2,.9,.06),w);y.position.set(-1,1.5,3.5/2+.1),r.add(P,y),a.push({mesh:y,baseIntensity:.4,workIntensity:1.8});const C=new S(new ct(1.3,.08,.32),x);C.position.set(-1,1.05,3.5/2+.2);const N=t.flat(F.breadCrust,.85),U=new S(new Ze(.06,.28,3,5),N);U.rotation.z=Math.PI/2.2,U.position.set(-1.25,1.15,3.5/2+.2);const O=new S(new ve(.09,6,5),N);O.scale.set(1.1,.7,1.1),O.position.set(-.85,1.14,3.5/2+.2),r.add(C,U,O);const $=new S(new ct(.85,.38,.05),t.flat(F.woodLight,.85));$.position.set(.6,2.75,3.5/2+.12);const B=new S(new Gi(.1,.035,4,8),N);B.position.set(.6,2.75,3.5/2+.16),r.add($,B);const j=t.flat(F.cobbleMid,.9),z=new S(new ct(1.3,1.8,2.1),j);z.position.set(4.4/2+.45,.28+.9,-.2);const rt=new S(new Tt(.65,.65,2.1,8,1,!1,0,Math.PI),j);rt.rotation.x=Math.PI/2,rt.position.set(4.4/2+.45,.28+1.8,-.2);const pt=new oe({color:2232584,emissive:F.emberRed,emissiveIntensity:.6,roughness:.7,flatShading:!0}),vt=new S(new ct(.08,.65,.65),pt);vt.position.set(4.4/2+.45,.28+.65,.88),r.add(z,rt,vt),a.push({mesh:vt,baseIntensity:.6,workIntensity:2.8});const bt=new S(new ct(.7,3.4,.7),t.flat(F.cobbleDark,.92));bt.position.set(4.4/2+.25,.28+1.7+1.6,-.6);const Nt=new S(new ct(.85,.16,.85),t.flat(F.wallWood,.88));Nt.position.set(4.4/2+.25,.28+3.4+1.6,-.6),r.add(bt,Nt);const q=new D(4.4/2+.25,.28+3.5+1.6,-.6);for(let St=0;St<4;St++){const lt=new S(l,c);lt.position.copy(q),lt.castShadow=!1,lt.receiveShadow=!1,lt.visible=!1,r.add(lt),o.push(lt)}const at=new Tt(.09,.09,.9,6);at.rotateZ(Math.PI/2);for(let St=0;St<4;St++){const lt=new S(at,t.flat(F.woodDark,.9));lt.position.set(-4.4/2-.1,.28+.15+St%2*.18,-.4+Math.floor(St/2)*.4),r.add(lt)}}else{const p=new S(new ct(4.6000000000000005,.28,3.7),t.flat(F.cobbleMid,.9));p.position.y=.14,r.add(p);const M=new S(new ct(4.4,2.3,3.5),t.flat(F.wallCream,.88));M.position.y=.28+2.3/2,r.add(M);const x=t.flat(F.wallWood,.88);for(const q of[-4.4/2+.1,4.4/2-.1])for(const at of[-3.5/2+.1,3.5/2-.1]){const St=new S(new ct(.2,2.3,.2),x);St.position.set(q,.28+2.3/2,at),r.add(St)}const _=Ma(4.4+.6,3.5+.7,1.7,t.flat(F.preserveryRoof,.84));_.position.y=.28+2.3,r.add(_);const L=new S(new ct(.85,1.55,.1),t.flat(F.woodDark,.88));L.position.set(-.6,.28+.77,3.5/2+.06),r.add(L);const T=new S(new ct(1.5,1.1,.12),x);T.position.set(.9,1.45,3.5/2+.06);const E=t.windowGlow().clone(),P=new S(new ct(1.3,.9,.06),E);P.position.set(.9,1.45,3.5/2+.1),r.add(T,P),a.push({mesh:P,baseIntensity:.45,workIntensity:1.9});const w=new Tt(.06,.06,.14,6),y=new Tt(.07,.07,.03,6),C=t.flat(F.jamLid,.8),N=t.flat(F.jamBerry,.6),U=t.flat(F.jamAmber,.6);for(let q=0;q<4;q++){const at=new S(w,q%2===0?N:U),St=new S(y,C);St.position.y=.08,at.add(St),at.position.set(.55+q*.24,1.25,3.5/2+.16),r.add(at)}const O=new S(new ct(.75,.36,.05),t.flat(F.woodLight,.85));O.position.set(-.6,2.65,3.5/2+.12);const $=new S(new Tt(.08,.08,.18,6),N);$.position.set(-.6,2.65,3.5/2+.16),r.add(O,$);const B=t.flat(F.copperHoop,.62,.38),j=new S(new Tt(.55,.55,1.6,8),B);j.position.set(-4.4/2-.25,.28+.8,.2);const z=new S(new ve(.55,8,6,0,Math.PI*2,0,Math.PI/2),B);z.position.set(-4.4/2-.25,.28+1.6,.2);const rt=new S(new Tt(.18,.18,2.2,7),B);rt.position.set(-4.4/2-.25,.28+1.6+1.1,.2);const pt=new S(new me(.3,.25,7),B);pt.position.set(-4.4/2-.25,.28+1.6+2.25,.2),r.add(j,z,rt,pt);const vt=new D(-4.4/2-.25,.28+1.6+2.3,.2);for(let q=0;q<4;q++){const at=new S(l,c);at.position.copy(vt),at.castShadow=!1,at.receiveShadow=!1,at.visible=!1,r.add(at),o.push(at)}const bt=An(t,e);bt.position.set(4.4/2+.25,0,.5);const Nt=An(t,e);Nt.position.set(4.4/2+.45,0,-.2),Nt.rotation.y=.4,r.add(bt,Nt)}Ue(r),r.visible=!1;let h=!1,u=!1,d=0,f=0;return{object:n,setState(g,v,m){if(h=g,u=v,d=Math.max(0,Math.min(1,m)),s.visible=!g,r.visible=g,!g){for(const p of o)p.visible=!1;return}for(const p of a){const M=p.mesh.material;if(M&&M.emissive){const x=u?p.workIntensity+d*.4:p.baseIntensity;M.emissiveIntensity=x}}for(const p of o)p.visible=u},update(g){if(!h||!u)return;f+=g;const v=i==="bakery"?new D(2.45,5.38,-.6):new D(-2.45,4.18,.2);for(let m=0;m<o.length;m++){const p=(f*.48+m*.25)%1,M=o[m];M.position.y=v.y+p*2.2,M.position.x=v.x+Math.sin(f*1.8+m)*.22*p,M.position.z=v.z+Math.cos(f*1.5+m)*.18*p;const x=Math.sin(p*Math.PI)*(.65+p*.55);M.scale.setScalar(Math.max(.01,x))}}}}function Ad(){return{leg:new Ze(.062,.44,3,6),boot:new ct(.13,.16,.22),pantsTrousers:new Tt(.16,.15,.16,8),skirtLong:new Tt(.17,.36,.74,10),skirtTeacher:new Tt(.16,.31,.64,10),torsoMale:new Tt(.2,.165,.44,8),torsoFemale:new Tt(.17,.135,.38,8),belt:new Tt(.165,.165,.06,8),beltBuckle:new ct(.06,.07,.04),neck:new Tt(.055,.065,.1,6),arm:new Ze(.048,.36,3,6),hand:new ve(.045,5,4),head:new ve(.135,10,8),eye:new ve(.024,5,4),chefToqueBase:new Tt(.15,.145,.08,10),chefToquePuff:new Tt(.185,.16,.2,10),chefApronChest:new ct(.22,.24,.05),chefApronSkirt:new ct(.26,.44,.05),chefApronPocket:new ct(.14,.12,.02),chefButton:new Tt(.018,.018,.02,6),chefPanHandle:new Tt(.02,.02,.38,5),chefPanBase:new Tt(.16,.14,.06,8),spectaclesFrame:new ct(.145,.038,.025),teacherCollar:new ct(.16,.08,.06),teacherRibbon:new me(.04,.11,4),bunnyBody:new en(.115,1),bunnyHead:new ve(.075,7,6),bunnyEar:new me(.028,.13,4),bunnyInnerEar:new me(.016,.1,4),bunnyTail:new ve(.032,5,4),bunnyEye:new ve(.014,4,3),bunnyNose:new ct(.016,.012,.014),shawlWrap:new Tt(.25,.22,.28,9),shawlFold:new ct(.24,.34,.08),shawlBrooch:new Tt(.035,.035,.03,6),hairBun:new ve(.08,8,6),hairPin:new Tt(.012,.012,.22,5),hairCap:new ve(.142,9,7),hairBangs:new ct(.1,.06,.05),hairTeacherLock:new Ze(.032,.28,3,5)}}function ny(i,t,e=Ad()){const n=new dt;n.name=`VillagerVisual_${i}`;const s=new dt;s.position.set(-.11,.82,0);const r=new dt;r.position.set(.11,.82,0),n.add(s,r);const o=new dt;o.position.set(0,.82,0),n.add(o);const a=new dt;a.position.set(-.25,1.25,0);const c=new dt;c.position.set(.25,1.25,0),n.add(a,c);const l=new dt;l.position.set(0,1.4,0),n.add(l);const h=t.flat(2234901,.5,.2),u=new S(e.eye,h);u.position.set(-.048,.01,.125);const d=new S(e.eye,h);d.position.set(.048,.01,.125),l.add(u,d);let f=null,g=null;if(i==="tom"){const x=t.smooth(F.skinWarm,.72),_=t.flat(2759959,.8),L=t.flat(16052198,.85),T=t.flat(16777215,.75),E=t.flat(2632757,.85),P=t.flat(3679255,.88),w=t.flat(F.copperHoop,.45,.6),y=t.flat(F.woodDark,.9),C=()=>{const It=new dt,Bt=new S(e.leg,E);Bt.position.y=-.34;const kt=new S(e.boot,P);return kt.position.set(0,-.74,.03),It.add(Bt,kt),It};s.add(C()),r.add(C());const N=new S(e.torsoMale,L);N.position.y=.22;const U=new S(e.neck,x);U.position.y=.48;const O=t.flat(4865072,.5,.3);for(const It of[-.045,.045])for(let Bt=.14;Bt<=.34;Bt+=.09){const kt=new S(e.chefButton,O);kt.rotation.x=Math.PI/2,kt.position.set(It,Bt,.165),o.add(kt)}const $=new S(e.chefApronChest,T);$.position.set(0,.22,.155);const B=new S(e.chefApronSkirt,T);B.position.set(0,-.2,.145);const j=new S(e.chefApronPocket,T);j.position.set(0,-.15,.175),o.add(N,U,$,B,j);const z=new S(e.head,x),rt=new S(e.hairCap,_);rt.position.set(0,.02,-.015);const pt=new S(e.hairBangs,_);pt.position.set(0,.09,.11);const vt=new S(e.chefToqueBase,T);vt.position.set(0,.14,-.01);const bt=new S(e.chefToquePuff,T);bt.position.set(0,.26,-.01),l.add(z,rt,pt,vt,bt);const Nt=It=>{const Bt=new dt,kt=new S(e.arm,L);kt.position.y=-.2;const mt=new S(e.hand,x);return mt.position.y=-.42,Bt.add(kt,mt),{g:Bt,handMesh:mt}},q=Nt();a.add(q.g);const at=Nt();c.add(at.g),g=new dt;const St=new S(e.chefPanHandle,y);St.rotation.x=Math.PI/2,St.position.set(0,0,.15);const lt=new S(e.chefPanBase,w);lt.position.set(0,0,.35),g.add(St,lt),g.position.set(0,-.42,.05),g.rotation.set(.3,.2,0),c.add(g)}else if(i==="yuki"){const x=t.smooth(F.skinFair,.72),_=t.flat(7226662,.78),L=t.flat(14083058,.84),T=t.flat(12075602,.75),E=t.flat(2573140,.86),P=t.flat(2761760,.88),w=t.flat(16579836,.82),y=t.flat(16103618,.75),C=t.flat(1578002,.4),N=()=>{const et=new dt,ht=new S(e.leg,x);ht.position.y=-.34;const nt=new S(e.boot,P);return nt.position.set(0,-.74,.03),et.add(ht,nt),et};s.add(N()),r.add(N());const U=new S(e.skirtTeacher,E);U.position.y=-.32;const O=new S(e.torsoFemale,L);O.position.y=.2;const $=new S(e.neck,x);$.position.y=.44;const B=new S(e.teacherCollar,t.flat(16777215,.8));B.position.set(0,.38,.12);const j=new S(e.teacherRibbon,T);j.rotation.x=Math.PI,j.position.set(0,.33,.15),o.add(U,O,$,B,j);const z=new S(e.head,x),rt=new S(e.hairCap,_);rt.position.set(0,.02,-.015);const pt=new S(e.hairBangs,_);pt.position.set(0,.09,.11);const vt=new S(e.hairTeacherLock,_);vt.position.set(-.13,-.08,.02);const bt=new S(e.hairTeacherLock,_);bt.position.set(.13,-.08,.02);const Nt=t.flat(9065514,.4,.3),q=new S(e.spectaclesFrame,Nt);q.position.set(0,.012,.138),l.add(z,rt,pt,vt,bt,q),a.rotation.set(.95,-.42,.22),c.rotation.set(.95,.42,-.22);const at=()=>{const et=new dt,ht=new S(e.arm,L);ht.position.y=-.19;const nt=new S(e.hand,x);return nt.position.y=-.4,et.add(ht,nt),et};a.add(at()),c.add(at()),f=new dt,f.name="YukiPetBunny";const St=new S(e.bunnyBody,w);St.scale.set(1.1,.95,1.25);const lt=new S(e.bunnyHead,w);lt.position.set(0,.09,.11);const It=new S(e.bunnyEar,w);It.position.set(-.038,.21,.08),It.rotation.set(-.15,0,-.12);const Bt=new S(e.bunnyInnerEar,y);Bt.position.set(-.038,.2,.095),Bt.rotation.set(-.15,0,-.12);const kt=new S(e.bunnyEar,w);kt.position.set(.038,.21,.08),kt.rotation.set(-.15,0,.12);const mt=new S(e.bunnyInnerEar,y);mt.position.set(.038,.2,.095),mt.rotation.set(-.15,0,.12);const X=new S(e.bunnyEye,C);X.position.set(-.052,.1,.16);const it=new S(e.bunnyEye,C);it.position.set(.052,.1,.16);const I=new S(e.bunnyNose,y);I.position.set(0,.075,.18);const Ct=new S(e.bunnyTail,w);Ct.position.set(0,.02,-.14),f.add(St,lt,It,Bt,kt,mt,X,it,I,Ct),f.position.set(0,.24,.24),o.add(f)}else{const x=t.smooth(F.skinWarm,.72),_=t.flat(3483682,.82),L=t.flat(7023938,.85),T=t.flat(13016143,.88),E=t.flat(14201416,.35,.65),P=t.flat(2366746,.9),w=()=>{const bt=new dt,Nt=new S(e.leg,x);Nt.position.y=-.34;const q=new S(e.boot,P);return q.position.set(0,-.74,.03),bt.add(Nt,q),bt};s.add(w()),r.add(w());const y=new S(e.skirtLong,L);y.position.y=-.36;const C=new S(e.torsoFemale,L);C.position.y=.2;const N=new S(e.neck,x);N.position.y=.44;const U=new S(e.shawlWrap,T);U.position.set(0,.3,0);const O=new S(e.shawlFold,T);O.position.set(0,.2,.15);const $=new S(e.shawlBrooch,E);$.rotation.x=Math.PI/2,$.position.set(0,.24,.195),o.add(y,C,N,U,O,$);const B=new S(e.head,x),j=new S(e.hairCap,_);j.position.set(0,.02,-.015);const z=new S(e.hairBangs,_);z.position.set(0,.08,.11);const rt=new S(e.hairBun,_);rt.position.set(0,.05,-.16);const pt=new S(e.hairPin,E);pt.rotation.z=Math.PI/3,pt.position.set(0,.06,-.16),l.add(B,j,z,rt,pt),a.rotation.set(.65,-.32,.18),c.rotation.set(.65,.32,-.18);const vt=()=>{const bt=new dt,Nt=new S(e.arm,L);Nt.position.y=-.19;const q=new S(e.hand,x);return q.position.y=-.4,bt.add(Nt,q),bt};a.add(vt()),c.add(vt())}Ue(n);let v=!1,m=!1,p=0,M=0;return{object:n,setState(x,_){v=x,m=_,x||(s.rotation.x=0,r.rotation.x=0,o.position.y=.82)},tick(x){if(p+=x,v){M+=x*7.2;const _=Math.sin(M)*.44;s.rotation.x=_,r.rotation.x=-_;const L=Math.abs(Math.sin(M*2))*.032;o.position.y=.82+L,i==="tom"?(a.rotation.x=-_*.7,c.rotation.x=.15+_*.25,g&&(g.rotation.z=Math.sin(M)*.08)):i==="yuki"?(a.rotation.x=.95+Math.sin(M)*.06,c.rotation.x=.95+Math.sin(M)*.06,f&&(f.position.y=.24+L*.7,f.rotation.z=Math.sin(M)*.04)):(a.rotation.x=.65-_*.18,c.rotation.x=.65+_*.18)}else{const _=Math.sin(p*2.2)*.012;if(o.position.y=.82+_,m){const L=Math.sin(p*.9)*.14;l.rotation.y=L,i==="tom"?(c.rotation.x=.25+Math.sin(p*1.4)*.08,g&&(g.rotation.x=.3+Math.sin(p*1.8)*.08)):i==="yuki"?f&&(f.position.y=.24+Math.sin(p*2.8)*.015,f.rotation.y=Math.sin(p*1.2)*.06):l.rotation.z=Math.sin(p*.6)*.03}else l.rotation.y=0,l.rotation.z=0}}}}const iy=(i,t)=>{const e=kx(20261025),n=new Fx,s=new dt;s.name="FarmProtoWorldRoot";const r=$x(i),o=qx(i,r,e);s.add(o.mesh,o.puddles);const a=Yx(i,n,e);s.add(a.group);const c=Gx(i,n);s.add(c.group);const l=Qx(s,i,r,n,e,t.quality),h=Md(i),u=bd(),d=Ad(),f=[],g=[],v=[],m=[],p=[];let M=0,x=-1;const _={rain:0,drought:0,sunny:1};return{root:s,createField(L){const T=Hx(L,i,n,h);return f.push(T),T},createWorker(L){const T=Wx(L,n,u);return g.push(T),T},setStock(L,T,E){c.setStock(L,T)},setStockItems(L,T){var E;(E=c.setStockItems)==null||E.call(c,L)},createFruitTree(L){const T=Xx(L,i,n);return v.push(T),T},createProcessor(L){const T=ey(L,n);return m.push(T),T},createVillager(L){const T=ny(L,n,d);return p.push(T),T},update(L,T){var N,U;M+=L;const E=T.weather??"sunny",P=E==="rain"?1:0,w=E==="drought"?1:0,y=E==="sunny"?1:0;_.rain=he.damp(_.rain,P,2.2,L),_.drought=he.damp(_.drought,w,2.2,L),_.sunny=he.damp(_.sunny,y,2.2,L);const C=T.phase==="evening"?1:T.time01>.58?he.smoothstep(T.time01,.58,.72):0;Math.abs(C-x)>1e-4&&(x=C,n.setWindowEveningFactor(C)),o.setWeather(_),l.setWeather(_),a.anim.update(L,C,_),c.update(L);for(const O of f)(N=O.setWeather)==null||N.call(O,_),O.sway(M);for(const O of v)O.update(L,M,_);for(const O of m)O.update(L);for(const O of p)(U=O.tick)==null||U.call(O,L)},dispose(){const L=new Set,T=new Set,E=new Set,P=w=>{w.traverse(y=>{const C=y;if(C.isMesh){if(C.geometry&&L.add(C.geometry),Array.isArray(C.material))for(const N of C.material)N&&T.add(N);else C.material&&T.add(C.material);C.isInstancedMesh&&E.add(C)}})};P(s);for(const w of f)P(w.object);for(const w of g)P(w.object);for(const w of v)P(w.object);for(const w of m)P(w.object);for(const w of p)P(w.object);for(const w of Object.values(h))L.add(w);for(const w of Object.values(u))L.add(w);for(const w of Object.values(d))L.add(w);for(const w of E)w.dispose();for(const w of L)w.dispose();for(const w of T)w.dispose();n.dispose()}}},sy=Object.freeze(Object.defineProperty({__proto__:null,buildWorld:iy},Symbol.toStringTag,{value:"Module"})),ry={mapSize:[72,56],fieldSlots:[[-17,-9],[-9,-9],[-17,-1],[-9,-1],[-17,7],[-9,7]],fieldSize:[6.5,6.5],orchardSlots:[[-13,-17]],orchardSize:[5,5],buildings:{warehouse:{pos:[2,-6],rotY:0,size:[6,5],door:[2,-3]},mill:{pos:[15,-10],rotY:-.35,size:[5,5],door:[14,-7]},shop:{pos:[14,9],rotY:-.5,size:[6,5],door:[12.4,12]},farmhouse:{pos:[-3,14],rotY:.3,size:[7,6],door:[-3,10.5]},bakery:{pos:[8,-15],rotY:0,size:[5,4],door:[8,-12]},preservery:{pos:[1,-15],rotY:0,size:[5,4],door:[1,-12]}},spots:{field:[-5,-3],warehouse:[2,-3],mill:[14,-7],shop:[12.4,12],orchard:[-13,-14],bakery:[8,-12],preservery:[1,-12]},paths:{"field>warehouse":[[-5,-3],[-1.5,-2],[2,-3]],"warehouse>mill":[[2,-3],[7,-3],[11,-5],[14,-7]],"warehouse>shop":[[2,-3],[4,0],[7.5,5],[9.1,8.8],[10,11.1],[12.4,12]],"orchard>warehouse":[[-13,-14],[-5,-12],[-3,-5],[-1.5,-2],[2,-3]],"warehouse>bakery":[[2,-3],[5.8,-3.6],[7,-8],[8,-12]],"warehouse>preservery":[[2,-3],[-1.5,-2],[-2.4,-6],[-1.5,-10],[1,-12]]},plaza:[3,.5],villagers:{tom:{gate:[-30,23.8],plaza:[-.8,2.8],shop:[10.4,13.2],toPlaza:[[-30,23.8],[-14,14],[0,5.5],[-.8,2.8]],toShop:[[-.8,2.8],[2.5,4.6],[7.5,5],[9.1,8.8],[10.4,13.2]]},yuki:{gate:[-5.4,-25],plaza:[1.2,-1.6],shop:[11.4,13.8],toPlaza:[[-5.4,-25],[-4.5,-13],[-1.5,-2],[1.2,-1.6]],toShop:[[1.2,-1.6],[4.6,-.6],[6.6,2.6],[7.5,5],[9.1,8.8],[11.4,13.8]]},lin:{gate:[34,-22.6],plaza:[6.5,-.8],shop:[12.5,14.3],toPlaza:[[34,-22.6],[24,-14],[12,-3.5],[6.5,-.8]],toShop:[[6.5,-.8],[7,2],[7.5,5],[9.1,8.8],[12.5,14.3]]}}},Cn=Object.freeze({seed:178,cooldown:50,lifetime:120,multiplier:1.02,heartBonus:0,morningGift:!0,travelSeconds:8}),fn={tom:{name:"阿湯",day:1,favorite:"bread",likes:["flour","cabbage"]},yuki:{name:"小雪",day:2,favorite:"carrot",likes:["apple"]},lin:{name:"林嬸",day:3,favorite:"jam",likes:["apple","bread"]}},_r=["tom","yuki","lin"];function Cd(){return{socialSeed:Cn.seed,nextCommissionId:1,gifted:Object.fromEntries(Re.map(i=>[i,0])),received:Object.fromEntries(Re.map(i=>[i,0])),villagers:_r.map(i=>({id:i,appeared:!1,points:0,giftedDay:0,rewardDay:0,location:"gate",destination:"gate",progress:0,commission:null,nextCommissionAt:0,completed:0,expired:0}))}}const nu=i=>Math.floor(i.points/10),Rd=(i,t)=>t==="wheat"?0:fn[i].favorite===t?3:fn[i].likes.includes(t)?2:1;function oy(i,t,e){const n=i.villagers.find(r=>r.id===t);if(!n)return{ok:!1,reason:"Invalid villager"};if(!Re.includes(e))return{ok:!1,reason:"Unknown item"};if(!n.appeared)return{ok:!1,reason:"Locked"};const s=Math.floor(i.time/180)+1;return n.giftedDay===s?{ok:!1,reason:"Already gifted"}:i.inventory[e]?(i.inventory[e]--,i.gifted[e]++,n.giftedDay=s,n.points=Math.min(50,n.points+Rd(t,e)),{ok:!0}):{ok:!1,reason:"No item"}}const xo=(i,t)=>i.time>={wheat:0,flour:0,carrot:180,cabbage:180,bread:360,apple:540,jam:720}[t];function Pd(i,t,e){return Math.round(t*yo[i]*Cn.multiplier*(e?1+Cn.heartBonus:1))}function Ld(i,t,e){t.commission=null,t.nextCommissionAt=i.time+Cn.cooldown,t.points=Math.max(0,Math.min(50,t.points+(e?-1:4))),e?t.expired++:t.completed++}function ay(i){for(const t of i.villagers)if(!(i.day<fn[t.id].day)){if(t.appeared=!0,t.commission&&t.commission.expiresAt<=i.time&&Ld(i,t,!0),i.time%180===0&&t.rewardDay!==i.day){t.rewardDay=i.day;const e=fn[t.id].likes[0];Cn.morningGift&&nu(t)>=3&&xo(i,e)&&qi(i)<ei(i)&&(i.inventory[e]++,i.received[e]++)}if(!t.commission&&i.time>=t.nextCommissionAt&&i.time%180<120){i.socialSeed=Math.imul(i.socialSeed,1664525)+1013904223>>>0;const e=Re.filter(o=>(o===fn[t.id].favorite||fn[t.id].likes.includes(o))&&xo(i,o)&&i.produced[o]>0),n=e.length?e[(i.socialSeed>>>8)%e.length]:"flour",s=2+i.socialSeed%3,r=nu(t)>=2;t.commission={id:i.nextCommissionId++,items:[{item:n,required:s,delivered:0}],bonus:r,reward:Pd(n,s,r),expiresAt:i.time+Cn.lifetime}}cy(t,i.time%180>=120?"gate":t.commission?"shop":"plaza")}}function cy(i,t){i.location!==i.destination&&(i.progress++,i.progress>=Cn.travelSeconds&&(i.location=i.destination,i.progress=0)),i.location===i.destination&&i.location!==t&&(i.destination=i.location==="plaza"?t:"plaza",i.progress=0)}function ly(i){const t=s=>Number.isSafeInteger(s)&&s>=0,e=Math.floor(i.time/180)+1;if(!t(i.socialSeed)||i.socialSeed>4294967295||!t(i.nextCommissionId)||!i.nextCommissionId||![i.gifted,i.received].every(s=>s&&Object.keys(s).length===Re.length&&Re.every(r=>t(s[r])&&(xo(i,r)||!s[r])))||!Array.isArray(i.villagers)||i.villagers.length!==3)return!1;const n=new Set;return i.villagers.every((s,r)=>{var c;if(!s||s.id!==_r[r]||typeof s.appeared!="boolean"||s.appeared&&e<fn[s.id].day||!t(s.points)||s.points>50||!t(s.giftedDay)||s.giftedDay>e||!t(s.rewardDay)||s.rewardDay>e||!t(s.completed)||!t(s.expired)||!t(s.nextCommissionAt)||s.nextCommissionAt>i.time+Cn.cooldown||!["gate","plaza","shop"].includes(s.location)||!["gate","plaza","shop"].includes(s.destination)||!t(s.progress)||s.progress>=Cn.travelSeconds||s.location===s.destination&&s.progress!==0||s.location!==s.destination&&s.location!=="plaza"&&s.destination!=="plaza"||!s.appeared&&(s.points||s.giftedDay||s.rewardDay||s.completed||s.expired||s.commission||s.nextCommissionAt||s.location!=="gate"||s.destination!=="gate"))return!1;if(s.commission===null)return!0;const o=s.commission,a=(c=o==null?void 0:o.items)==null?void 0:c[0];return!o||!t(o.id)||!o.id||o.id>=i.nextCommissionId||n.has(o.id)||!Array.isArray(o.items)||o.items.length!==1||!a||!Re.includes(a.item)||a.item==="wheat"||!xo(i,a.item)||a.item!=="flour"&&(!fn[s.id].likes.includes(a.item)&&fn[s.id].favorite!==a.item||!i.produced[a.item])||!t(a.required)||a.required<2||a.required>4||!t(a.delivered)||a.delivered>=a.required||typeof o.bonus!="boolean"||o.reward!==Pd(a.item,a.required,o.bonus)||!t(o.expiresAt)||o.expiresAt<=i.time||o.expiresAt>i.time+Cn.lifetime?!1:(n.add(o.id),!0)})}const Re=["wheat","flour","carrot","cabbage","apple","bread","jam"],yo={wheat:0,flour:8,carrot:4,cabbage:7,apple:5,bread:20,jam:42},cn={wheat:{seconds:20,yield:4},carrot:{seconds:24,yield:3},cabbage:{seconds:36,yield:4}},ti={bakery:{job:"bake",input:"flour",amount:2,output:"bread",seconds:6,day:3},preservery:{job:"preserve",input:"apple",amount:3,output:"jam",seconds:8,day:5}},vi=()=>({wheat:0,flour:0,carrot:0,cabbage:0,apple:0,bread:0,jam:0}),wo=()=>({batch:null,progress01:0,reserved:0,waiting:"Locked"}),Id=()=>({id:0,planted:!1,growth:0,growth01:0,progress01:0,ripe:!1,harvested:0,readyAt:0,harvestedAt:0,batches:0,waiting:"Locked"}),hl=i=>({id:i,growth:0,planted:!0,harvested:0,crop:"wheat",nextCrop:"wheat",readyAt:0,harvestedAt:0});function Ye(i){var e;const t=Math.floor(i.time/180)+1;return{crops:t>=2?["wheat","carrot","cabbage"]:["wheat"],jobs:fl.filter(n=>(n!=="bake"||t>=3)&&(n!=="preserve"||t>=5)),orchard:t>=4,bakery:t>=3,preservery:t>=5,newToday:((e={2:["carrot","cabbage"],3:["bakery"],4:["orchard"],5:["preservery"]}[t])==null?void 0:e.slice())??[]}}const gn=Object.freeze({earned:2600,days:5}),_i=Object.freeze({sold:24,milled:24,ordersCompleted:2,reward:8}),nr=["sold","milled","ordersCompleted"],ul=i=>({day:i,sold:0,milled:0,ordersCompleted:0,claimed:[]});function dl(i){return i>=gn.earned?3:i>=Math.round(gn.earned*.85)?2:1}function hy(i,t){const e=!i||t&&t.earned>i.earned?t:i;return e?{...e}:null}function uy(i){return{daily:nr.map(t=>({key:t,progress:i.daily[t],target:_i[t],claimed:i.daily.claimed.includes(t),reward:_i.reward})),day:i.daily.day,streak:i.streak,bestStreak:i.bestStreak,bonusEarned:i.bonusEarned,result:i.result?{...i.result}:null,resultUnknown:i.resultUnknown}}const ne=Object.freeze({daySeconds:180,growSeconds:20,harvestYield:4,haulSeconds:3,millSeconds:5,maxFields:6,sellSeconds:3,flourPrice:8,wheatPerFlour:2,capacity:24,weatherGrowth:Object.freeze({sunny:1,rain:1.3,drought:.7})}),ur=i=>Math.imul(i,1664525)+1013904223>>>0,Mo=i=>["sunny","rain","drought"][(i>>>16)%3],Pc=178,iu=["field","warehouse","mill","shop","orchard","bakery","preservery"],fl=["farm","haul","mill","sell","idle","bake","preserve"],ir=["Claude","Codex","Gemini","DeepSeek"],bo=12;function Dd(i){return typeof i=="string"&&i.trim().length>0&&Array.from(i).length<=bo&&!/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}]/u.test(i)}function ba(){return{weather:"sunny",forecast:Mo(ur(Pc)),weatherSeed:Pc,...Cd(),version:5,daily:ul(1),streak:0,bestStreak:0,bonusEarned:0,result:null,resultUnknown:!1,orders:[],seed:178,nextOrderId:1,time:0,remainder:0,day:1,phase:"morning",paused:!1,coins:30,inventory:vi(),produced:vi(),consumed:vi(),shipped:vi(),trees:[Id()],processors:{bakery:wo(),preservery:wo()},fields:[0,1,2].map(hl),workers:fl.slice(0,4).map((i,t)=>({id:t,name:ir[t],job:i,progress:0,location:"field",destination:"field",cargo:0,cargoItem:"wheat"})),upgrades:{field:0,warehouse:0,mill:0},stats:{harvested:0,milled:0,sold:0,earned:0}}}function ei(i){return ne.capacity+i.upgrades.warehouse*12}function No(i,t){return 40*(i.upgrades[t]+1)}function yi(i,t){return t!=="field"&&t!=="warehouse"&&t!=="mill"?{ok:!1,reason:"Invalid upgrade"}:t==="field"&&i.fields.length>=ne.maxFields?{ok:!1,reason:"No land"}:t==="mill"&&i.upgrades.mill>=ne.millSeconds-1?{ok:!1,reason:"Max level"}:i.coins<No(i,t)?{ok:!1,reason:"Not enough coins"}:{ok:!0}}function qi(i){return Re.reduce((t,e)=>t+i.inventory[e],0)+i.processors.bakery.reserved+i.processors.preservery.reserved}function dy(i){return Math.max(0,ei(i)-qi(i))}function Ud(i,t){switch(t.type){case"gift":return oy(i,t.villagerId,t.item);case"renameWorker":{const e=i.workers.find(s=>s.id===t.workerId);if(!e)return{ok:!1,reason:"Invalid worker"};const n=typeof t.name=="string"?t.name.trim():t.name;return Dd(n)?(e.name=n,{ok:!0}):{ok:!1,reason:"Invalid name"}}case"pause":return typeof t.paused!="boolean"?{ok:!1,reason:"Invalid pause"}:(i.paused=t.paused,{ok:!0});case"plantTree":{if(!Ye(i).orchard)return{ok:!1,reason:"Locked"};const e=i.trees.find(n=>n.id===(t.treeId??0));return!e||e.planted?{ok:!1,reason:"Tree unavailable"}:(e.planted=!0,e.waiting="Growing",{ok:!0})}case"setNextCrop":case"plant":{const e=i.fields.find(s=>s.id===t.fieldId),n=t.crop??(e==null?void 0:e.nextCrop)??"wheat";return Object.hasOwn(cn,n)?Ye(i).crops.includes(n)?t.type==="setNextCrop"?e?(e.nextCrop=n,{ok:!0}):{ok:!1,reason:"Field unavailable"}:!e||e.planted||e.harvested>0?{ok:!1,reason:"Field unavailable"}:(e.crop=e.nextCrop=n,e.readyAt=0,e.planted=!0,e.growth=0,{ok:!0}):{ok:!1,reason:"Locked"}:{ok:!1,reason:"Unknown crop"}}case"assign":{const e=i.workers.find(n=>n.id===t.workerId);return!e||!fl.includes(t.job)?{ok:!1,reason:"Invalid worker or job"}:Ye(i).jobs.includes(t.job)?e.job!==t.job&&Object.values(i.processors).some(n=>{var s;return((s=n.batch)==null?void 0:s.workerId)===e.id})?{ok:!1,reason:"Batch in progress"}:["bake","preserve"].includes(t.job)&&i.workers.some(n=>n.id!==e.id&&n.job===t.job)?{ok:!1,reason:"Station busy"}:e.cargo?{ok:!1,reason:"Worker must deliver cargo first"}:e.job===t.job?{ok:!0}:(e.job=t.job,e.progress=0,{ok:!0}):{ok:!1,reason:"Locked"}}case"upgrade":{const e=yi(i,t.target);if(!e.ok)return e;const n=No(i,t.target);return i.coins-=n,i.upgrades[t.target]++,t.target==="field"&&i.fields.push(hl(i.fields.length)),{ok:!0}}default:return{ok:!1,reason:"Unknown action"}}}function fy(i){if(i.time++,i.day=Math.floor(i.time/ne.daySeconds)+1,i.daily.day!==i.day&&(i.daily=ul(i.day),i.weather=i.forecast,i.weatherSeed=ur(i.weatherSeed),i.forecast=Mo(ur(i.weatherSeed))),ay(i),i.orders.some(t=>t.expiresAt<=i.time)&&(i.streak=0),i.orders=i.orders.filter(t=>t.expiresAt>i.time),i.time%40===0&&i.orders.length<3){i.seed=Math.imul(i.seed,1664525)+1013904223>>>0;const t=2+i.seed%5,e=Re.filter(o=>o!=="wheat"&&(o==="flour"||i.produced[o]>0)),n=Math.min(e.length,t,i.day>=5?3:i.day>=2?2:1),s=(i.seed>>>8)%e.length,r=Array.from({length:n},(o,a)=>({item:e[(s+a)%e.length],required:Math.floor(t/n)+(a<t%n?1:0),delivered:0}));i.orders.push({id:i.nextOrderId++,items:r,reward:Math.round(r.reduce((o,a)=>o+a.required*yo[a.item],0)*1.5),expiresAt:i.time+90})}i.phase=["morning","afternoon","evening"][Math.floor(i.time%ne.daySeconds/60)];for(const t of i.fields)t.planted&&(t.growth=Math.min(cn[t.crop].seconds,Math.round((t.growth+ne.weatherGrowth[i.weather])*10)/10));for(const t of i.fields)t.planted&&t.growth>=cn[t.crop].seconds&&!t.readyAt&&(t.readyAt=i.time);for(const t of i.trees)t.planted&&!t.ripe&&!t.harvested&&(t.growth=Math.min(40,Math.round((t.growth+ne.weatherGrowth[i.weather])*10)/10),t.growth===40&&(t.ripe=!0,t.readyAt=i.time)),t.growth01=t.batches>0?1:t.growth/40;for(const t of i.workers)if(t.job==="farm"){t.location=t.destination="field";const e=[...i.fields.filter(n=>n.planted&&n.growth>=cn[n.crop].seconds).map(n=>({at:n.readyAt,id:n.id,f:n})),...i.trees.filter(n=>n.ripe).map(n=>({at:n.readyAt,id:100+n.id,t:n}))].sort((n,s)=>n.at-s.at||n.id-s.id)[0];if(e&&"f"in e){const n=e.f;n.planted=!1,n.growth=0,n.harvested=cn[n.crop].yield,n.harvestedAt=i.time,i.stats.harvested+=n.harvested,i.produced[n.crop]+=n.harvested}else if(e&&"t"in e){const n=e.t;n.ripe=!1,n.growth=0,n.harvested=3,n.harvestedAt=i.time,n.batches++,i.stats.harvested+=3,i.produced.apple+=3,t.location=t.destination="orchard"}else{const n=i.fields.find(s=>!s.planted&&!s.harvested);n&&(n.crop=n.nextCrop,n.planted=!0,n.growth=0,n.readyAt=0)}}else if(t.job==="haul"){if(t.cargo){if(t.destination="warehouse",t.progress=Math.min(ne.haulSeconds,t.progress+1),t.progress>=ne.haulSeconds){const e=Math.min(t.cargo,dy(i));i.inventory[t.cargoItem]+=e,t.cargo-=e,t.location="warehouse",t.cargo||(t.progress=0)}}else if(t.destination="field",t.progress++,t.progress>=ne.haulSeconds){t.location="field",t.progress=0;const e=[...i.fields.map(n=>({source:n,item:n.crop,spot:"field",id:n.id})),...i.trees.map(n=>({source:n,item:"apple",spot:"orchard",id:100+n.id}))].filter(n=>n.source.harvested>0).sort((n,s)=>n.source.harvestedAt-s.source.harvestedAt||n.id-s.id)[0];e&&(t.cargo=Math.min(4,e.source.harvested),e.source.harvested-=t.cargo,t.cargoItem=e.item,t.location=t.destination=e.spot)}}else if(t.job==="mill"){if(t.location=t.destination="mill",i.inventory.wheat<ne.wheatPerFlour){t.progress=0;continue}++t.progress>=Math.max(1,ne.millSeconds-i.upgrades.mill)&&(t.progress=0,i.inventory.wheat-=ne.wheatPerFlour,i.inventory.flour++,i.consumed.wheat+=ne.wheatPerFlour,i.produced.flour++,i.stats.milled++,i.daily.milled++)}else if(t.job==="sell"){t.location=t.destination="shop";const n=[...i.orders,...i.villagers.flatMap(o=>o.commission?[o.commission]:[])].sort((o,a)=>o.expiresAt-a.expiresAt||o.id-a.id).find(o=>o.items.some(a=>a.delivered<a.required&&i.inventory[a.item]>0)),s=n==null?void 0:n.items.slice().sort((o,a)=>Re.indexOf(o.item)-Re.indexOf(a.item)).find(o=>o.delivered<o.required&&i.inventory[o.item]>0),r=(s==null?void 0:s.item)??Re.find(o=>o!=="wheat"&&i.inventory[o]>0);if(!r){t.progress=0;continue}if(++t.progress>=ne.sellSeconds){t.progress=0,i.inventory[r]--,i.shipped[r]++,i.stats.sold++,i.daily.sold++;let o=yo[r];if(n&&s&&(s.delivered++,o=0,n.items.every(a=>a.delivered===a.required))){const a=i.villagers.find(c=>c.commission===n);if(a)o=n.reward,Ld(i,a,!1);else{o=n.reward,i.orders.splice(i.orders.indexOf(n),1),i.daily.ordersCompleted++,i.streak++,i.bestStreak=Math.max(i.bestStreak,i.streak);const c=Math.min(8,(i.streak-1)*2);o+=c,i.bonusEarned+=c}}i.coins+=o,i.stats.earned+=o}}for(const t of["bakery","preservery"]){const e=i.processors[t],n=ti[t],s=i.workers.find(r=>r.job===n.job);if(i.day<n.day){e.waiting="Locked";continue}if(!s){e.waiting="No worker";continue}if(s.location=s.destination=t,!e.batch){if(e.progress01=0,i.inventory[n.input]<n.amount){e.waiting="Missing ingredients";continue}if(qi(i)-n.amount+1>ei(i)){e.waiting="Warehouse full";continue}i.inventory[n.input]-=n.amount,i.consumed[n.input]+=n.amount,e.batch={item:n.output,remaining:n.seconds,workerId:s.id},e.reserved=1}e.waiting=null,e.batch.remaining--,e.progress01=1-e.batch.remaining/n.seconds,e.batch.remaining||(i.inventory[n.output]++,i.produced[n.output]++,e.batch=null,e.reserved=0)}for(const t of i.trees)t.progress01=t.growth/40,t.waiting=i.day<4?"Locked":t.planted?t.harvested?"Awaiting haul":t.ripe?"Awaiting harvest":"Growing":null;for(const t of nr)i.daily[t]>=_i[t]&&!i.daily.claimed.includes(t)&&(i.daily.claimed.push(t),i.coins+=_i.reward,i.stats.earned+=_i.reward,i.bonusEarned+=_i.reward);i.time===gn.days*ne.daySeconds&&!i.resultUnknown&&!i.result&&(i.result={earned:i.stats.earned,stars:dl(i.stats.earned)})}function Nd(i,t){if(!Number.isFinite(t)||t<0||t>3600)throw new RangeError("seconds must be between 0 and 3600");if(i.paused)return i;i.remainder+=t;const e=Math.floor(i.remainder+1e-9);i.remainder=Math.max(0,i.remainder-e);for(let n=0;n<e;n++)fy(i);return i}function py(i){return JSON.stringify(i)}function my(i){var o,a,c,l;const t=JSON.parse(i),e=[1,2,3].includes(t==null?void 0:t.version);if((t==null?void 0:t.version)===1&&(t.version=2,t.orders=[],t.seed=178,t.nextOrderId=1),(t==null?void 0:t.version)===2&&(t.version=3,t.daily=ul(Math.floor(t.time/ne.daySeconds)+1),t.streak=0,t.bestStreak=0,t.bonusEarned=0,t.result=null,t.resultUnknown=t.time>=gn.days*ne.daySeconds),(t==null?void 0:t.version)===3){t.version=4,t.inventory&&(t.inventory={...vi(),...t.inventory}),Array.isArray(t.fields)&&(t.fields=t.fields.map(h=>({...hl(h.id),...h}))),Array.isArray(t.workers)&&(t.workers=t.workers.map(h=>({...h,cargoItem:h.cargoItem??"wheat"}))),Array.isArray(t.orders)&&(t.orders=t.orders.map(h=>h.items?h:{id:h.id,items:[{item:"flour",required:h.flour,delivered:h.delivered}],reward:h.reward,expiresAt:h.expiresAt})),t.produced??(t.produced={...vi(),wheat:(o=t.stats)==null?void 0:o.harvested,flour:(a=t.stats)==null?void 0:a.milled}),t.consumed??(t.consumed={...vi(),wheat:2*((c=t.stats)==null?void 0:c.milled)}),t.shipped??(t.shipped={...vi(),flour:(l=t.stats)==null?void 0:l.sold}),t.trees??(t.trees=[Id()]),t.processors??(t.processors={bakery:wo(),preservery:wo()});for(const h of["bakery","preservery"])t.processors[h].batch||(t.processors[h].waiting=Math.floor(t.time/180)+1<ti[h].day?"Locked":"No worker");for(const h of t.trees)h.planted||(h.waiting=t.time<540?"Locked":null)}(t==null?void 0:t.version)===4&&(Object.assign(t,Cd()),t.version=5);const n=t;e&&n&&!["weather","forecast","weatherSeed"].some(h=>Object.hasOwn(n,h))&&(n.weather="sunny",n.weatherSeed=Pc,n.forecast=Mo(ur(n.weatherSeed)));const s=h=>Number.isSafeInteger(h)&&h>=0,r=h=>h==="haul"?ne.haulSeconds:h==="mill"?ne.millSeconds-1:h==="sell"?ne.sellSeconds-1:0;if(!n||n.version!==5||!s(n.time)||!s(n.coins)||typeof n.paused!="boolean"||!s(n.seed)||n.seed>4294967295||!s(n.nextOrderId)||n.nextOrderId<1||!s(n.weatherSeed)||n.weatherSeed>4294967295||!["sunny","rain","drought"].includes(n.weather)||n.time<ne.daySeconds&&n.weather!=="sunny"||n.forecast!==Mo(ur(n.weatherSeed))||!Array.isArray(n.orders)||n.orders.length>3||!n.orders.every((h,u)=>h&&s(h.id)&&h.id>0&&h.id<n.nextOrderId&&(u===0||h.id>n.orders[u-1].id)&&Array.isArray(h.items)&&h.items.length>=1&&h.items.length<=3&&new Set(h.items.map(d=>d.item)).size===h.items.length&&h.items.every(d=>d&&Re.includes(d.item)&&d.item!=="wheat"&&s(d.required)&&d.required>=1&&s(d.delivered)&&d.delivered<=d.required)&&h.items.some(d=>d.delivered<d.required)&&h.items.reduce((d,f)=>d+f.required,0)>=2&&h.items.reduce((d,f)=>d+f.required,0)<=6&&h.reward===Math.round(h.items.reduce((d,f)=>d+f.required*yo[f.item],0)*1.5)&&s(h.expiresAt)&&h.expiresAt>n.time&&h.expiresAt<=n.time+90)||!Number.isFinite(n.remainder)||n.remainder<0||n.remainder>=1||!n.inventory||!Re.every(h=>s(n.inventory[h]))||!n.upgrades||!["field","warehouse","mill"].every(h=>s(n.upgrades[h]))||n.upgrades.mill>ne.millSeconds-1||!n.stats||!["harvested","milled","sold","earned"].every(h=>s(n.stats[h]))||!Array.isArray(n.fields)||n.fields.length!==3+n.upgrades.field||n.fields.length>ne.maxFields||!n.fields.every((h,u)=>h&&h.id===u&&Number.isFinite(h.growth)&&h.growth>=0&&Object.hasOwn(cn,h.crop)&&Ye(n).crops.includes(h.crop)&&Ye(n).crops.includes(h.nextCrop)&&s(h.readyAt)&&h.readyAt<=n.time&&s(h.harvestedAt)&&h.harvestedAt<=n.time&&h.growth<=cn[h.crop].seconds&&typeof h.planted=="boolean"&&(h.planted||h.growth===0)&&s(h.harvested)&&h.harvested<=cn[h.crop].yield&&(!h.planted||!h.harvested))||!Array.isArray(n.workers)||n.workers.length!==4||!n.workers.every((h,u)=>h&&h.id===u&&Ye(n).jobs.includes(h.job)&&Re.includes(h.cargoItem)&&s(h.progress)&&h.progress<=r(h.job)&&s(h.cargo)&&h.cargo<=4&&(h.cargo===0||h.job==="haul")&&iu.includes(h.location)&&iu.includes(h.destination))||!gy(n)||!ly(n)||qi(n)>ei(n))throw new Error("Invalid farm save");if(!n.daily||n.daily.day!==Math.floor(n.time/ne.daySeconds)+1||!nr.every(h=>s(n.daily[h]))||n.daily.sold>n.stats.sold||n.daily.milled>n.stats.milled||n.daily.ordersCompleted>n.daily.sold||!Array.isArray(n.daily.claimed)||new Set(n.daily.claimed).size!==n.daily.claimed.length||!n.daily.claimed.every(h=>nr.includes(h))||!nr.every(h=>n.daily.claimed.includes(h)===n.daily[h]>=_i[h])||!s(n.streak)||!s(n.bestStreak)||n.streak>n.bestStreak||n.bestStreak>=n.nextOrderId||!s(n.bonusEarned)||n.bonusEarned>n.stats.earned||n.bonusEarned<n.daily.claimed.length*_i.reward||typeof n.resultUnknown!="boolean"||(n.time<gn.days*ne.daySeconds?n.result!==null||n.resultUnknown:n.resultUnknown?n.result!==null:!n.result||!s(n.result.earned)||n.result.earned>n.stats.earned||n.time===gn.days*ne.daySeconds&&n.result.earned!==n.stats.earned))throw new Error("Invalid farm save");n.result&&(n.result.stars=dl(n.result.earned));for(const h of n.workers){if(Object.hasOwn(h,"name")||(h.name=ir[h.id]),!Dd(h.name))throw new Error("Invalid farm save");h.name=h.name.trim()}return n.day=Math.floor(n.time/ne.daySeconds)+1,n.phase=["morning","afternoon","evening"][Math.floor(n.time%ne.daySeconds/60)],n}function gy(i){const t=o=>Number.isSafeInteger(o)&&o>=0,e=o=>o&&Object.keys(o).length===Re.length&&Re.every(a=>t(o[a]));if(![i.inventory,i.produced,i.consumed,i.shipped].every(e)||!i.processors||Object.keys(i.processors).length!==2||!Array.isArray(i.trees)||i.trees.length!==1)return!1;const n=Math.floor(i.time/180)+1,s=[null,"Locked","No worker","Missing ingredients","Warehouse full","Growing","Awaiting harvest","Awaiting haul"];for(const o of["bakery","preservery"]){const a=i.processors[o],c=ti[o];if(!a||!Number.isFinite(a.progress01)||a.progress01<0||a.progress01>1||!s.includes(a.waiting)||i.workers.filter(l=>l.job===c.job).length>1)return!1;if(a.batch){const l=a.batch;if(n<c.day||l.item!==c.output||!t(l.remaining)||l.remaining<1||l.remaining>=c.seconds||a.reserved!==1||a.progress01!==1-l.remaining/c.seconds||!i.workers.some(h=>h.id===l.workerId&&h.job===c.job))return!1}else if(a.batch!==null||a.reserved!==0||a.progress01!==0&&a.progress01!==1)return!1}if(!i.trees.every((o,a)=>o&&o.id===a&&typeof o.planted=="boolean"&&typeof o.ripe=="boolean"&&Number.isFinite(o.growth)&&o.growth>=0&&o.growth<=40&&t(o.harvested)&&o.harvested<=3&&t(o.batches)&&t(o.readyAt)&&o.readyAt<=i.time&&t(o.harvestedAt)&&o.harvestedAt<=i.time&&s.includes(o.waiting)&&o.progress01===o.growth/40&&o.growth01===(o.batches?1:o.growth/40)&&(!o.ripe||o.growth===40&&!o.harvested)&&(!o.harvested||o.growth===0&&!o.ripe)&&(o.planted?n>=4:!o.growth&&!o.ripe&&!o.harvested&&!o.batches)))return!1;const r=o=>o==="carrot"||o==="cabbage"?n>=2:o==="bread"?n>=3:o==="apple"?n>=4:o==="jam"?n>=5:!0;return Re.every(o=>r(o)||!i.inventory[o]&&!i.produced[o]&&!i.consumed[o]&&!i.shipped[o])&&i.workers.every(o=>!o.cargo||r(o.cargoItem)&&["wheat","carrot","cabbage","apple"].includes(o.cargoItem))&&i.orders.every(o=>o.items.length<=(n>=5?3:n>=2?2:1)&&o.items.every(a=>r(a.item)&&(a.item==="flour"||i.produced[a.item]>0)))}const on={wheat:"🌾",flour:"🥣",carrot:"🥕",cabbage:"🥬",apple:"🍎",bread:"🍞",jam:"🍯"},mi={wheat:"小麥",flour:"麵粉",carrot:"胡蘿蔔",cabbage:"甘藍",apple:"蘋果",bread:"麵包",jam:"果醬"},vy=["wheat","carrot","cabbage"],_y={carrot:"🥕胡蘿蔔",cabbage:"🥬甘藍",bakery:"🍞麵包坊",orchard:"🍎蘋果樹",preservery:"🍯果醬坊"},xy={carrot:"點空田名牌選作物",cabbage:"點空田名牌選作物",bakery:"派一個人去烘焙（2 麵粉 → 1 麵包）",orchard:"點蘋果樹的名牌種下去",preservery:"派一個人去製醬（3 蘋果 → 1 果醬）"},kd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Yi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const yy=new Jc(-1,1,1,-1,0,1);class wy extends Oe{constructor(){super(),this.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ue([0,2,0,0,2,0],2))}}const My=new wy;class ko{constructor(t){this._mesh=new S(My,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,yy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class by extends Yi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=or.clone(t.uniforms),this.material=new Ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ko(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class su extends Yi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Sy extends Yi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Ey{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Et);this._width=n.width,this._height=n.height,e=new ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new by(kd),this.copyPass.material.blending=jn,this.clock=new wd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}su!==void 0&&(o instanceof su?n=!0:o instanceof Sy&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ty extends Yi{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Dt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const Ay={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Dt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ts extends Yi{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Et(t.x,t.y):new Et(256,256),this.clearColor=new Dt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ln(r,o,{type:Dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new ln(r,o,{type:Dn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new ln(r,o,{type:Dn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Ay;this.highPassUniforms=or.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ge({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Et(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=kd;this.copyUniforms=or.clone(h.uniforms),this.blendMaterial=new Ge({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Na,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Dt,this.oldClearAlpha=1,this.basic=new Ao,this.fsQuad=new ko(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Et(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Ts.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Ts.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ge({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Et(.5,.5)},direction:{value:new Et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ts.BlurDirectionX=new Et(1,0);Ts.BlurDirectionY=new Et(0,1);const Cy={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Ry extends Yi{constructor(){super();const t=Cy;this.uniforms=or.clone(t.uniforms),this.material=new cx({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ko(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ie.getTransfer(this._outputColorSpace)===fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ru?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Lu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Iu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Py extends Yi{constructor(e){super();G(this,"mat");G(this,"quad");this.camera=e,this.mat=new Ge({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tChar:{value:null},hasChar:{value:0},texel:{value:new Et(1,1)},near:{value:e.near},far:{value:e.far},ink:{value:new Dt(0)},width:{value:1},crease0:{value:.004}},vertexShader:`
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
        }`}),this.quad=new ko(this.mat)}setWidth(e){this.mat.uniforms.width.value=e}setCrease(e){this.mat.uniforms.crease0.value=e}setCharDepth(e){this.mat.uniforms.tChar.value=e,this.mat.uniforms.hasChar.value=e?1:0}setSize(e,n){this.mat.uniforms.texel.value.set(1/e,1/n)}render(e,n,s){const r=this.mat.uniforms;r.tDiffuse.value=s.texture,r.tDepth.value=s.depthTexture,r.near.value=this.camera.near,r.far.value=this.camera.far,e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(),this.quad.render(e)}dispose(){this.mat.dispose(),this.quad.dispose()}}const di={x:70,y:26,z:56},ru=17,ou=2.2;class Ly{constructor(t){G(this,"mesh");G(this,"pos");G(this,"m",new te);G(this,"q",new Wi().setFromEuler(new Rn(0,0,-Math.atan2(ou,ru))));G(this,"s",new D(1,1,1));G(this,"p",new D);G(this,"mat");G(this,"amount",0);const e=t==="high"?1500:450,n=new ct(.025,.75,.025);this.mat=new Ao({color:13031662,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),this.mesh=new bn(n,this.mat,e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,this.mesh.visible=!1,this.pos=new Float32Array(e*3);for(let s=0;s<e;s++)this.pos[s*3]=(Math.random()-.5)*di.x,this.pos[s*3+1]=Math.random()*di.y,this.pos[s*3+2]=(Math.random()-.5)*di.z}update(t,e,n){if(this.amount=e,this.mesh.visible=e>.02,!this.mesh.visible)return;this.mat.opacity=.42*e;const s=this.mesh.count,r=Math.ceil(s*Math.min(1,e*1.2));for(let o=0;o<s;o++){let a=this.pos[o*3+1]-ru*t,c=this.pos[o*3]+ou*t;a<0&&(a+=di.y,c=(Math.random()-.5)*di.x,this.pos[o*3+2]=(Math.random()-.5)*di.z),c>di.x/2&&(c-=di.x),this.pos[o*3]=c,this.pos[o*3+1]=a;const l=o>=r?0:1;this.p.set(n.x+c,a,n.z+this.pos[o*3+2]),this.s.set(l,l,l),this.m.compose(this.p,this.q,this.s),this.mesh.setMatrixAt(o,this.m)}this.mesh.instanceMatrix.needsUpdate=!0}get raining(){return this.amount}dispose(){this.mesh.geometry.dispose(),this.mat.dispose(),this.mesh.dispose()}}const au={rain:{sun:11846358,sunK:.5,sunMul:.45,sky:10465476,skyK:.55,bg:9872564,bgK:.65,exposure:.9},drought:{sun:16760426,sunK:.35,sunMul:1.08,sky:16769192,skyK:.3,bg:15783066,bgK:.5,exposure:1.03}},cu={sunny:{icon:"☀️",name:"晴",tip:"放晴了"},rain:{icon:"🌧️",name:"雨",tip:"今天下雨：作物長得比較快"},drought:{icon:"🔥",name:"旱",tip:"今天乾旱：作物長得比較慢"}};ie.enabled=!0;const lu=["morning","afternoon","evening"],Pi=new Dt,Iy=new Dt,hu=new D,uu=new D,Dy=new D,Uy=new D,Hs=he.degToRad(58),Sa=he.degToRad(34),du=9,Ny=.9,fu=2,pu=new Dt;class ky{constructor(t,e,n,s=!1){G(this,"renderer");G(this,"scene",new b_);G(this,"bgColor",new Dt(12575743));G(this,"camera");G(this,"sun");G(this,"hemi");G(this,"fireLight");G(this,"quality");G(this,"outline");G(this,"composer",null);G(this,"bloom",null);G(this,"outlinePass",null);G(this,"charTarget",null);G(this,"charDepthMat",new od({depthPacking:Hu}));G(this,"characters",null);G(this,"composerKey","");G(this,"events",new AbortController);G(this,"target",new D);G(this,"distance",64);G(this,"pitch",Hs);G(this,"followPos",null);G(this,"backTo",null);G(this,"onUnfollow",null);G(this,"occluders",null);G(this,"followPitch",Sa);G(this,"occludeClock",0);G(this,"occludeRay",new Jh);G(this,"weatherGoal","sunny");G(this,"weatherMix",{rain:0,drought:0});G(this,"rain");G(this,"bounds");G(this,"fit",0);G(this,"homeZ",0);G(this,"dragDist",0);this.canvas=t,this.layout=e,this.quality=n,this.outline=s,this.renderer=new M_({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=an,this.renderer.toneMapping=Vc,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ua,this.camera=new Ke(30,1,1,400),this.bounds={x:e.mapSize[0]/2-8,z:e.mapSize[1]/2-6},this.target.set(0,0,0),this.hemi=new wx(16777215,4473924,1),this.scene.add(this.hemi),this.sun=new Tx(16777215,2.5),this.sun.castShadow=!0;const r=Math.max(e.mapSize[0],e.mapSize[1])/2+4,o=this.sun.shadow.camera;o.left=-r,o.right=r,o.top=r,o.bottom=-r,o.near=1,o.far=220,this.sun.shadow.bias=-5e-4,this.sun.shadow.normalBias=.04,this.scene.add(this.sun,this.sun.target),this.fireLight=new Sx(16752704,1,26,1.6),this.fireLight.position.set(e.plaza[0],2.2,e.plaza[1]),this.scene.add(this.fireLight),this.scene.fog=new tl(12575743,110,220),this.scene.background=this.bgColor,this.rain=new Ly(n),this.scene.add(this.rain.mesh),this.applyQuality(n),this.bindControls(),this.resize(),window.addEventListener("resize",()=>this.resize(),{signal:this.events.signal})}applyQuality(t){var s;this.quality=t;const e=Math.min(window.devicePixelRatio||1,t==="high"?2:1.5);this.renderer.setPixelRatio(e);const n=t==="high"?2048:1024;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),(s=this.sun.shadow.map)==null||s.dispose(),this.sun.shadow.map=null),this.renderer.shadowMap.type=t==="high"?Ua:zc,this.buildComposer(),this.resize()}setOutline(t){this.outline=t,this.buildComposer(),this.resize()}setOutlineCrease(t){var e;(e=this.outlinePass)==null||e.setCrease(t)}buildComposer(){var r;const t=this.quality==="high",e=`${t}|${this.outline}`;if(e===this.composerKey||(this.composerKey=e,this.disposeComposer(),!t&&!this.outline))return;const n=this.renderer.getDrawingBufferSize(new Et),s=new ln(n.x,n.y,{type:Dn,samples:t?4:0,depthTexture:this.outline?new fo(n.x,n.y):null});if(s.texture.name="EffectComposer.rt1",this.composer=new Ey(this.renderer,s),this.outline){const o=this.composer.renderTarget2;(r=o.depthTexture)==null||r.dispose(),o.depthTexture=new fo(n.x,n.y)}this.composer.addPass(new Ty(this.scene,this.camera)),this.outline&&(this.outlinePass=new Py(this.camera),this.outlinePass.setWidth(1.5*this.renderer.getPixelRatio()),this.charTarget=new ln(n.x,n.y,{minFilter:qe,magFilter:qe}),this.charTarget.texture.name="Stage.charDepth",this.outlinePass.setCharDepth(this.charTarget.texture),this.composer.addPass(this.outlinePass)),t&&(this.bloom=new Ts(new Et(256,256),.45,.6,.88),this.composer.addPass(this.bloom)),this.composer.addPass(new Ry)}resize(){var r,o,a;const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;if(this.renderer.setSize(t,e,!1),(r=this.composer)==null||r.setPixelRatio(this.renderer.getPixelRatio()),(o=this.composer)==null||o.setSize(t,e),(a=this.outlinePass)==null||a.setWidth(1.5*this.renderer.getPixelRatio()),this.charTarget){const c=this.renderer.getDrawingBufferSize(new Et);this.charTarget.setSize(c.x,c.y)}this.camera.aspect=t/e,this.camera.fov=t<e?42:30,this.camera.updateProjectionMatrix();const n=Math.max(64,48/(2*Math.tan(he.degToRad(this.camera.fov/2))*this.camera.aspect)),s=t<e?-6:-3;this.fit&&Math.abs(this.target.x+2)<.01&&Math.abs(this.target.z-this.homeZ)<.01&&(this.target.z=s),this.homeZ=s,this.fit?n!==this.fit&&(this.backTo!==null?this.backTo=he.clamp(this.backTo*(n/this.fit),22,140):this.zoomTo(this.distance*(n/this.fit))):(this.zoomTo(n),this.target.set(-2,0,s)),this.fit=n}setDayTime(t){const e=t*3,n=Math.min(2,Math.floor(e)),s=e-n,r=tu[lu[n]],o=tu[lu[(n+1)%3]],a=he.smoothstep(s,.75,1);this.applyLight(r,o,a)}applyLight(t,e,n){const s=(a,c)=>a+(c-a)*n,r=(a,c,l)=>l.copy(Pi.setHex(a)).lerp(Iy.setHex(c),n);r(t.sunColor,e.sunColor,this.sun.color),this.sun.intensity=s(t.sunIntensity,e.sunIntensity);const o=uu.set(...t.sunDir).normalize().lerp(Dy.set(...e.sunDir).normalize(),n).normalize();this.sun.position.copy(this.target).addScaledVector(o,90),this.sun.target.position.copy(this.target),r(t.hemiSky,e.hemiSky,this.hemi.color),r(t.hemiGround,e.hemiGround,this.hemi.groundColor),this.hemi.intensity=s(t.hemiIntensity,e.hemiIntensity),this.fireLight.intensity=s(t.fire,e.fire)*12,this.renderer.toneMappingExposure=s(t.exposure,e.exposure),this.scene.fog.color.copy(r(t.background,e.background,this.bgColor)),this.applyWeatherTint()}applyWeatherTint(){const t=this.weatherMix.rain,e=this.weatherMix.drought;if(t<.001&&e<.001)return;const n=au.rain,s=au.drought;this.sun.color.lerp(Pi.setHex(n.sun),n.sunK*t).lerp(Pi.setHex(s.sun),s.sunK*e),this.sun.intensity*=he.lerp(1,n.sunMul,t)*he.lerp(1,s.sunMul,e),this.hemi.color.lerp(Pi.setHex(n.sky),n.skyK*t).lerp(Pi.setHex(s.sky),s.skyK*e),this.bgColor.lerp(Pi.setHex(n.bg),n.bgK*t).lerp(Pi.setHex(s.bg),s.bgK*e),this.scene.fog.color.copy(this.bgColor),this.renderer.toneMappingExposure*=he.lerp(1,n.exposure,t)*he.lerp(1,s.exposure,e)}setWeather(t){this.weatherGoal=t}get rainAmount(){return this.weatherMix.rain}follow(t){this.backTo===null&&(this.backTo=this.distance),this.followPos=t,this.followPitch=Sa,this.occludeClock=0}get following(){return this.followPos!==null}get cameraDistance(){return this.distance}unfollow(){var t;this.followPos&&(this.followPos=null,(t=this.onUnfollow)==null||t.call(this))}update(t){var r;const e=1-Math.exp(-t*1.2);this.weatherMix.rain+=((this.weatherGoal==="rain"?1:0)-this.weatherMix.rain)*e,this.weatherMix.drought+=((this.weatherGoal==="drought"?1:0)-this.weatherMix.drought)*e,this.rain.update(t,this.weatherMix.rain,this.target);const n=1-Math.exp(-t*4),s=(r=this.followPos)==null?void 0:r.call(this);s?(this.occludeClock-=t,this.occludeClock<=0&&(this.occludeClock=.3,this.checkOcclusion(s)),this.target.x+=(s.x-this.target.x)*n,this.target.z+=(s.z-this.target.z)*n,this.target.y+=(Ny-this.target.y)*n,this.distance+=(du-this.distance)*n,this.pitch+=(this.followPitch-this.pitch)*n):this.backTo!==null&&(this.target.y+=(0-this.target.y)*n,this.distance+=(this.backTo-this.distance)*n,this.pitch+=(Hs-this.pitch)*n,Math.abs(this.distance-this.backTo)<.05&&Math.abs(this.pitch-Hs)<.001&&(this.distance=this.backTo,this.pitch=Hs,this.target.y=0,this.backTo=null))}checkOcclusion(t){if(!this.occluders)return;const e=he.degToRad(8),n=he.degToRad(78),s=r=>{const o=hu.set(t.x,1.5,t.z),a=uu.set(0,Math.sin(r),Math.cos(r));return this.occludeRay.set(o,a),this.occludeRay.far=du,this.occludeRay.intersectObject(this.occluders,!0).length>0};s(this.followPitch)?this.followPitch=Math.min(n,this.followPitch+e):this.followPitch>Sa&&!s(this.followPitch-e)&&(this.followPitch-=e)}render(){const t=Uy.set(0,Math.sin(this.pitch),Math.cos(this.pitch)).multiplyScalar(this.distance);this.camera.position.copy(this.target).add(t),this.camera.lookAt(this.target);const e=this.scene.fog,n=Math.max(this.distance,40),s=1-.35*this.weatherMix.rain-.2*this.weatherMix.drought;e.near=n*1.5*s,e.far=n*3.2*s,this.composer?(this.charTarget&&this.renderCharDepth(this.charTarget),this.composer.render()):this.renderer.render(this.scene,this.camera)}renderCharDepth(t){var h;const e=((h=this.characters)==null?void 0:h.call(this))??[];for(const u of e)u.traverse(d=>d.layers.enable(fu));const n=this.renderer,s=this.scene,r=this.camera,o=s.background,a=r.layers.mask,c=n.shadowMap.autoUpdate,l=n.getClearAlpha();n.getClearColor(pu),s.background=null,s.overrideMaterial=this.charDepthMat,r.layers.set(fu),n.shadowMap.autoUpdate=!1,n.setRenderTarget(t),n.setClearColor(16777215,1),n.clear(),e.length&&n.render(s,r),n.setRenderTarget(null),n.setClearColor(pu,l),n.shadowMap.autoUpdate=c,r.layers.mask=a,s.overrideMaterial=null,s.background=o}project(t,e){const n=hu.copy(t).project(this.camera);return n.z>1?!1:(e.x=(n.x*.5+.5)*this.canvas.clientWidth,e.y=(-n.y*.5+.5)*this.canvas.clientHeight,!0)}raycaster(t,e){const n=this.canvas.getBoundingClientRect(),s=new Et((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),r=new Jh;return r.setFromCamera(s,this.camera),r}bindControls(){const t=new Map;let e=0,n=this.distance;const s=this.canvas,r=this.events.signal;s.style.touchAction="none",s.addEventListener("pointerdown",a=>{if(s.setPointerCapture(a.pointerId),this.dragDist=0,t.set(a.pointerId,{x:a.clientX,y:a.clientY}),t.size===2){const[c,l]=[...t.values()];e=Math.hypot(c.x-l.x,c.y-l.y),n=this.distance}},{signal:r}),s.addEventListener("pointermove",a=>{const c=t.get(a.pointerId);if(!c)return;const l={x:a.clientX,y:a.clientY};if(t.set(a.pointerId,l),this.dragDist+=Math.hypot(l.x-c.x,l.y-c.y),this.dragDist>8&&this.unfollow(),t.size===1){const h=this.distance*Math.tan(he.degToRad(this.camera.fov/2))*2/s.clientHeight;this.pan(-(l.x-c.x)*h,-(l.y-c.y)*h/Math.sin(this.pitch))}else if(t.size===2&&e>0){const[h,u]=[...t.values()],d=Math.hypot(h.x-u.x,h.y-u.y);this.interrupt(),this.zoomTo(n*(e/Math.max(d,1)))}},{signal:r});const o=a=>{t.delete(a.pointerId),t.size<2&&(e=0)};s.addEventListener("pointerup",o,{signal:r}),s.addEventListener("pointercancel",o,{signal:r}),s.addEventListener("wheel",a=>{a.preventDefault(),this.interrupt(),this.zoomTo(this.distance*Math.exp(a.deltaY*.001))},{passive:!1,signal:r})}interrupt(){this.backTo===null&&!this.followPos||(this.unfollow(),this.backTo=null,this.pitch=Hs,this.target.y=0,this.zoomTo(this.distance))}wasDrag(){return this.dragDist>8}pan(t,e){this.target.x=he.clamp(this.target.x+t,-this.bounds.x,this.bounds.x),this.target.z=he.clamp(this.target.z+e,-this.bounds.z,this.bounds.z)}lookAt(t,e){this.target.x=he.clamp(t,-this.bounds.x,this.bounds.x),this.target.z=he.clamp(e,-this.bounds.z,this.bounds.z)}zoomTo(t){this.distance=he.clamp(t,22,140)}disposeComposer(){var t;if(this.composer){for(const e of this.composer.passes)e.dispose();this.composer.dispose(),this.composer=null,this.bloom=null,this.outlinePass=null,(t=this.charTarget)==null||t.dispose(),this.charTarget=null}}dispose(){this.events.abort(),this.disposeComposer(),this.charDepthMat.dispose(),this.rain.dispose(),this.sun.shadow.dispose(),this.renderer.dispose()}}const Ae=(i,t={})=>new oe({color:i,roughness:.9,metalness:0,flatShading:!0,...t});function Zn(i){return i.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),i}function Fy(i){return()=>((i=i*16807%2147483647)-1)/2147483646}function Fd(i,t,e,n){const s=n[0]-e[0],r=n[1]-e[1],o=Math.max(0,Math.min(1,((i-e[0])*s+(t-e[1])*r)/(s*s+r*r||1)));return Math.hypot(i-(e[0]+s*o),t-(e[1]+r*o))}function Oy(i,t){const[e,n]=i.mapSize,s=new Rs(e+60,n+60,90,70);s.rotateX(-Math.PI/2);const r=s.attributes.position,o=new Float32Array(r.count*3),a=new Dt,c=new Dt(se.grass),l=new Dt(se.grassDark),h=new Dt(se.grassLight),u=new Dt(se.dirt),d=[];for(const v of Object.values(i.paths))for(let m=1;m<v.length;m++)d.push([v[m-1],v[m]]);const f=4.5;for(let v=0;v<r.count;v++){const m=r.getX(v),p=r.getZ(v),M=Math.sin(m*.17+1.3)*Math.cos(p*.21-.4)+Math.sin(m*.05-p*.08)*.8+(t()-.5)*.35;a.copy(c).lerp(M>0?h:l,Math.min(1,Math.abs(M)*.55));let x=Math.hypot(m-i.plaza[0],p-i.plaza[1])-f;for(const[_,L]of d)x=Math.min(x,Fd(m,p,_,L)-1.1);x<.9&&a.lerp(u,he.smoothstep(.9-x,0,1.2)),a.toArray(o,v*3),r.setY(v,Math.sin(m*.11)*Math.cos(p*.13)*.08)}s.setAttribute("color",new tn(o,3)),s.computeVertexNormals();const g=new S(s,new oe({vertexColors:!0,roughness:1}));return g.receiveShadow=!0,g}function ao(i,t,e,n,s){const r=new dt,o=new S(new ct(i,e,t),Ae(n));o.position.y=e/2;const a=new Tt(.01,i*.62,e*.7,4,1);a.rotateY(Math.PI/4),a.scale(1,1,t/i);const c=new S(a,Ae(s));c.position.y=e+e*.35;const l=new S(new ct(i*.22,e*.55,.1),Ae(se.wallWood));l.position.set(0,e*.275,t/2+.05);const h=new S(new ct(i*.16,e*.2,.1),Ae(16765562,{emissive:16757575,emissiveIntensity:.6}));h.position.set(i*.3,e*.62,t/2+.05);const u=h.clone();return u.position.x=-i*.3,r.add(o,c,l,h,u),Zn(r)}function By(){const i=new dt,t=new S(new Tt(1.5,2.1,6,8),Ae(se.stone));t.position.y=3;const e=new S(new me(2,2.2,8),Ae(se.roofRed));e.position.y=7.1;const n=new dt;n.position.set(0,5.6,2);for(let s=0;s<4;s++){const r=new S(new ct(.5,3.6,.08),Ae(se.wallCream));r.position.y=1.8;const o=new dt;o.rotation.z=s*Math.PI/2,o.add(r),n.add(o)}return n.name="blades",i.add(t,e,n),Zn(i)}function zy(i){const t=new dt,e=1.2+i()*.8,n=new S(new Tt(.18,.25,e,5),Ae(se.trunk));n.position.y=e/2;const s=Ae(i()>.5?se.treeLeaf:se.treeLeafDark),r=i()>.45,o=r?new S(new mn(1.3+i()*.6,0),s):new S(new me(1.2+i()*.4,3+i(),6),s);return o.position.y=e+(r?.9:1.4),t.add(n,o),t.rotation.y=i()*Math.PI*2,Zn(t)}function Vy(i){const[t,e]=i.fieldSize,n=new dt,s=new S(new ct(t,.25,e),Ae(se.soil));s.position.y=.12,s.receiveShadow=!0,n.add(s);for(const[p,M]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const x=new S(new ct(.18,.8,.18),Ae(se.wallWood));x.position.set(p*t/2,.4,M*e/2),n.add(Zn(x))}const r=5,o=6,a=new me(.28,1,5);a.translate(0,.5,0);const c=Ae(se.wheatYoung),l=new bn(a,c,r*o);l.castShadow=!0;const h=new te,u=new Dt(se.wheatYoung),d=new Dt(se.wheatRipe);n.add(l);const f=new dt;f.position.set(t/2+.5,0,e/2-.6),n.add(f);const g=new ve(.32,6,4);g.scale(1,.85,.8);const v=Ae(se.wheatRipe);let m=-1;return{object:n,setCrop(p,M,x){const _=M?.15+p*.95:0;let L=0;for(let E=0;E<r;E++)for(let P=0;P<o;P++){const w=(P/(o-1)-.5)*(t-1.2),y=(E/(r-1)-.5)*(e-1.2);h.makeScale(_,_*(.9+(E*7+P*3)%5*.06),_).setPosition(w,.25,y),l.setMatrixAt(L++,h)}l.instanceMatrix.needsUpdate=!0,c.color.copy(u).lerp(d,he.smoothstep(p,.55,1));const T=Math.min(8,Math.ceil(x/2));if(T!==m){m=T,f.clear();for(let E=0;E<T;E++){const P=new S(g,v);P.position.set(E%2*.55,.28+Math.floor(E/4)*.45,-Math.floor(E%4/2)*.6),P.castShadow=!0,f.add(P)}}}}}const mu={farm:5941298,haul:15238970,mill:15852484,sell:4161488,bake:13208138,preserve:12071498,idle:10132122};function Gy(){const i=new dt,t=Ae(mu.idle),e=new S(new Ze(.32,.6,3,8),t);e.position.y=.75;const n=new S(new ve(.3,10,8),Ae(15911328));n.position.y=1.5;const s=new S(new me(.45,.3,10),Ae(15254890));s.position.y=1.78;const r=new S(new ve(.34,6,4),Ae(se.wheatRipe));r.scale.set(1,.8,.8),r.position.set(0,1.2,-.38),r.visible=!1,i.add(e,n,s,r),Zn(i);let o=0,a=!1;return{object:i,setState(c,l,h){t.color.setHex(mu[c]),r.visible=h>0,a=l},tick(c){o+=c,e.position.y=.75+(a?Math.abs(Math.sin(o*10))*.12:Math.sin(o*2)*.02),n.position.y=e.position.y+.75,s.position.y=n.position.y+.28}}}function Od(){const i=new dt,t=new S(new Tt(.9,1.1,.25,8),Ae(se.dirt));t.position.y=.12;const e=new dt,n=new S(new Tt(.22,.32,2,6),Ae(8016434));n.position.y=1;const s=new S(new mn(1.8,0),Ae(5216826));s.position.y=2.9,e.add(n,s);const r=new dt,o=new ve(.18,6,5),a=Ae(14168618);for(let l=0;l<10;l++){const h=new S(o,a),u=l/10*Math.PI*2;h.position.set(Math.cos(u)*1.6,2.4+l%3*.5,Math.sin(u)*1.6),r.add(h)}e.add(r);const c=new S(new ct(.8,.45,.6),Ae(12073514));return c.position.set(1.2,.22,1.2),i.add(Zn(t),Zn(e),Zn(c)),{object:i,setState(l,h,u,d){e.visible=l,e.scale.setScalar(.35+.65*h),r.visible=u,c.visible=d>0}}}function Bd(i,t){const[e,n]=t.buildings[i].size,s=new dt,r=ao(e,n,2.8,se.wallCream,i==="bakery"?se.roofOrange:8014474),o=new S(new ct(e,2.8,n),new oe({color:16777215,transparent:!0,opacity:.25}));o.position.y=1.4;const a=new S(new ve(.4,8,6),new oe({color:se.fire,emissive:se.fire,emissiveIntensity:2}));return a.position.set(0,4.2,0),s.add(r,o,a),{object:s,setState(c,l){r.visible=c,o.visible=!c,a.visible=c&&l}}}const Hy=(i,t)=>{const e=Fy(20261025),n=new dt;n.add(Oy(i,e));const s=i.buildings,r=(m,p)=>{m.position.set(p.pos[0],0,p.pos[1]),m.rotation.y=p.rotY,n.add(m)};r(ao(s.warehouse.size[0],s.warehouse.size[1],3.2,se.wallWood,se.roofSlate),s.warehouse);const o=By();r(o,s.mill),r(ao(s.shop.size[0],s.shop.size[1],2.8,se.wallCream,se.roofOrange),s.shop),r(ao(s.farmhouse.size[0],s.farmhouse.size[1],3,se.wallCream,se.roofRed),s.farmhouse);const a=new dt,c=new S(new Gi(.7,.22,5,10),Ae(se.stone));c.rotation.x=Math.PI/2,c.position.y=.15;const l=new S(new me(.45,1.1,6),new oe({color:se.fire,emissive:se.fire,emissiveIntensity:2.5}));l.position.y=.65,a.add(Zn(c),l),a.position.set(i.plaza[0],0,i.plaza[1]),n.add(a);const h=(m,p)=>{if(Math.hypot(m-i.plaza[0],p-i.plaza[1])<7)return!0;for(const M of Object.values(s))if(Math.abs(m-M.pos[0])<M.size[0]/2+2.5&&Math.abs(p-M.pos[1])<M.size[1]/2+2.5)return!0;for(const M of i.fieldSlots)if(Math.abs(m-M[0])<i.fieldSize[0]/2+2&&Math.abs(p-M[1])<i.fieldSize[1]/2+2)return!0;for(const M of i.orchardSlots)if(Math.hypot(m-M[0],p-M[1])<i.orchardSize[0]/2+2)return!0;for(const M of Object.values(i.paths))for(let x=1;x<M.length;x++)if(Fd(m,p,M[x-1],M[x])<2.5)return!0;return!1},u=t.quality==="high"?110:55,[d,f]=i.mapSize;for(let m=0,p=0;m<u&&p<2e3;p++){const M=(e()-.5)*(d+24),x=(e()-.5)*(f+20);if(h(M,x))continue;const _=zy(e);_.position.set(M,0,x),n.add(_),m++}const g=o.getObjectByName("blades");let v=0;return{root:n,createField:()=>Vy(i),createWorker:()=>Gy(),createFruitTree:()=>Od(),createProcessor:m=>Bd(m,i),update(m){g&&(g.rotation.z-=m*.8),v+=m,l.scale.setScalar(1+Math.sin(v*13)*.08+Math.sin(v*7.3)*.05)}}},Wy=40,Xy=2.5,$y=5.5;function Lc(i,t,e){if(t===e)return[i.spots[t]];const n=i.paths[`${t}>${e}`];if(n)return[...n];const s=i.paths[`${e}>${t}`];return s?[...s].reverse():t!=="warehouse"&&e!=="warehouse"?[...Lc(i,t,"warehouse"),...Lc(i,"warehouse",e).slice(1)]:[i.spots[t],i.spots[e]]}const gu=(i,t)=>Math.hypot(i[t+1][0]-i[t][0],i[t+1][1]-i[t][1]),to=(i,t)=>i.set(i.x+(t%2-.5)*1.1,0,i.z+(t-1.5)*.35);function zd(i,t,e){if(i.length===1)return e.set(i[0][0],0,i[0][1]);let n=0;for(let r=0;r<i.length-1;r++)n+=gu(i,r);let s=he.clamp(t,0,1)*n;for(let r=0;r<i.length-1;r++){const o=gu(i,r);if(s<=o||r===i.length-2){const a=o?Math.min(1,s/o):0;return e.set(i[r][0]+(i[r+1][0]-i[r][0])*a,0,i[r][1]+(i[r+1][1]-i[r][1])*a)}s-=o}return e}class qy{constructor(t,e,n){G(this,"fields",[]);G(this,"workers",[]);G(this,"trees",[]);G(this,"processors",[]);G(this,"tmp",new D);G(this,"targetTmp",new D);G(this,"paths",new Map);var s;this.art=t,this.layout=e,this.parent=n,e.orchardSlots.forEach(([r,o],a)=>{var l;const c=((l=t.createFruitTree)==null?void 0:l.call(t,a))??Od();c.object.position.set(r,0,o),n.add(c.object),this.trees.push(c)});for(const r of["bakery","preservery"]){const o=e.buildings[r],a=((s=t.createProcessor)==null?void 0:s.call(t,r))??Bd(r,e);a.object.position.set(o.pos[0],0,o.pos[1]),a.object.rotation.y=o.rotY,n.add(a.object),this.processors.push({id:r,vis:a})}}workerPosition(t){var e;return((e=this.workers[t])==null?void 0:e.pos)??null}sync(t,e){var s,r;for(;this.fields.length<t.fields.length&&this.fields.length<this.layout.fieldSlots.length;){const o=this.fields.length,a=this.art.createField(o),[c,l]=this.layout.fieldSlots[o];a.object.position.set(c,0,l),this.parent.add(a.object),this.fields.push(a)}for(let o=0;o<this.fields.length;o++){const a=t.fields[o];if(!a)continue;const c=a.planted?Math.min(1,(a.growth+t.remainder)/cn[a.crop].seconds):0;this.fields[o].setCrop(c,a.planted,a.harvested,a.crop)}this.trees.forEach((o,a)=>{const c=t.trees[a];if(!c)return;const l=c.planted&&c.growth01<1&&!c.ripe?Math.min(1,c.growth01+t.remainder/Wy):c.growth01;o.setState(c.planted,l,c.ripe,c.harvested)});const n=Ye(t);for(const{id:o,vis:a}of this.processors){const c=t.processors[o],l=c.batch?Math.min(1,c.progress01+t.remainder/ti[o].seconds):0;a.setState(n[o],!!c.batch,l)}for(;this.workers.length<t.workers.length;){const o=this.workers.length,a=this.art.createWorker(o),c={vis:a,pos:new D,heading:0,wanderIdx:o%3,wanderClock:o*1.7,orchard:0};c.pos.copy(this.targetFor(t,o,c,0)),a.object.position.copy(c.pos),this.parent.add(a.object),this.workers.push(c)}for(let o=0;o<this.workers.length;o++){const a=t.workers[o],c=this.workers[o],l=this.targetFor(t,o,c,e),h=this.tmp.copy(l).sub(c.pos);h.y=0;const u=h.length(),d=Math.min(u,$y*e*(u>3?1.6:1)),f=u>.08;if(f){c.pos.addScaledVector(h.normalize(),d);let v=Math.atan2(h.x,h.z)-c.heading;v=Math.atan2(Math.sin(v),Math.cos(v)),c.heading+=v*Math.min(1,e*10)}c.vis.object.position.copy(c.pos),c.vis.object.rotation.y=c.heading,c.vis.setState(a.job,f,a.cargo,a.cargoItem),(r=(s=c.vis).tick)==null||r.call(s,e)}}path(t,e){const n=`${t}>${e}`;let s=this.paths.get(n);return s||this.paths.set(n,s=Lc(this.layout,t,e)),s}targetFor(t,e,n,s){const r=t.workers[e],o=this.layout,a=this.targetTmp;switch(r.job){case"haul":{const c=r.location,l=r.destination;if(c===l)return to(a.set(o.spots[c][0],0,o.spots[c][1]),e);const h=(r.progress+t.remainder)/ne.haulSeconds;return zd(this.path(c,l),h,a)}case"farm":{if(r.location==="orchard"&&(n.orchard=Xy),n.orchard>0)return n.orchard-=s,a.set(o.spots.orchard[0],0,o.spots.orchard[1]);n.wanderClock+=s,n.wanderClock>4&&(n.wanderClock=0,n.wanderIdx=(n.wanderIdx+1)%Math.max(1,Math.min(t.fields.length,o.fieldSlots.length)));const[c,l]=o.fieldSlots[n.wanderIdx]??o.fieldSlots[0];return a.set(c+o.fieldSize[0]/2+.6,0,l+Math.sin(n.wanderClock*.8)*1.5)}case"mill":return to(a.set(o.buildings.mill.door[0],0,o.buildings.mill.door[1]),e);case"sell":return to(a.set(o.buildings.shop.door[0],0,o.buildings.shop.door[1]),e);case"bake":return a.set(o.buildings.bakery.door[0],0,o.buildings.bakery.door[1]);case"preserve":return a.set(o.buildings.preservery.door[0],0,o.buildings.preservery.door[1]);default:return to(a.set(o.plaza[0]-2.5,0,o.plaza[1]+2),e)}}}const Yy={tom:15921126,yuki:11127018,lin:8006197};function jy(i){const t=new dt,e=new S(new Ze(.3,.6,3,8),new oe({color:Yy[i],roughness:.9}));e.position.y=.75;const n=new S(new ve(.28,10,8),new oe({color:15911328,roughness:.9}));return n.position.y=1.5,t.add(e,n),t.traverse(s=>{s.castShadow=!0}),{object:t,setState(){}}}class Ky{constructor(t){G(this,"object",new dt);G(this,"pos",new D);G(this,"heading",0);G(this,"swapped",!1);G(this,"cur");G(this,"state",[!1,!1]);this.cur=t,this.object.add(t.object)}use(t){this.object.remove(this.cur.object),this.cur=t,this.object.add(t.object),this.swapped=!0,t.setState(...this.state)}setState(t,e){this.state[0]=t,this.state[1]=e,this.cur.setState(t,e)}tick(t){var e,n;(n=(e=this.cur).tick)==null||n.call(e,t)}}class Zy{constructor(t,e,n){G(this,"slots",new Map);G(this,"tmp",new D);G(this,"legs",new Map);var s;this.layout=e;for(const r of _r){const o=new Ky(((s=t.createVillager)==null?void 0:s.call(t,r))??jy(r));o.object.visible=!1,n.add(o.object),this.slots.set(r,o)}}provide(t,e){var n;(n=this.slots.get(t))==null||n.use(e)}get objects(){return[...this.slots.values()].map(t=>t.object)}get ready(){return[...this.slots.values()].filter(t=>t.swapped).length}position(t){const e=this.slots.get(t);return e!=null&&e.object.visible?e.pos:null}leg(t,e,n){const s=`${t}:${e}>${n}`;let r=this.legs.get(s);if(!r){const o=this.layout.villagers[t];r={"gate>plaza":o.toPlaza,"plaza>gate":[...o.toPlaza].reverse(),"plaza>shop":o.toShop,"shop>plaza":[...o.toShop].reverse(),"gate>shop":[...o.toPlaza,...o.toShop.slice(1)],"shop>gate":[...o.toPlaza,...o.toShop.slice(1)].reverse()}[`${e}>${n}`]??[o[n]],this.legs.set(s,r)}return r}sync(t,e){for(const n of t.villagers){const s=this.slots.get(n.id);if(!s||(s.object.visible!==n.appeared&&(s.object.visible=n.appeared),!n.appeared))continue;const r=this.layout.villagers[n.id],o=n.location===n.destination?this.tmp.set(r[n.location][0],0,r[n.location][1]):zd(this.leg(n.id,n.location,n.destination),(n.progress+t.remainder)/Cn.travelSeconds,this.tmp),a=!Number.isFinite(s.pos.x)||s.pos.lengthSq()===0,c=o.x-s.pos.x,l=o.z-s.pos.z,h=!a&&Math.hypot(c,l)>.02&&e>0;if(h){let u=Math.atan2(c,l)-s.heading;u=Math.atan2(Math.sin(u),Math.cos(u)),s.heading+=u*Math.min(1,e*10)}else if(n.location==="shop"&&n.destination==="shop"){const u=this.layout.buildings.shop.door;let d=Math.atan2(u[0]-s.pos.x,u[1]-s.pos.z)-s.heading;d=Math.atan2(Math.sin(d),Math.cos(d)),s.heading+=d*Math.min(1,e*4)}s.pos.copy(o),s.object.position.copy(s.pos),s.object.rotation.y=s.heading,s.setState(h,n.location==="shop"&&n.destination==="shop"&&!!n.commission),s.tick(e)}}}class Jy{constructor(t){G(this,"object",new dt);G(this,"cur");G(this,"state",["idle",!1,0,"wheat"]);this.fallback=t,this.cur=t,this.object.add(t.object)}use(t){this.object.remove(this.cur.object),this.cur=t,this.object.add(t.object),t.setState(...this.state)}get swapped(){return this.cur!==this.fallback}setState(t,e,n,s="wheat"){this.state[0]=t,this.state[1]=e,this.state[2]=n,this.state[3]=s,this.cur.setState(t,e,n,s)}tick(t){var e,n;(n=(e=this.cur).tick)==null||n.call(e,t)}}function Qy(i,t){const e=new Map,n=new Map;return{world:{root:i.root,setStock:i.setStock?(r,o,a)=>i.setStock(r,o,a):void 0,setStockItems:i.setStockItems?(r,o)=>i.setStockItems(r,o):void 0,createFruitTree:i.createFruitTree?r=>i.createFruitTree(r):void 0,createProcessor:i.createProcessor?r=>i.createProcessor(r):void 0,update:i.update?(r,o)=>i.update(r,o):void 0,createField:r=>i.createField(r),createWorker:r=>{const o=new Jy(i.createWorker(r));e.set(r,o);const a=n.get(r);return a&&(n.delete(r),o.use(a)),o},dispose:()=>{var r;t==null||t(),(r=i.dispose)==null||r.call(i)}},provide(r,o){const a=e.get(r);a?a.use(o):n.set(r,o)},get ready(){return[...e.values()].filter(r=>r.swapped).length}}}const Se={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,t){try{localStorage.setItem(i,t)}catch{}},remove(i){try{localStorage.removeItem(i)}catch{}}},Ea={tom:"旅店廚師",yuki:"學校老師",lin:"村長太太"},tw={tom:[["你好！我是旅店的廚師阿湯。","旅店的客人一直問有沒有新鮮麵包。"],["你們的麵粉真細，做出來的湯都變好喝了。","下次幫我留幾袋麵粉好嗎？"],["昨天的燉菜加了你們的甘藍，客人吃光光！","欸，你有沒有試過剛出爐的麵包配奶油？"],["以後每天早上我都送一袋麵粉給你，算我的謝禮。","我在想，旅店的招牌菜要不要用你們的名字？"],["我以前在城裡的大餐廳做菜，可是我更喜歡這個小村子。","跟你們一起做事很開心，真的。"],["（故事）阿湯說，他小時候家裡窮，每天最期待的就是奶奶烤的那條麵包。他離開大城市，是想做出「讓人想回家的味道」。今天他把第一條用你們麵粉烤的麵包，放在奶奶的照片前面。","「謝謝你，讓我找到那個味道。」"]],yuki:[["你好，我是學校的老師小雪。這是小白（兔子）。","小白最喜歡胡蘿蔔了。"],["孩子們今天在畫農莊，畫裡有你們的風車喔。","小白吃了你們的胡蘿蔔，整天都在跳。"],["可以帶孩子們來參觀磨坊嗎？他們一定很興奮。","蘋果切成小兔子的樣子，孩子們最喜歡了。"],["以後早上我會帶蘋果過來，是學校那棵樹結的。","孩子們都叫你「農莊的大哥哥大姊姊」。"],["其實我剛來村子的時候很怕生，是孩子們陪我的。","小白好像也很喜歡你，牠今天一直在你腳邊。"],["（故事）小雪帶全班孩子來農莊上了一堂課：從種子、麥田、磨坊到麵包。回去後，每個孩子都寫了一封信給你們。最後一封是小雪寫的，她說，這是她當老師以來最棒的一堂課。","「明年，我們一起在學校種一小塊田好不好？」"]],lin:[["我是林嬸，村長家的。你們就是新來的農莊吧？","村裡好久沒有這麼熱鬧了。"],["你們的蘋果醬，跟我年輕時做的一個味道。","有空來家裡喝杯茶。"],["村長說，秋天的豐收祭想請你們幫忙。","這條披肩是我自己織的，冬天到了再織一條給你。"],["我每天早上幫你們帶些蘋果來，家裡的樹結太多啦。","村裡的人都在說你們的好話呢。"],["我年輕時也想開一間果醬鋪，後來就……嫁進村長家了。","看你們把農莊經營起來，我真的很高興。"],["（故事）豐收祭那天，林嬸拿出一本舊筆記本，裡面是她四十年前寫的果醬配方。她說，一直想找一個能把它做出來的人。「這本給你們。村子的味道，要有人傳下去。」","「以後豐收祭的果醬，就交給你們了。」"]]},Li=(i,t)=>i.workers.filter(e=>e.job===t).length,vu=i=>Re.reduce((t,e)=>t+(e==="wheat"?0:i.inventory[e]),0);function ew(i,t=dr(i)){if(i.result)return null;if(t)return!Li(i,"sell")&&vu(i)?{key:"jam-sell",text:"倉庫滿了！貨沒人賣：點工人卡，派一個人去 🪙賣貨",target:"crew"}:i.inventory.wheat>=8&&Li(i,"mill")<2?{key:"jam-mill",text:"倉庫滿了！麥子堆太多：再派一個人去 ⚙️磨粉",target:"crew"}:yi(i,"warehouse").ok?{key:"jam-up",text:"倉庫滿了！點 🔨升級 擴建倉庫",target:"upgrade"}:{key:"jam",text:"倉庫滿了！多派人 ⚙️磨粉、🪙賣貨，倉庫才有空位",target:"crew"};if((i.fields.some(r=>r.harvested>0)||i.trees.some(r=>r.harvested>0))&&!Li(i,"haul"))return{key:"haul",text:"田邊的收成沒人搬：派一個人去 🧺搬運",target:"crew"};if(i.inventory.wheat>=4&&!Li(i,"mill"))return{key:"mill",text:"倉庫的麥子沒人磨：派一個人去 ⚙️磨粉",target:"crew"};if(vu(i)>=2&&!Li(i,"sell"))return{key:"sell",text:"有貨沒人賣：派一個人去 🪙賣貨",target:"crew"};if(!Li(i,"farm")&&i.fields.some(r=>!r.planted&&!r.harvested))return{key:"farm",text:"沒人種田：派一個人去 🌾種田",target:"crew"};const n=Ye(i);for(const r of["bakery","preservery"]){const o=ti[r];if(n[r]&&!Li(i,o.job)&&i.inventory[o.input]>=o.amount)return{key:r,text:`${r==="bakery"?"🍞 麵包坊":"🍯 果醬坊"}開了：派一個人去${r==="bakery"?"烘焙":"製醬"}，${mi[o.output]}賣得比${mi[o.input]}貴`,target:"crew"}}if(n.orchard&&i.trees[0]&&!i.trees[0].planted)return{key:"tree",text:"🍎 蘋果樹可以種了：點樹上的紅色名牌",target:"tree"};const s=i.workers.find(r=>r.job==="idle");return s?{key:"idle",text:`${s.name} 在休息：點他的卡派個工作`,target:"crew"}:["warehouse","mill","field"].some(r=>yi(i,r).ok)?{key:"up",text:"錢夠了：點 🔨升級，農莊會做得更快",target:"upgrade"}:null}const Ta={farm:"種田",haul:"搬運",mill:"磨粉",sell:"賣貨",bake:"烘焙",preserve:"製醬",idle:"休息"},Aa={farm:"🌾",haul:"🧺",mill:"⚙️",sell:"🪙",bake:"🍞",preserve:"🥄",idle:"💤"},nw=["farm","haul","mill","bake","preserve","sell","idle"],iw={morning:"早上",afternoon:"下午",evening:"傍晚"},sw={"Field unavailable":"這塊田現在不能種","Invalid worker or job":"派工失敗","Worker must deliver cargo first":"他手上還有貨，送到倉庫才能換工作",Locked:"還沒解鎖","Unknown crop":"不認得的作物","Tree unavailable":"蘋果樹已經種了","Station busy":"這間工坊已經有人在做了","Batch in progress":"這批還沒做完，做完才能換工作","Invalid villager":"找不到這位村民","Unknown item":"不認得的貨","Already gifted":"今天已經送過了，明天再來","No item":"倉庫沒有這個貨","Not enough coins":"金幣不夠","Invalid upgrade":"不能升級","No land":`田最多 ${ne.maxFields} 塊，已經開滿了`,"Max level":"磨坊已經升到最快了","Unknown action":"不認得的操作","Invalid worker":"找不到這個工人","Invalid name":`名字要 1～${bo} 個字，不能只有空白`},Ca={field:"開新田",warehouse:"擴建倉庫",mill:"磨坊加速"},rw={field:"多一塊田，多收一份作物",warehouse:"倉庫多放 12 格，比較不會塞住",mill:"磨一袋麵粉快 1 秒"},_u=(i,t)=>`./portraits/${i}-${t}.webp`,Ra={farm:["今年的麥子長得真好。","再一輪就能收了。","太陽好，田也好。"],haul:["這袋有點重……","倉庫，我來了！","多跑幾趟，大家就有麵粉。"],mill:["風車轉起來囉。","磨得細一點，賣得好一點。","麥香好濃。"],sell:["新鮮麵粉，歡迎來看看！","今天客人真多。","這袋算你便宜一點。"],idle:["休息一下，等等再忙。","有什麼要我做的嗎？","曬曬太陽也不錯。"],bake:["麵包快出爐了，好香！","揉麵團是體力活。","烤得金黃才好賣。"],preserve:["蘋果醬要慢慢熬。","小心燙，糖還在冒泡。","這罐顏色真漂亮。"],jam:["倉庫塞滿了，快叫人去磨粉！","放不進去啦……"],wait:["還在等貨。","手上沒東西可以做。"]},ow={carrot:["🥕胡蘿蔔、🥬甘藍收成後不用磨，直接就能賣，磨坊忙不過來時很好用。點田上的名牌，選下一輪要種什麼。","fields"],bakery:["2 袋麵粉烤成 1 個麵包，一個賣 🪙20（麵粉一袋才 🪙8）。點工人卡，派一個人去 🍞烘焙。","bakery"],orchard:["蘋果樹在農莊左上角：點它頭上的紅色名牌種下去。長大後會一直結果，蘋果可以直接賣。","tree"],preservery:["3 顆蘋果熬成 1 罐果醬，一罐賣 🪙42！點工人卡，派一個人去 🍯製醬。","preservery"]},xu="farmproto.tip.villager",So="farmproto.result",Ic="farmproto.unlockSeen",yu="farmproto.album",Dc=(i,t)=>`./portraits/v-${i}-${t}.webp`,Uc=i=>Math.floor(i/10),Pa=i=>"♥".repeat(i)+"♡".repeat(5-i),Vd="farmproto.best",La={sold:["🛒","賣出"],milled:["⚙️","磨粉"],ordersCompleted:["📜","交訂單"]},Ia=i=>i>=2?Math.min(8,2*(i-1)):0,aw=()=>Math.round(gn.earned*.85);function cw(){try{const i=JSON.parse(Se.get(Vd)??"null");return i&&Number.isFinite(i.earned)?{earned:i.earned,stars:dl(i.earned)}:null}catch{return null}}const Gd=i=>i.job==="haul"&&i.cargo>0&&i.location==="warehouse"&&i.destination==="warehouse";function dr(i){return qi(i)>=ei(i)||i.workers.some(Gd)}function Hd(i,t){const e=i.processors[t];if(e.batch)return null;switch(e.waiting){case"Locked":return`第 ${ti[t].day} 天開放`;case"No worker":return"沒人做";case"Missing ingredients":return`缺${mi[ti[t].input]}`;case"Warehouse full":return"倉庫滿了";default:return null}}function Wd(i,t){switch(t.job){case"haul":return Gd(t)?{text:"倉庫滿了",warn:!0}:!t.cargo&&t.location==="field"&&t.destination==="field"&&!i.fields.some(e=>e.harvested>0)&&!i.trees.some(e=>e.harvested>0)?{text:"等收成",warn:!1}:{text:"",warn:!1};case"farm":return t.location==="orchard"?{text:"採蘋果",warn:!1}:{text:"",warn:!1};case"mill":return i.inventory.wheat<ne.wheatPerFlour?{text:"等麥子",warn:!1}:{text:"",warn:!1};case"sell":return Re.some(e=>e!=="wheat"&&i.inventory[e]>0)?{text:"",warn:!1}:{text:"沒貨賣",warn:!1};case"bake":case"preserve":{const e=t.job==="bake"?"bakery":"preservery",n=Hd(i,e);return{text:n??"",warn:n==="倉庫滿了"}}case"idle":return{text:"💤",warn:!1};default:return{text:"",warn:!1}}}const xt=(i,t="",e="")=>{const n=document.createElement(i);return t&&(n.className=t),e&&(n.textContent=e),n},we=(i,t)=>{i.textContent!==t&&(i.textContent=t)},Da=(i,t)=>{const e=`scaleX(${Number(t.toFixed(3))})`;i.style.transform!==e&&(i.style.transform=e)};class lw{constructor(t,e,n,s=!1,r={music:!0,sfx:!0}){G(this,"root");G(this,"day",xt("span"));G(this,"weatherEl",xt("small","weather"));G(this,"weatherPrev",null);G(this,"dayBar",xt("i"));G(this,"coins",xt("b"));G(this,"house",xt("span","house"));G(this,"stock",xt("span","stock"));G(this,"res",xt("div","pill res"));G(this,"workerCards",[]);G(this,"workerNames",[]);G(this,"workerLabels",[]);G(this,"upgradeBtns",{});G(this,"speedBtns",[]);G(this,"lastRun",1);G(this,"upBtn",xt("button","gold upbtn"));G(this,"upPop",xt("div","pill uppop hidden"));G(this,"menuPop",xt("div","pill menupop hidden"));G(this,"tasks",xt("div","pill tasks"));G(this,"tasksTitle",xt("span"));G(this,"crewEl",xt("div","crew"));G(this,"hintEl",xt("button","nexthint hidden"));G(this,"hintNow",null);G(this,"hintCand","");G(this,"hintSince",0);G(this,"hintSeen",0);G(this,"hintLast",null);G(this,"jamSeen",-1e9);G(this,"quiet",!1);G(this,"picker",xt("div","picker hidden"));G(this,"toastEl",xt("div","toast"));G(this,"tagLayer",xt("div","tags"));G(this,"goal",xt("small","goal"));G(this,"goalBar",xt("i"));G(this,"orders",xt("div","orders"));G(this,"streakEl",xt("div","it streak hidden"));G(this,"daily",xt("div","daily"));G(this,"dailyRows",[]);G(this,"streakText",xt("span"));G(this,"dailyPrev",null);G(this,"dailyDay",0);G(this,"streakPrev",-1);G(this,"earnedPrev",-1);G(this,"best",cw());G(this,"modal",xt("div","modal hidden"));G(this,"renameBox",xt("div","modal hidden rename"));G(this,"renameTitle",xt("h2"));G(this,"renameInput",xt("input"));G(this,"renameFor",-1);G(this,"names",ir);G(this,"focusBox",xt("div","focus hidden"));G(this,"focusImg",xt("img"));G(this,"focusName",xt("b"));G(this,"focusJob",xt("span"));G(this,"focusLine",xt("p"));G(this,"focusFor",-1);G(this,"toastTimer",0);G(this,"resultShown",Se.get(So)==="shown");G(this,"pickFor",-1);G(this,"pickCard",null);G(this,"sizeGen",0);G(this,"lastCoins",-1);G(this,"speedNow",1);G(this,"taskCounts",{orders:0,jobs:0,daily:0});G(this,"orderSig","?");G(this,"vBox",xt("div","modal hidden vcard"));G(this,"vImg",xt("img"));G(this,"vName",xt("h2"));G(this,"vHearts",xt("div","hearts"));G(this,"vLine",xt("p","line"));G(this,"vJob",xt("div","vjob"));G(this,"vGifts",xt("div","gifts"));G(this,"vGiftHint",xt("p","hint"));G(this,"vAlbum",xt("p","hint album"));G(this,"vFor",null);G(this,"vSig","");G(this,"vPrev",null);G(this,"album",(()=>{try{return JSON.parse(Se.get(yu)??"{}")??{}}catch{return{}}})());G(this,"unlockSeen",Number(Se.get(Ic)??0));G(this,"cropBox",xt("div","pill croppick hidden"));G(this,"cropTitle",xt("div","ttl"));G(this,"cropBtns",new Map);G(this,"cropFor",-1);this.cb=e,this.root=t,t.append(this.tagLayer);const o=xt("div","pill day"),a=xt("div","daybar");a.append(this.dayBar);const c=xt("div","daybar goalbar");c.append(this.goalBar),o.append(this.day,this.weatherEl,a,this.goal,c);const l=xt("button","tasks-head");l.append(this.tasksTitle,xt("i","caret","▾")),l.onclick=()=>this.tasks.classList.toggle("open"),this.tasks.append(l,this.orders,this.daily),matchMedia("(min-width: 641px) and (min-height: 560px)").matches&&this.tasks.classList.add("open");const h=xt("div","col");h.append(o,this.tasks),this.buildDaily();const u=xt("span","coin");u.append("🪙 ",this.coins),this.res.append(u,this.house,this.stock),this.res.addEventListener("click",()=>this.res.classList.toggle("open"));const d=xt("div","pill ctl"),f=xt("button","chip pause-btn");f.dataset.speed="0",f.title="暫停／繼續",f.onclick=()=>this.setSpeed(this.speed===0?this.lastRun:0);const g=xt("button","chip speed-btn");g.title="快轉",g.onclick=()=>this.setSpeed(this.speed===0?this.lastRun:this.speed>=4?1:this.speed*2),this.speedBtns.push(f,g);const v=xt("button","chip menu-btn","☰");v.title="選單",v.onclick=()=>this.menuPop.classList.toggle("hidden"),this.buildMenu(n,s,r),d.append(f,g,v,this.menuPop),document.addEventListener("pointerdown",E=>{!this.menuPop.contains(E.target)&&E.target!==v&&this.menuPop.classList.add("hidden"),!this.upPop.contains(E.target)&&!this.upBtn.contains(E.target)&&this.upPop.classList.add("hidden")});const m=xt("div","rcol");m.append(d,this.res);const p=xt("div","top");p.append(h,m);const M=xt("div","bottom"),x=this.crewEl;ir.forEach((E,P)=>{const w=xt("button","card"),y=xt("b","",E),C=xt("span"),N=xt("img","face");N.src=_u(P,"head"),N.alt="",N.draggable=!1;const U=xt("div","txt");U.append(y,C),w.append(N,U),w.onclick=()=>this.openPicker(P,w),this.workerCards.push(w),this.workerNames.push(y),this.workerLabels.push(C),x.append(w)}),this.upBtn.append(xt("i","","🔨"),xt("small","","升級")),this.upBtn.title="升級農莊",this.upBtn.onclick=()=>this.upPop.classList.toggle("hidden");const _=xt("div","ups");for(const E of["field","warehouse","mill"]){const P=xt("div","uprow"),w=xt("button","gold");w.onclick=()=>{e.onAction({type:"upgrade",target:E})&&(this.toast(`${Ca[E]}完成！`),this.upPop.classList.add("hidden"))},this.upgradeBtns[E]=w,P.append(w,xt("small","",rw[E])),_.append(P)}this.upPop.append(xt("div","ttl","🔨 升級農莊"),_),M.append(x,this.upBtn),this.hintEl.onclick=()=>this.pointHint();for(const E of nw){const P=xt("button","chip",`${Aa[E]} ${Ta[E]}`);P.dataset.job=E,(E==="bake"||E==="preserve")&&(P.hidden=!0),P.onclick=()=>{this.pickFor>=0&&e.onAction({type:"assign",workerId:this.pickFor,job:E}),this.closePicker()},this.picker.append(P)}const L=xt("button","chip follow-btn","🎥 近看");L.onclick=()=>{const E=this.pickFor;this.closePicker(),E>=0&&e.onFollow(E)};const T=xt("button","chip rename-btn","✏️ 改名");T.onclick=()=>{const E=this.pickFor;this.closePicker(),E>=0&&this.openRename(E)},this.picker.append(L,T),this.buildRename(),this.buildFocus(),document.addEventListener("pointerdown",E=>{!this.picker.contains(E.target)&&!this.workerCards.includes(E.target)&&!this.workerCards.some(P=>P.contains(E.target))&&this.closePicker()}),this.buildCropPicker(),this.buildVillagerCard(),this.orders.addEventListener("click",E=>{const P=E.target.closest("[data-villager]");P&&this.openVillager(P.dataset.villager)}),t.append(p,M,this.hintEl,this.focusBox,this.upPop,this.picker,this.cropBox,this.toastEl,this.modal,this.renameBox,this.vBox),this.refreshSpeed(),window.addEventListener("resize",()=>{this.sizeGen++,this.pickFor>=0&&this.placePicker()})}get speed(){return this.speedNow}set speed(t){this.speedNow=t,this.refreshSpeed()}refreshSpeed(){this.speed>0&&(this.lastRun=this.speed);const[t,e]=this.speedBtns;we(t,this.speed===0?"▶":"⏸"),t.classList.toggle("on",this.speed===0),we(e,`${this.lastRun}×`),e.dataset.speed=String(this.lastRun),e.classList.toggle("on",this.speed>1)}setSpeed(t){t!==this.speed&&(this.speed=t,this.cb.onSpeed(t))}buildMenu(t,e,n){const s=xt("button","chip tour-btn","📖 新手導覽");s.onclick=()=>{var l,h;this.menuPop.classList.add("hidden"),(h=(l=this.cb).onTour)==null||h.call(l)};const r=xt("button","chip",t==="high"?"🖥️ 高畫質":"🔋 省電");r.title="切換畫質（會重新載入）",r.onclick=()=>this.cb.onQuality(t==="high"?"low":"high");const o=xt("button",`chip outline-btn${e?" on":""}`,"✒️ 描邊");o.title="建築和樹外緣加一圈細線",o.onclick=()=>{e=!e,o.classList.toggle("on",e),this.cb.onOutline(e)};const a=[];for(const[l,h]of[["music","🎵 音樂"],["sfx","🔔 音效"]]){const u=xt("button",`chip ${l}-btn${n[l]?" on":""}`,h);u.onclick=()=>{n[l]=!n[l],u.classList.toggle("on",n[l]),this.cb.onSound(l,n[l])},a.push(u)}const c=xt("button","chip restart-btn","🔄 重來");c.onclick=()=>{confirm("清掉存檔、從第 1 天重新開始？")&&this.cb.onRestart()},this.menuPop.append(s,r,o,...a,c)}rectOf(t){const n={crew:this.crewEl,upgrade:this.upBtn,tasks:this.tasks,speed:this.speedBtns[0].parentElement,hint:this.hintEl}[t].getBoundingClientRect();return n.width?n:null}renderHint(t){if(this.quiet||this.focusFor>=0){this.hintCand="",this.hintNow&&(this.hintNow=null,this.hintEl.classList.add("hidden"));return}if(t.paused)return;const e=performance.now();dr(t)&&(this.jamSeen=e);const n=ew(t,e-this.jamSeen<3e3),s=o=>(o==null?void 0:o.key.split("-")[0])??"";let r=s(n);if(n?(this.hintSeen=e,this.hintLast=n):this.hintCand&&e-this.hintSeen<2500&&(r=this.hintCand),r!==this.hintCand&&(this.hintCand=r,this.hintSince=e),r===s(this.hintNow)){r&&n&&n.key!==this.hintNow.key&&(this.hintNow=n,we(this.hintEl,n.text));return}e-this.hintSince<1500||(this.hintNow=r?this.hintLast:null,this.hintEl.classList.toggle("hidden",!this.hintNow),this.hintNow&&(we(this.hintEl,this.hintNow.text),this.hintEl.classList.remove("pop"),this.hintEl.offsetWidth,this.hintEl.classList.add("pop")))}pointHint(){var e;const t=(e=this.hintNow)==null?void 0:e.target;t==="upgrade"?this.upPop.classList.remove("hidden"):t==="crew"?(this.crewEl.classList.remove("nudge"),this.crewEl.offsetWidth,this.crewEl.classList.add("nudge")):t==="tree"&&this.toast("蘋果樹在農莊左上角，點它頭上的紅色名牌")}openPicker(t,e){if(this.pickFor===t)return this.closePicker();this.pickFor=t,this.pickCard=e,this.picker.classList.remove("hidden"),this.placePicker()}placePicker(){const t=this.pickCard.getBoundingClientRect();this.picker.style.left="0px";const e=this.picker.offsetWidth;this.picker.style.left=`${Math.max(8,Math.min(window.innerWidth-e-8,t.left+t.width/2-e/2))}px`,this.picker.style.bottom=`${window.innerHeight-t.top+8}px`}closePicker(){this.pickFor=-1,this.pickCard=null,this.picker.classList.add("hidden")}buildFocus(){this.focusImg.alt="",this.focusImg.draggable=!1;const t=xt("div","info"),e=xt("button","chip","🔙 全景");e.onclick=()=>this.cb.onUnfollow();const n=xt("div","head");n.append(this.focusName,e),t.append(n,this.focusJob,this.focusLine),this.focusBox.append(this.focusImg,t)}setFocus(t){this.focusFor=t,this.focusBox.classList.toggle("hidden",t<0),t>=0&&(this.focusImg.src=_u(t,"half"))}renderFocus(t){const e=t.workers[this.focusFor];if(!e)return;const n=Wd(t,e);we(this.focusName,e.name),we(this.focusJob,`${Aa[e.job]} ${Ta[e.job]}${e.cargo?` · 扛 ${on[e.cargoItem]}${e.cargo}`:""}${n.text&&n.text!=="💤"?` · ${n.text}`:""}`);const s=n.warn?Ra.jam:n.text&&e.job!=="idle"?Ra.wait:Ra[e.job];we(this.focusLine,`「${s[(Math.floor(t.time/8)+e.id)%s.length]}」`),this.focusBox.classList.toggle("warn",n.warn)}buildRename(){const t=xt("div","sheet"),e=xt("p","hint",`最多 ${bo} 個字，會自動存檔`);this.renameInput.type="text",this.renameInput.maxLength=bo*2,this.renameInput.autocomplete="off",this.renameInput.enterKeyHint="done";const n=xt("button","chip","用原本的名字"),s=xt("button","chip","取消"),r=xt("button","gold","確定"),o=xt("div","row");o.append(n,s,r),t.append(this.renameTitle,this.renameInput,e,o),this.renameBox.append(t),n.onclick=()=>{this.renameFor>=0&&(this.renameInput.value=ir[this.renameFor]??""),this.renameInput.focus()},s.onclick=()=>this.closeRename(),r.onclick=()=>this.submitRename(),this.renameInput.addEventListener("keydown",a=>{a.key==="Enter"&&!a.isComposing?(a.preventDefault(),this.submitRename()):a.key==="Escape"&&this.closeRename()}),this.renameBox.addEventListener("pointerdown",a=>{a.target===this.renameBox&&this.closeRename()})}openRename(t){this.renameFor=t,this.renameTitle.textContent=`幫 ${this.names[t]??""} 取新名字`,this.renameInput.value=this.names[t]??"",this.renameBox.classList.remove("hidden"),this.renameInput.focus(),this.renameInput.select()}submitRename(){const t=this.renameFor;if(t<0)return;const e=this.renameInput.value.trim();if(e===this.names[t])return this.closeRename();this.cb.onAction({type:"renameWorker",workerId:t,name:e})&&(this.closeRename(),this.toast(`改好了：${e}`))}closeRename(){this.renameFor=-1,this.renameBox.classList.add("hidden"),this.renameInput.blur()}toast(t,e=2200,n=!1){this.toastEl.textContent=t,this.toastEl.classList.toggle("warn",n),this.toastEl.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove("show"),e)}reason(t){return t&&sw[t]||t||"做不到"}tag(t){const e=xt("div",`tag ${t}`);this.tagLayer.append(e);let n="",s=!0,r=this.sizeGen;const o={w:0,h:0};return{el:e,set:a=>{a!==n&&(n=a,e.textContent=a,s=!0)},size:()=>((s||!o.w||r!==this.sizeGen)&&(o.w=e.offsetWidth,o.h=e.offsetHeight,s=!1,r=this.sizeGen),o)}}renderTaskTitle(){const t=this.taskCounts;we(this.tasksTitle,`📜 訂單 ${t.orders}${t.jobs?`・委託 ${t.jobs}`:""}`)}renderOrders(t){const e=t.villagers.filter(r=>r.commission),n=[...t.orders.map(r=>`${r.id}:${r.items.map(o=>o.delivered).join(",")}:${r.expiresAt-t.time}`),...e.map(r=>`commission:${r.id}:${r.commission.id}:${r.commission.items.map(o=>o.delivered).join(",")}:${r.commission.expiresAt-t.time}`)].join("|");if(n===this.orderSig)return;this.orderSig=n,this.taskCounts.orders=t.orders.length,this.taskCounts.jobs=e.length,this.renderTaskTitle();const s=e.map(r=>{const o=r.commission,a=o.expiresAt-t.time;return`<div class="ord commission${a<=20?" hurry":""}" data-villager="${r.id}"><span><img class="vface" src="${Dc(r.id,"head")}" alt="">${o.items.map(c=>`<i class="${c.delivered>=c.required?"ok":""}">${on[c.item]}${c.delivered}/${c.required}</i>`).join(" ")}</span><b>🪙${o.reward}</b><em>⏳${a}s</em></div>`}).join("");if(!t.orders.length){this.orders.innerHTML='<div class="ord none">📜 等客人下訂單…</div>'+s;return}this.orders.innerHTML=t.orders.map((r,o)=>{const a=r.expiresAt-t.time;return`<div class="ord${o===0?" active":""}${a<=20?" hurry":""}"><span>📜 ${r.items.map(c=>`<i class="${c.delivered>=c.required?"ok":""}" title="${mi[c.item]}">${on[c.item]}${c.delivered}/${c.required}</i>`).join(" ")}</span><b>🪙${r.reward}</b><em>⏳${a}s</em></div>`}).join("")+s}buildDaily(){const t=xt("div","ttl");t.append(xt("span","","今日目標"),xt("small","","每項 🪙+8")),this.daily.append(t);for(const e of Object.keys(La)){const[n,s]=La[e],r=xt("div","it");r.dataset.key=e;const o=xt("span"),a=xt("div","daybar"),c=xt("i");a.append(c),r.append(xt("b","",n),xt("em","",s),o,a),this.daily.append(r),this.dailyRows.push({row:r,text:o,bar:c})}this.streakEl.append(xt("b","","🔥"),this.streakText),this.daily.append(this.streakEl)}renderDaily(t){const e=new Set;t.daily.forEach((n,s)=>{const r=this.dailyRows[s];if(!r)return;const o=La[n.key][1];n.claimed&&e.add(n.key),we(r.text,n.claimed?"✅":`${Math.min(n.progress,n.target)}/${n.target}`),Da(r.bar,n.claimed?1:Math.min(1,n.progress/n.target)),r.row.classList.contains("done")!==n.claimed&&r.row.classList.toggle("done",n.claimed),n.claimed&&this.dailyPrev&&this.dailyDay===t.day&&!this.dailyPrev.has(n.key)&&(this.toast(`今日目標「${o}」完成 🪙+${n.reward}`),r.row.classList.remove("pop"),r.row.offsetWidth,r.row.classList.add("pop"))}),this.dailyPrev=e,this.dailyDay=t.day,this.taskCounts.daily=e.size,this.renderTaskTitle()}renderStreak(t){t!==this.streakPrev&&(this.streakPrev>=0&&t>=2&&t>this.streakPrev&&this.toast(`🔥 連擊 ×${t}！多拿 🪙${Ia(t)}`),this.streakPrev=t,this.streakEl.classList.toggle("hidden",t<1),we(this.streakText,`×${t}`),this.streakEl.title=`連續準時交訂單 ${t} 張，下一張多拿 🪙${Ia(t+1)}`,this.streakEl.dataset.next=`下一單 +${Ia(t+1)}`)}showResult(t,e,n){this.resultShown=!0,Se.set(So,"shown");const s=this.best;this.best=hy(s,t);const r=!s||t.earned>s.earned;Se.set(Vd,JSON.stringify(this.best));const o=t.stars===3?"🎉 三星農莊！":t.stars===2?"👍 二星！差一點就三星":"🌱 一星，下一局會更好",a=[1,2,3].map(l=>`<span class="${l<=t.stars?"on":""}">★</span>`).join(""),c=this.best;this.modal.innerHTML=`<div class="sheet result"><div class="stars">${a}</div><h2>${o}</h2><p>五天收入 🪙${t.earned}（三星 🪙${gn.earned}、二星 🪙${aw()}）</p><ul><li>每日目標＋連擊獎勵 🪙${e.bonusEarned}</li><li>最長連擊 ×${e.bestStreak}</li><li>賣出 🥖${n.stats.sold} 袋　磨粉 ${n.stats.milled}</li><li>升級 田+${n.upgrades.field}／倉+${n.upgrades.warehouse}／磨+${n.upgrades.mill}</li></ul><p class="best">${r?"🏆 新紀錄！":`🏆 最高紀錄 🪙${c.earned} ${"★".repeat(c.stars)}`}</p>`+(t.stars<3?'<p class="hint">提示：倉庫快滿就多派人磨粉；連續準時交訂單有加成。</p>':"")+'<div class="row"><button class="chip" data-k="go">繼續經營</button><button class="gold" data-k="new">再玩一局</button></div></div>',this.modal.classList.remove("hidden"),this.modal.querySelector('[data-k="go"]').onclick=()=>this.modal.classList.add("hidden"),this.modal.querySelector('[data-k="new"]').onclick=()=>this.cb.onRestart()}renderWeather(t,e){const n=cu[e],s=t.forecast;we(this.weatherEl,`${n.icon} ${n.name}${s?`　明天 ${cu[s].icon}`:""}`),this.weatherPrev&&this.weatherPrev!==e&&this.toast(`${n.icon} ${n.tip}`),this.weatherPrev=e}update(t,e="sunny"){var g;this.renderWeather(t,e),this.renderOrders(t);const n=uy(t);this.renderDaily(n),this.renderStreak(n.streak);const s=t.stats.earned,r=gn.earned,o=n.result;we(this.goal,o?`${"★".repeat(o.stars)}${"☆".repeat(3-o.stars)} 五天成績 🪙${o.earned}`:n.resultUnknown?`🎯 舊存檔繼續經營 🪙${s}`:s>=r?`✅ 三星門檻 🪙${s}/${r}`:`🎯 ${gn.days} 天內賺 🪙${s}/${r}`),Da(this.goalBar,Math.min(1,s/r)),this.earnedPrev>=0&&this.earnedPrev<r&&s>=r&&!o&&this.toast("🎉 達到三星門檻！撐到第 5 天結束就是 3 星"),this.earnedPrev=s,o&&!this.resultShown&&this.showResult(o,n,t);const a=t.time%ne.daySeconds+t.remainder;we(this.day,`第 ${t.day} 天・${iw[t.phase]}`),Da(this.dayBar,a/ne.daySeconds),t.coins!==this.lastCoins&&(this.lastCoins>=0&&t.coins>this.lastCoins&&(this.coins.classList.remove("bump"),this.coins.offsetWidth,this.coins.classList.add("bump")),this.lastCoins=t.coins,this.coins.textContent=String(t.coins));const c=ei(t),l=qi(t),h=Re.filter(v=>v==="wheat"||v==="flour"||t.inventory[v]>0).map(v=>`${on[v]}${t.inventory[v]}`);we(this.stock,h.join(" ")),we(this.house,`🏠 ${l}/${c}`);const u=dr(t);this.house.classList.contains("full")!==u&&this.house.classList.toggle("full",u),this.renderUnlocks(t),this.names=t.workers.map(v=>v.name),t.workers.forEach((v,m)=>{const p=this.workerCards[m];p&&(we(this.workerNames[m],v.name),we(this.workerLabels[m],`${Aa[v.job]} ${Ta[v.job]}`),p.dataset.job!==v.job&&(p.dataset.job=v.job))}),this.focusFor>=0&&this.renderFocus(t);for(const v of["field","warehouse","mill"]){const m=this.upgradeBtns[v],p=No(t,v),M=yi(t,v),x=M.reason==="No land"||M.reason==="Max level";we(m,x?`${Ca[v]} 已滿`:`${Ca[v]} 🪙${p}`),m.disabled!==!M.ok&&(m.disabled=!M.ok)}const d=["field","warehouse","mill"].some(v=>yi(t,v).ok);this.upBtn.classList.contains("ready")!==d&&this.upBtn.classList.toggle("ready",d),this.renderHint(t);const f=Ye(t).jobs;for(const v of this.picker.querySelectorAll("button")){v.classList.toggle("on",this.pickFor>=0&&((g=t.workers[this.pickFor])==null?void 0:g.job)===v.dataset.job);const m=v.dataset.job;m&&v.hidden===f.includes(m)&&(v.hidden=!f.includes(m))}this.cropFor>=0&&this.refreshCropPicker(t),this.renderVillagers(t)}buildVillagerCard(){const t=xt("div","sheet");this.vImg.alt="",this.vImg.draggable=!1;const e=xt("div","vhead"),n=xt("div","info");n.append(this.vName,this.vHearts,this.vLine),e.append(this.vImg,n);const s=xt("button","chip","關閉");s.onclick=()=>this.closeVillager();const r=xt("div","row");r.append(s),t.append(e,this.vJob,xt("div","ttl","🎁 送禮（每天一次）"),this.vGifts,this.vGiftHint,this.vAlbum,r),this.vBox.append(t),this.vBox.addEventListener("pointerdown",o=>{o.target===this.vBox&&this.closeVillager()})}openVillager(t){this.vFor=t,this.vSig="",this.vImg.src=Dc(t,"half"),this.vBox.classList.remove("hidden")}get villagerOpen(){return this.vFor}closeVillager(){this.vFor=null,this.vBox.classList.add("hidden")}renderVillagers(t){var s,r,o,a,c,l;const e=this.vPrev,n=new Map;for(const h of t.villagers){const u=Uc(h.points);n.set(h.id,{appeared:h.appeared,hearts:u,completed:h.completed}),(this.album[h.id]??0)<u&&(this.album[h.id]=u,Se.set(yu,JSON.stringify(this.album)));const d=e==null?void 0:e.get(h.id);if(!d)continue;const f=fn[h.id].name;h.appeared&&!d.appeared?(!Se.get(xu)&&((r=(s=this.cb).explain)!=null&&r.call(s,`${f}來村裡了！`,`${f}是${Ea[h.id]}。點頭上的粉紅名牌可以聊天、送禮，好感高了會回送東西；名牌有 📜 是在下委託，賣貨的人交齊就有報酬。`,`villager:${h.id}`))?Se.set(xu,"1"):this.toast(`${f}（${Ea[h.id]}）來村裡了！點名牌可以聊天、送禮`,4e3),(a=(o=this.cb).onVillagerEvent)==null||a.call(o,"greet")):u>d.hearts?(this.toast(`${f} ${Pa(u)}${u===3?"　以後每天早上會送你東西":u===5?"　解鎖專屬故事！":""}`,3500),(l=(c=this.cb).onVillagerEvent)==null||l.call(c,"heart")):h.completed>d.completed&&this.toast(`完成${f}的委託！好感 +4`)}this.vPrev=n,this.vFor&&this.renderVillagerCard(t)}renderVillagerCard(t){const e=t.villagers.find(u=>u.id===this.vFor);if(!e)return this.closeVillager();const n=Math.floor(t.time/ne.daySeconds)+1,s=e.giftedDay===n,r=Re.filter(u=>t.inventory[u]>0),o=`${e.points}|${s}|${r.map(u=>`${u}${t.inventory[u]}`).join(",")}|${e.commission?`${e.commission.items[0].delivered}:${e.commission.expiresAt-t.time}`:"-"}|${Math.floor(t.time/8)}`;if(o===this.vSig)return;this.vSig=o;const a=fn[e.id],c=Uc(e.points);we(this.vName,`${a.name}　${Ea[e.id]}`),we(this.vHearts,`${Pa(c)}　${e.points}/50`);const l=tw[e.id][c];we(this.vLine,c>=5?l.join(`
`):`「${l[Math.floor(t.time/8)%l.length]}」`),this.vLine.classList.toggle("story",c>=5);const h=e.commission;we(this.vJob,e.appeared?h?`📜 委託：${h.items.map(u=>`${on[u.item]}${mi[u.item]} ${u.delivered}/${u.required}`).join("、")}　🪙${h.reward}　⏳${h.expiresAt-t.time}s（賣貨的人會送過去）`:"📜 現在沒有委託":"還沒來村裡"),this.vGifts.textContent="";for(const u of r){const d=Rd(e.id,u),f=xt("button","chip",`${on[u]}${t.inventory[u]}${d===3?" ❤️":d===2?" 👍":""}`);f.title=`${mi[u]}（好感 +${d}）`,f.dataset.item=u,f.disabled=s||!e.appeared,f.onclick=()=>{this.cb.onAction({type:"gift",villagerId:e.id,item:u})&&(this.toast(`送給${a.name} ${on[u]}${mi[u]}，好感 +${d}${d===3?"　他最喜歡這個！":""}`),this.vSig="")},this.vGifts.append(f)}we(this.vGiftHint,e.appeared?s?"今天已經送過了，明天再來。":r.length?`❤️ 最愛 ${on[a.favorite]}　👍 喜歡 ${a.likes.map(u=>on[u]).join("")}`:"倉庫沒有貨可以送。":""),we(this.vAlbum,`📔 回憶相簿：最高 ${Pa(this.album[e.id]??0)}`)}renderUnlocks(t){var r,o,a,c;if(t.day<=this.unlockSeen)return;this.unlockSeen=t.day,Se.set(Ic,String(t.day));const e=Ye(t).newToday;if(!e.length)return;const n=e.map(l=>_y[l]??l).join("、"),s=ow[e[0]];(!s||!((o=(r=this.cb).explain)!=null&&o.call(r,`第 ${t.day} 天解鎖：${n}`,s[0],s[1])))&&this.toast(`第 ${t.day} 天解鎖：${n}！${xy[e[0]]??""}`,5e3),(c=(a=this.cb).onUnlock)==null||c.call(a,e)}buildCropPicker(){this.cropBox.append(this.cropTitle);for(const t of vy){const e=xt("button","chip");e.dataset.crop=t,e.onclick=()=>this.pickCrop(t),this.cropBtns.set(t,e),this.cropBox.append(e)}document.addEventListener("pointerdown",t=>{var e,n;this.cropFor>=0&&!this.cropBox.contains(t.target)&&!((n=(e=t.target).closest)!=null&&n.call(e,".tag.field"))&&this.closeCropPicker()},{capture:!0})}openCropPicker(t,e,n,s){this.cropFor=t,this.cropBox.classList.remove("hidden"),this.refreshCropPicker(s);const r=this.cropBox.offsetWidth,o=this.cropBox.offsetHeight;this.cropBox.style.left=`${Math.max(8,Math.min(window.innerWidth-r-8,e-r/2))}px`,this.cropBox.style.top=`${Math.max(8,Math.min(window.innerHeight-o-8,n-o-10))}px`}get cropPickerFor(){return this.cropFor}refreshCropPicker(t){const e=t.fields[this.cropFor];if(!e)return this.closeCropPicker();const n=e.planted||e.harvested>0;we(this.cropTitle,n?"下一輪種什麼？":"種什麼？");const s=Ye(t).crops;for(const[r,o]of this.cropBtns)we(o,`${on[r]} ${mi[r]} ${cn[r].seconds}秒×${cn[r].yield}`),o.hidden===s.includes(r)&&(o.hidden=!s.includes(r)),o.classList.toggle("on",n&&e.nextCrop===r)}pickCrop(t){const e=this.cropFor;this.closeCropPicker(),e>=0&&this.cb.onCrop(e,t)}closeCropPicker(){this.cropFor=-1,this.cropBox.classList.add("hidden")}get element(){return this.root}}const fr=[{id:"welcome",title:"把收成變成收入",body:`你的目標：${gn.days} 天內累積賺到 ${gn.earned} 金幣。種田 → 搬進倉庫 → 磨粉 → 賣出，四位工人會分工。花錢升級不會扣掉累積收入。`,target:"farm",interactive:!1},{id:"fields",title:"先看麥田",body:"三塊田的小麥正在長。種田工人會收成補種，搬運工人把收成送進倉庫。之後有空田時，點田上名牌就能自己選作物。",target:"fields",interactive:!1},{id:"workers",title:"你負責安排工作",body:"四位工人已分好工：種田、搬運、磨粉、賣貨。先別動，看看生產線怎麼跑。哪一環卡住，再點下方工人卡換工作。",target:"workers",interactive:!1},{id:"mill",title:"看第一袋麵粉完成",body:"倉庫的小麥會送進磨坊，2 份小麥磨成 1 袋麵粉。讓時間繼續，等工人完成一袋；沒有動靜時，檢查搬運和磨粉是否有人。",target:"mill",interactive:!0},{id:"sell",title:"把麵粉賣出去",body:"賣貨工人會自動把貨送到商店，交訂單或直接出售，不用自己點。等一筆貨款入帳；倉庫滿時，先確保有人賣貨。",target:"shop",interactive:!0},{id:"upgrade",title:"用收入改善農莊",body:"點升級選單：倉庫常滿就擴建倉庫，磨粉太慢就升級磨坊。選一項買得起的升級；錢不夠先繼續賣貨，也可以略過導覽。",target:"upgrades",interactive:!0},{id:"done",title:"開始經營你的小農莊",body:"留意哪個環節停住，再調整工人或升級。先維持種田、搬運、磨粉、賣貨，之後每天會開放新作物和工坊。",target:"farm",interactive:!1}],pl=i=>({milled:i.stats.milled,sold:i.stats.sold,earned:i.stats.earned,upgrades:i.upgrades.field+i.upgrades.warehouse+i.upgrades.mill});function hw(i){return{index:0,completed:!1,baseline:pl(i)}}function Nc(i){return fr[i.index]??fr[0]}function Xd(i,t){if(i.completed)return!1;switch(Nc(i).id){case"mill":return t.stats.milled>i.baseline.milled;case"sell":return t.stats.sold>i.baseline.sold&&t.stats.earned>i.baseline.earned;case"upgrade":return pl(t).upgrades>i.baseline.upgrades;default:return!0}}function uw(i,t){return Xd(i,t)?i.index===fr.length-1?$d(i):{index:i.index+1,completed:!1,baseline:pl(t)}:i}function $d(i){return{...i,completed:!0,baseline:{...i.baseline}}}const qd="farmproto.tour.v1",dw=[["🌾","種田"],["🧺","搬進倉庫"],["⚙️","磨成麵粉"],["🪙","賣掉賺錢"]],kc={mill:"⏳ 等第一袋麵粉磨好…（遊戲 2× 快轉中）",sell:"⏳ 等第一筆貨款入帳…",upgrade:"👉 點右下角 🔨升級，買一項升級"};function fw(i){const t=["warehouse","mill","field"].filter(n=>yi(i,n).reason!=="No land"&&yi(i,n).reason!=="Max level");if(t.some(n=>yi(i,n).ok))return kc.upgrade;const e=Math.min(...t.map(n=>No(i,n)))-i.coins;return e>0?`💰 還差 🪙${e}：遊戲照跑，賣貨工人賣了貨就夠（也可以跳過導覽）`:kc.upgrade}const ke=(i,t="",e="")=>{const n=document.createElement(i);return t&&(n.className=t),e&&(n.textContent=e),n};class pw{constructor(t,e){G(this,"el",ke("div","coach hidden"));G(this,"ring",ke("div","coach-ring"));G(this,"bubble",ke("div","coach-bubble"));G(this,"face",ke("img","coach-face"));G(this,"title",ke("b"));G(this,"body",ke("p"));G(this,"flow",ke("div","coach-flow"));G(this,"status",ke("div","coach-status"));G(this,"dots",ke("div","coach-dots"));G(this,"skipBtn",ke("button","chip","跳過導覽"));G(this,"nextBtn",ke("button","gold","下一步"));G(this,"tour",null);G(this,"queue",[]);G(this,"saying",null);G(this,"resumeSpeed",1);G(this,"shownIndex",-1);G(this,"ringKey","");G(this,"bubbleKey","");G(this,"bubbleH",230);this.host=t,this.face.src=e,this.face.alt="",this.face.draggable=!1;for(const[o,a]of dw){const c=ke("span","step");c.append(ke("i","",o),ke("small","",a)),this.flow.append(c)}const n=ke("div","coach-head"),s=ke("div","coach-text");s.append(this.title,this.body),n.append(this.face,s);const r=ke("div","coach-row");r.append(this.dots,this.skipBtn,this.nextBtn),this.bubble.append(n,this.flow,this.status,r),this.el.append(this.ring,this.bubble),this.nextBtn.onclick=()=>this.next(),this.skipBtn.onclick=()=>this.finish(!0)}get active(){return!!this.tour||!!this.saying}get stepId(){return this.tour?Nc(this.tour).id:null}start(){this.saying=null,this.tour||(this.resumeSpeed=Math.max(1,this.host.speed())),this.tour=hw(this.host.state()),this.shownIndex=-1,this.el.classList.remove("hidden")}say(t,e,n=null){this.queue.push({title:t,body:e,target:n}),this.active||this.nextSay()}nextSay(){const t=this.queue.shift();t&&(this.saying||(this.resumeSpeed=Math.max(1,this.host.speed())),this.saying=t,this.shownIndex=-1,this.el.classList.remove("hidden"))}next(){if(this.saying)return this.saying=null,this.queue.length?this.nextSay():this.close();if(!this.tour)return;const t=this.tour;this.tour=uw(this.tour,this.host.state()),this.tour.completed?this.finish(!1):this.tour===t&&this.nextBtn.classList.add("nudge")}finish(t){if(this.tour&&(this.tour=$d(this.tour)),this.tour=null,this.host.onDone(t),this.queue.length)return this.nextSay();this.close()}close(){this.el.classList.add("hidden"),this.ringKey=this.bubbleKey="",this.host.setSpeed(this.resumeSpeed)}update(){if(!this.tour&&!this.saying)return;const t=this.host.state();let e,n=!1,s=!0;if(this.saying)e=this.saying.target,this.shownIndex!==0&&(this.shownIndex=0,this.show(this.saying.title,this.saying.body,!1),this.host.setSpeed(0),this.dots.textContent="",this.skipBtn.hidden=!0),this.nextBtn.textContent="知道了";else{const r=Nc(this.tour);e=r.target==="farm"?null:r.target,n=r.interactive,s=Xd(this.tour,t),this.shownIndex!==this.tour.index&&(this.shownIndex=this.tour.index,this.show(r.title,r.body,r.id==="welcome"),this.host.setSpeed(n?2:0),this.dots.textContent=`${this.tour.index+1}/${fr.length}`,this.skipBtn.hidden=!1,this.nextBtn.classList.remove("nudge"));const o=this.tour.index===fr.length-1,a=s?n?"做到了！下一步":o?"開始經營":"下一步":"還沒完成";this.nextBtn.textContent!==a&&(this.nextBtn.textContent=a),this.nextBtn.disabled===s&&(this.nextBtn.disabled=!s);const c=n?s?"✅ 完成了！":r.id==="upgrade"?fw(t):kc[r.id]??"":"";this.status.textContent!==c&&(this.status.textContent=c),this.status.classList.toggle("done",n&&s)}this.el.classList.toggle("dim",!n),this.place(e?this.host.locate(e):null)}show(t,e,n){this.title.textContent=t,this.body.textContent=e,this.flow.hidden=!n,this.status.textContent="",this.status.classList.remove("done"),this.bubble.classList.remove("pop"),this.bubbleH=this.bubble.offsetHeight||this.bubbleH,this.bubble.classList.add("pop")}place(t){const e=window.innerHeight,n=8;let s="none";if(t){const c=Math.round(t.l-n),l=Math.round(t.t-n),h=Math.round(t.r-t.l+n*2),u=Math.round(t.b-t.t+n*2);if(s=`${c},${l},${h},${u},${t.round?1:0}`,s!==this.ringKey){const d=this.ring.style;d.transform=`translate(${c}px, ${l}px)`,d.width=`${h}px`,d.height=`${u}px`,d.borderRadius=t.round?"50%":"16px"}}s!==this.ringKey&&(this.ring.classList.toggle("none",!t),this.el.classList.toggle("nospot",!t),this.ringKey=s);const r=this.host.bottomReserve(),o=this.bubbleH;let a="center";if(t&&(t.b+n+10<=e-r-o?a=`above:${Math.round(r)}`:t.t-n-12-o>=8?a=`above:${Math.round(e-t.t+n+12)}`:a=`below:${Math.round(Math.min(e-o-8,t.b+n+12))}`),a!==this.bubbleKey){this.bubbleKey=a;const c=this.bubble.style,[l,h]=a.split(":");c.top=l==="below"?`${h}px`:l==="center"?"50%":"",c.bottom=l==="above"?`${h}px`:"",this.bubble.classList.toggle("center",l==="center")}}}const wu=["harvest","mill","sack","rooster","hammer"],Mu=["amb-day","amb-evening","amb-rain","bgm-day","bgm-evening"],mw={harvest:.35,mill:.5,sack:.3,coin:.12,click:.05,plant:.15,hammer:.4,rooster:20,oven:.5,jar:.5,pick:.4},gw={harvest:.55,mill:.4,sack:.5,rooster:.32,hammer:.6},us={music:.42,amb:.5,sfx:.9};class vw{constructor(t,e,n="./"){G(this,"ctx",null);G(this,"master");G(this,"musicBus");G(this,"ambBus");G(this,"sfxBus");G(this,"verb");G(this,"buffers",new Map);G(this,"loops",new Map);G(this,"last",new Map);G(this,"scene",{evening:!1,rain:!1,paused:!1});G(this,"played",{});G(this,"loaded",0);this.musicOn=t,this.sfxOn=e,this.base=n;const s=()=>this.unlock();window.addEventListener("pointerdown",s,{capture:!0}),window.addEventListener("keydown",s,{capture:!0}),document.addEventListener("visibilitychange",()=>{this.ctx&&(document.hidden?this.ctx.suspend():this.ctx.resume())})}get music(){return this.musicOn}get sfx(){return this.sfxOn}get running(){var t;return((t=this.ctx)==null?void 0:t.state)==="running"}unlock(){if(this.ctx){this.ctx.state==="suspended"&&!document.hidden&&this.ctx.resume();return}const t=window.AudioContext??window.webkitAudioContext;if(!t)return;const e=new t;this.ctx=e,this.master=e.createGain(),this.master.connect(e.destination),this.musicBus=this.bus(this.musicOn?us.music:0),this.ambBus=this.bus(this.sfxOn?us.amb:0),this.sfxBus=this.bus(this.sfxOn?us.sfx:0);const n=e.createConvolver();n.buffer=this.impulse(1.4),this.verb=e.createGain(),this.verb.gain.value=.22,this.verb.connect(n).connect(this.sfxBus),this.loadAll()}setMusic(t){this.musicOn=t,this.ctx&&this.fade(this.musicBus.gain,t?us.music:0,.3)}setSfx(t){this.sfxOn=t,this.ctx&&(this.fade(this.ambBus.gain,t?us.amb:0,.3),this.fade(this.sfxBus.gain,t?us.sfx:0,.1))}setScene(t){const e=this.scene;e.evening===t.evening&&e.rain===t.rain&&e.paused===t.paused||(this.scene={...t},this.mix(4))}play(t,e={}){const n=this.ctx;if(!n||n.state!=="running"||!this.sfxOn)return;const s=n.currentTime,r=mw[t]??0;if(!(s-(this.last.get(t)??-1e9)<r)){if(this.last.set(t,s),wu.includes(t)){const o=this.buffers.get(t);if(!o)return;const a=n.createBufferSource();a.buffer=o,a.playbackRate.value=(e.pitch??1)*(.94+Math.random()*.12);const c=n.createGain();c.gain.value=gw[t]*(e.gain??1)*(.85+Math.random()*.15),a.connect(c).connect(this.sfxBus),a.start(s)}else this.synth(t,s,e);this.played[t]=(this.played[t]??0)+1}}bus(t){const e=this.ctx.createGain();return e.gain.value=t,e.connect(this.master),e}fade(t,e,n){const s=this.ctx.currentTime;t.cancelScheduledValues(s),t.setValueAtTime(t.value,s),t.setTargetAtTime(e,s,n/3)}async loadAll(){for(const t of[...wu,...Mu])try{const e=await fetch(`${this.base}audio/${t}.mp3`);if(!e.ok)throw new Error(`HTTP ${e.status}`);const n=await this.ctx.decodeAudioData(await e.arrayBuffer());this.buffers.set(t,n),this.loaded++,Mu.includes(t)&&this.startLoop(t,n)}catch(e){console.warn(`音檔 ${t} 載入失敗，略過`,e)}}startLoop(t,e){const n=this.ctx,s=n.createBufferSource();s.buffer=e,s.loop=!0;const r=e.getChannelData(0);let o=0,a=r.length-1;for(;o<8192&&Math.abs(r[o])<1e-4;)o++;for(;a>r.length-8192&&Math.abs(r[a])<1e-4;)a--;s.loopStart=o/e.sampleRate,s.loopEnd=(a+1)/e.sampleRate;const c=n.createGain();c.gain.value=0,s.connect(c).connect(t.startsWith("bgm")?this.musicBus:this.ambBus),s.start(),this.loops.set(t,{src:s,gain:c}),this.mix(t.startsWith("bgm")?2:1.5)}mix(t){if(!this.ctx)return;const{evening:e,rain:n,paused:s}=this.scene,r={"bgm-day":e?0:1,"bgm-evening":e?1:0,"amb-day":e?0:n?.25:1,"amb-evening":e?n?.3:1:0,"amb-rain":n?1:0},o=s?.35:1;for(const[a,c]of this.loops)this.fade(c.gain.gain,r[a]*(a.startsWith("bgm")?o:1),t)}impulse(t){const e=this.ctx,n=Math.floor(e.sampleRate*t),s=e.createBuffer(2,n,e.sampleRate);for(let r=0;r<2;r++){const o=s.getChannelData(r);for(let a=0;a<n;a++)o[a]=(Math.random()*2-1)*Math.pow(1-a/n,3.2)}return s}tone(t,e,n,s,r="sine",o=.5,a=0){const c=this.ctx,l=c.createOscillator();l.type=r,l.frequency.setValueAtTime(e,t),a&&l.frequency.exponentialRampToValueAtTime(a,t+n*.6);const h=c.createGain();if(h.gain.setValueAtTime(1e-4,t),h.gain.exponentialRampToValueAtTime(s,t+.006),h.gain.exponentialRampToValueAtTime(1e-4,t+n),l.connect(h),h.connect(this.sfxBus),o){const u=c.createGain();u.gain.value=o,h.connect(u).connect(this.verb)}l.start(t),l.stop(t+n+.05)}bell(t,e,n,s){this.tone(t,e,n,s),this.tone(t,e*2,n*.55,s*.35),this.tone(t,e*3.01,n*.3,s*.14),this.tone(t,e*4.2,n*.18,s*.07)}knock(t,e,n,s=.05){const r=this.ctx,o=Math.floor(r.sampleRate*s),a=r.createBuffer(1,o,r.sampleRate),c=a.getChannelData(0);for(let d=0;d<o;d++)c[d]=(Math.random()*2-1)*Math.pow(1-d/o,4);const l=r.createBufferSource();l.buffer=a;const h=r.createBiquadFilter();h.type="bandpass",h.frequency.value=e,h.Q.value=4;const u=r.createGain();u.gain.value=n,l.connect(h).connect(u).connect(this.sfxBus),l.start(t)}synth(t,e,n){const s=n.gain??1,r=o=>523.25*Math.pow(2,o/12);switch(t){case"coin":this.tone(e,r(16),.09,.16*s,"triangle",.2),this.bell(e+.055,r(23),.45,.13*s);break;case"order":[0,4,7,12].forEach((o,a)=>this.bell(e+a*.07,r(o+7),.7,.12*s));break;case"streak":{const o=Math.min(n.n??1,6);this.tone(e,r(12+o),.12,.1*s,"triangle",.3),this.tone(e+.08,r(19+o),.25,.1*s,"triangle",.4);break}case"goal":[[0,0],[4,.09],[7,.18],[12,.27],[16,.36]].forEach(([o,a])=>{this.tone(e+a,r(o),.35,.14*s,"sine",.35),this.knock(e+a,r(o)*2,.06*s,.03)}),this.bell(e+.45,r(24),1,.08*s);break;case"upgrade":this.tone(e,r(0),.35,.09*s,"triangle",.3,r(12)),this.bell(e+.2,r(19),.8,.12*s),this.bell(e+.2,r(24),.8,.07*s);break;case"result":{[[0,4,7],[5,9,12],[7,11,14],[12,16,19]].forEach((c,l)=>c.forEach(h=>this.tone(e+l*.28,r(h-12),.9,.06*s,"triangle",.5)));const a=n.n??3;for(let c=0;c<a;c++)this.bell(e+1.25+c*.32,r(19+c*5),1.1,.13*s);break}case"click":this.knock(e,2400,.25*s,.025);break;case"plant":this.tone(e,260,.14,.18*s,"sine",.1,520),this.knock(e,900,.12*s,.04);break;case"oven":this.knock(e,700,.18*s,.06),this.bell(e+.04,r(16),.9,.14*s);break;case"jar":this.tone(e,2637,.25,.08*s,"sine",.3),this.tone(e+.07,3136,.3,.06*s,"sine",.3),this.knock(e,3200,.1*s,.02);break;case"pick":this.tone(e,420,.1,.16*s,"sine",.1,840),this.tone(e+.11,520,.1,.14*s,"sine",.1,1040);break;case"unlock":[0,2,4,7,9,12].forEach((o,a)=>this.tone(e+a*.06,r(o+12),.25,.08*s,"triangle",.4)),this.bell(e+.4,r(24),1.2,.12*s);break;case"heart":[0,4,7,11,14].forEach((o,a)=>this.tone(e+a*.08,r(o+5),.4,.09*s,"sine",.5)),this.bell(e+.45,r(19),1.1,.12*s),this.bell(e+.62,r(24),1.2,.08*s);break;case"greet":this.tone(e,r(7),.18,.1*s,"sine",.3,r(12)),this.tone(e+.22,r(12),.28,.1*s,"sine",.4,r(9));break;case"commission":[0,5,9].forEach((o,a)=>this.bell(e+a*.09,r(o+5),.8,.11*s));break;case"fail":this.tone(e,r(-8),.14,.1*s,"triangle",.1),this.tone(e+.12,r(-12),.22,.1*s,"triangle",.1);break}}}const _w=i=>({harvested:i.stats.harvested,milled:i.stats.milled,sold:i.stats.sold,earned:i.stats.earned,ordersCompleted:i.daily.ordersCompleted,streak:i.streak,claimed:i.daily.claimed.length,dailyDay:i.daily.day,upgrades:i.upgrades.field+i.upgrades.warehouse+i.upgrades.mill,day:i.day,result:!!i.result,cargo:i.workers.map(t=>t.job==="haul"?t.cargo:0),bread:i.produced.bread,jam:i.produced.jam,apple:i.produced.apple,commissions:i.villagers.reduce((t,e)=>t+e.completed,0)});class xw{constructor(t){G(this,"prev",null);this.engine=t}reset(){this.prev=null}update(t,e){var c;this.engine.setScene({evening:t.phase==="evening",rain:e==="rain",paused:t.paused});const n=_w(t),s=this.prev;if(this.prev=n,!s)return;const r=this.engine;n.apple>s.apple?r.play("pick"):n.harvested>s.harvested&&r.play("harvest"),n.bread>s.bread&&r.play("oven"),n.jam>s.jam&&r.play("jar"),n.cargo.some((l,h)=>l<(s.cargo[h]??0))&&r.play("sack"),n.milled>s.milled&&r.play("mill");const o=n.dailyDay===s.dailyDay;o&&n.ordersCompleted>s.ordersCompleted?(r.play("order"),n.streak>=2&&r.play("streak",{n:n.streak})):n.earned>s.earned&&n.sold>s.sold&&r.play("coin"),n.commissions>s.commissions&&r.play("commission"),o&&n.claimed>s.claimed&&r.play("goal"),n.upgrades>s.upgrades&&(r.play("hammer"),r.play("upgrade")),n.result&&!s.result?r.play("result",{n:((c=t.result)==null?void 0:c.stars)??1}):n.day>s.day&&r.play("rooster")}}const ml="farmproto.save.v1",Yd="farmproto.quality",jd="farmproto.outline.v2",Kd="farmproto.music",Zd="farmproto.sfx",Fe=ry,ni=new URLSearchParams(location.search),yw=Object.assign({"./art/index.ts":sy});var Eu;const bu=(Eu=yw["./art/index.ts"])==null?void 0:Eu.buildWorld;function ww(){const i=ni.get("q")??Se.get(Yd);return i==="high"||i==="low"?i:matchMedia("(pointer: coarse)").matches&&Math.min(screen.width,screen.height)<820?"low":"high"}function Mw(){if(ni.has("fresh"))return Se.remove(So),ba();const i=Se.get(ml);if(!i)return ba();try{return my(i)}catch(t){return console.warn("存檔讀不到，開新局",t),ba()}}function bw(i){if(bu&&ni.get("art")!=="placeholder")try{return{world:bu(Fe,{quality:i}),source:"art"}}catch(t){console.warn("src/art 建場景失敗，改用備用場景",t)}return{world:Hy(Fe,{quality:i}),source:"placeholder"}}const Fo=ww(),Jd=(ni.get("outline")??Se.get(jd)??"1")==="1";let jt=Mw(),Oi=1;const Fc={music:Se.get(Kd)!=="0",sfx:Se.get(Zd)!=="0"},Je=new vw(Fc.music,Fc.sfx),Sw=new xw(Je),Qd=document.getElementById("view"),_e=new ky(Qd,Fe,Fo,Jd),{world:tf,source:Ew}=bw(Fo),gl=Qy(tf,()=>{Tu(()=>import("./vrmCrew-D1EuYbXE.js"),[],import.meta.url).then(i=>i.disposeVrmWorkers())}),Mn=gl.world;_e.scene.add(Mn.root);_e.occluders=Mn.root;const Un=new qy(Mn,Fe,_e.scene),Hi=new Zy(tf,Fe,_e.scene);_e.characters=()=>[...Un.workers.map(i=>i.vis.object),...Hi.objects];ni.get("crew")!=="box"&&Tu(()=>import("./vrmCrew-D1EuYbXE.js"),[],import.meta.url).then(async i=>{await Promise.all(jt.workers.map(async(t,e)=>{try{const n=await i.loadVrmWorker(e);n&&gl.provide(e,n)}catch(n){console.warn(`工人 ${e} 的 VRoid 模型載入失敗，繼續用方塊版`,n)}})),await Promise.all(_r.map(async(t,e)=>{try{const n=await i.loadVrmVillager(t,e);n&&Hi.provide(t,n)}catch(n){console.warn(`村民 ${t} 的 VRoid 模型載入失敗，繼續用備用外觀`,n)}}))});let ef=!1;function xr(){ef||Se.set(ml,py(jt))}function _s(i){if(i.type==="upgrade"&&i.target==="field"&&jt.fields.length>=Fe.fieldSlots.length)return xe.toast("地圖上沒有空地可以開田了"),Je.play("fail"),!1;const t=Ud(jt,i);return t.ok?(xr(),i.type==="plant"&&Je.play("plant")):(xe.toast(xe.reason(t.reason),2200,!0),Je.play("fail")),t.ok}const xe=new lw(document.getElementById("hud"),{onAction:_s,onSpeed:i=>{Oi=i,Ud(jt,{type:"pause",paused:i===0})},onQuality:i=>{Se.set(Yd,i),xr(),location.reload()},onFollow:i=>{_e.follow(()=>Un.workerPosition(i)),xe.setFocus(i)},onUnfollow:()=>_e.unfollow(),onOutline:i=>{Se.set(jd,i?"1":"0"),_e.setOutline(i)},onSound:(i,t)=>{Se.set(i==="music"?Kd:Zd,t?"1":"0"),i==="music"?Je.setMusic(t):Je.setSfx(t)},onCrop:(i,t)=>{const e=jt.fields[i];e&&(!e.planted&&!e.harvested?_s({type:"plant",fieldId:i,crop:t}):_s({type:"setNextCrop",fieldId:i,crop:t})&&xe.toast(`這塊田收成後改種${on[t]}`))},onUnlock:()=>Je.play("unlock"),onTour:()=>Jn.start(),explain:(i,t,e)=>nf?(Jn.say(i,t,e),!0):!1,onVillagerEvent:i=>Je.play(i),onRestart:()=>{ef=!0,Se.remove(ml),Se.remove(So),Se.remove(Ic),location.reload()}},Fo,Jd,{...Fc});document.getElementById("hud").addEventListener("click",i=>{i.target.closest("button")&&Je.play("click")});jt.paused&&(Oi=0,xe.speed=0);_e.onUnfollow=()=>xe.setFocus(-1);const nf=ni.get("tour")==="1"||ni.get("tour")!=="0"&&!navigator.webdriver,Jn=new pw({state:()=>jt,locate:i=>Tw(i),setSpeed:i=>xe.setSpeed(i),speed:()=>xe.speed,onDone:()=>Se.set(qd,"1"),bottomReserve:()=>{const i=xe.rectOf("crew");return i?window.innerHeight-i.top+12:80}},Dc("lin","head"));document.getElementById("hud").append(Jn.el);nf&&(ni.get("tour")==="1"||!Se.get(qd))&&Jn.start();const Su=i=>i?{l:i.left,t:i.top,r:i.right,b:i.bottom}:null;function Ws(i,t,e,n){if(!_e.project(Bi.set(i,t,e),$e))return null;const s=$e.x,r=$e.y;_e.project(Bi.set(i+n,t,e),$e);const o=Math.max(36,Math.abs($e.x-s));return{l:s-o,t:r-o,r:s+o,b:r+o,round:!0}}function Tw(i){const t=Fe.buildings;switch(i){case"workers":return Su(xe.rectOf("crew"));case"upgrades":return Su(xe.rectOf("upgrade"));case"mill":return Ws(t.mill.pos[0],3,t.mill.pos[1],4.5);case"shop":return Ws(t.shop.pos[0],2.5,t.shop.pos[1],4.5);case"bakery":case"preservery":return Ws(t[i].pos[0],2.5,t[i].pos[1],3.5);case"tree":return Ws(Fe.orchardSlots[0][0],2,Fe.orchardSlots[0][1],3);case"fields":{let e=1/0,n=1/0,s=-1/0,r=-1/0;const[o,a]=Fe.fieldSize;for(const[c,l]of Fe.fieldSlots.slice(0,jt.fields.length))for(const[h,u]of[[-1,-1],[1,-1],[-1,1],[1,1]])_e.project(Bi.set(c+h*o/2,0,l+u*a/2),$e)&&(e=Math.min(e,$e.x),s=Math.max(s,$e.x),n=Math.min(n,$e.y),r=Math.max(r,$e.y));return e<s?{l:e,t:n,r:s,b:r}:null}default:if(i.startsWith("villager:")){const e=Hi.position(i.slice(9));return e?Ws(e.x,1.2,e.z,1.4):null}return null}}const Ys=(i,t,e)=>new D(i,t,e),fi=Fe.buildings,Oc=[{tag:xe.tag("building"),pos:Ys(fi.warehouse.pos[0],7.2,fi.warehouse.pos[1]),text:()=>{const i=qi(jt),t=ei(jt);return dr(jt)?`🏠 倉庫滿了 ${i}/${t}`:`🏠 倉庫 ${i}/${t}`}},{tag:xe.tag("building"),pos:Ys(fi.mill.pos[0],9.5,fi.mill.pos[1]),text:()=>`⚙️ 磨坊${jt.upgrades.mill?` Lv${jt.upgrades.mill+1}`:""}`},{tag:xe.tag("building"),pos:Ys(fi.shop.pos[0],8,fi.shop.pos[1]),text:()=>"🪙 商店"},...["bakery","preservery"].map(i=>({tag:xe.tag("building"),pos:Ys(fi[i].pos[0],5.2,fi[i].pos[1]),dodge:!0,text:()=>{const t=i==="bakery"?"🍞 麵包坊":"🍯 果醬坊",e=jt.processors[i];if(e.batch)return`${t} ${Math.round(Math.min(1,e.progress01+jt.remainder/ti[i].seconds)*100)}%`;if(e.waiting==="Locked")return`🔒${i==="bakery"?"🍞":"🍯"} 第 ${ti[i].day} 天`;const n=Hd(jt,i);return n?`${t} · ${n}`:t}}))],js=xe.tag("tree");js.el.addEventListener("click",()=>_s({type:"plantTree",treeId:0}));const Aw=Ys(Fe.orchardSlots[0][0],4.2,Fe.orchardSlots[0][1]);function Cw(){const i=jt.trees[0];return!i||!Ye(jt).orchard?"🔒🍎 第 4 天":i.planted?i.harvested>0?`待搬 🍎${i.harvested}`:i.ripe?"🍎 可採收":`🍎 ${i.batches?"結果中":"長大中"} ${Math.round(i.progress01*100)}%`:"🍎 蘋果樹 · 點我種"}const Ks=[],co=jt.workers.map((i,t)=>{const e=xe.tag("worker");return e.el.addEventListener("click",()=>{_e.follow(()=>Un.workerPosition(t)),xe.setFocus(t)}),e}),sf=new Map(_r.map(i=>{const t=xe.tag("villager");return t.el.addEventListener("click",()=>xe.openVillager(i)),[i,t]})),$e={x:0,y:0},Bi=new D,lo=[];let ps=0;function Rw(i,t,e,n){for(let s=0;s<ps;s++){const r=lo[s];if(i<r.r&&t>r.l&&e<r.b&&n>r.t)return r}return null}function Xs(i,t,e=!1){if(!_e.project(t,$e)){i.el.classList.add("off");return}i.el.classList.remove("off");const{w:n,h:s}=i.size(),r=$e.x,o=n/2;let a=$e.y;for(let l=0;e&&l<4;l++){const h=Rw(r-o,r+o,a-s,a);if(!h)break;const u=h.b+s+2,d=h.t-2;a=Math.abs(u-a)<Math.abs(d-a)?u:d}const c=lo[ps]??(lo[ps]={l:0,r:0,t:0,b:0});ps++,c.l=r-o,c.r=r+o,c.t=a-s,c.b=a,i.el.style.transform=`translate(${r.toFixed(1)}px, ${a.toFixed(1)}px) translate(-50%, -100%)`}function Pw(){var t;ps=0;for(const e of Oc)e.tag.set(e.text()),Xs(e.tag,e.pos,e.dodge);for(Oc[0].tag.el.classList.toggle("warn",dr(jt)),js.set(Cw()),js.el.classList.toggle("empty",Ye(jt).orchard&&!((t=jt.trees[0])!=null&&t.planted)),js.el.classList.toggle("ready",!!jt.trees[0]&&(jt.trees[0].ripe||jt.trees[0].harvested>0)),Xs(js,Aw,!0);Ks.length<Math.min(jt.fields.length,Fe.fieldSlots.length);){const e=Ks.length,n=xe.tag("field");n.el.addEventListener("click",()=>{const s=n.el.getBoundingClientRect();rf(e,(s.left+s.right)/2,s.top)}),Ks.push(n)}const i=Ye(jt).crops.length>1;Ks.forEach((e,n)=>{const s=jt.fields[n],[r,o]=Fe.fieldSlots[n],a=s.planted&&s.growth>=cn[s.crop].seconds,c=on[s.crop],l=s.nextCrop!==s.crop?` →${on[s.nextCrop]}`:"";e.el.classList.toggle("ready",a||s.harvested>0),e.el.classList.toggle("empty",!s.planted&&!s.harvested),e.el.classList.toggle("pick",i);const h=s.planted&&!a&&!s.harvested;if(e.el.classList.toggle("grow",h),h){const u=String(Math.round(s.growth/cn[s.crop].seconds*20)/20);e.el.style.getPropertyValue("--p")!==u&&e.el.style.setProperty("--p",u)}e.set(s.harvested>0?`${c}×${s.harvested}${l}`:s.planted?a?`${c}✓${l}`:`${c}${l}`:"＋ 種田"),Xs(e,Bi.set(r,1.2,o-Fe.fieldSize[1]/2),!0)});for(const e of jt.villagers){const n=sf.get(e.id),s=Hi.position(e.id);if(!s){n.el.classList.add("off");continue}const r=Uc(e.points);n.set(`${e.commission?"📜":""}${fn[e.id].name}${r?` ♥${r}`:""}`),n.el.classList.toggle("ask",!!e.commission),Xs(n,Bi.set(s.x,2.3,s.z),!0)}jt.workers.forEach((e,n)=>{const s=Un.workerPosition(n);if(!s)return;const r=Wd(jt,e);co[n].set(`${e.name}${r.warn?" ⚠️":""}`),co[n].el.classList.toggle("warn",r.warn),Xs(co[n],Bi.set(s.x,2.4,s.z),!0)})}function rf(i,t,e){const n=jt.fields[i];n&&(Ye(jt).crops.length>1?xe.cropPickerFor===i?xe.closeCropPicker():xe.openCropPicker(i,t,e,jt):!n.planted&&!n.harvested&&_s({type:"plant",fieldId:i}))}Qd.addEventListener("click",i=>{if(_e.wasDrag())return;const e=_e.raycaster(i.clientX,i.clientY).intersectObjects(Un.fields.map(s=>s.object),!0)[0];if(!e)return;const n=Un.fields.findIndex(s=>{let r=e.object;for(;r;){if(r===s.object)return!0;r=r.parent}return!1});n>=0&&rf(n,i.clientX,i.clientY)});document.addEventListener("visibilitychange",()=>{document.hidden&&xr()});window.addEventListener("pagehide",xr);setInterval(xr,5e3);const Lw=["sunny","rain","drought"],Iw=Lw.find(i=>i===ni.get("weather"))??null,Dw=i=>Iw??i.weather??"sunny",Uw=new wd;let of=0;function af(){var n,s,r;const i=Math.min(.1,Uw.getDelta());Oi>0&&Nd(jt,i*Oi),Un.sync(jt,i*Oi),Hi.sync(jt,i*Oi),Mn.setStockItems?Mn.setStockItems(jt.inventory,ei(jt)):(n=Mn.setStock)==null||n.call(Mn,jt.inventory.wheat,jt.inventory.flour,ei(jt));const t=(jt.time%ne.daySeconds+jt.remainder)/ne.daySeconds,e=Dw(jt);(s=Mn.update)==null||s.call(Mn,i,{phase:jt.phase,time01:t,weather:e}),_e.setWeather(e),_e.setDayTime(t),_e.update(i),_e.render(),xe.quiet=Jn.active,xe.update(jt,e),Jn.update(),Sw.update(jt,e),Pw(),++of===2&&((r=document.getElementById("boot"))==null||r.classList.add("done")),requestAnimationFrame(af)}requestAnimationFrame(af);window.__farm={get state(){return jt},get frames(){return of},get workerPos(){return Un.workers.map(i=>[i.pos.x,i.pos.z])},artSource:Ew,quality:Fo,get outline(){return _e.outline},get crewReady(){return gl.ready},get following(){return _e.following},get cameraDistance(){return _e.cameraDistance},get rainAmount(){return _e.rainAmount},outlineCrease:i=>_e.setOutlineCrease(i),audio:{get running(){return Je.running},get loaded(){return Je.loaded},get played(){return{...Je.played}},get music(){return Je.music},get sfx(){return Je.sfx}},act:_s,get tour(){return Jn.stepId},get coachOpen(){return Jn.active},startTour:()=>Jn.start(),setSpeed:i=>{Oi=i},zoom:(i,t,e)=>{_e.zoomTo(i),t!==void 0&&e!==void 0&&_e.lookAt(t,e)},advance:i=>{Nd(jt,i)},get villagersReady(){return Hi.ready},villagerPos:i=>{const t=Hi.position(i);return t?[t.x,t.z]:null},get m8Visuals(){return{trees:Un.trees.length,processors:Un.processors.length}},project:(i,t,e)=>_e.project(Bi.set(i,t,e),$e)?{...$e}:null,tagSizeDrift:()=>Math.max(0,...[...Oc.map(i=>i.tag),...Ks,...co,...sf.values()].filter(i=>!i.el.classList.contains("off")).map(i=>Math.abs(i.size().w-i.el.offsetWidth)))};export{E_ as $,Vw as A,tn as B,Dt as C,Tx as D,S as E,$w as F,C_ as G,ud as H,bn as I,Gw as J,Hw as K,gr as L,Ww as M,Mr as N,Ee as O,Sx as P,Wi as Q,qa as R,an as S,kw as T,dt as U,Et as V,Ke as W,he as X,Jc as Y,ld as Z,Xw as _,Ow as a,ho as a0,wc as a1,ad as a2,He as a3,vo as a4,go as a5,Io as a6,ie as a7,wi as a8,Lo as a9,Mi as aa,ii as ab,Qe as ac,Rn as ad,yx as ae,Ge as af,Wu as ag,or as ah,Ft as ai,Qt as aj,Bw as ak,Zw as al,Jw as am,Bc as an,ve as ao,me as ap,ct as aq,Tt as ar,Fw as b,jw as c,As as d,Yw as e,te as f,D as g,Dh as h,qw as i,Kw as j,zw as k,Fi as l,Bo as m,Bf as n,In as o,qe as p,Ya as q,ki as r,R_ as s,Xi as t,hd as u,oe as v,qn as w,Ao as x,ge as y,Oe as z};
