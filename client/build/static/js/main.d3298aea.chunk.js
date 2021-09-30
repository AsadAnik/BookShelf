(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{75:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(22),c=n.n(s),o=n(10),i=n(4),l=n(21),d=n(38),j=n.n(d),u=n(39),h=n(5),b=n(6),O=n(7),p=n(9),m=n(8),v=n(24),x=n.n(v),f=n(40),g=n.n(f),k=n(0),y=Object(i.b)((function(e){return{User:e.Users}}))((function(e){var t=e.User,n=[{type:"navItem",icon:"home",text:"Home",link:"/",restricted:!1},{type:"navItem",icon:"user",text:"My Profile",link:"/user",restricted:!0},{type:"navItem",icon:"address-card",text:"Register",link:"/register",restricted:!1,exclude:!0},{type:"navItem",icon:"sign-in",text:"Login",link:"/login",restricted:!1,exclude:!0},{type:"navItem",icon:"file-text",text:"My Reviews",link:"/user/user-reviews",restricted:!0},{type:"navItem",icon:"file-text",text:"Add Reviews",link:"/user/add-review",restricted:!0},{type:"navItem",icon:"sign-out",text:"Logout",link:"/logout",restricted:!0}],a=function(e,t){return Object(k.jsx)("div",{className:e.type,children:Object(k.jsxs)(o.b,{to:e.link,children:[Object(k.jsx)(x.a,{name:e.icon}),e.text]})},t)};return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{children:t.login&&n.map((function(e,n){return t.login.isAuth?!e.exclude&&a(e,n):!e.restricted&&a(e,n)}))})})})),_=function(e){var t=e.showNav,n=e.onHideNav;return Object(k.jsx)(g.a,{showNav:t,onHideNav:n,navStyle:{background:"black",maxWidth:"300px",color:"lightgrey"},children:Object(k.jsx)(y,{})})},E=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).onHideNav=function(){a.setState({showNav:!1})},a.state={showNav:!1},a}return Object(O.a)(n,[{key:"render",value:function(){var e=this;return Object(k.jsxs)("header",{children:[Object(k.jsx)("div",{className:"open_nav",children:Object(k.jsx)(x.a,{name:"bars",onClick:function(){return e.setState({showNav:!0})},style:{color:"#ffffff",padding:"10px",cursor:"pointer"}})}),Object(k.jsx)(_,{showNav:this.state.showNav,onHideNav:function(){return e.onHideNav()}}),Object(k.jsx)(o.b,{to:"/",className:"logo",children:"The Book Shelf"})]})}}]),n}(a.Component),w=function(e){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(E,{}),Object(k.jsx)("div",{children:e.children})]})},N=n(2),B=n(20),R=n(11),C=n.n(R);var U=function(e,t){var n=function(n){Object(p.a)(r,n);var a=Object(m.a)(r);function r(e){var t;return Object(b.a)(this,r),(t=a.call(this,e)).state={loading:!0},t.props.dispatch({type:"USER_AUTH",payload:C.a.get("/api/auth").then((function(e){return e.data}))}),t}return Object(O.a)(r,[{key:"componentWillReceiveProps",value:function(e){this.setState({loading:!1}),e.User.login.isAuth?!1===t&&this.props.history.push("/user"):!0===t&&this.props.history.push("/login")}},{key:"render",value:function(){return this.state.loading?Object(k.jsx)("div",{className:"loader",children:"Loading..."}):Object(k.jsx)(e,Object(N.a)(Object(N.a)({},this.props),{},{User:this.props.User}))}}]),r}(r.a.Component);return Object(i.b)((function(e){return{User:e.Users}}))(n)};function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"asc",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=C.a.get("/api/books?limit=".concat(e,"&skip=").concat(t,"$order=").concat(n)).then((function(e){return a?[].concat(Object(B.a)(a),Object(B.a)(e.data)):e.data})).catch((function(e){return e.message}));return{type:"GET_BOOKS",payload:r}}var D=function(e){return Object(k.jsxs)(o.b,{to:"/book/".concat(e._id),className:"book_item",children:[Object(k.jsx)("div",{className:"book_header",children:Object(k.jsx)("h2",{children:e.name})}),Object(k.jsxs)("div",{className:"book_items",children:[Object(k.jsx)("div",{className:"book_author",children:e.author}),Object(k.jsxs)("div",{className:"book_bubble",children:[Object(k.jsx)("strong",{children:"Price"})," $ ",e.price]}),Object(k.jsxs)("div",{className:"book_bubble",children:[Object(k.jsx)("strong",{children:"Pages"})," ",e.pages]}),Object(k.jsxs)("div",{className:"book_bubble rating",children:[Object(k.jsx)("strong",{children:"Rating"})," $ ",e.rating]})]})]})},I=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).showBooks=function(e){return e.list?e.list.map((function(e){return Object(a.createElement)(D,Object(N.a)(Object(N.a)({},e),{},{key:e._id}))})):Object(k.jsx)("div",{className:"loader",children:"Loading..."})},r.loadmore=function(){var e=r.props.Books.list.length,t=r.props.Books.list;r.props.dispatch(S(2,e,"desc",t))},r.props.dispatch(S(5,0,"desc")),r}return Object(O.a)(n,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[this.showBooks(this.props.Books),Object(k.jsx)("div",{className:"loadmore",onClick:this.loadmore,children:"Load More"})]})}}]),n}(a.Component),T=Object(i.b)((function(e){return{Books:e.Books}}))(I),A=function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(T,{})})},L=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).id=a.props.match.params.id,a.props.dispatch(function(e){var t=C.a.get("/api/getBook?id=".concat(e));return function(e){t.then((function(t){var n=t.data;C.a.get("/api/getReviewer?ownerId=".concat(n.ownerId)).then((function(t){var a=t.data;e({type:"GET_BOOK_WITH_REVIEWER",payload:{book:n,reviewer:a}})}))}))}}(a.id)),a}return Object(O.a)(n,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_BOOK_WITH_REVIEWER",payload:{book:{},reviewer:{}}})}},{key:"renderBook",value:function(e){var t=e.book,n=e.reviewer;return t&&n?Object(k.jsxs)("div",{className:"br_container",children:[Object(k.jsxs)("div",{className:"br_header",children:[Object(k.jsx)("h2",{children:t.name}),Object(k.jsx)("h5",{children:t.author}),Object(k.jsxs)("div",{className:"br_reviewer",children:[Object(k.jsx)("span",{children:"Review by: "}),Object(k.jsx)("span",{children:n.firstname}),Object(k.jsx)("span",{children:n.lastname})]})]}),Object(k.jsx)("div",{className:"br_review",children:t.review}),Object(k.jsxs)("div",{className:"br_box",children:[Object(k.jsxs)("div",{className:"left",children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Pages: "}),Object(k.jsx)("span",{children:t.pages})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Price: "}),Object(k.jsx)("span",{children:t.price})]})]}),Object(k.jsx)("div",{className:"right",children:Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Rating"}),Object(k.jsxs)("div",{children:[t.rating," \\ 5"]})]})})]})]}):Object(k.jsx)("div",{className:"loader",children:"Loading..."})}},{key:"render",value:function(){var e=this.props.Books;return Object(k.jsx)(k.Fragment,{children:this.renderBook(e)})}}]),n}(a.Component),G=Object(i.b)((function(e){return{Books:e.Books}}))(L),K=function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(G,Object(N.a)({},e))})},W=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).showErrorMessage=function(e){return e.login&&Object(k.jsx)("div",{className:"error",children:e.login.message})},a.submitForm=function(e){e.preventDefault(),a.props.dispatch(function(e){var t=e.email,n=e.password;return{type:"USER_LOGIN",payload:C.a.post("/api/login",{email:t,password:n}).then((function(e){return e.data})).catch((function(e){return e}))}}(a.state))},a.handleInput=function(e,t){"email"===t&&a.setState(Object(N.a)(Object(N.a)({},a.state),{},{email:e.target.value})),"password"===t&&a.setState(Object(N.a)(Object(N.a)({},a.state),{},{password:e.target.value}))},a.state={email:"",password:"",error:"",success:!1},a}return Object(O.a)(n,[{key:"componentWillReceiveProps",value:function(e){console.log(e),e.User.login.isAuth&&this.props.history.push("/user")}},{key:"render",value:function(){var e=this;return Object(k.jsx)("div",{className:"rl_container",children:Object(k.jsxs)("form",{onSubmit:this.submitForm,children:[Object(k.jsx)("h2",{children:"Login Here"}),Object(k.jsx)("div",{className:"form_element",children:Object(k.jsx)("input",{type:"email",placeholder:"Enter your email here",value:this.state.email,onChange:function(t){return e.handleInput(t,"email")}})}),Object(k.jsx)("div",{className:"form_element",children:Object(k.jsx)("input",{type:"password",placeholder:"Enter your password",value:this.state.password,onChange:function(t){return e.handleInput(t,"password")}})}),this.showErrorMessage(this.props.User),Object(k.jsx)("button",{type:"submit",children:"Log in"})]})})}}]),n}(a.Component),M=Object(i.b)((function(e){return{User:e.Users}}))(W),P=n(42),H=Object(i.b)((function(e){return{Users:e.Users}}))((function(e){var t=Object(a.useState)({name:"",lastname:"",email:"",password:"",error:""}),n=Object(P.a)(t,2),r=n[0],s=n[1];Object(a.useMemo)((function(){!1===e.Users.register?s(Object(N.a)(Object(N.a)({},r),{},{error:"Error, try again!"})):s(Object(N.a)(Object(N.a)({},r),{},{name:"",lastname:"",email:"",password:""}))}),[e]),Object(a.useEffect)((function(){e.dispatch({type:"GET_USERS",payload:C.a.get("/api/users").then((function(e){return e.data})).catch((function(e){return e.message}))})}),[]);var c,o=function(e,t){var n=Object(N.a)({},r);n[t.toLowerCase()]=e.target.value,s(Object(N.a)({},n))};return Object(k.jsxs)("div",{className:"rl_container",children:[Object(k.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s(Object(N.a)(Object(N.a)({},r),{},{error:""})),e.dispatch(function(e,t){var n=C.a.post("/api/register",e);return function(e){n.then((function(n){var a=n.data,r=a.success?[].concat(Object(B.a)(t),[a.user]):t,s={success:a.success,users:r};e({type:"USER_REGISTER",payload:s})}))}}({name:r.name,lastname:r.lastname,email:r.email,password:r.password},e.Users.users))},children:[Object(k.jsx)("h2",{children:"Register User"}),Object(k.jsx)("div",{className:"form_element",children:Object(k.jsx)("input",{type:"text",placeholder:"Enter name",value:r.name,onChange:function(e){return o(e,"NAME")}})}),Object(k.jsx)("div",{className:"form_element",children:Object(k.jsx)("input",{type:"text",placeholder:"Enter lastname",value:r.lastname,onChange:function(e){return o(e,"LASTNAME")}})}),Object(k.jsx)("div",{className:"form_element",children:Object(k.jsx)("input",{type:"email",placeholder:"Enter email",value:r.email,onChange:function(e){return o(e,"EMAIL")}})}),Object(k.jsx)("div",{className:"form_element",children:Object(k.jsx)("input",{type:"password",placeholder:"Enter password",value:r.password,onChange:function(e){return o(e,"PASSWORD")}})}),Object(k.jsx)("button",{type:"submit",children:"Register!"}),Object(k.jsx)("div",{className:"error",children:r.error})]}),Object(k.jsxs)("div",{className:"current_users",children:[Object(k.jsx)("h4",{children:"Current Users: "}),Object(k.jsxs)("table",{children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"Name"}),Object(k.jsx)("th",{children:"Lastname"}),Object(k.jsx)("th",{children:"Email"})]})}),Object(k.jsx)("tbody",{children:(c=e.Users,c.users?c.users.map((function(e){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:e.name}),Object(k.jsx)("td",{children:e.lastname}),Object(k.jsx)("td",{children:e.email})]},e._id)})):Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:Object(k.jsx)("div",{className:"loader",children:"Loading..."})}),Object(k.jsx)("td",{children:Object(k.jsx)("div",{className:"loader",children:"Loading..."})}),Object(k.jsx)("td",{children:Object(k.jsx)("div",{className:"loader",children:"Loading..."})})]}))})]})]})]})})),F=Object(i.b)(null,null)((function(e){return r.a.useEffect((function(){e.dispatch(function(e){return{type:"LOGOUT_USER",payload:C.a.get("/api/logout").then((function(){setTimeout((function(){e.history.push("/")}),2e3)}))}}(e))}),[]),Object(k.jsx)("div",{className:"logout_container",children:Object(k.jsx)("h1",{children:"Sorry to see you go :("})})})),V=function(e){var t=e.User,n=t.login,a=n.name,r=n.lastname,s=n.email;return Object(k.jsxs)("div",{className:"user_container",children:[Object(k.jsx)("div",{className:"avatar",children:Object(k.jsx)("img",{src:"/images/avatar.png",alt:"avatar"})}),Object(k.jsxs)("div",{className:"nfo",children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Name: "})," ",a]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Lastname: "})," ",r]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Email: "})," ",s]})]})]})},Y=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).showBook=function(e){return e.post?Object(k.jsxs)("div",{className:"conf_link",children:["Cool !! ",Object(k.jsx)(o.b,{to:"/book/".concat(e.bookId),children:"see the book"})]}):null},a.handleOnChange=function(e,t){var n=t.toLowerCase(),r=Object(N.a)({},a.state.formData);r[n]=e.target.value,a.setState({formData:r})},a.submitForm=function(e){var t;e.preventDefault(),a.props.dispatch((t=Object(N.a)(Object(N.a)({},a.state.formData),{},{ownerId:a.props.User.login.id}),{type:"ADD_BOOK",payload:C.a.post("/api/book",t).then((function(e){return e.data})).catch((function(e){return e.message}))}))},a.state={formData:{name:"",author:"",review:"",pages:"",rating:"",price:""}},a}return Object(O.a)(n,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_BOOK_LIST",payload:{}})}},{key:"render",value:function(){var e=this;return Object(k.jsx)("div",{className:"rl_container article",children:Object(k.jsxs)("form",{action:"",onSubmit:this.submitForm,children:[Object(k.jsx)("h2",{children:"Add a review"}),Object(k.jsx)("div",{className:"form_element",children:Object(k.jsx)("input",{type:"text",placeholder:"Enter name",value:this.state.formData.name,onChange:function(t){return e.handleOnChange(t,"NAME")}})}),Object(k.jsx)("div",{className:"form_element",children:Object(k.jsx)("input",{type:"text",placeholder:"Enter author",value:this.state.formData.author,onChange:function(t){return e.handleOnChange(t,"AUTHOR")}})}),Object(k.jsx)("textarea",{value:this.state.formData.review,placeholder:"Write review..",onChange:function(t){return e.handleOnChange(t,"REVIEW")}}),Object(k.jsx)("div",{className:"form_element",children:Object(k.jsx)("input",{type:"number",placeholder:"Enter pages",value:this.state.formData.pages,onChange:function(t){return e.handleOnChange(t,"PAGES")}})}),Object(k.jsx)("div",{className:"form_element",children:Object(k.jsxs)("select",{value:this.state.formData.rating,onChange:function(t){return e.handleOnChange(t,"RATING")},children:[Object(k.jsx)("option",{val:"1",children:"1"}),Object(k.jsx)("option",{val:"2",children:"2"}),Object(k.jsx)("option",{val:"3",children:"3"}),Object(k.jsx)("option",{val:"4",children:"4"}),Object(k.jsx)("option",{val:"5",children:"5"})]})}),Object(k.jsx)("div",{className:"form_element",children:Object(k.jsx)("input",{type:"number",placeholder:"Enter price",value:this.state.formData.price,onChange:function(t){return e.handleOnChange(t,"PRICE")}})}),Object(k.jsx)("button",{type:"submit",children:"Add Review"}),this.props.Books.newBook&&this.showBook(this.props.Books.newBook)]})})}}]),n}(a.Component),$=Object(i.b)((function(e){return{Books:e.Books}}))(Y),J=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a,r;return Object(b.a)(this,n),(a=t.call(this,e)).handleOnChange=function(e,t){var n=t.toLowerCase(),r=Object(N.a)({},a.state.formData);r[n]=e.target.value,a.setState({formData:r})},a.redirectUser=function(){setTimeout((function(){a.props.history.push("/user/user-reviews")}),1e3)},a.deleteReview=function(){var e;console.log("clicked to delete"),a.props.dispatch((e=a.state.formData._id,{type:"BOOK_DELETE",payload:C.a.delete("/api/delete_book?id=".concat(e)).then((function(e){return e.data})).catch((function(e){return e.message}))}))},a.bookDeleteMsg=function(e){return e.deleteBook?Object(k.jsxs)("div",{className:"red_tag",children:["Post Deleted!",a.redirectUser()]}):null},a.bookUpdateMsg=function(e){return e.updateBook?Object(k.jsxs)("div",{className:"edit_confirm",children:["Post updated, ",Object(k.jsx)(o.b,{to:"/book/".concat(e.book._id),children:"See your update!"})]}):null},a.submitForm=function(e){var t;e.preventDefault(),a.props.dispatch((t=a.state.formData,{type:"UPDATE_BOOK",payload:C.a.post("/api/book_update",t).then((function(e){return e.data})).catch((function(e){return e.message}))}))},a.state={formData:{_id:a.props.match.params.id,name:"",author:"",review:"",pages:"",rating:"",price:""}},a.props.dispatch((r=a.props.match.params.id,{type:"GET_BOOK",payload:C.a.get("/api/getBook?id=".concat(r)).then((function(e){return e.data})).catch((function(e){return e.message}))})),a}return Object(O.a)(n,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_BOOK",payload:{book:{},updateBook:!1,deleteBook:!1}})}},{key:"componentWillReceiveProps",value:function(e){var t=e.Books.book;t&&this.setState({formData:{_id:t._id,name:t.name,author:t.author,review:t.review,pages:t.pages,rating:t.rating,price:t.price}})}},{key:"render",value:function(){var e=this,t=this.props.Books;return Object(k.jsxs)("div",{className:"rl_container article",children:[this.bookUpdateMsg(t),this.bookDeleteMsg(t),Object(k.jsxs)("form",{action:"",onSubmit:this.submitForm,children:[Object(k.jsx)("h2",{children:"Edit a review"}),Object(k.jsx)("div",{className:"form_element",children:Object(k.jsx)("input",{type:"text",placeholder:"Enter name",value:this.state.formData.name,onChange:function(t){return e.handleOnChange(t,"NAME")}})}),Object(k.jsx)("div",{className:"form_element",children:Object(k.jsx)("input",{type:"text",placeholder:"Enter author",value:this.state.formData.author,onChange:function(t){return e.handleOnChange(t,"AUTHOR")}})}),Object(k.jsx)("textarea",{value:this.state.formData.review,placeholder:"Write review..",onChange:function(t){return e.handleOnChange(t,"REVIEW")}}),Object(k.jsx)("div",{className:"form_element",children:Object(k.jsx)("input",{type:"number",placeholder:"Enter pages",value:this.state.formData.pages,onChange:function(t){return e.handleOnChange(t,"PAGES")}})}),Object(k.jsx)("div",{className:"form_element",children:Object(k.jsxs)("select",{value:this.state.formData.rating,onChange:function(t){return e.handleOnChange(t,"RATING")},children:[Object(k.jsx)("option",{val:"1",children:"1"}),Object(k.jsx)("option",{val:"2",children:"2"}),Object(k.jsx)("option",{val:"3",children:"3"}),Object(k.jsx)("option",{val:"4",children:"4"}),Object(k.jsx)("option",{val:"5",children:"5"})]})}),Object(k.jsx)("div",{className:"form_element",children:Object(k.jsx)("input",{type:"number",placeholder:"Enter price",value:this.state.formData.price,onChange:function(t){return e.handleOnChange(t,"PRICE")}})}),Object(k.jsx)("button",{type:"submit",children:"Edit Review"}),Object(k.jsx)("div",{className:"delete_post",children:Object(k.jsx)("div",{className:"button",onClick:this.deleteReview,children:"Delete Review"})})]})]})}}]),n}(a.PureComponent),q=Object(i.b)((function(e){return{Books:e.Books}}))(J),z=n(41),Q=n.n(z),X=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a,r;return Object(b.a)(this,n),(a=t.call(this,e)).showUserReviews=function(e){return e.userBooks?e.userBooks.map((function(e){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:Object(k.jsx)(o.b,{to:"/user/edit-review/".concat(e._id),children:e.name})}),Object(k.jsx)("td",{children:e.author}),Object(k.jsx)("td",{children:Q()(e.createdAt).format("DD/MM/YYYY")})]},e._id)})):null},a.props.dispatch((r=a.props.User.login.id,{type:"GET_USER_BOOKS",payload:C.a.get("/api/user_posts?user=".concat(r)).then((function(e){return e.data})).catch((function(e){return e.message}))})),a}return Object(O.a)(n,[{key:"render",value:function(){var e=this.props.User;return Object(k.jsxs)("div",{className:"user_posts",children:[Object(k.jsx)("h4",{children:"Your reviews:"}),Object(k.jsxs)("table",{children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"Name"}),Object(k.jsx)("th",{children:"Author"}),Object(k.jsx)("th",{children:"Date"})]})}),Object(k.jsx)("tbody",{children:this.showUserReviews(e)})]})]})}}]),n}(a.Component),Z=Object(i.b)((function(e){return{Books:e.Books}}))(X),ee=function(){return Object(k.jsx)(w,{children:Object(k.jsxs)(h.c,{children:[Object(k.jsx)(h.a,{path:"/",exact:!0,component:U(A,null)}),Object(k.jsx)(h.a,{path:"/login",exact:!0,component:U(M,!1)}),Object(k.jsx)(h.a,{path:"/register",exact:!0,component:U(H,!1)}),Object(k.jsx)(h.a,{path:"/logout",exact:!0,component:U(F,!0)}),Object(k.jsx)(h.a,{path:"/user",exact:!0,component:U(V,!0)}),Object(k.jsx)(h.a,{path:"/book/:id",exact:!0,component:U(K,!0)}),Object(k.jsx)(h.a,{path:"/user/add-review",exact:!0,component:U($,!0)}),Object(k.jsx)(h.a,{path:"/user/edit-review/:id",exact:!0,component:U(q,!0)}),Object(k.jsx)(h.a,{path:"/user/user-reviews",exact:!0,component:U(Z,!0)})]})})},te=Object(l.b)({Books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BOOKS":return Object(N.a)(Object(N.a)({},e),{},{list:t.payload});case"GET_BOOK_WITH_REVIEWER":case"CLEAR_BOOK_WITH_REVIEWER":return Object(N.a)(Object(N.a)({},e),{},{book:t.payload.book,reviewer:t.payload.reviewer});case"ADD_BOOK":case"CLEAR_BOOK_LIST":return Object(N.a)(Object(N.a)({},e),{},{newBook:t.payload});case"GET_BOOK":return Object(N.a)(Object(N.a)({},e),{},{book:t.payload});case"UPDATE_BOOK":return Object(N.a)(Object(N.a)({},e),{},{updateBook:t.payload.success,book:t.payload.docs});case"BOOK_DELETE":return Object(N.a)(Object(N.a)({},e),{},{deleteBook:t.payload});case"CLEAR_BOOK":return Object(N.a)(Object(N.a)({},e),{},{book:t.payload.book,updateBook:t.payload.updateBook,deleteBook:t.payload.deleteBook});default:return e}},Users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":case"USER_AUTH":return Object(N.a)(Object(N.a)({},e),{},{login:t.payload});case"GET_USER_BOOKS":return Object(N.a)(Object(N.a)({},e),{},{userBooks:t.payload});case"GET_USERS":return Object(N.a)(Object(N.a)({},e),{},{users:t.payload});case"USER_REGISTER":return Object(N.a)(Object(N.a)({},e),{},{register:t.payload.success,users:t.payload.users});case"LOGOUT_USER":return Object(N.a)(Object(N.a)({},e),{},{logout:t.payload});default:return e}}}),ne=Object(l.a)(j.a,u.a)(l.c),ae=function(){return Object(k.jsx)(i.a,{store:ne(te),children:Object(k.jsx)(o.a,{children:Object(k.jsx)(ee,{})})})};c.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(ae,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.d3298aea.chunk.js.map