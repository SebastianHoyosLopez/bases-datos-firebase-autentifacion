(this["webpackJsonplogin-udemy-1"]=this["webpackJsonplogin-udemy-1"]||[]).push([[0],{38:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(1),c=n.n(r),s=n(30),i=n.n(s),o=(n(38),n(9)),l=n(15),u=n(5),d=n(23);n(48),n(40);d.a.initializeApp({apiKey:"AIzaSyDXyckZJwWBvHqaa7ZBoP56zhkHOqhT1CQ",authDomain:"crud-firebase-login.firebaseapp.com",projectId:"crud-firebase-login",storageBucket:"crud-firebase-login.appspot.com",messagingSenderId:"838673483005",appId:"1:838673483005:web:ed0e4e4a3fb11fb21c2a94"});var b=d.a.firestore(),j=d.a.auth(),m=n(32),h=n(10),p=n.n(h),f=n(24),x=n(16),O=function(e){var t=c.a.useState([]),n=Object(o.a)(t,2),r=n[0],s=n[1],i=c.a.useState(""),l=Object(o.a)(i,2),u=l[0],d=l[1],j=c.a.useState(!1),h=Object(o.a)(j,2),O=h[0],g=h[1],v=c.a.useState(""),k=Object(o.a)(v,2),w=k[0],N=k[1];c.a.useEffect((function(){(function(){var t=Object(x.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.collection(e.user.uid).get();case 3:n=t.sent,a=n.docs.map((function(e){return Object(f.a)({id:e.id},e.data())})),console.log(a),s(a),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}})()()}),[]);var y=function(){var t=Object(x.a)(p.a.mark((function t(n){var a,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),u.trim()){t.next=4;break}return console.log("est\xe1 vacio"),t.abrupt("return");case 4:return t.prev=4,a={name:u,fecha:Date.now()},t.next=8,b.collection(e.user.uid).add(a);case 8:c=t.sent,s([].concat(Object(m.a)(r),[Object(f.a)(Object(f.a)({},a),{},{id:c.id})])),d(""),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),console.log(t.t0);case 16:console.log(u);case 17:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=Object(x.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.collection(e.user.uid).doc(n).delete();case 3:a=r.filter((function(e){return e.id!==n})),s(a),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(x.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),u.trim()){t.next=4;break}return console.log("vacio"),t.abrupt("return");case 4:return t.prev=4,t.next=7,b.collection(e.user.uid).doc(w).update({name:u});case 7:a=r.map((function(e){return e.id===w?{id:e.id,fecha:e.fecha,name:u}:e})),s(a),g(!1),d(""),N(""),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(4),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[4,14]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("h3",{children:"Lista de tareas"}),Object(a.jsx)("ul",{className:"list-group",children:r.map((function(e){return Object(a.jsxs)("li",{className:"list-group-item",children:[e.name,Object(a.jsx)("button",{className:"btn btn-danger btn-sm float-right",onClick:function(){return S(e.id)},children:"Eliminar"}),Object(a.jsx)("button",{className:"btn btn-warning btn-sm float-right mr-2",onClick:function(){return function(e){g(!0),d(e.name),N(e.id)}(e)},children:"Editar"})]},e.id)}))})]}),Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("h3",{children:O?"Editar Tarea":"Agregar Tarea"}),Object(a.jsxs)("form",{onSubmit:O?C:y,children:[Object(a.jsx)("input",{type:"text",placeholder:"Ingrese tarea",className:"form-control mb-2",onChange:function(e){return d(e.target.value)},value:u}),Object(a.jsx)("button",{className:O?"btn btn-warning btn-block":"btn btn-dark btn-block",type:"submit",children:O?"Editar":"Agregar"})]})]})]})})},g=Object(u.f)((function(e){var t=c.a.useState(null),n=Object(o.a)(t,2),r=n[0],s=n[1];return c.a.useEffect((function(){j.currentUser?(console.log("existe un usuario"),s(j.currentUser)):(console.log("no existe el usuario"),e.history.push("/login"))}),[e.history]),Object(a.jsxs)("div",{className:"mt-5",children:[Object(a.jsx)("h3",{className:"text-center",children:"Ruta Protegida"}),r&&Object(a.jsx)(O,{user:r})]})})),v=Object(u.f)((function(e){var t=c.a.useState("prueba@prueba.com"),n=Object(o.a)(t,2),r=n[0],s=n[1],i=c.a.useState("123123"),l=Object(o.a)(i,2),u=l[0],d=l[1],m=c.a.useState(null),h=Object(o.a)(m,2),f=h[0],O=h[1],g=c.a.useState(!0),v=Object(o.a)(g,2),k=v[0],w=v[1],N=c.a.useCallback(Object(x.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.signInWithEmailAndPassword(r,u);case 3:n=t.sent,console.log(n.user),s(""),d(""),O(null),e.history.push("/admin"),t.next=17;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),"auth/invalid-email"===t.t0.code&&O("Email no corresponde..."),"auth/user-not-found"===t.t0.code&&O("Email no registrado..."),"auth/wrong-password"===t.t0.code&&O("Contrase\xf1a incorrecta...");case 17:case"end":return t.stop()}}),t,null,[[0,11]])}))),[r,u,e.history]),y=c.a.useCallback(Object(x.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.createUserWithEmailAndPassword(r,u);case 3:return n=t.sent,console.log(n.user),t.next=7,b.collection("usuarios").doc(n.user.email).set({email:n.user.email,uid:n.user.uid});case 7:return t.next=9,b.collection(n.user.uid).add({name:"Tarea de ejemplo",fecha:Date.now()});case 9:s(""),d(""),O(null),e.history.push("/admin"),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0),"auth/invalid-email"===t.t0.code&&O("Email no valido"),"auth/email-already-in-use"===t.t0.code&&O("Email ya utilizado");case 20:case"end":return t.stop()}}),t,null,[[0,15]])}))),[r,u,e.history]);return Object(a.jsxs)("div",{className:"mt-5",children:[Object(a.jsx)("h3",{className:"text-center",children:k?"Registro de usuarios":"Login de acceso"}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"row justify-content-center",children:Object(a.jsx)("div",{className:"col-12 col-sm-8 col-md-6 col-xl-4",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.trim()?u.trim()?u.length<6?O("password de 6 car\xe1cteres o m\xe1s"):(console.log("Correcto..."),O(null),k?y():N()):O("Ingrese Password"):O("Ingrese Email")},children:[f&&Object(a.jsx)("div",{className:"alert alert-danger",children:f}),Object(a.jsx)("input",{type:"email",className:"form-control mb-2",placeholder:"Ingrese un email",onChange:function(e){return s(e.target.value)},value:r}),Object(a.jsx)("input",{type:"password",className:"form-control mb-2",placeholder:"Ingrese un password",onChange:function(e){return d(e.target.value)},value:u}),Object(a.jsx)("button",{className:"btn btn-dark btn-lg btn-block",type:"submit",children:k?"Registrarse":"Acceder"}),Object(a.jsx)("button",{type:"button",className:"btn-info btn-sm btn-block",onClick:function(){return w(!k)},children:k?"\xbfYa estas registrado?":"\xbfNo tienes cuenta?"})]})})})]})})),k=Object(u.f)((function(e){return Object(a.jsxs)("div",{className:"navbar navbar-dark bg-dark",children:[Object(a.jsx)(l.b,{className:"navbar-brand",to:"/",children:"AUTH"}),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"d-flex",children:[Object(a.jsx)(l.c,{className:"btn btn-dark mr-2",to:"/",exact:!0,children:"Inicio"}),null!==e.firebaseUser?Object(a.jsx)(l.c,{className:"btn btn-dark mr-2",to:"/admin",exact:!0,children:"Admin"}):null,null!==e.firebaseUser?Object(a.jsx)("button",{className:"btn btn-dark",onClick:function(){j.signOut().then((function(){e.history.push("/login")}))},children:"Cerrar Sesi\xf3n"}):Object(a.jsx)(l.c,{className:"btn btn-dark mr-2",to:"/login",exact:!0,children:"login"})]})})]})}));var w=function(){var e=c.a.useState(!1),t=Object(o.a)(e,2),n=t[0],r=t[1];return c.a.useEffect((function(){j.onAuthStateChanged((function(e){console.log(e),r(e||null)}))}),[]),!1!==n?Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(k,{firebaseUser:n}),Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{path:"/",exact:!0,children:"inicio..."}),Object(a.jsx)(u.a,{path:"/login",children:Object(a.jsx)(v,{})}),Object(a.jsx)(u.a,{path:"/admin",children:Object(a.jsx)(g,{})})]})]})}):Object(a.jsx)("p",{children:"Cargando..."})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.2ee312ad.chunk.js.map