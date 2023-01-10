


//-------------------------------------------------------tilbage til temaer-------------------------------------------------------//
const btn1 = document.querySelector("#tilbagepil");

function tilbage() {
  window.location.href = "temaer.html";
}

btn1.addEventListener("click", tilbage);

//-------------------------------------------------------tilbage til top--------------------------------------------------------------//
//Get the button:
mybutton = document.getElementById("myBtn");

// når man scroller ned 20px fra toppen af dokumentet, hvis knappen
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// når man klikker på knapper scroller den op
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



