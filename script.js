import  {primary } from './data.js'
const mainContainer = document.querySelector('.container')
const sidebarSection = document.querySelector('.sidebar')
const inputValue = document.querySelector('#inputVal')
let cardId = document.getElementById('card2')

//let date = primary.new Date()

let dataMessages = primary;



function renderData(primary){
    mainContainer.innerHTML = '';
    for(let el of primary){
        containerBody(el)
        // console.log(el)
    }
}

renderData(dataMessages);
function containerBody(a){
   
    let card = `
    <div class="card" id='card2'>
    <input type="checkbox" name="" id="checkbox">
    <span class="material-icons">
    star_outline
    </span>
    
        <p>${a.senderName}</p>
        <p class='card-title'>${a.messageTitle}</p>
        <p class='third'>${a.date}</p>
    
</div>
    `
   mainContainer.innerHTML +=card;
}
mainContainer.addEventListener('click',function(e){
    console.log(e.target)
})


let button = document.querySelector('button')
button.addEventListener('mouseover',function(){
sidebarSection.style.width = '400px';
sidebarSection.innerHTML = `
<div>
<button>Compose
<span class="material-icons">
                    add_circle_outline
                    </span></button>
                    <span class="material-icons">
                inbox</span>Inbox
                <span class="material-icons">
                    star
                    </span>Starred
                    <span class="material-icons">
                        pending_actions
                        </span>Snoozed
                        <span class="material-icons">
                        send
                        </span>Sent Mail
                        <span class="material-icons">
                                save_as
                                </span>Draft
                                <span class="material-icons">
                                    label
                                    </span>Important
                                    <span class="material-icons">
                                    keyboard_arrow_down
                                    </span> More
                                    <p>Meet</p>
                                    </div>



                                    `

                                })
                                
                                button.addEventListener('mouseout', () => {
                                   sidebarSection.style.width = '100px';    
                                    
                                  });                        


// function hoverOver(a){
//     for(let i = 0; i<data.length; i++){
//         document.getElementById('card2').style.backgroundColor = 'red';
//         cardId(a[id])

//     }
// }

// cardId.addEventListener('click',(a)=>{
//  cardId.innerHTML = `<div class='container'>
//  <a>${a.attachments.icon}</a>
//  <h1>${a.messageTitle}</h1>
//  <h2>${a.senderEmail}</h2>
//  <p>${a.messages.message}</p>
//  </div>`
 
// })









