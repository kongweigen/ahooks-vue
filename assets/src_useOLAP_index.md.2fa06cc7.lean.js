var s=Object.assign;import{E as n,q as a,j as e,k as t,h as o,e as u,o as c,c as p,r as i,b as l,w as r,a as C}from"./app.3288cba1.js";import{O as E,C as d}from"./type.925d599a.js";const m={"=":(s,n)=>s===n,">":(s,n)=>s>n,"<":(s,n)=>s<n,">=":(s,n)=>s>=n,"<=":(s,n)=>s<=n,"!=":(s,n)=>s!==n};function D(c,p={}){t(c)||(c=u(c)),p.columns||(p.columns=e((()=>{var s;return Object.keys(null!=(s=c.value[0])?s:[]).reduce(((s,n)=>(s[n]=n,s)),{})}))),t(p.columns)||(p.columns=u(p.columns));const i=function(t,o){const u=a({list:[],cur:{field:"",operator:E.等于,value:""}}),c=e((()=>o.value)),p=E,i=e((()=>u.cur.field?Array.from(new Set(t.value.map((s=>s[u.cur.field])).filter((s=>void 0!==s)))):[]));function l(){u.cur.field="",u.cur.operator=E.等于,u.cur.value=""}const r=e((()=>u.cur.field&&u.cur.operator&&u.cur.value));return s(s({},n(u)),{fieldOptions:c,operatorOptions:p,valueOptions:i,resetFilter:l,canAddFilter:r,addFilter:function(){r.value&&(u.list.push({field:u.cur.field,operator:u.cur.operator,value:u.cur.value}),l())}})}(c,p.columns),{cubeSettings:l,cubeOptions:r}=function(n,u={},c={}){var p,i;const l=a({dimension:c.dimension,measure:c.measure,series:c.series,bySeries:null!=(p=c.bySeries)&&p,countField:null!=(i=c.countField)?i:d}),r=e((()=>u.dimensions?t(u.dimensions)?u.dimensions.value:u.dimensions:n.value)),C=e((()=>u.measures?t(u.measures)?u.measures.value:u.measures:s({[d]:"次数"},n.value))),E=e((()=>u.series?t(u.series)?u.series.value:u.series:n.value));o(r,(()=>{var s;l.dimension&&r.value[l.dimension]||(l.dimension=Object.keys(null!=(s=r.value)?s:{})[0])}),{immediate:!0}),o(C,(()=>{var s;l.measure&&C.value[l.measure]||(l.measure=Object.keys(null!=(s=C.value)?s:{})[0])}),{immediate:!0}),o(E,(()=>{var s;l.series&&E.value[l.series]||(l.series=Object.keys(null!=(s=E.value)?s:{})[0])}),{immediate:!0});const m=e((()=>({dimension:r.value,measure:C.value,series:E.value})));return{cubeSettings:l,cubeOptions:m}}(p.columns,p.options,p.defaultValues),{cube:C,chartCube:D}=function(s,n,a){const t=e((()=>{const e=s.value.filter((s=>{for(const{field:a,operator:e,value:t}of n.value)if(!(0,m[e])(s[a],t))return!1;return!0})),{dimension:t,measure:o,series:u,bySeries:c,countField:p}=a;if(!t||!o||c&&!u)return[];function i(s,n,a){s[n]?s[n]+=o===p?1:Number(a[o])||0:s[n]=o===p?1:Number(a[o])||0}let l=[];if(c){const s={};for(const n of e){if(!(t in n))continue;const a=n[t];s[a]?s[a].push(n):s[a]=[n]}for(const n in s){const a={};for(const e of s[n])i(a,e[u],e);for(const s in a)l.push({[t]:n,[u]:s,[o]:a[s]})}}else{const s={};for(const n of e)t in n&&i(s,n[t],n);for(const n in s)l.push({[t]:n,[o]:s[n]})}return l=l.sort(((s,n)=>s[t]<n[t]?-1:1)),l})),o=e((()=>{const{dimension:s,measure:n,series:e,bySeries:o}=a,u=[s];if(o){const s=Array.from(new Set(t.value.map((s=>s[e]))));u.push(...s)}else u.push(n);let c=t.value;if(o){const a={};for(const o of t.value){const t=o[s],u=o[e],c=o[n];a[t]?a[t][u]=c:a[t]={[s]:t,[u]:c}}c=Object.values(a)}return{columns:u,rows:c}}));return{cube:t,chartCube:o}}(c,i.list,l);return{cube:C,chartCube:D,columns:p.columns,cubeSettings:l,cubeOptions:r,filter:i}}const k=[{date:"2020-08-08",name:"d",age:22,action:"pull",score:17},{date:"2020-08-05",name:"a",age:18,action:"push",score:13},{date:"2020-08-05",name:"b",age:20,action:"pull",score:0},{date:"2020-08-05",name:"c",age:24,action:"push",score:4},{date:"2020-08-05",name:"d",age:22,action:"pull",score:3},{date:"2020-08-06",name:"a",age:18,action:"pull",score:-3},{date:"2020-08-06",name:"d",age:22,action:"push",score:9},{date:"2020-08-07",name:"b",age:20,action:"pull",score:15},{date:"2020-08-07",name:"c",age:24,action:"push",score:0},{date:"2020-08-08",name:"a",age:18,action:"push",score:1},{date:"2020-08-09",name:"a",age:18,action:"push"}];var F={setup(){const{cube:s,cubeSettings:n}=D(k);return{cube:s,cubeSettings:n}}};F.render=function(s,n,a,e,t,o){return c(),p("div")};const h={components:{demo25:F}},f='{"title":"useDocumentVisibility","description":"","frontmatter":{"map":{"realPath":"src/useOLAP/index.md"}},"headers":[{"level":2,"title":"代码演示","slug":"代码演示"},{"level":3,"title":"基本用法","slug":"基本用法"},{"level":3,"title":"参数","slug":"参数"}],"relativePath":"src/useOLAP/index.md","lastUpdated":1613792349386}',v=C('',4),g=C('',2);h.render=function(s,n,a,e,t,o){const u=i("demo25"),C=i("demo");return c(),p("div",null,[v,l("p",null,[l(C,{src:"./demo/demo.vue",language:"vue",title:"基本用法",desc:"分析多维数据",componentName:"demo25",htmlStr:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20useOLAP%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'ahooks-vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20data%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'.%2Fdata'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20cube%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20cubeSettings%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EuseOLAP%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Edata%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20cube%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20cubeSettings%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStr:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20useOLAP%20%7D%20from%20'ahooks-vue'%3B%0Aimport%20%7B%20data%20%7D%20from%20'.%2Fdata'%3B%0A%0Aexport%20default%20%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20%7B%20cube%2C%20cubeSettings%20%7D%20%3D%20useOLAP(data)%3B%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20cube%2C%0A%20%20%20%20%20%20cubeSettings%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C%2Fscript%3E%0A"},{default:r((()=>[l(u)])),_:1})]),g])};export default h;export{f as __pageData};
