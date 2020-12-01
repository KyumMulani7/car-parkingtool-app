(this["webpackJsonpcar-parking"]=this["webpackJsonpcar-parking"]||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(1),s=a(21),n=a.n(s),l=a(10),i=a(2),o=a(5),j=a.n(o),d=function(e){var t=e.icon,a=e.title,s=e.Iconcolor;return Object(r.useEffect)((function(){var e=document.querySelectorAll(".sidenav");j.a.Sidenav.init(e,{})}),[]),Object(c.jsxs)(r.Fragment,{children:[Object(c.jsx)("div",{className:"navbar-fixed",children:Object(c.jsx)("nav",{children:Object(c.jsx)("div",{className:"nav-wrapper",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("a",{href:"#",className:"brand-logo",children:[Object(c.jsx)("i",{className:"material-icons hide-on-small-only",style:s,children:t}),a]}),Object(c.jsx)("a",{href:"#",className:"sidenav-trigger","data-target":"mobile-nav",children:Object(c.jsx)("i",{className:"material-icons",children:"menu"})}),Object(c.jsxs)("ul",{className:"right hide-on-small-only",children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/about",children:"About"})})]})]})})})}),Object(c.jsxs)("ul",{className:"sidenav",id:"mobile-nav",children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/about",children:"About"})})]})]})};d.defaultProps={title:"Car Parking Tool",icon:"directions_car",Iconcolor:{color:"black"}};var b=d,u=Object(r.createContext)(),h=function(){var e=Object(r.useContext)(u).alert;return null!==e&&Object(c.jsxs)("div",{className:"p-pt45 mt-pt6 lighten-3 z-depth-2 ".concat(e.type),children:[Object(c.jsx)("i",{className:"fas fa-info-circle"})," ",e.msg]})},m=a(14),O=a(3),x=a(8),p=Object(r.createContext)(),f=function(){var e=Object(r.useContext)(p),t=Object(r.useContext)(u),a=Object(i.f)(),s=Object(r.useState)({parkPlace:"",carParked:""}),n=Object(x.a)(s,2),l=n[0],o=n[1],j=function(e){return o(Object(O.a)(Object(O.a)({},l),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(c.jsx)("div",{children:Object(c.jsx)("form",{onSubmit:function(c){c.preventDefault();var r=Number(l.parkPlace),s=Number(l.carParked);""===r||0===r||""===s||0===s?t.setAlert("Please fill all details","teal"):r<0||s<0?t.setAlert("Please select positive values...","teal"):r<s?t.setAlert("Number of cars parked cannot be greater than number of parking places!!","teal"):(e.storeMainPgCount(l),o(""),a.push("/parking-tool"))},className:"form",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"card-panel",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"input-field col s12 m6",children:[Object(c.jsxs)("h5",{children:["Number of parking places",Object(c.jsx)("span",{className:"red-text",children:"*"})]}),Object(c.jsx)("input",{type:"number",name:"parkPlace",placeholder:"Enter Number of parking places",value:l.parkPlace,onChange:j})]}),Object(c.jsxs)("div",{className:"input-field col s12 m6",children:[Object(c.jsxs)("h5",{children:["Number of Cars Parked",Object(c.jsx)("span",{className:"red-text",children:"*"})]}),Object(c.jsx)("input",{type:"number",name:"carParked",placeholder:"Enter Number of Cars Parked",value:l.carParked,onChange:j})]})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col s12 m4 push-m4 pull-m4",children:Object(c.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-dark btn-block"})})})]})})})})},v=function(){return Object(c.jsx)(r.Fragment,{children:Object(c.jsx)(f,{})})},N=function(){return Object(c.jsxs)(r.Fragment,{children:[Object(c.jsx)("h1",{className:"center",children:"About This App"}),Object(c.jsx)("p",{className:"center",children:"React App to Automate Car Parking System"}),Object(c.jsx)("p",{className:"center",children:"Version: 1.0.0"})]})},g=function(e){var t=e.car,a=e.id,s=Object(r.useContext)(p),n=s.deleteUserCarData,l=s.addAmount,i=t.date.getDate()+"-"+(t.date.getMonth()+1)+"-"+t.date.getFullYear(),o=t.date.getHours()+":"+t.date.getMinutes()+":"+t.date.getSeconds();return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"center",children:a+1}),Object(c.jsx)("td",{className:"center",children:t.carNo}),Object(c.jsx)("td",{className:"center",children:t.carColor}),Object(c.jsx)("td",{className:"center",children:t.carSlot}),Object(c.jsx)("td",{className:"center",children:t.carAmount}),Object(c.jsx)("td",{className:"center",children:"".concat(i,", ").concat(o)}),Object(c.jsxs)("td",{className:"center",children:[Object(c.jsx)("a",{href:"#parking-tool",className:"btn yellow waves-effect waves-light black-text center btn-ig",onClick:function(){n(t.carSlot),l(t.carAmount),j.a.toast({html:"Car is Deleted as parking amount is paid"})},children:"Paid"})," ",Object(c.jsx)("a",{href:"#parking-tool",className:"btn orange waves-effect waves-light black-text center btn-ig",onClick:function(){n(t.carSlot),j.a.toast({html:"Car Deleted"})},children:"Cancel"})]})]})},k=function(){var e=Object(r.useContext)(p),t=e.updateUserCarParkingAmt,a=e.parkingData,s=e.carData,n=e.clearUsers,l=e.filterCarData,i=e.filteredData,o=e.clearFilter,d=e.amt,b=Object(r.useRef)(),u=Object(r.useRef)(),h=Object(r.useRef)(),m=Object(r.useRef)(),O=Object(r.useState)(""),f=Object(x.a)(O,2),v=f[0],N=f[1];Object(r.useEffect)((function(){null!==s&&s.length>0?N(a.parkPlace-a.carParked-s.length):N(a.parkPlace-a.carParked),0===v&&!1===m.current.classList.contains("disabled")?(m.current.classList.add("disabled"),j.a.toast({html:"No Parking Slot is available. Please remove existing cars from parking!"})):m.current.classList.remove("disabled")}),[v,s,a.parkPlace,a.carParked]),Object(r.useEffect)((function(){null!==i&&i.length>0&&j.a.toast({html:"".concat(i.length," search found!!")})}),[i]),Object(r.useEffect)((function(){var e=setInterval((function(){null!==s&&""!==s&&s.forEach((function(e){t({carNo:e.carNo,carColor:e.carColor,carSlot:e.carSlot,carAmount:e.carAmount+10,date:e.date})}))}),1e4);return function(){return clearInterval(e)}}),[s]);return Object(c.jsxs)(r.Fragment,{children:[Object(c.jsxs)("div",{className:"center",children:[Object(c.jsx)("b",{children:Object(c.jsxs)("p",{children:["Total Parking Slots -  ",a.parkPlace]})}),Object(c.jsx)("b",{children:Object(c.jsxs)("p",{children:["Available Parking Slots - ",isNaN(v)?0:v]})})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col s12 m6 push-m3 pull-m3",children:Object(c.jsxs)("div",{ref:b,className:"teal p-pt45 lighten-3 center z-depth-2 hide",children:["Total Money Collected is ",d]})})}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col s12 m6",children:Object(c.jsx)("a",{href:"#parking-tool",className:"btn waves-effect waves-light black white-text",onClick:function(){b.current.classList.remove("hide"),setTimeout((function(){return b.current.classList.add("hide")}),2e3)},children:"Amount Collected"})}),Object(c.jsx)("div",{className:"col s12 m6",children:Object(c.jsx)("a",{id:"bt1",ref:m,className:"btn waves-effect waves-light black white-text modal-trigger",href:"#add-user-park-modal",children:"Park a Car"})})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"input-field col s12 m4",children:Object(c.jsx)("input",{type:"text",name:"typeRegNo",ref:u,placeholder:"Type Registration Number",maxLength:"20"})}),Object(c.jsx)("div",{className:"col s12 m2",children:Object(c.jsx)("h5",{className:"center",children:"OR"})}),Object(c.jsx)("div",{className:"input-field col s12 m4",children:Object(c.jsx)("input",{type:"text",name:"typeColor",ref:h,placeholder:"Type Color",maxLength:"10"})}),Object(c.jsx)("div",{className:"col s12 m2",children:Object(c.jsx)("a",{href:"#parking-tool",className:"btn waves-effect waves-light blue white-text",onClick:function(){var e=h.current.value,t=u.current.value;""===e&&""===t&&j.a.toast({html:"Please type some color or registration number of an car!!"}),null!==e&&""!==e&&l(e),null!==t&&""!==t&&l(t),null!==e&&""!==e||null!==t&&""!==t||o()},children:"Search"})})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col s12 m4 push-m4 pull-m4",children:Object(c.jsx)("a",{href:"#parking-tool",className:"btn waves-effect waves-light grey white-text",onClick:function(){n(),j.a.toast({html:"Added Parking data is reseted!"})},children:"Reset"})})}),Object(c.jsx)("div",{className:"row overflow-x",children:Object(c.jsx)("div",{className:"col s12 m12",children:Object(c.jsxs)("table",{className:"highlight",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{className:"blue-grey darken-4 white-text",children:[Object(c.jsx)("th",{className:"center",children:"Sr No."}),Object(c.jsx)("th",{className:"center",children:"Car No."}),Object(c.jsx)("th",{className:"center",children:"Color"}),Object(c.jsx)("th",{className:"center",children:"Slot No."}),Object(c.jsx)("th",{className:"center",children:"Amount"}),Object(c.jsx)("th",{className:"center",children:"Date Time"}),Object(c.jsx)("th",{})]})}),Object(c.jsx)("tbody",{children:null!==s&&0!==s.length?null!==i&&0!==i.length?i.map((function(e,t){return Object(c.jsx)(g,{car:e,id:t},t)})):s.map((function(e,t){return Object(c.jsx)(g,{car:e,id:t},t)})):null})]})})})]})},C=function(){return Object(c.jsx)(k,{})},y=function(){var e=Object(r.useState)(""),t=Object(x.a)(e,2),a=t[0],s=t[1],n=Object(r.useState)(""),l=Object(x.a)(n,2),i=l[0],o=l[1],d=Object(r.useState)(""),b=Object(x.a)(d,2),u=b[0],h=b[1],m=Object(r.useContext)(p),O=m.storeUserCarData,f=m.carData;return Object(c.jsxs)("div",{id:"add-user-park-modal",className:"modal",children:[Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsx)("h4",{children:"Enter New Car Parking Details"}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col s12 m4",children:Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("input",{type:"text",name:"carNo",value:a,maxLength:"20",onChange:function(e){return s(e.target.value)},required:!0}),Object(c.jsxs)("label",{htmlFor:"carNo",className:"active",children:["Car No",Object(c.jsx)("span",{className:"red-text",children:"*"})]})]})}),Object(c.jsx)("div",{className:"col s12 m4",children:Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("input",{type:"text",name:"carColor",value:i,onChange:function(e){return o(e.target.value)},required:!0}),Object(c.jsxs)("label",{htmlFor:"carColor",className:"active",children:["Car Colour",Object(c.jsx)("span",{className:"red-text",children:"*"})]})]})}),Object(c.jsx)("div",{className:"col s12 m4",children:Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("input",{type:"number",name:"carSlot",value:u,maxLength:"2",onChange:function(e){return h(e.target.value)},required:!0}),Object(c.jsxs)("label",{htmlFor:"carSlot",className:"active",children:["Car Slot No",Object(c.jsx)("span",{className:"red-text",children:"*"})]})]})})]})]}),Object(c.jsx)("div",{className:"modal-footer",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col s12 m4 push-m4 pull-m4",children:Object(c.jsx)("a",{href:"#parking-tool",onClick:function(e){(e.preventDefault(),""===a||""===i||""===u)?j.a.toast({html:"Please enter the all input field details"}):f.filter((function(e){return e.carSlot===u})).length>0?(j.a.toast({html:"Please select another slot as Entered car slot - ".concat(u," is already present")}),s(""),o(""),h("")):u<0?(j.a.toast({html:"Please select positive value as car slot number!!"}),s(""),o(""),h("")):(O({carNo:a,carColor:i,carSlot:u,carAmount:10,date:new Date}),j.a.toast({html:"Car No - ".concat(a," with ").concat(i," colour and slot number - ").concat(u," was added in parking system.")}),s(""),o(""),h(""))},className:"modal-close waves-effect blue waves-light btn",children:"Park"})})})})]})},D=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Not Found"}),Object(c.jsx)("p",{children:"The page you are looking for does not exist..."})]})},P=a(23),w="CLEAR_USERS",A="SET_ALERT",S="REMOVE_ALERT",E="STORE_PARKING_INFO",R="STORE_USER_CAR_INFO",T="DELETE_CAR",L="FILTER_CARS",F="CLEAR_FILTER",_="ADD_AMT",U="UPDATE_CAR_AMOUNT",I=function(e,t){switch(t.type){case E:return Object(O.a)(Object(O.a)({},e),{},{parkingData:t.payload});case R:return Object(O.a)(Object(O.a)({},e),{},{carData:[].concat(Object(P.a)(e.carData),[t.payload])});case U:var a=e.carData.map((function(e){return e.carSlot===t.payload.carSlot?t.payload:e}));return Object(O.a)(Object(O.a)({},e),{},{carData:a});case w:return Object(O.a)(Object(O.a)({},e),{},{carData:[]});case T:return Object(O.a)(Object(O.a)({},e),{},{carData:e.carData.filter((function(e){return e.carSlot!==t.payload})),filteredData:e.filteredData.filter((function(e){return e.carSlot!==t.payload}))});case L:return Object(O.a)(Object(O.a)({},e),{},{filteredData:e.carData.filter((function(e){var a=new RegExp("".concat(t.payload),"gi");return e.carNo.match(a)||e.carColor.match(a)}))});case F:return Object(O.a)(Object(O.a)({},e),{},{filteredData:[]});case _:return Object(O.a)(Object(O.a)({},e),{},{amt:e.amt+t.payload});default:return e}},M=function(e){var t=Object(r.useReducer)(I,{parkingData:{},carData:[],filteredData:[],amt:0}),a=Object(x.a)(t,2),s=a[0],n=a[1];return Object(c.jsx)(p.Provider,{value:{parkingData:s.parkingData,carData:s.carData,filteredData:s.filteredData,amt:s.amt,storeMainPgCount:function(e){n({type:E,payload:e})},storeUserCarData:function(e){n({type:R,payload:e})},updateUserCarParkingAmt:function(e){n({type:U,payload:e})},deleteUserCarData:function(e){n({type:T,payload:e})},filterCarData:function(e){n({type:L,payload:e})},clearFilter:function(){n({type:F})},addAmount:function(e){n({type:_,payload:e})},clearUsers:function(){return n({type:w})}},children:e.children})},q=function(e,t){switch(t.type){case A:return t.payload;case S:return null;default:return e}},H=function(e){var t=Object(r.useReducer)(q,null),a=Object(x.a)(t,2),s=a[0],n=a[1];return Object(c.jsx)(u.Provider,{value:{alert:s,setAlert:function(e,t){n({type:A,payload:{msg:e,type:t}}),setTimeout((function(){return n({type:S})}),5e3)}},children:e.children})},z=(a(36),a(37),function(){return Object(r.useEffect)((function(){j.a.AutoInit()})),Object(c.jsx)(M,{children:Object(c.jsx)(H,{children:Object(c.jsx)(l.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(b,{}),Object(c.jsx)(y,{}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(h,{}),Object(c.jsxs)(i.c,{children:[Object(c.jsx)(i.a,{exact:!0,path:"/",component:v}),Object(c.jsx)(i.a,{exact:!0,path:"/about",component:N}),Object(c.jsx)(i.a,{exact:!0,path:"/parking-tool",component:C}),Object(c.jsx)(i.a,{component:D})]})]})]})})})})});n.a.render(Object(c.jsx)(z,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.29ab1d39.chunk.js.map