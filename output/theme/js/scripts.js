document.addEventListener("DOMContentLoaded", (event) => {
   
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };
    
    const logo = document.getElementById("logo");
    let dice = getRandomInt(5);

    if (dice === 0) {
        logo.classList.add("micro5");
    } else if (dice === 1) {
        logo.classList.add("silkscreen");
    } else if (dice === 2) {
        logo.classList.add("jac-bastarda");
    } else if (dice === 3) {
        logo.classList.add("jac12");
    } else {
        logo.classList.add("pixelify")
    }

    console.log(dice);


    const menuBtn = document.getElementById("hamburger-menu");
    const menuItems = document.querySelectorAll(".menu-item");

    menuBtn.addEventListener("click", (event) => {
        menuItems.forEach(item => {
            item.classList.toggle("active");
        });
    });
});

