const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let nav = document.querySelectorAll("a")
console.log(nav)
nav[0].textContent = siteContent["nav"]["nav-item-1"]
nav[1].textContent = siteContent["nav"]["nav-item-2"]
nav[2].textContent = siteContent["nav"]["nav-item-3"]
nav[3].textContent = siteContent["nav"]["nav-item-4"]
nav[4].textContent = siteContent["nav"]["nav-item-5"]
nav[5].textContent = siteContent["nav"]["nav-item-6"]
nav[0].style.color = "green"
nav[1].style.color = "green"
nav[2].style.color = "green"
nav[3].style.color = "green"
nav[4].style.color = "green"
nav[5].style.color = "green"

let title = document.querySelector('h1')
title.textContent = siteContent["cta"]["h1"]

let button = document.querySelector('button')
button.textContent = siteContent["cta"]["button"]

let headers = document.querySelectorAll('h4');
headers[0].textContent = siteContent['main-content']['features-h4'];
headers[1].textContent = siteContent['main-content']['about-h4'];
headers[2].textContent = siteContent['main-content']['services-h4'];
headers[3].textContent = siteContent['main-content']['product-h4'];
headers[4].textContent = siteContent['main-content']['vision-h4']
headers[5].textContent = siteContent['contact']['contact-h4']


// let subTitle = document.querySelector('h4')
// subTitle.textContent = siteContent["main-content"]["features-h4"]
// subTitle[1].textContent = siteContent["main-content"]["about-h4"]
// subTitle[2].textContent = siteContent["main-content"]["services-h4"]
// subTitle[3].textContent = siteContent["main-content"]["vision-h4"]

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// let nav = document.getElementsByTagName("a")
// nav.setAttribute("a", siteContent["nav"]["nav-item-1"])

let header = document.getElementById("cta-img");
header.setAttribute('src', siteContent["cta"]["img-src"])
// header.src = "img/header-img.png"

let insideText = document.querySelectorAll("p")
insideText[0].textContent = siteContent["main-content"]["features-content"]
insideText[1].textContent = siteContent["main-content"]["about-content"]
insideText[2].textContent = siteContent["main-content"]["services-content"]
insideText[3].textContent = siteContent["main-content"]["product-content"]
insideText[4].textContent = siteContent["main-content"]["vision-content"]
insideText[5].textContent = siteContent["contact"]["address"]
insideText[6].textContent = siteContent["contact"]["phone"]
insideText[7].textContent = siteContent["contact"]["email"]
insideText[8].textContent = siteContent["footer"]["copyright"]


let midImg = document.getElementById("middle-img")
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])


// let backNav = document.createElement("a")
// backNav.textContent ='Back'

// let frontNav = document.createElement('a')
// frontNav.textContent = 'front'

// const navAdd = document.querySelector ('nav')

// navAdd.preppend(frontNav)
// navAdd.append(backNav)
let newElement = document.createElement('a');
newElement.textContent= 'Home';
newElement.style.color = 'green'

let newElementTwo = document.createElement('a')
newElementTwo.textContent = 'Sign Up'
newElementTwo.style.color = 'green'

const navAdd = document.querySelector('nav');
navAdd.prepend(newElement);
navAdd.append(newElementTwo)
