import{u as e,c as t,r as o,a as n,b as r,d as s,w as a,e as i,o as l,f as d,F as c,g as u,h as m,i as p,j as _}from"./vendor.c2540ece.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const f={setup(){const o=e();return{token:t((()=>o.state.token))}}},h={class:" bg-gray-800 text-white py-5"},g={class:"text-3xl"},y=d("基富通查詢後台"),E={key:0,class:" inline-block mx-2 hover:underline"},L=d("登入"),k={class:"inline-block mx-2 hover:underline"},v=d("後台");f.render=function(e,t,d,c,u,m){const p=o("router-link");return l(),n("header",h,[r("h1",g,[s(p,{to:"/"},{default:a((()=>[y])),_:1})]),r("nav",null,[r("ul",null,[c.token?i("",!0):(l(),n("li",E,[s(p,{to:"/login"},{default:a((()=>[L])),_:1})])),r("li",k,[s(p,{to:"/dashboard"},{default:a((()=>[v])),_:1})])])])])};const I={components:{Head:f},setup(){e().dispatch("init")}};I.render=function(e,t,r,a,i,d){const u=o("Head"),m=o("router-view");return l(),n(c,null,[s(u),s(m)],64)};const b={load:e=>JSON.parse(localStorage.getItem(e)||"{}"),save(e,t){localStorage.setItem(e,JSON.stringify(t))},remove(e){localStorage.removeItem(e)}},N=u({state:{token:"",BFNo:"",fundList:[]},mutations:{clearUserInfo:e=>{e.token="",e.BFNo="",b.remove("payload")},setUserInfo:(e,t)=>{e.token=t.Token,e.BFNo=t.BFNo,b.save("payload",t)},setFundList:(e,t)=>{e.fundList=t.Data.TRADE_LISTS}},actions:{init({commit:e}){e("setUserInfo",b.load("payload"))}},getters:{formatList:e=>e.fundList.map((e=>({name:e.FUND_SH_NM,risk:e.FUND_RISK_MSG,id:e.FUND_ID,type:e.PROF_TYPE_NM,day:e.NAV_DATE,total:e.TWD_BAL_COST,amt:e.GL_AMT,value:e.RSP_MARKET_VALUE,gain_all:e.ROI_RATE_DIV,gain:e.ROI_RATE})))}}),T={},A=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/fundrich-dashboard/${e}`)in T)return;T[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},S=p({history:m(),routes:[{path:"/",name:"home",component:()=>A((()=>import("./home.27b91fd4.js")),["assets/home.27b91fd4.js","assets/vendor.c2540ece.js"])},{path:"/dashboard",name:"dashboard",beforeEnter:(e,o,n)=>{t((()=>N.state.token)).value?n():n("/login")},component:()=>A((()=>import("./dashboard.9b804113.js")),["assets/dashboard.9b804113.js","assets/vendor.c2540ece.js","assets/api.d86776fc.js"])},{path:"/login",name:"login",component:()=>A((()=>import("./login.95e6255c.js")),["assets/login.95e6255c.js","assets/vendor.c2540ece.js","assets/api.d86776fc.js"])},{path:"/:pathMatch(.*)*",name:"404",component:()=>A((()=>import("./404.8922b67a.js")),["assets/404.8922b67a.js","assets/vendor.c2540ece.js"])}]});_(I).use(S).use(N).mount("#app");
