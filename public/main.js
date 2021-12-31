function myfunction() {
    document.getElementById ("contact").style.color= "red";
    document.getElementById ("contact").innerText.color= "red";
    document.getElementById("contact").innerHTML = "Hello JavaScript!";
    console.log("ok");
    alert("clicked");
}

function contactfunction() {
    alert("Thank you. We will get back to you");
}


var main = function () {
    "use strict";
    window.alert("hello world!");
};

$(document).ready(main);