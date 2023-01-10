
// Get the button:
let mybutton = document.getElementById("toUp");

//the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//slider 
const images = document.querySelectorAll(".image-container img");
let i = 0; // current slide
let j = 3; // total slides

function next(){
  document.getElementById("content" + (i+1)).classList.remove("active");
  i = ( j + i + 1) % j;
  document.getElementById("content" + (i+1)).classList.add("active");
  indicator( i+ 1 );
}
function prev(){
  document.getElementById("content" + (i+1)).classList.remove("active");
  i = (j + i - 1) % j;
  document.getElementById("content" + (i+1)).classList.add("active");
  indicator(i+1);
}
function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#076bb8";
}
