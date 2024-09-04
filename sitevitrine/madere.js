const btn = document.querySelector(".btn1");
const menu = document.querySelector('.liste-nav');

btn.addEventListener("click", presentation);

function presentation(){
    btn.classList.toggle("active");
}


btn.addEventListener('click', () => {
    menu.classList.toggle('active')
})

const alllinks = document.querySelectorAll('.item-nav');

alllinks.forEach(item=> {

    item.addEventListener('click', () =>{
        menu.classList.toggle('active')
    })
})