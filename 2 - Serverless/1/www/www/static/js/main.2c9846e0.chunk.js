(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(23)},20:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);a(13),a(9),a(14),a(15);var n=a(0),l=a.n(n),r=a(11),s=a.n(r),c=(a(20),a(1)),i=a(2),o=a(5),m=a(3),u=a(4),p=(a(21),a(22),a(7)),d=a(6),h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).loading=!1,a.API_URL="",a.state={app_id:"",app_token:"",name:"",machine_key:"",appData:"",error:""},a.API_URL=e.apiUrl,a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.API_URL=e.apiUrl}},{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.id,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;fetch(this.API_URL,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(this.state)}).then(function(e){return e.ok?e.json():(console.log("ERRROR: "+e.status),t.setState({appData:"",error:"Status: "+e.status+", text"+e.statusText+", type "+e.type}),null)}).then(function(e){e&&(e.application_id?t.setState({appData:e,error:""}):t.setState({appData:"",error:e}))}),e.preventDefault()}},{key:"render",value:function(){var e=l.a.createElement("div",null);this.state.appData&&(e=l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item"},l.a.createElement("div",null,"application_id: ",this.state.appData.application_id)),l.a.createElement("li",{className:"list-group-item"},l.a.createElement("div",null,"user_name: ",this.state.appData.user_name)),l.a.createElement("li",{className:"list-group-item"},l.a.createElement("div",null,"machine_key: ",this.state.appData.machine_key)),l.a.createElement("li",{className:"list-group-item"},l.a.createElement("div",null,"application_token: ",this.state.appData.application_token)),l.a.createElement("li",{className:"list-group-item"},l.a.createElement("div",null,"create_date: ",this.state.appData.create_date)),l.a.createElement("li",{className:"list-group-item"},l.a.createElement("div",null,"expiration_date: ",this.state.appData.expiration_date))));var t=l.a.createElement("div",null);return this.state.error&&(t=l.a.createElement("div",{className:"alert alert-warning"},l.a.createElement("strong",null,"Warning!")," ",this.state.error)),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"appId",className:"col-sm-4 col-form-label"},"App ID:"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{type:"text",className:"form-control",id:"app_id",onChange:this.handleChange}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"appToken",className:"col-sm-4 col-form-label"},"App token:"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{type:"text",className:"form-control",id:"app_token",onChange:this.handleChange}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"userName",className:"col-sm-4 col-form-label"},"Name:"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{type:"text",className:"form-control",id:"name",onChange:this.handleChange}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"machineKey",className:"col-sm-4 col-form-label"},"Machine key:"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{type:"text",className:"form-control",id:"machine_key",onChange:this.handleChange}))),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),e,t)}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={items:a.props.items},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log(this.state)}},{key:"componentWillReceiveProps",value:function(e){this.setState({items:e.items})}},{key:"render",value:function(){return l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Application Id"),l.a.createElement("th",null,"Application token"),l.a.createElement("th",null,"Create date"),l.a.createElement("th",null,"Expiration date"),l.a.createElement("th",null,"Machine key"),l.a.createElement("th",null,"User name"))),l.a.createElement("tbody",null,this.state.items.map(function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.application_id),l.a.createElement("td",null,e.application_token),l.a.createElement("td",null,e.create_date),l.a.createElement("td",null,e.expiration_date),l.a.createElement("td",null,e.machine_key),l.a.createElement("td",null,e.user_name))})))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={issues:a.props.issues},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({issues:e.issues})}},{key:"render",value:function(){return l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Issue Id"),l.a.createElement("th",null,"Application Id"),l.a.createElement("th",null,"User name"),l.a.createElement("th",null,"Message"))),l.a.createElement("tbody",null,this.state.issues.map(function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.issueId),l.a.createElement("td",null,e.applicationId),l.a.createElement("td",null,e.userName),l.a.createElement("td",null,e.message))})))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).loadAllProd=function(){var e="";a.state.service_url&&a.state.appIdProd&&a.state.appTokenProd?(e="?app_id="+a.state.appIdProd+"&app_token="+a.state.appTokenProd,fetch(a.state.service_url+e,{headers:{"Content-Type":"application/json",Authorization:a.state.header_token}}).catch(function(e){a.setState({items:[],error:JSON.stringify(e)})}).then(function(e){if(e)return e.ok?e.json():(a.setState({items:[],error:"Status: "+e.status+", text"+e.statusText+", type "+e.type}),null);a.setState({items:[],error:"res is null!"})}).then(function(e){e&&e.Items&&a.setState({items:e.Items,error:""})})):a.setState({items:[],error:"Service url, App ID and App Token are required"})},a.loadAllProdIssues=function(){a.state.app_id?fetch(a.state.service_url+"/issue/"+a.state.app_id).catch(function(e){a.setState({issues:[],errorIssues:e})}).then(function(e){if(e)return e.ok?e.json():(a.setState({issues:[],errorIssues:"Status: "+e.status+", text"+e.statusText+", type "+e.type}),null);a.setState({issues:[],errorIssues:"res is null!"})}).then(function(e){e&&e.issues&&a.setState({issues:e.issues,errorIssues:""})}):a.setState({errorIssues:"Application id is required"})},a.handleChange=function(e){a.setState(Object(p.a)({},e.target.id,e.target.value))},a.state={items:[],issues:[],header_token:"",app_id:"",service_url:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=l.a.createElement("div",null);this.state.error&&(e=l.a.createElement("div",{className:"alert alert-warning"},l.a.createElement("strong",null,"Warning! ")," ",this.state.error));var t=l.a.createElement("div",null);return this.state.errorIssues&&(t=l.a.createElement("div",{className:"alert alert-warning"},l.a.createElement("strong",null,"Warning! ")," ",this.state.errorIssues)),l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"service_url",className:"col-sm-4 col-form-label"},"Service URL:"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{type:"text",className:"form-control",id:"service_url",onChange:this.handleChange})))),l.a.createElement("div",{className:"page-header"},l.a.createElement("b",null,"Machine request:")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(h,{apiUrl:this.state.service_url}))),l.a.createElement("hr",null),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"appIdProd",className:"col-sm-4 col-form-label"},"App ID:"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{type:"text",className:"form-control",id:"appIdProd",onChange:this.handleChange})),l.a.createElement("label",{htmlFor:"appTokenProd",className:"col-sm-4 col-form-label"},"App token:"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{type:"text",className:"form-control",id:"appTokenProd",onChange:this.handleChange})),l.a.createElement("label",{htmlFor:"header_token",className:"col-sm-4 col-form-label"},"Authorization token:"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{type:"text",className:"form-control",id:"header_token",onChange:this.handleChange})))),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"btn btn-sm btn-primary",onClick:this.loadAllProd},"Load all items"),l.a.createElement("div",{className:"col-md-12"},l.a.createElement(E,{items:this.state.items}))),e,l.a.createElement("hr",null),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"app_id",className:"col-sm-4 col-form-label"},"App ID:"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{type:"text",className:"form-control",id:"app_id",onChange:this.handleChange})))),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"btn btn-sm btn-primary",onClick:this.loadAllProdIssues},"Load all issues"),l.a.createElement("div",{className:"col-md-12"},l.a.createElement(v,{issues:this.state.issues}))),t)}}]),t}(n.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container theme-showcase",role:"main"},l.a.createElement("div",{className:"jumbotron"},l.a.createElement(b,null),l.a.createElement("hr",null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.2c9846e0.chunk.js.map