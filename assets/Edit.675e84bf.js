import{q as _,j as h,e as f,S as b,_ as g,C as v,p as x,d as u}from"./firebase.8e6cca9d.js";import{r as y,o as i,c as d,a as t,t as k,m as c,v as l,p as U,b as w,w as C,l as V,F as j,d as n}from"./vendor.c5a18318.js";import{_ as q}from"./index.87bf8778.js";const N={data(){return{user:""}},methods:{async getUser(){const r=_(b(u,"users"),h(f(),"==",this.$route.params.id));(await g(r)).forEach(a=>{this.user=a.data(),this.user.id=a.id})},async upadteUser(r){const e=v(u,"users",r);await x(e,{name:this.user.name,age:this.user.age}),this.$router.push("/users")}},created(){this.getUser()}},D=t("h1",null,"Edit",-1),E={key:0},S=n(" Name "),B=n(" Age "),F=t("button",{type:"submit",class:"my-3"},"Update",-1),M=n("Cancel");function T(r,e,a,A,s,m){const p=y("router-link");return i(),d(j,null,[D,s.user?(i(),d("div",E,[t("p",null,k(s.user.id),1),t("form",{onSubmit:e[2]||(e[2]=U(o=>m.upadteUser(s.user.id),["prevent"]))},[S,c(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.user.name=o),class:"d-block mb-1",autofocus:"",required:""},null,512),[[l,s.user.name]]),B,c(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>s.user.age=o),class:"d-block mb-1",required:""},null,512),[[l,s.user.age]]),F],32),w(p,{to:"/users"},{default:C(()=>[M]),_:1})])):V("",!0)],64)}var H=q(N,[["render",T]]);export{H as default};