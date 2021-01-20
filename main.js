console.log("Ingen <body> finns i Elements ännu!");

window.onload = function(){
    console.log("<body> finns i Elements, \
    HTML strukturen har laddat klart");

    let paragraph = document.getElementById("para");
    paragraph.innerHTML = "blah blath";
}