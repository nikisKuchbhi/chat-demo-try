(this.webpackJsonpchatromm=this.webpackJsonpchatromm||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),a=n(15),i=n.n(a),s=(n(24),n(13)),o=n.n(s),u=n(16),j=n(10),d=(n(26),n(9)),b=(n(33),n(28),n(31),n(18)),l=n(19),h=n(4);d.a.initializeApp({apiKey:"AIzaSyBHMavbmvI6IKYKdQN_pO6A4KZCG-vTjx0",authDomain:"webchat-65de0.firebaseapp.com",projectId:"webchat-65de0",storageBucket:"webchat-65de0.appspot.com",messagingSenderId:"454032400697",appId:"1:454032400697:web:8383997cb5e7f6152c88e8",measurementId:"G-J8MESJE1RH"});var p=d.a.auth(),m=d.a.firestore();function O(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{className:"sign-in",onClick:function(){var e=new d.a.auth.GoogleAuthProvider;p.signInWithPopup(e)},children:"Sign in with Google"}),Object(h.jsx)("p",{children:"Do not violate the community guidelines or you will be banned for life!"})]})}function f(){return p.currentUser&&Object(h.jsx)("button",{className:"sign-out",onClick:function(){return p.signOut()},children:"Sign Out"})}function g(){var e=Object(c.useRef)(),t=m.collection("messages"),n=t.orderBy("createdAt").limit(25),r=Object(l.a)(n,{idField:"id"}),a=Object(j.a)(r,1)[0],i=Object(c.useState)(""),s=Object(j.a)(i,2),b=s[0],O=s[1],f=function(){var n=Object(u.a)(o.a.mark((function n(c){var r,a,i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),r=p.currentUser,a=r.uid,i=r.photoURL,n.next=4,t.add({text:b,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:a,photoURL:i});case 4:O(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("main",{children:[a&&a.map((function(e){return Object(h.jsx)(x,{message:e},e.id)})),Object(h.jsx)("span",{ref:e})]}),Object(h.jsxs)("form",{onSubmit:f,children:[Object(h.jsx)("input",{value:b,onChange:function(e){return O(e.target.value)},placeholder:"say something nice"}),Object(h.jsx)("button",{type:"submit",disabled:!b,children:"\ud83d\udd4a\ufe0f"})]})]})}function x(e){var t=e.message,n=t.text,c=t.uid,r=t.photoURL,a=c===p.currentUser.uid?"sent":"received";return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"message ".concat(a),children:[Object(h.jsx)("img",{src:r||"https://api.adorable.io/avatars/23/abott@adorable.png"}),Object(h.jsx)("p",{children:n})]})})}var v=function(){var e=Object(b.a)(p),t=Object(j.a)(e,1)[0];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("h1",{children:"\u269b\ufe0f\ud83d\udd25\ud83d\udcac"}),Object(h.jsx)(f,{})]}),Object(h.jsx)("section",{children:t?Object(h.jsx)(g,{}):Object(h.jsx)(O,{})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),w()}},[[32,1,2]]]);
//# sourceMappingURL=main.6f0f7b36.chunk.js.map