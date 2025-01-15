var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('I am a 2nd year Computer Science Student in UNSW.') //Add your own tagline
  .pauseFor(3000)
  .start()


var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: 'assets/snow.jpg', //change image for intro section if desired
        blendingMode: 'multiply',
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 8000
        }
    }
});

//BUTTON 4
var modal4 = document.getElementById("modal4");

// Get the button that opens the modal
var btnModal4 = document.getElementById("btn4");

// Get the <span> element that closes the modal
var spanModal4 = document.getElementsByClassName("closeModal4")[0];

// When the user clicks on the button, open the modal
btnModal4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModal4.onclick = function() {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

//BUTTON 5
var modal5 = document.getElementById("modal5");

// Get the button that opens the modal
var btnModal5 = document.getElementById("btn5");

// Get the <span> element that closes the modal
var spanModal5 = document.getElementsByClassName("closeModal5")[0];

// When the user clicks on the button, open the modal
btnModal5.onclick = function() {
  modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModal5.onclick = function() {
  modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}

//HOBBY MODALS

//BUTTON HOBBY 1
var modalHobby1 = document.getElementById("modalHobby1");

// Get the button that opens the modal
var btnHobby1 = document.getElementById("hobbyBtn1");

// Get the <span> element that closes the modal
var spanModalHobby1 = document.getElementsByClassName("closeModalHobby1")[0];

// When the user clicks on the button, open the modal
btnHobby1.onclick = function() {
  modalHobby1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModalHobby1.onclick = function() {
  modalHobby1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalHobby1) {
    modalHobby1.style.display = "none";
  }
}

//BUTTON HOBBY 2
var modalHobby2 = document.getElementById("modalHobby2");

// Get the button that opens the modal
var btnHobby2 = document.getElementById("hobbyBtn2");

// Get the <span> element that closes the modal
var spanModalHobby2 = document.getElementsByClassName("closeModalHobby2")[0];

// When the user clicks on the button, open the modal
btnHobby2.onclick = function() {
  modalHobby2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModalHobby2.onclick = function() {
  modalHobby2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalHobby2) {
    modalHobby2.style.display = "none";
  }
}
