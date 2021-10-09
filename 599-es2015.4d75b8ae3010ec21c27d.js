"use strict";(self.webpackChunk_fiorex_ngx_smart_table=self.webpackChunk_fiorex_ngx_smart_table||[]).push([[599],{68599:function(e,n,t){t.r(n),t.d(n,{DemoModule:function(){return Z}});var r=t(38583),a=t(82819),i=t(99052),o=t(60476),s=t(63967),l=t(84486),u=t(60394),m=t(75426);const p=function(){return["/documentation"]};const c=[{path:"",component:(()=>{class e{constructor(){this.snippets={install:t(8061).Z,require:t(42587).Z,directive:t(53907).Z,settings:t(91626).Z,template:t(47888).Z,array:t(98526).Z,dataTemplate:t(37883).Z,basicFull:t(95294).Z}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["demo"]],decls:107,vars:12,consts:[["tagline","Quick Start & Demo"],[1,"main-content"],["id","getting-started","href","#getting-started","aria-hidden","true",1,"anchor"],["aria-hidden","true",1,"octicon","octicon-link"],["id","installation","href","#installation","aria-hidden","true",1,"anchor"],["highlight","",1,"bash"],["id","examples","href","#examples","aria-hidden","true",1,"anchor"],["id","minimal-setup","href","#minimal-setup","aria-hidden","true",1,"anchor"],["highlight","",1,"typescript"],[3,"routerLink"],[1,"with-source"],["href","https://github.com/dj-fiorex/ngx-smart-table/blob/master/projects/demo/src/app/shared/components/basic-example/basic-example-data.component.ts","target","_blank",1,"source"]],template:function(e,n){1&e&&(o._UZ(0,"header-component",0),o.TgZ(1,"section",1),o.TgZ(2,"h2"),o.TgZ(3,"a",2),o._UZ(4,"span",3),o.qZA(),o._uU(5,"Getting Started"),o.qZA(),o.TgZ(6,"p"),o._uU(7," Hello and Welcome! "),o.qZA(),o.TgZ(8,"h3"),o.TgZ(9,"a",4),o._UZ(10,"span",3),o.qZA(),o._uU(11,"Installation"),o.qZA(),o.TgZ(12,"p"),o._uU(13," The library is available as npm package, so all you need to do is to run the following command: "),o.qZA(),o.TgZ(14,"pre"),o._uU(15,"    "),o.TgZ(16,"code",5),o._uU(17),o.qZA(),o._uU(18,"\n  "),o.qZA(),o.TgZ(19,"p"),o._uU(20,"This command will create a record in your `package.json` file and install the package into the npm modules folder."),o.qZA(),o.TgZ(21,"h2"),o.TgZ(22,"a",6),o._UZ(23,"span",3),o.qZA(),o._uU(24,"Examples"),o.qZA(),o.TgZ(25,"h3"),o.TgZ(26,"a",7),o._UZ(27,"span",3),o.qZA(),o._uU(28,"Minimal Setup Example"),o.qZA(),o.TgZ(29,"p"),o._uU(30," First thing you need to do is to import the ngx-smart-table directives into your component. "),o.qZA(),o.TgZ(31,"pre"),o._uU(32,"    "),o.TgZ(33,"code",8),o._uU(34),o.qZA(),o._uU(35,"\n  "),o.qZA(),o.TgZ(36,"p"),o._uU(37," Then register it by adding to the list of directives of your module: "),o.qZA(),o.TgZ(38,"pre"),o._uU(39,"    "),o.TgZ(40,"code",8),o._uU(41),o.qZA(),o._uU(42,"\n  "),o.qZA(),o.TgZ(43,"p"),o._uU(44," Now, we need to configure the table and add it into the template. The only "),o.TgZ(45,"strong"),o._uU(46,"required"),o.qZA(),o._uU(47," setting for the component to start working is a columns configuration."),o._UZ(48,"br"),o._uU(49," Let's register "),o.TgZ(50,"i"),o._uU(51,"settings"),o.qZA(),o._uU(52," property inside of the component where we want to have the table and configure some columns ("),o.TgZ(53,"a",9),o._uU(54,"Settings documentation"),o.qZA(),o._uU(55,"): "),o.qZA(),o.TgZ(56,"pre"),o._uU(57,"    "),o.TgZ(58,"code",8),o._uU(59),o.qZA(),o._uU(60,"\n  "),o.qZA(),o.TgZ(61,"p"),o._uU(62," Finally let's put the ngx-smart-table component inside of the template: "),o.qZA(),o.TgZ(63,"pre"),o._uU(64,"    "),o.TgZ(65,"code",8),o._uU(66),o.qZA(),o._uU(67,"\n  "),o.qZA(),o.TgZ(68,"p"),o._uU(69," At this step you will have a minimally configured table which should look something like this: "),o.qZA(),o.TgZ(70,"div"),o._UZ(71,"basic-example"),o.qZA(),o.TgZ(72,"p"),o._uU(73," All functions are available by default and you don't need to configure them somehow, so you already able to add/edit/delete rows, sort or filter the table, etc. "),o.qZA(),o.TgZ(74,"p"),o._uU(75," But it feels like something is missing... Right, there is no data in the table by default. To add some, let's create an array property with a list of objects in the component. Please note that object keys are same as in the columns configuration. "),o.qZA(),o.TgZ(76,"pre"),o._uU(77,"    "),o.TgZ(78,"code",8),o._uU(79),o.qZA(),o._uU(80,"\n  "),o.qZA(),o.TgZ(81,"p"),o._uU(82,"And pass the data to the table:"),o.qZA(),o.TgZ(83,"pre"),o._uU(84,"    "),o.TgZ(85,"code",8),o._uU(86),o.qZA(),o._uU(87,"\n  "),o.qZA(),o.TgZ(88,"p"),o._uU(89,"Now you have some data in the table:"),o.qZA(),o.TgZ(90,"div"),o._UZ(91,"basic-example-data"),o.qZA(),o.TgZ(92,"p"),o._uU(93," That's it for a minimal setup, our final component should look like this, pretty simple, huh? "),o.qZA(),o.TgZ(94,"pre",10),o._uU(95,"    "),o.TgZ(96,"a",11),o._uU(97,"Demo Source"),o.qZA(),o._uU(98,"\n    "),o.TgZ(99,"code",8),o._uU(100),o.qZA(),o._uU(101,"\n  "),o.qZA(),o.TgZ(102,"p"),o._uU(103,"Full component documentation you can find "),o.TgZ(104,"a",9),o._uU(105,"here"),o.qZA(),o._uU(106,"."),o.qZA(),o.qZA()),2&e&&(o.xp6(17),o.Oqu(n.snippets.install),o.xp6(17),o.Oqu(n.snippets.require),o.xp6(7),o.Oqu(n.snippets.directive),o.xp6(12),o.Q6J("routerLink",o.DdM(10,p)),o.xp6(6),o.Oqu(n.snippets.settings),o.xp6(7),o.Oqu(n.snippets.template),o.xp6(13),o.Oqu(n.snippets.array),o.xp6(7),o.Oqu(n.snippets.dataTemplate),o.xp6(14),o.Oqu(n.snippets.basicFull),o.xp6(4),o.Q6J("routerLink",o.DdM(11,p)))},directives:[s.G,l.R,a.yS,u.v,m.m],encapsulation:2}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[r.ez,a.Bz.forChild(c),i.m]]}),e})()},98526:function(e,n){n.Z='data = [\r\n  {\r\n    id: 1,\r\n    name: "Leanne Graham",\r\n    username: "Bret",\r\n    email: "Sincere@april.biz"\r\n  },\r\n  {\r\n    id: 2,\r\n    name: "Ervin Howell",\r\n    username: "Antonette",\r\n    email: "Shanna@melissa.tv"\r\n  },\r\n  \r\n  // ... list of items\r\n  \r\n  {\r\n    id: 11,\r\n    name: "Nicholas DuBuque",\r\n    username: "Nicholas.Stanton",\r\n    email: "Rey.Padberg@rosamond.biz"\r\n  }\r\n];'},95294:function(e,n){n.Z='import { Component } from \'@angular/core\';\r\n\r\n@Component({\r\n  selector: \'basic-example-data\',\r\n  styles: [],\r\n  template: `\r\n    <ngx-smart-table [settings]="settings" [source]="data"></ngx-smart-table>\r\n  `\r\n})\r\nexport class BasicExampleDataComponent {\r\n\r\n  settings = {\r\n    columns: {\r\n      id: {\r\n        title: \'ID\'\r\n      },\r\n      name: {\r\n        title: \'Full Name\'\r\n      },\r\n      username: {\r\n        title: \'User Name\'\r\n      },\r\n      email: {\r\n        title: \'Email\'\r\n      }\r\n    }\r\n  };\r\n  \r\n  data = [\r\n    {\r\n      id: 1,\r\n      name: "Leanne Graham",\r\n      username: "Bret",\r\n      email: "Sincere@april.biz"\r\n    },\r\n    // ... other rows here\r\n    {\r\n      id: 11,\r\n      name: "Nicholas DuBuque",\r\n      username: "Nicholas.Stanton",\r\n      email: "Rey.Padberg@rosamond.biz"\r\n    }\r\n  ];\r\n}\r\n'},37883:function(e,n){n.Z='// ...\r\n\r\n@Component({\r\n  template: `\r\n    <ngx-smart-table [settings]="settings" [source]="data"></ngx-smart-table>\r\n  `\r\n})\r\n// ...'},53907:function(e,n){n.Z="// ...\r\n\r\n@NgModule({\r\n  imports: [\r\n    // ...\r\n    \r\n    NgxSmartTableModule,\r\n    \r\n    // ...\r\n  ],\r\n  declarations: [ ... ]\r\n})\r\n// ..."},8061:function(e,n){n.Z="npm install --save ngx-smart-table"},42587:function(e,n){n.Z="import { NgxSmartTableModule } from 'ngx-smart-table';"},91626:function(e,n){n.Z="settings = {\r\n  columns: {\r\n    id: {\r\n      title: 'ID'\r\n    },\r\n    name: {\r\n      title: 'Full Name'\r\n    },\r\n    username: {\r\n      title: 'User Name'\r\n    },\r\n    email: {\r\n      title: 'Email'\r\n    }\r\n  }\r\n};"},47888:function(e,n){n.Z='// ...\r\n\r\n@Component({\r\n  template: `\r\n    <ngx-smart-table [settings]="settings"></ngx-smart-table>\r\n  `\r\n})\r\n// ...'}}]);