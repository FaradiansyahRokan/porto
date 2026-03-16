(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Rl="182",Lf=0,mc=1,If=2,js=1,Ff=2,Yr=3,kn=0,$e=1,Ln=2,ei=0,xr=1,ie=2,_c=3,gc=4,Uf=5,zi=100,Nf=101,Of=102,Bf=103,zf=104,kf=200,Vf=201,Gf=202,Hf=203,xo=204,vo=205,Wf=206,Xf=207,qf=208,Yf=209,jf=210,Kf=211,$f=212,Zf=213,Jf=214,Mo=0,So=1,yo=2,Tr=3,To=4,bo=5,Eo=6,wo=7,Wh=0,Qf=1,td=2,Bn=0,Xh=1,qh=2,Yh=3,jh=4,Kh=5,$h=6,Zh=7,Jh=300,ji=301,br=302,Ao=303,Ro=304,ma=306,Co=1e3,ti=1001,Po=1002,Fe=1003,ed=1004,ys=1005,ke=1006,wa=1007,Vi=1008,hn=1009,Qh=1010,tu=1011,ns=1012,Cl=1013,Vn=1014,Un=1015,ii=1016,Pl=1017,Dl=1018,is=1020,eu=35902,nu=35899,iu=1021,ru=1022,An=1023,ri=1026,Gi=1027,su=1028,Ll=1029,Er=1030,Il=1031,Fl=1033,Ks=33776,$s=33777,Zs=33778,Js=33779,Do=35840,Lo=35841,Io=35842,Fo=35843,Uo=36196,No=37492,Oo=37496,Bo=37488,zo=37489,ko=37490,Vo=37491,Go=37808,Ho=37809,Wo=37810,Xo=37811,qo=37812,Yo=37813,jo=37814,Ko=37815,$o=37816,Zo=37817,Jo=37818,Qo=37819,tl=37820,el=37821,nl=36492,il=36494,rl=36495,sl=36283,al=36284,ol=36285,ll=36286,nd=3200,au=0,id=1,di="",Mn="srgb",wr="srgb-linear",ra="linear",ne="srgb",Ji=7680,xc=519,rd=512,sd=513,ad=514,Ul=515,od=516,ld=517,Nl=518,cd=519,vc=35044,Mc="300 es",Nn=2e3,sa=2001;function ou(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function rs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hd(){const r=rs("canvas");return r.style.display="block",r}const Sc={};function yc(...r){const t="THREE."+r.shift();console.log(t,...r)}function Tt(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Gt(...r){const t="THREE."+r.shift();console.error(t,...r)}function ss(...r){const t=r.join(" ");t in Sc||(Sc[t]=!0,Tt(...r))}function ud(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class Fr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Aa=Math.PI/180,cl=180/Math.PI;function ps(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[r&255]+Oe[r>>8&255]+Oe[r>>16&255]+Oe[r>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Ot(r,t,e){return Math.max(t,Math.min(e,r))}function fd(r,t){return(r%t+t)%t}function Ra(r,t,e){return(1-e)*r+e*t}function Br(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ke(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ot(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ur{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=c*f+l*d+h*g+u*_;m<0&&(f=-f,d=-d,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),b=Math.sin(M);p=Math.sin(p*M)/b,o=Math.sin(o*M)/b,c=c*p+f*o,l=l*p+d*o,h=h*p+g*o,u=u*p+_*o}else{c=c*p+f*o,l=l*p+d*o,h=h*p+g*o,u=u*p+_*o;const M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-o*d,t[e+2]=l*g+h*d+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),f=c(n/2),d=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:Tt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ot(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ca.copy(this).projectOnVector(t),this.sub(Ca)}reflect(t){return this.sub(Ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ot(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new L,Tc=new Ur;class Lt{constructor(t,e,n,i,s,a,o,c,l){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l)}set(t,e,n,i,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],b=i[4],y=i[7],E=i[2],A=i[5],w=i[8];return s[0]=a*_+o*M+c*E,s[3]=a*m+o*b+c*A,s[6]=a*p+o*y+c*w,s[1]=l*_+h*M+u*E,s[4]=l*m+h*b+u*A,s[7]=l*p+h*y+u*w,s[2]=f*_+d*M+g*E,s[5]=f*m+d*b+g*A,s[8]=f*p+d*y+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*s,d=l*s-a*c,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*s-o*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Pa.makeScale(t,e)),this}rotate(t){return this.premultiply(Pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pa=new Lt,bc=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dd(){const r={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ne&&(i.r=ni(i.r),i.g=ni(i.g),i.b=ni(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ne&&(i.r=vr(i.r),i.g=vr(i.g),i.b=vr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?ra:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[wr]:{primaries:t,whitePoint:n,transfer:ra,toXYZ:bc,fromXYZ:Ec,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:bc,fromXYZ:Ec,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),r}const Yt=dd();function ni(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Qi;class pd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Qi===void 0&&(Qi=rs("canvas")),Qi.width=t.width,Qi.height=t.height;const i=Qi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=rs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ni(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return Tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let md=0;class Ol{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=ps(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Da(i[a].image)):s.push(Da(i[a]))}else s=Da(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Da(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Tt("Texture: Unable to serialize Texture."),{})}let _d=0;const La=new L;class Ve extends Fr{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=ti,i=ti,s=ke,a=Vi,o=An,c=hn,l=Ve.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=ps(),this.name="",this.source=new Ol(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(La).x}get height(){return this.source.getSize(La).y}get depth(){return this.source.getSize(La).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Tt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Tt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Co:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case Po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Co:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case Po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Jh;Ve.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,y=(d+1)/2,E=(p+1)/2,A=(h+f)/4,w=(u+_)/4,C=(g+m)/4;return b>y&&b>E?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=A/n,s=w/n):y>E?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=C/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=w/s,i=C/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this.w=Ot(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this.w=Ot(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gd extends Fr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new Ve(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ol(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends gd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lu extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xd extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(s,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(t.matrixWorld),this.union(Ts)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zr),bs.subVectors(this.max,zr),tr.subVectors(t.a,zr),er.subVectors(t.b,zr),nr.subVectors(t.c,zr),oi.subVectors(er,tr),li.subVectors(nr,er),wi.subVectors(tr,nr);let e=[0,-oi.z,oi.y,0,-li.z,li.y,0,-wi.z,wi.y,oi.z,0,-oi.x,li.z,0,-li.x,wi.z,0,-wi.x,-oi.y,oi.x,0,-li.y,li.x,0,-wi.y,wi.x,0];return!Ia(e,tr,er,nr,bs)||(e=[1,0,0,0,1,0,0,0,1],!Ia(e,tr,er,nr,bs))?!1:(Es.crossVectors(oi,li),e=[Es.x,Es.y,Es.z],Ia(e,tr,er,nr,bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const qn=[new L,new L,new L,new L,new L,new L,new L,new L],Tn=new L,Ts=new ms,tr=new L,er=new L,nr=new L,oi=new L,li=new L,wi=new L,zr=new L,bs=new L,Es=new L,Ai=new L;function Ia(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ai.fromArray(r,s);const o=i.x*Math.abs(Ai.x)+i.y*Math.abs(Ai.y)+i.z*Math.abs(Ai.z),c=t.dot(Ai),l=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const vd=new ms,kr=new L,Fa=new L;class _s{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kr.subVectors(t,this.center);const e=kr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(kr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kr.copy(t.center).add(Fa)),this.expandByPoint(kr.copy(t.center).sub(Fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Yn=new L,Ua=new L,ws=new L,ci=new L,Na=new L,As=new L,Oa=new L;class _a{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ua.copy(t).add(e).multiplyScalar(.5),ws.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Ua);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ws),o=ci.dot(this.direction),c=-ci.dot(ws),l=ci.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ua).addScaledVector(ws,f),d}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,i,s){Na.subVectors(e,t),As.subVectors(n,t),Oa.crossVectors(Na,As);let a=this.direction.dot(Oa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,t);const c=o*this.direction.dot(As.crossVectors(ci,As));if(c<0)return null;const l=o*this.direction.dot(Na.cross(ci));if(l<0||c+l>a)return null;const h=-o*ci.dot(Oa);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,i,s,a,o,c,l,h,u,f,d,g,_,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l,h,u,f,d,g,_,m)}set(t,e,n,i,s,a,o,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/ir.setFromMatrixColumn(t,0).length(),s=1/ir.setFromMatrixColumn(t,1).length(),a=1/ir.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*c,d=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Md,t,Sd)}lookAt(t,e,n){const i=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),hi.crossVectors(n,sn),hi.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),hi.crossVectors(n,sn)),hi.normalize(),Rs.crossVectors(sn,hi),i[0]=hi.x,i[4]=Rs.x,i[8]=sn.x,i[1]=hi.y,i[5]=Rs.y,i[9]=sn.y,i[2]=hi.z,i[6]=Rs.z,i[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],b=n[7],y=n[11],E=n[15],A=i[0],w=i[4],C=i[8],x=i[12],S=i[1],P=i[5],O=i[9],U=i[13],H=i[2],W=i[6],V=i[10],z=i[14],j=i[3],ot=i[7],et=i[11],ct=i[15];return s[0]=a*A+o*S+c*H+l*j,s[4]=a*w+o*P+c*W+l*ot,s[8]=a*C+o*O+c*V+l*et,s[12]=a*x+o*U+c*z+l*ct,s[1]=h*A+u*S+f*H+d*j,s[5]=h*w+u*P+f*W+d*ot,s[9]=h*C+u*O+f*V+d*et,s[13]=h*x+u*U+f*z+d*ct,s[2]=g*A+_*S+m*H+p*j,s[6]=g*w+_*P+m*W+p*ot,s[10]=g*C+_*O+m*V+p*et,s[14]=g*x+_*U+m*z+p*ct,s[3]=M*A+b*S+y*H+E*j,s[7]=M*w+b*P+y*W+E*ot,s[11]=M*C+b*O+y*V+E*et,s[15]=M*x+b*U+y*z+E*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15],M=c*d-l*f,b=o*d-l*u,y=o*f-c*u,E=a*d-l*h,A=a*f-c*h,w=a*u-o*h;return e*(_*M-m*b+p*y)-n*(g*M-m*E+p*A)+i*(g*b-_*E+p*w)-s*(g*y-_*A+m*w)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*l-_*f*l+_*c*d-o*m*d-u*c*p+o*f*p,b=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,y=h*_*l-g*u*l+g*o*d-a*_*d-h*o*p+a*u*p,E=g*u*c-h*_*c-g*o*f+a*_*f+h*o*m-a*u*m,A=e*M+n*b+i*y+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=M*w,t[1]=(_*f*s-u*m*s-_*i*d+n*m*d+u*i*p-n*f*p)*w,t[2]=(o*m*s-_*c*s+_*i*l-n*m*l-o*i*p+n*c*p)*w,t[3]=(u*c*s-o*f*s-u*i*l+n*f*l+o*i*d-n*c*d)*w,t[4]=b*w,t[5]=(h*m*s-g*f*s+g*i*d-e*m*d-h*i*p+e*f*p)*w,t[6]=(g*c*s-a*m*s-g*i*l+e*m*l+a*i*p-e*c*p)*w,t[7]=(a*f*s-h*c*s+h*i*l-e*f*l-a*i*d+e*c*d)*w,t[8]=y*w,t[9]=(g*u*s-h*_*s-g*n*d+e*_*d+h*n*p-e*u*p)*w,t[10]=(a*_*s-g*o*s+g*n*l-e*_*l-a*n*p+e*o*p)*w,t[11]=(h*o*s-a*u*s-h*n*l+e*u*l+a*n*d-e*o*d)*w,t[12]=E*w,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*w,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*m-e*o*m)*w,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,u=o+o,f=s*l,d=s*h,g=s*u,_=a*h,m=a*u,p=o*u,M=c*l,b=c*h,y=c*u,E=n.x,A=n.y,w=n.z;return i[0]=(1-(_+p))*E,i[1]=(d+y)*E,i[2]=(g-b)*E,i[3]=0,i[4]=(d-y)*A,i[5]=(1-(f+p))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(g+b)*w,i[9]=(m-M)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;if(t.x=i[12],t.y=i[13],t.z=i[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=ir.set(i[0],i[1],i[2]).length();const a=ir.set(i[4],i[5],i[6]).length(),o=ir.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),bn.copy(this);const l=1/s,h=1/a,u=1/o;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,e.setFromRotationMatrix(bn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Nn,c=!1){const l=this.elements,h=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===Nn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===sa)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Nn,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===Nn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===sa)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ir=new L,bn=new se,Md=new L(0,0,0),Sd=new L(1,1,1),hi=new L,Rs=new L,sn=new L,wc=new se,Ac=new Ur;class Gn{constructor(t=0,e=0,n=0,i=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Bl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yd=0;const Rc=new L,rr=new Ur,jn=new se,Cs=new L,Vr=new L,Td=new L,bd=new Ur,Cc=new L(1,0,0),Pc=new L(0,1,0),Dc=new L(0,0,1),Lc={type:"added"},Ed={type:"removed"},sr={type:"childadded",child:null},Ba={type:"childremoved",child:null};class Te extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new L,e=new Gn,n=new Ur,i=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Lt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rr.setFromAxisAngle(t,e),this.quaternion.multiply(rr),this}rotateOnWorldAxis(t,e){return rr.setFromAxisAngle(t,e),this.quaternion.premultiply(rr),this}rotateX(t){return this.rotateOnAxis(Cc,t)}rotateY(t){return this.rotateOnAxis(Pc,t)}rotateZ(t){return this.rotateOnAxis(Dc,t)}translateOnAxis(t,e){return Rc.copy(t).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cc,t)}translateY(t){return this.translateOnAxis(Pc,t)}translateZ(t){return this.translateOnAxis(Dc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cs.copy(t):Cs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Vr,Cs,this.up):jn.lookAt(Cs,Vr,this.up),this.quaternion.setFromRotationMatrix(jn),i&&(jn.extractRotation(i.matrixWorld),rr.setFromRotationMatrix(jn),this.quaternion.premultiply(rr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lc),sr.child=t,this.dispatchEvent(sr),sr.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ed),Ba.child=t,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lc),sr.child=t,this.dispatchEvent(sr),sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,t,Td),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Te.DEFAULT_UP=new L(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new L,Kn=new L,za=new L,$n=new L,ar=new L,or=new L,Ic=new L,ka=new L,Va=new L,Ga=new L,Ha=new ve,Wa=new ve,Xa=new ve;class wn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),En.subVectors(t,e),i.cross(En);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){En.subVectors(i,e),Kn.subVectors(n,e),za.subVectors(t,e);const a=En.dot(En),o=En.dot(Kn),c=En.dot(za),l=Kn.dot(Kn),h=Kn.dot(za),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,$n.x),c.addScaledVector(a,$n.y),c.addScaledVector(o,$n.z),c)}static getInterpolatedAttribute(t,e,n,i,s,a){return Ha.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),Ha.fromBufferAttribute(t,e),Wa.fromBufferAttribute(t,n),Xa.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Ha,s.x),a.addScaledVector(Wa,s.y),a.addScaledVector(Xa,s.z),a}static isFrontFacing(t,e,n,i){return En.subVectors(n,e),Kn.subVectors(t,e),En.cross(Kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),En.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return wn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;ar.subVectors(i,n),or.subVectors(s,n),ka.subVectors(t,n);const c=ar.dot(ka),l=or.dot(ka);if(c<=0&&l<=0)return e.copy(n);Va.subVectors(t,i);const h=ar.dot(Va),u=or.dot(Va);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ar,a);Ga.subVectors(t,s);const d=ar.dot(Ga),g=or.dot(Ga);if(g>=0&&d<=g)return e.copy(s);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(or,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Ic.subVectors(s,i),o=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(Ic,o);const p=1/(m+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(ar,a).addScaledVector(or,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function qa(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=fd(t,1),e=Ot(e,0,1),n=Ot(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=qa(a,s,t+1/3),this.g=qa(a,s,t),this.b=qa(a,s,t-1/3)}return Yt.colorSpaceToWorking(this,i),this}setStyle(t,e=Mn){function n(s){s!==void 0&&parseFloat(s)<1&&Tt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Tt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Tt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){const n=cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Tt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return Yt.workingToColorSpace(Be.copy(this),t),Math.round(Ot(Be.r*255,0,255))*65536+Math.round(Ot(Be.g*255,0,255))*256+Math.round(Ot(Be.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(Be.copy(this),e);const n=Be.r,i=Be.g,s=Be.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Mn){Yt.workingToColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,i=Be.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(Ps);const n=Ra(ui.h,Ps.h,e),i=Ra(ui.s,Ps.s,e),s=Ra(ui.l,Ps.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Ht;Ht.NAMES=cu;let wd=0;class Ki extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=xr,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=vo,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Tt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Tt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xo&&(n.blendSrc=this.blendSrc),this.blendDst!==vo&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class mr extends Ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new L,Ds=new Vt;let Ad=0;class zt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ad++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vc,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ds.fromBufferAttribute(this,e),Ds.applyMatrix3(t),this.setXY(e,Ds.x,Ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Br(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Br(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Br(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Br(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Br(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vc&&(t.usage=this.usage),t}}class hu extends zt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class uu extends zt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ue extends zt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rd=0;const xn=new se,Ya=new Te,lr=new L,an=new ms,Gr=new ms,Le=new L;class Bt extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ou(t)?uu:hu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Lt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return Ya.lookAt(t),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ue(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(an.min,Gr.min),an.expandByPoint(Le),Le.addVectors(an.max,Gr.max),an.expandByPoint(Le)):(an.expandByPoint(Gr.min),an.expandByPoint(Gr.max))}an.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Le.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Le.fromBufferAttribute(o,l),c&&(lr.fromBufferAttribute(t,l),Le.add(lr)),i=Math.max(i,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new L,c[C]=new L;const l=new L,h=new L,u=new L,f=new Vt,d=new Vt,g=new Vt,_=new L,m=new L;function p(C,x,S){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,x),g.fromBufferAttribute(s,S),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),o[C].add(_),o[x].add(_),o[S].add(_),c[C].add(m),c[x].add(m),c[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,x=M.length;C<x;++C){const S=M[C],P=S.start,O=S.count;for(let U=P,H=P+O;U<H;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const b=new L,y=new L,E=new L,A=new L;function w(C){E.fromBufferAttribute(i,C),A.copy(E);const x=o[C];b.copy(x),b.sub(E.multiplyScalar(E.dot(x))).normalize(),y.crossVectors(A,x);const P=y.dot(c[C])<0?-1:1;a.setXYZW(C,b.x,b.y,b.z,P)}for(let C=0,x=M.length;C<x;++C){const S=M[C],P=S.start,O=S.count;for(let U=P,H=P+O;U<H;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,s=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new zt(f,h,u)}if(this.index===null)return Tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Bt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new se,Ri=new _a,Ls=new _s,Uc=new L,Is=new L,Fs=new L,Us=new L,ja=new L,Ns=new L,Nc=new L,Os=new L;class ye extends Te{constructor(t=new Bt,e=new mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Ns.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(ja.fromBufferAttribute(u,t),a?Ns.addScaledVector(ja,h):Ns.addScaledVector(ja.sub(e),h))}e.add(Ns)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(s),Ri.copy(t.ray).recast(t.near),!(Ls.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Ls,Uc)===null||Ri.origin.distanceToSquared(Uc)>(t.far-t.near)**2))&&(Fc.copy(s).invert(),Ri.copy(t.ray).applyMatrix4(Fc),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,E=b;y<E;y+=3){const A=o.getX(y),w=o.getX(y+1),C=o.getX(y+2);i=Bs(this,p,t,n,l,h,u,A,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);i=Bs(this,a,t,n,l,h,u,M,b,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),b=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,E=b;y<E;y+=3){const A=y,w=y+1,C=y+2;i=Bs(this,p,t,n,l,h,u,A,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,b=m+1,y=m+2;i=Bs(this,a,t,n,l,h,u,M,b,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Cd(r,t,e,n,i,s,a,o){let c;if(t.side===$e?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===kn,o),c===null)return null;Os.copy(o),Os.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Os);return l<e.near||l>e.far?null:{distance:l,point:Os.clone(),object:r}}function Bs(r,t,e,n,i,s,a,o,c,l){r.getVertexPosition(o,Is),r.getVertexPosition(c,Fs),r.getVertexPosition(l,Us);const h=Cd(r,t,e,n,Is,Fs,Us,Nc);if(h){const u=new L;wn.getBarycoord(Nc,Is,Fs,Us,u),i&&(h.uv=wn.getInterpolatedAttribute(i,o,c,l,u,new Vt)),s&&(h.uv1=wn.getInterpolatedAttribute(s,o,c,l,u,new Vt)),a&&(h.normal=wn.getInterpolatedAttribute(a,o,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new L,materialIndex:0};wn.getNormal(Is,Fs,Us,f.normal),h.face=f,h.barycoord=u}return h}class gs extends Bt{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2));function g(_,m,p,M,b,y,E,A,w,C,x){const S=y/w,P=E/C,O=y/2,U=E/2,H=A/2,W=w+1,V=C+1;let z=0,j=0;const ot=new L;for(let et=0;et<V;et++){const ct=et*P-U;for(let Rt=0;Rt<W;Rt++){const Pt=Rt*S-O;ot[_]=Pt*M,ot[m]=ct*b,ot[p]=H,l.push(ot.x,ot.y,ot.z),ot[_]=0,ot[m]=0,ot[p]=A>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Rt/w),u.push(1-et/C),z+=1}}for(let et=0;et<C;et++)for(let ct=0;ct<w;ct++){const Rt=f+ct+W*et,Pt=f+ct+W*(et+1),Wt=f+(ct+1)+W*(et+1),Xt=f+(ct+1)+W*et;c.push(Rt,Pt,Xt),c.push(Pt,Wt,Xt),j+=6}o.addGroup(d,j,x),d+=j,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ar(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function We(r){const t={};for(let e=0;e<r.length;e++){const n=Ar(r[e]);for(const i in n)t[i]=n[i]}return t}function Pd(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function fu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Dd={clone:Ar,merge:We};var Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jt extends Ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ar(t.uniforms),this.uniformsGroups=Pd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}let du=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const fi=new L,Oc=new Vt,Bc=new Vt;class ln extends du{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,Oc,Bc),e.subVectors(Bc,Oc)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Aa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const cr=-90,hr=1;class Fd extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ln(cr,hr,t,e);i.layers=this.layers,this.add(i);const s=new ln(cr,hr,t,e);s.layers=this.layers,this.add(s);const a=new ln(cr,hr,t,e);a.layers=this.layers,this.add(a);const o=new ln(cr,hr,t,e);o.layers=this.layers,this.add(o);const c=new ln(cr,hr,t,e);c.layers=this.layers,this.add(c);const l=new ln(cr,hr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class pu extends Ve{constructor(t=[],e=ji,n,i,s,a,o,c,l,h){super(t,e,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mu extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new pu(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new gs(5,5,5),s=new Jt({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:ei});s.uniforms.tEquirect.value=e;const a=new ye(i,s),o=e.minFilter;return e.minFilter===Vi&&(e.minFilter=ke),new Fd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}class Ae extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ud={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ud)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Nd extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Od extends Ve{constructor(t=null,e=1,n=1,i,s,a,o,c,l=Fe,h=Fe,u,f){super(null,a,o,c,l,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $a=new L,Bd=new L,zd=new Lt;class Oi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=$a.subVectors(n,e).cross(Bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($a),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zd.getNormalMatrix(t),i=this.coplanarPoint($a).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new _s,kd=new Vt(.5,.5),zs=new L;class zl{constructor(t=new Oi,e=new Oi,n=new Oi,i=new Oi,s=new Oi,a=new Oi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn,n=!1){const i=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],M=s[12],b=s[13],y=s[14],E=s[15];if(i[0].setComponents(l-a,d-h,p-g,E-M).normalize(),i[1].setComponents(l+a,d+h,p+g,E+M).normalize(),i[2].setComponents(l+o,d+u,p+_,E+b).normalize(),i[3].setComponents(l-o,d-u,p-_,E-b).normalize(),n)i[4].setComponents(c,f,m,y).normalize(),i[5].setComponents(l-c,d-f,p-m,E-y).normalize();else if(i[4].setComponents(l-c,d-f,p-m,E-y).normalize(),e===Nn)i[5].setComponents(l+c,d+f,p+m,E+y).normalize();else if(e===sa)i[5].setComponents(c,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){Ci.center.set(0,0,0);const e=kd.distanceTo(t.center);return Ci.radius=.7071067811865476+e,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(zs.x=i.normal.x>0?t.max.x:t.min.x,zs.y=i.normal.y>0?t.max.y:t.min.y,zs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class In extends Ki{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const aa=new L,oa=new L,zc=new se,Hr=new _a,ks=new _s,Za=new L,kc=new L;class Xe extends Te{constructor(t=new Bt,e=new In){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)aa.fromBufferAttribute(e,i-1),oa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=aa.distanceTo(oa);t.setAttribute("lineDistance",new Ue(n,1))}else Tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(i),ks.radius+=s,t.ray.intersectsSphere(ks)===!1)return;zc.copy(i).invert(),Hr.copy(t.ray).applyMatrix4(zc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=l){const p=h.getX(_),M=h.getX(_+1),b=Vs(this,t,Hr,c,p,M,_);b&&e.push(b)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=Vs(this,t,Hr,c,_,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=l){const p=Vs(this,t,Hr,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Vs(this,t,Hr,c,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Vs(r,t,e,n,i,s,a){const o=r.geometry.attributes.position;if(aa.fromBufferAttribute(o,i),oa.fromBufferAttribute(o,s),e.distanceSqToSegment(aa,oa,Za,kc)>n)return;Za.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Za);if(!(l<t.near||l>t.far))return{distance:l,point:kc.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Vc=new L,Gc=new L;class Vd extends Xe{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Vc.fromBufferAttribute(e,i),Gc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vc.distanceTo(Gc);t.setAttribute("lineDistance",new Ue(n,1))}else Tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gd extends Ki{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hc=new se,hl=new _a,Gs=new _s,Hs=new L;class jr extends Te{constructor(t=new Bt,e=new Gd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(i),Gs.radius+=s,t.ray.intersectsSphere(Gs)===!1)return;Hc.copy(i).invert(),hl.copy(t.ray).applyMatrix4(Hc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);Hs.fromBufferAttribute(u,m),Wc(Hs,m,c,i,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Hs.fromBufferAttribute(u,g),Wc(Hs,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wc(r,t,e,n,i,s,a){const o=hl.distanceSqToPoint(r);if(o<e){const c=new L;hl.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class as extends Ve{constructor(t,e,n=Vn,i,s,a,o=Fe,c=Fe,l,h=ri,u=1){if(h!==ri&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ol(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Hd extends as{constructor(t,e=Vn,n=ji,i,s,a=Fe,o=Fe,c,l=ri){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class _u extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wd{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Tt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),c=e||(a.isVector2?new Vt:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,i=[],s=[],a=[],o=new L,c=new se;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new L)}s[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ot(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(Ot(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function Xd(r,t){const e=1-r;return e*e*t}function qd(r,t){return 2*(1-r)*r*t}function Yd(r,t){return r*r*t}function Ja(r,t,e,n){return Xd(r,t)+qd(r,e)+Yd(r,n)}class jd extends Wd{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Ja(t,i.x,s.x,a.x),Ja(t,i.y,s.y,a.y),Ja(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ga extends Bt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*f-a;for(let b=0;b<l;b++){const y=b*u-s;g.push(y,-M,0),_.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const b=M+l*p,y=M+l*(p+1),E=M+1+l*(p+1),A=M+1+l*p;d.push(b,y,A),d.push(y,E,A)}this.setIndex(d),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ga(t.width,t.height,t.widthSegments,t.heightSegments)}}class kl extends Bt{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=t;const f=(e-t)/i,d=new L,g=new Vt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,b=M,y=M+n+1,E=M+n+2,A=M+1;o.push(b,y,A),o.push(y,E,A)}}this.setIndex(o),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class cn extends Bt{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new L,f=new L,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],b=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){const A=E/e;u.x=-t*Math.cos(i+A*s)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(i+A*s)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+y,1-b),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const b=h[p][M+1],y=h[p][M],E=h[p+1][M],A=h[p+1][M+1];(p!==0||a>0)&&d.push(b,y,A),(p!==n-1||c<Math.PI)&&d.push(y,E,A)}this.setIndex(d),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Kd extends Jt{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $d extends Ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=au,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zd extends Ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jd extends Ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Jr={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Qd{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const tp=new Qd;class xs{constructor(t){this.manager=t!==void 0?t:tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}xs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zn={};class ep extends Error{constructor(t,e){super(t),this.response=e}}class np extends xs{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Jr.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Zn[t]!==void 0){Zn[t].push({onLoad:e,onProgress:n,onError:i});return}Zn[t]=[],Zn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Tt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Zn[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){u.read().then(({done:b,value:y})=>{if(b)p.close();else{_+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let A=0,w=h.length;A<w;A++){const C=h[A];C.onProgress&&C.onProgress(E)}p.enqueue(y),M()}},b=>{p.error(b)})}}});return new Response(m)}else throw new ep(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Jr.add(`file:${t}`,l);const h=Zn[t];delete Zn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Zn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Zn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ur=new WeakMap;class ip extends xs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Jr.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let u=ur.get(a);u===void 0&&(u=[],ur.set(a,u)),u.push({onLoad:e,onError:i})}return a}const o=rs("img");function c(){h(),e&&e(this);const u=ur.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}ur.delete(this),s.manager.itemEnd(t)}function l(u){h(),i&&i(u),Jr.remove(`image:${t}`);const f=ur.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(u)}ur.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Jr.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class rp extends xs{constructor(t){super(t)}load(t,e,n,i){const s=new Ve,a=new ip(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Vl extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Qa=new se,Xc=new L,qc=new L;class gu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xc),qc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qc),e.updateMatrixWorld(),Qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sp extends gu{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}}class to extends Vl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Gl extends du{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ap extends gu{constructor(){super(new Gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yc extends Vl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new ap}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class op extends Vl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}let Ws;class xu{static getContext(){return Ws===void 0&&(Ws=new(window.AudioContext||window.webkitAudioContext)),Ws}static setContext(t){Ws=t}}class lp extends xs{constructor(t){super(t)}load(t,e,n,i){const s=this,a=new np(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(c){try{const l=c.slice(0);xu.getContext().decodeAudioData(l,function(u){e(u)}).catch(o)}catch(l){o(l)}},n,i);function o(c){i?i(c):Gt(c),s.manager.itemError(t)}}}class cp extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class vu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Pi=new L,eo=new Ur,hp=new L,Di=new L,Li=new L;class up extends Te{constructor(){super(),this.type="AudioListener",this.context=xu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new vu}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Pi,eo,hp),Di.set(0,0,-1).applyQuaternion(eo),Li.set(0,1,0).applyQuaternion(eo),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Pi.x,n),e.positionY.linearRampToValueAtTime(Pi.y,n),e.positionZ.linearRampToValueAtTime(Pi.z,n),e.forwardX.linearRampToValueAtTime(Di.x,n),e.forwardY.linearRampToValueAtTime(Di.y,n),e.forwardZ.linearRampToValueAtTime(Di.z,n),e.upX.linearRampToValueAtTime(Li.x,n),e.upY.linearRampToValueAtTime(Li.y,n),e.upZ.linearRampToValueAtTime(Li.z,n)}else e.setPosition(Pi.x,Pi.y,Pi.z),e.setOrientation(Di.x,Di.y,Di.z,Li.x,Li.y,Li.z)}}class jc extends Te{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Tt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Tt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Tt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const Kc=new se;let fp=class{constructor(t,e,n=0,i=1/0){this.ray=new _a(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Bl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Gt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Kc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kc),this}intersectObject(t,e=!0,n=[]){return ul(t,this,n,e),n.sort($c),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)ul(t[i],this,n,e);return n.sort($c),n}};function $c(r,t){return r.distance-t.distance}function ul(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)ul(s[a],t,e,!0)}}function Zc(r,t,e,n){const i=dp(n);switch(e){case iu:return r*t;case su:return r*t/i.components*i.byteLength;case Ll:return r*t/i.components*i.byteLength;case Er:return r*t*2/i.components*i.byteLength;case Il:return r*t*2/i.components*i.byteLength;case ru:return r*t*3/i.components*i.byteLength;case An:return r*t*4/i.components*i.byteLength;case Fl:return r*t*4/i.components*i.byteLength;case Ks:case $s:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Zs:case Js:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Lo:case Fo:return Math.max(r,16)*Math.max(t,8)/4;case Do:case Io:return Math.max(r,8)*Math.max(t,8)/2;case Uo:case No:case Bo:case zo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Oo:case ko:case Vo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case qo:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case jo:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case $o:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case tl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case el:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case nl:case il:case rl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case sl:case al:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ol:case ll:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dp(r){switch(r){case hn:case Qh:return{byteLength:1,components:1};case ns:case tu:case ii:return{byteLength:2,components:1};case Pl:case Dl:return{byteLength:2,components:4};case Vn:case Cl:case Un:return{byteLength:4,components:1};case eu:case nu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window<"u"&&(window.__THREE__?Tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl);function Mu(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function pp(r){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(r.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_p=`#ifdef USE_ALPHAHASH
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
#endif`,gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sp=`#ifdef USE_AOMAP
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
#endif`,yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tp=`#ifdef USE_BATCHING
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
#endif`,bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ap=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rp=`#ifdef USE_IRIDESCENCE
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
#endif`,Cp=`#ifdef USE_BUMPMAP
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bp=`#define PI 3.141592653589793
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
} // validated`,zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kp=`vec3 transformedNormal = objectNormal;
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
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nm=`#ifdef USE_GRADIENTMAP
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
}`,im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,am=`uniform bool receiveShadow;
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
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fm=`PhysicalMaterial material;
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
#endif`,dm=`uniform sampler2D dfgLUT;
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
}`,pm=`
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bm=`#if defined( USE_POINTS_UV )
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
#endif`,Em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
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
#endif`,Dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
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
#endif`,Bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qm=`float getShadowMask() {
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
}`,t_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e_=`#ifdef USE_SKINNING
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
#endif`,n_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i_=`#ifdef USE_SKINNING
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
#endif`,r_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l_=`#ifdef USE_TRANSMISSION
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
#endif`,c_=`#ifdef USE_TRANSMISSION
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m_=`uniform sampler2D t2D;
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
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`#include <common>
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
}`,S_=`#if DEPTH_PACKING == 3200
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
}`,y_=`#define DISTANCE
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
}`,T_=`#define DISTANCE
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
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`uniform float scale;
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
}`,A_=`uniform vec3 diffuse;
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
}`,R_=`#include <common>
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
}`,C_=`uniform vec3 diffuse;
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
}`,P_=`#define LAMBERT
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
}`,D_=`#define LAMBERT
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
}`,L_=`#define MATCAP
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
}`,I_=`#define MATCAP
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
}`,F_=`#define NORMAL
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
}`,U_=`#define NORMAL
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
}`,N_=`#define PHONG
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
}`,O_=`#define PHONG
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
}`,B_=`#define STANDARD
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
}`,z_=`#define STANDARD
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
}`,k_=`#define TOON
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
}`,V_=`#define TOON
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
}`,G_=`uniform float size;
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
}`,H_=`uniform vec3 diffuse;
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
}`,W_=`#include <common>
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
}`,X_=`uniform vec3 color;
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
}`,q_=`uniform float rotation;
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
}`,Y_=`uniform vec3 diffuse;
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
}`,It={alphahash_fragment:mp,alphahash_pars_fragment:_p,alphamap_fragment:gp,alphamap_pars_fragment:xp,alphatest_fragment:vp,alphatest_pars_fragment:Mp,aomap_fragment:Sp,aomap_pars_fragment:yp,batching_pars_vertex:Tp,batching_vertex:bp,begin_vertex:Ep,beginnormal_vertex:wp,bsdfs:Ap,iridescence_fragment:Rp,bumpmap_pars_fragment:Cp,clipping_planes_fragment:Pp,clipping_planes_pars_fragment:Dp,clipping_planes_pars_vertex:Lp,clipping_planes_vertex:Ip,color_fragment:Fp,color_pars_fragment:Up,color_pars_vertex:Np,color_vertex:Op,common:Bp,cube_uv_reflection_fragment:zp,defaultnormal_vertex:kp,displacementmap_pars_vertex:Vp,displacementmap_vertex:Gp,emissivemap_fragment:Hp,emissivemap_pars_fragment:Wp,colorspace_fragment:Xp,colorspace_pars_fragment:qp,envmap_fragment:Yp,envmap_common_pars_fragment:jp,envmap_pars_fragment:Kp,envmap_pars_vertex:$p,envmap_physical_pars_fragment:om,envmap_vertex:Zp,fog_vertex:Jp,fog_pars_vertex:Qp,fog_fragment:tm,fog_pars_fragment:em,gradientmap_pars_fragment:nm,lightmap_pars_fragment:im,lights_lambert_fragment:rm,lights_lambert_pars_fragment:sm,lights_pars_begin:am,lights_toon_fragment:lm,lights_toon_pars_fragment:cm,lights_phong_fragment:hm,lights_phong_pars_fragment:um,lights_physical_fragment:fm,lights_physical_pars_fragment:dm,lights_fragment_begin:pm,lights_fragment_maps:mm,lights_fragment_end:_m,logdepthbuf_fragment:gm,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:Mm,map_fragment:Sm,map_pars_fragment:ym,map_particle_fragment:Tm,map_particle_pars_fragment:bm,metalnessmap_fragment:Em,metalnessmap_pars_fragment:wm,morphinstance_vertex:Am,morphcolor_vertex:Rm,morphnormal_vertex:Cm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Dm,normal_fragment_begin:Lm,normal_fragment_maps:Im,normal_pars_fragment:Fm,normal_pars_vertex:Um,normal_vertex:Nm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Bm,clearcoat_normal_fragment_maps:zm,clearcoat_pars_fragment:km,iridescence_pars_fragment:Vm,opaque_fragment:Gm,packing:Hm,premultiplied_alpha_fragment:Wm,project_vertex:Xm,dithering_fragment:qm,dithering_pars_fragment:Ym,roughnessmap_fragment:jm,roughnessmap_pars_fragment:Km,shadowmap_pars_fragment:$m,shadowmap_pars_vertex:Zm,shadowmap_vertex:Jm,shadowmask_pars_fragment:Qm,skinbase_vertex:t_,skinning_pars_vertex:e_,skinning_vertex:n_,skinnormal_vertex:i_,specularmap_fragment:r_,specularmap_pars_fragment:s_,tonemapping_fragment:a_,tonemapping_pars_fragment:o_,transmission_fragment:l_,transmission_pars_fragment:c_,uv_pars_fragment:h_,uv_pars_vertex:u_,uv_vertex:f_,worldpos_vertex:d_,background_vert:p_,background_frag:m_,backgroundCube_vert:__,backgroundCube_frag:g_,cube_vert:x_,cube_frag:v_,depth_vert:M_,depth_frag:S_,distance_vert:y_,distance_frag:T_,equirect_vert:b_,equirect_frag:E_,linedashed_vert:w_,linedashed_frag:A_,meshbasic_vert:R_,meshbasic_frag:C_,meshlambert_vert:P_,meshlambert_frag:D_,meshmatcap_vert:L_,meshmatcap_frag:I_,meshnormal_vert:F_,meshnormal_frag:U_,meshphong_vert:N_,meshphong_frag:O_,meshphysical_vert:B_,meshphysical_frag:z_,meshtoon_vert:k_,meshtoon_frag:V_,points_vert:G_,points_frag:H_,shadow_vert:W_,shadow_frag:X_,sprite_vert:q_,sprite_frag:Y_},lt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Dn={basic:{uniforms:We([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:We([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:We([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:We([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:We([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:We([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:We([lt.points,lt.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:We([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:We([lt.common,lt.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:We([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:We([lt.sprite,lt.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distance:{uniforms:We([lt.common,lt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distance_vert,fragmentShader:It.distance_frag},shadow:{uniforms:We([lt.lights,lt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};Dn.physical={uniforms:We([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const Xs={r:0,b:0,g:0},Ii=new Gn,j_=new se;function K_(r,t,e,n,i,s,a){const o=new Ht(0);let c=s===!0?0:1,l,h,u=null,f=0,d=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function _(b){let y=!1;const E=g(b);E===null?p(o,c):E&&E.isColor&&(p(E,1),y=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(b,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===ma)?(h===void 0&&(h=new ye(new gs(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:Ar(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ii.copy(y.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(j_.makeRotationFromEuler(Ii)),h.material.toneMapped=Yt.getTransfer(E.colorSpace)!==ne,(u!==E||f!==E.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=r.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new ye(new ga(2,2),new Jt({name:"BackgroundMaterial",uniforms:Ar(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(E.colorSpace)!==ne,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,d=r.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,y){b.getRGB(Xs,fu(r)),n.buffers.color.setClear(Xs.r,Xs.g,Xs.b,y,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(o,c)},render:_,addToRenderList:m,dispose:M}}function $_(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(S,P,O,U,H){let W=!1;const V=u(U,O,P);s!==V&&(s=V,l(s.object)),W=d(S,U,O,H),W&&g(S,U,O,H),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(S,P,O,U),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return r.createVertexArray()}function l(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,P,O){const U=O.wireframe===!0;let H=n[S.id];H===void 0&&(H={},n[S.id]=H);let W=H[P.id];W===void 0&&(W={},H[P.id]=W);let V=W[U];return V===void 0&&(V=f(c()),W[U]=V),V}function f(S){const P=[],O=[],U=[];for(let H=0;H<e;H++)P[H]=0,O[H]=0,U[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:U,object:S,attributes:{},index:null}}function d(S,P,O,U){const H=s.attributes,W=P.attributes;let V=0;const z=O.getAttributes();for(const j in z)if(z[j].location>=0){const et=H[j];let ct=W[j];if(ct===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor)),et===void 0||et.attribute!==ct||ct&&et.data!==ct.data)return!0;V++}return s.attributesNum!==V||s.index!==U}function g(S,P,O,U){const H={},W=P.attributes;let V=0;const z=O.getAttributes();for(const j in z)if(z[j].location>=0){let et=W[j];et===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(et=S.instanceColor));const ct={};ct.attribute=et,et&&et.data&&(ct.data=et.data),H[j]=ct,V++}s.attributes=H,s.attributesNum=V,s.index=U}function _(){const S=s.newAttributes;for(let P=0,O=S.length;P<O;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const O=s.newAttributes,U=s.enabledAttributes,H=s.attributeDivisors;O[S]=1,U[S]===0&&(r.enableVertexAttribArray(S),U[S]=1),H[S]!==P&&(r.vertexAttribDivisor(S,P),H[S]=P)}function M(){const S=s.newAttributes,P=s.enabledAttributes;for(let O=0,U=P.length;O<U;O++)P[O]!==S[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function b(S,P,O,U,H,W,V){V===!0?r.vertexAttribIPointer(S,P,O,H,W):r.vertexAttribPointer(S,P,O,U,H,W)}function y(S,P,O,U){_();const H=U.attributes,W=O.getAttributes(),V=P.defaultAttributeValues;for(const z in W){const j=W[z];if(j.location>=0){let ot=H[z];if(ot===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),ot!==void 0){const et=ot.normalized,ct=ot.itemSize,Rt=t.get(ot);if(Rt===void 0)continue;const Pt=Rt.buffer,Wt=Rt.type,Xt=Rt.bytesPerElement,Y=Wt===r.INT||Wt===r.UNSIGNED_INT||ot.gpuType===Cl;if(ot.isInterleavedBufferAttribute){const Z=ot.data,pt=Z.stride,Dt=ot.offset;if(Z.isInstancedInterleavedBuffer){for(let gt=0;gt<j.locationSize;gt++)p(j.location+gt,Z.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let gt=0;gt<j.locationSize;gt++)m(j.location+gt);r.bindBuffer(r.ARRAY_BUFFER,Pt);for(let gt=0;gt<j.locationSize;gt++)b(j.location+gt,ct/j.locationSize,Wt,et,pt*Xt,(Dt+ct/j.locationSize*gt)*Xt,Y)}else{if(ot.isInstancedBufferAttribute){for(let Z=0;Z<j.locationSize;Z++)p(j.location+Z,ot.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Z=0;Z<j.locationSize;Z++)m(j.location+Z);r.bindBuffer(r.ARRAY_BUFFER,Pt);for(let Z=0;Z<j.locationSize;Z++)b(j.location+Z,ct/j.locationSize,Wt,et,ct*Xt,ct/j.locationSize*Z*Xt,Y)}}else if(V!==void 0){const et=V[z];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(j.location,et);break;case 3:r.vertexAttrib3fv(j.location,et);break;case 4:r.vertexAttrib4fv(j.location,et);break;default:r.vertexAttrib1fv(j.location,et)}}}}M()}function E(){C();for(const S in n){const P=n[S];for(const O in P){const U=P[O];for(const H in U)h(U[H].object),delete U[H];delete P[O]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const O in P){const U=P[O];for(const H in U)h(U[H].object),delete U[H];delete P[O]}delete n[S.id]}function w(S){for(const P in n){const O=n[P];if(O[S.id]===void 0)continue;const U=O[S.id];for(const H in U)h(U[H].object),delete U[H];delete O[S.id]}}function C(){x(),a=!0,s!==i&&(s=i,l(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Z_(r,t,e){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function J_(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==An&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==hn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Un&&!C)}function c(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Tt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:y,maxSamples:E,samples:A}}function Q_(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Oi,o=new Lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const M=s?0:n,b=M*4;let y=p.clippingState||null;c.value=y,y=h(g,f,b,d);for(let E=0;E!==b;++E)y[E]=e[E];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=d;b!==_;++b,y+=4)a.copy(u[b]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function tg(r){let t=new WeakMap;function e(a,o){return o===Ao?a.mapping=ji:o===Ro&&(a.mapping=br),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ao||o===Ro)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new mu(c.height);return l.fromEquirectangularTexture(r,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const pi=4,Jc=[.125,.215,.35,.446,.526,.582],ki=20,eg=256,Wr=new Gl,Qc=new Ht;let no=null,io=0,ro=0,so=!1;const ng=new L;class th{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:a=256,position:o=ng}=s;no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(no,io,ro),this._renderer.xr.enabled=so,t.scissorTest=!1,fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:ii,format:An,colorSpace:wr,depthBuffer:!1},i=eh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ig(s)),this._blurMaterial=sg(s,t,e),this._ggxMaterial=rg(s,t,e)}return i}_compileMaterial(t){const e=new ye(new Bt,t);this._renderer.compile(e,Wr)}_sceneToCubeUV(t,e,n,i,s){const c=new ln(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Qc),u.toneMapping=Bn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ye(new gs,new mr({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(Qc),p=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[b],s.y,s.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[b]));const E=this._cubeSize;fr(i,y*E,b>2?E:0,E,E),u.setRenderTarget(i),p&&u.render(_,c),u.render(t,c)}u.toneMapping=d,u.autoClear=f,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ji||t.mapping===br;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;fr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Wr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=0+l*1.25,d=u*f,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-pi?n-g+pi:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,fr(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(o,Wr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,fr(t,m,p,3*_,2*_),i.setRenderTarget(t),i.render(o,Wr)}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Gt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=l;const f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ki-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):ki;m>ki&&Tt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const p=[];let M=0;for(let w=0;w<ki;++w){const C=w/_,x=Math.exp(-C*C/2);p.push(x),w===0?M+=x:w<m&&(M+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const y=this._sizeLods[i],E=3*y*(i>b-pi?i-b+pi:0),A=4*(this._cubeSize-y);fr(e,E,A,3*y,2*y),c.setRenderTarget(e),c.render(u,Wr)}}function ig(r){const t=[],e=[],n=[];let i=r;const s=r-pi+1+Jc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-pi?c=Jc[a-r+pi-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),b=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,C=A>2?0:-1,x=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];M.set(x,_*g*A),b.set(f,m*g*A);const S=[A,A,A,A,A,A];y.set(S,p*g*A)}const E=new Bt;E.setAttribute("position",new zt(M,_)),E.setAttribute("uv",new zt(b,m)),E.setAttribute("faceIndex",new zt(y,p)),n.push(new ye(E,null)),i>pi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function eh(r,t,e){const n=new zn(r,t,e);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function rg(r,t,e){return new Jt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xa(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function sg(r,t,e){const n=new Float32Array(ki),i=new L(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xa(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function nh(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ih(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function xa(){return`

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
	`}function ag(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ao||c===Ro,h=c===ji||c===br;if(l||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new th(r)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new th(r)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function og(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ss("WebGLRenderer: "+n+" extension not supported."),i}}}function lg(r,t,e,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],r.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let b=0,y=M.length;b<y;b+=3){const E=M[b+0],A=M[b+1],w=M[b+2];f.push(E,A,A,w,w,E)}}else if(g!==void 0){const M=g.array;_=g.version;for(let b=0,y=M.length/3-1;b<y;b+=3){const E=b+0,A=b+1,w=b+2;f.push(E,A,A,w,w,E)}}else return;const m=new(ou(f)?uu:hu)(f,1);m.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function cg(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){r.drawElements(n,d,s,f*a),e.update(d,n,1)}function l(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Gt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ug(r,t,e){const n=new WeakMap,i=new ve;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let E=o.attributes.position.count*y,A=1;E>t.maxTextureSize&&(A=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const w=new Float32Array(E*A*4*u),C=new lu(w,E,A,u);C.type=Un,C.needsUpdate=!0;const x=y*4;for(let P=0;P<u;P++){const O=p[P],U=M[P],H=b[P],W=E*A*4*P;for(let V=0;V<O.count;V++){const z=V*x;g===!0&&(i.fromBufferAttribute(O,V),w[W+z+0]=i.x,w[W+z+1]=i.y,w[W+z+2]=i.z,w[W+z+3]=0),_===!0&&(i.fromBufferAttribute(U,V),w[W+z+4]=i.x,w[W+z+5]=i.y,w[W+z+6]=i.z,w[W+z+7]=0),m===!0&&(i.fromBufferAttribute(H,V),w[W+z+8]=i.x,w[W+z+9]=i.y,w[W+z+10]=i.z,w[W+z+11]=H.itemSize===4?i.w:1)}}f={count:u,texture:C,size:new Vt(E,A)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function fg(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const dg={[Xh]:"LINEAR_TONE_MAPPING",[qh]:"REINHARD_TONE_MAPPING",[Yh]:"CINEON_TONE_MAPPING",[jh]:"ACES_FILMIC_TONE_MAPPING",[$h]:"AGX_TONE_MAPPING",[Zh]:"NEUTRAL_TONE_MAPPING",[Kh]:"CUSTOM_TONE_MAPPING"};function pg(r,t,e,n,i){const s=new zn(t,e,{type:r,depthBuffer:n,stencilBuffer:i}),a=new zn(t,e,{type:ii,depthBuffer:!1,stencilBuffer:!1}),o=new Bt;o.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ue([0,2,0,0,2,0],2));const c=new Kd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new ye(o,c),h=new Gl(-1,1,1,-1,0,1);let u=null,f=null,d=!1,g,_=null,m=[],p=!1;this.setSize=function(M,b){s.setSize(M,b),a.setSize(M,b);for(let y=0;y<m.length;y++){const E=m[y];E.setSize&&E.setSize(M,b)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const b=s.width,y=s.height;for(let E=0;E<m.length;E++){const A=m[E];A.setSize&&A.setSize(b,y)}},this.begin=function(M,b){if(d||M.toneMapping===Bn&&m.length===0)return!1;if(_=b,b!==null){const y=b.width,E=b.height;(s.width!==y||s.height!==E)&&this.setSize(y,E)}return p===!1&&M.setRenderTarget(s),g=M.toneMapping,M.toneMapping=Bn,!0},this.hasRenderPass=function(){return p},this.end=function(M,b){M.toneMapping=g,d=!0;let y=s,E=a;for(let A=0;A<m.length;A++){const w=m[A];if(w.enabled!==!1&&(w.render(M,E,y,b),w.needsSwap!==!1)){const C=y;y=E,E=C}}if(u!==M.outputColorSpace||f!==M.toneMapping){u=M.outputColorSpace,f=M.toneMapping,c.defines={},Yt.getTransfer(u)===ne&&(c.defines.SRGB_TRANSFER="");const A=dg[f];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(_),M.render(l,h),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Su=new Ve,fl=new as(1,1),yu=new lu,Tu=new xd,bu=new pu,rh=[],sh=[],ah=new Float32Array(16),oh=new Float32Array(9),lh=new Float32Array(4);function Nr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=rh[i];if(s===void 0&&(s=new Float32Array(i),rh[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ce(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Pe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function va(r,t){let e=sh[t];e===void 0&&(e=new Int32Array(t),sh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function mg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function _g(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;r.uniform2fv(this.addr,t),Pe(e,t)}}function gg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;r.uniform3fv(this.addr,t),Pe(e,t)}}function xg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;r.uniform4fv(this.addr,t),Pe(e,t)}}function vg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;lh.set(n),r.uniformMatrix2fv(this.addr,!1,lh),Pe(e,n)}}function Mg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;oh.set(n),r.uniformMatrix3fv(this.addr,!1,oh),Pe(e,n)}}function Sg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;ah.set(n),r.uniformMatrix4fv(this.addr,!1,ah),Pe(e,n)}}function yg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Tg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;r.uniform2iv(this.addr,t),Pe(e,t)}}function bg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;r.uniform3iv(this.addr,t),Pe(e,t)}}function Eg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;r.uniform4iv(this.addr,t),Pe(e,t)}}function wg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Ag(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;r.uniform2uiv(this.addr,t),Pe(e,t)}}function Rg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;r.uniform3uiv(this.addr,t),Pe(e,t)}}function Cg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;r.uniform4uiv(this.addr,t),Pe(e,t)}}function Pg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(fl.compareFunction=e.isReversedDepthBuffer()?Nl:Ul,s=fl):s=Su,e.setTexture2D(t||s,i)}function Dg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Tu,i)}function Lg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||bu,i)}function Ig(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||yu,i)}function Fg(r){switch(r){case 5126:return mg;case 35664:return _g;case 35665:return gg;case 35666:return xg;case 35674:return vg;case 35675:return Mg;case 35676:return Sg;case 5124:case 35670:return yg;case 35667:case 35671:return Tg;case 35668:case 35672:return bg;case 35669:case 35673:return Eg;case 5125:return wg;case 36294:return Ag;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Ig}}function Ug(r,t){r.uniform1fv(this.addr,t)}function Ng(r,t){const e=Nr(t,this.size,2);r.uniform2fv(this.addr,e)}function Og(r,t){const e=Nr(t,this.size,3);r.uniform3fv(this.addr,e)}function Bg(r,t){const e=Nr(t,this.size,4);r.uniform4fv(this.addr,e)}function zg(r,t){const e=Nr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function kg(r,t){const e=Nr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Vg(r,t){const e=Nr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Gg(r,t){r.uniform1iv(this.addr,t)}function Hg(r,t){r.uniform2iv(this.addr,t)}function Wg(r,t){r.uniform3iv(this.addr,t)}function Xg(r,t){r.uniform4iv(this.addr,t)}function qg(r,t){r.uniform1uiv(this.addr,t)}function Yg(r,t){r.uniform2uiv(this.addr,t)}function jg(r,t){r.uniform3uiv(this.addr,t)}function Kg(r,t){r.uniform4uiv(this.addr,t)}function $g(r,t,e){const n=this.cache,i=t.length,s=va(e,i);Ce(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=fl:a=Su;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function Zg(r,t,e){const n=this.cache,i=t.length,s=va(e,i);Ce(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Tu,s[a])}function Jg(r,t,e){const n=this.cache,i=t.length,s=va(e,i);Ce(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||bu,s[a])}function Qg(r,t,e){const n=this.cache,i=t.length,s=va(e,i);Ce(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||yu,s[a])}function t0(r){switch(r){case 5126:return Ug;case 35664:return Ng;case 35665:return Og;case 35666:return Bg;case 35674:return zg;case 35675:return kg;case 35676:return Vg;case 5124:case 35670:return Gg;case 35667:case 35671:return Hg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return qg;case 36294:return Yg;case 36295:return jg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return Qg}}class e0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fg(e.type)}}class n0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=t0(e.type)}}class i0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const ao=/(\w+)(\])?(\[|\.)?/g;function ch(r,t){r.seq.push(t),r.map[t.id]=t}function r0(r,t,e){const n=r.name,i=n.length;for(ao.lastIndex=0;;){const s=ao.exec(n),a=ao.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ch(e,l===void 0?new e0(o,r,t):new n0(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new i0(o),ch(e,u)),e=u}}}class Qs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);r0(o,c,this)}const i=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function hh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const s0=37297;let a0=0;function o0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const uh=new Lt;function l0(r){Yt._getMatrix(uh,Yt.workingColorSpace,r);const t=`mat3( ${uh.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(r)){case ra:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return Tt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function fh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+o0(r.getShaderSource(t),o)}else return s}function c0(r,t){const e=l0(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const h0={[Xh]:"Linear",[qh]:"Reinhard",[Yh]:"Cineon",[jh]:"ACESFilmic",[$h]:"AgX",[Zh]:"Neutral",[Kh]:"Custom"};function u0(r,t){const e=h0[t];return e===void 0?(Tt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qs=new L;function f0(){Yt.getLuminanceCoefficients(qs);const r=qs.x.toFixed(4),t=qs.y.toFixed(4),e=qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function p0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function m0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Kr(r){return r!==""}function dh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ph(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(r){return r.replace(_0,x0)}const g0=new Map;function x0(r,t){let e=It[t];if(e===void 0){const n=g0.get(t);if(n!==void 0)e=It[n],Tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return dl(e)}const v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(r){return r.replace(v0,M0)}function M0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function _h(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const S0={[js]:"SHADOWMAP_TYPE_PCF",[Yr]:"SHADOWMAP_TYPE_VSM"};function y0(r){return S0[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const T0={[ji]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE_UV"};function b0(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":T0[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const E0={[br]:"ENVMAP_MODE_REFRACTION"};function w0(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":E0[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const A0={[Wh]:"ENVMAP_BLENDING_MULTIPLY",[Qf]:"ENVMAP_BLENDING_MIX",[td]:"ENVMAP_BLENDING_ADD"};function R0(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":A0[r.combine]||"ENVMAP_BLENDING_NONE"}function C0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function P0(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=y0(e),l=b0(e),h=w0(e),u=R0(e),f=C0(e),d=d0(e),g=p0(s),_=i.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Kr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Kr).join(`
`),p.length>0&&(p+=`
`)):(m=[_h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),p=[_h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?It.tonemapping_pars_fragment:"",e.toneMapping!==Bn?u0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,c0("linearToOutputTexel",e.outputColorSpace),f0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kr).join(`
`)),a=dl(a),a=dh(a,e),a=ph(a,e),o=dl(o),o=dh(o,e),o=ph(o,e),a=mh(a),o=mh(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=M+m+a,y=M+p+o,E=hh(i,i.VERTEX_SHADER,b),A=hh(i,i.FRAGMENT_SHADER,y);i.attachShader(_,E),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(P){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_)||"",U=i.getShaderInfoLog(E)||"",H=i.getShaderInfoLog(A)||"",W=O.trim(),V=U.trim(),z=H.trim();let j=!0,ot=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,A);else{const et=fh(i,E,"vertex"),ct=fh(i,A,"fragment");Gt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+et+`
`+ct)}else W!==""?Tt("WebGLProgram: Program Info Log:",W):(V===""||z==="")&&(ot=!1);ot&&(P.diagnostics={runnable:j,programLog:W,vertexShader:{log:V,prefix:m},fragmentShader:{log:z,prefix:p}})}i.deleteShader(E),i.deleteShader(A),C=new Qs(i,_),x=m0(i,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,s0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=a0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let D0=0;class L0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new I0(t),e.set(t,n)),n}}class I0{constructor(t){this.id=D0++,this.code=t,this.usedTimes=0}}function F0(r,t,e,n,i,s,a){const o=new Bl,c=new L0,l=new Set,h=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,S,P,O,U){const H=O.fog,W=U.geometry,V=x.isMeshStandardMaterial?O.environment:null,z=(x.isMeshStandardMaterial?e:t).get(x.envMap||V),j=z&&z.mapping===ma?z.image.height:null,ot=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Tt("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const et=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ct=et!==void 0?et.length:0;let Rt=0;W.morphAttributes.position!==void 0&&(Rt=1),W.morphAttributes.normal!==void 0&&(Rt=2),W.morphAttributes.color!==void 0&&(Rt=3);let Pt,Wt,Xt,Y;if(ot){const te=Dn[ot];Pt=te.vertexShader,Wt=te.fragmentShader}else Pt=x.vertexShader,Wt=x.fragmentShader,c.update(x),Xt=c.getVertexShaderID(x),Y=c.getFragmentShaderID(x);const Z=r.getRenderTarget(),pt=r.state.buffers.depth.getReversed(),Dt=U.isInstancedMesh===!0,gt=U.isBatchedMesh===!0,jt=!!x.map,De=!!x.matcap,qt=!!z,Qt=!!x.aoMap,ae=!!x.lightMap,Ft=!!x.bumpMap,be=!!x.normalMap,D=!!x.displacementMap,Ee=!!x.emissiveMap,Zt=!!x.metalnessMap,he=!!x.roughnessMap,vt=x.anisotropy>0,R=x.clearcoat>0,v=x.dispersion>0,F=x.iridescence>0,q=x.sheen>0,$=x.transmission>0,X=vt&&!!x.anisotropyMap,St=R&&!!x.clearcoatMap,it=R&&!!x.clearcoatNormalMap,xt=R&&!!x.clearcoatRoughnessMap,At=F&&!!x.iridescenceMap,Q=F&&!!x.iridescenceThicknessMap,st=q&&!!x.sheenColorMap,_t=q&&!!x.sheenRoughnessMap,Mt=!!x.specularMap,rt=!!x.specularColorMap,Ut=!!x.specularIntensityMap,I=$&&!!x.transmissionMap,ut=$&&!!x.thicknessMap,tt=!!x.gradientMap,ft=!!x.alphaMap,J=x.alphaTest>0,K=!!x.alphaHash,nt=!!x.extensions;let Ct=Bn;x.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ct=r.toneMapping);const ue={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:Pt,fragmentShader:Wt,defines:x.defines,customVertexShaderID:Xt,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:gt,batchingColor:gt&&U._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&U.instanceColor!==null,instancingMorph:Dt&&U.morphTexture!==null,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:wr,alphaToCoverage:!!x.alphaToCoverage,map:jt,matcap:De,envMap:qt,envMapMode:qt&&z.mapping,envMapCubeUVHeight:j,aoMap:Qt,lightMap:ae,bumpMap:Ft,normalMap:be,displacementMap:D,emissiveMap:Ee,normalMapObjectSpace:be&&x.normalMapType===id,normalMapTangentSpace:be&&x.normalMapType===au,metalnessMap:Zt,roughnessMap:he,anisotropy:vt,anisotropyMap:X,clearcoat:R,clearcoatMap:St,clearcoatNormalMap:it,clearcoatRoughnessMap:xt,dispersion:v,iridescence:F,iridescenceMap:At,iridescenceThicknessMap:Q,sheen:q,sheenColorMap:st,sheenRoughnessMap:_t,specularMap:Mt,specularColorMap:rt,specularIntensityMap:Ut,transmission:$,transmissionMap:I,thicknessMap:ut,gradientMap:tt,opaque:x.transparent===!1&&x.blending===xr&&x.alphaToCoverage===!1,alphaMap:ft,alphaTest:J,alphaHash:K,combine:x.combine,mapUv:jt&&_(x.map.channel),aoMapUv:Qt&&_(x.aoMap.channel),lightMapUv:ae&&_(x.lightMap.channel),bumpMapUv:Ft&&_(x.bumpMap.channel),normalMapUv:be&&_(x.normalMap.channel),displacementMapUv:D&&_(x.displacementMap.channel),emissiveMapUv:Ee&&_(x.emissiveMap.channel),metalnessMapUv:Zt&&_(x.metalnessMap.channel),roughnessMapUv:he&&_(x.roughnessMap.channel),anisotropyMapUv:X&&_(x.anisotropyMap.channel),clearcoatMapUv:St&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:st&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(x.sheenRoughnessMap.channel),specularMapUv:Mt&&_(x.specularMap.channel),specularColorMapUv:rt&&_(x.specularColorMap.channel),specularIntensityMapUv:Ut&&_(x.specularIntensityMap.channel),transmissionMapUv:I&&_(x.transmissionMap.channel),thicknessMapUv:ut&&_(x.thicknessMap.channel),alphaMapUv:ft&&_(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(be||vt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(jt||ft),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pt,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Rt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ct,decodeVideoTexture:jt&&x.map.isVideoTexture===!0&&Yt.getTransfer(x.map.colorSpace)===ne,decodeVideoTextureEmissive:Ee&&x.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(x.emissiveMap.colorSpace)===ne,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ln,flipSided:x.side===$e,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ue.vertexUv1s=l.has(1),ue.vertexUv2s=l.has(2),ue.vertexUv3s=l.has(3),l.clear(),ue}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(M(S,x),b(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function M(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function b(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function y(x){const S=g[x.type];let P;if(S){const O=Dn[S];P=Dd.clone(O.uniforms)}else P=x.uniforms;return P}function E(x,S){let P=u.get(S);return P!==void 0?++P.usedTimes:(P=new P0(r,S,x,s),h.push(P),u.set(S,P)),P}function A(x){if(--x.usedTimes===0){const S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){c.remove(x)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:C}}function U0(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function N0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function gh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function xh(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,g,_,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||N0),n.length>1&&n.sort(f||gh),i.length>1&&i.sort(f||gh)}function h(){for(let u=t,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function O0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new xh,r.set(n,[a])):i>=s.length?(a=new xh,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function B0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ht};break;case"SpotLight":e={position:new L,direction:new L,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new L,halfWidth:new L,halfHeight:new L};break}return r[t.id]=e,e}}}function z0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let k0=0;function V0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function G0(r){const t=new B0,e=z0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,s=new se,a=new se;function o(l){let h=0,u=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,b=0,y=0,E=0,A=0,w=0;l.sort(V0);for(let x=0,S=l.length;x<S;x++){const P=l[x],O=P.color,U=P.intensity,H=P.distance;let W=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Er?W=P.shadow.map.texture:W=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*U,u+=O.g*U,f+=O.b*U;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],U);w++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,j=e.get(P);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=P.shadow.matrix,M++}n.directional[d]=V,d++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(O).multiplyScalar(U),V.distance=H,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const z=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,z.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=z.matrix,P.castShadow){const j=e.get(P);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=W,y++}_++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(O).multiplyScalar(U),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const z=P.shadow,j=e.get(P);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,j.shadowCameraNear=z.camera.near,j.shadowCameraFar=z.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(U),V.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==b||C.numSpotShadows!==y||C.numSpotMaps!==E||C.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=b,C.numSpotShadows=y,C.numSpotMaps=E,C.numLightProbes=w,n.version=k0++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const b=l[p];if(b.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(b.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function vh(r){const t=new G0(r),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function H0(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new vh(r),t.set(i,[o])):s>=a.length?(o=new vh(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const W0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X0=`uniform sampler2D shadow_pass;
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
}`,q0=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Y0=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Mh=new se,Xr=new L,oo=new L;function j0(r,t,e){let n=new zl;const i=new Vt,s=new Vt,a=new ve,o=new Zd,c=new Jd,l={},h=e.maxTextureSize,u={[kn]:$e,[$e]:kn,[Ln]:Ln},f=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:W0,fragmentShader:X0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ye(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let p=this.type;this.render=function(A,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===Ff&&(Tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=js);const x=r.getRenderTarget(),S=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),O=r.state;O.setBlending(ei),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=p!==this.type;U&&w.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(W=>W.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,W=A.length;H<W;H++){const V=A[H],z=V.shadow;if(z===void 0){Tt("WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const j=z.getFrameExtents();if(i.multiply(j),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/j.x),i.x=s.x*j.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/j.y),i.y=s.y*j.y,z.mapSize.y=s.y)),z.map===null||U===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Yr){if(V.isPointLight){Tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new zn(i.x,i.y,{format:Er,type:ii,minFilter:ke,magFilter:ke,generateMipmaps:!1}),z.map.texture.name=V.name+".shadowMap",z.map.depthTexture=new as(i.x,i.y,Un),z.map.depthTexture.name=V.name+".shadowMapDepth",z.map.depthTexture.format=ri,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Fe,z.map.depthTexture.magFilter=Fe}else{V.isPointLight?(z.map=new mu(i.x),z.map.depthTexture=new Hd(i.x,Vn)):(z.map=new zn(i.x,i.y),z.map.depthTexture=new as(i.x,i.y,Vn)),z.map.depthTexture.name=V.name+".shadowMap",z.map.depthTexture.format=ri;const et=r.state.buffers.depth.getReversed();this.type===js?(z.map.depthTexture.compareFunction=et?Nl:Ul,z.map.depthTexture.minFilter=ke,z.map.depthTexture.magFilter=ke):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Fe,z.map.depthTexture.magFilter=Fe)}z.camera.updateProjectionMatrix()}const ot=z.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<ot;et++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,et),r.clear();else{et===0&&(r.setRenderTarget(z.map),r.clear());const ct=z.getViewport(et);a.set(s.x*ct.x,s.y*ct.y,s.x*ct.z,s.y*ct.w),O.viewport(a)}if(V.isPointLight){const ct=z.camera,Rt=z.matrix,Pt=V.distance||ct.far;Pt!==ct.far&&(ct.far=Pt,ct.updateProjectionMatrix()),Xr.setFromMatrixPosition(V.matrixWorld),ct.position.copy(Xr),oo.copy(ct.position),oo.add(q0[et]),ct.up.copy(Y0[et]),ct.lookAt(oo),ct.updateMatrixWorld(),Rt.makeTranslation(-Xr.x,-Xr.y,-Xr.z),Mh.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Mh,ct.coordinateSystem,ct.reversedDepth)}else z.updateMatrices(V);n=z.getFrustum(),y(w,C,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===Yr&&M(z,C),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(x,S,P)};function M(A,w){const C=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zn(i.x,i.y,{format:Er,type:ii})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,C,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,C,d,_,null)}function b(A,w,C,x){let S=null;const P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=S.uuid,U=w.uuid;let H=l[O];H===void 0&&(H={},l[O]=H);let W=H[U];W===void 0&&(W=S.clone(),H[U]=W,w.addEventListener("dispose",E)),S=W}if(S.visible=w.visible,S.wireframe=w.wireframe,x===Yr?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=r.properties.get(S);O.light=C}return S}function y(A,w,C,x,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Yr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const U=t.update(A),H=A.material;if(Array.isArray(H)){const W=U.groups;for(let V=0,z=W.length;V<z;V++){const j=W[V],ot=H[j.materialIndex];if(ot&&ot.visible){const et=b(A,ot,x,S);A.onBeforeShadow(r,A,w,C,U,et,j),r.renderBufferDirect(C,null,U,et,A,j),A.onAfterShadow(r,A,w,C,U,et,j)}}}else if(H.visible){const W=b(A,H,x,S);A.onBeforeShadow(r,A,w,C,U,W,null),r.renderBufferDirect(C,null,U,W,A,null),A.onAfterShadow(r,A,w,C,U,W,null)}}const O=A.children;for(let U=0,H=O.length;U<H;U++)y(O[U],w,C,x,S)}function E(A){A.target.removeEventListener("dispose",E);for(const C in l){const x=l[C],S=A.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const K0={[Mo]:So,[yo]:Eo,[To]:wo,[Tr]:bo,[So]:Mo,[Eo]:yo,[wo]:To,[bo]:Tr};function $0(r,t){function e(){let I=!1;const ut=new ve;let tt=null;const ft=new ve(0,0,0,0);return{setMask:function(J){tt!==J&&!I&&(r.colorMask(J,J,J,J),tt=J)},setLocked:function(J){I=J},setClear:function(J,K,nt,Ct,ue){ue===!0&&(J*=Ct,K*=Ct,nt*=Ct),ut.set(J,K,nt,Ct),ft.equals(ut)===!1&&(r.clearColor(J,K,nt,Ct),ft.copy(ut))},reset:function(){I=!1,tt=null,ft.set(-1,0,0,0)}}}function n(){let I=!1,ut=!1,tt=null,ft=null,J=null;return{setReversed:function(K){if(ut!==K){const nt=t.get("EXT_clip_control");K?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),ut=K;const Ct=J;J=null,this.setClear(Ct)}},getReversed:function(){return ut},setTest:function(K){K?Z(r.DEPTH_TEST):pt(r.DEPTH_TEST)},setMask:function(K){tt!==K&&!I&&(r.depthMask(K),tt=K)},setFunc:function(K){if(ut&&(K=K0[K]),ft!==K){switch(K){case Mo:r.depthFunc(r.NEVER);break;case So:r.depthFunc(r.ALWAYS);break;case yo:r.depthFunc(r.LESS);break;case Tr:r.depthFunc(r.LEQUAL);break;case To:r.depthFunc(r.EQUAL);break;case bo:r.depthFunc(r.GEQUAL);break;case Eo:r.depthFunc(r.GREATER);break;case wo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ft=K}},setLocked:function(K){I=K},setClear:function(K){J!==K&&(ut&&(K=1-K),r.clearDepth(K),J=K)},reset:function(){I=!1,tt=null,ft=null,J=null,ut=!1}}}function i(){let I=!1,ut=null,tt=null,ft=null,J=null,K=null,nt=null,Ct=null,ue=null;return{setTest:function(te){I||(te?Z(r.STENCIL_TEST):pt(r.STENCIL_TEST))},setMask:function(te){ut!==te&&!I&&(r.stencilMask(te),ut=te)},setFunc:function(te,Rn,Xn){(tt!==te||ft!==Rn||J!==Xn)&&(r.stencilFunc(te,Rn,Xn),tt=te,ft=Rn,J=Xn)},setOp:function(te,Rn,Xn){(K!==te||nt!==Rn||Ct!==Xn)&&(r.stencilOp(te,Rn,Xn),K=te,nt=Rn,Ct=Xn)},setLocked:function(te){I=te},setClear:function(te){ue!==te&&(r.clearStencil(te),ue=te)},reset:function(){I=!1,ut=null,tt=null,ft=null,J=null,K=null,nt=null,Ct=null,ue=null}}}const s=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,b=null,y=null,E=null,A=null,w=new Ht(0,0,0),C=0,x=!1,S=null,P=null,O=null,U=null,H=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,z=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(j)[1]),V=z>=1):j.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),V=z>=2);let ot=null,et={};const ct=r.getParameter(r.SCISSOR_BOX),Rt=r.getParameter(r.VIEWPORT),Pt=new ve().fromArray(ct),Wt=new ve().fromArray(Rt);function Xt(I,ut,tt,ft){const J=new Uint8Array(4),K=r.createTexture();r.bindTexture(I,K),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let nt=0;nt<tt;nt++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,ft,0,r.RGBA,r.UNSIGNED_BYTE,J):r.texImage2D(ut+nt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,J);return K}const Y={};Y[r.TEXTURE_2D]=Xt(r.TEXTURE_2D,r.TEXTURE_2D,1),Y[r.TEXTURE_CUBE_MAP]=Xt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[r.TEXTURE_2D_ARRAY]=Xt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Y[r.TEXTURE_3D]=Xt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(r.DEPTH_TEST),a.setFunc(Tr),Ft(!1),be(mc),Z(r.CULL_FACE),Qt(ei);function Z(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function pt(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function Dt(I,ut){return u[I]!==ut?(r.bindFramebuffer(I,ut),u[I]=ut,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ut),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function gt(I,ut){let tt=d,ft=!1;if(I){tt=f.get(ut),tt===void 0&&(tt=[],f.set(ut,tt));const J=I.textures;if(tt.length!==J.length||tt[0]!==r.COLOR_ATTACHMENT0){for(let K=0,nt=J.length;K<nt;K++)tt[K]=r.COLOR_ATTACHMENT0+K;tt.length=J.length,ft=!0}}else tt[0]!==r.BACK&&(tt[0]=r.BACK,ft=!0);ft&&r.drawBuffers(tt)}function jt(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const De={[zi]:r.FUNC_ADD,[Nf]:r.FUNC_SUBTRACT,[Of]:r.FUNC_REVERSE_SUBTRACT};De[Bf]=r.MIN,De[zf]=r.MAX;const qt={[kf]:r.ZERO,[Vf]:r.ONE,[Gf]:r.SRC_COLOR,[xo]:r.SRC_ALPHA,[jf]:r.SRC_ALPHA_SATURATE,[qf]:r.DST_COLOR,[Wf]:r.DST_ALPHA,[Hf]:r.ONE_MINUS_SRC_COLOR,[vo]:r.ONE_MINUS_SRC_ALPHA,[Yf]:r.ONE_MINUS_DST_COLOR,[Xf]:r.ONE_MINUS_DST_ALPHA,[Kf]:r.CONSTANT_COLOR,[$f]:r.ONE_MINUS_CONSTANT_COLOR,[Zf]:r.CONSTANT_ALPHA,[Jf]:r.ONE_MINUS_CONSTANT_ALPHA};function Qt(I,ut,tt,ft,J,K,nt,Ct,ue,te){if(I===ei){_===!0&&(pt(r.BLEND),_=!1);return}if(_===!1&&(Z(r.BLEND),_=!0),I!==Uf){if(I!==m||te!==x){if((p!==zi||y!==zi)&&(r.blendEquation(r.FUNC_ADD),p=zi,y=zi),te)switch(I){case xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ie:r.blendFunc(r.ONE,r.ONE);break;case _c:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Gt("WebGLState: Invalid blending: ",I);break}else switch(I){case xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ie:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case _c:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gc:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",I);break}M=null,b=null,E=null,A=null,w.set(0,0,0),C=0,m=I,x=te}return}J=J||ut,K=K||tt,nt=nt||ft,(ut!==p||J!==y)&&(r.blendEquationSeparate(De[ut],De[J]),p=ut,y=J),(tt!==M||ft!==b||K!==E||nt!==A)&&(r.blendFuncSeparate(qt[tt],qt[ft],qt[K],qt[nt]),M=tt,b=ft,E=K,A=nt),(Ct.equals(w)===!1||ue!==C)&&(r.blendColor(Ct.r,Ct.g,Ct.b,ue),w.copy(Ct),C=ue),m=I,x=!1}function ae(I,ut){I.side===Ln?pt(r.CULL_FACE):Z(r.CULL_FACE);let tt=I.side===$e;ut&&(tt=!tt),Ft(tt),I.blending===xr&&I.transparent===!1?Qt(ei):Qt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ft=I.stencilWrite;o.setTest(ft),ft&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ee(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(I){S!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),S=I)}function be(I){I!==Lf?(Z(r.CULL_FACE),I!==P&&(I===mc?r.cullFace(r.BACK):I===If?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pt(r.CULL_FACE),P=I}function D(I){I!==O&&(V&&r.lineWidth(I),O=I)}function Ee(I,ut,tt){I?(Z(r.POLYGON_OFFSET_FILL),(U!==ut||H!==tt)&&(r.polygonOffset(ut,tt),U=ut,H=tt)):pt(r.POLYGON_OFFSET_FILL)}function Zt(I){I?Z(r.SCISSOR_TEST):pt(r.SCISSOR_TEST)}function he(I){I===void 0&&(I=r.TEXTURE0+W-1),ot!==I&&(r.activeTexture(I),ot=I)}function vt(I,ut,tt){tt===void 0&&(ot===null?tt=r.TEXTURE0+W-1:tt=ot);let ft=et[tt];ft===void 0&&(ft={type:void 0,texture:void 0},et[tt]=ft),(ft.type!==I||ft.texture!==ut)&&(ot!==tt&&(r.activeTexture(tt),ot=tt),r.bindTexture(I,ut||Y[I]),ft.type=I,ft.texture=ut)}function R(){const I=et[ot];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(I){Gt("WebGLState:",I)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(I){Gt("WebGLState:",I)}}function q(){try{r.texSubImage2D(...arguments)}catch(I){Gt("WebGLState:",I)}}function $(){try{r.texSubImage3D(...arguments)}catch(I){Gt("WebGLState:",I)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(I){Gt("WebGLState:",I)}}function St(){try{r.compressedTexSubImage3D(...arguments)}catch(I){Gt("WebGLState:",I)}}function it(){try{r.texStorage2D(...arguments)}catch(I){Gt("WebGLState:",I)}}function xt(){try{r.texStorage3D(...arguments)}catch(I){Gt("WebGLState:",I)}}function At(){try{r.texImage2D(...arguments)}catch(I){Gt("WebGLState:",I)}}function Q(){try{r.texImage3D(...arguments)}catch(I){Gt("WebGLState:",I)}}function st(I){Pt.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Pt.copy(I))}function _t(I){Wt.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Wt.copy(I))}function Mt(I,ut){let tt=l.get(ut);tt===void 0&&(tt=new WeakMap,l.set(ut,tt));let ft=tt.get(I);ft===void 0&&(ft=r.getUniformBlockIndex(ut,I.name),tt.set(I,ft))}function rt(I,ut){const ft=l.get(ut).get(I);c.get(ut)!==ft&&(r.uniformBlockBinding(ut,ft,I.__bindingPointIndex),c.set(ut,ft))}function Ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ot=null,et={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,b=null,y=null,E=null,A=null,w=new Ht(0,0,0),C=0,x=!1,S=null,P=null,O=null,U=null,H=null,Pt.set(0,0,r.canvas.width,r.canvas.height),Wt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:pt,bindFramebuffer:Dt,drawBuffers:gt,useProgram:jt,setBlending:Qt,setMaterial:ae,setFlipSided:Ft,setCullFace:be,setLineWidth:D,setPolygonOffset:Ee,setScissorTest:Zt,activeTexture:he,bindTexture:vt,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:At,texImage3D:Q,updateUBOMapping:Mt,uniformBlockBinding:rt,texStorage2D:it,texStorage3D:xt,texSubImage2D:q,texSubImage3D:$,compressedTexSubImage2D:X,compressedTexSubImage3D:St,scissor:st,viewport:_t,reset:Ut}}function Z0(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Vt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return d?new OffscreenCanvas(R,v):rs("canvas")}function _(R,v,F){let q=1;const $=vt(R);if(($.width>F||$.height>F)&&(q=F/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(q*$.width),St=Math.floor(q*$.height);u===void 0&&(u=g(X,St));const it=v?g(X,St):u;return it.width=X,it.height=St,it.getContext("2d").drawImage(R,0,0,X,St),Tt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+St+")."),it}else return"data"in R&&Tt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(R,v,F,q,$=!1){if(R!==null){if(r[R]!==void 0)return r[R];Tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=v;if(v===r.RED&&(F===r.FLOAT&&(X=r.R32F),F===r.HALF_FLOAT&&(X=r.R16F),F===r.UNSIGNED_BYTE&&(X=r.R8)),v===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.R8UI),F===r.UNSIGNED_SHORT&&(X=r.R16UI),F===r.UNSIGNED_INT&&(X=r.R32UI),F===r.BYTE&&(X=r.R8I),F===r.SHORT&&(X=r.R16I),F===r.INT&&(X=r.R32I)),v===r.RG&&(F===r.FLOAT&&(X=r.RG32F),F===r.HALF_FLOAT&&(X=r.RG16F),F===r.UNSIGNED_BYTE&&(X=r.RG8)),v===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RG8UI),F===r.UNSIGNED_SHORT&&(X=r.RG16UI),F===r.UNSIGNED_INT&&(X=r.RG32UI),F===r.BYTE&&(X=r.RG8I),F===r.SHORT&&(X=r.RG16I),F===r.INT&&(X=r.RG32I)),v===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RGB8UI),F===r.UNSIGNED_SHORT&&(X=r.RGB16UI),F===r.UNSIGNED_INT&&(X=r.RGB32UI),F===r.BYTE&&(X=r.RGB8I),F===r.SHORT&&(X=r.RGB16I),F===r.INT&&(X=r.RGB32I)),v===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),F===r.UNSIGNED_INT&&(X=r.RGBA32UI),F===r.BYTE&&(X=r.RGBA8I),F===r.SHORT&&(X=r.RGBA16I),F===r.INT&&(X=r.RGBA32I)),v===r.RGB&&(F===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),v===r.RGBA){const St=$?ra:Yt.getTransfer(q);F===r.FLOAT&&(X=r.RGBA32F),F===r.HALF_FLOAT&&(X=r.RGBA16F),F===r.UNSIGNED_BYTE&&(X=St===ne?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function y(R,v){let F;return R?v===null||v===Vn||v===is?F=r.DEPTH24_STENCIL8:v===Un?F=r.DEPTH32F_STENCIL8:v===ns&&(F=r.DEPTH24_STENCIL8,Tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Vn||v===is?F=r.DEPTH_COMPONENT24:v===Un?F=r.DEPTH_COMPONENT32F:v===ns&&(F=r.DEPTH_COMPONENT16),F}function E(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Fe&&R.minFilter!==ke?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){const v=R.target;v.removeEventListener("dispose",A),C(v),v.isVideoTexture&&h.delete(v)}function w(R){const v=R.target;v.removeEventListener("dispose",w),S(v)}function C(R){const v=n.get(R);if(v.__webglInit===void 0)return;const F=R.source,q=f.get(F);if(q){const $=q[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&x(R),Object.keys(q).length===0&&f.delete(F)}n.remove(R)}function x(R){const v=n.get(R);r.deleteTexture(v.__webglTexture);const F=R.source,q=f.get(F);delete q[v.__cacheKey],a.memory.textures--}function S(R){const v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let $=0;$<v.__webglFramebuffer[q].length;$++)r.deleteFramebuffer(v.__webglFramebuffer[q][$]);else r.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)r.deleteFramebuffer(v.__webglFramebuffer[q]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=R.textures;for(let q=0,$=F.length;q<$;q++){const X=n.get(F[q]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[q])}n.remove(R)}let P=0;function O(){P=0}function U(){const R=P;return R>=i.maxTextures&&Tt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function H(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function W(R,v){const F=n.get(R);if(R.isVideoTexture&&Zt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const q=R.image;if(q===null)Tt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Tt("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,R,v);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+v)}function V(R,v){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){Y(F,R,v);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+v)}function z(R,v){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){Y(F,R,v);return}e.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+v)}function j(R,v){const F=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){Z(F,R,v);return}e.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+v)}const ot={[Co]:r.REPEAT,[ti]:r.CLAMP_TO_EDGE,[Po]:r.MIRRORED_REPEAT},et={[Fe]:r.NEAREST,[ed]:r.NEAREST_MIPMAP_NEAREST,[ys]:r.NEAREST_MIPMAP_LINEAR,[ke]:r.LINEAR,[wa]:r.LINEAR_MIPMAP_NEAREST,[Vi]:r.LINEAR_MIPMAP_LINEAR},ct={[rd]:r.NEVER,[cd]:r.ALWAYS,[sd]:r.LESS,[Ul]:r.LEQUAL,[ad]:r.EQUAL,[Nl]:r.GEQUAL,[od]:r.GREATER,[ld]:r.NOTEQUAL};function Rt(R,v){if(v.type===Un&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ke||v.magFilter===wa||v.magFilter===ys||v.magFilter===Vi||v.minFilter===ke||v.minFilter===wa||v.minFilter===ys||v.minFilter===Vi)&&Tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ot[v.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ot[v.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ot[v.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,et[v.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,et[v.minFilter]),v.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ct[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Fe||v.minFilter!==ys&&v.minFilter!==Vi||v.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Pt(R,v){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));const q=v.source;let $=f.get(q);$===void 0&&($={},f.set(q,$));const X=H(v);if(X!==R.__cacheKey){$[X]===void 0&&($[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),$[X].usedTimes++;const St=$[R.__cacheKey];St!==void 0&&($[R.__cacheKey].usedTimes--,St.usedTimes===0&&x(v)),R.__cacheKey=X,R.__webglTexture=$[X].texture}return F}function Wt(R,v,F){return Math.floor(Math.floor(R/F)/v)}function Xt(R,v,F,q){const X=R.updateRanges;if(X.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,F,q,v.data);else{X.sort((Q,st)=>Q.start-st.start);let St=0;for(let Q=1;Q<X.length;Q++){const st=X[St],_t=X[Q],Mt=st.start+st.count,rt=Wt(_t.start,v.width,4),Ut=Wt(st.start,v.width,4);_t.start<=Mt+1&&rt===Ut&&Wt(_t.start+_t.count-1,v.width,4)===rt?st.count=Math.max(st.count,_t.start+_t.count-st.start):(++St,X[St]=_t)}X.length=St+1;const it=r.getParameter(r.UNPACK_ROW_LENGTH),xt=r.getParameter(r.UNPACK_SKIP_PIXELS),At=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Q=0,st=X.length;Q<st;Q++){const _t=X[Q],Mt=Math.floor(_t.start/4),rt=Math.ceil(_t.count/4),Ut=Mt%v.width,I=Math.floor(Mt/v.width),ut=rt,tt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ut),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),e.texSubImage2D(r.TEXTURE_2D,0,Ut,I,ut,tt,F,q,v.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,it),r.pixelStorei(r.UNPACK_SKIP_PIXELS,xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,At)}}function Y(R,v,F){let q=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=r.TEXTURE_3D);const $=Pt(R,v),X=v.source;e.bindTexture(q,R.__webglTexture,r.TEXTURE0+F);const St=n.get(X);if(X.version!==St.__version||$===!0){e.activeTexture(r.TEXTURE0+F);const it=Yt.getPrimaries(Yt.workingColorSpace),xt=v.colorSpace===di?null:Yt.getPrimaries(v.colorSpace),At=v.colorSpace===di||it===xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Q=_(v.image,!1,i.maxTextureSize);Q=he(v,Q);const st=s.convert(v.format,v.colorSpace),_t=s.convert(v.type);let Mt=b(v.internalFormat,st,_t,v.colorSpace,v.isVideoTexture);Rt(q,v);let rt;const Ut=v.mipmaps,I=v.isVideoTexture!==!0,ut=St.__version===void 0||$===!0,tt=X.dataReady,ft=E(v,Q);if(v.isDepthTexture)Mt=y(v.format===Gi,v.type),ut&&(I?e.texStorage2D(r.TEXTURE_2D,1,Mt,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,Mt,Q.width,Q.height,0,st,_t,null));else if(v.isDataTexture)if(Ut.length>0){I&&ut&&e.texStorage2D(r.TEXTURE_2D,ft,Mt,Ut[0].width,Ut[0].height);for(let J=0,K=Ut.length;J<K;J++)rt=Ut[J],I?tt&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,rt.width,rt.height,st,_t,rt.data):e.texImage2D(r.TEXTURE_2D,J,Mt,rt.width,rt.height,0,st,_t,rt.data);v.generateMipmaps=!1}else I?(ut&&e.texStorage2D(r.TEXTURE_2D,ft,Mt,Q.width,Q.height),tt&&Xt(v,Q,st,_t)):e.texImage2D(r.TEXTURE_2D,0,Mt,Q.width,Q.height,0,st,_t,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,Mt,Ut[0].width,Ut[0].height,Q.depth);for(let J=0,K=Ut.length;J<K;J++)if(rt=Ut[J],v.format!==An)if(st!==null)if(I){if(tt)if(v.layerUpdates.size>0){const nt=Zc(rt.width,rt.height,v.format,v.type);for(const Ct of v.layerUpdates){const ue=rt.data.subarray(Ct*nt/rt.data.BYTES_PER_ELEMENT,(Ct+1)*nt/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,Ct,rt.width,rt.height,1,st,ue)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,rt.width,rt.height,Q.depth,st,rt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,Mt,rt.width,rt.height,Q.depth,0,rt.data,0,0);else Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?tt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,rt.width,rt.height,Q.depth,st,_t,rt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,J,Mt,rt.width,rt.height,Q.depth,0,st,_t,rt.data)}else{I&&ut&&e.texStorage2D(r.TEXTURE_2D,ft,Mt,Ut[0].width,Ut[0].height);for(let J=0,K=Ut.length;J<K;J++)rt=Ut[J],v.format!==An?st!==null?I?tt&&e.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,rt.width,rt.height,st,rt.data):e.compressedTexImage2D(r.TEXTURE_2D,J,Mt,rt.width,rt.height,0,rt.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?tt&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,rt.width,rt.height,st,_t,rt.data):e.texImage2D(r.TEXTURE_2D,J,Mt,rt.width,rt.height,0,st,_t,rt.data)}else if(v.isDataArrayTexture)if(I){if(ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,Mt,Q.width,Q.height,Q.depth),tt)if(v.layerUpdates.size>0){const J=Zc(Q.width,Q.height,v.format,v.type);for(const K of v.layerUpdates){const nt=Q.data.subarray(K*J/Q.data.BYTES_PER_ELEMENT,(K+1)*J/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,st,_t,nt)}v.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,st,_t,Q.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Mt,Q.width,Q.height,Q.depth,0,st,_t,Q.data);else if(v.isData3DTexture)I?(ut&&e.texStorage3D(r.TEXTURE_3D,ft,Mt,Q.width,Q.height,Q.depth),tt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,st,_t,Q.data)):e.texImage3D(r.TEXTURE_3D,0,Mt,Q.width,Q.height,Q.depth,0,st,_t,Q.data);else if(v.isFramebufferTexture){if(ut)if(I)e.texStorage2D(r.TEXTURE_2D,ft,Mt,Q.width,Q.height);else{let J=Q.width,K=Q.height;for(let nt=0;nt<ft;nt++)e.texImage2D(r.TEXTURE_2D,nt,Mt,J,K,0,st,_t,null),J>>=1,K>>=1}}else if(Ut.length>0){if(I&&ut){const J=vt(Ut[0]);e.texStorage2D(r.TEXTURE_2D,ft,Mt,J.width,J.height)}for(let J=0,K=Ut.length;J<K;J++)rt=Ut[J],I?tt&&e.texSubImage2D(r.TEXTURE_2D,J,0,0,st,_t,rt):e.texImage2D(r.TEXTURE_2D,J,Mt,st,_t,rt);v.generateMipmaps=!1}else if(I){if(ut){const J=vt(Q);e.texStorage2D(r.TEXTURE_2D,ft,Mt,J.width,J.height)}tt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,st,_t,Q)}else e.texImage2D(r.TEXTURE_2D,0,Mt,st,_t,Q);m(v)&&p(q),St.__version=X.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Z(R,v,F){if(v.image.length!==6)return;const q=Pt(R,v),$=v.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+F);const X=n.get($);if($.version!==X.__version||q===!0){e.activeTexture(r.TEXTURE0+F);const St=Yt.getPrimaries(Yt.workingColorSpace),it=v.colorSpace===di?null:Yt.getPrimaries(v.colorSpace),xt=v.colorSpace===di||St===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const At=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,st=[];for(let K=0;K<6;K++)!At&&!Q?st[K]=_(v.image[K],!0,i.maxCubemapSize):st[K]=Q?v.image[K].image:v.image[K],st[K]=he(v,st[K]);const _t=st[0],Mt=s.convert(v.format,v.colorSpace),rt=s.convert(v.type),Ut=b(v.internalFormat,Mt,rt,v.colorSpace),I=v.isVideoTexture!==!0,ut=X.__version===void 0||q===!0,tt=$.dataReady;let ft=E(v,_t);Rt(r.TEXTURE_CUBE_MAP,v);let J;if(At){I&&ut&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Ut,_t.width,_t.height);for(let K=0;K<6;K++){J=st[K].mipmaps;for(let nt=0;nt<J.length;nt++){const Ct=J[nt];v.format!==An?Mt!==null?I?tt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,0,0,Ct.width,Ct.height,Mt,Ct.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,Ut,Ct.width,Ct.height,0,Ct.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,0,0,Ct.width,Ct.height,Mt,rt,Ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,Ut,Ct.width,Ct.height,0,Mt,rt,Ct.data)}}}else{if(J=v.mipmaps,I&&ut){J.length>0&&ft++;const K=vt(st[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Ut,K.width,K.height)}for(let K=0;K<6;K++)if(Q){I?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,st[K].width,st[K].height,Mt,rt,st[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ut,st[K].width,st[K].height,0,Mt,rt,st[K].data);for(let nt=0;nt<J.length;nt++){const ue=J[nt].image[K].image;I?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,0,0,ue.width,ue.height,Mt,rt,ue.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,Ut,ue.width,ue.height,0,Mt,rt,ue.data)}}else{I?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Mt,rt,st[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ut,Mt,rt,st[K]);for(let nt=0;nt<J.length;nt++){const Ct=J[nt];I?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,0,0,Mt,rt,Ct.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,Ut,Mt,rt,Ct.image[K])}}}m(v)&&p(r.TEXTURE_CUBE_MAP),X.__version=$.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function pt(R,v,F,q,$,X){const St=s.convert(F.format,F.colorSpace),it=s.convert(F.type),xt=b(F.internalFormat,St,it,F.colorSpace),At=n.get(v),Q=n.get(F);if(Q.__renderTarget=v,!At.__hasExternalTextures){const st=Math.max(1,v.width>>X),_t=Math.max(1,v.height>>X);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?e.texImage3D($,X,xt,st,_t,v.depth,0,St,it,null):e.texImage2D($,X,xt,st,_t,0,St,it,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Ee(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,$,Q.__webglTexture,0,D(v)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,$,Q.__webglTexture,X),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(R,v,F){if(r.bindRenderbuffer(r.RENDERBUFFER,R),v.depthBuffer){const q=v.depthTexture,$=q&&q.isDepthTexture?q.type:null,X=y(v.stencilBuffer,$),St=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ee(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D(v),X,v.width,v.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,D(v),X,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,X,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,R)}else{const q=v.textures;for(let $=0;$<q.length;$++){const X=q[$],St=s.convert(X.format,X.colorSpace),it=s.convert(X.type),xt=b(X.internalFormat,St,it,X.colorSpace);Ee(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D(v),xt,v.width,v.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,D(v),xt,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,xt,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function gt(R,v,F){const q=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Rt(r.TEXTURE_CUBE_MAP,v.depthTexture);const At=s.convert(v.depthTexture.format),Q=s.convert(v.depthTexture.type);let st;v.depthTexture.format===ri?st=r.DEPTH_COMPONENT24:v.depthTexture.format===Gi&&(st=r.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,st,v.width,v.height,0,At,Q,null)}}else W(v.depthTexture,0);const X=$.__webglTexture,St=D(v),it=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+F:r.TEXTURE_2D,xt=v.depthTexture.format===Gi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===ri)Ee(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xt,it,X,0,St):r.framebufferTexture2D(r.FRAMEBUFFER,xt,it,X,0);else if(v.depthTexture.format===Gi)Ee(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xt,it,X,0,St):r.framebufferTexture2D(r.FRAMEBUFFER,xt,it,X,0);else throw new Error("Unknown depthTexture format")}function jt(R){const v=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=q}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let q=0;q<6;q++)gt(v.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?gt(v.__webglFramebuffer[0],R,0):gt(v.__webglFramebuffer,R,0)}else if(F){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=r.createRenderbuffer(),Dt(v.__webglDepthbuffer[q],R,!1);else{const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,X)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Dt(v.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,X)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function De(R,v,F){const q=n.get(R);v!==void 0&&pt(q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&jt(R)}function qt(R){const v=R.texture,F=n.get(R),q=n.get(v);R.addEventListener("dispose",w);const $=R.textures,X=R.isWebGLCubeRenderTarget===!0,St=$.length>1;if(St||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=v.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let it=0;it<6;it++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[it]=[];for(let xt=0;xt<v.mipmaps.length;xt++)F.__webglFramebuffer[it][xt]=r.createFramebuffer()}else F.__webglFramebuffer[it]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let it=0;it<v.mipmaps.length;it++)F.__webglFramebuffer[it]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(St)for(let it=0,xt=$.length;it<xt;it++){const At=n.get($[it]);At.__webglTexture===void 0&&(At.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Ee(R)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let it=0;it<$.length;it++){const xt=$[it];F.__webglColorRenderbuffer[it]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[it]);const At=s.convert(xt.format,xt.colorSpace),Q=s.convert(xt.type),st=b(xt.internalFormat,At,Q,xt.colorSpace,R.isXRRenderTarget===!0),_t=D(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,_t,st,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,F.__webglColorRenderbuffer[it])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Dt(F.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Rt(r.TEXTURE_CUBE_MAP,v);for(let it=0;it<6;it++)if(v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)pt(F.__webglFramebuffer[it][xt],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,xt);else pt(F.__webglFramebuffer[it],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(v)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let it=0,xt=$.length;it<xt;it++){const At=$[it],Q=n.get(At);let st=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(st,Q.__webglTexture),Rt(st,At),pt(F.__webglFramebuffer,R,At,r.COLOR_ATTACHMENT0+it,st,0),m(At)&&p(st)}e.unbindTexture()}else{let it=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(it=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(it,q.__webglTexture),Rt(it,v),v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)pt(F.__webglFramebuffer[xt],R,v,r.COLOR_ATTACHMENT0,it,xt);else pt(F.__webglFramebuffer,R,v,r.COLOR_ATTACHMENT0,it,0);m(v)&&p(it),e.unbindTexture()}R.depthBuffer&&jt(R)}function Qt(R){const v=R.textures;for(let F=0,q=v.length;F<q;F++){const $=v[F];if(m($)){const X=M(R),St=n.get($).__webglTexture;e.bindTexture(X,St),p(X),e.unbindTexture()}}}const ae=[],Ft=[];function be(R){if(R.samples>0){if(Ee(R)===!1){const v=R.textures,F=R.width,q=R.height;let $=r.COLOR_BUFFER_BIT;const X=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=n.get(R),it=v.length>1;if(it)for(let At=0;At<v.length;At++)e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const xt=R.texture.mipmaps;xt&&xt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let At=0;At<v.length;At++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),it){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,St.__webglColorRenderbuffer[At]);const Q=n.get(v[At]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,F,q,0,0,F,q,$,r.NEAREST),c===!0&&(ae.length=0,Ft.length=0,ae.push(r.COLOR_ATTACHMENT0+At),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ae.push(X),Ft.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ft)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),it)for(let At=0;At<v.length;At++){e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,St.__webglColorRenderbuffer[At]);const Q=n.get(v[At]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,Q,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const v=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function D(R){return Math.min(i.maxSamples,R.samples)}function Ee(R){const v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Zt(R){const v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function he(R,v){const F=R.colorSpace,q=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==wr&&F!==di&&(Yt.getTransfer(F)===ne?(q!==An||$!==hn)&&Tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",F)),v}function vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=z,this.setTextureCube=j,this.rebindTextures=De,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Ee,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function J0(r,t){function e(n,i=di){let s;const a=Yt.getTransfer(i);if(n===hn)return r.UNSIGNED_BYTE;if(n===Pl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===eu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===nu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qh)return r.BYTE;if(n===tu)return r.SHORT;if(n===ns)return r.UNSIGNED_SHORT;if(n===Cl)return r.INT;if(n===Vn)return r.UNSIGNED_INT;if(n===Un)return r.FLOAT;if(n===ii)return r.HALF_FLOAT;if(n===iu)return r.ALPHA;if(n===ru)return r.RGB;if(n===An)return r.RGBA;if(n===ri)return r.DEPTH_COMPONENT;if(n===Gi)return r.DEPTH_STENCIL;if(n===su)return r.RED;if(n===Ll)return r.RED_INTEGER;if(n===Er)return r.RG;if(n===Il)return r.RG_INTEGER;if(n===Fl)return r.RGBA_INTEGER;if(n===Ks||n===$s||n===Zs||n===Js)if(a===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ks)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ks)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===Lo||n===Io||n===Fo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Do)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uo||n===No||n===Oo||n===Bo||n===zo||n===ko||n===Vo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Uo||n===No)return a===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Oo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Bo)return s.COMPRESSED_R11_EAC;if(n===zo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ko)return s.COMPRESSED_RG11_EAC;if(n===Vo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Go||n===Ho||n===Wo||n===Xo||n===qo||n===Yo||n===jo||n===Ko||n===$o||n===Zo||n===Jo||n===Qo||n===tl||n===el)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Go)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ho)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ko)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$o)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qo)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return a===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nl||n===il||n===rl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===nl)return a===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sl||n===al||n===ol||n===ll)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===sl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===al)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const Q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tx=`
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

}`;class ex{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new _u(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Jt({vertexShader:Q0,fragmentShader:tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new ga(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nx extends Fr{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new ex,p={},M=e.getContextAttributes();let b=null,y=null;const E=[],A=[],w=new Vt;let C=null;const x=new ln;x.viewport=new ve;const S=new ln;S.viewport=new ve;const P=[x,S],O=new cp;let U=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=E[Y];return Z===void 0&&(Z=new Ka,E[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=E[Y];return Z===void 0&&(Z=new Ka,E[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=E[Y];return Z===void 0&&(Z=new Ka,E[Y]=Z),Z.getHandSpace()};function W(Y){const Z=A.indexOf(Y.inputSource);if(Z===-1)return;const pt=E[Z];pt!==void 0&&(pt.update(Y.inputSource,Y.frame,l||a),pt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",z);for(let Y=0;Y<E.length;Y++){const Z=A[Y];Z!==null&&(A[Y]=null,E[Y].disconnect(Z))}U=null,H=null,m.reset();for(const Y in p)delete p[Y];t.setRenderTarget(b),d=null,f=null,u=null,i=null,y=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",V),i.addEventListener("inputsourceschange",z),M.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Dt=null,gt=null;M.depth&&(gt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=M.stencil?Gi:ri,Dt=M.stencil?is:Vn);const jt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(jt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new zn(f.textureWidth,f.textureHeight,{format:An,type:hn,depthTexture:new as(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const pt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,pt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new zn(d.framebufferWidth,d.framebufferHeight,{format:An,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(Y){for(let Z=0;Z<Y.removed.length;Z++){const pt=Y.removed[Z],Dt=A.indexOf(pt);Dt>=0&&(A[Dt]=null,E[Dt].disconnect(pt))}for(let Z=0;Z<Y.added.length;Z++){const pt=Y.added[Z];let Dt=A.indexOf(pt);if(Dt===-1){for(let jt=0;jt<E.length;jt++)if(jt>=A.length){A.push(pt),Dt=jt;break}else if(A[jt]===null){A[jt]=pt,Dt=jt;break}if(Dt===-1)break}const gt=E[Dt];gt&&gt.connect(pt)}}const j=new L,ot=new L;function et(Y,Z,pt){j.setFromMatrixPosition(Z.matrixWorld),ot.setFromMatrixPosition(pt.matrixWorld);const Dt=j.distanceTo(ot),gt=Z.projectionMatrix.elements,jt=pt.projectionMatrix.elements,De=gt[14]/(gt[10]-1),qt=gt[14]/(gt[10]+1),Qt=(gt[9]+1)/gt[5],ae=(gt[9]-1)/gt[5],Ft=(gt[8]-1)/gt[0],be=(jt[8]+1)/jt[0],D=De*Ft,Ee=De*be,Zt=Dt/(-Ft+be),he=Zt*-Ft;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(he),Y.translateZ(Zt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),gt[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const vt=De+Zt,R=qt+Zt,v=D-he,F=Ee+(Dt-he),q=Qt*qt/R*vt,$=ae*qt/R*vt;Y.projectionMatrix.makePerspective(v,F,q,$,vt,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ct(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Z=Y.near,pt=Y.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),O.near=S.near=x.near=Z,O.far=S.far=x.far=pt,(U!==O.near||H!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),U=O.near,H=O.far),O.layers.mask=Y.layers.mask|6,x.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;const Dt=Y.parent,gt=O.cameras;ct(O,Dt);for(let jt=0;jt<gt.length;jt++)ct(gt[jt],Dt);gt.length===2?et(O,x,S):O.projectionMatrix.copy(x.projectionMatrix),Rt(Y,O,Dt)};function Rt(Y,Z,pt){pt===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(pt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=cl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Y){return p[Y]};let Pt=null;function Wt(Y,Z){if(h=Z.getViewerPose(l||a),g=Z,h!==null){const pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Dt=!1;pt.length!==O.cameras.length&&(O.cameras.length=0,Dt=!0);for(let qt=0;qt<pt.length;qt++){const Qt=pt[qt];let ae=null;if(d!==null)ae=d.getViewport(Qt);else{const be=u.getViewSubImage(f,Qt);ae=be.viewport,qt===0&&(t.setRenderTargetTextures(y,be.colorTexture,be.depthStencilTexture),t.setRenderTarget(y))}let Ft=P[qt];Ft===void 0&&(Ft=new ln,Ft.layers.enable(qt),Ft.viewport=new ve,P[qt]=Ft),Ft.matrix.fromArray(Qt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Qt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(ae.x,ae.y,ae.width,ae.height),qt===0&&(O.matrix.copy(Ft.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Dt===!0&&O.cameras.push(Ft)}const gt=i.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const qt=u.getDepthInformation(pt[0]);qt&&qt.isValid&&qt.texture&&m.init(qt,i.renderState)}if(gt&&gt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let qt=0;qt<pt.length;qt++){const Qt=pt[qt].camera;if(Qt){let ae=p[Qt];ae||(ae=new _u,p[Qt]=ae);const Ft=u.getCameraImage(Qt);ae.sourceTexture=Ft}}}}for(let pt=0;pt<E.length;pt++){const Dt=A[pt],gt=E[pt];Dt!==null&&gt!==void 0&&gt.update(Dt,Z,l||a)}Pt&&Pt(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Xt=new Mu;Xt.setAnimationLoop(Wt),this.setAnimationLoop=function(Y){Pt=Y},this.dispose=function(){}}}const Fi=new Gn,ix=new se;function rx(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),b=M.envMap,y=M.envMapRotation;b&&(m.envMap.value=b,Fi.copy(y),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(ix.makeRotationFromEuler(Fi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sx(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){const y=b.program;n.uniformBlockBinding(M,y)}function l(M,b){let y=i[M.id];y===void 0&&(g(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",m));const E=b.program;n.updateUBOMapping(M,E);const A=t.render.frame;s[M.id]!==A&&(f(M),s[M.id]=A)}function h(M){const b=u();M.__bindingPointIndex=b;const y=r.createBuffer(),E=M.__size,A=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,E,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const b=i[M.id],y=M.uniforms,E=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let A=0,w=y.length;A<w;A++){const C=Array.isArray(y[A])?y[A]:[y[A]];for(let x=0,S=C.length;x<S;x++){const P=C[x];if(d(P,A,x,E)===!0){const O=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let W=0;W<U.length;W++){const V=U[W],z=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,O+H,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,H),H+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,b,y,E){const A=M.value,w=b+"_"+y;if(E[w]===void 0)return typeof A=="number"||typeof A=="boolean"?E[w]=A:E[w]=A.clone(),!0;{const C=E[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return E[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(M){const b=M.uniforms;let y=0;const E=16;for(let w=0,C=b.length;w<C;w++){const x=Array.isArray(b[w])?b[w]:[b[w]];for(let S=0,P=x.length;S<P;S++){const O=x[S],U=Array.isArray(O.value)?O.value:[O.value];for(let H=0,W=U.length;H<W;H++){const V=U[H],z=_(V),j=y%E,ot=j%z.boundary,et=j+ot;y+=ot,et!==0&&E-et<z.storage&&(y+=E-et),O.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=z.storage}}}const A=y%E;return A>0&&(y+=E-A),M.__size=y,M.__cache={},this}function _(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Tt("WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}const ax=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Cn=null;function ox(){return Cn===null&&(Cn=new Od(ax,16,16,Er,ii),Cn.name="DFG_LUT",Cn.minFilter=ke,Cn.magFilter=ke,Cn.wrapS=ti,Cn.wrapT=ti,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}class lx{constructor(t={}){const{canvas:e=hd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=hn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=d,m=new Set([Fl,Il,Ll]),p=new Set([hn,Vn,ns,is,Pl,Dl]),M=new Uint32Array(4),b=new Int32Array(4);let y=null,E=null;const A=[],w=[];let C=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=Mn;let P=0,O=0,U=null,H=-1,W=null;const V=new ve,z=new ve;let j=null;const ot=new Ht(0);let et=0,ct=e.width,Rt=e.height,Pt=1,Wt=null,Xt=null;const Y=new ve(0,0,ct,Rt),Z=new ve(0,0,ct,Rt);let pt=!1;const Dt=new zl;let gt=!1,jt=!1;const De=new se,qt=new L,Qt=new ve,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function be(){return U===null?Pt:1}let D=n;function Ee(T,N){return e.getContext(T,N)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rl}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",te,!1),D===null){const N="webgl2";if(D=Ee(N,T),D===null)throw Ee(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Gt("WebGLRenderer: "+T.message),T}let Zt,he,vt,R,v,F,q,$,X,St,it,xt,At,Q,st,_t,Mt,rt,Ut,I,ut,tt,ft,J;function K(){Zt=new og(D),Zt.init(),tt=new J0(D,Zt),he=new J_(D,Zt,t,tt),vt=new $0(D,Zt),he.reversedDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),R=new hg(D),v=new U0,F=new Z0(D,Zt,vt,v,he,tt,R),q=new tg(x),$=new ag(x),X=new pp(D),ft=new $_(D,X),St=new lg(D,X,R,ft),it=new fg(D,St,X,R),Ut=new ug(D,he,F),_t=new Q_(v),xt=new F0(x,q,$,Zt,he,ft,_t),At=new rx(x,v),Q=new O0,st=new H0(Zt),rt=new K_(x,q,$,vt,it,g,c),Mt=new j0(x,it,he),J=new sx(D,R,he,vt),I=new Z_(D,Zt,R),ut=new cg(D,Zt,R),R.programs=xt.programs,x.capabilities=he,x.extensions=Zt,x.properties=v,x.renderLists=Q,x.shadowMap=Mt,x.state=vt,x.info=R}K(),_!==hn&&(C=new pg(_,e.width,e.height,i,s));const nt=new nx(x,D);this.xr=nt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Zt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Zt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Pt},this.setPixelRatio=function(T){T!==void 0&&(Pt=T,this.setSize(ct,Rt,!1))},this.getSize=function(T){return T.set(ct,Rt)},this.setSize=function(T,N,G=!0){if(nt.isPresenting){Tt("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=T,Rt=N,e.width=Math.floor(T*Pt),e.height=Math.floor(N*Pt),G===!0&&(e.style.width=T+"px",e.style.height=N+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(ct*Pt,Rt*Pt).floor()},this.setDrawingBufferSize=function(T,N,G){ct=T,Rt=N,Pt=G,e.width=Math.floor(T*G),e.height=Math.floor(N*G),this.setViewport(0,0,T,N)},this.setEffects=function(T){if(_===hn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let N=0;N<T.length;N++)if(T[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(V)},this.getViewport=function(T){return T.copy(Y)},this.setViewport=function(T,N,G,k){T.isVector4?Y.set(T.x,T.y,T.z,T.w):Y.set(T,N,G,k),vt.viewport(V.copy(Y).multiplyScalar(Pt).round())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,N,G,k){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,N,G,k),vt.scissor(z.copy(Z).multiplyScalar(Pt).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(T){vt.setScissorTest(pt=T)},this.setOpaqueSort=function(T){Wt=T},this.setTransparentSort=function(T){Xt=T},this.getClearColor=function(T){return T.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,G=!0){let k=0;if(T){let B=!1;if(U!==null){const at=U.texture.format;B=m.has(at)}if(B){const at=U.texture.type,dt=p.has(at),ht=rt.getClearColor(),mt=rt.getClearAlpha(),yt=ht.r,wt=ht.g,bt=ht.b;dt?(M[0]=yt,M[1]=wt,M[2]=bt,M[3]=mt,D.clearBufferuiv(D.COLOR,0,M)):(b[0]=yt,b[1]=wt,b[2]=bt,b[3]=mt,D.clearBufferiv(D.COLOR,0,b))}else k|=D.COLOR_BUFFER_BIT}N&&(k|=D.DEPTH_BUFFER_BIT),G&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",te,!1),rt.dispose(),Q.dispose(),st.dispose(),v.dispose(),q.dispose(),$.dispose(),it.dispose(),ft.dispose(),J.dispose(),xt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",lc),nt.removeEventListener("sessionend",cc),bi.stop()};function Ct(T){T.preventDefault(),yc("WebGLRenderer: Context Lost."),S=!0}function ue(){yc("WebGLRenderer: Context Restored."),S=!1;const T=R.autoReset,N=Mt.enabled,G=Mt.autoUpdate,k=Mt.needsUpdate,B=Mt.type;K(),R.autoReset=T,Mt.enabled=N,Mt.autoUpdate=G,Mt.needsUpdate=k,Mt.type=B}function te(T){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Rn(T){const N=T.target;N.removeEventListener("dispose",Rn),Xn(N)}function Xn(T){bf(T),v.remove(T)}function bf(T){const N=v.get(T).programs;N!==void 0&&(N.forEach(function(G){xt.releaseProgram(G)}),T.isShaderMaterial&&xt.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,G,k,B,at){N===null&&(N=ae);const dt=B.isMesh&&B.matrixWorld.determinant()<0,ht=wf(T,N,G,k,B);vt.setMaterial(k,dt);let mt=G.index,yt=1;if(k.wireframe===!0){if(mt=St.getWireframeAttribute(G),mt===void 0)return;yt=2}const wt=G.drawRange,bt=G.attributes.position;let Nt=wt.start*yt,re=(wt.start+wt.count)*yt;at!==null&&(Nt=Math.max(Nt,at.start*yt),re=Math.min(re,(at.start+at.count)*yt)),mt!==null?(Nt=Math.max(Nt,0),re=Math.min(re,mt.count)):bt!=null&&(Nt=Math.max(Nt,0),re=Math.min(re,bt.count));const ge=re-Nt;if(ge<0||ge===1/0)return;ft.setup(B,k,ht,G,mt);let xe,oe=I;if(mt!==null&&(xe=X.get(mt),oe=ut,oe.setIndex(xe)),B.isMesh)k.wireframe===!0?(vt.setLineWidth(k.wireframeLinewidth*be()),oe.setMode(D.LINES)):oe.setMode(D.TRIANGLES);else if(B.isLine){let Et=k.linewidth;Et===void 0&&(Et=1),vt.setLineWidth(Et*be()),B.isLineSegments?oe.setMode(D.LINES):B.isLineLoop?oe.setMode(D.LINE_LOOP):oe.setMode(D.LINE_STRIP)}else B.isPoints?oe.setMode(D.POINTS):B.isSprite&&oe.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ss("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))oe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Et=B._multiDrawStarts,ee=B._multiDrawCounts,Kt=B._multiDrawCount,nn=mt?X.get(mt).bytesPerElement:1,Zi=v.get(k).currentProgram.getUniforms();for(let rn=0;rn<Kt;rn++)Zi.setValue(D,"_gl_DrawID",rn),oe.render(Et[rn]/nn,ee[rn])}else if(B.isInstancedMesh)oe.renderInstances(Nt,ge,B.count);else if(G.isInstancedBufferGeometry){const Et=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ee=Math.min(G.instanceCount,Et);oe.renderInstances(Nt,ge,ee)}else oe.render(Nt,ge)};function oc(T,N,G){T.transparent===!0&&T.side===Ln&&T.forceSinglePass===!1?(T.side=$e,T.needsUpdate=!0,Ss(T,N,G),T.side=kn,T.needsUpdate=!0,Ss(T,N,G),T.side=Ln):Ss(T,N,G)}this.compile=function(T,N,G=null){G===null&&(G=T),E=st.get(G),E.init(N),w.push(E),G.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),T!==G&&T.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),E.setupLights();const k=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const at=B.material;if(at)if(Array.isArray(at))for(let dt=0;dt<at.length;dt++){const ht=at[dt];oc(ht,G,B),k.add(ht)}else oc(at,G,B),k.add(at)}),E=w.pop(),k},this.compileAsync=function(T,N,G=null){const k=this.compile(T,N,G);return new Promise(B=>{function at(){if(k.forEach(function(dt){v.get(dt).currentProgram.isReady()&&k.delete(dt)}),k.size===0){B(T);return}setTimeout(at,10)}Zt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Ta=null;function Ef(T){Ta&&Ta(T)}function lc(){bi.stop()}function cc(){bi.start()}const bi=new Mu;bi.setAnimationLoop(Ef),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(T){Ta=T,nt.setAnimationLoop(T),T===null?bi.stop():bi.start()},nt.addEventListener("sessionstart",lc),nt.addEventListener("sessionend",cc),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const G=nt.enabled===!0&&nt.isPresenting===!0,k=C!==null&&(U===null||G)&&C.begin(x,U);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(N),N=nt.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,N,U),E=st.get(T,w.length),E.init(N),w.push(E),De.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Dt.setFromProjectionMatrix(De,Nn,N.reversedDepth),jt=this.localClippingEnabled,gt=_t.init(this.clippingPlanes,jt),y=Q.get(T,A.length),y.init(),A.push(y),nt.enabled===!0&&nt.isPresenting===!0){const dt=x.xr.getDepthSensingMesh();dt!==null&&ba(dt,N,-1/0,x.sortObjects)}ba(T,N,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(Wt,Xt),Ft=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Ft&&rt.addToRenderList(y,T),this.info.render.frame++,gt===!0&&_t.beginShadows();const B=E.state.shadowsArray;if(Mt.render(B,T,N),gt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&C.hasRenderPass())===!1){const dt=y.opaque,ht=y.transmissive;if(E.setupLights(),N.isArrayCamera){const mt=N.cameras;if(ht.length>0)for(let yt=0,wt=mt.length;yt<wt;yt++){const bt=mt[yt];uc(dt,ht,T,bt)}Ft&&rt.render(T);for(let yt=0,wt=mt.length;yt<wt;yt++){const bt=mt[yt];hc(y,T,bt,bt.viewport)}}else ht.length>0&&uc(dt,ht,T,N),Ft&&rt.render(T),hc(y,T,N)}U!==null&&O===0&&(F.updateMultisampleRenderTarget(U),F.updateRenderTargetMipmap(U)),k&&C.end(x),T.isScene===!0&&T.onAfterRender(x,T,N),ft.resetDefaultState(),H=-1,W=null,w.pop(),w.length>0?(E=w[w.length-1],gt===!0&&_t.setGlobalState(x.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function ba(T,N,G,k){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Dt.intersectsSprite(T)){k&&Qt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(De);const dt=it.update(T),ht=T.material;ht.visible&&y.push(T,dt,ht,G,Qt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Dt.intersectsObject(T))){const dt=it.update(T),ht=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Qt.copy(T.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Qt.copy(dt.boundingSphere.center)),Qt.applyMatrix4(T.matrixWorld).applyMatrix4(De)),Array.isArray(ht)){const mt=dt.groups;for(let yt=0,wt=mt.length;yt<wt;yt++){const bt=mt[yt],Nt=ht[bt.materialIndex];Nt&&Nt.visible&&y.push(T,dt,Nt,G,Qt.z,bt)}}else ht.visible&&y.push(T,dt,ht,G,Qt.z,null)}}const at=T.children;for(let dt=0,ht=at.length;dt<ht;dt++)ba(at[dt],N,G,k)}function hc(T,N,G,k){const{opaque:B,transmissive:at,transparent:dt}=T;E.setupLightsView(G),gt===!0&&_t.setGlobalState(x.clippingPlanes,G),k&&vt.viewport(V.copy(k)),B.length>0&&Ms(B,N,G),at.length>0&&Ms(at,N,G),dt.length>0&&Ms(dt,N,G),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function uc(T,N,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){const Nt=Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new zn(1,1,{generateMipmaps:!0,type:Nt?ii:hn,minFilter:Vi,samples:he.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}const at=E.state.transmissionRenderTarget[k.id],dt=k.viewport||V;at.setSize(dt.z*x.transmissionResolutionScale,dt.w*x.transmissionResolutionScale);const ht=x.getRenderTarget(),mt=x.getActiveCubeFace(),yt=x.getActiveMipmapLevel();x.setRenderTarget(at),x.getClearColor(ot),et=x.getClearAlpha(),et<1&&x.setClearColor(16777215,.5),x.clear(),Ft&&rt.render(G);const wt=x.toneMapping;x.toneMapping=Bn;const bt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),gt===!0&&_t.setGlobalState(x.clippingPlanes,k),Ms(T,G,k),F.updateMultisampleRenderTarget(at),F.updateRenderTargetMipmap(at),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let re=0,ge=N.length;re<ge;re++){const xe=N[re],{object:oe,geometry:Et,material:ee,group:Kt}=xe;if(ee.side===Ln&&oe.layers.test(k.layers)){const nn=ee.side;ee.side=$e,ee.needsUpdate=!0,fc(oe,G,k,Et,ee,Kt),ee.side=nn,ee.needsUpdate=!0,Nt=!0}}Nt===!0&&(F.updateMultisampleRenderTarget(at),F.updateRenderTargetMipmap(at))}x.setRenderTarget(ht,mt,yt),x.setClearColor(ot,et),bt!==void 0&&(k.viewport=bt),x.toneMapping=wt}function Ms(T,N,G){const k=N.isScene===!0?N.overrideMaterial:null;for(let B=0,at=T.length;B<at;B++){const dt=T[B],{object:ht,geometry:mt,group:yt}=dt;let wt=dt.material;wt.allowOverride===!0&&k!==null&&(wt=k),ht.layers.test(G.layers)&&fc(ht,N,G,mt,wt,yt)}}function fc(T,N,G,k,B,at){T.onBeforeRender(x,N,G,k,B,at),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(x,N,G,k,T,at),B.transparent===!0&&B.side===Ln&&B.forceSinglePass===!1?(B.side=$e,B.needsUpdate=!0,x.renderBufferDirect(G,N,k,B,T,at),B.side=kn,B.needsUpdate=!0,x.renderBufferDirect(G,N,k,B,T,at),B.side=Ln):x.renderBufferDirect(G,N,k,B,T,at),T.onAfterRender(x,N,G,k,B,at)}function Ss(T,N,G){N.isScene!==!0&&(N=ae);const k=v.get(T),B=E.state.lights,at=E.state.shadowsArray,dt=B.state.version,ht=xt.getParameters(T,B.state,at,N,G),mt=xt.getProgramCacheKey(ht);let yt=k.programs;k.environment=T.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(T.isMeshStandardMaterial?$:q).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,yt===void 0&&(T.addEventListener("dispose",Rn),yt=new Map,k.programs=yt);let wt=yt.get(mt);if(wt!==void 0){if(k.currentProgram===wt&&k.lightsStateVersion===dt)return pc(T,ht),wt}else ht.uniforms=xt.getUniforms(T),T.onBeforeCompile(ht,x),wt=xt.acquireProgram(ht,mt),yt.set(mt,wt),k.uniforms=ht.uniforms;const bt=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(bt.clippingPlanes=_t.uniform),pc(T,ht),k.needsLights=Rf(T),k.lightsStateVersion=dt,k.needsLights&&(bt.ambientLightColor.value=B.state.ambient,bt.lightProbe.value=B.state.probe,bt.directionalLights.value=B.state.directional,bt.directionalLightShadows.value=B.state.directionalShadow,bt.spotLights.value=B.state.spot,bt.spotLightShadows.value=B.state.spotShadow,bt.rectAreaLights.value=B.state.rectArea,bt.ltc_1.value=B.state.rectAreaLTC1,bt.ltc_2.value=B.state.rectAreaLTC2,bt.pointLights.value=B.state.point,bt.pointLightShadows.value=B.state.pointShadow,bt.hemisphereLights.value=B.state.hemi,bt.directionalShadowMap.value=B.state.directionalShadowMap,bt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,bt.spotShadowMap.value=B.state.spotShadowMap,bt.spotLightMatrix.value=B.state.spotLightMatrix,bt.spotLightMap.value=B.state.spotLightMap,bt.pointShadowMap.value=B.state.pointShadowMap,bt.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=wt,k.uniformsList=null,wt}function dc(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Qs.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function pc(T,N){const G=v.get(T);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function wf(T,N,G,k,B){N.isScene!==!0&&(N=ae),F.resetTextureUnits();const at=N.fog,dt=k.isMeshStandardMaterial?N.environment:null,ht=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:wr,mt=(k.isMeshStandardMaterial?$:q).get(k.envMap||dt),yt=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,wt=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),bt=!!G.morphAttributes.position,Nt=!!G.morphAttributes.normal,re=!!G.morphAttributes.color;let ge=Bn;k.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ge=x.toneMapping);const xe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=xe!==void 0?xe.length:0,Et=v.get(k),ee=E.state.lights;if(gt===!0&&(jt===!0||T!==W)){const He=T===W&&k.id===H;_t.setState(k,T,He)}let Kt=!1;k.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==ee.state.version||Et.outputColorSpace!==ht||B.isBatchedMesh&&Et.batching===!1||!B.isBatchedMesh&&Et.batching===!0||B.isBatchedMesh&&Et.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Et.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Et.instancing===!1||!B.isInstancedMesh&&Et.instancing===!0||B.isSkinnedMesh&&Et.skinning===!1||!B.isSkinnedMesh&&Et.skinning===!0||B.isInstancedMesh&&Et.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Et.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Et.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Et.instancingMorph===!1&&B.morphTexture!==null||Et.envMap!==mt||k.fog===!0&&Et.fog!==at||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==_t.numPlanes||Et.numIntersection!==_t.numIntersection)||Et.vertexAlphas!==yt||Et.vertexTangents!==wt||Et.morphTargets!==bt||Et.morphNormals!==Nt||Et.morphColors!==re||Et.toneMapping!==ge||Et.morphTargetsCount!==oe)&&(Kt=!0):(Kt=!0,Et.__version=k.version);let nn=Et.currentProgram;Kt===!0&&(nn=Ss(k,N,B));let Zi=!1,rn=!1,Or=!1;const fe=nn.getUniforms(),Ye=Et.uniforms;if(vt.useProgram(nn.program)&&(Zi=!0,rn=!0,Or=!0),k.id!==H&&(H=k.id,rn=!0),Zi||W!==T){vt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),fe.setValue(D,"projectionMatrix",T.projectionMatrix),fe.setValue(D,"viewMatrix",T.matrixWorldInverse);const je=fe.map.cameraPosition;je!==void 0&&je.setValue(D,qt.setFromMatrixPosition(T.matrixWorld)),he.logarithmicDepthBuffer&&fe.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&fe.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),W!==T&&(W=T,rn=!0,Or=!0)}if(Et.needsLights&&(ee.state.directionalShadowMap.length>0&&fe.setValue(D,"directionalShadowMap",ee.state.directionalShadowMap,F),ee.state.spotShadowMap.length>0&&fe.setValue(D,"spotShadowMap",ee.state.spotShadowMap,F),ee.state.pointShadowMap.length>0&&fe.setValue(D,"pointShadowMap",ee.state.pointShadowMap,F)),B.isSkinnedMesh){fe.setOptional(D,B,"bindMatrix"),fe.setOptional(D,B,"bindMatrixInverse");const He=B.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),fe.setValue(D,"boneTexture",He.boneTexture,F))}B.isBatchedMesh&&(fe.setOptional(D,B,"batchingTexture"),fe.setValue(D,"batchingTexture",B._matricesTexture,F),fe.setOptional(D,B,"batchingIdTexture"),fe.setValue(D,"batchingIdTexture",B._indirectTexture,F),fe.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&fe.setValue(D,"batchingColorTexture",B._colorsTexture,F));const gn=G.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Ut.update(B,G,nn),(rn||Et.receiveShadow!==B.receiveShadow)&&(Et.receiveShadow=B.receiveShadow,fe.setValue(D,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ye.envMap.value=mt,Ye.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(Ye.envMapIntensity.value=N.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=ox()),rn&&(fe.setValue(D,"toneMappingExposure",x.toneMappingExposure),Et.needsLights&&Af(Ye,Or),at&&k.fog===!0&&At.refreshFogUniforms(Ye,at),At.refreshMaterialUniforms(Ye,k,Pt,Rt,E.state.transmissionRenderTarget[T.id]),Qs.upload(D,dc(Et),Ye,F)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Qs.upload(D,dc(Et),Ye,F),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&fe.setValue(D,"center",B.center),fe.setValue(D,"modelViewMatrix",B.modelViewMatrix),fe.setValue(D,"normalMatrix",B.normalMatrix),fe.setValue(D,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const He=k.uniformsGroups;for(let je=0,Ea=He.length;je<Ea;je++){const Ei=He[je];J.update(Ei,nn),J.bind(Ei,nn)}}return nn}function Af(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Rf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(T,N,G){const k=v.get(T);k.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),v.get(T.texture).__webglTexture=N,v.get(T.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:G,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){const G=v.get(T);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const Cf=D.createFramebuffer();this.setRenderTarget=function(T,N=0,G=0){U=T,P=N,O=G;let k=null,B=!1,at=!1;if(T){const ht=v.get(T);if(ht.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(D.FRAMEBUFFER,ht.__webglFramebuffer),V.copy(T.viewport),z.copy(T.scissor),j=T.scissorTest,vt.viewport(V),vt.scissor(z),vt.setScissorTest(j),H=-1;return}else if(ht.__webglFramebuffer===void 0)F.setupRenderTarget(T);else if(ht.__hasExternalTextures)F.rebindTextures(T,v.get(T.texture).__webglTexture,v.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const wt=T.depthTexture;if(ht.__boundDepthTexture!==wt){if(wt!==null&&v.has(wt)&&(T.width!==wt.image.width||T.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(T)}}const mt=T.texture;(mt.isData3DTexture||mt.isDataArrayTexture||mt.isCompressedArrayTexture)&&(at=!0);const yt=v.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(yt[N])?k=yt[N][G]:k=yt[N],B=!0):T.samples>0&&F.useMultisampledRTT(T)===!1?k=v.get(T).__webglMultisampledFramebuffer:Array.isArray(yt)?k=yt[G]:k=yt,V.copy(T.viewport),z.copy(T.scissor),j=T.scissorTest}else V.copy(Y).multiplyScalar(Pt).floor(),z.copy(Z).multiplyScalar(Pt).floor(),j=pt;if(G!==0&&(k=Cf),vt.bindFramebuffer(D.FRAMEBUFFER,k)&&vt.drawBuffers(T,k),vt.viewport(V),vt.scissor(z),vt.setScissorTest(j),B){const ht=v.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ht.__webglTexture,G)}else if(at){const ht=N;for(let mt=0;mt<T.textures.length;mt++){const yt=v.get(T.textures[mt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+mt,yt.__webglTexture,G,ht)}}else if(T!==null&&G!==0){const ht=v.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ht.__webglTexture,G)}H=-1},this.readRenderTargetPixels=function(T,N,G,k,B,at,dt,ht=0){if(!(T&&T.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=v.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&dt!==void 0&&(mt=mt[dt]),mt){vt.bindFramebuffer(D.FRAMEBUFFER,mt);try{const yt=T.textures[ht],wt=yt.format,bt=yt.type;if(!he.textureFormatReadable(wt)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(bt)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-k&&G>=0&&G<=T.height-B&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ht),D.readPixels(N,G,k,B,tt.convert(wt),tt.convert(bt),at))}finally{const yt=U!==null?v.get(U).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(T,N,G,k,B,at,dt,ht=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=v.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&dt!==void 0&&(mt=mt[dt]),mt)if(N>=0&&N<=T.width-k&&G>=0&&G<=T.height-B){vt.bindFramebuffer(D.FRAMEBUFFER,mt);const yt=T.textures[ht],wt=yt.format,bt=yt.type;if(!he.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Nt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Nt),D.bufferData(D.PIXEL_PACK_BUFFER,at.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ht),D.readPixels(N,G,k,B,tt.convert(wt),tt.convert(bt),0);const re=U!==null?v.get(U).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,re);const ge=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ud(D,ge,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Nt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,at),D.deleteBuffer(Nt),D.deleteSync(ge),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,G=0){const k=Math.pow(2,-G),B=Math.floor(T.image.width*k),at=Math.floor(T.image.height*k),dt=N!==null?N.x:0,ht=N!==null?N.y:0;F.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,dt,ht,B,at),vt.unbindTexture()};const Pf=D.createFramebuffer(),Df=D.createFramebuffer();this.copyTextureToTexture=function(T,N,G=null,k=null,B=0,at=null){at===null&&(B!==0?(ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=B,B=0):at=0);let dt,ht,mt,yt,wt,bt,Nt,re,ge;const xe=T.isCompressedTexture?T.mipmaps[at]:T.image;if(G!==null)dt=G.max.x-G.min.x,ht=G.max.y-G.min.y,mt=G.isBox3?G.max.z-G.min.z:1,yt=G.min.x,wt=G.min.y,bt=G.isBox3?G.min.z:0;else{const gn=Math.pow(2,-B);dt=Math.floor(xe.width*gn),ht=Math.floor(xe.height*gn),T.isDataArrayTexture?mt=xe.depth:T.isData3DTexture?mt=Math.floor(xe.depth*gn):mt=1,yt=0,wt=0,bt=0}k!==null?(Nt=k.x,re=k.y,ge=k.z):(Nt=0,re=0,ge=0);const oe=tt.convert(N.format),Et=tt.convert(N.type);let ee;N.isData3DTexture?(F.setTexture3D(N,0),ee=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(F.setTexture2DArray(N,0),ee=D.TEXTURE_2D_ARRAY):(F.setTexture2D(N,0),ee=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Kt=D.getParameter(D.UNPACK_ROW_LENGTH),nn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Zi=D.getParameter(D.UNPACK_SKIP_PIXELS),rn=D.getParameter(D.UNPACK_SKIP_ROWS),Or=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yt),D.pixelStorei(D.UNPACK_SKIP_ROWS,wt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,bt);const fe=T.isDataArrayTexture||T.isData3DTexture,Ye=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){const gn=v.get(T),He=v.get(N),je=v.get(gn.__renderTarget),Ea=v.get(He.__renderTarget);vt.bindFramebuffer(D.READ_FRAMEBUFFER,je.__webglFramebuffer),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ea.__webglFramebuffer);for(let Ei=0;Ei<mt;Ei++)fe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,v.get(T).__webglTexture,B,bt+Ei),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,v.get(N).__webglTexture,at,ge+Ei)),D.blitFramebuffer(yt,wt,dt,ht,Nt,re,dt,ht,D.DEPTH_BUFFER_BIT,D.NEAREST);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||v.has(T)){const gn=v.get(T),He=v.get(N);vt.bindFramebuffer(D.READ_FRAMEBUFFER,Pf),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Df);for(let je=0;je<mt;je++)fe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,gn.__webglTexture,B,bt+je):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gn.__webglTexture,B),Ye?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,He.__webglTexture,at,ge+je):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,He.__webglTexture,at),B!==0?D.blitFramebuffer(yt,wt,dt,ht,Nt,re,dt,ht,D.COLOR_BUFFER_BIT,D.NEAREST):Ye?D.copyTexSubImage3D(ee,at,Nt,re,ge+je,yt,wt,dt,ht):D.copyTexSubImage2D(ee,at,Nt,re,yt,wt,dt,ht);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ye?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(ee,at,Nt,re,ge,dt,ht,mt,oe,Et,xe.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(ee,at,Nt,re,ge,dt,ht,mt,oe,xe.data):D.texSubImage3D(ee,at,Nt,re,ge,dt,ht,mt,oe,Et,xe):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,at,Nt,re,dt,ht,oe,Et,xe.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,at,Nt,re,xe.width,xe.height,oe,xe.data):D.texSubImage2D(D.TEXTURE_2D,at,Nt,re,dt,ht,oe,Et,xe);D.pixelStorei(D.UNPACK_ROW_LENGTH,Kt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Zi),D.pixelStorei(D.UNPACK_SKIP_ROWS,rn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Or),at===0&&N.generateMipmaps&&D.generateMipmap(ee),vt.unbindTexture()},this.initRenderTarget=function(T){v.get(T).__webglFramebuffer===void 0&&F.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?F.setTextureCube(T,0):T.isData3DTexture?F.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?F.setTexture2DArray(T,0):F.setTexture2D(T,0),vt.unbindTexture()},this.resetState=function(){P=0,O=0,U=null,vt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class cx{constructor(){this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.triggerResize&&this.triggerResize()})}}class hx{constructor(){this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,this.clock=new vu,window.requestAnimationFrame(()=>this.tick())}tick(){const t=Date.now();this.delta=t-this.current,this.current=t,this.elapsed=this.clock.getElapsedTime(),this.triggerTick&&this.triggerTick(),window.requestAnimationFrame(()=>this.tick())}}function Jn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Eu(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Rr={duration:.5,overwrite:!1,delay:0},Hl,Ne,de,Sn=1e8,ce=1/Sn,pl=Math.PI*2,ux=pl/4,fx=0,wu=Math.sqrt,dx=Math.cos,px=Math.sin,Ie=function(t){return typeof t=="string"},Me=function(t){return typeof t=="function"},si=function(t){return typeof t=="number"},Wl=function(t){return typeof t>"u"},Hn=function(t){return typeof t=="object"},Ze=function(t){return t!==!1},Xl=function(){return typeof window<"u"},Ys=function(t){return Me(t)||Ie(t)},Au=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ge=Array.isArray,mx=/random\([^)]+\)/g,_x=/,\s*/g,Sh=/(?:-?\.?\d|\.)+/gi,Ru=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_r=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,lo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cu=/[+-]=-?[.\d]+/,gx=/[^,'"\[\]\s]+/gi,xx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,me,Pn,ml,ql,mn={},la={},Pu,Du=function(t){return(la=Cr(t,mn))&&en},Yl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},os=function(t,e){return!e&&console.warn(t)},Lu=function(t,e){return t&&(mn[t]=e)&&la&&(la[t]=e)||mn},ls=function(){return 0},vx={suppressEvents:!0,isStart:!0,kill:!1},ta={suppressEvents:!0,kill:!1},Mx={suppressEvents:!0},jl={},xi=[],_l={},Iu,on={},co={},yh=30,ea=[],Kl="",$l=function(t){var e=t[0],n,i;if(Hn(e)||Me(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ea.length;i--&&!ea[i].targetTest(e););n=ea[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new rf(t[i],n)))||t.splice(i,1);return t},Wi=function(t){return t._gsap||$l(yn(t))[0]._gsap},Fu=function(t,e,n){return(n=t[e])&&Me(n)?t[e]():Wl(n)&&t.getAttribute&&t.getAttribute(e)||n},Je=function(t,e){return(t=t.split(",")).forEach(e)||t},Se=function(t){return Math.round(t*1e5)/1e5||0},pe=function(t){return Math.round(t*1e7)/1e7||0},Mr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Sx=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ca=function(){var t=xi.length,e=xi.slice(0),n,i;for(_l={},xi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Zl=function(t){return!!(t._initted||t._startAt||t.add)},Uu=function(t,e,n,i){xi.length&&!Ne&&ca(),t.render(e,n,!!(Ne&&e<0&&Zl(t))),xi.length&&!Ne&&ca()},Nu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(gx).length<2?e:Ie(t)?t.trim():t},Ou=function(t){return t},_n=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},yx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Cr=function(t,e){for(var n in e)t[n]=e[n];return t},Th=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Hn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ha=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Qr=function(t){var e=t.parent||me,n=t.keyframes?yx(Ge(t.keyframes)):_n;if(Ze(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Tx=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Bu=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Ma=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Mi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Xi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},bx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},gl=function(t,e,n,i){return t._startAt&&(Ne?t._startAt.revert(ta):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Ex=function r(t){return!t||t._ts&&r(t.parent)},bh=function(t){return t._repeat?Pr(t._tTime,t=t.duration()+t._rDelay)*t:0},Pr=function(t,e){var n=Math.floor(t=pe(t/e));return t&&n===t?n-1:n},ua=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Sa=function(t){return t._end=pe(t._start+(t._tDur/Math.abs(t._ts||t._rts||ce)||0))},ya=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=pe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Sa(t),n._dirty||Xi(n,t)),t},zu=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ua(t.rawTime(),e),(!e._dur||vs(0,e.totalDuration(),n)-e._tTime>ce)&&e.render(n,!0)),Xi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ce}},Fn=function(t,e,n,i){return e.parent&&Mi(e),e._start=pe((si(n)?n:n||t!==me?vn(t,n,e):t._time)+e._delay),e._end=pe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Bu(t,e,"_first","_last",t._sort?"_start":0),xl(e)||(t._recent=e),i||zu(t,e),t._ts<0&&ya(t,t._tTime),t},ku=function(t,e){return(mn.ScrollTrigger||Yl("scrollTrigger",e))&&mn.ScrollTrigger.create(e,t)},Vu=function(t,e,n,i,s){if(Ql(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ne&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Iu!==un.frame)return xi.push(t),t._lazy=[s,i],1},wx=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},xl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ax=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&wx(t)&&!(!t._initted&&xl(t))||(t._ts<0||t._dp._ts<0)&&!xl(t))?0:1,o=t._rDelay,c=0,l,h,u;if(o&&t._repeat&&(c=vs(0,t._tDur,e),h=Pr(c,o),t._yoyo&&h&1&&(a=1-a),h!==Pr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ne||i||t._zTime===ce||!e&&t._zTime){if(!t._initted&&Vu(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?ce:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,l=t._pt;l;)l.r(a,l.d),l=l._next;e<0&&gl(t,e,n,!0),t._onUpdate&&!n&&fn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&fn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Mi(t,1),!n&&!Ne&&(fn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Rx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Dr=function(t,e,n,i){var s=t._repeat,a=pe(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:pe(a*(s+1)+t._rDelay*s):a,o>0&&!i&&ya(t,t._tTime=t._tDur*o),t.parent&&Sa(t),n||Xi(t.parent,t),t},Eh=function(t){return t instanceof qe?Xi(t):Dr(t,t._dur)},Cx={_start:0,endTime:ls,totalDuration:ls},vn=function r(t,e,n){var i=t.labels,s=t._recent||Cx,a=t.duration()>=Sn?s.endTime(!1):t._dur,o,c,l;return Ie(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",o=e.indexOf("="),c==="<"||c===">"?(o>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(c=parseFloat(e.charAt(o-1)+e.substr(o+1)),l&&n&&(c=c/100*(Ge(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+c:a+c)):e==null?a:+e},ts=function(t,e,n){var i=si(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,c;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Ze(c.vars.inherit)&&c.parent;a.immediateRender=Ze(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Re(e[0],a,e[s+1])},Ti=function(t,e){return t||t===0?e(t):e},vs=function(t,e,n){return n<t?t:n>e?e:n},ze=function(t,e){return!Ie(t)||!(e=xx.exec(t))?"":e[1]},Px=function(t,e,n){return Ti(n,function(i){return vs(t,e,i)})},vl=[].slice,Gu=function(t,e){return t&&Hn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Hn(t[0]))&&!t.nodeType&&t!==Pn},Dx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ie(i)&&!e||Gu(i,1)?(s=n).push.apply(s,yn(i)):n.push(i)})||n},yn=function(t,e,n){return de&&!e&&de.selector?de.selector(t):Ie(t)&&!n&&(ml||!Lr())?vl.call((e||ql).querySelectorAll(t),0):Ge(t)?Dx(t,n):Gu(t)?vl.call(t,0):t?[t]:[]},Ml=function(t){return t=yn(t)[0]||os("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return yn(e,n.querySelectorAll?n:n===t?os("Invalid scope")||ql.createElement("div"):t)}},Hu=function(t){return t.sort(function(){return .5-Math.random()})},Wu=function(t){if(Me(t))return t;var e=Hn(t)?t:{each:t},n=qi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=e.axis,h=i,u=i;return Ie(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(h=i[0],u=i[1]),function(f,d,g){var _=(g||e).length,m=a[_],p,M,b,y,E,A,w,C,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,Sn])[1],!x){for(w=-Sn;w<(w=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=a[_]=[],p=c?Math.min(x,_)*h-.5:i%x,M=x===Sn?0:c?_*u/x-.5:i/x|0,w=0,C=Sn,A=0;A<_;A++)b=A%x-p,y=M-(A/x|0),m[A]=E=l?Math.abs(l==="y"?y:b):wu(b*b+y*y),E>w&&(w=E),E<C&&(C=E);i==="random"&&Hu(m),m.max=w-C,m.min=C,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:l?l==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=ze(e.amount||e.each)||0,n=n&&_<0?tf(n):n}return _=(m[f]-m.min)/m.max||0,pe(m.b+(n?n(_):_)*m.v)+m.u}},Sl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=pe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(si(n)?0:ze(n))}},Xu=function(t,e){var n=Ge(t),i,s;return!n&&Hn(t)&&(i=n=t.radius||Sn,t.values?(t=yn(t.values),(s=!si(t[0]))&&(i*=i)):t=Sl(t.increment)),Ti(e,n?Me(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=Sn,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-o,d=t[u].y-c,f=f*f+d*d):f=Math.abs(t[u]-o),f<l&&(l=f,h=u);return h=!i||l<=i?t[h]:a,s||h===a||si(a)?h:h+ze(a)}:Sl(t))},qu=function(t,e,n,i){return Ti(Ge(t)?!e:n===!0?!!(n=0):!i,function(){return Ge(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Lx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Ix=function(t,e){return function(n){return t(parseFloat(n))+(e||ze(n))}},Fx=function(t,e,n){return ju(t,e,0,1,n)},Yu=function(t,e,n){return Ti(n,function(i){return t[~~e(i)]})},Ux=function r(t,e,n){var i=e-t;return Ge(t)?Yu(t,r(0,t.length),e):Ti(n,function(s){return(i+(s-t)%i)%i+t})},Nx=function r(t,e,n){var i=e-t,s=i*2;return Ge(t)?Yu(t,r(0,t.length-1),e):Ti(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},cs=function(t){return t.replace(mx,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(_x);return qu(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ju=function(t,e,n,i,s){var a=e-t,o=i-n;return Ti(s,function(c){return n+((c-t)/a*o||0)})},Ox=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=Ie(t),o={},c,l,h,u,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Ge(t)&&!Ge(e)){for(h=[],u=t.length,f=u-2,l=1;l<u;l++)h.push(r(t[l-1],t[l]));u--,s=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=e}else i||(t=Cr(Ge(t)?[]:{},t));if(!h){for(c in e)Jl.call(o,t,c,"get",e[c]);s=function(g){return nc(g,o)||(a?t.p:t)}}}return Ti(n,s)},wh=function(t,e,n){var i=t.labels,s=Sn,a,o,c;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},fn=function(t,e,n){var i=t.vars,s=i[e],a=de,o=t._ctx,c,l,h;if(s)return c=i[e+"Params"],l=i.callbackScope||t,n&&xi.length&&ca(),o&&(de=o),h=c?s.apply(l,c):s.call(l),de=a,h},$r=function(t){return Mi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ne),t.progress()<1&&fn(t,"onInterrupt"),t},gr,Ku=[],$u=function(t){if(t)if(t=!t.name&&t.default||t,Xl()||t.headless){var e=t.name,n=Me(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ls,render:nc,add:Jl,kill:Qx,modifier:Jx,rawVars:0},a={targetTest:0,get:0,getSetter:ec,aliases:{},register:0};if(Lr(),t!==i){if(on[e])return;_n(i,_n(ha(t,s),a)),Cr(i.prototype,Cr(s,ha(t,a))),on[i.prop=e]=i,t.targetTest&&(ea.push(i),jl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Lu(e,i),t.register&&t.register(en,i,Qe)}else Ku.push(t)},le=255,Zr={aqua:[0,le,le],lime:[0,le,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,le],navy:[0,0,128],white:[le,le,le],olive:[128,128,0],yellow:[le,le,0],orange:[le,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[le,0,0],pink:[le,192,203],cyan:[0,le,le],transparent:[le,le,le,0]},ho=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*le+.5|0},Zu=function(t,e,n){var i=t?si(t)?[t>>16,t>>8&le,t&le]:0:Zr.black,s,a,o,c,l,h,u,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Zr[t])i=Zr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&le,i&le,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&le,t&le]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Sh),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(l+1):h+l-h*l,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=ho(c+1/3,s,a),i[1]=ho(c,s,a),i[2]=ho(c-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Ru),n&&i.length<4&&(i[3]=1),i}else i=t.match(Sh)||Zr.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/le,a=i[1]/le,o=i[2]/le,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?c=l=0:(d=u-f,l=h>.5?d/(2-u-f):d/(u+f),c=u===s?(a-o)/d+(a<o?6:0):u===a?(o-s)/d+2:(s-a)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Ju=function(t){var e=[],n=[],i=-1;return t.split(vi).forEach(function(s){var a=s.match(_r)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Ah=function(t,e,n){var i="",s=(t+i).match(vi),a=e?"hsla(":"rgba(",o=0,c,l,h,u;if(!s)return t;if(s=s.map(function(f){return(f=Zu(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Ju(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(vi,"1").split(_r),u=l.length-1;o<u;o++)i+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!l)for(l=t.split(vi),u=l.length-1;o<u;o++)i+=l[o]+s[o];return i+l[u]},vi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Zr)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Bx=/hsl[a]?\(/,Qu=function(t){var e=t.join(" "),n;if(vi.lastIndex=0,vi.test(e))return n=Bx.test(e),t[1]=Ah(t[1],n),t[0]=Ah(t[0],n,Ju(t[1])),!0},hs,un=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],c,l,h,u,f,d,g=function _(m){var p=r()-i,M=m===!0,b,y,E,A;if((p>t||p<0)&&(n+=p-e),i+=p,E=i-n,b=E-a,(b>0||M)&&(A=++u.frame,f=E-u.time*1e3,u.time=E=E/1e3,a+=b+(b>=s?4:s-b),y=1),M||(c=l(_)),y)for(d=0;d<o.length;d++)o[d](E,f,A,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Pu&&(!ml&&Xl()&&(Pn=ml=window,ql=Pn.document||{},mn.gsap=en,(Pn.gsapVersions||(Pn.gsapVersions=[])).push(en.version),Du(la||Pn.GreenSockGlobals||!Pn.gsap&&Pn||{}),Ku.forEach($u)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},hs=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),hs=0,l=ls},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,M){var b=p?function(y,E,A,w){m(y,E,A,w),u.remove(b)}:m;return u.remove(m),o[M?"unshift":"push"](b),Lr(),b},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},u})(),Lr=function(){return!hs&&un.wake()},kt={},zx=/^[\d.\-M][\d.\-,\s]/,kx=/["']/g,Vx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),e[i]=isNaN(l)?l.replace(kx,"").trim():+l,i=c.substr(o+1).trim();return e},Gx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Hx=function(t){var e=(t+"").split("("),n=kt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Vx(e[1])]:Gx(t).split(",").map(Nu)):kt._CE&&zx.test(t)?kt._CE("",t):n},tf=function(t){return function(e){return 1-t(1-e)}},ef=function r(t,e){for(var n=t._first,i;n;)n instanceof qe?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},qi=function(t,e){return t&&(Me(t)?t:kt[t]||Hx(t))||e},$i=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Je(t,function(o){kt[o]=mn[o]=s,kt[a=o.toLowerCase()]=n;for(var c in s)kt[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=kt[o+"."+c]=s[c]}),s},nf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},uo=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/pl*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*px((h-a)*s)+1},c=t==="out"?o:t==="in"?function(l){return 1-o(1-l)}:nf(o);return s=pl/s,c.config=function(l,h){return r(t,l,h)},c},fo=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:nf(n);return i.config=function(s){return r(t,s)},i};Je("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;$i(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});kt.Linear.easeNone=kt.none=kt.Linear.easeIn;$i("Elastic",uo("in"),uo("out"),uo());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};$i("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);$i("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});$i("Circ",function(r){return-(wu(1-r*r)-1)});$i("Sine",function(r){return r===1?1:-dx(r*ux)+1});$i("Back",fo("in"),fo("out"),fo());kt.SteppedEase=kt.steps=mn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-ce;return function(o){return((i*vs(0,a,o)|0)+s)*n}}};Rr.ease=kt["quad.out"];Je("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Kl+=r+","+r+"Params,"});var rf=function(t,e){this.id=fx++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Fu,this.set=e?e.getSetter:ec},us=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Dr(this,+e.duration,1,1),this.data=e.data,de&&(this._ctx=de,de.data.push(this)),hs||un.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Dr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Lr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ya(this,n),!s._dp||s.parent||zu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Fn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ce||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Uu(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+bh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+bh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Pr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ce?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ua(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ce?0:this._rts,this.totalTime(vs(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Sa(this),bx(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Lr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ce&&(this._tTime-=ce)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=pe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Fn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ze(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ua(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Mx);var i=Ne;return Ne=n,Zl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ne=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Eh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Eh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(vn(this,n),Ze(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ze(i)),this._dur||(this._zTime=-ce),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ce:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ce,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ce)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Me(n)?n:Ou,c=function(){var h=i.then;i.then=null,s&&s(),Me(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},t.kill=function(){$r(this)},r})();_n(us.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ce,_prom:0,_ps:!1,_rts:1});var qe=(function(r){Eu(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ze(n.sortChildren),me&&Fn(n.parent||me,Jn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ku(Jn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return ts(0,arguments,this),this},e.from=function(i,s,a){return ts(1,arguments,this),this},e.fromTo=function(i,s,a,o){return ts(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Qr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Re(i,s,vn(this,a),1),this},e.call=function(i,s,a){return Fn(this,Re.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,c,l,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new Re(i,a,vn(this,c)),this},e.staggerFrom=function(i,s,a,o,c,l,h){return a.runBackwards=1,Qr(a).immediateRender=Ze(a.immediateRender),this.staggerTo(i,s,a,o,c,l,h)},e.staggerFromTo=function(i,s,a,o,c,l,h,u){return o.startAt=a,Qr(o).immediateRender=Ze(o.immediateRender),this.staggerTo(i,s,o,c,l,h,u)},e.render=function(i,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:pe(i),u=this._zTime<0!=i<0&&(this._initted||!l),f,d,g,_,m,p,M,b,y,E,A,w;if(this!==me&&h>c&&i>=0&&(h=c),h!==this._tTime||a||u){if(o!==this._time&&l&&(h+=this._time-o,i+=this._time-o),f=h,y=this._start,b=this._ts,p=!b,u&&(l||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=pe(h%m),h===c?(_=this._repeat,f=l):(E=pe(h/m),_=~~E,_&&_===E&&(f=l,_--),f>l&&(f=l)),E=Pr(this._tTime,m),!o&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),A&&_&1&&(f=l-f,w=1),_!==E&&!this._lock){var C=A&&E&1,x=C===(A&&_&1);if(_<E&&(C=!C),o=C?0:h%l?l:h,this._lock=1,this.render(o||(w?0:pe(_*m)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&fn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,E=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,x&&(this._lock=2,o=C?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;ef(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Rx(this,pe(o),pe(f)),M&&(h-=f-(f=M._start))),this._tTime=h,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&l&&!s&&!E&&(fn(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){M=0,g&&(h+=this._zTime=-ce);break}}d=g}else{d=this._last;for(var S=i<0?i:f;d;){if(g=d._prev,(d._act||S<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,s,a||Ne&&Zl(d)),f!==this._time||!this._ts&&!p){M=0,g&&(h+=this._zTime=S?-ce:ce);break}}d=g}}if(M&&!s&&(this.pause(),M.render(f>=o?0:-ce)._zTime=f>=o?1:-1,this._ts))return this._start=y,Sa(this),this.render(i,s,a);this._onUpdate&&!s&&fn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Mi(this,1),!s&&!(i<0&&!o)&&(h||o||!c)&&(fn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(si(s)||(s=vn(this,s,i)),!(i instanceof us)){if(Ge(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ie(i))return this.addLabel(i,s);if(Me(i))i=Re.delayedCall(0,i);else return this}return this!==i?Fn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Sn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Re?s&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Ie(i)?this.removeLabel(i):Me(i)?this.killTweensOf(i):(i.parent===this&&Ma(this,i),i===this._recent&&(this._recent=this._last),Xi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pe(un.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=vn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Re.delayedCall(0,s||ls,a);return o.data="isPause",this._hasPause=1,Fn(this,o,vn(this,i))},e.removePause=function(i){var s=this._first;for(i=vn(this,i);s;)s._start===i&&s.data==="isPause"&&Mi(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)mi!==o[c]&&o[c].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=yn(i),c=this._first,l=si(s),h;c;)c instanceof Re?Sx(c._targets,o)&&(l?(!mi||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(h=c.getTweensOf(o,s)).length&&a.push.apply(a,h),c=c._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=vn(a,i),c=s,l=c.startAt,h=c.onStart,u=c.onStartParams,f=c.immediateRender,d,g=Re.to(a,_n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||ce,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==m&&Dr(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,_n({startAt:{time:vn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),wh(this,vn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),wh(this,vn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ce)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(i=pe(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=i);return Xi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Xi(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,c=Sn,l,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Fn(a,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=pe(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;Dr(a,a===me&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(me._ts&&(Uu(me,ua(i,me)),Iu=un.frame),un.frame>=yh){yh+=pn.autoSleep||120;var s=me._first;if((!s||!s._ts)&&pn.autoSleep&&un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||un.sleep()}}},t})(us);_n(qe.prototype,{_lock:0,_hasPause:0,_forcing:0});var Wx=function(t,e,n,i,s,a,o){var c=new Qe(this._pt,t,e,0,1,hf,null,s),l=0,h=0,u,f,d,g,_,m,p,M;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=cs(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),f=n.match(lo)||[];u=lo.exec(i);)g=u[0],_=i.substring(l,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Mr(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},l=lo.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(Cu.test(i)||p)&&(c.e=0),this._pt=c,c},Jl=function(t,e,n,i,s,a,o,c,l,h){Me(i)&&(i=i(s||0,t,a));var u=t[e],f=n!=="get"?n:Me(u)?l?t[e.indexOf("set")||!Me(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,d=Me(u)?l?Kx:lf:tc,g;if(Ie(i)&&(~i.indexOf("random(")&&(i=cs(i)),i.charAt(1)==="="&&(g=Mr(f,i)+(ze(f)||0),(g||g===0)&&(i=g))),!h||f!==i||yl)return!isNaN(f*i)&&i!==""?(g=new Qe(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?Zx:cf,0,d),l&&(g.fp=l),o&&g.modifier(o,this,t),this._pt=g):(!u&&!(e in t)&&Yl(e,i),Wx.call(this,t,e,f,i,d,c||pn.stringFilter,l))},Xx=function(t,e,n,i,s){if(Me(t)&&(t=es(t,s,e,n,i)),!Hn(t)||t.style&&t.nodeType||Ge(t)||Au(t))return Ie(t)?es(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=es(t[o],s,e,n,i);return a},sf=function(t,e,n,i,s,a){var o,c,l,h;if(on[t]&&(o=new on[t]).init(s,o.rawVars?e[t]:Xx(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=c=new Qe(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==gr))for(l=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)l[o._props[h]]=c;return o},mi,yl,Ql=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,b=t._overwrite==="auto"&&!Hl,y=t.timeline,E,A,w,C,x,S,P,O,U,H,W,V,z;if(y&&(!f||!s)&&(s="none"),t._ease=qi(s,Rr.ease),t._yEase=u?tf(qi(u===!0?s:u,Rr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(O=m[0]?Wi(m[0]).harness:0,V=O&&i[O.prop],E=ha(i,jl),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!d?_.render(-1,!0):_.revert(h&&g?ta:vx),_._lazy=0),a){if(Mi(t._startAt=Re.set(m,_n({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Ze(c),startAt:null,delay:0,onUpdate:l&&function(){return fn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ne||!o&&!d)&&t._startAt.revert(ta),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),w=_n({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Ze(c),immediateRender:o,stagger:0,parent:p},E),V&&(w[O.prop]=V),Mi(t._startAt=Re.set(m,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ne?t._startAt.revert(ta):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,ce,ce);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&Ze(c)||c&&!g,A=0;A<m.length;A++){if(x=m[A],P=x._gsap||$l(m)[A]._gsap,t._ptLookup[A]=H={},_l[P.id]&&xi.length&&ca(),W=M===m?A:M.indexOf(x),O&&(U=new O).init(x,V||E,t,W,M)!==!1&&(t._pt=C=new Qe(t._pt,x,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(j){H[j]=C}),U.priority&&(S=1)),!O||V)for(w in E)on[w]&&(U=sf(w,E,t,W,x,M))?U.priority&&(S=1):H[w]=C=Jl.call(t,x,w,"get",E[w],W,M,0,i.stringFilter);t._op&&t._op[A]&&t.kill(x,t._op[A]),b&&t._pt&&(mi=t,me.killTweensOf(x,H,t.globalTime(e)),z=!t.parent,mi=0),t._pt&&c&&(_l[P.id]=1)}S&&uf(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!z,f&&e<=0&&y.render(Sn,!0,!0)},qx=function(t,e,n,i,s,a,o,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!l)for(l=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return yl=1,t.vars[e]="+=0",Ql(t,o),yl=0,c?os(e+" not eligible for reset"):1;l.push(h)}for(d=l.length;d--;)u=l[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Se(n)+ze(u.e)),u.b&&(u.b=h.s+ze(u.b))},Yx=function(t,e){var n=t[0]?Wi(t[0]).harness:0,i=n&&n.aliases,s,a,o,c;if(!i)return e;s=Cr({},e);for(a in i)if(a in s)for(c=i[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},jx=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Ge(e))o=n[t]||(n[t]=[]),e.forEach(function(c,l){return o.push({t:l/(e.length-1)*100,v:c,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},es=function(t,e,n,i,s){return Me(t)?t.call(e,n,i,s):Ie(t)&&~t.indexOf("random(")?cs(t):t},af=Kl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",of={};Je(af+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return of[r]=1});var Re=(function(r){Eu(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Qr(i))||this;var c=o.vars,l=c.duration,h=c.delay,u=c.immediateRender,f=c.stagger,d=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,M=i.parent||me,b=(Ge(n)||Au(n)?si(n[0]):"length"in i)?[n]:yn(n),y,E,A,w,C,x,S,P;if(o._targets=b.length?$l(b):os("GSAP target "+n+" not found. https://gsap.com",!pn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Ys(l)||Ys(h)){if(i=o.vars,y=o.timeline=new qe({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:b}),y.kill(),y.parent=y._dp=Jn(o),y._start=0,f||Ys(l)||Ys(h)){if(w=b.length,S=f&&Wu(f),Hn(f))for(C in f)~af.indexOf(C)&&(P||(P={}),P[C]=f[C]);for(E=0;E<w;E++)A=ha(i,of),A.stagger=0,p&&(A.yoyoEase=p),P&&Cr(A,P),x=b[E],A.duration=+es(l,Jn(o),E,x,b),A.delay=(+es(h,Jn(o),E,x,b)||0)-o._delay,!f&&w===1&&A.delay&&(o._delay=h=A.delay,o._start+=h,A.delay=0),y.to(x,A,S?S(E,x,b):0),y._ease=kt.none;y.duration()?l=h=0:o.timeline=0}else if(g){Qr(_n(y.vars.defaults,{ease:"none"})),y._ease=qi(g.ease||i.ease||"none");var O=0,U,H,W;if(Ge(g))g.forEach(function(V){return y.to(b,V,">")}),y.duration();else{A={};for(C in g)C==="ease"||C==="easeEach"||jx(C,g[C],A,g.easeEach);for(C in A)for(U=A[C].sort(function(V,z){return V.t-z.t}),O=0,E=0;E<U.length;E++)H=U[E],W={ease:H.e,duration:(H.t-(E?U[E-1].t:0))/100*l},W[C]=H.v,y.to(b,W,O),O+=W.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||o.duration(l=y.duration())}else o.timeline=0;return d===!0&&!Hl&&(mi=Jn(o),me.killTweensOf(b),mi=0),Fn(M,Jn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!l&&!g&&o._start===pe(M._time)&&Ze(u)&&Ex(Jn(o))&&M.data!=="nested")&&(o._tTime=-ce,o.render(Math.max(0,-h)||0)),m&&ku(Jn(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-ce&&!h?c:i<ce?0:i,f,d,g,_,m,p,M,b,y;if(!l)Ax(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,b=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(f=pe(u%_),u===c?(g=this._repeat,f=l):(m=pe(u/_),g=~~m,g&&g===m?(f=l,g--):f>l&&(f=l)),p=this._yoyo&&g&1,p&&(y=this._yEase,f=l-f),m=Pr(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(b&&this._yEase&&ef(b,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(pe(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Vu(this,h?i:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(i,s,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(y||this._ease)(f/l),this._from&&(this.ratio=M=1-M),!o&&u&&!s&&!m&&(fn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&gl(this,i,s,a),fn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&fn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&gl(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Mi(this,1),!s&&!(h&&!o)&&(u||o||p)&&(fn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,c){hs||un.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ql(this,l),h=this._ease(l/this._dur),qx(this,i,s,a,o,h,l,c)?this.resetTo(i,s,a,o,1):(ya(this,0),this.parent||Bu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?$r(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ne),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,mi&&mi.vars.overwrite!==!0)._first||$r(this),this.parent&&a!==this.timeline.totalDuration()&&Dr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?yn(i):o,l=this._ptLookup,h=this._pt,u,f,d,g,_,m,p;if((!s||s==="all")&&Tx(o,c))return s==="all"&&(this._pt=0),$r(this);for(u=this._op=this._op||[],s!=="all"&&(Ie(s)&&(_={},Je(s,function(M){return _[M]=1}),s=_),s=Yx(o,s)),p=o.length;p--;)if(~c.indexOf(o[p])){f=l[p],s==="all"?(u[p]=s,g=f,d={}):(d=u[p]=u[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ma(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&$r(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ts(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return ts(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return me.killTweensOf(i,s,a)},t})(us);_n(Re.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Je("staggerTo,staggerFrom,staggerFromTo",function(r){Re[r]=function(){var t=new qe,e=vl.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var tc=function(t,e,n){return t[e]=n},lf=function(t,e,n){return t[e](n)},Kx=function(t,e,n,i){return t[e](i.fp,n)},$x=function(t,e,n){return t.setAttribute(e,n)},ec=function(t,e){return Me(t[e])?lf:Wl(t[e])&&t.setAttribute?$x:tc},cf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Zx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},hf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},nc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Jx=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Qx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ma(this,e,"_pt"):e.dep||(n=1),e=i;return!n},tv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},uf=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Qe=(function(){function r(e,n,i,s,a,o,c,l,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||cf,this.d=c||this,this.set=l||tc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=tv,this.m=n,this.mt=s,this.tween=i},r})();Je(Kl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return jl[r]=1});mn.TweenMax=mn.TweenLite=Re;mn.TimelineLite=mn.TimelineMax=qe;me=new qe({sortChildren:!1,defaults:Rr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=Qu;var Yi=[],na={},ev=[],Rh=0,nv=0,po=function(t){return(na[t]||ev).map(function(e){return e()})},Tl=function(){var t=Date.now(),e=[];t-Rh>2&&(po("matchMediaInit"),Yi.forEach(function(n){var i=n.queries,s=n.conditions,a,o,c,l;for(o in i)a=Pn.matchMedia(i[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&e.push(n))}),po("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Rh=t,po("matchMedia"))},ff=(function(){function r(e,n){this.selector=n&&Ml(n),this.data=[],this._r=[],this.isReverted=!1,this.id=nv++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Me(n)&&(s=i,i=n,n=Me);var a=this,o=function(){var l=de,h=a.selector,u;return l&&l!==a&&l.data.push(a),s&&(a.selector=Ml(s)),de=a,u=i.apply(a,arguments),Me(u)&&a._r.push(u),de=l,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Me?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},t.ignore=function(n){var i=de;de=null,n(this),de=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Re&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof qe?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Re)&&l.revert&&l.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Yi.length;a--;)Yi[a].id===this.id&&Yi.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),iv=(function(){function r(e){this.contexts=[],this.scope=e,de&&de.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Hn(n)||(n={matches:n});var a=new ff(0,s||this.scope),o=a.conditions={},c,l,h;de&&!a.selector&&(a.selector=de.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?h=1:(c=Pn.matchMedia(n[l]),c&&(Yi.indexOf(a)<0&&Yi.push(a),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(Tl):c.addEventListener("change",Tl)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),fa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return $u(i)})},timeline:function(t){return new qe(t)},getTweensOf:function(t,e){return me.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ie(t)&&(t=yn(t)[0]);var s=Wi(t||{}).get,a=n?Ou:Nu;return n==="native"&&(n=""),t&&(e?a((on[e]&&on[e].get||s)(t,e,n,i)):function(o,c,l){return a((on[o]&&on[o].get||s)(t,o,c,l))})},quickSetter:function(t,e,n){if(t=yn(t),t.length>1){var i=t.map(function(h){return en.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=on[e],o=Wi(t),c=o.harness&&(o.harness.aliases||{})[e]||e,l=a?function(h){var u=new a;gr._pt=0,u.init(t,n?h+n:h,gr,0,[t]),u.render(1,u),gr._pt&&nc(1,gr)}:o.set(t,c);return a?l:function(h){return l(t,c,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=en.to(t,_n((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,h){return s.resetTo(e,c,l,h)};return a.tween=s,a},isTweening:function(t){return me.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=qi(t.ease,Rr.ease)),Th(Rr,t||{})},config:function(t){return Th(pn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!on[o]&&!mn[o]&&os(e+" effect requires "+o+" plugin.")}),co[e]=function(o,c,l){return n(yn(o),_n(c||{},s),l)},a&&(qe.prototype[e]=function(o,c,l){return this.add(co[e](o,Hn(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){kt[t]=qi(e)},parseEase:function(t,e){return arguments.length?qi(t,e):kt},getById:function(t){return me.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new qe(t),i,s;for(n.smoothChildTiming=Ze(t.smoothChildTiming),me.remove(n),n._dp=0,n._time=n._tTime=me._time,i=me._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Re&&i.vars.onComplete===i._targets[0]))&&Fn(n,i,i._start-i._delay),i=s;return Fn(me,n,0),n},context:function(t,e){return t?new ff(t,e):de},matchMedia:function(t){return new iv(t)},matchMediaRefresh:function(){return Yi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Tl()},addEventListener:function(t,e){var n=na[t]||(na[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=na[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Ux,wrapYoyo:Nx,distribute:Wu,random:qu,snap:Xu,normalize:Fx,getUnit:ze,clamp:Px,splitColor:Zu,toArray:yn,selector:Ml,mapRange:ju,pipe:Lx,unitize:Ix,interpolate:Ox,shuffle:Hu},install:Du,effects:co,ticker:un,updateRoot:qe.updateRoot,plugins:on,globalTimeline:me,core:{PropTween:Qe,globals:Lu,Tween:Re,Timeline:qe,Animation:us,getCache:Wi,_removeLinkedListItem:Ma,reverting:function(){return Ne},context:function(t){return t&&de&&(de.data.push(t),t._ctx=de),de},suppressOverwrites:function(t){return Hl=t}}};Je("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return fa[r]=Re[r]});un.add(qe.updateRoot);gr=fa.to({},{duration:0});var rv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},sv=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=rv(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},mo=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var c,l;if(Ie(s)&&(c={},Je(s,function(h){return c[h]=1}),s=c),e){c={};for(l in s)c[l]=e(s[l]);s=c}sv(o,s)}}}},en=fa.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,c;this.tween=n;for(a in e)c=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(c||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ne?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},mo("roundProps",Sl),mo("modifiers"),mo("snap",Xu))||fa;Re.version=qe.version=en.version="3.14.2";Pu=1;Xl()&&Lr();kt.Power0;kt.Power1;kt.Power2;kt.Power3;kt.Power4;kt.Linear;kt.Quad;kt.Cubic;kt.Quart;kt.Quint;kt.Strong;kt.Elastic;kt.Back;kt.SteppedEase;kt.Bounce;kt.Sine;kt.Expo;kt.Circ;var Ch,_i,Sr,ic,Hi,Ph,rc,av=function(){return typeof window<"u"},ai={},Bi=180/Math.PI,yr=Math.PI/180,dr=Math.atan2,Dh=1e8,sc=/([A-Z])/g,ov=/(left|right|width|margin|padding|x)/i,lv=/[\s,\(]\S/,On={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},cv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},hv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},uv=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},fv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},df=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},pf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},dv=function(t,e,n){return t.style[e]=n},pv=function(t,e,n){return t.style.setProperty(e,n)},mv=function(t,e,n){return t._gsap[e]=n},_v=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},gv=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},xv=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},_e="transform",tn=_e+"Origin",vv=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in ai&&s){if(this.tfm=this.tfm||{},t!=="transform")t=On[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Qn(i,o)}):this.tfm[t]=a.x?a[t]:Qn(i,t),t===tn&&(this.tfm.zOrigin=a.zOrigin);else return On.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(_e)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(tn,e,"")),t=_e}(s||e)&&this.props.push(t,e,s[t])},mf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Mv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(sc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=rc(),(!s||!s.isStart)&&!n[_e]&&(mf(n),i.zOrigin&&n[tn]&&(n[tn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},_f=function(t,e){var n={target:t,props:[],revert:Mv,save:vv};return t._gsap||en.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},gf,El=function(t,e){var n=_i.createElementNS?_i.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):_i.createElement(t);return n&&n.style?n:_i.createElement(t)},dn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(sc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Ir(e)||e,1)||""},Lh="O,Moz,ms,Ms,Webkit".split(","),Ir=function(t,e,n){var i=e||Hi,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Lh[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Lh[a]:"")+t},wl=function(){av()&&window.document&&(Ch=window,_i=Ch.document,Sr=_i.documentElement,Hi=El("div")||{style:{}},El("div"),_e=Ir(_e),tn=_e+"Origin",Hi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gf=!!Ir("perspective"),rc=en.core.reverting,ic=1)},Ih=function(t){var e=t.ownerSVGElement,n=El("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Sr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Sr.removeChild(n),s},Fh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},xf=function(t){var e,n;try{e=t.getBBox()}catch{e=Ih(t),n=1}return e&&(e.width||e.height)||n||(e=Ih(t)),e&&!e.width&&!e.x&&!e.y?{x:+Fh(t,["x","cx","x1"])||0,y:+Fh(t,["y","cy","y1"])||0,width:0,height:0}:e},vf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&xf(t))},Si=function(t,e){if(e){var n=t.style,i;e in ai&&e!==tn&&(e=_e),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(sc,"-$1").toLowerCase())):n.removeAttribute(e)}},gi=function(t,e,n,i,s,a){var o=new Qe(t._pt,e,n,0,1,a?pf:df);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Uh={deg:1,rad:1,turn:1},Sv={grid:1,flex:1},yi=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Hi.style,c=ov.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,_,m,p;if(i===a||!s||Uh[i]||Uh[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&vf(t),(d||a==="%")&&(ai[e]||~e.indexOf("adius")))return g=p?t.getBBox()[c?"width":"height"]:t[h],Se(d?s/g*u:s/100*g);if(o[c?"width":"height"]=u+(f?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===_i||!_.appendChild)&&(_=_i.body),m=_._gsap,m&&d&&m.width&&c&&m.time===un.time&&!m.uncache)return Se(s/m.width*u);if(d&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,g=t[h],M?t.style[e]=M:Si(t,e)}else(d||a==="%")&&!Sv[dn(_,"display")]&&(o.position=dn(t,"position")),_===t&&(o.position="static"),_.appendChild(Hi),g=Hi[h],_.removeChild(Hi),o.position="absolute";return c&&d&&(m=Wi(_),m.time=un.time,m.width=_[h]),Se(f?g*s/u:g&&s?u/g*s:0)},Qn=function(t,e,n,i){var s;return ic||wl(),e in On&&e!=="transform"&&(e=On[e],~e.indexOf(",")&&(e=e.split(",")[0])),ai[e]&&e!=="transform"?(s=ds(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:pa(dn(t,tn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=da[e]&&da[e](t,e,n)||dn(t,e)||Fu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?yi(t,e,s,n)+n:s},yv=function(t,e,n,i){if(!n||n==="none"){var s=Ir(e,t,1),a=s&&dn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=dn(t,"borderTopColor"))}var o=new Qe(this._pt,t.style,e,0,1,hf),c=0,l=0,h,u,f,d,g,_,m,p,M,b,y,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=dn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=dn(t,e)||i,_?t.style[e]=_:Si(t,e)),h=[n,i],Qu(h),n=h[0],i=h[1],f=n.match(_r)||[],E=i.match(_r)||[],E.length){for(;u=_r.exec(i);)m=u[0],M=i.substring(c,u.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=f[l++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=Mr(d,m)+y),p=parseFloat(m),b=m.substr((p+"").length),c=_r.lastIndex-b.length,b||(b=b||pn.units[e]||y,c===i.length&&(i+=b,o.e+=b)),y!==b&&(d=yi(t,e,_,b)||0),o._pt={_next:o._pt,p:M||l===1?M:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=e==="display"&&i==="none"?pf:df;return Cu.test(i)&&(o.e=0),this._pt=o,o},Nh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Tv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Nh[n]||n,e[1]=Nh[i]||i,e.join(" ")},bv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],ai[o]&&(c=1,o=o==="transformOrigin"?tn:_e),Si(n,o);c&&(Si(n,_e),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ds(n,1),a.uncache=1,mf(i)))}},da={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Qe(t._pt,e,n,0,0,bv);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},fs=[1,0,0,1,0,0],Mf={},Sf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Oh=function(t){var e=dn(t,_e);return Sf(e)?fs:e.substr(7).match(Ru).map(Se)},ac=function(t,e){var n=t._gsap||Wi(t),i=t.style,s=Oh(t),a,o,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?fs:s):(s===fs&&!t.offsetParent&&t!==Sr&&!n.svg&&(c=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,o=t.nextElementSibling,Sr.appendChild(t)),s=Oh(t),c?i.display=c:Si(t,"display"),l&&(o?a.insertBefore(t,o):a?a.appendChild(t):Sr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Al=function(t,e,n,i,s,a){var o=t._gsap,c=s||ac(t,!0),l=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=c[0],g=c[1],_=c[2],m=c[3],p=c[4],M=c[5],b=e.split(" "),y=parseFloat(b[0])||0,E=parseFloat(b[1])||0,A,w,C,x;n?c!==fs&&(w=d*m-g*_)&&(C=y*(m/w)+E*(-_/w)+(_*M-m*p)/w,x=y*(-g/w)+E*(d/w)-(d*M-g*p)/w,y=C,E=x):(A=xf(t),y=A.x+(~b[0].indexOf("%")?y/100*A.width:y),E=A.y+(~(b[1]||b[0]).indexOf("%")?E/100*A.height:E)),i||i!==!1&&o.smooth?(p=y-l,M=E-h,o.xOffset=u+(p*d+M*_)-p,o.yOffset=f+(p*g+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=E,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[tn]="0px 0px",a&&(gi(a,o,"xOrigin",l,y),gi(a,o,"yOrigin",h,E),gi(a,o,"xOffset",u,o.xOffset),gi(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+E)},ds=function(t,e){var n=t._gsap||new rf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(t),l=dn(t,tn)||"0",h,u,f,d,g,_,m,p,M,b,y,E,A,w,C,x,S,P,O,U,H,W,V,z,j,ot,et,ct,Rt,Pt,Wt,Xt;return h=u=f=_=m=p=M=b=y=0,d=g=1,n.svg=!!(t.getCTM&&vf(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[_e]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[_e]!=="none"?c[_e]:"")),i.scale=i.rotate=i.translate="none"),w=ac(t,n.svg),n.svg&&(n.uncache?(j=t.getBBox(),l=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",z=""):z=!e&&t.getAttribute("data-svg-origin"),Al(t,z||l,!!z||n.originIsAbsolute,n.smooth!==!1,w)),E=n.xOrigin||0,A=n.yOrigin||0,w!==fs&&(P=w[0],O=w[1],U=w[2],H=w[3],h=W=w[4],u=V=w[5],w.length===6?(d=Math.sqrt(P*P+O*O),g=Math.sqrt(H*H+U*U),_=P||O?dr(O,P)*Bi:0,M=U||H?dr(U,H)*Bi+_:0,M&&(g*=Math.abs(Math.cos(M*yr))),n.svg&&(h-=E-(E*P+A*U),u-=A-(E*O+A*H))):(Xt=w[6],Pt=w[7],et=w[8],ct=w[9],Rt=w[10],Wt=w[11],h=w[12],u=w[13],f=w[14],C=dr(Xt,Rt),m=C*Bi,C&&(x=Math.cos(-C),S=Math.sin(-C),z=W*x+et*S,j=V*x+ct*S,ot=Xt*x+Rt*S,et=W*-S+et*x,ct=V*-S+ct*x,Rt=Xt*-S+Rt*x,Wt=Pt*-S+Wt*x,W=z,V=j,Xt=ot),C=dr(-U,Rt),p=C*Bi,C&&(x=Math.cos(-C),S=Math.sin(-C),z=P*x-et*S,j=O*x-ct*S,ot=U*x-Rt*S,Wt=H*S+Wt*x,P=z,O=j,U=ot),C=dr(O,P),_=C*Bi,C&&(x=Math.cos(C),S=Math.sin(C),z=P*x+O*S,j=W*x+V*S,O=O*x-P*S,V=V*x-W*S,P=z,W=j),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Se(Math.sqrt(P*P+O*O+U*U)),g=Se(Math.sqrt(V*V+Xt*Xt)),C=dr(W,V),M=Math.abs(C)>2e-4?C*Bi:0,y=Wt?1/(Wt<0?-Wt:Wt):0),n.svg&&(z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Sf(dn(t,_e)),z&&t.setAttribute("transform",z))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Se(d),n.scaleY=Se(g),n.rotation=Se(_)+o,n.rotationX=Se(m)+o,n.rotationY=Se(p)+o,n.skewX=M+o,n.skewY=b+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[tn]=pa(l)),n.xOffset=n.yOffset=0,n.force3D=pn.force3D,n.renderTransform=n.svg?wv:gf?yf:Ev,n.uncache=0,n},pa=function(t){return(t=t.split(" "))[0]+" "+t[1]},_o=function(t,e,n){var i=ze(e);return Se(parseFloat(e)+parseFloat(yi(t,"x",n+"px",i)))+i},Ev=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,yf(t,e)},Ui="0deg",qr="0px",Ni=") ",yf=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,b=n.zOrigin,y="",E=p==="auto"&&t&&t!==1||p===!0;if(b&&(u!==Ui||h!==Ui)){var A=parseFloat(h)*yr,w=Math.sin(A),C=Math.cos(A),x;A=parseFloat(u)*yr,x=Math.cos(A),a=_o(M,a,w*x*-b),o=_o(M,o,-Math.sin(A)*-b),c=_o(M,c,C*x*-b+b)}m!==qr&&(y+="perspective("+m+Ni),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(E||a!==qr||o!==qr||c!==qr)&&(y+=c!==qr||E?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Ni),l!==Ui&&(y+="rotate("+l+Ni),h!==Ui&&(y+="rotateY("+h+Ni),u!==Ui&&(y+="rotateX("+u+Ni),(f!==Ui||d!==Ui)&&(y+="skew("+f+", "+d+Ni),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ni),M.style[_e]=y||"translate(0, 0)"},wv=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,b=parseFloat(a),y=parseFloat(o),E,A,w,C,x;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=yr,l*=yr,E=Math.cos(c)*u,A=Math.sin(c)*u,w=Math.sin(c-l)*-f,C=Math.cos(c-l)*f,l&&(h*=yr,x=Math.tan(l-h),x=Math.sqrt(1+x*x),w*=x,C*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),E*=x,A*=x)),E=Se(E),A=Se(A),w=Se(w),C=Se(C)):(E=u,C=f,A=w=0),(b&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(b=yi(d,"x",a,"px"),y=yi(d,"y",o,"px")),(g||_||m||p)&&(b=Se(b+g-(g*E+_*w)+m),y=Se(y+_-(g*A+_*C)+p)),(i||s)&&(x=d.getBBox(),b=Se(b+i/100*x.width),y=Se(y+s/100*x.height)),x="matrix("+E+","+A+","+w+","+C+","+b+","+y+")",d.setAttribute("transform",x),M&&(d.style[_e]=x)},Av=function(t,e,n,i,s){var a=360,o=Ie(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?Bi:1),l=c-i,h=i+l+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*Dh)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*Dh)%a-~~(l/a)*a)),t._pt=f=new Qe(t._pt,e,n,i,l,cv),f.e=h,f.u="deg",t._props.push(n),f},Bh=function(t,e){for(var n in e)t[n]=e[n];return t},Rv=function(t,e,n){var i=Bh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,h,u,f,d,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[_e]=e,o=ds(n,1),Si(n,_e),n.setAttribute("transform",l)):(l=getComputedStyle(n)[_e],a[_e]=e,o=ds(n,1),a[_e]=l);for(c in ai)l=i[c],h=o[c],l!==h&&s.indexOf(c)<0&&(d=ze(l),g=ze(h),u=d!==g?yi(n,c,l,g):parseFloat(l),f=parseFloat(h),t._pt=new Qe(t._pt,o,c,u,f-u,bl),t._pt.u=g||0,t._props.push(c));Bh(o,i)};Je("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});da[t>1?"border"+r:r]=function(o,c,l,h,u){var f,d;if(arguments.length<4)return f=a.map(function(g){return Qn(o,g,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(c,d,u)}});var Tf={name:"css",register:wl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,c=n.vars.startAt,l,h,u,f,d,g,_,m,p,M,b,y,E,A,w,C,x;ic||wl(),this.styles=this.styles||_f(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(on[_]&&sf(_,e,n,i,t,s)))){if(d=typeof h,g=da[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=cs(h)),g)g(this,t,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",vi.lastIndex=0,vi.test(l)||(m=ze(l),p=ze(h),p?m!==p&&(l=yi(t,_,l,p)+p):m&&(h+=m)),this.add(o,"setProperty",l,h,i,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(d!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,t,s):c[_],Ie(l)&&~l.indexOf("random(")&&(l=cs(l)),ze(l+"")||l==="auto"||(l+=pn.units[_]||ze(Qn(t,_))||""),(l+"").charAt(1)==="="&&(l=Qn(t,_))):l=Qn(t,_),f=parseFloat(l),M=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),_ in On&&(_==="autoAlpha"&&(f===1&&Qn(t,"visibility")==="hidden"&&u&&(f=0),C.push("visibility",0,o.visibility),gi(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=On[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in ai,b){if(this.styles.save(_),x=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=dn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=h,h=dn(t,"perspective"),S?t.style.perspective=S:Si(t,"perspective")}u=parseFloat(h)}if(y||(E=t._gsap,E.renderTransform&&!e.parseTransform||ds(t,e.parseTransform),A=e.smoothOrigin!==!1&&E.smooth,y=this._pt=new Qe(this._pt,o,_e,0,1,E.renderTransform,E,0,-1),y.dep=1),_==="scale")this._pt=new Qe(this._pt,E,"scaleY",E.scaleY,(M?Mr(E.scaleY,M+u):u)-E.scaleY||0,bl),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(tn,0,o[tn]),h=Tv(h),E.svg?Al(t,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==E.zOrigin&&gi(this,E,"zOrigin",E.zOrigin,p),gi(this,o,_,pa(l),pa(h)));continue}else if(_==="svgOrigin"){Al(t,h,1,A,0,this);continue}else if(_ in Mf){Av(this,E,_,f,M?Mr(f,M+h):h);continue}else if(_==="smoothOrigin"){gi(this,E,"smooth",E.smooth,h);continue}else if(_==="force3D"){E[_]=h;continue}else if(_==="transform"){Rv(this,h,t);continue}}else _ in o||(_=Ir(_)||_);if(b||(u||u===0)&&(f||f===0)&&!lv.test(h)&&_ in o)m=(l+"").substr((f+"").length),u||(u=0),p=ze(h)||(_ in pn.units?pn.units[_]:m),m!==p&&(f=yi(t,_,l,p)),this._pt=new Qe(this._pt,b?E:o,_,f,(M?Mr(f,M+u):u)-f,!b&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?fv:bl),this._pt.u=p||0,b&&x!==h?(this._pt.b=l,this._pt.e=x,this._pt.r=uv):m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=hv);else if(_ in o)yv.call(this,t,_,l,M?M+h:h);else if(_ in t)this.add(t,_,l||t[_],M?M+h:h,i,s);else if(_!=="parseTransform"){Yl(_,h);continue}b||(_ in o?C.push(_,0,o[_]):typeof t[_]=="function"?C.push(_,2,t[_]()):C.push(_,1,l||t[_])),a.push(_)}}w&&uf(this)},render:function(t,e){if(e.tween._time||!rc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Qn,aliases:On,getSetter:function(t,e,n){var i=On[e];return i&&i.indexOf(",")<0&&(e=i),e in ai&&e!==tn&&(t._gsap.x||Qn(t,"x"))?n&&Ph===n?e==="scale"?_v:mv:(Ph=n||{})&&(e==="scale"?gv:xv):t.style&&!Wl(t.style[e])?dv:~e.indexOf("-")?pv:ec(t,e)},core:{_removeProperty:Si,_getMatrix:ac}};en.utils.checkPrefix=Ir;en.core.getStyleSaver=_f;(function(r,t,e,n){var i=Je(r+","+t+","+e,function(s){ai[s]=1});Je(t,function(s){pn.units[s]="deg",Mf[s]=1}),On[i[13]]=r+","+t,Je(n,function(s){var a=s.split(":");On[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Je("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){pn.units[r]="px"});en.registerPlugin(Tf);var $t=en.registerPlugin(Tf)||en;$t.core.Tween;class Cv{constructor(){this.experience=new Wn,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this._targetX=0,this._targetY=0,this._curX=0,this._curY=0,this.setInstance(),this._setupMobileGyro()}setInstance(){this.rig=new Ae,this.scene.add(this.rig),this.instance=new ln(50,this.sizes.width/this.sizes.height,.1,5e3),this.instance.position.set(0,0,150),this.rig.add(this.instance)}_setupMobileGyro(){window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",t=>{t.gamma!==null&&t.beta!==null&&(this._targetX=(t.beta-40)/60*.3,this._targetY=t.gamma/90*.3)},{passive:!0})}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}update(){const t=this.experience.raycaster;if(this.experience.isMobile)this._curX+=(this._targetX-this._curX)*.04,this._curY+=(this._targetY-this._curY)*.04,this.rig.rotation.x=this._curX,this.rig.rotation.y=this._curY;else if(t){const n=t.mouse,i=n.y*.45,s=-n.x*.45;$t.to(this.rig.rotation,{x:i,y:s,duration:1.8,ease:"power2.out"})}}}class Pv extends Te{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Vt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const pr=new L,zh=new se,kh=new se,Vh=new L,Gh=new L;class Dv{constructor(t={}){const e=this;let n,i,s,a;const o={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.sortObjects=!0,this.getSize=function(){return{width:n,height:i}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),zh.copy(_.matrixWorldInverse),kh.multiplyMatrices(_.projectionMatrix,zh),h(g,g,_),this.sortObjects&&d(g)},this.setSize=function(g,_){n=g,i=_,s=n/2,a=i/2,c.style.width=g+"px",c.style.height=_+"px"};function l(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,m=g.children.length;_<m;_++)l(g.children[_])}function h(g,_,m){if(g.visible===!1){l(g);return}if(g.isCSS2DObject){pr.setFromMatrixPosition(g.matrixWorld),pr.applyMatrix4(kh);const p=pr.z>=-1&&pr.z<=1&&g.layers.test(m.layers)===!0,M=g.element;M.style.display=p===!0?"":"none",p===!0&&(g.onBeforeRender(e,_,m),M.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(pr.x*s+s)+"px,"+(-pr.y*a+a)+"px)",M.parentNode!==c&&c.appendChild(M),g.onAfterRender(e,_,m));const b={distanceToCameraSquared:u(m,g)};o.objects.set(g,b)}for(let p=0,M=g.children.length;p<M;p++)h(g.children[p],_,m)}function u(g,_){return Vh.setFromMatrixPosition(g.matrixWorld),Gh.setFromMatrixPosition(_.matrixWorld),Vh.distanceToSquared(Gh)}function f(g){const _=[];return g.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function d(g){const _=f(g).sort(function(p,M){if(p.renderOrder!==M.renderOrder)return M.renderOrder-p.renderOrder;const b=o.objects.get(p).distanceToCameraSquared,y=o.objects.get(M).distanceToCameraSquared;return b-y}),m=_.length;for(let p=0,M=_.length;p<M;p++)_[p].element.style.zIndex=m-p}}}class Lv{constructor(){this.experience=new Wn,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.setWebGLRenderer(),this.setCSSRenderer()}setWebGLRenderer(){this.instance=new lx({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio,2)),this.instance.setClearColor(0,1),this.scene.background=new Ht(0)}setCSSRenderer(){this.cssInstance=new Dv,this.cssInstance.setSize(this.sizes.width,this.sizes.height),this.cssInstance.domElement.style.position="absolute",this.cssInstance.domElement.style.top="0px",this.cssInstance.domElement.style.pointerEvents="none",document.body.appendChild(this.cssInstance.domElement)}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio,2)),this.cssInstance.setSize(this.sizes.width,this.sizes.height)}update(){this.instance.render(this.scene,this.camera.instance),this.cssInstance.render(this.scene,this.camera.instance)}}class Iv{constructor(t){this.element=t,this.chars="!<>-_\\/[]{}—=+*^?#________",this.originalText=t.innerText,this.frameRequest=null,this.frame=0,this.queue=[],this.update=this.update.bind(this)}setText(t){const e=this.originalText,n=Math.max(e.length,t.length),i=new Promise(s=>this.resolve=s);this.queue=[];for(let s=0;s<n;s++){const a=e[s]||"",o=t[s]||"",c=Math.floor(Math.random()*40),l=c+Math.floor(Math.random()*40);this.queue.push({from:a,to:o,start:c,end:l})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),i}update(){let t="",e=0;for(let n=0,i=this.queue.length;n<i;n++){let{from:s,to:a,start:o,end:c,char:l}=this.queue[n];this.frame>=c?(e++,t+=a):this.frame>=o?((!l||Math.random()<.28)&&(l=this.randomChar(),this.queue[n].char=l),t+=`<span class="dud">${l}</span>`):t+=s}this.element.innerHTML=t,e===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}randomChar(){return this.chars[Math.floor(Math.random()*this.chars.length)]}hover(){this.setText(this.originalText)}}class Fv{constructor(t,e){this.experience=new Wn,this.scene=this.experience.scene,this.data=t,this.isHovered=!1,this.rings=[],this.moons=[],this.floatOffset=Math.random()*Math.PI*2,this.floatSpeed=.22+Math.random()*.3,this.rotSpeed=.002+Math.random()*.005,this.group=new Ae,this.group.position.copy(e),this.group.userData=t,this.group.userData.isNode=!0,this.group.userData.nodeInstance=this,this.cfg=this._cfg(),this._buildPlanet(),this._buildGlow(),this._buildRings(),this._buildMoons(),this._buildLabel(),this.scene.add(this.group)}_cfg(){const t=this.data.type,e=(this.data.kicker||"").toLowerCase(),n={r:1.3,pattern:0,rings:0,moons:Math.floor(Math.random()*2),label:""};return t==="about"?{...n,r:2.2,pattern:1,rings:2,moons:2}:t==="certification"?{...n,r:1.9,pattern:0,rings:3,moons:1}:e.includes("android")?{...n,r:1.5,pattern:2,rings:1,moons:1}:e.includes("web3")?{...n,r:1.5,pattern:3,rings:1,moons:0}:e.includes("backend")?{...n,r:1.4,pattern:1,rings:1}:e.includes("infra")||e.includes("nas")?{...n,r:1.5,pattern:2,rings:2}:n}_buildPlanet(){const{r:t,pattern:e}=this.cfg;this.planetMat=new Jt({uniforms:{uTime:{value:0},uPattern:{value:e},uHover:{value:0}},vertexShader:`
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
            `}),this.planetMesh=new ye(new cn(this.cfg.r,52,52),this.planetMat),this.group.add(this.planetMesh)}_buildGlow(){const t=this.cfg.r;this.atmMat=new Jt({uniforms:{uHover:{value:0}},vertexShader:"varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}",fragmentShader:"uniform float uHover;varying vec3 vN,vVP;void main(){float f=pow(clamp(1.-dot(normalize(vVP),vN),0.,1.),2.8);gl_FragColor=vec4(vec3(.82,.9,1.),f*(.48+uHover*.55)*.78);}",transparent:!0,blending:ie,depthWrite:!1,depthTest:!1,side:kn}),this.atmMesh=new ye(new cn(t*1.48,24,24),this.atmMat),this.atmMesh.renderOrder=1,this.group.add(this.atmMesh),this.haloMat=new Jt({uniforms:{uHover:{value:0}},vertexShader:"varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}",fragmentShader:"uniform float uHover;varying vec3 vN,vVP;void main(){float f=pow(clamp(1.-dot(normalize(vVP),vN),0.,1.),5.2);gl_FragColor=vec4(vec3(.72,.84,1.),f*(.26+uHover*.38)*.62);}",transparent:!0,blending:ie,depthWrite:!1,depthTest:!1,side:kn}),this.haloMesh=new ye(new cn(t*1.95,24,24),this.haloMat),this.haloMesh.renderOrder=2,this.group.add(this.haloMesh)}_buildRings(){const{r:t,rings:e}=this.cfg;if(e)for(let n=0;n<e;n++){const i=t*(1.75+n*.55),s=i+t*.26,a=new Jt({uniforms:{uTime:{value:0},uHover:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float uTime,uHover;varying vec2 vUv;
                    float h(float n){return fract(sin(n)*43758.5);}
                    void main(){
                        float rad=vUv.x;
                        float band=sin(rad*42.+uTime*.055)*.5+.5;
                        float gap=h(floor(rad*22.))>.58?0.:1.;
                        float d=band*gap;
                        float edge=smoothstep(0.,.09,rad)*smoothstep(1.,.91,rad);
                        float a=d*edge*(.32+uHover*.22);
                        gl_FragColor=vec4(vec3(.75+d*.25),a);
                    }`,transparent:!0,blending:ie,depthWrite:!1,depthTest:!1,side:Ln}),o=new kl(i,s,92,2),c=o.attributes.position,l=o.attributes.uv;for(let u=0;u<c.count;u++){const f=c.getX(u),d=c.getY(u),g=Math.sqrt(f*f+d*d);l.setXY(u,(g-i)/(s-i),Math.atan2(d,f)/(Math.PI*2)+.5)}const h=new ye(o,a);h.rotation.x=Math.PI/2+(Math.random()-.5)*.38,h.rotation.z=(Math.random()-.5)*.22,this.group.add(h),this.rings.push({mesh:h,mat:a})}}_buildMoons(){const{r:t,moons:e}=this.cfg;for(let n=0;n<e;n++){const i=t*(3+n*1.75+Math.random()*.7),s=t*(.075+Math.random()*.085),a=.28+Math.random()*.45,o=Math.random()*Math.PI*2,c=(Math.random()-.5)*.75,l=new $d({color:8947848,roughness:.9,metalness:.05}),h=new ye(new cn(s,12,12),l),u=[];for(let d=0;d<=68;d++)u.push(new L(Math.cos(d/68*Math.PI*2)*i,0,Math.sin(d/68*Math.PI*2)*i));const f=new Xe(new Bt().setFromPoints(u),new In({color:16777215,transparent:!0,opacity:.055,blending:ie,depthWrite:!1}));f.rotation.x=c,this.group.add(f),this.group.add(h),this.moons.push({mesh:h,orR:i,spd:a,offset:o,tilt:c})}}_buildLabel(){const t=document.createElement("div");t.className="project-label",t.textContent=this.data.title,t.style.cssText="opacity:0;transition:opacity .3s ease,transform .3s ease;transform:translateY(6px)",this.scramble=new Iv(t),this.label=new Pv(t),this.label.position.set(0,this.cfg.r*2.3+.9,0),this.group.add(this.label)}update(){const t=this.experience.time.elapsed;this.experience.time.delta/1e3,this.planetMat.uniforms.uTime&&(this.planetMat.uniforms.uTime.value=t),this.rings.forEach(i=>{i.mat.uniforms.uTime&&(i.mat.uniforms.uTime.value=t)}),this.planetMesh.rotation.y+=this.rotSpeed;const e=this.isHovered?0:Math.sin(t*this.floatSpeed+this.floatOffset)*.48;this.planetMesh.position.y+=(e-this.planetMesh.position.y)*.05;const n=this.planetMesh.position.y;this.atmMesh.position.y=n,this.haloMesh.position.y=n,this.rings.forEach(i=>i.mesh.position.y=n),this.moons.forEach(i=>{const s=t*i.spd+i.offset,a=Math.cos(i.tilt),o=Math.sin(i.tilt);i.mesh.position.x=Math.cos(s)*i.orR,i.mesh.position.z=Math.sin(s)*i.orR*a,i.mesh.position.y=n+Math.sin(s)*i.orR*o,i.mesh.rotation.y+=.009}),this.label.position.y=n+this.cfg.r*2.3+.9}onMouseEnter(){this.isHovered||(this.isHovered=!0,this.experience.audio&&this.experience.audio.play("hover"),this.label.element.style.opacity="1",this.label.element.style.transform="translateY(0)",this.scramble.hover(),$t.to(this.planetMesh.scale,{x:1.14,y:1.14,z:1.14,duration:.5,ease:"back.out(1.7)"}),$t.to(this.atmMesh.scale,{x:1.2,y:1.2,z:1.2,duration:.5}),$t.to(this.haloMesh.scale,{x:1.35,y:1.35,z:1.35,duration:.6}),$t.to(this.planetMat.uniforms.uHover,{value:1,duration:.4}),$t.to(this.atmMat.uniforms.uHover,{value:1,duration:.4}),$t.to(this.haloMat.uniforms.uHover,{value:1,duration:.4}),this.rings.forEach(t=>$t.to(t.mat.uniforms.uHover,{value:1,duration:.4})),this.moons.forEach(t=>{t._spd=t.spd,t.spd*=2.5}))}onMouseLeave(){this.isHovered&&(this.isHovered=!1,this.label.element.style.opacity="0",this.label.element.style.transform="translateY(6px)",$t.to(this.planetMesh.scale,{x:1,y:1,z:1,duration:.5}),$t.to(this.atmMesh.scale,{x:1,y:1,z:1,duration:.5}),$t.to(this.haloMesh.scale,{x:1,y:1,z:1,duration:.5}),$t.to(this.planetMat.uniforms.uHover,{value:0,duration:.4}),$t.to(this.atmMat.uniforms.uHover,{value:0,duration:.4}),$t.to(this.haloMat.uniforms.uHover,{value:0,duration:.4}),this.rings.forEach(t=>$t.to(t.mat.uniforms.uHover,{value:0,duration:.4})),this.moons.forEach(t=>{t._spd&&(t.spd=t._spd)}))}}class Uv{constructor(){this.experience=new Wn,this.scene=this.experience.scene,this.M=this.experience.isMobile,this.PR=Math.min(this.experience.sizes.pixelRatio,2),this.pulsarMats=[],this.auroraRings=[],this._stars(),this._galaxyDisk(),this._nebulaDust(),this._cosmicDust(),this._pulsars(),this._godRays(),this._aurora(),this._darkMatterWeb()}_pts(t,e){const n=new jr(t,e);return this.scene.add(n),n}_line(t,e){const n=new Bt().setFromPoints(t),i=new In({color:16777215,transparent:!0,opacity:e,blending:ie,depthWrite:!1}),s=new Xe(n,i);return this.scene.add(s),s}_stars(){this.starGroups=[];const t=this.M;[{n:t?4e3:11e3,r0:400,r1:800,s0:.3,s1:1.1,sp:1,a:.75},{n:t?1200:2800,r0:200,r1:400,s0:.5,s1:2,sp:1.7,a:.85},{n:t?180:550,r0:70,r1:280,s0:1.2,s1:4.5,sp:2.3,a:.95}].forEach(e=>{const n=new Bt,i=new Float32Array(e.n*3),s=new Float32Array(e.n),a=new Float32Array(e.n);for(let l=0;l<e.n;l++){const h=e.r0+Math.random()*(e.r1-e.r0),u=Math.random()*Math.PI*2,f=Math.acos(2*Math.random()-1);i[l*3]=h*Math.sin(f)*Math.cos(u),i[l*3+1]=h*Math.sin(f)*Math.sin(u),i[l*3+2]=h*Math.cos(f),s[l]=e.s0+Math.random()*(e.s1-e.s0),a[l]=Math.random()*Math.PI*2}n.setAttribute("position",new zt(i,3)),n.setAttribute("aSize",new zt(s,1)),n.setAttribute("aPhase",new zt(a,1));const o=new Jt({uniforms:{uTime:{value:0},uPR:{value:this.PR},uA:{value:e.a},uSp:{value:e.sp}},vertexShader:`attribute float aSize,aPhase;uniform float uTime,uPR,uSp;varying float vT;
                    void main(){vT=.35+.65*abs(sin(uTime*uSp+aPhase));vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(aSize*uPR*vT*(360./-mv.z),0.,12.);}`,fragmentShader:`uniform float uA;varying float vT;
                    void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;float a=(1.-d*2.)*vT*uA;
                    float warm=step(.7,vT);gl_FragColor=vec4(mix(vec3(.75,.82,1.),vec3(1.,.95,.85),warm*.5),a);}`,transparent:!0,depthWrite:!1,blending:ie}),c=this._pts(n,o);this.starGroups.push({pts:c,mat:o})})}_galaxyDisk(){const t=this.M?3500:9e3,e=new Bt,n=new Float32Array(t*3),i=new Float32Array(t);for(let s=0;s<t;s++){const a=s%3,o=Math.random(),c=80+o*580,l=o*Math.PI*4+a*Math.PI*2/3+(Math.random()-.5)*((1-o)*.38+.04)*2;n[s*3]=c*Math.cos(l),n[s*3+1]=(Math.random()-.5)*c*.055,n[s*3+2]=c*Math.sin(l),i[s]=Math.random()}e.setAttribute("position",new zt(n,3)),e.setAttribute("aRand",new zt(i,1)),this.galMat=new Jt({uniforms:{uTime:{value:0},uPR:{value:this.PR}},vertexShader:`attribute float aRand;uniform float uTime,uPR;varying float vR,vRd;
                void main(){vRd=aRand;float r=length(position.xz);
                float angle=atan(position.z,position.x)+uTime*.011/max(r*.006,1.);
                vec3 p=vec3(cos(angle)*r,position.y,sin(angle)*r);vR=r;
                vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
                gl_PointSize=clamp((.35+aRand*1.1)*(1.-r/620.)*uPR*230./-mv.z,0.,5.);}`,fragmentShader:`varying float vR,vRd;
                void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;
                float a=(1.-d*2.)*(1.-vR/620.)*(.2+vRd*.38);
                gl_FragColor=vec4(vec3(.78+vRd*.22),a);}`,transparent:!0,depthWrite:!1,blending:ie}),this.galDisk=this._pts(e,this.galMat)}_nebulaDust(){const t=this.M?80:200,e=new Bt,n=new Float32Array(t*3),i=new Float32Array(t);for(let s=0;s<t;s++){const a=180+Math.random()*480,o=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1);n[s*3]=a*Math.sin(c)*Math.cos(o),n[s*3+1]=a*Math.sin(c)*Math.sin(o)*.4,n[s*3+2]=a*Math.cos(c),i[s]=80+Math.random()*140}e.setAttribute("position",new zt(n,3)),e.setAttribute("aSize",new zt(i,1)),this.nebMat=new Jt({uniforms:{uPR:{value:this.PR}},vertexShader:"attribute float aSize;uniform float uPR;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(aSize*uPR*(700./-mv.z),0.,220.);}",fragmentShader:"void main(){vec2 uv=gl_PointCoord-.5;float d=length(uv);if(d>.5)discard;float a=smoothstep(.5,0.,d)*.045;gl_FragColor=vec4(vec3(.85),a);}",transparent:!0,depthWrite:!1,blending:ie}),this.nebPts=this._pts(e,this.nebMat)}_cosmicDust(){const t=this.M?1800:4500,e=new Bt,n=new Float32Array(t*3),i=new Float32Array(t);for(let s=0;s<t;s++){const a=20+Math.random()*300,o=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1);n[s*3]=a*Math.sin(c)*Math.cos(o),n[s*3+1]=a*Math.sin(c)*Math.sin(o),n[s*3+2]=a*Math.cos(c),i[s]=Math.random()}e.setAttribute("position",new zt(n,3)),e.setAttribute("aRand",new zt(i,1)),this.dustMat=new Jt({uniforms:{uTime:{value:0},uPR:{value:this.PR}},vertexShader:`attribute float aRand;uniform float uTime,uPR;
                void main(){vec3 p=position;p.y+=sin(uTime*aRand*.4+aRand*6.28)*.85;p.x+=cos(uTime*aRand*.3+aRand*3.14)*.5;
                vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
                gl_PointSize=clamp((.6+aRand*1.3)*uPR*(160./-mv.z),0.,7.);}`,fragmentShader:"void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;gl_FragColor=vec4(vec3(.78),(1.-d*2.)*.14);}",transparent:!0,depthWrite:!1,blending:ie}),this.dustPts=this._pts(e,this.dustMat)}_pulsars(){this.pGroup=new Ae,this.scene.add(this.pGroup),[{p:new L(300,80,-390),ph:0},{p:new L(-430,-60,195),ph:2.1}].forEach(({p:t,ph:e})=>{const n=new Jt({uniforms:{uTime:{value:0},uPh:{value:e}},vertexShader:"attribute float aT;varying float vT;void main(){vT=aT;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime,uPh;varying float vT;void main(){float pulse=pow(abs(sin(uTime*3.+uPh)),10.)*1.5;gl_FragColor=vec4(vec3(1.),(1.-vT)*.065*pulse);}",transparent:!0,depthWrite:!1,blending:ie});[-1,1].forEach(a=>{const o=[],c=new L(a,.04*a,.07).normalize();for(let u=0;u<=50;u++)o.push(t.clone().addScaledVector(c,u/50*580));const l=new Bt().setFromPoints(o),h=new Float32Array(51);for(let u=0;u<=50;u++)h[u]=u/50;l.setAttribute("aT",new zt(h,1)),this.pGroup.add(new Xe(l,n))});const i=new Jt({uniforms:{uTime:{value:0},uPh:{value:e}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime,uPh;void main(){float p=pow(abs(sin(uTime*3.+uPh)),4.);gl_FragColor=vec4(vec3(1.),p*.45);}",transparent:!0,blending:ie,depthWrite:!1}),s=new ye(new cn(1.4,8,8),i);s.position.copy(t),this.pGroup.add(s),this.pulsarMats.push({mat:n,dm:i})})}_godRays(){this.gRGroup=new Ae,this.scene.add(this.gRGroup);for(let t=0;t<12;t++){const e=t/12*Math.PI*2,n=(Math.random()-.5)*.18,i=260+Math.random()*160;this._line([new L(0,0,0),new L(Math.cos(e+n)*i,(Math.random()-.5)*50,Math.sin(e+n)*i)],.007+Math.random()*.009)}for(let t=0;t<4;t++){const e=(Math.random()-.5)*80,n=(Math.random()-.5)*80;this._line([new L(e,-200,n),new L(e,200,n)],.006)}}_aurora(){this.aGroup=new Ae,this.scene.add(this.aGroup),this.aRings=[],[{r:205,n:270,op:.05,rx:.3,rz:.1,s:{x:14e-5,y:2e-4,z:1e-4}},{r:290,n:340,op:.038,rx:1.1,rz:.4,s:{x:8e-5,y:13e-5,z:2e-4}},{r:368,n:420,op:.045,rx:.7,rz:1.2,s:{x:2e-4,y:1e-4,z:5e-5}},{r:445,n:500,op:.026,rx:1.5,rz:.8,s:{x:1e-4,y:8e-5,z:17e-5}},{r:528,n:580,op:.02,rx:.4,rz:.6,s:{x:11e-5,y:16e-5,z:7e-5}}].forEach(t=>{const e=[];for(let s=0;s<=t.n;s++)e.push(new L(Math.cos(s/t.n*Math.PI*2)*t.r,0,Math.sin(s/t.n*Math.PI*2)*t.r));const n=new In({color:16777215,transparent:!0,opacity:t.op,blending:ie,depthWrite:!1}),i=new Xe(new Bt().setFromPoints(e),n);i.rotation.x=t.rx,i.rotation.z=t.rz,i.userData.s=t.s,this.aGroup.add(i),this.aRings.push(i)})}_darkMatterWeb(){const t=this.M?30:60,e=[];for(let a=0;a<t;a++){const o=100+Math.random()*450,c=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1);e.push(new L(o*Math.sin(l)*Math.cos(c),o*Math.sin(l)*Math.sin(c),o*Math.cos(l)))}const n=[];if(e.forEach((a,o)=>{[...e].sort((l,h)=>a.distanceTo(l)-a.distanceTo(h)).slice(1,4).forEach(l=>{a.distanceTo(l)<220&&(n.push(a),n.push(l))})}),!n.length)return;const i=new Bt().setFromPoints(n),s=new In({color:16777215,transparent:!0,opacity:.015,blending:ie,depthWrite:!1});this.dmWeb=new Vd(i,s),this.scene.add(this.dmWeb)}animateColor(t){}resetColor(){}update(){const t=this.experience.time.elapsed;this.starGroups.forEach((e,n)=>{e.mat.uniforms.uTime.value=t,e.pts.rotation.y=t*(.0011-n*3e-4),e.pts.rotation.x=t*18e-5}),this.galMat&&(this.galMat.uniforms.uTime.value=t),this.nebPts&&(this.nebPts.rotation.y=t*.003),this.dustMat&&(this.dustMat.uniforms.uTime.value=t,this.dustPts.rotation.y=-t*.0018),this.gRGroup&&(this.gRGroup.rotation.y=t*.005),this.pulsarMats.forEach(e=>{e.mat.uniforms.uTime.value=t,e.dm.uniforms.uTime.value=t}),this.pGroup&&(this.pGroup.rotation.y=t*.032),this.aRings.forEach(e=>{e.rotation.x+=e.userData.s.x,e.rotation.y+=e.userData.s.y,e.rotation.z+=e.userData.s.z}),this.dmWeb&&(this.dmWeb.rotation.y=t*8e-4)}}const Hh=[{type:"about",kicker:"Profil",title:"Tentang Saya",desc:"As the founder of Archipelago Dynamics, I am dedicated to bridging Indonesia's vast potential with the global market. Our journey began in international trade, exporting premium local commodities and importing cutting-edge technology. This experience revealed a critical need for digital efficiency, leading to the creation of our IT Solutions division, which now empowers businesses with transformative software and enterprise architecture. Today, we continue to innovate across sectors, driven by a core mission to build synergistic ventures that pioneer the future.",exp:`-Founder & Chief Visionary Officer, Archipelago Dynamics (2023 - Present)
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
Support for curated brand onboarding`,image:"https://placehold.co/1200x800/000000/FFFFFF?text=NAS+System",tags:["ReactJS","Node.JS","MongoDB","Midtrans","AWS"]},{certList:[{title:"Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/L4PQGL832ZO1"},{title:"Modernize Infrastructure and Applications with Google Cloud",issuer:"Google Cloud",link:"https://www.simplilearn.com/free-google-cloud-application-modernization-course-skillup"},{title:"DevOps 101: What is DevOps?",issuer:"Coursera / Partner",link:"https://www.simplilearn.com/learn-devops-basics-free-skillup"},{title:"Belajar Dasar Pemrograman JavaScript",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/81P2G9208POY"},{title:"Belajar Dasar Pemrograman Web",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/1OP85Y9Y2PQK"},{title:"Memulai Pemrograman dengan Kotlin",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/GRX52D7M2X0M"},{title:"Memulai Pemrograman Dengan Java",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/N9ZO7JL1RZG5"},{title:"Get Started with Figma",issuer:"Coursera / Partner",link:"https://www.coursera.org/account/accomplishments/verify/PN928E8E8CYZ"},{title:"EF SET English Certificate (C2 Proficient)",issuer:"EF SET",link:"https://cert.efset.org/en/pc7evu"},{title:"Fortinet Network Security Expert Level 1: Certified Associate",issuer:"Fortinet",link:"https://drive.google.com/file/d/1E7WEm9of_UYBcwoumWJSLOmSay7MJL_X/view"},{title:"Fortinet Network Security Expert Level 2: Certified Associate",issuer:"Fortinet",link:"https://drive.google.com/file/d/12hM30SPq1IihwbVdiUYBSc4ljXFKCuPJ/view"}]}],ia=[{title:"Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/L4PQGL832ZO1"},{title:"Modernize Infrastructure and Applications with Google Cloud",issuer:"Google Cloud",link:"https://www.simplilearn.com/free-google-cloud-application-modernization-course-skillup"},{title:"DevOps 101: What is DevOps?",issuer:"Coursera / Partner",link:"https://www.simplilearn.com/learn-devops-basics-free-skillup"},{title:"Belajar Dasar Pemrograman JavaScript",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/81P2G9208POY"},{title:"Belajar Dasar Pemrograman Web",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/1OP85Y9Y2PQK"},{title:"Memulai Pemrograman dengan Kotlin",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/GRX52D7M2X0M"},{title:"Memulai Pemrograman Dengan Java",issuer:"Dicoding Indonesia",link:"https://www.dicoding.com/certificates/N9ZO7JL1RZG5"},{title:"Get Started with Figma",issuer:"Coursera / Partner",link:"https://www.coursera.org/account/accomplishments/verify/PN928E8E8CYZ"},{title:"EF SET English Certificate (C2 Proficient)",issuer:"EF SET",link:"https://cert.efset.org/en/pc7evu"},{title:"Fortinet Network Security Expert Level 1: Certified Associate",issuer:"Fortinet",link:"https://drive.google.com/file/d/1E7WEm9of_UYBcwoumWJSLOmSay7MJL_X/view"},{title:"Fortinet Network Security Expert Level 2: Certified Associate",issuer:"Fortinet",link:"https://drive.google.com/file/d/12hM30SPq1IihwbVdiUYBSc4ljXFKCuPJ/view"}];class Nv{constructor(){this.experience=new Wn,this.scene=this.experience.scene,this.M=this.experience.isMobile,this.nodes=[],this.traffic=[],this.shots=[],this.comets=[],this.nextShot=1.5,this.nextComet=7,this.nodeGroup=new Ae,this.scene.add(this.nodeGroup),this._lights(),this.background=new Uv,this._nodes(),this._web(),this._asteroids(),this._cosmicObjects(),this._supernova(),this._shootPool(),this._touchSetup(),this.isPaused=!1,this._tm={x:0,y:0},this._sm={x:0,y:0},window.addEventListener("mousemove",t=>{this._tm.x=t.clientX/window.innerWidth-.5,this._tm.y=t.clientY/window.innerHeight-.5})}_lights(){this.scene.add(new op(394768,.5));const t=new Yc(11058943,2);t.position.set(110,90,75),this.scene.add(t);const e=new Yc(16767136,.28);e.position.set(-90,-35,-70),this.scene.add(e),this.coreLight=new to(16777215,4.2,310),this.coreLight.position.set(0,0,0),this.scene.add(this.coreLight);const n=new to(16777215,.6,180);n.position.set(90,25,70),this.scene.add(n);const i=new to(16777215,.5,180);i.position.set(-75,-18,-55),this.scene.add(i)}_nodes(){const t={type:"certification",title:"Sertifikasi",kicker:"Professional",desc:"Kumpulan lisensi dan sertifikasi profesional.",image:"https://placehold.co/800x400/050510/ffffff?text=Certifications",certList:ia},e=Hh.find(s=>s.type==="about"),n=Hh.filter(s=>s.type!=="about"&&!s.certList),i=[e,t,...n];i.forEach((s,a)=>{const o=Math.acos(-1+2*a/i.length),c=Math.sqrt(i.length*Math.PI)*o,l=this.M?36:46,h=new L().setFromSphericalCoords(l,o,c),u=new Fv(s,h);u.originalPos=h.clone(),this.nodes.push(u),this.nodeGroup.add(u.group)})}_web(){this.webGroup=new Ae,this.nodeGroup.add(this.webGroup),this.webMat=new Jt({uniforms:{uTime:{value:0}},vertexShader:"attribute float aP;varying float vP;void main(){vP=aP;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float uTime;varying float vP;
                void main(){
                    float f1=fract(vP*2.8-uTime*.33);float f2=fract(vP*2.8-uTime*.33-.35);
                    float b=smoothstep(0.,.065,f1)*smoothstep(.22,.08,f1)+smoothstep(0.,.065,f2)*smoothstep(.22,.08,f2)*.6;
                    gl_FragColor=vec4(vec3(.78+b*.22),.033+b*.28);
                }`,transparent:!0,depthWrite:!1,blending:ie});const t=new cn(.045,5,5),e=new mr({color:16777215,transparent:!0,opacity:.78,blending:ie,depthWrite:!1,depthTest:!1});this.nodes.forEach((n,i)=>{this.nodes.map((a,o)=>({d:n.group.position.distanceTo(a.group.position),n:a,j:o})).filter(a=>a.j!==i).sort((a,o)=>a.d-o.d).slice(0,3).forEach(({n:a})=>{const o=n.group.position,c=a.group.position,l=new L().addVectors(o,c).multiplyScalar(.5).add(new L((Math.random()-.5)*9,(Math.random()-.5)*9,(Math.random()-.5)*9)),h=new jd(o,l,c),u=h.getPoints(68),f=new Bt().setFromPoints(u),d=new Float32Array(u.length);u.forEach((g,_)=>d[_]=_/(u.length-1)),f.setAttribute("aP",new zt(d,1)),this.webGroup.add(new Xe(f,this.webMat));for(let g=0;g<2+Math.floor(Math.random()*2);g++){const _=new ye(t,e.clone());this.nodeGroup.add(_),this.traffic.push({pk:_,curve:h,spd:.003+Math.random()*.008,progress:Math.random()})}})})}_asteroids(){[{r:68,sp:8,n:this.M?180:460,inc:.12,spd:.011},{r:100,sp:10,n:this.M?280:650,inc:.36,spd:.007},{r:140,sp:7,n:this.M?130:340,inc:1.1,spd:.004}].forEach(t=>{const e=new Bt,n=new Float32Array(t.n*3),i=new Float32Array(t.n),s=new Float32Array(t.n);for(let o=0;o<t.n;o++){const c=t.r+(Math.random()-.5)*t.sp,l=Math.random()*Math.PI*2;n[o*3]=c*Math.cos(l),n[o*3+1]=(Math.random()-.5)*t.sp*.22,n[o*3+2]=c*Math.sin(l),i[o]=.35+Math.random()*1.5,s[o]=Math.random()}e.setAttribute("position",new zt(n,3)),e.setAttribute("aSize",new zt(i,1)),e.setAttribute("aRand",new zt(s,1));const a=new Jt({uniforms:{uTime:{value:0},uSpd:{value:t.spd},uPR:{value:Math.min(this.experience.sizes.pixelRatio,2)},uInc:{value:t.inc}},vertexShader:`attribute float aSize,aRand;uniform float uTime,uSpd,uPR,uInc;varying float vR;
                    void main(){vR=aRand;float r=length(position.xz);
                    float angle=atan(position.z,position.x)+uTime*uSpd*(1.+aRand*.22);
                    float cI=cos(uInc),sI=sin(uInc);
                    vec3 p=vec3(cos(angle)*r,position.y*cI-sin(angle)*r*sI,sin(angle)*r*cI+position.y*sI);
                    p.y+=sin(uTime*aRand*.38)*aRand*.28;
                    vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
                    gl_PointSize=clamp(aSize*uPR*(265./-mv.z),0.,6.);}`,fragmentShader:"varying float vR;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;gl_FragColor=vec4(vec3(.5+vR*.38),(1.-d*2.)*.38);}",transparent:!0,depthWrite:!1,blending:ie});this.scene.add(new jr(e,a)),this._bMats||(this._bMats=[]),this._bMats.push(a)})}_cosmicObjects(){this.cosmicGroup=new Ae,this.scene.add(this.cosmicGroup),this.cosmicMats=[];const t=new L(180,20,-120),e=new Ae;e.position.copy(t),this.bhMat=new Jt({uniforms:{uTime:{value:0}},vertexShader:`attribute float aAngle,aRad;uniform float uTime;varying float vR,vA;
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
                }`,transparent:!0,depthWrite:!1,blending:ie}),this.cosmicMats.push(this.bhMat);const n=new Bt,i=[],s=[];for(let w=8;w<=28;w+=.18){const C=Math.floor(120+w*8);for(let x=0;x<C;x++){const S=x/C*Math.PI*2;i.push(S),s.push(w)}}const a=new Float32Array(i.length*3);i.forEach((w,C)=>{a[C*3]=Math.cos(w)*s[C],a[C*3+1]=0,a[C*3+2]=Math.sin(w)*s[C]}),n.setAttribute("position",new zt(a,3)),n.setAttribute("aAngle",new zt(new Float32Array(i),1)),n.setAttribute("aRad",new zt(new Float32Array(s),1));const o=new jr(n,this.bhMat);o.rotation.x=Math.PI*.12,e.add(o);const c=new ye(new cn(7,32,32),new mr({color:0,depthWrite:!0}));e.add(c),this._ringLine(e,10.5,0,Math.PI*.12,.08);for(let w=0;w<6;w++){const C=[];for(let S=0;S<=40;S++){const P=S/40,O=P*Math.PI,U=12+Math.sin(O)*8*(1+w*.5),H=w%2?1:-1;C.push(new L(Math.cos(O+w*.4)*U,H*(4+w*1.5)*Math.sin(O),Math.sin(O+w*.4)*U*(.2+w*.08)))}const x=new In({color:16777215,transparent:!0,opacity:.06-w*.008,blending:ie,depthWrite:!1});e.add(new Xe(new Bt().setFromPoints(C),x))}this.cosmicGroup.add(e),this.bhGroup=e;const l=new L(-160,30,140),h=new Ae;h.position.copy(l),this.nsMat=new Jt({uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vN,vVP;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vVP=-mv.xyz;gl_Position=projectionMatrix*mv;}",fragmentShader:`uniform float uTime;varying vec3 vN,vVP;
                void main(){
                    float pulse=.85+.15*sin(uTime*30.); // rapid spin flicker
                    float diff=max(dot(vN,normalize(vec3(1.,.5,.5))),0.);
                    float rim=pow(1.-abs(dot(normalize(vVP),vN)),2.5)*.8;
                    float lit=(diff*.8+.2+rim)*pulse;
                    gl_FragColor=vec4(vec3(lit),1.);
                }`}),this.cosmicMats.push(this.nsMat),h.add(new ye(new cn(3.5,32,32),this.nsMat));for(let w=0;w<8;w++){const C=w/8*Math.PI*2,x=[];for(let P=0;P<=30;P++){const O=P/30,U=O*Math.PI,H=3.8+Math.sin(U)*12;x.push(new L(Math.cos(C)*H*Math.sin(U),H*Math.cos(U)*1.5,Math.sin(C)*H*Math.sin(U)))}const S=new In({color:16777215,transparent:!0,opacity:.08,blending:ie,depthWrite:!1});h.add(new Xe(new Bt().setFromPoints(x),S))}this.nsJetMat=new Jt({uniforms:{uTime:{value:0}},vertexShader:"attribute float aT;varying float vT;void main(){vT=aT;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime;varying float vT;void main(){float p=pow(abs(sin(uTime*30.)),.5);float a=(1.-vT)*.25*p;gl_FragColor=vec4(vec3(1.),a);}",transparent:!0,depthWrite:!1,blending:ie}),this.cosmicMats.push(this.nsJetMat),[-1,1].forEach(w=>{const C=[],x=[];for(let P=0;P<=30;P++)C.push(new L(0,w*P*1.8,0)),x.push(P/30);const S=new Bt().setFromPoints(C);S.setAttribute("aT",new zt(new Float32Array(x),1)),h.add(new Xe(S,this.nsJetMat))}),h.userData.rotSpd=.15,this.cosmicGroup.add(h),this.nsGroup=h;const u=new L(-250,-40,-200),f=new Ae;f.position.copy(u),this.qMat=new Jt({uniforms:{uTime:{value:0}},vertexShader:"attribute float aT;varying float vT;void main(){vT=aT;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime;varying float vT;void main(){float p=abs(sin(uTime*.8+vT*3.))*.5+.5;float a=(1.-vT)*(.18+p*.12);gl_FragColor=vec4(vec3(1.),a);}",transparent:!0,depthWrite:!1,blending:ie}),this.cosmicMats.push(this.qMat),[-1,1].forEach(w=>{const x=[],S=[];for(let O=0;O<=60;O++){const U=O/60,H=U*3*w;x.push(new L((Math.random()-.5)*H*.5,w*O*3.5,(Math.random()-.5)*H*.5)),S.push(U)}const P=new Bt().setFromPoints(x);P.setAttribute("aT",new zt(new Float32Array(S),1)),f.add(new Xe(P,this.qMat))}),f.add(new ye(new cn(4,16,16),new Jt({uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vN;void main(){vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uTime;varying vec3 vN;void main(){float p=.85+.15*sin(uTime*.9);float rim=pow(1.-abs(dot(vN,vec3(0,0,1))),2.)*p;gl_FragColor=vec4(vec3(rim+.2),1.);}"}))),this.cosmicGroup.add(f),this.qGroup=f;const d=new L(220,-35,160),g=new Ae;g.position.copy(d),g.add(new ye(new cn(5,12,12),new mr({color:16777215})));const _=new In({color:16777215,transparent:!0,opacity:.15,blending:ie,depthWrite:!1});for(let w=-3;w<=3;w++){const C=w*4.5,x=Math.sqrt(Math.max(0,324-C*C)),S=[],P=w===0?60:Math.floor(40+Math.abs(w)*5);for(let O=0;O<=P;O++){if(Math.random()<.12&&O>0)continue;const U=O/P*Math.PI*2;S.push(new L(Math.cos(U)*x,C,Math.sin(U)*x))}S.length>1&&g.add(new Xe(new Bt().setFromPoints(S),_))}for(let w=0;w<12;w++){const C=w/12*Math.PI*2,x=[];for(let S=0;S<=20;S++){const P=S/20*Math.PI;x.push(new L(Math.sin(P)*Math.cos(C)*18,Math.cos(P)*18,Math.sin(P)*Math.sin(C)*18))}Math.random()>.35&&g.add(new Xe(new Bt().setFromPoints(x),_))}g.userData.rotSpd=.002,this.cosmicGroup.add(g),this.dsGroup=g;const m=new L(-200,15,220),p=new Ae;p.position.copy(m),this.whMat=new Jt({uniforms:{uTime:{value:0}},vertexShader:`attribute float aA,aR;uniform float uTime;varying float vR,vA;
                void main(){vR=aR;vA=aA;float a=aA+uTime*(-.8/max(aR*.12,1.));vec3 p=vec3(cos(a)*aR,0,sin(a)*aR);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,fragmentShader:`uniform float uTime;varying float vR,vA;
                void main(){
                    float throat=smoothstep(14.,5.,vR)*smoothstep(4.,10.,vR);
                    float spin=abs(sin(vA*4.+uTime*2.))*.4+.6;
                    float a=throat*spin*.32;
                    gl_FragColor=vec4(vec3(1.),a);
                }`,transparent:!0,depthWrite:!1,blending:ie}),this.cosmicMats.push(this.whMat);const M=[],b=[],y=[];for(let w=5;w<=14;w+=.15){const C=Math.floor(80+w*10);for(let x=0;x<C;x++){const S=x/C*Math.PI*2;M.push(S),b.push(w),y.push(Math.cos(S)*w,0,Math.sin(S)*w)}}const E=new Bt;E.setAttribute("position",new zt(new Float32Array(y),3)),E.setAttribute("aA",new zt(new Float32Array(M),1)),E.setAttribute("aR",new zt(new Float32Array(b),1));const A=new jr(E,this.whMat);A.rotation.x=Math.PI*.08,p.add(A),p.add(new ye(new cn(4.5,16,16),new mr({color:0,depthWrite:!0}))),this.cosmicGroup.add(p),this.whGroup=p}_ringLine(t,e,n,i,s){const a=[];for(let l=0;l<=80;l++)a.push(new L(Math.cos(l/80*Math.PI*2)*e,0,Math.sin(l/80*Math.PI*2)*e));const o=new In({color:16777215,transparent:!0,opacity:s,blending:ie,depthWrite:!1}),c=new Xe(new Bt().setFromPoints(a),o);return c.rotation.x=n,c.rotation.y=i,t.add(c),c}_supernova(){const t=new L(120,-55,180);this.snGroup=new Ae,this.snGroup.position.copy(t),this.snRadius=0,this.snMaxRadius=35,this.snExpanding=!0;const e=this.M?300:700,n=new Bt,i=new Float32Array(e*3),s=new Float32Array(e);for(let a=0;a<e;a++){const o=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1);i[a*3]=Math.sin(c)*Math.cos(o),i[a*3+1]=Math.sin(c)*Math.sin(o),i[a*3+2]=Math.cos(c),s[a]=Math.random()}n.setAttribute("position",new zt(i,3)),n.setAttribute("aRand",new zt(s,1)),this.snMat=new Jt({uniforms:{uTime:{value:0},uRadius:{value:0},uPR:{value:Math.min(this.experience.sizes.pixelRatio,2)}},vertexShader:`attribute float aRand;uniform float uTime,uRadius,uPR;varying float vR;
                void main(){
                    vR=aRand;float r=uRadius*(1.+aRand*.15);
                    vec3 p=normalize(position)*r;
                    p+=normalize(position)*(sin(uTime*aRand*2.+aRand*6.28)*.8);
                    vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
                    gl_PointSize=clamp((1.+aRand*1.8)*uPR*(240./-mv.z),0.,8.);
                }`,fragmentShader:`uniform float uRadius;varying float vR;
                void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;
                float fade=1.-uRadius/35.;
                float a=(1.-d*2.)*fade*(.25+vR*.35);gl_FragColor=vec4(vec3(.9+vR*.1),a);}`,transparent:!0,depthWrite:!1,blending:ie}),this.snPts=new jr(n,this.snMat),this.snGroup.add(this.snPts),this.scene.add(this.snGroup)}_shootPool(){this.shotGroup=new Ae,this.cometGroup=new Ae,this.scene.add(this.shotGroup),this.scene.add(this.cometGroup)}_spawnShot(){const t=new L((Math.random()-.5)*500,100+Math.random()*180,(Math.random()-.5)*500),e=new L((Math.random()-.5)*1.1,-.85-Math.random()*.5,(Math.random()-.5)*1.1).normalize(),n=new Bt().setFromPoints([t,t.clone().add(e.clone().multiplyScalar(-(16+Math.random()*32)))]),i=new In({color:16777215,transparent:!0,opacity:1,blending:ie,depthWrite:!1}),s=new Xe(n,i);this.shotGroup.add(s),this.shots.push({line:s,d:e,pos:t.clone(),spd:5+Math.random()*5,life:0,maxLife:.55+Math.random()*.4,mat:i})}_spawnComet(){const t=new L((Math.random()-.5)*580,155+Math.random()*110,(Math.random()-.5)*580),e=new L((Math.random()-.5)*.7,-.22-Math.random()*.28,(Math.random()-.5)*.7).normalize(),n=[];for(let c=0;c<=22;c++)n.push(t.clone().add(e.clone().multiplyScalar(-c*3.8)));const i=new Bt().setFromPoints(n),s=new Float32Array(23);n.forEach((c,l)=>s[l]=l/22),i.setAttribute("aT",new zt(s,1));const a=new Jt({uniforms:{uLife:{value:0}},vertexShader:"attribute float aT;varying float vT;void main(){vT=aT;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uLife;varying float vT;void main(){float a=(1.-vT)*(1.-uLife)*.55;gl_FragColor=vec4(vec3(.9,.96,1.),a);}",transparent:!0,depthWrite:!1,blending:ie}),o=new Xe(i,a);this.cometGroup.add(o),this.comets.push({line:o,d:e,pos:t.clone(),spd:1.1+Math.random()*1.1,life:0,maxLife:3.5+Math.random()*2,mat:a})}_touchSetup(){this.M&&window.addEventListener("touchend",t=>{if(t.changedTouches.length!==1)return;const e=t.changedTouches[0];this.experience.raycaster&&(this.experience.raycaster.mouse.x=e.clientX/window.innerWidth*2-1,this.experience.raycaster.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.experience.raycaster.onClick())},{passive:!0})}pauseRotation(){this.isPaused=!0}resumeRotation(){this.isPaused=!1}update(){const t=this.experience.time.elapsed,e=this.experience.time.delta/1e3;this.background.update(),this.coreLight.intensity=3.3+Math.sin(t*1.25)*.9,this.webMat&&(this.webMat.uniforms.uTime.value=t),this._bMats&&this._bMats.forEach(i=>i.uniforms.uTime.value=t),this.bhMat&&(this.bhMat.uniforms.uTime.value=t),this.nsMat&&(this.nsMat.uniforms.uTime.value=t,this.nsJetMat.uniforms.uTime.value=t),this.nsGroup&&(this.nsGroup.rotation.y=t*this.nsGroup.userData.rotSpd),this.qMat&&(this.qMat.uniforms.uTime.value=t),this.dsGroup&&(this.dsGroup.rotation.y=t*this.dsGroup.userData.rotSpd),this.whMat&&(this.whMat.uniforms.uTime.value=t),this.snMat&&(this.snMat.uniforms.uTime.value=t,this.snExpanding&&(this.snRadius+=e*.8,this.snRadius>=this.snMaxRadius&&(this.snRadius=0),this.snMat.uniforms.uRadius.value=this.snRadius,this.snPts.rotation.y=t*.05,this.snPts.rotation.x=t*.03)),this.nodes.forEach(i=>i.update()),this._sm.x+=(this._tm.x-this._sm.x)*.05,this._sm.y+=(this._tm.y-this._sm.y)*.05;const n=this.experience.raycaster?.currentIntersect;!this.isPaused&&!n&&(this.nodeGroup.rotation.y+=42e-5,this.nodeGroup.rotation.x+=62e-6),this.traffic.forEach(i=>{i.progress+=i.spd,i.progress>1&&(i.progress=0),i.pk.position.copy(i.curve.getPoint(i.progress)),i.pk.scale.setScalar(.7+Math.sin(t*9+i.progress*20)*.45)}),t>this.nextShot&&(this._spawnShot(),this.nextShot=t+.65+Math.random()*2);for(let i=this.shots.length-1;i>=0;i--){const s=this.shots[i];s.life+=e,s.pos.addScaledVector(s.d,s.spd);const a=s.line.geometry.attributes.position;a.setXYZ(0,s.pos.x,s.pos.y,s.pos.z),a.needsUpdate=!0,s.mat.opacity=Math.max(0,1-s.life/s.maxLife),s.life>=s.maxLife&&(this.shotGroup.remove(s.line),s.line.geometry.dispose(),this.shots.splice(i,1))}t>this.nextComet&&(this._spawnComet(),this.nextComet=t+9+Math.random()*13);for(let i=this.comets.length-1;i>=0;i--){const s=this.comets[i];s.life+=e,s.pos.addScaledVector(s.d,s.spd);const a=s.line.geometry.attributes.position;for(let o=0;o<=22;o++){const c=s.pos.clone().add(s.d.clone().multiplyScalar(-o*3.8));a.setXYZ(o,c.x,c.y,c.z)}a.needsUpdate=!0,s.mat.uniforms.uLife.value=s.life/s.maxLife,s.life>=s.maxLife&&(this.cometGroup.remove(s.line),s.line.geometry.dispose(),this.comets.splice(i,1))}}}class Ov{constructor(){this.experience=new Wn,this.scene=this.experience.scene,this.camera=this.experience.camera,this.world=this.experience.world,this.instance=new fp,this.mouse=new Vt,this.currentIntersect=null,this.rawMouse={x:0,y:0},window.addEventListener("mousemove",t=>this.onMouseMove(t)),window.addEventListener("click",()=>this.onClick())}onMouseMove(t){this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1,this.rawMouse.x=t.clientX,this.rawMouse.y=t.clientY}onClick(){this.currentIntersect&&this.currentIntersect.data&&(this.experience.audio&&this.experience.audio.play("click"),this.experience.overlay.show(this.currentIntersect.data))}update(){if(this.experience.isModalOpen){this.currentIntersect&&(this.currentIntersect.onMouseLeave(),this.experience.cursor&&this.experience.cursor.leave(),this.currentIntersect=null);return}this.instance.setFromCamera(this.mouse,this.camera.instance);const t=this.experience.world;if(t&&t.nodes&&t.nodeGroup){const e=[];t.nodes.forEach(i=>e.push(i.group));const n=this.instance.intersectObjects(e,!0);if(n.length>0){const i=n[0].object;let s=null;i.parent&&i.parent.userData.nodeInstance&&(s=i.parent.userData.nodeInstance),this.currentIntersect===null&&(s&&s.onMouseEnter(),this.experience.cursor&&this.experience.cursor.enter()),this.currentIntersect=s}else this.currentIntersect&&(this.currentIntersect.onMouseLeave(),this.experience.cursor&&this.experience.cursor.leave()),this.currentIntersect=null}}}class Bv{constructor(){this.experience=new Wn,this.overlay=document.getElementById("detail-panel"),this.closeBtn=document.getElementById("close-btn"),this.image=document.getElementById("panel-image"),this.kicker=document.getElementById("panel-kicker"),this.title=document.getElementById("panel-title"),this.desc=document.getElementById("panel-desc"),this.dynamicContent=document.getElementById("panel-dynamic-content"),this.link=document.getElementById("panel-link"),this.closeBtn.addEventListener("click",()=>this.hide()),this.overlay.addEventListener("click",t=>{t.target===this.overlay&&this.hide()})}createListFromText(t,e){if(!t)return null;const n=document.createElement("div");n.style.marginTop="20px",n.innerHTML=`<strong style="display:block; font-size:12px; color:#666; margin-bottom:10px; letter-spacing:1px; text-transform:uppercase;">${e}</strong>`;const i=document.createElement("ul");return i.style.listStyle="none",i.style.padding="0",t.split(`
`).forEach(s=>{if(s.trim().length>0){const a=document.createElement("li");a.style.cssText="font-size: 14px; color: #aaa; margin-bottom: 6px; padding-left: 15px; position: relative;",a.innerHTML=`<span style="position: absolute; left: 0; top: 6px; width: 6px; height: 6px; background-color: #00ffcc; border-radius: 50%;"></span>${s.replace(/^-/,"").trim()}`,i.appendChild(a)}}),n.appendChild(i),n}show(t){if(this.experience.isModalOpen=!0,this.image.src=t.image||"https://placehold.co/800x600",this.kicker.textContent=t.kicker||"Showcase",this.title.textContent=t.title||"Untitled",this.desc.textContent=t.desc||"",this.kicker.style.color=t.type==="about"?"#00ffcc":t.type==="project"?"#ff0055":"#fff",this.link.style.display=t.link?"inline-block":"none",t.link&&(this.link.href=t.link),this.dynamicContent.innerHTML="",t.type==="project"&&(t.features&&this.dynamicContent.appendChild(this.createListFromText(t.features,"Features")),t.tags)){const e=document.createElement("div");e.style.marginTop="20px",t.tags.forEach(n=>{const i=document.createElement("span");i.innerText=n,i.style.cssText="background:rgba(255,255,255,0.1); padding:4px 10px; border-radius:15px; font-size:12px; margin-right:5px; border:1px solid #444;",e.appendChild(i)}),this.dynamicContent.appendChild(e)}if(t.type==="about"&&(t.exp&&this.dynamicContent.appendChild(this.createListFromText(t.exp,"Experience")),t.skills&&this.dynamicContent.appendChild(this.createListFromText(t.skills,"Skills")),ia&&ia.length>0)){const e=document.createElement("div");e.innerHTML='<strong style="display:block; font-size:12px; color:#666; margin-bottom:15px; letter-spacing:1px; margin-top:30px;">LICENSES & CERTIFICATIONS</strong>',this.dynamicContent.appendChild(e);const n=document.createElement("div");n.style.cssText="display: grid; gap: 10px;",ia.forEach(i=>{const s=document.createElement("div");s.style.cssText="background: rgba(255,255,255,0.05); padding: 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center;",s.innerHTML=`
                        <div>
                            <div style="color: #fff; font-size: 13px; font-weight: 600;">${i.title}</div>
                            <div style="color: #888; font-size: 11px;">${i.issuer}</div>
                        </div>
                        <a href="${i.link}" target="_blank" style="color: #ffd700; font-size: 10px; border: 1px solid #ffd700; padding: 4px 8px; border-radius: 4px; text-decoration: none;">VERIFY</a>
                    `,n.appendChild(s)}),this.dynamicContent.appendChild(n)}this.overlay.classList.add("visible")}hide(){this.overlay.classList.remove("visible"),this.experience.isModalOpen=!1}}class zv{constructor(t){this.assets=t,this.items={},this.toLoad=this.assets.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.audioLoader=new lp,this.loaders.textureLoader=new rp}startLoading(){if(this.toLoad===0){this.triggerReady&&this.triggerReady();return}for(const t of this.assets)t.type==="audio"?this.loaders.audioLoader.load(t.path,e=>{this.sourceLoaded(t,e)}):t.type==="texture"&&this.loaders.textureLoader.load(t.path,e=>{this.sourceLoaded(t,e)})}sourceLoaded(t,e){this.items[t.name]=e,this.loaded++,this.loaded===this.toLoad&&(console.log("Semua aset siap!"),this.triggerReady&&this.triggerReady())}}const kv=[{name:"bgMusic",type:"audio",path:"assets/mixkit-finding-myself-993.mp3"},{name:"hover",type:"audio",path:"assets/hover.wav"},{name:"click",type:"audio",path:"assets/click.mp3"},{name:"intro",type:"audio",path:"assets/intro.wav"},{name:"outro",type:"audio",path:"assets/outro.wav"}];class Vv{constructor(){this.experience=new Wn,this.camera=this.experience.camera,this.resources=this.experience.resources,this.listener=new up,this.camera.instance.add(this.listener),this.sounds={},this.isMuted=!1,this.setupButton()}setupButton(){this.btn=document.getElementById("audio-btn"),this.btnText=document.getElementById("audio-text"),this.btn&&this.btn.addEventListener("click",()=>this.toggleMute())}setupSounds(){this.bgMusic=new jc(this.listener),this.bgMusic.setBuffer(this.resources.items.bgMusic),this.bgMusic.setLoop(!0),this.bgMusic.setVolume(.3),this.sounds.bg=this.bgMusic,this.createSfx("hover",.5),this.createSfx("click",1),this.createSfx("intro",.8)}createSfx(t,e){const n=new jc(this.listener);n.setBuffer(this.resources.items[t]),n.setVolume(e),this.sounds[t]=n}play(t){this.sounds[t]&&(this.sounds[t].isPlaying&&this.sounds[t].stop(),this.sounds[t].play())}playBg(){this.sounds.bg&&!this.sounds.bg.isPlaying&&this.sounds.bg.play()}toggleMute(){this.isMuted=!this.isMuted,this.isMuted?(this.listener.setMasterVolume(0),this.btn.classList.add("muted"),this.btnText.textContent="OFF"):(this.listener.setMasterVolume(1),this.btn.classList.remove("muted"),this.btnText.textContent="ON")}}class Gv{constructor(){this.experience=new Wn,this.cursorDot=document.createElement("div"),this.cursorDot.className="cursor-dot",this.cursorRing=document.createElement("div"),this.cursorRing.className="cursor-ring",document.body.appendChild(this.cursorDot),document.body.appendChild(this.cursorRing),this.xToDot=$t.quickTo(this.cursorDot,"x",{duration:.7,ease:"power3"}),this.yToDot=$t.quickTo(this.cursorDot,"y",{duration:.7,ease:"power3"}),this.xToRing=$t.quickTo(this.cursorRing,"x",{duration:1.5,ease:"power3.out"}),this.yToRing=$t.quickTo(this.cursorRing,"y",{duration:1.5,ease:"power3.out"});const t=window.innerWidth/2,e=window.innerHeight/2;$t.set(this.cursorDot,{x:t,y:e,xPercent:-50,yPercent:-50}),$t.set(this.cursorRing,{x:t,y:e,xPercent:-50,yPercent:-50}),window.addEventListener("mousemove",n=>{this.xToDot(n.clientX),this.yToDot(n.clientY),this.xToRing(n.clientX),this.yToRing(n.clientY)})}update(){}enter(){$t.to(this.cursorRing,{scale:2,backgroundColor:"rgba(255, 255, 255, 0.15)",borderColor:"#ffffff",borderWidth:"2px",boxShadow:"0 0 20px rgba(255, 255, 255, 0.4)",duration:.4,ease:"back.out(1.7)"}),$t.to(this.cursorDot,{backgroundColor:"#ffffff",scale:1.5,duration:.3})}leave(){$t.to(this.cursorRing,{scale:1,backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"#ffffff",borderWidth:"1px",boxShadow:"0 0 0px rgba(255, 255, 255, 0)",duration:.4,ease:"power3.out"}),$t.to(this.cursorDot,{backgroundColor:"#ffffff",scale:1,duration:.3})}}let go=null;class Wn{constructor(t){if(go)return go;go=this,window.experience=this,this.canvas=t,this.isMobile=window.matchMedia("(hover:none)").matches||window.innerWidth<768,this.sizes=new cx,this.time=new hx,this.scene=new Nd,this.resources=new zv(kv),this.camera=new Cv,this.renderer=new Lv,this.world=new Nv,this.overlay=new Bv,this.cursor=new Gv,this.raycaster=new Ov,this.audio=new Vv,this.isModalOpen=!1,this._loadSim(),this._setupHUD(),this._setupTouchPinch(),this.resources.triggerReady=()=>{const e=document.getElementById("start-btn"),n=document.querySelector(".bar-fill"),i=document.getElementById("loader-status");n&&(n.style.width="100%"),i&&(i.textContent="Universe ready."),setTimeout(()=>{e.textContent=this.isMobile?"// ENTER THE UNIVERSE //":"// ENTER THE VOID //",e.classList.add("active"),e.disabled=!1,e.addEventListener("click",()=>this.startExperience()),this.isMobile&&document.getElementById("preloader").addEventListener("click",s=>{e.classList.contains("active")&&this.startExperience()})},400)},this.sizes.triggerResize=()=>this.resize(),this.time.triggerTick=()=>this.update()}_loadSim(){const t=document.querySelector(".bar-fill");if(!t)return;let e=0;const n=setInterval(()=>{e+=Math.random()*6+1,e>90&&(clearInterval(n),e=90),t.style.width=e+"%"},200)}_setupHUD(){this.hudEl={x:document.getElementById("hud-x"),y:document.getElementById("hud-y"),z:document.getElementById("hud-z"),wrap:document.getElementById("hud-coords")}}_setupTouchPinch(){if(!this.isMobile)return;let t=0;window.addEventListener("touchstart",e=>{e.touches.length===2&&(t=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY))},{passive:!0}),window.addEventListener("touchmove",e=>{if(e.touches.length===2){const n=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY),i=(n-t)*.5,s=this.camera.instance;s.position.z=Math.max(60,Math.min(300,s.position.z-i)),t=n}},{passive:!0})}startExperience(){const t=document.getElementById("preloader");if(this._started)return;this._started=!0,$t.to(t,{opacity:0,duration:1.4,ease:"power3.inOut",onComplete:()=>{t.style.display="none"}}),this.audio.setupSounds(),this.audio.play("intro"),setTimeout(()=>this.audio.playBg(),2800),setTimeout(()=>{this.hudEl.wrap&&this.hudEl.wrap.classList.add("visible")},5e3),setTimeout(()=>{const i=document.getElementById("hint-text");i&&(i.style.display="block",$t.to(i,{opacity:.5,duration:2}))},5500);const e=this.camera.instance,n=this.camera.rig;$t.set(e.position,{z:this.isMobile?1800:2500}),$t.set(e,{fov:110}),e.updateProjectionMatrix(),$t.timeline({delay:.15}).to(e.position,{z:this.isMobile?120:150,duration:4.5,ease:"expo.out"}).to(e,{fov:50,duration:2.8,ease:"power4.out",onUpdate:()=>e.updateProjectionMatrix()},"<0.2").from(n.rotation,{y:-Math.PI*2,duration:5,ease:"power2.out"},"<").from(n.rotation,{z:.5,duration:3.2,ease:"power3.out"},"<0.4")}resize(){this.isMobile=window.innerWidth<768,this.camera.resize(),this.renderer.resize()}update(){if(this.camera.update(),this.world.update(),this.cursor&&this.cursor.update(),this.raycaster&&this.raycaster.update(),this.renderer.update(),this.hudEl?.wrap?.classList.contains("visible")&&this.camera){const t=this.camera.instance.position;this.hudEl.x&&(this.hudEl.x.textContent=`X: ${t.x.toFixed(2)}`),this.hudEl.y&&(this.hudEl.y.textContent=`Y: ${t.y.toFixed(2)}`),this.hudEl.z&&(this.hudEl.z.textContent=`Z: ${t.z.toFixed(2)}`)}}}const Hv=document.querySelector("canvas.webgl");new Wn(Hv);
