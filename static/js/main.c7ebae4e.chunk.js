(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=(a(22),a(12)),m=a(13),s=a(16),i=a(15),u=a(14),p=a.n(u),h=function(){return p.a.get("https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=50")};var f=function(e){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("img",{src:e.image,alt:e.name})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.weapon),r.a.createElement("td",null,e.profession),r.a.createElement("td",null,e.affiliation))};var E=function(e){return r.a.createElement("table",{class:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Weapon"),r.a.createElement("th",{scope:"col"},"Profession"),r.a.createElement("th",{scope:"col"},"Affiliation"))),r.a.createElement("tbody",null,e.children))};var d=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Employee Directory"),r.a.createElement("p",{className:"lead"},"Click on the carrots to filter or use the search bar to narrow your results")))};var b=function(){return r.a.createElement("form",{className:"form-inline"},r.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},r.a.createElement("label",{for:"inputSearchTerm",className:"sr-only"},"Searh Term"),r.a.createElement("input",{type:"searchEm",className:"form-control",id:"inputSearch",placeholder:"Search"})),r.a.createElement("button",{type:"submit",className:"btn btn-secondary mb-2"},"Search"))},y=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={characters:[]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;h().then((function(t){e.setState({characters:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(b,null),r.a.createElement(E,null,this.state.characters.map((function(e){return r.a.createElement(f,{key:e.id,image:e.photoUrl,name:e.name,weapon:e.weapon,profession:e.profession,affiliation:e.affiliation})}))))}}]),a}(n.Component);var v=function(){return r.a.createElement(y,null)};c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c7ebae4e.chunk.js.map