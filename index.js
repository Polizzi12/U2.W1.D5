const nav = document.querySelector("container1");

function scrollfum(){
    if (window.scrollY > 350 ){
        nav.Style.backgroundColor = "white";
    }else{
        nav.Style.backgroundColor= "#ffc017";
    }
}
window.addEventListener("scroll", scrollfum);