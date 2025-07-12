(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ka="149",rh=0,co=1,sh=2,xc=1,ah=2,oi=3,Rt=0,De=1,rt=2,Lt=0,Dn=1,uo=2,ho=3,fo=4,oh=5,Qn=100,lh=101,ch=102,po=103,go=104,uh=200,hh=201,fh=202,dh=203,Uc=204,Fc=205,ph=206,gh=207,mh=208,Bh=209,wh=210,vh=0,Ch=1,_h=2,ua=3,xh=4,Uh=5,Fh=6,yh=7,yc=0,Eh=1,Mh=2,vt=0,Qh=1,Sh=2,bh=3,Ih=4,Th=5,Ec=300,Nn=301,Gn=302,ha=303,fa=304,kr=306,da=1e3,je=1001,pa=1002,Fe=1003,mo=1004,ls=1005,Ve=1006,Lh=1007,Fi=1008,rn=1009,Hh=1010,Dh=1011,Mc=1012,Rh=1013,qt=1014,jt=1015,yi=1016,Ph=1017,Oh=1018,Rn=1020,Nh=1021,$e=1023,Gh=1024,Vh=1025,An=1026,Vn=1027,Kh=1028,zh=1029,kh=1030,Wh=1031,Xh=1033,cs=33776,us=33777,hs=33778,fs=33779,Bo=35840,wo=35841,vo=35842,Co=35843,Jh=36196,_o=37492,xo=37496,Uo=37808,Fo=37809,yo=37810,Eo=37811,Mo=37812,Qo=37813,So=37814,bo=37815,Io=37816,To=37817,Lo=37818,Ho=37819,Do=37820,Ro=37821,ds=36492,Yh=36283,Po=36284,Oo=36285,No=36286,sn=3e3,VA=3001,Zh=3200,qh=3201,Qc=0,jh=1,nt="srgb",Ei="srgb-linear",ps=7680,$h=519,Go=35044,Vo="300 es",ga=1035;class kn{addEventListener(A,e){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[A]===void 0&&(t[A]=[]),t[A].indexOf(e)===-1&&t[A].push(e)}hasEventListener(A,e){if(this._listeners===void 0)return!1;const t=this._listeners;return t[A]!==void 0&&t[A].indexOf(e)!==-1}removeEventListener(A,e){if(this._listeners===void 0)return;const i=this._listeners[A];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const t=this._listeners[A.type];if(t!==void 0){A.target=this;const i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,A);A.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ko=1234567;const Bi=Math.PI/180,Ir=180/Math.PI;function Wn(){const n=Math.random()*4294967295|0,A=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0;return(pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]+"-"+pe[A&255]+pe[A>>8&255]+"-"+pe[A>>16&15|64]+pe[A>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[t&255]+pe[t>>8&255]+pe[t>>16&255]+pe[t>>24&255]).toLowerCase()}function Be(n,A,e){return Math.max(A,Math.min(e,n))}function za(n,A){return(n%A+A)%A}function Af(n,A,e,t,i){return t+(n-A)*(i-t)/(e-A)}function ef(n,A,e){return n!==A?(e-n)/(A-n):0}function wi(n,A,e){return(1-e)*n+e*A}function tf(n,A,e,t){return wi(n,A,1-Math.exp(-e*t))}function nf(n,A=1){return A-Math.abs(za(n,A*2)-A)}function rf(n,A,e){return n<=A?0:n>=e?1:(n=(n-A)/(e-A),n*n*(3-2*n))}function sf(n,A,e){return n<=A?0:n>=e?1:(n=(n-A)/(e-A),n*n*n*(n*(n*6-15)+10))}function af(n,A){return n+Math.floor(Math.random()*(A-n+1))}function of(n,A){return n+Math.random()*(A-n)}function lf(n){return n*(.5-Math.random())}function cf(n){n!==void 0&&(Ko=n);let A=Ko+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function uf(n){return n*Bi}function hf(n){return n*Ir}function ma(n){return(n&n-1)===0&&n!==0}function ff(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Tr(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function df(n,A,e,t,i){const r=Math.cos,s=Math.sin,a=r(e/2),o=s(e/2),l=r((A+t)/2),c=s((A+t)/2),u=r((A-t)/2),h=s((A-t)/2),p=r((t-A)/2),g=s((t-A)/2);switch(i){case"XYX":n.set(a*c,o*u,o*h,a*l);break;case"YZY":n.set(o*h,a*c,o*u,a*l);break;case"ZXZ":n.set(o*u,o*h,a*c,a*l);break;case"XZX":n.set(a*c,o*g,o*p,a*l);break;case"YXY":n.set(o*p,a*c,o*g,a*l);break;case"ZYZ":n.set(o*g,o*p,a*c,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function li(n,A){switch(A.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ye(n,A){switch(A.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var pf=Object.freeze({__proto__:null,DEG2RAD:Bi,RAD2DEG:Ir,ceilPowerOfTwo:ff,clamp:Be,damp:tf,degToRad:uf,denormalize:li,euclideanModulo:za,floorPowerOfTwo:Tr,generateUUID:Wn,inverseLerp:ef,isPowerOfTwo:ma,lerp:wi,mapLinear:Af,normalize:ye,pingpong:nf,radToDeg:hf,randFloat:of,randFloatSpread:lf,randInt:af,seededRandom:cf,setQuaternionFromProperEuler:df,smootherstep:sf,smoothstep:rf});class IA{constructor(A=0,e=0){IA.prototype.isVector2=!0,this.x=A,this.y=e}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,e){return this.x=A,this.y=e,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const e=this.x,t=this.y,i=A.elements;return this.x=i[0]*e+i[3]*t+i[6],this.y=i[1]*e+i[4]*t+i[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this}clampLength(A,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const e=this.x-A.x,t=this.y-A.y;return e*e+t*t}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this}rotateAround(A,e){const t=Math.cos(e),i=Math.sin(e),r=this.x-A.x,s=this.y-A.y;return this.x=r*t-s*i+A.x,this.y=r*i+s*t+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,e,t,i,r,s,a,o,l){const c=this.elements;return c[0]=A,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=o,c[6]=t,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const e=this.elements,t=A.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],this}extractBasis(A,e,t){return A.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const e=A.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,e){const t=A.elements,i=e.elements,r=this.elements,s=t[0],a=t[3],o=t[6],l=t[1],c=t[4],u=t[7],h=t[2],p=t[5],g=t[8],f=i[0],d=i[3],m=i[6],B=i[1],v=i[4],x=i[7],C=i[2],y=i[5],M=i[8];return r[0]=s*f+a*B+o*C,r[3]=s*d+a*v+o*y,r[6]=s*m+a*x+o*M,r[1]=l*f+c*B+u*C,r[4]=l*d+c*v+u*y,r[7]=l*m+c*x+u*M,r[2]=h*f+p*B+g*C,r[5]=h*d+p*v+g*y,r[8]=h*m+p*x+g*M,this}multiplyScalar(A){const e=this.elements;return e[0]*=A,e[3]*=A,e[6]*=A,e[1]*=A,e[4]*=A,e[7]*=A,e[2]*=A,e[5]*=A,e[8]*=A,this}determinant(){const A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],o=A[6],l=A[7],c=A[8];return e*s*c-e*a*l-t*r*c+t*a*o+i*r*l-i*s*o}invert(){const A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],o=A[6],l=A[7],c=A[8],u=c*s-a*l,h=a*o-c*r,p=l*r-s*o,g=e*u+t*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return A[0]=u*f,A[1]=(i*l-c*t)*f,A[2]=(a*t-i*s)*f,A[3]=h*f,A[4]=(c*e-i*o)*f,A[5]=(i*r-a*e)*f,A[6]=p*f,A[7]=(t*o-l*e)*f,A[8]=(s*e-t*r)*f,this}transpose(){let A;const e=this.elements;return A=e[1],e[1]=e[3],e[3]=A,A=e[2],e[2]=e[6],e[6]=A,A=e[5],e[5]=e[7],e[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const e=this.elements;return A[0]=e[0],A[1]=e[3],A[2]=e[6],A[3]=e[1],A[4]=e[4],A[5]=e[7],A[6]=e[2],A[7]=e[5],A[8]=e[8],this}setUvTransform(A,e,t,i,r,s,a){const o=Math.cos(r),l=Math.sin(r);return this.set(t*o,t*l,-t*(o*s+l*a)+s+A,-i*l,i*o,-i*(-l*s+o*a)+a+e,0,0,1),this}scale(A,e){return this.premultiply(gs.makeScale(A,e)),this}rotate(A){return this.premultiply(gs.makeRotation(-A)),this}translate(A,e){return this.premultiply(gs.makeTranslation(A,e)),this}makeTranslation(A,e){return this.set(1,0,A,0,1,e,0,0,1),this}makeRotation(A){const e=Math.cos(A),t=Math.sin(A);return this.set(e,-t,0,t,e,0,0,0,1),this}makeScale(A,e){return this.set(A,0,0,0,e,0,0,0,1),this}equals(A){const e=this.elements,t=A.elements;for(let i=0;i<9;i++)if(e[i]!==t[i])return!1;return!0}fromArray(A,e=0){for(let t=0;t<9;t++)this.elements[t]=A[t+e];return this}toArray(A=[],e=0){const t=this.elements;return A[e]=t[0],A[e+1]=t[1],A[e+2]=t[2],A[e+3]=t[3],A[e+4]=t[4],A[e+5]=t[5],A[e+6]=t[6],A[e+7]=t[7],A[e+8]=t[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const gs=new He;function Sc(n){for(let A=n.length-1;A>=0;--A)if(n[A]>=65535)return!0;return!1}function Lr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function en(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ms={[nt]:{[Ei]:en},[Ei]:{[nt]:yr}},_e={legacyMode:!0,get workingColorSpace(){return Ei},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,A,e){if(this.legacyMode||A===e||!A||!e)return n;if(ms[A]&&ms[A][e]!==void 0){const t=ms[A][e];return n.r=t(n.r),n.g=t(n.g),n.b=t(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,A){return this.convert(n,this.workingColorSpace,A)},toWorkingColorSpace:function(n,A){return this.convert(n,A,this.workingColorSpace)}},bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ae={r:0,g:0,b:0},Je={h:0,s:0,l:0},Ri={h:0,s:0,l:0};function Bs(n,A,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(A-n)*6*e:e<1/2?A:e<2/3?n+(A-n)*6*(2/3-e):n}function Pi(n,A){return A.r=n.r,A.g=n.g,A.b=n.b,A}class NA{constructor(A,e,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&t===void 0?this.set(A):this.setRGB(A,e,t)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,e=nt){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(A,e,t,i=_e.workingColorSpace){return this.r=A,this.g=e,this.b=t,_e.toWorkingColorSpace(this,i),this}setHSL(A,e,t,i=_e.workingColorSpace){if(A=za(A,1),e=Be(e,0,1),t=Be(t,0,1),e===0)this.r=this.g=this.b=t;else{const r=t<=.5?t*(1+e):t+e-t*e,s=2*t-r;this.r=Bs(s,r,A+1/3),this.g=Bs(s,r,A),this.b=Bs(s,r,A-1/3)}return _e.toWorkingColorSpace(this,i),this}setStyle(A,e=nt){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(A)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,_e.toWorkingColorSpace(this,e),t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,_e.toWorkingColorSpace(this,e),t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(r[1])/360,l=parseFloat(r[2])/100,c=parseFloat(r[3])/100;return t(r[4]),this.setHSL(o,l,c,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(A)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,_e.toWorkingColorSpace(this,e),this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,_e.toWorkingColorSpace(this,e),this}return A&&A.length>0?this.setColorName(A,e):this}setColorName(A,e=nt){const t=bc[A.toLowerCase()];return t!==void 0?this.setHex(t,e):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=en(A.r),this.g=en(A.g),this.b=en(A.b),this}copyLinearToSRGB(A){return this.r=yr(A.r),this.g=yr(A.g),this.b=yr(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=nt){return _e.fromWorkingColorSpace(Pi(this,Ae),A),Be(Ae.r*255,0,255)<<16^Be(Ae.g*255,0,255)<<8^Be(Ae.b*255,0,255)<<0}getHexString(A=nt){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,e=_e.workingColorSpace){_e.fromWorkingColorSpace(Pi(this,Ae),e);const t=Ae.r,i=Ae.g,r=Ae.b,s=Math.max(t,i,r),a=Math.min(t,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case t:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-t)/u+2;break;case r:o=(t-i)/u+4;break}o/=6}return A.h=o,A.s=l,A.l=c,A}getRGB(A,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(Pi(this,Ae),e),A.r=Ae.r,A.g=Ae.g,A.b=Ae.b,A}getStyle(A=nt){return _e.fromWorkingColorSpace(Pi(this,Ae),A),A!==nt?`color(${A} ${Ae.r} ${Ae.g} ${Ae.b})`:`rgb(${Ae.r*255|0},${Ae.g*255|0},${Ae.b*255|0})`}offsetHSL(A,e,t){return this.getHSL(Je),Je.h+=A,Je.s+=e,Je.l+=t,this.setHSL(Je.h,Je.s,Je.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,e){return this.r=A.r+e.r,this.g=A.g+e.g,this.b=A.b+e.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,e){return this.r+=(A.r-this.r)*e,this.g+=(A.g-this.g)*e,this.b+=(A.b-this.b)*e,this}lerpColors(A,e,t){return this.r=A.r+(e.r-A.r)*t,this.g=A.g+(e.g-A.g)*t,this.b=A.b+(e.b-A.b)*t,this}lerpHSL(A,e){this.getHSL(Je),A.getHSL(Ri);const t=wi(Je.h,Ri.h,e),i=wi(Je.s,Ri.s,e),r=wi(Je.l,Ri.l,e);return this.setHSL(t,i,r),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,e=0){return this.r=A[e],this.g=A[e+1],this.b=A[e+2],this}toArray(A=[],e=0){return A[e]=this.r,A[e+1]=this.g,A[e+2]=this.b,A}fromBufferAttribute(A,e){return this.r=A.getX(e),this.g=A.getY(e),this.b=A.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}NA.NAMES=bc;let ln;class Ic{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let e;if(A instanceof HTMLCanvasElement)e=A;else{ln===void 0&&(ln=Lr("canvas")),ln.width=A.width,ln.height=A.height;const t=ln.getContext("2d");A instanceof ImageData?t.putImageData(A,0,0):t.drawImage(A,0,0,A.width,A.height),e=ln}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const e=Lr("canvas");e.width=A.width,e.height=A.height;const t=e.getContext("2d");t.drawImage(A,0,0,A.width,A.height);const i=t.getImageData(0,0,A.width,A.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=en(r[s]/255)*255;return t.putImageData(i,0,0),e}else if(A.data){const e=A.data.slice(0);for(let t=0;t<e.length;t++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[t]=Math.floor(en(e[t]/255)*255):e[t]=en(e[t]);return{data:e,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class Tc{constructor(A=null){this.isSource=!0,this.uuid=Wn(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const e=A===void 0||typeof A=="string";if(!e&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const t={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(ws(i[s].image)):r.push(ws(i[s]))}else r=ws(i);t.url=r}return e||(A.images[this.uuid]=t),t}}function ws(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ic.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gf=0;class Qe extends kn{constructor(A=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,t=je,i=je,r=Ve,s=Fi,a=$e,o=rn,l=Qe.DEFAULT_ANISOTROPY,c=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Wn(),this.name="",this.source=new Tc(A),this.mipmaps=[],this.mapping=e,this.wrapS=t,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new IA(0,0),this.repeat=new IA(1,1),this.center=new IA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const e=A===void 0||typeof A=="string";if(!e&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const t={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),e||(A.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==Ec)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case da:A.x=A.x-Math.floor(A.x);break;case je:A.x=A.x<0?0:1;break;case pa:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case da:A.y=A.y-Math.floor(A.y);break;case je:A.y=A.y<0?0:1;break;case pa:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Ec;Qe.DEFAULT_ANISOTROPY=1;class ce{constructor(A=0,e=0,t=0,i=1){ce.prototype.isVector4=!0,this.x=A,this.y=e,this.z=t,this.w=i}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,e,t,i){return this.x=A,this.y=e,this.z=t,this.w=i,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this.z=A.z+e.z,this.w=A.w+e.w,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this.z+=A.z*e,this.w+=A.w*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this.w=A.w-e.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const e=this.x,t=this.y,i=this.z,r=this.w,s=A.elements;return this.x=s[0]*e+s[4]*t+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*t+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*t+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*t+s[11]*i+s[15]*r,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const e=Math.sqrt(1-A.w*A.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/e,this.y=A.y/e,this.z=A.z/e),this}setAxisAngleFromRotationMatrix(A){let e,t,i,r;const o=A.elements,l=o[0],c=o[4],u=o[8],h=o[1],p=o[5],g=o[9],f=o[2],d=o[6],m=o[10];if(Math.abs(c-h)<.01&&Math.abs(u-f)<.01&&Math.abs(g-d)<.01){if(Math.abs(c+h)<.1&&Math.abs(u+f)<.1&&Math.abs(g+d)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,x=(p+1)/2,C=(m+1)/2,y=(c+h)/4,M=(u+f)/4,w=(g+d)/4;return v>x&&v>C?v<.01?(t=0,i=.707106781,r=.707106781):(t=Math.sqrt(v),i=y/t,r=M/t):x>C?x<.01?(t=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),t=y/i,r=w/i):C<.01?(t=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),t=M/r,i=w/r),this.set(t,i,r,e),this}let B=Math.sqrt((d-g)*(d-g)+(u-f)*(u-f)+(h-c)*(h-c));return Math.abs(B)<.001&&(B=1),this.x=(d-g)/B,this.y=(u-f)/B,this.z=(h-c)/B,this.w=Math.acos((l+p+m-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this.z=Math.max(A.z,Math.min(e.z,this.z)),this.w=Math.max(A.w,Math.min(e.w,this.w)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this.z=Math.max(A,Math.min(e,this.z)),this.w=Math.max(A,Math.min(e,this.w)),this}clampLength(A,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this.z+=(A.z-this.z)*e,this.w+=(A.w-this.w)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this.z=A.z+(e.z-A.z)*t,this.w=A.w+(e.w-A.w)*t,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this.z=A[e+2],this.w=A[e+3],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A[e+2]=this.z,A[e+3]=this.w,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this.z=A.getZ(e),this.w=A.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class an extends kn{constructor(A=1,e=1,t={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=e,this.depth=1,this.scissor=new ce(0,0,A,e),this.scissorTest=!1,this.viewport=new ce(0,0,A,e);const i={width:A,height:e,depth:1};this.texture=new Qe(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.internalFormat=t.internalFormat!==void 0?t.internalFormat:null,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ve,this.depthBuffer=t.depthBuffer!==void 0?t.depthBuffer:!0,this.stencilBuffer=t.stencilBuffer!==void 0?t.stencilBuffer:!1,this.depthTexture=t.depthTexture!==void 0?t.depthTexture:null,this.samples=t.samples!==void 0?t.samples:0}setSize(A,e,t=1){(this.width!==A||this.height!==e||this.depth!==t)&&(this.width=A,this.height=e,this.depth=t,this.texture.image.width=A,this.texture.image.height=e,this.texture.image.depth=t,this.dispose()),this.viewport.set(0,0,A,e),this.scissor.set(0,0,A,e)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},A.texture.image);return this.texture.source=new Tc(e),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lc extends Qe{constructor(A=null,e=1,t=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:e,height:t,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mf extends Qe{constructor(A=null,e=1,t=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:e,height:t,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(A=0,e=0,t=0,i=1){this.isQuaternion=!0,this._x=A,this._y=e,this._z=t,this._w=i}static slerpFlat(A,e,t,i,r,s,a){let o=t[i+0],l=t[i+1],c=t[i+2],u=t[i+3];const h=r[s+0],p=r[s+1],g=r[s+2],f=r[s+3];if(a===0){A[e+0]=o,A[e+1]=l,A[e+2]=c,A[e+3]=u;return}if(a===1){A[e+0]=h,A[e+1]=p,A[e+2]=g,A[e+3]=f;return}if(u!==f||o!==h||l!==p||c!==g){let d=1-a;const m=o*h+l*p+c*g+u*f,B=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const C=Math.sqrt(v),y=Math.atan2(C,m*B);d=Math.sin(d*y)/C,a=Math.sin(a*y)/C}const x=a*B;if(o=o*d+h*x,l=l*d+p*x,c=c*d+g*x,u=u*d+f*x,d===1-a){const C=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=C,l*=C,c*=C,u*=C}}A[e]=o,A[e+1]=l,A[e+2]=c,A[e+3]=u}static multiplyQuaternionsFlat(A,e,t,i,r,s){const a=t[i],o=t[i+1],l=t[i+2],c=t[i+3],u=r[s],h=r[s+1],p=r[s+2],g=r[s+3];return A[e]=a*g+c*u+o*p-l*h,A[e+1]=o*g+c*h+l*u-a*p,A[e+2]=l*g+c*p+a*h-o*u,A[e+3]=c*g-a*u-o*h-l*p,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,e,t,i){return this._x=A,this._y=e,this._z=t,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,e){const t=A._x,i=A._y,r=A._z,s=A._order,a=Math.cos,o=Math.sin,l=a(t/2),c=a(i/2),u=a(r/2),h=o(t/2),p=o(i/2),g=o(r/2);switch(s){case"XYZ":this._x=h*c*u+l*p*g,this._y=l*p*u-h*c*g,this._z=l*c*g+h*p*u,this._w=l*c*u-h*p*g;break;case"YXZ":this._x=h*c*u+l*p*g,this._y=l*p*u-h*c*g,this._z=l*c*g-h*p*u,this._w=l*c*u+h*p*g;break;case"ZXY":this._x=h*c*u-l*p*g,this._y=l*p*u+h*c*g,this._z=l*c*g+h*p*u,this._w=l*c*u-h*p*g;break;case"ZYX":this._x=h*c*u-l*p*g,this._y=l*p*u+h*c*g,this._z=l*c*g-h*p*u,this._w=l*c*u+h*p*g;break;case"YZX":this._x=h*c*u+l*p*g,this._y=l*p*u+h*c*g,this._z=l*c*g-h*p*u,this._w=l*c*u-h*p*g;break;case"XZY":this._x=h*c*u-l*p*g,this._y=l*p*u-h*c*g,this._z=l*c*g+h*p*u,this._w=l*c*u+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,e){const t=e/2,i=Math.sin(t);return this._x=A.x*i,this._y=A.y*i,this._z=A.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(A){const e=A.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],h=t+a+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-o)*p,this._y=(r-l)*p,this._z=(s-i)*p}else if(t>a&&t>u){const p=2*Math.sqrt(1+t-a-u);this._w=(c-o)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-t-u);this._w=(r-l)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(o+c)/p}else{const p=2*Math.sqrt(1+u-t-a);this._w=(s-i)/p,this._x=(r+l)/p,this._y=(o+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(A,e){let t=A.dot(e)+1;return t<Number.EPSILON?(t=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=t):(this._x=0,this._y=-A.z,this._z=A.y,this._w=t)):(this._x=A.y*e.z-A.z*e.y,this._y=A.z*e.x-A.x*e.z,this._z=A.x*e.y-A.y*e.x,this._w=t),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(Be(this.dot(A),-1,1)))}rotateTowards(A,e){const t=this.angleTo(A);if(t===0)return this;const i=Math.min(1,e/t);return this.slerp(A,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,e){const t=A._x,i=A._y,r=A._z,s=A._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=t*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-t*l,this._z=r*c+s*l+t*o-i*a,this._w=s*c-t*a-i*o-r*l,this._onChangeCallback(),this}slerp(A,e){if(e===0)return this;if(e===1)return this.copy(A);const t=this._x,i=this._y,r=this._z,s=this._w;let a=s*A._w+t*A._x+i*A._y+r*A._z;if(a<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,a=-a):this.copy(A),a>=1)return this._w=s,this._x=t,this._y=i,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const p=1-e;return this._w=p*s+e*this._w,this._x=p*t+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),u=Math.sin((1-e)*c)/l,h=Math.sin(e*c)/l;return this._w=s*u+this._w*h,this._x=t*u+this._x*h,this._y=i*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(A,e,t){return this.copy(A).slerp(e,t)}random(){const A=Math.random(),e=Math.sqrt(1-A),t=Math.sqrt(A),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),t*Math.sin(r),t*Math.cos(r),e*Math.sin(i))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,e=0){return this._x=A[e],this._y=A[e+1],this._z=A[e+2],this._w=A[e+3],this._onChangeCallback(),this}toArray(A=[],e=0){return A[e]=this._x,A[e+1]=this._y,A[e+2]=this._z,A[e+3]=this._w,A}fromBufferAttribute(A,e){return this._x=A.getX(e),this._y=A.getY(e),this._z=A.getZ(e),this._w=A.getW(e),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(A=0,e=0,t=0){T.prototype.isVector3=!0,this.x=A,this.y=e,this.z=t}set(A,e,t){return t===void 0&&(t=this.z),this.x=A,this.y=e,this.z=t,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this.z=A.z+e.z,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this.z+=A.z*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,e){return this.x=A.x*e.x,this.y=A.y*e.y,this.z=A.z*e.z,this}applyEuler(A){return this.applyQuaternion(zo.setFromEuler(A))}applyAxisAngle(A,e){return this.applyQuaternion(zo.setFromAxisAngle(A,e))}applyMatrix3(A){const e=this.x,t=this.y,i=this.z,r=A.elements;return this.x=r[0]*e+r[3]*t+r[6]*i,this.y=r[1]*e+r[4]*t+r[7]*i,this.z=r[2]*e+r[5]*t+r[8]*i,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const e=this.x,t=this.y,i=this.z,r=A.elements,s=1/(r[3]*e+r[7]*t+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*t+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*t+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*t+r[10]*i+r[14])*s,this}applyQuaternion(A){const e=this.x,t=this.y,i=this.z,r=A.x,s=A.y,a=A.z,o=A.w,l=o*e+s*i-a*t,c=o*t+a*e-r*i,u=o*i+r*t-s*e,h=-r*e-s*t-a*i;return this.x=l*o+h*-r+c*-a-u*-s,this.y=c*o+h*-s+u*-r-l*-a,this.z=u*o+h*-a+l*-s-c*-r,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const e=this.x,t=this.y,i=this.z,r=A.elements;return this.x=r[0]*e+r[4]*t+r[8]*i,this.y=r[1]*e+r[5]*t+r[9]*i,this.z=r[2]*e+r[6]*t+r[10]*i,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this.z=Math.max(A.z,Math.min(e.z,this.z)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this.z=Math.max(A,Math.min(e,this.z)),this}clampLength(A,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this.z+=(A.z-this.z)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this.z=A.z+(e.z-A.z)*t,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,e){const t=A.x,i=A.y,r=A.z,s=e.x,a=e.y,o=e.z;return this.x=i*o-r*a,this.y=r*s-t*o,this.z=t*a-i*s,this}projectOnVector(A){const e=A.lengthSq();if(e===0)return this.set(0,0,0);const t=A.dot(this)/e;return this.copy(A).multiplyScalar(t)}projectOnPlane(A){return vs.copy(this).projectOnVector(A),this.sub(vs)}reflect(A){return this.sub(vs.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const e=Math.sqrt(this.lengthSq()*A.lengthSq());if(e===0)return Math.PI/2;const t=this.dot(A)/e;return Math.acos(Be(t,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const e=this.x-A.x,t=this.y-A.y,i=this.z-A.z;return e*e+t*t+i*i}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,e,t){const i=Math.sin(e)*A;return this.x=i*Math.sin(t),this.y=Math.cos(e)*A,this.z=i*Math.cos(t),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,e,t){return this.x=A*Math.sin(e),this.y=t,this.z=A*Math.cos(e),this}setFromMatrixPosition(A){const e=A.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(A){const e=this.setFromMatrixColumn(A,0).length(),t=this.setFromMatrixColumn(A,1).length(),i=this.setFromMatrixColumn(A,2).length();return this.x=e,this.y=t,this.z=i,this}setFromMatrixColumn(A,e){return this.fromArray(A.elements,e*4)}setFromMatrix3Column(A,e){return this.fromArray(A.elements,e*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this.z=A[e+2],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A[e+2]=this.z,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this.z=A.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,t=Math.sqrt(1-A**2);return this.x=t*Math.cos(e),this.y=t*Math.sin(e),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vs=new T,zo=new bi;class Ii{constructor(A=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=e}set(A,e){return this.min.copy(A),this.max.copy(e),this}setFromArray(A){let e=1/0,t=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let o=0,l=A.length;o<l;o+=3){const c=A[o],u=A[o+1],h=A[o+2];c<e&&(e=c),u<t&&(t=u),h<i&&(i=h),c>r&&(r=c),u>s&&(s=u),h>a&&(a=h)}return this.min.set(e,t,i),this.max.set(r,s,a),this}setFromBufferAttribute(A){let e=1/0,t=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let o=0,l=A.count;o<l;o++){const c=A.getX(o),u=A.getY(o),h=A.getZ(o);c<e&&(e=c),u<t&&(t=u),h<i&&(i=h),c>r&&(r=c),u>s&&(s=u),h>a&&(a=h)}return this.min.set(e,t,i),this.max.set(r,s,a),this}setFromPoints(A){this.makeEmpty();for(let e=0,t=A.length;e<t;e++)this.expandByPoint(A[e]);return this}setFromCenterAndSize(A,e){const t=Kt.copy(e).multiplyScalar(.5);return this.min.copy(A).sub(t),this.max.copy(A).add(t),this}setFromObject(A,e=!1){return this.makeEmpty(),this.expandByObject(A,e)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,e=!1){A.updateWorldMatrix(!1,!1);const t=A.geometry;if(t!==void 0)if(e&&t.attributes!=null&&t.attributes.position!==void 0){const r=t.attributes.position;for(let s=0,a=r.count;s<a;s++)Kt.fromBufferAttribute(r,s).applyMatrix4(A.matrixWorld),this.expandByPoint(Kt)}else t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox),Cs.applyMatrix4(A.matrixWorld),this.union(Cs);const i=A.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,e){return e.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,Kt),Kt.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let e,t;return A.normal.x>0?(e=A.normal.x*this.min.x,t=A.normal.x*this.max.x):(e=A.normal.x*this.max.x,t=A.normal.x*this.min.x),A.normal.y>0?(e+=A.normal.y*this.min.y,t+=A.normal.y*this.max.y):(e+=A.normal.y*this.max.y,t+=A.normal.y*this.min.y),A.normal.z>0?(e+=A.normal.z*this.min.z,t+=A.normal.z*this.max.z):(e+=A.normal.z*this.max.z,t+=A.normal.z*this.min.z),e<=-A.constant&&t>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(qn),Oi.subVectors(this.max,qn),cn.subVectors(A.a,qn),un.subVectors(A.b,qn),hn.subVectors(A.c,qn),Ut.subVectors(un,cn),Ft.subVectors(hn,un),zt.subVectors(cn,hn);let e=[0,-Ut.z,Ut.y,0,-Ft.z,Ft.y,0,-zt.z,zt.y,Ut.z,0,-Ut.x,Ft.z,0,-Ft.x,zt.z,0,-zt.x,-Ut.y,Ut.x,0,-Ft.y,Ft.x,0,-zt.y,zt.x,0];return!_s(e,cn,un,hn,Oi)||(e=[1,0,0,0,1,0,0,0,1],!_s(e,cn,un,hn,Oi))?!1:(Ni.crossVectors(Ut,Ft),e=[Ni.x,Ni.y,Ni.z],_s(e,cn,un,hn,Oi))}clampPoint(A,e){return e.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return Kt.copy(A).clamp(this.min,this.max).sub(A).length()}getBoundingSphere(A){return this.getCenter(A.center),A.radius=this.getSize(Kt).length()*.5,A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(ht[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),ht[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),ht[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),ht[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),ht[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),ht[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),ht[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),ht[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(ht),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const ht=[new T,new T,new T,new T,new T,new T,new T,new T],Kt=new T,Cs=new Ii,cn=new T,un=new T,hn=new T,Ut=new T,Ft=new T,zt=new T,qn=new T,Oi=new T,Ni=new T,kt=new T;function _s(n,A,e,t,i){for(let r=0,s=n.length-3;r<=s;r+=3){kt.fromArray(n,r);const a=i.x*Math.abs(kt.x)+i.y*Math.abs(kt.y)+i.z*Math.abs(kt.z),o=A.dot(kt),l=e.dot(kt),c=t.dot(kt);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return!1}return!0}const Bf=new Ii,jn=new T,xs=new T;class ka{constructor(A=new T,e=-1){this.center=A,this.radius=e}set(A,e){return this.center.copy(A),this.radius=e,this}setFromPoints(A,e){const t=this.center;e!==void 0?t.copy(e):Bf.setFromPoints(A).getCenter(t);let i=0;for(let r=0,s=A.length;r<s;r++)i=Math.max(i,t.distanceToSquared(A[r]));return this.radius=Math.sqrt(i),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const e=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=e*e}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,e){const t=this.center.distanceToSquared(A);return e.copy(A),t>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;jn.subVectors(A,this.center);const e=jn.lengthSq();if(e>this.radius*this.radius){const t=Math.sqrt(e),i=(t-this.radius)*.5;this.center.addScaledVector(jn,i/t),this.radius+=i}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(xs.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(jn.copy(A.center).add(xs)),this.expandByPoint(jn.copy(A.center).sub(xs))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ft=new T,Us=new T,Gi=new T,yt=new T,Fs=new T,Vi=new T,ys=new T;class wf{constructor(A=new T,e=new T(0,0,-1)){this.origin=A,this.direction=e}set(A,e){return this.origin.copy(A),this.direction.copy(e),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,e){return e.copy(this.direction).multiplyScalar(A).add(this.origin)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,ft)),this}closestPointToPoint(A,e){e.subVectors(A,this.origin);const t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(t).add(this.origin)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const e=ft.subVectors(A,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(A):(ft.copy(this.direction).multiplyScalar(e).add(this.origin),ft.distanceToSquared(A))}distanceSqToSegment(A,e,t,i){Us.copy(A).add(e).multiplyScalar(.5),Gi.copy(e).sub(A).normalize(),yt.copy(this.origin).sub(Us);const r=A.distanceTo(e)*.5,s=-this.direction.dot(Gi),a=yt.dot(this.direction),o=-yt.dot(Gi),l=yt.lengthSq(),c=Math.abs(1-s*s);let u,h,p,g;if(c>0)if(u=s*o-a,h=s*a-o,g=r*c,u>=0)if(h>=-g)if(h<=g){const f=1/c;u*=f,h*=f,p=u*(u+s*h+2*a)+h*(s*u+h+2*o)+l}else h=r,u=Math.max(0,-(s*h+a)),p=-u*u+h*(h+2*o)+l;else h=-r,u=Math.max(0,-(s*h+a)),p=-u*u+h*(h+2*o)+l;else h<=-g?(u=Math.max(0,-(-s*r+a)),h=u>0?-r:Math.min(Math.max(-r,-o),r),p=-u*u+h*(h+2*o)+l):h<=g?(u=0,h=Math.min(Math.max(-r,-o),r),p=h*(h+2*o)+l):(u=Math.max(0,-(s*r+a)),h=u>0?r:Math.min(Math.max(-r,-o),r),p=-u*u+h*(h+2*o)+l);else h=s>0?-r:r,u=Math.max(0,-(s*h+a)),p=-u*u+h*(h+2*o)+l;return t&&t.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Gi).multiplyScalar(h).add(Us),p}intersectSphere(A,e){ft.subVectors(A.center,this.origin);const t=ft.dot(this.direction),i=ft.dot(ft)-t*t,r=A.radius*A.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=t-s,o=t+s;return a<0&&o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const e=A.normal.dot(this.direction);if(e===0)return A.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(A.normal)+A.constant)/e;return t>=0?t:null}intersectPlane(A,e){const t=this.distanceToPlane(A);return t===null?null:this.at(t,e)}intersectsPlane(A){const e=A.distanceToPoint(this.origin);return e===0||A.normal.dot(this.direction)*e<0}intersectBox(A,e){let t,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(t=(A.min.x-h.x)*l,i=(A.max.x-h.x)*l):(t=(A.max.x-h.x)*l,i=(A.min.x-h.x)*l),c>=0?(r=(A.min.y-h.y)*c,s=(A.max.y-h.y)*c):(r=(A.max.y-h.y)*c,s=(A.min.y-h.y)*c),t>s||r>i||((r>t||isNaN(t))&&(t=r),(s<i||isNaN(i))&&(i=s),u>=0?(a=(A.min.z-h.z)*u,o=(A.max.z-h.z)*u):(a=(A.max.z-h.z)*u,o=(A.min.z-h.z)*u),t>o||a>i)||((a>t||t!==t)&&(t=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(t>=0?t:i,e)}intersectsBox(A){return this.intersectBox(A,ft)!==null}intersectTriangle(A,e,t,i,r){Fs.subVectors(e,A),Vi.subVectors(t,A),ys.crossVectors(Fs,Vi);let s=this.direction.dot(ys),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;yt.subVectors(this.origin,A);const o=a*this.direction.dot(Vi.crossVectors(yt,Vi));if(o<0)return null;const l=a*this.direction.dot(Fs.cross(yt));if(l<0||o+l>s)return null;const c=-a*yt.dot(ys);return c<0?null:this.at(c/s,r)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jA{constructor(){jA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,e,t,i,r,s,a,o,l,c,u,h,p,g,f,d){const m=this.elements;return m[0]=A,m[4]=e,m[8]=t,m[12]=i,m[1]=r,m[5]=s,m[9]=a,m[13]=o,m[2]=l,m[6]=c,m[10]=u,m[14]=h,m[3]=p,m[7]=g,m[11]=f,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jA().fromArray(this.elements)}copy(A){const e=this.elements,t=A.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],this}copyPosition(A){const e=this.elements,t=A.elements;return e[12]=t[12],e[13]=t[13],e[14]=t[14],this}setFromMatrix3(A){const e=A.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(A,e,t){return A.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),t.setFromMatrixColumn(this,2),this}makeBasis(A,e,t){return this.set(A.x,e.x,t.x,0,A.y,e.y,t.y,0,A.z,e.z,t.z,0,0,0,0,1),this}extractRotation(A){const e=this.elements,t=A.elements,i=1/fn.setFromMatrixColumn(A,0).length(),r=1/fn.setFromMatrixColumn(A,1).length(),s=1/fn.setFromMatrixColumn(A,2).length();return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=0,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=0,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(A){const e=this.elements,t=A.x,i=A.y,r=A.z,s=Math.cos(t),a=Math.sin(t),o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(A.order==="XYZ"){const h=s*c,p=s*u,g=a*c,f=a*u;e[0]=o*c,e[4]=-o*u,e[8]=l,e[1]=p+g*l,e[5]=h-f*l,e[9]=-a*o,e[2]=f-h*l,e[6]=g+p*l,e[10]=s*o}else if(A.order==="YXZ"){const h=o*c,p=o*u,g=l*c,f=l*u;e[0]=h+f*a,e[4]=g*a-p,e[8]=s*l,e[1]=s*u,e[5]=s*c,e[9]=-a,e[2]=p*a-g,e[6]=f+h*a,e[10]=s*o}else if(A.order==="ZXY"){const h=o*c,p=o*u,g=l*c,f=l*u;e[0]=h-f*a,e[4]=-s*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=s*c,e[9]=f-h*a,e[2]=-s*l,e[6]=a,e[10]=s*o}else if(A.order==="ZYX"){const h=s*c,p=s*u,g=a*c,f=a*u;e[0]=o*c,e[4]=g*l-p,e[8]=h*l+f,e[1]=o*u,e[5]=f*l+h,e[9]=p*l-g,e[2]=-l,e[6]=a*o,e[10]=s*o}else if(A.order==="YZX"){const h=s*o,p=s*l,g=a*o,f=a*l;e[0]=o*c,e[4]=f-h*u,e[8]=g*u+p,e[1]=u,e[5]=s*c,e[9]=-a*c,e[2]=-l*c,e[6]=p*u+g,e[10]=h-f*u}else if(A.order==="XZY"){const h=s*o,p=s*l,g=a*o,f=a*l;e[0]=o*c,e[4]=-u,e[8]=l*c,e[1]=h*u+f,e[5]=s*c,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*c,e[10]=f*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(A){return this.compose(vf,A,Cf)}lookAt(A,e,t){const i=this.elements;return Ie.subVectors(A,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),Et.crossVectors(t,Ie),Et.lengthSq()===0&&(Math.abs(t.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),Et.crossVectors(t,Ie)),Et.normalize(),Ki.crossVectors(Ie,Et),i[0]=Et.x,i[4]=Ki.x,i[8]=Ie.x,i[1]=Et.y,i[5]=Ki.y,i[9]=Ie.y,i[2]=Et.z,i[6]=Ki.z,i[10]=Ie.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,e){const t=A.elements,i=e.elements,r=this.elements,s=t[0],a=t[4],o=t[8],l=t[12],c=t[1],u=t[5],h=t[9],p=t[13],g=t[2],f=t[6],d=t[10],m=t[14],B=t[3],v=t[7],x=t[11],C=t[15],y=i[0],M=i[4],w=i[8],U=i[12],Q=i[1],G=i[5],X=i[9],b=i[13],I=i[2],V=i[6],J=i[10],Y=i[14],K=i[3],Z=i[7],q=i[11],lA=i[15];return r[0]=s*y+a*Q+o*I+l*K,r[4]=s*M+a*G+o*V+l*Z,r[8]=s*w+a*X+o*J+l*q,r[12]=s*U+a*b+o*Y+l*lA,r[1]=c*y+u*Q+h*I+p*K,r[5]=c*M+u*G+h*V+p*Z,r[9]=c*w+u*X+h*J+p*q,r[13]=c*U+u*b+h*Y+p*lA,r[2]=g*y+f*Q+d*I+m*K,r[6]=g*M+f*G+d*V+m*Z,r[10]=g*w+f*X+d*J+m*q,r[14]=g*U+f*b+d*Y+m*lA,r[3]=B*y+v*Q+x*I+C*K,r[7]=B*M+v*G+x*V+C*Z,r[11]=B*w+v*X+x*J+C*q,r[15]=B*U+v*b+x*Y+C*lA,this}multiplyScalar(A){const e=this.elements;return e[0]*=A,e[4]*=A,e[8]*=A,e[12]*=A,e[1]*=A,e[5]*=A,e[9]*=A,e[13]*=A,e[2]*=A,e[6]*=A,e[10]*=A,e[14]*=A,e[3]*=A,e[7]*=A,e[11]*=A,e[15]*=A,this}determinant(){const A=this.elements,e=A[0],t=A[4],i=A[8],r=A[12],s=A[1],a=A[5],o=A[9],l=A[13],c=A[2],u=A[6],h=A[10],p=A[14],g=A[3],f=A[7],d=A[11],m=A[15];return g*(+r*o*u-i*l*u-r*a*h+t*l*h+i*a*p-t*o*p)+f*(+e*o*p-e*l*h+r*s*h-i*s*p+i*l*c-r*o*c)+d*(+e*l*u-e*a*p-r*s*u+t*s*p+r*a*c-t*l*c)+m*(-i*a*c-e*o*u+e*a*h+i*s*u-t*s*h+t*o*c)}transpose(){const A=this.elements;let e;return e=A[1],A[1]=A[4],A[4]=e,e=A[2],A[2]=A[8],A[8]=e,e=A[6],A[6]=A[9],A[9]=e,e=A[3],A[3]=A[12],A[12]=e,e=A[7],A[7]=A[13],A[13]=e,e=A[11],A[11]=A[14],A[14]=e,this}setPosition(A,e,t){const i=this.elements;return A.isVector3?(i[12]=A.x,i[13]=A.y,i[14]=A.z):(i[12]=A,i[13]=e,i[14]=t),this}invert(){const A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],o=A[6],l=A[7],c=A[8],u=A[9],h=A[10],p=A[11],g=A[12],f=A[13],d=A[14],m=A[15],B=u*d*l-f*h*l+f*o*p-a*d*p-u*o*m+a*h*m,v=g*h*l-c*d*l-g*o*p+s*d*p+c*o*m-s*h*m,x=c*f*l-g*u*l+g*a*p-s*f*p-c*a*m+s*u*m,C=g*u*o-c*f*o-g*a*h+s*f*h+c*a*d-s*u*d,y=e*B+t*v+i*x+r*C;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/y;return A[0]=B*M,A[1]=(f*h*r-u*d*r-f*i*p+t*d*p+u*i*m-t*h*m)*M,A[2]=(a*d*r-f*o*r+f*i*l-t*d*l-a*i*m+t*o*m)*M,A[3]=(u*o*r-a*h*r-u*i*l+t*h*l+a*i*p-t*o*p)*M,A[4]=v*M,A[5]=(c*d*r-g*h*r+g*i*p-e*d*p-c*i*m+e*h*m)*M,A[6]=(g*o*r-s*d*r-g*i*l+e*d*l+s*i*m-e*o*m)*M,A[7]=(s*h*r-c*o*r+c*i*l-e*h*l-s*i*p+e*o*p)*M,A[8]=x*M,A[9]=(g*u*r-c*f*r-g*t*p+e*f*p+c*t*m-e*u*m)*M,A[10]=(s*f*r-g*a*r+g*t*l-e*f*l-s*t*m+e*a*m)*M,A[11]=(c*a*r-s*u*r-c*t*l+e*u*l+s*t*p-e*a*p)*M,A[12]=C*M,A[13]=(c*f*i-g*u*i+g*t*h-e*f*h-c*t*d+e*u*d)*M,A[14]=(g*a*i-s*f*i-g*t*o+e*f*o+s*t*d-e*a*d)*M,A[15]=(s*u*i-c*a*i+c*t*o-e*u*o-s*t*h+e*a*h)*M,this}scale(A){const e=this.elements,t=A.x,i=A.y,r=A.z;return e[0]*=t,e[4]*=i,e[8]*=r,e[1]*=t,e[5]*=i,e[9]*=r,e[2]*=t,e[6]*=i,e[10]*=r,e[3]*=t,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const A=this.elements,e=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],t=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],i=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(e,t,i))}makeTranslation(A,e,t){return this.set(1,0,0,A,0,1,0,e,0,0,1,t,0,0,0,1),this}makeRotationX(A){const e=Math.cos(A),t=Math.sin(A);return this.set(1,0,0,0,0,e,-t,0,0,t,e,0,0,0,0,1),this}makeRotationY(A){const e=Math.cos(A),t=Math.sin(A);return this.set(e,0,t,0,0,1,0,0,-t,0,e,0,0,0,0,1),this}makeRotationZ(A){const e=Math.cos(A),t=Math.sin(A);return this.set(e,-t,0,0,t,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,e){const t=Math.cos(e),i=Math.sin(e),r=1-t,s=A.x,a=A.y,o=A.z,l=r*s,c=r*a;return this.set(l*s+t,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+t,c*o-i*s,0,l*o-i*a,c*o+i*s,r*o*o+t,0,0,0,0,1),this}makeScale(A,e,t){return this.set(A,0,0,0,0,e,0,0,0,0,t,0,0,0,0,1),this}makeShear(A,e,t,i,r,s){return this.set(1,t,r,0,A,1,s,0,e,i,1,0,0,0,0,1),this}compose(A,e,t){const i=this.elements,r=e._x,s=e._y,a=e._z,o=e._w,l=r+r,c=s+s,u=a+a,h=r*l,p=r*c,g=r*u,f=s*c,d=s*u,m=a*u,B=o*l,v=o*c,x=o*u,C=t.x,y=t.y,M=t.z;return i[0]=(1-(f+m))*C,i[1]=(p+x)*C,i[2]=(g-v)*C,i[3]=0,i[4]=(p-x)*y,i[5]=(1-(h+m))*y,i[6]=(d+B)*y,i[7]=0,i[8]=(g+v)*M,i[9]=(d-B)*M,i[10]=(1-(h+f))*M,i[11]=0,i[12]=A.x,i[13]=A.y,i[14]=A.z,i[15]=1,this}decompose(A,e,t){const i=this.elements;let r=fn.set(i[0],i[1],i[2]).length();const s=fn.set(i[4],i[5],i[6]).length(),a=fn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),A.x=i[12],A.y=i[13],A.z=i[14],Ye.copy(this);const l=1/r,c=1/s,u=1/a;return Ye.elements[0]*=l,Ye.elements[1]*=l,Ye.elements[2]*=l,Ye.elements[4]*=c,Ye.elements[5]*=c,Ye.elements[6]*=c,Ye.elements[8]*=u,Ye.elements[9]*=u,Ye.elements[10]*=u,e.setFromRotationMatrix(Ye),t.x=r,t.y=s,t.z=a,this}makePerspective(A,e,t,i,r,s){const a=this.elements,o=2*r/(e-A),l=2*r/(t-i),c=(e+A)/(e-A),u=(t+i)/(t-i),h=-(s+r)/(s-r),p=-2*s*r/(s-r);return a[0]=o,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(A,e,t,i,r,s){const a=this.elements,o=1/(e-A),l=1/(t-i),c=1/(s-r),u=(e+A)*o,h=(t+i)*l,p=(s+r)*c;return a[0]=2*o,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(A){const e=this.elements,t=A.elements;for(let i=0;i<16;i++)if(e[i]!==t[i])return!1;return!0}fromArray(A,e=0){for(let t=0;t<16;t++)this.elements[t]=A[t+e];return this}toArray(A=[],e=0){const t=this.elements;return A[e]=t[0],A[e+1]=t[1],A[e+2]=t[2],A[e+3]=t[3],A[e+4]=t[4],A[e+5]=t[5],A[e+6]=t[6],A[e+7]=t[7],A[e+8]=t[8],A[e+9]=t[9],A[e+10]=t[10],A[e+11]=t[11],A[e+12]=t[12],A[e+13]=t[13],A[e+14]=t[14],A[e+15]=t[15],A}}const fn=new T,Ye=new jA,vf=new T(0,0,0),Cf=new T(1,1,1),Et=new T,Ki=new T,Ie=new T,ko=new jA,Wo=new bi;class Wr{constructor(A=0,e=0,t=0,i=Wr.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=e,this._z=t,this._order=i}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,e,t,i=this._order){return this._x=A,this._y=e,this._z=t,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,e=this._order,t=!0){const i=A.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],c=i[9],u=i[2],h=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Be(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,t===!0&&this._onChangeCallback(),this}setFromQuaternion(A,e,t){return ko.makeRotationFromQuaternion(A),this.setFromRotationMatrix(ko,e,t)}setFromVector3(A,e=this._order){return this.set(A.x,A.y,A.z,e)}reorder(A){return Wo.setFromEuler(this),this.setFromQuaternion(Wo,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],e=0){return A[e]=this._x,A[e+1]=this._y,A[e+2]=this._z,A[e+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wr.DEFAULT_ORDER="XYZ";class Hc{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let _f=0;const Xo=new T,dn=new bi,dt=new jA,zi=new T,$n=new T,xf=new T,Uf=new bi,Jo=new T(1,0,0),Yo=new T(0,1,0),Zo=new T(0,0,1),Ff={type:"added"},qo={type:"removed"};class we extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const A=new T,e=new Wr,t=new bi,i=new T(1,1,1);function r(){t.setFromEuler(e,!1)}function s(){e.setFromQuaternion(t,void 0,!1)}e._onChange(r),t._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jA},normalMatrix:{value:new He}}),this.matrix=new jA,this.matrixWorld=new jA,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,e){this.quaternion.setFromAxisAngle(A,e)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,e){return dn.setFromAxisAngle(A,e),this.quaternion.multiply(dn),this}rotateOnWorldAxis(A,e){return dn.setFromAxisAngle(A,e),this.quaternion.premultiply(dn),this}rotateX(A){return this.rotateOnAxis(Jo,A)}rotateY(A){return this.rotateOnAxis(Yo,A)}rotateZ(A){return this.rotateOnAxis(Zo,A)}translateOnAxis(A,e){return Xo.copy(A).applyQuaternion(this.quaternion),this.position.add(Xo.multiplyScalar(e)),this}translateX(A){return this.translateOnAxis(Jo,A)}translateY(A){return this.translateOnAxis(Yo,A)}translateZ(A){return this.translateOnAxis(Zo,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(dt.copy(this.matrixWorld).invert())}lookAt(A,e,t){A.isVector3?zi.copy(A):zi.set(A,e,t);const i=this.parent;this.updateWorldMatrix(!0,!1),$n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dt.lookAt($n,zi,this.up):dt.lookAt(zi,$n,this.up),this.quaternion.setFromRotationMatrix(dt),i&&(dt.extractRotation(i.matrixWorld),dn.setFromRotationMatrix(dt),this.quaternion.premultiply(dn.invert()))}add(A){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(Ff)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(A);return e!==-1&&(A.parent=null,this.children.splice(e,1),A.dispatchEvent(qo)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const e=this.children[A];e.parent=null,e.dispatchEvent(qo)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),dt.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),dt.multiply(A.parent.matrixWorld)),A.applyMatrix4(dt),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,e){if(this[A]===e)return this;for(let t=0,i=this.children.length;t<i;t++){const s=this.children[t].getObjectByProperty(A,e);if(s!==void 0)return s}}getObjectsByProperty(A,e){let t=[];this[A]===e&&t.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(A,e);s.length>0&&(t=t.concat(s))}return t}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($n,A,xf),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($n,Uf,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return A.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(A){A(this);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverseVisible(A)}traverseAncestors(A){const e=this.parent;e!==null&&(A(e),e.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const e=this.children;for(let t=0,i=e.length;t<i;t++){const r=e[t];(r.matrixWorldAutoUpdate===!0||A===!0)&&r.updateMatrixWorld(A)}}updateWorldMatrix(A,e){const t=this.parent;if(A===!0&&t!==null&&t.matrixWorldAutoUpdate===!0&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(A){const e=A===void 0||typeof A=="string",t={};e&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},t.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(A.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){const u=o[l];r(A.shapes,u)}else r(A.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(A.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(r(A.materials,this.material[o]));i.material=a}else i.material=r(A.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(A).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];i.animations.push(r(A.animations,o))}}if(e){const a=s(A.geometries),o=s(A.materials),l=s(A.textures),c=s(A.images),u=s(A.shapes),h=s(A.skeletons),p=s(A.animations),g=s(A.nodes);a.length>0&&(t.geometries=a),o.length>0&&(t.materials=o),l.length>0&&(t.textures=l),c.length>0&&(t.images=c),u.length>0&&(t.shapes=u),h.length>0&&(t.skeletons=h),p.length>0&&(t.animations=p),g.length>0&&(t.nodes=g)}return t.object=i,t;function s(a){const o=[];for(const l in a){const c=a[l];delete c.metadata,o.push(c)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,e=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),e===!0)for(let t=0;t<A.children.length;t++){const i=A.children[t];this.add(i.clone())}return this}}we.DEFAULT_UP=new T(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new T,pt=new T,Es=new T,gt=new T,pn=new T,gn=new T,jo=new T,Ms=new T,Qs=new T,Ss=new T;class wt{constructor(A=new T,e=new T,t=new T){this.a=A,this.b=e,this.c=t}static getNormal(A,e,t,i){i.subVectors(t,e),Ze.subVectors(A,e),i.cross(Ze);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(A,e,t,i,r){Ze.subVectors(i,e),pt.subVectors(t,e),Es.subVectors(A,e);const s=Ze.dot(Ze),a=Ze.dot(pt),o=Ze.dot(Es),l=pt.dot(pt),c=pt.dot(Es),u=s*l-a*a;if(u===0)return r.set(-2,-1,-1);const h=1/u,p=(l*o-a*c)*h,g=(s*c-a*o)*h;return r.set(1-p-g,g,p)}static containsPoint(A,e,t,i){return this.getBarycoord(A,e,t,i,gt),gt.x>=0&&gt.y>=0&&gt.x+gt.y<=1}static getUV(A,e,t,i,r,s,a,o){return this.getBarycoord(A,e,t,i,gt),o.set(0,0),o.addScaledVector(r,gt.x),o.addScaledVector(s,gt.y),o.addScaledVector(a,gt.z),o}static isFrontFacing(A,e,t,i){return Ze.subVectors(t,e),pt.subVectors(A,e),Ze.cross(pt).dot(i)<0}set(A,e,t){return this.a.copy(A),this.b.copy(e),this.c.copy(t),this}setFromPointsAndIndices(A,e,t,i){return this.a.copy(A[e]),this.b.copy(A[t]),this.c.copy(A[i]),this}setFromAttributeAndIndices(A,e,t,i){return this.a.fromBufferAttribute(A,e),this.b.fromBufferAttribute(A,t),this.c.fromBufferAttribute(A,i),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Ze.subVectors(this.c,this.b),pt.subVectors(this.a,this.b),Ze.cross(pt).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return wt.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,e){return wt.getBarycoord(A,this.a,this.b,this.c,e)}getUV(A,e,t,i,r){return wt.getUV(A,this.a,this.b,this.c,e,t,i,r)}containsPoint(A){return wt.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return wt.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,e){const t=this.a,i=this.b,r=this.c;let s,a;pn.subVectors(i,t),gn.subVectors(r,t),Ms.subVectors(A,t);const o=pn.dot(Ms),l=gn.dot(Ms);if(o<=0&&l<=0)return e.copy(t);Qs.subVectors(A,i);const c=pn.dot(Qs),u=gn.dot(Qs);if(c>=0&&u<=c)return e.copy(i);const h=o*u-c*l;if(h<=0&&o>=0&&c<=0)return s=o/(o-c),e.copy(t).addScaledVector(pn,s);Ss.subVectors(A,r);const p=pn.dot(Ss),g=gn.dot(Ss);if(g>=0&&p<=g)return e.copy(r);const f=p*l-o*g;if(f<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(t).addScaledVector(gn,a);const d=c*g-p*u;if(d<=0&&u-c>=0&&p-g>=0)return jo.subVectors(r,i),a=(u-c)/(u-c+(p-g)),e.copy(i).addScaledVector(jo,a);const m=1/(d+f+h);return s=f*m,a=h*m,e.copy(t).addScaledVector(pn,s).addScaledVector(gn,a)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let yf=0;class Ti extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Dn,this.side=Rt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Uc,this.blendDst=Fc,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const e in A){const t=A[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}}toJSON(A){const e=A===void 0||typeof A=="string";e&&(A={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(A).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(A).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(A).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(A).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(A).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Dn&&(t.blending=this.blending),this.side!==Rt&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(t.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(e){const r=i(A.textures),s=i(A.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const e=A.clippingPlanes;let t=null;if(e!==null){const i=e.length;t=new Array(i);for(let r=0;r!==i;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class Dc extends Ti{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new NA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const ZA=new T,ki=new IA;class st{constructor(A,e,t=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=e,this.count=A!==void 0?A.length/e:0,this.normalized=t,this.usage=Go,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,e,t){A*=this.itemSize,t*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[A+i]=e.array[t+i];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let e=0,t=this.count;e<t;e++)ki.fromBufferAttribute(this,e),ki.applyMatrix3(A),this.setXY(e,ki.x,ki.y);else if(this.itemSize===3)for(let e=0,t=this.count;e<t;e++)ZA.fromBufferAttribute(this,e),ZA.applyMatrix3(A),this.setXYZ(e,ZA.x,ZA.y,ZA.z);return this}applyMatrix4(A){for(let e=0,t=this.count;e<t;e++)ZA.fromBufferAttribute(this,e),ZA.applyMatrix4(A),this.setXYZ(e,ZA.x,ZA.y,ZA.z);return this}applyNormalMatrix(A){for(let e=0,t=this.count;e<t;e++)ZA.fromBufferAttribute(this,e),ZA.applyNormalMatrix(A),this.setXYZ(e,ZA.x,ZA.y,ZA.z);return this}transformDirection(A){for(let e=0,t=this.count;e<t;e++)ZA.fromBufferAttribute(this,e),ZA.transformDirection(A),this.setXYZ(e,ZA.x,ZA.y,ZA.z);return this}set(A,e=0){return this.array.set(A,e),this}getX(A){let e=this.array[A*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(A,e){return this.normalized&&(e=ye(e,this.array)),this.array[A*this.itemSize]=e,this}getY(A){let e=this.array[A*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(A,e){return this.normalized&&(e=ye(e,this.array)),this.array[A*this.itemSize+1]=e,this}getZ(A){let e=this.array[A*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(A,e){return this.normalized&&(e=ye(e,this.array)),this.array[A*this.itemSize+2]=e,this}getW(A){let e=this.array[A*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(A,e){return this.normalized&&(e=ye(e,this.array)),this.array[A*this.itemSize+3]=e,this}setXY(A,e,t){return A*=this.itemSize,this.normalized&&(e=ye(e,this.array),t=ye(t,this.array)),this.array[A+0]=e,this.array[A+1]=t,this}setXYZ(A,e,t,i){return A*=this.itemSize,this.normalized&&(e=ye(e,this.array),t=ye(t,this.array),i=ye(i,this.array)),this.array[A+0]=e,this.array[A+1]=t,this.array[A+2]=i,this}setXYZW(A,e,t,i,r){return A*=this.itemSize,this.normalized&&(e=ye(e,this.array),t=ye(t,this.array),i=ye(i,this.array),r=ye(r,this.array)),this.array[A+0]=e,this.array[A+1]=t,this.array[A+2]=i,this.array[A+3]=r,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==Go&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Rc extends st{constructor(A,e,t){super(new Uint16Array(A),e,t)}}class Pc extends st{constructor(A,e,t){super(new Uint32Array(A),e,t)}}class te extends st{constructor(A,e,t){super(new Float32Array(A),e,t)}}let Ef=0;const Ne=new jA,bs=new we,mn=new T,Te=new Ii,Ai=new Ii,oe=new T;class At extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Sc(A)?Pc:Rc)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,e){return this.attributes[A]=e,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,e,t=0){this.groups.push({start:A,count:e,materialIndex:t})}clearGroups(){this.groups=[]}setDrawRange(A,e){this.drawRange.start=A,this.drawRange.count=e}applyMatrix4(A){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(A),e.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const r=new He().getNormalMatrix(A);t.applyNormalMatrix(r),t.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(A),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Ne.makeRotationFromQuaternion(A),this.applyMatrix4(Ne),this}rotateX(A){return Ne.makeRotationX(A),this.applyMatrix4(Ne),this}rotateY(A){return Ne.makeRotationY(A),this.applyMatrix4(Ne),this}rotateZ(A){return Ne.makeRotationZ(A),this.applyMatrix4(Ne),this}translate(A,e,t){return Ne.makeTranslation(A,e,t),this.applyMatrix4(Ne),this}scale(A,e,t){return Ne.makeScale(A,e,t),this.applyMatrix4(Ne),this}lookAt(A){return bs.lookAt(A),bs.updateMatrix(),this.applyMatrix4(bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mn).negate(),this.translate(mn.x,mn.y,mn.z),this}setFromPoints(A){const e=[];for(let t=0,i=A.length;t<i;t++){const r=A[t];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const A=this.attributes.position,e=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),e)for(let t=0,i=e.length;t<i;t++){const r=e[t];Te.setFromBufferAttribute(r),this.morphTargetsRelative?(oe.addVectors(this.boundingBox.min,Te.min),this.boundingBox.expandByPoint(oe),oe.addVectors(this.boundingBox.max,Te.max),this.boundingBox.expandByPoint(oe)):(this.boundingBox.expandByPoint(Te.min),this.boundingBox.expandByPoint(Te.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);const A=this.attributes.position,e=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(A){const t=this.boundingSphere.center;if(Te.setFromBufferAttribute(A),e)for(let r=0,s=e.length;r<s;r++){const a=e[r];Ai.setFromBufferAttribute(a),this.morphTargetsRelative?(oe.addVectors(Te.min,Ai.min),Te.expandByPoint(oe),oe.addVectors(Te.max,Ai.max),Te.expandByPoint(oe)):(Te.expandByPoint(Ai.min),Te.expandByPoint(Ai.max))}Te.getCenter(t);let i=0;for(let r=0,s=A.count;r<s;r++)oe.fromBufferAttribute(A,r),i=Math.max(i,t.distanceToSquared(oe));if(e)for(let r=0,s=e.length;r<s;r++){const a=e[r],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)oe.fromBufferAttribute(a,l),o&&(mn.fromBufferAttribute(A,l),oe.add(mn)),i=Math.max(i,t.distanceToSquared(oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,e=this.attributes;if(A===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const t=A.array,i=e.position.array,r=e.normal.array,s=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new st(new Float32Array(4*a),4));const o=this.getAttribute("tangent").array,l=[],c=[];for(let Q=0;Q<a;Q++)l[Q]=new T,c[Q]=new T;const u=new T,h=new T,p=new T,g=new IA,f=new IA,d=new IA,m=new T,B=new T;function v(Q,G,X){u.fromArray(i,Q*3),h.fromArray(i,G*3),p.fromArray(i,X*3),g.fromArray(s,Q*2),f.fromArray(s,G*2),d.fromArray(s,X*2),h.sub(u),p.sub(u),f.sub(g),d.sub(g);const b=1/(f.x*d.y-d.x*f.y);isFinite(b)&&(m.copy(h).multiplyScalar(d.y).addScaledVector(p,-f.y).multiplyScalar(b),B.copy(p).multiplyScalar(f.x).addScaledVector(h,-d.x).multiplyScalar(b),l[Q].add(m),l[G].add(m),l[X].add(m),c[Q].add(B),c[G].add(B),c[X].add(B))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.length}]);for(let Q=0,G=x.length;Q<G;++Q){const X=x[Q],b=X.start,I=X.count;for(let V=b,J=b+I;V<J;V+=3)v(t[V+0],t[V+1],t[V+2])}const C=new T,y=new T,M=new T,w=new T;function U(Q){M.fromArray(r,Q*3),w.copy(M);const G=l[Q];C.copy(G),C.sub(M.multiplyScalar(M.dot(G))).normalize(),y.crossVectors(w,G);const b=y.dot(c[Q])<0?-1:1;o[Q*4]=C.x,o[Q*4+1]=C.y,o[Q*4+2]=C.z,o[Q*4+3]=b}for(let Q=0,G=x.length;Q<G;++Q){const X=x[Q],b=X.start,I=X.count;for(let V=b,J=b+I;V<J;V+=3)U(t[V+0]),U(t[V+1]),U(t[V+2])}}computeVertexNormals(){const A=this.index,e=this.getAttribute("position");if(e!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new st(new Float32Array(e.count*3),3),this.setAttribute("normal",t);else for(let h=0,p=t.count;h<p;h++)t.setXYZ(h,0,0,0);const i=new T,r=new T,s=new T,a=new T,o=new T,l=new T,c=new T,u=new T;if(A)for(let h=0,p=A.count;h<p;h+=3){const g=A.getX(h+0),f=A.getX(h+1),d=A.getX(h+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,f),s.fromBufferAttribute(e,d),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),a.fromBufferAttribute(t,g),o.fromBufferAttribute(t,f),l.fromBufferAttribute(t,d),a.add(c),o.add(c),l.add(c),t.setXYZ(g,a.x,a.y,a.z),t.setXYZ(f,o.x,o.y,o.z),t.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),t.setXYZ(h+0,c.x,c.y,c.z),t.setXYZ(h+1,c.x,c.y,c.z),t.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),t.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let e=0,t=A.count;e<t;e++)oe.fromBufferAttribute(A,e),oe.normalize(),A.setXYZ(e,oe.x,oe.y,oe.z)}toNonIndexed(){function A(a,o){const l=a.array,c=a.itemSize,u=a.normalized,h=new l.constructor(o.length*c);let p=0,g=0;for(let f=0,d=o.length;f<d;f++){a.isInterleavedBufferAttribute?p=o[f]*a.data.stride+a.offset:p=o[f]*c;for(let m=0;m<c;m++)h[g++]=l[p++]}return new st(h,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new At,t=this.index.array,i=this.attributes;for(const a in i){const o=i[a],l=A(o,t);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const o=[],l=r[a];for(let c=0,u=l.length;c<u;c++){const h=l[c],p=A(h,t);o.push(p)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,o=s.length;a<o;a++){const l=s[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(A[l]=o[l]);return A}A.data={attributes:{}};const e=this.index;e!==null&&(A.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const t=this.attributes;for(const o in t){const l=t[o];A.data.attributes[o]=l.toJSON(A.data)}const i={};let r=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],c=[];for(let u=0,h=l.length;u<h;u++){const p=l[u];c.push(p.toJSON(A.data))}c.length>0&&(i[o]=c,r=!0)}r&&(A.data.morphAttributes=i,A.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(A.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(A.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=A.name;const t=A.index;t!==null&&this.setIndex(t.clone(e));const i=A.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(e))}const r=A.morphAttributes;for(const l in r){const c=[],u=r[l];for(let h=0,p=u.length;h<p;h++)c.push(u[h].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=A.morphTargetsRelative;const s=A.groups;for(let l=0,c=s.length;l<c;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=A.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,A.parameters!==void 0&&(this.parameters=Object.assign({},A.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const $o=new jA,Bn=new wf,Is=new ka,ei=new T,ti=new T,ni=new T,Ts=new T,Wi=new T,Xi=new IA,Ji=new IA,Yi=new IA,Ls=new T,Zi=new T;class Me extends we{constructor(A=new At,e=new Dc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=e,this.updateMorphTargets()}copy(A,e){return super.copy(A,e),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(A,e){const t=this.geometry,i=t.attributes.position,r=t.morphAttributes.position,s=t.morphTargetsRelative;e.fromBufferAttribute(i,A);const a=this.morphTargetInfluences;if(r&&a){Wi.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],u=r[o];c!==0&&(Ts.fromBufferAttribute(u,A),s?Wi.addScaledVector(Ts,c):Wi.addScaledVector(Ts.sub(e),c))}e.add(Wi)}return this.isSkinnedMesh&&this.boneTransform(A,e),e}raycast(A,e){const t=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere),Is.applyMatrix4(r),A.ray.intersectsSphere(Is)===!1)||($o.copy(r).invert(),Bn.copy(A.ray).applyMatrix4($o),t.boundingBox!==null&&Bn.intersectsBox(t.boundingBox)===!1))return;let s;const a=t.index,o=t.attributes.position,l=t.attributes.uv,c=t.attributes.uv2,u=t.groups,h=t.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,g=u.length;p<g;p++){const f=u[p],d=i[f.materialIndex],m=Math.max(f.start,h.start),B=Math.min(a.count,Math.min(f.start+f.count,h.start+h.count));for(let v=m,x=B;v<x;v+=3){const C=a.getX(v),y=a.getX(v+1),M=a.getX(v+2);s=qi(this,d,A,Bn,l,c,C,y,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const p=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let f=p,d=g;f<d;f+=3){const m=a.getX(f),B=a.getX(f+1),v=a.getX(f+2);s=qi(this,i,A,Bn,l,c,m,B,v),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(o!==void 0)if(Array.isArray(i))for(let p=0,g=u.length;p<g;p++){const f=u[p],d=i[f.materialIndex],m=Math.max(f.start,h.start),B=Math.min(o.count,Math.min(f.start+f.count,h.start+h.count));for(let v=m,x=B;v<x;v+=3){const C=v,y=v+1,M=v+2;s=qi(this,d,A,Bn,l,c,C,y,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const p=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let f=p,d=g;f<d;f+=3){const m=f,B=f+1,v=f+2;s=qi(this,i,A,Bn,l,c,m,B,v),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function Mf(n,A,e,t,i,r,s,a){let o;if(A.side===De?o=t.intersectTriangle(s,r,i,!0,a):o=t.intersectTriangle(i,r,s,A.side===Rt,a),o===null)return null;Zi.copy(a),Zi.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Zi);return l<e.near||l>e.far?null:{distance:l,point:Zi.clone(),object:n}}function qi(n,A,e,t,i,r,s,a,o){n.getVertexPosition(s,ei),n.getVertexPosition(a,ti),n.getVertexPosition(o,ni);const l=Mf(n,A,e,t,ei,ti,ni,Ls);if(l){i&&(Xi.fromBufferAttribute(i,s),Ji.fromBufferAttribute(i,a),Yi.fromBufferAttribute(i,o),l.uv=wt.getUV(Ls,ei,ti,ni,Xi,Ji,Yi,new IA)),r&&(Xi.fromBufferAttribute(r,s),Ji.fromBufferAttribute(r,a),Yi.fromBufferAttribute(r,o),l.uv2=wt.getUV(Ls,ei,ti,ni,Xi,Ji,Yi,new IA));const c={a:s,b:a,c:o,normal:new T,materialIndex:0};wt.getNormal(ei,ti,ni,c.normal),l.face=c}return l}class Li extends At{constructor(A=1,e=1,t=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:e,depth:t,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const o=[],l=[],c=[],u=[];let h=0,p=0;g("z","y","x",-1,-1,t,e,A,s,r,0),g("z","y","x",1,-1,t,e,-A,s,r,1),g("x","z","y",1,1,A,t,e,i,s,2),g("x","z","y",1,-1,A,t,-e,i,s,3),g("x","y","z",1,-1,A,e,t,i,r,4),g("x","y","z",-1,-1,A,e,-t,i,r,5),this.setIndex(o),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(u,2));function g(f,d,m,B,v,x,C,y,M,w,U){const Q=x/M,G=C/w,X=x/2,b=C/2,I=y/2,V=M+1,J=w+1;let Y=0,K=0;const Z=new T;for(let q=0;q<J;q++){const lA=q*G-b;for(let D=0;D<V;D++){const k=D*Q-X;Z[f]=k*B,Z[d]=lA*v,Z[m]=I,l.push(Z.x,Z.y,Z.z),Z[f]=0,Z[d]=0,Z[m]=y>0?1:-1,c.push(Z.x,Z.y,Z.z),u.push(D/M),u.push(1-q/w),Y+=1}}for(let q=0;q<w;q++)for(let lA=0;lA<M;lA++){const D=h+lA+V*q,k=h+lA+V*(q+1),eA=h+(lA+1)+V*(q+1),AA=h+(lA+1)+V*q;o.push(D,k,AA),o.push(k,eA,AA),K+=6}a.addGroup(p,K,U),p+=K,h+=Y}}static fromJSON(A){return new Li(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function Kn(n){const A={};for(const e in n){A[e]={};for(const t in n[e]){const i=n[e][t];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?A[e][t]=i.clone():Array.isArray(i)?A[e][t]=i.slice():A[e][t]=i}}return A}function xe(n){const A={};for(let e=0;e<n.length;e++){const t=Kn(n[e]);for(const i in t)A[i]=t[i]}return A}function Qf(n){const A=[];for(let e=0;e<n.length;e++)A.push(n[e].clone());return A}function Oc(n){return n.getRenderTarget()===null&&n.outputEncoding===VA?nt:Ei}const Sf={clone:Kn,merge:xe};var bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends Ti{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bf,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=Kn(A.uniforms),this.uniformsGroups=Qf(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const e=super.toJSON(A);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(A).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const t={};for(const i in this.extensions)this.extensions[i]===!0&&(t[i]=!0);return Object.keys(t).length>0&&(e.extensions=t),e}}class Nc extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jA,this.projectionMatrix=new jA,this.projectionMatrixInverse=new jA}copy(A,e){return super.copy(A,e),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return A.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,e){super.updateWorldMatrix(A,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ke extends Nc{constructor(A=50,e=1,t=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=t,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,e){return super.copy(A,e),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const e=.5*this.getFilmHeight()/A;this.fov=Ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,e,t,i,r,s){this.aspect=A/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let e=A*Math.tan(Bi*.5*this.fov)/this.zoom,t=2*e,i=this.aspect*t,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/o,e-=s.offsetY*t/l,i*=s.width/o,t*=s.height/l}const a=this.filmOffset;a!==0&&(r+=A*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-t,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const e=super.toJSON(A);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const wn=-90,vn=1;class Tf extends we{constructor(A,e,t){super(),this.type="CubeCamera",this.renderTarget=t;const i=new Ke(wn,vn,A,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Ke(wn,vn,A,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new Ke(wn,vn,A,e);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new Ke(wn,vn,A,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const o=new Ke(wn,vn,A,e);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(0,0,1),this.add(o);const l=new Ke(wn,vn,A,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(A,e){this.parent===null&&this.updateMatrixWorld();const t=this.renderTarget,[i,r,s,a,o,l]=this.children,c=A.getRenderTarget(),u=A.toneMapping,h=A.xr.enabled;A.toneMapping=vt,A.xr.enabled=!1;const p=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,A.setRenderTarget(t,0),A.render(e,i),A.setRenderTarget(t,1),A.render(e,r),A.setRenderTarget(t,2),A.render(e,s),A.setRenderTarget(t,3),A.render(e,a),A.setRenderTarget(t,4),A.render(e,o),t.texture.generateMipmaps=p,A.setRenderTarget(t,5),A.render(e,l),A.setRenderTarget(c),A.toneMapping=u,A.xr.enabled=h,t.texture.needsPMREMUpdate=!0}}class Gc extends Qe{constructor(A,e,t,i,r,s,a,o,l,c){A=A!==void 0?A:[],e=e!==void 0?e:Nn,super(A,e,t,i,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class Lf extends an{constructor(A=1,e={}){super(A,A,e),this.isWebGLCubeRenderTarget=!0;const t={width:A,height:A,depth:1},i=[t,t,t,t,t,t];this.texture=new Gc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ve}fromEquirectangularTexture(A,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const t={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Li(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:Kn(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:De,blending:Lt});r.uniforms.tEquirect.value=e;const s=new Me(i,r),a=e.minFilter;return e.minFilter===Fi&&(e.minFilter=Ve),new Tf(1,10,this).update(A,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(A,e,t,i){const r=A.getRenderTarget();for(let s=0;s<6;s++)A.setRenderTarget(this,s),A.clear(e,t,i);A.setRenderTarget(r)}}const Hs=new T,Hf=new T,Df=new He;class Xt{constructor(A=new T(1,0,0),e=0){this.isPlane=!0,this.normal=A,this.constant=e}set(A,e){return this.normal.copy(A),this.constant=e,this}setComponents(A,e,t,i){return this.normal.set(A,e,t),this.constant=i,this}setFromNormalAndCoplanarPoint(A,e){return this.normal.copy(A),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(A,e,t){const i=Hs.subVectors(t,e).cross(Hf.subVectors(A,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(A)).add(A)}intersectLine(A,e){const t=A.delta(Hs),i=this.normal.dot(t);if(i===0)return this.distanceToPoint(A.start)===0?e.copy(A.start):null;const r=-(A.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t).multiplyScalar(r).add(A.start)}intersectsLine(A){const e=this.distanceToPoint(A.start),t=this.distanceToPoint(A.end);return e<0&&t>0||t<0&&e>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,e){const t=e||Df.getNormalMatrix(A),i=this.coplanarPoint(Hs).applyMatrix4(A),r=this.normal.applyMatrix3(t).normalize();return this.constant=-i.dot(r),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cn=new ka,ji=new T;class Wa{constructor(A=new Xt,e=new Xt,t=new Xt,i=new Xt,r=new Xt,s=new Xt){this.planes=[A,e,t,i,r,s]}set(A,e,t,i,r,s){const a=this.planes;return a[0].copy(A),a[1].copy(e),a[2].copy(t),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(A){const e=this.planes;for(let t=0;t<6;t++)e[t].copy(A.planes[t]);return this}setFromProjectionMatrix(A){const e=this.planes,t=A.elements,i=t[0],r=t[1],s=t[2],a=t[3],o=t[4],l=t[5],c=t[6],u=t[7],h=t[8],p=t[9],g=t[10],f=t[11],d=t[12],m=t[13],B=t[14],v=t[15];return e[0].setComponents(a-i,u-o,f-h,v-d).normalize(),e[1].setComponents(a+i,u+o,f+h,v+d).normalize(),e[2].setComponents(a+r,u+l,f+p,v+m).normalize(),e[3].setComponents(a-r,u-l,f-p,v-m).normalize(),e[4].setComponents(a-s,u-c,f-g,v-B).normalize(),e[5].setComponents(a+s,u+c,f+g,v+B).normalize(),this}intersectsObject(A){const e=A.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(Cn)}intersectsSprite(A){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(A.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(A){const e=this.planes,t=A.center,i=-A.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<i)return!1;return!0}intersectsBox(A){const e=this.planes;for(let t=0;t<6;t++){const i=e[t];if(ji.x=i.normal.x>0?A.max.x:A.min.x,ji.y=i.normal.y>0?A.max.y:A.min.y,ji.z=i.normal.z>0?A.max.z:A.min.z,i.distanceToPoint(ji)<0)return!1}return!0}containsPoint(A){const e=this.planes;for(let t=0;t<6;t++)if(e[t].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vc(){let n=null,A=!1,e=null,t=null;function i(r,s){e(r,s),t=n.requestAnimationFrame(i)}return{start:function(){A!==!0&&e!==null&&(t=n.requestAnimationFrame(i),A=!0)},stop:function(){n.cancelAnimationFrame(t),A=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Rf(n,A){const e=A.isWebGL2,t=new WeakMap;function i(l,c){const u=l.array,h=l.usage,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,u,h),l.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,c,u){const h=c.array,p=c.updateRange;n.bindBuffer(u,l),p.count===-1?n.bufferSubData(u,0,h):(e?n.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(u,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=t.get(l);c&&(n.deleteBuffer(c.buffer),t.delete(l))}function o(l,c){if(l.isGLBufferAttribute){const h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=t.get(l);u===void 0?t.set(l,i(l,c)):u.version<l.version&&(r(u.buffer,l,c),u.version=l.version)}return{get:s,remove:a,update:o}}class Xa extends At{constructor(A=1,e=1,t=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:e,widthSegments:t,heightSegments:i};const r=A/2,s=e/2,a=Math.floor(t),o=Math.floor(i),l=a+1,c=o+1,u=A/a,h=e/o,p=[],g=[],f=[],d=[];for(let m=0;m<c;m++){const B=m*h-s;for(let v=0;v<l;v++){const x=v*u-r;g.push(x,-B,0),f.push(0,0,1),d.push(v/a),d.push(1-m/o)}}for(let m=0;m<o;m++)for(let B=0;B<a;B++){const v=B+l*m,x=B+l*(m+1),C=B+1+l*(m+1),y=B+1+l*m;p.push(v,x,y),p.push(x,C,y)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(d,2))}static fromJSON(A){return new Xa(A.width,A.height,A.widthSegments,A.heightSegments)}}var Pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zf="vec3 transformed = vec3( position );",kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
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
#endif`,Xf=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Jf=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nd=`#define PI 3.141592653589793
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
}`,id=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rd=`vec3 transformedNormal = objectNormal;
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
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,od=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ud=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hd=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cd=`#ifdef USE_GRADIENTMAP
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
}`,_d=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yd=`uniform bool receiveShadow;
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
#endif`,Ed=`#if defined( USE_ENVMAP )
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
#endif`,Md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Id=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
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
#endif`,Td=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
}`,Ld=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Rd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Od=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jd=`#ifdef USE_MORPHNORMALS
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
#endif`,Yd=`#ifdef USE_MORPHTARGETS
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
#endif`,Zd=`#ifdef USE_MORPHTARGETS
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
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
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
vec3 geometryNormal = normal;`,jd=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
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
#endif`,np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,op=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bp=`float getShadowMask() {
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
}`,wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,Cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ep=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Mp=`#ifdef USE_TRANSMISSION
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
		if ( isinf( attenuationDistance ) ) {
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
#endif`,Qp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Sp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,bp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ip=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Tp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Lp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rp=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <encodings_fragment>
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vp=`#include <common>
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
}`,Kp=`#if DEPTH_PACKING == 3200
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
}`,zp=`#define DISTANCE
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
}`,kp=`#define DISTANCE
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jp=`uniform float scale;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,Zp=`#include <common>
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
}`,qp=`uniform vec3 diffuse;
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
}`,jp=`#define LAMBERT
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
}`,$p=`#define LAMBERT
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define MATCAP
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
}`,eg=`#define MATCAP
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
}`,tg=`#define NORMAL
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
}`,ng=`#define NORMAL
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
}`,ig=`#define PHONG
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
}`,rg=`#define PHONG
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
}`,sg=`#define STANDARD
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
}`,ag=`#define STANDARD
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
}`,og=`#define TOON
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
}`,lg=`#define TOON
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
}`,cg=`uniform float size;
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
}`,ug=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,fg=`uniform vec3 color;
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
}`,dg=`uniform float rotation;
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
}`,pg=`uniform vec3 diffuse;
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
}`,FA={alphamap_fragment:Pf,alphamap_pars_fragment:Of,alphatest_fragment:Nf,alphatest_pars_fragment:Gf,aomap_fragment:Vf,aomap_pars_fragment:Kf,begin_vertex:zf,beginnormal_vertex:kf,bsdfs:Wf,iridescence_fragment:Xf,bumpmap_pars_fragment:Jf,clipping_planes_fragment:Yf,clipping_planes_pars_fragment:Zf,clipping_planes_pars_vertex:qf,clipping_planes_vertex:jf,color_fragment:$f,color_pars_fragment:Ad,color_pars_vertex:ed,color_vertex:td,common:nd,cube_uv_reflection_fragment:id,defaultnormal_vertex:rd,displacementmap_pars_vertex:sd,displacementmap_vertex:ad,emissivemap_fragment:od,emissivemap_pars_fragment:ld,encodings_fragment:cd,encodings_pars_fragment:ud,envmap_fragment:hd,envmap_common_pars_fragment:fd,envmap_pars_fragment:dd,envmap_pars_vertex:pd,envmap_physical_pars_fragment:Ed,envmap_vertex:gd,fog_vertex:md,fog_pars_vertex:Bd,fog_fragment:wd,fog_pars_fragment:vd,gradientmap_pars_fragment:Cd,lightmap_fragment:_d,lightmap_pars_fragment:xd,lights_lambert_fragment:Ud,lights_lambert_pars_fragment:Fd,lights_pars_begin:yd,lights_toon_fragment:Md,lights_toon_pars_fragment:Qd,lights_phong_fragment:Sd,lights_phong_pars_fragment:bd,lights_physical_fragment:Id,lights_physical_pars_fragment:Td,lights_fragment_begin:Ld,lights_fragment_maps:Hd,lights_fragment_end:Dd,logdepthbuf_fragment:Rd,logdepthbuf_pars_fragment:Pd,logdepthbuf_pars_vertex:Od,logdepthbuf_vertex:Nd,map_fragment:Gd,map_pars_fragment:Vd,map_particle_fragment:Kd,map_particle_pars_fragment:zd,metalnessmap_fragment:kd,metalnessmap_pars_fragment:Wd,morphcolor_vertex:Xd,morphnormal_vertex:Jd,morphtarget_pars_vertex:Yd,morphtarget_vertex:Zd,normal_fragment_begin:qd,normal_fragment_maps:jd,normal_pars_fragment:$d,normal_pars_vertex:Ap,normal_vertex:ep,normalmap_pars_fragment:tp,clearcoat_normal_fragment_begin:np,clearcoat_normal_fragment_maps:ip,clearcoat_pars_fragment:rp,iridescence_pars_fragment:sp,output_fragment:ap,packing:op,premultiplied_alpha_fragment:lp,project_vertex:cp,dithering_fragment:up,dithering_pars_fragment:hp,roughnessmap_fragment:fp,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:pp,shadowmap_pars_vertex:gp,shadowmap_vertex:mp,shadowmask_pars_fragment:Bp,skinbase_vertex:wp,skinning_pars_vertex:vp,skinning_vertex:Cp,skinnormal_vertex:_p,specularmap_fragment:xp,specularmap_pars_fragment:Up,tonemapping_fragment:Fp,tonemapping_pars_fragment:yp,transmission_fragment:Ep,transmission_pars_fragment:Mp,uv_pars_fragment:Qp,uv_pars_vertex:Sp,uv_vertex:bp,uv2_pars_fragment:Ip,uv2_pars_vertex:Tp,uv2_vertex:Lp,worldpos_vertex:Hp,background_vert:Dp,background_frag:Rp,backgroundCube_vert:Pp,backgroundCube_frag:Op,cube_vert:Np,cube_frag:Gp,depth_vert:Vp,depth_frag:Kp,distanceRGBA_vert:zp,distanceRGBA_frag:kp,equirect_vert:Wp,equirect_frag:Xp,linedashed_vert:Jp,linedashed_frag:Yp,meshbasic_vert:Zp,meshbasic_frag:qp,meshlambert_vert:jp,meshlambert_frag:$p,meshmatcap_vert:Ag,meshmatcap_frag:eg,meshnormal_vert:tg,meshnormal_frag:ng,meshphong_vert:ig,meshphong_frag:rg,meshphysical_vert:sg,meshphysical_frag:ag,meshtoon_vert:og,meshtoon_frag:lg,points_vert:cg,points_frag:ug,shadow_vert:hg,shadow_frag:fg,sprite_vert:dg,sprite_frag:pg},nA={common:{diffuse:{value:new NA(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new He},uv2Transform:{value:new He},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new IA(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new NA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new NA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new NA(16777215)},opacity:{value:1},center:{value:new IA(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new He}}},it={basic:{uniforms:xe([nA.common,nA.specularmap,nA.envmap,nA.aomap,nA.lightmap,nA.fog]),vertexShader:FA.meshbasic_vert,fragmentShader:FA.meshbasic_frag},lambert:{uniforms:xe([nA.common,nA.specularmap,nA.envmap,nA.aomap,nA.lightmap,nA.emissivemap,nA.bumpmap,nA.normalmap,nA.displacementmap,nA.fog,nA.lights,{emissive:{value:new NA(0)}}]),vertexShader:FA.meshlambert_vert,fragmentShader:FA.meshlambert_frag},phong:{uniforms:xe([nA.common,nA.specularmap,nA.envmap,nA.aomap,nA.lightmap,nA.emissivemap,nA.bumpmap,nA.normalmap,nA.displacementmap,nA.fog,nA.lights,{emissive:{value:new NA(0)},specular:{value:new NA(1118481)},shininess:{value:30}}]),vertexShader:FA.meshphong_vert,fragmentShader:FA.meshphong_frag},standard:{uniforms:xe([nA.common,nA.envmap,nA.aomap,nA.lightmap,nA.emissivemap,nA.bumpmap,nA.normalmap,nA.displacementmap,nA.roughnessmap,nA.metalnessmap,nA.fog,nA.lights,{emissive:{value:new NA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:FA.meshphysical_vert,fragmentShader:FA.meshphysical_frag},toon:{uniforms:xe([nA.common,nA.aomap,nA.lightmap,nA.emissivemap,nA.bumpmap,nA.normalmap,nA.displacementmap,nA.gradientmap,nA.fog,nA.lights,{emissive:{value:new NA(0)}}]),vertexShader:FA.meshtoon_vert,fragmentShader:FA.meshtoon_frag},matcap:{uniforms:xe([nA.common,nA.bumpmap,nA.normalmap,nA.displacementmap,nA.fog,{matcap:{value:null}}]),vertexShader:FA.meshmatcap_vert,fragmentShader:FA.meshmatcap_frag},points:{uniforms:xe([nA.points,nA.fog]),vertexShader:FA.points_vert,fragmentShader:FA.points_frag},dashed:{uniforms:xe([nA.common,nA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:FA.linedashed_vert,fragmentShader:FA.linedashed_frag},depth:{uniforms:xe([nA.common,nA.displacementmap]),vertexShader:FA.depth_vert,fragmentShader:FA.depth_frag},normal:{uniforms:xe([nA.common,nA.bumpmap,nA.normalmap,nA.displacementmap,{opacity:{value:1}}]),vertexShader:FA.meshnormal_vert,fragmentShader:FA.meshnormal_frag},sprite:{uniforms:xe([nA.sprite,nA.fog]),vertexShader:FA.sprite_vert,fragmentShader:FA.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:FA.background_vert,fragmentShader:FA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:FA.backgroundCube_vert,fragmentShader:FA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:FA.cube_vert,fragmentShader:FA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:FA.equirect_vert,fragmentShader:FA.equirect_frag},distanceRGBA:{uniforms:xe([nA.common,nA.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:FA.distanceRGBA_vert,fragmentShader:FA.distanceRGBA_frag},shadow:{uniforms:xe([nA.lights,nA.fog,{color:{value:new NA(0)},opacity:{value:1}}]),vertexShader:FA.shadow_vert,fragmentShader:FA.shadow_frag}};it.physical={uniforms:xe([it.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new IA(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new NA(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new IA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new NA(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new NA(1,1,1)},specularColorMap:{value:null}}]),vertexShader:FA.meshphysical_vert,fragmentShader:FA.meshphysical_frag};const $i={r:0,b:0,g:0};function gg(n,A,e,t,i,r,s){const a=new NA(0);let o=r===!0?0:1,l,c,u=null,h=0,p=null;function g(d,m){let B=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?e:A).get(v));const x=n.xr,C=x.getSession&&x.getSession();C&&C.environmentBlendMode==="additive"&&(v=null),v===null?f(a,o):v&&v.isColor&&(f(v,1),B=!0),(n.autoClear||B)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===kr)?(c===void 0&&(c=new Me(new Li(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Kn(it.backgroundCube.uniforms),vertexShader:it.backgroundCube.vertexShader,fragmentShader:it.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=v.encoding!==VA,(u!==v||h!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,p=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Me(new Xa(2,2),new on({name:"BackgroundMaterial",uniforms:Kn(it.background.uniforms),vertexShader:it.background.vertexShader,fragmentShader:it.background.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=v.encoding!==VA,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,p=n.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function f(d,m){d.getRGB($i,Oc(n)),t.buffers.color.setClear($i.r,$i.g,$i.b,m,s)}return{getClearColor:function(){return a},setClearColor:function(d,m=1){a.set(d),o=m,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(d){o=d,f(a,o)},render:g}}function mg(n,A,e,t){const i=n.getParameter(34921),r=t.isWebGL2?null:A.get("OES_vertex_array_object"),s=t.isWebGL2||r!==null,a={},o=d(null);let l=o,c=!1;function u(I,V,J,Y,K){let Z=!1;if(s){const q=f(Y,J,V);l!==q&&(l=q,p(l.object)),Z=m(I,Y,J,K),Z&&B(I,Y,J,K)}else{const q=V.wireframe===!0;(l.geometry!==Y.id||l.program!==J.id||l.wireframe!==q)&&(l.geometry=Y.id,l.program=J.id,l.wireframe=q,Z=!0)}K!==null&&e.update(K,34963),(Z||c)&&(c=!1,w(I,V,J,Y),K!==null&&n.bindBuffer(34963,e.get(K).buffer))}function h(){return t.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(I){return t.isWebGL2?n.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return t.isWebGL2?n.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function f(I,V,J){const Y=J.wireframe===!0;let K=a[I.id];K===void 0&&(K={},a[I.id]=K);let Z=K[V.id];Z===void 0&&(Z={},K[V.id]=Z);let q=Z[Y];return q===void 0&&(q=d(h()),Z[Y]=q),q}function d(I){const V=[],J=[],Y=[];for(let K=0;K<i;K++)V[K]=0,J[K]=0,Y[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:J,attributeDivisors:Y,object:I,attributes:{},index:null}}function m(I,V,J,Y){const K=l.attributes,Z=V.attributes;let q=0;const lA=J.getAttributes();for(const D in lA)if(lA[D].location>=0){const eA=K[D];let AA=Z[D];if(AA===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(AA=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(AA=I.instanceColor)),eA===void 0||eA.attribute!==AA||AA&&eA.data!==AA.data)return!0;q++}return l.attributesNum!==q||l.index!==Y}function B(I,V,J,Y){const K={},Z=V.attributes;let q=0;const lA=J.getAttributes();for(const D in lA)if(lA[D].location>=0){let eA=Z[D];eA===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(eA=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(eA=I.instanceColor));const AA={};AA.attribute=eA,eA&&eA.data&&(AA.data=eA.data),K[D]=AA,q++}l.attributes=K,l.attributesNum=q,l.index=Y}function v(){const I=l.newAttributes;for(let V=0,J=I.length;V<J;V++)I[V]=0}function x(I){C(I,0)}function C(I,V){const J=l.newAttributes,Y=l.enabledAttributes,K=l.attributeDivisors;J[I]=1,Y[I]===0&&(n.enableVertexAttribArray(I),Y[I]=1),K[I]!==V&&((t.isWebGL2?n:A.get("ANGLE_instanced_arrays"))[t.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,V),K[I]=V)}function y(){const I=l.newAttributes,V=l.enabledAttributes;for(let J=0,Y=V.length;J<Y;J++)V[J]!==I[J]&&(n.disableVertexAttribArray(J),V[J]=0)}function M(I,V,J,Y,K,Z){t.isWebGL2===!0&&(J===5124||J===5125)?n.vertexAttribIPointer(I,V,J,K,Z):n.vertexAttribPointer(I,V,J,Y,K,Z)}function w(I,V,J,Y){if(t.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;v();const K=Y.attributes,Z=J.getAttributes(),q=V.defaultAttributeValues;for(const lA in Z){const D=Z[lA];if(D.location>=0){let k=K[lA];if(k===void 0&&(lA==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),lA==="instanceColor"&&I.instanceColor&&(k=I.instanceColor)),k!==void 0){const eA=k.normalized,AA=k.itemSize,R=e.get(k);if(R===void 0)continue;const wA=R.buffer,fA=R.type,dA=R.bytesPerElement;if(k.isInterleavedBufferAttribute){const cA=k.data,OA=cA.stride,UA=k.offset;if(cA.isInstancedInterleavedBuffer){for(let CA=0;CA<D.locationSize;CA++)C(D.location+CA,cA.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=cA.meshPerAttribute*cA.count)}else for(let CA=0;CA<D.locationSize;CA++)x(D.location+CA);n.bindBuffer(34962,wA);for(let CA=0;CA<D.locationSize;CA++)M(D.location+CA,AA/D.locationSize,fA,eA,OA*dA,(UA+AA/D.locationSize*CA)*dA)}else{if(k.isInstancedBufferAttribute){for(let cA=0;cA<D.locationSize;cA++)C(D.location+cA,k.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let cA=0;cA<D.locationSize;cA++)x(D.location+cA);n.bindBuffer(34962,wA);for(let cA=0;cA<D.locationSize;cA++)M(D.location+cA,AA/D.locationSize,fA,eA,AA*dA,AA/D.locationSize*cA*dA)}}else if(q!==void 0){const eA=q[lA];if(eA!==void 0)switch(eA.length){case 2:n.vertexAttrib2fv(D.location,eA);break;case 3:n.vertexAttrib3fv(D.location,eA);break;case 4:n.vertexAttrib4fv(D.location,eA);break;default:n.vertexAttrib1fv(D.location,eA)}}}}y()}function U(){X();for(const I in a){const V=a[I];for(const J in V){const Y=V[J];for(const K in Y)g(Y[K].object),delete Y[K];delete V[J]}delete a[I]}}function Q(I){if(a[I.id]===void 0)return;const V=a[I.id];for(const J in V){const Y=V[J];for(const K in Y)g(Y[K].object),delete Y[K];delete V[J]}delete a[I.id]}function G(I){for(const V in a){const J=a[V];if(J[I.id]===void 0)continue;const Y=J[I.id];for(const K in Y)g(Y[K].object),delete Y[K];delete J[I.id]}}function X(){b(),c=!0,l!==o&&(l=o,p(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:X,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:Q,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:x,disableUnusedAttributes:y}}function Bg(n,A,e,t){const i=t.isWebGL2;let r;function s(l){r=l}function a(l,c){n.drawArrays(r,l,c),e.update(c,r,1)}function o(l,c,u){if(u===0)return;let h,p;if(i)h=n,p="drawArraysInstanced";else if(h=A.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,l,c,u),e.update(c,r,u)}this.setMode=s,this.render=a,this.renderInstances=o}function wg(n,A,e){let t;function i(){if(t!==void 0)return t;if(A.has("EXT_texture_filter_anisotropic")===!0){const M=A.get("EXT_texture_filter_anisotropic");t=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else t=0;return t}function r(M){if(M==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let a=e.precision!==void 0?e.precision:"highp";const o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=s||A.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,u=n.getParameter(34930),h=n.getParameter(35660),p=n.getParameter(3379),g=n.getParameter(34076),f=n.getParameter(34921),d=n.getParameter(36347),m=n.getParameter(36348),B=n.getParameter(36349),v=h>0,x=s||A.has("OES_texture_float"),C=v&&x,y=s?n.getParameter(36183):0;return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:d,maxVaryings:m,maxFragmentUniforms:B,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:C,maxSamples:y}}function vg(n){const A=this;let e=null,t=0,i=!1,r=!1;const s=new Xt,a=new He,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||t!==0||i;return i=h,t=u.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){e=c(u,h,0)},this.setState=function(u,h,p){const g=u.clippingPlanes,f=u.clipIntersection,d=u.clipShadows,m=n.get(u);if(!i||g===null||g.length===0||r&&!d)r?c(null):l();else{const B=r?0:t,v=B*4;let x=m.clippingState||null;o.value=x,x=c(g,h,v,p);for(let C=0;C!==v;++C)x[C]=e[C];m.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=B}};function l(){o.value!==e&&(o.value=e,o.needsUpdate=t>0),A.numPlanes=t,A.numIntersection=0}function c(u,h,p,g){const f=u!==null?u.length:0;let d=null;if(f!==0){if(d=o.value,g!==!0||d===null){const m=p+f*4,B=h.matrixWorldInverse;a.getNormalMatrix(B),(d===null||d.length<m)&&(d=new Float32Array(m));for(let v=0,x=p;v!==f;++v,x+=4)s.copy(u[v]).applyMatrix4(B,a),s.normal.toArray(d,x),d[x+3]=s.constant}o.value=d,o.needsUpdate=!0}return A.numPlanes=f,A.numIntersection=0,d}}function Cg(n){let A=new WeakMap;function e(s,a){return a===ha?s.mapping=Nn:a===fa&&(s.mapping=Gn),s}function t(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===ha||a===fa)if(A.has(s)){const o=A.get(s).texture;return e(o,s.mapping)}else{const o=s.image;if(o&&o.height>0){const l=new Lf(o.height/2);return l.fromEquirectangularTexture(n,s),A.set(s,l),s.addEventListener("dispose",i),e(l.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const o=A.get(a);o!==void 0&&(A.delete(a),o.dispose())}function r(){A=new WeakMap}return{get:t,dispose:r}}class Kc extends Nc{constructor(A=-1,e=1,t=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=e,this.top=t,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(A,e){return super.copy(A,e),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,e,t,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=t-A,s=t+A,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const e=super.toJSON(A);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const In=4,Al=[.125,.215,.35,.446,.526,.582],Yt=20,Ds=new Kc,el=new NA;let Rs=null;const Jt=(1+Math.sqrt(5))/2,_n=1/Jt,tl=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Jt,_n),new T(0,Jt,-_n),new T(_n,0,Jt),new T(-_n,0,Jt),new T(Jt,_n,0),new T(-Jt,_n,0)];class nl{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,e=0,t=.1,i=100){Rs=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(A,t,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(A,e=null){return this._fromTexture(A,e)}fromCubemap(A,e=null){return this._fromTexture(A,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(Rs),A.scissorTest=!1,Ar(A,0,0,A.width,A.height)}_fromTexture(A,e){A.mapping===Nn||A.mapping===Gn?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),Rs=this._renderer.getRenderTarget();const t=e||this._allocateTargets();return this._textureToCubeUV(A,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,t={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:yi,format:$e,encoding:sn,depthBuffer:!1},i=il(A,e,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=il(A,e,t);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_g(r)),this._blurMaterial=xg(r,A,e)}return i}_compileMaterial(A){const e=new Me(this._lodPlanes[0],A);this._renderer.compile(e,Ds)}_sceneToCubeUV(A,e,t,i){const a=new Ke(90,1,e,t),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,h=c.toneMapping;c.getClearColor(el),c.toneMapping=vt,c.autoClear=!1;const p=new Dc({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new Me(new Li,p);let f=!1;const d=A.background;d?d.isColor&&(p.color.copy(d),A.background=null,f=!0):(p.color.copy(el),f=!0);for(let m=0;m<6;m++){const B=m%3;B===0?(a.up.set(0,o[m],0),a.lookAt(l[m],0,0)):B===1?(a.up.set(0,0,o[m]),a.lookAt(0,l[m],0)):(a.up.set(0,o[m],0),a.lookAt(0,0,l[m]));const v=this._cubeSize;Ar(i,B*v,m>2?v:0,v,v),c.setRenderTarget(i),f&&c.render(g,a),c.render(A,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=u,A.background=d}_textureToCubeUV(A,e){const t=this._renderer,i=A.mapping===Nn||A.mapping===Gn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=A;const o=this._cubeSize;Ar(e,0,0,3*o,2*o),t.setRenderTarget(e),t.render(s,Ds)}_applyPMREM(A){const e=this._renderer,t=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=tl[(i-1)%tl.length];this._blur(A,i-1,i,r,s)}e.autoClear=t}_blur(A,e,t,i,r){const s=this._pingPongRenderTarget;this._halfBlur(A,s,e,t,i,"latitudinal",r),this._halfBlur(s,A,t,t,i,"longitudinal",r)}_halfBlur(A,e,t,i,r,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Me(this._lodPlanes[i],l),h=l.uniforms,p=this._sizeLods[t]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Yt-1),f=r/g,d=isFinite(r)?1+Math.floor(c*f):Yt;d>Yt&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Yt}`);const m=[];let B=0;for(let M=0;M<Yt;++M){const w=M/f,U=Math.exp(-w*w/2);m.push(U),M===0?B+=U:M<d&&(B+=2*U)}for(let M=0;M<m.length;M++)m[M]=m[M]/B;h.envMap.value=A.texture,h.samples.value=d,h.weights.value=m,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-t;const x=this._sizeLods[i],C=3*x*(i>v-In?i-v+In:0),y=4*(this._cubeSize-x);Ar(e,C,y,3*x,2*x),o.setRenderTarget(e),o.render(u,Ds)}}function _g(n){const A=[],e=[],t=[];let i=n;const r=n-In+1+Al.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);let o=1/a;s>n-In?o=Al[s-n+In-1]:s===0&&(o=0),t.push(o);const l=1/(a-2),c=-l,u=1+l,h=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,f=3,d=2,m=1,B=new Float32Array(f*g*p),v=new Float32Array(d*g*p),x=new Float32Array(m*g*p);for(let y=0;y<p;y++){const M=y%3*2/3-1,w=y>2?0:-1,U=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];B.set(U,f*g*y),v.set(h,d*g*y);const Q=[y,y,y,y,y,y];x.set(Q,m*g*y)}const C=new At;C.setAttribute("position",new st(B,f)),C.setAttribute("uv",new st(v,d)),C.setAttribute("faceIndex",new st(x,m)),A.push(C),i>In&&i--}return{lodPlanes:A,sizeLods:e,sigmas:t}}function il(n,A,e){const t=new an(n,A,e);return t.texture.mapping=kr,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function Ar(n,A,e,t,i){n.viewport.set(A,e,t,i),n.scissor.set(A,e,t,i)}function xg(n,A,e){const t=new Float32Array(Yt),i=new T(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Yt,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:Lt,depthTest:!1,depthWrite:!1})}function rl(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:Lt,depthTest:!1,depthWrite:!1})}function sl(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lt,depthTest:!1,depthWrite:!1})}function Ja(){return`

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
	`}function Ug(n){let A=new WeakMap,e=null;function t(a){if(a&&a.isTexture){const o=a.mapping,l=o===ha||o===fa,c=o===Nn||o===Gn;if(l||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=A.get(a);return e===null&&(e=new nl(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),A.set(a,u),u.texture}else{if(A.has(a))return A.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||c&&u&&i(u)){e===null&&(e=new nl(n));const h=l?e.fromEquirectangular(a):e.fromCubemap(a);return A.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function i(a){let o=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&o++;return o===l}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=A.get(o);l!==void 0&&(A.delete(o),l.dispose())}function s(){A=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:t,dispose:s}}function Fg(n){const A={};function e(t){if(A[t]!==void 0)return A[t];let i;switch(t){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(t)}return A[t]=i,i}return{has:function(t){return e(t)!==null},init:function(t){t.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(t){const i=e(t);return i===null&&console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),i}}}function yg(n,A,e,t){const i={},r=new WeakMap;function s(u){const h=u.target;h.index!==null&&A.remove(h.index);for(const g in h.attributes)A.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete i[h.id];const p=r.get(h);p&&(A.remove(p),r.delete(h)),t.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,e.memory.geometries++),h}function o(u){const h=u.attributes;for(const g in h)A.update(h[g],34962);const p=u.morphAttributes;for(const g in p){const f=p[g];for(let d=0,m=f.length;d<m;d++)A.update(f[d],34962)}}function l(u){const h=[],p=u.index,g=u.attributes.position;let f=0;if(p!==null){const B=p.array;f=p.version;for(let v=0,x=B.length;v<x;v+=3){const C=B[v+0],y=B[v+1],M=B[v+2];h.push(C,y,y,M,M,C)}}else{const B=g.array;f=g.version;for(let v=0,x=B.length/3-1;v<x;v+=3){const C=v+0,y=v+1,M=v+2;h.push(C,y,y,M,M,C)}}const d=new(Sc(h)?Pc:Rc)(h,1);d.version=f;const m=r.get(u);m&&A.remove(m),r.set(u,d)}function c(u){const h=r.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:o,getWireframeAttribute:c}}function Eg(n,A,e,t){const i=t.isWebGL2;let r;function s(h){r=h}let a,o;function l(h){a=h.type,o=h.bytesPerElement}function c(h,p){n.drawElements(r,p,a,h*o),e.update(p,r,1)}function u(h,p,g){if(g===0)return;let f,d;if(i)f=n,d="drawElementsInstanced";else if(f=A.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,p,a,h*o,g),e.update(p,r,g)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=u}function Mg(n){const A={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function t(r,s,a){switch(e.calls++,s){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:A,render:e,programs:null,autoReset:!0,reset:i,update:t}}function Qg(n,A){return n[0]-A[0]}function Sg(n,A){return Math.abs(A[1])-Math.abs(n[1])}function bg(n,A,e){const t={},i=new Float32Array(8),r=new WeakMap,s=new ce,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function o(l,c,u,h){const p=l.morphTargetInfluences;if(A.isWebGL2===!0){const f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,d=f!==void 0?f.length:0;let m=r.get(c);if(m===void 0||m.count!==d){let J=function(){I.dispose(),r.delete(c),c.removeEventListener("dispose",J)};var g=J;m!==void 0&&m.texture.dispose();const x=c.morphAttributes.position!==void 0,C=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],w=c.morphAttributes.normal||[],U=c.morphAttributes.color||[];let Q=0;x===!0&&(Q=1),C===!0&&(Q=2),y===!0&&(Q=3);let G=c.attributes.position.count*Q,X=1;G>A.maxTextureSize&&(X=Math.ceil(G/A.maxTextureSize),G=A.maxTextureSize);const b=new Float32Array(G*X*4*d),I=new Lc(b,G,X,d);I.type=jt,I.needsUpdate=!0;const V=Q*4;for(let Y=0;Y<d;Y++){const K=M[Y],Z=w[Y],q=U[Y],lA=G*X*4*Y;for(let D=0;D<K.count;D++){const k=D*V;x===!0&&(s.fromBufferAttribute(K,D),b[lA+k+0]=s.x,b[lA+k+1]=s.y,b[lA+k+2]=s.z,b[lA+k+3]=0),C===!0&&(s.fromBufferAttribute(Z,D),b[lA+k+4]=s.x,b[lA+k+5]=s.y,b[lA+k+6]=s.z,b[lA+k+7]=0),y===!0&&(s.fromBufferAttribute(q,D),b[lA+k+8]=s.x,b[lA+k+9]=s.y,b[lA+k+10]=s.z,b[lA+k+11]=q.itemSize===4?s.w:1)}}m={count:d,texture:I,size:new IA(G,X)},r.set(c,m),c.addEventListener("dispose",J)}let B=0;for(let x=0;x<p.length;x++)B+=p[x];const v=c.morphTargetsRelative?1:1-B;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",p),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const f=p===void 0?0:p.length;let d=t[c.id];if(d===void 0||d.length!==f){d=[];for(let C=0;C<f;C++)d[C]=[C,0];t[c.id]=d}for(let C=0;C<f;C++){const y=d[C];y[0]=C,y[1]=p[C]}d.sort(Sg);for(let C=0;C<8;C++)C<f&&d[C][1]?(a[C][0]=d[C][0],a[C][1]=d[C][1]):(a[C][0]=Number.MAX_SAFE_INTEGER,a[C][1]=0);a.sort(Qg);const m=c.morphAttributes.position,B=c.morphAttributes.normal;let v=0;for(let C=0;C<8;C++){const y=a[C],M=y[0],w=y[1];M!==Number.MAX_SAFE_INTEGER&&w?(m&&c.getAttribute("morphTarget"+C)!==m[M]&&c.setAttribute("morphTarget"+C,m[M]),B&&c.getAttribute("morphNormal"+C)!==B[M]&&c.setAttribute("morphNormal"+C,B[M]),i[C]=w,v+=w):(m&&c.hasAttribute("morphTarget"+C)===!0&&c.deleteAttribute("morphTarget"+C),B&&c.hasAttribute("morphNormal"+C)===!0&&c.deleteAttribute("morphNormal"+C),i[C]=0)}const x=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",i)}}return{update:o}}function Ig(n,A,e,t){let i=new WeakMap;function r(o){const l=t.render.frame,c=o.geometry,u=A.get(o,c);return i.get(u)!==l&&(A.update(u),i.set(u,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),e.update(o.instanceMatrix,34962),o.instanceColor!==null&&e.update(o.instanceColor,34962)),u}function s(){i=new WeakMap}function a(o){const l=o.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:s}}const zc=new Qe,kc=new Lc,Wc=new mf,Xc=new Gc,al=[],ol=[],ll=new Float32Array(16),cl=new Float32Array(9),ul=new Float32Array(4);function Xn(n,A,e){const t=n[0];if(t<=0||t>0)return n;const i=A*e;let r=al[i];if(r===void 0&&(r=new Float32Array(i),al[i]=r),A!==0){t.toArray(r,0);for(let s=1,a=0;s!==A;++s)a+=e,n[s].toArray(r,a)}return r}function ne(n,A){if(n.length!==A.length)return!1;for(let e=0,t=n.length;e<t;e++)if(n[e]!==A[e])return!1;return!0}function ie(n,A){for(let e=0,t=A.length;e<t;e++)n[e]=A[e]}function Xr(n,A){let e=ol[A];e===void 0&&(e=new Int32Array(A),ol[A]=e);for(let t=0;t!==A;++t)e[t]=n.allocateTextureUnit();return e}function Tg(n,A){const e=this.cache;e[0]!==A&&(n.uniform1f(this.addr,A),e[0]=A)}function Lg(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y)&&(n.uniform2f(this.addr,A.x,A.y),e[0]=A.x,e[1]=A.y);else{if(ne(e,A))return;n.uniform2fv(this.addr,A),ie(e,A)}}function Hg(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z)&&(n.uniform3f(this.addr,A.x,A.y,A.z),e[0]=A.x,e[1]=A.y,e[2]=A.z);else if(A.r!==void 0)(e[0]!==A.r||e[1]!==A.g||e[2]!==A.b)&&(n.uniform3f(this.addr,A.r,A.g,A.b),e[0]=A.r,e[1]=A.g,e[2]=A.b);else{if(ne(e,A))return;n.uniform3fv(this.addr,A),ie(e,A)}}function Dg(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z||e[3]!==A.w)&&(n.uniform4f(this.addr,A.x,A.y,A.z,A.w),e[0]=A.x,e[1]=A.y,e[2]=A.z,e[3]=A.w);else{if(ne(e,A))return;n.uniform4fv(this.addr,A),ie(e,A)}}function Rg(n,A){const e=this.cache,t=A.elements;if(t===void 0){if(ne(e,A))return;n.uniformMatrix2fv(this.addr,!1,A),ie(e,A)}else{if(ne(e,t))return;ul.set(t),n.uniformMatrix2fv(this.addr,!1,ul),ie(e,t)}}function Pg(n,A){const e=this.cache,t=A.elements;if(t===void 0){if(ne(e,A))return;n.uniformMatrix3fv(this.addr,!1,A),ie(e,A)}else{if(ne(e,t))return;cl.set(t),n.uniformMatrix3fv(this.addr,!1,cl),ie(e,t)}}function Og(n,A){const e=this.cache,t=A.elements;if(t===void 0){if(ne(e,A))return;n.uniformMatrix4fv(this.addr,!1,A),ie(e,A)}else{if(ne(e,t))return;ll.set(t),n.uniformMatrix4fv(this.addr,!1,ll),ie(e,t)}}function Ng(n,A){const e=this.cache;e[0]!==A&&(n.uniform1i(this.addr,A),e[0]=A)}function Gg(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y)&&(n.uniform2i(this.addr,A.x,A.y),e[0]=A.x,e[1]=A.y);else{if(ne(e,A))return;n.uniform2iv(this.addr,A),ie(e,A)}}function Vg(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z)&&(n.uniform3i(this.addr,A.x,A.y,A.z),e[0]=A.x,e[1]=A.y,e[2]=A.z);else{if(ne(e,A))return;n.uniform3iv(this.addr,A),ie(e,A)}}function Kg(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z||e[3]!==A.w)&&(n.uniform4i(this.addr,A.x,A.y,A.z,A.w),e[0]=A.x,e[1]=A.y,e[2]=A.z,e[3]=A.w);else{if(ne(e,A))return;n.uniform4iv(this.addr,A),ie(e,A)}}function zg(n,A){const e=this.cache;e[0]!==A&&(n.uniform1ui(this.addr,A),e[0]=A)}function kg(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y)&&(n.uniform2ui(this.addr,A.x,A.y),e[0]=A.x,e[1]=A.y);else{if(ne(e,A))return;n.uniform2uiv(this.addr,A),ie(e,A)}}function Wg(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z)&&(n.uniform3ui(this.addr,A.x,A.y,A.z),e[0]=A.x,e[1]=A.y,e[2]=A.z);else{if(ne(e,A))return;n.uniform3uiv(this.addr,A),ie(e,A)}}function Xg(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z||e[3]!==A.w)&&(n.uniform4ui(this.addr,A.x,A.y,A.z,A.w),e[0]=A.x,e[1]=A.y,e[2]=A.z,e[3]=A.w);else{if(ne(e,A))return;n.uniform4uiv(this.addr,A),ie(e,A)}}function Jg(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTexture2D(A||zc,i)}function Yg(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTexture3D(A||Wc,i)}function Zg(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTextureCube(A||Xc,i)}function qg(n,A,e){const t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTexture2DArray(A||kc,i)}function jg(n){switch(n){case 5126:return Tg;case 35664:return Lg;case 35665:return Hg;case 35666:return Dg;case 35674:return Rg;case 35675:return Pg;case 35676:return Og;case 5124:case 35670:return Ng;case 35667:case 35671:return Gg;case 35668:case 35672:return Vg;case 35669:case 35673:return Kg;case 5125:return zg;case 36294:return kg;case 36295:return Wg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return qg}}function $g(n,A){n.uniform1fv(this.addr,A)}function Am(n,A){const e=Xn(A,this.size,2);n.uniform2fv(this.addr,e)}function em(n,A){const e=Xn(A,this.size,3);n.uniform3fv(this.addr,e)}function tm(n,A){const e=Xn(A,this.size,4);n.uniform4fv(this.addr,e)}function nm(n,A){const e=Xn(A,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function im(n,A){const e=Xn(A,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function rm(n,A){const e=Xn(A,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function sm(n,A){n.uniform1iv(this.addr,A)}function am(n,A){n.uniform2iv(this.addr,A)}function om(n,A){n.uniform3iv(this.addr,A)}function lm(n,A){n.uniform4iv(this.addr,A)}function cm(n,A){n.uniform1uiv(this.addr,A)}function um(n,A){n.uniform2uiv(this.addr,A)}function hm(n,A){n.uniform3uiv(this.addr,A)}function fm(n,A){n.uniform4uiv(this.addr,A)}function dm(n,A,e){const t=this.cache,i=A.length,r=Xr(e,i);ne(t,r)||(n.uniform1iv(this.addr,r),ie(t,r));for(let s=0;s!==i;++s)e.setTexture2D(A[s]||zc,r[s])}function pm(n,A,e){const t=this.cache,i=A.length,r=Xr(e,i);ne(t,r)||(n.uniform1iv(this.addr,r),ie(t,r));for(let s=0;s!==i;++s)e.setTexture3D(A[s]||Wc,r[s])}function gm(n,A,e){const t=this.cache,i=A.length,r=Xr(e,i);ne(t,r)||(n.uniform1iv(this.addr,r),ie(t,r));for(let s=0;s!==i;++s)e.setTextureCube(A[s]||Xc,r[s])}function mm(n,A,e){const t=this.cache,i=A.length,r=Xr(e,i);ne(t,r)||(n.uniform1iv(this.addr,r),ie(t,r));for(let s=0;s!==i;++s)e.setTexture2DArray(A[s]||kc,r[s])}function Bm(n){switch(n){case 5126:return $g;case 35664:return Am;case 35665:return em;case 35666:return tm;case 35674:return nm;case 35675:return im;case 35676:return rm;case 5124:case 35670:return sm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return um;case 36295:return hm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return mm}}class wm{constructor(A,e,t){this.id=A,this.addr=t,this.cache=[],this.setValue=jg(e.type)}}class vm{constructor(A,e,t){this.id=A,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Bm(e.type)}}class Cm{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,e,t){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(A,e[a.id],t)}}}const Ps=/(\w+)(\])?(\[|\.)?/g;function hl(n,A){n.seq.push(A),n.map[A.id]=A}function _m(n,A,e){const t=n.name,i=t.length;for(Ps.lastIndex=0;;){const r=Ps.exec(t),s=Ps.lastIndex;let a=r[1];const o=r[2]==="]",l=r[3];if(o&&(a=a|0),l===void 0||l==="["&&s+2===i){hl(e,l===void 0?new wm(a,n,A):new vm(a,n,A));break}else{let u=e.map[a];u===void 0&&(u=new Cm(a),hl(e,u)),e=u}}}class Er{constructor(A,e){this.seq=[],this.map={};const t=A.getProgramParameter(e,35718);for(let i=0;i<t;++i){const r=A.getActiveUniform(e,i),s=A.getUniformLocation(e,r.name);_m(r,s,this)}}setValue(A,e,t,i){const r=this.map[e];r!==void 0&&r.setValue(A,t,i)}setOptional(A,e,t){const i=e[t];i!==void 0&&this.setValue(A,t,i)}static upload(A,e,t,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],o=t[a.id];o.needsUpdate!==!1&&a.setValue(A,o.value,i)}}static seqWithValue(A,e){const t=[];for(let i=0,r=A.length;i!==r;++i){const s=A[i];s.id in e&&t.push(s)}return t}}function fl(n,A,e){const t=n.createShader(A);return n.shaderSource(t,e),n.compileShader(t),t}let xm=0;function Um(n,A){const e=n.split(`
`),t=[],i=Math.max(A-6,0),r=Math.min(A+6,e.length);for(let s=i;s<r;s++){const a=s+1;t.push(`${a===A?">":" "} ${a}: ${e[s]}`)}return t.join(`
`)}function Fm(n){switch(n){case sn:return["Linear","( value )"];case VA:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function dl(n,A,e){const t=n.getShaderParameter(A,35713),i=n.getShaderInfoLog(A).trim();if(t&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Um(n.getShaderSource(A),s)}else return i}function ym(n,A){const e=Fm(A);return"vec4 "+n+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Em(n,A){let e;switch(A){case Qh:e="Linear";break;case Sh:e="Reinhard";break;case bh:e="OptimizedCineon";break;case Ih:e="ACESFilmic";break;case Th:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Mm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ci).join(`
`)}function Qm(n){const A=[];for(const e in n){const t=n[e];t!==!1&&A.push("#define "+e+" "+t)}return A.join(`
`)}function Sm(n,A){const e={},t=n.getProgramParameter(A,35721);for(let i=0;i<t;i++){const r=n.getActiveAttrib(A,i),s=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[s]={type:r.type,location:n.getAttribLocation(A,s),locationSize:a}}return e}function ci(n){return n!==""}function pl(n,A){const e=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function gl(n,A){return n.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(n){return n.replace(bm,Im)}function Im(n,A){const e=FA[A];if(e===void 0)throw new Error("Can not resolve #include <"+A+">");return Ba(e)}const Tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ml(n){return n.replace(Tm,Lm)}function Lm(n,A,e,t){let i="";for(let r=parseInt(A);r<parseInt(e);r++)i+=t.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Bl(n){let A="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?A+=`
#define HIGH_PRECISION`:n.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function Hm(n){let A="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xc?A="SHADOWMAP_TYPE_PCF":n.shadowMapType===ah?A="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(A="SHADOWMAP_TYPE_VSM"),A}function Dm(n){let A="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Nn:case Gn:A="ENVMAP_TYPE_CUBE";break;case kr:A="ENVMAP_TYPE_CUBE_UV";break}return A}function Rm(n){let A="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Gn:A="ENVMAP_MODE_REFRACTION";break}return A}function Pm(n){let A="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yc:A="ENVMAP_BLENDING_MULTIPLY";break;case Eh:A="ENVMAP_BLENDING_MIX";break;case Mh:A="ENVMAP_BLENDING_ADD";break}return A}function Om(n){const A=n.envMapCubeUVHeight;if(A===null)return null;const e=Math.log2(A)-2,t=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function Nm(n,A,e,t){const i=n.getContext(),r=e.defines;let s=e.vertexShader,a=e.fragmentShader;const o=Hm(e),l=Dm(e),c=Rm(e),u=Pm(e),h=Om(e),p=e.isWebGL2?"":Mm(e),g=Qm(r),f=i.createProgram();let d,m,B=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=[g].filter(ci).join(`
`),d.length>0&&(d+=`
`),m=[p,g].filter(ci).join(`
`),m.length>0&&(m+=`
`)):(d=[Bl(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ci).join(`
`),m=[p,Bl(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vt?"#define TONE_MAPPING":"",e.toneMapping!==vt?FA.tonemapping_pars_fragment:"",e.toneMapping!==vt?Em("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",FA.encodings_pars_fragment,ym("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ci).join(`
`)),s=Ba(s),s=pl(s,e),s=gl(s,e),a=Ba(a),a=pl(a,e),a=gl(a,e),s=ml(s),a=ml(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",e.glslVersion===Vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=B+d+s,x=B+m+a,C=fl(i,35633,v),y=fl(i,35632,x);if(i.attachShader(f,C),i.attachShader(f,y),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),n.debug.checkShaderErrors){const U=i.getProgramInfoLog(f).trim(),Q=i.getShaderInfoLog(C).trim(),G=i.getShaderInfoLog(y).trim();let X=!0,b=!0;if(i.getProgramParameter(f,35714)===!1){X=!1;const I=dl(i,C,"vertex"),V=dl(i,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+U+`
`+I+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(Q===""||G==="")&&(b=!1);b&&(this.diagnostics={runnable:X,programLog:U,vertexShader:{log:Q,prefix:d},fragmentShader:{log:G,prefix:m}})}i.deleteShader(C),i.deleteShader(y);let M;this.getUniforms=function(){return M===void 0&&(M=new Er(i,f)),M};let w;return this.getAttributes=function(){return w===void 0&&(w=Sm(i,f)),w},this.destroy=function(){t.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=e.shaderName,this.id=xm++,this.cacheKey=A,this.usedTimes=1,this.program=f,this.vertexShader=C,this.fragmentShader=y,this}let Gm=0;class Vm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const e=A.vertexShader,t=A.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(t),s=this._getShaderCacheForMaterial(A);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(A){const e=this.materialCache.get(A);for(const t of e)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const e=this.materialCache;let t=e.get(A);return t===void 0&&(t=new Set,e.set(A,t)),t}_getShaderStage(A){const e=this.shaderCache;let t=e.get(A);return t===void 0&&(t=new Km(A),e.set(A,t)),t}}class Km{constructor(A){this.id=Gm++,this.code=A,this.usedTimes=0}}function zm(n,A,e,t,i,r,s){const a=new Hc,o=new Vm,l=[],c=i.isWebGL2,u=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(w,U,Q,G,X){const b=G.fog,I=X.geometry,V=w.isMeshStandardMaterial?G.environment:null,J=(w.isMeshStandardMaterial?e:A).get(w.envMap||V),Y=J&&J.mapping===kr?J.image.height:null,K=g[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Z=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,q=Z!==void 0?Z.length:0;let lA=0;I.morphAttributes.position!==void 0&&(lA=1),I.morphAttributes.normal!==void 0&&(lA=2),I.morphAttributes.color!==void 0&&(lA=3);let D,k,eA,AA;if(K){const OA=it[K];D=OA.vertexShader,k=OA.fragmentShader}else D=w.vertexShader,k=w.fragmentShader,o.update(w),eA=o.getVertexShaderID(w),AA=o.getFragmentShaderID(w);const R=n.getRenderTarget(),wA=w.alphaTest>0,fA=w.clearcoat>0,dA=w.iridescence>0;return{isWebGL2:c,shaderID:K,shaderName:w.type,vertexShader:D,fragmentShader:k,defines:w.defines,customVertexShaderID:eA,customFragmentShaderID:AA,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:h,outputEncoding:R===null?n.outputEncoding:R.isXRRenderTarget===!0?R.texture.encoding:sn,map:!!w.map,matcap:!!w.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:Y,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===jh,tangentSpaceNormalMap:w.normalMapType===Qc,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===VA,clearcoat:fA,clearcoatMap:fA&&!!w.clearcoatMap,clearcoatRoughnessMap:fA&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:fA&&!!w.clearcoatNormalMap,iridescence:dA,iridescenceMap:dA&&!!w.iridescenceMap,iridescenceThicknessMap:dA&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===Dn,alphaMap:!!w.alphaMap,alphaTest:wA,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!I.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.iridescenceMap||w.iridescenceThicknessMap||w.transmission>0||w.transmissionMap||w.thicknessMap||w.specularIntensityMap||w.specularColorMap||w.sheen>0||w.sheenColorMap||w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!b,useFog:w.fog===!0,fogExp2:b&&b.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:lA,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&Q.length>0,shadowMapType:n.shadowMap.type,toneMapping:w.toneMapped?n.toneMapping:vt,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===rt,flipSided:w.side===De,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||t.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function d(w){const U=[];if(w.shaderID?U.push(w.shaderID):(U.push(w.customVertexShaderID),U.push(w.customFragmentShaderID)),w.defines!==void 0)for(const Q in w.defines)U.push(Q),U.push(w.defines[Q]);return w.isRawShaderMaterial===!1&&(m(U,w),B(U,w),U.push(n.outputEncoding)),U.push(w.customProgramCacheKey),U.join()}function m(w,U){w.push(U.precision),w.push(U.outputEncoding),w.push(U.envMapMode),w.push(U.envMapCubeUVHeight),w.push(U.combine),w.push(U.vertexUvs),w.push(U.fogExp2),w.push(U.sizeAttenuation),w.push(U.morphTargetsCount),w.push(U.morphAttributeCount),w.push(U.numDirLights),w.push(U.numPointLights),w.push(U.numSpotLights),w.push(U.numSpotLightMaps),w.push(U.numHemiLights),w.push(U.numRectAreaLights),w.push(U.numDirLightShadows),w.push(U.numPointLightShadows),w.push(U.numSpotLightShadows),w.push(U.numSpotLightShadowsWithMaps),w.push(U.shadowMapType),w.push(U.toneMapping),w.push(U.numClippingPlanes),w.push(U.numClipIntersection),w.push(U.depthPacking)}function B(w,U){a.disableAll(),U.isWebGL2&&a.enable(0),U.supportsVertexTextures&&a.enable(1),U.instancing&&a.enable(2),U.instancingColor&&a.enable(3),U.map&&a.enable(4),U.matcap&&a.enable(5),U.envMap&&a.enable(6),U.lightMap&&a.enable(7),U.aoMap&&a.enable(8),U.emissiveMap&&a.enable(9),U.bumpMap&&a.enable(10),U.normalMap&&a.enable(11),U.objectSpaceNormalMap&&a.enable(12),U.tangentSpaceNormalMap&&a.enable(13),U.clearcoat&&a.enable(14),U.clearcoatMap&&a.enable(15),U.clearcoatRoughnessMap&&a.enable(16),U.clearcoatNormalMap&&a.enable(17),U.iridescence&&a.enable(18),U.iridescenceMap&&a.enable(19),U.iridescenceThicknessMap&&a.enable(20),U.displacementMap&&a.enable(21),U.specularMap&&a.enable(22),U.roughnessMap&&a.enable(23),U.metalnessMap&&a.enable(24),U.gradientMap&&a.enable(25),U.alphaMap&&a.enable(26),U.alphaTest&&a.enable(27),U.vertexColors&&a.enable(28),U.vertexAlphas&&a.enable(29),U.vertexUvs&&a.enable(30),U.vertexTangents&&a.enable(31),U.uvsVertexOnly&&a.enable(32),w.push(a.mask),a.disableAll(),U.fog&&a.enable(0),U.useFog&&a.enable(1),U.flatShading&&a.enable(2),U.logarithmicDepthBuffer&&a.enable(3),U.skinning&&a.enable(4),U.morphTargets&&a.enable(5),U.morphNormals&&a.enable(6),U.morphColors&&a.enable(7),U.premultipliedAlpha&&a.enable(8),U.shadowMapEnabled&&a.enable(9),U.physicallyCorrectLights&&a.enable(10),U.doubleSided&&a.enable(11),U.flipSided&&a.enable(12),U.useDepthPacking&&a.enable(13),U.dithering&&a.enable(14),U.specularIntensityMap&&a.enable(15),U.specularColorMap&&a.enable(16),U.transmission&&a.enable(17),U.transmissionMap&&a.enable(18),U.thicknessMap&&a.enable(19),U.sheen&&a.enable(20),U.sheenColorMap&&a.enable(21),U.sheenRoughnessMap&&a.enable(22),U.decodeVideoTexture&&a.enable(23),U.opaque&&a.enable(24),w.push(a.mask)}function v(w){const U=g[w.type];let Q;if(U){const G=it[U];Q=Sf.clone(G.uniforms)}else Q=w.uniforms;return Q}function x(w,U){let Q;for(let G=0,X=l.length;G<X;G++){const b=l[G];if(b.cacheKey===U){Q=b,++Q.usedTimes;break}}return Q===void 0&&(Q=new Nm(n,U,w,r),l.push(Q)),Q}function C(w){if(--w.usedTimes===0){const U=l.indexOf(w);l[U]=l[l.length-1],l.pop(),w.destroy()}}function y(w){o.remove(w)}function M(){o.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:v,acquireProgram:x,releaseProgram:C,releaseShaderCache:y,programs:l,dispose:M}}function km(){let n=new WeakMap;function A(r){let s=n.get(r);return s===void 0&&(s={},n.set(r,s)),s}function e(r){n.delete(r)}function t(r,s,a){n.get(r)[s]=a}function i(){n=new WeakMap}return{get:A,remove:e,update:t,dispose:i}}function Wm(n,A){return n.groupOrder!==A.groupOrder?n.groupOrder-A.groupOrder:n.renderOrder!==A.renderOrder?n.renderOrder-A.renderOrder:n.material.id!==A.material.id?n.material.id-A.material.id:n.z!==A.z?n.z-A.z:n.id-A.id}function wl(n,A){return n.groupOrder!==A.groupOrder?n.groupOrder-A.groupOrder:n.renderOrder!==A.renderOrder?n.renderOrder-A.renderOrder:n.z!==A.z?A.z-n.z:n.id-A.id}function vl(){const n=[];let A=0;const e=[],t=[],i=[];function r(){A=0,e.length=0,t.length=0,i.length=0}function s(u,h,p,g,f,d){let m=n[A];return m===void 0?(m={id:u.id,object:u,geometry:h,material:p,groupOrder:g,renderOrder:u.renderOrder,z:f,group:d},n[A]=m):(m.id=u.id,m.object=u,m.geometry=h,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=f,m.group=d),A++,m}function a(u,h,p,g,f,d){const m=s(u,h,p,g,f,d);p.transmission>0?t.push(m):p.transparent===!0?i.push(m):e.push(m)}function o(u,h,p,g,f,d){const m=s(u,h,p,g,f,d);p.transmission>0?t.unshift(m):p.transparent===!0?i.unshift(m):e.unshift(m)}function l(u,h){e.length>1&&e.sort(u||Wm),t.length>1&&t.sort(h||wl),i.length>1&&i.sort(h||wl)}function c(){for(let u=A,h=n.length;u<h;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:t,transparent:i,init:r,push:a,unshift:o,finish:c,sort:l}}function Xm(){let n=new WeakMap;function A(t,i){const r=n.get(t);let s;return r===void 0?(s=new vl,n.set(t,[s])):i>=r.length?(s=new vl,r.push(s)):s=r[i],s}function e(){n=new WeakMap}return{get:A,dispose:e}}function Jm(){const n={};return{get:function(A){if(n[A.id]!==void 0)return n[A.id];let e;switch(A.type){case"DirectionalLight":e={direction:new T,color:new NA};break;case"SpotLight":e={position:new T,direction:new T,color:new NA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new NA,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new NA,groundColor:new NA};break;case"RectAreaLight":e={color:new NA,position:new T,halfWidth:new T,halfHeight:new T};break}return n[A.id]=e,e}}}function Ym(){const n={};return{get:function(A){if(n[A.id]!==void 0)return n[A.id];let e;switch(A.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new IA};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new IA};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new IA,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[A.id]=e,e}}}let Zm=0;function qm(n,A){return(A.castShadow?2:0)-(n.castShadow?2:0)+(A.map?1:0)-(n.map?1:0)}function jm(n,A){const e=new Jm,t=Ym(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)i.probe.push(new T);const r=new T,s=new jA,a=new jA;function o(c,u){let h=0,p=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let f=0,d=0,m=0,B=0,v=0,x=0,C=0,y=0,M=0,w=0;c.sort(qm);const U=u!==!0?Math.PI:1;for(let G=0,X=c.length;G<X;G++){const b=c[G],I=b.color,V=b.intensity,J=b.distance,Y=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=I.r*V*U,p+=I.g*V*U,g+=I.b*V*U;else if(b.isLightProbe)for(let K=0;K<9;K++)i.probe[K].addScaledVector(b.sh.coefficients[K],V);else if(b.isDirectionalLight){const K=e.get(b);if(K.color.copy(b.color).multiplyScalar(b.intensity*U),b.castShadow){const Z=b.shadow,q=t.get(b);q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=b.shadow.matrix,x++}i.directional[f]=K,f++}else if(b.isSpotLight){const K=e.get(b);K.position.setFromMatrixPosition(b.matrixWorld),K.color.copy(I).multiplyScalar(V*U),K.distance=J,K.coneCos=Math.cos(b.angle),K.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),K.decay=b.decay,i.spot[m]=K;const Z=b.shadow;if(b.map&&(i.spotLightMap[M]=b.map,M++,Z.updateMatrices(b),b.castShadow&&w++),i.spotLightMatrix[m]=Z.matrix,b.castShadow){const q=t.get(b);q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,i.spotShadow[m]=q,i.spotShadowMap[m]=Y,y++}m++}else if(b.isRectAreaLight){const K=e.get(b);K.color.copy(I).multiplyScalar(V),K.halfWidth.set(b.width*.5,0,0),K.halfHeight.set(0,b.height*.5,0),i.rectArea[B]=K,B++}else if(b.isPointLight){const K=e.get(b);if(K.color.copy(b.color).multiplyScalar(b.intensity*U),K.distance=b.distance,K.decay=b.decay,b.castShadow){const Z=b.shadow,q=t.get(b);q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,i.pointShadow[d]=q,i.pointShadowMap[d]=Y,i.pointShadowMatrix[d]=b.shadow.matrix,C++}i.point[d]=K,d++}else if(b.isHemisphereLight){const K=e.get(b);K.skyColor.copy(b.color).multiplyScalar(V*U),K.groundColor.copy(b.groundColor).multiplyScalar(V*U),i.hemi[v]=K,v++}}B>0&&(A.isWebGL2||n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nA.LTC_FLOAT_1,i.rectAreaLTC2=nA.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=nA.LTC_HALF_1,i.rectAreaLTC2=nA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=g;const Q=i.hash;(Q.directionalLength!==f||Q.pointLength!==d||Q.spotLength!==m||Q.rectAreaLength!==B||Q.hemiLength!==v||Q.numDirectionalShadows!==x||Q.numPointShadows!==C||Q.numSpotShadows!==y||Q.numSpotMaps!==M)&&(i.directional.length=f,i.spot.length=m,i.rectArea.length=B,i.point.length=d,i.hemi.length=v,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=y+M-w,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=w,Q.directionalLength=f,Q.pointLength=d,Q.spotLength=m,Q.rectAreaLength=B,Q.hemiLength=v,Q.numDirectionalShadows=x,Q.numPointShadows=C,Q.numSpotShadows=y,Q.numSpotMaps=M,i.version=Zm++)}function l(c,u){let h=0,p=0,g=0,f=0,d=0;const m=u.matrixWorldInverse;for(let B=0,v=c.length;B<v;B++){const x=c[B];if(x.isDirectionalLight){const C=i.directional[h];C.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),h++}else if(x.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const C=i.rectArea[f];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),C.halfWidth.set(x.width*.5,0,0),C.halfHeight.set(0,x.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),f++}else if(x.isPointLight){const C=i.point[p];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(m),p++}else if(x.isHemisphereLight){const C=i.hemi[d];C.direction.setFromMatrixPosition(x.matrixWorld),C.direction.transformDirection(m),d++}}}return{setup:o,setupView:l,state:i}}function Cl(n,A){const e=new jm(n,A),t=[],i=[];function r(){t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:r,state:{lightsArray:t,shadowsArray:i,lights:e},setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function $m(n,A){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Cl(n,A),e.set(r,[o])):s>=a.length?(o=new Cl(n,A),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class AB extends Ti{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class eB extends Ti{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new T,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.referencePosition.copy(A.referencePosition),this.nearDistance=A.nearDistance,this.farDistance=A.farDistance,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const tB=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nB=`uniform sampler2D shadow_pass;
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
}`;function iB(n,A,e){let t=new Wa;const i=new IA,r=new IA,s=new ce,a=new AB({depthPacking:qh}),o=new eB,l={},c=e.maxTextureSize,u={[Rt]:De,[De]:Rt,[rt]:rt},h=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new IA},radius:{value:4}},vertexShader:tB,fragmentShader:nB}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new At;g.setAttribute("position",new st(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Me(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc,this.render=function(x,C,y){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||x.length===0)return;const M=n.getRenderTarget(),w=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(Lt),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);for(let G=0,X=x.length;G<X;G++){const b=x[G],I=b.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",b,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const V=I.getFrameExtents();if(i.multiply(V),r.copy(I.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/V.x),i.x=r.x*V.x,I.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/V.y),i.y=r.y*V.y,I.mapSize.y=r.y)),I.map===null){const Y=this.type!==oi?{minFilter:Fe,magFilter:Fe}:{};I.map=new an(i.x,i.y,Y),I.map.texture.name=b.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const J=I.getViewportCount();for(let Y=0;Y<J;Y++){const K=I.getViewport(Y);s.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),Q.viewport(s),I.updateMatrices(b,Y),t=I.getFrustum(),v(C,y,I.camera,b,this.type)}I.isPointLightShadow!==!0&&this.type===oi&&m(I,y),I.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(M,w,U)};function m(x,C){const y=A.update(f);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new an(i.x,i.y)),h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(C,null,y,h,f,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(C,null,y,p,f,null)}function B(x,C,y,M,w,U){let Q=null;const G=y.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(G!==void 0)Q=G;else if(Q=y.isPointLight===!0?o:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=Q.uuid,b=C.uuid;let I=l[X];I===void 0&&(I={},l[X]=I);let V=I[b];V===void 0&&(V=Q.clone(),I[b]=V),Q=V}return Q.visible=C.visible,Q.wireframe=C.wireframe,U===oi?Q.side=C.shadowSide!==null?C.shadowSide:C.side:Q.side=C.shadowSide!==null?C.shadowSide:u[C.side],Q.alphaMap=C.alphaMap,Q.alphaTest=C.alphaTest,Q.map=C.map,Q.clipShadows=C.clipShadows,Q.clippingPlanes=C.clippingPlanes,Q.clipIntersection=C.clipIntersection,Q.displacementMap=C.displacementMap,Q.displacementScale=C.displacementScale,Q.displacementBias=C.displacementBias,Q.wireframeLinewidth=C.wireframeLinewidth,Q.linewidth=C.linewidth,y.isPointLight===!0&&Q.isMeshDistanceMaterial===!0&&(Q.referencePosition.setFromMatrixPosition(y.matrixWorld),Q.nearDistance=M,Q.farDistance=w),Q}function v(x,C,y,M,w){if(x.visible===!1)return;if(x.layers.test(C.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&w===oi)&&(!x.frustumCulled||t.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,x.matrixWorld);const G=A.update(x),X=x.material;if(Array.isArray(X)){const b=G.groups;for(let I=0,V=b.length;I<V;I++){const J=b[I],Y=X[J.materialIndex];if(Y&&Y.visible){const K=B(x,Y,M,y.near,y.far,w);n.renderBufferDirect(y,null,G,K,x,J)}}}else if(X.visible){const b=B(x,X,M,y.near,y.far,w);n.renderBufferDirect(y,null,G,b,x,null)}}const Q=x.children;for(let G=0,X=Q.length;G<X;G++)v(Q[G],C,y,M,w)}}function rB(n,A,e){const t=e.isWebGL2;function i(){let S=!1;const P=new ce;let j=null;const oA=new ce(0,0,0,0);return{setMask:function(hA){j!==hA&&!S&&(n.colorMask(hA,hA,hA,hA),j=hA)},setLocked:function(hA){S=hA},setClear:function(hA,HA,se,de,Ot){Ot===!0&&(hA*=de,HA*=de,se*=de),P.set(hA,HA,se,de),oA.equals(P)===!1&&(n.clearColor(hA,HA,se,de),oA.copy(P))},reset:function(){S=!1,j=null,oA.set(-1,0,0,0)}}}function r(){let S=!1,P=null,j=null,oA=null;return{setTest:function(hA){hA?wA(2929):fA(2929)},setMask:function(hA){P!==hA&&!S&&(n.depthMask(hA),P=hA)},setFunc:function(hA){if(j!==hA){switch(hA){case vh:n.depthFunc(512);break;case Ch:n.depthFunc(519);break;case _h:n.depthFunc(513);break;case ua:n.depthFunc(515);break;case xh:n.depthFunc(514);break;case Uh:n.depthFunc(518);break;case Fh:n.depthFunc(516);break;case yh:n.depthFunc(517);break;default:n.depthFunc(515)}j=hA}},setLocked:function(hA){S=hA},setClear:function(hA){oA!==hA&&(n.clearDepth(hA),oA=hA)},reset:function(){S=!1,P=null,j=null,oA=null}}}function s(){let S=!1,P=null,j=null,oA=null,hA=null,HA=null,se=null,de=null,Ot=null;return{setTest:function(zA){S||(zA?wA(2960):fA(2960))},setMask:function(zA){P!==zA&&!S&&(n.stencilMask(zA),P=zA)},setFunc:function(zA,ct,Oe){(j!==zA||oA!==ct||hA!==Oe)&&(n.stencilFunc(zA,ct,Oe),j=zA,oA=ct,hA=Oe)},setOp:function(zA,ct,Oe){(HA!==zA||se!==ct||de!==Oe)&&(n.stencilOp(zA,ct,Oe),HA=zA,se=ct,de=Oe)},setLocked:function(zA){S=zA},setClear:function(zA){Ot!==zA&&(n.clearStencil(zA),Ot=zA)},reset:function(){S=!1,P=null,j=null,oA=null,hA=null,HA=null,se=null,de=null,Ot=null}}}const a=new i,o=new r,l=new s,c=new WeakMap,u=new WeakMap;let h={},p={},g=new WeakMap,f=[],d=null,m=!1,B=null,v=null,x=null,C=null,y=null,M=null,w=null,U=!1,Q=null,G=null,X=null,b=null,I=null;const V=n.getParameter(35661);let J=!1,Y=0;const K=n.getParameter(7938);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=Y>=2);let Z=null,q={};const lA=n.getParameter(3088),D=n.getParameter(2978),k=new ce().fromArray(lA),eA=new ce().fromArray(D);function AA(S,P,j){const oA=new Uint8Array(4),hA=n.createTexture();n.bindTexture(S,hA),n.texParameteri(S,10241,9728),n.texParameteri(S,10240,9728);for(let HA=0;HA<j;HA++)n.texImage2D(P+HA,0,6408,1,1,0,6408,5121,oA);return hA}const R={};R[3553]=AA(3553,3553,1),R[34067]=AA(34067,34069,6),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),wA(2929),o.setFunc(ua),fe(!1),Pe(co),wA(2884),ve(Lt);function wA(S){h[S]!==!0&&(n.enable(S),h[S]=!0)}function fA(S){h[S]!==!1&&(n.disable(S),h[S]=!1)}function dA(S,P){return p[S]!==P?(n.bindFramebuffer(S,P),p[S]=P,t&&(S===36009&&(p[36160]=P),S===36160&&(p[36009]=P)),!0):!1}function cA(S,P){let j=f,oA=!1;if(S)if(j=g.get(P),j===void 0&&(j=[],g.set(P,j)),S.isWebGLMultipleRenderTargets){const hA=S.texture;if(j.length!==hA.length||j[0]!==36064){for(let HA=0,se=hA.length;HA<se;HA++)j[HA]=36064+HA;j.length=hA.length,oA=!0}}else j[0]!==36064&&(j[0]=36064,oA=!0);else j[0]!==1029&&(j[0]=1029,oA=!0);oA&&(e.isWebGL2?n.drawBuffers(j):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function OA(S){return d!==S?(n.useProgram(S),d=S,!0):!1}const UA={[Qn]:32774,[lh]:32778,[ch]:32779};if(t)UA[po]=32775,UA[go]=32776;else{const S=A.get("EXT_blend_minmax");S!==null&&(UA[po]=S.MIN_EXT,UA[go]=S.MAX_EXT)}const CA={[uh]:0,[hh]:1,[fh]:768,[Uc]:770,[wh]:776,[mh]:774,[ph]:772,[dh]:769,[Fc]:771,[Bh]:775,[gh]:773};function ve(S,P,j,oA,hA,HA,se,de){if(S===Lt){m===!0&&(fA(3042),m=!1);return}if(m===!1&&(wA(3042),m=!0),S!==oh){if(S!==B||de!==U){if((v!==Qn||y!==Qn)&&(n.blendEquation(32774),v=Qn,y=Qn),de)switch(S){case Dn:n.blendFuncSeparate(1,771,1,771);break;case uo:n.blendFunc(1,1);break;case ho:n.blendFuncSeparate(0,769,0,1);break;case fo:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Dn:n.blendFuncSeparate(770,771,1,771);break;case uo:n.blendFunc(770,1);break;case ho:n.blendFuncSeparate(0,769,0,1);break;case fo:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}x=null,C=null,M=null,w=null,B=S,U=de}return}hA=hA||P,HA=HA||j,se=se||oA,(P!==v||hA!==y)&&(n.blendEquationSeparate(UA[P],UA[hA]),v=P,y=hA),(j!==x||oA!==C||HA!==M||se!==w)&&(n.blendFuncSeparate(CA[j],CA[oA],CA[HA],CA[se]),x=j,C=oA,M=HA,w=se),B=S,U=!1}function Re(S,P){S.side===rt?fA(2884):wA(2884);let j=S.side===De;P&&(j=!j),fe(j),S.blending===Dn&&S.transparent===!1?ve(Lt):ve(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.premultipliedAlpha),o.setFunc(S.depthFunc),o.setTest(S.depthTest),o.setMask(S.depthWrite),a.setMask(S.colorWrite);const oA=S.stencilWrite;l.setTest(oA),oA&&(l.setMask(S.stencilWriteMask),l.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),l.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),RA(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?wA(32926):fA(32926)}function fe(S){Q!==S&&(S?n.frontFace(2304):n.frontFace(2305),Q=S)}function Pe(S){S!==rh?(wA(2884),S!==G&&(S===co?n.cullFace(1029):S===sh?n.cullFace(1028):n.cullFace(1032))):fA(2884),G=S}function $A(S){S!==X&&(J&&n.lineWidth(S),X=S)}function RA(S,P,j){S?(wA(32823),(b!==P||I!==j)&&(n.polygonOffset(P,j),b=P,I=j)):fA(32823)}function lt(S){S?wA(3089):fA(3089)}function Xe(S){S===void 0&&(S=33984+V-1),Z!==S&&(n.activeTexture(S),Z=S)}function E(S,P,j){j===void 0&&(Z===null?j=33984+V-1:j=Z);let oA=q[j];oA===void 0&&(oA={type:void 0,texture:void 0},q[j]=oA),(oA.type!==S||oA.texture!==P)&&(Z!==j&&(n.activeTexture(j),Z=j),n.bindTexture(S,P||R[S]),oA.type=S,oA.texture=P)}function _(){const S=q[Z];S!==void 0&&S.type!==void 0&&(n.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function N(){try{n.compressedTexImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function tA(){try{n.texSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function sA(){try{n.texSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function _A(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function aA(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function W(){try{n.texStorage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function mA(){try{n.texStorage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function vA(){try{n.texImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function uA(){try{n.texImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function BA(S){k.equals(S)===!1&&(n.scissor(S.x,S.y,S.z,S.w),k.copy(S))}function pA(S){eA.equals(S)===!1&&(n.viewport(S.x,S.y,S.z,S.w),eA.copy(S))}function TA(S,P){let j=u.get(P);j===void 0&&(j=new WeakMap,u.set(P,j));let oA=j.get(S);oA===void 0&&(oA=n.getUniformBlockIndex(P,S.name),j.set(S,oA))}function KA(S,P){const oA=u.get(P).get(S);c.get(P)!==oA&&(n.uniformBlockBinding(P,oA,S.__bindingPointIndex),c.set(P,oA))}function re(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),t===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Z=null,q={},p={},g=new WeakMap,f=[],d=null,m=!1,B=null,v=null,x=null,C=null,y=null,M=null,w=null,U=!1,Q=null,G=null,X=null,b=null,I=null,k.set(0,0,n.canvas.width,n.canvas.height),eA.set(0,0,n.canvas.width,n.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:wA,disable:fA,bindFramebuffer:dA,drawBuffers:cA,useProgram:OA,setBlending:ve,setMaterial:Re,setFlipSided:fe,setCullFace:Pe,setLineWidth:$A,setPolygonOffset:RA,setScissorTest:lt,activeTexture:Xe,bindTexture:E,unbindTexture:_,compressedTexImage2D:N,compressedTexImage3D:$,texImage2D:vA,texImage3D:uA,updateUBOMapping:TA,uniformBlockBinding:KA,texStorage2D:W,texStorage3D:mA,texSubImage2D:tA,texSubImage3D:sA,compressedTexSubImage2D:_A,compressedTexSubImage3D:aA,scissor:BA,viewport:pA,reset:re}}function sB(n,A,e,t,i,r,s){const a=i.isWebGL2,o=i.maxTextures,l=i.maxCubemapSize,c=i.maxTextureSize,u=i.maxSamples,h=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function B(E,_){return m?new OffscreenCanvas(E,_):Lr("canvas")}function v(E,_,N,$){let tA=1;if((E.width>$||E.height>$)&&(tA=$/Math.max(E.width,E.height)),tA<1||_===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const sA=_?Tr:Math.floor,_A=sA(tA*E.width),aA=sA(tA*E.height);f===void 0&&(f=B(_A,aA));const W=N?B(_A,aA):f;return W.width=_A,W.height=aA,W.getContext("2d").drawImage(E,0,0,_A,aA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+_A+"x"+aA+")."),W}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function x(E){return ma(E.width)&&ma(E.height)}function C(E){return a?!1:E.wrapS!==je||E.wrapT!==je||E.minFilter!==Fe&&E.minFilter!==Ve}function y(E,_){return E.generateMipmaps&&_&&E.minFilter!==Fe&&E.minFilter!==Ve}function M(E){n.generateMipmap(E)}function w(E,_,N,$,tA=!1){if(a===!1)return _;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let sA=_;return _===6403&&(N===5126&&(sA=33326),N===5131&&(sA=33325),N===5121&&(sA=33321)),_===33319&&(N===5126&&(sA=33328),N===5131&&(sA=33327),N===5121&&(sA=33323)),_===6408&&(N===5126&&(sA=34836),N===5131&&(sA=34842),N===5121&&(sA=$===VA&&tA===!1?35907:32856),N===32819&&(sA=32854),N===32820&&(sA=32855)),(sA===33325||sA===33326||sA===33327||sA===33328||sA===34842||sA===34836)&&A.get("EXT_color_buffer_float"),sA}function U(E,_,N){return y(E,N)===!0||E.isFramebufferTexture&&E.minFilter!==Fe&&E.minFilter!==Ve?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function Q(E){return E===Fe||E===mo||E===ls?9728:9729}function G(E){const _=E.target;_.removeEventListener("dispose",G),b(_),_.isVideoTexture&&g.delete(_)}function X(E){const _=E.target;_.removeEventListener("dispose",X),V(_)}function b(E){const _=t.get(E);if(_.__webglInit===void 0)return;const N=E.source,$=d.get(N);if($){const tA=$[_.__cacheKey];tA.usedTimes--,tA.usedTimes===0&&I(E),Object.keys($).length===0&&d.delete(N)}t.remove(E)}function I(E){const _=t.get(E);n.deleteTexture(_.__webglTexture);const N=E.source,$=d.get(N);delete $[_.__cacheKey],s.memory.textures--}function V(E){const _=E.texture,N=t.get(E),$=t.get(_);if($.__webglTexture!==void 0&&(n.deleteTexture($.__webglTexture),s.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let tA=0;tA<6;tA++)n.deleteFramebuffer(N.__webglFramebuffer[tA]),N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[tA]);else{if(n.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let tA=0;tA<N.__webglColorRenderbuffer.length;tA++)N.__webglColorRenderbuffer[tA]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[tA]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let tA=0,sA=_.length;tA<sA;tA++){const _A=t.get(_[tA]);_A.__webglTexture&&(n.deleteTexture(_A.__webglTexture),s.memory.textures--),t.remove(_[tA])}t.remove(_),t.remove(E)}let J=0;function Y(){J=0}function K(){const E=J;return E>=o&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+o),J+=1,E}function Z(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.encoding),_.join()}function q(E,_){const N=t.get(E);if(E.isVideoTexture&&lt(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fA(N,E,_);return}}e.bindTexture(3553,N.__webglTexture,33984+_)}function lA(E,_){const N=t.get(E);if(E.version>0&&N.__version!==E.version){fA(N,E,_);return}e.bindTexture(35866,N.__webglTexture,33984+_)}function D(E,_){const N=t.get(E);if(E.version>0&&N.__version!==E.version){fA(N,E,_);return}e.bindTexture(32879,N.__webglTexture,33984+_)}function k(E,_){const N=t.get(E);if(E.version>0&&N.__version!==E.version){dA(N,E,_);return}e.bindTexture(34067,N.__webglTexture,33984+_)}const eA={[da]:10497,[je]:33071,[pa]:33648},AA={[Fe]:9728,[mo]:9984,[ls]:9986,[Ve]:9729,[Lh]:9985,[Fi]:9987};function R(E,_,N){if(N?(n.texParameteri(E,10242,eA[_.wrapS]),n.texParameteri(E,10243,eA[_.wrapT]),(E===32879||E===35866)&&n.texParameteri(E,32882,eA[_.wrapR]),n.texParameteri(E,10240,AA[_.magFilter]),n.texParameteri(E,10241,AA[_.minFilter])):(n.texParameteri(E,10242,33071),n.texParameteri(E,10243,33071),(E===32879||E===35866)&&n.texParameteri(E,32882,33071),(_.wrapS!==je||_.wrapT!==je)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,10240,Q(_.magFilter)),n.texParameteri(E,10241,Q(_.minFilter)),_.minFilter!==Fe&&_.minFilter!==Ve&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.has("EXT_texture_filter_anisotropic")===!0){const $=A.get("EXT_texture_filter_anisotropic");if(_.magFilter===Fe||_.minFilter!==ls&&_.minFilter!==Fi||_.type===jt&&A.has("OES_texture_float_linear")===!1||a===!1&&_.type===yi&&A.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||t.get(_).__currentAnisotropy)&&(n.texParameterf(E,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),t.get(_).__currentAnisotropy=_.anisotropy)}}function wA(E,_){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",G));const $=_.source;let tA=d.get($);tA===void 0&&(tA={},d.set($,tA));const sA=Z(_);if(sA!==E.__cacheKey){tA[sA]===void 0&&(tA[sA]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,N=!0),tA[sA].usedTimes++;const _A=tA[E.__cacheKey];_A!==void 0&&(tA[E.__cacheKey].usedTimes--,_A.usedTimes===0&&I(_)),E.__cacheKey=sA,E.__webglTexture=tA[sA].texture}return N}function fA(E,_,N){let $=3553;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=35866),_.isData3DTexture&&($=32879);const tA=wA(E,_),sA=_.source;e.bindTexture($,E.__webglTexture,33984+N);const _A=t.get(sA);if(sA.version!==_A.__version||tA===!0){e.activeTexture(33984+N),n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const aA=C(_)&&x(_.image)===!1;let W=v(_.image,aA,!1,c);W=Xe(_,W);const mA=x(W)||a,vA=r.convert(_.format,_.encoding);let uA=r.convert(_.type),BA=w(_.internalFormat,vA,uA,_.encoding,_.isVideoTexture);R($,_,mA);let pA;const TA=_.mipmaps,KA=a&&_.isVideoTexture!==!0,re=_A.__version===void 0||tA===!0,S=U(_,W,mA);if(_.isDepthTexture)BA=6402,a?_.type===jt?BA=36012:_.type===qt?BA=33190:_.type===Rn?BA=35056:BA=33189:_.type===jt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===An&&BA===6402&&_.type!==Mc&&_.type!==qt&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=qt,uA=r.convert(_.type)),_.format===Vn&&BA===6402&&(BA=34041,_.type!==Rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Rn,uA=r.convert(_.type))),re&&(KA?e.texStorage2D(3553,1,BA,W.width,W.height):e.texImage2D(3553,0,BA,W.width,W.height,0,vA,uA,null));else if(_.isDataTexture)if(TA.length>0&&mA){KA&&re&&e.texStorage2D(3553,S,BA,TA[0].width,TA[0].height);for(let P=0,j=TA.length;P<j;P++)pA=TA[P],KA?e.texSubImage2D(3553,P,0,0,pA.width,pA.height,vA,uA,pA.data):e.texImage2D(3553,P,BA,pA.width,pA.height,0,vA,uA,pA.data);_.generateMipmaps=!1}else KA?(re&&e.texStorage2D(3553,S,BA,W.width,W.height),e.texSubImage2D(3553,0,0,0,W.width,W.height,vA,uA,W.data)):e.texImage2D(3553,0,BA,W.width,W.height,0,vA,uA,W.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){KA&&re&&e.texStorage3D(35866,S,BA,TA[0].width,TA[0].height,W.depth);for(let P=0,j=TA.length;P<j;P++)pA=TA[P],_.format!==$e?vA!==null?KA?e.compressedTexSubImage3D(35866,P,0,0,0,pA.width,pA.height,W.depth,vA,pA.data,0,0):e.compressedTexImage3D(35866,P,BA,pA.width,pA.height,W.depth,0,pA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):KA?e.texSubImage3D(35866,P,0,0,0,pA.width,pA.height,W.depth,vA,uA,pA.data):e.texImage3D(35866,P,BA,pA.width,pA.height,W.depth,0,vA,uA,pA.data)}else{KA&&re&&e.texStorage2D(3553,S,BA,TA[0].width,TA[0].height);for(let P=0,j=TA.length;P<j;P++)pA=TA[P],_.format!==$e?vA!==null?KA?e.compressedTexSubImage2D(3553,P,0,0,pA.width,pA.height,vA,pA.data):e.compressedTexImage2D(3553,P,BA,pA.width,pA.height,0,pA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):KA?e.texSubImage2D(3553,P,0,0,pA.width,pA.height,vA,uA,pA.data):e.texImage2D(3553,P,BA,pA.width,pA.height,0,vA,uA,pA.data)}else if(_.isDataArrayTexture)KA?(re&&e.texStorage3D(35866,S,BA,W.width,W.height,W.depth),e.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,vA,uA,W.data)):e.texImage3D(35866,0,BA,W.width,W.height,W.depth,0,vA,uA,W.data);else if(_.isData3DTexture)KA?(re&&e.texStorage3D(32879,S,BA,W.width,W.height,W.depth),e.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,vA,uA,W.data)):e.texImage3D(32879,0,BA,W.width,W.height,W.depth,0,vA,uA,W.data);else if(_.isFramebufferTexture){if(re)if(KA)e.texStorage2D(3553,S,BA,W.width,W.height);else{let P=W.width,j=W.height;for(let oA=0;oA<S;oA++)e.texImage2D(3553,oA,BA,P,j,0,vA,uA,null),P>>=1,j>>=1}}else if(TA.length>0&&mA){KA&&re&&e.texStorage2D(3553,S,BA,TA[0].width,TA[0].height);for(let P=0,j=TA.length;P<j;P++)pA=TA[P],KA?e.texSubImage2D(3553,P,0,0,vA,uA,pA):e.texImage2D(3553,P,BA,vA,uA,pA);_.generateMipmaps=!1}else KA?(re&&e.texStorage2D(3553,S,BA,W.width,W.height),e.texSubImage2D(3553,0,0,0,vA,uA,W)):e.texImage2D(3553,0,BA,vA,uA,W);y(_,mA)&&M($),_A.__version=sA.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function dA(E,_,N){if(_.image.length!==6)return;const $=wA(E,_),tA=_.source;e.bindTexture(34067,E.__webglTexture,33984+N);const sA=t.get(tA);if(tA.version!==sA.__version||$===!0){e.activeTexture(33984+N),n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const _A=_.isCompressedTexture||_.image[0].isCompressedTexture,aA=_.image[0]&&_.image[0].isDataTexture,W=[];for(let P=0;P<6;P++)!_A&&!aA?W[P]=v(_.image[P],!1,!0,l):W[P]=aA?_.image[P].image:_.image[P],W[P]=Xe(_,W[P]);const mA=W[0],vA=x(mA)||a,uA=r.convert(_.format,_.encoding),BA=r.convert(_.type),pA=w(_.internalFormat,uA,BA,_.encoding),TA=a&&_.isVideoTexture!==!0,KA=sA.__version===void 0||$===!0;let re=U(_,mA,vA);R(34067,_,vA);let S;if(_A){TA&&KA&&e.texStorage2D(34067,re,pA,mA.width,mA.height);for(let P=0;P<6;P++){S=W[P].mipmaps;for(let j=0;j<S.length;j++){const oA=S[j];_.format!==$e?uA!==null?TA?e.compressedTexSubImage2D(34069+P,j,0,0,oA.width,oA.height,uA,oA.data):e.compressedTexImage2D(34069+P,j,pA,oA.width,oA.height,0,oA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):TA?e.texSubImage2D(34069+P,j,0,0,oA.width,oA.height,uA,BA,oA.data):e.texImage2D(34069+P,j,pA,oA.width,oA.height,0,uA,BA,oA.data)}}}else{S=_.mipmaps,TA&&KA&&(S.length>0&&re++,e.texStorage2D(34067,re,pA,W[0].width,W[0].height));for(let P=0;P<6;P++)if(aA){TA?e.texSubImage2D(34069+P,0,0,0,W[P].width,W[P].height,uA,BA,W[P].data):e.texImage2D(34069+P,0,pA,W[P].width,W[P].height,0,uA,BA,W[P].data);for(let j=0;j<S.length;j++){const hA=S[j].image[P].image;TA?e.texSubImage2D(34069+P,j+1,0,0,hA.width,hA.height,uA,BA,hA.data):e.texImage2D(34069+P,j+1,pA,hA.width,hA.height,0,uA,BA,hA.data)}}else{TA?e.texSubImage2D(34069+P,0,0,0,uA,BA,W[P]):e.texImage2D(34069+P,0,pA,uA,BA,W[P]);for(let j=0;j<S.length;j++){const oA=S[j];TA?e.texSubImage2D(34069+P,j+1,0,0,uA,BA,oA.image[P]):e.texImage2D(34069+P,j+1,pA,uA,BA,oA.image[P])}}}y(_,vA)&&M(34067),sA.__version=tA.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function cA(E,_,N,$,tA){const sA=r.convert(N.format,N.encoding),_A=r.convert(N.type),aA=w(N.internalFormat,sA,_A,N.encoding);t.get(_).__hasExternalTextures||(tA===32879||tA===35866?e.texImage3D(tA,0,aA,_.width,_.height,_.depth,0,sA,_A,null):e.texImage2D(tA,0,aA,_.width,_.height,0,sA,_A,null)),e.bindFramebuffer(36160,E),RA(_)?h.framebufferTexture2DMultisampleEXT(36160,$,tA,t.get(N).__webglTexture,0,$A(_)):(tA===3553||tA>=34069&&tA<=34074)&&n.framebufferTexture2D(36160,$,tA,t.get(N).__webglTexture,0),e.bindFramebuffer(36160,null)}function OA(E,_,N){if(n.bindRenderbuffer(36161,E),_.depthBuffer&&!_.stencilBuffer){let $=33189;if(N||RA(_)){const tA=_.depthTexture;tA&&tA.isDepthTexture&&(tA.type===jt?$=36012:tA.type===qt&&($=33190));const sA=$A(_);RA(_)?h.renderbufferStorageMultisampleEXT(36161,sA,$,_.width,_.height):n.renderbufferStorageMultisample(36161,sA,$,_.width,_.height)}else n.renderbufferStorage(36161,$,_.width,_.height);n.framebufferRenderbuffer(36160,36096,36161,E)}else if(_.depthBuffer&&_.stencilBuffer){const $=$A(_);N&&RA(_)===!1?n.renderbufferStorageMultisample(36161,$,35056,_.width,_.height):RA(_)?h.renderbufferStorageMultisampleEXT(36161,$,35056,_.width,_.height):n.renderbufferStorage(36161,34041,_.width,_.height),n.framebufferRenderbuffer(36160,33306,36161,E)}else{const $=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let tA=0;tA<$.length;tA++){const sA=$[tA],_A=r.convert(sA.format,sA.encoding),aA=r.convert(sA.type),W=w(sA.internalFormat,_A,aA,sA.encoding),mA=$A(_);N&&RA(_)===!1?n.renderbufferStorageMultisample(36161,mA,W,_.width,_.height):RA(_)?h.renderbufferStorageMultisampleEXT(36161,mA,W,_.width,_.height):n.renderbufferStorage(36161,W,_.width,_.height)}}n.bindRenderbuffer(36161,null)}function UA(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!t.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const $=t.get(_.depthTexture).__webglTexture,tA=$A(_);if(_.depthTexture.format===An)RA(_)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,tA):n.framebufferTexture2D(36160,36096,3553,$,0);else if(_.depthTexture.format===Vn)RA(_)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,tA):n.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function CA(E){const _=t.get(E),N=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");UA(_.__webglFramebuffer,E)}else if(N){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(36160,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]=n.createRenderbuffer(),OA(_.__webglDepthbuffer[$],E,!1)}else e.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),OA(_.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function ve(E,_,N){const $=t.get(E);_!==void 0&&cA($.__webglFramebuffer,E,E.texture,36064,3553),N!==void 0&&CA(E)}function Re(E){const _=E.texture,N=t.get(E),$=t.get(_);E.addEventListener("dispose",X),E.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=_.version,s.memory.textures++);const tA=E.isWebGLCubeRenderTarget===!0,sA=E.isWebGLMultipleRenderTargets===!0,_A=x(E)||a;if(tA){N.__webglFramebuffer=[];for(let aA=0;aA<6;aA++)N.__webglFramebuffer[aA]=n.createFramebuffer()}else{if(N.__webglFramebuffer=n.createFramebuffer(),sA)if(i.drawBuffers){const aA=E.texture;for(let W=0,mA=aA.length;W<mA;W++){const vA=t.get(aA[W]);vA.__webglTexture===void 0&&(vA.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&RA(E)===!1){const aA=sA?_:[_];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,N.__webglMultisampledFramebuffer);for(let W=0;W<aA.length;W++){const mA=aA[W];N.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(36161,N.__webglColorRenderbuffer[W]);const vA=r.convert(mA.format,mA.encoding),uA=r.convert(mA.type),BA=w(mA.internalFormat,vA,uA,mA.encoding,E.isXRRenderTarget===!0),pA=$A(E);n.renderbufferStorageMultisample(36161,pA,BA,E.width,E.height),n.framebufferRenderbuffer(36160,36064+W,36161,N.__webglColorRenderbuffer[W])}n.bindRenderbuffer(36161,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),OA(N.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(tA){e.bindTexture(34067,$.__webglTexture),R(34067,_,_A);for(let aA=0;aA<6;aA++)cA(N.__webglFramebuffer[aA],E,_,36064,34069+aA);y(_,_A)&&M(34067),e.unbindTexture()}else if(sA){const aA=E.texture;for(let W=0,mA=aA.length;W<mA;W++){const vA=aA[W],uA=t.get(vA);e.bindTexture(3553,uA.__webglTexture),R(3553,vA,_A),cA(N.__webglFramebuffer,E,vA,36064+W,3553),y(vA,_A)&&M(3553)}e.unbindTexture()}else{let aA=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?aA=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(aA,$.__webglTexture),R(aA,_,_A),cA(N.__webglFramebuffer,E,_,36064,aA),y(_,_A)&&M(aA),e.unbindTexture()}E.depthBuffer&&CA(E)}function fe(E){const _=x(E)||a,N=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let $=0,tA=N.length;$<tA;$++){const sA=N[$];if(y(sA,_)){const _A=E.isWebGLCubeRenderTarget?34067:3553,aA=t.get(sA).__webglTexture;e.bindTexture(_A,aA),M(_A),e.unbindTexture()}}}function Pe(E){if(a&&E.samples>0&&RA(E)===!1){const _=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],N=E.width,$=E.height;let tA=16384;const sA=[],_A=E.stencilBuffer?33306:36096,aA=t.get(E),W=E.isWebGLMultipleRenderTargets===!0;if(W)for(let mA=0;mA<_.length;mA++)e.bindFramebuffer(36160,aA.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+mA,36161,null),e.bindFramebuffer(36160,aA.__webglFramebuffer),n.framebufferTexture2D(36009,36064+mA,3553,null,0);e.bindFramebuffer(36008,aA.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,aA.__webglFramebuffer);for(let mA=0;mA<_.length;mA++){sA.push(36064+mA),E.depthBuffer&&sA.push(_A);const vA=aA.__ignoreDepthValues!==void 0?aA.__ignoreDepthValues:!1;if(vA===!1&&(E.depthBuffer&&(tA|=256),E.stencilBuffer&&(tA|=1024)),W&&n.framebufferRenderbuffer(36008,36064,36161,aA.__webglColorRenderbuffer[mA]),vA===!0&&(n.invalidateFramebuffer(36008,[_A]),n.invalidateFramebuffer(36009,[_A])),W){const uA=t.get(_[mA]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,uA,0)}n.blitFramebuffer(0,0,N,$,0,0,N,$,tA,9728),p&&n.invalidateFramebuffer(36008,sA)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),W)for(let mA=0;mA<_.length;mA++){e.bindFramebuffer(36160,aA.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+mA,36161,aA.__webglColorRenderbuffer[mA]);const vA=t.get(_[mA]).__webglTexture;e.bindFramebuffer(36160,aA.__webglFramebuffer),n.framebufferTexture2D(36009,36064+mA,3553,vA,0)}e.bindFramebuffer(36009,aA.__webglMultisampledFramebuffer)}}function $A(E){return Math.min(u,E.samples)}function RA(E){const _=t.get(E);return a&&E.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function lt(E){const _=s.render.frame;g.get(E)!==_&&(g.set(E,_),E.update())}function Xe(E,_){const N=E.encoding,$=E.format,tA=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ga||N!==sn&&(N===VA?a===!1?A.has("EXT_sRGB")===!0&&$===$e?(E.format=ga,E.minFilter=Ve,E.generateMipmaps=!1):_=Ic.sRGBToLinear(_):($!==$e||tA!==rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",N)),_}this.allocateTextureUnit=K,this.resetTextureUnits=Y,this.setTexture2D=q,this.setTexture2DArray=lA,this.setTexture3D=D,this.setTextureCube=k,this.rebindTextures=ve,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=CA,this.setupFrameBufferTexture=cA,this.useMultisampledRTT=RA}function aB(n,A,e){const t=e.isWebGL2;function i(r,s=null){let a;if(r===rn)return 5121;if(r===Ph)return 32819;if(r===Oh)return 32820;if(r===Hh)return 5120;if(r===Dh)return 5122;if(r===Mc)return 5123;if(r===Rh)return 5124;if(r===qt)return 5125;if(r===jt)return 5126;if(r===yi)return t?5131:(a=A.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Nh)return 6406;if(r===$e)return 6408;if(r===Gh)return 6409;if(r===Vh)return 6410;if(r===An)return 6402;if(r===Vn)return 34041;if(r===ga)return a=A.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Kh)return 6403;if(r===zh)return 36244;if(r===kh)return 33319;if(r===Wh)return 33320;if(r===Xh)return 36249;if(r===cs||r===us||r===hs||r===fs)if(s===VA)if(a=A.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===cs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=A.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===cs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===us)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bo||r===wo||r===vo||r===Co)if(a=A.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Bo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Co)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jh)return a=A.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===_o||r===xo)if(a=A.get("WEBGL_compressed_texture_etc"),a!==null){if(r===_o)return s===VA?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===xo)return s===VA?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Uo||r===Fo||r===yo||r===Eo||r===Mo||r===Qo||r===So||r===bo||r===Io||r===To||r===Lo||r===Ho||r===Do||r===Ro)if(a=A.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Uo)return s===VA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fo)return s===VA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yo)return s===VA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Eo)return s===VA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mo)return s===VA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qo)return s===VA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===So)return s===VA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bo)return s===VA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Io)return s===VA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===To)return s===VA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lo)return s===VA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ho)return s===VA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Do)return s===VA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ro)return s===VA?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ds)if(a=A.get("EXT_texture_compression_bptc"),a!==null){if(r===ds)return s===VA?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Yh||r===Po||r===Oo||r===No)if(a=A.get("EXT_texture_compression_rgtc"),a!==null){if(r===ds)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Po)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Oo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===No)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Rn?t?34042:(a=A.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:i}}class oB extends Ke{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class er extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lB={type:"move"};class Os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const e=this._hand;if(e)for(const t of A.hand.values())this._getHandJoint(e,t)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,e,t){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(A&&e.session.visibilityState!=="visible-blurred"){if(l&&A.hand){s=!0;for(const f of A.hand.values()){const d=e.getJointPose(f,t),m=this._getHandJoint(l,f);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=d.radius),m.visible=d!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=c.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(r=e.getPose(A.gripSpace,t),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(i=e.getPose(A.targetRaySpace,t),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lB)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(A,e){if(A.joints[e.jointName]===void 0){const t=new er;t.matrixAutoUpdate=!1,t.visible=!1,A.joints[e.jointName]=t,A.add(t)}return A.joints[e.jointName]}}class cB extends Qe{constructor(A,e,t,i,r,s,a,o,l,c){if(c=c!==void 0?c:An,c!==An&&c!==Vn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&c===An&&(t=qt),t===void 0&&c===Vn&&(t=Rn),super(null,i,r,s,a,o,c,t,l),this.isDepthTexture=!0,this.image={width:A,height:e},this.magFilter=a!==void 0?a:Fe,this.minFilter=o!==void 0?o:Fe,this.flipY=!1,this.generateMipmaps=!1}}class uB extends kn{constructor(A,e){super();const t=this;let i=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,u=null,h=null,p=null,g=null;const f=e.getContextAttributes();let d=null,m=null;const B=[],v=[],x=new Set,C=new Map,y=new Ke;y.layers.enable(1),y.viewport=new ce;const M=new Ke;M.layers.enable(2),M.viewport=new ce;const w=[y,M],U=new oB;U.layers.enable(1),U.layers.enable(2);let Q=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let k=B[D];return k===void 0&&(k=new Os,B[D]=k),k.getTargetRaySpace()},this.getControllerGrip=function(D){let k=B[D];return k===void 0&&(k=new Os,B[D]=k),k.getGripSpace()},this.getHand=function(D){let k=B[D];return k===void 0&&(k=new Os,B[D]=k),k.getHandSpace()};function X(D){const k=v.indexOf(D.inputSource);if(k===-1)return;const eA=B[k];eA!==void 0&&eA.dispatchEvent({type:D.type,data:D.inputSource})}function b(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",b),i.removeEventListener("inputsourceschange",I);for(let D=0;D<B.length;D++){const k=v[D];k!==null&&(v[D]=null,B[D].disconnect(k))}Q=null,G=null,A.setRenderTarget(d),p=null,h=null,u=null,i=null,m=null,lA.stop(),t.isPresenting=!1,t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(d=A.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",b),i.addEventListener("inputsourceschange",I),f.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||A.capabilities.isWebGL2===!1){const k={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,k),i.updateRenderState({baseLayer:p}),m=new an(p.framebufferWidth,p.framebufferHeight,{format:$e,type:rn,encoding:A.outputEncoding,stencilBuffer:f.stencil})}else{let k=null,eA=null,AA=null;f.depth&&(AA=f.stencil?35056:33190,k=f.stencil?Vn:An,eA=f.stencil?Rn:qt);const R={colorFormat:32856,depthFormat:AA,scaleFactor:r};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(R),i.updateRenderState({layers:[h]}),m=new an(h.textureWidth,h.textureHeight,{format:$e,type:rn,depthTexture:new cB(h.textureWidth,h.textureHeight,eA,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:f.stencil,encoding:A.outputEncoding,samples:f.antialias?4:0});const wA=A.properties.get(m);wA.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),lA.setContext(i),lA.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}};function I(D){for(let k=0;k<D.removed.length;k++){const eA=D.removed[k],AA=v.indexOf(eA);AA>=0&&(v[AA]=null,B[AA].disconnect(eA))}for(let k=0;k<D.added.length;k++){const eA=D.added[k];let AA=v.indexOf(eA);if(AA===-1){for(let wA=0;wA<B.length;wA++)if(wA>=v.length){v.push(eA),AA=wA;break}else if(v[wA]===null){v[wA]=eA,AA=wA;break}if(AA===-1)break}const R=B[AA];R&&R.connect(eA)}}const V=new T,J=new T;function Y(D,k,eA){V.setFromMatrixPosition(k.matrixWorld),J.setFromMatrixPosition(eA.matrixWorld);const AA=V.distanceTo(J),R=k.projectionMatrix.elements,wA=eA.projectionMatrix.elements,fA=R[14]/(R[10]-1),dA=R[14]/(R[10]+1),cA=(R[9]+1)/R[5],OA=(R[9]-1)/R[5],UA=(R[8]-1)/R[0],CA=(wA[8]+1)/wA[0],ve=fA*UA,Re=fA*CA,fe=AA/(-UA+CA),Pe=fe*-UA;k.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Pe),D.translateZ(fe),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const $A=fA+fe,RA=dA+fe,lt=ve-Pe,Xe=Re+(AA-Pe),E=cA*dA/RA*$A,_=OA*dA/RA*$A;D.projectionMatrix.makePerspective(lt,Xe,E,_,$A,RA)}function K(D,k){k===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(k.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;U.near=M.near=y.near=D.near,U.far=M.far=y.far=D.far,(Q!==U.near||G!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),Q=U.near,G=U.far);const k=D.parent,eA=U.cameras;K(U,k);for(let R=0;R<eA.length;R++)K(eA[R],k);U.matrixWorld.decompose(U.position,U.quaternion,U.scale),D.matrix.copy(U.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);const AA=D.children;for(let R=0,wA=AA.length;R<wA;R++)AA[R].updateMatrixWorld(!0);eA.length===2?Y(U,y,M):U.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return o},this.setFoveation=function(D){o=D,h!==null&&(h.fixedFoveation=D),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=D)},this.getPlanes=function(){return x};let Z=null;function q(D,k){if(c=k.getViewerPose(l||s),g=k,c!==null){const eA=c.views;p!==null&&(A.setRenderTargetFramebuffer(m,p.framebuffer),A.setRenderTarget(m));let AA=!1;eA.length!==U.cameras.length&&(U.cameras.length=0,AA=!0);for(let R=0;R<eA.length;R++){const wA=eA[R];let fA=null;if(p!==null)fA=p.getViewport(wA);else{const cA=u.getViewSubImage(h,wA);fA=cA.viewport,R===0&&(A.setRenderTargetTextures(m,cA.colorTexture,h.ignoreDepthValues?void 0:cA.depthStencilTexture),A.setRenderTarget(m))}let dA=w[R];dA===void 0&&(dA=new Ke,dA.layers.enable(R),dA.viewport=new ce,w[R]=dA),dA.matrix.fromArray(wA.transform.matrix),dA.projectionMatrix.fromArray(wA.projectionMatrix),dA.viewport.set(fA.x,fA.y,fA.width,fA.height),R===0&&U.matrix.copy(dA.matrix),AA===!0&&U.cameras.push(dA)}}for(let eA=0;eA<B.length;eA++){const AA=v[eA],R=B[eA];AA!==null&&R!==void 0&&R.update(AA,k,l||s)}if(Z&&Z(D,k),k.detectedPlanes){t.dispatchEvent({type:"planesdetected",data:k.detectedPlanes});let eA=null;for(const AA of x)k.detectedPlanes.has(AA)||(eA===null&&(eA=[]),eA.push(AA));if(eA!==null)for(const AA of eA)x.delete(AA),C.delete(AA),t.dispatchEvent({type:"planeremoved",data:AA});for(const AA of k.detectedPlanes)if(!x.has(AA))x.add(AA),C.set(AA,k.lastChangedTime),t.dispatchEvent({type:"planeadded",data:AA});else{const R=C.get(AA);AA.lastChangedTime>R&&(C.set(AA,AA.lastChangedTime),t.dispatchEvent({type:"planechanged",data:AA}))}}g=null}const lA=new Vc;lA.setAnimationLoop(q),this.setAnimationLoop=function(D){Z=D},this.dispose=function(){}}}function hB(n,A){function e(f,d){d.color.getRGB(f.fogColor.value,Oc(n)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function t(f,d,m,B,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(f,d):d.isMeshToonMaterial?(i(f,d),c(f,d)):d.isMeshPhongMaterial?(i(f,d),l(f,d)):d.isMeshStandardMaterial?(i(f,d),u(f,d),d.isMeshPhysicalMaterial&&h(f,d,v)):d.isMeshMatcapMaterial?(i(f,d),p(f,d)):d.isMeshDepthMaterial?i(f,d):d.isMeshDistanceMaterial?(i(f,d),g(f,d)):d.isMeshNormalMaterial?i(f,d):d.isLineBasicMaterial?(r(f,d),d.isLineDashedMaterial&&s(f,d)):d.isPointsMaterial?a(f,d,m,B):d.isSpriteMaterial?o(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map),d.alphaMap&&(f.alphaMap.value=d.alphaMap),d.bumpMap&&(f.bumpMap.value=d.bumpMap,f.bumpScale.value=d.bumpScale,d.side===De&&(f.bumpScale.value*=-1)),d.displacementMap&&(f.displacementMap.value=d.displacementMap,f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap),d.normalMap&&(f.normalMap.value=d.normalMap,f.normalScale.value.copy(d.normalScale),d.side===De&&f.normalScale.value.negate()),d.specularMap&&(f.specularMap.value=d.specularMap),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const m=A.get(d).envMap;if(m&&(f.envMap.value=m,f.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;const x=n.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*x}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity);let B;d.map?B=d.map:d.specularMap?B=d.specularMap:d.displacementMap?B=d.displacementMap:d.normalMap?B=d.normalMap:d.bumpMap?B=d.bumpMap:d.roughnessMap?B=d.roughnessMap:d.metalnessMap?B=d.metalnessMap:d.alphaMap?B=d.alphaMap:d.emissiveMap?B=d.emissiveMap:d.clearcoatMap?B=d.clearcoatMap:d.clearcoatNormalMap?B=d.clearcoatNormalMap:d.clearcoatRoughnessMap?B=d.clearcoatRoughnessMap:d.iridescenceMap?B=d.iridescenceMap:d.iridescenceThicknessMap?B=d.iridescenceThicknessMap:d.specularIntensityMap?B=d.specularIntensityMap:d.specularColorMap?B=d.specularColorMap:d.transmissionMap?B=d.transmissionMap:d.thicknessMap?B=d.thicknessMap:d.sheenColorMap?B=d.sheenColorMap:d.sheenRoughnessMap&&(B=d.sheenRoughnessMap),B!==void 0&&(B.isWebGLRenderTarget&&(B=B.texture),B.matrixAutoUpdate===!0&&B.updateMatrix(),f.uvTransform.value.copy(B.matrix));let v;d.aoMap?v=d.aoMap:d.lightMap&&(v=d.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uv2Transform.value.copy(v.matrix))}function r(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity}function s(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function a(f,d,m,B){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*m,f.scale.value=B*.5,d.map&&(f.map.value=d.map),d.alphaMap&&(f.alphaMap.value=d.alphaMap),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix))}function o(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map),d.alphaMap&&(f.alphaMap.value=d.alphaMap),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let m;d.map?m=d.map:d.alphaMap&&(m=d.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),f.uvTransform.value.copy(m.matrix))}function l(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function c(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function u(f,d){f.roughness.value=d.roughness,f.metalness.value=d.metalness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap),A.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function h(f,d,m){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),f.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===De&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=m.texture,f.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap)}function p(f,d){d.matcap&&(f.matcap.value=d.matcap)}function g(f,d){f.referencePosition.value.copy(d.referencePosition),f.nearDistance.value=d.nearDistance,f.farDistance.value=d.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function fB(n,A,e,t){let i={},r={},s=[];const a=e.isWebGL2?n.getParameter(35375):0;function o(B,v){const x=v.program;t.uniformBlockBinding(B,x)}function l(B,v){let x=i[B.id];x===void 0&&(g(B),x=c(B),i[B.id]=x,B.addEventListener("dispose",d));const C=v.program;t.updateUBOMapping(B,C);const y=A.render.frame;r[B.id]!==y&&(h(B),r[B.id]=y)}function c(B){const v=u();B.__bindingPointIndex=v;const x=n.createBuffer(),C=B.__size,y=B.usage;return n.bindBuffer(35345,x),n.bufferData(35345,C,y),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,x),x}function u(){for(let B=0;B<a;B++)if(s.indexOf(B)===-1)return s.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(B){const v=i[B.id],x=B.uniforms,C=B.__cache;n.bindBuffer(35345,v);for(let y=0,M=x.length;y<M;y++){const w=x[y];if(p(w,y,C)===!0){const U=w.__offset,Q=Array.isArray(w.value)?w.value:[w.value];let G=0;for(let X=0;X<Q.length;X++){const b=Q[X],I=f(b);typeof b=="number"?(w.__data[0]=b,n.bufferSubData(35345,U+G,w.__data)):b.isMatrix3?(w.__data[0]=b.elements[0],w.__data[1]=b.elements[1],w.__data[2]=b.elements[2],w.__data[3]=b.elements[0],w.__data[4]=b.elements[3],w.__data[5]=b.elements[4],w.__data[6]=b.elements[5],w.__data[7]=b.elements[0],w.__data[8]=b.elements[6],w.__data[9]=b.elements[7],w.__data[10]=b.elements[8],w.__data[11]=b.elements[0]):(b.toArray(w.__data,G),G+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,U,w.__data)}}n.bindBuffer(35345,null)}function p(B,v,x){const C=B.value;if(x[v]===void 0){if(typeof C=="number")x[v]=C;else{const y=Array.isArray(C)?C:[C],M=[];for(let w=0;w<y.length;w++)M.push(y[w].clone());x[v]=M}return!0}else if(typeof C=="number"){if(x[v]!==C)return x[v]=C,!0}else{const y=Array.isArray(x[v])?x[v]:[x[v]],M=Array.isArray(C)?C:[C];for(let w=0;w<y.length;w++){const U=y[w];if(U.equals(M[w])===!1)return U.copy(M[w]),!0}}return!1}function g(B){const v=B.uniforms;let x=0;const C=16;let y=0;for(let M=0,w=v.length;M<w;M++){const U=v[M],Q={boundary:0,storage:0},G=Array.isArray(U.value)?U.value:[U.value];for(let X=0,b=G.length;X<b;X++){const I=G[X],V=f(I);Q.boundary+=V.boundary,Q.storage+=V.storage}if(U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,M>0){y=x%C;const X=C-y;y!==0&&X-Q.boundary<0&&(x+=C-y,U.__offset=x)}x+=Q.storage}return y=x%C,y>0&&(x+=C-y),B.__size=x,B.__cache={},this}function f(B){const v={boundary:0,storage:0};return typeof B=="number"?(v.boundary=4,v.storage=4):B.isVector2?(v.boundary=8,v.storage=8):B.isVector3||B.isColor?(v.boundary=16,v.storage=12):B.isVector4?(v.boundary=16,v.storage=16):B.isMatrix3?(v.boundary=48,v.storage=48):B.isMatrix4?(v.boundary=64,v.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),v}function d(B){const v=B.target;v.removeEventListener("dispose",d);const x=s.indexOf(v.__bindingPointIndex);s.splice(x,1),n.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(const B in i)n.deleteBuffer(i[B]);s=[],i={},r={}}return{bind:o,update:l,dispose:m}}function dB(){const n=Lr("canvas");return n.style.display="block",n}function Jc(n={}){this.isWebGLRenderer=!0;const A=n.canvas!==void 0?n.canvas:dB(),e=n.context!==void 0?n.context:null,t=n.depth!==void 0?n.depth:!0,i=n.stencil!==void 0?n.stencil:!0,r=n.antialias!==void 0?n.antialias:!1,s=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,o=n.powerPreference!==void 0?n.powerPreference:"default",l=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;e!==null?c=e.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let u=null,h=null;const p=[],g=[];this.domElement=A,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=sn,this.physicallyCorrectLights=!1,this.toneMapping=vt,this.toneMappingExposure=1;const f=this;let d=!1,m=0,B=0,v=null,x=-1,C=null;const y=new ce,M=new ce;let w=null,U=A.width,Q=A.height,G=1,X=null,b=null;const I=new ce(0,0,U,Q),V=new ce(0,0,U,Q);let J=!1;const Y=new Wa;let K=!1,Z=!1,q=null;const lA=new jA,D=new IA,k=new T,eA={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function AA(){return v===null?G:1}let R=e;function wA(F,H){for(let O=0;O<F.length;O++){const L=F[O],z=A.getContext(L,H);if(z!==null)return z}return null}try{const F={alpha:!0,depth:t,stencil:i,antialias:r,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:o,failIfMajorPerformanceCaveat:l};if("setAttribute"in A&&A.setAttribute("data-engine",`three.js r${Ka}`),A.addEventListener("webglcontextlost",BA,!1),A.addEventListener("webglcontextrestored",pA,!1),A.addEventListener("webglcontextcreationerror",TA,!1),R===null){const H=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&H.shift(),R=wA(H,F),R===null)throw wA(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let fA,dA,cA,OA,UA,CA,ve,Re,fe,Pe,$A,RA,lt,Xe,E,_,N,$,tA,sA,_A,aA,W,mA;function vA(){fA=new Fg(R),dA=new wg(R,fA,n),fA.init(dA),aA=new aB(R,fA,dA),cA=new rB(R,fA,dA),OA=new Mg,UA=new km,CA=new sB(R,fA,cA,UA,dA,aA,OA),ve=new Cg(f),Re=new Ug(f),fe=new Rf(R,dA),W=new mg(R,fA,fe,dA),Pe=new yg(R,fe,OA,W),$A=new Ig(R,Pe,fe,OA),tA=new bg(R,dA,CA),_=new vg(UA),RA=new zm(f,ve,Re,fA,dA,W,_),lt=new hB(f,UA),Xe=new Xm,E=new $m(fA,dA),$=new gg(f,ve,Re,cA,$A,c,s),N=new iB(f,$A,dA),mA=new fB(R,OA,dA,cA),sA=new Bg(R,fA,OA,dA),_A=new Eg(R,fA,OA,dA),OA.programs=RA.programs,f.capabilities=dA,f.extensions=fA,f.properties=UA,f.renderLists=Xe,f.shadowMap=N,f.state=cA,f.info=OA}vA();const uA=new uB(f,R);this.xr=uA,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const F=fA.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=fA.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(F){F!==void 0&&(G=F,this.setSize(U,Q,!1))},this.getSize=function(F){return F.set(U,Q)},this.setSize=function(F,H,O){if(uA.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=F,Q=H,A.width=Math.floor(F*G),A.height=Math.floor(H*G),O!==!1&&(A.style.width=F+"px",A.style.height=H+"px"),this.setViewport(0,0,F,H)},this.getDrawingBufferSize=function(F){return F.set(U*G,Q*G).floor()},this.setDrawingBufferSize=function(F,H,O){U=F,Q=H,G=O,A.width=Math.floor(F*O),A.height=Math.floor(H*O),this.setViewport(0,0,F,H)},this.getCurrentViewport=function(F){return F.copy(y)},this.getViewport=function(F){return F.copy(I)},this.setViewport=function(F,H,O,L){F.isVector4?I.set(F.x,F.y,F.z,F.w):I.set(F,H,O,L),cA.viewport(y.copy(I).multiplyScalar(G).floor())},this.getScissor=function(F){return F.copy(V)},this.setScissor=function(F,H,O,L){F.isVector4?V.set(F.x,F.y,F.z,F.w):V.set(F,H,O,L),cA.scissor(M.copy(V).multiplyScalar(G).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(F){cA.setScissorTest(J=F)},this.setOpaqueSort=function(F){X=F},this.setTransparentSort=function(F){b=F},this.getClearColor=function(F){return F.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(F=!0,H=!0,O=!0){let L=0;F&&(L|=16384),H&&(L|=256),O&&(L|=1024),R.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){A.removeEventListener("webglcontextlost",BA,!1),A.removeEventListener("webglcontextrestored",pA,!1),A.removeEventListener("webglcontextcreationerror",TA,!1),Xe.dispose(),E.dispose(),UA.dispose(),ve.dispose(),Re.dispose(),$A.dispose(),W.dispose(),mA.dispose(),RA.dispose(),uA.dispose(),uA.removeEventListener("sessionstart",oA),uA.removeEventListener("sessionend",hA),q&&(q.dispose(),q=null),HA.stop()};function BA(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function pA(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const F=OA.autoReset,H=N.enabled,O=N.autoUpdate,L=N.needsUpdate,z=N.type;vA(),OA.autoReset=F,N.enabled=H,N.autoUpdate=O,N.needsUpdate=L,N.type=z}function TA(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function KA(F){const H=F.target;H.removeEventListener("dispose",KA),re(H)}function re(F){S(F),UA.remove(F)}function S(F){const H=UA.get(F).programs;H!==void 0&&(H.forEach(function(O){RA.releaseProgram(O)}),F.isShaderMaterial&&RA.releaseShaderCache(F))}this.renderBufferDirect=function(F,H,O,L,z,gA){H===null&&(H=eA);const xA=z.isMesh&&z.matrixWorld.determinant()<0,yA=eh(F,H,O,L,z);cA.setMaterial(L,xA);let EA=O.index,LA=1;L.wireframe===!0&&(EA=Pe.getWireframeAttribute(O),LA=2);const QA=O.drawRange,SA=O.attributes.position;let JA=QA.start*LA,Se=(QA.start+QA.count)*LA;gA!==null&&(JA=Math.max(JA,gA.start*LA),Se=Math.min(Se,(gA.start+gA.count)*LA)),EA!==null?(JA=Math.max(JA,0),Se=Math.min(Se,EA.count)):SA!=null&&(JA=Math.max(JA,0),Se=Math.min(Se,SA.count));const ut=Se-JA;if(ut<0||ut===1/0)return;W.setup(z,L,yA,O,EA);let Nt,YA=sA;if(EA!==null&&(Nt=fe.get(EA),YA=_A,YA.setIndex(Nt)),z.isMesh)L.wireframe===!0?(cA.setLineWidth(L.wireframeLinewidth*AA()),YA.setMode(1)):YA.setMode(4);else if(z.isLine){let bA=L.linewidth;bA===void 0&&(bA=1),cA.setLineWidth(bA*AA()),z.isLineSegments?YA.setMode(1):z.isLineLoop?YA.setMode(2):YA.setMode(3)}else z.isPoints?YA.setMode(0):z.isSprite&&YA.setMode(4);if(z.isInstancedMesh)YA.renderInstances(JA,ut,z.count);else if(O.isInstancedBufferGeometry){const bA=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,rs=Math.min(O.instanceCount,bA);YA.renderInstances(JA,ut,rs)}else YA.render(JA,ut)},this.compile=function(F,H){function O(L,z,gA){L.transparent===!0&&L.side===rt&&L.forceSinglePass===!1?(L.side=De,L.needsUpdate=!0,Oe(L,z,gA),L.side=Rt,L.needsUpdate=!0,Oe(L,z,gA),L.side=rt):Oe(L,z,gA)}h=E.get(F),h.init(),g.push(h),F.traverseVisible(function(L){L.isLight&&L.layers.test(H.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),h.setupLights(f.physicallyCorrectLights),F.traverse(function(L){const z=L.material;if(z)if(Array.isArray(z))for(let gA=0;gA<z.length;gA++){const xA=z[gA];O(xA,F,L)}else O(z,F,L)}),g.pop(),h=null};let P=null;function j(F){P&&P(F)}function oA(){HA.stop()}function hA(){HA.start()}const HA=new Vc;HA.setAnimationLoop(j),typeof self<"u"&&HA.setContext(self),this.setAnimationLoop=function(F){P=F,uA.setAnimationLoop(F),F===null?HA.stop():HA.start()},uA.addEventListener("sessionstart",oA),uA.addEventListener("sessionend",hA),this.render=function(F,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),uA.enabled===!0&&uA.isPresenting===!0&&(uA.cameraAutoUpdate===!0&&uA.updateCamera(H),H=uA.getCamera()),F.isScene===!0&&F.onBeforeRender(f,F,H,v),h=E.get(F,g.length),h.init(),g.push(h),lA.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Y.setFromProjectionMatrix(lA),Z=this.localClippingEnabled,K=_.init(this.clippingPlanes,Z),u=Xe.get(F,p.length),u.init(),p.push(u),se(F,H,0,f.sortObjects),u.finish(),f.sortObjects===!0&&u.sort(X,b),K===!0&&_.beginShadows();const O=h.state.shadowsArray;if(N.render(O,F,H),K===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(u,F),h.setupLights(f.physicallyCorrectLights),H.isArrayCamera){const L=H.cameras;for(let z=0,gA=L.length;z<gA;z++){const xA=L[z];de(u,F,xA,xA.viewport)}}else de(u,F,H);v!==null&&(CA.updateMultisampleRenderTarget(v),CA.updateRenderTargetMipmap(v)),F.isScene===!0&&F.onAfterRender(f,F,H),W.resetDefaultState(),x=-1,C=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?u=p[p.length-1]:u=null};function se(F,H,O,L){if(F.visible===!1)return;if(F.layers.test(H.layers)){if(F.isGroup)O=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(H);else if(F.isLight)h.pushLight(F),F.castShadow&&h.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||Y.intersectsSprite(F)){L&&k.setFromMatrixPosition(F.matrixWorld).applyMatrix4(lA);const xA=$A.update(F),yA=F.material;yA.visible&&u.push(F,xA,yA,O,k.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(F.isSkinnedMesh&&F.skeleton.frame!==OA.render.frame&&(F.skeleton.update(),F.skeleton.frame=OA.render.frame),!F.frustumCulled||Y.intersectsObject(F))){L&&k.setFromMatrixPosition(F.matrixWorld).applyMatrix4(lA);const xA=$A.update(F),yA=F.material;if(Array.isArray(yA)){const EA=xA.groups;for(let LA=0,QA=EA.length;LA<QA;LA++){const SA=EA[LA],JA=yA[SA.materialIndex];JA&&JA.visible&&u.push(F,xA,JA,O,k.z,SA)}}else yA.visible&&u.push(F,xA,yA,O,k.z,null)}}const gA=F.children;for(let xA=0,yA=gA.length;xA<yA;xA++)se(gA[xA],H,O,L)}function de(F,H,O,L){const z=F.opaque,gA=F.transmissive,xA=F.transparent;h.setupLightsView(O),K===!0&&_.setGlobalState(f.clippingPlanes,O),gA.length>0&&Ot(z,H,O),L&&cA.viewport(y.copy(L)),z.length>0&&zA(z,H,O),gA.length>0&&zA(gA,H,O),xA.length>0&&zA(xA,H,O),cA.buffers.depth.setTest(!0),cA.buffers.depth.setMask(!0),cA.buffers.color.setMask(!0),cA.setPolygonOffset(!1)}function Ot(F,H,O){const L=dA.isWebGL2;q===null&&(q=new an(1,1,{generateMipmaps:!0,type:fA.has("EXT_color_buffer_half_float")?yi:rn,minFilter:Fi,samples:L&&r===!0?4:0})),f.getDrawingBufferSize(D),L?q.setSize(D.x,D.y):q.setSize(Tr(D.x),Tr(D.y));const z=f.getRenderTarget();f.setRenderTarget(q),f.clear();const gA=f.toneMapping;f.toneMapping=vt,zA(F,H,O),f.toneMapping=gA,CA.updateMultisampleRenderTarget(q),CA.updateRenderTargetMipmap(q),f.setRenderTarget(z)}function zA(F,H,O){const L=H.isScene===!0?H.overrideMaterial:null;for(let z=0,gA=F.length;z<gA;z++){const xA=F[z],yA=xA.object,EA=xA.geometry,LA=L===null?xA.material:L,QA=xA.group;yA.layers.test(O.layers)&&ct(yA,H,O,EA,LA,QA)}}function ct(F,H,O,L,z,gA){F.onBeforeRender(f,H,O,L,z,gA),F.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),z.onBeforeRender(f,H,O,L,F,gA),z.transparent===!0&&z.side===rt&&z.forceSinglePass===!1?(z.side=De,z.needsUpdate=!0,f.renderBufferDirect(O,H,L,z,F,gA),z.side=Rt,z.needsUpdate=!0,f.renderBufferDirect(O,H,L,z,F,gA),z.side=rt):f.renderBufferDirect(O,H,L,z,F,gA),F.onAfterRender(f,H,O,L,z,gA)}function Oe(F,H,O){H.isScene!==!0&&(H=eA);const L=UA.get(F),z=h.state.lights,gA=h.state.shadowsArray,xA=z.state.version,yA=RA.getParameters(F,z.state,gA,H,O),EA=RA.getProgramCacheKey(yA);let LA=L.programs;L.environment=F.isMeshStandardMaterial?H.environment:null,L.fog=H.fog,L.envMap=(F.isMeshStandardMaterial?Re:ve).get(F.envMap||L.environment),LA===void 0&&(F.addEventListener("dispose",KA),LA=new Map,L.programs=LA);let QA=LA.get(EA);if(QA!==void 0){if(L.currentProgram===QA&&L.lightsStateVersion===xA)return ao(F,yA),QA}else yA.uniforms=RA.getUniforms(F),F.onBuild(O,yA,f),F.onBeforeCompile(yA,f),QA=RA.acquireProgram(yA,EA),LA.set(EA,QA),L.uniforms=yA.uniforms;const SA=L.uniforms;(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(SA.clippingPlanes=_.uniform),ao(F,yA),L.needsLights=nh(F),L.lightsStateVersion=xA,L.needsLights&&(SA.ambientLightColor.value=z.state.ambient,SA.lightProbe.value=z.state.probe,SA.directionalLights.value=z.state.directional,SA.directionalLightShadows.value=z.state.directionalShadow,SA.spotLights.value=z.state.spot,SA.spotLightShadows.value=z.state.spotShadow,SA.rectAreaLights.value=z.state.rectArea,SA.ltc_1.value=z.state.rectAreaLTC1,SA.ltc_2.value=z.state.rectAreaLTC2,SA.pointLights.value=z.state.point,SA.pointLightShadows.value=z.state.pointShadow,SA.hemisphereLights.value=z.state.hemi,SA.directionalShadowMap.value=z.state.directionalShadowMap,SA.directionalShadowMatrix.value=z.state.directionalShadowMatrix,SA.spotShadowMap.value=z.state.spotShadowMap,SA.spotLightMatrix.value=z.state.spotLightMatrix,SA.spotLightMap.value=z.state.spotLightMap,SA.pointShadowMap.value=z.state.pointShadowMap,SA.pointShadowMatrix.value=z.state.pointShadowMatrix);const JA=QA.getUniforms(),Se=Er.seqWithValue(JA.seq,SA);return L.currentProgram=QA,L.uniformsList=Se,QA}function ao(F,H){const O=UA.get(F);O.outputEncoding=H.outputEncoding,O.instancing=H.instancing,O.skinning=H.skinning,O.morphTargets=H.morphTargets,O.morphNormals=H.morphNormals,O.morphColors=H.morphColors,O.morphTargetsCount=H.morphTargetsCount,O.numClippingPlanes=H.numClippingPlanes,O.numIntersection=H.numClipIntersection,O.vertexAlphas=H.vertexAlphas,O.vertexTangents=H.vertexTangents,O.toneMapping=H.toneMapping}function eh(F,H,O,L,z){H.isScene!==!0&&(H=eA),CA.resetTextureUnits();const gA=H.fog,xA=L.isMeshStandardMaterial?H.environment:null,yA=v===null?f.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:sn,EA=(L.isMeshStandardMaterial?Re:ve).get(L.envMap||xA),LA=L.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,QA=!!L.normalMap&&!!O.attributes.tangent,SA=!!O.morphAttributes.position,JA=!!O.morphAttributes.normal,Se=!!O.morphAttributes.color,ut=L.toneMapped?f.toneMapping:vt,Nt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,YA=Nt!==void 0?Nt.length:0,bA=UA.get(L),rs=h.state.lights;if(K===!0&&(Z===!0||F!==C)){const be=F===C&&L.id===x;_.setState(L,F,be)}let ae=!1;L.version===bA.__version?(bA.needsLights&&bA.lightsStateVersion!==rs.state.version||bA.outputEncoding!==yA||z.isInstancedMesh&&bA.instancing===!1||!z.isInstancedMesh&&bA.instancing===!0||z.isSkinnedMesh&&bA.skinning===!1||!z.isSkinnedMesh&&bA.skinning===!0||bA.envMap!==EA||L.fog===!0&&bA.fog!==gA||bA.numClippingPlanes!==void 0&&(bA.numClippingPlanes!==_.numPlanes||bA.numIntersection!==_.numIntersection)||bA.vertexAlphas!==LA||bA.vertexTangents!==QA||bA.morphTargets!==SA||bA.morphNormals!==JA||bA.morphColors!==Se||bA.toneMapping!==ut||dA.isWebGL2===!0&&bA.morphTargetsCount!==YA)&&(ae=!0):(ae=!0,bA.__version=L.version);let Gt=bA.currentProgram;ae===!0&&(Gt=Oe(L,H,z));let oo=!1,Zn=!1,ss=!1;const Ce=Gt.getUniforms(),Vt=bA.uniforms;if(cA.useProgram(Gt.program)&&(oo=!0,Zn=!0,ss=!0),L.id!==x&&(x=L.id,Zn=!0),oo||C!==F){if(Ce.setValue(R,"projectionMatrix",F.projectionMatrix),dA.logarithmicDepthBuffer&&Ce.setValue(R,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),C!==F&&(C=F,Zn=!0,ss=!0),L.isShaderMaterial||L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshStandardMaterial||L.envMap){const be=Ce.map.cameraPosition;be!==void 0&&be.setValue(R,k.setFromMatrixPosition(F.matrixWorld))}(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&Ce.setValue(R,"isOrthographic",F.isOrthographicCamera===!0),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial||L.isShadowMaterial||z.isSkinnedMesh)&&Ce.setValue(R,"viewMatrix",F.matrixWorldInverse)}if(z.isSkinnedMesh){Ce.setOptional(R,z,"bindMatrix"),Ce.setOptional(R,z,"bindMatrixInverse");const be=z.skeleton;be&&(dA.floatVertexTextures?(be.boneTexture===null&&be.computeBoneTexture(),Ce.setValue(R,"boneTexture",be.boneTexture,CA),Ce.setValue(R,"boneTextureSize",be.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const as=O.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0&&dA.isWebGL2===!0)&&tA.update(z,O,L,Gt),(Zn||bA.receiveShadow!==z.receiveShadow)&&(bA.receiveShadow=z.receiveShadow,Ce.setValue(R,"receiveShadow",z.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(Vt.envMap.value=EA,Vt.flipEnvMap.value=EA.isCubeTexture&&EA.isRenderTargetTexture===!1?-1:1),Zn&&(Ce.setValue(R,"toneMappingExposure",f.toneMappingExposure),bA.needsLights&&th(Vt,ss),gA&&L.fog===!0&&lt.refreshFogUniforms(Vt,gA),lt.refreshMaterialUniforms(Vt,L,G,Q,q),Er.upload(R,bA.uniformsList,Vt,CA)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Er.upload(R,bA.uniformsList,Vt,CA),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&Ce.setValue(R,"center",z.center),Ce.setValue(R,"modelViewMatrix",z.modelViewMatrix),Ce.setValue(R,"normalMatrix",z.normalMatrix),Ce.setValue(R,"modelMatrix",z.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const be=L.uniformsGroups;for(let os=0,ih=be.length;os<ih;os++)if(dA.isWebGL2){const lo=be[os];mA.update(lo,Gt),mA.bind(lo,Gt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gt}function th(F,H){F.ambientLightColor.needsUpdate=H,F.lightProbe.needsUpdate=H,F.directionalLights.needsUpdate=H,F.directionalLightShadows.needsUpdate=H,F.pointLights.needsUpdate=H,F.pointLightShadows.needsUpdate=H,F.spotLights.needsUpdate=H,F.spotLightShadows.needsUpdate=H,F.rectAreaLights.needsUpdate=H,F.hemisphereLights.needsUpdate=H}function nh(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(F,H,O){UA.get(F.texture).__webglTexture=H,UA.get(F.depthTexture).__webglTexture=O;const L=UA.get(F);L.__hasExternalTextures=!0,L.__hasExternalTextures&&(L.__autoAllocateDepthBuffer=O===void 0,L.__autoAllocateDepthBuffer||fA.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,H){const O=UA.get(F);O.__webglFramebuffer=H,O.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(F,H=0,O=0){v=F,m=H,B=O;let L=!0,z=null,gA=!1,xA=!1;if(F){const EA=UA.get(F);EA.__useDefaultFramebuffer!==void 0?(cA.bindFramebuffer(36160,null),L=!1):EA.__webglFramebuffer===void 0?CA.setupRenderTarget(F):EA.__hasExternalTextures&&CA.rebindTextures(F,UA.get(F.texture).__webglTexture,UA.get(F.depthTexture).__webglTexture);const LA=F.texture;(LA.isData3DTexture||LA.isDataArrayTexture||LA.isCompressedArrayTexture)&&(xA=!0);const QA=UA.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(z=QA[H],gA=!0):dA.isWebGL2&&F.samples>0&&CA.useMultisampledRTT(F)===!1?z=UA.get(F).__webglMultisampledFramebuffer:z=QA,y.copy(F.viewport),M.copy(F.scissor),w=F.scissorTest}else y.copy(I).multiplyScalar(G).floor(),M.copy(V).multiplyScalar(G).floor(),w=J;if(cA.bindFramebuffer(36160,z)&&dA.drawBuffers&&L&&cA.drawBuffers(F,z),cA.viewport(y),cA.scissor(M),cA.setScissorTest(w),gA){const EA=UA.get(F.texture);R.framebufferTexture2D(36160,36064,34069+H,EA.__webglTexture,O)}else if(xA){const EA=UA.get(F.texture),LA=H||0;R.framebufferTextureLayer(36160,36064,EA.__webglTexture,O||0,LA)}x=-1},this.readRenderTargetPixels=function(F,H,O,L,z,gA,xA){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yA=UA.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&xA!==void 0&&(yA=yA[xA]),yA){cA.bindFramebuffer(36160,yA);try{const EA=F.texture,LA=EA.format,QA=EA.type;if(LA!==$e&&aA.convert(LA)!==R.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const SA=QA===yi&&(fA.has("EXT_color_buffer_half_float")||dA.isWebGL2&&fA.has("EXT_color_buffer_float"));if(QA!==rn&&aA.convert(QA)!==R.getParameter(35738)&&!(QA===jt&&(dA.isWebGL2||fA.has("OES_texture_float")||fA.has("WEBGL_color_buffer_float")))&&!SA){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=F.width-L&&O>=0&&O<=F.height-z&&R.readPixels(H,O,L,z,aA.convert(LA),aA.convert(QA),gA)}finally{const EA=v!==null?UA.get(v).__webglFramebuffer:null;cA.bindFramebuffer(36160,EA)}}},this.copyFramebufferToTexture=function(F,H,O=0){const L=Math.pow(2,-O),z=Math.floor(H.image.width*L),gA=Math.floor(H.image.height*L);CA.setTexture2D(H,0),R.copyTexSubImage2D(3553,O,0,0,F.x,F.y,z,gA),cA.unbindTexture()},this.copyTextureToTexture=function(F,H,O,L=0){const z=H.image.width,gA=H.image.height,xA=aA.convert(O.format),yA=aA.convert(O.type);CA.setTexture2D(O,0),R.pixelStorei(37440,O.flipY),R.pixelStorei(37441,O.premultiplyAlpha),R.pixelStorei(3317,O.unpackAlignment),H.isDataTexture?R.texSubImage2D(3553,L,F.x,F.y,z,gA,xA,yA,H.image.data):H.isCompressedTexture?R.compressedTexSubImage2D(3553,L,F.x,F.y,H.mipmaps[0].width,H.mipmaps[0].height,xA,H.mipmaps[0].data):R.texSubImage2D(3553,L,F.x,F.y,xA,yA,H.image),L===0&&O.generateMipmaps&&R.generateMipmap(3553),cA.unbindTexture()},this.copyTextureToTexture3D=function(F,H,O,L,z=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const gA=F.max.x-F.min.x+1,xA=F.max.y-F.min.y+1,yA=F.max.z-F.min.z+1,EA=aA.convert(L.format),LA=aA.convert(L.type);let QA;if(L.isData3DTexture)CA.setTexture3D(L,0),QA=32879;else if(L.isDataArrayTexture)CA.setTexture2DArray(L,0),QA=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(37440,L.flipY),R.pixelStorei(37441,L.premultiplyAlpha),R.pixelStorei(3317,L.unpackAlignment);const SA=R.getParameter(3314),JA=R.getParameter(32878),Se=R.getParameter(3316),ut=R.getParameter(3315),Nt=R.getParameter(32877),YA=O.isCompressedTexture?O.mipmaps[0]:O.image;R.pixelStorei(3314,YA.width),R.pixelStorei(32878,YA.height),R.pixelStorei(3316,F.min.x),R.pixelStorei(3315,F.min.y),R.pixelStorei(32877,F.min.z),O.isDataTexture||O.isData3DTexture?R.texSubImage3D(QA,z,H.x,H.y,H.z,gA,xA,yA,EA,LA,YA.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(QA,z,H.x,H.y,H.z,gA,xA,yA,EA,YA.data)):R.texSubImage3D(QA,z,H.x,H.y,H.z,gA,xA,yA,EA,LA,YA),R.pixelStorei(3314,SA),R.pixelStorei(32878,JA),R.pixelStorei(3316,Se),R.pixelStorei(3315,ut),R.pixelStorei(32877,Nt),z===0&&L.generateMipmaps&&R.generateMipmap(QA),cA.unbindTexture()},this.initTexture=function(F){F.isCubeTexture?CA.setTextureCube(F,0):F.isData3DTexture?CA.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?CA.setTexture2DArray(F,0):CA.setTexture2D(F,0),cA.unbindTexture()},this.resetState=function(){m=0,B=0,v=null,cA.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class pB extends Jc{}pB.prototype.isWebGL1Renderer=!0;class gB extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,e){return super.copy(A,e),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const e=super.toJSON(A);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(A){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=A}}class mB extends Qe{constructor(A,e,t,i,r,s,a,o,l){super(A,e,t,i,r,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class BB{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(A,e){const t=this.getUtoTmapping(A);return this.getPoint(t,e)}getPoints(A=5){const e=[];for(let t=0;t<=A;t++)e.push(this.getPoint(t/A));return e}getSpacedPoints(A=5){const e=[];for(let t=0;t<=A;t++)e.push(this.getPointAt(t/A));return e}getLength(){const A=this.getLengths();return A[A.length-1]}getLengths(A=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===A+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let t,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=A;s++)t=this.getPoint(s/A),r+=t.distanceTo(i),e.push(r),i=t;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(A,e){const t=this.getLengths();let i=0;const r=t.length;let s;e?s=e:s=A*t[r-1];let a=0,o=r-1,l;for(;a<=o;)if(i=Math.floor(a+(o-a)/2),l=t[i]-s,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,t[i]===s)return i/(r-1);const c=t[i],h=t[i+1]-c,p=(s-c)/h;return(i+p)/(r-1)}getTangent(A,e){let i=A-1e-4,r=A+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),a=this.getPoint(r),o=e||(s.isVector2?new IA:new T);return o.copy(a).sub(s).normalize(),o}getTangentAt(A,e){const t=this.getUtoTmapping(A);return this.getTangent(t,e)}computeFrenetFrames(A,e){const t=new T,i=[],r=[],s=[],a=new T,o=new jA;for(let p=0;p<=A;p++){const g=p/A;i[p]=this.getTangentAt(g,new T)}r[0]=new T,s[0]=new T;let l=Number.MAX_VALUE;const c=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);c<=l&&(l=c,t.set(1,0,0)),u<=l&&(l=u,t.set(0,1,0)),h<=l&&t.set(0,0,1),a.crossVectors(i[0],t).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let p=1;p<=A;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Be(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(o.makeRotationAxis(a,g))}s[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Be(r[0].dot(r[A]),-1,1));p/=A,i[0].dot(a.crossVectors(r[0],r[A]))>0&&(p=-p);for(let g=1;g<=A;g++)r[g].applyMatrix4(o.makeRotationAxis(i[g],p*g)),s[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}toJSON(){const A={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return A.arcLengthDivisions=this.arcLengthDivisions,A.type=this.type,A}fromJSON(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}}function Ya(){let n=0,A=0,e=0,t=0;function i(r,s,a,o){n=r,A=a,e=-3*r+3*s-2*a-o,t=2*r-2*s+a+o}return{initCatmullRom:function(r,s,a,o,l){i(s,a,l*(a-r),l*(o-s))},initNonuniformCatmullRom:function(r,s,a,o,l,c,u){let h=(s-r)/l-(a-r)/(l+c)+(a-s)/c,p=(a-s)/c-(o-s)/(c+u)+(o-a)/u;h*=c,p*=c,i(s,a,h,p)},calc:function(r){const s=r*r,a=s*r;return n+A*r+e*s+t*a}}}const tr=new T,Ns=new Ya,Gs=new Ya,Vs=new Ya;class wB extends BB{constructor(A=[],e=!1,t="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=A,this.closed=e,this.curveType=t,this.tension=i}getPoint(A,e=new T){const t=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*A;let a=Math.floor(s),o=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:o===0&&a===r-1&&(a=r-2,o=1);let l,c;this.closed||a>0?l=i[(a-1)%r]:(tr.subVectors(i[0],i[1]).add(i[0]),l=tr);const u=i[a%r],h=i[(a+1)%r];if(this.closed||a+2<r?c=i[(a+2)%r]:(tr.subVectors(i[r-1],i[r-2]).add(i[r-1]),c=tr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(h),p),d=Math.pow(h.distanceToSquared(c),p);f<1e-4&&(f=1),g<1e-4&&(g=f),d<1e-4&&(d=f),Ns.initNonuniformCatmullRom(l.x,u.x,h.x,c.x,g,f,d),Gs.initNonuniformCatmullRom(l.y,u.y,h.y,c.y,g,f,d),Vs.initNonuniformCatmullRom(l.z,u.z,h.z,c.z,g,f,d)}else this.curveType==="catmullrom"&&(Ns.initCatmullRom(l.x,u.x,h.x,c.x,this.tension),Gs.initCatmullRom(l.y,u.y,h.y,c.y,this.tension),Vs.initCatmullRom(l.z,u.z,h.z,c.z,this.tension));return t.set(Ns.calc(o),Gs.calc(o),Vs.calc(o)),t}copy(A){super.copy(A),this.points=[];for(let e=0,t=A.points.length;e<t;e++){const i=A.points[e];this.points.push(i.clone())}return this.closed=A.closed,this.curveType=A.curveType,this.tension=A.tension,this}toJSON(){const A=super.toJSON();A.points=[];for(let e=0,t=this.points.length;e<t;e++){const i=this.points[e];A.points.push(i.toArray())}return A.closed=this.closed,A.curveType=this.curveType,A.tension=this.tension,A}fromJSON(A){super.fromJSON(A),this.points=[];for(let e=0,t=A.points.length;e<t;e++){const i=A.points[e];this.points.push(new T().fromArray(i))}return this.closed=A.closed,this.curveType=A.curveType,this.tension=A.tension,this}}class Jr extends At{constructor(A=[],e=[],t=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:A,indices:e,radius:t,detail:i};const r=[],s=[];a(i),l(t),c(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(B){const v=new T,x=new T,C=new T;for(let y=0;y<e.length;y+=3)p(e[y+0],v),p(e[y+1],x),p(e[y+2],C),o(v,x,C,B)}function o(B,v,x,C){const y=C+1,M=[];for(let w=0;w<=y;w++){M[w]=[];const U=B.clone().lerp(x,w/y),Q=v.clone().lerp(x,w/y),G=y-w;for(let X=0;X<=G;X++)X===0&&w===y?M[w][X]=U:M[w][X]=U.clone().lerp(Q,X/G)}for(let w=0;w<y;w++)for(let U=0;U<2*(y-w)-1;U++){const Q=Math.floor(U/2);U%2===0?(h(M[w][Q+1]),h(M[w+1][Q]),h(M[w][Q])):(h(M[w][Q+1]),h(M[w+1][Q+1]),h(M[w+1][Q]))}}function l(B){const v=new T;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(B),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function c(){const B=new T;for(let v=0;v<r.length;v+=3){B.x=r[v+0],B.y=r[v+1],B.z=r[v+2];const x=d(B)/2/Math.PI+.5,C=m(B)/Math.PI+.5;s.push(x,1-C)}g(),u()}function u(){for(let B=0;B<s.length;B+=6){const v=s[B+0],x=s[B+2],C=s[B+4],y=Math.max(v,x,C),M=Math.min(v,x,C);y>.9&&M<.1&&(v<.2&&(s[B+0]+=1),x<.2&&(s[B+2]+=1),C<.2&&(s[B+4]+=1))}}function h(B){r.push(B.x,B.y,B.z)}function p(B,v){const x=B*3;v.x=A[x+0],v.y=A[x+1],v.z=A[x+2]}function g(){const B=new T,v=new T,x=new T,C=new T,y=new IA,M=new IA,w=new IA;for(let U=0,Q=0;U<r.length;U+=9,Q+=6){B.set(r[U+0],r[U+1],r[U+2]),v.set(r[U+3],r[U+4],r[U+5]),x.set(r[U+6],r[U+7],r[U+8]),y.set(s[Q+0],s[Q+1]),M.set(s[Q+2],s[Q+3]),w.set(s[Q+4],s[Q+5]),C.copy(B).add(v).add(x).divideScalar(3);const G=d(C);f(y,Q+0,B,G),f(M,Q+2,v,G),f(w,Q+4,x,G)}}function f(B,v,x,C){C<0&&B.x===1&&(s[v]=B.x-1),x.x===0&&x.z===0&&(s[v]=C/2/Math.PI+.5)}function d(B){return Math.atan2(B.z,-B.x)}function m(B){return Math.atan2(-B.y,Math.sqrt(B.x*B.x+B.z*B.z))}}static fromJSON(A){return new Jr(A.vertices,A.indices,A.radius,A.details)}}class Za extends Jr{constructor(A=1,e=0){const t=(1+Math.sqrt(5))/2,i=1/t,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-t,0,-i,t,0,i,-t,0,i,t,-i,-t,0,-i,t,0,i,-t,0,i,t,0,-t,0,-i,t,0,-i,-t,0,i,t,0,i],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,A,e),this.type="DodecahedronGeometry",this.parameters={radius:A,detail:e}}static fromJSON(A){return new Za(A.radius,A.detail)}}class qa extends Jr{constructor(A=1,e=0){const t=(1+Math.sqrt(5))/2,i=[-1,t,0,1,t,0,-1,-t,0,1,-t,0,0,-1,t,0,1,t,0,-1,-t,0,1,-t,t,0,-1,t,0,1,-t,0,-1,-t,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,A,e),this.type="IcosahedronGeometry",this.parameters={radius:A,detail:e}}static fromJSON(A){return new qa(A.radius,A.detail)}}class ja extends At{constructor(A=1,e=32,t=16,i=0,r=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:A,widthSegments:e,heightSegments:t,phiStart:i,phiLength:r,thetaStart:s,thetaLength:a},e=Math.max(3,Math.floor(e)),t=Math.max(2,Math.floor(t));const o=Math.min(s+a,Math.PI);let l=0;const c=[],u=new T,h=new T,p=[],g=[],f=[],d=[];for(let m=0;m<=t;m++){const B=[],v=m/t;let x=0;m==0&&s==0?x=.5/e:m==t&&o==Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){const y=C/e;u.x=-A*Math.cos(i+y*r)*Math.sin(s+v*a),u.y=A*Math.cos(s+v*a),u.z=A*Math.sin(i+y*r)*Math.sin(s+v*a),g.push(u.x,u.y,u.z),h.copy(u).normalize(),f.push(h.x,h.y,h.z),d.push(y+x,1-v),B.push(l++)}c.push(B)}for(let m=0;m<t;m++)for(let B=0;B<e;B++){const v=c[m][B+1],x=c[m][B],C=c[m+1][B],y=c[m+1][B+1];(m!==0||s>0)&&p.push(v,x,y),(m!==t-1||o<Math.PI)&&p.push(x,C,y)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(d,2))}static fromJSON(A){return new ja(A.radius,A.widthSegments,A.heightSegments,A.phiStart,A.phiLength,A.thetaStart,A.thetaLength)}}class $a extends At{constructor(A=1,e=.4,t=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:A,tube:e,radialSegments:t,tubularSegments:i,arc:r},t=Math.floor(t),i=Math.floor(i);const s=[],a=[],o=[],l=[],c=new T,u=new T,h=new T;for(let p=0;p<=t;p++)for(let g=0;g<=i;g++){const f=g/i*r,d=p/t*Math.PI*2;u.x=(A+e*Math.cos(d))*Math.cos(f),u.y=(A+e*Math.cos(d))*Math.sin(f),u.z=e*Math.sin(d),a.push(u.x,u.y,u.z),c.x=A*Math.cos(f),c.y=A*Math.sin(f),h.subVectors(u,c).normalize(),o.push(h.x,h.y,h.z),l.push(g/i),l.push(p/t)}for(let p=1;p<=t;p++)for(let g=1;g<=i;g++){const f=(i+1)*p+g-1,d=(i+1)*(p-1)+g-1,m=(i+1)*(p-1)+g,B=(i+1)*p+g;s.push(f,d,B),s.push(d,m,B)}this.setIndex(s),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(l,2))}static fromJSON(A){return new $a(A.radius,A.tube,A.radialSegments,A.tubularSegments,A.arc)}}class Jn extends Ti{constructor(A){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new NA(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new NA(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qc,this.normalScale=new IA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.defines={STANDARD:""},this.color.copy(A.color),this.roughness=A.roughness,this.metalness=A.metalness,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.roughnessMap=A.roughnessMap,this.metalnessMap=A.metalnessMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapIntensity=A.envMapIntensity,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class Yc extends we{constructor(A,e=1){super(),this.isLight=!0,this.type="Light",this.color=new NA(A),this.intensity=e}dispose(){}copy(A,e){return super.copy(A,e),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){const e=super.toJSON(A);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ks=new jA,_l=new T,xl=new T;class vB{constructor(A){this.camera=A,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new IA(512,512),this.map=null,this.mapPass=null,this.matrix=new jA,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wa,this._frameExtents=new IA(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(A){const e=this.camera,t=this.matrix;_l.setFromMatrixPosition(A.matrixWorld),e.position.copy(_l),xl.setFromMatrixPosition(A.target.matrixWorld),e.lookAt(xl),e.updateMatrixWorld(),Ks.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ks),t.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),t.multiply(Ks)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.bias=A.bias,this.radius=A.radius,this.mapSize.copy(A.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const A={};return this.bias!==0&&(A.bias=this.bias),this.normalBias!==0&&(A.normalBias=this.normalBias),this.radius!==1&&(A.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(A.mapSize=this.mapSize.toArray()),A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}}class CB extends vB{constructor(){super(new Kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _B extends Yc{constructor(A,e){super(A,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new CB}dispose(){this.shadow.dispose()}copy(A){return super.copy(A),this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}class xB extends Yc{constructor(A,e){super(A,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ka);class wa extends At{constructor(A=(i,r,s)=>s.set(i,r,Math.cos(i)*Math.sin(r)),e=8,t=8){super(),this.type="ParametricGeometry",this.parameters={func:A,slices:e,stacks:t};const i=[],r=[],s=[],a=[],o=1e-5,l=new T,c=new T,u=new T,h=new T,p=new T,g=e+1;for(let f=0;f<=t;f++){const d=f/t;for(let m=0;m<=e;m++){const B=m/e;A(B,d,c),r.push(c.x,c.y,c.z),B-o>=0?(A(B-o,d,u),h.subVectors(c,u)):(A(B+o,d,u),h.subVectors(u,c)),d-o>=0?(A(B,d-o,u),p.subVectors(c,u)):(A(B,d+o,u),p.subVectors(u,c)),l.crossVectors(h,p).normalize(),s.push(l.x,l.y,l.z),a.push(B,d)}}for(let f=0;f<t;f++)for(let d=0;d<e;d++){const m=f*g+d,B=f*g+d+1,v=(f+1)*g+d+1,x=(f+1)*g+d;i.push(m,B,x),i.push(B,v,x)}this.setIndex(i),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(s,3)),this.setAttribute("uv",new te(a,2))}}/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var va=function(n,A){return va=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},va(n,A)};function et(n,A){if(typeof A!="function"&&A!==null)throw new TypeError("Class extends value "+String(A)+" is not a constructor or null");va(n,A);function e(){this.constructor=n}n.prototype=A===null?Object.create(A):(e.prototype=A.prototype,new e)}var Ca=function(){return Ca=Object.assign||function(A){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(A[r]=e[r])}return A},Ca.apply(this,arguments)};function Ue(n,A,e,t){function i(r){return r instanceof e?r:new e(function(s){s(r)})}return new(e||(e=Promise))(function(r,s){function a(c){try{l(t.next(c))}catch(u){s(u)}}function o(c){try{l(t.throw(c))}catch(u){s(u)}}function l(c){c.done?r(c.value):i(c.value).then(a,o)}l((t=t.apply(n,A||[])).next())})}function ge(n,A){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},t,i,r,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(c){return o([l,c])}}function o(l){if(t)throw new TypeError("Generator is already executing.");for(;e;)try{if(t=1,i&&(r=l[0]&2?i.return:l[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,l[1])).done)return r;switch(i=0,r&&(l=[l[0]&2,r.value]),l[0]){case 0:case 1:r=l;break;case 4:return e.label++,{value:l[1],done:!1};case 5:e.label++,i=l[1],l=[0];continue;case 7:l=e.ops.pop(),e.trys.pop();continue;default:if(r=e.trys,!(r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){e.label=l[1];break}if(l[0]===6&&e.label<r[1]){e.label=r[1],r=l;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(l);break}r[2]&&e.ops.pop(),e.trys.pop();continue}l=A.call(n,e)}catch(c){l=[6,c],i=0}finally{t=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function nr(n,A,e){if(e||arguments.length===2)for(var t=0,i=A.length,r;t<i;t++)(r||!(t in A))&&(r||(r=Array.prototype.slice.call(A,0,t)),r[t]=A[t]);return n.concat(r||A)}var xt=function(){function n(A,e,t,i){this.left=A,this.top=e,this.width=t,this.height=i}return n.prototype.add=function(A,e,t,i){return new n(this.left+A,this.top+e,this.width+t,this.height+i)},n.fromClientRect=function(A,e){return new n(e.left+A.windowBounds.left,e.top+A.windowBounds.top,e.width,e.height)},n.fromDOMRectList=function(A,e){var t=Array.from(e).find(function(i){return i.width!==0});return t?new n(t.left+A.windowBounds.left,t.top+A.windowBounds.top,t.width,t.height):n.EMPTY},n.EMPTY=new n(0,0,0,0),n}(),Yr=function(n,A){return xt.fromClientRect(n,A.getBoundingClientRect())},UB=function(n){var A=n.body,e=n.documentElement;if(!A||!e)throw new Error("Unable to get document size");var t=Math.max(Math.max(A.scrollWidth,e.scrollWidth),Math.max(A.offsetWidth,e.offsetWidth),Math.max(A.clientWidth,e.clientWidth)),i=Math.max(Math.max(A.scrollHeight,e.scrollHeight),Math.max(A.offsetHeight,e.offsetHeight),Math.max(A.clientHeight,e.clientHeight));return new xt(0,0,t,i)},Zr=function(n){for(var A=[],e=0,t=n.length;e<t;){var i=n.charCodeAt(e++);if(i>=55296&&i<=56319&&e<t){var r=n.charCodeAt(e++);(r&64512)===56320?A.push(((i&1023)<<10)+(r&1023)+65536):(A.push(i),e--)}else A.push(i)}return A},XA=function(){for(var n=[],A=0;A<arguments.length;A++)n[A]=arguments[A];if(String.fromCodePoint)return String.fromCodePoint.apply(String,n);var e=n.length;if(!e)return"";for(var t=[],i=-1,r="";++i<e;){var s=n[i];s<=65535?t.push(s):(s-=65536,t.push((s>>10)+55296,s%1024+56320)),(i+1===e||t.length>16384)&&(r+=String.fromCharCode.apply(String,t),t.length=0)}return r},Ul="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",FB=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ir=0;ir<Ul.length;ir++)FB[Ul.charCodeAt(ir)]=ir;var Fl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ui=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var rr=0;rr<Fl.length;rr++)ui[Fl.charCodeAt(rr)]=rr;var yB=function(n){var A=n.length*.75,e=n.length,t,i=0,r,s,a,o;n[n.length-1]==="="&&(A--,n[n.length-2]==="="&&A--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(A):new Array(A),c=Array.isArray(l)?l:new Uint8Array(l);for(t=0;t<e;t+=4)r=ui[n.charCodeAt(t)],s=ui[n.charCodeAt(t+1)],a=ui[n.charCodeAt(t+2)],o=ui[n.charCodeAt(t+3)],c[i++]=r<<2|s>>4,c[i++]=(s&15)<<4|a>>2,c[i++]=(a&3)<<6|o&63;return l},EB=function(n){for(var A=n.length,e=[],t=0;t<A;t+=2)e.push(n[t+1]<<8|n[t]);return e},MB=function(n){for(var A=n.length,e=[],t=0;t<A;t+=4)e.push(n[t+3]<<24|n[t+2]<<16|n[t+1]<<8|n[t]);return e},tn=5,Ao=6+5,zs=2,QB=Ao-tn,Zc=65536>>tn,SB=1<<tn,ks=SB-1,bB=1024>>tn,IB=Zc+bB,TB=IB,LB=32,HB=TB+LB,DB=65536>>Ao,RB=1<<QB,PB=RB-1,yl=function(n,A,e){return n.slice?n.slice(A,e):new Uint16Array(Array.prototype.slice.call(n,A,e))},OB=function(n,A,e){return n.slice?n.slice(A,e):new Uint32Array(Array.prototype.slice.call(n,A,e))},NB=function(n,A){var e=yB(n),t=Array.isArray(e)?MB(e):new Uint32Array(e),i=Array.isArray(e)?EB(e):new Uint16Array(e),r=24,s=yl(i,r/2,t[4]/2),a=t[5]===2?yl(i,(r+t[4])/2):OB(t,Math.ceil((r+t[4])/4));return new GB(t[0],t[1],t[2],t[3],s,a)},GB=function(){function n(A,e,t,i,r,s){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=i,this.index=r,this.data=s}return n.prototype.get=function(A){var e;if(A>=0){if(A<55296||A>56319&&A<=65535)return e=this.index[A>>tn],e=(e<<zs)+(A&ks),this.data[e];if(A<=65535)return e=this.index[Zc+(A-55296>>tn)],e=(e<<zs)+(A&ks),this.data[e];if(A<this.highStart)return e=HB-DB+(A>>Ao),e=this.index[e],e+=A>>tn&PB,e=this.index[e],e=(e<<zs)+(A&ks),this.data[e];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},n}(),El="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",VB=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var sr=0;sr<El.length;sr++)VB[El.charCodeAt(sr)]=sr;var KB="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",Ml=50,zB=1,qc=2,jc=3,kB=4,WB=5,Ql=7,$c=8,Sl=9,bt=10,_a=11,bl=12,xa=13,XB=14,hi=15,Ua=16,ar=17,ii=18,JB=19,Il=20,Fa=21,ri=22,Ws=23,xn=24,Le=25,fi=26,di=27,Un=28,YB=29,Zt=30,ZB=31,or=32,lr=33,ya=34,Ea=35,Ma=36,Mi=37,Qa=38,Mr=39,Qr=40,Xs=41,Au=42,qB=43,jB=[9001,65288],eu="!",MA="×",cr="÷",Sa=NB(KB),mt=[Zt,Ma],ba=[zB,qc,jc,WB],tu=[bt,$c],Tl=[di,fi],$B=ba.concat(tu),Ll=[Qa,Mr,Qr,ya,Ea],A0=[hi,xa],e0=function(n,A){A===void 0&&(A="strict");var e=[],t=[],i=[];return n.forEach(function(r,s){var a=Sa.get(r);if(a>Ml?(i.push(!0),a-=Ml):i.push(!1),["normal","auto","loose"].indexOf(A)!==-1&&[8208,8211,12316,12448].indexOf(r)!==-1)return t.push(s),e.push(Ua);if(a===kB||a===_a){if(s===0)return t.push(s),e.push(Zt);var o=e[s-1];return $B.indexOf(o)===-1?(t.push(t[s-1]),e.push(o)):(t.push(s),e.push(Zt))}if(t.push(s),a===ZB)return e.push(A==="strict"?Fa:Mi);if(a===Au||a===YB)return e.push(Zt);if(a===qB)return r>=131072&&r<=196605||r>=196608&&r<=262141?e.push(Mi):e.push(Zt);e.push(a)}),[t,e,i]},Js=function(n,A,e,t){var i=t[e];if(Array.isArray(n)?n.indexOf(i)!==-1:n===i)for(var r=e;r<=t.length;){r++;var s=t[r];if(s===A)return!0;if(s!==bt)break}if(i===bt)for(var r=e;r>0;){r--;var a=t[r];if(Array.isArray(n)?n.indexOf(a)!==-1:n===a)for(var o=e;o<=t.length;){o++;var s=t[o];if(s===A)return!0;if(s!==bt)break}if(a!==bt)break}return!1},Hl=function(n,A){for(var e=n;e>=0;){var t=A[e];if(t===bt)e--;else return t}return 0},t0=function(n,A,e,t,i){if(e[t]===0)return MA;var r=t-1;if(Array.isArray(i)&&i[r]===!0)return MA;var s=r-1,a=r+1,o=A[r],l=s>=0?A[s]:0,c=A[a];if(o===qc&&c===jc)return MA;if(ba.indexOf(o)!==-1)return eu;if(ba.indexOf(c)!==-1||tu.indexOf(c)!==-1)return MA;if(Hl(r,A)===$c)return cr;if(Sa.get(n[r])===_a||(o===or||o===lr)&&Sa.get(n[a])===_a||o===Ql||c===Ql||o===Sl||[bt,xa,hi].indexOf(o)===-1&&c===Sl||[ar,ii,JB,xn,Un].indexOf(c)!==-1||Hl(r,A)===ri||Js(Ws,ri,r,A)||Js([ar,ii],Fa,r,A)||Js(bl,bl,r,A))return MA;if(o===bt)return cr;if(o===Ws||c===Ws)return MA;if(c===Ua||o===Ua)return cr;if([xa,hi,Fa].indexOf(c)!==-1||o===XB||l===Ma&&A0.indexOf(o)!==-1||o===Un&&c===Ma||c===Il||mt.indexOf(c)!==-1&&o===Le||mt.indexOf(o)!==-1&&c===Le||o===di&&[Mi,or,lr].indexOf(c)!==-1||[Mi,or,lr].indexOf(o)!==-1&&c===fi||mt.indexOf(o)!==-1&&Tl.indexOf(c)!==-1||Tl.indexOf(o)!==-1&&mt.indexOf(c)!==-1||[di,fi].indexOf(o)!==-1&&(c===Le||[ri,hi].indexOf(c)!==-1&&A[a+1]===Le)||[ri,hi].indexOf(o)!==-1&&c===Le||o===Le&&[Le,Un,xn].indexOf(c)!==-1)return MA;if([Le,Un,xn,ar,ii].indexOf(c)!==-1)for(var u=r;u>=0;){var h=A[u];if(h===Le)return MA;if([Un,xn].indexOf(h)!==-1)u--;else break}if([di,fi].indexOf(c)!==-1)for(var u=[ar,ii].indexOf(o)!==-1?s:r;u>=0;){var h=A[u];if(h===Le)return MA;if([Un,xn].indexOf(h)!==-1)u--;else break}if(Qa===o&&[Qa,Mr,ya,Ea].indexOf(c)!==-1||[Mr,ya].indexOf(o)!==-1&&[Mr,Qr].indexOf(c)!==-1||[Qr,Ea].indexOf(o)!==-1&&c===Qr||Ll.indexOf(o)!==-1&&[Il,fi].indexOf(c)!==-1||Ll.indexOf(c)!==-1&&o===di||mt.indexOf(o)!==-1&&mt.indexOf(c)!==-1||o===xn&&mt.indexOf(c)!==-1||mt.concat(Le).indexOf(o)!==-1&&c===ri&&jB.indexOf(n[a])===-1||mt.concat(Le).indexOf(c)!==-1&&o===ii)return MA;if(o===Xs&&c===Xs){for(var p=e[r],g=1;p>0&&(p--,A[p]===Xs);)g++;if(g%2!==0)return MA}return o===or&&c===lr?MA:cr},n0=function(n,A){A||(A={lineBreak:"normal",wordBreak:"normal"});var e=e0(n,A.lineBreak),t=e[0],i=e[1],r=e[2];(A.wordBreak==="break-all"||A.wordBreak==="break-word")&&(i=i.map(function(a){return[Le,Zt,Au].indexOf(a)!==-1?Mi:a}));var s=A.wordBreak==="keep-all"?r.map(function(a,o){return a&&n[o]>=19968&&n[o]<=40959}):void 0;return[t,i,s]},i0=function(){function n(A,e,t,i){this.codePoints=A,this.required=e===eu,this.start=t,this.end=i}return n.prototype.slice=function(){return XA.apply(void 0,this.codePoints.slice(this.start,this.end))},n}(),r0=function(n,A){var e=Zr(n),t=n0(e,A),i=t[0],r=t[1],s=t[2],a=e.length,o=0,l=0;return{next:function(){if(l>=a)return{done:!0,value:null};for(var c=MA;l<a&&(c=t0(e,r,i,++l,s))===MA;);if(c!==MA||l===a){var u=new i0(e,c,o,l);return o=l,{value:u,done:!1}}return{done:!0,value:null}}}},s0=1,a0=2,Hi=4,Dl=8,Hr=10,Rl=47,vi=92,o0=9,l0=32,ur=34,si=61,c0=35,u0=36,h0=37,hr=39,fr=40,ai=41,f0=95,Ee=45,d0=33,p0=60,g0=62,m0=64,B0=91,w0=93,v0=61,C0=123,dr=63,_0=125,Pl=124,x0=126,U0=128,Ol=65533,Ys=42,$t=43,F0=44,y0=58,E0=59,Qi=46,M0=0,Q0=8,S0=11,b0=14,I0=31,T0=127,tt=-1,nu=48,iu=97,ru=101,L0=102,H0=117,D0=122,su=65,au=69,ou=70,R0=85,P0=90,me=function(n){return n>=nu&&n<=57},O0=function(n){return n>=55296&&n<=57343},Fn=function(n){return me(n)||n>=su&&n<=ou||n>=iu&&n<=L0},N0=function(n){return n>=iu&&n<=D0},G0=function(n){return n>=su&&n<=P0},V0=function(n){return N0(n)||G0(n)},K0=function(n){return n>=U0},pr=function(n){return n===Hr||n===o0||n===l0},Dr=function(n){return V0(n)||K0(n)||n===f0},Nl=function(n){return Dr(n)||me(n)||n===Ee},z0=function(n){return n>=M0&&n<=Q0||n===S0||n>=b0&&n<=I0||n===T0},St=function(n,A){return n!==vi?!1:A!==Hr},gr=function(n,A,e){return n===Ee?Dr(A)||St(A,e):Dr(n)?!0:!!(n===vi&&St(n,A))},Zs=function(n,A,e){return n===$t||n===Ee?me(A)?!0:A===Qi&&me(e):me(n===Qi?A:n)},k0=function(n){var A=0,e=1;(n[A]===$t||n[A]===Ee)&&(n[A]===Ee&&(e=-1),A++);for(var t=[];me(n[A]);)t.push(n[A++]);var i=t.length?parseInt(XA.apply(void 0,t),10):0;n[A]===Qi&&A++;for(var r=[];me(n[A]);)r.push(n[A++]);var s=r.length,a=s?parseInt(XA.apply(void 0,r),10):0;(n[A]===au||n[A]===ru)&&A++;var o=1;(n[A]===$t||n[A]===Ee)&&(n[A]===Ee&&(o=-1),A++);for(var l=[];me(n[A]);)l.push(n[A++]);var c=l.length?parseInt(XA.apply(void 0,l),10):0;return e*(i+a*Math.pow(10,-s))*Math.pow(10,o*c)},W0={type:2},X0={type:3},J0={type:4},Y0={type:13},Z0={type:8},q0={type:21},j0={type:9},$0={type:10},Aw={type:11},ew={type:12},tw={type:14},mr={type:23},nw={type:1},iw={type:25},rw={type:24},sw={type:26},aw={type:27},ow={type:28},lw={type:29},cw={type:31},Ia={type:32},lu=function(){function n(){this._value=[]}return n.prototype.write=function(A){this._value=this._value.concat(Zr(A))},n.prototype.read=function(){for(var A=[],e=this.consumeToken();e!==Ia;)A.push(e),e=this.consumeToken();return A},n.prototype.consumeToken=function(){var A=this.consumeCodePoint();switch(A){case ur:return this.consumeStringToken(ur);case c0:var e=this.peekCodePoint(0),t=this.peekCodePoint(1),i=this.peekCodePoint(2);if(Nl(e)||St(t,i)){var r=gr(e,t,i)?a0:s0,s=this.consumeName();return{type:5,value:s,flags:r}}break;case u0:if(this.peekCodePoint(0)===si)return this.consumeCodePoint(),Y0;break;case hr:return this.consumeStringToken(hr);case fr:return W0;case ai:return X0;case Ys:if(this.peekCodePoint(0)===si)return this.consumeCodePoint(),tw;break;case $t:if(Zs(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case F0:return J0;case Ee:var a=A,o=this.peekCodePoint(0),l=this.peekCodePoint(1);if(Zs(a,o,l))return this.reconsumeCodePoint(A),this.consumeNumericToken();if(gr(a,o,l))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();if(o===Ee&&l===g0)return this.consumeCodePoint(),this.consumeCodePoint(),rw;break;case Qi:if(Zs(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case Rl:if(this.peekCodePoint(0)===Ys)for(this.consumeCodePoint();;){var c=this.consumeCodePoint();if(c===Ys&&(c=this.consumeCodePoint(),c===Rl))return this.consumeToken();if(c===tt)return this.consumeToken()}break;case y0:return sw;case E0:return aw;case p0:if(this.peekCodePoint(0)===d0&&this.peekCodePoint(1)===Ee&&this.peekCodePoint(2)===Ee)return this.consumeCodePoint(),this.consumeCodePoint(),iw;break;case m0:var u=this.peekCodePoint(0),h=this.peekCodePoint(1),p=this.peekCodePoint(2);if(gr(u,h,p)){var s=this.consumeName();return{type:7,value:s}}break;case B0:return ow;case vi:if(St(A,this.peekCodePoint(0)))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();break;case w0:return lw;case v0:if(this.peekCodePoint(0)===si)return this.consumeCodePoint(),Z0;break;case C0:return Aw;case _0:return ew;case H0:case R0:var g=this.peekCodePoint(0),f=this.peekCodePoint(1);return g===$t&&(Fn(f)||f===dr)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(A),this.consumeIdentLikeToken();case Pl:if(this.peekCodePoint(0)===si)return this.consumeCodePoint(),j0;if(this.peekCodePoint(0)===Pl)return this.consumeCodePoint(),q0;break;case x0:if(this.peekCodePoint(0)===si)return this.consumeCodePoint(),$0;break;case tt:return Ia}return pr(A)?(this.consumeWhiteSpace(),cw):me(A)?(this.reconsumeCodePoint(A),this.consumeNumericToken()):Dr(A)?(this.reconsumeCodePoint(A),this.consumeIdentLikeToken()):{type:6,value:XA(A)}},n.prototype.consumeCodePoint=function(){var A=this._value.shift();return typeof A>"u"?-1:A},n.prototype.reconsumeCodePoint=function(A){this._value.unshift(A)},n.prototype.peekCodePoint=function(A){return A>=this._value.length?-1:this._value[A]},n.prototype.consumeUnicodeRangeToken=function(){for(var A=[],e=this.consumeCodePoint();Fn(e)&&A.length<6;)A.push(e),e=this.consumeCodePoint();for(var t=!1;e===dr&&A.length<6;)A.push(e),e=this.consumeCodePoint(),t=!0;if(t){var i=parseInt(XA.apply(void 0,A.map(function(o){return o===dr?nu:o})),16),r=parseInt(XA.apply(void 0,A.map(function(o){return o===dr?ou:o})),16);return{type:30,start:i,end:r}}var s=parseInt(XA.apply(void 0,A),16);if(this.peekCodePoint(0)===Ee&&Fn(this.peekCodePoint(1))){this.consumeCodePoint(),e=this.consumeCodePoint();for(var a=[];Fn(e)&&a.length<6;)a.push(e),e=this.consumeCodePoint();var r=parseInt(XA.apply(void 0,a),16);return{type:30,start:s,end:r}}else return{type:30,start:s,end:s}},n.prototype.consumeIdentLikeToken=function(){var A=this.consumeName();return A.toLowerCase()==="url"&&this.peekCodePoint(0)===fr?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===fr?(this.consumeCodePoint(),{type:19,value:A}):{type:20,value:A}},n.prototype.consumeUrlToken=function(){var A=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===tt)return{type:22,value:""};var e=this.peekCodePoint(0);if(e===hr||e===ur){var t=this.consumeStringToken(this.consumeCodePoint());return t.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===tt||this.peekCodePoint(0)===ai)?(this.consumeCodePoint(),{type:22,value:t.value}):(this.consumeBadUrlRemnants(),mr)}for(;;){var i=this.consumeCodePoint();if(i===tt||i===ai)return{type:22,value:XA.apply(void 0,A)};if(pr(i))return this.consumeWhiteSpace(),this.peekCodePoint(0)===tt||this.peekCodePoint(0)===ai?(this.consumeCodePoint(),{type:22,value:XA.apply(void 0,A)}):(this.consumeBadUrlRemnants(),mr);if(i===ur||i===hr||i===fr||z0(i))return this.consumeBadUrlRemnants(),mr;if(i===vi)if(St(i,this.peekCodePoint(0)))A.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),mr;else A.push(i)}},n.prototype.consumeWhiteSpace=function(){for(;pr(this.peekCodePoint(0));)this.consumeCodePoint()},n.prototype.consumeBadUrlRemnants=function(){for(;;){var A=this.consumeCodePoint();if(A===ai||A===tt)return;St(A,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},n.prototype.consumeStringSlice=function(A){for(var e=5e4,t="";A>0;){var i=Math.min(e,A);t+=XA.apply(void 0,this._value.splice(0,i)),A-=i}return this._value.shift(),t},n.prototype.consumeStringToken=function(A){var e="",t=0;do{var i=this._value[t];if(i===tt||i===void 0||i===A)return e+=this.consumeStringSlice(t),{type:0,value:e};if(i===Hr)return this._value.splice(0,t),nw;if(i===vi){var r=this._value[t+1];r!==tt&&r!==void 0&&(r===Hr?(e+=this.consumeStringSlice(t),t=-1,this._value.shift()):St(i,r)&&(e+=this.consumeStringSlice(t),e+=XA(this.consumeEscapedCodePoint()),t=-1))}t++}while(!0)},n.prototype.consumeNumber=function(){var A=[],e=Hi,t=this.peekCodePoint(0);for((t===$t||t===Ee)&&A.push(this.consumeCodePoint());me(this.peekCodePoint(0));)A.push(this.consumeCodePoint());t=this.peekCodePoint(0);var i=this.peekCodePoint(1);if(t===Qi&&me(i))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=Dl;me(this.peekCodePoint(0));)A.push(this.consumeCodePoint());t=this.peekCodePoint(0),i=this.peekCodePoint(1);var r=this.peekCodePoint(2);if((t===au||t===ru)&&((i===$t||i===Ee)&&me(r)||me(i)))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=Dl;me(this.peekCodePoint(0));)A.push(this.consumeCodePoint());return[k0(A),e]},n.prototype.consumeNumericToken=function(){var A=this.consumeNumber(),e=A[0],t=A[1],i=this.peekCodePoint(0),r=this.peekCodePoint(1),s=this.peekCodePoint(2);if(gr(i,r,s)){var a=this.consumeName();return{type:15,number:e,flags:t,unit:a}}return i===h0?(this.consumeCodePoint(),{type:16,number:e,flags:t}):{type:17,number:e,flags:t}},n.prototype.consumeEscapedCodePoint=function(){var A=this.consumeCodePoint();if(Fn(A)){for(var e=XA(A);Fn(this.peekCodePoint(0))&&e.length<6;)e+=XA(this.consumeCodePoint());pr(this.peekCodePoint(0))&&this.consumeCodePoint();var t=parseInt(e,16);return t===0||O0(t)||t>1114111?Ol:t}return A===tt?Ol:A},n.prototype.consumeName=function(){for(var A="";;){var e=this.consumeCodePoint();if(Nl(e))A+=XA(e);else if(St(e,this.peekCodePoint(0)))A+=XA(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(e),A}},n}(),cu=function(){function n(A){this._tokens=A}return n.create=function(A){var e=new lu;return e.write(A),new n(e.read())},n.parseValue=function(A){return n.create(A).parseComponentValue()},n.parseValues=function(A){return n.create(A).parseComponentValues()},n.prototype.parseComponentValue=function(){for(var A=this.consumeToken();A.type===31;)A=this.consumeToken();if(A.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(A);var e=this.consumeComponentValue();do A=this.consumeToken();while(A.type===31);if(A.type===32)return e;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},n.prototype.parseComponentValues=function(){for(var A=[];;){var e=this.consumeComponentValue();if(e.type===32)return A;A.push(e),A.push()}},n.prototype.consumeComponentValue=function(){var A=this.consumeToken();switch(A.type){case 11:case 28:case 2:return this.consumeSimpleBlock(A.type);case 19:return this.consumeFunction(A)}return A},n.prototype.consumeSimpleBlock=function(A){for(var e={type:A,values:[]},t=this.consumeToken();;){if(t.type===32||hw(t,A))return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue()),t=this.consumeToken()}},n.prototype.consumeFunction=function(A){for(var e={name:A.value,values:[],type:18};;){var t=this.consumeToken();if(t.type===32||t.type===3)return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue())}},n.prototype.consumeToken=function(){var A=this._tokens.shift();return typeof A>"u"?Ia:A},n.prototype.reconsumeToken=function(A){this._tokens.unshift(A)},n}(),Di=function(n){return n.type===15},Yn=function(n){return n.type===17},PA=function(n){return n.type===20},uw=function(n){return n.type===0},Ta=function(n,A){return PA(n)&&n.value===A},uu=function(n){return n.type!==31},zn=function(n){return n.type!==31&&n.type!==4},at=function(n){var A=[],e=[];return n.forEach(function(t){if(t.type===4){if(e.length===0)throw new Error("Error parsing function args, zero tokens for arg");A.push(e),e=[];return}t.type!==31&&e.push(t)}),e.length&&A.push(e),A},hw=function(n,A){return A===11&&n.type===12||A===28&&n.type===29?!0:A===2&&n.type===3},Pt=function(n){return n.type===17||n.type===15},qA=function(n){return n.type===16||Pt(n)},hu=function(n){return n.length>1?[n[0],n[1]]:[n[0]]},he={type:17,number:0,flags:Hi},eo={type:16,number:50,flags:Hi},It={type:16,number:100,flags:Hi},pi=function(n,A,e){var t=n[0],i=n[1];return[GA(t,A),GA(typeof i<"u"?i:t,e)]},GA=function(n,A){if(n.type===16)return n.number/100*A;if(Di(n))switch(n.unit){case"rem":case"em":return 16*n.number;case"px":default:return n.number}return n.number},fu="deg",du="grad",pu="rad",gu="turn",qr={name:"angle",parse:function(n,A){if(A.type===15)switch(A.unit){case fu:return Math.PI*A.number/180;case du:return Math.PI/200*A.number;case pu:return A.number;case gu:return Math.PI*2*A.number}throw new Error("Unsupported angle type")}},mu=function(n){return n.type===15&&(n.unit===fu||n.unit===du||n.unit===pu||n.unit===gu)},Bu=function(n){var A=n.filter(PA).map(function(e){return e.value}).join(" ");switch(A){case"to bottom right":case"to right bottom":case"left top":case"top left":return[he,he];case"to top":case"bottom":return ke(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[he,It];case"to right":case"left":return ke(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[It,It];case"to bottom":case"top":return ke(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[It,he];case"to left":case"right":return ke(270)}return 0},ke=function(n){return Math.PI*n/180},Ht={name:"color",parse:function(n,A){if(A.type===18){var e=fw[A.name];if(typeof e>"u")throw new Error('Attempting to parse an unsupported color function "'+A.name+'"');return e(n,A.values)}if(A.type===5){if(A.value.length===3){var t=A.value.substring(0,1),i=A.value.substring(1,2),r=A.value.substring(2,3);return Tt(parseInt(t+t,16),parseInt(i+i,16),parseInt(r+r,16),1)}if(A.value.length===4){var t=A.value.substring(0,1),i=A.value.substring(1,2),r=A.value.substring(2,3),s=A.value.substring(3,4);return Tt(parseInt(t+t,16),parseInt(i+i,16),parseInt(r+r,16),parseInt(s+s,16)/255)}if(A.value.length===6){var t=A.value.substring(0,2),i=A.value.substring(2,4),r=A.value.substring(4,6);return Tt(parseInt(t,16),parseInt(i,16),parseInt(r,16),1)}if(A.value.length===8){var t=A.value.substring(0,2),i=A.value.substring(2,4),r=A.value.substring(4,6),s=A.value.substring(6,8);return Tt(parseInt(t,16),parseInt(i,16),parseInt(r,16),parseInt(s,16)/255)}}if(A.type===20){var a=Ct[A.value.toUpperCase()];if(typeof a<"u")return a}return Ct.TRANSPARENT}},Dt=function(n){return(255&n)===0},le=function(n){var A=255&n,e=255&n>>8,t=255&n>>16,i=255&n>>24;return A<255?"rgba("+i+","+t+","+e+","+A/255+")":"rgb("+i+","+t+","+e+")"},Tt=function(n,A,e,t){return(n<<24|A<<16|e<<8|Math.round(t*255)<<0)>>>0},Gl=function(n,A){if(n.type===17)return n.number;if(n.type===16){var e=A===3?1:255;return A===3?n.number/100*e:Math.round(n.number/100*e)}return 0},Vl=function(n,A){var e=A.filter(zn);if(e.length===3){var t=e.map(Gl),i=t[0],r=t[1],s=t[2];return Tt(i,r,s,1)}if(e.length===4){var a=e.map(Gl),i=a[0],r=a[1],s=a[2],o=a[3];return Tt(i,r,s,o)}return 0};function qs(n,A,e){return e<0&&(e+=1),e>=1&&(e-=1),e<1/6?(A-n)*e*6+n:e<1/2?A:e<2/3?(A-n)*6*(2/3-e)+n:n}var Kl=function(n,A){var e=A.filter(zn),t=e[0],i=e[1],r=e[2],s=e[3],a=(t.type===17?ke(t.number):qr.parse(n,t))/(Math.PI*2),o=qA(i)?i.number/100:0,l=qA(r)?r.number/100:0,c=typeof s<"u"&&qA(s)?GA(s,1):1;if(o===0)return Tt(l*255,l*255,l*255,1);var u=l<=.5?l*(o+1):l+o-l*o,h=l*2-u,p=qs(h,u,a+1/3),g=qs(h,u,a),f=qs(h,u,a-1/3);return Tt(p*255,g*255,f*255,c)},fw={hsl:Kl,hsla:Kl,rgb:Vl,rgba:Vl},Ci=function(n,A){return Ht.parse(n,cu.create(A).parseComponentValue())},Ct={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},dw={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(n,A){return A.map(function(e){if(PA(e))switch(e.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},pw={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},jr=function(n,A){var e=Ht.parse(n,A[0]),t=A[1];return t&&qA(t)?{color:e,stop:t}:{color:e,stop:null}},zl=function(n,A){var e=n[0],t=n[n.length-1];e.stop===null&&(e.stop=he),t.stop===null&&(t.stop=It);for(var i=[],r=0,s=0;s<n.length;s++){var a=n[s].stop;if(a!==null){var o=GA(a,A);o>r?i.push(o):i.push(r),r=o}else i.push(null)}for(var l=null,s=0;s<i.length;s++){var c=i[s];if(c===null)l===null&&(l=s);else if(l!==null){for(var u=s-l,h=i[l-1],p=(c-h)/(u+1),g=1;g<=u;g++)i[l+g-1]=p*g;l=null}}return n.map(function(f,d){var m=f.color;return{color:m,stop:Math.max(Math.min(1,i[d]/A),0)}})},gw=function(n,A,e){var t=A/2,i=e/2,r=GA(n[0],A)-t,s=i-GA(n[1],e);return(Math.atan2(s,r)+Math.PI*2)%(Math.PI*2)},mw=function(n,A,e){var t=typeof n=="number"?n:gw(n,A,e),i=Math.abs(A*Math.sin(t))+Math.abs(e*Math.cos(t)),r=A/2,s=e/2,a=i/2,o=Math.sin(t-Math.PI/2)*a,l=Math.cos(t-Math.PI/2)*a;return[i,r-l,r+l,s-o,s+o]},qe=function(n,A){return Math.sqrt(n*n+A*A)},kl=function(n,A,e,t,i){var r=[[0,0],[0,A],[n,0],[n,A]];return r.reduce(function(s,a){var o=a[0],l=a[1],c=qe(e-o,t-l);return(i?c<s.optimumDistance:c>s.optimumDistance)?{optimumCorner:a,optimumDistance:c}:s},{optimumDistance:i?1/0:-1/0,optimumCorner:null}).optimumCorner},Bw=function(n,A,e,t,i){var r=0,s=0;switch(n.size){case 0:n.shape===0?r=s=Math.min(Math.abs(A),Math.abs(A-t),Math.abs(e),Math.abs(e-i)):n.shape===1&&(r=Math.min(Math.abs(A),Math.abs(A-t)),s=Math.min(Math.abs(e),Math.abs(e-i)));break;case 2:if(n.shape===0)r=s=Math.min(qe(A,e),qe(A,e-i),qe(A-t,e),qe(A-t,e-i));else if(n.shape===1){var a=Math.min(Math.abs(e),Math.abs(e-i))/Math.min(Math.abs(A),Math.abs(A-t)),o=kl(t,i,A,e,!0),l=o[0],c=o[1];r=qe(l-A,(c-e)/a),s=a*r}break;case 1:n.shape===0?r=s=Math.max(Math.abs(A),Math.abs(A-t),Math.abs(e),Math.abs(e-i)):n.shape===1&&(r=Math.max(Math.abs(A),Math.abs(A-t)),s=Math.max(Math.abs(e),Math.abs(e-i)));break;case 3:if(n.shape===0)r=s=Math.max(qe(A,e),qe(A,e-i),qe(A-t,e),qe(A-t,e-i));else if(n.shape===1){var a=Math.max(Math.abs(e),Math.abs(e-i))/Math.max(Math.abs(A),Math.abs(A-t)),u=kl(t,i,A,e,!1),l=u[0],c=u[1];r=qe(l-A,(c-e)/a),s=a*r}break}return Array.isArray(n.size)&&(r=GA(n.size[0],t),s=n.size.length===2?GA(n.size[1],i):r),[r,s]},ww=function(n,A){var e=ke(180),t=[];return at(A).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&s.value==="to"){e=Bu(i);return}else if(mu(s)){e=qr.parse(n,s);return}}var a=jr(n,i);t.push(a)}),{angle:e,stops:t,type:1}},Br=function(n,A){var e=ke(180),t=[];return at(A).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&["top","left","right","bottom"].indexOf(s.value)!==-1){e=Bu(i);return}else if(mu(s)){e=(qr.parse(n,s)+ke(270))%ke(360);return}}var a=jr(n,i);t.push(a)}),{angle:e,stops:t,type:1}},vw=function(n,A){var e=ke(180),t=[],i=1,r=0,s=3,a=[];return at(A).forEach(function(o,l){var c=o[0];if(l===0){if(PA(c)&&c.value==="linear"){i=1;return}else if(PA(c)&&c.value==="radial"){i=2;return}}if(c.type===18){if(c.name==="from"){var u=Ht.parse(n,c.values[0]);t.push({stop:he,color:u})}else if(c.name==="to"){var u=Ht.parse(n,c.values[0]);t.push({stop:It,color:u})}else if(c.name==="color-stop"){var h=c.values.filter(zn);if(h.length===2){var u=Ht.parse(n,h[1]),p=h[0];Yn(p)&&t.push({stop:{type:16,number:p.number*100,flags:p.flags},color:u})}}}}),i===1?{angle:(e+ke(180))%ke(360),stops:t,type:i}:{size:s,shape:r,stops:t,position:a,type:i}},wu="closest-side",vu="farthest-side",Cu="closest-corner",_u="farthest-corner",xu="circle",Uu="ellipse",Fu="cover",yu="contain",Cw=function(n,A){var e=0,t=3,i=[],r=[];return at(A).forEach(function(s,a){var o=!0;if(a===0){var l=!1;o=s.reduce(function(u,h){if(l)if(PA(h))switch(h.value){case"center":return r.push(eo),u;case"top":case"left":return r.push(he),u;case"right":case"bottom":return r.push(It),u}else(qA(h)||Pt(h))&&r.push(h);else if(PA(h))switch(h.value){case xu:return e=0,!1;case Uu:return e=1,!1;case"at":return l=!0,!1;case wu:return t=0,!1;case Fu:case vu:return t=1,!1;case yu:case Cu:return t=2,!1;case _u:return t=3,!1}else if(Pt(h)||qA(h))return Array.isArray(t)||(t=[]),t.push(h),!1;return u},o)}if(o){var c=jr(n,s);i.push(c)}}),{size:t,shape:e,stops:i,position:r,type:2}},wr=function(n,A){var e=0,t=3,i=[],r=[];return at(A).forEach(function(s,a){var o=!0;if(a===0?o=s.reduce(function(c,u){if(PA(u))switch(u.value){case"center":return r.push(eo),!1;case"top":case"left":return r.push(he),!1;case"right":case"bottom":return r.push(It),!1}else if(qA(u)||Pt(u))return r.push(u),!1;return c},o):a===1&&(o=s.reduce(function(c,u){if(PA(u))switch(u.value){case xu:return e=0,!1;case Uu:return e=1,!1;case yu:case wu:return t=0,!1;case vu:return t=1,!1;case Cu:return t=2,!1;case Fu:case _u:return t=3,!1}else if(Pt(u)||qA(u))return Array.isArray(t)||(t=[]),t.push(u),!1;return c},o)),o){var l=jr(n,s);i.push(l)}}),{size:t,shape:e,stops:i,position:r,type:2}},_w=function(n){return n.type===1},xw=function(n){return n.type===2},to={name:"image",parse:function(n,A){if(A.type===22){var e={url:A.value,type:0};return n.cache.addImage(A.value),e}if(A.type===18){var t=Eu[A.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported image function "'+A.name+'"');return t(n,A.values)}throw new Error("Unsupported image type "+A.type)}};function Uw(n){return!(n.type===20&&n.value==="none")&&(n.type!==18||!!Eu[n.name])}var Eu={"linear-gradient":ww,"-moz-linear-gradient":Br,"-ms-linear-gradient":Br,"-o-linear-gradient":Br,"-webkit-linear-gradient":Br,"radial-gradient":Cw,"-moz-radial-gradient":wr,"-ms-radial-gradient":wr,"-o-radial-gradient":wr,"-webkit-radial-gradient":wr,"-webkit-gradient":vw},Fw={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(n,A){if(A.length===0)return[];var e=A[0];return e.type===20&&e.value==="none"?[]:A.filter(function(t){return zn(t)&&Uw(t)}).map(function(t){return to.parse(n,t)})}},yw={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(n,A){return A.map(function(e){if(PA(e))switch(e.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Ew={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(n,A){return at(A).map(function(e){return e.filter(qA)}).map(hu)}},Mw={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(n,A){return at(A).map(function(e){return e.filter(PA).map(function(t){return t.value}).join(" ")}).map(Qw)}},Qw=function(n){switch(n){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},Pn;(function(n){n.AUTO="auto",n.CONTAIN="contain",n.COVER="cover"})(Pn||(Pn={}));var Sw={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(n,A){return at(A).map(function(e){return e.filter(bw)})}},bw=function(n){return PA(n)||qA(n)},$r=function(n){return{name:"border-"+n+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},Iw=$r("top"),Tw=$r("right"),Lw=$r("bottom"),Hw=$r("left"),As=function(n){return{name:"border-radius-"+n,initialValue:"0 0",prefix:!1,type:1,parse:function(A,e){return hu(e.filter(qA))}}},Dw=As("top-left"),Rw=As("top-right"),Pw=As("bottom-right"),Ow=As("bottom-left"),es=function(n){return{name:"border-"+n+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(A,e){switch(e){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},Nw=es("top"),Gw=es("right"),Vw=es("bottom"),Kw=es("left"),ts=function(n){return{name:"border-"+n+"-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return Di(e)?e.number:0}}},zw=ts("top"),kw=ts("right"),Ww=ts("bottom"),Xw=ts("left"),Jw={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Yw={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(n,A){switch(A){case"rtl":return 1;case"ltr":default:return 0}}},Zw={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(n,A){return A.filter(PA).reduce(function(e,t){return e|qw(t.value)},0)}},qw=function(n){switch(n){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},jw={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},$w={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(n,A){return A.type===20&&A.value==="normal"?0:A.type===17||A.type===15?A.number:0}},Rr;(function(n){n.NORMAL="normal",n.STRICT="strict"})(Rr||(Rr={}));var Av={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"strict":return Rr.STRICT;case"normal":default:return Rr.NORMAL}}},ev={name:"line-height",initialValue:"normal",prefix:!1,type:4},Wl=function(n,A){return PA(n)&&n.value==="normal"?1.2*A:n.type===17?A*n.number:qA(n)?GA(n,A):A},tv={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(n,A){return A.type===20&&A.value==="none"?null:to.parse(n,A)}},nv={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(n,A){switch(A){case"inside":return 0;case"outside":default:return 1}}},La={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},ns=function(n){return{name:"margin-"+n,initialValue:"0",prefix:!1,type:4}},iv=ns("top"),rv=ns("right"),sv=ns("bottom"),av=ns("left"),ov={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(n,A){return A.filter(PA).map(function(e){switch(e.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},lv={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"break-word":return"break-word";case"normal":default:return"normal"}}},is=function(n){return{name:"padding-"+n,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},cv=is("top"),uv=is("right"),hv=is("bottom"),fv=is("left"),dv={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(n,A){switch(A){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},pv={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(n,A){switch(A){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},gv={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return A.length===1&&Ta(A[0],"none")?[]:at(A).map(function(e){for(var t={color:Ct.TRANSPARENT,offsetX:he,offsetY:he,blur:he},i=0,r=0;r<e.length;r++){var s=e[r];Pt(s)?(i===0?t.offsetX=s:i===1?t.offsetY=s:t.blur=s,i++):t.color=Ht.parse(n,s)}return t})}},mv={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},Bv={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(n,A){if(A.type===20&&A.value==="none")return null;if(A.type===18){var e=Cv[A.name];if(typeof e>"u")throw new Error('Attempting to parse an unsupported transform function "'+A.name+'"');return e(A.values)}return null}},wv=function(n){var A=n.filter(function(e){return e.type===17}).map(function(e){return e.number});return A.length===6?A:null},vv=function(n){var A=n.filter(function(o){return o.type===17}).map(function(o){return o.number}),e=A[0],t=A[1];A[2],A[3];var i=A[4],r=A[5];A[6],A[7],A[8],A[9],A[10],A[11];var s=A[12],a=A[13];return A[14],A[15],A.length===16?[e,t,i,r,s,a]:null},Cv={matrix:wv,matrix3d:vv},Xl={type:16,number:50,flags:Hi},_v=[Xl,Xl],xv={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(n,A){var e=A.filter(qA);return e.length!==2?_v:[e[0],e[1]]}},Uv={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(n,A){switch(A){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},_i;(function(n){n.NORMAL="normal",n.BREAK_ALL="break-all",n.KEEP_ALL="keep-all"})(_i||(_i={}));var Fv={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"break-all":return _i.BREAK_ALL;case"keep-all":return _i.KEEP_ALL;case"normal":default:return _i.NORMAL}}},yv={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(n,A){if(A.type===20)return{auto:!0,order:0};if(Yn(A))return{auto:!1,order:A.number};throw new Error("Invalid z-index number parsed")}},Mu={name:"time",parse:function(n,A){if(A.type===15)switch(A.unit.toLowerCase()){case"s":return 1e3*A.number;case"ms":return A.number}throw new Error("Unsupported time type")}},Ev={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(n,A){return Yn(A)?A.number:1}},Mv={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Qv={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(n,A){return A.filter(PA).map(function(e){switch(e.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(e){return e!==0})}},Sv={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(n,A){var e=[],t=[];return A.forEach(function(i){switch(i.type){case 20:case 0:e.push(i.value);break;case 17:e.push(i.number.toString());break;case 4:t.push(e.join(" ")),e.length=0;break}}),e.length&&t.push(e.join(" ")),t.map(function(i){return i.indexOf(" ")===-1?i:"'"+i+"'"})}},bv={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},Iv={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(n,A){if(Yn(A))return A.number;if(PA(A))switch(A.value){case"bold":return 700;case"normal":default:return 400}return 400}},Tv={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return A.filter(PA).map(function(e){return e.value})}},Lv={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(n,A){switch(A){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},ee=function(n,A){return(n&A)!==0},Hv={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(n,A){if(A.length===0)return[];var e=A[0];return e.type===20&&e.value==="none"?[]:A}},Dv={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(n,A){if(A.length===0)return null;var e=A[0];if(e.type===20&&e.value==="none")return null;for(var t=[],i=A.filter(uu),r=0;r<i.length;r++){var s=i[r],a=i[r+1];if(s.type===20){var o=a&&Yn(a)?a.number:1;t.push({counter:s.value,increment:o})}}return t}},Rv={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(n,A){if(A.length===0)return[];for(var e=[],t=A.filter(uu),i=0;i<t.length;i++){var r=t[i],s=t[i+1];if(PA(r)&&r.value!=="none"){var a=s&&Yn(s)?s.number:0;e.push({counter:r.value,reset:a})}}return e}},Pv={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(n,A){return A.filter(Di).map(function(e){return Mu.parse(n,e)})}},Ov={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(n,A){if(A.length===0)return null;var e=A[0];if(e.type===20&&e.value==="none")return null;var t=[],i=A.filter(uw);if(i.length%2!==0)return null;for(var r=0;r<i.length;r+=2){var s=i[r].value,a=i[r+1].value;t.push({open:s,close:a})}return t}},Jl=function(n,A,e){if(!n)return"";var t=n[Math.min(A,n.length-1)];return t?e?t.open:t.close:""},Nv={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return A.length===1&&Ta(A[0],"none")?[]:at(A).map(function(e){for(var t={color:255,offsetX:he,offsetY:he,blur:he,spread:he,inset:!1},i=0,r=0;r<e.length;r++){var s=e[r];Ta(s,"inset")?t.inset=!0:Pt(s)?(i===0?t.offsetX=s:i===1?t.offsetY=s:i===2?t.blur=s:t.spread=s,i++):t.color=Ht.parse(n,s)}return t})}},Gv={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(n,A){var e=[0,1,2],t=[];return A.filter(PA).forEach(function(i){switch(i.value){case"stroke":t.push(1);break;case"fill":t.push(0);break;case"markers":t.push(2);break}}),e.forEach(function(i){t.indexOf(i)===-1&&t.push(i)}),t}},Vv={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},Kv={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(n,A){return Di(A)?A.number:0}},zv=function(){function n(A,e){var t,i;this.animationDuration=rA(A,Pv,e.animationDuration),this.backgroundClip=rA(A,dw,e.backgroundClip),this.backgroundColor=rA(A,pw,e.backgroundColor),this.backgroundImage=rA(A,Fw,e.backgroundImage),this.backgroundOrigin=rA(A,yw,e.backgroundOrigin),this.backgroundPosition=rA(A,Ew,e.backgroundPosition),this.backgroundRepeat=rA(A,Mw,e.backgroundRepeat),this.backgroundSize=rA(A,Sw,e.backgroundSize),this.borderTopColor=rA(A,Iw,e.borderTopColor),this.borderRightColor=rA(A,Tw,e.borderRightColor),this.borderBottomColor=rA(A,Lw,e.borderBottomColor),this.borderLeftColor=rA(A,Hw,e.borderLeftColor),this.borderTopLeftRadius=rA(A,Dw,e.borderTopLeftRadius),this.borderTopRightRadius=rA(A,Rw,e.borderTopRightRadius),this.borderBottomRightRadius=rA(A,Pw,e.borderBottomRightRadius),this.borderBottomLeftRadius=rA(A,Ow,e.borderBottomLeftRadius),this.borderTopStyle=rA(A,Nw,e.borderTopStyle),this.borderRightStyle=rA(A,Gw,e.borderRightStyle),this.borderBottomStyle=rA(A,Vw,e.borderBottomStyle),this.borderLeftStyle=rA(A,Kw,e.borderLeftStyle),this.borderTopWidth=rA(A,zw,e.borderTopWidth),this.borderRightWidth=rA(A,kw,e.borderRightWidth),this.borderBottomWidth=rA(A,Ww,e.borderBottomWidth),this.borderLeftWidth=rA(A,Xw,e.borderLeftWidth),this.boxShadow=rA(A,Nv,e.boxShadow),this.color=rA(A,Jw,e.color),this.direction=rA(A,Yw,e.direction),this.display=rA(A,Zw,e.display),this.float=rA(A,jw,e.cssFloat),this.fontFamily=rA(A,Sv,e.fontFamily),this.fontSize=rA(A,bv,e.fontSize),this.fontStyle=rA(A,Lv,e.fontStyle),this.fontVariant=rA(A,Tv,e.fontVariant),this.fontWeight=rA(A,Iv,e.fontWeight),this.letterSpacing=rA(A,$w,e.letterSpacing),this.lineBreak=rA(A,Av,e.lineBreak),this.lineHeight=rA(A,ev,e.lineHeight),this.listStyleImage=rA(A,tv,e.listStyleImage),this.listStylePosition=rA(A,nv,e.listStylePosition),this.listStyleType=rA(A,La,e.listStyleType),this.marginTop=rA(A,iv,e.marginTop),this.marginRight=rA(A,rv,e.marginRight),this.marginBottom=rA(A,sv,e.marginBottom),this.marginLeft=rA(A,av,e.marginLeft),this.opacity=rA(A,Ev,e.opacity);var r=rA(A,ov,e.overflow);this.overflowX=r[0],this.overflowY=r[r.length>1?1:0],this.overflowWrap=rA(A,lv,e.overflowWrap),this.paddingTop=rA(A,cv,e.paddingTop),this.paddingRight=rA(A,uv,e.paddingRight),this.paddingBottom=rA(A,hv,e.paddingBottom),this.paddingLeft=rA(A,fv,e.paddingLeft),this.paintOrder=rA(A,Gv,e.paintOrder),this.position=rA(A,pv,e.position),this.textAlign=rA(A,dv,e.textAlign),this.textDecorationColor=rA(A,Mv,(t=e.textDecorationColor)!==null&&t!==void 0?t:e.color),this.textDecorationLine=rA(A,Qv,(i=e.textDecorationLine)!==null&&i!==void 0?i:e.textDecoration),this.textShadow=rA(A,gv,e.textShadow),this.textTransform=rA(A,mv,e.textTransform),this.transform=rA(A,Bv,e.transform),this.transformOrigin=rA(A,xv,e.transformOrigin),this.visibility=rA(A,Uv,e.visibility),this.webkitTextStrokeColor=rA(A,Vv,e.webkitTextStrokeColor),this.webkitTextStrokeWidth=rA(A,Kv,e.webkitTextStrokeWidth),this.wordBreak=rA(A,Fv,e.wordBreak),this.zIndex=rA(A,yv,e.zIndex)}return n.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},n.prototype.isTransparent=function(){return Dt(this.backgroundColor)},n.prototype.isTransformed=function(){return this.transform!==null},n.prototype.isPositioned=function(){return this.position!==0},n.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},n.prototype.isFloating=function(){return this.float!==0},n.prototype.isInlineLevel=function(){return ee(this.display,4)||ee(this.display,33554432)||ee(this.display,268435456)||ee(this.display,536870912)||ee(this.display,67108864)||ee(this.display,134217728)},n}(),kv=function(){function n(A,e){this.content=rA(A,Hv,e.content),this.quotes=rA(A,Ov,e.quotes)}return n}(),Yl=function(){function n(A,e){this.counterIncrement=rA(A,Dv,e.counterIncrement),this.counterReset=rA(A,Rv,e.counterReset)}return n}(),rA=function(n,A,e){var t=new lu,i=e!==null&&typeof e<"u"?e.toString():A.initialValue;t.write(i);var r=new cu(t.read());switch(A.type){case 2:var s=r.parseComponentValue();return A.parse(n,PA(s)?s.value:A.initialValue);case 0:return A.parse(n,r.parseComponentValue());case 1:return A.parse(n,r.parseComponentValues());case 4:return r.parseComponentValue();case 3:switch(A.format){case"angle":return qr.parse(n,r.parseComponentValue());case"color":return Ht.parse(n,r.parseComponentValue());case"image":return to.parse(n,r.parseComponentValue());case"length":var a=r.parseComponentValue();return Pt(a)?a:he;case"length-percentage":var o=r.parseComponentValue();return qA(o)?o:he;case"time":return Mu.parse(n,r.parseComponentValue())}break}},Wv="data-html2canvas-debug",Xv=function(n){var A=n.getAttribute(Wv);switch(A){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Ha=function(n,A){var e=Xv(n);return e===1||A===e},ot=function(){function n(A,e){if(this.context=A,this.textNodes=[],this.elements=[],this.flags=0,Ha(e,3))debugger;this.styles=new zv(A,window.getComputedStyle(e,null)),Pa(e)&&(this.styles.animationDuration.some(function(t){return t>0})&&(e.style.animationDuration="0s"),this.styles.transform!==null&&(e.style.transform="none")),this.bounds=Yr(this.context,e),Ha(e,4)&&(this.flags|=16)}return n}(),Jv="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",Zl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",gi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var vr=0;vr<Zl.length;vr++)gi[Zl.charCodeAt(vr)]=vr;var Yv=function(n){var A=n.length*.75,e=n.length,t,i=0,r,s,a,o;n[n.length-1]==="="&&(A--,n[n.length-2]==="="&&A--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(A):new Array(A),c=Array.isArray(l)?l:new Uint8Array(l);for(t=0;t<e;t+=4)r=gi[n.charCodeAt(t)],s=gi[n.charCodeAt(t+1)],a=gi[n.charCodeAt(t+2)],o=gi[n.charCodeAt(t+3)],c[i++]=r<<2|s>>4,c[i++]=(s&15)<<4|a>>2,c[i++]=(a&3)<<6|o&63;return l},Zv=function(n){for(var A=n.length,e=[],t=0;t<A;t+=2)e.push(n[t+1]<<8|n[t]);return e},qv=function(n){for(var A=n.length,e=[],t=0;t<A;t+=4)e.push(n[t+3]<<24|n[t+2]<<16|n[t+1]<<8|n[t]);return e},nn=5,no=6+5,js=2,jv=no-nn,Qu=65536>>nn,$v=1<<nn,$s=$v-1,AC=1024>>nn,eC=Qu+AC,tC=eC,nC=32,iC=tC+nC,rC=65536>>no,sC=1<<jv,aC=sC-1,ql=function(n,A,e){return n.slice?n.slice(A,e):new Uint16Array(Array.prototype.slice.call(n,A,e))},oC=function(n,A,e){return n.slice?n.slice(A,e):new Uint32Array(Array.prototype.slice.call(n,A,e))},lC=function(n,A){var e=Yv(n),t=Array.isArray(e)?qv(e):new Uint32Array(e),i=Array.isArray(e)?Zv(e):new Uint16Array(e),r=24,s=ql(i,r/2,t[4]/2),a=t[5]===2?ql(i,(r+t[4])/2):oC(t,Math.ceil((r+t[4])/4));return new cC(t[0],t[1],t[2],t[3],s,a)},cC=function(){function n(A,e,t,i,r,s){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=i,this.index=r,this.data=s}return n.prototype.get=function(A){var e;if(A>=0){if(A<55296||A>56319&&A<=65535)return e=this.index[A>>nn],e=(e<<js)+(A&$s),this.data[e];if(A<=65535)return e=this.index[Qu+(A-55296>>nn)],e=(e<<js)+(A&$s),this.data[e];if(A<this.highStart)return e=iC-rC+(A>>no),e=this.index[e],e+=A>>nn&aC,e=this.index[e],e=(e<<js)+(A&$s),this.data[e];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},n}(),jl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",uC=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Cr=0;Cr<jl.length;Cr++)uC[jl.charCodeAt(Cr)]=Cr;var hC=1,Aa=2,ea=3,$l=4,Ac=5,fC=7,ec=8,ta=9,na=10,tc=11,nc=12,ic=13,rc=14,ia=15,dC=function(n){for(var A=[],e=0,t=n.length;e<t;){var i=n.charCodeAt(e++);if(i>=55296&&i<=56319&&e<t){var r=n.charCodeAt(e++);(r&64512)===56320?A.push(((i&1023)<<10)+(r&1023)+65536):(A.push(i),e--)}else A.push(i)}return A},pC=function(){for(var n=[],A=0;A<arguments.length;A++)n[A]=arguments[A];if(String.fromCodePoint)return String.fromCodePoint.apply(String,n);var e=n.length;if(!e)return"";for(var t=[],i=-1,r="";++i<e;){var s=n[i];s<=65535?t.push(s):(s-=65536,t.push((s>>10)+55296,s%1024+56320)),(i+1===e||t.length>16384)&&(r+=String.fromCharCode.apply(String,t),t.length=0)}return r},gC=lC(Jv),Ge="×",ra="÷",mC=function(n){return gC.get(n)},BC=function(n,A,e){var t=e-2,i=A[t],r=A[e-1],s=A[e];if(r===Aa&&s===ea)return Ge;if(r===Aa||r===ea||r===$l||s===Aa||s===ea||s===$l)return ra;if(r===ec&&[ec,ta,tc,nc].indexOf(s)!==-1||(r===tc||r===ta)&&(s===ta||s===na)||(r===nc||r===na)&&s===na||s===ic||s===Ac||s===fC||r===hC)return Ge;if(r===ic&&s===rc){for(;i===Ac;)i=A[--t];if(i===rc)return Ge}if(r===ia&&s===ia){for(var a=0;i===ia;)a++,i=A[--t];if(a%2===0)return Ge}return ra},wC=function(n){var A=dC(n),e=A.length,t=0,i=0,r=A.map(mC);return{next:function(){if(t>=e)return{done:!0,value:null};for(var s=Ge;t<e&&(s=BC(A,r,++t))===Ge;);if(s!==Ge||t===e){var a=pC.apply(null,A.slice(i,t));return i=t,{value:a,done:!1}}return{done:!0,value:null}}}},vC=function(n){for(var A=wC(n),e=[],t;!(t=A.next()).done;)t.value&&e.push(t.value.slice());return e},CC=function(n){var A=123;if(n.createRange){var e=n.createRange();if(e.getBoundingClientRect){var t=n.createElement("boundtest");t.style.height=A+"px",t.style.display="block",n.body.appendChild(t),e.selectNode(t);var i=e.getBoundingClientRect(),r=Math.round(i.height);if(n.body.removeChild(t),r===A)return!0}}return!1},_C=function(n){var A=n.createElement("boundtest");A.style.width="50px",A.style.display="block",A.style.fontSize="12px",A.style.letterSpacing="0px",A.style.wordSpacing="0px",n.body.appendChild(A);var e=n.createRange();A.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var t=A.firstChild,i=Zr(t.data).map(function(o){return XA(o)}),r=0,s={},a=i.every(function(o,l){e.setStart(t,r),e.setEnd(t,r+o.length);var c=e.getBoundingClientRect();r+=o.length;var u=c.x>s.x||c.y>s.y;return s=c,l===0?!0:u});return n.body.removeChild(A),a},xC=function(){return typeof new Image().crossOrigin<"u"},UC=function(){return typeof new XMLHttpRequest().responseType=="string"},FC=function(n){var A=new Image,e=n.createElement("canvas"),t=e.getContext("2d");if(!t)return!1;A.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{t.drawImage(A,0,0),e.toDataURL()}catch{return!1}return!0},sc=function(n){return n[0]===0&&n[1]===255&&n[2]===0&&n[3]===255},yC=function(n){var A=n.createElement("canvas"),e=100;A.width=e,A.height=e;var t=A.getContext("2d");if(!t)return Promise.reject(!1);t.fillStyle="rgb(0, 255, 0)",t.fillRect(0,0,e,e);var i=new Image,r=A.toDataURL();i.src=r;var s=Da(e,e,0,0,i);return t.fillStyle="red",t.fillRect(0,0,e,e),ac(s).then(function(a){t.drawImage(a,0,0);var o=t.getImageData(0,0,e,e).data;t.fillStyle="red",t.fillRect(0,0,e,e);var l=n.createElement("div");return l.style.backgroundImage="url("+r+")",l.style.height=e+"px",sc(o)?ac(Da(e,e,0,0,l)):Promise.reject(!1)}).then(function(a){return t.drawImage(a,0,0),sc(t.getImageData(0,0,e,e).data)}).catch(function(){return!1})},Da=function(n,A,e,t,i){var r="http://www.w3.org/2000/svg",s=document.createElementNS(r,"svg"),a=document.createElementNS(r,"foreignObject");return s.setAttributeNS(null,"width",n.toString()),s.setAttributeNS(null,"height",A.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",e.toString()),a.setAttributeNS(null,"y",t.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(a),a.appendChild(i),s},ac=function(n){return new Promise(function(A,e){var t=new Image;t.onload=function(){return A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(n))})},ue={get SUPPORT_RANGE_BOUNDS(){var n=CC(document);return Object.defineProperty(ue,"SUPPORT_RANGE_BOUNDS",{value:n}),n},get SUPPORT_WORD_BREAKING(){var n=ue.SUPPORT_RANGE_BOUNDS&&_C(document);return Object.defineProperty(ue,"SUPPORT_WORD_BREAKING",{value:n}),n},get SUPPORT_SVG_DRAWING(){var n=FC(document);return Object.defineProperty(ue,"SUPPORT_SVG_DRAWING",{value:n}),n},get SUPPORT_FOREIGNOBJECT_DRAWING(){var n=typeof Array.from=="function"&&typeof window.fetch=="function"?yC(document):Promise.resolve(!1);return Object.defineProperty(ue,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:n}),n},get SUPPORT_CORS_IMAGES(){var n=xC();return Object.defineProperty(ue,"SUPPORT_CORS_IMAGES",{value:n}),n},get SUPPORT_RESPONSE_TYPE(){var n=UC();return Object.defineProperty(ue,"SUPPORT_RESPONSE_TYPE",{value:n}),n},get SUPPORT_CORS_XHR(){var n="withCredentials"in new XMLHttpRequest;return Object.defineProperty(ue,"SUPPORT_CORS_XHR",{value:n}),n},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var n=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(ue,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:n}),n}},xi=function(){function n(A,e){this.text=A,this.bounds=e}return n}(),EC=function(n,A,e,t){var i=SC(A,e),r=[],s=0;return i.forEach(function(a){if(e.textDecorationLine.length||a.trim().length>0)if(ue.SUPPORT_RANGE_BOUNDS){var o=oc(t,s,a.length).getClientRects();if(o.length>1){var l=io(a),c=0;l.forEach(function(h){r.push(new xi(h,xt.fromDOMRectList(n,oc(t,c+s,h.length).getClientRects()))),c+=h.length})}else r.push(new xi(a,xt.fromDOMRectList(n,o)))}else{var u=t.splitText(a.length);r.push(new xi(a,MC(n,t))),t=u}else ue.SUPPORT_RANGE_BOUNDS||(t=t.splitText(a.length));s+=a.length}),r},MC=function(n,A){var e=A.ownerDocument;if(e){var t=e.createElement("html2canvaswrapper");t.appendChild(A.cloneNode(!0));var i=A.parentNode;if(i){i.replaceChild(t,A);var r=Yr(n,t);return t.firstChild&&i.replaceChild(t.firstChild,t),r}}return xt.EMPTY},oc=function(n,A,e){var t=n.ownerDocument;if(!t)throw new Error("Node has no owner document");var i=t.createRange();return i.setStart(n,A),i.setEnd(n,A+e),i},io=function(n){if(ue.SUPPORT_NATIVE_TEXT_SEGMENTATION){var A=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(A.segment(n)).map(function(e){return e.segment})}return vC(n)},QC=function(n,A){if(ue.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(e.segment(n)).map(function(t){return t.segment})}return IC(n,A)},SC=function(n,A){return A.letterSpacing!==0?io(n):QC(n,A)},bC=[32,160,4961,65792,65793,4153,4241],IC=function(n,A){for(var e=r0(n,{lineBreak:A.lineBreak,wordBreak:A.overflowWrap==="break-word"?"break-word":A.wordBreak}),t=[],i,r=function(){if(i.value){var s=i.value.slice(),a=Zr(s),o="";a.forEach(function(l){bC.indexOf(l)===-1?o+=XA(l):(o.length&&t.push(o),t.push(XA(l)),o="")}),o.length&&t.push(o)}};!(i=e.next()).done;)r();return t},TC=function(){function n(A,e,t){this.text=LC(e.data,t.textTransform),this.textBounds=EC(A,this.text,t,e)}return n}(),LC=function(n,A){switch(A){case 1:return n.toLowerCase();case 3:return n.replace(HC,DC);case 2:return n.toUpperCase();default:return n}},HC=/(^|\s|:|-|\(|\))([a-z])/g,DC=function(n,A,e){return n.length>0?A+e.toUpperCase():n},Su=function(n){et(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.src=t.currentSrc||t.src,i.intrinsicWidth=t.naturalWidth,i.intrinsicHeight=t.naturalHeight,i.context.cache.addImage(i.src),i}return A}(ot),bu=function(n){et(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.canvas=t,i.intrinsicWidth=t.width,i.intrinsicHeight=t.height,i}return A}(ot),Iu=function(n){et(A,n);function A(e,t){var i=n.call(this,e,t)||this,r=new XMLSerializer,s=Yr(e,t);return t.setAttribute("width",s.width+"px"),t.setAttribute("height",s.height+"px"),i.svg="data:image/svg+xml,"+encodeURIComponent(r.serializeToString(t)),i.intrinsicWidth=t.width.baseVal.value,i.intrinsicHeight=t.height.baseVal.value,i.context.cache.addImage(i.svg),i}return A}(ot),Tu=function(n){et(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.value=t.value,i}return A}(ot),Ra=function(n){et(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.start=t.start,i.reversed=typeof t.reversed=="boolean"&&t.reversed===!0,i}return A}(ot),RC=[{type:15,flags:0,unit:"px",number:3}],PC=[{type:16,flags:0,number:50}],OC=function(n){return n.width>n.height?new xt(n.left+(n.width-n.height)/2,n.top,n.height,n.height):n.width<n.height?new xt(n.left,n.top+(n.height-n.width)/2,n.width,n.width):n},NC=function(n){var A=n.type===GC?new Array(n.value.length+1).join("•"):n.value;return A.length===0?n.placeholder||"":A},Pr="checkbox",Or="radio",GC="password",lc=707406591,ro=function(n){et(A,n);function A(e,t){var i=n.call(this,e,t)||this;switch(i.type=t.type.toLowerCase(),i.checked=t.checked,i.value=NC(t),(i.type===Pr||i.type===Or)&&(i.styles.backgroundColor=3739148031,i.styles.borderTopColor=i.styles.borderRightColor=i.styles.borderBottomColor=i.styles.borderLeftColor=2779096575,i.styles.borderTopWidth=i.styles.borderRightWidth=i.styles.borderBottomWidth=i.styles.borderLeftWidth=1,i.styles.borderTopStyle=i.styles.borderRightStyle=i.styles.borderBottomStyle=i.styles.borderLeftStyle=1,i.styles.backgroundClip=[0],i.styles.backgroundOrigin=[0],i.bounds=OC(i.bounds)),i.type){case Pr:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=RC;break;case Or:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=PC;break}return i}return A}(ot),Lu=function(n){et(A,n);function A(e,t){var i=n.call(this,e,t)||this,r=t.options[t.selectedIndex||0];return i.value=r&&r.text||"",i}return A}(ot),Hu=function(n){et(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.value=t.value,i}return A}(ot),Du=function(n){et(A,n);function A(e,t){var i=n.call(this,e,t)||this;i.src=t.src,i.width=parseInt(t.width,10)||0,i.height=parseInt(t.height,10)||0,i.backgroundColor=i.styles.backgroundColor;try{if(t.contentWindow&&t.contentWindow.document&&t.contentWindow.document.documentElement){i.tree=Pu(e,t.contentWindow.document.documentElement);var r=t.contentWindow.document.documentElement?Ci(e,getComputedStyle(t.contentWindow.document.documentElement).backgroundColor):Ct.TRANSPARENT,s=t.contentWindow.document.body?Ci(e,getComputedStyle(t.contentWindow.document.body).backgroundColor):Ct.TRANSPARENT;i.backgroundColor=Dt(r)?Dt(s)?i.styles.backgroundColor:s:r}}catch{}return i}return A}(ot),VC=["OL","UL","MENU"],Sr=function(n,A,e,t){for(var i=A.firstChild,r=void 0;i;i=r)if(r=i.nextSibling,Ou(i)&&i.data.trim().length>0)e.textNodes.push(new TC(n,i,e.styles));else if(Tn(i))if(Ku(i)&&i.assignedNodes)i.assignedNodes().forEach(function(a){return Sr(n,a,e,t)});else{var s=Ru(n,i);s.styles.isVisible()&&(KC(i,s,t)?s.flags|=4:zC(s.styles)&&(s.flags|=2),VC.indexOf(i.tagName)!==-1&&(s.flags|=8),e.elements.push(s),i.slot,i.shadowRoot?Sr(n,i.shadowRoot,s,t):!Nr(i)&&!Nu(i)&&!Gr(i)&&Sr(n,i,s,t))}},Ru=function(n,A){return Oa(A)?new Su(n,A):Gu(A)?new bu(n,A):Nu(A)?new Iu(n,A):kC(A)?new Tu(n,A):WC(A)?new Ra(n,A):XC(A)?new ro(n,A):Gr(A)?new Lu(n,A):Nr(A)?new Hu(n,A):Vu(A)?new Du(n,A):new ot(n,A)},Pu=function(n,A){var e=Ru(n,A);return e.flags|=4,Sr(n,A,e,e),e},KC=function(n,A,e){return A.styles.isPositionedWithZIndex()||A.styles.opacity<1||A.styles.isTransformed()||so(n)&&e.styles.isTransparent()},zC=function(n){return n.isPositioned()||n.isFloating()},Ou=function(n){return n.nodeType===Node.TEXT_NODE},Tn=function(n){return n.nodeType===Node.ELEMENT_NODE},Pa=function(n){return Tn(n)&&typeof n.style<"u"&&!br(n)},br=function(n){return typeof n.className=="object"},kC=function(n){return n.tagName==="LI"},WC=function(n){return n.tagName==="OL"},XC=function(n){return n.tagName==="INPUT"},JC=function(n){return n.tagName==="HTML"},Nu=function(n){return n.tagName==="svg"},so=function(n){return n.tagName==="BODY"},Gu=function(n){return n.tagName==="CANVAS"},cc=function(n){return n.tagName==="VIDEO"},Oa=function(n){return n.tagName==="IMG"},Vu=function(n){return n.tagName==="IFRAME"},uc=function(n){return n.tagName==="STYLE"},YC=function(n){return n.tagName==="SCRIPT"},Nr=function(n){return n.tagName==="TEXTAREA"},Gr=function(n){return n.tagName==="SELECT"},Ku=function(n){return n.tagName==="SLOT"},hc=function(n){return n.tagName.indexOf("-")>0},ZC=function(){function n(){this.counters={}}return n.prototype.getCounterValue=function(A){var e=this.counters[A];return e&&e.length?e[e.length-1]:1},n.prototype.getCounterValues=function(A){var e=this.counters[A];return e||[]},n.prototype.pop=function(A){var e=this;A.forEach(function(t){return e.counters[t].pop()})},n.prototype.parse=function(A){var e=this,t=A.counterIncrement,i=A.counterReset,r=!0;t!==null&&t.forEach(function(a){var o=e.counters[a.counter];o&&a.increment!==0&&(r=!1,o.length||o.push(1),o[Math.max(0,o.length-1)]+=a.increment)});var s=[];return r&&i.forEach(function(a){var o=e.counters[a.counter];s.push(a.counter),o||(o=e.counters[a.counter]=[]),o.push(a.reset)}),s},n}(),fc={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},dc={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},qC={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},jC={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},yn=function(n,A,e,t,i,r){return n<A||n>e?Si(n,i,r.length>0):t.integers.reduce(function(s,a,o){for(;n>=a;)n-=a,s+=t.values[o];return s},"")+r},zu=function(n,A,e,t){var i="";do e||n--,i=t(n)+i,n/=A;while(n*A>=A);return i},WA=function(n,A,e,t,i){var r=e-A+1;return(n<0?"-":"")+(zu(Math.abs(n),r,t,function(s){return XA(Math.floor(s%r)+A)})+i)},Wt=function(n,A,e){e===void 0&&(e=". ");var t=A.length;return zu(Math.abs(n),t,!1,function(i){return A[Math.floor(i%t)]})+e},Sn=1,Mt=2,Qt=4,mi=8,Bt=function(n,A,e,t,i,r){if(n<-9999||n>9999)return Si(n,4,i.length>0);var s=Math.abs(n),a=i;if(s===0)return A[0]+a;for(var o=0;s>0&&o<=4;o++){var l=s%10;l===0&&ee(r,Sn)&&a!==""?a=A[l]+a:l>1||l===1&&o===0||l===1&&o===1&&ee(r,Mt)||l===1&&o===1&&ee(r,Qt)&&n>100||l===1&&o>1&&ee(r,mi)?a=A[l]+(o>0?e[o-1]:"")+a:l===1&&o>0&&(a=e[o-1]+a),s=Math.floor(s/10)}return(n<0?t:"")+a},pc="十百千萬",gc="拾佰仟萬",mc="マイナス",sa="마이너스",Si=function(n,A,e){var t=e?". ":"",i=e?"、":"",r=e?", ":"",s=e?" ":"";switch(A){case 0:return"•"+s;case 1:return"◦"+s;case 2:return"◾"+s;case 5:var a=WA(n,48,57,!0,t);return a.length<4?"0"+a:a;case 4:return Wt(n,"〇一二三四五六七八九",i);case 6:return yn(n,1,3999,fc,3,t).toLowerCase();case 7:return yn(n,1,3999,fc,3,t);case 8:return WA(n,945,969,!1,t);case 9:return WA(n,97,122,!1,t);case 10:return WA(n,65,90,!1,t);case 11:return WA(n,1632,1641,!0,t);case 12:case 49:return yn(n,1,9999,dc,3,t);case 35:return yn(n,1,9999,dc,3,t).toLowerCase();case 13:return WA(n,2534,2543,!0,t);case 14:case 30:return WA(n,6112,6121,!0,t);case 15:return Wt(n,"子丑寅卯辰巳午未申酉戌亥",i);case 16:return Wt(n,"甲乙丙丁戊己庚辛壬癸",i);case 17:case 48:return Bt(n,"零一二三四五六七八九",pc,"負",i,Mt|Qt|mi);case 47:return Bt(n,"零壹貳參肆伍陸柒捌玖",gc,"負",i,Sn|Mt|Qt|mi);case 42:return Bt(n,"零一二三四五六七八九",pc,"负",i,Mt|Qt|mi);case 41:return Bt(n,"零壹贰叁肆伍陆柒捌玖",gc,"负",i,Sn|Mt|Qt|mi);case 26:return Bt(n,"〇一二三四五六七八九","十百千万",mc,i,0);case 25:return Bt(n,"零壱弐参四伍六七八九","拾百千万",mc,i,Sn|Mt|Qt);case 31:return Bt(n,"영일이삼사오육칠팔구","십백천만",sa,r,Sn|Mt|Qt);case 33:return Bt(n,"零一二三四五六七八九","十百千萬",sa,r,0);case 32:return Bt(n,"零壹貳參四五六七八九","拾百千",sa,r,Sn|Mt|Qt);case 18:return WA(n,2406,2415,!0,t);case 20:return yn(n,1,19999,jC,3,t);case 21:return WA(n,2790,2799,!0,t);case 22:return WA(n,2662,2671,!0,t);case 22:return yn(n,1,10999,qC,3,t);case 23:return Wt(n,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return Wt(n,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return WA(n,3302,3311,!0,t);case 28:return Wt(n,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",i);case 29:return Wt(n,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",i);case 34:return WA(n,3792,3801,!0,t);case 37:return WA(n,6160,6169,!0,t);case 38:return WA(n,4160,4169,!0,t);case 39:return WA(n,2918,2927,!0,t);case 40:return WA(n,1776,1785,!0,t);case 43:return WA(n,3046,3055,!0,t);case 44:return WA(n,3174,3183,!0,t);case 45:return WA(n,3664,3673,!0,t);case 46:return WA(n,3872,3881,!0,t);case 3:default:return WA(n,48,57,!0,t)}},ku="data-html2canvas-ignore",Bc=function(){function n(A,e,t){if(this.context=A,this.options=t,this.scrolledElements=[],this.referenceElement=e,this.counters=new ZC,this.quoteDepth=0,!e.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(e.ownerDocument.documentElement,!1)}return n.prototype.toIFrame=function(A,e){var t=this,i=$C(A,e);if(!i.contentWindow)return Promise.reject("Unable to find iframe window");var r=A.defaultView.pageXOffset,s=A.defaultView.pageYOffset,a=i.contentWindow,o=a.document,l=t_(i).then(function(){return Ue(t,void 0,void 0,function(){var c,u;return ge(this,function(h){switch(h.label){case 0:return this.scrolledElements.forEach(s_),a&&(a.scrollTo(e.left,e.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==e.top||a.scrollX!==e.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-e.left,a.scrollY-e.top,0,0))),c=this.options.onclone,u=this.clonedReferenceElement,typeof u>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:o.fonts&&o.fonts.ready?[4,o.fonts.ready]:[3,2];case 1:h.sent(),h.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,e_(o)]:[3,4];case 3:h.sent(),h.label=4;case 4:return typeof c=="function"?[2,Promise.resolve().then(function(){return c(o,u)}).then(function(){return i})]:[2,i]}})})});return o.open(),o.write(i_(document.doctype)+"<html></html>"),r_(this.referenceElement.ownerDocument,r,s),o.replaceChild(o.adoptNode(this.documentElement),o.documentElement),o.close(),l},n.prototype.createElementClone=function(A){if(Ha(A,2))debugger;if(Gu(A))return this.createCanvasClone(A);if(cc(A))return this.createVideoClone(A);if(uc(A))return this.createStyleClone(A);var e=A.cloneNode(!1);return Oa(e)&&(Oa(A)&&A.currentSrc&&A.currentSrc!==A.src&&(e.src=A.currentSrc,e.srcset=""),e.loading==="lazy"&&(e.loading="eager")),hc(e)?this.createCustomElementClone(e):e},n.prototype.createCustomElementClone=function(A){var e=document.createElement("html2canvascustomelement");return aa(A.style,e),e},n.prototype.createStyleClone=function(A){try{var e=A.sheet;if(e&&e.cssRules){var t=[].slice.call(e.cssRules,0).reduce(function(r,s){return s&&typeof s.cssText=="string"?r+s.cssText:r},""),i=A.cloneNode(!1);return i.textContent=t,i}}catch(r){if(this.context.logger.error("Unable to access cssRules property",r),r.name!=="SecurityError")throw r}return A.cloneNode(!1)},n.prototype.createCanvasClone=function(A){var e;if(this.options.inlineImages&&A.ownerDocument){var t=A.ownerDocument.createElement("img");try{return t.src=A.toDataURL(),t}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",A)}}var i=A.cloneNode(!1);try{i.width=A.width,i.height=A.height;var r=A.getContext("2d"),s=i.getContext("2d");if(s)if(!this.options.allowTaint&&r)s.putImageData(r.getImageData(0,0,A.width,A.height),0,0);else{var a=(e=A.getContext("webgl2"))!==null&&e!==void 0?e:A.getContext("webgl");if(a){var o=a.getContextAttributes();(o==null?void 0:o.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",A)}s.drawImage(A,0,0)}return i}catch{this.context.logger.info("Unable to clone canvas as it is tainted",A)}return i},n.prototype.createVideoClone=function(A){var e=A.ownerDocument.createElement("canvas");e.width=A.offsetWidth,e.height=A.offsetHeight;var t=e.getContext("2d");try{return t&&(t.drawImage(A,0,0,e.width,e.height),this.options.allowTaint||t.getImageData(0,0,e.width,e.height)),e}catch{this.context.logger.info("Unable to clone video as it is tainted",A)}var i=A.ownerDocument.createElement("canvas");return i.width=A.offsetWidth,i.height=A.offsetHeight,i},n.prototype.appendChildNode=function(A,e,t){(!Tn(e)||!YC(e)&&!e.hasAttribute(ku)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(e)))&&(!this.options.copyStyles||!Tn(e)||!uc(e))&&A.appendChild(this.cloneNode(e,t))},n.prototype.cloneChildNodes=function(A,e,t){for(var i=this,r=A.shadowRoot?A.shadowRoot.firstChild:A.firstChild;r;r=r.nextSibling)if(Tn(r)&&Ku(r)&&typeof r.assignedNodes=="function"){var s=r.assignedNodes();s.length&&s.forEach(function(a){return i.appendChildNode(e,a,t)})}else this.appendChildNode(e,r,t)},n.prototype.cloneNode=function(A,e){if(Ou(A))return document.createTextNode(A.data);if(!A.ownerDocument)return A.cloneNode(!1);var t=A.ownerDocument.defaultView;if(t&&Tn(A)&&(Pa(A)||br(A))){var i=this.createElementClone(A);i.style.transitionProperty="none";var r=t.getComputedStyle(A),s=t.getComputedStyle(A,":before"),a=t.getComputedStyle(A,":after");this.referenceElement===A&&Pa(i)&&(this.clonedReferenceElement=i),so(i)&&l_(i);var o=this.counters.parse(new Yl(this.context,r)),l=this.resolvePseudoContent(A,i,s,Ui.BEFORE);hc(A)&&(e=!0),cc(A)||this.cloneChildNodes(A,i,e),l&&i.insertBefore(l,i.firstChild);var c=this.resolvePseudoContent(A,i,a,Ui.AFTER);return c&&i.appendChild(c),this.counters.pop(o),(r&&(this.options.copyStyles||br(A))&&!Vu(A)||e)&&aa(r,i),(A.scrollTop!==0||A.scrollLeft!==0)&&this.scrolledElements.push([i,A.scrollLeft,A.scrollTop]),(Nr(A)||Gr(A))&&(Nr(i)||Gr(i))&&(i.value=A.value),i}return A.cloneNode(!1)},n.prototype.resolvePseudoContent=function(A,e,t,i){var r=this;if(t){var s=t.content,a=e.ownerDocument;if(!(!a||!s||s==="none"||s==="-moz-alt-content"||t.display==="none")){this.counters.parse(new Yl(this.context,t));var o=new kv(this.context,t),l=a.createElement("html2canvaspseudoelement");aa(t,l),o.content.forEach(function(u){if(u.type===0)l.appendChild(a.createTextNode(u.value));else if(u.type===22){var h=a.createElement("img");h.src=u.value,h.style.opacity="1",l.appendChild(h)}else if(u.type===18){if(u.name==="attr"){var p=u.values.filter(PA);p.length&&l.appendChild(a.createTextNode(A.getAttribute(p[0].value)||""))}else if(u.name==="counter"){var g=u.values.filter(zn),f=g[0],d=g[1];if(f&&PA(f)){var m=r.counters.getCounterValue(f.value),B=d&&PA(d)?La.parse(r.context,d.value):3;l.appendChild(a.createTextNode(Si(m,B,!1)))}}else if(u.name==="counters"){var v=u.values.filter(zn),f=v[0],x=v[1],d=v[2];if(f&&PA(f)){var C=r.counters.getCounterValues(f.value),y=d&&PA(d)?La.parse(r.context,d.value):3,M=x&&x.type===0?x.value:"",w=C.map(function(G){return Si(G,y,!1)}).join(M);l.appendChild(a.createTextNode(w))}}}else if(u.type===20)switch(u.value){case"open-quote":l.appendChild(a.createTextNode(Jl(o.quotes,r.quoteDepth++,!0)));break;case"close-quote":l.appendChild(a.createTextNode(Jl(o.quotes,--r.quoteDepth,!1)));break;default:l.appendChild(a.createTextNode(u.value))}}),l.className=Na+" "+Ga;var c=i===Ui.BEFORE?" "+Na:" "+Ga;return br(e)?e.className.baseValue+=c:e.className+=c,l}}},n.destroy=function(A){return A.parentNode?(A.parentNode.removeChild(A),!0):!1},n}(),Ui;(function(n){n[n.BEFORE=0]="BEFORE",n[n.AFTER=1]="AFTER"})(Ui||(Ui={}));var $C=function(n,A){var e=n.createElement("iframe");return e.className="html2canvas-container",e.style.visibility="hidden",e.style.position="fixed",e.style.left="-10000px",e.style.top="0px",e.style.border="0",e.width=A.width.toString(),e.height=A.height.toString(),e.scrolling="no",e.setAttribute(ku,"true"),n.body.appendChild(e),e},A_=function(n){return new Promise(function(A){if(n.complete){A();return}if(!n.src){A();return}n.onload=A,n.onerror=A})},e_=function(n){return Promise.all([].slice.call(n.images,0).map(A_))},t_=function(n){return new Promise(function(A,e){var t=n.contentWindow;if(!t)return e("No window assigned for iframe");var i=t.document;t.onload=n.onload=function(){t.onload=n.onload=null;var r=setInterval(function(){i.body.childNodes.length>0&&i.readyState==="complete"&&(clearInterval(r),A(n))},50)}})},n_=["all","d","content"],aa=function(n,A){for(var e=n.length-1;e>=0;e--){var t=n.item(e);n_.indexOf(t)===-1&&A.style.setProperty(t,n.getPropertyValue(t))}return A},i_=function(n){var A="";return n&&(A+="<!DOCTYPE ",n.name&&(A+=n.name),n.internalSubset&&(A+=n.internalSubset),n.publicId&&(A+='"'+n.publicId+'"'),n.systemId&&(A+='"'+n.systemId+'"'),A+=">"),A},r_=function(n,A,e){n&&n.defaultView&&(A!==n.defaultView.pageXOffset||e!==n.defaultView.pageYOffset)&&n.defaultView.scrollTo(A,e)},s_=function(n){var A=n[0],e=n[1],t=n[2];A.scrollLeft=e,A.scrollTop=t},a_=":before",o_=":after",Na="___html2canvas___pseudoelement_before",Ga="___html2canvas___pseudoelement_after",wc=`{
    content: "" !important;
    display: none !important;
}`,l_=function(n){c_(n,"."+Na+a_+wc+`
         .`+Ga+o_+wc)},c_=function(n,A){var e=n.ownerDocument;if(e){var t=e.createElement("style");t.textContent=A,n.appendChild(t)}},Wu=function(){function n(){}return n.getOrigin=function(A){var e=n._link;return e?(e.href=A,e.href=e.href,e.protocol+e.hostname+e.port):"about:blank"},n.isSameOrigin=function(A){return n.getOrigin(A)===n._origin},n.setContext=function(A){n._link=A.document.createElement("a"),n._origin=n.getOrigin(A.location.href)},n._origin="about:blank",n}(),u_=function(){function n(A,e){this.context=A,this._options=e,this._cache={}}return n.prototype.addImage=function(A){var e=Promise.resolve();return this.has(A)||(la(A)||p_(A))&&(this._cache[A]=this.loadImage(A)).catch(function(){}),e},n.prototype.match=function(A){return this._cache[A]},n.prototype.loadImage=function(A){return Ue(this,void 0,void 0,function(){var e,t,i,r,s=this;return ge(this,function(a){switch(a.label){case 0:return e=Wu.isSameOrigin(A),t=!oa(A)&&this._options.useCORS===!0&&ue.SUPPORT_CORS_IMAGES&&!e,i=!oa(A)&&!e&&!la(A)&&typeof this._options.proxy=="string"&&ue.SUPPORT_CORS_XHR&&!t,!e&&this._options.allowTaint===!1&&!oa(A)&&!la(A)&&!i&&!t?[2]:(r=A,i?[4,this.proxy(r)]:[3,2]);case 1:r=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+A.substring(0,256)),[4,new Promise(function(o,l){var c=new Image;c.onload=function(){return o(c)},c.onerror=l,(g_(r)||t)&&(c.crossOrigin="anonymous"),c.src=r,c.complete===!0&&setTimeout(function(){return o(c)},500),s._options.imageTimeout>0&&setTimeout(function(){return l("Timed out ("+s._options.imageTimeout+"ms) loading image")},s._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},n.prototype.has=function(A){return typeof this._cache[A]<"u"},n.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},n.prototype.proxy=function(A){var e=this,t=this._options.proxy;if(!t)throw new Error("No proxy defined");var i=A.substring(0,256);return new Promise(function(r,s){var a=ue.SUPPORT_RESPONSE_TYPE?"blob":"text",o=new XMLHttpRequest;o.onload=function(){if(o.status===200)if(a==="text")r(o.response);else{var u=new FileReader;u.addEventListener("load",function(){return r(u.result)},!1),u.addEventListener("error",function(h){return s(h)},!1),u.readAsDataURL(o.response)}else s("Failed to proxy resource "+i+" with status code "+o.status)},o.onerror=s;var l=t.indexOf("?")>-1?"&":"?";if(o.open("GET",""+t+l+"url="+encodeURIComponent(A)+"&responseType="+a),a!=="text"&&o instanceof XMLHttpRequest&&(o.responseType=a),e._options.imageTimeout){var c=e._options.imageTimeout;o.timeout=c,o.ontimeout=function(){return s("Timed out ("+c+"ms) proxying "+i)}}o.send()})},n}(),h_=/^data:image\/svg\+xml/i,f_=/^data:image\/.*;base64,/i,d_=/^data:image\/.*/i,p_=function(n){return ue.SUPPORT_SVG_DRAWING||!m_(n)},oa=function(n){return d_.test(n)},g_=function(n){return f_.test(n)},la=function(n){return n.substr(0,4)==="blob"},m_=function(n){return n.substr(-3).toLowerCase()==="svg"||h_.test(n)},iA=function(){function n(A,e){this.type=0,this.x=A,this.y=e}return n.prototype.add=function(A,e){return new n(this.x+A,this.y+e)},n}(),En=function(n,A,e){return new iA(n.x+(A.x-n.x)*e,n.y+(A.y-n.y)*e)},_r=function(){function n(A,e,t,i){this.type=1,this.start=A,this.startControl=e,this.endControl=t,this.end=i}return n.prototype.subdivide=function(A,e){var t=En(this.start,this.startControl,A),i=En(this.startControl,this.endControl,A),r=En(this.endControl,this.end,A),s=En(t,i,A),a=En(i,r,A),o=En(s,a,A);return e?new n(this.start,t,s,o):new n(o,a,r,this.end)},n.prototype.add=function(A,e){return new n(this.start.add(A,e),this.startControl.add(A,e),this.endControl.add(A,e),this.end.add(A,e))},n.prototype.reverse=function(){return new n(this.end,this.endControl,this.startControl,this.start)},n}(),ze=function(n){return n.type===1},B_=function(){function n(A){var e=A.styles,t=A.bounds,i=pi(e.borderTopLeftRadius,t.width,t.height),r=i[0],s=i[1],a=pi(e.borderTopRightRadius,t.width,t.height),o=a[0],l=a[1],c=pi(e.borderBottomRightRadius,t.width,t.height),u=c[0],h=c[1],p=pi(e.borderBottomLeftRadius,t.width,t.height),g=p[0],f=p[1],d=[];d.push((r+o)/t.width),d.push((g+u)/t.width),d.push((s+f)/t.height),d.push((l+h)/t.height);var m=Math.max.apply(Math,d);m>1&&(r/=m,s/=m,o/=m,l/=m,u/=m,h/=m,g/=m,f/=m);var B=t.width-o,v=t.height-h,x=t.width-u,C=t.height-f,y=e.borderTopWidth,M=e.borderRightWidth,w=e.borderBottomWidth,U=e.borderLeftWidth,Q=GA(e.paddingTop,A.bounds.width),G=GA(e.paddingRight,A.bounds.width),X=GA(e.paddingBottom,A.bounds.width),b=GA(e.paddingLeft,A.bounds.width);this.topLeftBorderDoubleOuterBox=r>0||s>0?kA(t.left+U/3,t.top+y/3,r-U/3,s-y/3,DA.TOP_LEFT):new iA(t.left+U/3,t.top+y/3),this.topRightBorderDoubleOuterBox=r>0||s>0?kA(t.left+B,t.top+y/3,o-M/3,l-y/3,DA.TOP_RIGHT):new iA(t.left+t.width-M/3,t.top+y/3),this.bottomRightBorderDoubleOuterBox=u>0||h>0?kA(t.left+x,t.top+v,u-M/3,h-w/3,DA.BOTTOM_RIGHT):new iA(t.left+t.width-M/3,t.top+t.height-w/3),this.bottomLeftBorderDoubleOuterBox=g>0||f>0?kA(t.left+U/3,t.top+C,g-U/3,f-w/3,DA.BOTTOM_LEFT):new iA(t.left+U/3,t.top+t.height-w/3),this.topLeftBorderDoubleInnerBox=r>0||s>0?kA(t.left+U*2/3,t.top+y*2/3,r-U*2/3,s-y*2/3,DA.TOP_LEFT):new iA(t.left+U*2/3,t.top+y*2/3),this.topRightBorderDoubleInnerBox=r>0||s>0?kA(t.left+B,t.top+y*2/3,o-M*2/3,l-y*2/3,DA.TOP_RIGHT):new iA(t.left+t.width-M*2/3,t.top+y*2/3),this.bottomRightBorderDoubleInnerBox=u>0||h>0?kA(t.left+x,t.top+v,u-M*2/3,h-w*2/3,DA.BOTTOM_RIGHT):new iA(t.left+t.width-M*2/3,t.top+t.height-w*2/3),this.bottomLeftBorderDoubleInnerBox=g>0||f>0?kA(t.left+U*2/3,t.top+C,g-U*2/3,f-w*2/3,DA.BOTTOM_LEFT):new iA(t.left+U*2/3,t.top+t.height-w*2/3),this.topLeftBorderStroke=r>0||s>0?kA(t.left+U/2,t.top+y/2,r-U/2,s-y/2,DA.TOP_LEFT):new iA(t.left+U/2,t.top+y/2),this.topRightBorderStroke=r>0||s>0?kA(t.left+B,t.top+y/2,o-M/2,l-y/2,DA.TOP_RIGHT):new iA(t.left+t.width-M/2,t.top+y/2),this.bottomRightBorderStroke=u>0||h>0?kA(t.left+x,t.top+v,u-M/2,h-w/2,DA.BOTTOM_RIGHT):new iA(t.left+t.width-M/2,t.top+t.height-w/2),this.bottomLeftBorderStroke=g>0||f>0?kA(t.left+U/2,t.top+C,g-U/2,f-w/2,DA.BOTTOM_LEFT):new iA(t.left+U/2,t.top+t.height-w/2),this.topLeftBorderBox=r>0||s>0?kA(t.left,t.top,r,s,DA.TOP_LEFT):new iA(t.left,t.top),this.topRightBorderBox=o>0||l>0?kA(t.left+B,t.top,o,l,DA.TOP_RIGHT):new iA(t.left+t.width,t.top),this.bottomRightBorderBox=u>0||h>0?kA(t.left+x,t.top+v,u,h,DA.BOTTOM_RIGHT):new iA(t.left+t.width,t.top+t.height),this.bottomLeftBorderBox=g>0||f>0?kA(t.left,t.top+C,g,f,DA.BOTTOM_LEFT):new iA(t.left,t.top+t.height),this.topLeftPaddingBox=r>0||s>0?kA(t.left+U,t.top+y,Math.max(0,r-U),Math.max(0,s-y),DA.TOP_LEFT):new iA(t.left+U,t.top+y),this.topRightPaddingBox=o>0||l>0?kA(t.left+Math.min(B,t.width-M),t.top+y,B>t.width+M?0:Math.max(0,o-M),Math.max(0,l-y),DA.TOP_RIGHT):new iA(t.left+t.width-M,t.top+y),this.bottomRightPaddingBox=u>0||h>0?kA(t.left+Math.min(x,t.width-U),t.top+Math.min(v,t.height-w),Math.max(0,u-M),Math.max(0,h-w),DA.BOTTOM_RIGHT):new iA(t.left+t.width-M,t.top+t.height-w),this.bottomLeftPaddingBox=g>0||f>0?kA(t.left+U,t.top+Math.min(C,t.height-w),Math.max(0,g-U),Math.max(0,f-w),DA.BOTTOM_LEFT):new iA(t.left+U,t.top+t.height-w),this.topLeftContentBox=r>0||s>0?kA(t.left+U+b,t.top+y+Q,Math.max(0,r-(U+b)),Math.max(0,s-(y+Q)),DA.TOP_LEFT):new iA(t.left+U+b,t.top+y+Q),this.topRightContentBox=o>0||l>0?kA(t.left+Math.min(B,t.width+U+b),t.top+y+Q,B>t.width+U+b?0:o-U+b,l-(y+Q),DA.TOP_RIGHT):new iA(t.left+t.width-(M+G),t.top+y+Q),this.bottomRightContentBox=u>0||h>0?kA(t.left+Math.min(x,t.width-(U+b)),t.top+Math.min(v,t.height+y+Q),Math.max(0,u-(M+G)),h-(w+X),DA.BOTTOM_RIGHT):new iA(t.left+t.width-(M+G),t.top+t.height-(w+X)),this.bottomLeftContentBox=g>0||f>0?kA(t.left+U+b,t.top+C,Math.max(0,g-(U+b)),f-(w+X),DA.BOTTOM_LEFT):new iA(t.left+U+b,t.top+t.height-(w+X))}return n}(),DA;(function(n){n[n.TOP_LEFT=0]="TOP_LEFT",n[n.TOP_RIGHT=1]="TOP_RIGHT",n[n.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",n[n.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(DA||(DA={}));var kA=function(n,A,e,t,i){var r=4*((Math.sqrt(2)-1)/3),s=e*r,a=t*r,o=n+e,l=A+t;switch(i){case DA.TOP_LEFT:return new _r(new iA(n,l),new iA(n,l-a),new iA(o-s,A),new iA(o,A));case DA.TOP_RIGHT:return new _r(new iA(n,A),new iA(n+s,A),new iA(o,l-a),new iA(o,l));case DA.BOTTOM_RIGHT:return new _r(new iA(o,A),new iA(o,A+a),new iA(n+s,l),new iA(n,l));case DA.BOTTOM_LEFT:default:return new _r(new iA(o,l),new iA(o-s,l),new iA(n,A+a),new iA(n,A))}},Vr=function(n){return[n.topLeftBorderBox,n.topRightBorderBox,n.bottomRightBorderBox,n.bottomLeftBorderBox]},w_=function(n){return[n.topLeftContentBox,n.topRightContentBox,n.bottomRightContentBox,n.bottomLeftContentBox]},Kr=function(n){return[n.topLeftPaddingBox,n.topRightPaddingBox,n.bottomRightPaddingBox,n.bottomLeftPaddingBox]},v_=function(){function n(A,e,t){this.offsetX=A,this.offsetY=e,this.matrix=t,this.type=0,this.target=6}return n}(),xr=function(){function n(A,e){this.path=A,this.target=e,this.type=1}return n}(),C_=function(){function n(A){this.opacity=A,this.type=2,this.target=6}return n}(),__=function(n){return n.type===0},Xu=function(n){return n.type===1},x_=function(n){return n.type===2},vc=function(n,A){return n.length===A.length?n.some(function(e,t){return e===A[t]}):!1},U_=function(n,A,e,t,i){return n.map(function(r,s){switch(s){case 0:return r.add(A,e);case 1:return r.add(A+t,e);case 2:return r.add(A+t,e+i);case 3:return r.add(A,e+i)}return r})},Ju=function(){function n(A){this.element=A,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return n}(),Yu=function(){function n(A,e){if(this.container=A,this.parent=e,this.effects=[],this.curves=new B_(this.container),this.container.styles.opacity<1&&this.effects.push(new C_(this.container.styles.opacity)),this.container.styles.transform!==null){var t=this.container.bounds.left+this.container.styles.transformOrigin[0].number,i=this.container.bounds.top+this.container.styles.transformOrigin[1].number,r=this.container.styles.transform;this.effects.push(new v_(t,i,r))}if(this.container.styles.overflowX!==0){var s=Vr(this.curves),a=Kr(this.curves);vc(s,a)?this.effects.push(new xr(s,6)):(this.effects.push(new xr(s,2)),this.effects.push(new xr(a,4)))}}return n.prototype.getEffects=function(A){for(var e=[2,3].indexOf(this.container.styles.position)===-1,t=this.parent,i=this.effects.slice(0);t;){var r=t.effects.filter(function(o){return!Xu(o)});if(e||t.container.styles.position!==0||!t.parent){if(i.unshift.apply(i,r),e=[2,3].indexOf(t.container.styles.position)===-1,t.container.styles.overflowX!==0){var s=Vr(t.curves),a=Kr(t.curves);vc(s,a)||i.unshift(new xr(a,6))}}else i.unshift.apply(i,r);t=t.parent}return i.filter(function(o){return ee(o.target,A)})},n}(),Va=function(n,A,e,t){n.container.elements.forEach(function(i){var r=ee(i.flags,4),s=ee(i.flags,2),a=new Yu(i,n);ee(i.styles.display,2048)&&t.push(a);var o=ee(i.flags,8)?[]:t;if(r||s){var l=r||i.styles.isPositioned()?e:A,c=new Ju(a);if(i.styles.isPositioned()||i.styles.opacity<1||i.styles.isTransformed()){var u=i.styles.zIndex.order;if(u<0){var h=0;l.negativeZIndex.some(function(g,f){return u>g.element.container.styles.zIndex.order?(h=f,!1):h>0}),l.negativeZIndex.splice(h,0,c)}else if(u>0){var p=0;l.positiveZIndex.some(function(g,f){return u>=g.element.container.styles.zIndex.order?(p=f+1,!1):p>0}),l.positiveZIndex.splice(p,0,c)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)}else i.styles.isFloating()?l.nonPositionedFloats.push(c):l.nonPositionedInlineLevel.push(c);Va(a,c,r?c:e,o)}else i.styles.isInlineLevel()?A.inlineLevel.push(a):A.nonInlineLevel.push(a),Va(a,A,e,o);ee(i.flags,8)&&Zu(i,o)})},Zu=function(n,A){for(var e=n instanceof Ra?n.start:1,t=n instanceof Ra?n.reversed:!1,i=0;i<A.length;i++){var r=A[i];r.container instanceof Tu&&typeof r.container.value=="number"&&r.container.value!==0&&(e=r.container.value),r.listValue=Si(e,r.container.styles.listStyleType,!0),e+=t?-1:1}},F_=function(n){var A=new Yu(n,null),e=new Ju(A),t=[];return Va(A,e,e,t),Zu(A.container,t),e},Cc=function(n,A){switch(A){case 0:return We(n.topLeftBorderBox,n.topLeftPaddingBox,n.topRightBorderBox,n.topRightPaddingBox);case 1:return We(n.topRightBorderBox,n.topRightPaddingBox,n.bottomRightBorderBox,n.bottomRightPaddingBox);case 2:return We(n.bottomRightBorderBox,n.bottomRightPaddingBox,n.bottomLeftBorderBox,n.bottomLeftPaddingBox);case 3:default:return We(n.bottomLeftBorderBox,n.bottomLeftPaddingBox,n.topLeftBorderBox,n.topLeftPaddingBox)}},y_=function(n,A){switch(A){case 0:return We(n.topLeftBorderBox,n.topLeftBorderDoubleOuterBox,n.topRightBorderBox,n.topRightBorderDoubleOuterBox);case 1:return We(n.topRightBorderBox,n.topRightBorderDoubleOuterBox,n.bottomRightBorderBox,n.bottomRightBorderDoubleOuterBox);case 2:return We(n.bottomRightBorderBox,n.bottomRightBorderDoubleOuterBox,n.bottomLeftBorderBox,n.bottomLeftBorderDoubleOuterBox);case 3:default:return We(n.bottomLeftBorderBox,n.bottomLeftBorderDoubleOuterBox,n.topLeftBorderBox,n.topLeftBorderDoubleOuterBox)}},E_=function(n,A){switch(A){case 0:return We(n.topLeftBorderDoubleInnerBox,n.topLeftPaddingBox,n.topRightBorderDoubleInnerBox,n.topRightPaddingBox);case 1:return We(n.topRightBorderDoubleInnerBox,n.topRightPaddingBox,n.bottomRightBorderDoubleInnerBox,n.bottomRightPaddingBox);case 2:return We(n.bottomRightBorderDoubleInnerBox,n.bottomRightPaddingBox,n.bottomLeftBorderDoubleInnerBox,n.bottomLeftPaddingBox);case 3:default:return We(n.bottomLeftBorderDoubleInnerBox,n.bottomLeftPaddingBox,n.topLeftBorderDoubleInnerBox,n.topLeftPaddingBox)}},M_=function(n,A){switch(A){case 0:return Ur(n.topLeftBorderStroke,n.topRightBorderStroke);case 1:return Ur(n.topRightBorderStroke,n.bottomRightBorderStroke);case 2:return Ur(n.bottomRightBorderStroke,n.bottomLeftBorderStroke);case 3:default:return Ur(n.bottomLeftBorderStroke,n.topLeftBorderStroke)}},Ur=function(n,A){var e=[];return ze(n)?e.push(n.subdivide(.5,!1)):e.push(n),ze(A)?e.push(A.subdivide(.5,!0)):e.push(A),e},We=function(n,A,e,t){var i=[];return ze(n)?i.push(n.subdivide(.5,!1)):i.push(n),ze(e)?i.push(e.subdivide(.5,!0)):i.push(e),ze(t)?i.push(t.subdivide(.5,!0).reverse()):i.push(t),ze(A)?i.push(A.subdivide(.5,!1).reverse()):i.push(A),i},qu=function(n){var A=n.bounds,e=n.styles;return A.add(e.borderLeftWidth,e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth),-(e.borderTopWidth+e.borderBottomWidth))},zr=function(n){var A=n.styles,e=n.bounds,t=GA(A.paddingLeft,e.width),i=GA(A.paddingRight,e.width),r=GA(A.paddingTop,e.width),s=GA(A.paddingBottom,e.width);return e.add(t+A.borderLeftWidth,r+A.borderTopWidth,-(A.borderRightWidth+A.borderLeftWidth+t+i),-(A.borderTopWidth+A.borderBottomWidth+r+s))},Q_=function(n,A){return n===0?A.bounds:n===2?zr(A):qu(A)},S_=function(n,A){return n===0?A.bounds:n===2?zr(A):qu(A)},ca=function(n,A,e){var t=Q_(bn(n.styles.backgroundOrigin,A),n),i=S_(bn(n.styles.backgroundClip,A),n),r=b_(bn(n.styles.backgroundSize,A),e,t),s=r[0],a=r[1],o=pi(bn(n.styles.backgroundPosition,A),t.width-s,t.height-a),l=I_(bn(n.styles.backgroundRepeat,A),o,r,t,i),c=Math.round(t.left+o[0]),u=Math.round(t.top+o[1]);return[l,c,u,s,a]},Mn=function(n){return PA(n)&&n.value===Pn.AUTO},Fr=function(n){return typeof n=="number"},b_=function(n,A,e){var t=A[0],i=A[1],r=A[2],s=n[0],a=n[1];if(!s)return[0,0];if(qA(s)&&a&&qA(a))return[GA(s,e.width),GA(a,e.height)];var o=Fr(r);if(PA(s)&&(s.value===Pn.CONTAIN||s.value===Pn.COVER)){if(Fr(r)){var l=e.width/e.height;return l<r!=(s.value===Pn.COVER)?[e.width,e.width/r]:[e.height*r,e.height]}return[e.width,e.height]}var c=Fr(t),u=Fr(i),h=c||u;if(Mn(s)&&(!a||Mn(a))){if(c&&u)return[t,i];if(!o&&!h)return[e.width,e.height];if(h&&o){var p=c?t:i*r,g=u?i:t/r;return[p,g]}var f=c?t:e.width,d=u?i:e.height;return[f,d]}if(o){var m=0,B=0;return qA(s)?m=GA(s,e.width):qA(a)&&(B=GA(a,e.height)),Mn(s)?m=B*r:(!a||Mn(a))&&(B=m/r),[m,B]}var v=null,x=null;if(qA(s)?v=GA(s,e.width):a&&qA(a)&&(x=GA(a,e.height)),v!==null&&(!a||Mn(a))&&(x=c&&u?v/t*i:e.height),x!==null&&Mn(s)&&(v=c&&u?x/i*t:e.width),v!==null&&x!==null)return[v,x];throw new Error("Unable to calculate background-size for element")},bn=function(n,A){var e=n[A];return typeof e>"u"?n[0]:e},I_=function(n,A,e,t,i){var r=A[0],s=A[1],a=e[0],o=e[1];switch(n){case 2:return[new iA(Math.round(t.left),Math.round(t.top+s)),new iA(Math.round(t.left+t.width),Math.round(t.top+s)),new iA(Math.round(t.left+t.width),Math.round(o+t.top+s)),new iA(Math.round(t.left),Math.round(o+t.top+s))];case 3:return[new iA(Math.round(t.left+r),Math.round(t.top)),new iA(Math.round(t.left+r+a),Math.round(t.top)),new iA(Math.round(t.left+r+a),Math.round(t.height+t.top)),new iA(Math.round(t.left+r),Math.round(t.height+t.top))];case 1:return[new iA(Math.round(t.left+r),Math.round(t.top+s)),new iA(Math.round(t.left+r+a),Math.round(t.top+s)),new iA(Math.round(t.left+r+a),Math.round(t.top+s+o)),new iA(Math.round(t.left+r),Math.round(t.top+s+o))];default:return[new iA(Math.round(i.left),Math.round(i.top)),new iA(Math.round(i.left+i.width),Math.round(i.top)),new iA(Math.round(i.left+i.width),Math.round(i.height+i.top)),new iA(Math.round(i.left),Math.round(i.height+i.top))]}},T_="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",_c="Hidden Text",L_=function(){function n(A){this._data={},this._document=A}return n.prototype.parseMetrics=function(A,e){var t=this._document.createElement("div"),i=this._document.createElement("img"),r=this._document.createElement("span"),s=this._document.body;t.style.visibility="hidden",t.style.fontFamily=A,t.style.fontSize=e,t.style.margin="0",t.style.padding="0",t.style.whiteSpace="nowrap",s.appendChild(t),i.src=T_,i.width=1,i.height=1,i.style.margin="0",i.style.padding="0",i.style.verticalAlign="baseline",r.style.fontFamily=A,r.style.fontSize=e,r.style.margin="0",r.style.padding="0",r.appendChild(this._document.createTextNode(_c)),t.appendChild(r),t.appendChild(i);var a=i.offsetTop-r.offsetTop+2;t.removeChild(r),t.appendChild(this._document.createTextNode(_c)),t.style.lineHeight="normal",i.style.verticalAlign="super";var o=i.offsetTop-t.offsetTop+2;return s.removeChild(t),{baseline:a,middle:o}},n.prototype.getMetrics=function(A,e){var t=A+" "+e;return typeof this._data[t]>"u"&&(this._data[t]=this.parseMetrics(A,e)),this._data[t]},n}(),ju=function(){function n(A,e){this.context=A,this.options=e}return n}(),H_=1e4,D_=function(n){et(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i._activeEffects=[],i.canvas=t.canvas?t.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),t.canvas||(i.canvas.width=Math.floor(t.width*t.scale),i.canvas.height=Math.floor(t.height*t.scale),i.canvas.style.width=t.width+"px",i.canvas.style.height=t.height+"px"),i.fontMetrics=new L_(document),i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-t.x,-t.y),i.ctx.textBaseline="bottom",i._activeEffects=[],i.context.logger.debug("Canvas renderer initialized ("+t.width+"x"+t.height+") with scale "+t.scale),i}return A.prototype.applyEffects=function(e){for(var t=this;this._activeEffects.length;)this.popEffect();e.forEach(function(i){return t.applyEffect(i)})},A.prototype.applyEffect=function(e){this.ctx.save(),x_(e)&&(this.ctx.globalAlpha=e.opacity),__(e)&&(this.ctx.translate(e.offsetX,e.offsetY),this.ctx.transform(e.matrix[0],e.matrix[1],e.matrix[2],e.matrix[3],e.matrix[4],e.matrix[5]),this.ctx.translate(-e.offsetX,-e.offsetY)),Xu(e)&&(this.path(e.path),this.ctx.clip()),this._activeEffects.push(e)},A.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},A.prototype.renderStack=function(e){return Ue(this,void 0,void 0,function(){var t;return ge(this,function(i){switch(i.label){case 0:return t=e.element.container.styles,t.isVisible()?[4,this.renderStackContent(e)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})},A.prototype.renderNode=function(e){return Ue(this,void 0,void 0,function(){return ge(this,function(t){switch(t.label){case 0:if(ee(e.container.flags,16))debugger;return e.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(e)]:[3,3];case 1:return t.sent(),[4,this.renderNodeContent(e)];case 2:t.sent(),t.label=3;case 3:return[2]}})})},A.prototype.renderTextWithLetterSpacing=function(e,t,i){var r=this;if(t===0)this.ctx.fillText(e.text,e.bounds.left,e.bounds.top+i);else{var s=io(e.text);s.reduce(function(a,o){return r.ctx.fillText(o,a,e.bounds.top+i),a+r.ctx.measureText(o).width},e.bounds.left)}},A.prototype.createFontStyle=function(e){var t=e.fontVariant.filter(function(s){return s==="normal"||s==="small-caps"}).join(""),i=G_(e.fontFamily).join(", "),r=Di(e.fontSize)?""+e.fontSize.number+e.fontSize.unit:e.fontSize.number+"px";return[[e.fontStyle,t,e.fontWeight,r,i].join(" "),i,r]},A.prototype.renderTextNode=function(e,t){return Ue(this,void 0,void 0,function(){var i,r,s,a,o,l,c,u,h=this;return ge(this,function(p){return i=this.createFontStyle(t),r=i[0],s=i[1],a=i[2],this.ctx.font=r,this.ctx.direction=t.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",o=this.fontMetrics.getMetrics(s,a),l=o.baseline,c=o.middle,u=t.paintOrder,e.textBounds.forEach(function(g){u.forEach(function(f){switch(f){case 0:h.ctx.fillStyle=le(t.color),h.renderTextWithLetterSpacing(g,t.letterSpacing,l);var d=t.textShadow;d.length&&g.text.trim().length&&(d.slice(0).reverse().forEach(function(m){h.ctx.shadowColor=le(m.color),h.ctx.shadowOffsetX=m.offsetX.number*h.options.scale,h.ctx.shadowOffsetY=m.offsetY.number*h.options.scale,h.ctx.shadowBlur=m.blur.number,h.renderTextWithLetterSpacing(g,t.letterSpacing,l)}),h.ctx.shadowColor="",h.ctx.shadowOffsetX=0,h.ctx.shadowOffsetY=0,h.ctx.shadowBlur=0),t.textDecorationLine.length&&(h.ctx.fillStyle=le(t.textDecorationColor||t.color),t.textDecorationLine.forEach(function(m){switch(m){case 1:h.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top+l),g.bounds.width,1);break;case 2:h.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top),g.bounds.width,1);break;case 3:h.ctx.fillRect(g.bounds.left,Math.ceil(g.bounds.top+c),g.bounds.width,1);break}}));break;case 1:t.webkitTextStrokeWidth&&g.text.trim().length&&(h.ctx.strokeStyle=le(t.webkitTextStrokeColor),h.ctx.lineWidth=t.webkitTextStrokeWidth,h.ctx.lineJoin=window.chrome?"miter":"round",h.ctx.strokeText(g.text,g.bounds.left,g.bounds.top+l)),h.ctx.strokeStyle="",h.ctx.lineWidth=0,h.ctx.lineJoin="miter";break}})}),[2]})})},A.prototype.renderReplacedElement=function(e,t,i){if(i&&e.intrinsicWidth>0&&e.intrinsicHeight>0){var r=zr(e),s=Kr(t);this.path(s),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(i,0,0,e.intrinsicWidth,e.intrinsicHeight,r.left,r.top,r.width,r.height),this.ctx.restore()}},A.prototype.renderNodeContent=function(e){return Ue(this,void 0,void 0,function(){var t,i,r,s,a,o,B,B,l,c,u,h,x,p,g,C,f,d,m,B,v,x,C;return ge(this,function(y){switch(y.label){case 0:this.applyEffects(e.getEffects(4)),t=e.container,i=e.curves,r=t.styles,s=0,a=t.textNodes,y.label=1;case 1:return s<a.length?(o=a[s],[4,this.renderTextNode(o,r)]):[3,4];case 2:y.sent(),y.label=3;case 3:return s++,[3,1];case 4:if(!(t instanceof Su))return[3,8];y.label=5;case 5:return y.trys.push([5,7,,8]),[4,this.context.cache.match(t.src)];case 6:return B=y.sent(),this.renderReplacedElement(t,i,B),[3,8];case 7:return y.sent(),this.context.logger.error("Error loading image "+t.src),[3,8];case 8:if(t instanceof bu&&this.renderReplacedElement(t,i,t.canvas),!(t instanceof Iu))return[3,12];y.label=9;case 9:return y.trys.push([9,11,,12]),[4,this.context.cache.match(t.svg)];case 10:return B=y.sent(),this.renderReplacedElement(t,i,B),[3,12];case 11:return y.sent(),this.context.logger.error("Error loading svg "+t.svg.substring(0,255)),[3,12];case 12:return t instanceof Du&&t.tree?(l=new A(this.context,{scale:this.options.scale,backgroundColor:t.backgroundColor,x:0,y:0,width:t.width,height:t.height}),[4,l.render(t.tree)]):[3,14];case 13:c=y.sent(),t.width&&t.height&&this.ctx.drawImage(c,0,0,t.width,t.height,t.bounds.left,t.bounds.top,t.bounds.width,t.bounds.height),y.label=14;case 14:if(t instanceof ro&&(u=Math.min(t.bounds.width,t.bounds.height),t.type===Pr?t.checked&&(this.ctx.save(),this.path([new iA(t.bounds.left+u*.39363,t.bounds.top+u*.79),new iA(t.bounds.left+u*.16,t.bounds.top+u*.5549),new iA(t.bounds.left+u*.27347,t.bounds.top+u*.44071),new iA(t.bounds.left+u*.39694,t.bounds.top+u*.5649),new iA(t.bounds.left+u*.72983,t.bounds.top+u*.23),new iA(t.bounds.left+u*.84,t.bounds.top+u*.34085),new iA(t.bounds.left+u*.39363,t.bounds.top+u*.79)]),this.ctx.fillStyle=le(lc),this.ctx.fill(),this.ctx.restore()):t.type===Or&&t.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(t.bounds.left+u/2,t.bounds.top+u/2,u/4,0,Math.PI*2,!0),this.ctx.fillStyle=le(lc),this.ctx.fill(),this.ctx.restore())),R_(t)&&t.value.length){switch(h=this.createFontStyle(r),x=h[0],p=h[1],g=this.fontMetrics.getMetrics(x,p).baseline,this.ctx.font=x,this.ctx.fillStyle=le(r.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=O_(t.styles.textAlign),C=zr(t),f=0,t.styles.textAlign){case 1:f+=C.width/2;break;case 2:f+=C.width;break}d=C.add(f,0,0,-C.height/2+1),this.ctx.save(),this.path([new iA(C.left,C.top),new iA(C.left+C.width,C.top),new iA(C.left+C.width,C.top+C.height),new iA(C.left,C.top+C.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new xi(t.value,d),r.letterSpacing,g),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!ee(t.styles.display,2048))return[3,20];if(t.styles.listStyleImage===null)return[3,19];if(m=t.styles.listStyleImage,m.type!==0)return[3,18];B=void 0,v=m.url,y.label=15;case 15:return y.trys.push([15,17,,18]),[4,this.context.cache.match(v)];case 16:return B=y.sent(),this.ctx.drawImage(B,t.bounds.left-(B.width+10),t.bounds.top),[3,18];case 17:return y.sent(),this.context.logger.error("Error loading list-style-image "+v),[3,18];case 18:return[3,20];case 19:e.listValue&&t.styles.listStyleType!==-1&&(x=this.createFontStyle(r)[0],this.ctx.font=x,this.ctx.fillStyle=le(r.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",C=new xt(t.bounds.left,t.bounds.top+GA(t.styles.paddingTop,t.bounds.width),t.bounds.width,Wl(r.lineHeight,r.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new xi(e.listValue,C),r.letterSpacing,Wl(r.lineHeight,r.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),y.label=20;case 20:return[2]}})})},A.prototype.renderStackContent=function(e){return Ue(this,void 0,void 0,function(){var t,i,m,r,s,m,a,o,m,l,c,m,u,h,m,p,g,m,f,d,m;return ge(this,function(B){switch(B.label){case 0:if(ee(e.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(e.element)];case 1:B.sent(),t=0,i=e.negativeZIndex,B.label=2;case 2:return t<i.length?(m=i[t],[4,this.renderStack(m)]):[3,5];case 3:B.sent(),B.label=4;case 4:return t++,[3,2];case 5:return[4,this.renderNodeContent(e.element)];case 6:B.sent(),r=0,s=e.nonInlineLevel,B.label=7;case 7:return r<s.length?(m=s[r],[4,this.renderNode(m)]):[3,10];case 8:B.sent(),B.label=9;case 9:return r++,[3,7];case 10:a=0,o=e.nonPositionedFloats,B.label=11;case 11:return a<o.length?(m=o[a],[4,this.renderStack(m)]):[3,14];case 12:B.sent(),B.label=13;case 13:return a++,[3,11];case 14:l=0,c=e.nonPositionedInlineLevel,B.label=15;case 15:return l<c.length?(m=c[l],[4,this.renderStack(m)]):[3,18];case 16:B.sent(),B.label=17;case 17:return l++,[3,15];case 18:u=0,h=e.inlineLevel,B.label=19;case 19:return u<h.length?(m=h[u],[4,this.renderNode(m)]):[3,22];case 20:B.sent(),B.label=21;case 21:return u++,[3,19];case 22:p=0,g=e.zeroOrAutoZIndexOrTransformedOrOpacity,B.label=23;case 23:return p<g.length?(m=g[p],[4,this.renderStack(m)]):[3,26];case 24:B.sent(),B.label=25;case 25:return p++,[3,23];case 26:f=0,d=e.positiveZIndex,B.label=27;case 27:return f<d.length?(m=d[f],[4,this.renderStack(m)]):[3,30];case 28:B.sent(),B.label=29;case 29:return f++,[3,27];case 30:return[2]}})})},A.prototype.mask=function(e){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(e.slice(0).reverse()),this.ctx.closePath()},A.prototype.path=function(e){this.ctx.beginPath(),this.formatPath(e),this.ctx.closePath()},A.prototype.formatPath=function(e){var t=this;e.forEach(function(i,r){var s=ze(i)?i.start:i;r===0?t.ctx.moveTo(s.x,s.y):t.ctx.lineTo(s.x,s.y),ze(i)&&t.ctx.bezierCurveTo(i.startControl.x,i.startControl.y,i.endControl.x,i.endControl.y,i.end.x,i.end.y)})},A.prototype.renderRepeat=function(e,t,i,r){this.path(e),this.ctx.fillStyle=t,this.ctx.translate(i,r),this.ctx.fill(),this.ctx.translate(-i,-r)},A.prototype.resizeImage=function(e,t,i){var r;if(e.width===t&&e.height===i)return e;var s=(r=this.canvas.ownerDocument)!==null&&r!==void 0?r:document,a=s.createElement("canvas");a.width=Math.max(1,t),a.height=Math.max(1,i);var o=a.getContext("2d");return o.drawImage(e,0,0,e.width,e.height,0,0,t,i),a},A.prototype.renderBackgroundImage=function(e){return Ue(this,void 0,void 0,function(){var t,i,r,s,a,o;return ge(this,function(l){switch(l.label){case 0:t=e.styles.backgroundImage.length-1,i=function(c){var u,h,p,Q,J,Y,b,I,w,g,Q,J,Y,b,I,f,d,m,B,v,x,C,y,M,w,U,Q,G,X,b,I,V,J,Y,K,Z,q,lA,D,k,eA,AA;return ge(this,function(R){switch(R.label){case 0:if(c.type!==0)return[3,5];u=void 0,h=c.url,R.label=1;case 1:return R.trys.push([1,3,,4]),[4,r.context.cache.match(h)];case 2:return u=R.sent(),[3,4];case 3:return R.sent(),r.context.logger.error("Error loading background-image "+h),[3,4];case 4:return u&&(p=ca(e,t,[u.width,u.height,u.width/u.height]),Q=p[0],J=p[1],Y=p[2],b=p[3],I=p[4],w=r.ctx.createPattern(r.resizeImage(u,b,I),"repeat"),r.renderRepeat(Q,w,J,Y)),[3,6];case 5:_w(c)?(g=ca(e,t,[null,null,null]),Q=g[0],J=g[1],Y=g[2],b=g[3],I=g[4],f=mw(c.angle,b,I),d=f[0],m=f[1],B=f[2],v=f[3],x=f[4],C=document.createElement("canvas"),C.width=b,C.height=I,y=C.getContext("2d"),M=y.createLinearGradient(m,v,B,x),zl(c.stops,d).forEach(function(wA){return M.addColorStop(wA.stop,le(wA.color))}),y.fillStyle=M,y.fillRect(0,0,b,I),b>0&&I>0&&(w=r.ctx.createPattern(C,"repeat"),r.renderRepeat(Q,w,J,Y))):xw(c)&&(U=ca(e,t,[null,null,null]),Q=U[0],G=U[1],X=U[2],b=U[3],I=U[4],V=c.position.length===0?[eo]:c.position,J=GA(V[0],b),Y=GA(V[V.length-1],I),K=Bw(c,J,Y,b,I),Z=K[0],q=K[1],Z>0&&q>0&&(lA=r.ctx.createRadialGradient(G+J,X+Y,0,G+J,X+Y,Z),zl(c.stops,Z*2).forEach(function(wA){return lA.addColorStop(wA.stop,le(wA.color))}),r.path(Q),r.ctx.fillStyle=lA,Z!==q?(D=e.bounds.left+.5*e.bounds.width,k=e.bounds.top+.5*e.bounds.height,eA=q/Z,AA=1/eA,r.ctx.save(),r.ctx.translate(D,k),r.ctx.transform(1,0,0,eA,0,0),r.ctx.translate(-D,-k),r.ctx.fillRect(G,AA*(X-k)+k,b,I*AA),r.ctx.restore()):r.ctx.fill())),R.label=6;case 6:return t--,[2]}})},r=this,s=0,a=e.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return s<a.length?(o=a[s],[5,i(o)]):[3,4];case 2:l.sent(),l.label=3;case 3:return s++,[3,1];case 4:return[2]}})})},A.prototype.renderSolidBorder=function(e,t,i){return Ue(this,void 0,void 0,function(){return ge(this,function(r){return this.path(Cc(i,t)),this.ctx.fillStyle=le(e),this.ctx.fill(),[2]})})},A.prototype.renderDoubleBorder=function(e,t,i,r){return Ue(this,void 0,void 0,function(){var s,a;return ge(this,function(o){switch(o.label){case 0:return t<3?[4,this.renderSolidBorder(e,i,r)]:[3,2];case 1:return o.sent(),[2];case 2:return s=y_(r,i),this.path(s),this.ctx.fillStyle=le(e),this.ctx.fill(),a=E_(r,i),this.path(a),this.ctx.fill(),[2]}})})},A.prototype.renderNodeBackgroundAndBorders=function(e){return Ue(this,void 0,void 0,function(){var t,i,r,s,a,o,l,c,u=this;return ge(this,function(h){switch(h.label){case 0:return this.applyEffects(e.getEffects(2)),t=e.container.styles,i=!Dt(t.backgroundColor)||t.backgroundImage.length,r=[{style:t.borderTopStyle,color:t.borderTopColor,width:t.borderTopWidth},{style:t.borderRightStyle,color:t.borderRightColor,width:t.borderRightWidth},{style:t.borderBottomStyle,color:t.borderBottomColor,width:t.borderBottomWidth},{style:t.borderLeftStyle,color:t.borderLeftColor,width:t.borderLeftWidth}],s=P_(bn(t.backgroundClip,0),e.curves),i||t.boxShadow.length?(this.ctx.save(),this.path(s),this.ctx.clip(),Dt(t.backgroundColor)||(this.ctx.fillStyle=le(t.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(e.container)]):[3,2];case 1:h.sent(),this.ctx.restore(),t.boxShadow.slice(0).reverse().forEach(function(p){u.ctx.save();var g=Vr(e.curves),f=p.inset?0:H_,d=U_(g,-f+(p.inset?1:-1)*p.spread.number,(p.inset?1:-1)*p.spread.number,p.spread.number*(p.inset?-2:2),p.spread.number*(p.inset?-2:2));p.inset?(u.path(g),u.ctx.clip(),u.mask(d)):(u.mask(g),u.ctx.clip(),u.path(d)),u.ctx.shadowOffsetX=p.offsetX.number+f,u.ctx.shadowOffsetY=p.offsetY.number,u.ctx.shadowColor=le(p.color),u.ctx.shadowBlur=p.blur.number,u.ctx.fillStyle=p.inset?le(p.color):"rgba(0,0,0,1)",u.ctx.fill(),u.ctx.restore()}),h.label=2;case 2:a=0,o=0,l=r,h.label=3;case 3:return o<l.length?(c=l[o],c.style!==0&&!Dt(c.color)&&c.width>0?c.style!==2?[3,5]:[4,this.renderDashedDottedBorder(c.color,c.width,a,e.curves,2)]:[3,11]):[3,13];case 4:return h.sent(),[3,11];case 5:return c.style!==3?[3,7]:[4,this.renderDashedDottedBorder(c.color,c.width,a,e.curves,3)];case 6:return h.sent(),[3,11];case 7:return c.style!==4?[3,9]:[4,this.renderDoubleBorder(c.color,c.width,a,e.curves)];case 8:return h.sent(),[3,11];case 9:return[4,this.renderSolidBorder(c.color,a,e.curves)];case 10:h.sent(),h.label=11;case 11:a++,h.label=12;case 12:return o++,[3,3];case 13:return[2]}})})},A.prototype.renderDashedDottedBorder=function(e,t,i,r,s){return Ue(this,void 0,void 0,function(){var a,o,l,c,u,h,p,g,f,d,m,B,v,x,C,y,C,y;return ge(this,function(M){return this.ctx.save(),a=M_(r,i),o=Cc(r,i),s===2&&(this.path(o),this.ctx.clip()),ze(o[0])?(l=o[0].start.x,c=o[0].start.y):(l=o[0].x,c=o[0].y),ze(o[1])?(u=o[1].end.x,h=o[1].end.y):(u=o[1].x,h=o[1].y),i===0||i===2?p=Math.abs(l-u):p=Math.abs(c-h),this.ctx.beginPath(),s===3?this.formatPath(a):this.formatPath(o.slice(0,2)),g=t<3?t*3:t*2,f=t<3?t*2:t,s===3&&(g=t,f=t),d=!0,p<=g*2?d=!1:p<=g*2+f?(m=p/(2*g+f),g*=m,f*=m):(B=Math.floor((p+f)/(g+f)),v=(p-B*g)/(B-1),x=(p-(B+1)*g)/B,f=x<=0||Math.abs(f-v)<Math.abs(f-x)?v:x),d&&(s===3?this.ctx.setLineDash([0,g+f]):this.ctx.setLineDash([g,f])),s===3?(this.ctx.lineCap="round",this.ctx.lineWidth=t):this.ctx.lineWidth=t*2+1.1,this.ctx.strokeStyle=le(e),this.ctx.stroke(),this.ctx.setLineDash([]),s===2&&(ze(o[0])&&(C=o[3],y=o[0],this.ctx.beginPath(),this.formatPath([new iA(C.end.x,C.end.y),new iA(y.start.x,y.start.y)]),this.ctx.stroke()),ze(o[1])&&(C=o[1],y=o[2],this.ctx.beginPath(),this.formatPath([new iA(C.end.x,C.end.y),new iA(y.start.x,y.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},A.prototype.render=function(e){return Ue(this,void 0,void 0,function(){var t;return ge(this,function(i){switch(i.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=le(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),t=F_(e),[4,this.renderStack(t)];case 1:return i.sent(),this.applyEffects([]),[2,this.canvas]}})})},A}(ju),R_=function(n){return n instanceof Hu||n instanceof Lu?!0:n instanceof ro&&n.type!==Or&&n.type!==Pr},P_=function(n,A){switch(n){case 0:return Vr(A);case 2:return w_(A);case 1:default:return Kr(A)}},O_=function(n){switch(n){case 1:return"center";case 2:return"right";case 0:default:return"left"}},N_=["-apple-system","system-ui"],G_=function(n){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?n.filter(function(A){return N_.indexOf(A)===-1}):n},V_=function(n){et(A,n);function A(e,t){var i=n.call(this,e,t)||this;return i.canvas=t.canvas?t.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),i.options=t,i.canvas.width=Math.floor(t.width*t.scale),i.canvas.height=Math.floor(t.height*t.scale),i.canvas.style.width=t.width+"px",i.canvas.style.height=t.height+"px",i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-t.x,-t.y),i.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+t.width+"x"+t.height+" at "+t.x+","+t.y+") with scale "+t.scale),i}return A.prototype.render=function(e){return Ue(this,void 0,void 0,function(){var t,i;return ge(this,function(r){switch(r.label){case 0:return t=Da(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,e),[4,K_(t)];case 1:return i=r.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=le(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(i,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},A}(ju),K_=function(n){return new Promise(function(A,e){var t=new Image;t.onload=function(){A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(n))})},z_=function(){function n(A){var e=A.id,t=A.enabled;this.id=e,this.enabled=t,this.start=Date.now()}return n.prototype.debug=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,nr([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},n.prototype.getTime=function(){return Date.now()-this.start},n.prototype.info=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,nr([this.id,this.getTime()+"ms"],A))},n.prototype.warn=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,nr([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},n.prototype.error=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,nr([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},n.instances={},n}(),k_=function(){function n(A,e){var t;this.windowBounds=e,this.instanceName="#"+n.instanceCount++,this.logger=new z_({id:this.instanceName,enabled:A.logging}),this.cache=(t=A.cache)!==null&&t!==void 0?t:new u_(this,A)}return n.instanceCount=1,n}(),W_=function(n,A){return A===void 0&&(A={}),X_(n,A)};typeof window<"u"&&Wu.setContext(window);var X_=function(n,A){return Ue(void 0,void 0,void 0,function(){var e,t,i,r,s,a,o,l,c,u,h,p,g,f,d,m,B,v,x,C,M,y,M,w,U,Q,G,X,b,I,V,J,Y,K,Z,q,lA,D,k,eA;return ge(this,function(AA){switch(AA.label){case 0:if(!n||typeof n!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(e=n.ownerDocument,!e)throw new Error("Element is not attached to a Document");if(t=e.defaultView,!t)throw new Error("Document is not attached to a Window");return i={allowTaint:(w=A.allowTaint)!==null&&w!==void 0?w:!1,imageTimeout:(U=A.imageTimeout)!==null&&U!==void 0?U:15e3,proxy:A.proxy,useCORS:(Q=A.useCORS)!==null&&Q!==void 0?Q:!1},r=Ca({logging:(G=A.logging)!==null&&G!==void 0?G:!0,cache:A.cache},i),s={windowWidth:(X=A.windowWidth)!==null&&X!==void 0?X:t.innerWidth,windowHeight:(b=A.windowHeight)!==null&&b!==void 0?b:t.innerHeight,scrollX:(I=A.scrollX)!==null&&I!==void 0?I:t.pageXOffset,scrollY:(V=A.scrollY)!==null&&V!==void 0?V:t.pageYOffset},a=new xt(s.scrollX,s.scrollY,s.windowWidth,s.windowHeight),o=new k_(r,a),l=(J=A.foreignObjectRendering)!==null&&J!==void 0?J:!1,c={allowTaint:(Y=A.allowTaint)!==null&&Y!==void 0?Y:!1,onclone:A.onclone,ignoreElements:A.ignoreElements,inlineImages:l,copyStyles:l},o.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),u=new Bc(o,n,c),h=u.clonedReferenceElement,h?[4,u.toIFrame(e,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return p=AA.sent(),g=so(h)||JC(h)?UB(h.ownerDocument):Yr(o,h),f=g.width,d=g.height,m=g.left,B=g.top,v=J_(o,h,A.backgroundColor),x={canvas:A.canvas,backgroundColor:v,scale:(Z=(K=A.scale)!==null&&K!==void 0?K:t.devicePixelRatio)!==null&&Z!==void 0?Z:1,x:((q=A.x)!==null&&q!==void 0?q:0)+m,y:((lA=A.y)!==null&&lA!==void 0?lA:0)+B,width:(D=A.width)!==null&&D!==void 0?D:Math.ceil(f),height:(k=A.height)!==null&&k!==void 0?k:Math.ceil(d)},l?(o.logger.debug("Document cloned, using foreign object rendering"),M=new V_(o,x),[4,M.render(h)]):[3,3];case 2:return C=AA.sent(),[3,5];case 3:return o.logger.debug("Document cloned, element located at "+m+","+B+" with size "+f+"x"+d+" using computed rendering"),o.logger.debug("Starting DOM parsing"),y=Pu(o,h),v===y.styles.backgroundColor&&(y.styles.backgroundColor=Ct.TRANSPARENT),o.logger.debug("Starting renderer for element at "+x.x+","+x.y+" with size "+x.width+"x"+x.height),M=new D_(o,x),[4,M.render(y)];case 4:C=AA.sent(),AA.label=5;case 5:return(!((eA=A.removeContainer)!==null&&eA!==void 0)||eA)&&(Bc.destroy(p)||o.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),o.logger.debug("Finished rendering"),[2,C]}})})},J_=function(n,A,e){var t=A.ownerDocument,i=t.documentElement?Ci(n,getComputedStyle(t.documentElement).backgroundColor):Ct.TRANSPARENT,r=t.body?Ci(n,getComputedStyle(t.body).backgroundColor):Ct.TRANSPARENT,s=typeof e=="string"?Ci(n,e):e===null?Ct.TRANSPARENT:4294967295;return A===t.documentElement?Dt(i)?Dt(r)?s:r:i:s};function Y_(){const n=new $a(5,1.5,16,100),A=new Jn({color:16737095,wireframe:!0});return new Me(n,A)}function Z_(){const n=new qa(7),A=new Jn({color:2003199,wireframe:!0});return new Me(n,A)}function q_(){const n=new ja(6,32,32),A=new Jn({color:3329330,wireframe:!0});return new Me(n,A)}function j_(){const n=(i,r,s)=>{i*=Math.PI,r*=2*Math.PI,i=i*2;let a,o,l;i<Math.PI?(a=3*Math.cos(i)*(1+Math.sin(i))+2*(1-Math.cos(i)/2)*Math.cos(i)*Math.cos(r),l=-8*Math.sin(i)-2*(1-Math.cos(i)/2)*Math.sin(i)*Math.cos(r)):(a=3*Math.cos(i)*(1+Math.sin(i))+2*(1-Math.cos(i)/2)*Math.cos(r+Math.PI),l=-8*Math.sin(i)),o=-2*(1-Math.cos(i)/2)*Math.sin(r),s.set(a,o,l).multiplyScalar(1.5)},A=new wa(n,50,50),e=new Jn({color:16766720,wireframe:!0,side:rt});return new Me(A,e)}function $_(){const n=new Za(7),A=new Jn({color:15631086,wireframe:!0});return new Me(n,A)}let Ln,_t,On,Hn,$u=[];function Ax(){Ln=new gB,_t=new Ke(75,window.innerWidth/window.innerHeight,.1,1e3),On=new Jc({canvas:document.querySelector("#bg"),antialias:!0}),On.setPixelRatio(window.devicePixelRatio),On.setSize(window.innerWidth,window.innerHeight),_t.position.z=30;const n=new xB(16777215,.6);Ln.add(n);const A=new _B(16777215,.8);A.position.set(5,10,7.5),Ln.add(A);const e=new mB(document.createElement("canvas"));ex(e);const t=(o,l,c)=>{o*=Math.PI,l*=2*Math.PI;const u=(1+.5*l*Math.cos(o/2))*Math.cos(o),h=(1+.5*l*Math.cos(o/2))*Math.sin(o),p=.5*l*Math.sin(o/2);c.set(u,h,p).multiplyScalar(15)},i=new wa(t,250,50),r=new Jn({map:e,side:rt,metalness:.2,roughness:.8}),s=new Me(i,r);Ln.add(s);try{const o=[],c=new wa(t,250,1).attributes.position;if(!c||c.count===0)throw new Error("Failed to get path points.");for(let u=0;u<c.count;u++)o.push(new T().fromBufferAttribute(c,u));Hn=new wB(o),Hn.closed=!0}catch(o){console.error("CRITICAL: Could not create camera path.",o);return}tx(),window.addEventListener("resize",nx);const a=document.createElement("div");a.style.height="500vh",document.body.appendChild(a),Ah()}function ex(n){const A=document.getElementById("website-content");W_(A,{backgroundColor:"#f0f0f0"}).then(e=>{console.log("html2canvas render successful."),n.image=e,n.needsUpdate=!0,console.log("Three.js texture updated successfully.")}).catch(e=>{console.error("html2canvas failed:",e)})}function tx(){const n=[Y_,Z_,q_,j_,$_],A=25;for(let e=0;e<A;e++){const t=n[Math.floor(Math.random()*n.length)],i=t(),[r,s,a]=Array(3).fill().map(()=>pf.randFloatSpread(150));new T(r,s,a).length()<50?i.position.set(r,s,a).normalize().multiplyScalar(50+Math.random()*50):i.position.set(r,s,a),i.rotation.set(Math.random()*2*Math.PI,Math.random()*2*Math.PI,Math.random()*2*Math.PI),i.userData.rotationSpeed={x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01},$u.push(i),Ln.add(i)}}function nx(){!_t||!On||(_t.aspect=window.innerWidth/window.innerHeight,_t.updateProjectionMatrix(),On.setSize(window.innerWidth,window.innerHeight))}function ix(){if(!Hn)return;const n=document.documentElement.scrollHeight-window.innerHeight,A=n>0?window.scrollY/n:0,e=.001,t=Hn.getPointAt(A),i=Hn.getPointAt((A+e)%1);if(!t||!i)return;_t.position.copy(t);const r=Hn.getTangentAt(A).normalize(),s=new T(0,0,1),a=new T().crossVectors(r,s).normalize();_t.position.addScaledVector(a,5),_t.lookAt(i)}function Ah(){requestAnimationFrame(Ah),$u.forEach(n=>{n.rotation.x+=n.userData.rotationSpeed.x,n.rotation.y+=n.userData.rotationSpeed.y}),ix(),On.render(Ln,_t)}Ax();
