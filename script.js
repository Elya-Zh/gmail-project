import  { primary } from './data.js'

const mainContainer = document.querySelector('.container')
const pageInfoSpan = document.querySelector('.pages')
// const sidebarSection = document.querySelector('.sidebar')

const inputValue = document.querySelector('#inputVal')
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')
const menuBtn = document.querySelector('.material-icons')
const sideBar = document.querySelector('.sidebar')
const calendar = document.getElementById('calendar')
const keep = document.getElementById('keep')
const tasks = document.getElementById('tasks')
const contacts = document.getElementById('contacts')
const sectionRight = document.querySelector('.section-right')

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
    pageNumber =0;
    containerBody(primary);
});

menuBtn.addEventListener('mouseover', function () {
        sideBar.style.width = '150px'
        console.log(sideBar)
});

menuBtn.addEventListener('mouseout', function () {
    sideBar.style.width = '20px'
    console.log(sideBar)
});

inputValue.addEventListener('input',(e)=>{
    mainContainer.innerHTML = '';
let search = e.target.value;
let filtered = primary.filter(el=>{
    return el.senderName.toLowerCase().includes(search.toLowerCase())
})
console.log(filtered)
containerBody(filtered)
})

keep.addEventListener('click',()=>{
    sectionRight.style.width = '200px';
    sectionRight.innerHTML = `<span class="material-icons">
    add
    </span>Notes
    <input type='checkbox'/>
    <img src="https://aquacrimea.ru/assets/photo/articles/baza-znaniy/sm_full.aspx.png" alt="" >
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24" fill="#FBBC04">
 <path d="m0 0h24v24h-24z" fill="none"/>
 <path d="m6 18c0 0.55 0.45 1 1 1h1v3.5c0 0.83 0.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5v-3.5h2v3.5c0 0.83 0.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5v-3.5h1c0.55 0 1-0.45 1-1v-10h-12v10zm-2.5-10c-0.83 0-1.5 0.67-1.5 1.5v7c0 0.83 0.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5v-7c0-0.83-0.67-1.5-1.5-1.5zm17 0c-0.83 0-1.5 0.67-1.5 1.5v7c0 0.83 0.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5v-7c0-0.83-0.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c0.2-0.2 0.2-0.51 0-0.71s-0.51-0.2-0.71 0l-1.48 1.48c-0.79-0.4-1.69-0.63-2.64-0.63-0.96 0-1.86 0.23-2.66 0.63l-1.49-1.48c-0.2-0.2-0.51-0.2-0.71 0s-0.2 0.51 0 0.71l1.31 1.31c-1.48 1.09-2.45 2.84-2.45 4.83h12c0-1.99-0.97-3.75-2.47-4.84zm-5.53 2.84h-1v-1h1v1zm5 0h-1v-1h1v1z"/>
</svg>Apps for Android
<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24" fill="#FBBC04">
 <path d="m4 9h2v-2h-2v2zm0 8h2v-6h-2v6zm7-10h-2c-1.1 0-2 0.9-2 2v6c0 1.1 0.9 2 2 2h2c1.1 0 2-0.9 2-2v-6c0-1.1-0.9-2-2-2zm0 8h-2v-6h2v6zm9-6v-2h-4c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2h2v2h-4v2h4c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2h-2v-2h4z"/>
 <path d="m0 0h24v24h-24z" fill="none"/>
</svg>Apps for Iphone and Ipad`
})

let count = 1
for(let item of primary)
item.id = count
count++
console.log(primary)

mainContainer.addEventListener('click',(primary)=>{
    mainContainer.innerHTML = '';
  let everyEmail = document.createElement('div');
  everyEmail.setAttribute('class','eachDiv');
  mainContainer.appendChild(everyEmail)
  everyEmail.innerHTML = `<h1>${primary.messageTitle}</h1>`
  console.log(everyEmail)
  
})