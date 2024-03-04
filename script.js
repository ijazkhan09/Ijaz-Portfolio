let typingAnimation = document.querySelector(".animation")

let myArry = ["Front-end developer", "PSD File Convert To HTML", "Form Connect To Data Base", "Web Hosting", "web developer", "Responsive Web Develop", "User Frindly WebSites", "SEO Friendly", "Speed Optimization"]

let ArryIndex = 0;
let Arrychar = 0;
let isDeleting = false;
function TypingSwaping () {
    let currentWord = myArry[ArryIndex]
    let CurrentChar = currentWord.substring(0, Arrychar);
    typingAnimation.textContent = CurrentChar;

    if(!isDeleting && Arrychar < currentWord.length) {
        Arrychar++;
        setTimeout(TypingSwaping, 50)
    } 
    else if(isDeleting && Arrychar > 0){
        Arrychar--;
        setTimeout(TypingSwaping, 50)
    }else{
        isDeleting = !isDeleting
        ArryIndex = !isDeleting ? (ArryIndex + 1) % myArry.length : ArryIndex;
        setTimeout(TypingSwaping, 1000)
    }

}TypingSwaping () 

let header = document.querySelector(".header")

window.onscroll = () =>{
    navbar.classList.remove("active")
    menuIcone.classList.remove("active")
    if(window.scrollY > 0){
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
}

let menuIcone = document.querySelector(".menu-bar");
let navbar = document.querySelector(".navbar")
menuIcone.addEventListener("click", function(){
    menuIcone.classList.toggle("active")
    navbar.classList.toggle("active")
})
// -----------dark mode wrapper ---------------------
let darkMode = document.querySelector(".dark-mode")
let darkBtn = document.querySelector(".circle")
let body = document.querySelector("body")
let logo = document.querySelector("#logo")
let heroPic = document.querySelector(".hero_image")
let project = document.querySelector("#project")
let toggle = true
darkMode.addEventListener("click", function(){
    darkBtn.classList.toggle("active")
    darkMode.style.border = "1px solid rgba(255,255,255,.9)"
    body.classList.toggle("darkmode")
    project.classList.toggle("color")
    if(toggle = !toggle){
    logo.src = "images/logo1.png"
    darkMode.style.border = "none"
        
    }else{
        logo.src = "images/logo.png"
    }
   
})



// -------------------line skill animation sec ----------------------------
let boxes = document.querySelectorAll(".animation-main")
let aboutPage = document.querySelector("#about")

let CounterObserverLine = new IntersectionObserver((entries, observer)=>{
    let [entry] = entries
    console.log(entry)

    if(!entry.isIntersecting) return;

    console.log(entry)
    function AnimationStart() {
        boxes.forEach(box => {
            let line = box.querySelector(".line")
            let percantage = box.querySelector(".percantage");
            let endValue = box.querySelector(".end-value")
           let count = 0
    
            let myInterval = setInterval(() => {
                count++
                line.style.width = count + "%"
                percantage.innerHTML = count + "%"
                
                if(percantage.innerHTML == endValue.innerHTML){
                    clearInterval(myInterval)
                }
            }, 50);
            
           
        });
    
       
    }AnimationStart()
    
}, 
{
    root : null,
    threshold: 0.4,
});
CounterObserverLine.observe(aboutPage)

//   ----------------button filter load btn-----------------

  let loadMore = document.querySelector(".load-more-btn")
  let addMoreCol = document.querySelectorAll(".col-project")
  let currentItem = 3;

  loadMore.addEventListener("click", function(e){
    for(let i = currentItem; i < currentItem + 3; i++){
        if(addMoreCol[i]){
            let more = addMoreCol[i];
            more.style.display = "block"
        }
    }
    currentItem += 3;
    if(currentItem >= addMoreCol.length){
        e.target.style.display = "none"
    }
  })

//   ----------------button filter -----------------
  let buttons = document.querySelectorAll(".fiter-button")
  let colum = document.querySelectorAll(".col-project")

  buttons.forEach(btn =>{
    btn.addEventListener("click", function(){
        loadMore.style.display = "none"
        buttons.forEach(btn =>{btn.classList.remove("active")})
        btn.classList.add("active")
        colum.forEach(card =>{
            if(card.classList.contains(btn.id)){
                card.style.display = "block"
            }else{
                card.style.display = "none"
            }
        })
    })
  })

//   --------------------page img popup-----------------

        let Popup = document.querySelector(".popup")
          let imgFromPort = document.querySelectorAll(".img-port")
            let PopupImg = document.querySelector(".popupimg")
            for(let i = 0; i < imgFromPort.length; i++){
                let imgbox = imgFromPort[i]
                imgbox.addEventListener("click", function(){
                    Popup.classList.add("active")
                    PopupImg.src = imgbox.src;

                })
            }


  let popUPClose = document.querySelector(".closepopup")

  popUPClose.addEventListener("click", function(){
    Popup.classList.remove("active")
  })

//   ---------------counter animation ---------------
let animatNumber = document.querySelectorAll(".typeAnimated")
let CounterSection = document.querySelector("#client-project")
let interval = 260;

let CounterObserver = new IntersectionObserver((entries, observer)=>{
    let [entry] = entries
    if(!entry.isIntersecting) return;

    console.log(entry)

    function startedAnimated(){
        animatNumber.forEach(boxAnimate =>{
            let startval = 0;
            let endVal = boxAnimate.getAttribute("data-val")
            let duration = Math.floor(interval / endVal)
            
            let AnimatedInterval = setInterval(()=>{
                startval += 1;
                boxAnimate.innerHTML = startval + "+";
        
                if(startval == endVal){
                    clearInterval(AnimatedInterval)
                }
            }, duration)
        
        })
        }startedAnimated()
    
}, 
{
    root : null,
    threshold: 0.4,
});
CounterObserver.observe(CounterSection)
// -------------page animation----------
window.addEventListener("scroll", scrollTop)
let herosec = document.querySelector("#hero")
let scrollbtn = document.querySelector(".scroll-top")
function scrollTop() {
    if(window.pageYOffset > 100){
        scrollbtn.classList.add("active")
    }else{
        scrollbtn.classList.remove("active")
    }
}

scrollbtn.addEventListener("click", function(){
    scrolltopup()
})
function scrolltopup () {
    herosec.scrollIntoView({behavior:"smooth"})
}

window.addEventListener("scroll", revalAnimat,)

function revalAnimat() {
    let revalAnimatedScroll = document.querySelectorAll(".reval-animated")
    for(i = 0; i < revalAnimatedScroll.length; i++){
        let windowheight = window.innerHeight;
        let revalTop = revalAnimatedScroll[i].getBoundingClientRect().top;
        let reval = 50;

        if(revalTop < windowheight - reval){
            revalAnimatedScroll[i].classList.add("active")
        }else{
            revalAnimatedScroll[i].classList.remove("active")

        }
    }
}


