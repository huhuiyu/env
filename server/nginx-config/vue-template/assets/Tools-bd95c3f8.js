var E=Object.defineProperty;var L=(b,h,s)=>h in b?E(b,h,{enumerable:!0,configurable:!0,writable:!0,value:s}):b[h]=s;var d=(b,h,s)=>(L(b,typeof h!="symbol"?h+"":h,s),s);import{g as D}from"./index-28d2205f.js";var x={exports:{}};(function(b,h){(function(s){b.exports=s()})(function(s){var u=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function o(a,i){var e=a[0],t=a[1],n=a[2],r=a[3];e+=(t&n|~t&r)+i[0]-680876936|0,e=(e<<7|e>>>25)+t|0,r+=(e&t|~e&n)+i[1]-389564586|0,r=(r<<12|r>>>20)+e|0,n+=(r&e|~r&t)+i[2]+606105819|0,n=(n<<17|n>>>15)+r|0,t+=(n&r|~n&e)+i[3]-1044525330|0,t=(t<<22|t>>>10)+n|0,e+=(t&n|~t&r)+i[4]-176418897|0,e=(e<<7|e>>>25)+t|0,r+=(e&t|~e&n)+i[5]+1200080426|0,r=(r<<12|r>>>20)+e|0,n+=(r&e|~r&t)+i[6]-1473231341|0,n=(n<<17|n>>>15)+r|0,t+=(n&r|~n&e)+i[7]-45705983|0,t=(t<<22|t>>>10)+n|0,e+=(t&n|~t&r)+i[8]+1770035416|0,e=(e<<7|e>>>25)+t|0,r+=(e&t|~e&n)+i[9]-1958414417|0,r=(r<<12|r>>>20)+e|0,n+=(r&e|~r&t)+i[10]-42063|0,n=(n<<17|n>>>15)+r|0,t+=(n&r|~n&e)+i[11]-1990404162|0,t=(t<<22|t>>>10)+n|0,e+=(t&n|~t&r)+i[12]+1804603682|0,e=(e<<7|e>>>25)+t|0,r+=(e&t|~e&n)+i[13]-40341101|0,r=(r<<12|r>>>20)+e|0,n+=(r&e|~r&t)+i[14]-1502002290|0,n=(n<<17|n>>>15)+r|0,t+=(n&r|~n&e)+i[15]+1236535329|0,t=(t<<22|t>>>10)+n|0,e+=(t&r|n&~r)+i[1]-165796510|0,e=(e<<5|e>>>27)+t|0,r+=(e&n|t&~n)+i[6]-1069501632|0,r=(r<<9|r>>>23)+e|0,n+=(r&t|e&~t)+i[11]+643717713|0,n=(n<<14|n>>>18)+r|0,t+=(n&e|r&~e)+i[0]-373897302|0,t=(t<<20|t>>>12)+n|0,e+=(t&r|n&~r)+i[5]-701558691|0,e=(e<<5|e>>>27)+t|0,r+=(e&n|t&~n)+i[10]+38016083|0,r=(r<<9|r>>>23)+e|0,n+=(r&t|e&~t)+i[15]-660478335|0,n=(n<<14|n>>>18)+r|0,t+=(n&e|r&~e)+i[4]-405537848|0,t=(t<<20|t>>>12)+n|0,e+=(t&r|n&~r)+i[9]+568446438|0,e=(e<<5|e>>>27)+t|0,r+=(e&n|t&~n)+i[14]-1019803690|0,r=(r<<9|r>>>23)+e|0,n+=(r&t|e&~t)+i[3]-187363961|0,n=(n<<14|n>>>18)+r|0,t+=(n&e|r&~e)+i[8]+1163531501|0,t=(t<<20|t>>>12)+n|0,e+=(t&r|n&~r)+i[13]-1444681467|0,e=(e<<5|e>>>27)+t|0,r+=(e&n|t&~n)+i[2]-51403784|0,r=(r<<9|r>>>23)+e|0,n+=(r&t|e&~t)+i[7]+1735328473|0,n=(n<<14|n>>>18)+r|0,t+=(n&e|r&~e)+i[12]-1926607734|0,t=(t<<20|t>>>12)+n|0,e+=(t^n^r)+i[5]-378558|0,e=(e<<4|e>>>28)+t|0,r+=(e^t^n)+i[8]-2022574463|0,r=(r<<11|r>>>21)+e|0,n+=(r^e^t)+i[11]+1839030562|0,n=(n<<16|n>>>16)+r|0,t+=(n^r^e)+i[14]-35309556|0,t=(t<<23|t>>>9)+n|0,e+=(t^n^r)+i[1]-1530992060|0,e=(e<<4|e>>>28)+t|0,r+=(e^t^n)+i[4]+1272893353|0,r=(r<<11|r>>>21)+e|0,n+=(r^e^t)+i[7]-155497632|0,n=(n<<16|n>>>16)+r|0,t+=(n^r^e)+i[10]-1094730640|0,t=(t<<23|t>>>9)+n|0,e+=(t^n^r)+i[13]+681279174|0,e=(e<<4|e>>>28)+t|0,r+=(e^t^n)+i[0]-358537222|0,r=(r<<11|r>>>21)+e|0,n+=(r^e^t)+i[3]-722521979|0,n=(n<<16|n>>>16)+r|0,t+=(n^r^e)+i[6]+76029189|0,t=(t<<23|t>>>9)+n|0,e+=(t^n^r)+i[9]-640364487|0,e=(e<<4|e>>>28)+t|0,r+=(e^t^n)+i[12]-421815835|0,r=(r<<11|r>>>21)+e|0,n+=(r^e^t)+i[15]+530742520|0,n=(n<<16|n>>>16)+r|0,t+=(n^r^e)+i[2]-995338651|0,t=(t<<23|t>>>9)+n|0,e+=(n^(t|~r))+i[0]-198630844|0,e=(e<<6|e>>>26)+t|0,r+=(t^(e|~n))+i[7]+1126891415|0,r=(r<<10|r>>>22)+e|0,n+=(e^(r|~t))+i[14]-1416354905|0,n=(n<<15|n>>>17)+r|0,t+=(r^(n|~e))+i[5]-57434055|0,t=(t<<21|t>>>11)+n|0,e+=(n^(t|~r))+i[12]+1700485571|0,e=(e<<6|e>>>26)+t|0,r+=(t^(e|~n))+i[3]-1894986606|0,r=(r<<10|r>>>22)+e|0,n+=(e^(r|~t))+i[10]-1051523|0,n=(n<<15|n>>>17)+r|0,t+=(r^(n|~e))+i[1]-2054922799|0,t=(t<<21|t>>>11)+n|0,e+=(n^(t|~r))+i[8]+1873313359|0,e=(e<<6|e>>>26)+t|0,r+=(t^(e|~n))+i[15]-30611744|0,r=(r<<10|r>>>22)+e|0,n+=(e^(r|~t))+i[6]-1560198380|0,n=(n<<15|n>>>17)+r|0,t+=(r^(n|~e))+i[13]+1309151649|0,t=(t<<21|t>>>11)+n|0,e+=(n^(t|~r))+i[4]-145523070|0,e=(e<<6|e>>>26)+t|0,r+=(t^(e|~n))+i[11]-1120210379|0,r=(r<<10|r>>>22)+e|0,n+=(e^(r|~t))+i[2]+718787259|0,n=(n<<15|n>>>17)+r|0,t+=(r^(n|~e))+i[9]-343485551|0,t=(t<<21|t>>>11)+n|0,a[0]=e+a[0]|0,a[1]=t+a[1]|0,a[2]=n+a[2]|0,a[3]=r+a[3]|0}function p(a){var i=[],e;for(e=0;e<64;e+=4)i[e>>2]=a.charCodeAt(e)+(a.charCodeAt(e+1)<<8)+(a.charCodeAt(e+2)<<16)+(a.charCodeAt(e+3)<<24);return i}function c(a){var i=[],e;for(e=0;e<64;e+=4)i[e>>2]=a[e]+(a[e+1]<<8)+(a[e+2]<<16)+(a[e+3]<<24);return i}function A(a){var i=a.length,e=[1732584193,-271733879,-1732584194,271733878],t,n,r,l,g,m;for(t=64;t<=i;t+=64)o(e,p(a.substring(t-64,t)));for(a=a.substring(t-64),n=a.length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)r[t>>2]|=a.charCodeAt(t)<<(t%4<<3);if(r[t>>2]|=128<<(t%4<<3),t>55)for(o(e,r),t=0;t<16;t+=1)r[t]=0;return l=i*8,l=l.toString(16).match(/(.*?)(.{0,8})$/),g=parseInt(l[2],16),m=parseInt(l[1],16)||0,r[14]=g,r[15]=m,o(e,r),e}function B(a){var i=a.length,e=[1732584193,-271733879,-1732584194,271733878],t,n,r,l,g,m;for(t=64;t<=i;t+=64)o(e,c(a.subarray(t-64,t)));for(a=t-64<i?a.subarray(t-64):new Uint8Array(0),n=a.length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)r[t>>2]|=a[t]<<(t%4<<3);if(r[t>>2]|=128<<(t%4<<3),t>55)for(o(e,r),t=0;t<16;t+=1)r[t]=0;return l=i*8,l=l.toString(16).match(/(.*?)(.{0,8})$/),g=parseInt(l[2],16),m=parseInt(l[1],16)||0,r[14]=g,r[15]=m,o(e,r),e}function S(a){var i="",e;for(e=0;e<4;e+=1)i+=u[a>>e*8+4&15]+u[a>>e*8&15];return i}function y(a){var i;for(i=0;i<a.length;i+=1)a[i]=S(a[i]);return a.join("")}y(A("hello")),typeof ArrayBuffer<"u"&&!ArrayBuffer.prototype.slice&&function(){function a(i,e){return i=i|0||0,i<0?Math.max(i+e,0):Math.min(i,e)}ArrayBuffer.prototype.slice=function(i,e){var t=this.byteLength,n=a(i,t),r=t,l,g,m,v;return e!==s&&(r=a(e,t)),n>r?new ArrayBuffer(0):(l=r-n,g=new ArrayBuffer(l),m=new Uint8Array(g),v=new Uint8Array(this,n,l),m.set(v),g)}}();function w(a){return/[\u0080-\uFFFF]/.test(a)&&(a=unescape(encodeURIComponent(a))),a}function C(a,i){var e=a.length,t=new ArrayBuffer(e),n=new Uint8Array(t),r;for(r=0;r<e;r+=1)n[r]=a.charCodeAt(r);return i?n:t}function I(a){return String.fromCharCode.apply(null,new Uint8Array(a))}function U(a,i,e){var t=new Uint8Array(a.byteLength+i.byteLength);return t.set(new Uint8Array(a)),t.set(new Uint8Array(i),a.byteLength),e?t:t.buffer}function F(a){var i=[],e=a.length,t;for(t=0;t<e-1;t+=2)i.push(parseInt(a.substr(t,2),16));return String.fromCharCode.apply(String,i)}function f(){this.reset()}return f.prototype.append=function(a){return this.appendBinary(w(a)),this},f.prototype.appendBinary=function(a){this._buff+=a,this._length+=a.length;var i=this._buff.length,e;for(e=64;e<=i;e+=64)o(this._hash,p(this._buff.substring(e-64,e)));return this._buff=this._buff.substring(e-64),this},f.prototype.end=function(a){var i=this._buff,e=i.length,t,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r;for(t=0;t<e;t+=1)n[t>>2]|=i.charCodeAt(t)<<(t%4<<3);return this._finish(n,e),r=y(this._hash),a&&(r=F(r)),this.reset(),r},f.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},f.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},f.prototype.setState=function(a){return this._buff=a.buff,this._length=a.length,this._hash=a.hash,this},f.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},f.prototype._finish=function(a,i){var e=i,t,n,r;if(a[e>>2]|=128<<(e%4<<3),e>55)for(o(this._hash,a),e=0;e<16;e+=1)a[e]=0;t=this._length*8,t=t.toString(16).match(/(.*?)(.{0,8})$/),n=parseInt(t[2],16),r=parseInt(t[1],16)||0,a[14]=n,a[15]=r,o(this._hash,a)},f.hash=function(a,i){return f.hashBinary(w(a),i)},f.hashBinary=function(a,i){var e=A(a),t=y(e);return i?F(t):t},f.ArrayBuffer=function(){this.reset()},f.ArrayBuffer.prototype.append=function(a){var i=U(this._buff.buffer,a,!0),e=i.length,t;for(this._length+=a.byteLength,t=64;t<=e;t+=64)o(this._hash,c(i.subarray(t-64,t)));return this._buff=t-64<e?new Uint8Array(i.buffer.slice(t-64)):new Uint8Array(0),this},f.ArrayBuffer.prototype.end=function(a){var i=this._buff,e=i.length,t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n,r;for(n=0;n<e;n+=1)t[n>>2]|=i[n]<<(n%4<<3);return this._finish(t,e),r=y(this._hash),a&&(r=F(r)),this.reset(),r},f.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},f.ArrayBuffer.prototype.getState=function(){var a=f.prototype.getState.call(this);return a.buff=I(a.buff),a},f.ArrayBuffer.prototype.setState=function(a){return a.buff=C(a.buff,!0),f.prototype.setState.call(this,a)},f.ArrayBuffer.prototype.destroy=f.prototype.destroy,f.ArrayBuffer.prototype._finish=f.prototype._finish,f.ArrayBuffer.hash=function(a,i){var e=B(new Uint8Array(a)),t=y(e);return i?F(t):t},f})})(x);var T=x.exports;const R=D(T),_=class _{static md5(h){return h&&h.trim().length>0?R.hash(h):""}static concatJson(...h){let s={};for(let u=0;u<h.length;u++){let o=h[u];for(let p in o)s[p]=o[p]}return s}static formatDate(h,s="yyyy-MM-dd hh:mm:ss"){try{let u=new Date;typeof h=="number"?u.setTime(parseInt(h.toString())):h instanceof Date&&(u=h);let o=u.getFullYear()+"",p=u.getMonth()+1+"",c=u.getDate()+"",A=u.getHours()+"",B=u.getMinutes()+"",S=u.getSeconds()+"",y=u.getMilliseconds()+"";return p=p.padStart(2,"0"),c=c.padStart(2,"0"),A=A.padStart(2,"0"),B=B.padStart(2,"0"),S=S.padStart(2,"0"),y=y.padStart(3,"0"),s=s.replace(/yyyy/g,o),s=s.replace(/MM/g,p),s=s.replace(/dd/g,c),s=s.replace(/hh/g,A),s=s.replace(/mm/g,B),s=s.replace(/ss/g,S),s=s.replace(/ms/g,y),s}catch(u){return console.error(u),""}}static async copyText(h){try{await navigator.clipboard.writeText(h);return}catch(u){console.error(u)}let s=document.createElement("input");s.value=h,document.body.appendChild(s),s.focus(),s.select(),s.setSelectionRange(0,h.length),document.execCommand("Copy"),document.body.removeChild(s)}static getFileInfo(h,s=new j){return s.file=h,s.size=h.size,s.suffix=_.getFileSuffix(h.name),s.type=_.getFileType(h.type),s.name=h.name,s.fulltype=h.type,s}static getFileSuffix(h){let s=h.lastIndexOf("."),u="";return s!=-1&&(u=h.substring(s)),u}static getFileType(h){let s=h.indexOf("/");return s>-1?h.substring(0,s):h}static readImg(h,s){if(_.getFileType(h.type)!="image"){s("");return}let u=new FileReader;u.addEventListener("load",()=>{s(u.result)}),u.readAsDataURL(h)}static formatFileSize(h){if(console.log("in filesize====>",h),h===0)return"0 B";let s=1024,u=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(h)/Math.log(s));return(h/Math.pow(s,o)).toFixed(1)+""+u[o]}static openFile(h,s=""){let u=document.createElement("input");u.setAttribute("type","file"),u.setAttribute("accept",s),u.setAttribute("multiple","multiple"),u.addEventListener("change",()=>{console.log("文件选中变化",u.files);let o=new Array;if(u.files&&u.files.length>0)for(let p=0;p<u.files.length;p++){const c=u.files[p];let A=_.getFileInfo(c);A.el=u,o.push(_.getFileInfo(c))}h(o)}),u.click()}};d(_,"MAX_FILE_SIZE",2*1024*1024);let M=_;class j{constructor(){d(this,"el",null);d(this,"file",null);d(this,"type","");d(this,"fulltype","");d(this,"size",0);d(this,"suffix","");d(this,"name","")}}export{j as F,M as T};
