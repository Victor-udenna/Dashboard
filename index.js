// alert("Unable to load chart feed, try reconnectiong to a stronger internet connection");

function showMore() {
    document.querySelector('#hidden-element').classList.toggle('open')
}

let btn = document.querySelector('#seeall_btn');

btn.addEventListener('click', showMore)
