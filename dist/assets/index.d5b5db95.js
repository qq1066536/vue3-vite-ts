import{u as e}from"./index.45ede135.js";import{c as s,d as a,e as r}from"./elmentPlus.d1876c56.js";import{x as l,U as o,a as d,b as u,O as t,L as p}from"./vue.0d8f7b8f.js";const m=l({__name:"index",setup(l){e();const m=o({userName:"",password:""}),n=o({userName:[{required:!0,message:"请输入用户名",trigger:["change","blur"]}],password:[{required:!0,message:"请输入密码",trigger:["change","blur"]}]});return(e,l)=>{const o=s,i=a,c=r;return d(),u("div",null,[t(c,{model:m,rules:n,style:{width:"500px"},size:"small","label-position":"top"},{default:p((()=>[t(i,{label:"userName",prop:"userName"},{default:p((()=>[t(o,{placeholder:"请输入用户名",clearable:""})])),_:1}),t(i,{label:"Password",prop:"password"},{default:p((()=>[t(o,{modelValue:m.password,"onUpdate:modelValue":l[0]||(l[0]=e=>m.password=e),type:"password","show-password":"",clearable:""},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])}}});export{m as default};
