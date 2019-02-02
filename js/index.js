const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
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
  footer: {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navItems = document.querySelectorAll('header nav a');

navItems[0].innerText = siteContent.nav['nav-item-1'];
navItems[1].innerText = siteContent.nav['nav-item-2'];
navItems[2].innerText = siteContent.nav['nav-item-3'];
navItems[3].innerText = siteContent.nav['nav-item-4'];
navItems[4].innerText = siteContent.nav['nav-item-5'];
navItems[5].innerText = siteContent.nav['nav-item-6'];

navItems[0].style.color = 'blue';
navItems[1].style.color = 'blue';
navItems[2].style.color = 'blue';
navItems[3].style.color = 'blue';
navItems[4].style.color = 'blue';
navItems[5].style.color = 'blue';

let ctaText = document.querySelector('.cta .cta-text h1');
ctaText.innerText = siteContent.cta['h1'];

let buttonContent = document.querySelector('.cta .cta-text button');
buttonContent.innerText = siteContent.cta['button'];

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta['img-src'];

let mainContentHeaders = document.querySelectorAll('.top-content .text-content h4');
mainContentHeaders[0].innerText = siteContent['main-content']['features-h4'];

mainContentHeaders[1].innerText = siteContent['main-content']['about-h4'];

let mainContentText = document.querySelectorAll('.top-content .text-content p' )
mainContentText[0].innerText = siteContent['main-content']['features-content'];

mainContentText[1].innerText = siteContent['main-content']['about-content'];

let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

let bottomContentHeaders = document.querySelectorAll('.bottom-content .text-content h4');
bottomContentHeaders[0].innerText = siteContent['main-content']['services-h4'];

console.log(bottomContentHeaders);

bottomContentHeaders[1].innerText = siteContent['main-content']['product-h4'];

bottomContentHeaders[2].innerText = siteContent['main-content']['vision-h4'];

let bottomContentText = document.querySelectorAll('.bottom-content .text-content p')

bottomContentText[0].innerText = siteContent['main-content']['services-content'];
bottomContentText[1].innerText = siteContent['main-content']['product-content'];
bottomContentText[2].innerText = siteContent['main-content']['vision-content'];











