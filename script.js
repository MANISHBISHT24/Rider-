const navbar=document.getElementById("navbar"), menuBtn=document.getElementById("menuBtn"), navLinks=document.getElementById("navLinks"), toast=document.getElementById("toast");
window.addEventListener("scroll",()=>{navbar.classList.toggle("scrolled",window.scrollY>30);});
menuBtn.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));
function showToast(msg){toast.textContent=msg;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2600);}
document.querySelectorAll("[data-bike]").forEach(btn=>btn.addEventListener("click",()=>{showToast(`${btn.dataset.bike} selected — booking UI ready to connect.`);document.getElementById("contact").scrollIntoView({behavior:"smooth"});}));
document.querySelectorAll("[data-package]").forEach(btn=>btn.addEventListener("click",()=>{showToast(`${btn.dataset.package} selected.`);document.getElementById("contact").scrollIntoView({behavior:"smooth"});}));
document.getElementById("bookingForm").addEventListener("submit",e=>{e.preventDefault();showToast("Enquiry captured in the frontend demo.");});
const sections=[...document.querySelectorAll("main section[id]")], links=[...document.querySelectorAll(".nav-links a")];
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+entry.target.id));}}),{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>observer.observe(s));