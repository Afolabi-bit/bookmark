var tab = document.querySelectorAll('.tab');
var tabContent = document.querySelectorAll('.tab-content');
var faq = document.querySelectorAll('.question');

function removeActive(){
    tab.forEach((item) => item.classList.remove('active'))
    tabContent.forEach((item) => item.classList.remove('visible'))
}

function removeDisplay(){
    faq.forEach(item => item.classList.remove('display'))
}



function switchTabs(e){
   e.preventDefault();
   removeActive();

   //switch tabs 
   let activeTab = document.querySelector(`#${this.id}`);
   activeTab.classList.add('active')
   let displayTab = document.querySelector(`#${this.id}-content`);
   displayTab.classList.add('visible');
}

function openQuestion(e){
    e.preventDefault();
    removeDisplay();
    let answer = document
    .querySelector(`#${this.id}-answer`);

    let icon = document
    .querySelector(`#${this.id} .fa-chevron-down`);

    let questionText =  document
    .querySelector(`#${this.id} p`);

    //display answer
    answer.classList.toggle('display');

    //update icon position and color
    icon.classList.toggle('fa-chevron-up')

    questionText.classList.toggle('color')

}

tab.forEach((item) => item.addEventListener('click', switchTabs)
);

faq.forEach((item) => item.addEventListener('click', openQuestion));


//EMAIL VALIDATION

var form = document.querySelector('#form');
var email = document.querySelector('#email');
var message = document.querySelector('#error-msg');
var validity = document.querySelector('#validity');

function removeClasses() {
    validity.classList.remove('error');
    validity.classList.remove('success');
    message.textContent = '';
}

function timeout() {
    setTimeout(
        removeClasses,5000
    )
}



function isEmailValid(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@']+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}

function validate(e){
e.preventDefault();

const emailVal = email.value.trim();

removeClasses();
if(emailVal === '' || emailVal == null) {
  validity.classList.add('error');
  message.textContent = 'Whoops, email cannot be empty';
} else if (!isEmailValid(emailVal)){
    validity.classList.add('error');
    message.textContent = "Oops, make sure it's a valid email";
} else {
    validity.classList.add('success');
    message.textContent = "Expect to hear from us sooner";
}
timeout();
};

form.addEventListener('submit', validate);


//NAVIGATION

var menu = document.querySelector('#menu')
var close = document.querySelector('#close-btn')
var container= document.querySelector('#main')
var link = document.querySelectorAll('.n')

menu.addEventListener('click', ()=> {
    container.classList.add('change')
    console.log(link)
})

close.addEventListener('click', ()=> {
    container.classList.remove('change')
})

link.forEach((item) => item.addEventListener('click', () => {
    container.classList.remove('change')
}))

//scroll behaviour on internal links only

var root = document.querySelector('html')

var allLinks = document.querySelectorAll('a');
 allLinks.forEach((item) => {
     item.addEventListener('click', ()=>{
        let attr = item.getAttribute('href');
        let hasAttr = item.hasAttribute('target');
        console.log(hasAttr)
        if(attr !== '#' || !hasAttr){
            root.style.scrollBehavior = 'smooth'
            console.log('working')
        }
        //remove scroll behaviour after 1000ms
        setTimeout(() => {
    root.style.scrollBehavior = "unset";
  }, 1000);
     })
 })