import{f as t,e,o as n,c as i,b as o,t as r,d as s}from"./app.3288cba1.js";import{s as c,g as d}from"./lifeCircle.bea35ce6.js";import{u}from"./index.2e1dce85.js";import"./type.925d599a.js";function a(e){const{state:n}=u(!1);return c((()=>{const i=d(e);if(!i)return;const o=function(t){if(!t)return!1;const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,i=t.getBoundingClientRect();if(i){const{top:t,bottom:o,left:r,right:s}=i;return o>0&&t<=n&&r<=e&&s>0}return!1}(i);n.value=o;const r=new IntersectionObserver((t=>{const e=t.every((t=>t.isIntersecting));n.value=e}));r.observe(i),t((()=>{r.disconnect()}))})),n}var l={setup(){const t=e(null);return{divRef:t,isInViewport:a(t)}}};const m={ref:"divRef",style:{width:"100px",height:"100px",background:"rgba(0, 0, 0, 0.1)","margin-bottom":"300px"}},p=s(" isInViewport: "),f={style:{color:"blue"}};l.render=function(t,e,s,c,d,u){return n(),i("div",null,[o("div",m,null,512),p,o("span",f,r(c.isInViewport),1)])};export{l as _};
