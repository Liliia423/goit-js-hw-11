import{S as l,i as u}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d="45378122-3aa1f0accb7d59cfaae2c348a",m="https://pixabay.com/api/";function f(n){return fetch(`${m}?key=${d}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`).then(t=>{if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return t.json()})}function p(){const n=document.querySelector("main"),t=document.createElement("form");t.className="search-image-form";const r=document.createElement("input");r.type="text",r.name="field",r.className="search-field",r.placeholder="Search images...",t.appendChild(r);const a=document.createElement("button");a.textContent="Search",a.type="submit",a.className="submit-button",t.appendChild(a),n.prepend(t)}function y(n){const t=document.querySelector(".gallery"),r=n.map(e=>`
    <li>
    
      <a href="${e.largeImageURL}" title="${e.tags}">
        <img src="${e.webformatURL}" alt="${e.tags}" />  
      </a>
       <div class="gallery-info">
        <p class="gallery-info-item"><b>Likes:</b> ${e.likes}</p>
        <p class="gallery-info-item"><b>Views:</b> ${e.views}</p>
        <p class="gallery-info-item"><b>Comments:</b> ${e.comments}</p>
        <p class="gallery-info-item"><b>Downloads:</b> ${e.downloads}</p>
      </div>
    </li>
  `).join("");t.insertAdjacentHTML("beforeend",r),new l(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}p();const h=document.querySelector(".search-image-form"),i=document.querySelector(".search-field"),g=document.querySelector(".gallery"),c=document.querySelector(".loader");h.addEventListener("submit",async n=>{n.preventDefault();const t=i.value.trim();if(t){b();try{const r=await f(t);if(r.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight",class:"error-toast",timeout:4e3});return}g.innerHTML="",y(r.hits),S()}catch{}finally{}i.value=""}});function b(){c.style.display="block"}function S(){c.style.display="none"}
//# sourceMappingURL=index.js.map
