console.log("Working");

const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

let clicked = false;

/*=============== SHOW MENU ===============*/
// Validates if constant exists
if(navToggle)
{
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu");
        setTimeout(() => {
            clicked = true;
        }, 100);
    });
}

/*============== MENU HIDDEN ===============*/
// Validates if constant exists
if(navClose)
{
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu");
        clicked = false;
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-link")

function linkAction()
{
    const navMenu = document.getElementById("nav-menu")
    // When we click on each nav link, we remove the show menu class
    navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction));
document.body.addEventListener("click", ()=>{
    if (clicked) {
        linkAction();
        clicked = false;
    }
})



// Test Begins
/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// Open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
// Close modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme'))
    {
        themeModal.style.display = 'none';
    }
}
theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal)

/*===== FONTS =====*/

// Remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active")
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {

        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1'))
        {
            fontSize = '12px';
        }
        else if(size.classList.contains('font-size-2'))
        {
            fontSize = '14px';
        }
        else if(size.classList.contains('font-size-3'))
        {
            fontSize = '16px';
        }
        else if(size.classList.contains('font-size-4'))
        {
            fontSize = '18px';
        }
        // Change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;

    })
})

/*===== PRIMARY COLORS =====*/

// Remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        changeActiveColorClass();

        if(color.classList.contains('color-1'))
        {
            primaryHue = 278;
        }
        else if(color.classList.contains('color-2'))
        {
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3'))
        {
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4'))
        {
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5'))
        {
            primaryHue = 202;
        }
        color.classList.add("active")
        root.style.setProperty('--primary-color-hue', primaryHue)
    })
})
/*===== THEME BACKGROUNDS =====*/
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Change background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
Bg1.addEventListener('click', () => {
    header.style.filter = 'brightness(0.8)';
    // Add active class
    Bg1.classList.add('active');
    // Remove active from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    
    darkColorLightness = '17%';
    whiteColorLightness = '100%';
    lightColorLightness = '92%';
    changeBG();

})
Bg2.addEventListener('click', () => {
    header.style.filter = 'brightness(0.8)';
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // Add active class
    Bg2.classList.add('active');
    // Remove active from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})
Bg3.addEventListener('click', () => {
    header.style.filter = 'contrast(0.8)';
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // Add active class
    Bg3.classList.add('active');
    // Remove active from the others
    Bg2.classList.remove('active');
    Bg1.classList.remove('active');
    changeBG();
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader()
{
    const header = document.getElementById("header")
    // When the scroll is greater than 80 viewport height , add the class scroll header to the tag header
    if(this.scrollY >= 80) header.classList.add("scroll-header"); 
    else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/*=============== TESTIMONIAL SWIPER ===============*/
// var swiper = new Swiper(".testimonial-wrapper", {
//     loop: 'true',
//     pagination: {
//     el: '.swiper-pagination',
//   },
// });
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== PORTFOLIO ITEM FILTER ===============*/
const filterContainer = document.querySelector(".portfolio-filter-inner"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem = portfolioItems.length;

    //   console.log(filterBtns);
    //   alert("jjjdjdj")

      for(let i=0; i<totalFilterBtn; i++)
      {
        filterBtns[i].addEventListener("click", function()
        {
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            for(let k=0; k<totalPortfolioItem; k++){
                if(filterValue === portfolioItems[k].getAttribute("data-category")){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
                else {
                    portfolioItems[k].classList.add("hide");
                    portfolioItems[k].classList.remove("show");
                }
                if(filterValue === "all"){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
            }
        })
      }




// for auto slider

const radioBoxes = document.querySelectorAll(".radio-btn");

let counter;
let imageSlider;

function slideImage() {
    counter = 1;

    for (let i = 1; i < 5; i++) {
        if (document.getElementById("radio" + i).checked === true) {
            i++;
            counter = i;
        }
        
    }
    document.getElementById("radio" + counter).checked = true;
    counter++;

    if(counter > 5){
        counter = 1;
    }
}


imageSlider = setInterval(slideImage, 5000);

radioBoxes.forEach((radioBox)=>{
    radioBox.addEventListener('click', ()=>{
        clearInterval(imageSlider);
        setTimeout(() => {
            console.log("hfhhhd");
            imageSlider = setInterval(slideImage, 5000);
        }, 3000);
    })
})




// To Check when a container is now at the top


const home = document.getElementById("home"),
about = document.getElementById("about"),
experinece = document.getElementById("experience"),
portfolio = document.getElementById("portfolio"),
podcast = document.getElementById("portfolio-display"),
contact = document.getElementById("contact");

const navLink = document.querySelectorAll(".nav-link")


function isAtTheTop(element){
    const theContainer = element.getBoundingClientRect();
    return(
        theContainer.top >=0 && theContainer.left>=0 && theContainer.right<=(window.innerWidth || documentElement.clientWidth)
    );
}

const bac2top = document.querySelector(".back-to-top");

// theContainer.top >=0 && theContainer.left>=0 && theContainer.bottom<= (window.innerHeight || documentElement.clientHeight) && theContainer.right<=(window.innerWidth || documentElement.clientWidth)

setInterval(() => {
    if(isAtTheTop(home)){
        navLink.forEach(link=>{
            link.classList.remove("active-link")
        })
        navLink[0].classList.add("active-link");
        bac2top.style.display = "none";
    } else if(isAtTheTop(about)){
        navLink.forEach(link=>{
            link.classList.remove("active-link")
        })
        navLink[1].classList.add("active-link");
        bac2top.style.display = "flex";
    }else if(isAtTheTop(experinece)){
        navLink.forEach(link=>{
            link.classList.remove("active-link")
        })
        navLink[2].classList.add("active-link");
        bac2top.style.display = "flex";
    }else if(isAtTheTop(portfolio)){
        navLink.forEach(link=>{
            link.classList.remove("active-link")
        })
        navLink[3].classList.add("active-link");
        bac2top.style.display = "flex";
    }else if(isAtTheTop(podcast)){
        navLink.forEach(link=>{
            link.classList.remove("active-link")
        })
        navLink[4].classList.add("active-link");
        bac2top.style.display = "flex";
    }else if(isAtTheTop(contact)){
        navLink.forEach(link=>{
            link.classList.remove("active-link")
        })
        navLink[5].classList.add("active-link");
        bac2top.style.display = "flex";
    }



}, 100);

// Updating my titles

const title = document.querySelector('.info-text');

let text1 = "Software Developer";
let text2 = "Frontend Web Developer";
let text3 = "Mobile App Developer";
let myTitle1 = [];
let myTitle2 = [];
let myTitle3 = [];

let i = 0;
let titleOne = true;
let titleTwo = false;
let titleThree = false;

setInterval(() => {
    t1();
    t2();       
    t3();
}, 105);

const t1 =()=>{
    if (titleOne) {
        myTitle3 = [];
        myTitle1[i] = text1.charAt(i); 
        title.textContent =myTitle1.join("");
        i++;     
        console.log(i);
        if (i > 30) {
            titleOne=false;
            titleTwo=true;
            i = 0;
            
        }
    }
    
}

const t2 =()=>{
    if (titleTwo) { 
        myTitle1 = [];
        myTitle2[i] = text2.charAt(i); 
        title.textContent =myTitle2.join("");
        i++; 
        if (i > 34) {
            titleTwo=false;
            titleThree=true;
            i = 0;
        }
    }
}

const t3 =()=>{
    if (titleThree) {
        myTitle2 = [];
        myTitle3[i] = text3.charAt(i); 
        title.textContent =myTitle3.join("");
        i++;     
        if (i > 44) {
            titleOne=true;
            titleThree=false
            i = 0;
        }
    }
}