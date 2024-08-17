var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

var data = {
  JavaCreates: {
    username: 'JavaCreates', 
    name: 'JavaCreates Studios', 
    logo: {
      type: 'svg', 
      method: 'HTML', 
      backgroundStyle: 'linear-gradient(135deg, rgb(235, 76, 0), rgb(242, 169, 0) 75%)', 
      html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" class="iconAbove"><g data-v-fde0c5aa="" id="31ba2aa7-89fc-4951-946f-8fcc0eacdc50" fill="#ffffff" transform="matrix(3.0520013211506622,0,0,3.0520013211506622,19.114919551377465,166.47740411000373)"><path d="M0.29 10.58C0.50 12.66 1.95 14.14 4.33 14.14C6.66 14.14 8.09 12.39 8.09 10.26L8.11 3.78L2.84 3.78L2.84 4.77L7.03 4.77L7.01 10.26C7.01 11.83 6.01 13.13 4.33 13.13C2.60 13.13 1.55 12.15 1.34 10.58ZM13.40 6.58C11.68 6.58 10.46 7.56 10.36 9.02L11.35 9.02C11.41 8.18 12.21 7.49 13.36 7.49C14.64 7.49 15.40 8.16 15.40 9.67L15.40 9.94L13.13 9.93C11.21 9.93 10.07 10.79 10.07 12.01C10.07 13.27 11.12 14.14 12.46 14.14C13.75 14.14 14.77 13.55 15.53 12.96L15.74 14L16.42 14L16.42 9.67C16.42 7.70 15.33 6.58 13.40 6.58ZM11.10 12.00C11.10 11.19 11.82 10.79 13.15 10.79L15.40 10.79L15.40 12.11C14.64 12.70 13.69 13.22 12.67 13.22C11.82 13.22 11.10 12.78 11.10 12.00ZM24.04 6.72L21.50 13.15L18.98 6.72L17.79 6.72L20.93 14L22.06 14L25.19 6.72ZM29.39 6.58C27.66 6.58 26.45 7.56 26.35 9.02L27.34 9.02C27.40 8.18 28.20 7.49 29.34 7.49C30.63 7.49 31.39 8.16 31.39 9.67L31.39 9.94L29.12 9.93C27.20 9.93 26.05 10.79 26.05 12.01C26.05 13.27 27.10 14.14 28.45 14.14C29.74 14.14 30.76 13.55 31.51 12.96L31.72 14L32.41 14L32.41 9.67C32.41 7.70 31.32 6.58 29.39 6.58ZM27.09 12.00C27.09 11.19 27.80 10.79 29.13 10.79L31.39 10.79L31.39 12.11C30.63 12.70 29.68 13.22 28.66 13.22C27.80 13.22 27.09 12.78 27.09 12.00ZM34.03 11.14C34.54 13.01 36.01 14.14 38.02 14.14C39.93 14.14 41.48 13.02 41.48 11.37C41.48 7.80 35.71 9.07 35.71 6.24C35.71 5.28 36.61 4.62 37.91 4.62C39.13 4.62 40.01 5.33 40.36 6.51L41.44 6.51C41.06 4.80 39.79 3.64 37.91 3.64C35.98 3.64 34.62 4.72 34.62 6.24C34.62 10.05 40.38 8.69 40.38 11.40C40.38 12.40 39.38 13.16 38.02 13.16C36.68 13.16 35.57 12.49 35.14 11.14ZM42.60 7.62L43.74 7.62L43.74 12.00C43.74 13.57 44.60 14.14 45.72 14.14C46.47 14.14 47.17 13.99 47.74 13.73L47.63 12.84C47.11 13.06 46.52 13.22 45.88 13.22C45.19 13.22 44.77 12.85 44.77 11.98L44.77 7.62L47.70 7.62L47.70 6.72L44.77 6.72L44.77 4.65L43.76 4.91L43.76 6.72L42.60 6.72ZM54.59 6.72L54.59 12.18C53.65 12.82 52.70 13.22 51.87 13.22C50.78 13.22 50.18 12.60 50.18 11.42L50.18 6.72L49.13 6.72L49.13 11.47C49.13 13.22 50.06 14.14 51.60 14.14C52.68 14.14 53.63 13.78 54.71 13.06L54.89 14L55.64 14L55.64 6.72ZM63.81 3.08L63.81 7.66C63.17 6.94 62.29 6.58 61.21 6.58C59.16 6.58 57.53 8.20 57.53 10.33C57.53 12.52 59.15 14.14 61.22 14.14C62.41 14.14 63.31 13.69 63.95 12.87L64.15 14L64.82 14L64.82 3.08ZM61.25 13.23C59.82 13.23 58.59 11.97 58.59 10.33C58.59 8.72 59.82 7.49 61.25 7.49C62.45 7.49 63.31 8.11 63.78 9.03L63.78 11.68C63.29 12.63 62.47 13.23 61.25 13.23ZM67.86 5.10C68.29 5.10 68.66 4.73 68.66 4.27C68.66 3.85 68.29 3.50 67.86 3.50C67.41 3.50 67.06 3.85 67.06 4.27C67.06 4.73 67.41 5.10 67.86 5.10ZM68.35 6.72L67.30 6.72L67.30 14L68.35 14ZM70.28 10.33C70.28 12.45 71.86 14.14 74.09 14.14C76.30 14.14 77.88 12.45 77.88 10.33C77.88 8.25 76.30 6.58 74.09 6.58C71.86 6.58 70.28 8.25 70.28 10.33ZM71.32 10.36C71.32 8.76 72.46 7.49 74.09 7.49C75.70 7.49 76.83 8.76 76.83 10.36C76.83 11.94 75.70 13.23 74.09 13.23C72.46 13.23 71.32 11.94 71.32 10.36ZM79.49 8.54C79.49 11.48 84.45 10.02 84.46 12.05C84.48 12.88 83.66 13.29 82.49 13.29C81.27 13.29 80.29 12.75 80.09 11.69L79.10 11.69C79.32 13.34 80.81 14.14 82.46 14.14C84.18 14.14 85.48 13.40 85.48 12.05C85.48 9.14 80.51 10.57 80.51 8.54C80.51 7.94 81.12 7.43 82.39 7.43C83.79 7.43 84.28 8.13 84.38 8.99L85.34 8.99C85.26 7.70 84.35 6.58 82.42 6.58C80.49 6.58 79.49 7.43 79.49 8.54Z"></path></g><g data-v-fde0c5aa="" id="8ad18752-6251-49a6-a866-b813332e4c0a" stroke="none" fill="#ffffff" transform="matrix(0.675778486026406,0,0,0.675778486026406,116.1434988812332,90.36729616110443)"><path d="M23.8 45.7c-.8-.8-2.2-.8-3.1 0L18.5 48c-.8.8-.8 2.2 0 3.1l2.3 2.3c.4.4 1 .6 1.5.6.6 0 1.1-.2 1.5-.6l2.3-2.3c.8-.8.8-2.2 0-3.1l-2.3-2.3zM78.2 45.7c-.8-.8-2.2-.8-3.1 0L72.8 48c-.4.4-.6 1-.6 1.5 0 .6.2 1.1.6 1.5l2.3 2.3c.4.4 1 .6 1.5.6.6 0 1.1-.2 1.5-.6l2.3-2.3c.8-.8.8-2.2 0-3.1l-2.2-2.2z"></path><path d="M6.5 80.4h33.9l-9.3 9.3c-.4.4-.6 1-.6 1.5v6.5c0 1.2 1 2.2 2.2 2.2h34.8c1.2 0 2.2-1 2.2-2.2v-6.5c0-.6-.2-1.1-.6-1.5l-9.3-9.3h33.9c3.6 0 6.5-2.9 6.5-6.5V6.5c0-3.6-2.9-6.5-6.5-6.5h-87C2.9 0 0 2.9 0 6.5v67.4c0 3.6 2.9 6.5 6.5 6.5zm58.7 11.8v3.4H34.8v-3.4l11.8-11.8h6.9l11.7 11.8zm28.3-16.1h-87c-1.2 0-2.2-1-2.2-2.2v-4.3h91.3v4.3c.1 1.2-.9 2.2-2.1 2.2zM6.5 4.3h87c1.2 0 2.2 1 2.2 2.2v58.7H4.3V6.5c0-1.2 1-2.2 2.2-2.2z"></path><path d="M10.9 60.9h78.3c1.2 0 2.2-1 2.2-2.2V10.9c0-1.2-1-2.2-2.2-2.2H10.9c-1.2 0-2.2 1-2.2 2.2v47.8c0 1.2 1 2.2 2.2 2.2zM13 13h74v43.5H13V13z"></path><path d="M56.9 28.9c-1 1-2.4 1.2-3.6.7 2.3-.9 3.9-3.1 3.9-5.7 0-3.4-2.8-6.1-6.1-6.1S45 20.6 45 23.9c0 1.9.8 3.5 2.1 4.6-3.4.8-5.9 3.8-5.9 7.5 0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2c0-1 .4-1.8 1.1-2.5 0 1.2.3 2.5.9 3.6-.3 1.6-1.6 2.8-3.3 2.8-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2c3.3 0 6.1-2.1 7.2-5 1 .6 1.6 1.6 1.6 2.9 0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2 0-3.8-2.7-6.9-6.3-7.5-.1-.4-.2-.8-.2-1.2 1.1.6 2.3.9 3.6.9 2 0 3.9-.7 5.4-2.2.8-.8.8-2.2 0-3.1-.9-1-2.3-1-3.1-.2zM51 22.1c1 0 1.8.8 1.8 1.8s-.8 1.7-1.8 1.7-1.8-.8-1.8-1.8.8-1.7 1.8-1.7zM65.9 47.4h-.5c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h.5c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2zM50 47.4h-1c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h1c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2zM41.7 47.4h-1c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h1c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2zM58.2 47.4h-1c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h1c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2zM33.5 47.4H33c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h.5c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2z"></path></g></svg>
`
    }, 
    slogan: 'Creating an impact on the world through the power of Animatoon.', 
    people: {
      hanlinsu: {
        username: 'hanlinsu', 
        image: 'hanlinsu.jpg', 
        name: 'Hanlin Su', 
        title: 'Founder & CEO', 
        email: 'business@javacreates.com', 
        links: [
          'javacreates.com', 
          'youtube.com/JavaCreates', 
          'linkedin.com/in/hanlinsu', 
        ]
      }
    }, 
  }
}

var company = urlParams.get('company')
var username = urlParams.get('user')

var cObj = data[company]
var uObj = cObj['people'][username]
var nameAtCompany = `${uObj['name']} at ${cObj['name']}`

var cardBack = document.querySelector('#back')

var imageEle = document.querySelector('.image')
var nameEle = document.querySelector('.name')
var titleEle = document.querySelector('.title')
var sloganEle = document.querySelector('.slogan')
var logoElement = document.querySelector('.top .right')
var socialsEle = document.querySelector('.bottom .right')

document.title = nameAtCompany

var companyLogo = cObj['logo']
if (!!companyLogo['method']) {
  if (companyLogo['method'] === 'HTML') {
    if (!!companyLogo['backgroundStyle']) {
      logoElement.style.background = companyLogo['backgroundStyle']
      cardBack.style.background = companyLogo['backgroundStyle']
    }
    logoElement.innerHTML = companyLogo['html']
    cardBack.querySelector('.inner').innerHTML = companyLogo['html']
  }
}

imageEle.style.backgroundImage = `url('/companies/${cObj['username']}/${uObj['image']}')`
nameEle.textContent = uObj['name']
titleEle.textContent = uObj['title']
sloganEle.querySelector('span').textContent = cObj['slogan']

let emailEle = document.createElement('a')
emailEle.textContent = uObj['email']
emailEle.href = `mailto:${uObj['email']}`
socialsEle.appendChild(emailEle)

uObj['links'].forEach(function(l, i) {
  let linkEle = document.createElement('a')
  linkEle.textContent = l
  linkEle.href = `mailto:${l}`
  socialsEle.appendChild(linkEle)
})

/*
<a class="email">business@javacreates.com</a>
<a class="website">javacreates.com</a>
<a class="youtube">youtube.com/JavaCreates</a>
<a class="linkedin">linkedin.com/in/hanlinsu</a>
*/