let navBar = document.getElementById("navi");

window.onscroll() = function() {
  navSticky()
};

let sticky = navBar.offsetTop;

function navSticky() {
  if (window.pageYOffset  > sticky) {
    navBar.classList.add('sticky')
  } else {
    navBar.classList.remove('sticky')
  }
};

