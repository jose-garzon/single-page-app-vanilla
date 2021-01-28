(()=>{"use strict";const a="https://rickandmortyapi.com/api/character/",n=async n=>{const e=n?`${a}${n}`:a;try{const a=await fetch(e),s=await a.json();return n?s:s.results}catch(a){console.log("[Fetch Error]:",a.message)}},e=()=>location.hash.slice(2).toLocaleLowerCase()||"/",s=()=>"\n    <div class='Error404'>\n      <h2>Error 404</h2>\n    </div>\n  ",t={"/":async()=>`\n  <div class='Characters'>\n    ${(await n()).map((a=>`<article class="Characters-item">\n        <a href="#/${a.id}">\n          <img src=${a.image} alt="name" />\n          <h2>${a.name}</h2>\n        </a>\n      </article>`)).join("")}\n  </div>\n  `,"/:id":async()=>{const a=e(),s=await n(a);return`\n  <div class='Characters-inner'>\n    <article class='Characters-card'>\n      <img src=${s.image} alt=${s.name}/>\n      <h2>${s.name}</h2>\n    </article>\n    <article class='Characters-card'>\n      <h3>Episodes: <span> ${s.episode.length}</span></h3>\n      <h3>Status: <span> ${s.status}</span></h3>\n      <h3>Species: <span> ${s.species}</span></h3>\n      <h3>Gender: <span> ${s.gender}</span></h3>\n      <h3>Origin: <span> ${s.origin.name}</span></h3>\n      <h3>Last Location: <span> ${s.location.name}</span></h3>\n    </article>\n  </div>\n  `},"/contact":()=>"Contact"},i=async()=>{const a=document.getElementById("header"),n=document.getElementById("content");a.innerHTML=await"\n    <div class='Header-main'>\n      <div class='Header-logo'>\n        <h1>\n          <a href=\"/\">100tifi.co</a>\n        </h1>\n      </div>\n      <div class='Header-nav'>\n        <a href=\"#/about\">about</a>\n      </div>\n    </div>\n  ";let i=e(),c=await(a=>a.length<=3?"/"===a?a:"/:id":`/${a}`)(i),r=t[c]?t[c]:s;n.innerHTML=await r()};window.addEventListener("load",i),window.addEventListener("hashchange",i)})();
//# sourceMappingURL=bundle.js.map