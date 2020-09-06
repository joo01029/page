function scroll_a(){
    var location = document.querySelector("#first").offsetTop;
    location -= 300;
    window.scrollTo({top:location, behavior:'smooth'});
}
function scroll_b(id){
    var location = document.querySelector("#second").offsetTop;
    location -= 300;
    window.scrollTo({top:location, behavior:'smooth'});
}
function scroll_c(id){
    var location = document.querySelector("#third").offsetTop;
    location -= 300;
    window.scrollTo({top:location, behavior:'smooth'});
}