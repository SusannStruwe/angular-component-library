"use strict";(self.webpackChunkangular_component_library=self.webpackChunkangular_component_library||[]).push([[896],{1896:(h,i,r)=>{r.r(i),r.d(i,{ChartsComponent:()=>f});var s=r(6895),t=r(8256),c=r(2216),l=r(2687),g=r(5384);const u=["svg"];class a{constructor(){this.textColor="black",this.dataArray=[10,90],this.labelArray=["rot","blau"],this.colorArray=["red","blue"],this.circleWidth=200,this.centeredPos=100,this.circleRadius=50,this.strokeWidth=100}ngAfterViewChecked(){this.svgRef&&(console.log(this.svgRef.nativeElement.getBoundingClientRect().width),this.circleWidth=this.svgRef.nativeElement.getBoundingClientRect().width,this.centeredPos=this.svgRef.nativeElement.getBoundingClientRect().width/2,this.circleRadius=this.svgRef.nativeElement.getBoundingClientRect().width/4,this.strokeWidth=this.svgRef.nativeElement.getBoundingClientRect().width/2)}getDashArray(){return"162 360"}}a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["pie-chart-component"]],viewQuery:function(e,o){if(1&e&&t.Gf(u,5),2&e){let d;t.iGM(d=t.CRH())&&(o.svgRef=d.first)}},inputs:{textColor:"textColor",dataArray:"dataArray",labelArray:"labelArray",colorArray:"colorArray"},standalone:!0,features:[t.jDz],decls:3,vars:7,consts:[[1,"chart"],["svg",""]],template:function(e,o){1&e&&(t.O4$(),t.TgZ(0,"svg",0,1),t._UZ(2,"circle"),t.qZA()),2&e&&(t.xp6(2),t.Udp("stroke-width",o.strokeWidth)("stroke-dasharray",o.getDashArray()),t.uIk("r",o.circleRadius)("cx",o.centeredPos)("cy",o.centeredPos))},dependencies:[s.ez,c.uH],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}[_nghost-%COMP%]{display:inline-block;box-sizing:border-box;margin:10px;height:200px;width:200px}svg[_ngcontent-%COMP%]{margin:0 auto;transform:rotate(-90deg);background:#ddd;border-radius:50%;display:block;width:100%;height:100%}circle[_ngcontent-%COMP%]{fill:#ddd;stroke:var(--primary-color);stroke-width:75;stroke-dasharray:15 360;transition:stroke-dasharray 3s ease}.pie[_ngcontent-%COMP%]{width:400px;height:400px;background-image:conic-gradient(blue 0deg 172deg,red 172deg 249deg,yellow 249deg 313deg,green 313deg 333deg,lightgreen 333deg 347deg,gold 347deg 350deg,pink 350deg 360deg);border-radius:50%}']});class f{constructor(){this.faPlay=l.zc,this.faPause=l.XQY,this.progress=90,this.isRunning=!1}}f.\u0275fac=function(e){return new(e||f)},f.\u0275cmp=t.Xpm({type:f,selectors:[["charts-component"]],standalone:!0,features:[t._Bn([{provide:t.soG,useValue:"de-DE"}]),t.jDz],decls:9,vars:0,consts:[[1,"header"],[1,"content"],[1,"container"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"Graphs"),t.qZA(),t._UZ(3,"theme-changer-component"),t.qZA(),t.TgZ(4,"div",1)(5,"div",2)(6,"h2"),t._uU(7,"pie-chart-component"),t.qZA(),t._UZ(8,"pie-chart-component"),t.qZA()())},dependencies:[s.ez,c.uH,g.a,a],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}.content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:5px}.container[_ngcontent-%COMP%]{min-height:300px}button[_ngcontent-%COMP%]{position:relative;height:45px;width:65px;margin:0 5px;padding:10px 25px;border:0;font-weight:300;font-size:1.2em;background:var(--primary-color);color:var(--fa-icon-color);cursor:pointer;border-radius:4px;z-index:10}button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--fa-icon-color)}button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 5px}button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}']})}}]);