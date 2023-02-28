"use strict";(self.webpackChunkangular_component_library=self.webpackChunkangular_component_library||[]).push([[828],{5384:(k,C,c)=>{c.d(C,{a:()=>b});var p=c(6895),r=c(433),l=c(2216),x=c(2687),s=c(1571);class d{constructor(){}readProperty(a){return window.getComputedStyle(document.body).getPropertyValue("--"+a)}setProperty(a,g){document.body.style.setProperty("--"+g,a)}}d.\u0275fac=function(a){return new(a||d)},d.\u0275cmp=s.Xpm({type:d,selectors:[["sass-helper"]],standalone:!0,features:[s.jDz],decls:1,vars:0,template:function(a,g){1&a&&s._UZ(0,"div")},encapsulation:2});class b{constructor(a){this.changeDetector=a,this.faRefresh=x.QDM,this.primaryColor=null}ngAfterViewInit(){this.sassHelper&&(this.primaryColor=this.sassHelper.readProperty("primary-color"),this.changeDetector.detectChanges())}refreshView(){this.sassHelper?.setProperty(this.primaryColor,"primary-color"),this.sassHelper?.setProperty(this.primaryColor,"primary-color-dark")}}b.\u0275fac=function(a){return new(a||b)(s.Y36(s.sBO))},b.\u0275cmp=s.Xpm({type:b,selectors:[["theme-changer-component"]],viewQuery:function(a,g){if(1&a&&s.Gf(d,5),2&a){let f;s.iGM(f=s.CRH())&&(g.sassHelper=f.first)}},standalone:!0,features:[s.jDz],decls:9,vars:4,consts:[[1,"theme-input"],[1,"flex-row"],[1,"color-preview"],["type","text",3,"ngModel","ngModelChange"],[1,"refresh-btn",3,"click"],[3,"icon"]],template:function(a,g){1&a&&(s._UZ(0,"sass-helper"),s.TgZ(1,"div",0)(2,"p"),s._uU(3,"Change primary-color:"),s.qZA(),s.TgZ(4,"div",1),s._UZ(5,"div",2),s.TgZ(6,"input",3),s.NdJ("ngModelChange",function(y){return g.primaryColor=y}),s.qZA(),s.TgZ(7,"div",4),s.NdJ("click",function(){return g.refreshView()}),s._UZ(8,"fa-icon",5),s.qZA()()()),2&a&&(s.xp6(5),s.Udp("background",g.primaryColor),s.xp6(1),s.Q6J("ngModel",g.primaryColor),s.xp6(2),s.Q6J("icon",g.faRefresh))},dependencies:[p.ez,l.uH,l.BN,d,r.u5,r.Fj,r.JJ,r.On],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}.theme-input[_ngcontent-%COMP%]{position:absolute;top:5px;right:10px;margin:0 10px}.theme-input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.theme-input[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]{position:relative}.theme-input[_ngcontent-%COMP%]   .color-preview[_ngcontent-%COMP%]{position:absolute;width:20px;height:20px;border-radius:3px;background:var(--primary-color);left:5px;top:10px}.theme-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:40px;box-sizing:border-box;border:1px solid #ccc;background-color:var(--bg-color);color:var(--text-color);border-right:none;border-radius:0;font-size:1.2em;outline:none;font-family:Source Sans Pro;padding:2px 5px 2px 40px;width:150px;cursor:pointer}.theme-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:var(--primary-color)}.theme-input[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]{height:40px;border:1px solid var(--primary-color);padding:7px;background:var(--primary-color);display:flex;justify-content:center;cursor:pointer;transition:background .6s ease;box-sizing:border-box}.theme-input[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.5em;color:var(--fa-icon-color)}.theme-input[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]:hover{filter:brightness(.85)}']})},2828:(k,C,c)=>{c.r(C),c.d(C,{ProgressbarsComponent:()=>h});var p=c(6895),r=c(1571),l=c(2216),x=c(2687),s=c(5384);function P(t,e){if(1&t&&(r.TgZ(0,"p",6),r._uU(1),r.qZA()),2&t){const o=r.oxw(2);r.xp6(1),r.Oqu(o.additionalText)}}function d(t,e){if(1&t&&(r.TgZ(0,"div",2),r._UZ(1,"span",3),r.TgZ(2,"span",4)(3,"h2"),r._uU(4),r.qZA(),r.YNc(5,P,2,1,"p",5),r.qZA()()),2&t){const o=r.oxw();r.Udp("background",o.getProgress())("border-color",o.progressColor),r.ekj("bordered",o.bordered),r.xp6(1),r.Udp("width","calc(100% - "+o.progressWidth+"px)")("height","calc(100% - "+o.progressWidth+"px)")("border-color",o.progressColor),r.xp6(1),r.Udp("font-size",o.fontSize,"em"),r.xp6(2),r.AsE("",o.percentage," ",o.unit,""),r.xp6(1),r.Q6J("ngIf",o.additionalText)}}function b(t,e){if(1&t&&(r.TgZ(0,"p",6),r._uU(1),r.qZA()),2&t){const o=r.oxw(2);r.xp6(1),r.Oqu(o.additionalText)}}function u(t,e){if(1&t&&(r.TgZ(0,"div",7),r.O4$(),r.TgZ(1,"svg",8),r._UZ(2,"circle",9)(3,"circle",10),r.qZA(),r.kcU(),r.TgZ(4,"span",4)(5,"h2"),r._uU(6),r.qZA(),r.YNc(7,b,2,1,"p",5),r.qZA()()),2&t){const o=r.oxw();r.xp6(2),r.Udp("stroke",o.progressBgColor),r.xp6(1),r.Udp("stroke",o.progressColor)("stroke-dashoffset",o.getRoundedProgress()),r.xp6(1),r.Udp("font-size",o.fontSize,"em"),r.xp6(2),r.AsE("",o.percentage," ",o.unit,""),r.xp6(1),r.Q6J("ngIf",o.additionalText)}}class a{constructor(){this.percentage=0,this.unit="%",this.fontSize=1.5,this.progressWidth=20,this.progressColor="#00bdab",this.progressBgColor="#ddd",this.bordered=!1,this.roundedCorner=!1}getProgress(){return`conic-gradient(${this.progressColor} ${this.percentage}%, ${this.progressBgColor} ${this.percentage}%)`}getRoundedProgress(){return 100-this.percentage/100*100}}function g(t,e){if(1&t&&r._UZ(0,"div",2),2&t){const o=r.oxw();r.Udp("width",o.percentage,"%")}}a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=r.Xpm({type:a,selectors:[["circular-progressbar-component"]],inputs:{percentage:"percentage",unit:"unit",fontSize:"fontSize",progressWidth:"progressWidth",progressColor:"progressColor",progressBgColor:"progressBgColor",bordered:"bordered",roundedCorner:"roundedCorner",additionalText:"additionalText"},standalone:!0,features:[r.jDz],decls:2,vars:2,consts:[["class","circular-progress-bar",3,"background","bordered","border-color",4,"ngIf"],["class","rounded-progress-bar",4,"ngIf"],[1,"circular-progress-bar"],[1,"inner-content"],[1,"label"],["class","additional",4,"ngIf"],[1,"additional"],[1,"rounded-progress-bar"],["xmlns","http://www.w3.org/2000/svg","viewBox","-1 -1 34 34"],["cx","16","cy","16","r","15.9155",1,"progress-background"],["cx","16","cy","16","r","15.9155",1,"progress-indicator"]],template:function(e,o){1&e&&(r.YNc(0,d,6,17,"div",0),r.YNc(1,u,8,11,"div",1)),2&e&&(r.Q6J("ngIf",!o.roundedCorner),r.xp6(1),r.Q6J("ngIf",o.roundedCorner))},dependencies:[p.ez,p.O5,l.uH],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}[_nghost-%COMP%]{display:inline-block;box-sizing:border-box;margin:10px;height:150px;width:150px}.circular-progress-bar[_ngcontent-%COMP%]{position:relative;height:100%;width:100%;border-radius:50%;display:grid;place-items:center;background:conic-gradient(var(--primary-color) 5%,#ddd 5%);transition:background 1s linear}.circular-progress-bar[_ngcontent-%COMP%]   .inner-content[_ngcontent-%COMP%]{height:calc(100% - 20px);width:calc(100% - 20px);background-color:var(--bg-color);border-radius:50%;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d}.circular-progress-bar[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{position:absolute;color:var(--text-color);width:100%;font-size:1.5em;z-index:4;display:flex;flex-direction:column;justify-content:space-around}.circular-progress-bar[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .circular-progress-bar[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:0;font-weight:300}.circular-progress-bar[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{line-height:1em}.circular-progress-bar[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]{font-size:.7em;color:#999}.circular-progress-bar.bordered[_ngcontent-%COMP%]{border:1px solid var(--primary-color)}.circular-progress-bar.bordered[_ngcontent-%COMP%]   .inner-content[_ngcontent-%COMP%]{border:1px solid var(--primary-color);box-shadow:none}.rounded-progress-bar[_ngcontent-%COMP%]{position:relative;display:flex;height:100%;width:100%;justify-content:center;align-items:center}.rounded-progress-bar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:100%;transform:rotate(-90deg);width:100%}.rounded-progress-bar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .progress-background[_ngcontent-%COMP%]{fill:none;stroke:#e1fffc;stroke-width:1.8}.rounded-progress-bar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .progress-indicator[_ngcontent-%COMP%]{fill:none;stroke:var(--primary-color);stroke-dasharray:100 100;stroke-dashoffset:100;stroke-linecap:round;stroke-width:1.8}.rounded-progress-bar[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{position:absolute;color:var(--text-color);width:100%;font-size:1.5em;z-index:4;display:flex;flex-direction:column;justify-content:space-around}.rounded-progress-bar[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .rounded-progress-bar[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:0;font-weight:300}.rounded-progress-bar[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{line-height:1em}.rounded-progress-bar[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]{font-size:.7em;color:#999}']});class f{constructor(){this.percentage=0,this.progressColor="#00bdab",this.progressBgColor="#ddd",this.height=35,this.bordered=!1,this.striped=!1,this.gradient=!1}}function y(t,e){if(1&t&&(r.TgZ(0,"div",2),r.O4$(),r.TgZ(1,"svg"),r._UZ(2,"line",3)(3,"line",4),r.qZA()()),2&t){const o=r.oxw();r.Udp("stroke-dasharray",o.strokeDasharray),r.xp6(2),r.Udp("stroke",o.progressBgColor)("stroke-width",o.strokeWidth),r.xp6(1),r.Udp("stroke",o.progressColor)("stroke-width",o.strokeWidth),r.uIk("x2",o.getIndicatorWidth())}}function Z(t,e){if(1&t&&(r.TgZ(0,"div",5),r.O4$(),r.TgZ(1,"svg",6),r._UZ(2,"circle"),r.qZA(),r.kcU(),r._UZ(3,"div",7)(4,"span",8),r.TgZ(5,"span",9),r._uU(6),r.qZA()()),2&t){const o=r.oxw();r.Udp("width",o.size,"px")("height",o.size,"px"),r.xp6(2),r.Udp("stroke-dasharray",o.strokeDasharray)("stroke",o.progressColor)("stroke-width",o.strokeWidth),r.uIk("cy",o.circleSize)("cx",o.circleSize)("r",o.radius),r.xp6(1),r.Udp("background",o.getProgress()),r.xp6(1),r.Udp("top",o.strokeWidth,"px")("left",o.strokeWidth,"px")("right",o.strokeWidth,"px")("bottom",o.strokeWidth,"px"),r.xp6(1),r.Udp("font-size",o.fontSize,"em")("top",o.radius,"px"),r.xp6(1),r.AsE("",o.percentage," ",o.unit,"")}}f.\u0275fac=function(e){return new(e||f)},f.\u0275cmp=r.Xpm({type:f,selectors:[["rectangle-progressbar-component"]],inputs:{percentage:"percentage",progressColor:"progressColor",progressBgColor:"progressBgColor",height:"height",bordered:"bordered",striped:"striped",gradient:"gradient"},standalone:!0,features:[r.jDz],decls:3,vars:17,consts:[[1,"progress-bar"],["class","striped",3,"width",4,"ngIf"],[1,"striped"]],template:function(e,o){1&e&&(r.TgZ(0,"div",0),r._UZ(1,"div"),r.YNc(2,g,1,2,"div",1),r.qZA()),2&e&&(r.Udp("height",o.height,"px")("border-color",o.progressColor)("background-color",o.progressBgColor),r.ekj("bordered",o.bordered),r.xp6(1),r.Udp("background",o.progressColor)("background-size","250px 100%")("width",o.percentage,"%"),r.ekj("gradient",o.gradient),r.xp6(1),r.Q6J("ngIf",o.striped))},dependencies:[p.ez,p.O5,l.uH],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}[_nghost-%COMP%]{display:inline-block;box-sizing:border-box;margin:10px;height:auto;width:200px}.progress-bar[_ngcontent-%COMP%]{position:relative;height:35px;width:100%;display:grid;place-items:center;float:left;background:#ddd}.progress-bar[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;background:var(--primary-color);height:100%;top:0;left:0;width:20px;transition:background 1s linear}.progress-bar[_ngcontent-%COMP%] > div.gradient[_ngcontent-%COMP%]{width:0%;background-image:linear-gradient(to right,#f58b20,#00bdab)!important;background-size:200px 100%!important}.progress-bar[_ngcontent-%COMP%] > div.striped[_ngcontent-%COMP%]{background:repeating-linear-gradient(135deg,rgba(0,0,0,.1),rgba(0,0,0,.1) 10px,transparent 10px,transparent 20px)}.progress-bar[_ngcontent-%COMP%] > div.striped-2[_ngcontent-%COMP%]{background:repeating-linear-gradient(90deg,rgba(0,0,0,.1),rgba(0,0,0,.1) 10px,var(--bg-color) 10px,var(--bg-color) 20px)}.progress-bar.bordered[_ngcontent-%COMP%]{border:1px solid var(--primary-color)}.stroked-progress-bar[_ngcontent-%COMP%]{stroke-dasharray:5;stroke-width:20;width:100%}.stroked-progress-bar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%}.stroked-progress-bar[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:first-of-type{stroke:#ddd}.stroked-progress-bar[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:last-of-type{stroke:var(--primary-color)}']});var _=(()=>{return(t=_||(_={})).CIRCLE="circle",t.RECTANGLE="rectangle",_;var t})();class m{constructor(){this.percentage=0,this.progressColor="#00bdab",this.progressBgColor="#ddd",this.unit="%",this.fontSize=1.5,this.size=200,this.strokeWidth=30,this.strokeDasharray="7",this.form=_.RECTANGLE,this.circleSize=100,this.radius=90,this.bgColor="white"}ngOnInit(){this.circleSize=this.size/2,this.radius=this.circleSize-this.strokeWidth/2}getIndicatorWidth(){return this.percentage+"%"}getProgress(){let e=window.getComputedStyle(document.body);return e.getPropertyValue("--bg-color")&&(this.bgColor=e.getPropertyValue("--bg-color")),`conic-gradient(transparent ${this.percentage}%, ${this.bgColor} ${this.percentage}%)`}}function w(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",24),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.runProgress())}),r._UZ(1,"fa-icon",25),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPlay)}}function S(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",24),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.stopProgress())}),r._UZ(1,"fa-icon",25),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPause)}}function M(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",24),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.runProgress())}),r._UZ(1,"fa-icon",25),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPlay)}}function v(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",24),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.stopProgress())}),r._UZ(1,"fa-icon",25),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPause)}}function T(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",24),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.runProgress())}),r._UZ(1,"fa-icon",25),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPlay)}}function O(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",24),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.stopProgress())}),r._UZ(1,"fa-icon",25),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPause)}}function U(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",24),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.runProgress())}),r._UZ(1,"fa-icon",25),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPlay)}}function J(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",24),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.stopProgress())}),r._UZ(1,"fa-icon",25),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPause)}}function z(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",24),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.runProgress())}),r._UZ(1,"fa-icon",25),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPlay)}}function Q(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",24),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.stopProgress())}),r._UZ(1,"fa-icon",25),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPause)}}function A(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",24),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.runProgress())}),r._UZ(1,"fa-icon",25),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPlay)}}function B(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",24),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.stopProgress())}),r._UZ(1,"fa-icon",25),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPause)}}function q(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",24),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.runProgress())}),r._UZ(1,"fa-icon",25),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPlay)}}function R(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",24),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.stopProgress())}),r._UZ(1,"fa-icon",25),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPause)}}function N(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",24),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.runProgress())}),r._UZ(1,"fa-icon",25),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPlay)}}function I(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",24),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.stopProgress())}),r._UZ(1,"fa-icon",25),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPause)}}function W(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",24),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.runProgress())}),r._UZ(1,"fa-icon",25),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPlay)}}function H(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",24),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.stopProgress())}),r._UZ(1,"fa-icon",25),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPause)}}m.\u0275fac=function(e){return new(e||m)},m.\u0275cmp=r.Xpm({type:m,selectors:[["stroked-progressbar-component"]],inputs:{percentage:"percentage",progressColor:"progressColor",progressBgColor:"progressBgColor",unit:"unit",fontSize:"fontSize",size:"size",strokeWidth:"strokeWidth",strokeDasharray:"strokeDasharray",form:"form"},standalone:!0,features:[r.jDz],decls:2,vars:2,consts:[["class","stroked-rectangle-progress-bar",3,"stroke-dasharray",4,"ngIf"],["class","stroked-circular-progress-bar",3,"width","height",4,"ngIf"],[1,"stroked-rectangle-progress-bar"],["x1","0","y1","0","x2","100%","y2","0"],["x1","0","y1","0","y2","0"],[1,"stroked-circular-progress-bar"],["xmlns","http://www.w3.org/2000/svg"],[1,"circular-progress-bar"],[1,"inner-content"],[1,"text"]],template:function(e,o){1&e&&(r.YNc(0,y,4,11,"div",0),r.YNc(1,Z,7,29,"div",1)),2&e&&(r.Q6J("ngIf","rectangle"===o.form),r.xp6(1),r.Q6J("ngIf","circle"===o.form))},dependencies:[p.ez,p.O5,l.uH],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}[_nghost-%COMP%]{display:inline-block;box-sizing:border-box;margin:10px;position:relative}.stroked-rectangle-progress-bar[_ngcontent-%COMP%]{stroke-dasharray:5;stroke-width:30;display:inline-block;margin:auto;width:100%;height:40px;resize:both}.stroked-rectangle-progress-bar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%}.stroked-circular-progress-bar[_ngcontent-%COMP%]{position:relative;padding:1px}.stroked-circular-progress-bar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%;margin:auto}.stroked-circular-progress-bar[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke-width:30;stroke-dasharray:7 4;stroke:var(--primary-color);fill:none}.stroked-circular-progress-bar[_ngcontent-%COMP%]   .circular-progress-bar[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:101%;width:101%;border-radius:50%;display:grid;place-items:center;background:conic-gradient(var(--primary-color) 5%,transparent 5%);transition:background 1s linear;opacity:.7}.stroked-circular-progress-bar[_ngcontent-%COMP%]   .inner-content[_ngcontent-%COMP%]{position:absolute;inset:35px 37px 37px 35px;background-color:var(--bg-color);border-radius:50%;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d}.stroked-circular-progress-bar[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:absolute;top:0;left:0;color:var(--text-color);width:100%;font-size:1.5em;z-index:4}']});class h{constructor(){this.faPlay=x.zc,this.faPause=x.XQY,this.progress=90,this.isRunning=!1,this.strokeFormCircle=_.CIRCLE}runProgress(){this.progress=1,this.intervalId=setInterval(()=>{this.isRunning=!0,this.progress=this.progress+1,100===this.progress&&(clearInterval(this.intervalId),this.isRunning=!1)},100)}stopProgress(){clearInterval(this.intervalId),this.isRunning=!1}}h.\u0275fac=function(e){return new(e||h)},h.\u0275cmp=r.Xpm({type:h,selectors:[["progressbars-component"]],standalone:!0,features:[r._Bn([{provide:r.soG,useValue:"de-DE"}]),r.jDz],decls:95,vars:148,consts:[[1,"header"],[1,"content"],[1,"container"],[1,"flex-row"],[3,"click",4,"ngIf"],[3,"percentage"],[3,"percentage","progressColor","progressBgColor","height"],[3,"percentage","progressColor","height"],[3,"percentage","bordered","progressBgColor"],[3,"percentage","progressColor","progressBgColor","bordered"],[3,"percentage","progressBgColor","bordered","striped"],[3,"percentage","progressColor","progressBgColor","bordered","striped"],[3,"percentage","bordered","gradient","progressBgColor"],[3,"percentage","progressBgColor","progressColor"],[3,"strokeWidth","strokeDasharray","percentage","progressBgColor","progressColor"],[3,"percentage","progressColor","form"],[3,"size","strokeWidth","strokeDasharray","percentage","progressColor","form"],[3,"size","strokeWidth","strokeDasharray","percentage","progressColor","fontSize","form"],[3,"percentage","progressWidth"],[3,"percentage","unit","additionalText","progressWidth","fontSize"],[3,"percentage","progressWidth","progressBgColor","bordered"],[3,"percentage","unit","progressColor","progressBgColor","bordered","progressWidth","fontSize"],[3,"percentage","additionalText","progressBgColor","roundedCorner"],[3,"percentage","unit","progressColor","progressBgColor","fontSize","roundedCorner"],[3,"click"],[3,"icon"]],template:function(e,o){1&e&&(r.TgZ(0,"div",0)(1,"h1"),r._uU(2,"Progressbars"),r.qZA(),r._UZ(3,"theme-changer-component"),r.qZA(),r.TgZ(4,"div",1)(5,"div",2)(6,"h2"),r._uU(7,"rectangle-progressbar-component"),r.qZA(),r.TgZ(8,"div",3),r.YNc(9,w,2,1,"button",4),r.YNc(10,S,2,1,"button",4),r._UZ(11,"rectangle-progressbar-component",5),r.qZA(),r._UZ(12,"rectangle-progressbar-component",6)(13,"rectangle-progressbar-component",7),r.qZA(),r.TgZ(14,"div",2)(15,"h2"),r._uU(16,"rectangle-progressbar-component "),r._UZ(17,"br"),r._uU(18,"(bordered)"),r.qZA(),r.TgZ(19,"div",3),r.YNc(20,M,2,1,"button",4),r.YNc(21,v,2,1,"button",4),r._UZ(22,"rectangle-progressbar-component",8),r.qZA(),r._UZ(23,"rectangle-progressbar-component",9),r.qZA(),r.TgZ(24,"div",2)(25,"h2"),r._uU(26,"rectangle-progressbar-component "),r._UZ(27,"br"),r._uU(28,"(bordered,striped)"),r.qZA(),r.TgZ(29,"div",3),r.YNc(30,T,2,1,"button",4),r.YNc(31,O,2,1,"button",4),r._UZ(32,"rectangle-progressbar-component",10),r.qZA(),r._UZ(33,"rectangle-progressbar-component",11)(34,"rectangle-progressbar-component",11),r.qZA(),r.TgZ(35,"div",2)(36,"h2"),r._uU(37,"rectangle-progressbar-component "),r._UZ(38,"br"),r._uU(39,"(gradient)"),r.qZA(),r.TgZ(40,"div",3),r.YNc(41,U,2,1,"button",4),r.YNc(42,J,2,1,"button",4),r._UZ(43,"rectangle-progressbar-component",12),r.qZA(),r._UZ(44,"rectangle-progressbar-component",12),r.qZA(),r.TgZ(45,"div",2)(46,"h2"),r._uU(47,"stroked-progressbar-component "),r._UZ(48,"br"),r._uU(49,"(form rectangle)"),r.qZA(),r.TgZ(50,"div",3),r.YNc(51,z,2,1,"button",4),r.YNc(52,Q,2,1,"button",4),r._UZ(53,"stroked-progressbar-component",13),r.qZA(),r._UZ(54,"stroked-progressbar-component",14)(55,"stroked-progressbar-component",14),r.qZA(),r.TgZ(56,"div",2)(57,"h2"),r._uU(58,"stroked-progressbar-component "),r._UZ(59,"br"),r._uU(60,"(form circle)"),r.qZA(),r.TgZ(61,"div",3),r.YNc(62,A,2,1,"button",4),r.YNc(63,B,2,1,"button",4),r._UZ(64,"stroked-progressbar-component",15),r.qZA(),r._UZ(65,"stroked-progressbar-component",16)(66,"stroked-progressbar-component",17),r.qZA(),r.TgZ(67,"div",2)(68,"h2"),r._uU(69,"circular-progressbar-component"),r.qZA(),r.TgZ(70,"div",3),r.YNc(71,q,2,1,"button",4),r.YNc(72,R,2,1,"button",4),r._UZ(73,"circular-progressbar-component",18),r.qZA(),r._UZ(74,"circular-progressbar-component",19),r.qZA(),r.TgZ(75,"div",2)(76,"h2"),r._uU(77,"circular-progressbar-component "),r._UZ(78,"br"),r._uU(79,"(bordered)"),r.qZA(),r.TgZ(80,"div",3),r.YNc(81,N,2,1,"button",4),r.YNc(82,I,2,1,"button",4),r._UZ(83,"circular-progressbar-component",20),r.qZA(),r._UZ(84,"circular-progressbar-component",21),r.qZA(),r.TgZ(85,"div",2)(86,"h2"),r._uU(87,"circular-progressbar-component "),r._UZ(88,"br"),r._uU(89,"(roundedCorner)"),r.qZA(),r.TgZ(90,"div",3),r.YNc(91,W,2,1,"button",4),r.YNc(92,H,2,1,"button",4),r._UZ(93,"circular-progressbar-component",22),r.qZA(),r._UZ(94,"circular-progressbar-component",23),r.qZA()()),2&e&&(r.xp6(8),r.Udp("justify-content","center"),r.xp6(1),r.Q6J("ngIf",!o.isRunning),r.xp6(1),r.Q6J("ngIf",o.isRunning),r.xp6(1),r.Q6J("percentage",o.progress),r.xp6(1),r.Q6J("percentage",60)("progressColor","red")("progressBgColor","#fbdddd")("height",15),r.xp6(1),r.Q6J("percentage",60)("progressColor","#115cb9")("height",10),r.xp6(6),r.Udp("justify-content","center"),r.xp6(1),r.Q6J("ngIf",!o.isRunning),r.xp6(1),r.Q6J("ngIf",o.isRunning),r.xp6(1),r.Q6J("percentage",o.progress)("bordered",!0)("progressBgColor","transparent"),r.xp6(1),r.Q6J("percentage",60)("progressColor","red")("progressBgColor","transparent")("bordered",!0),r.xp6(6),r.Udp("justify-content","center"),r.xp6(1),r.Q6J("ngIf",!o.isRunning),r.xp6(1),r.Q6J("ngIf",o.isRunning),r.xp6(1),r.Udp("width",300,"px"),r.Q6J("percentage",o.progress)("progressBgColor","transparent")("bordered",!0)("striped",!0),r.xp6(1),r.Q6J("percentage",60)("progressColor","#115cb9")("progressBgColor","transparent")("bordered",!0)("striped",!0),r.xp6(1),r.Q6J("percentage",30)("progressColor","#ff8f00")("progressBgColor","transparent")("bordered",!0)("striped",!0),r.xp6(6),r.Udp("justify-content","center"),r.xp6(1),r.Q6J("ngIf",!o.isRunning),r.xp6(1),r.Q6J("ngIf",o.isRunning),r.xp6(1),r.Q6J("percentage",o.progress)("bordered",!0)("gradient",!0)("progressBgColor","transparent"),r.xp6(1),r.Q6J("percentage",30)("bordered",!0)("gradient",!0)("progressBgColor","transparent"),r.xp6(6),r.Udp("justify-content","center"),r.xp6(1),r.Q6J("ngIf",!o.isRunning),r.xp6(1),r.Q6J("ngIf",o.isRunning),r.xp6(1),r.Q6J("percentage",o.progress)("progressBgColor","#d2f5f1")("progressColor","#00bdab"),r.xp6(1),r.Udp("width",200,"px"),r.Q6J("strokeWidth",50)("strokeDasharray","15 5")("percentage",33)("progressBgColor","#ddd")("progressColor","red"),r.xp6(1),r.Udp("width",400,"px"),r.Q6J("strokeWidth",60)("strokeDasharray","15 5")("percentage",75)("progressBgColor","#f9dcb6")("progressColor","#ff8f00"),r.xp6(6),r.Udp("justify-content","center"),r.xp6(1),r.Q6J("ngIf",!o.isRunning),r.xp6(1),r.Q6J("ngIf",o.isRunning),r.xp6(1),r.Q6J("percentage",o.progress)("progressColor","#00bdab")("form",o.strokeFormCircle),r.xp6(1),r.Q6J("size",150)("strokeWidth",30)("strokeDasharray","15 4")("percentage",33)("progressColor","red")("form",o.strokeFormCircle),r.xp6(1),r.Q6J("size",200)("strokeWidth",40)("strokeDasharray","15 5")("percentage",75)("progressColor","#ff8f00")("fontSize",2)("form",o.strokeFormCircle),r.xp6(4),r.Udp("justify-content","center"),r.xp6(1),r.Q6J("ngIf",!o.isRunning),r.xp6(1),r.Q6J("ngIf",o.isRunning),r.xp6(1),r.Q6J("percentage",o.progress)("progressWidth",10),r.xp6(1),r.Udp("width",300,"px")("height",300,"px"),r.Q6J("percentage",85)("unit","%")("additionalText","13,6 Stunden")("progressWidth",40)("fontSize",3),r.xp6(6),r.Udp("justify-content","center"),r.xp6(1),r.Q6J("ngIf",!o.isRunning),r.xp6(1),r.Q6J("ngIf",o.isRunning),r.xp6(1),r.Q6J("percentage",o.progress)("progressWidth",10)("progressBgColor","black")("bordered",!0),r.xp6(1),r.Udp("width",300,"px")("height",300,"px"),r.Q6J("percentage",50)("unit","\u20ac")("progressColor","#0b5e56")("progressBgColor","#d2f5f1")("bordered",!0)("progressWidth",40)("fontSize",4),r.xp6(6),r.Udp("justify-content","center"),r.xp6(1),r.Q6J("ngIf",!o.isRunning),r.xp6(1),r.Q6J("ngIf",o.isRunning),r.xp6(1),r.Q6J("percentage",o.progress)("additionalText","1111 St\xfcck")("progressBgColor","#111")("roundedCorner",!0),r.xp6(1),r.Udp("width",300,"px")("height",300,"px"),r.Q6J("percentage",33)("unit","\u20ac")("progressColor","#0b5e56")("progressBgColor","#d2f5f1")("fontSize",4)("roundedCorner",!0))},dependencies:[p.ez,p.O5,l.uH,l.BN,s.a,a,f,m],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}button[_ngcontent-%COMP%]{position:relative;height:45px;width:65px;margin:0 5px;padding:10px 25px;border:0;font-weight:300;font-size:1.2em;background:var(--primary-color);color:var(--fa-icon-color);cursor:pointer;border-radius:4px;z-index:10}button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--fa-icon-color)}button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 5px}button[_ngcontent-%COMP%]:hover{filter:brightness(.85)}']})}}]);