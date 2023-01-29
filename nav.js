const menuToggle = document.querySelector("#menu-toggle");
const activeElements = document.querySelectorAll(".active-element");

menuToggle.addEventListener('click',function(){
    for(let active=0;active<activeElements.length;active++) {
        activeElements[active].classList.toggle("active");
    }

    console.log(menuToggle.childNodes[1]);

    const navBtnIcon = menuToggle.childNodes[1];
    navBtnIcon.classList.toggle("bi-x-lg");

    const pageBG = document.querySelector(".main-container");

    if(navBtnIcon.classList.contains("bi-x-lg")){
        pageBG.style.filter="blur(3px)";
    }else{
        setTimeout(function(){
            pageBG.style.filter="blur(0px)";
        }, 500);
    }

    const listItems=document.querySelectorAll(".main-nav-list a");

    listItems.forEach(function (item,index) {
        console.log((item.style.transition = `all .5s linear ${index *0.3}s`));
    });
});