(()=>{"use strict";function e(){const e=document.querySelector(".content"),t=document.createElement("nav");t.classList.add("navbar","navbar-expand-lg","bg-dark","navbar-dark"),e.appendChild(t);const n=document.createElement("div");n.classList.add("container"),t.appendChild(n);const d=document.createElement("a");d.classList.add("navbar-brand"),d.setAttribute("href","#"),n.appendChild(d);const a=document.createElement("img");a.setAttribute("src","/img/dumpling.png"),a.setAttribute("width","30"),a.setAttribute("height","30"),a.classList.add("d-inline-block","align-text-top"),d.appendChild(a);const i=document.createTextNode("Charlotte's Dumplings");d.appendChild(i);const s=document.createElement("span");s.classList.add("navbar-text"),s.textContent="123 Fake St., Los Angeles, CA 90012",n.appendChild(s);const c=document.createElement("span");c.classList.add("navbar-text"),c.textContent="(213) 321-5862",n.appendChild(c);const o=document.createElement("ul");o.classList.add("navbar-nav"),n.appendChild(o);const l=document.createElement("li");l.classList.add("nav-item"),o.appendChild(l);const r=document.createElement("a");r.classList.add("nav-link","active"),r.setAttribute("href","#"),l.appendChild(r),r.textContent="HOME";const p=document.createElement("li");p.classList.add("nav-item"),o.appendChild(p);const u=document.createElement("a");u.classList.add("nav-link","active"),u.setAttribute("href","#"),u.setAttribute("id","menu"),p.appendChild(u),u.textContent="MENU";const m=document.createElement("li");m.classList.add("nav-item"),o.appendChild(m);const h=document.createElement("a");h.classList.add("nav-link","active"),h.setAttribute("href","#"),h.setAttribute("id","contact"),m.appendChild(h),h.textContent="CONTACT US"}function t(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function n(e,t,n,a,i,s,c,o,l,r){const p=document.createElement("div");p.classList.add("container-fluid","bg-dark");const u=document.createElement("h1");u.classList.add("border-bottom","text-light"),u.textContent=e,p.appendChild(u);const m=document.createElement("div");m.classList.add("row","text-center"),p.appendChild(m);const h=document.createElement("div");h.classList.add("col-8"),m.appendChild(h),h.appendChild(d(t,n,a));const g=document.createElement("div");return g.classList.add("col-4"),m.appendChild(g),g.appendChild(d(i,s,c)),g.appendChild(d(o,l,r)),p}function d(e,t,n){const d=document.createElement("div");d.classList.add("card");const a=document.createElement("img");a.classList.add("card-img-top"),a.setAttribute("src",e),a.setAttribute("alt",t),d.appendChild(a);const i=document.createElement("h2");return i.classList.add("card-title"),i.textContent=n,d.appendChild(i),d}console.log("Test to see if if everything is working!"),e(),function(){const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("container-fluid","text-center","bg-dark","text-light"),t.setAttribute("id","title-container"),e.appendChild(t);const n=document.createElement("h1");n.classList.add("display-1"),n.setAttribute("id","title"),n.textContent="Charlotte's Dumplings",t.appendChild(n);const d=document.createElement("div");d.classList.add("container-fluid","bg-dark","text-light"),e.appendChild(d);const a=document.createElement("div");a.classList.add("row"),d.appendChild(a);const i=document.createElement("div");i.classList.add("col"),a.appendChild(i);const s=document.createElement("img");s.classList.add("img-fluid","rounded"),s.setAttribute("src","/img/pexels-shotpot-7705671.jpg"),s.setAttribute("alt","dumplings on plate"),i.appendChild(s);const c=document.createElement("div");c.classList.add("col","d-flex","align-items-center"),a.appendChild(c);const o=document.createElement("div");o.classList.add("container","border","border-white","rounded"),c.appendChild(o);const l=document.createElement("h2");l.textContent="Authentic Chinese Dumplings",o.appendChild(l);const r=document.createElement("h4");r.textContent="Charlotte's Dumplings offers a variety of dumplings, including its world famous Xiao Long Boa (Soup Dumplings) and Sheng Jian Boa (Pan-Fried Soup Dumplings) that will always leave you wishing you had more!",o.appendChild(r);const p=document.createElement("div");p.classList.add("row"),d.appendChild(p);const u=document.createElement("div");u.classList.add("col","d-flex","align-items-center"),p.appendChild(u);const m=document.createElement("div");m.classList.add("container","border","border-white","rounded"),u.appendChild(m);const h=document.createElement("h2");h.textContent="Superb Taste",m.appendChild(h);const g=document.createElement("h4");g.textContent="Wow, these sure are tasty. Yep, tastiest dumpling around. Better come get some right now! Hurry!!!",m.appendChild(g);const C=document.createElement("div");C.classList.add("col"),p.appendChild(C);const b=document.createElement("img");b.classList.add("img-fluid","rounded"),b.setAttribute("src","/img/pexels-rodnae-productions-6646233.jpg"),b.setAttribute("alt","dumplings being picked up"),C.appendChild(b)}(),document.querySelector("#menu").addEventListener("click",(function(){t(document.querySelector(".content")),e(),function(){const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("container-fluid","text-center","bg-dark","text-light"),t.setAttribute("id","title-container"),e.appendChild(t);const d=document.createElement("h1");d.classList.add("display-1"),t.setAttribute("id","title"),d.textContent="Menu",t.appendChild(d),e.appendChild(n("Appetizers","/img/pexels-bich-tran-840216.jpg","fried spring rolls","Fried Spring Rolls","/img/seaweed-salad.jpg","seaweed-salad","Seaweed Salad","/img/pexels-makafood-8982387.jpg","seafood miso soup","Seafood Miso Soup")),e.appendChild(n("Main Course","/img/soup-dumpling.jpg","soup dumplings","Xiao Long Bao (Soup Dumplings)","/img/pexels-anna-tarazevich-7287723.jpg","fried dumplings","Fried Dumplings","/img/spicy-wanton.jpg","spicy wantons","Spicy Wantons")),e.appendChild(n("Desserts","/img/red-bean-bun.jpg","red bean buns","Red Bean Bun","/img/taro-bun.jpg","taro buns","Taro Bun","/img/sesame-bun.jpg","sesame buns","Sesame Bun"))}(),console.log("menu test")})),document.querySelector("#contact").addEventListener("click",(function(){t(document.querySelector(".content")),e(),function(){const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("container-flex","bg-dark","text-light"),e.appendChild(t);const n=document.createElement("div");n.classList.add("p-5","row","text-center"),t.appendChild(n);const d=document.createElement("div");d.classList.add("col"),n.appendChild(d);const a=document.createElement("h1");a.classList.add("display-1"),a.setAttribute("id","title"),a.textContent="Contact Us",d.appendChild(a)}(),console.log("contact test")}))})();