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
  contact: {
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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navAnchors = document.querySelectorAll('header nav a');
navAnchors[0].innerText =  siteContent.nav['nav-item-1'];
navAnchors[1].innerText =  siteContent.nav['nav-item-2'];
navAnchors[2].innerText =  siteContent.nav['nav-item-3'];
navAnchors[3].innerText =  siteContent.nav['nav-item-4'];
navAnchors[4].innerText =  siteContent.nav['nav-item-5'];
navAnchors[5].innerText =  siteContent.nav['nav-item-6'];

let header = document.querySelector('.cta .cta-text h1');
header.innerText =  siteContent.cta['h1'];

let button = document.querySelector('.cta .cta-text button');

button.innerText = siteContent.cta['button'];

let codeSnippet = document.querySelector('.cta #cta-img');

codeSnippet.src = 'img/header-img.png';


let topContentHeaders =  document.querySelectorAll('.top-content .text-content h4')

topContentHeaders[0].innerText = siteContent['main-content']['features-h4'];

topContentHeaders[1].innerText = siteContent['main-content']['about-h4'];

let topContentText = document.querySelectorAll('.top-content .text-content p');

topContentText[0].innerText = siteContent['main-content']['features-content'];
topContentText[1].innerText = siteContent['main-content']['about-content'];

let midImage = document.querySelector('.middle-img');
midImage.src = "img/mid-page-accent.jpg";


botttomCtaHeaders = document.querySelectorAll('.bottom-content .text-content h4');

botttomCtaHeaders[0].innerText = siteContent['main-content']['services-h4'];
botttomCtaHeaders[1].innerText = siteContent['main-content']['product-h4'];
botttomCtaHeaders[2].innerText = siteContent['main-content']['vision-h4'];

bottomCtaText = document.querySelectorAll('.bottom-content .text-content p');

bottomCtaText[0].innerText = siteContent['main-content']['services-content'];
bottomCtaText[1].innerText = siteContent['main-content']['product-content'];
bottomCtaText[2].innerText = siteContent['main-content']['vision-content'];

let contactHeader = document.querySelector('.contact h4')

contactHeader.innerText = siteContent.contact['contact-h4'];

let contactText = document.querySelectorAll('.contact p');

contactText[0].innerText = siteContent.contact['address'];
contactText[1].innerText = siteContent.contact['phone'];
contactText[2].innerText = siteContent.contact['email'];

let smellyFoot = document.querySelector('footer p');

smellyFoot.innerText = siteContent.footer['copyright'];


navAnchors[0].style.color = 'green';
navAnchors[1].style.color = 'green';
navAnchors[2].style.color = 'green';
navAnchors[3].style.color = 'green';
navAnchors[4].style.color = 'green';
navAnchors[5].style.color = 'green';

let careers = document.createElement('a');
let signUp  = document.createElement('a');

let navClass = document.querySelector('header nav');


navClass.prepend(careers);
navClass.appendChild(signUp);





careers.innerText = "Careers";
signUp.innerText  = "Sign Up";





console.log(navClass);




















