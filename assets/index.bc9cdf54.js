/* empty css             */import{u as e}from"./index.88ab13b0.js";import{b as l,c as s,d as a,e as o,f as t,g as r,h as n,i as u}from"./elmentPlus.8c0db000.js";import{x as i,f as p,r as d,a as m,K as f,L as c,O as b,c as g,a8 as y,z as h,u as v,M as x,I as w,J as _,S as P,aj as j,b as z,a3 as k,Q as C}from"./vue.f0fe4329.js";const N=i({__name:"index",props:{form:null,rules:null,labelPosition:{default:"left"},labelWidth:{default:80},customClass:{default:"my-form"},responsive:{type:Boolean,default:!0},size:{default:"default"},columns:null},setup(t,{expose:r}){const n=t,{t:u}=e(),i=p((()=>n.responsive?{xl:6,lg:6,md:12,sm:12,xs:24}:{xl:24,lg:24,md:24,sm:24,xs:24}));let P=d();return r({validate:()=>!!P.value&&P.value.validate(),resetFields:()=>!!P.value&&P.value.resetFields()}),(e,r)=>{const n=l,p=s,d=a,j=o;return m(),f(j,{ref_key:"formRef",ref:P,"label-position":t.labelPosition,"label-width":t.labelWidth,model:t.form,rules:t.rules,size:t.size,class:_(t.customClass),"validate-on-rule-change":!1,"hide-required-asterisk":""},{default:c((()=>[b(d,{gutter:20},{default:c((()=>[(m(!0),g(w,null,y(t.columns,(e=>(m(),f(p,h(v(i),{key:e.prop}),{default:c((()=>[b(n,{label:v(u)(e.label),prop:e.prop},{default:c((()=>[(m(),f(x(e.component),h(e.componentProps,{modelValue:t.form[e.prop],"onUpdate:modelValue":l=>t.form[e.prop]=l}),null,16,["modelValue","onUpdate:modelValue"]))])),_:2},1032,["label","prop"])])),_:2},1040)))),128))])),_:1})])),_:1},8,["label-position","label-width","model","rules","size","class"])}}});const V={style:{display:"flex","justify-content":"space-between","align-items":"center",height:"40px"}},q={style:{display:"flex","justify-content":"center","align-items":"center",height:"40px"}},F=i({__name:"index",setup(l){const{t:s,locale:a}=e(),o=P({userName:"",password:""}),i=d(!1),p=P({userName:[{required:!0,message:"请输入用户名",trigger:["change","blur"]}],password:[{required:!0,message:"请输入密码",trigger:["change","blur"]}]}),f=P([{prop:"userName",label:"userName",component:j(t),componentProps:{placeholder:"请输入账户",clearable:!0,type:"text"}},{prop:"password",label:"password",component:j(t),componentProps:{clearable:!0,showPassword:!0,placeholder:"请输入密码"}}]),y=d(),h=async()=>{await y.value.validate()},x=()=>{y.value.resetFields(),u.error("GG")};return(e,l)=>{const a=N,t=r,u=n;return m(),g(w,null,[b(a,{ref_key:"formRef",ref:y,"custom-class":"login-form",form:o,rules:p,columns:f,responsive:i.value,"label-position":"top"},null,8,["form","rules","columns","responsive"]),z("div",V,[b(t,{style:{color:"#fff"},label:v(s)("rememberPassword")},null,8,["label"]),b(u,{type:"text"},{default:c((()=>[k(C(v(s)("forgetPassword")),1)])),_:1})]),z("div",q,[b(u,{type:"primary",style:{width:"100px"},size:"small",onClick:h},{default:c((()=>[k(C(v(s)("submit")),1)])),_:1}),b(u,{size:"small",style:{width:"100px"},onClick:x},{default:c((()=>[k(C(v(s)("reset")),1)])),_:1})])],64)}}});export{F as default};
