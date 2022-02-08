const header = document.querySelector(".logo");
 
 window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if(top >= 80){
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }

 }