(this.webpackJsonpfirsthse=this.webpackJsonpfirsthse||[]).push([[0],{44:function(e){e.exports=JSON.parse('{"translation":{"Home":"Acceuil","About":"A props","About Us":"A props de nous","Contact Us":"Contactez Nous","Statment":"Nous pensons que l\'\xe9valuation des risques est au c\u0153ur de la s\xe9curit\xe9.","Start Here":"Commenceons Ici","Just Cause":"c\'est notre juste cause","About p1":"We tend to build a community of HSE professionals and practioners putting together their knowledge and expertise to build and improve risk assessments across all industries.","About p2":"To help Students, Beginners and Professionals alike, for the sole purpose of \u2018safeguarding lives\u2019, So embrace the cause and join","Useful Links":"Liens Utils","Feedback Message":"Vos commentaires sont importants pour nos \xe9quipes afin d\'am\xe9liorer nos produits et services.","Send Message":"Envoyer Message","Thank You":"Votre message a ete bien envoye. Merci!","Name":"Votre Nom","Email":"Votre Email","Subject":"Votre Sujet","Message":"Votre Message","Name required":"Votre Nom est requis","Email required":"Votre Email est requis","Subject required":"Votre Suject est requis","Message required":"Votre Message est requis"}}')},45:function(e){e.exports=JSON.parse('{"translation":{"Home":"Home","About":"About","About Us":"About Us","Contact Us":"Contact Us","Statment":"We believe risk assessment is the core of safety","Start Here":"Start Here","Just Cause":"is our just cause","About p1":"We tend to build a community of HSE professionals and practioners putting together their knowledge and expertise to build and improve risk assessments across all industries.","About p2":"To help Students, Beginners and Professionals alike, for the sole purpose of \u2018safeguarding lives\u2019, So embrace the cause and join","Useful Links":"USEFUL LINKS","Feedback Message":"Your feedback is important to our teams for improving our products and services.","Send Message":"Send Message","Thank You":"Your message has been sent. Thank you!","Name":"Your Name","Email":"Your Email","Subject":"Subject","Message":"Your Message","Name required":"Your Name is required","Email required":"Your Email is required","Subject required":"Subject is required","Message required":"Your Message is required"}}')},53:function(e,s,t){},74:function(e,s,t){},75:function(e,s,t){"use strict";t.r(s);var a=t(0),i=t(13),c=t.n(i),r=(t(53),t(14)),n=t(76),o=t(1);class l extends a.Component{render(){return Object(o.jsxs)("nav",{id:"navbar",className:"navbar order-last order-lg-0",children:[Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.a,{className:"nav-link scrollto active",to:"#hero",children:this.props.t("Home")})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.a,{className:"nav-link scrollto",to:"#about",children:this.props.t("About")})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.a,{className:"nav-link scrollto",to:"#services",children:this.props.t("Services")})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.a,{className:"nav-link scrollto",to:"#footer",children:this.props.t("Contact Us")})})]}),Object(o.jsx)("i",{className:"bi bi-list mobile-nav-toggle"})]})}}var d=Object(n.a)()(l);class j extends a.Component{componentDidMount(){const e=(e,s=!1)=>(e=e.trim(),s?[...document.querySelectorAll(e)]:document.querySelector(e)),s=(s,t,a,i=!1)=>{let c=e(t,i);c&&(i?c.forEach((e=>e.addEventListener(s,a))):c.addEventListener(s,a))},t=(e,s)=>{e.addEventListener("scroll",s)};let a=e("#navbar .scrollto",!0);const i=()=>{let s=window.scrollY+200;a.forEach((t=>{if(!t.hash)return;let a=e(t.hash);a&&(s>=a.offsetTop&&s<=a.offsetTop+a.offsetHeight?t.classList.add("active"):t.classList.remove("active"))}))};window.addEventListener("load",i),t(document,i);const c=s=>{let t=e("#header"),a=t.offsetHeight;t.classList.contains("header-scrolled")||(a-=20);let i=e(s).offsetTop;window.scrollTo({top:i-a,behavior:"smooth"})};let r=e("#header");if(r){const e=()=>{window.scrollY>100?r.classList.add("header-scrolled"):r.classList.remove("header-scrolled")};window.addEventListener("load",e),t(document,e)}let n=e(".back-to-top");if(n){const e=()=>{window.scrollY>100?n.classList.add("active"):n.classList.remove("active")};window.addEventListener("load",e),t(document,e)}s("click",".mobile-nav-toggle",(function(s){e("#navbar").classList.toggle("navbar-mobile"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")})),s("click",".navbar .dropdown > a",(function(s){e("#navbar").classList.contains("navbar-mobile")&&(s.preventDefault(),this.nextElementSibling.classList.toggle("dropdown-active"))}),!0),s("click",".scrollto",(function(s){if(e(this.hash)){s.preventDefault();let t=e("#navbar");if(t.classList.contains("navbar-mobile")){t.classList.remove("navbar-mobile");let s=e(".mobile-nav-toggle");s.classList.toggle("bi-list"),s.classList.toggle("bi-x")}c(this.hash)}}),!0),window.addEventListener("load",(()=>{window.location.hash&&e(window.location.hash)&&c(window.location.hash)}))}render(){return Object(o.jsx)("header",{id:"header",className:"fixed-top d-flex align-items-center header-transparent",children:Object(o.jsxs)("div",{className:"container d-flex align-items-center",children:[Object(o.jsx)("a",{href:"index.html",className:"logo me-auto",children:Object(o.jsx)("img",{src:"assets/img/logo.png",alt:"",className:"img-fluid"})}),Object(o.jsx)(d,{}),Object(o.jsxs)("div",{className:"social-links",children:[Object(o.jsx)("a",{href:"#",className:"twitter",children:Object(o.jsx)("i",{className:"bi bi-twitter"})}),Object(o.jsx)("a",{href:"#",className:"facebook",children:Object(o.jsx)("i",{className:"bi bi-facebook"})}),Object(o.jsx)("a",{href:"#",className:"linkedin",children:Object(o.jsx)("i",{className:"bi bi-linkedin"})}),Object(o.jsx)("a",{href:"#",className:"instagram",children:Object(o.jsx)("i",{className:"bi bi-instagram"})})]})]})})}}var b=j;class m extends a.Component{render(){return Object(o.jsx)("section",{id:"hero",className:"clearfix",children:Object(o.jsx)("div",{className:"container d-flex h-100",children:Object(o.jsxs)("div",{className:"row justify-content-center align-self-center","data-aos":"fade-up",children:[Object(o.jsxs)("div",{className:"col-lg-6 intro-info order-lg-first order-last","data-aos":"zoom-in","data-aos-delay":100,children:[Object(o.jsx)("h2",{children:this.props.t("Statment")}),Object(o.jsx)("div",{children:Object(o.jsx)("a",{href:"#about",className:"btn-get-started scrollto",children:this.props.t("Start Here")})})]}),Object(o.jsx)("div",{className:"col-lg-6 intro-img order-lg-last order-first","data-aos":"zoom-out","data-aos-delay":200,children:Object(o.jsx)("img",{src:"assets/img/intro.svg",alt:"intro",className:"img-fluid"})})]})})})}}var u=Object(n.a)()(m);class h extends a.Component{render(){return Object(o.jsx)("section",{id:"about",className:"about",children:Object(o.jsx)("div",{className:"container","data-aos":"fade-up",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-lg-5 col-md-6",children:Object(o.jsx)("div",{className:"about-img","data-aos":"fade-right","data-aos-delay":100,children:Object(o.jsx)("img",{src:"assets/img/about-img.svg",alt:"about"})})}),Object(o.jsx)("div",{className:"col-lg-7 col-md-6",children:Object(o.jsxs)("div",{className:"about-content","data-aos":"fade-left","data-aos-delay":100,children:[Object(o.jsx)("h2",{children:this.props.t("About Us")}),Object(o.jsxs)("h3",{children:[Object(o.jsx)("strong",{children:"\u201cSafeguarding lives\u201d"})," ",this.props.t("Just Cause")]}),Object(o.jsx)("p",{children:this.props.t("About p1")}),Object(o.jsx)("p",{children:this.props.t("About p2")}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{className:"bi bi-check-circle"})," Ullamco laboris nisi ut aliquip ex ea commodo consequat."]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{className:"bi bi-check-circle"})," Duis aute irure dolor in reprehenderit in voluptate velit."]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{className:"bi bi-check-circle"})," Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur."]})]})]})})]})})})}}var x=Object(n.a)()(h),O=t(24);class p extends a.Component{render(){return Object(o.jsx)("section",{id:"services",className:"services section-bg",children:Object(o.jsxs)("div",{className:"container","data-aos":"fade-up",children:[Object(o.jsxs)("header",{className:"section-header",children:[Object(o.jsx)("h3",{children:"Services"}),Object(o.jsx)("p",{children:"Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus."})]}),Object(o.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(o.jsx)("div",{className:"col-md-6 col-lg-4 wow bounceInUp","data-aos":"zoom-in","data-aos-delay":100,children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("div",{className:"icon",style:{background:"#fceef3"},children:Object(o.jsx)("i",{className:"bi",children:Object(o.jsx)(O.a,{className:"",style:{lineHeight:1}})})}),Object(o.jsx)("h4",{className:"title",children:Object(o.jsx)("a",{href:"#",children:"Risk assessment collaborative tool"})}),Object(o.jsx)("p",{className:"description",children:"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"})]})}),Object(o.jsx)("div",{className:"col-md-6 col-lg-4","data-aos":"zoom-in","data-aos-delay":200,children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("div",{className:"icon",style:{background:"#fff0da"},children:Object(o.jsx)("i",{className:"bi",children:Object(o.jsx)(O.c,{className:"",style:{lineHeight:1}})})}),Object(o.jsx)("h4",{className:"title",children:Object(o.jsx)("a",{href:"#",children:"PPE management made easy"})}),Object(o.jsx)("p",{className:"description",children:"Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata"})]})}),Object(o.jsx)("div",{className:"d-flex col-md-6 col-lg-4","data-aos":"zoom-in","data-aos-delay":300,children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("div",{className:"icon",style:{background:"#e6fdfc"},children:Object(o.jsx)("i",{className:"bi",children:Object(o.jsx)(O.b,{})})}),Object(o.jsx)("h4",{className:"title",children:Object(o.jsx)("a",{href:"#",children:"A community of professionals at your help"})}),Object(o.jsx)("p",{className:"description",children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"})]})})]})]})})}}var v=p,f=t(40),g=t(22),N=t(37);var k=function(){const{register:e,handleSubmit:s,formState:{errors:t}}=Object(f.a)(),{addToast:a}=Object(g.useToasts)(),{t:i}=Object(N.a)();return Object(o.jsxs)("form",{onSubmit:s((e=>{a(i("Thank You"),{appearance:"success",autoDismiss:!0})})),children:[Object(o.jsxs)("div",{className:"form-group has-validation",children:[Object(o.jsx)("input",{type:"text",name:"username",className:"form-control "+(t.username?"is-invalid":""),id:"name",placeholder:i("Name")+"*",...e("username",{required:!0})}),Object(o.jsx)("div",{className:"invalid-feedback",children:t.username&&i("Name required")})]}),Object(o.jsxs)("div",{className:"form-group mt-3",children:[Object(o.jsx)("input",{type:"email",className:"form-control "+(t.email?"is-invalid":""),name:"email",id:"email",placeholder:i("Email")+"*",...e("email",{required:!0})}),Object(o.jsx)("span",{className:"invalid-feedback",children:t.email&&"your email is required"})]}),Object(o.jsxs)("div",{className:"form-group mt-3",children:[Object(o.jsx)("input",{type:"text",className:"form-control "+(t.subject?"is-invalid":""),name:"subject",id:"subject",placeholder:i("Subject")+"*",...e("subject",{required:!0})}),Object(o.jsx)("span",{className:"invalid-feedback",children:t.subject&&"the subject is required"})]}),Object(o.jsxs)("div",{className:"form-group mt-3",children:[Object(o.jsx)("textarea",{className:"form-control "+(t.message?"is-invalid":""),name:"message",rows:5,placeholder:i("Message")+"*",...e("message",{required:!0})}),Object(o.jsx)("span",{className:"invalid-feedback",children:t.message&&"your message is required"})]}),Object(o.jsx)("div",{className:"text-center my-3",children:Object(o.jsx)("button",{type:"submit",title:"{t('Send Message')}",children:i("Send Message")})})]})},S=t(12);t(74);class q extends a.Component{render(){return Object(o.jsxs)("footer",{id:"footer",className:"section-bg",children:[Object(o.jsx)("div",{className:"footer-top",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-lg-6",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-sm-6",children:[Object(o.jsxs)("div",{className:"footer-info",children:[Object(o.jsx)("h3",{children:"First HSE"}),Object(o.jsx)("p",{children:"Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue."})]}),Object(o.jsxs)("div",{className:"footer-newsletter",children:[Object(o.jsx)("h4",{children:"Our Newsletter"}),Object(o.jsx)("p",{children:"Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem."}),Object(o.jsxs)("form",{action:"#",method:"post",children:[Object(o.jsx)("input",{type:"email",name:"email"}),Object(o.jsx)("input",{type:"submit",defaultValue:"Subscribe"})]})]})]}),Object(o.jsxs)("div",{className:"col-sm-6",children:[Object(o.jsxs)("div",{className:"footer-links",children:[Object(o.jsx)("h4",{children:"Useful Links"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.a,{smooth:!0,to:"#",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.a,{className:"scrollto",smooth:!0,to:"#about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.a,{className:"scrollto",smooth:!0,to:"#services",children:"Services"})}),Object(o.jsx)("li",{children:Object(o.jsx)(S.b,{to:"/terms",children:"Terms of service"})}),Object(o.jsx)("li",{children:Object(o.jsx)(S.b,{to:"/privacy",children:"Privacy"})})]})]}),Object(o.jsxs)("div",{className:"footer-links",children:[Object(o.jsx)("h4",{children:"Contact Us"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:Object(o.jsx)("i",{className:"bi bi-compass footer-icon"})}),"A108 Adam Street ",Object(o.jsx)("br",{}),"New York, NY 535022",Object(o.jsx)("br",{}),"United States ",Object(o.jsx)("br",{}),Object(o.jsx)("strong",{children:Object(o.jsx)("i",{className:"bi bi-telephone footer-icon"})})," +1 5589 55488 55",Object(o.jsx)("br",{}),Object(o.jsx)("strong",{children:Object(o.jsx)("i",{className:"bi bi-info-circle footer-icon"})})," contact@firsthse.com",Object(o.jsx)("br",{}),Object(o.jsx)("strong",{children:Object(o.jsx)("i",{className:"bi bi-tools footer-icon"})})," support@firsthse.com",Object(o.jsx)("br",{})]})]}),Object(o.jsxs)("div",{className:"social-links",children:[Object(o.jsx)("a",{href:"#",className:"twitter",children:Object(o.jsx)("i",{className:"bi bi-twitter"})}),Object(o.jsx)("a",{href:"#",className:"facebook",children:Object(o.jsx)("i",{className:"bi bi-facebook"})}),Object(o.jsx)("a",{href:"#",className:"instagram",children:Object(o.jsx)("i",{className:"bi bi-instagram"})}),Object(o.jsx)("a",{href:"#",className:"linkedin",children:Object(o.jsx)("i",{className:"bi bi-linkedin"})})]})]})]})}),Object(o.jsx)("div",{className:"col-lg-6",children:Object(o.jsxs)("div",{className:"form",children:[Object(o.jsx)("h4",{children:"Send us a message"}),Object(o.jsx)("p",{children:"Your feedback is important to our teams for improving our products and services."}),Object(o.jsx)(g.ToastProvider,{children:Object(o.jsx)(k,{})})]})})]})})}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"copyright",children:["\xa9 Copyright ",Object(o.jsx)("strong",{children:"Rapid"}),". All Rights Reserved"]}),Object(o.jsxs)("div",{className:"credits",children:["Designed by ",Object(o.jsx)("a",{href:"https://bootstrapmade.com/",children:"BootstrapMade"})]})]})]})}}var y=q;class w extends a.Component{componentDidMount(){}render(){return Object(o.jsx)("a",{href:"#",className:"back-to-top d-flex align-items-center justify-content-center",children:Object(o.jsx)("i",{className:"bi bi-arrow-up-short"})})}}var L=w;class E extends a.Component{render(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{}),Object(o.jsx)(u,{}),Object(o.jsxs)("main",{id:"main",children:[Object(o.jsx)(x,{}),Object(o.jsx)(v,{})]}),Object(o.jsx)(y,{}),Object(o.jsx)(L,{})]})}}var A=E;class C extends a.Component{render(){return Object(o.jsx)("div",{children:"Privacy"})}}var M=C;class U extends a.Component{render(){return Object(o.jsx)("div",{children:"Terms"})}}var T=U,Y=t(41),H=t(42),V=t(44),D=t(45),P=t(4),F=t(47),J=t(18);F.a.use(Y.a).use(H.a).use(J.e).init({react:{useSuspense:!1},resources:{fr:V,en:D},detection:{order:["querystring","navigator"],lookupQuerystring:"lng"},fallbackLng:"fr",supportedLngs:["de","en","es","fr"],interpolation:{escapeValue:!1}});var z=function(){return Object(o.jsxs)(P.c,{children:[Object(o.jsx)(P.a,{exact:!0,path:"/",component:A}),Object(o.jsx)(P.a,{path:"/terms",component:T}),Object(o.jsx)(P.a,{path:"/privacy",component:M})]})};var B=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,77)).then((({getCLS:s,getFID:t,getFCP:a,getLCP:i,getTTFB:c})=>{s(e),t(e),a(e),i(e),c(e)}))};c.a.render(Object(o.jsx)(S.a,{basename:"/client",children:Object(o.jsx)(P.a,{component:z})}),document.getElementById("root")),B()}},[[75,1,2]]]);
//# sourceMappingURL=main.ff1f20c2.chunk.js.map