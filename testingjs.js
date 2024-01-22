











































































































function savename() {
    var name = document.querySelector(".textbox").value;
    localStorage.setItem("Name", name);
}

document.addEventListener("DOMContentLoaded", function() {
    var Name = localStorage.getItem('Name');
    if (Name) {
        document.getElementById("Name").textContent = 'Will You Be My Girlfriend ' + Name + '?';
    }
});

function no(){
    var element = document.getElementById("Click");

    var newleft = Math.random() *(window.innerWidth - element.offsetWidth);
    var newtop = Math.random() *(window.innerHeight - element.offsetHeight);

    element.style.left = newleft+"px";
    element.style.top = newtop+"px";
}

function showText() {
    // Remove existing elements
    var existingElements = document.querySelectorAll('.boxposition, .yesposition, .noposition');
    existingElements.forEach(function (element) {
        element.remove();
    });

    // Create a new element for the big text overlay
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Create a new element for the big text
    var textElement = document.createElement('p');
    textElement.className = 'happy';
    textElement.textContent = "You're now my Girlfriend";
    overlay.appendChild(textElement);
}