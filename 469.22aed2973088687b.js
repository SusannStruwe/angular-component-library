"use strict";(self.webpackChunkangular_component_library=self.webpackChunkangular_component_library||[]).push([[469],{5384:(S,y,a)=>{a.d(y,{a:()=>g});var o=a(6895),d=a(433),p=a(2216),h=a(2687),t=a(1571);class u{constructor(){}readProperty(n){return window.getComputedStyle(document.body).getPropertyValue("--"+n)}setProperty(n,i){document.body.style.setProperty("--"+i,n)}}u.\u0275fac=function(n){return new(n||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["sass-helper"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(n,i){1&n&&t._UZ(0,"div")},encapsulation:2});class g{constructor(n){this.changeDetector=n,this.faRefresh=h.QDM,this.primaryColor=null}ngAfterViewInit(){this.sassHelper&&(this.primaryColor=this.sassHelper.readProperty("primary-color"),this.changeDetector.detectChanges())}refreshView(){this.sassHelper?.setProperty(this.primaryColor,"primary-color"),this.sassHelper?.setProperty(this.primaryColor,"primary-color-dark")}}g.\u0275fac=function(n){return new(n||g)(t.Y36(t.sBO))},g.\u0275cmp=t.Xpm({type:g,selectors:[["theme-changer-component"]],viewQuery:function(n,i){if(1&n&&t.Gf(u,5),2&n){let c;t.iGM(c=t.CRH())&&(i.sassHelper=c.first)}},standalone:!0,features:[t.jDz],decls:9,vars:4,consts:[[1,"theme-input"],[1,"flex-row"],[1,"color-preview"],["type","text",3,"ngModel","ngModelChange"],[1,"refresh-btn",3,"click"],[3,"icon"]],template:function(n,i){1&n&&(t._UZ(0,"sass-helper"),t.TgZ(1,"div",0)(2,"p"),t._uU(3,"Change primary-color:"),t.qZA(),t.TgZ(4,"div",1),t._UZ(5,"div",2),t.TgZ(6,"input",3),t.NdJ("ngModelChange",function(f){return i.primaryColor=f}),t.qZA(),t.TgZ(7,"div",4),t.NdJ("click",function(){return i.refreshView()}),t._UZ(8,"fa-icon",5),t.qZA()()()),2&n&&(t.xp6(5),t.Udp("background",i.primaryColor),t.xp6(1),t.Q6J("ngModel",i.primaryColor),t.xp6(2),t.Q6J("icon",i.faRefresh))},dependencies:[o.ez,p.uH,p.BN,u,d.u5,d.Fj,d.JJ,d.On],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}.theme-input[_ngcontent-%COMP%]{position:absolute;top:5px;right:10px;margin:0 10px}.theme-input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.theme-input[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]{position:relative}.theme-input[_ngcontent-%COMP%]   .color-preview[_ngcontent-%COMP%]{position:absolute;width:20px;height:20px;border-radius:3px;background:var(--primary-color);left:5px;top:10px}.theme-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:40px;box-sizing:border-box;border:1px solid #ccc;border-right:none;border-radius:0;font-size:1.2em;outline:none;font-family:Source Sans Pro;padding:2px 5px 2px 40px;width:150px;cursor:pointer}.theme-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:var(--primary-color)}.theme-input[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]{height:40px;border:1px solid var(--primary-color);padding:7px;background:var(--primary-color);display:flex;justify-content:center;cursor:pointer;transition:background .6s ease;box-sizing:border-box}.theme-input[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.5em;color:#fff}.theme-input[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]:hover{filter:brightness(.9)}']})},3353:(S,y,a)=>{a.d(y,{i$:()=>i,kV:()=>b,sA:()=>w,t4:()=>h,ud:()=>t});var o=a(1571),d=a(6895);let p;try{p=typeof Intl<"u"&&Intl.v8BreakIterator}catch{p=!1}let s,M,h=(()=>{class e{constructor(m){this._platformId=m,this.isBrowser=this._platformId?(0,d.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!p)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return e.\u0275fac=function(m){return new(m||e)(o.LFG(o.Lbi))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),t=(()=>{class e{}return e.\u0275fac=function(m){return new(m||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({}),e})();function i(e){return function n(){if(null==s&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>s=!0}))}finally{s=s||!1}return s}()?e:!!e.capture}function b(e){if(function C(){if(null==M){const e=typeof document<"u"?document.head:null;M=!(!e||!e.createShadowRoot&&!e.attachShadow)}return M}()){const r=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function w(e){return e.composedPath?e.composedPath()[0]:e.target}},878:(S,y,a)=>{a.d(y,{Z:()=>p});const o=void 0,p=["de",[["AM","PM"],o,o],o,[["S","M","D","M","D","F","S"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]],[["S","M","D","M","D","F","S"],["So","Mo","Di","Mi","Do","Fr","Sa"],["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan.","Feb.","M\xe4rz","Apr.","Mai","Juni","Juli","Aug.","Sept.","Okt.","Nov.","Dez."],["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]],[["v. Chr.","n. Chr."],o,o],1,[6,0],["dd.MM.yy","dd.MM.y","d. MMMM y","EEEE, d. MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",o,"{1} 'um' {0}",o],[",",".",";","%","+","-","E","\xb7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0\xa0%","#,##0.00\xa0\xa4","#E0"],"EUR","\u20ac","Euro",{ATS:["\xf6S"],AUD:["AU$","$"],BGM:["BGK"],BGO:["BGJ"],BYN:[o,"\u0440."],CUC:[o,"Cub$"],DEM:["DM"],FKP:[o,"Fl\xa3"],GHS:[o,"\u20b5"],GNF:[o,"F.G."],KMF:[o,"FC"],PHP:[o,"\u20b1"],RON:[o,"L"],RUR:[o,"\u0440."],RWF:[o,"F.Rw"],SYP:[],THB:["\u0e3f"],TWD:["NT$"],XXX:[],ZMW:[o,"K"]},"ltr",function d(h){const l=Math.floor(Math.abs(h)),u=h.toString().replace(/^[^.]*\.?/,"").length;return 1===l&&0===u?1:5}]}}]);