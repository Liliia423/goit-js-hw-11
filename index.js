import{i as n}from"./assets/vendor-I1I71QQ2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.querySelector(".submit-button"),u=document.querySelector(".search-field");a.addEventListener("click",()=>{if(!u.value.trim()){n.error({message:"Sorry, there are no images matching your search query. Please, try again!"});return}fetch("https://pixabay.com/api/?key=45378122-3aa1f0accb7d59cfaae2c348a",{method:"GET",q:"query",image_type:"photo",orientation:"horizontal",safesearch:"true"}).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{console.log(r.hits)}).catch(r=>{n.error({message:`Something went wrong: ${r.message}`})})});
//# sourceMappingURL=index.js.map
