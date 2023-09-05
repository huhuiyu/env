/* empty css             */import{E as A,a as F,v as P}from"./el-form-item-cc4fac14.js";import{P as L}from"./PageComp-3486b615.js";import{E as j,a as J,b as K,c as O}from"./el-table-column-c151bf18.js";import{P as Q}from"./ServerResultInfo-ecd4b94a.js";import{D as E,E as I}from"./Dept-1aa048dc.js";import{_ as R}from"./DeptComp.vue_vue_type_script_setup_true_lang-c8c2e9cc.js";import{h as W,ac as X,A as z,K as G,L as m,N as f,X as l,C as o,x as n,V as p,W as g,T as H,aw as b,at as V,aa as Y,E as r}from"./index-19bdfe73.js";import{T as C}from"./Tools-77a5d434.js";import{b as Z,c as v}from"./index-54c6caa8.js";import{E as w}from"./el-overlay-91d69a85.js";import"./_Uint8Array-52df6a68.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-facd0252.js";const h="员工管理",ve=W({__name:"Employee",setup(ee){const e=X({dvisible:!1,queryInfo:{deptId:-1,employeeName:"",orderBy:1,phone:""},page:new Q,list:new Array,qdept:new E,deptMode:1,querying:!1,modifyInfo:new I,mvisible:!1,modifying:!1,mdept:new E,avisible:!1,addInfo:new I,adding:!1,adept:new E});e.qdept.deptName="请选择部门",e.adept.deptName="请选择部门";function N(){e.deptMode=1,e.dvisible=!0}function k(t){e.deptMode==1?(e.queryInfo.deptId=t.deptId?t.deptId:-1,e.qdept=t):e.deptMode==2?(e.addInfo.deptId=t.deptId?t.deptId:-1,e.adept=t):e.deptMode==3&&(e.modifyInfo.deptId=t.deptId?t.deptId:-1,e.modifyInfo.dept=t),e.dvisible=!1}function s(){b.post("/manage/employee/queryAll",C.concatJson(e.queryInfo,e.page),t=>{t.success&&(e.list=t.list,e.page=t.page)})}function q(){e.qdept.deptName="请选择部门",e.queryInfo={deptId:-1,employeeName:"",orderBy:1,phone:""},s()}function B(){e.adept.deptName="请选择部门",e.addInfo=new I,e.deptMode=2,e.avisible=!0}function U(){e.adding=!0,b.post("/manage/employee/add",e.addInfo,t=>{e.adding=!1,t.success&&(e.addInfo=new I,V.alert(t.message,"员工添加"))})}function M(t){e.deptMode=3,e.modifyInfo=t,e.mvisible=!0}function $(){e.modifying=!0,b.post("/manage/employee/update",e.modifyInfo,t=>{e.modifying=!1,t.success&&V.alert(t.message,"员工修改")})}function D(t){var a;V.confirm(`是否删除${(a=t.dept)==null?void 0:a.deptName}的员工：${t.employeeName}？`,"删除确认",{type:"warning"}).then(()=>{const i=j.service({lock:!0,text:"员工删除中，请稍候。。。"});b.post("/manage/employee/delete",t,u=>{i.close(),V.alert(u.message,"删除结果"),u.success&&s()},!0)}).catch(()=>{})}return s(),(t,a)=>{const i=A,u=Y,_=F,y=J,T=K,x=L,c=P;return z(),G(H,null,[m("div",null,f(h)),m("div",null,[l(n(O),{justify:"end",class:"pd10"},{default:o(()=>[l(_,{inline:!0},{default:o(()=>[l(i,null,{default:o(()=>[l(n(r),{modelValue:e.queryInfo.employeeName,"onUpdate:modelValue":a[0]||(a[0]=d=>e.queryInfo.employeeName=d),placeholder:"员工姓名模糊查询"},null,8,["modelValue"])]),_:1}),l(i,null,{default:o(()=>[l(n(r),{modelValue:e.queryInfo.phone,"onUpdate:modelValue":a[1]||(a[1]=d=>e.queryInfo.phone=d),placeholder:"员工电话模糊查询"},null,8,["modelValue"])]),_:1}),l(i,null,{default:o(()=>[l(n(Z),{modelValue:e.queryInfo.orderBy,"onUpdate:modelValue":a[2]||(a[2]=d=>e.queryInfo.orderBy=d)},{default:o(()=>[l(n(v),{value:1,label:"按照编号升序"}),l(n(v),{value:2,label:"按照编号降序"}),l(n(v),{value:3,label:"按照部门名称升序"}),l(n(v),{value:4,label:"按照部门名称降序"}),l(n(v),{value:5,label:"分部门按照姓名排序"})]),_:1},8,["modelValue"])]),_:1}),l(i,null,{default:o(()=>[l(u,{type:"success",onClick:N},{default:o(()=>[p(f(e.qdept.deptName),1)]),_:1}),l(u,{type:"primary",onClick:s},{default:o(()=>[p("查询")]),_:1}),l(u,{type:"danger",onClick:q},{default:o(()=>[p("重置")]),_:1}),l(u,{type:"info",onClick:B},{default:o(()=>[p("添加")]),_:1})]),_:1})]),_:1})]),_:1})]),m("div",null,[l(T,{data:e.list},{default:o(()=>[l(y,{prop:"employeeName",label:"员工姓名"}),l(y,{prop:"phone",label:"手机号码"}),l(y,{label:"所属部门"},{default:o(d=>[p(f(d.row.dept.deptName),1)]),_:1}),l(y,{label:"信息最后修改时间"},{default:o(d=>[p(f(n(C).formatDate(d.row.lastupdate)),1)]),_:1}),l(y,{label:"操作"},{default:o(d=>[l(u,{onClick:S=>M(d.row),type:"primary"},{default:o(()=>[p("修改")]),_:2},1032,["onClick"]),l(u,{onClick:S=>D(d.row),type:"danger"},{default:o(()=>[p("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),m("div",null,[l(x,{page:e.page,onNumberChange:s},null,8,["page"])])]),m("div",null,[l(n(w),{modelValue:e.avisible,"onUpdate:modelValue":a[7]||(a[7]=d=>e.avisible=d),title:"添加员工信息","close-on-click-modal":!1,onClosed:s,width:"30%"},{footer:o(()=>[l(u,{type:"danger",onClick:a[6]||(a[6]=d=>e.avisible=!1)},{default:o(()=>[p("关闭")]),_:1}),l(u,{type:"success",onClick:U},{default:o(()=>[p("添加")]),_:1})]),default:o(()=>[m("div",null,[l(_,null,{default:o(()=>[l(i,null,{default:o(()=>[l(u,{onClick:a[3]||(a[3]=d=>e.dvisible=!0)},{default:o(()=>[p(f(e.adept.deptName),1)]),_:1})]),_:1}),l(i,null,{default:o(()=>[g(l(n(r),{placeholder:"员工姓名",modelValue:e.addInfo.employeeName,"onUpdate:modelValue":a[4]||(a[4]=d=>e.addInfo.employeeName=d)},null,8,["modelValue"]),[[c,e.adding]])]),_:1}),l(i,null,{default:o(()=>[g(l(n(r),{placeholder:"电话",modelValue:e.addInfo.phone,"onUpdate:modelValue":a[5]||(a[5]=d=>e.addInfo.phone=d)},null,8,["modelValue"]),[[c,e.adding]])]),_:1})]),_:1})])]),_:1},8,["modelValue"])]),m("div",null,[l(n(w),{modelValue:e.mvisible,"onUpdate:modelValue":a[12]||(a[12]=d=>e.mvisible=d),title:"修改员工信息","close-on-click-modal":!1,onClosed:s},{footer:o(()=>[l(u,{type:"danger",onClick:a[11]||(a[11]=d=>e.mvisible=!1)},{default:o(()=>[p("关闭")]),_:1}),l(u,{type:"success",onClick:$},{default:o(()=>[p("保存")]),_:1})]),default:o(()=>[m("div",null,[l(_,null,{default:o(()=>[l(i,null,{default:o(()=>[l(u,{onClick:a[8]||(a[8]=d=>e.dvisible=!0)},{default:o(()=>{var d;return[p(f((d=e.modifyInfo.dept)==null?void 0:d.deptName),1)]}),_:1})]),_:1}),l(i,null,{default:o(()=>[g(l(n(r),{placeholder:"员工姓名",modelValue:e.modifyInfo.employeeName,"onUpdate:modelValue":a[9]||(a[9]=d=>e.modifyInfo.employeeName=d)},null,8,["modelValue"]),[[c,e.adding]])]),_:1}),l(i,null,{default:o(()=>[g(l(n(r),{placeholder:"电话",modelValue:e.modifyInfo.phone,"onUpdate:modelValue":a[10]||(a[10]=d=>e.modifyInfo.phone=d)},null,8,["modelValue"]),[[c,e.adding]])]),_:1})]),_:1})])]),_:1},8,["modelValue"])]),m("div",null,[l(n(w),{modelValue:e.dvisible,"onUpdate:modelValue":a[13]||(a[13]=d=>e.dvisible=d),title:"选择部门","close-on-click-modal":!1,width:"30%"},{default:o(()=>[m("div",null,[l(R,{mode:"selector",onDeptSelected:k})])]),_:1},8,["modelValue"])])],64)}}});export{ve as default};