(this.webpackJsonptucineya=this.webpackJsonptucineya||[]).push([[0],{21:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(30),r=c.n(n),i=(c(21),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))}),l=c(16),o=c(2),m=c(11),d=c.n(m),j=c(14),b=c(9),p=c(12),u=c(10),h=c(15),x=c.n(h),O=c(0),f=function(){var e=Object(s.useState)(!1),t=Object(u.a)(e,2);t[0],t[1];window.onload=function(){var e=document.getElementById("btn-abrir-popup"),t=document.getElementById("overlay"),c=document.getElementById("popup"),s=document.getElementById("btn-cerrar-popup");e.addEventListener("click",(function(){t.classList.add("active"),c.classList.add("active")})),s.addEventListener("click",(function(e){e.preventDefault(),t.classList.remove("active"),c.classList.remove("active")}))};return Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"btn btn-primary",id:"btn-abrir-popup",children:"Subscribirse"}),Object(O.jsx)("div",{className:"contenedor",children:Object(O.jsx)("div",{className:"overlay",id:"overlay",children:Object(O.jsxs)("div",{className:"popup",id:"popup",children:[Object(O.jsx)("a",{href:"#",id:"btn-cerrar-popup",className:"btn-cerrar-popup",children:Object(O.jsx)("i",{className:"fas fa-times"})}),Object(O.jsx)("h3",{children:"SUSCRIBETE"}),Object(O.jsx)("h4",{children:"y recibe las novedades."}),Object(O.jsxs)("form",{action:"",children:[Object(O.jsxs)("div",{className:"contenedor-inputs",children:[Object(O.jsx)("input",{type:"text",placeholder:"Nombre"}),Object(O.jsx)("input",{type:"email",placeholder:"Correo"})]}),Object(O.jsx)("input",{type:"submit",className:"btn-submit",value:"Suscribirse"})]})]})})})]})},N=function(){var e=Object(s.useState)({email:"",password:""}),t=Object(u.a)(e,2),c=t[0],a=t[1],n=function(e){a(Object(p.a)(Object(p.a)({},c),{},Object(b.a)({},e.target.name,e.target.value)))},r=function(){var e=Object(j.a)(d.a.mark((function e(t){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.target.reset(),e.next=4,x.a.post("https://tucineya.herokuapp.com/api/login/",c);case 4:s=e.sent,alert(s.data.message),a({email:"",password:""});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(s.Fragment,{children:Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"row justify-content-center",children:[Object(O.jsxs)("form",{onSubmit:r,className:"py-3 row justify-content-center",children:[Object(O.jsxs)("div",{className:"form-group row col-lg-6",children:[Object(O.jsx)("label",{htmlFor:"fname",children:"Email:"}),Object(O.jsx)("input",{type:"email",id:"fname",className:"form-control",name:"email",placeholder:"Email",onChange:n}),Object(O.jsx)("label",{htmlFor:"lname",children:"Contrase\xf1a:"}),Object(O.jsx)("input",{type:"text",id:"lname",className:"form-control mb-3",name:"password",placeholder:"Contrase\xf1a",onChange:n})]}),Object(O.jsx)("div",{className:"btn-sm ",children:Object(O.jsx)("button",{type:"submit",className:"btn btn-primary mb-3",children:"Ingresar"})})]}),Object(O.jsx)("p",{children:"\xbfTodav\xeda no te registraste?"}),Object(O.jsx)("div",{className:"btn-sm",children:Object(O.jsx)(l.b,{type:"submit",className:"btn btn-success",to:"/registro",children:"Registrarse"})}),Object(O.jsx)(f,{})]})})})},g=function(){return Object(O.jsxs)("div",{id:"premiere",className:"mb-3",children:[Object(O.jsx)("h1",{children:"Pr\xf3ximos Estrenos"}),Object(O.jsx)("div",{className:"mb-3 d-flex justify-content-center w-100",children:Object(O.jsx)("img",{className:"premiere",src:"https://i.pinimg.com/originals/f0/6f/f7/f06ff76b83cabc89b7ab475bf36691b6.jpg",alt:"poster"})}),Object(O.jsx)("h2",{children:"Trailer:"}),Object(O.jsx)("iframe",{className:"d-flex justify-content-center w-100 p-2 h-100 d-inline-block",src:"https://www.youtube.com/embed/XEMwSdne6UE",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})]})},v=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"row ",children:[Object(O.jsx)("div",{className:"col",children:Object(O.jsx)(N,{})}),Object(O.jsxs)("div",{className:"col premiere",children:[Object(O.jsx)(g,{}),Object(O.jsx)("div",{className:"mb-3",children:Object(O.jsx)("button",{type:"button",className:"btn btn-primary ",children:"Ver Cat\xe1logo de Pel\xedculas"})})]})]})})},y=function(){var e=Object(s.useState)({nombre:"",apellido:"",email:"",username:"",password:"",rePassword:"",celular:"",direccion:"",piso:"",dpto:""}),t=Object(u.a)(e,2),c=t[0],a=t[1],n=function(e){a(Object(p.a)(Object(p.a)({},c),{},Object(b.a)({},e.target.name,e.target.value)))},r=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.target.reset(),e.next=4,x.a.post("https://tucineya.herokuapp.com/api/register/",c);case 4:a({nombre:"",apellido:"",email:"",username:"",password:"",rePassword:"",celular:"",direccion:"",piso:"",dpto:""});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"mb-3 row",children:Object(O.jsxs)("div",{className:"justify-content-center",children:[Object(O.jsx)("p",{className:"fs-1",children:"FORMULARIO DE REGISTRO"}),Object(O.jsxs)("form",{onSubmit:r,className:"px-4 py-3",children:[Object(O.jsx)("p",{children:"DATOS PERSONALES"}),Object(O.jsxs)("div",{className:"form-group row",children:[Object(O.jsxs)("div",{className:"col",children:[Object(O.jsx)("input",{type:"text",id:"name",className:"form-control mb-3",name:"nombre",placeholder:"Nombre",onChange:n}),Object(O.jsx)("input",{type:"text",id:"surname",className:"form-control mb-3",name:"apellido",placeholder:"Apellido",onChange:n}),Object(O.jsx)("input",{type:"email",id:"email",className:"form-control mb-3",name:"email",placeholder:"Mail",onChange:n}),Object(O.jsx)("input",{type:"text",id:"username",className:"form-control mb-3",name:"username",placeholder:"Nombre de usuario",onChange:n}),Object(O.jsx)("input",{type:"text",id:"lname",className:"form-control mb-3",name:"password",placeholder:"Contrase\xf1a",onChange:n}),Object(O.jsx)("input",{type:"text",id:"lname",className:"form-control mb-3",name:"rePassword",placeholder:"Confirma Contrase\xf1a",onChange:n})]}),Object(O.jsxs)("div",{className:"col",children:[Object(O.jsx)("input",{type:"number",id:"celular",className:"form-control mb-3",name:"celular",placeholder:"Celular",onChange:n}),Object(O.jsx)("input",{type:"text",id:"direccion",className:"form-control mb-3",name:"direccion",placeholder:"Direcci\xf3n",onChange:n}),Object(O.jsx)("input",{type:"number",id:"piso",className:"form-control mb-3",name:"piso",placeholder:"Piso",onChange:n}),Object(O.jsx)("input",{type:"text",id:"dpto",className:"form-control mb-3",name:"dpto",placeholder:"Dpto",onChange:n}),Object(O.jsx)("button",{type:"submit",className:"btn btn-success mb-3",children:"Guardar"})]})]})]})]})})})},w=function(){return Object(O.jsxs)("div",{id:"header",className:"row",children:[Object(O.jsx)("div",{className:"col-3",children:Object(O.jsx)("img",{className:"icons-home rounded float-start img-fluid",src:"./3d-glasses.png",alt:""})}),Object(O.jsx)("div",{className:"col-6 ",children:Object(O.jsx)("h1",{id:"tucineya",className:"fs-auto",children:"TU CINE YA"})}),Object(O.jsx)("div",{className:"col-3",children:Object(O.jsx)("img",{className:"icons-home rounded float-end img-fluid",src:"./clapperboard.png",alt:""})})]})},C=function(){return Object(O.jsxs)("div",{className:"d-flex justify-content-between footer mt-auto p-2 bd-highlight",children:[Object(O.jsx)("div",{className:"col-3",children:Object(O.jsx)("h3",{children:"TU CINE YA"})}),Object(O.jsx)("div",{className:"col-3",children:Object(O.jsx)("img",{className:"icon",src:"../instagram.png",alt:""})}),Object(O.jsx)("div",{className:"col-3",children:Object(O.jsx)("img",{className:"icon",src:"../facebook.png",alt:""})}),Object(O.jsx)("div",{className:"col-3",children:Object(O.jsx)("img",{className:"icon",src:"../twitter.png",alt:""})})]})},E=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(w,{}),Object(O.jsx)(l.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(o.a,{path:"/",exact:!0,component:v}),Object(O.jsx)(o.a,{path:"/registro",exact:!0,component:y})]})}),Object(O.jsx)(C,{})]})};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(E,{})}),document.getElementById("root")),i()}},[[64,1,2]]]);
//# sourceMappingURL=main.c755efb4.chunk.js.map