import{s as g,h as i,G as c,k as p,r as h,o as l,c as a,t as f,l as _,a as e,m as d,v as m,p as b,b as k,w,F as v,d as x}from"./vendor.c5a18318.js";import{_ as E}from"./index.87bf8778.js";const y={data(){return{form:{email:"",password:""},msgEr:""}},methods:{login(){g(i(),this.form.email,this.form.password).then(r=>{alert("login ok")}).catch(r=>{switch(r.code){case"auth/invalid-email":this.msgEr="invalid email";break;case"auth/user-not-found":this.msgEr="User not found";break;case"auth/wrong-password":this.msgEr="Sai m\u1EADt kh\u1EA9u";break}})},loginGoogle(){const r=new c;p(i(),r).then(o=>{this.$router.push("/profile"),console.log("ok gg")}).catch(o=>{console.log(o)})}}},G=e("h1",null,"Login",-1),V={key:0,class:"text-danger"},C=e("label",{for:""},"Email",-1),L=e("label",{for:""},"Password",-1),N=e("button",{type:"submit",class:"my-3"},"Login",-1),P=e("hr",null,null,-1),A=x("Register");function B(r,o,S,U,t,n){const u=h("router-link");return l(),a(v,null,[G,t.msgEr?(l(),a("p",V,f(t.msgEr),1)):_("",!0),e("form",{onSubmit:o[2]||(o[2]=b((...s)=>n.login&&n.login(...s),["prevent"]))},[C,d(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=s=>t.form.email=s),class:"d-block mb-1",required:""},null,512),[[m,t.form.email]]),L,d(e("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=s=>t.form.password=s),class:"d-block mb-1",required:""},null,512),[[m,t.form.password]]),N],32),P,e("button",{onClick:o[3]||(o[3]=(...s)=>n.loginGoogle&&n.loginGoogle(...s)),class:"d-block mb-3"},"Login with Google"),k(u,{to:"/register"},{default:w(()=>[A]),_:1})],64)}var D=E(y,[["render",B]]);export{D as default};
