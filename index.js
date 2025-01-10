import{S as d,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m="45378122-3aa1f0accb7d59cfaae2c348a",f="https://pixabay.com/api/";function p(n){return fetch(`${f}?key=${m}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`).then(t=>{if(console.log("Response status:",t.status),!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return t.json()})}function h(){const n=document.querySelector("main"),t=document.createElement("form");t.className="search-image-form";const r=document.createElement("input");r.type="text",r.name="field",r.className="search-field",r.placeholder="Search images...",t.appendChild(r);const s=document.createElement("button");s.textContent="Search",s.type="submit",s.className="submit-button",t.appendChild(s),n.prepend(t)}function y(n){const t=document.querySelector(".gallery"),r=n.map(e=>`
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
  `).join("");t.insertAdjacentHTML("beforeend",r),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}h();const g=document.querySelector(".search-image-form"),l=document.querySelector(".search-field"),b=document.querySelector(".gallery"),u=document.querySelector(".loader");g.addEventListener("submit",n=>{n.preventDefault();const t=l.value.trim();t&&(S(),p(t).then(r=>{if(r.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight",class:"error-toast",timeout:4e3}),i();return}b.innerHTML="",y(r.hits),i()}).catch(r=>{console.log(r),c.error({message:"Error. Try entering the correct word!",position:"topRight",class:"error-toast",timeout:4e3}),i()}).finally(()=>{l.value=""}))});function S(){u.style.display="block"}function i(){u.style.display="none"}
//# sourceMappingURL=index.js.map
