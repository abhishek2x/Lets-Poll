(this["webpackJsonplets-poll"]=this["webpackJsonplets-poll"]||[]).push([[0],{116:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(20),l=a.n(i),c=(a(116),a(95)),s=a(180),r=a(23),d=a(162),j=a(170),b=a(179),u=a(100),h=a(169),m=a(36),x=m.a.initializeApp({apiKey:"AIzaSyAQNvfN269IFiChUpqBVl-3hM6-Rm6MlGc",authDomain:"lets-poll-it.firebaseapp.com",projectId:"lets-poll-it",storageBucket:"lets-poll-it.appspot.com",messagingSenderId:"1099382305168",appId:"1:1099382305168:web:735dacf58ba32016190315"}),O=m.a.auth(),p=x.firestore(),g=(m.a.storage(),new m.a.auth.GoogleAuthProvider),f=new m.a.auth.GithubAuthProvider,v=(new m.a.auth.FacebookAuthProvider,a(4)),y=Object(n.createContext)(),w=function(e){var t=Object(n.useState)(null),a=Object(r.a)(t,2),o=a[0],i=a[1];return Object(n.useEffect)((function(){O.onAuthStateChanged((function(e){e&&(e.displayName?i(e.displayName):i(e.email)),console.log("from context: ",o)}))}),[o]),Object(v.jsx)(y.Provider,{value:[o,i],children:e.children})},C=(a(88),a(164)),P=a(166),I=a(167),S=a(186),k=a(168),N=a(185),D=a(187),F=Object(d.a)({root:{minWidth:275,marginBottom:10},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},result:{margin:15}});function A(e){var t=e.pollData2,a=F(),i=o.a.useState("1"),l=Object(r.a)(i,2),c=l[0],s=l[1],d=Object(n.useState)(!1),j=Object(r.a)(d,2),b=j[0],m=(j[1],function(e){s(e.target.value)});return t.map((function(e){return e.isAnonymous&&Object(v.jsxs)(C.a,{className:a.root,variant:"outlined",children:[Object(v.jsxs)(P.a,{children:[Object(v.jsx)(u.a,{color:"textSecondary",gutterBottom:!0,children:"Anonymous Poll"}),Object(v.jsx)(u.a,{variant:"h5",component:"h2",children:e.question}),Object(v.jsx)(I.a,{component:"fieldset",children:Object(v.jsxs)(S.a,{"aria-label":"gender",name:"gender1",value:c,onChange:m,children:[Object(v.jsx)(k.a,{color:"#000",value:"1",control:Object(v.jsx)(N.a,{}),label:e.option1}),Object(v.jsx)(k.a,{color:"#000",value:"2",control:Object(v.jsx)(N.a,{}),label:e.option2}),Object(v.jsx)(k.a,{color:"#000",value:"3",control:Object(v.jsx)(N.a,{}),label:e.option3}),Object(v.jsx)(k.a,{color:"#000",value:"4",control:Object(v.jsx)(N.a,{}),label:e.option4})]})})]}),Object(v.jsx)(h.a,{color:"secondary",variant:"contained",docId:e.id,style:{marginLeft:"38%"},children:"Submit"}),Object(v.jsx)("br",{}),b?Object(v.jsxs)("div",{className:a.result,children:[Object(v.jsx)(u.a,{id:"discrete-slider",gutterBottom:!0,children:e.option1}),Object(v.jsx)(D.a,{defaultValue:30,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",min:0,max:100,disabled:!0}),Object(v.jsx)("br",{}),Object(v.jsx)(u.a,{id:"discrete-slider",gutterBottom:!0,children:e.option2}),Object(v.jsx)(D.a,{defaultValue:30,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",min:0,max:100,disabled:!0}),Object(v.jsx)("br",{}),Object(v.jsx)(u.a,{id:"discrete-slider",gutterBottom:!0,children:e.option3}),Object(v.jsx)(D.a,{defaultValue:30,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",min:0,max:100,disabled:!0}),Object(v.jsx)("br",{}),Object(v.jsx)(u.a,{id:"discrete-slider",gutterBottom:!0,children:e.option4}),Object(v.jsx)(D.a,{defaultValue:30,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",min:0,max:100,disabled:!0}),Object(v.jsx)(h.a,{color:"secondary",variant:"contained",docId:e.id,children:"Submit"})]}):Object(v.jsx)(v.Fragment,{})]})}))}var B=a(49),L=a.n(B),M=a(66),T=a(22),_=a(184),V=a(177),G=a(131),U=a(96),W=a(94),E=a.n(W),q=a.p+"static/media/google.3cec7ff9.svg",H=Object(d.a)((function(e){return{icon:{height:30,width:30,margin:10},icons:{display:"flex",justifyContent:"space-around"}}}));var z=function(e){var t=e.signInGoogle,a=e.signInGitHub,n=H();return Object(v.jsxs)("div",{className:n.icons,children:[Object(v.jsx)(h.a,{type:"button",onClick:a,children:Object(v.jsx)(E.a,{className:n.icon})}),Object(v.jsx)(h.a,{type:"button",onClick:t,children:Object(v.jsx)("img",{src:q,alt:"Sample Google",className:n.icon})})]})},J=a(175),Q=a(183),R=a(176),K=a(182),Y=a(181),X=a(172),Z=a(130),$=a(173),ee=a(174),te=a(68),ae=a.n(te),ne=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"column"},icon:{height:30,width:30,margin:10},TextFieldMani:{marginTop:"10px"},icons:{display:"flex",justifyContent:"space-around"}}}));var oe=function(e){var t=e.handleChange,a=e.handleClickShowPassword,n=e.handleMouseDownPassword,o=e.values,i=(e.setValues,e.SignInUser),l=ne();return Object(v.jsxs)(j.a,{spacing:4,children:[Object(v.jsx)(u.a,{id:"transition-modal-title",variant:"h4",align:"center",children:"Log in"}),Object(v.jsxs)("form",{className:l.root,noValidate:!0,autoComplete:"off",children:[Object(v.jsx)(Y.a,{className:l.TextFieldMani,fullWidth:!0,id:"outlined-basic",type:"email",label:"Email",value:o.email,onChange:t("email"),variant:"outlined",InputProps:{endAdornment:Object(v.jsx)(ae.a,{})}}),Object(v.jsx)(Y.a,{className:l.TextFieldMani,fullWidth:!0,id:"outlined-basic",label:"Password",variant:"outlined",type:o.showPassword?"text":"password",value:o.password,onChange:t("password"),InputProps:{endAdornment:Object(v.jsx)(X.a,{position:"end",children:Object(v.jsx)(Z.a,{"aria-label":"toggle password visibility",onClick:a,onMouseDown:n,edge:"end",children:o.showPassword?Object(v.jsx)($.a,{}):Object(v.jsx)(ee.a,{})})})}}),Object(v.jsx)(h.a,{type:"submit",variant:"contained",color:"primary",style:{marginTop:"20px"},onClick:i,children:"Login"})]})]})},ie=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"column"},icon:{height:30,width:30,margin:10},TextFieldMani:{marginTop:"10px"},icons:{display:"flex",justifyContent:"space-around"}}}));var le=function(e){var t=e.handleChange,a=e.handleClickShowPassword,n=e.handleMouseDownPassword,o=(e.signInGoogle,e.signInGitHub,e.values),i=(e.setValues,e.CreateUser),l=ie();return Object(v.jsxs)(j.a,{spacing:4,children:[Object(v.jsx)(u.a,{id:"transition-modal-title",variant:"h4",align:"center",children:"Sign Up"}),Object(v.jsxs)("form",{className:l.root,noValidate:!0,autoComplete:"off",children:[Object(v.jsx)(Y.a,{className:l.TextFieldMani,fullWidth:!0,id:"outlined-basic",type:"email",label:"Email",value:o.email,onChange:t("email"),variant:"outlined",InputProps:{endAdornment:Object(v.jsx)(ae.a,{})}}),Object(v.jsx)(Y.a,{className:l.TextFieldMani,fullWidth:!0,id:"outlined-basic",label:"Password",variant:"outlined",type:o.showPassword?"text":"password",value:o.password,onChange:t("password"),InputProps:{endAdornment:Object(v.jsx)(X.a,{position:"end",children:Object(v.jsx)(Z.a,{"aria-label":"toggle password visibility",onClick:a,onMouseDown:n,edge:"end",children:o.showPassword?Object(v.jsx)($.a,{}):Object(v.jsx)(ee.a,{})})})}}),Object(v.jsx)(h.a,{type:"submit",variant:"contained",color:"primary",style:{marginTop:"20px"},onClick:i,children:"Sign up"})]})]})};function ce(e){var t=e.children,a=e.value,n=e.index,o=Object(U.a)(e,["children","value","index"]);return Object(v.jsx)("div",Object(T.a)(Object(T.a)({role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},o),{},{children:a===n&&Object(v.jsx)(K.a,{p:3,children:Object(v.jsx)(u.a,{children:t})})}))}var se=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"column",flexGrow:1,backgroundColor:e.palette.background.paper},icon:{height:30,width:30,margin:10},TextFieldMani:{marginTop:"10px"},icons:{display:"flex",justifyContent:"space-around"}}}));var re=function(e){var t=e.handleChange,a=e.handleClickShowPassword,o=e.handleMouseDownPassword,i=e.signInGoogle,l=e.signInGitHub,c=e.values,s=e.setValues,d=e.CreateUser,b=e.SignInUser,u=se(),h=Object(n.useState)(0),m=Object(r.a)(h,2),x=m[0],O=m[1];return Object(v.jsxs)(j.a,{className:u.root,children:[Object(v.jsx)(J.a,{position:"static",children:Object(v.jsxs)(Q.a,{variant:"fullWidth",value:x,onChange:function(e,t){O(t)},"aria-label":"simple tabs example",children:[Object(v.jsx)(R.a,{label:"Log in"}),Object(v.jsx)(R.a,{label:"Sign up"})]})}),Object(v.jsx)(ce,{value:x,index:0,children:Object(v.jsx)(oe,{handleChange:t,handleClickShowPassword:a,handleMouseDownPassword:o,values:c,setValues:s,SignInUser:b})}),Object(v.jsx)(ce,{value:x,index:1,children:Object(v.jsx)(le,{handleChange:t,handleClickShowPassword:a,handleMouseDownPassword:o,values:c,setValues:s,CreateUser:d})}),Object(v.jsx)("br",{}),Object(v.jsx)("hr",{}),Object(v.jsx)(z,{handleChange:t,handleClickShowPassword:a,handleMouseDownPassword:o,signInGoogle:i,signInGitHub:l,values:c,setValues:s})]})},de=Object(d.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function je(){var e=de(),t=Object(n.useContext)(y),a=Object(r.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)(!1),c=Object(r.a)(l,2),s=c[0],d=c[1],b=Object(n.useState)({email:"",password:"",showPassword:!1}),h=Object(r.a)(b,2),m=h[0],x=h[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)(u.a,{type:"button",onClick:function(){d(!0)},variant:"contained",children:"Login"}),Object(v.jsx)(_.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:s,onClose:function(){d(!1)},closeAfterTransition:!0,BackdropComponent:V.a,BackdropProps:{timeout:500},children:Object(v.jsx)(G.a,{in:s,children:Object(v.jsx)(j.a,{maxWidth:"xs",className:e.paper,children:o?Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(u.a,{varient:"h5",u:!0,children:["Welcome, ",o]})}):Object(v.jsx)(re,{handleChange:function(e){return function(t){x(Object(T.a)(Object(T.a)({},m),{},Object(M.a)({},e,t.target.value)))}},handleClickShowPassword:function(){x(Object(T.a)(Object(T.a)({},m),{},{showPassword:!m.showPassword}))},handleMouseDownPassword:function(e){e.preventDefault()},signInGoogle:function(e){e.preventDefault(),O.signInWithPopup(g).then((function(e){console.log(e),i(e.additionalUserInfo.username)}))},signInGitHub:function(e){e.preventDefault(),O.signInWithPopup(f).then((function(e){console.log(e),i(e.additionalUserInfo.username)}))},values:m,setValues:x,CreateUser:function(e){e.preventDefault(),O.createUserWithEmailAndPassword(m.email,m.password).then((function(e){var t=e.user;console.log("userCreated: ",t)})).catch((function(e){var t=e.code,a=e.message;console.log(t),console.log(a),alert(a)})),x({email:"",password:"",showPassword:!1})},SignInUser:function(e){e.preventDefault(),O.signInWithEmailAndPassword(m.email,m.password).then((function(e){var t=e.user;console.log("Loggedin user",t),i(t.email),alert("User Logged in")})).catch((function(e){var t=e.code,a=e.message;console.log(t),console.log(a),alert(a)})),x({email:"",password:"",showPassword:!1})}})})})})]})}var be=Object(d.a)((function(e){return{Btn:{display:"flex",flexDirection:"row-reverse"}}}));var ue=function(){var e=be();return Object(v.jsx)("div",{className:e.Btn,children:Object(v.jsx)(h.a,{startIcon:Object(v.jsx)(L.a,{}),color:"secondary",variant:"contained",children:Object(v.jsx)(je,{})})})},he=Object(d.a)({root:{minWidth:275,marginBottom:10},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},result:{margin:15}});var me=function(e){var t=e.data,a=he(),i=o.a.useState("1"),l=Object(r.a)(i,2),c=l[0],s=l[1],d=Object(n.useState)(!0),j=Object(r.a)(d,2),b=j[0];return j[1],Object(n.useEffect)((function(){console.log(t)}),[]),Object(v.jsxs)(C.a,{className:a.root,variant:"outlined",children:[Object(v.jsxs)(P.a,{children:[t.isAnonymous?Object(v.jsx)(u.a,{color:"textSecondary",gutterBottom:!0,children:"Anonymous Poll"}):Object(v.jsxs)(u.a,{color:"textSecondary",gutterBottom:!0,children:["The Poll is create by ",t.created_by]}),Object(v.jsx)(u.a,{variant:"h5",component:"h2",children:t.question}),Object(v.jsx)(I.a,{component:"fieldset",children:Object(v.jsxs)(S.a,{"aria-label":"gender",name:"gender1",value:c,onChange:function(e){s(e.target.value)},children:[Object(v.jsx)(k.a,{color:"#000",value:"1",control:Object(v.jsx)(N.a,{}),label:t.option1}),Object(v.jsx)(k.a,{color:"#000",value:"2",control:Object(v.jsx)(N.a,{}),label:t.option2}),Object(v.jsx)(k.a,{color:"#000",value:"3",control:Object(v.jsx)(N.a,{}),label:t.option3}),Object(v.jsx)(k.a,{color:"#000",value:"4",control:Object(v.jsx)(N.a,{}),label:t.option4})]})})]}),Object(v.jsx)(h.a,{startIcon:Object(v.jsx)(L.a,{}),color:"secondary",variant:"contained",id:t.id,onClick:function(e){e.target.id?console.log(e.target.id," ->",c):console.log("Firebase ID not loaded")},style:{marginLeft:"38%"},children:"Submit"}),Object(v.jsx)("br",{}),b?Object(v.jsx)(v.Fragment,{}):Object(v.jsxs)("div",{className:a.result,children:[Object(v.jsx)(u.a,{id:"discrete-slider",gutterBottom:!0,children:t.option1}),Object(v.jsx)(D.a,{defaultValue:t.option1_count,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",min:0,max:100,disabled:!0}),Object(v.jsx)("br",{}),Object(v.jsx)(u.a,{id:"discrete-slider",gutterBottom:!0,children:t.option2}),Object(v.jsx)(D.a,{defaultValue:t.option2_count,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",min:0,max:100,disabled:!0}),Object(v.jsx)("br",{}),Object(v.jsx)(u.a,{id:"discrete-slider",gutterBottom:!0,children:t.option3}),Object(v.jsx)(D.a,{defaultValue:t.option3_count,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",min:0,max:100,disabled:!0}),Object(v.jsx)("br",{}),Object(v.jsx)(u.a,{id:"discrete-slider",gutterBottom:!0,children:t.option4}),Object(v.jsx)(D.a,{defaultValue:t.option4_count,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",min:0,max:100,disabled:!0})]})]})};function xe(e){return e.pollData1.map((function(e){return!e.isAnonymous&&Object(v.jsx)(me,{data:e})}))}var Oe=a(6),pe=a(171),ge=a(188),fe=a(178),ve={poll_id:0,question:"",option1:"",option2:"",option3:"",option4:"",option1_count:0,option2_count:0,option3_count:0,option4_count:0,created_by:"",created_at:"",isAnonymous:!1},ye=Object(d.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing(1)},withoutLabel:{marginTop:e.spacing(3)},textField:{width:"25ch"},secnd:{display:"flex",alignItems:"center",justifyContent:"flex-start"}}}));function we(){var e=ye(),t=Object(n.useState)(ve),a=Object(r.a)(t,2),o=a[0],i=a[1];return Object(v.jsx)("div",{className:e.root,children:Object(v.jsxs)("div",{children:[Object(v.jsxs)(I.a,{fullWidth:!0,className:e.margin,variant:"filled",children:[Object(v.jsx)(ge.a,{htmlFor:"filled-adornment-amount",children:"Your Question"}),Object(v.jsx)(pe.a,{id:"filled-adornment-amount",value:o.question,onChange:function(e){return i(Object(T.a)(Object(T.a)({},o),{},{question:e.target.value}))}})]}),Object(v.jsxs)("div",{className:e.secnd,children:[Object(v.jsx)(Y.a,{label:"Option 1",id:"filled-start-adornment",className:Object(Oe.a)(e.margin,e.textField),variant:"filled",value:o.option1,onChange:function(e){return i(Object(T.a)(Object(T.a)({},o),{},{option1:e.target.value}))}}),Object(v.jsx)(Y.a,{label:"Option 2",id:"filled-start-adornment",className:Object(Oe.a)(e.margin,e.textField),variant:"filled",value:o.option2,onChange:function(e){return i(Object(T.a)(Object(T.a)({},o),{},{option2:e.target.value}))}})]}),Object(v.jsxs)("div",{className:e.secnd,children:[Object(v.jsx)(Y.a,{label:"Option 3",id:"filled-start-adornment",className:Object(Oe.a)(e.margin,e.textField),variant:"filled",value:o.option3,onChange:function(e){return i(Object(T.a)(Object(T.a)({},o),{},{option3:e.target.value}))}}),Object(v.jsx)(Y.a,{label:"Option 4",id:"filled-start-adornment",className:Object(Oe.a)(e.margin,e.textField),variant:"filled",value:o.option4,onChange:function(e){return i(Object(T.a)(Object(T.a)({},o),{},{option4:e.target.value}))}}),Object(v.jsx)(k.a,{labelPlacement:"start",label:"Anonymous",control:Object(v.jsx)(fe.a,{checked:o.isAnonymous,onChange:function(e){return i(Object(T.a)(Object(T.a)({},o),{},{isAnonymous:!o.isAnonymous}))},color:"primary",name:"checkedB",inputProps:{"aria-label":"primary checkbox"}})})]}),Object(v.jsx)("div",{className:e.secnd,children:Object(v.jsx)(h.a,{variant:"contained",color:"secondary",style:{marginLeft:"8px"},onClick:function(){var e=new Date;p.collection("polls").add(Object(T.a)(Object(T.a)({},o),{},{poll_id:Math.floor(9900001*Math.random())+1e5,option1_count:0,option2_count:0,option3_count:0,option4_count:0,created_by:m.a.auth().currentUser.displayName,created_at:e.getTime()})).then((function(){console.log(o),alert("Poll Created"),console.log("Poll Created"),i(ve)})).catch((function(e){alert("Something went wrong :("),console.log(e)}))},children:"Submit"})})]})})}var Ce=Object(d.a)((function(e){return{root:{flexGrow:1,minHeight:"100vh"},head1:{marginTop:30,display:"flex",alignItems:"center"},takePoll:{padding:10,marginTop:30,display:"flex",alignItems:"center",justifyContent:"center"},takePollIn:{display:"flex",alignItems:"center",flexDirection:"column"}}}));var Pe=function(){var e=Ce(),t=Object(n.useContext)(y),a=Object(r.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)([]),c=Object(r.a)(l,2),s=c[0],d=c[1];return Object(n.useEffect)((function(){p.collection("polls").orderBy("created_at","desc").get().then((function(e){d(e.docs.map((function(e){return e.data()})))}))}),[s]),Object(v.jsxs)(j.a,{className:e.root,children:[Object(v.jsxs)(b.a,{container:!0,className:e.head1,children:[Object(v.jsx)(b.a,{item:!0,md:4,align:"center",children:Object(v.jsx)(u.a,{className:"main-heading",color:"primary",style:{display:"flex"},children:"Let's Poll it"})}),Object(v.jsx)(b.a,{item:!0,md:6}),Object(v.jsx)(b.a,{item:!0,md:2,children:o?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(h.a,{startIcon:Object(v.jsx)(L.a,{}),color:"secondary",variant:"contained",onClick:function(){O.signOut().then((function(){i(null),alert("User Logged Out")})).catch((function(e){return alert(e.message)}))},children:"Logout"})}):Object(v.jsx)(ue,{})})]}),Object(v.jsx)(b.a,{container:!0,className:e.takePoll,children:o?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(b.a,{item:!0,md:4,className:e.takePollIn,children:[Object(v.jsx)(u.a,{align:"center",color:"secondary",variant:"h4",component:"h3",children:"Create a Poll"}),Object(v.jsx)("br",{}),Object(v.jsxs)(u.a,{align:"right",color:"secondary",variant:"subtitle",children:["Logged in as ",o]})]}),Object(v.jsx)(b.a,{item:!0,md:8,children:Object(v.jsx)(we,{})})]}):Object(v.jsx)(b.a,{item:!0,md:12,className:e.takePollIn,children:Object(v.jsx)(u.a,{align:"center",color:"secondary",variant:"h4",component:"h3",children:"Login to Create a Poll"})})}),Object(v.jsx)("br",{}),Object(v.jsx)(j.a,{children:Object(v.jsxs)(b.a,{container:!0,children:[Object(v.jsx)(b.a,{item:!0,md:5,children:Object(v.jsx)(xe,{pollData1:s})}),Object(v.jsx)(b.a,{item:!0,md:2}),Object(v.jsx)(b.a,{item:!0,md:5,children:Object(v.jsx)(A,{pollData2:s})})]})})]})};var Ie=function(){var e=Object(c.a)({typography:{fontFamily:"Raleway, Arial"},palette:{primary:{light:"#f5f4ff",main:"#f5f4ff",dark:"#f5f4ff"},secondary:{light:"rgba(0, 0, 0, 0.54)",main:"rgba(0, 0, 0, 0.54)",dark:"rgba(0, 0, 0, 0.54)"}}});return Object(v.jsx)(s.a,{theme:e,children:Object(v.jsx)(w,{children:Object(v.jsx)(Pe,{})})})},Se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,190)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),n(e),o(e),i(e),l(e)}))};l.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(Ie,{})}),document.getElementById("root")),Se()},88:function(e,t,a){}},[[127,1,2]]]);
//# sourceMappingURL=main.2959c5a8.chunk.js.map