import{i as u}from"./assets/vendor-I1I71QQ2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l="45378122-3aa1f0accb7d59cfaae2c348a",f="https://pixabay.com/api/";function d(o){return fetch(`${f}?key=${l}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return r.json()})}const a=document.querySelector(".search-image-form"),c=document.querySelector(".search-field");a.addEventListener("keydown",o=>{o.key==="Enter"&&o.preventDefault()});a.addEventListener("submit",async o=>{o.preventDefault();const r=c.value.trim();if(r){try{const i=await d(r);i.hits.length===0?u.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",class:"error-toast",timeout:4e3,closeOnClick:!0}):console.log(i.hits)}catch{}c.value=""}});
//# sourceMappingURL=index.js.map
