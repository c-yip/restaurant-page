(()=>{"use strict";console.log("Test to see if if everything is working!"),function(){const t=document.querySelector(".content"),e=document.createElement("nav");e.classList.add("navbar","navbar-expand-lg","bg-dark","navbar-dark"),t.appendChild(e);const n=document.createElement("div");n.classList.add("container"),e.appendChild(n);const d=document.createElement("a");d.classList.add("navbar-brand"),d.setAttribute("href","#"),n.appendChild(d);const a=document.createElement("img");a.setAttribute("src","/img/dumpling.png"),a.setAttribute("width","30"),a.setAttribute("height","30"),a.classList.add("d-inline-block","align-text-top"),d.appendChild(a);const i=document.createTextNode("Charlotte's Dumplings");d.appendChild(i);const s=document.createElement("span");s.classList.add("navbar-text"),s.textContent="123 Fake St., Los Angeles, CA 90012",n.appendChild(s);const c=document.createElement("span");c.classList.add("navbar-text"),c.textContent="(213) 321-5862",n.appendChild(c);const l=document.createElement("ul");l.classList.add("navbar-nav"),n.appendChild(l);const o=document.createElement("li");o.classList.add("nav-item"),l.appendChild(o);const r=document.createElement("a");r.classList.add("nav-link","active"),r.setAttribute("href","#"),o.appendChild(r),r.textContent="HOME";const m=document.createElement("li");m.classList.add("nav-item"),l.appendChild(m);const p=document.createElement("a");p.classList.add("nav-link","active"),p.setAttribute("href","#"),p.setAttribute("id","menu"),m.appendChild(p),p.textContent="MENU";const u=document.createElement("li");u.classList.add("nav-item"),l.appendChild(u);const h=document.createElement("a");h.classList.add("nav-link","active"),h.setAttribute("href","#"),u.appendChild(h),h.textContent="HOURS & LOCATION";const C=document.createElement("li");C.classList.add("nav-item"),l.appendChild(C);const g=document.createElement("a");g.classList.add("nav-link","active"),g.setAttribute("href","#"),C.appendChild(g),g.textContent="CONTACT US"}(),function(){const t=document.querySelector(".content"),e=document.createElement("div");e.classList.add("container-fluid","text-center","bg-dark","text-light"),e.setAttribute("id","title-container"),t.appendChild(e);const n=document.createElement("h1");n.classList.add("display-1"),n.setAttribute("id","title"),n.textContent="Charlotte's Dumplings",e.appendChild(n);const d=document.createElement("div");d.classList.add("container-fluid","bg-dark","text-light"),t.appendChild(d);const a=document.createElement("div");a.classList.add("row"),d.appendChild(a);const i=document.createElement("div");i.classList.add("col"),a.appendChild(i);const s=document.createElement("img");s.classList.add("img-fluid","rounded"),s.setAttribute("src","/img/pexels-shotpot-7705671.jpg"),s.setAttribute("alt","dumplings on plate"),i.appendChild(s);const c=document.createElement("div");c.classList.add("col","d-flex","align-items-center"),a.appendChild(c);const l=document.createElement("div");l.classList.add("container","border","border-white","rounded"),c.appendChild(l);const o=document.createElement("h2");o.textContent="Authentic Chinese Dumplings",l.appendChild(o);const r=document.createElement("h4");r.textContent="Charlotte's Dumplings offers a variety of dumplings, including its world famous Xiao Long Boa (Soup Dumplings) and Sheng Jian Boa (Pan-Fried Soup Dumplings) that will always leave you wishing you had more!",l.appendChild(r);const m=document.createElement("div");m.classList.add("row"),d.appendChild(m);const p=document.createElement("div");p.classList.add("col","d-flex","align-items-center"),m.appendChild(p);const u=document.createElement("div");u.classList.add("container","border","border-white","rounded"),p.appendChild(u);const h=document.createElement("h2");h.textContent="Superb Taste",u.appendChild(h);const C=document.createElement("h4");C.textContent="Wow, these sure are tasty. Yep, tastiest dumpling around. Better come get some right now! Hurry!!!",u.appendChild(C);const g=document.createElement("div");g.classList.add("col"),m.appendChild(g);const E=document.createElement("img");E.classList.add("img-fluid","rounded"),E.setAttribute("src","/img/pexels-rodnae-productions-6646233.jpg"),E.setAttribute("alt","dumplings being picked up"),g.appendChild(E)}(),document.querySelector("#menu").addEventListener("click",(function(){!function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(document.querySelector(".content")),function(){const t=document.querySelector(".content"),e=document.createElement("div");e.classList.add("container-fluid","text-center","bg-dark","text-light"),e.setAttribute("id","title-container"),t.appendChild(e);const n=document.createElement("h1");n.classList.add("display-1"),e.setAttribute("id","title"),n.textContent="Menu",e.appendChild(n),t.appendChild(function(t){const e=document.createElement("div");e.classList.add("container-fluid","bg-dark");const n=document.createElement("h1");n.classList.add("border-bottom","text-light"),n.textContent="Appetizers",e.appendChild(n);const d=document.createElement("div");d.classList.add("row","text-center"),e.appendChild(d);const a=document.createElement("div");return a.classList.add("col-8"),d.appendChild(a),a.appendChild(function(t,e,n){const d=document.createElement("div");d.classList.add("card");const a=document.createElement("img");a.classList.add("card-img-top"),a.setAttribute("src","/img/pexels-bich-tran-840216.jpg"),a.setAttribute("alt","fried spring rolls"),d.appendChild(a);const i=document.createElement("h2");return a.classList.add("card-title"),a.textContent="Fried Spring Rolls",d.appendChild(i),d}()),e}())}(),console.log("menu test")}))})();