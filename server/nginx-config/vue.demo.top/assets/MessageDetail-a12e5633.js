import{P as f}from"./ServerResultInfo-ecd4b94a.js";import{h as g,aB as _,ac as v,S as h,aw as y,A as r,K as n,L as t,N as a,x as i,V as c,T as d,U as B,X as D}from"./index-19bdfe73.js";import{T as l}from"./Tools-77a5d434.js";import{P as N}from"./PageComp-3486b615.js";import"./index-54c6caa8.js";import"./index-facd0252.js";import"./_Uint8Array-52df6a68.js";import"./_plugin-vue_export-helper-c27b6911.js";const q=t("hr",null,null,-1),x=t("hr",null,null,-1),P="留言详情",b=g({__name:"MessageDetail",setup(T){const u=_(),e=v({page:new f,list:[],detail:{},queryInfo:{umid:u.params.umid,orderBy:"1"}});h(()=>{m()});function m(){y.post("/message/queryDetail",l.concatJson(e.queryInfo,e.page),s=>{s.success&&(e.page=s.page,e.list=s.list,e.detail=s.info)})}return(s,V)=>{var p;return r(),n(d,null,[t("div",null,a(P)+" - "+a(i(u).params.umid),1),t("div",null,[t("div",null,[c(a((p=e.detail.user)==null?void 0:p.username)+": "+a(e.detail.title)+"("+a(i(l).formatDate(e.detail.lastupdate))+") ",1),q,c(" "+a(e.detail.info),1)]),x,t("div",null,[(r(!0),n(d,null,B(e.list,o=>(r(),n("div",null,a(o.user.username)+" : "+a(o.info)+" ("+a(i(l).formatDate(o.lastupdate))+") ",1))),256))]),D(N,{page:e.page,onNumberChange:m},null,8,["page"])])],64)}}});export{b as default};