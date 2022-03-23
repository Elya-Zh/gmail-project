let data = [
    {id:1,
    name:'LinkedIn',
    title:'84 Lumber and others share their thoughts on LinkedIn',
    date:'18 march'},
    {id:2,
        name:'Zillow',
        title:'60626 Market Report',
        date:'18 march'},
        {id:3,
            name:'Bank of America',
            title:'Hello dear user, your statement is available in Mobile and Online Banking',
            date:'15 march'},
            {id:4,
                name:'OfferUp ',
                title:'Can’t find what you’re looking for in your neighborhood? 🔎🏘 Try shopping nationwide',
                date:'18 march'},
                {id:5,
                    name:'LinkedIn',
                    title:'84 Lumber and others share their thoughts on LinkedIn',
                    date:'13 march'},
                    {id:6,
                        name:'Turing - U.S. Software Jobs',
                        title:'Elya-Zh, We have awesome remote U.S. jobs waiting for engineers like you. 2',
                        date:'11 march'},

                        {id:7,
                            name:'MoneyGram',
                            title:'You’ve earned a reward – don’t miss it!',
                            date:'11 march'},
                            {id:8,
                                name:'Macysonline.com',
                                title:'Credit Card - Minimum Payment Due Alert',
                                date:'11 march'},
                                {id:9,
                                    name:'Olive-Harvey College Adult Education',
                                    title:'ACTION REQUIRED - Update your student information',
                                    date:'13 march'},
                                    {id:10,
                                        name:'support@l.com',
                                        title:'[Launch School] Community Update - March 11, 2022',
                                        date:'11 march'},
                                        {id:11,
                                            name:'Veiled Collection',
                                            title:'New Veiled Lounge Out Now!',
                                            date:'10 march'},
                                            {id:12,
                                                name:'aselwilliams ',
                                                title:'Re: [seytechschool/22-2-team2] compared numbers (PR #39)',
                                                date:'10 march'},
                                                {id:13,
                                                    name:'MoneyGram',
                                                    title:'You’ve earned a reward – don’t miss it!',
                                                    date:'11 march'},
                                                    {id:14,
                                                        name:'Macysonline.com',
                                                        title:'Credit Card - Minimum Payment Due Alert',
                                                        date:'11 march'},
                                                        {id:15,
                                                            name:'Olive-Harvey College Adult Education',
                                                            title:'ACTION REQUIRED - Update your student information',
                                                            date:'13 march'},
                                                            {id:16,
                                                                name:'support@l.com',
                                                                title:'[Launch School] Community Update - March 11, 2022',
                                                                date:'11 march'},
                                                                {id:17,
                                                                    name:'Veiled Collection',
                                                                    title:'New Veiled Lounge Out Now!',
                                                                    date:'10 march'},
                                                                    {id:18,
                                                                        name:'aselwilliams ',
                                                                        title:'Re: [seytechschool/22-2-team2] compared numbers (PR #39)',
                                                                        date:'10 march'}



]

const mainContainer = document.querySelector('.container')
const sidebarSection = document.querySelector('.sidebar')
const inputValue = document.querySelector('#inputVal')

function containerBody(a){
   
    let card = document.createElement('div');
   card.innerHTML = `
    <div class="card card2">
    <input type="checkbox" name="" id="checkbox">
    <span class="material-icons">
    star_outline
    </span>
    
        <p>${a.name}</p>
        <p class='card-title'>${a.title}</p>
        <p class='third'>${a.date}</p>
    
</div>
    `
   mainContainer.appendChild(card)
}
for(let i = 0; i < data.length; i++){
    containerBody(data[i]);

}
let button = document.querySelector('button')
button.addEventListener('mouseover',function(event){
sidebarSection.style.width = '400px';
sidebarSection.innerHTML = `
<div class = 'sidebar-hidden'
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


card.addEventListener('mouseover',function(){
    
})    
mainContainer.appendChild(card2)
// for(let i = 0; i < data.length; i++){
//     mainContainer(data[i]);

                                







