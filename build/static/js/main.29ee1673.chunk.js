(window["webpackJsonpquad-x"]=window["webpackJsonpquad-x"]||[]).push([[0],{10:function(e,a,n){e.exports={container:"MerchantEdit_container__2S62L",merchantCard:"MerchantEdit_merchantCard__3agSx",header:"MerchantEdit_header__2fPUo",container1:"MerchantEdit_container1__1K4D2",merchantName:"MerchantEdit_merchantName__3Q87X",container2:"MerchantEdit_container2__3CtIQ",formButtons:"MerchantEdit_formButtons__2fZ7d"}},11:function(e,a,n){e.exports={container:"AddMerchant_container__3r_Ns",merchantCard:"AddMerchant_merchantCard__2F1ma",header:"AddMerchant_header__2xfbs",container1:"AddMerchant_container1__MJW5-",merchantName:"AddMerchant_merchantName__152yD",container2:"AddMerchant_container2__1ZZ2l",formButtons:"AddMerchant_formButtons__1xp2Y"}},16:function(e,a,n){e.exports={MerchantContainer:"MerchantContainer_MerchantContainer__1I3XU",textField:"MerchantContainer_textField__2eSmd",navcontent:"MerchantContainer_navcontent__1YBn-",bodycontent:"MerchantContainer_bodycontent__3XJAK",topnav:"MerchantContainer_topnav__1jvBQ",merchantbody:"MerchantContainer_merchantbody__1VT5r",search:"MerchantContainer_search__JB6CU",logout:"MerchantContainer_logout__MEQR_",nav:"MerchantContainer_nav__3FoEq",bodycontainer:"MerchantContainer_bodycontainer__2f3lk",BurgerMenu:"MerchantContainer_BurgerMenu__4FXqP",burger:"MerchantContainer_burger__3lLRy"}},28:function(e,a,n){e.exports={merchantCard:"Merchant_merchantCard__Qty8x",container1:"Merchant_container1__3fIhD",merchantName:"Merchant_merchantName__3PXes",container2:"Merchant_container2__2A5xr"}},37:function(e,a,n){e.exports={merchantListHeader:"MerchantList_merchantListHeader__2PYZN",headerText:"MerchantList_headerText__2XJZt",headerButton:"MerchantList_headerButton__tfAnw",merchantList:"MerchantList_merchantList__1U8s6"}},38:function(e,a,n){e.exports={login:"login_login__wTA1p",container:"login_container__1_z9H",formContainer:"login_formContainer__c-0h7",username:"login_username__1J09B",password:"login_password__1-GmX",submit:"login_submit__3-BR6"}},42:function(e,a,n){e.exports={sideNav:"SideNav_sideNav__3MZkJ",full:"SideNav_full__1Q0k4",pointer:"SideNav_pointer__3dkyo"}},51:function(e,a,n){e.exports={menuToggle:"burgerMenu_menuToggle__2T_Tc",menu:"burgerMenu_menu__151hr"}},62:function(e,a,n){},70:function(e,a,n){e.exports=n(85)},75:function(e,a,n){},85:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(7),l=n.n(i),c=(n(75),n(62)),o=n.n(c),s=n(25),m=n(24),u=n.n(m),h=n(35),d=n(23),p=n(13),g=n(9),v=n(18),b=n(19),E=n(20),f=n(112),M=n(26),P=n.n(M),_=n(113),N=n(40),C=n.n(N),B=n(47),x=n.n(B),y=n(10),O=n.n(y),F=(n(77),function(e){function a(){var e,n;Object(p.a)(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(b.a)(a)).call.apply(e,[this].concat(r)))).state={updateMerchantInfo:{id:n.props.merchantInfo.id,name:n.props.merchantInfo.name,shippingFees:n.props.merchantInfo.shippingFees}},n.baseState=n.state,n.componentDidMount=function(){},n.handleChange=function(e){e.preventDefault();var a=n.state.updateMerchantInfo,t=e.target,r=t.name;t.value;switch(r){case"name":a.name=e.target.value;break;case"metroManilaBox":a.shippingFees[0].MetroManila.Box=Number(e.target.value);break;case"metroManilaOversized":a.shippingFees[0].MetroManila.Oversized=Number(e.target.value);break;case"metroManilaBigPouch":a.shippingFees[0].MetroManila.BigPouch=Number(e.target.value);break;case"metroManilaSmallPouch":a.shippingFees[0].MetroManila.SmallPouch=Number(e.target.value);break;case"provincialBox":a.shippingFees[1].Provincial.Box=Number(e.target.value);break;case"provincialOversized":a.shippingFees[1].Provincial.Oversized=Number(e.target.value);break;case"provincialBigPouch":a.shippingFees[1].Provincial.BigPouch=Number(e.target.value);break;case"provincialSmallPouch":a.shippingFees[1].Provincial.SmallPouch=Number(e.target.value);break;case"intraBox":a.shippingFees[2].IntraProvincial.Box=Number(e.target.value);break;case"intraOversized":a.shippingFees[2].IntraProvincial.Oversized=Number(e.target.value);break;case"intraBigPouch":a.shippingFees[2].IntraProvincial.BigPouch=Number(e.target.value);break;case"intraSmallPouch":a.shippingFees[2].IntraProvincial.SmallPouch=Number(e.target.value)}n.setState({updateMerchantInfo:a})},n.handleCancel=function(){var e=Object(h.a)(u.a.mark(function e(a){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:P.a.fire({title:"Are you sure?",text:"Your changes will not be saved",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Proceed"}).then(function(){var e=Object(h.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.value){e.next=4;break}return e.next=3,n.setState({updateMerchantInfo:n.baseState});case 3:n.props.cancelEdit(a);case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),n}return Object(E.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e=this,a=this.state.updateMerchantInfo;return r.a.createElement("div",{className:O.a.container},r.a.createElement("p",{id:O.a.header},"Edit Merchant Info"),r.a.createElement("form",null,r.a.createElement(f.a,{id:"standard-full-width",label:"Merchant Name",style:{width:"60%"},name:"name",onChange:this.handleChange,value:a.name,placeholder:"Merchant Name",margin:"normal"}),r.a.createElement("h4",null,"Shipping Fee"),r.a.createElement("div",{className:"Accordion"},r.a.createElement("div",{className:"AccordionItem"},r.a.createElement("p",null,"Metro Manila"),r.a.createElement("div",{className:"accordionForm"},r.a.createElement("span",null,r.a.createElement(f.a,{id:"outlined-number",label:"Box",name:"metroManilaBox",onChange:this.handleChange,type:"number",className:O.a.textField,InputLabelProps:{shrink:!0},value:a.shippingFees?a.shippingFees[0].MetroManila.Box:0,margin:"normal",variant:"outlined"})),r.a.createElement("span",null,r.a.createElement(f.a,{id:"outlined-number",label:"Oversized",name:"metroManilaOversized",value:a.shippingFees?a.shippingFees[0].MetroManila.Oversized:0,onChange:this.handleChange,type:"number",className:O.a.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),r.a.createElement("span",null,r.a.createElement(f.a,{id:"outlined-number",label:"Big Pouch",name:"metroManilaBigPouch",onChange:this.handleChange,type:"number",className:O.a.textField,InputLabelProps:{shrink:!0},value:a.shippingFees?a.shippingFees[0].MetroManila.BigPouch:0,margin:"normal",variant:"outlined"})),r.a.createElement("span",null,r.a.createElement(f.a,{id:"outlined-number",label:"Small Pouch",name:"metroManilaSmallPouch",onChange:this.handleChange,type:"number",className:O.a.textField,InputLabelProps:{shrink:!0},value:a.shippingFees?a.shippingFees[0].MetroManila.SmallPouch:0,margin:"normal",variant:"outlined"})))),r.a.createElement("div",{className:"AccordionItem"},r.a.createElement("p",null,"Provincial"),r.a.createElement("span",null,r.a.createElement(f.a,{id:"outlined-number",label:"Box",name:"provincialBox",value:a.shippingFees?a.shippingFees[1].Provincial.Box:0,onChange:this.handleChange,type:"number",className:O.a.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),r.a.createElement("span",null,r.a.createElement(f.a,{id:"outlined-number",label:"Oversized",name:"provincialOversized",value:a.shippingFees?a.shippingFees[1].Provincial.Oversized:0,onChange:this.handleChange,type:"number",className:O.a.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),r.a.createElement("span",null,r.a.createElement(f.a,{id:"outlined-number",label:"Big Pouch",name:"provincialBigPouch",onChange:this.handleChange,type:"number",className:O.a.textField,InputLabelProps:{shrink:!0},value:a.shippingFees?a.shippingFees[1].Provincial.BigPouch:0,margin:"normal",variant:"outlined"})),r.a.createElement("span",null,r.a.createElement(f.a,{id:"outlined-number",label:"Small Pouch",name:"provincialSmallPouch",onChange:this.handleChange,type:"number",className:O.a.textField,InputLabelProps:{shrink:!0},value:a.shippingFees?a.shippingFees[1].Provincial.SmallPouch:0,margin:"normal",variant:"outlined"}))),r.a.createElement("div",{className:"AccordionItem"},r.a.createElement("p",null,"Intra Provincial"),r.a.createElement("div",{className:"accordionForm"},r.a.createElement("span",null,r.a.createElement(f.a,{id:"outlined-number",label:"Box",name:"intraBox",onChange:this.handleChange,type:"number",className:O.a.textField,InputLabelProps:{shrink:!0},value:a.shippingFees?a.shippingFees[2].IntraProvincial.Box:0,margin:"normal",variant:"outlined"})),r.a.createElement("span",null,r.a.createElement(f.a,{id:"outlined-number",label:"Oversized",name:"intraOversized",onChange:this.handleChange,type:"number",className:O.a.textField,InputLabelProps:{shrink:!0},value:a.shippingFees?a.shippingFees[2].IntraProvincial.Oversized:0,margin:"normal",variant:"outlined"})),r.a.createElement("span",null,r.a.createElement(f.a,{id:"outlined-number",label:"Big Pouch",name:"intraBigPouch",onChange:this.handleChange,type:"number",className:O.a.textField,InputLabelProps:{shrink:!0},value:a.shippingFees?a.shippingFees[2].IntraProvincial.BigPouch:0,margin:"normal",variant:"outlined"})),r.a.createElement("span",null,r.a.createElement(f.a,{id:"outlined-number",label:"Small Pouch",name:"intraSmallPouch",onChange:this.handleChange,type:"number",className:O.a.textField,InputLabelProps:{shrink:!0},value:a.shippingFees?a.shippingFees[2].IntraProvincial.SmallPouch:0,margin:"normal",variant:"outlined"}))))),r.a.createElement("div",{className:O.a.formButtons},r.a.createElement("span",null,r.a.createElement(_.a,{onClick:function(){return e.props.updateMerchant(a.id,a)},variant:"contained",color:"default",className:O.a.button},"Update",r.a.createElement(x.a,{className:O.a.rightIcon}))),r.a.createElement("span",null,r.a.createElement(_.a,{onClick:this.handleCancel,variant:"contained",color:"secondary",className:O.a.button},"Cancel",r.a.createElement(C.a,{className:O.a.rightIcon}))))))}}]),a}(r.a.Component)),k=n(65),I=n.n(k),S=n(64),w=n.n(S),j=n(63),L=n.n(j),A=n(28),z=n.n(A),D=function(e){return r.a.createElement("div",{className:z.a.merchantCard},r.a.createElement("div",{className:z.a.container1},r.a.createElement("p",{className:z.a.merchantName},e.name)),r.a.createElement("div",{className:z.a.container2},r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement(_.a,{onClick:e.editMerchant,variant:"contained",color:"primary",className:z.a.edit},"Edit",r.a.createElement(L.a,{className:z.a.rightIcon}))),r.a.createElement("span",null,r.a.createElement(_.a,{onClick:e.deleteMerchant,variant:"contained",color:"secondary",className:z.a.button},"Delete",r.a.createElement(w.a,{className:z.a.rightIcon}))))))},T=n(37),J=n.n(T),U=function(e){function a(){var e,n;Object(p.a)(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(b.a)(a)).call.apply(e,[this].concat(r)))).state={},n}return Object(E.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e=this,a=this.props.merchants.map(function(a,n){return r.a.createElement(D,{name:a.name,deleteMerchant:function(){return e.props.deleteMerchant(a.id)},editMerchant:function(){return e.props.editMerchant(a.id)},key:n})});return r.a.createElement("div",null,r.a.createElement("div",{className:J.a.merchantListHeader},r.a.createElement("div",{className:J.a.headerText},r.a.createElement("p",null,"Merchant List")),r.a.createElement("div",{className:J.a.headerButton},r.a.createElement("p",null,r.a.createElement(_.a,{onClick:this.props.addMerchant,variant:"contained",color:"default",className:J.a.button},"Add",r.a.createElement(I.a,{className:J.a.rightIcon}))))),r.a.createElement("div",{className:J.a.merchantList},a))}}]),a}(r.a.Component),X=n(11),Y=n.n(X),Z=function(e){function a(){var e,n;Object(p.a)(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(b.a)(a)).call.apply(e,[this].concat(r)))).state={merchantInfo:{name:"",shippingFees:[{MetroManila:{Box:0,Oversized:0,BigPouch:0,SmallPouch:0}},{Provincial:{Box:0,Oversized:0,BigPouch:0,SmallPouch:0}},{IntraProvincial:{Box:0,Oversized:0,BigPouch:0,SmallPouch:0}}]}},n.handleChange=function(e){e.preventDefault();var a=n.state.merchantInfo,t=e.target,r=t.name;t.value;switch(r){case"name":a.name=e.target.value;break;case"metroManilaBox":a.shippingFees[0].MetroManila.Box=Number(e.target.value);break;case"metroManilaOversized":a.shippingFees[0].MetroManila.Oversized=Number(e.target.value);break;case"metroManilaBigPouch":a.shippingFees[0].MetroManila.BigPouch=Number(e.target.value);break;case"metroManilaSmallPouch":a.shippingFees[0].MetroManila.SmallPouch=Number(e.target.value);break;case"provincialBox":a.shippingFees[1].Provincial.Box=Number(e.target.value);break;case"provincialOversized":a.shippingFees[1].Provincial.Oversized=Number(e.target.value);break;case"provincialBigPouch":a.shippingFees[1].Provincial.BigPouch=Number(e.target.value);break;case"provincialSmallPouch":a.shippingFees[1].Provincial.SmallPouch=Number(e.target.value);break;case"intraBox":a.shippingFees[2].IntraProvincial.Box=Number(e.target.value);break;case"intraOversized":a.shippingFees[2].IntraProvincial.Oversized=Number(e.target.value);break;case"intraBigPouch":a.shippingFees[2].IntraProvincial.BigPouch=Number(e.target.value);break;case"intraSmallPouch":a.shippingFees[2].IntraProvincial.SmallPouch=Number(e.target.value)}n.setState({merchantInfo:a})},n}return Object(E.a)(a,e),Object(g.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,a=this.state.merchantInfo;return r.a.createElement("div",{className:Y.a.container},r.a.createElement("p",{id:Y.a.header},"Add Merchant Info"),r.a.createElement("form",null,r.a.createElement(f.a,{name:"name",onChange:this.handleChange,id:"standard-full-width",value:this.state.merchantInfo.name,label:"Merchant Name",style:{width:"60%"},placeholder:"Merchant Name",margin:"normal"}),r.a.createElement("h4",null,"Shipping Fee"),r.a.createElement("div",{className:"Accordion"},r.a.createElement("div",{className:"AccordionItem"},r.a.createElement("p",null,"Metro Manila"),r.a.createElement("div",{className:"accordionForm"},r.a.createElement("span",null,r.a.createElement(f.a,{name:"metroManilaBox",onChange:this.handleChange,id:"outlined-number",label:"Box",type:"number",className:Y.a.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),r.a.createElement("span",null,r.a.createElement(f.a,{name:"metroManilaOversized",onChange:this.handleChange,id:"outlined-number",label:"Oversized",type:"number",className:Y.a.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),r.a.createElement("span",null,r.a.createElement(f.a,{name:"metroManilaBigPouch",onChange:this.handleChange,id:"outlined-number",label:"Big Pouch",type:"number",className:Y.a.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),r.a.createElement("span",null,r.a.createElement(f.a,{name:"metroManilaSmallPouch",onChange:this.handleChange,id:"outlined-number",label:"Small Pouch",type:"number",className:Y.a.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})))),r.a.createElement("div",{className:"AccordionItem"},r.a.createElement("p",null,"Provincial"),r.a.createElement("span",null,r.a.createElement(f.a,{name:"provincialBox",onChange:this.handleChange,id:"outlined-number",label:"Box",type:"number",className:Y.a.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),r.a.createElement("span",null,r.a.createElement(f.a,{name:"provincialOversized",onChange:this.handleChange,id:"outlined-number",label:"Oversized",type:"number",className:Y.a.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),r.a.createElement("span",null,r.a.createElement(f.a,{name:"provincialBigPouch",onChange:this.handleChange,id:"outlined-number",label:"Big Pouch",type:"number",className:Y.a.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),r.a.createElement("span",null,r.a.createElement(f.a,{name:"provincialSmallPouch",onChange:this.handleChange,id:"outlined-number",label:"Small Pouch",type:"number",className:Y.a.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"}))),r.a.createElement("div",{className:"AccordionItem"},r.a.createElement("p",null,"Intra Provincial"),r.a.createElement("div",{className:"accordionForm"},r.a.createElement("span",null,r.a.createElement(f.a,{name:"intraBox",onChange:this.handleChange,id:"outlined-number",label:"Box",type:"number",className:Y.a.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),r.a.createElement("span",null,r.a.createElement(f.a,{name:"intraOversized",onChange:this.handleChange,id:"outlined-number",label:"Oversized",type:"number",className:Y.a.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),r.a.createElement("span",null,r.a.createElement(f.a,{name:"intraBigPouch",onChange:this.handleChange,id:"outlined-number",label:"Big Pouch",type:"number",className:Y.a.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"})),r.a.createElement("span",null,r.a.createElement(f.a,{name:"intraSmallPouch",onChange:this.handleChange,id:"outlined-number",label:"Small Pouch",type:"number",className:Y.a.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"}))))),r.a.createElement("div",{className:Y.a.formButtons},r.a.createElement("span",null,r.a.createElement(_.a,{variant:"contained",onClick:function(){return e.props.enrollMerchant(a)},color:"default",className:Y.a.button},"Add Merchant",r.a.createElement(x.a,{className:Y.a.rightIcon}))),r.a.createElement("span",null,r.a.createElement(_.a,{variant:"contained",color:"secondary",onClick:this.props.cancelEdit,className:Y.a.button},"Cancel",r.a.createElement(C.a,{className:Y.a.rightIcon}))))))}}]),a}(r.a.Component),q=n(66),Q=n.n(q),R=n(42),W=n.n(R),H=function(e){function a(){return Object(p.a)(this,a),Object(v.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:W.a.sideNav},r.a.createElement("div",{className:W.a.full},r.a.createElement("ul",null,r.a.createElement("li",{className:W.a.pointer,onClick:this.props.reset},"Dashboard"),r.a.createElement("li",{className:W.a.pointer,onClick:this.props.addMerchant},"Add Merchant"))))}}]),a}(r.a.Component),G=n(51),K=n.n(G),$=function(e){return r.a.createElement("div",{className:K.a.menuToggle},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("ul",{className:K.a.menu},r.a.createElement("li",{onClick:e.reset},"Dashboard"),r.a.createElement("li",{onClick:e.addMerchant},"Add Merchant"),r.a.createElement("li",{onClick:e.logout},"Logout")))},V=new(function(){function e(){Object(p.a)(this,e),this.authenticated=!1}return Object(g.a)(e,[{key:"login",value:function(e){localStorage.setItem("isAuthenticated",!0),e()}},{key:"logout",value:function(e){localStorage.setItem("isAuthenticated",!1),e()}},{key:"isAuthenticated",value:function(){return this.isAuthenticated}}]),e}()),ee=n(16),ae=n.n(ee);function ne(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function te(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?ne(n,!0).forEach(function(a){Object(d.a)(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var re=function(e){function a(){var e,n;Object(p.a)(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(b.a)(a)).call.apply(e,[this].concat(r)))).state={merchants:[{id:1,name:"Nike",shippingFees:[{MetroManila:{Box:100,Oversized:150,BigPouch:100,SmallPouch:50}},{Provincial:{Box:120,Oversized:180,BigPouch:110,SmallPouch:80}},{IntraProvincial:{Box:130,Oversized:190,BigPouch:130,SmallPouch:100}}]},{id:2,name:"Addidas",shippingFees:[{MetroManila:{Box:100,Oversized:150,BigPouch:100,SmallPouch:50}},{Provincial:{Box:120,Oversized:180,BigPouch:110,SmallPouch:80}},{IntraProvincial:{Box:130,Oversized:190,BigPouch:130,SmallPouch:100}}]},{id:3,name:"Converse",shippingFees:[{MetroManila:{Box:100,Oversized:150,BigPouch:100,SmallPouch:50}},{Provincial:{Box:120,Oversized:180,BigPouch:110,SmallPouch:80}},{IntraProvincial:{Box:130,Oversized:190,BigPouch:130,SmallPouch:100}}]}],merchantInfo:{},merchantSearch:"",editMerchant:!1,addMerchant:!1},n.addMerchant=function(){n.setState(te({},n.state,{addMerchant:!0,editMerchant:!1}))},n.enrollMerchant=function(e){var a=n.state.merchants,t={};t.id=a.length+1,t.name=e.name,t.shippingFees=e.shippingFees,a.push(t),P.a.fire("Success!","You have added a new merchant.","success"),n.setState({merchants:a,addMerchant:!1})},n.editMerchant=function(e){n.setState(te({},n.state,{addMerchant:!1,editMerchant:!0}));var a=n.state.merchants;for(var t in a)a.hasOwnProperty(t)&&e===a[t].id&&n.setState({merchantInfo:a[t]})},n.cancelEdit=function(){n.setState(te({},n.state,{editMerchant:!1,addMerchant:!1})),window.location.reload()},n.updateMerchant=function(e,a){var t=n.state.merchants;for(var r in t)t.hasOwnProperty(r)&&e===t[r].id&&(t[r]=a,n.setState({merchants:t,editMerchant:!1}));P.a.fire("Updated Merchant Info!","Yey!","success")},n.deleteMerchant=function(e){P.a.fire({title:"Are you sure?",text:"This Merchant will be deleted.",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Proceed"}).then(function(){var a=Object(h.a)(u.a.mark(function a(t){var r,i;return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!t.value){a.next=5;break}for(i in r=n.state.merchants)r.hasOwnProperty(i)&&e===r[i].id&&(r.splice(r[i],1),n.setState({merchants:r,editMerchant:!1}));return a.next=5,n.setState({updateMerchantInfo:n.baseState});case 5:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}())},n.handleLogout=function(){P.a.fire({title:"Logout",text:"Are you sure you want to logout?",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Proceed"}).then(function(e){e.value&&V.logout(function(){n.props.history.push("/")})})},n.reset=function(){n.setState({editMerchant:!1,addMerchant:!1})},n.getSearch=function(e){e.preventDefault();var a=e.target;a.name,a.value;/^[a-zA-Z0-9-]{1,10}$/.test(e.target.value)&&n.setState({merchantSearch:e.target.value}),""===e.target.value&&n.setState({merchantSearch:""})},n}return Object(E.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e=this,a=this.state.merchants,n=this.state.merchantSearch.trim().toLowerCase();(n.length>0||0===n.length)&&(a=a.filter(function(e){return e.name.toLocaleLowerCase().match(n)}));var t=null;return this.state.addMerchant&&!this.state.editMerchant&&(t=r.a.createElement(Z,{enrollMerchant:this.enrollMerchant,cancelEdit:this.cancelEdit})),this.state.editMerchant&&!this.state.addMerchant&&(t=r.a.createElement(F,{merchantInfo:this.state.merchantInfo,updateMerchant:this.updateMerchant,cancelEdit:this.cancelEdit})),this.state.editMerchant||this.state.addMerchant||(t=r.a.createElement(U,{deleteMerchant:this.deleteMerchant,editMerchant:this.editMerchant,addMerchant:this.addMerchant,merchants:Object(s.a)(a)})),r.a.createElement("div",{className:ae.a.MerchantContainer},r.a.createElement("div",{className:ae.a.navcontent},r.a.createElement("h3",null,r.a.createElement(Q.a,null)," Merchant Dashboard"),r.a.createElement(H,{className:ae.a.SideNav,addMerchant:this.addMerchant,reset:this.reset})),r.a.createElement("div",{className:ae.a.bodycontent},r.a.createElement("div",{className:ae.a.bodycontainer},r.a.createElement("div",{className:ae.a.topnav},r.a.createElement("div",{className:ae.a.burger},r.a.createElement($,{logout:this.handleLogout,addMerchant:this.addMerchant,reset:this.reset})),this.state.editMerchant||this.state.addMerchant?null:r.a.createElement("div",{className:ae.a.search},r.a.createElement(f.a,{id:"standard-search",label:"Search",type:"search",name:"search",onChange:function(a){return e.getSearch(a)},value:this.state.merchantSearch,className:ae.a.textField,margin:"normal"})),r.a.createElement("div",{className:ae.a.logout},r.a.createElement("p",null,r.a.createElement(_.a,{variant:"contained",color:"secondary",onClick:this.handleLogout,className:ae.a.button},"Logout",r.a.createElement(C.a,{className:ae.a.rightIcon}))))),r.a.createElement("div",{className:ae.a.merchantbody},t))))}}]),a}(r.a.Component),ie=n(38),le=n.n(ie),ce=function(e){function a(){var e,n;Object(p.a)(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(b.a)(a)).call.apply(e,[this].concat(r)))).state={username:"",password:"",credentials:{username:"admin",password:"password"}},n.componentWillMount=function(){},n.componentDidMount=function(){!0===JSON.parse(localStorage.getItem("isAuthenticated"))?n.props.history.push("/merchant-list"):localStorage.setItem("isAuthenticated",!1)},n.handleSubmit=function(){var e=Object(h.a)(u.a.mark(function e(a){var t,r,i,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t=n.state.username,r=n.state.password,i=n.state.credentials.username,l=n.state.credentials.password,t!==i||r!==l){e.next=9;break}V.login(function(){P.a.fire("Logged In!","Yey!","success"),n.props.history.push("/merchant-list")}),e.next=11;break;case 9:return e.next=11,P.a.fire("Wrong Credentials","Please Try Again.","error");case 11:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),n.handleChange=function(e){e.preventDefault();var a=e.target,t=a.name,r=a.value;n.setState(Object(d.a)({},t,r))},n}return Object(E.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:le.a.login},r.a.createElement("div",{className:le.a.container},r.a.createElement("div",{className:le.a.formContainer},r.a.createElement("h1",null,"Merchant Dashboard"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{className:le.a.username,required:!0,name:"username",onChange:this.handleChange,value:this.state.username,placeholder:"Username",type:"text"}),r.a.createElement("br",null),r.a.createElement("input",{className:le.a.password,autocomplete:"new-password",required:!0,name:"password",onChange:this.handleChange,value:this.state.password,placeholder:"Password",type:"password"}),r.a.createElement("br",null),r.a.createElement("input",{className:le.a.submit,type:"submit"})))))}}]),a}(r.a.Component),oe=n(44),se=n(32),me=n(2),ue=function(e){var a=e.component,n=Object(me.a)(e,["component"]);return r.a.createElement(se.b,Object.assign({},n,{render:function(e){return!0===JSON.parse(localStorage.getItem("isAuthenticated"))?r.a.createElement(a,e):r.a.createElement(se.a,{to:"/"})}}))};var he=function(){return r.a.createElement(oe.a,null,r.a.createElement("div",{className:o.a.App},r.a.createElement(se.d,null,r.a.createElement(se.b,{path:"/",exact:!0,component:ce}),"//Protected route for merchant Dashboard",r.a.createElement(ue,{path:"/merchant-list",exact:!0,component:re}),r.a.createElement(se.b,{path:"*",component:function(){return"ERROR 404 PAGE NOT FOUND"}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[70,1,2]]]);
//# sourceMappingURL=main.29ee1673.chunk.js.map