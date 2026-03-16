(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Cl="182",Fd=0,_c=1,Ud=2,jr=1,Nd=2,js=3,Cn=0,Ze=1,Un=2,ei=0,xs=1,Wt=2,vc=3,xc=4,Od=5,ki=100,Bd=101,zd=102,kd=103,Vd=104,Gd=200,Hd=201,Wd=202,Xd=203,vo=204,xo=205,qd=206,Yd=207,jd=208,$d=209,Kd=210,Zd=211,Jd=212,Qd=213,tf=214,Mo=0,yo=1,So=2,Ts=3,bo=4,To=5,Eo=6,wo=7,qh=0,ef=1,nf=2,kn=0,Yh=1,jh=2,$h=3,Kh=4,Zh=5,Jh=6,Qh=7,tu=300,Ki=301,Es=302,Ao=303,Ro=304,ma=306,Co=1e3,ti=1001,Po=1002,Oe=1003,sf=1004,Sr=1005,Ge=1006,wa=1007,Hi=1008,hn=1009,eu=1010,nu=1011,nr=1012,Pl=1013,Gn=1014,On=1015,ii=1016,Dl=1017,Ll=1018,ir=1020,iu=35902,su=35899,ru=1021,au=1022,Rn=1023,si=1026,Wi=1027,ou=1028,Il=1029,ws=1030,Fl=1031,Ul=1033,$r=33776,Kr=33777,Zr=33778,Jr=33779,Do=35840,Lo=35841,Io=35842,Fo=35843,Uo=36196,No=37492,Oo=37496,Bo=37488,zo=37489,ko=37490,Vo=37491,Go=37808,Ho=37809,Wo=37810,Xo=37811,qo=37812,Yo=37813,jo=37814,$o=37815,Ko=37816,Zo=37817,Jo=37818,Qo=37819,tl=37820,el=37821,nl=36492,il=36494,sl=36495,rl=36283,al=36284,ol=36285,ll=36286,rf=3200,lu=0,af=1,fi="",Mn="srgb",As="srgb-linear",ia="linear",ie="srgb",ts=7680,Mc=519,of=512,lf=513,cf=514,Nl=515,hf=516,uf=517,Ol=518,df=519,yc=35044,Sc="300 es",Bn=2e3,sa=2001;function cu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function sr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ff(){const r=sr("canvas");return r.style.display="block",r}const bc={};function Tc(...r){const t="THREE."+r.shift();console.log(t,...r)}function Rt(...r){const t="THREE."+r.shift();console.warn(t,...r)}function jt(...r){const t="THREE."+r.shift();console.error(t,...r)}function rr(...r){const t=r.join(" ");t in bc||(bc[t]=!0,Rt(...r))}function pf(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class Us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Aa=Math.PI/180,cl=180/Math.PI;function pr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[r&255]+ze[r>>8&255]+ze[r>>16&255]+ze[r>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Xt(r,t,e){return Math.max(t,Math.min(e,r))}function mf(r,t){return(r%t+t)%t}function Ra(r,t,e){return(1-e)*r+e*t}function zs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ke(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ns{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=l*d+c*f+h*_+u*g;m<0&&(d=-d,f=-f,_=-_,g=-g,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),S=Math.sin(M);p=Math.sin(p*M)/S,o=Math.sin(o*M)/S,l=l*p+d*o,c=c*p+f*o,h=h*p+_*o,u=u*p+g*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+_*o,u=u*p+g*o;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return t[e]=o*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-o*f,t[e+2]=c*_+h*f+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ca.copy(this).projectOnVector(t),this.sub(Ca)}reflect(t){return this.sub(Ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new P,Ec=new Ns;class Ot{constructor(t,e,n,i,s,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],M=i[1],S=i[4],y=i[7],b=i[2],E=i[5],A=i[8];return s[0]=a*g+o*M+l*b,s[3]=a*m+o*S+l*E,s[6]=a*p+o*y+l*A,s[1]=c*g+h*M+u*b,s[4]=c*m+h*S+u*E,s[7]=c*p+h*y+u*A,s[2]=d*g+f*M+_*b,s[5]=d*m+f*S+_*E,s[8]=d*p+f*y+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Pa.makeScale(t,e)),this}rotate(t){return this.premultiply(Pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pa=new Ot,wc=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gf(){const r={enabled:!0,workingColorSpace:As,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ie&&(i.r=ni(i.r),i.g=ni(i.g),i.b=ni(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(i.r=Ms(i.r),i.g=Ms(i.g),i.b=Ms(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?ia:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[As]:{primaries:t,whitePoint:n,transfer:ia,toXYZ:wc,fromXYZ:Ac,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:wc,fromXYZ:Ac,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),r}const Zt=gf();function ni(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ms(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let es;class _f{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{es===void 0&&(es=sr("canvas")),es.width=t.width,es.height=t.height;const i=es.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=es}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ni(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vf=0;class Bl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=pr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Da(i[a].image)):s.push(Da(i[a]))}else s=Da(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Da(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_f.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}let xf=0;const La=new P;class He extends Us{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=ti,i=ti,s=Ge,a=Hi,o=Rn,l=hn,c=He.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=pr(),this.name="",this.source=new Bl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(La).x}get height(){return this.source.getSize(La).y}get depth(){return this.source.getSize(La).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Co:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case Po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Co:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case Po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=tu;He.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,i=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,y=(f+1)/2,b=(p+1)/2,E=(h+d)/4,A=(u+g)/4,C=(_+m)/4;return S>y&&S>b?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=E/n,s=A/n):y>b?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=C/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=A/s,i=C/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(u-g)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mf extends Us{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new He(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Bl(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends Mf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class hu extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yf extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mr{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(s,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(t.matrixWorld),this.union(br)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),Tr.subVectors(this.max,ks),ns.subVectors(t.a,ks),is.subVectors(t.b,ks),ss.subVectors(t.c,ks),oi.subVectors(is,ns),li.subVectors(ss,is),Ai.subVectors(ns,ss);let e=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Ai.z,Ai.y,oi.z,0,-oi.x,li.z,0,-li.x,Ai.z,0,-Ai.x,-oi.y,oi.x,0,-li.y,li.x,0,-Ai.y,Ai.x,0];return!Ia(e,ns,is,ss,Tr)||(e=[1,0,0,0,1,0,0,0,1],!Ia(e,ns,is,ss,Tr))?!1:(Er.crossVectors(oi,li),e=[Er.x,Er.y,Er.z],Ia(e,ns,is,ss,Tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const qn=[new P,new P,new P,new P,new P,new P,new P,new P],Tn=new P,br=new mr,ns=new P,is=new P,ss=new P,oi=new P,li=new P,Ai=new P,ks=new P,Tr=new P,Er=new P,Ri=new P;function Ia(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ri.fromArray(r,s);const o=i.x*Math.abs(Ri.x)+i.y*Math.abs(Ri.y)+i.z*Math.abs(Ri.z),l=t.dot(Ri),c=e.dot(Ri),h=n.dot(Ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Sf=new mr,Vs=new P,Fa=new P;class gr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);const e=Vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(Fa)),this.expandByPoint(Vs.copy(t.center).sub(Fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Yn=new P,Ua=new P,wr=new P,ci=new P,Na=new P,Ar=new P,Oa=new P;class ga{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ua.copy(t).add(e).multiplyScalar(.5),wr.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Ua);const s=t.distanceTo(e)*.5,a=-this.direction.dot(wr),o=ci.dot(this.direction),l=-ci.dot(wr),c=ci.lengthSq(),h=Math.abs(1-a*a);let u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=s*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ua).addScaledVector(wr,d),f}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,i,s){Na.subVectors(e,t),Ar.subVectors(n,t),Oa.crossVectors(Na,Ar);let a=this.direction.dot(Oa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,t);const l=o*this.direction.dot(Ar.crossVectors(ci,Ar));if(l<0)return null;const c=o*this.direction.dot(Na.cross(ci));if(c<0||l+c>a)return null;const h=-o*ci.dot(Oa);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,i,s,a,o,l,c,h,u,d,f,_,g,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,d,f,_,g,m)}set(t,e,n,i,s,a,o,l,c,h,u,d,f,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/rs.setFromMatrixColumn(t,0).length(),s=1/rs.setFromMatrixColumn(t,1).length(),a=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bf,t,Tf)}lookAt(t,e,n){const i=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),hi.crossVectors(n,an),hi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),hi.crossVectors(n,an)),hi.normalize(),Rr.crossVectors(an,hi),i[0]=hi.x,i[4]=Rr.x,i[8]=an.x,i[1]=hi.y,i[5]=Rr.y,i[9]=an.y,i[2]=hi.z,i[6]=Rr.z,i[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],S=n[7],y=n[11],b=n[15],E=i[0],A=i[4],C=i[8],v=i[12],T=i[1],D=i[5],N=i[9],O=i[13],q=i[2],X=i[6],V=i[10],B=i[14],Z=i[3],at=i[7],k=i[11],Y=i[15];return s[0]=a*E+o*T+l*q+c*Z,s[4]=a*A+o*D+l*X+c*at,s[8]=a*C+o*N+l*V+c*k,s[12]=a*v+o*O+l*B+c*Y,s[1]=h*E+u*T+d*q+f*Z,s[5]=h*A+u*D+d*X+f*at,s[9]=h*C+u*N+d*V+f*k,s[13]=h*v+u*O+d*B+f*Y,s[2]=_*E+g*T+m*q+p*Z,s[6]=_*A+g*D+m*X+p*at,s[10]=_*C+g*N+m*V+p*k,s[14]=_*v+g*O+m*B+p*Y,s[3]=M*E+S*T+y*q+b*Z,s[7]=M*A+S*D+y*X+b*at,s[11]=M*C+S*N+y*V+b*k,s[15]=M*v+S*O+y*B+b*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15],M=l*f-c*d,S=o*f-c*u,y=o*d-l*u,b=a*f-c*h,E=a*d-l*h,A=a*u-o*h;return e*(g*M-m*S+p*y)-n*(_*M-m*b+p*E)+i*(_*S-g*b+p*A)-s*(_*y-g*E+m*A)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],M=u*m*c-g*d*c+g*l*f-o*m*f-u*l*p+o*d*p,S=_*d*c-h*m*c-_*l*f+a*m*f+h*l*p-a*d*p,y=h*g*c-_*u*c+_*o*f-a*g*f-h*o*p+a*u*p,b=_*u*l-h*g*l-_*o*d+a*g*d+h*o*m-a*u*m,E=e*M+n*S+i*y+s*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=M*A,t[1]=(g*d*s-u*m*s-g*i*f+n*m*f+u*i*p-n*d*p)*A,t[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*A,t[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*A,t[4]=S*A,t[5]=(h*m*s-_*d*s+_*i*f-e*m*f-h*i*p+e*d*p)*A,t[6]=(_*l*s-a*m*s-_*i*c+e*m*c+a*i*p-e*l*p)*A,t[7]=(a*d*s-h*l*s+h*i*c-e*d*c-a*i*f+e*l*f)*A,t[8]=y*A,t[9]=(_*u*s-h*g*s-_*n*f+e*g*f+h*n*p-e*u*p)*A,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*p+e*o*p)*A,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*f-e*o*f)*A,t[12]=b*A,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*m+e*u*m)*A,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*A,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,_=s*u,g=a*h,m=a*u,p=o*u,M=l*c,S=l*h,y=l*u,b=n.x,E=n.y,A=n.z;return i[0]=(1-(g+p))*b,i[1]=(f+y)*b,i[2]=(_-S)*b,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(d+p))*E,i[6]=(m+M)*E,i[7]=0,i[8]=(_+S)*A,i[9]=(m-M)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;if(t.x=i[12],t.y=i[13],t.z=i[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=rs.set(i[0],i[1],i[2]).length();const a=rs.set(i[4],i[5],i[6]).length(),o=rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),En.copy(this);const c=1/s,h=1/a,u=1/o;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Bn,l=!1){const c=this.elements,h=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Bn)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===sa)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Bn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Bn)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===sa)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const rs=new P,En=new re,bf=new P(0,0,0),Tf=new P(1,1,1),hi=new P,Rr=new P,an=new P,Rc=new re,Cc=new Ns;class Hn{constructor(t=0,e=0,n=0,i=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class zl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ef=0;const Pc=new P,as=new Ns,jn=new re,Cr=new P,Gs=new P,wf=new P,Af=new Ns,Dc=new P(1,0,0),Lc=new P(0,1,0),Ic=new P(0,0,1),Fc={type:"added"},Rf={type:"removed"},os={type:"childadded",child:null},Ba={type:"childremoved",child:null};class Ee extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new P,e=new Hn,n=new Ns,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new Ot}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Dc,t)}rotateY(t){return this.rotateOnAxis(Lc,t)}rotateZ(t){return this.rotateOnAxis(Ic,t)}translateOnAxis(t,e){return Pc.copy(t).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dc,t)}translateY(t){return this.translateOnAxis(Lc,t)}translateZ(t){return this.translateOnAxis(Ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cr.copy(t):Cr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Gs,Cr,this.up):jn.lookAt(Cr,Gs,this.up),this.quaternion.setFromRotationMatrix(jn),i&&(jn.extractRotation(i.matrixWorld),as.setFromRotationMatrix(jn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fc),os.child=t,this.dispatchEvent(os),os.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rf),Ba.child=t,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fc),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Af,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ee.DEFAULT_UP=new P(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new P,$n=new P,za=new P,Kn=new P,ls=new P,cs=new P,Uc=new P,ka=new P,Va=new P,Ga=new P,Ha=new ye,Wa=new ye,Xa=new ye;class An{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),wn.subVectors(t,e),i.cross(wn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){wn.subVectors(i,e),$n.subVectors(n,e),za.subVectors(t,e);const a=wn.dot(wn),o=wn.dot($n),l=wn.dot(za),c=$n.dot($n),h=$n.dot(za),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kn.x),l.addScaledVector(a,Kn.y),l.addScaledVector(o,Kn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return Ha.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),Ha.fromBufferAttribute(t,e),Wa.fromBufferAttribute(t,n),Xa.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Ha,s.x),a.addScaledVector(Wa,s.y),a.addScaledVector(Xa,s.z),a}static isFrontFacing(t,e,n,i){return wn.subVectors(n,e),$n.subVectors(t,e),wn.cross($n).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),wn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return An.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;ls.subVectors(i,n),cs.subVectors(s,n),ka.subVectors(t,n);const l=ls.dot(ka),c=cs.dot(ka);if(l<=0&&c<=0)return e.copy(n);Va.subVectors(t,i);const h=ls.dot(Va),u=cs.dot(Va);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ls,a);Ga.subVectors(t,s);const f=ls.dot(Ga),_=cs.dot(Ga);if(_>=0&&f<=_)return e.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(cs,o);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Uc.subVectors(s,i),o=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(Uc,o);const p=1/(m+g+d);return a=g*p,o=d*p,e.copy(n).addScaledVector(ls,a).addScaledVector(cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function qa(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=mf(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=qa(a,s,t+1/3),this.g=qa(a,s,t),this.b=qa(a,s,t-1/3)}return Zt.colorSpaceToWorking(this,i),this}setStyle(t,e=Mn){function n(s){s!==void 0&&parseFloat(s)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){const n=uu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return Zt.workingToColorSpace(ke.copy(this),t),Math.round(Xt(ke.r*255,0,255))*65536+Math.round(Xt(ke.g*255,0,255))*256+Math.round(Xt(ke.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(ke.copy(this),e);const n=ke.r,i=ke.g,s=ke.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Mn){Zt.workingToColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,i=ke.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(Pr);const n=Ra(ui.h,Pr.h,e),i=Ra(ui.s,Pr.s,e),s=Ra(ui.l,Pr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new $t;$t.NAMES=uu;let Cf=0;class Zi extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=pr(),this.name="",this.type="Material",this.blending=xs,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=xo,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vo&&(n.blendSrc=this.blendSrc),this.blendDst!==xo&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Vi extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new P,Dr=new Gt;let Pf=0;class It{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yc,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yc&&(t.usage=this.usage),t}}class du extends It{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fu extends It{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Pe extends It{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Df=0;const vn=new re,Ya=new Ee,hs=new P,on=new mr,Hs=new mr,Fe=new P;class Ut extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cu(t)?fu:du)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return Ya.lookAt(t),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pe(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(on.min,Hs.min),on.expandByPoint(Fe),Fe.addVectors(on.max,Hs.max),on.expandByPoint(Fe)):(on.expandByPoint(Hs.min),on.expandByPoint(Hs.max))}on.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Fe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Fe.fromBufferAttribute(o,c),l&&(hs.fromBufferAttribute(t,c),Fe.add(hs)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new P,l[C]=new P;const c=new P,h=new P,u=new P,d=new Gt,f=new Gt,_=new Gt,g=new P,m=new P;function p(C,v,T){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,T),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,v),_.fromBufferAttribute(s,T),h.sub(c),u.sub(c),f.sub(d),_.sub(d);const D=1/(f.x*_.y-_.x*f.y);isFinite(D)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(D),o[C].add(g),o[v].add(g),o[T].add(g),l[C].add(m),l[v].add(m),l[T].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,v=M.length;C<v;++C){const T=M[C],D=T.start,N=T.count;for(let O=D,q=D+N;O<q;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new P,y=new P,b=new P,E=new P;function A(C){b.fromBufferAttribute(i,C),E.copy(b);const v=o[C];S.copy(v),S.sub(b.multiplyScalar(b.dot(v))).normalize(),y.crossVectors(E,v);const D=y.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,D)}for(let C=0,v=M.length;C<v;++C){const T=M[C],D=T.start,N=T.count;for(let O=D,q=D+N;O<q;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new It(d,h,u)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ut,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nc=new re,Ci=new ga,Lr=new gr,Oc=new P,Ir=new P,Fr=new P,Ur=new P,ja=new P,Nr=new P,Bc=new P,Or=new P;class ce extends Ee{constructor(t=new Ut,e=new Vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Nr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(ja.fromBufferAttribute(u,t),a?Nr.addScaledVector(ja,h):Nr.addScaledVector(ja.sub(e),h))}e.add(Nr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(s),Ci.copy(t.ray).recast(t.near),!(Lr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Lr,Oc)===null||Ci.origin.distanceToSquared(Oc)>(t.far-t.near)**2))&&(Nc.copy(s).invert(),Ci.copy(t.ray).applyMatrix4(Nc),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,b=S;y<b;y+=3){const E=o.getX(y),A=o.getX(y+1),C=o.getX(y+2);i=Br(this,p,t,n,c,h,u,E,A,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const M=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);i=Br(this,a,t,n,c,h,u,M,S,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,b=S;y<b;y+=3){const E=y,A=y+1,C=y+2;i=Br(this,p,t,n,c,h,u,E,A,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const M=m,S=m+1,y=m+2;i=Br(this,a,t,n,c,h,u,M,S,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Lf(r,t,e,n,i,s,a,o){let l;if(t.side===Ze?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Cn,o),l===null)return null;Or.copy(o),Or.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Or);return c<e.near||c>e.far?null:{distance:c,point:Or.clone(),object:r}}function Br(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Ir),r.getVertexPosition(l,Fr),r.getVertexPosition(c,Ur);const h=Lf(r,t,e,n,Ir,Fr,Ur,Bc);if(h){const u=new P;An.getBarycoord(Bc,Ir,Fr,Ur,u),i&&(h.uv=An.getInterpolatedAttribute(i,o,l,c,u,new Gt)),s&&(h.uv1=An.getInterpolatedAttribute(s,o,l,c,u,new Gt)),a&&(h.normal=An.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};An.getNormal(Ir,Fr,Ur,d.normal),h.face=d,h.barycoord=u}return h}class _r extends Ut{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(u,2));function _(g,m,p,M,S,y,b,E,A,C,v){const T=y/A,D=b/C,N=y/2,O=b/2,q=E/2,X=A+1,V=C+1;let B=0,Z=0;const at=new P;for(let k=0;k<V;k++){const Y=k*D-O;for(let nt=0;nt<X;nt++){const st=nt*T-N;at[g]=st*M,at[m]=Y*S,at[p]=q,c.push(at.x,at.y,at.z),at[g]=0,at[m]=0,at[p]=E>0?1:-1,h.push(at.x,at.y,at.z),u.push(nt/A),u.push(1-k/C),B+=1}}for(let k=0;k<C;k++)for(let Y=0;Y<A;Y++){const nt=d+Y+X*k,st=d+Y+X*(k+1),vt=d+(Y+1)+X*(k+1),Mt=d+(Y+1)+X*k;l.push(nt,st,Mt),l.push(st,vt,Mt),Z+=6}o.addGroup(f,Z,v),f+=Z,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function qe(r){const t={};for(let e=0;e<r.length;e++){const n=Rs(r[e]);for(const i in n)t[i]=n[i]}return t}function If(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function pu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Ff={clone:Rs,merge:qe};var Uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uf,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=If(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}let mu=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const di=new P,zc=new Gt,kc=new Gt;class cn extends mu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,zc,kc),e.subVectors(kc,zc)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Aa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const us=-90,ds=1;class Of extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new cn(us,ds,t,e);i.layers=this.layers,this.add(i);const s=new cn(us,ds,t,e);s.layers=this.layers,this.add(s);const a=new cn(us,ds,t,e);a.layers=this.layers,this.add(a);const o=new cn(us,ds,t,e);o.layers=this.layers,this.add(o);const l=new cn(us,ds,t,e);l.layers=this.layers,this.add(l);const c=new cn(us,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class gu extends He{constructor(t=[],e=Ki,n,i,s,a,o,l,c,h){super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _u extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new gu(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _r(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:ei});s.uniforms.tEquirect.value=e;const a=new ce(i,s),o=e.minFilter;return e.minFilter===Hi&&(e.minFilter=Ge),new Of(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}class pe extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bf={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class zf extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class kf extends He{constructor(t=null,e=1,n=1,i,s,a,o,l,c=Oe,h=Oe,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ka=new P,Vf=new P,Gf=new Ot;class Bi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ka.subVectors(n,e).cross(Vf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ka),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gf.getNormalMatrix(t),i=this.coplanarPoint(Ka).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new gr,Hf=new Gt(.5,.5),zr=new P;class kl{constructor(t=new Bi,e=new Bi,n=new Bi,i=new Bi,s=new Bi,a=new Bi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn,n=!1){const i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],_=s[8],g=s[9],m=s[10],p=s[11],M=s[12],S=s[13],y=s[14],b=s[15];if(i[0].setComponents(c-a,f-h,p-_,b-M).normalize(),i[1].setComponents(c+a,f+h,p+_,b+M).normalize(),i[2].setComponents(c+o,f+u,p+g,b+S).normalize(),i[3].setComponents(c-o,f-u,p-g,b-S).normalize(),n)i[4].setComponents(l,d,m,y).normalize(),i[5].setComponents(c-l,f-d,p-m,b-y).normalize();else if(i[4].setComponents(c-l,f-d,p-m,b-y).normalize(),e===Bn)i[5].setComponents(c+l,f+d,p+m,b+y).normalize();else if(e===sa)i[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);const e=Hf.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(zr.x=i.normal.x>0?t.max.x:t.min.x,zr.y=i.normal.y>0?t.max.y:t.min.y,zr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yn extends Zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ra=new P,aa=new P,Vc=new re,Ws=new ga,kr=new gr,Za=new P,Gc=new P;class De extends Ee{constructor(t=new Ut,e=new yn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)ra.fromBufferAttribute(e,i-1),aa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ra.distanceTo(aa);t.setAttribute("lineDistance",new Pe(n,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=s,t.ray.intersectsSphere(kr)===!1)return;Vc.copy(i).invert(),Ws.copy(t.ray).applyMatrix4(Vc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){const p=h.getX(g),M=h.getX(g+1),S=Vr(this,t,Ws,l,p,M,g);S&&e.push(S)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(f),p=Vr(this,t,Ws,l,g,m,_-1);p&&e.push(p)}}else{const f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){const p=Vr(this,t,Ws,l,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){const g=Vr(this,t,Ws,l,_-1,f,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Vr(r,t,e,n,i,s,a){const o=r.geometry.attributes.position;if(ra.fromBufferAttribute(o,i),aa.fromBufferAttribute(o,s),e.distanceSqToSegment(ra,aa,Za,Gc)>n)return;Za.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Za);if(!(c<t.near||c>t.far))return{distance:c,point:Gc.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Hc=new P,Wc=new P;class Wf extends De{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Hc.fromBufferAttribute(e,i),Wc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hc.distanceTo(Wc);t.setAttribute("lineDistance",new Pe(n,1))}else Rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xf extends Zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xc=new re,hl=new ga,Gr=new gr,Hr=new P;class pi extends Ee{constructor(t=new Ut,e=new Xf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(i),Gr.radius+=s,t.ray.intersectsSphere(Gr)===!1)return;Xc.copy(i).invert(),hl.copy(t.ray).applyMatrix4(Xc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,g=f;_<g;_++){const m=c.getX(_);Hr.fromBufferAttribute(u,m),qc(Hr,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,g=f;_<g;_++)Hr.fromBufferAttribute(u,_),qc(Hr,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function qc(r,t,e,n,i,s,a){const o=hl.distanceSqToPoint(r);if(o<e){const l=new P;hl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ar extends He{constructor(t,e,n=Gn,i,s,a,o=Oe,l=Oe,c,h=si,u=1){if(h!==si&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class qf extends ar{constructor(t,e=Gn,n=Ki,i,s,a=Oe,o=Oe,l,c=si){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class vu extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Vl extends Ut{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Pe(s,3)),this.setAttribute("normal",new Pe(s.slice(),3)),this.setAttribute("uv",new Pe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const S=new P,y=new P,b=new P;for(let E=0;E<e.length;E+=3)f(e[E+0],S),f(e[E+1],y),f(e[E+2],b),l(S,y,b,M)}function l(M,S,y,b){const E=b+1,A=[];for(let C=0;C<=E;C++){A[C]=[];const v=M.clone().lerp(y,C/E),T=S.clone().lerp(y,C/E),D=E-C;for(let N=0;N<=D;N++)N===0&&C===E?A[C][N]=v:A[C][N]=v.clone().lerp(T,N/D)}for(let C=0;C<E;C++)for(let v=0;v<2*(E-C)-1;v++){const T=Math.floor(v/2);v%2===0?(d(A[C][T+1]),d(A[C+1][T]),d(A[C][T])):(d(A[C][T+1]),d(A[C+1][T+1]),d(A[C+1][T]))}}function c(M){const S=new P;for(let y=0;y<s.length;y+=3)S.x=s[y+0],S.y=s[y+1],S.z=s[y+2],S.normalize().multiplyScalar(M),s[y+0]=S.x,s[y+1]=S.y,s[y+2]=S.z}function h(){const M=new P;for(let S=0;S<s.length;S+=3){M.x=s[S+0],M.y=s[S+1],M.z=s[S+2];const y=m(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;a.push(y,1-b)}_(),u()}function u(){for(let M=0;M<a.length;M+=6){const S=a[M+0],y=a[M+2],b=a[M+4],E=Math.max(S,y,b),A=Math.min(S,y,b);E>.9&&A<.1&&(S<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,S){const y=M*3;S.x=t[y+0],S.y=t[y+1],S.z=t[y+2]}function _(){const M=new P,S=new P,y=new P,b=new P,E=new Gt,A=new Gt,C=new Gt;for(let v=0,T=0;v<s.length;v+=9,T+=6){M.set(s[v+0],s[v+1],s[v+2]),S.set(s[v+3],s[v+4],s[v+5]),y.set(s[v+6],s[v+7],s[v+8]),E.set(a[T+0],a[T+1]),A.set(a[T+2],a[T+3]),C.set(a[T+4],a[T+5]),b.copy(M).add(S).add(y).divideScalar(3);const D=m(b);g(E,T+0,M,D),g(A,T+2,S,D),g(C,T+4,y,D)}}function g(M,S,y,b){b<0&&M.x===1&&(a[S]=M.x-1),y.x===0&&y.z===0&&(a[S]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vl(t.vertices,t.indices,t.radius,t.detail)}}class Yf{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Rt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new Gt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,i=[],s=[],a=[],o=new P,l=new re;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Xt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Xt(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function jf(r,t){const e=1-r;return e*e*t}function $f(r,t){return 2*(1-r)*r*t}function Kf(r,t){return r*r*t}function Ja(r,t,e,n){return jf(r,t)+$f(r,e)+Kf(r,n)}class Zf extends Yf{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Ja(t,i.x,s.x,a.x),Ja(t,i.y,s.y,a.y),Ja(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class oa extends Vl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oa(t.radius,t.detail)}}class _a extends Ut{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const M=p*d-a;for(let S=0;S<c;S++){const y=S*u-s;_.push(y,-M,0),g.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const S=M+c*p,y=M+c*(p+1),b=M+1+c*(p+1),E=M+1+c*p;f.push(S,y,E),f.push(y,b,E)}this.setIndex(f),this.setAttribute("position",new Pe(_,3)),this.setAttribute("normal",new Pe(g,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _a(t.width,t.height,t.widthSegments,t.heightSegments)}}class Gl extends Ut{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new P,_=new Gt;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<i;g++){const m=g*(n+1);for(let p=0;p<n;p++){const M=p+m,S=M,y=M+n+1,b=M+n+2,E=M+1;o.push(S,y,E),o.push(y,b,E)}}this.setIndex(o),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ne extends Ut{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,d=new P,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const M=[],S=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let b=0;b<=e;b++){const E=b/e;u.x=-t*Math.cos(i+E*s)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(i+E*s)*Math.sin(a+S*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(E+y,1-S),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const S=h[p][M+1],y=h[p][M],b=h[p+1][M],E=h[p+1][M+1];(p!==0||a>0)&&f.push(S,y,E),(p!==n-1||l<Math.PI)&&f.push(y,b,E)}this.setIndex(f),this.setAttribute("position",new Pe(_,3)),this.setAttribute("normal",new Pe(g,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jf extends Vt{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xu extends Zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lu,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qf extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tp extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Js={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class ep{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const np=new ep;class vr{constructor(t){this.manager=t!==void 0?t:np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}vr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zn={};class ip extends Error{constructor(t,e){super(t),this.response=e}}class sp extends vr{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Js.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Zn[t]!==void 0){Zn[t].push({onLoad:e,onProgress:n,onError:i});return}Zn[t]=[],Zn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Rt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Zn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const m=new ReadableStream({start(p){M();function M(){u.read().then(({done:S,value:y})=>{if(S)p.close();else{g+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let E=0,A=h.length;E<A;E++){const C=h[E];C.onProgress&&C.onProgress(b)}p.enqueue(y),M()}},S=>{p.error(S)})}}});return new Response(m)}else throw new ip(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Js.add(`file:${t}`,c);const h=Zn[t];delete Zn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Zn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Zn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const fs=new WeakMap;class rp extends vr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Js.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let u=fs.get(a);u===void 0&&(u=[],fs.set(a,u)),u.push({onLoad:e,onError:i})}return a}const o=sr("img");function l(){h(),e&&e(this);const u=fs.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}fs.delete(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),Js.remove(`image:${t}`);const d=fs.get(this)||[];for(let f=0;f<d.length;f++){const _=d[f];_.onError&&_.onError(u)}fs.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Js.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class ap extends vr{constructor(t){super(t)}load(t,e,n,i){const s=new He,a=new rp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Hl extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Qa=new re,Yc=new P,jc=new P;class Mu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kl,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yc),jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jc),e.updateMatrixWorld(),Qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class op extends Mu{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}}class to extends Hl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new op}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Wl extends mu{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class lp extends Mu{constructor(){super(new Wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $c extends Hl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new lp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class cp extends Hl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}let Wr;class yu{static getContext(){return Wr===void 0&&(Wr=new(window.AudioContext||window.webkitAudioContext)),Wr}static setContext(t){Wr=t}}class hp extends vr{constructor(t){super(t)}load(t,e,n,i){const s=this,a=new sp(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{const c=l.slice(0);yu.getContext().decodeAudioData(c,function(u){e(u)}).catch(o)}catch(c){o(c)}},n,i);function o(l){i?i(l):jt(l),s.manager.itemError(t)}}}class up extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Su{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Di=new P,eo=new Ns,dp=new P,Li=new P,Ii=new P;class fp extends Ee{constructor(){super(),this.type="AudioListener",this.context=yu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Su}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Di,eo,dp),Li.set(0,0,-1).applyQuaternion(eo),Ii.set(0,1,0).applyQuaternion(eo),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Di.x,n),e.positionY.linearRampToValueAtTime(Di.y,n),e.positionZ.linearRampToValueAtTime(Di.z,n),e.forwardX.linearRampToValueAtTime(Li.x,n),e.forwardY.linearRampToValueAtTime(Li.y,n),e.forwardZ.linearRampToValueAtTime(Li.z,n),e.upX.linearRampToValueAtTime(Ii.x,n),e.upY.linearRampToValueAtTime(Ii.y,n),e.upZ.linearRampToValueAtTime(Ii.z,n)}else e.setPosition(Di.x,Di.y,Di.z),e.setOrientation(Li.x,Li.y,Li.z,Ii.x,Ii.y,Ii.z)}}class Kc extends Ee{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Rt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Rt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Rt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Rt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Rt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Rt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Rt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Rt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const Zc=new re;let pp=class{constructor(t,e,n=0,i=1/0){this.ray=new ga(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Zc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zc),this}intersectObject(t,e=!0,n=[]){return ul(t,this,n,e),n.sort(Jc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)ul(t[i],this,n,e);return n.sort(Jc),n}};function Jc(r,t){return r.distance-t.distance}function ul(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)ul(s[a],t,e,!0)}}function Qc(r,t,e,n){const i=mp(n);switch(e){case ru:return r*t;case ou:return r*t/i.components*i.byteLength;case Il:return r*t/i.components*i.byteLength;case ws:return r*t*2/i.components*i.byteLength;case Fl:return r*t*2/i.components*i.byteLength;case au:return r*t*3/i.components*i.byteLength;case Rn:return r*t*4/i.components*i.byteLength;case Ul:return r*t*4/i.components*i.byteLength;case $r:case Kr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Zr:case Jr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Lo:case Fo:return Math.max(r,16)*Math.max(t,8)/4;case Do:case Io:return Math.max(r,8)*Math.max(t,8)/2;case Uo:case No:case Bo:case zo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Oo:case ko:case Vo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case qo:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case jo:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case $o:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case tl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case el:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case nl:case il:case sl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case rl:case al:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ol:case ll:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mp(r){switch(r){case hn:case eu:return{byteLength:1,components:1};case nr:case nu:case ii:return{byteLength:2,components:1};case Dl:case Ll:return{byteLength:2,components:4};case Gn:case Pl:case On:return{byteLength:4,components:1};case iu:case su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);function bu(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function gp(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const g=u[f];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var _p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vp=`#ifdef USE_ALPHAHASH
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
#endif`,xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bp=`#ifdef USE_AOMAP
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
#endif`,Tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ep=`#ifdef USE_BATCHING
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
#endif`,wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pp=`#ifdef USE_IRIDESCENCE
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
#endif`,Dp=`#ifdef USE_BUMPMAP
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
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kp=`#define PI 3.141592653589793
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
} // validated`,Vp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gp=`vec3 transformedNormal = objectNormal;
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
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$p=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sm=`#ifdef USE_GRADIENTMAP
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
}`,rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lm=`uniform bool receiveShadow;
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
#endif`,cm=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,mm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gm=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wm=`#if defined( USE_POINTS_UV )
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
#endif`,Am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`#ifdef USE_MORPHTARGETS
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
#endif`,Im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zm=`#ifdef USE_NORMALMAP
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
#endif`,km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eg=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,sg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hg=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ug=`#ifdef USE_TRANSMISSION
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_g=`uniform sampler2D t2D;
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`#include <common>
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
}`,bg=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tg=`#define DISTANCE
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
}`,Eg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`uniform float scale;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Pg=`#include <common>
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Lg=`#define LAMBERT
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
}`,Ig=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Fg=`#define MATCAP
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
}`,Ug=`#define MATCAP
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
}`,Ng=`#define NORMAL
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
}`,Og=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bg=`#define PHONG
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
}`,zg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,kg=`#define STANDARD
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
}`,Vg=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Gg=`#define TOON
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
}`,Hg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Wg=`uniform float size;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#include <common>
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
}`,Yg=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,jg=`uniform float rotation;
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
}`,$g=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:_p,alphahash_pars_fragment:vp,alphamap_fragment:xp,alphamap_pars_fragment:Mp,alphatest_fragment:yp,alphatest_pars_fragment:Sp,aomap_fragment:bp,aomap_pars_fragment:Tp,batching_pars_vertex:Ep,batching_vertex:wp,begin_vertex:Ap,beginnormal_vertex:Rp,bsdfs:Cp,iridescence_fragment:Pp,bumpmap_pars_fragment:Dp,clipping_planes_fragment:Lp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Fp,clipping_planes_vertex:Up,color_fragment:Np,color_pars_fragment:Op,color_pars_vertex:Bp,color_vertex:zp,common:kp,cube_uv_reflection_fragment:Vp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:Hp,displacementmap_vertex:Wp,emissivemap_fragment:Xp,emissivemap_pars_fragment:qp,colorspace_fragment:Yp,colorspace_pars_fragment:jp,envmap_fragment:$p,envmap_common_pars_fragment:Kp,envmap_pars_fragment:Zp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:cm,envmap_vertex:Qp,fog_vertex:tm,fog_pars_vertex:em,fog_fragment:nm,fog_pars_fragment:im,gradientmap_pars_fragment:sm,lightmap_pars_fragment:rm,lights_lambert_fragment:am,lights_lambert_pars_fragment:om,lights_pars_begin:lm,lights_toon_fragment:hm,lights_toon_pars_fragment:um,lights_phong_fragment:dm,lights_phong_pars_fragment:fm,lights_physical_fragment:pm,lights_physical_pars_fragment:mm,lights_fragment_begin:gm,lights_fragment_maps:_m,lights_fragment_end:vm,logdepthbuf_fragment:xm,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:ym,logdepthbuf_vertex:Sm,map_fragment:bm,map_pars_fragment:Tm,map_particle_fragment:Em,map_particle_pars_fragment:wm,metalnessmap_fragment:Am,metalnessmap_pars_fragment:Rm,morphinstance_vertex:Cm,morphcolor_vertex:Pm,morphnormal_vertex:Dm,morphtarget_pars_vertex:Lm,morphtarget_vertex:Im,normal_fragment_begin:Fm,normal_fragment_maps:Um,normal_pars_fragment:Nm,normal_pars_vertex:Om,normal_vertex:Bm,normalmap_pars_fragment:zm,clearcoat_normal_fragment_begin:km,clearcoat_normal_fragment_maps:Vm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Hm,opaque_fragment:Wm,packing:Xm,premultiplied_alpha_fragment:qm,project_vertex:Ym,dithering_fragment:jm,dithering_pars_fragment:$m,roughnessmap_fragment:Km,roughnessmap_pars_fragment:Zm,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:Qm,shadowmap_vertex:tg,shadowmask_pars_fragment:eg,skinbase_vertex:ng,skinning_pars_vertex:ig,skinning_vertex:sg,skinnormal_vertex:rg,specularmap_fragment:ag,specularmap_pars_fragment:og,tonemapping_fragment:lg,tonemapping_pars_fragment:cg,transmission_fragment:hg,transmission_pars_fragment:ug,uv_pars_fragment:dg,uv_pars_vertex:fg,uv_vertex:pg,worldpos_vertex:mg,background_vert:gg,background_frag:_g,backgroundCube_vert:vg,backgroundCube_frag:xg,cube_vert:Mg,cube_frag:yg,depth_vert:Sg,depth_frag:bg,distance_vert:Tg,distance_frag:Eg,equirect_vert:wg,equirect_frag:Ag,linedashed_vert:Rg,linedashed_frag:Cg,meshbasic_vert:Pg,meshbasic_frag:Dg,meshlambert_vert:Lg,meshlambert_frag:Ig,meshmatcap_vert:Fg,meshmatcap_frag:Ug,meshnormal_vert:Ng,meshnormal_frag:Og,meshphong_vert:Bg,meshphong_frag:zg,meshphysical_vert:kg,meshphysical_frag:Vg,meshtoon_vert:Gg,meshtoon_frag:Hg,points_vert:Wg,points_frag:Xg,shadow_vert:qg,shadow_frag:Yg,sprite_vert:jg,sprite_frag:$g},ut={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Fn={basic:{uniforms:qe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:qe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new $t(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:qe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:qe([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:qe([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new $t(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:qe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:qe([ut.points,ut.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:qe([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:qe([ut.common,ut.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:qe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:qe([ut.sprite,ut.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distance:{uniforms:qe([ut.common,ut.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distance_vert,fragmentShader:Bt.distance_frag},shadow:{uniforms:qe([ut.lights,ut.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Fn.physical={uniforms:qe([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Xr={r:0,b:0,g:0},Fi=new Hn,Kg=new re;function Zg(r,t,e,n,i,s,a){const o=new $t(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function _(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function g(S){let y=!1;const b=_(S);b===null?p(o,l):b&&b.isColor&&(p(b,1),y=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,y){const b=_(y);b&&(b.isCubeTexture||b.mapping===ma)?(h===void 0&&(h=new ce(new _r(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:Rs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Fi.copy(y.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kg.makeRotationFromEuler(Fi)),h.material.toneMapped=Zt.getTransfer(b.colorSpace)!==ie,(u!==b||d!==b.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ce(new _a(2,2),new Vt({name:"BackgroundMaterial",uniforms:Rs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(b.colorSpace)!==ie,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,y){S.getRGB(Xr,pu(r)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,y,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:g,addToRenderList:m,dispose:M}}function Jg(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(T,D,N,O,q){let X=!1;const V=u(O,N,D);s!==V&&(s=V,c(s.object)),X=f(T,O,N,q),X&&_(T,O,N,q),q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(T,D,N,O),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return r.createVertexArray()}function c(T){return r.bindVertexArray(T)}function h(T){return r.deleteVertexArray(T)}function u(T,D,N){const O=N.wireframe===!0;let q=n[T.id];q===void 0&&(q={},n[T.id]=q);let X=q[D.id];X===void 0&&(X={},q[D.id]=X);let V=X[O];return V===void 0&&(V=d(l()),X[O]=V),V}function d(T){const D=[],N=[],O=[];for(let q=0;q<e;q++)D[q]=0,N[q]=0,O[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:O,object:T,attributes:{},index:null}}function f(T,D,N,O){const q=s.attributes,X=D.attributes;let V=0;const B=N.getAttributes();for(const Z in B)if(B[Z].location>=0){const k=q[Z];let Y=X[Z];if(Y===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(Y=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(Y=T.instanceColor)),k===void 0||k.attribute!==Y||Y&&k.data!==Y.data)return!0;V++}return s.attributesNum!==V||s.index!==O}function _(T,D,N,O){const q={},X=D.attributes;let V=0;const B=N.getAttributes();for(const Z in B)if(B[Z].location>=0){let k=X[Z];k===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(k=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(k=T.instanceColor));const Y={};Y.attribute=k,k&&k.data&&(Y.data=k.data),q[Z]=Y,V++}s.attributes=q,s.attributesNum=V,s.index=O}function g(){const T=s.newAttributes;for(let D=0,N=T.length;D<N;D++)T[D]=0}function m(T){p(T,0)}function p(T,D){const N=s.newAttributes,O=s.enabledAttributes,q=s.attributeDivisors;N[T]=1,O[T]===0&&(r.enableVertexAttribArray(T),O[T]=1),q[T]!==D&&(r.vertexAttribDivisor(T,D),q[T]=D)}function M(){const T=s.newAttributes,D=s.enabledAttributes;for(let N=0,O=D.length;N<O;N++)D[N]!==T[N]&&(r.disableVertexAttribArray(N),D[N]=0)}function S(T,D,N,O,q,X,V){V===!0?r.vertexAttribIPointer(T,D,N,q,X):r.vertexAttribPointer(T,D,N,O,q,X)}function y(T,D,N,O){g();const q=O.attributes,X=N.getAttributes(),V=D.defaultAttributeValues;for(const B in X){const Z=X[B];if(Z.location>=0){let at=q[B];if(at===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(at=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(at=T.instanceColor)),at!==void 0){const k=at.normalized,Y=at.itemSize,nt=t.get(at);if(nt===void 0)continue;const st=nt.buffer,vt=nt.type,Mt=nt.bytesPerElement,W=vt===r.INT||vt===r.UNSIGNED_INT||at.gpuType===Pl;if(at.isInterleavedBufferAttribute){const $=at.data,pt=$.stride,Nt=at.offset;if($.isInstancedInterleavedBuffer){for(let mt=0;mt<Z.locationSize;mt++)p(Z.location+mt,$.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let mt=0;mt<Z.locationSize;mt++)m(Z.location+mt);r.bindBuffer(r.ARRAY_BUFFER,st);for(let mt=0;mt<Z.locationSize;mt++)S(Z.location+mt,Y/Z.locationSize,vt,k,pt*Mt,(Nt+Y/Z.locationSize*mt)*Mt,W)}else{if(at.isInstancedBufferAttribute){for(let $=0;$<Z.locationSize;$++)p(Z.location+$,at.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let $=0;$<Z.locationSize;$++)m(Z.location+$);r.bindBuffer(r.ARRAY_BUFFER,st);for(let $=0;$<Z.locationSize;$++)S(Z.location+$,Y/Z.locationSize,vt,k,Y*Mt,Y/Z.locationSize*$*Mt,W)}}else if(V!==void 0){const k=V[B];if(k!==void 0)switch(k.length){case 2:r.vertexAttrib2fv(Z.location,k);break;case 3:r.vertexAttrib3fv(Z.location,k);break;case 4:r.vertexAttrib4fv(Z.location,k);break;default:r.vertexAttrib1fv(Z.location,k)}}}}M()}function b(){C();for(const T in n){const D=n[T];for(const N in D){const O=D[N];for(const q in O)h(O[q].object),delete O[q];delete D[N]}delete n[T]}}function E(T){if(n[T.id]===void 0)return;const D=n[T.id];for(const N in D){const O=D[N];for(const q in O)h(O[q].object),delete O[q];delete D[N]}delete n[T.id]}function A(T){for(const D in n){const N=n[D];if(N[T.id]===void 0)continue;const O=N[T.id];for(const q in O)h(O[q].object),delete O[q];delete N[T.id]}}function C(){v(),a=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:v,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function Qg(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function t0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Rn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==hn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==On&&!C)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Rt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:y,maxSamples:b,samples:E}}function e0(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Bi,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{const M=s?0:n,S=M*4;let y=p.clippingState||null;l.value=y,y=h(_,d,S,f);for(let b=0;b!==S;++b)y[b]=e[b];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=f;S!==g;++S,y+=4)a.copy(u[S]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function n0(r){let t=new WeakMap;function e(a,o){return o===Ao?a.mapping=Ki:o===Ro&&(a.mapping=Es),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ao||o===Ro)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new _u(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const mi=4,th=[.125,.215,.35,.446,.526,.582],Gi=20,i0=256,Xs=new Wl,eh=new $t;let no=null,io=0,so=0,ro=!1;const s0=new P;class nh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:a=256,position:o=s0}=s;no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(no,io,so),this._renderer.xr.enabled=ro,t.scissorTest=!1,ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:ii,format:Rn,colorSpace:As,depthBuffer:!1},i=ih(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ih(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=r0(s)),this._blurMaterial=o0(s,t,e),this._ggxMaterial=a0(s,t,e)}return i}_compileMaterial(t){const e=new ce(new Ut,t);this._renderer.compile(e,Xs)}_sceneToCubeUV(t,e,n,i,s){const l=new cn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(eh),u.toneMapping=kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ce(new _r,new Vi({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(eh),p=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));const b=this._cubeSize;ps(i,y*b,S>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(g,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ki||t.mapping===Es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Xs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:_}=this,g=this._sizeLods[n],m=3*g*(n>_-mi?n-_+mi:0),p=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=_-e,ps(s,m,p,3*g,2*g),i.setRenderTarget(s),i.render(o,Xs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,ps(t,m,p,3*g,2*g),i.setRenderTarget(t),i.render(o,Xs)}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&jt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):Gi;m>Gi&&Rt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const p=[];let M=0;for(let A=0;A<Gi;++A){const C=A/g,v=Math.exp(-C*C/2);p.push(v),A===0?M+=v:A<m&&(M+=2*v)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-n;const y=this._sizeLods[i],b=3*y*(i>S-mi?i-S+mi:0),E=4*(this._cubeSize-y);ps(e,b,E,3*y,2*y),l.setRenderTarget(e),l.render(u,Xs)}}function r0(r){const t=[],e=[],n=[];let i=r;const s=r-mi+1+th.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-mi?l=th[a-r+mi-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*f),S=new Float32Array(m*_*f),y=new Float32Array(p*_*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,C=E>2?0:-1,v=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];M.set(v,g*_*E),S.set(d,m*_*E);const T=[E,E,E,E,E,E];y.set(T,p*_*E)}const b=new Ut;b.setAttribute("position",new It(M,g)),b.setAttribute("uv",new It(S,m)),b.setAttribute("faceIndex",new It(y,p)),n.push(new ce(b,null)),i>mi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function ih(r,t,e){const n=new Vn(r,t,e);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function a0(r,t,e){return new Vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:i0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:va(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function o0(r,t,e){const n=new Float32Array(Gi),i=new P(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:va(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function sh(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function rh(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function va(){return`

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
	`}function l0(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ao||l===Ro,h=l===Ki||l===Es;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new nh(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new nh(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function c0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&rr("WebGLRenderer: "+n+" extension not supported."),i}}}function h0(r,t,e,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const M=f.array;g=f.version;for(let S=0,y=M.length;S<y;S+=3){const b=M[S+0],E=M[S+1],A=M[S+2];d.push(b,E,E,A,A,b)}}else if(_!==void 0){const M=_.array;g=_.version;for(let S=0,y=M.length/3-1;S<y;S+=3){const b=S+0,E=S+1,A=S+2;d.push(b,E,E,A,A,b)}}else return;const m=new(cu(d)?fu:du)(d,1);m.version=g;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function u0(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),e.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*a,_),e.update(f,n,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function u(d,f,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=f[M]*g[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function d0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:jt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function f0(r,t,e){const n=new WeakMap,i=new ye;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};var f=T;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let b=o.attributes.position.count*y,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const A=new Float32Array(b*E*4*u),C=new hu(A,b,E,u);C.type=On,C.needsUpdate=!0;const v=y*4;for(let D=0;D<u;D++){const N=p[D],O=M[D],q=S[D],X=b*E*4*D;for(let V=0;V<N.count;V++){const B=V*v;_===!0&&(i.fromBufferAttribute(N,V),A[X+B+0]=i.x,A[X+B+1]=i.y,A[X+B+2]=i.z,A[X+B+3]=0),g===!0&&(i.fromBufferAttribute(O,V),A[X+B+4]=i.x,A[X+B+5]=i.y,A[X+B+6]=i.z,A[X+B+7]=0),m===!0&&(i.fromBufferAttribute(q,V),A[X+B+8]=i.x,A[X+B+9]=i.y,A[X+B+10]=i.z,A[X+B+11]=q.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new Gt(b,E)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function p0(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const m0={[Yh]:"LINEAR_TONE_MAPPING",[jh]:"REINHARD_TONE_MAPPING",[$h]:"CINEON_TONE_MAPPING",[Kh]:"ACES_FILMIC_TONE_MAPPING",[Jh]:"AGX_TONE_MAPPING",[Qh]:"NEUTRAL_TONE_MAPPING",[Zh]:"CUSTOM_TONE_MAPPING"};function g0(r,t,e,n,i){const s=new Vn(t,e,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Vn(t,e,{type:ii,depthBuffer:!1,stencilBuffer:!1}),o=new Ut;o.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Pe([0,2,0,0,2,0],2));const l=new Jf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ce(o,l),h=new Wl(-1,1,1,-1,0,1);let u=null,d=null,f=!1,_,g=null,m=[],p=!1;this.setSize=function(M,S){s.setSize(M,S),a.setSize(M,S);for(let y=0;y<m.length;y++){const b=m[y];b.setSize&&b.setSize(M,S)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const S=s.width,y=s.height;for(let b=0;b<m.length;b++){const E=m[b];E.setSize&&E.setSize(S,y)}},this.begin=function(M,S){if(f||M.toneMapping===kn&&m.length===0)return!1;if(g=S,S!==null){const y=S.width,b=S.height;(s.width!==y||s.height!==b)&&this.setSize(y,b)}return p===!1&&M.setRenderTarget(s),_=M.toneMapping,M.toneMapping=kn,!0},this.hasRenderPass=function(){return p},this.end=function(M,S){M.toneMapping=_,f=!0;let y=s,b=a;for(let E=0;E<m.length;E++){const A=m[E];if(A.enabled!==!1&&(A.render(M,b,y,S),A.needsSwap!==!1)){const C=y;y=b,b=C}}if(u!==M.outputColorSpace||d!==M.toneMapping){u=M.outputColorSpace,d=M.toneMapping,l.defines={},Zt.getTransfer(u)===ie&&(l.defines.SRGB_TRANSFER="");const E=m0[d];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(g),M.render(c,h),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Tu=new He,dl=new ar(1,1),Eu=new hu,wu=new yf,Au=new gu,ah=[],oh=[],lh=new Float32Array(16),ch=new Float32Array(9),hh=new Float32Array(4);function Os(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=ah[i];if(s===void 0&&(s=new Float32Array(i),ah[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Le(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ie(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function xa(r,t){let e=oh[t];e===void 0&&(e=new Int32Array(t),oh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function _0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function v0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;r.uniform2fv(this.addr,t),Ie(e,t)}}function x0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;r.uniform3fv(this.addr,t),Ie(e,t)}}function M0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;r.uniform4fv(this.addr,t),Ie(e,t)}}function y0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;hh.set(n),r.uniformMatrix2fv(this.addr,!1,hh),Ie(e,n)}}function S0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;ch.set(n),r.uniformMatrix3fv(this.addr,!1,ch),Ie(e,n)}}function b0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;lh.set(n),r.uniformMatrix4fv(this.addr,!1,lh),Ie(e,n)}}function T0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function E0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;r.uniform2iv(this.addr,t),Ie(e,t)}}function w0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;r.uniform3iv(this.addr,t),Ie(e,t)}}function A0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;r.uniform4iv(this.addr,t),Ie(e,t)}}function R0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function C0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;r.uniform2uiv(this.addr,t),Ie(e,t)}}function P0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;r.uniform3uiv(this.addr,t),Ie(e,t)}}function D0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;r.uniform4uiv(this.addr,t),Ie(e,t)}}function L0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(dl.compareFunction=e.isReversedDepthBuffer()?Ol:Nl,s=dl):s=Tu,e.setTexture2D(t||s,i)}function I0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||wu,i)}function F0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Au,i)}function U0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Eu,i)}function N0(r){switch(r){case 5126:return _0;case 35664:return v0;case 35665:return x0;case 35666:return M0;case 35674:return y0;case 35675:return S0;case 35676:return b0;case 5124:case 35670:return T0;case 35667:case 35671:return E0;case 35668:case 35672:return w0;case 35669:case 35673:return A0;case 5125:return R0;case 36294:return C0;case 36295:return P0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return U0}}function O0(r,t){r.uniform1fv(this.addr,t)}function B0(r,t){const e=Os(t,this.size,2);r.uniform2fv(this.addr,e)}function z0(r,t){const e=Os(t,this.size,3);r.uniform3fv(this.addr,e)}function k0(r,t){const e=Os(t,this.size,4);r.uniform4fv(this.addr,e)}function V0(r,t){const e=Os(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function G0(r,t){const e=Os(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function H0(r,t){const e=Os(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function W0(r,t){r.uniform1iv(this.addr,t)}function X0(r,t){r.uniform2iv(this.addr,t)}function q0(r,t){r.uniform3iv(this.addr,t)}function Y0(r,t){r.uniform4iv(this.addr,t)}function j0(r,t){r.uniform1uiv(this.addr,t)}function $0(r,t){r.uniform2uiv(this.addr,t)}function K0(r,t){r.uniform3uiv(this.addr,t)}function Z0(r,t){r.uniform4uiv(this.addr,t)}function J0(r,t,e){const n=this.cache,i=t.length,s=xa(e,i);Le(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=dl:a=Tu;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function Q0(r,t,e){const n=this.cache,i=t.length,s=xa(e,i);Le(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||wu,s[a])}function t_(r,t,e){const n=this.cache,i=t.length,s=xa(e,i);Le(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Au,s[a])}function e_(r,t,e){const n=this.cache,i=t.length,s=xa(e,i);Le(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Eu,s[a])}function n_(r){switch(r){case 5126:return O0;case 35664:return B0;case 35665:return z0;case 35666:return k0;case 35674:return V0;case 35675:return G0;case 35676:return H0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return q0;case 35669:case 35673:return Y0;case 5125:return j0;case 36294:return $0;case 36295:return K0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return J0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return e_}}class i_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=N0(e.type)}}class s_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=n_(e.type)}}class r_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const ao=/(\w+)(\])?(\[|\.)?/g;function uh(r,t){r.seq.push(t),r.map[t.id]=t}function a_(r,t,e){const n=r.name,i=n.length;for(ao.lastIndex=0;;){const s=ao.exec(n),a=ao.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){uh(e,c===void 0?new i_(o,r,t):new s_(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new r_(o),uh(e,u)),e=u}}}class Qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);a_(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function dh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const o_=37297;let l_=0;function c_(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const fh=new Ot;function h_(r){Zt._getMatrix(fh,Zt.workingColorSpace,r);const t=`mat3( ${fh.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(r)){case ia:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function ph(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+c_(r.getShaderSource(t),o)}else return s}function u_(r,t){const e=h_(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const d_={[Yh]:"Linear",[jh]:"Reinhard",[$h]:"Cineon",[Kh]:"ACESFilmic",[Jh]:"AgX",[Qh]:"Neutral",[Zh]:"Custom"};function f_(r,t){const e=d_[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qr=new P;function p_(){Zt.getLuminanceCoefficients(qr);const r=qr.x.toFixed(4),t=qr.y.toFixed(4),e=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function g_(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function __(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function $s(r){return r!==""}function mh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const v_=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(r){return r.replace(v_,M_)}const x_=new Map;function M_(r,t){let e=Bt[t];if(e===void 0){const n=x_.get(t);if(n!==void 0)e=Bt[n],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fl(e)}const y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(r){return r.replace(y_,S_)}function S_(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function vh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const b_={[jr]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function T_(r){return b_[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const E_={[Ki]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE_UV"};function w_(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":E_[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const A_={[Es]:"ENVMAP_MODE_REFRACTION"};function R_(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":A_[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const C_={[qh]:"ENVMAP_BLENDING_MULTIPLY",[ef]:"ENVMAP_BLENDING_MIX",[nf]:"ENVMAP_BLENDING_ADD"};function P_(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":C_[r.combine]||"ENVMAP_BLENDING_NONE"}function D_(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function L_(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=T_(e),c=w_(e),h=R_(e),u=P_(e),d=D_(e),f=m_(e),_=g_(s),g=i.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter($s).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter($s).join(`
`),p.length>0&&(p+=`
`)):(m=[vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),p=[vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==kn?f_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,u_("linearToOutputTexel",e.outputColorSpace),p_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($s).join(`
`)),a=fl(a),a=mh(a,e),a=gh(a,e),o=fl(o),o=mh(o,e),o=gh(o,e),a=_h(a),o=_h(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+a,y=M+p+o,b=dh(i,i.VERTEX_SHADER,S),E=dh(i,i.FRAGMENT_SHADER,y);i.attachShader(g,b),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(D){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g)||"",O=i.getShaderInfoLog(b)||"",q=i.getShaderInfoLog(E)||"",X=N.trim(),V=O.trim(),B=q.trim();let Z=!0,at=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,b,E);else{const k=ph(i,b,"vertex"),Y=ph(i,E,"fragment");jt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+k+`
`+Y)}else X!==""?Rt("WebGLProgram: Program Info Log:",X):(V===""||B==="")&&(at=!1);at&&(D.diagnostics={runnable:Z,programLog:X,vertexShader:{log:V,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(b),i.deleteShader(E),C=new Qr(i,g),v=__(i,g)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(g,o_)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=l_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=E,this}let I_=0;class F_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new U_(t),e.set(t,n)),n}}class U_{constructor(t){this.id=I_++,this.code=t,this.usedTimes=0}}function N_(r,t,e,n,i,s,a){const o=new zl,l=new F_,c=new Set,h=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,T,D,N,O){const q=N.fog,X=O.geometry,V=v.isMeshStandardMaterial?N.environment:null,B=(v.isMeshStandardMaterial?e:t).get(v.envMap||V),Z=B&&B.mapping===ma?B.image.height:null,at=_[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&Rt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const k=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Y=k!==void 0?k.length:0;let nt=0;X.morphAttributes.position!==void 0&&(nt=1),X.morphAttributes.normal!==void 0&&(nt=2),X.morphAttributes.color!==void 0&&(nt=3);let st,vt,Mt,W;if(at){const ee=Fn[at];st=ee.vertexShader,vt=ee.fragmentShader}else st=v.vertexShader,vt=v.fragmentShader,l.update(v),Mt=l.getVertexShaderID(v),W=l.getFragmentShaderID(v);const $=r.getRenderTarget(),pt=r.state.buffers.depth.getReversed(),Nt=O.isInstancedMesh===!0,mt=O.isBatchedMesh===!0,qt=!!v.map,be=!!v.matcap,Kt=!!B,te=!!v.aoMap,ae=!!v.lightMap,zt=!!v.bumpMap,we=!!v.normalMap,L=!!v.displacementMap,Ae=!!v.emissiveMap,Qt=!!v.metalnessMap,ue=!!v.roughnessMap,Tt=v.anisotropy>0,R=v.clearcoat>0,x=v.dispersion>0,F=v.iridescence>0,K=v.sheen>0,Q=v.transmission>0,j=Tt&&!!v.anisotropyMap,wt=R&&!!v.clearcoatMap,ot=R&&!!v.clearcoatNormalMap,bt=R&&!!v.clearcoatRoughnessMap,Lt=F&&!!v.iridescenceMap,et=F&&!!v.iridescenceThicknessMap,ct=K&&!!v.sheenColorMap,St=K&&!!v.sheenRoughnessMap,Et=!!v.specularMap,lt=!!v.specularColorMap,kt=!!v.specularIntensityMap,I=Q&&!!v.transmissionMap,ft=Q&&!!v.thicknessMap,it=!!v.gradientMap,gt=!!v.alphaMap,tt=v.alphaTest>0,J=!!v.alphaHash,rt=!!v.extensions;let Ft=kn;v.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ft=r.toneMapping);const de={shaderID:at,shaderType:v.type,shaderName:v.name,vertexShader:st,fragmentShader:vt,defines:v.defines,customVertexShaderID:Mt,customFragmentShaderID:W,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:mt,batchingColor:mt&&O._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&O.instanceColor!==null,instancingMorph:Nt&&O.morphTexture!==null,outputColorSpace:$===null?r.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:As,alphaToCoverage:!!v.alphaToCoverage,map:qt,matcap:be,envMap:Kt,envMapMode:Kt&&B.mapping,envMapCubeUVHeight:Z,aoMap:te,lightMap:ae,bumpMap:zt,normalMap:we,displacementMap:L,emissiveMap:Ae,normalMapObjectSpace:we&&v.normalMapType===af,normalMapTangentSpace:we&&v.normalMapType===lu,metalnessMap:Qt,roughnessMap:ue,anisotropy:Tt,anisotropyMap:j,clearcoat:R,clearcoatMap:wt,clearcoatNormalMap:ot,clearcoatRoughnessMap:bt,dispersion:x,iridescence:F,iridescenceMap:Lt,iridescenceThicknessMap:et,sheen:K,sheenColorMap:ct,sheenRoughnessMap:St,specularMap:Et,specularColorMap:lt,specularIntensityMap:kt,transmission:Q,transmissionMap:I,thicknessMap:ft,gradientMap:it,opaque:v.transparent===!1&&v.blending===xs&&v.alphaToCoverage===!1,alphaMap:gt,alphaTest:tt,alphaHash:J,combine:v.combine,mapUv:qt&&g(v.map.channel),aoMapUv:te&&g(v.aoMap.channel),lightMapUv:ae&&g(v.lightMap.channel),bumpMapUv:zt&&g(v.bumpMap.channel),normalMapUv:we&&g(v.normalMap.channel),displacementMapUv:L&&g(v.displacementMap.channel),emissiveMapUv:Ae&&g(v.emissiveMap.channel),metalnessMapUv:Qt&&g(v.metalnessMap.channel),roughnessMapUv:ue&&g(v.roughnessMap.channel),anisotropyMapUv:j&&g(v.anisotropyMap.channel),clearcoatMapUv:wt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ot&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:et&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(v.sheenRoughnessMap.channel),specularMapUv:Et&&g(v.specularMap.channel),specularColorMapUv:lt&&g(v.specularColorMap.channel),specularIntensityMapUv:kt&&g(v.specularIntensityMap.channel),transmissionMapUv:I&&g(v.transmissionMap.channel),thicknessMapUv:ft&&g(v.thicknessMap.channel),alphaMapUv:gt&&g(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(we||Tt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(qt||gt),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:nt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ft,decodeVideoTexture:qt&&v.map.isVideoTexture===!0&&Zt.getTransfer(v.map.colorSpace)===ie,decodeVideoTextureEmissive:Ae&&v.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(v.emissiveMap.colorSpace)===ie,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Un,flipSided:v.side===Ze,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:rt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&v.extensions.multiDraw===!0||mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function p(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)T.push(D),T.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(M(T,v),S(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function M(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){const T=_[v.type];let D;if(T){const N=Fn[T];D=Ff.clone(N.uniforms)}else D=v.uniforms;return D}function b(v,T){let D=u.get(T);return D!==void 0?++D.usedTimes:(D=new L_(r,T,v,s),h.push(D),u.set(T,D)),D}function E(v){if(--v.usedTimes===0){const T=h.indexOf(v);h[T]=h[h.length-1],h.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:C}}function O_(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function B_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function xh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Mh(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,_,g,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function o(u,d,f,_,g,m){const p=a(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,_,g,m){const p=a(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||B_),n.length>1&&n.sort(d||xh),i.length>1&&i.sort(d||xh)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function z_(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Mh,r.set(n,[a])):i>=s.length?(a=new Mh,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function k_(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new $t};break;case"SpotLight":e={position:new P,direction:new P,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new P,halfWidth:new P,halfHeight:new P};break}return r[t.id]=e,e}}}function V_(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let G_=0;function H_(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function W_(r){const t=new k_,e=V_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,s=new re,a=new re;function o(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,M=0,S=0,y=0,b=0,E=0,A=0;c.sort(H_);for(let v=0,T=c.length;v<T;v++){const D=c[v],N=D.color,O=D.intensity,q=D.distance;let X=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ws?X=D.shadow.map.texture:X=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=N.r*O,u+=N.g*O,d+=N.b*O;else if(D.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(D.sh.coefficients[V],O);A++}else if(D.isDirectionalLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const B=D.shadow,Z=e.get(D);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=D.shadow.matrix,M++}n.directional[f]=V,f++}else if(D.isSpotLight){const V=t.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(N).multiplyScalar(O),V.distance=q,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,n.spot[g]=V;const B=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,B.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[g]=B.matrix,D.castShadow){const Z=e.get(D);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,n.spotShadow[g]=Z,n.spotShadowMap[g]=X,y++}g++}else if(D.isRectAreaLight){const V=t.get(D);V.color.copy(N).multiplyScalar(O),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=V,m++}else if(D.isPointLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const B=D.shadow,Z=e.get(D);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,Z.shadowCameraNear=B.camera.near,Z.shadowCameraFar=B.camera.far,n.pointShadow[_]=Z,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=D.shadow.matrix,S++}n.point[_]=V,_++}else if(D.isHemisphereLight){const V=t.get(D);V.skyColor.copy(D.color).multiplyScalar(O),V.groundColor.copy(D.groundColor).multiplyScalar(O),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==S||C.numSpotShadows!==y||C.numSpotMaps!==b||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,C.directionalLength=f,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=S,C.numSpotShadows=y,C.numSpotMaps=b,C.numLightProbes=A,n.version=G_++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(S.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function yh(r){const t=new W_(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function X_(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new yh(r),t.set(i,[o])):s>=a.length?(o=new yh(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,j_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],$_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Sh=new re,qs=new P,oo=new P;function K_(r,t,e){let n=new kl;const i=new Gt,s=new Gt,a=new ye,o=new Qf,l=new tp,c={},h=e.maxTextureSize,u={[Cn]:Ze,[Ze]:Cn,[Un]:Un},d=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:q_,fragmentShader:Y_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Ut;_.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ce(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jr;let p=this.type;this.render=function(E,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;E.type===Nd&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=jr);const v=r.getRenderTarget(),T=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ei),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=p!==this.type;O&&A.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(X=>X.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,X=E.length;q<X;q++){const V=E[q],B=V.shadow;if(B===void 0){Rt("WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const Z=B.getFrameExtents();if(i.multiply(Z),s.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,B.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,B.mapSize.y=s.y)),B.map===null||O===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===js){if(V.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Vn(i.x,i.y,{format:ws,type:ii,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),B.map.texture.name=V.name+".shadowMap",B.map.depthTexture=new ar(i.x,i.y,On),B.map.depthTexture.name=V.name+".shadowMapDepth",B.map.depthTexture.format=si,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Oe,B.map.depthTexture.magFilter=Oe}else{V.isPointLight?(B.map=new _u(i.x),B.map.depthTexture=new qf(i.x,Gn)):(B.map=new Vn(i.x,i.y),B.map.depthTexture=new ar(i.x,i.y,Gn)),B.map.depthTexture.name=V.name+".shadowMap",B.map.depthTexture.format=si;const k=r.state.buffers.depth.getReversed();this.type===jr?(B.map.depthTexture.compareFunction=k?Ol:Nl,B.map.depthTexture.minFilter=Ge,B.map.depthTexture.magFilter=Ge):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Oe,B.map.depthTexture.magFilter=Oe)}B.camera.updateProjectionMatrix()}const at=B.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<at;k++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,k),r.clear();else{k===0&&(r.setRenderTarget(B.map),r.clear());const Y=B.getViewport(k);a.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),N.viewport(a)}if(V.isPointLight){const Y=B.camera,nt=B.matrix,st=V.distance||Y.far;st!==Y.far&&(Y.far=st,Y.updateProjectionMatrix()),qs.setFromMatrixPosition(V.matrixWorld),Y.position.copy(qs),oo.copy(Y.position),oo.add(j_[k]),Y.up.copy($_[k]),Y.lookAt(oo),Y.updateMatrixWorld(),nt.makeTranslation(-qs.x,-qs.y,-qs.z),Sh.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Sh,Y.coordinateSystem,Y.reversedDepth)}else B.updateMatrices(V);n=B.getFrustum(),y(A,C,B.camera,V,this.type)}B.isPointLightShadow!==!0&&this.type===js&&M(B,C),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,T,D)};function M(E,A){const C=t.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Vn(i.x,i.y,{format:ws,type:ii})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,C,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,C,f,g,null)}function S(E,A,C,v){let T=null;const D=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)T=D;else if(T=C.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=T.uuid,O=A.uuid;let q=c[N];q===void 0&&(q={},c[N]=q);let X=q[O];X===void 0&&(X=T.clone(),q[O]=X,A.addEventListener("dispose",b)),T=X}if(T.visible=A.visible,T.wireframe=A.wireframe,v===js?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:u[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const N=r.properties.get(T);N.light=C}return T}function y(E,A,C,v,T){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===js)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const O=t.update(E),q=E.material;if(Array.isArray(q)){const X=O.groups;for(let V=0,B=X.length;V<B;V++){const Z=X[V],at=q[Z.materialIndex];if(at&&at.visible){const k=S(E,at,v,T);E.onBeforeShadow(r,E,A,C,O,k,Z),r.renderBufferDirect(C,null,O,k,E,Z),E.onAfterShadow(r,E,A,C,O,k,Z)}}}else if(q.visible){const X=S(E,q,v,T);E.onBeforeShadow(r,E,A,C,O,X,null),r.renderBufferDirect(C,null,O,X,E,null),E.onAfterShadow(r,E,A,C,O,X,null)}}const N=E.children;for(let O=0,q=N.length;O<q;O++)y(N[O],A,C,v,T)}function b(E){E.target.removeEventListener("dispose",b);for(const C in c){const v=c[C],T=E.target.uuid;T in v&&(v[T].dispose(),delete v[T])}}}const Z_={[Mo]:yo,[So]:Eo,[bo]:wo,[Ts]:To,[yo]:Mo,[Eo]:So,[wo]:bo,[To]:Ts};function J_(r,t){function e(){let I=!1;const ft=new ye;let it=null;const gt=new ye(0,0,0,0);return{setMask:function(tt){it!==tt&&!I&&(r.colorMask(tt,tt,tt,tt),it=tt)},setLocked:function(tt){I=tt},setClear:function(tt,J,rt,Ft,de){de===!0&&(tt*=Ft,J*=Ft,rt*=Ft),ft.set(tt,J,rt,Ft),gt.equals(ft)===!1&&(r.clearColor(tt,J,rt,Ft),gt.copy(ft))},reset:function(){I=!1,it=null,gt.set(-1,0,0,0)}}}function n(){let I=!1,ft=!1,it=null,gt=null,tt=null;return{setReversed:function(J){if(ft!==J){const rt=t.get("EXT_clip_control");J?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),ft=J;const Ft=tt;tt=null,this.setClear(Ft)}},getReversed:function(){return ft},setTest:function(J){J?$(r.DEPTH_TEST):pt(r.DEPTH_TEST)},setMask:function(J){it!==J&&!I&&(r.depthMask(J),it=J)},setFunc:function(J){if(ft&&(J=Z_[J]),gt!==J){switch(J){case Mo:r.depthFunc(r.NEVER);break;case yo:r.depthFunc(r.ALWAYS);break;case So:r.depthFunc(r.LESS);break;case Ts:r.depthFunc(r.LEQUAL);break;case bo:r.depthFunc(r.EQUAL);break;case To:r.depthFunc(r.GEQUAL);break;case Eo:r.depthFunc(r.GREATER);break;case wo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}gt=J}},setLocked:function(J){I=J},setClear:function(J){tt!==J&&(ft&&(J=1-J),r.clearDepth(J),tt=J)},reset:function(){I=!1,it=null,gt=null,tt=null,ft=!1}}}function i(){let I=!1,ft=null,it=null,gt=null,tt=null,J=null,rt=null,Ft=null,de=null;return{setTest:function(ee){I||(ee?$(r.STENCIL_TEST):pt(r.STENCIL_TEST))},setMask:function(ee){ft!==ee&&!I&&(r.stencilMask(ee),ft=ee)},setFunc:function(ee,Dn,Xn){(it!==ee||gt!==Dn||tt!==Xn)&&(r.stencilFunc(ee,Dn,Xn),it=ee,gt=Dn,tt=Xn)},setOp:function(ee,Dn,Xn){(J!==ee||rt!==Dn||Ft!==Xn)&&(r.stencilOp(ee,Dn,Xn),J=ee,rt=Dn,Ft=Xn)},setLocked:function(ee){I=ee},setClear:function(ee){de!==ee&&(r.clearStencil(ee),de=ee)},reset:function(){I=!1,ft=null,it=null,gt=null,tt=null,J=null,rt=null,Ft=null,de=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,S=null,y=null,b=null,E=null,A=new $t(0,0,0),C=0,v=!1,T=null,D=null,N=null,O=null,q=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,B=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Z)[1]),V=B>=1):Z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),V=B>=2);let at=null,k={};const Y=r.getParameter(r.SCISSOR_BOX),nt=r.getParameter(r.VIEWPORT),st=new ye().fromArray(Y),vt=new ye().fromArray(nt);function Mt(I,ft,it,gt){const tt=new Uint8Array(4),J=r.createTexture();r.bindTexture(I,J),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let rt=0;rt<it;rt++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ft,0,r.RGBA,1,1,gt,0,r.RGBA,r.UNSIGNED_BYTE,tt):r.texImage2D(ft+rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,tt);return J}const W={};W[r.TEXTURE_2D]=Mt(r.TEXTURE_2D,r.TEXTURE_2D,1),W[r.TEXTURE_CUBE_MAP]=Mt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[r.TEXTURE_2D_ARRAY]=Mt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),W[r.TEXTURE_3D]=Mt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(r.DEPTH_TEST),a.setFunc(Ts),zt(!1),we(_c),$(r.CULL_FACE),te(ei);function $(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function pt(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function Nt(I,ft){return u[I]!==ft?(r.bindFramebuffer(I,ft),u[I]=ft,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ft),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ft),!0):!1}function mt(I,ft){let it=f,gt=!1;if(I){it=d.get(ft),it===void 0&&(it=[],d.set(ft,it));const tt=I.textures;if(it.length!==tt.length||it[0]!==r.COLOR_ATTACHMENT0){for(let J=0,rt=tt.length;J<rt;J++)it[J]=r.COLOR_ATTACHMENT0+J;it.length=tt.length,gt=!0}}else it[0]!==r.BACK&&(it[0]=r.BACK,gt=!0);gt&&r.drawBuffers(it)}function qt(I){return _!==I?(r.useProgram(I),_=I,!0):!1}const be={[ki]:r.FUNC_ADD,[Bd]:r.FUNC_SUBTRACT,[zd]:r.FUNC_REVERSE_SUBTRACT};be[kd]=r.MIN,be[Vd]=r.MAX;const Kt={[Gd]:r.ZERO,[Hd]:r.ONE,[Wd]:r.SRC_COLOR,[vo]:r.SRC_ALPHA,[Kd]:r.SRC_ALPHA_SATURATE,[jd]:r.DST_COLOR,[qd]:r.DST_ALPHA,[Xd]:r.ONE_MINUS_SRC_COLOR,[xo]:r.ONE_MINUS_SRC_ALPHA,[$d]:r.ONE_MINUS_DST_COLOR,[Yd]:r.ONE_MINUS_DST_ALPHA,[Zd]:r.CONSTANT_COLOR,[Jd]:r.ONE_MINUS_CONSTANT_COLOR,[Qd]:r.CONSTANT_ALPHA,[tf]:r.ONE_MINUS_CONSTANT_ALPHA};function te(I,ft,it,gt,tt,J,rt,Ft,de,ee){if(I===ei){g===!0&&(pt(r.BLEND),g=!1);return}if(g===!1&&($(r.BLEND),g=!0),I!==Od){if(I!==m||ee!==v){if((p!==ki||y!==ki)&&(r.blendEquation(r.FUNC_ADD),p=ki,y=ki),ee)switch(I){case xs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wt:r.blendFunc(r.ONE,r.ONE);break;case vc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case xc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:jt("WebGLState: Invalid blending: ",I);break}else switch(I){case xs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wt:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case vc:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xc:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",I);break}M=null,S=null,b=null,E=null,A.set(0,0,0),C=0,m=I,v=ee}return}tt=tt||ft,J=J||it,rt=rt||gt,(ft!==p||tt!==y)&&(r.blendEquationSeparate(be[ft],be[tt]),p=ft,y=tt),(it!==M||gt!==S||J!==b||rt!==E)&&(r.blendFuncSeparate(Kt[it],Kt[gt],Kt[J],Kt[rt]),M=it,S=gt,b=J,E=rt),(Ft.equals(A)===!1||de!==C)&&(r.blendColor(Ft.r,Ft.g,Ft.b,de),A.copy(Ft),C=de),m=I,v=!1}function ae(I,ft){I.side===Un?pt(r.CULL_FACE):$(r.CULL_FACE);let it=I.side===Ze;ft&&(it=!it),zt(it),I.blending===xs&&I.transparent===!1?te(ei):te(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const gt=I.stencilWrite;o.setTest(gt),gt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ae(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?$(r.SAMPLE_ALPHA_TO_COVERAGE):pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function zt(I){T!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),T=I)}function we(I){I!==Fd?($(r.CULL_FACE),I!==D&&(I===_c?r.cullFace(r.BACK):I===Ud?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pt(r.CULL_FACE),D=I}function L(I){I!==N&&(V&&r.lineWidth(I),N=I)}function Ae(I,ft,it){I?($(r.POLYGON_OFFSET_FILL),(O!==ft||q!==it)&&(r.polygonOffset(ft,it),O=ft,q=it)):pt(r.POLYGON_OFFSET_FILL)}function Qt(I){I?$(r.SCISSOR_TEST):pt(r.SCISSOR_TEST)}function ue(I){I===void 0&&(I=r.TEXTURE0+X-1),at!==I&&(r.activeTexture(I),at=I)}function Tt(I,ft,it){it===void 0&&(at===null?it=r.TEXTURE0+X-1:it=at);let gt=k[it];gt===void 0&&(gt={type:void 0,texture:void 0},k[it]=gt),(gt.type!==I||gt.texture!==ft)&&(at!==it&&(r.activeTexture(it),at=it),r.bindTexture(I,ft||W[I]),gt.type=I,gt.texture=ft)}function R(){const I=k[at];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{r.compressedTexImage2D(...arguments)}catch(I){jt("WebGLState:",I)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(I){jt("WebGLState:",I)}}function K(){try{r.texSubImage2D(...arguments)}catch(I){jt("WebGLState:",I)}}function Q(){try{r.texSubImage3D(...arguments)}catch(I){jt("WebGLState:",I)}}function j(){try{r.compressedTexSubImage2D(...arguments)}catch(I){jt("WebGLState:",I)}}function wt(){try{r.compressedTexSubImage3D(...arguments)}catch(I){jt("WebGLState:",I)}}function ot(){try{r.texStorage2D(...arguments)}catch(I){jt("WebGLState:",I)}}function bt(){try{r.texStorage3D(...arguments)}catch(I){jt("WebGLState:",I)}}function Lt(){try{r.texImage2D(...arguments)}catch(I){jt("WebGLState:",I)}}function et(){try{r.texImage3D(...arguments)}catch(I){jt("WebGLState:",I)}}function ct(I){st.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),st.copy(I))}function St(I){vt.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),vt.copy(I))}function Et(I,ft){let it=c.get(ft);it===void 0&&(it=new WeakMap,c.set(ft,it));let gt=it.get(I);gt===void 0&&(gt=r.getUniformBlockIndex(ft,I.name),it.set(I,gt))}function lt(I,ft){const gt=c.get(ft).get(I);l.get(ft)!==gt&&(r.uniformBlockBinding(ft,gt,I.__bindingPointIndex),l.set(ft,gt))}function kt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},at=null,k={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,S=null,y=null,b=null,E=null,A=new $t(0,0,0),C=0,v=!1,T=null,D=null,N=null,O=null,q=null,st.set(0,0,r.canvas.width,r.canvas.height),vt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:pt,bindFramebuffer:Nt,drawBuffers:mt,useProgram:qt,setBlending:te,setMaterial:ae,setFlipSided:zt,setCullFace:we,setLineWidth:L,setPolygonOffset:Ae,setScissorTest:Qt,activeTexture:ue,bindTexture:Tt,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:Lt,texImage3D:et,updateUBOMapping:Et,uniformBlockBinding:lt,texStorage2D:ot,texStorage3D:bt,texSubImage2D:K,texSubImage3D:Q,compressedTexSubImage2D:j,compressedTexSubImage3D:wt,scissor:ct,viewport:St,reset:kt}}function Q_(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,x){return f?new OffscreenCanvas(R,x):sr("canvas")}function g(R,x,F){let K=1;const Q=Tt(R);if((Q.width>F||Q.height>F)&&(K=F/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(K*Q.width),wt=Math.floor(K*Q.height);u===void 0&&(u=_(j,wt));const ot=x?_(j,wt):u;return ot.width=j,ot.height=wt,ot.getContext("2d").drawImage(R,0,0,j,wt),Rt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+wt+")."),ot}else return"data"in R&&Rt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(R,x,F,K,Q=!1){if(R!==null){if(r[R]!==void 0)return r[R];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=x;if(x===r.RED&&(F===r.FLOAT&&(j=r.R32F),F===r.HALF_FLOAT&&(j=r.R16F),F===r.UNSIGNED_BYTE&&(j=r.R8)),x===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(j=r.R8UI),F===r.UNSIGNED_SHORT&&(j=r.R16UI),F===r.UNSIGNED_INT&&(j=r.R32UI),F===r.BYTE&&(j=r.R8I),F===r.SHORT&&(j=r.R16I),F===r.INT&&(j=r.R32I)),x===r.RG&&(F===r.FLOAT&&(j=r.RG32F),F===r.HALF_FLOAT&&(j=r.RG16F),F===r.UNSIGNED_BYTE&&(j=r.RG8)),x===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(j=r.RG8UI),F===r.UNSIGNED_SHORT&&(j=r.RG16UI),F===r.UNSIGNED_INT&&(j=r.RG32UI),F===r.BYTE&&(j=r.RG8I),F===r.SHORT&&(j=r.RG16I),F===r.INT&&(j=r.RG32I)),x===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(j=r.RGB8UI),F===r.UNSIGNED_SHORT&&(j=r.RGB16UI),F===r.UNSIGNED_INT&&(j=r.RGB32UI),F===r.BYTE&&(j=r.RGB8I),F===r.SHORT&&(j=r.RGB16I),F===r.INT&&(j=r.RGB32I)),x===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),F===r.UNSIGNED_INT&&(j=r.RGBA32UI),F===r.BYTE&&(j=r.RGBA8I),F===r.SHORT&&(j=r.RGBA16I),F===r.INT&&(j=r.RGBA32I)),x===r.RGB&&(F===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),x===r.RGBA){const wt=Q?ia:Zt.getTransfer(K);F===r.FLOAT&&(j=r.RGBA32F),F===r.HALF_FLOAT&&(j=r.RGBA16F),F===r.UNSIGNED_BYTE&&(j=wt===ie?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(R,x){let F;return R?x===null||x===Gn||x===ir?F=r.DEPTH24_STENCIL8:x===On?F=r.DEPTH32F_STENCIL8:x===nr&&(F=r.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gn||x===ir?F=r.DEPTH_COMPONENT24:x===On?F=r.DEPTH_COMPONENT32F:x===nr&&(F=r.DEPTH_COMPONENT16),F}function b(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Oe&&R.minFilter!==Ge?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function E(R){const x=R.target;x.removeEventListener("dispose",E),C(x),x.isVideoTexture&&h.delete(x)}function A(R){const x=R.target;x.removeEventListener("dispose",A),T(x)}function C(R){const x=n.get(R);if(x.__webglInit===void 0)return;const F=R.source,K=d.get(F);if(K){const Q=K[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(R),Object.keys(K).length===0&&d.delete(F)}n.remove(R)}function v(R){const x=n.get(R);r.deleteTexture(x.__webglTexture);const F=R.source,K=d.get(F);delete K[x.__cacheKey],a.memory.textures--}function T(R){const x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let Q=0;Q<x.__webglFramebuffer[K].length;Q++)r.deleteFramebuffer(x.__webglFramebuffer[K][Q]);else r.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)r.deleteFramebuffer(x.__webglFramebuffer[K]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=R.textures;for(let K=0,Q=F.length;K<Q;K++){const j=n.get(F[K]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(F[K])}n.remove(R)}let D=0;function N(){D=0}function O(){const R=D;return R>=i.maxTextures&&Rt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function q(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function X(R,x){const F=n.get(R);if(R.isVideoTexture&&Qt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const K=R.image;if(K===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{W(F,R,x);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+x)}function V(R,x){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){W(F,R,x);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+x)}function B(R,x){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){W(F,R,x);return}e.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+x)}function Z(R,x){const F=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){$(F,R,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+x)}const at={[Co]:r.REPEAT,[ti]:r.CLAMP_TO_EDGE,[Po]:r.MIRRORED_REPEAT},k={[Oe]:r.NEAREST,[sf]:r.NEAREST_MIPMAP_NEAREST,[Sr]:r.NEAREST_MIPMAP_LINEAR,[Ge]:r.LINEAR,[wa]:r.LINEAR_MIPMAP_NEAREST,[Hi]:r.LINEAR_MIPMAP_LINEAR},Y={[of]:r.NEVER,[df]:r.ALWAYS,[lf]:r.LESS,[Nl]:r.LEQUAL,[cf]:r.EQUAL,[Ol]:r.GEQUAL,[hf]:r.GREATER,[uf]:r.NOTEQUAL};function nt(R,x){if(x.type===On&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ge||x.magFilter===wa||x.magFilter===Sr||x.magFilter===Hi||x.minFilter===Ge||x.minFilter===wa||x.minFilter===Sr||x.minFilter===Hi)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,at[x.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,at[x.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,at[x.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,k[x.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,k[x.minFilter]),x.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Y[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Oe||x.minFilter!==Sr&&x.minFilter!==Hi||x.type===On&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function st(R,x){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",E));const K=x.source;let Q=d.get(K);Q===void 0&&(Q={},d.set(K,Q));const j=q(x);if(j!==R.__cacheKey){Q[j]===void 0&&(Q[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[j].usedTimes++;const wt=Q[R.__cacheKey];wt!==void 0&&(Q[R.__cacheKey].usedTimes--,wt.usedTimes===0&&v(x)),R.__cacheKey=j,R.__webglTexture=Q[j].texture}return F}function vt(R,x,F){return Math.floor(Math.floor(R/F)/x)}function Mt(R,x,F,K){const j=R.updateRanges;if(j.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,F,K,x.data);else{j.sort((et,ct)=>et.start-ct.start);let wt=0;for(let et=1;et<j.length;et++){const ct=j[wt],St=j[et],Et=ct.start+ct.count,lt=vt(St.start,x.width,4),kt=vt(ct.start,x.width,4);St.start<=Et+1&&lt===kt&&vt(St.start+St.count-1,x.width,4)===lt?ct.count=Math.max(ct.count,St.start+St.count-ct.start):(++wt,j[wt]=St)}j.length=wt+1;const ot=r.getParameter(r.UNPACK_ROW_LENGTH),bt=r.getParameter(r.UNPACK_SKIP_PIXELS),Lt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let et=0,ct=j.length;et<ct;et++){const St=j[et],Et=Math.floor(St.start/4),lt=Math.ceil(St.count/4),kt=Et%x.width,I=Math.floor(Et/x.width),ft=lt,it=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),e.texSubImage2D(r.TEXTURE_2D,0,kt,I,ft,it,F,K,x.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ot),r.pixelStorei(r.UNPACK_SKIP_PIXELS,bt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Lt)}}function W(R,x,F){let K=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=r.TEXTURE_3D);const Q=st(R,x),j=x.source;e.bindTexture(K,R.__webglTexture,r.TEXTURE0+F);const wt=n.get(j);if(j.version!==wt.__version||Q===!0){e.activeTexture(r.TEXTURE0+F);const ot=Zt.getPrimaries(Zt.workingColorSpace),bt=x.colorSpace===fi?null:Zt.getPrimaries(x.colorSpace),Lt=x.colorSpace===fi||ot===bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let et=g(x.image,!1,i.maxTextureSize);et=ue(x,et);const ct=s.convert(x.format,x.colorSpace),St=s.convert(x.type);let Et=S(x.internalFormat,ct,St,x.colorSpace,x.isVideoTexture);nt(K,x);let lt;const kt=x.mipmaps,I=x.isVideoTexture!==!0,ft=wt.__version===void 0||Q===!0,it=j.dataReady,gt=b(x,et);if(x.isDepthTexture)Et=y(x.format===Wi,x.type),ft&&(I?e.texStorage2D(r.TEXTURE_2D,1,Et,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,Et,et.width,et.height,0,ct,St,null));else if(x.isDataTexture)if(kt.length>0){I&&ft&&e.texStorage2D(r.TEXTURE_2D,gt,Et,kt[0].width,kt[0].height);for(let tt=0,J=kt.length;tt<J;tt++)lt=kt[tt],I?it&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,lt.width,lt.height,ct,St,lt.data):e.texImage2D(r.TEXTURE_2D,tt,Et,lt.width,lt.height,0,ct,St,lt.data);x.generateMipmaps=!1}else I?(ft&&e.texStorage2D(r.TEXTURE_2D,gt,Et,et.width,et.height),it&&Mt(x,et,ct,St)):e.texImage2D(r.TEXTURE_2D,0,Et,et.width,et.height,0,ct,St,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,Et,kt[0].width,kt[0].height,et.depth);for(let tt=0,J=kt.length;tt<J;tt++)if(lt=kt[tt],x.format!==Rn)if(ct!==null)if(I){if(it)if(x.layerUpdates.size>0){const rt=Qc(lt.width,lt.height,x.format,x.type);for(const Ft of x.layerUpdates){const de=lt.data.subarray(Ft*rt/lt.data.BYTES_PER_ELEMENT,(Ft+1)*rt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,Ft,lt.width,lt.height,1,ct,de)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,et.depth,ct,lt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,tt,Et,lt.width,lt.height,et.depth,0,lt.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?it&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,et.depth,ct,St,lt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,tt,Et,lt.width,lt.height,et.depth,0,ct,St,lt.data)}else{I&&ft&&e.texStorage2D(r.TEXTURE_2D,gt,Et,kt[0].width,kt[0].height);for(let tt=0,J=kt.length;tt<J;tt++)lt=kt[tt],x.format!==Rn?ct!==null?I?it&&e.compressedTexSubImage2D(r.TEXTURE_2D,tt,0,0,lt.width,lt.height,ct,lt.data):e.compressedTexImage2D(r.TEXTURE_2D,tt,Et,lt.width,lt.height,0,lt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?it&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,lt.width,lt.height,ct,St,lt.data):e.texImage2D(r.TEXTURE_2D,tt,Et,lt.width,lt.height,0,ct,St,lt.data)}else if(x.isDataArrayTexture)if(I){if(ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,Et,et.width,et.height,et.depth),it)if(x.layerUpdates.size>0){const tt=Qc(et.width,et.height,x.format,x.type);for(const J of x.layerUpdates){const rt=et.data.subarray(J*tt/et.data.BYTES_PER_ELEMENT,(J+1)*tt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,ct,St,rt)}x.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ct,St,et.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Et,et.width,et.height,et.depth,0,ct,St,et.data);else if(x.isData3DTexture)I?(ft&&e.texStorage3D(r.TEXTURE_3D,gt,Et,et.width,et.height,et.depth),it&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ct,St,et.data)):e.texImage3D(r.TEXTURE_3D,0,Et,et.width,et.height,et.depth,0,ct,St,et.data);else if(x.isFramebufferTexture){if(ft)if(I)e.texStorage2D(r.TEXTURE_2D,gt,Et,et.width,et.height);else{let tt=et.width,J=et.height;for(let rt=0;rt<gt;rt++)e.texImage2D(r.TEXTURE_2D,rt,Et,tt,J,0,ct,St,null),tt>>=1,J>>=1}}else if(kt.length>0){if(I&&ft){const tt=Tt(kt[0]);e.texStorage2D(r.TEXTURE_2D,gt,Et,tt.width,tt.height)}for(let tt=0,J=kt.length;tt<J;tt++)lt=kt[tt],I?it&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,ct,St,lt):e.texImage2D(r.TEXTURE_2D,tt,Et,ct,St,lt);x.generateMipmaps=!1}else if(I){if(ft){const tt=Tt(et);e.texStorage2D(r.TEXTURE_2D,gt,Et,tt.width,tt.height)}it&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct,St,et)}else e.texImage2D(r.TEXTURE_2D,0,Et,ct,St,et);m(x)&&p(K),wt.__version=j.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function $(R,x,F){if(x.image.length!==6)return;const K=st(R,x),Q=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+F);const j=n.get(Q);if(Q.version!==j.__version||K===!0){e.activeTexture(r.TEXTURE0+F);const wt=Zt.getPrimaries(Zt.workingColorSpace),ot=x.colorSpace===fi?null:Zt.getPrimaries(x.colorSpace),bt=x.colorSpace===fi||wt===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Lt=x.isCompressedTexture||x.image[0].isCompressedTexture,et=x.image[0]&&x.image[0].isDataTexture,ct=[];for(let J=0;J<6;J++)!Lt&&!et?ct[J]=g(x.image[J],!0,i.maxCubemapSize):ct[J]=et?x.image[J].image:x.image[J],ct[J]=ue(x,ct[J]);const St=ct[0],Et=s.convert(x.format,x.colorSpace),lt=s.convert(x.type),kt=S(x.internalFormat,Et,lt,x.colorSpace),I=x.isVideoTexture!==!0,ft=j.__version===void 0||K===!0,it=Q.dataReady;let gt=b(x,St);nt(r.TEXTURE_CUBE_MAP,x);let tt;if(Lt){I&&ft&&e.texStorage2D(r.TEXTURE_CUBE_MAP,gt,kt,St.width,St.height);for(let J=0;J<6;J++){tt=ct[J].mipmaps;for(let rt=0;rt<tt.length;rt++){const Ft=tt[rt];x.format!==Rn?Et!==null?I?it&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt,0,0,Ft.width,Ft.height,Et,Ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt,kt,Ft.width,Ft.height,0,Ft.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt,0,0,Ft.width,Ft.height,Et,lt,Ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt,kt,Ft.width,Ft.height,0,Et,lt,Ft.data)}}}else{if(tt=x.mipmaps,I&&ft){tt.length>0&&gt++;const J=Tt(ct[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,gt,kt,J.width,J.height)}for(let J=0;J<6;J++)if(et){I?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ct[J].width,ct[J].height,Et,lt,ct[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,ct[J].width,ct[J].height,0,Et,lt,ct[J].data);for(let rt=0;rt<tt.length;rt++){const de=tt[rt].image[J].image;I?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt+1,0,0,de.width,de.height,Et,lt,de.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt+1,kt,de.width,de.height,0,Et,lt,de.data)}}else{I?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Et,lt,ct[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,Et,lt,ct[J]);for(let rt=0;rt<tt.length;rt++){const Ft=tt[rt];I?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt+1,0,0,Et,lt,Ft.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt+1,kt,Et,lt,Ft.image[J])}}}m(x)&&p(r.TEXTURE_CUBE_MAP),j.__version=Q.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function pt(R,x,F,K,Q,j){const wt=s.convert(F.format,F.colorSpace),ot=s.convert(F.type),bt=S(F.internalFormat,wt,ot,F.colorSpace),Lt=n.get(x),et=n.get(F);if(et.__renderTarget=x,!Lt.__hasExternalTextures){const ct=Math.max(1,x.width>>j),St=Math.max(1,x.height>>j);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,bt,ct,St,x.depth,0,wt,ot,null):e.texImage2D(Q,j,bt,ct,St,0,wt,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Ae(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,Q,et.__webglTexture,0,L(x)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,Q,et.__webglTexture,j),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(R,x,F){if(r.bindRenderbuffer(r.RENDERBUFFER,R),x.depthBuffer){const K=x.depthTexture,Q=K&&K.isDepthTexture?K.type:null,j=y(x.stencilBuffer,Q),wt=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ae(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L(x),j,x.width,x.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,L(x),j,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,j,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,wt,r.RENDERBUFFER,R)}else{const K=x.textures;for(let Q=0;Q<K.length;Q++){const j=K[Q],wt=s.convert(j.format,j.colorSpace),ot=s.convert(j.type),bt=S(j.internalFormat,wt,ot,j.colorSpace);Ae(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L(x),bt,x.width,x.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,L(x),bt,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,bt,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function mt(R,x,F){const K=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(x.depthTexture);if(Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,x.depthTexture.addEventListener("dispose",E)),Q.__webglTexture===void 0){Q.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),nt(r.TEXTURE_CUBE_MAP,x.depthTexture);const Lt=s.convert(x.depthTexture.format),et=s.convert(x.depthTexture.type);let ct;x.depthTexture.format===si?ct=r.DEPTH_COMPONENT24:x.depthTexture.format===Wi&&(ct=r.DEPTH24_STENCIL8);for(let St=0;St<6;St++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ct,x.width,x.height,0,Lt,et,null)}}else X(x.depthTexture,0);const j=Q.__webglTexture,wt=L(x),ot=K?r.TEXTURE_CUBE_MAP_POSITIVE_X+F:r.TEXTURE_2D,bt=x.depthTexture.format===Wi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===si)Ae(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,bt,ot,j,0,wt):r.framebufferTexture2D(r.FRAMEBUFFER,bt,ot,j,0);else if(x.depthTexture.format===Wi)Ae(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,bt,ot,j,0,wt):r.framebufferTexture2D(r.FRAMEBUFFER,bt,ot,j,0);else throw new Error("Unknown depthTexture format")}function qt(R){const x=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=K}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let K=0;K<6;K++)mt(x.__webglFramebuffer[K],R,K);else{const K=R.texture.mipmaps;K&&K.length>0?mt(x.__webglFramebuffer[0],R,0):mt(x.__webglFramebuffer,R,0)}else if(F){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=r.createRenderbuffer(),Nt(x.__webglDepthbuffer[K],R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,j)}}else{const K=R.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Nt(x.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,j)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function be(R,x,F){const K=n.get(R);x!==void 0&&pt(K.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&qt(R)}function Kt(R){const x=R.texture,F=n.get(R),K=n.get(x);R.addEventListener("dispose",A);const Q=R.textures,j=R.isWebGLCubeRenderTarget===!0,wt=Q.length>1;if(wt||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=x.version,a.memory.textures++),j){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let bt=0;bt<x.mipmaps.length;bt++)F.__webglFramebuffer[ot][bt]=r.createFramebuffer()}else F.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)F.__webglFramebuffer[ot]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(wt)for(let ot=0,bt=Q.length;ot<bt;ot++){const Lt=n.get(Q[ot]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Ae(R)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){const bt=Q[ot];F.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);const Lt=s.convert(bt.format,bt.colorSpace),et=s.convert(bt.type),ct=S(bt.internalFormat,Lt,et,bt.colorSpace,R.isXRRenderTarget===!0),St=L(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,St,ct,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Nt(F.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),nt(r.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let bt=0;bt<x.mipmaps.length;bt++)pt(F.__webglFramebuffer[ot][bt],R,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt);else pt(F.__webglFramebuffer[ot],R,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(x)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ot=0,bt=Q.length;ot<bt;ot++){const Lt=Q[ot],et=n.get(Lt);let ct=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ct,et.__webglTexture),nt(ct,Lt),pt(F.__webglFramebuffer,R,Lt,r.COLOR_ATTACHMENT0+ot,ct,0),m(Lt)&&p(ct)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,K.__webglTexture),nt(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let bt=0;bt<x.mipmaps.length;bt++)pt(F.__webglFramebuffer[bt],R,x,r.COLOR_ATTACHMENT0,ot,bt);else pt(F.__webglFramebuffer,R,x,r.COLOR_ATTACHMENT0,ot,0);m(x)&&p(ot),e.unbindTexture()}R.depthBuffer&&qt(R)}function te(R){const x=R.textures;for(let F=0,K=x.length;F<K;F++){const Q=x[F];if(m(Q)){const j=M(R),wt=n.get(Q).__webglTexture;e.bindTexture(j,wt),p(j),e.unbindTexture()}}}const ae=[],zt=[];function we(R){if(R.samples>0){if(Ae(R)===!1){const x=R.textures,F=R.width,K=R.height;let Q=r.COLOR_BUFFER_BIT;const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=n.get(R),ot=x.length>1;if(ot)for(let Lt=0;Lt<x.length;Lt++)e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const bt=R.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Lt=0;Lt<x.length;Lt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,wt.__webglColorRenderbuffer[Lt]);const et=n.get(x[Lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,et,0)}r.blitFramebuffer(0,0,F,K,0,0,F,K,Q,r.NEAREST),l===!0&&(ae.length=0,zt.length=0,ae.push(r.COLOR_ATTACHMENT0+Lt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ae.push(j),zt.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,zt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let Lt=0;Lt<x.length;Lt++){e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,wt.__webglColorRenderbuffer[Lt]);const et=n.get(x[Lt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,et,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function L(R){return Math.min(i.maxSamples,R.samples)}function Ae(R){const x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Qt(R){const x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function ue(R,x){const F=R.colorSpace,K=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==As&&F!==fi&&(Zt.getTransfer(F)===ie?(K!==Rn||Q!==hn)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",F)),x}function Tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=B,this.setTextureCube=Z,this.rebindTextures=be,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function tv(r,t){function e(n,i=fi){let s;const a=Zt.getTransfer(i);if(n===hn)return r.UNSIGNED_BYTE;if(n===Dl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ll)return r.UNSIGNED_SHORT_5_5_5_1;if(n===iu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===su)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===eu)return r.BYTE;if(n===nu)return r.SHORT;if(n===nr)return r.UNSIGNED_SHORT;if(n===Pl)return r.INT;if(n===Gn)return r.UNSIGNED_INT;if(n===On)return r.FLOAT;if(n===ii)return r.HALF_FLOAT;if(n===ru)return r.ALPHA;if(n===au)return r.RGB;if(n===Rn)return r.RGBA;if(n===si)return r.DEPTH_COMPONENT;if(n===Wi)return r.DEPTH_STENCIL;if(n===ou)return r.RED;if(n===Il)return r.RED_INTEGER;if(n===ws)return r.RG;if(n===Fl)return r.RG_INTEGER;if(n===Ul)return r.RGBA_INTEGER;if(n===$r||n===Kr||n===Zr||n===Jr)if(a===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===$r)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===$r)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===Lo||n===Io||n===Fo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Do)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uo||n===No||n===Oo||n===Bo||n===zo||n===ko||n===Vo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Uo||n===No)return a===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Oo)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Bo)return s.COMPRESSED_R11_EAC;if(n===zo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ko)return s.COMPRESSED_RG11_EAC;if(n===Vo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Go||n===Ho||n===Wo||n===Xo||n===qo||n===Yo||n===jo||n===$o||n===Ko||n===Zo||n===Jo||n===Qo||n===tl||n===el)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Go)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ho)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wo)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xo)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qo)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jo)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$o)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ko)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zo)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jo)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qo)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return a===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nl||n===il||n===sl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===nl)return a===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rl||n===al||n===ol||n===ll)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===rl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===al)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ir?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nv=`
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

}`;class iv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new vu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Vt({vertexShader:ev,fragmentShader:nv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new _a(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sv extends Us{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const g=typeof XRWebGLBinding<"u",m=new iv,p={},M=e.getContextAttributes();let S=null,y=null;const b=[],E=[],A=new Gt;let C=null;const v=new cn;v.viewport=new ye;const T=new cn;T.viewport=new ye;const D=[v,T],N=new up;let O=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=b[W];return $===void 0&&($=new $a,b[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=b[W];return $===void 0&&($=new $a,b[W]=$),$.getGripSpace()},this.getHand=function(W){let $=b[W];return $===void 0&&($=new $a,b[W]=$),$.getHandSpace()};function X(W){const $=E.indexOf(W.inputSource);if($===-1)return;const pt=b[$];pt!==void 0&&(pt.update(W.inputSource,W.frame,c||a),pt.dispatchEvent({type:W.type,data:W.inputSource}))}function V(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",B);for(let W=0;W<b.length;W++){const $=E[W];$!==null&&(E[W]=null,b[W].disconnect($))}O=null,q=null,m.reset();for(const W in p)delete p[W];t.setRenderTarget(S),f=null,d=null,u=null,i=null,y=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",V),i.addEventListener("inputsourceschange",B),M.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Nt=null,mt=null;M.depth&&(mt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=M.stencil?Wi:si,Nt=M.stencil?ir:Gn);const qt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(qt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Vn(d.textureWidth,d.textureHeight,{format:Rn,type:hn,depthTexture:new ar(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,pt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Vn(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Mt.setContext(i),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(W){for(let $=0;$<W.removed.length;$++){const pt=W.removed[$],Nt=E.indexOf(pt);Nt>=0&&(E[Nt]=null,b[Nt].disconnect(pt))}for(let $=0;$<W.added.length;$++){const pt=W.added[$];let Nt=E.indexOf(pt);if(Nt===-1){for(let qt=0;qt<b.length;qt++)if(qt>=E.length){E.push(pt),Nt=qt;break}else if(E[qt]===null){E[qt]=pt,Nt=qt;break}if(Nt===-1)break}const mt=b[Nt];mt&&mt.connect(pt)}}const Z=new P,at=new P;function k(W,$,pt){Z.setFromMatrixPosition($.matrixWorld),at.setFromMatrixPosition(pt.matrixWorld);const Nt=Z.distanceTo(at),mt=$.projectionMatrix.elements,qt=pt.projectionMatrix.elements,be=mt[14]/(mt[10]-1),Kt=mt[14]/(mt[10]+1),te=(mt[9]+1)/mt[5],ae=(mt[9]-1)/mt[5],zt=(mt[8]-1)/mt[0],we=(qt[8]+1)/qt[0],L=be*zt,Ae=be*we,Qt=Nt/(-zt+we),ue=Qt*-zt;if($.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ue),W.translateZ(Qt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),mt[10]===-1)W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Tt=be+Qt,R=Kt+Qt,x=L-ue,F=Ae+(Nt-ue),K=te*Kt/R*Tt,Q=ae*Kt/R*Tt;W.projectionMatrix.makePerspective(x,F,K,Q,Tt,R),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Y(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let $=W.near,pt=W.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),N.near=T.near=v.near=$,N.far=T.far=v.far=pt,(O!==N.near||q!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,q=N.far),N.layers.mask=W.layers.mask|6,v.layers.mask=N.layers.mask&3,T.layers.mask=N.layers.mask&5;const Nt=W.parent,mt=N.cameras;Y(N,Nt);for(let qt=0;qt<mt.length;qt++)Y(mt[qt],Nt);mt.length===2?k(N,v,T):N.projectionMatrix.copy(v.projectionMatrix),nt(W,N,Nt)};function nt(W,$,pt){pt===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(pt.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=cl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(W){return p[W]};let st=null;function vt(W,$){if(h=$.getViewerPose(c||a),_=$,h!==null){const pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Nt=!1;pt.length!==N.cameras.length&&(N.cameras.length=0,Nt=!0);for(let Kt=0;Kt<pt.length;Kt++){const te=pt[Kt];let ae=null;if(f!==null)ae=f.getViewport(te);else{const we=u.getViewSubImage(d,te);ae=we.viewport,Kt===0&&(t.setRenderTargetTextures(y,we.colorTexture,we.depthStencilTexture),t.setRenderTarget(y))}let zt=D[Kt];zt===void 0&&(zt=new cn,zt.layers.enable(Kt),zt.viewport=new ye,D[Kt]=zt),zt.matrix.fromArray(te.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(te.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(ae.x,ae.y,ae.width,ae.height),Kt===0&&(N.matrix.copy(zt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Nt===!0&&N.cameras.push(zt)}const mt=i.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const Kt=u.getDepthInformation(pt[0]);Kt&&Kt.isValid&&Kt.texture&&m.init(Kt,i.renderState)}if(mt&&mt.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let Kt=0;Kt<pt.length;Kt++){const te=pt[Kt].camera;if(te){let ae=p[te];ae||(ae=new vu,p[te]=ae);const zt=u.getCameraImage(te);ae.sourceTexture=zt}}}}for(let pt=0;pt<b.length;pt++){const Nt=E[pt],mt=b[pt];Nt!==null&&mt!==void 0&&mt.update(Nt,$,c||a)}st&&st(W,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),_=null}const Mt=new bu;Mt.setAnimationLoop(vt),this.setAnimationLoop=function(W){st=W},this.dispose=function(){}}}const Ui=new Hn,rv=new re;function av(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,pu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),S=M.envMap,y=M.envMapRotation;S&&(m.envMap.value=S,Ui.copy(y),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(rv.makeRotationFromEuler(Ui)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ov(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const y=S.program;n.uniformBlockBinding(M,y)}function c(M,S){let y=i[M.id];y===void 0&&(_(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",m));const b=S.program;n.updateUBOMapping(M,b);const E=t.render.frame;s[M.id]!==E&&(d(M),s[M.id]=E)}function h(M){const S=u();M.__bindingPointIndex=S;const y=r.createBuffer(),b=M.__size,E=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,b,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const S=i[M.id],y=M.uniforms,b=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let E=0,A=y.length;E<A;E++){const C=Array.isArray(y[E])?y[E]:[y[E]];for(let v=0,T=C.length;v<T;v++){const D=C[v];if(f(D,E,v,b)===!0){const N=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let X=0;X<O.length;X++){const V=O[X],B=g(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,N+q,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):(V.toArray(D.__data,q),q+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,S,y,b){const E=M.value,A=S+"_"+y;if(b[A]===void 0)return typeof E=="number"||typeof E=="boolean"?b[A]=E:b[A]=E.clone(),!0;{const C=b[A];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return b[A]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function _(M){const S=M.uniforms;let y=0;const b=16;for(let A=0,C=S.length;A<C;A++){const v=Array.isArray(S[A])?S[A]:[S[A]];for(let T=0,D=v.length;T<D;T++){const N=v[T],O=Array.isArray(N.value)?N.value:[N.value];for(let q=0,X=O.length;q<X;q++){const V=O[q],B=g(V),Z=y%b,at=Z%B.boundary,k=Z+at;y+=at,k!==0&&b-k<B.storage&&(y+=b-k),N.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=B.storage}}}const E=y%b;return E>0&&(y+=b-E),M.__size=y,M.__cache={},this}function g(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Rt("WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}const lv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ln=null;function cv(){return Ln===null&&(Ln=new kf(lv,16,16,ws,ii),Ln.name="DFG_LUT",Ln.minFilter=Ge,Ln.magFilter=Ge,Ln.wrapS=ti,Ln.wrapT=ti,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}class hv{constructor(t={}){const{canvas:e=ff(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=hn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=f,m=new Set([Ul,Fl,Il]),p=new Set([hn,Gn,nr,ir,Dl,Ll]),M=new Uint32Array(4),S=new Int32Array(4);let y=null,b=null;const E=[],A=[];let C=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=Mn;let D=0,N=0,O=null,q=-1,X=null;const V=new ye,B=new ye;let Z=null;const at=new $t(0);let k=0,Y=e.width,nt=e.height,st=1,vt=null,Mt=null;const W=new ye(0,0,Y,nt),$=new ye(0,0,Y,nt);let pt=!1;const Nt=new kl;let mt=!1,qt=!1;const be=new re,Kt=new P,te=new ye,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function we(){return O===null?st:1}let L=n;function Ae(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cl}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",ee,!1),L===null){const U="webgl2";if(L=Ae(U,w),L===null)throw Ae(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw jt("WebGLRenderer: "+w.message),w}let Qt,ue,Tt,R,x,F,K,Q,j,wt,ot,bt,Lt,et,ct,St,Et,lt,kt,I,ft,it,gt,tt;function J(){Qt=new c0(L),Qt.init(),it=new tv(L,Qt),ue=new t0(L,Qt,t,it),Tt=new J_(L,Qt),ue.reversedDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),R=new d0(L),x=new O_,F=new Q_(L,Qt,Tt,x,ue,it,R),K=new n0(v),Q=new l0(v),j=new gp(L),gt=new Jg(L,j),wt=new h0(L,j,R,gt),ot=new p0(L,wt,j,R),kt=new f0(L,ue,F),St=new e0(x),bt=new N_(v,K,Q,Qt,ue,gt,St),Lt=new av(v,x),et=new z_,ct=new X_(Qt),lt=new Zg(v,K,Q,Tt,ot,_,l),Et=new K_(v,ot,ue),tt=new ov(L,R,ue,Tt),I=new Qg(L,Qt,R),ft=new u0(L,Qt,R),R.programs=bt.programs,v.capabilities=ue,v.extensions=Qt,v.properties=x,v.renderLists=et,v.shadowMap=Et,v.state=Tt,v.info=R}J(),g!==hn&&(C=new g0(g,e.width,e.height,i,s));const rt=new sv(v,L);this.xr=rt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Qt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Qt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(w){w!==void 0&&(st=w,this.setSize(Y,nt,!1))},this.getSize=function(w){return w.set(Y,nt)},this.setSize=function(w,U,H=!0){if(rt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,nt=U,e.width=Math.floor(w*st),e.height=Math.floor(U*st),H===!0&&(e.style.width=w+"px",e.style.height=U+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(Y*st,nt*st).floor()},this.setDrawingBufferSize=function(w,U,H){Y=w,nt=U,st=H,e.width=Math.floor(w*H),e.height=Math.floor(U*H),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(g===hn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(V)},this.getViewport=function(w){return w.copy(W)},this.setViewport=function(w,U,H,G){w.isVector4?W.set(w.x,w.y,w.z,w.w):W.set(w,U,H,G),Tt.viewport(V.copy(W).multiplyScalar(st).round())},this.getScissor=function(w){return w.copy($)},this.setScissor=function(w,U,H,G){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,U,H,G),Tt.scissor(B.copy($).multiplyScalar(st).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(w){Tt.setScissorTest(pt=w)},this.setOpaqueSort=function(w){vt=w},this.setTransparentSort=function(w){Mt=w},this.getClearColor=function(w){return w.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,H=!0){let G=0;if(w){let z=!1;if(O!==null){const ht=O.texture.format;z=m.has(ht)}if(z){const ht=O.texture.type,_t=p.has(ht),dt=lt.getClearColor(),yt=lt.getClearAlpha(),At=dt.r,Dt=dt.g,Ct=dt.b;_t?(M[0]=At,M[1]=Dt,M[2]=Ct,M[3]=yt,L.clearBufferuiv(L.COLOR,0,M)):(S[0]=At,S[1]=Dt,S[2]=Ct,S[3]=yt,L.clearBufferiv(L.COLOR,0,S))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT),H&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",ee,!1),lt.dispose(),et.dispose(),ct.dispose(),x.dispose(),K.dispose(),Q.dispose(),ot.dispose(),gt.dispose(),tt.dispose(),bt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",hc),rt.removeEventListener("sessionend",uc),Ei.stop()};function Ft(w){w.preventDefault(),Tc("WebGLRenderer: Context Lost."),T=!0}function de(){Tc("WebGLRenderer: Context Restored."),T=!1;const w=R.autoReset,U=Et.enabled,H=Et.autoUpdate,G=Et.needsUpdate,z=Et.type;J(),R.autoReset=w,Et.enabled=U,Et.autoUpdate=H,Et.needsUpdate=G,Et.type=z}function ee(w){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Dn(w){const U=w.target;U.removeEventListener("dispose",Dn),Xn(U)}function Xn(w){wd(w),x.remove(w)}function wd(w){const U=x.get(w).programs;U!==void 0&&(U.forEach(function(H){bt.releaseProgram(H)}),w.isShaderMaterial&&bt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,H,G,z,ht){U===null&&(U=ae);const _t=z.isMesh&&z.matrixWorld.determinant()<0,dt=Rd(w,U,H,G,z);Tt.setMaterial(G,_t);let yt=H.index,At=1;if(G.wireframe===!0){if(yt=wt.getWireframeAttribute(H),yt===void 0)return;At=2}const Dt=H.drawRange,Ct=H.attributes.position;let Ht=Dt.start*At,se=(Dt.start+Dt.count)*At;ht!==null&&(Ht=Math.max(Ht,ht.start*At),se=Math.min(se,(ht.start+ht.count)*At)),yt!==null?(Ht=Math.max(Ht,0),se=Math.min(se,yt.count)):Ct!=null&&(Ht=Math.max(Ht,0),se=Math.min(se,Ct.count));const xe=se-Ht;if(xe<0||xe===1/0)return;gt.setup(z,G,dt,H,yt);let Me,oe=I;if(yt!==null&&(Me=j.get(yt),oe=ft,oe.setIndex(Me)),z.isMesh)G.wireframe===!0?(Tt.setLineWidth(G.wireframeLinewidth*we()),oe.setMode(L.LINES)):oe.setMode(L.TRIANGLES);else if(z.isLine){let Pt=G.linewidth;Pt===void 0&&(Pt=1),Tt.setLineWidth(Pt*we()),z.isLineSegments?oe.setMode(L.LINES):z.isLineLoop?oe.setMode(L.LINE_LOOP):oe.setMode(L.LINE_STRIP)}else z.isPoints?oe.setMode(L.POINTS):z.isSprite&&oe.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)rr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))oe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Pt=z._multiDrawStarts,ne=z._multiDrawCounts,Jt=z._multiDrawCount,sn=yt?j.get(yt).bytesPerElement:1,Qi=x.get(G).currentProgram.getUniforms();for(let rn=0;rn<Jt;rn++)Qi.setValue(L,"_gl_DrawID",rn),oe.render(Pt[rn]/sn,ne[rn])}else if(z.isInstancedMesh)oe.renderInstances(Ht,xe,z.count);else if(H.isInstancedBufferGeometry){const Pt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ne=Math.min(H.instanceCount,Pt);oe.renderInstances(Ht,xe,ne)}else oe.render(Ht,xe)};function cc(w,U,H){w.transparent===!0&&w.side===Un&&w.forceSinglePass===!1?(w.side=Ze,w.needsUpdate=!0,yr(w,U,H),w.side=Cn,w.needsUpdate=!0,yr(w,U,H),w.side=Un):yr(w,U,H)}this.compile=function(w,U,H=null){H===null&&(H=w),b=ct.get(H),b.init(U),A.push(b),H.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),w!==H&&w.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights();const G=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ht=z.material;if(ht)if(Array.isArray(ht))for(let _t=0;_t<ht.length;_t++){const dt=ht[_t];cc(dt,H,z),G.add(dt)}else cc(ht,H,z),G.add(ht)}),b=A.pop(),G},this.compileAsync=function(w,U,H=null){const G=this.compile(w,U,H);return new Promise(z=>{function ht(){if(G.forEach(function(_t){x.get(_t).currentProgram.isReady()&&G.delete(_t)}),G.size===0){z(w);return}setTimeout(ht,10)}Qt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let ba=null;function Ad(w){ba&&ba(w)}function hc(){Ei.stop()}function uc(){Ei.start()}const Ei=new bu;Ei.setAnimationLoop(Ad),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(w){ba=w,rt.setAnimationLoop(w),w===null?Ei.stop():Ei.start()},rt.addEventListener("sessionstart",hc),rt.addEventListener("sessionend",uc),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const H=rt.enabled===!0&&rt.isPresenting===!0,G=C!==null&&(O===null||H)&&C.begin(v,O);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,O),b=ct.get(w,A.length),b.init(U),A.push(b),be.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Nt.setFromProjectionMatrix(be,Bn,U.reversedDepth),qt=this.localClippingEnabled,mt=St.init(this.clippingPlanes,qt),y=et.get(w,E.length),y.init(),E.push(y),rt.enabled===!0&&rt.isPresenting===!0){const _t=v.xr.getDepthSensingMesh();_t!==null&&Ta(_t,U,-1/0,v.sortObjects)}Ta(w,U,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(vt,Mt),zt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,zt&&lt.addToRenderList(y,w),this.info.render.frame++,mt===!0&&St.beginShadows();const z=b.state.shadowsArray;if(Et.render(z,w,U),mt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&C.hasRenderPass())===!1){const _t=y.opaque,dt=y.transmissive;if(b.setupLights(),U.isArrayCamera){const yt=U.cameras;if(dt.length>0)for(let At=0,Dt=yt.length;At<Dt;At++){const Ct=yt[At];fc(_t,dt,w,Ct)}zt&&lt.render(w);for(let At=0,Dt=yt.length;At<Dt;At++){const Ct=yt[At];dc(y,w,Ct,Ct.viewport)}}else dt.length>0&&fc(_t,dt,w,U),zt&&lt.render(w),dc(y,w,U)}O!==null&&N===0&&(F.updateMultisampleRenderTarget(O),F.updateRenderTargetMipmap(O)),G&&C.end(v),w.isScene===!0&&w.onAfterRender(v,w,U),gt.resetDefaultState(),q=-1,X=null,A.pop(),A.length>0?(b=A[A.length-1],mt===!0&&St.setGlobalState(v.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?y=E[E.length-1]:y=null};function Ta(w,U,H,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Nt.intersectsSprite(w)){G&&te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(be);const _t=ot.update(w),dt=w.material;dt.visible&&y.push(w,_t,dt,H,te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Nt.intersectsObject(w))){const _t=ot.update(w),dt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),te.copy(w.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),te.copy(_t.boundingSphere.center)),te.applyMatrix4(w.matrixWorld).applyMatrix4(be)),Array.isArray(dt)){const yt=_t.groups;for(let At=0,Dt=yt.length;At<Dt;At++){const Ct=yt[At],Ht=dt[Ct.materialIndex];Ht&&Ht.visible&&y.push(w,_t,Ht,H,te.z,Ct)}}else dt.visible&&y.push(w,_t,dt,H,te.z,null)}}const ht=w.children;for(let _t=0,dt=ht.length;_t<dt;_t++)Ta(ht[_t],U,H,G)}function dc(w,U,H,G){const{opaque:z,transmissive:ht,transparent:_t}=w;b.setupLightsView(H),mt===!0&&St.setGlobalState(v.clippingPlanes,H),G&&Tt.viewport(V.copy(G)),z.length>0&&Mr(z,U,H),ht.length>0&&Mr(ht,U,H),_t.length>0&&Mr(_t,U,H),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function fc(w,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){const Ht=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new Vn(1,1,{generateMipmaps:!0,type:Ht?ii:hn,minFilter:Hi,samples:ue.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const ht=b.state.transmissionRenderTarget[G.id],_t=G.viewport||V;ht.setSize(_t.z*v.transmissionResolutionScale,_t.w*v.transmissionResolutionScale);const dt=v.getRenderTarget(),yt=v.getActiveCubeFace(),At=v.getActiveMipmapLevel();v.setRenderTarget(ht),v.getClearColor(at),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),zt&&lt.render(H);const Dt=v.toneMapping;v.toneMapping=kn;const Ct=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),mt===!0&&St.setGlobalState(v.clippingPlanes,G),Mr(w,H,G),F.updateMultisampleRenderTarget(ht),F.updateRenderTargetMipmap(ht),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let se=0,xe=U.length;se<xe;se++){const Me=U[se],{object:oe,geometry:Pt,material:ne,group:Jt}=Me;if(ne.side===Un&&oe.layers.test(G.layers)){const sn=ne.side;ne.side=Ze,ne.needsUpdate=!0,pc(oe,H,G,Pt,ne,Jt),ne.side=sn,ne.needsUpdate=!0,Ht=!0}}Ht===!0&&(F.updateMultisampleRenderTarget(ht),F.updateRenderTargetMipmap(ht))}v.setRenderTarget(dt,yt,At),v.setClearColor(at,k),Ct!==void 0&&(G.viewport=Ct),v.toneMapping=Dt}function Mr(w,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ht=w.length;z<ht;z++){const _t=w[z],{object:dt,geometry:yt,group:At}=_t;let Dt=_t.material;Dt.allowOverride===!0&&G!==null&&(Dt=G),dt.layers.test(H.layers)&&pc(dt,U,H,yt,Dt,At)}}function pc(w,U,H,G,z,ht){w.onBeforeRender(v,U,H,G,z,ht),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(v,U,H,G,w,ht),z.transparent===!0&&z.side===Un&&z.forceSinglePass===!1?(z.side=Ze,z.needsUpdate=!0,v.renderBufferDirect(H,U,G,z,w,ht),z.side=Cn,z.needsUpdate=!0,v.renderBufferDirect(H,U,G,z,w,ht),z.side=Un):v.renderBufferDirect(H,U,G,z,w,ht),w.onAfterRender(v,U,H,G,z,ht)}function yr(w,U,H){U.isScene!==!0&&(U=ae);const G=x.get(w),z=b.state.lights,ht=b.state.shadowsArray,_t=z.state.version,dt=bt.getParameters(w,z.state,ht,U,H),yt=bt.getProgramCacheKey(dt);let At=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?Q:K).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,At===void 0&&(w.addEventListener("dispose",Dn),At=new Map,G.programs=At);let Dt=At.get(yt);if(Dt!==void 0){if(G.currentProgram===Dt&&G.lightsStateVersion===_t)return gc(w,dt),Dt}else dt.uniforms=bt.getUniforms(w),w.onBeforeCompile(dt,v),Dt=bt.acquireProgram(dt,yt),At.set(yt,Dt),G.uniforms=dt.uniforms;const Ct=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ct.clippingPlanes=St.uniform),gc(w,dt),G.needsLights=Pd(w),G.lightsStateVersion=_t,G.needsLights&&(Ct.ambientLightColor.value=z.state.ambient,Ct.lightProbe.value=z.state.probe,Ct.directionalLights.value=z.state.directional,Ct.directionalLightShadows.value=z.state.directionalShadow,Ct.spotLights.value=z.state.spot,Ct.spotLightShadows.value=z.state.spotShadow,Ct.rectAreaLights.value=z.state.rectArea,Ct.ltc_1.value=z.state.rectAreaLTC1,Ct.ltc_2.value=z.state.rectAreaLTC2,Ct.pointLights.value=z.state.point,Ct.pointLightShadows.value=z.state.pointShadow,Ct.hemisphereLights.value=z.state.hemi,Ct.directionalShadowMap.value=z.state.directionalShadowMap,Ct.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ct.spotShadowMap.value=z.state.spotShadowMap,Ct.spotLightMatrix.value=z.state.spotLightMatrix,Ct.spotLightMap.value=z.state.spotLightMap,Ct.pointShadowMap.value=z.state.pointShadowMap,Ct.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Dt,G.uniformsList=null,Dt}function mc(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Qr.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function gc(w,U){const H=x.get(w);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Rd(w,U,H,G,z){U.isScene!==!0&&(U=ae),F.resetTextureUnits();const ht=U.fog,_t=G.isMeshStandardMaterial?U.environment:null,dt=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:As,yt=(G.isMeshStandardMaterial?Q:K).get(G.envMap||_t),At=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Dt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!H.morphAttributes.position,Ht=!!H.morphAttributes.normal,se=!!H.morphAttributes.color;let xe=kn;G.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(xe=v.toneMapping);const Me=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,oe=Me!==void 0?Me.length:0,Pt=x.get(G),ne=b.state.lights;if(mt===!0&&(qt===!0||w!==X)){const Xe=w===X&&G.id===q;St.setState(G,w,Xe)}let Jt=!1;G.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==ne.state.version||Pt.outputColorSpace!==dt||z.isBatchedMesh&&Pt.batching===!1||!z.isBatchedMesh&&Pt.batching===!0||z.isBatchedMesh&&Pt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Pt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Pt.instancing===!1||!z.isInstancedMesh&&Pt.instancing===!0||z.isSkinnedMesh&&Pt.skinning===!1||!z.isSkinnedMesh&&Pt.skinning===!0||z.isInstancedMesh&&Pt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Pt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Pt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Pt.instancingMorph===!1&&z.morphTexture!==null||Pt.envMap!==yt||G.fog===!0&&Pt.fog!==ht||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==St.numPlanes||Pt.numIntersection!==St.numIntersection)||Pt.vertexAlphas!==At||Pt.vertexTangents!==Dt||Pt.morphTargets!==Ct||Pt.morphNormals!==Ht||Pt.morphColors!==se||Pt.toneMapping!==xe||Pt.morphTargetsCount!==oe)&&(Jt=!0):(Jt=!0,Pt.__version=G.version);let sn=Pt.currentProgram;Jt===!0&&(sn=yr(G,U,z));let Qi=!1,rn=!1,Bs=!1;const fe=sn.getUniforms(),je=Pt.uniforms;if(Tt.useProgram(sn.program)&&(Qi=!0,rn=!0,Bs=!0),G.id!==q&&(q=G.id,rn=!0),Qi||X!==w){Tt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),fe.setValue(L,"projectionMatrix",w.projectionMatrix),fe.setValue(L,"viewMatrix",w.matrixWorldInverse);const $e=fe.map.cameraPosition;$e!==void 0&&$e.setValue(L,Kt.setFromMatrixPosition(w.matrixWorld)),ue.logarithmicDepthBuffer&&fe.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&fe.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,rn=!0,Bs=!0)}if(Pt.needsLights&&(ne.state.directionalShadowMap.length>0&&fe.setValue(L,"directionalShadowMap",ne.state.directionalShadowMap,F),ne.state.spotShadowMap.length>0&&fe.setValue(L,"spotShadowMap",ne.state.spotShadowMap,F),ne.state.pointShadowMap.length>0&&fe.setValue(L,"pointShadowMap",ne.state.pointShadowMap,F)),z.isSkinnedMesh){fe.setOptional(L,z,"bindMatrix"),fe.setOptional(L,z,"bindMatrixInverse");const Xe=z.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),fe.setValue(L,"boneTexture",Xe.boneTexture,F))}z.isBatchedMesh&&(fe.setOptional(L,z,"batchingTexture"),fe.setValue(L,"batchingTexture",z._matricesTexture,F),fe.setOptional(L,z,"batchingIdTexture"),fe.setValue(L,"batchingIdTexture",z._indirectTexture,F),fe.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&fe.setValue(L,"batchingColorTexture",z._colorsTexture,F));const _n=H.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&kt.update(z,H,sn),(rn||Pt.receiveShadow!==z.receiveShadow)&&(Pt.receiveShadow=z.receiveShadow,fe.setValue(L,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(je.envMap.value=yt,je.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(je.envMapIntensity.value=U.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=cv()),rn&&(fe.setValue(L,"toneMappingExposure",v.toneMappingExposure),Pt.needsLights&&Cd(je,Bs),ht&&G.fog===!0&&Lt.refreshFogUniforms(je,ht),Lt.refreshMaterialUniforms(je,G,st,nt,b.state.transmissionRenderTarget[w.id]),Qr.upload(L,mc(Pt),je,F)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Qr.upload(L,mc(Pt),je,F),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&fe.setValue(L,"center",z.center),fe.setValue(L,"modelViewMatrix",z.modelViewMatrix),fe.setValue(L,"normalMatrix",z.normalMatrix),fe.setValue(L,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Xe=G.uniformsGroups;for(let $e=0,Ea=Xe.length;$e<Ea;$e++){const wi=Xe[$e];tt.update(wi,sn),tt.bind(wi,sn)}}return sn}function Cd(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Pd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(w,U,H){const G=x.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),x.get(w.texture).__webglTexture=U,x.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){const H=x.get(w);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const Dd=L.createFramebuffer();this.setRenderTarget=function(w,U=0,H=0){O=w,D=U,N=H;let G=null,z=!1,ht=!1;if(w){const dt=x.get(w);if(dt.__useDefaultFramebuffer!==void 0){Tt.bindFramebuffer(L.FRAMEBUFFER,dt.__webglFramebuffer),V.copy(w.viewport),B.copy(w.scissor),Z=w.scissorTest,Tt.viewport(V),Tt.scissor(B),Tt.setScissorTest(Z),q=-1;return}else if(dt.__webglFramebuffer===void 0)F.setupRenderTarget(w);else if(dt.__hasExternalTextures)F.rebindTextures(w,x.get(w.texture).__webglTexture,x.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Dt=w.depthTexture;if(dt.__boundDepthTexture!==Dt){if(Dt!==null&&x.has(Dt)&&(w.width!==Dt.image.width||w.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(w)}}const yt=w.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(ht=!0);const At=x.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(At[U])?G=At[U][H]:G=At[U],z=!0):w.samples>0&&F.useMultisampledRTT(w)===!1?G=x.get(w).__webglMultisampledFramebuffer:Array.isArray(At)?G=At[H]:G=At,V.copy(w.viewport),B.copy(w.scissor),Z=w.scissorTest}else V.copy(W).multiplyScalar(st).floor(),B.copy($).multiplyScalar(st).floor(),Z=pt;if(H!==0&&(G=Dd),Tt.bindFramebuffer(L.FRAMEBUFFER,G)&&Tt.drawBuffers(w,G),Tt.viewport(V),Tt.scissor(B),Tt.setScissorTest(Z),z){const dt=x.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,dt.__webglTexture,H)}else if(ht){const dt=U;for(let yt=0;yt<w.textures.length;yt++){const At=x.get(w.textures[yt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+yt,At.__webglTexture,H,dt)}}else if(w!==null&&H!==0){const dt=x.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dt.__webglTexture,H)}q=-1},this.readRenderTargetPixels=function(w,U,H,G,z,ht,_t,dt=0){if(!(w&&w.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=x.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt){Tt.bindFramebuffer(L.FRAMEBUFFER,yt);try{const At=w.textures[dt],Dt=At.format,Ct=At.type;if(!ue.textureFormatReadable(Dt)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Ct)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&H>=0&&H<=w.height-z&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+dt),L.readPixels(U,H,G,z,it.convert(Dt),it.convert(Ct),ht))}finally{const At=O!==null?x.get(O).__webglFramebuffer:null;Tt.bindFramebuffer(L.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(w,U,H,G,z,ht,_t,dt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=x.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt)if(U>=0&&U<=w.width-G&&H>=0&&H<=w.height-z){Tt.bindFramebuffer(L.FRAMEBUFFER,yt);const At=w.textures[dt],Dt=At.format,Ct=At.type;if(!ue.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ht),L.bufferData(L.PIXEL_PACK_BUFFER,ht.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+dt),L.readPixels(U,H,G,z,it.convert(Dt),it.convert(Ct),0);const se=O!==null?x.get(O).__webglFramebuffer:null;Tt.bindFramebuffer(L.FRAMEBUFFER,se);const xe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await pf(L,xe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ht),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ht),L.deleteBuffer(Ht),L.deleteSync(xe),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,H=0){const G=Math.pow(2,-H),z=Math.floor(w.image.width*G),ht=Math.floor(w.image.height*G),_t=U!==null?U.x:0,dt=U!==null?U.y:0;F.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,_t,dt,z,ht),Tt.unbindTexture()};const Ld=L.createFramebuffer(),Id=L.createFramebuffer();this.copyTextureToTexture=function(w,U,H=null,G=null,z=0,ht=null){ht===null&&(z!==0?(rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=z,z=0):ht=0);let _t,dt,yt,At,Dt,Ct,Ht,se,xe;const Me=w.isCompressedTexture?w.mipmaps[ht]:w.image;if(H!==null)_t=H.max.x-H.min.x,dt=H.max.y-H.min.y,yt=H.isBox3?H.max.z-H.min.z:1,At=H.min.x,Dt=H.min.y,Ct=H.isBox3?H.min.z:0;else{const _n=Math.pow(2,-z);_t=Math.floor(Me.width*_n),dt=Math.floor(Me.height*_n),w.isDataArrayTexture?yt=Me.depth:w.isData3DTexture?yt=Math.floor(Me.depth*_n):yt=1,At=0,Dt=0,Ct=0}G!==null?(Ht=G.x,se=G.y,xe=G.z):(Ht=0,se=0,xe=0);const oe=it.convert(U.format),Pt=it.convert(U.type);let ne;U.isData3DTexture?(F.setTexture3D(U,0),ne=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(F.setTexture2DArray(U,0),ne=L.TEXTURE_2D_ARRAY):(F.setTexture2D(U,0),ne=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Jt=L.getParameter(L.UNPACK_ROW_LENGTH),sn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Qi=L.getParameter(L.UNPACK_SKIP_PIXELS),rn=L.getParameter(L.UNPACK_SKIP_ROWS),Bs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Me.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Me.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,At),L.pixelStorei(L.UNPACK_SKIP_ROWS,Dt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ct);const fe=w.isDataArrayTexture||w.isData3DTexture,je=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const _n=x.get(w),Xe=x.get(U),$e=x.get(_n.__renderTarget),Ea=x.get(Xe.__renderTarget);Tt.bindFramebuffer(L.READ_FRAMEBUFFER,$e.__webglFramebuffer),Tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ea.__webglFramebuffer);for(let wi=0;wi<yt;wi++)fe&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,x.get(w).__webglTexture,z,Ct+wi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,x.get(U).__webglTexture,ht,xe+wi)),L.blitFramebuffer(At,Dt,_t,dt,Ht,se,_t,dt,L.DEPTH_BUFFER_BIT,L.NEAREST);Tt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||x.has(w)){const _n=x.get(w),Xe=x.get(U);Tt.bindFramebuffer(L.READ_FRAMEBUFFER,Ld),Tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Id);for(let $e=0;$e<yt;$e++)fe?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_n.__webglTexture,z,Ct+$e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_n.__webglTexture,z),je?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xe.__webglTexture,ht,xe+$e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xe.__webglTexture,ht),z!==0?L.blitFramebuffer(At,Dt,_t,dt,Ht,se,_t,dt,L.COLOR_BUFFER_BIT,L.NEAREST):je?L.copyTexSubImage3D(ne,ht,Ht,se,xe+$e,At,Dt,_t,dt):L.copyTexSubImage2D(ne,ht,Ht,se,At,Dt,_t,dt);Tt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else je?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(ne,ht,Ht,se,xe,_t,dt,yt,oe,Pt,Me.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(ne,ht,Ht,se,xe,_t,dt,yt,oe,Me.data):L.texSubImage3D(ne,ht,Ht,se,xe,_t,dt,yt,oe,Pt,Me):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ht,Ht,se,_t,dt,oe,Pt,Me.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ht,Ht,se,Me.width,Me.height,oe,Me.data):L.texSubImage2D(L.TEXTURE_2D,ht,Ht,se,_t,dt,oe,Pt,Me);L.pixelStorei(L.UNPACK_ROW_LENGTH,Jt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,sn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qi),L.pixelStorei(L.UNPACK_SKIP_ROWS,rn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Bs),ht===0&&U.generateMipmaps&&L.generateMipmap(ne),Tt.unbindTexture()},this.initRenderTarget=function(w){x.get(w).__webglFramebuffer===void 0&&F.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?F.setTextureCube(w,0):w.isData3DTexture?F.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?F.setTexture2DArray(w,0):F.setTexture2D(w,0),Tt.unbindTexture()},this.resetState=function(){D=0,N=0,O=null,Tt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}class uv{constructor(){this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.triggerResize&&this.triggerResize()})}}class dv{constructor(){this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,this.clock=new Su,window.requestAnimationFrame(()=>this.tick())}tick(){const t=Date.now();this.delta=t-this.current,this.current=t,this.elapsed=this.clock.getElapsedTime(),this.triggerTick&&this.triggerTick(),window.requestAnimationFrame(()=>this.tick())}}function Jn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ru(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Cs={duration:.5,overwrite:!1,delay:0},Xl,Be,me,Sn=1e8,he=1/Sn,pl=Math.PI*2,fv=pl/4,pv=0,Cu=Math.sqrt,mv=Math.cos,gv=Math.sin,Ue=function(t){return typeof t=="string"},Se=function(t){return typeof t=="function"},ri=function(t){return typeof t=="number"},ql=function(t){return typeof t>"u"},Wn=function(t){return typeof t=="object"},Je=function(t){return t!==!1},Yl=function(){return typeof window<"u"},Yr=function(t){return Se(t)||Ue(t)},Pu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},We=Array.isArray,_v=/random\([^)]+\)/g,vv=/,\s*/g,bh=/(?:-?\.?\d|\.)+/gi,Du=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_s=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,lo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Lu=/[+-]=-?[.\d]+/,xv=/[^,'"\[\]\s]+/gi,Mv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_e,In,ml,jl,mn={},la={},Iu,Fu=function(t){return(la=Ps(t,mn))&&nn},$l=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},or=function(t,e){return!e&&console.warn(t)},Uu=function(t,e){return t&&(mn[t]=e)&&la&&(la[t]=e)||mn},lr=function(){return 0},yv={suppressEvents:!0,isStart:!0,kill:!1},ta={suppressEvents:!0,kill:!1},Sv={suppressEvents:!0},Kl={},xi=[],gl={},Nu,ln={},co={},Th=30,ea=[],Zl="",Jl=function(t){var e=t[0],n,i;if(Wn(e)||Se(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ea.length;i--&&!ea[i].targetTest(e););n=ea[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new ad(t[i],n)))||t.splice(i,1);return t},qi=function(t){return t._gsap||Jl(bn(t))[0]._gsap},Ou=function(t,e,n){return(n=t[e])&&Se(n)?t[e]():ql(n)&&t.getAttribute&&t.getAttribute(e)||n},Qe=function(t,e){return(t=t.split(",")).forEach(e)||t},Te=function(t){return Math.round(t*1e5)/1e5||0},ge=function(t){return Math.round(t*1e7)/1e7||0},ys=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},bv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ca=function(){var t=xi.length,e=xi.slice(0),n,i;for(gl={},xi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ql=function(t){return!!(t._initted||t._startAt||t.add)},Bu=function(t,e,n,i){xi.length&&!Be&&ca(),t.render(e,n,!!(Be&&e<0&&Ql(t))),xi.length&&!Be&&ca()},zu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(xv).length<2?e:Ue(t)?t.trim():t},ku=function(t){return t},gn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Tv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ps=function(t,e){for(var n in e)t[n]=e[n];return t},Eh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Wn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ha=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Qs=function(t){var e=t.parent||_e,n=t.keyframes?Tv(We(t.keyframes)):gn;if(Je(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Ev=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Vu=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Ma=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},yi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Yi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},wv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},_l=function(t,e,n,i){return t._startAt&&(Be?t._startAt.revert(ta):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Av=function r(t){return!t||t._ts&&r(t.parent)},wh=function(t){return t._repeat?Ds(t._tTime,t=t.duration()+t._rDelay)*t:0},Ds=function(t,e){var n=Math.floor(t=ge(t/e));return t&&n===t?n-1:n},ua=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ya=function(t){return t._end=ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||he)||0))},Sa=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ge(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ya(t),n._dirty||Yi(n,t)),t},Gu=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ua(t.rawTime(),e),(!e._dur||xr(0,e.totalDuration(),n)-e._tTime>he)&&e.render(n,!0)),Yi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-he}},Nn=function(t,e,n,i){return e.parent&&yi(e),e._start=ge((ri(n)?n:n||t!==_e?xn(t,n,e):t._time)+e._delay),e._end=ge(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Vu(t,e,"_first","_last",t._sort?"_start":0),vl(e)||(t._recent=e),i||Gu(t,e),t._ts<0&&Sa(t,t._tTime),t},Hu=function(t,e){return(mn.ScrollTrigger||$l("scrollTrigger",e))&&mn.ScrollTrigger.create(e,t)},Wu=function(t,e,n,i,s){if(ec(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Be&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Nu!==un.frame)return xi.push(t),t._lazy=[s,i],1},Rv=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},vl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Cv=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&Rv(t)&&!(!t._initted&&vl(t))||(t._ts<0||t._dp._ts<0)&&!vl(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=xr(0,t._tDur,e),h=Ds(l,o),t._yoyo&&h&1&&(a=1-a),h!==Ds(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Be||i||t._zTime===he||!e&&t._zTime){if(!t._initted&&Wu(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?he:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&_l(t,e,n,!0),t._onUpdate&&!n&&dn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&dn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&yi(t,1),!n&&!Be&&(dn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Pv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ls=function(t,e,n,i){var s=t._repeat,a=ge(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:ge(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Sa(t,t._tTime=t._tDur*o),t.parent&&ya(t),n||Yi(t.parent,t),t},Ah=function(t){return t instanceof Ye?Yi(t):Ls(t,t._dur)},Dv={_start:0,endTime:lr,totalDuration:lr},xn=function r(t,e,n){var i=t.labels,s=t._recent||Dv,a=t.duration()>=Sn?s.endTime(!1):t._dur,o,l,c;return Ue(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(We(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},tr=function(t,e,n){var i=ri(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Je(l.vars.inherit)&&l.parent;a.immediateRender=Je(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Ce(e[0],a,e[s+1])},Ti=function(t,e){return t||t===0?e(t):e},xr=function(t,e,n){return n<t?t:n>e?e:n},Ve=function(t,e){return!Ue(t)||!(e=Mv.exec(t))?"":e[1]},Lv=function(t,e,n){return Ti(n,function(i){return xr(t,e,i)})},xl=[].slice,Xu=function(t,e){return t&&Wn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Wn(t[0]))&&!t.nodeType&&t!==In},Iv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ue(i)&&!e||Xu(i,1)?(s=n).push.apply(s,bn(i)):n.push(i)})||n},bn=function(t,e,n){return me&&!e&&me.selector?me.selector(t):Ue(t)&&!n&&(ml||!Is())?xl.call((e||jl).querySelectorAll(t),0):We(t)?Iv(t,n):Xu(t)?xl.call(t,0):t?[t]:[]},Ml=function(t){return t=bn(t)[0]||or("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return bn(e,n.querySelectorAll?n:n===t?or("Invalid scope")||jl.createElement("div"):t)}},qu=function(t){return t.sort(function(){return .5-Math.random()})},Yu=function(t){if(Se(t))return t;var e=Wn(t)?t:{each:t},n=ji(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return Ue(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||e).length,m=a[g],p,M,S,y,b,E,A,C,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,Sn])[1],!v){for(A=-Sn;A<(A=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(m=a[g]=[],p=l?Math.min(v,g)*h-.5:i%v,M=v===Sn?0:l?g*u/v-.5:i/v|0,A=0,C=Sn,E=0;E<g;E++)S=E%v-p,y=M-(E/v|0),m[E]=b=c?Math.abs(c==="y"?y:S):Cu(S*S+y*y),b>A&&(A=b),b<C&&(C=b);i==="random"&&qu(m),m.max=A-C,m.min=C,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Ve(e.amount||e.each)||0,n=n&&g<0?id(n):n}return g=(m[d]-m.min)/m.max||0,ge(m.b+(n?n(g):g)*m.v)+m.u}},yl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ge(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ri(n)?0:Ve(n))}},ju=function(t,e){var n=We(t),i,s;return!n&&Wn(t)&&(i=n=t.radius||Sn,t.values?(t=bn(t.values),(s=!ri(t[0]))&&(i*=i)):t=yl(t.increment)),Ti(e,n?Se(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Sn,h=0,u=t.length,d,f;u--;)s?(d=t[u].x-o,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:a,s||h===a||ri(a)?h:h+Ve(a)}:yl(t))},$u=function(t,e,n,i){return Ti(We(t)?!e:n===!0?!!(n=0):!i,function(){return We(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Fv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Uv=function(t,e){return function(n){return t(parseFloat(n))+(e||Ve(n))}},Nv=function(t,e,n){return Zu(t,e,0,1,n)},Ku=function(t,e,n){return Ti(n,function(i){return t[~~e(i)]})},Ov=function r(t,e,n){var i=e-t;return We(t)?Ku(t,r(0,t.length),e):Ti(n,function(s){return(i+(s-t)%i)%i+t})},Bv=function r(t,e,n){var i=e-t,s=i*2;return We(t)?Ku(t,r(0,t.length-1),e):Ti(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},cr=function(t){return t.replace(_v,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(vv);return $u(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Zu=function(t,e,n,i,s){var a=e-t,o=i-n;return Ti(s,function(l){return n+((l-t)/a*o||0)})},zv=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=Ue(t),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(We(t)&&!We(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=Ps(We(t)?[]:{},t));if(!h){for(l in e)tc.call(o,t,l,"get",e[l]);s=function(_){return sc(_,o)||(a?t.p:t)}}}return Ti(n,s)},Rh=function(t,e,n){var i=t.labels,s=Sn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},dn=function(t,e,n){var i=t.vars,s=i[e],a=me,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&xi.length&&ca(),o&&(me=o),h=l?s.apply(c,l):s.call(c),me=a,h},Ks=function(t){return yi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Be),t.progress()<1&&dn(t,"onInterrupt"),t},vs,Ju=[],Qu=function(t){if(t)if(t=!t.name&&t.default||t,Yl()||t.headless){var e=t.name,n=Se(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:lr,render:sc,add:tc,kill:ex,modifier:tx,rawVars:0},a={targetTest:0,get:0,getSetter:ic,aliases:{},register:0};if(Is(),t!==i){if(ln[e])return;gn(i,gn(ha(t,s),a)),Ps(i.prototype,Ps(s,ha(t,a))),ln[i.prop=e]=i,t.targetTest&&(ea.push(i),Kl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Uu(e,i),t.register&&t.register(nn,i,tn)}else Ju.push(t)},le=255,Zs={aqua:[0,le,le],lime:[0,le,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,le],navy:[0,0,128],white:[le,le,le],olive:[128,128,0],yellow:[le,le,0],orange:[le,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[le,0,0],pink:[le,192,203],cyan:[0,le,le],transparent:[le,le,le,0]},ho=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*le+.5|0},td=function(t,e,n){var i=t?ri(t)?[t>>16,t>>8&le,t&le]:0:Zs.black,s,a,o,l,c,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Zs[t])i=Zs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&le,i&le,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&le,t&le]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(bh),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=ho(l+1/3,s,a),i[1]=ho(l,s,a),i[2]=ho(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Du),n&&i.length<4&&(i[3]=1),i}else i=t.match(bh)||Zs.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/le,a=i[1]/le,o=i[2]/le,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(a-o)/f+(a<o?6:0):u===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},ed=function(t){var e=[],n=[],i=-1;return t.split(Mi).forEach(function(s){var a=s.match(_s)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Ch=function(t,e,n){var i="",s=(t+i).match(Mi),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=td(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=ed(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Mi,"1").split(_s),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Mi),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},Mi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Zs)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),kv=/hsl[a]?\(/,nd=function(t){var e=t.join(" "),n;if(Mi.lastIndex=0,Mi.test(e))return n=kv.test(e),t[1]=Ch(t[1],n),t[0]=Ch(t[0],n,ed(t[1])),!0},hr,un=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,d,f,_=function g(m){var p=r()-i,M=m===!0,S,y,b,E;if((p>t||p<0)&&(n+=p-e),i+=p,b=i-n,S=b-a,(S>0||M)&&(E=++u.frame,d=b-u.time*1e3,u.time=b=b/1e3,a+=S+(S>=s?4:s-S),y=1),M||(l=c(g)),y)for(f=0;f<o.length;f++)o[f](b,d,E,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Iu&&(!ml&&Yl()&&(In=ml=window,jl=In.document||{},mn.gsap=nn,(In.gsapVersions||(In.gsapVersions=[])).push(nn.version),Fu(la||In.GreenSockGlobals||!In.gsap&&In||{}),Ju.forEach(Qu)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},hr=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),hr=0,c=lr},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,M){var S=p?function(y,b,E,A){m(y,b,E,A),u.remove(S)}:m;return u.remove(m),o[M?"unshift":"push"](S),Is(),S},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u})(),Is=function(){return!hr&&un.wake()},Yt={},Vv=/^[\d.\-M][\d.\-,\s]/,Gv=/["']/g,Hv=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Gv,"").trim():+c,i=l.substr(o+1).trim();return e},Wv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Xv=function(t){var e=(t+"").split("("),n=Yt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Hv(e[1])]:Wv(t).split(",").map(zu)):Yt._CE&&Vv.test(t)?Yt._CE("",t):n},id=function(t){return function(e){return 1-t(1-e)}},sd=function r(t,e){for(var n=t._first,i;n;)n instanceof Ye?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},ji=function(t,e){return t&&(Se(t)?t:Yt[t]||Xv(t))||e},Ji=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Qe(t,function(o){Yt[o]=mn[o]=s,Yt[a=o.toLowerCase()]=n;for(var l in s)Yt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Yt[o+"."+l]=s[l]}),s},rd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},uo=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/pl*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*gv((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:rd(o);return s=pl/s,l.config=function(c,h){return r(t,c,h)},l},fo=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:rd(n);return i.config=function(s){return r(t,s)},i};Qe("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Ji(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Yt.Linear.easeNone=Yt.none=Yt.Linear.easeIn;Ji("Elastic",uo("in"),uo("out"),uo());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Ji("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ji("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ji("Circ",function(r){return-(Cu(1-r*r)-1)});Ji("Sine",function(r){return r===1?1:-mv(r*fv)+1});Ji("Back",fo("in"),fo("out"),fo());Yt.SteppedEase=Yt.steps=mn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-he;return function(o){return((i*xr(0,a,o)|0)+s)*n}}};Cs.ease=Yt["quad.out"];Qe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Zl+=r+","+r+"Params,"});var ad=function(t,e){this.id=pv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ou,this.set=e?e.getSetter:ic},ur=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ls(this,+e.duration,1,1),this.data=e.data,me&&(this._ctx=me,me.data.push(this)),hr||un.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ls(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Is(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Sa(this,n),!s._dp||s.parent||Gu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Nn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===he||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Bu(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+wh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+wh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ds(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-he?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ua(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-he?0:this._rts,this.totalTime(xr(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ya(this),wv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Is(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==he&&(this._tTime-=he)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ge(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Nn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Je(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ua(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Sv);var i=Be;return Be=n,Ql(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Be=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ah(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ah(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(xn(this,n),Je(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Je(i)),this._dur||(this._zTime=-he),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-he:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-he,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-he)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Se(n)?n:ku,l=function(){var h=i.then;i.then=null,s&&s(),Se(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Ks(this)},r})();gn(ur.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-he,_prom:0,_ps:!1,_rts:1});var Ye=(function(r){Ru(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Je(n.sortChildren),_e&&Nn(n.parent||_e,Jn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Hu(Jn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return tr(0,arguments,this),this},e.from=function(i,s,a){return tr(1,arguments,this),this},e.fromTo=function(i,s,a,o){return tr(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Qs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ce(i,s,xn(this,a),1),this},e.call=function(i,s,a){return Nn(this,Ce.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Ce(i,a,xn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Qs(a).immediateRender=Je(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,Qs(o).immediateRender=Je(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ge(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,M,S,y,b,E,A;if(this!==_e&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,y=this._start,S=this._ts,p=!S,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=ge(h%m),h===l?(g=this._repeat,d=c):(b=ge(h/m),g=~~b,g&&g===b&&(d=c,g--),d>c&&(d=c)),b=Ds(this._tTime,m),!o&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),E&&g&1&&(d=c-d,A=1),g!==b&&!this._lock){var C=E&&b&1,v=C===(E&&g&1);if(g<b&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(A?0:ge(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&dn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;sd(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Pv(this,ge(o),ge(d)),M&&(h-=d-(d=M._start))),this._tTime=h,this._time=d,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!b&&(dn(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){M=0,_&&(h+=this._zTime=-he);break}}f=_}else{f=this._last;for(var T=i<0?i:d;f;){if(_=f._prev,(f._act||T<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(T-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(T-f._start)*f._ts,s,a||Be&&Ql(f)),d!==this._time||!this._ts&&!p){M=0,_&&(h+=this._zTime=T?-he:he);break}}f=_}}if(M&&!s&&(this.pause(),M.render(d>=o?0:-he)._zTime=d>=o?1:-1,this._ts))return this._start=y,ya(this),this.render(i,s,a);this._onUpdate&&!s&&dn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&yi(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(dn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(ri(s)||(s=xn(this,s,i)),!(i instanceof ur)){if(We(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ue(i))return this.addLabel(i,s);if(Se(i))i=Ce.delayedCall(0,i);else return this}return this!==i?Nn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Sn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ce?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Ue(i)?this.removeLabel(i):Se(i)?this.killTweensOf(i):(i.parent===this&&Ma(this,i),i===this._recent&&(this._recent=this._last),Yi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ge(un.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=xn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Ce.delayedCall(0,s||lr,a);return o.data="isPause",this._hasPause=1,Nn(this,o,xn(this,i))},e.removePause=function(i){var s=this._first;for(i=xn(this,i);s;)s._start===i&&s.data==="isPause"&&yi(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)gi!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=bn(i),l=this._first,c=ri(s),h;l;)l instanceof Ce?bv(l._targets,o)&&(c?(!gi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=xn(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=Ce.to(a,gn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||he,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Ls(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,gn({startAt:{time:xn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Rh(this,xn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Rh(this,xn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+he)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=ge(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Yi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Yi(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=Sn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Nn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=ge(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ls(a,a===_e&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(_e._ts&&(Bu(_e,ua(i,_e)),Nu=un.frame),un.frame>=Th){Th+=pn.autoSleep||120;var s=_e._first;if((!s||!s._ts)&&pn.autoSleep&&un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||un.sleep()}}},t})(ur);gn(Ye.prototype,{_lock:0,_hasPause:0,_forcing:0});var qv=function(t,e,n,i,s,a,o){var l=new tn(this._pt,t,e,0,1,dd,null,s),c=0,h=0,u,d,f,_,g,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=cr(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),d=n.match(lo)||[];u=lo.exec(i);)_=u[0],g=i.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?ys(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=lo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Lu.test(i)||p)&&(l.e=0),this._pt=l,l},tc=function(t,e,n,i,s,a,o,l,c,h){Se(i)&&(i=i(s||0,t,a));var u=t[e],d=n!=="get"?n:Se(u)?c?t[e.indexOf("set")||!Se(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=Se(u)?c?Zv:hd:nc,_;if(Ue(i)&&(~i.indexOf("random(")&&(i=cr(i)),i.charAt(1)==="="&&(_=ys(d,i)+(Ve(d)||0),(_||_===0)&&(i=_))),!h||d!==i||Sl)return!isNaN(d*i)&&i!==""?(_=new tn(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?Qv:ud,0,f),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&$l(e,i),qv.call(this,t,e,d,i,f,l||pn.stringFilter,c))},Yv=function(t,e,n,i,s){if(Se(t)&&(t=er(t,s,e,n,i)),!Wn(t)||t.style&&t.nodeType||We(t)||Pu(t))return Ue(t)?er(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=er(t[o],s,e,n,i);return a},od=function(t,e,n,i,s,a){var o,l,c,h;if(ln[t]&&(o=new ln[t]).init(s,o.rawVars?e[t]:Yv(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new tn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==vs))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},gi,Sl,ec=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,S=t._overwrite==="auto"&&!Xl,y=t.timeline,b,E,A,C,v,T,D,N,O,q,X,V,B;if(y&&(!d||!s)&&(s="none"),t._ease=ji(s,Cs.ease),t._yEase=u?id(ji(u===!0?s:u,Cs.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(N=m[0]?qi(m[0]).harness:0,V=N&&i[N.prop],b=ha(i,Kl),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?ta:yv),g._lazy=0),a){if(yi(t._startAt=Ce.set(m,gn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Je(l),startAt:null,delay:0,onUpdate:c&&function(){return dn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Be||!o&&!f)&&t._startAt.revert(ta),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),A=gn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Je(l),immediateRender:o,stagger:0,parent:p},b),V&&(A[N.prop]=V),yi(t._startAt=Ce.set(m,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Be?t._startAt.revert(ta):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,he,he);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Je(l)||l&&!_,E=0;E<m.length;E++){if(v=m[E],D=v._gsap||Jl(m)[E]._gsap,t._ptLookup[E]=q={},gl[D.id]&&xi.length&&ca(),X=M===m?E:M.indexOf(v),N&&(O=new N).init(v,V||b,t,X,M)!==!1&&(t._pt=C=new tn(t._pt,v,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(Z){q[Z]=C}),O.priority&&(T=1)),!N||V)for(A in b)ln[A]&&(O=od(A,b,t,X,v,M))?O.priority&&(T=1):q[A]=C=tc.call(t,v,A,"get",b[A],X,M,0,i.stringFilter);t._op&&t._op[E]&&t.kill(v,t._op[E]),S&&t._pt&&(gi=t,_e.killTweensOf(v,q,t.globalTime(e)),B=!t.parent,gi=0),t._pt&&l&&(gl[D.id]=1)}T&&fd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!B,d&&e<=0&&y.render(Sn,!0,!0)},jv=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Sl=1,t.vars[e]="+=0",ec(t,o),Sl=0,l?or(e+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Te(n)+Ve(u.e)),u.b&&(u.b=h.s+Ve(u.b))},$v=function(t,e){var n=t[0]?qi(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Ps({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Kv=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(We(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},er=function(t,e,n,i,s){return Se(t)?t.call(e,n,i,s):Ue(t)&&~t.indexOf("random(")?cr(t):t},ld=Zl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",cd={};Qe(ld+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return cd[r]=1});var Ce=(function(r){Ru(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Qs(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=i.parent||_e,S=(We(n)||Pu(n)?ri(n[0]):"length"in i)?[n]:bn(n),y,b,E,A,C,v,T,D;if(o._targets=S.length?Jl(S):or("GSAP target "+n+" not found. https://gsap.com",!pn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||Yr(c)||Yr(h)){if(i=o.vars,y=o.timeline=new Ye({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:S}),y.kill(),y.parent=y._dp=Jn(o),y._start=0,d||Yr(c)||Yr(h)){if(A=S.length,T=d&&Yu(d),Wn(d))for(C in d)~ld.indexOf(C)&&(D||(D={}),D[C]=d[C]);for(b=0;b<A;b++)E=ha(i,cd),E.stagger=0,p&&(E.yoyoEase=p),D&&Ps(E,D),v=S[b],E.duration=+er(c,Jn(o),b,v,S),E.delay=(+er(h,Jn(o),b,v,S)||0)-o._delay,!d&&A===1&&E.delay&&(o._delay=h=E.delay,o._start+=h,E.delay=0),y.to(v,E,T?T(b,v,S):0),y._ease=Yt.none;y.duration()?c=h=0:o.timeline=0}else if(_){Qs(gn(y.vars.defaults,{ease:"none"})),y._ease=ji(_.ease||i.ease||"none");var N=0,O,q,X;if(We(_))_.forEach(function(V){return y.to(S,V,">")}),y.duration();else{E={};for(C in _)C==="ease"||C==="easeEach"||Kv(C,_[C],E,_.easeEach);for(C in E)for(O=E[C].sort(function(V,B){return V.t-B.t}),N=0,b=0;b<O.length;b++)q=O[b],X={ease:q.e,duration:(q.t-(b?O[b-1].t:0))/100*c},X[C]=q.v,y.to(S,X,N),N+=X.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return f===!0&&!Xl&&(gi=Jn(o),_e.killTweensOf(S),gi=0),Nn(M,Jn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===ge(M._time)&&Je(u)&&Av(Jn(o))&&M.data!=="nested")&&(o._tTime=-he,o.render(Math.max(0,-h)||0)),m&&Hu(Jn(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-he&&!h?l:i<he?0:i,d,f,_,g,m,p,M,S,y;if(!c)Cv(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,a);if(d=ge(u%g),u===l?(_=this._repeat,d=c):(m=ge(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(y=this._yEase,d=c-d),m=Ds(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(S&&this._yEase&&sd(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(ge(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Wu(this,h?i:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(y||this._ease)(d/c),this._from&&(this.ratio=M=1-M),!o&&u&&!s&&!m&&(dn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&_l(this,i,s,a),dn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&dn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&_l(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&yi(this,1),!s&&!(h&&!o)&&(u||o||p)&&(dn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){hr||un.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||ec(this,c),h=this._ease(c/this._dur),jv(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(Sa(this,0),this.parent||Vu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ks(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Be),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,gi&&gi.vars.overwrite!==!0)._first||Ks(this),this.parent&&a!==this.timeline.totalDuration()&&Ls(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?bn(i):o,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!s||s==="all")&&Ev(o,l))return s==="all"&&(this._pt=0),Ks(this);for(u=this._op=this._op||[],s!=="all"&&(Ue(s)&&(g={},Qe(s,function(M){return g[M]=1}),s=g),s=$v(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(u[p]=s,_=d,f={}):(f=u[p]=u[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Ma(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&Ks(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return tr(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return tr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return _e.killTweensOf(i,s,a)},t})(ur);gn(Ce.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qe("staggerTo,staggerFrom,staggerFromTo",function(r){Ce[r]=function(){var t=new Ye,e=xl.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var nc=function(t,e,n){return t[e]=n},hd=function(t,e,n){return t[e](n)},Zv=function(t,e,n,i){return t[e](i.fp,n)},Jv=function(t,e,n){return t.setAttribute(e,n)},ic=function(t,e){return Se(t[e])?hd:ql(t[e])&&t.setAttribute?Jv:nc},ud=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Qv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},dd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},sc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},tx=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},ex=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ma(this,e,"_pt"):e.dep||(n=1),e=i;return!n},nx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},fd=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},tn=(function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||ud,this.d=l||this,this.set=c||nc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=nx,this.m=n,this.mt=s,this.tween=i},r})();Qe(Zl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Kl[r]=1});mn.TweenMax=mn.TweenLite=Ce;mn.TimelineLite=mn.TimelineMax=Ye;_e=new Ye({sortChildren:!1,defaults:Cs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=nd;var $i=[],na={},ix=[],Ph=0,sx=0,po=function(t){return(na[t]||ix).map(function(e){return e()})},bl=function(){var t=Date.now(),e=[];t-Ph>2&&(po("matchMediaInit"),$i.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=In.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),po("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ph=t,po("matchMedia"))},pd=(function(){function r(e,n){this.selector=n&&Ml(n),this.data=[],this._r=[],this.isReverted=!1,this.id=sx++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Se(n)&&(s=i,i=n,n=Se);var a=this,o=function(){var c=me,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ml(s)),me=a,u=i.apply(a,arguments),Se(u)&&a._r.push(u),me=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Se?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=me;me=null,n(this),me=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ce&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ye?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ce)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=$i.length;a--;)$i[a].id===this.id&&$i.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),rx=(function(){function r(e){this.contexts=[],this.scope=e,me&&me.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Wn(n)||(n={matches:n});var a=new pd(0,s||this.scope),o=a.conditions={},l,c,h;me&&!a.selector&&(a.selector=me.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=In.matchMedia(n[c]),l&&($i.indexOf(a)<0&&$i.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(bl):l.addEventListener("change",bl)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),da={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Qu(i)})},timeline:function(t){return new Ye(t)},getTweensOf:function(t,e){return _e.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ue(t)&&(t=bn(t)[0]);var s=qi(t||{}).get,a=n?ku:zu;return n==="native"&&(n=""),t&&(e?a((ln[e]&&ln[e].get||s)(t,e,n,i)):function(o,l,c){return a((ln[o]&&ln[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=bn(t),t.length>1){var i=t.map(function(h){return nn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=ln[e],o=qi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;vs._pt=0,u.init(t,n?h+n:h,vs,0,[t]),u.render(1,u),vs._pt&&sc(1,vs)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=nn.to(t,gn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return _e.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ji(t.ease,Cs.ease)),Eh(Cs,t||{})},config:function(t){return Eh(pn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ln[o]&&!mn[o]&&or(e+" effect requires "+o+" plugin.")}),co[e]=function(o,l,c){return n(bn(o),gn(l||{},s),c)},a&&(Ye.prototype[e]=function(o,l,c){return this.add(co[e](o,Wn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Yt[t]=ji(e)},parseEase:function(t,e){return arguments.length?ji(t,e):Yt},getById:function(t){return _e.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ye(t),i,s;for(n.smoothChildTiming=Je(t.smoothChildTiming),_e.remove(n),n._dp=0,n._time=n._tTime=_e._time,i=_e._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ce&&i.vars.onComplete===i._targets[0]))&&Nn(n,i,i._start-i._delay),i=s;return Nn(_e,n,0),n},context:function(t,e){return t?new pd(t,e):me},matchMedia:function(t){return new rx(t)},matchMediaRefresh:function(){return $i.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||bl()},addEventListener:function(t,e){var n=na[t]||(na[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=na[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Ov,wrapYoyo:Bv,distribute:Yu,random:$u,snap:ju,normalize:Nv,getUnit:Ve,clamp:Lv,splitColor:td,toArray:bn,selector:Ml,mapRange:Zu,pipe:Fv,unitize:Uv,interpolate:zv,shuffle:qu},install:Fu,effects:co,ticker:un,updateRoot:Ye.updateRoot,plugins:ln,globalTimeline:_e,core:{PropTween:tn,globals:Uu,Tween:Ce,Timeline:Ye,Animation:ur,getCache:qi,_removeLinkedListItem:Ma,reverting:function(){return Be},context:function(t){return t&&me&&(me.data.push(t),t._ctx=me),me},suppressOverwrites:function(t){return Xl=t}}};Qe("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return da[r]=Ce[r]});un.add(Ye.updateRoot);vs=da.to({},{duration:0});var ax=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},ox=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=ax(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},mo=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Ue(s)&&(l={},Qe(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}ox(o,s)}}}},nn=da.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Be?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},mo("roundProps",yl),mo("modifiers"),mo("snap",ju))||da;Ce.version=Ye.version=nn.version="3.14.2";Iu=1;Yl()&&Is();Yt.Power0;Yt.Power1;Yt.Power2;Yt.Power3;Yt.Power4;Yt.Linear;Yt.Quad;Yt.Cubic;Yt.Quart;Yt.Quint;Yt.Strong;Yt.Elastic;Yt.Back;Yt.SteppedEase;Yt.Bounce;Yt.Sine;Yt.Expo;Yt.Circ;var Dh,_i,Ss,rc,Xi,Lh,ac,lx=function(){return typeof window<"u"},ai={},zi=180/Math.PI,bs=Math.PI/180,ms=Math.atan2,Ih=1e8,oc=/([A-Z])/g,cx=/(left|right|width|margin|padding|x)/i,hx=/[\s,\(]\S/,zn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Tl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ux=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},dx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},fx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},px=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},md=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},gd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},mx=function(t,e,n){return t.style[e]=n},gx=function(t,e,n){return t.style.setProperty(e,n)},_x=function(t,e,n){return t._gsap[e]=n},vx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},xx=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Mx=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},ve="transform",en=ve+"Origin",yx=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in ai&&s){if(this.tfm=this.tfm||{},t!=="transform")t=zn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Qn(i,o)}):this.tfm[t]=a.x?a[t]:Qn(i,t),t===en&&(this.tfm.zOrigin=a.zOrigin);else return zn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(ve)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(en,e,"")),t=ve}(s||e)&&this.props.push(t,e,s[t])},_d=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Sx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(oc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=ac(),(!s||!s.isStart)&&!n[ve]&&(_d(n),i.zOrigin&&n[en]&&(n[en]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},vd=function(t,e){var n={target:t,props:[],revert:Sx,save:yx};return t._gsap||nn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},xd,El=function(t,e){var n=_i.createElementNS?_i.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):_i.createElement(t);return n&&n.style?n:_i.createElement(t)},fn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(oc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Fs(e)||e,1)||""},Fh="O,Moz,ms,Ms,Webkit".split(","),Fs=function(t,e,n){var i=e||Xi,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Fh[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Fh[a]:"")+t},wl=function(){lx()&&window.document&&(Dh=window,_i=Dh.document,Ss=_i.documentElement,Xi=El("div")||{style:{}},El("div"),ve=Fs(ve),en=ve+"Origin",Xi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xd=!!Fs("perspective"),ac=nn.core.reverting,rc=1)},Uh=function(t){var e=t.ownerSVGElement,n=El("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ss.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ss.removeChild(n),s},Nh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Md=function(t){var e,n;try{e=t.getBBox()}catch{e=Uh(t),n=1}return e&&(e.width||e.height)||n||(e=Uh(t)),e&&!e.width&&!e.x&&!e.y?{x:+Nh(t,["x","cx","x1"])||0,y:+Nh(t,["y","cy","y1"])||0,width:0,height:0}:e},yd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Md(t))},Si=function(t,e){if(e){var n=t.style,i;e in ai&&e!==en&&(e=ve),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(oc,"-$1").toLowerCase())):n.removeAttribute(e)}},vi=function(t,e,n,i,s,a){var o=new tn(t._pt,e,n,0,1,a?gd:md);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Oh={deg:1,rad:1,turn:1},bx={grid:1,flex:1},bi=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Xi.style,l=cx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,m,p;if(i===a||!s||Oh[i]||Oh[a])return s;if(a!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&yd(t),(f||a==="%")&&(ai[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Te(f?s/_*u:s/100*_);if(o[l?"width":"height"]=u+(d?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===_i||!g.appendChild)&&(g=_i.body),m=g._gsap,m&&f&&m.width&&l&&m.time===un.time&&!m.uncache)return Te(s/m.width*u);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,_=t[h],M?t.style[e]=M:Si(t,e)}else(f||a==="%")&&!bx[fn(g,"display")]&&(o.position=fn(t,"position")),g===t&&(o.position="static"),g.appendChild(Xi),_=Xi[h],g.removeChild(Xi),o.position="absolute";return l&&f&&(m=qi(g),m.time=un.time,m.width=g[h]),Te(d?_*s/u:_&&s?u/_*s:0)},Qn=function(t,e,n,i){var s;return rc||wl(),e in zn&&e!=="transform"&&(e=zn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ai[e]&&e!=="transform"?(s=fr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:pa(fn(t,en))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=fa[e]&&fa[e](t,e,n)||fn(t,e)||Ou(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?bi(t,e,s,n)+n:s},Tx=function(t,e,n,i){if(!n||n==="none"){var s=Fs(e,t,1),a=s&&fn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=fn(t,"borderTopColor"))}var o=new tn(this._pt,t.style,e,0,1,dd),l=0,c=0,h,u,d,f,_,g,m,p,M,S,y,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=fn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=fn(t,e)||i,g?t.style[e]=g:Si(t,e)),h=[n,i],nd(h),n=h[0],i=h[1],d=n.match(_s)||[],b=i.match(_s)||[],b.length){for(;u=_s.exec(i);)m=u[0],M=i.substring(l,u.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,y=g.substr((f+"").length),m.charAt(1)==="="&&(m=ys(f,m)+y),p=parseFloat(m),S=m.substr((p+"").length),l=_s.lastIndex-S.length,S||(S=S||pn.units[e]||y,l===i.length&&(i+=S,o.e+=S)),y!==S&&(f=bi(t,e,g,S)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?gd:md;return Lu.test(i)&&(o.e=0),this._pt=o,o},Bh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ex=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Bh[n]||n,e[1]=Bh[i]||i,e.join(" ")},wx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ai[o]&&(l=1,o=o==="transformOrigin"?en:ve),Si(n,o);l&&(Si(n,ve),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",fr(n,1),a.uncache=1,_d(i)))}},fa={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new tn(t._pt,e,n,0,0,wx);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},dr=[1,0,0,1,0,0],Sd={},bd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},zh=function(t){var e=fn(t,ve);return bd(e)?dr:e.substr(7).match(Du).map(Te)},lc=function(t,e){var n=t._gsap||qi(t),i=t.style,s=zh(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?dr:s):(s===dr&&!t.offsetParent&&t!==Ss&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Ss.appendChild(t)),s=zh(t),l?i.display=l:Si(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Ss.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Al=function(t,e,n,i,s,a){var o=t._gsap,l=s||lc(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],S=e.split(" "),y=parseFloat(S[0])||0,b=parseFloat(S[1])||0,E,A,C,v;n?l!==dr&&(A=f*m-_*g)&&(C=y*(m/A)+b*(-g/A)+(g*M-m*p)/A,v=y*(-_/A)+b*(f/A)-(f*M-_*p)/A,y=C,b=v):(E=Md(t),y=E.x+(~S[0].indexOf("%")?y/100*E.width:y),b=E.y+(~(S[1]||S[0]).indexOf("%")?b/100*E.height:b)),i||i!==!1&&o.smooth?(p=y-c,M=b-h,o.xOffset=u+(p*f+M*g)-p,o.yOffset=d+(p*_+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[en]="0px 0px",a&&(vi(a,o,"xOrigin",c,y),vi(a,o,"yOrigin",h,b),vi(a,o,"xOffset",u,o.xOffset),vi(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+b)},fr=function(t,e){var n=t._gsap||new ad(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=fn(t,en)||"0",h,u,d,f,_,g,m,p,M,S,y,b,E,A,C,v,T,D,N,O,q,X,V,B,Z,at,k,Y,nt,st,vt,Mt;return h=u=d=g=m=p=M=S=y=0,f=_=1,n.svg=!!(t.getCTM&&yd(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ve]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ve]!=="none"?l[ve]:"")),i.scale=i.rotate=i.translate="none"),A=lc(t,n.svg),n.svg&&(n.uncache?(Z=t.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),Al(t,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,E=n.yOrigin||0,A!==dr&&(D=A[0],N=A[1],O=A[2],q=A[3],h=X=A[4],u=V=A[5],A.length===6?(f=Math.sqrt(D*D+N*N),_=Math.sqrt(q*q+O*O),g=D||N?ms(N,D)*zi:0,M=O||q?ms(O,q)*zi+g:0,M&&(_*=Math.abs(Math.cos(M*bs))),n.svg&&(h-=b-(b*D+E*O),u-=E-(b*N+E*q))):(Mt=A[6],st=A[7],k=A[8],Y=A[9],nt=A[10],vt=A[11],h=A[12],u=A[13],d=A[14],C=ms(Mt,nt),m=C*zi,C&&(v=Math.cos(-C),T=Math.sin(-C),B=X*v+k*T,Z=V*v+Y*T,at=Mt*v+nt*T,k=X*-T+k*v,Y=V*-T+Y*v,nt=Mt*-T+nt*v,vt=st*-T+vt*v,X=B,V=Z,Mt=at),C=ms(-O,nt),p=C*zi,C&&(v=Math.cos(-C),T=Math.sin(-C),B=D*v-k*T,Z=N*v-Y*T,at=O*v-nt*T,vt=q*T+vt*v,D=B,N=Z,O=at),C=ms(N,D),g=C*zi,C&&(v=Math.cos(C),T=Math.sin(C),B=D*v+N*T,Z=X*v+V*T,N=N*v-D*T,V=V*v-X*T,D=B,X=Z),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Te(Math.sqrt(D*D+N*N+O*O)),_=Te(Math.sqrt(V*V+Mt*Mt)),C=ms(X,V),M=Math.abs(C)>2e-4?C*zi:0,y=vt?1/(vt<0?-vt:vt):0),n.svg&&(B=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!bd(fn(t,ve)),B&&t.setAttribute("transform",B))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Te(f),n.scaleY=Te(_),n.rotation=Te(g)+o,n.rotationX=Te(m)+o,n.rotationY=Te(p)+o,n.skewX=M+o,n.skewY=S+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[en]=pa(c)),n.xOffset=n.yOffset=0,n.force3D=pn.force3D,n.renderTransform=n.svg?Rx:xd?Td:Ax,n.uncache=0,n},pa=function(t){return(t=t.split(" "))[0]+" "+t[1]},go=function(t,e,n){var i=Ve(e);return Te(parseFloat(e)+parseFloat(bi(t,"x",n+"px",i)))+i},Ax=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Td(t,e)},Ni="0deg",Ys="0px",Oi=") ",Td=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,S=n.zOrigin,y="",b=p==="auto"&&t&&t!==1||p===!0;if(S&&(u!==Ni||h!==Ni)){var E=parseFloat(h)*bs,A=Math.sin(E),C=Math.cos(E),v;E=parseFloat(u)*bs,v=Math.cos(E),a=go(M,a,A*v*-S),o=go(M,o,-Math.sin(E)*-S),l=go(M,l,C*v*-S+S)}m!==Ys&&(y+="perspective("+m+Oi),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(b||a!==Ys||o!==Ys||l!==Ys)&&(y+=l!==Ys||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Oi),c!==Ni&&(y+="rotate("+c+Oi),h!==Ni&&(y+="rotateY("+h+Oi),u!==Ni&&(y+="rotateX("+u+Oi),(d!==Ni||f!==Ni)&&(y+="skew("+d+", "+f+Oi),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Oi),M.style[ve]=y||"translate(0, 0)"},Rx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,S=parseFloat(a),y=parseFloat(o),b,E,A,C,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=bs,c*=bs,b=Math.cos(l)*u,E=Math.sin(l)*u,A=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=bs,v=Math.tan(c-h),v=Math.sqrt(1+v*v),A*=v,C*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),b*=v,E*=v)),b=Te(b),E=Te(E),A=Te(A),C=Te(C)):(b=u,C=d,E=A=0),(S&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(S=bi(f,"x",a,"px"),y=bi(f,"y",o,"px")),(_||g||m||p)&&(S=Te(S+_-(_*b+g*A)+m),y=Te(y+g-(_*E+g*C)+p)),(i||s)&&(v=f.getBBox(),S=Te(S+i/100*v.width),y=Te(y+s/100*v.height)),v="matrix("+b+","+E+","+A+","+C+","+S+","+y+")",f.setAttribute("transform",v),M&&(f.style[ve]=v)},Cx=function(t,e,n,i,s){var a=360,o=Ue(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?zi:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Ih)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Ih)%a-~~(c/a)*a)),t._pt=d=new tn(t._pt,e,n,i,c,ux),d.e=h,d.u="deg",t._props.push(n),d},kh=function(t,e){for(var n in e)t[n]=e[n];return t},Px=function(t,e,n){var i=kh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ve]=e,o=fr(n,1),Si(n,ve),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ve],a[ve]=e,o=fr(n,1),a[ve]=c);for(l in ai)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=Ve(c),_=Ve(h),u=f!==_?bi(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new tn(t._pt,o,l,u,d-u,Tl),t._pt.u=_||0,t._props.push(l));kh(o,i)};Qe("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});fa[t>1?"border"+r:r]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(_){return Qn(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,u)}});var Ed={name:"css",register:wl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,d,f,_,g,m,p,M,S,y,b,E,A,C,v;rc||wl(),this.styles=this.styles||vd(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(ln[g]&&od(g,e,n,i,t,s)))){if(f=typeof h,_=fa[g],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=cr(h)),_)_(this,t,g,h,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Mi.lastIndex=0,Mi.test(c)||(m=Ve(c),p=Ve(h),p?m!==p&&(c=bi(t,g,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,s,0,0,g),a.push(g),C.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Ue(c)&&~c.indexOf("random(")&&(c=cr(c)),Ve(c+"")||c==="auto"||(c+=pn.units[g]||Ve(Qn(t,g))||""),(c+"").charAt(1)==="="&&(c=Qn(t,g))):c=Qn(t,g),d=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),g in zn&&(g==="autoAlpha"&&(d===1&&Qn(t,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,o.visibility),vi(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=zn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in ai,S){if(this.styles.save(g),v=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=fn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=t.style.perspective;t.style.perspective=h,h=fn(t,"perspective"),T?t.style.perspective=T:Si(t,"perspective")}u=parseFloat(h)}if(y||(b=t._gsap,b.renderTransform&&!e.parseTransform||fr(t,e.parseTransform),E=e.smoothOrigin!==!1&&b.smooth,y=this._pt=new tn(this._pt,o,ve,0,1,b.renderTransform,b,0,-1),y.dep=1),g==="scale")this._pt=new tn(this._pt,b,"scaleY",b.scaleY,(M?ys(b.scaleY,M+u):u)-b.scaleY||0,Tl),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(en,0,o[en]),h=Ex(h),b.svg?Al(t,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&vi(this,b,"zOrigin",b.zOrigin,p),vi(this,o,g,pa(c),pa(h)));continue}else if(g==="svgOrigin"){Al(t,h,1,E,0,this);continue}else if(g in Sd){Cx(this,b,g,d,M?ys(d,M+h):h);continue}else if(g==="smoothOrigin"){vi(this,b,"smooth",b.smooth,h);continue}else if(g==="force3D"){b[g]=h;continue}else if(g==="transform"){Px(this,h,t);continue}}else g in o||(g=Fs(g)||g);if(S||(u||u===0)&&(d||d===0)&&!hx.test(h)&&g in o)m=(c+"").substr((d+"").length),u||(u=0),p=Ve(h)||(g in pn.units?pn.units[g]:m),m!==p&&(d=bi(t,g,c,p)),this._pt=new tn(this._pt,S?b:o,g,d,(M?ys(d,M+u):u)-d,!S&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?px:Tl),this._pt.u=p||0,S&&v!==h?(this._pt.b=c,this._pt.e=v,this._pt.r=fx):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=dx);else if(g in o)Tx.call(this,t,g,c,M?M+h:h);else if(g in t)this.add(t,g,c||t[g],M?M+h:h,i,s);else if(g!=="parseTransform"){$l(g,h);continue}S||(g in o?C.push(g,0,o[g]):typeof t[g]=="function"?C.push(g,2,t[g]()):C.push(g,1,c||t[g])),a.push(g)}}A&&fd(this)},render:function(t,e){if(e.tween._time||!ac())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Qn,aliases:zn,getSetter:function(t,e,n){var i=zn[e];return i&&i.indexOf(",")<0&&(e=i),e in ai&&e!==en&&(t._gsap.x||Qn(t,"x"))?n&&Lh===n?e==="scale"?vx:_x:(Lh=n||{})&&(e==="scale"?xx:Mx):t.style&&!ql(t.style[e])?mx:~e.indexOf("-")?gx:ic(t,e)},core:{_removeProperty:Si,_getMatrix:lc}};nn.utils.checkPrefix=Fs;nn.core.getStyleSaver=vd;(function(r,t,e,n){var i=Qe(r+","+t+","+e,function(s){ai[s]=1});Qe(t,function(s){pn.units[s]="deg",Sd[s]=1}),zn[i[13]]=r+","+t,Qe(n,function(s){var a=s.split(":");zn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){pn.units[r]="px"});nn.registerPlugin(Ed);var xt=nn.registerPlugin(Ed)||nn;xt.core.Tween;class Dx{constructor(){this.experience=new Pn,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this._targetX=0,this._targetY=0,this._curX=0,this._curY=0,this.setInstance(),this._setupMobileGyro()}setInstance(){this.rig=new pe,this.scene.add(this.rig),this.instance=new cn(50,this.sizes.width/this.sizes.height,.1,5e3),this.instance.position.set(0,0,150),this.rig.add(this.instance)}_setupMobileGyro(){window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",t=>{t.gamma!==null&&t.beta!==null&&(this._targetX=(t.beta-40)/60*.3,this._targetY=t.gamma/90*.3)},{passive:!0})}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}update(){const t=this.experience.raycaster;if(this.experience.isMobile)this._curX+=(this._targetX-this._curX)*.04,this._curY+=(this._targetY-this._curY)*.04,this.rig.rotation.x=this._curX,this.rig.rotation.y=this._curY;else if(t){const n=t.mouse,i=n.y*.45,s=-n.x*.45;xt.to(this.rig.rotation,{x:i,y:s,duration:1.8,ease:"power2.out"})}}}class Lx extends Ee{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Gt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const gs=new P,Vh=new re,Gh=new re,Hh=new P,Wh=new P;class Ix{constructor(t={}){const e=this;let n,i,s,a;const o={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:i}},this.render=function(_,g){_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),Vh.copy(g.matrixWorldInverse),Gh.multiplyMatrices(g.projectionMatrix,Vh),h(_,_,g),this.sortObjects&&f(_)},this.setSize=function(_,g){n=_,i=g,s=n/2,a=i/2,l.style.width=_+"px",l.style.height=g+"px"};function c(_){_.isCSS2DObject&&(_.element.style.display="none");for(let g=0,m=_.children.length;g<m;g++)c(_.children[g])}function h(_,g,m){if(_.visible===!1){c(_);return}if(_.isCSS2DObject){gs.setFromMatrixPosition(_.matrixWorld),gs.applyMatrix4(Gh);const p=gs.z>=-1&&gs.z<=1&&_.layers.test(m.layers)===!0,M=_.element;M.style.display=p===!0?"":"none",p===!0&&(_.onBeforeRender(e,g,m),M.style.transform="translate("+-100*_.center.x+"%,"+-100*_.center.y+"%)translate("+(gs.x*s+s)+"px,"+(-gs.y*a+a)+"px)",M.parentNode!==l&&l.appendChild(M),_.onAfterRender(e,g,m));const S={distanceToCameraSquared:u(m,_)};o.objects.set(_,S)}for(let p=0,M=_.children.length;p<M;p++)h(_.children[p],g,m)}function u(_,g){return Hh.setFromMatrixPosition(_.matrixWorld),Wh.setFromMatrixPosition(g.matrixWorld),Hh.distanceToSquared(Wh)}function d(_){const g=[];return _.traverseVisible(function(m){m.isCSS2DObject&&g.push(m)}),g}function f(_){const g=d(_).sort(function(p,M){if(p.renderOrder!==M.renderOrder)return M.renderOrder-p.renderOrder;const S=o.objects.get(p).distanceToCameraSquared,y=o.objects.get(M).distanceToCameraSquared;return S-y}),m=g.length;for(let p=0,M=g.length;p<M;p++)g[p].element.style.zIndex=m-p}}}class Fx{constructor(){this.experience=new Pn,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.setWebGLRenderer(),this.setCSSRenderer()}setWebGLRenderer(){this.instance=new hv({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio,2)),this.instance.setClearColor(0,1),this.scene.background=new $t(0)}setCSSRenderer(){this.cssInstance=new Ix,this.cssInstance.setSize(this.sizes.width,this.sizes.height),this.cssInstance.domElement.style.position="absolute",this.cssInstance.domElement.style.top="0px",this.cssInstance.domElement.style.pointerEvents="none",document.body.appendChild(this.cssInstance.domElement)}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio,2)),this.cssInstance.setSize(this.sizes.width,this.sizes.height)}update(){this.instance.render(this.scene,this.camera.instance),this.cssInstance.render(this.scene,this.camera.instance)}}class Ux{constructor(t){this.element=t,this.chars="!<>-_\\/[]{}—=+*^?#________",this.originalText=t.innerText,this.frameRequest=null,this.frame=0,this.queue=[],this.update=this.update.bind(this)}setText(t){const e=this.originalText,n=Math.max(e.length,t.length),i=new Promise(s=>this.resolve=s);this.queue=[];for(let s=0;s<n;s++){const a=e[s]||"",o=t[s]||"",l=Math.floor(Math.random()*40),c=l+Math.floor(Math.random()*40);this.queue.push({from:a,to:o,start:l,end:c})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),i}update(){let t="",e=0;for(let n=0,i=this.queue.length;n<i;n++){let{from:s,to:a,start:o,end:l,char:c}=this.queue[n];this.frame>=l?(e++,t+=a):this.frame>=o?((!c||Math.random()<.28)&&(c=this.randomChar(),this.queue[n].char=c),t+=`<span class="dud">${c}</span>`):t+=s}this.element.innerHTML=t,e===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}randomChar(){return this.chars[Math.floor(Math.random()*this.chars.length)]}hover(){this.setText(this.originalText)}}class Nx{constructor(t,e){this.experience=new Pn,this.scene=this.experience.scene,this.data=t,this.isHovered=!1,this.rings=[],this.moons=[],this.floatOffset=Math.random()*Math.PI*2,this.floatSpeed=.22+Math.random()*.3,this.rotSpeed=.002+Math.random()*.005,this.group=new pe,this.group.position.copy(e),this.group.userData=t,this.group.userData.isNode=!0,this.group.userData.nodeInstance=this,this.cfg=this._cfg(),this._buildPlanet(),this._buildGlow(),this._buildRings(),this._buildMoons(),this._buildLabel(),this.scene.add(this.group)}_cfg(){const t=this.data.type,e=(this.data.kicker||"").toLowerCase(),n={r:1.3,pattern:0,rings:0,moons:Math.floor(Math.random()*2),label:""};return t==="about"?{...n,r:2.2,pattern:1,rings:2,moons:2}:t==="certification"?{...n,r:1.9,pattern:0,rings:3,moons:1}:e.includes("android")?{...n,r:1.5,pattern:2,rings:1,moons:1}:e.includes("web3")?{...n,r:1.5,pattern:3,rings:1,moons:0}:e.includes("backend")?{...n,r:1.4,pattern:1,rings:1}:e.includes("infra")||e.includes("nas")?{...n,r:1.5,pattern:2,rings:2}:n}_buildPlanet(){const{r:t,pattern:e}=this.cfg;this.planetMat=new Vt({uniforms:{uTime:{value:0},uPattern:{value:e},uHover:{value:0}},vertexShader:`
                varying vec3 vN, vPos;
                void main(){
                    vN   = normalize(normalMatrix * normal);
                    vPos = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform float uTime, uPattern, uHover;
                varying vec3 vN, vPos;

                float h21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5);}
                float n21(vec2 p){
                    vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
                    return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x),f.y);
                }
                float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n21(p);p*=2.1;a*=.5;}return v;}

                void main(){
                    vec2 uv=vec2(atan(vPos.z,vPos.x)/6.2832+.5, asin(clamp(vPos.y/length(vPos),-1.,1.))/3.1416+.5);
                    float surf=.5;
                    if(uPattern<.5){
                        // Rocky — craters and ridges
                        surf=fbm(uv*4.+vec2(uTime*.035));
                        surf=mix(surf,step(.6,surf)*.9,0.3);
                    } else if(uPattern<1.5){
                        // Gas giant — bands with cyclones
                        float bands=sin(uv.y*20.+fbm(uv*2.5)*3.+uTime*.04)*.5+.5;
                        surf=mix(bands,fbm(uv*6.),0.28);
                    } else if(uPattern<2.5){
                        // Ice — cracked smooth
                        surf=fbm(uv*2.8+vec2(uTime*.018));
                        surf=mix(surf,pow(1.-fbm(uv*11.),2.)*.8,0.3);
                    } else {
                        // Lava — dark with white-hot cracks
                        float cracks=pow(fbm(uv*5.5+vec2(uTime*.07)),2.2);
                        surf=cracks;
                    }

                    vec3 ld=normalize(vec3(1.,.55,.5));
                    float diff=max(dot(vN,ld),0.);
                    float lit=mix(.05,.9,surf)*(0.18+diff*.82);

                    // Lava emissive
                    if(uPattern>2.5) lit+=surf*(1.-diff)*.3;

                    // Rim light
                    float rim=pow(1.-abs(dot(vN,vec3(0,0,1))),3.);
                    lit+=rim*(.1+uHover*.18);

                    gl_FragColor=vec4(vec3(clamp(lit,0.,1.)),1.);
                }
            `}),this.planetMesh=new ce(new Ne(this.cfg.r,52,52),this.planetMat),this.group.add(this.planetMesh)}_buildGlow(){const t=this.cfg.r;this.atmMat=new Vt({uniforms:{uHover:{value:0}},vertexShader:"varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}",fragmentShader:"uniform float uHover;varying vec3 vN,vVP;void main(){float f=pow(clamp(1.-dot(normalize(vVP),vN),0.,1.),2.8);gl_FragColor=vec4(vec3(.82,.9,1.),f*(.48+uHover*.55)*.78);}",transparent:!0,blending:Wt,depthWrite:!1,depthTest:!1,side:Cn}),this.atmMesh=new ce(new Ne(t*1.48,24,24),this.atmMat),this.atmMesh.renderOrder=1,this.group.add(this.atmMesh),this.haloMat=new Vt({uniforms:{uHover:{value:0}},vertexShader:"varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}",fragmentShader:"uniform float uHover;varying vec3 vN,vVP;void main(){float f=pow(clamp(1.-dot(normalize(vVP),vN),0.,1.),5.2);gl_FragColor=vec4(vec3(.72,.84,1.),f*(.26+uHover*.38)*.62);}",transparent:!0,blending:Wt,depthWrite:!1,depthTest:!1,side:Cn}),this.haloMesh=new ce(new Ne(t*1.95,24,24),this.haloMat),this.haloMesh.renderOrder=2,this.group.add(this.haloMesh)}_buildRings(){const{r:t,rings:e}=this.cfg;if(e)for(let n=0;n<e;n++){const i=t*(1.75+n*.55),s=i+t*.26,a=new Vt({uniforms:{uTime:{value:0},uHover:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float uTime,uHover;varying vec2 vUv;
                    float h(float n){return fract(sin(n)*43758.5);}
                    void main(){
                        float rad=vUv.x;
                        float band=sin(rad*42.+uTime*.055)*.5+.5;
                        float gap=h(floor(rad*22.))>.58?0.:1.;
                        float d=band*gap;
                        float edge=smoothstep(0.,.09,rad)*smoothstep(1.,.91,rad);
                        float a=d*edge*(.32+uHover*.22);
                        gl_FragColor=vec4(vec3(.75+d*.25),a);
                    }`,transparent:!0,blending:Wt,depthWrite:!1,depthTest:!1,side:Un}),o=new Gl(i,s,92,2),l=o.attributes.position,c=o.attributes.uv;for(let u=0;u<l.count;u++){const d=l.getX(u),f=l.getY(u),_=Math.sqrt(d*d+f*f);c.setXY(u,(_-i)/(s-i),Math.atan2(f,d)/(Math.PI*2)+.5)}const h=new ce(o,a);h.rotation.x=Math.PI/2+(Math.random()-.5)*.38,h.rotation.z=(Math.random()-.5)*.22,this.group.add(h),this.rings.push({mesh:h,mat:a})}}_buildMoons(){const{r:t,moons:e}=this.cfg;for(let n=0;n<e;n++){const i=t*(3+n*1.75+Math.random()*.7),s=t*(.075+Math.random()*.085),a=.28+Math.random()*.45,o=Math.random()*Math.PI*2,l=(Math.random()-.5)*.75,c=new xu({color:8947848,roughness:.9,metalness:.05}),h=new ce(new Ne(s,12,12),c),u=[];for(let f=0;f<=68;f++)u.push(new P(Math.cos(f/68*Math.PI*2)*i,0,Math.sin(f/68*Math.PI*2)*i));const d=new De(new Ut().setFromPoints(u),new yn({color:16777215,transparent:!0,opacity:.055,blending:Wt,depthWrite:!1}));d.rotation.x=l,this.group.add(d),this.group.add(h),this.moons.push({mesh:h,orR:i,spd:a,offset:o,tilt:l})}}_buildLabel(){const t=document.createElement("div");t.className="project-label",t.textContent=this.data.title,t.style.cssText="opacity:0;transition:opacity .3s ease,transform .3s ease;transform:translateY(6px)",this.scramble=new Ux(t),this.label=new Lx(t),this.label.position.set(0,this.cfg.r*2.3+.9,0),this.group.add(this.label)}update(){const t=this.experience.time.elapsed;this.experience.time.delta/1e3,this.planetMat.uniforms.uTime&&(this.planetMat.uniforms.uTime.value=t),this.rings.forEach(i=>{i.mat.uniforms.uTime&&(i.mat.uniforms.uTime.value=t)}),this.planetMesh.rotation.y+=this.rotSpeed;const e=this.isHovered?0:Math.sin(t*this.floatSpeed+this.floatOffset)*.48;this.planetMesh.position.y+=(e-this.planetMesh.position.y)*.05;const n=this.planetMesh.position.y;this.atmMesh.position.y=n,this.haloMesh.position.y=n,this.rings.forEach(i=>i.mesh.position.y=n),this.moons.forEach(i=>{const s=t*i.spd+i.offset,a=Math.cos(i.tilt),o=Math.sin(i.tilt);i.mesh.position.x=Math.cos(s)*i.orR,i.mesh.position.z=Math.sin(s)*i.orR*a,i.mesh.position.y=n+Math.sin(s)*i.orR*o,i.mesh.rotation.y+=.009}),this.label.position.y=n+this.cfg.r*2.3+.9}onMouseEnter(){this.isHovered||(this.isHovered=!0,this.experience.audio&&this.experience.audio.play("hover"),this.label.element.style.opacity="1",this.label.element.style.transform="translateY(0)",this.scramble.hover(),xt.to(this.planetMesh.scale,{x:1.14,y:1.14,z:1.14,duration:.5,ease:"back.out(1.7)"}),xt.to(this.atmMesh.scale,{x:1.2,y:1.2,z:1.2,duration:.5}),xt.to(this.haloMesh.scale,{x:1.35,y:1.35,z:1.35,duration:.6}),xt.to(this.planetMat.uniforms.uHover,{value:1,duration:.4}),xt.to(this.atmMat.uniforms.uHover,{value:1,duration:.4}),xt.to(this.haloMat.uniforms.uHover,{value:1,duration:.4}),this.rings.forEach(t=>xt.to(t.mat.uniforms.uHover,{value:1,duration:.4})),this.moons.forEach(t=>{t._spd=t.spd,t.spd*=2.5}))}onMouseLeave(){this.isHovered&&(this.isHovered=!1,this.label.element.style.opacity="0",this.label.element.style.transform="translateY(6px)",xt.to(this.planetMesh.scale,{x:1,y:1,z:1,duration:.5}),xt.to(this.atmMesh.scale,{x:1,y:1,z:1,duration:.5}),xt.to(this.haloMesh.scale,{x:1,y:1,z:1,duration:.5}),xt.to(this.planetMat.uniforms.uHover,{value:0,duration:.4}),xt.to(this.atmMat.uniforms.uHover,{value:0,duration:.4}),xt.to(this.haloMat.uniforms.uHover,{value:0,duration:.4}),this.rings.forEach(t=>xt.to(t.mat.uniforms.uHover,{value:0,duration:.4})),this.moons.forEach(t=>{t._spd&&(t.spd=t._spd)}))}}class Ox{constructor(){this.experience=new Pn,this.scene=this.experience.scene,this.M=this.experience.isMobile,this.PR=Math.min(this.experience.sizes.pixelRatio,2),this.pulsarMats=[],this.auroraRings=[],this._stars(),this._galaxyDisk(),this._nebulaDust(),this._cosmicDust(),this._pulsars(),this._godRays(),this._aurora(),this._darkMatterWeb()}_pts(t,e){const n=new pi(t,e);return this.scene.add(n),n}_line(t,e){const n=new Ut().setFromPoints(t),i=new yn({color:16777215,transparent:!0,opacity:e,blending:Wt,depthWrite:!1}),s=new De(n,i);return this.scene.add(s),s}_stars(){this.starGroups=[];const t=this.M;[{n:t?4e3:11e3,r0:400,r1:800,s0:.3,s1:1.1,sp:1,a:.75},{n:t?1200:2800,r0:200,r1:400,s0:.5,s1:2,sp:1.7,a:.85},{n:t?180:550,r0:70,r1:280,s0:1.2,s1:4.5,sp:2.3,a:.95}].forEach(e=>{const n=new Ut,i=new Float32Array(e.n*3),s=new Float32Array(e.n),a=new Float32Array(e.n);for(let c=0;c<e.n;c++){const h=e.r0+Math.random()*(e.r1-e.r0),u=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1);i[c*3]=h*Math.sin(d)*Math.cos(u),i[c*3+1]=h*Math.sin(d)*Math.sin(u),i[c*3+2]=h*Math.cos(d),s[c]=e.s0+Math.random()*(e.s1-e.s0),a[c]=Math.random()*Math.PI*2}n.setAttribute("position",new It(i,3)),n.setAttribute("aSize",new It(s,1)),n.setAttribute("aPhase",new It(a,1));const o=new Vt({uniforms:{uTime:{value:0},uPR:{value:this.PR},uA:{value:e.a*(window._timeMode==="night"?1.25:window._timeMode==="day"?.8:1)},uSp:{value:e.sp*(window._timeMode==="night"?1.3:window._timeMode==="day"?.7:1)}},vertexShader:`attribute float aSize,aPhase;uniform float uTime,uPR,uSp;varying float vT;
                    void main(){vT=.35+.65*abs(sin(uTime*uSp+aPhase));vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(aSize*uPR*vT*(360./-mv.z),0.,12.);}`,fragmentShader:`uniform float uA;varying float vT;
                    void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;float a=(1.-d*2.)*vT*uA;
                    float warm=step(.7,vT);gl_FragColor=vec4(mix(vec3(.75,.82,1.),vec3(1.,.95,.85),warm*.5),a);}`,transparent:!0,depthWrite:!1,blending:Wt}),l=this._pts(n,o);this.starGroups.push({pts:l,mat:o})})}_galaxyDisk(){const t=this.M?3500:9e3,e=new Ut,n=new Float32Array(t*3),i=new Float32Array(t);for(let s=0;s<t;s++){const a=s%3,o=Math.random(),l=80+o*580,c=o*Math.PI*4+a*Math.PI*2/3+(Math.random()-.5)*((1-o)*.38+.04)*2;n[s*3]=l*Math.cos(c),n[s*3+1]=(Math.random()-.5)*l*.055,n[s*3+2]=l*Math.sin(c),i[s]=Math.random()}e.setAttribute("position",new It(n,3)),e.setAttribute("aRand",new It(i,1)),this.galMat=new Vt({uniforms:{uTime:{value:0},uPR:{value:this.PR}},vertexShader:`attribute float aRand;uniform float uTime,uPR;varying float vR,vRd;
                void main(){vRd=aRand;float r=length(position.xz);
                float angle=atan(position.z,position.x)+uTime*.011/max(r*.006,1.);
                vec3 p=vec3(cos(angle)*r,position.y,sin(angle)*r);vR=r;
                vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
                gl_PointSize=clamp((.35+aRand*1.1)*(1.-r/620.)*uPR*230./-mv.z,0.,5.);}`,fragmentShader:`varying float vR,vRd;
                void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;
                float a=(1.-d*2.)*(1.-vR/620.)*(.2+vRd*.38);
                gl_FragColor=vec4(vec3(.78+vRd*.22),a);}`,transparent:!0,depthWrite:!1,blending:Wt}),this.galDisk=this._pts(e,this.galMat)}_nebulaDust(){const t=this.M?80:200,e=new Ut,n=new Float32Array(t*3),i=new Float32Array(t);for(let s=0;s<t;s++){const a=180+Math.random()*480,o=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1);n[s*3]=a*Math.sin(l)*Math.cos(o),n[s*3+1]=a*Math.sin(l)*Math.sin(o)*.4,n[s*3+2]=a*Math.cos(l),i[s]=80+Math.random()*140}e.setAttribute("position",new It(n,3)),e.setAttribute("aSize",new It(i,1)),this._nebBrightness=window._timeMode==="day"?1.7:window._timeMode==="night"?.65:1,this.nebMat=new Vt({uniforms:{uPR:{value:this.PR},uBright:{value:this._nebBrightness}},vertexShader:"attribute float aSize;uniform float uPR;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(aSize*uPR*(700./-mv.z),0.,220.);}",fragmentShader:"uniform float uBright;void main(){vec2 uv=gl_PointCoord-.5;float d=length(uv);if(d>.5)discard;float a=smoothstep(.5,0.,d)*.045*uBright;gl_FragColor=vec4(vec3(.85),a);}",transparent:!0,depthWrite:!1,blending:Wt}),this.nebPts=this._pts(e,this.nebMat)}_cosmicDust(){const t=this.M?1800:4500,e=new Ut,n=new Float32Array(t*3),i=new Float32Array(t);for(let s=0;s<t;s++){const a=20+Math.random()*300,o=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1);n[s*3]=a*Math.sin(l)*Math.cos(o),n[s*3+1]=a*Math.sin(l)*Math.sin(o),n[s*3+2]=a*Math.cos(l),i[s]=Math.random()}e.setAttribute("position",new It(n,3)),e.setAttribute("aRand",new It(i,1)),this.dustMat=new Vt({uniforms:{uTime:{value:0},uPR:{value:this.PR}},vertexShader:`attribute float aRand;uniform float uTime,uPR;
                void main(){vec3 p=position;p.y+=sin(uTime*aRand*.4+aRand*6.28)*.85;p.x+=cos(uTime*aRand*.3+aRand*3.14)*.5;
                vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
                gl_PointSize=clamp((.6+aRand*1.3)*uPR*(160./-mv.z),0.,7.);}`,fragmentShader:"void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;gl_FragColor=vec4(vec3(.78),(1.-d*2.)*.14);}",transparent:!0,depthWrite:!1,blending:Wt}),this.dustPts=this._pts(e,this.dustMat)}_pulsars(){this.pGroup=new pe,this.scene.add(this.pGroup),[{p:new P(300,80,-390),ph:0},{p:new P(-430,-60,195),ph:2.1}].forEach(({p:t,ph:e})=>{const n=new Vt({uniforms:{uTime:{value:0},uPh:{value:e}},vertexShader:"attribute float aT;varying float vT;void main(){vT=aT;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime,uPh;varying float vT;void main(){float pulse=pow(abs(sin(uTime*3.+uPh)),10.)*1.5;gl_FragColor=vec4(vec3(1.),(1.-vT)*.065*pulse);}",transparent:!0,depthWrite:!1,blending:Wt});[-1,1].forEach(a=>{const o=[],l=new P(a,.04*a,.07).normalize();for(let u=0;u<=50;u++)o.push(t.clone().addScaledVector(l,u/50*580));const c=new Ut().setFromPoints(o),h=new Float32Array(51);for(let u=0;u<=50;u++)h[u]=u/50;c.setAttribute("aT",new It(h,1)),this.pGroup.add(new De(c,n))});const i=new Vt({uniforms:{uTime:{value:0},uPh:{value:e}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime,uPh;void main(){float p=pow(abs(sin(uTime*3.+uPh)),4.);gl_FragColor=vec4(vec3(1.),p*.45);}",transparent:!0,blending:Wt,depthWrite:!1}),s=new ce(new Ne(1.4,8,8),i);s.position.copy(t),this.pGroup.add(s),this.pulsarMats.push({mat:n,dm:i})})}_godRays(){this.gRGroup=new pe,this.scene.add(this.gRGroup);for(let t=0;t<12;t++){const e=t/12*Math.PI*2,n=(Math.random()-.5)*.18,i=260+Math.random()*160;this._line([new P(0,0,0),new P(Math.cos(e+n)*i,(Math.random()-.5)*50,Math.sin(e+n)*i)],.007+Math.random()*.009)}for(let t=0;t<4;t++){const e=(Math.random()-.5)*80,n=(Math.random()-.5)*80;this._line([new P(e,-200,n),new P(e,200,n)],.006)}}_aurora(){this.aGroup=new pe,this.scene.add(this.aGroup),this.aRings=[],[{r:205,n:270,op:.05,rx:.3,rz:.1,s:{x:14e-5,y:2e-4,z:1e-4}},{r:290,n:340,op:.038,rx:1.1,rz:.4,s:{x:8e-5,y:13e-5,z:2e-4}},{r:368,n:420,op:.045,rx:.7,rz:1.2,s:{x:2e-4,y:1e-4,z:5e-5}},{r:445,n:500,op:.026,rx:1.5,rz:.8,s:{x:1e-4,y:8e-5,z:17e-5}},{r:528,n:580,op:.02,rx:.4,rz:.6,s:{x:11e-5,y:16e-5,z:7e-5}}].forEach(t=>{const e=[];for(let s=0;s<=t.n;s++)e.push(new P(Math.cos(s/t.n*Math.PI*2)*t.r,0,Math.sin(s/t.n*Math.PI*2)*t.r));const n=new yn({color:16777215,transparent:!0,opacity:t.op,blending:Wt,depthWrite:!1}),i=new De(new Ut().setFromPoints(e),n);i.rotation.x=t.rx,i.rotation.z=t.rz,i.userData.s=t.s,this.aGroup.add(i),this.aRings.push(i)})}_darkMatterWeb(){const t=this.M?30:60,e=[];for(let a=0;a<t;a++){const o=100+Math.random()*450,l=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1);e.push(new P(o*Math.sin(c)*Math.cos(l),o*Math.sin(c)*Math.sin(l),o*Math.cos(c)))}const n=[];if(e.forEach((a,o)=>{[...e].sort((c,h)=>a.distanceTo(c)-a.distanceTo(h)).slice(1,4).forEach(c=>{a.distanceTo(c)<220&&(n.push(a),n.push(c))})}),!n.length)return;const i=new Ut().setFromPoints(n),s=new yn({color:16777215,transparent:!0,opacity:.015,blending:Wt,depthWrite:!1});this.dmWeb=new Wf(i,s),this.scene.add(this.dmWeb)}animateColor(t){}resetColor(){}update(){const t=this.experience.time.elapsed;this.starGroups.forEach((e,n)=>{e.mat.uniforms.uTime.value=t,e.pts.rotation.y=t*(.0011-n*3e-4),e.pts.rotation.x=t*18e-5}),this.galMat&&(this.galMat.uniforms.uTime.value=t),this.nebPts&&(this.nebPts.rotation.y=t*.003),this.dustMat&&(this.dustMat.uniforms.uTime.value=t,this.dustPts.rotation.y=-t*.0018),this.gRGroup&&(this.gRGroup.rotation.y=t*.005),this.pulsarMats.forEach(e=>{e.mat.uniforms.uTime.value=t,e.dm.uniforms.uTime.value=t}),this.pGroup&&(this.pGroup.rotation.y=t*.032),this.aRings.forEach(e=>{e.rotation.x+=e.userData.s.x,e.rotation.y+=e.userData.s.y,e.rotation.z+=e.userData.s.z}),this.dmWeb&&(this.dmWeb.rotation.y=t*8e-4)}}const Xh=[{type:"about",kicker:"Profil",title:"Tentang Saya",desc:"As the founder of Archipelago Dynamics, I am dedicated to bridging Indonesia's vast potential with the global market. Our journey began in international trade, exporting premium local commodities and importing cutting-edge technology. This experience revealed a critical need for digital efficiency, leading to the creation of our IT Solutions division, which now empowers businesses with transformative software and enterprise architecture. Today, we continue to innovate across sectors, driven by a core mission to build synergistic ventures that pioneer the future.",exp:`-Founder & Chief Visionary Officer, Archipelago Dynamics (2023 - Present)
-Global Trade Analyst, Maersk Line (2021 - 2025)
-Fullstack & DevOps Engineer(intern), Yayasan Bina Insan Taqwa
-SCRATCH Trainer, IDNBS( IDN IT CAMP BATCH 2)
-MicroBit Trainer, IDNBS( IDN IT CAMP BATCH 2)
-UI/UX Trainer – Al Ashr Bina Mandiri (2023)
-3rd Winner of National Coding Competition(AL-HAZEN ACADEMY)`,skills:`-Business Strategy & Leadership Skills: Global Trade & Supply Chain Management, Enterprise Architecture & Digital Transformation, Venture Capital & Strategic Investment
-Frontend: HTML, CSS, JS, PHP, Dart, Kotlin, Mobile/Web, Responsive, Design, UI/UX ,React, Lowcoder
-Backend & Database: Node.js, NestJS, PHP, Laravel, Python, MySQL, PostgreSQL, Prisma
-Web3: Solidity, Ethers.js
-Cloud & DevOps: Linux, Docker, KVM, Networking, Firewall Configuration, CI/CD, Nginx, Apache, Git, GitHub Actions`,image:"https://placehold.co/1200x800/000000/FFFFFF?text=Rokan+S.+F."},{type:"project",kicker:"E-Commerce",title:"Peti Ngemil",desc:"Peti Ngemil is an e-commerce web platform built to support local MSME food vendors by providing them a digital storefront — for free. Designed and developed as a team project, it includes complete features for users and admins, making it a powerful, real-world solution for small business digitization.",features:`Role-based access (admin/customer)
Integrasi Midtrans & RajaOngkir
Cetak struk
Admin dashboard`,image:"https://placehold.co/1200x800/000000/FFFFFF?text=Peti+Ngemil",tags:["Laravel","Node.js","MySQL","Blade","TailwindCSS"]},{type:"project",kicker:"Infrastruktur",title:"Distributed File Sync",desc:"This project implements a real-time, peer-to-peer file synchronization system for a school environment (covering elementary, junior high, and administration divisions). Built using Syncthing and Docker, the system allows all school computers to share and access documents like a shared cloud — but fully offline, within the local network.",features:"Real-time document sync across all devices, No internet required (fully local network), Easy deployment via Docker containers, Improves collaboration and access between departments",image:"https://placehold.co/1200x800/000000/FFFFFF?text=File+Sync",tags:["Syncthing","Docker","Tailscale"]},{type:"project",kicker:"Backend",title:"NestJS RESTful API",desc:"This project is a secure and scalable RESTful API built with NestJS, using PostgreSQL as the database and Prisma ORM for data access. Authentication is implemented using JWT tokens, and the API supports full CRUD functionality for managing user and resource data.",features:"Full CRUD operations (Create, Read, Update, Delete), User authentication with JWT, Role-based access control (optional), PostgreSQL database with Prisma ORM, Clean modular architecture using NestJS",image:"https://placehold.co/1200x800/000000/FFFFFF?text=NestJS+API",tags:["NestJS","PostgreSQL","Prisma","JWT","Dotenv"]},{type:"project",kicker:"Web3",title:"Decentralized To-Do List",desc:"This is a fully decentralized To-Do List application built using Web3 technologies. The frontend is developed with React and styled using Tailwind CSS, while the backend logic runs on a Solidity smart contract deployed to a local Ethereum network using Hardhat. Users can create and manage tasks that are stored entirely on the blockchain. Wallet authentication is handled through MetaMask, ensuring secure and user-specific task management.",features:"Add new tasks tied to the wallet address, Fetch and display tasks from the smart contract, Delete tasks securely (only by task creator), MetaMask integration for user authentication and transaction signing, Responsive and elegant user interface, Blockchain data persistence (survives page reloads, not server resets)",image:"https://placehold.co/1200x800/000000/FFFFFF?text=Web3+DApp",tags:["React","Solidity","Ethers.js","Hardhat","MetaMask","TailwindCSS"]},{type:"project",kicker:"Creative Studio",title:"Plantique",desc:"Plantique is a creative studio concept that merges art, web design, development, and lifestyle. Originally built as a web service hub for my team, the site delivers a visually engaging and responsive experience. Featuring dynamic animations with GSAP and JavaScript, Plantique showcases our aesthetic and technical direction.",features:"Interactive UI with GSAP-powered transitions, Fully responsive layout for mobile and desktop, Creative visual direction for modern web audiences",image:"https://placehold.co/1200x800/000000/FFFFFF?text=Plantique",tags:["HTML5","CSS3","JavaScript","GSAP"]},{type:"project",kicker:"Edu Platform",title:"SkillForge",desc:"SkillForge is an educational platform designed to help individuals learn in-demand skills through online courses. It includes a website, course management system, and network integration. Built during a competitive event, SkillForge led our team to achieve 3rd place.",features:`Manajemen kursus
Form handling
Responsive UI`,image:"https://placehold.co/1200x800/000000/FFFFFF?text=SkillForge",tags:["Laravel","Bootstrap","Blade","MySQL"]},{type:"project",kicker:"Android",title:"AroundU App",desc:"AroundU is a modern Android app developed in Kotlin that fetches and displays the latest news from local Indonesian sources using the NewsAPI. The app provides an intuitive user experience with RecyclerView for listing articles and a bottom navigation bar for smooth page transitions like Home, Categories, and Settings.",features:"Real-time news fetching with NewsAPI, RecyclerView for efficient list rendering, Bottom Navigation Bar for multi-page UI, Responsive layout & clean MVVM structure, Built with Android Studio and Kotlin",image:"https://placehold.co/1200x800/000000/FFFFFF?text=AroundU",tags:["Kotlin","NewsAPI","RecyclerView","MVVM","Retrofit","NewsAPI"]},{type:"project",kicker:"Android",title:"Quranku App",desc:"Quranku is a modern Android application developed with Kotlin, designed to provide users with the full Al-Qur’an and enriched interactive features. Users can select verses or full surahs to be recited aloud (tilawah), choose from multiple reciters (syeikh), and view real-time adzan times based on their location.",features:"Full 114 surahs with verse-by-verse selection, Multiple reciters (Syeikh Mishary, Abdul Basit, etc.), Audio playback per ayah or per surah, Daily prayer (adzan) schedule with local time sync, Modern UI with Material Design, Lightweight and fully offline-ready (with optional audio download)",image:"https://placehold.co/1200x800/000000/FFFFFF?text=Quranku",tags:["Kotlin","Android Jetpack","Retrofit","MediaPlayer"]},{type:"project",kicker:"Android",title:"Dzikirku",desc:"Dzikirku is a comprehensive Islamic Android app developed in Kotlin that combines daily dzikir and prayer collections with real-time adzan schedule and curated Islamic news. Built to support Muslims in their daily worship and spiritual routine, it offers a clean and responsive interface with intuitive features.",features:"Dzikir harian pagi dan petang, Kumpulan doa-doa sesuai kategori (perjalanan, kesehatan, dll.), Jadwal adzan harian berdasarkan lokasi pengguna, Islamic news feed from trusted sources, Reminder/notification for prayer times",image:"https://placehold.co/1200x800/000000/FFFFFF?text=Dzikirku",tags:["Kotlin","Jetpack","Firebase","Retrofit","LocalDatabase"]},{type:"project",kicker:"NAS System",title:"Self-Hosted NAS System",desc:"A centralized file storage system (NAS) designed for school environments (SD, SMP, and administration), enabling all computers to access shared files via local network. The system leverages Docker for modularity, Portainer for visual container management, and ZimaOS for lightweight, container-based NAS operations.",features:`Centralized file access over LAN
Web-based file manager and sharing tools
Backup, permission management, and file versioning
Admin-friendly UI via Portainer
Lightweight performance using ZimaOS`,image:"https://placehold.co/1200x800/000000/FFFFFF?text=NAS+System",tags:["Docker","ZimaOS","Portainer","HTTP","Composer","Linux"]},{type:"project",kicker:"Wardrobe App",title:"Wardrobe",desc:"WARDROBE is an omni-channel fashion marketplace that focuses on curated selections of local and indie brands. The platform provides a seamless shopping experience both online and offline, empowering local fashion businesses by giving them digital exposure.",features:`Multi-brand product catalog
Store locator & offline integration
Modern e-commerce UI/UX
Responsive design for all devices
Support for curated brand onboarding`,image:"https://placehold.co/1200x800/000000/FFFFFF?text=NAS+System",tags:["ReactJS","Node.JS","MongoDB","Midtrans","AWS"]},{certList:[{title:"Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/L4PQGL832ZO1"},{title:"Modernize Infrastructure and Applications with Google Cloud",issuer:"Google Cloud",link:"https://www.simplilearn.com/free-google-cloud-application-modernization-course-skillup"},{title:"DevOps 101: What is DevOps?",issuer:"Coursera / Partner",link:"https://www.simplilearn.com/learn-devops-basics-free-skillup"},{title:"Belajar Dasar Pemrograman JavaScript",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/81P2G9208POY"},{title:"Belajar Dasar Pemrograman Web",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/1OP85Y9Y2PQK"},{title:"Memulai Pemrograman dengan Kotlin",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/GRX52D7M2X0M"},{title:"Memulai Pemrograman Dengan Java",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/N9ZO7JL1RZG5"},{title:"Get Started with Figma",issuer:"Coursera / Partner",link:"https://www.coursera.org/account/accomplishments/verify/PN928E8E8CYZ"},{title:"EF SET English Certificate (C2 Proficient)",issuer:"EF SET",link:"https://cert.efset.org/en/pc7evu"},{title:"Fortinet Network Security Expert Level 1: Certified Associate",issuer:"Fortinet",link:"https://drive.google.com/file/d/1E7WEm9of_UYBcwoumWJSLOmSay7MJL_X/view"},{title:"Fortinet Network Security Expert Level 2: Certified Associate",issuer:"Fortinet",link:"https://drive.google.com/file/d/12hM30SPq1IihwbVdiUYBSc4ljXFKCuPJ/view"}]}],Rl=[{title:"Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/L4PQGL832ZO1"},{title:"Modernize Infrastructure and Applications with Google Cloud",issuer:"Google Cloud",link:"https://www.simplilearn.com/free-google-cloud-application-modernization-course-skillup"},{title:"DevOps 101: What is DevOps?",issuer:"Coursera / Partner",link:"https://www.simplilearn.com/learn-devops-basics-free-skillup"},{title:"Belajar Dasar Pemrograman JavaScript",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/81P2G9208POY"},{title:"Belajar Dasar Pemrograman Web",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/1OP85Y9Y2PQK"},{title:"Memulai Pemrograman dengan Kotlin",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/GRX52D7M2X0M"},{title:"Memulai Pemrograman Dengan Java",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/N9ZO7JL1RZG5"},{title:"Get Started with Figma",issuer:"Coursera / Partner",link:"https://www.coursera.org/account/accomplishments/verify/PN928E8E8CYZ"},{title:"EF SET English Certificate (C2 Proficient)",issuer:"EF SET",link:"https://cert.efset.org/en/pc7evu"},{title:"Fortinet Network Security Expert Level 1: Certified Associate",issuer:"Fortinet",link:"https://drive.google.com/file/d/1E7WEm9of_UYBcwoumWJSLOmSay7MJL_X/view"},{title:"Fortinet Network Security Expert Level 2: Certified Associate",issuer:"Fortinet",link:"https://drive.google.com/file/d/12hM30SPq1IihwbVdiUYBSc4ljXFKCuPJ/view"}];class Bx{constructor(){this.experience=new Pn,this.scene=this.experience.scene,this.M=this.experience.isMobile,this.nodes=[],this.traffic=[],this.shots=[],this.comets=[],this.nextShot=1.5,this.nextComet=7,this.nodeGroup=new pe,this.scene.add(this.nodeGroup),this._lights(),this.background=new Ox,this._nodes(),this._web(),this._asteroids(),this._cosmicObjects(),this._supernova(),this._memoryCore(),this._setupBHClick(),this._shootPool(),this._touchSetup(),this.isPaused=!1,this._tm={x:0,y:0},this._sm={x:0,y:0},window.addEventListener("mousemove",t=>{this._tm.x=t.clientX/window.innerWidth-.5,this._tm.y=t.clientY/window.innerHeight-.5})}_lights(){this.scene.add(new cp(394768,.5));const t=new $c(11058943,2);t.position.set(110,90,75),this.scene.add(t);const e=new $c(16767136,.28);e.position.set(-90,-35,-70),this.scene.add(e),this.coreLight=new to(16777215,4.2,310),this.coreLight.position.set(0,0,0),this.scene.add(this.coreLight);const n=new to(16777215,.6,180);n.position.set(90,25,70),this.scene.add(n);const i=new to(16777215,.5,180);i.position.set(-75,-18,-55),this.scene.add(i)}_nodes(){const t={type:"certification",title:"Sertifikasi",kicker:"Professional",desc:"Kumpulan lisensi dan sertifikasi profesional.",image:"https://placehold.co/800x400/050510/ffffff?text=Certifications",certList:Rl},e=Xh.find(s=>s.type==="about"),n=Xh.filter(s=>s.type!=="about"&&!s.certList),i=[e,t,...n];i.forEach((s,a)=>{const o=Math.acos(-1+2*a/i.length),l=Math.sqrt(i.length*Math.PI)*o,c=this.M?36:46,h=new P().setFromSphericalCoords(c,o,l),u=new Nx(s,h);u.originalPos=h.clone(),this.nodes.push(u),this.nodeGroup.add(u.group)})}_web(){this.webGroup=new pe,this.nodeGroup.add(this.webGroup),this.webMat=new Vt({uniforms:{uTime:{value:0}},vertexShader:"attribute float aP;varying float vP;void main(){vP=aP;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float uTime;varying float vP;
                void main(){
                    float f1=fract(vP*2.8-uTime*.33);float f2=fract(vP*2.8-uTime*.33-.35);
                    float b=smoothstep(0.,.065,f1)*smoothstep(.22,.08,f1)+smoothstep(0.,.065,f2)*smoothstep(.22,.08,f2)*.6;
                    gl_FragColor=vec4(vec3(.78+b*.22),.033+b*.28);
                }`,transparent:!0,depthWrite:!1,blending:Wt});const t=new Ne(.045,5,5),e=new Vi({color:16777215,transparent:!0,opacity:.78,blending:Wt,depthWrite:!1,depthTest:!1});this.nodes.forEach((n,i)=>{this.nodes.map((a,o)=>({d:n.group.position.distanceTo(a.group.position),n:a,j:o})).filter(a=>a.j!==i).sort((a,o)=>a.d-o.d).slice(0,3).forEach(({n:a})=>{const o=n.group.position,l=a.group.position,c=new P().addVectors(o,l).multiplyScalar(.5).add(new P((Math.random()-.5)*9,(Math.random()-.5)*9,(Math.random()-.5)*9)),h=new Zf(o,c,l),u=h.getPoints(68),d=new Ut().setFromPoints(u),f=new Float32Array(u.length);u.forEach((_,g)=>f[g]=g/(u.length-1)),d.setAttribute("aP",new It(f,1)),this.webGroup.add(new De(d,this.webMat));for(let _=0;_<2+Math.floor(Math.random()*2);_++){const g=new ce(t,e.clone());this.nodeGroup.add(g),this.traffic.push({pk:g,curve:h,spd:.003+Math.random()*.008,progress:Math.random()})}})})}_asteroids(){[{r:68,sp:8,n:this.M?180:460,inc:.12,spd:.011},{r:100,sp:10,n:this.M?280:650,inc:.36,spd:.007},{r:140,sp:7,n:this.M?130:340,inc:1.1,spd:.004}].forEach(t=>{const e=new Ut,n=new Float32Array(t.n*3),i=new Float32Array(t.n),s=new Float32Array(t.n);for(let o=0;o<t.n;o++){const l=t.r+(Math.random()-.5)*t.sp,c=Math.random()*Math.PI*2;n[o*3]=l*Math.cos(c),n[o*3+1]=(Math.random()-.5)*t.sp*.22,n[o*3+2]=l*Math.sin(c),i[o]=.35+Math.random()*1.5,s[o]=Math.random()}e.setAttribute("position",new It(n,3)),e.setAttribute("aSize",new It(i,1)),e.setAttribute("aRand",new It(s,1));const a=new Vt({uniforms:{uTime:{value:0},uSpd:{value:t.spd},uPR:{value:Math.min(this.experience.sizes.pixelRatio,2)},uInc:{value:t.inc}},vertexShader:`attribute float aSize,aRand;uniform float uTime,uSpd,uPR,uInc;varying float vR;
                    void main(){vR=aRand;float r=length(position.xz);
                    float angle=atan(position.z,position.x)+uTime*uSpd*(1.+aRand*.22);
                    float cI=cos(uInc),sI=sin(uInc);
                    vec3 p=vec3(cos(angle)*r,position.y*cI-sin(angle)*r*sI,sin(angle)*r*cI+position.y*sI);
                    p.y+=sin(uTime*aRand*.38)*aRand*.28;
                    vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
                    gl_PointSize=clamp(aSize*uPR*(265./-mv.z),0.,6.);}`,fragmentShader:"varying float vR;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;gl_FragColor=vec4(vec3(.5+vR*.38),(1.-d*2.)*.38);}",transparent:!0,depthWrite:!1,blending:Wt});this.scene.add(new pi(e,a)),this._bMats||(this._bMats=[]),this._bMats.push(a)})}_cosmicObjects(){this.cosmicGroup=new pe,this.scene.add(this.cosmicGroup),this.cosmicMats=[];const t=new P(180,20,-120),e=new pe;e.position.copy(t),this.bhMat=new Vt({uniforms:{uTime:{value:0}},vertexShader:`attribute float aAngle,aRad;uniform float uTime;varying float vR,vA;
                void main(){
                    vA=aAngle;vR=aRad;
                    float a=aAngle+uTime*(1.5/max(aRad*.08,1.)); // inner faster
                    vec3 p=vec3(cos(a)*aRad,0.,sin(a)*aRad);
                    gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
                }`,fragmentShader:`uniform float uTime;varying float vR,vA;
                void main(){
                    // Doppler shift: brighter on approaching side
                    float dopp=.5+.5*cos(vA+uTime*1.5);
                    float fade=smoothstep(28.,8.,vR)*smoothstep(6.,16.,vR);
                    float a=fade*(.3+dopp*.5);
                    gl_FragColor=vec4(vec3(1.),a);
                }`,transparent:!0,depthWrite:!1,blending:Wt}),this.cosmicMats.push(this.bhMat);const n=new Ut,i=[],s=[];for(let k=8;k<=28;k+=.18){const Y=Math.floor(120+k*8);for(let nt=0;nt<Y;nt++){const st=nt/Y*Math.PI*2;i.push(st),s.push(k)}}const a=new Float32Array(i.length*3);i.forEach((k,Y)=>{a[Y*3]=Math.cos(k)*s[Y],a[Y*3+1]=0,a[Y*3+2]=Math.sin(k)*s[Y]}),n.setAttribute("position",new It(a,3)),n.setAttribute("aAngle",new It(new Float32Array(i),1)),n.setAttribute("aRad",new It(new Float32Array(s),1));const o=new pi(n,this.bhMat);o.rotation.x=Math.PI*.12,e.add(o);const l=new ce(new Ne(7,32,32),new Vi({color:0,depthWrite:!0}));e.add(l),this._ringLine(e,10.5,0,Math.PI*.12,.08);for(let k=0;k<6;k++){const Y=[];for(let st=0;st<=40;st++){const vt=st/40,Mt=vt*Math.PI,W=12+Math.sin(Mt)*8*(1+k*.5),$=k%2?1:-1;Y.push(new P(Math.cos(Mt+k*.4)*W,$*(4+k*1.5)*Math.sin(Mt),Math.sin(Mt+k*.4)*W*(.2+k*.08)))}const nt=new yn({color:16777215,transparent:!0,opacity:.06-k*.008,blending:Wt,depthWrite:!1});e.add(new De(new Ut().setFromPoints(Y),nt))}this.cosmicGroup.add(e),this.bhGroup=e;const c=new P(-160,30,140),h=new pe;h.position.copy(c),this.nsMat=new Vt({uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}",fragmentShader:`uniform float uTime;varying vec3 vN,vVP;
                void main(){
                    float pulse=.85+.15*sin(uTime*30.); // rapid spin flicker
                    float diff=max(dot(vN,normalize(vec3(1.,.5,.5))),0.);
                    float rim=pow(1.-abs(dot(normalize(vVP),vN)),2.5)*.8;
                    float lit=(diff*.8+.2+rim)*pulse;
                    gl_FragColor=vec4(vec3(lit),1.);
                }`}),this.cosmicMats.push(this.nsMat),h.add(new ce(new Ne(3.5,32,32),this.nsMat));for(let k=0;k<8;k++){const Y=k/8*Math.PI*2,nt=[];for(let vt=0;vt<=30;vt++){const Mt=vt/30,W=Mt*Math.PI,$=3.8+Math.sin(W)*12;nt.push(new P(Math.cos(Y)*$*Math.sin(W),$*Math.cos(W)*1.5,Math.sin(Y)*$*Math.sin(W)))}const st=new yn({color:16777215,transparent:!0,opacity:.08,blending:Wt,depthWrite:!1});h.add(new De(new Ut().setFromPoints(nt),st))}this.nsJetMat=new Vt({uniforms:{uTime:{value:0}},vertexShader:"attribute float aT;varying float vT;void main(){vT=aT;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime;varying float vT;void main(){float p=pow(abs(sin(uTime*30.)),.5);float a=(1.-vT)*.25*p;gl_FragColor=vec4(vec3(1.),a);}",transparent:!0,depthWrite:!1,blending:Wt}),this.cosmicMats.push(this.nsJetMat),[-1,1].forEach(k=>{const Y=[],nt=[];for(let vt=0;vt<=30;vt++)Y.push(new P(0,k*vt*1.8,0)),nt.push(vt/30);const st=new Ut().setFromPoints(Y);st.setAttribute("aT",new It(new Float32Array(nt),1)),h.add(new De(st,this.nsJetMat))}),h.userData.rotSpd=.15,this.cosmicGroup.add(h),this.nsGroup=h;const u=new P(-250,-40,-200),d=new pe;d.position.copy(u),this.qMat=new Vt({uniforms:{uTime:{value:0}},vertexShader:"attribute float aT;varying float vT;void main(){vT=aT;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime;varying float vT;void main(){float p=abs(sin(uTime*.8+vT*3.))*.5+.5;float a=(1.-vT)*(.18+p*.12);gl_FragColor=vec4(vec3(1.),a);}",transparent:!0,depthWrite:!1,blending:Wt}),this.cosmicMats.push(this.qMat),[-1,1].forEach(k=>{const nt=[],st=[];for(let Mt=0;Mt<=60;Mt++){const W=Mt/60,$=W*3*k;nt.push(new P((Math.random()-.5)*$*.5,k*Mt*3.5,(Math.random()-.5)*$*.5)),st.push(W)}const vt=new Ut().setFromPoints(nt);vt.setAttribute("aT",new It(new Float32Array(st),1)),d.add(new De(vt,this.qMat))}),d.add(new ce(new Ne(4,16,16),new Vt({uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vN;void main(){vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime;varying vec3 vN;void main(){float p=.85+.15*sin(uTime*.9);float rim=pow(1.-abs(dot(vN,vec3(0,0,1))),2.)*p;gl_FragColor=vec4(vec3(rim+.2),1.);}"}))),this.cosmicGroup.add(d),this.qGroup=d;const f=new P(220,-35,160),_=new pe;_.position.copy(f),_.add(new ce(new Ne(5,12,12),new Vi({color:16777215})));const g=new yn({color:16777215,transparent:!0,opacity:.15,blending:Wt,depthWrite:!1});for(let k=-3;k<=3;k++){const Y=k*4.5,nt=Math.sqrt(Math.max(0,324-Y*Y)),st=[],vt=k===0?60:Math.floor(40+Math.abs(k)*5);for(let Mt=0;Mt<=vt;Mt++){if(Math.random()<.12&&Mt>0)continue;const W=Mt/vt*Math.PI*2;st.push(new P(Math.cos(W)*nt,Y,Math.sin(W)*nt))}st.length>1&&_.add(new De(new Ut().setFromPoints(st),g))}for(let k=0;k<12;k++){const Y=k/12*Math.PI*2,nt=[];for(let st=0;st<=20;st++){const vt=st/20*Math.PI;nt.push(new P(Math.sin(vt)*Math.cos(Y)*18,Math.cos(vt)*18,Math.sin(vt)*Math.sin(Y)*18))}Math.random()>.35&&_.add(new De(new Ut().setFromPoints(nt),g))}_.userData.rotSpd=.002,this.cosmicGroup.add(_),this.dsGroup=_;const m=new P(80,60,-220),p=new pe;p.position.copy(m);const M=3;for(let k=0;k<M;k++){const Y=this.M?120:320,nt=new Ut,st=new Float32Array(Y*3),vt=new Float32Array(Y),Mt=new Float32Array(Y),W=(k-1)*12,$=25+k*8;for(let mt=0;mt<Y;mt++){const qt=Math.random()*$,be=(1-qt/$)*5+1;st[mt*3]=W+(Math.random()-.5)*be*2,st[mt*3+1]=qt,st[mt*3+2]=(Math.random()-.5)*be*2,vt[mt]=2+Math.random()*4,Mt[mt]=Math.random()}nt.setAttribute("position",new It(st,3)),nt.setAttribute("aSize",new It(vt,1)),nt.setAttribute("aRand",new It(Mt,1));const pt=new Vt({uniforms:{uTime:{value:0},uPR:{value:Math.min(this.experience.sizes.pixelRatio,2)},uIdx:{value:k}},vertexShader:`attribute float aSize,aRand;uniform float uTime,uPR,uIdx;varying float vR;
                    void main(){vR=aRand;
                    vec3 p=position;p.y+=sin(uTime*(aRand*.3+.1)+aRand*6.28)*.4;
                    vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
                    gl_PointSize=clamp(aSize*uPR*(300./-mv.z),0.,18.);}`,fragmentShader:`varying float vR;
                    void main(){vec2 uv=gl_PointCoord-.5;float d=length(uv);if(d>.5)discard;
                    float a=smoothstep(.5,0.,d)*(.12+vR*.18);gl_FragColor=vec4(vec3(.88+vR*.12),a);}`,transparent:!0,depthWrite:!1,blending:Wt}),Nt=new pi(nt,pt);p.add(Nt),this._nebMats||(this._nebMats=[]),this._nebMats.push(pt)}this.cosmicGroup.add(p),this.nebGroup=p;const S=new P(-100,-25,50),y=new pe;y.position.copy(S),this.dmMat=new Vt({uniforms:{uTime:{value:0}},vertexShader:`attribute float aPhase;uniform float uTime;varying float vP;
                void main(){vP=aPhase;float wobble=sin(uTime*.2+aPhase)*0.02;
                vec3 p=position*(1.+wobble);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,fragmentShader:`uniform float uTime;varying float vP;
                void main(){float p=abs(sin(uTime*.3+vP*4.))*.5+.5;float a=.025+p*.015;
                gl_FragColor=vec4(vec3(1.),a);}`,transparent:!0,depthWrite:!1,blending:Wt}),[18,28,40,55].forEach((k,Y)=>{const nt=120+Y*40,st=[],vt=[];for(let $=0;$<=nt;$++){const pt=$/nt*Math.PI*2;st.push(new P(Math.cos(pt)*k,Math.sin(pt)*k*.35,(Math.random()-.5)*k*.08)),vt.push(pt)}const Mt=new Ut().setFromPoints(st);Mt.setAttribute("aPhase",new It(new Float32Array(vt),1));const W=new De(Mt,this.dmMat);W.rotation.x=-.3+Y*.15,W.rotation.z=Y*.2,y.add(W)}),y.userData.rotSpd=6e-4,this.cosmicGroup.add(y),this.dmGroup=y;const b=new P(150,40,100),E=new pe;E.position.copy(b);const A=new Vt({uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}",fragmentShader:"uniform float uTime;varying vec3 vN,vVP;void main(){float f=pow(clamp(1.-dot(normalize(vVP),vN),0.,1.),2.);float p=.85+.15*sin(uTime*1.8);gl_FragColor=vec4(vec3(p*.9+f*.6),1.);}"});E.add(new ce(new Ne(2.5,16,16),A)),this._exoPlanets=[],[6,10,15,22].forEach((k,Y)=>{const nt=new xu({color:11184810,roughness:.9,metalness:.05,emissive:1118481,emissiveIntensity:.1}),st=.4+Y*.18,vt=new ce(new Ne(st,12,12),nt),Mt=[];for(let $=0;$<=60;$++)Mt.push(new P(Math.cos($/60*Math.PI*2)*k,0,Math.sin($/60*Math.PI*2)*k));const W=new De(new Ut().setFromPoints(Mt),new yn({color:16777215,transparent:!0,opacity:.04,blending:Wt,depthWrite:!1}));E.add(W),E.add(vt),this._exoPlanets.push({mesh:vt,orb:k,spd:.008-Y*.0012,offset:Math.random()*Math.PI*2})}),this._cosmicMiscMats||(this._cosmicMiscMats=[]),this._cosmicMiscMats.push(A),this.cosmicGroup.add(E),this.exoGroup=E;const C=new P(-180,55,-60),v=new pe;v.position.copy(C),this.mgMat=new Vt({uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}",fragmentShader:`uniform float uTime;varying vec3 vN,vVP;
                void main(){float p=.7+.3*sin(uTime*50.);// ultra rapid spin 50Hz
                float rim=pow(clamp(1.-dot(normalize(vVP),vN),0.,1.),1.8)*.9;
                float diff=max(dot(vN,normalize(vec3(1.,.5,.5))),0.);
                gl_FragColor=vec4(vec3((diff*.7+.3+rim)*p),1.);}`}),v.add(new ce(new Ne(1.8,20,20),this.mgMat));for(let k=0;k<12;k++){const Y=k/12*Math.PI*2,nt=[];for(let st=0;st<=25;st++){const vt=st/25,Mt=vt*Math.PI,W=2.2+Math.sin(Mt)*18*(1+Math.sin(Y)*.3);nt.push(new P(Math.cos(Y)*W*Math.sin(Mt),W*Math.cos(Mt)*2,Math.sin(Y)*W*Math.sin(Mt)))}v.add(new De(new Ut().setFromPoints(nt),new yn({color:16777215,transparent:!0,opacity:.07,blending:Wt,depthWrite:!1})))}v.userData.rotSpd=.08,this.cosmicGroup.add(v),this.mgGroup=v;const T=[];for(let k=0;k<=60;k++){const Y=k/60,nt=(Math.sin(Y*12)+Math.cos(Y*7))*.8;T.push(new P(-300+Y*600,nt+Math.sin(Y*5)*3,Math.cos(Y*8)*8))}const D=new Ut().setFromPoints(T),N=new Float32Array(61);T.forEach((k,Y)=>N[Y]=Y/60),D.setAttribute("aT",new It(N,1)),this.csMat=new Vt({uniforms:{uTime:{value:0}},vertexShader:`attribute float aT;uniform float uTime;varying float vT;
                void main(){vT=aT;
                vec3 p=position;p.y+=sin(uTime*.08+aT*20.)*.25;// subtle vibration
                gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,fragmentShader:`uniform float uTime;varying float vT;
                void main(){float wave=abs(sin(vT*8.-uTime*.5))*.5+.5;
                float a=.03+wave*.04;gl_FragColor=vec4(vec3(1.),a);}`,transparent:!0,depthWrite:!1,blending:Wt}),this.scene.add(new De(D,this.csMat));const O=new P(-200,15,220),q=new pe;q.position.copy(O),this.whMat=new Vt({uniforms:{uTime:{value:0}},vertexShader:`attribute float aA,aR;uniform float uTime;varying float vR,vA;
                void main(){vR=aR;vA=aA;float a=aA+uTime*(-.8/max(aR*.12,1.));vec3 p=vec3(cos(a)*aR,0,sin(a)*aR);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,fragmentShader:`uniform float uTime;varying float vR,vA;
                void main(){
                    float throat=smoothstep(14.,5.,vR)*smoothstep(4.,10.,vR);
                    float spin=abs(sin(vA*4.+uTime*2.))*.4+.6;
                    float a=throat*spin*.32;
                    gl_FragColor=vec4(vec3(1.),a);
                }`,transparent:!0,depthWrite:!1,blending:Wt}),this.cosmicMats.push(this.whMat);const X=[],V=[],B=[];for(let k=5;k<=14;k+=.15){const Y=Math.floor(80+k*10);for(let nt=0;nt<Y;nt++){const st=nt/Y*Math.PI*2;X.push(st),V.push(k),B.push(Math.cos(st)*k,0,Math.sin(st)*k)}}const Z=new Ut;Z.setAttribute("position",new It(new Float32Array(B),3)),Z.setAttribute("aA",new It(new Float32Array(X),1)),Z.setAttribute("aR",new It(new Float32Array(V),1));const at=new pi(Z,this.whMat);at.rotation.x=Math.PI*.08,q.add(at),q.add(new ce(new Ne(4.5,16,16),new Vi({color:0,depthWrite:!0}))),this.cosmicGroup.add(q),this.whGroup=q}_memoryCore(){const t=new P(-30,15,-35);this.memoryCoreGroup=new pe,this.memoryCoreGroup.position.copy(t);const e=new oa(4.5,1);this.mcMat=new Vt({uniforms:{uTime:{value:0},uHover:{value:0}},vertexShader:`
                uniform float uTime, uHover;
                varying vec3 vPos;
                void main(){
                    vPos = position;
                    // Subtle breathing
                    float breath = 1.0 + sin(uTime*0.8)*0.04 + uHover*0.08;
                    gl_Position = projectionMatrix*modelViewMatrix*vec4(position*breath,1.0);
                }
            `,fragmentShader:`
                uniform float uTime, uHover;
                varying vec3 vPos;
                void main(){
                    float pulse = 0.5 + 0.5*sin(uTime*1.2);
                    float base = 0.06 + pulse*0.04 + uHover*0.35;
                    // Crack effect — dark gaps
                    float crack = abs(sin(vPos.x*8.0)*sin(vPos.y*8.0)*sin(vPos.z*8.0));
                    base *= smoothstep(0.0, 0.3, crack);
                    gl_FragColor = vec4(vec3(base), base*1.4);
                }
            `,transparent:!0,blending:Wt,depthWrite:!1,wireframe:!0});const n=new ce(e,this.mcMat);this.memoryCoreGroup.add(n);const i=new Vt({uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}",fragmentShader:"uniform float uTime;varying vec3 vN,vVP;void main(){float f=pow(clamp(1.-dot(normalize(vVP),vN),0.,1.),3.);float p=0.5+0.5*sin(uTime*0.9);gl_FragColor=vec4(vec3(f*p*.5),f*p*.4);}",transparent:!0,blending:Wt,depthWrite:!1,side:Cn});this.memoryCoreGroup.add(new ce(new Ne(2.5,16,16),i)),this.mcInnerMat=i,this.mcFragments=[];for(let s=0;s<6;s++){const a=new oa(.3+Math.random()*.25,0),o=new Vi({color:16777215,wireframe:!0,transparent:!0,opacity:.08+Math.random()*.06}),l=new ce(a,o),c=s/6*Math.PI*2;l.position.set(Math.cos(c)*7,Math.sin(c*.7)*2.5,Math.sin(c)*7),l.userData={angle:c,speed:.004+Math.random()*.004,radius:6+Math.random()*2},this.memoryCoreGroup.add(l),this.mcFragments.push(l)}this.memoryCoreGroup.userData.isMemoryCore=!0,this.scene.add(this.memoryCoreGroup),this._mcHoverTime=0,this._mcDreamShown=!1}_ringLine(t,e,n,i,s){const a=[];for(let c=0;c<=80;c++)a.push(new P(Math.cos(c/80*Math.PI*2)*e,0,Math.sin(c/80*Math.PI*2)*e));const o=new yn({color:16777215,transparent:!0,opacity:s,blending:Wt,depthWrite:!1}),l=new De(new Ut().setFromPoints(a),o);return l.rotation.x=n,l.rotation.y=i,t.add(l),l}_supernova(){const t=new P(120,-55,180);this.snGroup=new pe,this.snGroup.position.copy(t),this.snRadius=0,this.snMaxRadius=35,this.snExpanding=!0;const e=this.M?300:700,n=new Ut,i=new Float32Array(e*3),s=new Float32Array(e);for(let a=0;a<e;a++){const o=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1);i[a*3]=Math.sin(l)*Math.cos(o),i[a*3+1]=Math.sin(l)*Math.sin(o),i[a*3+2]=Math.cos(l),s[a]=Math.random()}n.setAttribute("position",new It(i,3)),n.setAttribute("aRand",new It(s,1)),this.snMat=new Vt({uniforms:{uTime:{value:0},uRadius:{value:0},uPR:{value:Math.min(this.experience.sizes.pixelRatio,2)}},vertexShader:`attribute float aRand;uniform float uTime,uRadius,uPR;varying float vR;
                void main(){
                    vR=aRand;float r=uRadius*(1.+aRand*.15);
                    vec3 p=normalize(position)*r;
                    p+=normalize(position)*(sin(uTime*aRand*2.+aRand*6.28)*.8);
                    vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
                    gl_PointSize=clamp((1.+aRand*1.8)*uPR*(240./-mv.z),0.,8.);
                }`,fragmentShader:`uniform float uRadius;varying float vR;
                void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;
                float fade=1.-uRadius/35.;
                float a=(1.-d*2.)*fade*(.25+vR*.35);gl_FragColor=vec4(vec3(.9+vR*.1),a);}`,transparent:!0,depthWrite:!1,blending:Wt}),this.snPts=new pi(n,this.snMat),this.snGroup.add(this.snPts),this.scene.add(this.snGroup)}_shootPool(){this.shotGroup=new pe,this.cometGroup=new pe,this.scene.add(this.shotGroup),this.scene.add(this.cometGroup)}_spawnShot(){const t=new P((Math.random()-.5)*500,100+Math.random()*180,(Math.random()-.5)*500),e=new P((Math.random()-.5)*1.1,-.85-Math.random()*.5,(Math.random()-.5)*1.1).normalize(),n=new Ut().setFromPoints([t,t.clone().add(e.clone().multiplyScalar(-(16+Math.random()*32)))]),i=new yn({color:16777215,transparent:!0,opacity:1,blending:Wt,depthWrite:!1}),s=new De(n,i);this.shotGroup.add(s),this.shots.push({line:s,d:e,pos:t.clone(),spd:5+Math.random()*5,life:0,maxLife:.55+Math.random()*.4,mat:i})}_spawnComet(){const t=new P((Math.random()-.5)*580,155+Math.random()*110,(Math.random()-.5)*580),e=new P((Math.random()-.5)*.7,-.22-Math.random()*.28,(Math.random()-.5)*.7).normalize(),n=[];for(let l=0;l<=22;l++)n.push(t.clone().add(e.clone().multiplyScalar(-l*3.8)));const i=new Ut().setFromPoints(n),s=new Float32Array(23);n.forEach((l,c)=>s[c]=c/22),i.setAttribute("aT",new It(s,1));const a=new Vt({uniforms:{uLife:{value:0}},vertexShader:"attribute float aT;varying float vT;void main(){vT=aT;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uLife;varying float vT;void main(){float a=(1.-vT)*(1.-uLife)*.55;gl_FragColor=vec4(vec3(.9,.96,1.),a);}",transparent:!0,depthWrite:!1,blending:Wt}),o=new De(i,a);this.cometGroup.add(o),this.comets.push({line:o,d:e,pos:t.clone(),spd:1.1+Math.random()*1.1,life:0,maxLife:3.5+Math.random()*2,mat:a})}_setupBHClick(){window.addEventListener("click",()=>{if(!this.bhGroup||this.experience.isModalOpen)return;const t=this.experience.raycaster?.instance,e=this.experience.camera?.instance;if(!t||!e)return;const n=this.experience.raycaster?.mouse;if(!n)return;t.setFromCamera(n,e),t.intersectObjects([this.bhGroup],!0).length>0&&window.dispatchEvent(new Event("bhClick"))})}_touchSetup(){this.M&&window.addEventListener("touchend",t=>{if(t.changedTouches.length!==1)return;const e=t.changedTouches[0];this.experience.raycaster&&(this.experience.raycaster.mouse.x=e.clientX/window.innerWidth*2-1,this.experience.raycaster.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.experience.raycaster.onClick())},{passive:!0})}pauseRotation(){this.isPaused=!0}resumeRotation(){this.isPaused=!1}update(){const t=this.experience.time.elapsed,e=this.experience.time.delta/1e3;if(this.background.update(),!this._timeApplied&&window._timeMode){this._timeApplied=!0;const s=window._timeMode;s==="night"?(this.coreLight.intensity=3,document.body.classList.add("time-night")):s==="day"?(this.coreLight.intensity=5.5,document.body.classList.add("time-day")):(this.coreLight.intensity=4.2,document.body.classList.add("time-twilight"))}this.coreLight.intensity=3.3+Math.sin(t*1.25)*.9,this.webMat&&(this.webMat.uniforms.uTime.value=t),this._bMats&&this._bMats.forEach(s=>s.uniforms.uTime.value=t),this.bhMat&&(this.bhMat.uniforms.uTime.value=t),this.nsMat&&(this.nsMat.uniforms.uTime.value=t,this.nsJetMat.uniforms.uTime.value=t),this.nsGroup&&(this.nsGroup.rotation.y=t*this.nsGroup.userData.rotSpd),this.qMat&&(this.qMat.uniforms.uTime.value=t),this.dsGroup&&(this.dsGroup.rotation.y=t*this.dsGroup.userData.rotSpd),this._nebMats&&this._nebMats.forEach(s=>s.uniforms.uTime.value=t),this.nebGroup&&(this.nebGroup.rotation.y=t*.01),this.dmMat&&(this.dmMat.uniforms.uTime.value=t),this.dmGroup&&(this.dmGroup.rotation.y=t*this.dmGroup.userData.rotSpd),this._exoPlanets&&this._exoPlanets.forEach(s=>{const a=t*s.spd+s.offset;s.mesh.position.x=Math.cos(a)*s.orb,s.mesh.position.z=Math.sin(a)*s.orb,s.mesh.rotation.y+=.02}),this._cosmicMiscMats&&this._cosmicMiscMats.forEach(s=>{s.uniforms?.uTime&&(s.uniforms.uTime.value=t)}),this.mgMat&&(this.mgMat.uniforms.uTime.value=t),this.mgGroup&&(this.mgGroup.rotation.y=t*this.mgGroup.userData.rotSpd),this.csMat&&(this.csMat.uniforms.uTime.value=t),this.whMat&&(this.whMat.uniforms.uTime.value=t),this.snMat&&(this.snMat.uniforms.uTime.value=t,this.snExpanding&&(this.snRadius+=e*.8,this.snRadius>=this.snMaxRadius&&(this.snRadius=0),this.snMat.uniforms.uRadius.value=this.snRadius,this.snPts.rotation.y=t*.05,this.snPts.rotation.x=t*.03)),this.nodes.forEach(s=>s.update()),this._sm.x+=(this._tm.x-this._sm.x)*.05,this._sm.y+=(this._tm.y-this._sm.y)*.05;const n=this.experience.raycaster?.currentIntersect,i=this.nodeGroup.userData._glitchSpeedUp;if(!this.isPaused&&!n&&(this.nodeGroup.rotation.y+=i?.008:42e-5,this.nodeGroup.rotation.x+=i?.003:62e-6),this.memoryCoreGroup&&this.mcMat){this.mcMat.uniforms.uTime.value=t,this.mcInnerMat.uniforms.uTime.value=t,this.memoryCoreGroup.rotation.y=t*.08,this.memoryCoreGroup.rotation.x=Math.sin(t*.12)*.15,this.mcFragments.forEach(a=>{a.userData.angle+=a.userData.speed,a.position.x=Math.cos(a.userData.angle)*a.userData.radius,a.position.z=Math.sin(a.userData.angle)*a.userData.radius,a.rotation.y+=.02});const s=this.experience.raycaster;s&&!this.experience.isModalOpen&&((s.instance?.intersectObjects([this.memoryCoreGroup],!0)||[]).length>0?(this.mcMat.uniforms.uHover.value=Math.min(this.mcMat.uniforms.uHover.value+.04,1),this._mcHoverTime+=e,this._mcHoverTime>1.8&&!this._mcDreamShown&&(this._mcDreamShown=!0,window.experience?.showDream(Math.floor(Math.random()*7)))):(this.mcMat.uniforms.uHover.value=Math.max(this.mcMat.uniforms.uHover.value-.03,0),this._mcHoverTime=0,this._mcDreamShown=!1))}this.traffic.forEach(s=>{s.progress+=s.spd,s.progress>1&&(s.progress=0),s.pk.position.copy(s.curve.getPoint(s.progress)),s.pk.scale.setScalar(.7+Math.sin(t*9+s.progress*20)*.45)}),t>this.nextShot&&(this._spawnShot(),this.nextShot=t+.65+Math.random()*2);for(let s=this.shots.length-1;s>=0;s--){const a=this.shots[s];a.life+=e,a.pos.addScaledVector(a.d,a.spd);const o=a.line.geometry.attributes.position;o.setXYZ(0,a.pos.x,a.pos.y,a.pos.z),o.needsUpdate=!0,a.mat.opacity=Math.max(0,1-a.life/a.maxLife),a.life>=a.maxLife&&(this.shotGroup.remove(a.line),a.line.geometry.dispose(),this.shots.splice(s,1))}t>this.nextComet&&(this._spawnComet(),this.nextComet=t+9+Math.random()*13);for(let s=this.comets.length-1;s>=0;s--){const a=this.comets[s];a.life+=e,a.pos.addScaledVector(a.d,a.spd);const o=a.line.geometry.attributes.position;for(let l=0;l<=22;l++){const c=a.pos.clone().add(a.d.clone().multiplyScalar(-l*3.8));o.setXYZ(l,c.x,c.y,c.z)}o.needsUpdate=!0,a.mat.uniforms.uLife.value=a.life/a.maxLife,a.life>=a.maxLife&&(this.cometGroup.remove(a.line),a.line.geometry.dispose(),this.comets.splice(s,1))}}}class zx{constructor(){this.experience=new Pn,this.scene=this.experience.scene,this.camera=this.experience.camera,this.world=this.experience.world,this.instance=new pp,this.mouse=new Gt,this.currentIntersect=null,this.rawMouse={x:0,y:0},window.addEventListener("mousemove",t=>this.onMouseMove(t)),window.addEventListener("click",()=>this.onClick())}onMouseMove(t){this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1,this.rawMouse.x=t.clientX,this.rawMouse.y=t.clientY}onClick(){this.currentIntersect&&this.currentIntersect.data&&(this.experience.audio&&this.experience.audio.play("click"),this.experience.overlay.show(this.currentIntersect.data))}update(){if(this.experience.isModalOpen){this.currentIntersect&&(this.currentIntersect.onMouseLeave(),this.experience.cursor&&this.experience.cursor.leave(),this.currentIntersect=null);return}this.instance.setFromCamera(this.mouse,this.camera.instance);const t=this.experience.world;if(t&&t.nodes&&t.nodeGroup){const e=[];t.nodes.forEach(i=>e.push(i.group));const n=this.instance.intersectObjects(e,!0);if(n.length>0){const i=n[0].object;let s=null;i.parent&&i.parent.userData.nodeInstance&&(s=i.parent.userData.nodeInstance),this.currentIntersect===null&&(s&&s.onMouseEnter(),this.experience.cursor&&this.experience.cursor.enter()),this.currentIntersect=s}else this.currentIntersect&&(this.currentIntersect.onMouseLeave(),this.experience.cursor&&this.experience.cursor.leave()),this.currentIntersect=null}}}class kx{constructor(){this.experience=new Pn,this.overlay=document.getElementById("detail-panel"),this.card=this.overlay?.querySelector(".modal-card"),this.closeBtn=document.getElementById("close-btn"),this.image=document.getElementById("panel-image"),this.kicker=document.getElementById("panel-kicker"),this.title=document.getElementById("panel-title"),this.desc=document.getElementById("panel-desc"),this.dynamic=document.getElementById("panel-dynamic-content"),this.link=document.getElementById("panel-link"),this.typeBadge=document.getElementById("modal-type-badge"),this.statusText=document.getElementById("modal-status-text"),this.coords=document.getElementById("modal-coords"),this.footerMeta=document.getElementById("modal-footer-meta"),this.particleCanvas=document.getElementById("modal-particles"),this._initParticles(),this.closeBtn.addEventListener("click",()=>this.hide()),this.overlay.addEventListener("click",t=>{t.target===this.overlay&&this.hide()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&this.experience.isModalOpen&&this.hide()})}_initParticles(){const t=this.particleCanvas;if(!t)return;const e=()=>{t.width=window.innerWidth,t.height=window.innerHeight};e(),window.addEventListener("resize",e);const n=t.getContext("2d"),i=window.innerWidth<640?40:80,s=Array.from({length:i},()=>({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25,r:.5+Math.random()*1.2,a:.04+Math.random()*.09}));let a=-9999,o=-9999;this.overlay.addEventListener("mousemove",h=>{a=h.clientX,o=h.clientY}),this.overlay.addEventListener("mouseleave",()=>{a=-9999,o=-9999});let l=null;const c=()=>{if(!this.experience.isModalOpen){l=null;return}l=requestAnimationFrame(c),n.clearRect(0,0,t.width,t.height),s.forEach(h=>{const u=h.x-a,d=h.y-o,f=Math.sqrt(u*u+d*d);if(f<100){const _=(100-f)/100;h.vx+=u/f*_*.18,h.vy+=d/f*_*.18}h.vx*=.96,h.vy*=.96,h.x+=h.vx,h.y+=h.vy,h.x<0&&(h.x=t.width),h.x>t.width&&(h.x=0),h.y<0&&(h.y=t.height),h.y>t.height&&(h.y=0),n.beginPath(),n.arc(h.x,h.y,h.r,0,Math.PI*2),n.fillStyle=`rgba(255,255,255,${h.a})`,n.fill()});for(let h=0;h<s.length;h++)for(let u=h+1;u<s.length;u++){const d=s[h].x-s[u].x,f=s[h].y-s[u].y,_=Math.sqrt(d*d+f*f);_<90&&(n.beginPath(),n.moveTo(s[h].x,s[h].y),n.lineTo(s[u].x,s[u].y),n.strokeStyle=`rgba(255,255,255,${(1-_/90)*.028})`,n.lineWidth=.5,n.stroke())}};this._startParticles=()=>{l||c()},this._stopParticles=()=>{l=null,n.clearRect(0,0,t.width,t.height)}}_animateCoords(){this.coords&&(this._coordsTimer=setInterval(()=>{const t=this.experience.camera?.instance?.position;if(t)this.coords.textContent=`${t.x.toFixed(1)} · ${t.y.toFixed(1)}`;else{const e=(Math.random()*99).toFixed(2);this.coords.textContent=`${e} · ${(Math.random()*99).toFixed(2)}`}},140))}show(t){this.experience.isModalOpen=!0,this.image&&(this.image.style.opacity="0",this.image.src=t.image||"https://placehold.co/1200x800/030308/ffffff?text=CLASSIFIED",this.image.onload=()=>{this.image.style.opacity=""});const e=t.kicker||"Showcase";if(this.kicker&&(this.kicker.textContent=e),this.typeBadge){const i={about:"ORIGIN NODE",certification:"CREDENTIALS",project:"PROJECT LOG"};this.typeBadge.textContent=i[t.type]||"PROJECT"}if(this.title&&(this.title.textContent=t.title||"Untitled"),this.desc&&(this.desc.textContent=t.desc||""),this.link){this.link.style.display=t.link?"inline-flex":"none",t.link&&(this.link.href=t.link);const i=this.link.querySelector(".modal-btn-text");if(i){const s={about:"View Profile",certification:"Verify All",project:"Open Mission"};i.textContent=s[t.type]||"Open Mission"}}if(this.footerMeta){const i=new Date,s=`${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")} · SECTOR-7G`;this.footerMeta.textContent=s}this.statusText&&(this.statusText.textContent="ACTIVE"),this.dynamic&&(this.dynamic.innerHTML="",this._buildContent(t)),this.overlay.classList.add("visible"),this._startParticles?.(),this._animateCoords(),(this.dynamic?.querySelectorAll(".modal-list-item, .modal-cert-item, .modal-tag")||[]).forEach((i,s)=>{i.style.opacity="0",i.style.transform="translateY(8px)",i.style.transition=`opacity .35s ease ${.55+s*.04}s, transform .35s ease ${.55+s*.04}s`,requestAnimationFrame(()=>{requestAnimationFrame(()=>{i.style.opacity="",i.style.transform=""})})})}_buildContent(t){const e=this.dynamic;if(t.type==="project"){if(t.tags?.length){const n=this._label("Stack");e.appendChild(n);const i=document.createElement("div");i.style.cssText="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:14px;",t.tags.forEach(s=>{const a=document.createElement("span");a.className="modal-tag",a.textContent=s,i.appendChild(a)}),e.appendChild(i)}t.features&&(e.appendChild(this._label("Key Systems")),t.features.split(`
`).filter(n=>n.trim()).forEach(n=>{const i=document.createElement("div");i.className="modal-list-item",i.appendChild(document.createTextNode(n.replace(/^[-•]/,"").trim())),e.appendChild(i)}))}t.type==="about"&&(t.exp&&(e.appendChild(this._label("Experience")),t.exp.split(`
`).filter(n=>n.trim()).forEach(n=>{const i=document.createElement("div");i.className="modal-list-item",i.appendChild(document.createTextNode(n.replace(/^[-•]/,"").trim())),e.appendChild(i)})),t.skills&&(e.appendChild(this._label("Core Systems")),t.skills.split(`
`).filter(n=>n.trim()).forEach(n=>{const i=document.createElement("div");i.className="modal-list-item",i.appendChild(document.createTextNode(n.replace(/^[-•]/,"").trim())),e.appendChild(i)})),Rl?.length&&(e.appendChild(this._label("Licenses & Certifications")),Rl.forEach(n=>{const i=document.createElement("div");i.className="modal-cert-item",i.innerHTML=`
                        <div style="min-width:0;">
                            <span class="modal-cert-title">${n.title}</span>
                            <span class="modal-cert-issuer">${n.issuer}</span>
                        </div>
                        <a href="${n.link}" target="_blank" class="modal-cert-link" rel="noopener">VERIFY</a>
                    `,e.appendChild(i)}))),t.type==="certification"&&t.certList?.length&&(e.appendChild(this._label("All Credentials")),t.certList.forEach(n=>{const i=document.createElement("div");i.className="modal-cert-item",i.innerHTML=`
                    <div style="min-width:0;">
                        <span class="modal-cert-title">${n.title}</span>
                        <span class="modal-cert-issuer">${n.issuer}</span>
                    </div>
                    <a href="${n.link}" target="_blank" class="modal-cert-link" rel="noopener">VERIFY</a>
                `,e.appendChild(i)}))}_label(t){const e=document.createElement("span");return e.className="modal-section-label",e.textContent=t,e}hide(){this.overlay.classList.remove("visible"),this.experience.isModalOpen=!1,this._stopParticles?.(),clearInterval(this._coordsTimer)}}class Vx{constructor(t){this.assets=t,this.items={},this.toLoad=this.assets.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.audioLoader=new hp,this.loaders.textureLoader=new ap}startLoading(){if(this.toLoad===0){this.triggerReady&&this.triggerReady();return}for(const t of this.assets)t.type==="audio"?this.loaders.audioLoader.load(t.path,e=>{this.sourceLoaded(t,e)}):t.type==="texture"&&this.loaders.textureLoader.load(t.path,e=>{this.sourceLoaded(t,e)})}sourceLoaded(t,e){this.items[t.name]=e,this.loaded++,this.loaded===this.toLoad&&(console.log("Semua aset siap!"),this.triggerReady&&this.triggerReady())}}const Gx=[{name:"bgMusic",type:"audio",path:"assets/mixkit-finding-myself-993.mp3"},{name:"hover",type:"audio",path:"assets/hover.wav"},{name:"click",type:"audio",path:"assets/click.mp3"},{name:"intro",type:"audio",path:"assets/intro.wav"},{name:"outro",type:"audio",path:"assets/outro.wav"}];class Hx{constructor(){this.experience=new Pn,this.camera=this.experience.camera,this.resources=this.experience.resources,this.listener=new fp,this.camera.instance.add(this.listener),this.sounds={},this.isMuted=!1,this.setupButton()}setupButton(){this.btn=document.getElementById("audio-btn"),this.btnText=document.getElementById("audio-text"),this.btn&&this.btn.addEventListener("click",()=>this.toggleMute())}setupSounds(){this.bgMusic=new Kc(this.listener),this.bgMusic.setBuffer(this.resources.items.bgMusic),this.bgMusic.setLoop(!0),this.bgMusic.setVolume(.3),this.sounds.bg=this.bgMusic,this.createSfx("hover",.5),this.createSfx("click",1),this.createSfx("intro",.8)}createSfx(t,e){const n=new Kc(this.listener);n.setBuffer(this.resources.items[t]),n.setVolume(e),this.sounds[t]=n}play(t){this.sounds[t]&&(this.sounds[t].isPlaying&&this.sounds[t].stop(),this.sounds[t].play())}playBg(){this.sounds.bg&&!this.sounds.bg.isPlaying&&this.sounds.bg.play()}toggleMute(){this.isMuted=!this.isMuted,this.isMuted?(this.listener.setMasterVolume(0),this.btn.classList.add("muted"),this.btnText.textContent="OFF"):(this.listener.setMasterVolume(1),this.btn.classList.remove("muted"),this.btnText.textContent="ON")}}class Wx{constructor(){this.experience=new Pn,this.cursorDot=document.createElement("div"),this.cursorDot.className="cursor-dot",this.cursorRing=document.createElement("div"),this.cursorRing.className="cursor-ring",document.body.appendChild(this.cursorDot),document.body.appendChild(this.cursorRing),this.xToDot=xt.quickTo(this.cursorDot,"x",{duration:.7,ease:"power3"}),this.yToDot=xt.quickTo(this.cursorDot,"y",{duration:.7,ease:"power3"}),this.xToRing=xt.quickTo(this.cursorRing,"x",{duration:1.5,ease:"power3.out"}),this.yToRing=xt.quickTo(this.cursorRing,"y",{duration:1.5,ease:"power3.out"});const t=window.innerWidth/2,e=window.innerHeight/2;xt.set(this.cursorDot,{x:t,y:e,xPercent:-50,yPercent:-50}),xt.set(this.cursorRing,{x:t,y:e,xPercent:-50,yPercent:-50}),window.addEventListener("mousemove",n=>{this.xToDot(n.clientX),this.yToDot(n.clientY),this.xToRing(n.clientX),this.yToRing(n.clientY)})}update(){}enter(){xt.to(this.cursorRing,{scale:2,backgroundColor:"rgba(255, 255, 255, 0.15)",borderColor:"#ffffff",borderWidth:"2px",boxShadow:"0 0 20px rgba(255, 255, 255, 0.4)",duration:.4,ease:"back.out(1.7)"}),xt.to(this.cursorDot,{backgroundColor:"#ffffff",scale:1.5,duration:.3})}leave(){xt.to(this.cursorRing,{scale:1,backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"#ffffff",borderWidth:"1px",boxShadow:"0 0 0px rgba(255, 255, 255, 0)",duration:.4,ease:"power3.out"}),xt.to(this.cursorDot,{backgroundColor:"#ffffff",scale:1,duration:.3})}}class Xx{constructor(){this.experience=new Pn,this.scene=this.experience.scene,this.isMobile=this.experience.isMobile,this._lastActivity=Date.now(),this._patienceActive=!1,this._heartRate=60,this._chromStr=0,this._lastScrollP=0,this._tearProgress=0,this._tearHolding=!1,this._tearX=0,this._tearY=0,this._tearTimer=0,this._mouseIdle=0,this._warpProgress={v:0},this._buildObserverEffect(),this._buildHeartbeat(),this._buildPatienceMode(),this._buildTearEffect(),this._buildChromaticAberration(),this._buildParticleField(),this._setupActivityTracking()}_buildObserverEffect(){const t=this.isMobile?200:600,e=new Ut,n=new Float32Array(t*3),i=new Float32Array(t),s=new Float32Array(t);for(let a=0;a<t;a++){const o=28+Math.random()*38,l=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1);n[a*3]=o*Math.sin(c)*Math.cos(l),n[a*3+1]=o*Math.sin(c)*Math.sin(l),n[a*3+2]=o*Math.cos(c),i[a]=Math.random(),s[a]=Math.random()*Math.PI*2}e.setAttribute("position",new It(n,3)),e.setAttribute("aRand",new It(i,1)),e.setAttribute("aPhase",new It(s,1)),this.obsMat=new Vt({uniforms:{uTime:{value:0},uMouseWorld:{value:new P(9999,9999,9999)},uFlee:{value:0},uPR:{value:Math.min(this.experience.sizes.pixelRatio,2)}},vertexShader:`
                attribute float aRand, aPhase;
                uniform float uTime, uFlee, uPR;
                uniform vec3 uMouseWorld;
                varying float vBright;

                void main(){
                    // Flee: push pos away from mouse world position
                    vec3 p   = position;
                    vec3 dir = p - uMouseWorld;
                    float d  = length(dir);
                    float flee = uFlee * smoothstep(20., 2., d);
                    p += normalize(dir) * flee * 8.0;

                    // Breathing when calm
                    float breathe = 1.0 + sin(uTime * (0.3 + aRand * 0.5) + aPhase) * 0.04 * (1.0 - uFlee);
                    p *= breathe;

                    vBright = mix(
                        0.4 + 0.6 * abs(sin(uTime * 0.6 + aPhase)),  // calm: bright
                        0.05 + aRand * 0.1,                            // fleeing: dim
                        uFlee
                    );

                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    gl_Position = projectionMatrix * mv;
                    float sz = (0.6 + aRand * 1.2) * uPR * (200.0 / -mv.z);
                    gl_PointSize = clamp(sz, 0.0, 9.0);
                }
            `,fragmentShader:`
                varying float vBright;
                void main(){
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    gl_FragColor = vec4(vec3(1.0), (1.0 - d * 2.0) * vBright * 0.65);
                }
            `,transparent:!0,depthWrite:!1,blending:Wt}),this.obsPoints=new pi(e,this.obsMat),this.scene.add(this.obsPoints),this._mouseNDC=new Gt(9999,9999),window.addEventListener("mousemove",a=>{this._lastActivity=Date.now(),this._mouseIdle=0,this._mouseNDC.x=a.clientX/window.innerWidth*2-1,this._mouseNDC.y=-(a.clientY/window.innerHeight)*2+1}),window.addEventListener("touchmove",a=>{this._lastActivity=Date.now(),this._mouseIdle=0},{passive:!0})}_updateObserver(t){if(!this.obsMat)return;const e=this.experience.time.elapsed;this.obsMat.uniforms.uTime.value=e;const n=this.experience.camera?.instance;if(n){const l=new P(this._mouseNDC.x,this._mouseNDC.y,.5).unproject(n).sub(n.position).normalize(),c=n.position.clone().addScaledVector(l,n.position.length()*.8);this.obsMat.uniforms.uMouseWorld.value.copy(c)}this._mouseIdle+=t;const i=this._mouseIdle>1.5,s=i?0:1,a=this.obsMat.uniforms.uFlee.value;if(this.obsMat.uniforms.uFlee.value+=(s-a)*.06,this._obsMsg){const o=i?"1":"0";this._obsMsg.style.opacity!==o&&(this._obsMsg.style.opacity=o)}this.obsPoints.rotation.y=e*.025}_buildHeartbeat(){const t=document.createElement("canvas");t.id="heartbeat-line",t.style.cssText="position:fixed;bottom:0;left:0;width:100%;height:44px;z-index:8;pointer-events:none;opacity:0;",document.body.appendChild(t),this._hbEl=t,this._hbEl.width=window.innerWidth,this._hbEl.height=44,this._hbCtx=t.getContext("2d"),this._hbPhase=0,this._hbVisible=!1,window.addEventListener("resize",()=>{t.width=window.innerWidth}),window.addEventListener("click",()=>{this.experience.isModalOpen||(this._heartRate=Math.min(170,this._heartRate+22),xt.to(this,{_heartRate:60,duration:3.5,ease:"power2.out"}))})}_drawHeartbeat(t){if(!this._hbCtx||!this._hbVisible)return;const e=this._hbCtx,n=this._hbEl.width,i=44,s=this._heartRate;e.clearRect(0,0,n,i),e.beginPath(),this._hbPhase+=t*(s/60)*1.1;for(let a=0;a<n;a++){const l=(a/n*6*Math.PI+this._hbPhase)%(Math.PI*2);let c=0;l>.7&&l<.9?c=-Math.sin((l-.7)/.2*Math.PI)*5:l>1.45&&l<1.52?c=14:l>1.52&&l<1.62?c=-20:l>1.62&&l<1.68?c=7:l>1.85&&l<2.05&&(c=-Math.sin((l-1.85)/.2*Math.PI)*7),e.lineTo(a,i*.52+c)}e.strokeStyle="rgba(255,255,255,0.2)",e.lineWidth=1.2,e.stroke()}_buildPatienceMode(){this._patienceEl=document.getElementById("patience-overlay"),this._patienceMessages=["The world outside is too loud.","But here, in this void, there is only signal.","You found it. Most never stop long enough.","APEX HUMANITY is not a company. It's a reminder.","A reminder to stay human. Even when the algorithm says otherwise.","You are not a user. You are an observer.","And now the universe is watching back."],this._patienceMsgIdx=0}_checkPatience(t){if(!this.experience._started||this.experience.isModalOpen)return;(Date.now()-this._lastActivity)/1e3>30&&!this._patienceActive&&(this._patienceActive=!0,this._activatePatienceMode())}_activatePatienceMode(){const t=this._patienceEl;t&&t.classList.add("active");const e=this.experience.audio;e?.sounds?.bg&&xt.to(e.sounds.bg,{volume:0,duration:5}),this._hbEl&&(this._hbVisible=!0,xt.to(this._hbEl,{opacity:1,duration:2.5}));const n=this.experience.world?.background;n?.starGroups&&n.starGroups.forEach(a=>{xt.to(a.mat.uniforms.uSp,{value:.15,duration:5})});const i=t?.querySelector(".patience-text"),s=()=>{!this._patienceActive||!i||this._patienceMsgIdx>=this._patienceMessages.length||xt.to(i,{opacity:0,duration:.8,onComplete:()=>{i.textContent=this._patienceMessages[this._patienceMsgIdx++],xt.to(i,{opacity:1,duration:1.5}),this._patienceMsgIdx<this._patienceMessages.length&&setTimeout(s,4500)}})};setTimeout(s,1500)}_deactivatePatienceMode(){this._patienceActive=!1,this._patienceMsgIdx=0,this._patienceEl&&this._patienceEl.classList.remove("active");const t=this.experience.audio;t?.sounds?.bg&&xt.to(t.sounds.bg,{volume:.3,duration:3}),this._hbEl&&(this._hbVisible=!1,xt.to(this._hbEl,{opacity:0,duration:1}));const e=this.experience.world?.background;e?.starGroups&&e.starGroups.forEach(n=>{xt.to(n.mat.uniforms.uSp,{value:n.mat.uniforms.uSp._orig||1,duration:4})})}_buildChromaticAberration(){this._chromCanvas=document.createElement("div"),this._chromCanvas.id="chrom-overlay",this._chromCanvas.style.cssText="position:fixed;inset:0;z-index:6;pointer-events:none;opacity:0;background:transparent;",document.body.appendChild(this._chromCanvas)}_drawChromatic(){const t=this._chromStr;if(t<.005){this._chromCanvas&&(this._chromCanvas.style.opacity="0");return}const e=Math.round(t*5),n=document.querySelector(".webgl");n&&(n.style.filter=t>.02?"brightness(1) contrast(1.02)":"none"),this._chromCanvas&&(this._chromCanvas.style.opacity=String(Math.min(t*2,.6)),this._chromCanvas.style.boxShadow=`inset ${e}px 0 0 rgba(255,0,0,0.08), inset -${e}px 0 0 rgba(0,0,255,0.08)`)}_buildTearEffect(){const t=document.createElement("canvas");t.id="tear-canvas",t.style.cssText="position:fixed;inset:0;width:100%;height:100%;z-index:9;pointer-events:none;opacity:0;",document.body.appendChild(t),t.width=window.innerWidth,t.height=window.innerHeight,window.addEventListener("resize",()=>{t.width=window.innerWidth,t.height=window.innerHeight}),this._tearCanvas=t,this._tearCtx=t.getContext("2d");const e=(i,s)=>{this.experience.isModalOpen||this.experience._bhWarping||(this._tearX=i,this._tearY=s,this._tearHolding=!0,this._tearTimer=0)},n=()=>{if(!this._tearHolding)return;this._tearHolding=!1,this._tearProgress>0&&xt.to(this,{_tearProgress:0,duration:1.5,ease:"power2.in",onUpdate:()=>this._drawTear(),onComplete:()=>{this._tearCtx?.clearRect(0,0,t.width,t.height),xt.set(t,{opacity:0})}})};window.addEventListener("mousedown",i=>e(i.clientX,i.clientY)),window.addEventListener("mouseup",n),window.addEventListener("touchstart",i=>e(i.touches[0].clientX,i.touches[0].clientY),{passive:!0}),window.addEventListener("touchend",n,{passive:!0})}_drawTear(){const t=this._tearCtx;if(!t)return;const e=this._tearCanvas.width,n=this._tearCanvas.height,i=this._tearProgress;if(i<.01){t.clearRect(0,0,e,n),xt.set(this._tearCanvas,{opacity:0});return}this._tearCanvas.style.opacity=String(Math.min(1,i*1.8)),t.clearRect(0,0,e,n);const s=this._tearX,a=this._tearY,o=i*Math.max(e,n)*.65,l=Math.floor(8+i*18);t.save();const c=new Path2D;c.moveTo(s,a-o*.5);for(let u=0;u<=l;u++){const d=u/l,f=(Math.sin(u*7.3+i*3)*.5+(Math.random()-.5)*.5)*14*i;c.lineTo(s+f,a-o*.5+d*o)}const h=t.createLinearGradient(s-35,a,s+35,a);h.addColorStop(0,"rgba(255,200,80,0)"),h.addColorStop(.3,`rgba(255,175,55,${i*.4})`),h.addColorStop(.5,`rgba(255,235,180,${i*.6})`),h.addColorStop(.7,`rgba(255,175,55,${i*.4})`),h.addColorStop(1,"rgba(255,200,80,0)"),t.lineWidth=2+i*18,t.strokeStyle=h,t.shadowColor=`rgba(255,190,60,${i*.9})`,t.shadowBlur=i*28,t.stroke(c);for(let u=0;u<3;u++){const d=a-o*.4+Math.random()*o*.8;t.fillStyle=`rgba(255,255,255,${i*.12})`,t.fillRect(s+(Math.random()-.5)*i*30,d,Math.random()*i*28,1)}i>.55&&(t.font=`${Math.round(9+i*4)}px 'Space Mono', monospace`,t.fillStyle=`rgba(255,240,200,${(i-.55)*2.2})`,t.textAlign="center",t.shadowBlur=10,t.shadowColor="rgba(255,200,80,0.9)",t.fillText("APEX HUMANITY",s,a-9),t.fillText("still human.",s,a+14)),t.restore()}_buildParticleField(){const t=this.isMobile?350:900,e=new Ut,n=new Float32Array(t*3),i=new Float32Array(t);for(let s=0;s<t;s++){const a=65+Math.random()*180,o=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1);n[s*3]=a*Math.sin(l)*Math.cos(o),n[s*3+1]=a*Math.sin(l)*Math.sin(o),n[s*3+2]=a*Math.cos(l),i[s]=Math.random()}e.setAttribute("position",new It(n,3)),e.setAttribute("aRand",new It(i,1)),this.ambientMat=new Vt({uniforms:{uTime:{value:0},uPR:{value:Math.min(this.experience.sizes.pixelRatio,2)}},vertexShader:`
                attribute float aRand; uniform float uTime, uPR;
                void main(){
                    vec3 p = position;
                    p.y += sin(uTime * aRand * 0.22 + aRand * 6.28) * 0.7;
                    vec4 mv = modelViewMatrix * vec4(p, 1.0);
                    gl_Position = projectionMatrix * mv;
                    gl_PointSize = clamp((0.5 + aRand * 0.9) * uPR * (175.0 / -mv.z), 0.0, 5.5);
                }
            `,fragmentShader:`
                void main(){
                    float d = length(gl_PointCoord - 0.5);
                    if (d > 0.5) discard;
                    gl_FragColor = vec4(vec3(1.0), (1.0 - d * 2.0) * 0.1);
                }
            `,transparent:!0,depthWrite:!1,blending:Wt}),this.ambientPts=new pi(e,this.ambientMat),this.scene.add(this.ambientPts)}_setupActivityTracking(){const t=()=>{this._lastActivity=Date.now(),this._patienceActive&&this._deactivatePatienceMode()};["mousemove","touchstart","keydown","click","wheel"].forEach(e=>window.addEventListener(e,t,{passive:!0}))}update(t,e){const n=this.experience.time.elapsed;this._updateObserver(t),this._drawHeartbeat(t),this._checkPatience(t),this._tearHolding&&(this._tearTimer+=t,this._tearProgress=Math.min(1,this._tearTimer/2.2),this._drawTear());const i=Math.abs((e||0)-this._lastScrollP);this._lastScrollP=e||0;const s=Math.min(i*90,1);this._chromStr+=(s-this._chromStr)*.1,this._drawChromatic(),this.ambientMat&&(this.ambientMat.uniforms.uTime.value=n,this.ambientPts.rotation.y=n*.007)}}let _o=null;class Pn{constructor(t){if(_o)return _o;_o=this,window.experience=this,this.canvas=t,this.isMobile=window.matchMedia("(hover:none)").matches||window.innerWidth<768,this.glitchMode=!1,this.visitCount=parseInt(localStorage.getItem("rsf_visits")||"0")+1,localStorage.setItem("rsf_visits",this.visitCount),this.secretClicks=0,this.sizes=new uv,this.time=new dv,this.scene=new zf,this.resources=new Vx(Gx),this.camera=new Dx,this.renderer=new Fx,this.world=new Bx,this.overlay=new kx,this.cursor=new Wx,this.raycaster=new zx,this.audio=new Hx,this.isModalOpen=!1,this._loadSim(),this._setupHUD(),this._setupScrollNarrative(),this._setupTimeAwareness(),this._setupGlitchMode(),this._setupEasterEggs(),this._setupTouchDrag(),this.resources.triggerReady=()=>{const e=document.getElementById("start-btn"),n=document.querySelector(".bar-fill"),i=document.getElementById("loader-status");n&&(n.style.width="100%"),i&&(i.textContent=this.visitCount>1?`Welcome back. Visit #${this.visitCount}.`:"Universe ready."),setTimeout(()=>{e.textContent="// ENTER THE VOID //",e.classList.add("active"),e.disabled=!1,e.addEventListener("click",()=>this.startExperience()),this.isMobile&&document.getElementById("preloader").addEventListener("click",()=>{e.classList.contains("active")&&this.startExperience()})},400)},this.sizes.triggerResize=()=>this.resize(),this.time.triggerTick=()=>this.update()}_loadSim(){const t=document.querySelector(".bar-fill");if(!t)return;let e=0;const n=setInterval(()=>{e+=Math.random()*6+1,e>90&&(clearInterval(n),e=90),t.style.width=e+"%"},200)}_setupTimeAwareness(){const t=new Date().getHours();t>=21||t<5?(this.timeMode="night",this.renderer.instance?.setClearColor(0,1)):t>=5&&t<8||t>=18&&t<21?this.timeMode="twilight":this.timeMode="day",window._timeMode=this.timeMode;const e=document.getElementById("hud-coords");if(e){const n=document.createElement("div");n.id="hud-time",n.style.cssText="margin-top:6px;opacity:.35;letter-spacing:.08em;",n.textContent=`LOCAL: ${String(t).padStart(2,"0")}:${String(new Date().getMinutes()).padStart(2,"0")} · ${this.timeMode.toUpperCase()}`,e.appendChild(n)}}_setupHUD(){this.hudEl={x:document.getElementById("hud-x"),y:document.getElementById("hud-y"),z:document.getElementById("hud-z"),wrap:document.getElementById("hud-coords")},this._simVisitors=142+Math.floor(Math.random()*80),this._simSims=8840+Math.floor(Math.random()*500),setInterval(()=>{this._simVisitors+=Math.random()<.3?1:0,this._simSims+=Math.floor(Math.random()*3);const t=document.getElementById("hud-visitors"),e=document.getElementById("hud-sims");t&&(t.textContent=`ACTIVE: ${this._simVisitors}`),e&&(e.textContent=`SIMS: ${this._simSims.toLocaleString()}`)},3e3)}_setupScrollNarrative(){this._scrollProgress=0,this._scrollTarget=0,this._waypoints=[{pos:new P(0,0,150),lookAt:new P(0,0,0),label:null},{pos:new P(60,20,100),lookAt:new P(0,0,0),label:"EXPLORING THE CLUSTER"},{pos:new P(-40,-15,80),lookAt:new P(-5,0,5),label:"DEEP FIELD"},{pos:new P(30,40,90),lookAt:new P(0,0,0),label:"OVERVIEW"},{pos:new P(0,0,150),lookAt:new P(0,0,0),label:null}],this._waypointLabel=document.getElementById("waypoint-label"),window.addEventListener("wheel",t=>{this.isModalOpen||!this._started||(this._scrollTarget=Math.max(0,Math.min(1,this._scrollTarget+t.deltaY*15e-5)))},{passive:!0})}_setupGlitchMode(){const t=document.querySelector(".logo");if(!t)return;let e=0,n;t.style.cursor="none",t.addEventListener("click",()=>{e++,clearTimeout(n),n=setTimeout(()=>{e=0},500),e>=3&&(e=0,this._triggerGlitch())})}_triggerGlitch(){if(!this._started)return;this.glitchMode=!this.glitchMode;const t=document.querySelector(".webgl");this.glitchMode?(t.classList.add("glitch-mode"),document.body.classList.add("matrix-active"),xt.to(".webgl",{filter:"brightness(3) contrast(2) invert(1)",duration:.08,onComplete:()=>xt.to(".webgl",{filter:"brightness(1) contrast(1.4) hue-rotate(120deg) saturate(0)",duration:.3})}),document.getElementById("glitch-overlay")?.classList.add("active"),this.world&&(this.world.nodeGroup.userData._glitchSpeedUp=!0),this.world&&xt.to(this.world.nodeGroup.rotation,{x:Math.PI,duration:2.5,ease:"power2.inOut"}),this.audio?.play("click")):(t.classList.remove("glitch-mode"),document.body.classList.remove("matrix-active"),xt.to(".webgl",{filter:"brightness(1) contrast(1) hue-rotate(0deg) saturate(1)",duration:.5}),document.getElementById("glitch-overlay")?.classList.remove("active"),this.world&&(this.world.nodeGroup.userData._glitchSpeedUp=!1,xt.to(this.world.nodeGroup.rotation,{x:0,duration:2.5,ease:"power2.inOut"})))}_setupEasterEggs(){const t=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];let e=0;window.addEventListener("keydown",i=>{i.key===t[e]?(e++,e===t.length&&(e=0,this._konamiActivate())):e=0}),window._bhClicks=0,window._bhClickCallback=()=>{window._bhClicks++,window._bhClicks>=5&&(window._bhClicks=0,this._warpToBlackHole())};let n="";window.addEventListener("keydown",i=>{i.key.match(/^[a-zA-Z]$/)&&(n+=i.key.toUpperCase(),n=n.slice(-6),n.includes("APEX")&&(n="",this._revealApex()),n.includes("RSF")&&(n="",this._secretPulse()),n.includes("PALE")&&(n="",this._pbdEl&&!this._pbdTriggered&&(this._pbdTriggered=!0,this._activatePaleBlueDot())))})}_konamiActivate(){this.world&&(this.audio?.play("click"),this._showSecretMsg("⚡ KONAMI UNLOCKED — SUPERNOVA EVENT INITIATED"),this.world.nodes.forEach((t,e)=>{const n=t.originalPos.clone(),i=n.clone().multiplyScalar(2.2+Math.random()*.8);xt.to(t.group.position,{x:i.x,y:i.y,z:i.z,duration:1.2,ease:"expo.out",onComplete:()=>xt.to(t.group.position,{x:n.x,y:n.y,z:n.z,duration:2.5,ease:"elastic.out(1,0.5)",delay:e*.05})})}),xt.to(this.world.coreLight,{intensity:80,duration:.3,onComplete:()=>xt.to(this.world.coreLight,{intensity:4.2,duration:2})}))}_warpToBlackHole(){if(!this._started||this._bhWarping)return;this._bhWarping=!0;const t=this.camera.instance,e=this.camera.rig,n=document.querySelector(".webgl"),i=this._getOrCreateFlashOverlay(),s=this._getOrCreateWarpOverlay();this._warpProgress={v:0},s.style.opacity="0",s.style.display="block",this._bhCinematicActive=!0;const o=()=>t.updateProjectionMatrix(),l=h=>this._showSecretMsg(h);e.rotation.x,e.rotation.y,e.rotation.z,xt.timeline({onComplete:()=>{this._bhWarping=!1,this._bhCinematicActive=!1,window._bhClicks=0,s.style.display="none",l("◉ EMERGED — WELCOME TO THE OTHER SIDE")}}).add(()=>l("⬤ GRAVITATIONAL ANOMALY DETECTED"),0).to(t.position,{z:94,duration:3.5,ease:"sine.inOut",onUpdate:o},"<").to(t,{fov:55,duration:3.5,ease:"sine.inOut",onUpdate:o},"<").to(n,{filter:"saturate(0.3) brightness(0.95)",duration:3.5,ease:"sine.in"},"<").add(()=>l("⬤ EVENT HORIZON — POINT OF NO RETURN"),3.5).to(t.position,{x:38,y:4,z:22,duration:4,ease:"power2.in",onUpdate:o},3.5).to(t,{fov:82,duration:4,ease:"power2.in",onUpdate:o},3.5).to(n,{filter:"saturate(0) brightness(1.1) contrast(1.05)",duration:4,ease:"power1.in"},3.5).to(this._warpProgress,{v:.5,duration:3.5,ease:"power1.inOut",onUpdate:()=>{s.style.opacity=(this._warpProgress.v*.8).toFixed(3)}},4.2).add(()=>l("⬤ CROSSING THE MEMBRANE — NO RETURN"),7.2).to(t.position,{x:10,y:1.2,z:.8,duration:2,ease:"expo.in",onUpdate:o},7.5).to(t,{fov:162,duration:2,ease:"expo.in",onUpdate:o},7.5).to(n,{filter:"saturate(0) brightness(0.04) contrast(6)",duration:2,ease:"power4.in"},7.5).to(this._warpProgress,{v:1,duration:1.8,ease:"power4.in",onUpdate:()=>{s.style.opacity=this._warpProgress.v.toFixed(3)}},7.8).to(n,{filter:"brightness(40) saturate(0)",duration:.7,ease:"power4.in"},9.5).to(i,{opacity:1,duration:.7,ease:"power4.in",onComplete:()=>{xt.set(n,{clearProps:"filter"}),xt.set(t.position,{x:0,y:0,z:3800}),xt.set(t,{fov:18}),o(),xt.set(e.rotation,{x:.3,y:Math.PI*1.6,z:.08}),this.world&&this.world.nodeGroup.rotation.set(.3,Math.PI*1.6,.04),s.style.opacity="0",s.style.display="none",this._warpProgress.v=0}},9.5).to(i,{opacity:.97,duration:1.8,ease:"none"},10.3).add(()=>l("◈ TRAVERSING THE MEMBRANE BETWEEN REALITIES..."),10.8).to(i,{opacity:0,duration:4.5,ease:"power1.inOut"},12.2).to(t.position,{x:0,y:0,z:150,duration:6,ease:"expo.out",onUpdate:o},12.5).to(t,{fov:50,duration:4.5,ease:"power3.out",onUpdate:o},13).to(e.rotation,{x:0,y:0,z:0,duration:5.5,ease:"power2.out"},12.5).to(this.world?.nodeGroup?.rotation??{},{x:0,y:0,z:0,duration:5.5,ease:"power2.out"},12.5)}_getOrCreateFlashOverlay(){let t=document.getElementById("bh-flash-overlay");return t||(t=document.createElement("div"),t.id="bh-flash-overlay",t.style.cssText="position:fixed;inset:0;background:#fff;opacity:0;z-index:99998;pointer-events:none;",document.body.appendChild(t)),t}_getOrCreateWarpOverlay(){let t=document.getElementById("bh-warp-overlay");if(t)return t;t=document.createElement("canvas"),t.id="bh-warp-overlay",t.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;z-index:99997;pointer-events:none;display:none;opacity:0;mix-blend-mode:screen;",document.body.appendChild(t);const e=()=>{t.width=window.innerWidth,t.height=window.innerHeight};e(),window.addEventListener("resize",e);const n=t.getContext("2d"),i=()=>this._warpProgress?.v??0,s=280,a=new Float32Array(s);for(let h=0;h<s;h++)a[h]=h/s*Math.PI*2;let o=0,l=0;const c=h=>{if(requestAnimationFrame(c),t.style.display==="none"){o=0,l=0;return}const u=i(),d=l?Math.min((h-l)*.001,.05):0;if(l=h,u<.004)return;const f=t.width,_=t.height,g=f*.5,m=_*.5,p=f/1920;o+=(.5+u*5.5)*d,n.fillStyle=`rgba(0,0,0,${(.22+u*.52).toFixed(3)})`,n.fillRect(0,0,f,_);const M=Math.max(1,(1-u)*140*p+u*1.5),S=M+(12+u*100)*p,y=Math.floor(90+u*190);for(let E=0;E<y;E++){const A=a[Math.floor(E*s/y)],C=Math.sin(h*55e-5+E*.18)*.018*u,v=A+o+C,T=.025+E/y*.28,D=.8+.2*Math.sin(h*6e-4+E*.4),N=T*u*D,O=(.5+E%4*.35)*Math.min(u*2.2,1);n.beginPath(),n.moveTo(g+Math.cos(v)*M,m+Math.sin(v)*M),n.lineTo(g+Math.cos(v)*S,m+Math.sin(v)*S),n.strokeStyle=`rgba(255,255,255,${N.toFixed(3)})`,n.lineWidth=O,n.stroke()}const b=(50+u*180)*p;for(let E=0;E<7;E++){const A=(h*.001*b*.55+E*(f/7)*p)%(f*.55*p),C=(1-A/(f*.55*p))*u*.1;C<.003||(n.beginPath(),n.arc(g,m,A,0,Math.PI*2),n.strokeStyle=`rgba(255,255,255,${C.toFixed(3)})`,n.lineWidth=.7,n.stroke())}if(u>.06){const E=Math.max(3,(1-u)*100*p+u*5),A=n.createRadialGradient(g,m,0,g,m,E+24*p);A.addColorStop(0,`rgba(255,255,255,${(u*.98).toFixed(2)})`),A.addColorStop(.3,`rgba(255,255,255,${(u*.4).toFixed(2)})`),A.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=A,n.beginPath(),n.arc(g,m,E+24*p,0,Math.PI*2),n.fill()}if(u>.1){const E=Math.max(0,(u-.1)/.9*95*p),A=n.createRadialGradient(g,m,0,g,m,E+10*p);A.addColorStop(0,`rgba(0,0,0,${Math.min(u*1.15,1).toFixed(2)})`),A.addColorStop(.72,`rgba(0,0,0,${(u*.5).toFixed(2)})`),A.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=A,n.beginPath(),n.arc(g,m,E+10*p,0,Math.PI*2),n.fill()}if(u>.4){const E=(u-.4)/.6,A=S*.28+M,C=(E*.16).toFixed(3);n.beginPath(),n.arc(g,m,A*1.015,0,Math.PI*2),n.strokeStyle=`rgba(255,90,90,${C})`,n.lineWidth=1.8,n.stroke(),n.beginPath(),n.arc(g,m,A*.985,0,Math.PI*2),n.strokeStyle=`rgba(90,90,255,${C})`,n.lineWidth=1.8,n.stroke()}};return requestAnimationFrame(c),t}_setupPaleBlueDot(){this._pbdActive=!1,this._pbdEl=document.getElementById("pbd-overlay"),this._pbdQuotes=["In this vast void, every line of code is a heartbeat.","Look again at that dot. That's here. That's home. That's us.","Our planet is a lonely speck in the great enveloping cosmic dark.","From this distant vantage point, the Earth might not seem of particular interest.","Every engineer, every dreamer, every architect of the future — on a mote of dust."],this._pbdQuoteIdx=0,this._pbdTriggered=!1}_checkPaleBlueDot(t){!this._pbdEl||this._pbdTriggered||t>.82&&(this._pbdTriggered=!0,this._activatePaleBlueDot())}_activatePaleBlueDot(){const t=this.camera.instance,e=this._pbdEl;e&&(xt.to(t.position,{z:1800,duration:6,ease:"power2.inOut"}),xt.to(t,{fov:22,duration:6,ease:"power2.inOut",onUpdate:()=>t.updateProjectionMatrix()}),setTimeout(()=>{const n=this._pbdQuotes[this._pbdQuoteIdx%this._pbdQuotes.length];this._pbdQuoteIdx++;const i=e.querySelector(".pbd-quote");i&&(i.textContent=n),e.classList.add("active")},3500),setTimeout(()=>{e.classList.remove("active"),xt.to(t.position,{z:150,duration:4.5,ease:"expo.out"}),xt.to(t,{fov:50,duration:3.5,ease:"power3.out",onUpdate:()=>t.updateProjectionMatrix()}),setTimeout(()=>{this._pbdTriggered=!1},1e4)},9e3))}_setupRealityCollapse(){this._idleTimer=0,this._lastMouseMove=Date.now(),this._rcActive=!1,window.addEventListener("mousemove",()=>{this._lastMouseMove=Date.now()}),window.addEventListener("touchstart",()=>{this._lastMouseMove=Date.now()},{passive:!0})}_checkRealityCollapse(t){if(!this._started||this.isModalOpen)return;(Date.now()-this._lastMouseMove)/1e3>14&&!this._rcActive&&(this._rcActive=!0,this._triggerRealityCollapse())}_triggerRealityCollapse(){const t=document.getElementById("rc-overlay");if(!t){this._rcActive=!1;return}t.classList.add("active"),setTimeout(()=>{t.classList.remove("active"),setTimeout(()=>{this._rcActive=!1},3e3)},3500)}_setupDreamArchive(){if(!this.world)return;const t=["I dreamt of building systems that outlive me.","In parallel reality #7, I chose silence. Here, I chose code.","APEX HUMANITY: not domination — elevation.","Every startup I build is a letter to my future self.","The void is not empty. It is full of unrealized potential.","I am afraid of irrelevance. I am more afraid of playing it safe.","Archipelago: scattered islands, one ocean. That is Indonesia. That is us."];this._dreamTexts=t,this._dreamEl=document.getElementById("dream-overlay"),this._dreamIdx=0}showDream(t){const e=this._dreamEl;if(!e)return;const n=this._dreamTexts[t%this._dreamTexts.length],i=e.querySelector(".dream-text");i&&(i.textContent=n),e.classList.add("active"),clearTimeout(this._dreamTimer),this._dreamTimer=setTimeout(()=>e.classList.remove("active"),5e3),this._dreamIdx++}_setupTouchDrag(){if(!this.isMobile)return;let t=0;window.addEventListener("touchstart",e=>{e.touches.length===2&&(t=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY))},{passive:!0}),window.addEventListener("touchmove",e=>{if(e.touches.length===2){const n=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY),i=(n-t)*.5,s=this.camera.instance;s.position.z=Math.max(60,Math.min(300,s.position.z-i)),t=n}},{passive:!0})}_revealApex(){this._showSecretMsg("◈ APEX HUMANITY — THE SINGULARITY APPROACHES. THIS UNIVERSE IS ALIVE."),xt.to(".webgl",{filter:"invert(1) brightness(1.5)",duration:.15,onComplete:()=>xt.to(".webgl",{filter:"invert(0) brightness(1)",duration:.6})})}_secretPulse(){this._showSecretMsg("◉ SIGNAL DETECTED — ROKAN S.F. ONLINE"),this.world?.coreLight&&xt.to(this.world.coreLight,{intensity:40,duration:.2,onComplete:()=>xt.to(this.world.coreLight,{intensity:4.2,duration:1.5})})}_showDream(t){this.paradigm?this.paradigm.showDream?.(t):this._showSecretMsg(this._dreamTexts?.[t%7]||"")}showDream(t){this._showDream(t)}_checkArchipelago(){}_showSecretMsg(t){const e=document.getElementById("secret-msg");e&&(e.textContent=t,e.classList.add("show"),clearTimeout(this._secretTimer),this._secretTimer=setTimeout(()=>e.classList.remove("show"),4e3))}_showDream(t){const e=["I dreamt of building systems that outlive me.","In parallel reality #7, I chose silence. Here, I chose code.","APEX HUMANITY: not domination — elevation.","Every startup I build is a letter to my future self.","The void is not empty. It is full of unrealized potential.","I am afraid of irrelevance. I am more afraid of playing it safe.","Archipelago: scattered islands, one ocean. That is us."],n=document.getElementById("dream-overlay");if(!n)return;const i=n.querySelector(".dream-text");i&&(i.textContent=e[t%e.length]),n.classList.add("active"),clearTimeout(this._dreamTimer),this._dreamTimer=setTimeout(()=>n.classList.remove("active"),5e3)}showDream(t){this._showDream(t)}startExperience(){if(this._started)return;this._started=!0,xt.to("#preloader",{opacity:0,duration:1.4,ease:"power3.inOut",onComplete:()=>{const i=document.getElementById("preloader");i&&(i.style.display="none")}}),this.audio.setupSounds(),this.audio.play("intro"),setTimeout(()=>this.audio.playBg(),2800),this.paradigm=new Xx,this._setupPaleBlueDot(),this._setupRealityCollapse(),this._setupDreamArchive(),setTimeout(()=>{this.hudEl?.wrap&&this.hudEl.wrap.classList.add("visible")},5500),setTimeout(()=>{const i=document.getElementById("hint-text");i&&(i.style.display="block",xt.to(i,{opacity:.5,duration:2}))},5800),setTimeout(()=>{const i=document.getElementById("scroll-hint");i&&(i.style.display="flex",requestAnimationFrame(()=>i.classList.add("visible")))},7e3);const t=this.camera.instance,e=this.camera.rig,n=this.timeMode==="night"?3500:this.timeMode==="twilight"?2800:2200;xt.set(t.position,{z:n}),xt.set(t,{fov:115}),t.updateProjectionMatrix(),xt.timeline({delay:.15}).to(t.position,{z:this.isMobile?120:150,duration:4.5,ease:"expo.out"}).to(t,{fov:50,duration:2.8,ease:"power4.out",onUpdate:()=>t.updateProjectionMatrix()},"<0.2").from(e.rotation,{y:-Math.PI*2,duration:5,ease:"power2.out"},"<").from(e.rotation,{z:.5,duration:3.2,ease:"power3.out"},"<0.4")}resize(){this.isMobile=window.innerWidth<768,this.camera.resize(),this.renderer.resize()}update(){if(this.camera.update(),this.world.update(),this.cursor&&this.cursor.update(),this.raycaster&&this.raycaster.update(),this.renderer.update(),this._started&&this.paradigm){const t=this.time?.delta/1e3||.016;this.paradigm.update(t,this._scrollProgress||0)}if(this._started){const t=this.time?.delta/1e3||.016;this._checkPaleBlueDot?.(this._scrollProgress||0),this._checkRealityCollapse?.(t)}if(this.hudEl?.wrap?.classList.contains("visible")&&this.camera){const t=this.camera.instance.position;this.hudEl.x&&(this.hudEl.x.textContent=`X: ${t.x.toFixed(2)}`),this.hudEl.y&&(this.hudEl.y.textContent=`Y: ${t.y.toFixed(2)}`),this.hudEl.z&&(this.hudEl.z.textContent=`Z: ${t.z.toFixed(2)}`)}if(this._started&&this._waypoints){this._scrollProgress+=(this._scrollTarget-this._scrollProgress)*.025;const t=this._waypoints.length-1,e=this._scrollProgress*t,n=Math.min(Math.floor(e),t-1),i=e-n,s=this._waypoints[n],a=this._waypoints[n+1]||s;if(!this.isModalOpen&&!this._bhCinematicActive&&this._scrollProgress>.01){const l=this.camera.instance,c=new P().lerpVectors(s.pos,a.pos,i);l.position.lerp(c,.012),l.updateProjectionMatrix()}const o=this._waypoints[Math.round(this._scrollProgress*t)];o?.label&&this._waypointLabel?(this._waypointLabel.textContent=o.label,this._waypointLabel.classList.add("show")):this._waypointLabel&&this._waypointLabel.classList.remove("show")}}}const qx=document.querySelector("canvas.webgl");new Pn(qx);
