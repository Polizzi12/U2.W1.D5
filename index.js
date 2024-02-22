const nav = document.getElementById("container1");
const button = document.getElementById("boxblack");


function scrollfum(){
    if (window.scrollY > 350 ){
        nav.style= "background-color: white; transition: all 0.5s;"
        button.style= "background-color: green; transition: all 0.5s;"
    }else{
        nav.style="background-color: #ffc017; transition: all 0.5s;";
        button.style="background-color: black; trnasition: all 0.5s;";
    }
}
window.addEventListener("scroll", scrollfum);