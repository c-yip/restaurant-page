(()=>{"use strict";function e(){const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("container-flex","bg-dark","text-light","d-flex","justify-content-center","align-items-center","gap-3","p-5"),e.appendChild(t);const n=document.createElement("p");n.classList.add("m-0"),n.textContent="Created by Christian Yip",t.appendChild(n);const d=document.createElement("a");d.setAttribute("href","https://github.com/c-yip"),t.appendChild(d);const a=document.createElement("img");a.setAttribute("src","/img/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png"),a.setAttribute("alt","GitHub Icon"),d.appendChild(a)}const t=function(){n(document.querySelector(".content")),r(),function(){const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("container-fluid","text-center","bg-dark","text-light"),t.setAttribute("id","title-container"),e.appendChild(t);const n=document.createElement("h1");n.classList.add("display-1"),n.setAttribute("id","title"),n.textContent="Menu",t.appendChild(n),e.appendChild(d("Appetizers","/img/pexels-bich-tran-840216.jpg","fried spring rolls","Fried Spring Rolls","/img/seaweed-salad.jpg","seaweed-salad","Seaweed Salad","/img/pexels-makafood-8982387.jpg","seafood miso soup","Seafood Miso Soup")),e.appendChild(d("Main Course","/img/soup-dumpling.jpg","soup dumplings","Xiao Long Bao (Soup Dumplings)","/img/pexels-anna-tarazevich-7287723.jpg","fried dumplings","Fried Dumplings","/img/spicy-wanton.jpg","spicy wantons","Spicy Wantons")),e.appendChild(d("Desserts","/img/red-bean-bun.jpg","red bean buns","Red Bean Bun","/img/taro-bun.jpg","taro buns","Taro Bun","/img/sesame-bun.jpg","sesame buns","Sesame Bun"))}(),e(),console.log("menu test")};function n(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function d(e,t,n,d,i,s,c,o,l,r){const p=document.createElement("div");p.classList.add("container-fluid","bg-dark");const u=document.createElement("h1");u.classList.add("border-bottom","text-light"),u.textContent=e,p.appendChild(u);const m=document.createElement("div");m.classList.add("row","text-center"),p.appendChild(m);const h=document.createElement("div");h.classList.add("col-8"),m.appendChild(h),h.appendChild(a(t,n,d));const C=document.createElement("div");return C.classList.add("col-4"),m.appendChild(C),C.appendChild(a(i,s,c)),C.appendChild(a(o,l,r)),p}function a(e,t,n){const d=document.createElement("div");d.classList.add("card");const a=document.createElement("img");a.classList.add("card-img-top"),a.setAttribute("src",e),a.setAttribute("alt",t),d.appendChild(a);const i=document.createElement("h2");return i.classList.add("card-title"),i.textContent=n,d.appendChild(i),d}const i=function(){n(document.querySelector(".content")),r(),s(),e(),console.log("contact test")},s=function(){const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("container-flex","bg-dark","text-light"),e.appendChild(t);const n=document.createElement("div");n.classList.add("p-5","row","text-center"),t.appendChild(n);const d=document.createElement("div");d.classList.add("col"),n.appendChild(d);const a=document.createElement("h1");a.classList.add("display-1"),a.setAttribute("id","title"),a.textContent="Contact Us",d.appendChild(a);const i=document.createElement("div");i.classList.add("container","bg-secondary","p-5","rounded"),t.appendChild(i);const s=document.createElement("div");s.classList.add("row"),i.appendChild(s);const r=document.createElement("div");r.classList.add("col","d-flex","justify-content-center","align-items-center"),s.appendChild(r);const p=document.createElement("ul");p.classList.add("list-group","list-group-flush","gap-3"),r.appendChild(p),p.appendChild(c("123 Fake St., Los Angeles, CA 90012")),p.appendChild(c("Monday - Friday: 10:00am - 8:00pm")),p.appendChild(c("Saturday - Sunday: 11:00am - 9:00pm")),p.appendChild(c("(213) 321-5862"));const u=document.createElement("div");u.classList.add("col"),s.appendChild(u);const m=document.createElement("form");m.classList.add("d-flex","justify-content-center","flex-column","gap-1"),u.appendChild(m),m.appendChild(o("inputName","Name")),m.appendChild(l("text")),m.appendChild(o("inputEmail","Email")),m.appendChild(l("email")),m.appendChild(o("inputMessage","Message"));const h=document.createElement("textarea");h.classList.add("form-control"),h.setAttribute("type","text"),m.appendChild(h);const C=document.createElement("button");C.classList.add("btn","btn-primary"),C.setAttribute("type","submit"),C.textContent="Submit",m.appendChild(C)};function c(e){const t=document.createElement("li");return t.classList.add("list-group-item","rounded","h5"),t.textContent=e,t}function o(e,t){const n=document.createElement("label");return n.classList.add("form-label","h5"),n.setAttribute("for",e),n.textContent=t,n}function l(e){const t=document.createElement("input");return t.classList.add("form-control"),t.setAttribute("type",e),t}function r(){const e=document.querySelector(".content"),n=document.createElement("nav");n.classList.add("navbar","navbar-expand-lg","bg-dark","navbar-dark"),e.appendChild(n);const d=document.createElement("div");d.classList.add("container"),n.appendChild(d);const a=document.createElement("a");a.classList.add("navbar-brand"),a.setAttribute("href","#"),d.appendChild(a);const s=document.createElement("img");s.setAttribute("src","/img/dumpling.png"),s.setAttribute("width","30"),s.setAttribute("height","30"),s.classList.add("d-inline-block","align-text-top"),a.appendChild(s);const c=document.createTextNode("Charlotte's Dumplings");a.appendChild(c);const o=document.createElement("span");o.classList.add("navbar-text"),o.textContent="123 Fake St., Los Angeles, CA 90012",d.appendChild(o);const l=document.createElement("span");l.classList.add("navbar-text"),l.textContent="(213) 321-5862",d.appendChild(l);const r=document.createElement("ul");r.classList.add("navbar-nav"),d.appendChild(r);const p=document.createElement("li");p.classList.add("nav-item"),r.appendChild(p);const m=document.createElement("a");m.classList.add("nav-link","active"),m.setAttribute("href","#"),m.setAttribute("id","home"),p.appendChild(m),m.textContent="HOME";const h=document.createElement("li");h.classList.add("nav-item"),r.appendChild(h);const C=document.createElement("a");C.classList.add("nav-link","active"),C.setAttribute("href","#"),C.setAttribute("id","menu"),h.appendChild(C),C.textContent="MENU";const g=document.createElement("li");g.classList.add("nav-item"),r.appendChild(g);const b=document.createElement("a");b.classList.add("nav-link","active"),b.setAttribute("href","#"),b.setAttribute("id","contact"),g.appendChild(b),b.textContent="CONTACT US",document.querySelector("#menu").addEventListener("click",t),document.querySelector("#contact").addEventListener("click",i),document.querySelector("#home").addEventListener("click",u)}function p(){const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("container-fluid","text-center","bg-dark","text-light"),t.setAttribute("id","title-container"),e.appendChild(t);const n=document.createElement("h1");n.classList.add("display-1"),n.setAttribute("id","title"),n.textContent="Charlotte's Dumplings",t.appendChild(n);const d=document.createElement("div");d.classList.add("container-fluid","bg-dark","text-light"),e.appendChild(d);const a=document.createElement("div");a.classList.add("row"),d.appendChild(a);const i=document.createElement("div");i.classList.add("col"),a.appendChild(i);const s=document.createElement("img");s.classList.add("img-fluid","rounded"),s.setAttribute("src","/img/pexels-shotpot-7705671.jpg"),s.setAttribute("alt","dumplings on plate"),i.appendChild(s);const c=document.createElement("div");c.classList.add("col","d-flex","align-items-center"),a.appendChild(c);const o=document.createElement("div");o.classList.add("container","border","border-white","rounded"),c.appendChild(o);const l=document.createElement("h2");l.textContent="Authentic Chinese Dumplings",o.appendChild(l);const r=document.createElement("h4");r.textContent="Charlotte's Dumplings offers a variety of dumplings, including its world famous Xiao Long Boa (Soup Dumplings) and Sheng Jian Boa (Pan-Fried Soup Dumplings) that will always leave you wishing you had more!",o.appendChild(r);const p=document.createElement("div");p.classList.add("row"),d.appendChild(p);const u=document.createElement("div");u.classList.add("col","d-flex","align-items-center"),p.appendChild(u);const m=document.createElement("div");m.classList.add("container","border","border-white","rounded"),u.appendChild(m);const h=document.createElement("h2");h.textContent="Superb Taste",m.appendChild(h);const C=document.createElement("h4");C.textContent="Wow, these sure are tasty. Yep, tastiest dumpling around. Better come get some right now! Hurry!!!",m.appendChild(C);const g=document.createElement("div");g.classList.add("col"),p.appendChild(g);const b=document.createElement("img");b.classList.add("img-fluid","rounded"),b.setAttribute("src","/img/pexels-rodnae-productions-6646233.jpg"),b.setAttribute("alt","dumplings being picked up"),g.appendChild(b)}function u(){n(document.querySelector(".content")),r(),p(),e()}console.log("Test to see if if everything is working!"),r(),p(),e()})();