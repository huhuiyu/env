import{h as r,r as u,aC as d,S as c,aD as i,aE as p,aF as f,aG as m,ax as v,A as B,K as U,L as o,N as t,W as _,av as g,V as a,X as x,C,T as M}from"./index-28d2205f.js";const V="生命周期演示",D=r({__name:"LifeCircle",setup(k){const e=u("");return d(()=>{console.log("onBeforeMount...")}),c(()=>{console.log("onMounted...")}),i(()=>{console.log("onBeforeUpdate...")}),p(()=>{console.log("onUpdated...")}),f(()=>{console.log("onBeforeUnmount...")}),m(()=>{console.log("onUnmounted...")}),(L,n)=>{const s=v("RouterLink");return B(),U(M,null,[o("div",null,t(V)),o("div",null,[_(o("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=l=>e.value=l)},null,512),[[g,e.value]]),a(t(e.value),1)]),x(s,{to:"/basic/router"},{default:C(()=>[a("跳转")]),_:1})],64)}}});export{D as default};
