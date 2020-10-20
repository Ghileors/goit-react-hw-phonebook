(this["webpackJsonpgoit-react-hw-phonebook"]=this["webpackJsonpgoit-react-hw-phonebook"]||[]).push([[0],[,,,,,function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__1fCkt",nameInput:"ContactForm_nameInput__3foIk",numberInput:"ContactForm_numberInput__3ujaF",nameLabel:"ContactForm_nameLabel__3B3ub",addButton:"ContactForm_addButton__2Bryk"}},,,,,,,,,,,function(t,e,n){t.exports={Notification:"Notification_Notification__3wRcD"}},function(t,e,n){t.exports={enter:"AppearStyles_enter__1I0v3",enterActive:"AppearStyles_enterActive__1rBMo",exit:"AppearStyles_exit__pZN3y",exitActive:"AppearStyles_exitActive__3Xl9p"}},function(t,e,n){t.exports={Button:"Button_Button__1N5Bi"}},function(t,e,n){t.exports={ContactItem:"ContactItem_ContactItem__9cR7s"}},function(t,e,n){t.exports={enter:"AppearStyles_enter__3R0_Z",enterActive:"AppearStyles_enterActive__2ZMhC",exit:"AppearStyles_exit__i9uXx",exitActive:"AppearStyles_exitActive__2tr_P"}},function(t,e,n){t.exports={ContactList:"ContactList_ContactList__xKXoW",ContactItem:"ContactList_ContactItem__2fnXz"}},function(t,e,n){t.exports={Section:"Section_Section__19629"}},function(t,e,n){t.exports={appear:"AppearStyles_appear__JAViF",appearActive:"AppearStyles_appearActive__1ioD3"}},,,function(t,e,n){t.exports=n(34)},,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),i=n(6),l=n(24),s=n(7),u=n(8),m=n(11),p=n(10),f=n(15),_=n(36),h=n(16),d=n.n(h),v=function(){return c.a.createElement("div",{className:d.a.Notification},c.a.createElement("p",null,"This contact is already on the list!"))},b=n(17),C=n.n(b),E=n(5),S=n.n(E),g=n(37),y=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",existingContact:!1},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,o=t.props.appState.contacts.map((function(t){return t.name})),r=t.state.name;o.includes(r)&&t.showNotification(),t.props.onSubmit({id:Object(g.a)(),name:a,number:c}),t.setState({name:"",number:""})},t.showNotification=function(){t.setState({existingContact:!0}),setTimeout((function(){return t.setState({existingContact:!1})}),5e3)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.existingContact;return c.a.createElement(c.a.Fragment,null,c.a.createElement(_.a,{in:a,classNames:C.a,unmountOnExit:!0,timeout:200},c.a.createElement(v,null)),c.a.createElement("form",{className:S.a.ContactForm,onSubmit:this.handleSubmit},c.a.createElement("label",{className:S.a.nameLabel},c.a.createElement("input",{className:S.a.nameInput,onChange:this.handleChange,placeholder:"Enter name...",value:e,type:"text",name:"name",autoFocus:!0})),c.a.createElement("label",null,c.a.createElement(f.a,{className:S.a.numberInput,format:"###-##-##",onChange:this.handleChange,placeholder:"Enter phone Number...",value:n,name:"number",mask:""})),c.a.createElement("button",{className:S.a.addButton,type:"submit"})))}}]),n}(a.Component),x=n(38),N=n(18),A=n.n(N);function I(t){var e=t.id,n=t.onRemove;return c.a.createElement("button",{id:e,className:A.a.Button,type:"submit",onClick:n})}var k=n(19),O=n.n(k);function F(t){var e=t.contact,n=t.onRemoveContact;return c.a.createElement("li",{className:O.a.ContactItem},e.name,": ",e.number,c.a.createElement(I,{id:e.id,onRemove:n}))}var j=n(20),B=n.n(j),w=n(21),R=n.n(w);function L(t){var e=t.contacts,n=t.onRemoveContact;return c.a.createElement(c.a.Fragment,null,c.a.createElement(x.a,{component:"ul",className:R.a.ContactList},e.length>0&&e.map((function(t){return c.a.createElement(_.a,{timeout:200,key:t.id,classNames:B.a},c.a.createElement(F,{onRemoveContact:n,contact:t,key:t.id}))}))))}var D=n(22),J=n.n(D),M=n(23),X=n.n(M);function T(t){var e=t.title,n=t.children;return c.a.createElement("div",{className:J.a.Section},c.a.createElement(_.a,{in:!0,appear:!0,unmountOnExit:!0,classNames:X.a,timeout:2e3},c.a.createElement("h2",{ref:c.a.createRef()},e)),n)}var V=function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("label",null,c.a.createElement("input",{className:"filterInput",type:"text",name:"filter",value:e,placeholder:"Search contact...",onChange:function(t){return n(t.target)}}))},Z=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number;t.setState((function(t){return{contacts:t.contacts.map((function(t){return t.name})).includes(n)||""===n||""===a?t.contacts:[].concat(Object(l.a)(t.contacts),[e])}}))},t.deleteContact=function(e){t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==e.target.id}))})},t.filterContacts=function(e){var n=e.name,a=e.value;t.setState(Object(i.a)({},n,a))},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.length&&n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())||t.number.includes(a)}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;e.contacts!==n&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return c.a.createElement("div",null,c.a.createElement(T,{title:"Phonebook"},c.a.createElement(y,{onSubmit:this.addContact,appState:this.state})),c.a.createElement("hr",null),c.a.createElement(T,{title:"Contacts"},this.state.contacts.length>1&&c.a.createElement(V,{onChangeFilter:this.filterContacts,value:t}),e.length>0?c.a.createElement(L,{contacts:e,onRemoveContact:this.deleteContact}):c.a.createElement("p",{className:"text"},"The phone book is empty.")),c.a.createElement("hr",null))}}]),n}(a.Component);n(33);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Z,null)),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.bde64bed.chunk.js.map