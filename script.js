import  { primary } from './data.js'

const mainContainer = document.querySelector('.container')
const pageInfoSpan = document.querySelector('.pages')
// const sidebarSection = document.querySelector('.sidebar')
// const inputValue = document.querySelector('#inputVal')
// let cardId = document.getElementById('card2')
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')
const menuBtn = document.querySelector('.material-icons')
const sideBar = document.querySelector('.sidebar')

let pageNumber = 0;
let limit = 15;

function containerBody(emails){
    
    const start = pageNumber * limit + 1;
    const end = (pageNumber + 1) * limit;

    const partialEmails = emails.slice(start, end);

    pageInfoSpan.innerText = `${start} - ${end} of ${emails.length}`;

    for (let email of partialEmails) {
        const emailTime = email.date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
        
        let card = `
            <div class="card" id='card2'>
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
    containerBody(primary);
});

menuBtn.addEventListener('click', function () {
        sideBar.style.width = '100px'
        console.log(sideBar)
});