document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");


    if(button && menu){

        button.addEventListener("click", () => {

            menu.classList.toggle("hidden");

        });

    }

});