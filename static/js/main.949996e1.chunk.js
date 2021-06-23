(this.webpackJsonpfirsthse=this.webpackJsonpfirsthse||[]).push([[0],{41:function(e,s,t){},59:function(e,s,t){},60:function(e,s,t){"use strict";t.r(s);var a=t(0),c=t.n(a),i=t(10),r=t.n(i),l=(t(41),t(12)),n=t(1);class o extends a.Component{render(){return Object(n.jsxs)("nav",{id:"navbar",className:"navbar order-last order-lg-0",children:[Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(l.a,{className:"nav-link scrollto active",to:"#hero",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.a,{className:"nav-link scrollto",to:"#about",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.a,{className:"nav-link scrollto",to:"#services",children:"Services"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.a,{className:"nav-link scrollto",to:"#footer",children:"Contact"})})]}),Object(n.jsx)("i",{className:"bi bi-list mobile-nav-toggle"})]})}}var d=o;class j extends a.Component{componentDidMount(){const e=(e,s=!1)=>(e=e.trim(),s?[...document.querySelectorAll(e)]:document.querySelector(e)),s=(s,t,a,c=!1)=>{let i=e(t,c);i&&(c?i.forEach((e=>e.addEventListener(s,a))):i.addEventListener(s,a))},t=(e,s)=>{e.addEventListener("scroll",s)};let a=e("#navbar .scrollto",!0);const c=()=>{let s=window.scrollY+200;a.forEach((t=>{if(!t.hash)return;let a=e(t.hash);a&&(s>=a.offsetTop&&s<=a.offsetTop+a.offsetHeight?t.classList.add("active"):t.classList.remove("active"))}))};window.addEventListener("load",c),t(document,c);const i=s=>{let t=e("#header"),a=t.offsetHeight;t.classList.contains("header-scrolled")||(a-=20);let c=e(s).offsetTop;window.scrollTo({top:c-a,behavior:"smooth"})};let r=e("#header");if(r){const e=()=>{window.scrollY>100?r.classList.add("header-scrolled"):r.classList.remove("header-scrolled")};window.addEventListener("load",e),t(document,e)}let l=e(".back-to-top");if(l){const e=()=>{window.scrollY>100?l.classList.add("active"):l.classList.remove("active")};window.addEventListener("load",e),t(document,e)}s("click",".mobile-nav-toggle",(function(s){e("#navbar").classList.toggle("navbar-mobile"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")})),s("click",".navbar .dropdown > a",(function(s){e("#navbar").classList.contains("navbar-mobile")&&(s.preventDefault(),this.nextElementSibling.classList.toggle("dropdown-active"))}),!0),s("click",".scrollto",(function(s){if(e(this.hash)){s.preventDefault();let t=e("#navbar");if(t.classList.contains("navbar-mobile")){t.classList.remove("navbar-mobile");let s=e(".mobile-nav-toggle");s.classList.toggle("bi-list"),s.classList.toggle("bi-x")}i(this.hash)}}),!0),window.addEventListener("load",(()=>{window.location.hash&&e(window.location.hash)&&i(window.location.hash)}))}render(){return Object(n.jsx)("header",{id:"header",className:"fixed-top d-flex align-items-center header-transparent",children:Object(n.jsxs)("div",{className:"container d-flex align-items-center",children:[Object(n.jsx)("a",{href:"index.html",className:"logo me-auto",children:Object(n.jsx)("img",{src:"assets/img/logo.png",alt:"",className:"img-fluid"})}),Object(n.jsx)(d,{}),Object(n.jsxs)("div",{className:"social-links",children:[Object(n.jsx)("a",{href:"#",className:"twitter",children:Object(n.jsx)("i",{className:"bi bi-twitter"})}),Object(n.jsx)("a",{href:"#",className:"facebook",children:Object(n.jsx)("i",{className:"bi bi-facebook"})}),Object(n.jsx)("a",{href:"#",className:"linkedin",children:Object(n.jsx)("i",{className:"bi bi-linkedin"})}),Object(n.jsx)("a",{href:"#",className:"instagram",children:Object(n.jsx)("i",{className:"bi bi-instagram"})})]})]})})}}var b=j;class m extends a.Component{render(){return Object(n.jsx)("section",{id:"hero",className:"clearfix",children:Object(n.jsx)("div",{className:"container d-flex h-100",children:Object(n.jsxs)("div",{className:"row justify-content-center align-self-center","data-aos":"fade-up",children:[Object(n.jsxs)("div",{className:"col-lg-6 intro-info order-lg-first order-last","data-aos":"zoom-in","data-aos-delay":100,children:[Object(n.jsx)("h2",{children:"We believe risk assessment is the core of safety"}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{href:"#about",className:"btn-get-started scrollto",children:"Start Here"})})]}),Object(n.jsx)("div",{className:"col-lg-6 intro-img order-lg-last order-first","data-aos":"zoom-out","data-aos-delay":200,children:Object(n.jsx)("img",{src:"assets/img/intro.svg",alt:"intro",className:"img-fluid"})})]})})})}}var h=m;class u extends a.Component{render(){return Object(n.jsx)("section",{id:"about",className:"about",children:Object(n.jsx)("div",{className:"container","data-aos":"fade-up",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-lg-5 col-md-6",children:Object(n.jsx)("div",{className:"about-img","data-aos":"fade-right","data-aos-delay":100,children:Object(n.jsx)("img",{src:"assets/img/about-img.svg",alt:"about"})})}),Object(n.jsx)("div",{className:"col-lg-7 col-md-6",children:Object(n.jsxs)("div",{className:"about-content","data-aos":"fade-left","data-aos-delay":100,children:[Object(n.jsx)("h2",{children:"About Us"}),Object(n.jsxs)("h3",{children:[Object(n.jsx)("strong",{children:"\u201cSafeguarding lives\u201d"})," is our just cause"]}),Object(n.jsx)("p",{children:"We tend to build a community of HSE professionals putting together their knowledge and expertise to build and improve risk assessments across all industries."}),Object(n.jsx)("p",{children:"to help those who are learners, beginners, professionals, for the sole purpose of \u2018safeguarding lives\u2019 , embrace the cause and join"}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"bi bi-check-circle"})," Ullamco laboris nisi ut aliquip ex ea commodo consequat."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"bi bi-check-circle"})," Duis aute irure dolor in reprehenderit in voluptate velit."]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"bi bi-check-circle"})," Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur."]})]})]})})]})})})}}var x=u,O=t(17);class v extends a.Component{render(){return Object(n.jsx)("section",{id:"services",className:"services section-bg",children:Object(n.jsxs)("div",{className:"container","data-aos":"fade-up",children:[Object(n.jsxs)("header",{className:"section-header",children:[Object(n.jsx)("h3",{children:"Services"}),Object(n.jsx)("p",{children:"Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus."})]}),Object(n.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(n.jsx)("div",{className:"col-md-6 col-lg-4 wow bounceInUp","data-aos":"zoom-in","data-aos-delay":100,children:Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{className:"icon",style:{background:"#fceef3"},children:Object(n.jsx)("i",{className:"bi",children:Object(n.jsx)(O.a,{className:"",style:{lineHeight:1}})})}),Object(n.jsx)("h4",{className:"title",children:Object(n.jsx)("a",{href:"#",children:"Risk assessment collaborative tool"})}),Object(n.jsx)("p",{className:"description",children:"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"})]})}),Object(n.jsx)("div",{className:"col-md-6 col-lg-4","data-aos":"zoom-in","data-aos-delay":200,children:Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{className:"icon",style:{background:"#fff0da"},children:Object(n.jsx)("i",{className:"bi",children:Object(n.jsx)(O.c,{className:"",style:{lineHeight:1}})})}),Object(n.jsx)("h4",{className:"title",children:Object(n.jsx)("a",{href:"#",children:"PPE management made easy"})}),Object(n.jsx)("p",{className:"description",children:"Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata"})]})}),Object(n.jsx)("div",{className:"d-flex col-md-6 col-lg-4","data-aos":"zoom-in","data-aos-delay":300,children:Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{className:"icon",style:{background:"#e6fdfc"},children:Object(n.jsx)("i",{className:"bi",children:Object(n.jsx)(O.b,{})})}),Object(n.jsx)("h4",{className:"title",children:Object(n.jsx)("a",{href:"#",children:"A community of professionals at your help"})}),Object(n.jsx)("p",{className:"description",children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"})]})})]})]})})}}var f=v,p=t(29),g=t(15),N=t(61);var k=function(){const{register:e,handleSubmit:s,formState:{errors:t}}=Object(p.a)(),{addToast:a}=Object(g.useToasts)(),{t:c}=Object(N.a)();return Object(n.jsxs)("form",{onSubmit:s((e=>{a(c("Thank You"),{appearance:"success",autoDismiss:!0})})),children:[Object(n.jsxs)("div",{className:"form-group has-validation",children:[Object(n.jsx)("input",{type:"text",name:"username",className:"form-control "+(t.username?"is-invalid":""),id:"name",placeholder:c("Name")+"*",...e("username",{required:!0})}),Object(n.jsx)("div",{className:"invalid-feedback",children:t.username&&c("Name required")})]}),Object(n.jsxs)("div",{className:"form-group mt-3",children:[Object(n.jsx)("input",{type:"email",className:"form-control "+(t.email?"is-invalid":""),name:"email",id:"email",placeholder:c("Email")+"*",...e("email",{required:!0})}),Object(n.jsx)("span",{className:"invalid-feedback",children:t.email&&"your email is required"})]}),Object(n.jsxs)("div",{className:"form-group mt-3",children:[Object(n.jsx)("input",{type:"text",className:"form-control "+(t.subject?"is-invalid":""),name:"subject",id:"subject",placeholder:c("Subject")+"*",...e("subject",{required:!0})}),Object(n.jsx)("span",{className:"invalid-feedback",children:t.subject&&"the subject is required"})]}),Object(n.jsxs)("div",{className:"form-group mt-3",children:[Object(n.jsx)("textarea",{className:"form-control "+(t.message?"is-invalid":""),name:"message",rows:5,placeholder:c("Message")+"*",...e("message",{required:!0})}),Object(n.jsx)("span",{className:"invalid-feedback",children:t.message&&"your message is required"})]}),Object(n.jsx)("div",{className:"text-center my-3",children:Object(n.jsx)("button",{type:"submit",title:"{t('Send Message')}",children:c("Send Message")})})]})},q=t(11);t(59);class w extends a.Component{render(){return Object(n.jsxs)("footer",{id:"footer",className:"section-bg",children:[Object(n.jsx)("div",{className:"footer-top",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-lg-6",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-sm-6",children:[Object(n.jsxs)("div",{className:"footer-info",children:[Object(n.jsx)("h3",{children:"First HSE"}),Object(n.jsx)("p",{children:"Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue."})]}),Object(n.jsxs)("div",{className:"footer-newsletter",children:[Object(n.jsx)("h4",{children:"Our Newsletter"}),Object(n.jsx)("p",{children:"Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem."}),Object(n.jsxs)("form",{action:"#",method:"post",children:[Object(n.jsx)("input",{type:"email",name:"email"}),Object(n.jsx)("input",{type:"submit",defaultValue:"Subscribe"})]})]})]}),Object(n.jsxs)("div",{className:"col-sm-6",children:[Object(n.jsxs)("div",{className:"footer-links",children:[Object(n.jsx)("h4",{children:"Useful Links"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(l.a,{smooth:!0,to:"#",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.a,{className:"scrollto",smooth:!0,to:"#about",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.a,{className:"scrollto",smooth:!0,to:"#services",children:"Services"})}),Object(n.jsx)("li",{children:Object(n.jsx)(q.b,{to:"/terms",children:"Terms of service"})}),Object(n.jsx)("li",{children:Object(n.jsx)(q.b,{to:"/privacy",children:"Privacy"})})]})]}),Object(n.jsxs)("div",{className:"footer-links",children:[Object(n.jsx)("h4",{children:"Contact Us"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:Object(n.jsx)("i",{className:"bi bi-compass footer-icon"})}),"A108 Adam Street ",Object(n.jsx)("br",{}),"New York, NY 535022",Object(n.jsx)("br",{}),"United States ",Object(n.jsx)("br",{}),Object(n.jsx)("strong",{children:Object(n.jsx)("i",{className:"bi bi-telephone footer-icon"})})," +1 5589 55488 55",Object(n.jsx)("br",{}),Object(n.jsx)("strong",{children:Object(n.jsx)("i",{className:"bi bi-info-circle footer-icon"})})," contact@firsthse.com",Object(n.jsx)("br",{}),Object(n.jsx)("strong",{children:Object(n.jsx)("i",{className:"bi bi-tools footer-icon"})})," support@firsthse.com",Object(n.jsx)("br",{})]})]}),Object(n.jsxs)("div",{className:"social-links",children:[Object(n.jsx)("a",{href:"#",className:"twitter",children:Object(n.jsx)("i",{className:"bi bi-twitter"})}),Object(n.jsx)("a",{href:"#",className:"facebook",children:Object(n.jsx)("i",{className:"bi bi-facebook"})}),Object(n.jsx)("a",{href:"#",className:"instagram",children:Object(n.jsx)("i",{className:"bi bi-instagram"})}),Object(n.jsx)("a",{href:"#",className:"linkedin",children:Object(n.jsx)("i",{className:"bi bi-linkedin"})})]})]})]})}),Object(n.jsx)("div",{className:"col-lg-6",children:Object(n.jsxs)("div",{className:"form",children:[Object(n.jsx)("h4",{children:"Send us a message"}),Object(n.jsx)("p",{children:"Your feedback is important to our teams for improving our products and services."}),Object(n.jsx)(g.ToastProvider,{children:Object(n.jsx)(k,{})})]})})]})})}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"copyright",children:["\xa9 Copyright ",Object(n.jsx)("strong",{children:"Rapid"}),". All Rights Reserved"]}),Object(n.jsxs)("div",{className:"credits",children:["Designed by ",Object(n.jsx)("a",{href:"https://bootstrapmade.com/",children:"BootstrapMade"})]})]})]})}}var y=w;class S extends a.Component{componentDidMount(){}render(){return Object(n.jsx)("a",{href:"#",className:"back-to-top d-flex align-items-center justify-content-center",children:Object(n.jsx)("i",{className:"bi bi-arrow-up-short"})})}}var L=S;class E extends a.Component{render(){return Object(n.jsx)("div",{children:"Privacy"})}}var M=E;class C extends a.Component{render(){return Object(n.jsx)("div",{children:"Terms"})}}var T=C,Y=t(4),V=t(34),A=t(13);V.a.use(A.e).init({resources:{en:{translation:{"Contact Us":"Contact Us","Send Message":"Send Message","Thank You":"Your message has been sent. Thank you!",Name:"Your Name",Email:"Your Email",Subject:"Subject",Message:"Your Message","Name required":"Your Name is required","Email required":"Your Email is required","Subject required":"Subject is required","Message required":"Your Message is required"}},fr:{translation:{"Contact Us":"Contactez Nous","Send Message":"Envoyer Message","Thank You":"Votre message a ete bien envoye. Merci!",Name:"Votre Nom",Email:"Votre Email",Subject:"Votre Sujet",Message:"Votre Message","Name required":"Votre Nom est requis","Email required":"Votre Email est requis","Subject required":"Votre Suject est requis","Message required":"Votre Message est requis"}}},lng:document.querySelector("html").lang,fallbackLng:"en",interpolation:{escapeValue:!1}});var D=function(){return Object(n.jsx)(q.a,{basename:"/client",children:Object(n.jsxs)(Y.c,{children:[Object(n.jsx)(Y.a,{path:"/",children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(b,{}),Object(n.jsx)(h,{}),Object(n.jsxs)("main",{id:"main",children:[Object(n.jsx)(x,{}),Object(n.jsx)(f,{})]}),Object(n.jsx)(y,{}),Object(n.jsx)(L,{})]})}),Object(n.jsx)(Y.a,{exact:!0,path:"/terms",component:T}),Object(n.jsx)(Y.a,{exact:!0,path:"/privacy",component:M})]})})};var U=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,62)).then((({getCLS:s,getFID:t,getFCP:a,getLCP:c,getTTFB:i})=>{s(e),t(e),a(e),c(e),i(e)}))};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),U()}},[[60,1,2]]]);
//# sourceMappingURL=main.949996e1.chunk.js.map