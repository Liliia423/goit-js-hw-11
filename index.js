import{S as u,i as d}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m="45378122-3aa1f0accb7d59cfaae2c348a",f="https://pixabay.com/api/";function p(n){return fetch(`${f}?key=${m}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`).then(t=>{if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return t.json()})}function y(){const n=document.querySelector("main"),t=document.createElement("form");t.className="search-image-form";const r=document.createElement("input");r.type="text",r.name="field",r.className="search-field",r.placeholder="Search images...",t.appendChild(r);const s=document.createElement("button");s.textContent="Search",s.type="submit",s.className="submit-button",t.appendChild(s),n.prepend(t)}function h(n){const t=document.querySelector(".gallery"),r=n.map(e=>`
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
  `).join("");t.insertAdjacentHTML("beforeend",r),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}y();const g=document.querySelector(".search-image-form"),c=document.querySelector(".search-field"),b=document.querySelector(".gallery"),l=document.querySelector(".loader");g.addEventListener("submit",n=>{n.preventDefault();const t=c.value.trim();t&&(S(),p(t).then(r=>{if(r.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight",class:"error-toast",timeout:4e3}),i();return}b.innerHTML="",h(r.hits),i()}).catch(r=>{console.error("Error:",r),i()}).finally(()=>{c.value=""}))});function S(){l.style.display="block"}function i(){l.style.display="none"}
//# sourceMappingURL=index.js.map
