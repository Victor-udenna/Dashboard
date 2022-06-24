// MERCHANT DASHBOARD

// drop down in payment button marchant dashboard


function payMentfunc() {
    document.querySelector('#paymentSubList').classList.toggle('open')
}
let ac = document.querySelector('#paymentBtn');
ac.addEventListener('click', payMentfunc)

// drop down in report button marchant dashboard

function rePortfunction() {
    document.querySelector('#report_subList').classList.toggle('open')
}
let y = document.querySelector('#report_btn');
y.addEventListener('click', rePortfunction)


// drop down in settings button marchant dashboard

function merchantSetting() {
    document.querySelector('#Accseting_subList').classList.toggle('open')
}
let x = document.querySelector('#accsetting_btn');
x.addEventListener('click', merchantSetting)


// drop down in people button marchant dashboard
function pplefunction() {
    document.querySelector('#people_subList').classList.toggle('open')
}
let z = document.querySelector('#people_btn');
z.addEventListener('click', pplefunction)