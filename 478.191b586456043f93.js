"use strict";(self.webpackChunkangular_component_library=self.webpackChunkangular_component_library||[]).push([[478],{2478:(d,p,r)=>{r.r(p),r.d(p,{CardsComponent:()=>a});var u=r(5384),s=r(6175),e=r(1571);class a{constructor(){}}a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["cards-component"]],standalone:!0,features:[e.jDz],decls:15,vars:13,consts:[[1,"header"],[1,"content"],[1,"container"],[1,"grid"],[3,"imageUrl","title","description"],[3,"bgColor","title","description"],[3,"title","description"],[3,"title"],[3,"imageUrl","title"],[3,"bgColor","title"]],template:function(i,f){1&i&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Cards"),e.qZA(),e._UZ(3,"theme-changer-component"),e.qZA(),e.TgZ(4,"div",1)(5,"div",2)(6,"h2"),e._uU(7,"card-component"),e.qZA(),e.TgZ(8,"div",3),e._UZ(9,"card-component",4)(10,"card-component",5)(11,"card-component",6)(12,"card-component",7)(13,"card-component",8)(14,"card-component",9),e.qZA()()()),2&i&&(e.xp6(9),e.Q6J("imageUrl","assets/Bild1.jpg")("title","\xdcberschrift 1")("description","Lorem ipsum dolor sit amet, consetetur sadipscing elitr"),e.xp6(1),e.Q6J("bgColor","#91eae1")("title","\xdcberschrift 1")("description","Lorem ipsum dolor sit amet, consetetur sadipscing elitr"),e.xp6(1),e.Q6J("title","\xdcberschrift 1")("description","Lorem ipsum dolor sit amet, consetetur sadipscing elitr"),e.xp6(1),e.Q6J("title","\xdcberschrift 1"),e.xp6(1),e.Q6J("imageUrl","assets/Bild1.jpg")("title","\xdcberschrift 1"),e.xp6(1),e.Q6J("bgColor","#91eae1")("title","\xdcberschrift 1"))},dependencies:[u.a,s.A],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}.container[_ngcontent-%COMP%]{min-width:650px;justify-content:center}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:5px}@media only screen and (max-width: 1100px){.grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media only screen and (max-width: 925px){.container[_ngcontent-%COMP%]{min-width:auto}.grid[_ngcontent-%COMP%]{grid-template-columns:1fr!important}}']})},5384:(d,p,r)=>{r.d(p,{a:()=>l});var u=r(6895),s=r(433),e=r(2216),a=r(2687),t=r(1571);class f{constructor(){}readProperty(o){return window.getComputedStyle(document.body).getPropertyValue("--"+o)}setProperty(o,n){document.body.style.setProperty("--"+n,o)}}f.\u0275fac=function(o){return new(o||f)},f.\u0275cmp=t.Xpm({type:f,selectors:[["sass-helper"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(o,n){1&o&&t._UZ(0,"div")},encapsulation:2});class l{constructor(o){this.changeDetector=o,this.faRefresh=a.QDM,this.primaryColor=null}ngAfterViewInit(){this.sassHelper&&(this.primaryColor=this.sassHelper.readProperty("primary-color"),this.changeDetector.detectChanges())}refreshView(){this.sassHelper?.setProperty(this.primaryColor,"primary-color"),this.sassHelper?.setProperty(this.primaryColor,"primary-color-dark")}}l.\u0275fac=function(o){return new(o||l)(t.Y36(t.sBO))},l.\u0275cmp=t.Xpm({type:l,selectors:[["theme-changer-component"]],viewQuery:function(o,n){if(1&o&&t.Gf(f,5),2&o){let m;t.iGM(m=t.CRH())&&(n.sassHelper=m.first)}},standalone:!0,features:[t.jDz],decls:9,vars:4,consts:[[1,"theme-input"],[1,"flex-row"],[1,"color-preview"],["type","text",3,"ngModel","ngModelChange"],[1,"refresh-btn",3,"click"],[3,"icon"]],template:function(o,n){1&o&&(t._UZ(0,"sass-helper"),t.TgZ(1,"div",0)(2,"p"),t._uU(3,"Change primary-color:"),t.qZA(),t.TgZ(4,"div",1),t._UZ(5,"div",2),t.TgZ(6,"input",3),t.NdJ("ngModelChange",function(g){return n.primaryColor=g}),t.qZA(),t.TgZ(7,"div",4),t.NdJ("click",function(){return n.refreshView()}),t._UZ(8,"fa-icon",5),t.qZA()()()),2&o&&(t.xp6(5),t.Udp("background",n.primaryColor),t.xp6(1),t.Q6J("ngModel",n.primaryColor),t.xp6(2),t.Q6J("icon",n.faRefresh))},dependencies:[u.ez,e.uH,e.BN,f,s.u5,s.Fj,s.JJ,s.On],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}.theme-input[_ngcontent-%COMP%]{position:absolute;top:5px;right:10px;margin:0 10px}.theme-input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.theme-input[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]{position:relative}.theme-input[_ngcontent-%COMP%]   .color-preview[_ngcontent-%COMP%]{position:absolute;width:20px;height:20px;border-radius:3px;background:var(--primary-color);left:5px;top:10px}.theme-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:40px;box-sizing:border-box;border:1px solid #ccc;border-right:none;border-radius:0;font-size:1.2em;outline:none;font-family:Source Sans Pro;padding:2px 5px 2px 40px;width:150px;cursor:pointer}.theme-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:var(--primary-color)}.theme-input[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]{height:40px;border:1px solid var(--primary-color);padding:7px;background:var(--primary-color);display:flex;justify-content:center;cursor:pointer;transition:background .6s ease;box-sizing:border-box}.theme-input[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.5em;color:#fff}.theme-input[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]:hover{filter:brightness(.9)}']})}}]);