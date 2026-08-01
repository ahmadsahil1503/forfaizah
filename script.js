/* ==========================================
   FRIENDSHIP DAY
   VERSION 3.0
========================================== */

"use strict";

/* ==========================================
   ELEMENTS
========================================== */

const loader = document.getElementById("loader");
const beginBtn = document.getElementById("begin");
const bgMusic = document.getElementById("bgMusic");
const revealItems = document.querySelectorAll(".reveal");

let musicStarted = false;

/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    requestAnimationFrame(() => {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";

            setTimeout(() => {

                loader.remove();

            },700);

        },1200);

    });

});

/* ==========================================
   START JOURNEY
========================================== */

beginBtn.addEventListener("click", startJourney, { once:true });

function startJourney(){

    startMusic();

    window.scrollTo({

        top:window.innerHeight,

        behavior:"smooth"

    });

}

/* ==========================================
   MUSIC
========================================== */

async function startMusic(){

    if(musicStarted) return;

    try{

        bgMusic.volume=0.55;

        await bgMusic.play();

        musicStarted=true;

    }

    catch(e){

        console.log("Music blocked until user interaction.");

    }

}

function changeSong(song){

    const current=bgMusic.currentTime;

    bgMusic.src=song;

    bgMusic.currentTime=0;

    bgMusic.play().catch(()=>{});

}

/* ==========================================
   PAGE VISIBILITY
========================================== */

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        bgMusic.pause();

    }

    else{

        if(musicStarted){

            bgMusic.play().catch(()=>{});

        }

    }

});

/* ==========================================
   REVEAL ANIMATION
========================================== */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

observer.unobserve(entry.target);

}

});

},{

threshold:.15

});

revealItems.forEach(item=>observer.observe(item));

/* ==========================================
   PARALLAX
========================================== */

const stars=document.getElementById("stars");

let ticking=false;

window.addEventListener("scroll",()=>{

if(!ticking){

requestAnimationFrame(()=>{

stars.style.transform=`translateY(${window.scrollY*0.15}px)`;

ticking=false;

});

ticking=true;/* ==========================================
   VERSION 3
   PART 1B-1
========================================== */

/* ========= FLOATING HEART ========= */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.textContent = "🤍";

    heart.style.left = (10 + Math.random() * 80) + "vw";

    heart.style.fontSize = (18 + Math.random() * 10) + "px";

    heart.style.animationDuration = (6 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    heart.addEventListener("animationend", () => {

        heart.remove();

    });

}

/* Only one heart every 3 seconds */

setInterval(createHeart,3000);


/* ========= SHOOTING STAR ========= */

function createStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.top=Math.random()*35+"vh";

    star.style.left="-80px";

    document.body.appendChild(star);

    requestAnimationFrame(()=>{

        star.style.transition="transform 1.8s linear, opacity 1.8s linear";

        star.style.transform="translateX(120vw) translateY(220px)";

        star.style.opacity="0";

    });

    setTimeout(()=>{

        star.remove();

    },1800);

}

/* One shooting star every 18 seconds */

setInterval(createStar,18000);


/* ========= BUTTON HOVER ========= */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

gsap.to(btn,{

scale:1.04,

duration:.2

});

});

btn.addEventListener("mouseleave",()=>{

gsap.to(btn,{

scale:1,

duration:.2

});

});

});


/* ========= HERO ENTRANCE ========= */

window.addEventListener("load",()=>{

gsap.from(".hero-content",{

opacity:0,

y:50,

duration:1.2,

ease:"power2.out"

});

});

}

});/* ==========================================
   VERSION 3
   PART 1B-2
========================================== */

/* ========= LIGHTWEIGHT FIREFLIES ========= */

function createFirefly(){

    const firefly=document.createElement("div");

    firefly.className="firefly";

    firefly.style.left=Math.random()*100+"vw";
    firefly.style.top=Math.random()*100+"vh";

    firefly.style.animationDuration=
        (5+Math.random()*4)+"s";

    document.body.appendChild(firefly);

    setTimeout(()=>{

        firefly.remove();

    },9000);

}

/* Only 6 fireflies */

for(let i=0;i<6;i++){

    setTimeout(createFirefly,i*1200);

}

setInterval(createFirefly,6000);


/* ========= GALLERY ANIMATION ========= */

document.querySelectorAll(".gallery-grid img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        gsap.to(img,{
            scale:1.05,
            duration:.25,
            ease:"power2.out"
        });

    });

    img.addEventListener("mouseleave",()=>{

        gsap.to(img,{
            scale:1,
            duration:.25,
            ease:"power2.out"
        });

    });

});

/* ========= LETTER ANIMATION ========= */

gsap.utils.toArray(".letter").forEach(letter=>{

    gsap.from(letter,{

        opacity:0,

        y:40,

        duration:.8,

        ease:"power2.out",

        scrollTrigger:{
            trigger:letter,
            start:"top 85%",
            toggleActions:"play none none none"
        }

    });

});


/* ========= HERO TITLE ========= */

gsap.from(".hero h1",{

    opacity:0,

    y:25,

    duration:1,

    delay:.4,

    ease:"power2.out"

});

gsap.from(".subtitle",{

    opacity:0,

    y:20,

    duration:1,

    delay:.8,

    ease:"power2.out"

});


/* ========= OPTIMIZED SCROLL ========= */

let lastScroll=0;

window.addEventListener("scroll",()=>{

    const current=window.scrollY;

    if(Math.abs(current-lastScroll)<5) return;

    lastScroll=current;

},{passive:true});/* ==========================================
   VERSION 3
   PART 2
========================================== */

/* ========= GIFT BOX ========= */

const giftBox = document.getElementById("giftBox");

if (giftBox) {

    giftBox.addEventListener("click", () => {

        gsap.to(giftBox, {
            scale: 1.25,
            rotation: 20,
            duration: 0.3,
            yoyo: true,
            repeat: 1
        });

        setTimeout(() => {

            alert("🤍 Thank you for being one of the most beautiful parts of my life. Happy Friendship Day, Faizah!");

        }, 500);

    });

}


/* ========= MUSIC SWITCH ========= */

function changeSong(song){

    bgMusic.pause();

    bgMusic.src = song;

    bgMusic.load();

    bgMusic.play().catch(()=>{});

}


/* ========= VIDEO CONTROL ========= */

document.querySelectorAll("video").forEach(video=>{

    video.addEventListener("play",()=>{

        bgMusic.pause();

    });

    video.addEventListener("pause",()=>{

        if(musicStarted){

            bgMusic.play().catch(()=>{});

        }

    });

    video.addEventListener("ended",()=>{

        if(musicStarted){

            bgMusic.play().catch(()=>{});

        }

    });

});


/* ========= GALLERY CLICK ========= */

document.querySelectorAll(".gallery-grid img").forEach(img=>{

    img.addEventListener("click",()=>{

        gsap.fromTo(img,

        {

            scale:0.92

        },

        {

            scale:1,

            duration:.35,

            ease:"power2.out"

        });

    });

});


/* ========= BUTTON RIPPLE ========= */

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",()=>{

gsap.fromTo(button,

{

scale:.92

},

{

scale:1,

duration:.25,

ease:"back.out(2)"

});

});

});


/* ========= FINAL MESSAGE ========= */

console.log("✨ Friendship Day Website Version 3 Loaded Successfully.");/* ==========================================
   VERSION 3
   PART 3
========================================== */

/* ========= START MUSIC ON FIRST SCROLL ========= */

let firstScroll = false;

window.addEventListener("scroll", () => {

    if (firstScroll) return;

    firstScroll = true;

    startMusic();

}, { passive: true });


/* ========= SMOOTH SECTION FADE ========= */

document.querySelectorAll("section").forEach(section => {

    section.style.willChange = "transform, opacity";

});


/* ========= IMAGE LOADING ========= */

document.querySelectorAll("img").forEach(img => {

    img.loading = "lazy";
    img.decoding = "async";

});


/* ========= VIDEO OPTIMIZATION ========= */

document.querySelectorAll("video").forEach(video => {

    video.preload = "metadata";
    video.playsInline = true;

});


/* ========= GIFT GLOW ========= */

const gift = document.querySelector(".gift-box");

if(gift){

setInterval(()=>{

gift.animate([

{

boxShadow:"0 0 10px rgba(255,255,255,.2)"

},

{

boxShadow:"0 0 35px rgba(173,216,255,.7)"

},

{

boxShadow:"0 0 10px rgba(255,255,255,.2)"

}

],{

duration:2200,

iterations:1

});

},4000);

}


/* ========= SMALL PARALLAX ========= */

const aurora = document.getElementById("aurora");

window.addEventListener("scroll",()=>{

requestAnimationFrame(()=>{

if(aurora){

aurora.style.transform=`translateY(${window.scrollY*0.05}px)`;

}

});

},{passive:true});


/* ========= END MESSAGE ========= */

console.log("%cWebsite Loaded Successfully 🤍",

"color:#9fdcff;font-size:16px;font-weight:bold;");
