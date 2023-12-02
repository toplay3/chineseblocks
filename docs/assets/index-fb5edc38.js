var Za=Object.defineProperty;var Ka=(i,e,t)=>e in i?Za(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var He=(i,e,t)=>(Ka(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dr="157",$a=0,zr=1,ec=2,aa=1,tc=2,$t=3,fn=0,xt=1,Pt=2,gn=0,Jn=1,br=2,Or=3,Ur=4,nc=5,Vn=100,ic=101,sc=102,Lr=103,Br=104,rc=200,oc=201,ac=202,cc=203,ca=204,la=205,lc=206,gc=207,hc=208,uc=209,fc=210,Mc=0,dc=1,Ic=2,tr=3,pc=4,Ac=5,Dc=6,mc=7,ga=0,xc=1,Nc=2,hn=0,Sc=1,Ec=2,Tc=3,yc=4,_c=5,ha=300,Kn=301,$n=302,nr=303,ir=304,as=306,sr=1e3,Lt=1001,rr=1002,At=1003,Rr=1004,Ds=1005,wt=1006,Cc=1007,di=1008,un=1009,wc=1010,vc=1011,Ir=1012,ua=1013,cn=1014,ln=1015,Ii=1016,fa=1017,Ma=1018,En=1020,zc=1021,Bt=1023,bc=1024,Oc=1025,Tn=1026,ei=1027,Uc=1028,da=1029,Lc=1030,Ia=1031,pa=1033,ms=33776,xs=33777,Ns=33778,Ss=33779,jr=35840,Pr=35841,Fr=35842,kr=35843,Bc=36196,Gr=37492,Hr=37496,Yr=37808,Qr=37809,Vr=37810,Wr=37811,Xr=37812,Jr=37813,qr=37814,Zr=37815,Kr=37816,$r=37817,eo=37818,to=37819,no=37820,io=37821,Es=36492,so=36494,ro=36495,Rc=36283,oo=36284,ao=36285,co=36286,Aa=3e3,yn=3001,jc=3200,Pc=3201,Fc=0,kc=1,zt="",lt="srgb",tn="srgb-linear",pr="display-p3",cs="display-p3-linear",ns="linear",qe="srgb",is="rec709",ss="p3",Ts=7680,Gc=519,Hc=512,Yc=513,Qc=514,Vc=515,Wc=516,Xc=517,Jc=518,qc=519,lo=35044,go="300 es",or=1035,en=2e3,rs=2001;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ys=Math.PI/180,ar=180/Math.PI;function ii(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[i&255]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function Zc(i,e){return(i%e+e)%e}function _s(i,e,t){return(1-t)*i+t*e}function ho(i){return(i&i-1)===0&&i!==0}function cr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function oi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,t,n,s,r,a,o,c,l){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const g=this.elements;return g[0]=e,g[1]=s,g[2]=o,g[3]=t,g[4]=r,g[5]=c,g[6]=n,g[7]=a,g[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],g=n[4],h=n[7],u=n[2],d=n[5],I=n[8],p=s[0],M=s[3],f=s[6],T=s[1],A=s[4],x=s[7],_=s[2],v=s[5],w=s[8];return r[0]=a*p+o*T+c*_,r[3]=a*M+o*A+c*v,r[6]=a*f+o*x+c*w,r[1]=l*p+g*T+h*_,r[4]=l*M+g*A+h*v,r[7]=l*f+g*x+h*w,r[2]=u*p+d*T+I*_,r[5]=u*M+d*A+I*v,r[8]=u*f+d*x+I*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],g=e[8];return t*a*g-t*o*l-n*r*g+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],g=e[8],h=g*a-o*l,u=o*c-g*r,d=l*r-a*c,I=t*h+n*u+s*d;if(I===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/I;return e[0]=h*p,e[1]=(s*l-g*n)*p,e[2]=(o*n-s*a)*p,e[3]=u*p,e[4]=(g*t-s*c)*p,e[5]=(s*r-o*t)*p,e[6]=d*p,e[7]=(n*c-l*t)*p,e[8]=(a*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cs.makeScale(e,t)),this}rotate(e){return this.premultiply(Cs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cs=new Pe;function Da(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kc(){const i=os("canvas");return i.style.display="block",i}const uo={};function ui(i){i in uo||(uo[i]=!0,console.warn(i))}const fo=new Pe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mo=new Pe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yi={[tn]:{transfer:ns,primaries:is,toReference:i=>i,fromReference:i=>i},[lt]:{transfer:qe,primaries:is,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[cs]:{transfer:ns,primaries:ss,toReference:i=>i.applyMatrix3(Mo),fromReference:i=>i.applyMatrix3(fo)},[pr]:{transfer:qe,primaries:ss,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Mo),fromReference:i=>i.applyMatrix3(fo).convertLinearToSRGB()}},$c=new Set([tn,cs]),We={enabled:!0,_workingColorSpace:tn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!$c.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=yi[e].toReference,s=yi[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return yi[i].primaries},getTransfer:function(i){return i===zt?ns:yi[i].transfer}};function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vn;class ma{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vn===void 0&&(vn=os("canvas")),vn.width=e.width,vn.height=e.height;const n=vn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let el=0;class xa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:el++}),this.uuid=ii(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vs(s[a].image)):r.push(vs(s[a]))}else r=vs(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function vs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ma.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tl=0;class yt extends ni{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=Lt,s=Lt,r=wt,a=di,o=Bt,c=un,l=yt.DEFAULT_ANISOTROPY,g=zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tl++}),this.uuid=ii(),this.name="",this.source=new xa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===yn?lt:zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ha)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===lt?yn:Aa}set encoding(e){ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yn?lt:zt}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=ha;yt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],g=c[4],h=c[8],u=c[1],d=c[5],I=c[9],p=c[2],M=c[6],f=c[10];if(Math.abs(g-u)<.01&&Math.abs(h-p)<.01&&Math.abs(I-M)<.01){if(Math.abs(g+u)<.1&&Math.abs(h+p)<.1&&Math.abs(I+M)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,x=(d+1)/2,_=(f+1)/2,v=(g+u)/4,w=(h+p)/4,R=(I+M)/4;return A>x&&A>_?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=v/n,r=w/n):x>_?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=v/s,r=R/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=w/r,s=R/r),this.set(n,s,r,t),this}let T=Math.sqrt((M-I)*(M-I)+(h-p)*(h-p)+(u-g)*(u-g));return Math.abs(T)<.001&&(T=1),this.x=(M-I)/T,this.y=(h-p)/T,this.z=(u-g)/T,this.w=Math.acos((l+d+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nl extends ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(ui("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===yn?lt:zt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new yt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends nl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Na extends yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il extends yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],g=n[s+2],h=n[s+3];const u=r[a+0],d=r[a+1],I=r[a+2],p=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=g,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=d,e[t+2]=I,e[t+3]=p;return}if(h!==p||c!==u||l!==d||g!==I){let M=1-o;const f=c*u+l*d+g*I+h*p,T=f>=0?1:-1,A=1-f*f;if(A>Number.EPSILON){const _=Math.sqrt(A),v=Math.atan2(_,f*T);M=Math.sin(M*v)/_,o=Math.sin(o*v)/_}const x=o*T;if(c=c*M+u*x,l=l*M+d*x,g=g*M+I*x,h=h*M+p*x,M===1-o){const _=1/Math.sqrt(c*c+l*l+g*g+h*h);c*=_,l*=_,g*=_,h*=_}}e[t]=c,e[t+1]=l,e[t+2]=g,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],g=n[s+3],h=r[a],u=r[a+1],d=r[a+2],I=r[a+3];return e[t]=o*I+g*h+c*d-l*u,e[t+1]=c*I+g*u+l*h-o*d,e[t+2]=l*I+g*d+o*u-c*h,e[t+3]=g*I-o*h-c*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),g=o(s/2),h=o(r/2),u=c(n/2),d=c(s/2),I=c(r/2);switch(a){case"XYZ":this._x=u*g*h+l*d*I,this._y=l*d*h-u*g*I,this._z=l*g*I+u*d*h,this._w=l*g*h-u*d*I;break;case"YXZ":this._x=u*g*h+l*d*I,this._y=l*d*h-u*g*I,this._z=l*g*I-u*d*h,this._w=l*g*h+u*d*I;break;case"ZXY":this._x=u*g*h-l*d*I,this._y=l*d*h+u*g*I,this._z=l*g*I+u*d*h,this._w=l*g*h-u*d*I;break;case"ZYX":this._x=u*g*h-l*d*I,this._y=l*d*h+u*g*I,this._z=l*g*I-u*d*h,this._w=l*g*h+u*d*I;break;case"YZX":this._x=u*g*h+l*d*I,this._y=l*d*h+u*g*I,this._z=l*g*I-u*d*h,this._w=l*g*h-u*d*I;break;case"XZY":this._x=u*g*h-l*d*I,this._y=l*d*h-u*g*I,this._z=l*g*I+u*d*h,this._w=l*g*h+u*d*I;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],g=t[6],h=t[10],u=n+o+h;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(g-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(g-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+g)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+g)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,g=t._w;return this._x=n*g+a*o+s*l-r*c,this._y=s*g+a*c+r*o-n*l,this._z=r*g+a*l+n*c-s*o,this._w=a*g-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),g=Math.atan2(l,o),h=Math.sin((1-t)*g)/l,u=Math.sin(t*g)/l;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=s*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,n=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Io.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Io.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*s-o*n,g=c*n+o*t-r*s,h=c*s+r*n-a*t,u=-r*t-a*n-o*s;return this.x=l*c+u*-r+g*-o-h*-a,this.y=g*c+u*-a+h*-r-l*-o,this.z=h*c+u*-o+l*-a-g*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zs.copy(this).projectOnVector(e),this.sub(zs)}reflect(e){return this.sub(zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zs=new b,Io=new mi;class xi{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),zn.copy(e.boundingBox),zn.applyMatrix4(e.matrixWorld),this.union(zn);else{const s=e.geometry;if(s!==void 0)if(t&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let a=0,o=r.count;a<o;a++)Wt.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Wt)}else s.boundingBox===null&&s.computeBoundingBox(),zn.copy(s.boundingBox),zn.applyMatrix4(e.matrixWorld),this.union(zn)}const n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ai),_i.subVectors(this.max,ai),bn.subVectors(e.a,ai),On.subVectors(e.b,ai),Un.subVectors(e.c,ai),nn.subVectors(On,bn),sn.subVectors(Un,On),In.subVectors(bn,Un);let t=[0,-nn.z,nn.y,0,-sn.z,sn.y,0,-In.z,In.y,nn.z,0,-nn.x,sn.z,0,-sn.x,In.z,0,-In.x,-nn.y,nn.x,0,-sn.y,sn.x,0,-In.y,In.x,0];return!bs(t,bn,On,Un,_i)||(t=[1,0,0,0,1,0,0,0,1],!bs(t,bn,On,Un,_i))?!1:(Ci.crossVectors(nn,sn),t=[Ci.x,Ci.y,Ci.z],bs(t,bn,On,Un,_i))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vt=[new b,new b,new b,new b,new b,new b,new b,new b],Wt=new b,zn=new xi,bn=new b,On=new b,Un=new b,nn=new b,sn=new b,In=new b,ai=new b,_i=new b,Ci=new b,pn=new b;function bs(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){pn.fromArray(i,r);const o=s.x*Math.abs(pn.x)+s.y*Math.abs(pn.y)+s.z*Math.abs(pn.z),c=e.dot(pn),l=t.dot(pn),g=n.dot(pn);if(Math.max(-Math.max(c,l,g),Math.min(c,l,g))>o)return!1}return!0}const sl=new xi,ci=new b,Os=new b;class ls{constructor(e=new b,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sl.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ci.subVectors(e,this.center);const t=ci.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ci,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Os.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ci.copy(e.center).add(Os)),this.expandByPoint(ci.copy(e.center).sub(Os))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xt=new b,Us=new b,wi=new b,rn=new b,Ls=new b,vi=new b,Bs=new b;class Ar{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xt.copy(this.origin).addScaledVector(this.direction,t),Xt.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Us.copy(e).add(t).multiplyScalar(.5),wi.copy(t).sub(e).normalize(),rn.copy(this.origin).sub(Us);const r=e.distanceTo(t)*.5,a=-this.direction.dot(wi),o=rn.dot(this.direction),c=-rn.dot(wi),l=rn.lengthSq(),g=Math.abs(1-a*a);let h,u,d,I;if(g>0)if(h=a*c-o,u=a*o-c,I=r*g,h>=0)if(u>=-I)if(u<=I){const p=1/g;h*=p,u*=p,d=h*(h+a*u+2*o)+u*(a*h+u+2*c)+l}else u=r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*c)+l;else u=-r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*c)+l;else u<=-I?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+u*(u+2*c)+l):u<=I?(h=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+u*(u+2*c)+l);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Us).addScaledVector(wi,u),d}intersectSphere(e,t){Xt.subVectors(e.center,this.origin);const n=Xt.dot(this.direction),s=Xt.dot(Xt)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,g=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),g>=0?(r=(e.min.y-u.y)*g,a=(e.max.y-u.y)*g):(r=(e.max.y-u.y)*g,a=(e.min.y-u.y)*g),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xt)!==null}intersectTriangle(e,t,n,s,r){Ls.subVectors(t,e),vi.subVectors(n,e),Bs.crossVectors(Ls,vi);let a=this.direction.dot(Bs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;rn.subVectors(this.origin,e);const c=o*this.direction.dot(vi.crossVectors(rn,vi));if(c<0)return null;const l=o*this.direction.dot(Ls.cross(rn));if(l<0||c+l>a)return null;const g=-o*rn.dot(Bs);return g<0?null:this.at(g/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,s,r,a,o,c,l,g,h,u,d,I,p,M){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,g,h,u,d,I,p,M)}set(e,t,n,s,r,a,o,c,l,g,h,u,d,I,p,M){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=g,f[10]=h,f[14]=u,f[3]=d,f[7]=I,f[11]=p,f[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ln.setFromMatrixColumn(e,0).length(),r=1/Ln.setFromMatrixColumn(e,1).length(),a=1/Ln.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),g=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=a*g,d=a*h,I=o*g,p=o*h;t[0]=c*g,t[4]=-c*h,t[8]=l,t[1]=d+I*l,t[5]=u-p*l,t[9]=-o*c,t[2]=p-u*l,t[6]=I+d*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*g,d=c*h,I=l*g,p=l*h;t[0]=u+p*o,t[4]=I*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*g,t[9]=-o,t[2]=d*o-I,t[6]=p+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*g,d=c*h,I=l*g,p=l*h;t[0]=u-p*o,t[4]=-a*h,t[8]=I+d*o,t[1]=d+I*o,t[5]=a*g,t[9]=p-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*g,d=a*h,I=o*g,p=o*h;t[0]=c*g,t[4]=I*l-d,t[8]=u*l+p,t[1]=c*h,t[5]=p*l+u,t[9]=d*l-I,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,d=a*l,I=o*c,p=o*l;t[0]=c*g,t[4]=p-u*h,t[8]=I*h+d,t[1]=h,t[5]=a*g,t[9]=-o*g,t[2]=-l*g,t[6]=d*h+I,t[10]=u-p*h}else if(e.order==="XZY"){const u=a*c,d=a*l,I=o*c,p=o*l;t[0]=c*g,t[4]=-h,t[8]=l*g,t[1]=u*h+p,t[5]=a*g,t[9]=d*h-I,t[2]=I*h-d,t[6]=o*g,t[10]=p*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rl,e,ol)}lookAt(e,t,n){const s=this.elements;return Et.subVectors(e,t),Et.lengthSq()===0&&(Et.z=1),Et.normalize(),on.crossVectors(n,Et),on.lengthSq()===0&&(Math.abs(n.z)===1?Et.x+=1e-4:Et.z+=1e-4,Et.normalize(),on.crossVectors(n,Et)),on.normalize(),zi.crossVectors(Et,on),s[0]=on.x,s[4]=zi.x,s[8]=Et.x,s[1]=on.y,s[5]=zi.y,s[9]=Et.y,s[2]=on.z,s[6]=zi.z,s[10]=Et.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],g=n[1],h=n[5],u=n[9],d=n[13],I=n[2],p=n[6],M=n[10],f=n[14],T=n[3],A=n[7],x=n[11],_=n[15],v=s[0],w=s[4],R=s[8],m=s[12],E=s[1],G=s[5],Z=s[9],K=s[13],z=s[2],k=s[6],Q=s[10],H=s[14],se=s[3],W=s[7],V=s[11],O=s[15];return r[0]=a*v+o*E+c*z+l*se,r[4]=a*w+o*G+c*k+l*W,r[8]=a*R+o*Z+c*Q+l*V,r[12]=a*m+o*K+c*H+l*O,r[1]=g*v+h*E+u*z+d*se,r[5]=g*w+h*G+u*k+d*W,r[9]=g*R+h*Z+u*Q+d*V,r[13]=g*m+h*K+u*H+d*O,r[2]=I*v+p*E+M*z+f*se,r[6]=I*w+p*G+M*k+f*W,r[10]=I*R+p*Z+M*Q+f*V,r[14]=I*m+p*K+M*H+f*O,r[3]=T*v+A*E+x*z+_*se,r[7]=T*w+A*G+x*k+_*W,r[11]=T*R+A*Z+x*Q+_*V,r[15]=T*m+A*K+x*H+_*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],g=e[2],h=e[6],u=e[10],d=e[14],I=e[3],p=e[7],M=e[11],f=e[15];return I*(+r*c*h-s*l*h-r*o*u+n*l*u+s*o*d-n*c*d)+p*(+t*c*d-t*l*u+r*a*u-s*a*d+s*l*g-r*c*g)+M*(+t*l*h-t*o*d-r*a*h+n*a*d+r*o*g-n*l*g)+f*(-s*o*g-t*c*h+t*o*u+s*a*h-n*a*u+n*c*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],g=e[8],h=e[9],u=e[10],d=e[11],I=e[12],p=e[13],M=e[14],f=e[15],T=h*M*l-p*u*l+p*c*d-o*M*d-h*c*f+o*u*f,A=I*u*l-g*M*l-I*c*d+a*M*d+g*c*f-a*u*f,x=g*p*l-I*h*l+I*o*d-a*p*d-g*o*f+a*h*f,_=I*h*c-g*p*c-I*o*u+a*p*u+g*o*M-a*h*M,v=t*T+n*A+s*x+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/v;return e[0]=T*w,e[1]=(p*u*r-h*M*r-p*s*d+n*M*d+h*s*f-n*u*f)*w,e[2]=(o*M*r-p*c*r+p*s*l-n*M*l-o*s*f+n*c*f)*w,e[3]=(h*c*r-o*u*r-h*s*l+n*u*l+o*s*d-n*c*d)*w,e[4]=A*w,e[5]=(g*M*r-I*u*r+I*s*d-t*M*d-g*s*f+t*u*f)*w,e[6]=(I*c*r-a*M*r-I*s*l+t*M*l+a*s*f-t*c*f)*w,e[7]=(a*u*r-g*c*r+g*s*l-t*u*l-a*s*d+t*c*d)*w,e[8]=x*w,e[9]=(I*h*r-g*p*r-I*n*d+t*p*d+g*n*f-t*h*f)*w,e[10]=(a*p*r-I*o*r+I*n*l-t*p*l-a*n*f+t*o*f)*w,e[11]=(g*o*r-a*h*r-g*n*l+t*h*l+a*n*d-t*o*d)*w,e[12]=_*w,e[13]=(g*p*s-I*h*s+I*n*u-t*p*u-g*n*M+t*h*M)*w,e[14]=(I*o*s-a*p*s-I*n*c+t*p*c+a*n*M-t*o*M)*w,e[15]=(a*h*s-g*o*s+g*n*c-t*h*c-a*n*u+t*o*u)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,g=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,g*o+n,g*c-s*a,0,l*c-s*o,g*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,g=a+a,h=o+o,u=r*l,d=r*g,I=r*h,p=a*g,M=a*h,f=o*h,T=c*l,A=c*g,x=c*h,_=n.x,v=n.y,w=n.z;return s[0]=(1-(p+f))*_,s[1]=(d+x)*_,s[2]=(I-A)*_,s[3]=0,s[4]=(d-x)*v,s[5]=(1-(u+f))*v,s[6]=(M+T)*v,s[7]=0,s[8]=(I+A)*w,s[9]=(M-T)*w,s[10]=(1-(u+p))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ln.set(s[0],s[1],s[2]).length();const a=Ln.set(s[4],s[5],s[6]).length(),o=Ln.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],bt.copy(this);const l=1/r,g=1/a,h=1/o;return bt.elements[0]*=l,bt.elements[1]*=l,bt.elements[2]*=l,bt.elements[4]*=g,bt.elements[5]*=g,bt.elements[6]*=g,bt.elements[8]*=h,bt.elements[9]*=h,bt.elements[10]*=h,t.setFromRotationMatrix(bt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=en){const c=this.elements,l=2*r/(t-e),g=2*r/(n-s),h=(t+e)/(t-e),u=(n+s)/(n-s);let d,I;if(o===en)d=-(a+r)/(a-r),I=-2*a*r/(a-r);else if(o===rs)d=-a/(a-r),I=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=g,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=I,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=en){const c=this.elements,l=1/(t-e),g=1/(n-s),h=1/(a-r),u=(t+e)*l,d=(n+s)*g;let I,p;if(o===en)I=(a+r)*h,p=-2*h;else if(o===rs)I=r*h,p=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*g,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=p,c[14]=-I,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ln=new b,bt=new rt,rl=new b(0,0,0),ol=new b(1,1,1),on=new b,zi=new b,Et=new b,po=new rt,Ao=new mi;class gs{constructor(e=0,t=0,n=0,s=gs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],g=s[9],h=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-g,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-g,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return po.makeRotationFromQuaternion(e),this.setFromRotationMatrix(po,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ao.setFromEuler(this),this.setFromQuaternion(Ao,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gs.DEFAULT_ORDER="XYZ";class Dr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let al=0;const Do=new b,Bn=new mi,Jt=new rt,bi=new b,li=new b,cl=new b,ll=new mi,mo=new b(1,0,0),xo=new b(0,1,0),No=new b(0,0,1),gl={type:"added"},hl={type:"removed"};class Nt extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:al++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new b,t=new gs,n=new mi,s=new b(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new Pe}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bn.setFromAxisAngle(e,t),this.quaternion.multiply(Bn),this}rotateOnWorldAxis(e,t){return Bn.setFromAxisAngle(e,t),this.quaternion.premultiply(Bn),this}rotateX(e){return this.rotateOnAxis(mo,e)}rotateY(e){return this.rotateOnAxis(xo,e)}rotateZ(e){return this.rotateOnAxis(No,e)}translateOnAxis(e,t){return Do.copy(e).applyQuaternion(this.quaternion),this.position.add(Do.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mo,e)}translateY(e){return this.translateOnAxis(xo,e)}translateZ(e){return this.translateOnAxis(No,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bi.copy(e):bi.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(li,bi,this.up):Jt.lookAt(bi,li,this.up),this.quaternion.setFromRotationMatrix(Jt),s&&(Jt.extractRotation(s.matrixWorld),Bn.setFromRotationMatrix(Jt),this.quaternion.premultiply(Bn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,e,cl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,ll,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,g=c.length;l<g;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),g=a(e.images),h=a(e.shapes),u=a(e.skeletons),d=a(e.animations),I=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),g.length>0&&(n.images=g),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),I.length>0&&(n.nodes=I)}return n.object=s,n;function a(o){const c=[];for(const l in o){const g=o[l];delete g.metadata,c.push(g)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Nt.DEFAULT_UP=new b(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new b,qt=new b,Rs=new b,Zt=new b,Rn=new b,jn=new b,So=new b,js=new b,Ps=new b,Fs=new b;let Oi=!1;class Ut{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ot.subVectors(e,t),s.cross(Ot);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ot.subVectors(s,t),qt.subVectors(n,t),Rs.subVectors(e,t);const a=Ot.dot(Ot),o=Ot.dot(qt),c=Ot.dot(Rs),l=qt.dot(qt),g=qt.dot(Rs),h=a*l-o*o;if(h===0)return r.set(-2,-1,-1);const u=1/h,d=(l*c-o*g)*u,I=(a*g-o*c)*u;return r.set(1-d-I,I,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zt),Zt.x>=0&&Zt.y>=0&&Zt.x+Zt.y<=1}static getUV(e,t,n,s,r,a,o,c){return Oi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Oi=!0),this.getInterpolation(e,t,n,s,r,a,o,c)}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Zt),c.setScalar(0),c.addScaledVector(r,Zt.x),c.addScaledVector(a,Zt.y),c.addScaledVector(o,Zt.z),c}static isFrontFacing(e,t,n,s){return Ot.subVectors(n,t),qt.subVectors(e,t),Ot.cross(qt).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),qt.subVectors(this.a,this.b),Ot.cross(qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ut.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ut.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Oi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Oi=!0),Ut.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return Ut.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ut.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ut.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Rn.subVectors(s,n),jn.subVectors(r,n),js.subVectors(e,n);const c=Rn.dot(js),l=jn.dot(js);if(c<=0&&l<=0)return t.copy(n);Ps.subVectors(e,s);const g=Rn.dot(Ps),h=jn.dot(Ps);if(g>=0&&h<=g)return t.copy(s);const u=c*h-g*l;if(u<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Rn,a);Fs.subVectors(e,r);const d=Rn.dot(Fs),I=jn.dot(Fs);if(I>=0&&d<=I)return t.copy(r);const p=d*l-c*I;if(p<=0&&l>=0&&I<=0)return o=l/(l-I),t.copy(n).addScaledVector(jn,o);const M=g*I-d*h;if(M<=0&&h-g>=0&&d-I>=0)return So.subVectors(r,s),o=(h-g)/(h-g+(d-I)),t.copy(s).addScaledVector(So,o);const f=1/(M+p+u);return a=p*f,o=u*f,t.copy(n).addScaledVector(Rn,a).addScaledVector(jn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ul=0;class Ni extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ul++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Jn,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=la,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(n.blending=this.blending),this.side!==fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},Ui={h:0,s:0,l:0};function ks(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=Zc(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ks(a,r,e+1/3),this.g=ks(a,r,e),this.b=ks(a,r,e-1/3)}return We.toWorkingColorSpace(this,s),this}setStyle(e,t=lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){const n=Sa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return We.fromWorkingColorSpace(ut.copy(this),e),Math.round(ft(ut.r*255,0,255))*65536+Math.round(ft(ut.g*255,0,255))*256+Math.round(ft(ut.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(ut.copy(this),t);const n=ut.r,s=ut.g,r=ut.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const g=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=g<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=g,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(ut.copy(this),t),e.r=ut.r,e.g=ut.g,e.b=ut.b,e}getStyle(e=lt){We.fromWorkingColorSpace(ut.copy(this),e);const t=ut.r,n=ut.g,s=ut.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(an),this.setHSL(an.h+e,an.s+t,an.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(Ui);const n=_s(an.h,Ui.h,t),s=_s(an.s,Ui.s,t),r=_s(an.l,Ui.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ut=new Xe;Xe.NAMES=Sa;class hs extends Ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new b,Li=new Me;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lo,this.updateRange={offset:0,count:-1},this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Li.fromBufferAttribute(this,t),Li.applyMatrix3(e),this.setXY(t,Li.x,Li.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),s=Dt(s,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ea extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ta extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fl=0;const Ct=new rt,Gs=new Nt,Pn=new b,Tt=new xi,gi=new xi,ct=new b;class Ht extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fl++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Da(e)?Ta:Ea)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ct.makeRotationFromQuaternion(e),this.applyMatrix4(Ct),this}rotateX(e){return Ct.makeRotationX(e),this.applyMatrix4(Ct),this}rotateY(e){return Ct.makeRotationY(e),this.applyMatrix4(Ct),this}rotateZ(e){return Ct.makeRotationZ(e),this.applyMatrix4(Ct),this}translate(e,t,n){return Ct.makeTranslation(e,t,n),this.applyMatrix4(Ct),this}scale(e,t,n){return Ct.makeScale(e,t,n),this.applyMatrix4(Ct),this}lookAt(e){return Gs.lookAt(e),Gs.updateMatrix(),this.applyMatrix4(Gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pn).negate(),this.translate(Pn.x,Pn.y,Pn.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Tt.setFromBufferAttribute(r),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Tt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Tt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Tt.min),this.boundingBox.expandByPoint(Tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(e){const n=this.boundingSphere.center;if(Tt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];gi.setFromBufferAttribute(o),this.morphTargetsRelative?(ct.addVectors(Tt.min,gi.min),Tt.expandByPoint(ct),ct.addVectors(Tt.max,gi.max),Tt.expandByPoint(ct)):(Tt.expandByPoint(gi.min),Tt.expandByPoint(gi.max))}Tt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)ct.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ct));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,g=o.count;l<g;l++)ct.fromBufferAttribute(o,l),c&&(Pn.fromBufferAttribute(e,l),ct.add(Pn)),s=Math.max(s,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],g=[];for(let E=0;E<o;E++)l[E]=new b,g[E]=new b;const h=new b,u=new b,d=new b,I=new Me,p=new Me,M=new Me,f=new b,T=new b;function A(E,G,Z){h.fromArray(s,E*3),u.fromArray(s,G*3),d.fromArray(s,Z*3),I.fromArray(a,E*2),p.fromArray(a,G*2),M.fromArray(a,Z*2),u.sub(h),d.sub(h),p.sub(I),M.sub(I);const K=1/(p.x*M.y-M.x*p.y);isFinite(K)&&(f.copy(u).multiplyScalar(M.y).addScaledVector(d,-p.y).multiplyScalar(K),T.copy(d).multiplyScalar(p.x).addScaledVector(u,-M.x).multiplyScalar(K),l[E].add(f),l[G].add(f),l[Z].add(f),g[E].add(T),g[G].add(T),g[Z].add(T))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let E=0,G=x.length;E<G;++E){const Z=x[E],K=Z.start,z=Z.count;for(let k=K,Q=K+z;k<Q;k+=3)A(n[k+0],n[k+1],n[k+2])}const _=new b,v=new b,w=new b,R=new b;function m(E){w.fromArray(r,E*3),R.copy(w);const G=l[E];_.copy(G),_.sub(w.multiplyScalar(w.dot(G))).normalize(),v.crossVectors(R,G);const K=v.dot(g[E])<0?-1:1;c[E*4]=_.x,c[E*4+1]=_.y,c[E*4+2]=_.z,c[E*4+3]=K}for(let E=0,G=x.length;E<G;++E){const Z=x[E],K=Z.start,z=Z.count;for(let k=K,Q=K+z;k<Q;k+=3)m(n[k+0]),m(n[k+1]),m(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new b,r=new b,a=new b,o=new b,c=new b,l=new b,g=new b,h=new b;if(e)for(let u=0,d=e.count;u<d;u+=3){const I=e.getX(u+0),p=e.getX(u+1),M=e.getX(u+2);s.fromBufferAttribute(t,I),r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,M),g.subVectors(a,r),h.subVectors(s,r),g.cross(h),o.fromBufferAttribute(n,I),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,M),o.add(g),c.add(g),l.add(g),n.setXYZ(I,o.x,o.y,o.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(M,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),g.subVectors(a,r),h.subVectors(s,r),g.cross(h),n.setXYZ(u+0,g.x,g.y,g.z),n.setXYZ(u+1,g.x,g.y,g.z),n.setXYZ(u+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(o,c){const l=o.array,g=o.itemSize,h=o.normalized,u=new l.constructor(c.length*g);let d=0,I=0;for(let p=0,M=c.length;p<M;p++){o.isInterleavedBufferAttribute?d=c[p]*o.data.stride+o.offset:d=c[p]*g;for(let f=0;f<g;f++)u[I++]=l[d++]}return new kt(u,g,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let g=0,h=l.length;g<h;g++){const u=l[g],d=e(u,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],g=[];for(let h=0,u=l.length;h<u;h++){const d=l[h];g.push(d.toJSON(e.data))}g.length>0&&(s[c]=g,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const g=s[l];this.setAttribute(l,g.clone(t))}const r=e.morphAttributes;for(const l in r){const g=[],h=r[l];for(let u=0,d=h.length;u<d;u++)g.push(h[u].clone(t));this.morphAttributes[l]=g}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,g=a.length;l<g;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eo=new rt,An=new Ar,Bi=new ls,To=new b,Fn=new b,kn=new b,Gn=new b,Hs=new b,Ri=new b,ji=new Me,Pi=new Me,Fi=new Me,yo=new b,_o=new b,Co=new b,ki=new b,Gi=new b;class Ft extends Nt{constructor(e=new Ht,t=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ri.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const g=o[c],h=r[c];g!==0&&(Hs.fromBufferAttribute(h,e),a?Ri.addScaledVector(Hs,g):Ri.addScaledVector(Hs.sub(t),g))}t.add(Ri)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bi.copy(n.boundingSphere),Bi.applyMatrix4(r),An.copy(e.ray).recast(e.near),!(Bi.containsPoint(An.origin)===!1&&(An.intersectSphere(Bi,To)===null||An.origin.distanceToSquared(To)>(e.far-e.near)**2))&&(Eo.copy(r).invert(),An.copy(e.ray).applyMatrix4(Eo),!(n.boundingBox!==null&&An.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,An)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,g=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let I=0,p=u.length;I<p;I++){const M=u[I],f=a[M.materialIndex],T=Math.max(M.start,d.start),A=Math.min(o.count,Math.min(M.start+M.count,d.start+d.count));for(let x=T,_=A;x<_;x+=3){const v=o.getX(x),w=o.getX(x+1),R=o.getX(x+2);s=Hi(this,f,e,n,l,g,h,v,w,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=M.materialIndex,t.push(s))}}else{const I=Math.max(0,d.start),p=Math.min(o.count,d.start+d.count);for(let M=I,f=p;M<f;M+=3){const T=o.getX(M),A=o.getX(M+1),x=o.getX(M+2);s=Hi(this,a,e,n,l,g,h,T,A,x),s&&(s.faceIndex=Math.floor(M/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let I=0,p=u.length;I<p;I++){const M=u[I],f=a[M.materialIndex],T=Math.max(M.start,d.start),A=Math.min(c.count,Math.min(M.start+M.count,d.start+d.count));for(let x=T,_=A;x<_;x+=3){const v=x,w=x+1,R=x+2;s=Hi(this,f,e,n,l,g,h,v,w,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=M.materialIndex,t.push(s))}}else{const I=Math.max(0,d.start),p=Math.min(c.count,d.start+d.count);for(let M=I,f=p;M<f;M+=3){const T=M,A=M+1,x=M+2;s=Hi(this,a,e,n,l,g,h,T,A,x),s&&(s.faceIndex=Math.floor(M/3),t.push(s))}}}}function Ml(i,e,t,n,s,r,a,o){let c;if(e.side===xt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===fn,o),c===null)return null;Gi.copy(o),Gi.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Gi);return l<t.near||l>t.far?null:{distance:l,point:Gi.clone(),object:i}}function Hi(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Fn),i.getVertexPosition(c,kn),i.getVertexPosition(l,Gn);const g=Ml(i,e,t,n,Fn,kn,Gn,ki);if(g){s&&(ji.fromBufferAttribute(s,o),Pi.fromBufferAttribute(s,c),Fi.fromBufferAttribute(s,l),g.uv=Ut.getInterpolation(ki,Fn,kn,Gn,ji,Pi,Fi,new Me)),r&&(ji.fromBufferAttribute(r,o),Pi.fromBufferAttribute(r,c),Fi.fromBufferAttribute(r,l),g.uv1=Ut.getInterpolation(ki,Fn,kn,Gn,ji,Pi,Fi,new Me),g.uv2=g.uv1),a&&(yo.fromBufferAttribute(a,o),_o.fromBufferAttribute(a,c),Co.fromBufferAttribute(a,l),g.normal=Ut.getInterpolation(ki,Fn,kn,Gn,yo,_o,Co,new b),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new b,materialIndex:0};Ut.getNormal(Fn,kn,Gn,h.normal),g.face=h}return g}class Si extends Ht{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],g=[],h=[];let u=0,d=0;I("z","y","x",-1,-1,n,t,e,a,r,0),I("z","y","x",1,-1,n,t,-e,a,r,1),I("x","z","y",1,1,e,n,t,s,a,2),I("x","z","y",1,-1,e,n,-t,s,a,3),I("x","y","z",1,-1,e,t,n,s,r,4),I("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(g,3)),this.setAttribute("uv",new Gt(h,2));function I(p,M,f,T,A,x,_,v,w,R,m){const E=x/w,G=_/R,Z=x/2,K=_/2,z=v/2,k=w+1,Q=R+1;let H=0,se=0;const W=new b;for(let V=0;V<Q;V++){const O=V*G-K;for(let j=0;j<k;j++){const ge=j*E-Z;W[p]=ge*T,W[M]=O*A,W[f]=z,l.push(W.x,W.y,W.z),W[p]=0,W[M]=0,W[f]=v>0?1:-1,g.push(W.x,W.y,W.z),h.push(j/w),h.push(1-V/R),H+=1}}for(let V=0;V<R;V++)for(let O=0;O<w;O++){const j=u+O+k*V,ge=u+O+k*(V+1),fe=u+(O+1)+k*(V+1),pe=u+(O+1)+k*V;c.push(j,ge,pe),c.push(ge,fe,pe),se+=6}o.addGroup(d,se,m),d+=se,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ti(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function pt(i){const e={};for(let t=0;t<i.length;t++){const n=ti(i[t]);for(const s in n)e[s]=n[s]}return e}function dl(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ya(i){return i.getRenderTarget()===null?i.outputColorSpace:We.workingColorSpace}const Il={clone:ti,merge:pt};var pl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Al=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pl,this.fragmentShader=Al,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ti(e.uniforms),this.uniformsGroups=dl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _a extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=en}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vt extends _a{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ys*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hn=-90,Yn=1;class Dl extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vt(Hn,Yn,e,t);s.layers=this.layers,this.add(s);const r=new vt(Hn,Yn,e,t);r.layers=this.layers,this.add(r);const a=new vt(Hn,Yn,e,t);a.layers=this.layers,this.add(a);const o=new vt(Hn,Yn,e,t);o.layers=this.layers,this.add(o);const c=new vt(Hn,Yn,e,t);c.layers=this.layers,this.add(c);const l=new vt(Hn,Yn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===en)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,g]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),I=e.xr.enabled;e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5,s),e.render(t,g),e.setRenderTarget(h,u,d),e.xr.enabled=I,n.texture.needsPMREMUpdate=!0}}class Ca extends yt{constructor(e,t,n,s,r,a,o,c,l,g){e=e!==void 0?e:[],t=t!==void 0?t:Kn,super(e,t,n,s,r,a,o,c,l,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ml extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(ui("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yn?lt:zt),this.texture=new Ca(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Si(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xt,blending:gn});r.uniforms.tEquirect.value=t;const a=new Ft(s,r),o=t.minFilter;return t.minFilter===di&&(t.minFilter=wt),new Dl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Ys=new b,xl=new b,Nl=new Pe;class mn{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ys.subVectors(n,t).cross(xl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ys),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nl.getNormalMatrix(e),s=this.coplanarPoint(Ys).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new ls,Yi=new b;class wa{constructor(e=new mn,t=new mn,n=new mn,s=new mn,r=new mn,a=new mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=en){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],g=s[5],h=s[6],u=s[7],d=s[8],I=s[9],p=s[10],M=s[11],f=s[12],T=s[13],A=s[14],x=s[15];if(n[0].setComponents(c-r,u-l,M-d,x-f).normalize(),n[1].setComponents(c+r,u+l,M+d,x+f).normalize(),n[2].setComponents(c+a,u+g,M+I,x+T).normalize(),n[3].setComponents(c-a,u-g,M-I,x-T).normalize(),n[4].setComponents(c-o,u-h,M-p,x-A).normalize(),t===en)n[5].setComponents(c+o,u+h,M+p,x+A).normalize();else if(t===rs)n[5].setComponents(o,h,p,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(e){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Yi.x=s.normal.x>0?e.max.x:e.min.x,Yi.y=s.normal.y>0?e.max.y:e.min.y,Yi.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function va(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Sl(i,e){const t=e.isWebGL2,n=new WeakMap;function s(l,g){const h=l.array,u=l.usage,d=i.createBuffer();i.bindBuffer(g,d),i.bufferData(g,h,u),l.onUploadCallback();let I;if(h instanceof Float32Array)I=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)I=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else I=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)I=i.SHORT;else if(h instanceof Uint32Array)I=i.UNSIGNED_INT;else if(h instanceof Int32Array)I=i.INT;else if(h instanceof Int8Array)I=i.BYTE;else if(h instanceof Uint8Array)I=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)I=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:I,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,g,h){const u=g.array,d=g.updateRange;i.bindBuffer(h,l),d.count===-1?i.bufferSubData(h,0,u):(t?i.bufferSubData(h,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count):i.bufferSubData(h,d.offset*u.BYTES_PER_ELEMENT,u.subarray(d.offset,d.offset+d.count)),d.count=-1),g.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const g=n.get(l);g&&(i.deleteBuffer(g.buffer),n.delete(l))}function c(l,g){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,s(l,g)):h.version<l.version&&(r(h.buffer,l,g),h.version=l.version)}return{get:a,remove:o,update:c}}class us extends Ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,g=c+1,h=e/o,u=t/c,d=[],I=[],p=[],M=[];for(let f=0;f<g;f++){const T=f*u-a;for(let A=0;A<l;A++){const x=A*h-r;I.push(x,-T,0),p.push(0,0,1),M.push(A/o),M.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<o;T++){const A=T+l*f,x=T+l*(f+1),_=T+1+l*(f+1),v=T+1+l*f;d.push(A,x,v),d.push(x,_,v)}this.setIndex(d),this.setAttribute("position",new Gt(I,3)),this.setAttribute("normal",new Gt(p,3)),this.setAttribute("uv",new Gt(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.widthSegments,e.heightSegments)}}var El=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tl=`#ifdef USE_ALPHAHASH
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
#endif`,yl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_l=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ol=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ul=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ll=`#ifdef USE_IRIDESCENCE
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
#endif`,Bl=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rl=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Yl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ql=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Vl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Wl=`vec3 transformedNormal = objectNormal;
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
#endif`,Xl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ql=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kl="gl_FragColor = linearToOutputTexel( gl_FragColor );",$l=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
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
#endif`,rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,og=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lg=`#ifdef USE_GRADIENTMAP
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
}`,gg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mg=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
#endif`,dg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mg=`PhysicalMaterial material;
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,xg=`struct PhysicalMaterial {
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
}`,Ng=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bg=`#if defined( USE_POINTS_UV )
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
#endif`,Og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bg=`#ifdef USE_MORPHNORMALS
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
#endif`,Rg=`#ifdef USE_MORPHTARGETS
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
#endif`,jg=`#ifdef USE_MORPHTARGETS
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
#endif`,Pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yg=`#ifdef USE_NORMALMAP
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
#endif`,Qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,th=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ih=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,rh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oh=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
}`,ah=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ch=`#ifdef USE_SKINNING
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
#endif`,lh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gh=`#ifdef USE_SKINNING
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
#endif`,hh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dh=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ih=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ah=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nh=`uniform sampler2D t2D;
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
}`,Sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_h=`#include <common>
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
}`,Ch=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,wh=`#define DISTANCE
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
}`,vh=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oh=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lh=`#include <common>
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
}`,Bh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Rh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,jh=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ph=`#define MATCAP
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
}`,Fh=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,kh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gh=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Yh=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
}`,Vh=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wh=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
}`,Xh=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Jh=`uniform float size;
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
}`,qh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
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
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kh=`uniform vec3 color;
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
}`,$h=`uniform float rotation;
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
}`,eu=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,je={alphahash_fragment:El,alphahash_pars_fragment:Tl,alphamap_fragment:yl,alphamap_pars_fragment:_l,alphatest_fragment:Cl,alphatest_pars_fragment:wl,aomap_fragment:vl,aomap_pars_fragment:zl,begin_vertex:bl,beginnormal_vertex:Ol,bsdfs:Ul,iridescence_fragment:Ll,bumpmap_pars_fragment:Bl,clipping_planes_fragment:Rl,clipping_planes_pars_fragment:jl,clipping_planes_pars_vertex:Pl,clipping_planes_vertex:Fl,color_fragment:kl,color_pars_fragment:Gl,color_pars_vertex:Hl,color_vertex:Yl,common:Ql,cube_uv_reflection_fragment:Vl,defaultnormal_vertex:Wl,displacementmap_pars_vertex:Xl,displacementmap_vertex:Jl,emissivemap_fragment:ql,emissivemap_pars_fragment:Zl,colorspace_fragment:Kl,colorspace_pars_fragment:$l,envmap_fragment:eg,envmap_common_pars_fragment:tg,envmap_pars_fragment:ng,envmap_pars_vertex:ig,envmap_physical_pars_fragment:dg,envmap_vertex:sg,fog_vertex:rg,fog_pars_vertex:og,fog_fragment:ag,fog_pars_fragment:cg,gradientmap_pars_fragment:lg,lightmap_fragment:gg,lightmap_pars_fragment:hg,lights_lambert_fragment:ug,lights_lambert_pars_fragment:fg,lights_pars_begin:Mg,lights_toon_fragment:Ig,lights_toon_pars_fragment:pg,lights_phong_fragment:Ag,lights_phong_pars_fragment:Dg,lights_physical_fragment:mg,lights_physical_pars_fragment:xg,lights_fragment_begin:Ng,lights_fragment_maps:Sg,lights_fragment_end:Eg,logdepthbuf_fragment:Tg,logdepthbuf_pars_fragment:yg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:Cg,map_fragment:wg,map_pars_fragment:vg,map_particle_fragment:zg,map_particle_pars_fragment:bg,metalnessmap_fragment:Og,metalnessmap_pars_fragment:Ug,morphcolor_vertex:Lg,morphnormal_vertex:Bg,morphtarget_pars_vertex:Rg,morphtarget_vertex:jg,normal_fragment_begin:Pg,normal_fragment_maps:Fg,normal_pars_fragment:kg,normal_pars_vertex:Gg,normal_vertex:Hg,normalmap_pars_fragment:Yg,clearcoat_normal_fragment_begin:Qg,clearcoat_normal_fragment_maps:Vg,clearcoat_pars_fragment:Wg,iridescence_pars_fragment:Xg,opaque_fragment:Jg,packing:qg,premultiplied_alpha_fragment:Zg,project_vertex:Kg,dithering_fragment:$g,dithering_pars_fragment:eh,roughnessmap_fragment:th,roughnessmap_pars_fragment:nh,shadowmap_pars_fragment:ih,shadowmap_pars_vertex:sh,shadowmap_vertex:rh,shadowmask_pars_fragment:oh,skinbase_vertex:ah,skinning_pars_vertex:ch,skinning_vertex:lh,skinnormal_vertex:gh,specularmap_fragment:hh,specularmap_pars_fragment:uh,tonemapping_fragment:fh,tonemapping_pars_fragment:Mh,transmission_fragment:dh,transmission_pars_fragment:Ih,uv_pars_fragment:ph,uv_pars_vertex:Ah,uv_vertex:Dh,worldpos_vertex:mh,background_vert:xh,background_frag:Nh,backgroundCube_vert:Sh,backgroundCube_frag:Eh,cube_vert:Th,cube_frag:yh,depth_vert:_h,depth_frag:Ch,distanceRGBA_vert:wh,distanceRGBA_frag:vh,equirect_vert:zh,equirect_frag:bh,linedashed_vert:Oh,linedashed_frag:Uh,meshbasic_vert:Lh,meshbasic_frag:Bh,meshlambert_vert:Rh,meshlambert_frag:jh,meshmatcap_vert:Ph,meshmatcap_frag:Fh,meshnormal_vert:kh,meshnormal_frag:Gh,meshphong_vert:Hh,meshphong_frag:Yh,meshphysical_vert:Qh,meshphysical_frag:Vh,meshtoon_vert:Wh,meshtoon_frag:Xh,points_vert:Jh,points_frag:qh,shadow_vert:Zh,shadow_frag:Kh,sprite_vert:$h,sprite_frag:eu},le={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},jt={basic:{uniforms:pt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:pt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:pt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:pt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:pt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:pt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:pt([le.points,le.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:pt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:pt([le.common,le.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:pt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:pt([le.sprite,le.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:pt([le.common,le.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:pt([le.lights,le.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};jt.physical={uniforms:pt([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Qi={r:0,b:0,g:0};function tu(i,e,t,n,s,r,a){const o=new Xe(0);let c=r===!0?0:1,l,g,h=null,u=0,d=null;function I(M,f){let T=!1,A=f.isScene===!0?f.background:null;A&&A.isTexture&&(A=(f.backgroundBlurriness>0?t:e).get(A)),A===null?p(o,c):A&&A.isColor&&(p(A,1),T=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),A&&(A.isCubeTexture||A.mapping===as)?(g===void 0&&(g=new Ft(new Si(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:ti(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(_,v,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(g)),g.material.uniforms.envMap.value=A,g.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,g.material.toneMapped=We.getTransfer(A.colorSpace)!==qe,(h!==A||u!==A.version||d!==i.toneMapping)&&(g.material.needsUpdate=!0,h=A,u=A.version,d=i.toneMapping),g.layers.enableAll(),M.unshift(g,g.geometry,g.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Ft(new us(2,2),new Cn({name:"BackgroundMaterial",uniforms:ti(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=We.getTransfer(A.colorSpace)!==qe,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||u!==A.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,u=A.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,f){M.getRGB(Qi,ya(i)),n.buffers.color.setClear(Qi.r,Qi.g,Qi.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(M,f=1){o.set(M),c=f,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:I}}function nu(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=M(null);let l=c,g=!1;function h(z,k,Q,H,se){let W=!1;if(a){const V=p(H,Q,k);l!==V&&(l=V,d(l.object)),W=f(z,H,Q,se),W&&T(z,H,Q,se)}else{const V=k.wireframe===!0;(l.geometry!==H.id||l.program!==Q.id||l.wireframe!==V)&&(l.geometry=H.id,l.program=Q.id,l.wireframe=V,W=!0)}se!==null&&t.update(se,i.ELEMENT_ARRAY_BUFFER),(W||g)&&(g=!1,R(z,k,Q,H),se!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(se).buffer))}function u(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(z){return n.isWebGL2?i.bindVertexArray(z):r.bindVertexArrayOES(z)}function I(z){return n.isWebGL2?i.deleteVertexArray(z):r.deleteVertexArrayOES(z)}function p(z,k,Q){const H=Q.wireframe===!0;let se=o[z.id];se===void 0&&(se={},o[z.id]=se);let W=se[k.id];W===void 0&&(W={},se[k.id]=W);let V=W[H];return V===void 0&&(V=M(u()),W[H]=V),V}function M(z){const k=[],Q=[],H=[];for(let se=0;se<s;se++)k[se]=0,Q[se]=0,H[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Q,attributeDivisors:H,object:z,attributes:{},index:null}}function f(z,k,Q,H){const se=l.attributes,W=k.attributes;let V=0;const O=Q.getAttributes();for(const j in O)if(O[j].location>=0){const fe=se[j];let pe=W[j];if(pe===void 0&&(j==="instanceMatrix"&&z.instanceMatrix&&(pe=z.instanceMatrix),j==="instanceColor"&&z.instanceColor&&(pe=z.instanceColor)),fe===void 0||fe.attribute!==pe||pe&&fe.data!==pe.data)return!0;V++}return l.attributesNum!==V||l.index!==H}function T(z,k,Q,H){const se={},W=k.attributes;let V=0;const O=Q.getAttributes();for(const j in O)if(O[j].location>=0){let fe=W[j];fe===void 0&&(j==="instanceMatrix"&&z.instanceMatrix&&(fe=z.instanceMatrix),j==="instanceColor"&&z.instanceColor&&(fe=z.instanceColor));const pe={};pe.attribute=fe,fe&&fe.data&&(pe.data=fe.data),se[j]=pe,V++}l.attributes=se,l.attributesNum=V,l.index=H}function A(){const z=l.newAttributes;for(let k=0,Q=z.length;k<Q;k++)z[k]=0}function x(z){_(z,0)}function _(z,k){const Q=l.newAttributes,H=l.enabledAttributes,se=l.attributeDivisors;Q[z]=1,H[z]===0&&(i.enableVertexAttribArray(z),H[z]=1),se[z]!==k&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,k),se[z]=k)}function v(){const z=l.newAttributes,k=l.enabledAttributes;for(let Q=0,H=k.length;Q<H;Q++)k[Q]!==z[Q]&&(i.disableVertexAttribArray(Q),k[Q]=0)}function w(z,k,Q,H,se,W,V){V===!0?i.vertexAttribIPointer(z,k,Q,se,W):i.vertexAttribPointer(z,k,Q,H,se,W)}function R(z,k,Q,H){if(n.isWebGL2===!1&&(z.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const se=H.attributes,W=Q.getAttributes(),V=k.defaultAttributeValues;for(const O in W){const j=W[O];if(j.location>=0){let ge=se[O];if(ge===void 0&&(O==="instanceMatrix"&&z.instanceMatrix&&(ge=z.instanceMatrix),O==="instanceColor"&&z.instanceColor&&(ge=z.instanceColor)),ge!==void 0){const fe=ge.normalized,pe=ge.itemSize,Te=t.get(ge);if(Te===void 0)continue;const Se=Te.buffer,Ee=Te.type,Ye=Te.bytesPerElement,Ze=n.isWebGL2===!0&&(Ee===i.INT||Ee===i.UNSIGNED_INT||ge.gpuType===ua);if(ge.isInterleavedBufferAttribute){const Ce=ge.data,C=Ce.stride,ae=ge.offset;if(Ce.isInstancedInterleavedBuffer){for(let Y=0;Y<j.locationSize;Y++)_(j.location+Y,Ce.meshPerAttribute);z.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let Y=0;Y<j.locationSize;Y++)x(j.location+Y);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Y=0;Y<j.locationSize;Y++)w(j.location+Y,pe/j.locationSize,Ee,fe,C*Ye,(ae+pe/j.locationSize*Y)*Ye,Ze)}else{if(ge.isInstancedBufferAttribute){for(let Ce=0;Ce<j.locationSize;Ce++)_(j.location+Ce,ge.meshPerAttribute);z.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ce=0;Ce<j.locationSize;Ce++)x(j.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Ce=0;Ce<j.locationSize;Ce++)w(j.location+Ce,pe/j.locationSize,Ee,fe,pe*Ye,pe/j.locationSize*Ce*Ye,Ze)}}else if(V!==void 0){const fe=V[O];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(j.location,fe);break;case 3:i.vertexAttrib3fv(j.location,fe);break;case 4:i.vertexAttrib4fv(j.location,fe);break;default:i.vertexAttrib1fv(j.location,fe)}}}}v()}function m(){Z();for(const z in o){const k=o[z];for(const Q in k){const H=k[Q];for(const se in H)I(H[se].object),delete H[se];delete k[Q]}delete o[z]}}function E(z){if(o[z.id]===void 0)return;const k=o[z.id];for(const Q in k){const H=k[Q];for(const se in H)I(H[se].object),delete H[se];delete k[Q]}delete o[z.id]}function G(z){for(const k in o){const Q=o[k];if(Q[z.id]===void 0)continue;const H=Q[z.id];for(const se in H)I(H[se].object),delete H[se];delete Q[z.id]}}function Z(){K(),g=!0,l!==c&&(l=c,d(l.object))}function K(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:K,dispose:m,releaseStatesOfGeometry:E,releaseStatesOfProgram:G,initAttributes:A,enableAttribute:x,disableUnusedAttributes:v}}function iu(i,e,t,n){const s=n.isWebGL2;let r;function a(l){r=l}function o(l,g){i.drawArrays(r,l,g),t.update(g,r,1)}function c(l,g,h){if(h===0)return;let u,d;if(s)u=i,d="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[d](r,l,g,h),t.update(g,r,h)}this.setMode=a,this.render=o,this.renderInstances=c}function su(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),g=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),I=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=u>0,x=a||e.has("OES_texture_float"),_=A&&x,v=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:g,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:I,maxAttributes:p,maxVertexUniforms:M,maxVaryings:f,maxFragmentUniforms:T,vertexTextures:A,floatFragmentTextures:x,floatVertexTextures:_,maxSamples:v}}function ru(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new mn,o=new Pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const d=h.length!==0||u||n!==0||s;return s=u,n=h.length,d},this.beginShadows=function(){r=!0,g(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=g(h,u,0)},this.setState=function(h,u,d){const I=h.clippingPlanes,p=h.clipIntersection,M=h.clipShadows,f=i.get(h);if(!s||I===null||I.length===0||r&&!M)r?g(null):l();else{const T=r?0:n,A=T*4;let x=f.clippingState||null;c.value=x,x=g(I,u,A,d);for(let _=0;_!==A;++_)x[_]=t[_];f.clippingState=x,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(h,u,d,I){const p=h!==null?h.length:0;let M=null;if(p!==0){if(M=c.value,I!==!0||M===null){const f=d+p*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(M===null||M.length<f)&&(M=new Float32Array(f));for(let A=0,x=d;A!==p;++A,x+=4)a.copy(h[A]).applyMatrix4(T,o),a.normal.toArray(M,x),M[x+3]=a.constant}c.value=M,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,M}}function ou(i){let e=new WeakMap;function t(a,o){return o===nr?a.mapping=Kn:o===ir&&(a.mapping=$n),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===nr||o===ir)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new ml(c.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class au extends _a{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=g*this.view.offsetY,c=o-g*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wn=4,wo=[.125,.215,.35,.446,.526,.582],Sn=20,Qs=new au,vo=new Xe;let Vs=null;const xn=(1+Math.sqrt(5))/2,Qn=1/xn,zo=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,xn,Qn),new b(0,xn,-Qn),new b(Qn,0,xn),new b(-Qn,0,xn),new b(xn,Qn,0),new b(-xn,Qn,0)];class bo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Vs=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vs),e.scissorTest=!1,Vi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kn||e.mapping===$n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Ii,format:Bt,colorSpace:tn,depthBuffer:!1},s=Oo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cu(r)),this._blurMaterial=lu(r,e,t)}return s}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,Qs)}_sceneToCubeUV(e,t,n,s){const o=new vt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],g=this._renderer,h=g.autoClear,u=g.toneMapping;g.getClearColor(vo),g.toneMapping=hn,g.autoClear=!1;const d=new hs({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),I=new Ft(new Si,d);let p=!1;const M=e.background;M?M.isColor&&(d.color.copy(M),e.background=null,p=!0):(d.color.copy(vo),p=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):T===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const A=this._cubeSize;Vi(s,T*A,f>2?A:0,A,A),g.setRenderTarget(s),p&&g.render(I,o),g.render(e,o)}I.geometry.dispose(),I.material.dispose(),g.toneMapping=u,g.autoClear=h,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Kn||e.mapping===$n;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Vi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Qs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=zo[(s-1)%zo.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,h=new Ft(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[n]-1,I=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Sn-1),p=r/I,M=isFinite(r)?1+Math.floor(g*p):Sn;M>Sn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Sn}`);const f=[];let T=0;for(let w=0;w<Sn;++w){const R=w/p,m=Math.exp(-R*R/2);f.push(m),w===0?T+=m:w<M&&(T+=2*m)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;u.envMap.value=e.texture,u.samples.value=M,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:A}=this;u.dTheta.value=I,u.mipInt.value=A-n;const x=this._sizeLods[s],_=3*x*(s>A-Wn?s-A+Wn:0),v=4*(this._cubeSize-x);Vi(t,_,v,3*x,2*x),c.setRenderTarget(t),c.render(h,Qs)}}function cu(i){const e=[],t=[],n=[];let s=i;const r=i-Wn+1+wo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Wn?c=wo[a-i+Wn-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),g=-l,h=1+l,u=[g,g,h,g,h,h,g,g,h,h,g,h],d=6,I=6,p=3,M=2,f=1,T=new Float32Array(p*I*d),A=new Float32Array(M*I*d),x=new Float32Array(f*I*d);for(let v=0;v<d;v++){const w=v%3*2/3-1,R=v>2?0:-1,m=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];T.set(m,p*I*v),A.set(u,M*I*v);const E=[v,v,v,v,v,v];x.set(E,f*I*v)}const _=new Ht;_.setAttribute("position",new kt(T,p)),_.setAttribute("uv",new kt(A,M)),_.setAttribute("faceIndex",new kt(x,f)),e.push(_),s>Wn&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Oo(i,e,t){const n=new _n(i,e,t);return n.texture.mapping=as,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function lu(i,e,t){const n=new Float32Array(Sn),s=new b(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Sn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mr(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Uo(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mr(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Lo(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function mr(){return`

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
	`}function gu(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===nr||c===ir,g=c===Kn||c===$n;if(l||g)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new bo(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||g&&h&&s(h)){t===null&&(t=new bo(i));const u=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let g=0;g<l;g++)o[g]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function hu(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function uu(i,e,t,n){const s={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const I in u.attributes)e.remove(u.attributes[I]);for(const I in u.morphAttributes){const p=u.morphAttributes[I];for(let M=0,f=p.length;M<f;M++)e.remove(p[M])}u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(h){const u=h.attributes;for(const I in u)e.update(u[I],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const I in d){const p=d[I];for(let M=0,f=p.length;M<f;M++)e.update(p[M],i.ARRAY_BUFFER)}}function l(h){const u=[],d=h.index,I=h.attributes.position;let p=0;if(d!==null){const T=d.array;p=d.version;for(let A=0,x=T.length;A<x;A+=3){const _=T[A+0],v=T[A+1],w=T[A+2];u.push(_,v,v,w,w,_)}}else if(I!==void 0){const T=I.array;p=I.version;for(let A=0,x=T.length/3-1;A<x;A+=3){const _=A+0,v=A+1,w=A+2;u.push(_,v,v,w,w,_)}}else return;const M=new(Da(u)?Ta:Ea)(u,1);M.version=p;const f=r.get(h);f&&e.remove(f),r.set(h,M)}function g(h){const u=r.get(h);if(u){const d=h.index;d!==null&&u.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:g}}function fu(i,e,t,n){const s=n.isWebGL2;let r;function a(u){r=u}let o,c;function l(u){o=u.type,c=u.bytesPerElement}function g(u,d){i.drawElements(r,d,o,u*c),t.update(d,r,1)}function h(u,d,I){if(I===0)return;let p,M;if(s)p=i,M="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),M="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[M](r,d,o,u*c,I),t.update(d,r,I)}this.setMode=a,this.setIndex=l,this.render=g,this.renderInstances=h}function Mu(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function du(i,e){return i[0]-e[0]}function Iu(i,e){return Math.abs(e[1])-Math.abs(i[1])}function pu(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new gt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,g,h){const u=l.morphTargetInfluences;if(e.isWebGL2===!0){const I=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,p=I!==void 0?I.length:0;let M=r.get(g);if(M===void 0||M.count!==p){let k=function(){K.dispose(),r.delete(g),g.removeEventListener("dispose",k)};var d=k;M!==void 0&&M.texture.dispose();const A=g.morphAttributes.position!==void 0,x=g.morphAttributes.normal!==void 0,_=g.morphAttributes.color!==void 0,v=g.morphAttributes.position||[],w=g.morphAttributes.normal||[],R=g.morphAttributes.color||[];let m=0;A===!0&&(m=1),x===!0&&(m=2),_===!0&&(m=3);let E=g.attributes.position.count*m,G=1;E>e.maxTextureSize&&(G=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const Z=new Float32Array(E*G*4*p),K=new Na(Z,E,G,p);K.type=ln,K.needsUpdate=!0;const z=m*4;for(let Q=0;Q<p;Q++){const H=v[Q],se=w[Q],W=R[Q],V=E*G*4*Q;for(let O=0;O<H.count;O++){const j=O*z;A===!0&&(a.fromBufferAttribute(H,O),Z[V+j+0]=a.x,Z[V+j+1]=a.y,Z[V+j+2]=a.z,Z[V+j+3]=0),x===!0&&(a.fromBufferAttribute(se,O),Z[V+j+4]=a.x,Z[V+j+5]=a.y,Z[V+j+6]=a.z,Z[V+j+7]=0),_===!0&&(a.fromBufferAttribute(W,O),Z[V+j+8]=a.x,Z[V+j+9]=a.y,Z[V+j+10]=a.z,Z[V+j+11]=W.itemSize===4?a.w:1)}}M={count:p,texture:K,size:new Me(E,G)},r.set(g,M),g.addEventListener("dispose",k)}let f=0;for(let A=0;A<u.length;A++)f+=u[A];const T=g.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",T),h.getUniforms().setValue(i,"morphTargetInfluences",u),h.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}else{const I=u===void 0?0:u.length;let p=n[g.id];if(p===void 0||p.length!==I){p=[];for(let x=0;x<I;x++)p[x]=[x,0];n[g.id]=p}for(let x=0;x<I;x++){const _=p[x];_[0]=x,_[1]=u[x]}p.sort(Iu);for(let x=0;x<8;x++)x<I&&p[x][1]?(o[x][0]=p[x][0],o[x][1]=p[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(du);const M=g.morphAttributes.position,f=g.morphAttributes.normal;let T=0;for(let x=0;x<8;x++){const _=o[x],v=_[0],w=_[1];v!==Number.MAX_SAFE_INTEGER&&w?(M&&g.getAttribute("morphTarget"+x)!==M[v]&&g.setAttribute("morphTarget"+x,M[v]),f&&g.getAttribute("morphNormal"+x)!==f[v]&&g.setAttribute("morphNormal"+x,f[v]),s[x]=w,T+=w):(M&&g.hasAttribute("morphTarget"+x)===!0&&g.deleteAttribute("morphTarget"+x),f&&g.hasAttribute("morphNormal"+x)===!0&&g.deleteAttribute("morphNormal"+x),s[x]=0)}const A=g.morphTargetsRelative?1:1-T;h.getUniforms().setValue(i,"morphTargetBaseInfluence",A),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Au(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,g=c.geometry,h=e.get(c,g);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const za=new yt,ba=new Na,Oa=new il,Ua=new Ca,Bo=[],Ro=[],jo=new Float32Array(16),Po=new Float32Array(9),Fo=new Float32Array(4);function si(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Bo[s];if(r===void 0&&(r=new Float32Array(s),Bo[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function at(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fs(i,e){let t=Ro[e];t===void 0&&(t=new Int32Array(e),Ro[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Du(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),at(t,e)}}function xu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),at(t,e)}}function Nu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),at(t,e)}}function Su(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(ot(t,n))return;Fo.set(n),i.uniformMatrix2fv(this.addr,!1,Fo),at(t,n)}}function Eu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(ot(t,n))return;Po.set(n),i.uniformMatrix3fv(this.addr,!1,Po),at(t,n)}}function Tu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(ot(t,n))return;jo.set(n),i.uniformMatrix4fv(this.addr,!1,jo),at(t,n)}}function yu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _u(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),at(t,e)}}function Cu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),at(t,e)}}function wu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),at(t,e)}}function vu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),at(t,e)}}function bu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),at(t,e)}}function Ou(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),at(t,e)}}function Uu(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||za,s)}function Lu(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Oa,s)}function Bu(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ua,s)}function Ru(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ba,s)}function ju(i){switch(i){case 5126:return Du;case 35664:return mu;case 35665:return xu;case 35666:return Nu;case 35674:return Su;case 35675:return Eu;case 35676:return Tu;case 5124:case 35670:return yu;case 35667:case 35671:return _u;case 35668:case 35672:return Cu;case 35669:case 35673:return wu;case 5125:return vu;case 36294:return zu;case 36295:return bu;case 36296:return Ou;case 35678:case 36198:case 36298:case 36306:case 35682:return Uu;case 35679:case 36299:case 36307:return Lu;case 35680:case 36300:case 36308:case 36293:return Bu;case 36289:case 36303:case 36311:case 36292:return Ru}}function Pu(i,e){i.uniform1fv(this.addr,e)}function Fu(i,e){const t=si(e,this.size,2);i.uniform2fv(this.addr,t)}function ku(i,e){const t=si(e,this.size,3);i.uniform3fv(this.addr,t)}function Gu(i,e){const t=si(e,this.size,4);i.uniform4fv(this.addr,t)}function Hu(i,e){const t=si(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Yu(i,e){const t=si(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qu(i,e){const t=si(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vu(i,e){i.uniform1iv(this.addr,e)}function Wu(i,e){i.uniform2iv(this.addr,e)}function Xu(i,e){i.uniform3iv(this.addr,e)}function Ju(i,e){i.uniform4iv(this.addr,e)}function qu(i,e){i.uniform1uiv(this.addr,e)}function Zu(i,e){i.uniform2uiv(this.addr,e)}function Ku(i,e){i.uniform3uiv(this.addr,e)}function $u(i,e){i.uniform4uiv(this.addr,e)}function ef(i,e,t){const n=this.cache,s=e.length,r=fs(t,s);ot(n,r)||(i.uniform1iv(this.addr,r),at(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||za,r[a])}function tf(i,e,t){const n=this.cache,s=e.length,r=fs(t,s);ot(n,r)||(i.uniform1iv(this.addr,r),at(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Oa,r[a])}function nf(i,e,t){const n=this.cache,s=e.length,r=fs(t,s);ot(n,r)||(i.uniform1iv(this.addr,r),at(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ua,r[a])}function sf(i,e,t){const n=this.cache,s=e.length,r=fs(t,s);ot(n,r)||(i.uniform1iv(this.addr,r),at(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ba,r[a])}function rf(i){switch(i){case 5126:return Pu;case 35664:return Fu;case 35665:return ku;case 35666:return Gu;case 35674:return Hu;case 35675:return Yu;case 35676:return Qu;case 5124:case 35670:return Vu;case 35667:case 35671:return Wu;case 35668:case 35672:return Xu;case 35669:case 35673:return Ju;case 5125:return qu;case 36294:return Zu;case 36295:return Ku;case 36296:return $u;case 35678:case 36198:case 36298:case 36306:case 35682:return ef;case 35679:case 36299:case 36307:return tf;case 35680:case 36300:case 36308:case 36293:return nf;case 36289:case 36303:case 36311:case 36292:return sf}}class of{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ju(t.type)}}class af{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=rf(t.type)}}class cf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ws=/(\w+)(\])?(\[|\.)?/g;function ko(i,e){i.seq.push(e),i.map[e.id]=e}function lf(i,e,t){const n=i.name,s=n.length;for(Ws.lastIndex=0;;){const r=Ws.exec(n),a=Ws.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ko(t,l===void 0?new of(o,i,e):new af(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new cf(o),ko(t,h)),t=h}}}class es{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);lf(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Go(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let gf=0;function hf(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function uf(i){const e=We.getPrimaries(We.workingColorSpace),t=We.getPrimaries(i);let n;switch(e===t?n="":e===ss&&t===is?n="LinearDisplayP3ToLinearSRGB":e===is&&t===ss&&(n="LinearSRGBToLinearDisplayP3"),i){case tn:case cs:return[n,"LinearTransferOETF"];case lt:case pr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ho(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+hf(i.getShaderSource(e),a)}else return s}function ff(i,e){const t=uf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Mf(i,e){let t;switch(e){case Sc:t="Linear";break;case Ec:t="Reinhard";break;case Tc:t="OptimizedCineon";break;case yc:t="ACESFilmic";break;case _c:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function df(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hi).join(`
`)}function If(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function hi(i){return i!==""}function Yo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Af=/^[ \t]*#include +<([\w\d./]+)>/gm;function lr(i){return i.replace(Af,mf)}const Df=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mf(i,e){let t=je[e];if(t===void 0){const n=Df.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lr(t)}const xf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vo(i){return i.replace(xf,Nf)}function Nf(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wo(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===aa?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===tc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$t&&(e="SHADOWMAP_TYPE_VSM"),e}function Ef(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Kn:case $n:e="ENVMAP_TYPE_CUBE";break;case as:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $n:e="ENVMAP_MODE_REFRACTION";break}return e}function yf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ga:e="ENVMAP_BLENDING_MULTIPLY";break;case xc:e="ENVMAP_BLENDING_MIX";break;case Nc:e="ENVMAP_BLENDING_ADD";break}return e}function _f(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cf(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Sf(t),l=Ef(t),g=Tf(t),h=yf(t),u=_f(t),d=t.isWebGL2?"":df(t),I=If(r),p=s.createProgram();let M,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,I].filter(hi).join(`
`),M.length>0&&(M+=`
`),f=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,I].filter(hi).join(`
`),f.length>0&&(f+=`
`)):(M=[Wo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,I,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hi).join(`
`),f=[d,Wo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,I,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+g:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?je.tonemapping_pars_fragment:"",t.toneMapping!==hn?Mf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,ff("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hi).join(`
`)),a=lr(a),a=Yo(a,t),a=Qo(a,t),o=lr(o),o=Yo(o,t),o=Qo(o,t),a=Vo(a),o=Vo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,M=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,f=["#define varying in",t.glslVersion===go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const A=T+M+a,x=T+f+o,_=Go(s,s.VERTEX_SHADER,A),v=Go(s,s.FRAGMENT_SHADER,x);if(s.attachShader(p,_),s.attachShader(p,v),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p),i.debug.checkShaderErrors){const m=s.getProgramInfoLog(p).trim(),E=s.getShaderInfoLog(_).trim(),G=s.getShaderInfoLog(v).trim();let Z=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,_,v);else{const z=Ho(s,_,"vertex"),k=Ho(s,v,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+m+`
`+z+`
`+k)}else m!==""?console.warn("THREE.WebGLProgram: Program Info Log:",m):(E===""||G==="")&&(K=!1);K&&(this.diagnostics={runnable:Z,programLog:m,vertexShader:{log:E,prefix:M},fragmentShader:{log:G,prefix:f}})}s.deleteShader(_),s.deleteShader(v);let w;this.getUniforms=function(){return w===void 0&&(w=new es(s,p)),w};let R;return this.getAttributes=function(){return R===void 0&&(R=pf(s,p)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=v,this}let wf=0;class vf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zf(e),t.set(e,n)),n}}class zf{constructor(e){this.id=wf++,this.code=e,this.usedTimes=0}}function bf(i,e,t,n,s,r,a){const o=new Dr,c=new vf,l=[],g=s.isWebGL2,h=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const I={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(m){return m===0?"uv":`uv${m}`}function M(m,E,G,Z,K){const z=Z.fog,k=K.geometry,Q=m.isMeshStandardMaterial?Z.environment:null,H=(m.isMeshStandardMaterial?t:e).get(m.envMap||Q),se=H&&H.mapping===as?H.image.height:null,W=I[m.type];m.precision!==null&&(d=s.getMaxPrecision(m.precision),d!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",d,"instead."));const V=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,O=V!==void 0?V.length:0;let j=0;k.morphAttributes.position!==void 0&&(j=1),k.morphAttributes.normal!==void 0&&(j=2),k.morphAttributes.color!==void 0&&(j=3);let ge,fe,pe,Te;if(W){const Je=jt[W];ge=Je.vertexShader,fe=Je.fragmentShader}else ge=m.vertexShader,fe=m.fragmentShader,c.update(m),pe=c.getVertexShaderID(m),Te=c.getFragmentShaderID(m);const Se=i.getRenderTarget(),Ee=K.isInstancedMesh===!0,Ye=!!m.map,Ze=!!m.matcap,Ce=!!H,C=!!m.aoMap,ae=!!m.lightMap,Y=!!m.bumpMap,ne=!!m.normalMap,X=!!m.displacementMap,xe=!!m.emissiveMap,de=!!m.metalnessMap,De=!!m.roughnessMap,Ue=m.anisotropy>0,Ge=m.clearcoat>0,$e=m.iridescence>0,S=m.sheen>0,D=m.transmission>0,B=Ue&&!!m.anisotropyMap,ee=Ge&&!!m.clearcoatMap,q=Ge&&!!m.clearcoatNormalMap,te=Ge&&!!m.clearcoatRoughnessMap,me=$e&&!!m.iridescenceMap,re=$e&&!!m.iridescenceThicknessMap,ue=S&&!!m.sheenColorMap,ve=S&&!!m.sheenRoughnessMap,Qe=!!m.specularMap,ie=!!m.specularColorMap,Ve=!!m.specularIntensityMap,Le=D&&!!m.transmissionMap,ze=D&&!!m.thicknessMap,_e=!!m.gradientMap,y=!!m.alphaMap,ce=m.alphaTest>0,oe=!!m.alphaHash,Ie=!!m.extensions,he=!!k.attributes.uv1,J=!!k.attributes.uv2,Ne=!!k.attributes.uv3;let Be=hn;return m.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Be=i.toneMapping),{isWebGL2:g,shaderID:W,shaderType:m.type,shaderName:m.name,vertexShader:ge,fragmentShader:fe,defines:m.defines,customVertexShaderID:pe,customFragmentShaderID:Te,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:d,instancing:Ee,instancingColor:Ee&&K.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:tn,map:Ye,matcap:Ze,envMap:Ce,envMapMode:Ce&&H.mapping,envMapCubeUVHeight:se,aoMap:C,lightMap:ae,bumpMap:Y,normalMap:ne,displacementMap:u&&X,emissiveMap:xe,normalMapObjectSpace:ne&&m.normalMapType===kc,normalMapTangentSpace:ne&&m.normalMapType===Fc,metalnessMap:de,roughnessMap:De,anisotropy:Ue,anisotropyMap:B,clearcoat:Ge,clearcoatMap:ee,clearcoatNormalMap:q,clearcoatRoughnessMap:te,iridescence:$e,iridescenceMap:me,iridescenceThicknessMap:re,sheen:S,sheenColorMap:ue,sheenRoughnessMap:ve,specularMap:Qe,specularColorMap:ie,specularIntensityMap:Ve,transmission:D,transmissionMap:Le,thicknessMap:ze,gradientMap:_e,opaque:m.transparent===!1&&m.blending===Jn,alphaMap:y,alphaTest:ce,alphaHash:oe,combine:m.combine,mapUv:Ye&&p(m.map.channel),aoMapUv:C&&p(m.aoMap.channel),lightMapUv:ae&&p(m.lightMap.channel),bumpMapUv:Y&&p(m.bumpMap.channel),normalMapUv:ne&&p(m.normalMap.channel),displacementMapUv:X&&p(m.displacementMap.channel),emissiveMapUv:xe&&p(m.emissiveMap.channel),metalnessMapUv:de&&p(m.metalnessMap.channel),roughnessMapUv:De&&p(m.roughnessMap.channel),anisotropyMapUv:B&&p(m.anisotropyMap.channel),clearcoatMapUv:ee&&p(m.clearcoatMap.channel),clearcoatNormalMapUv:q&&p(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&p(m.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&p(m.iridescenceMap.channel),iridescenceThicknessMapUv:re&&p(m.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&p(m.sheenColorMap.channel),sheenRoughnessMapUv:ve&&p(m.sheenRoughnessMap.channel),specularMapUv:Qe&&p(m.specularMap.channel),specularColorMapUv:ie&&p(m.specularColorMap.channel),specularIntensityMapUv:Ve&&p(m.specularIntensityMap.channel),transmissionMapUv:Le&&p(m.transmissionMap.channel),thicknessMapUv:ze&&p(m.thicknessMap.channel),alphaMapUv:y&&p(m.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ne||Ue),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:he,vertexUv2s:J,vertexUv3s:Ne,pointsUvs:K.isPoints===!0&&!!k.attributes.uv&&(Ye||y),fog:!!z,useFog:m.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:K.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:j,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ye&&m.map.isVideoTexture===!0&&We.getTransfer(m.map.colorSpace)===qe,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Pt,flipSided:m.side===xt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:Ie&&m.extensions.derivatives===!0,extensionFragDepth:Ie&&m.extensions.fragDepth===!0,extensionDrawBuffers:Ie&&m.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ie&&m.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:g||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||n.has("EXT_shader_texture_lod"),customProgramCacheKey:m.customProgramCacheKey()}}function f(m){const E=[];if(m.shaderID?E.push(m.shaderID):(E.push(m.customVertexShaderID),E.push(m.customFragmentShaderID)),m.defines!==void 0)for(const G in m.defines)E.push(G),E.push(m.defines[G]);return m.isRawShaderMaterial===!1&&(T(E,m),A(E,m),E.push(i.outputColorSpace)),E.push(m.customProgramCacheKey),E.join()}function T(m,E){m.push(E.precision),m.push(E.outputColorSpace),m.push(E.envMapMode),m.push(E.envMapCubeUVHeight),m.push(E.mapUv),m.push(E.alphaMapUv),m.push(E.lightMapUv),m.push(E.aoMapUv),m.push(E.bumpMapUv),m.push(E.normalMapUv),m.push(E.displacementMapUv),m.push(E.emissiveMapUv),m.push(E.metalnessMapUv),m.push(E.roughnessMapUv),m.push(E.anisotropyMapUv),m.push(E.clearcoatMapUv),m.push(E.clearcoatNormalMapUv),m.push(E.clearcoatRoughnessMapUv),m.push(E.iridescenceMapUv),m.push(E.iridescenceThicknessMapUv),m.push(E.sheenColorMapUv),m.push(E.sheenRoughnessMapUv),m.push(E.specularMapUv),m.push(E.specularColorMapUv),m.push(E.specularIntensityMapUv),m.push(E.transmissionMapUv),m.push(E.thicknessMapUv),m.push(E.combine),m.push(E.fogExp2),m.push(E.sizeAttenuation),m.push(E.morphTargetsCount),m.push(E.morphAttributeCount),m.push(E.numDirLights),m.push(E.numPointLights),m.push(E.numSpotLights),m.push(E.numSpotLightMaps),m.push(E.numHemiLights),m.push(E.numRectAreaLights),m.push(E.numDirLightShadows),m.push(E.numPointLightShadows),m.push(E.numSpotLightShadows),m.push(E.numSpotLightShadowsWithMaps),m.push(E.numLightProbes),m.push(E.shadowMapType),m.push(E.toneMapping),m.push(E.numClippingPlanes),m.push(E.numClipIntersection),m.push(E.depthPacking)}function A(m,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),m.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),m.push(o.mask)}function x(m){const E=I[m.type];let G;if(E){const Z=jt[E];G=Il.clone(Z.uniforms)}else G=m.uniforms;return G}function _(m,E){let G;for(let Z=0,K=l.length;Z<K;Z++){const z=l[Z];if(z.cacheKey===E){G=z,++G.usedTimes;break}}return G===void 0&&(G=new Cf(i,E,m,r),l.push(G)),G}function v(m){if(--m.usedTimes===0){const E=l.indexOf(m);l[E]=l[l.length-1],l.pop(),m.destroy()}}function w(m){c.remove(m)}function R(){c.dispose()}return{getParameters:M,getProgramCacheKey:f,getUniforms:x,acquireProgram:_,releaseProgram:v,releaseShaderCache:w,programs:l,dispose:R}}function Of(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Uf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jo(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,u,d,I,p,M){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:d,groupOrder:I,renderOrder:h.renderOrder,z:p,group:M},i[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=d,f.groupOrder=I,f.renderOrder=h.renderOrder,f.z=p,f.group=M),e++,f}function o(h,u,d,I,p,M){const f=a(h,u,d,I,p,M);d.transmission>0?n.push(f):d.transparent===!0?s.push(f):t.push(f)}function c(h,u,d,I,p,M){const f=a(h,u,d,I,p,M);d.transmission>0?n.unshift(f):d.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,u){t.length>1&&t.sort(h||Uf),n.length>1&&n.sort(u||Xo),s.length>1&&s.sort(u||Xo)}function g(){for(let h=e,u=i.length;h<u;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:g,sort:l}}function Lf(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Jo,i.set(n,[a])):s>=r.length?(a=new Jo,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Xe};break;case"SpotLight":t={position:new b,direction:new b,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new b,halfWidth:new b,halfHeight:new b};break}return i[e.id]=t,t}}}function Rf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let jf=0;function Pf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ff(i,e){const t=new Bf,n=Rf(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new b);const r=new b,a=new rt,o=new rt;function c(g,h){let u=0,d=0,I=0;for(let Z=0;Z<9;Z++)s.probe[Z].set(0,0,0);let p=0,M=0,f=0,T=0,A=0,x=0,_=0,v=0,w=0,R=0,m=0;g.sort(Pf);const E=h===!0?Math.PI:1;for(let Z=0,K=g.length;Z<K;Z++){const z=g[Z],k=z.color,Q=z.intensity,H=z.distance,se=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)u+=k.r*Q*E,d+=k.g*Q*E,I+=k.b*Q*E;else if(z.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(z.sh.coefficients[W],Q);m++}else if(z.isDirectionalLight){const W=t.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity*E),z.castShadow){const V=z.shadow,O=n.get(z);O.shadowBias=V.bias,O.shadowNormalBias=V.normalBias,O.shadowRadius=V.radius,O.shadowMapSize=V.mapSize,s.directionalShadow[p]=O,s.directionalShadowMap[p]=se,s.directionalShadowMatrix[p]=z.shadow.matrix,x++}s.directional[p]=W,p++}else if(z.isSpotLight){const W=t.get(z);W.position.setFromMatrixPosition(z.matrixWorld),W.color.copy(k).multiplyScalar(Q*E),W.distance=H,W.coneCos=Math.cos(z.angle),W.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),W.decay=z.decay,s.spot[f]=W;const V=z.shadow;if(z.map&&(s.spotLightMap[w]=z.map,w++,V.updateMatrices(z),z.castShadow&&R++),s.spotLightMatrix[f]=V.matrix,z.castShadow){const O=n.get(z);O.shadowBias=V.bias,O.shadowNormalBias=V.normalBias,O.shadowRadius=V.radius,O.shadowMapSize=V.mapSize,s.spotShadow[f]=O,s.spotShadowMap[f]=se,v++}f++}else if(z.isRectAreaLight){const W=t.get(z);W.color.copy(k).multiplyScalar(Q),W.halfWidth.set(z.width*.5,0,0),W.halfHeight.set(0,z.height*.5,0),s.rectArea[T]=W,T++}else if(z.isPointLight){const W=t.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity*E),W.distance=z.distance,W.decay=z.decay,z.castShadow){const V=z.shadow,O=n.get(z);O.shadowBias=V.bias,O.shadowNormalBias=V.normalBias,O.shadowRadius=V.radius,O.shadowMapSize=V.mapSize,O.shadowCameraNear=V.camera.near,O.shadowCameraFar=V.camera.far,s.pointShadow[M]=O,s.pointShadowMap[M]=se,s.pointShadowMatrix[M]=z.shadow.matrix,_++}s.point[M]=W,M++}else if(z.isHemisphereLight){const W=t.get(z);W.skyColor.copy(z.color).multiplyScalar(Q*E),W.groundColor.copy(z.groundColor).multiplyScalar(Q*E),s.hemi[A]=W,A++}}T>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=le.LTC_FLOAT_1,s.rectAreaLTC2=le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=le.LTC_HALF_1,s.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=d,s.ambient[2]=I;const G=s.hash;(G.directionalLength!==p||G.pointLength!==M||G.spotLength!==f||G.rectAreaLength!==T||G.hemiLength!==A||G.numDirectionalShadows!==x||G.numPointShadows!==_||G.numSpotShadows!==v||G.numSpotMaps!==w||G.numLightProbes!==m)&&(s.directional.length=p,s.spot.length=f,s.rectArea.length=T,s.point.length=M,s.hemi.length=A,s.directionalShadow.length=x,s.directionalShadowMap.length=x,s.pointShadow.length=_,s.pointShadowMap.length=_,s.spotShadow.length=v,s.spotShadowMap.length=v,s.directionalShadowMatrix.length=x,s.pointShadowMatrix.length=_,s.spotLightMatrix.length=v+w-R,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=R,s.numLightProbes=m,G.directionalLength=p,G.pointLength=M,G.spotLength=f,G.rectAreaLength=T,G.hemiLength=A,G.numDirectionalShadows=x,G.numPointShadows=_,G.numSpotShadows=v,G.numSpotMaps=w,G.numLightProbes=m,s.version=jf++)}function l(g,h){let u=0,d=0,I=0,p=0,M=0;const f=h.matrixWorldInverse;for(let T=0,A=g.length;T<A;T++){const x=g[T];if(x.isDirectionalLight){const _=s.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(f),u++}else if(x.isSpotLight){const _=s.spot[I];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(f),I++}else if(x.isRectAreaLight){const _=s.rectArea[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(f),o.identity(),a.copy(x.matrixWorld),a.premultiply(f),o.extractRotation(a),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const _=s.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){const _=s.hemi[M];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(f),M++}}}return{setup:c,setupView:l,state:s}}function qo(i,e){const t=new Ff(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function kf(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new qo(i,e),t.set(r,[c])):a>=o.length?(c=new qo(i,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:n,dispose:s}}class Gf extends Ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hf extends Ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qf=`uniform sampler2D shadow_pass;
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
}`;function Vf(i,e,t){let n=new wa;const s=new Me,r=new Me,a=new gt,o=new Gf({depthPacking:Pc}),c=new Hf,l={},g=t.maxTextureSize,h={[fn]:xt,[xt]:fn,[Pt]:Pt},u=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Yf,fragmentShader:Qf}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const I=new Ht;I.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ft(I,u),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=aa;let f=this.type;this.render=function(_,v,w){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||_.length===0)return;const R=i.getRenderTarget(),m=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),G=i.state;G.setBlending(gn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Z=f!==$t&&this.type===$t,K=f===$t&&this.type!==$t;for(let z=0,k=_.length;z<k;z++){const Q=_[z],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const se=H.getFrameExtents();if(s.multiply(se),r.copy(H.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(r.x=Math.floor(g/se.x),s.x=r.x*se.x,H.mapSize.x=r.x),s.y>g&&(r.y=Math.floor(g/se.y),s.y=r.y*se.y,H.mapSize.y=r.y)),H.map===null||Z===!0||K===!0){const V=this.type!==$t?{minFilter:At,magFilter:At}:{};H.map!==null&&H.map.dispose(),H.map=new _n(s.x,s.y,V),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const W=H.getViewportCount();for(let V=0;V<W;V++){const O=H.getViewport(V);a.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),G.viewport(a),H.updateMatrices(Q,V),n=H.getFrustum(),x(v,w,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===$t&&T(H,w),H.needsUpdate=!1}f=this.type,M.needsUpdate=!1,i.setRenderTarget(R,m,E)};function T(_,v){const w=e.update(p);u.defines.VSM_SAMPLES!==_.blurSamples&&(u.defines.VSM_SAMPLES=_.blurSamples,d.defines.VSM_SAMPLES=_.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new _n(s.x,s.y)),u.uniforms.shadow_pass.value=_.map.texture,u.uniforms.resolution.value=_.mapSize,u.uniforms.radius.value=_.radius,i.setRenderTarget(_.mapPass),i.clear(),i.renderBufferDirect(v,null,w,u,p,null),d.uniforms.shadow_pass.value=_.mapPass.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,i.setRenderTarget(_.map),i.clear(),i.renderBufferDirect(v,null,w,d,p,null)}function A(_,v,w,R){let m=null;const E=w.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(E!==void 0)m=E;else if(m=w.isPointLight===!0?c:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const G=m.uuid,Z=v.uuid;let K=l[G];K===void 0&&(K={},l[G]=K);let z=K[Z];z===void 0&&(z=m.clone(),K[Z]=z),m=z}if(m.visible=v.visible,m.wireframe=v.wireframe,R===$t?m.side=v.shadowSide!==null?v.shadowSide:v.side:m.side=v.shadowSide!==null?v.shadowSide:h[v.side],m.alphaMap=v.alphaMap,m.alphaTest=v.alphaTest,m.map=v.map,m.clipShadows=v.clipShadows,m.clippingPlanes=v.clippingPlanes,m.clipIntersection=v.clipIntersection,m.displacementMap=v.displacementMap,m.displacementScale=v.displacementScale,m.displacementBias=v.displacementBias,m.wireframeLinewidth=v.wireframeLinewidth,m.linewidth=v.linewidth,w.isPointLight===!0&&m.isMeshDistanceMaterial===!0){const G=i.properties.get(m);G.light=w}return m}function x(_,v,w,R,m){if(_.visible===!1)return;if(_.layers.test(v.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&m===$t)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,_.matrixWorld);const Z=e.update(_),K=_.material;if(Array.isArray(K)){const z=Z.groups;for(let k=0,Q=z.length;k<Q;k++){const H=z[k],se=K[H.materialIndex];if(se&&se.visible){const W=A(_,se,R,m);i.renderBufferDirect(w,null,Z,W,_,H)}}}else if(K.visible){const z=A(_,K,R,m);i.renderBufferDirect(w,null,Z,z,_,null)}}const G=_.children;for(let Z=0,K=G.length;Z<K;Z++)x(G[Z],v,w,R,m)}}function Wf(i,e,t){const n=t.isWebGL2;function s(){let y=!1;const ce=new gt;let oe=null;const Ie=new gt(0,0,0,0);return{setMask:function(he){oe!==he&&!y&&(i.colorMask(he,he,he,he),oe=he)},setLocked:function(he){y=he},setClear:function(he,J,Ne,Be,Mt){Mt===!0&&(he*=Be,J*=Be,Ne*=Be),ce.set(he,J,Ne,Be),Ie.equals(ce)===!1&&(i.clearColor(he,J,Ne,Be),Ie.copy(ce))},reset:function(){y=!1,oe=null,Ie.set(-1,0,0,0)}}}function r(){let y=!1,ce=null,oe=null,Ie=null;return{setTest:function(he){he?Se(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(he){ce!==he&&!y&&(i.depthMask(he),ce=he)},setFunc:function(he){if(oe!==he){switch(he){case Mc:i.depthFunc(i.NEVER);break;case dc:i.depthFunc(i.ALWAYS);break;case Ic:i.depthFunc(i.LESS);break;case tr:i.depthFunc(i.LEQUAL);break;case pc:i.depthFunc(i.EQUAL);break;case Ac:i.depthFunc(i.GEQUAL);break;case Dc:i.depthFunc(i.GREATER);break;case mc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=he}},setLocked:function(he){y=he},setClear:function(he){Ie!==he&&(i.clearDepth(he),Ie=he)},reset:function(){y=!1,ce=null,oe=null,Ie=null}}}function a(){let y=!1,ce=null,oe=null,Ie=null,he=null,J=null,Ne=null,Be=null,Mt=null;return{setTest:function(Je){y||(Je?Se(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(Je){ce!==Je&&!y&&(i.stencilMask(Je),ce=Je)},setFunc:function(Je,Rt,dt){(oe!==Je||Ie!==Rt||he!==dt)&&(i.stencilFunc(Je,Rt,dt),oe=Je,Ie=Rt,he=dt)},setOp:function(Je,Rt,dt){(J!==Je||Ne!==Rt||Be!==dt)&&(i.stencilOp(Je,Rt,dt),J=Je,Ne=Rt,Be=dt)},setLocked:function(Je){y=Je},setClear:function(Je){Mt!==Je&&(i.clearStencil(Je),Mt=Je)},reset:function(){y=!1,ce=null,oe=null,Ie=null,he=null,J=null,Ne=null,Be=null,Mt=null}}}const o=new s,c=new r,l=new a,g=new WeakMap,h=new WeakMap;let u={},d={},I=new WeakMap,p=[],M=null,f=!1,T=null,A=null,x=null,_=null,v=null,w=null,R=null,m=!1,E=null,G=null,Z=null,K=null,z=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,H=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(se)[1]),Q=H>=1):se.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),Q=H>=2);let W=null,V={};const O=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ge=new gt().fromArray(O),fe=new gt().fromArray(j);function pe(y,ce,oe,Ie){const he=new Uint8Array(4),J=i.createTexture();i.bindTexture(y,J),i.texParameteri(y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<oe;Ne++)n&&(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)?i.texImage3D(ce,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(ce+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return J}const Te={};Te[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Te[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Se(i.DEPTH_TEST),c.setFunc(tr),X(!1),xe(zr),Se(i.CULL_FACE),Y(gn);function Se(y){u[y]!==!0&&(i.enable(y),u[y]=!0)}function Ee(y){u[y]!==!1&&(i.disable(y),u[y]=!1)}function Ye(y,ce){return d[y]!==ce?(i.bindFramebuffer(y,ce),d[y]=ce,n&&(y===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ce),y===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ce)),!0):!1}function Ze(y,ce){let oe=p,Ie=!1;if(y)if(oe=I.get(ce),oe===void 0&&(oe=[],I.set(ce,oe)),y.isWebGLMultipleRenderTargets){const he=y.texture;if(oe.length!==he.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let J=0,Ne=he.length;J<Ne;J++)oe[J]=i.COLOR_ATTACHMENT0+J;oe.length=he.length,Ie=!0}}else oe[0]!==i.COLOR_ATTACHMENT0&&(oe[0]=i.COLOR_ATTACHMENT0,Ie=!0);else oe[0]!==i.BACK&&(oe[0]=i.BACK,Ie=!0);Ie&&(t.isWebGL2?i.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Ce(y){return M!==y?(i.useProgram(y),M=y,!0):!1}const C={[Vn]:i.FUNC_ADD,[ic]:i.FUNC_SUBTRACT,[sc]:i.FUNC_REVERSE_SUBTRACT};if(n)C[Lr]=i.MIN,C[Br]=i.MAX;else{const y=e.get("EXT_blend_minmax");y!==null&&(C[Lr]=y.MIN_EXT,C[Br]=y.MAX_EXT)}const ae={[rc]:i.ZERO,[oc]:i.ONE,[ac]:i.SRC_COLOR,[ca]:i.SRC_ALPHA,[fc]:i.SRC_ALPHA_SATURATE,[hc]:i.DST_COLOR,[lc]:i.DST_ALPHA,[cc]:i.ONE_MINUS_SRC_COLOR,[la]:i.ONE_MINUS_SRC_ALPHA,[uc]:i.ONE_MINUS_DST_COLOR,[gc]:i.ONE_MINUS_DST_ALPHA};function Y(y,ce,oe,Ie,he,J,Ne,Be){if(y===gn){f===!0&&(Ee(i.BLEND),f=!1);return}if(f===!1&&(Se(i.BLEND),f=!0),y!==nc){if(y!==T||Be!==m){if((A!==Vn||v!==Vn)&&(i.blendEquation(i.FUNC_ADD),A=Vn,v=Vn),Be)switch(y){case Jn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case br:i.blendFunc(i.ONE,i.ONE);break;case Or:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ur:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case Jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case br:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Or:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ur:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}x=null,_=null,w=null,R=null,T=y,m=Be}return}he=he||ce,J=J||oe,Ne=Ne||Ie,(ce!==A||he!==v)&&(i.blendEquationSeparate(C[ce],C[he]),A=ce,v=he),(oe!==x||Ie!==_||J!==w||Ne!==R)&&(i.blendFuncSeparate(ae[oe],ae[Ie],ae[J],ae[Ne]),x=oe,_=Ie,w=J,R=Ne),T=y,m=!1}function ne(y,ce){y.side===Pt?Ee(i.CULL_FACE):Se(i.CULL_FACE);let oe=y.side===xt;ce&&(oe=!oe),X(oe),y.blending===Jn&&y.transparent===!1?Y(gn):Y(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.premultipliedAlpha),c.setFunc(y.depthFunc),c.setTest(y.depthTest),c.setMask(y.depthWrite),o.setMask(y.colorWrite);const Ie=y.stencilWrite;l.setTest(Ie),Ie&&(l.setMask(y.stencilWriteMask),l.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),l.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),De(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function X(y){E!==y&&(y?i.frontFace(i.CW):i.frontFace(i.CCW),E=y)}function xe(y){y!==$a?(Se(i.CULL_FACE),y!==G&&(y===zr?i.cullFace(i.BACK):y===ec?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),G=y}function de(y){y!==Z&&(Q&&i.lineWidth(y),Z=y)}function De(y,ce,oe){y?(Se(i.POLYGON_OFFSET_FILL),(K!==ce||z!==oe)&&(i.polygonOffset(ce,oe),K=ce,z=oe)):Ee(i.POLYGON_OFFSET_FILL)}function Ue(y){y?Se(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function Ge(y){y===void 0&&(y=i.TEXTURE0+k-1),W!==y&&(i.activeTexture(y),W=y)}function $e(y,ce,oe){oe===void 0&&(W===null?oe=i.TEXTURE0+k-1:oe=W);let Ie=V[oe];Ie===void 0&&(Ie={type:void 0,texture:void 0},V[oe]=Ie),(Ie.type!==y||Ie.texture!==ce)&&(W!==oe&&(i.activeTexture(oe),W=oe),i.bindTexture(y,ce||Te[y]),Ie.type=y,Ie.texture=ce)}function S(){const y=V[W];y!==void 0&&y.type!==void 0&&(i.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function D(){try{i.compressedTexImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function B(){try{i.compressedTexImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function q(){try{i.texSubImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Qe(){try{i.texImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ie(y){ge.equals(y)===!1&&(i.scissor(y.x,y.y,y.z,y.w),ge.copy(y))}function Ve(y){fe.equals(y)===!1&&(i.viewport(y.x,y.y,y.z,y.w),fe.copy(y))}function Le(y,ce){let oe=h.get(ce);oe===void 0&&(oe=new WeakMap,h.set(ce,oe));let Ie=oe.get(y);Ie===void 0&&(Ie=i.getUniformBlockIndex(ce,y.name),oe.set(y,Ie))}function ze(y,ce){const Ie=h.get(ce).get(y);g.get(ce)!==Ie&&(i.uniformBlockBinding(ce,Ie,y.__bindingPointIndex),g.set(ce,Ie))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},W=null,V={},d={},I=new WeakMap,p=[],M=null,f=!1,T=null,A=null,x=null,_=null,v=null,w=null,R=null,m=!1,E=null,G=null,Z=null,K=null,z=null,ge.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Se,disable:Ee,bindFramebuffer:Ye,drawBuffers:Ze,useProgram:Ce,setBlending:Y,setMaterial:ne,setFlipSided:X,setCullFace:xe,setLineWidth:de,setPolygonOffset:De,setScissorTest:Ue,activeTexture:Ge,bindTexture:$e,unbindTexture:S,compressedTexImage2D:D,compressedTexImage3D:B,texImage2D:ve,texImage3D:Qe,updateUBOMapping:Le,uniformBlockBinding:ze,texStorage2D:re,texStorage3D:ue,texSubImage2D:ee,texSubImage3D:q,compressedTexSubImage2D:te,compressedTexSubImage3D:me,scissor:ie,viewport:Ve,reset:_e}}function Xf(i,e,t,n,s,r,a){const o=s.isWebGL2,c=s.maxTextures,l=s.maxCubemapSize,g=s.maxTextureSize,h=s.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),I=new WeakMap;let p;const M=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(S,D){return f?new OffscreenCanvas(S,D):os("canvas")}function A(S,D,B,ee){let q=1;if((S.width>ee||S.height>ee)&&(q=ee/Math.max(S.width,S.height)),q<1||D===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const te=D?cr:Math.floor,me=te(q*S.width),re=te(q*S.height);p===void 0&&(p=T(me,re));const ue=B?T(me,re):p;return ue.width=me,ue.height=re,ue.getContext("2d").drawImage(S,0,0,me,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+me+"x"+re+")."),ue}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function x(S){return ho(S.width)&&ho(S.height)}function _(S){return o?!1:S.wrapS!==Lt||S.wrapT!==Lt||S.minFilter!==At&&S.minFilter!==wt}function v(S,D){return S.generateMipmaps&&D&&S.minFilter!==At&&S.minFilter!==wt}function w(S){i.generateMipmap(S)}function R(S,D,B,ee,q=!1){if(o===!1)return D;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let te=D;if(D===i.RED&&(B===i.FLOAT&&(te=i.R32F),B===i.HALF_FLOAT&&(te=i.R16F),B===i.UNSIGNED_BYTE&&(te=i.R8)),D===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(te=i.R8UI),B===i.UNSIGNED_SHORT&&(te=i.R16UI),B===i.UNSIGNED_INT&&(te=i.R32UI),B===i.BYTE&&(te=i.R8I),B===i.SHORT&&(te=i.R16I),B===i.INT&&(te=i.R32I)),D===i.RG&&(B===i.FLOAT&&(te=i.RG32F),B===i.HALF_FLOAT&&(te=i.RG16F),B===i.UNSIGNED_BYTE&&(te=i.RG8)),D===i.RGBA){const me=q?ns:We.getTransfer(ee);B===i.FLOAT&&(te=i.RGBA32F),B===i.HALF_FLOAT&&(te=i.RGBA16F),B===i.UNSIGNED_BYTE&&(te=me===qe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function m(S,D,B){return v(S,B)===!0||S.isFramebufferTexture&&S.minFilter!==At&&S.minFilter!==wt?Math.log2(Math.max(D.width,D.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?D.mipmaps.length:1}function E(S){return S===At||S===Rr||S===Ds?i.NEAREST:i.LINEAR}function G(S){const D=S.target;D.removeEventListener("dispose",G),K(D),D.isVideoTexture&&I.delete(D)}function Z(S){const D=S.target;D.removeEventListener("dispose",Z),k(D)}function K(S){const D=n.get(S);if(D.__webglInit===void 0)return;const B=S.source,ee=M.get(B);if(ee){const q=ee[D.__cacheKey];q.usedTimes--,q.usedTimes===0&&z(S),Object.keys(ee).length===0&&M.delete(B)}n.remove(S)}function z(S){const D=n.get(S);i.deleteTexture(D.__webglTexture);const B=S.source,ee=M.get(B);delete ee[D.__cacheKey],a.memory.textures--}function k(S){const D=S.texture,B=n.get(S),ee=n.get(D);if(ee.__webglTexture!==void 0&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(B.__webglFramebuffer[q]))for(let te=0;te<B.__webglFramebuffer[q].length;te++)i.deleteFramebuffer(B.__webglFramebuffer[q][te]);else i.deleteFramebuffer(B.__webglFramebuffer[q]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[q])}else{if(Array.isArray(B.__webglFramebuffer))for(let q=0;q<B.__webglFramebuffer.length;q++)i.deleteFramebuffer(B.__webglFramebuffer[q]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let q=0;q<B.__webglColorRenderbuffer.length;q++)B.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[q]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let q=0,te=D.length;q<te;q++){const me=n.get(D[q]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(D[q])}n.remove(D),n.remove(S)}let Q=0;function H(){Q=0}function se(){const S=Q;return S>=c&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+c),Q+=1,S}function W(S){const D=[];return D.push(S.wrapS),D.push(S.wrapT),D.push(S.wrapR||0),D.push(S.magFilter),D.push(S.minFilter),D.push(S.anisotropy),D.push(S.internalFormat),D.push(S.format),D.push(S.type),D.push(S.generateMipmaps),D.push(S.premultiplyAlpha),D.push(S.flipY),D.push(S.unpackAlignment),D.push(S.colorSpace),D.join()}function V(S,D){const B=n.get(S);if(S.isVideoTexture&&Ge(S),S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){const ee=S.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(B,S,D);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+D)}function O(S,D){const B=n.get(S);if(S.version>0&&B.__version!==S.version){Ye(B,S,D);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+D)}function j(S,D){const B=n.get(S);if(S.version>0&&B.__version!==S.version){Ye(B,S,D);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+D)}function ge(S,D){const B=n.get(S);if(S.version>0&&B.__version!==S.version){Ze(B,S,D);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+D)}const fe={[sr]:i.REPEAT,[Lt]:i.CLAMP_TO_EDGE,[rr]:i.MIRRORED_REPEAT},pe={[At]:i.NEAREST,[Rr]:i.NEAREST_MIPMAP_NEAREST,[Ds]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[Cc]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},Te={[Hc]:i.NEVER,[qc]:i.ALWAYS,[Yc]:i.LESS,[Vc]:i.LEQUAL,[Qc]:i.EQUAL,[Jc]:i.GEQUAL,[Wc]:i.GREATER,[Xc]:i.NOTEQUAL};function Se(S,D,B){if(B?(i.texParameteri(S,i.TEXTURE_WRAP_S,fe[D.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,fe[D.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,fe[D.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,pe[D.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,pe[D.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(D.wrapS!==Lt||D.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,E(D.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,E(D.minFilter)),D.minFilter!==At&&D.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),D.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,Te[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(D.magFilter===At||D.minFilter!==Ds&&D.minFilter!==di||D.type===ln&&e.has("OES_texture_float_linear")===!1||o===!1&&D.type===Ii&&e.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||n.get(D).__currentAnisotropy)&&(i.texParameterf(S,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,s.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy)}}function Ee(S,D){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,D.addEventListener("dispose",G));const ee=D.source;let q=M.get(ee);q===void 0&&(q={},M.set(ee,q));const te=W(D);if(te!==S.__cacheKey){q[te]===void 0&&(q[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),q[te].usedTimes++;const me=q[S.__cacheKey];me!==void 0&&(q[S.__cacheKey].usedTimes--,me.usedTimes===0&&z(D)),S.__cacheKey=te,S.__webglTexture=q[te].texture}return B}function Ye(S,D,B){let ee=i.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),D.isData3DTexture&&(ee=i.TEXTURE_3D);const q=Ee(S,D),te=D.source;t.bindTexture(ee,S.__webglTexture,i.TEXTURE0+B);const me=n.get(te);if(te.version!==me.__version||q===!0){t.activeTexture(i.TEXTURE0+B);const re=We.getPrimaries(We.workingColorSpace),ue=D.colorSpace===zt?null:We.getPrimaries(D.colorSpace),ve=D.colorSpace===zt||re===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Qe=_(D)&&x(D.image)===!1;let ie=A(D.image,Qe,!1,g);ie=$e(D,ie);const Ve=x(ie)||o,Le=r.convert(D.format,D.colorSpace);let ze=r.convert(D.type),_e=R(D.internalFormat,Le,ze,D.colorSpace,D.isVideoTexture);Se(ee,D,Ve);let y;const ce=D.mipmaps,oe=o&&D.isVideoTexture!==!0,Ie=me.__version===void 0||q===!0,he=m(D,ie,Ve);if(D.isDepthTexture)_e=i.DEPTH_COMPONENT,o?D.type===ln?_e=i.DEPTH_COMPONENT32F:D.type===cn?_e=i.DEPTH_COMPONENT24:D.type===En?_e=i.DEPTH24_STENCIL8:_e=i.DEPTH_COMPONENT16:D.type===ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===Tn&&_e===i.DEPTH_COMPONENT&&D.type!==Ir&&D.type!==cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=cn,ze=r.convert(D.type)),D.format===ei&&_e===i.DEPTH_COMPONENT&&(_e=i.DEPTH_STENCIL,D.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=En,ze=r.convert(D.type))),Ie&&(oe?t.texStorage2D(i.TEXTURE_2D,1,_e,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,_e,ie.width,ie.height,0,Le,ze,null));else if(D.isDataTexture)if(ce.length>0&&Ve){oe&&Ie&&t.texStorage2D(i.TEXTURE_2D,he,_e,ce[0].width,ce[0].height);for(let J=0,Ne=ce.length;J<Ne;J++)y=ce[J],oe?t.texSubImage2D(i.TEXTURE_2D,J,0,0,y.width,y.height,Le,ze,y.data):t.texImage2D(i.TEXTURE_2D,J,_e,y.width,y.height,0,Le,ze,y.data);D.generateMipmaps=!1}else oe?(Ie&&t.texStorage2D(i.TEXTURE_2D,he,_e,ie.width,ie.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,Le,ze,ie.data)):t.texImage2D(i.TEXTURE_2D,0,_e,ie.width,ie.height,0,Le,ze,ie.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){oe&&Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,_e,ce[0].width,ce[0].height,ie.depth);for(let J=0,Ne=ce.length;J<Ne;J++)y=ce[J],D.format!==Bt?Le!==null?oe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,y.width,y.height,ie.depth,Le,y.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,_e,y.width,y.height,ie.depth,0,y.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,y.width,y.height,ie.depth,Le,ze,y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,_e,y.width,y.height,ie.depth,0,Le,ze,y.data)}else{oe&&Ie&&t.texStorage2D(i.TEXTURE_2D,he,_e,ce[0].width,ce[0].height);for(let J=0,Ne=ce.length;J<Ne;J++)y=ce[J],D.format!==Bt?Le!==null?oe?t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,y.width,y.height,Le,y.data):t.compressedTexImage2D(i.TEXTURE_2D,J,_e,y.width,y.height,0,y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?t.texSubImage2D(i.TEXTURE_2D,J,0,0,y.width,y.height,Le,ze,y.data):t.texImage2D(i.TEXTURE_2D,J,_e,y.width,y.height,0,Le,ze,y.data)}else if(D.isDataArrayTexture)oe?(Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,_e,ie.width,ie.height,ie.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Le,ze,ie.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,ie.width,ie.height,ie.depth,0,Le,ze,ie.data);else if(D.isData3DTexture)oe?(Ie&&t.texStorage3D(i.TEXTURE_3D,he,_e,ie.width,ie.height,ie.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Le,ze,ie.data)):t.texImage3D(i.TEXTURE_3D,0,_e,ie.width,ie.height,ie.depth,0,Le,ze,ie.data);else if(D.isFramebufferTexture){if(Ie)if(oe)t.texStorage2D(i.TEXTURE_2D,he,_e,ie.width,ie.height);else{let J=ie.width,Ne=ie.height;for(let Be=0;Be<he;Be++)t.texImage2D(i.TEXTURE_2D,Be,_e,J,Ne,0,Le,ze,null),J>>=1,Ne>>=1}}else if(ce.length>0&&Ve){oe&&Ie&&t.texStorage2D(i.TEXTURE_2D,he,_e,ce[0].width,ce[0].height);for(let J=0,Ne=ce.length;J<Ne;J++)y=ce[J],oe?t.texSubImage2D(i.TEXTURE_2D,J,0,0,Le,ze,y):t.texImage2D(i.TEXTURE_2D,J,_e,Le,ze,y);D.generateMipmaps=!1}else oe?(Ie&&t.texStorage2D(i.TEXTURE_2D,he,_e,ie.width,ie.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,ze,ie)):t.texImage2D(i.TEXTURE_2D,0,_e,Le,ze,ie);v(D,Ve)&&w(ee),me.__version=te.version,D.onUpdate&&D.onUpdate(D)}S.__version=D.version}function Ze(S,D,B){if(D.image.length!==6)return;const ee=Ee(S,D),q=D.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+B);const te=n.get(q);if(q.version!==te.__version||ee===!0){t.activeTexture(i.TEXTURE0+B);const me=We.getPrimaries(We.workingColorSpace),re=D.colorSpace===zt?null:We.getPrimaries(D.colorSpace),ue=D.colorSpace===zt||me===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const ve=D.isCompressedTexture||D.image[0].isCompressedTexture,Qe=D.image[0]&&D.image[0].isDataTexture,ie=[];for(let J=0;J<6;J++)!ve&&!Qe?ie[J]=A(D.image[J],!1,!0,l):ie[J]=Qe?D.image[J].image:D.image[J],ie[J]=$e(D,ie[J]);const Ve=ie[0],Le=x(Ve)||o,ze=r.convert(D.format,D.colorSpace),_e=r.convert(D.type),y=R(D.internalFormat,ze,_e,D.colorSpace),ce=o&&D.isVideoTexture!==!0,oe=te.__version===void 0||ee===!0;let Ie=m(D,Ve,Le);Se(i.TEXTURE_CUBE_MAP,D,Le);let he;if(ve){ce&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,y,Ve.width,Ve.height);for(let J=0;J<6;J++){he=ie[J].mipmaps;for(let Ne=0;Ne<he.length;Ne++){const Be=he[Ne];D.format!==Bt?ze!==null?ce?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne,0,0,Be.width,Be.height,ze,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne,y,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne,0,0,Be.width,Be.height,ze,_e,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne,y,Be.width,Be.height,0,ze,_e,Be.data)}}}else{he=D.mipmaps,ce&&oe&&(he.length>0&&Ie++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,y,ie[0].width,ie[0].height));for(let J=0;J<6;J++)if(Qe){ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ie[J].width,ie[J].height,ze,_e,ie[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,y,ie[J].width,ie[J].height,0,ze,_e,ie[J].data);for(let Ne=0;Ne<he.length;Ne++){const Mt=he[Ne].image[J].image;ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne+1,0,0,Mt.width,Mt.height,ze,_e,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne+1,y,Mt.width,Mt.height,0,ze,_e,Mt.data)}}else{ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ze,_e,ie[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,y,ze,_e,ie[J]);for(let Ne=0;Ne<he.length;Ne++){const Be=he[Ne];ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne+1,0,0,ze,_e,Be.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne+1,y,ze,_e,Be.image[J])}}}v(D,Le)&&w(i.TEXTURE_CUBE_MAP),te.__version=q.version,D.onUpdate&&D.onUpdate(D)}S.__version=D.version}function Ce(S,D,B,ee,q,te){const me=r.convert(B.format,B.colorSpace),re=r.convert(B.type),ue=R(B.internalFormat,me,re,B.colorSpace);if(!n.get(D).__hasExternalTextures){const Qe=Math.max(1,D.width>>te),ie=Math.max(1,D.height>>te);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,te,ue,Qe,ie,D.depth,0,me,re,null):t.texImage2D(q,te,ue,Qe,ie,0,me,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),Ue(D)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,q,n.get(B).__webglTexture,0,De(D)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,q,n.get(B).__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function C(S,D,B){if(i.bindRenderbuffer(i.RENDERBUFFER,S),D.depthBuffer&&!D.stencilBuffer){let ee=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||Ue(D)){const q=D.depthTexture;q&&q.isDepthTexture&&(q.type===ln?ee=i.DEPTH_COMPONENT32F:q.type===cn&&(ee=i.DEPTH_COMPONENT24));const te=De(D);Ue(D)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,ee,D.width,D.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,te,ee,D.width,D.height)}else i.renderbufferStorage(i.RENDERBUFFER,ee,D.width,D.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(D.depthBuffer&&D.stencilBuffer){const ee=De(D);B&&Ue(D)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,D.width,D.height):Ue(D)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{const ee=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let q=0;q<ee.length;q++){const te=ee[q],me=r.convert(te.format,te.colorSpace),re=r.convert(te.type),ue=R(te.internalFormat,me,re,te.colorSpace),ve=De(D);B&&Ue(D)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,ue,D.width,D.height):Ue(D)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,ue,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,ue,D.width,D.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(S,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),V(D.depthTexture,0);const ee=n.get(D.depthTexture).__webglTexture,q=De(D);if(D.depthTexture.format===Tn)Ue(D)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(D.depthTexture.format===ei)Ue(D)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Y(S){const D=n.get(S),B=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!D.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ae(D.__webglFramebuffer,S)}else if(B){D.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer[ee]),D.__webglDepthbuffer[ee]=i.createRenderbuffer(),C(D.__webglDepthbuffer[ee],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer=i.createRenderbuffer(),C(D.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(S,D,B){const ee=n.get(S);D!==void 0&&Ce(ee.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Y(S)}function X(S){const D=S.texture,B=n.get(S),ee=n.get(D);S.addEventListener("dispose",Z),S.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=D.version,a.memory.textures++);const q=S.isWebGLCubeRenderTarget===!0,te=S.isWebGLMultipleRenderTargets===!0,me=x(S)||o;if(q){B.__webglFramebuffer=[];for(let re=0;re<6;re++)if(o&&D.mipmaps&&D.mipmaps.length>0){B.__webglFramebuffer[re]=[];for(let ue=0;ue<D.mipmaps.length;ue++)B.__webglFramebuffer[re][ue]=i.createFramebuffer()}else B.__webglFramebuffer[re]=i.createFramebuffer()}else{if(o&&D.mipmaps&&D.mipmaps.length>0){B.__webglFramebuffer=[];for(let re=0;re<D.mipmaps.length;re++)B.__webglFramebuffer[re]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(te)if(s.drawBuffers){const re=S.texture;for(let ue=0,ve=re.length;ue<ve;ue++){const Qe=n.get(re[ue]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&Ue(S)===!1){const re=te?D:[D];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ue=0;ue<re.length;ue++){const ve=re[ue];B.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ue]);const Qe=r.convert(ve.format,ve.colorSpace),ie=r.convert(ve.type),Ve=R(ve.internalFormat,Qe,ie,ve.colorSpace,S.isXRRenderTarget===!0),Le=De(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Ve,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,B.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),C(B.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Se(i.TEXTURE_CUBE_MAP,D,me);for(let re=0;re<6;re++)if(o&&D.mipmaps&&D.mipmaps.length>0)for(let ue=0;ue<D.mipmaps.length;ue++)Ce(B.__webglFramebuffer[re][ue],S,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ue);else Ce(B.__webglFramebuffer[re],S,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);v(D,me)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const re=S.texture;for(let ue=0,ve=re.length;ue<ve;ue++){const Qe=re[ue],ie=n.get(Qe);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),Se(i.TEXTURE_2D,Qe,me),Ce(B.__webglFramebuffer,S,Qe,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),v(Qe,me)&&w(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?re=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,ee.__webglTexture),Se(re,D,me),o&&D.mipmaps&&D.mipmaps.length>0)for(let ue=0;ue<D.mipmaps.length;ue++)Ce(B.__webglFramebuffer[ue],S,D,i.COLOR_ATTACHMENT0,re,ue);else Ce(B.__webglFramebuffer,S,D,i.COLOR_ATTACHMENT0,re,0);v(D,me)&&w(re),t.unbindTexture()}S.depthBuffer&&Y(S)}function xe(S){const D=x(S)||o,B=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0,q=B.length;ee<q;ee++){const te=B[ee];if(v(te,D)){const me=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,re=n.get(te).__webglTexture;t.bindTexture(me,re),w(me),t.unbindTexture()}}}function de(S){if(o&&S.samples>0&&Ue(S)===!1){const D=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],B=S.width,ee=S.height;let q=i.COLOR_BUFFER_BIT;const te=[],me=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(S),ue=S.isWebGLMultipleRenderTargets===!0;if(ue)for(let ve=0;ve<D.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ve=0;ve<D.length;ve++){te.push(i.COLOR_ATTACHMENT0+ve),S.depthBuffer&&te.push(me);const Qe=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Qe===!1&&(S.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),ue&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[ve]),Qe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[me])),ue){const ie=n.get(D[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,B,ee,0,0,B,ee,q,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let ve=0;ve<D.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,re.__webglColorRenderbuffer[ve]);const Qe=n.get(D[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function De(S){return Math.min(h,S.samples)}function Ue(S){const D=n.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Ge(S){const D=a.render.frame;I.get(S)!==D&&(I.set(S,D),S.update())}function $e(S,D){const B=S.colorSpace,ee=S.format,q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===or||B!==tn&&B!==zt&&(We.getTransfer(B)===qe?o===!1?e.has("EXT_sRGB")===!0&&ee===Bt?(S.format=or,S.minFilter=wt,S.generateMipmaps=!1):D=ma.sRGBToLinear(D):(ee!==Bt||q!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),D}this.allocateTextureUnit=se,this.resetTextureUnits=H,this.setTexture2D=V,this.setTexture2DArray=O,this.setTexture3D=j,this.setTextureCube=ge,this.rebindTextures=ne,this.setupRenderTarget=X,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ue}function Jf(i,e,t){const n=t.isWebGL2;function s(r,a=zt){let o;const c=We.getTransfer(a);if(r===un)return i.UNSIGNED_BYTE;if(r===fa)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ma)return i.UNSIGNED_SHORT_5_5_5_1;if(r===wc)return i.BYTE;if(r===vc)return i.SHORT;if(r===Ir)return i.UNSIGNED_SHORT;if(r===ua)return i.INT;if(r===cn)return i.UNSIGNED_INT;if(r===ln)return i.FLOAT;if(r===Ii)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===zc)return i.ALPHA;if(r===Bt)return i.RGBA;if(r===bc)return i.LUMINANCE;if(r===Oc)return i.LUMINANCE_ALPHA;if(r===Tn)return i.DEPTH_COMPONENT;if(r===ei)return i.DEPTH_STENCIL;if(r===or)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Uc)return i.RED;if(r===da)return i.RED_INTEGER;if(r===Lc)return i.RG;if(r===Ia)return i.RG_INTEGER;if(r===pa)return i.RGBA_INTEGER;if(r===ms||r===xs||r===Ns||r===Ss)if(c===qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ms)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ns)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ss)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ms)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ns)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ss)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jr||r===Pr||r===Fr||r===kr)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===jr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Gr||r===Hr)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Gr)return c===qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Hr)return c===qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yr||r===Qr||r===Vr||r===Wr||r===Xr||r===Jr||r===qr||r===Zr||r===Kr||r===$r||r===eo||r===to||r===no||r===io)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Yr)return c===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qr)return c===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vr)return c===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wr)return c===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xr)return c===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jr)return c===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qr)return c===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zr)return c===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kr)return c===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$r)return c===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===eo)return c===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===to)return c===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===no)return c===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===io)return c===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Es||r===so||r===ro)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Es)return c===qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===so)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ro)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rc||r===oo||r===ao||r===co)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Es)return o.COMPRESSED_RED_RGTC1_EXT;if(r===oo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ao)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===co)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===En?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class qf extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wi extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zf={type:"move"};class Xs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const p of e.hand.values()){const M=t.getJointPose(p,n),f=this._getHandJoint(l,p);M!==null&&(f.matrix.fromArray(M.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=M.radius),f.visible=M!==null}const g=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=g.position.distanceTo(h.position),d=.02,I=.005;l.inputState.pinching&&u>d+I?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-I&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Kf extends yt{constructor(e,t,n,s,r,a,o,c,l,g){if(g=g!==void 0?g:Tn,g!==Tn&&g!==ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&g===Tn&&(n=cn),n===void 0&&g===ei&&(n=En),super(null,s,r,a,o,c,g,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:At,this.minFilter=c!==void 0?c:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $f extends ni{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,g=null,h=null,u=null,d=null,I=null;const p=t.getContextAttributes();let M=null,f=null;const T=[],A=[],x=new vt;x.layers.enable(1),x.viewport=new gt;const _=new vt;_.layers.enable(2),_.viewport=new gt;const v=[x,_],w=new qf;w.layers.enable(1),w.layers.enable(2);let R=null,m=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let j=T[O];return j===void 0&&(j=new Xs,T[O]=j),j.getTargetRaySpace()},this.getControllerGrip=function(O){let j=T[O];return j===void 0&&(j=new Xs,T[O]=j),j.getGripSpace()},this.getHand=function(O){let j=T[O];return j===void 0&&(j=new Xs,T[O]=j),j.getHandSpace()};function E(O){const j=A.indexOf(O.inputSource);if(j===-1)return;const ge=T[j];ge!==void 0&&(ge.update(O.inputSource,O.frame,l||a),ge.dispatchEvent({type:O.type,data:O.inputSource}))}function G(){s.removeEventListener("select",E),s.removeEventListener("selectstart",E),s.removeEventListener("selectend",E),s.removeEventListener("squeeze",E),s.removeEventListener("squeezestart",E),s.removeEventListener("squeezeend",E),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Z);for(let O=0;O<T.length;O++){const j=A[O];j!==null&&(A[O]=null,T[O].disconnect(j))}R=null,m=null,e.setRenderTarget(M),d=null,u=null,h=null,s=null,f=null,V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return I},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",E),s.addEventListener("selectstart",E),s.addEventListener("selectend",E),s.addEventListener("squeeze",E),s.addEventListener("squeezestart",E),s.addEventListener("squeezeend",E),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:d}),f=new _n(d.framebufferWidth,d.framebufferHeight,{format:Bt,type:un,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let j=null,ge=null,fe=null;p.depth&&(fe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=p.stencil?ei:Tn,ge=p.stencil?En:cn);const pe={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};h=new XRWebGLBinding(s,t),u=h.createProjectionLayer(pe),s.updateRenderState({layers:[u]}),f=new _n(u.textureWidth,u.textureHeight,{format:Bt,type:un,depthTexture:new Kf(u.textureWidth,u.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Te=e.properties.get(f);Te.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),V.setContext(s),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function Z(O){for(let j=0;j<O.removed.length;j++){const ge=O.removed[j],fe=A.indexOf(ge);fe>=0&&(A[fe]=null,T[fe].disconnect(ge))}for(let j=0;j<O.added.length;j++){const ge=O.added[j];let fe=A.indexOf(ge);if(fe===-1){for(let Te=0;Te<T.length;Te++)if(Te>=A.length){A.push(ge),fe=Te;break}else if(A[Te]===null){A[Te]=ge,fe=Te;break}if(fe===-1)break}const pe=T[fe];pe&&pe.connect(ge)}}const K=new b,z=new b;function k(O,j,ge){K.setFromMatrixPosition(j.matrixWorld),z.setFromMatrixPosition(ge.matrixWorld);const fe=K.distanceTo(z),pe=j.projectionMatrix.elements,Te=ge.projectionMatrix.elements,Se=pe[14]/(pe[10]-1),Ee=pe[14]/(pe[10]+1),Ye=(pe[9]+1)/pe[5],Ze=(pe[9]-1)/pe[5],Ce=(pe[8]-1)/pe[0],C=(Te[8]+1)/Te[0],ae=Se*Ce,Y=Se*C,ne=fe/(-Ce+C),X=ne*-Ce;j.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(X),O.translateZ(ne),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const xe=Se+ne,de=Ee+ne,De=ae-X,Ue=Y+(fe-X),Ge=Ye*Ee/de*xe,$e=Ze*Ee/de*xe;O.projectionMatrix.makePerspective(De,Ue,Ge,$e,xe,de),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function Q(O,j){j===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(j.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;w.near=_.near=x.near=O.near,w.far=_.far=x.far=O.far,(R!==w.near||m!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,m=w.far);const j=O.parent,ge=w.cameras;Q(w,j);for(let fe=0;fe<ge.length;fe++)Q(ge[fe],j);ge.length===2?k(w,x,_):w.projectionMatrix.copy(x.projectionMatrix),H(O,w,j)};function H(O,j,ge){ge===null?O.matrix.copy(j.matrixWorld):(O.matrix.copy(ge.matrixWorld),O.matrix.invert(),O.matrix.multiply(j.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(j.projectionMatrix),O.projectionMatrixInverse.copy(j.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ar*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(O){c=O,u!==null&&(u.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)};let se=null;function W(O,j){if(g=j.getViewerPose(l||a),I=j,g!==null){const ge=g.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let fe=!1;ge.length!==w.cameras.length&&(w.cameras.length=0,fe=!0);for(let pe=0;pe<ge.length;pe++){const Te=ge[pe];let Se=null;if(d!==null)Se=d.getViewport(Te);else{const Ye=h.getViewSubImage(u,Te);Se=Ye.viewport,pe===0&&(e.setRenderTargetTextures(f,Ye.colorTexture,u.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(f))}let Ee=v[pe];Ee===void 0&&(Ee=new vt,Ee.layers.enable(pe),Ee.viewport=new gt,v[pe]=Ee),Ee.matrix.fromArray(Te.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Te.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Se.x,Se.y,Se.width,Se.height),pe===0&&(w.matrix.copy(Ee.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),fe===!0&&w.cameras.push(Ee)}}for(let ge=0;ge<T.length;ge++){const fe=A[ge],pe=T[ge];fe!==null&&pe!==void 0&&pe.update(fe,j,l||a)}se&&se(O,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),I=null}const V=new va;V.setAnimationLoop(W),this.setAnimationLoop=function(O){se=O},this.dispose=function(){}}}function eM(i,e){function t(M,f){M.matrixAutoUpdate===!0&&M.updateMatrix(),f.value.copy(M.matrix)}function n(M,f){f.color.getRGB(M.fogColor.value,ya(i)),f.isFog?(M.fogNear.value=f.near,M.fogFar.value=f.far):f.isFogExp2&&(M.fogDensity.value=f.density)}function s(M,f,T,A,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(M,f):f.isMeshToonMaterial?(r(M,f),h(M,f)):f.isMeshPhongMaterial?(r(M,f),g(M,f)):f.isMeshStandardMaterial?(r(M,f),u(M,f),f.isMeshPhysicalMaterial&&d(M,f,x)):f.isMeshMatcapMaterial?(r(M,f),I(M,f)):f.isMeshDepthMaterial?r(M,f):f.isMeshDistanceMaterial?(r(M,f),p(M,f)):f.isMeshNormalMaterial?r(M,f):f.isLineBasicMaterial?(a(M,f),f.isLineDashedMaterial&&o(M,f)):f.isPointsMaterial?c(M,f,T,A):f.isSpriteMaterial?l(M,f):f.isShadowMaterial?(M.color.value.copy(f.color),M.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(M,f){M.opacity.value=f.opacity,f.color&&M.diffuse.value.copy(f.color),f.emissive&&M.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(M.map.value=f.map,t(f.map,M.mapTransform)),f.alphaMap&&(M.alphaMap.value=f.alphaMap,t(f.alphaMap,M.alphaMapTransform)),f.bumpMap&&(M.bumpMap.value=f.bumpMap,t(f.bumpMap,M.bumpMapTransform),M.bumpScale.value=f.bumpScale,f.side===xt&&(M.bumpScale.value*=-1)),f.normalMap&&(M.normalMap.value=f.normalMap,t(f.normalMap,M.normalMapTransform),M.normalScale.value.copy(f.normalScale),f.side===xt&&M.normalScale.value.negate()),f.displacementMap&&(M.displacementMap.value=f.displacementMap,t(f.displacementMap,M.displacementMapTransform),M.displacementScale.value=f.displacementScale,M.displacementBias.value=f.displacementBias),f.emissiveMap&&(M.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,M.emissiveMapTransform)),f.specularMap&&(M.specularMap.value=f.specularMap,t(f.specularMap,M.specularMapTransform)),f.alphaTest>0&&(M.alphaTest.value=f.alphaTest);const T=e.get(f).envMap;if(T&&(M.envMap.value=T,M.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=f.reflectivity,M.ior.value=f.ior,M.refractionRatio.value=f.refractionRatio),f.lightMap){M.lightMap.value=f.lightMap;const A=i._useLegacyLights===!0?Math.PI:1;M.lightMapIntensity.value=f.lightMapIntensity*A,t(f.lightMap,M.lightMapTransform)}f.aoMap&&(M.aoMap.value=f.aoMap,M.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,M.aoMapTransform))}function a(M,f){M.diffuse.value.copy(f.color),M.opacity.value=f.opacity,f.map&&(M.map.value=f.map,t(f.map,M.mapTransform))}function o(M,f){M.dashSize.value=f.dashSize,M.totalSize.value=f.dashSize+f.gapSize,M.scale.value=f.scale}function c(M,f,T,A){M.diffuse.value.copy(f.color),M.opacity.value=f.opacity,M.size.value=f.size*T,M.scale.value=A*.5,f.map&&(M.map.value=f.map,t(f.map,M.uvTransform)),f.alphaMap&&(M.alphaMap.value=f.alphaMap,t(f.alphaMap,M.alphaMapTransform)),f.alphaTest>0&&(M.alphaTest.value=f.alphaTest)}function l(M,f){M.diffuse.value.copy(f.color),M.opacity.value=f.opacity,M.rotation.value=f.rotation,f.map&&(M.map.value=f.map,t(f.map,M.mapTransform)),f.alphaMap&&(M.alphaMap.value=f.alphaMap,t(f.alphaMap,M.alphaMapTransform)),f.alphaTest>0&&(M.alphaTest.value=f.alphaTest)}function g(M,f){M.specular.value.copy(f.specular),M.shininess.value=Math.max(f.shininess,1e-4)}function h(M,f){f.gradientMap&&(M.gradientMap.value=f.gradientMap)}function u(M,f){M.metalness.value=f.metalness,f.metalnessMap&&(M.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,M.metalnessMapTransform)),M.roughness.value=f.roughness,f.roughnessMap&&(M.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,M.roughnessMapTransform)),e.get(f).envMap&&(M.envMapIntensity.value=f.envMapIntensity)}function d(M,f,T){M.ior.value=f.ior,f.sheen>0&&(M.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),M.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(M.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,M.sheenColorMapTransform)),f.sheenRoughnessMap&&(M.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,M.sheenRoughnessMapTransform))),f.clearcoat>0&&(M.clearcoat.value=f.clearcoat,M.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(M.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,M.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(M.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===xt&&M.clearcoatNormalScale.value.negate())),f.iridescence>0&&(M.iridescence.value=f.iridescence,M.iridescenceIOR.value=f.iridescenceIOR,M.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(M.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,M.iridescenceMapTransform)),f.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),f.transmission>0&&(M.transmission.value=f.transmission,M.transmissionSamplerMap.value=T.texture,M.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(M.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,M.transmissionMapTransform)),M.thickness.value=f.thickness,f.thicknessMap&&(M.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=f.attenuationDistance,M.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(M.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(M.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=f.specularIntensity,M.specularColor.value.copy(f.specularColor),f.specularColorMap&&(M.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,M.specularColorMapTransform)),f.specularIntensityMap&&(M.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,M.specularIntensityMapTransform))}function I(M,f){f.matcap&&(M.matcap.value=f.matcap)}function p(M,f){const T=e.get(f).light;M.referencePosition.value.setFromMatrixPosition(T.matrixWorld),M.nearDistance.value=T.shadow.camera.near,M.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tM(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(T,A){const x=A.program;n.uniformBlockBinding(T,x)}function l(T,A){let x=s[T.id];x===void 0&&(I(T),x=g(T),s[T.id]=x,T.addEventListener("dispose",M));const _=A.program;n.updateUBOMapping(T,_);const v=e.render.frame;r[T.id]!==v&&(u(T),r[T.id]=v)}function g(T){const A=h();T.__bindingPointIndex=A;const x=i.createBuffer(),_=T.__size,v=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,_,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,x),x}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const A=s[T.id],x=T.uniforms,_=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let v=0,w=x.length;v<w;v++){const R=x[v];if(d(R,v,_)===!0){const m=R.__offset,E=Array.isArray(R.value)?R.value:[R.value];let G=0;for(let Z=0;Z<E.length;Z++){const K=E[Z],z=p(K);typeof K=="number"?(R.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,m+G,R.__data)):K.isMatrix3?(R.__data[0]=K.elements[0],R.__data[1]=K.elements[1],R.__data[2]=K.elements[2],R.__data[3]=K.elements[0],R.__data[4]=K.elements[3],R.__data[5]=K.elements[4],R.__data[6]=K.elements[5],R.__data[7]=K.elements[0],R.__data[8]=K.elements[6],R.__data[9]=K.elements[7],R.__data[10]=K.elements[8],R.__data[11]=K.elements[0]):(K.toArray(R.__data,G),G+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,m,R.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(T,A,x){const _=T.value;if(x[A]===void 0){if(typeof _=="number")x[A]=_;else{const v=Array.isArray(_)?_:[_],w=[];for(let R=0;R<v.length;R++)w.push(v[R].clone());x[A]=w}return!0}else if(typeof _=="number"){if(x[A]!==_)return x[A]=_,!0}else{const v=Array.isArray(x[A])?x[A]:[x[A]],w=Array.isArray(_)?_:[_];for(let R=0;R<v.length;R++){const m=v[R];if(m.equals(w[R])===!1)return m.copy(w[R]),!0}}return!1}function I(T){const A=T.uniforms;let x=0;const _=16;let v=0;for(let w=0,R=A.length;w<R;w++){const m=A[w],E={boundary:0,storage:0},G=Array.isArray(m.value)?m.value:[m.value];for(let Z=0,K=G.length;Z<K;Z++){const z=G[Z],k=p(z);E.boundary+=k.boundary,E.storage+=k.storage}if(m.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),m.__offset=x,w>0){v=x%_;const Z=_-v;v!==0&&Z-E.boundary<0&&(x+=_-v,m.__offset=x)}x+=E.storage}return v=x%_,v>0&&(x+=_-v),T.__size=x,T.__cache={},this}function p(T){const A={boundary:0,storage:0};return typeof T=="number"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function M(T){const A=T.target;A.removeEventListener("dispose",M);const x=a.indexOf(A.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function f(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class La{constructor(e={}){const{canvas:t=Kc(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const d=new Uint32Array(4),I=new Int32Array(4);let p=null,M=null;const f=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lt,this._useLegacyLights=!1,this.toneMapping=hn,this.toneMappingExposure=1;const A=this;let x=!1,_=0,v=0,w=null,R=-1,m=null;const E=new gt,G=new gt;let Z=null;const K=new Xe(0);let z=0,k=t.width,Q=t.height,H=1,se=null,W=null;const V=new gt(0,0,k,Q),O=new gt(0,0,k,Q);let j=!1;const ge=new wa;let fe=!1,pe=!1,Te=null;const Se=new rt,Ee=new Me,Ye=new b,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return w===null?H:1}let C=n;function ae(N,U){for(let P=0;P<N.length;P++){const L=N[P],F=t.getContext(L,U);if(F!==null)return F}return null}try{const N={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:g,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dr}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),C===null){const U=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&U.shift(),C=ae(U,N),C===null)throw ae(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Y,ne,X,xe,de,De,Ue,Ge,$e,S,D,B,ee,q,te,me,re,ue,ve,Qe,ie,Ve,Le,ze;function _e(){Y=new hu(C),ne=new su(C,Y,e),Y.init(ne),Ve=new Jf(C,Y,ne),X=new Wf(C,Y,ne),xe=new Mu(C),de=new Of,De=new Xf(C,Y,X,de,ne,Ve,xe),Ue=new ou(A),Ge=new gu(A),$e=new Sl(C,ne),Le=new nu(C,Y,$e,ne),S=new uu(C,$e,xe,Le),D=new Au(C,S,$e,xe),ve=new pu(C,ne,De),me=new ru(de),B=new bf(A,Ue,Ge,Y,ne,Le,me),ee=new eM(A,de),q=new Lf,te=new kf(Y,ne),ue=new tu(A,Ue,Ge,X,D,u,c),re=new Vf(A,D,ne),ze=new tM(C,xe,ne,X),Qe=new iu(C,Y,xe,ne),ie=new fu(C,Y,xe,ne),xe.programs=B.programs,A.capabilities=ne,A.extensions=Y,A.properties=de,A.renderLists=q,A.shadowMap=re,A.state=X,A.info=xe}_e();const y=new $f(A,C);this.xr=y,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const N=Y.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Y.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(N){N!==void 0&&(H=N,this.setSize(k,Q,!1))},this.getSize=function(N){return N.set(k,Q)},this.setSize=function(N,U,P=!0){if(y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=N,Q=U,t.width=Math.floor(N*H),t.height=Math.floor(U*H),P===!0&&(t.style.width=N+"px",t.style.height=U+"px"),this.setViewport(0,0,N,U)},this.getDrawingBufferSize=function(N){return N.set(k*H,Q*H).floor()},this.setDrawingBufferSize=function(N,U,P){k=N,Q=U,H=P,t.width=Math.floor(N*P),t.height=Math.floor(U*P),this.setViewport(0,0,N,U)},this.getCurrentViewport=function(N){return N.copy(E)},this.getViewport=function(N){return N.copy(V)},this.setViewport=function(N,U,P,L){N.isVector4?V.set(N.x,N.y,N.z,N.w):V.set(N,U,P,L),X.viewport(E.copy(V).multiplyScalar(H).floor())},this.getScissor=function(N){return N.copy(O)},this.setScissor=function(N,U,P,L){N.isVector4?O.set(N.x,N.y,N.z,N.w):O.set(N,U,P,L),X.scissor(G.copy(O).multiplyScalar(H).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(N){X.setScissorTest(j=N)},this.setOpaqueSort=function(N){se=N},this.setTransparentSort=function(N){W=N},this.getClearColor=function(N){return N.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(N=!0,U=!0,P=!0){let L=0;if(N){let F=!1;if(w!==null){const Ae=w.texture.format;F=Ae===pa||Ae===Ia||Ae===da}if(F){const Ae=w.texture.type,ye=Ae===un||Ae===cn||Ae===Ir||Ae===En||Ae===fa||Ae===Ma,be=ue.getClearColor(),Oe=ue.getClearAlpha(),Fe=be.r,we=be.g,Re=be.b;ye?(d[0]=Fe,d[1]=we,d[2]=Re,d[3]=Oe,C.clearBufferuiv(C.COLOR,0,d)):(I[0]=Fe,I[1]=we,I[2]=Re,I[3]=Oe,C.clearBufferiv(C.COLOR,0,I))}else L|=C.COLOR_BUFFER_BIT}U&&(L|=C.DEPTH_BUFFER_BIT),P&&(L|=C.STENCIL_BUFFER_BIT),C.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),q.dispose(),te.dispose(),de.dispose(),Ue.dispose(),Ge.dispose(),D.dispose(),Le.dispose(),ze.dispose(),B.dispose(),y.dispose(),y.removeEventListener("sessionstart",Je),y.removeEventListener("sessionend",Rt),Te&&(Te.dispose(),Te=null),dt.stop()};function ce(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const N=xe.autoReset,U=re.enabled,P=re.autoUpdate,L=re.needsUpdate,F=re.type;_e(),xe.autoReset=N,re.enabled=U,re.autoUpdate=P,re.needsUpdate=L,re.type=F}function Ie(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function he(N){const U=N.target;U.removeEventListener("dispose",he),J(U)}function J(N){Ne(N),de.remove(N)}function Ne(N){const U=de.get(N).programs;U!==void 0&&(U.forEach(function(P){B.releaseProgram(P)}),N.isShaderMaterial&&B.releaseShaderCache(N))}this.renderBufferDirect=function(N,U,P,L,F,Ae){U===null&&(U=Ze);const ye=F.isMesh&&F.matrixWorld.determinant()<0,be=Wa(N,U,P,L,F);X.setMaterial(L,ye);let Oe=P.index,Fe=1;if(L.wireframe===!0){if(Oe=S.getWireframeAttribute(P),Oe===void 0)return;Fe=2}const we=P.drawRange,Re=P.attributes.position;let et=we.start*Fe,tt=(we.start+we.count)*Fe;Ae!==null&&(et=Math.max(et,Ae.start*Fe),tt=Math.min(tt,(Ae.start+Ae.count)*Fe)),Oe!==null?(et=Math.max(et,0),tt=Math.min(tt,Oe.count)):Re!=null&&(et=Math.max(et,0),tt=Math.min(tt,Re.count));const _t=tt-et;if(_t<0||_t===1/0)return;Le.setup(F,L,be,P,Oe);let Qt,nt=Qe;if(Oe!==null&&(Qt=$e.get(Oe),nt=ie,nt.setIndex(Qt)),F.isMesh)L.wireframe===!0?(X.setLineWidth(L.wireframeLinewidth*Ce()),nt.setMode(C.LINES)):nt.setMode(C.TRIANGLES);else if(F.isLine){let ke=L.linewidth;ke===void 0&&(ke=1),X.setLineWidth(ke*Ce()),F.isLineSegments?nt.setMode(C.LINES):F.isLineLoop?nt.setMode(C.LINE_LOOP):nt.setMode(C.LINE_STRIP)}else F.isPoints?nt.setMode(C.POINTS):F.isSprite&&nt.setMode(C.TRIANGLES);if(F.isInstancedMesh)nt.renderInstances(et,_t,F.count);else if(P.isInstancedBufferGeometry){const ke=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,ds=Math.min(P.instanceCount,ke);nt.renderInstances(et,_t,ds)}else nt.render(et,_t)},this.compile=function(N,U){function P(L,F,Ae){L.transparent===!0&&L.side===Pt&&L.forceSinglePass===!1?(L.side=xt,L.needsUpdate=!0,Ti(L,F,Ae),L.side=fn,L.needsUpdate=!0,Ti(L,F,Ae),L.side=Pt):Ti(L,F,Ae)}M=te.get(N),M.init(),T.push(M),N.traverseVisible(function(L){L.isLight&&L.layers.test(U.layers)&&(M.pushLight(L),L.castShadow&&M.pushShadow(L))}),M.setupLights(A._useLegacyLights),N.traverse(function(L){const F=L.material;if(F)if(Array.isArray(F))for(let Ae=0;Ae<F.length;Ae++){const ye=F[Ae];P(ye,N,L)}else P(F,N,L)}),T.pop(),M=null};let Be=null;function Mt(N){Be&&Be(N)}function Je(){dt.stop()}function Rt(){dt.start()}const dt=new va;dt.setAnimationLoop(Mt),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(N){Be=N,y.setAnimationLoop(N),N===null?dt.stop():dt.start()},y.addEventListener("sessionstart",Je),y.addEventListener("sessionend",Rt),this.render=function(N,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),y.enabled===!0&&y.isPresenting===!0&&(y.cameraAutoUpdate===!0&&y.updateCamera(U),U=y.getCamera()),N.isScene===!0&&N.onBeforeRender(A,N,U,w),M=te.get(N,T.length),M.init(),T.push(M),Se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ge.setFromProjectionMatrix(Se),pe=this.localClippingEnabled,fe=me.init(this.clippingPlanes,pe),p=q.get(N,f.length),p.init(),f.push(p),Tr(N,U,0,A.sortObjects),p.finish(),A.sortObjects===!0&&p.sort(se,W),this.info.render.frame++,fe===!0&&me.beginShadows();const P=M.state.shadowsArray;if(re.render(P,N,U),fe===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(p,N),M.setupLights(A._useLegacyLights),U.isArrayCamera){const L=U.cameras;for(let F=0,Ae=L.length;F<Ae;F++){const ye=L[F];yr(p,N,ye,ye.viewport)}}else yr(p,N,U);w!==null&&(De.updateMultisampleRenderTarget(w),De.updateRenderTargetMipmap(w)),N.isScene===!0&&N.onAfterRender(A,N,U),Le.resetDefaultState(),R=-1,m=null,T.pop(),T.length>0?M=T[T.length-1]:M=null,f.pop(),f.length>0?p=f[f.length-1]:p=null};function Tr(N,U,P,L){if(N.visible===!1)return;if(N.layers.test(U.layers)){if(N.isGroup)P=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(U);else if(N.isLight)M.pushLight(N),N.castShadow&&M.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||ge.intersectsSprite(N)){L&&Ye.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Se);const ye=D.update(N),be=N.material;be.visible&&p.push(N,ye,be,P,Ye.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||ge.intersectsObject(N))){const ye=D.update(N),be=N.material;if(L&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ye.copy(N.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ye.copy(ye.boundingSphere.center)),Ye.applyMatrix4(N.matrixWorld).applyMatrix4(Se)),Array.isArray(be)){const Oe=ye.groups;for(let Fe=0,we=Oe.length;Fe<we;Fe++){const Re=Oe[Fe],et=be[Re.materialIndex];et&&et.visible&&p.push(N,ye,et,P,Ye.z,Re)}}else be.visible&&p.push(N,ye,be,P,Ye.z,null)}}const Ae=N.children;for(let ye=0,be=Ae.length;ye<be;ye++)Tr(Ae[ye],U,P,L)}function yr(N,U,P,L){const F=N.opaque,Ae=N.transmissive,ye=N.transparent;M.setupLightsView(P),fe===!0&&me.setGlobalState(A.clippingPlanes,P),Ae.length>0&&Va(F,Ae,U,P),L&&X.viewport(E.copy(L)),F.length>0&&Ei(F,U,P),Ae.length>0&&Ei(Ae,U,P),ye.length>0&&Ei(ye,U,P),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Va(N,U,P,L){const F=ne.isWebGL2;Te===null&&(Te=new _n(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?Ii:un,minFilter:di,samples:F?4:0})),A.getDrawingBufferSize(Ee),F?Te.setSize(Ee.x,Ee.y):Te.setSize(cr(Ee.x),cr(Ee.y));const Ae=A.getRenderTarget();A.setRenderTarget(Te),A.getClearColor(K),z=A.getClearAlpha(),z<1&&A.setClearColor(16777215,.5),A.clear();const ye=A.toneMapping;A.toneMapping=hn,Ei(N,P,L),De.updateMultisampleRenderTarget(Te),De.updateRenderTargetMipmap(Te);let be=!1;for(let Oe=0,Fe=U.length;Oe<Fe;Oe++){const we=U[Oe],Re=we.object,et=we.geometry,tt=we.material,_t=we.group;if(tt.side===Pt&&Re.layers.test(L.layers)){const Qt=tt.side;tt.side=xt,tt.needsUpdate=!0,_r(Re,P,L,et,tt,_t),tt.side=Qt,tt.needsUpdate=!0,be=!0}}be===!0&&(De.updateMultisampleRenderTarget(Te),De.updateRenderTargetMipmap(Te)),A.setRenderTarget(Ae),A.setClearColor(K,z),A.toneMapping=ye}function Ei(N,U,P){const L=U.isScene===!0?U.overrideMaterial:null;for(let F=0,Ae=N.length;F<Ae;F++){const ye=N[F],be=ye.object,Oe=ye.geometry,Fe=L===null?ye.material:L,we=ye.group;be.layers.test(P.layers)&&_r(be,U,P,Oe,Fe,we)}}function _r(N,U,P,L,F,Ae){N.onBeforeRender(A,U,P,L,F,Ae),N.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),F.onBeforeRender(A,U,P,L,N,Ae),F.transparent===!0&&F.side===Pt&&F.forceSinglePass===!1?(F.side=xt,F.needsUpdate=!0,A.renderBufferDirect(P,U,L,F,N,Ae),F.side=fn,F.needsUpdate=!0,A.renderBufferDirect(P,U,L,F,N,Ae),F.side=Pt):A.renderBufferDirect(P,U,L,F,N,Ae),N.onAfterRender(A,U,P,L,F,Ae)}function Ti(N,U,P){U.isScene!==!0&&(U=Ze);const L=de.get(N),F=M.state.lights,Ae=M.state.shadowsArray,ye=F.state.version,be=B.getParameters(N,F.state,Ae,U,P),Oe=B.getProgramCacheKey(be);let Fe=L.programs;L.environment=N.isMeshStandardMaterial?U.environment:null,L.fog=U.fog,L.envMap=(N.isMeshStandardMaterial?Ge:Ue).get(N.envMap||L.environment),Fe===void 0&&(N.addEventListener("dispose",he),Fe=new Map,L.programs=Fe);let we=Fe.get(Oe);if(we!==void 0){if(L.currentProgram===we&&L.lightsStateVersion===ye)return Cr(N,be),we}else be.uniforms=B.getUniforms(N),N.onBuild(P,be,A),N.onBeforeCompile(be,A),we=B.acquireProgram(be,Oe),Fe.set(Oe,we),L.uniforms=be.uniforms;const Re=L.uniforms;(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Re.clippingPlanes=me.uniform),Cr(N,be),L.needsLights=Ja(N),L.lightsStateVersion=ye,L.needsLights&&(Re.ambientLightColor.value=F.state.ambient,Re.lightProbe.value=F.state.probe,Re.directionalLights.value=F.state.directional,Re.directionalLightShadows.value=F.state.directionalShadow,Re.spotLights.value=F.state.spot,Re.spotLightShadows.value=F.state.spotShadow,Re.rectAreaLights.value=F.state.rectArea,Re.ltc_1.value=F.state.rectAreaLTC1,Re.ltc_2.value=F.state.rectAreaLTC2,Re.pointLights.value=F.state.point,Re.pointLightShadows.value=F.state.pointShadow,Re.hemisphereLights.value=F.state.hemi,Re.directionalShadowMap.value=F.state.directionalShadowMap,Re.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Re.spotShadowMap.value=F.state.spotShadowMap,Re.spotLightMatrix.value=F.state.spotLightMatrix,Re.spotLightMap.value=F.state.spotLightMap,Re.pointShadowMap.value=F.state.pointShadowMap,Re.pointShadowMatrix.value=F.state.pointShadowMatrix);const et=we.getUniforms(),tt=es.seqWithValue(et.seq,Re);return L.currentProgram=we,L.uniformsList=tt,we}function Cr(N,U){const P=de.get(N);P.outputColorSpace=U.outputColorSpace,P.instancing=U.instancing,P.instancingColor=U.instancingColor,P.skinning=U.skinning,P.morphTargets=U.morphTargets,P.morphNormals=U.morphNormals,P.morphColors=U.morphColors,P.morphTargetsCount=U.morphTargetsCount,P.numClippingPlanes=U.numClippingPlanes,P.numIntersection=U.numClipIntersection,P.vertexAlphas=U.vertexAlphas,P.vertexTangents=U.vertexTangents,P.toneMapping=U.toneMapping}function Wa(N,U,P,L,F){U.isScene!==!0&&(U=Ze),De.resetTextureUnits();const Ae=U.fog,ye=L.isMeshStandardMaterial?U.environment:null,be=w===null?A.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:tn,Oe=(L.isMeshStandardMaterial?Ge:Ue).get(L.envMap||ye),Fe=L.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,we=!!P.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),Re=!!P.morphAttributes.position,et=!!P.morphAttributes.normal,tt=!!P.morphAttributes.color;let _t=hn;L.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(_t=A.toneMapping);const Qt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,nt=Qt!==void 0?Qt.length:0,ke=de.get(L),ds=M.state.lights;if(fe===!0&&(pe===!0||N!==m)){const St=N===m&&L.id===R;me.setState(L,N,St)}let it=!1;L.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ds.state.version||ke.outputColorSpace!==be||F.isInstancedMesh&&ke.instancing===!1||!F.isInstancedMesh&&ke.instancing===!0||F.isSkinnedMesh&&ke.skinning===!1||!F.isSkinnedMesh&&ke.skinning===!0||F.isInstancedMesh&&ke.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ke.instancingColor===!1&&F.instanceColor!==null||ke.envMap!==Oe||L.fog===!0&&ke.fog!==Ae||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==me.numPlanes||ke.numIntersection!==me.numIntersection)||ke.vertexAlphas!==Fe||ke.vertexTangents!==we||ke.morphTargets!==Re||ke.morphNormals!==et||ke.morphColors!==tt||ke.toneMapping!==_t||ne.isWebGL2===!0&&ke.morphTargetsCount!==nt)&&(it=!0):(it=!0,ke.__version=L.version);let Mn=ke.currentProgram;it===!0&&(Mn=Ti(L,U,F));let wr=!1,ri=!1,Is=!1;const It=Mn.getUniforms(),dn=ke.uniforms;if(X.useProgram(Mn.program)&&(wr=!0,ri=!0,Is=!0),L.id!==R&&(R=L.id,ri=!0),wr||m!==N){It.setValue(C,"projectionMatrix",N.projectionMatrix),It.setValue(C,"viewMatrix",N.matrixWorldInverse);const St=It.map.cameraPosition;St!==void 0&&St.setValue(C,Ye.setFromMatrixPosition(N.matrixWorld)),ne.logarithmicDepthBuffer&&It.setValue(C,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&It.setValue(C,"isOrthographic",N.isOrthographicCamera===!0),m!==N&&(m=N,ri=!0,Is=!0)}if(F.isSkinnedMesh){It.setOptional(C,F,"bindMatrix"),It.setOptional(C,F,"bindMatrixInverse");const St=F.skeleton;St&&(ne.floatVertexTextures?(St.boneTexture===null&&St.computeBoneTexture(),It.setValue(C,"boneTexture",St.boneTexture,De),It.setValue(C,"boneTextureSize",St.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ps=P.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0&&ne.isWebGL2===!0)&&ve.update(F,P,Mn),(ri||ke.receiveShadow!==F.receiveShadow)&&(ke.receiveShadow=F.receiveShadow,It.setValue(C,"receiveShadow",F.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(dn.envMap.value=Oe,dn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ri&&(It.setValue(C,"toneMappingExposure",A.toneMappingExposure),ke.needsLights&&Xa(dn,Is),Ae&&L.fog===!0&&ee.refreshFogUniforms(dn,Ae),ee.refreshMaterialUniforms(dn,L,H,Q,Te),es.upload(C,ke.uniformsList,dn,De)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(es.upload(C,ke.uniformsList,dn,De),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&It.setValue(C,"center",F.center),It.setValue(C,"modelViewMatrix",F.modelViewMatrix),It.setValue(C,"normalMatrix",F.normalMatrix),It.setValue(C,"modelMatrix",F.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const St=L.uniformsGroups;for(let As=0,qa=St.length;As<qa;As++)if(ne.isWebGL2){const vr=St[As];ze.update(vr,Mn),ze.bind(vr,Mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mn}function Xa(N,U){N.ambientLightColor.needsUpdate=U,N.lightProbe.needsUpdate=U,N.directionalLights.needsUpdate=U,N.directionalLightShadows.needsUpdate=U,N.pointLights.needsUpdate=U,N.pointLightShadows.needsUpdate=U,N.spotLights.needsUpdate=U,N.spotLightShadows.needsUpdate=U,N.rectAreaLights.needsUpdate=U,N.hemisphereLights.needsUpdate=U}function Ja(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(N,U,P){de.get(N.texture).__webglTexture=U,de.get(N.depthTexture).__webglTexture=P;const L=de.get(N);L.__hasExternalTextures=!0,L.__hasExternalTextures&&(L.__autoAllocateDepthBuffer=P===void 0,L.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,U){const P=de.get(N);P.__webglFramebuffer=U,P.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(N,U=0,P=0){w=N,_=U,v=P;let L=!0,F=null,Ae=!1,ye=!1;if(N){const Oe=de.get(N);Oe.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(C.FRAMEBUFFER,null),L=!1):Oe.__webglFramebuffer===void 0?De.setupRenderTarget(N):Oe.__hasExternalTextures&&De.rebindTextures(N,de.get(N.texture).__webglTexture,de.get(N.depthTexture).__webglTexture);const Fe=N.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);const we=de.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(we[U])?F=we[U][P]:F=we[U],Ae=!0):ne.isWebGL2&&N.samples>0&&De.useMultisampledRTT(N)===!1?F=de.get(N).__webglMultisampledFramebuffer:Array.isArray(we)?F=we[P]:F=we,E.copy(N.viewport),G.copy(N.scissor),Z=N.scissorTest}else E.copy(V).multiplyScalar(H).floor(),G.copy(O).multiplyScalar(H).floor(),Z=j;if(X.bindFramebuffer(C.FRAMEBUFFER,F)&&ne.drawBuffers&&L&&X.drawBuffers(N,F),X.viewport(E),X.scissor(G),X.setScissorTest(Z),Ae){const Oe=de.get(N.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Oe.__webglTexture,P)}else if(ye){const Oe=de.get(N.texture),Fe=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Oe.__webglTexture,P||0,Fe)}R=-1},this.readRenderTargetPixels=function(N,U,P,L,F,Ae,ye){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=de.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){X.bindFramebuffer(C.FRAMEBUFFER,be);try{const Oe=N.texture,Fe=Oe.format,we=Oe.type;if(Fe!==Bt&&Ve.convert(Fe)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=we===Ii&&(Y.has("EXT_color_buffer_half_float")||ne.isWebGL2&&Y.has("EXT_color_buffer_float"));if(we!==un&&Ve.convert(we)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===ln&&(ne.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=N.width-L&&P>=0&&P<=N.height-F&&C.readPixels(U,P,L,F,Ve.convert(Fe),Ve.convert(we),Ae)}finally{const Oe=w!==null?de.get(w).__webglFramebuffer:null;X.bindFramebuffer(C.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(N,U,P=0){const L=Math.pow(2,-P),F=Math.floor(U.image.width*L),Ae=Math.floor(U.image.height*L);De.setTexture2D(U,0),C.copyTexSubImage2D(C.TEXTURE_2D,P,0,0,N.x,N.y,F,Ae),X.unbindTexture()},this.copyTextureToTexture=function(N,U,P,L=0){const F=U.image.width,Ae=U.image.height,ye=Ve.convert(P.format),be=Ve.convert(P.type);De.setTexture2D(P,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,P.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,P.unpackAlignment),U.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,L,N.x,N.y,F,Ae,ye,be,U.image.data):U.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,L,N.x,N.y,U.mipmaps[0].width,U.mipmaps[0].height,ye,U.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,L,N.x,N.y,ye,be,U.image),L===0&&P.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(N,U,P,L,F=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=N.max.x-N.min.x+1,ye=N.max.y-N.min.y+1,be=N.max.z-N.min.z+1,Oe=Ve.convert(L.format),Fe=Ve.convert(L.type);let we;if(L.isData3DTexture)De.setTexture3D(L,0),we=C.TEXTURE_3D;else if(L.isDataArrayTexture)De.setTexture2DArray(L,0),we=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);const Re=C.getParameter(C.UNPACK_ROW_LENGTH),et=C.getParameter(C.UNPACK_IMAGE_HEIGHT),tt=C.getParameter(C.UNPACK_SKIP_PIXELS),_t=C.getParameter(C.UNPACK_SKIP_ROWS),Qt=C.getParameter(C.UNPACK_SKIP_IMAGES),nt=P.isCompressedTexture?P.mipmaps[0]:P.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,nt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,nt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,N.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,N.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,N.min.z),P.isDataTexture||P.isData3DTexture?C.texSubImage3D(we,F,U.x,U.y,U.z,Ae,ye,be,Oe,Fe,nt.data):P.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(we,F,U.x,U.y,U.z,Ae,ye,be,Oe,nt.data)):C.texSubImage3D(we,F,U.x,U.y,U.z,Ae,ye,be,Oe,Fe,nt),C.pixelStorei(C.UNPACK_ROW_LENGTH,Re),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,et),C.pixelStorei(C.UNPACK_SKIP_PIXELS,tt),C.pixelStorei(C.UNPACK_SKIP_ROWS,_t),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Qt),F===0&&L.generateMipmaps&&C.generateMipmap(we),X.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?De.setTextureCube(N,0):N.isData3DTexture?De.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?De.setTexture2DArray(N,0):De.setTexture2D(N,0),X.unbindTexture()},this.resetState=function(){_=0,v=0,w=null,X.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===pr?"display-p3":"srgb",t.unpackColorSpace=We.workingColorSpace===cs?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===lt?yn:Aa}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yn?lt:tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class nM extends La{}nM.prototype.isWebGL1Renderer=!0;class iM extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ba extends Ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zo=new b,Ko=new b,$o=new rt,Js=new Ar,Xi=new ls;class sM extends Nt{constructor(e=new Ht,t=new Ba){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Zo.fromBufferAttribute(t,s-1),Ko.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Zo.distanceTo(Ko);e.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere),Xi.applyMatrix4(s),Xi.radius+=r,e.ray.intersectsSphere(Xi)===!1)return;$o.copy(s).invert(),Js.copy(e.ray).applyMatrix4($o);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new b,g=new b,h=new b,u=new b,d=this.isLineSegments?2:1,I=n.index,M=n.attributes.position;if(I!==null){const f=Math.max(0,a.start),T=Math.min(I.count,a.start+a.count);for(let A=f,x=T-1;A<x;A+=d){const _=I.getX(A),v=I.getX(A+1);if(l.fromBufferAttribute(M,_),g.fromBufferAttribute(M,v),Js.distanceSqToSegment(l,g,u,h)>c)continue;u.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(u);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),T=Math.min(M.count,a.start+a.count);for(let A=f,x=T-1;A<x;A+=d){if(l.fromBufferAttribute(M,A),g.fromBufferAttribute(M,A+1),Js.distanceSqToSegment(l,g,u,h)>c)continue;u.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(u);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class Yt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const g=n[s],u=n[s+1]-g,d=(a-g)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Me:new b);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new b,s=[],r=[],a=[],o=new b,c=new rt;for(let d=0;d<=e;d++){const I=d/e;s[d]=this.getTangentAt(I,new b)}r[0]=new b,a[0]=new b;let l=Number.MAX_VALUE;const g=Math.abs(s[0].x),h=Math.abs(s[0].y),u=Math.abs(s[0].z);g<=l&&(l=g,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const I=Math.acos(ft(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,I))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ft(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let I=1;I<=e;I++)r[I].applyMatrix4(c.makeRotationAxis(s[I],d*I)),a[I].crossVectors(s[I],r[I])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xr extends Yt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){const n=t||new Me,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const g=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*g-d*h+this.aX,l=u*h+d*g+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class rM extends xr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Nr(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,g,h){let u=(a-r)/l-(o-r)/(l+g)+(o-a)/g,d=(o-a)/g-(c-a)/(g+h)+(c-o)/h;u*=g,d*=g,s(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Ji=new b,qs=new Nr,Zs=new Nr,Ks=new Nr;class oM extends Yt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new b){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,g;this.closed||o>0?l=s[(o-1)%r]:(Ji.subVectors(s[0],s[1]).add(s[0]),l=Ji);const h=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?g=s[(o+2)%r]:(Ji.subVectors(s[r-1],s[r-2]).add(s[r-1]),g=Ji),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let I=Math.pow(l.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d),M=Math.pow(u.distanceToSquared(g),d);p<1e-4&&(p=1),I<1e-4&&(I=p),M<1e-4&&(M=p),qs.initNonuniformCatmullRom(l.x,h.x,u.x,g.x,I,p,M),Zs.initNonuniformCatmullRom(l.y,h.y,u.y,g.y,I,p,M),Ks.initNonuniformCatmullRom(l.z,h.z,u.z,g.z,I,p,M)}else this.curveType==="catmullrom"&&(qs.initCatmullRom(l.x,h.x,u.x,g.x,this.tension),Zs.initCatmullRom(l.y,h.y,u.y,g.y,this.tension),Ks.initCatmullRom(l.z,h.z,u.z,g.z,this.tension));return n.set(qs.calc(c),Zs.calc(c),Ks.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new b().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ea(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function aM(i,e){const t=1-i;return t*t*e}function cM(i,e){return 2*(1-i)*i*e}function lM(i,e){return i*i*e}function fi(i,e,t,n){return aM(i,e)+cM(i,t)+lM(i,n)}function gM(i,e){const t=1-i;return t*t*t*e}function hM(i,e){const t=1-i;return 3*t*t*i*e}function uM(i,e){return 3*(1-i)*i*i*e}function fM(i,e){return i*i*i*e}function Mi(i,e,t,n,s){return gM(i,e)+hM(i,t)+uM(i,n)+fM(i,s)}class Ra extends Yt{constructor(e=new Me,t=new Me,n=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Me){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Mi(e,s.x,r.x,a.x,o.x),Mi(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class MM extends Yt{constructor(e=new b,t=new b,n=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new b){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Mi(e,s.x,r.x,a.x,o.x),Mi(e,s.y,r.y,a.y,o.y),Mi(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ja extends Yt{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dM extends Yt{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pa extends Yt{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(fi(e,s.x,r.x,a.x),fi(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class IM extends Yt{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(fi(e,s.x,r.x,a.x),fi(e,s.y,r.y,a.y),fi(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fa extends Yt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],g=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(ea(o,c.x,l.x,g.x,h.x),ea(o,c.y,l.y,g.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Me().fromArray(s))}return this}}var gr=Object.freeze({__proto__:null,ArcCurve:rM,CatmullRomCurve3:oM,CubicBezierCurve:Ra,CubicBezierCurve3:MM,EllipseCurve:xr,LineCurve:ja,LineCurve3:dM,QuadraticBezierCurve:Pa,QuadraticBezierCurve3:IM,SplineCurve:Fa});class pM extends Yt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gr[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const g=c[l];n&&n.equals(g)||(t.push(g),n=g)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new gr[s.type]().fromJSON(s))}return this}}class hr extends pM{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ja(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Pa(this.currentPoint.clone(),new Me(e,t),new Me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Ra(this.currentPoint.clone(),new Me(e,t),new Me(n,s),new Me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Fa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){const l=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+l,t+g,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){const l=new xr(e,t,n,s,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const g=l.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ts extends hr{constructor(e){super(e),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new hr().fromJSON(s))}return this}}const AM={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=ka(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,g,h,u,d;if(n&&(r=SM(i,e,r,t)),i.length>80*t){o=l=i[0],c=g=i[1];for(let I=t;I<s;I+=t)h=i[I],u=i[I+1],h<o&&(o=h),u<c&&(c=u),h>l&&(l=h),u>g&&(g=u);d=Math.max(l-o,g-c),d=d!==0?32767/d:0}return pi(r,a,t,o,c,d,0),a}};function ka(i,e,t,n,s){let r,a;if(s===UM(i,e,t,n)>0)for(r=e;r<t;r+=n)a=ta(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=ta(r,i[r],i[r+1],a);return a&&Ms(a,a.next)&&(Di(a),a=a.next),a}function wn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ms(t,t.next)||Ke(t.prev,t,t.next)===0)){if(Di(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function pi(i,e,t,n,s,r,a){if(!i)return;!a&&r&&CM(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?mM(i,n,s,r):DM(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Di(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=xM(wn(i),e,t),pi(i,e,t,n,s,r,2)):a===2&&NM(i,e,t,n,s,r):pi(wn(i),e,t,n,s,r,1);break}}}function DM(i){const e=i.prev,t=i,n=i.next;if(Ke(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,g=s<r?s<a?s:a:r<a?r:a,h=o<c?o<l?o:l:c<l?c:l,u=s>r?s>a?s:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l;let I=n.next;for(;I!==e;){if(I.x>=g&&I.x<=u&&I.y>=h&&I.y<=d&&Xn(s,o,r,c,a,l,I.x,I.y)&&Ke(I.prev,I,I.next)>=0)return!1;I=I.next}return!0}function mM(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Ke(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,g=s.y,h=r.y,u=a.y,d=o<c?o<l?o:l:c<l?c:l,I=g<h?g<u?g:u:h<u?h:u,p=o>c?o>l?o:l:c>l?c:l,M=g>h?g>u?g:u:h>u?h:u,f=ur(d,I,e,t,n),T=ur(p,M,e,t,n);let A=i.prevZ,x=i.nextZ;for(;A&&A.z>=f&&x&&x.z<=T;){if(A.x>=d&&A.x<=p&&A.y>=I&&A.y<=M&&A!==s&&A!==a&&Xn(o,g,c,h,l,u,A.x,A.y)&&Ke(A.prev,A,A.next)>=0||(A=A.prevZ,x.x>=d&&x.x<=p&&x.y>=I&&x.y<=M&&x!==s&&x!==a&&Xn(o,g,c,h,l,u,x.x,x.y)&&Ke(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;A&&A.z>=f;){if(A.x>=d&&A.x<=p&&A.y>=I&&A.y<=M&&A!==s&&A!==a&&Xn(o,g,c,h,l,u,A.x,A.y)&&Ke(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;x&&x.z<=T;){if(x.x>=d&&x.x<=p&&x.y>=I&&x.y<=M&&x!==s&&x!==a&&Xn(o,g,c,h,l,u,x.x,x.y)&&Ke(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function xM(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Ms(s,r)&&Ga(s,n,n.next,r)&&Ai(s,r)&&Ai(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Di(n),Di(n.next),n=i=r),n=n.next}while(n!==i);return wn(n)}function NM(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&zM(a,o)){let c=Ha(a,o);a=wn(a,a.next),c=wn(c,c.next),pi(a,e,t,n,s,r,0),pi(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function SM(i,e,t,n){const s=[];let r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=ka(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(vM(l));for(s.sort(EM),r=0;r<s.length;r++)t=TM(s[r],t);return t}function EM(i,e){return i.x-e.x}function TM(i,e){const t=yM(i,e);if(!t)return e;const n=Ha(t,i);return wn(n,n.next),wn(t,t.next)}function yM(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,c=s.x,l=s.y;let g=1/0,h;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Xn(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(r-t.x),Ai(t,i)&&(h<g||h===g&&(t.x>s.x||t.x===s.x&&_M(s,t)))&&(s=t,g=h)),t=t.next;while(t!==o);return s}function _M(i,e){return Ke(i.prev,i,e.prev)<0&&Ke(e.next,i,i.next)<0}function CM(i,e,t,n){let s=i;do s.z===0&&(s.z=ur(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wM(s)}function wM(i){let e,t,n,s,r,a,o,c,l=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(a>1);return i}function ur(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function vM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Xn(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function zM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!bM(i,e)&&(Ai(i,e)&&Ai(e,i)&&OM(i,e)&&(Ke(i.prev,i,e.prev)||Ke(i,e.prev,e))||Ms(i,e)&&Ke(i.prev,i,i.next)>0&&Ke(e.prev,e,e.next)>0)}function Ke(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ms(i,e){return i.x===e.x&&i.y===e.y}function Ga(i,e,t,n){const s=Zi(Ke(i,e,t)),r=Zi(Ke(i,e,n)),a=Zi(Ke(t,n,i)),o=Zi(Ke(t,n,e));return!!(s!==r&&a!==o||s===0&&qi(i,t,e)||r===0&&qi(i,n,e)||a===0&&qi(t,i,n)||o===0&&qi(t,e,n))}function qi(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Zi(i){return i>0?1:i<0?-1:0}function bM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ga(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ai(i,e){return Ke(i.prev,i,i.next)<0?Ke(i,e,i.next)>=0&&Ke(i,i.prev,e)>=0:Ke(i,e,i.prev)<0||Ke(i,i.next,e)<0}function OM(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ha(i,e){const t=new fr(i.i,i.x,i.y),n=new fr(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ta(i,e,t,n){const s=new fr(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Di(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fr(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function UM(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Zn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Zn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];na(e),ia(n,e);let a=e.length;t.forEach(na);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,ia(n,t[c]);const o=AM.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function na(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ia(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Sr extends Ht{constructor(e=new ts([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Gt(s,3)),this.setAttribute("uv",new Gt(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,g=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,I=t.bevelSize!==void 0?t.bevelSize:d-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,M=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:LM;let A,x=!1,_,v,w,R;f&&(A=f.getSpacedPoints(g),x=!0,u=!1,_=f.computeFrenetFrames(g,!1),v=new b,w=new b,R=new b),u||(M=0,d=0,I=0,p=0);const m=o.extractPoints(l);let E=m.shape;const G=m.holes;if(!Zn.isClockWise(E)){E=E.reverse();for(let C=0,ae=G.length;C<ae;C++){const Y=G[C];Zn.isClockWise(Y)&&(G[C]=Y.reverse())}}const K=Zn.triangulateShape(E,G),z=E;for(let C=0,ae=G.length;C<ae;C++){const Y=G[C];E=E.concat(Y)}function k(C,ae,Y){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(ae,Y)}const Q=E.length,H=K.length;function se(C,ae,Y){let ne,X,xe;const de=C.x-ae.x,De=C.y-ae.y,Ue=Y.x-C.x,Ge=Y.y-C.y,$e=de*de+De*De,S=de*Ge-De*Ue;if(Math.abs(S)>Number.EPSILON){const D=Math.sqrt($e),B=Math.sqrt(Ue*Ue+Ge*Ge),ee=ae.x-De/D,q=ae.y+de/D,te=Y.x-Ge/B,me=Y.y+Ue/B,re=((te-ee)*Ge-(me-q)*Ue)/(de*Ge-De*Ue);ne=ee+de*re-C.x,X=q+De*re-C.y;const ue=ne*ne+X*X;if(ue<=2)return new Me(ne,X);xe=Math.sqrt(ue/2)}else{let D=!1;de>Number.EPSILON?Ue>Number.EPSILON&&(D=!0):de<-Number.EPSILON?Ue<-Number.EPSILON&&(D=!0):Math.sign(De)===Math.sign(Ge)&&(D=!0),D?(ne=-De,X=de,xe=Math.sqrt($e)):(ne=de,X=De,xe=Math.sqrt($e/2))}return new Me(ne/xe,X/xe)}const W=[];for(let C=0,ae=z.length,Y=ae-1,ne=C+1;C<ae;C++,Y++,ne++)Y===ae&&(Y=0),ne===ae&&(ne=0),W[C]=se(z[C],z[Y],z[ne]);const V=[];let O,j=W.concat();for(let C=0,ae=G.length;C<ae;C++){const Y=G[C];O=[];for(let ne=0,X=Y.length,xe=X-1,de=ne+1;ne<X;ne++,xe++,de++)xe===X&&(xe=0),de===X&&(de=0),O[ne]=se(Y[ne],Y[xe],Y[de]);V.push(O),j=j.concat(O)}for(let C=0;C<M;C++){const ae=C/M,Y=d*Math.cos(ae*Math.PI/2),ne=I*Math.sin(ae*Math.PI/2)+p;for(let X=0,xe=z.length;X<xe;X++){const de=k(z[X],W[X],ne);Se(de.x,de.y,-Y)}for(let X=0,xe=G.length;X<xe;X++){const de=G[X];O=V[X];for(let De=0,Ue=de.length;De<Ue;De++){const Ge=k(de[De],O[De],ne);Se(Ge.x,Ge.y,-Y)}}}const ge=I+p;for(let C=0;C<Q;C++){const ae=u?k(E[C],j[C],ge):E[C];x?(w.copy(_.normals[0]).multiplyScalar(ae.x),v.copy(_.binormals[0]).multiplyScalar(ae.y),R.copy(A[0]).add(w).add(v),Se(R.x,R.y,R.z)):Se(ae.x,ae.y,0)}for(let C=1;C<=g;C++)for(let ae=0;ae<Q;ae++){const Y=u?k(E[ae],j[ae],ge):E[ae];x?(w.copy(_.normals[C]).multiplyScalar(Y.x),v.copy(_.binormals[C]).multiplyScalar(Y.y),R.copy(A[C]).add(w).add(v),Se(R.x,R.y,R.z)):Se(Y.x,Y.y,h/g*C)}for(let C=M-1;C>=0;C--){const ae=C/M,Y=d*Math.cos(ae*Math.PI/2),ne=I*Math.sin(ae*Math.PI/2)+p;for(let X=0,xe=z.length;X<xe;X++){const de=k(z[X],W[X],ne);Se(de.x,de.y,h+Y)}for(let X=0,xe=G.length;X<xe;X++){const de=G[X];O=V[X];for(let De=0,Ue=de.length;De<Ue;De++){const Ge=k(de[De],O[De],ne);x?Se(Ge.x,Ge.y+A[g-1].y,A[g-1].x+Y):Se(Ge.x,Ge.y,h+Y)}}}fe(),pe();function fe(){const C=s.length/3;if(u){let ae=0,Y=Q*ae;for(let ne=0;ne<H;ne++){const X=K[ne];Ee(X[2]+Y,X[1]+Y,X[0]+Y)}ae=g+M*2,Y=Q*ae;for(let ne=0;ne<H;ne++){const X=K[ne];Ee(X[0]+Y,X[1]+Y,X[2]+Y)}}else{for(let ae=0;ae<H;ae++){const Y=K[ae];Ee(Y[2],Y[1],Y[0])}for(let ae=0;ae<H;ae++){const Y=K[ae];Ee(Y[0]+Q*g,Y[1]+Q*g,Y[2]+Q*g)}}n.addGroup(C,s.length/3-C,0)}function pe(){const C=s.length/3;let ae=0;Te(z,ae),ae+=z.length;for(let Y=0,ne=G.length;Y<ne;Y++){const X=G[Y];Te(X,ae),ae+=X.length}n.addGroup(C,s.length/3-C,1)}function Te(C,ae){let Y=C.length;for(;--Y>=0;){const ne=Y;let X=Y-1;X<0&&(X=C.length-1);for(let xe=0,de=g+M*2;xe<de;xe++){const De=Q*xe,Ue=Q*(xe+1),Ge=ae+ne+De,$e=ae+X+De,S=ae+X+Ue,D=ae+ne+Ue;Ye(Ge,$e,S,D)}}}function Se(C,ae,Y){c.push(C),c.push(ae),c.push(Y)}function Ee(C,ae,Y){Ze(C),Ze(ae),Ze(Y);const ne=s.length/3,X=T.generateTopUV(n,s,ne-3,ne-2,ne-1);Ce(X[0]),Ce(X[1]),Ce(X[2])}function Ye(C,ae,Y,ne){Ze(C),Ze(ae),Ze(ne),Ze(ae),Ze(Y),Ze(ne);const X=s.length/3,xe=T.generateSideWallUV(n,s,X-6,X-3,X-2,X-1);Ce(xe[0]),Ce(xe[1]),Ce(xe[3]),Ce(xe[1]),Ce(xe[2]),Ce(xe[3])}function Ze(C){s.push(c[C*3+0]),s.push(c[C*3+1]),s.push(c[C*3+2])}function Ce(C){r.push(C.x),r.push(C.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return BM(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new gr[s.type]().fromJSON(s)),new Sr(n,e.options)}}const LM={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],g=e[s*3+1];return[new Me(r,a),new Me(o,c),new Me(l,g)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],g=e[n*3+1],h=e[n*3+2],u=e[s*3],d=e[s*3+1],I=e[s*3+2],p=e[r*3],M=e[r*3+1],f=e[r*3+2];return Math.abs(o-g)<Math.abs(a-l)?[new Me(a,1-c),new Me(l,1-h),new Me(u,1-I),new Me(p,1-f)]:[new Me(o,1-c),new Me(g,1-h),new Me(d,1-I),new Me(M,1-f)]}};function BM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}const sa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class RM{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(g){o++,r===!1&&s.onStart!==void 0&&s.onStart(g,a,o),r=!0},this.itemEnd=function(g){a++,s.onProgress!==void 0&&s.onProgress(g,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return c?c(g):g},this.setURLModifier=function(g){return c=g,this},this.addHandler=function(g,h){return l.push(g,h),this},this.removeHandler=function(g){const h=l.indexOf(g);return h!==-1&&l.splice(h,2),this},this.getHandler=function(g){for(let h=0,u=l.length;h<u;h+=2){const d=l[h],I=l[h+1];if(d.global&&(d.lastIndex=0),d.test(g))return I}return null}}}const jM=new RM;class Er{constructor(e){this.manager=e!==void 0?e:jM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Er.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kt={};class PM extends Error{constructor(e,t){super(e),this.response=t}}class FM extends Er{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=sa.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Kt[e]!==void 0){Kt[e].push({onLoad:t,onProgress:n,onError:s});return}Kt[e]=[],Kt[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const g=Kt[e],h=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=u?parseInt(u):0,I=d!==0;let p=0;const M=new ReadableStream({start(f){T();function T(){h.read().then(({done:A,value:x})=>{if(A)f.close();else{p+=x.byteLength;const _=new ProgressEvent("progress",{lengthComputable:I,loaded:p,total:d});for(let v=0,w=g.length;v<w;v++){const R=g[v];R.onProgress&&R.onProgress(_)}f.enqueue(x),T()}})}}});return new Response(M)}else throw new PM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(g=>new DOMParser().parseFromString(g,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then(I=>d.decode(I))}}}).then(l=>{sa.add(e,l);const g=Kt[e];delete Kt[e];for(let h=0,u=g.length;h<u;h++){const d=g[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const g=Kt[e];if(g===void 0)throw this.manager.itemError(e),l;delete Kt[e];for(let h=0,u=g.length;h<u;h++){const d=g[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class kM{constructor(e,t,n=0,s=1/0){this.ray=new Ar(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Mr(e,this,n,t),n.sort(ra),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Mr(e[s],this,n,t);return n.sort(ra),n}}function ra(i,e){return i.distance-e.distance}function Mr(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)Mr(s[r],e,t,!0)}}class GM{constructor(){this.type="ShapePath",this.color=new Xe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new hr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,a){return this.currentPath.bezierCurveTo(e,t,n,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const T=[];for(let A=0,x=f.length;A<x;A++){const _=f[A],v=new ts;v.curves=_.curves,T.push(v)}return T}function n(f,T){const A=T.length;let x=!1;for(let _=A-1,v=0;v<A;_=v++){let w=T[_],R=T[v],m=R.x-w.x,E=R.y-w.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(w=T[v],m=-m,R=T[_],E=-E),f.y<w.y||f.y>R.y)continue;if(f.y===w.y){if(f.x===w.x)return!0}else{const G=E*(f.x-w.x)-m*(f.y-w.y);if(G===0)return!0;if(G<0)continue;x=!x}}else{if(f.y!==w.y)continue;if(R.x<=f.x&&f.x<=w.x||w.x<=f.x&&f.x<=R.x)return!0}}return x}const s=Zn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c;const l=[];if(r.length===1)return o=r[0],c=new ts,c.curves=o.curves,l.push(c),l;let g=!s(r[0].getPoints());g=e?!g:g;const h=[],u=[];let d=[],I=0,p;u[I]=void 0,d[I]=[];for(let f=0,T=r.length;f<T;f++)o=r[f],p=o.getPoints(),a=s(p),a=e?!a:a,a?(!g&&u[I]&&I++,u[I]={s:new ts,p},u[I].s.curves=o.curves,g&&I++,d[I]=[]):d[I].push({h:o,p:p[0]});if(!u[0])return t(r);if(u.length>1){let f=!1,T=0;for(let A=0,x=u.length;A<x;A++)h[A]=[];for(let A=0,x=u.length;A<x;A++){const _=d[A];for(let v=0;v<_.length;v++){const w=_[v];let R=!0;for(let m=0;m<u.length;m++)n(w.p,u[m].p)&&(A!==m&&T++,R?(R=!1,h[m].push(w)):f=!0);R&&h[A].push(w)}}T>0&&f===!1&&(d=h)}let M;for(let f=0,T=u.length;f<T;f++){c=u[f].s,l.push(c),M=d[f];for(let A=0,x=M.length;A<x;A++)c.holes.push(M[A].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dr);const oa=i=>(Math.PI*2+i)%(Math.PI*2),$s=(i,e,t)=>({x:i.x*e+t.x,y:i.y*e+t.y,z:i.z*e+t.z});class Nn{constructor(e,t,n,s,r,a,o,c){He(this,"diag1");He(this,"diag2");He(this,"offsetOrigin");He(this,"gameScale");He(this,"baseColor");He(this,"scene");He(this,"planarMesh");He(this,"boundaryLine");He(this,"onLeftClickCallback");He(this,"onRightClickCallback");this.diag1=e,this.diag2=t,this.offsetOrigin=n,this.gameScale=s,this.baseColor=r,this.scene=a,this.planarMesh=this.createPlanarMesh(),this.boundaryLine=this.createBoundaryLine(),this.appendToScene(),this.onLeftClickCallback=o,this.onRightClickCallback=c}createPlanarMesh(){const e=new us(this.gameScale*.97,this.gameScale*.97),t=new hs({color:this.baseColor});t.side=Pt;const n=new Ft(e,t),s=$s({x:(this.diag1.x+this.diag2.x)/2,y:(this.diag1.y+this.diag2.y)/2,z:(this.diag1.z+this.diag2.z)/2},this.gameScale,this.offsetOrigin);return n.position.x=s.x,n.position.y=s.y,n.position.z=s.z,this.diag1.y===this.diag2.y?n.rotation.x=Math.PI/2:this.diag1.x===this.diag2.x?n.rotation.y=Math.PI/2:(this.diag1.z,this.diag2.z),n.name="Block-Surface",n.addEventListener("onhover",()=>{n.userData={hover:!0},t.color.set(21760)}),n.addEventListener("offhover",()=>{n.userData={hover:!1},t.color.set(this.baseColor)}),n.addEventListener("left-click",()=>{this.onLeftClickCallback()}),n.addEventListener("right-click",()=>{this.onRightClickCallback()}),n}createBoundaryLine(){const e=new Ba({color:16777215}),t=[],n=$s(this.diag1,this.gameScale,this.offsetOrigin),s=$s(this.diag2,this.gameScale,this.offsetOrigin);let r,a;if(n.y===s.y)r={x:n.x,y:n.y,z:s.z},a={x:s.x,y:n.y,z:n.z};else if(n.x===s.x)r={x:n.x,y:n.y,z:s.z},a={x:n.x,y:s.y,z:n.z};else if(n.z===s.z)r={x:n.x,y:s.y,z:n.z},a={x:s.x,y:n.y,z:n.z};else throw new Error("invalid");t.push(new b(n.x,n.y,n.z)),t.push(new b(r.x,r.y,r.z)),t.push(new b(s.x,s.y,s.z)),t.push(new b(a.x,a.y,a.z)),t.push(new b(n.x,n.y,n.z));const o=new Ht().setFromPoints(t);return new sM(o,e)}appendToScene(){this.scene.add(this.planarMesh),this.scene.add(this.boundaryLine)}destructor(){this.scene.remove(this.planarMesh),this.scene.remove(this.boundaryLine)}}class HM{constructor(e,t,n,s,r,a,o){He(this,"position");He(this,"offsetOrigin");He(this,"gameScale");He(this,"baseColor");He(this,"scene");He(this,"surfaces");He(this,"onNewBlock");He(this,"onNeedDestory");this.position=e,this.offsetOrigin=t,this.gameScale=n,this.baseColor=s,this.scene=r,this.surfaces=this.createSurfaces(),this.onNewBlock=a,this.onNeedDestory=o}createSurfaces(){return{top:new Nn({x:this.position.x,y:this.position.y+1,z:this.position.z},{x:this.position.x+1,y:this.position.y+1,z:this.position.z+1},this.offsetOrigin,this.gameScale,this.baseColor,this.scene,()=>{this.onNewBlock({x:this.position.x,y:this.position.y+1,z:this.position.z})},()=>{this.onNeedDestory()}),bottom:new Nn({x:this.position.x,y:this.position.y,z:this.position.z},{x:this.position.x+1,y:this.position.y,z:this.position.z+1},this.offsetOrigin,this.gameScale,this.baseColor,this.scene,()=>{this.onNewBlock({x:this.position.x,y:this.position.y-1,z:this.position.z})},()=>{this.onNeedDestory()}),left:new Nn({x:this.position.x,y:this.position.y,z:this.position.z},{x:this.position.x,y:this.position.y+1,z:this.position.z+1},this.offsetOrigin,this.gameScale,this.baseColor,this.scene,()=>{this.onNewBlock({x:this.position.x-1,y:this.position.y,z:this.position.z})},()=>{this.onNeedDestory()}),right:new Nn({x:this.position.x+1,y:this.position.y,z:this.position.z},{x:this.position.x+1,y:this.position.y+1,z:this.position.z+1},this.offsetOrigin,this.gameScale,this.baseColor,this.scene,()=>{this.onNewBlock({x:this.position.x+1,y:this.position.y,z:this.position.z})},()=>{this.onNeedDestory()}),front:new Nn({x:this.position.x,y:this.position.y,z:this.position.z+1},{x:this.position.x+1,y:this.position.y+1,z:this.position.z+1},this.offsetOrigin,this.gameScale,this.baseColor,this.scene,()=>{this.onNewBlock({x:this.position.x,y:this.position.y,z:this.position.z+1})},()=>{this.onNeedDestory()}),back:new Nn({x:this.position.x,y:this.position.y,z:this.position.z},{x:this.position.x+1,y:this.position.y+1,z:this.position.z},this.offsetOrigin,this.gameScale,this.baseColor,this.scene,()=>{this.onNewBlock({x:this.position.x,y:this.position.y,z:this.position.z-1})},()=>{this.onNeedDestory()})}}destructor(){this.surfaces.top.destructor(),this.surfaces.bottom.destructor(),this.surfaces.left.destructor(),this.surfaces.right.destructor(),this.surfaces.front.destructor(),this.surfaces.back.destructor()}}class YM extends Sr{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const s=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}class QM{constructor(e,t,n){He(this,"gameConfiguration");He(this,"gameElement");He(this,"gameScale");He(this,"scene",new iM);He(this,"camera",new vt(45,window.innerWidth/window.innerHeight,.1,1e3));He(this,"renderer",new La);He(this,"offsetOrigin");He(this,"mousePressed",!1);He(this,"mouseDragging",!1);He(this,"boardGrids",[]);He(this,"boardBlocks",[]);He(this,"raycaster",new kM);He(this,"cursorPointer",new Me);He(this,"currentHoverObj",null);this.gameConfiguration=n,this.gameElement=e,this.gameScale=t,this.offsetOrigin={x:-1*this.gameConfiguration.gameDimensions.x*this.gameScale/2,y:-1*this.gameConfiguration.gameDimensions.y*this.gameScale/2,z:-1*this.gameConfiguration.gameDimensions.z*this.gameScale/2},this.renderer.setSize(window.innerWidth,window.innerHeight),e.appendChild(this.renderer.domElement),this.renderBoard(),this.setCamera({x:5,y:20,z:30}),this.registerActions()}destructor(){this.gameElement.removeChild(this.renderer.domElement)}setCamera(e){e&&(this.camera.position.set(e.x,e.y,e.z),this.camera.lookAt(0,0,0)),this.renderer.render(this.scene,this.camera)}registerActions(){this.renderer.domElement.addEventListener("mousedown",e=>{this.mousePressed=!0,this.mouseDragging=!1}),this.renderer.domElement.addEventListener("mouseup",e=>{this.mousePressed=!1,this.mouseDragging||this.handleClick(e),this.mouseDragging=!1}),this.renderer.domElement.addEventListener("mousemove",e=>{this.mousePressed?(this.mouseDragging=!0,this.handleDrag(e)):this.handleHover(e)}),this.renderer.domElement.addEventListener("wheel",e=>this.handleWheel(e))}renderBoard(){const e=new hs,t=new YM("front",{font:window.threeDFont,size:.5,height:.05,curveSegments:30,bevelEnabled:!0,bevelThickness:.001,bevelSize:.01,bevelSegments:1}),n=new Ft(t,e);n.position.y=-.5*this.gameScale,n.position.z=3*this.gameScale,n.position.x=-.2*this.gameScale,this.scene.add(n);for(let s=0;s<this.gameConfiguration.gameDimensions.x;s++)for(let r=0;r<this.gameConfiguration.gameDimensions.z;r++){const a={x:s,y:0,z:r},o={x:s+1,y:0,z:r+1},c=new Nn(a,o,this.offsetOrigin,this.gameScale,0,this.scene,()=>{this.createBlock({x:s,y:0,z:r})},()=>{});this.boardGrids.push(c)}for(let s=0;s<this.gameConfiguration.gameDimensions.x;s++){const r=[];for(let a=0;a<this.gameConfiguration.gameDimensions.y;a++){const o=[];for(let c=0;c<this.gameConfiguration.gameDimensions.z;c++)o.push(null);r.push(o)}this.boardBlocks.push(r)}}getRayCasterFirstIntersect(e){this.cursorPointer.x=e.clientX/window.innerWidth*2-1,this.cursorPointer.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.cursorPointer,this.camera);const t=this.raycaster.intersectObjects(this.scene.children);for(const n of t)if(n.object.name==="Block-Surface")return n}handleHover(e){var n;const t=this.getRayCasterFirstIntersect(e);t?(n=t.object.userData)!=null&&n.hover||(this.currentHoverObj&&this.currentHoverObj.dispatchEvent({type:"offhover"}),t.object.dispatchEvent({type:"onhover"}),this.currentHoverObj=t.object,this.setCamera()):this.currentHoverObj&&(this.currentHoverObj.dispatchEvent({type:"offhover"}),this.currentHoverObj=null,this.setCamera())}handleClick(e){const t=this.getRayCasterFirstIntersect(e);t&&(t.object.dispatchEvent({type:e.button===0?"left-click":"right-click"}),this.setCamera())}handleDrag(e){const n=e.movementX,s=e.movementY,r=this.camera.position.x,a=this.camera.position.y,o=this.camera.position.z,c=Math.sqrt(o*o+r*r+a*a),l=Math.atan2(o,r),g=Math.asin(a/c),h=n/c*.1,u=oa(l+h),d=s/c*.1,I=oa(g+d),p=c*Math.sin(I),M=u>Math.PI/2&&u<Math.PI*1.5?-1:1,f=Math.sqrt((c*c-p*p)/(1+Math.pow(Math.tan(u),2)))*M,T=u>Math.PI?-1:1,A=Math.sqrt(c*c-f*f-p*p)*T;this.setCamera({x:f,y:p,z:A})}handleWheel(e){e.preventDefault();const t=.01,n=e.deltaY*t,s=this.camera.position.x,r=this.camera.position.y,a=this.camera.position.z,o=Math.sqrt(a*a+s*s+r*r),c=o+n,l=Math.acos(s/o),g=Math.asin(r/o),h=Math.cos(l)*c,u=Math.sin(g)*c,d=a>0?1:-1,I=Math.sqrt(c*c-(h*h+u*u))*d;this.setCamera({x:h,y:u,z:I})}createBlock(e){var t;this.boardBlocks[e.x][e.y][e.z]||this.getBlockCount()<this.gameConfiguration.maxBlocks&&(this.boardBlocks[e.x][e.y][e.z]=new HM(e,this.offsetOrigin,this.gameScale,5597999,this.scene,n=>{n.x<this.gameConfiguration.gameDimensions.x&&this.gameConfiguration.gameDimensions.x>-1&&n.y<this.gameConfiguration.gameDimensions.y&&this.gameConfiguration.gameDimensions.y>-1&&n.z<this.gameConfiguration.gameDimensions.z&&this.gameConfiguration.gameDimensions.z>-1&&this.createBlock(n)},()=>{this.removeBlock(e)}),this.setCamera(),this.checkWinCondition(),(t=this.gameConfiguration.events.onBlockModified)==null||t.call(this,this.getBlockCount()))}checkWinCondition(){this.checkProjectionsEqual()&&setTimeout(()=>{var e;$("#nextLevelDialog").modal(),(e=this.gameConfiguration.events.onWin)==null||e.call(this)},200)}checkProjectionsEqual(){return JSON.stringify(this.gameConfiguration.projections)===JSON.stringify(this.getProjections())}getProjections(){const e=[];for(let s=0;s<this.gameConfiguration.gameDimensions.x;s++){const r=[];for(let a=0;a<this.gameConfiguration.gameDimensions.z;a++){let o=!1;for(let c=0;c<this.gameConfiguration.gameDimensions.y;c++)if(this.boardBlocks[s][c][a]){o=!0;break}r.push(o)}e.push(r)}const t=[];for(let s=0;s<this.gameConfiguration.gameDimensions.x;s++){const r=[];for(let a=0;a<this.gameConfiguration.gameDimensions.y;a++){let o=!1;for(let c=0;c<this.gameConfiguration.gameDimensions.z;c++)if(this.boardBlocks[s][a][c]){o=!0;break}r.push(o)}t.push(r)}const n=[];for(let s=0;s<this.gameConfiguration.gameDimensions.z;s++){const r=[];for(let a=0;a<this.gameConfiguration.gameDimensions.y;a++){let o=!1;for(let c=0;c<this.gameConfiguration.gameDimensions.x;c++)if(this.boardBlocks[c][a][s]){o=!0;break}r.push(o)}n.push(r)}return{top:e,front:t,side:n}}getBlockCount(){let e=0;for(const t of this.boardBlocks)for(const n of t)for(const s of n)s&&e++;return e}removeBlock(e){var n;const t=this.boardBlocks[e.x][e.y][e.z];t&&(this.boardBlocks[e.x][e.y][e.z]=null,t.destructor(),this.setCamera(),this.checkWinCondition(),(n=this.gameConfiguration.events.onBlockModified)==null||n.call(this,this.getBlockCount()))}}class VM extends Er{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new FM(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){const c=r.parse(JSON.parse(o));t&&t(c)},n,s)}parse(e){return new WM(e)}}class WM{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],s=XM(e,t,this.data);for(let r=0,a=s.length;r<a;r++)n.push(...s[r].toShapes());return n}}function XM(i,e,t){const n=Array.from(i),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,a=[];let o=0,c=0;for(let l=0;l<n.length;l++){const g=n[l];if(g===`
`)o=0,c-=r;else{const h=JM(g,s,o,c,t);o+=h.offsetX,a.push(h.path)}}return a}function JM(i,e,t,n,s){const r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}const a=new GM;let o,c,l,g,h,u,d,I;if(r.o){const p=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let M=0,f=p.length;M<f;)switch(p[M++]){case"m":o=p[M++]*e+t,c=p[M++]*e+n,a.moveTo(o,c);break;case"l":o=p[M++]*e+t,c=p[M++]*e+n,a.lineTo(o,c);break;case"q":l=p[M++]*e+t,g=p[M++]*e+n,h=p[M++]*e+t,u=p[M++]*e+n,a.quadraticCurveTo(h,u,l,g);break;case"b":l=p[M++]*e+t,g=p[M++]*e+n,h=p[M++]*e+t,u=p[M++]*e+n,d=p[M++]*e+t,I=p[M++]*e+n,a.bezierCurveTo(h,u,d,I,l,g);break}}return{offsetX:r.ha*e,path:a}}const Ki=[{gameDimensions:{x:3,y:3,z:3},maxBlocks:1,projections:{top:[[!1,!1,!1],[!1,!0,!1],[!1,!1,!1]],front:[[!1,!1,!1],[!0,!1,!1],[!1,!1,!1]],side:[[!1,!1,!1],[!0,!1,!1],[!1,!1,!1]]}},{gameDimensions:{x:3,y:3,z:3},maxBlocks:3,projections:{top:[[!1,!0,!1],[!1,!1,!1],[!1,!1,!1]],front:[[!0,!0,!0],[!1,!1,!1],[!1,!1,!1]],side:[[!1,!1,!1],[!0,!0,!0],[!1,!1,!1]]}},{gameDimensions:{x:3,y:3,z:3},maxBlocks:6,projections:{top:[[!1,!0,!1],[!0,!0,!0],[!1,!0,!1]],front:[[!0,!1,!1],[!0,!0,!1],[!0,!1,!1]],side:[[!1,!0,!1],[!0,!0,!1],[!1,!0,!1]]}},{gameDimensions:{x:3,y:3,z:3},maxBlocks:7,projections:{top:[[!1,!1,!0],[!0,!0,!0],[!1,!1,!0]],front:[[!0,!1,!1],[!0,!0,!0],[!0,!1,!1]],side:[[!0,!1,!1],[!0,!0,!0],[!0,!1,!1]]}},{gameDimensions:{x:3,y:4,z:3},maxBlocks:2,projections:{top:[[!1,!1,!1],[!1,!0,!1],[!1,!1,!1]],front:[[!1,!1,!1,!1],[!1,!1,!1,!0],[!1,!1,!1,!1]],side:[[!1,!1,!1,!1],[!1,!1,!1,!0],[!1,!1,!1,!1]]}},{gameDimensions:{x:3,y:3,z:3},maxBlocks:3,projections:{top:[[!1,!1,!1],[!1,!0,!0],[!1,!0,!1]],front:[[!1,!1,!1],[!0,!0,!1],[!0,!1,!1]],side:[[!1,!1,!1],[!0,!0,!1],[!0,!1,!1]]}},{gameDimensions:{x:3,y:3,z:3},maxBlocks:9,projections:{top:[[!0,!0,!0],[!0,!1,!0],[!0,!0,!0]],front:[[!0,!0,!0],[!0,!1,!0],[!0,!0,!0]],side:[[!0,!0,!0],[!0,!1,!0],[!0,!0,!0]]}},{gameDimensions:{x:5,y:5,z:5},maxBlocks:9,projections:{top:[[!0,!1,!1,!1,!0],[!1,!0,!1,!0,!1],[!1,!1,!0,!1,!1],[!1,!0,!1,!0,!1],[!0,!1,!1,!1,!0]],front:[[!0,!1,!1,!1,!0],[!1,!0,!1,!0,!1],[!1,!1,!0,!1,!1],[!1,!0,!1,!0,!1],[!0,!1,!1,!1,!0]],side:[[!0,!1,!1,!1,!0],[!1,!0,!1,!0,!1],[!1,!1,!0,!1,!1],[!1,!0,!1,!0,!1],[!0,!1,!1,!1,!0]]}},{gameDimensions:{x:3,y:3,z:3},maxBlocks:9,projections:{top:[[!0,!0,!0],[!0,!0,!0],[!0,!0,!0]],front:[[!0,!0,!0],[!0,!0,!0],[!0,!0,!0]],side:[[!0,!0,!0],[!0,!0,!0],[!0,!0,!0]]}},{gameDimensions:{x:5,y:5,z:5},maxBlocks:18,projections:{top:[[!0,!0,!0,!0,!0],[!0,!1,!1,!1,!0],[!0,!1,!1,!1,!0],[!0,!1,!1,!1,!0],[!0,!0,!0,!0,!0]],front:[[!0,!0,!0,!0,!0],[!0,!1,!1,!1,!0],[!0,!1,!1,!1,!0],[!0,!1,!1,!1,!0],[!0,!0,!0,!0,!0]],side:[[!0,!0,!0,!0,!0],[!0,!1,!1,!1,!0],[!0,!1,!1,!1,!0],[!0,!1,!1,!1,!0],[!0,!0,!0,!0,!0]]}},{gameDimensions:{x:3,y:3,z:3},maxBlocks:9,projections:{top:[[!0,!0,!0],[!0,!0,!0],[!0,!0,!0]],front:[[!0,!0,!0],[!0,!1,!0],[!0,!0,!0]],side:[[!0,!0,!0],[!0,!1,!0],[!0,!0,!0]]}},{gameDimensions:{x:5,y:5,z:5},maxBlocks:20,projections:{top:[[!0,!0,!0,!0,!0],[!0,!1,!0,!1,!0],[!0,!0,!1,!0,!0],[!0,!1,!0,!1,!0],[!0,!0,!0,!0,!0]],front:[[!0,!0,!0,!0,!0],[!0,!1,!0,!1,!0],[!0,!0,!1,!0,!0],[!0,!1,!0,!1,!0],[!0,!0,!0,!0,!0]],side:[[!0,!0,!0,!0,!0],[!0,!1,!0,!1,!0],[!0,!0,!1,!0,!0],[!0,!1,!0,!1,!0],[!0,!0,!0,!0,!0]]}},{gameDimensions:{x:10,y:10,z:10},maxBlocks:1e3,projections:{top:null,side:null,front:null}}],Ya=i=>{const e=document.getElementById("blockCount");e&&(e.innerHTML=`<div>Blocks Used: ${i} / ${mt.maxBlocks}</div>`)},qM=()=>{const i=document.getElementById("levelNumber");i&&(i.innerHTML=`<div>Level: ${mt.levelNumber}</div>`)},Qa=function(){const i=document.getElementById("app");if(i){$i&&$i.destructor();const t=mt.levelNumber;Ki.length===t+1&&alert("You have finished the game!"),mt.gameDimensions=Ki[t].gameDimensions,mt.maxBlocks=Ki[t].maxBlocks,mt.projections=Ki[t].projections,$i=new QM(i,ZM,mt),window.currentGame=$i,mt.levelNumber++}const e=document.getElementById("projections");e&&(e.innerHTML="",mt.projections.front&&e.appendChild(er(mt.projections.front,"front",!1)),mt.projections.side&&e.appendChild(er(mt.projections.side,"left",!1)),mt.projections.top&&e.appendChild(er(mt.projections.top,"top",!0))),Ya(0),qM()},mt={levelNumber:0,gameDimensions:{x:0,y:0,z:0},maxBlocks:0,projections:{top:[],front:[],side:[]},events:{onBlockModified:Ya,onWin:Qa}},ZM=3;function er(i,e,t){const n=document.createElement("div");n.className="p-container";const s=document.createElement("div");s.className="projection-title",s.innerText=e,n.appendChild(s);const r=document.createElement("div");r.className="projection-container";for(const a of i){const o=document.createElement("div");o.className="x-slice";for(const c of a){const l=document.createElement("div");l.classList.add("y-slice"),c&&l.classList.add("filled"),t?o.append(l):o.prepend(l)}r.appendChild(o)}return n.appendChild(r),n}let $i;window.addEventListener("load",()=>{new VM().load("data:application/json;base64,eyJnbHlwaHMiOnsizr8iOnsieF9taW4iOjAsInhfbWF4Ijo3MTIsImhhIjo4MTUsIm8iOiJtIDM1NiAtMjUgcSA5NiA4OCAxOTIgLTI1IHEgMCAzNjggMCAyMDEgcSA5MiA2NDIgMCA1MzMgcSAzNTYgNzYxIDE5MiA3NjEgcSA2MTcgNjQ0IDUxNyA3NjEgcSA3MTIgMzY4IDcxMiA1MzMgcSA2MTkgOTEgNzEyIDIwMSBxIDM1NiAtMjUgNTIwIC0yNSBtIDM1NiA4NSBxIDUyNyAxNzUgNDY1IDg1IHEgNTgzIDM2OSA1ODMgMjU1IHEgNTI4IDU2MiA1ODMgNDg0IHEgMzU2IDY1MSA0NjYgNjUxIHEgMTg5IDU2MCAyNTAgNjUxIHEgMTM1IDM2OSAxMzUgNDgxIHEgMTg3IDE3NyAxMzUgMjU3IHEgMzU2IDg1IDI1MCA4NSAifSwiUyI6eyJ4X21pbiI6MCwieF9tYXgiOjc4OCwiaGEiOjg5MCwibyI6Im0gNzg4IDI5MSBxIDY2MiA1NCA3ODggMTQ0IHEgMzk3IC0yNiA1NTAgLTI2IHEgMTE2IDY4IDIyNiAtMjYgcSAwIDMzNyAwIDE2OCBsIDEzMSAzMzcgcSAyMDAgMTUyIDEzMSAyMjAgcSAzODQgODUgMjY5IDg1IHEgNTU3IDEyOSA0NzkgODUgcSA2NTAgMjcwIDY1MCAxODMgcSA0OTAgNDI5IDY1MCAzNzkgcSAxOTQgNTEzIDM0MSA0NzAgcSAzMyA3MzkgMzMgNTg0IHEgMTQyIDk2NCAzMyA4ODEgcSAzODggMTA0MSAyNDIgMTA0MSBxIDY0NCA5NTcgNTQzIDEwNDEgcSA3NTYgNzE2IDc1NiA4NjcgbCA2MjUgNzE2IHEgNTYxIDg3NCA2MjUgODE2IHEgMzk1IDkzMyA0OTcgOTMzIHEgMjQzIDg5MSAzMDkgOTMzIHEgMTY0IDc1OSAxNjQgODQxIHEgMzI1IDYwOSAxNjQgNjU2IHEgNjI1IDUyNiA0NzUgNTY4IHEgNzg4IDI5MSA3ODggNDU0ICJ9LCLCpiI6eyJ4X21pbiI6MzQzLCJ4X21heCI6NDQ5LCJoYSI6NzkyLCJvIjoibSA0NDkgNDYyIGwgMzQzIDQ2MiBsIDM0MyA5ODYgbCA0NDkgOTg2IGwgNDQ5IDQ2MiBtIDQ0OSAtMjQyIGwgMzQzIC0yNDIgbCAzNDMgMjgwIGwgNDQ5IDI4MCBsIDQ0OSAtMjQyICJ9LCIvIjp7InhfbWluIjoxODMuMjUsInhfbWF4Ijo2MDguMzI4MTI1LCJoYSI6NzkyLCJvIjoibSA2MDggMTA0MSBsIDI2NiAtMTI5IGwgMTgzIC0xMjkgbCA1MjAgMTA0MSBsIDYwOCAxMDQxICJ9LCLOpCI6eyJ4X21pbiI6LTAuNDM3NSwieF9tYXgiOjc3Ny40NTMxMjUsImhhIjo4MzksIm8iOiJtIDc3NyA4OTMgbCA0NTggODkzIGwgNDU4IDAgbCAzMTkgMCBsIDMxOSA4OTIgbCAwIDg5MiBsIDAgMTAxMyBsIDc3NyAxMDEzIGwgNzc3IDg5MyAifSwieSI6eyJ4X21pbiI6MCwieF9tYXgiOjY4NC43ODEyNSwiaGEiOjc3MSwibyI6Im0gNjg0IDczOCBsIDM4OCAtODMgcSAzMTEgLTIxNiAzNTYgLTE2NyBxIDE3MyAtMjc5IDI1MiAtMjc5IHEgOTcgLTI2NiAxMzMgLTI3OSBsIDk3IC0xNDkgcSAxMzIgLTE1NSAxMDkgLTE1MSBxIDE2OCAtMTYwIDE1NSAtMTYwIHEgMjQwIC0xMTQgMjEzIC0xNjAgcSAyNzQgLTI2IDI0OCAtOTggbCAwIDczOCBsIDEzNyA3MzcgbCAzNDEgMTM5IGwgNTQ4IDczNyBsIDY4NCA3MzggIn0sIs6gIjp7InhfbWluIjowLCJ4X21heCI6ODAzLCJoYSI6OTE3LCJvIjoibSA4MDMgMCBsIDY2NyAwIGwgNjY3IDg4NiBsIDE0MCA4ODYgbCAxNDAgMCBsIDAgMCBsIDAgMTAxMiBsIDgwMyAxMDEyIGwgODAzIDAgIn0sIs6QIjp7InhfbWluIjotMTExLCJ4X21heCI6MzM5LCJoYSI6MzYxLCJvIjoibSAzMzkgODAwIGwgMjI5IDgwMCBsIDIyOSA5MjUgbCAzMzkgOTI1IGwgMzM5IDgwMCBtIC0xIDgwMCBsIC0xMTEgODAwIGwgLTExMSA5MjUgbCAtMSA5MjUgbCAtMSA4MDAgbSAyODQgMyBxIDIzMyAtMTAgMjU4IC01IHEgMTgyIC0xNSAyMDcgLTE1IHEgODUgMjYgMTE5IC0xNSBxIDQyIDIwMCA0MiA3OSBsIDQyIDczNyBsIDE2NyA3MzcgbCAxNjggMjE1IHEgMTcyIDE0MSAxNjggMTU3IHEgMjI2IDEwMSAxODMgMTAxIHEgMjQ4IDEwMyAyMzkgMTAxIHEgMjg0IDExMiAyNTcgMTA0IGwgMjg0IDMgbSAzMDIgMTA0MCBsIDExMyA4MTkgbCAzMCA4MTkgbCAxNjUgMTA0MCBsIDMwMiAxMDQwICJ9LCJnIjp7InhfbWluIjowLCJ4X21heCI6Njg2LCJoYSI6ODM4LCJvIjoibSA2ODYgMzQgcSA1ODYgLTIxMyA2ODYgLTEyMSBxIDMzMSAtMzA2IDQ4NyAtMzA2IHEgMTMxIC0yNTIgMjE2IC0zMDYgcSAzMSAtODQgMzEgLTE5MCBsIDE1NSAtODQgcSAyMjggLTE3NCAxNjYgLTEzOCBxIDM0NSAtMjA3IDI4NCAtMjA3IHEgNTE0IC0xMDkgNDU0IC0yMDcgcSA1NjQgODkgNTY0IC0yNyBxIDQ2MSA2IDUyMSAzNiBxIDMzNSAtMjMgNDAxIC0yMyBxIDg4IDEwMCAxODQgLTIzIHEgMCAzNzAgMCAyMTUgcSA4NyA2MzQgMCA1MjIgcSAzMzAgNzU4IDE4MyA3NTggcSA0NTcgNzI4IDM5OCA3NTggcSA1NjQgNjQ0IDUxNSA2OTkgbCA1NjQgNzM3IGwgNjg2IDczNyBsIDY4NiAzNCBtIDU4MiAzNjcgcSA1MjkgNTYwIDU4MiA0ODEgcSAzNTggNjUyIDQ2OCA2NTIgcSAxODkgNTYxIDI1MCA2NTIgcSAxMzUgMzY5IDEzNSA0ODIgcSAxODkgMTc2IDEzNSAyNTUgcSAzNjEgODUgMjUxIDg1IHEgNTI5IDE3NiA0NjggODUgcSA1ODIgMzY3IDU4MiAyNTUgIn0sIsKyIjp7InhfbWluIjowLCJ4X21heCI6NDQyLCJoYSI6NTM5LCJvIjoibSA0NDIgMzgzIGwgMCAzODMgcSA5MSA1NjYgMCA0OTIgcSAyNjAgNjY4IDE3NiA2MTcgcSAzNTQgNzk4IDM1NCA3MjcgcSAzMTUgODc1IDM1NCA4NDUgcSAyMjcgOTA1IDI3NyA5MDUgcSAxMzYgODY5IDE3MyA5MDUgcSA5OSA3NjEgOTkgODMzIGwgMTQgNzYxIHEgODIgOTIyIDE0IDg2NCBxIDIzMiA5NzQgMTQxIDk3NCBxIDM3OSA5MjYgMzE2IDk3NCBxIDQ0MiA3OTcgNDQyIDg3OCBxIDM1MSA2MzUgNDQyIDcwNCBxIDE4MyA1MzkgMzIxIDYxMSBxIDkyIDQ1NSA5MiA0OTEgbCA0NDIgNDU1IGwgNDQyIDM4MyAifSwi4oCTIjp7InhfbWluIjowLCJ4X21heCI6NzA1LjU2MjUsImhhIjo4MDMsIm8iOiJtIDcwNSAzMzQgbCAwIDMzNCBsIDAgNDEwIGwgNzA1IDQxMCBsIDcwNSAzMzQgIn0sIs6aIjp7InhfbWluIjowLCJ4X21heCI6ODE5LjU2MjUsImhhIjo4OTMsIm8iOiJtIDgxOSAwIGwgNjUwIDAgbCAyOTQgNTA5IGwgMTM5IDM1NiBsIDEzOSAwIGwgMCAwIGwgMCAxMDEzIGwgMTM5IDEwMTMgbCAxMzkgNTI2IGwgNjI2IDEwMTMgbCA4MDkgMTAxMyBsIDM5NSA2MDAgbCA4MTkgMCAifSwixpIiOnsieF9taW4iOi00Ni4yNjU2MjUsInhfbWF4IjozOTIsImhhIjo1MTMsIm8iOiJtIDM5MiA2NTEgbCAyNTkgNjUxIGwgNzkgLTI3OSBsIC00NiAtMjc4IGwgMTM0IDY1MSBsIDE0IDY1MSBsIDE0IDc1MSBsIDEzNSA3NTEgcSAxNTEgOTQ4IDEzNSA5MDAgcSAzMDQgMTA0MSAxODUgMTA0MSBxIDMzNCAxMDQwIDMxOSAxMDQxIHEgMzkyIDEwMzQgMzQ4IDEwMzkgbCAzOTIgOTIyIHEgMzM3IDkzMSAzNjAgOTMxIHEgMjcxIDg4MyAyODcgOTMxIHEgMjYwIDc5MyAyNjAgODUzIGwgMjYwIDc1MSBsIDM5MiA3NTEgbCAzOTIgNjUxICJ9LCJlIjp7InhfbWluIjowLCJ4X21heCI6NzE0LCJoYSI6ODEzLCJvIjoibSA3MTQgMzI2IGwgMTQwIDMyNiBxIDIwMCAxNTcgMTQwIDIyNyBxIDM1OSA4NyAyNjAgODcgcSA0ODggMTMwIDQzMSA4NyBxIDU2MSAyNDUgNTQ1IDE3NCBsIDY5NyAyNDUgcSA1NzcgNDggNjcwIDEyMyBxIDM1OCAtMjYgNDg0IC0yNiBxIDk3IDg1IDE5NSAtMjYgcSAwIDM2MyAwIDE5NyBxIDk0IDY0MiAwIDUyOSBxIDM1OCA3NjUgMTk1IDc2NSBxIDYyNiA2MjcgNTI5IDc2NSBxIDcxNCAzMjYgNzE0IDUwMyBtIDU3NiA0MjkgcSA1MDcgNTgzIDU2NCA1MjIgcSAzNTUgNjUwIDQ0NSA2NTAgcSAyMDYgNTgzIDI2NiA2NTAgcSAxNDAgNDI5IDE1MiA1MjIgbCA1NzYgNDI5ICJ9LCLPjCI6eyJ4X21pbiI6MCwieF9tYXgiOjcxMiwiaGEiOjgxNSwibyI6Im0gMzU2IC0yNSBxIDk0IDkxIDE5NCAtMjUgcSAwIDM2OCAwIDIwMiBxIDkyIDY0MiAwIDUzMyBxIDM1NiA3NjEgMTkyIDc2MSBxIDYxNyA2NDQgNTE3IDc2MSBxIDcxMiAzNjggNzEyIDUzMyBxIDYxOSA5MSA3MTIgMjAxIHEgMzU2IC0yNSA1MjAgLTI1IG0gMzU2IDg1IHEgNTI3IDE3NSA0NjUgODUgcSA1ODMgMzY5IDU4MyAyNTUgcSA1MjggNTYyIDU4MyA0ODQgcSAzNTYgNjUxIDQ2NiA2NTEgcSAxODkgNTYwIDI1MCA2NTEgcSAxMzUgMzY5IDEzNSA0ODEgcSAxODcgMTc3IDEzNSAyNTcgcSAzNTYgODUgMjUwIDg1IG0gNTc2IDEwNDAgbCAzODcgODE5IGwgMzAzIDgxOSBsIDQzOCAxMDQwIGwgNTc2IDEwNDAgIn0sIkoiOnsieF9taW4iOjAsInhfbWF4Ijo1ODgsImhhIjo2OTksIm8iOiJtIDU4OCAyNzkgcSAyODcgLTI2IDU4OCAtMjYgcSA1OCA3MyAxMjYgLTI2IHEgMCAzMjcgMCAxNTggbCAxMzMgMzI3IHEgMTYwIDE3MiAxMzMgMjI3IHEgMjg4IDk2IDE5OCA5NiBxIDQyNiAxNzEgMzkxIDk2IHEgNDQ5IDMzNiA0NDkgMjE5IGwgNDQ5IDEwMTMgbCA1ODggMTAxMyBsIDU4OCAyNzkgIn0sIsK7Ijp7InhfbWluIjotMSwieF9tYXgiOjUwMywiaGEiOjYwMSwibyI6Im0gNTAzIDMwMiBsIDI4MCAxMzYgbCAyODEgMjU2IGwgNDI5IDM3MyBsIDI4MSA0ODYgbCAyODAgNjA4IGwgNTAzIDQ0MCBsIDUwMyAzMDIgbSAyMjEgMzAyIGwgMCAxMzYgbCAwIDI1NSBsIDE0NSAzNzIgbCAwIDQ4NiBsIC0xIDYwOCBsIDIyMSA0NDAgbCAyMjEgMzAyICJ9LCLCqSI6eyJ4X21pbiI6LTMsInhfbWF4IjoxMDA4LCJoYSI6MTEwNiwibyI6Im0gNTAyIC03IHEgMTIzIDE1MSAyNjMgLTcgcSAtMyA1MDEgLTMgMjk0IHEgMTIzIDg1MSAtMyA3MDYgcSA1MDIgMTAxMSAyNjMgMTAxMSBxIDg4MSA4NTEgNzM5IDEwMTEgcSAxMDA4IDUwMSAxMDA4IDcwOCBxIDg4MyAxNTEgMTAwOCAyOTIgcSA1MDIgLTcgNzQ0IC03IG0gNTAyIDYwIHEgODMwIDE5NyA3MDkgNjAgcSA5NDAgNTAxIDk0MCAzMjIgcSA4MzEgODA1IDk0MCA2ODEgcSA1MDIgOTQ0IDcwOSA5NDQgcSAxNzQgODA1IDI5NiA5NDQgcSA2NSA1MDEgNjUgNjgwIHEgMTczIDE5NyA2NSAzMjAgcSA1MDIgNjAgMjk0IDYwIG0gNzQxIDM5NCBxIDY2MSAyNDYgNzMxIDMwMiBxIDQ5NiAxOTAgNTkxIDE5MCBxIDI5NCAyODUgMzY5IDE5MCBxIDIyOCA0OTcgMjI4IDM3MCBxIDI5NSA3MTQgMjI4IDYyNSBxIDQ5OSA4MTMgMzcwIDgxMyBxIDY1NiA3NjIgNTg4IDgxMyBxIDczMyA2MjUgNzI0IDcxMSBsIDYzNCA2MjUgcSA1ODkgNzA0IDYyOSA2NzMgcSA0OTggNzM1IDU1MCA3MzUgcSAzNzcgNjY2IDQyMSA3MzUgcSAzMzQgNTA0IDMzNCA1OTcgcSAzNzQgMzQwIDMzNCA0MDggcSA0OTAgMjcyIDQxNSAyNzIgcSA1ODkgMzA0IDU0OSAyNzIgcSA2MzggMzk0IDYyOCAzMzcgbCA3NDEgMzk0ICJ9LCLPjiI6eyJ4X21pbiI6MCwieF9tYXgiOjkyMiwiaGEiOjEwMzAsIm8iOiJtIDY4NyAxMDQwIGwgNDk4IDgxOSBsIDQxNSA4MTkgbCA1NDkgMTA0MCBsIDY4NyAxMDQwIG0gOTIyIDMzOSBxIDg1NiA5NyA5MjIgMjAzIHEgNjUwIC0yNiA3ODAgLTI2IHEgNTM4IDkgNTg3IC0yNiBxIDQ2MSAxMDMgNDg5IDQ0IHEgMzg3IDEyIDQzNiA0NiBxIDI3NyAtMjIgMzM5IC0yMiBxIDY5IDk3IDE0NyAtMjIgcSAwIDMzOCAwIDIwMiBxIDQ1IDU1MSAwIDQ0NCBxIDE2MSA3MzcgODQgNjQzIGwgMzAyIDczNyBxIDE3NSA1NTIgMjE5IDY0NyBxIDEyNCAzMzYgMTI0IDQ0NiBxIDE1NSAxNzkgMTI0IDI0OCBxIDI3NSA4OCAxOTcgODggcSAzNzUgMTYzIDM0MSA4OCBxIDQwMCAyOTQgNDAwIDIxOSBsIDQwMCA1NzIgbCA1MjQgNTcyIGwgNTI0IDI5NCBxIDU2MSAxMzUgNTI0IDE5MiBxIDY0MyA4OCA1OTEgODggcSA3NjIgMTgyIDcxOSA4OCBxIDc5NyAzNDEgNzk3IDI1NyBxIDc0NSA1NTUgNzk3IDQ1MCBxIDYxOSA3MzcgNzA1IDYzNyBsIDc2MCA3MzcgcSA4NzQgNTUxIDgzNSA2NDAgcSA5MjIgMzM5IDkyMiA0NDQgIn0sIl4iOnsieF9taW4iOjE5My4wNjI1LCJ4X21heCI6NTk4LjYwOTM3NSwiaGEiOjc5MiwibyI6Im0gNTk4IDc3MiBsIDUxNSA3NzIgbCAzOTUgOTMxIGwgMjc3IDc3MiBsIDE5MyA3NzIgbCAzMjYgMTAxMyBsIDQ2MiAxMDEzIGwgNTk4IDc3MiAifSwiwqsiOnsieF9taW4iOjAsInhfbWF4Ijo1MDcuMjAzMTI1LCJoYSI6NjA0LCJvIjoibSA1MDYgMTM2IGwgMjg0IDMwMiBsIDI4NCA0NDAgbCA1MDYgNjA4IGwgNTA3IDQ4NSBsIDM2MCAzNzEgbCA1MDYgMjU1IGwgNTA2IDEzNiBtIDIyMiAxMzYgbCAwIDMwMiBsIDAgNDQwIGwgMjIyIDYwOCBsIDIyMSA0ODYgbCA3MyAzNzMgbCAyMjIgMjU2IGwgMjIyIDEzNiAifSwiRCI6eyJ4X21pbiI6MCwieF9tYXgiOjgyOCwiaGEiOjkzNSwibyI6Im0gMzg5IDEwMTMgcSA3MTQgODY3IDU5MyAxMDEzIHEgODI4IDUyMSA4MjggNzI5IHEgNzEyIDE2MSA4MjggMzA5IHEgMzgyIDAgNTg3IDAgbCAwIDAgbCAwIDEwMTMgbCAzODkgMTAxMyBtIDM3NiAxMjQgcSA2MDcgMjQ3IDUyMyAxMjQgcSA2ODEgNTEwIDY4MSAzNTUgcSA2MDcgNzcxIDY4MSA2NjIgcSAzNzYgODk2IDUyMiA4OTYgbCAxMzkgODk2IGwgMTM5IDEyNCBsIDM3NiAxMjQgIn0sIuKImSI6eyJ4X21pbiI6MCwieF9tYXgiOjE0MiwiaGEiOjIzOSwibyI6Im0gMTQyIDU4NSBsIDAgNTg1IGwgMCA3MzggbCAxNDIgNzM4IGwgMTQyIDU4NSAifSwiw78iOnsieF9taW4iOjAsInhfbWF4Ijo0NywiaGEiOjEyNSwibyI6Im0gNDcgMyBxIDM3IC03IDQ3IC03IHEgMjggMCAzMCAtNyBxIDM5IC00IDMyIC00IHEgNDUgMyA0NSAtMSBsIDM3IDAgcSAyOCA5IDI4IDAgcSAzOSAxOSAyOCAxOSBsIDQ3IDE2IGwgNDcgMTkgbCA0NyAzIG0gMzcgMSBxIDQ0IDggNDQgMSBxIDM3IDE2IDQ0IDE2IHEgMzAgOCAzMCAxNiBxIDM3IDEgMzAgMSBtIDI2IDEgbCAyMyAyMiBsIDE0IDAgbCAzIDIyIGwgMyAzIGwgMCAyNSBsIDEzIDEgbCAyMiAyNSBsIDI2IDEgIn0sInciOnsieF9taW4iOjAsInhfbWF4IjoxMDA5LjcxODc1LCJoYSI6MTEwMCwibyI6Im0gMTAwOSA3MzggbCA3ODMgMCBsIDY1OCAwIGwgNTAxIDU2NyBsIDM0NSAwIGwgMjIyIDAgbCAwIDczOCBsIDEzMCA3MzggbCAyODQgMTc0IGwgNDMyIDczNyBsIDU3NiA3MzggbCA3MjEgMTczIGwgODgxIDczNyBsIDEwMDkgNzM4ICJ9LCIkIjp7InhfbWluIjowLCJ4X21heCI6NzAwLCJoYSI6NzkzLCJvIjoibSA2NjQgNzE3IGwgNTQyIDcxNyBxIDQ5MCA4MjUgNTMxIDc4NSBxIDM4MSA4NzIgNDUwIDg2NSBsIDM4MSA1NTEgcSA2MjAgNDQ2IDU0MCA1MjIgcSA3MDAgMjQxIDcwMCAzNzAgcSA2MTggNDUgNzAwIDExNiBxIDM4MSAtMjUgNTM2IC0yNSBsIDM4MSAtMTUyIGwgMzA3IC0xNTIgbCAzMDcgLTI1IHEgODEgNjIgMTYyIC0yNSBxIDAgMjk3IDAgMTQ5IGwgMTI0IDI5NyBxIDE2OSAxNDYgMTI0IDIwNCBxIDMwNyA4MSAyMTUgODkgbCAzMDcgNDQxIHEgODAgNTM2IDE0OCA0NjkgcSAxMyA3MjUgMTMgNjAzIHEgOTYgOTEwIDEzIDgzOSBxIDMwNyA5ODIgMTgwIDk4MiBsIDMwNyAxMDc3IGwgMzgxIDEwNzcgbCAzODEgOTgyIHEgNTc0IDkxNyA0OTQgOTgyIHEgNjY0IDcxNyA2NjQgODQ1IG0gMzA3IDU2NSBsIDMwNyA4NzIgcSAxODcgODMxIDIzMyA4NzIgcSAxNDIgNzI0IDE0MiA3OTEgcSAxODAgNjE4IDE0MiA2NTYgcSAzMDcgNTY1IDIxOCA1ODAgbSAzODEgNzYgcSA1NjIgMjM3IDU2MiA5NiBxIDUxNyAzNjEgNTYyIDMxMyBxIDM4MSA0MjMgNDcyIDQwOSBsIDM4MSA3NiAifSwiXFwiOnsieF9taW4iOi0wLjAxNTYyNSwieF9tYXgiOjQyNS4wNjI1LCJoYSI6NTIyLCJvIjoibSA0MjUgLTEyOSBsIDMzNyAtMTI5IGwgMCAxMDQxIGwgODMgMTA0MSBsIDQyNSAtMTI5ICJ9LCLCtSI6eyJ4X21pbiI6MCwieF9tYXgiOjY5Ny4yMTg3NSwiaGEiOjc0NywibyI6Im0gNjk3IC00IHEgNjI5IC0xNCA2NTggLTE0IHEgNDk4IDk3IDUxMyAtMTQgcSA0MjIgOSA0NzAgNDEgcSAzMTMgLTIzIDM3NCAtMjMgcSAyMDcgNCAyNTggLTIzIHEgMTE5IDgxIDE1NiAzMiBsIDExOSAtMjc4IGwgMCAtMjc4IGwgMCA3MzggbCAxMjQgNzM4IGwgMTI0IDM0MyBxIDE2NSAxNzMgMTI0IDI0NiBxIDMwOCA4MyAyMTYgODMgcSA0NTIgMTc4IDQwMiA4MyBxIDQ5MyAzNTkgNDkzIDI1NSBsIDQ5MyA3MzggbCA2MTcgNzM4IGwgNjE3IDIxNCBxIDYyMyAxMzYgNjE3IDE2MCBxIDY3MyA5MiA2MzcgOTIgcSA2OTcgOTYgNjg0IDkyIGwgNjk3IC00ICJ9LCLOmSI6eyJ4X21pbiI6NDIsInhfbWF4IjoxODEsImhhIjoyOTcsIm8iOiJtIDE4MSAwIGwgNDIgMCBsIDQyIDEwMTMgbCAxODEgMTAxMyBsIDE4MSAwICJ9LCLOjiI6eyJ4X21pbiI6MCwieF9tYXgiOjExNDQuNSwiaGEiOjEyMTQsIm8iOiJtIDExNDQgMTAxMiBsIDgwNyA0MTYgbCA4MDcgMCBsIDY2NyAwIGwgNjY3IDQxNiBsIDMyNSAxMDEyIGwgNDY1IDEwMTIgbCA3MzYgNTMzIGwgMTAwNCAxMDEyIGwgMTE0NCAxMDEyIG0gMjc3IDEwNDAgbCA4MyA3OTkgbCAwIDc5OSBsIDE0MCAxMDQwIGwgMjc3IDEwNDAgIn0sIuKAmSI6eyJ4X21pbiI6MCwieF9tYXgiOjEzOSwiaGEiOjIzNiwibyI6Im0gMTM5IDg1MSBxIDEwMiA3MzcgMTM5IDc4NCBxIDAgNjY5IDY1IDY5MCBsIDAgNzM0IHEgNTkgNzg3IDQyIDc0MSBxIDcyIDg3MyA3MiA4MjEgbCAwIDg3MyBsIDAgMTAxMyBsIDEzOSAxMDEzIGwgMTM5IDg1MSAifSwizp0iOnsieF9taW4iOjAsInhfbWF4Ijo4MDEsImhhIjo5MTUsIm8iOiJtIDgwMSAwIGwgNjUxIDAgbCAxMzEgODIyIGwgMTMxIDAgbCAwIDAgbCAwIDEwMTMgbCAxNTEgMTAxMyBsIDY3MCAxOTEgbCA2NzAgMTAxMyBsIDgwMSAxMDEzIGwgODAxIDAgIn0sIi0iOnsieF9taW4iOjguNzE4NzUsInhfbWF4IjozNTAuMzkwNjI1LCJoYSI6NDc4LCJvIjoibSAzNTAgMzE3IGwgOCAzMTcgbCA4IDQyOCBsIDM1MCA0MjggbCAzNTAgMzE3ICJ9LCJRIjp7InhfbWluIjowLCJ4X21heCI6OTY4LCJoYSI6MTA3MiwibyI6Im0gOTU0IDUgbCA4ODcgLTc5IGwgNzQ0IDM1IHEgNjIyIC0xMSA2ODcgMiBxIDQ4MyAtMjYgNTU2IC0yNiBxIDEyNyAxMzAgMjYyIC0yNiBxIDAgNTA0IDAgMjc5IHEgMTI3IDg4MCAwIDcyOCBxIDQ4NCAxMDQxIDI2MiAxMDQxIHEgODQxIDg4NCA3MDggMTA0MSBxIDk2OCA1MDcgOTY4IDczNSBxIDkzMyAyOTMgOTY4IDM5OCBxIDgzMiAxMDQgODk5IDE4OCBsIDk1NCA1IG0gNzIzIDE5MSBxIDgwMiAzMzAgNzc3IDI0OCBxIDgyOCA0OTkgODI4IDQxMiBxIDc0NCA3OTAgODI4IDY3MyBxIDQ4MyA5MjIgNjUwIDkyMiBxIDIyOCA3OTEgMzIyIDkyMiBxIDE0MiA1MDUgMTQyIDY3MyBxIDIyNyAyMjEgMTQyIDMzNyBxIDQ4NyA5MSAzMjMgOTEgcSA2MzIgMTIzIDU2NiA5MSBsIDUyMCAyMTUgbCA1ODcgMzAxIGwgNzIzIDE5MSAifSwiz4IiOnsieF9taW4iOjEsInhfbWF4Ijo2NzYuMjgxMjUsImhhIjo3NDAsIm8iOiJtIDY3NiA0NjAgbCA1NTEgNDYwIHEgNDk4IDU5NSA1NDIgNTQ2IHEgMzY1IDY1MSA0NDggNjUxIHEgMTk5IDU3OCAyNjMgNjUxIHEgMTM2IDQwMSAxMzYgNTA1IHEgMjY2IDE3OCAxMzYgMjQxIHEgNTA4IDEwNiAzODcgMTQyIHEgNjQwIC01MCA2NDAgNjIgcSA2MjUgLTE1OCA2NDAgLTEwNSBxIDU4MyAtMjc4IDYxMSAtMjExIGwgNDY1IC0yNzggcSA0OTggLTE4MiA0OTAgLTIxMSBxIDUxNSAtODAgNTE1IC0xMjYgcSAzODEgMTIgNTE1IC0xNSBxIDEzNCA5MSAxOTcgNTEgcSAxIDM4OCAxIDE3OSBxIDEwMCA2NTEgMSA1NDIgcSAzNTQgNzYxIDE5OSA3NjEgcSA1ODcgNjgwIDQ5OCA3NjEgcSA2NzYgNDYwIDY3NiA1OTkgIn0sIk0iOnsieF9taW4iOjAsInhfbWF4Ijo5NTQsImhhIjoxMDY3LCJvIjoibSA5NTQgMCBsIDgxOSAwIGwgODE5IDg2OSBsIDUzNyAwIGwgNDA1IDAgbCAxMjggODY2IGwgMTI4IDAgbCAwIDAgbCAwIDEwMTMgbCAyMDAgMTAxMyBsIDQ3MiAxNjAgbCA3NTcgMTAxMyBsIDk1NCAxMDEzIGwgOTU0IDAgIn0sIs6oIjp7InhfbWluIjowLCJ4X21heCI6MTAwNiwiaGEiOjEwOTQsIm8iOiJtIDEwMDYgNjc4IHEgOTE0IDMxOSAxMDA2IDQyOSBxIDU3MSAyMDAgODE0IDIwMCBsIDU3MSAwIGwgNDMzIDAgbCA0MzMgMjAwIHEgOTIgMzE5IDE5NCAyMDAgcSAwIDY3OCAwIDQyOSBsIDAgMTAxMyBsIDEzOSAxMDEzIGwgMTM5IDY3OSBxIDE5MSA0MTcgMTM5IDQ5MiBxIDQzMyAzMjYgMjU1IDMyNiBsIDQzMyAxMDEzIGwgNTcxIDEwMTMgbCA1NzEgMzI2IGwgNTgwIDMyNiBxIDgxMyA0MjMgNzQ3IDMyNiBxIDg2OCA2NzkgODY4IDUwMiBsIDg2OCAxMDEzIGwgMTAwNiAxMDEzIGwgMTAwNiA2NzggIn0sIkMiOnsieF9taW4iOjAsInhfbWF4Ijo4ODYsImhhIjo5NDQsIm8iOiJtIDg4NiAzNzkgcSA3NjAgODcgODg2IDIwMSBxIDQ1NSAtMjYgNjM0IC0yNiBxIDExMiAxMzYgMjM2IC0yNiBxIDAgNTA5IDAgMjgzIHEgMTE4IDg4MiAwIDczNyBxIDQ2OSAxMDQxIDI0NSAxMDQxIHEgNzQ4IDk1NSA2MzAgMTA0MSBxIDg3OSA3MDggODc5IDg1OSBsIDc0NSA3MDggcSA2NDkgODYyIDcyNCA4MDUgcSA0NzMgOTIwIDU3MyA5MjAgcSAyMTkgNzkxIDMxMiA5MjAgcSAxMzYgNTA5IDEzNiA2NzUgcSAyMTcgMjI5IDEzNiAzNDQgcSA0NzAgOTkgMzExIDk5IHEgNjcyIDE3OSA1OTEgOTkgcSA3NTMgMzc5IDc1MyAyNTkgbCA4ODYgMzc5ICJ9LCIhIjp7InhfbWluIjowLCJ4X21heCI6MTM4LCJoYSI6MjM2LCJvIjoibSAxMzggNjg0IHEgMTE2IDQwOSAxMzggNjI5IHEgMTA1IDI0NCAxMDUgMjk5IGwgMzMgMjQ0IHEgMTYgNDY1IDMzIDMxMyBxIDAgNjg0IDAgNjE2IGwgMCAxMDEzIGwgMTM4IDEwMTMgbCAxMzggNjg0IG0gMTM4IDAgbCAwIDAgbCAwIDE1MSBsIDEzOCAxNTEgbCAxMzggMCAifSwieyI6eyJ4X21pbiI6MCwieF9tYXgiOjQ4MC41NjI1LCJoYSI6NTc4LCJvIjoibSA0ODAgLTI4NiBxIDIzNyAtMjEzIDMwMyAtMjg2IHEgMTg3IC00NSAxODcgLTE1OSBxIDE5NCA0OCAxODcgLTE1IHEgMjAxIDE0MSAyMDEgMTEyIHEgMTY0IDI2NCAyMDEgMjI1IHEgMCAzMTQgMTE4IDMxNCBsIDAgNDE3IHEgMTY0IDQ3MSAxMTkgNDE3IHEgMjAxIDYwNSAyMDEgNTE0IHEgMTk5IDY2NSAyMDEgNjQ0IHEgMTkzIDc3MiAxOTMgNzY5IHEgMjQxIDk0MSAxOTMgODg3IHEgNDgwIDEwMTUgMzA4IDEwMTUgbCA0ODAgOTE1IHEgMzM2IDg2NiAzNzUgOTE1IHEgMzA2IDc0MiAzMDYgODI4IHEgMzEwIDY2MiAzMDYgNzE3IHEgMzE0IDU3NyAzMTQgNjA2IHEgMjg4IDQ1MiAzMTQgNTAwIHEgMTc2IDM2NSAyNTYgMzkxIHEgMjg5IDI3NSAyNTcgMzM3IHEgMzE0IDE0MyAzMTQgMjI2IHEgMzEzIDg0IDMxNCAxMDcgcSAzMTAgLTExIDMxMCAtNSBxIDMzOSAtMTMxIDMxMCAtOTQgcSA0ODAgLTE4MiAzNzcgLTE4MiBsIDQ4MCAtMjg2ICJ9LCJYIjp7InhfbWluIjotMC4wMTU2MjUsInhfbWF4Ijo4NTQuMTU2MjUsImhhIjo5NDAsIm8iOiJtIDg1NCAwIGwgNjgzIDAgbCA0MjMgNDA5IGwgMTY2IDAgbCAwIDAgbCAzNDcgNTE5IGwgMTggMTAxMyBsIDE4NiAxMDEzIGwgNDI4IDYzNyBsIDY3NSAxMDEzIGwgODM2IDEwMTMgbCA1MDQgNTIwIGwgODU0IDAgIn0sIiMiOnsieF9taW4iOjAsInhfbWF4Ijo5NjMuODkwNjI1LCJoYSI6MTA2MSwibyI6Im0gOTYzIDY5MCBsIDkyNyA1OTAgbCA3MTkgNTkwIGwgNjU1IDQxMCBsIDg3NiA0MTAgbCA4NDAgMzEwIGwgNjE4IDMxMCBsIDUwOCAtMyBsIDM5MyAtMiBsIDUwNiAzMDkgbCAzMjkgMzEwIGwgMjE1IC0yIGwgMTAyIC0zIGwgMjEyIDMxMCBsIDAgMzEwIGwgMzYgNDEwIGwgMjQ4IDQwOSBsIDMxMiA1OTAgbCA4NiA1OTAgbCAxMjAgNjkwIGwgMzQ3IDY5MCBsIDQ1OSAxMDA2IGwgNTczIDEwMDYgbCA0NjIgNjkwIGwgNjQwIDY5MCBsIDc1MSAxMDA2IGwgODY1IDEwMDYgbCA3NTQgNjkwIGwgOTYzIDY5MCBtIDYwNiA1OTAgbCA0MjUgNTkwIGwgMzYyIDQxMCBsIDU0MyA0MTAgbCA2MDYgNTkwICJ9LCLOuSI6eyJ4X21pbiI6NDIsInhfbWF4IjoyODQsImhhIjozNjEsIm8iOiJtIDI4NCAzIHEgMjMzIC0xMCAyNTggLTUgcSAxODIgLTE1IDIwNyAtMTUgcSA4NSAyNiAxMTkgLTE1IHEgNDIgMjAwIDQyIDc5IGwgNDIgNzM4IGwgMTY3IDczOCBsIDE2OCAyMTUgcSAxNzIgMTQxIDE2OCAxNTcgcSAyMjYgMTAxIDE4MyAxMDEgcSAyNDggMTAzIDIzOSAxMDEgcSAyODQgMTEyIDI1NyAxMDQgbCAyODQgMyAifSwizoYiOnsieF9taW4iOjAsInhfbWF4Ijo5MDYuOTUzMTI1LCJoYSI6OTgyLCJvIjoibSAyODMgMTA0MCBsIDg4IDc5OSBsIDUgNzk5IGwgMTQ1IDEwNDAgbCAyODMgMTA0MCBtIDkwNiAwIGwgNzU2IDAgbCA2NTAgMzAzIGwgMjUxIDMwMyBsIDE0MyAwIGwgMCAwIGwgMzc2IDEwMTIgbCA1MjkgMTAxMiBsIDkwNiAwIG0gNjA5IDQyMSBsIDQ1MiA4NjYgbCAyOTMgNDIxIGwgNjA5IDQyMSAifSwiKSI6eyJ4X21pbiI6MCwieF9tYXgiOjMxOCwiaGEiOjQxNSwibyI6Im0gMzE4IDM2NSBxIDI1NyAyNSAzMTggMTkxIHEgODcgLTI5MCAxOTcgLTE0MSBsIDAgLTI5MCBxIDE0MCAyMSA5MyAtMTI4IHEgMTkzIDM2MCAxOTMgMTg5IHEgMTQxIDcwNCAxOTMgNTM3IHEgMCAxMDI0IDk3IDg1MCBsIDg3IDEwMjQgcSAyNTcgNzA2IDE5NyA4NzEgcSAzMTggMzY1IDMxOCA1NDIgIn0sIs61Ijp7InhfbWluIjowLCJ4X21heCI6NjM0LjcxODc1LCJoYSI6NzE0LCJvIjoibSA2MzQgMjM0IHEgNTI3IDM4IDYzNCAxMTAgcSAzMDAgLTI1IDQzMyAtMjUgcSA5OCAyOSAxODMgLTI1IHEgMCAyMDQgMCA5MyBxIDM3IDMxNCAwIDI2NSBxIDEyOCAzOTAgNjcgMzUzIHEgNTYgNDYwIDgyIDQxOSBxIDI2IDU1NSAyNiA1MDUgcSAxMTQgNzEyIDI2IDY1NCBxIDI5NSA3NjMgMTkxIDc2MyBxIDQ5OSA3MDAgNDE2IDc2MyBxIDU4OSA1MTUgNTg5IDYzMSBsIDQ3OCA1MTUgcSA0MTkgNjE4IDQ2NCA1ODAgcSAzMDcgNjU3IDM3NCA2NTcgcSAyMDcgNjMwIDI1MyA2NTcgcSAxNTEgNTQ3IDE1MSA1OTggcSAyMzggNDQ1IDE1MSA0NjkgcSAzODkgNDM0IDI4MCA0MzQgbCAzODkgMzMxIGwgMzQ5IDMzMSBxIDIwNiAzMTUgMjU1IDMzMSBxIDEyNSAyMTAgMTI1IDI4NyBxIDE4MyAxMDcgMTI1IDE0NSBxIDMwMiA3NiAyMzMgNzYgcSA0MzYgMTE3IDM3OSA3NiBxIDUwOSAyMzQgNDkzIDE1OSBsIDYzNCAyMzQgIn0sIs6UIjp7InhfbWluIjowLCJ4X21heCI6OTUyLjc4MTI1LCJoYSI6MTAyOCwibyI6Im0gOTUyIDAgbCAwIDAgbCA0MDAgMTAxMyBsIDU1MSAxMDEzIGwgOTUyIDAgbSA3NjIgMTI0IGwgNDc2IDg2NyBsIDE4NyAxMjQgbCA3NjIgMTI0ICJ9LCJ9Ijp7InhfbWluIjowLCJ4X21heCI6NDgxLCJoYSI6NTc4LCJvIjoibSA0ODEgMzE0IHEgMzE4IDI2MiAzNjQgMzE0IHEgMjgyIDEzNiAyODIgMjIyIHEgMjg0IDY1IDI4MiA5NyBxIDI5MyAtNTggMjkzIC00OCBxIDI0MSAtMjE3IDI5MyAtMTY2IHEgMCAtMjg2IDE3NCAtMjg2IGwgMCAtMTgyIHEgMTQzIC0xMzAgMTA1IC0xODIgcSAxNzEgLTIgMTcxIC05MyBxIDE2OCA4MSAxNzEgMjIgcSAxNjUgMTQ0IDE2NSAxNDAgcSAxODggMjc1IDE2NSAyMjkgcSAzMDYgMzY1IDIyMCAzMzkgcSAxOTEgNDU1IDIyNCAzOTEgcSAxNjUgNTg4IDE2NSA1MDUgcSAxNjggNjgxIDE2NSA2MjQgcSAxNzEgNzQyIDE3MSA3MzcgcSAxNDEgODY1IDE3MSA4MjcgcSAwIDkxNSAxMDIgOTE1IGwgMCAxMDE1IHEgMjQzIDk0MiAxNzYgMTAxNSBxIDI5MyA3NzMgMjkzIDg4OCBxIDI4NyA2NzUgMjkzIDc0MSBxIDI4MiA1OTAgMjgyIDYwOCBxIDMxOCA0NjYgMjgyIDUwNSBxIDQ4MSA0MTcgMzY0IDQxNyBsIDQ4MSAzMTQgIn0sIuKAsCI6eyJ4X21pbiI6LTMsInhfbWF4IjoxNjcyLCJoYSI6MTgyMSwibyI6Im0gODQ2IDAgcSA2NjQgNzYgNzMyIDAgcSA2MDMgMjQ0IDYwMyAxNDUgcSA2NjIgNDEyIDYwMyAzNDQgcSA4NDYgNDg5IDcyOSA0ODkgcSAxMDI3IDQxMiA5NTkgNDg5IHEgMTA4OSAyNDQgMTA4OSAzNDMgcSAxMDI5IDc2IDEwODkgMTQ0IHEgODQ2IDAgOTYyIDAgbSA4NDUgMTAzIHEgOTQ1IDE0MyA5MTAgMTAzIHEgOTgxIDI0MyA5ODEgMTg0IHEgOTQ3IDM0MCA5ODEgMzAxIHEgODQ1IDM4NSA5MTAgMzg1IHEgNzQ1IDM0MiA3ODIgMzg1IHEgNzA5IDI0MyA3MDkgMzAwIHEgNzQyIDE0NyA3MDkgMTg2IHEgODQ1IDEwMyA3ODEgMTAzIG0gODg4IDk4NiBsIDI4NCAtMjUgbCAxOTkgLTI1IGwgODAzIDk4NiBsIDg4OCA5ODYgbSAyNDEgNDY4IHEgNTggNTQ1IDEyNiA0NjggcSAtMyA3MTUgLTMgNjE1IHEgNTYgODgxIC0zIDgxMyBxIDIzOCA5NTggMTI0IDk1OCBxIDQyMSA4ODEgMzUzIDk1OCBxIDQ4MyA3MTIgNDgzIDgxMyBxIDQyMyA1NDQgNDgzIDYxMiBxIDI0MSA0NjggMzU2IDQ2OCBtIDI0MSA4NTUgcSAxMzcgODExIDE3NSA4NTUgcSAxMDAgNzEwIDEwMCA3NjggcSAxMzYgNjEyIDEwMCA2NTMgcSAyNDAgNTcyIDE3MiA1NzIgcSAzNDQgNjE0IDMwNiA1NzIgcSAzODIgNzEzIDM4MiA2NTYgcSAzNDcgODEwIDM4MiA3NzEgcSAyNDEgODU1IDMwOCA4NTUgbSAxNDI4IDAgcSAxMjQ2IDc2IDEzMTQgMCBxIDExODUgMjQ0IDExODUgMTQ1IHEgMTI0NCA0MTIgMTE4NSAzNDQgcSAxNDI4IDQ4OSAxMzExIDQ4OSBxIDE2MTAgNDEyIDE1NDIgNDg5IHEgMTY3MiAyNDQgMTY3MiAzNDMgcSAxNjEyIDc2IDE2NzIgMTQ0IHEgMTQyOCAwIDE1NDUgMCBtIDE0MjcgMTAzIHEgMTUyOCAxNDMgMTQ5MiAxMDMgcSAxNTY0IDI0MyAxNTY0IDE4NCBxIDE1MzAgMzQwIDE1NjQgMzAxIHEgMTQyNyAzODUgMTQ5MiAzODUgcSAxMzI3IDM0MiAxMzY0IDM4NSBxIDEyOTEgMjQzIDEyOTEgMzAwIHEgMTMyNCAxNDcgMTI5MSAxODYgcSAxNDI3IDEwMyAxMzYzIDEwMyAifSwiYSI6eyJ4X21pbiI6MCwieF9tYXgiOjY5OC42MDkzNzUsImhhIjo3OTQsIm8iOiJtIDY5OCAwIHEgNjYxIC0xMiA2NzkgLTcgcSA2MTUgLTE3IDY0MyAtMTcgcSA1MzYgMTIgNTY0IC0xNyBxIDUwMCA5NiA1MDggNDEgcSAzODQgNiA0NTYgMzcgcSAyMzYgLTI1IDMxMiAtMjUgcSA2NSAzMSAxMzAgLTI1IHEgMCAxOTQgMCA4OCBxIDExOCAzOTAgMCAzMzQgcSAzMjggNDM1IDE4MCA0MjAgcSA0ODggNDgzIDQ3NiA0NTEgcSA0OTUgNTIzIDQ5NSA1MDQgcSA0NDIgNjE5IDQ5NSA1ODQgcSAzMjUgNjU0IDM4OSA2NTQgcSAyMDkgNjE3IDI1NyA2NTQgcSAxNTIgNTEzIDE2MSA1ODAgbCAzMyA1MTMgcSAxMjMgNzA1IDMzIDYzMyBxIDMzMiA3NzIgMjA3IDc3MiBxIDUyOCA3MTIgNDQ4IDc3MiBxIDYxNyA1MzEgNjE3IDY0NSBsIDYxNyAxNjMgcSA2MjQgMTA4IDYxNyAxMjYgcSA2NjQgOTAgNjMyIDkwIGwgNjk4IDk0IGwgNjk4IDAgbSA0OTEgMjYyIGwgNDkxIDM3MiBxIDI3MiAzMjkgMzUwIDM0NyBxIDEyOCAyMDEgMTI4IDI5NCBxIDE2NiAxMTMgMTI4IDE0NCBxIDI2NCA4MyAyMDUgODMgcSA0MTQgMTMwIDM0NiA4MyBxIDQ5MSAyNjIgNDkxIDE4MyAifSwi4oCUIjp7InhfbWluIjowLCJ4X21heCI6OTQxLjY3MTg3NSwiaGEiOjEwMzksIm8iOiJtIDk0MSAzMzQgbCAwIDMzNCBsIDAgNDEwIGwgOTQxIDQxMCBsIDk0MSAzMzQgIn0sIj0iOnsieF9taW4iOjguNzE4NzUsInhfbWF4Ijo3ODAuOTUzMTI1LCJoYSI6NzkyLCJvIjoibSA3ODAgNTEwIGwgOCA1MTAgbCA4IDYwNiBsIDc4MCA2MDYgbCA3ODAgNTEwIG0gNzgwIDIzNSBsIDggMjM1IGwgOCAzMzIgbCA3ODAgMzMyIGwgNzgwIDIzNSAifSwiTiI6eyJ4X21pbiI6MCwieF9tYXgiOjgwMSwiaGEiOjkxNCwibyI6Im0gODAxIDAgbCA2NTEgMCBsIDEzMSA4MjMgbCAxMzEgMCBsIDAgMCBsIDAgMTAxMyBsIDE1MSAxMDEzIGwgNjcwIDE5MyBsIDY3MCAxMDEzIGwgODAxIDEwMTMgbCA4MDEgMCAifSwiz4EiOnsieF9taW4iOjAsInhfbWF4Ijo3MTIsImhhIjo3OTcsIm8iOiJtIDcxMiAzNjkgcSA2MjAgOTQgNzEyIDIwNyBxIDM2MiAtMjYgNTIxIC0yNiBxIDIzMCAyIDI5MiAtMjYgcSAxMTkgODMgMTY3IDMwIGwgMTE5IC0yNzggbCAwIC0yNzggbCAwIDM2MiBxIDkxIDY0MyAwIDUzMSBxIDM1NSA3NjQgMTkwIDc2NCBxIDYxNyA2NDcgNTE3IDc2NCBxIDcxMiAzNjkgNzEyIDUzNiBtIDU4MyAzNjYgcSA1MzAgNTU5IDU4MyA0ODAgcSAzNTkgNjUxIDQ2OSA2NTEgcSAxOTAgNTYyIDI1MiA2NTEgcSAxMzUgMzcwIDEzNSA0ODMgcSAxODkgMTc2IDEzNSAyNTcgcSAzNTkgODUgMjUwIDg1IHEgNTI4IDE3NSA0NjYgODUgcSA1ODMgMzY2IDU4MyAyNTQgIn0sIjIiOnsieF9taW4iOjU5LCJ4X21heCI6NzMxLCJoYSI6NzkyLCJvIjoibSA3MzEgMCBsIDU5IDAgcSAxOTcgMzE0IDU5IDE4OCBxIDQ1NyA0ODcgMTk5IDMxNSBxIDU5OCA2OTEgNTk4IDU4MCBxIDU0MyA4MTkgNTk4IDc3MiBxIDQxMSA4NjcgNDg4IDg2NyBxIDI3MiA4MTEgMzI4IDg2NyBxIDIwOSA2MzAgMjA5IDc0NyBsIDgxIDYzMCBxIDE4MiA5MDEgODEgODA1IHEgNDA4IDk4NiAyNzEgOTg2IHEgNjI5IDkwOSA1MzYgOTg2IHEgNzMxIDY5NCA3MzEgODI2IHEgNjEzIDQ0OSA3MzEgNTQxIHEgMzc4IDMxNiA0OTUgMzgzIHEgMjAxIDEyMiAyMzUgMjM0IGwgNzMxIDEyMiBsIDczMSAwICJ9LCLCryI6eyJ4X21pbiI6MCwieF9tYXgiOjk0MS42NzE4NzUsImhhIjo5MzgsIm8iOiJtIDk0MSAxMDMzIGwgMCAxMDMzIGwgMCAxMTA5IGwgOTQxIDExMDkgbCA5NDEgMTAzMyAifSwiWiI6eyJ4X21pbiI6MCwieF9tYXgiOjc3OSwiaGEiOjg0OSwibyI6Im0gNzc5IDAgbCAwIDAgbCAwIDExMyBsIDYyMSA4OTYgbCA0MCA4OTYgbCA0MCAxMDEzIGwgNzc5IDEwMTMgbCA3NzggODg3IGwgMTcxIDEyNCBsIDc3OSAxMjQgbCA3NzkgMCAifSwidSI6eyJ4X21pbiI6MCwieF9tYXgiOjYxNywiaGEiOjcyOSwibyI6Im0gNjE3IDAgbCA0OTkgMCBsIDQ5OSAxMTAgcSAzOTEgMTAgNDYwIDQ1IHEgMjQ2IC0yNSAzMjIgLTI1IHEgNjEgNTggMTI3IC0yNSBxIDAgMjU4IDAgMTM2IGwgMCA3MzggbCAxMjUgNzM4IGwgMTI1IDI4NCBxIDE1NiAxNDggMTI1IDIwMiBxIDI3MyA4MiAxOTcgODIgcSA0MzMgMTY1IDM2OSA4MiBxIDQ5MyAzNDAgNDkzIDI0MyBsIDQ5MyA3MzggbCA2MTcgNzM4IGwgNjE3IDAgIn0sImsiOnsieF9taW4iOjAsInhfbWF4Ijo2MTIuNDg0Mzc1LCJoYSI6Njk3LCJvIjoibSA2MTIgNzM4IGwgMzM4IDQ2NSBsIDYwOCAwIGwgNDY5IDAgbCAyNTEgMzgyIGwgMTIxIDI1MSBsIDEyMSAwIGwgMCAwIGwgMCAxMDEzIGwgMTIxIDEwMTMgbCAxMjEgNDAyIGwgNDU2IDczOCBsIDYxMiA3MzggIn0sIs6XIjp7InhfbWluIjowLCJ4X21heCI6ODAzLCJoYSI6OTE3LCJvIjoibSA4MDMgMCBsIDY2NyAwIGwgNjY3IDQ3NSBsIDE0MCA0NzUgbCAxNDAgMCBsIDAgMCBsIDAgMTAxMyBsIDE0MCAxMDEzIGwgMTQwIDU5OSBsIDY2NyA1OTkgbCA2NjcgMTAxMyBsIDgwMyAxMDEzIGwgODAzIDAgIn0sIs6RIjp7InhfbWluIjowLCJ4X21heCI6OTA2Ljk1MzEyNSwiaGEiOjk4NSwibyI6Im0gOTA2IDAgbCA3NTYgMCBsIDY1MCAzMDMgbCAyNTEgMzAzIGwgMTQzIDAgbCAwIDAgbCAzNzYgMTAxMyBsIDUyOSAxMDEzIGwgOTA2IDAgbSA2MDkgNDIxIGwgNDUyIDg2NiBsIDI5MyA0MjEgbCA2MDkgNDIxICJ9LCJzIjp7InhfbWluIjowLCJ4X21heCI6NjA0LCJoYSI6Njk3LCJvIjoibSA2MDQgMjE3IHEgNTAxIDM2IDYwNCAxMDQgcSAyOTIgLTIzIDQxMSAtMjMgcSA4NiA0MyAxNjYgLTIzIHEgMCAyMzggMCAxMTQgbCAxMjEgMjM3IHEgMTc1IDEyMiAxMjEgMTY0IHEgMzAwIDg1IDIyMyA4NSBxIDQxNSAxMTIgMzYzIDg1IHEgNDc5IDIwNyA0NzkgMTQ3IHEgMzYxIDMwOSA0NzkgMjc2IHEgMTQwIDM3MiAxNDEgMzcwIHEgMjEgNTQ0IDIxIDQyNiBxIDExMSA3MDggMjEgNjQ3IHEgMjk4IDc2MSAxOTAgNzYxIHEgNDkyIDcwNSA0MTMgNzYxIHEgNTgzIDUzMSA1ODMgNjQzIGwgNDYyIDUzMSBxIDQxMiA2MjUgNDYyIDU5NCBxIDI5OCA2NTcgMzYzIDY1NyBxIDE5OSA2MzYgMjQyIDY1NyBxIDE0MyA1NTggMTQzIDYwOCBxIDI2MiA0NTQgMTQzIDQ4NiBxIDQ4NCAzOTQgNDc5IDM5NyBxIDYwNCAyMTcgNjA0IDM0MSAifSwiQiI6eyJ4X21pbiI6MCwieF9tYXgiOjc3OCwiaGEiOjg3NiwibyI6Im0gNTgwIDU0NiBxIDcyNCA0NjkgNjcwIDUzNSBxIDc3OCAzMTEgNzc4IDQwMyBxIDY3MyA4MyA3NzggMTcxIHEgNDMyIDAgNTc1IDAgbCAwIDAgbCAwIDEwMTMgbCA0MTEgMTAxMyBxIDYyOSA5NTcgNTQxIDEwMTMgcSA3MzIgNzY4IDczMiA4OTIgcSA2OTEgNjMzIDczMiA2OTMgcSA1ODAgNTQ2IDY1MCA1NzIgbSAzOTMgODk5IGwgMTM5IDg5OSBsIDEzOSA1ODggbCAzNzkgNTg4IHEgNTIxIDYyNCA0NjIgNTg4IHEgNTkyIDc0NCA1OTIgNjY3IHEgNTMxIDg1OSA1OTIgODE5IHEgMzkzIDg5OSA0NzEgODk5IG0gNDE5IDEyNCBxIDU2NiAxNjkgNTA0IDEyNCBxIDYzNSAzMDMgNjM1IDIxOSBxIDU1OSA0MzYgNjM1IDM4OSBxIDQwMiA0NzcgNDk0IDQ3NyBsIDEzOSA0NzcgbCAxMzkgMTI0IGwgNDE5IDEyNCAifSwi4oCmIjp7InhfbWluIjowLCJ4X21heCI6NjE0LCJoYSI6NzA4LCJvIjoibSAxNDIgMCBsIDAgMCBsIDAgMTUxIGwgMTQyIDE1MSBsIDE0MiAwIG0gMzc4IDAgbCAyMzYgMCBsIDIzNiAxNTEgbCAzNzggMTUxIGwgMzc4IDAgbSA2MTQgMCBsIDQ3MiAwIGwgNDcyIDE1MSBsIDYxNCAxNTEgbCA2MTQgMCAifSwiPyI6eyJ4X21pbiI6MCwieF9tYXgiOjYwNywiaGEiOjcwNCwibyI6Im0gNjA3IDc3NyBxIDU0MyA1OTkgNjA3IDY3NCBxIDQyMiA0NzQgNDgyIDUzNyBxIDM1NyAyNzIgMzU3IDM5MSBsIDIzNiAyNzIgcSAyOTcgNDg3IDIzNiAzOTUgcSA0MTEgNjE5IDI5OCA0OTAgcSA0NzQgNzYyIDQ3NCA2OTEgcSA0MjIgODg1IDQ3NCA4MzggcSAzMDEgOTMzIDM3MSA5MzMgcSAxNzkgODgwIDIyOCA5MzMgcSAxMjQgNzA2IDEyNCA4MTkgbCAwIDcwNiBxIDk0IDk2MyAwIDg3MiBxIDMwMiAxMDQ0IDE3NyAxMDQ0IHEgNTExIDk3MyA0MjMgMTA0NCBxIDYwNyA3NzcgNjA3IDg5NSBtIDM3MCAwIGwgMjMwIDAgbCAyMzAgMTUxIGwgMzcwIDE1MSBsIDM3MCAwICJ9LCJIIjp7InhfbWluIjowLCJ4X21heCI6ODAzLCJoYSI6OTE1LCJvIjoibSA4MDMgMCBsIDY2NyAwIGwgNjY3IDQ3NSBsIDE0MCA0NzUgbCAxNDAgMCBsIDAgMCBsIDAgMTAxMyBsIDE0MCAxMDEzIGwgMTQwIDU5OSBsIDY2NyA1OTkgbCA2NjcgMTAxMyBsIDgwMyAxMDEzIGwgODAzIDAgIn0sIs69Ijp7InhfbWluIjowLCJ4X21heCI6Njc1LCJoYSI6NzYxLCJvIjoibSA2NzUgNzM4IGwgNDA0IDAgbCAyNzIgMCBsIDAgNzM4IGwgMTMzIDczOCBsIDM0MCAxNDcgbCA1NDEgNzM4IGwgNjc1IDczOCAifSwiYyI6eyJ4X21pbiI6MSwieF9tYXgiOjcwMS4zOTA2MjUsImhhIjo3NzUsIm8iOiJtIDcwMSAyNjQgcSA1ODQgNTMgNjgxIDEzMyBxIDM1MyAtMjYgNDg3IC0yNiBxIDkxIDkxIDE4OCAtMjYgcSAxIDM3MCAxIDIwMSBxIDkyIDY0NSAxIDUzNyBxIDM1MyA3NjEgMTkwIDc2MSBxIDU3MiA2ODggNDc5IDc2MSBxIDY5MCA0OTMgNjY2IDYxNSBsIDU1NiA0OTMgcSA0ODcgNjA2IDU0NSA1NjIgcSAzNTYgNjUwIDQyOCA2NTAgcSAxODYgNTYzIDI0NiA2NTAgcSAxMzQgMzcyIDEzNCA0ODcgcSAxODggMTc5IDEzNCAyNTggcSAzNTkgODggMjUwIDg4IHEgNDkyIDEzNiA0MzcgODggcSA1NjYgMjY0IDU0OCAxODUgbCA3MDEgMjY0ICJ9LCLCtiI6eyJ4X21pbiI6MCwieF9tYXgiOjU2Ni42NzE4NzUsImhhIjo2NzgsIm8iOiJtIDIxIDg5MiBsIDUyIDg5MiBsIDk4IDc2MSBsIDE0NSA4OTIgbCAxNzYgODkyIGwgMTc4IDc0MSBsIDE1NyA3NDEgbCAxNTcgODY3IGwgMTA4IDc0MSBsIDg4IDc0MSBsIDQwIDg3MSBsIDQwIDc0MSBsIDIxIDc0MSBsIDIxIDg5MiBtIDMwOCA4NTQgbCAzMDggNzMxIHEgMjUyIDY5MSAzMDggNjkxIHEgMjI3IDY5MSAyNDAgNjkxIHEgMjA3IDY5NiAyMTMgNjk1IGwgMjA3IDcxMiBsIDI1MyA3MDYgcSAyODggNzMzIDI4OCA3MDYgbCAyODggNzYzIHEgMjQ0IDc0MSAyNzkgNzQxIHEgMTkzIDc5NyAxOTMgNzQxIHEgMjYxIDg2MCAxOTMgODYwIHEgMjg3IDg2MCAyNzMgODYwIHEgMzA4IDg1NCAzMDIgODU1IG0gMjg4IDg0MiBsIDI2MyA4NDMgcSAyMTMgNzk2IDIxMyA4NDMgcSAyNDggNzU2IDIxMyA3NTYgcSAyODggNzk2IDI4OCA3NTYgbCAyODggODQyIG0gNTY2IDk4OCBsIDUwMiA5ODggbCA1MDIgLTEgbCA0MzkgLTEgbCA0MzkgOTg4IGwgMzE3IDk4OCBsIDMxNyAtMSBsIDI1MiAtMSBsIDI1MiA2MDIgcSA4MSA2NTMgMTU1IDYwMiBxIDAgODA1IDAgNzExIHEgMTAxIDk4OSAwIDkxOCBxIDMwOSAxMDUzIDE5NCAxMDUzIGwgNTY2IDEwNTMgbCA1NjYgOTg4ICJ9LCLOsiI6eyJ4X21pbiI6MCwieF9tYXgiOjY2MCwiaGEiOjc0NSwibyI6Im0gNDcxIDU1MCBxIDYxMCA0NTAgNTYxIDUyMiBxIDY2MCAyODAgNjYwIDM3OCBxIDU3OCA2NCA2NjAgMTUxIHEgMzY3IC0yMiA0OTcgLTIyIHEgMjM5IDUgMjk5IC0yMiBxIDEyNiA4MiAxNzggMzIgbCAxMjYgLTI3OCBsIDAgLTI3OCBsIDAgNTkzIHEgNTQgOTAzIDAgODAxIHEgMzE4IDEwNDIgMTI3IDEwNDIgcSA1MTkgOTY0IDQzNiAxMDQyIHEgNjAzIDc3MSA2MDMgODg3IHEgNTY3IDY0NCA2MDMgNzAxIHEgNDcxIDU1MCA1MzIgNTg2IG0gMzM3IDc5IHEgNDc2IDEzOCA0MTggNzkgcSA1MzUgMjc5IDUzNSAxOTggcSA0MjcgNDM3IDUzNSAzODYgcSAyMjYgNDc3IDM0NCA0NzcgbCAyMjYgNTgzIHEgMzk4IDYyMCAzMjkgNTgzIHEgNDg2IDc2MiA0ODYgNjY4IHEgNDM1IDg4NCA0ODYgODMzIHEgMzEyIDkzNSAzODQgOTM1IHEgMTY5IDg2MSAyMTkgOTM1IHEgMTI2IDY5OCAxMjYgNzk3IGwgMTI2IDM2MiBxIDE3MCAxNjkgMTI2IDI0MiBxIDMzNyA3OSAyMjQgNzkgIn0sIs6cIjp7InhfbWluIjowLCJ4X21heCI6OTU0LCJoYSI6MTA2OCwibyI6Im0gOTU0IDAgbCA4MTkgMCBsIDgxOSA4NjggbCA1MzcgMCBsIDQwNSAwIGwgMTI4IDg2NSBsIDEyOCAwIGwgMCAwIGwgMCAxMDEzIGwgMTk5IDEwMTMgbCA0NzIgMTU4IGwgNzU4IDEwMTMgbCA5NTQgMTAxMyBsIDk1NCAwICJ9LCLOjCI6eyJ4X21pbiI6MC4xMDkzNzUsInhfbWF4IjoxMTIwLCJoYSI6MTIxNywibyI6Im0gMTEyMCA1MDUgcSA5OTQgMTMyIDExMjAgMjgyIHEgNjQyIC0yOSA4NjEgLTI5IHEgMjkwIDEzMCA0MjIgLTI5IHEgMTY3IDUwNSAxNjcgMjgwIHEgMjk0IDg4MyAxNjcgNzMwIHEgNjUwIDEwNDYgNDMwIDEwNDYgcSA5OTkgODgyIDg2OCAxMDQ2IHEgMTEyMCA1MDUgMTEyMCA3MzAgbSA5NzcgNTA0IHEgODk2IDc4NCA5NzcgNjY5IHEgNjQ0IDkxNSA4MDQgOTE1IHEgMzkxIDc4NSA0ODQgOTE1IHEgMzA3IDUwNCAzMDcgNjY5IHEgMzkxIDIyNCAzMDcgMzM5IHEgNjQ0IDk1IDQ4NiA5NSBxIDg5NCAyMjQgODAzIDk1IHEgOTc3IDUwNCA5NzcgMzM5IG0gMjc3IDEwNDAgbCA4MyA3OTkgbCAwIDc5OSBsIDE0MCAxMDQwIGwgMjc3IDEwNDAgIn0sIs6JIjp7InhfbWluIjowLCJ4X21heCI6MTE1OCwiaGEiOjEyNzUsIm8iOiJtIDExNTggMCBsIDEwMjIgMCBsIDEwMjIgNDc1IGwgNDk2IDQ3NSBsIDQ5NiAwIGwgMzU2IDAgbCAzNTYgMTAxMiBsIDQ5NiAxMDEyIGwgNDk2IDU5OSBsIDEwMjIgNTk5IGwgMTAyMiAxMDEyIGwgMTE1OCAxMDEyIGwgMTE1OCAwIG0gMjc3IDEwNDAgbCA4MyA3OTkgbCAwIDc5OSBsIDE0MCAxMDQwIGwgMjc3IDEwNDAgIn0sIuKAoiI6eyJ4X21pbiI6MCwieF9tYXgiOjY2My44OTA2MjUsImhhIjo3NzUsIm8iOiJtIDY2MyA1MjkgcSA1NjYgMjkzIDY2MyAzOTEgcSAzMzEgMTk2IDQ2OSAxOTYgcSA5NyAyOTQgMTk0IDE5NiBxIDAgNTI5IDAgMzkzIHEgOTYgNzYzIDAgNjY1IHEgMzMxIDg2MSAxOTMgODYxIHEgNTY2IDc2MyA0NjkgODYxIHEgNjYzIDUyOSA2NjMgNjY1ICJ9LCLCpSI6eyJ4X21pbiI6MC4xODc1LCJ4X21heCI6ODE5LjU0Njg3NSwiaGEiOjg4NiwibyI6Im0gNTYzIDU2MSBsIDY5NyA1NjEgbCA2OTYgNDg3IGwgNTIwIDQ4NyBsIDQ4MiA0MTYgbCA0ODIgMzgwIGwgNjk3IDM4MCBsIDY5NSAzMDggbCA0ODIgMzA4IGwgNDgyIDAgbCAzNDIgMCBsIDM0MiAzMDggbCAxMjUgMzA4IGwgMTI1IDM4MCBsIDM0MiAzODAgbCAzNDIgNDE3IGwgMzAzIDQ4NyBsIDEyNSA0ODcgbCAxMjUgNTYxIGwgMjU4IDU2MSBsIDAgMTAxMyBsIDE0MCAxMDEzIGwgNDExIDUzMyBsIDY3OSAxMDEzIGwgODE5IDEwMTMgbCA1NjMgNTYxICJ9LCIoIjp7InhfbWluIjowLCJ4X21heCI6MzE4LjA2MjUsImhhIjo0MTUsIm8iOiJtIDMxOCAtMjkwIGwgMjMwIC0yOTAgcSA2MSAyMyAxMjIgLTE0MiBxIDAgMzY1IDAgMTkwIHEgNjIgNzEyIDAgNTQwIHEgMjMwIDEwMjQgMTE5IDg2OSBsIDMxOCAxMDI0IHEgMTc1IDcwNSAyMTkgODUzIHEgMTI1IDM2MCAxMjUgNTQyIHEgMTc2IDIyIDEyNSAxODcgcSAzMTggLTI5MCAyMjMgLTEyNyAifSwiVSI6eyJ4X21pbiI6MCwieF9tYXgiOjc5NiwiaGEiOjkwNCwibyI6Im0gNzk2IDM5MyBxIDY4MSA5MyA3OTYgMjEyIHEgMzg2IC0yNSA1NjYgLTI1IHEgMTAxIDk1IDIwOCAtMjUgcSAwIDM5MyAwIDIxMSBsIDAgMTAxMyBsIDEzOCAxMDEzIGwgMTM4IDM5MSBxIDIwNCAxOTEgMTM4IDI3MCBxIDM5NCAxMDcgMjc2IDEwNyBxIDU4NiAxOTEgNTEyIDEwNyBxIDY1NiAzOTEgNjU2IDI3MCBsIDY1NiAxMDEzIGwgNzk2IDEwMTMgbCA3OTYgMzkzICJ9LCLOsyI6eyJ4X21pbiI6MC41LCJ4X21heCI6NzQ0Ljk1MzEyNSwiaGEiOjgyMiwibyI6Im0gNzQ0IDczNyBsIDQ2MyA1NCBsIDQ2MyAtMjc4IGwgMzM4IC0yNzggbCAzMzggNTQgbCAxNTQgNDk1IHEgMTA0IDU5NyAxMjQgNTY5IHEgMTMgNjUxIDY3IDY1MSBsIDAgNjUxIGwgMCA3NTEgbCAzOSA3NTMgcSAxNjggNzExIDEyMSA3NTMgcSAyNDIgNTk0IDIwNyA2NzYgbCA0MDMgMjA4IGwgNjE3IDczNyBsIDc0NCA3MzcgIn0sIs6xIjp7InhfbWluIjowLCJ4X21heCI6NzY1LjU2MjUsImhhIjo4MDksIm8iOiJtIDc2NSAtNCBxIDY5OCAtMTQgNzI2IC0xNCBxIDU2NCA5NyA1ODYgLTE0IHEgNDY2IDcgNTI1IDQwIHEgMzM3IC0yNiA0MDcgLTI2IHEgODggOTggMTg2IC0yNiBxIDAgMzY5IDAgMjEyIHEgODggNjM3IDAgNTI1IHEgMzM3IDc2MCAxODQgNzYwIHEgNDY1IDcyOCA0MDcgNzYwIHEgNTYzIDYzNyA1MjQgNjk2IGwgNTYzIDczOSBsIDY4NSA3MzkgbCA2ODUgMjIyIHEgNjkzIDE0MSA2ODUgMTY4IHEgNzQ4IDk0IDcwOCA5NCBxIDc2NSA5NiA3NjAgOTQgbCA3NjUgLTQgbSA1ODQgMzcxIHEgNTMxIDU2MiA1ODQgNDg1IHEgMzYwIDY1MyA0NzAgNjUzIHEgMTkyIDU2NiAyNTQgNjUzIHEgMTM1IDM3OSAxMzUgNDg5IHEgMTg2IDE4MSAxMzUgMjYxIHEgMzU4IDg0IDI0NyA4NCBxIDUyOCAxNzYgNDY1IDg0IHEgNTg0IDM3MSA1ODQgMjYwICJ9LCJGIjp7InhfbWluIjowLCJ4X21heCI6NjgzLjMyODEyNSwiaGEiOjcxNywibyI6Im0gNjgzIDg4OCBsIDE0MCA4ODggbCAxNDAgNTgzIGwgNjEzIDU4MyBsIDYxMyA0NTggbCAxNDAgNDU4IGwgMTQwIDAgbCAwIDAgbCAwIDEwMTMgbCA2ODMgMTAxMyBsIDY4MyA4ODggIn0sIsKtIjp7InhfbWluIjowLCJ4X21heCI6NzA1LjU2MjUsImhhIjo4MDMsIm8iOiJtIDcwNSAzMzQgbCAwIDMzNCBsIDAgNDEwIGwgNzA1IDQxMCBsIDcwNSAzMzQgIn0sIjoiOnsieF9taW4iOjAsInhfbWF4IjoxNDIsImhhIjoyMzksIm8iOiJtIDE0MiA1ODUgbCAwIDU4NSBsIDAgNzM4IGwgMTQyIDczOCBsIDE0MiA1ODUgbSAxNDIgMCBsIDAgMCBsIDAgMTUxIGwgMTQyIDE1MSBsIDE0MiAwICJ9LCLOpyI6eyJ4X21pbiI6MCwieF9tYXgiOjg1NC4xNzE4NzUsImhhIjo5MzUsIm8iOiJtIDg1NCAwIGwgNjgzIDAgbCA0MjMgNDA5IGwgMTY2IDAgbCAwIDAgbCAzNDcgNTE5IGwgMTggMTAxMyBsIDE4NiAxMDEzIGwgNDI3IDYzNyBsIDY3NSAxMDEzIGwgODM2IDEwMTMgbCA1MDQgNTIxIGwgODU0IDAgIn0sIioiOnsieF9taW4iOjExNiwieF9tYXgiOjY3NCwiaGEiOjc5MiwibyI6Im0gNjc0IDc2OCBsIDQ3NSA3MTMgbCA2MTAgNTQ0IGwgNTE3IDQ3NyBsIDM5NCA2NTIgbCAyNzIgNDc4IGwgMTc4IDU0NCBsIDMxNCA3MTMgbCAxMTYgNzY2IGwgMTUzIDg3NiBsIDM0MSA4MTIgbCAzNDIgMTAxMyBsIDQ0NiAxMDEzIGwgNDQ2IDgxMSBsIDYzNSA4NzQgbCA2NzQgNzY4ICJ9LCLigKAiOnsieF9taW4iOjAsInhfbWF4Ijo3NzcsImhhIjo4MzUsIm8iOiJtIDQ1OCA4MDQgbCA3NzcgODA0IGwgNzc3IDY4MyBsIDQ1OCA2ODMgbCA0NTggMCBsIDMxOSAwIGwgMzE5IDY4MSBsIDAgNjgzIGwgMCA4MDQgbCAzMTkgODA0IGwgMzE5IDEwMTUgbCA0NTggMTAxMyBsIDQ1OCA4MDQgIn0sIsKwIjp7InhfbWluIjowLCJ4X21heCI6MzQ3LCJoYSI6NDQ0LCJvIjoibSAxNzMgODAyIHEgNDMgODU2IDkxIDgwMiBxIDAgOTc3IDAgOTA1IHEgNDUgMTEwMSAwIDEwNDkgcSAxNzMgMTE1MyA5MCAxMTUzIHEgMzAzIDEwOTggMjU1IDExNTMgcSAzNDcgOTc3IDM0NyAxMDQ5IHEgMzAzIDg1NiAzNDcgOTA1IHEgMTczIDgwMiAyNTYgODAyIG0gMTczIDg4NCBxIDIzOCA5MTAgMjE0IDg4NCBxIDI2MiA5NzMgMjYyIDkzNyBxIDIzOSAxMDM4IDI2MiAxMDEyIHEgMTczIDEwNjQgMjE3IDEwNjQgcSAxMDggMTAzNyAxMzIgMTA2NCBxIDg1IDk3MyA4NSAxMDEwIHEgMTA4IDkxMCA4NSA5MzcgcSAxNzMgODg0IDEzMiA4ODQgIn0sIlYiOnsieF9taW4iOjAsInhfbWF4Ijo4NjIuNzE4NzUsImhhIjo5NDAsIm8iOiJtIDg2MiAxMDEzIGwgNTA1IDAgbCAzNjEgMCBsIDAgMTAxMyBsIDE0MyAxMDEzIGwgNDM0IDE2NSBsIDcxOCAxMDEyIGwgODYyIDEwMTMgIn0sIs6eIjp7InhfbWluIjowLCJ4X21heCI6NzM0LjcxODc1LCJoYSI6NzYzLCJvIjoibSA3MjMgODg5IGwgOSA4ODkgbCA5IDEwMTMgbCA3MjMgMTAxMyBsIDcyMyA4ODkgbSA2NzMgNDYzIGwgNjEgNDYzIGwgNjEgNTg5IGwgNjczIDU4OSBsIDY3MyA0NjMgbSA3MzQgMCBsIDAgMCBsIDAgMTI0IGwgNzM0IDEyNCBsIDczNCAwICJ9LCLCoCI6eyJ4X21pbiI6MCwieF9tYXgiOjAsImhhIjo4NTN9LCLOqyI6eyJ4X21pbiI6MC4zMjgxMjUsInhfbWF4Ijo4MTkuNTE1NjI1LCJoYSI6ODg5LCJvIjoibSA1ODggMTA0NiBsIDQ2MCAxMDQ2IGwgNDYwIDExODkgbCA1ODggMTE4OSBsIDU4OCAxMDQ2IG0gMzYwIDEwNDYgbCAyMzIgMTA0NiBsIDIzMiAxMTg5IGwgMzYwIDExODkgbCAzNjAgMTA0NiBtIDgxOSAxMDEyIGwgNDgyIDQxNiBsIDQ4MiAwIGwgMzQyIDAgbCAzNDIgNDE2IGwgMCAxMDEyIGwgMTQwIDEwMTIgbCA0MTEgNTMzIGwgNjc5IDEwMTIgbCA4MTkgMTAxMiAifSwiMCI6eyJ4X21pbiI6NzMsInhfbWF4Ijo3MTUsImhhIjo3OTIsIm8iOiJtIDM5NCAtMjkgcSAxNTMgMTI5IDI0MiAtMjkgcSA3MyA0NzkgNzMgMjcyIHEgMTUyIDgyOSA3MyA2ODcgcSAzOTQgOTg5IDI0MSA5ODkgcSA2MzQgODI5IDU0NSA5ODkgcSA3MTUgNDc5IDcxNSA2ODQgcSA2MzUgMTI5IDcxNSAyNzAgcSAzOTQgLTI5IDU0NiAtMjkgbSAzOTQgODkgcSA1NDYgMjExIDQ4OSA4OSBxIDU5OCA0NzkgNTk4IDMyMiBxIDU0OCA3NDggNTk4IDY0MCBxIDM5NCA4NzEgNDkxIDg3MSBxIDI0MSA3NDggMjk4IDg3MSBxIDE5MCA0NzkgMTkwIDYzNyBxIDIzOSAyMTEgMTkwIDMxOSBxIDM5NCA4OSAyOTYgODkgIn0sIuKAnSI6eyJ4X21pbiI6MCwieF9tYXgiOjM0NywiaGEiOjQ1NCwibyI6Im0gMTM5IDg1MSBxIDEwMiA3MzcgMTM5IDc4NCBxIDAgNjY5IDY1IDY5MCBsIDAgNzM0IHEgNTkgNzg3IDQyIDc0MSBxIDcyIDg3MyA3MiA4MjEgbCAwIDg3MyBsIDAgMTAxMyBsIDEzOSAxMDEzIGwgMTM5IDg1MSBtIDM0NyA4NTEgcSAzMTAgNzM3IDM0NyA3ODQgcSAyMDggNjY5IDI3MyA2OTAgbCAyMDggNzM0IHEgMjY3IDc4NyAyNTAgNzQxIHEgMjgwIDg3MyAyODAgODIxIGwgMjA4IDg3MyBsIDIwOCAxMDEzIGwgMzQ3IDEwMTMgbCAzNDcgODUxICJ9LCJAIjp7InhfbWluIjowLCJ4X21heCI6MTI2MCwiaGEiOjEzNTcsIm8iOiJtIDEwOTggLTQ1IHEgODc3IC0xNjAgMTAwMSAtMTE3IHEgNjMzIC0yMDMgNzUyIC0yMDMgcSAxNTUgLTI5IDMyNyAtMjAzIHEgMCAzNjAgMCAxMjcgcSAxNzYgODAyIDAgNjE2IHEgNjg3IDEwMDggMzcyIDEwMDggcSAxMTIzIDg1NCA5NjkgMTAwOCBxIDEyNjAgNTE3IDEyNjAgNzE4IHEgMTE1NSAyMTYgMTI2MCAzNDEgcSA4NjggODIgMTA0NCA4MiBxIDc3MiAxMDYgODAxIDgyIHEgNzM3IDIwMiA3MzcgMTM1IHEgNjQ3IDExMyA3MDAgMTQ0IHEgNTI3IDgyIDU5NCA4MiBxIDM2NyAxNDcgNDIwIDgyIHEgMzE0IDMxMiAzMTQgMjEyIHEgNDAxIDU2NSAzMTQgNDUyIHEgNjM5IDY5MCA0OTggNjkwIHEgODEwIDU4OCA3NjAgNjkwIGwgODQ5IDY2OCBsIDkzOCA2NjggcSA4NzcgNDQxIDkwMCA1MzIgcSA4MzMgMjI2IDgzMyAyNjggcSA4NTMgMTgyIDgzMyAxOTggcSA5MDIgMTY3IDg3MyAxNjcgcSAxMDg4IDI3MiAxMDEyIDE2NyBxIDExNTkgNTEyIDExNTkgMzcyIHEgMTA1MSA3OTMgMTE1OSA2ODEgcSA2ODcgOTI1IDkyNSA5MjUgcSAyNDggNzQ3IDQxNSA5MjUgcSA5NyAzNjEgOTcgNTg2IHEgMjI2IDI2IDk3IDE1OSBxIDYyNyAtMTIyIDM3MCAtMTIyIHEgODU2IC04NyA3MzcgLTEyMiBxIDEwNjEgOCA5NzYgLTUzIGwgMTA5OCAtNDUgbSA3ODYgNDg4IHEgNzM4IDU4MCA3NzcgNTQ1IHEgNjQzIDYxNSA3MDAgNjE1IHEgNDgzIDUxNyA1NDggNjE1IHEgNDI1IDMyMiA0MjUgNDMwIHEgNDU3IDIwMyA0MjUgMjUwIHEgNTUyIDE1NiA0OTAgMTU2IHEgNzIyIDI3MyA2NjUgMTU2IHEgNzg2IDQ4OCA3MzggMzA5ICJ9LCLOiiI6eyJ4X21pbiI6MCwieF9tYXgiOjQ5OSwiaGEiOjYxMywibyI6Im0gMjc3IDEwNDAgbCA4MyA3OTkgbCAwIDc5OSBsIDE0MCAxMDQwIGwgMjc3IDEwNDAgbSA0OTkgMCBsIDM2MCAwIGwgMzYwIDEwMTIgbCA0OTkgMTAxMiBsIDQ5OSAwICJ9LCJpIjp7InhfbWluIjoxNCwieF9tYXgiOjEzNiwiaGEiOjI3NSwibyI6Im0gMTM2IDg3MyBsIDE0IDg3MyBsIDE0IDEwMTMgbCAxMzYgMTAxMyBsIDEzNiA4NzMgbSAxMzYgMCBsIDE0IDAgbCAxNCA3MzcgbCAxMzYgNzM3IGwgMTM2IDAgIn0sIs6SIjp7InhfbWluIjowLCJ4X21heCI6Nzc4LCJoYSI6ODc3LCJvIjoibSA1ODAgNTQ1IHEgNzI0IDQ2OCA2NzEgNTM0IHEgNzc4IDMxMCA3NzggNDAyIHEgNjczIDgzIDc3OCAxNzAgcSA0MzIgMCA1NzUgMCBsIDAgMCBsIDAgMTAxMyBsIDQxMSAxMDEzIHEgNjI5IDk1NyA1NDEgMTAxMyBxIDczMiA3NjggNzMyIDg5MSBxIDY5MSA2MzIgNzMyIDY5MiBxIDU4MCA1NDUgNjUwIDU3MSBtIDM5MyA4OTkgbCAxMzkgODk5IGwgMTM5IDU4NyBsIDM3OSA1ODcgcSA1MjEgNjIzIDQ2MiA1ODcgcSA1OTIgNzQ0IDU5MiA2NjYgcSA1MzEgODU5IDU5MiA4MTkgcSAzOTMgODk5IDQ3MSA4OTkgbSA0MTkgMTI0IHEgNTY2IDE2OSA1MDQgMTI0IHEgNjM1IDMwMiA2MzUgMjE5IHEgNTU5IDQzNSA2MzUgMzg4IHEgNDAyIDQ3NiA0OTQgNDc2IGwgMTM5IDQ3NiBsIDEzOSAxMjQgbCA0MTkgMTI0ICJ9LCLPhSI6eyJ4X21pbiI6MCwieF9tYXgiOjYxNywiaGEiOjcyNSwibyI6Im0gNjE3IDM1MiBxIDU0MCA5NCA2MTcgMTk5IHEgMzA4IC0yNCA0NTUgLTI0IHEgNzYgOTQgMTYxIC0yNCBxIDAgMzUyIDAgMTk5IGwgMCA3MzkgbCAxMjYgNzM5IGwgMTI2IDM1NSBxIDE2OSAxODUgMTI2IDI1NyBxIDMxMiA5OCAyMjAgOTggcSA0NTEgMTg1IDQwMiA5OCBxIDQ5MiAzNTUgNDkyIDI1NyBsIDQ5MiA3MzkgbCA2MTcgNzM5IGwgNjE3IDM1MiAifSwiXSI6eyJ4X21pbiI6MCwieF9tYXgiOjI3NSwiaGEiOjM3MiwibyI6Im0gMjc1IC0yODEgbCAwIC0yODEgbCAwIC0xODcgbCAxNTEgLTE4NyBsIDE1MSA5MjAgbCAwIDkyMCBsIDAgMTAxMyBsIDI3NSAxMDEzIGwgMjc1IC0yODEgIn0sIm0iOnsieF9taW4iOjAsInhfbWF4IjoxMDE5LCJoYSI6MTEyOCwibyI6Im0gMTAxOSAwIGwgODk3IDAgbCA4OTcgNDU0IHEgODYwIDU5MSA4OTcgNTM2IHEgNzM5IDY2MCA4MTYgNjYwIHEgNjEzIDU4NiA2NTkgNjYwIHEgNTczIDQzNiA1NzMgNTIyIGwgNTczIDAgbCA0NDcgMCBsIDQ0NyA0NTUgcSA0MTIgNTkxIDQ0NyA1MzUgcSAyOTQgNjU3IDM3MiA2NTcgcSAxNjUgNTg2IDIxMyA2NTcgcSAxMjIgNDM3IDEyMiA1MjEgbCAxMjIgMCBsIDAgMCBsIDAgNzM4IGwgMTE3IDczOCBsIDExNyA2NDAgcSAyMDIgNzMwIDE1MCA2OTcgcSAzMTYgNzYzIDI1NCA3NjMgcSA0MzcgNzMwIDM4MSA3NjMgcSA1MjUgNjQyIDQ5NCA2OTcgcSA2MjEgNzMxIDU1OSA3MDAgcSA3NTMgNzYzIDY4MiA3NjMgcSA5NDMgNjk0IDg2NyA3NjMgcSAxMDE5IDUxMiAxMDE5IDYyNSBsIDEwMTkgMCAifSwiz4ciOnsieF9taW4iOjguMzI4MTI1LCJ4X21heCI6NzgwLjU2MjUsImhhIjo4MTUsIm8iOiJtIDc4MCAtMjc4IHEgNzE1IC0yOTQgNzQ3IC0yOTQgcSA2MTYgLTI1NyA2NjMgLTI5NCBxIDU0OCAtMTc1IDU3NiAtMjI3IGwgMzc5IDEzMyBsIDE0MyAtMjc3IGwgOSAtMjc3IGwgMzEzIDI1NCBsIDE2MyA1MjIgcSAxMjcgNTg2IDEzMSA1ODAgcSAzNiA2NDAgOTEgNjQwIHEgOCA2MzcgMjcgNjQwIGwgOCA3NTIgbCA1MiA3NTcgcSAxNjIgNzE5IDExMyA3NTcgcSAyMzYgNjI3IDIwMCA2OTAgbCAzODMgMzcyIGwgNTk0IDczNyBsIDcyNiA3MzcgbCA0NDggMjUwIGwgNjI1IC02OSBxIDY3MCAtMTUzIDY0NyAtMTEwIHEgNzQzIC0xODggNjk1IC0xODggcSA3ODAgLTE4NCA3NTkgLTE4OCBsIDc4MCAtMjc4ICJ9LCI4Ijp7InhfbWluIjo1NSwieF9tYXgiOjczNiwiaGEiOjc5MiwibyI6Im0gNTcxIDUyNyBxIDY5NCA0MjQgNjUyIDQ5MSBxIDczNiAyODAgNzM2IDM1OCBxIDY0OCA3MSA3MzYgMTU4IHEgMzk1IC0yNiA1NTEgLTI2IHEgMTQyIDY5IDIzOCAtMjYgcSA1NSAyNzkgNTUgMTU3IHEgOTYgNDI1IDU1IDM1OSBxIDIyMCA1MjcgMTM4IDQ5MSBxIDEyMCA2MTUgMTUzIDU2MiBxIDg4IDcyNiA4OCA2NjggcSAxNzEgOTA0IDg4IDgyNyBxIDM5NSA5ODYgMjYxIDk4NiBxIDYxOCA5MDUgNTI5IDk4NiBxIDcwMiA3MjcgNzAyIDgzMCBxIDY3MCA2MTYgNzAyIDY2NyBxIDU3MSA1MjcgNjM4IDU2NSBtIDM5NCA1NjUgcSA1MTkgNjEwIDQ3NSA1NjUgcSA1NjMgNzE3IDU2MyA2NTUgcSA1MjEgODIzIDU2MyA3ODEgcSAzOTIgODcyIDQ3NCA4NzIgcSAyNjUgODI0IDMxMiA4NzIgcSAyMjQgNzIwIDIyNCA3ODMgcSAyNjUgNjEzIDIyNCA2NTYgcSAzOTQgNTY1IDMxMiA1NjUgbSAzOTUgOTEgcSA1NDUgMTUwIDQ4OCA5MSBxIDU5NyAyODAgNTk3IDIwNCBxIDU0NiA0MDggNTk3IDM1NSBxIDM5NSA0NjUgNDkyIDQ2NSBxIDI0NCA0MDggMjk5IDQ2NSBxIDE5NCAyODAgMTk0IDM1NiBxIDI0NCAxNTAgMTk0IDIwMyBxIDM5NSA5MSAyOTkgOTEgIn0sIs6vIjp7InhfbWluIjo0MiwieF9tYXgiOjMyNi43MTg3NSwiaGEiOjM2MSwibyI6Im0gMjg0IDMgcSAyMzMgLTEwIDI1OCAtNSBxIDE4MiAtMTUgMjA3IC0xNSBxIDg1IDI2IDExOSAtMTUgcSA0MiAyMDAgNDIgNzkgbCA0MiA3MzcgbCAxNjcgNzM3IGwgMTY4IDIxNSBxIDE3MiAxNDEgMTY4IDE1NyBxIDIyNiAxMDEgMTgzIDEwMSBxIDI0OCAxMDIgMjM5IDEwMSBxIDI4NCAxMTIgMjU3IDEwNCBsIDI4NCAzIG0gMzI2IDEwNDAgbCAxMzcgODE5IGwgNTQgODE5IGwgMTg5IDEwNDAgbCAzMjYgMTA0MCAifSwizpYiOnsieF9taW4iOjAsInhfbWF4Ijo3NzkuMTcxODc1LCJoYSI6ODUwLCJvIjoibSA3NzkgMCBsIDAgMCBsIDAgMTEzIGwgNjIwIDg5NiBsIDQwIDg5NiBsIDQwIDEwMTMgbCA3NzkgMTAxMyBsIDc3OSA4ODcgbCAxNzAgMTI0IGwgNzc5IDEyNCBsIDc3OSAwICJ9LCJSIjp7InhfbWluIjowLCJ4X21heCI6NzgxLjk1MzEyNSwiaGEiOjkwNywibyI6Im0gNzgxIDAgbCA2MjMgMCBxIDU4NyAyNDIgNTkwIDUyIHEgNDA3IDQzMyA1ODUgNDMzIGwgMTM4IDQzMyBsIDEzOCAwIGwgMCAwIGwgMCAxMDEzIGwgMzk2IDEwMTMgcSA2MzYgOTQ2IDUzOSAxMDEzIHEgNzQ5IDczMSA3NDkgODY4IHEgNzExIDU5NyA3NDkgNjU5IHEgNjA4IDUwMiA2NzQgNTM0IHEgNzE4IDM3MCA2OTYgNDc0IHEgNzI5IDIwNyA3MjIgMzUyIHEgNzgxIDI2IDczNiA2MiBsIDc4MSAwIG0gMzczIDU1MSBxIDUzMyA1OTQgNDY1IDU1MSBxIDYxNCA3MzEgNjE0IDY0NSBxIDUzMiA4NTkgNjE0IDgxNSBxIDM3MyA4OTYgNDY1IDg5NiBsIDEzOCA4OTYgbCAxMzggNTUxIGwgMzczIDU1MSAifSwibyI6eyJ4X21pbiI6MCwieF9tYXgiOjcxMywiaGEiOjgyMSwibyI6Im0gMzU3IC0yNSBxIDk0IDkxIDE5NCAtMjUgcSAwIDM2OCAwIDIwMiBxIDkzIDY0MiAwIDUzMyBxIDM1NyA3NjEgMTkzIDc2MSBxIDYxOCA2NDQgNTE4IDc2MSBxIDcxMyAzNjggNzEzIDUzMyBxIDYxOSA5MSA3MTMgMjAxIHEgMzU3IC0yNSA1MjEgLTI1IG0gMzU3IDg1IHEgNTI4IDE3NSA0NjUgODUgcSA1ODQgMzY5IDU4NCAyNTUgcSA1MjkgNTYyIDU4NCA0ODQgcSAzNTcgNjUxIDQ2NyA2NTEgcSAxODkgNTYwIDI1MCA2NTEgcSAxMzUgMzY5IDEzNSA0ODEgcSAxODcgMTc3IDEzNSAyNTcgcSAzNTcgODUgMjUwIDg1ICJ9LCI1Ijp7InhfbWluIjo1NC4xNzE4NzUsInhfbWF4Ijo3MzgsImhhIjo3OTIsIm8iOiJtIDczOCAzMTQgcSA2MjYgNjAgNzM4IDE1MyBxIDM4MiAtMjMgNTI2IC0yMyBxIDE1NSA0NyAyNDggLTIzIHEgNTQgMjU2IDU0IDEyNSBsIDE4MyAyNTYgcSAyNTkgMTMyIDIwNCAxNzQgcSAzODIgOTEgMzE0IDkxIHEgNTMzIDE0OSA0NzEgOTEgcSA2MDIgMzE0IDYwMiAyMTMgcSA1MzggNDY5IDYwMiA0MTEgcSAzODYgNTI4IDQ3NSA1MjggcSAyODQgNTA2IDMzMiA1MjggcSAxOTcgNDM5IDIzNyA0ODQgbCA4MSA0MzkgbCAxNTkgOTU4IGwgNjg0IDk1OCBsIDY4NCA4NDAgbCAyNTQgODQwIGwgMjE0IDU3OSBxIDMwNiA2MjcgMjU4IDYxMiBxIDQwNyA2NDMgMzU0IDY0MyBxIDYzNiA1NTIgNTQwIDY0MyBxIDczOCAzMTQgNzM4IDQ1NyAifSwiNyI6eyJ4X21pbiI6NTguNzE4NzUsInhfbWF4Ijo3MzAuOTUzMTI1LCJoYSI6NzkyLCJvIjoibSA3MzAgODM5IHEgNDY5IDQ0OCA1NjAgNjQxIHEgMzM1IDAgMzc4IDI1NSBsIDE5MiAwIHEgMzI4IDQ0MSAyMzUgMjUyIHEgNTkzIDgzMCA0MjEgNjMwIGwgNTggODMwIGwgNTggOTU4IGwgNzMwIDk1OCBsIDczMCA4MzkgIn0sIksiOnsieF9taW4iOjAsInhfbWF4Ijo4MTkuNDY4NzUsImhhIjo5MDYsIm8iOiJtIDgxOSAwIGwgNjQ5IDAgbCAyOTQgNTA5IGwgMTM5IDM1NSBsIDEzOSAwIGwgMCAwIGwgMCAxMDEzIGwgMTM5IDEwMTMgbCAxMzkgNTI2IGwgNjI2IDEwMTMgbCA4MDkgMTAxMyBsIDM5NSA2MDAgbCA4MTkgMCAifSwiLCI6eyJ4X21pbiI6MCwieF9tYXgiOjE0MiwiaGEiOjIzOSwibyI6Im0gMTQyIC0xMiBxIDEwNSAtMTMyIDE0MiAtODIgcSAwIC0yMDUgNjggLTE4MiBsIDAgLTEzOCBxIDU3IC04MiA0MCAtMTI0IHEgNzAgMCA3MCAtNTEgbCAwIDAgbCAwIDE1MSBsIDE0MiAxNTEgbCAxNDIgLTEyICJ9LCJkIjp7InhfbWluIjowLCJ4X21heCI6NjgzLCJoYSI6Nzk2LCJvIjoibSA2ODMgMCBsIDU2NCAwIGwgNTY0IDkzIHEgNDU2IDYgNTE2IDM4IHEgMzI3IC0yNSAzOTUgLTI1IHEgODcgMTAwIDE4MSAtMjUgcSAwIDM2NSAwIDIxNSBxIDkwIDYzOSAwIDUyNSBxIDM0MyA3NjMgMTg3IDc2MyBxIDU2NCA2NDcgNDg2IDc2MyBsIDU2NCAxMDEzIGwgNjgzIDEwMTMgbCA2ODMgMCBtIDU4MiAzNzMgcSA1MjkgNTYyIDU4MiA0ODQgcSAzNjEgNjUzIDQ2OCA2NTMgcSAxOTAgNTYxIDI1MyA2NTMgcSAxMzUgMzY1IDEzNSA0NzkgcSAxODkgMTc1IDEzNSAyNTQgcSAzNTggODUgMjUxIDg1IHEgNTI5IDE3OCA0NjggODUgcSA1ODIgMzczIDU4MiAyNTggIn0sIsKoIjp7InhfbWluIjotMTA5LCJ4X21heCI6MjQ3LCJoYSI6MjMyLCJvIjoibSAyNDcgMTA0NiBsIDExOSAxMDQ2IGwgMTE5IDExODkgbCAyNDcgMTE4OSBsIDI0NyAxMDQ2IG0gMTkgMTA0NiBsIC0xMDkgMTA0NiBsIC0xMDkgMTE4OSBsIDE5IDExODkgbCAxOSAxMDQ2ICJ9LCJFIjp7InhfbWluIjowLCJ4X21heCI6NzM2LjEwOTM3NSwiaGEiOjc4OSwibyI6Im0gNzM2IDAgbCAwIDAgbCAwIDEwMTMgbCA3MjUgMTAxMyBsIDcyNSA4ODkgbCAxMzkgODg5IGwgMTM5IDU4NSBsIDY3NyA1ODUgbCA2NzcgNDY3IGwgMTM5IDQ2NyBsIDEzOSAxMjUgbCA3MzYgMTI1IGwgNzM2IDAgIn0sIlkiOnsieF9taW4iOjAsInhfbWF4Ijo4MjAsImhhIjo4ODYsIm8iOiJtIDgyMCAxMDEzIGwgNDgyIDQxNiBsIDQ4MiAwIGwgMzQyIDAgbCAzNDIgNDE2IGwgMCAxMDEzIGwgMTQwIDEwMTMgbCA0MTEgNTM0IGwgNjc5IDEwMTIgbCA4MjAgMTAxMyAifSwiXCIiOnsieF9taW4iOjAsInhfbWF4IjoyOTksImhhIjozOTYsIm8iOiJtIDI5OSA2MDYgbCAyMDMgNjA2IGwgMjAzIDk4OCBsIDI5OSA5ODggbCAyOTkgNjA2IG0gOTYgNjA2IGwgMCA2MDYgbCAwIDk4OCBsIDk2IDk4OCBsIDk2IDYwNiAifSwi4oC5Ijp7InhfbWluIjoxNy45ODQzNzUsInhfbWF4Ijo3NzMuNjA5Mzc1LCJoYSI6NzkyLCJvIjoibSA3NzMgNDAgbCAxOCAzNzYgbCAxNyA0NjUgbCA3NzMgNzk5IGwgNzczIDY5MiBsIDE1OSA0MjAgbCA3NzMgMTQ5IGwgNzczIDQwICJ9LCLigJ4iOnsieF9taW4iOjAsInhfbWF4IjozNjQsImhhIjo0NjcsIm8iOiJtIDE0MSAtMTIgcSAxMDQgLTEzMiAxNDEgLTgyIHEgMCAtMjA1IDY3IC0xODIgbCAwIC0xMzggcSA1NiAtODIgNDAgLTEyNCBxIDY5IDAgNjkgLTUxIGwgMCAwIGwgMCAxNTEgbCAxNDEgMTUxIGwgMTQxIC0xMiBtIDM2NCAtMTIgcSAzMjcgLTEzMiAzNjQgLTgyIHEgMjIyIC0yMDUgMjkwIC0xODIgbCAyMjIgLTEzOCBxIDI3OSAtODIgMjYyIC0xMjQgcSAyOTIgMCAyOTIgLTUxIGwgMjIyIDAgbCAyMjIgMTUxIGwgMzY0IDE1MSBsIDM2NCAtMTIgIn0sIs60Ijp7InhfbWluIjoxLCJ4X21heCI6NzEwLCJoYSI6ODEwLCJvIjoibSA3MTAgMzYwIHEgNjE2IDg3IDcxMCAxOTYgcSAzNTYgLTI4IDUxOCAtMjggcSA5OSA4MiAxOTcgLTI4IHEgMSAzNTYgMSAxOTIgcSAxMDAgNjA2IDEgNTA5IHEgMzU1IDcwMyAxOTkgNzAzIHEgMTgwIDgyOSAyODggNzU0IHEgNzAgOTAzIDEyNCA4NjYgbCA3MCAxMDEyIGwgNjQzIDEwMTIgbCA2NDMgOTAxIGwgMjU4IDkwMSBxIDQ2MiA3NjMgNDIyIDc5NCBxIDYzNiA1OTIgNTc3IDY3NyBxIDcxMCAzNjAgNzEwIDQ4NSBtIDU4NCAzNjUgcSA1NTIgNTAxIDU4NCA0NDcgcSA0NTEgNjAyIDUyMSA1NTUgcSAzNzIgNjExIDQxMSA2MTEgcSAxOTcgNTQxIDI1OCA2MTEgcSAxMzYgMzU1IDEzNiA0NzIgcSAxOTAgMTcxIDEzNiAyNDUgcSAzNTggODUgMjUyIDg1IHEgNTI4IDE3MyA0NjUgODUgcSA1ODQgMzY1IDU4NCAyNTIgIn0sIs6tIjp7InhfbWluIjowLCJ4X21heCI6NjM0LjcxODc1LCJoYSI6NzE0LCJvIjoibSA2MzQgMjM0IHEgNTI3IDM4IDYzNCAxMTAgcSAzMDAgLTI1IDQzMyAtMjUgcSA5OCAyOSAxODMgLTI1IHEgMCAyMDQgMCA5MyBxIDM3IDMxMyAwIDI2NSBxIDEyOCAzOTAgNjcgMzUyIHEgNTYgNDU5IDgyIDQxOSBxIDI2IDU1NSAyNiA1MDUgcSAxMTQgNzEyIDI2IDY1NCBxIDI5NSA3NjMgMTkxIDc2MyBxIDQ5OSA3MDAgNDE2IDc2MyBxIDU4OSA1MTUgNTg5IDYzMSBsIDQ3OCA1MTUgcSA0MTkgNjE4IDQ2NCA1ODAgcSAzMDcgNjU3IDM3NCA2NTcgcSAyMDcgNjMwIDI1MyA2NTcgcSAxNTEgNTQ3IDE1MSA1OTggcSAyMzggNDQ1IDE1MSA0NjkgcSAzODkgNDM0IDI4MCA0MzQgbCAzODkgMzMxIGwgMzQ5IDMzMSBxIDIwNiAzMTUgMjU1IDMzMSBxIDEyNSAyMTAgMTI1IDI4NyBxIDE4MyAxMDcgMTI1IDE0NSBxIDMwMiA3NiAyMzMgNzYgcSA0MzYgMTE3IDM3OSA3NiBxIDUwOSAyMzQgNDkzIDE1OSBsIDYzNCAyMzQgbSA1MjAgMTA0MCBsIDMzMSA4MTkgbCAyNDggODE5IGwgMzgzIDEwNDAgbCA1MjAgMTA0MCAifSwiz4kiOnsieF9taW4iOjAsInhfbWF4Ijo5MjIsImhhIjoxMDMxLCJvIjoibSA5MjIgMzM5IHEgODU2IDk3IDkyMiAyMDMgcSA2NTAgLTI2IDc4MCAtMjYgcSA1MzggOSA1ODcgLTI2IHEgNDYxIDEwMyA0ODkgNDQgcSAzODcgMTIgNDM2IDQ2IHEgMjc3IC0yMiAzMzkgLTIyIHEgNjkgOTcgMTQ3IC0yMiBxIDAgMzM5IDAgMjAzIHEgNDUgNTUxIDAgNDQ0IHEgMTYxIDczOCA4NCA2NDMgbCAzMDIgNzM4IHEgMTc1IDU1MyAyMTkgNjQ3IHEgMTI0IDMzNiAxMjQgNDQ2IHEgMTU1IDE3OSAxMjQgMjQ5IHEgMjc1IDg4IDE5NyA4OCBxIDM3NSAxNjMgMzQxIDg4IHEgNDAwIDI5NCA0MDAgMjE5IGwgNDAwIDU3MiBsIDUyNCA1NzIgbCA1MjQgMjk0IHEgNTYxIDEzNSA1MjQgMTkyIHEgNjQzIDg4IDU5MSA4OCBxIDc2MiAxODIgNzE5IDg4IHEgNzk3IDM0MiA3OTcgMjU3IHEgNzQ1IDU1NiA3OTcgNDUwIHEgNjE5IDczOCA3MDUgNjM4IGwgNzYwIDczOCBxIDg3NCA1NTEgODM1IDY0MCBxIDkyMiAzMzkgOTIyIDQ0NCAifSwiwrQiOnsieF9taW4iOjAsInhfbWF4Ijo5NiwiaGEiOjI1MSwibyI6Im0gOTYgNjA2IGwgMCA2MDYgbCAwIDk4OCBsIDk2IDk4OCBsIDk2IDYwNiAifSwiwrEiOnsieF9taW4iOjExLCJ4X21heCI6NzgxLCJoYSI6NzkyLCJvIjoibSA3ODEgNDkwIGwgNDQ2IDQ5MCBsIDQ0NiAyNTUgbCAzNDkgMjU1IGwgMzQ5IDQ5MCBsIDExIDQ5MCBsIDExIDU4NiBsIDM0OSA1ODYgbCAzNDkgODE5IGwgNDQ2IDgxOSBsIDQ0NiA1ODYgbCA3ODEgNTg2IGwgNzgxIDQ5MCBtIDc4MSAyMSBsIDExIDIxIGwgMTEgMTE1IGwgNzgxIDExNSBsIDc4MSAyMSAifSwifCI6eyJ4X21pbiI6MzQzLCJ4X21heCI6NDQ5LCJoYSI6NzkyLCJvIjoibSA0NDkgNDYyIGwgMzQzIDQ2MiBsIDM0MyA5ODYgbCA0NDkgOTg2IGwgNDQ5IDQ2MiBtIDQ0OSAtMjQyIGwgMzQzIC0yNDIgbCAzNDMgMjgwIGwgNDQ5IDI4MCBsIDQ0OSAtMjQyICJ9LCLPiyI6eyJ4X21pbiI6MCwieF9tYXgiOjYxNywiaGEiOjcyNSwibyI6Im0gNDgyIDgwMCBsIDM3MiA4MDAgbCAzNzIgOTI1IGwgNDgyIDkyNSBsIDQ4MiA4MDAgbSAyMzkgODAwIGwgMTI5IDgwMCBsIDEyOSA5MjUgbCAyMzkgOTI1IGwgMjM5IDgwMCBtIDYxNyAzNTIgcSA1NDAgOTMgNjE3IDE5OSBxIDMwOCAtMjQgNDU1IC0yNCBxIDc2IDkzIDE2MSAtMjQgcSAwIDM1MiAwIDE5OSBsIDAgNzM4IGwgMTI2IDczOCBsIDEyNiAzNTQgcSAxNjkgMTg1IDEyNiAyNTcgcSAzMTIgOTggMjIwIDk4IHEgNDUxIDE4NSA0MDIgOTggcSA0OTIgMzU0IDQ5MiAyNTcgbCA0OTIgNzM4IGwgNjE3IDczOCBsIDYxNyAzNTIgIn0sIsKnIjp7InhfbWluIjowLCJ4X21heCI6NTkzLCJoYSI6NjkwLCJvIjoibSA1OTMgNDI1IHEgNTU0IDMxMiA1OTMgMzY5IHEgNDY3IDIzMyA1MTYgMjU0IHEgNTM3IDgzIDUzNyAxNzIgcSA0NTkgLTc0IDUzNyAtMTIgcSAyODggLTEzMyAzODcgLTEzMyBxIDExNSAtNjkgMTg0IC0xMzMgcSA0NyA5NiA0NyAtNiBsIDE2NiA5NiBxIDE5OSA3IDE2NiA0MCBxIDI4OCAtMjYgMjMyIC0yNiBxIDM3MSAtNSAzMzIgLTI2IHEgNDIwIDYwIDQyMCAyMSBxIDMxMSAyMDEgNDIwIDEzOSBxIDEwOCAzMDkgMjEwIDI1NSBxIDAgNDkwIDAgMzgzIHEgMzMgNjAyIDAgNTUxIHEgMTI0IDY4NyA2NiA2NTQgcSA3NSA3NDMgOTMgNzEyIHEgNTggODEyIDU4IDc3MyBxIDEzMyA5ODQgNTggOTIwIHEgMzAwIDEwNDMgMjAxIDEwNDMgcSA0NTggOTg3IDM5NCAxMDQzIHEgNTI5IDgxNCA1MjkgOTI1IGwgNDExIDgxNCBxIDM3MCA5MDggNDA0IDg3NyBxIDI4OSA5MzkgMzM2IDkzOSBxIDIxMyA5MTEgMjQ2IDkzOSBxIDE4MCA4NDEgMTgwIDg4MyBxIDI4NiA3MjAgMTgwIDc3OSBxIDQ4NCA2MTIgNDgwIDYxNSBxIDU5MyA0MjUgNTkzIDUzNCBtIDQ2NyA0MDkgcSAzNTUgNTQ0IDQ2NyA0NzMgcSAxOTYgNjMwIDIyOCA2MTIgcSAxNDYgNTg3IDE2MiA2MDkgcSAxMjQgNTI1IDEyNCA1NTggcSAyMzkgMzg3IDEyNCA0NjIgcSAzOTggMjk4IDM2OSAzMTUgcSA0NDggMzQ1IDQyOSAzMTYgcSA0NjcgNDA5IDQ2NyAzNzUgIn0sImIiOnsieF9taW4iOjAsInhfbWF4Ijo2ODUsImhhIjo3ODMsIm8iOiJtIDY4NSAzNzIgcSA1OTcgOTkgNjg1IDIxMyBxIDM0NyAtMjUgNTAxIC0yNSBxIDIxOSA1IDI3NyAtMjUgcSAxMjEgOTMgMTYxIDM2IGwgMTIxIDAgbCAwIDAgbCAwIDEwMTMgbCAxMjEgMTAxMyBsIDEyMSA2MzQgcSAyMTQgNzIzIDE1NyA2OTIgcSAzNDEgNzU0IDI3MiA3NTQgcSA1OTEgNjM3IDQ5MyA3NTQgcSA2ODUgMzcyIDY4NSA1MjYgbSA1NTQgMzU2IHEgNDk5IDU1MCA1NTQgNDcwIHEgMzI4IDY0NCA0MzcgNjQ0IHEgMTYyIDU1NiAyMjMgNjQ0IHEgMTA4IDM2OSAxMDggNDc4IHEgMTYwIDE3NiAxMDggMjU2IHEgMzMwIDgzIDIyMSA4MyBxIDQ5OCAxNjkgNDM1IDgzIHEgNTU0IDM1NiA1NTQgMjQ1ICJ9LCJxIjp7InhfbWluIjowLCJ4X21heCI6NjgzLCJoYSI6ODc2LCJvIjoibSA2ODMgLTI3OCBsIDU2NCAtMjc4IGwgNTY0IDk3IHEgNDc0IDggNTMzIDM5IHEgMzQ1IC0yMyA0MTUgLTIzIHEgOTEgOTMgMTg4IC0yMyBxIDAgMzY0IDAgMjAzIHEgODcgNjM1IDAgNTIyIHEgMzM3IDc2MCAxODQgNzYwIHEgNDY2IDcyNyA0MDggNzYwIHEgNTY0IDYzNyA1MjMgNjk1IGwgNTY0IDczNyBsIDY4MyA3MzcgbCA2ODMgLTI3OCBtIDU4MiAzNzUgcSA1MjcgNTY0IDU4MiA0ODggcSAzNTggNjUyIDQ2NiA2NTIgcSAxOTAgNTY1IDI1MyA2NTIgcSAxMzUgMzc3IDEzNSA0ODggcSAxODkgMTc5IDEzNSAyNjEgcSAzNjEgODQgMjUxIDg0IHEgNTMwIDE3OSA0NjkgODQgcSA1ODIgMzc1IDU4MiAyNjAgIn0sIs6pIjp7InhfbWluIjotMC4xNzE4NzUsInhfbWF4Ijo5NjkuNTYyNSwiaGEiOjEwNjgsIm8iOiJtIDk2OSAwIGwgNTU1IDAgbCA1NTUgMTIzIHEgNzQ0IDMwOCA2NzUgMTk0IHEgODE0IDU1OCA4MTQgNDIzIHEgNzI2IDgxMiA4MTQgNzA5IHEgNDg0IDkyMiA2MzMgOTIyIHEgMjQ0IDgyMCAzMzQgOTIyIHEgMTU0IDU2NyAxNTQgNzE5IHEgMjIzIDMxNiAxNTQgNDMzIHEgNDEyIDEyMyAyOTIgMTk5IGwgNDEyIDAgbCAwIDAgbCAwIDEyNCBsIDIxNyAxMjQgcSA2OCAzMjcgMTIyIDIxMCBxIDE1IDU3MiAxNSA0NDQgcSAxNDQgOTExIDE1IDc4MSBxIDQ4NCAxMDQxIDI3NCAxMDQxIHEgODIyIDkwOSA2OTEgMTA0MSBxIDk1MyA1NjkgOTUzIDc3NyBxIDg5OSAzMjYgOTUzIDQ0MyBxIDc1MCAxMjQgODQ2IDIxMCBsIDk2OSAxMjQgbCA5NjkgMCAifSwiz40iOnsieF9taW4iOjAsInhfbWF4Ijo2MTcsImhhIjo3MjUsIm8iOiJtIDYxNyAzNTIgcSA1NDAgOTMgNjE3IDE5OSBxIDMwOCAtMjQgNDU1IC0yNCBxIDc2IDkzIDE2MSAtMjQgcSAwIDM1MiAwIDE5OSBsIDAgNzM4IGwgMTI2IDczOCBsIDEyNiAzNTQgcSAxNjkgMTg1IDEyNiAyNTcgcSAzMTIgOTggMjIwIDk4IHEgNDUxIDE4NSA0MDIgOTggcSA0OTIgMzU0IDQ5MiAyNTcgbCA0OTIgNzM4IGwgNjE3IDczOCBsIDYxNyAzNTIgbSA1MzUgMTA0MCBsIDM0NiA4MTkgbCAyNjIgODE5IGwgMzk3IDEwNDAgbCA1MzUgMTA0MCAifSwieiI6eyJ4X21pbiI6LTAuMDE1NjI1LCJ4X21heCI6NjEzLjg5MDYyNSwiaGEiOjY5NywibyI6Im0gNjEzIDAgbCAwIDAgbCAwIDEwMCBsIDQzMyA2MzAgbCAyMCA2MzAgbCAyMCA3MzggbCA1OTQgNzM4IGwgNTkzIDYzNiBsIDE2MyAxMTAgbCA2MTMgMTEwIGwgNjEzIDAgIn0sIuKEoiI6eyJ4X21pbiI6MCwieF9tYXgiOjg5NCwiaGEiOjEwMDAsIm8iOiJtIDM4OSA5NTEgbCAyMjkgOTUxIGwgMjI5IDUwMyBsIDE2MCA1MDMgbCAxNjAgOTUxIGwgMCA5NTEgbCAwIDEwMTEgbCAzODkgMTAxMSBsIDM4OSA5NTEgbSA4OTQgNTAzIGwgODI3IDUwMyBsIDgyNyA5MzkgbCA2ODUgNTAzIGwgNjIwIDUwMyBsIDQ4MSA5MzcgbCA0ODEgNTAzIGwgNDE3IDUwMyBsIDQxNyAxMDExIGwgNTE3IDEwMTEgbCA2NTMgNTgwIGwgNzk2IDEwMTAgbCA4OTQgMTAxMSBsIDg5NCA1MDMgIn0sIs6uIjp7InhfbWluIjowLjc4MTI1LCJ4X21heCI6Njk3LCJoYSI6ODEwLCJvIjoibSA2OTcgLTI3OCBsIDU3MiAtMjc4IGwgNTcyIDQ1NCBxIDU0MCA1ODcgNTcyIDUzNiBxIDQyNSA2NTAgNTAxIDY1MCBxIDI3MSA1NzkgMzM3IDY1MCBxIDIwNiA0MjAgMjA2IDUwOSBsIDIwNiAwIGwgODEgMCBsIDgxIDQ4OSBxIDczIDU4OCA4MSA1NjIgcSAwIDY0NCA1NiA2NDQgbCAwIDc0MSBxIDY4IDc1NSAzOCA3NTUgcSAxNTggNzIxIDEyNCA3NTUgcSAyMDAgNjMwIDE5MyA2ODcgcSAyOTcgNzI2IDIzNCA2OTIgcSA0MzQgNzYxIDM1OSA3NjEgcSA2MjAgNjkyIDU0NCA3NjEgcSA2OTcgNTE2IDY5NyA2MjQgbCA2OTcgLTI3OCBtIDQ3OSAxMDQwIGwgMjkwIDgxOSBsIDIwNyA4MTkgbCAzNDEgMTA0MCBsIDQ3OSAxMDQwICJ9LCLOmCI6eyJ4X21pbiI6MCwieF9tYXgiOjk2MCwiaGEiOjEwNTYsIm8iOiJtIDk2MCA1MDcgcSA4MzMgMTI5IDk2MCAyODAgcSA0NzYgLTMyIDY5OCAtMzIgcSAxMjMgMTI5IDI1NSAtMzIgcSAwIDUwNyAwIDI4MCBxIDEyMyA4ODMgMCA3MzIgcSA0NzYgMTA0NSAyNTUgMTA0NSBxIDgzMiA4ODMgNjk2IDEwNDUgcSA5NjAgNTA3IDk2MCA3MzIgbSA4MTcgNTAwIHEgNzMzIDc4OSA4MTcgNjY5IHEgNDc2IDkyNCA2MzkgOTI0IHEgMjIzIDc5MiAzMTcgOTI0IHEgMTQyIDUwNyAxNDIgNjc1IHEgMjIyIDIyMiAxNDIgMzM5IHEgNDc2IDg5IDMxNSA4OSBxIDczMCAyMTggNjM2IDg5IHEgODE3IDUwMCA4MTcgMzM0IG0gNzE2IDQ0OSBsIDI0MyA0NDkgbCAyNDMgNTcxIGwgNzE2IDU3MSBsIDcxNiA0NDkgIn0sIsKuIjp7InhfbWluIjotMywieF9tYXgiOjEwMDgsImhhIjoxMTA2LCJvIjoibSA1MDMgNTMyIHEgNjE0IDU2MiA1NjYgNTMyIHEgNjcyIDY1OCA2NzIgNTk4IHEgNjE0IDc0NyA2NzIgNzE2IHEgNTAzIDc3MiA1NjkgNzcyIGwgMzM4IDc3MiBsIDMzOCA1MzIgbCA1MDMgNTMyIG0gNTAyIC03IHEgMTIzIDE1MSAyNjMgLTcgcSAtMyA1MDEgLTMgMjk0IHEgMTIzIDg1MSAtMyA3MDYgcSA1MDIgMTAxMSAyNjMgMTAxMSBxIDg4MSA4NTEgNzM5IDEwMTEgcSAxMDA4IDUwMSAxMDA4IDcwOCBxIDg4MyAxNTEgMTAwOCAyOTIgcSA1MDIgLTcgNzQ0IC03IG0gNTAyIDYwIHEgODMwIDE5NyA3MDkgNjAgcSA5NDAgNTAxIDk0MCAzMjIgcSA4MzEgODA1IDk0MCA2ODEgcSA1MDIgOTQ0IDcwOSA5NDQgcSAxNzQgODA1IDI5NiA5NDQgcSA2NSA1MDEgNjUgNjgwIHEgMTczIDE5NyA2NSAzMjAgcSA1MDIgNjAgMjk0IDYwIG0gNzg4IDE0NiBsIDY3OCAxNDYgcSA2NTMgMzE2IDY1NSAxODMgcSA1MjcgNDQ5IDY1MiA0NDkgbCAzMzggNDQ5IGwgMzM4IDE0NiBsIDI0MSAxNDYgbCAyNDEgODU0IGwgNTE4IDg1NCBxIDY4OCA4MDggNjIxIDg1NCBxIDc2NiA2NTggNzY2IDc1NSBxIDczOSA1NjMgNzY2IDYwNyBxIDY2OCA0OTcgNzEzIDUxOSBxIDc1MSAzMzEgNzQ3IDQ3MiBxIDc4OCAxNjQgNzU2IDE5MCBsIDc4OCAxNDYgIn0sIn4iOnsieF9taW4iOjAsInhfbWF4Ijo4MzMsImhhIjo5MzEsIm8iOiJtIDgzMyA5NTggcSA3NzggNzUzIDgzMyA4MzEgcSA1OTQgNjY1IDcxNiA2NjUgcSA0MDIgNzYxIDUwMiA2NjUgcSAyNDAgODU3IDMwMiA4NTcgcSAxMzEgNzk1IDE2NiA4NTcgcSAxMDQgNjY1IDEwNCA3NDUgbCAwIDY2NSBxIDU0IDg2NyAwIDc4OSBxIDIzNyA5NTggMTE2IDk1OCBxIDQyOSA4NjEgMzMxIDk1OCBxIDU5NCA3NjUgNTI3IDc2NSBxIDcwNCA4MjcgNjcwIDc2NSBxIDcyOSA5NTggNzI5IDg3NCBsIDgzMyA5NTggIn0sIs6VIjp7InhfbWluIjowLCJ4X21heCI6NzM2LjIxODc1LCJoYSI6Nzc4LCJvIjoibSA3MzYgMCBsIDAgMCBsIDAgMTAxMyBsIDcyNSAxMDEzIGwgNzI1IDg4OSBsIDEzOSA4ODkgbCAxMzkgNTg1IGwgNjc3IDU4NSBsIDY3NyA0NjcgbCAxMzkgNDY3IGwgMTM5IDEyNSBsIDczNiAxMjUgbCA3MzYgMCAifSwiwrMiOnsieF9taW4iOjAsInhfbWF4Ijo0NTAsImhhIjo1NDcsIm8iOiJtIDQ1MCA1NTIgcSAzNzkgNDEzIDQ1MCA0NjQgcSAyMjAgMzY2IDMxMyAzNjYgcSA2OSA0MTQgMTMwIDM2NiBxIDAgNTY3IDAgNDcwIGwgODUgNTY3IHEgMTI2IDQ3MCA4NSA1MDQgcSAyMjUgNDM3IDE2OCA0MzcgcSAzMjAgNDY3IDI4MCA0MzcgcSAzNjAgNTUyIDM2MCA0OTggcSAzMTggNjMyIDM2MCA2MDggcSAyMTMgNjU3IDI3NiA2NTcgcSAxOTUgNjU3IDIwMyA2NTcgcSAxNzYgNjU3IDE4MSA2NTcgbCAxNzYgNzIyIHEgMjc5IDczMyAyNDkgNzIyIHEgMzM0IDgxNSAzMzQgNzUyIHEgMzAwIDg4MSAzMzQgODU2IHEgMjIwIDkwNyAyNjcgOTA3IHEgMTMzIDg3NSAxNjkgOTA3IHEgOTcgNzgxIDk3IDg0NCBsIDE1IDc4MSBxIDc4IDkyNiAxNSA4NzUgcSAyMjAgOTcyIDEzNSA5NzIgcSAzNjQgOTMwIDMwMyA5NzIgcSA0MjYgODE3IDQyNiA4ODggcSAzNDQgNjk3IDQyNiA3MzMgcSA0MjEgNjQyIDM5MiA2ODEgcSA0NTAgNTUyIDQ1MCA2MDMgIn0sIlsiOnsieF9taW4iOjAsInhfbWF4IjoyNzMuNjA5Mzc1LCJoYSI6MzcxLCJvIjoibSAyNzMgLTI4MSBsIDAgLTI4MSBsIDAgMTAxMyBsIDI3MyAxMDEzIGwgMjczIDkyMCBsIDEyNCA5MjAgbCAxMjQgLTE4NyBsIDI3MyAtMTg3IGwgMjczIC0yODEgIn0sIkwiOnsieF9taW4iOjAsInhfbWF4Ijo2NDUuODI4MTI1LCJoYSI6Njk2LCJvIjoibSA2NDUgMCBsIDAgMCBsIDAgMTAxMyBsIDE0MCAxMDEzIGwgMTQwIDEyNiBsIDY0NSAxMjYgbCA2NDUgMCAifSwiz4MiOnsieF9taW4iOjAsInhfbWF4Ijo4MDMuMzkwNjI1LCJoYSI6ODk0LCJvIjoibSA4MDMgNjI4IGwgNjMzIDYyOCBxIDcxMyAzNjggNzEzIDUxMiBxIDYxOCA5MyA3MTMgMjA0IHEgMzU3IC0yNSA1MTggLTI1IHEgOTQgOTEgMTk0IC0yNSBxIDAgMzY4IDAgMjAxIHEgOTQgNjQ0IDAgNTMzIHEgMzU2IDc2MSAxOTQgNzYxIHEgNDgxIDc1MCAzOTggNzYxIHEgNjA4IDczOSA1NjQgNzM5IGwgODAzIDczOSBsIDgwMyA2MjggbSAzNjAgODUgcSA1MjkgMTgwIDQ2NyA4NSBxIDU4NCAzNzQgNTg0IDI2MiBxIDUyNyA1NjYgNTg0IDQ5MCBxIDM1MiA2NTEgNDYzIDY1MSBxIDE4NyA1NTkgMjQ3IDY1MSBxIDEzNSAzNjggMTM1IDQ3OCBxIDE4OSAxNzUgMTM1IDI1NCBxIDM2MCA4NSAyNTEgODUgIn0sIs62Ijp7InhfbWluIjowLCJ4X21heCI6NTczLCJoYSI6NjQyLCJvIjoibSA1NzMgLTQwIHEgNTUzIC0xNjIgNTczIC05NyBxIDUxMCAtMjc4IDU0MyAtMTkzIGwgNDAwIC0yNzggcSA0NDEgLTE4NyA0MjggLTIxOSBxIDQ2MiAtOTAgNDYyIC0xMzIgcSAzNzggLTE0IDQ2MiAtMTQgcSAxMDggNDUgMTk3IC0xNCBxIDAgMjkwIDAgMTE3IHEgMTA4IDYzMSAwIDQ2MiBxIDM1MyA5MDEgMTk0IDc2NyBsIDU1IDkwMSBsIDU1IDEwMTIgbCA1NjEgMTAxMiBsIDU2MSA5MjQgcSAyNjEgNjY5IDM4MiA4MzEgcSAxMjggMzAxIDEyOCA0ODkgcSAyNDMgMTE3IDEyOCAxNDkgcSA0NTggOTggMzUwIDEwOCBxIDU3MyAtNDAgNTczIDgwICJ9LCLOuCI6eyJ4X21pbiI6MCwieF9tYXgiOjY3NCwiaGEiOjc3OCwibyI6Im0gNjc0IDQ5NiBxIDYwMSAxNjAgNjc0IDMwNCBxIDMzNiAtMjYgNTA4IC0yNiBxIDczIDE1MyAxNjUgLTI2IHEgMCA0ODUgMCAyOTYgcSA3MiA4NDAgMCA2ODMgcSAzNDMgMTA0NSAxNjYgMTA0NSBxIDYwNSA4NDQgNTE2IDEwNDUgcSA2NzQgNDk2IDY3NCA2OTIgbSA1NDYgNTc5IHEgNDk4IDc5OCA1NDYgNjkxIHEgMzM2IDkzNSA0MzcgOTM1IHEgMTc4IDc5OCAyMzcgOTM1IHEgMTI2IDU3OSAxMzcgNzAxIGwgNTQ2IDU3OSBtIDU0NiA0NzUgbCAxMjYgNDc1IHEgMTcwIDIzMyAxMjYgMzQ4IHEgMzM4IDgwIDIzMCA4MCBxIDUwNCAyMzMgNDQ3IDgwIHEgNTQ2IDQ3NSA1NDYgMzQ2ICJ9LCLOnyI6eyJ4X21pbiI6MCwieF9tYXgiOjk1OCwiaGEiOjEwNTQsIm8iOiJtIDQ4NSAxMDQyIHEgODM0IDg4MyA3MDMgMTA0MiBxIDk1OCA1MTEgOTU4IDczNSBxIDgzNCAxMzYgOTU4IDI4NyBxIDQ4MSAtMjYgNzAxIC0yNiBxIDEyNiAxMzAgMjYxIC0yNiBxIDAgNTA0IDAgMjc5IHEgMTI3IDg4MCAwIDcyOSBxIDQ4NSAxMDQyIDI2MyAxMDQyIG0gNDgwIDk4IHEgNzMxIDIyNSA2MzggOTggcSA4MTUgNTA0IDgxNSAzNDAgcSA3MzMgNzgzIDgxNSA2NzAgcSA0ODAgOTEzIDY0MCA5MTMgcSAyMjYgNzg1IDMyMSA5MTMgcSAxNDIgNTA0IDE0MiA2NzEgcSAyMjYgMjI0IDE0MiAzMzkgcSA0ODAgOTggMzE5IDk4ICJ9LCLOkyI6eyJ4X21pbiI6MCwieF9tYXgiOjcwNS4yODEyNSwiaGEiOjc0OSwibyI6Im0gNzA1IDg4NiBsIDE0MCA4ODYgbCAxNDAgMCBsIDAgMCBsIDAgMTAxMiBsIDcwNSAxMDEyIGwgNzA1IDg4NiAifSwiICI6eyJ4X21pbiI6MCwieF9tYXgiOjAsImhhIjozNzV9LCIlIjp7InhfbWluIjotMywieF9tYXgiOjEwODksImhhIjoxMTg2LCJvIjoibSA4NDUgMCBxIDY2MyA3NiA3MzEgMCBxIDYwMiAyNDQgNjAyIDE0NSBxIDY2MSA0MTIgNjAyIDM0NCBxIDg0NSA0ODkgNzI4IDQ4OSBxIDEwMjcgNDEyIDk1OSA0ODkgcSAxMDg5IDI0NCAxMDg5IDM0MyBxIDEwMjkgNzYgMTA4OSAxNDQgcSA4NDUgMCA5NjIgMCBtIDg0NCAxMDMgcSA5NDUgMTQzIDkwOSAxMDMgcSA5ODEgMjQzIDk4MSAxODQgcSA5NDcgMzQwIDk4MSAzMDEgcSA4NDQgMzg1IDkwOSAzODUgcSA3NDQgMzQyIDc4MSAzODUgcSA3MDggMjQzIDcwOCAzMDAgcSA3NDEgMTQ3IDcwOCAxODYgcSA4NDQgMTAzIDc4MCAxMDMgbSA4ODggOTg2IGwgMjg0IC0yNSBsIDE5OSAtMjUgbCA4MDMgOTg2IGwgODg4IDk4NiBtIDI0MSA0NjggcSA1OCA1NDUgMTI2IDQ2OCBxIC0zIDcxNSAtMyA2MTUgcSA1NiA4ODEgLTMgODEzIHEgMjM4IDk1OCAxMjQgOTU4IHEgNDIxIDg4MSAzNTMgOTU4IHEgNDgzIDcxMiA0ODMgODEzIHEgNDIzIDU0NCA0ODMgNjEyIHEgMjQxIDQ2OCAzNTYgNDY4IG0gMjQxIDg1NSBxIDEzNyA4MTEgMTc1IDg1NSBxIDEwMCA3MTAgMTAwIDc2OCBxIDEzNiA2MTIgMTAwIDY1MyBxIDI0MCA1NzIgMTcyIDU3MiBxIDM0NCA2MTQgMzA2IDU3MiBxIDM4MiA3MTMgMzgyIDY1NiBxIDM0NyA4MTAgMzgyIDc3MSBxIDI0MSA4NTUgMzA4IDg1NSAifSwiUCI6eyJ4X21pbiI6MCwieF9tYXgiOjcyNiwiaGEiOjgwNiwibyI6Im0gNDI0IDEwMTMgcSA2NDAgOTMxIDU1NSAxMDEzIHEgNzI2IDcxOSA3MjYgODUwIHEgNjM3IDUwNiA3MjYgNTg3IHEgNDEzIDQyNiA1NDggNDI2IGwgMTQwIDQyNiBsIDE0MCAwIGwgMCAwIGwgMCAxMDEzIGwgNDI0IDEwMTMgbSAzNzkgODg5IGwgMTQwIDg4OSBsIDE0MCA1NDggbCAzNzIgNTQ4IHEgNTIyIDU4OSA0NTkgNTQ4IHEgNTkzIDcyMCA1OTMgNjM3IHEgNTI4IDg0NSA1OTMgODAxIHEgMzc5IDg4OSA0NjMgODg5ICJ9LCLOiCI6eyJ4X21pbiI6MCwieF9tYXgiOjEwNzguMjE4NzUsImhhIjoxMTE4LCJvIjoibSAxMDc4IDAgbCAzNDIgMCBsIDM0MiAxMDEzIGwgMTA2NyAxMDEzIGwgMTA2NyA4ODkgbCA0ODEgODg5IGwgNDgxIDU4NSBsIDEwMTkgNTg1IGwgMTAxOSA0NjcgbCA0ODEgNDY3IGwgNDgxIDEyNSBsIDEwNzggMTI1IGwgMTA3OCAwIG0gMjc3IDEwNDAgbCA4MyA3OTkgbCAwIDc5OSBsIDE0MCAxMDQwIGwgMjc3IDEwNDAgIn0sIs6PIjp7InhfbWluIjowLjEyNSwieF9tYXgiOjExMzYuNTQ2ODc1LCJoYSI6MTIzNSwibyI6Im0gMTEzNiAwIGwgNzIyIDAgbCA3MjIgMTIzIHEgOTExIDMwOSA4NDIgMTk0IHEgOTgxIDU1OCA5ODEgNDIzIHEgODkzIDgxMyA5ODEgNzEwIHEgNjUxIDkyMyA4MDAgOTIzIHEgNDExIDgyMSA1MDEgOTIzIHEgMzIxIDU2OCAzMjEgNzIwIHEgMzkwIDMxNiAzMjEgNDMzIHEgNTc5IDEyMyA0NTkgMjAwIGwgNTc5IDAgbCAxNjYgMCBsIDE2NiAxMjQgbCAzODQgMTI0IHEgMjM1IDMyNyAyODkgMjEwIHEgMTgyIDU3MiAxODIgNDQ0IHEgMzExIDkxMiAxODIgNzgyIHEgNjUxIDEwNDIgNDQxIDEwNDIgcSA5ODkgOTEwIDg1OCAxMDQyIHEgMTEyMCA1NjkgMTEyMCA3NzggcSAxMDY2IDMyNiAxMTIwIDQ0MyBxIDkxNyAxMjQgMTAxMyAyMTAgbCAxMTM2IDEyNCBsIDExMzYgMCBtIDI3NyAxMDQwIGwgODMgODAwIGwgMCA4MDAgbCAxNDAgMTA0MSBsIDI3NyAxMDQwICJ9LCJfIjp7InhfbWluIjowLCJ4X21heCI6NzA1LjU2MjUsImhhIjo4MDMsIm8iOiJtIDcwNSAtMzM0IGwgMCAtMzM0IGwgMCAtMjM0IGwgNzA1IC0yMzQgbCA3MDUgLTMzNCAifSwizqoiOnsieF9taW4iOi0xMTAsInhfbWF4IjoyNDYsImhhIjoyNzUsIm8iOiJtIDI0NiAxMDQ2IGwgMTE4IDEwNDYgbCAxMTggMTE4OSBsIDI0NiAxMTg5IGwgMjQ2IDEwNDYgbSAxOCAxMDQ2IGwgLTExMCAxMDQ2IGwgLTExMCAxMTg5IGwgMTggMTE4OSBsIDE4IDEwNDYgbSAxMzYgMCBsIDAgMCBsIDAgMTAxMiBsIDEzNiAxMDEyIGwgMTM2IDAgIn0sIisiOnsieF9taW4iOjIzLCJ4X21heCI6NzY4LCJoYSI6NzkyLCJvIjoibSA3NjggMzcyIGwgNDQ0IDM3MiBsIDQ0NCAwIGwgMzQ3IDAgbCAzNDcgMzcyIGwgMjMgMzcyIGwgMjMgNDY4IGwgMzQ3IDQ2OCBsIDM0NyA4NDAgbCA0NDQgODQwIGwgNDQ0IDQ2OCBsIDc2OCA0NjggbCA3NjggMzcyICJ9LCLCvSI6eyJ4X21pbiI6MCwieF9tYXgiOjEwNTAsImhhIjoxMTQ5LCJvIjoibSAxMDUwIDAgbCA2MjUgMCBxIDcxMiAxNzggNjI1IDEwOCBxIDg3OCAyNzcgNzIyIDE4NyBxIDk2NyAzODUgOTY3IDMyOCBxIDkzMiA0NTYgOTY3IDQyOSBxIDg1MCA0ODQgODk3IDQ4NCBxIDc1OSA0NTAgNzk4IDQ4NCBxIDcyMSAzNTIgNzIxIDQxNiBsIDY0MCAzNTIgcSA3MDYgNTAyIDY0MCA0NDggcSA4NTEgNTUxIDc2NiA1NTEgcSA5ODcgNTA5IDkzMSA1NTEgcSAxMDUwIDM4NSAxMDUwIDQ2MiBxIDk3NiAyNTEgMTA1MCAzMDEgcSA4MjkgMTc5IDkwMiAyMTUgcSA3MTcgNjggNzQwIDEzMyBsIDEwNTAgNjggbCAxMDUwIDAgbSA4MzQgOTg1IGwgMjE1IC0yOCBsIDEzMCAtMjggbCA3NTAgOTg0IGwgODM0IDk4NSBtIDIyNCA0MjIgbCAxNDIgNDIyIGwgMTQyIDgxMSBsIDAgODExIGwgMCA4NjcgcSAxMDQgODg5IDYyIDg2NyBxIDE2NCA5NzMgMTU3IDkxNiBsIDIyNCA5NzMgbCAyMjQgNDIyICJ9LCLOoSI6eyJ4X21pbiI6MCwieF9tYXgiOjcyMCwiaGEiOjc4MywibyI6Im0gNDI0IDEwMTMgcSA2MzcgOTMzIDU1NCAxMDEzIHEgNzIwIDcyMyA3MjAgODUzIHEgNjMzIDUwOCA3MjAgNTkxIHEgNDEzIDQyNiA1NDYgNDI2IGwgMTQwIDQyNiBsIDE0MCAwIGwgMCAwIGwgMCAxMDEzIGwgNDI0IDEwMTMgbSAzNzggODg5IGwgMTQwIDg4OSBsIDE0MCA1NDggbCAzNzEgNTQ4IHEgNTIxIDU4OSA0NTggNTQ4IHEgNTkyIDcyMCA1OTIgNjM3IHEgNTI3IDg0NSA1OTIgODAxIHEgMzc4IDg4OSA0NjMgODg5ICJ9LCInIjp7InhfbWluIjowLCJ4X21heCI6MTM5LCJoYSI6MjM2LCJvIjoibSAxMzkgODUxIHEgMTAyIDczNyAxMzkgNzg0IHEgMCA2NjkgNjUgNjkwIGwgMCA3MzQgcSA1OSA3ODcgNDIgNzQxIHEgNzIgODczIDcyIDgyMSBsIDAgODczIGwgMCAxMDEzIGwgMTM5IDEwMTMgbCAxMzkgODUxICJ9LCLCqiI6eyJ4X21pbiI6MCwieF9tYXgiOjM1MCwiaGEiOjM5NywibyI6Im0gMzUwIDYyNSBxIDMwNyA2MTYgMzI4IDYxNiBxIDI2NiA2MzEgMjgxIDYxNiBxIDI0NyA2NzMgMjUxIDY0NSBxIDE5MCA2MjggMjI1IDY0NCBxIDExNiA2MTMgMTU2IDYxMyBxIDMyIDY0MSA2NCA2MTMgcSAwIDcyMiAwIDY2OSBxIDcyIDgyNiAwIDgwMCBxIDI0NyA4NjYgMTU5IDg0NiBsIDI0NyA4ODcgcSAyMjAgOTM0IDI0NyA5MTYgcSAxNjIgOTUzIDE5NCA5NTMgcSAxMDQgOTM0IDEyOSA5NTMgcSA3NiA4ODIgODAgOTE1IGwgMTYgODgyIHEgNjAgOTc2IDE2IDk0MSBxIDE2NiAxMDExIDEwNCAxMDExIHEgMjY2IDk3OSAyMjQgMTAxMSBxIDMwOCA4OTEgMzA4IDk0OCBsIDMwOCA3MDYgcSAzMTEgNjc5IDMwOCA2ODggcSAzMzEgNjcwIDMxNSA2NzAgbCAzNTAgNjcyIGwgMzUwIDYyNSBtIDI0NyA3NTcgbCAyNDcgODExIHEgMTM2IDc5MCAxNzUgNzk4IHEgNjQgNzI2IDY0IDc3MyBxIDgzIDY4MiA2NCA2OTcgcSAxMzIgNjY3IDEwMyA2NjcgcSAyMDcgNjkwIDE3NCA2NjcgcSAyNDcgNzU3IDI0NyA3MTggIn0sIs6FIjp7InhfbWluIjowLCJ4X21heCI6NDUwLCJoYSI6NTUzLCJvIjoibSA0NTAgODAwIGwgMzQwIDgwMCBsIDM0MCA5MjUgbCA0NTAgOTI1IGwgNDUwIDgwMCBtIDQwNiAxMDQwIGwgMjEyIDgwMCBsIDEyOSA4MDAgbCAyNjkgMTA0MCBsIDQwNiAxMDQwIG0gMTEwIDgwMCBsIDAgODAwIGwgMCA5MjUgbCAxMTAgOTI1IGwgMTEwIDgwMCAifSwiVCI6eyJ4X21pbiI6MCwieF9tYXgiOjc3NywiaGEiOjgzNSwibyI6Im0gNzc3IDg5NCBsIDQ1OCA4OTQgbCA0NTggMCBsIDMxOSAwIGwgMzE5IDg5NCBsIDAgODk0IGwgMCAxMDEzIGwgNzc3IDEwMTMgbCA3NzcgODk0ICJ9LCLOpiI6eyJ4X21pbiI6MCwieF9tYXgiOjkxNSwiaGEiOjk5NywibyI6Im0gNTI3IDAgbCAzODkgMCBsIDM4OSAxMjIgcSAxMTAgMjMxIDIyMCAxMjIgcSAwIDUwOSAwIDM0MCBxIDExMCA3ODUgMCA2NzcgcSAzODkgODkzIDIyMCA4OTMgbCAzODkgMTAxMyBsIDUyNyAxMDEzIGwgNTI3IDg5MyBxIDgwNCA3ODYgNjkzIDg5MyBxIDkxNSA1MDkgOTE1IDY3OSBxIDgwNSAyMzEgOTE1IDM0MSBxIDUyNyAxMjIgNjk2IDEyMiBsIDUyNyAwIG0gNTI3IDIyNiBxIDcxMiAzMTAgNjQxIDIyNiBxIDc3OSA1MDcgNzc5IDM4OSBxIDcxMiA3MDUgNzc5IDYyNyBxIDUyNyA3ODcgNjQxIDc4NyBsIDUyNyAyMjYgbSAzODkgMjI2IGwgMzg5IDc4NyBxIDIwNSA2OTggMjc1IDc3NSBxIDEzNiA1MDUgMTM2IDYyMCBxIDIwNiAzMDggMTM2IDM5MSBxIDM4OSAyMjYgMjc2IDIyNiAifSwi4oGLIjp7InhfbWluIjowLCJ4X21heCI6MCwiaGEiOjY5NH0sImoiOnsieF9taW4iOi03Ny43ODEyNSwieF9tYXgiOjE2NywiaGEiOjM0OSwibyI6Im0gMTY3IDg3MSBsIDQyIDg3MSBsIDQyIDEwMTMgbCAxNjcgMTAxMyBsIDE2NyA4NzEgbSAxNjcgLTgwIHEgMTIxIC0yMzEgMTY3IC0xODQgcSAtMjYgLTI3OCA3NiAtMjc4IGwgLTc3IC0yNzggbCAtNzcgLTE2NCBsIC00MSAtMTY0IHEgMjYgLTE0MyAxMSAtMTY0IHEgNDIgLTY1IDQyIC0xMjIgbCA0MiA3MzcgbCAxNjcgNzM3IGwgMTY3IC04MCAifSwizqMiOnsieF9taW4iOjAsInhfbWF4Ijo3NTYuOTUzMTI1LCJoYSI6ODE5LCJvIjoibSA3NTYgMCBsIDAgMCBsIDAgMTA3IGwgMzk1IDUyMyBsIDIyIDkwNCBsIDIyIDEwMTMgbCA3NDUgMTAxMyBsIDc0NSA4ODkgbCAyMDkgODg5IGwgNTY2IDUyMyBsIDE4NyAxMjUgbCA3NTYgMTI1IGwgNzU2IDAgIn0sIjEiOnsieF9taW4iOjIxNS42NzE4NzUsInhfbWF4Ijo1NzQsImhhIjo3OTIsIm8iOiJtIDU3NCAwIGwgNDQyIDAgbCA0NDIgNjk3IGwgMjE1IDY5NyBsIDIxNSA3OTYgcSAzODYgODMzIDMzMCA3OTYgcSA0NzUgOTg2IDQ0NyA4NzUgbCA1NzQgOTg2IGwgNTc0IDAgIn0sIuKAuiI6eyJ4X21pbiI6MTguMDYyNSwieF9tYXgiOjc3NCwiaGEiOjc5MiwibyI6Im0gNzc0IDM3NiBsIDE4IDQwIGwgMTggMTQ5IGwgNjMxIDQyMSBsIDE4IDY5MiBsIDE4IDc5OSBsIDc3NCA0NjUgbCA3NzQgMzc2ICJ9LCI8Ijp7InhfbWluIjoxNy45ODQzNzUsInhfbWF4Ijo3NzMuNjA5Mzc1LCJoYSI6NzkyLCJvIjoibSA3NzMgNDAgbCAxOCAzNzYgbCAxNyA0NjUgbCA3NzMgNzk5IGwgNzczIDY5MiBsIDE1OSA0MjAgbCA3NzMgMTQ5IGwgNzczIDQwICJ9LCLCoyI6eyJ4X21pbiI6MCwieF9tYXgiOjcwNC40ODQzNzUsImhhIjo4MDEsIm8iOiJtIDcwNCA0MSBxIDYyMyAtMTAgNjY0IDUgcSA1NDMgLTI2IDU4MyAtMjYgcSAzNTkgMTUgNTAxIC0yNiBxIDI0MyAzNiAyODggMzYgcSAxNTggMjMgMTk3IDM2IHEgNzMgLTIxIDExOSAxMCBsIDYgNzYgcSAxMjUgMTk1IDkwIDE1MCBxIDE3NSAzMzEgMTc1IDI2MiBxIDE0NyA0NDMgMTc1IDM4MyBsIDAgNDQzIGwgMCA1MTIgbCAxMDggNTEyIHEgNDMgNzM0IDQzIDYyMyBxIDEyMCA5MjkgNDMgODU0IHEgMzU4IDEwMTAgMjA0IDEwMTAgcSA1NzkgOTM2IDQ4NyAxMDEwIHEgNjc4IDcyOSA2NzggODU3IGwgNjc4IDY4NCBsIDU1MiA2ODQgcSA1MDQgODM4IDU1MiA3ODAgcSAzNjIgODk2IDQ1NyA4OTYgcSAyMTYgODUyIDI2MyA4OTYgcSAxNzYgNzQ3IDE3NiA4MTUgcSAxOTkgNjI3IDE3NiA2OTcgcSAyNDggNTEyIDIxNyA1NzQgbCA0NjggNTEyIGwgNDY4IDQ0MyBsIDI3OSA0NDMgcSAyOTcgMzU2IDI5NyAzOTggcSAyMzAgMTk0IDI5NyAyNzkgcSAxNTMgMTA3IDIxMSAxNzAgcSAyMjcgMTMzIDE5MCAxMjUgcSAyOTMgMTQyIDI2NCAxNDIgcSA0MTAgMTE5IDMzOSAxNDIgcSA1MTYgOTYgNDgyIDk2IHEgNTc5IDEwNSA1NTAgOTYgcSA2NDggMTQyIDYwOCAxMTUgbCA3MDQgNDEgIn0sInQiOnsieF9taW4iOjAsInhfbWF4IjozNjcsImhhIjo0NTgsIm8iOiJtIDM2NyAwIHEgMzEyIC01IDMzOSAtMiBxIDI2MiAtOCAyODQgLTggcSAxNDUgMjggMTgzIC04IHEgMTA4IDE0MyAxMDggNjQgbCAxMDggNjM4IGwgMCA2MzggbCAwIDczOCBsIDEwOCA3MzggbCAxMDggOTQ0IGwgMjMyIDk0NCBsIDIzMiA3MzggbCAzNjcgNzM4IGwgMzY3IDYzOCBsIDIzMiA2MzggbCAyMzIgMTg1IHEgMjQ4IDEyMSAyMzIgMTQwIHEgMzA3IDEwMiAyNjQgMTAyIHEgMzQ1IDEwNCAzMzAgMTAyIHEgMzY3IDEwNyAzNjAgMTA3IGwgMzY3IDAgIn0sIsKsIjp7InhfbWluIjowLCJ4X21heCI6NzA2LCJoYSI6ODAzLCJvIjoibSA3MDYgNDExIGwgNzA2IDE1OCBsIDYzMCAxNTggbCA2MzAgMzM1IGwgMCAzMzUgbCAwIDQxMSBsIDcwNiA0MTEgIn0sIs67Ijp7InhfbWluIjowLCJ4X21heCI6NzUwLCJoYSI6ODAzLCJvIjoibSA3NTAgLTcgcSA2NzkgLTE1IDcxNiAtMTUgcSA1MzggNTkgNTkxIC0xNSBxIDQ2NiAyMTQgNTEyIDk3IGwgMzM2IDU1MSBsIDEyNiAwIGwgMCAwIGwgMjcwIDcwNSBxIDIyMyA4MzcgMjQ3IDc3MCBxIDExNiA4OTkgMTkwIDg5OSBxIDkwIDg5OCAxMDAgODk5IGwgOTAgMTAwNCBxIDE1MiAxMDExIDEyNSAxMDExIHEgMjk4IDkzOCAyNDQgMTAxMSBxIDM3MyA3ODMgMzI2IDkwMSBsIDYwNSAxOTIgcSA2NDkgMTE1IDYyOSAxMzYgcSA3MTYgOTUgNjY5IDk1IGwgNzM2IDk1IHEgNzUwIDk3IDc0NSA5NyBsIDc1MCAtNyAifSwiVyI6eyJ4X21pbiI6MCwieF9tYXgiOjEyNjMuODkwNjI1LCJoYSI6MTM1MSwibyI6Im0gMTI2MyAxMDEzIGwgOTk1IDAgbCA4NTkgMCBsIDYyNyA4MzcgbCA0MDUgMCBsIDI2NSAwIGwgMCAxMDEzIGwgMTM2IDEwMTMgbCAzNDIgMjAyIGwgNTU2IDEwMTMgbCA3MDEgMTAxMyBsIDkyMSAyMDcgbCAxMTMzIDEwMTIgbCAxMjYzIDEwMTMgIn0sIj4iOnsieF9taW4iOjE4LjA2MjUsInhfbWF4Ijo3NzQsImhhIjo3OTIsIm8iOiJtIDc3NCAzNzYgbCAxOCA0MCBsIDE4IDE0OSBsIDYzMSA0MjEgbCAxOCA2OTIgbCAxOCA3OTkgbCA3NzQgNDY1IGwgNzc0IDM3NiAifSwidiI6eyJ4X21pbiI6MCwieF9tYXgiOjY3NS4xNTYyNSwiaGEiOjc2MSwibyI6Im0gNjc1IDczOCBsIDQwNCAwIGwgMjcyIDAgbCAwIDczOCBsIDEzMyA3MzcgbCAzNDAgMTQ3IGwgNTQxIDczNyBsIDY3NSA3MzggIn0sIs+EIjp7InhfbWluIjowLjI4MTI1LCJ4X21heCI6NjQ0LjUsImhhIjo3MDMsIm8iOiJtIDY0NCA2MjggbCAzODIgNjI4IGwgMzgyIDE3OSBxIDM4OCAxMjAgMzgyIDEzNyBxIDQzNiA5MSA0MDEgOTEgcSA0NzQgOTQgNDQ3IDkxIHEgNTA0IDk3IDUwMSA5NyBsIDUwNCAwIHEgNDU0IC05IDQ4MiAtNSBxIDQwMSAtMTQgNDI2IC0xNCBxIDI3OCA2NyAzMDggLTE0IHEgMjYwIDIzMyAyNjAgMTE4IGwgMjYwIDYyOCBsIDAgNjI4IGwgMCA3MzkgbCA2NDQgNzM5IGwgNjQ0IDYyOCAifSwizr4iOnsieF9taW4iOjAsInhfbWF4Ijo2MjQuOTM3NSwiaGEiOjY5OSwibyI6Im0gNjI0IC0zNyBxIDYwOCAtMTUzIDYyNCAtOTYgcSA1NjMgLTI3OCA1OTMgLTIxMSBsIDQ1NCAtMjc4IHEgNDkxIC0xODMgNDg2IC0yMDAgcSA1MTEgLTgzIDUxMSAtMTI2IHEgNDg0IC0yMyA1MTEgLTQ0IHEgMzcwIDEgNDUyIDEgcSAzMjMgMCAzNTQgMSBxIDI4MyAtMSAyOTMgLTEgcSA4NCA3NiAxNjkgLTEgcSAwIDI2NiAwIDE1NCBxIDU2IDQzMSAwIDM1OCBxIDE5NyA1MzggMTA4IDQ5OCBxIDk0IDYxMyAxMzQgNTYyIHEgNTQgNzMwIDU0IDY2NSBxIDc3IDgyMyA1NCA3ODAgcSAxNDMgOTAxIDEwMSA4NjcgbCAyNyA5MDEgbCAyNyAxMDEyIGwgNTc2IDEwMTIgbCA1NzYgOTAxIGwgMzgwIDkwMSBxIDI0NCA4NjMgMzAzIDkwMSBxIDE3OCA3NDUgMTc4IDgyMCBxIDMxMiA2MDAgMTc4IDYzNiBxIDUzMiA1ODIgMzgwIDU4MiBsIDUzMiA0NzkgcSAyNzYgNDU1IDM2MSA0NzkgcSAxMTggMjgxIDExOCA0MTAgcSAxNjUgMTczIDExOCAyMTcgcSAyNzQgMTIwIDIwOCAxMzMgcSA0OTQgMTAxIDM4NCAxMTAgcSA2MjQgLTM3IDYyNCA3NiAifSwiJiI6eyJ4X21pbiI6LTMsInhfbWF4Ijo4OTQuMjUsImhhIjo5OTIsIm8iOiJtIDg5NCAwIGwgNzI1IDAgbCA2MjQgMTIzIHEgNDcxIDAgNTUzIDQwIHEgMzA2IC00MSAzOTAgLTQxIHEgMTY4IC03IDIzMSAtNDEgcSA2MiA5MiAxMDUgMjYgcSAxNCAxODcgMzEgMTM5IHEgLTMgMjc2IC0zIDIzNSBxIDU1IDQzMyAtMyAzNTggcSAyNDggNTgxIDExNCA1MDggcSAxNzAgNjg5IDE5NiA2NDAgcSAxMzcgODE3IDEzNyA3NTEgcSAyMTQgOTg1IDEzNyA5MjIgcSAzODQgMTA0MSAyODQgMTA0MSBxIDU0OCA5ODggNDgzIDEwNDEgcSA2MjIgODI0IDYyMiA5MjggcSA1NjMgNjY2IDYyMiA3MzkgcSA0MzEgNTU2IDUxNiA2MDggbCA2MjEgMzI2IHEgNjQ5IDQwNyA2MzkgMzYxIHEgNjYzIDQ5MyA2NTMgNDI2IGwgNzgxIDQ5MyBxIDcwMyAyMjkgNzgxIDM1MiBsIDg5NCAwIG0gNTA0IDgxOCBxIDQ2OCA5MDggNTA0IDg3NyBxIDM4NCA5NDAgNDMzIDk0MCBxIDI5MyA5MDcgMzMxIDk0MCBxIDI1NSA4MTggMjU1IDg3NSBxIDI4OSA3MTQgMjU1IDc2NyBxIDM2MyA2MjggMzEzIDY3OCBxIDQ3NyA3MjkgNDQ2IDY4MiBxIDUwNCA4MTggNTA0IDc3MSBtIDU1NiAyMDkgbCAzMTQgNDk5IHEgMTc5IDM5NSAyMjMgNDQ5IHEgMTM1IDI4MyAxMzUgMzQxIHEgMTQ2IDIyMiAxMzUgMjUzIHEgMTgzIDE1OCAxNTggMTkyIHEgMzMzIDgwIDI0MSA4MCBxIDU1NiAyMDkgNDQ4IDgwICJ9LCLOmyI6eyJ4X21pbiI6MCwieF9tYXgiOjg2Mi41LCJoYSI6OTQyLCJvIjoibSA4NjIgMCBsIDcxOSAwIGwgNDI2IDg0NyBsIDE0MyAwIGwgMCAwIGwgMzU2IDEwMTMgbCA1MDEgMTAxMyBsIDg2MiAwICJ9LCJJIjp7InhfbWluIjo0MSwieF9tYXgiOjE4MCwiaGEiOjI5MywibyI6Im0gMTgwIDAgbCA0MSAwIGwgNDEgMTAxMyBsIDE4MCAxMDEzIGwgMTgwIDAgIn0sIkciOnsieF9taW4iOjAsInhfbWF4Ijo5MjEsImhhIjoxMDExLCJvIjoibSA5MjEgMCBsIDgzMiAwIGwgODAxIDEzNiBxIDY1NSAxNSA3NDEgNTggcSA0NzAgLTI4IDU2OCAtMjggcSAxMjYgMTMzIDI1OSAtMjggcSAwIDQ5OSAwIDI4NCBxIDEyNSA4ODEgMCA3MzEgcSA0ODYgMTA0MyAyNTkgMTA0MyBxIDc2MyA5NTcgNjQ3IDEwNDMgcSA5MDUgNzA5IDg5MCA4NjQgbCA3NzIgNzA5IHEgNjY4IDg2NiA3NDcgODA3IHEgNDg2IDkyNiA1ODkgOTI2IHEgMjI4IDc5NSAzMjIgOTI2IHEgMTQyIDUwNyAxNDIgNjc3IHEgMjI4IDIyNCAxNDIgMzQyIHEgNDgzIDk0IDMyMyA5NCBxIDcxMiAxOTUgNjI1IDk0IHEgNzk2IDQzNSA3OTYgMjkxIGwgNDc3IDQzNSBsIDQ3NyA1NDkgbCA5MjEgNTQ5IGwgOTIxIDAgIn0sIs6wIjp7InhfbWluIjowLCJ4X21heCI6NjE3LCJoYSI6NzI1LCJvIjoibSA1MjQgODAwIGwgNDE0IDgwMCBsIDQxNCA5MjUgbCA1MjQgOTI1IGwgNTI0IDgwMCBtIDE4MyA4MDAgbCA3MyA4MDAgbCA3MyA5MjUgbCAxODMgOTI1IGwgMTgzIDgwMCBtIDYxNyAzNTIgcSA1NDAgOTMgNjE3IDE5OSBxIDMwOCAtMjQgNDU1IC0yNCBxIDc2IDkzIDE2MSAtMjQgcSAwIDM1MiAwIDE5OSBsIDAgNzM4IGwgMTI2IDczOCBsIDEyNiAzNTQgcSAxNjkgMTg1IDEyNiAyNTcgcSAzMTIgOTggMjIwIDk4IHEgNDUxIDE4NSA0MDIgOTggcSA0OTIgMzU0IDQ5MiAyNTcgbCA0OTIgNzM4IGwgNjE3IDczOCBsIDYxNyAzNTIgbSA0ODkgMTA0MCBsIDMwMCA4MTkgbCAyMTYgODE5IGwgMzUxIDEwNDAgbCA0ODkgMTA0MCAifSwiYCI6eyJ4X21pbiI6MCwieF9tYXgiOjEzOC44OTA2MjUsImhhIjoyMzYsIm8iOiJtIDEzOCA2OTkgbCAwIDY5OSBsIDAgODYxIHEgMzYgOTc0IDAgOTI5IHEgMTM4IDEwNDEgNzIgMTAyMCBsIDEzOCA5NzcgcSA4MiA5MzEgOTUgOTY5IHEgNjkgODM5IDY5IDg5MyBsIDEzOCA4MzkgbCAxMzggNjk5ICJ9LCLCtyI6eyJ4X21pbiI6MCwieF9tYXgiOjE0MiwiaGEiOjIzOSwibyI6Im0gMTQyIDU4NSBsIDAgNTg1IGwgMCA3MzggbCAxNDIgNzM4IGwgMTQyIDU4NSAifSwizqUiOnsieF9taW4iOjAuMzI4MTI1LCJ4X21heCI6ODE5LjUxNTYyNSwiaGEiOjg4OSwibyI6Im0gODE5IDEwMTMgbCA0ODIgNDE2IGwgNDgyIDAgbCAzNDIgMCBsIDM0MiA0MTYgbCAwIDEwMTMgbCAxNDAgMTAxMyBsIDQxMSA1MzMgbCA2NzkgMTAxMyBsIDgxOSAxMDEzICJ9LCJyIjp7InhfbWluIjowLCJ4X21heCI6MzU1LjU2MjUsImhhIjo0MzIsIm8iOiJtIDM1NSA2MjEgbCAzNDMgNjIxIHEgMTc5IDU2OSAyMzYgNjIxIHEgMTIyIDQxMSAxMjIgNTE4IGwgMTIyIDAgbCAwIDAgbCAwIDczNyBsIDExNyA3MzcgbCAxMTcgNjA0IHEgMjA0IDcxOSAxNDYgNjg2IHEgMzU1IDc1MyAyNjIgNzUzIGwgMzU1IDYyMSAifSwieCI6eyJ4X21pbiI6MCwieF9tYXgiOjY3NSwiaGEiOjc2NCwibyI6Im0gNjc1IDAgbCA1MjUgMCBsIDMzMSAyODYgbCAxNDQgMCBsIDAgMCBsIDI1NiAzNzkgbCAxMiA3MzggbCAxNTcgNzM3IGwgMzM2IDQ3MyBsIDUxNiA3MzggbCA2NjEgNzM4IGwgNDEyIDM4MCBsIDY3NSAwICJ9LCLOvCI6eyJ4X21pbiI6MCwieF9tYXgiOjY5Ni42MDkzNzUsImhhIjo3NDcsIm8iOiJtIDY5NiAtNCBxIDYyOCAtMTQgNjU3IC0xNCBxIDQ5OCA5NyA1MTMgLTE0IHEgNDIyIDggNDcwIDQxIHEgMzEzIC0yNCAzNzQgLTI0IHEgMjA3IDMgMjU4IC0yNCBxIDEyMCA4MCAxNTcgMzEgbCAxMjAgLTI3OCBsIDAgLTI3OCBsIDAgNzM4IGwgMTI0IDczOCBsIDEyNCAzNDMgcSAxNjUgMTcyIDEyNCAyNDYgcSAzMDggODIgMjE2IDgyIHEgNDUxIDE3NyA0MDIgODIgcSA0OTIgMzU4IDQ5MiAyNTQgbCA0OTIgNzM4IGwgNjE2IDczOCBsIDYxNiAyMTQgcSA2MjMgMTM2IDYxNiAxNjAgcSA2NzMgOTIgNjM2IDkyIHEgNjk2IDk1IDY4NCA5MiBsIDY5NiAtNCAifSwiaCI6eyJ4X21pbiI6MCwieF9tYXgiOjYxNSwiaGEiOjcyNCwibyI6Im0gNjE1IDQ3MiBsIDYxNSAwIGwgNDkwIDAgbCA0OTAgNDU0IHEgNDU2IDU5MCA0OTAgNTM1IHEgMzM4IDY1NCA0MTYgNjU0IHEgMTg2IDU4OCAyNTEgNjU0IHEgMTIyIDQzNiAxMjIgNTIyIGwgMTIyIDAgbCAwIDAgbCAwIDEwMTMgbCAxMjIgMTAxMyBsIDEyMiA2MzMgcSAyMTggNzI3IDE0OSA2OTQgcSAzNjIgNzYwIDI4NyA3NjAgcSA1NTIgNjc2IDQ4NCA3NjAgcSA2MTUgNDcyIDYxNSA2MDAgIn0sIi4iOnsieF9taW4iOjAsInhfbWF4IjoxNDIsImhhIjoyMzksIm8iOiJtIDE0MiAwIGwgMCAwIGwgMCAxNTEgbCAxNDIgMTUxIGwgMTQyIDAgIn0sIs+GIjp7InhfbWluIjotMiwieF9tYXgiOjg3OCwiaGEiOjk3NCwibyI6Im0gNDk2IC0yNzkgbCAzNzggLTI3OSBsIDM3OCAtMTcgcSAxMDEgODggMjA0IC0xNyBxIC0yIDM2NyAtMiAxOTQgcSA2OCA2MjYgLTIgNTEwIHEgMjgzIDc1OCAxNTEgNzU4IGwgMjgzIDY0NiBxIDE2NyA1MzcgMjA5IDYyNiBxIDEzMyAzNzMgMTMzIDQ2MiBxIDE5MiAxNzcgMTMzIDI1NCBxIDM3OCA5MyAyNTkgOTMgbCAzNzggNzU4IHEgNDQ1IDc2NCA0MjYgNzYzIHEgNDc2IDc2NSA0NjQgNzY1IHEgNzY1IDY1OSA2NTMgNzY1IHEgODc4IDM3NyA4NzggNTUzIHEgNzcxIDk2IDg3OCAyMDkgcSA0OTYgLTE3IDY2NSAtMTcgbCA0OTYgLTI3OSBtIDQ5NiA5MyBsIDUxNCA5MyBxIDY4NyAxODMgNjIzIDkzIHEgNzQ2IDM4MCA3NDYgMjY1IHEgNjkxIDU2OSA3NDYgNDkxIHEgNTIyIDY1OCA2MjkgNjU4IGwgNDk2IDY1NiBsIDQ5NiA5MyAifSwiOyI6eyJ4X21pbiI6MCwieF9tYXgiOjE0MiwiaGEiOjIzOSwibyI6Im0gMTQyIDU4NSBsIDAgNTg1IGwgMCA3MzggbCAxNDIgNzM4IGwgMTQyIDU4NSBtIDE0MiAtMTIgcSAxMDUgLTEzMiAxNDIgLTgyIHEgMCAtMjA2IDY4IC0xODIgbCAwIC0xMzggcSA1OCAtODIgNDMgLTEyMyBxIDY4IDAgNjggLTU2IGwgMCAwIGwgMCAxNTEgbCAxNDIgMTUxIGwgMTQyIC0xMiAifSwiZiI6eyJ4X21pbiI6MCwieF9tYXgiOjM3OCwiaGEiOjQ3MiwibyI6Im0gMzc4IDYzOCBsIDI0NiA2MzggbCAyNDYgMCBsIDEyMSAwIGwgMTIxIDYzOCBsIDAgNjM4IGwgMCA3MzggbCAxMjEgNzM4IHEgMTM3IDkzNSAxMjEgODg3IHEgMjkwIDEwMjggMTcxIDEwMjggcSAzMjAgMTAyNyAzMDUgMTAyOCBxIDM3OCAxMDIxIDMzNCAxMDI2IGwgMzc4IDkwOCBxIDMyMyA5MTggMzQ2IDkxOCBxIDI1NyA4NzAgMjczIDkxOCBxIDI0NiA3ODAgMjQ2IDg0MCBsIDI0NiA3MzggbCAzNzggNzM4IGwgMzc4IDYzOCAifSwi4oCcIjp7InhfbWluIjoxLCJ4X21heCI6MzQ4LjIxODc1LCJoYSI6NDU0LCJvIjoibSAxNDAgNjcwIGwgMSA2NzAgbCAxIDgzMCBxIDM3IDk0MyAxIDg5NyBxIDE0MCAxMDExIDc0IDk5MCBsIDE0MCA5NDcgcSA4MiA5MDAgOTcgOTQwIHEgNjggODEwIDY4IDg2MSBsIDE0MCA4MTAgbCAxNDAgNjcwIG0gMzQ4IDY3MCBsIDIwOSA2NzAgbCAyMDkgODMwIHEgMjQ1IDk0MyAyMDkgODk3IHEgMzQ4IDEwMTEgMjgyIDk5MCBsIDM0OCA5NDcgcSAyOTAgOTAwIDMwNSA5NDAgcSAyNzYgODEwIDI3NiA4NjEgbCAzNDggODEwIGwgMzQ4IDY3MCAifSwiQSI6eyJ4X21pbiI6MC4wMzEyNSwieF9tYXgiOjkwNi45NTMxMjUsImhhIjoxMDA4LCJvIjoibSA5MDYgMCBsIDc1NiAwIGwgNjQ4IDMwMyBsIDI1MSAzMDMgbCAxNDIgMCBsIDAgMCBsIDM3NiAxMDEzIGwgNTI5IDEwMTMgbCA5MDYgMCBtIDYxMCA0MjEgbCA0NTIgODY3IGwgMjkzIDQyMSBsIDYxMCA0MjEgIn0sIjYiOnsieF9taW4iOjUzLCJ4X21heCI6NzM5LCJoYSI6NzkyLCJvIjoibSA3MzkgMzEyIHEgNjMzIDYyIDczOSAxNjIgcSA0MDAgLTMxIDUzNCAtMzEgcSAxNjIgNzggMjU3IC0zMSBxIDUzIDQzOSA1MyAyMDYgcSAxNzggODU5IDUzIDcxMiBxIDQ0MSA5ODYgMjg0IDk4NiBxIDY0MyA5MTIgNTU5IDk4NiBxIDczMiA3MTMgNzMyIDgzMyBsIDYwMSA3MTMgcSA1NDQgODMwIDU5NCA3ODYgcSA0MjYgODc1IDQ5NCA4NzUgcSAyNjggNzkzIDMzMSA4NzUgcSAxOTMgNTE3IDE5MyA2OTcgcSAzMDEgNTk3IDI0MCA1NzAgcSA0MjcgNjI0IDM2MiA2MjQgcSA2NDMgNTQwIDU1MiA2MjQgcSA3MzkgMzEyIDczOSA0NTEgbSA2MDMgMjk4IHEgNTQwIDQ2MSA2MDMgNDAwIHEgNDA0IDUxNiA0ODQgNTE2IHEgMjY4IDQ2MSAzMjMgNTE2IHEgMjA3IDMwMCAyMDcgNDAxIHEgMjY5IDEzNyAyMDcgMTk4IHEgNDA1IDgzIDMyNSA4MyBxIDU0MSAxMzcgNDg2IDgzIHEgNjAzIDI5OCA2MDMgMTk3ICJ9LCLigJgiOnsieF9taW4iOjEsInhfbWF4IjoxMzkuODkwNjI1LCJoYSI6MjM2LCJvIjoibSAxMzkgNjcwIGwgMSA2NzAgbCAxIDgzMCBxIDM3IDk0MyAxIDg5NyBxIDEzOSAxMDExIDc0IDk5MCBsIDEzOSA5NDcgcSA4MiA5MDAgOTcgOTQwIHEgNjggODEwIDY4IDg2MSBsIDEzOSA4MTAgbCAxMzkgNjcwICJ9LCLPiiI6eyJ4X21pbiI6LTcwLCJ4X21heCI6MjgzLCJoYSI6MzYxLCJvIjoibSAyODMgODAwIGwgMTczIDgwMCBsIDE3MyA5MjUgbCAyODMgOTI1IGwgMjgzIDgwMCBtIDQwIDgwMCBsIC03MCA4MDAgbCAtNzAgOTI1IGwgNDAgOTI1IGwgNDAgODAwIG0gMjgzIDMgcSAyMzIgLTEwIDI1NyAtNSBxIDE4MSAtMTUgMjA2IC0xNSBxIDg0IDI2IDExOCAtMTUgcSA0MSAyMDAgNDEgNzkgbCA0MSA3MzcgbCAxNjYgNzM3IGwgMTY3IDIxNSBxIDE3MSAxNDEgMTY3IDE1NyBxIDIyNSAxMDEgMTgyIDEwMSBxIDI0NyAxMDMgMjM4IDEwMSBxIDI4MyAxMTIgMjU2IDEwNCBsIDI4MyAzICJ9LCLPgCI6eyJ4X21pbiI6LTAuMjE4NzUsInhfbWF4Ijo3NzMuMjE4NzUsImhhIjo4NTcsIm8iOiJtIDc3MyAtNyBsIDcwNyAtMTEgcSA1NzUgNDAgNjA3IC0xMSBxIDU1MiAxNzQgNTUyIDc3IGwgNTUyIDIyNiBsIDU1MiA2MjYgbCAyMjIgNjI2IGwgMjIyIDAgbCA5NyAwIGwgOTcgNjI2IGwgMCA2MjYgbCAwIDczNyBsIDc3MyA3MzcgbCA3NzMgNjI2IGwgNjc2IDYyNiBsIDY3NiAxNzEgcSA2OTUgMTAzIDY3NiAxMTcgcSA3NzMgOTAgNzE0IDkwIGwgNzczIC03ICJ9LCLOrCI6eyJ4X21pbiI6MCwieF9tYXgiOjc2NS41NjI1LCJoYSI6ODA5LCJvIjoibSA3NjUgLTQgcSA2OTggLTE0IDcyNiAtMTQgcSA1NjQgOTcgNTg2IC0xNCBxIDQ2NiA3IDUyNSA0MCBxIDMzNyAtMjYgNDA3IC0yNiBxIDg4IDk4IDE4NiAtMjYgcSAwIDM2OSAwIDIxMiBxIDg4IDYzNyAwIDUyNSBxIDMzNyA3NjAgMTg0IDc2MCBxIDQ2NSA3MjcgNDA3IDc2MCBxIDU2MyA2MzcgNTI0IDY5NSBsIDU2MyA3MzggbCA2ODUgNzM4IGwgNjg1IDIyMiBxIDY5MyAxNDEgNjg1IDE2OCBxIDc0OCA5NCA3MDggOTQgcSA3NjUgOTUgNzYwIDk0IGwgNzY1IC00IG0gNTg0IDM3MSBxIDUzMSA1NjIgNTg0IDQ4NSBxIDM2MCA2NTMgNDcwIDY1MyBxIDE5MiA1NjYgMjU0IDY1MyBxIDEzNSAzNzkgMTM1IDQ4OSBxIDE4NiAxODEgMTM1IDI2MSBxIDM1OCA4NCAyNDcgODQgcSA1MjggMTc2IDQ2NSA4NCBxIDU4NCAzNzEgNTg0IDI2MCBtIDYwNCAxMDQwIGwgNDE1IDgxOSBsIDMzMiA4MTkgbCA0NjYgMTA0MCBsIDYwNCAxMDQwICJ9LCJPIjp7InhfbWluIjowLCJ4X21heCI6OTU4LCJoYSI6MTA1NywibyI6Im0gNDg1IDEwNDEgcSA4MzQgODgyIDcwMiAxMDQxIHEgOTU4IDUxMiA5NTggNzM0IHEgODM0IDEzNiA5NTggMjg3IHEgNDgxIC0yNiA3MDIgLTI2IHEgMTI2IDEzMCAyNjEgLTI2IHEgMCA1MDQgMCAyNzkgcSAxMjcgODgwIDAgNzI4IHEgNDg1IDEwNDEgMjYzIDEwNDEgbSA0ODAgOTggcSA3MzEgMjI1IDYzOCA5OCBxIDgxNSA1MDQgODE1IDM0MCBxIDczMyA3ODMgODE1IDY2OSBxIDQ4MCA5MTIgNjQwIDkxMiBxIDIyNiA3ODQgMzIxIDkxMiBxIDE0MiA1MDQgMTQyIDY3MCBxIDIyNiAyMjQgMTQyIDMzOSBxIDQ4MCA5OCAzMTkgOTggIn0sIm4iOnsieF9taW4iOjAsInhfbWF4Ijo2MTUsImhhIjo3MjQsIm8iOiJtIDYxNSA0NjMgbCA2MTUgMCBsIDQ5MCAwIGwgNDkwIDQ1NCBxIDQ1MyA1OTIgNDkwIDUzNyBxIDMzMSA2NTYgNDEwIDY1NiBxIDE3OCA1ODUgMjQwIDY1NiBxIDExNyA0MjEgMTE3IDUxNCBsIDExNyAwIGwgMCAwIGwgMCA3MzggbCAxMTcgNzM4IGwgMTE3IDYzMCBxIDIxOCA3MjggMTUwIDY5MyBxIDM1OSA3NjQgMjg2IDc2NCBxIDU1MiA2NzUgNDg0IDc2NCBxIDYxNSA0NjMgNjE1IDU5MyAifSwiMyI6eyJ4X21pbiI6NTQsInhfbWF4Ijo3MzcsImhhIjo3OTIsIm8iOiJtIDczNyAyODQgcSA2MzUgNTUgNzM3IDE0MSBxIDM5OSAtMjUgNTQxIC0yNSBxIDE1NiA1MiAyNDggLTI1IHEgNTQgMzA4IDU0IDE0MCBsIDE4NSAzMDggcSAyNDUgMTQ3IDE4NSAyMDIgcSAzOTUgOTYgMzAyIDk2IHEgNTM5IDE0MCA0ODQgOTYgcSA2MDIgMjgwIDYwMiAxOTAgcSA1MTAgNDI5IDYwMiAzOTAgcSAzMjQgNDU0IDQ1MSA0NTQgbCAzMjQgNTY1IHEgNDg3IDU4NCA0NDEgNTY1IHEgNTY1IDcxOSA1NjUgNjE3IHEgNTE1IDgzNSA1NjUgNzkxIHEgMzk1IDg3OSA0NjYgODc5IHEgMjU1IDgyNCAzMDcgODc5IHEgMjAzIDY2MSAyMDMgNzY5IGwgNzggNjYxIHEgMTY2IDkwOSA3OCA4MjIgcSAzODcgOTkyIDI1MCA5OTIgcSA2MDMgOTIxIDUxMyA5OTIgcSA3MDEgNzIzIDcwMSA4NDQgcSA2NjkgNjA3IDcwMSA2NTYgcSA1NzggNTI0IDYzNyA1NTggcSA2OTYgNDM0IDY1NSA0OTkgcSA3MzcgMjg0IDczNyAzNjkgIn0sIjkiOnsieF9taW4iOjUzLCJ4X21heCI6NzM5LCJoYSI6NzkyLCJvIjoibSA3MzkgNTI0IHEgNjE5IDk0IDczOSAyNDEgcSAzNjIgLTMyIDUxNiAtMzIgcSAxNTAgNDcgMjQyIC0zMiBxIDU5IDI0NCA1OSAxMjYgbCAxOTEgMjQ0IHEgMjQ2IDEyOSAxOTEgMTc2IHEgMzczIDgyIDMwMSA4MiBxIDUyNiAxNjEgNDY2IDgyIHEgNTk3IDQ0MCA1OTcgMjU1IHEgMzYzIDMzNCA1MDEgMzM0IHEgMTMwIDQzMiAyMTYgMzM0IHEgNTMgNjUwIDUzIDUyMSBxIDEzNCA4ODAgNTMgNzg2IHEgMzgzIDk4NiAyMjYgOTg2IHEgNjU5IDg0MSA1NjYgOTg2IHEgNzM5IDUyNCA3MzkgNzE5IG0gMzg4IDQ0OSBxIDUzNSA1MTQgNDgwIDQ0OSBxIDU4NSA2NTggNTg1IDU3MyBxIDUzNSA4MDUgNTg1IDc0NCBxIDM4OCA4NzMgNDgwIDg3MyBxIDI0MiA4MDkgMjk0IDg3MyBxIDE5MSA2NTggMTkxIDc0NSBxIDIzOSA1MTQgMTkxIDU3MiBxIDM4OCA0NDkgMjkyIDQ0OSAifSwibCI6eyJ4X21pbiI6NDEsInhfbWF4IjoxNjYsImhhIjoyNzksIm8iOiJtIDE2NiAwIGwgNDEgMCBsIDQxIDEwMTMgbCAxNjYgMTAxMyBsIDE2NiAwICJ9LCLCpCI6eyJ4X21pbiI6NDAuMDkzNzUsInhfbWF4Ijo3MjguNzk2ODc1LCJoYSI6ODI1LCJvIjoibSA3MjggMzA0IGwgNjQ5IDIyNCBsIDUxMiAzNjMgcSAzODMgMzMxIDQ1OCAzMzEgcSAyNTYgMzYzIDMxMCAzMzEgbCAxMTkgMjI0IGwgNDAgMzA0IGwgMTc3IDQ0MSBxIDE1MCA1NTMgMTUwIDQ5MyBxIDE4NCA2NzMgMTUwIDYyMSBsIDQwIDgxOCBsIDExOSA4OTggbCAyNjcgNzQ5IHEgMzIxIDc2NiAyOTEgNzU5IHEgMzg0IDc3MyAzNTEgNzczIHEgNDQ3IDc2NiA0MTcgNzczIHEgNTAxIDc0OSA0NzcgNzU5IGwgNjQ5IDg5OCBsIDcyOCA4MTggbCA1ODUgNjc1IHEgNjEyIDYxOCA2MDQgNjQ4IHEgNjIxIDU1MyA2MjEgNTg3IHEgNTkxIDQ0MSA2MjEgNDkxIGwgNzI4IDMwNCBtIDM4NCA2ODIgcSAyODAgNjQzIDMxOCA2ODIgcSAyNDMgNTUxIDI0MyA2MDQgcSAyNzkgNDYxIDI0MyA0OTkgcSAzODMgNDIzIDMxNiA0MjMgcSA0ODcgNDYxIDQ0OSA0MjMgcSA1MjUgNTUzIDUyNSA1MDAgcSA0OTAgNjQxIDUyNSA2MDUgcSAzODQgNjgyIDQ1MSA2ODIgIn0sIs66Ijp7InhfbWluIjowLCJ4X21heCI6NjMyLjMyODEyNSwiaGEiOjY3OSwibyI6Im0gNjMyIDAgbCA0ODIgMCBsIDIyNSAzODQgbCAxMjQgMjg4IGwgMTI0IDAgbCAwIDAgbCAwIDczOCBsIDEyNCA3MzggbCAxMjQgNDQ2IGwgNDMzIDczOCBsIDU5NiA3MzggbCAzMTIgNDY2IGwgNjMyIDAgIn0sIjQiOnsieF9taW4iOjQ4LCJ4X21heCI6NzQyLjQ1MzEyNSwiaGEiOjc5MiwibyI6Im0gNzQyIDI0MyBsIDYwMiAyNDMgbCA2MDIgMCBsIDQ3NiAwIGwgNDc2IDI0MyBsIDQ4IDI0MyBsIDQ4IDM2OCBsIDQ3NiA5NTggbCA2MDIgOTU4IGwgNjAyIDM1NCBsIDc0MiAzNTQgbCA3NDIgMjQzIG0gNDc2IDM1NCBsIDQ3NiA3OTIgbCAxNjIgMzU0IGwgNDc2IDM1NCAifSwicCI6eyJ4X21pbiI6MCwieF9tYXgiOjY4NSwiaGEiOjc4NiwibyI6Im0gNjg1IDM2NCBxIDU5OCA5NiA2ODUgMjA1IHEgMzUwIC0yMyA1MDQgLTIzIHEgMTIxIDg5IDIwNSAtMjMgbCAxMjEgLTI3OCBsIDAgLTI3OCBsIDAgNzM4IGwgMTIxIDczOCBsIDEyMSA2MzMgcSAyMjAgNzI2IDE1OSA2OTEgcSAzNTEgNzYxIDI4MCA3NjEgcSA1OTggNjM2IDUwNCA3NjEgcSA2ODUgMzY0IDY4NSA1MjIgbSA1NTcgMzcxIHEgNTAxIDU2MCA1NTcgNDgxIHEgMzMwIDY1MSA0MzcgNjUxIHEgMTYyIDU1OSAyMjMgNjUxIHEgMTA4IDM2NiAxMDggNDc5IHEgMTYyIDE3NyAxMDggMjU0IHEgMzMzIDg3IDIyNCA4NyBxIDUwMiAxNzggNDQxIDg3IHEgNTU3IDM3MSA1NTcgMjU4ICJ9LCLigKEiOnsieF9taW4iOjAsInhfbWF4Ijo3NzcsImhhIjo4MzUsIm8iOiJtIDQ1OCAyMzggbCA0NTggMCBsIDMxOSAwIGwgMzE5IDIzOCBsIDAgMjM4IGwgMCAzNjAgbCAzMTkgMzYwIGwgMzE5IDY4MSBsIDAgNjgzIGwgMCA4MDQgbCAzMTkgODA0IGwgMzE5IDEwMTUgbCA0NTggMTAxMyBsIDQ1OCA4MDQgbCA3NzcgODA0IGwgNzc3IDY4MyBsIDQ1OCA2ODMgbCA0NTggMzYwIGwgNzc3IDM2MCBsIDc3NyAyMzggbCA0NTggMjM4ICJ9LCLPiCI6eyJ4X21pbiI6MCwieF9tYXgiOjgwOCwiaGEiOjkwNywibyI6Im0gNDY1IC0yNzggbCAzNDEgLTI3OCBsIDM0MSAtMTUgcSA4NyAxMDIgMTgwIC0xNSBxIDAgMzc4IDAgMjEwIGwgMCA3MzkgbCAxMzMgNzM5IGwgMTMzIDM3OSBxIDE4MiAxOTUgMTMzIDI3NSBxIDM0MSA5OCAyNDIgOTggbCAzNDEgOTIyIGwgNDY1IDkyMiBsIDQ2NSA5OCBxIDYyMyAxOTUgNTYzIDk4IHEgNjc1IDM4MiA2NzUgMjc4IGwgNjc1IDc0MiBsIDgwOCA3NDIgbCA4MDggMzgxIHEgNzIwIDEwNCA4MDggMjEzIHEgNDY2IC0xMyA2MjcgLTEzIGwgNDY1IC0yNzggIn0sIs63Ijp7InhfbWluIjowLjc4MTI1LCJ4X21heCI6Njk3LCJoYSI6ODEwLCJvIjoibSA2OTcgLTI3OCBsIDU3MiAtMjc4IGwgNTcyIDQ1NCBxIDU0MCA1ODcgNTcyIDUzNiBxIDQyNSA2NTAgNTAxIDY1MCBxIDI3MSA1NzkgMzM3IDY1MCBxIDIwNiA0MjAgMjA2IDUwOSBsIDIwNiAwIGwgODEgMCBsIDgxIDQ4OSBxIDczIDU4OCA4MSA1NjIgcSAwIDY0NCA1NiA2NDQgbCAwIDc0MSBxIDY4IDc1NSAzOCA3NTUgcSAxNTggNzIwIDEyNCA3NTUgcSAyMDAgNjMwIDE5MyA2ODYgcSAyOTcgNzI2IDIzNCA2OTIgcSA0MzQgNzYxIDM1OSA3NjEgcSA2MjAgNjkyIDU0NCA3NjEgcSA2OTcgNTE2IDY5NyA2MjQgbCA2OTcgLTI3OCAifX0sImNzc0ZvbnRXZWlnaHQiOiJub3JtYWwiLCJhc2NlbmRlciI6MTE4OSwidW5kZXJsaW5lUG9zaXRpb24iOi0xMDAsImNzc0ZvbnRTdHlsZSI6Im5vcm1hbCIsImJvdW5kaW5nQm94Ijp7InlNaW4iOi0zMzQsInhNaW4iOi0xMTEsInlNYXgiOjExODksInhNYXgiOjE2NzJ9LCJyZXNvbHV0aW9uIjoxMDAwLCJvcmlnaW5hbF9mb250X2luZm9ybWF0aW9uIjp7InBvc3RzY3JpcHRfbmFtZSI6IkhlbHZldGlrZXItUmVndWxhciIsInZlcnNpb25fc3RyaW5nIjoiVmVyc2lvbiAxLjAwIDIwMDQgaW5pdGlhbCByZWxlYXNlIiwidmVuZG9yX3VybCI6Imh0dHA6Ly93d3cubWFnZW50YS5nci8iLCJmdWxsX2ZvbnRfbmFtZSI6IkhlbHZldGlrZXIiLCJmb250X2ZhbWlseV9uYW1lIjoiSGVsdmV0aWtlciIsImNvcHlyaWdodCI6IkNvcHlyaWdodCAoYykgzpxhZ2VudGEgbHRkLCAyMDA0IiwiZGVzY3JpcHRpb24iOiIiLCJ0cmFkZW1hcmsiOiIiLCJkZXNpZ25lciI6IiIsImRlc2lnbmVyX3VybCI6IiIsInVuaXF1ZV9mb250X2lkZW50aWZpZXIiOiLOnGFnZW50YSBsdGQ6SGVsdmV0aWtlcjoyMi0xMC0xMDQiLCJsaWNlbnNlX3VybCI6Imh0dHA6Ly93d3cuZWxsYWsuZ3IvZm9udHMvTWdPcGVuL2xpY2Vuc2UuaHRtbCIsImxpY2Vuc2VfZGVzY3JpcHRpb24iOiJDb3B5cmlnaHQgKGMpIDIwMDQgYnkgTUFHRU5UQSBMdGQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcblxyXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoZSBmb250cyBhY2NvbXBhbnlpbmcgdGhpcyBsaWNlbnNlIChcIkZvbnRzXCIpIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIkZvbnQgU29mdHdhcmVcIiksIHRvIHJlcHJvZHVjZSBhbmQgZGlzdHJpYnV0ZSB0aGUgRm9udCBTb2Z0d2FyZSwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgRm9udCBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIEZvbnQgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczogXHJcblxyXG5UaGUgYWJvdmUgY29weXJpZ2h0IGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb2Ygb25lIG9yIG1vcmUgb2YgdGhlIEZvbnQgU29mdHdhcmUgdHlwZWZhY2VzLlxyXG5cclxuVGhlIEZvbnQgU29mdHdhcmUgbWF5IGJlIG1vZGlmaWVkLCBhbHRlcmVkLCBvciBhZGRlZCB0bywgYW5kIGluIHBhcnRpY3VsYXIgdGhlIGRlc2lnbnMgb2YgZ2x5cGhzIG9yIGNoYXJhY3RlcnMgaW4gdGhlIEZvbnRzIG1heSBiZSBtb2RpZmllZCBhbmQgYWRkaXRpb25hbCBnbHlwaHMgb3IgY2hhcmFjdGVycyBtYXkgYmUgYWRkZWQgdG8gdGhlIEZvbnRzLCBvbmx5IGlmIHRoZSBmb250cyBhcmUgcmVuYW1lZCB0byBuYW1lcyBub3QgY29udGFpbmluZyB0aGUgd29yZCBcIk1nT3BlblwiLCBvciBpZiB0aGUgbW9kaWZpY2F0aW9ucyBhcmUgYWNjZXB0ZWQgZm9yIGluY2x1c2lvbiBpbiB0aGUgRm9udCBTb2Z0d2FyZSBpdHNlbGYgYnkgdGhlIGVhY2ggYXBwb2ludGVkIEFkbWluaXN0cmF0b3IuXHJcblxyXG5UaGlzIExpY2Vuc2UgYmVjb21lcyBudWxsIGFuZCB2b2lkIHRvIHRoZSBleHRlbnQgYXBwbGljYWJsZSB0byBGb250cyBvciBGb250IFNvZnR3YXJlIHRoYXQgaGFzIGJlZW4gbW9kaWZpZWQgYW5kIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBcIk1nT3BlblwiIG5hbWUuXHJcblxyXG5UaGUgRm9udCBTb2Z0d2FyZSBtYXkgYmUgc29sZCBhcyBwYXJ0IG9mIGEgbGFyZ2VyIHNvZnR3YXJlIHBhY2thZ2UgYnV0IG5vIGNvcHkgb2Ygb25lIG9yIG1vcmUgb2YgdGhlIEZvbnQgU29mdHdhcmUgdHlwZWZhY2VzIG1heSBiZSBzb2xkIGJ5IGl0c2VsZi4gXHJcblxyXG5USEUgRk9OVCBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBBTlkgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQgT0YgQ09QWVJJR0hULCBQQVRFTlQsIFRSQURFTUFSSywgT1IgT1RIRVIgUklHSFQuIElOIE5PIEVWRU5UIFNIQUxMIE1BR0VOVEEgT1IgUEVSU09OUyBPUiBCT0RJRVMgSU4gQ0hBUkdFIE9GIEFETUlOSVNUUkFUSU9OIEFORCBNQUlOVEVOQU5DRSBPRiBUSEUgRk9OVCBTT0ZUV0FSRSBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIElOQ0xVRElORyBBTlkgR0VORVJBTCwgU1BFQ0lBTCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBUSEUgVVNFIE9SIElOQUJJTElUWSBUTyBVU0UgVEhFIEZPTlQgU09GVFdBUkUgT1IgRlJPTSBPVEhFUiBERUFMSU5HUyBJTiBUSEUgRk9OVCBTT0ZUV0FSRS4iLCJtYW51ZmFjdHVyZXJfbmFtZSI6Is6cYWdlbnRhIGx0ZCIsImZvbnRfc3ViX2ZhbWlseV9uYW1lIjoiUmVndWxhciJ9LCJkZXNjZW5kZXIiOi0zMzQsImZhbWlseU5hbWUiOiJIZWx2ZXRpa2VyIiwibGluZUhlaWdodCI6MTUyMiwidW5kZXJsaW5lVGhpY2tuZXNzIjo1MH0=",e=>{window.threeDFont=e,Qa(),$("#instructionsDialog").modal()})},!1);window.addEventListener("contextmenu",function(i){i.preventDefault()});
