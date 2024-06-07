document.addEventListener("DOMContentLoaded", (event) => {
    
    const menuBtn = document.getElementById("hamburger-menu");
    const menuItems = document.querySelectorAll(".menu-item");

    menuBtn.addEventListener("click", (event) => {
        menuItems.forEach(item => {
            item.classList.toggle("active");
        });
    });
});

