import  { primary } from './data.js'

const mainContainer = document.querySelector('.container')
const pageInfoSpan = document.querySelector('.pages')
// const sidebarSection = document.querySelector('.sidebar')

const inputValue = document.querySelector('#inputVal')
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')
const menuBtn = document.querySelector('.material-icons')
const sideBar = document.querySelector('.sidebar')
const support = document.querySelector('.support')
// const calendar = document.getElementById('calendar')
const keep = document.getElementById('keep')
// const tasks = document.getElementById('tasks')
// const contacts = document.getElementById('contacts')
const sectionRight = document.querySelector('.right-menu-slide')
const cardTop = document.querySelector('.card-top')
const question = document.getElementById('question')
// const settings = document.getElementById('settings')
// const menu = document.getElementById('menu')
// const user = document.getElementById('user')
const clear = document.querySelector('#delete')
const burgerMenu = document.querySelector('.burger-menu-par')
// const parentMenuBurger = document.querySelector()

let pageNumber = 0;
let limit = 15;

function containerBody(emails){
    
    const start = pageNumber * limit;
    const end = (pageNumber + 1) * limit;

    const partialEmails = emails.slice(start, end);

    //console.log('partialEmails:', partialEmails)

    pageInfoSpan.innerText = `${start+1} - ${end} of ${emails.length}`;

    for (let email of partialEmails) {
        const emailTime = email.date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
        
        let card = `
            <div class="card" id=${email.senderName} >
                <input type="checkbox" name="check-${email.id}" id="${email.id}">
                <span class="material-icons">star_outline</span>
                <span class="material-icons" style="color: rgb(245, 211, 113);">label_important</span>
                <p>${email.senderName}</p>
                <p class='card-title'>${email.messageTitle}</p>
                <p class='third'>${emailTime}</p>
            </div>`
        mainContainer.innerHTML += card;
    }
}

containerBody(primary)

nextBtn.addEventListener('click', function () {
    mainContainer.innerHTML = '';
    pageNumber++;
    
    containerBody(primary);
});

prevBtn.addEventListener('click', function () {
    mainContainer.innerHTML = '';
    pageNumber--;
    pageNumber =0;
    containerBody(primary);
});

menuBtn.addEventListener('mouseover', function () {
        sideBar.style.width = '150px'
        burgerMenu.style.visibility="visible"
        console.log(sideBar)
});

menuBtn.addEventListener('mouseout', function () {
    sideBar.style.width = '20px'
    burgerMenu.style.visibility="hidden"
    console.log(sideBar)
});

inputValue.addEventListener('input',(e)=>{
    mainContainer.innerHTML = '';
    let search = e.target.value;
    let filtered = primary.filter(el=>{
        return el.senderName.toLowerCase().includes(search.toLowerCase())
    })
    console.log(filtered)
    console.log(search)
    containerBody(filtered)
})

// keep.addEventListener('click',()=>{
//     sectionRight.style.width = '350px';
//     sectionRight.innerHTML = `
//     <div class ='notes'>
    
//     <span class="material-icons" >
//     add
//     </span>
//     <p id='note'>Notes...</p>
//     <input type='checkbox' id='input'>
//     <span class="material-icons" id='delete'>
//     clear
//     </span>
//     </div>
//     <img src="https://aquacrimea.ru/assets/photo/articles/baza-znaniy/sm_full.aspx.png" alt="" id='add'>
//     <div class='apps'>
//     <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24" fill="#FBBC04">
//  <path d="m0 0h24v24h-24z" fill="none"/>
//  <path d="m6 18c0 0.55 0.45 1 1 1h1v3.5c0 0.83 0.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5v-3.5h2v3.5c0 0.83 0.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5v-3.5h1c0.55 0 1-0.45 1-1v-10h-12v10zm-2.5-10c-0.83 0-1.5 0.67-1.5 1.5v7c0 0.83 0.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5v-7c0-0.83-0.67-1.5-1.5-1.5zm17 0c-0.83 0-1.5 0.67-1.5 1.5v7c0 0.83 0.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5v-7c0-0.83-0.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c0.2-0.2 0.2-0.51 0-0.71s-0.51-0.2-0.71 0l-1.48 1.48c-0.79-0.4-1.69-0.63-2.64-0.63-0.96 0-1.86 0.23-2.66 0.63l-1.49-1.48c-0.2-0.2-0.51-0.2-0.71 0s-0.2 0.51 0 0.71l1.31 1.31c-1.48 1.09-2.45 2.84-2.45 4.83h12c0-1.99-0.97-3.75-2.47-4.84zm-5.53 2.84h-1v-1h1v1zm5 0h-1v-1h1v1z"/>
// </svg>
// <p>Apps for Android</p>
// </div>
// <div class='apps'>
// <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24" fill="#FBBC04">
//  <path d="m4 9h2v-2h-2v2zm0 8h2v-6h-2v6zm7-10h-2c-1.1 0-2 0.9-2 2v6c0 1.1 0.9 2 2 2h2c1.1 0 2-0.9 2-2v-6c0-1.1-0.9-2-2-2zm0 8h-2v-6h2v6zm9-6v-2h-4c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2h2v2h-4v2h4c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2h-2v-2h4z"/>
//  <path d="m0 0h24v24h-24z" fill="none"/>
// </svg>
// <p>Apps for Iphone and Ipad</p>
// </div>
// <div class='apps'>
// <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#FBBC04">
//   <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
//   <path d="M0 0h24v24H0z" fill="none"/>
// </svg>
// <p>Web Application</p>
// </div>
// <div class='apps'>
// <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#FBBC04">
//   <path d="M0 0h24v24H0z" fill="none"/>
//   <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/>
// </svg>
// <p>Chrome Extensions</p>
// </div>`
// cardTop.innerHTML = ''

// })

keep.addEventListener('click', () => {
    sectionRight.style.display = 'block';
  })

document.body.addEventListener('click', (e) => {
    if (e.target.id === "delete") {
        sectionRight.style.display = 'none'
        // sectionRight.innerHTML = ''
    }
})

question.addEventListener('click', () => {
    if (support.style.display === 'block') {
      support.style.display = 'none';
    } else {
      support.style.display = 'block';
    }
  })

let count = 1
for(let item of primary) {
    item.id = count
    count++
    //console.log(primary)
}

mainContainer.addEventListener('click',(event)=>{
   let name = event.target.innerText;
    mainContainer.innerHTML = '';
    
    let everyEmail = document.createElement('div');

   let currentMessage = primary.filter(message => {
   // console.log("name =>" +name,  "sender => " , message.senderName)
    return name === message.senderName
   })
   //console.log(currentMessage);
    currentMessage.map( el => {
    everyEmail.setAttribute('class','eachDiv');
    mainContainer.appendChild(everyEmail)
    everyEmail.innerHTML = `
    <div class ='eachDiv_header'>
    <span class="material-icons" id='back'>
    arrow_back
    </span>
    <span class="material-icons">
    archive
    </span>
    <span class="material-icons">
report
</span>
<span class="material-icons">
delete
</span>
<span class="material-icons">
mark_email_unread
</span>
<span class="material-icons">
watch_later
</span>
<span class="material-icons">
add_task
</span>
<span class="material-icons">
drive_file_move
</span>
<span class="material-icons">
label
</span>
<span class="material-icons">
more_vert
</span>
    </div>
    <h1>${el.messageTitle}</h1>
    <h4>${el.senderName}</h4><p>${el.senderEmail}</p>
    <p>${el.messages[0].message}</p>
    
    `

})
})
//<img src=${el.messages[0].attachments[0].icon}>
document.body.addEventListener('click', (e) => {
    if (e.target.id === "back") {
        containerBody(primary)
    }
})