import{h as f,r as p,ac as x,o as V,A as w,K as U,L as n,N as s,W as u,ay as _,V as r,a5 as b,av as o,T as k,au as C}from"./index-28d2205f.js";const h=n("h1",null,"数据响应",-1),N=n("hr",null,null,-1),T=["textContent"],c=n("hr",null,null,-1),M=n("hr",null,null,-1),g=n("hr",null,null,-1),D=n("br",null,null,-1),I=["textContent"],L=["innerHTML"],S=n("hr",null,null,-1),B="响应式",F=f({__name:"Reactive",setup(H){const i=p(!1),a=p("");function d(){a.value=new Date().toLocaleString()}const e=x({user:{name:"",pwd:""},info:"",usertype:new C,num1:"0",num2:"0"}),m=V(()=>parseInt(e.num1)+parseInt(e.num2));function v(){return parseInt(e.num1)+parseInt(e.num2)}function y(){alert(JSON.stringify(e,null,2)),alert(a.value)}return(A,t)=>(w(),U(k,null,[n("div",null,s(B)),h,n("div",null,[n("label",null,[u(n("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=l=>i.value=l)},null,512),[[_,i.value]]),r("勾选中显示 ")]),u(n("div",null,"显示控制",512),[[b,i.value]]),N,u(n("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=l=>a.value=l)},null,512),[[o,a.value]]),n("button",{onClick:d},"修改值"),n("div",{textContent:s(a.value)},null,8,T),c,u(n("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=l=>e.user.name=l)},null,512),[[o,e.user.name]]),u(n("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=l=>e.user.pwd=l)},null,512),[[o,e.user.pwd]]),u(n("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=l=>e.info=l)},null,512),[[o,e.info]]),M,u(n("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=l=>e.usertype.username=l)},null,512),[[o,e.usertype.username]]),u(n("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=l=>e.usertype.nickname=l)},null,512),[[o,e.usertype.nickname]]),n("button",{onClick:y},"显示视图数据"),g,r(" "+s(e)+" ",1),D,n("span",{textContent:s(e.info)},null,8,I),n("pre",{innerHTML:e.info},null,8,L),S,u(n("input",{type:"number","onUpdate:modelValue":t[7]||(t[7]=l=>e.num1=l)},null,512),[[o,e.num1]]),r(" + "),u(n("input",{type:"number","onUpdate:modelValue":t[8]||(t[8]=l=>e.num2=l)},null,512),[[o,e.num2]]),r(" = "+s(m.value)+" | "+s(v())+" | "+s(Math.random()),1)])],64))}});export{F as default};
