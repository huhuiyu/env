import{b as ae,e as ne}from"./_Uint8Array-a422b571.js";import{bi as j,aW as re,Q as ie,d as X,ae as ue,h as N,k as ce,n as J,bj as de,o as I,bk as fe,A as B,K as q,L as R,M as E,D as y,x as o,N as me,X as M,C as D,B as K,I as ge,H as pe,J as U,F as Y,_ as x,bl as be,e as ye,af as ee,ag as ve,bc as Ce,bm as W,r as F,bn as he,an as ke,bo as De,w as Z,p as Ee,S as Fe,ab as Ie,bp as Ae,bq as G,b6 as Be,a3 as Se,ap as H,l as we,z as $e,W as Te,br as Pe,bs as Oe,O as Re,bt as Me,a5 as Ne,a0 as Le,bu as ze,bv as Ve,as as _e}from"./index-28d2205f.js";var Q=j?j.isConcatSpreadable:void 0;function qe(e){return re(e)||ae(e)||!!(Q&&e&&e[Q])}function oe(e,s,r,i,a){var d=-1,v=e.length;for(r||(r=qe),a||(a=[]);++d<v;){var l=e[d];s>0&&r(l)?s>1?oe(l,s-1,r,i,a):ne(a,l):i||(a[a.length]=l)}return a}function to(e){var s=e==null?0:e.length;return s?oe(e,1):[]}const Ke=(...e)=>s=>{e.forEach(r=>{ie(r)?r(s):r.value=s})},se=Symbol("dialogInjectionKey"),le=X({center:Boolean,alignCenter:Boolean,closeIcon:{type:ue},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Ue={close:()=>!0},je=["aria-label"],Je=["id"],We=N({name:"ElDialogContent"}),Ze=N({...We,props:le,emits:Ue,setup(e){const s=e,{t:r}=ce(),{Close:i}=be,{dialogRef:a,headerRef:d,bodyId:v,ns:l,style:u}=J(se),{focusTrapRef:p}=J(de),f=I(()=>[l.b(),l.is("fullscreen",s.fullscreen),l.is("draggable",s.draggable),l.is("align-center",s.alignCenter),{[l.m("center")]:s.center},s.customClass]),C=Ke(p,a),m=I(()=>s.draggable);return fe(a,d,m),(n,A)=>(B(),q("div",{ref:o(C),class:y(o(f)),style:Y(o(u)),tabindex:"-1"},[R("header",{ref_key:"headerRef",ref:d,class:y(o(l).e("header"))},[E(n.$slots,"header",{},()=>[R("span",{role:"heading",class:y(o(l).e("title"))},me(n.title),3)]),n.showClose?(B(),q("button",{key:0,"aria-label":o(r)("el.dialog.close"),class:y(o(l).e("headerbtn")),type:"button",onClick:A[0]||(A[0]=T=>n.$emit("close"))},[M(o(pe),{class:y(o(l).e("close"))},{default:D(()=>[(B(),K(ge(n.closeIcon||o(i))))]),_:1},8,["class"])],10,je)):U("v-if",!0)],2),R("div",{id:o(v),class:y(o(l).e("body"))},[E(n.$slots,"default")],10,Je),n.$slots.footer?(B(),q("footer",{key:0,class:y(o(l).e("footer"))},[E(n.$slots,"footer")],2)):U("v-if",!0)],6))}});var Ge=x(Ze,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const He=X({...le,appendToBody:Boolean,beforeClose:{type:ye(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),Qe={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ee]:e=>ve(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Xe=(e,s)=>{const i=Ie().emit,{nextZIndex:a}=Ce();let d="";const v=W(),l=W(),u=F(!1),p=F(!1),f=F(!1),C=F(e.zIndex||a());let m,n;const A=he("namespace",Ae),T=I(()=>{const c={},k=`--${A.value}-dialog`;return e.fullscreen||(e.top&&(c[`${k}-margin-top`]=e.top),e.width&&(c[`${k}-width`]=ke(e.width))),c}),L=I(()=>e.alignCenter?{display:"flex"}:{});function z(){i("opened")}function P(){i("closed"),i(ee,!1),e.destroyOnClose&&(f.value=!1)}function V(){i("close")}function O(){n==null||n(),m==null||m(),e.openDelay&&e.openDelay>0?{stop:m}=G(()=>g(),e.openDelay):g()}function S(){m==null||m(),n==null||n(),e.closeDelay&&e.closeDelay>0?{stop:n}=G(()=>$(),e.closeDelay):$()}function w(){function c(k){k||(p.value=!0,u.value=!1)}e.beforeClose?e.beforeClose(c):S()}function _(){e.closeOnClickModal&&w()}function g(){Be&&(u.value=!0)}function $(){u.value=!1}function t(){i("openAutoFocus")}function b(){i("closeAutoFocus")}function h(c){var k;((k=c.detail)==null?void 0:k.focusReason)==="pointer"&&c.preventDefault()}e.lockScroll&&De(u);function te(){e.closeOnPressEscape&&w()}return Z(()=>e.modelValue,c=>{c?(p.value=!1,O(),f.value=!0,C.value=e.zIndex?C.value++:a(),Ee(()=>{i("open"),s.value&&(s.value.scrollTop=0)})):u.value&&S()}),Z(()=>e.fullscreen,c=>{s.value&&(c?(d=s.value.style.transform,s.value.style.transform=""):s.value.style.transform=d)}),Fe(()=>{e.modelValue&&(u.value=!0,f.value=!0,O())}),{afterEnter:z,afterLeave:P,beforeLeave:V,handleClose:w,onModalClick:_,close:S,doClose:$,onOpenAutoFocus:t,onCloseAutoFocus:b,onCloseRequested:te,onFocusoutPrevented:h,titleId:v,bodyId:l,closed:p,style:T,overlayDialogStyle:L,rendered:f,visible:u,zIndex:C}},Ye=["aria-label","aria-labelledby","aria-describedby"],xe=N({name:"ElDialog",inheritAttrs:!1}),eo=N({...xe,props:He,emits:Qe,setup(e,{expose:s}){const r=e,i=Se();H({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},I(()=>!!i.title)),H({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},I(()=>!!r.customClass));const a=we("dialog"),d=F(),v=F(),l=F(),{visible:u,titleId:p,bodyId:f,style:C,overlayDialogStyle:m,rendered:n,zIndex:A,afterEnter:T,afterLeave:L,beforeLeave:z,handleClose:P,onModalClick:V,onOpenAutoFocus:O,onCloseAutoFocus:S,onCloseRequested:w,onFocusoutPrevented:_}=Xe(r,d);$e(se,{dialogRef:d,headerRef:v,bodyId:f,ns:a,rendered:n,style:C});const g=Ve(V),$=I(()=>r.draggable&&!r.fullscreen);return s({visible:u,dialogContentRef:l}),(t,b)=>(B(),K(ze,{to:"body",disabled:!t.appendToBody},[M(Le,{name:"dialog-fade",onAfterEnter:o(T),onAfterLeave:o(L),onBeforeLeave:o(z),persisted:""},{default:D(()=>[Te(M(o(Pe),{"custom-mask-event":"",mask:t.modal,"overlay-class":t.modalClass,"z-index":o(A)},{default:D(()=>[R("div",{role:"dialog","aria-modal":"true","aria-label":t.title||void 0,"aria-labelledby":t.title?void 0:o(p),"aria-describedby":o(f),class:y(`${o(a).namespace.value}-overlay-dialog`),style:Y(o(m)),onClick:b[0]||(b[0]=(...h)=>o(g).onClick&&o(g).onClick(...h)),onMousedown:b[1]||(b[1]=(...h)=>o(g).onMousedown&&o(g).onMousedown(...h)),onMouseup:b[2]||(b[2]=(...h)=>o(g).onMouseup&&o(g).onMouseup(...h))},[M(o(Oe),{loop:"",trapped:o(u),"focus-start-el":"container",onFocusAfterTrapped:o(O),onFocusAfterReleased:o(S),onFocusoutPrevented:o(_),onReleaseRequested:o(w)},{default:D(()=>[o(n)?(B(),K(Ge,Re({key:0,ref_key:"dialogContentRef",ref:l},t.$attrs,{"custom-class":t.customClass,center:t.center,"align-center":t.alignCenter,"close-icon":t.closeIcon,draggable:o($),fullscreen:t.fullscreen,"show-close":t.showClose,title:t.title,onClose:o(P)}),Me({header:D(()=>[t.$slots.title?E(t.$slots,"title",{key:1}):E(t.$slots,"header",{key:0,close:o(P),titleId:o(p),titleClass:o(a).e("title")})]),default:D(()=>[E(t.$slots,"default")]),_:2},[t.$slots.footer?{name:"footer",fn:D(()=>[E(t.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):U("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Ye)]),_:3},8,["mask","overlay-class","z-index"]),[[Ne,o(u)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var oo=x(eo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const ao=_e(oo);export{ao as E,oe as b,to as f};
