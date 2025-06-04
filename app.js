const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list-item.active");

dark.addEventListener("click", () => {
    sidebar.className = "sidebar";
    activeListItem.className = "list-item active";

    const activeColor = document.querySelector(".color-box.dark");
    console.log(activeColor)
    activeColor.className = "color-box dark active";
    console.log(activeColor.className)
    //dark.style.display = 'none';
});


night.addEventListener("click", () => {
    sidebar.className = "sidebar night";
    activeListItem.className = "list-item night active";
    activate("night");

    
    //night.style.display = 'none';
    //const activeColor = document.querySelector(".color-box.night");
    //onsole.log(activeColor)
    //activeColor.className = "color-box night active";
    //console.log(activeColor.className)
    
});

light.addEventListener("click", () => {
    sidebar.className = "sidebar light";
    activeListItem.className = "list-item light active";
    activate("light");

});

function activate(color){
    let name = ".color-box." + color;
    const activeColor = document.querySelector(name);


    //const activeColor = document.querySelector(".color-box.night");
    console.log(activeColor)
    activeColor.className = "color-box night active";

}