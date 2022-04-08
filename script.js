import  { primary } from './data.js'

const mainContainer = document.querySelector('.container')
const pageInfoSpan = document.querySelector('.pages')

const inputValue = document.querySelector('#inputVal')
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')
const menuBtn = document.querySelector('.menu')
const sideBar = document.querySelector('.sidebar')
const support = document.querySelector('.support')
const keep = document.getElementById('keep')
const sectionRight = document.querySelector('.right-menu-slide')
const cardTop = document.querySelector('.card-top')
const question = document.getElementById('question')
const clear = document.querySelector('#delete')
const burgerMenu = document.querySelectorAll('.burger-menu-par')
const searchBtn = document.querySelector('.search')

let pageNumber = 0;
let limit = 15;

function containerBody(emails){
    
    const start = pageNumber * limit;
    const end = (pageNumber + 1) * limit;

    const partialEmails = emails.slice(start, end);

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

sideBar.addEventListener('mouseover', function () {
    for (let el of burgerMenu) {
        el.style.display="block"
        sideBar.style.width = '150px'
    }
});

sideBar.addEventListener('mouseout', function () {
    for (let el of burgerMenu) {
        el.style.display="none"
        sideBar.style.width = '48px'
    }
});

inputValue.addEventListener('input',(e)=>{
    mainContainer.innerHTML = '';
    let search = e.target.value;
    let filtered = primary.filter(el=>{
        return el.senderName.toLowerCase().includes(search.toLowerCase())
    })
    containerBody(filtered)
})

keep.addEventListener('click', () => {
    sectionRight.style.display = 'block';
  })

document.body.addEventListener('click', (e) => {
    if (e.target.id === "delete") {
        sectionRight.style.display = 'none'
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
}

mainContainer.addEventListener('click',(event)=>{
   let name = event.target.innerText;
    mainContainer.innerHTML = '';
    
    let everyEmail = document.createElement('div');

   let currentMessage = primary.filter(message => {
    return name === message.senderName
   })
    currentMessage.map( el => {
    everyEmail.setAttribute('class','eachDiv');
    mainContainer.appendChild(everyEmail)
    everyEmail.innerHTML = `
    <div class ='eachDiv_header'>
        <span class="material-icons" id='back'>arrow_back</span>
        <span class="material-icons">archive</span>
        <span class="material-icons">report</span>
        <span class="material-icons">delete</span>
        <span class="material-icons">mark_email_unread</span>
        <span class="material-icons">watch_later</span>
        <span class="material-icons">add_task</span>
        <span class="material-icons">drive_file_move</span>
        <span class="material-icons">label</span>
        <span class="material-icons">more_vert</span>
    </div>
    <h1>${el.messageTitle}</h1>
    <h4>${el.senderName}</h4><p>${el.senderEmail}</p>
    <p>${el.messages[0].message}</p>
    
    `

})
})
document.body.addEventListener('click', (e) => {
    if (e.target.id === "back") {
        containerBody(primary)
    }
})